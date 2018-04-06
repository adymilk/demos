define(function (){
	var template = {};

	template.spe = '<style>' +
		'.ichat_new *{margin:0;padding:0;}' +
		'.ichat_new a{text-decoration:none;color:#666;}' +
		'.ichat_new img{border:none 0;}' +
		'.ichat_new ul,.ichat_new li{list-style:none;}' +
		'.ichat_new .fl{float:left;}' +
		'.ichat_new .fr{float:right;}' +
		'.ichat_new .inputTime{font-size:12px;line-height:26px;clear:both;color:#ccc;}' +
		'.ichat_new .clearfix:before,.clearfix:after{display:table;content:\'\';}' +
		'.ichat_new .clearfix:after{clear:both;}' +
		'.ichat_new .clearfix{content:\'\';*zoom:1;}' +
		'.ichat_new{font-family:\'Microsoft YaHei\';position:fixed;z-index:1000000;top:50%;right:0;width:100px;padding-bottom:20px;margin-top:-180px;cursor:pointer;_position:absolute;}' +
		'.ichat_new_bg1{position:absolute;top:0;left:0;width:100%;height:100%;opacity:.5;border-radius:4px;background:#000;filter:alpha(opacity:50);}' +
		'.ichat_new_bg2{position:absolute;top:0;left:0;width:100%;height:100%;-webkit-transition:all .5s linear;-moz-transition:all .5s linear;-ms-transition:all .5s linear;transition:all .5s linear;border-radius:4px;}' +
		'.ichat_new-active .ichat_new_bg2{opacity:.8;background:#fff;filter:alpha(opacity:80);}' +
		'.ichat_new-active .ichat_new_kf1 p{color:#fff;background:#666;}' +
		'.ichat_new_close{line-height:12px;position:absolute;z-index:6;top:6px;right:7px;overflow:hidden;width:12px;height:12px;color:#000;}' +
		'.ichat_new_list{width:94px;margin:0 auto;padding-top:18px;}' +
		'.ichat_new_list li{position:relative;height:27px;margin-bottom:3px;-webkit-transition:.4s height linear;-moz-transition:.4s height linear;-ms-transition:.4s height linear;transition:.4s height linear;}' +
		'.ichat_new_list .ichat_new_current{height:118px;}' +
		'.ichat_new_kf1{line-height:17px;position:absolute;bottom:0;left:50%;width:80px;height:17px;margin:0 auto;margin-left:-40px;padding-top:10px;}' +
		'.ichat_new_kf1 img{position:absolute;top:0;left:5px;width:27px;height:27px;}' +
		'.ichat_new_kf1 p{padding-left:31px;white-space:nowrap;border-radius:10px;background-color:#fff;}' +
		'.ichat_new_kf1 p span{font-size:10px;display:block;-webkit-transform:scale(.8);}' +
		'.ichat_new_kf2{position:absolute;display:none;width:94px;height:118px;-webkit-transform:scale(.85) translateY(0);-moz-transform:scale(.85) translateY(0);-ms-transform:scale(.85) translateY(0);transform:scale(.85) translateY(0);opacity:0;}' +
		'.ichat_new_kf2 img{display:block;margin:0 auto;}' +
		'.ichat_new_kf2 div{line-height:16px;position:absolute;bottom:0;width:100%;text-align:center;}' +
		'.ichat_new_kf2 div span{font-size:10px;display:block;margin:0 auto;-webkit-transition:.4s height linear;-moz-transition:.4s height linear;-webkit-transform:scale(.8);color:#fff;}' +
		'.ichat_new_kf2 div p{font-size:14px;line-height:27px;width:94px;height:27px;color:#fff;border-radius:10px;background-color:#cd0000;}' +
		'.ichat_new_current .ichat_new_kf1{display:none;}' +
		'.ichat_new_current .ichat_new_kf2{display:block;-webkit-animation:b2-in .4s .2s linear;-moz-animation:b2-in .4s .2s linear;-ms-animation:b2-in .4s .2s linear;animation:b2-in .4s .2s linear;-webkit-animation-fill-mode:forwards;-moz-animation-fill-mode:forwards;-ms-animation-fill-mode:forwards;animation-fill-mode:forwards;}' +
		'.ichat_new_out .ichat_new_kf1{display:block;-webkit-animation:b1-out .2s .2s linear;-moz-animation:b1-out .2s .2s linear;-ms-animation:b1-out .2s .2s linear;animation:b1-out .2s .2s linear;opacity:0;-webkit-animation-fill-mode:forwards;-moz-animation-fill-mode:forwards;-ms-animation-fill-mode:forwards;animation-fill-mode:forwards;filter:alpha(opacity:0);}' +
		'.ichat_new_out .ichat_new_kf2{display:block;-webkit-animation:b2-out .4s linear;-moz-animation:b2-out .4s linear;-ms-animation:b2-out .4s linear;animation:b2-out .4s linear;-webkit-animation-fill-mode:forwards;-moz-animation-fill-mode:forwards;-ms-animation-fill-mode:forwards;animation-fill-mode:forwards;}' +
		'@-webkit-keyframes b1-out{0%{transform:translateY(59px);opacity:0;}' +
		    '100%{transform:translateY(0px);opacity:1;}}' +
		'@-moz-keyframes b1-out{0%{transform:translateY(59px);opacity:0;}' +
		    '100%{transform:translateY(0px);opacity:1;}}' +
		'@keyframes b1-out{0%{transform:translateY(59px);opacity:0;}' +
		    '100%{transform:translateY(0px);opacity:1;}}' +
		'@-webkit-keyframes b2-in{0%{transform:scale(.85);opacity:0;}' +
		    '100%{transform:scale(1);opacity:1;}}' +
		'@-moz-keyframes b2-in{0%{transform:scale(.85);opacity:0;}' +
		    '100%{transform:scale(1);opacity:1;}}' +
		'@keyframes b2-in{0%{transform:scale(.85);opacity:0;}' +
		    '100%{transform:scale(1);opacity:1;}}' +
		'@-webkit-keyframes b2-out{0%{transform:translateY(0) scale(1);opacity:1;}' +
		    '50%{transform:translateY(0) scale(.85);opacity:.5;}' +
		    '100%{transform:translateY(-118px) scale(.85);opacity:0;}}' +
		'@-moz-keyframes b2-out{0%{transform:translateY(0) scale(1);opacity:1;}' +
		    '50%{transform:translateY(0) scale(.85);opacity:.5;}' +
		    '100%{transform:translateY(-118px) scale(.85);opacity:0;}}' +
		'@keyframes b2-out{0%{transform:translateY(0) scale(1);opacity:1;}' +
		    '50%{transform:translateY(0) scale(.85);opacity:.5;}' +
		    '100%{transform:translateY(-118px) scale(.85);opacity:0;}}' +
		'.ichat_side{position:absolute;z-index:-1;top:0;left:0;display:none;width:417px;height:442px;opacity:0;}' +
		'.ichat_side_con{position:absolute;top:0;left:0;width:100%;}' +
		'.ichat_side_header{padding:5px 10px;}' +
		'.ichat_side_header img{float:left;width:43px;height:43px;border-radius:14px;}' +
		'.ichat_side_header span{font-size:14px;line-height:43px;display:inline-block;float:left;overflow:hidden;max-width:180px;margin-left:15px;white-space:nowrap;text-overflow:ellipsis;color:#fff;}' +
		'.ichat_side_main{position:relative;height:435px;padding:15px;}' +
		'.ichat_side_main_more{padding-bottom:10px;}' +
		'.ichat_side_main_more dt{position:relative;width:168px;height:168px;background:#efefef;}' +
		'.ichat_side_main_more dt div{position:absolute;z-index:2;width:100%;height:100%;background:#efefef;}' +
		'.ichat_side_main_more dt embed{position:absolute;top:0;left:0;}' +
		'.ichat_side_main_more dt embed.zIn3{z-index:3;}' +
		'.ichat_side_main_more dd{font-family:Microsoft YaHei;width:192px;}' +
		'.ichat_side_main_more dd h6{font-size:16px;line-height:20px;position:relative;padding-bottom:12px;text-align:center;color:#333;}' +
		'.ichat_side_main_more dd h6:before,.ichat_side_main_more dd h6:after{position:absolute;top:9px;width:30px;height:1px;content:\'\';background:#ddd;}' +
		'.ichat_side_main_more dd h6:before{left:0;}' +
		'.ichat_side_main_more dd h6:after{right:0;}' +
		'.ichat_side_main_more dd p{font-size:14px;line-height:20px;color:#747474;}' +
		'.ichat_side_main_msg{font-size:12px;display:inline-block;padding:10px;color:#1e3c5b;border-radius:10px;background-color:#e6e5eb;}' +
		'</style>' +
		'<div class="ichat_new">' +
	        '<div class="ichat_new_bg1"></div>' +
	        '<div class="ichat_new_bg2"></div>' +
	        '<a href="javascript:void(0);" class="ichat_new_close">×</a>' +
	        '<ul class="ichat_new_list"></ul>' +
	        '<div class="ichat_side">' +
	            '<img class="ichat_side_bg" src="htp/kf/kf-left-bg.jpg" />' +
	            '<div class="ichat_side_con">' +
	                '<div class="ichat_side_header clearfix">' +
	                    '<img src="htp/kf/kf.png" />' +
	                    '<span></span>' +
	                '</div>' +
	                '<div class="ichat_side_main">' +
	                    '<dl class="clearfix ichat_side_main_more">' +
	                        '<dt class="fl">' +
	                            '<div>' +
	                                '<img src="" width="168" height="168">' +
	                            '</div>' +
	                            '<embed src="" width="168" height="168" loop="false" autostart="true" class="zIn3">' +
	                        '</dt>' +
	                        '<dd class="fr">' +
	                            '<h6></h6>' +
	                            '<p></p>' +
	                        '</dd>' +
	                    '</dl>' +
	                    '<ul>' +
	                        '<li>' +
	                            '<span class="ichat_side_main_msg">' +
	                            '</span>' +
	                            '<p class="inputTime"></p>' +
	                        '</li>' +
	                    '</ul>' +
	                '</div>' +
	            '</div>' +
	        '</div>' +
    	'</div>';

	template.chat = '<style>.ichat_mini{border: 1px solid #e2e2e2;border-bottom:none;position: fixed;z-index:100002;right:0;bottom:0;width: 327px;}.ichat_mini *{margin:0;padding:0;font-family: Microsoft Yahei;}.im_open{background-color:#ffffff;}.im_open dt, .im_close dt {height:0;position: relative;} .im_open dt i,.im_close dt i{display: block; width:30px;height: 30px;position: absolute;background: url(htp/kf/im_c_window.png) no-repeat;background-position:5px;top: 5px;right: 10px;cursor:pointer}.im_open dd {height: 440px;border-top: none;}.im_open dd iframe{width: 100%;height: 100%;border: none;}.im_close dt i{background-position:-21px;}.im_close dd{color:#fff;font-size: 15px;line-height:43px;cursor:pointer;padding: 5px 30px 5px 10px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}.im_close dd i{margin-right: 10px;display: block;width: 45px;height: 43px;float: left;background: url(htp/kf/im_c_chat.png);}.ichat_hide{display:none;}</style>' +
		'<div class="ichat_mini">' +
			'<dl class="im_open ichat_hide"><dt><i onClick="Id_Model.flex.close();"></i></dt><dd><iframe src=""></iframe></dd></dl>' +
			'<dl class="im_close" onclick="Id_Model.flex.open()"><dt><i></i></dt><dd><i></i></dd></dl>' +
		'</div>';

	template.call = '<style>.ichat_call{width:358px;margin:-100px 0 0 -180px;border:1px solid #ccc;border-radius:3px;position:fixed;_position:absolute;top:50%;left:50%;z-index:100000;color:#333;font:12px/25px Arial;text-shadow:none;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;backface-visibility:hidden}.ichat_call *{padding:0;margin:0;outline:none;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}.ichat_call a{color:#333;text-decoration:none;cursor:pointer}.ichat_call a:hover,.ichat_call a:active,.ichat_call a:focus{color:#18b4ed;text-decoration:none}.ichat_call dt{padding:0 20px;border-radius:2px 2px 0 0;background:#33b5e5;color:#fff;font:16px/40px Microsoft YaHei;text-align:center}.ichat_call dd{height:143px;padding:15px 20px 0;background:#fff}.ichat_call p{height:75px;overflow:hidden}.ichat_call p a{color:#18b4ed}.ichat_call div{margin:15px 0 0;position:relative}.ichat_call div a.open{width:140px;margin:0 auto;display:block;background:#33b5e5;color:#fff;font:14px/35px Arial;text-align:center}.ichat_call div a.hide{position:absolute;bottom:0;right:0;display:block!important;}</style>'
	+ '<dl class="ichat_call"><dt>\u8BF7\u95EE\u6709\u4EC0\u4E48\u53EF\u4EE5\u5E2E\u60A8\uFF1F</dt>'
	+ '<dd><p class="ichat_welcome"></p><div><a class="open" onClick="Id_Model.call.open();">\u73B0\u5728\u54A8\u8BE2</a><a class="hide" onClick="Id_Model.call.hide(this);">\u7A0D\u540E\u518D\u8BF4</a></div></dd></dl>';

	template.on = '<style>.ichat_on{margin:-110px 0 0;position:fixed;_position:absolute;z-index:100000;color:#333;font:12px/25px Arial;text-shadow:none;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;backface-visibility:hidden}.ichat_on *{padding:0;margin:0;outline:0;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}.ichat_on a{color:#333;text-decoration:none;cursor:pointer}.ichat_on a:hover,.ichat_on a:active,.ichat_on a:focus{color:#18b4ed;text-decoration:none}.ichat_on dl{width:150px;background:#33b5e5}.ichat_on dt{height:48px;padding:0 18px;color:#fff;font:16px/48px Microsoft YaHei}.ichat_on dt i,.ichat_logo i{width:30px;height:32px;margin:8px 10px 0 0;float:left;background:url(htp/chat.png) no-repeat -50px -75px}.ichat_on dd{overflow-y:auto}.ichat_on dd a{height:25px;padding-left:45px;overflow:hidden;display:block;border-top:1px solid #ececec;background:url(htp/chat.png) no-repeat -90px -60px;color:#333;-webkit-transition:0;-moz-transition:0;transition:0}.ichat_on dd a.first{border-top:0;}.ichat_on dd a.offline{background-position:-90px -90px}.ichat_on dd a:hover{background-position:-90px -120px;color:#fff}.ichat_on div{padding:3px 10px;color:#fff;font:12px/18px Microsoft YaHei}.ichat_on div i{width:27px;height:28px;margin:4px 10px 0 0;float:left;background:url(htp/chat.png) no-repeat -50px -115px}.ichat_btn{width:13px;height:45px;margin:-22px 0 0;background:url(htp/chat.png) no-repeat -30px 0;position:absolute;top:50%;left:-13px;-webkit-transition:all 0s;-moz-transition:all 0s;transition:all 0s}.ichat_logo{width:50px;height:90px;padding:10px 0 0;display:none;background:#33b5e5;text-align:center}.ichat_logo i{margin:0 auto;display:block;float:none;cursor:pointer}.ichat_logo span{padding:3px 10px;margin:7px 1px 1px;display:block;background:#fff;color:#18b4ed;font:16px/22px Microsoft YaHei;cursor:pointer}.ichat_active{margin:-50px 0 0}.ichat_active dl{display:none}.ichat_active .ichat_btn{visibility:hidden}.ichat_active .ichat_logo{display:block}</style>'
	+ '<div class="ichat_on"><a class="ichat_btn" onClick="Id_Model.on.ctrl(1, this);"></a><a class="ichat_logo" onClick="Id_Model.on.ctrl(1, this);"><i></i><span>\u54A8\u8BE2</span></a>'
	+ '<dl><dt><i></i>\u5728\u7EBF\u54A8\u8BE2</dt>'
	+ '<dd></dd><div><i></i><p class="ichat_hot">\u54A8\u8BE2\u70ED\u7EBF\uFF1A<br />400-155-8788</p></div></dl></div>';

	template.on_mini = '<style>.ichat_on{margin:-25px 0 0;position:fixed;_position:absolute;z-index:100000;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;backface-visibility:hidden}.ichat_on *{padding:0;margin:0;outline:none;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}.ichat_on a{padding:8px 10px 10px;display:block;background:#33b5e5;cursor:pointer}.ichat_on i{width:30px;height:32px;display:block;background:url(htp/chat.png) no-repeat -50px -75px;cursor:pointer}</style>'
	+ '<div class="ichat_on"><a class="ichat_logo" title="\u5728\u7EBF\u54A8\u8BE2" onClick="javascript:Id_Model.call.open();"><i></i></a></div>';

	template.off = '<style>.ichat_off{width:240px;margin:0;background:#f6f6f6;position:fixed;_position:absolute;bottom:0;left:0;z-index:100000;color:#333;font:12px/20px Arial;text-shadow:none;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;backface-visibility:hidden}.ichat_off *{padding:0;margin:0;outline:none;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}.ichat_off a{color:#333;text-decoration:none;cursor:pointer;-webkit-transition:all 0s;-moz-transition:all 0s;transition:all 0s}.ichat_off a:hover,.ichat_off a:active,.ichat_off a:focus{color:#333;text-decoration:none}.ichat_off dt{padding:0 15px;background:#33b5e5;color:#fff;font:14px/32px Microsoft YaHei;cursor:pointer}.ichat_off dt i{width:16px;height:16px;margin:8px 0 0;overflow:hidden;float:right;background:url(htp/chat.png);_background-image:url(htp/chat.gif);cursor:pointer}.ichat_off dd{height:0;overflow:hidden}.ichat_off textarea,.ichat_off input{padding:3px 10px;border:1px solid #d7d7d7;background:#fff;color:#999;font:12px/20px Arial}.ichat_off textarea{width:188px;height:80px;margin:15px auto 0;resize:none;display:block}.ichat_off textarea.active,.ichat_off input.active{color:#333}.ichat_off input{width:138px;height:20px;float:right}.ichat_off ul{padding:0 15px;font:12px/28px Arial}.ichat_off li{height:28px;margin:10px 0 0;list-style:none}.ichat_off li.ichat_send a{width:130px;height:28px;margin:0 auto;display:block;background:url(htp/chat.png) no-repeat -90px -30px;text-align:center}.ichat_off li p{padding:0 10px 0 0;overflow:hidden;background:url(htp/chat.png) no-repeat -90px 0;text-align:right}.ichat_off li p i{margin:0 4px 0 0;color:red}.ichat_menu{width:158px;float:right;border:1px solid #d7d7d7;background:#fff;position:relative;color:#999}.ichat_menu span{padding:0 10px;display:block;line-height:26px;cursor:pointer}.ichat_menu span.active{color:#333}.ichat_menu span.active i{background-position:-20px -5px}.ichat_menu i{width:7px;height:4px;margin:11px 0 0 10px;overflow:hidden;float:right;background:url(htp/chat.png) no-repeat -20px 0;_background-image:url(htp/chat.gif);cursor:pointer}.ichat_menu div{width:158px;height:100px;overflow-y:auto;visibility:hidden;border:1px solid #d7d7d7;background:#fff;position:absolute;top:26px;left:-1px;line-height:20px}.ichat_menu div.active{visibility:visible}.ichat_menu div a{height:20px;padding:0 10px;overflow:hidden;display:block;background:0}.ichat_menu div a:hover{background:#33b5e5;color:#fff}.ichat_more a{padding:13px 20px;margin:10px 0 0;display:block;background:#33b5e5;color:#fff;font:13px/15px Microsoft YaHei}.ichat_more a:hover{color:#fff}.ichat_more i{width:27px;height:27px;margin:1px 10px 0 0;float:left;background:url(htp/chat.png) no-repeat -50px -40px;_background-image:url(htp/chat.gif);cursor:pointer;position:relative;top:-7px;}.ichat_active dt i{background-position:0 -20px}.ichat_active dd{height:auto}</style>'
	+ '<dl class="ichat_off"><dt onClick="Id_Model.on.ctrl(1, this);"><i></i>\u8BF7\u60A8\u7559\u8A00</dt>'
	+ '<dd><textarea class="ichat_txts" rel="\u8BF7\u8F93\u5165\u7559\u8A00\u5185\u5BB9\uFF0C\u6211\u4EEC\u4F1A\u5C3D\u5FEB\u4E0E\u60A8\u8054\u7CFB\uFF01" onfocus="Id_Model.off.txt(1, this);" onblur="Id_Model.off.txt(0, this);">\u8BF7\u8F93\u5165\u7559\u8A00\u5185\u5BB9\uFF0C\u6211\u4EEC\u4F1A\u5C3D\u5FEB\u4E0E\u60A8\u8054\u7CFB\uFF01</textarea>'
	+ '<ul>'
	// + '<li><input class="ichat_name" value="\u8BF7\u8F93\u5165\u60A8\u7684\u59D3\u540D" rel="\u8BF7\u8F93\u5165\u60A8\u7684\u59D3\u540D" onfocus="Id_Model.off.txt(1, this);" onblur="Id_Model.off.txt(0, this);" type="text" /><p><i>*</i>\u59D3\u540D</p></li>'
	// + '<li><input class="ichat_tel" value="\u8BF7\u8F93\u5165\u60A8\u7684\u7535\u8BDD\u53F7\u7801" rel="\u8BF7\u8F93\u5165\u60A8\u7684\u7535\u8BDD\u53F7\u7801" onfocus="Id_Model.off.txt(1, this);" onblur="Id_Model.off.txt(0, this);" type="text" /><p><i>*</i>\u7535\u8BDD</p></li>'
	// + '<li class="ichat_kf"><div class="ichat_menu"><span class="ichat_span" onClick="Id_Model.on.ctrl(0, this);"><i></i>\u8BF7\u9009\u62E9\u5BA2\u670D</span><div class="ichat_list"></div></div><p>\u5BA2\u670D</p></li>'
	// + '<li><input class="ichat_dr" value="\u8BF7\u8F93\u5165\u60A8\u73B0\u5728\u6240\u5728\u5730\u5730\u5740" rel="\u8BF7\u8F93\u5165\u60A8\u73B0\u5728\u6240\u5728\u5730\u5730\u5740" onfocus="Id_Model.off.txt(1, this);" onblur="Id_Model.off.txt(0, this);" type="text" /><p>地址</p></li>'
	// + '<li><input class="ichat_email" value="\u8BF7\u8F93\u5165\u60A8\u7684\u8054\u7CFB\u90AE\u7BB1" rel="\u8BF7\u8F93\u5165\u60A8\u7684\u8054\u7CFB\u90AE\u7BB1" onfocus="Id_Model.off.txt(1, this);" onblur="Id_Model.off.txt(0, this);" type="text" /><p>邮箱</p></li>'
	+ '<li class="ichat_send"><a onClick="Id_Model.off.submit();">\u53D1\u9001\u7559\u8A00</a></li></ul>'
	+ '<div class="ichat_more"><a href="javascript:void(0);"><i></i>\u5BA2\u670D\u4EBA\u5458\u4F1A\u572824h\u7ED9\u60A8\u7B54\u590D</a></div></dd></dl>';

	template.off_m = '<style>@-webkit-keyframes lt100{0%{-webkit-transform:translateX(100%)}100%{-webkit-transform:translateX(0)}}.ichat_leave{padding:20px;margin:0;overflow-y:auto;background:#efefef;position:fixed;top:0;bottom:0;left:0;right:0;z-index:100000;text-shadow:none;-webkit-animation:lt100 .7s .1s ease both}.ichat_leave *{padding:0;margin:0;outline:0;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}.ichat_leave li{padding:0 20px 15px 0;list-style:none}.ichat_leave li:last-child{padding:0}.ichat_leave input,.ichat_leave textarea{width:100%;height:20px;padding:5px 10px;border:0;color:#333;font-size:14px}.ichat_leave textarea{height:100px;line-height:20px}.ichat_leave button{width:120px;height:30px;margin:0 auto;display:block;border:0;border-radius:20px;background:#5cc395;color:#fff;font-size:16px}</style>'
	+ '<ul class="ichat_leave"><li><textarea class="ichat_txts" placeholder="\u7559\u8A00\u5185\u5BB9"></textarea></li>'
	+ '<li><input class="ichat_name" placeholder="\u59D3\u540D" type="text" /></li>'
	+ '<li><input class="ichat_tel" placeholder="\u7535\u8BDD" type="text" /></li>'
	+ '<li><input class="ichat_dr" placeholder="\u5730\u5740" type="text" /></li>'
	+ '<li><input class="ichat_email" placeholder="\u90AE\u7BB1" type="text" /></li>'
	+ '<li><button onclick="Id_Model.off.submit();" type="button">\u63D0\u4EA4</button></li></ul>';

	return template;
});