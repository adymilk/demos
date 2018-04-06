define(['paint'], function (Paint){
	var chat = {
		options  : {}, // 配置参数控制视图
		tool     : {}, // 工具控制视图
		template : {} // 模版控制视图
	};

	/**
	 * 配置参数
	 */
	chat.options = {
		path    : '', // 基础路径
		device  : 'pc', // 用户设备
		goodsid : 0, // 商品id

		siteid  : 0, // 站点id
		coid    : 0, // 公司id
		welcome : '', // 主动呼起欢迎语
		tel     : '', // 联系电话
		mobile  : 0, // 是否开启手机端

		theme   : {}, // 自定义模板
		color   : '', // 自定义皮肤
		place   : 0, // 自定义位置
		init    : 0, // 是否主动呼起
		initval : 0, // 延迟主动呼起时长

		onlist  : [], // 在线客服列表
		offlist : [] // 离线客服列表
	};

	/**
	 * 初始化数据
	 * @param object js 供查询站点数据
	 */
	chat.init = function (js){
		chat.options.path = js.path;

		var device = chat.options.device = chat.tool.device();

		if(typeof TALK_GOODS_ID != 'undefined'){
			id.options.goodsid = TALK_GOODS_ID;
		};

		chat.tool.site(js.key, js.siteid, js.coid, function (r){
			chat.options.siteid  = parseInt(r.site_id);
			chat.options.coid    = parseInt(r.coid);
			chat.options.welcome = r.welcome;
			chat.options.tel     = r.tel;
			chat.options.mobile  = parseInt(r.mobile_state);
			chat.options.theme   = r.themes_id[device];
			chat.options.color   = r.color[device];
			chat.options.place   = r.position[device];
			chat.options.init    = parseInt(r.initiative[device][0]);
			chat.options.initval = parseInt(r.initiative[device][1]);
			chat.options.json_welcome = r.json_welcome;
			chat.options.json_leave_msg = r.json_leave_msg;
			chat.options.window_isshow = r.window_isshow;
			chat.options.window_color = r.window_color;
			chat.options.window_themes_id = r.window_themes_id;

			if(device == 'mobile') chat.options.theme = parseInt(chat.options.theme);
			else chat.options.place = parseInt(chat.options.place.place);

			if(r.kflist.length > 0){
				for(k in r.kflist){
					if(!r.kflist.hasOwnProperty(k)) continue;
					var v = r.kflist[k];
					if(typeof(v) != 'object' && typeof(v.uid) == 'undefined') break;

					if(v.state && v.state == 1) chat.options.onlist.push(v);
					else if((v.state && v.state == 7)) chat.options.offlist.push(v);
				};
			};

			Id_Model.options = Paint.options = chat.options; // 配置参数共享
			chat.template.ctrl();
		});
	};

	/**
	 * 获取站点数据
	 * @param string key    密匙
	 * @param string siteid 站点id
	 * @param string coid   公司id
	 * @param fun    cbk    回调函数
	 */
	chat.tool.site = function (key, siteid, coid, cbk){
		var url = chat.options.path + 'kf/?key=' + key + '&site_id=' + siteid + '&coid=' + coid + '&format=json&callback=?&rand=' + Math.random();
		jQuery.getJSON(url, function (r){
			if(!r.err_code) cbk(r.data);
		});
		// @todo 调试使用，完成后删除
		// var a = {
		// 	err_code: 0,
		// 	data: {
		// 		coid: "10000",
		// 		site_id: "275",
		// 		mobile_state: "1",
		// 		welcome: "欢迎访问本网站，有什么可以帮您？",
		// 		tel: "",
		// 		color: {
		// 			pc: "#18b4ed",
		// 			mobile: "#18b4ed"
		// 		},
		// 		initiative: {
		// 			pc: ["0", "0"],
		// 			mobile: ["0", 0]
		// 		},
		// 		themes_id: {
		// 			pc: {
		// 				call: 0,
		// 				on: "2",
		// 				off: 0
		// 			},
		// 			mobile: "2"
		// 		},
		// 		position: {
		// 			pc: {
		// 				place: "5"
		// 			},
		// 			mobile: {
		// 				top: 100,
		// 				left: "100"
		// 			}
		// 		},
		// 		kflist: [{
		// 			id: "3607",
		// 			coid: "10000",
		// 			uid: "20015",
		// 			role_id: "0",
		// 			gid: "2780",
		// 			state: 1,
		// 			nickname: "121",
		// 			create_time: "1458701021",
		// 			kf_header_pic1: "",
		// 			kf_header_pic2: "",
		// 			kf_intro: "",
		// 			name: "刘传文",
		// 			headerpic1: null,
		// 			headerpic2: null,
		// 			intro: null,
		// 			channel: null
		// 		},
		// 		{
		// 			id: "3606",
		// 			coid: "10000",
		// 			uid: "358057",
		// 			role_id: "0",
		// 			gid: "2780",
		// 			state: 7,
		// 			nickname: "358057",
		// 			create_time: "1458696261",
		// 			kf_header_pic1: "",
		// 			kf_header_pic2: "",
		// 			kf_intro: "",
		// 			name: "z",
		// 			headerpic1: null,
		// 			headerpic2: null,
		// 			intro: null,
		// 			channel: null
		// 		},
		// 		{
		// 			id: "3611",
		// 			coid: "10000",
		// 			uid: "23333",
		// 			role_id: "0",
		// 			gid: "2780",
		// 			state: 7,
		// 			nickname: "周圆测试",
		// 			create_time: "1459136022",
		// 			kf_header_pic1: "",
		// 			kf_header_pic2: "",
		// 			kf_intro: "",
		// 			name: "周圆",
		// 			headerpic1: null,
		// 			headerpic2: null,
		// 			intro: null,
		// 			channel: null
		// 		}],
		// 		json_welcome: {
		// 			open: "1",
		// 			title: "请问有什么可以帮您？",
		// 			content: "您好，欢迎光临本公司网站，请问有什么可以帮助您？",
		// 			color: "#18b4ed",
		// 			time_wait: "3",
		// 			refuse: "1",
		// 			time_reopen: "15"
		// 		},
		// 		json_leave_msg: {
		// 			open: "1",
		// 			color: "#18b4ed",
		// 			msg_conf: [{
		// 				label: "姓名",
		// 				name: "name",
		// 				is_show: "1",
		// 				is_require: "0",
		// 				order: "0"
		// 			}, {
		// 				label: "手机",
		// 				name: "phone",
		// 				is_show: "1",
		// 				is_require: "1",
		// 				order: "0"
		// 			}, {
		// 				label: "地址",
		// 				name: "addr",
		// 				is_show: "0",
		// 				is_require: "0",
		// 				order: "0"
		// 			},
		// 			{
		// 				label: "邮箱",
		// 				name: "email",
		// 				is_show: "0",
		// 				is_require: "0",
		// 				order: "0"
		// 			}]
		// 		},
		// 		window_isshow: "1",
		// 		window_color: "#18b4ed",
		// 		window_themes_id: 0
		// 	}
		// };
		// cbk(a.data);
	};

	/**
	 * 获取用户信息
	 * @param string siteid 站点id
	 * @param fun    cbk    回调函数
	 */
	chat.tool.info = function (siteid, cbk){
		var url = chat.options.path + 'kf/getBuyerInfo?format=json&callback=?&site_id=' + siteid + '&rand=' + Math.random();
		jQuery.getJSON(url, function (r){
			if(!r.err_code) cbk(r.data);
		});
	};

	/**
	 * 判断用户设备
	 */
	chat.tool.device = function (){
		var ua         = navigator.userAgent.toLowerCase();
		var isIpad     = ua.match(/ipad/i) == 'ipad';
		var isIphoneOs = ua.match(/iphone os/i) == 'iphone os';
		var isMidp     = ua.match(/midp/i) == 'midp';
		var isUc7      = ua.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4';
		var isUc       = ua.match(/ucweb/i) == 'ucweb';
		var isAndroid  = ua.match(/android/i) == 'android';
		var isCE       = ua.match(/windows ce/i) == 'windows ce';
		var isWM       = ua.match(/windows mobile/i) == 'windows mobile';
		if(isIpad || isIphoneOs || isMidp || isUc7 || isUc || isAndroid || isCE || isWM) return 'mobile';
		else return 'pc';
	};

	/**
	 * 模版调用控制器
	 */
	chat.template.ctrl = function (){
		if(chat.options.device == 'mobile'){
			if(chat.options.mobile > 0) Paint.template.m();
			return false;
		};

		if(chat.options.onlist.length == 0){
			chat.tool.info(chat.options.siteid, function (r){
				Paint.template.off(r);
			});
			return false;
		};

		Paint.template.on();

		// 右下角聊天框
		if(+chat.options.window_isshow == 1) Paint.template.chat();

		// if(chat.options.init == 1) Paint.template.call();
		if(chat.options.json_welcome.open == 1) Paint.template.call();
	};

	return chat;
});