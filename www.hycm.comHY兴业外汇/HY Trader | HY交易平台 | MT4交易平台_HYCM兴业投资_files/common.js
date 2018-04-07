var vars = vars || {};
(function ($) {
	vars.api_uri_prefix = '/cn/api';
	
	vars.api_req_config = {
		headers : {
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
		},
		withCredentials: true
	};
	
	vars.display_mt4_acc_types = {
		'Demo': '模拟',
		'Live': '真实'
	};
	vars.display_acc_types = {
		'Micro': '微型',
		'Standard': '标准',
		'Vip': '特等'
	};
	
	vars.cn_id_regex = new RegExp("^[0-9]{17}[0-9Xx]{1}$");
	vars.non_cn_id_regex = new RegExp('^(?!'+vars.cn_id_regex.source+').+$');
	vars.cn_passport_no_regex = new RegExp('^(?!'+vars.cn_id_regex.source+')[^\u0391-\uFFE5]+$');
	vars.non_cn_passport_no_regex = /^[^\u0391-\uFFE5]+$/;
	
	isCnId = function (id) {
		return vars.cn_id_regex.test(id);
	}
	
	convertByteSize = function (bytes) {
		return parseInt(bytes / 1024);
	};
	
	showYahuiTermsFooter = function () {
		var footer = $('.footer');
		footer.find('.footer-top').addClass('hidden');
		footer.find('.footer-first').addClass('hidden');
		footer.find('.footer-second').addClass('hidden'); // contacts footer
		var footer_terms = footer.find('.footer-third');
		if (footer_terms.length)
		{
			footer_terms.find('.region-footer-third')
				.find('.normal-terms').addClass('hidden').end()
				.find('.yahui-terms').removeClass('hidden')
			;
		}
	};
	
	getAffiliateCodeCookieExpiryDate = function () {
		var now = new Date();
		var exp = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes() + 360); // 6 hours
		console.trace(exp);
		
		return exp;
	};
	
	parseAffiliateCode = function (affiliate_code) {
		var affiliate_code = affiliate_code || '';
		
		if (affiliate_code.length > 12)
		{
			affiliate_code = affiliate_code.substr(0, 12);
		}
		
		return affiliate_code;
	}
	
	isMobileBrowser = function () {
		var is_mobile = false;
		
		(function(a,b){
		    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))){
		      is_mobile = true;
		    }
		  })(navigator.userAgent||navigator.vendor||window.opera,'http://detectmobilebrowser.com/mobile');
		  
		return is_mobile;
	};
	
	checkClientIdAndDob = function (is_country_cn, src_type) {
			var is_id_valid = 0;
		
			var id = $("#id_card_inp").val();
			var birth = $("#datepick").val().replace('-','').replace('-','');
			var patt = vars.cn_id_regex;
			
			var show_id_err = function () {
				angular.element(document.getElementById("id_err_1")).removeClass("hidden");
				angular.element(document.getElementById("id_card_inp")).addClass("id_err");
				angular.element(document.getElementById("id_card_inp")).removeClass("id_succ");
				is_id_valid = 0;
			};
			
			var hide_id_err = function () {
				angular.element(document.getElementById("id_err_1")).addClass("hidden");
				angular.element(document.getElementById("id_card_inp")).addClass("id_succ");
				angular.element(document.getElementById("id_card_inp")).removeClass("id_err");
				is_id_valid = 1;
			};
			
			if (src_type == 'dob' || src_type == 'country')
			{
				if ((!is_country_cn && id.length > 0) || (is_country_cn && (id.indexOf(birth,0) == 6) && (id.length==18) && (patt.test(id) == true)))
				{
					hide_id_err();
				}
				else
				{
					show_id_err();
				}
			}
			else
			{
				if ((!is_country_cn && id.length > 0) || (is_country_cn && (id.length==18) && (patt.test(id) == true)))
				{
					hide_id_err();
					
					if (is_country_cn && src_type == 'id')
					{
						if (!autoFillInDobForCnId(id, $('#datepick')))
							show_id_err();
					}
				}
				else{
					show_id_err();
				}
			}
			
			return is_id_valid;
	}
	
	autoFillInDobForCnId = function (cn_id, dob_ele) {
		if (cn_id.length < 14)
			return false;
			
		// var dob_ele = $("#datepick");
		var dob_str = cn_id.substr(6, 8);
		var dob_val = dob_str.substr(0, 4) + '-' + dob_str.substr(4, 2) + '-' + dob_str.substr(6, 2);
		
		dob_ele.datepicker("setDate", dob_val);
		
		var valid_dob_date = dob_ele.datepicker("getDate");
		var month = valid_dob_date.getMonth() + 1;
		if (month < 10)
			month = '0' + month;
		var day = valid_dob_date.getDate();
		if (day < 10)
			day = '0' + day;
		
		var valid_dob_val = valid_dob_date.getFullYear() + '-' + month + '-' + day;
		var dob_model_controller = angular.element(dob_ele[0]).controller('ngModel');
		if (dob_val != valid_dob_val)
		{
			dob_ele.datepicker("setDate", null);
			dob_model_controller.$setViewValue(null);
			dob_model_controller.$render();
			return false;
		}
		else
		{
			dob_model_controller.$setViewValue(valid_dob_val);
			dob_model_controller.$render();
			return true;
		}
		
	};
	
	vars.reg = vars.reg || {};
	
	vars.reg.std_allowed_acc_type_opts = [
		{ key: 'Micro', label: '微型账户100-2,500美元开户', acc_type: 'Micro' },
		{ key: 'Standard', label: '标准账户500-2,500美元开户', acc_type: 'Standard' },
		{ key: 'Vip', label: '特等账户10,000美元开户', acc_type: 'Vip' }
	];
	
	AffiliateCodeStore = function () {
		var me = this;
		this.aff_codes = null;
		
		this.acc_types = [];
		
		this.setAffCodes = function (aff_codes) {
			this.aff_codes = aff_codes;

			this.acc_types = [];
			
			$.each(this.aff_codes, function (idx, info) {
				var acc_type_key = info.package_code + '-' + info.account_type;
				
				me.acc_types.push({
					key: idx,
					label: info.description,
					package_code: info.package_code,
					acc_type: info.account_type,
					id: acc_type_key
				});
			});
			
		};
		
		this.getAccTypes = function () {
			return this.acc_types;
		};
		
	};
	
	AccTypeSelBox = function (scope) {
		var me = this;
		this.scope = scope;
		
		this.init = function () {
			
		};
		
		this.setOpts = function (acc_types) {
			var opts = [];
			$.each(acc_types, function (idx, val) {
				opts.push({ val: val.key, txt: val.label, info: val });
			})
			
			this.scope.acc_type_opts = opts;
			
			// reset related sel box's val
			this.scope.acc_typ = null;
		};
		
		this.getOptByVal = function (acc_type_val) {
			var result = $.grep(this.scope.acc_type_opts, function (a_opt) {
				return a_opt.val == acc_type_val;
			});
			
			return result.length == 1 ? result[0] : null;
		}
		
		this.init();
	};
	
	vars.country_list = [
		{value: '+93',label: 'Afghanistan', code:'AF', ch_name:'阿富汗'},
		{value: '+358',label: 'ALA, Aland Islands', code:'AX', ch_name:'阿兰，阿兰群岛'},
		{value: '+355',label: 'Albania', code:'AL', ch_name:'阿尔巴尼亚'},
		{value: '+213',label: 'Algeria', code:'DZ', ch_name:'阿尔及利亚'},
		{value: '+1-684',label: 'American Samoa', code:'AS', ch_name:'美属萨摩亚'},
		{value: '+376',label: 'Andorra', code:'AD', ch_name:'安道尔'},
		{value: '+244',label: 'Angola', code:'AO', ch_name:'安哥拉'},
		{value: '+1-264',label: 'Anguilla', code:'AI', ch_name:'安圭拉岛'},
		{value: '+672',label: 'Antarctica', code:'AQ', ch_name:'南极洲'},
		{value: '+1-268',label: 'Antigua and Barbuda', code:'AG', ch_name:'安提瓜和巴布达'},
		{value: '+54',label: 'Argentina', code:'AR', ch_name:'阿根廷'},
		{value: '+374',label: 'Armenia', code:'AM', ch_name:'亚美尼亚'},
		{value: '+297',label: 'Aruba', code:'AW', ch_name:'阿鲁巴'},
		{value: '+61',label: 'Australia', code:'AU', ch_name:'澳大利亚'},
		{value: '+43',label: 'Austria', code:'AT', ch_name:'奥地利'},
		{value: '+994',label: 'Azerbaijan', code:'AZ', ch_name:'阿塞拜疆'},
		{value: '+1-242',label: 'Bahamas', code:'BS', ch_name:'巴哈马'},
		{value: '+973',label: 'Bahrain', code:'BH', ch_name:'巴林'},
		{value: '+880',label: 'Bangladesh', code:'BD', ch_name:'孟加拉国'},
		{value: '+1-246',label: 'Barbados', code:'BB', ch_name:'巴巴多斯'},
		{value: '+375',label: 'Belarus', code:'BY', ch_name:'白俄罗斯'},
		{value: '+32',label: 'Belgium', code:'BE', ch_name:'比利时'},
		{value: '+501',label: 'Belize', code:'BZ', ch_name:'伯利兹'},
		{value: '+229',label: 'Benin', code:'BJ', ch_name:'贝宁'},
		{value: '+1-441',label: 'Bermuda', code:'BM', ch_name:'百慕大群岛'},
		{value: '+975',label: 'Bhutan', code:'BT', ch_name:'不丹'},
		{value: '+591',label: 'Bolivia', code:'BO', ch_name:'玻利维亚'},
		{value: '+387',label: 'Bosnia and Herzegovina', code:'BA', ch_name:'波斯尼亚和黑塞哥维那'},
		{value: '+267',label: 'Botswana', code:'BW', ch_name:'博茨瓦纳'},
		{value: '+47',label: 'Bouvet Island', code:'BV', ch_name:'布韦岛'},
		{value: '+55',label: 'Brazil', code:'BR', ch_name:'巴西'},
		{value: '+1-284',label: 'British Virgin Islands', code:'VG', ch_name:'英属维尔京群岛'},
		{value: '+246',label: 'British Indian Ocean Territory', code:'IO', ch_name:'不列颠印度洋属土'},
		{value: '+673',label: 'Brunei Darussalam', code:'BN', ch_name:'文莱达鲁萨兰国'},
		{value: '+359',label: 'Bulgaria', code:'BG', ch_name:'保加利亚'},
		{value: '+226',label: 'Burkina Faso', code:'BF', ch_name:'布基纳法索'},
		{value: '+257',label: 'Burundi', code:'BI', ch_name:'布隆迪'},
		{value: '+855',label: 'Cambodia', code:'KH', ch_name:'柬埔寨'},
		{value: '+237',label: 'Cameroon', code:'CM', ch_name:'喀麦隆'},
		{value: '+1',label: 'Canada', code:'CA', ch_name:'加拿大'},
		{value: '+238',label: 'Cape Verde', code:'CV', ch_name:'佛得角'},
		{value: '+1-345',label: 'Cayman Islands', code:'KY', ch_name:'开曼群岛'},
		{value: '+236',label: 'Central African Republic', code:'CF', ch_name:'中非共和国'},
		{value: '+235',label: 'Chad', code:'TD', ch_name:'乍得'},
		{value: '+56',label: 'Chile', code:'CL', ch_name:'智利'},
		{value: '+86',label: 'China', code:'CN', ch_name:'中国'},
		{value: '+852',label: 'Hong Kong, SAR China', code:'HK', ch_name:'香港特区中国'},
		{value: '+853',label: 'Macao, SAR China', code:'MO', ch_name:'澳门特区中国'},
		{value: '+61',label: 'Christmas Island', code:'CX', ch_name:'圣诞岛'},
		{value: '+61',label: 'Cocos (Keeling) Islands', code:'CC', ch_name:'科科斯群岛（基灵群岛）'},
		{value: '+57',label: 'Colombia', code:'CO', ch_name:'哥伦比亚'},
		{value: '+269',label: 'Comoros', code:'KM', ch_name:'科摩罗'},
		{value: '+242',label: 'Congo (Brazzaville)', code:'CG', ch_name:'刚果（布拉柴维尔）'},
		{value: '+243',label: 'Congo  (Kinshasa)', code:'CD', ch_name:'刚果（金沙萨）'},
		{value: '+682',label: 'Cook Islands', code:'CK', ch_name:'库克群岛'},
		{value: '+506',label: 'Costa Rica', code:'CR', ch_name:'哥斯达黎加'},
		{value: '+225',label: 'Côte d\'Ivoire', code:'CI', ch_name:'科特迪瓦'},
		{value: '+385',label: 'Croatia', code:'HR', ch_name:'克罗地亚'},
		{value: '+53',label: 'Cuba', code:'CU', ch_name:'古巴'},
		{value: '+357',label: 'Cyprus', code:'CY', ch_name:'塞浦路斯'},
		{value: '+420',label: 'Czech Republic', code:'CZ', ch_name:'捷克共和国'},
		{value: '+45',label: 'Denmark', code:'DK', ch_name:'丹麦'},
		{value: '+253',label: 'Djibouti', code:'DJ', ch_name:'吉布提'},
		{value: '+1-767',label: 'Dominica', code:'DM', ch_name:'多米尼加'},
		{value: '+1809',label: 'Dominican Republic', code:'DO', ch_name:'多米尼加共和国'},
		{value: '+593',label: 'Ecuador', code:'EC', ch_name:'厄瓜多尔'},
		{value: '+20',label: 'Egypt', code:'EG', ch_name:'埃及'},
		{value: '+503',label: 'El Salvador', code:'SV', ch_name:'萨尔瓦多'},
		{value: '+240',label: 'Equatorial Guinea', code:'GQ', ch_name:'赤道几内亚'},
		{value: '+291',label: 'Eritrea', code:'ER', ch_name:'厄立特里亚'},
		{value: '+372',label: 'Estonia', code:'EE', ch_name:'爱沙尼亚'},
		{value: '+251',label: 'Ethiopia', code:'ET', ch_name:'埃塞俄比亚'},
		{value: '+500',label: 'Falkland Islands (Malvinas)', code:'FK', ch_name:'福克兰群岛（马尔维纳斯）'},
		{value: '+298',label: 'Faroe Islands', code:'FO', ch_name:'法罗群岛'},
		{value: '+679',label: 'Fiji', code:'FJ', ch_name:'斐济群岛'},
		{value: '+358',label: 'Finland', code:'FI', ch_name:'芬兰'},
		{value: '+33',label: 'France', code:'FR', ch_name:'法国'},
		{value: '+33',label: 'French Guiana', code:'GF', ch_name:'法属圭亚那'},
		{value: '+689',label: 'French Polynesia', code:'PF', ch_name:'法属波利尼西亚'},
		{value: '+33',label: 'French Southern Territories', code:'TF', ch_name:'法属南部领地'},
		{value: '+241',label: 'Gabon', code:'GA', ch_name:'加蓬'},
		{value: '+220',label: 'Gambia', code:'GM', ch_name:'冈比亚'},
		{value: '+995',label: 'Georgia', code:'GE', ch_name:'乔治亚'},
		{value: '+49',label: 'Germany', code:'DE', ch_name:'德国'},
		{value: '+233',label: 'Ghana', code:'GH', ch_name:'加纳'},
		{value: '+350',label: 'Gibraltar', code:'GI', ch_name:'直布罗陀'},
		{value: '+30',label: 'Greece', code:'GR', ch_name:'希腊'},
		{value: '+299',label: 'Greenland', code:'GL', ch_name:'格陵兰'},
		{value: '+1-473',label: 'Grenada', code:'GD', ch_name:'格林纳达'},
		{value: '+33',label: 'Guadeloupe', code:'GP', ch_name:'瓜德罗普岛'},
		{value: '+1-671',label: 'Guam', code:'GU', ch_name:'关岛'},
		{value: '+502',label: 'Guatemala', code:'GT', ch_name:'危地马拉'},
		{value: '+44-1481',label: 'Guernsey', code:'GG', ch_name:'根西岛'},
		{value: '+224',label: 'Guinea', code:'GN', ch_name:'几内亚'},
		{value: '+245',label: 'Guinea-Bissau', code:'GW', ch_name:'几内亚比绍'},
		{value: '+592',label: 'Guyana', code:'GY', ch_name:'圭亚那'},
		{value: '+509',label: 'Haiti', code:'HT', ch_name:'海地'},
		{value: '+672',label: 'Heard and Mcdonald Islands', code:'HM', ch_name:'听到和麦克唐纳群岛'},
		{value: '+379',label: 'Holy See (Vatican City State)', code:'VA', ch_name:'教廷（梵蒂冈城）'},
		{value: '+504',label: 'Honduras', code:'HN', ch_name:'洪都拉斯'},
		{value: '+36',label: 'Hungary', code:'HU', ch_name:'匈牙利'},
		{value: '+354',label: 'Iceland', code:'IS', ch_name:'冰岛'},
		{value: '+91',label: 'India', code:'IN', ch_name:'印度'},
		{value: '+62',label: 'Indonesia', code:'ID', ch_name:'印度尼西亚'},
		{value: '+98',label: 'Iran Islamic Republic of', code:'IR', ch_name:'伊朗伊斯兰共和国'},
		{value: '+964',label: 'Iraq', code:'IQ', ch_name:'伊拉克'},
		{value: '+353',label: 'Ireland', code:'IE', ch_name:'爱尔兰'},
		{value: '+44-1624',label: 'Isle of Man', code:'IM', ch_name:'马恩岛'},
		{value: '+972',label: 'Israel', code:'IL', ch_name:'以色列'},
		{value: '+39',label: 'Italy', code:'IT', ch_name:'意大利'},
		{value: '+1-876',label: 'Jamaica', code:'JM', ch_name:'牙买加'},
		{value: '+81',label: 'Japan', code:'JP', ch_name:'日本'},
		{value: '+44-1534',label: 'Jersey', code:'JE', ch_name:'新泽西'},
		{value: '+962',label: 'Jordan', code:'JO', ch_name:'约旦'},
		{value: '+7',label: 'Kazakhstan', code:'KZ', ch_name:'哈萨克斯坦'},
		{value: '+254',label: 'Kenya', code:'KE', ch_name:'肯尼亚'},
		{value: '+686',label: 'Kiribati', code:'KI', ch_name:'基里巴斯'},
		{value: '+850',label: 'Korea (North)', code:'KP', ch_name:'韩国（北）'},
		{value: '+82',label: 'Korea (South)', code:'KR', ch_name:'韩国（南）'},
		{value: '+965',label: 'Kuwait', code:'KW', ch_name:'科威特'},
		{value: '+996',label: 'Kyrgyzstan', code:'KG', ch_name:'吉尔吉斯斯坦'},
		{value: '+856',label: 'Lao PDR', code:'LA', ch_name:'老挝人民民主共和国'},
		{value: '+371',label: 'Latvia', code:'LV', ch_name:'拉脱维亚'},
		{value: '+961',label: 'Lebanon', code:'LB', ch_name:'黎巴嫩'},
		{value: '+266',label: 'Lesotho', code:'LS', ch_name:'莱索托'},
		{value: '+231',label: 'Liberia', code:'LR', ch_name:'利比里亚'},
		{value: '+218',label: 'Libya', code:'LY', ch_name:'利比亚'},
		{value: '+423',label: 'Liechtenstein', code:'LI', ch_name:'列支敦士登'},
		{value: '+370',label: 'Lithuania', code:'LT', ch_name:'立陶宛'},
		{value: '+352',label: 'Luxembourg', code:'LU', ch_name:'卢森堡'},
		{value: '+389',label: 'Macedonia  Republic of', code:'MK', ch_name:'马其顿共和国'},
		{value: '+261',label: 'Madagascar', code:'MG', ch_name:'马达加斯加'},
		{value: '+265',label: 'Malawi', code:'MW', ch_name:'马拉维'},
		{value: '+60',label: 'Malaysia', code:'MY', ch_name:'马来西亚'},
		{value: '+960',label: 'Maldives', code:'MV', ch_name:'马尔代夫'},
		{value: '+223',label: 'Mali', code:'ML', ch_name:'马里'},
		{value: '+356',label: 'Malta', code:'MT', ch_name:'马耳他'},
		{value: '+692',label: 'Marshall Islands', code:'MH', ch_name:'马绍尔群岛'},
		{value: '+33',label: 'Martinique', code:'MQ', ch_name:'马提尼克岛'},
		{value: '+222',label: 'Mauritania', code:'MR', ch_name:'毛里塔尼亚'},
		{value: '+230',label: 'Mauritius', code:'MU', ch_name:'毛里求斯'},
		{value: '+262',label: 'Mayotte', code:'YT', ch_name:'马约特岛'},
		{value: '+52',label: 'Mexico', code:'MX', ch_name:'墨西哥'},
		{value: '+691',label: 'Micronesia  Federated States of', code:'FM', ch_name:'密克罗尼西亚联邦'},
		{value: '+373',label: 'Moldova', code:'MD', ch_name:'摩尔多瓦'},
		{value: '+377',label: 'Monaco', code:'MC', ch_name:'摩纳哥'},
		{value: '+976',label: 'Mongolia', code:'MN', ch_name:'蒙古'},
		{value: '+382',label: 'Montenegro', code:'ME', ch_name:'黑山'},
		{value: '+1-664',label: 'Montserrat', code:'MS', ch_name:'蒙特塞拉特'},
		{value: '+212',label: 'Morocco', code:'MA', ch_name:'摩洛哥'},
		{value: '+258',label: 'Mozambique', code:'MZ', ch_name:'莫桑比克'},
		{value: '+95',label: 'Myanmar', code:'MM', ch_name:'缅甸'},
		{value: '+264',label: 'Namibia', code:'NA', ch_name:'纳米比亚'},
		{value: '+674',label: 'Nauru', code:'NR', ch_name:'瑙鲁'},
		{value: '+977',label: 'Nepal', code:'NP', ch_name:'尼泊尔'},
		{value: '+31',label: 'Netherlands', code:'NL', ch_name:'荷兰'},
		{value: '+599',label: 'Netherlands Antilles', code:'AN', ch_name:'荷属安的列斯群岛'},
		{value: '+687',label: 'New Caledonia', code:'NC', ch_name:'新喀里多尼亚'},
		{value: '+64',label: 'New Zealand', code:'NZ', ch_name:'新西兰'},
		{value: '+505',label: 'Nicaragua', code:'NI', ch_name:'尼加拉瓜'},
		{value: '+227',label: 'Niger', code:'NE', ch_name:'尼日尔'},
		{value: '+234',label: 'Nigeria', code:'NG', ch_name:'尼日利亚'},
		{value: '+683',label: 'Niue', code:'NU', ch_name:'纽埃'},
		{value: '+6723',label: 'Norfolk Island', code:'NF', ch_name:'诺福克岛'},
		{value: '+1-670',label: 'Northern Mariana Islands', code:'MP', ch_name:'北马里亚纳群岛'},
		{value: '+47',label: 'Norway', code:'NO', ch_name:'挪威'},
		{value: '+968',label: 'Oman', code:'OM', ch_name:'阿曼'},
		{value: '+92',label: 'Pakistan', code:'PK', ch_name:'巴基斯坦'},
		{value: '+680',label: 'Palau', code:'PW', ch_name:'帕劳群岛'},
		{value: '+970',label: 'Palestinian Territory', code:'PS', ch_name:'巴勒斯坦领土'},
		{value: '+507',label: 'Panama', code:'PA', ch_name:'巴拿马'},
		{value: '+675',label: 'Papua New Guinea', code:'PG', ch_name:'巴布亚新几内亚'},
		{value: '+595',label: 'Paraguay', code:'PY', ch_name:'巴拉圭'},
		{value: '+51',label: 'Peru', code:'PE', ch_name:'秘鲁'},
		{value: '+63',label: 'Philippines', code:'PH', ch_name:'菲律宾'},
		{value: '+64',label: 'Pitcairn', code:'PN', ch_name:'皮特凯恩'},
		{value: '+48',label: 'Poland', code:'PL', ch_name:'波兰'},
		{value: '+351',label: 'Portugal', code:'PT', ch_name:'葡萄牙'},
		{value: '+1',label: 'Puerto Rico', code:'PR', ch_name:'波多黎各'},
		{value: '+974',label: 'Qatar', code:'QA', ch_name:'卡塔尔'},
		{value: '+262',label: 'Réunion', code:'RE', ch_name:'团圆'},
		{value: '+40',label: 'Romania', code:'RO', ch_name:'罗马尼亚'},
		{value: '+7',label: 'Russian Federation', code:'RU', ch_name:'俄罗斯联邦'},
		{value: '+250',label: 'Rwanda', code:'RW', ch_name:'卢旺达'},
		{value: '+590',label: 'Saint-Barthélemy', code:'BL', ch_name:'圣巴泰勒米'},
		{value: '+290',label: 'Saint Helena', code:'SH', ch_name:'圣赫勒拿'},
		{value: '+1-869',label: 'Saint Kitts and Nevis', code:'KN', ch_name:'圣基茨和尼维斯'},
		{value: '+1-758',label: 'Saint Lucia', code:'LC', ch_name:'圣卢西亚'},
		{value: '+590',label: 'Saint-Martin (French part)', code:'MF', ch_name:'圣马丁'},
		{value: '+508',label: 'Saint Pierre and Miquelon', code:'PM', ch_name:'圣皮埃尔和密克隆'},
		{value: '+1-784',label: 'Saint Vincent and Grenadines', code:'VC', ch_name:'圣文森特和格林纳丁斯'},
		{value: '+685',label: 'Samoa', code:'WS', ch_name:'萨摩亚'},
		{value: '+378',label: 'San Marino', code:'SM', ch_name:'圣马力诺'},
		{value: '+239',label: 'Sao Tome and Principe', code:'ST', ch_name:'圣多美和普林西比'},
		{value: '+966',label: 'Saudi Arabia', code:'SA', ch_name:'沙特阿拉伯'},
		{value: '+221',label: 'Senegal', code:'SN', ch_name:'塞内加尔'},
		{value: '+381',label: 'Serbia', code:'RS', ch_name:'塞尔维亚共和国'},
		{value: '+248',label: 'Seychelles', code:'SC', ch_name:'塞拉利昂'},
		{value: '+232',label: 'Sierra Leone', code:'SL', ch_name:'塞拉利昂'},
		{value: '+65',label: 'Singapore', code:'SG', ch_name:'新加坡'},
		{value: '+421',label: 'Slovakia', code:'SK', ch_name:'斯洛伐克'},
		{value: '+386',label: 'Slovenia', code:'SI', ch_name:'斯洛文尼亚'},
		{value: '+677',label: 'Solomon Islands', code:'SB', ch_name:'所罗门群岛'},
		{value: '+252',label: 'Somalia', code:'SO', ch_name:'索马里'},
		{value: '+27',label: 'South Africa', code:'ZA', ch_name:'南非'},
		{value: '+500',label: 'South Georgia and the South Sandwich Islands', code:'GS', ch_name:'南乔治亚和南桑威奇群岛'},
		{value: '+211',label: 'South Sudan', code:'SS', ch_name:'南苏丹'},
		{value: '+34',label: 'Spain', code:'ES', ch_name:'西班牙'},
		{value: '+94',label: 'Sri Lanka', code:'LK', ch_name:'斯里兰卡'},
		{value: '+249',label: 'Sudan', code:'SD', ch_name:'苏丹'},
		{value: '+597',label: 'Suriname', code:'SR', ch_name:'苏里南'},
		{value: '+47',label: 'Svalbard and Jan Mayen Islands', code:'SJ', ch_name:'斯瓦尔巴群岛和扬马宁群岛'},
		{value: '+268',label: 'Swaziland', code:'SZ', ch_name:'斯威士兰'},
		{value: '+46',label: 'Sweden', code:'SE', ch_name:'瑞典'},
		{value: '+41',label: 'Switzerland', code:'CH', ch_name:'瑞士'},
		{value: '+963',label: 'Syrian Arab Republic (Syria)', code:'SY', ch_name:'阿拉伯叙利亚共和国（叙利亚）'},
		{value: '+886',label: 'Taiwan Republic of China', code:'TW', ch_name:'台湾'},
		{value: '+992',label: 'Tajikistan', code:'TJ', ch_name:'塔吉克斯坦'},
		{value: '+255',label: 'Tanzania United Republic of', code:'TZ', ch_name:'坦桑尼亚联合共和国'},
		{value: '+66',label: 'Thailand', code:'TH', ch_name:'泰国'},
		{value: '+670',label: 'Timor-Leste', code:'TL', ch_name:'东帝汶'},
		{value: '+228',label: 'Togo', code:'TG', ch_name:'多哥'},
		{value: '+690',label: 'Tokelau', code:'TK', ch_name:'托克劳'},
		{value: '+676',label: 'Tonga', code:'TO', ch_name:'汤加'},
		{value: '+1-868',label: 'Trinidad and Tobago', code:'TT', ch_name:'特立尼达和多巴哥'},
		{value: '+216',label: 'Tunisia', code:'TN', ch_name:'突尼斯'},
		{value: '+90',label: 'Turkey', code:'TR', ch_name:'土耳其'},
		{value: '+993',label: 'Turkmenistan', code:'TM', ch_name:'土库曼斯坦'},
		{value: '+1-649',label: 'Turks and Caicos Islands', code:'TC', ch_name:'特克斯群岛和凯科斯群岛'},
		{value: '+688',label: 'Tuvalu', code:'TV', ch_name:'图瓦卢'},
		{value: '+256',label: 'Uganda', code:'UG', ch_name:'乌干达'},
		{value: '+380',label: 'Ukraine', code:'UA', ch_name:'乌克兰'},
		{value: '+971',label: 'United Arab Emirates', code:'AE', ch_name:'阿拉伯联合酋长国'},
		{value: '+44',label: 'United Kingdom', code:'GB', ch_name:'英国'},
		{value: '+1',label: 'United States of America', code:'US', ch_name:'美国'},
		{value: '+1',label: 'US Minor Outlying Islands', code:'UM', ch_name:'美国小离岛'},
		{value: '+598',label: 'Uruguay', code:'UY', ch_name:'乌拉圭 '},
		{value: '+998',label: 'Uzbekistan', code:'UZ', ch_name:'乌兹别克斯坦'},
		{value: '+678',label: 'Vanuatu', code:'VU', ch_name:'瓦努阿图'},
		{value: '+58',label: 'Venezuela (Bolivarian Republic)', code:'VE', ch_name:'委内瑞拉玻利瓦尔共和国'},
		{value: '+84',label: 'Viet Nam', code:'VN', ch_name:'越南'},
		{value: '+1-340',label: 'Virgin Islands  US', code:'VI', ch_name:'维尔京群岛'},
		{value: '+681',label: 'Wallis and Futuna Islands', code:'WF', ch_name:'瓦利斯群岛和富图纳群岛'},
		{value: '+212',label: 'Western Sahara', code:'EH', ch_name:'撒哈拉沙漠西部'},
		{value: '+967',label: 'Yemen', code:'YE', ch_name:'也门'},
		{value: '+260',label: 'Zambia', code:'ZM', ch_name:'赞比亚'},
		{value: '+263',label: 'Zimbabwe', code:'ZW', ch_name:'津巴布韦'}
	];
	
	vars.country_list_cn_idx = 45;
	
	app1.controller("CommController", function ($scope, $http, $window, UserService, AccountService, AuthUser, AuthUserDemo ,AuthUserYahui, $cookies) {	
		var user_acc_info = angular.fromJson(UserService.getData());
		
		vars.user_acc_info = user_acc_info || null;
		vars.user_acc_type = null;
		vars.display_user_acc_type = null;
		
		if (user_acc_info)
		{
			vars.user_acc_type = user_acc_info.account_type;
			vars.display_user_acc_type = vars.display_acc_types[vars.user_acc_type];
		}
		
		
		var params = {};
		if (location.search) {
			var parts = location.search.substring(1).split('&');

			for (var i = 0; i < parts.length; i++) {
				var nv = parts[i].split('=');
				if (!nv[0]) continue;
				params[nv[0]] = nv[1] || true;
			}
		}

		if ( (params.clickid) || (params.utm_affiliatecode) || (params.eaid) ){
			//console.log("here");
			$cookies.remove("CLICKIDINT", { path: '/' });
			$cookies.remove("AFFILIATEINT", { path: '/' });
			$cookies.remove("EAIDINT", { path: '/' });
		}

		if (params.clickid){	
			var clickidp = params.clickid;	
    		var exp = getAffiliateCodeCookieExpiryDate();

			$cookies.put('CLICKIDINT', clickidp, {
         	   expires: exp,
         	   path: "/"
       		});
		}else{
			var clickid= "";

		}	

		$scope.usingCookieStore = $cookies.get('CLICKIDINT');
  		if ($scope.usingCookieStore != undefined){
			var clickid = $scope.usingCookieStore;
		}

		if (params.utm_affiliatecode){
			params.utm_affiliatecode = parseAffiliateCode(params.utm_affiliatecode);
			
			var affiliatecode = params.utm_affiliatecode;
    		var exp = getAffiliateCodeCookieExpiryDate();

			$cookies.put('AFFILIATEINT', affiliatecode, {
         	   expires: exp,
         	   path: "/"
       		});
		}else{
			var affiliatecode= "";
		}	

		$scope.usingCookieStore2 = $cookies.get('AFFILIATEINT');
		if ($scope.usingCookieStore2 != undefined){
			var affiliatecode = $scope.usingCookieStore2;
		}

		if ((params.eaid) && (params.eaid.length > 0)){
			var eaid = params.eaid;
    		var exp = getAffiliateCodeCookieExpiryDate();

			$cookies.put('EAIDINT', eaid, {
         	   expires: exp,
         	   path: "/"
       		});
		}else{
			var eaid= "";
		}

		$scope.usingCookieStore3 = $cookies.get('EAIDINT');
		if ($scope.usingCookieStore3 != undefined){
			var eaid = $scope.usingCookieStore3;
		}

		var campaignid= "";
		$scope.usingCookieStore4 = $cookies.get('CAMPAINIDINT');
		if ($scope.usingCookieStore4 != undefined){
			campaignid = $scope.usingCookieStore4;
		}

		$scope.step_url=true;
		$scope.demoAuth=false;
		$scope.yahuiAuth=false;
	     if (AuthUserDemo.isAuthenticated() == "truein"){
	       $scope.demoAuth=true;
	    }
	    
	     if (AuthUserYahui.isAuthenticated() == "truein"){
	       $scope.yahuiAuth=true;
	    }
	    // console.log(AuthUser.isAuthenticated());
	    // console.log(AuthUserYahui.isAuthenticated());

		if (AuthUser.isAuthenticated() == "truein" || $scope.demoAuth || $scope.yahuiAuth)
		{
			$('.pos-log a.red-btn.chating').hide();
		}

		function waitForElement(elementPath, callBack){
		  window.setTimeout(function(){
		    if($(document.getElementById('flag_icon')).length){
		      callBack(document.getElementById('flag_icon'), $(elementPath));
		    }else{
		      waitForElement(document.getElementById('flag_icon'), callBack);
		    }
		  },500)
		}

		waitForElement("#flag_icon",function(){
			if (document.getElementById('flag_icon'))
		    	var nodes = document.getElementById('flag_icon').childNodes;
			if (localStorage.phone_ver != 1){
		        angular.element(document.getElementById('flag_icon')).removeClass("hidden");
		    }
		});

		$scope.$watch(function () {
			return $window.localStorage.getItem('logIn'); 
			},function(newVal,oldVal){		
			   if(oldVal!==newVal && newVal === 'out'){
			     $window.location.href = '/cn';
			     AuthUser.logout();
			     AuthUserDemo.logout();
			     AuthUserYahui.logout();
			     localStorage.removeItem("usrloggedinfo");
				 localStorage.removeItem("useraccinfo");
			  }
			})
		$scope.isAuthIN = AuthUser.isAuthenticated;

		if ($window.localStorage['usrloggedinfo'] === undefined || $window.localStorage['usrloggedinfo'] === null || $window.localStorage['usrloggedinfo'] === 0)
		{		$scope.usr = "";
				$scope.email = "";
		localStorage.removeItem("usrloggedinfo");
		 localStorage.removeItem("useraccinfo");
		AuthUser.logout();
		AuthUserDemo.logout();
		AuthUserYahui.logout();
		
		}else{
			if( (window.location.pathname == "/cn/register/step2") || (window.location.pathname == "/cn/register/step3") ){
				$scope.step_url=false;
				$scope.email="";
			}
			else{
				var useraccinfo = angular.fromJson(UserService.getData());
					$scope.email=useraccinfo.username;
					$scope.usr = UserService.getData();
					
					//$scope.email = $scope.usr.username;	
					$scope.value = AccountService.getData();
					$scope.get_balance = (angular.fromJson($scope.value)).totalBalance;
				}
			};
		
		if ($window.localStorage['useraccinfo'] === undefined || $window.localStorage['useraccinfo'] === null || $window.localStorage['useraccinfo'] === 0)
		{
/*			$scope.get_balance = "";*/
			$scope.get_balanceEUR = "";
			$scope.get_balanceUSD = "";
			$scope.get_balanceCNY = "";
			AuthUser.logout();
			AuthUserDemo.logout();
			AuthUserYahui.logout();
			
		}else{
			$scope.value = AccountService.getData();
/*			$scope.get_balance = (angular.fromJson($scope.value)).totalBalance;*/
			$scope.get_balanceEUR = (angular.fromJson($scope.value)).balances.EUR;
			$scope.get_balanceUSD = (angular.fromJson($scope.value)).balances.USD;
			$scope.get_balanceCNY = (angular.fromJson($scope.value)).balances.CNY;			
		};

		if (AuthUser.isAuthenticated() == "truein"){
			var prof_top_elem = document.getElementById("prof_btn_top");
			var log_btn_elem = document.getElementById("login_btn_top");
			var login_elem = document.getElementById("login_btn");
			var login_eve_elem = document.getElementById("login_btn_eve");
			var prof_eve_top = document.getElementById("prof_eve_top");
			// var prof_top_elem = document.getElementById("prof_btn_top");
			// var lang_elem = document.getElementById("lang_span");
			// var log_elemLP = document.getElementsByName("login_btnLP");
			// var prof_elemLP = document.getElementsByName("prof_btnLP");
			// var register_elem = document.getElementById("register_btn");
			// var register_elemLP = document.getElementsByName("register_btnLP");

			angular.element(prof_top_elem).removeClass("hidden");
			angular.element(login_elem).addClass("hidden");
			angular.element(prof_eve_top).removeClass("hidden");			
			angular.element(log_btn_elem).addClass("hidden");
			angular.element(login_eve_elem).addClass("hidden");
			// angular.element(prof_top_elem).removeClass("hidden");
			// angular.element(lang_elem).text("");

			// for(var i=0;i<log_elemLP.length;i++){
			// 	angular.element(log_elemLP[i]).addClass("hidden");
			// 	angular.element(register_elemLP[i]).addClass("hidden");
			// 	angular.element(prof_elemLP[i]).removeClass("hidden");
			// }
			/*Changes for yahui, remove support tab from client portal menu, make logo unclickable*/
			if ($scope.yahuiAuth == true)
			{
				var cp_menu= angular.element(document.getElementById("block-menu-menu-client-portal"));
				if (cp_menu.length)
					angular.element(cp_menu[0].lastElementChild.children[cp_menu[0].lastElementChild.children.length-1]).addClass("hidden");
				var logo_cp_btn = angular.element(document.getElementById("navbar"));
				if (logo_cp_btn.length)
					angular.element(logo_cp_btn[0].lastElementChild.firstElementChild.firstElementChild).addClass("unclickable").removeAttr('href');
				
				var main_menu = $('#block-hycm-menu-hycm-menu');
				if (main_menu.length)
				{
					main_menu.addClass('hidden');
				}
				
				var side_bar = $('.region.region-content-quotes #side-bar.side-pannel.side-bar');
				side_bar.find('li').each(function () {
					var self = $(this);
					if (!self.find('a').hasClass('qq') && !self.find('a').hasClass('deposit'))
					{
						self.addClass('hidden');
					}
				});
				
				showYahuiTermsFooter();
			}
			if ( $scope.demoAuth == true){
				var cp_btn_demo= angular.element(document.getElementById("prof_btn"));
				if (cp_btn_demo)
					angular.element(cp_btn_demo).removeAttr('href').attr('href',"/cn/demo/account/overview");
				var reg_btn_demo= angular.element(document.getElementById("regis_btn"));
				if (reg_btn_demo)
					angular.element(reg_btn_demo).removeAttr('href').attr('href',"/cn/live_registration");
				var prof_btn_top = angular.element(document.getElementById("prof_btn_top"));
				if (prof_btn_top)
					angular.element(prof_btn_top).removeAttr('href').attr('href',"/cn/demo/account/overview");
			}

		}	
		
	if ( (AuthUser.isAuthenticated() == "truein") && (window.location.pathname != "/cn/register/step2") && (window.location.pathname != "/cn/register/step3") ){
		var log_elem = document.getElementById("login_btn");
		var prof_elem = document.getElementById("prof_btn");

		angular.element(log_elem).addClass("hidden");
		angular.element(prof_elem).removeClass("hidden");
	
	}
		
	function waitForElement(elementPath, callBack){
	  window.setTimeout(function(){
			
	    if($(document.getElementById('total_balanceUSD')).length){
	      callBack(document.getElementById('total_balanceUSD'), $(elementPath));
	    }else{
	      waitForElement(document.getElementById('total_balanceUSD'), callBack);
	    }
	  },500)
	}

	waitForElement("#total_balanceUSD",function(){
 		/*document.getElementById("total_balance").innerHTML = $scope.get_balance;*/
 		//document.getElementById("total_balanceEUR").innerHTML = intToFloat($scope.get_balanceEUR,2);
 		//console.log($scope.get_balanceUSD);
		//document.getElementById("total_balanceUSD").innerHTML = intToFloat(floatToNum($scope.get_balanceUSD),2);
		if ($scope.get_balanceUSD2)
			document.getElementById("total_balanceUSD").innerHTML = intToFloat(floatToNum($scope.get_balanceUSD2),2);
		else
			document.getElementById("total_balanceUSD").innerHTML =  "0.00"
/*		document.getElementById("total_balanceCNY").innerHTML = intToFloat($scope.get_balanceCNY,2);*/
	});

	$scope.$watch(function(){
	  return AccountService.getData();
	}, function(){
	  		$scope.valueOnChange = AccountService.getData();
	  		if ($scope.valueOnChange){
	  			$scope.get_balanceUSD2 = (angular.fromJson($scope.valueOnChange)).balances.USD;
	  		}
	  		if (document.getElementById("total_balanceUSD")){
	  			waitForElement("#total_balanceUSD",function(){
					document.getElementById("total_balanceUSD").innerHTML = intToFloat(floatToNum($scope.get_balanceUSD2),2);
				});
			}
	});

		$scope.original_email=$scope.email;
		$scope.medium_email=$scope.email.substring( 0, 24)+"..";
		$scope.small_email=$scope.email.substring( 0, 14)+"..";
		$scope.xsmall_email=$scope.email.substring( 0, 9)+"..";
		$scope.screen_width=$window.innerWidth;

		function waitForId(elementPath, callBack){
			window.setTimeout(function(){

				if($(document.getElementById('username_top')).length){
					callBack(document.getElementById('username_top'), $(elementPath));
				}else{
					waitForId(document.getElementById('username_top'), callBack);
				}
			},500)
		}

		/*Email change in small screens*/
		waitForId("#username_top",function(){
			if ( (window.innerWidth <997) && (window.innerWidth > 568) && ($scope.original_email.length>27) ){
				document.getElementById("username_top").innerHTML = $scope.medium_email;
			}
			else if ( (window.innerWidth > 400) && (window.innerWidth <568) && ($scope.original_email.length>17) ){
				document.getElementById("username_top").innerHTML = $scope.small_email;
			}
			else if ( (window.innerWidth <400) && ($scope.original_email.length>12) ){
				document.getElementById("username_top").innerHTML = $scope.xsmall_email;
			}
			else{
				document.getElementById("username_top").innerHTML = $scope.original_email;
			}
		});

		function waitForIdCont(){
			if ( (window.innerWidth <997) && (window.innerWidth > 568) && ($scope.original_email.length>27) && (document.getElementById("username_top"))){
				document.getElementById("username_top").innerHTML = $scope.medium_email;
			}
			else if ( (window.innerWidth > 400) && (window.innerWidth <568) && ($scope.original_email.length>17)  && (document.getElementById("username_top"))){
				document.getElementById("username_top").innerHTML = $scope.small_email;
			}
			else if ( (window.innerWidth <400) && ($scope.original_email.length>12)  && (document.getElementById("username_top"))){
				document.getElementById("username_top").innerHTML = $scope.xsmall_email;
			}
			else if  ( document.getElementById("username_top") ){
				document.getElementById("username_top").innerHTML = $scope.original_email;
			}
		};

		$(window).resize(function(){
			$scope.$apply(waitForIdCont());
		});

		$scope.logout = function () {
			$http({
				url: vars.api_uri_prefix+'/clients/logout',
				method: "post",
				withCredentials: true,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			})
			localStorage.removeItem("usrloggedinfo");
			localStorage.removeItem("useraccinfo");
			AuthUser.logout();
			AuthUserDemo.logout();
			AuthUserYahui.logout();
			localStorage.clear();
			$window.location.href = '/cn/';
		};

	});
})(jQuery);

