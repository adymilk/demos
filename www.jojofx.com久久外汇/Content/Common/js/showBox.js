// JavaScript Document
(function () {
    if (window.ZA == null) {
        window['ZA'] = {};
    }

    function showBox(boxId, clsObj, size, callBack) {
        var alertBox = $(boxId);
        if (alertBox.html() == null) {
            alert('ID为' + boxId + '的HTML结构不存在，请检查！');
        }
        var boxBg = alertBox.find('.alert_bg');
        var boxPos = alertBox.find('.alert_pos');
        var boxBox = alertBox.find('.alert_box');
        // ie6 垂直居中方法
        if (!-[1, ] && window.XMLHttpRequest) {
            $('select').css('visibility', 'hidden');
            // 获取body高度
            var body_Height = $('body').height();
            // 获取可见高度
            var documentH = document.documentElement.clientHeight;
            // 判断页面高度是否小于一屏，设置遮照高度
            if (body_Height > documentH) {
                boxBg.height(body_Height);
            } else {
                boxBg.height(documentH);
            }
            // 获取居中Y坐标 可见区域的 2/1
            var boxTop = documentH / 2;
            boxPos.css({ 'top': boxTop + document.documentElement.scrollTop + 'px' });
        }
        if (clsObj == null) {
            alertBox.find('.alert_close').hide();
        } else {
            closeBox(alertBox, clsObj, callBack);
        }
        $('body').css('overflow','hidden');
        alertBox.fadeIn();
        if (size) {
            boxPos.css({ 'width': size[0], 'height': size[1] });
        } else {
            var pos_Height = boxBox.find('.alert_header').outerHeight(true) + boxBox.find('.alert_main').outerHeight(true);
            var pos_Width = boxBox.find('.alert_main').outerWidth(true);
            boxPos.css({ 'width': pos_Width, 'height': pos_Height });
        }


    }

    // 关闭弹层
    function closeBox(alertBox, obj, callBack) {
        //if (obj) {
        alertBox.find(obj).bind('click', function () {
            if (callBack) {
                callBack();
            }
            $('body').css('overflow','auto');
            alertBox.fadeOut();
            alertBox.find(obj).unbind();
            if (!-[1, ] && !window.XMLHttpRequest) {
                if (!$('.alert').is(":visible")) {
                    $('select').css('visibility', '');
                }
            }
        })
        //}
    }

    window['ZA']['showBox'] = showBox;
})()