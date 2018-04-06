(function(){

if("undefined"==typeof deconcept)var deconcept=new Object;"undefined"==typeof deconcept.util&&(deconcept.util=new Object),"undefined"==typeof deconcept.SWFObjectUtil&&(deconcept.SWFObjectUtil=new Object),deconcept.SWFObject=function(t,e,i,s,n,r,a,o,l,c){if(document.getElementById){this.DETECT_KEY=c?c:"detectflash",this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY),this.params=new Object,this.variables=new Object,this.attributes=new Array,t&&this.setAttribute("swf",t),e&&this.setAttribute("id",e),i&&this.setAttribute("width",i),s&&this.setAttribute("height",s),n&&this.setAttribute("version",new deconcept.PlayerVersion(n.toString().split("."))),this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion(),!window.opera&&document.all&&this.installedVer.major>7&&(deconcept.SWFObject.doPrepUnload=!0),r&&this.addParam("bgcolor",r);var h=a?a:"high";this.addParam("quality",h),this.setAttribute("useExpressInstall",!1),this.setAttribute("doExpressInstall",!1);var u=o?o:window.location;this.setAttribute("xiRedirectUrl",u),this.setAttribute("redirectUrl",""),l&&this.setAttribute("redirectUrl",l)}},deconcept.SWFObject.prototype={useExpressInstall:function(t){this.xiSWFPath=t?t:"expressinstall.swf",this.setAttribute("useExpressInstall",!0)},setAttribute:function(t,e){this.attributes[t]=e},getAttribute:function(t){return this.attributes[t]},addParam:function(t,e){this.params[t]=e},getParams:function(){return this.params},addVariable:function(t,e){this.variables[t]=e},getVariable:function(t){return this.variables[t]},getVariables:function(){return this.variables},getVariablePairs:function(){var t,e=new Array,i=this.getVariables();for(t in i)e.push(t+"="+i[t]);return e},getSWFHTML:function(){var t="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){this.getAttribute("doExpressInstall")&&(this.addVariable("MMplayerType","PlugIn"),this.setAttribute("swf",this.xiSWFPath)),t='<embed type="application/x-shockwave-flash" src="'+this.getAttribute("swf")+'" width="'+this.getAttribute("width")+'" height="'+this.getAttribute("height")+'"',t+=' id="'+this.getAttribute("id")+'" name="'+this.getAttribute("id")+'" ';var e=this.getParams();for(var i in e)t+=[i]+'="'+e[i]+'" ';var s=this.getVariablePairs().join("&");s.length>0&&(t+='flashvars="'+s+'"'),t+="/>"}else{this.getAttribute("doExpressInstall")&&(this.addVariable("MMplayerType","ActiveX"),this.setAttribute("swf",this.xiSWFPath)),t='<object id="'+this.getAttribute("id")+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+this.getAttribute("width")+'" height="'+this.getAttribute("height")+'">',t+='<param name="movie" value="'+this.getAttribute("swf")+'" />';var e=this.getParams();for(var i in e)t+='<param name="'+i+'" value="'+e[i]+'" />';var s=this.getVariablePairs().join("&");s.length>0&&(t+='<param name="flashvars" value="'+s+'" />'),t+="</object>"}return t},write:function(t){if(this.getAttribute("useExpressInstall")){var e=new deconcept.PlayerVersion([6,0,65]);this.installedVer.versionIsValid(e)&&!this.installedVer.versionIsValid(this.getAttribute("version"))&&(this.setAttribute("doExpressInstall",!0),this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl"))),document.title=document.title.slice(0,47)+" - Flash Player Installation",this.addVariable("MMdoctitle",document.title))}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var i="string"==typeof t?document.getElementById(t):t;return i.innerHTML=this.getSWFHTML(),!0}return""!=this.getAttribute("redirectUrl")&&document.location.replace(this.getAttribute("redirectUrl")),!1}},deconcept.SWFObjectUtil.getPlayerVersion=function(){var t=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var e=navigator.plugins["Shockwave Flash"];e&&e.description&&(t=new deconcept.PlayerVersion(e.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split(".")))}else{try{var i=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(s){try{var i=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");t=new deconcept.PlayerVersion([6,0,21]),i.AllowScriptAccess="always"}catch(s){if(6==t.major)return t}try{i=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(s){}}null!=i&&(t=new deconcept.PlayerVersion(i.GetVariable("$version").split(" ")[1].split(",")))}return t},deconcept.PlayerVersion=function(t){this.major=null!=t[0]?parseInt(t[0]):0,this.minor=null!=t[1]?parseInt(t[1]):0,this.rev=null!=t[2]?parseInt(t[2]):0},deconcept.PlayerVersion.prototype.versionIsValid=function(t){return this.major<t.major?!1:this.major>t.major?!0:this.minor<t.minor?!1:this.minor>t.minor?!0:this.rev<t.rev?!1:!0},deconcept.util={getRequestParameter:function(t){var e=document.location.search||document.location.hash;if(e)for(var i=e.substring(1).split("&"),s=0;s<i.length;s++)if(i[s].substring(0,i[s].indexOf("="))==t)return i[s].substring(i[s].indexOf("=")+1);return""}},deconcept.SWFObjectUtil.cleanupSWFs=function(){for(var t=document.getElementsByTagName("OBJECT"),e=0;e<t.length;e++){t[e].style.display="none";for(var i in t[e])"function"==typeof t[e][i]&&(t[e][i]=function(){})}},deconcept.SWFObject.doPrepUnload&&(deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){},__flash_savedUnloadHandler=function(){},window.attachEvent("onunload",deconcept.SWFObjectUtil.cleanupSWFs)},window.attachEvent("onbeforeunload",deconcept.SWFObjectUtil.prepUnload)),null==Array.prototype.push&&(Array.prototype.push=function(t){return this[this.length]=t,this.length});var getQueryParamValue=deconcept.util.getRequestParameter,FlashObject=deconcept.SWFObject,SWFObject=deconcept.SWFObject;
var Persist=function(){var t,e,s,n,r,a,o="0.1.0";a=function(){var t,e="Thu, 01-Jan-1970 00:00:01 GMT",s=864e5,n=["expires","path","domain"],r=escape,a=unescape,o=document,l=function(){var t=new Date;return t.setTime(t.getTime()),t},c=function(t,e){var i,s,a,o=[],l=arguments.length>2?arguments[2]:{};for(o.push(r(t)+"="+r(e)),i=0;i<n.length;i++)s=n[i],(a=l[s])&&o.push(s+"="+a);return l.secure&&o.push("secure"),o.join("; ")},h=function(){var t="__EC_TEST__",e=new Date;return e=e.toGMTString(),this.set(t,e),this.enabled=this.remove(t)==e,this.enabled};return t={set:function(t,e){var n=arguments.length>2?arguments[2]:{},r=l(),a={};n.expires&&(n.expires*=s,a.expires=new Date(r.getTime()+n.expires),a.expires=a.expires.toGMTString());var h=["path","domain","secure"];for(i=0;i<h.length;i++)n[h[i]]&&(a[h[i]]=n[h[i]]);var u=c(t,e,a);return o.cookie=u,e},has:function(t){t=r(t);var e=o.cookie,i=e.indexOf(t+"="),s=(i+t.length+1,e.substring(0,t.length));return!i&&t!=s||0>i?!1:!0},get:function(t){t=r(t);var e,i=o.cookie,s=i.indexOf(t+"="),n=s+t.length+1,l=i.substring(0,t.length);return!s&&t!=l||0>s?null:(e=i.indexOf(";",n),0>e&&(e=i.length),a(i.substring(n,e)))},remove:function(i){var s=t.get(i),n={expires:e};return o.cookie=c(i,"",n),s},keys:function(){var t,e,i=o.cookie,s=i.split("; "),n=[];for(t=0;t<s.length;t++)e=s[t].split("="),n.push(a(e[0]));return n},all:function(){var t,e,i=o.cookie,s=i.split("; "),n=[];for(t=0;t<s.length;t++)e=s[t].split("="),n.push([a(e[0]),a(e[1])]);return n},version:"0.2.1",enabled:!1},t.enabled=h.call(t),t}(),r=function(){},s=function(t){return"PS"+t.replace(/_/g,"__").replace(/ /g,"_s")},C={search_order:["localstorage","whatwg_db","globalstorage","flash","ie","cookie"],name_re:/^[a-z][a-z0-9_ -]+$/i,methods:["init","get","set","remove","load","save"],sql:{version:"1",create:"CREATE TABLE IF NOT EXISTS persist_data (k TEXT UNIQUE NOT NULL PRIMARY KEY, v TEXT NOT NULL)",get:"SELECT v FROM persist_data WHERE k = ?",set:"INSERT INTO persist_data(k, v) VALUES (?, ?)",remove:"DELETE FROM persist_data WHERE k = ?"},flash:{div_id:"_persist_flash_wrap",id:"_persist_flash",path:"persist.swf",size:{w:1,h:1},args:{autostart:!0}}},e={whatwg_db:{size:204800,test:function(){var t="PersistJS Test",i="Persistent database test.";return window.openDatabase&&window.openDatabase(t,C.sql.version,i,e.whatwg_db.size)?!0:!1},methods:{transaction:function(t){if(!this.db_created){var e=C.sql.create;this.db.transaction(function(t){t.executeSql(e,[],function(){this.db_created=!0})},r)}this.db.transaction(t)},init:function(){var t,i;t=this.o.about||"Persistent storage for "+this.name,i=this.o.size||e.whatwg_db.size,this.db=openDatabase(this.name,C.sql.version,t,i)},get:function(t,e,i){var s=C.sql.get;e&&(i=i||this,this.transaction(function(n){n.executeSql(s,[t],function(t,s){s.rows.length>0?e.call(i,!0,s.rows.item(0).v):e.call(i,!1,null)})}))},set:function(t,e,i,s){var n=C.sql.remove,r=C.sql.set;return this.transaction(function(a){a.executeSql(n,[t],function(){a.executeSql(r,[t,e],function(){i&&i.call(s||this,!0,e)})})}),e},remove:function(t,e,i){var s=C.sql.get;sql=C.sql.remove,this.transaction(function(n){e?n.executeSql(s,[t],function(s,n){if(n.rows.length>0){var r=n.rows.item(0).v;s.executeSql(sql,[t],function(){e.call(i||this,!0,r)})}else e.call(i||this,!1,null)}):n.executeSql(sql,[t])})}}},globalstorage:{size:5242880,test:function(){return window.globalStorage?!0:!1},methods:{key:function(t){return s(this.name)+s(t)},init:function(){this.store=globalStorage[this.o.domain]},get:function(t,e,i){t=this.key(t),e&&e.call(i||this,!0,this.store.getItem(t))},set:function(t,e,i,s){t=this.key(t),this.store.setItem(t,e),i&&i.call(s||this,!0,e)},remove:function(t,e,i){var s;t=this.key(t),s=this.store[t],this.store.removeItem(t),e&&e.call(i||this,null!==s,s)}}},localstorage:{size:-1,test:function(){return window.localStorage?!0:!1},methods:{key:function(t){return s(this.name)+s(t)},init:function(){this.store=localStorage},get:function(t,e,i){t=this.key(t),e&&e.call(i||this,!0,this.store.getItem(t))},set:function(t,e,i,s){t=this.key(t),this.store.setItem(t,e),i&&i.call(s||this,!0,e)},remove:function(t,e,i){var s;t=this.key(t),s=this.getItem(t),this.store.removeItem(t),e&&e.call(i||this,null!==s,s)}}},ie:{prefix:"_persist_data-",size:65536,test:function(){return window.ActiveXObject?!0:!1},make_userdata:function(t){var e=document.createElement("div");return e.id=t,e.style.display="none",e.addBehavior("#default#userData"),document.body.appendChild(e),e},methods:{init:function(){var t=e.ie.prefix+s(this.name);this.el=e.ie.make_userdata(t),this.o.defer&&this.load()},get:function(t,e,i){var n;t=s(t),this.o.defer||this.load(),n=this.el.getAttribute(t),e&&e.call(i||this,n?!0:!1,n)},set:function(t,e,i,n){t=s(t),this.el.setAttribute(t,e),this.o.defer||this.save(),i&&i.call(n||this,!0,e)},load:function(){this.el.load(s(this.name))},save:function(){this.el.save(s(this.name))}}},cookie:{delim:":",size:4e3,test:function(){return t.Cookie.enabled?!0:!1},methods:{key:function(t){return this.name+e.cookie.delim+t},get:function(t,e,i,s){t=this.key(t),e=a.get(t),i&&i.call(s||this,null!=e,e)},set:function(t,e,i,s){t=this.key(t),a.set(t,e,this.o),i&&i.call(s||this,!0,e)},remove:function(t,e,i,s){var e;t=this.key(t),e=a.remove(t),i&&i.call(s||this,null!=e,e)}}},flash:{test:function(){if(!SWFObject||!deconcept||!deconcept.SWFObjectUtil)return!1;var t=deconcept.SWFObjectUtil.getPlayerVersion().major;return t>=8?!0:!1},methods:{init:function(){if(!e.flash.el){var t,i,s,n=C.flash;s=document.createElement("div"),s.id=n.div_id,document.body.appendChild(s),t=new SWFObject(this.o.swf_path||n.path,n.id,n.size.w,n.size.h,"8");for(i in n.args)t.addVariable(i,n.args[i]);t.write(s),e.flash.el=document.getElementById(n.id)}this.el=e.flash.el},get:function(t,e,i){var n;t=s(t),n=this.el.get(this.name,t),e&&e.call(i||this,null!==n,n)},set:function(t,e,i,n){var r;t=s(t),r=this.el.set(this.name,t,e),i&&i.call(n||this,!0,e)},remove:function(t,e,i){var n;t=s(t),n=this.el.remove(this.name,t),e&&e.call(i||this,!0,n)}}}};var n=function(){var i,s,n,a,o=C.methods,l=C.search_order;for(i=0,s=o.length;s>i;i++)t.Store.prototype[o[i]]=r;for(t.type=null,t.size=-1,i=0,s=l.length;!t.type&&s>i;i++)if(n=e[l[i]],n.test()){t.type=l[i],t.size=n.size;for(a in n.methods)t.Store.prototype[a]=n.methods[a]}t._init=!0};return t={VERSION:o,type:null,size:0,add:function(t){e[t.id]=t,C.search_order=[t.id].concat(C.search_order),n()},remove:function(t){var i=C.search_order.indexOf(t);0>i||(C.search_order.splice(i,1),delete e[t],n())},Cookie:a,Store:function(e,i){if(!C.name_re.exec(e))throw new Error("Invalid name");if(!t.type)throw new Error("No suitable storage found");i=i||{},this.name=e,i.domain=i.domain||location.hostname||"localhost.localdomain",this.o=i,i.expires=i.expires||730,i.path=i.path||"/",this.init()}},n(),t}();
var pStore = new Persist.Store('bidguard', {swf_path: './persist.swf'});
pStore.get('key_bid', function(ok, val) {
    if (ok && val) {
        Persist.Cookie.set('test_id_v_session', val);
        Persist.Cookie.set('release_id_v_session', val);
    }
});


	var exId_Url = document.scripts[document.scripts.length - 1].src;

	var exurl = exId_Url.substring(0, exId_Url.indexOf('static/js/id.js?')).split('/');
	var _wyProtocol = (("https:" == document.location.protocol) ? "https://" : "http://");
	exurl = _wyProtocol + exurl[2] + '/';
	var exarr = exId_Url.substring(exId_Url.indexOf('?') + 1, exId_Url.length).split('&');

	for(k in exarr) {
		if (typeof exarr[k] == 'function') continue;
		exarr[k] = exarr[k].substring(exarr[k].indexOf('=') + 1, exarr[k].length);
	}
	var exjs = {
		path   : exurl,
		key    : exarr[0],
		siteid : exarr[1],
		coid   : exarr[2]
	};
	hm(exjs);

	function hm(options){
		var g = function (name, url){
			var obj = new RegExp(name + '\=.*\&', 'i');
			if(obj.test(url)){
				var str = url.match(obj);
				return str.toString().split('=')[1].split('&')[0];
			};
			return '';
		};

		var re = document.referrer;
		if(!re){
			try{
				if(window.opener) re = window.opener.location.href; // IE下如果跨域则抛出权限异常, Safari和Chrome下window.opener.location没有任何属性
			}
			catch(e){}
		};
		rf = re ? re.split('/')[2] : '';

		var domain = document.domain;
		domain = domain.split('.')[1];

		var s = [];
		var k = '';
		s.push("su="+(document.referrer == "" ? document.location.hostname : encodeURIComponent(document.referrer)));
		s.push("tt="+document.title);

		if(rf && rf != domain){
			var d = rf.split(".")[1];
			switch(d){
				case '':
				case domain:
					k = '';
					break;
				case 'm.baidu.com':
					g("word",re);
					break;
				case 'baidu':
					k = g("wd",re);
					break;
				case 'sogou':
					k = g('query', re);
					break;
				case 'youdao':
					k = g('q', re);
					break;
				case 'bind':
					k = g('q', re);
					break;
				case 'google':
					k = g('q', re);
					break;
				case 'haosou':
					k = g('q', re);
					break;
			}
		};

		s.push('sw=' + decodeURIComponent(k));
		s.push('coid=' + options.coid);
		s.push('site_id=' + options.siteid);
		s.push('iscookie=' + agent('cookie'));
		s.push('os=' + agent('system'));
		s.push('flash=' + agent('flash'));
		s.push('resolution=' + agent('resolution'));
		s.push('color=' + agent('color'));
		s.push('language=' + agent('language'));
		s.push('browser=' + agent('browser'));

		var url = options.path + 'kf/hm?' + s.join('&');

		var img = document.createElement('img');
		img.src = url;
		img.style.display = 'none';

		img.onload = function() {
			var se = Persist.Cookie.get('release_id_v_session') || Persist.Cookie.get('test_id_v_session');
			if (se) { pStore.set('key_bid', se); }
		};

		var myint = self.setInterval(function(){
			if (document.body != null && typeof document.body.appendChild != "undefined") {
				clearInterval(myint);
				document.body.appendChild(img);
			}
		}, 100);
	}

	function agent(_type){
		switch (_type) {
			case 'system':
				var wsystem = {
					'WP'      : 'phone',
					'win10'   : 'windows nt 10.0',
					'win8'    : 'windows nt 6.2|windows nt 6.3',
					'win7'    : 'windows nt 6.1|windows7',
					'winxp'   : 'windows nt 5.1|windows xp',
					'vista'   : 'windows nt 6.0|windows vista',
					'win2000' : 'windows nt 5.0|windows 2000',
					'win2003' : 'windows nt 5.2|windows 2003'
				};
				// var is_win = uagent(/win32|windows/);
				var is_win = uagent(/win/i);
				if (is_win) {
					for (var _key in wsystem) {
						if (wsystem.hasOwnProperty(_key)) {
							var _obj = new RegExp(wsystem[_key]);
							if (uagent(_obj)) {
								return _key;
								break;
							};
						}
					};
				};
				var osystem = {
					'ios'        : 'iphone|ipad|ipod',
					'android'    : 'android',
					'blackberry' : 'blackberry|bb10',
					'mac'        : 'mac',
					'linux'      : 'linux'
				};
				for (var _key in osystem) {
					if (osystem.hasOwnProperty(_key)) {
						var _obj = new RegExp(osystem[_key]);
						if (uagent(_obj)) {
							return _key;
							break;
						};
					}
				};
				return '未知';
			break;

			case 'browser':
				var browser = {'firefox' : 'firefox', 'opera' : 'opera', 'chrome' : 'chrome', 'webkit' : 'webkit', 'IE 7.0' : 'msie 7', 'IE 8.0' : 'msie 8', 'IE 9.0' : 'msie 9', 'Safari 3' : 'version3', 'Safari 4' : 'version4'};
				for (var _key in browser) {
					var _obj = new RegExp(browser[_key]);
					if (uagent(_obj)) {
						return _key;
						break;
					};
				};
				return '未知';
			break;

			case 'language':
				if (navigator.appName == 'Netscape') {
					return 	navigator.language;
					break;
				}
				var lang = {'zh-cn' : 'zh-cn', 'en' : 'English', 'nl' : 'dutch', 'fr' : 'french', 'de' : 'german', 'ja' : 'japanese', 'it' : 'italian'};
				var language = navigator.browserLanguage;
				for (var _key in lang) {
					if (language.indexOf(_key) > -1) {
						return lang[_key];
						break;
					};
				};
				return '未知';
			break;

			case 'flash':
				var is_ie = uagent(/msie/);
				if (is_ie) {
					if(typeof ActiveXObject != 'undefined') {
						var swfHandle = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
						if (swfHandle) {
							finfo = swfHandle.GetVariable("$version");
							return parseInt(finfo.split(' ')[1].split(',')[0]);
							break;
						};
					}
				};
				if (navigator.plugins && navigator.plugins.length > 0) {
					var swfHandle = navigator.plugins['Shockwave Flash'];
					if (swfHandle) {
						var words = swfHandle.description.split(' ');
						for (var i = 0; i < words.length; ++i) {
							if (isNaN(parseInt(words[i]))) {
								continue;
							};
						   return parseInt(words[i]);
						   break;
						};
					};
				};
				return '未知';
			break;

			case 'resolution':
				return window.screen.width + '×' + window.screen.height;
			break;

			case 'color':
				return window.screen.colorDepth;
			break;

			case 'cookie':
				if(navigator.cookiesEnabled){
					return 1;
				};
				document.cookie = 'testcookie=yes;';
				var cookieSet = document.cookie;
				if(cookieSet.indexOf('testcookie=yes') > -1){
					document.cookie = '';
					return 1;
				};
				return 0;
			break;
		}
	}

	function uagent(_key){
		var ua = navigator.userAgent.toLowerCase();
		return _key.test(ua);
	}
})();

(function() {
	if(typeof window == 'undefined') return;
	var W   = window;
	var Doc = document;
	var Nav = navigator;
	var Loc = location;
	var Ec  = encodeURIComponent;
	var Dc  = decodeURIComponent;
	var Ne  = unescape;

	var vendor     = 'vendor' in Nav && Nav.vendor.toLowerCase() || '';
	var userAgent  = 'userAgent' in Nav && Nav.userAgent.toLowerCase() || '';
    var appVersion = 'appVersion' in Nav && Nav.appVersion.toLowerCase() || '';
	var is = {
		//手机型号
		ios: function() {
			return /iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent);
		},
		android: function() {
			return /android/i.test(userAgent);
		},
		blackberry: function() {
			return /blackberry/i.test(userAgent) || /BB10/i.test();
		},
		whindowsPhone: function() {
			return is.windows() && /phone/i.test(userAgent);
		},
		//操作系统
		linux: function() {
			return /linux/i.test(appVersion);
		},
		mac: function() {
			return /mac/i.test(appVersion);
		},
		windows: function() {
			return /win/i.test(appVersion);
		},
		// 浏览器系统
		ie: function(version) {
			if(!version) {
                return /msie/i.test(userAgent) || "ActiveXObject" in window;
            }
            if(version >= 11) {
                return "ActiveXObject" in window;
            }
            return new RegExp('msie ' + version).test(userAgent);
		},
		// is current browser chrome?
        chrome: function() {
            return /chrome/i.test(userAgent) && /google inc/.test(vendor);
        },
        firefox: function() {
            return /firefox/i.test(userAgent);
        },
		opera: function() {
            return /^Opera\//.test(userAgent) || // Opera 12 and older versions
                /\x20OPR\//.test(userAgent); // Opera 15+
        },
        safari: function() {
            return /safari/i.test(userAgent) && /apple computer/i.test(vendor);
        },
        edge: function() {
        	 return /edge/i.test(userAgent);
        }
	};
	function Analyst() {
		this.info = {};
	}

	// 异常记录
	function errLog(err, ex) {
		try {
			var e = [];
			e.push('name=' + Ec(err.name));
			e.push('msg=' + Ec(err.message));
			e.push('su=' + Ec(Doc.referrer));
			e.push('page=' + Ec(Loc.href));
			e.push('agent=' + Ec(Nav.userAgent));
			e.push('ex=' + Ec(ex));
			e.push('rnd=' + Math.floor(2147483648 * Math.random()));
			// (new Image).src = options.path + 'kf/hm?' + e.join('&');
		} catch(err) {}
	}

	Analyst.prototype = {
		// 使用正则匹配出referrer中搜索关键词的信息
		getsw: function(name, url) {
			var obj = new RegExp(name + '\=.*\&', 'i');
			if(obj.test(url)){
				var str = url.match(obj);
				return str.toString().split('=')[1].split('&')[0];
			};
			return '';
		},
		setCookie: function() {
			var e;
	        f.I && (e = new Date,
	        e.setTime(e.getTime() + f.I));
	        document.cookie = a + "=" + d
	        	+ (f.domain ? "; domain=" + f.domain : "")
	        	+ (f.path ? "; path=" + f.path : "")
	        	+ (e ? "; expires=" + e.toGMTString() : "")
	        	+ (f.$a ? "; secure" : "");
		},
		getCookie: function() {
			return (a = RegExp("(^| )" + a + "=([^;]*)(;|$)").exec(document.cookie)) ? a[2] : r
		},
		// 获取浏览器插件信息
		getPlugins: function() {
			if (is.ie()) {
				return this.getIEPlugins();
			} else {
				return this.getRegularPlugins();
			}
		},
		getIEPlugins: function() {

		},
		getRegularPlugins: function() {

		},
		/**
		 * 来源网址 source_url
		 * default: ''
		 */
		su: function() {
			try {
				this.info.su = Doc.referrer.eee.ddd || '';
			} catch(e) {
				errLog(e, 'su');
			}
		},
		/**
		 * 网站标题 page_title
		 * default: ''
		 */
		pt: function() {
			try {
				var t = Doc.title;
				this.info.pt = 40 < t.length ? (t.substr(0, 40) + '...') : t;
			} catch(e) {
				errLog(e, 'pt');
			}
		},
		/**
		 * 来源搜索关键词 source_word
		 * default: ''
		 */
		sw: function() {

		},
		/**
		 * 是否支持Cookie cookie_enabled
		 * default: 0, 0 or 1
		 */
		cken: function() {
			try {
				this.info.cken = Nav.cookieEnabled ? 1 : 0;
			} catch(e) {
				errLog(e, 'cken');
			}
		},
		/**
		 * 是否支持并启用了java java_enabled
		 * default: 0, 0 or 1
		 */
		jaen: function() {
			try {
				this.info.jaen = Nav.javaEnabled() ? 1 : 0;
			} catch(e) {
				errLog(e, 'jaen');
			}
		},
		/**
		 * 操作系统名称&版本&x86 or 64 operate_system
		 * default: ''
		 */
		os: function() {

		},
		/**
		 * 浏览器名称&版本 browser
		 * default: ''
		 */
		bs: function() {
			try {

				var bs = this.getBs();
				this.info.bs = bs.bs;
				this.info.bsv = bs.bsv;
			} catch(e) {
				errLog(e, 'lang');
			}
		},
		getBs: function() {
			var result = {bs: '', bsv: ''};
			if(is.ie()) {
				result.bs = 'ie';
				for(var i = 6; i <= 11; i++) {
					if(is.ie(i)) {
						result.bs = 'ie' + i;
						break;
					}
				}
			} else if(is.firefox()) {

			} else if(is.safari()) {

			} else if(is.chrome()) {
				result.bs = 'chrome';
				var bsv = userAgent.match(/chrome\/[0-9.]*/i);
				bsv = bsv[0].split('/')[1];
				result.bsv = bsv;
			} else if(is.edge()) {

			} else if(is.opera()) {



			}
			return result;
		},
		/**
		 * 语言 language
		 * default: '', zh-CN
		 */
		lang: function() {
			try {
				var l = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || '';
				this.info.lang = l.toLowerCase();
			} catch(e) {
				errLog(e, 'lang');
			}
		},
		/**
		 * 分辨率 screen resolution
		 * default: '', 1920x1080
		 */
		sr: function() {
			try {
				var w = W.screen.width || 0;
				var h = W.screen.height || 0;
				this.info.sr = w + 'x' + h;
			} catch(e) {
				errLog(e, 'sr');
			}
		},
		/**
		 * 屏幕颜色深度 color depth
		 * default: '', 32
		 */
		cd: function() {
			try {
				this.info.cd = W.screen.colorDepth || 0;
			} catch(e) {
				errLog(e, 'cd');
			}
		},
		/**
		 * 浏览器系统的cpu等级 cpuClass
		 * default: '', x86
		 */
		cpu: function() {
			try {
				this.info.cpu = Nav.cpuClass || '';
			} catch(e) {
				errLog(e, 'cpu');
			}
		},
		/**
		 * 运行浏览器的操作系统平台 plat
		 * default: '', win32
		 */
		plat: function() {
			try {
				this.info.plat = Nav.platform || '';
			} catch(e) {
				errLog(e, 'plat');
			}
		},
		/**
		 * 不追踪 doNotTrack
		 * default: 0, 0 or 1
		 */
		dnt: function() {
			try {
				this.info.dnt = Nav.doNotTrack || '';
			} catch(e) {
				errLog(e, 'dnt');
			}
		},
		/**
		 * 浏览器插件信息 plugins
		 * default: ''
		 */
		plug: function() {
			try {
				this.info.plug = this.getPlugins();
			} catch(e) {
				errLog(e, 'plug');
			}
		},
		/**
		 * flash版本 flash version
		 * default: ''
		 */
		fl: function() {
			var a = "";
	        if (navigator.plugins && navigator.mimeTypes.length) {
	            var d = navigator.plugins["Shockwave Flash"];
	            d && d.description && (a = d.description.replace(/^.*\s+(\S+)\s+\S+$/, "$1"))
	        } else if (window.ActiveXObject)
	            try {
	                if (d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))
	                    (a = d.GetVariable("$version")) && (a = a.replace(/^.*\s+(\d+),(\d+).*$/, "$1.$2"))
	            } catch (f) {}
	        return a
		},
		/**
		 * 本地时间与格林威治标准时间（GMT）的分钟差 getTimezoneOffset
		 * default: ''
		 */
		tzo: function() {
			try {
				this.info.tzo = new Date().getTimezoneOffset();
			} catch(e) {
				errLog(e, 'tzo');
			}
		},
		/**
		 * 是否支持canvas canvas_enabled
		 * default: 0, 0 or 1
		 */
		cven: function() {
			try {
				var c = document.createElement('canvas');
				this.info.cven = !!(c.getContext && c.getContext("2d")) ? 1 : 0;
			} catch(e) {
				errLog(e, 'cven');
			}
		},
		/**
		 * 百度cookie Baidu_cookie
		 * default: ''
		 */
		bck: function() {

		},
		/**
		 * 站长统计cookie CNZZ_Cookie
		 * default: ''
		 */
		cnck: function() {},
		/**
		 * 首次鼠标点击坐标 mouse_click_position
		 * default: '', {x: 816, y: 114}
		 */
		mcp: function() {},
		/**
		 * 首次鼠标滑动位置 mouse_move_position
		 * default: ''
		 */
		mmp: function() {},
		/**
		 * 页面是否有滚动条 y-scrollbar_enable
		 * default: 0, 0 or 1
		 */
		ysen: function() {},
		/**
		 * 首次滚动条移动位置 y-scrollbar_position
		 * default: ''
		 */
		ysp: function() {}
	};
	// notify();
	var a = new Analyst();
})();


