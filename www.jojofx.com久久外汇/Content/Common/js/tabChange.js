
(function () {
    if (window['ZA'] == null) {
        window['ZA'] = {};
    }

    /*
        调用方法
        ZA.tabChange('#demo1 ul li','#demo1 div','thisTabs','0','mouseover');
        必须等 dom 结构加载完成后才可以调用

        参数1：tabs可切换的标题元素组
        参数2：对应需要显示的内容元数组
        参数3：当前tabs选中状态
        参数4：0 表示页面载入显示第几个 tab
        参数5： 触发切换的事件
    */
    function tabChange(tabs, tabBox, currClassName, indexBox, eventName) {

        //获取 tabs 对象
        var tab = $(tabs);

        //获取 tabBox 对象
        var box = $(tabBox);

        //判断初始页码，没有传默认为第一页
        if (!indexBox) {
            indexBox = 0;
        }

        //判断是否有传 事件进来。如果没有那么就默认为mouseenter事件
        if (eventName) {
            var eventNameText = eventName;
        } else {
            var eventNameText = 'mouseenter';
        }

        //初始页面选中效果
        tab.eq(indexBox).addClass(currClassName);
        box.children().hide().eq(indexBox).show();

        //绑定切换方法
        tab.each(function (i) {
            $(this).bind(eventNameText, function () {
                tab.removeClass(currClassName);
                $(this).addClass(currClassName);
                box.children().hide().eq(i).show();
            })
        })
    }

    /*
        调用方法
        ZA.change('#bannerImgesBox', true, 'bannerTextBox', true, true, 3000, 'click');
        最简洁调用方法
        ZA.change('#bannerImgesBox');
        必须等 dom 结构加载完成后才可以调用

        参数1：changeId 要轮播的广告 id （必须）
        参数2：isTab 是否自动切换 （默认为 true）
        参数3：changeNum 要创建的小圆点指示 class 名称，默认为 bannerTextBox，默认即可 （为空默认为 bannerTextBox）
        参数4：isFlag 是否启用右下角 小圆点标识 参数 true 或者 false （为空默认为 false）
        参数5：isBut 是否启用 左右切换按钮 参数 true 或者 false （为空默认为 false）
        参数6：time 自动切换时间 单位毫秒 （为空默认为 2000 毫秒 ）
        参数7：eventName 右下角小圆点的事件,默认为 mouseenter

    */
    function change(changeId, isTab, changeNum, isFlag, isBut, time, eventName) {

        // 如果没传 isTab 参数，默认为 true
        if (typeof isTab == 'undefined' || typeof isTab == 'string') {
            isTab = true;
        }

        // 如果 changeNum 参数为空则默认值为 bannerTextBox
        if (!changeNum) {
            changeNum = 'bannerTextBox';
        }

        // 如果没传 isFlag 参数，默认为 false
        if (!isFlag) {
            isFlag = false;
        }

        // 如果没传 isBut 参数，默认为 false
        if (!isBut) {
            isBut = false;
        }

        //如果没传 time 参数，默认为 2000 毫秒
        if (!time) {
            time = 2000;
        }

        // 如果 eventName 参数为空则默认事件为 mouseenter
        if (!eventName) {
            eventName = 'mouseenter';
        }

        // 标识，用于确定当前是第几个广告
        var Num = 0;

        // 获取 id
        var box = $(changeId);

        // 如果广告大于1个才轮播，不然直接显示
        if (box.children().length > 1) {
            // 初始 a 为绝对定位
            box.children().css({ 'position': 'absolute' });
            // 默认显示第一个
            box.children().hide().eq(0).show();

            // 根据参数 isFlag 确定是否有小圆点切换
            if (isFlag) {
                var html = '';
                // 根据有几个广告来遍历下面的小圆点
                for (var i = 0; i < box.children().length; i++) {
                    html += '<li><a href="###">' + i + '</a></li>';
                }

                html = '<div class="' + changeNum + '"><ul>' + html + '</ul></div>';
                // 添加到 box 后面
                box.after(html);

                // 获取 class
                var changeN = $('.' + changeNum);

                // 默认显示第一个
                changeN.find('li').eq(0).addClass('thisHover');

                // 绑定小圆点事件
                changeN.on(eventName, 'li', function () {
                    Num = $(this).index();
                    changeEq(Num);
                });

                // 设置居中
                changeN.css({ 'width': changeN.find('ul').width(), 'margin-left': -changeN.find('ul').width() / 2 });

            }

            // 根据参数 isBut 确定是否有左右切换按钮
            if (isBut) {
                var html = '<a class="HotADs_arrow arrow_prev"></a><a class="HotADs_arrow arrow_next"></a>';
                // 添加左右切换按钮html
                box.after(html);

                // 左切换按钮事件
                $('.arrow_prev').on('click', function () {
                    Num--;
                    //如果当前页面是第一页，就跳转到最后一页
                    if (Num < 0) {
                        Num = box.children().length - 1;
                    }
                    changeEq(Num);
                });

                // 右切换按钮事件
                $('.arrow_next').on('click', function () {
                    Num++;
                    //如果当前页面是最后页，就跳转到第一页
                    if (Num > box.children().length - 1) {
                        Num = 0;
                    }
                    changeEq(Num);
                })
            }

            // 鼠标移动上去停止自动轮播
            box.parent().hover(function () {
                // 判断是否有左右切换按钮参数
                if (isBut) {
                    // 移入时 左右切换按 钮显示
                    $(this).find('.HotADs_arrow').fadeIn();
                }

                // 判断是否轮播
                if (isTab) {
                    clearInterval(t1);
                }
            }, function () {
                // 判断是否有左右切换按钮参数
                if (isBut) {
                    // 移出时 左右切换按 钮显示
                    $(this).find('.HotADs_arrow').fadeOut();
                }

                // 判断是否轮播
                if (isTab) {
                    t1 = setInterval(function () { AutoChange() }, time);
                }
            });

            // 判断是否轮播
            if (isTab) {
                // 自动轮播调用 *important
                var t1 = setInterval(function () { AutoChange() }, time);
            }

        } else {
            // 只有一个广告时直接显示，无轮播效果
            box.children().show();
        }

        // 根据 eq 来切换
        function changeEq(eq) {
            if (isFlag) {
                // 当前小圆点
                changeN.find('li').eq(eq).addClass('thisHover').siblings().removeClass('thisHover');
            }
            // 广告的切换
            box.children().eq(eq).fadeIn().siblings().fadeOut();
        }

        // 自动切换方法
        function AutoChange() {
            changeEq(Num);
            if (Num < box.children().length - 1) {
                Num++;
            } else {
                Num = 0;
            }
        }

    }

    window['ZA']['tabChange'] = tabChange;
    window['ZA']['change'] = change;

})();