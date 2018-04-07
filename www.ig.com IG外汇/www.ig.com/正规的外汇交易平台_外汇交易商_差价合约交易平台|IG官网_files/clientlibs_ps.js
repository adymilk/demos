/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license */
(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)
},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()
},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())
},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))
};
b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;
if(!e){return this
}if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n){return !n||n.jquery?(n||r).find(e):this.constructor(n).find(e)
}if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n)){for(i in n){b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i])
}}return this
}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2]){return r.find(e)
}this.length=1,this[0]=a
}return this.context=o,this.selector=e,this
}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))
},selector:"",length:0,size:function(){return this.length
},toArray:function(){return h.call(this)
},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]
},pushStack:function(e){var t=b.merge(this.constructor(),e);
return t.prevObject=this,t.context=this.context,t
},each:function(e,t){return b.each(this,e,t)
},ready:function(e){return b.ready.promise().done(e),this
},slice:function(){return this.pushStack(h.apply(this,arguments))
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},eq:function(e){var t=this.length,n=+e+(0>e?t:0);
return this.pushStack(n>=0&&t>n?[this[n]]:[])
},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)
}))
},end:function(){return this.prevObject||this.constructor(null)
},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;
for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);
l>u;
u++){if(null!=(o=arguments[u])){for(i in o){e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r))
}}}return s
},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b
},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)
},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body){return setTimeout(b.ready)
}b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))
}},isFunction:function(e){return"function"===b.type(e)
},isArray:Array.isArray||function(e){return"array"===b.type(e)
},isWindow:function(e){return null!=e&&e==e.window
},isNumeric:function(e){return !isNaN(parseFloat(e))&&isFinite(e)
},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e
},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e)){return !1
}try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf")){return !1
}}catch(n){return !1
}var r;
for(r in e){}return r===t||y.call(e,r)
},isEmptyObject:function(e){var t;
for(t in e){return !1
}return !0
},error:function(e){throw Error(e)
},parseHTML:function(e,t,n){if(!e||"string"!=typeof e){return null
}"boolean"==typeof t&&(n=t,t=!1),t=t||o;
var r=C.exec(e),i=!n&&[];
return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))
},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)
},parseXML:function(n){var r,i;
if(!n||"string"!=typeof n){return null
}try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))
}catch(o){r=t
}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r
},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)
})(t)
},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)
},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()
},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);
if(n){if(a){for(;
o>i;
i++){if(r=t.apply(e[i],n),r===!1){break
}}}else{for(i in e){if(r=t.apply(e[i],n),r===!1){break
}}}}else{if(a){for(;
o>i;
i++){if(r=t.call(e[i],i,e[i]),r===!1){break
}}}else{for(i in e){if(r=t.call(e[i],i,e[i]),r===!1){break
}}}}return e
},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)
}:function(e){return null==e?"":(e+"").replace(T,"")
},makeArray:function(e,t){var n=t||[];
return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n
},inArray:function(e,t,n){var r;
if(t){if(g){return g.call(t,e,n)
}for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;
r>n;
n++){if(n in t&&t[n]===e){return n
}}}return -1
},merge:function(e,n){var r=n.length,i=e.length,o=0;
if("number"==typeof r){for(;
r>o;
o++){e[i++]=n[o]
}}else{while(n[o]!==t){e[i++]=n[o++]
}}return e.length=i,e
},grep:function(e,t,n){var r,i=[],o=0,a=e.length;
for(n=!!n;
a>o;
o++){r=!!t(e[o],o),n!==r&&i.push(e[o])
}return i
},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];
if(a){for(;
o>i;
i++){r=t(e[i],i,n),null!=r&&(s[s.length]=r)
}}else{for(i in e){r=t(e[i],i,n),null!=r&&(s[s.length]=r)
}}return f.apply([],s)
},guid:1,proxy:function(e,n){var r,i,o;
return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))
},i.guid=e.guid=e.guid||b.guid++,i):t
},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;
if("object"===b.type(r)){o=!0;
for(u in r){b.access(e,n,u,r[u],!0,a,s)
}}else{if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)
})),n)){for(;
l>u;
u++){n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)))
}}}return o?e:c?n.call(e):l?n(e[0],r):a
},now:function(){return(new Date).getTime()
}}),b.ready.promise=function(t){if(!n){if(n=b.Deferred(),"complete"===o.readyState){setTimeout(b.ready)
}else{if(o.addEventListener){o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1)
}else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);
var r=!1;
try{r=null==e.frameElement&&o.documentElement
}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")
}catch(e){return setTimeout(a,50)
}q(),b.ready()
}}()
}}}return n.promise(t)
},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()
});
function M(e){var t=e.length,n=b.type(e);
return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)
}r=b(o);
var _={};
function F(e){var t=_[e]={};
return b.each(e.match(w)||[],function(e,n){t[n]=!0
}),t
}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);
var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;
u&&o>a;
a++){if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;
break
}}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())
},p={add:function(){if(u){var t=u.length;
(function i(t){b.each(t,function(t,n){var r=b.type(n);
"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)
})
})(arguments),n?o=u.length:r&&(s=t,c(r))
}return this
},remove:function(){return u&&b.each(arguments,function(e,t){var r;
while((r=b.inArray(t,u,r))>-1){u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)
}}),this
},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)
},empty:function(){return u=[],this
},disable:function(){return u=l=r=t,this
},disabled:function(){return !u
},lock:function(){return l=t,r||p.disable(),this
},locked:function(){return !l
},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this
},fire:function(){return p.fireWith(this,arguments),this
},fired:function(){return !!i
}};
return p
},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n
},always:function(){return i.done(arguments).fail(arguments),this
},then:function(){var e=arguments;
return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];
i[o[1]](function(){var e=s&&s.apply(this,arguments);
e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)
})
}),e=null
}).promise()
},promise:function(e){return null!=e?b.extend(e,r):r
}},i={};
return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];
r[o[1]]=a.add,s&&a.add(function(){n=s
},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this
},i[o[0]+"With"]=a.fireWith
}),r.promise(i),e&&e.call(i,i),i
},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)
}
},s,u,l;
if(r>1){for(s=Array(r),u=Array(r),l=Array(r);
r>t;
t++){n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i
}}return i||o.resolveWith(l,n),o.promise()
}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");
if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length){return{}
}s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;
try{delete d.test
}catch(h){t.deleteExpando=!1
}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1
}),d.cloneNode(!0).click());
for(f in {submit:!0,change:!0,focusin:!0}){d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1
}return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];
u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)
}),n=s=u=l=r=a=null,t
}();
var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;
function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;
if(f&&p[f]&&(i||p[f].data)||!u||r!==t){return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a
}}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;
if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));
for(r=0,i=t.length;
i>r;
r++){delete o[t[r]]
}if(!(n?$:b.isEmptyObject)(o)){return
}}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)
}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)
},data:function(e,t,n){return P(e,t,n)
},removeData:function(e,t){return R(e,t)
},_data:function(e,t,n){return P(e,t,n,!0)
},_removeData:function(e,t){return R(e,t,!0)
},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType){return !1
}var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];
return !t||t!==!0&&e.getAttribute("classid")===t
}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;
if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;
r.length>a;
a++){i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]))
}b._data(o,"parsedAttrs",!0)
}return s
}return"object"==typeof e?this.each(function(){b.data(this,e)
}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)
}),t)
},null,n,arguments.length>1,null,!0)
},removeData:function(e){return this.each(function(){b.removeData(this,e)
})
}});
function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();
if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r
}catch(o){}b.data(e,n,r)
}else{r=t
}}return r
}function $(e){var t;
for(t in e){if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t){return !1
}}return !0
}b.extend({queue:function(e,n,r){var i;
return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t
},dequeue:function(e,t){t=t||"fx";
var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)
};
"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()
},_queueHooks:function(e,t){var n=t+"queueHooks";
return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)
})})
}}),b.fn.extend({queue:function(e,n){var r=2;
return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);
b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)
})
},dequeue:function(e){return this.each(function(){b.dequeue(this,e)
})
},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);
n.stop=function(){clearTimeout(r)
}
})
},clearQueue:function(e){return this.queue(e||"fx",[])
},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])
};
"string"!=typeof e&&(n=e,e=t),e=e||"fx";
while(s--){r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u))
}return u(),o.promise(n)
}});
var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;
b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)
},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)
})
},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)
},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]
}catch(n){}})
},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;
if(b.isFunction(e)){return this.each(function(t){b(this).addClass(e.call(this,t,this.className))
})
}if(u){for(t=(e||"").match(w)||[];
s>a;
a++){if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;
while(i=t[o++]){0>r.indexOf(" "+i+" ")&&(r+=i+" ")
}n.className=b.trim(r)
}}}return this
},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;
if(b.isFunction(e)){return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))
})
}if(u){for(t=(e||"").match(w)||[];
s>a;
a++){if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;
while(i=t[o++]){while(r.indexOf(" "+i+" ")>=0){r=r.replace(" "+i+" "," ")
}}n.className=e?b.trim(r):""
}}}return this
},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;
return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)
}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];
while(o=l[a++]){u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)
}}else{(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")
}})
},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;
for(;
r>n;
n++){if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0){return !0
}}return !1
},val:function(e){var n,r,i,o=this[0];
if(arguments.length){return i=b.isFunction(e),this.each(function(n){var o,a=b(this);
1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""
})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set" in r&&r.set(this,o,"value")!==t||(this.value=o))
})
}if(o){return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get" in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)
}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;
return !t||t.specified?e.value:e.text
}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;
for(;
s>u;
u++){if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o){return t
}a.push(t)
}}return a
},set:function(e,t){var n=b.makeArray(t);
return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0
}),n.length||(e.selectedIndex=-1),n
}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;
if(e&&3!==u&&8!==u&&2!==u){return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get" in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set" in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))
}},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);
if(o&&1===e.nodeType){while(n=o[i++]){r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)
}}},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;
return e.setAttribute("type",t),n&&(e.value=n),t
}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;
if(e&&3!==s&&8!==s&&2!==s){return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set" in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get" in o&&null!==(i=o.get(e,n))?i:e[n]
}},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");
return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t
}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);
return o&&o.value!==!1?n.toLowerCase():t
},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n
}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);
return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t
},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)
}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);
return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t
},set:function(e,n,r){var i=e.getAttributeNode(r);
return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t
}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)
}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t
}})
})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);
return null==r?t:r
}})
}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)
}}
})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t
},set:function(e,t){return e.style.cssText=t+""
}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;
return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null
}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value
}}
}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t
}})
});
var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;
function it(){return !0
}function ot(){return !1
}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);
if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)
},f.elem=e),n=(n||"").match(w)||[""],l=n.length;
while(l--){s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0
}e=null
}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);
if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;
while(l--){if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;
while(o--){a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a))
}u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])
}else{for(d in c){b.event.remove(e,d+t[l],n,r,!0)
}}}b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))
}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];
if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);
l;
l=l.parentNode){h.push(l),f=l
}f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)
}d=0;
while((l=h[d++])&&!n.isPropagationStopped()){n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault()
}if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;
try{i[g]()
}catch(v){}b.event.triggered=t,f&&(i[u]=f)
}return n.result
}},dispatch:function(e){e=b.event.fix(e);
var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};
if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;
while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;
while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped()){(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))
}}return c.postDispatch&&c.postDispatch.call(this,e),e.result
}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;
if(u&&l.nodeType&&(!e.button||"click"!==e.type)){for(;
l!=this;
l=l.parentNode||this){if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;
u>a;
a++){i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i)
}o.length&&s.push({elem:l,handlers:o})
}}}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s
},fix:function(e){if(e[b.expando]){return e
}var t,n,r,i=e.type,a=e,s=this.fixHooks[i];
s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;
while(t--){n=r[t],e[n]=a[n]
}return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;
return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e
}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t
}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus){try{return this.focus(),!1
}catch(e){}}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t
},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)
}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});
r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()
}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)
}:function(e,t,n){var r="on"+t;
e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))
},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)
},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;
this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)
},stopPropagation:function(){var e=this.originalEvent;
this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()
}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n
}}
}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;
r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0
}),b._data(r,"submitBubbles",!0))
}),t)
},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))
},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)
}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)
}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)
})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;
Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)
}),b._data(t,"changeBubbles",!0))
}),t)
},handle:function(e){var n=e.target;
return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t
},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)
}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)
};
b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)
},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)
}}
}),b.fn.extend({on:function(e,n,r,i,o){var a,s;
if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);
for(a in e){this.on(a,n,r,e[a],o)
}return this
}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1){i=ot
}else{if(!i){return this
}}return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)
},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)
})
},one:function(e,t,n,r){return this.on(e,t,n,r,1)
},off:function(e,n,r){var i,o;
if(e&&e.preventDefault&&e.handleObj){return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this
}if("object"==typeof e){for(o in e){this.off(o,n,e[o])
}return this
}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)
})
},bind:function(e,t,n){return this.on(e,null,t,n)
},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)
},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)
},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)
})
},triggerHandler:function(e,n){var r=this[0];
return r?b.event.trigger(e,n,r,!0):t
}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;
for(;
n>t;
t++){if(this[t]===e){return t
}}return -1
},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;
return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)
};
try{q.call(w.documentElement.childNodes,0)[0].nodeType
}catch(nt){q=function(e){var t,n=[];
while(t=this[e++]){n.push(t)
}return n
}
}function rt(e){return Y.test(e+"")
}function it(){var e,t=[];
return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r
}
}function ot(e){return e[x]=!0,e
}function at(e){var t=p.createElement("div");
try{return e(t)
}catch(n){return !1
}finally{t=null
}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;
if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e){return n
}if(1!==(s=t.nodeType)&&9!==s){return[]
}if(!d&&!r){if(i=J.exec(e)){if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode){return n
}if(o.id===a){return n.push(o),n
}}else{if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a){return n.push(o),n
}}}else{if(i[2]){return H.apply(n,q.call(t.getElementsByTagName(e),0)),n
}if((a=i[3])&&T.getByClassName&&t.getElementsByClassName){return H.apply(n,q.call(t.getElementsByClassName(a),0)),n
}}}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;
while(u--){l[u]=g+dt(l[u])
}m=V.test(e)&&t.parentNode||t,v=l.join(",")
}if(v){try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n
}catch(b){}finally{f||t.removeAttribute("id")
}}}}return wt(e.replace(W,"$1"),t,n,r)
}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;
return t?"HTML"!==t.nodeName:!1
},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;
return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length
}),T.attributes=at(function(e){e.innerHTML="<select></select>";
var t=typeof e.lastChild.getAttribute("multiple");
return"boolean"!==t&&"string"!==t
}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1
}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);
var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;
return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t
}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")
})?{}:{href:function(e){return e.getAttribute("href",2)
},type:function(e){return e.getAttribute("type")
}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);
return n&&n.parentNode?[n]:[]
}},i.filter.ID=function(e){var t=e.replace(et,tt);
return function(e){return e.getAttribute("id")===t
}
}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);
return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]
}},i.filter.ID=function(e){var t=e.replace(et,tt);
return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");
return n&&n.value===t
}
}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t
}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);
if("*"===e){while(n=o[i++]){1===n.nodeType&&r.push(n)
}return r
}return o
},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t
},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)
},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")
}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")
})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)
}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;
return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))
}:function(e,t){if(t){while(t=t.parentNode){if(t===e){return !0
}}}return !1
},v=f.compareDocumentPosition?function(e,t){var r;
return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1
}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];
if(e===t){return u=!0,0
}if(!o||!a){return e===n?-1:t===n?1:o?-1:a?1:0
}if(o===a){return ut(e,t)
}r=e;
while(r=r.parentNode){s.unshift(r)
}r=t;
while(r=r.parentNode){l.unshift(r)
}while(s[i]===l[i]){i++
}return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0
},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p
},st.matches=function(e,t){return st(e,null,null,t)
},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t))){try{var n=m.call(e,t);
if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType){return n
}}catch(r){}}return st(t,p,null,[e]).length>0
},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)
},st.attr=function(e,t){var n;
return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null
},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)
},st.uniqueSort=function(e){var t,n=[],r=1,i=0;
if(u=!T.detectDuplicates,e.sort(v),u){for(;
t=e[r];
r++){t===e[r-1]&&(i=n.push(r))
}while(i--){e.splice(n[i],1)
}}return e
};
function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);
if(r){return r
}if(n){while(n=n.nextSibling){if(n===t){return -1
}}}return e?1:-1
}function lt(e){return function(t){var n=t.nodeName.toLowerCase();
return"input"===n&&t.type===e
}
}function ct(e){return function(t){var n=t.nodeName.toLowerCase();
return("input"===n||"button"===n)&&t.type===e
}
}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;
while(a--){n[i=o[a]]&&(n[i]=!(r[i]=n[i]))
}})
})
}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;
if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent){return e.textContent
}for(e=e.firstChild;
e;
e=e.nextSibling){n+=o(e)
}}else{if(3===i||4===i){return e.nodeValue
}}}else{for(;
t=e[r];
r++){n+=o(t)
}}return n
},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)
},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e
},PSEUDO:function(e){var t,n=!e[5]&&e[2];
return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))
}},filter:{TAG:function(e){return"*"===e?function(){return !0
}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e
})
},CLASS:function(e){var t=k[e+" "];
return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")
})
},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);
return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0
}
},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;
return 1===r&&0===i?function(e){return !!e.parentNode
}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;
if(m){if(o){while(g){p=t;
while(p=p[g]){if(s?p.nodeName.toLowerCase()===y:1===p.nodeType){return !1
}}h=g="only"===e&&!h&&"nextSibling"
}return !0
}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];
while(p=++d&&p&&p[g]||(f=d=0)||h.pop()){if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];
break
}}}else{if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N){f=l[1]
}else{while(p=++d&&p&&p[g]||(f=d=0)||h.pop()){if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t)){break
}}}}return f-=i,f===r||0===f%r&&f/r>=0
}}
},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);
return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;
while(a--){i=M.call(e,o[a]),e[i]=!(n[i]=o[a])
}}):function(e){return r(e,0,n)
}):r
}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));
return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;
while(s--){(o=a[s])&&(e[s]=!(t[s]=o))
}}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()
}
}),has:ot(function(e){return function(t){return st(e,t).length>0
}
}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1
}
}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;
do{if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang){return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-")
}}while((t=t.parentNode)&&1===t.nodeType);
return !1
}
}),target:function(t){var n=e.location&&e.location.hash;
return n&&n.slice(1)===t.id
},root:function(e){return e===f
},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)
},enabled:function(e){return e.disabled===!1
},disabled:function(e){return e.disabled===!0
},checked:function(e){var t=e.nodeName.toLowerCase();
return"input"===t&&!!e.checked||"option"===t&&!!e.selected
},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0
},empty:function(e){for(e=e.firstChild;
e;
e=e.nextSibling){if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType){return !1
}}return !0
},parent:function(e){return !i.pseudos.empty(e)
},header:function(e){return Q.test(e.nodeName)
},input:function(e){return G.test(e.nodeName)
},button:function(e){var t=e.nodeName.toLowerCase();
return"input"===t&&"button"===e.type||"button"===t
},text:function(e){var t;
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)
},first:pt(function(){return[0]
}),last:pt(function(e,t){return[t-1]
}),eq:pt(function(e,t,n){return[0>n?n+t:n]
}),even:pt(function(e,t){var n=0;
for(;
t>n;
n+=2){e.push(n)
}return e
}),odd:pt(function(e,t){var n=1;
for(;
t>n;
n+=2){e.push(n)
}return e
}),lt:pt(function(e,t,n){var r=0>n?n+t:n;
for(;
--r>=0;
){e.push(r)
}return e
}),gt:pt(function(e,t,n){var r=0>n?n+t:n;
for(;
t>++r;
){e.push(r)
}return e
})}};
for(n in {radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){i.pseudos[n]=lt(n)
}for(n in {submit:!0,reset:!0}){i.pseudos[n]=ct(n)
}function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];
if(c){return t?0:c.slice(0)
}s=e,u=[],l=i.preFilter;
while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));
for(a in i.filter){!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length))
}if(!n){break
}}return t?s.length:s?st.error(e):E(e,u).slice(0)
}function dt(e){var t=0,n=e.length,r="";
for(;
n>t;
t++){r+=e[t].value
}return r
}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;
return t.first?function(t,n,r){while(t=t[i]){if(1===t.nodeType||o){return e(t,n,r)
}}}:function(t,n,s){var u,l,c,p=N+" "+a;
if(s){while(t=t[i]){if((1===t.nodeType||o)&&e(t,n,s)){return !0
}}}else{while(t=t[i]){if(1===t.nodeType||o){if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r){return u===!0
}}else{if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0){return !0
}}}}}}
}function gt(e){return e.length>1?function(t,n,r){var i=e.length;
while(i--){if(!e[i](t,n,r)){return !1
}}return !0
}:e[0]
}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;
for(;
u>s;
s++){(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s))
}return a
}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;
if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;
while(c--){(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))
}}if(o){if(i||e){if(i){l=[],c=y.length;
while(c--){(p=y[c])&&l.push(m[c]=p)
}i(null,y=[],l,u)
}c=y.length;
while(c--){(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))
}}}else{y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)
}})
}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t
},s,!0),p=ht(function(e){return M.call(t,e)>-1
},s,!0),f=[function(e,n,r){return !a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))
}];
for(;
o>u;
u++){if(n=i.relative[e[u].type]){f=[ht(gt(f),n)]
}else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;
o>r;
r++){if(i.relative[e[r].type]){break
}}return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))
}f.push(n)
}}return gt(f)
}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||0.1;
for(w&&(l=u!==p&&u,r=n);
null!=(h=C[b]);
b++){if(a&&h){g=0;
while(m=e[g++]){if(m(h,u,c)){f.push(h);
break
}}w&&(N=k,r=++n)
}o&&((h=!m&&h)&&v--,s&&x.push(h))
}if(v+=b,o&&b!==v){g=0;
while(m=t[g++]){m(x,y,u,c)
}if(s){if(v>0){while(b--){x[b]||y[b]||(y[b]=L.call(f))
}}y=mt(y)
}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)
}return w&&(N=k,l=T),x
};
return o?ot(s):s
}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];
if(!o){t||(t=ft(e)),n=t.length;
while(n--){o=vt(t[n]),o[x]?r.push(o):i.push(o)
}o=S(e,bt(i,r))
}return o
};
function xt(e,t,n){var r=0,i=t.length;
for(;
i>r;
r++){st(e,t[r],n)
}return n
}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);
if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t){return n
}e=e.slice(a.shift().value.length)
}o=U.needsContext.test(e)?0:a.length;
while(o--){if(u=a[o],i.relative[l=u.type]){break
}if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e){return H.apply(n,q.call(r,0)),n
}break
}}}return s(e,p)(r,t,d,n,V.test(e)),n
}i.pseudos.nth=i.pseudos.eq;
function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains
}(e);
var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};
b.fn.extend({find:function(e){var t,n,r,i=this.length;
if("string"!=typeof e){return r=this,this.pushStack(b(e).filter(function(){for(t=0;
i>t;
t++){if(b.contains(r[t],this)){return !0
}}}))
}for(n=[],t=0;
i>t;
t++){b.find(e,this[t],n)
}return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n
},has:function(e){var t,n=b(e,this),r=n.length;
return this.filter(function(){for(t=0;
r>t;
t++){if(b.contains(this,n[t])){return !0
}}})
},not:function(e){return this.pushStack(ft(this,e,!1))
},filter:function(e){return this.pushStack(ft(this,e,!0))
},is:function(e){return !!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)
},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;
for(;
i>r;
r++){n=this[r];
while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);
break
}n=n.parentNode
}}return this.pushStack(o.length>1?b.unique(o):o)
},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1
},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);
return this.pushStack(b.unique(r))
},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))
}}),b.fn.andSelf=b.fn.addBack;
function pt(e,t){do{e=e[t]
}while(e&&1!==e.nodeType);
return e
}b.each({parent:function(e){var t=e.parentNode;
return t&&11!==t.nodeType?t:null
},parents:function(e){return b.dir(e,"parentNode")
},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)
},next:function(e){return pt(e,"nextSibling")
},prev:function(e){return pt(e,"previousSibling")
},nextAll:function(e){return b.dir(e,"nextSibling")
},prevAll:function(e){return b.dir(e,"previousSibling")
},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)
},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)
},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)
},children:function(e){return b.sibling(e.firstChild)
},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)
}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);
return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)
}
}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)
},dir:function(e,n,r){var i=[],o=e[n];
while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r))){1===o.nodeType&&i.push(o),o=o[n]
}return i
},sibling:function(e,t){var n=[];
for(;
e;
e=e.nextSibling){1===e.nodeType&&e!==t&&n.push(e)
}return n
}});
function ft(e,t,n){if(t=t||0,b.isFunction(t)){return b.grep(e,function(e,r){var i=!!t.call(e,r,e);
return i===n
})
}if(t.nodeType){return b.grep(e,function(e){return e===t===n
})
}if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType
});
if(ut.test(t)){return b.filter(t,r,!n)
}t=b.filter(t,r)
}return b.grep(e,function(e){return b.inArray(e,t)>=0===n
})
}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();
if(n.createElement){while(t.length){n.createElement(t.pop())
}}return n
}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));
At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))
},null,e,arguments.length)
},wrapAll:function(e){if(b.isFunction(e)){return this.each(function(t){b(this).wrapAll(e.call(this,t))
})
}if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);
this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;
while(e.firstChild&&1===e.firstChild.nodeType){e=e.firstChild
}return e
}).append(this)
}return this
},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))
}):this.each(function(){var t=b(this),n=t.contents();
n.length?n.wrapAll(e):t.append(e)
})
},wrap:function(e){var t=b.isFunction(e);
return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)
})
},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)
}).end()
},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)
})
},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)
})
},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)
})
},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)
})
},remove:function(e,t){var n,r=0;
for(;
null!=(n=this[r]);
r++){(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)))
}return this
},empty:function(){var e,t=0;
for(;
null!=(e=this[t]);
t++){1===e.nodeType&&b.cleanData(Ot(e,!1));
while(e.firstChild){e.removeChild(e.firstChild)
}e.options&&b.nodeName(e,"select")&&(e.options.length=0)
}return this
},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)
})
},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;
if(e===t){return 1===n.nodeType?n.innerHTML.replace(gt,""):t
}if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");
try{for(;
i>r;
r++){n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e)
}n=0
}catch(o){}}n&&this.empty().append(e)
},null,e,arguments.length)
},replaceWith:function(e){var t=b.isFunction(e);
return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;
n&&(b(this).remove(),n.insertBefore(e,t))
})
},detach:function(e){return this.remove(e,!0)
},domManip:function(e,n,r){e=f.apply([],e);
var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);
if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g)){return this.each(function(i){var o=d.eq(i);
m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)
})
}if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;
p>c;
c++){o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c)
}if(a){for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;
a>c;
c++){o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")))
}}l=i=null
}return this
}});
function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))
}function Ht(e){var t=e.getAttributeNode("type");
return e.type=(t&&t.specified)+"/"+e.type,e
}function qt(e){var t=Et.exec(e.type);
return t?e.type=t[1]:e.removeAttribute("type"),e
}function Mt(e,t){var n,r=0;
for(;
null!=(n=e[r]);
r++){b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))
}}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;
if(s){delete a.handle,a.events={};
for(n in s){for(r=0,i=s[n].length;
i>r;
r++){b.event.add(t,n,s[n][r])
}}}a.data&&(a.data=b.extend({},a.data))
}}function Ft(e,t){var n,r,i;
if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);
for(r in i.events){b.removeEvent(t,r,i.handle)
}t.removeAttribute(b.expando)
}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)
}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;
for(;
a>=r;
r++){n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get())
}return this.pushStack(i)
}
});
function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;
if(!s){for(s=[],r=e.childNodes||e;
null!=(o=r[a]);
a++){!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n))
}}return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s
}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)
}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);
if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e))){for(r=Ot(o),s=Ot(e),a=0;
null!=(i=s[a]);
++a){r[a]&&Ft(i,r[a])
}}if(t){if(n){for(s=s||Ot(e),r=r||Ot(o),a=0;
null!=(i=s[a]);
a++){_t(i,r[a])
}}else{_t(e,o)
}}return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o
},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;
for(;
p>h;
h++){if(o=e[h],o||0===o){if("object"===b.type(o)){b.merge(d,o.nodeType?[o]:o)
}else{if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];
while(i--){s=s.lastChild
}if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;
while(i--){b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}}b.merge(d,s.childNodes),s.textContent="";
while(s.firstChild){s.removeChild(s.firstChild)
}s=f.lastChild
}else{d.push(t.createTextNode(o))
}}}}s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;
while(o=d[h++]){if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;
while(o=s[i++]){kt.test(o.type||"")&&n.push(o)
}}}return s=null,f
},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;
for(;
null!=(n=e[s]);
s++){if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events){for(r in a.events){f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle)
}}l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))
}}}});
var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];
function tn(e,t){if(t in e){return t
}var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;
while(i--){if(t=en[i]+n,t in e){return t
}}return r
}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)
}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;
for(;
s>a;
a++){r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))))
}for(a=0;
s>a;
a++){r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"))
}return e
}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;
if(b.isArray(n)){for(o=Rt(e),i=n.length;
i>s;
s++){a[n[s]]=b.css(e,n[s],!1,o)
}return a
}return r!==t?b.style(e,n,r):b.css(e,n)
},e,n,arguments.length>1)
},show:function(){return rn(this,!0)
},hide:function(){return rn(this)
},toggle:function(e){var t="boolean"==typeof e;
return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()
})
}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");
return""===n?"1":n
}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;
if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t){return s&&"get" in s&&(o=s.get(e,!1,i))!==t?o:l[n]
}if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set" in s&&(r=s.set(e,r,i))===t))){try{l[n]=r
}catch(c){}}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);
return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get" in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a
},swap:function(e,t,n,r){var i,o,a={};
for(o in t){a[o]=e.style[o],e.style[o]=t[o]
}i=n.apply(e,r||[]);
for(o in t){e.style[o]=a[o]
}return i
}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)
},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;
return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u
}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle
},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;
return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u
});
function on(e,t,n){var r=Vt.exec(t);
return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t
}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;
for(;
4>o;
o+=2){"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)))
}return a
}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);
if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i)){return i
}r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0
}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"
}function un(e){var t=o,n=Gt[e];
return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n
}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");
return n.remove(),r
}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)
}):sn(e,n,i):t
},set:function(e,t,r){var i=r&&Rt(e);
return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)
}}
}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?0.01*parseFloat(RegExp.$1)+"":t?"1":""
},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";
n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)
}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t
}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t
}}
})
}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))
},b.expr.filters.visible=function(e){return !b.expr.filters.hidden(e)
}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];
for(;
4>r;
r++){i[e+Zt[r]+t]=o[r]||o[r-2]||o[0]
}return i
}},Ut.test(e)||(b.cssHooks[e+t].set=on)
});
var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;
b.fn.extend({serialize:function(){return b.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");
return e?b.makeArray(e):this
}).filter(function(){var e=this.type;
return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))
}).map(function(e,t){var n=b(this).val();
return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}
}):{name:t.name,value:n.replace(fn,"\r\n")}
}).get()
}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)
};
if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e)){b.each(e,function(){o(this.name,this.value)
})
}else{for(r in e){gn(r,e[r],n,o)
}}return i.join("&").replace(cn,"+")
};
function gn(e,t,n,r){var i;
if(b.isArray(t)){b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)
})
}else{if(n||"object"!==b.type(t)){r(e,t)
}else{for(i in t){gn(e+"["+i+"]",t[i],n,r)
}}}}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)
}
}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)
};
var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");
try{yn=a.href
}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href
}mn=En.exec(yn.toLowerCase())||[];
function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");
var r,i=0,o=t.toLowerCase().match(w)||[];
if(b.isFunction(n)){while(r=o[i++]){"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)
}}}
}function qn(e,n,r,i){var o={},a=e===jn;
function s(u){var l;
return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);
return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)
}),l
}return s(n.dataTypes[0])||!o["*"]&&s("*")
}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};
for(i in n){n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i])
}return r&&b.extend(!0,e,r),e
}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn){return Sn.apply(this,arguments)
}var i,o,a,s=this,u=e.indexOf(" ");
return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)
}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])
}),this
},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)
}
}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})
}
}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)
},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};
var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;
if(2===x){if(!c){c={};
while(t=Tn.exec(a)){c[t[1].toLowerCase()]=t[2]
}}t=c[e.toLowerCase()]
}return null==t?null:t
},getAllResponseHeaders:function(){return 2===x?a:null
},setRequestHeader:function(e,t){var n=e.toLowerCase();
return x||(e=v[n]=v[n]||e,y[e]=t),this
},overrideMimeType:function(e){return x||(p.mimeType=e),this
},statusCode:function(e){var t;
if(e){if(2>x){for(t in e){m[t]=[m[t],e[t]]
}}else{N.always(e[N.status])
}}return this
},abort:function(e){var t=e||T;
return l&&l.abort(t),k(0,t),this
}};
if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x){return N
}u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);
for(i in p.headers){N.setRequestHeader(i,p.headers[i])
}if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x)){return N.abort()
}T="abort";
for(i in {success:1,error:1,complete:1}){N[i](p[i])
}if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")
},p.timeout));
try{x=1,l.send(y,k)
}catch(C){if(!(2>x)){throw C
}k(-1,C)
}}else{k(-1,"No Transport")
}function k(e,n,r,i){var c,y,v,w,T,C=n;
2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))
}return N
},getScript:function(e,n){return b.get(e,t,n,"script")
},getJSON:function(e,t,n){return b.get(e,t,n,"json")
}});
function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;
for(s in c){s in r&&(n[c[s]]=r[s])
}while("*"===l[0]){l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"))
}if(o){for(s in u){if(u[s]&&u[s].test(o)){l.unshift(s);
break
}}}if(l[0] in r){a=l[0]
}else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;
break
}i||(i=s)
}a=a||i
}return a?(a!==l[0]&&l.unshift(a),r[a]):t
}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];
if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1]){for(i in e.converters){a[i.toLowerCase()]=e.converters[i]
}}for(;
r=u[++s];
){if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i){for(n in a){if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));
break
}}}if(i!==!0){if(i&&e["throws"]){t=i(t)
}else{try{t=i(t)
}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}
}}}}l=r
}}return{state:"success",data:t}
}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e
}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)
}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;
return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))
},r.insertBefore(n,r.firstChild)
},abort:function(){n&&n.onload(t,!0)
}}
}});
var On=[],Bn=/(=)\?(?=&|$)|\?\?/;
b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;
return this[e]=!0,e
}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");
return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]
},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments
},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t
}),"script"):t
});
var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;
for(e in Pn){Pn[e](t,!0)
}};
function In(){try{return new e.XMLHttpRequest
}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")
}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return !this.isLocal&&In()||zn()
}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials" in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;
return{send:function(i,o){var a,s,u=n.xhr();
if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields){for(s in n.xhrFields){u[s]=n.xhrFields[s]
}}n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");
try{for(s in i){u.setRequestHeader(s,i[s])
}}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;
try{if(r&&(i||4===u.readyState)){if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i){4!==u.readyState&&u.abort()
}else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);
try{c=u.statusText
}catch(f){c=""
}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404
}}}catch(d){i||o(-1,d)
}p&&o(s,c,p,l)
},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()
},abort:function(){r&&r(t,!0)
}}
}});
var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;
if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;
do{u=u||".5",s/=u,b.style(i.elem,e,s+r)
}while(u!==(u=i.cur()/a)&&1!==u&&--l)
}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n
}return i
}]};
function Kn(){return setTimeout(function(){Xn=t
}),Xn=b.now()
}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;
for(;
o>i;
i++){if(r[i].call(e,t,n)){return
}}})
}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem
}),u=function(){if(i){return !1
}var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;
for(;
u>a;
a++){l.tweens[a].run(o)
}return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)
},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);
return l.tweens.push(r),r
},stop:function(t){var n=0,r=t?l.tweens.length:0;
if(i){return this
}for(i=!0;
r>n;
n++){l.tweens[n].run(1)
}return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this
}}),c=l.props;
for(tr(c,l.opts.specialEasing);
a>o;
o++){if(r=Gn[o].call(l,e,c,l.opts)){return r
}}return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)
}function tr(e,t){var n,r,i,o,a;
for(i in e){if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand" in a){n=a.expand(n),delete e[r];
for(i in n){i in e||(e[i]=n[i],t[i]=o)
}}else{t[r]=o
}}}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");
var n,r=0,i=e.length;
for(;
i>r;
r++){n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)
}},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)
}});
function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);
n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()
}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()
})
})),1===e.nodeType&&("height" in t||"width" in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]
}));
for(i in t){if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show")){continue
}g.push(i)
}}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden" in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()
}),f.done(function(){var t;
b._removeData(e,"fxshow");
for(t in h){b.style(e,t,h[t])
}});
for(i=0;
o>i;
i++){r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))
}}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)
}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")
},cur:function(){var e=rr.propHooks[this.prop];
return e&&e.get?e.get(this):rr.propHooks._default.get(this)
},run:function(e){var t,n=rr.propHooks[this.prop];
return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this
}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;
return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]
},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now
}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)
}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];
b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)
}
}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)
},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);
a.finish=function(){t.stop(!0)
},(i||b._data(this,"finish"))&&t.stop(!0)
};
return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)
},stop:function(e,n,r){var i=function(e){var t=e.stop;
delete e.stop,t(r)
};
return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);
if(n){a[n]&&a[n].stop&&i(a[n])
}else{for(n in a){a[n]&&a[n].stop&&Jn.test(n)&&i(a[n])
}}for(n=o.length;
n--;
){o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1))
}(t||!r)&&b.dequeue(this,e)
})
},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;
for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;
t--;
){o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1))
}for(t=0;
a>t;
t++){r[t]&&r[t].finish&&r[t].finish.call(this)
}delete n.finish
})
}});
function ir(e,t){var n,r={height:e},i=0;
for(t=t?1:0;
4>i;
i+=2-t){n=Zt[i],r["margin"+n]=r["padding"+n]=e
}return t&&(r.opacity=r.width=e),r
}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)
}
}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};
return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)
},r
},b.easing={linear:function(e){return e
},swing:function(e){return 0.5-Math.cos(e*Math.PI)/2
}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;
for(Xn=b.now();
n.length>r;
r++){e=n[r],e()||n[r]!==e||n.splice(r--,1)
}n.length||b.fx.stop(),Xn=t
},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()
},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))
},b.fx.stop=function(){clearInterval(Un),Un=null
},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem
}).length
}),b.fn.offset=function(e){if(arguments.length){return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)
})
}var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;
if(s){return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o
}},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");
"static"===r&&(e.style.position="relative");
var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;
u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using" in t?t.using.call(e,l):i.css(l)
}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];
return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}
}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;
while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position")){e=e.offsetParent
}return e||o.documentElement
})
}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);
b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);
return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)
},e,i,arguments.length,null)
}
});
function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1
}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");
return b.access(this,function(n,r,i){var o;
return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)
},n,a?i:t,a,null)
}
})
}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b
})
})(window);
var matched,browser;
jQuery.uaMatch=function(b){b=b.toLowerCase();
var a=/(edge)[ \/]([\w.]+)/.exec(b)||/(vivaldi)[ \/]([\w.]+)/.exec(b)||/(chrome)[ \/]([\w.]+)/.exec(b)||/version(?=.*?(safari))[\/]([\w.]+)/.exec(b)||/(webkit)[ \/]([\w.]+)/.exec(b)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b)||/(msie) ([\w.]+)/.exec(b)||/(firefox)[ \/]([\w.]+)/.exec(b)||b.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b)||[];
return{browser:a[1]||"",version:a[2]||"0"}
};
if(!jQuery.browser){matched=jQuery.uaMatch(navigator.userAgent);
browser={};
if(matched.browser){browser[matched.browser]=true;
browser.version=matched.version
}if(browser.chrome){browser.webkit=true
}else{if(browser.webkit){browser.safari=true
}}jQuery.browser=browser
}(function(a,b){if(typeof define==="function"&&define.amd){define([],b)
}else{a.lscache=b()
}}(this,function(){var n="lscache-";
var a="-cacheexpiration";
var b=10;
var l=60*1000;
var p=Math.floor(8640000000000000/l);
var t;
var m;
var j="";
var f=false;
function c(){var x="__lscachetest__";
var y=x;
if(t!==undefined){return t
}try{e(x,y);
u(x);
t=true
}catch(w){t=false
}return t
}function o(){if(m===undefined){m=(window.JSON!=null)
}return m
}function h(w){return w+a
}function q(){return Math.floor((new Date().getTime())/l)
}function k(w){return localStorage.getItem(n+j+w)
}function e(w,x){localStorage.removeItem(n+j+w);
localStorage.setItem(n+j+w,x)
}function u(w){localStorage.removeItem(n+j+w)
}function r(x,w){if(!f){return
}if(!"console" in window||typeof window.console.warn!=="function"){return
}window.console.warn("lscache - "+x);
if(w){window.console.warn("lscache - The error was: "+w.message)
}}var g={set:function(D,C,y){if(!c()){return
}if(typeof C!=="string"){if(!o()){return
}try{C=JSON.stringify(C)
}catch(B){return
}}try{e(D,C)
}catch(B){if(B.name==="QUOTA_EXCEEDED_ERR"||B.name==="NS_ERROR_DOM_QUOTA_REACHED"||B.name==="QuotaExceededError"){var F=[];
var x;
for(var A=0;
A<localStorage.length;
A++){x=localStorage.key(A);
if(x.indexOf(n+j)===0&&x.indexOf(a)<0){var G=x.substr((n+j).length);
var w=h(G);
var E=k(w);
if(E){E=parseInt(E,b)
}else{E=p
}F.push({key:G,size:(k(G)||"").length,expiration:E})
}}F.sort(function(I,H){return(H.expiration-I.expiration)
});
var z=(C||"").length;
while(F.length&&z>0){x=F.pop();
r("Cache is full, removing item with key '"+D+"'");
u(x.key);
u(h(x.key));
z-=x.size
}try{e(D,C)
}catch(B){r("Could not add item with key '"+D+"', perhaps it's too big?",B);
return
}}else{r("Could not add item with key '"+D+"'",B);
return
}}if(y){e(h(D),(q()+y).toString(b))
}else{u(h(D))
}},get:function(x){if(!c()){return null
}var w=h(x);
var B=k(w);
if(B){var A=parseInt(B,b);
if(q()>=A){u(x);
u(w);
return null
}}var y=k(x);
if(!y||!o()){return y
}try{return JSON.parse(y)
}catch(z){return y
}},remove:function(w){if(!c()){return null
}u(w);
u(h(w))
},supported:function(){return c()
},flush:function(){if(!c()){return
}for(var x=localStorage.length-1;
x>=0;
--x){var w=localStorage.key(x);
if(w.indexOf(n+j)===0){localStorage.removeItem(w)
}}},setBucket:function(w){j=w
},resetBucket:function(){j=""
},enableWarnings:function(w){f=w
}};
return g
}));
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
(function(f,e){if(typeof exports==="object"&&exports){e(exports)
}else{var g={};
e(g);
if(typeof define==="function"&&define.amd){define(g)
}else{f.Mustache=g
}}}(this,function(V){var R=/\s*/;
var K=/\s+/;
var M=/\S/;
var O=/\s*=/;
var I=/\s*\}/;
var C=/#|\^|\/|>|\{|&|=|!/;
var Q=RegExp.prototype.test;
function D(a,b){return Q.call(a,b)
}function P(a){return !D(M,a)
}var A=Object.prototype.toString;
var L=Array.isArray||function(a){return A.call(a)==="[object Array]"
};
function S(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
}var T={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};
function J(a){return String(a).replace(/[&<>"'\/]/g,function(b){return T[b]
})
}function B(a){this.string=a;
this.tail=a;
this.pos=0
}B.prototype.eos=function(){return this.tail===""
};
B.prototype.scan=function(a){var b=this.tail.match(a);
if(b&&b.index===0){this.tail=this.tail.substring(b[0].length);
this.pos+=b[0].length;
return b[0]
}return""
};
B.prototype.scanUntil=function(b){var c,a=this.tail.search(b);
switch(a){case -1:c=this.tail;
this.pos+=this.tail.length;
this.tail="";
break;
case 0:c="";
break;
default:c=this.tail.substring(0,a);
this.tail=this.tail.substring(a);
this.pos+=a
}return c
};
function E(b,a){this.view=b||{};
this.parent=a;
this._cache={}
}E.make=function(a){return(a instanceof E)?a:new E(a)
};
E.prototype.push=function(a){return new E(a,this)
};
E.prototype.lookup=function(f){var e=this._cache[f];
if(!e){if(f=="."){e=this.view
}else{var a=this;
while(a){if(f.indexOf(".")>0){e=a.view;
var c=f.split("."),b=0;
while(e&&b<c.length){e=e[c[b++]]
}}else{e=a.view[f]
}if(e!=null){break
}a=a.parent
}}this._cache[f]=e
}if(typeof e==="function"){e=e.call(this.view)
}return e
};
function G(){this.clearCache()
}G.prototype.clearCache=function(){this._cache={};
this._partialCache={}
};
G.prototype.compile=function(a,e){var b=this._cache[a];
if(!b){var c=V.parse(a,e);
b=this._cache[a]=this.compileTokens(c,a)
}return b
};
G.prototype.compilePartial=function(b,e,c){var a=this.compile(e,c);
this._partialCache[b]=a;
return a
};
G.prototype.getPartial=function(a){if(!(a in this._partialCache)&&this._loadPartial){this.compilePartial(a,this._loadPartial(a))
}return this._partialCache[a]
};
G.prototype.compileTokens=function(a,b){var c=this;
return function(g,e){if(e){if(typeof e==="function"){c._loadPartial=e
}else{for(var f in e){c.compilePartial(f,e[f])
}}}return H(a,c,E.make(g),b)
}
};
G.prototype.render=function(a,c,b){return this.compile(a)(c,b)
};
function H(n,f,h,k){var b="";
var e,m,l;
for(var a=0,o=n.length;
a<o;
++a){e=n[a];
m=e[1];
switch(e[0]){case"#":l=h.lookup(m);
if(typeof l==="object"){if(L(l)){for(var c=0,g=l.length;
c<g;
++c){b+=H(e[4],f,h.push(l[c]),k)
}}else{if(l){b+=H(e[4],f,h.push(l),k)
}}}else{if(typeof l==="function"){var j=k==null?null:k.slice(e[3],e[5]);
l=l.call(h.view,j,function(p){return f.render(p,h)
});
if(l!=null){b+=l
}}else{if(l){b+=H(e[4],f,h,k)
}}}break;
case"^":l=h.lookup(m);
if(!l||(L(l)&&l.length===0)){b+=H(e[4],f,h,k)
}break;
case">":l=f.getPartial(m);
if(typeof l==="function"){b+=l(h)
}break;
case"&":l=h.lookup(m);
if(l!=null){b+=l
}break;
case"name":l=h.lookup(m);
if(l!=null){b+=V.escape(l)
}break;
case"text":b+=m;
break
}}return b
}function y(c){var g=[];
var e=g;
var b=[];
var j;
for(var a=0,h=c.length;
a<h;
++a){j=c[a];
switch(j[0]){case"#":case"^":b.push(j);
e.push(j);
e=j[4]=[];
break;
case"/":var f=b.pop();
f[5]=j[2];
e=b.length>0?b[b.length-1][4]:g;
break;
default:e.push(j)
}}return g
}function U(b){var a=[];
var e,c;
for(var g=0,f=b.length;
g<f;
++g){e=b[g];
if(e){if(e[0]==="text"&&c&&c[0]==="text"){c[1]+=e[1];
c[3]=e[3]
}else{c=e;
a.push(e)
}}}return a
}function F(a){return[new RegExp(S(a[0])+"\\s*"),new RegExp("\\s*"+S(a[1]))]
}function z(b,p){b=b||"";
p=p||V.tags;
if(typeof p==="string"){p=p.split(K)
}if(p.length!==2){throw new Error("Invalid tags: "+p.join(", "))
}var l=F(p);
var u=new B(b);
var n=[];
var o=[];
var q=[];
var a=false;
var c=false;
function e(){if(a&&!c){while(q.length){delete o[q.pop()]
}}else{q=[]
}a=false;
c=false
}var t,h,m,k,r;
while(!u.eos()){t=u.pos;
m=u.scanUntil(l[0]);
if(m){for(var g=0,f=m.length;
g<f;
++g){k=m.charAt(g);
if(P(k)){q.push(o.length)
}else{c=true
}o.push(["text",k,t,t+1]);
t+=1;
if(k=="\n"){e()
}}}if(!u.scan(l[0])){break
}a=true;
h=u.scan(C)||"name";
u.scan(R);
if(h==="="){m=u.scanUntil(O);
u.scan(O);
u.scanUntil(l[1])
}else{if(h==="{"){m=u.scanUntil(new RegExp("\\s*"+S("}"+p[1])));
u.scan(I);
u.scanUntil(l[1]);
h="&"
}else{m=u.scanUntil(l[1])
}}if(!u.scan(l[1])){throw new Error("Unclosed tag at "+u.pos)
}r=[h,m,t,u.pos];
o.push(r);
if(h==="#"||h==="^"){n.push(r)
}else{if(h==="/"){if(n.length===0){throw new Error('Unopened section "'+m+'" at '+t)
}var j=n.pop();
if(j[1]!==m){throw new Error('Unclosed section "'+j[1]+'" at '+t)
}}else{if(h==="name"||h==="{"||h==="&"){c=true
}else{if(h==="="){p=m.split(K);
if(p.length!==2){throw new Error("Invalid tags at "+t+": "+p.join(", "))
}l=F(p)
}}}}}var j=n.pop();
if(j){throw new Error('Unclosed section "'+j[1]+'" at '+u.pos)
}o=U(o);
return y(o)
}V.name="mustache.js";
V.version="0.7.2";
V.tags=["{{","}}"];
V.Scanner=B;
V.Context=E;
V.Writer=G;
V.parse=z;
V.escape=J;
var N=new G();
V.clearCache=function(){return N.clearCache()
};
V.compile=function(a,b){return N.compile(a,b)
};
V.compilePartial=function(b,a,c){return N.compilePartial(b,a,c)
};
V.compileTokens=function(a,b){return N.compileTokens(a,b)
};
V.render=function(a,c,b){return N.render(a,c,b)
};
V.to_html=function(f,c,a,b){var e=V.render(f,c,a);
if(typeof b==="function"){b(e)
}else{return e
}}
}));
function worldClock(p,F){var z=0,G=new Date,c=G.getTime()+60000*G.getTimezoneOffset(),b=new Date(c),j=b.getDate(),f=b.getMonth(),E=b.getYear();
1000>E&&(E+=1900);
var A=(new Array("January","February","March","April","May","June","July","August","September","October","November","December"),new Array("31","28","31","30","31","30","31","31","30","31","30","31"));
E%4==0&&(A=new Array("31","29","31","30","31","30","31","31","30","31","30","31")),E%100==0&&E%400!=0&&(A=new Array("31","28","31","30","31","30","31","31","30","31","30","31"));
var q=b.getHours()+p,l=b.getMinutes(),C=b.getSeconds();
if(q>=24&&(q-=24,j-=-1),0>q&&(q-=-24,j-=1),10>q&&(q=" "+q),10>l&&(l="0"+l),10>C&&(C="0"+C),0>=j&&(0==f?(f=11,E-=1):f-=1,j=A[f]),j>A[f]&&(j=1,11==f?(f=0,E-=-1):f-=-1),"NAmerica"==F){var B=new Date,m=new Date;
B.setMonth(3),B.setHours(2),B.setDate(1);
var x=B.getDay();
B.setDate(0!=x?8-x:1),m.setMonth(9),m.setHours(1),m.setDate(31),x=m.getDay(),m.setDate(31-x);
var k=new Date;
k.setMonth(f),k.setYear(E),k.setDate(j),k.setHours(q),k>=B&&m>k&&(z=1)
}if("Europe"==F){var B=new Date,m=new Date;
B.setMonth(2),B.setHours(1),B.setDate(31);
var x=B.getDay();
B.setDate(31-x),m.setMonth(9),m.setHours(0),m.setDate(31),x=m.getDay(),m.setDate(31-x);
var k=new Date;
k.setMonth(f),k.setYear(E),k.setDate(j),k.setHours(q),k>=B&&m>k&&(z=1)
}if("SAmerica"==F){var B=new Date,m=new Date;
B.setMonth(9),B.setHours(0),B.setDate(1);
var x=B.getDay();
B.setDate(0!=x?22-x:15),m.setMonth(1),m.setHours(11),m.setDate(1),x=m.getDay(),m.setDate(0!=x?21-x:14);
var k=new Date;
k.setMonth(f),k.setYear(E),k.setDate(j),k.setHours(q),(k>=B||m>k)&&(z=1)
}if("Cairo"==F){var B=new Date,m=new Date;
B.setMonth(3),B.setHours(0),B.setDate(30);
var x=B.getDay();
B.setDate(5>x?28-x:35-x),m.setMonth(8),m.setHours(11),m.setDate(30),x=m.getDay(),m.setDate(4>x?27-x:34-x);
var k=new Date;
k.setMonth(f),k.setYear(E),k.setDate(j),k.setHours(q),k>=B&&m>k&&(z=1)
}if("Israel"==F){var B=new Date,m=new Date;
B.setMonth(3),B.setHours(2),B.setDate(1),m.setMonth(8),m.setHours(2),m.setDate(25),x=m.getDay(),0!=x?m.setDate(32-x):(m.setDate(1),m.setMonth(9));
var k=new Date;
k.setMonth(f),k.setYear(E),k.setDate(j),k.setHours(q),k>=B&&m>k&&(z=1)
}if("Beirut"==F){var B=new Date,m=new Date;
B.setMonth(2),B.setHours(0),B.setDate(31);
var x=B.getDay();
B.setDate(31-x),m.setMonth(9),m.setHours(11),m.setDate(31),x=m.getDay(),m.setDate(30-x);
var k=new Date;
k.setMonth(f),k.setYear(E),k.setDate(j),k.setHours(q),k>=B&&m>k&&(z=1)
}if("Baghdad"==F){var B=new Date,m=new Date;
B.setMonth(3),B.setHours(3),B.setDate(1),m.setMonth(9),m.setHours(3),m.setDate(1),x=m.getDay();
var k=new Date;
k.setMonth(f),k.setYear(E),k.setDate(j),k.setHours(q),k>=B&&m>k&&(z=1)
}if("Australia"==F){var B=new Date,m=new Date;
B.setMonth(9),B.setHours(2),B.setDate(31);
var x=B.getDay();
B.setDate(31-x),m.setMonth(2),m.setHours(2),m.setDate(31),x=m.getDay(),m.setDate(31-x);
var k=new Date;
k.setMonth(f),k.setYear(E),k.setDate(j),k.setHours(q),(k>=B||m>k)&&(z=1)
}return 1==z?(q-=-1,q>=24&&(q-=24,j-=-1),10>q&&(q=" "+q),j>A[f]&&(j=1,11==f?(f=0,E-=-1):f-=-1),q+":"+l+":"+C):q+":"+l+":"+C
}(function(b,a,c){c.fn.backgroundImageLoad=function(g){var j=this,h=encodeURI(g),k=PS.util.backgroundImage.chooseBGImageViewportSelector(),f=false,e=function(){var l=c(j);
l.css("background-image","url('"+g+"')").animate({opacity:1},250).attr(k+"-used",c(j).attr(k));
l.removeAttr(k);
dlog("Responsive-bg-image (backgroundImageLoad): "+g);
if(PS.util.Page.getQuerystring("debug")){l.css("border","2px solid red");
l.append("<h3>Backgropund Image</h3><p>Source:"+g+"</p>")
}f=true
};
c(j).css({opacity:0});
PS.util.pubsub.subscribe("backgroundImage:"+h,e);
setTimeout(function(){if(f===false){PS.util.pubsub.publish("backgroundImage:"+h);
dlog("Responsive-bg-image: timed-out for url:",h)
}},500);
c("<img />").attr("src",g).load(function(m,l){j.each(function(){PS.util.pubsub.publishAndRemove("backgroundImage:"+h)
})
});
return this
}
}(this,document,jQuery));
var jq=jQuery.noConflict();
(function(c){function b(){var g=document.getElementsByTagName("body")[0].className,e=!!window.CQ&&!!window.CQ.WCM,f=f||{};
if(f.runModes&&f.runModes.indexOf("author")>-1){this.inAuthor=true
}if(g.indexOf("cq-wcm-edit")>-1||(e&&window.CQ.WCM.isEditMode(true))){this.inEdit=true
}if(g.indexOf("cq-wcm-design")>-1||(e&&window.CQ.WCM.isDesignMode(true))){this.inDesign=true
}if(g.indexOf("cq-wcm-preview")>-1||(e&&window.CQ.WCM.isPreviewMode(true))){this.inPreview=true
}}b.prototype.inEdit=false;
b.prototype.inDesign=false;
b.prototype.inAuthor=false;
b.prototype.inPreview=false;
function a(){dlog("IG: replacing document.write");
document.write=function(g){var f=g.charAt(0);
var e=g.charAt(g.length-1);
if(f!="<"&&e==">"){a.appendArray.push(g);
g=a.appendArray.join("");
a.appendArray=[];
jq("body").append(g);
return
}if((f=="<"&&e!=">")||a.appendArray.length>0){a.appendArray.push(g);
return
}jq("body").append(g);
dlog("IG: document.write attempted for "+g)
};
document.writeln=document.write
}a.appendArray=new Array();
c.core.CQMode=new b();
c.core.docWrite=a
}(PS));
window.PS=window.PS||{};
PS.util=PS.util||{};
PS.util.pubsub={};
(function(a){var c={};
var b=-1;
a.publish=function(g,f){var h;
var e=0;
if(!c[g]){return false
}e=c[g]?c[g].length:0;
if(e>0){h=c[g].slice(0);
h.reverse()
}while(e--){dlog("Pubsub: publishing",h[e].func,"with",f,"because",g);
h[e].func(g,f)
}return this
};
a.publishAndRemove=function(f,e){this.publish(f,e);
this.removeTopic(f)
};
a.subscribe=function(e,g){var f=(++b).toString();
if(!c[e]){c[e]=[];
dlog("Pubsub: adding topic",e,"to list",c)
}c[e].push({token:f,func:g});
return f
};
a.unsubscribe=function(f,k){var h;
var j;
var g=[];
var e=function(n,m,l){return n.func.toString()===k.toString()
};
if(k===undefined){j=f
}else{g=c[f].filter(e);
j=g[0].token
}h=a.unsubscribeByToken(j);
return h
};
a.unsubscribeByToken=function(k){var g;
for(var f in c){if(c[f]){for(var h=0,e=c[f].length;
h<e;
h++){if(c[f][h].token===k){g=c[f].splice(h,1);
dlog("Pubsub:",g,"original topics[m]:",c[f]);
return k
}}}}return this
};
a.removeTopic=function(f){for(var e in c){if(c[e]===c[f]){delete c[f];
dlog("Pubsub: removed topic",f,"from",c)
}}}
}(PS.util.pubsub));
window.PS=window.PS||{};
PS.events=PS.events||{};
PS.util=PS.util||{};
(function(c,b,a){b.KEYS={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESCAPE:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40,INSERT:45,DELETE:46};
b.attachEventHandlerToWrapper=function(){jq(".wrapper").on("click keydown",function(e){a.pubsub.publish("wrapper.event.userTriggered",e)
})
};
b.userActivated=function(h,f,e,g){var j=false;
f=f||false;
e=e||false;
g=g||false;
if((h.type==="click")||(h.keyCode===this.KEYS.SPACE)||(h.keyCode===this.KEYS.ENTER)){j=true
}if((h.keyCode!==this.KEYS.TAB)&&(!window.opera)){if(f){h.preventDefault()
}if(e){h.stopPropagation()
}if(g){h.stopImmediatePropagation()
}}return j
}
}(window.PS,PS.events,PS.util));
window.PS=window.PS||{};
PS.util=PS.util||{};
PS.events=PS.events||{};
(function(e,a,c){var b={};
"use strict";
b.isLink=function(j){var g=false;
if(typeof j!="undefined"){var f=j.getAttribute("href")||false;
var h=j.href||false;
if(f||h){g=true
}}return g
};
b.isInternalSiteLink=function(g){var f=false;
if(b.isLink(g)&&(g.getAttribute("href").indexOf(window.location.hostname)>-1)||(g.getAttribute("href").indexOf("http")===-1)){f=true
}return f
};
b.getLinkAncestorOfTarget=function(g){if(typeof g.className=="string"){var j=(g.className.indexOf("wrapper")===-1);
var h=(g.className.indexOf("parsys")===-1);
var f=((!g.href)||(g.src));
if(f&&(g.parentNode)&&(h&&j)){g=b.getLinkAncestorOfTarget(g.parentNode)
}return g
}};
b.isAnchorLinkTriggeredByUser=function(g){var f=false;
var h=g.target;
h=b.getLinkAncestorOfTarget(h);
if(b.isLink(h)&&b.isInternalSiteLink(h)&&(h.href.indexOf("#")>-1)&&c.userActivated(g)){f=true
}return f
};
b.isAnchorLinkOnCurrentPage=function(h){var k=h.target;
var g=k.href.split("#").length>0?k.href.split("#")[0]:"";
var f=e.util.Page.getLocationHref();
var j=f.split("#").length>0?f.split("#")[0]:"";
return g===j
};
a.links=b
}(PS,PS.util,PS.events));
window.PS=window.PS||{};
PS.util=PS.util||{};
(function(f,m,q){var j;
var h=f(".main-head");
var l=f(".head-inline-disclaimer");
var p=g();
var e=f("#cookie-disclaimer");
var a=1024;
var t=n();
var o=c();
function g(){if(!k()){return f(window).outerWidth(true)+15
}else{return f(window).outerWidth(true)
}}function k(){return navigator.userAgent.match(/iPad/i)!=null
}function c(){if(p<=a){return true
}else{return false
}}function n(){return h.height()+e.height()+l.height()+10
}function b(A){var u=0;
if(o){u=n()
}var x=A.href,w,z=x.split("#"),y=f("#"+z[1]).offset()||f("a[name='"+z[1]+"']").offset();
if(y){w=y.top-u;
f("html, body").animate({scrollTop:w},500)
}else{if(A.parentNode.className.indexOf("backtotop")>-1){f("html, body").animate({scrollTop:0},500)
}}}f(window).on("orientationchange resize",function(){p=g();
o=c();
t=n()
});
(function r(){j=q.pubsub.subscribe("wrapper.event.userTriggered",function(u,w){var x=q.links.getLinkAncestorOfTarget(w.target);
if(q.links.isAnchorLinkTriggeredByUser(w)&&q.links.isInternalSiteLink(x)&&(!q.Lightboxes||!q.Lightboxes.isLightboxTrigger(x.href))&&q.links.isAnchorLinkOnCurrentPage(w)){q.smoothScrolling(x)
}})
}());
q.smoothScrolling=b
}(jQuery,PS,PS.util));
window.PS=window.PS||{};
PS.util=PS.util||{};
(function(c){var b=false;
var a=function(g){var e=function(k,j){var h=jq(k);
if(h.attr("target")==="_blank"){j.preventDefault();
window.open(h.attr("href"))
}else{document.location=h.attr("href")
}};
var f=g||function(j,k){var h=jq(j).find(".js_target");
if(h.size()){e(h,k)
}else{h=jq(j).find("[js_target]");
if(h.size()){e(h,k)
}}};
jq(".js_clickable").each(function(){if(jq(this).find(".js_target").size()){jq(this).addClass("clickable")
}});
if(b===false){jq(".wrapper").on("click",".js_clickable a",function(h){h.stopPropagation()
});
jq(".wrapper").on("click",".js_clickable",function(h){f(this,h)
});
b=true
}};
c.util.Clickable=a
})(PS);
window.PS=window.PS||{};
PS.storage=PS.storage||{};
(function(b){a.prototype.useLocalStorage=false;
a.prototype.cookieStorageName="IGStorage";
a.prototype.cookieStorage=null;
function a(){a.prototype.init()
}a.prototype.init=function(){a.prototype.useLocalStorage=a.prototype.isLocalStorageSupported()
};
a.prototype.isLocalStorageSupported=function(){var c="test";
try{localStorage.setItem(c,c);
localStorage.removeItem(c);
return true
}catch(f){return false
}};
a.prototype.removeElement=function(c,e){if(a.prototype.useLocalStorage){a.prototype.localStorageRemoveElement(c,e)
}else{a.prototype.cookieRemoveElement(c,e)
}};
a.prototype.localStorageRemoveElement=function(e,g){var f=a.prototype.localStorageRetrieveAll(e);
var c=jq.grep(f,function(j,h){return JSON.stringify(j.value)!==JSON.stringify(g)
});
if(c.length===0){a.prototype.localStorageRemove(e)
}lscache.set(e,c)
};
a.prototype.cookieRemoveElement=function(e,g){var f=a.prototype.cookieRetrieveAll(e);
var c=jq.grep(f,function(j,h){return JSON.stringify(j.value)!==JSON.stringify(g)
});
if(c.length===0){a.prototype.cookieRemove(e)
}a.prototype.cookieSetStorage(e,c)
};
a.prototype.remove=function(c){if(a.prototype.useLocalStorage){a.prototype.localStorageRemove(c)
}else{a.prototype.cookieRemove(c)
}};
a.prototype.localStorageRemove=function(c){lscache.remove(c)
};
a.prototype.cookieRemove=function(c){var e=[];
a.prototype.cookieSetStorage(c,e)
};
a.prototype.store=function(e,f,c){if(a.prototype.useLocalStorage){a.prototype.localStorageStore(e,f,c)
}else{a.prototype.cookieStore(e,f,c)
}};
a.prototype.localStorageStore=function(e,g,c){var f=[];
if(c){f=a.prototype.localStorageRetrieveAll(e)
}f.push({time:new Date().getTime(),value:g});
lscache.set(e,f)
};
a.prototype.cookieStore=function(e,g,c){var f=[];
if(c){f=a.prototype.cookieRetrieveAll(e)
}f.push({time:new Date().getTime(),value:g});
a.prototype.cookieSetStorage(e,f)
};
a.prototype.storeUnique=function(c,e){if(a.prototype.useLocalStorage){a.prototype.localStorageStoreUnique(c,e)
}else{a.prototype.cookieStoreUnique(c,e)
}};
a.prototype.localStorageStoreUnique=function(f,g){var e=a.prototype.localStorageRetrieveAll(f);
var c=jq.grep(e,function(j,h){return JSON.stringify(j.value)===JSON.stringify(g)
});
if(c.length==0){a.prototype.localStorageStore(f,g,true)
}};
a.prototype.cookieStoreUnique=function(f,g){var e=a.prototype.cookieRetrieveAll(f);
var c=jq.grep(e,function(j,h){return JSON.stringify(j.value)===JSON.stringify(g)
});
if(c.length==0){a.prototype.cookieStore(f,g,true)
}};
a.prototype.storeLastElementUnique=function(c,e){if(a.prototype.useLocalStorage){a.prototype.localStorageStoreLastElementUnique(c,e)
}else{a.prototype.cookieStoreLastElementUnique(c,e)
}};
a.prototype.localStorageStoreLastElementUnique=function(e,f){var c=a.prototype.localStorageRetrieveLast(e);
if(JSON.stringify(c)!=JSON.stringify(f)){a.prototype.localStorageStore(e,f,true)
}};
a.prototype.cookieStoreLastElementUnique=function(e,f){var c=a.prototype.cookieRetrieveLast(e);
if(JSON.stringify(c)!=JSON.stringify(f)){a.prototype.cookieStore(e,f,true)
}};
a.prototype.retrieveAll=function(c){if(a.prototype.useLocalStorage){return a.prototype.localStorageRetrieveAll(c)
}else{return a.prototype.cookieRetrieveAll(c)
}};
a.prototype.localStorageRetrieveAll=function(c){var e=lscache.get(c);
if(!e){e=[]
}return e
};
a.prototype.cookieRetrieveAll=function(e){var f=a.prototype.cookieGetStorage();
var c=jq.grep(f,function(h,g){return h.key===e
});
if(c.length>0){return c[0].items
}return[]
};
a.prototype.retrieveLast=function(c){if(a.prototype.useLocalStorage){return a.prototype.localStorageRetrieveLast(c)
}else{return a.prototype.cookieRetrieveLast(c)
}};
a.prototype.localStorageRetrieveLast=function(c){var e=a.prototype.localStorageRetrieveAll(c);
var f=e.pop()||{value:""};
return f.value
};
a.prototype.cookieRetrieveLast=function(e){var c=a.prototype.cookieRetrieveAll(e);
var f=c.pop()||{value:""};
return f.value
};
a.prototype.retrieveLastAndRemove=function(c){if(a.prototype.useLocalStorage){return a.prototype.localStorageRetrieveLastAndRemove(c)
}else{return a.prototype.cookieRetrieveLastAndRemove(c)
}};
a.prototype.localStorageRetrieveLastAndRemove=function(c){var e=a.prototype.localStorageRetrieveAll(c);
var f=e.pop()||{value:""};
lscache.set(c,e);
return f.value
};
a.prototype.cookieRetrieveLastAndRemove=function(c){var e=a.prototype.cookieRetrieveAll(c);
var f=e.pop()||{value:""};
a.prototype.cookieSetStorage(c,e);
return f.value
};
a.prototype.cookieGetStorage=function(){if(!!a.prototype.cookieStorage){return a.prototype.cookieStorage
}var c=b.util.Cookie.get(a.prototype.cookieStorageName);
if(!!c){c=JSON.parse(decodeURIComponent(c));
a.prototype.cookieStorage=c.storage
}else{a.prototype.cookieStorage=[]
}return a.prototype.cookieStorage
};
a.prototype.cookieSetStorage=function(f,c){var g=a.prototype.cookieGetStorage();
var e=a.prototype.getStorageIndex(g,f);
if(e>=0){g[e]={key:f,items:c}
}else{g.push({key:f,items:c})
}g={storage:g};
a.prototype.cookieSaveStorage(g)
};
a.prototype.cookieSaveStorage=function(e){var c=encodeURIComponent(JSON.stringify(e));
b.util.Cookie.set(a.prototype.cookieStorageName,c,1)
};
a.prototype.getStorageIndex=function(f,e){for(var c=0;
c<f.length;
c++){if(f[c].key==e){return c
}}return -1
};
b.storage.LocalQueue=new a()
})(PS);
window.PS=window.PS||{};
PS.util=PS.util||{};
(function(b){var a=function(g,e){for(var c=0;
c<e.length;
c++){var f=new RegExp("\\{"+c+"\\}","gi");
g=g.replace(f,e[c])
}return g
};
b.util.format=a
}(PS));
window.PS=window.PS||{};
PS.util=PS.util||{};
(function(c,a){function b(e){return e.replace(/(<([^>]+)>)/ig,"")
}a.stripHTML=b
}(PS,PS.util));
window.PS=window.PS||{};
PS.util=PS.util||{};
(function(b){function a(){var c=0;
c=function(){var j;
var g=document.createElement("p");
g.style.width="100%";
g.style.height="200px";
var h=document.createElement("div");
h.style.position="absolute";
h.style.top="0px";
h.style.left="0px";
h.style.visibility="hidden";
h.style.width="200px";
h.style.height="150px";
h.style.overflow="hidden";
h.appendChild(g);
document.body.appendChild(h);
var f=g.offsetWidth;
h.style.overflow="scroll";
var e=g.offsetWidth;
if(f==e){e=h.clientWidth
}document.body.removeChild(h);
j=(f-e);
c=j;
return j
}();
return c
}b.util.getScrollbarWidth=a
}(PS));
window.PS=window.PS||{};
window.PS.util=window.PS.util||{};
(function(h,g){var a;
var f;
var b=function(j){h.util.pubsub.publish("login.submitEncrypted",j)
};
h.util.submitUnencrypted=function(){h.util.pubsub.publish("login.submit",f)
};
var c=function(l){var j;
var m;
if(!l.encryptionKey){j=JSON.parse(l)
}else{j=l
}m=f+"|"+j.timeStamp;
try{m=a.encrypt(m,j.encryptionKey);
b(m);
window.dlog("encryption successful ",m)
}catch(k){h.util.pubsub.publish("login.encryption.failure","failed");
h.util.submitUnencrypted()
}};
var e=function(m,j,k){window.dlog("encryption failure ",m.status,j,k);
var l=k.toLowerCase()==="not found"?"404":k;
h.util.pubsub.publish("login.encryption.failure",l);
h.util.submitUnencrypted()
};
h.util.getEncryptionKeyAndTimestamp=function(j,l,k){g.ajax({url:l,timeout:k}).done(c).fail(e)
};
h.util.loginSubmissionManager=function(j){a=j||h.util.encryption();
return{submitForm:function(k,m,l){f=k;
if(m.length>0){h.util.getEncryptionKeyAndTimestamp(f,m,l)
}else{h.util.submitUnencrypted(k)
}}}
}
}(window.PS,window.jQuery));
window.PS=window.PS||{};
PS.util=PS.util||{};
(function(c){var a;
var b=function(g,h){for(var e=0;
e<g.length;
e++){var f=g[e].split("=");
if(f[0]==h){return f[1]
}}return(false)
};
c.util.url={getQueryStringParameter:function(h,e){a=e||window;
var g=a.location.search.substring(1);
var f=g.split("&");
return b(f,h)
},switchToDemoSite:function(e){var f;
var g=e.split(".");
if(!g[0].match("ig")){g[0]=g[0].replace(/\/.*/,"//demo")
}else{g[0]=g[0].replace("//","//demo.")
}f=g.join(".");
return f
},getPathname:function(){return window.location.pathname
}}
}(PS));
window.PS=window.PS||{};
window.PS.util=window.PS.util||{};
(function(){function a(){this.client=null;
this.connectionEstablished=false;
this.libraryRequested=false;
this.connectionQueue={};
this.subscriptions={};
this.oldValuesCache={};
this.fidValues="V2-F-BID,OFR,CPT,CPC,HIG,LOW"
}a.prototype={processQueuedSubscriptions:function(){var b;
for(b in this.connectionQueue){if(this.connectionQueue.hasOwnProperty(b)){this.subscribe(b,this.connectionQueue[b])
}}this.connectionQueue={}
},getLibraryAndProcessQueue:function(){this.libraryRequested=true;
jq.ajax({url:"https://a.c-dn.net/b/0wNpa0.js#lightstreamer.6.1.4.min.js",dataType:"script",cache:true,success:this.processQueuedSubscriptions(),error:function(){window.dlog("LightstreamerLivePrices: Error loading library.")
}})
},connectAndSubscribe:function(c,b){if(!window.Lightstreamer){this.connectionQueue[c]=b;
if(!this.libraryRequested){this.getLibraryAndProcessQueue()
}}else{this.client=this.client||new window.Lightstreamer.LightstreamerClient("https://upp.ig.com","InVisionProvider");
this.client.connect();
this.connectionEstablished=true;
this.establishSubscription(c,b)
}},establishSubscription:function(j,b){var h=this.fidValues.match(/\w{3,}/g),f=j.split("="),e=f[1]?":"+f[1].replace(/\_/ig,","):"",c=this.fidValues+e+"|"+f[0]+"|1",g=this;
if(this.subscriptions[j]){this.client.unsubscribe(this.subscriptions[j]);
this.subscriptions[j]=null
}this.oldValuesCache[j]={};
this.subscriptions[j]=new Lightstreamer.Subscription("MERGE",c,[].concat(h));
this.subscriptions[j].addListener({onItemUpdate:function(k){k.forEachChangedField(function(o,m,n){var l=g.oldValuesCache[j][o]||"";
b(j,o,l,n);
g.oldValuesCache[j][o]=n
})
}});
this.subscriptions[j].setRequestedMaxFrequency(1);
this.client.subscribe(this.subscriptions[j])
},subscribe:function(c,b){if(!c){window.dlog("LightstreamerLivePrices: Error -> No epic provided to subscribe to.");
return
}if(!this.connectionEstablished){this.connectAndSubscribe(c,b)
}else{this.establishSubscription(c,b)
}}};
PS.util.LightstreamerLivePrices=new a()
}());
(function(b,c){b.PS=b.PS||{};
c.util=c.util||{};
function a(){}a.prototype.getUnloadedImages=function(e){var f;
if(e===undefined){f=jq(".js_img")
}else{f=jq(e).find(".js_img")
}return{images:f,getWidth:function(g){return g.getAttribute("data-width")
},getHeight:function(g){return g.getAttribute("data-height")
},setWidth:function(h,g){h.setAttribute("data-width",g)
},setHeight:function(h,g){h.setAttribute("data-height",g)
}}
};
a.prototype.getLoadedImages=function(e){var f;
if(e===undefined){f=jq("img")
}else{f=jq(e).find("img")
}return{images:f,getWidth:function(g){return jq(g).attr("width")
},getHeight:function(g){return jq(g).attr("height")
},setWidth:function(h,g){jq(h).attr("width",g)
},setHeight:function(h,g){jq(h).attr("height",g)
}}
};
c.util.foregroundImage=new a()
}(window,PS));
(function(c,e){c.PS=c.PS||{};
e.util=e.util||{};
function b(){}var a=function(f){return{images:f,getWidth:function(g){return jq(g).css("width")
},getHeight:function(g){return jq(g).css("height")
},setWidth:function(h,g){jq(h).css("width",g)
},setHeight:function(h,g){jq(h).css("height",g)
}}
};
b.prototype.chooseBGImageViewportSelector=function(){var f,j=c.matchMedia("(min-width: 769px)"),h=c.matchMedia("(min-width: 321px) and (max-width: 768px)"),g=c.matchMedia("(max-width: 380px)");
if(g.matches){f="data-background-mobile"
}else{if(h.matches){f="data-background-tablet"
}else{if(j.matches){f="data-background-desktop"
}else{f="data-background-desktop"
}}}dlog("Responsive-bg-image (chooseBGImageViewportSelector): "+f);
return f
};
b.prototype.getUnloadedImages=function(g){var h;
var f="["+this.chooseBGImageViewportSelector()+"]";
if(g===undefined){h=jq(f)
}else{h=jq(g).find(f)
}dlog("Responsive-bg-image (getUnloadedImages):"+a(h));
return a(h)
};
b.prototype.getLoadedImages=function(g){var h;
var f="["+this.chooseBGImageViewportSelector()+"-used]";
if(g===undefined){h=jq(f)
}else{h=jq(g).find(f)
}return a(h)
};
e.util.backgroundImage=new b()
}(window,PS));
window.PS=window.PS||{};
PS.util=PS.util||{};
(function(b){function a(){var c=this;
c.minWidth=481
}a.prototype.minWidth=null;
a.prototype.getImageAttributes=function(h,g,f){var e={},c=f||b.util.Viewport.prototype,j=c.getViewport().width;
if(j<g){e.height=h.attr("data-height-mob")||"";
e.width=h.attr("data-width-mob")||"";
e.src=h.attr("data-src-mob")
}if(!e.height){e.height=h.attr("data-height")||"";
e.width=h.attr("data-width")||"";
e.src=h.attr("data-src")||""
}return e
};
a.prototype.load=function(j,e){var o,f,n,m,q,g,c,k,l,p,h;
o=jq(j);
h=a.prototype.getImageAttributes(o,e);
n=h.height;
m=h.width;
q=h.src;
f=o.attr("target")||"_self";
g=o.attr("data-alt")||"";
c=o.attr("data-classNames")||"";
k=o.attr("data-link");
l='<span class="'+c+'" style="display:none;">';
if(k&&(k!=="")){l+='<a href="'+k+'" target="'+f+'">'
}l+='<img alt="'+g+'" src="'+q+'" ';
if(!isNaN(m)){l+='width="'+m+'" '
}if(!isNaN(n)){l+='height="'+n+'" '
}l+=" />";
if(k!==""){l+="</a>"
}l+="</span>";
p=jq(l);
p.insertBefore(o);
o.remove();
p.fadeIn()
};
a.prototype.getImageElements=function(c){return b.util.foregroundImage.getUnloadedImages(c).images
};
a.prototype.loadImage=function(c){a.prototype.load(c,481)
};
b.util.ForegroundImageLoad=a
}(PS));
window.PS=window.PS||{};
PS.util=PS.util||{};
(function(b){function a(){}a.prototype.getImageElements=function(c){return b.util.backgroundImage.getUnloadedImages(c).images
};
a.prototype.loadImage=function(e){var c=e.getAttribute(b.util.backgroundImage.chooseBGImageViewportSelector());
dlog("Responsive-bg-image (loadImage): "+c);
jq(e).backgroundImageLoad(c)
};
b.util.BackgroundImageLoad=a
}(PS));
(function(b){function a(f,c){var g=this,e=jq(window).width(),h;
this.imageLoaders=f||[new b.util.ForegroundImageLoad,new b.util.BackgroundImageLoad];
this.resizeImages();
jq(window).scroll(function(){g.loadImagesInView()
});
jq(window).resize(function(){clearTimeout(h);
h=setTimeout(function(){if(jq(window).width()!=e){e=jq(window).width();
g.resizeImages();
jq("[data-background-mobile-used]").each(function(){jq(this).attr("data-background-mobile",jq(this).attr("data-background-mobile-used"));
jq(this).removeAttr("data-background-mobile-used")
});
jq("[data-background-desktop-used]").each(function(){jq(this).attr("data-background-desktop",jq(this).attr("data-background-desktop-used"));
jq(this).removeAttr("data-background-desktop-used")
});
jq("[data-background-tablet-used]").each(function(){jq(this).attr("data-background-tablet",jq(this).attr("data-background-tablet-used"));
jq(this).removeAttr("data-background-tablet-used")
});
dlog("Responsive-bg-image (Window Risize): Resetting Image Selectors");
g.loadImagesInView()
}},200)
})
}a.prototype.loadImagesInView=function(f){var e,c,h,j=this,g=function(k,l){if(f!==undefined||l.isInViewport(400,400)){c.loadImage(l)
}};
for(h=j.imageLoaders.length-1;
h>=0;
h--){c=this.imageLoaders[h];
e=c.getImageElements(f);
e.each(g)
}};
a.prototype.resizeImages=function(){jq('[data-background-img-resize="true"]').each(function(){var g=jq(this).data("backgroundImgWidth"),f=jq(this).data("backgroundImgHeight"),c=jq(this).innerWidth(),e=f/g*c;
jq(this).css("minHeight",e)
})
};
b.util.ImageLoader=a
}(PS));
window.PS=window.PS||{};
PS.util=PS.util||{};
(function(){function a(){}a.prototype.resizeImages=function(j,b,h,e,c,g){var f=b(j);
if(f>g){if(g<c){h(j,c)
}else{h(j,g)
}e(j,"auto")
}};
a.prototype.scaleImagesToViewport=function(f,e,j,c){var h;
var k;
var g;
var b;
if(c===undefined){c=[PS.util.foregroundImage]
}for(h=c.length-1;
h>=0;
h--){k=c[h];
g=k.getUnloadedImages(f);
b=k.getLoadedImages(f);
jq(g.images).each(function(l,m){PS.util.imageResizer.resizeImages(m,g.getWidth,g.setWidth,g.setHeight,e,j)
});
jq(b.images).each(function(l,m){PS.util.imageResizer.resizeImages(m,b.getWidth,b.setWidth,b.setHeight,e,j)
})
}};
PS.util.imageResizer=new a()
}());
window.PS=window.PS||{};
window.PS.util=window.PS.util||{};
(function(a){(function(){var b=function(c,e){e=void 0===e?{}:e;
c=Object.assign({},e,{dataType:"script",cache:!0,url:c});
return jq.ajax(c)
};
return a.util.getCachedScript=b
})()
})(window.PS);
window.PS=window.PS||{};
PS.util=PS.util||{};
(function(b){var a=function(){this.enable()
};
a.prototype.create=function(){var c=location.href,e=d.title;
if(window.sidebar){window.sidebar.addPanel(e,c,"")
}else{if(window.external&&("AddFavorite" in window.external)){window.external.AddFavorite(c,e)
}else{if(window.opera){return false
}else{alert("Unfortunately, this browser does not support the requested action, please bookmark this page manually with Ctrl+D.")
}}}};
a.prototype.enable=function(){var c=this;
jq(".js_bookmark").attr("rel","sidebar");
jq(".js_bookmark").on("click keydown",function(f){if((f.type==="click")||(f.keyCode===32)||(f.keyCode===13)){c.create()
}if((f.keyCode!==9)&&(!window.opera)){f.preventDefault()
}})
};
b.util.Bookmark=a
}(PS));
window.PS=window.PS||{};
PS.util=PS.util||{};
(function(b){function a(){function r(c){var e=new Image();
e.src=o+"l.betrad.com/pub/p.gif?pid="+n+"&ocid="+l+"&i"+c+"=1&r="+Math.random()
}var n;
if(jq("#_bapw-link").length>0){switch(b.util.Page.locale()){case"en_GB":n=360;
break;
case"fr_FR":case"fr_LU":n=463;
break;
case"de_DE":n=466;
break;
case"it_IT":n=468;
break;
case"es_ES":n=472;
break;
case"sv_SE":n=471;
break;
case"nl_NL":n=469;
break;
default:n=360
}var l=1698,t=false,m=document,k=m.getElementById("_bapw-link"),p=(m.location.protocol==="https:"),o=(p?"https":"http")+"://",q=o+"c.betrad.com/pub/";
k.onmouseover=function(){if(/#$/.test(k.href)){k.href="http://info.evidon.com/pub_info/"+n+"?v=1"
}};
k.onclick=function(){var c=window._bap_p_overrides;
function e(w,h){var u=m.getElementsByTagName("head")[0]||m.documentElement,f=t,g=m.createElement("script");
function j(){g.onload=g.onreadystatechange=null;
u.removeChild(g);
h()
}g.src=w;
g.onreadystatechange=function(){if(!f&&(this.readyState==="loaded"||this.readyState==="complete")){f=true;
j()
}};
g.onload=j;
u.insertBefore(g,u.firstChild)
}if(p||(c&&c.hasOwnProperty(n)&&c[n].new_window)){r("c");
return true
}this.onclick="return "+t;
e(o+"ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js",function(){e(q+"pub2.js",function(){BAPW.i(k,{pid:n,ocid:l})
})
});
return t
};
r("i")
}}b.util.LaunchEvidonCookieManager=a
}(PS));
window.PS=window.PS||{};
PS.util=PS.util||{};
(function(m,q){var j=q("ul.table-scroller"),r=q("table tbody"),p=800,f=0,n,c,k=0,u,w=q("body").hasClass("responsive-page"),a=200,g;
var e=function(){q(".table-scroller li:first-child a").addClass("unactive");
if(r.length&&j.length&&w){r.find("tr:eq(0)").addClass("active").addClass("first");
j.find("li a").click(function(y){y.preventDefault();
n=q(this).closest(".responsive-table").find("tbody");
c=n.find("tr").length-1;
if(n.length){f=q(this).parent().prevAll().length;
var x=(f===0)?k--:k++;
b(n,k,k,c,x);
var z=n.find("tr.active").offset().left-n.find("tr:eq(0)").offset().left;
n.stop().animate({scrollLeft:z},p)
}else{dlog("Table: Unable to scroll table no tbody content found")
}})
}t()
};
var l=function(x,y){x.find("tr").each(function(z){if(q(this).hasClass("active")){u=(f===0)?u=z-1:u=z+1
}});
return u
};
var o=function(z){var y=0,x=z.find("tr");
q(x).removeClass("disabled");
for(var A=x.length-1;
A>=0;
A--){y=y+q(x[A]).width();
if(y<=z.width()){q(x[A+1]).addClass("disabled");
q(x[A]).addClass("last").siblings().removeClass("last")
}}};
var b=function(z,x,y,B,C){var A;
x=l(z,C);
if(x>=0&&x<=B){z.closest(".responsive-table").find(".table-scroller li a").removeClass("unactive");
A=z.find("tr:eq("+x+")");
if(A.hasClass("last")){z.closest(".responsive-table").find(".table-scroller li:last-child a").addClass("unactive").siblings().removeClass("unactive")
}if(A.hasClass("first")){z.closest(".responsive-table").find(".table-scroller li:first-child a").addClass("unactive").siblings().removeClass("unactive")
}if(A.hasClass("disabled")){A=z.find("tr.last")
}A.addClass("active").siblings().removeClass("active");
dlog("TRS OK, adding class")
}else{if(x<=0){k=0;
dlog("NO MORE PREVIOUS TRS");
return k
}else{k=B;
z.closest(".responsive-table").find(".table-scroller li:last-child a").addClass("unactive").siblings().removeClass("unactive");
dlog("NO MORE NEXT TRS");
return k
}}if(m.util.Page.getQuerystring("debug").toLowerCase()==="true"){z.find("tr.active").css("background-color","red")
}};
var t=function(){dlog("Table: Window Load/Resized, Check Scrollers?");
var x;
var y;
if(w){r.each(function(z){x=q(this).get(0);
y=q(this).closest(".responsive-table").find(".table-scroller");
if(x.scrollWidth<=x.clientWidth){dlog("Table: Hiding scroller, tbody fits in view  ("+z+")");
y.hide()
}else{dlog("Table: Showing scroller, tbody larger than view  ("+z+")");
y.show()
}h(q(x).closest("table").get(0));
o(q(x))
})
}};
var h=function(A){if(window.innerWidth<1025){dlog("Table:"+A+" Adjusting teh height");
var z=A,x=z.getElementsByTagName("th"),B=z.getElementsByTagName("tr"),E=[];
for(var y=0;
y<x.length;
y++){E.push(q(x[y]).height())
}for(var D=1;
D<B.length;
D++){for(var C=0;
C<B[D].children.length;
C++){B[D].children[C].style.height=E[C]+"px";
if(m.util.Page.getQuerystring("debug").toLowerCase()==="true"){B[D].children[C].style.color="blue"
}}}}};
window.onresize=function(){clearTimeout(g);
g=setTimeout(t,a)
};
m.util.TableScroll=e;
m.util.TableResizeRedraw=t
}(PS,window.jQuery));
window.PS=window.PS||{};
window.PS.core=window.PS.core||{};
(function(u,y){var I=20;
var b=40;
var E="strongerPassword.passwordError";
var z="strongerPassword.medium";
var D="strongerPassword.strong";
var h="strongerPassword.passwordsDoNotMatch";
var H="strongerPassword.passwordsMatch";
var n="strongerPassword.invaliddob";
var t="strongerPassword.doberror";
var k="strongerPassword.required";
var w="Password doesn't meet minimum criteria!";
var x="Password doesn't match confirmation!";
var r="Passwords match!";
var F="Invalid date of birth";
var c="Sorry, but your date of birth does not match our records. Please try again.";
var m="Required";
var p="#strongerPasswordDateOfBirth-wrapper";
var B=1500;
var C;
var K=false;
var G="hidden";
var A="strong";
var L="medium";
var o="weak";
var j="error";
var q="bigerror";
var e="required";
var f="disabled";
var a="passwords-match";
var g={QUERYSTRING:"querystring",PATHNAME:"pathname"};
var l={CORPORATE:{key:"at",value:"c",type:g.QUERYSTRING},COMMSEC:{key:"csc",value:"/csc/",type:g.PATHNAME}};
var J=2000;
function M(){var N=y("#strongerPasswordForm");
if(N.length>0){M.prototype.init()
}}M.prototype.init=function(){M.prototype.checkAccountVariations();
M.prototype.bindEvents()
};
M.prototype.checkAccountVariations=function(){var O,R,Q,N,P;
for(O in l){if(l.hasOwnProperty(O)){R=l[O];
N=R.type;
switch(N){case g.PATHNAME:P=u.util.url.getPathname().indexOf(R.value)>-1;
break;
case g.QUERYSTRING:Q=u.util.Page.getQuerystring(R.key);
P=Q===R.value;
break;
default:P=false;
window.dlog("StrongerPassword: Unrecognised variation type");
break
}if(P){this.applyModifications(O)
}}}};
M.prototype.applyModifications=function(N){switch(N){case"CORPORATE":case"COMMSEC":y(p).hide().addClass(f);
break
}};
M.prototype.bindEvents=function(){y("#strongerPasswordForm").bind("submit",M.prototype.formValidate);
y(p).find("input").bind("blur",function(){var O=!event.relatedTarget||event.relatedTarget.id.indexOf("strongerPasswordDateOfBirth-")===-1;
var N=y(this).parent().find("input").filter(function(){return this.value===""
});
if(!N.length||O){M.prototype.validateDateOfBirth()
}});
y("#strongerPasswordPassword, #strongerPasswordConfirmPassword").bind("keyup blur",function(R){if(R.keyCode!==u.events.KEYS.TAB&&R.keyCode!==u.events.KEYS.CAPS_LOCK){var Q=y("#strongerPasswordPassword").val();
var P=y("#strongerPasswordConfirmPassword").val();
var S=M.prototype.isPasswordValid(Q);
var N=M.prototype.doesPasswordMatchConfirmation(Q,P);
var O=0;
if(R.type==="keyup"&&R.target.value.length>0&&((R.target.id==="strongerPasswordPassword"&&!S)||(R.target.id==="strongerPasswordConfirmPassword"&&!N))){O=B
}clearTimeout(C);
C=setTimeout(function(){switch(R.target.id){case"strongerPasswordPassword":M.prototype.validatePassword();
if(K){M.prototype.validatePasswordMatchesConfirmation()
}break;
case"strongerPasswordConfirmPassword":M.prototype.validatePasswordMatchesConfirmation();
break;
default:break
}},O)
}});
y("input[type=password]").bind("paste",function(N){N.preventDefault()
});
u.util.pubsub.subscribe("password.form.validated",function(N,O){M.prototype.processValidatedForm(O)
})
};
M.prototype.disableSubmition=function(P){var O=P.find("#strongerPasswordSubmit"),N=parseInt(P.data("disablesubmit"));
O.addClass("button-disabled");
O.on("click.buttonDisable",function(Q){Q.preventDefault();
Q.stopPropagation();
Q.stopImmediatePropagation()
});
if(N!==0){setTimeout(function(){O.off("click.buttonDisable");
O.removeClass("button-disabled")
},N)
}};
M.prototype.formValidate=function(Q){var S=false;
var P=Q.currentTarget;
var O=y(P);
var N=M.prototype.validateDateOfBirth();
var T=M.prototype.validatePassword();
var R=M.prototype.validatePasswordMatchesConfirmation();
Q.preventDefault();
if(N&&T&&R){if(O.data("disablesubmit")){M.prototype.disableSubmition(O)
}u.util.pubsub.publish("password.form.validated",P);
S=true
}return S
};
M.prototype.showLabel=function(Q,O,P,R){var N=y(Q);
if(!R){R=" "
}var S=window.i18n[P]||R;
M.prototype.hideLabel(N);
N.text(S);
N.addClass(O);
N.removeClass(G)
};
M.prototype.showErrorLabel=function(O,N,P){M.prototype.showLabel(O,j,N,P)
};
M.prototype.hideLabel=function(O){var N=y(O);
N.addClass(G);
N.removeClass(A+" "+L+" "+o+" "+j+" "+q+" "+a)
};
M.prototype.validateDateOfBirth=function(){var P=y(p);
if(P.hasClass(f)){return true
}var S=true;
var U=new Date();
var Q=null;
var W=P.find(".password-indicator");
var O="";
var N={"strongerPasswordDateOfBirth-day":{regexTest:/^\d{1,2}/,minValue:1,maxValue:31},"strongerPasswordDateOfBirth-month":{regexTest:/^\d{1,2}/,minValue:1,maxValue:12},"strongerPasswordDateOfBirth-year":{regexTest:/^\d{4}/,minValue:1900,maxValue:parseInt(U.getFullYear(),10)}};
P.find("input").each(function(X,Y){var aa=y(Y);
var ab=aa.val();
var Z=N[aa.attr("id")];
O+=ab;
if(Z.regexTest.test(ab)&&Z.maxValue>=parseInt(ab,10)&&Z.minValue<=parseInt(ab,10)){if(ab.length===1){aa.val("0"+ab)
}aa.removeClass(j)
}else{aa.addClass(j);
S=false
}});
if(S){var T=y("#strongerPasswordDateOfBirth-year").val();
var R=y("#strongerPasswordDateOfBirth-month").val()-1;
var V=y("#strongerPasswordDateOfBirth-day").val();
Q=new Date(T,R,V);
if(Q>Date.now()||!(Q.getFullYear()===parseInt(T,10)&&Q.getMonth()===parseInt(R,10)&&Q.getDate()===parseInt(V,10))){S=false
}}if(S){M.prototype.hideLabel(W)
}else{if(O===""){M.prototype.showErrorLabel(W,k,m)
}else{M.prototype.showErrorLabel(W,n,F)
}}return S
};
M.prototype.validatePassword=function(){var Q=false;
var O=y("#strongerPasswordPassword");
var P=O.val();
var N;
if(P===""&&O.hasClass(e)){N=y("#strongerPasswordPassword-wrapper").find(".password-indicator");
O.addClass(j);
M.prototype.showErrorLabel(N,k,m)
}else{Q=M.prototype.isPasswordValid(P);
M.prototype.showPasswordStrength()
}return Q
};
M.prototype.validatePasswordMatchesConfirmation=function(){var S=false;
var O=y("#strongerPasswordPassword");
var R=O.val();
var Q=y("#strongerPasswordConfirmPassword");
var P=Q.val();
var N;
if(P===""&&Q.hasClass(e)){N=y("#strongerPasswordConfirmPassword-wrapper").find(".password-indicator");
Q.addClass(j);
M.prototype.showErrorLabel(N,k,m)
}else{S=M.prototype.doesPasswordMatchConfirmation(R,P);
M.prototype.showPasswordConfirmationStatus()
}return S
};
M.prototype.doesPasswordMatchConfirmation=function(N,O){return N.trim()===O.trim()
};
M.prototype.isPasswordValid=function(X){var W=false;
var V=false;
var S=false;
var O=false;
var Z=false;
var N=false;
var U={length:/^.{8,20}$/,uppercase:/[A-Z]/,lowercase:/[a-z]/,number:/\d/,allowedCharacters:/^[\w!"#$%'()*,\-.\/:;=?@{|}~\[\]\^\\£]+$/};
var P=function(aa){return U.length.test(aa)
};
var Y=function(aa){return U.number.test(aa)
};
var R=function(aa){return U.uppercase.test(aa)
};
var T=function(aa){return U.lowercase.test(aa)
};
var Q=function(aa){return U.allowedCharacters.test(aa)
};
Z=P(X);
O=Y(X);
V=T(X);
S=R(X);
N=Q(X);
W=Z&&O&&V&&S&&N;
return W
};
M.prototype.processValidatedForm=function(N){var W=y(N);
var T=u.util.url.getQueryStringParameter("uid");
var Q=M.prototype.getEncryptionServiceUrl(W.attr("data"));
var S=W.data("encryption-timeout");
var V=W.find("#strongerPasswordPassword").val();
var U=W.find("#strongerPasswordDateOfBirth-day").val()+"/"+W.find("#strongerPasswordDateOfBirth-month").val()+"/"+W.find("#strongerPasswordDateOfBirth-year").val();
var P=W.data("submit-url");
var R=W.data("submit-timeout");
var O={};
O.tokenId=T;
O.newPassword=V;
O.dateOfBirth=U;
O.enc=false;
O.reason="";
if(Q.length>0){M.prototype.encryptPassword(Q,S,P,O,R)
}else{M.prototype.submitPassword(P,O,R)
}};
M.prototype.submitPassword=function(N,P,Q){var O;
var R=new XMLHttpRequest();
Q=Q||J;
R.open("PUT",N,true);
R.setRequestHeader("Content-Type","application/json");
R.onreadystatechange=function(){if(R.readyState!==4){window.dlog("StrongerPassword xhr change: ",R.readyState)
}else{window.dlog("StrongerPassword xhr: received feedback from AJAX call");
window.clearTimeout(O);
if(R.status===200){M.prototype.passwordChanged(R)
}else{M.prototype.passwordChangeFailure(R)
}}};
R.send(JSON.stringify(P));
O=setTimeout(function(){if(R&&R.readystate!==4){M.prototype.passwordChangeTimeout();
R.abort()
}},Q)
};
M.prototype.passwordChanged=function(){M.prototype.hideAllBlocks();
y("#strongerPasswordChanged").show()
};
M.prototype.passwordChangeFailure=function(N){M.prototype.showErrorMessage(N.status,N.statusText,N.response)
};
M.prototype.passwordChangeTimeout=function(){var P=408;
var O="Request Timeout";
var N="{ 'globalErrors': '[\"FAILURE_GENERIC\"]' }";
M.prototype.showErrorMessage(P,O,N)
};
M.prototype.showErrorMessage=function(P,O,N){M.prototype.hideAllBlocks();
if(N===""){N='{"globalErrors":["FAILURE_GENERIC"]}'
}N=JSON.parse(N);
switch(N.globalErrors[0]){case"FAILURE_TOKEN_EXPIRED":y("#strongerPasswordInvalidToken").show();
break;
case"FAILURE_DOB_INVALID":M.prototype.showLabel(y(p).find(".password-indicator"),q,t,c);
y("#strongerPasswordForm").show();
break;
case"FAILURE_CLIENT_SUSPENDED":y("#strongerPasswordClientSuspended").show();
break;
default:y("#strongerPasswordGenericError").show();
break
}};
M.prototype.hideAllBlocks=function(){y(".strongerPasswordBlock").hide()
};
M.prototype.calculatePasswordScore=function(V){var T=0;
var X=0;
var O=0;
var P=0;
var U=0;
var R=4;
var W=6;
var Q=-3;
if(V){X=V.length;
var S=V.split("");
var N=S.length;
for(U;
U<N;
U++){if(((U+1)<N)&&(S[U].toUpperCase()===S[U+1].toUpperCase())){P++
}if(S[U].match(/[^a-zA-Z0-9]/g)){O++
}}T=parseInt(X*R,10);
if(O>0){T+=O*W
}if(P>0){T+=P*Q
}}return T
};
M.prototype.showPasswordStrength=function(){var N=y("#strongerPasswordPassword");
var Q=N.val();
var O=M.prototype.isPasswordValid(Q);
var P=M.prototype.calculatePasswordScore(Q);
var S=1;
var R=y("#strongerPasswordPassword-wrapper").find(".password-indicator");
if(O&&P>=I&&P<b){S=2
}else{if(O&&P>=b){S=3
}}M.prototype.hideLabel(R);
switch(S){case 3:N.removeClass(j);
M.prototype.showLabel(R,A,D,"strong");
break;
case 2:N.removeClass(j);
M.prototype.showLabel(R,L,z,"medium");
break;
default:N.addClass(j);
M.prototype.showLabel(R,q,E,w);
break
}};
M.prototype.showPasswordConfirmationStatus=function(){var R=false;
var N=y("#strongerPasswordPassword");
var Q=N.val();
var P=y("#strongerPasswordConfirmPassword");
var O=P.val();
K=true;
R=M.prototype.doesPasswordMatchConfirmation(Q,O);
if(R){M.prototype.showPasswordConfirmationSuccess()
}else{M.prototype.showPasswordConfirmationError()
}};
M.prototype.showPasswordConfirmationError=function(){var N=y("#strongerPasswordConfirmPassword-wrapper").find(".password-indicator");
y("#strongerPasswordConfirmPassword").addClass(j);
M.prototype.showErrorLabel(N,h,x)
};
M.prototype.showPasswordConfirmationSuccess=function(){var N=y("#strongerPasswordConfirmPassword-wrapper").find(".password-indicator");
y("#strongerPasswordConfirmPassword").removeClass(j);
M.prototype.hideLabel(N);
M.prototype.showLabel(N,a,H,r)
};
M.prototype.encryptPassword=function(Q,S,N,O,R){var U=u.util.encryption();
var V=O.newPassword;
var P=function(Y){var X;
var Z;
if(!Y.encryptionKey){X=JSON.parse(Y)
}else{X=Y
}try{Z=U.encrypt(V,X.encryptionKey);
window.dlog("encryption: stronger password encryption successful ",Z);
O.newPassword=Z;
O.enc=true;
M.prototype.submitPassword(N,O,R)
}catch(W){window.dlog("encryption: stronger password encryption failed");
M.prototype.submitPassword(N,O,R)
}};
var T=function(Z,W,X){var Y=X.toLowerCase()==="not found"?"404":X;
O.reason=Y;
O.enc=false;
M.prototype.submitPassword(N,O,R);
window.dlog("encryption: stronger password encryption failed",Z,W,X)
};
y.get(Q,{timeout:S}).done(P).fail(T)
};
M.prototype.getEncryptionServiceUrl=function(P){var O=u.util.url.getQueryStringParameter("enc");
var N=u.util.url.getQueryStringParameter("demo");
if(!O){O=P
}if(N){O=u.util.url.switchToDemoSite(O)
}return O.trim()
};
u.core.strongerPassword=new M()
}(window.PS,window.jQuery));
window.PS=window.PS||{};
window.PS.core=window.PS.core||{};
(function(g,f,e){var b={ACTIONS:{HIDE:"hide",SHOW:"show"},AJAX_LOAD_TIMEOUT:5000,COLUMNS_ATTRIBUTE:"data-columns",TIME_ATTRIBUTE:"data-time",DLOG_HEADER:"LivePrices Component",EPICS_ATTRIBUTE:"data-epics",FIDS:"V2-F-BID,OFR,UTM,CPT,CPC,HIG,LOW,SWAP_1_SHORT,SWAP_1_LONG",ID:"id",RESIZE_DELAY:100,TABLES_CLASS:".livePriceTable",TABLES_ID_PREPEND:"lptable",TABLE_ADJUSTMENTS:{MORE:"more",LESS:"less",CHECK:"check"},TEXT_COLOR_CLASS:{GREEN:"lsTextGreen",BLUE:"lsTextUp",RED:"lsTextDown"}};
var c={};
var a=function(){this.countryLocalTime=null
};
a.prototype.checkLocal=function(){var h={"bg-BG":[2,"Europe"],"cy-CY":[2,"Europe"],"hr-HR":[1,"Europe"],"hu-HU":[1,"Europe"],"el-GR":[2,"Europe"],"fi-FI":[2,"Europe"],"ro-RO":[2,"Europe"],"pl-PL":[1,"Europe"],"is-IS":[1,"Europe"],"lt-LT":[2,"Europe"],"lv-LV":[2,"Europe"],"mt-MT":[1,"Europe"],"si-SI":[1,"Europe"],"sk-SK":[1,"Europe"],"da-DK":[1,"Europe"],"ee-EE":[2,"Europe"],"en-GB":[0,"Europe"],"en-AU":[10,"Australia"],"en-AE":[4,"Dubai"],"ar-AE":[4,"Dubai"],"de-AT":[1,"Europe"],"zh-TW":[10,"Australia"],"zh-CN":[8,"HongKong"],"fr-LU":[1,"Europe"],"nl-NL":[1,"Europe"],"it-IT":[1,"Europe"],"ja-JP":[9,"Tokyo"],"en-SG":[8,"Singapore"],"en-ZA":[2,"South Africa"],"no-NO":[1,"Europe"],"pt-PT":[0,"Europe"],"es-ES":[1,"Europe"],"sv-SE":[1,"Europe"],"fr-FR":[1,"Europe"],"de-DE":[1,"Europe"],"de-CH":[1,"Europe"],"en-CH":[1,"Europe"],"fr-CH":[1,"Europe"],"it-CH":[1,"Europe"]};
var j=f("html").attr("lang");
return h[j]
};
a.prototype.showCountryTime=function(){return e(this.countryLocalTime[0],this.countryLocalTime[1])
};
a.prototype.lightstreamerLibraryPresenceCheck=function(){if(!window.Lightstreamer){var h=f(b.TABLES_CLASS+":first").data("lscore");
f.ajax({url:h,dataType:"script",cache:true,success:function(){window.dlog("liveprices: Loading liveprices core libraries");
a.prototype.streamingScriptsPresenceCheck()
},error:function(){window.dlog("liveprices: Error loading liveprices core libraries")
}})
}else{this.streamingScriptsPresenceCheck()
}};
a.prototype.streamingScriptsPresenceCheck=function(){if(!window.IG||!window.IG.service||!window.IG.service.LightstreamerService){var h=f(b.TABLES_CLASS+":first").data("streaming");
f.ajax({url:h,dataType:"script",cache:true,success:function(){window.dlog("liveprices: Loading streaming core services");
a.prototype.scriptsLoadedPublish()
},error:function(){window.dlog("liveprices: Error loading streaming core services")
}})
}else{this.scriptsLoadedPublish()
}};
a.prototype.scriptsLoadedPublish=function(){window.PS.util.pubsub.publish("liveprices.librariesloaded")
};
a.prototype.unsubscribe=function(j,h){if(c.hasOwnProperty(j)){if(c[j].hasOwnProperty("subscription")){if(c[j].subscription.hasOwnProperty(h)){window.dlog("liveprices: unsubscribing "+j+h);
c[j].subscription[h].unsubscribe();
c[j].subscription[h]=null
}}}};
a.prototype.showHideColumns=function(t,q){var l=t.find(".livePriceTable");
var r=l.parent();
var p={};
var u={};
var h;
var m;
var o;
var k;
var j;
var n=q||b.TABLE_ADJUSTMENTS.CHECK;
if(l.width()>r.width()&&(n===b.TABLE_ADJUSTMENTS.LESS||n===b.TABLE_ADJUSTMENTS.CHECK)){a.prototype.hideLastColumn(t)
}else{if(t.find("tbody tr:last td:hidden").length>0&&(n===b.TABLE_ADJUSTMENTS.MORE||n===b.TABLE_ADJUSTMENTS.CHECK)){h=l.find(".first");
p.minWidth=parseInt(h.css("min-width"),10);
p.paddingRight=parseInt(h.css("padding-right"),10);
p.paddingLeft=parseInt(h.css("padding-left"),10);
m=l.find(".lastLpColumn");
u.minWidth=parseInt(m.css("min-width"),10);
u.paddingRight=parseInt(m.css("padding-right"),10);
u.paddingLeft=parseInt(m.css("padding-left"),10);
o=p.minWidth+p.paddingRight+p.paddingLeft+5;
k=u.minWidth+u.paddingRight+u.paddingLeft;
j=l.find("tr:last td:visible").length;
if(o+k*j<r.width()){a.prototype.showNextColumn(t)
}}}};
a.prototype.columnAction=function(h,k){var j=h.find(".lastLpColumn");
switch(k){case b.ACTIONS.HIDE:j.hide().removeClass("lastLpColumn").prev().addClass("lastLpColumn");
break;
case b.ACTIONS.SHOW:j.removeClass("lastLpColumn").next().show().addClass("lastLpColumn");
break
}};
a.prototype.hideLastColumn=function(j){var h=f(j);
if(h.find("tbody tr:first td:visible").length>3){a.prototype.columnAction(h,b.ACTIONS.HIDE);
a.prototype.showHideColumns(h,b.TABLE_ADJUSTMENTS.LESS)
}};
a.prototype.showNextColumn=function(j){var h=f(j);
if(h.find("tbody tr:first td:hidden").length>0){a.prototype.columnAction(h,b.ACTIONS.SHOW);
a.prototype.showHideColumns(h,b.TABLE_ADJUSTMENTS.MORE)
}};
a.prototype.adjustTables=function(){var h=f(".live-prices");
h.each(function(){var n=f(this);
var j=n.is(":visible");
var k;
var m;
var l;
if(!j){if(n.parent().is(":visible")){k=n
}else{l=n.parentsUntil(":visible");
k=f(l[l.length-1])
}m=k.attr("style");
k.css({display:"block",height:0})
}a.prototype.showHideColumns(n);
if(!j){k.attr("style",m||"")
}})
};
a.prototype.eventBindings=function(){var h;
f(window).bind("resize",function(){clearTimeout(h);
h=setTimeout(a.prototype.adjustTables,b.RESIZE_DELAY)
});
f(window).bind("orientationchange",a.prototype.adjustTables)
};
a.prototype.startSubscriptions=function(){if(!window.IG.service.LightstreamerService.clientName){a.prototype.connect()
}function j(m,n,l){m[n]={};
var k=0;
for(k;
k<l.length;
k++){m[n][l[k]]="-"
}return m
}function h(p,l,o,k,n,r,m,q){m[p]=window.IG.service.LightstreamerService.subscribe(o+k+"|"+p+"|1",n,"MERGE",function(t,u){u.forEachChangedField(function(z,D,y,B){y=c[r].data[p][D].replace(" ","");
var C=f(c[r]["static"]).find("[data-field$="+D+"][data-item="+l+"]");
if(y==="-"&&(D==="CPT"||D==="CPC")){if(B>0){C.parent().addClass(b.TEXT_COLOR_CLASS.BLUE)
}else{if(B<0){C.parent().addClass(b.TEXT_COLOR_CLASS.RED)
}else{C.parent().addClass(b.TEXT_COLOR_CLASS.GREEN)
}}}if(y!=="-"&&D!=="UTM"){var x;
var A=parseFloat(y);
var w=parseFloat(B);
if(D==="CPT"||D==="CPC"){if(w>0){x=b.TEXT_COLOR_CLASS.BLUE
}else{if(w<0){x=b.TEXT_COLOR_CLASS.RED
}else{x=b.TEXT_COLOR_CLASS.GREEN
}}C.parent().removeClass(b.TEXT_COLOR_CLASS.BLUE+" "+b.TEXT_COLOR_CLASS.RED+" "+b.TEXT_COLOR_CLASS.GREEN).addClass(x)
}else{if(D==="BID"||D==="OFR"){x=A>w?"lsDown":"lsUp";
C.parent().removeClass("lsDown lsUp").each(function(E,F){g.util.addTemporaryClass(F,x,2000)
})
}}}if(q==="true"&&D==="UTM"){B=a.prototype.showCountryTime()
}c[r].data[p][D]=B;
f(C).html(B)
})
})
}f(b.TABLES_CLASS).each(function(x){var w=f(this);
var q={};
var y=f(w).attr(b.TIME_ATTRIBUTE);
var o=f(w).attr(b.EPICS_ATTRIBUTE).replace(/\{|\}|\s/ig,"");
var l=(o.length===0)?[]:o.split(",");
var r=f(w).attr(b.COLUMNS_ATTRIBUTE);
var k=w.attr(b.ID);
var C={};
var B=b.FIDS.split(",");
var t="";
var n;
if(!k){k=b.TABLES_ID_PREPEND+x;
w.attr(b.ID,k)
}var u=0;
for(u;
u<B.length;
u++){if((","+r+",").indexOf(B[u])>-1){t+=","+B[u]
}}t=(t.length>0)?t.substring(1):b.FIDS;
n=t.match(/\w{3,}/g);
var p=0;
var z;
var m;
var A;
for(p;
p<l.length;
p++){z=l[p].split("=");
m=z[0];
A=z[1];
if(A.length>0){A=":"+A.replace(/\_/ig,",")
}a.prototype.unsubscribe(k,m);
q=j(q,m,n);
h(m,p,t,A,n,k,C,y)
}c[k]={subscription:C,"static":w,data:q}
});
a.prototype.eventBindings();
a.prototype.adjustTables()
};
a.prototype.removeTableWideMessage=function(){var h=f(".livePriceTable");
h.find(".hiddenEpic").removeClass("hiddenEpic");
h.removeClass("withMessage").find(".message").attr("colspan",1).attr("rowspan",1).find("div").text("-")
};
a.prototype.setTableWideMessage=function(j,h){if(h){f(".livePriceTable:visible").each(function(){while(f(this).find("thead th:visible").size()>3){a.prototype.columnAction(f(this),b.ACTIONS.HIDE)
}})
}f(".livePriceTable").addClass("withMessage").find(".message").attr("colspan",999).attr("rowspan",999).find("div").text(j)
};
a.prototype.checkLocalStorage=function(){var k=true;
var h;
if(typeof window.localStorage==="object"){try{window.localStorage.setItem("localStorageQuotaCheck",1);
window.localStorage.removeItem("localStorageQuotaCheck")
}catch(j){k=false;
h=window.i18n["clientlibs.liveprices.noLocalStorage"]||"Please exit private mode to view live prices.";
a.prototype.setTableWideMessage(h,true)
}}return k
};
a.prototype.launchLibraries=function(){g.util.pubsub.subscribe("liveprices.librariesloaded",a.prototype.startSubscriptions);
a.prototype.removeTableWideMessage();
a.prototype.lightstreamerLibraryPresenceCheck()
};
a.prototype.removeMarketLinks=function(){var j=window.parseInt(window.matchMedia.IGMeasures.max_width_responsive_mobile,10)-1;
if(window.matchMedia("only screen and (max-width:"+j+"px)").matches){var h;
f(b.TABLES_CLASS).each(function(){h=f(this);
if(!h.data("mobilelinks")){h.find("a").contents().unwrap()
}})
}};
a.prototype.init=function(){var k=f(".live-prices");
var m="classic";
var h=g.util.Page.getQuerystring("t50");
if(h==="true"){k.find("."+m).removeClass(m).addClass("top50")
}if(f(".nojs").size()===0){if(f(b.TABLES_CLASS).size()>0&&a.prototype.checkLocalStorage()){var j=false;
var l=k.parentsUntil(".mPanel");
if(l.length>0){l.each(function(n,o){if(f(o).prev().hasClass("js_tabs")){j=true;
return false
}})
}a.prototype.countryLocalTime=this.checkLocal();
this.removeMarketLinks();
if(!g.core.CQMode.inAuthor&&g.util.Page.environment()!=="local"){if(j){g.util.pubsub.subscribe("panels.loaded",a.prototype.launchLibraries)
}else{a.prototype.launchLibraries()
}}else{a.prototype.removeTableWideMessage();
a.prototype.eventBindings();
a.prototype.adjustTables()
}}}};
a.prototype.connect=function(){window.IG.service.LightstreamerService.configure(null,"InVisionProvider",null,false,"upp",null,null)
};
g.core.LivePrices=new a()
}(window.PS,window.jQuery,window.worldClock));
window.PS=window.PS||{};
PS.core=PS.core||{};
(function(c,b){function a(){this.init()
}a.prototype.acarousel_intervalID=0;
a.prototype.acarousel_timeoutID=0;
a.prototype.acarousel_scrollInterval=8000;
a.prototype.acarousel_restartAfter=10000;
a.prototype.acarousel_currentPanel=1;
a.prototype.acarousel_totalPanels=0;
a.prototype.init=function(){b("a[href^='#tab']").click(function(h){h.preventDefault();
var g=(function(j){if(j.attr("href").indexOf("_")>0){try{return parseInt(j.attr("href").replace(/#tab([0-9])_([0-9])/g,"$2"))-1
}catch(k){return 0
}}return 0
})(b(this));
var f=(function(j){try{return parseInt(j.attr("href").replace(/#tab([0-9])(_([0-9]))?/g,"$1"))-1
}catch(k){return 0
}})(b(this));
b(".tabs:eq("+g+") .tabNav li:eq("+f+") a").trigger("click")
});
var e=this;
b(".js_panels").each(function(){var g=this,h=b(g).find(".js_heading")[0];
if(h){var f=h.getAttribute("data-type");
b(this).addClass(f.replace("js_",""));
switch(f){case"js_tabs":e.tabs(g);
break;
case"js_accordion":e.accordion(g);
break;
case"js_mcarousel":e.manualcarousel(g);
break;
case"js_acarousel":e.automaticcarousel(g);
break;
default:dlog("Panels: no widget type selected");
break
}}});
c.util.pubsub.publish("panels.loaded")
};
a.prototype.tabs=function(j){var p;
var r;
var l=b(j);
var m=l.find(".mPanel");
if(m.length<1){return
}var k=m.find("h3:first").attr("data-tabs-type");
var B=l.find(".animated").length>0||k.indexOf("animated")>-1;
var u=false;
var o=1;
var x=function(G){return'<div class="expandedTabNav"><a data-direction="left" href="#" class="arrow prev">&lt;</a>'+G+'<a data-direction="right" href="#" class="arrow next">&gt;</a></div>'
};
var q=function(H,N){var P="";
var Q="";
var R=null;
var L=null;
var G;
function J(U){var T=window.location.hash;
if(T.indexOf("?")>0){T=T.split("?")[0]
}return U.length>0&&T==="#"+U
}Q+='<ul class="tabNav">';
for(var O=0,M=H.length;
O<M;
O++){G=H[O].childNodes[1];
r=b(G).data("hash");
P="tab"+(O+1);
if(J(r)){P+=" current navigateToThisTab"
}if(O===0){P+=" first"
}if(O===M-1){P+=" last"
}H[O].className=H[O].className+" "+P;
Q+='<li class="'+P+'"><a href="#">';
R=H[O].childNodes;
for(var K=0,I=R.length;
K<I;
K++){if((R[K].className)&&(R[K].className.indexOf("js_heading")>-1)){L=R[K]
}}if(L&&L.innerHTML){L.innerHTML=b.trim(L.innerHTML);
if(L.innerHTML.length>30){Q+=L.innerHTML.substring(0,29)
}else{Q+=L.innerHTML
}}Q+="</a></li>"
}Q+="</ul>";
if(k==="top50dotted"||k==="dotted"){Q=x(Q)
}if(b(Q).find(".current").length===0){var S=b(Q);
S.find(".first").addClass("current");
b(".mPanelParent").find(".mPanel.first").addClass("current");
Q=S[0]
}return Q
};
var f=function(H,G,I){G.find('h3[data-image^="/"]').each(function(J){H.find("li:eq("+J+")").addClass("imageTitle").find("a").append('<img src="'+I+'" />')
})
};
var F=function(K,J,I){var N=J.width();
var L=b(K[0]).parent();
var M=L.find(".mPanel");
if(!I){K.css("height","auto");
K.not(".current").hide()
}else{M.width(N);
M.parent().width(N*M.length)
}var H=K.map(function(){return b(this).height()
}).get();
var G=Math.max.apply(null,H);
if(k.indexOf("top50")>-1||I){M.height(G);
L.height(G)
}};
var D=function(I,G){var H=G.find(".current");
if(I==="right"){if(H.hasClass("last")){G.find(".first a").click()
}else{H.next().find("a").click()
}}else{if(H.hasClass("first")){G.find(".last a").click()
}else{H.prev().find("a").click()
}}};
var E=function(H){var G=b(H);
G.find(".arrow").bind("click",function(J){J.preventDefault();
var I=b(this).data("direction");
D(I,G)
})
};
var z=function(G,H){G.find("a").on("click keydown",function(I){if((I.type!=="click")&&(I.keyCode!==(c.events.KEYS.SPACE||c.events.KEYS.ENTER))){}else{b(this).parents("ul").find("li").removeClass("current");
b(this).parent().addClass("current");
b(this).parents(".mPanelParent").find(".mPanel").hide();
b(this).parents(".mPanelParent").find(".tab"+(b(this).parent().index()+1)).addClass("current").show()
}if(I.keyCode!==c.events.KEYS.SPACE){I.preventDefault()
}})
};
var y=function(G,H){if(!u){u=true;
H.stop(true,true).animate({left:G},500,function(){u=false
})
}};
var h=function(Q,P,I,M,K){if(!u){var J=Math.abs(parseInt(P.css("left")));
var H=I.find(".current");
H.removeClass("current");
var L=P.find(".mPanel");
var G=L.eq(0).width();
var N=(G*L.length);
M=Math.abs(M)||1;
var O;
if(Q==="right"){if(H.hasClass("last")){O=0;
I.find(".first").addClass("current")
}else{O=-(J+G*M);
if(M>1){H.siblings("."+K).addClass("current")
}else{H.next().addClass("current")
}}}else{if(!H.hasClass("first")){O=-(J-G*M);
if(M>1){H.siblings("."+K).addClass("current")
}else{H.prev().addClass("current")
}}else{O=-(N-(G*o));
I.find(".last").addClass("current")
}}y(O,P)
}};
var A=function(I,H){var G=I.find("div.animated");
var K=G.find("div:first");
var M=K.find(".mPanel");
var J=G.width();
var L=(J*M.length);
if(G.height()===0){G.height(K.height())
}K.width(L);
I.find(".arrow").on("click",function(O){O.preventDefault();
var N=b(this).data("direction");
h(N,K,H)
});
H.find("li").on("click",function(S){S.preventDefault();
function R(W){var X=W.attr("class");
var V=/(\btab)\w+\b/.exec(X);
if(V){V=V[0];
return V.replace("tab","")
}else{return false
}}var P=b(this);
var U=H.find(".current");
if(!P.hasClass("current")){var O=R(P);
var N=R(U);
if(!O||!N){console.log("Error on tabnumber");
return
}var T=O-N;
var Q=(T<0)?"left":"right";
h(Q,K,H,T,"tab"+O)
}})
};
var e=function(I){var H=b(I.data.panel);
var G=H.find(".tabNav");
if(B){var J=H.find(".animated div:first");
if(I.keyCode==c.events.KEYS.LEFT_ARROW){h("left",J,G)
}if(I.keyCode==c.events.KEYS.RIGHT_ARROW){h("right",J,G)
}}else{if(I.keyCode==c.events.KEYS.LEFT_ARROW){D("left",G)
}if(I.keyCode==c.events.KEYS.RIGHT_ARROW){D("right",G)
}}if(I.keyCode===c.events.KEYS.SPACE){I.preventDefault();
b(I.target).click()
}};
var t=function(){b(".mPanelParent").bind("click",function(G){var H=b(this);
if(!H.hasClass("binded")){H.addClass("binded");
b(document).bind("keydown",{panel:H},e)
}c.util.TableResizeRedraw()
});
b(document).mouseup(function(G){var H=b(".mPanelParent");
if(!H.is(G.target)&&H.has(G.target).length===0){b(".mPanelParent.binded").removeClass("binded");
b(document).unbind("keydown",e)
}})
};
var n=function(G){if(b(".touch").size()===1&&G.size()>0&&G.find(".table-scroller").length===0&&G.find(".responsive-table").length===0&&G.find(".brightcove-playlist").length===0){b.ajax({url:"/etc/designs/onedomain/0/clientlibs_ps_part/js/libs/hammer.js",success:function(){if(G.find(".mPanel").length>1){var H=G.find(".mPanel");
Hammer(H,{drag_block_horizontal:true}).on("swipeleft",function(I){if(!H.is(":animated")){var J=jQuery.Event("keydown");
J.keyCode=c.events.KEYS.RIGHT_ARROW;
b(document).trigger(J)
}});
Hammer(H,{drag_block_horizontal:true}).on("swiperight",function(I){if(!H.is(":animated")){var J=jQuery.Event("keydown");
J.keyCode=c.events.KEYS.LEFT_ARROW;
b(document).trigger(J)
}})
}}})
}};
var C=function(J,I,H){if(!b("html").hasClass("ie8")){var G;
var K=200;
window.addEventListener("resize",function(){clearTimeout(G);
G=setTimeout(function(){F(J,I,H);
if(H){var M=I.find(".tabNav .current").index()||0;
var L=b(J[0]).parent();
L.css("left",J.width()*-M)
}w()
},K)
})
}};
var g=function(G){G.not(".dotted").find("a").on("click",function(H){G.toggleClass("open");
H.preventDefault()
})
};
var w=function(){var H=b(".tabNav.accordion a"),G=c.util.Browser.getCurrentBrowserInfo(),I,J;
if(H&&G.browser==="msie"&&parseFloat(c.util.Browser.getCurrentBrowserInfo().version)<=11){I=-1;
H.css("height","auto");
H.each(function(){J=b(this).height();
I=J>I?J:I
});
H.height(I)
}};
p=b(q(m,B));
f(p,m,b(this).attr("data-image"));
F(m,l,B);
if(!l.find(".tabNav").length){p.prependTo(j)
}p=l.find(".tabNav");
p.addClass(k);
if(!B){E(p.parent());
z(p,k)
}else{A(l,p)
}t();
n(l);
C(m,l,B);
g(p);
w()
};
a.prototype.navigateToTabIfRequired=function(){var e=b("li.navigateToThisTab");
if(e.size()>0&&window.matchMedia("only screen and (min-width:"+window.matchMedia.IGMeasures.min_breakpoint+")").matches){if(b(window.location.hash).size()===0){e.attr("id",window.location.hash.replace("#",""))
}e.get(0).scrollIntoView()
}};
a.prototype.accordion=function(e){var h=b(e).find(".mPanel"),g,f,l="",k="";
for(g=0,f=h.length;
g<f;
g++){if(g===0){l="current slide"
}else{l="slide"
}b(h[g]).addClass(l)
}h.find(".js_heading").each(function(){if(b(this).html().length>80){b(this).html(b(this).html().substring(0,79))
}b(this).html('<a href="#">'+b(this).html()+"</a>")
}).on("click keydown",function(j){if((j.type!=="click")&&(j.keyCode!==(32||13))){}else{k=this;
if(this.parentNode.className.indexOf("current")===-1){b(e).find(".current").removeClass("current").css("height","auto").find(".mp-parsys2").slideUp(function(){this.parentNode.setAttribute("style","");
b(k.parentNode).addClass("current").find(".mp-parsys2").css("display","none").slideDown("fast",function(){var m=b(k.parentNode).offset();
b("html,body").animate({scrollTop:m.top},500)
})
})
}}if(j.keyCode!==9){j.preventDefault()
}})
};
a.prototype.manualcarousel=function(e){window.i18n=window.i18n||{};
var g=b(e).find(".mPanel");
var h=g.length;
var l=1;
var f=0;
var j=800;
var k=b(".mcarousel").find(".section").width();
b(".mcarousel .section .igContent").wrap("<center></center>");
b('<ul id="mcarousel_navigator"><li id="mcarousel_prev"><a href="#">'+(window.i18n["clientlibs.mcarousel.prev"]||"prev")+'</a></li><li id="mcarousel_indicator"><span id="mcarousel_currentPanel">'+l+"</span> "+(window.i18n["clientlibs.mcarousel.of"]||"of")+" "+h+'</li><li id="mcarousel_next"><a href="#">'+(window.i18n["clientlibs.mcarousel.next"]||"next")+"</a></li>").appendTo(".mcarousel");
b("#mcarousel_next").find("a").click(function(m){m.preventDefault();
b(this).addClass("on");
if(l==h){b(this).removeClass("on")
}else{b(".mcarousel").find(".mp-parsys").stop().animate({left:"-"+(k*l)+"px"},j,function(){f+=k;
l+=1;
b("#mcarousel_currentPanel").text(l);
b("#mcarousel_next").find("a").removeClass("on")
})
}});
b("#mcarousel_prev").find("a").click(function(m){m.preventDefault();
b(this).addClass("on");
if(l===1){b(this).removeClass("on")
}else{b(".mcarousel").find(".mp-parsys").stop().animate({left:(k-f)+"px"},j,function(){l-=1;
b("#mcarousel_currentPanel").text(l);
f=(f-k);
b("#mcarousel_prev").find("a").removeClass("on")
})
}})
};
a.prototype.automaticcarousel=function(t){var f=b(t).find(".mPanel");
a.prototype.acarousel_totalPanels=f.length;
var e="";
var g;
var p;
var r;
var n;
a.prototype.autoScroll(a.prototype.acarousel_scrollInterval);
e+='<ul id="acarousel_navigator">';
for(var q=0,o=f.length;
q<o;
q++){if(q===0){p="current tab"+(q+1)
}else{p="tab"+(q+1)
}f[q].className=f[q].className+" "+p;
e+='<li><a class="'+p+'" href="#">';
r=f[q].childNodes;
for(var m=0,h=r.length;
m<h;
m++){if((r[m].className)&&(r[m].className.indexOf("js_heading")>-1)){n=r[m]
}}e+=n.innerHTML;
e+="</a></li>"
}e+="</ul>";
g=b(e);
g.appendTo(".acarousel").find("a").on("click keydown",function(j){if((j.type!=="click")&&(j.keyCode!==(32||13))){}else{b(this).parents("ul").find("li").find("a").removeClass("current");
b(this).addClass("current");
a.prototype.scrollTo(b(this).parent().index()+1);
a.prototype.stop()
}if(j.keyCode!==9){j.preventDefault()
}})
};
a.prototype.scrollTo=function(g){var f=b(".acarousel").find(".section").width();
var e=((f*g)-f);
b(".acarousel").find(".mp-parsys").stop().animate({left:"-"+e+"px"},"slow",function(){b("#acarousel_navigator").find("li").find("a").removeClass("current");
b("#acarousel_navigator").find("li").find(".tab"+g).addClass("current");
a.prototype.acarousel_currentPanel=g
})
};
a.prototype.autoScroll=function(){a.prototype.acarousel_intervalID=setInterval(a.prototype.step,a.prototype.acarousel_scrollInterval)
};
a.prototype.step=function(){if(a.prototype.acarousel_currentPanel===a.prototype.acarousel_totalPanels){a.prototype.scrollTo(1);
a.prototype.acarousel_currentPanel=1
}else{a.prototype.scrollTo(a.prototype.acarousel_currentPanel+1)
}};
a.prototype.stop=function(){window.clearTimeout(a.prototype.acarousel_timeoutID);
clearInterval(a.prototype.acarousel_intervalID);
a.prototype.acarousel_timeoutID=window.setTimeout(a.prototype.autoScroll,(a.prototype.acarousel_restartAfter-a.prototype.acarousel_scrollInterval))
};
b('.mPanelParent a[href^="#panel"]').click(function(j){j.preventDefault();
var f=parseInt(b(this).attr("href").replace("#panel",""),10);
var h=false;
if(!isNaN(f)){var k=b(this).parents(".mPanelParent");
var g;
if(k.hasClass("tabs")){g=k.find(".tabNav li a.tab"+f)
}if(k.hasClass("accordion")){g=k.find(".mPanel:eq("+(f-1)+") .h-med")
}if(k.hasClass("acarousel")){g=k.find("#acarousel_navigator li a.tab"+f)
}if(k.hasClass("mcarousel")){}if(g){h=true;
g.trigger("click")
}}if(!h){log('Broken Internal link in Modal Panel ("'+b(this).attr("href")+'")')
}});
c.core.mPanel=a
}(PS,window.jQuery));
window.PS=window.PS||{};
PS.core=PS.core||{};
window.i18n=window.i18n||{};
PS.storage=PS.storage||{};
PS.storage.LocalQueue=PS.storage.LocalQueue||{};
PS.events=PS.events||{};
PS.util=PS.util||{};
PS.util.DeviceUtil=PS.util.DeviceUtil||{};
(function(a,e,k,b,f,j,h){var g;
function c(){g=this;
this._initialiseVariables();
this._initTriggers()
}c.prototype._initialiseVariables=function(){this.text={previous:(k["clientlibs.lightbox.previous"]||"previous"),next:(k["clientlibs.lightbox.next"]||"next"),close:(k["clientlibs.lightbox.close"]||"close"),of:(k["clientlibs.lightbox.of"]||"of")};
this.$mask=a('<div id="mask"></div>');
this.$lightbox=a('<div id="lightbox"></div>');
this.$panel=a('<div class="panel"></div>');
this.$nav=a('<ul class="lightbox-nav"><li><a class="lb-group-nav-button previous" href="#">'+this.text.previous+'</a></li><li><a class="lb-group-nav-button next" href="#">'+this.text.next+"</a></li></ul>");
this.$progress=a('<p id="navLB"><span id="progressLB"></span></p>');
this.$close=a('<a id="killLB" />');
this.TRIGGER_PREFIX="#lb-";
this.AUTOLOAD_KEYWORD="autoload";
this.AUTOLOAD_TRIGGER=this.TRIGGER_PREFIX+this.AUTOLOAD_KEYWORD;
this.TRIGGERONCE_TOKEN_PREFIX="lightboxTriggerOnce:";
this.NO_SCROLLING_CLASS="no-scrolling";
this.ELEMENTS_USED_TO_STOP_PAGE_SCROLL="html, body";
this.POPUP_CLASS="lightbox-popup";
this.POPUP_COMPLIANCE_CLASS="lightbox-popup-compliance";
this.POPUP_VIDEO_CLASS="lightbox-popup-video-only";
this.POPUP_RICH_VIDEO_CLASS="lightbox-popup-rich-video";
this.POPUP_SCENE7_VIDEO_CLASS="lightbox-popup-video-scene7";
this.POPUP_VIDEO_LIBRARY_CLASS="lightbox-popup-video-library";
this.KILL_BUTTON_OUTSIDE_VIEWPORT_CLASS="bring-close-button-inside-lightbox";
this.FULL_WIDTH_CLASS="lightbox-full-width";
this.POPUP_BRIGHTCOVE_VIDEO_CLASS="lightbox-popup-video-bc";
this.POPUP_BRIGHTCOVE_FULLWIDTH_CLASS="lightbox-popup-video-bc-full-width";
this.triggerElement=a("body");
this.lightboxSubscriptionKey=-1;
this.trigger="";
this.triggerName="";
this.triggerClass="";
this.token="";
this.$panels=a("<div />");
this.isVideoContentOnly=false;
this.numberOfPanels=0;
this.currentPanelIndex=0;
this.autoloaded=false;
this.imageLoader=new e.util.ImageLoader
};
c.prototype.isLightboxTrigger=function(l){var n=false;
var m=[];
if(l&&!!g.TRIGGER_PREFIX){m=l.split(g.TRIGGER_PREFIX)
}if(m.length>1&&m[1].length>0){n=true
}return n
};
c.prototype.isFullSize=function(){return !!this.$panels.find(".js_lightbox").data("allowfullwidth")
};
c.prototype.allowFullScreen=function(){var l=[e.util.foregroundImage];
var m;
if(this.isFullSize()){this.$lightbox.addClass("allow-full-width");
m=this.viewport().width-100;
e.util.imageResizer.scaleImagesToViewport(this.$lightbox,m,l)
}};
c.prototype._initTriggers=function(){var l=g.processTrigger(window.location.href);
var m=b.CQMode.inEdit;
if(!m){if(l!==false&&l.full!==this.AUTOLOAD_TRIGGER){g.autoloaded=true;
g.launch(l.full)
}if(l===false&&a('.js_lightbox[data-trigger="'+this.AUTOLOAD_KEYWORD+'"]').size()>0){g.autoloaded=true;
g.launch(this.AUTOLOAD_TRIGGER)
}g.bindLaunchTriggers()
}};
c.prototype.bindLaunchTriggers=function(){var l=a('.js_clickable a[href^="'+g.TRIGGER_PREFIX+'"], .js_clickable .image');
g.lightboxSubscriptionKey=h.pubsub.subscribe("wrapper.event.userTriggered",function(m,n){var o=h.links.getLinkAncestorOfTarget(n.target);
if(h.links.isAnchorLinkTriggeredByUser(n)&&g.processTrigger(o.href)!==false){g.autoloaded=false;
g.launch(o.href)
}});
l.each(function(){var o=a(this),m=o.attr("href")||o.siblings(".text").find("a").attr("href"),n=g.processTrigger(m);
o.on("click keydown",(function(p){if(j.userActivated(p)&&n.full){g.autoloaded=false;
g.launch(n.full)
}}))
});
e.util.Events.add(window,"orientationchange",function(m){window.setTimeout(function(){a(document).scroll()
},100)
})
};
c.prototype.processTrigger=function(p){var n=false;
var o=this.isLightboxTrigger(p);
var r=[];
var m="";
var q="";
var l="";
if(o){r=p.split(this.TRIGGER_PREFIX);
m=this.TRIGGER_PREFIX+r[1];
q=m.split("~")[1]||"";
l=r[1].slice(0,(m.length-q.length));
n={full:m,name:l,cssclass:q}
}return n
};
c.prototype.handleLaunchingTrigger=function(m){var l=g.processTrigger(m);
if(l){this.trigger=l.full;
this.triggerClass=l.cssclass;
this.triggerName=l.name;
this.triggerElement=a("a[href*="+this.trigger+"]")
}return l
};
c.prototype.getContentPanels=function(){this.$panels=a(".mPanel:has(.js_lightbox[data-trigger="+this.triggerName+"])");
if(this.$panels.length===0){dlog("Lightbox: no lightboxes on the page for trigger: "+this.trigger)
}return this.$panels
};
c.prototype.handleTriggerOnceLightboxes=function(){var l=true;
this.createShowOnceToken();
if(this.isTriggerOnceLightbox()){if(this.hasBeenShownBefore()){l=false
}}return l
};
c.prototype.createShowOnceToken=function(){this.token=this.TRIGGERONCE_TOKEN_PREFIX+location.pathname;
this.token+="#"+this.triggerName;
return this.token
};
c.prototype.isTriggerOnceLightbox=function(){var l=this.$panels.find(".js_lightbox");
return !!l.data("triggeronce")&&!l.data("overlay")
};
c.prototype.hasBeenShownBefore=function(){var m=f.retrieveLast(this.token);
var l;
if(!m){l=this.token.split("#")[0];
m=f.retrieveLast(l);
if(m){this.dontShowAgain()
}}dlog("Lightbox: lightbox trigger registered as 'open once' has already been triggered "+this.token);
return m
};
c.prototype.dontShowAgain=function(){return f.store(this.token,true)
};
c.prototype.isCloseOnCtaOnly=function(){return !!this.$lightbox.find(".js_lightbox").data("closectaonly")
};
c.prototype.preventScrolling=function(l){var m=a(l);
m.addClass(this.NO_SCROLLING_CLASS)
};
c.prototype.allowScrolling=function(l){var m=a(l);
m.removeClass(this.NO_SCROLLING_CLASS)
};
c.prototype.preparePageForLightbox=function(){this.preventScrolling(this.ELEMENTS_USED_TO_STOP_PAGE_SCROLL);
this.subscribeToEvents();
this.bindKillTriggers();
a("body").prepend(this.$mask)
};
c.prototype.subscribeToEvents=function(){h.pubsub.subscribe("lightbox.kill",function(){g.kill()
});
h.pubsub.subscribe("lightbox.group.showPanel",function(m,l){g.showPanel(l)
});
h.pubsub.subscribe("lightbox.group.renderNavigation",function(l,m){g.renderNavigation(m)
})
};
c.prototype.bindKillTriggers=function(){this.$mask.on("click keydown",function(n){var m=a(n.target.parentNode).hasClass("cta");
var l=m&&!a(n.target.parentNode).hasClass("cta-sec");
if(j.userActivated(n)){if(((n.target.id==="mask"||n.target.id==="killLB")&&!g.isCloseOnCtaOnly())||(g.isCloseOnCtaOnly()&&l)){h.pubsub.publish("lightbox.kill")
}}});
a(document).on("keydown",function(l){if(l.which===j.KEYS.ESCAPE&&!g.isCloseOnCtaOnly()){h.pubsub.publish("lightbox.kill")
}})
};
c.prototype.bindEventsForGroups=function(){this.$nav.find(".lb-group-nav-button").on("click keydown",function(n){var m=g.currentPanelIndex;
var l=a(n.target);
if(l.hasClass("next")){m++
}if(l.hasClass("previous")){m--
}if(j.userActivated(n,true)){h.pubsub.publish("lightbox.group.showPanel",m)
}});
this.$lightbox.on("mousemove click keydown",function(l){if(j.userActivated(l)||l.type==="mousemove"){h.pubsub.publish("lightbox.group.renderNavigation",l)
}})
};
c.prototype.populateLightbox=function(){this.numberOfPanels=this.$panels.length;
var l=this.chooseClassBasedOnContent()+" "+this.triggerClass;
this.$lightbox.addClass(l);
this.$panel.html(this.$panels.html());
this.$lightbox.html(this.$panel);
if(this.numberOfPanels>1){this.handleGroupedLightboxes()
}};
c.prototype.chooseClassBasedOnContent=function(){var o=[];
var t=this.$panels.find(".rich-content");
var y=this.$panels.find(".rich-video");
var B=this.$panels.find(".igVideoLibrary");
var z=this.$panels.find(".s7ViewerContainer object");
var r=this.$panels.find(".brightcove-player");
var w=this.$panels.find(".bc-full");
var p=this.$panels.find(".compliance-overlay");
var x=t.size()>0;
var u=y.size()>0;
var q=B.size()>0;
var l=z.size()>0;
var m=r.size()>0;
var n=w.size()>0;
var A=p.size()>0;
if(!x&&(u||l||q)){this.isVideoContentOnly=true;
o.push(this.POPUP_VIDEO_CLASS);
if(u){o.push(this.POPUP_RICH_VIDEO_CLASS)
}if(q){o.push(this.POPUP_VIDEO_LIBRARY_CLASS)
}if(l&&!q){o.push(this.POPUP_SCENE7_VIDEO_CLASS)
}}else{if(m){o.push(this.POPUP_BRIGHTCOVE_VIDEO_CLASS);
if(n){o.push(this.POPUP_BRIGHTCOVE_FULLWIDTH_CLASS)
}}else{this.isVideoContentOnly=false;
if(A){o.push(this.POPUP_COMPLIANCE_CLASS)
}o.push(this.POPUP_CLASS)
}}return o.join(" ")
};
c.prototype.handleVideoContent=function(){var m=this.$panel.find(".s7ViewerContainer");
var n=m.find("object");
var l=m.attr("data-params");
var o=this.$panel.find(".brightcove-player");
if(this.isVideoContentOnly&&n.size()===0){if(g.autoloaded){m.attr("data-params",l.replace("autoplay&quot;:false","autoplay&quot;:true"))
}h.Scene7.init()
}if(n.size()>1){a("body").find(".s7ViewerContainer object:not(:first)").remove()
}if(o.length){if(!o.hasClass("videojs-player")){if(!!h.BCPlayer){if(!o.find(".BrightcoveExperience").length){h.BCPlayer.create(o)
}h.BCPlayer.init()
}else{h.pubsub.subscribe("bcplayer.loaded",function(){if(!o.find(".BrightcoveExperience").length){h.BCPlayer.create(o)
}})
}}else{if(!!h.BCPlayer){h.BCPlayer.init()
}}}};
c.prototype.launch=function(m){var l;
this.handleLaunchingTrigger(m);
this.getContentPanels();
l=this.handleTriggerOnceLightboxes();
if(l&&this.$panels.length>0){this.preparePageForLightbox();
this.populateLightbox();
this.allowFullScreen();
this.render()
}};
c.prototype.render=function(){this.$mask.prepend(this.$lightbox);
this.imageLoader.loadImagesInView(this.$lightbox);
this.handleVideoContent();
this.setLightboxSize();
this.centreLightbox();
if(!this.isCloseOnCtaOnly()){this.showLightboxCloseButton()
}this.$lightbox.focus();
if(e.util.DeviceUtil.openAppMA){e.util.DeviceUtil.openAppMA()
}};
c.prototype.setLightboxSize=function(){var m=this.$panels.find(".igFlash object");
var l=m.size()>0;
if(l&&this.$lightbox.height()<m.height()){this.$lightbox.height(this.$lightbox.height()+m.height())
}};
c.prototype.centreLightbox=function(){g.centreVertically();
g.centreHorizontally()
};
c.prototype.centreVertically=function(){var o=a(window);
var m=parseFloat(g.$lightbox.css("margin-top"));
var n=((o.height()-g.$lightbox.outerHeight())/2)-m;
var l=0;
if(o.height()>this.$lightbox.outerHeight()+m){l=n
}g.$lightbox.css({top:l+"px"})
};
c.prototype.centreHorizontally=function(){var m=a(window);
var l=(m.width()-g.$lightbox.outerWidth())/2;
g.$lightbox.css({left:l+"px"})
};
c.prototype.showLightboxCloseButton=function(){var l;
var o=a(window);
var m=a("#mask #killLB");
if(m.size()===0){this.$lightbox.append(this.$close)
}if(a(".tablet").size()>0){var n=parseInt(this.$lightbox.css("top"),10);
if(n<30){this.$lightbox.css("top",(n+30)+"px");
this.$close.css("top",(n+30)+"px")
}}l=parseInt(this.$lightbox.css("left"))<this.$close.width()+e.util.getScrollbarWidth();
if(l===true){this.$close.addClass(this.KILL_BUTTON_OUTSIDE_VIEWPORT_CLASS)
}else{this.$close.removeClass(this.KILL_BUTTON_OUTSIDE_VIEWPORT_CLASS)
}};
c.prototype.kill=function(){if(this.isTriggerOnceLightbox()){this.dontShowAgain()
}this.allowScrolling(this.ELEMENTS_USED_TO_STOP_PAGE_SCROLL);
this.$nav.find(".previous, .next").removeClass("show").off();
this.$lightbox.removeAttr("class");
this.$lightbox.find(".video-lib-thumb").off();
this.$lightbox.off().empty();
this.$mask.off().remove();
this.triggerElement.focus();
h.pubsub.publish("lightbox.closed")
};
c.prototype.handleGroupedLightboxes=function(){g.currentPanelIndex=0;
this.bindEventsForGroups();
this.$lightbox.append(this.$progress).append(this.$nav)
};
c.prototype.showPanel=function(l){g.currentPanelIndex=l;
g.$panel.empty();
g.$panel.html(a(g.$panels[l]).html());
g.updateProgress(l);
g.render()
};
c.prototype.updateProgress=function(m){var l=m+1;
this.$progress.html(l+" "+this.text.of+" "+this.numberOfPanels)
};
c.prototype.renderNavigation=function(m){var o=g.currentPanelIndex<(g.numberOfPanels-1);
var l=g.currentPanelIndex>0;
var p=g.$lightbox.offset();
var n=m.pageX<(p.left+g.$lightbox.width()/2+20);
g.$nav.find(".show").removeClass("show");
if(l&&n){g.$nav.find(".previous").addClass("show")
}if(o&&!n){g.$nav.find(".next").addClass("show")
}};
c.prototype.viewport=function(){return{width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}
};
e.util.Lightboxes=new c()
}(window.jQuery,PS,i18n,PS.core,PS.storage.LocalQueue,PS.events,PS.util));
window.PS=window.PS||{};
PS.util=PS.util||{};
(function(e,c){var a=".col-secondary-fixed-content .contact-us .text-content";
function b(){this.init()
}b.prototype.init=function(){c(a).off("click.promo");
c(a).on("click.promo",this.toggleClass)
};
b.prototype.toggleClass=function(){c(this).toggleClass("open")
};
e.util.Promo=new b()
}(PS,window.jQuery));
(function(a){a.fn.getBox=function(){return{left:a(this).offset().left,top:a(this).offset().top,width:a(this).outerWidth(),height:a(this).outerHeight()}
};
a.fn.relativePositioning=function(j,c){var e=function(m,n,l){switch(m){case"center":return n/2-l/2;
case"right":return n-l;
default:return 0
}},h=function(m,l,n){switch(m){case"bottom":return l-n;
case"center":return l/2-n/2;
default:return 0
}},b=a(j).getBox(),f=a(this).getBox(),g={position:"bottom",anchor:"center",offset:25},k=function(){var m=b.left,l=b.top;
switch(c.position){case"top":l=l-f.height-c.offset;
m+=e(c.anchor,b.width,f.width);
break;
case"bottom":l+=b.height+c.offset;
m+=e(c.anchor,b.width,f.width);
break;
case"right":m+=b.width+c.offset;
l+=h(c.anchor,b.height,f.height);
break;
case"left":m=m-b.width-c.offset;
l+=h(c.anchor,b.height,f.height);
break
}a(this).css({left:m+"px",top:l+"px",display:"block",visibility:"hidden"})
};
c=a.extend(g,c);
k.call(this);
if(a(this).isOutOfScreen()&&c.fallbackPosition){c.position=c.fallbackPosition.split(" ")[0];
a(this).children(":first").attr("class","triangled "+c.fallbackPosition);
k.call(this)
}a(this).css({display:"",visibility:""});
return this
};
a.fn.isOutOfScreen=function(){var b=jq(this).get(0).getBoundingClientRect(),c={height:jq(window).height(),width:jq(window).width()},e=jq("body").scrollTop();
return !(b.left>0&&b.top>0&&b.top+b.height<c.height+e&&b.right<c.width)
}
}(window.jQuery));
window.PS=window.PS||{};
window.PS.util=window.PS.util||{};
(function(a,e){var c={events:{CLICK:"click.tooltip",TOUCH:"touchstart.tooltip"},selectors:{OUTSIDE_TOOLTIP:"body > *:not(.tooltip-popup)",TOOLTIP_CLASS:".tooltip-popup"}};
function b(){function m(){var r=e(this),u=r.children(":first"),t=u.data("displaybehaviour");
r.hide();
g(t,r)
}function g(t,r){switch(t){case"clickInside":r.off(c.events.CLICK);
break;
case"clickOutside":e(c.selectors.OUTSIDE_TOOLTIP).off(c.events.CLICK);
break;
case"clickAnywhere":var u=c.events.CLICK;
if(k()){u+=" "+c.events.TOUCH
}e(document).off(u);
break
}}function f(t,x,w,r){switch(t){case"timeout":var u=parseInt(x.data("displaytime"),10);
if(w.type!=="resize"&&u>0){setTimeout(m.bind(r),u)
}break;
case"clickInside":r.on(c.events.CLICK,m.bind(r));
break;
case"clickOutside":setTimeout(function(){e(c.selectors.OUTSIDE_TOOLTIP).on(c.events.CLICK,m.bind(r))
},10);
break;
case"clickAnywhere":setTimeout(function(){var y=c.events.CLICK;
if(k()){y+=" "+c.events.TOUCH
}e(document).on(y,m.bind(r))
},10);
break
}}function l(C){var B=e(this),u=B.children(":first"),t=u.data("itemselector"),r=u.data("displaybehaviour"),w=u.attr("class"),D=w.replace("triangled ",""),x=D.substr(0,D.indexOf(" ")),A=u.data("fallbackposition"),z=D.substr(D.indexOf("-")+1),y=parseInt(u.data("offset"),10);
g(r,B);
B.relativePositioning(t,{position:x,fallbackPosition:A,anchor:z,offset:y}).show();
f(r,u,C,B)
}function n(r,u,t){switch(u){case"pubsub":a.pubsub.subscribe(t,l.bind(r));
break;
default:e(t).on(u,l.bind(r));
break
}}function j(r){r.detach().appendTo("body")
}function q(){var r,w,u,t;
e(c.selectors.TOOLTIP_CLASS).each(function(){r=e(this);
w=r.children(":first");
u=w.data("event");
t=w.data("eventselector");
j(r);
n(r,u,t)
})
}function h(w){var r=e(".tooltip-popup:visible"),u,t;
r.each(function(){t=e(this);
u=t.children(":first").data("itemselector");
if(e(u).is(":visible")){l.call(t,w)
}else{m.call(t)
}})
}function p(){var r;
if(e(c.selectors.TOOLTIP_CLASS).size()>0){e(window).on("resize orientationchange",function(t){clearTimeout(r);
r=setTimeout(h.call(this,t),200)
})
}}function o(){q();
p()
}function k(){return PS.util.DeviceUtil.type()==="iphone"||PS.util.DeviceUtil.type()==="ipad"
}return{init:o}
}a.ToolipPopup=new b()
}(window.PS.util,window.jQuery));
window.PS=window.PS||{};
window.PS.util=window.PS.util||{};
(function(c,b){function a(){this.$comparers=null
}a.prototype={progressUpdate:function(k,m,f,j){var g=b('[data-epic="'+k+'"]'),e=g.data("fields")||{},l=g.data("removedecimals"),h;
e[m]=parseFloat(j);
if(e.BID&&e.OFR){h=Math.round(((e.BID+e.OFR)/2)*100)/100;
if(l){h=Math.round(h)
}else{h=h.toFixed(2)
}g.prev().text(h+"%");
g.attr("value",h).find("span").css("width",h+"%")
}g.data("fields",e)
},processComparers:function(f,g){var e=b(g),h=e.find("progress:first"),j=e.find("progress:last");
c.util.LightstreamerLivePrices.subscribe(h.data("epic"),this.progressUpdate);
c.util.LightstreamerLivePrices.subscribe(j.data("epic"),this.progressUpdate)
},init:function(){this.$comparers=b(".market-compare");
if(this.$comparers.size()>0&&!!c.util.LightstreamerLivePrices){this.$comparers.each(this.processComparers.bind(this))
}}};
c.util.MarketCompare=new a()
}(window.PS,window.jQuery));
window.PS=window.PS||{};
window.PS.util=window.PS.util||{};
(function(a){a.EngHouseCalendarAvailability={isDST:function(c){var b=new Date(c.getFullYear(),0,1),e=new Date(c.getFullYear(),6,1);
return Math.min(b.getTimezoneOffset(),e.getTimezoneOffset())===c.getTimezoneOffset()
},getLondonBasedDate:function(){var b=new Date(),c=b.getTime()+(b.getTimezoneOffset()*60000);
return new Date(c)
},isLiveChatAvailable:function(){var b=this.getLondonBasedDate();
if(this.isDST(b)){b.setHours(b.getHours()+1)
}switch(b.getDay()){case 6:return false;
case 0:return b.getHours()>=21;
case 5:return b.getHours()<21;
default:return true
}}}
}(window.PS.util));
window.PS=window.PS||{};
window.PS.util=window.PS.util||{};
window.PS.storage=window.PS.storage||{};
window.PS.storage.LocalQueue=window.PS.storage.LocalQueue||{};
(function(k,x,z){var B={actions:{DISABLE:"disable",ENABLE:"enable"},data:{AVAILABILITY_POLLING_TIME:30000,CLASS_BACKUP:"classBackup",LEAD_CAPTURE:"leadCaptureFormData",LIVECHAT_REJECTED_KEY:"enghouseLiveChatRejected",PROMPT_TIME_DELAY:10000,REJECTED:"rejected",STEP_ONE:"stepOneFormData"},DOMSelectors:{BODY:"body",CALLREQUESTCTA:"#enghousecallrequest",CALLREQUESTFORM:"#callrequestform",CLIENTID:"input[name=ClientID]",EMAIL:"input.email",ENGHOUSE_FORM:".enghouse-livechat-popup",FORMLEADCAPTURE:".leadCaptureForm",FORMSTEP1:".validateForm",HIDDEN:"hidden",IN_EDIT_MODE:".inEditMode",LIVECHATCTA:"#enghouselivechat",LIVECHATFORM:"#livechatform",LIVECHAT_AJAX_SUBMISSION:"#livechatAjaxSubmission",LIVECHAT_AJAX_SUBMISSION_ERROR:".livechat-ajaxsubmission-error",LIVECHAT_AJAX_SUBMISSION_SUCCESS:".livechat-ajaxsubmission-success",LIVECHAT_REDIRECT:"#livechatRedirect",NEXT_TRANSL:"#nextTKey",SELECT:".select",STEP1:".livechat-step-1",STEP2:"#livechatStep2",STICKY_FOOTER:".sticky-footer",SUBMIT:".submit",SUBMIT_TRANSL:"#submitTKey",VISIBLE:":visible"},eventSelectors:{CHANGE:"change",CLICK_KEYDOWN:"click keydown",SUBMIT:"submit"},jspVars:{CURRENTPAGEDISABLED:"enghouselivechat.currentPageLiveChatDisable",FORCECALENDAR:"enghouselivechat.forceCalendar",PROMPTSTYLE:"enghouselivechat.currentPageLiveChatPromptStyle",SERVICEACTIVE:"enghouselivechat.activateLiveChat",SERVICEURL:"enghouselivechat.popupPageUri",TREEDISABLED:"enghouselivechat.disabledInTree",TREEOVERRIDE:"enghouselivechat.ignoreTreeDisable"},i18n:{PROMPTCLOSE:"clientlibs.livechat.prompt.close",PROMPTCLOSEDEFAULT:"X",PROMPTTEXT:"clientlibs.livechat.prompt",PROMPTTEXTDEFAULT:"Live Chat"},keyValues:{CLIENT:"NonAuthenticatedClient",PROSPECT:"Prospect",INVESTMENTS:"Investments"},otherSelectors:{CLASS:"class",DEFAULT_BUTTON_CLASS:"button-green",DISABLED:"disabled",DISABLED_BUTTON_CLASS:"button-disabled",ERROR:"error",REQUIRED:"required",SHOW_ABOVE_STICKY_FOOTER_CLASS:"easeAboveStickyFooter",SHOW_PROMPT_CLASS:"easeToBottom",VALIDATIONS:"validations",WINDOW_NAME_QUERYSTRING:"w",EXTRA_MODIFIERS_QUERYSTRING:"em"},popupNames:{CALLREQUEST:"callRequestPopup",LIVECHAT:"liveChatPopup",NO_POPUP:"noPopup"}},c,A=null,o="",m=null,h=z.isLocalStorageSupported(),y,g,t="left=50,top=50,height=710,width=420,resizable,scrollbars",p,b,l,q,a,w,n,e="",f,r,u;
function j(){function Y(){return !!k.util.Browser&&!!k.util.Browser.isMobileOrTablet?k.util.Browser.isMobileOrTablet():false
}function J(){var aq=false;
if(g!==undefined&&g.length>3){aq=true
}else{window.dlog("EngHouseLiveChat: Error: LiveChat URL is not configured in the homepage properties.")
}return aq
}function R(){return document.location.href.indexOf(g)>-1
}function ag(){return window.name===""||window.name===B.popupNames.NO_POPUP
}function an(aq){k.util.FormValidation.prototype.addValidationRule(aq,B.otherSelectors.REQUIRED)
}function ae(aq){k.util.FormValidation.prototype.removeValidationRule(aq,B.otherSelectors.REQUIRED);
k.util.FormValidation.prototype.removeValidation(aq,B.otherSelectors.REQUIRED)
}function am(aq){aq.addClass(B.DOMSelectors.HIDDEN)
}function ak(aq){aq.removeClass(B.DOMSelectors.HIDDEN)
}function I(ar){var aq=c.find(B.DOMSelectors.SUBMIT);
if(ar.val()!==B.keyValues.PROSPECT){aq.text(x(B.DOMSelectors.SUBMIT_TRANSL).val())
}else{aq.text(x(B.DOMSelectors.NEXT_TRANSL).val())
}}function T(au,ar,aq){var at=au.find(ar).serializeArray();
if(h){z.localStorageStore(aq,JSON.stringify(at),false)
}}function Z(aq){am(c);
c=x(aq);
ak(c)
}function O(ar){if(w){x(w).find(B.DOMSelectors.CLIENTID).val(ar);
var aq=window.PS.util.Page.getQuerystring(B.otherSelectors.EXTRA_MODIFIERS_QUERYSTRING)===B.keyValues.INVESTMENTS?B.keyValues.INVESTMENTS:B.keyValues.PROSPECT;
x(w).find("[name='Service']:checked").val(aq);
if(window.name===B.popupNames.NO_POPUP){G(x(w))
}else{w.submit()
}w=undefined
}T(c,B.DOMSelectors.FORMLEADCAPTURE,B.data.LEAD_CAPTURE);
if(window.name===B.popupNames.LIVECHAT){Z(B.DOMSelectors.LIVECHAT_REDIRECT)
}}function C(aq){aq.preventDefault();
w=aq.target;
T(c,B.DOMSelectors.FORMSTEP1,B.data.STEP_ONE);
Z(B.DOMSelectors.STEP2);
k.util.LeadCapture.prototype.attachLeadCaptureCallback(O)
}function W(aq){aq.preventDefault();
T(c,B.DOMSelectors.FORMSTEP1,B.data.STEP_ONE);
if(k.util.FormValidation.prototype.triggerValidation(c)){var ar=x(aq.target);
if(window.PS.util.Page.getQuerystring(B.otherSelectors.EXTRA_MODIFIERS_QUERYSTRING)===B.keyValues.INVESTMENTS){x(ar).find("[name='Service']:checked").val(B.keyValues.INVESTMENTS)
}if(window.name===B.popupNames.NO_POPUP){G(ar)
}else{aq.target.submit();
if(window.name===B.popupNames.LIVECHAT){Z(B.DOMSelectors.LIVECHAT_REDIRECT)
}}}}function G(aq){x.ajax({url:aq.attr("action"),data:aq.serializeArray(),success:function(){am(x(B.DOMSelectors.LIVECHAT_AJAX_SUBMISSION_ERROR))
},error:function(){am(x(B.DOMSelectors.LIVECHAT_AJAX_SUBMISSION_SUCCESS))
},complete:function(){Z(B.DOMSelectors.LIVECHAT_AJAX_SUBMISSION)
}})
}function K(aq){c.off(B.eventSelectors.SUBMIT);
if(aq.val()===B.keyValues.PROSPECT){c.on(B.eventSelectors.SUBMIT,C)
}else{c.on(B.eventSelectors.SUBMIT,W)
}}function ad(au){var ar=c.find(B.DOMSelectors.EMAIL),at=ar.parent(),aq=x(au.target);
if(aq.val()===B.keyValues.CLIENT){an(ar);
ak(at)
}else{ae(ar);
am(at)
}I(aq);
K(aq);
aq.blur()
}function al(aq){if(aq.closed){window.clearInterval(y);
this.closePrompt()
}}function S(ar){var aq=g+"?"+B.otherSelectors.WINDOW_NAME_QUERYSTRING+"="+ar,at;
if(this.isInvestmentsSite){aq+="&"+B.otherSelectors.EXTRA_MODIFIERS_QUERYSTRING+"="+B.keyValues.INVESTMENTS
}switch(ar){case B.popupNames.LIVECHAT:if(m&&!m.closed){m.focus()
}else{m=window.open(aq,ar,t);
at=this;
m.onload=function(){m.onunload=function(){at.hidePrompt();
if(y){window.clearInterval(y)
}}
};
if(!y){y=window.setInterval(function(){al.call(at,m)
},3000)
}}break;
case B.popupNames.CALLREQUEST:if(A&&!A.closed){A.focus()
}else{A=window.open(aq,ar,t)
}break;
default:window.dlog("EngHouseLiveChat: Error: Tried to open a popup with the name:'"+ar+"'");
return
}}function ah(){var aq=false;
if(h){aq=!!z.localStorageRetrieveLast(B.data.LIVECHAT_REJECTED_KEY)
}return aq
}function H(){if(h){z.localStorageStore(B.data.LIVECHAT_REJECTED_KEY,B.data.REJECTED,false)
}}function D(){if(h){z.localStorageRemove(B.data.LIVECHAT_REJECTED_KEY)
}}function M(ar){var aq,au,aw,av;
x('a[href="'+B.DOMSelectors.LIVECHATCTA+'"],a[href="'+B.DOMSelectors.CALLREQUESTCTA+'"]').each(function at(ax,ay){av=x(ay);
aq=/button-[\w]+/.exec(av.attr(B.otherSelectors.CLASS))[0];
au=av.data(B.data.CLASS_BACKUP);
if(!ar){aw=!!au?au:B.otherSelectors.DEFAULT_BUTTON_CLASS
}else{aw=ar
}if(!au||au!==aw){av.data(B.data.CLASS_BACKUP,aq)
}av.removeClass(aq).addClass(aw)
})
}return{init:function ao(){g=k.util.jspVars.get(B.jspVars.SERVICEURL);
n=k.util.jspVars.get(B.jspVars.SERVICEACTIVE);
f=k.util.jspVars.get(B.jspVars.TREEDISABLED);
r=k.util.jspVars.get(B.jspVars.TREEOVERRIDE);
if(n==="true"&&J()&&(!f||(f&&r))){this.triggerAvailabilityInterval=true;
this.checkLivechatAvailability(this.initialAvailabilityConfiguration)
}else{this.disableCTAButtons()
}},initialAvailabilityConfiguration:function(){if(this.isEnghouseAvailable){this.investmentsCheck();
if(x(B.DOMSelectors.ENGHOUSE_FORM).size()>0){this.investmentsTransformations().hideEmails().showStepOne().enablePopUpBindings().doTypeTransformations().retrieveFormsData().populateFormsData()
}if(!R()){if(!Y()){this.webpageBindings(B.actions.ENABLE).preparePrompt()
}else{this.disableCTAButtons()
}}}else{this.disableCTAButtons()
}if(!Y()&&this.triggerAvailabilityInterval){u=window.setInterval(this.checkLivechatAvailability.bind(this,this.triggerPageChangeAfterAvailabilityUpdate),B.data.AVAILABILITY_POLLING_TIME)
}return this
},investmentsCheck:function(){this.isInvestmentsSite=x(".nt-strip__site-switcher .switch-investments").hasClass("nt-strip--active")||window.PS.util.Page.getQuerystring(B.otherSelectors.EXTRA_MODIFIERS_QUERYSTRING)!==""
},investmentsTransformations:function(){if(this.isInvestmentsSite){x(".validateForm .fields").each(function(){x(this).find(".formField:first").hide()
})
}return this
},hideEmails:function P(){var aq=x(B.DOMSelectors.STEP1).find(B.DOMSelectors.EMAIL).parent();
am(aq);
return this
},openCallRequestPopup:function Q(){S.call(this,B.popupNames.CALLREQUEST)
},openLiveChatPopup:function ab(){D();
S.call(this,B.popupNames.LIVECHAT)
},showStepOne:function ai(){if(window.name===""){window.name=k.util.Page.getQuerystring(B.otherSelectors.WINDOW_NAME_QUERYSTRING)||B.popupNames.NO_POPUP
}switch(window.name){case B.popupNames.CALLREQUEST:case B.popupNames.NO_POPUP:c=x(B.DOMSelectors.CALLREQUESTFORM);
ak(c);
break;
case B.popupNames.LIVECHAT:c=x(B.DOMSelectors.LIVECHATFORM);
ak(c);
break
}return this
},webpageBindings:function ac(ar){var aq=x('a[href="'+B.DOMSelectors.LIVECHATCTA+'"]'),at=x('a[href="'+B.DOMSelectors.CALLREQUESTCTA+'"]');
switch(ar){case B.actions.ENABLE:aq.on(B.eventSelectors.CLICK_KEYDOWN,this.openLiveChatPopup.bind(this));
at.on(B.eventSelectors.CLICK_KEYDOWN,this.openCallRequestPopup.bind(this));
break;
case B.actions.DISABLE:aq.off(B.eventSelectors.CLICK_KEYDOWN);
at.off(B.eventSelectors.CLICK_KEYDOWN);
break
}return this
},enablePopUpBindings:function N(){var aq=x(B.DOMSelectors.STEP1+" "+B.DOMSelectors.SELECT);
aq.on(B.eventSelectors.CHANGE,ad.bind(this));
x(document).off(B.eventSelectors.SUBMIT);
x(document).unbind(B.eventSelectors.SUBMIT);
K(c.find(B.DOMSelectors.SELECT));
return this
},doTypeTransformations:function(){var aq=k.util.Page.getQuerystring("type");
switch(aq){case B.keyValues.PROSPECT:x(B.DOMSelectors.STEP1).find("select.FormType").val(B.keyValues.PROSPECT).change().parent().hide();
break
}return this
},retrieveFormsData:function ap(){if(h){e=z.localStorageRetrieveLast(B.data.STEP_ONE);
o=z.localStorageRetrieveLast(B.data.LEAD_CAPTURE)
}return this
},populateFormsData:function aj(){var ar=[],au=[],aq=[],av,at;
if(e){ar=JSON.parse(e)
}if(o){au=JSON.parse(o)
}aq=aq.concat(ar,au);
for(at in aq){if(aq.hasOwnProperty(at)){av=x("[name='"+aq[at].name+"'][type!=hidden]");
if(av.length>0){av.val([aq[at].value]);
if(av.is("select")){av.change()
}}}}return this
},preparePrompt:function E(){a=window.i18n[B.i18n.PROMPTTEXT]||B.i18n.PROMPTTEXTDEFAULT;
q=window.i18n[B.i18n.PROMPTCLOSE]||B.i18n.PROMPTCLOSEDEFAULT;
l=k.util.jspVars.get(B.jspVars.PROMPTSTYLE);
b=x('<div class="close">'+q+"</div>");
p=x('<div id="livechatPromptOnline" class="livechat-button livechat-prompt drop-shadow '+l+'">'+a+"</div>");
if(!ah()){x(B.DOMSelectors.BODY).append(p);
p.append(b);
b.on(B.eventSelectors.CLICK_KEYDOWN,this.closePrompt.bind(this));
p.on(B.eventSelectors.CLICK_KEYDOWN,this.openLiveChat.bind(this));
this.showPrompt(B.data.PROMPT_TIME_DELAY)
}return this
},closePrompt:function X(aq){if(aq&&aq.stopImmediatePropagation){aq.stopImmediatePropagation()
}this.hidePrompt();
H()
},hidePrompt:function af(){if(p){p.removeClass(B.otherSelectors.SHOW_PROMPT_CLASS).removeClass(B.otherSelectors.SHOW_ABOVE_STICKY_FOOTER_CLASS)
}return this
},openLiveChat:function aa(){this.hidePrompt().openLiveChatPopup();
if(!!k.SiteCatalyst.tracker.wa_linkTrack){k.SiteCatalyst.tracker.wa_linkTrack("live_chat_click")
}},showPrompt:function V(aq){if(!ah()&&!k.util.jspVars.get(B.jspVars.CURRENTPAGEDISABLED)){aq=aq||0;
setTimeout(function(){var ar;
if(x(B.DOMSelectors.STICKY_FOOTER).is(B.DOMSelectors.VISIBLE)){ar=B.otherSelectors.SHOW_ABOVE_STICKY_FOOTER_CLASS
}else{ar=B.otherSelectors.SHOW_PROMPT_CLASS
}if(!p.hasClass(ar)){if(!!k.SiteCatalyst.tracker.wa_linkTrack){k.SiteCatalyst.tracker.wa_linkTrack("live_chat_view")
}p.addClass(ar)
}},aq)
}},disableCTAButtons:function F(){M(B.otherSelectors.DISABLED_BUTTON_CLASS);
this.webpageBindings(B.actions.DISABLE);
return this
},enableCTAButtons:function L(){M();
this.webpageBindings(B.actions.ENABLE);
return this
},checkLivechatAvailability:function U(au){var av=k.util.jspVars.get(B.jspVars.FORCECALENDAR);
if(av){this.isEnghouseAvailable=k.util.EngHouseCalendarAvailability.isLiveChatAvailable();
au.call(this)
}else{var ar=x("#locale").attr("content");
var aw=k.util.jspVars.get("siteID");
if(aw==="igcomuk"){aw="igm"
}var aq=window.PS.util.Page.environment();
if(aq==="local"){aq="net"
}var at="https://"+aq+".ig.com/webchatavailability/availability/queuegroup?siteid="+aw+"&locale="+ar;
x.ajax({type:"GET",url:at,success:this.updateEnghouseStatus.bind(this,au),error:this.failedEnghouseStatus.bind(this,au)})
}},updateEnghouseStatus:function(aq,ar){this.isEnghouseAvailable=ar&&!!ar.Available;
aq.call(this);
return this
},failedEnghouseStatus:function(aq,ar){this.isEnghouseAvailable=false;
window.clearInterval(u);
this.triggerAvailabilityInterval=false;
aq.call(this);
return this
},triggerPageChangeAfterAvailabilityUpdate:function(){if(!R()){var aq=x('a[href="'+B.DOMSelectors.LIVECHATCTA+'"]').is("."+B.otherSelectors.DISABLED_BUTTON_CLASS);
if(this.isEnghouseAvailable&&aq){this.enableCTAButtons();
if(!p){this.preparePrompt()
}else{this.showPrompt()
}}else{if(!this.isEnghouseAvailable&&!aq){this.disableCTAButtons().hidePrompt()
}}}},checkMultipleConfigurationInstances:function(){if(k.core.CQMode.inEdit&&x(".enghouse-livechat-configuration").size()>1){window.alert("There are multiple livechat configurations on this page. There should just be a maximum of 1. Please remove all the extra ones.")
}}}
}k.util.EngHouseLiveChat=new j()
}(window.PS,window.jQuery,window.PS.storage.LocalQueue));
window.PS=window.PS||{};
PS.util=PS.util||{};
(function(b){function a(){this.init()
}a.prototype.init=function(){var c=this.getAnimatedHeroList();
if(c.length>0){c.one("playing",this.showVideo).each(function(){this.play()
})
}};
a.prototype.getAnimatedHeroList=function(){var c=".animated-hero__video";
return jq(c)
};
a.prototype.showVideo=function(c){jq(c.target).removeClass("no-autoplay")
};
b.util.animatedHero=new a()
}(PS));
window.PS=window.PS||{};
PS.util=PS.util||{};
PS.util.DeviceUtil=PS.util.DeviceUtil||{};
(function(b){function a(){}a.prototype.Split=function(){var g=b.SiteCatalyst.tracker.visitor.getAnalyticsVisitorID();
var f;
var e;
var c=b.util.DeviceUtil.tabletOrMobile();
if(g===""&&b.util.Page.environment()==="local"){g=b.util.Cookie.get("s_fid")
}if(g!==""&&g!==null){f=g.split("-")[1];
f=this.hexToDec(f);
if(!c&&b.util.jspVars.get("createAccountTest").urlC===""||(c&&b.util.jspVars.get("createAccountTest").mobileurlC==="")){f=parseInt(f.toString().slice(-1),10);
return f%2?"A":"B"
}else{f=parseInt(f.toString().slice(-4),10);
if(f<3334){e="A"
}else{if(f<6667){e="B"
}else{e="C"
}}return e
}}else{window.setTimeout(function(){b.util.Segment.accountLinkReplace()
},500)
}return null
};
a.prototype.accountLinkReplace=function(){var k;
var l;
var e;
var p;
var o;
var c;
var f;
var n="";
var m;
var g="?";
var j=b.util.DeviceUtil.tabletOrMobile();
var h=b.util.Cookie.get("countrycode");
if(!!b.util.jspVars.get("createAccountTest")){if(jq("body.iframe-page")&&!!b.util.Page.getQuerystring("showTerms")){o=jq("#appForm");
c=o.attr("src");
if(c.indexOf("?")===-1){c=c+"?showTerms=True"
}else{c=c+"&showTerms=True"
}o.attr("src",c)
}k=b.util.Segment.Split();
l=!!b.util.jspVars.get("createAccountTest").accountUrl?jq('a[href*="'+b.util.jspVars.get("createAccountTest").accountUrl+'"]'):jq('a[href*="'+jq("a.create-account-top").attr("href")+'"]');
f=j&&!!b.util.jspVars.get("createAccountTest").excludeMobile;
if(l.length&&k&&!f){if(j){n="mobile"
}e=b.util.jspVars.get("createAccountTest")[n+"url"+k];
m=window.location.pathname!==b.util.jspVars.get("createAccountTest")[n+"urlA"].split("?")[0]&&window.location.pathname!==b.util.jspVars.get("createAccountTest")["urlB"].split("?")[0]&&window.location.pathname!==b.util.jspVars.get("createAccountTest")["urlC"].split("?")[0];
if(j&&e===""){e=b.util.jspVars.get("createAccountTest")["url"+k]
}if(m){l.each(function(){p=jq(this).attr("href");
if(p.indexOf("?")>0){if(e.indexOf("?")>0){g="&"
}e=e+g+p.split("?")[1]
}jq(this).attr("href",e)
});
if(!!h){b.util.CountrySpecific.setAppFormCountry(h)
}}}}};
a.prototype.add=function(l,k,c){var h=[];
var e=Math.max(l.length,k.length);
var m=0;
var g=0;
while(g<e||m){var j=g<l.length?l[g]:0;
var f=g<k.length?k[g]:0;
var o=m+j+f;
h.push(o%c);
m=Math.floor(o/c);
g++
}return h
};
a.prototype.multiplyByNumber=function(f,e,h){if(f<0){return null
}if(f==0){return[]
}var c=[];
var g=e;
while(true){if(f&1){c=this.add(c,g,h)
}f=f>>1;
if(f===0){break
}g=this.add(g,g,h)
}return c
};
a.prototype.parseToDigitsArray=function(h,g){var f=h.split("");
var e=[];
for(var c=f.length-1;
c>=0;
c--){var j=parseInt(f[c],g);
if(isNaN(j)){return null
}e.push(j)
}return e
};
a.prototype.convertBase=function(l,k,h){var j=this.parseToDigitsArray(l,k);
if(j===null){return null
}var g=[];
var f=[1];
for(var e=0;
e<j.length;
e++){if(j[e]){g=this.add(g,this.multiplyByNumber(j[e],f,h),h)
}f=this.multiplyByNumber(k,f,h)
}var c="";
for(var e=g.length-1;
e>=0;
e--){c+=g[e].toString(h)
}return c
};
a.prototype.hexToDec=function(c){if(c.substring(0,2)==="0x"){c=c.substring(2)
}c=c.toLowerCase();
return this.convertBase(c,16,10)
};
b.util.Segment=new a()
}(PS));
/*!
 * Masonry PACKAGED v3.2.2
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
;
!function(f){function e(){}function h(b){function l(a){a.prototype.option||(a.prototype.option=function(c){b.isPlainObject(c)&&(this.options=b.extend(!0,this.options,c))
})
}function k(a,m){b.fn[a]=function(t){if("string"==typeof t){for(var r=g.call(arguments,1),q=0,p=this.length;
p>q;
q++){var o=this[q],n=b.data(o,a);
if(n){if(b.isFunction(n[t])&&"_"!==t.charAt(0)){var c=n[t].apply(n,r);
if(void 0!==c){return c
}}else{j("no such method '"+t+"' for "+a+" instance")
}}else{j("cannot call methods on "+a+" prior to initialization; attempted to call '"+t+"'")
}}return this
}return this.each(function(){var u=b.data(this,a);
u?(u.option(t),u._init()):(u=new m(this,t),b.data(this,a,u))
})
}
}if(b){var j="undefined"==typeof console?e:function(c){console.error(c)
};
return b.bridget=function(m,c){l(c),k(m,c)
},b.bridget
}}var g=Array.prototype.slice;
"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],h):h("object"==typeof exports?require("jquery"):f.jQuery)
}(window),function(h){function g(a){var e=h.event;
return e.target=e.target||e.srcElement||a,e
}var m=document.documentElement,l=function(){};
m.addEventListener?l=function(f,e,n){f.addEventListener(e,n,!1)
}:m.attachEvent&&(l=function(b,f,e){b[f+e]=e.handleEvent?function(){var a=g(b);
e.handleEvent.call(e,a)
}:function(){var a=g(b);
e.call(b,a)
},b.attachEvent("on"+f,b[f+e])
});
var k=function(){};
m.removeEventListener?k=function(f,e,n){f.removeEventListener(e,n,!1)
}:m.detachEvent&&(k=function(f,e,o){f.detachEvent("on"+e,f[e+o]);
try{delete f[e+o]
}catch(n){f[e+o]=void 0
}});
var j={bind:l,unbind:k};
"function"==typeof define&&define.amd?define("eventie/eventie",j):"object"==typeof exports?module.exports=j:h.eventie=j
}(this),function(j){function h(b){"function"==typeof b&&(h.isReady?b():k.push(b))
}function o(b){var e="readystatechange"===b.type&&"complete"!==l.readyState;
h.isReady||e||n()
}function n(){h.isReady=!0;
for(var b=0,f=k.length;
f>b;
b++){var e=k[b];
e()
}}function m(a){return"complete"===l.readyState?n():(a.bind(l,"DOMContentLoaded",o),a.bind(l,"readystatechange",o),a.bind(j,"load",o)),h
}var l=j.document,k=[];
h.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],m):"object"==typeof exports?module.exports=m(require("eventie")):j.docReady=m(j.eventie)
}(window),function(){function h(){}function g(f,e){for(var n=f.length;
n--;
){if(f[n].listener===e){return n
}}return -1
}function m(b){return function(){return this[b].apply(this,arguments)
}
}var l=h.prototype,k=this,j=k.EventEmitter;
l.getListeners=function(f){var e,o,n=this._getEvents();
if(f instanceof RegExp){e={};
for(o in n){n.hasOwnProperty(o)&&f.test(o)&&(e[o]=n[o])
}}else{e=n[f]||(n[f]=[])
}return e
},l.flattenListeners=function(f){var e,n=[];
for(e=0;
e<f.length;
e+=1){n.push(f[e].listener)
}return n
},l.getListenersAsObject=function(f){var e,n=this.getListeners(f);
return n instanceof Array&&(e={},e[f]=n),e||n
},l.addListener=function(b,q){var p,o=this.getListenersAsObject(b),n="object"==typeof q;
for(p in o){o.hasOwnProperty(p)&&-1===g(o[p],q)&&o[p].push(n?q:{listener:q,once:!1})
}return this
},l.on=m("addListener"),l.addOnceListener=function(e,c){return this.addListener(e,{listener:c,once:!0})
},l.once=m("addOnceListener"),l.defineEvent=function(b){return this.getListeners(b),this
},l.defineEvents=function(e){for(var c=0;
c<e.length;
c+=1){this.defineEvent(e[c])
}return this
},l.removeListener=function(b,q){var p,o,n=this.getListenersAsObject(b);
for(o in n){n.hasOwnProperty(o)&&(p=g(n[o],q),-1!==p&&n[o].splice(p,1))
}return this
},l.off=m("removeListener"),l.addListeners=function(e,c){return this.manipulateListeners(!1,e,c)
},l.removeListeners=function(e,c){return this.manipulateListeners(!0,e,c)
},l.manipulateListeners=function(o,n,u){var t,r,q=o?this.removeListener:this.addListener,p=o?this.removeListeners:this.addListeners;
if("object"!=typeof n||n instanceof RegExp){for(t=u.length;
t--;
){q.call(this,n,u[t])
}}else{for(t in n){n.hasOwnProperty(t)&&(r=n[t])&&("function"==typeof r?q.call(this,t,r):p.call(this,t,r))
}}return this
},l.removeEvent=function(f){var e,o=typeof f,n=this._getEvents();
if("string"===o){delete n[f]
}else{if(f instanceof RegExp){for(e in n){n.hasOwnProperty(e)&&f.test(e)&&delete n[e]
}}else{delete this._events
}}return this
},l.removeAllListeners=m("removeEvent"),l.emitEvent=function(o,n){var u,t,r,q,p=this.getListenersAsObject(o);
for(r in p){if(p.hasOwnProperty(r)){for(t=p[r].length;
t--;
){u=p[r][t],u.once===!0&&this.removeListener(o,u.listener),q=u.listener.apply(this,n||[]),q===this._getOnceReturnValue()&&this.removeListener(o,u.listener)
}}}return this
},l.trigger=m("emitEvent"),l.emit=function(e){var c=Array.prototype.slice.call(arguments,1);
return this.emitEvent(e,c)
},l.setOnceReturnValue=function(b){return this._onceReturnValue=b,this
},l._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0
},l._getEvents=function(){return this._events||(this._events={})
},h.noConflict=function(){return k.EventEmitter=j,h
},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return h
}):"object"==typeof module&&module.exports?module.exports=h:k.EventEmitter=h
}.call(this),function(f){function e(j){if(j){if("string"==typeof g[j]){return j
}j=j.charAt(0).toUpperCase()+j.slice(1);
for(var c,l=0,k=h.length;
k>l;
l++){if(c=h[l]+j,"string"==typeof g[c]){return c
}}}}var h="Webkit Moz ms Ms O".split(" "),g=document.documentElement.style;
"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return e
}):"object"==typeof exports?module.exports=e:f.getStyleProperty=e
}(window),function(j){function h(f){var e=parseFloat(f),g=-1===f.indexOf("%")&&!isNaN(e);
return g&&e
}function o(){}function n(){for(var f={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,p=k.length;
p>e;
e++){var g=k[e];
f[g]=0
}return f
}function m(t){function r(){if(!a){a=!0;
var x=j.getComputedStyle;
if(g=function(){var e=x?function(y){return x(y,null)
}:function(y){return y.currentStyle
};
return function(y){var z=e(y);
return z||l("Style returned "+z+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),z
}
}(),f=t("boxSizing")){var w=document.createElement("div");
w.style.width="200px",w.style.padding="1px 2px 3px 4px",w.style.borderStyle="solid",w.style.borderWidth="1px 2px 3px 4px",w.style[f]="border-box";
var u=document.body||document.documentElement;
u.appendChild(w);
var c=g(w);
b=200===h(c.width),u.removeChild(w)
}}}function q(Q){if(r(),"string"==typeof Q&&(Q=document.querySelector(Q)),Q&&"object"==typeof Q&&Q.nodeType){var P=g(Q);
if("none"===P.display){return n()
}var O={};
O.width=Q.offsetWidth,O.height=Q.offsetHeight;
for(var N=O.isBorderBox=!(!f||!P[f]||"border-box"!==P[f]),M=0,L=k.length;
L>M;
M++){var K=k[M],J=P[K];
J=p(Q,J);
var I=parseFloat(J);
O[K]=isNaN(I)?0:I
}var H=O.paddingLeft+O.paddingRight,G=O.paddingTop+O.paddingBottom,F=O.marginLeft+O.marginRight,E=O.marginTop+O.marginBottom,D=O.borderLeftWidth+O.borderRightWidth,C=O.borderTopWidth+O.borderBottomWidth,B=N&&b,A=h(P.width);
A!==!1&&(O.width=A+(B?0:H+D));
var e=h(P.height);
return e!==!1&&(O.height=e+(B?0:G+C)),O.innerWidth=O.width-(H+D),O.innerHeight=O.height-(G+C),O.outerWidth=O.width+F,O.outerHeight=O.height+E,O
}}function p(u,A){if(j.getComputedStyle||-1===A.indexOf("%")){return A
}var z=u.style,y=z.left,x=u.runtimeStyle,w=x&&x.left;
return w&&(x.left=u.currentStyle.left),z.left=A,A=z.pixelLeft,z.left=y,w&&(x.left=w),A
}var g,f,b,a=!1;
return q
}var l="undefined"==typeof console?o:function(b){console.error(b)
},k=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];
"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],m):"object"==typeof exports?module.exports=m(require("desandro-get-style-property")):j.getSize=m(j.getStyleProperty)
}(window),function(r){function q(e,c){return e[l](c)
}function p(e){if(!e.parentNode){var c=document.createDocumentFragment();
c.appendChild(e)
}}function o(g,c){p(g);
for(var u=g.parentNode.querySelectorAll(c),t=0,h=u.length;
h>t;
t++){if(u[t]===g){return !0
}}return !1
}function n(b,c){return p(b),q(b,c)
}var m,l=function(){if(r.matchesSelector){return"matchesSelector"
}for(var a=["webkit","moz","ms","o"],u=0,t=a.length;
t>u;
u++){var h=a[u],g=h+"MatchesSelector";
if(r[g]){return g
}}}();
if(l){var k=document.createElement("div"),j=q(k,"div");
m=j?q:n
}else{m=o
}"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return m
}):"object"==typeof exports?module.exports=m:window.matchesSelector=m
}(Element.prototype),function(j){function h(f,e){for(var g in e){f[g]=e[g]
}return f
}function o(e){for(var c in e){return !1
}return c=null,!0
}function n(b){return b.replace(/([A-Z])/g,function(c){return"-"+c.toLowerCase()
})
}function m(E,D,C){function B(f,e){f&&(this.element=f,this.layout=e,this.position={x:0,y:0},this._create())
}var A=C("transition"),z=C("transform"),y=A&&z,x=!!C("perspective"),w={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[A],u=["transform","transition","transitionDuration","transitionProperty"],t=function(){for(var p={},f=0,G=u.length;
G>f;
f++){var r=u[f],q=C(r);
q&&q!==r&&(p[r]=q)
}return p
}();
h(B.prototype,E.prototype),B.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})
},B.prototype.handleEvent=function(f){var e="on"+f.type;
this[e]&&this[e](f)
},B.prototype.getSize=function(){this.size=D(this.element)
},B.prototype.css=function(f){var e=this.element.style;
for(var q in f){var p=t[q]||q;
e[p]=f[q]
}},B.prototype.getPosition=function(){var q=k(this.element),p=this.layout.options,J=p.isOriginLeft,I=p.isOriginTop,H=parseInt(q[J?"left":"right"],10),G=parseInt(q[I?"top":"bottom"],10);
H=isNaN(H)?0:H,G=isNaN(G)?0:G;
var r=this.layout.size;
H-=J?r.paddingLeft:r.paddingRight,G-=I?r.paddingTop:r.paddingBottom,this.position.x=H,this.position.y=G
},B.prototype.layoutPosition=function(){var f=this.layout.size,e=this.layout.options,p={};
e.isOriginLeft?(p.left=this.position.x+f.paddingLeft+"px",p.right=""):(p.right=this.position.x+f.paddingRight+"px",p.left=""),e.isOriginTop?(p.top=this.position.y+f.paddingTop+"px",p.bottom=""):(p.bottom=this.position.y+f.paddingBottom+"px",p.top=""),this.css(p),this.emitEvent("layout",[this])
};
var g=x?function(f,e){return"translate3d("+f+"px, "+e+"px, 0)"
}:function(f,e){return"translate("+f+"px, "+e+"px)"
};
B.prototype._transitionTo=function(N,M){this.getPosition();
var L=this.position.x,K=this.position.y,J=parseInt(N,10),I=parseInt(M,10),H=J===this.position.x&&I===this.position.y;
if(this.setPosition(N,M),H&&!this.isTransitioning){return void this.layoutPosition()
}var G=N-L,r=M-K,q={},p=this.layout.options;
G=p.isOriginLeft?G:-G,r=p.isOriginTop?r:-r,q.transform=g(G,r),this.transition({to:q,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})
},B.prototype.goTo=function(f,e){this.setPosition(f,e),this.layoutPosition()
},B.prototype.moveTo=y?B.prototype._transitionTo:B.prototype.goTo,B.prototype.setPosition=function(f,e){this.position.x=parseInt(f,10),this.position.y=parseInt(e,10)
},B.prototype._nonTransition=function(f){this.css(f.to),f.isCleaning&&this._removeStyles(f.to);
for(var e in f.onTransitionEnd){f.onTransitionEnd[e].call(this)
}},B.prototype._transition=function(f){if(!parseFloat(this.layout.options.transitionDuration)){return void this._nonTransition(f)
}var e=this._transn;
for(var q in f.onTransitionEnd){e.onEnd[q]=f.onTransitionEnd[q]
}for(q in f.to){e.ingProperties[q]=!0,f.isCleaning&&(e.clean[q]=!0)
}if(f.from){this.css(f.from);
var p=this.element.offsetHeight;
p=null
}this.enableTransition(f.to),this.css(f.to),this.isTransitioning=!0
};
var c=z&&n(z)+",opacity";
B.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:c,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(w,this,!1))
},B.prototype.transition=B.prototype[A?"_transition":"_nonTransition"],B.prototype.onwebkitTransitionEnd=function(e){this.ontransitionend(e)
},B.prototype.onotransitionend=function(e){this.ontransitionend(e)
};
var b={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};
B.prototype.ontransitionend=function(p){if(p.target===this.element){var f=this._transn,r=b[p.propertyName]||p.propertyName;
if(delete f.ingProperties[r],o(f.ingProperties)&&this.disableTransition(),r in f.clean&&(this.element.style[p.propertyName]="",delete f.clean[r]),r in f.onEnd){var q=f.onEnd[r];
q.call(this),delete f.onEnd[r]
}this.emitEvent("transitionEnd",[this])
}},B.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(w,this,!1),this.isTransitioning=!1
},B.prototype._removeStyles=function(f){var e={};
for(var p in f){e[p]=""
}this.css(e)
};
var F={transitionProperty:"",transitionDuration:""};
return B.prototype.removeTransitionStyles=function(){this.css(F)
},B.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])
},B.prototype.remove=function(){if(!A||!parseFloat(this.layout.options.transitionDuration)){return void this.removeElem()
}var e=this;
this.on("transitionEnd",function(){return e.removeElem(),!0
}),this.hide()
},B.prototype.reveal=function(){delete this.isHidden,this.css({display:""});
var e=this.layout.options;
this.transition({from:e.hiddenStyle,to:e.visibleStyle,isCleaning:!0})
},B.prototype.hide=function(){this.isHidden=!0,this.css({display:""});
var e=this.layout.options;
this.transition({from:e.visibleStyle,to:e.hiddenStyle,isCleaning:!0,onTransitionEnd:{opacity:function(){this.isHidden&&this.css({display:"none"})
}}})
},B.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})
},B
}var l=j.getComputedStyle,k=l?function(b){return l(b,null)
}:function(b){return b.currentStyle
};
"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],m):"object"==typeof exports?module.exports=m(require("wolfy87-eventemitter"),require("get-size"),require("desandro-get-style-property")):(j.Outlayer={},j.Outlayer.Item=m(j.EventEmitter,j.getSize,j.getStyleProperty))
}(window),function(D){function C(f,e){for(var g in e){f[g]=e[g]
}return f
}function B(b){return"[object Array]"===q.call(b)
}function A(f){var c=[];
if(B(f)){c=f
}else{if(f&&"number"==typeof f.length){for(var h=0,g=f.length;
g>h;
h++){c.push(f[h])
}}else{c.push(f)
}}return c
}function z(f,e){var g=o(e,f);
-1!==g&&e.splice(g,1)
}function y(b){return b.replace(/(.)([A-Z])/g,function(f,e,g){return e+"-"+g
}).toLowerCase()
}function x(m,k,j,h,f,e){function b(g,n){if("string"==typeof g&&(g=w.querySelector(g)),!g||!p(g)){return void (u&&u.error("Bad "+this.constructor.namespace+" element: "+g))
}this.element=g,this.options=C({},this.constructor.defaults),this.option(n);
var l=++a;
this.element.outlayerGUID=l,E[l]=this,this._create(),this.options.isInitLayout&&this.layout()
}var a=0,E={};
return b.namespace="outlayer",b.Item=e,b.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},C(b.prototype,j.prototype),b.prototype.option=function(c){C(this.options,c)
},b.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),C(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()
},b.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)
},b.prototype._itemize=function(n){for(var l=this._filterFindItemElements(n),K=this.constructor.Item,J=[],I=0,H=l.length;
H>I;
I++){var G=l[I],F=new K(G,this);
J.push(F)
}return J
},b.prototype._filterFindItemElements=function(L){L=A(L);
for(var K=this.options.itemSelector,J=[],I=0,H=L.length;
H>I;
I++){var G=L[I];
if(p(G)){if(K){f(G,K)&&J.push(G);
for(var F=G.querySelectorAll(K),n=0,l=F.length;
l>n;
n++){J.push(F[n])
}}else{J.push(G)
}}}return J
},b.prototype.getItemElements=function(){for(var l=[],g=0,n=this.items.length;
n>g;
g++){l.push(this.items[g].element)
}return l
},b.prototype.layout=function(){this._resetLayout(),this._manageStamps();
var c=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;
this.layoutItems(this.items,c),this._isLayoutInited=!0
},b.prototype._init=b.prototype.layout,b.prototype._resetLayout=function(){this.getSize()
},b.prototype.getSize=function(){this.size=h(this.element)
},b.prototype._getMeasurement=function(l,g){var F,n=this.options[l];
n?("string"==typeof n?F=this.element.querySelector(n):p(n)&&(F=n),this[l]=F?h(F)[g]:n):this[l]=0
},b.prototype.layoutItems=function(g,c){g=this._getItemsForLayout(g),this._layoutItems(g,c),this._postLayout()
},b.prototype._getItemsForLayout=function(l){for(var g=[],G=0,F=l.length;
F>G;
G++){var n=l[G];
n.isIgnored||g.push(n)
}return g
},b.prototype._layoutItems=function(L,K){function J(){I.emitEvent("layoutComplete",[I,L])
}var I=this;
if(!L||!L.length){return void J()
}this._itemsOn(L,"layout",J);
for(var H=[],G=0,F=L.length;
F>G;
G++){var n=L[G],l=this._getItemLayoutPosition(n);
l.item=n,l.isInstant=K||n.isLayoutInstant,H.push(l)
}this._processLayoutQueue(H)
},b.prototype._getItemLayoutPosition=function(){return{x:0,y:0}
},b.prototype._processLayoutQueue=function(l){for(var g=0,F=l.length;
F>g;
g++){var n=l[g];
this._positionItem(n.item,n.x,n.y,n.isInstant)
}},b.prototype._positionItem=function(l,g,F,n){n?l.goTo(g,F):l.moveTo(g,F)
},b.prototype._postLayout=function(){this.resizeContainer()
},b.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var c=this._getContainerSize();
c&&(this._setContainerMeasure(c.width,!0),this._setContainerMeasure(c.height,!1))
}},b.prototype._getContainerSize=r,b.prototype._setContainerMeasure=function(l,g){if(void 0!==l){var n=this.size;
n.isBorderBox&&(l+=g?n.paddingLeft+n.paddingRight+n.borderLeftWidth+n.borderRightWidth:n.paddingBottom+n.paddingTop+n.borderTopWidth+n.borderBottomWidth),l=Math.max(l,0),this.element.style[g?"width":"height"]=l+"px"
}},b.prototype._itemsOn=function(M,L,K){function J(){return I++,I===H&&K.call(G),!0
}for(var I=0,H=M.length,G=this,F=0,n=M.length;
n>F;
F++){var l=M[F];
l.on(L,J)
}},b.prototype.ignore=function(g){var c=this.getItem(g);
c&&(c.isIgnored=!0)
},b.prototype.unignore=function(g){var c=this.getItem(g);
c&&delete c.isIgnored
},b.prototype.stamp=function(l){if(l=this._find(l)){this.stamps=this.stamps.concat(l);
for(var g=0,F=l.length;
F>g;
g++){var n=l[g];
this.ignore(n)
}}},b.prototype.unstamp=function(l){if(l=this._find(l)){for(var g=0,F=l.length;
F>g;
g++){var n=l[g];
z(n,this.stamps),this.unignore(n)
}}},b.prototype._find=function(c){return c?("string"==typeof c&&(c=this.element.querySelectorAll(c)),c=A(c)):void 0
},b.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();
for(var l=0,g=this.stamps.length;
g>l;
l++){var n=this.stamps[l];
this._manageStamp(n)
}}},b.prototype._getBoundingRect=function(){var g=this.element.getBoundingClientRect(),c=this.size;
this._boundingRect={left:g.left+c.paddingLeft+c.borderLeftWidth,top:g.top+c.paddingTop+c.borderTopWidth,right:g.right-(c.paddingRight+c.borderRightWidth),bottom:g.bottom-(c.paddingBottom+c.borderBottomWidth)}
},b.prototype._manageStamp=r,b.prototype._getElementOffset=function(l){var g=l.getBoundingClientRect(),G=this._boundingRect,F=h(l),n={left:g.left-G.left-F.marginLeft,top:g.top-G.top-F.marginTop,right:G.right-g.right-F.marginRight,bottom:G.bottom-g.bottom-F.marginBottom};
return n
},b.prototype.handleEvent=function(g){var c="on"+g.type;
this[c]&&this[c](g)
},b.prototype.bindResize=function(){this.isResizeBound||(m.bind(D,"resize",this),this.isResizeBound=!0)
},b.prototype.unbindResize=function(){this.isResizeBound&&m.unbind(D,"resize",this),this.isResizeBound=!1
},b.prototype.onresize=function(){function g(){c.resize(),delete c.resizeTimeout
}this.resizeTimeout&&clearTimeout(this.resizeTimeout);
var c=this;
this.resizeTimeout=setTimeout(g,100)
},b.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()
},b.prototype.needsResizeLayout=function(){var g=h(this.element),c=this.size&&g;
return c&&g.innerWidth!==this.size.innerWidth
},b.prototype.addItems=function(g){var c=this._itemize(g);
return c.length&&(this.items=this.items.concat(c)),c
},b.prototype.appended=function(g){var c=this.addItems(g);
c.length&&(this.layoutItems(c,!0),this.reveal(c))
},b.prototype.prepended=function(l){var g=this._itemize(l);
if(g.length){var n=this.items.slice(0);
this.items=g.concat(n),this._resetLayout(),this._manageStamps(),this.layoutItems(g,!0),this.reveal(g),this.layoutItems(n)
}},b.prototype.reveal=function(l){var g=l&&l.length;
if(g){for(var F=0;
g>F;
F++){var n=l[F];
n.reveal()
}}},b.prototype.hide=function(l){var g=l&&l.length;
if(g){for(var F=0;
g>F;
F++){var n=l[F];
n.hide()
}}},b.prototype.getItem=function(l){for(var g=0,F=this.items.length;
F>g;
g++){var n=this.items[g];
if(n.element===l){return n
}}},b.prototype.getItems=function(l){if(l&&l.length){for(var g=[],H=0,G=l.length;
G>H;
H++){var F=l[H],n=this.getItem(F);
n&&g.push(n)
}return g
}},b.prototype.remove=function(n){n=A(n);
var l=this.getItems(n);
if(l&&l.length){this._itemsOn(l,"remove",function(){this.emitEvent("removeComplete",[this,l])
});
for(var H=0,G=l.length;
G>H;
H++){var F=l[H];
F.remove(),z(F,this.items)
}}},b.prototype.destroy=function(){var l=this.element.style;
l.height="",l.position="",l.width="";
for(var g=0,G=this.items.length;
G>g;
g++){var F=this.items[g];
F.destroy()
}this.unbindResize();
var n=this.element.outlayerGUID;
delete E[n],delete this.element.outlayerGUID,t&&t.removeData(this.element,this.constructor.namespace)
},b.data=function(g){var c=g&&g.outlayerGUID;
return c&&E[c]
},b.create=function(g,n){function l(){b.apply(this,arguments)
}return Object.create?l.prototype=Object.create(b.prototype):C(l.prototype,b.prototype),l.prototype.constructor=l,l.defaults=C({},b.defaults),C(l.defaults,n),l.prototype.settings={},l.namespace=g,l.data=b.data,l.Item=function(){e.apply(this,arguments)
},l.Item.prototype=new e,k(function(){for(var O=y(g),N=w.querySelectorAll(".js-"+O),M="data-"+O+"-options",L=0,K=N.length;
K>L;
L++){var J,I=N[L],H=I.getAttribute(M);
try{J=H&&JSON.parse(H)
}catch(G){u&&u.error("Error parsing "+M+" on "+I.nodeName.toLowerCase()+(I.id?"#"+I.id:"")+": "+G);
continue
}var F=new l(I,J);
t&&t.data(I,g,F)
}}),t&&t.bridget&&t.bridget(g,l),l
},b.Item=e,b
}var w=D.document,u=D.console,t=D.jQuery,r=function(){},q=Object.prototype.toString,p="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(b){return b instanceof HTMLElement
}:function(b){return b&&"object"==typeof b&&1===b.nodeType&&"string"==typeof b.nodeName
},o=Array.prototype.indexOf?function(e,c){return e.indexOf(c)
}:function(f,e){for(var h=0,g=f.length;
g>h;
h++){if(f[h]===e){return h
}}return -1
};
"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],x):"object"==typeof exports?module.exports=x(require("eventie"),require("doc-ready"),require("wolfy87-eventemitter"),require("get-size"),require("desandro-matches-selector"),require("./item")):D.Outlayer=x(D.eventie,D.docReady,D.EventEmitter,D.getSize,D.matchesSelector,D.Outlayer.Item)
}(window),function(f){function e(h,c){var j=h.create("masonry");
return j.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();
var b=this.cols;
for(this.colYs=[];
b--;
){this.colYs.push(0)
}this.maxY=0
},j.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var b=this.items[0],k=b&&b.element;
this.columnWidth=k&&c(k).outerWidth||this.containerWidth
}this.columnWidth+=this.gutter,this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)
},j.prototype.getContainerWidth=function(){var b=this.options.isFitWidth?this.element.parentNode:this.element,k=c(b);
this.containerWidth=k&&k.innerWidth
},j.prototype._getItemLayoutPosition=function(y){y.getSize();
var x=y.size.outerWidth%this.columnWidth,w=x&&1>x?"round":"ceil",u=Math[w](y.size.outerWidth/this.columnWidth);
u=Math.min(u,this.cols);
for(var t=this._getColGroup(u),r=Math.min.apply(Math,t),q=g(t,r),p={x:this.columnWidth*q,y:r},o=r+y.size.outerHeight,n=this.cols+1-t.length,m=0;
n>m;
m++){this.colYs[q+m]=o
}return p
},j.prototype._getColGroup=function(l){if(2>l){return this.colYs
}for(var k=[],o=this.cols+1-l,n=0;
o>n;
n++){var m=this.colYs.slice(n,n+l);
k[n]=Math.max.apply(Math,m)
}return k
},j.prototype._manageStamp=function(r){var q=c(r),p=this._getElementOffset(r),o=this.options.isOriginLeft?p.left:p.right,n=o+q.outerWidth,m=Math.floor(o/this.columnWidth);
m=Math.max(0,m);
var l=Math.floor(n/this.columnWidth);
l-=n%this.columnWidth?0:1,l=Math.min(this.cols-1,l);
for(var k=(this.options.isOriginTop?p.top:p.bottom)+q.outerHeight,b=m;
l>=b;
b++){this.colYs[b]=Math.max(k,this.colYs[b])
}},j.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);
var b={height:this.maxY};
return this.options.isFitWidth&&(b.width=this._getContainerFitWidth()),b
},j.prototype._getContainerFitWidth=function(){for(var l=0,k=this.cols;
--k&&0===this.colYs[k];
){l++
}return(this.cols-l)*this.columnWidth-this.gutter
},j.prototype.needsResizeLayout=function(){var b=this.containerWidth;
return this.getContainerWidth(),b!==this.containerWidth
},j
}var g=Array.prototype.indexOf?function(h,c){return h.indexOf(c)
}:function(j,h){for(var m=0,l=j.length;
l>m;
m++){var k=j[m];
if(k===h){return m
}}return -1
};
"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):"object"==typeof exports?module.exports=e(require("outlayer"),require("get-size")):f.Masonry=e(f.Outlayer,f.getSize)
}(window);
/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function(){function f(){}function b(k,j){for(var l=k.length;
l--;
){if(k[l].listener===j){return l
}}return -1
}function h(j){return function(){return this[j].apply(this,arguments)
}
}var a=f.prototype,c=this,g=c.EventEmitter;
a.getListeners=function(l){var k,m,j=this._getEvents();
if("object"==typeof l){k={};
for(m in j){j.hasOwnProperty(m)&&l.test(m)&&(k[m]=j[m])
}}else{k=j[l]||(j[l]=[])
}return k
},a.flattenListeners=function(k){var j,l=[];
for(j=0;
k.length>j;
j+=1){l.push(k[j].listener)
}return l
},a.getListenersAsObject=function(k){var j,l=this.getListeners(k);
return l instanceof Array&&(j={},j[k]=l),j||l
},a.addListener=function(l,p){var j,k=this.getListenersAsObject(l),m="object"==typeof p;
for(j in k){k.hasOwnProperty(j)&&-1===b(k[j],p)&&k[j].push(m?p:{listener:p,once:!1})
}return this
},a.on=h("addListener"),a.addOnceListener=function(k,j){return this.addListener(k,{listener:j,once:!0})
},a.once=h("addOnceListener"),a.defineEvent=function(j){return this.getListeners(j),this
},a.defineEvents=function(k){for(var j=0;
k.length>j;
j+=1){this.defineEvent(k[j])
}return this
},a.removeListener=function(l,p){var j,k,m=this.getListenersAsObject(l);
for(k in m){m.hasOwnProperty(k)&&(j=b(m[k],p),-1!==j&&m[k].splice(j,1))
}return this
},a.off=h("removeListener"),a.addListeners=function(k,j){return this.manipulateListeners(!1,k,j)
},a.removeListeners=function(k,j){return this.manipulateListeners(!0,k,j)
},a.manipulateListeners=function(p,k,u){var j,m,q=p?this.removeListener:this.addListener,l=p?this.removeListeners:this.addListeners;
if("object"!=typeof k||k instanceof RegExp){for(j=u.length;
j--;
){q.call(this,k,u[j])
}}else{for(j in k){k.hasOwnProperty(j)&&(m=k[j])&&("function"==typeof m?q.call(this,j,m):l.call(this,j,m))
}}return this
},a.removeEvent=function(l){var k,m=typeof l,j=this._getEvents();
if("string"===m){delete j[l]
}else{if("object"===m){for(k in j){j.hasOwnProperty(k)&&l.test(k)&&delete j[k]
}}else{delete this._events
}}return this
},a.removeAllListeners=h("removeEvent"),a.emitEvent=function(p,k){var u,j,m,q,l=this.getListenersAsObject(p);
for(m in l){if(l.hasOwnProperty(m)){for(j=l[m].length;
j--;
){u=l[m][j],u.once===!0&&this.removeListener(p,u.listener),q=u.listener.apply(this,k||[]),q===this._getOnceReturnValue()&&this.removeListener(p,u.listener)
}}}return this
},a.trigger=h("emitEvent"),a.emit=function(k){var j=Array.prototype.slice.call(arguments,1);
return this.emitEvent(k,j)
},a.setOnceReturnValue=function(j){return this._onceReturnValue=j,this
},a._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0
},a._getEvents=function(){return this._events||(this._events={})
},f.noConflict=function(){return c.EventEmitter=g,f
},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return f
}):"object"==typeof module&&module.exports?module.exports=f:this.EventEmitter=f
}).call(this),function(f){function b(e){var j=f.event;
return j.target=j.target||j.srcElement||e,j
}var h=document.documentElement,a=function(){};
h.addEventListener?a=function(k,j,l){k.addEventListener(j,l,!1)
}:h.attachEvent&&(a=function(k,l,j){k[l+j]=j.handleEvent?function(){var e=b(k);
j.handleEvent.call(j,e)
}:function(){var e=b(k);
j.call(k,e)
},k.attachEvent("on"+l,k[l+j])
});
var c=function(){};
h.removeEventListener?c=function(k,j,l){k.removeEventListener(j,l,!1)
}:h.detachEvent&&(c=function(l,k,m){l.detachEvent("on"+k,l[k+m]);
try{delete l[k+m]
}catch(j){l[k+m]=void 0
}});
var g={bind:a,unbind:c};
"function"==typeof define&&define.amd?define("eventie/eventie",g):f.eventie=g
}(this),function(b,a){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(e,c){return a(b,e,c)
}):"object"==typeof exports?module.exports=a(b,require("wolfy87-eventemitter"),require("eventie")):b.imagesLoaded=a(b,b.EventEmitter,b.eventie)
}(window,function(p,A,j){function k(c,a){for(var f in a){c[f]=a[f]
}return c
}function b(a){return"[object Array]"===q.call(a)
}function g(f){var c=[];
if(b(f)){c=f
}else{if("number"==typeof f.length){for(var h=0,a=f.length;
a>h;
h++){c.push(f[h])
}}else{c.push(f)
}}return c
}function B(f,a,h){if(!(this instanceof B)){return new B(f,a)
}"string"==typeof f&&(f=document.querySelectorAll(f)),this.elements=g(f),this.options=k({},this.options),"function"==typeof a?h=a:k(this.options,a),h&&this.on("always",h),this.getImages(),x&&(this.jqDeferred=new x.Deferred);
var c=this;
setTimeout(function(){c.check()
})
}function m(a){this.img=a
}function w(a){this.src=a,y[a]=this
}var x=p.jQuery,z=p.console,l=z!==void 0,q=Object.prototype.toString;
B.prototype=new A,B.prototype.options={},B.prototype.getImages=function(){this.images=[];
for(var D=0,c=this.elements.length;
c>D;
D++){var F=this.elements[D];
"IMG"===F.nodeName&&this.addImage(F);
var a=F.nodeType;
if(a&&(1===a||9===a||11===a)){for(var u=F.querySelectorAll("img"),E=0,h=u.length;
h>E;
E++){var C=u[E];
this.addImage(C)
}}}},B.prototype.addImage=function(c){var a=new m(c);
this.images.push(a)
},B.prototype.check=function(){function h(o,n){return c.options.debug&&l&&z.log("confirm",o,n),c.progress(o),C++,C===a&&c.complete(),!0
}var c=this,C=0,a=this.images.length;
if(this.hasAnyBroken=!1,!a){return this.complete(),void 0
}for(var f=0;
a>f;
f++){var u=this.images[f];
u.on("confirm",h),u.check()
}},B.prototype.progress=function(c){this.hasAnyBroken=this.hasAnyBroken||!c.isLoaded;
var a=this;
setTimeout(function(){a.emit("progress",a,c),a.jqDeferred&&a.jqDeferred.notify&&a.jqDeferred.notify(a,c)
})
},B.prototype.complete=function(){var c=this.hasAnyBroken?"fail":"done";
this.isComplete=!0;
var a=this;
setTimeout(function(){if(a.emit(c,a),a.emit("always",a),a.jqDeferred){var e=a.hasAnyBroken?"reject":"resolve";
a.jqDeferred[e](a)
}})
},x&&(x.fn.imagesLoaded=function(c,a){var f=new B(this,c,a);
return f.jqDeferred.promise(x(this))
}),m.prototype=new A,m.prototype.check=function(){var c=y[this.img.src]||new w(this.img.src);
if(c.isConfirmed){return this.confirm(c.isLoaded,"cached was confirmed"),void 0
}if(this.img.complete&&void 0!==this.img.naturalWidth){return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0
}var a=this;
c.on("confirm",function(f,h){return a.confirm(f.isLoaded,h),!0
}),c.check()
},m.prototype.confirm=function(c,a){this.isLoaded=c,this.emit("confirm",this,a)
};
var y={};
return w.prototype=new A,w.prototype.check=function(){if(!this.isChecked){var a=new Image;
j.bind(a,"load",this),j.bind(a,"error",this),a.src=this.src,this.isChecked=!0
}},w.prototype.handleEvent=function(c){var a="on"+c.type;
this[a]&&this[a](c)
},w.prototype.onload=function(a){this.confirm(!0,"onload"),this.unbindProxyEvents(a)
},w.prototype.onerror=function(a){this.confirm(!1,"onerror"),this.unbindProxyEvents(a)
},w.prototype.confirm=function(c,a){this.isConfirmed=!0,this.isLoaded=c,this.emit("confirm",this,a)
},w.prototype.unbindProxyEvents=function(a){j.unbind(a.target,"load",this),j.unbind(a.target,"error",this)
},B
});
/*!
 * validate.js 0.11.1
 *
 * (c) 2013-2016 Nicklas Ansman, 2013 Wrapp
 * Validate.js may be freely distributed under the MIT license.
 * For all details and documentation:
 * http://validatejs.org/
 */
(function(b,c,f){var e=function(h,m,j){j=a.extend({},a.options,j);
var l=a.runValidations(h,m,j),g,k;
for(g in l){for(k in l[g]){if(a.isPromise(l[g][k])){throw new Error("Use validate.async if you want support for promises")
}}}return e.processValidationResults(l,j)
};
var a=e;
a.extend=function(g){[].slice.call(arguments,1).forEach(function(j){for(var h in j){g[h]=j[h]
}});
return g
};
a.extend(e,{version:{major:0,minor:11,patch:1,metadata:null,toString:function(){var g=a.format("%{major}.%{minor}.%{patch}",a.version);
if(!a.isEmpty(a.version.metadata)){g+="+"+a.version.metadata
}return g
}},Promise:typeof Promise!=="undefined"?Promise:null,EMPTY_STRING_REGEXP:/^\s*$/,runValidations:function(l,j,r){var m=[],n,h,p,k,g,q,o;
if(a.isDomElement(l)||a.isJqueryElement(l)){l=a.collectFormValues(l)
}for(n in j){p=a.getDeepObjectValue(l,n);
k=a.result(j[n],p,l,n,r,j);
for(h in k){g=a.validators[h];
if(!g){o=a.format("Unknown validator %{name}",{name:h});
throw new Error(o)
}q=k[h];
q=a.result(q,p,l,n,r,j);
if(!q){continue
}m.push({attribute:n,value:p,validator:h,globalOptions:r,attributes:l,options:q,error:g.call(g,p,q,n,l,r)})
}}return m
},processValidationResults:function(j,g){j=a.pruneEmptyErrors(j,g);
j=a.expandMultipleErrors(j,g);
j=a.convertErrorMessages(j,g);
var h=g.format||"grouped";
if(typeof a.formatters[h]==="function"){j=a.formatters[h](j)
}else{throw new Error(a.format("Unknown format %{format}",g))
}return a.isEmpty(j)?undefined:j
},async:function(g,l,h){h=a.extend({},a.async.options,h);
var k=h.wrapErrors||function(m){return m
};
if(h.cleanAttributes!==false){g=a.cleanAttributes(g,l)
}var j=a.runValidations(g,l,h);
return new a.Promise(function(n,m){a.waitForResults(j).then(function(){var o=a.processValidationResults(j,h);
if(o){m(new k(o,h,g,l))
}else{n(g)
}},function(o){m(o)
})
})
},single:function(h,j,g){g=a.extend({},a.single.options,g,{format:"flat",fullMessages:false});
return a({single:h},{single:j},g)
},waitForResults:function(g){return g.reduce(function(j,h){if(!a.isPromise(h.error)){return j
}return j.then(function(){return h.error.then(function(k){h.error=k||null
})
})
},new a.Promise(function(h){h()
}))
},result:function(h){var g=[].slice.call(arguments,1);
if(typeof h==="function"){h=h.apply(null,g)
}return h
},isNumber:function(g){return typeof g==="number"&&!isNaN(g)
},isFunction:function(g){return typeof g==="function"
},isInteger:function(g){return a.isNumber(g)&&g%1===0
},isBoolean:function(g){return typeof g==="boolean"
},isObject:function(g){return g===Object(g)
},isDate:function(g){return g instanceof Date
},isDefined:function(g){return g!==null&&g!==undefined
},isPromise:function(g){return !!g&&a.isFunction(g.then)
},isJqueryElement:function(g){return g&&a.isString(g.jquery)
},isDomElement:function(g){if(!g){return false
}if(!g.querySelectorAll||!g.querySelector){return false
}if(a.isObject(document)&&g===document){return true
}if(typeof HTMLElement==="object"){return g instanceof HTMLElement
}else{return g&&typeof g==="object"&&g!==null&&g.nodeType===1&&typeof g.nodeName==="string"
}},isEmpty:function(h){var g;
if(!a.isDefined(h)){return true
}if(a.isFunction(h)){return false
}if(a.isString(h)){return a.EMPTY_STRING_REGEXP.test(h)
}if(a.isArray(h)){return h.length===0
}if(a.isDate(h)){return false
}if(a.isObject(h)){for(g in h){return false
}return true
}return false
},format:a.extend(function(h,g){if(!a.isString(h)){return h
}return h.replace(a.format.FORMAT_REGEXP,function(l,k,j){if(k==="%"){return"%{"+j+"}"
}else{return String(g[j])
}})
},{FORMAT_REGEXP:/(%?)%\{([^\}]+)\}/g}),prettify:function(g){if(a.isNumber(g)){if((g*100)%1===0){return""+g
}else{return parseFloat(Math.round(g*100)/100).toFixed(2)
}}if(a.isArray(g)){return g.map(function(h){return a.prettify(h)
}).join(", ")
}if(a.isObject(g)){return g.toString()
}g=""+g;
return g.replace(/([^\s])\.([^\s])/g,"$1 $2").replace(/\\+/g,"").replace(/[_-]/g," ").replace(/([a-z])([A-Z])/g,function(k,j,h){return""+j+" "+h.toLowerCase()
}).toLowerCase()
},stringifyValue:function(g){return a.prettify(g)
},isString:function(g){return typeof g==="string"
},isArray:function(g){return{}.toString.call(g)==="[object Array]"
},isHash:function(g){return a.isObject(g)&&!a.isArray(g)&&!a.isFunction(g)
},contains:function(h,g){if(!a.isDefined(h)){return false
}if(a.isArray(h)){return h.indexOf(g)!==-1
}return g in h
},unique:function(g){if(!a.isArray(g)){return g
}return g.filter(function(j,h,k){return k.indexOf(j)==h
})
},forEachKeyInKeypath:function(h,g,m){if(!a.isString(g)){return undefined
}var k="",j,l=false;
for(j=0;
j<g.length;
++j){switch(g[j]){case".":if(l){l=false;
k+="."
}else{h=m(h,k,false);
k=""
}break;
case"\\":if(l){l=false;
k+="\\"
}else{l=true
}break;
default:l=false;
k+=g[j];
break
}}return m(h,k,true)
},getDeepObjectValue:function(h,g){if(!a.isObject(h)){return undefined
}return a.forEachKeyInKeypath(h,g,function(k,j){if(a.isObject(k)){return k[j]
}})
},collectFormValues:function(g,q){var p={},k,h,n,m,l,o;
if(a.isJqueryElement(g)){g=g[0]
}if(!g){return p
}q=q||{};
m=g.querySelectorAll("input[name], textarea[name]");
for(k=0;
k<m.length;
++k){n=m.item(k);
if(a.isDefined(n.getAttribute("data-ignored"))){continue
}o=a.sanitizeFormValue(n.value,q);
if(n.type==="number"){o=o?+o:null
}else{if(n.type==="checkbox"){if(n.attributes.value){if(!n.checked){o=p[n.name]||null
}}else{o=n.checked
}}else{if(n.type==="radio"){if(!n.checked){o=p[n.name]||null
}}}}p[n.name]=o
}m=g.querySelectorAll("select[name]");
for(k=0;
k<m.length;
++k){n=m.item(k);
if(n.multiple){o=[];
for(h in n.options){l=n.options[h];
if(l.selected){o.push(a.sanitizeFormValue(l.value,q))
}}}else{o=a.sanitizeFormValue(n.options[n.selectedIndex].value,q)
}p[n.name]=o
}return p
},sanitizeFormValue:function(h,g){if(g.trim&&a.isString(h)){h=h.trim()
}if(g.nullify!==false&&h===""){return null
}return h
},capitalize:function(g){if(!a.isString(g)){return g
}return g[0].toUpperCase()+g.slice(1)
},pruneEmptyErrors:function(g){return g.filter(function(h){return !a.isEmpty(h.error)
})
},expandMultipleErrors:function(h){var g=[];
h.forEach(function(j){if(a.isArray(j.error)){j.error.forEach(function(k){g.push(a.extend({},j,{error:k}))
})
}else{g.push(j)
}});
return g
},convertErrorMessages:function(j,h){h=h||{};
var g=[];
j.forEach(function(l){var k=a.result(l.error,l.value,l.attribute,l.options,l.attributes,l.globalOptions);
if(!a.isString(k)){g.push(l);
return
}if(k[0]==="^"){k=k.slice(1)
}else{if(h.fullMessages!==false){k=a.capitalize(a.prettify(l.attribute))+" "+k
}}k=k.replace(/\\\^/g,"^");
k=a.format(k,{value:a.stringifyValue(l.value)});
g.push(a.extend({},l,{error:k}))
});
return g
},groupErrorsByAttribute:function(h){var g={};
h.forEach(function(j){var k=g[j.attribute];
if(k){k.push(j)
}else{g[j.attribute]=[j]
}});
return g
},flattenErrorsToArray:function(g){return g.map(function(h){return h.error
}).filter(function(k,j,h){return h.indexOf(k)===j
})
},cleanAttributes:function(g,j){function l(o,m,n){if(a.isObject(o[m])){return o[m]
}return(o[m]=n?true:{})
}function k(o){var n={},p,m;
for(m in o){if(!o[m]){continue
}a.forEachKeyInKeypath(n,m,l)
}return n
}function h(n,p){if(!a.isObject(n)){return n
}var o=a.extend({},n),m,q;
for(q in n){m=p[q];
if(a.isObject(m)){o[q]=h(o[q],m)
}else{if(!m){delete o[q]
}}}return o
}if(!a.isObject(j)||!a.isObject(g)){return{}
}j=k(j);
return h(g,j)
},exposeModule:function(k,g,h,j,l){if(h){if(j&&j.exports){h=j.exports=k
}h.validate=k
}else{g.validate=k;
if(k.isFunction(l)&&l.amd){l([],function(){return k
})
}}},warn:function(g){if(typeof console!=="undefined"&&console.warn){console.warn("[validate.js] "+g)
}},error:function(g){if(typeof console!=="undefined"&&console.error){console.error("[validate.js] "+g)
}}});
e.validators={presence:function(h,g){g=a.extend({},this.options,g);
if(g.allowEmpty?!a.isDefined(h):a.isEmpty(h)){return g.message||this.message||"can't be blank"
}},length:function(o,q,h){if(!a.isDefined(o)){return
}q=a.extend({},this.options,q);
var l=q.is,j=q.maximum,m=q.minimum,p=q.tokenizer||function(r){return r
},k,n=[];
o=p(o);
var g=o.length;
if(!a.isNumber(g)){a.error(a.format("Attribute %{attr} has a non numeric value for `length`",{attr:h}));
return q.message||this.notValid||"has an incorrect length"
}if(a.isNumber(l)&&g!==l){k=q.wrongLength||this.wrongLength||"is the wrong length (should be %{count} characters)";
n.push(a.format(k,{count:l}))
}if(a.isNumber(m)&&g<m){k=q.tooShort||this.tooShort||"is too short (minimum is %{count} characters)";
n.push(a.format(k,{count:m}))
}if(a.isNumber(j)&&g>j){k=q.tooLong||this.tooLong||"is too long (maximum is %{count} characters)";
n.push(a.format(k,{count:j}))
}if(n.length>0){return q.message||n
}},numericality:function(n,p){if(!a.isDefined(n)){return
}p=a.extend({},this.options,p);
var m=[],g,k,j={greaterThan:function(q,r){return q>r
},greaterThanOrEqualTo:function(q,r){return q>=r
},equalTo:function(q,r){return q===r
},lessThan:function(q,r){return q<r
},lessThanOrEqualTo:function(q,r){return q<=r
},divisibleBy:function(q,r){return q%r===0
}};
if(a.isString(n)&&p.strict){var l="^(0|[1-9]\\d*)";
if(!p.onlyInteger){l+="(\\.\\d+)?"
}l+="$";
if(!(new RegExp(l).test(n))){return p.message||p.notValid||this.notValid||this.message||"must be a valid number"
}}if(p.noStrings!==true&&a.isString(n)&&!a.isEmpty(n)){n=+n
}if(!a.isNumber(n)){return p.message||p.notValid||this.notValid||this.message||"is not a number"
}if(p.onlyInteger&&!a.isInteger(n)){return p.message||p.notInteger||this.notInteger||this.message||"must be an integer"
}for(g in j){k=p[g];
if(a.isNumber(k)&&!j[g](n,k)){var o="not"+a.capitalize(g);
var h=p[o]||this[o]||this.message||"must be %{type} %{count}";
m.push(a.format(h,{count:k,type:a.prettify(g)}))
}}if(p.odd&&n%2!==1){m.push(p.notOdd||this.notOdd||this.message||"must be odd")
}if(p.even&&n%2!==0){m.push(p.notEven||this.notEven||this.message||"must be even")
}if(m.length){return p.message||m
}},datetime:a.extend(function(l,j){if(!a.isFunction(this.parse)||!a.isFunction(this.format)){throw new Error("Both the parse and format functions needs to be set to use the datetime/date validator")
}if(!a.isDefined(l)){return
}j=a.extend({},this.options,j);
var k,m=[],g=j.earliest?this.parse(j.earliest,j):NaN,h=j.latest?this.parse(j.latest,j):NaN;
l=this.parse(l,j);
if(isNaN(l)||j.dateOnly&&l%86400000!==0){k=j.notValid||j.message||this.notValid||"must be a valid date";
return a.format(k,{value:arguments[0]})
}if(!isNaN(g)&&l<g){k=j.tooEarly||j.message||this.tooEarly||"must be no earlier than %{date}";
k=a.format(k,{value:this.format(l,j),date:this.format(g,j)});
m.push(k)
}if(!isNaN(h)&&l>h){k=j.tooLate||j.message||this.tooLate||"must be no later than %{date}";
k=a.format(k,{date:this.format(h,j),value:this.format(l,j)});
m.push(k)
}if(m.length){return a.unique(m)
}},{parse:null,format:null}),date:function(h,g){g=a.extend({},g,{dateOnly:true});
return a.validators.datetime.call(a.validators.datetime,h,g)
},format:function(l,h){if(a.isString(h)||(h instanceof RegExp)){h={pattern:h}
}h=a.extend({},this.options,h);
var j=h.message||this.message||"is invalid",k=h.pattern,g;
if(!a.isDefined(l)){return
}if(!a.isString(l)){return j
}if(a.isString(k)){k=new RegExp(h.pattern,h.flags)
}g=k.exec(l);
if(!g||g[0].length!=l.length){return j
}},inclusion:function(j,g){if(!a.isDefined(j)){return
}if(a.isArray(g)){g={within:g}
}g=a.extend({},this.options,g);
if(a.contains(g.within,j)){return
}var h=g.message||this.message||"^%{value} is not included in the list";
return a.format(h,{value:j})
},exclusion:function(j,g){if(!a.isDefined(j)){return
}if(a.isArray(g)){g={within:g}
}g=a.extend({},this.options,g);
if(!a.contains(g.within,j)){return
}var h=g.message||this.message||"^%{value} is restricted";
return a.format(h,{value:j})
},email:a.extend(function(j,g){g=a.extend({},this.options,g);
var h=g.message||this.message||"is not a valid email";
if(!a.isDefined(j)){return
}if(!a.isString(j)){return h
}if(!this.PATTERN.exec(j)){return h
}},{PATTERN:/^[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/i}),equality:function(n,j,m,h){if(!a.isDefined(n)){return
}if(a.isString(j)){j={attribute:j}
}j=a.extend({},this.options,j);
var l=j.message||this.message||"is not equal to %{attribute}";
if(a.isEmpty(j.attribute)||!a.isString(j.attribute)){throw new Error("The attribute must be a non empty string")
}var k=a.getDeepObjectValue(h,j.attribute),g=j.comparator||function(p,o){return p===o
};
if(!g(n,k,j,m,h)){return a.format(l,{attribute:a.prettify(j.attribute)})
}},url:function(o,k){if(!a.isDefined(o)){return
}k=a.extend({},this.options,k);
var m=k.message||this.message||"is not a valid url",g=k.schemes||this.schemes||["http","https"],n=k.allowLocal||this.allowLocal||false;
if(!a.isString(o)){return m
}var l="^(?:(?:"+g.join("|")+")://)(?:\\S+(?::\\S*)?@)?(?:";
var j="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";
if(n){j+="?"
}else{l+="(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})"
}l+="(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*"+j+")(?::\\d{2,5})?(?:[/?#]\\S*)?$";
var h=new RegExp(l,"i");
if(!h.exec(o)){return m
}}};
e.formatters={detailed:function(g){return g
},flat:a.flattenErrorsToArray,grouped:function(h){var g;
h=a.groupErrorsByAttribute(h);
for(g in h){h[g]=a.flattenErrorsToArray(h[g])
}return h
},constraint:function(h){var g;
h=a.groupErrorsByAttribute(h);
for(g in h){h[g]=h[g].map(function(j){return j.validator
}).sort()
}return h
}};
e.exposeModule(e,this,b,c,f)
}).call(this,typeof exports!=="undefined"?exports:null,typeof module!=="undefined"?module:null,typeof define!=="undefined"?define:null);
window.PS=window.PS||{};
PS.util=PS.util||{};
(function(c){var b=document;
function a(){dlog("IG: looking for tables on this page");
if(jq("table").length>0){dlog("IG: attempting to make currency pair icons clickable");
jq("td[class^=currency]").addClass("noTextIndent").find("a").text("").removeClass("insight-link").addClass("clickableCurrencyPair")
}}c.util.makeCurrencyPairClickable=a
}(PS));
(function(c,b){function a(){function e(){var f=document.createElement("input");
f.setAttribute("type","date");
return f.type==="date"
}return{applyPolyfillIfRequired:function(){var f;
if(!e()){f=b("input[type='date']");
if(f.size()>0){b("<link/>",{rel:"stylesheet",type:"text/css",href:"//a.c-dn.net/b/36bXJe.css#jquery-ui-1.10.4.custom.min.css"}).appendTo("head");
c.util.getCachedScript("//a.c-dn.net/b/1ypVPe.js#jquery-ui-1.10.4.custom.min.js").done(function(){f.datepicker({dateFormat:"dd/mm/yy"})
})
}}}}
}c.util.DateInput=new a()
}(window.PS,window.jQuery));
window.PS=window.PS||{};
PS.util=PS.util||{};
(function(b){var a=function(){var c=jq("#sticky-footer");
var e=jq("#sticky-footer-close-icon");
var f=b.util.jspVars.get("permanent_sticky");
function g(){c.css("top",window.innerHeight+window.scrollY-50+"px")
}if(c){e.click(function(){c.animate({height:0},300,function(){jq(this).remove();
b.util.Cookie.set("disclaimer_closed","true",1825)
})
});
if((!(f))&&(b.util.Cookie.get("disclaimer_closed")==="true")){c.remove()
}}};
b.util.HideStickyFooter=new a()
}(PS));
window.PS=window.PS||{};
PS.util=PS.util||{};
(function(c){var a;
function b(){a=this
}b.prototype.init=function(){this.liveStatus();
this.schedule()
};
b.prototype.liveStatus=function(j){var f=jq(".iglive-link"),l,e,g,k,h;
if(f.length){e=c.util.Cookie.get("timeOffset");
l=new Date().getTime();
if(j===undefined){if(!e){c.util.LiveVideoSchedule.getTimeOffset(c.util.LiveVideoSchedule.liveStatus);
return false
}j=l+parseInt(e,10)
}g=new Date(j);
if(g.getUTCDay()!==0||g.getUTCDay()!==6){h=c.util.Cookie.get("iglive");
if(h){h=h.split("_");
h[1]=parseInt(h[1],10);
if(h[0]==="end"){if(j<=h[1]){c.util.LiveVideoSchedule.render(true,h[1]-j);
return
}c.util.LiveVideoSchedule.render(false)
}else{if(j<=h[1]){return
}}}jq.ajax({cache:false,url:"https://api.ig.com/research/iglive/local",dataType:"json",success:function(m){if(m.schedules.length){k=m.schedules;
k=k.sort(function(o,n){return new Date("1970/01/01 "+o.start)-new Date("1970/01/01 "+n.start)
});
c.util.LiveVideoSchedule.checkLiveSchedule(g,k)
}}})
}}};
b.prototype.getTimeOffset=function(l){var f=new XMLHttpRequest(),e,k,h,j,g=l!==undefined;
f.open("HEAD",document.location.href,true);
f.onreadystatechange=function(){if(f.readyState===4){if(f.status===200&&f.getResponseHeader("Date")!==undefined){e=Date.parse(f.getResponseHeader("Date"));
k=new Date().getTime();
j=e-k;
if(Math.abs(j)<60000){j=1
}document.cookie="timeOffset="+j+" ;path=/";
if(g&&c.util.Cookie.get("timeOffset")){h=k+j;
l(h)
}}}};
f.send(null)
};
b.prototype.isBST=function(g){var f=new Date(g).getUTCFullYear(),e={2015:false,2016:(g>1459040400000&&g<1477792800000),2017:(g>1490490000000&&g<1509242400000),2018:(g>1521939600000&&g<1540692000000),2019:(g>1553994000000&&g<1572141600000)};
return e[f]
};
b.prototype.checkLiveSchedule=function(f,l){var q=f.getUTCFullYear(),g=f.getUTCMonth()+1,n=f.getUTCDate(),p=q+"/"+g+"/"+n+" ",o=l.length,j=new Date(q+"/"+g+"/"+n+" "+l[o-1].end),k,e,h;
if(f<j){for(k=0;
k<o;
k++){e=new Date(p+l[k].start);
h=new Date(p+l[k].end);
if(f<h){if(f>e){document.cookie="iglive=end_"+Date.parse(h)+";path=/";
c.util.LiveVideoSchedule.render(true,Date.parse(h)-Date.parse(f));
return
}document.cookie="iglive=start_"+Date.parse(e)+";path=/";
c.util.LiveVideoSchedule.render(false);
return
}}}else{document.cookie="iglive=start_"+Date.parse(new Date(p+"23:59:59"))+";path=/";
c.util.LiveVideoSchedule.render(false)
}};
b.prototype.render=function(h,g){var e=jq(".iglive-link"),f=e.find("span");
if(e.length){if(h){e.addClass("onair").find("span").append(" on air");
c.util.LiveVideoSchedule.poll(g)
}else{if(e.hasClass("onair")){e.removeClass("onair");
f.text(f.text().replace(" on air",""))
}}}};
b.prototype.poll=function(e){window.setTimeout(function(){c.util.LiveVideoSchedule.render(false)
},parseInt(e,10))
};
b.prototype.schedule=function(){var g=jq(".live-schedule"),t,n,j,l,u,e,k,r,h,o,q,p,f;
if(g.length&&jq(".live-schedule").data("times")!==undefined&&!jq(".cq-wcm-edit ").length){t=c.util.Cookie.get("timeOffset");
n=new Date().getTime();
if(j===undefined){if(!t){c.util.LiveVideoSchedule.getTimeOffset(c.util.LiveVideoSchedule.schedule);
return false
}j=n+parseInt(t,10)
}f=new Date(j);
if((f.getUTCDay()!==0||f.getUTCDay()!==6)&&!jq.isEmptyObject(jq(".live-schedule").data("times"))){l=JSON.parse(jq(".live-schedule").data("times").slice(0,-3)+"}}");
r=f.getUTCFullYear();
h=f.getUTCMonth()+1;
o=f.getUTCDate();
q=f.getUTCDay();
p=r+"/"+h+"/"+o+" ";
l=Object.keys(l).map(function(m){return l[m]
});
l=l.sort(function(w,m){return new Date("1970/01/01 "+w.start)-new Date("1970/01/01 "+m.start)
});
for(u in l){if(l.hasOwnProperty(u)){e=new Date(p+l[u].start);
k=new Date(p+l[u].end);
if(q==l[u].day||l[u].day=="7"||l[u].day==""||(l[u].day=="8"&&q>0&&q<6)||(l[u].day=="9"&&q===0&&q===6)){if(f<k){if(f>e){c.util.LiveVideoSchedule.scheduleLoad(g,l[u].content);
return
}c.util.LiveVideoSchedule.scheduleLoad(g,false);
return
}}}}c.util.LiveVideoSchedule.scheduleLoad(g,false)
}else{c.util.LiveVideoSchedule.scheduleLoad(g,false)
}}};
b.prototype.scheduleLoad=function(f,g){var e=f.find(".schedule-default");
if(g){jq.ajax(g).done(function(h){e.empty().append(h);
c.util.activateVisiblePicturefills();
c.util.Clickable();
e.css({visibility:"visible"})
})
}else{e.css({visibility:"visible"})
}};
c.util.LiveVideoSchedule=new b()
}(PS));
window.i18n=window.i18n||{};
window.PS=window.PS||{};
PS.util=PS.util||{};
(function(g,f,a,c){var e;
function b(){e=this;
this.loggedInSelector=".logged-in";
this.loginLinkMyIGTextReplacement=f.util.jspVars.get("loggedin.loginLinkMyIGTextReplacement")||f.util.jspVars.get("loggedin.myigbutton");
this.homepageLink=f.util.jspVars.get("homepageLink");
this.loginFilter='[href*="/login"]';
this.linksSelector=e.loggedInSelector+" "+e.loginFilter;
this.clientChid="3";
this.selectorsLoaded=false
}b.prototype.init=function(){this.$myigSelector=g("#myig-link-main");
this.$createAccountBtn=g(".create-account-top");
this.$linkItems=g(this.linksSelector);
this.selectorsLoaded=true;
this.mobileCreateAccount();
if(window.PS.startup.authenticateUser.fetchingResult==="success"){this.myIgitems()
}};
b.prototype.mobileCreateAccount=function(){if(e.$createAccountBtn.length!==0){if(f.util.Browser.isMobileOrTablet()){if(f.util.Page.getQuerystring("chid")===e.clientChid){e.$createAccountBtn.parent().hide()
}}}};
b.prototype.myIgitems=function(){if(window.PS.startup&&window.PS.startup.authenticateUser&&window.PS.startup.authenticateUser.fetchDetails){window.PS.startup.authenticateUser.fetchDetails(this.replaceLinks.bind(this))
}else{this.backupService()
}};
b.prototype.replaceLinks=function(){var h=f.util.jspVars.get("loggedin.myIgHomepage")||"/myig/goto/homepage";
var j=function(l,m){var k=g(m);
k.attr("href",h).html(e.loginLinkMyIGTextReplacement)
};
e.$linkItems.each(j);
e.$myigSelector.addClass("on");
e.$myigSelector.find("a").addClass("on").attr("href",h)
};
b.prototype.backupService=function(){var l=f.util.Cookie.get("CST");
var k=f.util.Cookie.get("X-SECURITY-TOKEN");
var j=f.util.Cookie.get("IG-ENVIRONMENT")==="DEMO"?"https://demo.ig.com/myig/enabled/MYIG":"/myig/enabled/MYIG";
if(l!=null&&l!="null"&&l!=""&&k!=null&&k!="null"&&k!=""&&f.info.user.isLoggedIn==true){var h=g.ajax({type:"GET",url:j,dataType:"json",headers:{CST:l,"X-SECURITY-TOKEN":k}});
h.success(e.replaceLinks);
h.error(function(m){})
}};
a.ReplaceLoginLinks=new b()
}(jq,window.PS,window.PS.util,PS.events));
window.PS=window.PS||{};
PS.util=PS.util||{};
(function(a){jq(".language-switcher").change(function(){window.location=this.value;
a.util.Cookie.set("lang_sw",this.value,30)
})
}(PS));
window.PS=window.PS||{};
PS.util=PS.util||{};
(function(c){var b=function(e,f){e=e||".masonryContainer";
if(jq(e).length>0&&(c.util.Page.getQuerystring("t50")||jq('link[href$="common_top.min.css"]').length>0)){a(e,f)
}};
var a=function(e,f){e=e||".masonryContainer";
f=f||{};
if(!f.itemSelector){f.itemSelector=".item"
}if(!f.columnWidth){f.columnWidth=".masonrySizer-3col"
}var g=jq(e).masonry(f);
g.imagesLoaded(function(){g.masonry()
})
};
c.util.initMasonry=b
})(PS);
window.PS=window.PS||{};
window.PS.util=window.PS.util||{};
(function(g,f){var e=document,b,a=navigator.userAgent;
function c(){b=this;
b.schemeUrls={iphone:"igapp://",ipad:"igpad://"}
}c.prototype.init=function(){this.adaptiveAppForm();
this.loginLink();
this.openAppMA();
this.orentationChange()
};
c.prototype.type=function(){if(a.match(/iPhone|iPod/i)){return"iphone"
}else{if(a.match(/Android/i)){return"android"
}else{if(a.match(/iPad/i)){return"ipad"
}else{if(a.match(/IEMobile/i)){return"winphone"
}else{return null
}}}}};
c.prototype.category=function(){var h=g.util.Cookie.get("mobile_device");
return h==="false"?"desktop":h
};
c.prototype.tabletOrMobile=function(){var h=g.util.Cookie.get("mobile_device");
return h==="tablet"||h==="mobile"
};
c.prototype.isLessThanGivenWidth=function(h){return window.matchMedia("only screen and (max-width:"+h+")").matches
};
c.prototype.loginLink=function(){var l=this.category(),k,j,h;
if(l==="mobile"||l==="tablet"){k=f("a[href$='/login']");
if(k.length){k.each(function(){h=f(this).attr("href");
j="af_siteid="+g.util.jspVars.get("siteID")+"&af_sub1="+g.SiteCatalyst.utils.getSiteCatalystId();
h.indexOf("?")!==-1?j="&"+j:j="?"+j;
f(this).attr("href",h+j)
})
}}};
c.prototype.appsFlyerLinks=function(){var l=g.util.jspVars.get("appsflyer.linkreplace")!=="true",k=g.util.Cookie.get("salesAttribution"),u=!!k,r,o,m,p,h,q,w,j,t;
if(l&&u){try{k=JSON.parse(k)
}catch(n){window.dlog("Error parsing salesAttribution cookie values",n);
return
}if(k.affiliateId&&k.anSessionId&&k.creativeId&&k.productGroup){r=f("a[href*='app.appsflyer.com/'],a[href*='ig.onelink.me/']");
if(r.size()>0){o="pid=cellxpert&c="+k.productGroup+"&af_siteid="+k.affiliateId+"&af_sub1="+k.anSessionId+"&af_sub2="+k.creativeId+"&af_sub3="+g.util.jspVars.get("siteID")+"&af_sub4="+g.SiteCatalyst.utils.getSiteCatalystId()+"&af_dp=igapp%3A%2F%2F";
r.each(function(){j=5;
q="";
m=f(this).attr("href");
p=m.indexOf("?");
if(p>-1){h=m.substr(p+1);
h=h.split("&");
for(w=0;
w<h.length;
w+=1){t=h[w].split("=");
if(t[0]==="af_web_dp"){q+="&af_web_dp="+t[1]
}else{q+="&af_sub"+j+"="+t[1];
j+=1
}}m=m.substr(0,p)
}f(this).attr("href",m+"?"+o+q)
})
}}}};
c.prototype.openAppMA=function(){var j=f("#login-link, #logout-button");
if(j.length&&this.category()!=="desktop"&&this.category()!==null){var h;
j.each(function(){h=f(this).attr("data-app");
f(this).html(h)
})
}};
c.prototype.adaptiveAppForm=function(){var j=f(".adaptive-app-form"),h;
if(j.length){h=j.attr("src");
if(h.indexOf("type=large")>-1&&window.matchMedia("only screen and (max-width:"+window.matchMedia.IGMeasures.min_width_responsive_form+")").matches){j.attr("src",h.replace("type=large","type=small"))
}else{if(h.indexOf("type=small")>-1&&window.matchMedia("only screen and (min-width:"+window.matchMedia.IGMeasures.min_width_responsive_form+")").matches){j.attr("src",h.replace("type=small","type=large"))
}}}};
c.prototype.orentationChange=function(){f(window).on("orientationchange",function(){g.util.DeviceUtil.adaptiveAppForm()
})
};
c.prototype.anchorOffset=function(){var j=window.location.href.split("#"),h;
if(typeof j[1]!=="undefined"&&j[1].indexOf("=")===-1&&window.matchMedia("only screen and (max-width:"+window.matchMedia.IGMeasures.min_breakpoint+")").matches){j=j[1].indexOf("?")>0?j[1].split("?")[0]:j[1];
if(!!f("#"+j).length){h=f("#"+j).offset();
window.setTimeout(function(){f(window).scrollTop(h.top-(f(".wrapper-header").height()+10))
},300)
}}};
g.util.DeviceUtil=new c()
}(window.PS,window.jQuery));
window.PS=window.PS||{};
window.PS.util=window.PS.util||{};
(function(e,b,c){function a(){var j=document.location.protocol+"//"+document.location.host+"/behaviours/",h=function h(p,o){e.util.Cookie.set("ID",p,7,true);
if(!!o){window.dlog(o)
}},g=function g(o){h("TD=1",o)
},k=function k(){var p=this.getIdCookie(),o;
if(p===null){o="idCookie: no behaviours error, yet ID cookie set to default value; sharing...";
g(o)
}else{o="idCookie: ID cookie set from behaviours service; sharing...";
h(p.replace(/"/g,""),o)
}},f=function f(){var o="idCookie: Unable to reach /behaviours/, setting default value; sharing...";
g(o)
};
return{getIdCookie:function m(){return e.util.Cookie.get("ID")
},processed:function n(){b.publish("idCookie.processed")
},init:function l(){if(!this.getIdCookie()){c.post(j,{0:"0"}).success(k.bind(this)).error(f).complete(this.processed)
}else{this.processed()
}}}
}e.util.idCookie=new a()
}(window.PS,window.PS.util.pubsub,window.jQuery));
window.PS=window.PS||{};
window.PS.util=window.PS.util||{};
(function(a,f){function b(h){var j=":",g=h.length-2;
if(h.substr(h.length-3,1)!==j){return[h.slice(0,g),j,h.slice(g)].join("")
}return h
}function c(){var k,l,g,j,h;
f(".time[data-datetime]").each(function(){g=f(this);
k=g.data("datetime");
if(!!k){if(typeof k==="string"){j=b(k);
h=Date.parse(j)
}else{if(typeof k==="number"){h=k
}else{h=Date.now()
}}l=a.FullDates(h).format("IGNA");
g.html(l)
}})
}function e(){}e.prototype={applyBindings:function(){if(f(".logged-in .maTemplate").length===0){c()
}}};
a.DatesReplacer=new e()
}(window.PS.util,window.jQuery));
window.PS=window.PS||{};
window.PS.util=window.PS.util||{};
window.PS.core=window.PS.core||{};
(function(b){function a(){return{processDependencies:function(){if(b.util.activateVisiblePicturefills){b.util.activateVisiblePicturefills()
}if(b.util.ImageLoader){var c=new b.util.ImageLoader();
c.loadImagesInView()
}if(b.util.BCPlayer){b.util.BCPlayer.init(true)
}if(b.core.LivePrices){b.core.LivePrices.init()
}if(b.util.Promo){b.util.Promo.init()
}if(b.util.initSkype){b.util.initSkype()
}if(b.util.loadComplianceOverlay){var e=new b.util.loadComplianceOverlay()
}}}
}b.util.AjaxContentDependencies=new a()
}(window.PS));
window.PS=window.PS||{};
PS.util=PS.util||{};
(function(b){function a(){}a.prototype.init=function(){var f=jq(".igForm");
var l=b.util.Page.getQuerystring("fname");
var e=b.util.Page.getQuerystring("lname");
var g=b.util.Page.getQuerystring("email");
var h=!!l||!!e||!!g;
var c={forename:l,surname:e,email:g};
var k;
if(!!f.length&&h){for(var j in c){k=f.find("input[name="+j+"]");
if(!!k.length){k.val(decodeURIComponent(c[j]))
}}}};
b.util.FormPrePopulate=new a()
}(PS));
window.PS=window.PS||{};
PS.util=PS.util||{};
(function(e){function c(j,g){var f=g.serializeObject(),h=f.successURL||"",k=f.failureURL||"";
if(j.hasOwnProperty("result")){b(j.result,h,k)
}else{a(k)
}}function b(f,k,l){var h=window.location.pathname.substring(1),g=h.substring(0,h.indexOf("/")),j="/"+g+"/";
switch(f){case"PASSWORD_SENT":if(k){document.location=k
}break;
case"MATCH_NOT_FOUND":e.util.pubsub.publish("matchNotFound");
break;
case"DUPLICATE_MATCH":e.util.pubsub.publish("duplicateMatch");
break;
case"SUSPENDED_ACCOUNT":e.util.pubsub.publish("suspendedAccount");
break;
case"SUSPENDED_CLIENT":e.util.pubsub.publish("suspendedClient");
break;
case"CLIENT_DOCUMENTS_REQUIRED":a(j+"re_account_not_open");
break;
case"CLIENT_INACTIVE_MUST_REAPPLY":a(j+"re_account_closed");
break;
default:a(l);
break
}}function a(f){if(f){document.location=f
}}e.util.ClientSecurity=c
}(PS));
var mboxCopyright="Copyright 1996-2012. Adobe Systems Incorporated. All rights reserved.";
mboxUrlBuilder=function(e,c){this.a=e;
this.b=c;
this.c=new Array();
this.d=function(a){return a
};
this.f=null
};
mboxUrlBuilder.prototype.addNewParameter=function(b,a){this.c.push({name:b,value:a});
return this
};
mboxUrlBuilder.prototype.addParameterIfAbsent=function(e,c){if(c){for(var b=0;
b<this.c.length;
b++){var a=this.c[b];
if(a.name===e){return this
}}this.checkInvalidCharacters(e);
return this.addNewParameter(e,c)
}};
mboxUrlBuilder.prototype.addParameter=function(e,c){this.checkInvalidCharacters(e);
for(var b=0;
b<this.c.length;
b++){var a=this.c[b];
if(a.name===e){a.value=c;
return this
}}return this.addNewParameter(e,c)
};
mboxUrlBuilder.prototype.addParameters=function(e){if(!e){return this
}for(var b=0;
b<e.length;
b++){var a=e[b].indexOf("=");
if(a==-1||a==0){continue
}this.addParameter(e[b].substring(0,a),e[b].substring(a+1,e[b].length))
}return this
};
mboxUrlBuilder.prototype.setServerType=function(a){this.m=a
};
mboxUrlBuilder.prototype.setBasePath=function(a){this.f=a
};
mboxUrlBuilder.prototype.setUrlProcessAction=function(a){this.d=a
};
mboxUrlBuilder.prototype.buildUrl=function(){var h=this.f?this.f:"/m2/"+this.b+"/mbox/"+this.m;
var g=document.location.protocol=="file:"?"http:":document.location.protocol;
var f=g+"//"+this.a+h;
var c=f.indexOf("?")!=-1?"&":"?";
for(var b=0;
b<this.c.length;
b++){var a=this.c[b];
f+=c+encodeURIComponent(a.name)+"="+encodeURIComponent(a.value);
c="&"
}return this.r(this.d(f))
};
mboxUrlBuilder.prototype.getParameters=function(){return this.c
};
mboxUrlBuilder.prototype.setParameters=function(a){this.c=a
};
mboxUrlBuilder.prototype.clone=function(){var b=new mboxUrlBuilder(this.a,this.b);
b.setServerType(this.m);
b.setBasePath(this.f);
b.setUrlProcessAction(this.d);
for(var a=0;
a<this.c.length;
a++){b.addParameter(this.c[a].name,this.c[a].value)
}return b
};
mboxUrlBuilder.prototype.r=function(a){return a.replace(/\"/g,"&quot;").replace(/>/g,"&gt;")
};
mboxUrlBuilder.prototype.checkInvalidCharacters=function(b){var a=new RegExp("('|\")");
if(a.exec(b)){throw"Parameter '"+b+"' contains invalid characters"
}};
mboxStandardFetcher=function(){};
mboxStandardFetcher.prototype.getType=function(){return"standard"
};
mboxStandardFetcher.prototype.fetch=function(a){a.setServerType(this.getType())
};
mboxStandardFetcher.prototype.cancel=function(){};
mboxAjaxFetcher=function(){};
mboxAjaxFetcher.prototype.getType=function(){return"ajax"
};
mboxAjaxFetcher.prototype.fetch=function(a){a.setServerType(this.getType());
var b=a.buildUrl();
this.w=document.createElement("script");
this.w.src=b;
document.body.appendChild(this.w)
};
mboxAjaxFetcher.prototype.cancel=function(){};
mboxMap=function(){this.x=new Object();
this.y=new Array()
};
mboxMap.prototype.put=function(b,a){if(!this.x[b]){this.y[this.y.length]=b
}this.x[b]=a
};
mboxMap.prototype.get=function(a){return this.x[a]
};
mboxMap.prototype.remove=function(a){this.x[a]=undefined
};
mboxMap.prototype.each=function(f){for(var b=0;
b<this.y.length;
b++){var e=this.y[b];
var c=this.x[e];
if(c){var a=f(e,c);
if(a===false){break
}}}};
mboxFactory=function(g,c,f){this.D=false;
this.B=g;
this.C=f;
this.E=new mboxList();
mboxFactories.put(f,this);
this.F=typeof document.createElement("div").replaceChild!="undefined"&&(function(){return true
})()&&typeof document.getElementById!="undefined"&&typeof(window.attachEvent||document.addEventListener||window.addEventListener)!="undefined"&&typeof encodeURIComponent!="undefined";
this.G=this.F&&mboxGetPageParameter("mboxDisable")==null;
var e=f=="default";
this.I=new mboxCookieManager("mbox"+(e?"":("-"+f)),(function(){return mboxCookiePageDomain()
})());
this.G=this.G&&this.I.isEnabled()&&(this.I.getCookie("disable")==null);
if(this.isAdmin()){this.enable()
}this.J();
this.K=mboxGenerateId();
this.L=mboxScreenHeight();
this.M=mboxScreenWidth();
this.N=mboxBrowserWidth();
this.O=mboxBrowserHeight();
this.P=mboxScreenColorDepth();
this.Q=mboxBrowserTimeOffset();
this.R=new mboxSession(this.K,"mboxSession","session",31*60,this.I);
this.S=new mboxPC("PC",1209600,this.I);
this.v=new mboxUrlBuilder(g,c);
this.T(this.v,e);
this.U=new Date().getTime();
this.V=this.U;
var a=this;
this.addOnLoad(function(){a.V=new Date().getTime()
});
if(this.F){this.addOnLoad(function(){a.D=true;
a.getMboxes().each(function(b){b.setFetcher(new mboxAjaxFetcher());
b.finalize()
})
});
if(this.G){this.limitTraffic(100,10368000);
this.Y();
this.Z=new mboxSignaler(function(b,h){return a.create(b,h)
},this.I)
}}};
mboxFactory.prototype.isEnabled=function(){return this.G
};
mboxFactory.prototype.getDisableReason=function(){return this.I.getCookie("disable")
};
mboxFactory.prototype.isSupported=function(){return this.F
};
mboxFactory.prototype.disable=function(a,b){if(typeof a=="undefined"){a=60*60
}if(typeof b=="undefined"){b="unspecified"
}if(!this.isAdmin()){this.G=false;
this.I.setCookie("disable",b,a)
}};
mboxFactory.prototype.enable=function(){this.G=true;
this.I.deleteCookie("disable")
};
mboxFactory.prototype.isAdmin=function(){return document.location.href.indexOf("mboxEnv")!=-1
};
mboxFactory.prototype.limitTraffic=function(a,b){};
mboxFactory.prototype.addOnLoad=function(a){if(this.isDomLoaded()){a()
}else{var b=false;
var c=function(){if(b){return
}b=true;
a()
};
this.gb.push(c);
if(this.isDomLoaded()&&!b){c()
}}};
mboxFactory.prototype.getEllapsedTime=function(){return this.V-this.U
};
mboxFactory.prototype.getEllapsedTimeUntil=function(a){return a-this.U
};
mboxFactory.prototype.getMboxes=function(){return this.E
};
mboxFactory.prototype.get=function(b,a){return this.E.get(b).getById(a||0)
};
mboxFactory.prototype.update=function(b,e){if(!this.isEnabled()){return
}if(!this.isDomLoaded()){var a=this;
this.addOnLoad(function(){a.update(b,e)
});
return
}if(this.E.get(b).length()==0){throw"Mbox "+b+" is not defined"
}this.E.get(b).each(function(c){c.getUrlBuilder().addParameter("mboxPage",mboxGenerateId());
c.load(e)
})
};
mboxFactory.prototype.setVisitorIdParameters=function(h){var c="";
if(typeof Visitor=="undefined"||typeof Visitor.ID_TYPE_AUTHENTICATED=="undefined"||c.length==0){return
}var b="mboxMCVID";
var f="mboxMCGVID";
var l="mboxMCCUSTID";
var j="mboxMCGLH";
var g=Visitor.getInstance(c);
if(g.isAllowed()){var k=g.getGlobalVisitorID(function(e){h.addParameterIfAbsent(f,e);
if(e){h.addParameterIfAbsent(j,g.getGlobalLocationHint())
}});
h.addParameterIfAbsent(f,k);
var a=g.getAnonymousVisitorID(function(e){h.addParameterIfAbsent(b,e)
});
h.addParameterIfAbsent(b,a);
h.addParameterIfAbsent(l,g.getAuthenticatedVisitorID());
if(k){h.addParameterIfAbsent(j,g.getGlobalLocationHint())
}}};
mboxFactory.prototype.create=function(o,l,p){if(!this.isSupported()){return null
}var k=this.v.clone();
k.addParameter("mboxCount",this.E.length()+1);
k.addParameters(l);
this.setVisitorIdParameters(k);
var g=this.E.get(o).length();
var j=this.C+"-"+o+"-"+g;
var f;
if(p){f=new mboxLocatorNode(p)
}else{if(this.D){throw"The page has already been loaded, can't write marker"
}f=new mboxLocatorDefault(j)
}try{var h=this;
var n="mboxImported-"+j;
var b=new mbox(o,g,k,f,n);
if(this.G){b.setFetcher(this.D?new mboxAjaxFetcher():new mboxStandardFetcher())
}b.setOnError(function(c,e){b.setMessage(c);
b.activate();
if(!b.isActivated()){h.disable(60*60,c);
window.location.reload(false)
}});
this.E.add(b)
}catch(a){this.disable();
throw'Failed creating mbox "'+o+'", the error was: '+a
}var m=new Date();
k.addParameter("mboxTime",m.getTime()-(m.getTimezoneOffset()*60000));
return b
};
mboxFactory.prototype.getCookieManager=function(){return this.I
};
mboxFactory.prototype.getPageId=function(){return this.K
};
mboxFactory.prototype.getPCId=function(){return this.S
};
mboxFactory.prototype.getSessionId=function(){return this.R
};
mboxFactory.prototype.getSignaler=function(){return this.Z
};
mboxFactory.prototype.getUrlBuilder=function(){return this.v
};
mboxFactory.prototype.T=function(g,c){g.addParameter("mboxHost",document.location.hostname).addParameter("mboxSession",this.R.getId());
if(!c){g.addParameter("mboxFactoryId",this.C)
}if(this.S.getId()!=null){g.addParameter("mboxPC",this.S.getId())
}if(!!PS.util.Cookie){var b=PS.util.Cookie.get("ID");
var a=false;
var f=false;
if(!!b){if(b.indexOf(":CS")>-1){a=true
}if(b.indexOf(":demo-account")>-1){f=true
}}g.addParameter("igClient",a);
g.addParameter("igDemoAccount",f)
}g.addParameter("mboxPage",this.K);
g.addParameter("screenHeight",this.L);
g.addParameter("screenWidth",this.M);
g.addParameter("browserWidth",this.N);
g.addParameter("browserHeight",this.O);
g.addParameter("browserTimeOffset",this.Q);
g.addParameter("colorDepth",this.P);
if(!!PS.util.Cookie){var b=PS.util.Cookie.get("ID");
var a=false;
var f=false;
if(!!b){if(b.indexOf(":CS")>-1){a=true
}if(b.indexOf(":demo-account")>-1){f=true
}}g.addParameter("igClient",a);
g.addParameter("igDemoAccount",f)
}g.setUrlProcessAction(function(j){j+="&mboxURL="+encodeURIComponent(document.location);
var h=encodeURIComponent(document.referrer);
if(j.length+h.length<2000){j+="&mboxReferrer="+h
}j+="&mboxVersion="+mboxVersion;
return j
})
};
mboxFactory.prototype.rb=function(){return""
};
mboxFactory.prototype.Y=function(){};
mboxFactory.prototype.isDomLoaded=function(){return this.D
};
mboxFactory.prototype.J=function(){if(this.gb!=null){return
}this.gb=new Array();
var a=this;
(function(){var f=document.addEventListener?"DOMContentLoaded":"onreadystatechange";
var b=false;
var c=function(){if(b){return
}b=true;
for(var g=0;
g<a.gb.length;
++g){a.gb[g]()
}};
if(document.addEventListener){document.addEventListener(f,function(){document.removeEventListener(f,arguments.callee,false);
c()
},false);
window.addEventListener("load",function(){document.removeEventListener("load",arguments.callee,false);
c()
},false)
}else{if(document.attachEvent){if(self!==self.top){document.attachEvent(f,function(){if(document.readyState==="complete"){document.detachEvent(f,arguments.callee);
c()
}})
}else{var e=function(){try{document.documentElement.doScroll("left");
c()
}catch(g){setTimeout(e,13)
}};
e()
}}}if(document.readyState==="complete"){c()
}})()
};
mboxSignaler=function(g,c){this.I=c;
var a=c.getCookieNames("signal-");
for(var e=0;
e<a.length;
e++){var b=a[e];
var f=c.getCookie(b).split("&");
var h=g(f[0],f);
h.load();
c.deleteCookie(b)
}};
mboxSignaler.prototype.signal=function(a,b){this.I.setCookie("signal-"+a,mboxShiftArray(arguments).join("&"),45*60)
};
mboxList=function(){this.E=new Array()
};
mboxList.prototype.add=function(a){if(a!=null){this.E[this.E.length]=a
}};
mboxList.prototype.get=function(b){var a=new mboxList();
for(var c=0;
c<this.E.length;
c++){var e=this.E[c];
if(e.getName()==b){a.add(e)
}}return a
};
mboxList.prototype.getById=function(a){return this.E[a]
};
mboxList.prototype.length=function(){return this.E.length
};
mboxList.prototype.each=function(b){if(typeof b!="function"){throw"Action must be a function, was: "+typeof(b)
}for(var a=0;
a<this.E.length;
a++){b(this.E[a])
}};
mboxLocatorDefault=function(a){this.g="mboxMarker-"+a
};
mboxLocatorDefault.prototype.locate=function(){var a=document.getElementById(this.g);
while(a!=null){if(a.nodeType==1){if(a.className=="mboxDefault"){return a
}}a=a.previousSibling
}return null
};
mboxLocatorDefault.prototype.force=function(){var a=document.createElement("div");
a.className="mboxDefault";
var b=document.getElementById(this.g);
b.parentNode.insertBefore(a,b);
return a
};
mboxLocatorNode=function(a){this.Db=a
};
mboxLocatorNode.prototype.locate=function(){return typeof this.Db=="string"?document.getElementById(this.Db):this.Db
};
mboxLocatorNode.prototype.force=function(){return null
};
mboxCreate=function(a){var b=mboxFactoryDefault.create(a,mboxShiftArray(arguments));
if(b){b.load()
}return b
};
mboxDefine=function(b,a){var c=mboxFactoryDefault.create(a,mboxShiftArray(mboxShiftArray(arguments)),b);
return c
};
mboxUpdate=function(a){mboxFactoryDefault.update(a,mboxShiftArray(arguments))
};
mbox=function(e,a,b,c,f){this.Jb=null;
this.Kb=0;
this.lb=c;
this.mb=f;
this.Lb=null;
this.Mb=new mboxOfferContent();
this.Eb=null;
this.v=b;
this.message="";
this.Nb=new Object();
this.Ob=0;
this.Hb=a;
this.g=e;
this.Pb();
b.addParameter("mbox",e).addParameter("mboxId",a);
this.Qb=function(){};
this.Rb=function(){};
this.Sb=null
};
mbox.prototype.getId=function(){return this.Hb
};
mbox.prototype.Pb=function(){if(this.g.length>250){throw"Mbox Name "+this.g+" exceeds max length of 250 characters."
}else{if(this.g.match(/^\s+|\s+$/g)){throw"Mbox Name "+this.g+" has leading/trailing whitespace(s)."
}}};
mbox.prototype.getName=function(){return this.g
};
mbox.prototype.getParameters=function(){var e=this.v.getParameters();
var a=new Array();
for(var b=0;
b<e.length;
b++){if(e[b].name.indexOf("mbox")!=0){a[a.length]=e[b].name+"="+e[b].value
}}return a
};
mbox.prototype.setOnLoad=function(a){this.Rb=a;
return this
};
mbox.prototype.setMessage=function(a){this.message=a;
return this
};
mbox.prototype.setOnError=function(a){this.Qb=a;
return this
};
mbox.prototype.setFetcher=function(a){if(this.Lb){this.Lb.cancel()
}this.Lb=a;
return this
};
mbox.prototype.getFetcher=function(){return this.Lb
};
mbox.prototype.load=function(e){if(this.Lb==null){return this
}this.setEventTime("load.start");
this.cancelTimeout();
this.Kb=0;
var b=(e&&e.length>0)?this.v.clone().addParameters(e):this.v;
this.Lb.fetch(b);
var a=this;
this.Ub=setTimeout(function(){a.Qb("browser timeout",a.Lb.getType())
},15000);
this.setEventTime("load.end");
return this
};
mbox.prototype.loaded=function(){this.cancelTimeout();
if(!this.activate()){var a=this;
setTimeout(function(){a.loaded()
},100)
}};
mbox.prototype.activate=function(){if(this.Kb){return this.Kb
}this.setEventTime("activate"+ ++this.Ob+".start");
if(this.show()){this.cancelTimeout();
this.Kb=1
}this.setEventTime("activate"+this.Ob+".end");
return this.Kb
};
mbox.prototype.isActivated=function(){return this.Kb
};
mbox.prototype.setOffer=function(a){if(a&&a.show&&a.setOnLoad){this.Mb=a
}else{throw"Invalid offer"
}return this
};
mbox.prototype.getOffer=function(){return this.Mb
};
mbox.prototype.show=function(){this.setEventTime("show.start");
var a=this.Mb.show(this);
this.setEventTime(a==1?"show.end.ok":"show.end");
return a
};
mbox.prototype.showContent=function(a){if(a==null){return 0
}if(this.Eb==null||!this.Eb.parentNode){this.Eb=this.getDefaultDiv();
if(this.Eb==null){return 0
}}if(this.Eb!=a){this.Wb(this.Eb);
this.Eb.parentNode.replaceChild(a,this.Eb);
this.Eb=a
}this.Xb(a);
this.Rb();
return 1
};
mbox.prototype.hide=function(){this.setEventTime("hide.start");
var a=this.showContent(this.getDefaultDiv());
this.setEventTime(a==1?"hide.end.ok":"hide.end.fail");
return a
};
mbox.prototype.finalize=function(){this.setEventTime("finalize.start");
this.cancelTimeout();
if(this.getDefaultDiv()==null){if(this.lb.force()!=null){this.setMessage("No default content, an empty one has been added")
}else{this.setMessage("Unable to locate mbox")
}}if(!this.activate()){this.hide();
this.setEventTime("finalize.end.hide")
}this.setEventTime("finalize.end.ok")
};
mbox.prototype.cancelTimeout=function(){if(this.Ub){clearTimeout(this.Ub)
}if(this.Lb!=null){this.Lb.cancel()
}};
mbox.prototype.getDiv=function(){return this.Eb
};
mbox.prototype.getDefaultDiv=function(){if(this.Sb==null){this.Sb=this.lb.locate()
}return this.Sb
};
mbox.prototype.setEventTime=function(a){this.Nb[a]=(new Date()).getTime()
};
mbox.prototype.getEventTimes=function(){return this.Nb
};
mbox.prototype.getImportName=function(){return this.mb
};
mbox.prototype.getURL=function(){return this.v.buildUrl()
};
mbox.prototype.getUrlBuilder=function(){return this.v
};
mbox.prototype.Zb=function(a){return a.style.display!="none"
};
mbox.prototype.Xb=function(a){this._b(a,true)
};
mbox.prototype.Wb=function(a){this._b(a,false)
};
mbox.prototype._b=function(b,a){b.style.visibility=a?"visible":"hidden";
b.style.display=a?"block":"none"
};
mboxOfferContent=function(){this.Rb=function(){}
};
mboxOfferContent.prototype.show=function(b){var a=b.showContent(document.getElementById(b.getImportName()));
if(a==1){this.Rb()
}return a
};
mboxOfferContent.prototype.setOnLoad=function(a){this.Rb=a
};
mboxOfferAjax=function(a){this.Vb=a;
this.Rb=function(){}
};
mboxOfferAjax.prototype.setOnLoad=function(a){this.Rb=a
};
mboxOfferAjax.prototype.show=function(c){var b=document.createElement("div");
b.id=c.getImportName();
b.innerHTML=this.Vb;
var a=c.showContent(b);
if(a==1){this.Rb()
}return a
};
mboxOfferDefault=function(){this.Rb=function(){}
};
mboxOfferDefault.prototype.setOnLoad=function(a){this.Rb=a
};
mboxOfferDefault.prototype.show=function(b){var a=b.hide();
if(a==1){this.Rb()
}return a
};
mboxCookieManager=function mboxCookieManager(a,b){this.g=a;
this.cc=b==""||b.indexOf(".")==-1?"":"; domain="+b;
this.dc=new mboxMap();
this.loadCookies()
};
mboxCookieManager.prototype.isEnabled=function(){this.setCookie("check","true",60);
this.loadCookies();
return this.getCookie("check")=="true"
};
mboxCookieManager.prototype.setCookie=function(c,b,e){if(typeof c!="undefined"&&typeof b!="undefined"&&typeof e!="undefined"){var a=new Object();
a.name=c;
a.value=escape(b);
a.expireOn=Math.ceil(e+new Date().getTime()/1000);
this.dc.put(c,a);
this.saveCookies()
}};
mboxCookieManager.prototype.getCookie=function(b){var a=this.dc.get(b);
return a?unescape(a.value):null
};
mboxCookieManager.prototype.deleteCookie=function(a){this.dc.remove(a);
this.saveCookies()
};
mboxCookieManager.prototype.getCookieNames=function(a){var b=new Array();
this.dc.each(function(e,c){if(e.indexOf(a)==0){b[b.length]=e
}});
return b
};
mboxCookieManager.prototype.saveCookies=function(){var f=false;
var a="disable";
var b=new Array();
var c=0;
this.dc.each(function(j,h){if(!f||j===a){b[b.length]=j+"#"+h.value+"#"+h.expireOn;
if(c<h.expireOn){c=h.expireOn
}}});
var e=new Date(c*1000);
document.cookie=this.g+"="+b.join("|")+"; expires="+e.toGMTString()+"; path=/"+this.cc
};
mboxCookieManager.prototype.loadCookies=function(){this.dc=new mboxMap();
var g=document.cookie.indexOf(this.g+"=");
if(g!=-1){var h=document.cookie.indexOf(";",g);
if(h==-1){h=document.cookie.indexOf(",",g);
if(h==-1){h=document.cookie.length
}}var a=document.cookie.substring(g+this.g.length+1,h).split("|");
var c=Math.ceil(new Date().getTime()/1000);
for(var e=0;
e<a.length;
e++){var b=a[e].split("#");
if(c<=b[2]){var f=new Object();
f.name=b[0];
f.value=b[1];
f.expireOn=b[2];
this.dc.put(f.name,f)
}}}};
mboxSession=function(e,f,b,a,c){this.sc=f;
this.zb=b;
this.tc=a;
this.I=c;
this.uc=false;
this.Hb=typeof mboxForceSessionId!="undefined"?mboxForceSessionId:mboxGetPageParameter(this.sc);
if(this.Hb==null||this.Hb.length==0){this.Hb=c.getCookie(b);
if(this.Hb==null||this.Hb.length==0){this.Hb=e;
this.uc=true
}}c.setCookie(b,this.Hb,a)
};
mboxSession.prototype.getId=function(){return this.Hb
};
mboxSession.prototype.forceId=function(a){this.Hb=a;
this.I.setCookie(this.zb,this.Hb,this.tc)
};
mboxPC=function(b,a,c){this.zb=b;
this.tc=a;
this.I=c;
this.Hb=typeof mboxForcePCId!="undefined"?mboxForcePCId:c.getCookie(b);
if(this.Hb!=null){c.setCookie(b,this.Hb,a)
}};
mboxPC.prototype.getId=function(){return this.Hb
};
mboxPC.prototype.forceId=function(a){if(this.Hb!=a){this.Hb=a;
this.I.setCookie(this.zb,this.Hb,this.tc);
return true
}return false
};
mboxGetPageParameter=function(c){var a=null;
var b=new RegExp(c+"=([^&]*)");
var e=b.exec(document.location);
if(e!=null&&e.length>=2){a=e[1]
}return a
};
mboxSetCookie=function(b,a,c){return mboxFactoryDefault.getCookieManager().setCookie(b,a,c)
};
mboxGetCookie=function(a){return mboxFactoryDefault.getCookieManager().getCookie(a)
};
mboxCookiePageDomain=function(){var c=(/([^:]*)(:[0-9]{0,5})?/).exec(document.location.host)[1];
var b=/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/;
if(!b.exec(c)){var a=(/([^\.]+\.[^\.]{3}|[^\.]+\.[^\.]+\.[^\.]{2})$/).exec(c);
if(a){c=a[0]
}}return c?c:""
};
mboxShiftArray=function(c){var a=new Array();
for(var b=1;
b<c.length;
b++){a[a.length]=c[b]
}return a
};
mboxGenerateId=function(){return(new Date()).getTime()+"-"+Math.floor(Math.random()*999999)
};
mboxScreenHeight=function(){return screen.height
};
mboxScreenWidth=function(){return screen.width
};
mboxBrowserWidth=function(){return(window.innerWidth)?window.innerWidth:document.documentElement?document.documentElement.clientWidth:document.body.clientWidth
};
mboxBrowserHeight=function(){return(window.innerHeight)?window.innerHeight:document.documentElement?document.documentElement.clientHeight:document.body.clientHeight
};
mboxBrowserTimeOffset=function(){return -new Date().getTimezoneOffset()
};
mboxScreenColorDepth=function(){return screen.pixelDepth
};
if(typeof mboxVersion=="undefined"){var mboxVersion=43;
var mboxFactories=new mboxMap();
var mboxFactoryDefault=new mboxFactory("iggroup.tt.omtrdc.net","iggroup","default")
}if(mboxGetPageParameter("mboxDebug")!=null||mboxFactoryDefault.getCookieManager().getCookie("debug")!=null){setTimeout(function(){if(typeof mboxDebugLoaded=="undefined"){alert("Could not load the remote debug.\nPlease check your connection to Test&amp;Target servers")
}},60*60)
}mboxScPluginFetcher=function(a,c){this.b=a;
this.Bc=c
};
mboxScPluginFetcher.prototype.Cc=function(a){a.setBasePath("/m2/"+this.b+"/sc/standard");
this.Dc(a);
var b=a.buildUrl();
b+="&scPluginVersion=1";
return b
};
mboxScPluginFetcher.prototype.Dc=function(a){var c=["dynamicVariablePrefix","visitorID","vmk","ppu","charSet","visitorNamespace","cookieDomainPeriods","cookieLifetime","pageName","currencyCode","variableProvider","channel","server","pageType","transactionID","purchaseID","campaign","state","zip","events","products","linkName","linkType","resolution","colorDepth","javascriptVersion","javaEnabled","cookiesEnabled","browserWidth","browserHeight","connectionType","homepage","pe","pev1","pev2","pev3","visitorSampling","visitorSamplingGroup","dynamicAccountSelection","dynamicAccountList","dynamicAccountMatch","trackDownloadLinks","trackExternalLinks","trackInlineStats","linkLeaveQueryString","linkDownloadFileTypes","linkExternalFilters","linkInternalFilters","linkTrackVars","linkTrackEvents","linkNames","lnk","eo"];
for(var b=0;
b<c.length;
b++){this.Fc(c[b],a)
}for(var b=1;
b<=75;
b++){this.Fc("prop"+b,a);
this.Fc("eVar"+b,a);
this.Fc("hier"+b,a)
}};
mboxScPluginFetcher.prototype.Fc=function(c,a){var b=this.Bc[c];
if(typeof(b)==="undefined"||b===null||b===""){return
}a.addParameter(c,b)
};
mboxScPluginFetcher.prototype.cancel=function(){};
mboxScPluginFetcher.prototype.fetch=function(a){a.setServerType(this.getType());
var b=this.Cc(a);
this.w=document.createElement("script");
this.w.src=b;
document.body.appendChild(this.w)
};
mboxScPluginFetcher.prototype.getType=function(){return"ajax"
};
function mboxLoadSCPlugin(a){if(!a){return null
}a.m_tt=function(c){var b=c.m_i("tt");
b.G=true;
b.b="iggroup";
b._t=function(){if(!this.isEnabled()){return
}var f=this.Ic();
if(f){var e=new mboxScPluginFetcher(this.b,this.s);
f.setFetcher(e);
f.load()
}};
b.isEnabled=function(){return this.G&&mboxFactoryDefault.isEnabled()
};
b.Ic=function(){var e=this.Jc();
var f=document.createElement("DIV");
return mboxFactoryDefault.create(e,new Array(),f)
};
b.Jc=function(){var e=this.s.events&&this.s.events.indexOf("purchase")!=-1;
return"SiteCatalyst: "+(e?"purchase":"event")
}
};
return a.loadModule("tt")
}mboxVizTargetUrl=function(b){if(!mboxFactoryDefault.isEnabled()){return
}var a=mboxFactoryDefault.getUrlBuilder().clone();
a.setBasePath("/m2/iggroup/viztarget");
a.addParameter("mbox",b);
a.addParameter("mboxId",0);
a.addParameter("mboxCount",mboxFactoryDefault.getMboxes().length()+1);
var e=new Date();
a.addParameter("mboxTime",e.getTime()-(e.getTimezoneOffset()*60000));
a.addParameter("mboxPage",mboxGenerateId());
var f=mboxShiftArray(arguments);
if(f&&f.length>0){a.addParameters(f)
}return a.buildUrl()
};
var mboxTrack=function(h,g){var a,b,c,e=mboxFactoryDefault;
if(e.getMboxes().length()>0){a=e.getMboxes().getById(0);
b=a.getURL().replace("mbox="+a.getName(),"mbox="+h).replace("mboxPage="+e.getPageId(),"mboxPage="+mboxGenerateId())+"&"+g,c=new Image();
c.style.display="none";
c.src=b;
document.body.appendChild(c)
}else{e.getSignaler().signal("onEvent",h+"&"+g)
}},mboxTrackLink=function(c,b,a){mboxTrack(c,b);
setTimeout("location='"+a+"'",500)
};
function tt_Log(a){mboxTrack("IG_onClick","Destination="+a)
}function tt_Redirect(a){mboxTrack("IG_onClick","Destination="+a);
setTimeout("location='"+a+"'",500)
}window.PS=window.PS||{};
PS.util=PS.util||{};
(function(b){function a(){var f="igComAsync";
var k=jq(".wrapper")[0];
var h=analytics||{};
var c;
var j="";
var g="";
var e=b.util.jspVars.get("tandt.customID");
if(e&&e.length>1){dlog("TandT site-specific mbox set as",e);
f=e
}if(h.path&&h.path.length>4&&h.cq_page_name){c=h.path.split("/");
j=c[4]+":"+c[5];
g=h.cq_page_name
}this.createMbox(f,k,j,g)
}a.prototype.createMbox=function(c,h,g,e){var f=document.createElement("div");
h=h||document.createElement("div");
f.id=c;
h.appendChild(f);
if(!b.core.CQMode.inAuthor&&(typeof mboxDefine!=="undefined")&&(typeof mboxUpdate!=="undefined")){mboxDefine(c,c,"cqsection="+g,"cqpage="+e);
mboxUpdate(c)
}};
a.prototype.setTimeout=function(){var c=b.util.jspVars.get("tandt.timeout")||0;
if(c>0&&!isNaN(c)&&!b.core.CQMode.inAuthor){dlog("TandT setting custom timeout to",c);
window.setTimeout(function(){b.util.pubsub.publish("tandt.finished")
},c)
}};
a.prototype.storePublishedSegment=function(c,e){e=b.util.TandT.normalizeSegment(e);
b.storage.LocalQueue.storeUnique("tandt.publishedSegments",e);
b.util.pubsub.publish("tandt.finished")
};
a.prototype.finished=function(f,j){var h=b.storage.LocalQueue.retrieveAll("tandt.publishedSegments");
var e=[];
var c="";
if(h.length===0){h.push({value:"none"})
}for(var g=0;
g<h.length;
g++){e.push(h[g].value)
}c=e.join(" ");
b.util.pubsub.publish("tandt.process",c);
b.util.pubsub.removeTopic("tandt.responded");
b.util.pubsub.removeTopic("tandt.process");
b.util.pubsub.removeTopic("tandt.finished");
b.storage.LocalQueue.remove("tandt.publishedSegments")
};
a.prototype.addSegmentToBodyClass=function(j,h){var g=document.getElementsByTagName("body")[0];
var f="";
var c;
h=b.util.TandT.normalizeSegment(h);
if(j!==null){dlog("TandT event",j,"has fired, identifying the user as",h)
}c="tt_"+h;
if(g.className.indexOf("tt_")>-1){f="tt_"+g.className.split("tt_")[1].split(" ")[0];
b.util.removeClass(g,f);
dlog('TandT removed "'+f+'" from body tag...')
}b.util.addClass(g,c);
dlog('TandT added "'+c+'" to body tag...')
};
a.prototype.normalizeSegment=function(e){var c=e;
if(e===null){c="none"
}else{if(e.indexOf("tt_")===0){c=e.replace("tt_","")
}}return c
};
b.util.TandT=new a();
b.util.pubsub.subscribe("tandt.responded",b.util.TandT.addSegmentToBodyClass);
b.util.pubsub.subscribe("tandt.responded",b.util.TandT.storePublishedSegment);
b.util.pubsub.subscribe("tandt.finished",b.util.TandT.finished);
b.util.TandT.setTimeout()
}(PS));
window.PS=window.PS||{};
PS.util=PS.util||{};
PS.util.TandT=PS.util.TandT||{};
(function(b){var a=function(){};
a.prototype.init=function(k,j){var f;
var c;
var g;
var h;
dlog("TandT: Link Replacement: Beginning link replacement script");
dlog("TandT: Link Replacement: Checking segment is prepended with tt_");
if((!!j)&&j.indexOf("tt_")!==0){j="tt_"+j
}dlog("TandT: Link Replacement: User segment is: "+j);
f=b.util.jspVars.get("tandt.linkReplacements");
if(f&&f.length>0){c=a.prototype.formatLinkArray(f);
dlog("TandT: Link Replacement: this object contains details on what links will be replaced, and to what: ",c);
for(g in c){h=c[g];
dlog("TandT: Link Replacement: Looping through current URLs to replace. Currently dealing with :"+g);
if(j!==undefined&&h.newUrls[j]!==undefined&&h.linksOnPage.length>0){jq.each(h.linksOnPage,function(e){dlog("TandT: Link Replacement: Replacing: "+this+", with: "+h.newUrls[j]);
jq(this).attr("href",h.newUrls[j])
})
}else{dlog("TandT: Link Replacement: There are no links to "+g+" to replace for this user's segment")
}}}};
a.prototype.formatLinkArray=function(e){var c={};
var f;
var g;
for(f=0;
f<e.length;
f++){g=e[f];
if(g.vanityCurrentUrl!=undefined){g.currentUrl=g.vanityCurrentUrl
}if(g.vanityNewUrl!=undefined){g.newUrl=g.vanityNewUrl
}if(!(g.currentUrl in c)){c[g.currentUrl]={};
c[g.currentUrl].newUrls={};
c[g.currentUrl].linksOnPage=a.prototype.findLinks(g.currentUrl)
}if(a.prototype.validateNewUrl(g.newUrl)){c[g.currentUrl].newUrls[g.segment]=g.newUrl
}}return c
};
a.prototype.findLinks=function(c){return jq("a[href='"+c+"']")
};
a.prototype.validateNewUrl=function(c){if(c===undefined){return false
}return true
};
b.util.TandT.ReplaceLinks=new a();
b.util.pubsub.subscribe("tandt.process",b.util.TandT.ReplaceLinks.init)
}(PS));
window.PS=window.PS||{};
PS.util=PS.util||{};
PS.util.TandT=PS.util.TandT||{};
(function(c){var a;
var b=function(){};
b.prototype.init=function(f,h){var g;
if(c.core.CQMode.inEdit||c.core.CQMode.inDesign){return false
}dlog("TandT: content replacement: Beginning content replacement script");
a=b.prototype.makeTtClass(h);
g=jq(".mboxPanelParent");
g.each(b.prototype.processMboxSection)
};
b.prototype.makeTtClass=function(h){var g=function(k){var j=k;
if(k&&k.indexOf("tt_")!==0){j="tt_"+k
}return j
};
var f=h.split(" ");
dlog("TandT: content replacement: Checking segment is prepended with tt_");
for(var e=0;
e<f.length;
e++){f[e]=g(f[e])
}f=f.join(" ");
dlog("TandT: content replacement: User segment is: "+f);
return f
};
b.prototype.processMboxSection=function(g,e){var j;
var m;
var h;
var k;
var n=jq(e);
var l=n.find(".mboxAllContent");
var f;
j=l.data("content");
f=n.find(".mboxPanelChild");
m=f.data("segment");
h=j[0];
if((!!m)&&(a!=="tt_none")){k=b.prototype.requestNewContent(j,a);
if(k!==false){dlog("TandT: content replacement: replacing this panel: ",f);
f.replaceWith(k);
f.data("segment",a)
}else{dlog("TandT: content replacement: No segment match for this user. Showing default panel content")
}c.util.pubsub.publish("tandt.newContentLoaded",null)
}else{dlog("TandT: content replacement: showing default panel content")
}b.prototype.showContent(n)
};
b.prototype.requestNewContent=function(h,k){var j;
var l;
var g=false;
var f;
j=h.length;
for(var e=0;
g===false&&e<j;
e++){if(b.prototype.doesContentSegmentDataMeetCriteria(h[e],a)){l=h[e].path;
g=true
}}if(l!==""&&l!==undefined){jq.ajax(l,{async:false}).done(function(m){dlog("TandT: content replacement: new content for panel: ",m);
f=m
})
}else{f=false
}return f
};
b.prototype.doesContentSegmentDataMeetCriteria=function(m,n){var l=false;
var o=0;
var k=m.mode||"any";
var q=m.segment||"";
var e=q.split(" ");
var p=n.split(" ");
var g=p.length;
var r=e.length;
for(var h=0;
h<g;
h++){for(var f=0;
f<r;
f++){if(e[f]===p[h]){o++
}}}if((k==="any"&&o>0)||(k==="all"&&o===r)){l=true
}return l
};
b.prototype.showContent=function(f){var e=f.find(".mboxPanel");
if(e.hasClass("mbox-hidden")){e.removeClass("mbox-hidden");
f.find(".mboxPanelChild").css({opacity:0,visibility:"visible"}).animate({opacity:1},400)
}};
c.util.TandT.ReplaceContent=new b();
c.util.pubsub.subscribe("tandt.process",c.util.TandT.ReplaceContent.init)
}(PS));
window.PS=window.PS||{};
PS.util=PS.util||{};
PS.util.TandT=PS.util.TandT||{};
(function(b){var a=function(){};
a.prototype.init=function(m,k){dlog("TandT: hero panel update: Beginning hero panel update script");
var c=jq(".top-content-page");
var j=jq(".loader");
var n=function(){return c.length>0
};
if(!n()){if(j.length&&(j.css("visibility")==="hidden")){j.css({visibility:"visible"}).hide().fadeIn("slow")
}}var f=false;
if(b.core.CQMode.inEdit||b.core.CQMode.inDesign){f=true
}var h=jq(".hero-panel");
var q=h.find(".fluid-width");
if(!n()){if(h.length==0){if(j.length){j.fadeOut("slow")
}return
}}if(!a.prototype.defaultColorClasses){a.prototype.defaultColorClasses=h.attr("class");
a.prototype.defaultAdditionalColorClasses=q.attr("class")
}dlog("TandT: hero panel update: Checking segment is prepended with tt_");
if(k&&k.indexOf("tt_")!==0){k="tt_"+k
}dlog("TandT: hero panel update: User segment is: "+k);
var p=b.util.jspVars.get("heroPanelSegmentSettings")||"{}";
var o={};
if(!!p){o=JSON.parse(p)
}if(!o[k]){k="hpDefault";
if(!!a.prototype.defaultColorClasses){h.attr("class",a.prototype.defaultColorClasses);
q.attr("class",a.prototype.defaultAdditionalColorClasses)
}}if(!f&&!!o[k]){var g={};
var l=o[k];
if(!!o.hpDefault){g=o.hpDefault
}q.removeClass(g.additionalColorScheme||"");
q.addClass(l.additionalColorScheme||"");
h.removeClass(g.colorScheme||"");
h.addClass(l.colorScheme||"");
h.attr("style","background-image: url('"+l.imagePath+"');")
}if(!n()){if(j.length){j.fadeOut("slow")
}h.css({visibility:"visible"}).hide().fadeIn("slow")
}};
b.util.TandT.HeroPanelUpdater=new a();
b.util.pubsub.subscribe("tandt.process",b.util.TandT.HeroPanelUpdater.init)
}(PS));
window.PS=window.PS||{};
PS.util=PS.util||{};
(function(e){var b=false;
var c=[".pdf"];
function a(){var f=this;
f.init()
}a.prototype.init=function(){b=jq("body").hasClass("tablet");
if(b){this.fixTabletLinkToFiles()
}};
a.prototype.fixTabletLinkToFiles=function(){var f=jq("a");
f.each(function(){var h=jq(this).attr("href");
for(var g=0;
g<c.length;
g++){var j=c[g];
if((!!h)&&(h.indexOf(j,h.length-j.length)!=-1)){if(h.indexOf("t/",h.indexOf("/"))!=-1){h=h.replace("/t/","/")
}}}jq(this).attr("href",h)
})
};
e.util.LinkReference=a
}(PS));
window.PS=window.PS||{};
PS.util=PS.util||{};
(function(b){function a(){this.s7BaseURL=location.protocol+"//igindex.scene7.com/";
this.s7ViewerConfig={flyoutLibraryPath:"",flyoutInitFilePath:"",assetContext:"is/content/",locale:"en",company:"IGIndex",useDivSize:false,roots:["/skins/","/s7viewers/"],cssRoot:"/skins/",serverurl:this.s7BaseURL+"is/image/",isr:this.s7BaseURL,streamingRoot:"rtmp://s7strmn2.scene7.com/s7strmn2/e2",progressiveRoot:this.s7BaseURL+"e2/"};
this.$vidPlayer=jq('<div class="s7ViewerContainer" id="s7ViewerContainer" style=""></div>')
}a.prototype.s7BaseURL=null;
a.prototype.s7ViewerConfig=null;
a.prototype.s7AssetName=null;
a.prototype.$vidPlayer=null;
a.prototype.libVidStyles="width:480px;height:270px;background-color:#362f2d;";
a.prototype.youtubeWidth=720;
a.prototype.youtubeHeight=405;
a.prototype.setAutoplay=function(c){this.s7ViewerConfig.dataParams=this.s7ViewerConfig.dataParams||{};
this.s7ViewerConfig.dataParams.autoplay=c
};
a.prototype.init=function(){var c=jq(".igVideoLibrary:visible,.s7ViewerContainer:visible");
var e=jq(".mPanel .igVideoLibrary, .mPanel .s7ViewerContainer");
var f=jq("#jplayer-holder");
if(c.length>0&&c.length>e.length){if(jq(".entry")){jq("ul.entry .video-img:even").addClass("even");
jq("ul.entry .video-img:odd").addClass("odd")
}this.prep(c[0])
}if(f.length>0){this.loadJplayer(f)
}this.transcript();
jq(".igVideoLibrary .video-img").hover(function(){jq(this).addClass("video-img-hover")
},function(){jq(this).removeClass("video-img-hover")
});
if(!jq("body").hasClass("tablet")){jq(".igVideoLibrary .entry > li").each(function(){var g=jq(this).find(".video-img").size();
jq(this).css("width",(g*121)+"px")
})
}};
a.prototype.prep=function(f){var c=jq(f);
var k=c.parents("#lightbox").size()>0;
if(k){this.libVidStyles="width:720px;height:405px;"
}if(f.className&&f.className.indexOf("igVideoLibrary")>-1){if(k){this.setAutoplay(true)
}this.$vidPlayer.attr("style",this.libVidStyles);
this.$vidPlayer.prependTo(c.find(".video-library")[0]);
this.s7AssetName=c.find(".video-img li:first a").attr("data-lib-asset");
this.load();
this.thumbs(c)
}else{if(f.className.indexOf("s7ViewerContainer")>-1){if(c.attr("data-company")){this.s7ViewerConfig.company=c.attr("data-company")
}if(c.attr("data-params")){try{var l=jq("<div />").html(c.attr("data-params")).text();
this.s7ViewerConfig.dataParams=jq.parseJSON(l)
}catch(j){this.s7ViewerConfig.dataParams={}
}c.removeAttr("data-params")
}if(c.attr("style")){this.$vidPlayer.attr("style",c.attr("style"))
}if(c.attr("data-posterimage")){this.s7ViewerConfig.posterimage=c.attr("data-posterimage")
}if(c.attr("data-asset")){this.$vidPlayer.appendTo(c);
this.s7AssetName=c.attr("data-asset");
this.load()
}}}if(!k){var h=window.location.hash;
if(h.length>0){var h=h.substr(1);
var g=document.getElementById(h);
if(g&&h.substr(0,3)!=="lb-"){if(jq(g).attr("data-asset")===this.s7AssetName){if(!jq(g).attr("played")){this.setAutoplay(true);
jq(g).attr("played","true")
}else{if(jq("#mask").size()>0){this.setAutoplay(false)
}}}}}}};
a.prototype.thumbs=function(c){var e=this;
if(c.find(".video-lib-thumb")!=-1){c.find(".video-img").on("click",function(f){f.preventDefault();
e.s7AssetName=jq(this).find(".video-lib-thumb").attr("data-lib-asset");
e.load()
})
}};
a.prototype.YoutubeEmbeddable=function(e){var c='<object width="{width}" height="{height}"><param name="movie" value="https://www.youtube.com/v/{video_id}?version=3"><param name="allowFullScreen" value="true"><param name="allowScriptAccess" value="always"><param name="wmode" value="transparent"><embed src="https://www.youtube.com/v/{video_id}?version=3" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" width="{width}" height="{height}" wmode="transparent"></embed></object>';
c=c.replace(/{width}/g,e.width);
c=c.replace(/{height}/g,e.height);
c=c.replace(/{video_id}/g,e.video_id);
return c
};
a.prototype.load=function(){if(this.s7AssetName.indexOf("youtube")>-1){var c=this;
this.$vidPlayer.html(a.prototype.YoutubeEmbeddable({video_id:c.s7AssetName.replace("youtube:",""),width:c.youtubeWidth,height:c.youtubeHeight}))
}else{if(this.s7AssetName.indexOf("/")!==-1){var f=this.s7AssetName.lastIndexOf("/");
var e=this.s7AssetName.lastIndexOf(".");
this.s7AssetName=this.s7AssetName.slice(f+1,e)
}}};
a.prototype.loadJplayer=function(g){var f=g.attr("data-width"),c=g.attr("data-height"),j=g.attr("data-poster"),e=g.attr("data-file"),k=g.attr("data-stream"),l=(g.attr("data-ios")==="false")?false:g.attr("data-ios"),h=(navigator.userAgent.match(/(iPad|iPhone|iPod)/g)?true:false);
b.util.getCachedScript("//a.c-dn.net/b/4qOPgi.js#jwplayer.js").done(function(){var m={width:f,height:c,primary:"flash",autostart:true,file:e,"rtmp.subscribe":true,image:j,flashplayer:"/etc/designs/onedomain/images/jwplayer/player-5.10.swf",skin:"/etc/designs/onedomain/images/jwplayer/skin.zip",streamer:k};
if(e==="LIVE"){if(h===true&&l){m={file:l,flashplayer:"/etc/designs/onedomain/images/jwplayer/player-5.10.swf",width:f,height:c,image:j}
}jwplayer("jplayer-holder").setup(m)
}else{jwplayer("jplayer-holder").setup({width:f,height:c,primary:"flash",file:e,image:j,stretching:"fill",flashplayer:"/etc/designs/onedomain/images/jwplayer/player-5.10.swf",skin:"/etc/designs/onedomain/images/jwplayer/skin.zip"})
}})
};
a.prototype.transcript=function(){jq(".transcript > a").off().on("click",function(c){c.preventDefault();
jq(this).next("div").toggle()
})
};
b.util.Scene7=new a()
}(PS));
window.PS=window.PS||{};
PS.util=PS.util||{};
(function(k){var t=document,p,m,f,r,w,l,j,h,u,b,x=k.util.Page.getQuerystring("bctid"),n=k.util.Page.getQuerystring("bclid"),a=jq(".brightcove-videolist"),o=jq(".brightcove-player"),c=jq(".videojs-player"),g=jq(".brightcove-details"),e=jq(".brightcove-playlist-content");
function q(){this.readApi={token:"BBXQ6r3mJLm4EZsh2lBRPsgLbzMOLg0YvPv0qoVQSBYiiStBGOkkmg..",url:"//api.brightcove.com/services/library"};
this.playerDefault={id:"3389842834001",playerKey:"AQ~~,AAACkxJ1lcE~,vNUYpkuL3B2bEmKb31ZmxKHzPZnJmCzi"};
this.playerPlaylistRight={id:"3442084080001",playerKey:"AQ~~,AAACkxJ1lcE~,vNUYpkuL3B3GFJyVdfp2Kqhz-kYzUg-B"};
this.playerPlaylistBelow={id:"3389842834001",playerKey:"AQ~~,AAACkxJ1lcE~,vNUYpkuL3B09PbyBnSsxPR9dsm-kDG8m"};
this.playerLive={id:"3442084083001",playerKey:"AQ~~,AAACkxJ1lcE~,vNUYpkuL3B0hFSzQMQBNmt4glUugfXTE"};
this.playerVideoJS={playerKey:"8d914a8e-0772-4b65-b040-afb00fc98328"};
this.playlistPlayerVideoJS={playerKey:"d764922f-fc55-471d-b285-794b7894e184"};
this.playlistRightPlayerVideoJS={playerKey:"51816009-6df9-4c29-820a-b296f729c9a9"}
}q.prototype.init=function(H){if(H){o=jq(".brightcove-player");
c=jq(".videojs-player").not(".brightcove-live-replace")
}var y=o.length,B=c.length,N,G=[],A=false,O=false,z=false,F="//players.brightcove.net/2830693144001/"+this.playerVideoJS.playerKey+"_default/index.min.js",E="//players.brightcove.net/2830693144001/"+this.playlistPlayerVideoJS.playerKey+"_default/index.min.js",C="//players.brightcove.net/2830693144001/"+this.playlistRightPlayerVideoJS.playerKey+"_default/index.min.js",K="//sadmin.brightcove.com/js/BrightcoveExperiences.js",D,J,M;
c=jq(".videojs-player").not(".brightcove-live-replace");
if(B>0){if(!!window.chrome&&this.getChromeVersion()>42){M=400;
for(var I=0;
I<B;
I++){N=c.eq(I);
if(N.width()<=M&&(!J||J===N.attr("data-playerid"))){J=N.attr("data-playerid");
u=true
}else{u=false;
break
}}}for(var L=0;
L<B;
L++){if(c.eq(L).find(".video-js").length===0){N=c.eq(L);
D=N.attr("data-refid");
k.util.BCPlayer.createVideojs(jq(".videojs-player").eq(L));
D!==""?G.push(D):G.push(N.attr("data-eventid"));
if(N.hasClass("brightcove-playlist-below")){O=true
}else{if(N.hasClass("brightcove-playlist-right")){z=true
}else{A=true
}}}}jq.when(k.util.BCPlayer.getScript(F,A),k.util.BCPlayer.getScript(E,O),k.util.BCPlayer.getScript(C,z)).done(function(){for(var P=0;
P<G.length;
P++){if((!!x||!!n)&&P===0){!!x?k.util.BCPlayer.readyVideojs(x):k.util.BCPlayer.readyVideojs(n)
}else{k.util.BCPlayer.readyVideojs(G[P])
}}});
k.util.BCPlayer.transcript()
}if(y>0&&y>B){k.util.getCachedScript(K).done(function(){for(var P=0;
P<y;
P++){if(o.eq(P).find(".BrightcoveExperience").length===0&&(o.eq(P).find(".video-js").length===0||o.eq(P).find(".live-replace-player").length>0)){k.util.BCPlayer.create(o.eq(P))
}}brightcove.createExperiences()
});
k.util.BCPlayer.transcript()
}};
q.prototype.createVideojs=function(A){var L,J,N="",H="",R=this.playerVideoJS.playerKey,E=A.attr("data-eventid"),G=A.attr("data-playerid"),C=A.attr("data-refid"),K=A.attr("data-width"),I=A.attr("data-height"),D=A.attr("data-live")==="true",B=A.attr("data-autostart")==="true",O=A.find(".brightcove-overlay"),F=A.attr("data-align")!=="bc-full",z=A.attr("data-error")==="true",y=(A.parents(".mPanel").length>0&&A.parents(".js_panels").length===0),Q="playlist",M=F?'style="width: '+K+'px;"':"",P='<div class="vjs-playlist-wrapper" '+M+'><ol class="vjs-playlist"></ol></div>';
if(y&&jq(".cq-wcm-edit").length===0){return false
}if(C!==""){E="ref:"+C;
J=C
}else{J=E
}if(F){if(O){O.css({width:K+"px",height:I+"px"})
}N=' style="width: '+K+"px; height: "+I+'px;" '
}if(G===this.playerPlaylistBelow.id){R=this.playlistPlayerVideoJS.playerKey
}else{if(G===this.playerPlaylistRight.id){R=this.playlistRightPlayerVideoJS.playerKey;
if(F){N=' style="height: '+I+'px;" ';
P='<div class="vjs-playlist-wrapper"><ol class="vjs-playlist"></ol></div>'
}}else{P="";
Q="video"
}}if(!!u){H=' data-setup=\'{"techOrder": ["html5", "hls", "flash"]}\' '
}if((D||B)&&!y&&!z){B='preload="auto" autoplay '
}else{B='preload="none" '
}if(!!x&&Q==="video"){J=x;
E=x;
B='preload="auto" autoplay '
}if((!!n||!!x)&&Q==="playlist"){J=!!x?x:n;
if(!!n){E=n
}B='preload="auto" autoplay '
}L='<video id="'+J+'" data-'+Q+'-id="'+E+'" data-account="2830693144001" data-player="'+R+'" data-embed="default" '+H+' class="video-js" controls="" '+B+N+"></video>"+P;
if(D&&A.find(".previous-videos").is(":empty")){this.loadPreviousVideos(A)
}if(D&&!!x){this.returnToStreamButton(A)
}A.append(L)
};
q.prototype.create=function(z){var L,A=this.playerDefault.playerKey,N="@videoPlayer",D=z.attr("data-eventid"),E=z.attr("data-refid"),F=z.attr("data-playerid"),y=z.attr("data-width"),M=z.attr("data-height"),J=z.attr("data-live")==="true",I=z.attr("data-htmlplayer")==="true",H=z.attr("data-autostart")==="true",C=z.find(".brightcove-overlay"),G=z.attr("data-align")!=="bc-full",B=z.attr("data-error")==="true",K=(z.parents(".mPanel").length>0&&z.parents(".js_panels").length===0);
if(K&&jq(".cq-wcm-edit").length===0){return false
}if(C){if(G){C.css({width:y+"px",height:M+"px"})
}}if(E!==""){D=E
}L='<object id="myExperience'+D+'" class="BrightcoveExperience"><param name="width" value="'+y+'" /><param name="height" value="'+M+'" />';
if(F==this.playerPlaylistBelow.id){N="@videoList";
A=this.playerPlaylistBelow.playerKey
}else{if(F==this.playerPlaylistRight.id){N="@videoList";
A=this.playerPlaylistRight.playerKey
}else{if(F==this.playerLive.id){A=this.playerLive.playerKey
}}}if(E!==""){D="ref:"+E
}L+='<param name="'+N+'" value="'+D+'"; />';
L+='<param name="playerID" value="'+F+'" /><param name="playerKey" value="'+A+'" /><param name="wmode" value="transparent" /><param name="isVid" value="true" /><param name="isUI" value="true" /><param name="dynamicStreaming" value="true" /><param name="includeAPI" value="true" /><param name="showNoContentMessage" value="false" /><param name="templateLoadHandler" value="PS.util.BCPlayer.onLoad" /><param name="templateReadyHandler" value="PS.util.BCPlayer.ready" />';
if((J||H)&&!K&&!B){L+='<param name="autoStart" value="true" />'
}else{L+='<param name="autoStart" value="false" />'
}if(I){L+='<param name="forceHTML" value="true" />'
}L+='<param name="secureConnections" value="true" /><param name="secureHTMLConnections" value="true" />';
L+="</object>";
if(J&&z.find(".previous-videos").is(":empty")){this.loadPreviousVideos(z)
}if(J&&(window.location.href.indexOf("bctid=")>0)){this.returnToStreamButton(z)
}z.append(L)
};
q.prototype.onLoad=function(y){p=brightcove.api.getExperience(y);
m=brightcove.api.modules.APIModules;
f=brightcove.api.events.MediaEvent;
r=brightcove.api.modules.APIModules.CONTENT;
w=p.getModule(m.CUE_POINTS)
};
q.prototype.readyVideojs=function(Q){var N=this,H=false,O,L,K=false,G=false,z=false,B="",I="",C,S,P,J,T=!!document.getElementById(Q)?document.getElementById(Q).parentNode:null;
if(T){var E=T.getAttribute("data-live")==="true",D=T.getAttribute("data-autostart")==="true",R=T.getAttribute("data-cuepoint")==="true",y=!!document.getElementById("lightbox"),M=T.getAttribute("data-playerid"),F=T.getAttribute("data-eventid"),A=T.getAttribute("data-error")==="true";
L=jq("#"+Q).parent().find(".vjs-playlist-wrapper");
J=T.getAttribute("data-cues")==="true"
}else{if(!!k.util.WebinarArchiveVideo){k.util.WebinarArchiveVideo.init()
}return false
}j=videojs||{};
j(Q).ready(function(){var W=this;
var V;
var U=[];
var X;
W.on("loadstart",function(Y){N.shareLinks(W);
if(!x||K||(M!==N.playerPlaylistBelow.id&&M!==N.playerPlaylistRight.id)){N.loadDetails(W)
}if(A){k.util.BCPlayer.showOverlay(Y,W,"brightcove-live-start")
}if(J){U=W.mediainfo.cue_points;
V=W.textTracks()[0];
if(U.length>0){if(typeof V.cues_!=="undefined"&&V.cues_&&V.cues_.length>0){V.oncuechange=function(){if(V.activeCues[0]!==undefined){X=k.util.BCPlayer.getSubArray(U,"time",V.activeCues[0].startTime);
k.util.BCPlayer.processCuePoint(X[0],jq("#"+Q).parent())
}}
}else{W.on("timeupdate",function(Z){for(i=0;
i<U.length;
i++){if(parseInt(U[i].time,10)===parseInt(this.currentTime(),10)){k.util.BCPlayer.processCuePoint(U[i],jq("#"+Q).parent())
}}})
}}}});
W.on("loadedmetadata",function(Y){if(G){L.find(".vjs-playlist-item").click(function(){z=true
})
}S=jq("#"+Q).find(".vjs-duration-display");
P=S.html();
if(!!W.mediainfo.duration&&P.indexOf("0:00")>0){S.html(P.replace("0:00",k.util.BCPlayer.formatTime(parseInt(W.mediainfo.duration,10)*1000)))
}if(z&&!y){jq(".vjs-share-control").click(function(){C=jq(this).parents(".video-js").find(".direct-link-textbox");
C.val(C.val().split("?")[0]+"?bctid="+W.mediainfo.id)
});
if(!!x&&!!(window.history&&history.pushState)){if(!!n){I="&bclid="+n
}if(B!==W.mediainfo.id+I){history.pushState({},document.title,"?bctid="+W.mediainfo.id+I);
B=W.mediainfo.id+I
}}}});
W.on("loadeddata",function(Y){if(D||E||(!!x&&K)){N.loadDetails(W);
W.play()
}K=true
});
W.on("play",function(Y){if(!!k.SiteCatalyst.onPlay){if(E){h=window.setTimeout(function(){k.SiteCatalyst.onPlay(this)
},4000)
}else{k.SiteCatalyst.onPlay(this)
}}});
W.on("playlistchange",function(Y){if(!G){O=!!n?n:F;
k.util.BCPlayer.getVideos("playlist",O,k.util.BCPlayer.renderVideoPlaylist)
}G=true
});
W.on("pause",function(Y){if(!!k.SiteCatalyst.onStop){k.SiteCatalyst.onStop(this)
}});
W.on("timeupdate",function(Y){k.util.BCPlayer.progress(Y,W,E,A,H)
});
W.on("ended",function(Y){k.util.BCPlayer.complete(Y,W,E,H)
});
W.on("error",function(Y){k.util.WebinarArchiveVideo.init();
k.util.BCPlayer.onError(Y,W,E,H)
})
})
};
q.prototype.ready=function(y){var K=this,z=y.target.experience.id,F=false,B=jq("#"+z).parents(".brightcove-player");
if(B.length===0){B=jq(".brightcove-player[data-refid!=''][data-refid]");
F=true
}var G=B.attr("data-live")==="true",H=B.attr("data-autostart")==="true",E=B.attr("data-cuepoint")==="true",J=B.parents("#lightbox").length>0,A=B.attr("data-error")==="true",I=brightcove.api.getExperience(z),C=B.attr("data-replace")==="true",D=I.getModule(m.VIDEO_PLAYER);
F=B.attr("data-refid")!=="";
if(A){k.util.BCPlayer.showOverlay(y,D,"brightcove-live-start")
}if(H&&J){D.play()
}k.util.BCPlayer.shareLinks(D);
D.addEventListener(f.BEGIN,function(L){k.util.BCPlayer.begin(L,D,G)
});
D.addEventListener(f.PROGRESS,function(L){k.util.BCPlayer.progress(L,D,G,A,F,C)
});
D.addEventListener(f.PLAY,function(L){k.util.BCPlayer.onPlay(L,D,G,F);
if(G){h=window.setTimeout(function(){if(typeof k.SiteCatalyst.onPlay!=="undefined"){k.SiteCatalyst.onPlay(L)
}},4000)
}else{if(typeof k.SiteCatalyst.onPlay!=="undefined"){k.SiteCatalyst.onPlay(L)
}}});
D.addEventListener(f.STOP,function(L){k.SiteCatalyst.onStop(L)
});
D.addEventListener(f.COMPLETE,function(L){k.util.BCPlayer.complete(L,D,G,F)
});
D.addEventListener(f.CHANGE,function(L){k.util.BCPlayer.loadDetails(D)
});
D.addEventListener(f.ERROR,function(L){k.util.BCPlayer.onError(L,D,G,F,C)
});
if(E){k.util.BCPlayer.setupCuePoints(z,B,D)
}k.util.BCPlayer.loadDetails(D)
};
q.prototype.onError=function(A,z,C,y,E){var F,B,D=false;
if(typeof A.target["id"]!=="undefined"){F=A.target["id"];
B=jq("#"+F);
D=true
}else{F=A.media.id;
B=jq("#myExperience"+F);
if(B.length===0){B=jq("#myExperience"+A.media.referenceId);
y=true
}}if(C){window.clearTimeout(h);
this.showOverlay(A,z,"brightcove-live-start",y,E);
if(D){setTimeout(function(){z.dispose()
},200)
}else{brightcove.removeExperience("myExperience"+F);
B.remove()
}l=window.setTimeout(function(){k.util.BCPlayer.init()
},60000)
}};
q.prototype.reloadPlayer=function(z){var y=jq(".BrightcoveExperience"),A=y.parents(".panel").length>0;
jq(y).remove();
if(A){k.util.Lightboxes.handleVideoContent()
}else{this.init(z)
}};
q.prototype.begin=function(z,y,A){};
q.prototype.onPlay=function(z,y,A){};
q.prototype.progress=function(A,z,B,D,y,C){if(typeof(y)==="undefined"){y=false
}if(typeof A.target["id"]==="undefined"){if(((A.duration-A.position)<0.25)&&!B){this.showOverlay(A,z,"",y)
}if(B&&jq(".brightcove-live-start")&&!D){this.hideOverlay(A,z,"brightcove-live-start",y,C)
}}};
q.prototype.complete=function(B,A,C,y){var z=jq(".postlive-text").length;
if(typeof(y)==="undefined"){y=false
}if(!C){this.showOverlay(B,A,"",y)
}if(C&&z){this.showOverlay(B,A,"brightcove-live-finish",y)
}};
q.prototype.showOverlay=function(y,B,C,D,A){var F,E=false;
if(typeof y.target["id"]!=="undefined"){var z=y.target["id"],F=jq("#"+z).parent().find(".brightcove-overlay");
E=true
}else{var z=y.target.experience.id;
if(typeof(D)==="undefined"){D=false
}if(D){F=jq("div[data-refid='"+y.media.referenceId+"']").find(".brightcove-overlay")
}else{F=jq("div[data-eventid='"+z.substr(12)+"']").find(".brightcove-overlay")
}}var G=F.find(".replay-video");
if(F.length){F.addClass("active");
if(typeof(A)!=="undefined"){if(A==true){F.addClass("live-replace-overlay");
this.replacementPlayer(false)
}}if(C){F.addClass(C)
}G.on("click",function(H){H.preventDefault();
F.removeClass("active");
if(E){B.currentTime(0)
}B.play()
})
}};
q.prototype.hideOverlay=function(C,B,A,z,D){var y;
if(typeof C.target["id"]!=="undefined"){var E=C.target["id"],y=jq("#"+E).parent().find(".brightcove-overlay")
}else{var E=C.target.experience.id;
if(typeof(z)==="undefined"){z=false
}if(z){y=jq("div[data-refid='"+C.media.referenceId+"']").find(".brightcove-overlay")
}else{y=jq("div[data-eventid='"+E.substr(12)+"']").find(".brightcove-overlay")
}}if(y.length){y.removeClass("active");
if(typeof(D)!=="undefined"){if(D==true){this.replacementPlayer(true)
}}if(A){y.removeClass(A)
}}};
q.prototype.replacementPlayer=function(y){var A=jq(".brightcove-wrapper"),C=jq(".brightcove-player"),D=C.attr("data-liveplaylist-id"),B='<div class="live-replace-player"><video data-playlist-id="'+D+'" data-account="2830693144001" data-player="51816009-6df9-4c29-820a-b296f729c9a9" data-embed="default" class="video-js" controls autoplay style="width: 100%; height: 100%; position: absolute; top: 0px; bottom: 0px; right: 0px; left: 0px;"></video><script src="//players.brightcove.net/2830693144001/51816009-6df9-4c29-820a-b296f729c9a9_default/index.min.js"><\/script>',z="brightcove-playlist-below videojs-player brightcove-live-replace";
if(y){A.removeClass("videojs-wrapper");
C.removeClass(z).addClass("brightcove-single-video");
jq(".live-replace-player").remove()
}else{A.addClass("videojs-wrapper");
if(jq(".live-replace-player").length===0){C.removeClass("brightcove-single-video").addClass(z);
jq(".live-replace-overlay").append(B)
}}};
q.prototype.initCalls=function(){var y=a.length,A=e.length;
if(y>0){if(y>1){for(var z=0;
z<y;
z++){this.loadVideoList(a.eq(z))
}}else{this.loadVideoList(a)
}}if(A>0){if(A>1){for(var z=0;
z<A;
z++){this.loadPlaylist(e.eq(z))
}}else{this.loadPlaylist(e)
}}};
q.prototype.processCuePoint=function(z,C){var E;
var B='<a href="{{link}}" target="_blank" style="{{style}}" id="brightcove-cue-cta" class="brightcove-cue-cta button button-blue js_target hidden">{{text}}</a>';
var A;
var y;
if(z.name.indexOf("cta")!==-1){try{E=z.metadata.replace(/\'/g,'"');
E=JSON.parse("{"+E+"}")
}catch(D){console.log(D)
}if(!!E){if(!!E.text&&!!E.link){if(!E.style){E.style=""
}A=Mustache.render(B,{text:E.text,link:E.link,style:E.style});
if(!!jq("#brightcove-cue-cta").length){jq("#brightcove-cue-cta").remove();
window.clearTimeout(y)
}C.append(A);
if(!!E.color){E.color="button-"+E.color;
jq("#brightcove-cue-cta").removeClass("button-blue").addClass(E.color)
}jq("#brightcove-cue-cta").removeClass("hidden");
if(!E.time){E.time=5000
}y=window.setTimeout(function(){jq("#brightcove-cue-cta").remove()
},E.time)
}}}};
q.prototype.getVideos=function(B,z,A){var y="https://edge.api.brightcove.com/playback/v1/accounts/2830693144001/";
if(B==="playlist"){if(!!z.indexOf("?limit=")){z+="?limit=100"
}y=y+"playlists/"+z
}else{y=y+"videos/"+z
}jq.ajax({url:y,headers:{Accept:"application/json;pk=BCpkADawqM1h6PgLHXeQXdyuYi6wqNHbswoxG2AS6ihg_7I375k_UfyJ2EEyp5T6LQ3V4m8jZKg6m8jtIzFmauaoFYTzfJIkh45YJn5p-eP8RGoXv1WSy9shOR-OlB-OOSr8Oz1vrNhvo-WH"},timeout:30000,success:function(C){return A(C)
}})
};
q.prototype.loadVideoList=function(y){var z=y.attr("data-playlistid");
if(z.length!==0){k.util.BCPlayer.getVideos("playlist",z,k.util.BCPlayer.renderVideoList)
}};
q.prototype.renderVideoList=function(H){var y,z,B,F,E;
if(H.id!==null){if(a.length===1){y=a
}else{y=jq("div[data-playlistid='"+H.id+"']")
}z=H.videos
}if(y&&z&&!(y.find("ul").length)){var A=y.attr("data-count"),C=y.attr("data-playlistid"),G=(y.attr("data-showdate")==="true")?true:false,D=(y.attr("data-more")==="false")?null:y.attr("data-more");
if(z.length>A){z=z.slice(0,A)
}if(C){C="&bclid="+C
}else{C=null
}E=y.attr("data-link");
jq.each(z,function(I){z[I].duration=k.util.BCPlayer.formatTime(z[I].duration);
z[I].created_at=G?k.util.FullDates(z[I].created_at).format():null
});
F='<ul class="clearfix">{{#videos}}<li><a href="{{link}}?bctid={{id}}{{pid}}"><div class="brightcove-list-item"><div class="brightcove-list-img-wrap">{{#poster}}<img src="{{poster}}" alt="{{name}}"/>{{/poster}}<div class="bc-play"></div><span class="length">{{duration}}</span></div><div class="brightcove-videolist-copy"><p>{{name}}</p>{{#created_at}}<p class="pubdate">{{created_at}}</p>{{/created_at}}</div></div></a></li>{{/videos}}</<ul>{{#more}}<p><a class="small-red-arrow" href="{{link}}"><strong>{{more}}</strong></a></p>{{/more}}';
B=Mustache.render(F,{videos:z,link:E,pid:C,more:D});
y.append(B)
}};
q.prototype.loadDetails=function(M){if(M){if(M.hasOwnProperty("mediainfo")){var S=document.getElementById(M.id_).parentNode,O=jq("#"+M.id_).parents(".brightcove-player"),L=M.mediainfo,y=S.getAttribute("data-shdes")==="true",P=S.getAttribute("data-date")==="true",U=false;
if(S.getAttribute("data-title")==="h2"){U="h2"
}else{if(S.getAttribute("data-title")==="h3"){U="h3"
}}if(U||P||y){if(U){var R='<{{titleTag}} class="heading">{{displayName}}</{{titleTag}}>',I,E=O.prev(".brightcove-player-heading"),A={displayName:L.name,titleTag:U};
E.empty();
I=Mustache.render(R,A);
E.append(I)
}if(!!L.description||!!L.published_at){var N=O.next(".brightcove-player-description"),K='{{#date}}<p class="brightcove-details-date">{{date}}</p>{{/date}}{{#shortDescription}}<p>{{shortDescription}}</p>{{/shortDescription}}',z,H={date:P?k.util.FullDates(L.published_at).format("LL"):null,shortDescription:y?L.description:null};
N.empty();
z=Mustache.render(K,H);
N.append(z)
}}if(g.length){var T,J,B=jq(".brightcove-details-content"),D=(g.attr("data-shdes")==="true"),Q=(g.attr("data-londes")==="true"),G=(g.attr("data-date")==="true"),C=(g.attr("data-titletag")==="h3")?"h3":"h2";
B.empty();
var F={displayName:L.name,date:G?k.util.FullDates(L.published_at).format("LL"):null,shortDescription:D?L.description:null,longDescription:Q?L.long_description:null,titleTag:C};
T='<{{titleTag}} class="heading">{{displayName}}</{{titleTag}}>{{#date}}<p class="brightcove-details-date">{{date}}</p>{{/date}}{{#shortDescription}}<p>{{shortDescription}}</p>{{/shortDescription}}{{#longDescription}}<p>{{longDescription}}</p>{{/longDescription}}';
J=Mustache.render(T,F);
B.append(J)
}}else{M.getCurrentVideo(function(al){var aj=jq("#"+M.experience.id).parents(".brightcove-player"),V=(aj.attr("data-shdes")==="true"),ak=(aj.attr("data-date")==="true"),ap=false;
if(aj.attr("data-title")==="h2"){ap="h2"
}else{if(aj.attr("data-title")==="h3"){ap="h3"
}}if(ap||ak||V){if(ap){var an='<{{titleTag}} class="heading">{{displayName}}</{{titleTag}}>',af,ab=aj.prev(".brightcove-player-heading"),X={displayName:al.displayName,titleTag:ap};
ab.empty();
af=Mustache.render(an,X);
ab.append(af)
}var ai=aj.next(".brightcove-player-description"),ah='{{#date}}<p class="brightcove-details-date">{{date}}</p>{{/date}}{{#shortDescription}}<p>{{shortDescription}}</p>{{/shortDescription}}',W,ae={date:ak?al.publishedDate.toString().substring(0,(al.publishedDate.toString().indexOf(":")-2)):null,shortDescription:V?al.shortDescription:null};
ai.empty();
W=Mustache.render(ah,ae);
ai.append(W)
}if(g.length){var ao,ag,Y=jq(".brightcove-details-content"),aa=(g.attr("data-shdes")==="true"),am=(g.attr("data-londes")==="true"),ad=(g.attr("data-date")==="true"),Z=(g.attr("data-titletag")==="h3")?"h3":"h2";
Y.empty();
var ac={displayName:al.displayName,date:ad?al.publishedDate.toString().substring(0,(al.publishedDate.toString().indexOf(":")-2)):null,shortDescription:aa?al.shortDescription:null,longDescription:am?al.longDescription:null,titleTag:Z};
ao='<{{titleTag}} class="heading">{{displayName}}</{{titleTag}}>{{#date}}<p class="brightcove-details-date">{{date}}</p>{{/date}}{{#shortDescription}}<p>{{shortDescription}}</p>{{/shortDescription}}{{#longDescription}}<p>{{longDescription}}</p>{{/longDescription}}';
ag=Mustache.render(ao,ac);
Y.append(ag)
}})
}}};
q.prototype.loadPlaylist=function(y){var z=y.attr("data-playlist-id");
if(z.length!==0){k.util.BCPlayer.getVideos("playlist",z,k.util.BCPlayer.renderPlaylist)
}};
q.prototype.renderPlaylist=function(K){var z=jq("div[data-playlist-id='"+K.id+"']"),H=K.videos,G=(z.attr("data-showdate")==="true"),I=(z.attr("data-wrap")==="true")?"circular":null,F=z.attr("data-link"),R='<ul class="clearfix">{{#videos}}<li><a href="{{link}}?bctid={{id}}&bclid={{pid}}"><div class="brightcove-list-item"><div class="brightcove-list-img-wrap">{{#poster}}<img src="{{poster}}" alt="{{name}}"/>{{/poster}}<div class="bc-play"></div><span class="length">{{duration}}</span></div><div class="brightcove-videolist-copy"><p>{{name}}</p>{{#created_at}}<p class="pubdate">{{created_at}}</p>{{/created_at}}</div></div></a></li>{{/videos}}</ul>',M=this,B=z.parents(".brightcove-playlist").find(".heading"),A='<span class="video-count">{{count}}</span>',P=z.parent().find(".vid-carousel-control-next"),C=z.parent().find(".vid-carousel-control-prev"),E,O,D,Q,L,y=false,N,J;
if(H.length>0&&!(z.find("ul").length)){jq.each(H,function(S){H[S].duration=k.util.BCPlayer.formatTime(H[S].duration);
H[S].created_at=G?k.util.FullDates(H[S].created_at).format():null
});
O=" - "+H.length+" videos";
J=Mustache.render(R,{videos:H,pid:K.id,link:F});
E=Mustache.render(A,{count:O});
B.append(E);
z.append(J);
N=jq(".brightcove-playlist-content li").outerWidth();
z.find("ul").css({width:(H.length*N)+"px"});
z.css({overflow:"scroll","overflow-x":"scroll","overflow-y":"hidden"});
P.on("click",function(S){S.preventDefault();
z.trigger("playlist:scroll",["right"])
});
C.on("click",function(S){S.preventDefault();
z.trigger("playlist:scroll",["left"])
});
z.on("scroll",function(S){z.trigger("playlist:scroll",["none"])
});
z.on("mouseenter",function(S){y=true
});
z.on("mouseleave",function(S){y=false
});
jq("body").on("mousewheel DOMMouseScroll",function(S){if(y){Q=S.type==="mousewheel"?S.originalEvent.wheelDelta:S.originalEvent.detail*30;
z.scrollLeft(z.scrollLeft()-Q);
S.preventDefault();
z.trigger("playlist:scroll",["none"])
}});
z.on("playlist:scroll",function(T,S){D=z.scrollLeft();
if(S!=="none"){L=Math.floor(z.innerWidth()/N)*N;
if(S==="right"){D=D+L
}else{D=D-L
}z.animate({scrollLeft:D},300)
}if(D<=0){C.addClass("inactive")
}else{if(D>=(z.prop("scrollWidth")-z.innerWidth())){P.addClass("inactive")
}else{C.removeClass("inactive");
P.removeClass("inactive")
}}});
z.trigger("playlist:scroll",["none"])
}};
q.prototype.renderVideoPlaylist=function(H){var A=(typeof H.videos!=="undefined")?H.videos:false,y=!!x?x:H.id,E=videojs.players[y],C,B,z,F=[],G=[];
if(A.length){for(C=0;
C<A.length;
C++){B=new Object;
B=A[C];
B.duration=B.duration/1000;
F.push(B);
if(!!x&&x==A[C].id){G.push(C)
}}if(A.length>20){try{E.playlist(F)
}catch(D){E.playlist(F)
}}if(!!x&&G.length){E.playlist.currentItem(G[0]);
z=jq("#"+y).parent().find(".vjs-playlist-wrapper");
z.animate({scrollLeft:z.find(".vjs-selected").position().left},500);
if(E.playlist.currentItem()===G[0]){E.play()
}else{window.setTimeout(function(){if(E.playlist.currentItem()!==G[0]){E.playlist.currentItem(G[0])
}E.play()
},500)
}}}};
q.prototype.loadPreviousVideos=function(y){var z=y.attr("data-liveplaylist-id");
if(z!==""){k.util.BCPlayer.getVideos("playlist",z+"?limit=1",k.util.BCPlayer.renderPreviousVideos)
}};
q.prototype.renderPreviousVideos=function(y){var B=jq("div[data-liveplaylist-id='"+y.id+"']"),D=y.videos[0],E=B.find(".previous-videos"),C=document.location.href,A='<div class="previous-video"><div class="brightcove-list-item"><div class="brightcove-list-img-wrap"><a href="{{link}}?bctid={{id}}">{{#poster}}<img src="{{poster}}" alt="{{name}}"/>{{/poster}}<div class="bc-play"></div><span class="length">{{duration}}</span></a></div><div class="brightcove-videolist-copy"><a href="{{link}}?bctid={{id}}"><p class="brightcove-broadcast">{{broadcast}}</p><p>{{name}}</p>{{#creationDate}}<p class="pubdate">{{creationDate}}</p>{{/creationDate}}</a>{{#archivelink}}<a class="brightcove-archive" href="{{archivelink}}" target="_blank">{{archivetext}}</a>{{/archivelink}}</div></div></div>',z;
if(D){D.duration=k.util.BCPlayer.formatTime(D.duration);
D.creationDate=k.util.FullDates(D.created_at).format();
D.broadcast=E.attr("data-broadcast");
D.archivelink=E.attr("data-archivelink")!==""?E.attr("data-archivelink"):false;
D.archivetext=E.attr("data-archivetext");
z=Mustache.render(A,D);
E.append(z)
}};
q.prototype.setupCuePoints=function(D,C,B){var z='<ul>{{#chapters}}<li><a href="#" data-time="{{time}}">{{name}}</a></li>{{/chapters}}</ul>',y=C.parent().find(".brightcove-chapters"),A=[];
D=D.replace("myExperience","");
w.getCuePoints(D,function(E){if(E.length){for(var G=0;
G<E.length;
G++){if(E[G].type===1){A.push(E[G])
}}var F=Mustache.render(z,{chapters:A});
y.append(F);
y.find("a").click(function(I){I.preventDefault();
var H=jq(this).attr("data-time");
k.util.BCPlayer.playChapter(H,B)
})
}})
};
q.prototype.playChapter=function(z,y){y.getIsPlaying(function(A){if(A===true){y.seek(z)
}else{y.play();
window.setTimeout(function(){k.util.BCPlayer.playChapter(z,y)
},300)
}})
};
q.prototype.shareLinks=function(y){jq(".brightcove-share li a").off().click(function(H){var E=jq(this);
var I=jq("link[rel=canonical]").attr("href");
var N=E.attr("href");
var M=N.slice(0,F);
var L=N.slice(F);
var F=L.indexOf("&");
var J="";
if(E.hasClass("openPopup")){H.preventDefault();
if(y.hasOwnProperty("mediainfo")){var B=y.mediainfo;
J="?bctid="+B.id_;
var A=B.name,G=B.description,D=B.poster,z;
if(F==-1){N=N.replace("name=&",("name="+encodeURI(A)+"&")).replace("description=&",("description="+encodeURI(G)+"&")).replace("picture=&",("picture="+encodeURI(D)+"&"));
z=N+J;
k.util.BCPlayer.openPopup(z)
}else{var K=L.slice(0,F);
var C=L.slice(F).replace(/text=.*?&/,("text="+encodeURI(A)+"&"));
z=M+I+J+C;
k.util.BCPlayer.openPopup(z)
}}else{y.getCurrentVideo(function(T){J="?bctid="+T.id;
var S=T.displayName,R=T.shortDescription,O=T.videoStillURL,U;
if(F==-1){N=N.replace("name=&",("name="+encodeURI(S)+"&")).replace("description=&",("description="+encodeURI(R)+"&")).replace("picture=&",("picture="+encodeURI(O)+"&"));
U=N+J;
k.util.BCPlayer.openPopup(U)
}else{var P=L.slice(0,F);
var Q=L.slice(F).replace(/text=.*?&/,("text="+encodeURI(S)+"&"));
U=M+I+J+Q;
k.util.BCPlayer.openPopup(U)
}})
}}})
};
q.prototype.openPopup=function(A){if(!jq("body").hasClass("tablet")&&!jq("body").hasClass("mobile")&&!jq("body").hasClass("touch")){var z=700;
var C=500;
var y=(screen.width/2)>z?(screen.width/2):z;
var B=(screen.height/2)>C?(screen.height/2):C;
var E=(screen.width/2)-(y/2);
var D=(screen.height/2)-(B/2);
var F="width="+y+",height="+B+",left="+E+",top="+D+",menubar=no, toolbar=no";
window.open(A,"_blank",F)
}else{window.open(A,"_blank")
}};
q.prototype.getChromeVersion=function(){var y=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
return y?parseInt(y[2],10):false
};
q.prototype.getScript=function(z,y){if(y){return k.util.getCachedScript(z)
}else{return false
}};
q.prototype.formatTime=function(A){var B=parseInt((A/1000)%60),z=parseInt((A/(1000*60))%60),y=parseInt((A/(1000*60*60))%24);
y=(y<=0)?"":y+":";
if(z<10){z=(y<=0)?z:"0"+z
}B=(B<10)?"0"+B:B;
return y+z+":"+B
};
q.prototype.formatDate=function(z){function C(E){return E>9?E:"0"+E
}var D=new Date(parseInt(z));
var A=D.getUTCFullYear();
var B=D.getUTCMonth()+1;
var y=D.getUTCDate();
return C(y)+"/"+C(B)+"/"+A
};
q.prototype.getSubArray=function(E,y,C){var B,D=E.length,A=false,z=[];
for(B=0;
B<D;
B++){if(E[B][y]===C){A=true;
z.push(E[B])
}}return z
};
q.prototype.transcript=function(){if(jq(".transcript").length){jq(".transcript > a").off().on("click",function(y){y.preventDefault();
jq(this).next("div").toggle()
})
}};
q.prototype.returnToStreamButton=function(z){var y=z.parents(".brightcove-wrapper").find(".back-live-button");
y.on("click",function(){window.location=window.location.href.split("?")[0]
}).show()
};
k.util.BCPlayer=new q();
k.util.pubsub.publish("bcplayer.loaded")
}(PS));
window.PS=window.PS||{};
PS.util=PS.util||{};
(function(PS){function Tags(){this.randNum=Math.round((Math.random()*10000000000000));
this.timeStamp=new Date().getTime();
this.tagsSet=PS.util.Cookie.get("igTags")||"";
this.siteScopeTagsSet=this.tagsSet;
this.setSubscriptions()
}Tags.prototype.randNum=null;
Tags.prototype.timeStamp=null;
Tags.prototype.tagHTML="";
Tags.prototype.tagsSet="";
Tags.prototype.genericCookieType="cookie";
Tags.prototype.pageScopeType="page";
Tags.prototype.everypageScopeType="everypage";
Tags.prototype.siteScopeType="site";
Tags.prototype.setSubscriptions=function setSubscriptions(){PS.util.pubsub.subscribe("idCookie.processed",this.tagsExistenceCheck.bind(this))
};
Tags.prototype.tagsExistenceCheck=function tagsExistenceCheck(){if(window.tagData!==undefined&&window.tagData!==null){this.sortTags(window.tagData)
}else{window.dlog("Tagging: there are no tags on this page")
}};
Tags.prototype.sortTags=function(tagData){dlog("Tagging: initializing CQ Tag Manager");
var currentTagGroup=null,vendors=tagData.length||0,tagsPerVendor=0;
var t=this;
var currentUserSegment=PS.startup.getUserSegment();
var delayedTags=[];
var triggerClientTagForLoggedIn=false;
var isDemoClient=false;
if(currentUserSegment===PS.info.user.segments.loggedIn){var idCookie=PS.util.Cookie.get("ID");
if(!!idCookie){triggerClientTagForLoggedIn=true;
isDemoClient=idCookie.indexOf("demo-account")>-1
}}if(tagData[0]&&tagData[0].length>0&&!PS.core.CQMode.inAuthor){while(vendors--){currentTagGroup=tagData[vendors];
tagsPerVendor=currentTagGroup.length;
dlog("Tagging: *** Processing vendor group "+(tagData.length-vendors)+". Number of tags: "+tagsPerVendor+" ***");
while(tagsPerVendor--){var currentTag=currentTagGroup[tagsPerVendor];
dlog("Tagging: ### Processing this tag:",currentTag);
if(!currentTag.segment||currentTag.segment===""){currentTag.segment="ig_all"
}if(currentTag.segment==="ig_all"||currentTag.segment===currentUserSegment||(triggerClientTagForLoggedIn&&currentTag.segment===PS.info.user.segments.client&&!isDemoClient)||(triggerClientTagForLoggedIn&&currentTag.segment===PS.info.user.segments.demoClient&&isDemoClient)){if(!currentTag.channel||currentTag.channel===""||currentTag.channel===PS.util.getDeviceType()){if(!currentTag.delay||currentTag.delay===""){this.defineTag(currentTag);
this.processTag(currentTag)
}else{delayedTags.push(currentTag)
}}else{dlog("Tagging: ### DEVICE Channel Detect:",PS.util.getDeviceType());
dlog("Tagging: ### TAG Channel Detect:",currentTag.channel);
dlog("Tagging: ### DEVICE and Channel MisMatch Ignoring Tag")
}}else{dlog("Tagging: ### Stopping this tag process. User segment not the same as the tag")
}}}for(var i=0;
i<delayedTags.length;
i++){var func=function(tag){t.defineTag(tag);
t.processTag(tag);
t.updateTagsSetCookie();
if(tag.type=="element"){jq("body").append(this.simpleTag(tag))
}};
setTimeout(func.bind(this,delayedTags[i]),PS.util.jspVars.get("analytics.trackingTagDelay"));
dlog("Tagging: Tag processing has finished with delay of ("+PS.util.jspVars.get("analytics.trackingTagDelay")+") on : ",delayedTags[i].description)
}if(!!this.tagHTML&&this.tagHTML.length>0){jq("body").append(this.tagHTML);
dlog("Tagging: Tag processing has finished. The following HTML tags were added: ",this.tagHTML)
}this.updateTagsSetCookie()
}};
Tags.prototype.applyDirectHookToCookieConversion=function(tag){var reg=/\#\$\$(.+?)\$\$\#/g,matches=tag.processedSrc.match(reg)||[],matchLength=matches.length,matchIndex=0,cookieValue,cookieName;
for(matchIndex;
matchIndex<matchLength;
matchIndex+=1){cookieName=matches[matchIndex].replace("#$$","").replace("$$#","");
cookieValue=PS.util.Cookie.get(cookieName)||"";
tag.processedSrc=tag.processedSrc.replace(matches[matchIndex],encodeURIComponent(cookieValue))
}};
Tags.prototype.defineTag=function(tag){if(tag.scope==="page"){tag.tagScope=this.pageScopeType
}else{if(tag.scope==="everypage"){tag.tagScope=this.everypageScopeType
}else{if(tag.scope==="site"){tag.tagScope=this.siteScopeType
}else{tag.error="Tag not recognized";
dlog('Tagging: Defining tag type: Tag not recognised (scope: "'+tag.scope+'")')
}}}this.chooseSrc(tag);
this.applyDirectHookToCookieConversion(tag);
this.replaceVars(tag);
tag.tagId=this.generateTagIdentifier(tag);
if(!tag.error){dlog("Tagging: Defining tag type: Tag has been identified as a "+tag.tagScope+" scope tag")
}this.verifyTag(tag)
};
Tags.prototype.generateTagIdentifier=function(tag){var stringToCalculate=tag.processedSrc;
if(!!tag.pre_vars){for(var i=0;
i<tag.pre_vars.length;
i++){stringToCalculate+=(tag.pre_vars[i][0]||"");
stringToCalculate+=(tag.pre_vars[i][1]||"")
}}if(!!tag.post_vars){for(var i=0;
i<tag.post_vars.length;
i++){stringToCalculate+=(tag.post_vars[i][0]||"");
stringToCalculate+=(tag.post_vars[i][1]||"")
}}var identifier=PS.util.getMD5(stringToCalculate);
var tagId="|"+identifier+"|";
dlog("Tagging: Tag identifier. ProcessedSrc has been converted to this tagId: ",tagId);
return tagId
};
Tags.prototype.verifyTag=function(tag){if(!tag.type){tag.error="The tag contains no type";
dlog("Tagging: Tag contains no type")
}if(!(tag.src||tag.secureSrc)){tag.error="The tag contains no source";
dlog("Tagging: Tag contains no source")
}if(!!tag.cookie_name){var containsTheValue=this.isDataContainingValue(tag.cookie_name,tag.cookie_value,"cookie");
if(!containsTheValue){tag.error="The cookie does not contain the value"
}dlog("Tagging: Does the cookie contain the value: "+containsTheValue)
}if(!!tag.qs_name){var containsTheValue=this.isDataContainingValue(tag.qs_name,tag.qs_value,"qs");
if(!containsTheValue){tag.error="The querystring does not contain the value"
}dlog("Tagging: Does the querystring contain the value: "+containsTheValue)
}var hasBeenProcessed=this.hasTagBeenProcessed(tag.tagId);
if(hasBeenProcessed){tag.error="The cookie has already been processed";
dlog("Tagging: This tag has already been processed")
}else{dlog("Tagging: This tag has not been processed")
}return !tag.error
};
Tags.prototype.isDataContainingValue=function(dataName,dataValue,dataType){var data="";
var dataContainsValue=false;
var dataExists=false;
var dataIsEmpty=(dataValue==="");
if(dataName!==""){switch(dataType){case"cookie":data=PS.util.Cookie.get(dataName)||"";
dataExists=(data!=="");
dataContainsValue=(data.indexOf(dataValue)>-1);
break;
case"qs":data=PS.util.Page.getQuerystring(dataName);
dataExists=(data!=="");
dataContainsValue=data===dataValue;
break;
default:break
}dlog("Tagging: Tag isDataContainingValue {"+dataContainsValue+"}, data="+data+",dataValue="+dataValue+", from "+dataType)
}return dataContainsValue||(dataExists&&dataIsEmpty)
};
Tags.prototype.hasTagBeenProcessed=function(identifier){var searchResult=this.tagsSet.indexOf(identifier);
var isBeenProcessed=searchResult>-1;
return isBeenProcessed
};
Tags.prototype.isContentTag=function(tag){var reg=/\@\@contenttag:(.*?)\@\@/g;
var matches=null;
var tagString="";
var contentMetatags=PS.util.jspVars.get("contentMetatags");
var checkContentTag=function(tag){if(tag.src_vars.length>0){for(var i=0;
i<tag.src_vars.length;
i++){matches=tag.src_vars[i][1].match(reg);
if(matches!==null){return true;
break
}}}return false
};
var getContentTag=function(){if(matches[0]!=""){return matches[0].slice(0,-2).replace("@@contenttag:","")
}else{return""
}};
var isPageTag=function(tmTag){var pageTagsArray=[];
if(contentMetatags){pageTagsArray=contentMetatags.split("|");
for(var i=0;
i<pageTagsArray.length;
i++){if(pageTagsArray[i]===tmTag){return true;
break
}}return false
}};
if(checkContentTag(tag)!==false){tagString=getContentTag();
if(isPageTag(tagString)){return true
}else{return false
}}else{return true
}};
Tags.prototype.processTag=function(tag){if(!this.isContentTag(tag)){tag.error=true
}if(!tag.error){this.replaceStaticParameters(tag);
switch(tag.type){case"element":var tagHTML=this.simpleTag(tag);
this.tagHTML+=tagHTML;
dlog("Tagging: Tag has been processed as an element");
break;
case"script":this.scriptTag(tag);
dlog("Tagging: Tag has been processed as a script");
break;
default:break
}this.tagsSet+=(tag.tagId||"");
if(tag.scope===this.siteScopeType){this.siteScopeTagsSet+=tag.tagId;
dlog("Tagging: Tag has been added to the site scope tags")
}}else{dlog('Tagging: Tag has not been processed: tag.error:"'+tag.error+'"')
}};
Tags.prototype.stripProtocol=function(url){url=url||"";
url=url.substr(url.indexOf("://")+1);
return url
};
Tags.prototype.chooseSrc=function(tag){var url=tag.src;
if(!!tag.secureSrc&&tag.secureSrc.length>0){url=tag.secureSrc
}tag.processedSrc=url
};
Tags.prototype.replaceStaticParameters=function(tag){var url=tag.processedSrc;
url=this.stripProtocol(url);
url=this.replaceTimestamp(url);
url=this.replaceRandom(url);
tag.processedSrc=url
};
Tags.prototype.replaceRandom=function(url){if(url.indexOf("random")>-1){url=url.replace(/([\?=&\/])random[\d]*(?!=|\w|\d)/gi,"$1"+this.randNum)
}return url
};
Tags.prototype.replaceTimestamp=function(url){if(url.indexOf("timestamp")>-1){url=url.replace(/([\?=&\/])timestamp[\d]*(?!=|\w|\d)/gi,"$1"+this.timeStamp)
}return url
};
Tags.prototype.replaceVars=function(tag){jq(tag.src_vars).each(function(){tag.processedSrc=tag.processedSrc.replace(new RegExp("__"+this[0]+"__","g"),this[1])
});
dlog("Tagging: Tag vars replaced. Source has been modified to: ",tag.processedSrc)
};
Tags.prototype.simpleTag=function(tag){var tagHtml="";
switch(tag.element){case"iframe":tagHtml='<iframe src="'+tag.processedSrc+'" width="1" height="1" frameborder="0" style="display:none"></iframe>';
break;
case"img":tagHtml='<img src="'+tag.processedSrc+'" border="0" height="1" width="1" />';
break;
case"js":tagHtml='<script src="'+tag.processedSrc+'" async defer><\/script>';
break;
case"":break;
default:tagHtml="<"+tag.element+' src="'+tag.processedSrc+'" style="display:none"></'+tag.element+">";
break
}dlog("Tagging: Tag is a simple tag and the html produced is: ",tagHtml);
return tagHtml
};
Tags.prototype.scriptTag=function(tag){var that=this;
if(tag.pre_vars.length>0){this.processVars(tag.pre_vars)
}dlog("Tagging: Loading script tag source: ",tag.processedSrc);
jq.ajax({url:tag.processedSrc,type:"GET",dataType:"script",cache:tag.forceCachedScript,success:function(){if(tag.post_vars.length>0){that.processVars(tag.post_vars)
}if(tag.func.length>0){that.runFunction(tag)
}dlog("Tagging: Completed loading script tag: ",tag.processedSrc)
},error:function(){dlog("Tagging: Could not load script tag: ",tag.processedSrc)
}})
};
Tags.prototype.getUrlFilname=function(url){var filename=url.substring(url.lastIndexOf("/")+1).split(".");
return filename[0]
};
Tags.prototype.processProductVars=function(data,version){if(data){try{var fields,productType,initialReturnData=this.getUrlFilname(window.location.pathname),returnData=initialReturnData,totalkeys=0,totalTrues=0,productsJsonData=JSON.parse(data);
if(version==3){returnData=""
}for(var key in productsJsonData){if(productsJsonData[key]===true){fields=key.split("_");
productType=fields[1];
if(version===0){returnData=returnData+"_"+productType.substr(productType.length-3);
dlog("Tagging: Product case Script: version "+version+" (3 characters)")
}else{returnData=returnData+"_"+productType;
dlog("Tagging: Product case Script: version "+version+" (All characters)")
}totalTrues++
}totalkeys++
}if(totalkeys===totalTrues){dlog("Tagging: Product case Script, Total keys match total trues, therefore will keep the filename and remove the product codes around: ",returnData);
if(version==3){returnData=""
}else{returnData=initialReturnData
}}dlog("Tagging: Product case Script variable set: ",returnData);
return returnData
}catch(e){dlog("Tagging: Product case Script variable issue: ",returnData)
}}else{dlog("Tagging: Product case Script variable empty: ",returnData);
return"_null"
}};
Tags.prototype.tagmanfilename=function(url){var index=url.lastIndexOf("/")+1,filenameWithExtension=url.substr(index),filename=filenameWithExtension.split(".")[0];
dlog("Tagging: Hook : {filename} => "+filename);
return filename
};
Tags.prototype.tagmanParentDirectory=function(url){var paths=url.split("/");
var parentDirectory=paths[paths.length-2];
dlog("Tagging: Hook : {parentDirectory} => "+parentDirectory);
return parentDirectory
};
Tags.prototype.processHook=function(vars){var i=0,p=0,a=0,reg=/\#(.*?)\#/g,varHasHook=[],varHookName="",varHookValue="",varsLength=vars.length,varHasHookLength,varEdited=[];
if(varsLength>0){for(i=0;
i<varsLength;
i++){for(a=0;
a<vars[i].length;
a++){if((reg).test(vars[i][a])){varHasHook=vars[i][a].match(reg);
varHasHookLength=varHasHook.length;
dlog("Tagging: Hooks {"+varHasHookLength+"}, Found in..."+vars[i][a]);
for(p=0;
p<varHasHookLength;
p++){varHookName=varHasHook[p].replace(/##/gi,"");
switch(varHookName){case"#filename#":varHookValue=this.tagmanfilename(window.location.pathname);
break;
case"#parentDirectory#":varHookValue=this.tagmanParentDirectory(window.location.pathname);
break;
default:varHookValue=this.checkIfCookieHookAndProcess(varHookName)
}vars[i][a]=vars[i][a].replace(varHasHook[p],varHookValue.toLowerCase())
}varEdited.push(vars[i]);
dlog("Tagging: Hooks : {"+vars[i][a]+"}")
}}this.setVar(vars[i])
}}};
Tags.prototype.checkIfCookieHookAndProcess=function(vars){var reg=/\@\@(.*?)\@\@/g,version=0,varsLength=vars.length,varCookieName,varCookieValue="";
if(varsLength>0){if((reg).test(vars)){varCookieName=vars.replace("#@@","");
varCookieName=varCookieName.replace("@@#","");
if(varCookieName.indexOf(":")!==-1){version=parseInt(varCookieName.substr(varCookieName.indexOf(":")+1));
varCookieName=varCookieName.split(":")[0]
}varCookieValue=decodeURIComponent(PS.util.Cookie.get(varCookieName))||"_null";
if(varCookieName.toLowerCase()=="products"){varCookieValue=this.processProductVars(varCookieValue,version)
}}}dlog("Tagging: Hook : "+vars+" => "+varCookieValue);
return(varCookieValue)
};
Tags.prototype.processVars=function(vars){this.processHook(vars)
};
Tags.prototype.setVar=function(variable){var name=variable[0];
var value=variable[1];
var objArray=[];
var parentObj={};
var objReference=window;
var objRefName=name.split(".");
for(var i=0;
i<objRefName.length-1;
i++){if(objRefName[i]=="window"){objReference=window
}else{if(objRefName[i]=="document"){objReference=document
}else{if(!objReference[objRefName[i]]){objReference[objRefName[i]]={}
}objReference=objReference[objRefName[i]]
}}}if((value==="true")||(value==="false")){objReference[objRefName[objRefName.length-1]]=value=="true"
}else{if(jq.isNumeric(value)){objReference[objRefName[objRefName.length-1]]=parseFloat(value)
}else{if((value.indexOf("obj-")>-1)||(value.indexOf("obj_")>-1)){value=value.replace("obj-","").replace("obj_","");
if(value.indexOf("||")>-1||value.indexOf("&&")>-1||value.indexOf("[")>-1||value.indexOf("(")>-1){if(typeof objReference[objRefName[objRefName.length-1]]==="undefined"){objReference[objRefName[objRefName.length-1]]=""
}objReference[objRefName[objRefName.length-1]]=eval(value);
return false
}objArray=value.split(".");
for(var j=0;
j<objArray.length;
j++){if(objArray[j]!=="window"||"document"){if(j===0){parentObj=window
}if(typeof parentObj[objArray[j]]==="undefined"){parentObj[objArray[j]]={};
dlog("Tagging: setVar: object ["+parentObj+"."+objArray[j]+"] not found, empty placeholder created")
}parentObj=parentObj[objArray[j]]
}}objReference[objRefName[objRefName.length-1]]=parentObj
}else{objReference[objRefName[objRefName.length-1]]=value
}}}};
Tags.prototype.runFunction=function(tag){var func=tag.func.split("("),trimmedVar;
if(window[func[0]]){if(func[1]){var vars=func[1].replace(")","").split(","),varNo=vars.length;
while(varNo--){trimmedVar=vars[varNo].trim();
if(trimmedVar.indexOf('"')>-1){vars[varNo]=trimmedVar.replace(/"/g,"")
}else{vars[varNo]=window[trimmedVar]
}}dlog("Tagging: runFunction: Found the following function arguments: ",vars,"Now running: ",func[0]+"()");
window[func[0]].apply(undefined,vars)
}else{dlog("Tagging: runFunction: No function arguments found. Now running: ",func[0]+"()");
window[func[0]]()
}}else{dlog("Tagging: runFunction: Could not find function",func[0]+"()")
}};
Tags.prototype.updateTagsSetCookie=function(){if((this.siteScopeTagsSet.length>0)&&(this.siteScopeTagsSet!==PS.util.Cookie.get("igTags"))){PS.util.Cookie.set("igTags",this.siteScopeTagsSet);
dlog('Tagging: Updating "igTags" cookie with value: ',PS.util.Cookie.get("igTags"))
}};
PS.util.Tags=new Tags()
}(PS));
window.PS=window.PS||{};
PS.util=PS.util||{};
(function(g){var f=document;
function e(j){var h=j.lastIndexOf("http://"),k=j.lastIndexOf("https://");
return h>0?h:k
}var c=function(){if(jq("#share-plusone").length>0){var k="";
switch(g.util.Page.locale()){case"":k="en-GB";
break;
case"en_GB":case"zh_TW":case"zh_CN":case"pt_PT":k=g.util.Page.locale().replace("_","-");
break;
default:k=g.util.Page.locale().substring(0,g.util.Page.locale().indexOf("_"))
}window.___gcfg={lang:k};
var h=document.createElement("script");
h.type="text/javascript";
h.async=true;
h.src="https://apis.google.com/js/plusone.js";
var j=document.getElementsByTagName("script")[0];
j.parentNode.insertBefore(h,j)
}};
var b=function(){jq(".sharebanner li a").click(function(n){if(jq(this).hasClass("openPopup")){n.preventDefault();
var o=jq("link[rel=canonical]").attr("href");
var t=jq(this).attr("href");
var k=e(t);
var r=t.slice(0,k);
var q=t.slice(k);
var m=q.indexOf("&");
if(m==-1){q=o;
var j=r+q;
h(j)
}else{var p=q.slice(0,m);
var l=q.slice(m);
var j=r+o+l;
h(j)
}}});
var h=function(l){if(!jq("body").hasClass("tablet")&&!jq("body").hasClass("mobile")&&!jq("body").hasClass("touch")){var k=700;
var n=500;
var j=(screen.width/2)>k?(screen.width/2):k;
var m=(screen.height/2)>n?(screen.height/2):n;
var p=(screen.width/2)-(j/2);
var o=(screen.height/2)-(m/2);
var q="width="+j+",height="+m+",left="+p+",top="+o+",menubar=no, toolbar=no";
dlog("Sharebanner: opening popup window for "+l);
window.open(l,"_blank",q)
}}
};
var a=function(){var h=document.getElementById("share-mail"),m=document.getElementsByTagName("title")[0],l=window.location.href,k=m?m.innerText:"",j="mailto:?subject="+k+"&body="+l;
if(!!h){h.href=j
}};
g.util.shareMailUrl=a;
g.util.ActivateGoogleplus=c;
g.util.ShareBannerLinks=b
}(PS));
window.PS=window.PS||{};
window.i18n=window.i18n||{};
(function(h,f,l){var j={TAB:9,ARROW_DOWN:40,ARROW_UP:38,ENTER:13};
function e(m){this.options={inputElement:null,searchButton:null,resultsElement:null,suggestionsElement:null,textSource:null,limitSuggestionsTo:4,service:"/service.json",allowedSearch:/^(\w|\d|[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B)(.*)$/,CacheManager:g,EventManager:c};
f.extend(this.options,m);
this.items=[{value:"Example 1",data:"ex1",rows:[{row:["Row 1, 1","Row 1,2","Row 1,3"]}]},{value:"Example 2",data:"ex2",rows:[{row:["Row 2, 1","Row 2,2","Row 2,3"]}]}];
this.suggestions=[];
this.cache=new this.options.CacheManager();
this.events=new this.options.EventManager()
}e.prototype.templates={results:'<table class="itemFinderGrid"> 			<tr> 			{{ #columns }} 				<th>{{ . }}</th> 			{{ /columns }} 			</tr> 			{{ #rows }} 			<tr> 				{{ #row }} 				<td>{{ . }}</td> 				{{ /row }} 			</tr> 			{{ /rows }} 		</table> 		',suggestions:'<ul id="shareresults" class="sharefinder-dropdown"> 			{{ #suggestions }} 				<li class="sharelist-item  suggestion"><a tabindex="0" class="sharelist-share">{{ value }}</a></li> 			{{ /suggestions }} 			</ul> 		',noResults:'<div class="no-results">{{ noResults }}</div>'};
e.prototype.resultsColumns=function(){return["Col 1","Col2","Col3"]
};
e.prototype.initialise=function(){var m=this;
var p=e.generateId();
var o=f(".logo-link").attr("href");
m.suggestionsElement=m.options.suggestionsElement||f("<div />",{id:"itemFinderSuggestions"+p});
m.suggestionsElement.attr("class","suggestion-finder-style");
var n=jQuery("#sharefinder-search-wrapper").width();
if(m.options.inputElement){m.options.inputElement.after(m.suggestionsElement).on("blur",function(){setTimeout(function(){if(!m.suggestionsElement.find(".suggestion *").is(":focus")){m.suggestionsElement.hide()
}},300)
});
if(!m.options.resultsElement){m.options.resultsElement=f("<div />",{id:"itemFinderResults"+p});
m.options.inputElement.after(m.options.resultsElement)
}if(typeof m.options.buttonSearch!="undefined"){m.options.buttonSearch.on("click",function(r){var q=m.getSearchInfo();
var t=q.input.match(m.options.allowedSearch);
if(m.options.inputElement.val()==m.options.inputElement.attr("placeholder")){m.options.inputElement.val("");
m.options.inputElement.removeClass("placeholdersjs");
m.options.inputElement.focus();
r.preventDefault();
return false
}else{if(m.options.inputElement.val()==""){m.options.inputElement.removeClass("placeholder");
m.options.inputElement.focus();
r.preventDefault();
return false
}else{if(t){m.doMainSearch(q.input,m.options.urlPage)
}r.preventDefault();
return false
}}})
}m.options.inputElement.on("focusin keyup",function(r){var q=m.getSearchInfo();
var t=q.input.match(m.options.allowedSearch);
if((r.keyCode===j.ENTER)&&(t)){m.doMainSearch(q.input,m.options.urlPage)
}if(t){m.events.trigger("ItemFinder.search.start",{triggeredBy:m.options.inputElement,value:q.input});
if(!m.cache.exists(q.cacheIndex)){m.items=m.loadItems(q);
m.cache.add(m.items,q.cacheIndex)
}else{m.items=m.cache.get(q.cacheIndex)
}m.loadSuggestions(q).bindSuggestions(q,r.keyCode)
}else{m.suggestionsElement.hide()
}})
}return m
};
e.prototype.doMainSearch=function(m,o){var n=o+"/ig-search?query="+m;
window.location.href=n;
return false
};
e.prototype.getSearchInfo=function(){return{input:this.options.inputElement.val(),cacheIndex:"itemFinder"}
};
e.prototype.loadItems=function(){return this.loadItemsFromService(this.options.service)
};
e.prototype.loadItemsFromService=function(m){var o=this;
var n=[];
var p=f.ajax({url:m,async:false,success:function(q){n=o.format(q)
}});
return n
};
e.prototype.format=function(m){return m
};
e.prototype.loadSuggestions=function(m){if(m.input.length>0){this.suggestions=this.filter(m.input,this.items,this.options.limitSuggestionsTo);
this.suggestions=this.sort(this.suggestions)
}return this
};
e.prototype.bindSuggestions=function(o,n){var m=this;
if(m.suggestions.length>0){var p=new m.SuggestionsView({suggestionsElement:m.suggestionsElement,template:m.templates.suggestions,suggestions:m.suggestions}).render();
m.suggestionsElement.find(".suggestion").on("click keyup",function(t){if(t.type==="click"||(t.type==="keyup"&&t.keyCode===j.ENTER)){var q=f(this).index();
m.events.trigger("ItemFinder.search.selected",{triggeredBy:m.options.inputElement,index:q,data:m.suggestions[q].data,value:m.suggestions[q].value});
var r=new m.ResultsView({template:m.templates.results,suggestionsElement:m.suggestionsElement,suggestionsIndex:m.suggestions[q],resultsElement:m.options.resultsElement,columns:m.resultsColumns(),rows:m.suggestions[q].rows,info:m.suggestions[q].info}).render()
}}).find("*").on("blur",function(){setTimeout(function(){if(!m.suggestionsElement.find(".suggestion *").is(":focus")){m.suggestionsElement.hide()
}},0)
})
}else{m.suggestionsElement.off().html(Mustache.render(m.templates.noResults,{noResults:l["clientlibs.sharefinder.no-results"]||"No Results"})).show()
}return m
};
e.prototype.filter=function(y,u,p){var w=[];
var t=0;
var o=u.length;
var n=y.toLowerCase();
for(var r=0;
r<o;
r++){var x=u[r];
var q=x.value.toLowerCase().match(n);
var m=q&&q.length>0?true:false;
if(typeof x!="undefined"&&m&&t<p){w.push(x);
t++
}}return w
};
e.prototype.sort=function(m){return m.sort(function(o,n){if(o.value<n.value){return -1
}if(o.value>n.value){return 1
}return 0
})
};
e.generateId=function b(){return Math.floor(Math.random()*99999)
};
e.start=function(n,m){var o=f(m);
o.parents(".mboxPanel").css("overflow","visible");
o.each(function(){var q=f(this).parents("form");
var r=new n({inputElement:f(this),resultsElement:q.next(),urlPage:f("body").find(".logo-link").attr("href"),textSource:q.find(".textSource"),buttonSearch:q.find(".search-btn"),limitSuggestionsTo:q.attr("data-suggestionslimit")}).initialise();
var p=q.parents(".cols");
if(p.length>0){p.css("overflow","visible").after(f("<div />",{style:"clear:both"}))
}})
};
function g(){this.cache=[]
}g.prototype={add:function(n,m){this.cache[m]=n
},set:function(n,m){if(this.cache[m]){this.cache[m]=n
}},remove:function(m){delete this.cache[m]
},empty:function(m){if(this.cache[m]){this.cache[m].length=0
}},exists:function(m){if(this.cache[m]){return true
}return false
},get:function(m){if(this.cache[m]){return this.cache[m]
}}};
function c(){}c.prototype={trigger:function(n,m){return h.util.pubsub.publish(n,m)
}};
function a(m){this.options=m;
return this
}a.prototype.render=function(){var m=this;
m.options.suggestionsElement.hide();
m.options.resultsElement.html(Mustache.render(m.options.template,{columns:m.options.columns,rows:m.options.rows,info:m.options.info})).show()
};
e.prototype.ResultsView=a;
function k(m){this.options=m;
return this
}k.prototype.render=function(){var m=this;
m.options.suggestionsElement.html(Mustache.render(m.options.template,{suggestions:m.options.suggestions})).show()
};
e.prototype.SuggestionsView=k;
h.ItemFinder=e
})(PS,jq,i18n);
(function(e,c,b){function a(f){e.ItemFinder.call(this,f);
this.templates=c.extend(e.ItemFinder.prototype.templates);
var g=this.options.inputElement.parents("form");
this.traderOnly=g.attr("data-traderonly")==="true";
this.traderAccount=g.attr("data-traderaccount")
}a.prototype=new e.ItemFinder();
a.prototype.constructor=a;
a.prototype.loadItems=function(f){return this.loadItemsFromService("/content/files/margins/"+f.input.charAt(0)+".psv")
};
a.prototype.getSearchInfo=function(){return{input:this.options.inputElement.val().toLowerCase(),cacheIndex:this.options.inputElement.val().charAt(0)}
};
a.prototype.format=function(h){var g=this;
var m=h.split("\n");
var k=m.length;
var f=[];
var l=function(o){var p="";
if(o==="n"){p=b["clientlibs.no"]||"NO"
}if(o==="y"){p=b["clientlibs.yes"]||"YES"
}if(o==="c"){p=b["clientlibs.yes_no_cr"]||"YES (NO CR)"
}return p.toUpperCase()
};
for(var j=0;
j<k;
j++){var n=m[j].split("|");
if(n[1]!=undefined){f.push({value:n[1],data:n[0],info:{heading:n[1]+" ("+n[0]+")",canGoShort:l(n[3]),newPosAllowed:l(n[4]),riskPremium:n[5],canGoShortLabel:b["clientlibs.sharefinder.short"]||"Can it go short",newPosAllowedLabel:b["clientlibs.sharefinder.positions"]||"New positions allowed",riskPremiumLabel:b["clientlibs.sharefinder.premium"]||"Limited risk premium"},rows:(function(){var o=[];
o.push({row:[1,n[6],n[7],n[7]]});
o.push({row:[2,n[8],n[9],n[10]]});
o.push({row:[3,n[11],n[12],n[13]]});
o.push({row:[4,n[14],n[15],n[15]]});
if(g.traderOnly){c.map(o,function(q,p){o[p].row.splice(2,1)
})
}return o
})()})
}}return f
};
a.prototype.resultsColumns=function(){var f=[b["clientlibs.sharefinder.tier"]||"Tier",b["clientlibs.sharefinder.range"]||"Range"];
if(!this.traderOnly){f.push(b["clientlibs.sharefinder.select"]||"Select");
if(this.traderAccount==="default"){f.push(b["clientlibs.sharefinder.trader"]||"Trader")
}else{f.push(this.traderAccount)
}}else{f.push(b["clientlibs.sharefinder.deposit"]||"Deposit")
}return f
};
a.prototype.templates.results='<div class="sharefinder-data"> 		{{ #info }} 			<h4 class="heading" id="share-name">{{ heading }}</h4> 			<dl class="share-info clearfix"> 				<dt class="share-question">{{ canGoShortLabel }}</dt> 				<dd class="share-answer" id="share-can-be-shorted">{{ canGoShort }}</dd> 				<dt class="share-question">{{ riskPremiumLabel }}</dt> 				<dd class="share-answer" id="share-limited-risk-premium">{{ riskPremium }}</dd> 				<dt class="share-question">{{ newPosAllowedLabel }}</dt> 				<dd class="share-answer" id="share-new-positions-allowed">{{ newPosAllowed }}</dd> 			</dl> 		</div> 		{{ /info }} 		<table class="sharefinder-table table-zebra-rows"> 	    <tr> 	    {{ #columns }} 	        <th class="sharefinder-table-header">{{ . }}</th> 	    {{ /columns }} 	    </tr> 	    {{ #rows }} 	    <tr> 	    {{ #row }} 	        <td>{{ . }}</td> 	    {{ /row }} 	    </tr> 	    {{ /rows }} 	</table>';
e.ShareFinder=a
})(PS,jq,i18n);
(function(e,b,a){function c(f){e.ItemFinder.call(this,f);
this.templates=b.extend(e.ItemFinder.prototype.templates)
}c.prototype=new e.ItemFinder();
c.prototype.constructor=c;
c.prototype.loadItems=function(){var h=[];
var k=[];
var g=[];
try{var f=b.parseJSON(this.options.textSource.text());
g=f.ShortReport.StockFull;
k=f.ShortReport.StockIndex;
for(var l in k){var m=g[l];
m=m.split(",");
h.push({value:l+" : "+k[l],data:l,rows:{row:[l,k[l],m[0],m[1],m[2],m[3],m[4],m[5]]}})
}}catch(j){dlog("Sharefinder: "+j.message)
}return this.sort(h)
};
c.prototype.filter=function(q,n,j){var o=[];
var m=0;
var h=n.length;
var g=q.toLowerCase();
for(var l=0;
l<h;
l++){var p=n[l];
var f=false;
if(q.length<=3){f=p.data.toLowerCase().substring(0,g.length)===g
}else{var k=p.value.toLowerCase().match(g);
f=k&&k.length>0?true:false
}if(typeof p!="undefined"&&f&&m<j){o.push(p);
m++
}}return o
};
c.prototype.resultsColumns=function(){return[a["clientlibs.shortreport.code"]||"Code",a["clientlibs.shortreport.name"]||"Name",a["clientlibs.shortreport.1weekago"]||"1 week ago",a["clientlibs.shortreport.2weeksago"]||"2 weeks ago",a["clientlibs.shortreport.1monthago"]||"1 month ago",a["clientlibs.shortreport.3monthsago"]||"3 months ago",a["clientlibs.shortreport.canigoshort"]||"Can I go short through IG",a["clientlibs.shortreport.margin"]||"Margin"]
};
c.prototype.templates.results='<div class="sharefinder-data"> 			<table class="sharefinder-table table-zebra-rows"> 	        <tr> 	        {{ #columns }} 	            <th class="sharefinder-table-header">{{ . }}</th> 	        {{ /columns }} 	        </tr> 	        {{ #rows }} 	        <tr> 	        {{ #row }} 	            <td>{{ . }}</td> 	        {{ /row }} 	        </tr> 	        {{ /rows }} 	    </table>';
e.ShortReport=c
})(PS,jq,i18n);
(function(g,e,c){var a={uriSegment:"/"+location.pathname.split("/")[location.href.indexOf("ig.com/t/")>-1?2:1],browser:e("meta[name=locale]").attr("content")};
function f(h){g.ItemFinder.call(this,h);
this.templates=e.extend(g.ItemFinder.prototype.templates)
}f.prototype=new g.ItemFinder();
f.prototype.constructor=f;
f.prototype.marketCodeRegex=/^(.*?)\s\-/i;
f.prototype.loadItems=function(h){var j=encodeURIComponent(h.input);
return this.loadItemsFromService(a.uriSegment+"/ig-proxy/marketsearch/suggest?cq_locale="+a.browser+"&query="+j)
};
f.prototype.getSearchInfo=function(){return{input:this.options.inputElement.val().toLowerCase(),cacheIndex:this.options.inputElement.val()}
};
f.prototype.format=function(k){var j=this;
var h=[];
var n=k.searchResults;
var m=n.length;
for(var l=0;
l<m;
l++){var o=n[l];
h.push({value:o.marketId+" - "+o.name,data:o.url})
}return h
};
function b(h){this.options=h;
return this
}b.prototype.render=function(){var h=this.options.suggestionsIndex.value.match(f.prototype.marketCodeRegex)[1];
location.href=a.uriSegment+this.options.suggestionsIndex.data+"?marketfinder="+h
};
f.prototype.ResultsView=b;
g.MarketFinder=f
})(PS,jq,i18n);
window.PS=window.PS||{};
PS.util=PS.util||{};
(function(a,b){var e="/content/igcom/en_GB.calendar.json";
function c(f){if(!(this instanceof c)){return new c()
}f=f||{};
this.titleList=f.titleSelector?b(f.titleSelector):b(".live-video-title");
this.descriptionList=f.descriptionSelector?b(f.descriptionSelector):b(".live-video-description");
this.valid=f.forceValid||this.titleList.length>0||this.descriptionList.length>0
}c.prototype.go=function(){var g=this;
try{if(this.valid===true){b.ajax(e).done(function(h){g.successFunc(h,g.titleList,g.descriptionList)
}).fail(function(){g.failureFunc()
})
}}catch(f){dlog("Error in LiveVideoCheck.go")
}};
c.prototype.successFunc=function(f,m,g){var j=[];
var l="";
var k="";
try{if(typeof f==="string"){j=JSON.parse(f)
}else{if(typeof f==="object"){j=f
}else{dlog("JSON details neither string nor object")
}}if(j.length>0){j=j[0];
l=j.title;
k=j.description;
if(m.length>0||g.length>0){if(l){m.html(l)
}if(k){g.html(k)
}}}}catch(h){dlog("Error in on Success")
}};
c.prototype.failureFunc=function(){dlog("Live Video Check AJAX Call Failed")
};
a.LiveVideoCheck=c
})(PS.util,window.jQuery);
window.PS=window.PS||{};
PS.util=PS.util||{};
(function(c){var b;
function a(){b=this
}a.prototype.build=function(e,g,f){this._settings=f||a.prototype.SMALL_DONUT_SETTINGS;
this._jParent=e;
this._longPercent=g;
this._width=e.width();
this._height=e.height();
this._halfWidth=this._width/2;
this._halfHeight=this._height/2;
this._halfLineWidth=this._settings.segmentWidth/2;
this._isScaffold=this._jParent.hasClass("doughnut-scaffold-render");
if(this.supportsCanvas()){this._initialise();
this.updateAll()
}else{this.scaffoldFallback(this._jParent,this._longPercent)
}this._generateText(this._jParent,this._longPercent)
};
a.prototype.SMALL_DONUT_SETTINGS={segmentWidth:15,gapWidth:2,colors:{sell:"#da291c",buy:"#0095d6"},backgroundColor:"#f3f2ee"};
a.prototype.LARGE_DONUT_SETTINGS={segmentWidth:20,gapWidth:2,colors:{sell:"#da291c",buy:"#0095d6"},backgroundColor:"#f3f2ee"};
a.prototype._canvas=null;
a.prototype._ctx=null;
a.prototype._initialise=function(){if(this._jParent.find("canvas").length==0){this._canvas=document.createElement("canvas");
this._canvas.width=this._width;
this._canvas.height=this._height;
this._jParent.append(this._canvas);
this._ctx=this._canvas.getContext("2d")
}};
a.prototype.supportsCanvas=function(){return !!document.createElement("canvas").getContext
};
a.prototype._getSegments=function(){return[{angle:this._longPercent*3.6,color:this._settings.colors.buy},{angle:(100-this._longPercent)*3.6,color:this._settings.colors.sell}]
};
a.prototype._renderArc=function(g,f,h,j,e){this._ctx.beginPath();
this._ctx.strokeStyle=j;
this._ctx.lineWidth=e||this._halfLineWidth*2;
this._ctx.arc(this._halfWidth,this._halfHeight,h,this._angleToRadians(g),this._angleToRadians(f),false);
this._ctx.stroke()
};
a.prototype._renderGap=function(e,f){var g=this._angleToRadians(e);
this._ctx.beginPath();
this._ctx.strokeStyle=this._settings.backgroundColor;
this._ctx.lineWidth=this._halfLineWidth*2;
this._ctx.arc(this._halfWidth,this._halfHeight,f,g,g+0.05,false);
this._ctx.stroke()
};
a.prototype._renderBevel=function(g){var f=this._settings.segmentWidth/2,e="rgba(255, 255, 255, 0.25)";
this._renderArc(0,360,g-(f/2),e,f);
this._renderArc(0,360,((this._width-f-(f/2))/2),"rgba(255, 255, 255, 0.6)",(f/2))
};
a.prototype.updateAll=function(){this._ctx.clearRect(0,0,this._width,this._height);
var j=this._settings,h=this._getSegments(),l=h.length,m=(this._width-j.segmentWidth-j.segmentWidth)/2,g=0,f=0,e,k;
for(k=0;
k<l;
k++){e=h[k];
f+=e.angle;
this._renderArc(g,f,m,e.color);
g=f
}this._renderBevel(m);
for(k=0;
k<l;
k++){e=h[k];
f+=e.angle;
this._renderGap(g,m);
g=f
}};
a.prototype._angleToRadians=function(e){return(e-90)*Math.PI/180
};
a.prototype.destroy=function(){this._jParent.empty()
};
a.prototype.removeAllScaffolds=function(){var g=jq(".doughnut-scaffold-render");
if(g.length){for(var f=0,e=g.length;
f<e;
f++){g.eq(f).empty()
}}};
a.prototype._generateText=function(g,e){if(this._isScaffold){var f=g.parents(".doughnut-scaffold"),k=f.attr("data-i18n-long")||"Long",h=f.attr("data-i18n-short")||"Short",j;
if(e<50){j=h;
e=100-e
}else{j=k
}f.find(".doughnut-percent").empty().append(e+"%");
f.find(".doughnut-position").empty().append(j)
}};
a.prototype.scaffold=function(){var j=jq(".doughnut-scaffold-render");
if(j.length){for(var h=0,e=j.length;
h<e;
h++){var m=j.eq(h),g=this,f=m.attr("data-long-default")||50,k=m.attr("data-feed")||false;
if(k){(function(){var o=m,l=f,n=k;
jq.ajax({url:n}).done(function(p){if(typeof p.positions!="undefined"){if(p.positions.longPercent==0&&p.positions.shortPercent==0){g.build(o,l)
}else{g.build(o,p.positions.longPercent)
}}else{g.build(o,l)
}}).fail(function(p){g.build(o,l)
})
})()
}else{this.build(m,f)
}}}};
a.prototype.scaffoldFallback=function(e,f){if(this._isScaffold){e.css("background-image","url(/etc/designs/onedomain/images/doughnuts/"+f+".png)")
}};
c.util.Donut=new a()
}(PS));
window.i18n=window.i18n||{};
window.PS=window.PS||{};
PS.util=PS.util||{};
PS.util.pubsub=PS.util.pubsub||{};
PS.util.jspVars=PS.util.jspVars||{};
PS.storage=PS.storage||{};
PS.storage.LocalQueue=PS.storage.LocalQueue||{};
PS.util.url=PS.util.url||{};
(function(p,af,a,J){var aa="livechat: ";
var ac=10;
var Q=1000;
var L;
var m;
var g;
var A="liveChatPopup";
var M="left=50,top=50,height=500,width=420,resizable,scrollbars";
var ag=3000;
var K="https://la1a1.salesforceliveagent.com/content/g/js/32.0/deployment.js";
var w="https://d.la1a1.salesforceliveagent.com/chat";
var X="57320000000000V";
var U="00D200000006kCZ";
var t="57220000000000V";
var ae;
var l="liveChatRejected";
var n="leadCaptureUserInfo";
var ad="liveChatPopupOpen";
var V="liveChatStage";
var h="register";
var u="registered";
var R="no-agent-available";
var y="no-agent-available-thanks";
var W="live-chat-completed";
var k="disabled";
var S="agentOffline";
var x;
var I="agentOfflineMessage";
var N;
var D=false;
var E;
var G;
var b;
var j=false;
var f=false;
var H=false;
var q;
var B;
var C;
var Z;
var z;
var P=p('<div id="livechatOnline" />');
var T=p('<div id="livechatOffline" />');
var O="easeToBottom";
var o="easeAboveStickyFooter";
var Y={MAInsight:".maTemplate",MANews:".sc.pageBody"};
var r=null;
try{if(!!window.localStorage&&typeof window.localStorage==="object"){window.localStorage.setItem("localStorageQuotaCheck",1);
window.localStorage.removeItem("localStorageQuotaCheck");
r=true
}}catch(ab){}if(r){var F=localStorage.getItem("liveChatFormData")
}var c=function(){c.prototype.init()
};
c.prototype.init=function(){m=a.util.Page.environment();
L=window.liveChatPopupWindow;
b=Q*3;
z=p('*[href="#livechat"]');
if(c.prototype.isLiveChatConfigured()){J.remove(V);
c.prototype.listenForApiLoad();
c.prototype.listenForAgentStatus();
c.prototype.chooseEnvironmentVariables(m);
if(c.prototype.isPopupPage()){c.prototype.loadLiveChatAPI();
c.prototype.processPopup()
}else{c.prototype.initAgentStatusRequest();
if(!a.util.jspVars.get("livechat.currentPageLiveChatDisable")){c.prototype.preparePrompt()
}c.prototype.prepareButtons()
}}else{c.prototype.buttonsOffline()
}};
c.prototype.isTouchDevice=function(){return a.util.Browser.isMobileOrTablet()
};
c.prototype.checkRestrictedPage=function(){var e;
for(e in Y){if(Y.hasOwnProperty(e)){var ah=Y[e];
if(p(ah).size()>0){return true
}}}return false
};
c.prototype.isLiveChatConfigured=function(){var e=false;
if(c.prototype.isLiveChatTurnedOn()&&c.prototype.isPopupConfigured()&&!c.prototype.isTouchDevice()&&!c.prototype.checkRestrictedPage()){e=true
}return e
};
c.prototype.isLiveChatTurnedOn=function(){var e=false;
if(a.util.jspVars.get("livechat.activateLiveChat")==="true"){e=true
}return e
};
c.prototype.isPopupConfigured=function(){var e=false;
g=a.util.jspVars.get("livechat.popupPageUri");
if(g!==undefined&&g.length>3){e=true
}return e
};
c.prototype.listenForApiLoad=function(){a.util.pubsub.subscribe("livechat.apiLoaded",function(){j=false;
f=true
});
a.util.pubsub.subscribe("livechat.api.failedToLoad",function(){j=false;
f=false
})
};
c.prototype.listenForAgentStatus=function(){a.util.pubsub.subscribe("livechat.agentStatus",function(ah,e){c.prototype.updateAgentStatus(e)
})
};
c.prototype.isApiLoading=function(){return j
};
c.prototype.hasApiLoaded=function(){return f
};
c.prototype.updateAgentStatus=function(e){if(e===liveagent.BUTTON_EVENT.BUTTON_AVAILABLE){H=true;
a.util.pubsub.publish("livechat.agentAvailable")
}if(e===liveagent.BUTTON_EVENT.BUTTON_UNAVAILABLE){a.util.pubsub.publish("livechat.agentNotAvailable");
H=false
}dlog(aa+"agent status:"+e)
};
c.prototype.isPopupPage=function(){var e=false;
if(document.location.href.indexOf(g)>-1){e=true
}return e
};
c.prototype.chooseEnvironmentVariables=function(e){if(e==="local"||e==="net"){K="https://la1a1.salesforceliveagent.com/content/g/js/32.0/deployment.js";
w="https://d.la2cs.salesforceliveagent.com/chat";
U="00DR0000001ss54";
t="57220000000000V";
X="57320000000000V"
}if(e==="web"){K="https://la1a1.salesforceliveagent.com/content/g/js/32.0/deployment.js";
w="https://d.la2cs.salesforceliveagent.com/chat";
U="00D200000006kCZ";
t="57220000000000V";
X="57320000000000V"
}if(a.util.jspVars.get("livechat.apiUri")!==""){K=a.util.jspVars.get("livechat.apiUri")
}if(a.util.jspVars.get("livechat.initialisationUri")!==""){w=a.util.jspVars.get("livechat.initialisationUri")
}if(a.util.jspVars.get("livechat.deploymentID")!==""){t=a.util.jspVars.get("livechat.deploymentID")
}if(a.util.jspVars.get("livechat.organisationID")!==""){U=a.util.jspVars.get("livechat.organisationID")
}if(a.util.jspVars.get("livechat.buttonID")!==""){X=a.util.jspVars.get("livechat.buttonID")
}if(a.util.jspVars.get("livechat.promptTimeDelay")!==""){ag=parseInt(a.util.jspVars.get("livechat.promptTimeDelay"),ac)
}return{chatApiUri:K,chatInitialisationUri:w,chatDeploymentId:t,chatOrganisationId:U,chatButtonId:X,promptTimeDelay:ag}
};
c.prototype.preparePrompt=function(){q=window.i18n["clientlibs.livechat.prompt"]||"Live Chat";
B=window.i18n["clientlibs.livechat.prompt.close"]||"X";
C=p('<div class="close">'+B+"</div>");
Z=p('<div id="livechatPromptOnline" class="livechat-button livechat-prompt drop-shadow">'+q+"</div>");
if(c.prototype.hasUserRejectedLiveChat()!==true){c.prototype.initAgentStatusRequest();
p("body").append(Z);
Z.append(C);
C.on("click keydown",function(e){e.stopImmediatePropagation();
c.prototype.closePrompt()
});
Z.on("click keydown",function(){s.wa_linkTrack("live_chat_click");
c.prototype.openPopup()
});
c.prototype.updatePromptBasedOnAgentStatus()
}};
c.prototype.initAgentStatusRequest=function(){if(!c.prototype.isApiLoading()&&!c.prototype.hasApiLoaded()){a.util.pubsub.subscribe("livechat.apiLoaded",function(){c.prototype.prepareChatSession()
});
c.prototype.loadLiveChatAPI()
}};
c.prototype.prepareButtons=function(){if(z.length>0){c.prototype.initAgentStatusRequest()
}a.util.pubsub.subscribe("livechat.agentAvailable",function(){c.prototype.buttonsOnline()
});
a.util.pubsub.subscribe("livechat.agentNotAvailable",function(){c.prototype.buttonsOffline()
})
};
c.prototype.prepareButtonOfflineMessage=function(){var e="clientlibs.livechat.agentOfflineMessage";
if(!D){N=window.i18n[e]||"There are no agents currently online";
if(c.prototype.isTouchDevice()){e="clientlibs.livechat.touch.agentOfflineMessage";
N=window.i18n[e]||N
}x='<span class="'+I+'">'+N+"</span>";
D=true
}};
c.prototype.swapCtaButtons=function(ah,e,ai){z.each(function(){var ak=p(this);
var aj=/button-[\w]+/.exec(ak.attr("class"))[0];
ak.removeClass(aj);
ak.siblings().remove();
if(e&&ah===k){ak.addClass("button-"+ah);
ak.after(x)
}if(ai&&ah!==k){ak.addClass("button-"+ah)
}else{window.dlog("Livechat: Problem swapping CTA button class")
}})
};
c.prototype.buttonsOnline=function(){z.on("click keydown",function(){c.prototype.resetLiveChat();
c.prototype.openPopup()
});
z.removeClass(S);
p("."+I).remove();
c.prototype.swapCtaButtons("green",false,true)
};
c.prototype.buttonsOffline=function(){z.addClass(S);
c.prototype.prepareButtonOfflineMessage();
c.prototype.swapCtaButtons(k,true,false);
z.off();
z.on("click keydown",function(){c.prototype.resetLiveChat()
})
};
c.prototype.updatePromptBasedOnAgentStatus=function(){a.util.pubsub.subscribe("livechat.agentAvailable",function(){c.prototype.showPrompt(ag)
});
a.util.pubsub.subscribe("livechat.agentNotAvailable",function(){c.prototype.hidePrompt()
})
};
c.prototype.showPrompt=function(e){if(!c.prototype.hasUserRejectedLiveChat()){e=e||0;
setTimeout(function(){var ah;
if(p(".sticky-footer").is(":visible")){ah=o
}else{ah=O
}if(!Z.hasClass(ah)){s.wa_linkTrack("live_chat_view");
Z.addClass(ah)
}},e)
}};
c.prototype.hidePrompt=function(){Z.removeClass(O).removeClass(o)
};
c.prototype.closePrompt=function(){c.prototype.hidePrompt();
c.prototype.rejectLiveChat()
};
c.prototype.openPopup=function(){if(L){L.focus()
}else{L=window.open(g,A,M)
}c.prototype.setPopupOpen();
c.prototype.pollForOpenPopup()
};
c.prototype.setPopupOpen=function(){J.store(ad,"open")
};
c.prototype.setPopupClosed=function(){J.remove(ad)
};
c.prototype.isPopupOpen=function(){var e=false;
if(J.retrieveLast(ad)==="open"){if(L.closed){c.prototype.closedPopupCleanup();
window.clearInterval(G)
}else{c.prototype.setPopupOpen();
e=true
}}return e
};
c.prototype.closedPopupCleanup=function(){if(L&&!L.closed){L.close()
}G=null;
L=null;
c.prototype.hidePrompt();
c.prototype.setPopupClosed()
};
c.prototype.pollForOpenPopup=function(){if(!G){G=window.setInterval(c.prototype.isPopupOpen,b)
}};
c.prototype.loadLiveChatAPI=function(){window._laq=window._laq||[];
window._laq.push(function(){liveagent.showWhenOnline(X,P[0]);
liveagent.showWhenOffline(X,T[0])
});
j=true;
p.ajax({type:"GET",url:K,dataType:"script",timeout:5000,error:function(e,ai,ah){dlog(aa+"failed to load deployment.js");
a.util.pubsub.publish("livechat.api.failedToLoad");
if(ai==="timeout"){c.prototype.buttonsOffline()
}},success:function(){dlog(aa+"loaded deployment.js");
a.util.pubsub.publish("livechat.apiLoaded")
}})
};
c.prototype.processPopup=function(){var al=p("#livechatPreChatScreen");
var ai=p("#livechatRegisterScreen");
var ak=p("#livechatNoAgentAvailableScreen");
if(F!==null){var e=JSON.parse(F);
var aj;
for(var ah in e){aj=p("[name='"+e[ah].name+"']");
if(aj.length>0){aj.val(e[ah].value)
}}c.prototype.moveToStage(h)
}a.util.pubsub.subscribe("livechat.apiLoaded",function(){liveagent.addButtonEventHandler(X,c.prototype.agentStatusCallback)
});
al.find("button, .button").on("click",function(){c.prototype.moveToStage(h)
});
p(document).on("click keydown",".leadCaptureForm .cta .button",function(){if(ai.find(".form-submiterror").is(":visible")===false&&ai.find(".formField.error").length==0){c.prototype.pushUserDetails();
var am=p(".leadCaptureForm").serializeArray();
if(r){localStorage.setItem("liveChatFormData",JSON.stringify(am))
}c.prototype.registerUser();
a.util.pubsub.subscribe("livechat.agentAvailable",function(){if(c.prototype.isUserRegistered()){c.prototype.launchChatWindow()
}});
a.util.pubsub.subscribe("livechat.agentNotAvailable",function(){if(c.prototype.isUserRegistered()){c.prototype.moveToStage("no-agent-available")
}})
}});
ak.find("button, .button").on("click",function(){c.prototype.moveToStage("no-agent-available-thanks")
});
c.prototype.showReleventStage()
};
c.prototype.showReleventStage=function(){var e=c.prototype.getPopupStage();
var am=p("#livechatPreChatScreen");
var ah=p("#livechatRegisterScreen");
var aj=p("#livechatNoAgentAvailableScreen");
var ai=p("#livechatNoAgentAvailableThankyouScreen");
var al=p("#livechatCompletedThankyouScreen");
var ak=false;
ae=p(".livechat-stage");
ae.addClass("hidden");
if(e===h){ah.removeClass("hidden");
ak=true
}if(e===u){}if(e===R){aj.removeClass("hidden");
dlog("livechat: no agent available after window launch");
ak=true
}if(e===y){ai.removeClass("hidden");
dlog("livechat: no agent available thanks stage");
ak=true
}if(e===W){al.removeClass("hidden");
dlog("livechat: live-chat-completed stage");
ak=true
}if(e===""||!ak){am.removeClass("hidden")
}};
c.prototype.isUserRegistered=function(){var e=false;
if(c.prototype.getPopupStage()===u){e=true
}return e
};
c.prototype.registerUser=function(){J.store(V,u)
};
c.prototype.getPopupStage=function(){return J.retrieveLast(V)
};
c.prototype.pushUserDetails=function(){var ai=J.retrieveLast(n);
var ah;
var e;
if(ai!==""){ah=JSON.parse(ai);
e=ah.prospectClient.forename+" "+ah.prospectClient.surname
}liveagent.addCustomDetail("Contact Email",ah.prospectClient.email).saveToTranscript("Supplied_Email__c");
liveagent.findOrCreate("Contact").map("Email","Contact Email",true,false,false);
liveagent.setName(e);
c.prototype.prepareChatSession()
};
c.prototype.prepareChatSession=function(){liveagent.addButtonEventHandler(X,c.prototype.agentStatusCallback);
liveagent.init(w,t,U)
};
c.prototype.agentStatusCallback=function(e){a.util.pubsub.publish("livechat.agentStatus",e)
};
c.prototype.moveToStage=function(e){J.store(V,e);
c.prototype.showReleventStage()
};
c.prototype.rejectLiveChat=function(){window.sessionStorage.setItem(l,"rejected")
};
c.prototype.hasUserRejectedLiveChat=function(){var e=false;
if(window.sessionStorage.getItem(l)){e=true
}return e
};
c.prototype.resetLiveChat=function(){J.remove(l);
J.remove(ad)
};
c.prototype.launchChatWindow=function(){liveagent.startChatWithWindow(X,A)
};
a.util.LiveChat=c
}(jq,window.i18n,PS,PS.storage.LocalQueue));
window.PS=window.PS||{};
PS.util=PS.util||{};
(function(b){function a(){this.countries={AL:{name:"Albania",cc:"AL",url:"www.ig.com/it",sid:"eng",locale:"en_GB",mo:"ITA",localName:"Albania"},DZ:{name:"Algeria",cc:"DZ",url:"www.ig.com/fra",sid:"fra",locale:"fr_FR",mo:"FRA",localName:"Algérie"},AS:{name:"American Samoa",cc:"AS",url:"www.ig.com/au",sid:"eng",locale:"en_GB",mo:"MEL",localName:"American Samoa"},AD:{name:"Andorra",cc:"AD",url:"www.ig.com/es",sid:"esm",locale:"es_ES",mo:"SPA",localName:"Andorra"},AO:{name:"Angola",cc:"AO",url:"www.ig.com/por",sid:"por",locale:"pt_PT",mo:"SPA",localName:"Angola"},AI:{name:"Angullia",cc:"AI",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Angullia"},AQ:{name:"Antarctica",cc:"AQ",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Antarctica"},AG:{name:"Antigua and Barbuda",cc:"AG",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Antigua and Barbuda"},AR:{name:"Argentina",cc:"AR",url:"www.ig.com/esp",sid:"esp",locale:"es_ES",mo:"LON",localName:"Argentina"},AM:{name:"Armenia",cc:"AM",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Armenia"},AW:{name:"Aruba",cc:"AW",url:"www.ig.com/esp",sid:"esp",locale:"es_ES",mo:"SPA",localName:"Aruba"},AU:{name:"Australia",cc:"AU",url:"www.ig.com/au",sid:"aum",locale:"en_GB",mo:"MEL",localName:"Australia"},AT:{name:"Austria",cc:"AT",url:"www.ig.com/at",sid:"atm",locale:"de_DE",mo:"GER",localName:"Österreich"},AZ:{name:"Azerbaijan",cc:"AZ",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Azerbaijan"},BS:{name:"Bahamas",cc:"BS",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Bahamas"},BH:{name:"Bahrain",cc:"BH",url:"www.ig.com/ar-ae",sid:"eng",locale:"en_GB",mo:"UAE",localName:"Bahrain"},BD:{name:"Bangladesh",cc:"BD",url:"www.ig.com/ae",sid:"eng",locale:"en_GB",mo:"UAE",localName:"Bangladesh"},BB:{name:"Barbados",cc:"BB",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Barbados"},BY:{name:"Belarus",cc:"BY",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Belarus"},BE:{name:"Belgium",cc:"BE",url:"www.ig.com/fra",sid:"fra",locale:"fr_FR",mo:"FRA",localName:"Belgique"},BZ:{name:"Belize",cc:"BZ",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Belize"},BJ:{name:"Benin",cc:"BJ",url:"www.ig.com/fra",sid:"fra",locale:"fr_FR",mo:"FRA",localName:"Bénin"},BM:{name:"Bermuda",cc:"BM",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Bermuda"},BT:{name:"Bhutan",cc:"BT",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Bhutan"},BO:{name:"Bolivia",cc:"BO",url:"www.ig.com/esp",sid:"esp",locale:"es_ES",mo:"SPA",localName:"Bolivia"},BA:{name:"Bosnia and Herzegovina",cc:"BA",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Bosnia and Herzegovina"},BW:{name:"Botswana",cc:"BW",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"SA",localName:"Botswana"},BV:{name:"Bouvet Island",cc:"BV",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Bouvet Island"},BR:{name:"Brazil",cc:"BR",url:"www.ig.com/por",sid:"por",locale:"pt_PT",mo:"SPA",localName:"Brasil"},IO:{name:"British Indian Ocean Territory",cc:"IO",url:"www.ig.com/uk",sid:"igm",locale:"en_GB",mo:"LON",localName:"the British Indian Ocean Territory"},VG:{name:"British Virgin Islands",cc:"VG",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"British Virgin Islands"},BN:{name:"Brunei",cc:"BN",url:"www.ig.com/sg",sid:"sgx",locale:"en_GB",mo:"SGX",localName:"Brunei"},BG:{name:"Bulgaria",cc:"BG",url:"www.ig.com/bg",sid:"bgm",locale:"en_GB",mo:"LON",localName:"Bulgaria"},BF:{name:"Burkina Faso",cc:"BF",url:"www.ig.com/fra",sid:"fra",locale:"fr_FR",mo:"FRA",localName:"Burkina Faso"},BI:{name:"Burundi",cc:"BI",url:"www.ig.com/fra",sid:"fra",locale:"fr_FR",mo:"FRA",localName:"Burundi"},KH:{name:"Cambodia",cc:"KH",url:"www.ig.com/sg",sid:"sgx",locale:"en_GB",mo:"SGX",localName:"Cambodia"},CM:{name:"Cameroon",cc:"CM",url:"www.ig.com/fra",sid:"fra",locale:"fr_FR",mo:"FRA",localName:"Cameroun"},CV:{name:"Cape Verde",cc:"CV",url:"www.ig.com/por",sid:"por",locale:"pt_PT",mo:"SPA",localName:"Cabo Verde"},KY:{name:"Cayman Islands",cc:"KY",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Cayman Islands"},CF:{name:"Central African Republic",cc:"CF",url:"www.ig.com/fra",sid:"fra",locale:"fr_FR",mo:"FRA",localName:"République Centrafricaine"},TD:{name:"Chad",cc:"TD",url:"www.ig.com/fra",sid:"fra",locale:"fr_FR",mo:"FRA",localName:"Tchad"},CL:{name:"Chile",cc:"CL",url:"www.ig.com/esp",sid:"esp",locale:"es_ES",mo:"SPA",localName:"Chile"},CN:{name:"China",cc:"CN",url:"www.ig.com/zh",sid:"cnm",locale:"zh_CN",mo:"CHN",localName:"中国"},CX:{name:"Christmas Island",cc:"CX",url:"www.ig.com/au",sid:"eng",locale:"en_GB",mo:"MEL",localName:"Christmas Island"},CC:{name:"Cocos Islands",cc:"CC",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Cocos Islands"},CO:{name:"Colombia",cc:"CO",url:"www.ig.com/esp",sid:"esp",locale:"es_ES",mo:"SPA",localName:"Colombia"},CK:{name:"Cook Islands",cc:"CK",url:"www.ig.com/au",sid:"eng",locale:"en_GB",mo:"MEL",localName:"Cook Islands"},CR:{name:"Costa Rica",cc:"CR",url:"www.ig.com/esp",sid:"esp",locale:"es_ES",mo:"SPA",localName:"Costa Rica"},HR:{name:"Croatia",cc:"HR",url:"www.ig.com/hr",sid:"hrm",locale:"en_GB",mo:"LON",localName:"Croatia"},CY:{name:"Cyprus",cc:"CY",url:"www.ig.com/cy",sid:"cym",locale:"en_GB",mo:"LON",localName:"Cyprus"},CZ:{name:"Czech Republic",cc:"CZ",url:"www.ig.com/cz",sid:"czm",locale:"en_GB",mo:"LON",localName:"Czech Republic"},DK:{name:"Denmark",cc:"DK",url:"www.ig.com/dk",sid:"dkm",locale:"en_GB",mo:"SWE",localName:"Denmark"},DJ:{name:"Djibouti",cc:"DJ",url:"www.ig.com/fra",sid:"fra",locale:"fr_FR",mo:"FRA",localName:"Djibouti"},DM:{name:"Dominica",cc:"DM",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Dominica"},DO:{name:"Dominican Republic",cc:"DO",url:"www.ig.com/esp",sid:"esp",locale:"es_ES",mo:"SPA",localName:"República Dominicana"},TL:{name:"East Timor",cc:"TL",url:"www.ig.com/por",sid:"por",locale:"pt_PT",mo:"SPA",localName:"Timor Leste"},EC:{name:"Ecuador",cc:"EC",url:"www.ig.com/esp",sid:"esp",locale:"es_ES",mo:"SPA",localName:"Ecuador"},EG:{name:"Egypt",cc:"EG",url:"www.ig.com/ar-ae",sid:"eng",locale:"en_GB",mo:"UAE",localName:"Egypt"},SV:{name:"El Salvador",cc:"SV",url:"www.ig.com/esp",sid:"esp",locale:"es_ES",mo:"SPA",localName:"El Salvador"},EE:{name:"Estonia",cc:"EE",url:"www.ig.com/ee",sid:"etm",locale:"en_GB",mo:"LON",localName:"Estonia"},ET:{name:"Ethopia",cc:"ET",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"SA",localName:"Ethopia"},FO:{name:"Falkland Islands (Malvinas)",cc:"FO",url:"www.ig.com/uk",sid:"igm",locale:"en_GB",mo:"LON",localName:"the Falkland Islands"},FK:{name:"Faroe Islands",cc:"FK",url:"www.ig.com/uk",sid:"igm",locale:"en_GB",mo:"LON",localName:"Faroe Islands"},FJ:{name:"Fiji",cc:"FJ",url:"www.ig.com/au",sid:"eng",locale:"en_GB",mo:"MEL",localName:"Fiji"},FI:{name:"Finland",cc:"FI",url:"www.ig.com/fi",sid:"fim",locale:"en_GB",mo:"SWE",localName:"Finland"},FR:{name:"France",cc:"FR",url:"www.ig.com/fr",sid:"frm",locale:"fr_FR",mo:"FRA",localName:"France"},FE:{name:"France, Metropolitan",cc:"FE",url:"www.ig.com/fra",sid:"fra",locale:"fr_FR",mo:"FRA",localName:"France, Metropolitan"},GF:{name:"French Guiana",cc:"GF",url:"www.ig.com/fra",sid:"fra",locale:"fr_FR",mo:"FRA",localName:"French Guiana"},PF:{name:"French Polynesia",cc:"PF",url:"www.ig.com/fra",sid:"fra",locale:"fr_FR",mo:"FRA",localName:"Polynésie française"},TF:{name:"French Southern Territories",cc:"TF",url:"www.ig.com/fra",sid:"fra",locale:"fr_FR",mo:"FRA",localName:"Terres australes françaises"},GA:{name:"Gabon",cc:"GA",url:"www.ig.com/fra",sid:"fra",locale:"fr_FR",mo:"FRA",localName:"Gabon"},GM:{name:"Gambia",cc:"GM",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"SA",localName:"Gambia"},GE:{name:"Georgia",cc:"GE",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Georgia"},DE:{name:"Germany",cc:"DE",url:"www.ig.com/de",sid:"dem",locale:"de_DE",mo:"GER",localName:"Deutschland"},GH:{name:"Ghana",cc:"GH",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"SA",localName:"Ghana"},GI:{name:"Gibraltar",cc:"GI",url:"www.ig.com/uk",sid:"igm",locale:"en_GB",mo:"LON",localName:"Gibraltar"},GR:{name:"Greece",cc:"GR",url:"www.ig.com/gr",sid:"grm",locale:"en_GB",mo:"ITA",localName:"Greece"},GL:{name:"Greenland",cc:"GL",url:"www.ig.com/dk",sid:"dkm",locale:"en_GB",mo:"SWE",localName:"Greenland"},GD:{name:"Grenada",cc:"GD",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Grenada"},GP:{name:"Guadeloupe",cc:"GP",url:"www.ig.com/fra",sid:"fra",locale:"fr_FR",mo:"FRA",localName:"Guadeloupe"},GU:{name:"Guam",cc:"GU",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Guam"},GT:{name:"Guatemala",cc:"GT",url:"www.ig.com/esp",sid:"esp",locale:"es_ES",mo:"SPA",localName:"Guatemala"},GG:{name:"Guernsey",cc:"GG",url:"www.ig.com/uk",sid:"igm",locale:"en_GB",mo:"LON",localName:"Guernsey"},GW:{name:"Guinea-Bissau",cc:"GW",url:"www.ig.com/por",sid:"por",locale:"pt_PT",mo:"SPA",localName:"Guiné-Bissau"},GY:{name:"Guyana",cc:"GY",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Guyana"},HM:{name:"Heard and McDonald Islands",cc:"HM",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Heard and McDonald Islands"},HN:{name:"Honduras",cc:"HN",url:"www.ig.com/esp",sid:"esp",locale:"es_ES",mo:"SPA",localName:"Honduras"},HK:{name:"Hong Kong",cc:"HK",url:"www.ig.com/cn",sid:"aum",locale:"zh_TW",mo:"MEL",localName:"香港"},HU:{name:"Hungary",cc:"HU",url:"www.ig.com/hu",sid:"hum",locale:"en_GB",mo:"LON",localName:"Hungary"},IS:{name:"Iceland",cc:"IS",url:"www.ig.com/is",sid:"ism",locale:"en_GB",mo:"LON",localName:"Iceland"},IN:{name:"India",cc:"IN",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"India"},ID:{name:"Indonesia",cc:"ID",url:"www.ig.com/au",sid:"aum",locale:"en_GB",mo:"MEL",localName:"Indonesia"},IE:{name:"Ireland",cc:"IE",url:"www.ig.com/uk",sid:"igm",locale:"en_GB",mo:"IRE",localName:"Ireland"},IL:{name:"Israel",cc:"IL",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Israel"},IT:{name:"Italy",cc:"IT",url:"www.ig.com/it",sid:"itm",locale:"it_IT",mo:"ITA",localName:"Italia"},JM:{name:"Jamaica",cc:"JM",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Jamaica"},JP:{name:"Japan",cc:"JP",url:"www.ig.com/jp",sid:"fxo",locale:"ja_JP",mo:"TKO",localName:"日本"},JE:{name:"Jersey",cc:"JE",url:"www.ig.com/uk",sid:"igm",locale:"en_GB",mo:"LON",localName:"Jersey"},JO:{name:"Jordan",cc:"JO",url:"www.ig.com/ar-ae",sid:"eng",locale:"en_GB",mo:"UAE",localName:"Jordan"},KZ:{name:"Kazakhstan",cc:"KZ",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Kazakhstan"},KE:{name:"Kenya",cc:"KE",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"SA",localName:"Kenya"},KI:{name:"Kiribati",cc:"KI",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Kiribati"},KP:{name:"Korea (Republic of)",cc:"KP",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Korea (Republic of)"},KW:{name:"Kuwait",cc:"KW",url:"www.ig.com/ar-ae",sid:"eng",locale:"en_GB",mo:"UAE",localName:"Kuwait"},KG:{name:"Kyrgyzstan",cc:"KG",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Kyrgyzstan"},LA:{name:"Lao People's Democratic Republic",cc:"LA",url:"www.ig.com/sg",sid:"sgx",locale:"en_GB",mo:"SGX",localName:"Lao People's Democratic Republic"},LV:{name:"Latvia",cc:"LV",url:"www.ig.com/lv",sid:"lvm",locale:"en_GB",mo:"LON",localName:"Latvia"},LB:{name:"Lebanon",cc:"LB",url:"www.ig.com/ar-ae",sid:"fra",locale:"fr_FR",mo:"UAE",localName:"Lebanon"},LS:{name:"Lesotho",cc:"LS",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"SA",localName:"Lesotho"},LI:{name:"Liechtenstein",cc:"LI",url:"www.ig.com/deu",sid:"deu",locale:"de_DE",mo:"GER",localName:"Liechtenstein"},LT:{name:"Lithuania",cc:"LT",url:"www.ig.com/lt",sid:"ltm",locale:"en_GB",mo:"LON",localName:"Lithuania"},LU:{name:"Luxembourg",cc:"LU",url:"www.ig.com/lu",sid:"lum",locale:"fr_LU",mo:"LUX",localName:"Luxembourg"},MO:{name:"Macao",cc:"MO",url:"www.ig.com/cn",sid:"aum",locale:"zh_TW",mo:"MEL",localName:"澳門"},MK:{name:"Réunion",cc:"MK",url:"www.ig.com/fra",sid:"fra",locale:"fr_FR",mo:"FRA",localName:"Réunion"},MG:{name:"Madagascar",cc:"MG",url:"www.ig.com/fra",sid:"fra",locale:"fr_FR",mo:"FRA",localName:"Madagascar"},MW:{name:"Malawi",cc:"MW",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"SA",localName:"Malawi"},MY:{name:"Malaysia",cc:"MY",url:"www.ig.com/au",sid:"aum",locale:"en_GB",mo:"MEL",localName:"Malaysia"},MV:{name:"Maldives",cc:"MV",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"SA",localName:"Maldives"},ML:{name:"Mali",cc:"ML",url:"www.ig.com/fra",sid:"fra",locale:"fr_FR",mo:"FRA",localName:"Mali"},MT:{name:"Malta",cc:"MT",url:"www.ig.com/mt",sid:"mlm",locale:"en_GB",mo:"LON",localName:"Malta"},MH:{name:"Marshall Islands",cc:"MH",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Marshall Islands"},MQ:{name:"Martinique",cc:"MQ",url:"www.ig.com/fra",sid:"fra",locale:"fr_FR",mo:"FRA",localName:"Martinique"},MU:{name:"Mauritius",cc:"MU",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"SA",localName:"Mauritius"},YT:{name:"Mayotte",cc:"YT",url:"www.ig.com/fra",sid:"fra",locale:"fr_FR",mo:"FRA",localName:"Mayotte"},MX:{name:"Mexico",cc:"MX",url:"www.ig.com/esp",sid:"esp",locale:"es_ES",mo:"SPA",localName:"Méjico"},FM:{name:"Micronesia (Federated States of)",cc:"FM",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Micronesia (Federated States of)"},MD:{name:"Moldova (Republic of)",cc:"MD",url:"www.ig.com/ro",sid:"eng",locale:"en_GB",mo:"ITA",localName:"Moldova (Republic of)"},MC:{name:"Monaco",cc:"MC",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Monaco"},MN:{name:"Mongolia",cc:"MN",url:"www.ig.com/fra",sid:"fra",locale:"fr_FR",mo:"FRA",localName:"Mongolie"},ME:{name:"Montenegro",cc:"ME",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Montenegro"},MS:{name:"Montserrat",cc:"MS",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Montserrat"},MA:{name:"Morocco",cc:"MA",url:"www.ig.com/fra",sid:"fra",locale:"fr_FR",mo:"FRA",localName:"Maroc"},MZ:{name:"Mozambique",cc:"MZ",url:"www.ig.com/por",sid:"por",locale:"pt_PT",mo:"SPA",localName:"Moçambique"},NA:{name:"Namibia",cc:"NA",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"SA",localName:"Namibia"},NR:{name:"Nauru",cc:"NR",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Nauru"},NP:{name:"Nepal",cc:"NP",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Nepal"},AN:{name:"Netherlands Antilles",cc:"AN",url:"www.ig.com/nl",sid:"nlm",locale:"nl_NL",mo:"NEL",localName:"Nederlandse Antillen"},NL:{name:"Netherlands",cc:"NL",url:"www.ig.com/nl",sid:"nlm",locale:"nl_NL",mo:"NEL",localName:"Netherlands"},NC:{name:"New Caledonia",cc:"NC",url:"www.ig.com/fra",sid:"fra",locale:"fr_FR",mo:"FRA",localName:"Nouvelle Calédonie"},NZ:{name:"New Zealand",cc:"NZ",url:"www.ig.com/au",sid:"aum",locale:"en_GB",mo:"MEL",localName:"New Zealand"},NI:{name:"Nicaragua",cc:"NI",url:"www.ig.com/esp",sid:"esp",locale:"es_ES",mo:"SPA",localName:"Nicaragua"},NU:{name:"Niue",cc:"NU",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Niue"},NF:{name:"Norfolk Island",cc:"NF",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Norfolk Island"},MP:{name:"Northern Mariana Islands",cc:"MP",url:"www.ig.com/au",sid:"cnm",locale:"zh_CN",mo:"MEL",localName:"Northern Mariana Islands"},NO:{name:"Norway",cc:"NO",url:"www.ig.com/no",sid:"nom",locale:"no_NO",mo:"NOR",localName:"Norway"},OM:{name:"Oman",cc:"OM",url:"www.ig.com/ar-ae",sid:"eng",locale:"en_GB",mo:"UAE",localName:"Oman"},PK:{name:"Pakistan",cc:"PK",url:"www.ig.com/ae",sid:"eng",locale:"en_GB",mo:"UAE",localName:"Pakistan"},PW:{name:"Palau",cc:"PW",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Palau"},PA:{name:"Panama",cc:"PA",url:"www.ig.com/esp",sid:"esp",locale:"es_ES",mo:"SPA",localName:"Panamá"},PG:{name:"Papua New Guinea",cc:"PG",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Papua New Guinea"},PY:{name:"Paraguay",cc:"PY",url:"www.ig.com/esp",sid:"esp",locale:"es_ES",mo:"SPA",localName:"Paraguay"},PE:{name:"Peru",cc:"PE",url:"www.ig.com/esp",sid:"esp",locale:"es_ES",mo:"SPA",localName:"Perú"},PH:{name:"Philippines",cc:"PH",url:"www.ig.com/sg",sid:"sgx",locale:"en_GB",mo:"SGX",localName:"Philippines"},PN:{name:"Pitcairn",cc:"PN",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Pitcairn"},PT:{name:"Portugal",cc:"PT",url:"www.ig.com/pt",sid:"ptm",locale:"pt_PT",mo:"POR",localName:"Portugal"},PR:{name:"Puerto Rico",cc:"PR",url:"www.ig.com/esp",sid:"esp",locale:"es_ES",mo:"SPA",localName:"Puerto Rico"},QA:{name:"Qatar",cc:"QA",url:"www.ig.com/ar-ae",sid:"eng",locale:"en_GB",mo:"UAE",localName:"Qatar"},RO:{name:"Romania",cc:"RO",url:"www.ig.com/ro",sid:"rom",locale:"en_GB",mo:"LON",localName:"Romania"},RW:{name:"Rwanda",cc:"RW",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"SA",localName:"Rwanda"},KN:{name:"Saint Kitts and Nevis",cc:"KN",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Saint Kitts and Nevis"},LC:{name:"Saint Lucia",cc:"LC",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Saint Lucia"},VC:{name:"Saint Vincent and the Grenadines",cc:"VC",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Saint Vincent and the Grenadines"},WS:{name:"Samoa",cc:"WS",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Samoa"},SM:{name:"San Marino",cc:"SM",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"San Marino"},ST:{name:"Sao Tome And Principe",cc:"ST",url:"www.ig.com/por",sid:"por",locale:"pt_PT",mo:"SPA",localName:"São Tomé e Príncipe"},SA:{name:"Saudi Arabia",cc:"SA",url:"www.ig.com/ar-ae",sid:"dbm",locale:"ar_AE",mo:"UAE",localName:"Saudi Arabia"},SN:{name:"Senegal",cc:"SN",url:"www.ig.com/fra",sid:"fra",locale:"fr_FR",mo:"FRA",localName:"Sénégal"},CS:{name:"Serbia",cc:"CS",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Serbia"},SC:{name:"Seychelles",cc:"SC",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"SA",localName:"Seychelles"},SG:{name:"Singapore",cc:"SG",url:"www.ig.com/sg",sid:"sgx",locale:"en_GB",mo:"SGX",localName:"Singapore"},SK:{name:"Slovakia",cc:"SK",url:"www.ig.com/sk",sid:"skm",locale:"en_GB",mo:"LON",localName:"Slovakia"},SI:{name:"Slovenia",cc:"SI",url:"www.ig.com/si",sid:"slm",locale:"en_GB",mo:"LON",localName:"Slovenia"},SB:{name:"Solomon Islands",cc:"SB",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Solomon Islands"},ZA:{name:"South Africa",cc:"ZA",url:"www.ig.com/za",sid:"zam",locale:"en_ZA",mo:"SA",localName:"South Africa"},GS:{name:"South Georgia and the South Sandwich Islands",cc:"GS",url:"www.ig.com/uk",sid:"igm",locale:"en_GB",mo:"LON",localName:"South Georgia and the South Sandwich Islands"},KR:{name:"South Korea",cc:"KR",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"South Korea"},ES:{name:"Spain",cc:"ES",url:"www.ig.com/es",sid:"esm",locale:"es_ES",mo:"SPA",localName:"España"},LK:{name:"Sri Lanka",cc:"LK",url:"www.ig.com/ae",sid:"eng",locale:"en_GB",mo:"UAE",localName:"Sri Lanka"},SH:{name:"St Helena",cc:"SH",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"St Helena"},PM:{name:"St Pierre And Miquelon",cc:"PM",url:"www.ig.com/fra",sid:"fra",locale:"fr_FR",mo:"FRA",localName:"St Pierre et Miquelon"},SR:{name:"Suriname",cc:"SR",url:"www.ig.com/nl",sid:"nlm",locale:"nl_NL",mo:"NEL",localName:"Suriname"},SJ:{name:"Svalbard and Jan Mayen",cc:"SJ",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Svalbard and Jan Mayen"},SZ:{name:"Swaziland",cc:"SZ",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"SA",localName:"Swaziland"},SE:{name:"Sweden",cc:"SE",url:"www.ig.com/se",sid:"sem",locale:"sv_SE",mo:"SWE",localName:"Sverige"},CH:{name:"Switzerland",cc:"CH",url:"www.ig.com/ch",sid:"chm",locale:"en_GB",mo:"SWD",localName:"Switzerland"},TW:{name:"Taiwan, Province of China",cc:"TW",url:"www.ig.com/cn",sid:"aum",locale:"zh_CN",mo:"MEL",localName:"台灣"},TJ:{name:"Tajikistan",cc:"TJ",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Tajikistan"},TZ:{name:"Tanzania, United Republic of",cc:"TZ",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"SA",localName:"Tanzania, United Republic of"},TH:{name:"Thailand",cc:"TH",url:"www.ig.com/sg",sid:"sgx",locale:"en_GB",mo:"SGX",localName:"Thailand"},TG:{name:"Togo",cc:"TG",url:"www.ig.com/por",sid:"por",locale:"pt_PT",mo:"SPA",localName:"Togo"},TK:{name:"Tokelau",cc:"TK",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Tokelau"},TO:{name:"Tonga",cc:"TO",url:"www.ig.com/au",sid:"eng",locale:"en_GB",mo:"MEL",localName:"Tonga"},TT:{name:"Trinidad and Tobago",cc:"TT",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Trinidad and Tobago"},TN:{name:"Tunisia",cc:"TN",url:"www.ig.com/fra",sid:"fra",locale:"fr_FR",mo:"FRA",localName:"Tunisie"},TR:{name:"Turkey",cc:"TR",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Turkey"},TC:{name:"Turks and Caicos Islands",cc:"TC",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Turks and Caicos Islands"},TV:{name:"Tuvalu",cc:"TV",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Tuvalu"},UG:{name:"Uganda",cc:"UG",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"SA",localName:"Uganda"},UA:{name:"Ukraine",cc:"UA",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Ukraine"},AE:{name:"United Arab Emirates",cc:"AE",url:"www.ig.com/ae",sid:"dbm",locale:"en_GB",mo:"UAE",localName:"United Arab Emirates"},UK:{name:"United Kingdom of Great Britain and Northern Ireland",cc:"UK",url:"www.ig.com/uk",sid:"igm",locale:"en_GB",mo:"LON",localName:"United Kingdom of Great Britain and Northern Ireland"},GB:{name:"United Kingdom of Great Britain and Northern Ireland",cc:"GB",url:"www.ig.com/uk",sid:"igm",locale:"en_GB",mo:"LON",localName:"the United Kingdom"},US:{name:"United States of America",cc:"US",url:"www.ig.com/us",sid:"",locale:"",mo:"",localName:"the United States of America"},UY:{name:"Uruguay",cc:"UY",url:"www.ig.com/esp",sid:"esp",locale:"es_ES",mo:"SPA",localName:"Uruguay"},UZ:{name:"Uzbekistan",cc:"UZ",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Uzbekistan"},VU:{name:"Vanuatu",cc:"VU",url:"www.ig.com/au",sid:"eng",locale:"en_GB",mo:"MEL",localName:"Vanuatu"},VE:{name:"Venezuela (Bolivarian Republic of)",cc:"VE",url:"www.ig.com/esp",sid:"esp",locale:"es_ES",mo:"SPA",localName:"Venezuela"},VN:{name:"Vietnam",cc:"VN",url:"www.ig.com/sg",sid:"sgx",locale:"en_GB",mo:"SGX",localName:"Vietnam"},VI:{name:"Virgin Islands",cc:"VI",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"LON",localName:"Virgin Islands"},WF:{name:"Wallis and Futuna",cc:"WF",url:"www.ig.com/fra",sid:"fra",locale:"fr_FR",mo:"FRA",localName:"Wallis et Futuna"},ZM:{name:"Zambia",cc:"ZM",url:"www.ig.com/en",sid:"eng",locale:"en_GB",mo:"SA",localName:"Zambia"}};
this.redirectRules={uk:{redirectCC:"AS,AU,CX,CK,FJ,ID,MY,NZ,MP,TO,VU,BN,KH,LA,PH,SG,TH,VN,BD,PK,LK,AE,ZA,AI,AQ,AG,AM,AZ,BS,BB,BY,BZ,BM,BT,BA,BW,BV,VG,KY,CC,DM,ET,GM,GE,GH,GD,GU,GY,HM,IN,IL,JM,KZ,KE,KI,KP,KG,LS,MW,MV,MH,MU,FM,MC,ME,MS,NA,NR,NP,NU,NF,PW,PG,PN,RW,KN,LC,VC,WS,SM,CS,SC,SB,KR,SH,SJ,SZ,TJ,TZ,TK,TT,TR,TC,TV,UG,UA,UZ,VI,ZM",url:"en"},au:{redirectCC:"IO,FO,FK,GI,GG,IE,JE,GS,UK,GB,BN,KH,LA,PH,SG,TH,VN,BD,PK,LK,AE,ZA,AI,AQ,AG,AM,AZ,BS,BB,BY,BZ,BM,BT,BA,BW,BV,VG,KY,CC,DM,ET,GM,GE,GH,GD,GU,GY,HM,IN,IL,JM,KZ,KE,KI,KP,KG,LS,MW,MV,MH,MU,FM,MC,ME,MS,NA,NR,NP,NU,NF,PW,PG,PN,RW,KN,LC,VC,WS,SM,CS,SC,SB,KR,SH,SJ,SZ,TJ,TZ,TK,TT,TR,TC,TV,UG,UA,UZ,VI,ZM",url:"en"},sg:{redirectCC:"AS,AU,CX,CK,FJ,ID,MY,NZ,MP,TO,VU,IO,FO,FK,GI,GG,IE,JE,GS,UK,GB,BD,PK,LK,AE,ZA,AI,AQ,AG,AM,AZ,BS,BB,BY,BZ,BM,BT,BA,BW,BV,VG,KY,CC,DM,ET,GM,GE,GH,GD,GU,GY,HM,IN,IL,JM,KZ,KE,KI,KP,KG,LS,MW,MV,MH,MU,FM,MC,ME,MS,NA,NR,NP,NU,NF,PW,PG,PN,RW,KN,LC,VC,WS,SM,CS,SC,SB,KR,SH,SJ,SZ,TJ,TZ,TK,TT,TR,TC,TV,UG,UA,UZ,VI,ZM",url:"en"},ae:{redirectCC:"AS,AU,CX,CK,FJ,ID,MY,NZ,MP,TO,VU,IO,FO,FK,GI,GG,IE,JE,GS,UK,GB,BN,KH,LA,PH,SG,TH,VN,ZA,AI,AQ,AG,AM,AZ,BS,BB,BY,BZ,BM,BT,BA,BW,BV,VG,KY,CC,DM,ET,GM,GE,GH,GD,GU,GY,HM,IN,IL,JM,KZ,KE,KI,KP,KG,LS,MW,MV,MH,MU,FM,MC,ME,MS,NA,NR,NP,NU,NF,PW,PG,PN,RW,KN,LC,VC,WS,SM,CS,SC,SB,KR,SH,SJ,SZ,TJ,TZ,TK,TT,TR,TC,TV,UG,UA,UZ,VI,ZM",url:"en"},za:{redirectCC:"AS,AU,CX,CK,FJ,ID,MY,NZ,MP,TO,VU,IO,FO,FK,GI,GG,IE,JE,GS,UK,GB,BN,KH,LA,PH,SG,TH,VN,BD,PK,LK,AE,AI,AQ,AG,AM,AZ,BS,BB,BY,BZ,BM,BT,BA,BW,BV,VG,KY,CC,DM,ET,GM,GE,GH,GD,GU,GY,HM,IN,IL,JM,KZ,KE,KI,KP,KG,LS,MW,MV,MH,MU,FM,MC,ME,MS,NA,NR,NP,NU,NF,PW,PG,PN,RW,KN,LC,VC,WS,SM,CS,SC,SB,KR,SH,SJ,SZ,TJ,TZ,TK,TT,TR,TC,TV,UG,UA,UZ,VI,ZM",url:"en"},zh:{redirectCC:"HK,MO,TW",url:"cn"},cn:{redirectCC:"CN",url:"zh"},"en-ch":{redirectCC:"AS,AU,CX,CK,FJ,ID,MY,NZ,MP,TO,VU,IO,FO,FK,GI,GG,IE,JE,GS,UK,GB,IO,FO,FK,GI,GG,IE,JE,GS,UK,GB,BN,KH,LA,PH,SG,TH,VN,BD,PK,LK,AE,ZA,AI,AQ,AG,AM,AZ,BS,BB,BY,BZ,BM,BT,BA,BW,BV,VG,KY,CC,DM,ET,GM,GE,GH,GD,GU,GY,HM,IN,IL,JM,KZ,KE,KI,KP,KG,LS,MW,MV,MH,MU,FM,MC,ME,MS,NA,NR,NP,NU,NF,PW,PG,PN,RW,KN,LC,VC,WS,SM,CS,SC,SB,KR,SH,SJ,SZ,TJ,TZ,TK,TT,TR,TC,TV,UG,UA,UZ,VI,ZM",url:"en"},es:{redirectCC:"AR,AW,BO,CL,CO,CR,DO,EC,SV,GT,HN,MX,NI,PA,PY,PE,PR,UY,VE",url:"esp"},fr:{redirectCC:"DZ,BE,BJ,BF,BI,CM,CF,TD,DJ,FX,GF,PF,TF,GA,GP,MK,MG,ML,MQ,YT,MN,MA,NC,SN,PM,TN,WF",url:"fra"},"fr-ch":{redirectCC:"DZ,BE,BJ,BF,BI,CM,CF,TD,DJ,FX,GF,PF,TF,GA,GP,MK,MG,ML,MQ,YT,MN,MA,NC,SN,PM,TN,WF",url:"fra"},pt:{redirectCC:"AO,BR,CV,TL,GW,MZ,ST,TG",url:"por"},en:{redirectCC:"IO,FO,FK,GI,GG,IE,JE,GS,UK,GB,AS,AU,CX,CK,FJ,ID,MY,NZ,MP,TO,VU,BN,KH,LA,PH,SG,TH,VN,CH,BD,PK,LK,AE,ZA",url:"uk"},fra:{redirectCC:"FR",url:"fr"},esp:{redirectCC:"ES",url:"es"},por:{redirectCC:"PT",url:"pt"},deu:{redirectCC:"DE,AT",url:"de"}}
}a.prototype.init=function(){var c=!!b.util.jspVars.get("softredirect"),e=jq(".swapping-specific-content.locale");
if(e.length||c||!!b.util.jspVars.get("localiseAppForm")){this.getCountry()
}};
a.prototype.getCountry=function(){var c=b.util.Cookie.get("countrycode"),h,e,g=b.util.Page.getQuerystring("countrycode"),f=this;
if(!!g&&!!g.match(/[A-Z]{2}/)){c=g
}if(!!c){this.render(c);
this.softRedirect(c);
this.setAppFormCountry(c)
}else{e=b.util.Page.environment();
if(e==="www"||e==="web"){jq.ajax(window.location.protocol+"//"+e+".ig.com/geolocate").done(function(j,l,k){h=k.getResponseHeader("countrycode");
b.util.Cookie.set("countrycode",h,7);
f.render(h);
f.softRedirect(h);
f.setAppFormCountry(h)
}).fail(function(){f.render(null)
})
}else{b.util.Cookie.set("countrycode","GB",7);
f.render("GB");
f.softRedirect("GB")
}}};
a.prototype.setAppFormCountry=function(l){var j=jq("#appForm");
var k;
var e;
var c="?";
var h;
var f=b.util.Cookie.get("mobile_device")==="mobile"||b.util.Cookie.get("mobile_device")==="tablet";
var g;
if(!!b.util.jspVars.get("localiseAppForm")){if(!!j.length&&b.util.jspVars.get("localiseAppForm").desktop){k=j.attr("src");
if(k.indexOf("/register#/page/1/country/")>0){k=k.substr(0,k.indexOf("/country/")+9)+l+k.substr(k.indexOf("/country/")+11);
j.attr("src",k)
}}if(b.util.jspVars.get("localiseAppForm").mobile&&f){if(!!b.util.jspVars.get("createAccountTest")){g=jq('a[href*="/application-form-new"], a[href*="/register/page/1/country/"]')
}else{g=jq('a[href*="/application-form"], a[href*="/register/page/1/country/"]')
}h=b.util.jspVars.get("localiseAppForm").mobileUrl;
h="https://"+b.util.Page.environment()+".ig.com"+h.substr(0,h.indexOf("/country/")+9)+l+h.substr(h.indexOf("/country/")+11);
g.each(function(){e=jq(this).attr("href");
if(e.indexOf("?")>0){if(h.indexOf("?")>0){c="&"
}c=c+e.split("?")[1];
h=h+c
}jq(this).attr("href",h)
})
}}};
a.prototype.render=function(l){var g=jq(".swapping-specific-content.locale"),k=g.find(".swapping-default"),j=g.find(".swapping-loader"),h,f,c=[],e;
if(g.length&&!jq(".cq-wcm-edit ").length){if(l){g.each(function(m){c[m]=jq(this);
e=c[m].attr("data-"+l)===undefined?null:c[m].attr("data-"+l);
h=c[m].find(".swapping-default");
if(e){jq.ajax(e).done(function(n){c[m].empty().append(n);
b.util.AjaxContentDependencies.processDependencies();
if(!!jq(".country-specific .js_lightbox").length){b.util.Lightboxes._initTriggers()
}h.css({visibility:"visible"})
})
}else{j.remove();
h.css({visibility:"visible"})
}})
}else{j.remove();
k.css({visibility:"visible"})
}}};
a.prototype.softRedirect=function(j){var m=!!b.util.jspVars.get("softredirect"),l,p,g=false,f=false,n=this;
if(m&&!b.util.Cookie.get("softredirect")&&!jq("#mask").length){l=b.util.jspVars.get("softredirect");
if(!jq.isEmptyObject(b.util.jspVars.get("softredirect").exceptions)){for(var c in b.util.jspVars.get("softredirect").exceptions){if(c.indexOf(j)>=0){f=c;
g=b.util.jspVars.get("softredirect").exceptions[c];
break
}}}if(g){p=f
}else{if(l.countries!==""){p=l.countries
}else{if(typeof this.redirectRules[window.location.pathname.split("/")[1]]!=="undefined"){p=this.redirectRules[window.location.pathname.split("/")[1]].redirectCC
}else{return false
}}}if(p.indexOf("use:")>=0){p=this.redirectRules[p.replace("use:","")].redirectCC
}if(p.indexOf(j)>=0){var e='<div id="mask" class="softredirect-mask" style="background-color:rgba(0,0,0,0.7);"><div id="lightbox" class="lightbox-popup softredirect"><div class="panel">{{^exception}}<div class="content promo section"><div class="theme text-left full-width cta-false"><div class="text"><h2 class="heading h2">{{title}}</h2><p>{{text}}</p><div class="cta float-left"><a id="redirect-yes" class="button button-blue" href="#" target="_self">{{yes}}</a></div><div class="cta right cta-sec"><a id="redirect-no" class=" button button-blue" href="#" target="_self">{{no}}</a></div></div></div></div>{{/exception}}<div class="exception-panel"></div><a id="killLB"></a></div></div></div>',o,k=jq("body"),h={title:l.title,text:l.text.replace("COUNTRY",this.countries[j].localName),yes:l.yes,no:l.no,exception:g};
o=Mustache.render(e,h);
k.prepend(o);
if(g){jq(".softredirect-mask .exception-panel").load(g+" .global-component > *",function(){jq(".softredirect .button").click(function(){n.setRedirectCookie()
})
})
}this.centreModal();
jq("#redirect-yes").click(function(q){q.preventDefault();
b.SiteCatalyst.tracker.tl(true,"o","CTA:soft redirect approved "+j+" - "+n.countries[j].url);
n.setRedirectCookie();
window.location.href=window.location.protocol+"//"+n.countries[j].url
});
jq("#redirect-no, #killLB").click(function(q){q.preventDefault();
n.setRedirectCookie();
jq("#mask").remove();
b.SiteCatalyst.tracker.tl(true,"o","CTA:soft redirect dismissed - "+j)
})
}}};
a.prototype.setRedirectCookie=function(){return b.util.Cookie.set("softredirect",1,999)
};
a.prototype.centreModal=function(){var j=jq(window),g=jq("#lightbox"),e=parseFloat(g.css("margin-top")),f=((j.height()-g.outerHeight())/2)-e,h=(j.width()-g.outerWidth())/2,c=0;
if(j.height()>g.outerHeight()+e){c=f
}g.css({top:c+"px",left:h+"px"})
};
b.util.CountrySpecific=new a
})(PS);
window.PS=window.PS||{};
PS.util=PS.util||{};
(function(b){var a=function(){var j=jq(".countryOfResidence"),e=jq("#locale").attr("content")||jq("input[type='hidden'][name='locale']").val(),f=b.util.Cookie.get("countrycode");
function c(l){switch(l){case"ar_AE":l="ar_AE";
break;
case"de_DE":case"de_AT":case"de_CH":case"de":l="de_DE";
break;
case"en_ZA":l="en_ZA";
break;
case"es_ES":case"es":l="es_ES";
break;
case"fr_LU":l="fr_LU";
break;
case"fr":case"fr_CH":case"fr_FR":l="fr_FR";
break;
case"it_IT":case"it_CH":l="it_IT";
break;
case"ja_JP":l="ja_JP";
break;
case"nl_NL":l="nl_NL";
break;
case"no_NO":l="no_NO";
break;
case"pt":case"pt_PT":l="pt_PT";
break;
case"sv_SE":l="sv_SE";
break;
case"zh_CN":l="zh_CN";
break;
case"zh_TW":l="zh_TW";
break;
case"en":case"en_AE":case"en_GB":case"en_AU":case"en_CH":case"en_SG":default:l="en_GB";
break
}return l
}function g(m,l,n){jq(j).append(jq("<option>",{text:n,value:l,selected:m}))
}function k(n,l,m){switch(n+"|"+l){case"AR-AE|AE":g(true,l,m);
break;
case"EN-CH|CH":case"FR-CH|CH":case"IT-CH|CH":g(true,l,m);
break;
default:g(false,l,m);
break
}}function h(m){var l=j.data("country").toUpperCase();
jq.ajax({url:"/productapplicationsgateway/configuration?country="+l+"&locale="+e+"&countryOfApplication=&countryOfResidence=&qpid",type:"GET",data:"q="+m,dataType:"json",success:function(n){var o=n.countries;
jq.each(o,function(p,q){if(l===q.isoCode){g(true,q.isoCode,q.localizedName)
}else{k(l,q.isoCode,q.localizedName)
}});
if(!!f){j.val(f)
}}})
}if(j.length!==0){e=c(e);
h()
}};
b.util.loadCountriesList=a
}(PS));
window.PS=window.PS||{};
window.PS.util=window.PS.util||{};
(function(k){var q=k.util.jspVars.get("mapCommoditiesData");
var f=[];
var r=jq(".map-wrapper");
var n=jq(".map-wrapper .container-tabs-desktop ul.tabs");
var b=jq(".map-wrapper .container-tabs-mobile");
var m=b.find(".tab-selected .tabs-primary");
var h=b.find("ul.tabs-secondary");
var l={};
var g=jq("#mapContent");
var e=jq(".map-container");
var o=e.height();
var a=jq("#map");
a.hide();
var p=function(){var t=r.find(".info-desktop");
var C=t.find(".close-panel");
var z=t.find(".main-text .text");
var E=t.find(".right-label");
var x=t.find(".title");
var K=r.find(".info-mobile");
var L=K.find(".close-panel");
var w=K.find(".main-text .text");
var F=K.find(".title");
var H=r.find(".info-dot");
var I=H.find(".text .content");
var G=H.find(".image .content");
function B(O){z.html(O);
w.html(O)
}function y(O){x.html(O);
F.html(O)
}function A(O){I.html(O.Description);
if(O.Image.length>2){H.removeClass("noimage");
G.html('<img src="'+O.Image+'" />')
}else{H.addClass("noimage")
}}function M(){D();
E.fadeOut(200,function(){jq(this).hide();
t.animate({left:0},{duration:200,specialEasing:{width:"linear",height:"easeOutBounce"},complete:function(){E.hide()
}})
})
}function u(){t.animate({left:-537},{duration:200,specialEasing:{width:"linear",height:"easeOutBounce"},complete:function(){E.fadeIn(200)
}});
w.slideUp();
L.html("+")
}function N(){w.slideToggle();
var O=L.html();
if(O=="-"){L.html("+")
}else{L.html("-")
}D()
}function J(){H.fadeIn(function(){});
u()
}function D(){H.fadeOut(function(){})
}E.on("click",function(O){M();
O.preventDefault()
});
C.on("click",function(O){u();
O.preventDefault()
});
K.on("click",function(O){N();
O.preventDefault()
});
H.on("click",function(O){D();
O.preventDefault()
});
return{changeTextPanel:function(O){B(O)
},changeTextLabel:function(O){y(O)
},hidePanel:function(){u()
},showDotPanel:function(){J()
},hideDotPanel:function(){D()
},changeDotText:function(O){A(O)
}}
};
var c=new p();
var j=function(){j.prototype.init()
};
j.prototype.init=function(){if(r.length>0){this.getContent();
this.initMap();
this.buildTabs()
}};
j.prototype.getContent=function(){if(typeof q!=="undefined"&&q.length>0){jq.each(q,function(t,w){var u={};
if(w.title){u.title=w.title
}else{u.title=""
}if(w.description){u.description=w.description
}else{u.description=""
}if(w.description){u.description=w.description
}else{u.description=""
}u.map=j.prototype.processTable(w.desc);
f.push(u)
})
}};
j.prototype.initMap=function(){j.prototype.loadAllLibs().done(function(){var t=k.util.jspVars.get("IG_MAP.world");
if(t!==""){d3.json(t,function(u,w){l=w;
if(typeof d3!=="undefined"){j.prototype.loadMap(f[0],l)
}})
}});
n.find("li").first().find("a").addClass("active");
b.find("li").first().find("a").addClass("active");
j.prototype.loadMapFallback(f[0])
};
j.prototype.loadMapFallback=function(t){if(typeof t!=="undefined"){g.find(".title").html(t.title);
g.find(".description").html(t.description);
var u=g.find(".mapContent");
u.html("");
if(t.map.length>0){jq.each(t.map,function(x,y){var w="";
w+='<div class="mapItem">';
if(typeof y.Country!=="undefined"){w+='<h5 class="country">'+y.Country+"</h5>"
}if(typeof y.Description!=="undefined"){w+='<p class="country-desc">'+y.Description+"</p>"
}w+="</div>";
u.append(w)
})
}}};
j.prototype.loadMap=function(C,T){var N='<pattern id="pattern" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 0 0 L 22 0 22 22 0 22 z" stroke="#fff" stroke-width="1" fill="#d7e2e8"></path></pattern>';
var D=960/600;
var x=a.parent().width();
var E=900;
var L=900;
var S=d3.geo.mercator();
var K=void 0;
var t;
var F;
var R=700;
var u=7;
var I=d3.geo.path().projection(S);
var G=d3.select("#map");
var M=20;
var P=10;
var H=u;
var z;
var Q;
var O;
a.fadeIn();
if(!C){r.html('<div class="inner-no-dots-message">Please add some dots to the map</div>');
return
}if(C){c.changeTextPanel(C.description);
c.changeTextLabel(C.title)
}var B=function(U){return"c"+U.id
};
var w=function(V){var U=5;
V.transition().attr("r",u*U).style({opacity:0}).delay(0).duration(R).ease("sin").each("end",function(){d3.select(this).attr("r",u).style({opacity:1});
w(V)
})
};
var J=function(U,V,W){U.classed("active-dot",true);
t=G.insert("circle",".active-dot").attr("cx",S([W.Longitude,W.Latitude])[0]).attr("cy",S([W.Longitude,W.Latitude])[1]).attr("r",u+2).attr("stroke","#69375D").style({opacity:1}).style("fill","#69375D").classed("ripple",true);
t.call(w,V)
};
var A=function(V,U){clearTimeout(U);
V.transition().attr("r",u).duration(200).style({opacity:0}).ease("sin").each("end",function(){d3.select(this).remove()
})
};
var y=function(U){if(U>0&&U<=320){z.attr("r",M);
Q.attr("r",M+26);
O.attr("r",M+32)
}else{if(U>320&&U<=700){z.attr("r",P);
Q.attr("r",P+16);
O.attr("r",P+22)
}else{z.attr("r",H);
Q.attr("r",H+6);
O.attr("r",H+12)
}}};
this.generateDots=function(){var U=C.map;
if(U.length>0){z=G.selectAll("circle").data(U);
Q=G.selectAll("circle").data(U);
O=G.selectAll("circle").data(U);
Q.enter().append("circle").attr("cx",function(W){return S([W.Longitude,W.Latitude])[0]
}).attr("cy",function(W){return S([W.Longitude,W.Latitude])[1]
}).attr("r",12).attr("stroke","#69375D").attr("stroke-opacity",0.6).on("click touchstart",function(X){var W=d3.select(this);
c.showDotPanel();
c.changeDotText(X)
}).attr("fill-opacity",0);
O.enter().append("circle").attr("cx",function(W){return S([W.Longitude,W.Latitude])[0]
}).attr("cy",function(W){return S([W.Longitude,W.Latitude])[1]
}).attr("r",16).attr("stroke","#69375D").attr("stroke-opacity",0.6).on("click",function(X){var W=d3.select(this);
c.showDotPanel();
c.changeDotText(X)
}).attr("fill-opacity",0);
z.enter().append("circle").attr("cx",function(W){return S([W.Longitude,W.Latitude])[0]
}).attr("cy",function(W){return S([W.Longitude,W.Latitude])[1]
}).attr("r",u).attr("fill","#69375D").attr("class","mainPoint").on("click",function(X){var W=d3.select(this);
c.showDotPanel();
c.changeDotText(X)
}).on("mouseover",function(X){var W=d3.select(this);
var Y=jq(".ripple").length;
if(Y==0){J(W,this,X)
}}).on("mouseleave",function(Y){var W=d3.select(this);
W.classed("active-dot",false);
var X=d3.select(".ripple");
A(X,F)
});
var V=a.parent().width();
y(V)
}jq(window).on("resize orientationchange",function(){var W=a.parent().width();
y(W);
a.attr("width",W);
a.attr("height",W/D)
})
};
this.parseSVG=function(U){var W=document.createElementNS("http://www.w3.org/1999/xhtml","div");
W.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+U+"</svg>";
var V=document.createDocumentFragment();
while(W.firstChild.firstChild){V.appendChild(W.firstChild.firstChild)
}return V
};
this.init=function(){if(typeof T!=="undefined"){var V=document.getElementById("svg-defs").appendChild(this.parseSVG(N));
a.attr("width",x);
a.attr("height",x/D);
var W=topojson.feature(T,T.objects.countries);
var U,Z,X;
S.scale(1).translate([0,0]);
var U=I.bounds(W);
var Z=0.95/Math.max((U[1][0]-U[0][0])/L,(U[1][1]-U[0][1])/E);
var X=[(L-Z*(U[1][0]+U[0][0]))/2,(E-Z*(U[1][1]+U[0][1]))/2];
S.scale(Z).translate(X);
G.selectAll(".commodities").remove();
G.selectAll("circle").remove();
var Y=G.append("g").attr("class","commodities");
K=Y.selectAll("path").data(W.features);
K.enter().append("path").attr("d",I).attr("id",this.geoID).attr("fill","#ffffff");
K.exit().remove();
this.generateDots()
}};
this.init()
};
j.prototype.buildTabs=function(){j.prototype.buildMobileTabs(0);
j.prototype.buildTabsDesktop(0)
};
j.prototype.buildMobileTabs=function(t){if(f.length>0){m.html('<li class="selected"><a href="#" data-id="'+t+'" class="active">'+f[t].title+'<span class="arrow"></span></a></li>');
h.html("");
jq.each(f,function(u,w){if(u!=t){h.append('<li><a href="#" data-id="'+u+'">'+w.title+"</a></li>")
}});
h.slideUp("fast")
}};
j.prototype.buildTabsDesktop=function(t){if(f.length>0){n.html("");
jq.each(f,function(u,w){var x="";
if(u==t){x="active"
}n.append('<li><a href="#" data-id="'+u+'" class="'+x+'">'+w.title+"</a></li>")
})
}};
j.prototype.processTable=function(u){var y=[];
var x=[];
var t=jq(u).find("tr:first").find("td");
t.each(function(B,A){var z=(A.innerText||A.textContent);
x.push(z)
});
var w=jq(u).find("tr");
w.each(function(A,C){var z={};
var B=jq(C).find("td");
B.each(function(E,D){z[x[E]]=(D.innerText||D.textContent)
});
if(A!==0){y.push(z)
}});
return y
};
j.prototype.loadD3Library=function(){return k.util.getCachedScript("//a.c-dn.net/b/23nowQ.js#d3.v3.min.js")
};
j.prototype.loadTopoJsonLibrary=function(){return k.util.getCachedScript("//a.c-dn.net/b/3mgtgD.js#topojson.min.js")
};
j.prototype.loadAllLibs=function(){return j.prototype.loadD3Library().then(j.prototype.loadTopoJsonLibrary)
};
n.on("click","a",function(u){var t=jq(this).attr("data-id");
if(!jq(this).hasClass("active")){j.prototype.buildMobileTabs(t);
n.find("a").removeClass("active");
jq(this).addClass("active");
c.hidePanel();
c.hideDotPanel();
if(typeof d3!=="undefined"){j.prototype.loadMap(f[t],l)
}j.prototype.loadMapFallback(f[t])
}u.preventDefault()
});
h.on("click","a",function(u){var t=jq(this).attr("data-id");
h.find("a").removeClass("active");
jq(this).addClass("active");
j.prototype.buildMobileTabs(t);
j.prototype.buildTabsDesktop(t);
c.hidePanel();
c.hideDotPanel();
if(typeof d3!=="undefined"){j.prototype.loadMap(f[t],l)
}j.prototype.loadMapFallback(f[t]);
u.preventDefault()
});
m.on("click","a",function(t){if(jq(this).hasClass("accordion-expanded")){jq(this).removeClass("accordion-expanded")
}else{jq(this).addClass("accordion-expanded")
}h.slideToggle("fast");
t.preventDefault()
});
k.util.mapCommodities=new j()
}(PS));
window.PS=window.PS||{};
window.PS.util=window.PS.util||{};
(function(a){a.util.contactUs=function(){var J=jq(".contactus-dynamic");
var k=J.find("button.test");
var e=J.find(".contact-list");
var W=e.find("h3");
var K=J.find(".contact-list-mobile h3");
var c=m();
var u=a.util.jspVars.get("IG_CONTACT.data");
var V=768;
var O;
var C=J.find(".contact-list.topic");
var y=J.find(".contact-list-mobile h3.topics");
var z=C.find("h3");
var D=C.find("ul");
var h=D.find("li");
var E=h.find("a");
var M=J.find(".contact-list.location");
var U=M.find("h3");
var S=J.find(".contact-list-mobile h3.locations");
var b=M.find("ul");
var Q=b.find("li");
var l=Q.find("a");
var o=J.find(".contact-list.details");
var I=o.find("h3");
var t=J.find(".contact-list-mobile h3.details");
var F=o.find(".contact-details");
var L=null;
var w=null;
var R=null;
function m(){if(!H()){return jq(window).outerWidth(true)+15
}else{return jq(window).outerWidth(true)
}}var B=function(){if(c<=V){return true
}else{return false
}};
function H(){return navigator.userAgent.match(/iPad/i)!=null
}var P=function(Y,X){W.removeClass("active");
Y.addClass("active");
K.removeClass("active");
A(K.eq(X))
};
var N=function(){if(B()){b.hide();
F.hide()
}D.fadeOut("fast",function(){var X=jq(this);
X.fadeIn("fast")
})
};
var q=function(){w=L.locs;
b.html("");
if(w.length>0){jq.each(w,function(X,Y){var Z=JSON.parse(Y);
b.append('<li><a href="#">'+Z.loc_name+"</a></li>")
})
}};
var g=function(){if(B()){D.hide();
F.hide()
}b.fadeOut("fast",function(){var X=jq(this);
q();
Q=b.find("li");
l=Q.find("a");
X.fadeIn("fast")
})
};
var G=function(){var X=JSON.parse(w[R]);
F.html(X.cont_details)
};
var x=function(){if(B()){b.hide();
D.hide()
}F.fadeOut("fast",function(){var X=jq(this);
G();
X.fadeIn("fast")
})
};
var T=function(){F.fadeOut("fast")
};
var j=function(X){e.removeClass("current");
X.addClass("current")
};
var A=function(X){K.removeClass("active");
X.delay(500).addClass("active")
};
E.on("click",function(Z){var Y=jq(this);
var X=Y.parent().index();
E.removeClass("active");
h.removeClass("active");
l.removeClass("active");
Q.removeClass("active");
j(M);
jq(this).addClass("active");
Y.parent().addClass("active");
f();
P(U,1);
L=u[X];
g();
T();
Z.preventDefault()
});
function f(){E.removeClass("twolines");
jq.each(E,function(Y,X){if(jq(X).height()>=40){jq(X).addClass("twolines")
}});
l.removeClass("twolines");
jq.each(l,function(Y,X){if(jq(X).height()>=40){jq(X).addClass("twolines")
}})
}jq(b).on("click","li a",function(Z){var Y=jq(this);
var X=Y.parent().index();
l.removeClass("active");
Q.removeClass("active");
j(o);
Y.addClass("active");
Y.parent().addClass("active");
f();
P(I,2);
R=X;
x();
Z.preventDefault()
});
K.on("click",function(Z){var Y=jq(this);
var X=false;
if(Y.hasClass("active")){X=false
}else{if(y.hasClass("active")){X=false
}else{if(S.hasClass("active")&&Y.index()==2){X=false
}else{X=true
}}}if(X){P(Y,Y.index());
if(Y.index()==0){N();
h.removeClass("active")
}if(Y.index()==1){g();
Q.removeClass("active")
}if(Y.index()==2){x()
}}Z.preventDefault()
});
var n=function(){P(z,0);
D.show();
b.hide();
F.hide();
E.removeClass("active");
h.removeClass("active");
l.removeClass("active");
Q.removeClass("active");
M.removeClass("current");
C.addClass("current")
};
var r=function(){D.show();
b.show();
F.show()
};
var p=function(){D.hide();
b.hide();
F.hide();
if(C.hasClass("current")){D.show()
}if(M.hasClass("current")){b.show()
}if(o.hasClass("current")){F.show()
}};
jq(window).on("orientationchange resize",function(){c=m();
if(c>V){r();
f()
}else{p()
}});
n()
}()
}(PS));
window.PS=window.PS||{};
window.PS.util=window.PS.util||{};
(function(c,b){function a(){var q={PERSONALISATION_COOKIE:"personalisationTags",DEFAULT_BLOCK:".swapping-default",DEFAULT_TAG:"default",PERSONALISED_BLOCKS_CLASS:".swapping-specific-content.personalisation",TRACK_TYPES:{CLICK:"click",DISPLAY:"display"}};
function f(){return !!b&&!!c.util.Cookie&&!!c.util.jspVars&&!!c.util.pubsub&&!!c.core&&!!c.core.CQMode&&!!c.util.AjaxContentDependencies&&!!c.storage
}function h(){var u=c.util.jspVars.get("contentMetatags"),w=c.util.Cookie.get(q.PERSONALISATION_COOKIE);
this.metatags=(!!u)?u.split("|"):[];
this.existingHits=JSON.parse(w)||[];
return this
}function g(){var B=this.metatags.length,u,y=[],x,w,A,z;
for(x=0;
x<B;
x+=1){z=false;
u=this.existingHits.length;
for(w=0;
w<u;
w+=1){A=this.existingHits[w].split("|");
if(A[0]===this.metatags[x]){A[1]=parseInt(A[1],10)+1;
y.push(A.join("|"));
z=true;
break
}}if(z){this.existingHits.splice(w,1)
}else{y.push(this.metatags[x]+"|1")
}}this.existingHits=y.concat(this.existingHits);
if(this.existingHits.length>50){this.existingHits.splice(50,this.existingHits.length-50)
}c.util.Cookie.set(q.PERSONALISATION_COOKIE,JSON.stringify(this.existingHits),5*365);
return this
}function n(u){c.SiteCatalyst.tracker.tl(true,"o",u)
}function t(w,x,u){var y="Personalisation:"+w+":"+x;
if(!!c.SiteCatalyst){if(w===q.TRACK_TYPES.DISPLAY||(w===q.TRACK_TYPES.CLICK&&(u.href==="#"||u.target==="_blank"||(u.attributes.getNamedItem("href")&&u.attributes.getNamedItem("href").value==="#")))){if(c.SiteCatalyst.plugins&&c.SiteCatalyst.plugins.loaded){n(y)
}else{c.util.pubsub.subscribe("SiteCatalyst.plugins.loaded",function(){n(y)
})
}}else{c.storage.LocalQueue.store("linkTrack",y,true)
}}}function l(u,w){u.find(".cta a").bind("click",function(){t(q.TRACK_TYPES.CLICK,w,this)
})
}function r(w,u,x){b.ajax(u).done(function(y){w.find(q.DEFAULT_BLOCK).empty().append(y).css("visibility","visible");
c.util.AjaxContentDependencies.processDependencies();
t(q.TRACK_TYPES.DISPLAY,x);
l(w,x)
})
}function o(){var A=b(q.PERSONALISED_BLOCKS_CLASS),x,B=A.length,F=this.existingHits.length,C,D,E,u,w,z,y;
for(z=0;
z<B;
z+=1){x=b(A[z]);
if(F===0){this.displayDefaultContent(x)
}else{E=0;
D="";
C="";
for(y=0;
y<F;
y+=1){u=this.existingHits[y].split("|");
w=x.data(u[0]);
if(!!w){if(parseInt(u[1],10)>E){D=w;
E=parseInt(u[1],10);
C=u[0]
}}}if(D!==""){r(x,D,C)
}else{this.displayDefaultContent(x)
}}}this.contentDisplayed=true;
return this
}function k(x){var u=x.find(q.DEFAULT_BLOCK),w=u.find(" [class*='swapping-parsys-']").html();
if(!!w&&w.trim()!==""){u.css("visibility","visible");
t(q.TRACK_TYPES.DISPLAY,q.DEFAULT_TAG);
l(x,q.DEFAULT_TAG)
}}function e(y){if(!y){var x=b(q.PERSONALISED_BLOCKS_CLASS),w=x.length,u;
for(u=0;
u<w;
u+=1){k(b(x[u]))
}this.contentDisplayed=true
}else{k(y)
}}function j(){if(!this.contentDisplayed){this.displayDefaultContent()
}}function m(){setTimeout(j.bind(this),2000)
}function p(){if(f()&&!c.core.CQMode.inEdit){this.initVars().registerHit()
}}return{init:p,initVars:h,registerHit:g,displayPersonalisedContent:o,displayDefaultContent:e,somethingDisplayedValidation:m,contentDisplayed:false}
}c.util.Personalisation=new a();
c.util.Personalisation.init()
}(window.PS,window.jQuery));
window.PS=window.PS||{};
window.PS.util=window.PS.util||{};
(function(n){var f=jq(".pension-calculator"),a=f.find("form"),e=jq(".annualPensionPot"),m=jq(".finalPensionPot"),g=jq("#annualPensionPot-desired-income"),u=jq("#finalPensionPot-contribution"),k=jq(".currency-spinner"),q=jq(".percentages-spinner"),o=jq(".percentagesFive-spinner"),h=jq(".change-action"),c=jq(".age-spinner"),w=jq(".showExtraFields"),p=jq(".tooltip-info"),j=jq(".additional-options"),b=22,r={},x=a.data(),l="chart-container",t="."+l;
var y=function(){this.init()
};
y.prototype.init=function(){if(!!a&&a.length>0){this.loadJqueryUi();
this.loadD3Library();
this.getConfig()
}};
y.prototype.loadCalculations=function(){this.calculatePensionPot(e);
this.calculatePensionPot(m)
};
y.prototype.showExtraFields=function(z){z.each(function(A,B){jq(B).find(w).on("click",function(){jq(B).find(j).slideToggle(400);
jq(this).toggleClass("open")
})
})
};
y.prototype.getConfig=function(){this.config={currency:{symbol:x.currency},chartTooltip:{pot:x.chartTooltipPot,potNoInflation:x.chartTooltipPotNoInflation},validation:{invalid:x.validationInvalid,age:x.validationAge,inflation:x.validationInflation,totalCostOfOwnership:x.validationTotalCostOfOwnership,assumptions:x.validationAssumptions},si_symbol:{quintillion:x.siSymbolQuintillion,quadrillion:x.siSymbolQuadrillion,trillion:x.siSymbolTrillion,billion:x.siSymbolBillion,million:x.siSymbolMillion},si_symbolShort:{quintillion:x.siSymbolQuintillionShort,quadrillion:x.siSymbolQuadrillionShort,trillion:x.siSymbolTrillionShort,billion:x.siSymbolBillionShort,million:x.siSymbolMillionShort,thousand:x.siSymbolThousandShort},color:{pot:x.colorPensionPot,potNoInflation:x.colorPensionPotNoInflation}}
};
y.prototype.isNumberKey=function(z,B){var A,C;
if(window.event){A=window.event.keyCode
}else{if(B){A=B.which
}else{if(z){A=z.charCode
}else{return true
}}}C=String.fromCharCode(A);
if((A===null)||(A===0)||(A===n.events.KEYS.BACKSPACE)||(A===n.events.KEYS.TAB)||(A===n.events.KEYS.ENTER)||(A===n.events.KEYS.ESCAPE)){return true
}else{if((("0123456789").indexOf(C)>-1)){return true
}else{if(C==="."){return true
}else{return false
}}}};
y.prototype.buildUiWidgets=function(){var z=this;
p.tooltip({position:{my:"center top",at:"center bottom+"+b,using:function(A,B){jq(this).css(A);
jq("<div>").addClass("arrow-tooltip "+B.vertical+" "+B.horizontal).appendTo(this)
}}});
jq(window).on("orientationchange",function(){p.tooltip("close");
p.on("click",function(){jq(this).tooltip("open")
})
});
k.spinner({min:0,max:100000,step:1000,numberFormat:"C"});
c.spinner({min:0,max:100,step:1,numberFormat:"C"});
q.spinner({min:-10,max:10,step:0.1,numberFormat:"n"});
o.spinner({min:-10,max:10,step:0.05,numberFormat:"n"});
g.spinner({min:0,max:100000,step:1000,numberFormat:"C"});
u.spinner({min:25,max:5000,step:25,numberFormat:"C"});
k.each(function(){jq(this).before("<span class='currency-symbol'>"+z.config.currency.symbol+"</span>")
});
z.calcOnChange(e,z.calculatePensionPot.bind(z));
z.calcOnChange(m,z.calculatePensionPot.bind(z));
f.find(".tabNav").find("li").off("click").on("click",function(){if(jq(this).hasClass("first")){z.calculatePensionPot(e)
}else{z.calculatePensionPot(m)
}})
};
y.prototype.loadJqueryUi=function(){var z=this;
return n.util.getCachedScript("//a.c-dn.net/b/0d4KY3.js#jquery-ui.min.js",{success:function(){z.loadJqueryUiTouch().done(function(){z.buildUiWidgets.call(z);
z.loadCalculations.call(z);
z.buildCharts.call(z)
});
z.showExtraFields(a)
},error:function(){console.log("The script didn't load")
}})
};
y.prototype.loadJqueryUiTouch=function(){return n.util.getCachedScript("//a.c-dn.net/b/1ZOvst.js#jquery.ui.touch-punch.min.js")
};
y.prototype.loadD3Library=function(){return n.util.getCachedScript("//a.c-dn.net/b/23nowQ.js#d3.v3.min.js")
};
y.prototype.getChartContainerWidth=function(){var A=jq(".annualPensionPot-"+l).width();
var z=jq(".finalPensionPot-"+l).width();
this.chartContainerWidth=Math.max(A,z)
};
y.prototype.calculatePensionPot=function(ad,J){if(!n.core.CQMode.inEdit&&!ad.parents(".mPanel").hasClass("current")){return
}var D=this;
ad.find("input").on("keypress",D.isNumberKey);
var X=ad.attr("class"),am=jq("#"+X+"-savings-pots"),Z=jq("#"+X+"-current-age"),P=jq("#"+X+"-age-of-retirement"),K=jq("#"+X+"-assumptions"),N=jq("#"+X+"-inflation"),W=jq("#"+X+"-totalCostOfOwnership"),z=D.getInputValue(g,J),V=D.getInputValue(u,J),H=D.getInputValue(am,J),A=D.getInputValue(Z,J),ak=D.getInputValue(P,J),ah=D.getInputValue(K,J),ag=D.getInputValue(N,J),ac=D.getInputValue(W,J),I=20;
if(z<0||H<0||A<0){alert(this.config.validation.invalid);
return false
}if(ak<=A){alert(this.config.validation.age);
return false
}if(ag>10||ag<-10){alert(this.config.validation.inflation);
return false
}if(ac>10||ac<-10){alert(this.config.validation.totalCostOfOwnership);
return false
}if(ah>10||ah<-10){alert(this.config.validation.assumptions);
return false
}var ae=(ak-A)*12,B=0,Y=0,R=0,al=0,ab=0,aa=0,F=0,E=0,O=0,af=0,Q=0,C=ae-1,T=1+ag/100,U=1+(ah-ac)/100;
B=z*I;
Y=B*Math.pow(T,ae/12);
af=Y-(H*Math.pow(U,ae/12));
for(var ai=0;
ai<=C;
ai++){Q+=Math.pow(T,(C-ai)/12)*Math.pow(U,ai/12)
}ab=af/Q;
ab=Number.isFinite(ab)?ab:"Calculation error";
if(ab<0){ab=0
}for(var ai=0;
ai<=C;
ai++){O+=Math.pow(T,(C-ai)/12)*Math.pow(U,ai/12)
}F=V*O;
E=H*Math.pow(U,ae/12);
al=F+E;
R=al/Math.pow(T,ae/12);
aa=R/I;
jq(".annualPensionPot-desired-income-result").text(D.nFormatter(z));
jq(".annualPensionPot-pension-pot-result").text(D.nFormatter(Y));
jq(".annualPensionPot-result-afterInflation").text(D.nFormatter(B));
jq(".annualPensionPot-contribution-result").text(D.nFormatter(Math.ceil(ab)));
jq(".finalPensionPot-desired-income-result").text(D.nFormatter(aa));
jq(".finalPensionPot-pension-pot-result").text(D.nFormatter(al));
jq(".finalPensionPot-result-afterInflation").text(D.nFormatter(R));
jq(".finalPensionPot-contribution-result").text(D.nFormatter(Math.ceil(V)));
var L=X+"-"+l;
var S=ae/12;
var G;
var M;
this.chartData=[];
for(var ai=0;
ai<=S;
ai+=1){var aj=new Date();
if(X==="annualPensionPot"){G=this.getDataPointWithInflation(parseInt(H),T,U,ab,ai);
M=this.getDataPointNoInflation(parseInt(H),B,ae,ai)
}else{G=this.getDataPointWithInflation(parseInt(H),T,U,V,ai);
M=this.getDataPointNoInflationFromFinal(G,T,ai)
}aj.setFullYear(aj.getFullYear()+ai);
this.chartData.push(this.getChartData(aj,G,M))
}if(r[L]){this.updatePensionChart(L,this.chartData)
}jq(window).off("resize.pensionChart").on("resize.pensionChart",function(){D.redrawCharts()
})
};
y.prototype.redrawCharts=function(){var z=this;
jq.each(jq(t),function(A,B){var C=B.className.split(" ");
C.pop(C.indexOf(l));
jq(B).empty();
z.createPensionChart(C[0])
})
};
y.prototype.getChartData=function(z,A,B){return{date:z,pensionPotValueWithInflation:A,pensionPotValueNoInflation:B}
};
y.prototype.getDataPointWithInflation=function(C,z,A,D,B){return(C*Math.pow(A,B))+D*this.getAnnualDenominator(B*12,z,A)
};
y.prototype.getDataPointNoInflation=function(B,z,C,A){return B+((z-B)/(C/12))*A
};
y.prototype.getDataPointNoInflationFromFinal=function(A,z,B){return A/Math.pow(z,B)
};
y.prototype.getAnnualDenominator=function(z,A,B){var E=0;
var D=z-1;
for(var C=0;
C<=D;
C++){E+=Math.pow(A,(D-C)/12)*Math.pow(B,C/12)
}return E
};
y.prototype.nFormatter=function(A){A=parseFloat(A);
var z=[{value:1000000000000000000,symbol:this.config.si_symbol.quintillion},{value:1000000000000000,symbol:this.config.si_symbol.quadrillion},{value:1000000000000,symbol:this.config.si_symbol.trillion},{value:1000000000,symbol:this.config.si_symbol.billion},{value:1000000,symbol:this.config.si_symbol.million}],B;
for(B=0;
B<z.length;
B++){if(A>=z[B].value){return(A/z[B].value).toFixed(3)+" "+z[B].symbol
}}if(A>=10000){return(Math.round(A/1000)*1000).toLocaleString()
}return A.toFixed(0)
};
y.prototype.nFormatterShort=function(A){A=parseFloat(A);
var z=[{value:1000000000000000000,symbol:this.config.si_symbolShort.quintillion},{value:1000000000000000,symbol:this.config.si_symbolShort.quadrillion},{value:1000000000000,symbol:this.config.si_symbolShort.trillion},{value:1000000000,symbol:this.config.si_symbolShort.billion},{value:1000000,symbol:this.config.si_symbolShort.million},{value:1000,symbol:this.config.si_symbolShort.thousand}],B;
for(B=0;
B<z.length;
B++){if(A>=z[B].value){return(A/z[B].value)+z[B].symbol
}}return A.toString()
};
y.prototype.calcOnChange=function(A,z){jq(A).find(h).each(function(){jq(this).spinner({spin:function(B,C){jq(this).data("value",C.value);
z(A,B.type)
},change:function(B,C){jq(this).data("value",C.value);
z(A,B.type)
}})
})
};
y.prototype.getInputValue=function(z,A){if(z.data("value")===undefined||A==="spinchange"){return parseFloat(z.val())
}return z.data("value")
};
y.prototype.buildCharts=function(){this.createPensionChart("annualPensionPot-"+l);
this.createPensionChart("finalPensionPot-"+l)
};
y.prototype.createPensionChart=function(z){if(r[z]&&this.isChartHidden()){return
}this.getChartContainerWidth();
this.margin={top:30,right:55,bottom:45,left:40};
this.tooltipPadding={left:40,right:10};
this.width=Math.abs(this.chartContainerWidth-this.margin.left-this.margin.right);
this.height=parseInt(d3.select(t).style("height"),10)-this.margin.top-this.margin.bottom;
this.duration=300;
this.bisectDate=d3.bisector(function(A){return A.date
}).left;
this.container=d3.select("."+z);
this.formClass=this.extractFormClass(z);
this.svg=this.container.append("svg").attr("width",this.width+this.margin.left+this.margin.right).attr("height",this.height+this.margin.top+this.margin.bottom).append("g").attr("transform","translate("+this.margin.left+","+this.margin.top+")");
this.organiseChartData().createChartBorder().createChartScales().createGradientWithInflation().createGradientWithoutInflation().createChartArea().createChartLine().createChartAxes().appendAreaWrapper().appendLineWrapper().appendAreas().appendLines().createChartFocusArea();
r[z]=true
};
y.prototype.isChartHidden=function(){return jq(".chart-container").css("display")==="none"
};
y.prototype.organiseChartData=function(){var A=[];
for(var z in this.chartData[0]){A.push(z)
}this.headers=A.slice(1);
this.series=this.mapDataPoints(this.chartData);
return this
};
y.prototype.mapDataPoints=function(z){return this.headers.map(function(A){return{id:A,values:z.map(function(B){return{date:B.date,value:B[A]}
})}
})
};
y.prototype.extractFormClass=function(z){return z.substring(0,z.indexOf("-"+l))
};
y.prototype.getMaxValue=function(){return Math.round(d3.max(this.series,function(z){return d3.max(z.values,function(A){return A.value
})
}))
};
y.prototype.createChartScales=function(){this.maxValue=this.getMaxValue(this.series);
this.yTicks=this.getSmartTicks(this.maxValue);
this.x=d3.time.scale().range([0,this.width]);
this.y=d3.scale.linear().range([this.height,0]);
this.x.domain(d3.extent(this.chartData,function(z){return z.date
}));
this.y.domain([0,this.yTicks.endPoint]);
return this
};
y.prototype.createGradientWithInflation=function(){this.createGradient("gradientWithInflation",this.config.color.pot);
return this
};
y.prototype.createGradientWithoutInflation=function(){this.createGradient("gradientWithoutInflation",this.config.color.potNoInflation);
return this
};
y.prototype.createGradient=function(B,z){var A=this.svg.append("defs").append("linearGradient").attr("id",B+"_"+this.formClass).attr("x1","0%").attr("y1","0%").attr("x2","35%").attr("y2","100%").attr("spreadMethod","pad");
A.append("stop").attr("offset","0%").attr("stop-color",z).attr("stop-opacity",0.5);
A.append("stop").attr("offset","100%").attr("stop-color",z).attr("stop-opacity",0)
};
y.prototype.createChartLine=function(){this.line=d3.svg.line().interpolate("basis").x(function(z){return this.x(z.date)
}).y(function(z){return this.y(z.value)
});
return this
};
y.prototype.createChartArea=function(){this.area=d3.svg.area().x(function(z){return this.x(z.date)
}).y0(function(z){return this.y(0)
}).y1(function(z){return this.y(z.value)
});
return this
};
y.prototype.createChartAxes=function(){this.xAxis=this.getXAxis();
this.yAxis=this.getYAxis();
this.svg.append("g").attr("class","x axis").attr("transform","translate(0,"+this.height+")").call(this.customXAxis.bind(this));
this.svg.append("g").attr("class","y axis").call(this.customYAxis.bind(this));
return this
};
y.prototype.createChartBorder=function(){this.svg.append("line").attr("class","border").attr("x1",this.width).attr("x2",this.width).attr("y1",0).attr("y2",this.height+0.5).style("fill","transparent").style("stroke","#ddd").style("stroke-width",1);
return this
};
y.prototype.customXAxis=function(z){z.call(this.xAxis);
z.selectAll(".tick line").attr("y2",10);
z.selectAll(".tick text").attr("y",15)
};
y.prototype.customYAxis=function(z){z.call(this.yAxis);
z.select(".domain").remove();
z.selectAll(".tick text").attr("x",this.width+15).attr("y",2)
};
y.prototype.getXAxis=function(){return d3.svg.axis().scale(this.x).orient("bottom").ticks(Math.min(8,window.innerWidth/100)).tickSize(0).tickFormat(function(z){if(d3.time.year(z)<z){return d3.time.format("%b")(z)
}else{return d3.time.format("%Y")(z)
}})
};
y.prototype.getYAxis=function(){var z=this;
return d3.svg.axis().scale(this.y).orient("right").ticks(this.yTicks.count).tickSize(this.width).tickFormat(function(A){if((A/1000)>=1){A=z.config.currency.symbol+z.nFormatterShort(A)
}return A
})
};
y.prototype.getSmartTicks=function(B){var z=Math.pow(10,B.toString().length-1);
if(B/z<2){z=z/5
}else{if(B/z<5){z=z/2
}}var A=Math.ceil((B+1)/z);
return{endPoint:A*z,count:Math.min(7,A)}
};
y.prototype.createChartFocusArea=function(){var z=this.svg.append("g").attr("class","focus").style("display","none");
z.append("line").classed("y",true);
var A=this.container.append("div").classed("chart-tooltip",true);
this.svg.append("rect").attr("class","overlay").attr("width",this.width).attr("height",this.height).style("fill","transparent").datum(this).on("mouseover",function(){z.style("display",null);
A.style("display","inline")
}).on("mouseout",function(){z.style("display","none");
A.style("display","none")
}).on("mousemove",this.mousemove);
return this
};
y.prototype.getXAxisTickDataPoints=function(B,A,z){return B-z[A-1].date>z[A].date-B?z[A]:z[A-1]
};
y.prototype.appendLineWrapper=function(){this.lineWrapper=this.svg.selectAll(".series").data(this.series).enter().append("g").attr("class","series");
return this
};
y.prototype.appendAreaWrapper=function(){this.areaWrapper=this.svg.selectAll(".area-series").data(this.series).enter().append("g").attr("class","area-series");
return this
};
y.prototype.appendLines=function(){var z=this;
this.lineWrapper.append("path").attr("class","line").attr("d",function(A){return z.line(A.values)
}).style("stroke-width","2px").style("stroke",function(A){if(A.id==="pensionPotValueNoInflation"){return z.config.color.potNoInflation
}return z.config.color.pot
});
return this
};
y.prototype.appendAreas=function(){var z=this;
this.areaWrapper.append("path").attr("class","area").attr("d",function(A){return z.area(A.values)
}).style("fill",function(A){if(A.id==="pensionPotValueNoInflation"){return"url(#gradientWithoutInflation_"+z.formClass+")"
}return"url(#gradientWithInflation_"+z.formClass+")"
});
return this
};
y.prototype.updatePensionChart=function(z,A){if(r[z]&&this.isChartHidden()){return
}this.chartData=A;
this.svg=d3.select("."+z);
this.formClass=this.extractFormClass(z);
this.organiseChartData().createChartScales().updateChartAxes().updateChartAreas().updateChartLines()
};
y.prototype.updateChartAxes=function(){this.xAxis=this.getXAxis();
this.yAxis=this.getYAxis();
this.svg.select(".x.axis").transition().duration(this.duration).ease("linear").call(this.customXAxis.bind(this));
this.svg.select(".y.axis").transition().duration(this.duration).ease("linear").call(this.customYAxis.bind(this));
return this
};
y.prototype.updateChartLines=function(){var z=this;
this.svg.selectAll(".series").data(this.series).select("path.line").transition().delay(this.duration).duration(this.duration).ease("linear").attr("d",function(A){return z.line(A.values)
});
return this
};
y.prototype.updateChartAreas=function(){var z=this;
this.svg.selectAll(".area-series").data(this.series).select("path.area").transition().delay(this.duration).duration(0).ease("linear").attr("d",function(A){return z.area(A.values)
}).style("fill",function(A){if(A.id==="pensionPotValueNoInflation"){return"url(#gradientWithoutInflation_"+z.formClass+")"
}return"url(#gradientWithInflation_"+z.formClass+")"
});
return this
};
y.prototype.mousemove=function(C){var G=jq(this).parents(t);
var z=d3.select(G[0]);
var A=C.x.invert(d3.mouse(this)[0]);
var B=C.bisectDate(C.series[0].values,A,1);
var F=C.getXAxisTickDataPoints(A,B,C.series[0].values);
var D=C.getXAxisTickDataPoints(A,B,C.series[1].values);
var I=z.select(".focus");
var H=z.select(".chart-tooltip");
var E=[];
E.push('<div class="chart-tooltip__content pension-pot">');
E.push('<div class="chart-tooltip__label">'+C.config.chartTooltip.pot+"</div>");
E.push('<div class="chart-tooltip__value">'+C.config.currency.symbol+Math.round(F.value,10).toLocaleString()+"</div>");
E.push("</div>");
E.push('<div class="chart-tooltip__content pension-pot-no-inflation">');
E.push('<div class="chart-tooltip__label">'+C.config.chartTooltip.potNoInflation+"</div>");
E.push('<div class="chart-tooltip__value">'+C.config.currency.symbol+Math.round(D.value,10).toLocaleString()+"</div>");
E.push("</div>");
I.attr("transform","translate("+C.x(F.date)+", 0)");
H.style("left",C.getChartTooltipPosition(H,z,F.date)+"px");
I.select("line.y").attr("x1",0).attr("x2",0).attr("y1",0).attr("y2",C.height).style("stroke","#fff").style("stroke-dasharray","7px 5px").style("stroke-width","1px");
H.style("opacity",1).html(E.join(""))
};
y.prototype.getChartTooltipPosition=function(D,A,z){var C=parseInt(D.style("width"));
var B=parseInt(A.style("width"));
var E=this.margin.left+this.margin.right;
if((this.x(z)+this.tooltipPadding.left+C)>(B-E)){this.alignChartTooltipText(D,false,true);
return this.x(z)-C+this.tooltipPadding.right
}this.alignChartTooltipText(D,true,false);
return this.x(z)+this.tooltipPadding.left
};
y.prototype.alignChartTooltipText=function(A,B,z){A.classed("align-left",B);
A.classed("align-right",z)
};
y.prototype.formatDate=function(z){var D=new Date(z);
var B=D.getMonth();
var A=D.getFullYear();
var C=window.PS.util.FullDates();
return C.getNamedMonth(B)+" "+A
};
n.util.pensionCalculator=new y()
}(window.PS));
window.PS=window.PS||{};
window.PS.util=window.PS.util||{};
(function(g){var e=jq(window),b,c=jq(".parallax-grid"),a=jq(".parallax-enabled");
var f=function(){if(!!a&&a.length>0){this.loadFancyScrolling()
}this.init()
};
f.prototype.enableParallax=function(){var h=false;
if(g.util.DeviceUtil.category()==="desktop"&&e.width()>860&&!!a&&a.length>0){h=true
}return h
};
f.prototype.init=function(){if(this.enableParallax()){this.buildParallax(c,true,1000)
}else{jq(".main-parsys.grid").removeAttr("style")
}};
f.prototype.stopWheel=function(h){e.bind("mousewheel",function(j){j.preventDefault()
});
setTimeout(function(){e.unbind("mousewheel")
},h)
};
f.prototype.loadFancyScrolling=function(){return g.util.getCachedScript("//a.c-dn.net/b/2Yk7Ku.js#jquery.scrollify.min.js",{success:function(){jq.scrollify({section:".parallax-grid",interstitialSection:".top_bar,.navigation,.footer"})
},error:function(){console.log("The script didn't load")
}})
};
f.prototype.buildParallax=function(m,h,n){this.selector=m;
this.offsets=[];
this.viewport=window;
this.center=h||false;
this.imageHeight=n||0;
this.curIndex=0;
var r=this,q=jq(r.selector),l=e,j=function(){for(var u=0,t=q.length;
u<t;
u++){var w=q.eq(u).offset().top;
r.offsets.push(w)
}},p=function(){var B=r.imageHeight,t=l.scrollTop(),w=q.height(),D=Math.round(((w-B)+1)/2);
for(var z=0,A=q.length;
z<A;
z++){var u=q.eq(z),E=u.find(".innerScroll"),y=u.offset().top,x=Math.round(t-y),C=(r.center)?"50%":"0";
u.css({backgroundPosition:C+" "+(Math.round(x*-0.1))+"px"});
E.css({backgroundPosition:C+" "+(Math.round(x*0.1))+"px"})
}},k=function(){p();
q.height(o.getViewport().height).find(".innerScroll").height(o.getViewport().height).end().parents(".main-parsys").height(o.getViewport().height*q.length)
},o={init:function(){p();
if(q.length>1){k();
j();
l.bind("resize",k)
}l.scroll(p);
return this
},move:function(t){var w=800,u=(t.handleObj)?jq(this).index():t,x=q.eq(u).offset().top;
if(r.curIndex!==u){r.curIndex=u;
stopWheel(w);
jq("html, body").stop().animate({scrollTop:x},w,"easeOutExpo")
}return false
},getViewport:function(){return{height:l.height(),width:l.width()}
}};
return o.init()
};
g.util.loadParallax=f;
e.on("resize",function(){clearTimeout(b);
b=setTimeout(function(){f.prototype.init()
},250)
})
}(window.PS));
window.PS=window.PS||{};
PS.core=PS.core||{};
PS.util=PS.util||{};
(function(h,f){var j,c,a,g,k,e=f.CQMode.inEdit;
var b=function(){if(jq(".js_lightbox").data("overlay")&&!e){this.init()
}};
b.prototype.init=function(){j=jq(".js_lightbox");
c=j.data("trigger");
a=j.data("group");
g=jq(".compliance-overlay");
k=a?"confirmation-lightbox-"+a:"confirmation-lightbox";
if(!this.checkIfCookiesExist()){h.util.Lightboxes.launch("#lb-"+c);
this.addCookieEvent()
}};
b.prototype.checkIfCookiesExist=function(){return h.util.Cookie.get(k)==="true"
};
b.prototype.addCookieEvent=function(){if(!!g&&g.length>0){var l=g.find(".cta-sec a").attr("href");
jq(".compliance-overlay .cta").click(function(m){var n=jq(m.target);
if(n.is(".btn-primary")||n.is(".cta:not(.cta-sec) a")){h.util.Cookie.set(k,"true",365);
h.util.Lightboxes.kill()
}else{if(n.is(".cta-sec a")){window.location.replace(l)
}}})
}};
h.util.loadComplianceOverlay=b
}(PS,PS.core));
window.PS=window.PS||{};
PS.tracking=PS.tracking||{};
(function(g){var e=function(l,k){var j="";
var h=((1/24)/60);
function m(q){var n="sharefinder";
var p=q.className.split(" ");
for(var o=p.length-1;
o>=0;
o--){if(p[o].indexOf("-search-type")>-1){n=p[o].split("-")[0]
}}return n
}if(!g.util.Cookie.get("sitecat.itemfinder.suggestion")){j=m(k.triggeredBy[0])+":start";
s.linkTrackVars="prop9,prop22,prop74,eVar1,eVar22,eVar62,eVar74";
s.linkTrackEvents="None";
s.tl(true,"o",j);
g.util.Cookie.set("sitecat.itemfinder.suggestion",j,(h*3))
}};
var f=function(k,j){var h=g.util.Cookie.get("sitecat.itemfinder.suggestion");
var l=j.data;
if(h&&(h.indexOf("shortreport")>-1||h.indexOf("sharefinder")>-1)){s.linkTrackVars="prop9,prop22,prop74,eVar1,eVar22,eVar62,eVar74,eVar50,products,events";
s.linkTrackEvents="event45";
s.eVar50=s.products=l;
s.tl(true,"o","shortreport:selected:"+l)
}dlog("Events: itemfinder.suggestion complete topic:",k);
dlog("Events: itemfinder.suggestion complete data:",j);
g.util.Cookie.eat("sitecat.itemfinder.suggestion")
};
var b=function(j){var k="sharefinder:start";
var h=((1/24)/60);
if(!g.util.Cookie.get("sharefinder.suggestion")){s.linkTrackVars="prop9,prop22,prop74,eVar1,eVar22,eVar62,eVar74";
s.linkTrackEvents="None";
s.tl(true,"o",k);
g.util.Cookie.set("sharefinder.suggestion",k,(h*3))
}};
var c=function(j){var h=g.util.Cookie.get("sharefinder.suggestion");
var k="sharefinder:complete";
if(h){s.linkTrackVars="prop9,prop22,prop74,eVar1,eVar22,eVar62,eVar74,eVar50,products,events";
s.linkTrackEvents="event45";
s.eVar50=s.products=k;
s.tl(true,"o",k)
}dlog("Events: sharefinder.suggestion complete topic:",j);
g.util.Cookie.eat("sharefinder.suggestion")
};
function a(){g.util.pubsub.subscribe("ItemFinder.search.start",e);
g.util.pubsub.subscribe("ItemFinder.search.selected",f);
g.util.pubsub.subscribe("sharefinder.start",b);
g.util.pubsub.subscribe("sharefinder.complete",c)
}g.tracking.SubscribeToEvents=a
}(PS));
window.PS=window.PS||{};
window.PS.tracking=window.PS.tracking||{};
window.PS.util=window.PS.util||{};
(function(b,c,a){b.getUniqueId=function(){var f=function(h){if(h){c.util.Cookie.set("x_userid",h,365)
}},e=function e(){if(!!c.SiteCatalyst){if(c.SiteCatalyst.init()){c.SiteCatalyst.sendPageView()
}}};
if(!c.util.Cookie.get("x_userid")){a.ajax({type:"POST",url:"https://"+c.util.Page.environment()+".marketdatasystems.com/identity.php",dataType:"jsonp",crossDomain:true,success:function(h){if(h&&h.x_userid){f(h.x_userid);
c.SiteCatalyst.evars.setXSiteUserId(h.x_userid)
}},error:function(j,h){if(!!window.dlog){window.dlog("Error: ",j,h)
}},complete:function g(){e()
}})
}else{c.SiteCatalyst.evars.setXSiteUserId(c.util.Cookie.get("x_userid"));
e()
}}
}(window.PS.tracking,window.PS,window.jQuery));
var $jscomp=$jscomp||{};
$jscomp.scope={};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a
};
$jscomp.global=$jscomp.getGlobal(this);
$jscomp.ASSUME_ES5=!1;
$jscomp.ASSUME_NO_NATIVE_MAP=!1;
$jscomp.ASSUME_NO_NATIVE_SET=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(c,a,b){c!=Array.prototype&&c!=Object.prototype&&(c[a]=b.value)
};
$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};
$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)
};
$jscomp.Symbol=function(){var a=0;
return function(b){return $jscomp.SYMBOL_PREFIX+(b||"")+a++
}
}();
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();
var a=$jscomp.global.Symbol.iterator;
a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));
"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)
}});
$jscomp.initSymbolIterator=function(){}
};
$jscomp.arrayIterator=function(b){var a=0;
return $jscomp.iteratorPrototype(function(){return a<b.length?{done:!1,value:b[a++]}:{done:!0}
})
};
$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();
a={next:a};
a[$jscomp.global.Symbol.iterator]=function(){return this
};
return a
};
$jscomp.makeIterator=function(b){$jscomp.initSymbolIterator();
var a=b[Symbol.iterator];
return a?a.call(b):$jscomp.arrayIterator(b)
};
$jscomp.arrayFromIterator=function(c){for(var a,b=[];
!(a=c.next()).done;
){b.push(a.value)
}return b
};
$jscomp.arrayFromIterable=function(a){return a instanceof Array?a:$jscomp.arrayFromIterator($jscomp.makeIterator(a))
};
window.PS=window.PS||{};
window.PS.util=window.PS.util||{};
(function(am){(function(){var q=null,r=function(){window.dlog("Running activateVisible Picturefills");
document.querySelectorAll(".lazyload").forEach(function(z){window.dlog(z.offsetLeft,z.offsetTop);
var D=window.innerHeight,w=window.pageYOffset,C=z.offsetTop;
window.dlog(D,w,C);
C<D+w&&!z.getAttribute("data-picture")&&(z.setAttribute("data-picture",""),window.dlog("Redrawing image"))
});
window.picturefill();
am.util.pubsub.publish("picturefill.triggered")
};
(function(){document.querySelectorAll(".lazyload \x3e span").forEach(function(z){var D=z.getAttribute("data-height"),w=z.getAttribute("data-width");
z=z.parentNode.closest(".lazyload").parentNode;
var C=z.clientWidth;
w<C?(z.style.width=w+"px",z.style.height=D+"px"):(z.style.width=C+"px",z.style.height=D*C/w+"px")
})
})();
window.addEventListener("scroll",function(){q&&clearTimeout(q);
q=setTimeout(r,100)
});
return am.util.activateVisiblePicturefills=r
})();
(function(){var q=function(){};
q.prototype.init=function(){(this.isIOSDevice()||this.isAndroid())&&this.appsFlyer()
};
q.prototype.appsFlyer=function(){var w=am.util.jspVars.get("siteID"),D=am.SiteCatalyst.tracker.visitor.getMarketingCloudVisitorID(),r=jq("body"),C=this.getExtraParameters(),z=C.includes("\x26af_siteid\x3d")?"cellxpert":"IGWebSite";
w=jq("\x3cimg\x3e",{src:"https://app.appsflyer.com/"+this.deviceID()+"?pid\x3d"+z+"\x26c\x3d"+this.getProductGroup()+"\x26af_sub3\x3d"+w+"\x26af_sub4\x3d"+D+"\x26af_dp\x3digapp%3A%2F%2F"+C,height:1,width:1,border:0});
""===D?window.setInterval(this.appsFlyer.bind(this),500):r.append(w)
};
q.prototype.getExtraParameters=function(){var w=this.getCellExpertValues(),D=am.util.Cookie.get("qpid");
D=D?"\x26qpid\x3d"+D:"";
var r=am.util.Page.getQuerystring("chid");
r=r?"\x26chid\x3d"+r:"";
var C=am.util.Cookie.get("client_id"),z="";
w&&w.affiliateId&&w.anSessionId&&w.creativeId&&(z="\x26af_siteid\x3d"+w.affiliateId+"\x26af_sub1\x3d"+w.anSessionId+"\x26af_sub2\x3d"+w.creativeId);
return""+z+D+r+(C?"\x26trackingId\x3d"+C:"")
};
q.prototype.getCellExpertValues=function(){try{return JSON.parse(am.util.Cookie.get("salesAttribution"))
}catch(r){return window.dlog("Error parsing salesAttribution cookie values",r),!1
}};
q.prototype.getProductGroup=function(){var r=this.getCellExpertValues();
return r&&r.productGroup?r.productGroup:this.isIOSDevice()?"ios_campaign":"android_campaign"
};
q.prototype.deviceID=function(){if(this.isIphone()){var r=am.util.jspVars.get("applebanner.iphone");
return void 0===r?"id406492428":"id"+r
}return this.isIpad()?(r=am.util.jspVars.get("applebanner.ipad"),void 0===r?"id469403477":"id"+r):"com.iggroup.android.cfd"
};
q.prototype.isIOSDevice=function(){return this.isIphone()||this.isIpad()
};
q.prototype.isIphone=function(){return"iphone"===am.util.DeviceUtil.type()
};
q.prototype.isIpad=function(){return"ipad"===am.util.DeviceUtil.type()
};
q.prototype.isAndroid=function(){return"android"===am.util.DeviceUtil.type()
};
am.util.AffiliateAppsFlyer=new q;
return q
})();
(function(){var q,r=am.util.jspVars.get("exitIntent"),w=function(){this.name="ei";
this.nameView="ei_v"
};
w.prototype.init=function(D){if(r||"undefined"!==typeof D){var z={content:"/content/igcom/en_GB/ex-nav/app-form-create-account-popup.html",ID:"ei",limit:1,display:1,et:3600,lt:0,dismiss:"",expires:"01/01/35",aud:"all",trigger:!1};
if("object"==typeof D){D=Object.assign(z,D)
}else{var C="undefined"!==typeof D?D:r.content;
D=Object.assign(z,r);
D.content=C
}this.showToUser(D)
}};
w.prototype.trigger=function(){r&&"true"===r.trigger&&this.init()
};
w.prototype.showToUser=function(D){var G=!1;
D.ID&&(this.name="ei-"+D.ID,this.nameView="ei_v-"+D.ID);
if(!am.util.Cookie.get(this.nameView)){am.util.Cookie.set(this.nameView,"false"),G=!0
}else{if("true"===am.util.Cookie.get(this.nameView)){return !1
}}var z=D.aud;
if("all"!==z){var E=am.info.user.isClient;
var C=am.info.user.isDemoClient;
if("cl"!==z||E||C){if("excl"===z&&(E||C)||"fcl"===z&&!E||"exfcl"===z&&E){return !1
}}else{return !1
}}am.util.Cookie.get(this.name)?(G&&this.setCookie(!0,null,null,D),"true"!==this.readCookie(2)&&this.readCookie(1)<D.limit&&0===this.readCookie(0)%D.display&&this.exitEvents(D)):(this.setCookie(null,null,null,D),this.exitEvents(D))
};
w.prototype.exitEvents=function(z){var E=this,C=z.lt?parseInt(z.lt,10):0,D=z.et?parseInt(z.et,10):150000;
window.setTimeout(function(){document.onmouseout=function(G){10>G.clientY&&E.createLightBox(z)
}
},C);
0!==D&&(q=window.setTimeout(function(){E.createLightBox(z)
},D))
};
w.prototype.createLightBox=function(M){var J=this,I,G=document.querySelector("body"),E=(I=""!==M.dismiss?M.dismiss:null)?", #EI-dismiss":"",D=document.querySelectorAll("#appForm"),H=this;
if(!document.querySelectorAll("#mask").length&&M.content&&"false"===am.util.Cookie.get(this.nameView)){var z={contentSrc:M.content,dismiss:I,iphone:"iphone"===am.util.DeviceUtil.type()};
clearTimeout(q);
I=Mustache.render('\x3cdiv id\x3d"mask" class\x3d"ei-mask ei-mask-pop {{#iphone}} ei-iphone{{/iphone}}" style\x3d"background-color: rgba(0,0,0,0.5); opacity: 0;"\x3e\x3cdiv id\x3d"lightbox" class\x3d"lightbox-popup ei-popup"\x3e\x3cdiv class\x3d"panel"\x3e\x3cdiv id\x3d"ei-popup-content"\x3e\x3c/div\x3e\x3ca id\x3d"EI-killLB"\x3ex\x3c/a\x3e{{#dismiss}}\x3ca class\x3d"ei-dismiss" id\x3d"EI-dismiss"\x3e{{dismiss}}\x3c/a\x3e{{/dismiss}}\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',z);
G.insertAdjacentHTML("afterbegin",I);
jq("#ei-popup-content").load(z.contentSrc+" .wrapper \x3e *",function(N,O){"error"!==O&&(jq("#ei-popup-content").find("header").hasClass("ei-bg-white"),document.querySelector(".ei-popup").classList.add("ei-bg-white"),jq("#mask").css({opacity:1}).removeClass("ei-mask-pop"),jq(document).trigger("ei:triggered"),window.optimizely=window.optimizely||[],window.optimizely.push({type:"event",eventName:"EIDisplay"}),am.util.CountrySpecific.centreModal(),am.util.AjaxContentDependencies.processDependencies())
});
"undefined"!=typeof mboxTrack&&mboxTrack("IG_onClick","ei\x3dshown");
G=document.querySelector("#EI-killLB, .ei-mask, #ei-popup-content a"+E);
am.util.Events.add(G,"click",function(N){var O=N.target.id;
am.util.Cookie.set(H.nameView,"true");
N.target.parents("#ei-popup-content").length?J.setCookie(null,!0,!0,M):J.setCookie(null,!0,null,M);
"undefined"!=typeof mboxTrack&&mboxTrack("IG_onClick","Dismiss\x3dtrue-"+O);
if("EI-killLB"===N.target.id||"mask"===N.target.id||N.target.parentElement.classList.contains("cta")){var P=document.querySelector("#mask");
if((N=N.target.parentElement.classList.contains("cta"))&&!P.querySelector("form")||!N){P.classList.add("ei-mask-pop"),P.style.opacity=0,setTimeout(function(){P.remove()
},300)
}}});
if(D.length){try{var C=D[0].contentDocument.querySelector(".navigation .button");
C&&am.util.Events.add(C,"click",function(){J.setCookie(null,!0,!0,M)
})
}catch(L){console.log(L)
}}}};
w.prototype.setCookie=function(L,I,J,E){var G=this.name,H=(new Date).getFullYear()+1;
H=(new Date("01/01/"+H)).toUTCString();
var D=1,z=0,C=!1;
E&&""!==E.expires&&(H=E.expires,H=(new Date(H.slice(0,-2)+"20"+H.slice(-2))).toUTCString());
am.util.Cookie.get(G)&&(E=am.util.Cookie.get(G).split(":"),D=E[0],z=E[1],C=E[2]);
"undefined"!==typeof L&&null!==L&&(D=parseInt(D,10)+1);
"undefined"!==typeof I&&null!==I&&(z=parseInt(z,10)+1);
"undefined"!==typeof J&&null!==J&&(C=!0);
L=D+":"+z+":"+C;
window.dlog(G+"\x3d"+L+"; expires\x3d"+H+"; path\x3d/");
document.cookie=G+"\x3d"+L+"; expires\x3d"+H+"; path\x3d/"
};
w.prototype.readCookie=function(z){var C=am.util.Cookie.get(this.name).split(":");
if(void 0!==C[z]){return C[z]
}};
w.prototype.onTrigger=function(){if(document.querySelectorAll(".ei-trigger").length){var z;
this.setCookie(null,null,!0);
"undefined"!==typeof mboxTrack&&mboxTrack("IG_onClick","ei\x3dirp");
if(parent.document){var C=parent.document.getElementById("EI-dismiss");
C&&C.parentNode.removeChild(C)
}C=document.querySelector(".ei-popup .cta a");
C.setAttribute("target","_parent");
C.onclick=function(D){D.preventDefault();
z=D.target.getAttribute("href");
mboxTrack("IG_onClick","ei\x3d"+z);
window.setTimeout(function(){window.top.location=z
},500)
}
}};
am.util.ExitIntent=new w;
return am.util.ExitIntent
})();
var ak=[{type:"hidden",name:"sourceType",label:"sourceType",description:""},{type:"hidden",name:"locale",label:"locale",description:""},{type:"hidden",name:"managingOffice",label:"managingOffice",description:""},{type:"hidden",name:"siteId",label:"siteId",description:""},{type:"hidden",name:"courseSelected",label:"courseSelected",description:""},{type:"hidden",name:"campaignId",label:"campaignId",description:""},{type:"hidden",name:"returnUrl",label:"returnUrl",description:""}],K=[{type:"paragraph",label:"paragraph"},{type:"select",name:"campaignId",label:"campaignId"},{type:"select",name:"title",label:window.i18n["forms.title"],values:[{label:window.i18n["forms.title"],value:"",selected:!0},{label:window.i18n["forms.mr"],value:window.i18n["forms.mr"]},{label:window.i18n["forms.mrs"],value:window.i18n["forms.mrs"]},{label:window.i18n["forms.ms"],value:window.i18n["forms.ms"]},{label:window.i18n["forms.miss"],value:window.i18n["forms.miss"]},{label:window.i18n["forms.dr"],value:window.i18n["forms.dr"]},{label:window.i18n["forms.prof"],value:window.i18n["forms.prof"]}]},{type:"text",name:"forename",label:window.i18n["forms.firstname"]},{type:"text",name:"surname",label:window.i18n["forms.lastname"]},{type:"text",name:"addressLine1",label:window.i18n["forms.addressLine1"]},{type:"text",name:"addressLine2",label:window.i18n["forms.addressLine2"]},{type:"text",name:"town",label:window.i18n["forms.town"]},{type:"select",name:"countryOfResidence",subtype:"countryList",label:window.i18n["forms.country"]},{type:"text",name:"postCode",label:window.i18n["forms.postcode"]},{type:"email",name:"email",label:window.i18n["forms.email"]},{type:"text",name:"telephoneNumber",label:window.i18n["forms.phone"]},{type:"paragraph",label:window.i18n["forms.countrycode"]},{type:"date",name:"dateOfBirth",label:window.i18n["forms.dob"]},{type:"checkbox",name:"marketingEmailOptOut",label:window.i18n["forms.sendinfo"]}].concat(ak,[{type:"button",label:"button",style:"primary"},{type:"paragraph",label:"paragraph"}]),ac=[{type:"paragraph",label:"paragraph"},{type:"select",name:"campaignId",label:"campaignId"},{type:"text",name:"userName",label:"userName"},{type:"text",name:"refereeName",label:"refereeName"},{type:"text",name:"refereeSurname",label:"refereeSurname"},{type:"email",name:"refereeEmailId",label:"refereeEmailId"},{type:"text",name:"forename",label:"forename"},{type:"text",name:"surname",label:"surname"},{type:"email",name:"email",label:"email"},{type:"textarea",name:"messageToFriend",label:"messageToFriend"},{type:"checkbox",name:"tandc",label:"tandc"}].concat(ak,[{type:"button",label:"button",style:"primary"},{type:"paragraph",label:"paragraph"}]),an=[{type:"paragraph",label:"paragraph"},{type:"radio-group",name:"existing",label:"Existing client",values:[{label:window.i18n["forms.yes"],value:"yes"},{label:window.i18n["forms.no"],value:"no"}]},{type:"select",name:"Campaign_ID",label:"Campaign_ID"},{type:"select",name:"title",label:window.i18n["forms.title"],values:[{label:window.i18n["forms.title"],value:"",selected:!0},{label:window.i18n["forms.mr"],value:window.i18n["forms.mr"]},{label:window.i18n["forms.mrs"],value:window.i18n["forms.mrs"]},{label:window.i18n["forms.ms"],value:window.i18n["forms.ms"]},{label:window.i18n["forms.miss"],value:window.i18n["forms.miss"]},{label:window.i18n["forms.dr"],value:window.i18n["forms.dr"]},{label:window.i18n["forms.prof"],value:window.i18n["forms.prof"]}]},{type:"text",name:"first_name",label:window.i18n["forms.firstname"]},{type:"text",name:"last_name",label:window.i18n["forms.lastname"]},{type:"text",name:"forename_other",label:window.i18n["forms.preferredname"]},{type:"text",name:"00N20000001Jezl",label:"accountNumber"},{type:"text",name:"street",label:window.i18n["forms.address"]},{type:"text",name:"city",label:window.i18n["forms.city"]},{type:"text",name:"state",label:window.i18n["forms.state"]},{type:"text",name:"zip",label:window.i18n["forms.postcode"]},{type:"select",name:"country",subtype:"countryList",label:window.i18n["forms.country"]},{type:"email",name:"email",label:window.i18n["forms.email"]},{type:"text",name:"phone",label:window.i18n["forms.phone"]},{type:"paragraph",label:window.i18n["forms.countrycode"]},{type:"checkbox",name:"00N20000001KpGI",label:window.i18n["forms.sendinfo"]}].concat([{type:"hidden",name:"retURL",label:"retURL",description:""},{type:"hidden",name:"lead_source",label:"lead_source",description:""},{type:"hidden",name:"00N20000001JZjs",label:"Locale",description:""},{type:"hidden",name:"00N20000001JZji",label:"Office code",description:""},{type:"hidden",name:"oid",label:"Org id",description:""},{type:"hidden",name:"00N20000001JZjn",label:"siteId",description:""}],[{type:"button",label:"button",style:"primary"},{type:"paragraph",label:"paragraph"}]),af=[{type:"paragraph",label:"paragraph"},{type:"text",name:"first_name",label:window.i18n["forms.firstname"]},{type:"text",name:"00N20000003Zdhg",label:"Surname"},{type:"email",name:"email",label:window.i18n["forms.email"]},{type:"text",name:"phone",label:window.i18n["forms.phone"]},{type:"paragraph",label:window.i18n["forms.countrycode"]}].concat([{type:"hidden",name:"status",label:"status",value:"New",description:""},{type:"hidden",name:"subject",label:"subject",description:""},{type:"hidden",name:"orgid",label:"orgid",value:"00D200000006kCZ",description:""},{type:"hidden",name:"recordType",label:"recordType",description:""},{type:"hidden",name:"description",label:"description",description:""}],[{type:"button",label:"button",style:"primary"},{type:"paragraph",label:"paragraph"}]),ad=[{type:"paragraph",label:"paragraph"},{type:"text",name:"name",label:window.i18n["forms.name"]},{type:"text",name:"account_number",label:window.i18n["forms.account"]},{type:"email",name:"email_address",label:window.i18n["forms.email"]},{type:"text",name:"telephone",label:window.i18n["forms.phone"]},{type:"paragraph",label:window.i18n["forms.countrycode"]},{type:"checkbox",name:"confirm_read",label:window.i18n["forms.terms"]}].concat([{type:"hidden",name:"retURL",label:"retURL",description:""},{type:"hidden",name:"successUrl",label:"successUrl",description:""},{type:"hidden",name:"failureUrl",label:"failureUrl",description:""}],[{type:"button",label:"button",style:"primary"},{type:"paragraph",label:"paragraph"}]);
ak=[{type:"paragraph",label:"paragraph"},{type:"text",name:"username",label:window.i18n["forms.username"]||"Username"},{type:"text",name:"password",subtype:"password",label:window.i18n["forms.password"]||"Password"},{type:"header",label:"Header"},{type:"text",name:"forename",placeholder:window.i18n["forms.forename"]||"Forename",label:window.i18n["forms.name"]||"Name"},{type:"text",name:"surname",placeholder:window.i18n["forms.surname"]||"Surname",label:""},{type:"select",name:"country",subtype:"countryList",label:window.i18n["forms.country.residense"]||"Country of Residence",values:[]},{type:"text",name:"mainContactNumber",label:window.i18n["forms.contact.number"]||"Main Contact Number"},{type:"email",name:"email",label:window.i18n["forms.email"]||"Email Address"},{type:"paragraph",label:"paragraph"}];
var a=[{type:"hidden",name:"locale",label:"Locale",value:am.util.Page.locale()},{type:"hidden",name:"countryOfApplication",label:"Country of application",value:am.util.jspVars.get("websiteCountry")},{type:"hidden",name:"passwordEncrypted",label:"Password encrypted",value:"false"},{type:"hidden",name:"qpid",label:"QPID",value:am.util.Cookie.get("qpid")},{type:"hidden",name:"appName",label:"appName"}],ag=ak.concat(a,[{type:"button",label:"button",style:"primary"}]);
(function(){var q=function(){this.elem="";
this.CONSTANTS={selectors:{formEditor:"#form-editor",saveBtn:".form-builder-save"}}
};
q.prototype.init=function(r){var w=this;
this.elem=jq(r.container.dom).find(".form-structure");
window.CQ.WCM.isEditMode()&&!jq().formBuilder?this.loadLibs().done(function(){w.showEditor(w.elem.val())
}):0===jq(this.CONSTANTS.selectors.formEditor).length&&this.showEditor(this.elem.val())
};
q.prototype.loadSortable=function(){return am.util.getCachedScript("//a.c-dn.net/b/3Bv9bx.js#jquery-ui.min.js")
};
q.prototype.loadBuilderLib=function(){return am.util.getCachedScript("//a.c-dn.net/b/1g3qDG.js#form-builder.js")
};
q.prototype.loadLibs=function(){return this.loadSortable().then(this.loadBuilderLib)
};
q.prototype.showEditor=function(r){r=jq("\x3cdiv\x3e",{id:"form-editor"}).appendTo("body").formBuilder({formData:r,inputSets:[{label:"Lead Capture - Prospects",showHeader:!0,fields:K},{label:"Lead Capture - Refer a Friend",showHeader:!0,fields:ac},{label:"Web To Lead",showHeader:!0,fields:an},{label:"Web To case",showHeader:!0,fields:af},{label:"Prospects",showHeader:!0,fields:ad},{label:"Demo Account",showHeader:!0,fields:ag}]}).data("formBuilder");
this.setBinds(r)
};
q.prototype.setBinds=function(r){var w=this;
jq(this.CONSTANTS.selectors.saveBtn).click(function(){w.saveData(r.formData)
})
};
q.prototype.saveData=function(r){this.elem.val(JSON.stringify(JSON.parse(r)));
this.closeEditor();
console.log("Form data : ",r)
};
q.prototype.closeEditor=function(){jq(this.CONSTANTS.selectors.formEditor).remove()
};
am.util.FormBuilder=new q;
return q
})();
var m=function(q){q=q||Date.now();
var r=new Date(q);
isNaN(r.getUTCDate())&&(r=new Date(Date.now()));
var C=function(D){switch(D){case 0:return window.i18n["clientlibs.dates.january"];
case 1:return window.i18n["clientlibs.dates.february"];
case 2:return window.i18n["clientlibs.dates.march"];
case 3:return window.i18n["clientlibs.dates.april"];
case 4:return window.i18n["clientlibs.dates.may"];
case 5:return window.i18n["clientlibs.dates.june"];
case 6:return window.i18n["clientlibs.dates.july"];
case 7:return window.i18n["clientlibs.dates.august"];
case 8:return window.i18n["clientlibs.dates.september"];
case 9:return window.i18n["clientlibs.dates.october"];
case 10:return window.i18n["clientlibs.dates.november"];
case 11:return window.i18n["clientlibs.dates.december"]
}},w=function(D){switch(D){case 1:return window.i18n["clientlibs.dates.monday"];
case 2:return window.i18n["clientlibs.dates.tuesday"];
case 3:return window.i18n["clientlibs.dates.wednesday"];
case 4:return window.i18n["clientlibs.dates.thursday"];
case 5:return window.i18n["clientlibs.dates.friday"];
case 6:return window.i18n["clientlibs.dates.saturday"];
case 7:return window.i18n["clientlibs.dates.sunday"]
}},z=function(D){return 1===D.toString().length?"0"+D:D
};
return{date:r,getNamedMonth:C,getNamedDay:w,format:function(D){switch(D){case"IGNA":D=w(r.getDay());
var E=C(r.getMonth());
D=[D,z(r.getDate()),E,r.getFullYear(),r.toTimeString().substr(0,5)].join(" ");
break;
case"LL":E=C(r.getMonth());
D=E+" "+z(r.getDate())+", "+r.getFullYear();
break;
default:D=z(r.getDate())+"/"+z(r.getMonth()+1)+"/"+r.getFullYear()
}return D
}}
};
am.util.FullDates=m;
(function(){var q=function(){this.localeReplace()
};
q.prototype.localeReplace=function(){var r=document.querySelector(".footer-international.flag"),w=am.util.Cookie.get("countrycode");
r&&r.classList.contains("flag-uk")&&"IE"===w&&(r.classList.remove("flag-uk"),r.classList.add("flag-ie"),document.querySelector(".footer-social .facebook a").setAttribute("href","https://www.facebook.com/IGIreland"),document.querySelector(".footer-social .twitter a").setAttribute("href","https://twitter.com/IGIreland"),document.querySelector(".footer-social .googleplus a").setAttribute("href","https://plus.google.com/+IGIrelandDublin/post"))
};
am.util.LocaleReplace=new q;
return q
})();
(function(){var q={EMAIL_MKTWEB_MKTMOBILE:{required:[["pid","c"],["chid","qpid"]],extras:"qpid chid af_site_id af_c_id af_adset af_adset_id af_ad af_ad_id af_click_lookback is_retargeting android_id advertising_id idfa af_sub".split(" "),duration:30,removePrevious:!0},CELLXPERT:{required:[["cx_pg","cx_aid","cx_us","cx_cid"]],extras:[],duration:30,removePrevious:!0},ORGANIC:{required:[],extras:[],duration:30,removePrevious:!0}},r=function(z){this.key=z;
this.dateCreated=Date.now();
this.params={}
};
r.prototype.add=function(z,C){this.params[z]=C
};
var w=function(){};
w.prototype.init=function(){"true"!==am.util.jspVars.get("appsflyer.linkreplace")&&this.detectAquisition().cleanPreviousValuesIfRequired().storeNewValues().updateClientID().transformLinks()
};
w.prototype.detectAquisition=function(){for(var L=Object.keys(q),I=0;
I<L.length;
I+=1){var J=L[I],G=q[J].required;
if(G.length){for(var E=0;
E<G.length;
E+=1){for(var D=G[E],H=!0,z=new r(J),C=0;
C<D.length;
C+=1){var M=D[C],N=window.PS.util.Page.getQuerystring(M);
if(""===N){H=!1;
break
}"CELLXPERT"!==J&&z.add(M,N)
}if(H){return this.trigger=z,this
}}}}this.trigger=new r("ORGANIC");
return this
};
w.prototype.cleanPreviousValuesIfRequired=function(){var z=window.PS.storage.LocalQueue.retrieveLast("IG-MarketingAquisition");
""!==z&&("ORGANIC"!==this.trigger.key||Date.now()-z.dateCreated>86400000*q[this.trigger.key].duration)&&window.PS.storage.LocalQueue.remove("IG-MarketingAquisition");
return this
};
w.prototype.addDefaultValuesToTriggers=function(){q.EMAIL_MKTWEB_MKTMOBILE.defaults={pid:"IGWebSite",af_sub3:am.util.jspVars.get("siteID"),af_sub4:window.PS.SiteCatalyst.utils.getSiteCatalystId(),af_sub5:"IGWebSite",trackingId:window.PS.util.Cookie.get("client_id"),af_dp:window.PS.util.Page.getQuerystring("af_dp"),af_web_dp:window.PS.util.Page.getQuerystring("af_web_dp")};
q.CELLXPERT.defaults={pid:"cellxpert",c:window.PS.util.Page.getQuerystring("cx_pg"),af_siteId:window.PS.util.Page.getQuerystring("cx_aid"),af_sub1:window.PS.util.Page.getQuerystring("cx_us"),af_sub2:window.PS.util.Page.getQuerystring("cx_cid"),af_sub3:am.util.jspVars.get("siteID"),af_sub4:window.PS.SiteCatalyst.utils.getSiteCatalystId(),af_sub5:"IGWebSite",trackingId:window.PS.util.Cookie.get("client_id"),af_dp:window.PS.util.Page.getQuerystring("af_dp"),af_web_dp:window.PS.util.Page.getQuerystring("af_web_dp")};
q.ORGANIC.defaults={pid:"IGWebSite",c:"content",af_sub3:am.util.jspVars.get("siteID"),af_sub4:window.PS.SiteCatalyst.utils.getSiteCatalystId(),af_sub5:"IGWebSite",trackingId:window.PS.util.Cookie.get("client_id"),af_dp:window.PS.util.Page.getQuerystring("af_dp"),af_web_dp:window.PS.util.Page.getQuerystring("af_web_dp")};
return this
};
w.prototype.storeNewValues=function(){if(""===window.PS.storage.LocalQueue.retrieveLast("IG-MarketingAquisition")){for(var D=q[this.trigger.key].extras,H=0;
H<D.length;
H+=1){var G=D[H],E=window.PS.util.Page.getQuerystring(G);
""!==E&&(this.trigger.params[G]=E)
}this.addDefaultValuesToTriggers();
D=q[this.trigger.key].defaults;
H=Object.keys(D);
for(G=0;
G<H.length;
G+=1){E=H[G];
var C=D[E],z=!1;
switch(E){case"pid":"EMAIL_MKTWEB_MKTMOBILE"===this.trigger.key&&this.trigger.params&&(this.trigger.params.c||(this.trigger.params.c="chid_"+window.PS.util.Page.getQuerystring("chid")+"-qpid_"+window.PS.util.Page.getQuerystring("qpid")),this.trigger.params.pid&&(z=!0));
break;
case"af_dp":""===C&&(C="igapp%3A%2F%2F");
break;
case"af_web_dp":""===C&&(C=window.location.pathname.substring(1).split("/")[0]||"uk",C=window.location.origin+"/"+C+"/login")
}z||(null===C&&(C=""),this.trigger.params[E]=C)
}window.PS.storage.LocalQueue.store("IG-MarketingAquisition",this.trigger,!1)
}return this
};
w.prototype.updateClientID=function(){var z=window.PS.storage.LocalQueue.retrieveLast("IG-MarketingAquisition");
if(""!==z&&z.params&&(null===z.params.trackingId||""===z.params.trackingId)){var C=window.PS.util.Cookie.get("client_id");
C&&(z.params.trackingId=C,window.PS.storage.LocalQueue.store("IG-MarketingAquisition",z,!1))
}return this
};
w.prototype.transformLinks=function(){var z=window.PS.storage.LocalQueue.retrieveLast("IG-MarketingAquisition");
""===z&&(z=new r("ORGANIC"));
document.querySelectorAll('a[href*\x3d"app.appsflyer.com/"],a[href*\x3d"ig.onelink.me/"]').forEach(function(D){for(var C=D.href.split("?")[0]+"?",G=Object.keys(z.params),H=0;
H<G.length;
H+=1){var I=G[H],E=z.params[I];
0<H&&(C+="\x26");
C+=I+"\x3d"+E
}D.setAttribute("href",C)
});
return this
};
window.PS.util.MarketingAquisition=new w;
return w
})();
(function(){var q=function(r){window.optimizely=window.optimizely||[];
window.optimizely.push({type:"event",eventName:r})
};
return am.util.optimizelyCustomEvent=q
})();
(function(){var q=function(){this.init()
};
q.prototype.init=function(){this.mobileMenu();
var r=jq("#bg-video"),w=r.get(0);
if(window.matchMedia("screen and (min-width: 1200px)").matches&&w){if(w.load(),w.play(),window.dlog("HTML5 Video loaded now playing"),"boolean"===typeof w.loop){w.loop=!0
}else{w.on("ended",function(z){z.target.currentTime=0;
z.target.play();
window.dlog("HTML5 Video loaded now playing, loop not supported")
},!1)
}}else{r.remove()
}jq("body").addClass("loaded")
};
q.prototype.mobileMenu=function(){var r=jq("#campaign-menu-mobile");
if(r.length){var w=jq(".campaign-header-parsys");
r.off("click.mobileMenu").on("click.mobileMenu",function(z){jq(z.target).toggleClass("open");
w.toggleClass("open")
})
}};
return am.util.promoCampaign=q
})();
(function(){var q=function(){this.responsiveTable=""
};
q.prototype.init=function(){this.responsiveTable=jq(".responsive-table");
0<this.responsiveTable.length&&this.makeResponsive()
};
q.prototype.makeResponsive=function(){this.responsiveTable.each(function(r,w){jq(w).parents(".grid__col").addClass("responsive-table-container")
})
};
window.PS.util.ResponsiveTable=new q;
return q
})();
var b=function(){var q=function(){this.selectboxes=document.querySelectorAll(".selectbox");
0<this.selectboxes.length&&this.buildSelectbox()
};
q.prototype.buildSelectbox=function(){var r=this;
this.selectboxes.forEach(function(G){var w=G.children.length;
if(0<w){if(G.parentNode.classList.contains("selectbox__wrapper")){var D=G.parentNode;
var E=D.querySelector(".selectbox__styled");
var C=D.querySelector(".selectbox__options");
E.textContent="";
C.innerHTML=""
}else{D=document.createElement("div"),E=document.createElement("div"),C=document.createElement("ul"),D.classList.add("selectbox__wrapper"),E.classList.add("selectbox__styled"),C.classList.add("selectbox__options"),G.classList.add("selectbox--hidden"),r.wrap(G,D),D.appendChild(E),D.appendChild(C)
}E.textContent=G.children[0].textContent;
for(D=0;
D<w;
D+=1){var z=document.createElement("li");
z.classList.add("selectbox__option");
z.textContent=G.children[D].textContent;
z.setAttribute("rel",G.children[D].value||"");
C.appendChild(z);
G.children[D].selected&&(E.textContent=G.children[D].textContent,G.closest(".header__international")&&z.classList.add("lang-switcher--active"));
z.addEventListener("click",r.handleOptionsClick.bind(r),!1)
}E.addEventListener("click",r.handleSelectboxClick,!1);
r.handleSelectboxesHide()
}});
return this
};
q.prototype.handleSelectboxClick=function(r){r.stopPropagation();
r.target.classList.toggle("selectbox--active")
};
q.prototype.handleOptionsClick=function(r){r.stopPropagation();
var w=document.querySelectorAll(".selectbox--active")[0];
w&&(w.textContent=r.target.textContent,w.classList.remove("selectbox--active"),w.previousSibling.value=r.target.getAttribute("rel"),this.triggerSelectboxChangeEvent(w.previousSibling))
};
q.prototype.handleSelectboxesHide=function(){document.addEventListener("click",function(){var r=document.querySelectorAll(".selectbox--active")[0];
r&&r.classList.remove("selectbox--active")
},!1)
};
q.prototype.wrap=function(r,w){r.parentNode.insertBefore(w,r);
w.appendChild(r)
};
q.prototype.triggerSelectboxChangeEvent=function(r){var w=document.createEvent("HTMLEvents");
w.initEvent("change",!1,!0);
r.dispatchEvent(w)
};
am.util.SelectBox=new q;
return q
}(),l=function(q,r){var z=document.createElement("script"),w=document.getElementsByTagName("head")[0];
z.src=q;
z.type="text/javascript";
z.onload=z.onreadystatechange=function(){r();
z.onload=z.onreadystatechange=null;
w.removeChild(z)
};
w.appendChild(z)
};
(function(){var q=function(){};
q.prototype.init=function(){this.skypeLinks()
};
q.prototype.skype_contact=function(r){window.Skype.tryAnalyzeSkypeUri("call","0");
window.Skype.trySkypeUri_Generic(r);
window.dlog("SKYPE: Skype Name: "+r);
return !1
};
q.prototype.bindButtonClick=function(r){r=r.target.getAttribute("href");
this.skype_contact(r);
window.dlog("SKYPE: Skype Button {"+r+"} Clicked, attempting to call {"+r+"} ")
};
q.prototype.addBindings=function(r){var w=this;
r.forEach(function(z){z.removeEventListener("click",w.bindButtonClick.bind(w),!0);
z.addEventListener("click",w.bindButtonClick.bind(w),!0)
})
};
q.prototype.initSkype=function(){var w=this,z=document.querySelectorAll('a[href^\x3d"_skype"]'),r=z.length;
0<r&&(window.Skype?this.addBindings(z):l("https://secure.skypeassets.com/i/scom/js/skype-uri.js",function(){w.addBindings(z)
}),window.dlog("SKYPE: Total of {"+r+"} Skype Buttons"))
};
q.prototype.skypeLinks=function(){am.util.jspVars.get("skypeLinksEnable")&&!am.core.CQMode.inEdit?(window.dlog("SKYPE: Skype Links Enabled"),am.util.SkypeLinks.initSkype()):window.dlog("SKYPE: Skype Links Disabled")
};
am.util.SkypeLinks=new q;
return q
})();
ak=function(){var q=function(){this.timestampElements=document.querySelectorAll("[data-timestamp]")
};
q.prototype.init=function(){this.timestampElements&&this.replaceDates()
};
q.prototype.replaceDates=function(){this.timestampElements.forEach(function(r){var w=r.getAttribute("data-timestamp");
w&&(w="string"===typeof w?Date.parse(w):"number"===typeof w?w:Date.now(),r.innerHTML=m(w).format("IGNA"))
})
};
am.util.TimestampReplacer=new q;
return am.util.TimestampReplacer
}();
am.util.TimestampReplacer=ak;
(function(){var q=function(){};
q.prototype.init=function(){var r=jq("[class*\x3d -tg-trigger]");
0<r.length&&this.toggleContent(r)
};
q.prototype.toggleContent=function(r){r.on("click.toggle",function(w){w.preventDefault();
w=Array.prototype.slice.call(this.classList).find(function(z){return z.includes("-tg-trigger")
}).split("-tg-trigger")[0];
w=jq("."+w+"-tg-target");
jq(this).toggleClass("tg-active");
w.toggleClass("tg-active")
})
};
am.util.ToggleContent=new q;
return q
})();
(function(){var q=function(){};
q.prototype.init=function(){this.$accordions=jq(".js_accordion");
this.$triggers=jq(".js_accordion-clickable");
this.collapseRequiredAccordions().bindTriggers()
};
q.prototype.collapseRequiredAccordions=function(r,w){r=void 0===r?window.matchMedia("only screen and (max-width:"+window.matchMedia.IGMeasures.max_width_responsive_mobile+")").matches:r;
w=void 0===w?window.matchMedia("only screen and (max-width:"+window.matchMedia.IGMeasures.max_width_tablet_portrait+")").matches:w;
am.core.CQMode.inAuthor||this.$accordions.each(function(z,D){z=jq(D);
D="open"!==z.data("desktop");
var C="open"!==z.data("mobile"),E="open"!==z.data("tablet");
(r&&C||w&&E||!w&&!r&&D)&&z.removeClass("accordion-expanded")
});
return this
};
q.prototype.bindTriggers=function(){var r=this;
this.$triggers.off("click.accordion").on("click.accordion",function(w){r.activateAccordion(w);
document.activeElement.blur()
});
this.$triggers.off("keyup.accordion").on("keyup.accordion",function(w){w.keyCode===am.events.KEYS.ENTER&&r.activateAccordion(w)
});
return this
};
q.prototype.activateAccordion=function(w){var z=jq(w.target).parents(".js_accordion"),r=z.find(".js_accordion_content");
w.preventDefault();
z.hasClass("accordion-expanded")?(z.removeClass("accordion-expanded"),r.height(0)):(z.addClass("accordion-expanded"),r.height("auto"));
return this
};
am.util.Accordion=new q;
return am.util.Accordion
})();
(function(){var q=function(){this.query=""
};
q.prototype.init=function(){var r=am.util.Page.getQuerystring("q");
r&&this.getSearchResults(r)
};
q.prototype.getSearchResults=function(r){this.query=r;
jq.get("https://community.ig.com/restapi/vc/search/messages?restapi.response_format\x3djson\x26restapi.response_style\x3dview\x26restapi.format_detail\x3dfull_list_element\x26q\x3d"+r,this.showResults.bind(this))
};
q.prototype.showResults=function(w){var z=this;
w=w.response.messages.message||[];
var r=jq(".community-search__searchresults");
r.find(".results").remove();
0===w.length?(w=r.find(".communityNoResultsMessage").val(),r.append(this.createSearchResult(w))):w.forEach(function(C){C=z.getMessage(C);
r.append(z.createSearchResult(C.description,C.title,C.link))
})
};
q.prototype.createSearchResult=function(w,C,r){var z=jq('\x3cdiv class\x3d"results"\x3e\x3c/div\x3e');
C&&r&&z.append(jq('\x3cdiv class\x3d"results__title"\x3e\x3ca href\x3d"'+r+'"\x3e'+C+"\x3c/a\x3e\x3c/div\x3e"));
z.append(jq('\x3cdiv class\x3d"results__description"\x3e\x3cp\x3e'+w+"\x3c/p\x3e\x3c/div\x3e"));
return z
};
q.prototype.getMessage=function(r){var w={};
w.title=this.highlight(0===r.subject.$.indexOf("Re:")?r.subject.$.substring(3).trim():r.subject.$);
w.link=r.view_href;
w.description=this.highlight(this.stripHtml(r.body.$).trim().replace(/(\r\n|\n|\r)/gm,""));
return w
};
q.prototype.stripHtml=function(r){var w=document.createElement("div");
w.innerHTML=r;
return w.textContent||w.innerText
};
q.prototype.getQuery=function(){return this.query
};
q.prototype.highlight=function(r){var w=this.getQuery();
return r.replace(new RegExp("\\b"+w+"\\b","ig"),"\x3cb\x3e"+w+"\x3c/b\x3e")
};
window.PS.util.CommunitySearch=new q;
return q
})();
var al=function(q){this.utils=q.utils;
this.config=q.config;
this.series=q.series;
this.model=q.model;
this.container=q.container;
this.data=q.data;
this.margin={top:30,right:60,bottom:30,left:30};
this.parseDate=d3.time.format("%Y%m%d");
this.width=parseInt(d3.select(this.container).style("width"),10)-this.margin.left-this.margin.right;
this.height=348-this.margin.top-this.margin.bottom;
this.duration=300;
this.fontSize=14;
this.svg=d3.select(this.container).append("svg").attr("width",this.width+this.margin.left+this.margin.right).attr("height",this.height+this.margin.top+this.margin.bottom).attr("class","position").append("g").attr("transform","translate("+this.margin.left+","+this.margin.top+")");
this.init()
};
al.prototype.init=function(){this.createScales().createAxes().createAreaRange().createLine().createPlotlines().createTooltip()
};
al.prototype.getMaxValue=function(q){return Math.round(d3.max(q,function(r){return d3.max(r.data,function(w){return w.upper
})
}))
};
al.prototype.createScales=function(){this.maxValue=this.getMaxValue(this.series);
this.yTicks=this.getSmartTicks(Math.max(this.maxValue,this.model.targetNotional));
this.x=d3.time.scale().range([0,this.width]);
this.y=d3.scale.linear().range([this.height,0]);
this.x.domain(d3.extent(this.series[0].data,function(q){return q.date
}));
this.y.domain([0,this.yTicks.endPoint]);
return this
};
al.prototype.getXAxis=function(){return d3.svg.axis().scale(this.x).orient("bottom").ticks(Math.min(10,window.innerWidth/100)).tickSize(-this.height)
};
al.prototype.getYAxis=function(){var q=this;
return d3.svg.axis().scale(this.y).orient("right").ticks(this.yTicks.count).tickFormat(function(r){1<=r/1000&&(r=q.utils.localiseCurrencyWithMetricPrefix(r/1000));
return r
}).tickSize(this.width)
};
al.prototype.customXAxis=function(q){var r=this.getXAxis();
q.call(r);
q.selectAll(".tick line").attr("y2",10);
q.selectAll(".tick text").attr("y",15)
};
al.prototype.customYAxis=function(q){var r=this.getYAxis();
q.call(r);
q.selectAll(".tick text").attr("x",this.width+15).attr("y",2)
};
al.prototype.createAxes=function(){this.svg.append("g").attr("class","axis axis-x").attr("transform","translate(0, "+this.height+")").call(this.customXAxis.bind(this));
this.svg.append("g").attr("class","axis axis-y").call(this.customYAxis.bind(this));
return this
};
al.prototype.getSmartTicks=function(q){var r=Math.pow(10,q.toString().length-1);
2>q/r?r/=5:5>q/r&&(r/=2);
q=Math.ceil((q+1)/r);
return{endPoint:q*r,count:Math.min(7,q)}
};
al.prototype.createAreaRange=function(){var q=this.getAreaRange(this),r=this.series.filter(function(w){return"arearange"===w.type
});
r=this.appendWrapper("areaRangeWrapper",r);
r=this.appendShapes(r,"areaRange","fill");
this.animateChart(r,q);
return this
};
al.prototype.createLine=function(){var q=this.getLineItem(this),r=this.series.filter(function(w){return"line"===w.type
});
r=this.appendWrapper("lineWrapper",r);
r=this.appendShapes(r,"line","stroke");
this.animateChart(r,q);
return this
};
al.prototype.getAreaRange=function(q){return d3.svg.area().x(function(r){return q.x(r.date)
}).y0(function(r){return q.y(r.upper)
}).y1(function(r){return q.y(r.lower)
})
};
al.prototype.getLineItem=function(){var q=this;
return d3.svg.line().x(function(r){return q.x(r.date)
}).y(function(r){return q.y(r.value)
})
};
al.prototype.appendWrapper=function(q,r){return this.svg.selectAll("."+q).data(r).enter().append("g").attr("class",q)
};
al.prototype.appendShapes=function(q,r,w){return q.append("path").attr("class",r).style(w,function(z){return z.color
})
};
al.prototype.animateChart=function(q,r){function C(D){q.attr("d",function(E){return r(E.data.slice(0,D+1))
})
}var w=this.series[0].data.length,z=1;
d3.timer(function(){C(z);
if((z+=4)>=w-1){return C(w-1),!0
}},this.duration)
};
al.prototype.createPlotlines=function(){var q=this.getTargetDate(this.data.onTarget,this.data.suggestions.suggestedTargetDate,this.data.suggestions.timeframeIncrease,this.model.targetTimeframe),r=this.model.targetNotional,D=this.svg.append("g").attr("class","plotline-x"),w=this.svg.append("g").attr("class","plotline-y"),z=this.x(q),C=this.y(r);
this.appendPlotline(D,0,C,this.width,C);
this.appendPlotline(w,z,0,z,this.height);
this.appendPlotlineText(D,18,this.xTargetTextPos(C),this.xTargetText(r));
this.appendPlotlineText(w,-10,this.yTargetTextPos(z),this.yTargetText(q),"rotate");
this.showHidePlotline(w,z);
return this
};
al.prototype.getTargetDate=function(q,r,C,w){var z=new Date;
return q&&null!==r?r:z.setFullYear(z.getFullYear()+C+parseInt(w,10))
};
al.prototype.appendPlotline=function(q,r,C,w,z){q.append("line").attr("x1",r).attr("y1",C).attr("x2",w).attr("y2",z).style("stroke-dasharray","8, 3").style("stroke-width",1).style("stroke","#3987cc")
};
al.prototype.appendPlotlineText=function(q,r,C,w,z){q=q.append("text").attr("x",r).attr("y",C).style("fill","#3987cc").style("color","#3987cc").style("font-size",this.fontSize).style("text-shadow","1px 0 1px #ffffff").text(w);
z&&q.attr("transform","rotate(90)")
};
al.prototype.showHidePlotline=function(q,r){return r>this.width?q.style("display","none"):q.style("display","inline")
};
al.prototype.xTargetTextPos=function(q){return q<this.fontSize?q+this.fontSize+5:q-10
};
al.prototype.yTargetTextPos=function(q){return q+this.fontSize+5>=this.width?-q+this.fontSize+5:-q-10
};
al.prototype.xTargetText=function(q){return this.config.chartLabel.plotlineAmount+" "+this.utils.localiseCurrency(q)
};
al.prototype.yTargetText=function(q){return this.config.chartLabel.plotlineDate+" "+this.utils.date(q)
};
al.prototype.createTooltip=function(){var q=this.svg.append("g").attr("class","focus").style("display","none"),r=d3.select("#chart-container").append("div").attr("class","demo-creator-tooltip").style("display","none");
r={that:this,focus:q,tooltip:r};
q.append("line").classed("y",!0);
q.append("text").attr("x",9).attr("dy",".35em");
this.svg.append("rect").attr("class","overlay").attr("width",this.width).attr("height",this.height).style("fill","transparent").datum(r).on("mouseover",this.mouseover).on("mouseout",this.mouseout).on("mousemove",this.mousemove);
return this
};
al.prototype.update=function(H,I,G){this.series=H;
this.maxValue=this.getMaxValue(H);
this.yTicks=this.getSmartTicks(Math.max(this.maxValue,G.targetNotional));
this.x.domain(d3.extent(this.series[0].data,function(J){return J.date
}));
this.y.domain([0,this.yTicks.endPoint]);
H=this.getTargetDate(I.onTarget,I.suggestions.suggestedTargetDate,I.suggestions.timeframeIncrease,G.targetTimeframe);
I=this.model.targetNotional;
G=this.getAreaRange(this);
var C=this.getLineItem(this),D=this.series.filter(function(J){return"arearange"===J.type
}),E=this.series.filter(function(J){return"line"===J.type
}),w=this.svg.select(".plotline-x"),r=this.svg.select(".plotline-y"),q=this.x(H),z=this.y(I);
this.selectAxis(".axis-x",this.customXAxis.bind(this));
this.selectAxis(".axis-y",this.customYAxis.bind(this));
this.selectShapeWrappers(".areaRangeWrapper",D,".areaRange",G);
this.selectShapeWrappers(".lineWrapper",E,".line",C);
this.selectPlotline(w,0,z,this.width,z);
this.selectPlotline(r,q,0,q,this.height);
this.selectPlotlineText(w,18,this.xTargetTextPos(z),this.xTargetText(I));
this.selectPlotlineText(r,-10,this.yTargetTextPos(q),this.yTargetText(H),"rotate");
this.showHidePlotline(r,q);
return this
};
al.prototype.selectAxis=function(q,r){this.svg.select(q).transition().duration(this.duration).ease("linear").call(r)
};
al.prototype.selectShapeWrappers=function(q,r,z,w){this.svg.selectAll(q).data(r).select(z).transition().duration(this.duration).ease("linear").attr("d",function(C){return w(C.data)
})
};
al.prototype.selectPlotline=function(q,r,C,w,z){q.select("line").transition().duration(this.duration).ease("linear").attr("x1",r).attr("y1",C).attr("x2",w).attr("y2",z)
};
al.prototype.selectPlotlineText=function(q,r,C,w,z){q=q.select("text").transition().duration(this.duration).ease("linear").attr("x",r).attr("y",C).text(w);
z&&q.attr("transform","rotate(90)")
};
al.prototype.mousemove=function(J){var L=J.that,I=d3.bisector(function(M){return M.date
}).left,E=L.x.invert(d3.mouse(this)[0]),G=I(L.series[0].data,E,1);
I=L.series[0].data[G-1];
var H=L.series[0].data[G];
I=E-I.date>H.date-E?H:I;
var C=jq(L.container),z=C.offset(),w,D,q,r=[];
r.push('\x3cdiv style"font-size:18px;"\x3e'+L.utils.date(E)+'\x3chr style\x3d"margin: 10px 0 15px 0"\x3e\x3c/div\x3e');
jq.each(L.series,function(N,M){M.data[0].upper?M.name===L.config.chartLabel.good?r.push('\x3cdiv class\x3d"performance-tooltip"\x3e\x3cspan style\x3d"background-color: '+L.config.chartColours.good+'"\x3e\x3c/span\x3e\x3cdiv class\x3d"tooltip-text"\x3e'+M.name+"\x3cb\x3e"+L.utils.value(M.data[G].lower,!0)+" - "+L.utils.value(M.data[G].upper,!0)+"\x3c/b\x3e\x3c/div\x3e\x3c/div\x3e"):M.name===L.config.chartLabel.expected?r.push('\x3cdiv class\x3d"performance-tooltip"\x3e\x3cspan style\x3d"background-color: '+L.config.chartColours.expected+'"\x3e\x3c/span\x3e\x3cdiv class\x3d"tooltip-text"\x3e'+M.name+"\x3cb\x3e"+L.utils.value(M.data[G].lower,!0)+" - "+L.utils.value(M.data[G].upper,!0)+"\x3c/b\x3e\x3c/div\x3e"):r.push('\x3cdiv class\x3d"performance-tooltip"\x3e\x3cspan style\x3d"background-color: '+L.config.chartColours.poor+'"\x3e\x3c/span\x3e\x3cdiv class\x3d"tooltip-text"\x3e'+M.name+"\x3cb\x3e"+L.utils.value(M.data[G].lower,!0)+" - "+L.utils.value(M.data[G].upper,!0)+"\x3c/b\x3e\x3c/div\x3e"):M.name===L.config.chartLabel.worst?r.push('\x3cdiv class\x3d"performance-tooltip"\x3e\x3cspan style\x3d"background-color: '+L.config.chartColours.worst+'"\x3e\x3c/span\x3e\x3cdiv class\x3d"tooltip-text"\x3e'+M.name+"\x3cb\x3e "+L.utils.localiseCurrency(0)+" - "+L.utils.value(M.data[G].value,!0)+"\x3c/b\x3e\x3c/div\x3e"):M.name===L.config.chartLabel.exceptional?r.push('\x3cdiv class\x3d"performance-tooltip"\x3e\x3cspan style\x3d"background-color: '+L.config.chartColours.exceptional+'"\x3e\x3c/span\x3e\x3cdiv class\x3d"tooltip-text"\x3e'+M.name+"\x3cb\x3e "+L.config.chartLabel.exceptionalPrefix+" "+L.utils.value(M.data[G].value,!0)+"\x3c/b\x3e\x3c/div\x3e"):r.push('\x3cbr/\x3e\x3cdiv class\x3d"performance-tooltip"\x3e\x3cspan style\x3d"background-color: '+L.config.chartColours.contributions+'"\x3e\x3c/span\x3e\x3cdiv class\x3d"tooltip-text"\x3e'+M.name+"\x3cb\x3e"+L.utils.value(M.data[G].value,!0)+"\x3c/b\x3e\x3c/div\x3e")
});
J.focus.attr("transform","translate("+L.x(I.date)+", 0)");
J.focus.select("line.y").attr("x1",0).attr("x2",0).attr("y1",0).attr("y2",L.height);
J.tooltip.style("left",function(){D=parseInt(J.tooltip.style("width"));
C.width();
return 800>window.innerWidth?15:event.pageX-D-30<z.left+L.margin.left?event.pageX-z.left+30:event.pageX-z.left-D-30
}()+"px").style("top",function(){q=parseInt(J.tooltip.style("height"));
w=C.height();
return 800>window.innerWidth?15:event.pageY-q/2<z.top?L.margin.top:w-q-2*L.margin.bottom
}()+"px").html(r.join(""))
};
al.prototype.mouseover=function(q){q.that.mouseEvent(q,null,"inline",1)
};
al.prototype.mouseout=function(q){q.that.mouseEvent(q,"none","none",0)
};
al.prototype.mouseEvent=function(q,r,z,w){q.focus.style("display",r);
q.tooltip.style("opacity",w).style("display",z)
};
var F=function(q){this.currency=q.currency;
this.currencyPos=q.currencyPos;
this.showThousandPrefix=q.showThousandPrefix;
this.thousandPrefix=q.thousandPrefix;
this.fullDate=window.PS.util.FullDates()
};
F.prototype.date=function(q){var r=new Date(q);
q=r.getMonth();
r=r.getFullYear();
return this.fullDate.getNamedMonth(q)+" "+r
};
F.prototype.value=function(q,r){q=Math.round(q);
return r?this.localiseCurrency(q.toLocaleString()):q.toLocaleString()
};
F.prototype.localiseCurrency=function(q){return"left"===this.currencyPos?""+this.currency+q:""+q+this.currency
};
F.prototype.localiseCurrencyWithMetricPrefix=function(q){return this.showThousandPrefix?""+this.localiseCurrency(q)+this.thousandPrefix:this.localiseCurrency(q)
};
(function(){var at=jq(".demo-creator-hero"),au=jq(".demo-creator"),ar=jq(".currency-spinner",au),ap=jq(".deposit-spinner",au),aq=jq(".monthlyAmount-spinner",au),Y=jq(".targetAmount-spinner",au),aa=jq(".timeFrame-spinner",au),X=jq(".portfolioId",au),V=jq(".change-action",au),ao=jq("#targetDate",au),T=jq("#projectedValue",au),U=jq("#targetNotional",au),H=jq("#managementFees",au),M=jq("#managementFeesPerCent",au),q=jq("#totalExpenseRatio",au),Q=jq("#totalExpenseRatioPerCent",au),W=jq("#totalCostOfOwnership",au),G=jq("#totalCostOfOwnershipPerCent",au),J=jq(".portfolioForm").data("service"),L=jq(".wrapper",au).data(),R=window.innerWidth,S={modelPortfolioId:parseInt(X.data("default"),10),timeframe:parseInt(aa.val(),10),initialDeposit:parseInt(ap.val(),10),targetNotional:parseInt(Y.val(),10),targetTimeframe:parseInt(aa.val(),10),monthlyContributions:parseInt(aq.val(),10)},P=function(){var r=0;
return function(z,w){clearTimeout(r);
r=setTimeout(z,w)
}
}(),N=!1,O,I=function(){};
I.prototype.init=function(){0<au.length&&(this.loadJqueryUi(),this.loadD3Library(),this.getConfig(),this.createUtils())
};
I.prototype.loadJqueryUi=function(){var r=this;
return am.util.getCachedScript("//a.c-dn.net/b/0d4KY3.js#jquery-ui.min.js",{success:function(){r.loadJqueryUiTouch().done(function(){r.getData();
r.buildUiWidgets()
})
},error:function(){console.error("The script didn't load")
}})
};
I.prototype.loadJqueryUiTouch=function(){return am.util.getCachedScript("//a.c-dn.net/b/1ZOvst.js#jquery.ui.touch-punch.min.js")
};
I.prototype.loadD3Library=function(){return am.util.getCachedScript("//a.c-dn.net/b/23nowQ.js#d3.v3.min.js")
};
I.prototype.getConfig=function(){this.config={sliderLabel:{cautious:L.sliderLabelCautious,moderate:L.sliderLabelModerate,balanced:L.sliderLabelBalanced,growth:L.sliderLabelGrowth,aggressive:L.sliderLabelAggressive},chartLabel:{exceptional:L.seriesLabelExceptional,good:L.seriesLabelGood,expected:L.seriesLabelExpected,poor:L.seriesLabelPoor,worst:L.seriesLabelWorst,contributions:L.seriesLabelContributions,plotlineAmount:L.plotlineLabelAmount,plotlineDate:L.plotlineLabelDate,exceptionalPrefix:L.seriesTooltipExceptionalPrefix},chartColours:{exceptional:L.seriesColourExceptional,good:L.seriesColourGood,expected:L.seriesColourExpected,poor:L.seriesColourPoor,worst:L.seriesColourWorst,contributions:L.seriesColourContributions},metricSymbols:{showThousandPrefix:L.showThousandPrefix,thousandPrefix:L.thousandPrefix,currency:L.currencySymbol,currencyPos:L.currencySymbolPosition}}
};
I.prototype.createUtils=function(){this.utils=new F({currency:this.config.metricSymbols.currency,currencyPos:this.config.metricSymbols.currencyPos,showThousandPrefix:this.config.metricSymbols.showThousandPrefix,thousandPrefix:this.config.metricSymbols.thousandPrefix})
};
I.prototype.buildUiWidgets=function(){this.spinners();
this.sliders()
};
I.prototype.spinners=function(){var r=this;
ap.spinner({min:500,max:99999999,step:100,numberFormat:"C"});
aq.spinner({min:50,max:99999,step:10,numberFormat:"C"});
Y.spinner({min:0,max:9999999999,step:1000,numberFormat:"C"});
aa.spinner({min:2,max:50,step:1});
ar.each(function(z,w){jq(w).parent().addClass(r.config.metricSymbols.currencyPos);
"left"===r.config.metricSymbols.currencyPos?jq(w).before("\x3cspan class\x3d'currency-symbol'\x3e"+r.config.metricSymbols.currency+"\x3c/span\x3e"):jq(w).after("\x3cspan class\x3d'currency-symbol'\x3e"+r.config.metricSymbols.currency+"\x3c/span\x3e")
});
V.each(function(w,z){jq(z).on("keypress",r.isNumberKey);
jq(z).on("paste",function(C){C.preventDefault?C.preventDefault():C.returnValue=!1
});
jq(z).spinner({spin:function(){var C=this;
P(function(){r.spinnerEvent(jq(C),r)
},600)
},stop:function(){var C=this;
P(function(){r.spinnerEvent(jq(C),r)
},600)
}})
})
};
I.prototype.spinnerEvent=function(w,z){var r=w.data("model");
w=w.val();
S[r]=parseInt(w,10);
Object.keys(S).map(function(C){"timeframe"===C&&(S.targetTimeframe=S.timeframe);
isNaN(S.targetNotional)&&(S.targetNotional=0);
return !0
});
z.validateInputs(z)&&z.getData()
};
I.prototype.validateInputs=function(){return 500>ap.val()||99999999<ap.val()||50>aq.val()||999999<aq.val()||0>Y.val()||9999999999<Y.val()||2>aa.val()||50<aa.val()?!1:!0
};
I.prototype.isNumberKey=function(r,w){if(window.event){r=window.event.keyCode
}else{if(w){r=w.which
}else{if(r){r=r.charCode
}else{return !0
}}}w=String.fromCharCode(r);
return null===r||0===r||r===am.events.KEYS.BACKSPACE||r===am.events.KEYS.TAB||r===am.events.KEYS.ENTER||r===am.events.KEYS.ESCAPE||-1<"0123456789".indexOf(w)||"."===w?!0:!1
};
I.prototype.sliders=function(){var r=this,D=this,w=Object.keys(this.config.sliderLabel).map(function(E){return r.config.sliderLabel[E]
}),z=at.attr("style");
at.attr("style",z.replace("background-color: transparent;","")).addClass("demo-creator-loaded");
X.slider({min:1,max:5,value:S.modelPortfolioId,range:"min",step:0.01,slide:function(E,av){at.css("backgroundColor",D.getColor(av.value));
D.mobileRiskAppetiteLabels(".risk-appetite-label",jq(this),av.value)
},stop:function(av,E){S.modelPortfolioId=Math.round(E.value);
jq(this).slider("value",S.modelPortfolioId);
D.getData()
}});
for(z=0;
4>=z;
z+=1){var C=jq('\x3clabel class\x3d"risk-appetite-label"\x3e'+w[z]+"\x3c/label\x3e");
X.append(C);
this.positionRiskAppetiteLabels(z,C,4)
}this.mobileRiskAppetiteLabels(".risk-appetite-label",X,X.slider("option","value"));
jq(window).off("resize.labels").on("resize.labels",function(){jq(".risk-appetite-label").each(function(av,E){D.positionRiskAppetiteLabels(av,E,4)
});
r.mobileRiskAppetiteLabels(".risk-appetite-label",X,X.slider("option","value"))
})
};
I.prototype.mobileRiskAppetiteLabels=function(w,z,r){600>=R?z.find(w).eq(Math.round(r)-1).show().siblings(w).hide():z.find(w).show()
};
I.prototype.positionRiskAppetiteLabels=function(w,z,r){jq(z).css({left:w/r*100+"%",marginLeft:-jq(z).outerWidth()/2})
};
I.prototype.getData=function(){var r=this;
jq.ajax({method:"POST",url:""+J+jq.param(S),contentType:"application/json; charset\x3dutf-8",headers:{"x-device-user-agent":"vendor\x3dIG Group | applicationType\x3dig | platform\x3dInvestments | version\x3d1.0.0"}}).done(function(w){r.setOutputs(w)
}).fail(function(){console.error("Unable to load data")
})
};
I.prototype.getColor=function(r){var w=d3.scale.linear().domain([1,5]).range([215,-73]);
r=this.hslToRgb(0<w(r)?w(r):360+w(r),0.5,0.6);
return"rgb("+r[0]+", "+r[1]+", "+r[2]+")"
};
I.prototype.hslToRgb=function(w,D,r){if(void 0===w){return[0,0,0]
}D*=1-Math.abs(2*r-1);
w/=60;
var z=D*(1-Math.abs(w%2-1));
w=Math.floor(w);
switch(w){case 0:w=D;
var C=z;
z=0;
break;
case 1:w=z;
C=D;
z=0;
break;
case 2:w=0;
C=D;
break;
case 3:w=0;
C=z;
z=D;
break;
case 4:w=z;
C=0;
z=D;
break;
case 5:w=D;
C=0;
break;
default:z=C=w=0
}r-=D/2;
return[Math.round(255*(w+r)),Math.round(255*(C+r)),Math.round(255*(z+r))]
};
I.prototype.setOutputs=function(w){var C={series:this.getChartSeries(w.timeSeriesMap),container:"#chart-container",utils:this.utils,config:this.config,model:S,data:w},r=this.getTargetDate(w.onTarget,w.suggestions.suggestedTargetDate,w.suggestions.timeframeIncrease,S.targetTimeframe),z=w.suggestions.feeLevelAfterContribution+w.suggestions.ter;
ao.text(r);
T.text(this.utils.localiseCurrency(this.utils.value(S.targetNotional)));
U.text(this.utils.localiseCurrency(this.utils.value(w.suggestions.valueAtTargetDate)));
H.text(this.utils.localiseCurrency(parseFloat(w.suggestions.feeLevelAfterContribution/100*S.initialDeposit/52).toFixed(2)));
M.text(w.suggestions.feeLevelAfterContribution);
q.text(this.utils.localiseCurrency(parseFloat(w.suggestions.ter/100*S.initialDeposit/52).toFixed(2)));
Q.text(w.suggestions.ter);
W.text(this.utils.localiseCurrency(parseFloat(z/100*S.initialDeposit/52).toFixed(2)));
G.text(z.toFixed(2));
N?O.update(C.series,C.data,C.model):(O=new al(C),N=!0);
jq(window).off("resize.chart").on("resize.chart",function(){window.innerWidth!==R&&P(function(){jq(C.container).empty();
O=new al(C);
R=window.innerWidth
},600)
})
};
I.prototype.getTargetDate=function(w,D,r,z){var C=new Date;
return w&&null!==D?this.utils.date(D):this.utils.date(C.setFullYear(C.getFullYear()+r+parseInt(z,10)))
};
I.prototype.getChartSeries=function(ax){var av=ax.UPPER.data,aw=ax.UPPER_MID.data,C=ax.UPPER_MID.data,D=ax.LOWER_MID.data,E=ax.LOWER_MID.data,r=ax.LOWER.data,w=ax.LOWER.data,z=ax.CONTRIBUTIONS.data;
return[{name:this.config.chartLabel.exceptional,data:this.buildProjectionChartLineData(ax.UPPER.data),type:"line",color:this.config.chartColours.exceptional},{name:this.config.chartLabel.good,data:this.buildProjectionChartArea(av,aw),type:"arearange",color:this.config.chartColours.good},{name:this.config.chartLabel.expected,data:this.buildProjectionChartArea(C,D),type:"arearange",color:this.config.chartColours.expected},{name:this.config.chartLabel.poor,data:this.buildProjectionChartArea(E,r),type:"arearange",color:this.config.chartColours.poor},{name:this.config.chartLabel.worst,data:this.buildProjectionChartLineData(w),type:"line",color:this.config.chartColours.worst},{name:this.config.chartLabel.contributions,data:this.buildProjectionChartLineData(z),type:"line",color:this.config.chartColours.contributions}]
};
I.prototype.buildProjectionChartLineData=function(w){for(var z=[],r=0;
r<w.length;
r+=1){z.push({date:Number(1000*w[r].ts),value:w[r].value})
}return z
};
I.prototype.buildProjectionChartArea=function(w,D){for(var r=[],z=0;
z<w.length;
z+=1){var C=w[z];
r[z]={date:Number(1000*C.ts),upper:C.value,lower:D[z].value}
}return r
};
am.util.DemoCreator=new I;
return I
})();
var ab=function(){this.ua=window.navigator.userAgent
};
ab.prototype.isAndroid=function(){return !(this.isWindowsMobile()||!this.ua.match(/Android/i))
};
ab.prototype.isIOS=function(){return !(this.isWindowsMobile()||!this.isIPhone()&&!this.isIPad())
};
ab.prototype.isIPhone=function(){return !(this.isWindowsMobile()||!this.ua.match(/iPhone|iPod/i))
};
ab.prototype.isIPad=function(){return !!this.ua.match(/iPad/i)
};
ab.prototype.isWindowsMobile=function(){return !!this.ua.match(/IEMobile|Windows Phone/i)
};
ab.prototype.isAny=function(){return !!(this.isAndroid()||this.isIOS()||this.isWindowsMobile())
};
ab.prototype.type=function(){return this.isWindowsMobile()?"winphone":this.isAndroid()?"android":this.isIPhone()?"iphone":this.isIPad()?"ipad":"nonmobile"
};
(function(){var q=function(){this.smartPhone=new ab;
this.device()
};
q.prototype.device=function(){var w=this.smartPhone.type(),D=am.util.DeviceUtil.category(),r=document.querySelectorAll(".device-content"),C=document.getElementsByClassName("device-"+w)[0]||document.getElementsByClassName("device-default")[0];
w="mobile"===D;
D="tablet"===D;
for(var z=0;
z<r.length;
z+=1){window.PS.util.removeClass(r[z],"active")
}C&&window.PS.util.addClass(C,"active");
r=document.getElementsByClassName("device-ios");
this.smartPhone.isIOS()&&0<r.length&&window.PS.util.addClass(r[0],"active");
r=document.getElementsByClassName("device-mobile");
w&&0<r.length&&window.PS.util.addClass(r[0],"active");
w=document.getElementsByClassName("device-tablet");
D&&0<w.length&&window.PS.util.addClass(w[0],"active");
return this
};
window.PS.util.DeviceSpecific=new q;
return q
})();
var A=function(){this.countrySelectors=jq("form.form__validate .countryList");
0<this.countrySelectors.length&&this.getCountries()
};
A.prototype.getLocale=function(){var q=am.util.Page.locale();
switch(q){case"ar_AE":q="ar_AE";
break;
case"de_DE":case"de_AT":case"de_CH":case"de":q="de_DE";
break;
case"en_ZA":q="en_ZA";
break;
case"es_ES":case"es":q="es_ES";
break;
case"fr_LU":q="fr_LU";
break;
case"fr":case"fr_CH":case"fr_FR":q="fr_FR";
break;
case"it_IT":case"it_CH":q="it_IT";
break;
case"ja_JP":q="ja_JP";
break;
case"nl_NL":q="nl_NL";
break;
case"no_NO":q="no_NO";
break;
case"pt":case"pt_PT":q="pt_PT";
break;
case"sv_SE":q="sv_SE";
break;
case"zh_CN":q="zh_CN";
break;
case"zh_TW":q="zh_TW";
break;
default:q="en_GB"
}return q
};
A.prototype.getCountries=function(){var q=this.countrySelectors.data("country"),r=this.getLocale(),w="local"===am.util.Page.environment()?"net":am.util.Page.environment();
jq.get("https://"+w+".ig.com/productapplicationsgateway/demo/configuration?countryOfApplication\x3d"+q+"\x26locale\x3d"+r).done(this.populateCountryList.bind(this))
};
A.prototype.populateCountryList=function(q){var r=this;
q=q.countries;
var w=this.countrySelectors.data("country").toUpperCase();
q.forEach(function(C){var z={type:C.redirectType,isoCode:C.redirectWebsiteCountryCode};
z=z.type&&z.isoCode?"data-redirect\x3d'"+JSON.stringify(z)+"'":"";
r.countrySelectors.append(jq('\x3coption value\x3d"'+C.isoCode+'" '+z+"\x3e"+C.localizedName+"\x3c/option\x3e"))
});
this.countrySelectors.val(w).change();
new b
};
var B=function(q){this.form=jq(q);
this.regexAlphaPattern="A-Za-z\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2183\u2184\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005\u3006\u3031-\u3035\u303b\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6e5\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc"
};
B.prototype.alphaPattern=function(){return new RegExp("^["+this.regexAlphaPattern+" ]+$","i")
};
B.prototype.alphaNumPattern=function(){return new RegExp("^["+this.regexAlphaPattern+"0-9 ]+$","i")
};
B.prototype.passwordPattern=function(){return/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[\w!"#$%'()*,\-.\/:;=?@{|}~\[\]\^\xA3]+$/
};
B.prototype.validations=function(){var q=this,r=this.form.data("structure"),w={};
window.validate.extend(window.validate.validators.datetime,{parse:function(z,C){return Date.parse(z)
},format:function(C,D){C=new Date(C);
var z=C.toISOString().slice(0,10);
D.dateOnly||(z+=" "+C.toLocaleTimeString().slice(0,8));
return z
}});
window.validate.formatters.custom=function(z){return z.map(function(C){return{field:C.attribute,error:C.error}
})
};
jq.each(r,function(z,C){if(C.name){w[C.name]={};
C.required&&(w[C.name].presence={message:window.i18n["forms.required"]});
if("email"===C.type||"email"===C.subtype){w[C.name].email={message:window.i18n["forms.validemail"]}
}"date"===C.type&&(w[C.name].datetime={},w[C.name].datetime.dateOnly=!0,w[C.name].datetime.message=window.i18n["forms.validdate"]);
if(C.minlength||C.maxlength){w[C.name].length={},C.minlength&&(w[C.name].length.minimum=parseInt(C.minlength,10),w[C.name].length.tooShort=window.i18n["forms.validmin"]+" %{count}"),C.maxlength&&(w[C.name].length.maximum=parseInt(C.maxlength,10),w[C.name].length.tooLong=window.i18n["forms.validmax"]+" %{count}")
}switch(C.validation){case"numeric":w[C.name].numericality={notValid:window.i18n["forms.validnumeric"],notInteger:window.i18n["forms.validnumeric"]};
break;
case"alpha":w[C.name].format={};
w[C.name].format.pattern=q.alphaPattern();
w[C.name].format.message=window.i18n["forms.validalpha"];
break;
case"alpha_num":w[C.name].format={};
w[C.name].format.pattern=q.alphaNumPattern();
w[C.name].format.message=window.i18n["forms.validalphanum"];
break;
case"password":w[C.name].format={},w[C.name].format.pattern=q.passwordPattern(),w[C.name].format.message=window.i18n["forms.validpassword"]
}}jq.isEmptyObject(w[C.name])&&delete w[C.name]
});
return w
};
var Z=function(q){this.form=jq(q)
};
Z.prototype.submit=function(){var q=this.form.prop("action"),r=this.form.data("send-urlencode");
if(q){this.form.find('.field-submit, input[type\x3d"submit"]').addClass("disabled");
var w=r?this.form.serialize():this.getAjaxData();
q={type:"post",url:q,data:w,success:this.success.bind(this),error:this.failure.bind(this)};
r||(q.contentType="application/json;charset\x3dutf-8");
jq.ajax(q)
}return !1
};
Z.prototype.getAjaxData=function(){var q=this.form.serializeObject(),r=am.util.Cookie.get("qpid");
r&&(q.qpid=r);
return JSON.stringify(q)
};
Z.prototype.success=function(q){this.redirectURL("success");
return q
};
Z.prototype.failure=function(q){this.redirectURL("failure");
return q
};
Z.prototype.redirectURL=function(q){q=this.form.data(q+"-url")||"";
this.form.find('.field-submit, input[type\x3d"submit"]').removeClass("disabled");
q&&(window.location=q)
};
var y=function(q,r){var w=jq(q);
w.find(".error-container").removeClass("active");
w.find(".form-control, .selectbox__wrapper").removeClass("form-error");
r.forEach(function(C){var z=w.find("[name\x3d"+C.field+"]");
z.hasClass("selectbox")&&(z=z.parent(".selectbox__wrapper"));
z.addClass("form-error");
z.siblings(".error-container").addClass("active").html(C.error)
})
},ah=function(q){this.form=jq(q);
this.environment="local"===am.util.Page.environment()?"net":am.util.Page.environment();
this.isValid=!1;
this.getErrors=[];
this.defaultHtml={};
this.setUserNameBind().setCountryOfResidenceBind()
};
ah.prototype.submit=function(){this.isValid&&this.encryptPassword();
return !1
};
ah.prototype.encryptPassword=function(){jq.ajax({url:"https://"+this.environment+".ig.com/clientsecurity/encryptionkey",success:this.encryptionKeySuccess.bind(this),error:this.encryptionKeyFailure.bind(this)})
};
ah.prototype.encryptionKeySuccess=function(q){var r=am.util.encryption(),w=this.form.serializeObject().password;
q=r.encrypt(w,q.encryptionKey);
r=this.getAjaxData(q);
window.dlog("encryption: password encryption successful ",q);
this.submitDemoAccount(r)
};
ah.prototype.encryptionKeyFailure=function(q){window.dlog("encryption: password encryption failed",q);
q=this.getAjaxData();
this.submitDemoAccount(q)
};
ah.prototype.submitDemoAccount=function(q){jq.ajax({type:"post",url:"https://"+this.environment+".ig.com/productapplicationsgateway/demo/submit",contentType:"application/json;charset\x3dutf-8",data:q,success:this.success.bind(this),error:this.failure.bind(this)})
};
ah.prototype.getAjaxData=function(q){var r=this.form.serializeObject(),w=am.util.Cookie.get("qpid");
r.passwordEncrypted=!1;
r.countryOfApplication=r.countryOfApplication.toUpperCase();
w&&(r.qpid=w.split(",")[0]);
q&&(r.password=q,r.passwordEncrypted=!0);
""==r.appName?localStorage.setItem("appName","app_web_demo"):localStorage.setItem("appName",r.appName);
return JSON.stringify(r)
};
ah.prototype.success=function(q){localStorage.setItem("OpenDemoAccount","true");
this.trackOptimizelyDemoForm();
var r=am.util.Page.getQuerystring("next");
this.redirectURL("success",r);
return q
};
ah.prototype.failure=function(q){if(q.responseText){var r="";
try{r=JSON.parse(q.responseText)
}catch(w){return this.redirectURL("failure"),q
}switch(r.globalErrors[0]){case"DUPLICATE_USERNAME":y(this.form,[{error:window.i18n["forms.duplicate.username"],field:"username"}]);
break;
case"DUPLICATE_FAILURE":y(this.form,[{error:window.i18n["forms.duplicate.failure"],field:"email"}]);
break;
default:this.redirectURL("failure")
}}return q
};
ah.prototype.redirectURL=function(q,r){if(q=r||this.form.data(q+"-url")||""){window.location=q
}};
ah.prototype.setUserNameBind=function(){var q=this.form.find("[name\x3dusername]");
q.off("blur.validate").on("blur.validate",this.checkUsername.bind(this));
q.off("keyup.validate").on("keyup.validate",this.clearUsernameErrors.bind(this));
return this
};
ah.prototype.setCountryOfResidenceBind=function(){this.form.find("[name\x3dcountry]").off("change.country").on("change.country",this.checkCountryOfResidence.bind(this));
return this
};
ah.prototype.checkUsername=function(q){var r=this,w=q.target.value;
w?(this.form.find("input[type\x3dsubmit]").prop("disabled",!0).addClass("disabled"),jq.get("https://"+this.environment+".ig.com/productapplicationsgateway/username/"+w+"/check").done(function(z){r.isValidUsername(z);
y(r.form,r.getErrors)
})):jq(q.target).siblings(".error-container").removeClass("active")
};
ah.prototype.clearUsernameErrors=function(q){jq(q.target).siblings(".error-container").removeClass("active")
};
ah.prototype.checkCountryOfResidence=function(q){q=jq(q.target).find("option[value\x3d"+q.target.value+"]").data("redirect");
this.form.find("input[type\x3dsubmit]").prop("disabled",!1).removeClass("disabled");
jq('.tooltip-popup [data-eventselector^\x3d"demoaccount."]').parent().hide();
q&&("hard"===q.type&&this.form.find("input[type\x3dsubmit]").prop("disabled",!0).addClass("disabled"),this.updateMessage(q.type,q.isoCode),am.util.pubsub.publish("demoaccount."+q.type+".redirect"))
};
ah.prototype.updateMessage=function(q,r){var z=jq('.tooltip-popup [data-eventselector\x3d"demoaccount.'+q+'.redirect"] .text-content');
r='\x3ca href\x3d"https://'+this.environment+".ig.com/"+r+'"\x3e'+this.environment+".ig.com/"+r+"\x3c/a\x3e";
if(z.html()){if(!this.defaultHtml[q]){var w={};
this.defaultHtml=(w[q]=z.html().trim(),w)
}z.html(this.defaultHtml[q]);
q=z.html().replace("{{country}}",r).trim();
z.html(q)
}};
ah.prototype.isValidUsername=function(q){this.getErrors=[];
this.form.find("input[type\x3dsubmit]").prop("disabled",!1).removeClass("disabled");
q||this.getErrors.push({error:window.i18n["forms.validUsername"]||"Invalid username",field:"username"});
return this.isValid=!!q
};
ah.prototype.trackOptimizelyDemoForm=function(){var q=document.querySelector("[name\x3d'appName']");
q&&("tradingAcademy"===q.value?am.util.optimizelyCustomEvent("academy-sign-up"):am.util.optimizelyCustomEvent("demo_account_open"))
};
(function(){var q=function(){this.formType=this.getFormType();
this.overrideSubmit();
new A
};
q.prototype.overrideSubmit=function(){var r=this;
jq("form.form__validate").off("submit.form").on("submit.form",function(w){return r.handleFormSubmit(w.target)
});
return this
};
q.prototype.getFormType=function(){var r=[];
jq("form.form__validate").each(function(C,w){w=jq(w);
var z=w.data("typeform");
w.attr("data-index",C);
switch(z){case"demo-account":r.push(new ah(w));
break;
default:r.push(new Z(w))
}});
return r
};
q.prototype.handleFormSubmit=function(w){var z=(new B(w)).validations();
z=window.validate(w,z,{format:"custom",fullMessages:!1})||[];
var r=this.formType[parseInt(w.getAttribute("data-index"),10)];
r.getErrors&&0<r.getErrors.length&&(z=z.concat(r.getErrors));
y(w,z);
return 0===z.length?r.submit():!1
};
window.PS.util.FormRender=new q;
return q
})();
var aj=function(q,r,z){this.constants={DONUT_SIZE:102,SELECTORS:{DONUTS:".cs__donuts",SVG:"donut-chart-svg",BUY_CIRCLE:"donut-chart-buy-circle",SELL_CIRCLE:"donut-chart-sell-circle",DONUT_HOLE:"donut-chart-hole",TEXT_CONTAINER:"cs__text-container"}};
var w=q.parents(this.constants.SELECTORS.DONUTS)[0];
this.container=q.parentElement;
this.element=q;
this.data=r;
this.centerCircleRadiusPct=(z.size-2*z.donutWidth)/z.size;
this.sellColour=z.colors.sell;
this.buyColour=z.colors.buy;
this.size=z.size||this.constants.DONUT_SIZE;
this.percentage=r.shortPercent||0;
this.percentageText=this.getPercentageText();
this.long=w.getAttribute("data-long");
this.short=w.getAttribute("data-short");
this.longShortText=this.getLongShortText();
this.percentageLimit=100<this.percentage?100:null;
this.chart=document.createElementNS("http://www.w3.org/2000/svg","svg");
this.buyCircle=document.createElementNS("http://www.w3.org/2000/svg","circle");
this.donutHole=document.createElementNS("http://www.w3.org/2000/svg","circle");
this.sellCircle=document.createElementNS("http://www.w3.org/2000/svg","path");
this.halfSize=this.size/2;
this.unit=2*Math.PI/100;
this.startAngle=0;
this.endAngle=(this.percentageLimit||this.percentage)*this.unit-0.001;
this.init()
};
aj.prototype.init=function(){this.setUpDrawingPoints().drawPath().generateSvgElement().generateBuyCircle().generateSellCircle().generateDonutHole().renderChart().generateText()
};
aj.prototype.setUpDrawingPoints=function(){this.x1=this.halfSize;
this.y1=0;
this.x2=this.halfSize+this.halfSize*Math.sin(this.endAngle);
this.y2=this.halfSize-this.halfSize*Math.cos(this.endAngle);
this.largeArcFlag=0;
this.endAngle-this.startAngle>Math.PI&&(this.largeArcFlag=1);
return this
};
aj.prototype.drawPath=function(){this.d=["M "+this.halfSize+" "+this.halfSize+" ","L "+this.x1+" "+this.y1+" ","A "+this.halfSize+" "+this.halfSize+" ","0 "+this.largeArcFlag+" 1 ",this.x2+" "+this.y2+" ","Z"].join("");
return this
};
aj.prototype.generateSvgElement=function(){this.setAttributes(this.chart,{"class":this.constants.SELECTORS.SVG,width:this.size,height:this.size,viewBox:"0 0 "+this.size+" "+this.size});
return this
};
aj.prototype.generateBuyCircle=function(){this.setAttributes(this.buyCircle,{"class":this.constants.SELECTORS.BUY_CIRCLE,cx:this.size/2,cy:this.size/2,r:this.size/2,fill:this.buyColour,stroke:"#fff"});
this.chart.appendChild(this.buyCircle);
return this
};
aj.prototype.generateSellCircle=function(){this.setAttributes(this.sellCircle,{"class":this.constants.SELECTORS.SELL_CIRCLE,d:this.d,fill:this.sellColour,stroke:"#fff"});
this.chart.appendChild(this.sellCircle);
return this
};
aj.prototype.generateDonutHole=function(){this.setAttributes(this.donutHole,{"class":this.constants.SELECTORS.DONUT_HOLE,cx:this.halfSize,cy:this.halfSize,r:this.halfSize*this.centerCircleRadiusPct,fill:"white"});
this.chart.appendChild(this.donutHole);
return this
};
aj.prototype.renderChart=function(){this.setAttributes(this.element,{style:"width: "+this.size+"px; height: "+this.size+"px;"});
this.element.appendChild(this.chart);
return this
};
aj.prototype.generateText=function(){var q=document.createElement("div");
q.setAttribute("class",this.constants.SELECTORS.TEXT_CONTAINER);
q.innerHTML=['\x3cdiv class\x3d"cs__percentage"\x3e','\x3cspan class\x3d"cs__percentage-number"\x3e'+this.percentageText+"\x3c/span\x3e",'\x3cspan class\x3d"cs__percentage-symbol"\x3e%\x3c/span\x3e\x3c/div\x3e','\x3cdiv class\x3d"cs__long-short-text"\x3e'+this.longShortText+"\x3c/div\x3e"].join("");
this.element.appendChild(q);
return this
};
aj.prototype.getPercentageText=function(){return 50<=this.data.shortPercent?this.data.shortPercent:this.data.longPercent
};
aj.prototype.getLongShortText=function(){return 50<=this.data.shortPercent?this.short:this.long
};
aj.prototype.setAttributes=function(q,r){for(var w in r){q.setAttribute(w,r[w])
}};
(function(){var q=function(){};
q.donuts=function(){return document.querySelectorAll(".frequently-traded .cs__donut")
};
q.setup=function(){var r={donutWidth:6,size:102,colors:{sell:"#E0211D",buy:"#3987CC"},backgroundColor:"#FFFFFF"};
q.donuts().forEach(function(z){var w={name:z.getAttribute("data-name"),epic:z.getAttribute("data-epic"),url:z.getAttribute("data-url"),longPercent:z.getAttribute("data-longpercent"),shortPercent:z.getAttribute("data-shortpercent")};
new aj(z,w,r)
})
};
0<q.donuts().length&&q.setup();
return am.util.FrequentlyTraded=q
})();
var k=function(q){if(!("ontouchstart" in window||window.navigator.msMaxTouchPoints||window.navigator.userAgent.toLowerCase().match(/windows phone os 7/i)||window.navigator.userAgent.toLowerCase().match(/windows touch/i))){return !1
}var r=function(z){for(var w=[];
z&&z!==document;
z=z.parentNode){w.push(z)
}return w
};
q.forEach(function(w){var C=!1,z=function(D){var E=!0;
r(D.target).forEach(function(G){G===C&&(E=!1)
});
E&&(C=!1)
};
am.util.Events.add(w,"click",function(D){w!==C&&(D.preventDefault(),C=w)
});
am.util.Events.remove(document,"click touchstart MSPointerDown",z);
am.util.Events.add(document,"click touchstart MSPointerDown",z)
});
return !0
};
(function(){var q=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,r=function(){};
r.prototype.init=function(){0<document.querySelectorAll(".main-navigation").length&&this.mobileMenu()
};
r.prototype.mobileMenu=function(){am.util.Events.add(".main-nav-mobile-toggle","click",function(z){z.preventDefault();
am.util.toggleClass(z.currentTarget,"active");
am.util.toggleClass(document.querySelector(".main-nav-wrap"),"active")
});
am.util.Events.add(".nav-sec-level-toggle","click",function(z){am.util.toggleClass(z.currentTarget,"active");
am.util.toggleClass(z.currentTarget.parentNode.querySelector(".nav-sec-level"),"active")
})
};
document.querySelectorAll(".main-menu-container .menu-link-overview").forEach(function(C){var z=C.getAttribute("data-mainlink");
C.textContent=z
});
if(800<q){var w=[].filter.call(document.querySelectorAll(".first-level-menu li"),function(z){return z.querySelector("ul")
});
k(w)
}document.querySelector(".navigation-header-inner")&&800<q&&"false"!==am.util.Cookie.get("mobile_device")&&(q=document.querySelectorAll(".main-navigation li.has-nav-sec"),k(q));
am.util.MainMenu=new r;
return am.util.MainMenu
})();
var j=function(q){var r=window.getComputedStyle(q),D=r.display,w=r.position,z=r.visibility,C=r.width;
r=r.maxHeight.replace("px","").replace("%","");
if("none"!==D&&"0"!==r){return q.offsetHeight
}q.style.position="absolute";
q.style.visibility="hidden";
q.style.display="block";
q.style.width="auto";
r=q.offsetHeight;
q.style.display=D;
q.style.position=w;
q.style.visibility=z;
q.style.width=C;
return r
},o=function(q,r,z){var w=j(q)+"px";
q.style.transition="max-height "+r+"s ease-in-out";
q.style.overflowY="hidden";
q.style.maxHeight="0";
q.setAttribute("data-max-height",w);
q.style.display="block";
setTimeout(function(){z&&z(w);
q.style.maxHeight=w
},10)
},h={Toggle:function(q,r,w){r=void 0===r?0.4:r;
q.getAttribute("data-max-height")?"0"===q.style.maxHeight.replace("px","").replace("%","")?q.style.maxHeight=q.getAttribute("data-max-height"):q.style.maxHeight="0":o(q,r,w)
},Up:function(q,r,w){r=void 0===r?0.4:r;
q.getAttribute("data-max-height")?q.style.maxHeight="0":o(q,r,w)
},Down:function(q,r,z,w){z=void 0===z?0.4:z;
q.getAttribute("data-max-height")&&"0"===q.style.maxHeight.replace("px","").replace("%","")?q.style.maxHeight=r||q.getAttribute("data-max-height"):o(q,z,w)
}};
(function(){var H=document.querySelector("#menu-mobile"),I=document.querySelector(".jsMainMenu"),G=document.querySelector("#secondary-nav"),D=document.createElement("ul"),E=document.createElement("li"),w=document.createElement("a"),z=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,r="",q=0,C=function(){};
C.init=function(){D.id="more-link-dropdown";
E.id="menu-item-more-link";
E.className="menu-item-secondary";
w.className="menu-link-more";
w.setAttribute("href","javascript:;");
w.innerHTML=window.i18n["clientlibs.more.button"]||"More";
C.collapseMenu();
C.launchPlatform();
C.moreFunctionality();
C.moreDropdownOptions()
};
C.collapseMenu=function(){am.util.Events.remove(".menu-arrow","click",C.handleMenuArrowClick);
am.util.Events.add(".menu-arrow","click",C.handleMenuArrowClick)
};
C.handleMenuArrowClick=function(L){var J=this,N=L.target.parentElement,M=N.siblings("li");
am.util.hasClass(N,"open")?(h.Up(N.querySelector("ul"),C.updateParentMenuHeight.bind(this,N,"up")),setTimeout(function(){C.animateMenu(N,!0,C.cleanupOpenElements.bind(J,[N]));
am.util.removeClass(N,"open")
},400)):(am.util.addClass(N,"open"),h.Down(N.querySelector("ul"),"2000px",0.4,C.updateParentMenuHeight.bind(this,N,"down")),setTimeout(function(){C.animateMenu(N,!1,C.cleanupOpenElements.bind(J,M))
},400));
L.stopImmediatePropagation();
N.querySelector("ul")&&L.preventDefault()
};
C.updateParentMenuHeight=function(L,J,N){var M=L.closest("ul");
L=L.querySelector("ul");
am.util.hasClass(L,"submenu")&&M&&(N=parseInt(N,10),L=parseInt(M.style.maxHeight,10),M.style.maxHeight="down"===J?L+N+"px":L-N+"px",am.util.hasClass(M,"submenu")&&C.updateParentMenuHeight(M.parentElement,J,N))
};
C.cleanupOpenElements=function(J){Array.from(J).filter(function(L){return am.util.hasClass(L,"open")
}).forEach(function(L){am.util.removeClass(L,"open");
L=L.querySelector("ul");
L.removeAttribute("style");
L.removeAttribute("data-max-height");
C.cleanupOpenElements(L.children)
})
};
C.launchPlatform=function(){var L=am.util.Cookie.get("CST"),M=!!am.util.Cookie.get("INVESTMENT-CLIENT"),J=am.util.Page.sessionOpen();
C.hideLaunchPlatform();
L&&J&&(M?C.showLaunchPlatform():C.validateInvestmentsClient(L))
};
C.animateMenu=function(M,R,J){var P=document.querySelector(".jsMainMenu.open"),Q=document.querySelector(".first-level-menu"),N=M.parents("li.open")[0],O=C.calculateHeight(M),L=C.calculateMovement(M);
R&&(O=am.util.hasClass(M,"item-main")?Q.scrollHeight+10:C.calculateHeight(N||M),L=C.calculateMovement(N||M));
jq(P).animate({height:O,scrollTop:L},{duration:400,complete:J,always:function(){if(R){0===P.querySelectorAll(".item-main.open").length&&P.removeAttribute("style");
var S=M.querySelector("ul");
S&&(S.removeAttribute("style"),S.removeAttribute("data-max-height"))
}}})
};
C.calculateMovement=function(L){var J=L.offsetTop,M=document.querySelector("li.item-main.open");
M=M?M.offsetTop:0;
am.util.hasClass(L,"item-main")||(J=J+M+41);
return J
};
C.calculateHeight=function(J){var L=document.querySelector(".jsMainMenu.open").scrollHeight-J.offsetTop;
!am.util.hasClass(J,"item-main")&&J.parents("li.item-main.open")[0]&&(L=L-J.parents("li.item-main.open")[0].offsetTop-41);
return L
};
C.loadMobileAjaxMenu=function(){if(document.querySelector(".first-level-menu")){var L=document.querySelector(".first-level-menu"),M=L.getAttribute("data-localepath"),J=window.matchMedia("only screen and (max-width:"+window.matchMedia.IGMeasures.max_width_tablet_portrait+")").matches;
L.removeAttribute("style");
J&&"string"===typeof M&&!L.getAttribute("data-ajax")&&jq.ajax({url:"/system/iggroup/partialNavigationMenu.json/"+M+"/2/4",data:{format:"json"},dataType:"json",error:function(){window.dlog("Navigation.js: There is internet Error. Please try to reload the page")
},success:function(O){L.setAttribute("data-ajax","true");
var N=document.querySelectorAll("li.menu-item");
C.addTo(N,O);
C.collapseMenu()
}})
}};
C.loadMenu=function(){C.loadMobileAjaxMenu();
C.checkMenuHeight();
C.closeMenu();
am.startup.isInApp()||C.keepNavTop()
};
C.keepNavTop=function(){var L=am.util.DeviceUtil.isLessThanGivenWidth(window.matchMedia.IGMeasures.min_breakpoint),Q=document.querySelector("#cookie-disclaimer"),J=Q?Q.offsetHeight:0;
Q=(Q=document.querySelector(".head-inline-disclaimer"))?Q.offsetHeight:0;
var O=document.querySelector(".footer-wrapper"),P=document.querySelector(".content-wrapper"),M=!!document.querySelector(".cookie-disclaimer"),N=J+Q;
L?(O&&(O.style.marginTop=N+"px"),M&&am.util.Events.add("#cookie-dismiss","click",function(){N-=J;
P.style.top=N+"px";
O.style.marginTop=N+"px"
})):O&&(O.style.marginTop=0)
};
C.openMenu=function(){am.util.addClass(I,"open");
am.util.addClass(H,"open")
};
C.closeMenu=function(){am.util.removeClass(I,"open");
am.util.removeClass(H,"open");
I&&I.removeAttribute("style")
};
C.search=function(L,M){var J=0;
L.forEach(function(N){Object.keys(N).length&&N.children&&N.children.length&&(M===N.title?J=N.children:C.search(N.children,M))
});
return J
};
C.addTo=function(J,L){J.forEach(function(N){var M=N.firstElementChild.innerHTML.trim();
if(M=C.search(L,M)){N.innerHTML+=C.buildSublist(M)
}})
};
C.showLaunchPlatform=function(){am.util.removeClass(document.querySelector(".logged-in-cta"),"hidden");
am.util.addClass(document.querySelector(".logged-out-cta"),"hidden")
};
C.hideLaunchPlatform=function(){am.util.addClass(document.querySelector(".logged-in-cta"),"hidden");
am.util.removeClass(document.querySelector(".logged-out-cta"),"hidden")
};
C.validateInvestmentsClient=function(L){var M=am.util.Page.environment(),J="";
"www"!==M&&(J=M+"-");
jq.ajax({url:"https://"+J+"investments-api.ig.com/v1/client/investmentsClientCheck",contentType:"application/json;charset\x3dUTF-8",headers:{CST:L},success:function(N){if(N.hasInvestmentAccount){C.showLaunchPlatform();
if(N=document.querySelector("#already-a-client")){N.style.display="none"
}am.util.Cookie.set("INVESTMENT-CLIENT",!0)
}},error:function(O,P,N){window.dlog("Investments account error: ",O,P,N)
}})
};
C.checkMenuHeight=function(){var L=document.querySelector(".jsMainMenu.open"),O=document.querySelector(".nt-strip"),J=document.querySelector(".main-head"),M=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
if(!L){return !1
}L.removeAttribute("style");
var N=L.offsetHeight;
O=(O?O.offsetHeight:0)+(J?J.offsetHeight:0);
window.matchMedia("only screen and (max-width:"+window.matchMedia.IGMeasures.min_breakpoint+")").matches&&N>M-O&&(L.style.overflowY="scroll",L.style.maxHeight=M-O+"px")
};
C.buildSublist=function(J){var L='\x3cspan class\x3d"menu-arrow"\x3e\x3c/span\x3e\x3cul class\x3d"submenu"\x3e';
J.forEach(function(M){Object.keys(M).forEach(function(N){if("path"===N){var O="";
-1<window.location.href.indexOf(M.path.replace(".html",""))&&(O="submenu-current");
L+='\x3cli class\x3d"submenu-item '+O+'"\x3e\x3ca class\x3d"menu-link" href\x3d"'+M[N]+'"\x3e'+M.title+"\x3c/a\x3e"
}"children"===N&&M[N].length&&(L+=C.buildSublist(M[N]))
})
});
return L+="\x3c/li\x3e\x3c/ul\x3e"
};
C.moreFunctionality=function(){var J=0;
document.querySelectorAll(".menu-item-secondary:not(#menu-item-more-link)").forEach(function(L){if(0<L.offsetHeight||0<L.offsetWidth){J+=L.offsetWidth+20,J>L.parentElement.offsetWidth-100&&D.appendChild(L)
}});
q=J;
0!==D.children.length&&(0<E.offsetHeight||0<E.offsetWidth?C.checkResizeDirection():(C.checkResizeDirection(),E.appendChild(w),E.appendChild(D),G.appendChild(E)))
};
C.checkResizeDirection=function(){var J=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
J>z&&q<G.offsetWidth-100&&(D.querySelectorAll("li").forEach(function(L){E.parentNode.insertBefore(L,E)
}),E.parentNode.removeChild(E),C.moreFunctionality(),C.moreDropdownOptions());
z=J
};
C.moreDropdownOptions=function(){am.util.Events.remove(E,"click",C.handleMoreLiEvent);
am.util.Events.remove(D,"click",C.handleMoreDropdownEvent);
am.util.Events.remove(document,"click",C.handleCloseMoreDropdownEvent);
am.util.Events.add(E,"click",C.handleMoreLiEvent);
am.util.Events.add(D,"click",C.handleMoreDropdownEvent);
am.util.Events.add(document,"click",C.handleCloseMoreDropdownEvent)
};
C.handleMoreLiEvent=function(L){L.preventDefault();
L.stopPropagation();
L=document.querySelector("#menu-item-more-link").offsetLeft;
var J=void 0;
J=void 0===J?"block":J;
"none"===(window.getComputedStyle?window.getComputedStyle(D,null):D.currentStyle).display?D.style.display=J:D.style.display="none";
D.style.top=G.offsetHeight+"px";
D.style.left=L+"px";
am.util.toggleClass(E,"open_menu")
};
C.handleMoreDropdownEvent=function(J){J.stopPropagation()
};
C.handleCloseMoreDropdownEvent=function(){D.style.display="none";
am.util.removeClass(E,"open_menu")
};
C.removeAttributesOnResize=function(){window.matchMedia("only screen and (max-width:"+window.matchMedia.IGMeasures.max_width_tablet_portrait+")").matches||document.querySelectorAll(".menu [data-max-height]").forEach(function(J){J.removeAttribute("style")
})
};
H&&am.util.Events.add(H,"click",function(J){J.preventDefault();
J.stopPropagation();
if(am.util.hasClass(I,"open")&&am.util.hasClass(H,"open")){C.closeMenu()
}else{if(J=document.querySelector(".st-search__tooltip-icon")?document.querySelector(".st-search__tooltip-icon"):document.querySelector(".ig-search-tooltip-icon")){J.classList.remove("active"),J.nextElementSibling.classList.remove("active")
}C.openMenu();
C.checkMenuHeight()
}});
window.addEventListener("resize",function(){clearTimeout(r);
r=setTimeout(function(){C.loadMenu();
C.moreFunctionality();
C.removeAttributesOnResize()
},200)
});
C.loadMenu();
return am.util.Navigation=C
})();
(function(){var q=function(){this.resizeTimeout=0
};
q.prototype.init=function(){this.applyBindings()
};
q.prototype.applyBindings=function(){document.querySelector(".cq-wcm-edit")||(am.util.Events.remove(".information-popup__icon","click",this.popupDisplay.bind(this)),am.util.Events.add(".information-popup__icon","click",this.popupDisplay.bind(this)),am.util.Events.remove(".information-popup__cross","click",this.popupClose.bind(this)),am.util.Events.add(".information-popup__cross","click",this.popupClose.bind(this)),this.bindedHover||this.bindPopupHover(),am.util.Events.remove(window,"resize",this.windowResize.bind(this)),am.util.Events.add(window,"resize",this.windowResize.bind(this)));
return this
};
q.prototype.popupDisplay=function(w){w=w.target;
var C=w.firstElementChild;
this.resetTransformations(C);
if(am.util.hasClass(w,"information-popup__icon")){var r=am.util.hasClass(w,"visible");
am.util.addClass(w,"calculating");
var z=w.getBoundingClientRect().left-C.getBoundingClientRect().left;
z=-25<z&&25>z;
(r||C.isInViewport(0,0,!0))&&z||this.adjustPopup(C);
am.util.removeClass(w,"calculating");
am.util.toggleClass(w,"visible")
}return this
};
q.prototype.popupClose=function(r){var w=r.target.closest(".information-popup__icon");
w&&am.util.hasClass(w,"visible")&&am.util.removeClass(w,"visible");
r.stopImmediatePropagation();
return this
};
q.prototype.bindPopupHover=function(){document.querySelectorAll(".information-popup__popupbox").forEach(function(r){return r.addEventListener("mouseover",function(){document.querySelectorAll(".information-popup__popupbox").forEach(function(w){w.style.zIndex=5
});
r.style.zIndex=99
})
});
this.bindedHover=!0
};
q.prototype.adjustPopup=function(z){var G=z.getBoundingClientRect(),r=window.innerWidth||document.documentElement.clientWidth,D=z.parentElement.getBoundingClientRect(),E=z.querySelector(".information-popup__arrow"),C=0,w=!1;
if(window.matchMedia("only screen and (min-width: 440px)").matches){if(this.fromMobile&&(w=!0,this.fromMobile=!1),0>G.left?22>D.left?C=22:w=!0:G.right+17>r&&(z.removeAttribute("style"),G=z.getBoundingClientRect(),C=-(G.right-r),C-=17),0!==C||w){z.style.transform="translate3d("+C+"px, 0, 0)",E.removeAttribute("style"),z=parseInt(window.getComputedStyle(E).left,10),E.style.left=z-(C-2)+"px"
}}else{E.style.left=D.left-G.left-4+"px",this.fromMobile=!0
}this.ensureArrowInLimits(E);
return this
};
q.prototype.resetTransformations=function(r){r.style.transform="";
r.querySelector(".information-popup__arrow").style.left="";
return this
};
q.prototype.ensureArrowInLimits=function(w){var z=w.parentElement.getBoundingClientRect(),r=w.getBoundingClientRect();
w=w.style;
0>parseInt(w.left,10)?w.left=0:r.right>z.right&&(w.left=z.width-r.width-1+"px");
return this
};
q.prototype.windowResize=function(){var r=this;
clearTimeout(this.resizeTimeout);
this.resizeTimeout=setTimeout(function(){var w=r.fromMobile;
document.querySelectorAll(".information-popup__icon.visible .information-popup__popupbox").forEach(function(z){r.fromMobile=w;
r.resetTransformations(z);
r.adjustPopup(z)
})
},200);
return this
};
am.util.InformationPopup=new q;
return am.util.InformationPopup
})();
(function(){var q=function(){};
q.prototype.init=function(){document.querySelector(".launch-platform")&&am.startup.isLoggedIn()&&(this.setClientDetails(),this.setupEventHandler())
};
q.prototype.setClientDetails=function(){var r=document.querySelector(".launch-platform").querySelector(".account-name");
if(window.localStorage.getItem("loggedInUser")){var w=JSON.parse(window.atob(window.localStorage.getItem("loggedInUser")));
r.innerText=w.client.firstName+" "+w.client.lastName;
this.formatClientDetails(r)
}else{this.requestAccountService(r)
}};
q.prototype.formatClientDetails=function(r){this.isEllipsisActive(r.parentElement)&&am.util.addClass(r.parentElement,"break-line")
};
q.prototype.setupEventHandler=function(){am.util.Events.add("#launch-platform__btn","click",this.bindClickEvent.bind(this))
};
q.prototype.bindClickEvent=function(w){var z=this;
w.preventDefault();
w=am.util.Cookie.get("CST");
var r=am.util.Cookie.get("IG-ENVIRONMENT");
w&&r&&(am.SiteCatalyst.tracker.trackLink(!0,"o","launch-platform-button"),setTimeout(function(){z.redirect(r)
},500))
};
q.prototype.redirect=function(r){r=this.getEnvironment(r);
window.location.href="https://"+r+".ig.com/validate/api/session"
};
q.prototype.getEnvironment=function(r){return"DEMO"===r?"demo":am.util.Page.environment()
};
q.prototype.isEllipsisActive=function(r){return r.offsetWidth<r.scrollWidth
};
q.prototype.requestAccountService=function(w){var r=this,z=new window.XMLHttpRequest;
z.open("GET","/myig/api/client-account/details",!0);
z.setRequestHeader("CST",am.util.Cookie.get("CST"));
z.setRequestHeader("Accept","application/json");
z.onload=function(){if(4===z.readyState&&200===z.status){var C=JSON.parse(z.responseText);
w.innerText=C.client.firstName+" "+C.client.lastName;
r.formatClientDetails(w)
}};
z.onerror=function(){return window.dlog(z.statusText)
};
z.send(null)
};
am.util.LaunchPlatform=new q;
return am.util.LaunchPlatform
})();
var x=function(q,r,D,w,z){var C=this;
z=void 0===z?0:z;
this.subscription=this.client=null;
this.epicValues="V2-F-BID,OFR,CPT,CPC,HIG,LOW,UTM,SWAP_1_SHORT,SWAP_1_LONG";
this.epic=this.epicValues+r+"|"+q+"|1";
this.onChange=w;
"undefined"!==typeof window.Lightstreamer&&"6.1.4"===window.Lightstreamer.version?this.connect(D,z):l("https://a.c-dn.net/b/0wNpa0.js#lightstreamer.6.1.4.min.js",function(){C.connect(D,z)
})
};
x.prototype.connect=function(q,r){this.client=new window.Lightstreamer.LightstreamerClient("https://upp.ig.com","InVisionProvider");
this.client.connect();
this.subscribe(q,r)
};
x.prototype.subscribe=function(q,r){var z=this,w=this.epic.split("|")[0].match(/\w{3,}/g);
this.subscription&&(this.client.unsubscribe(this.subscription),this.subscription=null);
this.subscription=new window.Lightstreamer.Subscription("MERGE",this.epic,[].concat(w));
this.subscription.addListener({onItemUpdate:function(C){C.forEachChangedField(function(D,E,G){z.onChange(q,D,E,G,r)
})
}});
this.subscription.setRequestedMaxFrequency(1);
this.client.subscribe(this.subscription)
};
(function(){var q=function(){};
q.prices=function(){return document.querySelectorAll(".live-prices__container")
};
q.setup=function(){q.prices().forEach(function(r){var w=r.getAttribute("data-epics").replace(/\{|\}|\s/ig,"");
(0===w.length?[]:w.split(",")).forEach(function(D,C){D=D.split("\x3d");
var z=D[1]?":"+D[1].replace(/_/ig,","):"";
new x(D[0],z,r,q.update,C)
})
});
q.setEvents();
q.hideColumns()
};
q.update=function(w,D,r,C,z){w=w.querySelectorAll("[data-field$\x3d"+D+"]")[z];
r=Number(C);
if(w){am.util.removeClass(w,"price--up");
am.util.removeClass(w,"price--down");
switch(D){case"BID":case"OFR":D=Number(w.innerHTML);
D>r?am.util.addClass(w,"price--down"):D<r&&am.util.addClass(w,"price--up");
break;
case"CPT":case"CPC":0>r?am.util.addClass(w,"price--down"):0<r&&am.util.addClass(w,"price--up");
break;
case"UTM":"true"===w.getAttribute("data-time")&&(C={"bg-BG":[2,"Europe"],"cy-CY":[2,"Europe"],"hr-HR":[1,"Europe"],"hu-HU":[1,"Europe"],"el-GR":[2,"Europe"],"fi-FI":[2,"Europe"],"ro-RO":[2,"Europe"],"pl-PL":[1,"Europe"],"is-IS":[1,"Europe"],"lt-LT":[2,"Europe"],"lv-LV":[2,"Europe"],"mt-MT":[1,"Europe"],"si-SI":[1,"Europe"],"sk-SK":[1,"Europe"],"da-DK":[1,"Europe"],"ee-EE":[2,"Europe"],"en-GB":[0,"Europe"],"en-AU":[10,"Australia"],"en-AE":[4,"Dubai"],"ar-AE":[4,"Dubai"],"de-AT":[1,"Europe"],"zh-TW":[10,"Australia"],"zh-CN":[8,"HongKong"],"fr-LU":[1,"Europe"],"nl-NL":[1,"Europe"],"it-IT":[1,"Europe"],"ja-JP":[9,"Tokyo"],"en-SG":[8,"Singapore"],"en-ZA":[2,"South Africa"],"no-NO":[1,"Europe"],"pt-PT":[0,"Europe"],"es-ES":[1,"Europe"],"sv-SE":[1,"Europe"],"fr-FR":[1,"Europe"],"de-DE":[1,"Europe"],"de-CH":[1,"Europe"],"en-CH":[1,"Europe"],"fr-CH":[1,"Europe"],"it-CH":[1,"Europe"]}[document.querySelector("html").getAttribute("lang")]||[0,"Europe"],C=window.worldClock(C[0],C[1]));
break;
default:window.dlog("Live prices: field default behaviour")
}w.innerHTML=C
}};
q.showColumns=function(){q.prices().forEach(function(r){r.querySelectorAll(".dynamic-table__cell").forEach(function(w){return am.util.removeClass(w,"hidden")
})
})
};
q.hideColumns=function(){q.prices().forEach(function(w){for(var r=w.parentNode.offsetWidth,C=w.offsetWidth,D=0;
C>r;
){D+=1;
var z=w.querySelectorAll(".dynamic-table__cell:nth-last-child("+D+")");
C-=z[0].offsetWidth;
z.forEach(function(E){return am.util.addClass(E,"hidden")
})
}})
};
q.setEvents=function(){q.setResizeEvent();
q.setRowClick()
};
q.setResizeEvent=function(){var r,w=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
window.addEventListener("resize",function(z){clearTimeout(r);
r=setTimeout(function(){var C=z.target.innerWidth||z.target.document.documentElement.clientWidth||z.target.document.body.clientWidth;
C!==w&&(w=C,q.showColumns(),q.hideColumns(),q.setRowClick())
},200)
})
};
q.setRowClick=function(){document.querySelectorAll(".dynamic-table__cell [href]").forEach(function(w){var r=w.closest(".dynamic-table__row"),z=window.matchMedia("only screen and (max-width: 800px)").matches;
w.hasAttribute("data-mobile")&&z?w.hasAttribute("data-mobile")&&z&&am.util.removeClass(r,"clickable"):(am.util.addClass(r,"clickable"),am.util.Events.add(r,"click",function(){window.location=w.getAttribute("href")
}))
})
};
0<q.prices().length&&!am.core.CQMode.inAuthor&&q.setup();
return am.util.LivePrices=q
})();
var ae=function(){var q=function(J,I,D,E,G,C,w){E=void 0===E?"Anon. Ajax Call":E;
var H=new XMLHttpRequest,z="";
H.open("GET",J,!0);
H.onreadystatechange=function(){4!==H.readyState?window.dlog(E+": AJAX change: ",H.readyState):(window.dlog(E+": received feedback from AJAX call"),window.clearTimeout(r),200===H.status?I(H.responseText):0===H.status&&C&&""===H.statusText?C():(0===z.length&&(z=H.status),D(z)))
};
var r=setTimeout(function(){H&&4!==H.readystate&&(z="timeout",H.abort())
},G);
w&&(H.withCredentials=!0);
window.dlog(E+": making AJAX call for",J);
H.send("")
};
return am.util.ajax=q
}();
(function(){var q=function(){};
q.prototype.init=function(){this.createTable().addEventListeners()
};
q.prototype.addEventListeners=function(){am.util.Events.add(".market-search__search-bar","input",this.isSearchInputPopulated.bind(this));
return this
};
q.prototype.isSearchInputPopulated=function(){""===(document.querySelector(".market-search__search-bar").value||"")?this.hideResults():this.getSearchData()
};
q.prototype.hideResults=function(){var r=document.querySelector(".market-search__results-container");
am.util.addClass(r,"market-search__results-container--hidden")
};
q.prototype.getSearchData=function(){var w=am.util.Page.environment(),r=location.pathname.split("/")[-1<location.href.indexOf("ig.com/t/")?2:1],z=am.util.Page.locale(),C=document.querySelector(".market-search__search-bar").value;
ae("https://"+w+".ig.com/"+r+"/ig-proxy/marketsearch/suggest?cq_locale\x3d"+z+"\x26query\x3d"+C,this.sortData.bind(this),this.hideResults,"Market Search Results Request",1000)
};
q.prototype.sortData=function(w){var r=this;
w=JSON.parse(w).searchResults.filter(function(D,C){return 4>C
});
var z=document.querySelector(".market-search__results-container");
this.clearTableRows();
w.forEach(function(C){r.updateRow(C.name)
});
am.util.addClass(z,"market-search__results-container--hidden")
};
q.prototype.createTable=function(){var r=document.querySelector(".market-search__results-box");
this.table=document.createElement("market-search_table");
am.util.addClass(this.table,"market-search__results");
r&&r.appendChild(this.table);
return this
};
q.prototype.updateRow=function(w){var r=document.createElement("tr"),z=document.createElement("td");
this.table.appendChild(r).appendChild(z).innerText=w
};
q.prototype.clearTableRows=function(){this.table.querySelectorAll("tr").forEach(function(r){r.remove()
})
};
am.util.MarketSearch=new q;
return am.util.MarketSearch
})();
var u={IGISA:"ISA",INVISA:"ISA",IGSIPP:"SIPP",INVSIPP:"SIPP",IGCFD:"LEVERAGED",IGFSB:"LEVERAGED",MTCFD:"LEVERAGED",MTFSB:"LEVERAGED",INVSTK:"SHAREDEALING",IGSTK:"SHAREDEALING"},g={LEVERAGED:1,ISA:2,SHAREDEALING:3,SIPP:4,SMART_PORTFOLIO:5},f={IGFSB:1,IGCFD:2,MTFSB:3,MTCFD:4,IGISA:5,INVISA:6,IGSTK:7,INVSTK:8,IGSIPP:9,INVSIPP:10},c=["INVISA","INVSIPP","INVSTK"],t={AC_AVAILABLE_BALANCE:"AC_AVAILABLE_BALANCE",AC_AVAILABLE_CASH:"AC_AVAILABLE_CASH",AC_TOTAL_GAIN_LOSS:"AC_TOTAL_GAIN_LOSS"},p=function(q,r){this.subscriptions={};
this.accounts=q;
this.callback=r
};
p.prototype.init=function(q){var r=this;
window.Lightstreamer&&window.MyIG.constants&&(this.client=new Lightstreamer.LightstreamerClient(window.MyIG.constants.LIGHTSTREAMER_URLS[window.MyIG.constants.ENV],"InVisionProvider"),this.client.connectionDetails.setPassword("CST-"+q),this.client.connect());
this.accounts.forEach(function(w){r.subscriptions[w.accountId]||r.subscribe(w)
})
};
p.prototype.subscribe=function(q){var r="V2-AD-"+Object.keys(t)+"|ACC."+q.accountId,w=Object.keys(t);
this.subscriptions[q.accountId]=new Lightstreamer.Subscription("MERGE",r,w);
this.client.subscribe(this.subscriptions[q.accountId]);
this.subscriptions[q.accountId].addListener({onItemUpdate:this.callback.bind(this,q)})
};
p.prototype.unsubscribe=function(){var q=this;
this.accounts.forEach(function(r){q.client.unsubscribe(q.subscriptions[r.accountId])
});
this.client.disconnect()
};
var e=function(){this._ISA={value:"ISA",accounts:[]};
this._SIPP={value:"SIPP",accounts:[]};
this._LEVERAGED={value:"LEVERAGED",accounts:[]};
this._SHAREDEALING={value:"SHAREDEALING",accounts:[]};
this._SMART_PORTFOLIO={value:"SMART_PORTFOLIO",accounts:[]}
};
$jscomp.global.Object.defineProperties(e.prototype,{ISA:{configurable:!0,enumerable:!0,get:function(){return this._ISA
},set:function(q){this._ISA.accounts.push(q)
}},SIPP:{configurable:!0,enumerable:!0,get:function(){return this._SIPP
},set:function(q){this._SIPP.accounts.push(q)
}},LEVERAGED:{configurable:!0,enumerable:!0,get:function(){return this._LEVERAGED
},set:function(q){this._LEVERAGED.accounts.push(q)
}},SHAREDEALING:{configurable:!0,enumerable:!0,get:function(){return this._SHAREDEALING
},set:function(q){this._SHAREDEALING.accounts.push(q)
}},SMART_PORTFOLIO:{configurable:!0,enumerable:!0,get:function(){return this._SMART_PORTFOLIO
},set:function(q){this._SMART_PORTFOLIO.accounts.push(q)
}}});
(function(){var q,r=function(){};
r.prototype.init=function(){document.querySelector(".nt-strip")&&(this.dropdownToggle=document.querySelectorAll(".nt-strip__dropdown-toggle"),this.accountDropdown=document.querySelector(".nt-strip__account-dropdown"),this.environmentCookie=am.util.Cookie.get("IG-ENVIRONMENT"),this.translations=this.accountDropdown.dataset,this.windowWidth=window.innerWidth,this.setUpEventHandlers().loginCheck().globalPageRefreshOnLogout());
return this
};
r.prototype.setUpEventHandlers=function(){am.util.Events.add(".nt-strip__dropdown-toggle","change",this.bindMobileFixedChangeEvent);
am.util.Events.add(document.documentElement,"click",this.bindDropdownCloseClickEvent.bind(this));
am.util.Events.add(window,"resize",this.resizeThrottler.bind(this));
return this
};
r.prototype.bindDropdownCloseClickEvent=function(z){var w=this;
z.target.closest(".nt-strip__dropdown-container")||this.dropdownToggle.forEach(function(C){C.checked&&(C.checked=!1,w.accountSubscription.unsubscribe())
})
};
r.prototype.bindMobileFixedChangeEvent=function(w){w.target.checked&&550>=window.innerWidth?(am.util.addClass(document.querySelector(".nt-strip"),"nt-strip--fixed"),am.util.addClass(document.documentElement,"no-scrolling"),document.getElementById("cookie-disclaimer")&&am.util.addClass(document.documentElement,"fixed")):(am.util.removeClass(document.querySelector(".nt-strip"),"nt-strip--fixed"),am.util.removeClass(document.documentElement,"no-scrolling"),document.getElementById("cookie-disclaimer")&&am.util.removeClass(document.documentElement,"fixed"));
return this
};
r.prototype.globalPageRefreshOnLogout=function(){window.PS.util.Cookie.listen("sessionOpen",function(w){if("false"===w||null===w){window.location=window.location.href
}});
return this
};
r.prototype.resizeThrottler=function(){var w=this;
q||(q=setTimeout(function(){q=null;
w.resizeHandler()
},66))
};
r.prototype.resizeHandler=function(){window.innerWidth!==this.windowWidth&&(this.windowWidth=window.innerWidth,this.dropdownToggle.forEach(function(w){w.checked=!1;
am.util.removeClass(document.documentElement,"fixed");
am.util.removeClass(document.documentElement,"no-scrolling");
am.util.removeClass(document.querySelector(".nt-strip"),"nt-strip--fixed")
}))
};
r.prototype.loginCheck=function(){am.startup.isLoggedIn()?(am.util.Events.add("#nt-strip__account-dropdown-toggle","change",this.bindAccountDropdownChangeEvent.bind(this)),this.collectEndpoints().getBasicInfo().getUnreadMessages().updateMessageCountFromSever().getClientAccountInfo()):(this.stopCheckingForUnreadMessages(),this.cleanup());
return this
};
r.prototype.requestService=function(D){var z=void 0===D.method?"GET":D.method,H=D.service,G=void 0===D.async?!0:D.async,E=D.headers,C=D.callback,w=new window.XMLHttpRequest;
w.open(z,H,G);
Object.keys(E).forEach(function(I){return w.setRequestHeader(I,E[I])
});
w.onload=function(){4===w.readyState&&(200===w.status?C(w):window.dlog(w.statusText))
};
w.onerror=function(){return window.dlog(w.statusText)
};
w.send(null)
};
r.prototype.collectEndpoints=function(){var z=this,w={};
w={service:this.buildServiceUrl("/myig/api/endpoints"),headers:(w.Accept="application/json",w),callback:function(C){return z.filterAndAssignEndpoints(JSON.parse(C.responseText))
}};
this.requestService(w);
return this
};
r.prototype.filterAndAssignEndpoints=function(w){window.MyIG={constants:w}
};
r.prototype.getBasicInfo=function(){var z=this,w={};
w={service:this.buildServiceUrl("/myig/api/client/basic-info?myig_cluster\x3dlight"),headers:(w.CST=am.util.Cookie.get("CST"),w.Accept="application/json",w),callback:function(C){z.basicInfo=JSON.parse(C.responseText)
}};
this.requestService(w);
return this
};
r.prototype.getUnreadMessages=function(){var z=this,w={};
w={service:this.buildServiceUrl("/myig/api/messagecentre/count/unread"),headers:(w.CST=am.util.Cookie.get("CST"),w.Accept="application/json",w),callback:function(C){return z.updateInboxLink(JSON.parse(C.responseText))
}};
this.requestService(w);
return this
};
r.prototype.updateInboxLink=function(w){document.querySelectorAll(".nt-strip__account-inbox").forEach(function(z){var C=z.children[0];
z=z.querySelector(".icon--inbox");
C.setAttribute("href",w.unreadMessagesUrl);
0!==w.unread&&am.util.addClass(z,"unread")
});
return this
};
r.prototype.updateMessageCountFromSever=function(){this.checkForUnreadMessages=setInterval(this.getUnreadMessages.bind(this),300000);
return this
};
r.prototype.stopCheckingForUnreadMessages=function(){this.checkForUnreadMessages&&clearInterval(this.checkForUnreadMessages)
};
r.prototype.getClientAccountInfo=function(){window.localStorage.getItem("loggedInUser")?this.prepopulateBasicAccountInfo(this.decodedUserObject()):this.getFullAccountInfo()
};
r.prototype.prepopulateBasicAccountInfo=function(w){this.injectUserInfo(w);
this.setupAccountTables(w.client.accounts)
};
r.prototype.injectUserInfo=function(w){document.querySelector(".nt-strip__account-name").innerText=w.client.firstName+" "+w.client.lastName;
return this
};
r.prototype.getFullAccountInfo=function(z){var w=this,C={};
C={service:this.buildServiceUrl("/myig/api/client-account/details"),headers:(C.CST=am.util.Cookie.get("CST"),C.Accept="application/json",C),callback:function(D){D=JSON.parse(D.responseText);
w.accounts=w.filterBalancedAccounts(D.client.accounts);
window.localStorage.getItem("loggedInUser")||(w.injectUserInfo(D),window.localStorage.setItem("loggedInUser",w.encodedUserObject(D)));
w.setupAccountTables(w.accounts,z);
w.registerAccountRowClickEvents();
z&&w.createAccountSubscription()
}};
this.requestService(C)
};
r.prototype.encodedUserObject=function(z){var w=z.client.liveClient?"live":"demo";
z=JSON.stringify({client:{firstName:z.client.firstName,lastName:z.client.lastName,liveClient:z.client.liveClient,accounts:this.accounts.map(function(C){return{accountName:C.accountName,accountId:C.accountId,group:C.group,productCode:C.productCode,clientType:w}
})}});
return window.btoa(z)
};
r.prototype.decodedUserObject=function(){return JSON.parse(window.atob(window.localStorage.getItem("loggedInUser")))
};
r.prototype.createAccountSubscription=function(){this.accountSubscription=new p(this.accounts,this.updateAccountRow.bind(this));
this.accountSubscription.init(am.util.Cookie.get("CST"))
};
r.prototype.bindAccountDropdownChangeEvent=function(w){w=w.target;
w.checked?this.getFullAccountInfo(w.checked):this.accountSubscription.unsubscribe()
};
r.prototype.setupAccountTables=function(z,w){z=this.createAccountGroups(z);
var C=new e;
z.forEach(function(D){switch(u[D.productCode]){case C.LEVERAGED.value:C.LEVERAGED=D;
break;
case C.SHAREDEALING.value:C.SHAREDEALING=D;
break;
case C.ISA.value:C.ISA=D;
break;
case C.SIPP.value:C.SIPP=D
}});
this.organiseByAccountType(C,w)
};
r.prototype.organiseByAccountType=function(z,w){var C=this;
Object.keys(z).filter(function(D){return z[D].accounts.length
}).map(function(D){return{accounts:z[D].accounts.sort(C.compareAccounts),value:z[D].value}
}).sort(this.compareGroups).forEach(function(D){w?C.updateRowFromChangeEvent(D):C.renderAccountTable(D)
})
};
r.prototype.updateRowFromChangeEvent=function(z){var w=this;
z.accounts.map(function(C){var G=window.localStorage.getItem("loggedInUser"),E=document.getElementById(w.getFormattedAccountId(C.accountId));
if(E){C.totalValue=w.getAccountTotalValue(C.balance,C.openPositions);
!C.clientType&&G&&(G=w.decodedUserObject(),C.clientType=G.client.liveClient?"live":"demo");
E.accountData=C;
E=w.getCellSelectors(E);
G=w.getNonStreamingCellValues(C);
var D=w.updateInvestmentsRowCells.bind(w,C,E,G);
w.isInvestmentsAccount(C.productCode)?w.getProfitLossValue(C).then(D):w.updateRowCells(C,E,G)
}})
};
r.prototype.updateInvestmentsRowCells=function(z,w,D,C){C=void 0===C?{}:C;
D.profitLoss=C.amt;
this.updateRowCells(z,w,D)
};
r.prototype.renderAccountTable=function(z){var w=document.querySelector(".nt-strip__account-information"),D=document.createElement("table"),C="nt-strip__account-"+z.value.toLowerCase();
!document.querySelector("."+C)&&z.accounts.length&&(am.util.addClass(w,"active"),am.util.addClass(D,C),D.innerHTML="\n                \x3cthead\x3e\n                    \x3ctr\x3e\n                        \x3cth\x3e"+z.accounts[0].group+"\x3c/th\x3e\n                        \x3cth\x3e"+("LEVERAGED"===u[z.accounts[0].productCode]?this.translations.translationFunds:this.translations.translationValue)+"\x3c/th\x3e \n                        \x3cth\x3e"+this.translations.translationProfit+"\x3c/th\x3e\n                    \x3c/tr\x3e\n                \x3c/thead\x3e\n                \x3ctbody\x3e\x3c/tbody\x3e",this.renderAccountRow(w,D,z))
};
r.prototype.renderAccountRow=function(z,w,D){var E=this,C=w.querySelector("tbody");
D.accounts.map(function(H){var G=window.localStorage.getItem("loggedInUser"),J=document.createElement("tr"),I="LEVERAGED"===u[H.productCode];
!H.clientType&&G&&(G=E.decodedUserObject(),H.clientType=G.client.liveClient?"live":"demo");
J.accountData=H;
J.setAttribute("id",E.getFormattedAccountId(H.accountId));
am.util.addClass(J,"account-row");
J.innerHTML=I&&"demo"===H.clientType?'\n                        \x3ctd\x3e\n                            \x3cspan class\x3d"account-row-name"\x3e'+H.accountName+'\x3c/span\x3e\n                            \x3cspan class\x3d"demo-badge"\x3eDEMO\x3c/span\x3e\n                        \x3c/td\x3e':"\x3ctd\x3e"+H.accountName+"\x3c/td\x3e";
J.innerHTML+='\n                    \x3ctd class\x3d"account-value-funds"\x3e\x3ci class\x3d"icon icon--spinner-dark"\x3e\x3c/i\x3e\x3c/td\x3e\n                    \x3ctd class\x3d"account-profit-loss"\x3e\x3ci class\x3d"icon icon--spinner-dark"\x3e\x3c/td\x3e';
C.appendChild(J)
});
z.appendChild(w)
};
r.prototype.createAccountGroups=function(z){var w=this;
return z.map(function(C){switch(u[C.productCode]){case"ISA":C.group=w.translations.translationIsaAccounts;
break;
case"SIPP":C.group=w.translations.translationSippAccounts;
break;
case"LEVERAGED":C.group=w.translations.translationLeveragedAccounts;
break;
case"SHAREDEALING":C.group=w.translations.translationSharedealingAccounts;
break;
case"SMART_PORTFOLIO":C.group=w.translations.translationSmartPortfolioAccounts
}return C
})
};
r.prototype.filterBalancedAccounts=function(w){return w.filter(function(z){return 0<z.balance
})
};
r.prototype.compareGroups=function(z,w){return g[z.value]-g[w.value]
};
r.prototype.compareAccounts=function(z,w){return f[z.productCode]-f[w.productCode]
};
r.prototype.getCellSelectors=function(w){return{valueFunds:w.querySelector(".account-value-funds"),profitLoss:w.querySelector(".account-profit-loss")}
};
r.prototype.getNonStreamingCellValues=function(w){return{valueFunds:w.totalValue,profitLoss:w.profitLoss}
};
r.prototype.updateAccountRow=function(z,w){var D=document.getElementById(this.getFormattedAccountId(z.accountId)),C=w.getValue(t.AC_AVAILABLE_CASH);
D=this.getCellSelectors(D);
w={valueFunds:this.getAccountTotalValue(C,z.openPositions),profitLoss:w.getValue(t.AC_TOTAL_GAIN_LOSS)};
this.isInvestmentsAccount(z.productCode)||this.updateRowCells(z,D,w)
};
r.prototype.updateRowCells=function(z,w,C){this.updateFundsCell(z,w.valueFunds,C.valueFunds);
this.updateProfitLossCell(z,w.profitLoss,C.profitLoss)
};
r.prototype.updateFundsCell=function(z,w,C){this.isEllipsisActive(w)&&w.setAttribute("title",this.localiseValue(z.currencySymbol,C));
w.innerText=this.localiseValue(z.currencySymbol,C)
};
r.prototype.updateProfitLossCell=function(z,w,C){this.isEllipsisActive(w)&&w.setAttribute("title",this.localiseValue(z.currencySymbol,C));
C="string"===typeof C?parseFloat(C.replace(/[^0-9.-]+/g,"")):C;
am.util.removeClass(w,"positive","negative");
0===C||isNaN(C)||am.util.addClass(w,0<=C?"positive":"negative");
w.innerText=this.localiseValue(z.currencySymbol,C)
};
r.prototype.getAccountTotalValue=function(z,w){return Number(z)+Number(w)
};
r.prototype.getProfitLossValue=function(z){var w=this;
return new Promise(function(D){var C={};
C={service:w.buildTotalReturnsUrl(),headers:(C.CST=am.util.Cookie.get("CST"),C.Accept="application/json",C),callback:function(E){return D(JSON.parse(E.responseText).accountTotalReturns[z.accountId])
}};
w.requestService(C)
})
};
r.prototype.isInvestmentsAccount=function(w){return c.includes(w)
};
r.prototype.isEllipsisActive=function(w){return w.offsetWidth<w.scrollWidth
};
r.prototype.localiseValue=function(z,w){var C={minimumFractionDigits:2,maximumFractionDigits:2};
return 0>w?(w=Math.abs(w),"-"+z+Number(w).toLocaleString(void 0,C)):this.formatValue(w,""+z+Number(w).toLocaleString(void 0,C))
};
r.prototype.formatValue=function(z,w){return isNaN(z)?"-":w
};
r.prototype.registerAccountRowClickEvents=function(){am.util.Events.add(".account-row","click",this.bindRowClickEvent.bind(this))
};
r.prototype.bindRowClickEvent=function(w){w=w.target.closest("tr").accountData;
window.location.href=this.buildValidateApiSessionUrl(w)
};
r.prototype.getEnvironment=function(w){return"DEMO"===w?"demo":am.util.Page.environment()
};
r.prototype.getFormattedAccountId=function(w){return"account-"+window.btoa(w).replace(/[^a-zA-Z ]/g,"").toLowerCase()
};
r.prototype.buildServiceUrl=function(w){return"https://"+this.getEnvironment(this.environmentCookie)+".ig.com/"+w
};
r.prototype.buildValidateApiSessionUrl=function(w){return this.buildServiceUrl("validate/api/session")+"?accountId\x3d"+w.accountId
};
r.prototype.buildTotalReturnsUrl=function(){return""+window.MyIG.constants.IG_INVESTMENTS_API_URLS[this.environmentCookie]+"/v1/client/totalReturns"
};
r.prototype.cleanup=function(){window.localStorage.removeItem("loggedInUser");
delete window.MyIG
};
am.util.NetworkStrip=new r;
return am.util.NetworkStrip
})();
(function(){var q=function(){};
q.donuts=function(){return document.querySelectorAll(".other-positions .cs__donut")
};
q.setup=function(){var r={donutWidth:6,size:102,colors:{sell:"#E0211D",buy:"#3987CC"},backgroundColor:"#FFFFFF"};
q.donuts().forEach(function(w){var z={name:w.getAttribute("data-name"),epic:w.getAttribute("data-epic"),url:w.getAttribute("data-url"),longPercent:w.getAttribute("data-longpercent"),shortPercent:w.getAttribute("data-shortpercent")};
new aj(w,z,r)
})
};
0<q.donuts().length&&q.setup();
return am.util.OtherPositions=q
})();
(function(){var q=function(){this.overlays=document.querySelectorAll(".overlay__container");
this.body=document.querySelector("body")
};
q.prototype.init=function(){var r=this;
this.overlays&&!am.core.CQMode.inEdit&&this.overlays.forEach(function(w){return r.setupTriggers(w)
})
};
q.prototype.setupTriggers=function(w){var r=w.getAttribute("data-item-open-selector");
this.setDisplayBehaviour(r,w);
am.util.Events.add(w.parentNode,"click",this.closeOverlay.bind(this,w))
};
q.prototype.setDisplayBehaviour=function(w,r){switch(r.getAttribute("data-display-behaviour")){case"clickEvent":am.util.Events.add(w,"click",this.triggerOverlayLoadEvent.bind(this,r));
break;
case"pageLoad":am.util.Events.add(window,"load",this.triggerOverlayLoadEvent.bind(this,r));
break;
case"delay":this.setDisplayDelay(r)
}};
q.prototype.triggerOverlayLoadEvent=function(w,r){void 0!==r&&r.preventDefault();
""===w.querySelector(".overlay__content").innerHTML?this.shouldCallerBeTracked(w):this.renderOverlay(w)
};
q.prototype.shouldCallerBeTracked=function(w){var r=this;
"clickEvent"===w.getAttribute("data-display-behaviour")?(am.SiteCatalyst.tracker.trackLink(!0,"o","overlay-opened"),setTimeout(function(){r.getContentToLoad(w)
},300)):this.getContentToLoad(w)
};
q.prototype.getContentToLoad=function(w){var r=this;
am.util.ajax(w.getAttribute("data-content-path")+".html",function(z){return r.populateOverlay(z,w)
},function(z){return window.dlog("Overlay content request failed: "+z)
},"Overlay content request",3000,function(){return window.dlog("Overlay request cancelled")
},!1)
};
q.prototype.setDisplayDelay=function(w){var r=this,z=0;
""!==w.getAttribute("data-display-delay")&&(z=parseInt(w.getAttribute("data-display-delay"),10),setTimeout(function(){r.triggerOverlayLoadEvent(w)
},z))
};
q.prototype.populateOverlay=function(w,r){w=document.createRange().createContextualFragment(w).querySelector(".main-parsys");
r.querySelector(".overlay__content").appendChild(w);
this.renderOverlay(r)
};
q.prototype.renderOverlay=function(r){am.util.addClass(r.parentNode,"overlay--active");
am.util.addClass(this.body,"no-scrolling")
};
q.prototype.closeOverlay=function(w,r){var C=this,z=w.getAttribute("data-item-close-selector");
z=z?r.target.closest(z):"";
z=r.target.closest(".overlay__close")||z;
r=!r.target.closest(".overlay__container");
if(z||r){am.util.addTemporaryClass(w.parentNode,"overlay--fadeout",300),setTimeout(function(){am.util.removeClass(w.parentNode,"overlay--active");
am.util.removeClass(C.body,"no-scrolling")
},300)
}};
am.util.Overlay=new q;
return am.util.Overlay
})();
(function(){var q=function(){};
q.tickets=function(){return document.querySelectorAll(".price-ticket__container")
};
q.setup=function(){q.tickets().forEach(function(r){var z=r.querySelector("[data-epic]");
if(z){var w=z.getAttribute("data-epic");
z=z.getAttribute("data-modifier")?":"+z.getAttribute("data-modifier"):"";
new x(w,z,r,q.update)
}})
};
q.update=function(z,r,D,E){D=z.querySelector("[data-field\x3d"+r+"]");
var G=Number(E);
if(D){switch(r){case"BID":case"OFR":r=D.parents(".price-ticket__values")[0].siblings(".price-ticket__arrow")[0];
var C=z.querySelector(".price-ticket__spread-value"),w=z.querySelector("[data-field\x3dOFR]").innerHTML;
z=z.querySelector("[data-field\x3dBID]").innerHTML;
z=parseFloat((Number(w)-Number(z)).toFixed(1));
w=Number(D.innerHTML);
am.util.removeClass(r,"price-ticket__arrow--up","price-ticket__arrow--down");
w>G?am.util.addClass(r,"price-ticket__arrow--down"):am.util.addClass(r,"price-ticket__arrow--up");
C.innerHTML=4<z.toString().length?"":z;
break;
case"CPT":case"CPC":r=D.parents(".price-ticket__change")[0];
am.util.removeClass(r,"price-ticket__change--up");
am.util.removeClass(r,"price-ticket__change--down");
0>G?am.util.addClass(r,"price-ticket__change--down"):0<G&&am.util.addClass(r,"price-ticket__change--up");
break;
default:window.dlog("Price Ticket: field default behaviour")
}D.innerHTML=E
}};
!am.core.CQMode.inEdit&&0<q.tickets().length&&q.setup();
return am.util.PriceTicket=q
})();
(function(){var q=function(){this.riskWarning=document.querySelector(".risk-warning")
};
q.prototype.init=function(){this.riskWarning&&(this.riskWarningContainer=document.querySelector(".risk-warning__container"),this.riskWarningSticky=document.querySelector(".risk-warning--sticky"),this.closeIcon=document.querySelector(".risk-warning__close-icon"),this.checkCookieExists())
};
q.prototype.checkCookieExists=function(){"true"===am.util.Cookie.get("risk-warning-closed")?this.riskWarning.remove():(am.util.removeClass(this.riskWarningContainer,"risk-warning--hidden"),this.setupClickEventHandler())
};
q.prototype.setupClickEventHandler=function(){this.closeIcon&&am.util.Events.add(this.closeIcon,"click",this.bindCloseClickEvent.bind(this))
};
q.prototype.bindCloseClickEvent=function(){this.riskWarningSticky?this.animateOnClose():this.riskWarning.remove();
am.util.Cookie.set("risk-warning-closed","true",1825)
};
q.prototype.animateOnClose=function(){var r=this;
this.riskWarningSticky.setAttribute("style","bottom: -"+this.riskWarningSticky.offsetHeight+"px");
setTimeout(function(){r.riskWarning.remove()
},300)
};
am.util.RiskWarning=new q;
return am.util.RiskWarning
})();
(function(){var q=function(){var r=this;
document.querySelectorAll(".shrinking-table tr").forEach(function(w){w=w.children;
0<w.length&&w[0].addEventListener("click",r.firstRowClick.bind(r),!1)
})
};
q.prototype.firstRowClick=function(w){if(window.matchMedia("only screen and (max-width:600px)").matches){w=w.target.closest("tr");
var r=w.classList.contains("expanded");
w.classList.toggle("expanded",!r)
}return this
};
am.util.ShrinkingTable=new q;
return q
})();
(function(){var q=function(){try{document.domain===top.document.domain&&(this.sameDomain=!0)
}catch(r){window.dlog("Signicat error acccesing top domain"),this.sameDomain=!1
}};
q.prototype.init=function(){this.sameDomain&&(this.processStartBtn=document.getElementById("signicat-process-start"),this.processEndBtn=document.getElementById("signicat-process-end"),this.setupClickEventHandlers(),this.runCoreFunctionality());
return this
};
q.prototype.setupClickEventHandlers=function(){this.processStartBtn&&this.processStartBtn.addEventListener("click",this.processStartClickEvent,!1);
this.processEndBtn&&this.processEndBtn.addEventListener("click",this.processEndClickEvent,!1)
};
q.prototype.processStartClickEvent=function(r){r.preventDefault();
r=r.target.getAttribute("href");
window.open(r)
};
q.prototype.processEndClickEvent=function(){top.window.close()
};
q.prototype.popStateEventHandler=function(){top.window.location.href=top.document.querySelector(".signicat").data.targetUrl
};
q.prototype.runCoreFunctionality=function(){if(document.querySelector(".signicat-success-page")){var w=top.document.querySelector(".iframe-inline"),r=w.querySelector(".sticky-footer");
top.document.querySelector(".signicat__header").style.display="none";
w.nextElementSibling&&(w.nextElementSibling.style.display="none");
r&&(r.style.display="none");
history.pushState(null,null,document.URL);
window.addEventListener("popstate",this.popStateEventHandler,!1)
}else{top.document.querySelector(".signicat")&&(top.document.querySelector(".signicat").data={targetUrl:top.window.location.href})
}};
window.PS.util.Signicat=new q;
return q
})();
(function(){var q="",r=function(){this.insertGoogleSearchBox();
this.initScript().domListener()
};
r.prototype.initScript=function(){var z=jq(".search__wrapper .ig-custom-search-results").data("site-search-id"),w=!!document.querySelector('script[src*\x3d"/cse/cse.js"]');
z&&!w&&(w=document.createElement("script"),w.type="text/javascript",w.async=!0,w.src="https://www.google.com/cse/cse.js?cx\x3d"+z,z=document.getElementsByTagName("script")[0],z.parentNode.insertBefore(w,z));
return this
};
r.prototype.insertGoogleSearchBox=function(){var z=jq(".ig-searchbox"),w=am.util.Page.getQuerystring("q");
z&&z.append('\x3cgcse:searchbox gname\x3d"simplesearch" gaQueryParameter\x3d"'+w+'"\x3e\x3c/gcse:searchbox\x3e')
};
r.prototype.domListener=function(){var z=this,w=jq(".search__wrapper .ig-custom-search-results");
if(0<w.find("input.gsc-input").length){this.setEvents()
}else{w.on("DOMNodeInserted",function(D){D=jq(D.target);
if(D.is("input")&&D.hasClass("gsc-input")){D=0;
var C=window.navigator.userAgent.match(/(MSIE |Trident.*rv[ :])([0-9]+)/);
!C||C&&3>C.length?C=0:(C=parseInt(C[2],10),C=isNaN(C)?0:C);
0<C&&(D=1000);
setTimeout(z.setEvents.bind(z),D);
w.off("DOMNodeInserted")
}})
}return this
};
r.prototype.setEvents=function(){var z=jq(".ig-search-tooltip-icon"),w=jq(".search__wrapper .ig-custom-search-results"),D=jq(".gsst_a"),C=w.find(".gsc-search-box");
w=w.find(".ig-searchresults .ig-searchresults__redirect a.normal");
z.off("click.toggleTooltip").on("click.toggleTooltip",this.tooltipCallback.bind(this));
C.off("click.simpleSearch").on("click.simpleSearch","input.gsc-search-button",this.clickCallback.bind(this));
C.off("keyup.simpleSearch").on("keyup.simpleSearch","input.gsc-input",this.keyupCallback.bind(this));
C.off("focus.simpleSearch").on("focus.simpleSearch","input.gsc-input",this.focusCallback.bind(this));
D.off("click.simpleSearch").on("click.simpleSearch",this.searchResetClickCallback.bind(this));
w.off("click.redirectSearch").on("click.redirectSearch",this.redirect.bind(this));
jq(document).off("click.outside").on("click.outside",this.outsideCallback.bind(this))
};
r.prototype.tooltipCallback=function(){var z=jq(".ig-custom-search"),w=jq(".ig-search-tooltip-icon");
z.toggleClass("active");
w.toggleClass("active");
z.hasClass("active")&&w.hasClass("active")&&(z=document.querySelector(".menu-mobile"),w=document.querySelector("input.gsc-input"),jq("a.normal").hide(),w.focus(),z&&(z.classList.remove("open"),z.nextElementSibling.classList.remove("open")))
};
r.prototype.clickCallback=function(w){this.eventPrevention(w);
w=jq(".ig-custom-search").hasClass("default");
jq(".search__wrapper .ig-custom-search-results").toggleClass("active");
w||this.redirect()
};
r.prototype.keyupCallback=function(C){this.eventPrevention(C);
if(document.querySelector("input.gsc-input").value!==q){C=window.google.search.cse.element.getElement("simplesearch");
var H=C.getInputQuery();
q=H;
var G=jq(".ig-searchresults__redirect"),D=jq(".ig-searchresults"),E=jq(".gsc-control-cse"),z=jq(".community-search__searchresults .results"),w=jq(".ig-searchresults__redirect a.normal");
""===H?(G.addClass("ig-searchresults__redirect--hidden"),D.addClass(".ig-searchresults--hidden"),E.hide(),z.hide(),w.hide()):(G.removeClass("ig-searchresults__redirect--hidden"),D.removeClass(".ig-searchresults--hidden"),E.show(),z.show(),w.show(),C.execute(H),am.util.CommunitySearch.getSearchResults(H))
}else{H=jq(".ig-custom-search").hasClass("default"),C.keyCode===am.events.KEYS.ENTER&&(H||this.redirect())
}};
r.prototype.focusCallback=function(){var z=jq(".search__wrapper .ig-custom-search-results"),w=z.find(".ig-searchresults");
z.parent(".ig-custom-search").hasClass("searchbox-dropdown")&&w.show()
};
r.prototype.outsideCallback=function(z){var w=jq(".search__wrapper .ig-custom-search-results"),C=w.find(".ig-searchresults");
w.parent(".ig-custom-search").hasClass("searchbox-dropdown")&&!jq(z.target).closest(".ig-custom-search.searchbox-dropdown .ig-custom-search-results").length&&C.hide()
};
r.prototype.searchResetClickCallback=function(){jq(".community-search__searchresults .results").remove()
};
r.prototype.eventPrevention=function(w){w.preventDefault();
w.stopPropagation()
};
r.prototype.redirect=function(z){z&&this.eventPrevention(z);
var w=jq(".search__wrapper .ig-custom-search-results"),E=window.google.search.cse.element.getElement("simplesearch").getInputQuery(),D=window.location.search.replace(/(q=)[^&]+/,"$1"+E),C=(z=z?jq(z.target):"")?z.attr("href"):"";
C&&z.attr("href",C+"?q\x3d"+E);
E&&(E=this.getFilter(E,D),window.location=w.data("result-page")+D+E)
};
r.prototype.getFilter=function(z,w){var C="";
w&&-1===w.indexOf("q\x3d")?C="\x26q\x3d"+z:w||(C="?q\x3d"+z);
return C
};
return am.util.SimpleSearch=r
})();
(function(){var q=function(){this.contentValue="";
this.getContentValue()
};
q.prototype.getContentValue=function(){var r=window.PS.util.Cookie.get("client_id");
r?this.clientAttributeLookup(r):this.swap();
return this
};
q.prototype.clientAttributeLookup=function(w){var r=this,z=window.PS.util.Page.environment();
jq.ajax({beforeSend:function(C){C.setRequestHeader("Content-Type","application/json");
C.setRequestHeader("Accept","application/json");
C.setRequestHeader("client-version","1");
C.setRequestHeader("api-version","1")
},type:"POST",url:"https://"+z+".ig.com/marketingoffer/client-attribute-lookup/public/get/"+w,data:JSON.stringify({environments:{hasAccount:null,accounts:{siteId:null,ibCode:null,isInvestmentsAccount:null}}}),dataType:"json",success:function(C){r.setContentValue(C).swap()
},error:function(C,E,D){dlog("SwapContent.clientAttributeLookup has failed: "+E+" - "+D);
r.swap()
}})
};
q.prototype.setContentValue=function(w){if(w=w.environments){if(w.LIVE&&w.LIVE.accounts){var r=w.LIVE.accounts,z=$jscomp.makeIterator(Object.keys(r));
for(w=z.next();
!w.done;
w=z.next()){if(r[w.value].isInvestmentsAccount){this.contentValue="inv"
}else{this.contentValue="prod";
break
}}}else{if(w.DEMO&&w.DEMO.accounts){for(r=w.DEMO.accounts,z=$jscomp.makeIterator(Object.keys(r)),w=z.next();
!w.done;
w=z.next()){if("DFX"===r[w.value].ibCode){this.contentValue="dfx-demo"
}else{this.contentValue="demo";
break
}}}}}return this
};
q.prototype.swap=function(){for(var w=document.querySelectorAll(".swap-wrapper"),r=0;
r<w.length;
r+=1){var E=w[r],D=E.querySelectorAll(".swap-content"),z=E.getElementsByClassName("swap-default")[0],C=z;
this.contentValue&&(C=E.getElementsByClassName("swap-"+this.contentValue.toLowerCase())[0]||z);
for(E=0;
E<D.length;
E+=1){window.PS.util.removeClass(D[E],"active")
}C&&window.PS.util.addClass(C,"active")
}return this
};
window.PS.util.SwapContent=new q;
return q
})();
(function(){var aB=document.querySelector(".st-search"),aC=document.querySelector(".st-search__searchbox-input");
document.querySelector(".st-search.st-search--tooltip");
var aA=document.querySelector(".st-search__tooltip-icon"),ay=document.querySelector(".st-search__results"),az=document.querySelector(".st-search__searchbox-submit"),av=document.querySelector(".st-search__redirect"),aw=document.querySelector(".st-search__redirect a.normal");
document.querySelector(".st-search__wrapper");
var au=document.querySelector(".st-search__searchbox"),at=document.querySelector(".market-search"),ax=document.querySelector(".st-search__pagination"),ap=document.querySelector(".st-search__results-wrapper"),ar=document.querySelector(".st-search__no-results"),N,V,aa,L=[],R=!1,Y=!1,X=!1,T=0,ao="",aq=[],W="",S="",Q="en_GB",P,O,M,U=function(){};
U.prototype.init=function(){aB&&(P=aB.getAttribute("data-install.key"),1<document.querySelectorAll(".st-search").length&&(R=!0),0===document.querySelectorAll(".st-search__tooltip-icon").length&&0===document.querySelectorAll(".st-search.st-search--dropdown").length&&(R=Y=!0),document.querySelector(".st-search.st-search--dropdown")&&(X=!0),JSON.parse(aB.getAttribute("data-no.background"))&&(aB.style.background="none"),R&&(Y||(aC=document.querySelector(".st-search.default div.st-search__wrapper form.st-search__searchbox input.st-search__searchbox-input"),au=document.querySelector(".st-search.default div.st-search__wrapper form.st-search__searchbox"),ax=document.querySelector(".st-search.default div.st-search__wrapper div.st-search__pagination"),ay=document.querySelector(".st-search.default div.st-search__wrapper div.st-search__results"),aB=document.querySelector(".st-search.default"),at=document.querySelector(".st-search.default div.market-search"),az=document.querySelector(".st-search.default div.st-search__wrapper form.st-search__searchbox input.st-search__searchbox-submit"),ar=document.querySelector(".st-search.default div.st-search__no-results")),this.runSearches(),this.initMarketSearch()),this.setEvents())
};
U.prototype.setEvents=function(){var q=this;
aA&&aA.addEventListener("click",this.tooltipCallback.bind(this));
aC&&(R?aC.addEventListener("keydown",function(r){r.keyCode===am.events.KEYS.ENTER&&aC.value&&(N=1,q.changeResultPage(),q.runSearches(),r.preventDefault())
}):(aC.addEventListener("keydown",function(r){r.keyCode===am.events.KEYS.ENTER&&aC.value&&(q.fireRedirect(),r.preventDefault())
}),aC.addEventListener("keyup",function(){aC.value?q.fireSearch():(q.hideRedirect(),q.hideNoResults(),q.clearCurrentResults())
})));
az&&(R?az.addEventListener("click",function(r){r.preventDefault();
aC.value&&(q.changeResultPage(),q.runSearches())
}):az.addEventListener("click",function(r){r.preventDefault();
aC.value&&q.fireRedirect()
}))
};
U.prototype.getResults=function(q,D,C){var z=aB.getAttribute("data-page.types.to.search").split(","),w="";
z=$jscomp.makeIterator(z);
for(var r=z.next();
!r.done;
r=z.next()){w+="\x26filters[page][page-type][]\x3d"+r.value
}q="all"!==aB.getAttribute("data-page.types.to.search")?"https://search-api.swiftype.com/api/v1/public/engines/search.json?q\x3d"+D+"\x26engine_key\x3d"+aB.getAttribute("data-engine.key")+"\x26page\x3d"+N+"\x26per_page\x3d"+q+w:"https://search-api.swiftype.com/api/v1/public/engines/search.json?q\x3d"+D+"\x26engine_key\x3d"+aB.getAttribute("data-engine.key")+"\x26page\x3d"+N+"\x26per_page\x3d"+q;
window.PS.util.ajax(q,C,function(E){return window.dlog("Failure in swiftype search request: "+E)
},"Swiftype Results Request",3000,function(){return window.dlog("Swiftype search cancelled")
},!1)
};
U.prototype.getMarketResults=function(r,q){am.util.ajax(r,q,function(w){return window.dlog("Failure in market search request: "+w)
},"Market Search Results Request",3000,function(){return window.dlog("Market search cancelled")
},!1)
};
U.prototype.constructClickthroughTracking=function(q){O=q.id;
M=q.url;
return"https://search-api.swiftype.com/api/v1/public/installs/pc/"+P+".json?_st_tracking[doc_id]\x3d"+O+"\x26_st_tracking[query][q]\x3d"+ao+"\x26_st_tracking[query][page]\x3d"+N+"\x26_st_tracking[query_type]\x3dsearch\x26_st_url\x3d"+decodeURIComponent(M)
};
U.prototype.runSearches=function(){window.location.href.includes("q\x3d")&&(V=Y?5:10,ao=decodeURIComponent(window.location.href.split("q\x3d")[1].split("\x26p\x3d")[0]),N=window.location.href.includes("\x26p\x3d")?window.location.href.split("q\x3d")[1].split("\x26p\x3d")[1]:1,aC.value=ao,this.getResults(V,aC.value,this.createResults.bind(this)),Y?am.util.CommunitySearch.init():this.executeSearch())
};
U.prototype.createResults=function(H){var G=/[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T(2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]\+[0-9]{4} /;
this.clearCurrentResults();
H=JSON.parse(H);
aa=H.info.page.num_pages;
var D=H.records.page.length?H.records.page[0]._index:0;
if(aC.value){for(var C={},z=$jscomp.makeIterator(H.records.page),E=z.next();
!E.done;
C={result:C.result,elImage:C.elImage,desc:C.desc},E=z.next()){E=E.value;
C.result=document.createElement("div");
C.result.classList.toggle("st-result");
var w=document.createElement("A");
w.classList.toggle("st-result__title");
P&&D?w.setAttribute("href",this.constructClickthroughTracking(E)):w.setAttribute("href",E.url);
"www"!==am.util.Page.environment()&&w.setAttribute("href",w.getAttribute("href").replace("www",am.util.Page.environment()));
var r=document.createElement("div");
r.classList.toggle("st-result__url");
C.desc=document.createElement("P");
C.desc.classList.toggle("st-result__description");
var q=" | IG "+aB.getAttribute("data-website.country.title"),J=E.title.includes(q)?E.title.split(q)[0]:E.title;
q=void 0;
E.description?q=E.description:(q=E.body.split(J).pop(),q=G.test(q)?q.replace(G,""):q);
q=180<q.length?q.slice(0,180)+"...":q+"...";
J=ao;
for(var aF=void 0;
q[0].match(/[!"#$%'()*,\-.\/:;=?@{|}~\[\]\^\\\u00a3 ]/g);
){q=q.slice(1)
}J=J.split(" | ");
aF=void 0;
J=$jscomp.makeIterator(J);
for(aF=J.next();
!aF.done;
aF=J.next()){var aD=aF.value;
aF=new RegExp(aD,"gi");
if(q.match(aF)){aF=q.match(aF);
var aE=$jscomp.makeIterator(aF);
for(aF=aE.next();
!aF.done;
aF=aE.next()){var I=aF.value;
aF=new RegExp(I,"g");
q=q.replace(aF,"\x3cem\x3e"+I+"\x3c/em\x3e")
}}aF=new RegExp(aD,"gi");
if(E.title.match(aF)){for(aF=E.title.match(aF),aE=$jscomp.makeIterator(aF),aF=aE.next();
!aF.done;
aF=aE.next()){I=aF.value,aF=new RegExp(I,"g"),E.title=E.title.replace(aF,"\x3cem\x3e"+I+"\x3c/em\x3e")
}}aF=new RegExp(aD,"gi");
if(E.url.match(aF)){for(aF=E.url.match(aF),aD=$jscomp.makeIterator(aF),aF=aD.next();
!aF.done;
aF=aD.next()){aE=aF.value,aF=new RegExp(aE,"g"),E.url=E.url.replace(aF,"\x3cem\x3e"+aE+"\x3c/em\x3e")
}}}w.innerHTML=E.title.includes(" | IG ")?E.title.split(" |  IG")[0]:E.title;
r.innerHTML=E.url;
C.desc.innerHTML=q;
C.result.appendChild(w);
JSON.parse(aB.getAttribute("data-hide.images.and.url"))||(C.result.appendChild(r),!E.image||E.image.includes(".png")||E.image.includes("og_image.jpg")||(C.elImage=document.createElement("img"),C.elImage.setAttribute("src",E.image),C.elImage.classList.toggle("st-result__image"),C.elImage.addEventListener("load",function(aG){return function(){aG.result.insertBefore(aG.elImage,aG.desc)
}
}(C))));
C.result.appendChild(C.desc);
ay.appendChild(C.result)
}X&&(ap.style.display="block")
}H.records.page.length?(this.hideNoResults(),R||this.showRedirect()):(this.showNoResults(),R||this.hideRedirect());
R&&this.updatePagination()
};
U.prototype.clearCurrentResults=function(){for(;
ay.hasChildNodes();
){ay.removeChild(ay.lastChild)
}return this
};
U.prototype.tooltipCallback=function(){R?aC&&au.scrollIntoView(!0):(aA.classList.toggle("before"),aA.classList.toggle("active"),aB.classList.toggle("active"));
aC.focus();
var q=document.querySelector(".menu-mobile");
q&&(q.classList.remove("open"),q.nextElementSibling.classList.remove("open"));
return this
};
U.prototype.fireSearch=function(){aC.value!==ao&&(ao=aC.value,N=1,this.getResults(5,aC.value,this.createResults.bind(this)),this.updateRedirect())
};
U.prototype.showPagination=function(){ax.style.display="table";
return this
};
U.prototype.updatePagination=function(){for(var r=ax.querySelectorAll("a"),q=10>aa?1<aa?aa:0:10,w=0;
w<q;
w++){r[w].style.fontWeight=400,r[w].style.display="",window.location.href.includes("\x26p\x3d")&&r[w].innerHTML===window.location.href.split("\x26p\x3d")[1]&&(r[w].style.fontWeight=600),r[w].removeEventListener("click",L[w],!1),L[w]=this.paginationRedirect.bind(this,ao,w+1),r[w].addEventListener("click",L[w],!1)
}if(10>q){for(w=10;
w>q;
w--){r[w-1].style.display="none"
}}this.showPagination()
};
U.prototype.paginationRedirect=function(q,r){window.history.pushState(null,null,"?q\x3d"+encodeURIComponent(q)+"\x26p\x3d"+r);
N=r;
V=Y?5:10;
this.getResults(V,aC.value,this.createResults.bind(this));
au.scrollIntoView(!0);
return this
};
U.prototype.showNoResults=function(){ar&&(ar.style.display="block");
return this
};
U.prototype.hideNoResults=function(){ar&&(ar.style.display="none");
return this
};
U.prototype.showRedirect=function(){av&&ay.children.length&&(av.style.display="block");
return this
};
U.prototype.hideRedirect=function(){av&&(av.style.display="none");
return this
};
U.prototype.fireRedirect=function(){aw.click()
};
U.prototype.updateRedirect=function(){aw.href=aw.getAttribute("data-base.url")+"?q\x3d"+encodeURIComponent(aC.value)+"\x26p\x3d1";
return this
};
U.prototype.changeResultPage=function(){ao=aC.value;
window.history.pushState(null,null,"?q\x3d"+encodeURIComponent(ao)+"\x26p\x3d"+N);
return this
};
U.prototype.initMarketSearch=function(){at&&(T=at.getAttribute("data-defaultNumMarketResults")||6,ao&&T&&this.executeSearch())
};
U.prototype.compileJSONQuery=function(){var r=window.location.pathname.split("/"),q=r[1];
W="/marketanalysis/ig-proxy/marketsearch/search";
S="t"===q?"/t/"+r[2]+"/ig-search":"/"+q+"/ig-search";
return ao?W+"?query\x3d"+ao+"\x26page_number\x3d1\x26page_size\x3d6\x26user_locale\x3d"+Q:""
};
U.prototype.executeSearch=function(){Q=at.getAttribute("data-locale");
var q=this.compileJSONQuery();
q&&this.getMarketResults(q,this.marketSearchSuccess.bind(this),this.hideMarketResults())
};
U.prototype.marketSearchSuccess=function(q){Y||(this.showMarketResults(),aq=JSON.parse(q).searchResults,q=aq.slice(0,T),q.length?(this.updateMarketResult(q),0<aB.childElementCount&&aB.classList.toggle("ig-custom-search-share")):this.hideMarketResults())
};
U.prototype.updateMarketResult=function(r){document.querySelectorAll(".link-related-search a")[1].setAttribute("href",S+"?query\x3d"+ao);
document.querySelectorAll(".link-market-search a")[1].setAttribute("href",S+"?query\x3d"+ao);
var q=document.querySelectorAll(".market-search__results tbody")[1];
if(q){for(;
q.hasChildNodes();
){q.removeChild(q.lastChild)
}for(var E={},D=0;
D<r.length;
E={result:E.result},D++){E.result=r[D];
var C=document.createElement("TD");
C.classList.toggle("market-name");
C.innerHTML="\x3ca href\x3d."+E.result.url+"\x3e"+E.result.name+"\x3c/a\x3e";
var z=document.createElement("TD");
z.classList.toggle("market-type");
z.innerHTML=E.result.marketType;
var w=document.createElement("TR");
w.appendChild(C);
w.appendChild(z);
w.style.cursor="pointer";
w.addEventListener("click",function(G){return function(){window.location.href="."+G.result.url
}
}(E));
q.appendChild(w)
}ao&&r.length<aq.length&&(document.querySelector(".link-market-search a").style.display="block")
}};
U.prototype.hideMarketResults=function(){aC.style.width="35%";
at.style.display="none";
return this
};
U.prototype.showMarketResults=function(){aC.style.width="40%";
at.style.display="inline-block";
return this
};
am.util.SwiftypeSearch=new U;
return am.util.SwiftypeSearch
})();
var ai=function(q){document.querySelector(".page-switcher")&&(q=q.getAttribute("data-reference"),am.util.Events.trigger(".tabs__list-item[data-reference\x3d"+q+"]"),am.util.Tabs.hideOrShowArrows())
};
(function(){var q=function(){};
q.prototype.init=function(){this.bindEvents().persistTabSize().hideOrShowArrows()
};
q.prototype.bindEvents=function(){var w=this,r,z=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
am.util.Events.remove(".tabs__list-item","click",this.handleTabClickEvent);
am.util.Events.add(".tabs__list-item","click",this.handleTabClickEvent);
am.util.Events.remove(".tabs__arrow","click",this.setScrollLimits.bind(this));
am.util.Events.add(".tabs__arrow","click",this.setScrollLimits.bind(this));
window.addEventListener("resize",function(C){clearTimeout(r);
r=setTimeout(function(){var D=C.target.innerWidth||C.target.document.documentElement.clientWidth||C.target.document.body.clientWidth;
D!==z&&(z=D,w.persistTabSize(),w.clearTabsMovement(),w.hideOrShowArrows())
},200)
});
return this
};
q.prototype.handleTabClickEvent=function(w){w=w.target;
if(w.classList.contains("tabs__list-item--selected")){window.matchMedia("only screen and (max-width: 600px)").matches&&am.util.toggleClass(w.closest("ul"),"expanded")
}else{var r=w.closest(".tabs__container"),z=r.nextElementSibling.children;
am.util.removeClass(r.querySelector(".tabs__list-item--selected"),"tabs__list-item--selected");
[].concat($jscomp.arrayFromIterable(z)).forEach(function(C){return am.util.removeClass(C,"tabs__content--selected")
});
am.util.addClass(w,"tabs__list-item--selected");
am.util.addClass(z[w?[].concat($jscomp.arrayFromIterable(w.parentNode.children)).indexOf(w):-1],"tabs__content--selected");
am.util.removeClass(w.closest("ul"),"expanded");
ai(w)
}return this
};
q.prototype.persistTabSize=function(){document.querySelectorAll(".tabs__persist-height").forEach(function(w){var r=w.querySelectorAll(".tabs__content");
w=w.querySelectorAll(".tabs__content-container");
var z=[].concat($jscomp.arrayFromIterable(r)).reduce(function(D,C){C=j(C);
return C>D?C:D
},0);
r.forEach(function(C){return C.removeAttribute("style")
});
w.forEach(function(C){return C.setAttribute("style","height: "+z+"px")
})
});
return this
};
q.prototype.hideOrShowArrows=function(w){var r=this;
(w||document.querySelectorAll(".tabs__list")).forEach(function(C){if(!am.util.hasClass(C.closest(".tabs__component"),"secondary")){var G=C.querySelectorAll(".tabs__list-item");
C=C.parentNode.querySelectorAll(".tabs__arrow");
var E=G[G.length-1],D=!1,z=!1;
r.isVisible(G[0])||(D=!0);
r.isVisible(E)||(z=!0);
r.shouldArrowBeDisplayed(C[0],D);
r.shouldArrowBeDisplayed(C[1],z)
}})
};
q.prototype.shouldArrowBeDisplayed=function(w,r){r?w.style.display="block":w.style.display="none"
};
q.prototype.isVisible=function(w){var r=w.getBoundingClientRect();
w=w.closest(".tabs__list").getBoundingClientRect();
return Math.trunc(r.left)>=Math.trunc(w.left)&&Math.trunc(r.right)<=Math.trunc(w.right)
};
q.prototype.setScrollLimits=function(L){var J=this,H=L.target;
L=am.util.hasClass(H,"tabs__arrow--left")?"left":"right";
var I=H.parentNode.querySelectorAll(".tabs__list-item"),D=H.parentNode.querySelector(".tabs__list"),E=H.parentNode.offsetWidth;
E=[].concat($jscomp.arrayFromIterable(I)).reduce(function(N,M,O){return 1===O?N.offsetWidth+M.offsetWidth:N+M.offsetWidth
})-E;
var C=I[0],z=C.offsetWidth;
C=parseInt(C.getAttribute("data-position"),10);
var G=am.util.hasClass(D,"tabs__align--left"),r=am.util.hasClass(D,"tabs__align--center");
D=am.util.hasClass(D,"tabs__align--right");
var w=0;
"left"===L?(w=isNaN(C)?z:C+z,G?w=0<w?0:w:r?w=Math.abs(w)>E/2?E/2:w:D&&(w=Math.abs(w)>E?E:w)):(w=isNaN(C)?-1*z:C-z,G?w=Math.abs(w)>E?-1*E:w:r?w=Math.abs(w)>E/2?E/2*-1:w:D&&(w=0>w?0:w));
I.forEach(function(M){M.setAttribute("data-position",w);
M.style.left=w+"px"
});
setTimeout(function(){J.hideOrShowArrows([H.parentNode])
},300)
};
q.prototype.clearTabsMovement=function(){document.querySelectorAll(".tabs__list-item").forEach(function(r){return r.removeAttribute("style")
})
};
am.util.Tabs=new q;
return am.util.Tabs
})();
var n=function(){var q=function(E,D){for(var H=[],G=1;
G<arguments.length;
++G){H[G-1]=arguments[G]
}return E&&E.classList&&E.classList.add.apply(E.classList,[].concat($jscomp.arrayFromIterable(H)))
},r=function(E,D){for(var H=[],G=1;
G<arguments.length;
++G){H[G-1]=arguments[G]
}return E&&E.classList&&E.classList.remove.apply(E.classList,[].concat($jscomp.arrayFromIterable(H)))
},C=function(E,D){return E&&E.classList&&E.classList.toggle(D)
},w=function(E,D){return E&&E.classList&&E.classList.contains(D)
},z=function(G,E,D){return G&&G.classList?(setTimeout(function(){r(G,E)
},D),q(G,E)):!1
};
am.util.addClass=q;
am.util.removeClass=r;
am.util.toggleClass=C;
am.util.hasClass=w;
am.util.addTemporaryClass=z;
return{addClass:q,removeClass:r,toggleClass:C,hasClass:w,addTemporaryClass:z}
}();
(function(){var q=document.querySelectorAll(".test-variation-wrapper"),r=[],w=function(){};
w.prototype.init=function(){for(var D=$jscomp.makeIterator(q),C=D.next();
!C.done;
C=D.next()){C=C.value;
var z=0!==parseInt(C.getAttribute("data-timeout.override"),10)?parseInt(C.getAttribute("data-timeout.override"),10):2000;
r.push(setTimeout(this.displayDefault.bind(this,C),z))
}};
w.prototype.displayDefault=function(z){n.addClass(z.querySelector(".id-default"),"active");
return this
};
w.prototype.displayAlternate=function(z,G){for(var E,D=$jscomp.makeIterator(q),C=D.next();
!C.done;
C=D.next()){C=C.value,C.classList.contains("test-id-"+z)&&(E=C)
}if(E.querySelector(".id-"+G)){z=E.querySelectorAll(".active");
z=$jscomp.makeIterator(z);
for(C=z.next();
!C.done;
C=z.next()){n.removeClass(C.value,"active")
}G=E.querySelector(".id-"+G);
n.addClass(G,"active");
this.clearDefualtTimeout(E)
}return this
};
w.prototype.clearDefualtTimeout=function(z){r[Array.prototype.indexOf.call(q,z)]?clearTimeout(r[Array.prototype.indexOf.call(q,z)]):setTimeout(this.clearDefualtTimeout.bind(this,z),100)
};
am.util.TestVariation=new w;
return am.util.TestVariation
})();
(function(){var q=jq(".webinar-detail"),r=q.find(".webinar-title"),D=q.find(".webinar-times"),z=q.find(".webinar-desc"),C=am.util.Page.getQuerystring("webinar"),w=function(){q.length&&(C?this.getDetails():this.showDetails())
};
w.prototype.getDetails=function(){var E=this,I=q.attr("data-pd"),H=q.attr("data-cd"),G=[];
jq.when(jq.get(I),jq.get(H)).done(function(J,L){J=Array.isArray(J[0])?J[0]:[];
L=Array.isArray(L[0])?L[0]:[];
G=J.concat(L);
E.renderDetails(G)
})
};
w.prototype.renderDetails=function(E){var H=this,G=this.getWebinar(E);
G&&(G.times&&jq.get("/etc/designs/onedomain/clientlibs_common/js/libs/moment-all.min.js").done(function(){window.moment&&H.renderTimes(G.times)
}),G.subject&&r&&r.find("h1").html(G.subject),G.description&&z&&z.find("p").html(G.description));
this.showDetails()
};
w.prototype.getWebinar=function(G){var E=0;
if(G.length){for(E;
E<G.length;
E++){if(G[E].webinarKey===C){return G[E]
}if(E==G.length-1){return !1
}}}};
w.prototype.renderTimes=function(O){var N=moment(),M=jq("html").attr("lang").toLowerCase(),L=jq("#webinar-show-dates"),J=moment.tz.guess(),I=jq('input[name\x3d"registrant.timeZone"]');
var H=[];
var G={},E=[];
moment.locale(M);
if(0<O.length){if(1!==O.length){for(M=0;
M<O.length;
M++){moment(O[M].startTime),N.isSameOrBefore(O[M].endTime)&&H.push(O[M])
}}0===H.length&&H.push(O[O.length-1]);
for(O=0;
O<H.length;
O++){E.push(moment(H[O].startTime).tz(J).format("llll")+" - "+moment(H[O].endTime).tz(J).format("LT")+" "+moment(H[O].endTime).tz(J).format("z"))
}D.find("p").prepend(E[0]);
1<E.length&&(E.shift(),G.dates=E,H=Mustache.render('\x3cdiv class\x3d"webinar-other-dates hidden"\x3e{{#dates}}\x3cp\x3e{{.}}\x3c/p\x3e{{/dates}}\x3c/div\x3e',G),D.append(H),L.removeClass("hidden"),document.getElementById("webinar-show-dates").addEventListener("click",function(P){P.preventDefault();
jq(".webinar-other-dates").toggleClass("hidden")
}))
}0<I.length&&I.val(J)
};
w.prototype.showDetails=function(){jq(".webinar-detail .text \x3e div").show()
};
window.PS.util.WebinarDetails=new w;
return w
})();
(function(){var q=jq(".webinar-list-content"),r=function(){q.length&&this.getList()
};
r.prototype.getList=function(){var w=this,D=q.attr("data-pd"),C=q.attr("data-cd"),z=[];
jq.when(jq.get(D),jq.get(C),jq.get("/etc/designs/onedomain/clientlibs_common/js/libs/moment-all.min.js")).done(function(E,G){E=Array.isArray(E[0])?E[0]:[];
G=Array.isArray(G[0])?G[0]:[];
z=E.concat(G);
w.renderList(z)
})
};
r.prototype.renderList=function(O){var N=jq("html").attr("lang").toLowerCase(),M=q.attr("data-num"),I=q.attr("data-link"),J,H=0,G=0,L=[],D="\x3cul\x3e";
if(O&&window.moment){var E=moment();
var C=moment.tz.guess();
moment.locale(N);
for(J in O){if(O.hasOwnProperty(J)){var z={};
N=[];
z.subject=O[J].subject;
z.webinarKey=O[J].webinarKey;
var P=O[J].times.length;
if(1<P){for(H;
H<P;
H++){E.isBefore(O[J].times[H].endTime)&&(N.push(O[J].times[H]),1===N.length&&(z.next=O[J].times[H]))
}z.times=N;
z.next&&L.push(z)
}else{E.isBefore(O[J].times[0].endTime)&&(z.times=O[J].times,z.next=O[J].times,L.push(z))
}}}M<L.length&&(L=L.splice(0,M));
for(G;
G<L.length;
G++){D+='\x3cli\x3e\x3ca href\x3d"'+I+"?webinar\x3d"+L[G].webinarKey+'"\x3e\x3ch4\x3e'+L[G].subject+'\x3c/h4\x3e\x3cp class\x3d"webinar-list-time"\x3e'+moment(L[G].next[0].startTime).tz(C).format("llll")+" - "+moment(L[G].next[0].endTime).tz(C).format("LT")+" "+moment(L[G].next[0].endTime).tz(C).format("z")+"\x3c/p\x3e\x3c/a\x3e\x3c/li\x3e"
}D+="\x3c/ul\x3e";
q.find(".text").append(D)
}};
window.PS.util.WebinarDetails=new r;
return r
})()
})(window.PS);
window.PS=window.PS||{};
PS.util=PS.util||{};
(function(b){var a=function(){var e=new b.util.ImageLoader();
dlog("IG: running functions that should run on AJAX page load");
b.util.DeviceUtil.anchorOffset();
e.loadImagesInView();
b.util.Scene7.init();
b.util.BCPlayer.init();
b.util.BCPlayer.initCalls();
b.util.initMasonry();
jq(window).on("orientationchange",function(){b.util.BCPlayer.reloadPlayer()
});
b.util.activateVisiblePicturefills();
if(!b.core.CQMode.inEdit){var c=new b.util.Clickable();
b.util.Accordion.init()
}};
b.util.PageLoad=a
}(PS));
jq(document).ready(function(){dlog("IG: DOM ready, running common functions");
PS.util.ReplaceLoginLinks.init();
PS.util.Segment.accountLinkReplace();
PS.util.CountrySpecific.init();
PS.util.DeviceUtil.init();
PS.util.MainMenu.init();
PS.util.LiveVideoSchedule.init();
loadCountriesList=new PS.util.loadCountriesList();
docWrite=new PS.core.docWrite();
PS.util.Navigation.init();
PS.util.DatesReplacer.applyBindings();
launchEvidonCookieManager=new PS.util.LaunchEvidonCookieManager();
var a=new PS.util.LiveVideoCheck();
a.go();
PS.util.Donut.scaffold();
PS.util.ExitIntent.trigger();
PS.util.ExitIntent.onTrigger();
if(PS.util.TableScroll){PS.util.TableScroll()
}if(jq("body").hasClass("campaign-page")||jq("body").hasClass("video-bg-cover")){promoCampaign=new PS.util.promoCampaign()
}if(PS.core.LivePrices){PS.core.LivePrices.init()
}if(window.PS.util.Personalisation){window.PS.util.Personalisation.somethingDisplayedValidation()
}if(window.PS.util.DateInput){window.PS.util.DateInput.applyPolyfillIfRequired()
}if(PS.util.NetworkStrip){PS.util.NetworkStrip.init()
}if(PS.util.LaunchPlatform){PS.util.LaunchPlatform.init()
}if(PS.util.FormPrePopulate){PS.util.FormPrePopulate.init()
}if(PS.util.ToggleContent){PS.util.ToggleContent.init()
}if(PS.util.AffiliateAppsFlyer){PS.util.AffiliateAppsFlyer.init()
}if(window.PS.util.MarketingAquisition){window.PS.util.MarketingAquisition.init()
}if(PS.util.DemoCreator){PS.util.DemoCreator.init()
}if(PS.util.ResponsiveTable){PS.util.ResponsiveTable.init()
}if(PS.util.Signicat){PS.util.Signicat.init()
}if(PS.util.InformationPopup){PS.util.InformationPopup.init()
}PS.ItemFinder.start(PS.ShareFinder,".sharefinder-search.sharefinder-search-type");
PS.ItemFinder.start(PS.ShortReport,".sharefinder-search.shortreport-search-type");
PS.ItemFinder.start(PS.MarketFinder,".sharefinder-search.marketfinder-search-type");
if(!PS.core.CQMode.inEdit){shareMailUrl=new PS.util.shareMailUrl();
shareBannerLinks=new PS.util.ShareBannerLinks();
bookmark1=new PS.util.Bookmark();
if(window.PS.util.ToolipPopup){window.PS.util.ToolipPopup.init()
}if(window.PS.util.MarketCompare){window.PS.util.MarketCompare.init()
}if(window.PS.util.Tabs){window.PS.util.Tabs.init()
}if(PS.util.BackToTop){new PS.util.BackToTop()
}}loadParallax=new PS.util.loadParallax();
loadComplianceOverlay=new PS.util.loadComplianceOverlay();
PS.util.PageLoad()
});
jq(window).on("load",function(){window.onpageshow=function(b){if(b.persisted){window.location.reload()
}};
dlog("IG: Document fully loaded, running final functions");
linkReference=new PS.util.LinkReference();
makeCurrencyPairClickable=new PS.util.makeCurrencyPairClickable();
if(!!PS.core.IntegratedMarketSearch){new PS.core.IntegratedMarketSearch()
}if(!!PS.util.marketSearchReload){new PS.util.marketSearchReload()
}if(!!PS.util.SimpleSearch){new PS.util.SimpleSearch()
}if(!!PS.util.SwiftypeSearch){PS.util.SwiftypeSearch.init()
}if(!!PS.util.CommunitySearch){PS.util.CommunitySearch.init()
}if(!!PS.util.TestVariation){PS.util.TestVariation.init()
}if(!PS.core.CQMode.inEdit){if(!PS.startup.isInApp()){activateGoogleplus=new PS.util.ActivateGoogleplus()
}if(PS.core&&PS.core.mPanel){PS.core.mPanel.prototype.navigateToTabIfRequired()
}}if(!PS.core.CQMode.inAuthor){window.PS.util.idCookie.init();
eventSubscription=new PS.tracking.SubscribeToEvents();
if(!PS.startup.isInApp()){var a=new PS.util.LiveChat();
PS.util.EngHouseLiveChat.init()
}if(window.PS.tracking&&PS.SiteCatalyst){window.PS.tracking.getUniqueId()
}}else{PS.util.pubsub.publish("tandt.responded",null);
PS.util.pubsub.publish("tandt.finished");
PS.util.EngHouseLiveChat.checkMultipleConfigurationInstances()
}});
PS.util.pubsub.subscribe("tandt.newContentLoaded",PS.util.PageLoad);
window.PS=window.PS||{};
(function(b){function a(){this.jquery_element=arguments[0];
this.positions=arguments[1];
this.label=this.jquery_element.attr("data-i18n-long")||"Long";
this.percentage=this.positions.longPercent;
this.css_class="doughnut-long";
if(this.positions.longPercent<50){this.label=this.jquery_element.attr("data-i18n-short")||"Short";
this.percentage=100-this.positions.longPercent;
this.css_class="doughnut-short"
}}a.prototype.draw=function(){this.jquery_element.addClass(this.css_class).css("background-image","url(/etc/designs/onedomain/images/doughnuts/"+this.positions.longPercent+".png)").html('<span class="doughnut-label">'+this.label+'</span><span class="doughnut-percentage">'+this.percentage+"%</span>")
};
b.Doughnut=a
})(PS);
(function(b){var a=b.Deferred();
b(".doughnut[data-feed]").each(function(c,f){a.pipe(function(e){return b.ajax({url:b(f).attr("data-feed")}).done(function(g){if(typeof g.positions!="undefined"){if(g.positions.longPercent==0&&g.positions.shortPercent==0){new PS.Doughnut(b(f),{longPercent:b(f).attr("data-long-default")||50}).draw()
}else{new PS.Doughnut(b(f),g.positions).draw()
}}else{new PS.Doughnut(b(f),{longPercent:b(f).attr("data-long-default")||50}).draw()
}}).fail(function(g){new PS.Doughnut(b(f),{longPercent:b(f).attr("data-long-default")||50}).draw()
})
})
});
a.resolve()
})(jq);
window.PS=window.PS||{};
window.PS.util=window.PS.util||{};
(function(e,l){function k(u){return Object.prototype.toString.call(u)==="[object Array]"
}function n(){var w=document.getElementById("g-recaptcha-response");
if(w==null||w.value.trim()==""){var u=JSON.parse(document.getElementsByName("captcha_settings")[0].value);
u.ts=JSON.stringify(new Date().getTime());
document.getElementsByName("captcha_settings")[0].value=JSON.stringify(u)
}}e.fn.serializeObject=function(){var w={};
var u=this.serializeArray();
e.each(u,function(){if(w[this.name]){if(!w[this.name].push){w[this.name]=[w[this.name]]
}w[this.name].push(this.value||"")
}else{w[this.name]=this.value||""
}});
return w
};
var g="invalid",j=".formField",p="label.error",h="error",a=".validateForm",q="validations",c=false,o={show:function(x,y,u){var w=x.parents(j);
if(w.find(p+"."+y).size()===0){w.append(w.parents("form").find(".fielderrors ."+y).clone());
if(y==="min"||y==="max"){w.find("."+y).append(u)
}}w.addClass(h);
if(!x.hasClass(g)){x.addClass(g);
if(!x.hasClass("checkbox")&&!x.hasClass("radio")){x.after("<span class='jsInsertedValidation cross-medium-red'></span>")
}}if(!x.hasClass(h+"-"+y)){x.addClass(h+"-"+y)
}},remove:function(x,z){var w=x.parents(j),u=z?"."+z:"",B=w.find(p+u),A=x.next(".jsInsertedValidation"),y=new RegExp(h+"-","g");
if(w.hasClass(h)){x.removeClass(h+"-"+z);
if(x.hasClass("multiname")){if(!x.attr("class").match(y)){x.removeClass(g);
A.remove()
}if(w.find("."+g).length===0){B.remove()
}if(w.find(p).length===0){w.removeClass(h)
}}else{B.remove();
if(w.find(p).length===0){x.removeClass(g);
w.removeClass(h);
A.remove()
}}}}},f={required:function(w,u){if(w.hasClass("checkbox")){if(!w.is(":checked")){o.show(w,u)
}else{o.remove(w,u)
}}else{if(w.hasClass("radio")){if(!e('input:radio[name="'+w.attr("name")+'"]:checked').val()){o.show(w,u);
return false
}else{o.remove(w,u);
return true
}}else{if(w.val()===""){o.show(w,u);
return false
}else{o.remove(w,u);
return true
}}}},min:function(x,u,w){if(u===""){return true
}else{if(x.val()&&x.val().length<u){o.show(x,w,u);
return false
}}o.remove(x,w);
return true
},max:function(x,u,w){if(u===""){return true
}else{if(x.val()&&x.val().length>u){o.show(x,w,u);
return false
}}o.remove(x,w);
return true
},alpha:function(w,u){if(w.val()&&!/^[a-zа-я\s]+$/i.test(w.val())){o.show(w,u);
return false
}o.remove(w,u);
return true
},alpha_num:function(w,u){if(w.val()&&!/^[a-za-я0-9\s]+$/i.test(w.val())){o.show(w,u);
return false
}o.remove(w,u);
return true
},numeric:function(w,u){if(w.val()&&!/^[\-+]?[0-9]+$/i.test(w.val())){o.show(w,u);
return false
}o.remove(w,u);
return true
},email:function(w,u){var x=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(w.val()&&!x.test(w.val())){o.show(w,u);
return false
}o.remove(w,u);
return true
},date:function(x,w){var u=/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,z=/^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/,y=/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
if(x.val()&&!u.test(x.val())&&!z.test(x.val())&&!y.test(x.val())){o.show(x,w);
return false
}o.remove(x,w);
return true
},phone:function(w,u){var x=/^\+?[0-9\-\s]+$/i;
if(!x.test(w.val())){o.show(w,u);
return false
}o.remove(w,u);
return true
},confirmation:function(x,u,w){if(u===""){return true
}else{if(x.val().trim()!==x.parents("form").find('[name="'+u+'"]').val().trim()){o.show(x,w);
return false
}}o.remove(x,w);
return true
}};
function b(){var w=e(a).data("recaptcha");
var u=function(){if(e(this).parents(j).hasClass(h)){b.prototype.validateElement(e(this));
b.prototype.validateFormGroups(e(this).parents("form"))
}};
e(j+" :input").not(".checkbox").on("keyup",u);
e(j+" :input").not(".checkbox").on("blur",u);
e(j+" :input.checkbox").on("click",u);
e(document).on("click keydown",j+" .button",function(x){if(x.type==="click"||x.keyCode===(l.events.KEYS.SPACE||l.events.KEYS.ENTER)){e(this).parents(a).submit();
return false
}return false
});
e(document).on("submit",a,function(){var x=e(this);
return b.prototype.triggerValidation(x)
});
if(w){l.util.getCachedScript("https://www.google.com/recaptcha/api.js").done(function(){setInterval(n,500)
})
}}function m(x){var w=x.find(".submit"),u=parseInt(x.data("disablesubmit"));
w.addClass("button-disabled");
w.on("click.buttonDisable",function(y){y.preventDefault();
y.stopPropagation();
y.stopImmediatePropagation()
});
if(u!==0){setTimeout(function(){w.off("click.buttonDisable");
w.removeClass("button-disabled")
},u)
}}b.prototype.triggerValidation=function(z){b.prototype.validateForm(z);
b.prototype.validateFormGroups(z);
z.find(".error.submit").remove();
if(z.find(j+".error").size()){z.find(j+".error:first :input.invalid:first").focus();
return false
}else{if(z.find(".Campaign_ID").size()){window.s.wa_linkTrack("reg_seminar")
}if(z.find("#loginbutton").size()){l.util.Cookie.set("sessionOpen","true",0.417,true)
}z.find("input:hidden").each(function(C,D){b.prototype.getValueFrom(z,D)
});
if(z.data("fieldgroups")){b.prototype.groupTo(z)
}if(z.data("ajax-submission")&&!c){var w=z.data("gotomeeting"),B=z.data("secondaction"),u=w&&!B?"https://"+l.util.Page.environment()+".ig.com/lc/prospectsource":B,A=function(D){var C=z.data("callbacks");
e.each(C,function(E,F){if(l.util.hasOwnProperty(F)&&typeof l.util[F]==="function"){l.util[F](D,z)
}else{if(l.core.hasOwnProperty(F)&&typeof l.core[F]==="function"){l.core[F](D,z)
}}});
if(z.data("disablesubmit")){m(z)
}},x=function(C){c=true;
A(C);
z.submit()
},y=function(D,F,E){var C=e('<label class="error submit">'+window.i18n["forms.submiterror"]+"</label>");
window.dlog("Ajax call failed: ",D,F,E);
z.append(C)
};
e.ajax({type:z.attr("method"),url:w||B?u:z.attr("action"),contentType:"application/json;charset=utf-8",data:b.prototype.getAjaxData(z),success:w||B?x:A,error:y});
return false
}return true
}};
b.prototype.validateForm=function(u){u.find(":input").each(function(){b.prototype.validateElement(e(this))
})
};
b.prototype.createFormFieldsMap=function(x){var w={},u=e(x);
if(u.data(q)){w[u.attr("id")]=u.data(q).trim()
}return w
};
b.prototype.validateElement=function(w){var u=b.prototype.createFormFieldsMap(w),x=this.parseOptionsRules(u);
this.addValidation(w,x)
};
b.prototype.addValidationRule=function t(u,x){var w=u.data(q);
if(!!w){if(w.indexOf(x)===-1){u.data(q,w+"|"+x)
}}else{u.data(q,x)
}};
b.prototype.removeValidationRule=function t(u,x){var w=u.data(q);
if(!!w){if(w.indexOf("|"+x)>-1){u.data(q,w.replace("|"+x,""))
}else{u.data(q,w.replace(x,""))
}}};
b.prototype.removeValidation=function r(u,w){o.remove(u,w)
};
b.prototype.addValidation=function(x,y){var u=x.attr("id"),w;
if(y[u]){w=y[u];
e.each(w,function(B,C){if(k(C)){var A=C[0].trim(),z=C[1].trim();
f[A](x,z,A)
}else{C=C.trim();
if(C){f[C](x,C)
}}})
}};
b.prototype.parseOptionsRules=function(w){var A={},y=null;
for(var z in w){y=w[z].split("|");
for(var x=0,u=y.length;
x<u;
x++){if(/(min)+/ig.test(y[x])||/(max)+/ig.test(y[x])||/(confirmation)/ig.test(y[x])){y[x]=y[x].split(":")
}}A[z]=y
}return A
};
b.prototype.groupTo=function(y){var w=y.data("fieldgroups").split("|"),A=y.data("groupseparator")||"|",x,u="",z;
e.each(w,function(B,C){x=y.find('[name="'+C+'"]');
u="";
e.each(y.find("[name^="+C+"]").not("[type=hidden]"),function(D,E){z=e(E);
if(D>0&&(!z.is(":radio")||(u&&z.is(":radio:checked")))){u+=A
}if(z.is(":checked")||(!z.is(":radio")&&!z.is(":checkbox")&&E.value)){u+=E.value
}});
x.val(u)
})
};
b.prototype.validateFormGroups=function(w){var u,y,x;
if(w.data("fieldgroups")){u=w.data("fieldgroups").split("|");
e.each(u,function(z,A){x=w.find("[name^="+A+"]").not("[type=hidden]");
if(x.parents(j+".error").length<x.length){e.each(x,function(B,C){y=e(C);
if(y.parents(j+".error").length>0&&(y.is(":checkbox")||!y.val())){o.remove(y)
}})
}})
}};
b.prototype.getValueFrom=function(y,x){var w=e(x).data("getvaluefrom"),u="",z="";
if(w){if(w.indexOf("$")===0){u=w.replace("$","");
if(l.util.url.getQueryStringParameter(u)){l.util.Cookie.set(u,l.util.url.getQueryStringParameter(u),30)
}x.value=l.util.Cookie.get(u)||"";
return false
}else{if(w.indexOf("?")===0){z=w.replace("?","");
x.value=l.util.url.getQueryStringParameter(z)||"";
return false
}}x.value=y.find('[name="'+w+'"]').val()
}};
b.prototype.getAjaxData=function(y){var u=y.data("gotomeeting"),z=y.serializeObject(),x="",w="";
if(u){z.prospectClient={}
}e.each(z,function(A,B){x=y.find('[name="'+A+'"]');
w=x.data("secondname");
if(x.data("removefromcall")||w){delete z[A]
}if(w){if(u&&x.hasClass("clientField")){if(B!==""){z.prospectClient[w]=B
}}else{z[w]=B
}}});
return JSON.stringify(z)
};
l.util.FormValidation=b
}(window.jQuery,window.PS));
window.PS=window.PS||{};
PS.util=PS.util||{};
PS.storage=PS.storage||{};
PS.storage.LocalQueue=PS.storage.LocalQueue||{};
(function(f,e){var c;
function a(){var h=document.getElementById("g-recaptcha-response");
if(h==null||h.value.trim()==""){var g=JSON.parse(document.getElementsByName("captcha_settings")[0].value);
g.ts=JSON.stringify(new Date().getTime());
document.getElementsByName("captcha_settings")[0].value=JSON.stringify(g)
}}function b(){c=this;
c.init()
}b.prototype.init=function(){var g=jq(".leadCaptureForm");
var h=g.data("recaptcha");
g.find("select").on("change",function(){jq(this).blur()
});
jq(document).on("click keydown",".leadCaptureForm .cta .button",function(m){var n=jq(this).parents(".leadCaptureForm");
if(jq(".ie7").size()==1){var l="/etc/designs/onedomain/0/clientlibs_ps_part/js/libs/json2.js";
jq.ajax({url:l,async:false})
}if((m.type=="click")||(m.keyCode==(32||13))){f.util.FormValidation.prototype.validateForm(n);
if(n.find(".formField.error").size()){n.find(".formField.error:first :input.invalid:first").focus();
return false
}else{if(n.find(".campaignId").size()){s.wa_linkTrack("reg_seminar")
}var j=c.createProspectSourceObject(n);
var k=JSON.stringify(j);
if(window.location.search.indexOf("lc_debug")>0){console.log(k)
}else{c.sendData(k,n)
}return false
}}});
if(h){f.util.getCachedScript("https://www.google.com/recaptcha/api.js").done(function(){setInterval(a,500)
})
}};
b.prototype.createProspectSourceObject=function(l){var h={};
var j=l.data("typeform");
var g,k;
l.find(".sourceField").each(function(){g=this["name"];
k=this["value"];
if(this.className.indexOf("checkbox")>-1){k=(this.checked)
}h[g]=k
});
h.prospectClient=c.createProspectClientObject(l);
if(j==="salesforce_raf"){h.referAFriend=c.createReferAFriendObject(l)
}return h
};
b.prototype.createProspectClientObject=function(h){var g={};
h.find(".clientField").each(function(){var j=this["name"];
var l=this["value"];
if(this.className.indexOf("checkbox")>-1){l=(this.checked)
}if(j==="dateOfBirth"&&l!==""){var k=l.match(/(\d{2})\/(\d{2})\/(\d{4})/);
l=Date.UTC(+k[3],k[2]-1,+k[1])
}g[j]=l
});
return g
};
b.prototype.createReferAFriendObject=function(k){var h={};
var g,j;
k.find(".rafField").each(function(){g=this["name"];
j=this["value"];
h[g]=j
});
return h
};
b.prototype.sendData=function(m,h){var n=h.parents(".field-set");
var k=n.hasClass("inProgress");
var o=h.find(".form-submiterror");
var j=this;
if(!k){n.addClass("inProgress");
var g=h.find("#returnUrl").val();
var p=h.attr("action");
if(e.storeUnique!==undefined){e.storeUnique("leadCaptureUserInfo",m)
}var l=jq.ajax({type:"POST",url:p,data:m,contentType:"application/json; charset=utf-8"});
l.done(function(q){n.removeClass("inProgress");
o.hide();
console.log("Lead capture message: "+q);
if(!!j.callbackFunction){j.callbackFunction(q)
}if(g){e.store("ctaTrack",{leadCapture:q},true);
document.location.href=g
}else{f.SiteCatalyst.tracker.wa_ctaTrack(q)
}});
l.fail(function(r,q){n.removeClass("inProgress");
o.show();
console.log("An error has occurred. Status: "+q)
})
}};
b.prototype.attachLeadCaptureCallback=function(g){this.callbackFunction=g
};
f.util.LeadCapture=b
}(PS,PS.storage.LocalQueue));
window.PS=window.PS||{};
PS.core=PS.core||{};
(function(g){var j=0;
var l=6;
var k="";
var c=[];
var f=0;
var e="";
var h="";
var b="en_GB";
function a(){a.prototype.init()
}a.prototype.init=function(){if(jq("#market-search-snippet").length){k=g.util.Page.getQuerystring("q")||"";
j=g.util.jspVars.get("defaultNumMarketResult")||l;
if(!!k&&!!j){a.prototype.executeSearch()
}}};
a.prototype.executeSearch=function(){var o=jq("#market-search-snippet"),n=jq(".ig-custom-search");
b=o.data("locale");
var m=a.prototype.compileQuery();
if(!!m){jq.ajax({url:m}).done(function(q){o.hide();
c=q.searchResults;
f=q.documentsMatched;
var p=c.slice(0,j);
if(p.length){a.prototype.updateResult(p);
if(n.length>0){n.addClass("ig-custom-search-share")
}o.fadeIn(1000)
}else{jq(".no-page-results").css({visibility:"visible"})
}}).fail(function(){jq(".no-page-results").css({visibility:"visible"})
})
}};
a.prototype.compileQuery=function(){var o="/apps/onedomain/components/layout-search/marketSearch.mock.json?search";
var n=window.location.pathname.split("/");
var m=n[1];
e="/marketanalysis/ig-proxy/marketsearch/search";
if(m==="t"){h="/t/"+n[2]+"/ig-search"
}else{h="/"+m+"/ig-search"
}if(!!k){return e+"?query="+k+"&page_number=1&page_size="+l+"&user_locale="+b
}return""
};
a.prototype.updateResult=function(p){jq("#link-related-search a").attr("href",h+"?query="+k);
jq("#link-market-search a").attr("href",h+"?query="+k);
var n=jq("#market-search-results").find("tbody");
if(n.length){n.empty();
for(var o=0;
o<p.length;
o++){var m=p[o];
var q=jq('<tr><td class="market-name"><a href=".'+m.url+'">'+m.name+'</a></td><td class="market-type">'+m.marketType+"</td></tr>");
q.css({cursor:"pointer"});
q.click({url:m.url},function(t){window.location.href="."+t.data.url
});
n.append(q)
}if(!!k&&p.length<c.length){var r=jq("#link-market-search a");
if(r.length){r.css({visibility:"visible"})
}}}};
g.core.IntegratedMarketSearch=a
}(PS));
window.PS=window.PS||{};
window.PS.util=window.PS.util||{};
(function(j,h){var g=".gsc-search-box",c=".gsc-search-button",e="input.gsc-input",b=".ig-custom-search",f="ig-custom-search-share";
function a(){this.setBinds()
}a.prototype.setBinds=function(){var k=this;
j(g).off("click.marketSearch").on("click.marketSearch",c,this.reload.bind(this));
j(g).off("keyup.marketSearch").on("keyup.marketSearch",e,function(l){if(l.keyCode===h.events.KEYS.ENTER){k.reload()
}})
};
a.prototype.setQuery=function(){var k=j(g+" "+e).val();
j("#analytics-search-results").attr("data-keyword",k);
j(b).removeClass(f)
};
a.prototype.reload=function(){this.setQuery();
if(!!h.core.IntegratedMarketSearch){new h.core.IntegratedMarketSearch()
}};
h.util.marketSearchReload=a
}(window.jQuery,window.PS));
(function(){function a(){var b=PS.util.jspVars.get("defaultQpidWeighting");
this.getDefaultValue=function(){return b
}
}a.prototype.parseQpidMap=function(e,b){var c;
if(Array.isArray(e)){c=e[0]
}else{c=e
}return(typeof c[b]==="undefined"?this.getDefaultValue():c[b])
};
a.prototype.getQpidValue=function(b,c){jq.ajax({url:PS.util.jspVars.get("qpidMapping"),dataType:"json",type:"GET",error:function(){c(this.getDefaultValue())
}.bind(this),success:function(e){c(this.parseQpidMap(e,b))
}.bind(this),timeout:PS.util.jspVars.get("qpidMappingTimeout")})
};
a.prototype.getQpidValueFromCookie=function(e){var b;
var c;
if(PS.util&&PS.util.Cookie){b=PS.util.Cookie.get("qpid");
b=b===null||typeof b==="undefined"?"":b;
if(typeof b==="string"){c=b.indexOf(",");
if(c>-1){b=b.substring(0,c)
}}if(b!==""){return this.getQpidValue(b,e)
}}e(this.getDefaultValue())
};
window.PS=window.PS||{};
window.PS.PPC=window.PS.PPC||{};
PS.PPC.amo=new a()
}());
jq(document).ready(function(){dlog("IG: running ps-page-only page load functions");
if(!PS.core.CQMode.inEdit){mPanel=new PS.core.mPanel();
formvalidation=new PS.util.FormValidation();
leadcapture=new PS.util.LeadCapture();
PS.events.attachEventHandlerToWrapper()
}});
window.PS=window.PS||{};
PS.core=PS.core||{};
(function(b){function a(c,e){this._sitecat=c;
this._performance=e
}a.CONTENT_READY={key:"eVar42",start:"domContentLoadedEventStart",end:"domContentLoadedEventEnd"};
a.LOAD={key:"eVar43",start:"fetchStart",end:"loadEventStart"};
a.FIRST_BYTE={key:"eVar47",start:"navigationStart",end:"responseStart"};
a.prototype._sitecat=null;
a.prototype._performance=null;
a.prototype.setTiming=function(f){if(typeof IG_WA=="undefined"){var e=this._performance?this._performance.timing:null,c=0;
if(!!e){c=e[f.end]-e[f.start];
if(c>=0){this._sitecat[f.key]=""+c
}}}};
b.core.SiteCatTimings=a
}(PS));
function AppMeasurement_Module_ActivityMap(n){function l(f,g){var e,m,k;
if(f&&g&&(e=o.c[g]||(o.c[g]=g.split(",")))){for(k=0;
k<e.length&&(m=e[k++]);
){if(-1<f.indexOf(m)){return null
}}}c=1;
return f
}function b(z,t,y,x,r){var q,p;
if(z.dataset&&(p=z.dataset[t])){q=p
}else{if(z.getAttribute){if(p=z.getAttribute("data-"+y)){q=p
}else{if(p=z.getAttribute(y)){q=p
}}}}if(!q&&n.useForcedLinkTracking&&r&&(q="",t=z.onclick?""+z.onclick:"")){y=t.indexOf(x);
var f,m;
if(0<=y){for(y+=10;
y<t.length&&0<="= \t\r\n".indexOf(t.charAt(y));
){y++
}if(y<t.length){p=y;
for(f=m=0;
p<t.length&&(";"!=t.charAt(p)||f);
){f?t.charAt(p)!=f||m?m="\\"==t.charAt(p)?!m:0:f=0:(f=t.charAt(p),'"'!=f&&"'"!=f&&(f=0)),p++
}if(t=t.substring(y,p)){z.e=new Function("s","var e;try{s.w."+x+"="+t+"}catch(e){}"),z.e(n)
}}}}return q||r&&n.w[x]
}function a(f,g,e){var k;
return(k=o[g](f,e))&&(c?(c=0,k):l(j(k),o[g+"Exclusions"]))
}function w(f,g,e){var k;
if(f&&!(1===(k=f.nodeType)&&(k=f.nodeName)&&(k=k.toUpperCase())&&u[k])&&(1===f.nodeType&&(k=f.nodeValue)&&(g[g.length]=k),e.a||e.t||e.s||!f.getAttribute||((k=f.getAttribute("alt"))?e.a=k:(k=f.getAttribute("title"))?e.t=k:"IMG"==(""+f.nodeName).toUpperCase()&&(k=f.getAttribute("src")||f.src)&&(e.s=k)),(k=f.childNodes)&&k.length)){for(f=0;
f<k.length;
f++){w(k[f],g,e)
}}}function j(e){if(null==e||void 0==e){return e
}try{return e.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+","mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+$","mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]{1,}","mg")," ").substring(0,254)
}catch(f){}}var o=this;
o.s=n;
var h=window;
h.s_c_in||(h.s_c_il=[],h.s_c_in=0);
o._il=h.s_c_il;
o._in=h.s_c_in;
o._il[o._in]=o;
h.s_c_in++;
o._c="s_m";
o.c={};
var c=0,u={SCRIPT:1,STYLE:1,LINK:1,CANVAS:1};
o._g=function(){var g,m,f,p=n.contextData,k=n.linkObject;
(g=n.pageName||n.pageURL)&&(m=a(k,"link",n.linkName))&&(f=a(k,"region"))&&(p["a.activitymap.page"]=g.substring(0,255),p["a.activitymap.link"]=128<m.length?m.substring(0,128):m,p["a.activitymap.region"]=127<f.length?f.substring(0,127):f,p["a.activitymap.pageIDType"]=n.pageName?1:0)
};
o.link=function(g,m){var e;
if(m){e=l(j(m),o.linkExclusions)
}else{if((e=g)&&!(e=b(g,"sObjectId","s-object-id","s_objectID",1))){var p,k;
(k=l(j(g.innerText||g.textContent),o.linkExclusions))||(w(g,p=[],e={a:void 0,t:void 0,s:void 0}),(k=l(j(p.join(""))))||(k=l(j(e.a?e.a:e.t?e.t:e.s?e.s:void 0)))||!(p=(p=g.tagName)&&p.toUpperCase?p.toUpperCase():"")||("INPUT"==p||"SUBMIT"==p&&g.value?k=l(j(g.value)):"IMAGE"==p&&g.src&&(k=l(j(g.src)))));
e=k
}}return e
};
o.region=function(f){for(var g,e=o.regionIDAttribute||"id";
f&&(f=f.parentNode);
){if(g=b(f,e,e,e)){return g
}if("BODY"==f.nodeName){return"BODY"
}}}
}function AppMeasurement_Module_Media(c){var a=this;
a.s=c;
c=window;
c.s_c_in||(c.s_c_il=[],c.s_c_in=0);
a._il=c.s_c_il;
a._in=c.s_c_in;
a._il[a._in]=a;
c.s_c_in++;
a._c="s_m";
a.list=[];
a.open=function(p,q,o,j){var n={},h=new Date,b="",m;
q||(q=-1);
if(p&&o){a.list||(a.list={});
a.list[p]&&a.close(p);
j&&j.id&&(b=j.id);
if(b){for(m in a.list){!Object.prototype[m]&&a.list[m]&&a.list[m].R==b&&a.close(a.list[m].name)
}}n.name=p;
n.length=q;
n.offset=0;
n.e=0;
n.playerName=a.playerName?a.playerName:o;
n.R=b;
n.C=0;
n.a=0;
n.timestamp=Math.floor(h.getTime()/1000);
n.k=0;
n.u=n.timestamp;
n.c=-1;
n.n="";
n.g=-1;
n.D=0;
n.I={};
n.G=0;
n.m=0;
n.f="";
n.B=0;
n.L=0;
n.A=0;
n.F=0;
n.l=!1;
n.v="";
n.J="";
n.K=0;
n.r=!1;
n.H="";
n.complete=0;
n.Q=0;
n.p=0;
n.q=0;
a.list[p]=n
}};
a.openAd=function(q,r,p,j,o,t,b,n){var m={};
a.open(q,r,p,n);
if(m=a.list[q]){m.l=!0,m.v=j,m.J=o,m.K=t,m.H=b
}};
a.M=function(b){var e=a.list[b];
a.list[b]=0;
e&&e.monitor&&clearTimeout(e.monitor.interval)
};
a.close=function(b){a.i(b,0,-1)
};
a.play=function(j,l,h,b){var g=a.i(j,1,l,h,b);
g&&!g.monitor&&(g.monitor={},g.monitor.update=function(){1==g.k&&a.i(g.name,3,-1);
g.monitor.interval=setTimeout(g.monitor.update,1000)
},g.monitor.update())
};
a.click=function(b,e){a.i(b,7,e)
};
a.complete=function(b,e){a.i(b,5,e)
};
a.stop=function(b,e){a.i(b,2,e)
};
a.track=function(b){a.i(b,4,-1)
};
a.P=function(t,u){var r="a.media.",m=t.linkTrackVars,p=t.linkTrackEvents,w="m_i",j,o=t.contextData,n;
u.l&&(r+="ad.",u.v&&(o["a.media.name"]=u.v,o[r+"pod"]=u.J,o[r+"podPosition"]=u.K),u.G||(o[r+"CPM"]=u.H));
u.r&&(o[r+"clicked"]=!0,u.r=!1);
o["a.contentType"]="video"+(u.l?"Ad":"");
o["a.media.channel"]=a.channel;
o[r+"name"]=u.name;
o[r+"playerName"]=u.playerName;
0<u.length&&(o[r+"length"]=u.length);
o[r+"timePlayed"]=Math.floor(u.a);
0<Math.floor(u.a)&&(o[r+"timePlayed"]=Math.floor(u.a));
u.G||(o[r+"view"]=!0,w="m_s",a.Heartbeat&&a.Heartbeat.enabled&&(w=u.l?a.__primetime?"mspa_s":"msa_s":a.__primetime?"msp_s":"ms_s"),u.G=1);
u.f&&(o[r+"segmentNum"]=u.m,o[r+"segment"]=u.f,0<u.B&&(o[r+"segmentLength"]=u.B),u.A&&0<u.a&&(o[r+"segmentView"]=!0));
!u.Q&&u.complete&&(o[r+"complete"]=!0,u.S=1);
0<u.p&&(o[r+"milestone"]=u.p);
0<u.q&&(o[r+"offsetMilestone"]=u.q);
if(m){for(n in o){Object.prototype[n]||(m+=",contextData."+n)
}}j=o["a.contentType"];
t.pe=w;
t.pev3=j;
var b,x;
if(a.contextDataMapping){for(n in t.events2||(t.events2=""),m&&(m+=",events"),a.contextDataMapping){if(!Object.prototype[n]){w=n.length>r.length&&n.substring(0,r.length)==r?n.substring(r.length):"";
j=a.contextDataMapping[n];
if("string"==typeof j){for(b=j.split(","),x=0;
x<b.length;
x++){j=b[x],"a.contentType"==n?(m&&(m+=","+j),t[j]=o[n]):"view"==w||"segmentView"==w||"clicked"==w||"complete"==w||"timePlayed"==w||"CPM"==w?(p&&(p+=","+j),"timePlayed"==w||"CPM"==w?o[n]&&(t.events2+=(t.events2?",":"")+j+"="+o[n]):o[n]&&(t.events2+=(t.events2?",":"")+j)):"segment"==w&&o[n+"Num"]?(m&&(m+=","+j),t[j]=o[n+"Num"]+":"+o[n]):(m&&(m+=","+j),t[j]=o[n])
}}else{if("milestones"==w||"offsetMilestones"==w){n=n.substring(0,n.length-1),o[n]&&a.contextDataMapping[n+"s"][o[n]]&&(p&&(p+=","+a.contextDataMapping[n+"s"][o[n]]),t.events2+=(t.events2?",":"")+a.contextDataMapping[n+"s"][o[n]])
}}o[n]&&(o[n]=0);
"segment"==w&&o[n+"Num"]&&(o[n+"Num"]=0)
}}}t.linkTrackVars=m;
t.linkTrackEvents=p
};
a.i=function(O,P,N,J,M){var Q={},I=(new Date).getTime()/1000,L,K,E=a.trackVars,C=a.trackEvents,B=a.trackSeconds,A=a.trackMilestones,z=a.trackOffsetMilestones,o=a.segmentByMilestones,j=a.segmentByOffsetMilestones,F,G,D=1,H={},b;
a.channel||(a.channel=a.s.w.location.hostname);
if(Q=O&&a.list&&a.list[O]?a.list[O]:0){if(Q.l&&(B=a.adTrackSeconds,A=a.adTrackMilestones,z=a.adTrackOffsetMilestones,o=a.adSegmentByMilestones,j=a.adSegmentByOffsetMilestones),0>N&&(N=1==Q.k&&0<Q.u?I-Q.u+Q.c:Q.c),0<Q.length&&(N=N<Q.length?N:Q.length),0>N&&(N=0),Q.offset=N,0<Q.length&&(Q.e=Q.offset/Q.length*100,Q.e=100<Q.e?100:Q.e),0>Q.c&&(Q.c=N),b=Q.D,H.name=O,H.ad=Q.l,H.length=Q.length,H.openTime=new Date,H.openTime.setTime(1000*Q.timestamp),H.offset=Q.offset,H.percent=Q.e,H.playerName=Q.playerName,H.mediaEvent=0>Q.g?"OPEN":1==P?"PLAY":2==P?"STOP":3==P?"MONITOR":4==P?"TRACK":5==P?"COMPLETE":7==P?"CLICK":"CLOSE",2<P||P!=Q.k&&(2!=P||1==Q.k)){M||(J=Q.m,M=Q.f);
if(P){1==P&&(Q.c=N);
if((3>=P||5<=P)&&0<=Q.g&&(D=!1,E=C="None",Q.g!=N)){K=Q.g;
K>N&&(K=Q.c,K>N&&(K=N));
F=A?A.split(","):0;
if(0<Q.length&&F&&N>=K){for(G=0;
G<F.length;
G++){(L=F[G]?parseFloat(""+F[G]):0)&&K/Q.length*100<L&&Q.e>=L&&(D=!0,G=F.length,H.mediaEvent="MILESTONE",Q.p=H.milestone=L)
}}if((F=z?z.split(","):0)&&N>=K){for(G=0;
G<F.length;
G++){(L=F[G]?parseFloat(""+F[G]):0)&&K<L&&N>=L&&(D=!0,G=F.length,H.mediaEvent="OFFSET_MILESTONE",Q.q=H.offsetMilestone=L)
}}}if(Q.L||!M){if(o&&A&&0<Q.length){if(F=A.split(",")){for(F.push("100"),G=K=0;
G<F.length;
G++){if(L=F[G]?parseFloat(""+F[G]):0){Q.e<L&&(J=G+1,M="M:"+K+"-"+L,G=F.length),K=L
}}}}else{if(j&&z&&(F=z.split(","))){for(F.push(""+(0<Q.length?Q.length:"E")),G=K=0;
G<F.length;
G++){if((L=F[G]?parseFloat(""+F[G]):0)||"E"==F[G]){if(N<L||"E"==F[G]){J=G+1,M="O:"+K+"-"+L,G=F.length
}K=L
}}}}M&&(Q.L=!0)
}(M||Q.f)&&M!=Q.f&&(Q.F=!0,Q.f||(Q.m=J,Q.f=M),0<=Q.g&&(D=!0));
(2<=P||100<=Q.e)&&Q.c<N&&(Q.C+=N-Q.c,Q.a+=N-Q.c);
if(2>=P||3==P&&!Q.k){Q.n+=(1==P||3==P?"S":"E")+Math.floor(N),Q.k=3==P?1:P
}!D&&0<=Q.g&&3>=P&&(B=B?B:0)&&Q.a>=B&&(D=!0,H.mediaEvent="SECONDS");
Q.u=I;
Q.c=N
}if(!P||3>=P&&100<=Q.e){2!=Q.k&&(Q.n+="E"+Math.floor(N)),P=0,E=C="None",H.mediaEvent="CLOSE"
}7==P&&(D=H.clicked=Q.r=!0);
if(5==P||a.completeByCloseOffset&&(!P||100<=Q.e)&&0<Q.length&&N>=Q.length-a.completeCloseOffsetThreshold){D=H.complete=Q.complete=!0
}I=H.mediaEvent;
"MILESTONE"==I?I+="_"+H.milestone:"OFFSET_MILESTONE"==I&&(I+="_"+H.offsetMilestone);
Q.I[I]?H.eventFirstTime=!1:(H.eventFirstTime=!0,Q.I[I]=1);
H.event=H.mediaEvent;
H.timePlayed=Q.C;
H.segmentNum=Q.m;
H.segment=Q.f;
H.segmentLength=Q.B;
a.monitor&&4!=P&&a.monitor(a.s,H);
a.Heartbeat&&a.Heartbeat.enabled&&0<=Q.g&&(D=!1);
0==P&&a.M(O);
D&&Q.D==b&&(O={contextData:{}},O.linkTrackVars=E,O.linkTrackEvents=C,O.linkTrackVars||(O.linkTrackVars=""),O.linkTrackEvents||(O.linkTrackEvents=""),a.P(O,Q),O.linkTrackVars||(O["!linkTrackVars"]=1),O.linkTrackEvents||(O["!linkTrackEvents"]=1),a.s.track(O),Q.F?(Q.m=J,Q.f=M,Q.A=!0,Q.F=!1):0<Q.a&&(Q.A=!1),Q.n="",Q.p=Q.q=0,Q.a-=Math.floor(Q.a),Q.g=N,Q.D++)
}}return Q
};
a.O=function(l,m,j,g,h){var b=0;
if(l&&(!a.autoTrackMediaLengthRequired||m&&0<m)){if(a.list&&a.list[l]){b=1
}else{if(1==j||3==j){a.open(l,m,"HTML5 Video",h),b=1
}}b&&a.i(l,j,g,-1,0)
}};
a.attach=function(g){var h,f,b;
g&&g.tagName&&"VIDEO"==g.tagName.toUpperCase()&&(a.o||(a.o=function(n,j,m){var l,k;
a.autoTrack&&(l=n.currentSrc,(k=n.duration)||(k=-1),0>m&&(m=n.currentTime),a.O(l,k,j,m,n))
}),h=function(){a.o(g,1,-1)
},f=function(){a.o(g,1,-1)
},a.j(g,"play",h),a.j(g,"pause",f),a.j(g,"seeking",f),a.j(g,"seeked",h),a.j(g,"ended",function(){a.o(g,0,-1)
}),a.j(g,"timeupdate",h),b=function(){g.paused||g.ended||g.seeking||a.o(g,3,-1);
setTimeout(b,1000)
},b())
};
a.j=function(f,h,g){f.attachEvent?f.attachEvent("on"+h,g):f.addEventListener&&f.addEventListener(h,g,!1)
};
void 0==a.completeByCloseOffset&&(a.completeByCloseOffset=1);
void 0==a.completeCloseOffsetThreshold&&(a.completeCloseOffsetThreshold=1);
a.Heartbeat={};
a.N=function(){var b,e;
if(a.autoTrack&&(b=a.s.d.getElementsByTagName("VIDEO"))){for(e=0;
e<b.length;
e++){a.attach(b[e])
}}};
a.j(c,"load",a.N)
}function AppMeasurement_Module_Integrate(a){var f=this;
f.s=a;
var b=window;
b.s_c_in||(b.s_c_il=[],b.s_c_in=0);
f._il=b.s_c_il;
f._in=b.s_c_in;
f._il[f._in]=f;
b.s_c_in++;
f._c="s_m";
f.list=[];
f.add=function(g,c){var e;
c||(c="s_Integrate_"+g);
b[c]||(b[c]={});
e=f[g]=b[c];
e.a=g;
e.e=f;
e._c=0;
e._d=0;
void 0==e.disable&&(e.disable=0);
e.get=function(j,q){var p=document,o=p.getElementsByTagName("HEAD"),n;
if(!e.disable&&(q||(v="s_"+f._in+"_Integrate_"+e.a+"_get_"+e._c),e._c++,e.VAR=v,e.CALLBACK="s_c_il["+f._in+"]."+e.a+".callback",e.delay(),o=o&&0<o.length?o[0]:p.body)){try{n=p.createElement("SCRIPT"),n.type="text/javascript",n.setAttribute("async","async"),n.src=f.c(e,j),0>j.indexOf("[CALLBACK]")&&(n.onload=n.onreadystatechange=function(){e.callback(b[v])
}),o.firstChild?o.insertBefore(n,o.firstChild):o.appendChild(n)
}catch(m){}}};
e.callback=function(h){var j;
if(h){for(j in h){Object.prototype[j]||(e[j]=h[j])
}}e.ready()
};
e.beacon=function(h){var j="s_i_"+f._in+"_Integrate_"+e.a+"_"+e._c;
e.disable||(e._c++,j=b[j]=new Image,j.src=f.c(e,h))
};
e.script=function(h){e.get(h,1)
};
e.delay=function(){e._d++
};
e.ready=function(){e._d--;
e.disable||a.delayReady()
};
f.list.push(g)
};
f._g=function(j){var c,g=(j?"use":"set")+"Vars";
for(j=0;
j<f.list.length;
j++){if((c=f[f.list[j]])&&!c.disable&&c[g]){try{c[g](a,c)
}catch(h){}}}};
f._t=function(){f._g(1)
};
f._d=function(){var e,c;
for(e=0;
e<f.list.length;
e++){if((c=f[f.list[e]])&&!c.disable&&0<c._d){return 1
}}return 0
};
f.c=function(n,h){var j,m,k,l;
"http"!=h.toLowerCase().substring(0,4)&&(h="http://"+h);
a.ssl&&(h=a.replace(h,"http:","https:"));
n.RAND=Math.floor(10000000000000*Math.random());
for(j=0;
0<=j;
){j=h.indexOf("[",j),0<=j&&(m=h.indexOf("]",j),m>j&&(k=h.substring(j+1,m),2<k.length&&"s."==k.substring(0,2)?(l=a[k.substring(2)])||(l=""):(l=""+n[k],l!=n[k]&&parseFloat(l)!=n[k]&&(k=0)),k&&(h=h.substring(0,j)+encodeURIComponent(l)+h.substring(m+1)),j=m))
}return h
}
}function AppMeasurement_Module_AudienceManagement(f){var e=this;
e.s=f;
var c=window;
c.s_c_in||(c.s_c_il=[],c.s_c_in=0);
e._il=c.s_c_il;
e._in=c.s_c_in;
e._il[e._in]=e;
c.s_c_in++;
e._c="s_m";
e.setup=function(a){c.DIL&&a&&(a.disableDefaultRequest=!0,a.disableScriptAttachment=!0,a.disableCORS=!0,a.secureDataCollection=!1,e.instance=c.DIL.create(a),e.tools=c.DIL.tools)
};
e.isReady=function(){return e.instance?!0:!1
};
e.getEventCallConfigParams=function(){return e.instance&&e.instance.api&&e.instance.api.getEventCallConfigParams?e.instance.api.getEventCallConfigParams():{}
};
e.passData=function(a){e.instance&&e.instance.api&&e.instance.api.passData&&e.instance.api.passData(a)
}
}"function"!==typeof window.DIL&&(window.DIL=function(aH,aG){var aE=[],aF,aw;
aH!==Object(aH)&&(aH={});
var ay,aA,al,ab,ap,au,af,ak,E,x,w,ao,an,aj,at;
ay=aH.partner;
aA=aH.containerNSID;
al=!!aH.disableDestinationPublishingIframe;
ab=aH.iframeAkamaiHTTPS;
ap=aH.mappings;
au=aH.uuidCookie;
af=!0===aH.enableErrorReporting;
ak=aH.visitorService;
E=aH.declaredId;
x=!0===aH.removeFinishedScriptsAndCallbacks;
w=!0===aH.delayAllUntilWindowLoad;
ao=!0===aH.disableIDSyncs;
an="undefined"===typeof aH.secureDataCollection||!0===aH.secureDataCollection;
aj=!0===aH.useCORSOnly;
at="boolean"===typeof aH.isCoopSafe?aH.isCoopSafe:null;
var o,l,ae,ai,j,h,c,b,ad;
o=!0===aH.disableScriptAttachment;
l=!0===aH.disableDefaultRequest;
ae=aH.afterResultForDefaultRequest;
ai=aH.dpIframeSrc;
j=!0===aH.testCORS;
h=!0===aH.useJSONPOnly;
c=aH.visitorConstructor;
b=!0===aH.disableCORS;
ad=aH.blacklistIELessThan9;
af&&DIL.errorModule.activate();
var ar=!0===window._dil_unit_tests;
(aF=aG)&&aE.push(aF+"");
if(!ay||"string"!==typeof ay){return aF="DIL partner is invalid or not specified in initConfig",DIL.errorModule.handleError({name:"error",message:aF,filename:"dil.js"}),Error(aF)
}aF="DIL containerNSID is invalid or not specified in initConfig, setting to default of 0";
if(aA||"number"===typeof aA){aA=parseInt(aA,10),!isNaN(aA)&&0<=aA&&(aF="")
}aF&&(aA=0,aE.push(aF),aF="");
aw=DIL.getDil(ay,aA);
if(aw instanceof DIL&&aw.api.getPartner()===ay&&aw.api.getContainerNSID()===aA){return aw
}if(this instanceof DIL){DIL.registerDil(this,ay,aA)
}else{return new DIL(aH,"DIL was not instantiated with the 'new' operator, returning a valid instance with partner = "+ay+" and containerNSID = "+aA)
}var aD={IS_HTTPS:an||"https:"===document.location.protocol,POST_MESSAGE_ENABLED:!!window.postMessage,MILLIS_PER_DAY:86400000,DIL_COOKIE_NAME:"AAMC_"+encodeURIComponent(ay)+"_"+aA,FIRST_PARTY_SYNCS:"AMSYNCS",FIRST_PARTY_SYNCS_ON_PAGE:"AMSYNCSOP",HAS_JSON_STRINGIFY:window.JSON===Object(window.JSON)&&"function"===typeof window.JSON.stringify,REGION:"REGION",SIX_MONTHS_IN_MINUTES:259200,IE_VERSION:function(){if(document.documentMode){return document.documentMode
}for(var f=7;
4<f;
f--){var e=document.createElement("div");
e.innerHTML="\x3c!--[if IE "+f+"]><span></span><![endif]--\x3e";
if(e.getElementsByTagName("span").length){return f
}}return null
}(),IS_IE_LESS_THAN_9_NOT_SUPPORTED:!1};
aD.IS_IE_LESS_THAN_9="number"===typeof aD.IE_VERSION&&9>aD.IE_VERSION;
aD.BLACKLIST_IE_LESS_THAN_9="undefined"!==typeof ad?ad:aD.IS_IE_LESS_THAN_9&&aD.IS_IE_LESS_THAN_9_NOT_SUPPORTED;
var ac={stuffed:{}},az={},aC={firingQueue:[],fired:[],firing:!1,sent:[],errored:[],reservedKeys:{sids:!0,pdata:!0,logdata:!0,callback:!0,postCallbackFn:!0,useImageRequest:!0},callbackPrefix:"demdexRequestCallback",firstRequestHasFired:!1,useJSONP:!0,abortRequests:!1,num_of_jsonp_responses:0,num_of_jsonp_errors:0,num_of_cors_responses:0,num_of_cors_errors:0,corsErrorSources:[],num_of_img_responses:0,num_of_img_errors:0,toRemove:[],removed:[],readyToRemove:!1,platformParams:{d_nsid:aA+"",d_rtbd:"json",d_jsonv:DIL.jsonVersion+"",d_dst:"1"},nonModStatsParams:{d_rtbd:!0,d_dst:!0,d_cts:!0,d_rs:!0},modStatsParams:null,adms:{TIME_TO_CATCH_ALL_REQUESTS_RELEASE:2000,calledBack:!1,mid:null,noVisitorAPI:!1,VisitorAPI:null,instance:null,releaseType:"no VisitorAPI",isOptedOut:!0,isOptedOutCallbackCalled:!1,admsProcessingStarted:!1,process:function(k){try{if(!this.admsProcessingStarted){this.admsProcessingStarted=!0;
var f=this,q,p,g,m;
if("function"===typeof k&&"function"===typeof k.getInstance){if(ak===Object(ak)&&(q=ak.namespace)&&"string"===typeof q){p=k.getInstance(q,{idSyncContainerID:aA})
}else{this.releaseType="no namespace";
this.releaseRequests();
return
}if(p===Object(p)&&p instanceof k&&"function"===typeof p.isAllowed&&"function"===typeof p.getMarketingCloudVisitorID&&"function"===typeof p.getCustomerIDs&&"function"===typeof p.isOptedOut){this.VisitorAPI=k;
if(!p.isAllowed()){this.releaseType="VisitorAPI not allowed";
this.releaseRequests();
return
}this.instance=p;
g=function(e){"VisitorAPI"!==f.releaseType&&(f.mid=e,f.releaseType="VisitorAPI",f.releaseRequests())
};
m=p.getMarketingCloudVisitorID(g);
if("string"===typeof m&&m.length){g(m);
return
}setTimeout(function(){"VisitorAPI"!==f.releaseType&&(f.releaseType="timeout",f.releaseRequests())
},this.getLoadTimeout());
return
}this.releaseType="invalid instance"
}else{this.noVisitorAPI=!0
}this.releaseRequests()
}}catch(n){this.releaseRequests()
}},releaseRequests:function(){this.calledBack=!0;
aC.registerRequest()
},getMarketingCloudVisitorID:function(){return this.instance?this.instance.getMarketingCloudVisitorID():null
},getMIDQueryString:function(){var f=ax.isPopulatedString,e=this.getMarketingCloudVisitorID();
f(this.mid)&&this.mid===e||(this.mid=e);
return f(this.mid)?"d_mid="+this.mid+"&":""
},getCustomerIDs:function(){return this.instance?this.instance.getCustomerIDs():null
},getCustomerIDsQueryString:function(g){if(g===Object(g)){var e="",n=[],m=[],f,k;
for(f in g){g.hasOwnProperty(f)&&(m[0]=f,k=g[f],k===Object(k)&&(m[1]=k.id||"",m[2]=k.authState||0,n.push(m),m=[]))
}if(m=n.length){for(g=0;
g<m;
g++){e+="&d_cid_ic="+aB.encodeAndBuildRequest(n[g],"%01")
}}return e
}return""
},getIsOptedOut:function(){this.instance?this.instance.isOptedOut([this,this.isOptedOutCallback],this.VisitorAPI.OptOut.GLOBAL,!0):(this.isOptedOut=!1,this.isOptedOutCallbackCalled=!0)
},isOptedOutCallback:function(e){this.isOptedOut=e;
this.isOptedOutCallbackCalled=!0;
aC.registerRequest()
},getLoadTimeout:function(){var e=this.instance;
if(e){if("function"===typeof e.getLoadTimeout){return e.getLoadTimeout()
}if("undefined"!==typeof e.loadTimeout){return e.loadTimeout
}}return this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE
}},declaredId:{declaredId:{init:null,request:null},declaredIdCombos:{},setDeclaredId:function(k,f){var q=ax.isPopulatedString,p=encodeURIComponent;
if(k===Object(k)&&q(f)){var g=k.dpid,m=k.dpuuid,n=null;
if(q(g)&&q(m)){n=p(g)+"$"+p(m);
if(!0===this.declaredIdCombos[n]){return"setDeclaredId: combo exists for type '"+f+"'"
}this.declaredIdCombos[n]=!0;
this.declaredId[f]={dpid:g,dpuuid:m};
return"setDeclaredId: succeeded for type '"+f+"'"
}}return"setDeclaredId: failed for type '"+f+"'"
},getDeclaredIdQueryString:function(){var f=this.declaredId.request,e=this.declaredId.init,k=encodeURIComponent,g="";
null!==f?g="&d_dpid="+k(f.dpid)+"&d_dpuuid="+k(f.dpuuid):null!==e&&(g="&d_dpid="+k(e.dpid)+"&d_dpuuid="+k(e.dpuuid));
return g
}},registerRequest:function(f){var e=this.firingQueue;
f===Object(f)&&e.push(f);
this.firing||!e.length||w&&!DIL.windowLoaded||(this.adms.isOptedOutCallbackCalled||this.adms.getIsOptedOut(),this.adms.calledBack&&!this.adms.isOptedOut&&this.adms.isOptedOutCallbackCalled&&(this.adms.isOptedOutCallbackCalled=!1,f=e.shift(),f.src=f.src.replace(/demdex.net\/event\?d_nsid=/,"demdex.net/event?"+this.adms.getMIDQueryString()+"d_nsid="),ax.isPopulatedString(f.corsPostData)&&(f.corsPostData=f.corsPostData.replace(/^d_nsid=/,this.adms.getMIDQueryString()+"d_nsid=")),am.fireRequest(f),this.firstRequestHasFired||"script"!==f.tag&&"cors"!==f.tag||(this.firstRequestHasFired=!0)))
},processVisitorAPI:function(){this.adms.process(c||window.Visitor)
},requestRemoval:function(g){if(!x){return"removeFinishedScriptsAndCallbacks is not boolean true"
}var e=this.toRemove,m,k;
g===Object(g)&&(m=g.script,k=g.callbackName,(m===Object(m)&&"SCRIPT"===m.nodeName||"no script created"===m)&&"string"===typeof k&&k.length&&e.push(g));
if(this.readyToRemove&&e.length){k=e.shift();
m=k.script;
k=k.callbackName;
"no script created"!==m?(g=m.src,m.parentNode.removeChild(m)):g=m;
window[k]=null;
try{delete window[k]
}catch(f){}this.removed.push({scriptSrc:g,callbackName:k});
DIL.variables.scriptsRemoved.push(g);
DIL.variables.callbacksRemoved.push(k);
return this.requestRemoval()
}return"requestRemoval() processed"
},getCoopQueryString:function(){var e="";
!0===at?e="&d_coop_safe=1":!1===at&&(e="&d_coop_unsafe=1");
return e
}};
aw=function(){var f="http://fast.",e="?d_nsid="+aA+"#"+encodeURIComponent(document.location.href);
if("string"===typeof ai&&ai.length){return ai+e
}aD.IS_HTTPS&&(f=!0===ab?"https://fast.":"https://");
return f+ay+".demdex.net/dest5.html"+e
};
var av={THROTTLE_START:30000,MAX_SYNCS_LENGTH:649,throttleTimerSet:!1,id:"destination_publishing_iframe_"+ay+"_"+aA,url:aw(),onPagePixels:[],iframeHost:null,getIframeHost:function(f){if("string"===typeof f){var e=f.split("/");
if(3<=e.length){return e[0]+"//"+e[2]
}aE.push("getIframeHost: url is malformed: "+f);
return f
}},iframe:null,iframeHasLoaded:!1,sendingMessages:!1,messages:[],messagesPosted:[],messagesReceived:[],messageSendingInterval:aD.POST_MESSAGE_ENABLED?null:100,ibsDeleted:[],jsonForComparison:[],jsonDuplicates:[],jsonWaiting:[],jsonProcessed:[],canSetThirdPartyCookies:!0,receivedThirdPartyCookiesNotification:!1,newIframeCreated:null,iframeIdChanged:!1,originalIframeHasLoadedAlready:null,regionChanged:!1,timesRegionChanged:0,attachIframe:function(){function f(){g=document.createElement("iframe");
g.sandbox="allow-scripts allow-same-origin";
g.title="Adobe ID Syncing iFrame";
g.id=k.id;
g.name=k.id+"_name";
g.style.cssText="display: none; width: 0; height: 0;";
g.src=k.url;
k.newIframeCreated=!0;
e();
document.body.appendChild(g)
}function e(){aB.addListener(g,"load",function(){g.className="aamIframeLoaded";
k.iframeHasLoaded=!0;
k.requestToProcess()
})
}if(!aD.BLACKLIST_IE_LESS_THAN_9){var k=this,g=document.getElementById(this.id);
g?"IFRAME"!==g.nodeName?(this.id+="_2",this.iframeIdChanged=!0,f()):(this.newIframeCreated=!1,"aamIframeLoaded"!==g.className?(this.originalIframeHasLoadedAlready=!1,e()):(this.iframeHasLoaded=this.originalIframeHasLoadedAlready=!0,this.iframe=g,this.requestToProcess())):f();
this.iframe=g
}},requestToProcess:function(A,z){function y(){u.jsonForComparison.push(A);
u.jsonWaiting.push([A,z])
}var u=this,m,p;
m=aC.adms.instance;
A===Object(A)&&m===Object(m)&&m.idSyncContainerID===aA&&(av.ibsDeleted.push(A.ibs),delete A.ibs);
if(A&&!ax.isEmptyObject(A)){if(aD.HAS_JSON_STRINGIFY){if(m=JSON.stringify(A.ibs||[]),p=JSON.stringify(A.dests||[]),this.jsonForComparison.length){var t=!1,r,q,n;
r=0;
for(q=this.jsonForComparison.length;
r<q;
r++){if(n=this.jsonForComparison[r],m===JSON.stringify(n.ibs||[])&&p===JSON.stringify(n.dests||[])){t=!0;
break
}}t?this.jsonDuplicates.push(A):y()
}else{y()
}}else{y()
}}(this.receivedThirdPartyCookiesNotification||!aD.POST_MESSAGE_ENABLED||this.iframeHasLoaded)&&this.jsonWaiting.length&&(m=this.jsonWaiting.shift(),!1===this.newIframeCreated&&delete m[0].ibs,this.process(m[0],m[1]),this.requestToProcess());
this.iframeHasLoaded&&this.messages.length&&!this.sendingMessages&&(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout(function(){u.messageSendingInterval=aD.POST_MESSAGE_ENABLED?null:150
},this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())
},checkIfRegionChanged:function(f){var e=aB.getDilCookieField(aD.REGION);
null!==e&&"undefined"!==typeof f.dcs_region&&parseInt(e,10)!==f.dcs_region&&(this.regionChanged=!0,this.timesRegionChanged++,aB.setDilCookieField(aD.FIRST_PARTY_SYNCS_ON_PAGE,""),aB.setDilCookieField(aD.FIRST_PARTY_SYNCS,""));
"undefined"!==typeof f.dcs_region&&aB.setDilCookieField(aD.REGION,f.dcs_region)
},processSyncOnPage:function(f){var e,k,g;
if((e=f.ibs)&&e instanceof Array&&(k=e.length)){for(f=0;
f<k;
f++){g=e[f],g.syncOnPage&&this.checkFirstPartyCookie(g,"","syncOnPage")
}}},process:function(y,u){var t=encodeURIComponent,r,k,m,q,p,n;
u===Object(u)&&(n=aB.encodeAndBuildRequest(["",u.dpid||"",u.dpuuid||""],","));
if((r=y.dests)&&r instanceof Array&&(k=r.length)){for(m=0;
m<k;
m++){q=r[m],p=[t("dests"),t(q.id||""),t(q.y||""),t(q.c||"")],this.addMessage(p.join("|"))
}}if((r=y.ibs)&&r instanceof Array&&(k=r.length)){for(m=0;
m<k;
m++){q=r[m],p=[t("ibs"),t(q.id||""),t(q.tag||""),aB.encodeAndBuildRequest(q.url||[],","),t(q.ttl||""),"",n,q.fireURLSync?"true":"false"],q.syncOnPage||(this.canSetThirdPartyCookies?this.addMessage(p.join("|")):q.fireURLSync&&this.checkFirstPartyCookie(q,p.join("|")))
}}this.jsonProcessed.push(y)
},checkFirstPartyCookie:function(m,g,t){var r=(t="syncOnPage"===t?!0:!1)?aD.FIRST_PARTY_SYNCS_ON_PAGE:aD.FIRST_PARTY_SYNCS,k=this.getOnPageSyncData(r),n=!1,q=!1,p=Math.ceil((new Date).getTime()/aD.MILLIS_PER_DAY);
k?(k=k.split("*"),q=this.pruneSyncData(k,m.id,p),n=q.dataPresent,q=q.dataValid,n&&q||this.fireSync(t,m,g,k,r,p)):(k=[],this.fireSync(t,m,g,k,r,p))
},getOnPageSyncData:function(f){var e=aC.adms.instance;
return e&&"function"===typeof e.idSyncGetOnPageSyncInfo?e.idSyncGetOnPageSyncInfo():aB.getDilCookieField(f)
},pruneSyncData:function(n,k,u){var t=!1,m=!1,r,q,p;
if(n instanceof Array){for(q=0;
q<n.length;
q++){r=n[q],p=parseInt(r.split("-")[1],10),r.match("^"+k+"-")?(t=!0,u<p?m=!0:(n.splice(q,1),q--)):u>=p&&(n.splice(q,1),q--)
}}return{dataPresent:t,dataValid:m}
},manageSyncsSize:function(e){if(e.join("*").length>this.MAX_SYNCS_LENGTH){for(e.sort(function(f,g){return parseInt(f.split("-")[1],10)-parseInt(g.split("-")[1],10)
});
e.join("*").length>this.MAX_SYNCS_LENGTH;
){e.shift()
}}},fireSync:function(C,A,z,y,u,q){function t(f,e,k,g){return function(){r.onPagePixels[f]=null;
var I=r.getOnPageSyncData(k),n=[];
if(I){var I=I.split("*"),G,H,F;
G=0;
for(H=I.length;
G<H;
G++){F=I[G],F.match("^"+e.id+"-")||n.push(F)
}}r.setSyncTrackingData(n,e,k,g)
}
}var r=this;
if(C){if("img"===A.tag){C=A.url;
z=aD.IS_HTTPS?"https:":"http:";
var p,m,D;
y=0;
for(p=C.length;
y<p;
y++){m=C[y];
D=/^\/\//.test(m);
var B=new Image;
aB.addListener(B,"load",t(this.onPagePixels.length,A,u,q));
B.src=(D?z:"")+m;
this.onPagePixels.push(B)
}}}else{this.addMessage(z),this.setSyncTrackingData(y,A,u,q)
}},addMessage:function(f){var e=encodeURIComponent,e=af?e("---destpub-debug---"):e("---destpub---");
this.messages.push((aD.POST_MESSAGE_ENABLED?"":e)+f)
},setSyncTrackingData:function(f,e,k,g){f.push(e.id+"-"+(g+Math.ceil(e.ttl/60/24)));
this.manageSyncsSize(f);
aB.setDilCookieField(k,f.join("*"))
},sendMessages:function(){var f=this,e="",g=encodeURIComponent;
this.regionChanged&&(e=g("---destpub-clear-dextp---"),this.regionChanged=!1);
this.messages.length?aD.POST_MESSAGE_ENABLED?(e=e+g("---destpub-combined---")+this.messages.join("%01"),this.postMessage(e),this.messages=[],this.sendingMessages=!1):(e+=this.messages.shift(),this.postMessage(e),setTimeout(function(){f.sendMessages()
},this.messageSendingInterval)):this.sendingMessages=!1
},postMessage:function(e){DIL.xd.postMessage(e,this.url,this.iframe.contentWindow);
this.messagesPosted.push(e)
},receiveMessage:function(f){var e=/^---destpub-to-parent---/;
"string"===typeof f&&e.test(f)&&(e=f.replace(e,"").split("|"),"canSetThirdPartyCookies"===e[0]&&(this.canSetThirdPartyCookies="true"===e[1]?!0:!1,this.receivedThirdPartyCookiesNotification=!0,this.requestToProcess()),this.messagesReceived.push(f))
}},ah={traits:function(e){ax.isValidPdata(e)&&(az.sids instanceof Array||(az.sids=[]),aB.extendArray(az.sids,e));
return this
},pixels:function(e){ax.isValidPdata(e)&&(az.pdata instanceof Array||(az.pdata=[]),aB.extendArray(az.pdata,e));
return this
},logs:function(e){ax.isValidLogdata(e)&&(az.logdata!==Object(az.logdata)&&(az.logdata={}),aB.extendObject(az.logdata,e));
return this
},customQueryParams:function(e){ax.isEmptyObject(e)||aB.extendObject(az,e,aC.reservedKeys);
return this
},signals:function(f,e){var k,g=f;
if(!ax.isEmptyObject(g)){if(e&&"string"===typeof e){for(k in g={},f){f.hasOwnProperty(k)&&(g[e+k]=f[k])
}}aB.extendObject(az,g,aC.reservedKeys)
}return this
},declaredId:function(e){aC.declaredId.setDeclaredId(e,"request");
return this
},result:function(e){"function"===typeof e&&(az.callback=e);
return this
},afterResult:function(e){"function"===typeof e&&(az.postCallbackFn=e);
return this
},useImageRequest:function(){az.useImageRequest=!0;
return this
},clearData:function(){az={};
return this
},submit:function(){am.submitRequest(az);
az={};
return this
},getPartner:function(){return ay
},getContainerNSID:function(){return aA
},getEventLog:function(){return aE
},getState:function(){var f={},e={};
aB.extendObject(f,aC,{callbackPrefix:!0,useJSONP:!0,registerRequest:!0});
aB.extendObject(e,av,{attachIframe:!0,requestToProcess:!0,process:!0,sendMessages:!0});
return{initConfig:aH,pendingRequest:az,otherRequestInfo:f,destinationPublishingInfo:e}
},idSync:function(g){if(ao){return"Error: id syncs have been disabled"
}if(g!==Object(g)||"string"!==typeof g.dpid||!g.dpid.length){return"Error: config or config.dpid is empty"
}if("string"!==typeof g.url||!g.url.length){return"Error: config.url is empty"
}var f=g.url,p=g.minutesToLive,n=encodeURIComponent,m=av,k,f=f.replace(/^https:/,"").replace(/^http:/,"");
if("undefined"===typeof p){p=20160
}else{if(p=parseInt(p,10),isNaN(p)||0>=p){return"Error: config.minutesToLive needs to be a positive number"
}}k=aB.encodeAndBuildRequest(["",g.dpid,g.dpuuid||""],",");
g=["ibs",n(g.dpid),"img",n(f),p,"",k];
m.addMessage(g.join("|"));
aC.firstRequestHasFired&&m.requestToProcess();
return"Successfully queued"
},aamIdSync:function(e){if(ao){return"Error: id syncs have been disabled"
}if(e!==Object(e)||"string"!==typeof e.dpuuid||!e.dpuuid.length){return"Error: config or config.dpuuid is empty"
}e.url="//dpm.demdex.net/ibs:dpid="+e.dpid+"&dpuuid="+e.dpuuid;
return this.idSync(e)
},passData:function(e){if(ax.isEmptyObject(e)){return"Error: json is empty or not an object"
}av.ibsDeleted.push(e.ibs);
delete e.ibs;
am.defaultCallback(e);
return e
},getPlatformParams:function(){return aC.platformParams
},getEventCallConfigParams:function(){var f=aC,e=f.modStatsParams,k=f.platformParams,g;
if(!e){e={};
for(g in k){k.hasOwnProperty(g)&&!f.nonModStatsParams[g]&&(e[g.replace(/^d_/,"")]=k[g])
}!0===at?e.coop_safe=1:!1===at&&(e.coop_unsafe=1);
f.modStatsParams=e
}return e
},setAsCoopSafe:function(){at=!0;
return this
},setAsCoopUnsafe:function(){at=!1;
return this
}},am={corsMetadata:function(){var f="none",e=!0;
"undefined"!==typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials" in new XMLHttpRequest?f="XMLHttpRequest":(new Function("/*@cc_on return /^10/.test(@_jscript_version) @*/"))()?f="XMLHttpRequest":"undefined"!==typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(e=!1),0<Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")&&(e=!1));
return{corsType:f,corsCookiesEnabled:e}
}(),getCORSInstance:function(){return"none"===this.corsMetadata.corsType?null:new window[this.corsMetadata.corsType]
},submitRequest:function(e){aC.registerRequest(am.createQueuedRequest(e));
return !0
},createQueuedRequest:function(z){var y=aC,u,t=z.callback,r="img",n;
if(!ax.isEmptyObject(ap)){var q,p,m;
for(q in ap){ap.hasOwnProperty(q)&&(p=ap[q],null!=p&&""!==p&&q in z&&!(p in z||p in aC.reservedKeys)&&(m=z[q],null!=m&&""!==m&&(z[p]=m)))
}}ax.isValidPdata(z.sids)||(z.sids=[]);
ax.isValidPdata(z.pdata)||(z.pdata=[]);
ax.isValidLogdata(z.logdata)||(z.logdata={});
z.logdataArray=aB.convertObjectToKeyValuePairs(z.logdata,"=",!0);
z.logdataArray.push("_ts="+(new Date).getTime());
"function"!==typeof t&&(t=this.defaultCallback);
y.useJSONP=!0!==z.useImageRequest;
y.useJSONP&&(r="script",u=y.callbackPrefix+"_"+aA+"_"+(new Date).getTime());
y=this.makeRequestSrcData(z,u);
h&&!aj||!(n=this.getCORSInstance())||(r="cors");
return{tag:r,src:y.src,corsSrc:y.corsSrc,internalCallbackName:u,callbackFn:t,postCallbackFn:z.postCallbackFn,useImageRequest:!!z.useImageRequest,requestData:z,corsInstance:n,corsPostData:y.corsPostData}
},defaultCallback:function(B,A){av.checkIfRegionChanged(B);
av.processSyncOnPage(B);
var z,y,u,q,t,r,p,n,C;
if((z=B.stuff)&&z instanceof Array&&(y=z.length)){for(u=0;
u<y;
u++){if((q=z[u])&&q===Object(q)){t=q.cn;
r=q.cv;
p=q.ttl;
if("undefined"===typeof p||""===p){p=Math.floor(aB.getMaxCookieExpiresInMinutes()/60/24)
}n=q.dmn||"."+document.domain.replace(/^www\./,"");
C=q.type;
t&&(r||"number"===typeof r)&&("var"!==C&&(p=parseInt(p,10))&&!isNaN(p)&&aB.setCookie(t,r,1440*p,"/",n,!1),ac.stuffed[t]=r)
}}}z=B.uuid;
ax.isPopulatedString(z)&&!ax.isEmptyObject(au)&&(y=au.path,"string"===typeof y&&y.length||(y="/"),u=parseInt(au.days,10),isNaN(u)&&(u=100),aB.setCookie(au.name||"aam_did",z,1440*u,y,au.domain||"."+document.domain.replace(/^www\./,""),!0===au.secure));
al||aC.abortRequests||av.requestToProcess(B,A)
},makeRequestSrcData:function(D,B){D.sids=ax.removeEmptyArrayValues(D.sids||[]);
D.pdata=ax.removeEmptyArrayValues(D.pdata||[]);
var A=aC,z=A.platformParams,y=aB.encodeAndBuildRequest(D.sids,","),p=aB.encodeAndBuildRequest(D.pdata,","),t=(D.logdataArray||[]).join("&");
delete D.logdataArray;
var q=aD.IS_HTTPS?"https://":"http://",n=A.declaredId.getDeclaredIdQueryString(),m=A.adms.instance?A.adms.getCustomerIDsQueryString(A.adms.getCustomerIDs()):"",F;
F=[];
var C,I,H,G;
for(C in D){if(!(C in A.reservedKeys)&&D.hasOwnProperty(C)){if(I=D[C],C=encodeURIComponent(C),I instanceof Array){for(H=0,G=I.length;
H<G;
H++){F.push(C+"="+encodeURIComponent(I[H]))
}}else{F.push(C+"="+encodeURIComponent(I))
}}}F=F.length?"&"+F.join("&"):"";
y="d_nsid="+z.d_nsid+A.getCoopQueryString()+n+m+(y.length?"&d_sid="+y:"")+(p.length?"&d_px="+p:"")+(t.length?"&d_ld="+encodeURIComponent(t):"");
z="&d_rtbd="+z.d_rtbd+"&d_jsonv="+z.d_jsonv+"&d_dst="+z.d_dst;
q=q+ay+".demdex.net/event";
p=A=q+"?"+y+(A.useJSONP?z+"&d_cb="+(B||""):"")+F;
2048<A.length&&(A=A.substring(0,2048).substring(0,A.lastIndexOf("&")));
return{corsSrc:q+"?"+(j?"testcors=1&d_nsid="+aA+"&":"")+"_ts="+(new Date).getTime(),src:A,originalSrc:p,corsPostData:y+z+F,isDeclaredIdCall:""!==n}
},fireRequest:function(f){if("img"===f.tag){this.fireImage(f)
}else{var e=aC.declaredId,e=e.declaredId.request||e.declaredId.init||{},e={dpid:e.dpid||"",dpuuid:e.dpuuid||""};
"script"===f.tag?this.fireScript(f,e):"cors"===f.tag&&this.fireCORS(f,e)
}},fireImage:function(f){var e=aC,k,g;
e.abortRequests||(e.firing=!0,k=new Image(0,0),e.sent.push(f),k.onload=function(){e.firing=!1;
e.fired.push(f);
e.num_of_img_responses++;
e.registerRequest()
},g=function(m){aF="imgAbortOrErrorHandler received the event of type "+m.type;
aE.push(aF);
e.abortRequests=!0;
e.firing=!1;
e.errored.push(f);
e.num_of_img_errors++;
e.registerRequest()
},k.addEventListener?(k.addEventListener("error",g,!1),k.addEventListener("abort",g,!1)):k.attachEvent&&(k.attachEvent("onerror",g),k.attachEvent("onabort",g)),k.src=f.src)
},fireScript:function(B,A){var z=this,y=aC,u,r,t=B.src,n=B.postCallbackFn,k="function"===typeof n,g=B.internalCallbackName;
y.abortRequests||(y.firing=!0,window[g]=function(C){try{C!==Object(C)&&(C={});
ao&&(av.ibsDeleted.push(C.ibs),delete C.ibs);
var q=B.callbackFn;
y.firing=!1;
y.fired.push(B);
y.num_of_jsonp_responses++;
q(C,A);
k&&n(C,A)
}catch(p){p.message="DIL jsonp callback caught error with message "+p.message;
aF=p.message;
aE.push(aF);
p.filename=p.filename||"dil.js";
p.partner=ay;
DIL.errorModule.handleError(p);
try{q({error:p.name+"|"+p.message},A),k&&n({error:p.name+"|"+p.message},A)
}catch(m){}}finally{y.requestRemoval({script:r,callbackName:g}),y.registerRequest()
}},o||aj?(y.firing=!1,y.requestRemoval({script:"no script created",callbackName:g})):(r=document.createElement("script"),r.addEventListener&&r.addEventListener("error",function(e){y.requestRemoval({script:r,callbackName:g});
aF="jsonp script tag error listener received the event of type "+e.type+" with src "+t;
z.handleScriptError(aF,B)
},!1),r.type="text/javascript",r.src=t,u=DIL.variables.scriptNodeList[0],u.parentNode.insertBefore(r,u)),y.sent.push(B),y.declaredId.declaredId.request=null)
},fireCORS:function(D,C){var B=this,A=aC,z=this.corsMetadata.corsType,y=D.corsSrc,t=D.corsInstance,n=D.corsPostData,k=D.postCallbackFn,g="function"===typeof k;
if(!A.abortRequests&&!b){A.firing=!0;
try{t.open("post",y,!0),"XMLHttpRequest"===z&&(t.withCredentials=!0,t.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),t.onreadystatechange=function(){if(4===this.readyState&&200===this.status){D:{var G;
try{if(G=JSON.parse(this.responseText),G!==Object(G)){B.handleCORSError(D,C,"Response is not JSON");
break D
}}catch(u){B.handleCORSError(D,C,"Error parsing response as JSON");
break D
}ao&&(av.ibsDeleted.push(G.ibs),delete G.ibs);
try{var r=D.callbackFn;
A.firing=!1;
A.fired.push(D);
A.num_of_cors_responses++;
r(G,C);
g&&k(G,C)
}catch(q){q.message="DIL handleCORSResponse caught error with message "+q.message;
aF=q.message;
aE.push(aF);
q.filename=q.filename||"dil.js";
q.partner=ay;
DIL.errorModule.handleError(q);
try{r({error:q.name+"|"+q.message},C),g&&k({error:q.name+"|"+q.message},C)
}catch(p){}}finally{A.registerRequest()
}}}}),t.onerror=function(){B.handleCORSError(D,C,"onerror")
},t.ontimeout=function(){B.handleCORSError(D,C,"ontimeout")
},t.send(n)
}catch(F){this.handleCORSError(D,C,"try-catch")
}A.sent.push(D);
A.declaredId.declaredId.request=null
}},handleCORSError:function(f,e,g){aC.num_of_cors_errors++;
aC.corsErrorSources.push(g);
"ontimeout"===g||aj||(f.tag="script",this.fireScript(f,e))
},handleScriptError:function(f,e){aC.num_of_jsonp_errors++;
this.handleRequestError(f,e)
},handleRequestError:function(f,e){var g=aC;
aE.push(f);
g.abortRequests=!0;
g.firing=!1;
g.errored.push(e);
g.registerRequest()
}},ax={isValidPdata:function(e){return e instanceof Array&&this.removeEmptyArrayValues(e).length?!0:!1
},isValidLogdata:function(e){return !this.isEmptyObject(e)
},isEmptyObject:function(f){if(f!==Object(f)){return !0
}for(var e in f){if(f.hasOwnProperty(e)){return !1
}}return !0
},removeEmptyArrayValues:function(g){for(var f=0,n=g.length,m,k=[],f=0;
f<n;
f++){m=g[f],"undefined"!==typeof m&&null!==m&&""!==m&&k.push(m)
}return k
},isPopulatedString:function(e){return"string"===typeof e&&e.length
}},aB={addListener:function(){if(document.addEventListener){return function(f,e,g){f.addEventListener(e,function(k){"function"===typeof g&&g(k)
},!1)
}
}if(document.attachEvent){return function(f,e,g){f.attachEvent("on"+e,function(k){"function"===typeof g&&g(k)
})
}
}}(),convertObjectToKeyValuePairs:function(k,g,q){var p=[],n,m;
g||(g="=");
for(n in k){k.hasOwnProperty(n)&&(m=k[n],"undefined"!==typeof m&&null!==m&&""!==m&&p.push(n+g+(q?encodeURIComponent(m):m)))
}return p
},encodeAndBuildRequest:function(f,e){return this.map(f,function(g){return encodeURIComponent(g)
}).join(e)
},map:function(k,g){if(Array.prototype.map){return k.map(g)
}if(void 0===k||null===k){throw new TypeError
}var q=Object(k),p=q.length>>>0;
if("function"!==typeof g){throw new TypeError
}for(var n=Array(p),m=0;
m<p;
m++){m in q&&(n[m]=g.call(g,q[m],m,q))
}return n
},filter:function(m,k){if(!Array.prototype.filter){if(void 0===m||null===m){throw new TypeError
}var t=Object(m),r=t.length>>>0;
if("function"!==typeof k){throw new TypeError
}for(var q=[],p=0;
p<r;
p++){if(p in t){var n=t[p];
k.call(k,n,p,t)&&q.push(n)
}}return q
}return m.filter(k)
},getCookie:function(g){g+="=";
var f=document.cookie.split(";"),n,m,k;
n=0;
for(m=f.length;
n<m;
n++){for(k=f[n];
" "===k.charAt(0);
){k=k.substring(1,k.length)
}if(0===k.indexOf(g)){return decodeURIComponent(k.substring(g.length,k.length))
}}return null
},setCookie:function(m,k,t,r,q,p){var n=new Date;
t&&(t*=60000);
document.cookie=m+"="+encodeURIComponent(k)+(t?";expires="+(new Date(n.getTime()+t)).toUTCString():"")+(r?";path="+r:"")+(q?";domain="+q:"")+(p?";secure":"")
},extendArray:function(f,e){return f instanceof Array&&e instanceof Array?(Array.prototype.push.apply(f,e),!0):!1
},extendObject:function(f,e,k){var g;
if(f===Object(f)&&e===Object(e)){for(g in e){!e.hasOwnProperty(g)||!ax.isEmptyObject(k)&&g in k||(f[g]=e[g])
}return !0
}return !1
},getMaxCookieExpiresInMinutes:function(){return aD.SIX_MONTHS_IN_MINUTES
},getCookieField:function(k,g){var q=this.getCookie(k),p=decodeURIComponent;
if("string"===typeof q){var q=q.split("|"),n,m;
n=0;
for(m=q.length-1;
n<m;
n++){if(p(q[n])===g){return p(q[n+1])
}}}return null
},getDilCookieField:function(e){return this.getCookieField(aD.DIL_COOKIE_NAME,e)
},setCookieField:function(m,k,t){var r=this.getCookie(m),q=!1,p=encodeURIComponent;
k=p(k);
t=p(t);
if("string"===typeof r){var r=r.split("|"),n,p=0;
for(n=r.length-1;
p<n;
p++){if(r[p]===k){r[p+1]=t;
q=!0;
break
}}q||(p=r.length,r[p]=k,r[p+1]=t)
}else{r=[k,t]
}this.setCookie(m,r.join("|"),this.getMaxCookieExpiresInMinutes(),"/",this.getDomain(),!1)
},setDilCookieField:function(f,e){return this.setCookieField(aD.DIL_COOKIE_NAME,f,e)
},getDomain:function(f){!f&&window.location&&(f=window.location.hostname);
if(f){if(/^[0-9.]+$/.test(f)){f=""
}else{var e=f.split("."),k=e.length-1,g=k-1;
1<k&&2>=e[k].length&&(2===e[k-1].length||0>",DOMAIN_2_CHAR_EXCEPTIONS,".indexOf(","+e[k]+","))&&g--;
if(0<g){for(f="";
k>=g;
){f=e[k]+(f?".":"")+f,k--
}}}}return f
},replaceMethodsWithFunction:function(f,e){var g;
if(f===Object(f)&&"function"===typeof e){for(g in f){f.hasOwnProperty(g)&&"function"===typeof f[g]&&(f[g]=e)
}}}};
"error"===ay&&0===aA&&aB.addListener(window,"load",function(){DIL.windowLoaded=!0
});
var a=!1,ag=function(){a||(a=!0,aC.registerRequest(),aq(),al||aC.abortRequests||av.attachIframe(),aC.readyToRemove=!0,aC.requestRemoval())
},aq=function(){al||setTimeout(function(){l||aC.firstRequestHasFired||("function"===typeof ae?ah.afterResult(ae).submit():ah.submit())
},DIL.constants.TIME_TO_DEFAULT_REQUEST)
};
an=document;
"error"!==ay&&(DIL.windowLoaded?ag():"complete"!==an.readyState&&"loaded"!==an.readyState?aB.addListener(window,"load",function(){DIL.windowLoaded=!0;
ag()
}):(DIL.windowLoaded=!0,ag()));
if("error"!==ay){try{DIL.xd.receiveMessage(function(e){av.receiveMessage(e.data)
},av.getIframeHost(av.url))
}catch(aI){}}aC.declaredId.setDeclaredId(E,"init");
aC.processVisitorAPI();
aD.BLACKLIST_IE_LESS_THAN_9&&aB.replaceMethodsWithFunction(ah,function(){return this
});
this.api=ah;
this.getStuffedVariable=function(f){var e=ac.stuffed[f];
e||"number"===typeof e||(e=aB.getCookie(f))||"number"===typeof e||(e="");
return e
};
this.validators=ax;
this.helpers=aB;
this.constants=aD;
this.log=aE;
ar&&(this.pendingRequest=az,this.requestController=aC,this.setDestinationPublishingUrl=aw,this.destinationPublishing=av,this.requestProcs=am,this.variables=ac,this.callWindowLoadFunctions=ag)
},function(){var b=document,a;
null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",a=function(){b.removeEventListener("DOMContentLoaded",a,!1);
b.readyState="complete"
},!1))
}(),DIL.extendStaticPropertiesAndMethods=function(b){var a;
if(b===Object(b)){for(a in b){b.hasOwnProperty(a)&&(this[a]=b[a])
}}},DIL.extendStaticPropertiesAndMethods({version:"6.12",jsonVersion:1,constants:{TIME_TO_DEFAULT_REQUEST:50},variables:{scriptNodeList:document.getElementsByTagName("script"),scriptsRemoved:[],callbacksRemoved:[]},windowLoaded:!1,dils:{},isAddedPostWindowLoad:function(a){this.windowLoaded="function"===typeof a?!!a():"boolean"===typeof a?a:!0
},create:function(b){try{return new DIL(b)
}catch(a){throw Error("Error in attempt to create DIL instance with DIL.create(): "+a.message)
}},registerDil:function(c,b,a){b=b+"$"+a;
b in this.dils||(this.dils[b]=c)
},getDil:function(c,b){var a;
"string"!==typeof c&&(c="");
b||(b=0);
a=c+"$"+b;
return a in this.dils?this.dils[a]:Error("The DIL instance with partner = "+c+" and containerNSID = "+b+" was not found")
},dexGetQSVars:function(c,b,a){b=this.getDil(b,a);
return b instanceof this?b.getStuffedVariable(c):""
},xd:{postMessage:function(h,c,a){var b=1;
c&&(window.postMessage?a.postMessage(h,c.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):c&&(a.location=c.replace(/#.*$/,"")+"#"+ +new Date+b+++"&"+h))
},receiveMessage:function(h,c){var a;
try{if(window.postMessage){if(h&&(a=function(e){if("string"===typeof c&&e.origin!==c||"[object Function]"===Object.prototype.toString.call(c)&&!1===c(e.origin)){return !1
}h(e)
}),window.addEventListener){window[h?"addEventListener":"removeEventListener"]("message",a,!1)
}else{window[h?"attachEvent":"detachEvent"]("onmessage",a)
}}}catch(b){}}}}),DIL.errorModule=function(){var c=DIL.create({partner:"error",containerNSID:0,disableDestinationPublishingIframe:!0}),b={harvestererror:14138,destpuberror:14139,dpmerror:14140,generalerror:14137,error:14137,noerrortypedefined:15021,evalerror:15016,rangeerror:15017,referenceerror:15018,typeerror:15019,urierror:15020},a=!1;
return{activate:function(){a=!0
},handleError:function(h){if(!a){return"DIL error module has not been activated"
}h!==Object(h)&&(h={});
var e=h.name?(h.name+"").toLowerCase():"",f=[];
h={name:e,filename:h.filename?h.filename+"":"",partner:h.partner?h.partner+"":"no_partner",site:h.site?h.site+"":document.location.href,message:h.message?h.message+"":""};
f.push(e in b?b[e]:b.noerrortypedefined);
c.api.pixels(f).logs(h).useImageRequest().submit();
return"DIL error report sent"
},pixelMap:b}
}(),DIL.tools={},DIL.modules={helpers:{handleModuleError:function(h,c,a){var b="";
c=c||"Error caught in DIL module/submodule: ";
h===Object(h)?b=c+(h.message||"err has no message"):(b=c+"err is not a valid object",h={});
h.message=b;
a instanceof DIL&&(h.partner=a.api.getPartner());
DIL.errorModule.handleError(h);
return this.errorMessage=b
}}});
function AppMeasurement(b){var j=this;
j.version="2.6.0";
var g=window;
g.s_c_in||(g.s_c_il=[],g.s_c_in=0);
j._il=g.s_c_il;
j._in=g.s_c_in;
j._il[j._in]=j;
g.s_c_in++;
j._c="s_c";
var c=g.AppMeasurement.Pb;
c||(c=null);
var e=g,f,z;
try{for(f=e.parent,z=e.location;
f&&f.location&&z&&""+f.location!=""+z&&e.location&&""+f.location!=""+e.location&&f.location.host==z.host;
){e=f,f=e.parent
}}catch(q){}j.F=function(m){try{console.log(m)
}catch(k){}};
j.Ma=function(k){return""+parseInt(k)==""+k
};
j.replace=function(m,k,n){return !m||0>m.indexOf(k)?m:m.split(k).join(n)
};
j.escape=function(m){var a,k;
if(!m){return m
}m=encodeURIComponent(m);
for(a=0;
7>a;
a++){k="+~!*()'".substring(a,a+1),0<=m.indexOf(k)&&(m=j.replace(m,k,"%"+k.charCodeAt(0).toString(16).toUpperCase()))
}return m
};
j.unescape=function(k){if(!k){return k
}k=0<=k.indexOf("+")?j.replace(k,"+"," "):k;
try{return decodeURIComponent(k)
}catch(a){}return unescape(k)
};
j.wb=function(){var m=g.location.hostname,a=j.fpCookieDomainPeriods,k;
a||(a=j.cookieDomainPeriods);
if(m&&!j.Ea&&!/^[0-9.]+$/.test(m)&&(a=a?parseInt(a):2,a=2<a?a:2,k=m.lastIndexOf("."),0<=k)){for(;
0<=k&&1<a;
){k=m.lastIndexOf(".",k-1),a--
}j.Ea=0<k?m.substring(k):m
}return j.Ea
};
j.c_r=j.cookieRead=function(n){n=j.escape(n);
var a=" "+j.d.cookie,m=a.indexOf(" "+n+"="),k=0>m?m:a.indexOf(";",m);
n=0>m?"":j.unescape(a.substring(m+2+n.length,0>k?a.length:k));
return"[[B]]"!=n?n:""
};
j.c_w=j.cookieWrite=function(r,a,p){var m=j.wb(),n=j.cookieLifetime,k;
a=""+a;
n=n?(""+n).toUpperCase():"";
p&&"SESSION"!=n&&"NONE"!=n&&((k=""!=a?parseInt(n?n:0):-60)?(p=new Date,p.setTime(p.getTime()+1000*k)):1==p&&(p=new Date,k=p.getYear(),p.setYear(k+5+(1900>k?1900:0))));
return r&&"NONE"!=n?(j.d.cookie=j.escape(r)+"="+j.escape(""!=a?a:"[[B]]")+"; path=/;"+(p&&"SESSION"!=n?" expires="+p.toUTCString()+";":"")+(m?" domain="+m+";":""),j.cookieRead(r)==a):0
};
j.L=[];
j.ia=function(t,a,r){if(j.Fa){return 0
}j.maxDelay||(j.maxDelay=250);
var n=0,p=(new Date).getTime()+j.maxDelay,m=j.d.visibilityState,k=["webkitvisibilitychange","visibilitychange"];
m||(m=j.d.webkitVisibilityState);
if(m&&"prerender"==m){if(!j.ja){for(j.ja=1,r=0;
r<k.length;
r++){j.d.addEventListener(k[r],function(){var u=j.d.visibilityState;
u||(u=j.d.webkitVisibilityState);
"visible"==u&&(j.ja=0,j.delayReady())
})
}}n=1;
p=0
}else{r||j.p("_d")&&(n=1)
}n&&(j.L.push({m:t,a:a,t:p}),j.ja||setTimeout(j.delayReady,j.maxDelay));
return n
};
j.delayReady=function(){var m=(new Date).getTime(),a=0,k;
for(j.p("_d")?a=1:j.xa();
0<j.L.length;
){k=j.L.shift();
if(a&&!k.t&&k.t>m){j.L.unshift(k);
setTimeout(j.delayReady,parseInt(j.maxDelay/2));
break
}j.Fa=1;
j[k.m].apply(j,k.a);
j.Fa=0
}};
j.setAccount=j.sa=function(m){var a,k;
if(!j.ia("setAccount",arguments)){if(j.account=m,j.allAccounts){for(a=j.allAccounts.concat(m.split(",")),j.allAccounts=[],a.sort(),k=0;
k<a.length;
k++){0!=k&&a[k-1]==a[k]||j.allAccounts.push(a[k])
}}else{j.allAccounts=m.split(",")
}}};
j.foreachVar=function(t,a){var r,n,p,m,k="";
p=n="";
if(j.lightProfileID){r=j.P,(k=j.lightTrackVars)&&(k=","+k+","+j.na.join(",")+",")
}else{r=j.g;
if(j.pe||j.linkType){k=j.linkTrackVars,n=j.linkTrackEvents,j.pe&&(p=j.pe.substring(0,1).toUpperCase()+j.pe.substring(1),j[p]&&(k=j[p].Nb,n=j[p].Mb))
}k&&(k=","+k+","+j.H.join(",")+",");
n&&k&&(k+=",events,")
}a&&(a=","+a+",");
for(n=0;
n<r.length;
n++){p=r[n],(m=j[p])&&(!k||0<=k.indexOf(","+p+","))&&(!a||0<=a.indexOf(","+p+","))&&t(p,m)
}};
j.r=function(B,C,A,w,x){var u="",t,p,r,a,n=0;
"contextData"==B&&(B="c");
if(C){for(t in C){if(!(Object.prototype[t]||x&&t.substring(0,x.length)!=x)&&C[t]&&(!A||0<=A.indexOf(","+(w?w+".":"")+t+","))){r=!1;
if(n){for(p=0;
p<n.length;
p++){t.substring(0,n[p].length)==n[p]&&(r=!0)
}}if(!r&&(""==u&&(u+="&"+B+"."),p=C[t],x&&(t=t.substring(x.length)),0<t.length)){if(r=t.indexOf("."),0<r){p=t.substring(0,r),r=(x?x:"")+p+".",n||(n=[]),n.push(r),u+=j.r(p,C,A,w,r)
}else{if("boolean"==typeof p&&(p=p?"true":"false"),p){if("retrieveLightData"==w&&0>x.indexOf(".contextData.")){switch(r=t.substring(0,4),a=t.substring(4),t){case"transactionID":t="xact";
break;
case"channel":t="ch";
break;
case"campaign":t="v0";
break;
default:j.Ma(a)&&("prop"==r?t="c"+a:"eVar"==r?t="v"+a:"list"==r?t="l"+a:"hier"==r&&(t="h"+a,p=p.substring(0,255)))
}}u+="&"+j.escape(t)+"="+j.escape(p)
}}}}}""!=u&&(u+="&."+B)
}return u
};
j.usePostbacks=0;
j.zb=function(){var D="",E,C,A,B,x,w,t,u,a="",r="",p=B="";
if(j.lightProfileID){E=j.P,(a=j.lightTrackVars)&&(a=","+a+","+j.na.join(",")+",")
}else{E=j.g;
if(j.pe||j.linkType){a=j.linkTrackVars,r=j.linkTrackEvents,j.pe&&(B=j.pe.substring(0,1).toUpperCase()+j.pe.substring(1),j[B]&&(a=j[B].Nb,r=j[B].Mb))
}a&&(a=","+a+","+j.H.join(",")+",");
r&&(r=","+r+",",a&&(a+=",events,"));
j.events2&&(p+=(""!=p?",":"")+j.events2)
}if(j.visitor&&j.visitor.getCustomerIDs){B=c;
if(x=j.visitor.getCustomerIDs()){for(C in x){Object.prototype[C]||(A=x[C],"object"==typeof A&&(B||(B={}),A.id&&(B[C+".id"]=A.id),A.authState&&(B[C+".as"]=A.authState)))
}}B&&(D+=j.r("cid",B))
}j.AudienceManagement&&j.AudienceManagement.isReady()&&(D+=j.r("d",j.AudienceManagement.getEventCallConfigParams()));
for(C=0;
C<E.length;
C++){B=E[C];
x=j[B];
A=B.substring(0,4);
w=B.substring(4);
x||("events"==B&&p?(x=p,p=""):"marketingCloudOrgID"==B&&j.visitor&&(x=j.visitor.marketingCloudOrgID));
if(x&&(!a||0<=a.indexOf(","+B+","))){switch(B){case"customerPerspective":B="cp";
break;
case"marketingCloudOrgID":B="mcorgid";
break;
case"supplementalDataID":B="sdid";
break;
case"timestamp":B="ts";
break;
case"dynamicVariablePrefix":B="D";
break;
case"visitorID":B="vid";
break;
case"marketingCloudVisitorID":B="mid";
break;
case"analyticsVisitorID":B="aid";
break;
case"audienceManagerLocationHint":B="aamlh";
break;
case"audienceManagerBlob":B="aamb";
break;
case"authState":B="as";
break;
case"pageURL":B="g";
255<x.length&&(j.pageURLRest=x.substring(255),x=x.substring(0,255));
break;
case"pageURLRest":B="-g";
break;
case"referrer":B="r";
break;
case"vmk":case"visitorMigrationKey":B="vmt";
break;
case"visitorMigrationServer":B="vmf";
j.ssl&&j.visitorMigrationServerSecure&&(x="");
break;
case"visitorMigrationServerSecure":B="vmf";
!j.ssl&&j.visitorMigrationServer&&(x="");
break;
case"charSet":B="ce";
break;
case"visitorNamespace":B="ns";
break;
case"cookieDomainPeriods":B="cdp";
break;
case"cookieLifetime":B="cl";
break;
case"variableProvider":B="vvp";
break;
case"currencyCode":B="cc";
break;
case"channel":B="ch";
break;
case"transactionID":B="xact";
break;
case"campaign":B="v0";
break;
case"latitude":B="lat";
break;
case"longitude":B="lon";
break;
case"resolution":B="s";
break;
case"colorDepth":B="c";
break;
case"javascriptVersion":B="j";
break;
case"javaEnabled":B="v";
break;
case"cookiesEnabled":B="k";
break;
case"browserWidth":B="bw";
break;
case"browserHeight":B="bh";
break;
case"connectionType":B="ct";
break;
case"homepage":B="hp";
break;
case"events":p&&(x+=(""!=x?",":"")+p);
if(r){for(w=x.split(","),x="",A=0;
A<w.length;
A++){t=w[A],u=t.indexOf("="),0<=u&&(t=t.substring(0,u)),u=t.indexOf(":"),0<=u&&(t=t.substring(0,u)),0<=r.indexOf(","+t+",")&&(x+=(x?",":"")+w[A])
}}break;
case"events2":x="";
break;
case"contextData":D+=j.r("c",j[B],a,B);
x="";
break;
case"lightProfileID":B="mtp";
break;
case"lightStoreForSeconds":B="mtss";
j.lightProfileID||(x="");
break;
case"lightIncrementBy":B="mti";
j.lightProfileID||(x="");
break;
case"retrieveLightProfiles":B="mtsr";
break;
case"deleteLightProfiles":B="mtsd";
break;
case"retrieveLightData":j.retrieveLightProfiles&&(D+=j.r("mts",j[B],a,B));
x="";
break;
default:j.Ma(w)&&("prop"==A?B="c"+w:"eVar"==A?B="v"+w:"list"==A?B="l"+w:"hier"==A&&(B="h"+w,x=x.substring(0,255)))
}x&&(D+="&"+B+"="+("pev"!=B.substring(0,3)?j.escape(x):x))
}"pev3"==B&&j.e&&(D+=j.e)
}return D
};
j.D=function(m){var k=m.tagName;
if("undefined"!=""+m.Sb||"undefined"!=""+m.Ib&&"HTML"!=(""+m.Ib).toUpperCase()){return""
}k=k&&k.toUpperCase?k.toUpperCase():"";
"SHAPE"==k&&(k="");
k&&(("INPUT"==k||"BUTTON"==k)&&m.type&&m.type.toUpperCase?k=m.type.toUpperCase():!k&&m.href&&(k="A"));
return k
};
j.Ia=function(m){var k=g.location,t=m.href?m.href:"",p,r,n;
p=t.indexOf(":");
r=t.indexOf("?");
n=t.indexOf("/");
t&&(0>p||0<=r&&p>r||0<=n&&p>n)&&(r=m.protocol&&1<m.protocol.length?m.protocol:k.protocol?k.protocol:"",p=k.pathname.lastIndexOf("/"),t=(r?r+"//":"")+(m.host?m.host:k.host?k.host:"")+("/"!=t.substring(0,1)?k.pathname.substring(0,0>p?0:p)+"/":"")+t);
return t
};
j.M=function(r){var a=j.D(r),p,m,n="",k=0;
return a&&(p=r.protocol,m=r.onclick,!r.href||"A"!=a&&"AREA"!=a||m&&p&&!(0>p.toLowerCase().indexOf("javascript"))?m?(n=j.replace(j.replace(j.replace(j.replace(""+m,"\r",""),"\n",""),"\t","")," ",""),k=2):"INPUT"==a||"SUBMIT"==a?(r.value?n=r.value:r.innerText?n=r.innerText:r.textContent&&(n=r.textContent),k=3):"IMAGE"==a&&r.src&&(n=r.src):n=j.Ia(r),n)?{id:n.substring(0,100),type:k}:0
};
j.Qb=function(m){for(var a=j.D(m),k=j.M(m);
m&&!k&&"BODY"!=a;
){if(m=m.parentElement?m.parentElement:m.parentNode){a=j.D(m),k=j.M(m)
}}k&&"BODY"!=a||(m=0);
m&&(a=m.onclick?""+m.onclick:"",0<=a.indexOf(".tl(")||0<=a.indexOf(".trackLink("))&&(m=0);
return m
};
j.Hb=function(){var B,C,A=j.linkObject,w=j.linkType,x=j.linkURL,u,t;
j.oa=1;
A||(j.oa=0,A=j.clickObject);
if(A){B=j.D(A);
for(C=j.M(A);
A&&!C&&"BODY"!=B;
){if(A=A.parentElement?A.parentElement:A.parentNode){B=j.D(A),C=j.M(A)
}}C&&"BODY"!=B||(A=0);
if(A&&!j.linkObject){var r=A.onclick?""+A.onclick:"";
if(0<=r.indexOf(".tl(")||0<=r.indexOf(".trackLink(")){A=0
}}}else{j.oa=1
}!x&&A&&(x=j.Ia(A));
x&&!j.linkLeaveQueryString&&(u=x.indexOf("?"),0<=u&&(x=x.substring(0,u)));
if(!w&&x){var p=0,a=0,k;
if(j.trackDownloadLinks&&j.linkDownloadFileTypes){for(r=x.toLowerCase(),u=r.indexOf("?"),t=r.indexOf("#"),0<=u?0<=t&&t<u&&(u=t):u=t,0<=u&&(r=r.substring(0,u)),u=j.linkDownloadFileTypes.toLowerCase().split(","),t=0;
t<u.length;
t++){(k=u[t])&&r.substring(r.length-(k.length+1))=="."+k&&(w="d")
}}if(j.trackExternalLinks&&!w&&(r=x.toLowerCase(),j.La(r)&&(j.linkInternalFilters||(j.linkInternalFilters=g.location.hostname),u=0,j.linkExternalFilters?(u=j.linkExternalFilters.toLowerCase().split(","),p=1):j.linkInternalFilters&&(u=j.linkInternalFilters.toLowerCase().split(",")),u))){for(t=0;
t<u.length;
t++){k=u[t],0<=r.indexOf(k)&&(a=1)
}a?p&&(w="e"):p||(w="e")
}}j.linkObject=A;
j.linkURL=x;
j.linkType=w;
if(j.trackClickMap||j.trackInlineStats){j.e="",A&&(w=j.pageName,x=1,A=A.sourceIndex,w||(w=j.pageURL,x=0),g.s_objectID&&(C.id=g.s_objectID,A=C.type=1),w&&C&&C.id&&B&&(j.e="&pid="+j.escape(w.substring(0,255))+(x?"&pidt="+x:"")+"&oid="+j.escape(C.id.substring(0,100))+(C.type?"&oidt="+C.type:"")+"&ot="+B+(A?"&oi="+A:"")))
}};
j.Ab=function(){var w=j.oa,x=j.linkType,u=j.linkURL,r=j.linkName;
x&&(u||r)&&(x=x.toLowerCase(),"d"!=x&&"e"!=x&&(x="o"),j.pe="lnk_"+x,j.pev1=u?j.escape(u):"",j.pev2=r?j.escape(r):"",w=1);
j.abort&&(w=0);
if(j.trackClickMap||j.trackInlineStats||j.ActivityMap){var x={},u=0,t=j.cookieRead("s_sq"),p=t?t.split("&"):0,n,a,m,t=0;
if(p){for(n=0;
n<p.length;
n++){a=p[n].split("="),r=j.unescape(a[0]).split(","),a=j.unescape(a[1]),x[a]=r
}}r=j.account.split(",");
n={};
for(m in j.contextData){m&&!Object.prototype[m]&&"a.activitymap."==m.substring(0,14)&&(n[m]=j.contextData[m],j.contextData[m]="")
}j.e=j.r("c",n)+(j.e?j.e:"");
if(w||j.e){w&&!j.e&&(t=1);
for(a in x){if(!Object.prototype[a]){for(m=0;
m<r.length;
m++){for(t&&(p=x[a].join(","),p==j.account&&(j.e+=("&"!=a.charAt(0)?"&":"")+a,x[a]=[],u=1)),n=0;
n<x[a].length;
n++){p=x[a][n],p==r[m]&&(t&&(j.e+="&u="+j.escape(p)+("&"!=a.charAt(0)?"&":"")+a+"&u=0"),x[a].splice(n,1),u=1)
}}}}w||(u=1);
if(u){t="";
n=2;
!w&&j.e&&(t=j.escape(r.join(","))+"="+j.escape(j.e),n=1);
for(a in x){!Object.prototype[a]&&0<n&&0<x[a].length&&(t+=(t?"&":"")+j.escape(x[a].join(","))+"="+j.escape(a),n--)
}j.cookieWrite("s_sq",t)
}}}return w
};
j.Bb=function(){if(!j.Lb){var F=new Date,G=e.location,E,C,D=C=E="",B="",A="",w="1.2",x=j.cookieWrite("s_cc","true",0)?"Y":"N",u="",n="";
if(F.setUTCDate&&(w="1.3",(0).toPrecision&&(w="1.5",F=[],F.forEach))){w="1.6";
C=0;
E={};
try{C=new Iterator(E),C.next&&(w="1.7",F.reduce&&(w="1.8",w.trim&&(w="1.8.1",Date.parse&&(w="1.8.2",Object.create&&(w="1.8.5")))))
}catch(a){}}E=screen.width+"x"+screen.height;
D=navigator.javaEnabled()?"Y":"N";
C=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;
B=j.w.innerWidth?j.w.innerWidth:j.d.documentElement.offsetWidth;
A=j.w.innerHeight?j.w.innerHeight:j.d.documentElement.offsetHeight;
try{j.b.addBehavior("#default#homePage"),u=j.b.Rb(G)?"Y":"N"
}catch(I){}try{j.b.addBehavior("#default#clientCaps"),n=j.b.connectionType
}catch(H){}j.resolution=E;
j.colorDepth=C;
j.javascriptVersion=w;
j.javaEnabled=D;
j.cookiesEnabled=x;
j.browserWidth=B;
j.browserHeight=A;
j.connectionType=n;
j.homepage=u;
j.Lb=1
}};
j.Q={};
j.loadModule=function(n,a){var m=j.Q[n];
if(!m){m=g["AppMeasurement_Module_"+n]?new g["AppMeasurement_Module_"+n](j):{};
j.Q[n]=j[n]=m;
m.eb=function(){return m.ib
};
m.jb=function(p){if(m.ib=p){j[n+"_onLoad"]=p,j.ia(n+"_onLoad",[j,m],1)||p(j,m)
}};
try{Object.defineProperty?Object.defineProperty(m,"onLoad",{get:m.eb,set:m.jb}):m._olc=1
}catch(k){m._olc=1
}}a&&(j[n+"_onLoad"]=a,j.ia(n+"_onLoad",[j,m],1)||a(j,m))
};
j.p=function(m){var a,k;
for(a in j.Q){if(!Object.prototype[a]&&(k=j.Q[a])&&(k._olc&&k.onLoad&&(k._olc=0,k.onLoad(j,k)),k[m]&&k[m]())){return 1
}}return 0
};
j.Db=function(){var n=Math.floor(10000000000000*Math.random()),a=j.visitorSampling,m=j.visitorSamplingGroup,m="s_vsn_"+(j.visitorNamespace?j.visitorNamespace:j.account)+(m?"_"+m:""),k=j.cookieRead(m);
if(a){a*=100;
k&&(k=parseInt(k));
if(!k){if(!j.cookieWrite(m,n)){return 0
}k=n
}if(k%10000>a){return 0
}}return 1
};
j.R=function(u,a){var t,p,r,n,m,k;
for(t=0;
2>t;
t++){for(p=0<t?j.Aa:j.g,r=0;
r<p.length;
r++){if(n=p[r],(m=u[n])||u["!"+n]){if(!a&&("contextData"==n||"retrieveLightData"==n)&&j[n]){for(k in j[n]){m[k]||(m[k]=j[n][k])
}}j[n]=m
}}}};
j.Va=function(r,a){var p,m,n,k;
for(p=0;
2>p;
p++){for(m=0<p?j.Aa:j.g,n=0;
n<m.length;
n++){k=m[n],r[k]=j[k],a||r[k]||(r["!"+k]=1)
}}};
j.vb=function(C){var B,A,w,x,u,t=0,p,r="",n="";
if(C&&255<C.length&&(B=""+C,A=B.indexOf("?"),0<A&&(p=B.substring(A+1),B=B.substring(0,A),x=B.toLowerCase(),w=0,"http://"==x.substring(0,7)?w+=7:"https://"==x.substring(0,8)&&(w+=8),A=x.indexOf("/",w),0<A&&(x=x.substring(w,A),u=B.substring(A),B=B.substring(0,A),0<=x.indexOf("google")?t=",q,ie,start,search_key,word,kw,cd,":0<=x.indexOf("yahoo.co")&&(t=",p,ei,"),t&&p)))){if((C=p.split("&"))&&1<C.length){for(w=0;
w<C.length;
w++){x=C[w],A=x.indexOf("="),0<A&&0<=t.indexOf(","+x.substring(0,A)+",")?r+=(r?"&":"")+x:n+=(n?"&":"")+x
}r&&n?p=r+"&"+n:n=""
}A=253-(p.length-n.length)-B.length;
C=B+(0<A?u.substring(0,A):"")+"?"+p
}return C
};
j.ab=function(m){var a=j.d.visibilityState,k=["webkitvisibilitychange","visibilitychange"];
a||(a=j.d.webkitVisibilityState);
if(a&&"prerender"==a){if(m){for(a=0;
a<k.length;
a++){j.d.addEventListener(k[a],function(){var n=j.d.visibilityState;
n||(n=j.d.webkitVisibilityState);
"visible"==n&&m()
})
}}return !1
}return !0
};
j.ea=!1;
j.J=!1;
j.lb=function(){j.J=!0;
j.j()
};
j.ca=!1;
j.V=!1;
j.hb=function(a){j.marketingCloudVisitorID=a;
j.V=!0;
j.j()
};
j.fa=!1;
j.W=!1;
j.mb=function(a){j.visitorOptedOut=a;
j.W=!0;
j.j()
};
j.Z=!1;
j.S=!1;
j.Xa=function(a){j.analyticsVisitorID=a;
j.S=!0;
j.j()
};
j.ba=!1;
j.U=!1;
j.Za=function(a){j.audienceManagerLocationHint=a;
j.U=!0;
j.j()
};
j.aa=!1;
j.T=!1;
j.Ya=function(a){j.audienceManagerBlob=a;
j.T=!0;
j.j()
};
j.$a=function(a){j.maxDelay||(j.maxDelay=250);
return j.p("_d")?(a&&setTimeout(function(){a()
},j.maxDelay),!1):!0
};
j.da=!1;
j.I=!1;
j.xa=function(){j.I=!0;
j.j()
};
j.isReadyToTrack=function(){var p=!0,a=j.visitor,n,k,m;
j.ea||j.J||(j.ab(j.lb)?j.J=!0:j.ea=!0);
if(j.ea&&!j.J){return !1
}a&&a.isAllowed()&&(j.ca||j.marketingCloudVisitorID||!a.getMarketingCloudVisitorID||(j.ca=!0,j.marketingCloudVisitorID=a.getMarketingCloudVisitorID([j,j.hb]),j.marketingCloudVisitorID&&(j.V=!0)),j.fa||j.visitorOptedOut||!a.isOptedOut||(j.fa=!0,j.visitorOptedOut=a.isOptedOut([j,j.mb]),j.visitorOptedOut!=c&&(j.W=!0)),j.Z||j.analyticsVisitorID||!a.getAnalyticsVisitorID||(j.Z=!0,j.analyticsVisitorID=a.getAnalyticsVisitorID([j,j.Xa]),j.analyticsVisitorID&&(j.S=!0)),j.ba||j.audienceManagerLocationHint||!a.getAudienceManagerLocationHint||(j.ba=!0,j.audienceManagerLocationHint=a.getAudienceManagerLocationHint([j,j.Za]),j.audienceManagerLocationHint&&(j.U=!0)),j.aa||j.audienceManagerBlob||!a.getAudienceManagerBlob||(j.aa=!0,j.audienceManagerBlob=a.getAudienceManagerBlob([j,j.Ya]),j.audienceManagerBlob&&(j.T=!0)),p=j.ca&&!j.V&&!j.marketingCloudVisitorID,a=j.Z&&!j.S&&!j.analyticsVisitorID,n=j.ba&&!j.U&&!j.audienceManagerLocationHint,k=j.aa&&!j.T&&!j.audienceManagerBlob,m=j.fa&&!j.W,p=p||a||n||k||m?!1:!0);
j.da||j.I||(j.$a(j.xa)?j.I=!0:j.da=!0);
j.da&&!j.I&&(p=!1);
return p
};
j.o=c;
j.u=0;
j.callbackWhenReadyToTrack=function(n,a,m){var k;
k={};
k.qb=n;
k.pb=a;
k.nb=m;
j.o==c&&(j.o=[]);
j.o.push(k);
0==j.u&&(j.u=setInterval(j.j,100))
};
j.j=function(){var a;
if(j.isReadyToTrack()&&(j.kb(),j.o!=c)){for(;
0<j.o.length;
){a=j.o.shift(),a.pb.apply(a.qb,a.nb)
}}};
j.kb=function(){j.u&&(clearInterval(j.u),j.u=0)
};
j.fb=function(p){var a,n,k=c,m=c;
if(!j.isReadyToTrack()){a=[];
if(p!=c){for(n in k={},p){k[n]=p[n]
}}m={};
j.Va(m,!0);
a.push(k);
a.push(m);
j.callbackWhenReadyToTrack(j,j.track,a);
return !0
}return !1
};
j.xb=function(){var p=j.cookieRead("s_fid"),a="",n="",k;
k=8;
var m=4;
if(!p||0>p.indexOf("-")){for(p=0;
16>p;
p++){k=Math.floor(Math.random()*k),a+="0123456789ABCDEF".substring(k,k+1),k=Math.floor(Math.random()*m),n+="0123456789ABCDEF".substring(k,k+1),k=m=16
}p=a+"-"+n
}j.cookieWrite("s_fid",p,1)||(p=0);
return p
};
j.t=j.track=function(r,a){var p,m=new Date,n="s"+Math.floor(m.getTime()/10800000)%10+Math.floor(10000000000000*Math.random()),k=m.getYear(),k="t="+j.escape(m.getDate()+"/"+m.getMonth()+"/"+(1900>k?k+1900:k)+" "+m.getHours()+":"+m.getMinutes()+":"+m.getSeconds()+" "+m.getDay()+" "+m.getTimezoneOffset());
j.visitor&&j.visitor.getAuthState&&(j.authState=j.visitor.getAuthState());
j.p("_s");
j.fb(r)||(a&&j.R(a),r&&(p={},j.Va(p,0),j.R(r)),j.Db()&&!j.visitorOptedOut&&(j.analyticsVisitorID||j.marketingCloudVisitorID||(j.fid=j.xb()),j.Hb(),j.usePlugins&&j.doPlugins&&j.doPlugins(j),j.account&&(j.abort||(j.trackOffline&&!j.timestamp&&(j.timestamp=Math.floor(m.getTime()/1000)),m=g.location,j.pageURL||(j.pageURL=m.href?m.href:m),j.referrer||j.Wa||(m=j.Util.getQueryParam("adobe_mc_ref",null,null,!0),j.referrer=m||void 0===m?void 0===m?"":m:e.document.referrer),j.Wa=1,j.referrer=j.vb(j.referrer),j.p("_g")),j.Ab()&&!j.abort&&(j.visitor&&!j.supplementalDataID&&j.visitor.getSupplementalDataID&&(j.supplementalDataID=j.visitor.getSupplementalDataID("AppMeasurement:"+j._in,j.expectSupplementalData?!1:!0)),j.Bb(),k+=j.zb(),j.Gb(n,k),j.p("_t"),j.referrer=""))),r&&j.R(p,1));
j.abort=j.supplementalDataID=j.timestamp=j.pageURLRest=j.linkObject=j.clickObject=j.linkURL=j.linkName=j.linkType=g.s_objectID=j.pe=j.pev1=j.pev2=j.pev3=j.e=j.lightProfileID=0
};
j.za=[];
j.registerPreTrackCallback=function(m){for(var a=[],k=1;
k<arguments.length;
k++){a.push(arguments[k])
}"function"==typeof m?j.za.push([m,a]):j.debugTracking&&j.F("DEBUG: Non function type passed to registerPreTrackCallback")
};
j.cb=function(a){j.wa(j.za,a)
};
j.ya=[];
j.registerPostTrackCallback=function(m){for(var a=[],k=1;
k<arguments.length;
k++){a.push(arguments[k])
}"function"==typeof m?j.ya.push([m,a]):j.debugTracking&&j.F("DEBUG: Non function type passed to registerPostTrackCallback")
};
j.bb=function(a){j.wa(j.ya,a)
};
j.wa=function(r,a){if("object"==typeof r){for(var p=0;
p<r.length;
p++){var m=r[p][0],n=r[p][1];
n.unshift(a);
if("function"==typeof m){try{m.apply(null,n)
}catch(k){j.debugTracking&&j.F(k.message)
}}}}};
j.tl=j.trackLink=function(p,a,n,k,m){j.linkObject=p;
j.linkType=a;
j.linkName=n;
m&&(j.l=p,j.A=m);
return j.track(k)
};
j.trackLight=function(n,a,m,k){j.lightProfileID=n;
j.lightStoreForSeconds=a;
j.lightIncrementBy=m;
return j.track(k)
};
j.clearVars=function(){var k,a;
for(k=0;
k<j.g.length;
k++){if(a=j.g[k],"prop"==a.substring(0,4)||"eVar"==a.substring(0,4)||"hier"==a.substring(0,4)||"list"==a.substring(0,4)||"channel"==a||"events"==a||"eventList"==a||"products"==a||"productList"==a||"purchaseID"==a||"transactionID"==a||"state"==a||"zip"==a||"campaign"==a){j[a]=void 0
}}};
j.tagContainerMarker="";
j.Gb=function(t,a){var r,n=j.trackingServer;
r="";
var p=j.dc,m="sc.",k=j.visitorNamespace;
n?j.trackingServerSecure&&j.ssl&&(n=j.trackingServerSecure):(k||(k=j.account,n=k.indexOf(","),0<=n&&(k=k.substring(0,n)),k=k.replace(/[^A-Za-z0-9]/g,"")),r||(r="2o7.net"),p=p?(""+p).toLowerCase():"d1","2o7.net"==r&&("d1"==p?p="112":"d2"==p&&(p="122"),m=""),n=k+"."+p+"."+m+r);
r=j.ssl?"https://":"http://";
p=j.AudienceManagement&&j.AudienceManagement.isReady()||0!=j.usePostbacks;
r+=n+"/b/ss/"+j.account+"/"+(j.mobile?"5.":"")+(p?"10":"1")+"/JS-"+j.version+(j.Kb?"T":"")+(j.tagContainerMarker?"-"+j.tagContainerMarker:"")+"/"+t+"?AQB=1&ndh=1&pf=1&"+(p?"callback=s_c_il["+j._in+"].doPostbacks&et=1&":"")+a+"&AQE=1";
j.cb(r);
j.tb(r);
j.ka()
};
j.Ua=/{(%?)(.*?)(%?)}/;
j.Ob=RegExp(j.Ua.source,"g");
j.ub=function(w){if("object"==typeof w.dests){for(var a=0;
a<w.dests.length;
++a){var u=w.dests[a];
if("string"==typeof u.c&&"aa."==u.id.substr(0,3)){for(var r=u.c.match(j.Ob),t=0;
t<r.length;
++t){var p=r[t],n=p.match(j.Ua),m="";
"%"==n[1]&&"timezone_offset"==n[2]?m=(new Date).getTimezoneOffset():"%"==n[1]&&"timestampz"==n[2]&&(m=j.yb());
u.c=u.c.replace(p,j.escape(m))
}}}}};
j.yb=function(){var k=new Date,a=new Date(60000*Math.abs(k.getTimezoneOffset()));
return j.k(4,k.getFullYear())+"-"+j.k(2,k.getMonth()+1)+"-"+j.k(2,k.getDate())+"T"+j.k(2,k.getHours())+":"+j.k(2,k.getMinutes())+":"+j.k(2,k.getSeconds())+(0<k.getTimezoneOffset()?"-":"+")+j.k(2,a.getUTCHours())+":"+j.k(2,a.getUTCMinutes())
};
j.k=function(m,k){return(Array(m+1).join(0)+k).slice(-m)
};
j.ta={};
j.doPostbacks=function(m){if("object"==typeof m){if(j.ub(m),"object"==typeof j.AudienceManagement&&"function"==typeof j.AudienceManagement.isReady&&j.AudienceManagement.isReady()&&"function"==typeof j.AudienceManagement.passData){j.AudienceManagement.passData(m)
}else{if("object"==typeof m&&"object"==typeof m.dests){for(var a=0;
a<m.dests.length;
++a){var k=m.dests[a];
"object"==typeof k&&"string"==typeof k.c&&"string"==typeof k.id&&"aa."==k.id.substr(0,3)&&(j.ta[k.id]=new Image,j.ta[k.id].alt="",j.ta[k.id].src=k.c)
}}}}};
j.tb=function(a){j.i||j.Cb();
j.i.push(a);
j.ma=j.C();
j.Sa()
};
j.Cb=function(){j.i=j.Eb();
j.i||(j.i=[])
};
j.Eb=function(){var m,a;
if(j.ra()){try{(a=g.localStorage.getItem(j.pa()))&&(m=g.JSON.parse(a))
}catch(k){}return m
}};
j.ra=function(){var a=!0;
j.trackOffline&&j.offlineFilename&&g.localStorage&&g.JSON||(a=!1);
return a
};
j.Ja=function(){var a=0;
j.i&&(a=j.i.length);
j.q&&a++;
return a
};
j.ka=function(){if(j.q&&(j.B&&j.B.complete&&j.B.G&&j.B.va(),j.q)){return
}j.Ka=c;
if(j.qa){j.ma>j.O&&j.Qa(j.i),j.ua(500)
}else{var a=j.ob();
if(0<a){j.ua(a)
}else{if(a=j.Ga()){j.q=1,j.Fb(a),j.Jb(a)
}}}};
j.ua=function(a){j.Ka||(a||(a=0),j.Ka=setTimeout(j.ka,a))
};
j.ob=function(){var a;
if(!j.trackOffline||0>=j.offlineThrottleDelay){return 0
}a=j.C()-j.Pa;
return j.offlineThrottleDelay<a?0:j.offlineThrottleDelay-a
};
j.Ga=function(){if(0<j.i.length){return j.i.shift()
}};
j.Fb=function(m){if(j.debugTracking){var a="AppMeasurement Debug: "+m;
m=m.split("&");
var k;
for(k=0;
k<m.length;
k++){a+="\n\t"+j.unescape(m[k])
}j.F(a)
}};
j.gb=function(){return j.marketingCloudVisitorID||j.analyticsVisitorID
};
j.Y=!1;
var y;
try{y=JSON.parse('{"x":"y"}')
}catch(l){y=null
}y&&"y"==y.x?(j.Y=!0,j.X=function(k){return JSON.parse(k)
}):g.$&&g.$.parseJSON?(j.X=function(k){return g.$.parseJSON(k)
},j.Y=!0):j.X=function(){return null
};
j.Jb=function(r){var a,p,m;
j.gb()&&2047<r.length&&("undefined"!=typeof XMLHttpRequest&&(a=new XMLHttpRequest,"withCredentials" in a?p=1:a=0),a||"undefined"==typeof XDomainRequest||(a=new XDomainRequest,p=2),a&&(j.AudienceManagement&&j.AudienceManagement.isReady()||0!=j.usePostbacks)&&(j.Y?a.Ba=!0:a=0));
!a&&j.Ta&&(r=r.substring(0,2047));
!a&&j.d.createElement&&(0!=j.usePostbacks||j.AudienceManagement&&j.AudienceManagement.isReady())&&(a=j.d.createElement("SCRIPT"))&&"async" in a&&((m=(m=j.d.getElementsByTagName("HEAD"))&&m[0]?m[0]:j.d.body)?(a.type="text/javascript",a.setAttribute("async","async"),p=3):a=0);
a||(a=new Image,a.alt="",a.abort||"undefined"===typeof g.InstallTrigger||(a.abort=function(){a.src=c
}));
a.Da=function(){try{a.G&&(clearTimeout(a.G),a.G=0)
}catch(t){}};
a.onload=a.va=function(){j.bb(r);
a.Da();
j.sb();
j.ga();
j.q=0;
j.ka();
if(a.Ba){a.Ba=!1;
try{j.doPostbacks(j.X(a.responseText))
}catch(t){}}};
a.onabort=a.onerror=a.Ha=function(){a.Da();
(j.trackOffline||j.qa)&&j.q&&j.i.unshift(j.rb);
j.q=0;
j.ma>j.O&&j.Qa(j.i);
j.ga();
j.ua(500)
};
a.onreadystatechange=function(){4==a.readyState&&(200==a.status?a.va():a.Ha())
};
j.Pa=j.C();
if(1==p||2==p){var n=r.indexOf("?");
m=r.substring(0,n);
n=r.substring(n+1);
n=n.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,"");
1==p?(a.open("POST",m,!0),a.send(n)):2==p&&(a.open("POST",m),a.send(n))
}else{if(a.src=r,3==p){if(j.Na){try{m.removeChild(j.Na)
}catch(k){}}m.firstChild?m.insertBefore(a,m.firstChild):m.appendChild(a);
j.Na=j.B
}}a.G=setTimeout(function(){a.G&&(a.complete?a.va():(j.trackOffline&&a.abort&&a.abort(),a.Ha()))
},5000);
j.rb=r;
j.B=g["s_i_"+j.replace(j.account,",","_")]=a;
if(j.useForcedLinkTracking&&j.K||j.A){j.forcedLinkTrackingTimeout||(j.forcedLinkTrackingTimeout=250),j.ha=setTimeout(j.ga,j.forcedLinkTrackingTimeout)
}};
j.sb=function(){if(j.ra()&&!(j.Oa>j.O)){try{g.localStorage.removeItem(j.pa()),j.Oa=j.C()
}catch(a){}}};
j.Qa=function(k){if(j.ra()){j.Sa();
try{g.localStorage.setItem(j.pa(),g.JSON.stringify(k)),j.O=j.C()
}catch(a){}}};
j.Sa=function(){if(j.trackOffline){if(!j.offlineLimit||0>=j.offlineLimit){j.offlineLimit=10
}for(;
j.i.length>j.offlineLimit;
){j.Ga()
}}};
j.forceOffline=function(){j.qa=!0
};
j.forceOnline=function(){j.qa=!1
};
j.pa=function(){return j.offlineFilename+"-"+j.visitorNamespace+j.account
};
j.C=function(){return(new Date).getTime()
};
j.La=function(k){k=k.toLowerCase();
return 0!=k.indexOf("#")&&0!=k.indexOf("about:")&&0!=k.indexOf("opera:")&&0!=k.indexOf("javascript:")?!0:!1
};
j.setTagContainer=function(n){var a,m,k;
j.Kb=n;
for(a=0;
a<j._il.length;
a++){if((m=j._il[a])&&"s_l"==m._c&&m.tagContainerName==n){j.R(m);
if(m.lmq){for(a=0;
a<m.lmq.length;
a++){k=m.lmq[a],j.loadModule(k.n)
}}if(m.ml){for(k in m.ml){if(j[k]){for(a in n=j[k],k=m.ml[k],k){!Object.prototype[a]&&("function"!=typeof k[a]||0>(""+k[a]).indexOf("s_c_il"))&&(n[a]=k[a])
}}}}if(m.mmq){for(a=0;
a<m.mmq.length;
a++){k=m.mmq[a],j[k.m]&&(n=j[k.m],n[k.f]&&"function"==typeof n[k.f]&&(k.a?n[k.f].apply(n,k.a):n[k.f].apply(n)))
}}if(m.tq){for(a=0;
a<m.tq.length;
a++){j.track(m.tq[a])
}}m.s=j;
break
}}};
j.Util={urlEncode:j.escape,urlDecode:j.unescape,cookieRead:j.cookieRead,cookieWrite:j.cookieWrite,getQueryParam:function(r,a,p,m){var n,k="";
a||(a=j.pageURL?j.pageURL:g.location);
p=p?p:"&";
if(!r||!a){return k
}a=""+a;
n=a.indexOf("?");
if(0>n){return k
}a=p+a.substring(n+1)+p;
if(!m||!(0<=a.indexOf(p+r+p)||0<=a.indexOf(p+r+"="+p))){n=a.indexOf("#");
0<=n&&(a=a.substr(0,n)+p);
n=a.indexOf(p+r+"=");
if(0>n){return k
}a=a.substring(n+p.length+r.length+1);
n=a.indexOf(p);
0<=n&&(a=a.substring(0,n));
0<a.length&&(k=j.unescape(a));
return k
}}};
j.H="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
j.g=j.H.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));
j.na="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");
j.P=j.na.slice(0);
j.Aa="account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks registerPreTrackCallback registerPostTrackCallback AudienceManagement".split(" ");
for(f=0;
250>=f;
f++){76>f&&(j.g.push("prop"+f),j.P.push("prop"+f)),j.g.push("eVar"+f),j.P.push("eVar"+f),6>f&&j.g.push("hier"+f),4>f&&j.g.push("list"+f)
}f="pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID".split(" ");
j.g=j.g.concat(f);
j.H=j.H.concat(f);
j.ssl=0<=g.location.protocol.toLowerCase().indexOf("https");
j.charSet="UTF-8";
j.contextData={};
j.offlineThrottleDelay=0;
j.offlineFilename="AppMeasurement.offline";
j.Pa=0;
j.ma=0;
j.O=0;
j.Oa=0;
j.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
j.w=g;
j.d=g.document;
try{if(j.Ta=!1,navigator){var o=navigator.userAgent;
if("Microsoft Internet Explorer"==navigator.appName||0<=o.indexOf("MSIE ")||0<=o.indexOf("Trident/")&&0<=o.indexOf("Windows NT 6")){j.Ta=!0
}}}catch(h){}j.ga=function(){j.ha&&(g.clearTimeout(j.ha),j.ha=c);
j.l&&j.K&&j.l.dispatchEvent(j.K);
j.A&&("function"==typeof j.A?j.A():j.l&&j.l.href&&(j.d.location=j.l.href));
j.l=j.K=j.A=0
};
j.Ra=function(){j.b=j.d.body;
j.b?(j.v=function(A){var B,x,u,w,t;
if(!(j.d&&j.d.getElementById("cppXYctnr")||A&&A["s_fe_"+j._in])){if(j.Ca){if(j.useForcedLinkTracking){j.b.removeEventListener("click",j.v,!1)
}else{j.b.removeEventListener("click",j.v,!0);
j.Ca=j.useForcedLinkTracking=0;
return
}}else{j.useForcedLinkTracking=0
}j.clickObject=A.srcElement?A.srcElement:A.target;
try{if(!j.clickObject||j.N&&j.N==j.clickObject||!(j.clickObject.tagName||j.clickObject.parentElement||j.clickObject.parentNode)){j.clickObject=0
}else{var r=j.N=j.clickObject;
j.la&&(clearTimeout(j.la),j.la=0);
j.la=setTimeout(function(){j.N==r&&(j.N=0)
},10000);
u=j.Ja();
j.track();
if(u<j.Ja()&&j.useForcedLinkTracking&&A.target){for(w=A.target;
w&&w!=j.b&&"A"!=w.tagName.toUpperCase()&&"AREA"!=w.tagName.toUpperCase();
){w=w.parentNode
}if(w&&(t=w.href,j.La(t)||(t=0),x=w.target,A.target.dispatchEvent&&t&&(!x||"_self"==x||"_top"==x||"_parent"==x||g.name&&x==g.name))){try{B=j.d.createEvent("MouseEvents")
}catch(p){B=new g.MouseEvent
}if(B){try{B.initMouseEvent("click",A.bubbles,A.cancelable,A.view,A.detail,A.screenX,A.screenY,A.clientX,A.clientY,A.ctrlKey,A.altKey,A.shiftKey,A.metaKey,A.button,A.relatedTarget)
}catch(k){B=0
}B&&(B["s_fe_"+j._in]=B.s_fe=1,A.stopPropagation(),A.stopImmediatePropagation&&A.stopImmediatePropagation(),A.preventDefault(),j.l=A.target,j.K=B)
}}}}}catch(a){j.clickObject=0
}}},j.b&&j.b.attachEvent?j.b.attachEvent("onclick",j.v):j.b&&j.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&j.d.createEvent||0<=navigator.userAgent.indexOf("Firefox/2")&&g.MouseEvent)&&(j.Ca=1,j.useForcedLinkTracking=1,j.b.addEventListener("click",j.v,!0)),j.b.addEventListener("click",j.v,!1))):setTimeout(j.Ra,30)
};
j.Ra();
b?j.setAccount(b):j.F("Error, missing Report Suite ID in AppMeasurement initialization");
j.loadModule("ActivityMap");
j.visitor=Visitor.getInstance("434717FE52A6476F0A490D4C@AdobeOrg");
j.prop53=(typeof(Visitor)!="undefined"?true:false)
}function s_gi(b){var h,g=window.s_c_il,c,e,f=b.split(","),o,j,l=0;
if(g){for(c=0;
!l&&c<g.length;
){h=g[c];
if("s_c"==h._c&&(h.account||h.oun)){if(h.account&&h.account==b){l=1
}else{for(e=h.account?h.account:h.oun,e=h.allAccounts?h.allAccounts:e.split(","),o=0;
o<f.length;
o++){for(j=0;
j<e.length;
j++){f[o]==e[j]&&(l=1)
}}}}c++
}}l?h.setAccount&&h.setAccount(b):h=new AppMeasurement(b);
return h
}AppMeasurement.getInstance=s_gi;
window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var e=window,b=e.s_giq,c,f,g;
if(b){for(c=0;
c<b.length;
c++){f=b[c],g=s_gi(f.oun),g.setAccount(f.un),g.setTagContainer(f.tagContainerName)
}}e.s_giq=0
}s_pgicq();
window.PS=window.PS||{};
(function(f){function c(){this.evars={};
this.generics={};
this.info={};
this.interpreters={};
this.mappers={};
this.plugins={};
this.props={};
this.tracker={};
this.utils={}
}c.prototype.isSitecatalystEnabled=function b(){var h=document.getElementsByTagName("body"),g=null;
if(!!h&&h.length>0){g=h[0]
}return !!g&&(" "+g.className+" ").indexOf(" disable-sitecat-tracking ")===-1&&!!window.analytics
};
c.prototype.isAMarketAnalisysPage=function a(){return !!this.info.insight
};
c.prototype.init=function e(){if(this.isSitecatalystEnabled()){var h=this.mappers.DEFAULT,g;
if(this.isAMarketAnalisysPage()){for(g in this.mappers.MARKET_ANALYSIS){if(this.mappers.MARKET_ANALYSIS.hasOwnProperty(g)){h[g]=this.mappers.MARKET_ANALYSIS[g]
}}}this.setMapper(h);
return true
}window.dlog("Sitecat: did not run because either sitecat is purposefully disabled for this page, the analytics object doesnt exist, or insight tracking is still in place (the IG_WA object is still there)");
return false
};
f.SiteCatalyst=new c()
}(window.PS));
window.PS=window.PS||{};
window.PS.storage=window.PS.storage||{};
(function(e,m,D){var F={userStatus:{LOGGED_IN:"logged-in",ANONYMOUS:"anonymous",LOGGED_OUT:"logged-out",NOT_SET:"not set"}};
e.utils={channels:{PAID_SEARCH:{name:"Paid search",code:"PPC"},DISPLAY:{name:"Display",code:"DISP"},IB:{name:"IB",code:"IB"},DIRECT_MARKETING_PARTNERS:{name:"Direct Marketing Partners",code:"DMP"},EMAIL_OTHER:{name:"Email",code:"EMAIL"},EMAIL_IG_PROSPECT:{name:"Email IG prospect",code:"EMAILIGPROSPECT"},EMAIL_PAID_PROSPECT:{name:"Email paid prospect",code:"EMAILPAIDPROSPECT"},PAID_SOCIAL:{name:"Paid social",code:"PAIDSOC"},SOCIAL:{name:"Social",code:"SOC"},DIRECT:{name:"Direct",code:"DIR"},NATURAL_SEARCH:{name:"Natural Search",code:"SEO"},IG_REDIRECT:{name:"IG com redirect",code:"IGCOMREDIRECT"},INTERNAL:{name:"Internal",code:"INT"},IG_GTLD:{name:"IG gTLD",code:"IGGTLD"},NON_IG_GTLD:{name:"Non-IG gTLD",code:"NIGGTLD"},OTHER:{name:"Other",code:"OTHREF"},AFFILIATES:{name:"Paid search",code:"PPC"}},parseEnvironment:function N(Q,O){if(!Q){return""
}var P="DEV";
if(Q.indexOf("live")>-1){P="LIVE"
}else{if(!!O&&O.indexOf("web.")>-1){P="UAT"
}else{if(!!O&&O.indexOf("net.")>-1){P="TEST"
}}}return P
},getUserStatus:function j(){var P="",O=document.getElementsByTagName("body")[0].className.toLowerCase();
if(O){if(O.indexOf(F.userStatus.LOGGED_IN)>-1){P=F.userStatus.LOGGED_IN
}else{if(O.indexOf(F.userStatus.ANONYMOUS)>-1){P=F.userStatus.ANONYMOUS
}else{if(O.indexOf(F.userStatus.LOGGED_OUT)>-1){P=F.userStatus.LOGGED_OUT
}else{P=F.userStatus.NOT_SET
}}}}return P
},getCookie:function g(Q){var R=new RegExp("(?:^|;)\\s?"+Q+"=(.*?)(?:;|$)","i"),P=document.cookie.match(R)||[],O="";
if(P.length>0){O=decodeURIComponent(P[1])
}return O
},getSiteCatalystId:function a(){return e.tracker.visitor.getMarketingCloudVisitorID()
},getClientId:function n(){return this.getCookie("client_id")
},getPageName:function A(P,Q){var O=P||"";
if(!!O){O+=":"+Q
}else{O=Q||""
}if(O.indexOf("404")>-1){O+=":"+location.pathname
}return O||location.href
},isMarketFinderSearchResult:function u(P,O){return P&&O&&P.match(/\/ig-search\?query=/)&&O.match(/searchresults/)
},isThankYouPage:function E(){return e.generics.getPageName&&e.generics.getPageName().indexOf("thank")>-1
},getPreviousPageName:function B(O){return e.tracker.getPreviousValue(O,"gpv_pn")
},getMboxDefaultPCId:function w(){var O="";
if(window.mboxFactoryDefault&&window.mboxFactoryDefault.getPCId){O=window.mboxFactoryDefault.getPCId().getId()
}return O
},getDateTimePartitioned:function o(){var O=-(new Date().getTimezoneOffset())/60;
return e.tracker.getTimeParting("d",O)+" "+e.tracker.getTimeParting("h",O)
},createPixel:function h(Q){if(Q){var P=document.createElement("img"),O=document.getElementsByTagName("head")[0];
P.setAttribute("src",Q);
P.setAttribute("height","1");
P.setAttribute("width","1");
P.setAttribute("border","0");
P.style.display="none";
O.appendChild(P)
}},sendSiteCatalystInfoToDCM:function C(){var Q=this.getSiteCatalystId(),O=this.getClientId(),P="//4157917.fls.doubleclick.net/activityi;src=4157917;type=wwwig0;cat=Sitec0;u1="+Q+(O?";u3="+O:"");
this.createPixel(P)
},parseTDValue:function f(O){if(!O){return{}
}var P=O.replace(/\"/g,"").split(":"),U=P.length,V={},T,R=0,S=new RegExp("TD=[^:$]*:([^$]*)","i"),Q=O.match(S)||[];
if(P){V.info=[];
for(R;
R<U;
R+=1){T=P[R].split("=");
if(T.length===2){V[T[0]]=T[1]
}else{V.info.push(P[R])
}}V.personalisationSegment=(Q.length>0)?decodeURIComponent(Q[1]):""
}return V
},getLightboxName:function r(){var O="";
if(window.location.href.indexOf("#")>0){O=window.location.href.matches(/#(\.*)/)
}return O
},isInternationalPage:function(){return e.info.cq_page_name?e.info.cq_page_name.toLowerCase()==="international":""
},getPathInfo:function c(P){if(!P){return{}
}var S={};
var O=P.replace(/-/g," ").split("/");
var R="";
if(O.length>5){for(var Q=4;
Q<(O.length-1);
++Q){R=R+O[Q]+":"
}R=R.substring(0,(R.length-1))
}S.channel=R;
S.siteLanguage=O[3]||"NOT_SET";
S.siteId=O[2]||"";
return S
},getSearchResult:function q(){var O="";
if(document.location.search.indexOf("start=")===-1){O=PS.util.Page.getQuerystring("q")
}return O
},getReferrer:function x(){var P={url:!!m.Browser.pageReferrer?m.Browser.pageReferrer:(document.referrer||""),host:""},Q=new RegExp("[^.]*.([^/?&#]*)","i"),O=P.url.match(Q)||[];
if(O.length>0){P.host=decodeURIComponent(O[1])
}return P
},extractPaidSearchKeywords:function I(){var O=location.href,Q="",R=new RegExp("!!g!!([^&$]*)","i"),P;
if(O.indexOf("s_kwcid")>-1){P=O.match(R)||[];
if(P.length>0){Q=decodeURIComponent(P[1])
}}return Q
},detectChannel:function b(P,O,R){var S="12seconds.tv,backtype.com,bebo.com,blogspot.com,brightkite.com,cafemom.com,classmates.com,dailymotion.com,delicious.com,digg.com,diigo.com,disqus.com,facebook.com,flickr.com,flixster.com,fotolog.com,friendfeed.com,friendster.com,hi5.com,identi.ca,imeem.com,intensedebate.com,jaiku.com,linkedin.com,livejournal.com,mister-wong.com,mixx.com,mylife.com,myspace.com,myyearbook.com,netvibes.com,ning.com,orkut.com,photobucket.com,plurk.com,reddit.com,slideshare.net,smugmug.com,stumbleupon.com,t.co,tagged.com,tumblr.com,twine.com,twitter.com,vimeo.com,wordpress.com,xanga.com,yelp.com,youtube.com,yuku.com,zooomr.com",Q=this.channels.OTHER;
if(O==="1"){Q=this.channels.PAID_SEARCH
}else{if(O==="4"){Q=this.channels.IB
}else{if(O==="2"){Q=this.channels.DISPLAY
}else{if(O==="3"){Q=this.channels.EMAIL_OTHER
}else{if(O==="5"){Q=this.channels.EMAIL_IG_PROSPECT
}else{if(O==="6"){Q=this.channels.EMAIL_PAID_PROSPECT
}else{if(O==="7"){Q=this.channels.PAID_SOCIAL
}else{if(O==="8"){Q=this.channels.NON_IG_GTLD
}else{if(O==="9"||P&&S.indexOf(P.host)>-1){Q=this.channels.SOCIAL
}else{if(O==="10"){Q=this.channels.DIRECT_MARKETING_PARTNERS
}else{if((typeof(P)==="undefined"||P==="")){Q=this.channels.DIRECT
}else{if(P&&R.indexOf(P.host)>-1){Q=this.channels.INTERNAL
}}}}}}}}}}}}return Q
},getCrossVisitsChannels:function M(R,U,O,P,T){var S=">",Q=1;
if(e.tracker.crossVisitParticipation){return e.tracker.crossVisitParticipation(R.code,T,U,O,S,P,Q)
}return""
},getMainReportSuite:function y(O){var P;
if(O){P=O.split(",");
if(P.length>0){return P[0]
}}return""
},getNewOrRepeatVisitor:function p(P){var O="s_nr2";
return e.tracker.getNewRepeat(P,O)
},clearEvents:function z(){e.generics.setLinkTrackEvents("")
},addEvent:function k(O){var Q=1,P=",";
e.tracker.events=e.tracker.apl(e.tracker.events,O,P,Q)
},addProduct:function l(O){var Q=1,P=",";
e.tracker.products=e.tracker.apl(e.tracker.products,O,P,Q)
},getPerformanceTiming:function J(){var O=window.performance||window.msPerformance||window.webkitPerformance||{};
return O.timing
},getContentReady:function G(){var O=this.getPerformanceTiming();
if(O){return O.domComplete-O.navigationStart
}return 0
},getTimeToFirstByte:function H(){var O=this.getPerformanceTiming();
if(O){return O.responseStart-O.navigationStart
}return 0
},getLoadTime:function L(){var O=this.getPerformanceTiming();
if(O){return O.loadEventStart-O.fetchStart
}return 0
},getCompleteLoadTime:function t(){var O=e.tracker.endLoad||(new Date()).getTime(),P=e.tracker.startLoad||O;
return O-P
},getJspVar:function K(P){var O="";
if(!!m.jspVars){O=m.jspVars.get(P)||""
}return O
},autoTracking:function(O,P){if(typeof jq==="function"){jq(O).bind("click",function(S){var W="("+jq(this).parent().siblings(":header").text().toLowerCase().substr(0,20).trim()+")"||"",V=e.utils.getInnerTitle(jq(this).parent()).trim(),Q=jq(this).closest(".parsys").find(":first-child").attr("class"),T=jq(this),U={linkType:"link",text:V+W,position:Q,destination:this.href,pageName:e.props.getPageName()};
if(this.href==="#"||this.target==="_blank"){e.tracker[P]("anchor",U.text,U.position,U.destination,U.pageName)
}else{if(T.hasClass("textimage-button")){U.linkType="imagelink"
}else{if(T.hasClass("button")){U.linkType="button"
}}tt_Redirect(U.destination);
try{if(this.hostname!==window.location.hostname&&this.hostname.indexOf("deal.ig.com")===-1){S.preventDefault();
e.tracker[P](U.linkType,U.text,U.position,U.destination,U.pageName);
setTimeout(function(){window.location.href=U.destination
},1000)
}else{if(!!D.LocalQueue){D.LocalQueue.store("ctaTrack",U,true)
}}}catch(R){dlog("Error tracking "+U.pageName+" click with exception:"+R);
window.location.href=U.destination
}}})
}},getInnerTitle:function(Q){var O=Q.find("img"),P=Q.contents().filter(function(){return this.nodeType===8
});
if(P.length>0){return P[0].nodeValue.toLowerCase()
}if(O.length>0){if(O[0].alt.length>0){return O[0].alt
}}return Q.text().toLowerCase()
},getCurrentClientSplitTestGroup:function(){if(window.PS.startup.generateHashNumber){return PS.startup.generateHashNumber()<=0.5?"A":"B"
}return"-"
},rebindTrackLink:function(){if(window.s&&!window.s.tl_backup){window.s.tl_backup=window.s.tl;
window.s.tl=function(S,O,U,Q,T){var R=s.visitorNamespace||s.fun;
var P=setInterval(function(){if(!!window["s_i_"+s._in+"_"+R]){clearInterval(P);
window.s.tl_backup(S,O,U,Q,T);
window.PS.util.pubsub.publishAndRemove("SiteCatalyst.cleanTrackVars")
}},100)
};
window.s.reboundTrackLink=true
}}}
}(window.PS.SiteCatalyst,window.PS.util,window.PS.storage));
(function(a){a.DEFAULT={generics:{pageName:"pageName",channel:"channel",currencyCode:"currencyCode",visitorNamespace:"visitorNamespace",codeVersion:"codeVersion",trackingServer:"trackingServer",trackingServerSecure:"trackingServerSecure",trackDownloadLinks:"trackDownloadLinks",trackExternalLinks:"trackExternalLinks",trackInlineStats:"trackInlineStats",linkDownloadFileTypes:"linkDownloadFileTypes",linkInternalFilters:"linkInternalFilters",linkLeaveQueryString:"linkLeaveQueryString",linkTrackVarsGeneral:"linkTrackVarsGeneral",linkTrackVars:"linkTrackVars",linkTrackEvents:"linkTrackEvents",startLoad:"startLoad",endLoad:"endLoad",cookieDomainPeriods:"cookieDomainPeriods",fpCookieDomainPeriods:"fpCookieDomainPeriods",usePlugins:"usePlugins",hier1:"hier1",refr:"refr",referrer:"referrer",refEnd:"refEnd",refDom:"refDom",server:"server",channelManager:"channelManager",mktCh:"mktCh",cmpid:"cmpid",campaign:"campaign",dfaCSID:"dfaCSID",currentYear:"currentYear",tzos:"tzos",events:"events",products:"products",socialList:"socialList",lastEvent:"lastEvent",enableVideoTracking:"enableVideoTracking",tnt:"tnt",sitecatalystId:"s_vi",seminarID:"seminar_id"},props:{sCodeVersion:"prop1",siteCountry:"prop2",siteId:"prop3",siteLanguage:"prop4",pageUrl:"prop5",dayParting:"prop6",pageTitle:"prop7",siteSubSection:"prop8",pageName:"prop9",campaign:"prop10",internalSearchTerm:"prop11",numberOfSearchResult:"prop12",tdValue:"prop13",onsitePromotions:"prop14",seminarID:"prop15",ipAddress:"prop16",marketingChannelPaths:"prop18",userSegment:"prop19",userStatus:"prop20",rssTitle:"prop21",reportSuiteID:"prop22",pageLoadTime:"prop23",siteCatalystVisitorID:"prop25",mobileSiteCatalystVisitorID:"prop26",prevPages:"prop27",videoURL:"prop30",cta:"prop33",previousPage:"prop34",mboxPCID:"prop35",wizardEvent:"prop36",videoPlayerType:"prop45",insightPageType:"prop46",userAgent:"prop47",pageType:"prop49",market:"prop50",labsUserId:"prop52",TnTOffers:"prop57",chId:"prop58",platformId:"prop62",googleKeywords:"prop68",personalisedPagename:"prop70",personalisationSegments:"prop71",cfdOrFsb:"prop73",environment:"prop74",pageTags:"prop75"},evars:{pageName:"eVar1",siteCountry:"eVar2",siteName:"eVar3",siteLanguage:"eVar4",newRepeatVisitor:"eVar5",dayParting:"eVar6",onsitePromotions:"eVar7",emailType:"eVar8",firstQPID:"eVar9",QPIDsContributing:"eVar10",internalSearchTerm:"eVar11",numberofSearchResults:"eVar12",applicationFormIRPStatuses:"eVar13",socialShares:"eVar14",seminarID:"eVar15",accountType:"eVar16",applicationFormType:"eVar17",timeMAJSExecutionTime:"eVar18",crossVisitMarketingChannelStartofVisit:"eVar19",clientProspect:"eVar20",rssTitle:"eVar21",reportSuiteID:"eVar22",pageLoadTime:"eVar23",igAccountID:"eVar24",siteCatalystVisitorID:"eVar25",adlenss_kwcid:"eVar26",campaignsbyQPID:"eVar27",crossVisitMarketingChannelAllTouchpoints:"eVar28",campaignsbyKenshooID:"eVar29",videoName:"eVar30",igIDCookieTDValue:"eVar31",responsysCUID:"eVar32",callsToAction:"eVar33",linkPage:"eVar34",mboxPCID:"eVar35",puredealTool:"eVar36",adCrID:"eVar37",sourceofApplication:"eVar38",adPlID:"eVar39",timeFinancialChartLoadTime:"eVar40",pageLoadTimeMS:"eVar41",timeDomContentReady:"eVar42",timeCompletePageLoad:"eVar43",videoSegments:"eVar44",videoPlayerType:"eVar45",insightPageType:"eVar46",timeTimeto1stByte:"eVar47",dFAInsightViewThrough:"eVar48",contentMetatags:"eVar49",market:"eVar50",marketFinderSearchedMarket:"eVar51",labsUserID:"eVar52",xSiteUserId:"eVar53",splitTestGroup:"eVar55",TnTOffers:"eVar57",chID:"eVar58",igClientID:"eVar61",platformID:"eVar62",socialCampaign:"eVar64",googleKeywordfromReferrer:"eVar68",queryString:"eVar69",personalisedPagename:"eVar70",personalisationSegments:"eVar71",loggedinState:"eVar72",cFDorFSB:"eVar73",environment:"eVar74",eFID:"eVar75"},events:{pageView:"event1",rssFeedSubscription:"event10",pageLoadTimeCounter:"event11",webinarRegistration:"event12",firstVisit:"event13",labsLogins:"event14",videoPlayed:"event15",googleBotHit:"event16",custom17:"event17",videoCompletes:"event18",videoTimeViewed:"event19",openDemoAccount:"event2",liveChatClick:"event20",thankyouReferaFriend:"event24",thankyouReview:"event25",thankyouGuide:"event26",impressions:"event27",cost:"event28",clicks:"event29",openFullAccount:"event3",qsVariable:"event30",posVariable:"event31",additionalAccountOpens:"event32",additionalAccountFails:"event33",applicationPage1:"event35",applicationPage2:"event36",applicationPage3:"event37",applicationPage4:"event38",applicationPage5:"event39",applicationPage6:"event40",applicationPage7:"event46",applicationPage8:"event47",internalSearch:"event4",videoSegmentViews:"event41",dfaInsightTimeouts:"event42",failedAccountApplication:"event43",thankyouGeneral:"event44",marketSharesFinderSearch:"event45",logins:"event5",offsiteFullAccountOpen:"event54",offsiteDemoAccountOpen:"event55",offsiteFollowup:"event56",offsiteFailedAccountApplication:"event57",puredealtoolused:"event58",wizardPromptShown:"event59",followup:"event6",wizardContentViewed:"event60",wizardPromptDismissed:"event61",demoLogins:"event62",playdealerLogins:"event63",offsiteAdditionalAccountOpens:"event64",offsiteAdditionalAccountFails:"event65",countofPuredealAccountIDs:"event66",countofPuredealClientIDs:"event67",liveChatView:"event7",totalCompletedIRPVisit:"event75",totalCompletedIRP:"event76",timeDOMContentReady:"event77",timeCompletePageLoad:"event78",timeToFirstByte:"event79",seminarRegistration:"event8",videoFirstQuarterMilestone:"event80",videoSecondQuarterMilestone:"event81",videoThirdQuarterMilestone:"event82",helpSupport:"event9"}}
}(window.PS.SiteCatalyst.interpreters));
(function(a){function b(c){return c.charAt(0).toUpperCase()+c.substr(1,c.length)
}a.getTrackMethod=function(e,c){return function(f){a.setTrackEvents[c[e]]=((a.getTrackEvents())?a.getTrackEvents()+",":"")+f
}
};
a.getSetterMethod=function(e,c){return function(g){a.tracker[c[e]]=g;
if(a.generics.setLinkTrackVarsGeneral&&a.generics.getLinkTrackVarsGeneral){var f=a.generics.getLinkTrackVarsGeneral()||"";
if(f){f+=","
}a.tracker[a.generics.linkTrackVarsGeneral]=f+c[e]
}}
};
a.getGetterMethod=function(e,c){return function(){return a.tracker[c[e]]
}
};
a.cloneEvarValue=function(e){var c=e.match(/[0-9]+/);
return"D=v"+c
};
a.clonePropValue=function(e){var c=e.match(/[0-9]+/);
return"D=c"+c
};
a.cloneGenericValue=function(c){return"D="+c
};
a.props.init=function(){var e,c;
for(e in a.interpreter.props){if(a.interpreter.props.hasOwnProperty(e)){c=b(e);
a.props["set"+c]=a.getSetterMethod(e,a.interpreter.props);
a.props["get"+c]=a.getGetterMethod(e,a.interpreter.props)
}}};
a.evars.init=function(){var e,c;
for(e in a.interpreter.evars){if(a.interpreter.evars.hasOwnProperty(e)){c=b(e);
a.evars["set"+c]=a.getSetterMethod(e,a.interpreter.evars);
a.evars["get"+c]=a.getGetterMethod(e,a.interpreter.evars)
}}};
a.generics.init=function(){var e,c;
for(e in a.interpreter.generics){if(a.interpreter.generics.hasOwnProperty(e)){c=b(e);
a.generics["set"+c]=a.getSetterMethod(e,a.interpreter.generics);
a.generics["get"+c]=a.getGetterMethod(e,a.interpreter.generics)
}}};
a.setInterpreter=function(c){if(c){a.interpreter=c;
a.props.init();
a.evars.init();
a.generics.init()
}}
}(window.PS.SiteCatalyst));
(function(a){a.mappers.DEFAULT={initTracker:function(){a.info=window.analytics||{s_account:"adviggroupcomtest,adviggrouptestrollup",page_title:"ANALYTICS OBJECT NOT SET",cq_page_name:"ANALYTICS OBJECT NOT SET",path:"/content/igcom/en_GB"};
if(a.utils.isInternationalPage()){if(location.hostname.indexOf("www")===0){a.info.s_account="adviggroupcomlive,adviggrouprollup"
}else{a.info.s_account="adviggroupcomtest,adviggrouptestrollup"
}}if(a.interpreters.DEFAULT){a.setInterpreter(a.interpreters.DEFAULT)
}if(a.info.s_account){a.tracker=window.s=window.s_gi(a.info.s_account)
}a.utils.rebindTrackLink()
},trackDefaultVariables:function(){var b="javascript";
a.generics.setVisitorNamespace("iggroup");
a.generics.setCodeVersion("sc:140314");
a.generics.setTrackingServer("ig.ig.com");
a.generics.setTrackingServerSecure("sig.ig.com");
a.generics.setTrackDownloadLinks(true);
a.generics.setTrackExternalLinks(true);
a.generics.setTrackInlineStats(true);
a.generics.setLinkDownloadFileTypes("exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx,xml");
a.generics.setLinkInternalFilters(b+":,"+window.location.hostname);
a.generics.setLinkLeaveQueryString(false);
a.generics.setLinkTrackVarsGeneral("prop1,prop4,prop9,prop22,eVar1,eVar4,eVar22,eVar62,eVar72,eVar74");
a.generics.setLinkTrackVars(a.generics.getLinkTrackVarsGeneral());
a.generics.setLinkTrackEvents("None");
if(!a.generics.getStartLoad()){a.generics.setStartLoad((new Date()).getTime())
}if(!a.generics.getEndLoad()){a.generics.setEndLoad(0)
}a.generics.setCookieDomainPeriods(2);
a.generics.setFpCookieDomainPeriods(location.hostname.split(".").length-1);
a.generics.setCurrencyCode("GBP");
a.generics.setUsePlugins(true)
},trackUserVariables:function(){var e=a.utils.getCookie("ID"),f=a.utils.parseTDValue(e),c=(f.PTI||(f.A&&(f.A==="1")&&location.hostname.indexOf("demo")===-1)||f.CS),b=a.utils.getCookie("client_id");
if(!a.evars.getLoggedinState()){a.evars.setLoggedinState(a.utils.getUserStatus().toLowerCase())
}if((a.evars.getLoggedinState()==="logged-in")||c||b){a.evars.setClientProspect("client")
}else{a.evars.setClientProspect("prospect")
}a.evars.setIgClientID(b)
},trackPageVariables:function(){var g=a.utils.getPathInfo(a.info.path),e,c=a.utils.getSearchResult(),f,b;
a.generics.setChannel(g.channel);
a.props.setPageTitle(a.info.cq_page_name.replace(/-/g," ").toLowerCase());
e=a.utils.getPageName(a.generics.getChannel(),a.props.getPageTitle());
a.generics.setPageName(e);
a.props.setPageName(a.cloneGenericValue(a.interpreter.generics.pageName));
a.props.setSiteLanguage(g.siteLanguage);
a.props.setSiteId(g.siteId);
a.props.setSCodeVersion(a.generics.getCodeVersion());
a.props.setReportSuiteID(a.cloneEvarValue(a.interpreter.evars.reportSuiteID));
a.props.setInternalSearchTerm(c);
a.props.setPageTags(a.info.content_tags);
a.evars.setSiteLanguage(a.clonePropValue(a.interpreter.props.siteLanguage));
a.evars.setPageName(a.cloneGenericValue(a.interpreter.generics.pageName));
f=a.utils.getMainReportSuite(a.info.s_account);
a.evars.setReportSuiteID(f);
b=a.utils.parseEnvironment(f,location.hostname);
a.evars.setEnvironment(b)
},track:function(){this.trackDefaultVariables();
this.trackUserVariables();
this.trackPageVariables()
},doPlugins:function(){if(!a.tracker){this.initTracker()
}var b,q,e,w,m,C,f,j,o,l,n,A,g,B,r,F,z,c,p,t=a.utils.getCookie("ID"),x=a.utils.parseTDValue(t),k=a.utils.getReferrer(),E,D,y=localStorage.getItem("OpenDemoAccount"),h=localStorage.getItem("appName"),u=document.querySelector(".trackPerformanceTag");
a.generics.setHier1(a.cloneGenericValue(a.interpreter.generics.pageName));
a.generics.setServer(location.host);
a.generics.setReferrer(k.url);
a.generics.setRefr(k.url);
a.evars.setChID(a.tracker.Util.getQueryParam("CHID"));
a.evars.setIgIDCookieTDValue(x.TD);
a.evars.setPersonalisationSegments(window.PS.SiteCatalyst.utils.getCookie("ID").replace(/\"/g,"").replace(/TD=/,"").match(/:(.*)/));
a.evars.setSiteCountry(a.clonePropValue(a.interpreter.props.siteId));
a.evars.setSiteName(a.clonePropValue(a.interpreter.props.siteId));
a.evars.setSiteCatalystVisitorID(a.cloneGenericValue(a.interpreter.generics.sitecatalystId));
a.evars.setContentMetatags(a.utils.getJspVar("contentMetatags"));
E=a.utils.detectChannel(a.generics.getReferrer(),a.evars.getChID(),a.generics.getLinkInternalFilters());
a.props.setPageUrl(location.href);
a.props.setTdValue(a.cloneEvarValue(a.interpreter.evars.igIDCookieTDValue));
if(!!a.evars.getPersonalisationSegments()){a.props.setPersonalisationSegments(a.cloneEvarValue(a.interpreter.evars.personalisationSegments))
}a.props.setSiteCountry(a.clonePropValue(a.interpreter.props.siteId));
a.props.setSiteCatalystVisitorID(a.cloneGenericValue(a.interpreter.generics.sitecatalystId));
if(!!navigator){a.props.setUserAgent(navigator.userAgent)
}if(a.generics.getLinkInternalFilters().indexOf(k.host)>-1){a.generics.setCmpid(a.tracker.Util.getQueryParam("QPID"));
q=a.utils.extractPaidSearchKeywords();
if(!!q){a.props.setGoogleKeywords(q);
a.evars.setInternalSearchTerm(a.cloneEvarValue(a.interpreter.props.internalSearchTerm));
a.utils.addEvent(a.interpreter.events.internalSearch)
}a.generics.setChannelManager("qpid");
a.generics.setMktCh(E.code);
a.props.setMarketingChannelPaths(E.code);
b=a.utils.getCrossVisitsChannels(E,30,10,a.interpreter.events.totalCompletedIRP,"s_cvp_mktch28");
a.evars.setCrossVisitMarketingChannelAllTouchpoints(b)
}e=a.tracker.getVisitStart(a.evars.getReportSuiteID());
if(e){w=a.utils.getNewOrRepeatVisitor(60);
a.evars.setNewRepeatVisitor(w);
if(w==="New"){a.utils.addEvent(a.interpreter.events.firstVisit)
}if(a.utils.isInternationalPage()){a.evars.setOnsitePromotions("ig.com redirect");
E=a.utils.channels.IG_REDIRECT;
a.props.setOnsitePromotions(a.cloneEvarValue(a.interpreter.evars.onsitePromotions))
}if(!a.generics.getMktCh()){a.generics.setCmpid(a.tracker.Util.getQueryParam("QPID"));
a.generics.setChannelManager("qpid");
a.generics.setMktCh(E.code);
a.props.setMarketingChannelPaths(E.code)
}b=a.utils.getCrossVisitsChannels(E,30,10,a.interpreter.events.totalCompletedIRP,"s_cvp_mktch19");
a.evars.setCrossVisitMarketingChannelStartofVisit(b);
if(E.code===a.utils.channels.INTERNAL){b=a.utils.getCrossVisitsChannels(a.generics.getMktCh(),30,10,a.interpreter.events.totalCompletedIRP,"s_cvp_mktch28");
a.evars.setCrossVisitMarketingChannelAllTouchpoints(b)
}if(a.generics.getCmpid()){a.generics.setCampaign(a.generics.getCmpid());
a.evars.setFirstQPID("D=v0")
}else{a.generics.setCmpid(E.name)
}a.evars.setCampaignsbyQPID(a.generics.getCmpid());
a.evars.setQPIDsContributing(a.cloneEvarValue(a.interpreter.evars.campaignsbyQPID));
a.props.setCampaign(a.cloneEvarValue(a.interpreter.evars.campaignsbyQPID));
a.utils.sendSiteCatalystInfoToDCM()
}a.generics.setCurrentYear((new Date()).getFullYear());
m=a.utils.getDateTimePartitioned();
a.evars.setDayParting(m);
a.props.setDayParting(a.cloneEvarValue(a.interpreter.evars.dayParting));
C=a.utils.getPreviousPageName(a.generics.getPageName());
a.props.setPreviousPage(C);
a.evars.setLinkPage(a.clonePropValue(a.interpreter.props.previousPage));
f=a.tracker.Util.getQueryParam("icmp");
if(!!f){a.evars.setOnsitePromotions(f);
a.props.setOnsitePromotions(a.cloneEvarValue(a.interpreter.evars.onsitePromotions))
}j=a.tracker.Util.getQueryParam("cta");
if(!!j){a.evars.setCallsToAction(j);
a.props.setCta(a.cloneEvarValue(a.interpreter.evars.callsToAction))
}o=a.tracker.Util.getQueryParam("marketfinder");
if(!!o){a.evars.setMarketFinderSearchedMarket("shares:"+o);
a.utils.addEvent(a.interpreter.events.marketSharesFinderSearch)
}if(a.utils.isMarketFinderSearchResult(location.href,a.generics.getPageName())){a.utils.addEvent(a.interpreter.events.marketSharesFinderSearch);
l=a.tracker.Util.getQueryParam("query");
a.evars.setMarketFinderSearchedMarket("market:"+l)
}if(a.utils.isThankYouPage(location.href,a.generics.getPageName())){if(!!a.props.getPreviousPage()){n=a.props.getPreviousPage().split(":");
a.evars.setCallsToAction(n.pop())
}else{A=a.generics.getPageName().replace(/re\:/,"");
a.evars.setCallsToAction(A)
}if(a.evars.getCallsToAction().match(/review/)){a.utils.addEvent(a.interpreter.events.thankyouReview)
}else{if(a.evars.getCallsToAction().match(/refer/)){a.utils.addEvent(a.interpreter.events.thankyouReferaFriend)
}else{if(a.evars.getCallsToAction().match(/guide/)){a.utils.addEvent(a.interpreter.events.thankyouGuide)
}else{a.utils.addEvent(a.interpreter.events.thankyouGeneral)
}}}}if(window.sc_prop57!==undefined){a.evars.setTnTOffers(window.sc_prop57);
a.props.setTnTOffers(a.cloneEvarValue(a.interpreter.evars.TnTOffers))
}B=a.utils.getContentReady();
r=a.utils.getLoadTime();
F=a.utils.getTimeToFirstByte();
if(B&&r&&F){a.utils.addEvent(a.interpreter.events.pageLoadTimeCounter);
a.utils.addProduct(";;;;"+a.interpreter.events.timeDOMContentReady+"="+B+"|"+a.interpreter.events.timeCompletePageLoad+"="+r+"|"+a.interpreter.events.timeToFirstByte+"="+F)
}else{a.utils.addProduct("Not Set")
}if(B){a.evars.setTimeDomContentReady(B);
a.utils.addEvent(a.interpreter.events.timeDOMContentReady)
}if(r){a.evars.setTimeCompletePageLoad(r);
a.utils.addEvent(a.interpreter.events.timeCompletePageLoad)
}if(F){a.evars.setTimeTimeto1stByte(F);
a.utils.addEvent(a.interpreter.events.timeToFirstByte)
}z=a.utils.getCompleteLoadTime();
if(z){a.evars.setPageLoadTimeMS(z);
a.evars.setPageLoadTime(Math.round(z/1000));
if(!!a.evars.getPageLoadTime()){a.props.setPageLoadTime(a.cloneEvarValue(a.interpreter.evars.pageLoadTime))
}}D=a.utils.getCurrentClientSplitTestGroup();
if(D!=="-"){a.evars.setSplitTestGroup(D)
}c=a.utils.getCookie("user_sgm");
if(!!c){a.props.setUserSegment(c)
}if(!!window.PS.info.user){p=window.PS.info.user.getCurrentSegment();
if(!!p){a.props.setUserStatus(p)
}}if(y){a.utils.addEvent(a.interpreter.events.openDemoAccount);
localStorage.removeItem("OpenDemoAccount")
}if(h){PS.SiteCatalyst.evars.setSourceofApplication(h);
PS.SiteCatalyst.evars.setApplicationFormIRPStatuses("success");
localStorage.removeItem("appName")
}if(u){a.props.setPageType(u.getAttribute("content"))
}},onPlay:function(e){var j="",c=0,h=0,b="Brightcove Smart Player",g="",f;
if(e.hasOwnProperty("mediainfo")){j=e.mediainfo.name;
c=Math.floor(e.currentTime())||0;
h=e.mediainfo.duration;
b="Brightcove Player"
}else{j=e.media.displayName;
c=Math.floor(e.position)||0;
h=e.duration;
b="Brightcove Smart Player"
}if(window.location.href.indexOf("#")>0){g=":"+window.location.href.substring(window.location.href.indexOf("#")+1)
}f=a.generics.getPageName()+":"+g+":"+j;
a.props.setVideoURL(f);
if(!c){a.tracker.Media.open(j,h,b)
}a.tracker.Media.play(j,c)
},onStop:function(e){var g="",b=0,c=0,f=0;
if(e.hasOwnProperty("mediainfo")){g=e.mediainfo.name;
b=e.currentTime()||0;
c=Math.floor(b)||0;
f=e.mediainfo.duration
}else{g=e.media.displayName;
b=e.position||0;
c=Math.floor(e.position)||0;
f=e.duration
}a.tracker.Media.stop(g,c);
if((f-b)<0.25){a.tracker.Media.close(g)
}},send:function(){if(window.mboxLoadSCPlugin!==undefined){window.mboxLoadSCPlugin(a.tracker)
}a.tracker.t()
},sendPageView:function(){a.mappers.DEFAULT.track();
a.plugins.init();
a.utils.addEvent(a.interpreter.events.pageView);
a.mappers.DEFAULT.send()
}};
a.mappers.DEFAULT.initTracker()
}(window.PS.SiteCatalyst));
(function(a){a.mappers.MARKET_ANALYSIS={track:function(){a.mappers.DEFAULT.trackDefaultVariables();
a.mappers.DEFAULT.trackUserVariables();
this.trackPageVariables()
},trackPageVariables:function(){var g=a.utils.getPathInfo(a.info.path),e,c=a.utils.getSearchResult(),f,b;
a.generics.setChannel(g.channel);
a.props.setPageTitle(a.info.cq_page_name.replace(/-/g," ").toLowerCase());
e=a.utils.getPageName(a.generics.getChannel(),a.props.getPageTitle());
a.generics.setPageName(e);
a.props.setPageName(a.cloneGenericValue(a.interpreter.generics.pageName));
a.props.setSiteLanguage(g.siteLanguage);
a.props.setSiteId(g.siteId);
a.props.setSCodeVersion(a.generics.getCodeVersion());
a.props.setReportSuiteID(a.cloneEvarValue(a.interpreter.evars.reportSuiteID));
a.props.setInternalSearchTerm(c);
a.props.setPageTags(a.info.content_tags);
a.evars.setSiteLanguage(a.clonePropValue(a.interpreter.props.siteLanguage));
a.evars.setPageName(a.cloneGenericValue(a.interpreter.generics.pageName));
f=a.utils.getMainReportSuite(a.info.s_account);
a.evars.setReportSuiteID(f);
b=a.utils.parseEnvironment(f,location.hostname);
a.evars.setEnvironment(b);
a.generics.setChannel("ma:"+a.info.insight.section.toLowerCase());
a.props.setPageTitle(a.info.insight.pagename.replace(/-/g," ").toLowerCase());
a.generics.setPageName(a.generics.getChannel()+":"+a.props.getPageTitle());
a.props.setSiteLanguage(a.info.insight.language);
a.props.setSiteId(a.info.insight.site);
a.props.setInsightPageType("D=v46");
a.evars.setInsightPageType("full");
a.evars.setTimeFinancialChartLoadTime("")
},sendPageView:function(){a.mappers.DEFAULT.initTracker();
a.mappers.MARKET_ANALYSIS.track();
a.plugins.init();
a.utils.addEvent(a.interpreter.events.pageView);
a.mappers.DEFAULT.send()
}}
}(window.PS.SiteCatalyst));
window.BCAnalytics=window.BCAnalytics||{};
(function(a,b){a.setMapper=function(c){if(c){a.mapper=c;
a.sendPageView=c.sendPageView;
a.onPlay=c.onPlay;
a.onStop=c.onStop;
a.tracker.doPlugins=c.doPlugins;
b.onPlay=c.onPlay;
b.onStop=c.onStop
}}
}(window.PS.SiteCatalyst,window.BCAnalytics));
(function(a,e){a.init=function c(){a.apl.init();
a.cW2.init();
a.channelManager.init();
a.cvp.init();
a.dfaVisId.init();
a.getDomain.init();
a.getNewRepeat.init();
a.getPreviousValue.init();
a.getTimeParting.init();
a.getValOnce.init();
a.getVisitStart.init();
a.split.init();
a.TnTIntegration.init();
a.waLinkTrack.init();
a.waCtaTrack.init();
a.videoTrack.init();
a.optimizely.init();
a.audienceManagement.init();
a.bindReady();
a.loaded=true;
window.PS.util.pubsub.publish("SiteCatalyst.plugins.loaded")
};
a.bindReady=function b(){if(typeof e==="function"){e(document).ready(function(){window.PS.SiteCatalyst.plugins.waLinkTrack.ready()
})
}}
}(window.PS.SiteCatalyst.plugins,window.jQuery));
(function(a){a.plugins.getPreviousValue={init:function b(){a.tracker.getPreviousValue=function(m,k,e){var l=a.tracker,j=new Date,f,n,g="";
j.setTime(j.getTime()+1800000);
if(e){if(l.events){f=l.split(e,",");
n=l.split(l.events,",");
for(var h in f){if(f.hasOwnProperty(h)){for(var c in n){if(n.hasOwnProperty(c)){if(f[h]===n[c]){if(l.c_r(k)){g=l.c_r(k)
}m?l.c_w(k,m,j):l.c_w(k,"no value",j);
return g
}}}}}}}else{if(l.c_r(k)){g=l.c_r(k)
}m?l.c_w(k,m,j):l.c_w(k,"no value",j);
return g
}}
}}
}(window.PS.SiteCatalyst));
(function(a){a.plugins.split={init:function b(){a.tracker.split=function c(l,j){var k,g=0,h=[];
while(l){k=l.indexOf(j);
k=k>-1?k:l.length;
h[g++]=l.substring(0,k);
l=l.substring(k+j.length)
}return h
};
a.tracker.repl=function e(j,h,l){var g=j.indexOf(h),k=l.length;
while(j&&g>=0){j=j.substring(0,g)+l+j.substring(g+h.length);
g=j.indexOf(h,g+k)
}return j
};
a.tracker.join=function f(l,p){var m=a.tracker;
var k,o,h,g;
if(p){k=p.front?p.front:"";
o=p.back?p.back:"";
h=p.delim?p.delim:"";
g=p.wrap?p.wrap:""
}var j="";
for(var n=0;
n<l.length;
n++){if(typeof(l[n])=="object"){j+=m.join(l[n],p)
}else{j+=g+l[n]+g
}if(n<l.length-1){j+=h
}}return k+j+o
}
}}
}(window.PS.SiteCatalyst));
(function(a){a.plugins.getVisitStart={init:function b(){a.tracker.getVisitStart=function c(h){var g=a.tracker,e=1,f=new Date;
f.setTime(f.getTime()+1800000);
if(g.c_r(h)){e=0
}if(!g.c_w(h,1,f)){g.c_w(h,1,0)
}if(!g.c_r(h)){e=0
}return e
}
}}
}(window.PS.SiteCatalyst));
(function(a){a.plugins.getNewRepeat={init:function b(){a.tracker.getNewRepeat=function c(l,k){var e=a.tracker,f=new Date(),j,g,h=f.getTime();
l=l?l:30;
k=k?k:"s_nr";
f.setTime(h+l*24*60*60*1000);
j=e.c_r(k);
if(j.length===0){e.c_w(k,h+"-New",f);
return"New"
}g=e.split(j,"-");
if(h-g[0]<30*60*1000&&g[1]==="New"){e.c_w(k,h+"-New",f);
return"New"
}else{e.c_w(k,h+"-Repeat",f);
return"Repeat"
}}
}}
}(window.PS.SiteCatalyst));
(function(a){a.plugins.apl={init:function b(){a.tracker.apl=function c(n,j,h,m){var l=a.tracker,k=0,g,f,e;
n=n||"";
if(m){e=l.split(n,h);
for(g=0;
g<e.length;
g+=1){f=e[g];
k=k||(m===1?(f===j):(f.toLowerCase()===j.toLowerCase()))
}}if(!k){n=n?(n+h+j):j
}return n
}
}}
}(window.PS.SiteCatalyst));
(function(a){a.plugins.channelManager={init:function b(){a.tracker.seList="altavista.co,altavista.de|q,r|AltaVista>.aol.,suche.aolsvc.de|q,query|AOL>ask.jp,ask.co|q,ask|Ask>www.baidu.com|wd|Baidu>daum.net,search.daum.net|q|Daum>google.,googlesyndication.com|q,as_q|Google>icqit.com|q|icq>bing.com|q|Microsoft Bing>myway.com|searchfor|MyWay.com>naver.com,search.naver.com|query|Naver>netscape.com|query,search|Netscape Search>reference.com|q|Reference.com>seznam|w|Seznam.cz>abcsok.no|q|Startsiden>tiscali.it,www.tiscali.co.uk|key,query|Tiscali>virgilio.it|qs|Virgilio>yahoo.com,yahoo.co.jp|p,va|Yahoo!>yandex|text|Yandex.ru>search.cnn.com|query|CNN Web Search>search.earthlink.net|q|Earthlink Search>search.comcast.net|q|Comcast Search>search.rr.com|qs|RoadRunner Search>optimum.net|q|Optimum Search>ixquick.com||IXQuick>mywebsearch.com|searchfor|MyWebSearch";
a.tracker.channelManager=function c(W,J,u,U,z,o){var m,G,B,P,D,y,T,g,K,l,n,E,w,M,L,e,r,C,F,f,x,q,N=0,t,p,O=new Date;
O.setTime(O.getTime()+1800000);
if(z){N=1;
if(a.tracker.c_r(z)){N=0
}if(!a.tracker.c_w2(z,1,O)){a.tracker.c_w2(z,1,0)
}if(!a.tracker.c_r(z)){N=0
}}B=(!!a.tracker.referrer)?a.tracker.referrer:document.referrer;
B=B.toLowerCase();
if(!B){K=1
}w=B.indexOf("?")>-1?B.indexOf("?"):B.length;
e=B.substring(0,w);
l=a.tracker.linkInternalFilters.toLowerCase();
l=a.tracker.split(l,",");
for(D=0;
D<l.length;
D++){G=e.indexOf(l[D])===-1?"":B;
if(G){M=G
}}if(!M&&!K){q=B.indexOf("//");
T=q>-1?q+2:0;
p=B.indexOf("/",T);
p=p>-1?p:w;
p=B.substring(T,p);
p=p.toLowerCase();
n=p;
g="Referrers";
E=a.tracker.seList+">"+a.tracker._extraSearchEngines;
if(U===1){e=a.tracker.repl(e,"oogle","%");
e=a.tracker.repl(e,"ahoo","^");
B=a.tracker.repl(B,"as_q","*")
}m=a.tracker.split(E,">");
L=m.length;
for(var S=0;
S<L;
S++){r=m[S];
r=a.tracker.split(r,"|");
C=a.tracker.split(r[0],",");
F=C.length;
for(var R=0;
R<F;
R++){f=e.indexOf(C[R]);
if(f>-1){var V=a.tracker.split(r[1],",");
var I=V.length;
for(var Q=0;
Q<I;
Q++){var h=a.tracker.Util.getQueryParam(V[Q],"",B);
if(h){h=h.toLowerCase();
y=h;
if(r[2]){n=r[2];
x=r[2]
}else{x=p
}if(U===1){x=a.tracker.repl(x,"#"," - ");
B=a.tracker.repl(B,"*","as_q");
x=a.tracker.repl(x,"^","ahoo");
x=a.tracker.repl(x,"%","oogle")
}}}}}}}if(!M||o!=="1"){M=a.tracker.Util.getQueryParam(W,J);
if(M){n=M;
if(y){g="Paid Search"
}else{g="Paid Non-Search"
}}if(!M&&y){n=x;
g="Natural Search"
}}if(K===1&&!M&&N===1){n=g=p="Direct"
}t=y+n+p;
u=u?u:"c_m";
if(u!=="0"){t=a.tracker.getValOnce(t,u,0)
}B=a.tracker._channelDomain;
if(B&&t){l=a.tracker.split(B,">");
P=l.length;
for(D=0;
D<P;
D++){T=a.tracker.split(l[D],"|");
p=a.tracker.split(T[1],",");
E=p.length;
for(L=0;
L<E;
L++){p=p[L];
p=p.toLowerCase();
w=e.indexOf(p);
if(w>-1){g=T[0]
}}}}B=a.tracker._channelParameter;
if(B&&t){l=a.tracker.split(B,">");
P=l.length;
for(D=0;
D<P;
D++){var H=a.tracker.split(l[D],"|");
p=a.tracker.split(H[1],",");
E=p.length;
for(L=0;
L<E;
L++){var A=a.tracker.Util.getQueryParam(p[L]);
if(A){g=H[0]
}}}}B=a.tracker._channelPattern;
if(B&&t){l=a.tracker.split(B,">");
P=l.length;
for(D=0;
D<P;
D++){T=a.tracker.split(l[D],"|");
p=a.tracker.split(T[1],",");
E=p.length;
for(L=0;
L<E;
L++){p=p[L];
p=p.toLowerCase();
w=M.toLowerCase();
f=w.indexOf(p);
if(f===0){g=T[0]
}}}}if(t){y=y?y:"n/a"
}B=t&&B?B:"";
p=t&&p?p:"";
x=t&&x?x:"";
M=t&&M?M:"";
n=t&&n?n:"";
y=t&&y?y:"";
g=t&&g?g:"";
a.tracker._referrer=B;
a.tracker._referringDomain=p;
a.tracker._partner=x;
a.tracker._campaignID=M;
a.tracker._campaign=n;
a.tracker._keywords=y;
a.tracker._channel=g
}
}}
}(window.PS.SiteCatalyst));
(function(a){a.plugins.getDomain={init:function b(){a.tracker.getDomain=function c(e){e=e||"";
var f=e.match(/([^\/\/]+\.[^/.]+)\//);
return f&&f.length>1&&f[1].toLowerCase().replace("www.","")||""
}
}}
}(window.PS.SiteCatalyst));
(function(a){a.plugins.cW2={init:function b(){a.tracker.c_w2=function c(e,g,f){var j=a.tracker.cookieLifetime,h;
g=""+g;
j=j?(""+j).toUpperCase():"";
if(f&&j!=="SESSION"&&j!=="NONE"){h=(g!==""?parseInt(j?j:0):-60);
if(h){f=new Date;
f.setTime(f.getTime()+(h*1000))
}}if(e&&j!=="NONE"){a.tracker.d.cookie=e+"="+a.tracker.ape(g!==""?g:"[[B]]")+"; path=/;"+(f&&j!=="SESSION"?" expires="+f.toGMTString()+";":"");
return a.tracker.c_r(e)===g
}return 0
}
}}
}(window.PS.SiteCatalyst));
(function(a){a.plugins.getValOnce={init:function b(){a.tracker.getValOnce=function c(h,k,g){var e=a.tracker,j=e.c_r(k),f=new Date;
g=g?g:(30/60/24);
if(h){f.setTime(f.getTime()+g*86400000);
e.c_w(k,h,g?f:(30/60/24))
}return h==j?"":h
}
}}
}(window.PS.SiteCatalyst));
(function(a){a.plugins.getTimeParting={init:function b(){a.tracker.getTimeParting=function c(p,u){var w=a.tracker,t=new Date("1/1/2000");
if(t.getDay()!==6||t.getMonth()!==0){return"Data Not Available"
}else{u=parseFloat(u);
var e=new Date(w.dstStart),l=new Date(w.dstEnd),g=new Date();
if(g>e&&g<l){u=u+1
}var f=g.getTime()+(g.getTimezoneOffset()*60000),x=new Date(f+(3600000*u)),y=x.getFullYear(),j=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
if(y!==w.currentYear){return"Data Not Available"
}else{var q=x.getHours(),r=x.getMinutes(),n=x.getDay(),o=j[n],k="AM",z="Weekday",h="00";
if(r>30){h="30"
}if(q>=12){k="PM";
q=q-12
}if(q==0){q=12
}if(n==6||n==0){z="Weekend"
}var m=q+":"+h+k;
if(p=="h"){return m
}if(p=="d"){return o
}if(p=="w"){return z
}}}}
}}
}(window.PS.SiteCatalyst));
window.PS.SiteCatalyst.plugins=window.PS.SiteCatalyst.plugins||{};
(function(a,e){a.plugins.waLinkTrack={init:function c(){var g=[a.interpreter.props.sCodeVersion,a.interpreter.props.siteLanguage,a.interpreter.props.pageName,a.interpreter.props.reportSuiteID,a.interpreter.props.environment,a.interpreter.evars.pageName,a.interpreter.evars.siteLanguage,a.interpreter.evars.reportSuiteID,a.interpreter.evars.platformID,a.interpreter.evars.environment],f=[].concat(g);
a.props.setSCodeVersion(a.props.getSCodeVersion()+"|l:140306");
a.generics.setLinkTrackVars(g.join(","));
a.generics.setLinkTrackEvents("None");
a.tracker.wa_linkTrack=function(n,k,m){var j,h,l;
if(n){a.props.setPageName(a.generics.getPageName());
if(typeof n==="string"){j=n.toLowerCase();
if(j==="reg_seminar"){f.push(a.interpreter.props.seminarID,a.interpreter.evars.seminarID,a.interpreter.generics.events);
a.generics.setLinkTrackVars(f.join(","));
a.generics.setLinkTrackEvents(a.interpreter.events.seminarRegistration);
a.tracker.events=a.interpreter.events.seminarRegistration;
if(a.generics.getSeminarID()!==undefined){a.evars.setSeminarID(a.generics.getSeminarID())
}else{a.evars.setSeminarID("Seminar ID Not Specified");
if(document.getElementById("Campaign_ID")){if(document.getElementById("Campaign_ID").value){a.evars.setSeminarID(document.getElementById("Campaign_ID").value)
}}else{if(document.getElementsByTagName("option").length>0){for(l=0;
l<document.getElementsByTagName("option").length;
l+=1){if(document.getElementsByTagName("option")[l].selected){if(document.getElementsByTagName("option")[l].parentNode.name.toLowerCase().indexOf("campaign")>-1){a.evars.setSeminarID(document.getElementsByTagName("option")[l].value)
}}}}}}a.props.setSeminarID(a.cloneEvarValue(a.interpreter.evars.seminarID));
a.tracker.tl(true,"o","Seminar Registration")
}else{if(j.split("-")[0]==="help"){f.push(a.interpreter.generics.events);
a.generics.setLinkTrackVars(f.join(","));
a.generics.setLinkTrackEvents(a.interpreter.events.helpSupport);
a.tracker.events=a.interpreter.events.helpSupport;
a.tracker.tl(true,"o","Help and Support:"+n.split("-")[1])
}else{if(j==="live_chat_view"){a.generics.setLinkTrackEvents(a.interpreter.events.liveChatView);
a.tracker.events=a.interpreter.events.liveChatView;
a.tracker.tl(true,"o","Live Chat View")
}else{if(j==="live_chat_click"){a.generics.setLinkTrackEvents(a.interpreter.events.liveChatClick);
a.tracker.events=a.interpreter.events.liveChatClick;
a.tracker.tl(true,"o","Live Chat Click")
}else{if(j.split("-")[0]==="rss_sub"){f.push(a.interpreter.props.rssTitle,a.interpreter.evars.rssTitle,a.interpreter.generics.events);
a.generics.setLinkTrackVars(f.join(","));
a.generics.setLinkTrackEvents(a.interpreter.events.rssFeedSubscription);
a.tracker.events=a.interpreter.events.rssFeedSubscription;
h=j.split("-")[1];
a.evars.setRssTitle(h);
a.props.setRssTitle(a.cloneEvarValue(a.interpreter.evars.rssTitle));
a.tracker.tl(true,"o","RSS Subscription:"+h)
}else{if(j.indexOf("gotomeeting_reg")>-1){f.push(a.interpreter.props.seminarID,a.interpreter.evars.seminarID,a.interpreter.generics.events);
a.generics.setLinkTrackVars(f.join(","));
a.generics.setLinkTrackEvents(a.interpreter.events.webinarRegistration);
if(n.split(":").length>1){h=n.substr(n.indexOf(":"),n.length);
a.evars.setSeminarID("GoToMeeting:"+(h.indexOf("/register/")>-1?h.substr(h.indexOf("/register/")+10,h.length):h))
}else{a.evars.setSeminarID("GoToMeeting")
}a.props.setSeminarID(a.cloneEvarValue(a.interpreter.evars.seminarID));
a.tracker.events=a.interpreter.events.webinarRegistration;
a.tracker.tl(true,"o","GoToMeeting:Register")
}else{if(j.indexOf("webinar_reg")>-1){f.push(a.interpreter.props.seminarID,a.interpreter.evars.seminarID,a.interpreter.generics.events);
a.generics.setLinkTrackVars(f.join(","));
a.generics.setLinkTrackEvents(a.interpreter.events.webinarRegistration);
if(n.split(":").length>1){h=n.substr(n.indexOf(":"),n.length);
a.evars.setSeminarID("Webinar:"+(h.substring(h.lastIndexOf("/",h.indexOf("/event/")-1)+1,h.lastIndexOf("/",h.indexOf("/event/")))))
}else{a.evars.setSeminarID("Webinar")
}a.props.setSeminarID(a.cloneEvarValue(a.interpreter.evars.seminarID));
a.tracker.events=a.interpreter.events.webinarRegistration;
a.tracker.tl(true,"o","Webinar:Register")
}else{if(j.indexOf("social_share")>-1){if(n.split(":").length>1){n=n.split(":")[1]
}if(f.indexOf(a.interpreter.evars.socialShares)===-1){f.push(a.interpreter.evars.socialShares)
}a.generics.setLinkTrackVars(f.join(","));
a.evars.setSocialShares(n);
a.tracker.tl(true,"o",n)
}else{if(j.indexOf("marketfinder")>-1){if(k){f.push(a.interpreter.evars.marketFinderSearchedMarket,a.interpreter.generics.products,a.interpreter.generics.events);
a.generics.setLinkTrackVars(f.join(","));
a.generics.setLinkTrackEvents(a.interpreter.events.marketSharesFinderSearch);
a.evars.setMarketFinderSearchedMarket(k.toUpperCase());
a.tracker.events=a.interpreter.events.marketSharesFinderSearch;
n+=":"+k
}a.tracker.tl(true,"o",n)
}else{a.tracker.tl(true,"o",n,null,m)
}}}}}}}}}}else{a.tracker.tl(true,"o","link bad format (not a string)")
}}else{a.tracker.tl(true,"o","link unknown")
}if(!a.tracker.reboundTrackLink){a.plugins.waLinkTrack.cleanTrackVars(g)
}else{window.PS.util.pubsub.subscribe("SiteCatalyst.cleanTrackVars",a.plugins.waLinkTrack.cleanTrackVars.bind(this,g))
}}
},ready:function b(){if(typeof window.PS.SiteCatalyst.tracker.wa_linkTrack==="function"){var z=e(".topnav a"),r=e(".top-nav a"),J=e(".support a"),j=e(".footer a"),E=e(".acarousel .mPanel .clickable a"),L=e("#acarousel_navigator li a"),R=e("h4 a"),f=e(".igShare a"),O=e(".igContent a"),u=e(".igColumns table td a"),o=e("div.sharebanner > ul > li > a"),p=e("body.homepage-template li.logo-icon.clickable"),m=e("#sticky-footer-close-icon"),x=".menu-item .menu-link, .menu-item-secondary a, .breadcrumb a",K;
z.filter(function P(){return e(this).attr("href").match(/portal\.+\.*\/support/)
}).bind({click:function g(){a.tracker.wa_linkTrack("help-top")
}});
J.filter(function t(){return e(this).attr("href").match(/portal\.+\.*\/support/)
}).bind({click:function B(){a.tracker.wa_linkTrack("help-bottom")
}});
r.filter(function M(){return e(this).attr("href").match(/portal\.+\.*\/support/)
}).bind({click:function y(){a.tracker.wa_linkTrack("help-top")
}});
j.filter(function h(){return e(this).attr("href").match(/portal\.+\.*\/support/)
}).bind({click:function Q(){a.tracker.wa_linkTrack("help-bottom")
}});
E.each(function I(){e(this).attr("href",e(this).attr("href")+"?icmp=carousel")
});
L.bind({click:function D(){a.tracker.wa_linkTrack("carousel:"+a.props.getPageTitle()+":"+this.innerHTML.match(/[a-zA-Z0-9]\.*/))
}});
R.filter(function n(){return e(this).attr("href").match(/\.xml/i)
}).each(function(){e(this).bind({click:function S(){var T=e(this).attr("href"),U=T.substring(T.lastIndexOf("/")+1,T.indexOf(".xml")).replace(/-/g," ");
a.tracker.wa_linkTrack("rss_sub-"+U)
}})
});
f.bind({click:function w(){K=e(this).attr("id");
if(!K&&e(this).text()){K=e(this).text().trim()
}if(!K){K="Unknown Source"
}a.tracker.wa_linkTrack("social_share:"+K)
}});
O.filter(function q(){return e(this).attr("href").match(/gotomeeting\.*register/)
}).bind({click:function C(){a.tracker.wa_linkTrack("gotomeeting_reg:"+this.href)
}});
O.filter(function F(){return e(this).attr("href").match(/marketdatasystems\.*\/event\/registration/)
}).bind({click:function l(){a.tracker.wa_linkTrack("webinar_reg:"+this.href)
}});
u.filter(function H(){return e(this).attr("href").match(/gotomeeting\.*register/)
}).bind({click:function N(){a.tracker.wa_linkTrack("gotomeeting_reg:"+this.href)
}});
o.bind({click:function A(){K=e(this).attr("id");
if(!K&&e(this).text()){K=e(this).text().trim()
}if(!K){K="Unknown Source"
}a.tracker.wa_linkTrack("social_share:"+K)
}});
if(location.host.indexOf(".ig.com")>-1){p.bind({click:function G(){var T=this.innerHTML.match(/<span>(\.*)</),S=(!!T&&T.length>1)?T[1]:"Not set";
a.tracker.wa_linkTrack("social_share:Home-LinkTo-"+S)
}});
m.bind({click:function k(){a.tracker.wa_linkTrack("Disclaimer:closed")
}})
}a.utils.autoTracking(x,"wa_linkTrack")
}},cleanTrackVars:function(f){a.props.setSeminarID("");
a.evars.setSeminarID("");
a.props.setRssTitle("");
a.evars.setRssTitle("");
a.evars.setSocialShares("");
a.evars.setMarket("");
a.generics.setProducts("");
a.tracker.events="";
a.generics.setLinkTrackVars(f.join(","));
a.generics.setLinkTrackEvents("None")
}}
}(window.PS.SiteCatalyst,window.jq));
window.PS=window.PS||{};
(function(a){a.plugins.waCtaTrack={init:function b(){a.props.setSCodeVersion(a.props.getSCodeVersion()+"|cta:140219");
a.tracker.wa_ctaTrack=function(e,h,g,k,j){var c=[a.interpreter.props.sCodeVersion,a.interpreter.props.pageName,a.interpreter.props.cta,a.interpreter.props.previousPage,a.interpreter.evars.callsToAction,a.interpreter.evars.linkPage];
a.generics.setLinkTrackVars(c.join(","));
a.generics.setLinkTrackEvents("None");
a.props.setPageName(j);
a.props.setPreviousPage(a.clonePropValue(a.interpreter.props.pageName));
a.evars.setLinkPage(a.clonePropValue(a.interpreter.props.pageName));
k=k||"";
var f=k.substring(k.lastIndexOf("/")+1,(k.indexOf("?")>-1?k.indexOf("?"):k.indexOf("#")>-1?k.indexOf("#"):k.length));
if(e){if(typeof e==="string"){a.evars.setCallsToAction(e+":"+(h?h:"null")+":"+g+"->"+f);
a.props.setCta(a.cloneEvarValue(a.interpreter.evars.callsToAction));
a.tracker.tl(true,"o","CTA:"+a.evars.getCallsToAction())
}else{a.evars.setCallsToAction("");
a.props.setCta(a.cloneEvarValue(a.interpreter.evars.callsToAction));
a.tracker.tl(true,"o","CTA:link bad format")
}}else{a.evars.setCallsToAction("");
a.props.setCta(a.cloneEvarValue(a.interpreter.evars.callsToAction));
a.tracker.tl(true,"o","CTA:link unknown")
}};
a.utils.autoTracking(".cta a","wa_ctaTrack")
}}
}(window.PS.SiteCatalyst));
(function(a){a.plugins.dfaVisId={init:function b(){a.tracker.s_visIdFloodlight=function e(k,l,n,m){var g=a.tracker;
var j="";
if(!!g.visitor.getMarketingCloudVisitorID()){j=g.visitor.getMarketingCloudVisitorID()
}var h="//"+k+".fls.doubleclick.net/activityi;src="+k+";type="+l+";cat="+n+";"+m+"=";
if(!!j){g.s_dfaCall(h,j)
}else{setTimeout(function(){g.s_dfaCall_delay(h,1)
},2000)
}return 0
};
a.tracker.s_dfaCall_delay=function f(h,k){var g=a.tracker;
var j=g.visitor.getMarketingCloudVisitorID();
if(!j&&!!g.c_r("IDD")){j=g.c_r("IDD").replace(/'/g,"").replace(/TD=/,"")
}if(!!j){g.s_dfaCall(h,j)
}else{if(k===1){setTimeout(function(){g.s_dfaCall_delay(h,2)
},2000)
}else{g.s_dfaCall(h,"Not Set")
}}return 0
};
a.tracker.s_dfaCall=function c(h,k){var j=Math.random()+"";
var g=j*10000000000000000;
var l=new Image();
l.src=h+k+";ord=1;num="+g+"?";
return 0
}
}}
}(window.PS.SiteCatalyst));
(function(a){a.plugins.TnTIntegration={init:function b(){a.tracker.trackTNT=function c(f,l,k){var e=a.tracker,h="s_tnt",g="",j=false;
l=(l)?l:h;
f=(f)?f:h;
k=(k)?k:true;
if(e.getQueryParam){j=e.getQueryParam(l)
}if(j){g+=(j+",")
}if(e.wd[f]!=undefined){g+=e.wd[f]
}if(k){e.wd[f]=""
}return g
}
}}
}(window.PS.SiteCatalyst));
window.PS=window.PS||{};
window.PS.storage=window.PS.storage||{};
(function(a,e){if(!!e.LocalQueue){window.dlog("IG: pubsub.Publishing all the stored items");
var c,f,b=function b(){var g=e.LocalQueue.retrieveAll("ctaTrack"),h=e.LocalQueue.retrieveAll("linkTrack");
for(c=0;
c<g.length;
c+=1){f=g[c].value;
a.tracker.wa_ctaTrack(f.linkType,f.text,f.position,f.destination,f.pageName);
e.LocalQueue.removeElement("ctaTrack",f)
}for(c=0;
c<h.length;
c+=1){f=h[c].value;
a.tracker.tl(true,"o",f);
e.LocalQueue.removeElement("linkTrack",f)
}};
window.PS.util.pubsub.subscribe("SiteCatalyst.plugins.loaded",b)
}}(window.PS.SiteCatalyst,window.PS.storage));
(function(a){a.plugins.cvp={init:function b(){a.tracker.crossVisitParticipation=function c(I,B,o,q,f,p,m){var F=a.tracker,A;
m=m||0;
if(F.events&&p){var w=F.split(p,",");
var y=F.split(F.events,",");
for(var h=0;
h<w.length;
h++){for(var k=0;
k<y.length;
k++){if(w[h]===y[k]){A=1
}}}}if(!I||I===""){if(A){F.c_w(B,"");
return""
}else{return""
}}I=escape(I);
var t=[],u=[],l=F.c_r(B),C=0,D=[];
if(l&&l!=""){t=F.split(l,"],[");
var z;
for(var x=0;
x<t.length;
x++){z=t[x];
z=F.repl(z,"[","");
z=F.repl(z,"]","");
z=F.repl(z,"'","");
t[x]=F.split(z,",")
}}var G=new Date();
G.setFullYear(G.getFullYear()+5);
if(m===0&&t.length>0&&t[t.length-1][0]===I){t[t.length-1]=[I,new Date().getTime()]
}else{t[t.length]=[I,new Date().getTime()]
}var j=t.length-q<0?0:t.length-q;
var E=new Date();
var r;
for(var n=j;
n<t.length;
n++){if(t[n]&&t[n].length>1){r=Math.round((E.getTime()-t[n][1])/86400000);
if(r<o){D[C]=decodeURI(t[n][0]);
u[C]=[t[n][0],t[n][1]];
C++
}}}var H=F.join(u,{delim:",",front:"[",back:"]",wrap:"'"});
F.c_w(B,H,G);
var e=F.join(D,{delim:f});
if(A){F.c_w(B,"")
}return e
}
}}
}(window.PS.SiteCatalyst));
(function(a){a.plugins.videoTrack={init:function b(){var c=[a.interpreter.generics.events,a.interpreter.evars.videoName,a.interpreter.evars.videoSegments,a.interpreter.evars.videoPlayerType,a.interpreter.props.videoURL],e=[a.interpreter.events.videoPlayed,a.interpreter.events.videoCompletes,a.interpreter.events.videoTimeViewed,a.interpreter.events.videoSegmentViews,a.interpreter.events.videoFirstQuarterMilestone,a.interpreter.events.videoSecondQuarterMilestone,a.interpreter.events.videoThirdQuarterMilestone];
a.generics.setEnableVideoTracking(true);
a.tracker.loadModule("Media");
a.tracker.Media.autoTrack=false;
a.tracker.Media.trackWhilePlaying=false;
a.tracker.Media.trackVars=c.join(",");
a.tracker.Media.trackEvents=e.join(",");
a.tracker.Media.trackMilestones="25,50,75";
a.tracker.Media.segmentByMilestones=true;
a.tracker.Media.trackUsingContextData=true;
a.tracker.Media.contextDataMapping={"a.media.name":a.interpreter.evars.videoName,"a.media.segment":a.interpreter.evars.videoSegments,"a.contentType":a.interpreter.evars.videoPlayerType,"a.media.timePlayed":a.interpreter.events.videoTimeViewed,"a.media.view":a.interpreter.events.videoPlayed,"a.media.segmentView":a.interpreter.events.videoSegmentViews,"a.media.complete":a.interpreter.events.videoCompletes,"a.media.milestones":{25:a.interpreter.events.videoFirstQuarterMilestone,50:a.interpreter.events.videoSecondQuarterMilestone,75:a.interpreter.events.videoThirdQuarterMilestone}};
a.props.setVideoURL("D=pageName")
}}
}(window.PS.SiteCatalyst));
(function(a){a.plugins.optimizely={init:function b(){window.optimizely=window.optimizely||[];
window.optimizely.push("activateSiteCatalyst")
}}
}(window.PS.SiteCatalyst));
(function(a){a.plugins.audienceManagement={init:function b(){a.tracker.loadModule("AudienceManagement");
a.tracker.AudienceManagement.setup({partner:"iggroup",containerNSID:0,uuidCookie:{name:"aam_uuid",days:30}});
if(a.tracker.eVar61){a.tracker.visitor.setCustomerIDs({tracking_id:{id:a.tracker.eVar61,authState:Visitor.AuthState.AUTHENTICATED}})
}}}
}(window.PS.SiteCatalyst));
window.PS=window.PS||{};
PS.util=PS.util||{};
PS.info=PS.info||{};
(function(e,f,k,j,h,c,b){e.GoogleAnalyticsObject=h;
e[h]=e[h]||function(){(e[h].q=e[h].q||[]).push(arguments)
},e[h].l=1*new Date();
c=f.createElement(k),b=f.getElementsByTagName(k)[0];
c.async=1;
c.src=j;
b.parentNode.insertBefore(c,b)
})(window,document,"script","//www.google-analytics.com/analytics.js","__gaTracking");
(function(b){var a={};
a.isReady=false;
a.trackQueue=[];
a.PAGE_VIEW="PAGE_VIEW";
a.APPFORM_PAGEVIEW="APPFORM_PAGEVIEW";
a.APPFORM_IRP="APPFORM_IRP";
a.PAGE_TIMING="PAGE_TIMING";
a.JS_TIMING="JS_TIMING";
a.CLICK_EVENT="CLICK_EVENT";
a.SOCIAL_SHARE="SOCIAL_SHARE";
a.SOCIAL_FOLLOW="SOCIAL_FOLLOW";
a.trackEventsMapping=[];
a.init=function(){a.trackEventsMapping[a.PAGE_VIEW]=a.sendPageView;
a.trackEventsMapping[a.PAGE_TIMING]=a.sendPageTiming;
a.trackEventsMapping[a.JS_TIMING]=a.sendJsTiming;
a.trackEventsMapping[a.APPFORM_PAGEVIEW]=a.sendAppFormPageView;
a.trackEventsMapping[a.APPFORM_IRP]=a.sendAppFormIRP;
a.trackEventsMapping[a.CLICK_EVENT]=a.sendCTAClickEvent;
a.trackEventsMapping[a.SOCIAL_SHARE]=a.sendShareClickEvent;
a.trackEventsMapping[a.SOCIAL_FOLLOW]=a.trackFollowClickEvent;
var c=b.util.jspVars.get("google.analytics.tracking.id");
if(!!__gaTracking){__gaTracking("create",c,"auto");
__gaTracking("require","displayfeatures");
__gaTracking("require","linkid","linkid.js");
a.setDefaultProperties()
}jq(document).ready(function(){a.setUserID();
a.setUserSegment();
a.isReady=true;
for(var e=0;
e<a.trackQueue.length;
e++){a.trackQueue[e]()
}})
};
a.setUserID=function(){var f="";
var c="";
var e="";
if(!!b.util.Cookie){var g=b.util.Cookie.get("ID");
var j=b.util.Cookie.get("client_id");
var h=b.SiteCatalyst.tracker.visitor.getMarketingCloudVisitorID();
if(!!g){f=g.replace(/\"/g,"").replace(/TD=/,"").match(/[^:]*/)
}if(!!j){c=j
}if(!!h){e=b.util.getMD5(h)
}}if(!!f&&f.length>0){a.defaultProperties.dimension3=f[0].toLowerCase()
}if(!!e){if(!!__gaTracking){__gaTracking("set","&uid",j)
}a.defaultProperties.dimension4=e
}if(!!c){a.defaultProperties.dimension5=c
}};
a.setUserSegment=function(){if(!!b.info.user){a.defaultProperties.dimension2=b.info.user.getCurrentSegment()
}};
a.addTrackingEvent=function(f){var e=null;
if(f===a.PAGE_VIEW){a.trackEventsMapping[a.PAGE_VIEW]();
return
}for(var c in a.trackEventsMapping){if(a.trackEventsMapping.hasOwnProperty(c)&&(f===c)){e=a.trackEventsMapping[c]
}}if(!!e){if(a.isReady){e()
}else{a.trackQueue.push(e)
}}};
a.setDefaultProperties=function(){a.defaultProperties={location:window.location.href,hostname:window.location.hostname,page:window.location.pathname,title:document.title,dimension1:a.getAnalyticsPath()}
};
a.getAnalyticsPath=function(){var f="";
if(!!analytics){var j=analytics.path||"";
var c=analytics.cq_page_name||"";
var h=j.split("/");
var g="";
if(h.length>5){for(var e=4;
e<(h.length-1);
++e){g=g+h[e]+":"
}g=g.substring(0,(g.length-1))
}g=g.toLowerCase();
c=c.toLowerCase();
if(g.length>0){f=g+":"+c
}else{f=c
}}return f
};
a.sendPageTiming=function(){if(!!window.performance&&!!window.performance.timing&&!!__gaTracking){dlog("GoogleAnalytics: sendPageTiming - sending page timing");
var h=window.performance.timing;
if(h.loadEventEnd>0){var g=a.defaultProperties;
if((!!h.domInteractive)&&(!!h.unloadEventStart)){var e=h.domInteractive-h.unloadEventStart;
__gaTracking("send","timing","Page","TTI method 1",e,"Page timings",g)
}if(!!h.navigationStart){var c=h.loadEventEnd-h.navigationStart;
__gaTracking("send","timing","Page","Loading time",c,"Page timings",g)
}if(!!(h.responseEnd)&&!!(h.fetchStart)){var f=h.responseEnd-h.fetchStart;
__gaTracking("send","timing","Page","Net Latency",f,"Page timings",g)
}if((!!h.requestStart)&&(!!h.responseStart)){var k=h.responseStart-h.requestStart;
__gaTracking("send","timing","Page","TTFB",k,"Page timings",g)
}if((!!h.domInteractive)&&(!!h.domLoading)){var j=h.domInteractive-h.domLoading;
__gaTracking("send","timing","Page","TTI method 2",j,"Page timings",g)
}}else{setTimeout(a.sendPageTiming,500)
}}};
a.sendJsTiming=function(){if(!!window.performance&&!!__gaTracking&&!!window.performance.getEntries){dlog("GoogleAnalytics: sendJsTiming - sending js timing");
var e=window.performance.timing;
if(e.loadEventEnd>0){var k=window.performance.getEntries();
var l=a.defaultProperties;
for(var j=0;
j<k.length;
j++){var m=k[j];
var g=".js";
if(!!m.name){var c=m.name.split("/").pop();
if((!!c)&&(c.indexOf(".js")>-1)&&(m.duration>0)){var f=m.name.replace(/^.*[\\\/]/,"");
var h=m.duration;
__gaTracking("send","timing",f,"Load library",h,"JS timings",l)
}}}}else{setTimeout(a.sendJsTiming,500)
}}};
a.sendAppFormPageView=function(){var f=jq("#appForm");
if((!!f)&&(f.length>0)){if(!!__gaTracking&&!!f[0].contentWindow){dlog("GoogleAnalytics: sendAppFormPageView - iframe loaded");
var m=document.domain;
var j=null;
try{j=f[0].contentWindow.document.domain
}catch(k){try{document.domain="ig.com";
j=f[0].contentWindow.document.domain
}catch(k){}}if(!!j){var g=f[0].contentWindow.location.href;
var l=f[0].contentWindow.location.hostname;
var c="";
if(!!b.util.Cookie){c=b.util.Cookie.get("gpv_pn");
c=decodeURIComponent((c+"").replace(/\+/g,"%20"))
}var h={location:g,hostname:l,page:g,title:document.title,dimension1:c};
if(l!==m){document.domain=m
}__gaTracking("send","pageview",h)
}}else{setTimeout(a.sendAppFormPageView,500)
}}};
a.sendAppFormIRP=function(){var h=jq("#appForm");
if((!!h)&&(h.length>0)){if(!!__gaTracking&&!!h[0].contentWindow){dlog("GoogleAnalytics: sendAppFormPageView - iframe loaded");
var g=document.domain;
var k=null;
try{k=h[0].contentWindow.document.domain
}catch(m){try{document.domain="ig.com";
k=h[0].contentWindow.document.domain
}catch(m){}}if(!!k){var c=h[0].contentWindow.location.href;
var p=h[0].contentWindow.location.hostname;
var r="";
if(!!b.util.Cookie){r=b.util.Cookie.get("gpv_pn");
r=decodeURIComponent((r+"").replace(/\+/g,"%20"))
}var n={location:c,hostname:p,page:c,title:document.title,dimension1:r};
var o=h[0].contentWindow.IG_WA;
var q=null;
var j=null;
var f=null;
var l=h[0].contentWindow.document.getElementById("irpContent");
if(!!l){f=l.className.toLowerCase()
}if(!!o){if(typeof(o.lead_generated)!="undefined"&&o.lead_generated!=""){q=o.lead_generated
}else{q="none"
}if(typeof(o.account_type)!="undefined"&&o.account_type!=""){j=o.account_type
}else{j="unknown"
}}if(k!==g){document.domain=g
}if(!!f){__gaTracking("send","event",j,f,q,n)
}}}else{setTimeout(a.sendAppFormIRP,500)
}}};
a.sendShareClickEvent=function(){var f=jq("div.sharebanner");
var e="share-";
var c=a.defaultProperties;
if(f.length>0){f.find("ul > li > a").each(function(){var g=this.id;
if(g.indexOf(e)>=0){jq(this).click(function(){var h=g.substring(e.length);
__gaTracking("send","social",h,"share",c.page,c)
})
}})
}};
a.trackFollowClickEvent=function(){var h=jq('[href*="www.facebook.com"]').not('[href*="share"]');
var g=jq('[href*="twitter.com"]').not('[href*="share"]');
var e=jq('[href*="plus.google.com"]');
var c=jq('[href*="www.linkedin.com"]').not('[href*="share"]');
var f=jq('[href*="www.pinterest.com"]');
var j=jq('[href*="www.youtube.com"]');
a.sendFollowClickEvent(h,"fb");
a.sendFollowClickEvent(g,"tweet");
a.sendFollowClickEvent(e,"google plus");
a.sendFollowClickEvent(c,"linkedin");
a.sendFollowClickEvent(f,"pinterest");
a.sendFollowClickEvent(j,"youtube")
};
a.sendFollowClickEvent=function(e,f){if(e.length>0){var c=[];
e.each(function(){var j=this;
var h=jq(this).attr("href");
var g=jq(j).parents(".js_clickable");
if(g.length>0){c.push(g[g.length-1])
}else{jq(j).click(function(){var k=a.defaultProperties;
__gaTracking("send","social",f,"follow",h,k)
})
}});
jq(jq.unique(c)).each(function(){var h=jq(this).find(".js_target");
var g=null;
if(h.length>0){g=jq(h[0]).attr("href")
}jq(this).click(function(){var j=a.defaultProperties;
if(!g){g=j.page
}__gaTracking("send","social",f,"follow",g,j)
})
})
}};
a.sendCTAClickEvent=function(){jq(".cta a").on("click",function(f){function p(t){var r=t.contents().filter(function(){return this.nodeType==8
});
if(r.length>0){return r[0].nodeValue.toLowerCase()
}var q=t.find("img");
if(q.length>0){if(q[0].alt.length>0){return q[0].alt
}}return t.text().toLowerCase()
}function j(q){return q.replace(/^\s\s*/,"").replace(/\s\s*$/,"")
}var m=a.defaultProperties;
var g="("+j(jq(this).parent().siblings(":header").text().toLowerCase().substr(0,20))+")"||"";
var l=j(p(jq(this).parent()));
var c=jq(this).closest(".parsys").find(":first-child").attr("class");
if(this.href==="#"||this.target==="_blank"){if(!!__gaTracking){dlog("GoogleAnalytics: sendCTAClickEvent - link placeholder to a lightbox or to a _blank");
__gaTracking("send","event","CTA","click",l+g,m)
}}else{var e="link";
var n=jq(this);
if(n.hasClass("textimage-button")){e="imagelink"
}else{if(n.hasClass("button")){e="button"
}}var h={linkType:e,text:l+g,position:c,properties:m};
try{if(this.hostname!==window.location.hostname&&this.hostname.indexOf("deal.ig.com")===-1){dlog("GoogleAnalytics: sendCTAClickEvent - link to an external website");
f.preventDefault();
__gaTracking("send","event",e,"click",l+g,m);
var o=setTimeout(function(){window.location.href=n.attr("href")
},500);
dlog("GoogleAnalytics: sendCTAClickEvent - timeout for redirect set")
}else{if(!!b.storage.LocalQueue){dlog("GoogleAnalytics: sendCTAClickEvent - internal link");
b.storage.LocalQueue.store("ctaGATrack",h,true)
}}}catch(k){dlog("GoogleAnalytics: sendCTAClickEvent - Error tracking "+l+g+" click with exception:"+k);
window.location.href=this.href
}}})
};
a.sendPageView=function(){if(!!__gaTracking){var c=a.defaultProperties;
__gaTracking("send","pageview",c)
}};
b.util.GoogleAnalytics=a;
b.util.GoogleAnalytics.init()
}(PS));
window.PS=window.PS||{};
PS.util=PS.util||{};
(function(){if(!!PS.util.GoogleAnalytics){PS.util.GoogleAnalytics.addTrackingEvent(PS.util.GoogleAnalytics.CLICK_EVENT);
PS.util.GoogleAnalytics.addTrackingEvent(PS.util.GoogleAnalytics.SOCIAL_SHARE);
PS.util.GoogleAnalytics.addTrackingEvent(PS.util.GoogleAnalytics.SOCIAL_FOLLOW);
var a=jq("#appForm");
if(a.length>0){a.load(function(){PS.util.GoogleAnalytics.addTrackingEvent(PS.util.GoogleAnalytics.APPFORM_PAGEVIEW);
PS.util.GoogleAnalytics.addTrackingEvent(PS.util.GoogleAnalytics.APPFORM_IRP)
})
}}})();
window.PS=window.PS||{};
PS.util=PS.util||{};
(function(){if(!!PS.util.GoogleAnalytics){PS.util.GoogleAnalytics.addTrackingEvent(PS.util.GoogleAnalytics.PAGE_VIEW);
PS.util.GoogleAnalytics.addTrackingEvent(PS.util.GoogleAnalytics.PAGE_TIMING);
PS.util.GoogleAnalytics.addTrackingEvent(PS.util.GoogleAnalytics.JS_TIMING)
}})();
PS=window.PS||{};
PS.storage=PS.storage||{};
PS.util=PS.util||{};
PS.util.sendCTATracking=function(){if(!!PS.storage.LocalQueue&&!!PS.util.GoogleAnalytics){"use strict";
var b=PS.storage.LocalQueue.retrieveAll("ctaGATrack");
for(var a=0;
a<b.length;
a++){var c=b[a].value;
if(!!PS.util.GoogleAnalytics.tracker){PS.util.GoogleAnalytics.tracker("send","event",c.linkType,"click",c.text,c.properties)
}PS.storage.LocalQueue.removeElement("ctaGATrack",c)
}}};
PS.util.sendCTATracking();
window.PS=window.PS||{};
window.PS.core=window.PS.core||{};
window.PS.core.Login=window.PS.core.Login||{};
(function(c,a,b){a.coreInit=function(){a.loginFormName="loginForm";
a.account_id_input=b("#account_id");
a.password_input=b("#nonEncryptedPassword");
a.remember_checkbox=b("#remember");
a.demo_checkbox=b("#demo-toggle");
a.login_form=b("#"+a.loginFormName);
a.login_button=b("#loginbutton");
a.encryptionService=function(){var n=c.util.url.getQueryStringParameter("enc");
if(!n.length){n=b("#keyPath").val()
}if(a.account_id_input.val().toLowerCase().startsWith("demo-")){n=c.util.url.switchToDemoSite(n)
}return n.trim()
};
a.encryptionServiceTimeout=b("#keyTimeout").val();
a.defaultUrl=a.login_form.attr("default-action");
a.demoUrl=a.login_form.attr("demo-action");
var h=this;
var m=window.location.pathname.split("/");
var g=1;
var e=m[g];
function k(){h.account_id_input.val("demo-"+h.account_id_input.val());
h.login_form.attr("action",a.demoUrl);
h.account_id_input.focus()
}function l(){h.account_id_input.val(h.account_id_input.val().replace(/demo-/i,""));
h.login_form.attr("action",a.defaultUrl);
h.account_id_input.focus()
}function j(n){if(b(n).val().substr(0,5).toLowerCase()==="demo-"){h.demo_checkbox.prop("checked",true);
h.login_form.attr("action",a.demoUrl)
}else{h.demo_checkbox.prop("checked",false);
h.login_form.attr("action",a.defaultUrl)
}}if(a.login_form.length){if(document.location.hostname!=="localhost"&&document.location.hostname!=="127.0.0.1"&&document.location.hostname.indexOf("igpc")===-1){if(e!=="content"){for(g=2;
g<m.length-1;
m++){e+="/"+m[g]
}b("#exitPath").attr("value",e)
}}c.util.pubsub.subscribe("login.submitEncrypted",a.encryptionSuccessful);
c.util.pubsub.subscribe("login.encryption.failure",a.encryptionFailure);
c.util.pubsub.subscribe("login.submit",a.submitUnencrypted);
h.login_form.submit(function(){c.util.pubsub.publish("login.submitted",null)
});
var f=c.util.Cookie.get("un");
if(f===null||f===""){this.account_id_input.focus()
}else{this.password_input.focus();
this.remember_checkbox.attr("checked","checked");
b(".login-form-warning-text").addClass("highlighted");
this.account_id_input.attr("value",f);
if(typeof f==="string"&&f.indexOf("demo-")>-1){this.demo_checkbox.prop("checked",true);
this.login_form.attr("action",a.demoUrl)
}}this.login_button.click(function(n){n.preventDefault();
j(b(h.account_id_input));
if(h.remember_checkbox.prop("checked")){c.util.Cookie.set("un",h.account_id_input.val(),365)
}else{c.util.Cookie.eat("un")
}if(!h.isValidForm(b(n.target).closest(".validateForm"))){return false
}h.doLoginBasedOnTransition()
});
if(this.demo_checkbox){this.demo_checkbox.click(function(){if(b(this).prop("checked")&&h.account_id_input.val().toLowerCase()!=="demo-"){k()
}else{if(!b(this).prop("checked")){l()
}}});
if(this.account_id_input){this.account_id_input.keyup(function(){j(b(this))
})
}}this.remember_checkbox.click(function(){if(b(this).prop("checked")){b(".login-form-warning-text").addClass("highlighted")
}else{b(".login-form-warning-text").removeClass("highlighted")
}})
}};
a.doOldLogin=function(){var e=b("#loginForm"),f=e.attr("action")+"?tc=2";
e.attr("action",f);
c.util.loginSubmissionManager().submitForm(a.password_input.val(),a.encryptionService(),a.encryptionServiceTimeout)
};
a.doLoginBasedOnTransition=function(){var f=b("#account_id").val(),l=f.toLowerCase().startsWith("demo-"),m=a.CalcHash(f),e=l?b("#demoTransitionPercentage").val():b("#transitionPercentage").val(),k=a.parseTransitionPercentage(e),h=c.util.Page.getQuerystring("lmo").toLowerCase(),j={},g=!!c.util.jspVars&&c.util.jspVars.get("login.ajax");
this.login_button.attr("disabled","disabled").css("background-color","#CCC");
if(g){if((h!==""&&h!=="myig")||m<k||k===100){j={redirectUrl:"puredeal"}
}c.MyIG.login(j)
}else{window.dlog("Ajax Login feature flag disabled. Using old login flow.");
this.doOldLogin()
}};
a.CalcHash=function(g){var e=c.util.getMD5(g),f=parseFloat(e);
f/=4294967296;
f+=0.5;
return f
};
a.parseTransitionPercentage=function(f){var e=parseFloat(f)/100;
if(!isFinite(e)){e=0
}return e
};
a.encryptionSuccessful=function(f,e){a.addEncryptParameter("enc",true);
b("#password").val(e);
a.login_form.submit()
};
a.encryptionFailure=function(e,f){a.addEncryptParameter("enc",false);
a.addEncryptParameter("reason",f)
};
a.submitUnencrypted=function(f,e){b("#password").val(e);
a.login_form.submit()
};
a.addEncryptParameter=function(e,f){var g;
if(document.getElementById(e)){b("#"+e).val(f);
return false
}g=document.createElement("input");
g.setAttribute("type","hidden");
g.setAttribute("name",e);
g.setAttribute("id",e);
g.setAttribute("value",f);
this.login_form.append(g)
};
a.isValidForm=function(e){var f=e||b(".validateForm");
f.find(":input").each(function(){if(!b(this).hasClass("disabled")){if(b(this).attr("placeholder")===b(this).val()){b(this).val("")
}c.util.FormValidation.prototype.validateElement(b(this))
}});
return a.login_form.find("label.error").not(".fielderrors label.error").length<=0
}
}(window.PS,window.PS.core.Login,window.jQuery));
window.PS=window.PS||{};
window.PS.core=window.PS.core||{};
window.PS.core.Login=window.PS.core.Login||{};
(function(n,l,h){var k=n.util.jspVars.get("login.facebook")||{},a=k.fbLoginWithAccount,p=k.fbLoginSocialAccountApiURL,c=k.fbLoginSocialSessionApiURL,b=k.fbLoginClientSecuritySessionApiURL,f=k.fbLoginDealerURL,g=k.fbLoginAppID,e=k.fbLoginCountry,j=k.fbLoginLanguage,r=k.fbLoginTimeout,q="",m="",o=false;
window.fbAsyncInit=function(){FB.init({appId:g,status:true,cookie:true,xfbml:true,version:"v2.5"})
};
if(h(".social-login-button").length){dlog("Social Login : Loading facebook SDK");
(function(x,t,y){var w,u=x.getElementsByTagName(t)[0];
if(x.getElementById(y)){return
}w=x.createElement(t);
w.id=y;
w.src="//connect.facebook.net/en_US/sdk.js";
u.parentNode.insertBefore(w,u)
}(document,"script","facebook-jssdk"))
}h(".social-login-button").click(function(){l.fb_login();
return false;
dlog("Social Login : Running");
dlog("Social Login : Facebook Button Clicked, will retrieve details")
});
l.fb_login=function(){FB.login(function(t){if(t.authResponse){q=t.authResponse.accessToken;
m=t.authResponse.userID;
l.checkPermissions();
l.testAPI();
FB.api("/me",function(u){user_email=u.email
})
}else{dlog("Social Login : User cancelled login or did not fully authorize.")
}},{scope:"email"})
};
l.checkPermissions=function(){FB.api("/me/permissions",function(u){var t=[];
for(i=0;
i<u.data.length;
i++){if(u.data[i].status=="declined"){t.push(u.data[i].permission);
dlog("Social Login : declined: "+t)
}}if(t.toString()==="email"){dlog("Social Login : Email Revoked on login / or in facebook");
l.forceReinstateEmailPermission()
}else{FB.api("/me/",function(w){l.callSocialGatewaySessionService(g,m,q)
})
}})
};
l.forceReinstateEmailPermission=function(){FB.login(function(t){q=t.authResponse.accessToken;
m=t.authResponse.userID;
l.checkPermissions();
dlog("Social Login : Asking to reinstate email permissions")
},{scope:"email",auth_type:"rerequest"})
};
l.testAPI=function(){FB.api("/me?fields=first_name,last_name,email,location,locale",function(t){if(t&&!t.error){dlog("Social Login : Test : JSON.stringify(response) : "+JSON.stringify(t))
}})
};
l.callSocialGatewaySessionService=function(u,w,t){h.ajax({url:c,type:"POST",data:JSON.stringify({facebookToken:t,facebookAccountId:w,facebookAppId:u}),headers:{"Content-Type":"application/json; charset=UTF-8",Accept:"application/json; charset=UTF-8"},timeout:r,async:true}).done(function(x){dlog("Social Login : Session : Account Found....Will try and login with Silent Token");
l.callClientSecuritySessionLoginService(x.tokenValue)
}).fail(function(x,z,y){switch(x.status){case 401:if(a==="false"){dlog("Social Login : Session : Unable to find Account (Unathorized)....Account creation disabled");
h("#social-login-label").removeClass("hidden")
}else{dlog("Social Login : Session : Unable to find Account (Unathorized)....Will try and create one");
l.callSocialGatewayAccountService(u,w,t)
}break;
case 500:dlog("Social Login : Session : Server Error?");
break;
default:dlog("Social Login : Session : "+y)
}if(z==="timeout"){dlog("Social Login : Session : API Custom Timeout")
}})
};
l.callSocialGatewayAccountService=function(u,w,t){h.ajax({url:p,type:"POST",data:JSON.stringify({facebookToken:t,facebookAccountId:w,country:e,language:j,facebookAppId:u}),headers:{"Content-Type":"application/json; charset=UTF-8",Accept:"application/json; charset=UTF-8",version:"2"},timeout:r,async:true}).done(function(){dlog("Social Login: Account Created, will now try and create a session (first time Login set)");
o=true;
l.callSocialGatewaySessionService(u,w,t)
}).fail(function(x,z,y){switch(x.status){case 401:break;
case 500:dlog("Social Login : Account : Server Error?");
break;
default:dlog("Social Login : Account : "+y)
}if(z==="timeout"){dlog("Social Login : Account : API Custom Timeout")
}})
};
l.callClientSecuritySessionLoginService=function(t){dlog("Social Login: FirstTimeLogin"+o);
h.ajax({url:b,type:"POST",data:JSON.stringify({firstTimeDemoLogin:"true"}),headers:{"Content-Type":"application/json; charset=UTF-8",Accept:"application/json; charset=UTF-8",version:"2",CST:t,"X-SECURITY-TOKEN":t},timeout:r,async:true}).done(function(x,z,w){dlog("Social Login: Redirecting to the dealer "+o);
var y="UK";
var u=h("#exitPath");
if(u.length>0&&u.val()!==""){y=u.val()
}window.location.replace(f+"?accountId="+x.currentAccountId+"&exitPath="+y+"&CST="+w.getResponseHeader("CST"))
}).fail(function(u,x,w){switch(u.status){case 401:break;
case 500:dlog("Social Login : Silent : Server Error?");
break;
default:dlog("Social Login : Silent : "+w)
}if(x==="timeout"){dlog("Social Login : Silent : API Custom Timeout")
}})
}
}(window.PS,window.PS.core.Login,window.jQuery));
window.PS=window.PS||{};
window.PS.core=window.PS.core||{};
window.PS.core.Login=window.PS.core.Login||{};
(function(c,a,b){a.init=function(){a.coreInit();
a.isDeprecatedBrowserPopUpOpen=false;
a.ignoreDeprecatedWarning=c.util.Cookie.get("ignoreDeprecatedBrowserWarning")?true:false;
if(b(".login").length){if(c.util.Browser.isCurrentBrowserDeprecated()===true){a.processDeprecatedBrowser()
}}};
a.processDeprecatedBrowser=function(){a.processDeprecatedBrowserContent();
a.bindPopupWarning()
};
a.bindPopupWarning=function(){if(c.util.Browser.shouldCurrentBrowserShowDeprecationPopup()===true){a.login_form.submit(function(e){if(a.ignoreDeprecatedWarning===false){e.preventDefault();
e.stopPropagation();
e.stopImmediatePropagation()
}return a.ignoreDeprecatedWarning
});
c.util.pubsub.subscribe("login.submitted",a.deprecatedBrowserPopup)
}};
a.processDeprecatedBrowserContent=function(){var e=new RegExp(/(?:version\sof\s)?undefined/gi),g=new RegExp("%%browsername%%","gi"),r=new RegExp("#?%%browserupgrade%%","gi"),j=i18n["clientlibs.browsers.deprecated.default.browser"]||"browser",q=i18n["clientlibs.browsers.deprecated.default.upgradelink"]||"//www.google.com/chrome",p=c.util.Browser.getCurrentBrowserInfo(),n=p.browser,m=i18n["clientlibs.browsers.deprecated.name."+n],f=i18n["clientlibs.browsers.deprecated.upgradelink."+n]||q,h=b(".deprecated-information"),o=b(".deprecated-browser-popup"),l=h.html(),k=o.html();
l=l.replace(g,m).replace(r,f).replace(e,j);
k=k.replace(g,m).replace(r,f).replace(e,j);
h.html(l);
o.html(k);
b("body").addClass("deprecated-browser")
};
a.rejectWarning=function(){a.ignoreDeprecatedWarning=true;
c.util.Cookie.set("ignoreDeprecatedBrowserWarning",true,7);
c.util.Lightboxes.kill();
a.login_button.click()
};
a.deprecatedBrowserPopup=function(){var g=function(){a.isDeprecatedBrowserPopUpOpen=true
};
var e=function(){a.isDeprecatedBrowserPopUpOpen=false;
a.login_button.focus()
};
c.util.pubsub.subscribe("login.deprecatedBrowser.popup.opened",g);
c.util.pubsub.subscribe("lightbox.closed",e);
var h=function(){c.util.pubsub.publish("login.deprecatedBrowser.popup.opened");
c.util.Lightboxes.launch("#lb-deprecated-popup");
f();
b('#lightbox a[href^="http"]').focus();
a.ignoreDeprecatedWarning=false
};
var f=function(){b("#lightbox").on("click",'a.button-grey, a[href*="#login"]',function(){c.core.Login.rejectWarning()
})
};
if(a.isDeprecatedBrowserPopUpOpen===true||a.ignoreDeprecatedWarning===true){h=function(){}
}h()
};
b(document).ready(function(){a.init()
})
}(window.PS,window.PS.core.Login,window.jQuery));
window.PS=window.PS||{};
(function(h,a){function f(o){var q=h.util.Cookie.get("IG-ENVIRONMENT"),p=!!q&&q==="DEMO",n="www";
if(!!h.util&&!!h.util.Page&&!!h.util.Page.environment){n=h.util.Page.environment()
}if(!!o&&n==="www"&&p){n="demo"
}return n
}function c(p){var r=navigator.userAgent,q=window.location.pathname.substring(1),o=q.substring(0,q.indexOf("/")),n="https://"+f(p)+".ig.com/"+o+"/validate/api";
return new window.IG.Authenticator(r,n)
}function e(){return !!window.IG&&!!window.IG.Authenticator
}function l(q){var p,r,o,n;
if(this.authenticatorLibraryLoaded){p=c();
r=a("#account_id").val();
o=a("#nonEncryptedPassword").val();
n={username:r,password:o};
a.extend(n,q);
p.login(n).then(function(t){if(!t){window.dlog("MyIG Login: Successful login but no returned data");
g({reasons:["general-error-redirect"]})
}else{if(t.hasOwnProperty("success")&&!t.success){g(t)
}else{var w;
var u=h.util.Page.getQuerystring("next");
if(u&&b(u)){w=u
}else{if(!!t.redirectUrl){w=t.redirectUrl
}else{w="/myig/goto/homepage"
}}window.dlog("MyIG: Logged in successfully",t);
window.location.href=w
}}},function(t){window.dlog("MyIG Login: Error occurred",t);
g({reasons:["general-error-redirect"]})
})
}else{window.dlog("MyIG Login: Library not loaded");
window.PS.core.Login.doOldLogin()
}}function b(n){return new RegExp("^/[^/]","gi").test(n)
}function j(o){var n=".ig.com";
h.util.Cookie.eat("CST",n);
h.util.Cookie.eat("X-SECURITY_TOKEN",n);
h.util.Cookie.eat("sessionOpen",n);
window.dlog("MyIG Error: Can't log out. Removing cookies manually",o);
window.location=window.location.href
}function m(){var n;
if(this.authenticatorLibraryLoaded){n=c(true);
h.util.Cookie.removeListener("sessionOpen");
if(!!n.logout){n.logout().then(function(){window.location=window.location.href
},function(o){j(o)
})
}else{j({error:"Logout function not defined"})
}}}function g(o){window.dlog("MyIG Login: Successful login but problem with account",o);
var r=window.location.pathname.substring(1),p=r.substring(0,r.indexOf("/")),t="/"+p+"/",q={reasons:{ACCESS_DENIED:"service.security.authentication.failure-account-access-denied",ACCOUNT_MIGRATED:"service.security.authentication.account-migrated",ACCOUNT_NOT_ALLOWED:"service.security.authentication.stockbroking-not-allowed-in-trial",ACCOUNT_SUSPENDED:"service.security.authentication.failure-account-suspended",ACCOUNTS_NOT_ALLOWED:"service.security.authentication.all.accounts.stockbroking-not-allowed-in-trial",ACCOUNTS_PENDING:"service.security.authentication.failure-all-accounts-pending",ACCOUNTS_SUSPENDED:"service.security.authentication.failure-all-accounts-suspended",CLIENT_INACTIVE:"service.security.authentication.failure-client-inactive-must-reapply",CLIENT_SUSPENDED:"service.security.authentication.failure-client-suspended",DOCUMENTS_REQUIRED:"service.security.authentication.failure-client-documents-required",FAILURE_GENERIC:"service.security.authentication.failure-generic",FAILURE_WHITELABEL_ACCOUNT:"service.security.authentication.failure-whitelabel-account",FORCE_OLD_LOGIN:"service.security.authentication.force-old-login",INVALID_APPLICATION:"service.security.authentication.invalid-application",INVALID_DETAILS:"service.security.authentication.failure-invalid-details",INVALID_USER_CREDENTIALS:"service.security.twofactor.authentication-invalid-usercredentials",INVALID_WEBSITE:"service.security.authentication.invalid-website",MAX_ATTEMPTS:"service.security.authentication.failure-max-attempts",MISSING_DEFAULT_ACCOUNT:"service.security.authentication.missing-default-account",NONE:"no-reason",NOT_ACTIVATED:"service.security.authentication.failure-account-not-activated",NOT_ACTIVE_INVESTMENTS_ACCOUNT:"service.security.authentication.failure-investment-account-not-active",PUBLIC_API:"service.security.authentication.stockbroking-not-allowed-for-public-api",REDIRECT_TO_GENERAL_ERROR:"general-error-redirect",REQUIRES_ACTIVATION:"service.security.authentication.failure-client-requires-activation"}},n=false,u=Array.isArray(o.reasons)&&o.reasons.length>0?o.reasons[0]:q.reasons.NONE;
switch(u){case q.reasons.ACCOUNTS_PENDING:case q.reasons.ACCOUNT_SUSPENDED:case q.reasons.ACCOUNTS_SUSPENDED:case q.reasons.CLIENT_SUSPENDED:case q.reasons.MAX_ATTEMPTS:t+="re_login_suspended";
break;
case q.reasons.ACCOUNT_MIGRATED:case q.reasons.INVALID_USER_CREDENTIALS:t+="re_wrong_login";
break;
case q.reasons.INVALID_DETAILS:t=null;
n=true;
switch(o.loginAttempts){case 2:h.util.pubsub.publish("login.twoAttempts");
break;
case 1:h.util.pubsub.publish("login.oneAttempts");
break;
case 0:h.util.pubsub.publish("login.noAttempts");
break;
default:h.util.pubsub.publish("login.unrecognisedAccount");
break
}break;
case q.reasons.NOT_ACTIVE_INVESTMENTS_ACCOUNT:t=null;
n=true;
h.util.pubsub.publish("login.notActiveInvestmentsAccount");
break;
case q.reasons.NOT_ACTIVATED:case q.reasons.REQUIRES_ACTIVATION:t+="re_not_activated";
break;
case q.reasons.MISSING_DEFAULT_ACCOUNT:case q.reasons.FORCE_OLD_LOGIN:t=null;
window.PS.core.Login.doOldLogin();
break;
case q.reasons.FAILURE_WHITELABEL_ACCOUNT:t+="re_whitelabel_account";
break;
case q.reasons.CLIENT_INACTIVE:t+="re_account_closed";
break;
case q.reasons.DOCUMENTS_REQUIRED:t+="re_account_not_open";
break;
case q.reasons.REDIRECT_TO_GENERAL_ERROR:default:t+="re_unexpected_error";
break
}if(t!==null){window.location.href=t
}else{if(n){a(".login-button:visible").removeAttr("disabled").removeAttr("style")
}}}function k(){var n=e();
return{authenticatorLibraryLoaded:n,login:l,logout:m}
}h.MyIG=new k()
}(window.PS,window.jQuery));