var Id_Url = document.scripts[document.scripts.length - 1].src;
if(typeof require == 'undefined'){
	var script = document.createElement('script');
	script.src = 'https://cdn.file1.goodid.com/static/js/require.min.js';
	 //script.src = 'https://test.10000.com/static/js/require.min.js';
	if(script.readyState){
		script.onreadystatechange = function (){
			if(script.readyState == 'loaded' || script.readyState == 'complete'){
				script.onreadystatechange = null;
				Id_Require();
			};
		};
	}else{
		script.onload = function (){
			Id_Require();
		};
	};
	document.getElementsByTagName('head')[0].appendChild(script);
}

function Id_Require(){
	var url = Id_Url.substring(0, Id_Url.indexOf('static/js/id.js?')).split('/');

	var _wyhmProtocol = (("https:" == document.location.protocol) ? "https://" : "http://");
	url = _wyhmProtocol + url[2] + '/';
	require.config({
		paths : {
			// jquery   : 'http://cdn.file1.goodid.com/static/js/jquery.min',
			jquery   : url + 'static/js/jquery',
			chat     : url + 'static/js/chat/chat',
			// chat     : url + 'static/js/chat/chat.old',
			paint    : url + 'static/js/chat/paint',
			custom   : url + 'static/js/chat/custom',
			template : url + 'static/js/chat/template'
		},
		urlArgs: 'v=20160801'
	});

	if(typeof jQuery == 'undefined'){
		require(['jquery', 'chat'], function ($, Chat){
			kf(Chat);
		});
	}else{
		require(['chat'], function (Chat){
			kf(Chat);
		});
	};

	function kf(Chat){
		jQuery('body').append('<div id="ichat"></div>');

		var arr = Id_Url.substring(Id_Url.indexOf('?') + 1, Id_Url.length).split('&');
		// for(k in arr) arr[k] = arr[k].substring(arr[k].indexOf('=') + 1, arr[k].length);
		for(k in arr) {
			if (typeof arr[k] == 'function') continue;
			arr[k] = arr[k].substring(arr[k].indexOf('=') + 1, arr[k].length);
		}
		var js = {
			path   : url,
			key    : arr[0],
			siteid : arr[1],
			coid   : arr[2]
		};
		Chat.init(js);
	};
};