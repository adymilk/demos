$(document).ready(function(){
	$("header nav ul.navbar-nav li a.dropdown-toggle").click(function(){ window.location.href=$(this).attr("href"); });
});
$('.weixinbox').popover({
	html:true,
	trigger:'hover',
	content:$(".weixinme").html(),
	placement:'top',
	template:'<div class="popover" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>'
});

/*默认功能*/
var metcst = document.querySelector('meta[name="generator"]').getAttribute('data-variable'),
	DataStr = metcst.split("|"),
	met_weburl = DataStr[0],
	lang = DataStr[1],
	classnow = parseInt(DataStr[2]),
	id = parseInt(DataStr[3]),
	met_module = parseInt(DataStr[4]),
	met_skin_user = DataStr[5],
	met_mobile = DataStr[6],
	MetpageType = classnow == 10001 ? 1 : (id ? 3 : 2),
	metcommon = met_mobile == 'mobile' ? "effects/include/common_mobile" : "effects/include/common";
/*异步加载 - 在线交流 - 站长统计 */
var url=met_weburl+'include/interface/uidata.php?lang='+lang,h = window.location.href;
if(h.indexOf("preview=1")!=-1)url = url + '&theme_preview=1';
$.ajax({
	type: "POST",
	url: url,
	dataType:"json",
	success: function(msg){
		var c = msg.config;
		if(c.met_online_type!=3){	  //在线交流
		$.extend({ 
		includePath: '', 
		include: function(file) 
		{ 
		var files = typeof file == "string" ? [file] : file; 
		for (var i = 0; i < files.length; i++) 
		{ 
		var name = files[i].replace(/^\s|\s$/g, ""); 
		var att = name.split('.'); 
		var ext = att[att.length - 1].toLowerCase(); 
		var isCSS = ext == "css"; 
		var tag = isCSS ? "link" : "script"; 
		var attr = isCSS ? " type='text/css' rel='stylesheet' " : " type='text/javascript' "; 
		var link = (isCSS ? "href" : "src") + "='" + $.includePath + name + "'"; 
		if ($(tag + "[" + link + "]").length == 0) $("head").prepend("<" + tag + attr + link + "></" + tag + ">"); 
		} 
		} 
		}); 
		$.include(met_weburl+'public/css/online.css');
/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);
	var t,x,y;

//固定方式
(function($){
jQuery.fn.PositionFixed = function(options) {
	var defaults = {
		css:'',
		x:0,
		y:0
	};
	var o = jQuery.extend(defaults, options);
	var isIe6=false;
	if($.browser.msie && parseInt($.browser.version)==6)isIe6=true;			
	var html= $('html');
	if (isIe6 && html.css('backgroundAttachment') !== 'fixed') {
		html.css('backgroundAttachment','fixed') 
    };
	return this.each(function() {
	var domThis=$(this)[0];
	var objThis=$(this);
		if(isIe6){
			var left = parseInt(o.x) - html.scrollLeft(),
				top = parseInt(o.y) - html.scrollTop();
			objThis.css('position' , 'absolute');
			domThis.style.setExpression('left', 'eval((document.documentElement).scrollLeft + ' + o.x + ') + "px"');
			domThis.style.setExpression('top', 'eval((document.documentElement).scrollTop + ' + o.y + ') + "px"');	
		}else{
			objThis.css('position' , 'fixed').css('top',o.y).css('left',o.x);
		}
	});
};
})(jQuery)
//滚动方式
var Floaters = {
	delta: 0.08,
	queue: null,
	collection: {},
	items: [],
	addItem: function(Obj,left,top,ani){
		Obj.style['top'] = top + 'px';
		Obj.style['left'] = left + 'px';
		var newItem = { object:Obj, oLeft:left, oTop:top };	
		this.items[this.items.length] = newItem;
		this.delta = ani ? ani : this.delta;
	},
	sPlay: function(){
	this.collection = this.items;this.queue = setInterval(function(){metplay()},10);
	}
}
function checkStandard(){
	var scrollY;
	if (document.documentElement && document.documentElement.scrollTop){
		scrollY = document.documentElement.scrollTop;
	}else if (document.body){
		scrollY = document.body.scrollTop;
	}	
	return scrollY;
}
function metplay(){
	var diffY = checkStandard();
	for(var i in Floaters.collection){
		var obj = Floaters.collection[i].object;
		var obj_y = Floaters.collection[i].oTop;
		var total = diffY + obj_y;
		if( obj.offsetTop != total){
			var oy = (total - obj.offsetTop) * Floaters.delta;
				oy = ( oy>0?1:-1 ) * Math.ceil( Math.abs(oy) );
			obj.style['top'] = obj.offsetTop + oy + 'px';
		}else{
			clearInterval(Floaters.queue);
			Floaters.queue = setInterval(function(){metplay()},10);
		}
	}
}
//在线交流部分
function onlineclose(){
	$('#onlinebox').hide();
	return false;
}
function olne_domx(type,onlinex){
	var maxr=document.body.offsetWidth-$('#onlinebox').width();
	if(type>1){
		onlinex=document.body.scrollWidth-$('#onlinebox').width()-onlinex;
	}
	if(onlinex<0)onlinex=0;
	if(onlinex > maxr){
		onlinex=maxr;
		if($.browser.msie && parseInt($.browser.version)==6)onlinex=maxr-18;
	}
	return onlinex;
}
function olne_domx_op(type,onlinex){
	var zwd = document.documentElement.clientWidth;
	var oboxw = $('#onlinebox').width();
		oboxw = oboxw==0?$('#onlinebox .onlinebox-conbox').width():oboxw;
	var maxr=zwd-oboxw;
	if(type>1){
		onlinex=zwd-oboxw-onlinex;
	}
	if(onlinex<0)onlinex=0;
	if(onlinex > maxr){
		onlinex=maxr;
		if($.browser.msie && parseInt($.browser.version)==6)onlinex=maxr-18;
	}
	return onlinex;
}
function olne_dd_wd(d){
	var w=0;
	d.each(function(){
		w=w>$(this).outerWidth(true)?w:$(this).outerWidth(true);
	});
	return w;
}
function olne_mouse_on(t,my,nex,type){
	if(t==1){
		my.hide();
		nex.show();
		var dmk=$('div.onlinebox-conbox .online-tbox').size()?$('div.onlinebox-conbox .online-tbox').outerWidth(true):0;
		var dt=olne_dd_wd($('div.onlinebox-conbox dd'));
			dt=dt>dmk?dt:$('div.onlinebox-conbox .online-tbox').outerWidth(true);
		if(dt<=0)dt=100;
		nex.css({
			'width':dt+'px'
		});
	}else{
		nex.css({
			'position':'absolute',
			'left':'0px'
		});
		nex.hide();	
		my.show();	
	}
	olne_resize();
}
/*页面尺寸变化*/
function olne_resize(){

	mx=Number(olne_domx_op(t,x));
	my=Number(y);
	if(t>0 && t<3){//0固左1滚左2滚右3关闭4固右
		var floatDivr=document.getElementById('onlinebox');
		Floaters.addItem(floatDivr,mx,my);
		Floaters.sPlay();
	}else{
		$('#onlinebox').PositionFixed({x:mx,y:my});  
	}
}
function olne_mouse(dom,type){
	var nex=dom.next('div.onlinebox-conbox');
	if($('.onlinebox_2').size()>0){
		dom.click(function(){ olne_mouse_on(1,$(this),nex,type); });
	}else{
		dom.hover(function(){ olne_mouse_on(1,$(this),nex,type); },function(){});
	}
	$('#onlinebox .onlinebox-top').click(function(){ if(!nex.is(':hidden'))olne_mouse_on(0,dom,nex,type); });
	textWrap($(".onlinebox-showbox span"));
}
function textWrap(my){
	var text='',txt=my.text();
		txt=txt.split("");
		for(var i=0;i<txt.length;i++){
			text+=txt[i]+'<br/>';
		}
		my.html(text);
}

function olne_app(msg,type,mxq,myq){
	$('body').append(msg);
	mx=Number(olne_domx_op(type,mxq));
	my=Number(myq);
	if(type>0 && type<3){//0固左1滚左2滚右3关闭4固右
		var floatDivr=document.getElementById('onlinebox');
		Floaters.addItem(floatDivr,mx,my);
		Floaters.sPlay();
	}else{
		$('#onlinebox').PositionFixed({x:mx,y:my});  
	}
	$(window).resize(function() {
			olne_resize();
	});
	$('#onlinebox').show();
	if($('div.onlinebox-showbox').size()>0)olne_mouse($('div.onlinebox-showbox'),type);
}

$(document).ready(function() {
	var url=met_weburl+'include/online.php?lang='+lang;
	$.ajax({
		type: "POST",
		url: url,
		dataType:"json",
		success: function(msg){
			t=msg.t,x=msg.x,y=msg.y;
			if(t!=3){
				olne_app(msg.html,t,x,y);
			}
		}
	});
});
		}
		if(c.met_stat==1){			  //站长统计
			var navurl=classnow==10001?'':'../';
			var	stat_d=classnow+'-'+id+'-'+lang;
			var	url = met_weburl+'include/stat/stat.php?type=para&u='+navurl+'&d='+stat_d;
			$.getScript(url);
		}
	}
});