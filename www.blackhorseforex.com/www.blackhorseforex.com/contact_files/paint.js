define(['custom'], function() {
    var paint = {
        tool: {}, // 工具渲染视图
        template: {} // 模版渲染视图
    };

    /**
     * 字符串转译
     * @param string s 字符串
     */
    paint.tool.translate = function(s) {
        s = s.replace(/&/g, '&amp;');
        s = s.replace(/</g, '&lt;');
        s = s.replace(/>/g, '&gt;');
        s = s.replace(/"/g, '&quot;');
        s = s.replace(/'/g, '&#039;');
        return s;
    };

    /**
     * 获取偏离值
     * @param int w 容器宽度0.5
     * @param int t 上偏离
     * @param int l 左偏离
     */
    paint.tool.deviate = function(w, t, l) {
        var style = '';

        if (t >= 0 && t <= 100) {
            var height = jQuery(window).height();
            var ratio = w / height * 100;
            if (t < ratio) t = ratio;
            else if (t > 100 - ratio) t = 100 - ratio;

            style += 'top:' + t + '%;';
        };

        if (l >= 0 && l <= 100) {
            var width = jQuery(window).width();
            var ratio = w / width * 100;
            if (l < ratio) l = ratio;
            else if (l > 100 - ratio) l = 100 - ratio;

            style += 'left:' + l + '%;';
        };

        return style;
    };
    /**
     * 随机客服
     */
    paint.tool.rondomid = function(uid) {
        var res = null,
            l, k, list;

        if (uid) {
            var arr = ['onlist', 'offlist'];
            for (var i = 0; i < arr.length; i++) {
                var val = paint.options[arr[i]];
                for (var j = 0; j < val.length; j++) {
                    if (val[j].uid == uid) return val[j];
                }
            }
            return res;
        }

        list = paint.options.onlist.length ? 'onlist' : (paint.options.offlist.length ? 'offlist' : '');
        if (!list) return res;

        k = Math.floor(Math.random() * paint.options[list].length);
        res = paint.options[list][k];
        return res;
    };

    /**
     * 获取客服网页链接
     */
    paint.tool.getsrc = function(uid) {
        var params = [];
        color = paint.options.window_color ? paint.options.window_color.substr(1) : '18b4ed';
        params.push('site_id=' + paint.options.siteid);
        params.push('coid=' + paint.options.coid);
        params.push('srand=' + Math.random());
        params.push('uid=' + uid);
        params.push('template=talk_mini');
        params.push('color=' + color);
        if (paint.options.goodsid) params.push('goods_id=' + paint.options.goodsid);

        return paint.options.path + 'kf/talk_mini?' + params.join('&');
    };

    paint.tool.now = 0;
    paint.tool.tab_num = -1;
    paint.tool.msg = '';
    paint.tool.content = '';
    paint.tool.timer = null;
    paint.tool.med_timer = null;
    paint.tool.tab_timer = null;
    paint.tool.handle = function() {
        var _this = this;
        $('.ichat_new_list li').each(function(index) {
            var $li = $(this);
            // 定义计时器
            $li[0].timer = null;

            // 添加客户鼠标移入事件
            $li.find('.ichat_new_kf1, .ichat_new_kf2').hover(function() {
                // 请求所有计时器
                $('.ichat_new_list li').each(function() {
                    clearTimeout($(this)[0].timer)
                });

    			if (_this.tab_num == index && !$('.ichat_side').is(':hidden')) return;

                $li[0].timer = setTimeout(function() {

                    _this.tab_num = index;
                    _this.change(_this.tab_num);

                }, 250);

                // 显示侧面详情
                _this.displayDetail($li.data('id'), index);
            }, function() {
                clearTimeout(_this.med_timer);
            });
        });

        this.initTab();

        $('.ichat_new').hover(function() {
            $(this).addClass('ichat_new-active');
            clearInterval(_this.tab_timer);
        }, function() {
            $(this).removeClass('ichat_new-active');
            $('.ichat_side_main_more dt embed').remove();

            _this.initTab();
            _this.out();
        });
    };
    //启动人员切换
    paint.tool.initTab = function() {
        var _this = this;
        clearInterval(this.tab_timer);

        this.tab_timer = setInterval(function() {
            _this.tab_num++;

            if (_this.tab_num == $('.ichat_new_list li').length) {
                _this.tab_num = 0;
            }

            _this.change(_this.tab_num);
        }, 2000);
    };

    // 切换人员
    paint.tool.change = function(n) {
        $('.ichat_new_list li')
            .removeClass('ichat_new_current')
            .eq(n)
            .removeClass('ichat_new_out')
            .addClass('ichat_new_current');

        if (window.navigator.userAgent.toLowerCase().indexOf('msie 9') != -1) {
            $('.ichat_new_current .ichat_new_kf2').css({
                'opacity': 1
            });
        }

        $('.ichat_new_list li').eq(n).find('.ichat_new_kf2').show();
    };

    paint.tool.displayDetail = function(uid, n) {
		var _this = this;
		var kfInfo = paint.tool.getKfInfo(uid);

        $('.ichat_side').data('uid', uid);
		// kfInfo.kf_header_pic1 = 'http://fastued3.jia.com/image/kf/new/kf-m5.jpg';
		// kfInfo.kf_header_pic2 = 'http://ued.jia.com/media/kf/new/tsfk.swf';
		// 客服头像
		$('.ichat_side_header img').attr('src', kfInfo.kf_header_pic1);
		// 客服名称
		 var title = (kfInfo.nickname ? paint.tool.translate(kfInfo.nickname) : kfInfo.uid);
		$('.ichat_side_header span').html(title);

		// 视频文件
		$('.ichat_side_main_more dt img').attr('src', kfInfo.kf_header_pic1);
		$('.ichat_side_main_more dt embed').remove();

		$('.ichat_side_main_more dt').append('<embed src="' + kfInfo.kf_header_pic2 + '" width="168" height="168" loop="false" autostart="true" class="zIn3">');

		// 客服组信息
		// kfInfo.kf_intro = '装修设计专家组-多位从业10余年知名装修设计师组成的专家组，为你推荐适合您的装修风格';
		var intro_title = paint.tool.translate(kfInfo.kf_intro.split('-')[0] || '');
		var intro_intro = paint.tool.translate(kfInfo.kf_intro.split('-')[1] || '');

		$('.ichat_side_main_more dd h6').html(intro_title);
		$('.ichat_side_main_more dd p').html(intro_intro);

		// 回复信息
		var call_info = '您好，您已接入' + intro_title + '，请问有什么可以帮您？';
		this.msg = call_info;
		paint.tool.inputFn();

		paint.tool.move();
    };

    paint.tool.inputFn = function() {
    	var _this = this;

    	var oDate = new Date();
    	var h = paint.tool.toDoub(oDate.getHours());
    	var m = paint.tool.toDoub(oDate.getMinutes());
    	var s = paint.tool.toDoub(oDate.getSeconds());

    	$('.inputTime').html(h + ':' + m + ':' + s);

    	this.now = 0;
    	clearInterval(this.timer);

    	this.timer = setInterval(function() {
    		_this.now++;

    		if (_this.now == _this.msg.length) {
    			clearInterval(_this.timer);
    			_this.timer = null;
    		}

    		_this.content = _this.msg.substring(0, _this.now);
    		$('.ichat_side_main_msg').html(_this.content);
    	}, 200);
    };

    paint.tool.toDoub = function(n) {
    	return n < 10 ? '0' + n : '' + n;
    };

    paint.tool.move = function() {
    	var _this = this;
    	var params = {
    		'left': -415,
    		'opacity': 1,
    		'z-index': 1
    	}

    	if (+paint.options.place > 0 && +paint.options.place < 4) {
    		params['left'] = 100;
    	}

    	$('.ichat_side').show().stop().animate(params);
    };

    paint.tool.out = function() {
    	var _this = this;

    	var params = {
    		'left': 0,
    		'opacity': 0,
    		'z-index': -1
    	}

    	if (+paint.options.place > 0 && +paint.options.place < 4) {
    		params['left'] = -415;
    	}

    	$('.ichat_side').stop().animate(params, function() {
    		$('.ichat_side').hide();
    	});
    };

    paint.tool.getKfInfo = function(uid) {
    	var list = paint.options.onlist.concat(paint.options.offlist);
    	var result = null;
    	$.each(list, function(key, value) {
    		if(uid.toString() == value.uid.toString()) {
    			result = value;
    			return false;
    		}
    	});
    	return result;
    };

    /**
     * 右下角聊天框
     */
    paint.template.chat = function(uid) {
        var tmpl = 'chat';
        var id = paint.tool.rondomid(uid);
        if (!id) return;


        var $html = $('.ichat_mini'),
            f;
        if (!$html.length) {
            f = true;
            require(['template'], function(Template) {
                var html = Template[tmpl].replace(/htp/g, paint.options.path + 'static/images');
                $html = $(html);
                $html = paint.template.updatechat($html, id);
                $('body').append($html);
            });
        } else {
            paint.template.updatechat($html, id);
        }

        if (paint.options.templatechat) return;
        // 设置为公共方法
        paint.options.templatechat = paint.template.chat;
    };
    /**
     * 更新迷你窗口
     */
    paint.template.updatechat = function($html, id) {
        var text = '<i></i>客服' + (id.nickname || id.staruid);
        text += id.state == 1 ? '在线， 欢迎沟通' : '[离线]';

        $html
            .find('.im_open iframe').attr('src', paint.tool.getsrc(id.uid))
            .end()
            .find('.im_close').css('background', paint.options.window_color || '#18b4ed').find('dd').html(text);
        return $html
    };
    /**
     * 电脑端主动呼起模版
     */
    paint.template.call = function(time) {
        // var initval = paint.options.initval * 1000;
        var json_welcome = paint.options.json_welcome;
        var initval = (time || json_welcome.time_wait) * 1000;
        setTimeout(function() {
            var tmpl = '';
            var theme = parseInt(paint.options.theme.call);
            switch (theme) {
                default: tmpl = 'call';
            };

            require(['template'], function(Template) {
                jQuery('#ichat').append(Template[tmpl].replace(/htp/g, paint.options.path + '/static/images'));
                jQuery('.ichat_welcome').html(json_welcome.content);
                jQuery('.ichat_call dt').html(json_welcome.title);
                jQuery('.ichat_call dt, .ichat_call a.open').css({ 'background': json_welcome.color });
            });
        }, initval);

        if (paint.options.templatecall) return;
        paint.options.templatecall = paint.template.call;
    };

    /**
     * 电脑端在线模版
     */
    paint.template.on = function() {
        var tmpl = '';
        var theme = parseInt(paint.options.theme.on);
        // 判断渲染模板类型
        switch (theme) {
            case 1:
                tmpl = 'on_mini';
                break;
            case 2:
                tmpl = 'on';
                break;
            case 3:
                tmpl = 'spe';
                break;
            default:
                tmpl = 'on';
                break;
        };

        require(['template'], function(Template) {
            jQuery('#ichat').append(Template[tmpl].replace(/htp/g, paint.options.path + '/static/images'));
            var style = '';
            var place = parseInt(paint.options.place);
            switch (place) {
                case 1:
                    style = 'margin:0;top:0;left:0;';
                    break;
                case 2:
                    style = 'top:50%;left:0;';
                    break;
                case 3:
                    style = 'margin:0;bottom:0;left:0;';
                    break;
                case 4:
                    style = 'margin:0;top:0;right:0;';
                    break;
                case 6:
                    style = 'margin:0;bottom:0;right:0;';
                    break;
                default:
                    style = 'top:50%;right:0;';
            };

            var html = '';

            // 新样式特殊处理
            if (theme == 3) {
                jQuery('.ichat_new').attr('style', style);
                var list = paint.options.onlist.concat(paint.options.offlist);
                var l = list.length;
                for (var i = 0; i < l; i++) {
                    var v = list[i];
                    var icon = v.kf_header_pic1;
                    var name = '';
                    var title = (v.nickname ? paint.tool.translate(v.nickname) : v.staruid);

                    name = title.split('-')[1] || '';
                    title = title.split('-')[0];

                    var liclass = i == 0 ? 'ichat_new_current' : '';
                    html += '<li class="' + liclass + '" data-id="' + v.uid + '" onclick="Id_Model.call.open(' + v.uid + ');">' +
                        '<div class="ichat_new_kf1">' +
                        '<a href="javascript:void(0);">' +
                        '<img src="' + icon + '" width="27" height="27">' +
                        '<p>' +
                        '<span>' + title + '</span>' +
                        '</p>' +
                        '</a>' +
                        '</div>' +
                        '<div class="ichat_new_kf2">' +
                        '<a href="javascript:void(0);">' +
                        '<img src="' + icon + '" width="86" height="92">' +
                        '<div>' +
                        '<span>' + name + '</span>' +
                        '<p>' + title + '</p>' +
                        '</div>' +
                        '</a>' +
                        '</div>' +
                        '</li>';
                }
                jQuery('.ichat_new .ichat_new_list').html(html);
                // 绑定事件
                paint.tool.handle();
                //jQuery(document).on('click', '.ichat_new .ichat_side'
                jQuery('.ichat_new .ichat_side').click(function() {
                    var uid = $(this).data('uid');
                    if (!uid) return;

                    Id_Model.call.open(uid);
                });

                return;
            }
            jQuery('.ichat_on').attr('style', style);
            for (k in paint.options.onlist) {
                if (!paint.options.onlist.hasOwnProperty(k)) continue;
                var v = paint.options.onlist[k];
                html += '<a class="online" title="\u53d1\u8d77\u804a\u5929" onclick="Id_Model.call.open(' + v.uid + ');">' + (v.nickname ? paint.tool.translate(v.nickname) : v.staruid) + '</a>';
            };

            for (k in paint.options.offlist) {
                if (!paint.options.offlist.hasOwnProperty(k)) continue;
                var v = paint.options.offlist[k];
                html += '<a class="offline" title="\u79bb\u7ebf\u72b6\u6001" onclick="Id_Model.call.open(' + v.uid + ');">' + (v.nickname ? paint.tool.translate(v.nickname) : v.staruid) + '</a>';
            };

            jQuery('.ichat_on dd').html(html);
            jQuery('.ichat_on dl, .ichat_logo').css({ 'background': paint.options.color });
            jQuery('.ichat_on dd a:first').addClass("first");
            if (paint.options.tel.length > 0) jQuery('.ichat_hot').html('\u54A8\u8BE2\u70ED\u7EBF\uFF1A<br />' + paint.options.tel);
            else jQuery('.ichat_on div').remove();
        });
    };

    /**
     * 电脑端离线模版
     * @param object info 用户信息
     */
    paint.template.off = function(info) {
        if (+paint.options.json_leave_msg.open == 0) return;
        var tmpl = '';
        var theme = parseInt(paint.options.theme.off);
        switch (theme) {
            default: tmpl = 'off';
        };

        require(['template'], function(Template) {
            var json_leave_msg = paint.options.json_leave_msg;

            jQuery('#ichat').append(Template[tmpl].replace(/htp/g, paint.options.path + '/static/images'));

            // if(info.name) jQuery('.ichat_name').val(info.name);
            // if(info.tel) jQuery('.ichat_tel').val(info.tel);
            // if(info.addr) jQuery('.ichat_dr').val(info.addr);
            // if(info.email) jQuery('.ichat_email').val(info.email);

            var msg_conf = json_leave_msg.msg_conf;
            var $li_send = $('.ichat_off .ichat_send');
            var v = {
                'name': info.name || '请输入您的姓名',
                'phone': info.tel || '请输入您的手机号',
                'addr': info.addr || '请输入您现所在地地址',
                'email': info.email || '请输入您的联系邮箱',
                'company': '请输入您的公司'
            };
            var $h = '';
            if (msg_conf) {
                for (var i = 0; i < msg_conf.length; i++) {
                    var msg = msg_conf[i];
                    if (!+msg.is_show) continue;

                    $h = $('<li>' +
                        '<input class="ichat_' + msg.name + '" value="' + v[msg.name] + '" rel="' + v[msg.name] + '"' +
                        ' onfocus="Id_Model.off.txt(1, this);" onblur="Id_Model.off.txt(0, this);" type="text" />' +
                        '<p><i>*</i>' + msg.label + '</p>' +
                        '</li>');
                    $h.find('i')[+msg.is_require ? 'show' : 'hide']();
                    $li_send.before($h);
                }
            }

            var html = '';
            for (k in paint.options.offlist) {
                if (!paint.options.offlist.hasOwnProperty(k)) continue;
                var v = paint.options.offlist[k];
                var name = v.nickname ? paint.tool.translate(v.nickname) : v.staruid;
                html += '<a onclick="Id_Model.off.kf(' + v.uid + ', \'' + name + '\');">' + name + '</a>';
            };



            if (html) jQuery('.ichat_list').html(html);
            else jQuery('.ichat_kf').hide();
            jQuery('.ichat_off dt, .ichat_more a').css({ 'background': json_leave_msg.color });
        });
    };

    /**
     * 手机端在线模版
     */
    paint.template.m = function() {
        var theme = parseInt(paint.options.theme);
        var template = '';
        switch (theme) {
            case 1:
                var style = paint.tool.deviate(50, -1, parseInt(paint.options.place.left));
                template = '<a class="ichat_lnk" style="width:100px;margin:0 0 0 -50px;box-sizing:content-box;background:#18b4ed;position:fixed;bottom:0;' + style + 'z-index:100000;color:#fff;font-size:14px;line-height:30px;text-align:center;text-decoration:none;" onClick="Id_Model.call.open();"></a>';
                break;
            case 3:
                var style = paint.options.place.left == 1 ? 'left:0;' : 'right:0;';
                template = '<a class="ichat_lnk" style="width:15px;padding:10px 5px;margin:-42px 0 0;box-sizing:content-box;background:#18b4ed;position:fixed;top:50%;' + style + 'z-index:100000;color:#fff;font-size:14px;line-height:16px;text-align:center;text-decoration:none;box-sizing:content-box;" onClick="Id_Model.call.open();"></a>';
                break;
            case 4:
                template = '<div style="padding:0;margin:0;box-sizing:content-box;background:#18b4ed;position:fixed;bottom:0;left:0;right:0;z-index:100000;color:#fff;font-size:14px;text-align:center;line-height:30px;"><a href="tel:0551-62368888" style="box-sizing:content-box;color:#fff;text-decoration:none;">了解更多请点击</a><a class="ichat_lnk" style="box-sizing:content-box;color:#fff;text-decoration:none;box-sizing:content-box;" onClick="Id_Model.call.open();"></a></div>';
                break;
            default:
                var style = paint.tool.deviate(28, parseInt(paint.options.place.top), parseInt(paint.options.place.left));
                template = '<a class="ichat_lnk" style="width:36px;padding:10px;margin:-28px 0 0 -28px;border-radius:30px;box-sizing:content-box;background:#18b4ed;position:fixed;' + style + 'z-index:100000;color:#fff;font-size:14px;line-height:18px;text-align:center;text-decoration:none;box-sizing:content-box;" onClick="Id_Model.call.open();"></a>';
        };

        jQuery('#ichat').html(template.replace('#18b4ed', paint.options.color));

        var txt = paint.options.onlist.length > 0 ? '\u5728\u7EBF\u54A8\u8BE2' : '\u79BB\u7EBF\u7559\u8A00';
        jQuery('.ichat_lnk').text(txt);
    };

    return paint;
});