(function ($) {
	
	function getArrayIndex(key, source){
	    for (var i = 0; i < source.length; i++) {
	       if ((source[i].label == key) || (source[i].code == key)){
	            return i;
	        }
	    }
	}

	var LoadingCB = function () {
	    angular.element(document.getElementById("load_animCB")).removeClass("hidden");
	    angular.element(document.getElementById("load_msgCB")).removeClass("hidden");
	    angular.element(document.getElementById("load_animCB")).addClass("glyphicon glyphicon-refresh glyphicon-refresh-animate show pull-left");
	    angular.element(document.getElementById("text_btnCB")).addClass("hidden");
	};

	var RemLoadingCB = function () {
	    angular.element(document.getElementById("load_animCB")).addClass("hidden");
	    angular.element(document.getElementById("load_msgCB")).addClass("hidden");
	    angular.element(document.getElementById("text_btnCB")).removeClass("hidden");
	    
	};

app1.controller("HomeController", function ($scope, $http, AuthUser, UserService) {

	$scope.areasCB= vars.country_list;   

	
		if (AuthUser.isAuthenticated() == "truein"){
			var useraccinfo = angular.fromJson(UserService.getData());
			$scope.firstNameCB=useraccinfo.first_name;
			$scope.emailCB=useraccinfo.email;
			var ln=getArrayIndex(useraccinfo.country,$scope.areasCB);
			$scope.areaListCB= $scope.areasCB[ln];
			$scope.phoneCB=useraccinfo.phone;
		}

		function closeModal() {
			setTimeout(function () {
				document.getElementById("btn_addCB").removeAttribute("disabled");
				RemLoadingCB();
				$('#CallBackModal').modal('hide');
			}, 4000);
		}		    

		$scope.SendData = function () {
			LoadingCB();   
			document.getElementById("btn_addCB").setAttribute("disabled", "disabled");

			var data = $.param({            
				nameCB: $scope.firstNameCB,
				surnameCB:$scope.surnameCB,
				emailCB: $scope.emailCB,
				countryCB: $scope.areaListCB.label,
				prefix_phoneCB:$scope.areaListCB.value.replace('+',''),
				phoneCB: $scope.phoneCB,	
				questionCB: $scope.questionCB	
			});

				$http({
					url: vars.api_uri_prefix+'/clients/callback',
					method: "POST",
					withCredentials: true,
					headers: {'Content-Type': 'application/x-www-form-urlencoded'},
					data: data
				})

				.then(function successCallback(response) 
				{	
					angular.element(document.getElementById("name_divCB")).removeClass("pt-30");
					angular.element(document.getElementById("div_btn_CB")).removeClass("mt-10");
					//location.reload(); 
					if(response.data.response.status!="success"){
						$('.alert-success').hide();
						angular.element(document.getElementById("err1CB")).removeClass("hidden");
					}
					else{               
						$('.alert-danger').hide();
						angular.element(document.getElementById("succ1CB")).removeClass("hidden");
					}

				}, 
				function errorCallback() {
					$('.alert-danger').hide();
					$('.alert-success').show();
				});

				closeModal() ;			

				

			
			
			
		}; 
	});

})(jQuery);
