var Id_Model = (function (){
	var id = {
		tool : {}, // 工具交互视图
		call : {}, // 主动呼起交互视图
		on   : {}, // 在线交互视图
		off  : {}, // 离线交互视图,
		flex: {} //迷你视图
	};

	/**
	 * 字符串转译
	 * @param string s 字符串
	 */
	id.tool.translate = function (s){
		s = s.replace(/&/g, '&amp;');
		s = s.replace(/</g, '&lt;');
		s = s.replace(/>/g, '&gt;');
		s = s.replace(/"/g, '&quot;');
		s = s.replace(/'/g, '&#039;');
		return s;
	};

	/**
	 * 随机客服
	 */
	id.tool.rondomid = function (){
		if(id.options.onlist.length == 0){
			if(id.options.device == 'pc') return false;

			if(jQuery('.ichat_leave').length > 0){
				jQuery('.ichat_leave').show();
			}else{
				require(['template'], function (Template){
					jQuery('#ichat').append(Template.off_m);
				});
			};

			return false;
		};

		var i = Math.floor(Math.random() * id.options.onlist.length);
		for(k in id.options.onlist){
			var v = id.options.onlist[k];
			if(v.state == 1 && k == i){
				return v.uid;
				break;
			};
		};
	};

	/**
	 * 打开在线咨询窗口
	 * @param int uid 客服id
	 */
	id.call.open = function (uid){
		if(!uid){
			uid = id.tool.rondomid();
			if(!uid) return false;
		};

		var template = 'talk';
		if(id.options.device == 'mobile') template = 'talk_m';

		var params = [];
		params.push('site_id=' + id.options.siteid);
		params.push('coid=' + id.options.coid);
		params.push('srand=' + Math.random());
		params.push('uid=' + uid);
		params.push('template=' + template);
		if(id.options.goodsid) params.push('goods_id=' + id.options.goodsid);

		var top   = (window.screen.availHeight - 30 - 700) / 2;
		var left  = (window.screen.availWidth - 10 - 500) / 2;
		var style = 'location=no,width=700,height=500,top=' + top + ',left=' + left;

		window.open(id.options.path + 'kf/talk?' + params.join('&'), 'talk', style);
		id.call.hide();
		if(id.options.templatechat) id.options.templatechat(uid);
	};

	/**
	 * 关闭呼起窗口
	 */
	id.call.hide = function (flag){
		jQuery('.ichat_call').remove();
		// 再调用启动
		if (flag) {
			if (--id.options.json_welcome.refuse < 1) return;
			if(id.options.templatecall) id.options.templatecall(id.options.json_welcome.time_reopen);
		}
	};

	/**
	 * 控制开关
	 * @param int    type 方式
	 * @param object obj  操作对象
	 */
	id.on.ctrl = function (type, obj){
		if(type && type == 1) jQuery(obj).parent().toggleClass('ichat_active');
		else jQuery(obj).toggleClass('active').next().toggleClass('active');
	};

	/**
	 * 输入框
	 * @param int    type 方式
	 * @param object obj  操作对象
	 */
	id.off.txt = function (type, obj){
		var obj = jQuery(obj);
		var rel = obj.attr('rel');
		if(type && type == 1){
			if(obj.val() == rel) obj.val('')
			obj.addClass('active');
		}else{
			if(obj.val().length == 0) obj.val(rel);
			obj.removeClass('active');
		};
	};

	/**
	 * 打开客服列表
	 * @param object obj 操作对象
	 */
	id.off.choice = function (obj){
		jQuery(obj).toggleClass('active').next().toggleClass('active');
	};

	/**
	 * 选择客服
	 * @param int    k 客服id
	 * @param string v 客服
	 */
	id.off.kf = function (k, v){
		jQuery('.ichat_span').html('<i></i>' + id.tool.translate(v)).attr('uid', k);
		id.off.choice(jQuery('.ichat_span'));
	};

	/**
	 * 提交留言消息
	 */
	id.off.submit = function (){
		var rel  = '';
		// fixed
		var txts = jQuery.trim(jQuery('.ichat_active .ichat_txts').val());
		rel = jQuery('.ichat_txts').attr('rel');
		if(txts.length == 0 || txts == rel){
			jQuery('.ichat_txts').focus();
			return false;
		};

		var name = '';
		if (jQuery('.ichat_name').length) {
			var name = jQuery.trim(jQuery('.ichat_name').val());
			if (!jQuery('.ichat_name').closest('li').find('i').is(':hidden')) {
				rel = jQuery('.ichat_name').attr('rel');
				if(name.length == 0 || name == rel){
					jQuery('.ichat_name').focus();
					return false;
				};
			}
		}

		var tel = '';
		if (jQuery('.ichat_phone').length) {
			var tel = jQuery.trim(jQuery('.ichat_phone').val());
			if (!jQuery('.ichat_phone').closest('li').find('i').is(':hidden')) {
				rel = jQuery('.ichat_phone').attr('rel');
				if(tel.length == 0 || tel == rel){
					jQuery('.ichat_phone').focus();
					return false;
				};
			}
		}

		var dr = '';
		if (jQuery('.ichat_addr').length) {
			var dr = jQuery.trim(jQuery('.ichat_addr').val());
			if (!jQuery('.ichat_addr').closest('li').find('i').is(':hidden')) {
				rel = jQuery('.ichat_addr').attr('rel');
				if(dr.length == 0 || dr == rel){
					jQuery('.ichat_addr').focus();
					return false;
				};
			}
		}

		var email = '';
		if (jQuery('.ichat_email').length) {
			var email = jQuery.trim(jQuery('.ichat_email').val());
			if (!jQuery('.ichat_email').closest('li').find('i').is(':hidden')) {
				rel = jQuery('.ichat_email').attr('rel');
				if(email.length == 0 || email == rel){
					jQuery('.ichat_email').focus();
					return false;
				};
			}
		}

		var company = '';
		if (jQuery('.ichat_company').length) {
			var company = jQuery.trim(jQuery('.ichat_company').val());
			if (!jQuery('.ichat_company').closest('li').find('i').is(':hidden')) {
				rel = jQuery('.ichat_company').attr('rel');
				if(company.length == 0 || company == rel){
					jQuery('.ichat_company').focus();
					return false;
				};
			}
		}


		// var email = jQuery.trim(jQuery('.ichat_email').val());
		// rel = jQuery('.ichat_email').attr('rel');
		// if(email == rel) email = '';

		var uid = jQuery('.ichat_span').attr('uid');

		var params = [];
		params.push('uid=' + uid);
		params.push('site_id=' + id.options.siteid);
		params.push('coid=' + id.options.coid);
		params.push('srand=' + Math.random());
		params.push('content=' + txts);
		params.push('name=' + name);
		params.push('tel=' + tel);
		params.push('address=' + dr);
		params.push('email=' + email);
		params.push('company=' + company);

		var url = id.options.path + 'kf/sendleave?format=json&callback=?&' + params.join('&');
		jQuery.getJSON(url, function (r){
			if(r.err_code) alert(r.msg);
			else{
				alert('\u7559\u8a00\u6210\u529f\uff01');
				jQuery('.ichat_txts').val('');
			};
			if(jQuery('.ichat_leave').length > 0) jQuery('.ichat_leave').slideUp();
		});
	};

	id.flex.open = function() {
		id.flex.toggle('open', 'close');
	};

	id.flex.close = function() {
		id.flex.toggle('close', 'open');
	};

	id.flex.toggle = function(show, hide) {

		$('.im_' + show).removeClass('ichat_hide');
		$('.im_' + hide).addClass('ichat_hide');
	};

	return id;
})();