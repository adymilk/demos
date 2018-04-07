var $jscomp=$jscomp||{};
$jscomp.scope={};
$jscomp.ASSUME_ES5=!1;
$jscomp.ASSUME_NO_NATIVE_MAP=!1;
$jscomp.ASSUME_NO_NATIVE_SET=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(b,a,c){b!=Array.prototype&&b!=Object.prototype&&(b[a]=c.value)
};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a
};
$jscomp.global=$jscomp.getGlobal(this);
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
$jscomp.initSymbol();
$jscomp.initSymbolIterator();
var a=b[Symbol.iterator];
return a?a.call(b):$jscomp.arrayIterator(b)
};
$jscomp.arrayFromIterator=function(b){for(var a,c=[];
!(a=b.next()).done;
){c.push(a.value)
}return c
};
$jscomp.arrayFromIterable=function(a){return a instanceof Array?a:$jscomp.arrayFromIterator($jscomp.makeIterator(a))
};
window.PS=window.PS||{};
window.PS.util=window.PS.util||{};
window.PS.core=window.PS.core||{};
(function(l){Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(C,t){if(null==this){throw new TypeError('"this" is null or not defined')
}var h=Object(this),f=h.length>>>0;
if("function"!==typeof C){throw new TypeError("predicate must be a function")
}for(var c=0;
c<f;
){var q=h[c];
if(C.call(t,q,c,h)){return q
}c++
}}});
Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(C,t){if(null==this){throw new TypeError('"this" is null or not defined')
}var h=Object(this),f=h.length>>>0;
if(0===f){return !1
}t|=0;
for(t=Math.max(0<=t?t:f-Math.abs(t),0);
t<f;
){var c=h[t],q=C;
if(c===q||"number"===typeof c&&"number"===typeof q&&isNaN(c)&&isNaN(q)){return !0
}t++
}return !1
}});
Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);
Element.prototype.closest||(Element.prototype.closest=function(C){var t=this;
if(!document.documentElement.contains(this)){return null
}do{if(t.matches(C)){return t
}t=t.parentElement
}while(null!==t);
return null
});
Element.prototype.isInViewport||(Element.prototype.isInViewport=function(C,t,h){var f=this.getBoundingClientRect(),c=document.documentElement;
C=isNaN(C)?0:C;
t=isNaN(t)?0:t;
return h?0<=f.top&&0<=f.left&&f.bottom<=(window.innerHeight||c.clientHeight)&&f.right<=(c.clientWidth||window.innerWidth):f.bottom>0-C&&f.top<(window.innerHeight||c.clientHeight)+C&&f.right>0-t&&f.left<(c.clientWidth||window.innerWidth)+t
});
Element.prototype.parents||(Element.prototype.parents=function(C){for(var t=[],h=this,f=void 0!==C;
null!==(h=h.parentElement);
){h.nodeType===Node.ELEMENT_NODE&&(f&&!h.matches(C)||t.push(h))
}return t
});
(function(C){C.forEach(function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){null!==this.parentNode&&this.parentNode.removeChild(this)
}})
})
})([Element.prototype,CharacterData.prototype,DocumentType.prototype]);
Element.prototype.siblings||(Element.prototype.siblings=function(C){for(var t=[],h=this.parentNode.firstChild,f=void 0!==C;
h;
h=h.nextSibling){1!=h.nodeType||h==this||f&&!h.matches(C)||t.push(h)
}return t
});
(function(C){function t(a){"string"!==typeof a&&(a=String(a));
if(/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(a)){throw new TypeError("Invalid character in header field name")
}return a.toLowerCase()
}function h(a){"string"!==typeof a&&(a=String(a));
return a
}function f(a){var b={next:function(){var b=a.shift();
return{done:void 0===b,value:b}
}};
M.iterable&&($jscomp.initSymbol(),$jscomp.initSymbolIterator(),b[Symbol.iterator]=function(){return b
});
return b
}function c(a){this.map={};
a instanceof c?a.forEach(function(a,b){this.append(b,a)
},this):Array.isArray(a)?a.forEach(function(a){this.append(a[0],a[1])
},this):a&&Object.getOwnPropertyNames(a).forEach(function(b){this.append(b,a[b])
},this)
}function q(a){if(a.bodyUsed){return Promise.reject(new TypeError("Already read"))
}a.bodyUsed=!0
}function u(a){return new Promise(function(b,e){a.onload=function(){b(a.result)
};
a.onerror=function(){e(a.error)
}
})
}function g(a){var b=new FileReader,e=u(b);
b.readAsArrayBuffer(a);
return e
}function w(a){a=new Uint8Array(a);
for(var b=Array(a.length),e=0;
e<a.length;
e++){b[e]=String.fromCharCode(a[e])
}return b.join("")
}function k(a){if(a.slice){return a.slice(0)
}var b=new Uint8Array(a.byteLength);
b.set(new Uint8Array(a));
return b.buffer
}function n(){this.bodyUsed=!1;
this._initBody=function(a){if(this._bodyInit=a){if("string"===typeof a){this._bodyText=a
}else{if(M.blob&&Blob.prototype.isPrototypeOf(a)){this._bodyBlob=a
}else{if(M.formData&&FormData.prototype.isPrototypeOf(a)){this._bodyFormData=a
}else{if(M.searchParams&&URLSearchParams.prototype.isPrototypeOf(a)){this._bodyText=a.toString()
}else{if(M.arrayBuffer&&M.blob&&a&&DataView.prototype.isPrototypeOf(a)){this._bodyArrayBuffer=k(a.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])
}else{if(M.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(a)||ba(a))){this._bodyArrayBuffer=k(a)
}else{throw Error("unsupported BodyInit type")
}}}}}}}else{this._bodyText=""
}this.headers.get("content-type")||("string"===typeof a?this.headers.set("content-type","text/plain;charset\x3dUTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):M.searchParams&&URLSearchParams.prototype.isPrototypeOf(a)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset\x3dUTF-8"))
};
M.blob&&(this.blob=function(){var a=q(this);
if(a){return a
}if(this._bodyBlob){return Promise.resolve(this._bodyBlob)
}if(this._bodyArrayBuffer){return Promise.resolve(new Blob([this._bodyArrayBuffer]))
}if(this._bodyFormData){throw Error("could not read FormData body as blob")
}return Promise.resolve(new Blob([this._bodyText]))
},this.arrayBuffer=function(){return this._bodyArrayBuffer?q(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(g)
});
this.text=function(){var a=q(this);
if(a){return a
}if(this._bodyBlob){a=this._bodyBlob;
var b=new FileReader,e=u(b);
b.readAsText(a);
return e
}if(this._bodyArrayBuffer){return Promise.resolve(w(this._bodyArrayBuffer))
}if(this._bodyFormData){throw Error("could not read FormData body as text")
}return Promise.resolve(this._bodyText)
};
M.formData&&(this.formData=function(){return this.text().then(r)
});
this.json=function(){return this.text().then(JSON.parse)
};
return this
}function e(a,b){b=b||{};
var n=b.body;
if(a instanceof e){if(a.bodyUsed){throw new TypeError("Already read")
}this.url=a.url;
this.credentials=a.credentials;
b.headers||(this.headers=new c(a.headers));
this.method=a.method;
this.mode=a.mode;
n||null==a._bodyInit||(n=a._bodyInit,a.bodyUsed=!0)
}else{this.url=String(a)
}this.credentials=b.credentials||this.credentials||"omit";
if(b.headers||!this.headers){this.headers=new c(b.headers)
}a=b.method||this.method||"GET";
var g=a.toUpperCase();
this.method=-1<y.indexOf(g)?g:a;
this.mode=b.mode||this.mode||null;
this.referrer=null;
if(("GET"===this.method||"HEAD"===this.method)&&n){throw new TypeError("Body not allowed for GET or HEAD requests")
}this._initBody(n)
}function r(a){var b=new FormData;
a.trim().split("\x26").forEach(function(a){if(a){var e=a.split("\x3d");
a=e.shift().replace(/\+/g," ");
e=e.join("\x3d").replace(/\+/g," ");
b.append(decodeURIComponent(a),decodeURIComponent(e))
}});
return b
}function z(a){var b=new c;
a.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(a){var e=a.split(":");
if(a=e.shift().trim()){e=e.join(":").trim(),b.append(a,e)
}});
return b
}function l(a,b){b||(b={});
this.type="default";
this.status=void 0===b.status?200:b.status;
this.ok=200<=this.status&&300>this.status;
this.statusText="statusText" in b?b.statusText:"OK";
this.headers=new c(b.headers);
this.url=b.url||"";
this._initBody(a)
}if(!C.fetch){$jscomp.initSymbol();
var b="Symbol" in C&&"iterator" in Symbol,a;
if(a="FileReader" in C&&"Blob" in C){try{new Blob,a=!0
}catch(na){a=!1
}}var M={searchParams:"URLSearchParams" in C,iterable:b,blob:a,formData:"FormData" in C,arrayBuffer:"ArrayBuffer" in C};
if(M.arrayBuffer){var ca="[object Int8Array];[object Uint8Array];[object Uint8ClampedArray];[object Int16Array];[object Uint16Array];[object Int32Array];[object Uint32Array];[object Float32Array];[object Float64Array]".split(";"),ba=ArrayBuffer.isView||function(a){return a&&-1<ca.indexOf(Object.prototype.toString.call(a))
}
}c.prototype.append=function(a,b){a=t(a);
b=h(b);
var e=this.map[a];
this.map[a]=e?e+","+b:b
};
c.prototype["delete"]=function(a){delete this.map[t(a)]
};
c.prototype.get=function(a){a=t(a);
return this.has(a)?this.map[a]:null
};
c.prototype.has=function(a){return this.map.hasOwnProperty(t(a))
};
c.prototype.set=function(a,b){this.map[t(a)]=h(b)
};
c.prototype.forEach=function(a,b){for(var e in this.map){this.map.hasOwnProperty(e)&&a.call(b,this.map[e],e,this)
}};
c.prototype.keys=function(){var a=[];
this.forEach(function(b,e){a.push(e)
});
return f(a)
};
c.prototype.values=function(){var a=[];
this.forEach(function(b){a.push(b)
});
return f(a)
};
c.prototype.entries=function(){var a=[];
this.forEach(function(b,e){a.push([e,b])
});
return f(a)
};
M.iterable&&($jscomp.initSymbol(),$jscomp.initSymbolIterator(),c.prototype[Symbol.iterator]=c.prototype.entries);
var y="DELETE GET HEAD OPTIONS POST PUT".split(" ");
e.prototype.clone=function(){return new e(this,{body:this._bodyInit})
};
n.call(e.prototype);
n.call(l.prototype);
l.prototype.clone=function(){return new l(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new c(this.headers),url:this.url})
};
l.error=function(){var a=new l(null,{status:0,statusText:""});
a.type="error";
return a
};
var x=[301,302,303,307,308];
l.redirect=function(a,b){if(-1===x.indexOf(b)){throw new RangeError("Invalid status code")
}return new l(null,{status:b,headers:{location:a}})
};
C.Headers=c;
C.Request=e;
C.Response=l;
C.fetch=function(a,b){return new Promise(function(c,n){var g=new e(a,b),k=new XMLHttpRequest;
k.onload=function(){var a={status:k.status,statusText:k.statusText,headers:z(k.getAllResponseHeaders()||"")};
a.url="responseURL" in k?k.responseURL:a.headers.get("X-Request-URL");
c(new l("response" in k?k.response:k.responseText,a))
};
k.onerror=function(){n(new TypeError("Network request failed"))
};
k.ontimeout=function(){n(new TypeError("Network request failed"))
};
k.open(g.method,g.url,!0);
"include"===g.credentials?k.withCredentials=!0:"omit"===g.credentials&&(k.withCredentials=!1);
"responseType" in k&&M.blob&&(k.responseType="blob");
g.headers.forEach(function(a,b){k.setRequestHeader(b,a)
});
k.send("undefined"===typeof g._bodyInit?null:g._bodyInit)
})
};
C.fetch.polyfill=!0
}})("undefined"!==typeof self?self:window);
window.matchMedia||(window.matchMedia=function(){var l=window.styleMedia||window.media;
if(!l){var t=document.createElement("style"),h=document.getElementsByTagName("script")[0],f=null;
t.type="text/css";
t.id="matchmediajs-test";
h.parentNode.insertBefore(t,h);
f=window.getComputedStyle&&window.getComputedStyle(t,null)||t.currentStyle;
l={matchMedium:function(c){c="@media "+c+"{ #matchmediajs-test { width: 1px; } }";
t.styleSheet?t.styleSheet.cssText=c:t.textContent=c;
return"1px"===f.width
}}
}return function(c){return{matches:l.matchMedium(c||"all"),media:c||"all"}
}
}());
window.matchMedia.IGMeasures={min_width_responsive:"300px",max_width_responsive_mobile:"599px",min_width_tablet_portrait:"601px",max_width_tablet_portrait:"800px",min_width_responsive_form:"960px",min_breakpoint:"1024px",max_width_wide:"1800px"};
Math.trunc||(Math.trunc=function(l){l=+l;
return l-l%1||(isFinite(l)&&0!==l?0>l?-0:0:l)
});
window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(l,t){t=t||window;
for(var h=0;
h<this.length;
h++){l.call(t,this[h],h,this)
}});
Number.isFinite=Number.isFinite||function(l){return"number"===typeof l&&isFinite(l)
};
"function"!=typeof Object.assign&&(Object.assign=function(l,t){if(null==l){throw new TypeError("Cannot convert undefined or null to object")
}for(var h=Object(l),f=1;
f<arguments.length;
f++){var c=arguments[f];
if(null!=c){for(var q in c){Object.prototype.hasOwnProperty.call(c,q)&&(h[q]=c[q])
}}}return h
});
(function(l){l.picturefill=function(){for(var t=l.document.getElementsByTagName("span"),h=0,f=t.length;
h<f;
h++){if(null!==t[h].getAttribute("data-picture")){for(var c=t[h].getElementsByTagName("span"),q=[],u=0,g=c.length;
u<g;
u++){var w=c[u].getAttribute("data-media");
(!w||l.matchMedia&&l.matchMedia(w).matches)&&q.push(c[u])
}c=t[h].getElementsByTagName("img")[0];
if(q.length){q=q.pop();
if(!c||"NOSCRIPT"===c.parentNode.nodeName){c=l.document.createElement("img"),c.alt=t[h].getAttribute("data-alt")
}else{if(q===c.parentNode){continue
}}c.src=q.getAttribute("data-src");
q.appendChild(c);
c.parentNode.closest(".lazyload").parentNode.removeAttribute("style")
}else{c&&c.parentNode.removeChild(c)
}}}};
l.addEventListener?(l.addEventListener("resize",l.picturefill,!1),l.addEventListener("DOMContentLoaded",function(){l.picturefill();
l.removeEventListener("load",l.picturefill,!1)
},!1),l.addEventListener("load",l.picturefill,!1)):l.attachEvent&&l.attachEvent("onload",l.picturefill)
})(window);
(function(l){function t(e,c){return function(){e.apply(c,arguments)
}
}function h(e){if("object"!==typeof this){throw new TypeError("Promises must be constructed via new")
}if("function"!==typeof e){throw new TypeError("not a function")
}this._value=this._state=null;
this._deferreds=[];
w(e,t(c,this),t(q,this))
}function f(e){var c=this;
null===this._state?this._deferreds.push(e):k(function(){var n=c._state?e.onFulfilled:e.onRejected;
if(null===n){(c._state?e.resolve:e.reject)(c._value)
}else{try{var k=n(c._value)
}catch(b){e.reject(b);
return
}e.resolve(k)
}})
}function c(e){try{if(e===this){throw new TypeError("A promise cannot be resolved with itself.")
}if(e&&("object"===typeof e||"function"===typeof e)){var n=e.then;
if("function"===typeof n){w(t(n,e),t(c,this),t(q,this));
return
}}this._state=!0;
this._value=e;
u.call(this)
}catch(z){q.call(this,z)
}}function q(e){this._state=!1;
this._value=e;
u.call(this)
}function u(){for(var e=0,c=this._deferreds.length;
e<c;
e++){f.call(this,this._deferreds[e])
}this._deferreds=null
}function g(e,c,n,k){this.onFulfilled="function"===typeof e?e:null;
this.onRejected="function"===typeof c?c:null;
this.resolve=n;
this.reject=k
}function w(e,c,n){var k=!1;
try{e(function(b){k||(k=!0,c(b))
},function(b){k||(k=!0,n(b))
})
}catch(b){k||(k=!0,n(b))
}}var k="function"===typeof setImmediate&&setImmediate||function(e){setTimeout(e,1)
},n=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)
};
h.prototype["catch"]=function(e){return this.then(null,e)
};
h.prototype.then=function(e,c){var n=this;
return new h(function(k,b){f.call(n,new g(e,c,k,b))
})
};
h.all=function(){var e=Array.prototype.slice.call(1===arguments.length&&n(arguments[0])?arguments[0]:arguments);
return new h(function(c,n){function k(a,g){try{if(g&&("object"===typeof g||"function"===typeof g)){var f=g.then;
if("function"===typeof f){f.call(g,function(b){k(a,b)
},n);
return
}}e[a]=g;
0===--b&&c(e)
}catch(y){n(y)
}}if(0===e.length){return c([])
}for(var b=e.length,a=0;
a<e.length;
a++){k(a,e[a])
}})
};
h.resolve=function(e){return e&&"object"===typeof e&&e.constructor===h?e:new h(function(c){c(e)
})
};
h.reject=function(e){return new h(function(c,n){n(e)
})
};
h.race=function(e){return new h(function(c,n){for(var k=0,b=e.length;
k<b;
k++){e[k].then(c,n)
}})
};
h._setImmediateFn=function(e){k=e
};
l.Promise||(l.Promise=h)
})(window);
String.prototype.includes||(String.prototype.includes=function(l,t){"number"!==typeof t&&(t=0);
return t+l.length>this.length?!1:-1!==this.indexOf(l,t)
});
"function"!=typeof String.prototype.startsWith&&(String.prototype.startsWith=function(l){return this.slice(0,l.length)==l
});
!function c(l,h,f){function q(g,k){if(!h[g]){if(!l[g]){var n="function"==typeof require&&require;
if(!k&&n){return n(g,!0)
}if(u){return u(g,!0)
}k=Error("Cannot find module '"+g+"'");
throw k.code="MODULE_NOT_FOUND",k
}k=h[g]={exports:{}};
l[g][0].call(k.exports,function(e){return q(l[g][1][e]||e)
},k,k.exports,c,l,h,f)
}return h[g].exports
}for(var u="function"==typeof require&&require,g=0;
g<f.length;
g++){q(f[g])
}return q
}({1:[function(l,h,f){(function(c){l("./utils/polyfills");
var f=l("./strategies/LocalVisitor"),u=l("./strategies/ProxyVisitor"),g=l("./strategies/PlaceholderVisitor"),w=l("./utils/callbackRegistryFactory"),k=l("./Message"),n=l("./enums").MESSAGES;
h.exports=function(e,h,q,l){function b(a){x.isInvalid(a)||(O=!1,a=x.parse(a),z.setStateAndPublish(a.state))
}function a(a){!O&&y&&(O=!0,x.send(l,a))
}function r(){Object.assign(z,new f(q._generateID));
z.getMarketingCloudVisitorID();
z.callbackRegistry.executeAll(z.state,!0);
c.removeEventListener("message",t)
}function t(e){x.isInvalid(e)||(e=x.parse(e),O=!1,c.clearTimeout(this.timeout),c.removeEventListener("message",t),Object.assign(z,new u(z)),c.addEventListener("message",b),z.setStateAndPublish(e.state),z.callbackRegistry.hasCallbacks()&&a(n.GETSTATE))
}var z=this,y=h.whitelistParentDomain;
z.state={};
z.version=q.version;
z.marketingCloudOrgID=e;
var O=!1,x=new k(e,y);
z.callbackRegistry=w();
z.findField=function(a,b){if(z.state[a]){return b(z.state[a]),z.state[a]
}};
z.messageParent=a;
z.setStateAndPublish=function(a){Object.assign(z.state,a);
z.callbackRegistry.executeAll(z.state)
};
c.s_c_in||(c.s_c_il=[],c.s_c_in=0);
z._c="Visitor";
z._il=c.s_c_il;
z._in=c.s_c_in;
z._il[z._in]=z;
c.s_c_in++;
(function(){Object.keys(q).forEach(function(a){0!==a.indexOf("_")&&"function"==typeof q[a]&&(z[a]=function(){})
});
z.getSupplementalDataID=q.getSupplementalDataID
})();
Object.assign(z,new g(z));
(function(){y&&postMessage?(c.addEventListener("message",t),a(n.HANDSHAKE),this.timeout=setTimeout(r,250)):r()
})()
}
}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})
},{"./Message":2,"./enums":4,"./strategies/LocalVisitor":5,"./strategies/PlaceholderVisitor":6,"./strategies/ProxyVisitor":7,"./utils/callbackRegistryFactory":9,"./utils/polyfills":11}],2:[function(l,h,f){var c=l("./enums").MESSAGES,q={0:"prefix",1:"orgID",2:"state"};
h.exports=function(f,g){this.parse=function(c){try{var k={};
return c.data.split("|").forEach(function(c,e){void 0!==c&&(k[q[e]]=2!==e?c:JSON.parse(c))
}),k
}catch(n){}};
this.isInvalid=function(h){var k=this.parse(h);
if(!k||2>Object.keys(k).length){return !0
}var n=f!==k.orgID;
h=!g||h.origin!==g;
k=-1===Object.keys(c).indexOf(k.prefix);
return n||h||k
};
this.send=function(c,k,n){k=k+"|"+f;
n&&n===Object(n)&&(k+="|"+JSON.stringify(n));
try{c.postMessage(k,g)
}catch(e){}}
}
},{"./enums":4}],3:[function(l,h,f){(function(c){var f=l("./ChildVisitor"),u=l("./Message"),g=l("./utils/makeChildMessageListener"),w=l("./utils/asyncParallelApply"),k=function(k,e){function n(v){return function(d){d=d||a.location.href;
try{var m=b._extractParamFromUri(d,v);
if(m){return A.parsePipeDelimetedKeyValues(m)
}}catch(p){}}
}function f(a){a=a||{};
b._supplementalDataIDCurrent=a.supplementalDataIDCurrent||"";
b._supplementalDataIDCurrentConsumed=a.supplementalDataIDCurrentConsumed||{};
b._supplementalDataIDLast=a.supplementalDataIDLast||"";
b._supplementalDataIDLastConsumed=a.supplementalDataIDLastConsumed||{}
}function h(a){for(var d="",m=0,b=a.length;
m<b;
m++){var v=a[m],e=v[0];
v=v[1];
null!=v&&v!==F&&(d=function(d,a,m){return m=m?m+="|":m,m+(d+"\x3d"+encodeURIComponent(a))
}(e,v,d))
}return function(d){var a=A.getTimestampInSeconds();
return d=d?d+="|":d,d+("TS\x3d"+a)
}(d)
}if(!k){throw Error("Visitor requires Adobe Marketing Cloud Org ID")
}var b=this;
b.version="2.5.0";
var a=c,q=a.Visitor;
q.version=b.version;
a.s_c_in||(a.s_c_il=[],a.s_c_in=0);
b._c="Visitor";
b._il=a.s_c_il;
b._in=a.s_c_in;
b._il[b._in]=b;
a.s_c_in++;
b._log={requests:[]};
var l=a.document,t=!!a.postMessage,y=/^[0-9a-fA-F\-]+$/,x=/^\d+$/,D=/vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/,K=window.JSON===Object(window.JSON)&&"function"==typeof window.JSON.stringify;
b._hash=function(a){var d,m=0;
if(a){for(d=0;
d<a.length;
d++){var b=a.charCodeAt(d);
m=(m<<5)-m+b;
m&=m
}}return m
};
b._generateID=function(a,d){var m="0123456789",b="",v="",e=8,c=10,k=10;
if(d===J&&(G.isClientSideMarketingCloudVisitorID=!0),1===a){m+="ABCDEF";
for(a=0;
16>a;
a++){d=Math.floor(Math.random()*e),b+=m.substring(d,d+1),d=Math.floor(Math.random()*e),v+=m.substring(d,d+1),e=16
}return b+"-"+v
}for(a=0;
19>a;
a++){d=Math.floor(Math.random()*c),b+=m.substring(d,d+1),0===a&&9===d?c=3:(1===a||2===a)&&10!==c&&2>d?c=10:2<a&&(c=10),d=Math.floor(Math.random()*k),v+=m.substring(d,d+1),0===a&&9===d?k=3:(1===a||2===a)&&10!==k&&2>d?k=10:2<a&&(k=10)
}return b+v
};
b._getDomain=function(b){var d;
if(!b&&a.location&&(b=a.location.hostname),d=b){if(/^[0-9.]+$/.test(d)){d=""
}else{b=d.split(".");
var m=b.length-1,v=m-1;
if(1<m&&2>=b[m].length&&(2===b[m-1].length||0>",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,".indexOf(","+b[m]+","))&&v--,0<v){for(d="";
m>=v;
){d=b[m]+(d?".":"")+d,m--
}}}}return d
};
b.cookieRead=function(a){a=encodeURIComponent(a);
var d=(";"+l.cookie).split(" ").join(";"),m=d.indexOf(";"+a+"\x3d"),b=0>m?m:d.indexOf(";",m+1);
return 0>m?"":decodeURIComponent(d.substring(m+2+a.length,0>b?d.length:b))
};
b.cookieWrite=function(a,d,m){var v,e=b.cookieLifetime;
(d=""+d,e=e?(""+e).toUpperCase():"",m&&"SESSION"!==e&&"NONE"!==e)?(v=""!==d?parseInt(e||0,10):-60)?(m=new Date,m.setTime(m.getTime()+1000*v)):1===m&&(m=new Date,v=m.getYear(),m.setYear(v+2+(1900>v?1900:0))):m=0;
return a&&"NONE"!==e?(l.cookie=encodeURIComponent(a)+"\x3d"+encodeURIComponent(d)+"; path\x3d/;"+(m?" expires\x3d"+m.toGMTString()+";":"")+(b.cookieDomain?" domain\x3d"+b.cookieDomain+";":""),b.cookieRead(a)===d):0
};
b._callbackList=null;
b._callCallback=function(b,d){try{"function"==typeof b?b.apply(a,d):b[1].apply(b[0],d)
}catch(m){}};
b._registerCallback=function(a,d){d&&(null==b._callbackList&&(b._callbackList={}),void 0==b._callbackList[a]&&(b._callbackList[a]=[]),b._callbackList[a].push(d))
};
b._callAllCallbacks=function(a,d){if(null!=b._callbackList&&(a=b._callbackList[a])){for(;
0<a.length;
){b._callCallback(a.shift(),d)
}}};
b._addQuerystringParam=function(a,d,b,p){d=encodeURIComponent(d)+"\x3d"+encodeURIComponent(b);
b=A.parseHash(a);
a=A.hashlessUrl(a);
if(-1===a.indexOf("?")){return a+"?"+d+b
}a=a.split("?");
return a[0]+"?"+A.addQueryParamAtLocation(a[1],d,p)+b
};
b._extractParamFromUri=function(a,d){if((a=(new RegExp("[\\?\x26#]"+d+"\x3d([^\x26#]*)")).exec(a))&&a.length){return decodeURIComponent(a[1])
}};
b._parseAdobeMcFromUrl=n("adobe_mc");
b._parseAdobeMcSdidFromUrl=n("adobe_mc_sdid");
b._attemptToPopulateSdidFromUrl=function(a){a=b._parseAdobeMcSdidFromUrl(a);
var d=1000000000;
a&&a.TS&&(d=A.getTimestampInSeconds()-a.TS);
a&&a.SDID&&a[H]===k&&d<b.sdidParamExpiry&&(b._supplementalDataIDCurrent=a.SDID,b._supplementalDataIDCurrentConsumed.SDID_URL_PARAM=!0)
};
b._attemptToPopulateIdsFromUrl=function(){var a=b._parseAdobeMcFromUrl();
if(a&&a.TS){var d=A.getTimestampInSeconds()-a.TS;
if(!(5<Math.floor(d/60)||a[H]!==k)){d=a[J];
var m=b.setMarketingCloudVisitorID;
d&&d.match(y)&&m(d);
b._setFieldExpire(E,-1);
a=a[I];
d=b.setAnalyticsVisitorID;
a&&a.match(y)&&d(a)
}}};
b.resetState=function(a){a?b._mergeServerState(a):f()
};
b._mergeServerState=function(a){if(a){try{if(a=function(d){return A.isObject(d)?d:A.parseJSON(d)
}(a),a[b.marketingCloudOrgID]){var d=a[b.marketingCloudOrgID];
!function(d){A.isObject(d)&&b.setCustomerIDs(d)
}(d.customerIDs);
f(d.sdid)
}}catch(m){throw Error("`serverState` has an invalid format.")
}}};
b._timeout=null;
b._loadData=function(a,d,m,p){d=b._addQuerystringParam(d,"d_fieldgroup",a,1);
p.url=b._addQuerystringParam(p.url,"d_fieldgroup",a,1);
p.corsUrl=b._addQuerystringParam(p.corsUrl,"d_fieldgroup",a,1);
G.fieldGroupObj[a]=!0;
p===Object(p)&&p.corsUrl&&"XMLHttpRequest"===b._requestProcs.corsMetadata.corsType?b._requestProcs.fireCORS(p,m,a):b.useCORSOnly||b._loadJSONP(a,d,m)
};
b._loadJSONP=function(a,d,m){var p,v=0,e=0;
if(d&&l){for(p=0;
!v&&2>p;
){try{v=(v=l.getElementsByTagName(0<p?"HEAD":"head"))&&0<v.length?v[0]:0
}catch(S){v=0
}p++
}if(!v){try{l.body&&(v=l.body)
}catch(S){v=0
}}if(v){for(p=0;
!e&&2>p;
){try{e=l.createElement(0<p?"SCRIPT":"script")
}catch(S){e=0
}p++
}}}if(!d||!v||!e){return void (m&&m())
}e.type="text/javascript";
e.src=d;
v.firstChild?v.insertBefore(e,v.firstChild):v.appendChild(e);
p=b.loadTimeout;
m&&(null==b._timeout&&(b._timeout={}),b._timeout[a]=setTimeout(function(){m(!0)
},p));
b._log.requests.push(d)
};
b._clearTimeout=function(a){null!=b._timeout&&b._timeout[a]&&(clearTimeout(b._timeout[a]),b._timeout[a]=0)
};
b._isAllowedDone=!1;
b._isAllowedFlag=!1;
b.isAllowed=function(){return b._isAllowedDone||(b._isAllowedDone=!0,(b.cookieRead(b.cookieName)||b.cookieWrite(b.cookieName,"T",1))&&(b._isAllowedFlag=!0)),b._isAllowedFlag
};
b._fields=null;
b._fieldsExpired=null;
var J="MCMID",H="MCORGID",I="MCAID",E="MCAAMB",F="NONE";
b.FIELDS={MCMID:"MCMID",MCOPTOUT:"MCOPTOUT",MCAID:"MCAID",MCAAMLH:"MCAAMLH",MCAAMB:"MCAAMB"};
b._settingsDigest=0;
b._getSettingsDigest=function(){if(!b._settingsDigest){var a=b.version;
b.audienceManagerServer&&(a+="|"+b.audienceManagerServer);
b.audienceManagerServerSecure&&(a+="|"+b.audienceManagerServerSecure);
b._settingsDigest=b._hash(a)
}return b._settingsDigest
};
b._readVisitorDone=!1;
b._readVisitor=function(){if(!b._readVisitorDone){b._readVisitorDone=!0;
var a,d,m;
var p=b._getSettingsDigest();
var e=!1,c=b.cookieRead(b.cookieName),k=new Date;
if(null==b._fields&&(b._fields={}),c&&"T"!==c){for(c=c.split("|"),c[0].match(/^[\-0-9]+$/)&&(parseInt(c[0],10)!==p&&(e=!0),c.shift()),1==c.length%2&&c.pop(),a=0;
a<c.length;
a+=2){p=c[a].split("-");
var n=p[0];
var g=c[a+1];
1<p.length?(d=parseInt(p[1],10),m=0<p[1].indexOf("s")):(d=0,m=!1);
e&&("MCCIDH"===n&&(g=""),0<d&&(d=k.getTime()/1000-60));
n&&g&&(b._setField(n,g,1),0<d&&(b._fields["expire"+n]=d+(m?"s":""),(k.getTime()>=1000*d||m&&!b.cookieRead(b.sessionCookieName))&&(b._fieldsExpired||(b._fieldsExpired={}),b._fieldsExpired[n]=!0)))
}}!b._getField(I)&&A.isTrackingServerPopulated()&&(c=b.cookieRead("s_vi"))&&(c=c.split("|"),1<c.length&&0<=c[0].indexOf("v1")&&(g=c[1],a=g.indexOf("["),0<=a&&(g=g.substring(0,a)),g&&g.match(y)&&b._setField(I,g)))
}};
b._appendVersionTo=function(a){var d="vVersion|"+b.version,m=a?b._getCookieVersion(a):null;
return m?A.areVersionsDifferent(m,b.version)&&(a=a.replace(D,d)):a+=(a?"|":"")+d,a
};
b._writeVisitor=function(){var a,d,m=b._getSettingsDigest();
for(a in b._fields){!Object.prototype[a]&&b._fields[a]&&"expire"!==a.substring(0,6)&&(d=b._fields[a],m+=(m?"|":"")+a+(b._fields["expire"+a]?"-"+b._fields["expire"+a]:"")+"|"+d)
}m=b._appendVersionTo(m);
b.cookieWrite(b.cookieName,m,1)
};
b._getField=function(a,d){return null==b._fields||!d&&b._fieldsExpired&&b._fieldsExpired[a]?null:b._fields[a]
};
b._setField=function(a,d,m){null==b._fields&&(b._fields={});
b._fields[a]=d;
m||b._writeVisitor()
};
b._getFieldList=function(a,d){return(a=b._getField(a,d))?a.split("*"):null
};
b._setFieldList=function(a,d,m){b._setField(a,d?d.join("*"):"",m)
};
b._getFieldMap=function(a,d){if(a=b._getFieldList(a,d)){var m={};
for(d=0;
d<a.length;
d+=2){m[a[d]]=a[d+1]
}return m
}return null
};
b._setFieldMap=function(a,d,m){var p,v=null;
if(d){for(p in v=[],d){!Object.prototype[p]&&(v.push(p),v.push(d[p]))
}}b._setFieldList(a,v,m)
};
b._setFieldExpire=function(a,d,m){var p=new Date;
p.setTime(p.getTime()+1000*d);
null==b._fields&&(b._fields={});
b._fields["expire"+a]=Math.floor(p.getTime()/1000)+(m?"s":"");
0>d?(b._fieldsExpired||(b._fieldsExpired={}),b._fieldsExpired[a]=!0):b._fieldsExpired&&(b._fieldsExpired[a]=!1);
m&&(b.cookieRead(b.sessionCookieName)||b.cookieWrite(b.sessionCookieName,"1"))
};
b._findVisitorID=function(a){return a&&("object"==typeof a&&(a=a.d_mid?a.d_mid:a.visitorID?a.visitorID:a.id?a.id:a.uuid?a.uuid:""+a),a&&"NOTARGET"===(a=a.toUpperCase())&&(a=F),a&&(a===F||a.match(y))||(a="")),a
};
b._setFields=function(a,d){if(b._clearTimeout(a),null!=b._loading&&(b._loading[a]=!1),G.fieldGroupObj[a]&&G.setState(a,!1),"MC"===a){!0!==G.isClientSideMarketingCloudVisitorID&&(G.isClientSideMarketingCloudVisitorID=!1);
var m=b._getField(J);
if(!m||b.overwriteCrossDomainMCIDAndAID){if(!(m="object"==typeof d&&d.mid?d.mid:b._findVisitorID(d))){if(b._use1stPartyMarketingCloudServer&&!b.tried1stPartyMarketingCloudServer){return b.tried1stPartyMarketingCloudServer=!0,void b.getAnalyticsVisitorID(null,!1,!0)
}m=b._generateID(0,J)
}b._setField(J,m)
}m&&m!==F||(m="");
"object"==typeof d&&((d.d_region||d.dcs_region||d.d_blob||d.blob)&&b._setFields("AAM",d),b._use1stPartyMarketingCloudServer&&d.mid&&b._setFields("A",{id:d.id}));
b._callAllCallbacks(J,[m])
}if("AAM"===a&&"object"==typeof d){m=604800;
void 0!=d.id_sync_ttl&&d.id_sync_ttl&&(m=parseInt(d.id_sync_ttl,10));
var p=L.getRegionAndCheckIfChanged(d,m);
b._callAllCallbacks("MCAAMLH",[p]);
p=b._getField(E);
(d.d_blob||d.blob)&&(p=d.d_blob,p||(p=d.blob),b._setFieldExpire(E,m),b._setField(E,p));
p||(p="");
b._callAllCallbacks(E,[p]);
!d.error_msg&&b._newCustomerIDsHash&&b._setField("MCCIDH",b._newCustomerIDsHash)
}"A"===a&&((a=b._getField(I))&&!b.overwriteCrossDomainMCIDAndAID||(a=b._findVisitorID(d),a?a!==F&&b._setFieldExpire(E,-1):a=F,b._setField(I,a)),a&&a!==F||(a=""),b._callAllCallbacks(I,[a]));
b.idSyncDisableSyncs?L.idCallNotProcesssed=!0:(L.idCallNotProcesssed=!1,a={},a.ibs=d.ibs,a.subdomain=d.subdomain,L.processIDCallData(a));
if(d===Object(d)){var e,v;
b.isAllowed()&&(e=b._getField("MCOPTOUT"));
e||(e=F,d.d_optout&&d.d_optout instanceof Array&&(e=d.d_optout.join(",")),v=parseInt(d.d_ottl,10),isNaN(v)&&(v=7200),b._setFieldExpire("MCOPTOUT",v,!0),b._setField("MCOPTOUT",e));
b._callAllCallbacks("MCOPTOUT",[e])
}};
b._loading=null;
b._getRemoteField=function(a,d,m,p,e){var c,v="",k=A.isFirstPartyAnalyticsVisitorIDCall(a);
if(b.isAllowed()){if(b._readVisitor(),v=b._getField(a,!0===N[a]),!(!v||b._fieldsExpired&&b._fieldsExpired[a])||b.disableThirdPartyCalls&&!k){v||(a===J?(b._registerCallback(a,m),v=b._generateID(0,J),b.setMarketingCloudVisitorID(v)):a===I?(b._registerCallback(a,m),v="",b.setAnalyticsVisitorID(v)):(v="",p=!0))
}else{if(a===J||"MCOPTOUT"===a?c="MC":"MCAAMLH"===a||a===E?c="AAM":a===I&&(c="A"),c){return !d||null!=b._loading&&b._loading[c]||(null==b._loading&&(b._loading={}),b._loading[c]=!0,b._loadData(c,d,function(d){b._getField(a)||(d&&G.setState(c,!0),d="",a===J?d=b._generateID(0,J):"AAM"===c&&(d={error_msg:"timeout"}),b._setFields(c,d))
},e)),b._registerCallback(a,m),v||(d||b._setFields(c,{id:F}),"")
}}}return a!==J&&a!==I||v!==F||(v="",p=!0),m&&p&&b._callCallback(m,[v]),v
};
b._setMarketingCloudFields=function(a){b._readVisitor();
b._setFields("MC",a)
};
b.setMarketingCloudVisitorID=function(a){b._setMarketingCloudFields(a)
};
b._use1stPartyMarketingCloudServer=!1;
b.getMarketingCloudVisitorID=function(a,d){if(b.isAllowed()){b.marketingCloudServer&&0>b.marketingCloudServer.indexOf(".demdex.net")&&(b._use1stPartyMarketingCloudServer=!0);
var m=b._getAudienceManagerURLData("_setMarketingCloudFields");
return b._getRemoteField(J,m.url,a,d,m)
}return""
};
b.getVisitorValues=function(a,d){var m={MCMID:{fn:b.getMarketingCloudVisitorID,args:[!0],context:b},MCOPTOUT:{fn:b.isOptedOut,args:[void 0,!0],context:b},MCAID:{fn:b.getAnalyticsVisitorID,args:[!0],context:b},MCAAMLH:{fn:b.getAudienceManagerLocationHint,args:[!0],context:b},MCAAMB:{fn:b.getAudienceManagerBlob,args:[!0],context:b}};
w(function(){if(!d||!d.length){return m
}var a={};
return d.forEach(function(d){m[d]&&(a[d]=m[d])
}),a
}(),a)
};
b._mapCustomerIDs=function(a){b.getAudienceManagerBlob(a,!0)
};
q.AuthState={UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2};
b._currentCustomerIDs={};
b._customerIDsHashChanged=!1;
b._newCustomerIDsHash="";
b.setCustomerIDs=function(a){function d(){b._customerIDsHashChanged=!1
}if(b.isAllowed()&&a){b._readVisitor();
var m,p;
for(m in a){if(!Object.prototype[m]&&(p=a[m])){if("object"==typeof p){var e={};
p.id&&(e.id=p.id);
void 0!=p.authState&&(e.authState=p.authState);
b._currentCustomerIDs[m]=e
}else{b._currentCustomerIDs[m]={id:p}
}}}a=b.getCustomerIDs();
e=b._getField("MCCIDH");
var c="";
e||(e=0);
for(m in a){!Object.prototype[m]&&(p=a[m],c+=(c?"|":"")+m+"|"+(p.id?p.id:"")+(p.authState?p.authState:""))
}b._newCustomerIDsHash=b._hash(c);
b._newCustomerIDsHash!==e&&(b._customerIDsHashChanged=!0,b._mapCustomerIDs(d))
}};
b.getCustomerIDs=function(){b._readVisitor();
var a,d,m={};
for(a in b._currentCustomerIDs){!Object.prototype[a]&&(d=b._currentCustomerIDs[a],m[a]||(m[a]={}),d.id&&(m[a].id=d.id),void 0!=d.authState?m[a].authState=d.authState:m[a].authState=q.AuthState.UNKNOWN)
}return m
};
b._setAnalyticsFields=function(a){b._readVisitor();
b._setFields("A",a)
};
b.setAnalyticsVisitorID=function(a){b._setAnalyticsFields(a)
};
b.getAnalyticsVisitorID=function(a,d,m){if(!A.isTrackingServerPopulated()&&!m){return b._callCallback(a,[""]),""
}if(b.isAllowed()){var p="";
if(m||(p=b.getMarketingCloudVisitorID(function(d){b.getAnalyticsVisitorID(a,!0)
})),p||m){var e=m?b.marketingCloudServer:b.trackingServer,c="";
b.loadSSL&&(m?b.marketingCloudServerSecure&&(e=b.marketingCloudServerSecure):b.trackingServerSecure&&(e=b.trackingServerSecure));
var k={};
if(e){e="http"+(b.loadSSL?"s":"")+"://"+e+"/id";
p="d_visid_ver\x3d"+b.version+"\x26mcorgid\x3d"+encodeURIComponent(b.marketingCloudOrgID)+(p?"\x26mid\x3d"+encodeURIComponent(p):"")+(b.idSyncDisable3rdPartySyncing?"\x26d_coppa\x3dtrue":"");
var v=["s_c_il",b._in,"_set"+(m?"MarketingCloud":"Analytics")+"Fields"];
c=e+"?"+p+"\x26callback\x3ds_c_il%5B"+b._in+"%5D._set"+(m?"MarketingCloud":"Analytics")+"Fields";
k.corsUrl=e+"?"+p;
k.callback=v
}return k.url=c,b._getRemoteField(m?J:I,c,a,d,k)
}}return""
};
b._setAudienceManagerFields=function(a){b._readVisitor();
b._setFields("AAM",a)
};
b._getAudienceManagerURLData=function(a){var d=b.audienceManagerServer,m="",p=b._getField(J),e=b._getField(E,!0),c=b._getField(I);
c=c&&c!==F?"\x26d_cid_ic\x3dAVID%01"+encodeURIComponent(c):"";
if(b.loadSSL&&b.audienceManagerServerSecure&&(d=b.audienceManagerServerSecure),d){var k,v,g=b.getCustomerIDs();
if(g){for(k in g){!Object.prototype[k]&&(v=g[k],c+="\x26d_cid_ic\x3d"+encodeURIComponent(k)+"%01"+encodeURIComponent(v.id?v.id:"")+(v.authState?"%01"+v.authState:""))
}}a||(a="_setAudienceManagerFields");
d="http"+(b.loadSSL?"s":"")+"://"+d+"/id";
p="d_visid_ver\x3d"+b.version+"\x26d_rtbd\x3djson\x26d_ver\x3d2"+(!p&&b._use1stPartyMarketingCloudServer?"\x26d_verify\x3d1":"")+"\x26d_orgid\x3d"+encodeURIComponent(b.marketingCloudOrgID)+"\x26d_nsid\x3d"+(b.idSyncContainerID||0)+(p?"\x26d_mid\x3d"+encodeURIComponent(p):"")+(b.idSyncDisable3rdPartySyncing?"\x26d_coppa\x3dtrue":"")+(!0===Q?"\x26d_coop_safe\x3d1":!1===Q?"\x26d_coop_unsafe\x3d1":"")+(e?"\x26d_blob\x3d"+encodeURIComponent(e):"")+c;
e=["s_c_il",b._in,a];
return m=d+"?"+p+"\x26d_cb\x3ds_c_il%5B"+b._in+"%5D."+a,{url:m,corsUrl:d+"?"+p,callback:e}
}return{url:m}
};
b.getAudienceManagerLocationHint=function(a,d){if(b.isAllowed()&&b.getMarketingCloudVisitorID(function(d){b.getAudienceManagerLocationHint(a,!0)
})){var m=b._getField(I);
if(!m&&A.isTrackingServerPopulated()&&(m=b.getAnalyticsVisitorID(function(d){b.getAudienceManagerLocationHint(a,!0)
})),m||!A.isTrackingServerPopulated()){return m=b._getAudienceManagerURLData(),b._getRemoteField("MCAAMLH",m.url,a,d,m)
}}return""
};
b.getLocationHint=b.getAudienceManagerLocationHint;
b.getAudienceManagerBlob=function(a,d){if(b.isAllowed()&&b.getMarketingCloudVisitorID(function(d){b.getAudienceManagerBlob(a,!0)
})){var m=b._getField(I);
if(!m&&A.isTrackingServerPopulated()&&(m=b.getAnalyticsVisitorID(function(d){b.getAudienceManagerBlob(a,!0)
})),m||!A.isTrackingServerPopulated()){m=b._getAudienceManagerURLData();
var p=m.url;
return b._customerIDsHashChanged&&b._setFieldExpire(E,-1),b._getRemoteField(E,p,a,d,m)
}}return""
};
b._supplementalDataIDCurrent="";
b._supplementalDataIDCurrentConsumed={};
b._supplementalDataIDLast="";
b._supplementalDataIDLastConsumed={};
b.getSupplementalDataID=function(a,d){b._supplementalDataIDCurrent||d||(b._supplementalDataIDCurrent=b._generateID(1));
var m=b._supplementalDataIDCurrent;
return b._supplementalDataIDLast&&!b._supplementalDataIDLastConsumed[a]?(m=b._supplementalDataIDLast,b._supplementalDataIDLastConsumed[a]=!0):m&&(b._supplementalDataIDCurrentConsumed[a]&&(b._supplementalDataIDLast=b._supplementalDataIDCurrent,b._supplementalDataIDLastConsumed=b._supplementalDataIDCurrentConsumed,b._supplementalDataIDCurrent=m=d?"":b._generateID(1),b._supplementalDataIDCurrentConsumed={}),m&&(b._supplementalDataIDCurrentConsumed[a]=!0)),m
};
q.OptOut={GLOBAL:"global"};
b.getOptOut=function(a,d){if(b.isAllowed()){var m=b._getAudienceManagerURLData("_setMarketingCloudFields");
return b._getRemoteField("MCOPTOUT",m.url,a,d,m)
}return""
};
b.isOptedOut=function(a,d,m){return b.isAllowed()?(d||(d=q.OptOut.GLOBAL),(m=b.getOptOut(function(m){m=m===q.OptOut.GLOBAL||0<=m.indexOf(d);
b._callCallback(a,[m])
},m))?m===q.OptOut.GLOBAL||0<=m.indexOf(d):null):!1
};
b.appendVisitorIDsTo=function(a){var d=[[J,b._getField(J)],[I,b._getField(I)],[H,b.marketingCloudOrgID]];
d=h(d);
try{return b._addQuerystringParam(a,"adobe_mc",d)
}catch(m){return a
}};
b.appendSupplementalDataIDTo=function(a,d){if(!(d=d||b.getSupplementalDataID(A.generateRandomString(),!0))){return a
}d="SDID\x3d"+encodeURIComponent(d)+"|";
d+=H+"\x3d"+encodeURIComponent(b.marketingCloudOrgID)+"|";
d+="TS\x3d"+A.getTimestampInSeconds();
try{return b._addQuerystringParam(a,"adobe_mc_sdid",d)
}catch(m){return a
}};
b._xd={postMessage:function(a,d,b){var m=1;
d&&(t?b.postMessage(a,d.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):d&&(b.location=d.replace(/#.*$/,"")+"#"+ +new Date+m+++"\x26"+a))
},receiveMessage:function(b,d){var m;
try{t&&(b&&(m=function(a){if("string"==typeof d&&a.origin!==d||"[object Function]"===Object.prototype.toString.call(d)&&!1===d(a.origin)){return !1
}b(a)
}),a.addEventListener?a[b?"addEventListener":"removeEventListener"]("message",m,!1):a[b?"attachEvent":"detachEvent"]("\u00e5",m))
}catch(p){}}};
var A={addListener:function(){return l.addEventListener?function(a,d,b){a.addEventListener(d,function(a){"function"==typeof b&&b(a)
},!1)
}:l.attachEvent?function(a,d,b){a.attachEvent("on"+d,function(a){"function"==typeof b&&b(a)
})
}:void 0
}(),map:function(a,d){if(Array.prototype.map){return a.map(d)
}if(void 0===a||null==a){throw new TypeError
}a=Object(a);
var b=a.length>>>0;
if("function"!=typeof d){throw new TypeError
}for(var p=Array(b),e=0;
e<b;
e++){e in a&&(p[e]=d.call(d,a[e],e,a))
}return p
},encodeAndBuildRequest:function(a,d){return this.map(a,function(a){return encodeURIComponent(a)
}).join(d)
},parseHash:function(a){var d=a.indexOf("#");
return 0<d?a.substr(d):""
},hashlessUrl:function(a){var d=a.indexOf("#");
return 0<d?a.substr(0,d):a
},addQueryParamAtLocation:function(a,d,b){a=a.split("\x26");
return b=null!=b?b:a.length,a.splice(b,0,d),a.join("\x26")
},isFirstPartyAnalyticsVisitorIDCall:function(a,d,m){if(a!==I){return !1
}var p;
return d||(d=b.trackingServer),m||(m=b.trackingServerSecure),!("string"!=typeof(p=b.loadSSL?m:d)||!p.length)&&0>p.indexOf("2o7.net")&&0>p.indexOf("omtrdc.net")
},isObject:function(a){return !(!a||a!==Object(a))
},isLessThan:function(a,d){return 0>b._compareVersions(a,d)
},areVersionsDifferent:function(a,d){return 0!==b._compareVersions(a,d)
},removeCookie:function(a){document.cookie=encodeURIComponent(a)+"\x3d; Path\x3d/; Expires\x3dThu, 01 Jan 1970 00:00:01 GMT;"
},isTrackingServerPopulated:function(){return !!b.trackingServer||!!b.trackingServerSecure
},parseJSON:function(a,d){function b(a,m){var p,e,c=a[m];
if(c&&"object"==typeof c){for(p in c){Object.prototype.hasOwnProperty.call(c,p)&&(e=b(c,p),void 0!==e?c[p]=e:delete c[p])
}}return d.call(a,m,c)
}if("object"==typeof JSON&&"function"==typeof JSON.parse){return JSON.parse(a,d)
}var p,e=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
if(a=String(a),e.lastIndex=0,e.test(a)&&(a=a.replace(e,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})),/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return p=eval("("+a+")"),"function"==typeof d?b({"":p},""):p
}throw new SyntaxError("JSON.parse")
},getTimestampInSeconds:function(){return Math.round((new Date).getTime()/1000)
},parsePipeDelimetedKeyValues:function(a){var d={};
a=a.split("|");
for(var b=0,p=a.length;
b<p;
b++){var e=a[b].split("\x3d");
d[e[0]]=decodeURIComponent(e[1])
}return d
},generateRandomString:function(a){a=a||5;
for(var d="";
a--;
){d+="abcdefghijklmnopqrstuvwxyz0123456789"[Math.floor(36*Math.random())]
}return d
},parseBoolean:function(a){return"true"===a||"false"!==a&&null
}};
b._helpers=A;
var B={corsMetadata:function(){var b="none",d=!0;
return"undefined"!=typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials" in new XMLHttpRequest?b="XMLHttpRequest":"undefined"!=typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(d=!1),0<Object.prototype.toString.call(a.HTMLElement).indexOf("Constructor")&&(d=!1)),{corsType:b,corsCookiesEnabled:d}
}(),getCORSInstance:function(){return"none"===this.corsMetadata.corsType?null:new a[this.corsMetadata.corsType]
},fireCORS:function(e,d,m){var p=this;
d&&(e.loadErrorHandler=d);
try{var c=this.getCORSInstance();
c.open("get",e.corsUrl+"\x26ts\x3d"+(new Date).getTime(),!0);
"XMLHttpRequest"===this.corsMetadata.corsType&&(c.withCredentials=!0,c.timeout=b.loadTimeout,c.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),c.onreadystatechange=function(){if(4===this.readyState&&200===this.status){a:{var d;
try{if((d=JSON.parse(this.responseText))!==Object(d)){p.handleCORSError(e,null,"Response is not JSON");
break a
}}catch(T){p.handleCORSError(e,T,"Error parsing response as JSON");
break a
}try{for(var b=e.callback,m=a,c=0;
c<b.length;
c++){m=m[b[c]]
}m(d)
}catch(T){p.handleCORSError(e,T,"Error forming callback function")
}}}});
c.onerror=function(a){p.handleCORSError(e,a,"onerror")
};
c.ontimeout=function(a){p.handleCORSError(e,a,"ontimeout")
};
c.send();
b._log.requests.push(e.corsUrl)
}catch(fa){this.handleCORSError(e,fa,"try-catch")
}},handleCORSError:function(a,d,m){b.CORSErrors.push({corsData:a,error:d,description:m});
a.loadErrorHandler&&("ontimeout"===m?a.loadErrorHandler(!0):a.loadErrorHandler(!1))
}};
b._requestProcs=B;
var L={THROTTLE_START:30000,MAX_SYNCS_LENGTH:649,throttleTimerSet:!1,id:null,onPagePixels:[],iframeHost:null,getIframeHost:function(a){if("string"==typeof a){return a=a.split("/"),a[0]+"//"+a[2]
}},subdomain:null,url:null,getUrl:function(){var a,d="http://fast.",m="?d_nsid\x3d"+b.idSyncContainerID+"#"+encodeURIComponent(l.location.href);
return this.subdomain||(this.subdomain="nosubdomainreturned"),b.loadSSL&&(d=b.idSyncSSLUseAkamai?"https://fast.":"https://"),a=d+this.subdomain+".demdex.net/dest5.html"+m,this.iframeHost=this.getIframeHost(a),this.id="destination_publishing_iframe_"+this.subdomain+"_"+b.idSyncContainerID,a
},checkDPIframeSrc:function(){var a="?d_nsid\x3d"+b.idSyncContainerID+"#"+encodeURIComponent(l.location.href);
"string"==typeof b.dpIframeSrc&&b.dpIframeSrc.length&&(this.id="destination_publishing_iframe_"+(b._subdomain||this.subdomain||(new Date).getTime())+"_"+b.idSyncContainerID,this.iframeHost=this.getIframeHost(b.dpIframeSrc),this.url=b.dpIframeSrc+a)
},idCallNotProcesssed:null,doAttachIframe:!1,startedAttachingIframe:!1,iframeHasLoaded:null,iframeIdChanged:null,newIframeCreated:null,originalIframeHasLoadedAlready:null,regionChanged:!1,timesRegionChanged:0,sendingMessages:!1,messages:[],messagesPosted:[],messagesReceived:[],messageSendingInterval:t?null:100,jsonForComparison:[],jsonDuplicates:[],jsonWaiting:[],jsonProcessed:[],canSetThirdPartyCookies:!0,receivedThirdPartyCookiesNotification:!1,readyToAttachIframe:function(){return !b.idSyncDisable3rdPartySyncing&&(this.doAttachIframe||b._doAttachIframe)&&(this.subdomain&&"nosubdomainreturned"!==this.subdomain||b._subdomain)&&this.url&&!this.startedAttachingIframe
},attachIframe:function(){function a(){p=document.createElement("iframe");
p.sandbox="allow-scripts allow-same-origin";
p.title="Adobe ID Syncing iFrame";
p.id=b.id;
p.name=b.id+"_name";
p.style.cssText="display: none; width: 0; height: 0;";
p.src=b.url;
b.newIframeCreated=!0;
d();
document.body.appendChild(p)
}function d(){A.addListener(p,"load",function(){p.className="aamIframeLoaded";
b.iframeHasLoaded=!0;
b.requestToProcess()
})
}this.startedAttachingIframe=!0;
var b=this,p=document.getElementById(this.id);
p?"IFRAME"!==p.nodeName?(this.id+="_2",this.iframeIdChanged=!0,a()):(this.newIframeCreated=!1,"aamIframeLoaded"!==p.className?(this.originalIframeHasLoadedAlready=!1,d()):(this.originalIframeHasLoadedAlready=!0,this.iframeHasLoaded=!0,this.iframe=p,this.requestToProcess())):a();
this.iframe=p
},requestToProcess:function(a){function d(){p.jsonForComparison.push(a);
p.jsonWaiting.push(a);
p.processSyncOnPage(a)
}var m,p=this;
if(a===Object(a)&&a.ibs){if(K){if(m=JSON.stringify(a.ibs||[]),this.jsonForComparison.length){var e,c,k=!1;
var g=0;
for(e=this.jsonForComparison.length;
g<e;
g++){if(c=this.jsonForComparison[g],m===JSON.stringify(c.ibs||[])){k=!0;
break
}}k?this.jsonDuplicates.push(a):d()
}else{d()
}}else{d()
}}(this.receivedThirdPartyCookiesNotification||!t||this.iframeHasLoaded)&&this.jsonWaiting.length&&(m=this.jsonWaiting.shift(),this.process(m),this.requestToProcess());
!b.idSyncDisableSyncs&&this.iframeHasLoaded&&this.messages.length&&!this.sendingMessages&&(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout(function(){p.messageSendingInterval=t?null:150
},this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())
},getRegionAndCheckIfChanged:function(a,d){var m=b._getField("MCAAMLH");
a=a.d_region||a.dcs_region;
return m?a&&(b._setFieldExpire("MCAAMLH",d),b._setField("MCAAMLH",a),parseInt(m,10)!==a&&(this.regionChanged=!0,this.timesRegionChanged++,b._setField("MCSYNCSOP",""),b._setField("MCSYNCS",""),m=a)):(m=a)&&(b._setFieldExpire("MCAAMLH",d),b._setField("MCAAMLH",m)),m||(m=""),m
},processSyncOnPage:function(a){var d,b;
if((d=a.ibs)&&d instanceof Array&&(b=d.length)){for(a=0;
a<b;
a++){var p=d[a];
p.syncOnPage&&this.checkFirstPartyCookie(p,"","syncOnPage")
}}},process:function(a){var d,b,p,e=encodeURIComponent,c=!1;
if((d=a.ibs)&&d instanceof Array&&(b=d.length)){for(c=!0,p=0;
p<b;
p++){var k=d[p];
var g=[e("ibs"),e(k.id||""),e(k.tag||""),A.encodeAndBuildRequest(k.url||[],","),e(k.ttl||""),"","",k.fireURLSync?"true":"false"];
k.syncOnPage||(this.canSetThirdPartyCookies?this.addMessage(g.join("|")):k.fireURLSync&&this.checkFirstPartyCookie(k,g.join("|")))
}}c&&this.jsonProcessed.push(a)
},checkFirstPartyCookie:function(a,d,m){var p=(m="syncOnPage"===m)?"MCSYNCSOP":"MCSYNCS";
b._readVisitor();
var e,c,k=b._getField(p),g=!1,n=!1,f=Math.ceil((new Date).getTime()/86400000);
k?(e=k.split("*"),c=this.pruneSyncData(e,a.id,f),g=c.dataPresent,n=c.dataValid,g&&n||this.fireSync(m,a,d,e,p,f)):(e=[],this.fireSync(m,a,d,e,p,f))
},pruneSyncData:function(a,d,b){var m,e=!1,c=!1;
for(m=0;
m<a.length;
m++){var k=a[m];
var g=parseInt(k.split("-")[1],10);
k.match("^"+d+"-")?(e=!0,b<g?c=!0:(a.splice(m,1),m--)):b>=g&&(a.splice(m,1),m--)
}return{dataPresent:e,dataValid:c}
},manageSyncsSize:function(a){if(a.join("*").length>this.MAX_SYNCS_LENGTH){for(a.sort(function(a,b){return parseInt(a.split("-")[1],10)-parseInt(b.split("-")[1],10)
});
a.join("*").length>this.MAX_SYNCS_LENGTH;
){a.shift()
}}},fireSync:function(a,d,m,p,e,c){var k=this;
if(a){if("img"===d.tag){var g=d.url,n=b.loadSSL?"https:":"http:";
a=0;
for(m=g.length;
a<m;
a++){p=g[a];
var f=/^\/\//.test(p);
var h=new Image;
A.addListener(h,"load",function(a,d,m,p){return function(){k.onPagePixels[a]=null;
b._readVisitor();
var c=b._getField(e);
var g=[];
if(c){c=c.split("*");
var n;
var f=0;
for(n=c.length;
f<n;
f++){var h=c[f];
h.match("^"+d.id+"-")||g.push(h)
}}k.setSyncTrackingData(g,d,m,p)
}
}(this.onPagePixels.length,d,e,c));
h.src=(f?n:"")+p;
this.onPagePixels.push(h)
}}}else{this.addMessage(m),this.setSyncTrackingData(p,d,e,c)
}},addMessage:function(a){var d=encodeURIComponent(b._enableErrorReporting?"---destpub-debug---":"---destpub---");
this.messages.push((t?"":d)+a)
},setSyncTrackingData:function(a,d,m,p){a.push(d.id+"-"+(p+Math.ceil(d.ttl/60/24)));
this.manageSyncsSize(a);
b._setField(m,a.join("*"))
},sendMessages:function(){var a,d=this,b="",p=encodeURIComponent;
this.regionChanged&&(b=p("---destpub-clear-dextp---"),this.regionChanged=!1);
this.messages.length?t?(a=b+p("---destpub-combined---")+this.messages.join("%01"),this.postMessage(a),this.messages=[],this.sendingMessages=!1):(a=this.messages.shift(),this.postMessage(b+a),setTimeout(function(){d.sendMessages()
},this.messageSendingInterval)):this.sendingMessages=!1
},postMessage:function(a){b._xd.postMessage(a,this.url,this.iframe.contentWindow);
this.messagesPosted.push(a)
},receiveMessage:function(a){var d,b=/^---destpub-to-parent---/;
"string"==typeof a&&b.test(a)&&(d=a.replace(b,"").split("|"),"canSetThirdPartyCookies"===d[0]&&(this.canSetThirdPartyCookies="true"===d[1],this.receivedThirdPartyCookiesNotification=!0,this.requestToProcess()),this.messagesReceived.push(a))
},processIDCallData:function(a){(null==this.url||a.subdomain&&"nosubdomainreturned"===this.subdomain)&&("string"==typeof b._subdomain&&b._subdomain.length?this.subdomain=b._subdomain:this.subdomain=a.subdomain||"",this.url=this.getUrl());
a.ibs instanceof Array&&a.ibs.length&&(this.doAttachIframe=!0);
this.readyToAttachIframe()&&(b.idSyncAttachIframeOnWindowLoad?(q.windowLoaded||"complete"===l.readyState||"loaded"===l.readyState)&&this.attachIframe():this.attachIframeASAP());
"function"==typeof b.idSyncIDCallResult?b.idSyncIDCallResult(a):this.requestToProcess(a);
"function"==typeof b.idSyncAfterIDCallResult&&b.idSyncAfterIDCallResult(a)
},canMakeSyncIDCall:function(a,d){return b._forceSyncIDCall||!a||1<d-a
},attachIframeASAP:function(){function a(){d.startedAttachingIframe||(document.body?d.attachIframe():setTimeout(a,30))
}var d=this;
a()
}};
b._destinationPublishing=L;
b.timeoutMetricsLog=[];
var G={isClientSideMarketingCloudVisitorID:null,MCIDCallTimedOut:null,AnalyticsIDCallTimedOut:null,AAMIDCallTimedOut:null,fieldGroupObj:{},setState:function(a,d){switch(a){case"MC":!1===d?!0!==this.MCIDCallTimedOut&&(this.MCIDCallTimedOut=!1):this.MCIDCallTimedOut=d;
break;
case"A":!1===d?!0!==this.AnalyticsIDCallTimedOut&&(this.AnalyticsIDCallTimedOut=!1):this.AnalyticsIDCallTimedOut=d;
break;
case"AAM":!1===d?!0!==this.AAMIDCallTimedOut&&(this.AAMIDCallTimedOut=!1):this.AAMIDCallTimedOut=d
}}};
b.isClientSideMarketingCloudVisitorID=function(){return G.isClientSideMarketingCloudVisitorID
};
b.MCIDCallTimedOut=function(){return G.MCIDCallTimedOut
};
b.AnalyticsIDCallTimedOut=function(){return G.AnalyticsIDCallTimedOut
};
b.AAMIDCallTimedOut=function(){return G.AAMIDCallTimedOut
};
b.idSyncGetOnPageSyncInfo=function(){return b._readVisitor(),b._getField("MCSYNCSOP")
};
b.idSyncByURL=function(a){var d=a||{};
var m=d.minutesToLive,p="";
d=(b.idSyncDisableSyncs&&(p=p||"Error: id syncs have been disabled"),"string"==typeof d.dpid&&d.dpid.length||(p=p||"Error: config.dpid is empty"),"string"==typeof d.url&&d.url.length||(p=p||"Error: config.url is empty"),void 0===m?m=20160:(m=parseInt(m,10),(isNaN(m)||0>=m)&&(p=p||"Error: config.minutesToLive needs to be a positive number")),{error:p,ttl:m});
if(d.error){return d.error
}var e,c;
m=a.url;
p=encodeURIComponent;
var k=L;
return m=m.replace(/^https:/,"").replace(/^http:/,""),e=A.encodeAndBuildRequest(["",a.dpid,a.dpuuid||""],","),c=["ibs",p(a.dpid),"img",p(m),d.ttl,"",e],k.addMessage(c.join("|")),k.requestToProcess(),"Successfully queued"
};
b.idSyncByDataSource=function(a){return a===Object(a)&&"string"==typeof a.dpuuid&&a.dpuuid.length?(a.url="//dpm.demdex.net/ibs:dpid\x3d"+a.dpid+"\x26dpuuid\x3d"+a.dpuuid,b.idSyncByURL(a)):"Error: config or config.dpuuid is empty"
};
b._compareVersions=function(a,d){if(a===d){return 0
}a=a.toString().split(".");
d=d.toString().split(".");
a:{var b=a.concat(d);
for(var p=0,e=b.length;
p<e;
p++){if(!x.test(b[p])){b=!1;
break a
}}b=!0
}if(b){for(;
a.length<d.length;
){a.push("0")
}for(;
d.length<a.length;
){d.push("0")
}a:{for(b=0;
b<a.length;
b++){p=parseInt(a[b],10);
e=parseInt(d[b],10);
if(p>e){a=1;
break a
}if(e>p){a=-1;
break a
}}a=0
}}else{a=NaN
}return a
};
b._getCookieVersion=function(a){a=a||b.cookieRead(b.cookieName);
return(a=D.exec(a))&&1<a.length?a[1]:null
};
b._resetAmcvCookie=function(a){var d=b._getCookieVersion();
d&&!A.isLessThan(d,a)||A.removeCookie(b.cookieName)
};
b.setAsCoopSafe=function(){Q=!0
};
b.setAsCoopUnsafe=function(){Q=!1
};
0>k.indexOf("@")&&(k+="@AdobeOrg");
b.marketingCloudOrgID=k;
b.cookieName="AMCV_"+k;
b.sessionCookieName="AMCVS_"+k;
b.cookieDomain=b._getDomain();
b.cookieDomain===a.location.hostname&&(b.cookieDomain="");
b.loadSSL=0<=a.location.protocol.toLowerCase().indexOf("https");
b.loadTimeout=30000;
b.CORSErrors=[];
b.marketingCloudServer=b.audienceManagerServer="dpm.demdex.net";
b.sdidParamExpiry=30;
var N={MCAAMLH:!0};
N[E]=!0;
var Q=null;
if(e&&"object"==typeof e){for(var P in e){!Object.prototype[P]&&(b[P]=e[P])
}b.idSyncContainerID=b.idSyncContainerID||0;
Q="boolean"==typeof b.isCoopSafe?b.isCoopSafe:A.parseBoolean(b.isCoopSafe);
b.resetBeforeVersion&&b._resetAmcvCookie(b.resetBeforeVersion);
b._attemptToPopulateIdsFromUrl();
b._attemptToPopulateSdidFromUrl();
b._readVisitor();
e=b._getField("MCIDTS");
B=Math.ceil((new Date).getTime()/86400000);
!b.idSyncDisableSyncs&&L.canMakeSyncIDCall(e,B)&&(b._setFieldExpire(E,-1),b._setField("MCIDTS",B));
b.getMarketingCloudVisitorID();
b.getAudienceManagerLocationHint();
b.getAudienceManagerBlob();
b._mergeServerState(b.serverState)
}else{b._attemptToPopulateIdsFromUrl(),b._attemptToPopulateSdidFromUrl()
}if(!b.idSyncDisableSyncs){L.checkDPIframeSrc();
A.addListener(a,"load",function(){q.windowLoaded=!0;
var a=L;
a.readyToAttachIframe()&&a.attachIframe()
});
try{b._xd.receiveMessage(function(a){L.receiveMessage(a.data)
},L.iframeHost)
}catch(v){}}b.whitelistIframeDomains&&t&&(b.whitelistIframeDomains=b.whitelistIframeDomains instanceof Array?b.whitelistIframeDomains:[b.whitelistIframeDomains],b.whitelistIframeDomains.forEach(function(a){var d=new u(k,a);
d=g(b,d);
b._xd.receiveMessage(d,a)
}))
};
k.getInstance=function(g,e){if(!g){throw Error("Visitor requires Adobe Marketing Cloud Org ID")
}0>g.indexOf("@")&&(g+="@AdobeOrg");
var n;
a:{if(n=c.s_c_il){for(var h=0;
h<n.length;
h++){var q=n[h];
if(q&&"Visitor"===q._c&&q.marketingCloudOrgID===g){n=q;
break a
}}}n=void 0
}if(n){return n
}n=new k(g);
h=n.isAllowed();
c.s_c_il.splice(--c.s_c_in,1);
try{var b=c.self!==c.parent
}catch(a){b=!0
}return b&&!h&&c.parent?new f(g,e,n,c.parent):new k(g,e)
};
(function(){function g(){k.windowLoaded=!0
}c.addEventListener?c.addEventListener("load",g):c.attachEvent&&c.attachEvent("onload",g);
k.codeLoadEnd=(new Date).getTime()
})();
c.Visitor=k;
h.exports=k
}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})
},{"./ChildVisitor":1,"./Message":2,"./utils/asyncParallelApply":8,"./utils/makeChildMessageListener":10}],4:[function(l,h,f){f.MESSAGES={HANDSHAKE:"HANDSHAKE",GETSTATE:"GETSTATE",PARENTSTATE:"PARENTSTATE"};
f.STATE_KEYS_MAP={MCMID:"MCMID",MCAID:"MCAID",MCAAMB:"MCAAMB",MCAAMLH:"MCAAMLH",MCOPTOUT:"MCOPTOUT",CUSTOMERIDS:"CUSTOMERIDS"};
f.ASYNC_API_MAP={MCMID:"getMarketingCloudVisitorID",MCAID:"getAnalyticsVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"getOptOut"};
f.SYNC_API_MAP={CUSTOMERIDS:"getCustomerIDs"};
f.ALL_APIS={MCMID:"getMarketingCloudVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"getOptOut",MCAID:"getAnalyticsVisitorID",CUSTOMERIDS:"getCustomerIDs"};
f.FIELDGROUP_TO_FIELD={MC:"MCMID",A:"MCAID",AAM:"MCAAMB"}
},{}],5:[function(l,h,f){var c=l("../enums").STATE_KEYS_MAP;
h.exports=function(f){function h(){}function g(g,k){var n=this;
return function(){var e=f(0,c.MCMID),g={};
return g[c.MCMID]=e,n.setStateAndPublish(g),k(e),e
}
}this.getMarketingCloudVisitorID=function(f){f=f||h;
var k=this.findField(c.MCMID,f);
f=g.call(this,c.MCMID,f);
return void 0!==k?k:f()
}
}
},{"../enums":4}],6:[function(l,h,f){var c=l("../enums").ASYNC_API_MAP;
h.exports=function(){Object.keys(c).forEach(function(f){this[c[f]]=function(c){this.callbackRegistry.add(f,c)
}
},this)
}
},{"../enums":4}],7:[function(l,h,f){l=l("../enums");
var c=l.MESSAGES,q=l.ASYNC_API_MAP,u=l.SYNC_API_MAP;
h.exports=function(){function g(){}function f(k,g){var e=this;
return function(){return e.callbackRegistry.add(k,g),e.messageParent(c.GETSTATE),""
}
}Object.keys(q).forEach(function(c){this[q[c]]=function(k){k=k||g;
var e=this.findField(c,k);
k=f.call(this,c,k);
return void 0!==e?e:k()
}
},this);
Object.keys(u).forEach(function(c){this[u[c]]=function(){return this.findField(c,g)||{}
}
},this)
}
},{"../enums":4}],8:[function(l,h,f){h.exports=function(c,f){function h(c){return function(e){g[c]=e;
q++;
q===k&&f(g)
}
}var g={},q=0,k=Object.keys(c).length;
Object.keys(c).forEach(function(k){var e=c[k];
if(e.fn){var g=e.args||[];
g.unshift(h(k));
e.fn.apply(e.context||null,g)
}})
}
},{}],9:[function(l,h,f){var c=l("./utils");
h.exports=function(){return{callbacks:{},add:function(c,f){this.callbacks[c]=this.callbacks[c]||[];
var g=this.callbacks[c].push(f)-1;
return function(){this.callbacks[c].splice(g,1)
}
},execute:function(c,f){if(this.callbacks[c]){f=void 0===f?[]:f;
f=f instanceof Array?f:[f];
try{for(;
this.callbacks[c].length;
){var g=this.callbacks[c].shift();
"function"==typeof g?g.apply(null,f):g instanceof Array&&g[1].apply(g[0],f)
}delete this.callbacks[c]
}catch(w){}}},executeAll:function(f,h){(h||f&&!c.isObjectEmpty(f))&&Object.keys(this.callbacks).forEach(function(c){this.execute(c,void 0!==f[c]?f[c]:"")
},this)
},hasCallbacks:function(){return !!Object.keys(this.callbacks).length
}}
}
},{"./utils":12}],10:[function(l,h,f){f=l("../enums");
var c=l("./utils"),q=f.MESSAGES,u=f.ALL_APIS,g=f.ASYNC_API_MAP,w=f.FIELDGROUP_TO_FIELD;
h.exports=function(k,f){function e(){var a={};
return Object.keys(u).forEach(function(b){var e=k[u[b]]();
c.isValueEmpty(e)||(a[b]=e)
}),a
}function n(){var a=[];
return k._loading&&Object.keys(k._loading).forEach(function(b){k._loading[b]&&a.push(w[b])
}),a.length?a:null
}function h(a){return function y(b){if(b=n()){k[g[b[0]]](y,!0)
}else{a()
}}
}function l(b){a(b);
var c=q.HANDSHAKE,k=e();
f.send(b,c,k)
}function b(a){h(function(){var b=q.PARENTSTATE,c=e();
f.send(a,b,c)
})()
}function a(a){var b=k.setCustomerIDs;
k.setCustomerIDs=function(e){b.call(k,e);
f.send(a,q.PARENTSTATE,{CUSTOMERIDS:k.getCustomerIDs()})
}
}return function(a){f.isInvalid(a)||(f.parse(a).prefix===q.HANDSHAKE?l:b)(a.source)
}
}
},{"../enums":4,"./utils":12}],11:[function(l,h,f){Object.keys=Object.keys||function(c){var f=[],h;
for(h in c){f.hasOwnProperty.call(c,h)&&f.push(h)
}return f
};
Array.prototype.forEach=Array.prototype.forEach||function(c,f){for(var h=0,g=this.length;
h<g;
h++){c.call(f,this[h],h,this)
}};
Object.assign=Object.assign||function(c){for(var f,h,g=1;
g<arguments.length;
++g){for(f in h=arguments[g],h){Object.prototype.hasOwnProperty.call(h,f)&&(c[f]=h[f])
}}return c
}
},{}],12:[function(l,h,f){f.isObjectEmpty=function(c){return c===Object(c)&&0===Object.keys(c).length
};
f.isValueEmpty=function(c){return""===c||f.isObjectEmpty(c)
}
},{}]},{},[1,2,3,4]);
!function q(h,f,c){function l(k,n){if(!f[k]){if(!h[k]){var e="function"==typeof require&&require;
if(!n&&e){return e(k,!0)
}if(g){return g(k,!0)
}n=Error("Cannot find module '"+k+"'");
throw n.code="MODULE_NOT_FOUND",n
}n=f[k]={exports:{}};
h[k][0].call(n.exports,function(e){return l(h[k][1][e]||e)
},n,n.exports,q,h,f,c)
}return f[k].exports
}for(var g="function"==typeof require&&require,w=0;
w<c.length;
w++){l(c[w])
}return l
}({1:[function(h,f,c){(function(c){h("./utils/polyfills");
var q=h("./strategies/LocalVisitor"),g=h("./strategies/ProxyVisitor"),l=h("./strategies/PlaceholderVisitor"),k=h("./utils/callbackRegistryFactory"),n=h("./Message"),e=h("./enums").MESSAGES;
f.exports=function(f,h,w,b){function a(a){D.isInvalid(a)||(O=!1,a=D.parse(a),y.setStateAndPublish(a.state))
}function r(a){!O&&x&&(O=!0,D.send(b,a))
}function u(){Object.assign(y,new q(w._generateID));
y.getMarketingCloudVisitorID();
y.callbackRegistry.executeAll(y.state,!0);
c.removeEventListener("message",z)
}function z(b){D.isInvalid(b)||(b=D.parse(b),O=!1,c.clearTimeout(this.timeout),c.removeEventListener("message",z),Object.assign(y,new g(y)),c.addEventListener("message",a),y.setStateAndPublish(b.state),y.callbackRegistry.hasCallbacks()&&r(e.GETSTATE))
}var y=this,x=h.whitelistParentDomain;
y.state={};
y.version=w.version;
y.marketingCloudOrgID=f;
var O=!1,D=new n(f,x);
y.callbackRegistry=k();
y.findField=function(a,b){if(y.state[a]){return b(y.state[a]),y.state[a]
}};
y.messageParent=r;
y.setStateAndPublish=function(a){Object.assign(y.state,a);
y.callbackRegistry.executeAll(y.state)
};
c.s_c_in||(c.s_c_il=[],c.s_c_in=0);
y._c="Visitor";
y._il=c.s_c_il;
y._in=c.s_c_in;
y._il[y._in]=y;
c.s_c_in++;
(function(){Object.keys(w).forEach(function(a){0!==a.indexOf("_")&&"function"==typeof w[a]&&(y[a]=function(){})
});
y.getSupplementalDataID=w.getSupplementalDataID
})();
Object.assign(y,new l(y));
(function(){x&&postMessage?(c.addEventListener("message",z),r(e.HANDSHAKE),this.timeout=setTimeout(u,250)):u()
})()
}
}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})
},{"./Message":2,"./enums":4,"./strategies/LocalVisitor":5,"./strategies/PlaceholderVisitor":6,"./strategies/ProxyVisitor":7,"./utils/callbackRegistryFactory":9,"./utils/polyfills":11}],2:[function(h,f,c){var q=h("./enums").MESSAGES,l={0:"prefix",1:"orgID",2:"state"};
f.exports=function(c,f){this.parse=function(c){try{var k={};
return c.data.split("|").forEach(function(c,f){void 0!==c&&(k[l[f]]=2!==f?c:JSON.parse(c))
}),k
}catch(e){}};
this.isInvalid=function(k){var g=this.parse(k);
if(!g||2>Object.keys(g).length){return !0
}var e=c!==g.orgID;
k=!f||k.origin!==f;
g=-1===Object.keys(q).indexOf(g.prefix);
return e||k||g
};
this.send=function(k,g,e){g=g+"|"+c;
e&&e===Object(e)&&(g+="|"+JSON.stringify(e));
try{k.postMessage(g,f)
}catch(r){}}
}
},{"./enums":4}],3:[function(h,f,c){(function(c){var l=h("./ChildVisitor"),g=h("./Message"),q=h("./utils/makeChildMessageListener"),k=h("./utils/asyncParallelApply"),n=function(e,f){function h(d){return function(b){b=b||l.location.href;
try{var m=a._extractParamFromUri(b,d);
if(m){return B.parsePipeDelimetedKeyValues(m)
}}catch(ea){}}
}function n(d){d=d||{};
a._supplementalDataIDCurrent=d.supplementalDataIDCurrent||"";
a._supplementalDataIDCurrentConsumed=d.supplementalDataIDCurrentConsumed||{};
a._supplementalDataIDLast=d.supplementalDataIDLast||"";
a._supplementalDataIDLastConsumed=d.supplementalDataIDLastConsumed||{}
}function b(a){for(var d="",b=0,c=a.length;
b<c;
b++){var e=a[b],k=e[0];
e=e[1];
null!=e&&e!==A&&(d=function(a,d,b){return b=b?b+="|":b,b+(a+"\x3d"+encodeURIComponent(d))
}(k,e,d))
}return function(a){var d=B.getTimestampInSeconds();
return a=a?a+="|":a,a+("TS\x3d"+d)
}(d)
}if(!e){throw Error("Visitor requires Adobe Marketing Cloud Org ID")
}var a=this;
a.version="2.5.0";
var l=c,w=l.Visitor;
w.version=a.version;
l.s_c_in||(l.s_c_il=[],l.s_c_in=0);
a._c="Visitor";
a._il=l.s_c_il;
a._in=l.s_c_in;
a._il[a._in]=a;
l.s_c_in++;
a._log={requests:[]};
var u=l.document,r=!!l.postMessage,x=/^[0-9a-fA-F\-]+$/,D=/^\d+$/,K=/vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/,J=window.JSON===Object(window.JSON)&&"function"==typeof window.JSON.stringify;
a._hash=function(a){var d,b=0;
if(a){for(d=0;
d<a.length;
d++){var c=a.charCodeAt(d);
b=(b<<5)-b+c;
b&=b
}}return b
};
a._generateID=function(a,b){var d="0123456789",m="",c="",e=8,k=10,g=10;
if(b===H&&(N.isClientSideMarketingCloudVisitorID=!0),1===a){d+="ABCDEF";
for(a=0;
16>a;
a++){b=Math.floor(Math.random()*e),m+=d.substring(b,b+1),b=Math.floor(Math.random()*e),c+=d.substring(b,b+1),e=16
}return m+"-"+c
}for(a=0;
19>a;
a++){b=Math.floor(Math.random()*k),m+=d.substring(b,b+1),0===a&&9===b?k=3:(1===a||2===a)&&10!==k&&2>b?k=10:2<a&&(k=10),b=Math.floor(Math.random()*g),c+=d.substring(b,b+1),0===a&&9===b?g=3:(1===a||2===a)&&10!==g&&2>b?g=10:2<a&&(g=10)
}return m+c
};
a._getDomain=function(a){var d;
if(!a&&l.location&&(a=l.location.hostname),d=a){if(/^[0-9.]+$/.test(d)){d=""
}else{a=d.split(".");
var b=a.length-1,c=b-1;
if(1<b&&2>=a[b].length&&(2===a[b-1].length||0>",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,".indexOf(","+a[b]+","))&&c--,0<c){for(d="";
b>=c;
){d=a[b]+(d?".":"")+d,b--
}}}}return d
};
a.cookieRead=function(a){a=encodeURIComponent(a);
var d=(";"+u.cookie).split(" ").join(";"),b=d.indexOf(";"+a+"\x3d"),c=0>b?b:d.indexOf(";",b+1);
return 0>b?"":decodeURIComponent(d.substring(b+2+a.length,0>c?d.length:c))
};
a.cookieWrite=function(d,b,c){var m,e=a.cookieLifetime;
(b=""+b,e=e?(""+e).toUpperCase():"",c&&"SESSION"!==e&&"NONE"!==e)?(m=""!==b?parseInt(e||0,10):-60)?(c=new Date,c.setTime(c.getTime()+1000*m)):1===c&&(c=new Date,m=c.getYear(),c.setYear(m+2+(1900>m?1900:0))):c=0;
return d&&"NONE"!==e?(u.cookie=encodeURIComponent(d)+"\x3d"+encodeURIComponent(b)+"; path\x3d/;"+(c?" expires\x3d"+c.toGMTString()+";":"")+(a.cookieDomain?" domain\x3d"+a.cookieDomain+";":""),a.cookieRead(d)===b):0
};
a._callbackList=null;
a._callCallback=function(a,b){try{"function"==typeof a?a.apply(l,b):a[1].apply(a[0],b)
}catch(p){}};
a._registerCallback=function(d,b){b&&(null==a._callbackList&&(a._callbackList={}),void 0==a._callbackList[d]&&(a._callbackList[d]=[]),a._callbackList[d].push(b))
};
a._callAllCallbacks=function(d,b){if(null!=a._callbackList&&(d=a._callbackList[d])){for(;
0<d.length;
){a._callCallback(d.shift(),b)
}}};
a._addQuerystringParam=function(a,b,c,e){b=encodeURIComponent(b)+"\x3d"+encodeURIComponent(c);
c=B.parseHash(a);
a=B.hashlessUrl(a);
if(-1===a.indexOf("?")){return a+"?"+b+c
}a=a.split("?");
return a[0]+"?"+B.addQueryParamAtLocation(a[1],b,e)+c
};
a._extractParamFromUri=function(a,b){if((a=(new RegExp("[\\?\x26#]"+b+"\x3d([^\x26#]*)")).exec(a))&&a.length){return decodeURIComponent(a[1])
}};
a._parseAdobeMcFromUrl=h("adobe_mc");
a._parseAdobeMcSdidFromUrl=h("adobe_mc_sdid");
a._attemptToPopulateSdidFromUrl=function(d){d=a._parseAdobeMcSdidFromUrl(d);
var b=1000000000;
d&&d.TS&&(b=B.getTimestampInSeconds()-d.TS);
d&&d.SDID&&d[I]===e&&b<a.sdidParamExpiry&&(a._supplementalDataIDCurrent=d.SDID,a._supplementalDataIDCurrentConsumed.SDID_URL_PARAM=!0)
};
a._attemptToPopulateIdsFromUrl=function(){var d=a._parseAdobeMcFromUrl();
if(d&&d.TS){var b=B.getTimestampInSeconds()-d.TS;
if(!(5<Math.floor(b/60)||d[I]!==e)){b=d[H];
var c=a.setMarketingCloudVisitorID;
b&&b.match(x)&&c(b);
a._setFieldExpire(F,-1);
d=d[E];
b=a.setAnalyticsVisitorID;
d&&d.match(x)&&b(d)
}}};
a.resetState=function(d){d?a._mergeServerState(d):n()
};
a._mergeServerState=function(d){if(d){try{if(d=function(a){return B.isObject(a)?a:B.parseJSON(a)
}(d),d[a.marketingCloudOrgID]){var b=d[a.marketingCloudOrgID];
!function(d){B.isObject(d)&&a.setCustomerIDs(d)
}(b.customerIDs);
n(b.sdid)
}}catch(p){throw Error("`serverState` has an invalid format.")
}}};
a._timeout=null;
a._loadData=function(d,b,c,e){b=a._addQuerystringParam(b,"d_fieldgroup",d,1);
e.url=a._addQuerystringParam(e.url,"d_fieldgroup",d,1);
e.corsUrl=a._addQuerystringParam(e.corsUrl,"d_fieldgroup",d,1);
N.fieldGroupObj[d]=!0;
e===Object(e)&&e.corsUrl&&"XMLHttpRequest"===a._requestProcs.corsMetadata.corsType?a._requestProcs.fireCORS(e,c,d):a.useCORSOnly||a._loadJSONP(d,b,c)
};
a._loadJSONP=function(d,b,c){var m,e=0,p=0;
if(b&&u){for(m=0;
!e&&2>m;
){try{e=(e=u.getElementsByTagName(0<m?"HEAD":"head"))&&0<e.length?e[0]:0
}catch(X){e=0
}m++
}if(!e){try{u.body&&(e=u.body)
}catch(X){e=0
}}if(e){for(m=0;
!p&&2>m;
){try{p=u.createElement(0<m?"SCRIPT":"script")
}catch(X){p=0
}m++
}}}if(!b||!e||!p){return void (c&&c())
}p.type="text/javascript";
p.src=b;
e.firstChild?e.insertBefore(p,e.firstChild):e.appendChild(p);
m=a.loadTimeout;
c&&(null==a._timeout&&(a._timeout={}),a._timeout[d]=setTimeout(function(){c(!0)
},m));
a._log.requests.push(b)
};
a._clearTimeout=function(d){null!=a._timeout&&a._timeout[d]&&(clearTimeout(a._timeout[d]),a._timeout[d]=0)
};
a._isAllowedDone=!1;
a._isAllowedFlag=!1;
a.isAllowed=function(){return a._isAllowedDone||(a._isAllowedDone=!0,(a.cookieRead(a.cookieName)||a.cookieWrite(a.cookieName,"T",1))&&(a._isAllowedFlag=!0)),a._isAllowedFlag
};
a._fields=null;
a._fieldsExpired=null;
var H="MCMID",I="MCORGID",E="MCAID",F="MCAAMB",A="NONE";
a.FIELDS={MCMID:"MCMID",MCOPTOUT:"MCOPTOUT",MCAID:"MCAID",MCAAMLH:"MCAAMLH",MCAAMB:"MCAAMB"};
a._settingsDigest=0;
a._getSettingsDigest=function(){if(!a._settingsDigest){var d=a.version;
a.audienceManagerServer&&(d+="|"+a.audienceManagerServer);
a.audienceManagerServerSecure&&(d+="|"+a.audienceManagerServerSecure);
a._settingsDigest=a._hash(d)
}return a._settingsDigest
};
a._readVisitorDone=!1;
a._readVisitor=function(){if(!a._readVisitorDone){a._readVisitorDone=!0;
var d,b,c;
var e=a._getSettingsDigest();
var k=!1,g=a.cookieRead(a.cookieName),f=new Date;
if(null==a._fields&&(a._fields={}),g&&"T"!==g){for(g=g.split("|"),g[0].match(/^[\-0-9]+$/)&&(parseInt(g[0],10)!==e&&(k=!0),g.shift()),1==g.length%2&&g.pop(),d=0;
d<g.length;
d+=2){e=g[d].split("-");
var h=e[0];
var n=g[d+1];
1<e.length?(b=parseInt(e[1],10),c=0<e[1].indexOf("s")):(b=0,c=!1);
k&&("MCCIDH"===h&&(n=""),0<b&&(b=f.getTime()/1000-60));
h&&n&&(a._setField(h,n,1),0<b&&(a._fields["expire"+h]=b+(c?"s":""),(f.getTime()>=1000*b||c&&!a.cookieRead(a.sessionCookieName))&&(a._fieldsExpired||(a._fieldsExpired={}),a._fieldsExpired[h]=!0)))
}}!a._getField(E)&&B.isTrackingServerPopulated()&&(g=a.cookieRead("s_vi"))&&(g=g.split("|"),1<g.length&&0<=g[0].indexOf("v1")&&(n=g[1],d=n.indexOf("["),0<=d&&(n=n.substring(0,d)),n&&n.match(x)&&a._setField(E,n)))
}};
a._appendVersionTo=function(d){var b="vVersion|"+a.version,c=d?a._getCookieVersion(d):null;
return c?B.areVersionsDifferent(c,a.version)&&(d=d.replace(K,b)):d+=(d?"|":"")+b,d
};
a._writeVisitor=function(){var d,b,c=a._getSettingsDigest();
for(d in a._fields){!Object.prototype[d]&&a._fields[d]&&"expire"!==d.substring(0,6)&&(b=a._fields[d],c+=(c?"|":"")+d+(a._fields["expire"+d]?"-"+a._fields["expire"+d]:"")+"|"+b)
}c=a._appendVersionTo(c);
a.cookieWrite(a.cookieName,c,1)
};
a._getField=function(d,b){return null==a._fields||!b&&a._fieldsExpired&&a._fieldsExpired[d]?null:a._fields[d]
};
a._setField=function(d,b,c){null==a._fields&&(a._fields={});
a._fields[d]=b;
c||a._writeVisitor()
};
a._getFieldList=function(d,b){return(d=a._getField(d,b))?d.split("*"):null
};
a._setFieldList=function(d,b,c){a._setField(d,b?b.join("*"):"",c)
};
a._getFieldMap=function(d,b){if(d=a._getFieldList(d,b)){var c={};
for(b=0;
b<d.length;
b+=2){c[d[b]]=d[b+1]
}return c
}return null
};
a._setFieldMap=function(d,b,c){var e,m=null;
if(b){for(e in m=[],b){!Object.prototype[e]&&(m.push(e),m.push(b[e]))
}}a._setFieldList(d,m,c)
};
a._setFieldExpire=function(d,b,c){var e=new Date;
e.setTime(e.getTime()+1000*b);
null==a._fields&&(a._fields={});
a._fields["expire"+d]=Math.floor(e.getTime()/1000)+(c?"s":"");
0>b?(a._fieldsExpired||(a._fieldsExpired={}),a._fieldsExpired[d]=!0):a._fieldsExpired&&(a._fieldsExpired[d]=!1);
c&&(a.cookieRead(a.sessionCookieName)||a.cookieWrite(a.sessionCookieName,"1"))
};
a._findVisitorID=function(a){return a&&("object"==typeof a&&(a=a.d_mid?a.d_mid:a.visitorID?a.visitorID:a.id?a.id:a.uuid?a.uuid:""+a),a&&"NOTARGET"===(a=a.toUpperCase())&&(a=A),a&&(a===A||a.match(x))||(a="")),a
};
a._setFields=function(b,c){if(a._clearTimeout(b),null!=a._loading&&(a._loading[b]=!1),N.fieldGroupObj[b]&&N.setState(b,!1),"MC"===b){!0!==N.isClientSideMarketingCloudVisitorID&&(N.isClientSideMarketingCloudVisitorID=!1);
var d=a._getField(H);
if(!d||a.overwriteCrossDomainMCIDAndAID){if(!(d="object"==typeof c&&c.mid?c.mid:a._findVisitorID(c))){if(a._use1stPartyMarketingCloudServer&&!a.tried1stPartyMarketingCloudServer){return a.tried1stPartyMarketingCloudServer=!0,void a.getAnalyticsVisitorID(null,!1,!0)
}d=a._generateID(0,H)
}a._setField(H,d)
}d&&d!==A||(d="");
"object"==typeof c&&((c.d_region||c.dcs_region||c.d_blob||c.blob)&&a._setFields("AAM",c),a._use1stPartyMarketingCloudServer&&c.mid&&a._setFields("A",{id:c.id}));
a._callAllCallbacks(H,[d])
}if("AAM"===b&&"object"==typeof c){d=604800;
void 0!=c.id_sync_ttl&&c.id_sync_ttl&&(d=parseInt(c.id_sync_ttl,10));
var e=G.getRegionAndCheckIfChanged(c,d);
a._callAllCallbacks("MCAAMLH",[e]);
e=a._getField(F);
(c.d_blob||c.blob)&&(e=c.d_blob,e||(e=c.blob),a._setFieldExpire(F,d),a._setField(F,e));
e||(e="");
a._callAllCallbacks(F,[e]);
!c.error_msg&&a._newCustomerIDsHash&&a._setField("MCCIDH",a._newCustomerIDsHash)
}"A"===b&&((b=a._getField(E))&&!a.overwriteCrossDomainMCIDAndAID||(b=a._findVisitorID(c),b?b!==A&&a._setFieldExpire(F,-1):b=A,a._setField(E,b)),b&&b!==A||(b=""),a._callAllCallbacks(E,[b]));
a.idSyncDisableSyncs?G.idCallNotProcesssed=!0:(G.idCallNotProcesssed=!1,b={},b.ibs=c.ibs,b.subdomain=c.subdomain,G.processIDCallData(b));
if(c===Object(c)){var m,g;
a.isAllowed()&&(m=a._getField("MCOPTOUT"));
m||(m=A,c.d_optout&&c.d_optout instanceof Array&&(m=c.d_optout.join(",")),g=parseInt(c.d_ottl,10),isNaN(g)&&(g=7200),a._setFieldExpire("MCOPTOUT",g,!0),a._setField("MCOPTOUT",m));
a._callAllCallbacks("MCOPTOUT",[m])
}};
a._loading=null;
a._getRemoteField=function(b,c,e,g,k){var d,m="",p=B.isFirstPartyAnalyticsVisitorIDCall(b);
if(a.isAllowed()){if(a._readVisitor(),m=a._getField(b,!0===Q[b]),!(!m||a._fieldsExpired&&a._fieldsExpired[b])||a.disableThirdPartyCalls&&!p){m||(b===H?(a._registerCallback(b,e),m=a._generateID(0,H),a.setMarketingCloudVisitorID(m)):b===E?(a._registerCallback(b,e),m="",a.setAnalyticsVisitorID(m)):(m="",g=!0))
}else{if(b===H||"MCOPTOUT"===b?d="MC":"MCAAMLH"===b||b===F?d="AAM":b===E&&(d="A"),d){return !c||null!=a._loading&&a._loading[d]||(null==a._loading&&(a._loading={}),a._loading[d]=!0,a._loadData(d,c,function(c){a._getField(b)||(c&&N.setState(d,!0),c="",b===H?c=a._generateID(0,H):"AAM"===d&&(c={error_msg:"timeout"}),a._setFields(d,c))
},k)),a._registerCallback(b,e),m||(c||a._setFields(d,{id:A}),"")
}}}return b!==H&&b!==E||m!==A||(m="",g=!0),e&&g&&a._callCallback(e,[m]),m
};
a._setMarketingCloudFields=function(b){a._readVisitor();
a._setFields("MC",b)
};
a.setMarketingCloudVisitorID=function(b){a._setMarketingCloudFields(b)
};
a._use1stPartyMarketingCloudServer=!1;
a.getMarketingCloudVisitorID=function(b,c){if(a.isAllowed()){a.marketingCloudServer&&0>a.marketingCloudServer.indexOf(".demdex.net")&&(a._use1stPartyMarketingCloudServer=!0);
var d=a._getAudienceManagerURLData("_setMarketingCloudFields");
return a._getRemoteField(H,d.url,b,c,d)
}return""
};
a.getVisitorValues=function(b,c){var d={MCMID:{fn:a.getMarketingCloudVisitorID,args:[!0],context:a},MCOPTOUT:{fn:a.isOptedOut,args:[void 0,!0],context:a},MCAID:{fn:a.getAnalyticsVisitorID,args:[!0],context:a},MCAAMLH:{fn:a.getAudienceManagerLocationHint,args:[!0],context:a},MCAAMB:{fn:a.getAudienceManagerBlob,args:[!0],context:a}};
k(function(){if(!c||!c.length){return d
}var a={};
return c.forEach(function(b){d[b]&&(a[b]=d[b])
}),a
}(),b)
};
a._mapCustomerIDs=function(b){a.getAudienceManagerBlob(b,!0)
};
w.AuthState={UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2};
a._currentCustomerIDs={};
a._customerIDsHashChanged=!1;
a._newCustomerIDsHash="";
a.setCustomerIDs=function(b){function d(){a._customerIDsHashChanged=!1
}if(a.isAllowed()&&b){a._readVisitor();
var c,e;
for(c in b){if(!Object.prototype[c]&&(e=b[c])){if("object"==typeof e){var g={};
e.id&&(g.id=e.id);
void 0!=e.authState&&(g.authState=e.authState);
a._currentCustomerIDs[c]=g
}else{a._currentCustomerIDs[c]={id:e}
}}}b=a.getCustomerIDs();
g=a._getField("MCCIDH");
var k="";
g||(g=0);
for(c in b){!Object.prototype[c]&&(e=b[c],k+=(k?"|":"")+c+"|"+(e.id?e.id:"")+(e.authState?e.authState:""))
}a._newCustomerIDsHash=a._hash(k);
a._newCustomerIDsHash!==g&&(a._customerIDsHashChanged=!0,a._mapCustomerIDs(d))
}};
a.getCustomerIDs=function(){a._readVisitor();
var b,c,e={};
for(b in a._currentCustomerIDs){!Object.prototype[b]&&(c=a._currentCustomerIDs[b],e[b]||(e[b]={}),c.id&&(e[b].id=c.id),void 0!=c.authState?e[b].authState=c.authState:e[b].authState=w.AuthState.UNKNOWN)
}return e
};
a._setAnalyticsFields=function(b){a._readVisitor();
a._setFields("A",b)
};
a.setAnalyticsVisitorID=function(b){a._setAnalyticsFields(b)
};
a.getAnalyticsVisitorID=function(b,c,e){if(!B.isTrackingServerPopulated()&&!e){return a._callCallback(b,[""]),""
}if(a.isAllowed()){var d="";
if(e||(d=a.getMarketingCloudVisitorID(function(d){a.getAnalyticsVisitorID(b,!0)
})),d||e){var m=e?a.marketingCloudServer:a.trackingServer,g="";
a.loadSSL&&(e?a.marketingCloudServerSecure&&(m=a.marketingCloudServerSecure):a.trackingServerSecure&&(m=a.trackingServerSecure));
var k={};
if(m){m="http"+(a.loadSSL?"s":"")+"://"+m+"/id";
d="d_visid_ver\x3d"+a.version+"\x26mcorgid\x3d"+encodeURIComponent(a.marketingCloudOrgID)+(d?"\x26mid\x3d"+encodeURIComponent(d):"")+(a.idSyncDisable3rdPartySyncing?"\x26d_coppa\x3dtrue":"");
var f=["s_c_il",a._in,"_set"+(e?"MarketingCloud":"Analytics")+"Fields"];
g=m+"?"+d+"\x26callback\x3ds_c_il%5B"+a._in+"%5D._set"+(e?"MarketingCloud":"Analytics")+"Fields";
k.corsUrl=m+"?"+d;
k.callback=f
}return k.url=g,a._getRemoteField(e?H:E,g,b,c,k)
}}return""
};
a._setAudienceManagerFields=function(b){a._readVisitor();
a._setFields("AAM",b)
};
a._getAudienceManagerURLData=function(b){var d=a.audienceManagerServer,c="",e=a._getField(H),g=a._getField(F,!0),k=a._getField(E);
k=k&&k!==A?"\x26d_cid_ic\x3dAVID%01"+encodeURIComponent(k):"";
if(a.loadSSL&&a.audienceManagerServerSecure&&(d=a.audienceManagerServerSecure),d){var f,h,n=a.getCustomerIDs();
if(n){for(f in n){!Object.prototype[f]&&(h=n[f],k+="\x26d_cid_ic\x3d"+encodeURIComponent(f)+"%01"+encodeURIComponent(h.id?h.id:"")+(h.authState?"%01"+h.authState:""))
}}b||(b="_setAudienceManagerFields");
d="http"+(a.loadSSL?"s":"")+"://"+d+"/id";
e="d_visid_ver\x3d"+a.version+"\x26d_rtbd\x3djson\x26d_ver\x3d2"+(!e&&a._use1stPartyMarketingCloudServer?"\x26d_verify\x3d1":"")+"\x26d_orgid\x3d"+encodeURIComponent(a.marketingCloudOrgID)+"\x26d_nsid\x3d"+(a.idSyncContainerID||0)+(e?"\x26d_mid\x3d"+encodeURIComponent(e):"")+(a.idSyncDisable3rdPartySyncing?"\x26d_coppa\x3dtrue":"")+(!0===P?"\x26d_coop_safe\x3d1":!1===P?"\x26d_coop_unsafe\x3d1":"")+(g?"\x26d_blob\x3d"+encodeURIComponent(g):"")+k;
g=["s_c_il",a._in,b];
return c=d+"?"+e+"\x26d_cb\x3ds_c_il%5B"+a._in+"%5D."+b,{url:c,corsUrl:d+"?"+e,callback:g}
}return{url:c}
};
a.getAudienceManagerLocationHint=function(b,c){if(a.isAllowed()&&a.getMarketingCloudVisitorID(function(d){a.getAudienceManagerLocationHint(b,!0)
})){var d=a._getField(E);
if(!d&&B.isTrackingServerPopulated()&&(d=a.getAnalyticsVisitorID(function(d){a.getAudienceManagerLocationHint(b,!0)
})),d||!B.isTrackingServerPopulated()){return d=a._getAudienceManagerURLData(),a._getRemoteField("MCAAMLH",d.url,b,c,d)
}}return""
};
a.getLocationHint=a.getAudienceManagerLocationHint;
a.getAudienceManagerBlob=function(b,c){if(a.isAllowed()&&a.getMarketingCloudVisitorID(function(d){a.getAudienceManagerBlob(b,!0)
})){var d=a._getField(E);
if(!d&&B.isTrackingServerPopulated()&&(d=a.getAnalyticsVisitorID(function(d){a.getAudienceManagerBlob(b,!0)
})),d||!B.isTrackingServerPopulated()){d=a._getAudienceManagerURLData();
var e=d.url;
return a._customerIDsHashChanged&&a._setFieldExpire(F,-1),a._getRemoteField(F,e,b,c,d)
}}return""
};
a._supplementalDataIDCurrent="";
a._supplementalDataIDCurrentConsumed={};
a._supplementalDataIDLast="";
a._supplementalDataIDLastConsumed={};
a.getSupplementalDataID=function(b,c){a._supplementalDataIDCurrent||c||(a._supplementalDataIDCurrent=a._generateID(1));
var d=a._supplementalDataIDCurrent;
return a._supplementalDataIDLast&&!a._supplementalDataIDLastConsumed[b]?(d=a._supplementalDataIDLast,a._supplementalDataIDLastConsumed[b]=!0):d&&(a._supplementalDataIDCurrentConsumed[b]&&(a._supplementalDataIDLast=a._supplementalDataIDCurrent,a._supplementalDataIDLastConsumed=a._supplementalDataIDCurrentConsumed,a._supplementalDataIDCurrent=d=c?"":a._generateID(1),a._supplementalDataIDCurrentConsumed={}),d&&(a._supplementalDataIDCurrentConsumed[b]=!0)),d
};
w.OptOut={GLOBAL:"global"};
a.getOptOut=function(b,c){if(a.isAllowed()){var d=a._getAudienceManagerURLData("_setMarketingCloudFields");
return a._getRemoteField("MCOPTOUT",d.url,b,c,d)
}return""
};
a.isOptedOut=function(b,c,e){return a.isAllowed()?(c||(c=w.OptOut.GLOBAL),(e=a.getOptOut(function(d){d=d===w.OptOut.GLOBAL||0<=d.indexOf(c);
a._callCallback(b,[d])
},e))?e===w.OptOut.GLOBAL||0<=e.indexOf(c):null):!1
};
a.appendVisitorIDsTo=function(d){var c=[[H,a._getField(H)],[E,a._getField(E)],[I,a.marketingCloudOrgID]];
c=b(c);
try{return a._addQuerystringParam(d,"adobe_mc",c)
}catch(p){return d
}};
a.appendSupplementalDataIDTo=function(b,c){if(!(c=c||a.getSupplementalDataID(B.generateRandomString(),!0))){return b
}c="SDID\x3d"+encodeURIComponent(c)+"|";
c+=I+"\x3d"+encodeURIComponent(a.marketingCloudOrgID)+"|";
c+="TS\x3d"+B.getTimestampInSeconds();
try{return a._addQuerystringParam(b,"adobe_mc_sdid",c)
}catch(p){return b
}};
a._xd={postMessage:function(a,b,c){var d=1;
b&&(r?c.postMessage(a,b.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):b&&(c.location=b.replace(/#.*$/,"")+"#"+ +new Date+d+++"\x26"+a))
},receiveMessage:function(a,b){var d;
try{r&&(a&&(d=function(d){if("string"==typeof b&&d.origin!==b||"[object Function]"===Object.prototype.toString.call(b)&&!1===b(d.origin)){return !1
}a(d)
}),l.addEventListener?l[a?"addEventListener":"removeEventListener"]("message",d,!1):l[a?"attachEvent":"detachEvent"]("\u00e5",d))
}catch(ea){}}};
var B={addListener:function(){return u.addEventListener?function(a,b,c){a.addEventListener(b,function(a){"function"==typeof c&&c(a)
},!1)
}:u.attachEvent?function(a,b,c){a.attachEvent("on"+b,function(a){"function"==typeof c&&c(a)
})
}:void 0
}(),map:function(a,b){if(Array.prototype.map){return a.map(b)
}if(void 0===a||null==a){throw new TypeError
}a=Object(a);
var d=a.length>>>0;
if("function"!=typeof b){throw new TypeError
}for(var c=Array(d),e=0;
e<d;
e++){e in a&&(c[e]=b.call(b,a[e],e,a))
}return c
},encodeAndBuildRequest:function(a,b){return this.map(a,function(a){return encodeURIComponent(a)
}).join(b)
},parseHash:function(a){var b=a.indexOf("#");
return 0<b?a.substr(b):""
},hashlessUrl:function(a){var b=a.indexOf("#");
return 0<b?a.substr(0,b):a
},addQueryParamAtLocation:function(a,b,c){a=a.split("\x26");
return c=null!=c?c:a.length,a.splice(c,0,b),a.join("\x26")
},isFirstPartyAnalyticsVisitorIDCall:function(b,c,e){if(b!==E){return !1
}var d;
return c||(c=a.trackingServer),e||(e=a.trackingServerSecure),!("string"!=typeof(d=a.loadSSL?e:c)||!d.length)&&0>d.indexOf("2o7.net")&&0>d.indexOf("omtrdc.net")
},isObject:function(a){return !(!a||a!==Object(a))
},isLessThan:function(b,c){return 0>a._compareVersions(b,c)
},areVersionsDifferent:function(b,c){return 0!==a._compareVersions(b,c)
},removeCookie:function(a){document.cookie=encodeURIComponent(a)+"\x3d; Path\x3d/; Expires\x3dThu, 01 Jan 1970 00:00:01 GMT;"
},isTrackingServerPopulated:function(){return !!a.trackingServer||!!a.trackingServerSecure
},parseJSON:function(a,b){function d(a,c){var e,g,m=a[c];
if(m&&"object"==typeof m){for(e in m){Object.prototype.hasOwnProperty.call(m,e)&&(g=d(m,e),void 0!==g?m[e]=g:delete m[e])
}}return b.call(a,c,m)
}if("object"==typeof JSON&&"function"==typeof JSON.parse){return JSON.parse(a,b)
}var c,e=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
if(a=String(a),e.lastIndex=0,e.test(a)&&(a=a.replace(e,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})),/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return c=eval("("+a+")"),"function"==typeof b?d({"":c},""):c
}throw new SyntaxError("JSON.parse")
},getTimestampInSeconds:function(){return Math.round((new Date).getTime()/1000)
},parsePipeDelimetedKeyValues:function(a){var b={};
a=a.split("|");
for(var d=0,c=a.length;
d<c;
d++){var e=a[d].split("\x3d");
b[e[0]]=decodeURIComponent(e[1])
}return b
},generateRandomString:function(a){a=a||5;
for(var b="";
a--;
){b+="abcdefghijklmnopqrstuvwxyz0123456789"[Math.floor(36*Math.random())]
}return b
},parseBoolean:function(a){return"true"===a||"false"!==a&&null
}};
a._helpers=B;
var L={corsMetadata:function(){var a="none",b=!0;
return"undefined"!=typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials" in new XMLHttpRequest?a="XMLHttpRequest":"undefined"!=typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(b=!1),0<Object.prototype.toString.call(l.HTMLElement).indexOf("Constructor")&&(b=!1)),{corsType:a,corsCookiesEnabled:b}
}(),getCORSInstance:function(){return"none"===this.corsMetadata.corsType?null:new l[this.corsMetadata.corsType]
},fireCORS:function(b,c,e){var d=this;
c&&(b.loadErrorHandler=c);
try{var g=this.getCORSInstance();
g.open("get",b.corsUrl+"\x26ts\x3d"+(new Date).getTime(),!0);
"XMLHttpRequest"===this.corsMetadata.corsType&&(g.withCredentials=!0,g.timeout=a.loadTimeout,g.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),g.onreadystatechange=function(){if(4===this.readyState&&200===this.status){a:{var a;
try{if((a=JSON.parse(this.responseText))!==Object(a)){d.handleCORSError(b,null,"Response is not JSON");
break a
}}catch(U){d.handleCORSError(b,U,"Error parsing response as JSON");
break a
}try{for(var c=b.callback,e=l,g=0;
g<c.length;
g++){e=e[c[g]]
}e(a)
}catch(U){d.handleCORSError(b,U,"Error forming callback function")
}}}});
g.onerror=function(a){d.handleCORSError(b,a,"onerror")
};
g.ontimeout=function(a){d.handleCORSError(b,a,"ontimeout")
};
g.send();
a._log.requests.push(b.corsUrl)
}catch(S){this.handleCORSError(b,S,"try-catch")
}},handleCORSError:function(b,c,e){a.CORSErrors.push({corsData:b,error:c,description:e});
b.loadErrorHandler&&("ontimeout"===e?b.loadErrorHandler(!0):b.loadErrorHandler(!1))
}};
a._requestProcs=L;
var G={THROTTLE_START:30000,MAX_SYNCS_LENGTH:649,throttleTimerSet:!1,id:null,onPagePixels:[],iframeHost:null,getIframeHost:function(a){if("string"==typeof a){return a=a.split("/"),a[0]+"//"+a[2]
}},subdomain:null,url:null,getUrl:function(){var b,c="http://fast.",e="?d_nsid\x3d"+a.idSyncContainerID+"#"+encodeURIComponent(u.location.href);
return this.subdomain||(this.subdomain="nosubdomainreturned"),a.loadSSL&&(c=a.idSyncSSLUseAkamai?"https://fast.":"https://"),b=c+this.subdomain+".demdex.net/dest5.html"+e,this.iframeHost=this.getIframeHost(b),this.id="destination_publishing_iframe_"+this.subdomain+"_"+a.idSyncContainerID,b
},checkDPIframeSrc:function(){var b="?d_nsid\x3d"+a.idSyncContainerID+"#"+encodeURIComponent(u.location.href);
"string"==typeof a.dpIframeSrc&&a.dpIframeSrc.length&&(this.id="destination_publishing_iframe_"+(a._subdomain||this.subdomain||(new Date).getTime())+"_"+a.idSyncContainerID,this.iframeHost=this.getIframeHost(a.dpIframeSrc),this.url=a.dpIframeSrc+b)
},idCallNotProcesssed:null,doAttachIframe:!1,startedAttachingIframe:!1,iframeHasLoaded:null,iframeIdChanged:null,newIframeCreated:null,originalIframeHasLoadedAlready:null,regionChanged:!1,timesRegionChanged:0,sendingMessages:!1,messages:[],messagesPosted:[],messagesReceived:[],messageSendingInterval:r?null:100,jsonForComparison:[],jsonDuplicates:[],jsonWaiting:[],jsonProcessed:[],canSetThirdPartyCookies:!0,receivedThirdPartyCookiesNotification:!1,readyToAttachIframe:function(){return !a.idSyncDisable3rdPartySyncing&&(this.doAttachIframe||a._doAttachIframe)&&(this.subdomain&&"nosubdomainreturned"!==this.subdomain||a._subdomain)&&this.url&&!this.startedAttachingIframe
},attachIframe:function(){function a(){e=document.createElement("iframe");
e.sandbox="allow-scripts allow-same-origin";
e.title="Adobe ID Syncing iFrame";
e.id=c.id;
e.name=c.id+"_name";
e.style.cssText="display: none; width: 0; height: 0;";
e.src=c.url;
c.newIframeCreated=!0;
b();
document.body.appendChild(e)
}function b(){B.addListener(e,"load",function(){e.className="aamIframeLoaded";
c.iframeHasLoaded=!0;
c.requestToProcess()
})
}this.startedAttachingIframe=!0;
var c=this,e=document.getElementById(this.id);
e?"IFRAME"!==e.nodeName?(this.id+="_2",this.iframeIdChanged=!0,a()):(this.newIframeCreated=!1,"aamIframeLoaded"!==e.className?(this.originalIframeHasLoadedAlready=!1,b()):(this.originalIframeHasLoadedAlready=!0,this.iframeHasLoaded=!0,this.iframe=e,this.requestToProcess())):a();
this.iframe=e
},requestToProcess:function(b){function d(){e.jsonForComparison.push(b);
e.jsonWaiting.push(b);
e.processSyncOnPage(b)
}var c,e=this;
if(b===Object(b)&&b.ibs){if(J){if(c=JSON.stringify(b.ibs||[]),this.jsonForComparison.length){var g,k,f=!1;
var h=0;
for(g=this.jsonForComparison.length;
h<g;
h++){if(k=this.jsonForComparison[h],c===JSON.stringify(k.ibs||[])){f=!0;
break
}}f?this.jsonDuplicates.push(b):d()
}else{d()
}}else{d()
}}(this.receivedThirdPartyCookiesNotification||!r||this.iframeHasLoaded)&&this.jsonWaiting.length&&(c=this.jsonWaiting.shift(),this.process(c),this.requestToProcess());
!a.idSyncDisableSyncs&&this.iframeHasLoaded&&this.messages.length&&!this.sendingMessages&&(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout(function(){e.messageSendingInterval=r?null:150
},this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())
},getRegionAndCheckIfChanged:function(b,c){var d=a._getField("MCAAMLH");
b=b.d_region||b.dcs_region;
return d?b&&(a._setFieldExpire("MCAAMLH",c),a._setField("MCAAMLH",b),parseInt(d,10)!==b&&(this.regionChanged=!0,this.timesRegionChanged++,a._setField("MCSYNCSOP",""),a._setField("MCSYNCS",""),d=b)):(d=b)&&(a._setFieldExpire("MCAAMLH",c),a._setField("MCAAMLH",d)),d||(d=""),d
},processSyncOnPage:function(a){var b,d;
if((b=a.ibs)&&b instanceof Array&&(d=b.length)){for(a=0;
a<d;
a++){var c=b[a];
c.syncOnPage&&this.checkFirstPartyCookie(c,"","syncOnPage")
}}},process:function(a){var b,d,c,e=encodeURIComponent,g=!1;
if((b=a.ibs)&&b instanceof Array&&(d=b.length)){for(g=!0,c=0;
c<d;
c++){var k=b[c];
var f=[e("ibs"),e(k.id||""),e(k.tag||""),B.encodeAndBuildRequest(k.url||[],","),e(k.ttl||""),"","",k.fireURLSync?"true":"false"];
k.syncOnPage||(this.canSetThirdPartyCookies?this.addMessage(f.join("|")):k.fireURLSync&&this.checkFirstPartyCookie(k,f.join("|")))
}}g&&this.jsonProcessed.push(a)
},checkFirstPartyCookie:function(b,c,e){var d=(e="syncOnPage"===e)?"MCSYNCSOP":"MCSYNCS";
a._readVisitor();
var g,k,m=a._getField(d),f=!1,h=!1,n=Math.ceil((new Date).getTime()/86400000);
m?(g=m.split("*"),k=this.pruneSyncData(g,b.id,n),f=k.dataPresent,h=k.dataValid,f&&h||this.fireSync(e,b,c,g,d,n)):(g=[],this.fireSync(e,b,c,g,d,n))
},pruneSyncData:function(a,b,c){var d,e=!1,g=!1;
for(d=0;
d<a.length;
d++){var k=a[d];
var f=parseInt(k.split("-")[1],10);
k.match("^"+b+"-")?(e=!0,c<f?g=!0:(a.splice(d,1),d--)):c>=f&&(a.splice(d,1),d--)
}return{dataPresent:e,dataValid:g}
},manageSyncsSize:function(a){if(a.join("*").length>this.MAX_SYNCS_LENGTH){for(a.sort(function(a,b){return parseInt(a.split("-")[1],10)-parseInt(b.split("-")[1],10)
});
a.join("*").length>this.MAX_SYNCS_LENGTH;
){a.shift()
}}},fireSync:function(b,c,e,g,k,f){var d=this;
if(b){if("img"===c.tag){var m=c.url,h=a.loadSSL?"https:":"http:";
b=0;
for(e=m.length;
b<e;
b++){g=m[b];
var n=/^\/\//.test(g);
var l=new Image;
B.addListener(l,"load",function(b,c,e,g){return function(){d.onPagePixels[b]=null;
a._readVisitor();
var f=a._getField(k);
var m=[];
if(f){f=f.split("*");
var h;
var n=0;
for(h=f.length;
n<h;
n++){var l=f[n];
l.match("^"+c.id+"-")||m.push(l)
}}d.setSyncTrackingData(m,c,e,g)
}
}(this.onPagePixels.length,c,k,f));
l.src=(n?h:"")+g;
this.onPagePixels.push(l)
}}}else{this.addMessage(e),this.setSyncTrackingData(g,c,k,f)
}},addMessage:function(b){var d=encodeURIComponent(a._enableErrorReporting?"---destpub-debug---":"---destpub---");
this.messages.push((r?"":d)+b)
},setSyncTrackingData:function(b,c,e,g){b.push(c.id+"-"+(g+Math.ceil(c.ttl/60/24)));
this.manageSyncsSize(b);
a._setField(e,b.join("*"))
},sendMessages:function(){var a,b=this,c="",e=encodeURIComponent;
this.regionChanged&&(c=e("---destpub-clear-dextp---"),this.regionChanged=!1);
this.messages.length?r?(a=c+e("---destpub-combined---")+this.messages.join("%01"),this.postMessage(a),this.messages=[],this.sendingMessages=!1):(a=this.messages.shift(),this.postMessage(c+a),setTimeout(function(){b.sendMessages()
},this.messageSendingInterval)):this.sendingMessages=!1
},postMessage:function(b){a._xd.postMessage(b,this.url,this.iframe.contentWindow);
this.messagesPosted.push(b)
},receiveMessage:function(a){var b,d=/^---destpub-to-parent---/;
"string"==typeof a&&d.test(a)&&(b=a.replace(d,"").split("|"),"canSetThirdPartyCookies"===b[0]&&(this.canSetThirdPartyCookies="true"===b[1],this.receivedThirdPartyCookiesNotification=!0,this.requestToProcess()),this.messagesReceived.push(a))
},processIDCallData:function(b){(null==this.url||b.subdomain&&"nosubdomainreturned"===this.subdomain)&&("string"==typeof a._subdomain&&a._subdomain.length?this.subdomain=a._subdomain:this.subdomain=b.subdomain||"",this.url=this.getUrl());
b.ibs instanceof Array&&b.ibs.length&&(this.doAttachIframe=!0);
this.readyToAttachIframe()&&(a.idSyncAttachIframeOnWindowLoad?(w.windowLoaded||"complete"===u.readyState||"loaded"===u.readyState)&&this.attachIframe():this.attachIframeASAP());
"function"==typeof a.idSyncIDCallResult?a.idSyncIDCallResult(b):this.requestToProcess(b);
"function"==typeof a.idSyncAfterIDCallResult&&a.idSyncAfterIDCallResult(b)
},canMakeSyncIDCall:function(b,c){return a._forceSyncIDCall||!b||1<c-b
},attachIframeASAP:function(){function a(){b.startedAttachingIframe||(document.body?b.attachIframe():setTimeout(a,30))
}var b=this;
a()
}};
a._destinationPublishing=G;
a.timeoutMetricsLog=[];
var N={isClientSideMarketingCloudVisitorID:null,MCIDCallTimedOut:null,AnalyticsIDCallTimedOut:null,AAMIDCallTimedOut:null,fieldGroupObj:{},setState:function(a,b){switch(a){case"MC":!1===b?!0!==this.MCIDCallTimedOut&&(this.MCIDCallTimedOut=!1):this.MCIDCallTimedOut=b;
break;
case"A":!1===b?!0!==this.AnalyticsIDCallTimedOut&&(this.AnalyticsIDCallTimedOut=!1):this.AnalyticsIDCallTimedOut=b;
break;
case"AAM":!1===b?!0!==this.AAMIDCallTimedOut&&(this.AAMIDCallTimedOut=!1):this.AAMIDCallTimedOut=b
}}};
a.isClientSideMarketingCloudVisitorID=function(){return N.isClientSideMarketingCloudVisitorID
};
a.MCIDCallTimedOut=function(){return N.MCIDCallTimedOut
};
a.AnalyticsIDCallTimedOut=function(){return N.AnalyticsIDCallTimedOut
};
a.AAMIDCallTimedOut=function(){return N.AAMIDCallTimedOut
};
a.idSyncGetOnPageSyncInfo=function(){return a._readVisitor(),a._getField("MCSYNCSOP")
};
a.idSyncByURL=function(b){var c=b||{};
var d=c.minutesToLive,e="";
c=(a.idSyncDisableSyncs&&(e=e||"Error: id syncs have been disabled"),"string"==typeof c.dpid&&c.dpid.length||(e=e||"Error: config.dpid is empty"),"string"==typeof c.url&&c.url.length||(e=e||"Error: config.url is empty"),void 0===d?d=20160:(d=parseInt(d,10),(isNaN(d)||0>=d)&&(e=e||"Error: config.minutesToLive needs to be a positive number")),{error:e,ttl:d});
if(c.error){return c.error
}var g,k;
d=b.url;
e=encodeURIComponent;
var f=G;
return d=d.replace(/^https:/,"").replace(/^http:/,""),g=B.encodeAndBuildRequest(["",b.dpid,b.dpuuid||""],","),k=["ibs",e(b.dpid),"img",e(d),c.ttl,"",g],f.addMessage(k.join("|")),f.requestToProcess(),"Successfully queued"
};
a.idSyncByDataSource=function(b){return b===Object(b)&&"string"==typeof b.dpuuid&&b.dpuuid.length?(b.url="//dpm.demdex.net/ibs:dpid\x3d"+b.dpid+"\x26dpuuid\x3d"+b.dpuuid,a.idSyncByURL(b)):"Error: config or config.dpuuid is empty"
};
a._compareVersions=function(a,b){if(a===b){return 0
}a=a.toString().split(".");
b=b.toString().split(".");
a:{var c=a.concat(b);
for(var d=0,e=c.length;
d<e;
d++){if(!D.test(c[d])){c=!1;
break a
}}c=!0
}if(c){for(;
a.length<b.length;
){a.push("0")
}for(;
b.length<a.length;
){b.push("0")
}a:{for(c=0;
c<a.length;
c++){d=parseInt(a[c],10);
e=parseInt(b[c],10);
if(d>e){a=1;
break a
}if(e>d){a=-1;
break a
}}a=0
}}else{a=NaN
}return a
};
a._getCookieVersion=function(b){b=b||a.cookieRead(a.cookieName);
return(b=K.exec(b))&&1<b.length?b[1]:null
};
a._resetAmcvCookie=function(b){var c=a._getCookieVersion();
c&&!B.isLessThan(c,b)||B.removeCookie(a.cookieName)
};
a.setAsCoopSafe=function(){P=!0
};
a.setAsCoopUnsafe=function(){P=!1
};
0>e.indexOf("@")&&(e+="@AdobeOrg");
a.marketingCloudOrgID=e;
a.cookieName="AMCV_"+e;
a.sessionCookieName="AMCVS_"+e;
a.cookieDomain=a._getDomain();
a.cookieDomain===l.location.hostname&&(a.cookieDomain="");
a.loadSSL=0<=l.location.protocol.toLowerCase().indexOf("https");
a.loadTimeout=30000;
a.CORSErrors=[];
a.marketingCloudServer=a.audienceManagerServer="dpm.demdex.net";
a.sdidParamExpiry=30;
var Q={MCAAMLH:!0};
Q[F]=!0;
var P=null;
if(f&&"object"==typeof f){for(var v in f){!Object.prototype[v]&&(a[v]=f[v])
}a.idSyncContainerID=a.idSyncContainerID||0;
P="boolean"==typeof a.isCoopSafe?a.isCoopSafe:B.parseBoolean(a.isCoopSafe);
a.resetBeforeVersion&&a._resetAmcvCookie(a.resetBeforeVersion);
a._attemptToPopulateIdsFromUrl();
a._attemptToPopulateSdidFromUrl();
a._readVisitor();
f=a._getField("MCIDTS");
L=Math.ceil((new Date).getTime()/86400000);
!a.idSyncDisableSyncs&&G.canMakeSyncIDCall(f,L)&&(a._setFieldExpire(F,-1),a._setField("MCIDTS",L));
a.getMarketingCloudVisitorID();
a.getAudienceManagerLocationHint();
a.getAudienceManagerBlob();
a._mergeServerState(a.serverState)
}else{a._attemptToPopulateIdsFromUrl(),a._attemptToPopulateSdidFromUrl()
}if(!a.idSyncDisableSyncs){G.checkDPIframeSrc();
B.addListener(l,"load",function(){w.windowLoaded=!0;
var a=G;
a.readyToAttachIframe()&&a.attachIframe()
});
try{a._xd.receiveMessage(function(a){G.receiveMessage(a.data)
},G.iframeHost)
}catch(d){}}a.whitelistIframeDomains&&r&&(a.whitelistIframeDomains=a.whitelistIframeDomains instanceof Array?a.whitelistIframeDomains:[a.whitelistIframeDomains],a.whitelistIframeDomains.forEach(function(b){var c=new g(e,b);
c=q(a,c);
a._xd.receiveMessage(c,b)
}))
};
n.getInstance=function(e,g){if(!e){throw Error("Visitor requires Adobe Marketing Cloud Org ID")
}0>e.indexOf("@")&&(e+="@AdobeOrg");
var k;
a:{if(k=c.s_c_il){for(var f=0;
f<k.length;
f++){var b=k[f];
if(b&&"Visitor"===b._c&&b.marketingCloudOrgID===e){k=b;
break a
}}}k=void 0
}if(k){return k
}k=new n(e);
f=k.isAllowed();
c.s_c_il.splice(--c.s_c_in,1);
try{var a=c.self!==c.parent
}catch(M){a=!0
}return a&&!f&&c.parent?new l(e,g,k,c.parent):new n(e,g)
};
(function(){function e(){n.windowLoaded=!0
}c.addEventListener?c.addEventListener("load",e):c.attachEvent&&c.attachEvent("onload",e);
n.codeLoadEnd=(new Date).getTime()
})();
c.Visitor=n;
f.exports=n
}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})
},{"./ChildVisitor":1,"./Message":2,"./utils/asyncParallelApply":8,"./utils/makeChildMessageListener":10}],4:[function(h,f,c){c.MESSAGES={HANDSHAKE:"HANDSHAKE",GETSTATE:"GETSTATE",PARENTSTATE:"PARENTSTATE"};
c.STATE_KEYS_MAP={MCMID:"MCMID",MCAID:"MCAID",MCAAMB:"MCAAMB",MCAAMLH:"MCAAMLH",MCOPTOUT:"MCOPTOUT",CUSTOMERIDS:"CUSTOMERIDS"};
c.ASYNC_API_MAP={MCMID:"getMarketingCloudVisitorID",MCAID:"getAnalyticsVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"getOptOut"};
c.SYNC_API_MAP={CUSTOMERIDS:"getCustomerIDs"};
c.ALL_APIS={MCMID:"getMarketingCloudVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"getOptOut",MCAID:"getAnalyticsVisitorID",CUSTOMERIDS:"getCustomerIDs"};
c.FIELDGROUP_TO_FIELD={MC:"MCMID",A:"MCAID",AAM:"MCAAMB"}
},{}],5:[function(h,f,c){var l=h("../enums").STATE_KEYS_MAP;
f.exports=function(c){function g(){}function f(g,f){var e=this;
return function(){var g=c(0,l.MCMID),k={};
return k[l.MCMID]=g,e.setStateAndPublish(k),f(g),g
}
}this.getMarketingCloudVisitorID=function(c){c=c||g;
var k=this.findField(l.MCMID,c);
c=f.call(this,l.MCMID,c);
return void 0!==k?k:c()
}
}
},{"../enums":4}],6:[function(h,f,c){var l=h("../enums").ASYNC_API_MAP;
f.exports=function(){Object.keys(l).forEach(function(c){this[l[c]]=function(g){this.callbackRegistry.add(c,g)
}
},this)
}
},{"../enums":4}],7:[function(h,f,c){h=h("../enums");
var l=h.MESSAGES,u=h.ASYNC_API_MAP,g=h.SYNC_API_MAP;
f.exports=function(){function c(){}function k(c,e){var g=this;
return function(){return g.callbackRegistry.add(c,e),g.messageParent(l.GETSTATE),""
}
}Object.keys(u).forEach(function(g){this[u[g]]=function(e){e=e||c;
var f=this.findField(g,e);
e=k.call(this,g,e);
return void 0!==f?f:e()
}
},this);
Object.keys(g).forEach(function(k){this[g[k]]=function(){return this.findField(k,c)||{}
}
},this)
}
},{"../enums":4}],8:[function(h,f,c){f.exports=function(c,f){function g(c){return function(e){h[c]=e;
k++;
k===n&&f(h)
}
}var h={},k=0,n=Object.keys(c).length;
Object.keys(c).forEach(function(e){var k=c[e];
if(k.fn){var f=k.args||[];
f.unshift(g(e));
k.fn.apply(k.context||null,f)
}})
}
},{}],9:[function(h,f,c){var l=h("./utils");
f.exports=function(){return{callbacks:{},add:function(c,g){this.callbacks[c]=this.callbacks[c]||[];
var f=this.callbacks[c].push(g)-1;
return function(){this.callbacks[c].splice(f,1)
}
},execute:function(c,g){if(this.callbacks[c]){g=void 0===g?[]:g;
g=g instanceof Array?g:[g];
try{for(;
this.callbacks[c].length;
){var f=this.callbacks[c].shift();
"function"==typeof f?f.apply(null,g):f instanceof Array&&f[1].apply(f[0],g)
}delete this.callbacks[c]
}catch(k){}}},executeAll:function(c,g){(g||c&&!l.isObjectEmpty(c))&&Object.keys(this.callbacks).forEach(function(g){this.execute(g,void 0!==c[g]?c[g]:"")
},this)
},hasCallbacks:function(){return !!Object.keys(this.callbacks).length
}}
}
},{"./utils":12}],10:[function(h,f,c){c=h("../enums");
var l=h("./utils"),u=c.MESSAGES,g=c.ALL_APIS,w=c.ASYNC_API_MAP,k=c.FIELDGROUP_TO_FIELD;
f.exports=function(c,e){function f(){var a={};
return Object.keys(g).forEach(function(b){var e=c[g[b]]();
l.isValueEmpty(e)||(a[b]=e)
}),a
}function h(){var a=[];
return c._loading&&Object.keys(c._loading).forEach(function(b){c._loading[b]&&a.push(k[b])
}),a.length?a:null
}function n(a){return function da(b){if(b=h()){c[w[b[0]]](da,!0)
}else{a()
}}
}function b(a){q(a);
var b=u.HANDSHAKE,c=f();
e.send(a,b,c)
}function a(a){n(function(){var b=u.PARENTSTATE,c=f();
e.send(a,b,c)
})()
}function q(a){var b=c.setCustomerIDs;
c.setCustomerIDs=function(g){b.call(c,g);
e.send(a,u.PARENTSTATE,{CUSTOMERIDS:c.getCustomerIDs()})
}
}return function(c){e.isInvalid(c)||(e.parse(c).prefix===u.HANDSHAKE?b:a)(c.source)
}
}
},{"../enums":4,"./utils":12}],11:[function(h,f,c){Object.keys=Object.keys||function(c){var f=[],g;
for(g in c){f.hasOwnProperty.call(c,g)&&f.push(g)
}return f
};
Array.prototype.forEach=Array.prototype.forEach||function(c,f){for(var g=0,h=this.length;
g<h;
g++){c.call(f,this[g],g,this)
}};
Object.assign=Object.assign||function(c){for(var f,g,h=1;
h<arguments.length;
++h){for(f in g=arguments[h],g){Object.prototype.hasOwnProperty.call(g,f)&&(c[f]=g[f])
}}return c
}
},{}],12:[function(h,f,c){c.isObjectEmpty=function(c){return c===Object(c)&&0===Object.keys(c).length
};
c.isValueEmpty=function(f){return""===f||c.isObjectEmpty(f)
}
},{}]},{},[1,2,3,4]);
Visitor.getInstance("434717FE52A6476F0A490D4C@AdobeOrg",{trackingServer:"ig.ig.com",trackingServerSecure:"sig.ig.com"});
var x=function(){function h(){var c;
for(c in this.cookiesToListen){if(this.cookiesToListen.hasOwnProperty(c)){this.get(c);
var f=this.get(c)||this.NULL_UNIQUE_KEY;
if(this.cookieRegistry[c]){if(f!==this.cookieRegistry[c]){if(this.cookieRegistry[c]=f,f===this.NULL_UNIQUE_KEY){this.cookiesToListen[c](null)
}else{this.cookiesToListen[c](f)
}}}else{this.cookieRegistry[c]=f
}}}}var f=function(){this.listenerInterval;
this.cookiesToListen={};
this.cookieRegistry={};
this.NULL_UNIQUE_KEY="_-+*\x3dNuLL\x3d*+-_"
};
f.prototype.set=function(c,f,h,g){var l="",k=g?";domain\x3d.ig.com":"";
h&&(l=new Date,l.setTime(l.getTime()+86400000*h),l="; expires\x3d"+l.toGMTString());
document.cookie=c+"\x3d"+(f+l+k)+"; path\x3d/";
"undefined"!==typeof window.dlog&&window.dlog&&window.dlog("Cookie: setting cookie with value: "+c+"\x3d "+(f+l+k)+"; path\x3d/ from: ",arguments)
};
f.prototype.get=function(c){c+="\x3d";
for(var f=document.cookie.split(";"),h=0;
h<f.length;
h+=1){var g=f[h].trim();
if(0===g.indexOf(c)){return g.substring(c.length,g.length)
}}return null
};
f.prototype.eat=function(c,f){this.set(c,"",-1,f)
};
f.prototype.listen=function(c,f,l){this.cookiesToListen[c]=f;
void 0===this.listenerInterval&&(this.listenerInterval=setInterval(h.bind(this),l||3000))
};
f.prototype.removeListener=function(c){this.cookiesToListen.hasOwnProperty(c)&&(delete this.cookiesToListen[c],0===Object.keys(this.cookiesToListen).length&&(clearInterval(this.listenerInterval),this.listenerInterval=void 0))
};
l.util.Cookie=new f;
return l.util.Cookie
}(),D=function(){var h=function(){};
h.getMetaAttrib=function(f,c,h,l){document.querySelectorAll(f).forEach(function(g){if(g.getAttribute(c)===h){return g.getAttribute(l)
}});
return""
};
h.locale=function(){return h.getMetaAttrib("meta","name","locale","content")||"en_GB"
};
h.getMobileAltHref=function(){return h.getMetaAttrib("link","rel","alternate","href")||"false"
};
h.getLocationHref=function(){return document.location.href
};
h.environment=function(){var f=document.location.hostname.split(".")[0];
if("demo"===f||""===f){f="www"
}if("localhost"===f||0===f.indexOf("igpc")||0===f.indexOf("127")){f="local"
}return f
};
h.inAuthor=function(){return !!window.CQ
};
h.getQuerystring=function(f){return(new RegExp("[?\x26]+"+f+"\x3d([^\x26$]*)","gi")).test(h.getLocationHref())?RegExp.$1:""
};
h.dealerEnvironment=function(f){var c=h.environment();
"igcom"===f&&(c="www"===c||"deal"===c?"deal":c+"-deal");
return c
};
h.dealerOpen=function(){var f=document.cookie.match(/dealerOpen=(true)/)||!1;
return f&&"true"===f[1]
};
h.sessionOpen=function(){var f=document.cookie.match(/sessionOpen=(true)/)||!1;
return f&&"true"===f[1]||h.dealerOpen()
};
return l.util.Page=h
}();
(function(){window.log=function(h){for(var f=[],c=0;
c<arguments.length;
++c){f[c-0]=arguments[c]
}-1===(CQURLInfo.runModes||"").indexOf("prod")&&window.console&&console.log(f)
};
window.dlog=function(h){for(var f=[],c=0;
c<arguments.length;
++c){f[c-0]=arguments[c]
}if(-1<(window.location.href.split("?")[1]||"").indexOf("debug")){c=D.getQuerystring("debug").toLowerCase();
var l=encodeURIComponent(f[0].toString().split(":")[0].toLowerCase());
""!==c&&"all"!==c&&c!==l||"undefined"===typeof console||console.log(f)
}};
document.location.href&&-1<document.location.href.indexOf("debug")&&(document.newdocwrite=document.write,document.write=function(h){window.dlog("EVIL: doc write writing ",h);
document.newdocwrite(h)
});
return{log:window.log,dlog:window.dlog}
})();
var K=function(){var h=function(){this.jspVarsValues={}
};
h.prototype.set=function(f){var c=this;
return function(h){f&&(c.jspVarsValues[f]=h)
}
};
h.prototype.get=function(f){return this.jspVarsValues[f]
};
l.util.jspVars=new h;
return l.util.jspVars
}(),Y=function(){var h=function(){};
h.add=function(f,c,h){c=void 0===c?"click":c;
h=void 0===h?function(){}:h;
f=$jscomp.makeIterator("object"===typeof f?[f]:document.querySelectorAll(f));
f=$jscomp.arrayFromIterator(f);
var l=c.split(" ");
f.forEach(function(c){l.forEach(function(g){c.addEventListener(g,h,!1)
})
})
};
h.remove=function(f,c,h){c=void 0===c?"click":c;
h=void 0===h?function(){}:h;
f=$jscomp.makeIterator("object"===typeof f?[f]:document.querySelectorAll(f));
f=$jscomp.arrayFromIterator(f);
var l=c.split(" ");
f.forEach(function(c){l.forEach(function(g){c.removeEventListener(g,h,!1)
})
})
};
h.trigger=function(f,c){c=void 0===c?"click":c;
if("createEvent" in document){f=$jscomp.makeIterator("object"===typeof f?[f]:document.querySelectorAll(f));
f=$jscomp.arrayFromIterator(f);
var h=document.createEvent("HTMLEvents");
h.initEvent(c,!1,!0);
f.forEach(function(c){c.dispatchEvent(h)
})
}};
return l.util.Events=h
}(),R=function(){var h=function(c,f){for(var g=[],h=1;
h<arguments.length;
++h){g[h-1]=arguments[h]
}return c&&c.classList&&c.classList.add.apply(c.classList,[].concat($jscomp.arrayFromIterable(g)))
},f=function(c,f){for(var g=[],h=1;
h<arguments.length;
++h){g[h-1]=arguments[h]
}return c&&c.classList&&c.classList.remove.apply(c.classList,[].concat($jscomp.arrayFromIterable(g)))
},c=function(c,f){return c&&c.classList&&c.classList.toggle(f)
},q=function(c,f){return c&&c.classList&&c.classList.contains(f)
},u=function(c,l,k){return c&&c.classList?(setTimeout(function(){f(c,l)
},k),h(c,l)):!1
};
l.util.addClass=h;
l.util.removeClass=f;
l.util.toggleClass=c;
l.util.hasClass=q;
l.util.addTemporaryClass=u;
return{addClass:h,removeClass:f,toggleClass:c,hasClass:q,addTemporaryClass:u}
}(),ha=function(){function h(c,f,k,h,e,l){c=u(u(f,c),u(h,l));
return u(c<<e|c>>>32-e,k)
}function f(c,f,k,n,e,l,q){return h(f&k|~f&n,c,f,e,l,q)
}function c(c,f,k,n,e,l,q){return h(f&n|k&~n,c,f,e,l,q)
}function q(c,f,k,n,e,l,q){return h(k^(f|~n),c,f,e,l,q)
}function u(c,f){var g=(c&65535)+(f&65535);
return(c>>16)+(f>>16)+(g>>16)<<16|g&65535
}l.util.getMD5=function(g){for(var l=[],k=0;
k<8*g.length;
k+=8){l[k>>5]|=(g.charCodeAt(k/8)&255)<<k%32
}g=8*g.length;
l[g>>5]|=128<<g%32;
l[(g+64>>>9<<4)+14]=g;
g=1732584193;
k=-271733879;
for(var n=-1732584194,e=271733878,r=0;
r<l.length;
r+=16){var z=g,x=k,b=n,a=e;
g=f(g,k,n,e,l[r+0],7,-680876936);
e=f(e,g,k,n,l[r+1],12,-389564586);
n=f(n,e,g,k,l[r+2],17,606105819);
k=f(k,n,e,g,l[r+3],22,-1044525330);
g=f(g,k,n,e,l[r+4],7,-176418897);
e=f(e,g,k,n,l[r+5],12,1200080426);
n=f(n,e,g,k,l[r+6],17,-1473231341);
k=f(k,n,e,g,l[r+7],22,-45705983);
g=f(g,k,n,e,l[r+8],7,1770035416);
e=f(e,g,k,n,l[r+9],12,-1958414417);
n=f(n,e,g,k,l[r+10],17,-42063);
k=f(k,n,e,g,l[r+11],22,-1990404162);
g=f(g,k,n,e,l[r+12],7,1804603682);
e=f(e,g,k,n,l[r+13],12,-40341101);
n=f(n,e,g,k,l[r+14],17,-1502002290);
k=f(k,n,e,g,l[r+15],22,1236535329);
g=c(g,k,n,e,l[r+1],5,-165796510);
e=c(e,g,k,n,l[r+6],9,-1069501632);
n=c(n,e,g,k,l[r+11],14,643717713);
k=c(k,n,e,g,l[r+0],20,-373897302);
g=c(g,k,n,e,l[r+5],5,-701558691);
e=c(e,g,k,n,l[r+10],9,38016083);
n=c(n,e,g,k,l[r+15],14,-660478335);
k=c(k,n,e,g,l[r+4],20,-405537848);
g=c(g,k,n,e,l[r+9],5,568446438);
e=c(e,g,k,n,l[r+14],9,-1019803690);
n=c(n,e,g,k,l[r+3],14,-187363961);
k=c(k,n,e,g,l[r+8],20,1163531501);
g=c(g,k,n,e,l[r+13],5,-1444681467);
e=c(e,g,k,n,l[r+2],9,-51403784);
n=c(n,e,g,k,l[r+7],14,1735328473);
k=c(k,n,e,g,l[r+12],20,-1926607734);
g=h(k^n^e,g,k,l[r+5],4,-378558);
e=h(g^k^n,e,g,l[r+8],11,-2022574463);
n=h(e^g^k,n,e,l[r+11],16,1839030562);
k=h(n^e^g,k,n,l[r+14],23,-35309556);
g=h(k^n^e,g,k,l[r+1],4,-1530992060);
e=h(g^k^n,e,g,l[r+4],11,1272893353);
n=h(e^g^k,n,e,l[r+7],16,-155497632);
k=h(n^e^g,k,n,l[r+10],23,-1094730640);
g=h(k^n^e,g,k,l[r+13],4,681279174);
e=h(g^k^n,e,g,l[r+0],11,-358537222);
n=h(e^g^k,n,e,l[r+3],16,-722521979);
k=h(n^e^g,k,n,l[r+6],23,76029189);
g=h(k^n^e,g,k,l[r+9],4,-640364487);
e=h(g^k^n,e,g,l[r+12],11,-421815835);
n=h(e^g^k,n,e,l[r+15],16,530742520);
k=h(n^e^g,k,n,l[r+2],23,-995338651);
g=q(g,k,n,e,l[r+0],6,-198630844);
e=q(e,g,k,n,l[r+7],10,1126891415);
n=q(n,e,g,k,l[r+14],15,-1416354905);
k=q(k,n,e,g,l[r+5],21,-57434055);
g=q(g,k,n,e,l[r+12],6,1700485571);
e=q(e,g,k,n,l[r+3],10,-1894986606);
n=q(n,e,g,k,l[r+10],15,-1051523);
k=q(k,n,e,g,l[r+1],21,-2054922799);
g=q(g,k,n,e,l[r+8],6,1873313359);
e=q(e,g,k,n,l[r+15],10,-30611744);
n=q(n,e,g,k,l[r+6],15,-1560198380);
k=q(k,n,e,g,l[r+13],21,1309151649);
g=q(g,k,n,e,l[r+4],6,-145523070);
e=q(e,g,k,n,l[r+11],10,-1120210379);
n=q(n,e,g,k,l[r+2],15,718787259);
k=q(k,n,e,g,l[r+9],21,-343485551);
g=u(g,z);
k=u(k,x);
n=u(n,b);
e=u(e,a)
}return g
};
return l.util.getMD5
}(),Z=function(){var h=function(){return null!==document.cookie.match(/inipadapp=(\.*?)/)||-1<window.location.search.indexOf("webappView")
};
l.startup={isInApp:h};
return h
}(),ia=function(){var h=function(f,c,h,l,g,w,k){l=void 0===l?"Anon. Ajax Call":l;
var n=new XMLHttpRequest,e="";
n.open("GET",f,!0);
n.onreadystatechange=function(){4!==n.readyState?window.dlog(l+": AJAX change: ",n.readyState):(window.dlog(l+": received feedback from AJAX call"),window.clearTimeout(q),200===n.status?c(n.responseText):0===n.status&&w&&""===n.statusText?w():(0===e.length&&(e=n.status),h(e)))
};
var q=setTimeout(function(){n&&4!==n.readystate&&(e="timeout",n.abort())
},g);
k&&(n.withCredentials=!0);
window.dlog(l+": making AJAX call for",f);
n.send("")
};
return l.util.ajax=h
}();
(function(){var h=function(f){var c=f&&f.toLowerCase()||window.navigator.userAgent.toLowerCase();
f=-1<c.indexOf("android")&&-1<c.indexOf("mozilla/5.0")&&-1<c.indexOf("applewebkit");
var h=new RegExp(/applewebkit\/([\d.]+)/);
h=null===h.exec(c)?null:parseFloat(h.exec(c)[1]);
var l=new RegExp(/chrome\/([\d.]+)/);
c=null===l.exec(c)?null:parseFloat(l.exec(c)[1]);
return f&&(null!==h&&537>h||null!==c&&29>c)
};
return l.util.isAndroidStockBrowser=h
})();
var ja=function(h){var f=h.match(/(opera|chrome|safari|firefox|msie|trident|edge(?=\/))\/?\s*(\d+)/i)||[];
if(/trident/i.test(f[1])){var c=/\brv[ :]+(\d+)/g.exec(h)||[];
return{name:"IE",version:c[1]||""}
}if("Chrome"===f[1]){c=h.match(/\bOPR\/(\d+)/);
if(null!=c){return{name:"Opera",version:c[1]}
}c=h.match(/(Edge)\/(\d+)/);
if(null!=c){return c=h.match(/(Edge)\/(\d+)/),{name:"Edge",version:c[2]}
}}f=f[2]?[f[1],f[2]]:[window.navigator.appName,window.navigator.appVersion,"-?"];
null!=(c=h.match(/version\/(\d+)/i))&&f.splice(1,1,c[1]);
return{name:f[0],version:f[1]}
},aa=function(){var h=function(){};
h.pageReferrer=function(){var f=document.referrer||"";
void 0!==x.get("savedOldSR")&&(f=x.get("savedOldSR"),x.eat("savedOldSR"));
x.set("savedSR",f);
return f
};
h.storeReferrer=function(){x.set("savedOldSR",h.pageReferrer)
};
h.isBrowserDeprecated=function(f,c){var l=!1,u=K.get("deprecatedBrowsers")||{};
!0===u.hasOwnProperty(f)===!0&&(f=u[f],"*"===f||!0===h.isBrowserVersionDeprecated(c,f))&&(l=!0);
""!==D.getQuerystring("deprecatedbrowser")&&(l=!0);
return l
};
h.isBrowserVersionDeprecated=function(f,c){var h=!1;
f=f.split(".");
var l=c.split(".");
c=Math.min(f.length,l.length);
f=f.splice(0,c);
l=l.splice(0,c);
for(var g=0;
g<c;
g+=1){var w=parseInt(f[g],10);
var k=parseInt(l[g],10);
if(w>k){break
}if(w<k||w===k&&g===c-1){h=!0
}}return h
};
h.isCurrentBrowserDeprecated=function(){var f=h.getCurrentBrowserInfo();
return h.isBrowserDeprecated(f.browser,f.version)
};
h.getCurrentBrowserInfo=function(){var f=ja(window.navigator.userAgent),c=D.getQuerystring("browsercode"),h=D.getQuerystring("browserversion");
if("webkit"===f.browser){f.browser="safari"
}else{if("firefox"===f.browser){f.browser="mozilla"
}else{if("mozilla"===f.browser&&11===Number(f.version)||"edge"===f.browser){f.browser="msie"
}}}""!==c&&(f.browser=c);
""!==h&&(f.version=h);
return f
};
h.shouldBrowserShowDeprecationPopup=function(f,c){var l=h.isBrowserDeprecated(f,c),u=!1,g=D.getQuerystring("showdeprecatedbrowserpopup"),w=K.get("deprecatedBrowsersPopup")||{};
l&&""!==w&&void 0!==w[f]&&(u=h.isBrowserVersionDeprecated(c,w[f]));
""!==g&&(u=!0);
"false"===g&&(u=!1);
return u
};
h.shouldCurrentBrowserShowDeprecationPopup=function(){var f=h.getCurrentBrowserInfo();
return h.shouldBrowserShowDeprecationPopup(f.browser,f.version)
};
h.isMobileOrTablet=function(f){return/Android|(android|bb\d+|meego).+mobile|avantgo|bada|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|Silk|webOS|windows (ce|phone)/i.test((f||window.navigator.userAgent).toLowerCase())
};
l.util.Browser={pageReferrer:h.pageReferrer(),storeReferrer:h.storeReferrer,isBrowserDeprecated:h.isBrowserDeprecated,isBrowserVersionDeprecated:h.isBrowserVersionDeprecated,isCurrentBrowserDeprecated:h.isCurrentBrowserDeprecated,getCurrentBrowserInfo:h.getCurrentBrowserInfo,shouldBrowserShowDeprecationPopup:h.shouldBrowserShowDeprecationPopup,shouldCurrentBrowserShowDeprecationPopup:h.shouldCurrentBrowserShowDeprecationPopup,isMobileOrTablet:h.isMobileOrTablet};
return h
}(),V=function(){l.startup=l.startup||{};
l.info=l.info||{};
var h={segments:{loggedIn:"ig_loggedIn",client:"ig_client",demoClient:"ig_demoClient",prospect:"ig_prospect"},getCurrentSegment:function(){return h.isLoggedIn?h.segments.loggedIn:h.isDemoClient?h.segments.demoClient:h.isClient?h.segments.client:h.segments.prospect
},isLoggedIn:!1,isClient:!1,isDemoClient:!1,isProspect:!0};
h.options=[{text:"Logged in user",value:h.segments.loggedIn},{text:"Client",value:h.segments.client},{text:"Demo client",value:h.segments.demoClient},{text:"Prospect",value:h.segments.prospect}];
var f=function(){h.isClient=!1;
h.isDemoClient=!1;
h.isLoggedIn=!1;
h.isProspect=!0;
h.isLoggedIn=D.sessionOpen();
var c=x.get("ID");
c&&(0<=c.indexOf("A\x3d1")||0<=c.indexOf(":CS\x3d"))&&(0>c.indexOf("demo-account")?h.isClient=!0:h.isDemoClient=!0)
},c=function(){f();
return h.getCurrentSegment()
},q=function(c,e){var b="",a=-1<window.location.href.indexOf("iggroup.local");
e&&(b=window.location.search);
c&&!a&&window.location.pathname!==c&&(aa.storeReferrer&&aa.storeReferrer(),window.location=c+b)
},u=function(){var c=x.get("user_ts");
c||(c=Math.floor(10000000000000*Math.random()),x.set("user_ts",c));
c=ha(c.toString());
return parseFloat(c)/4294967296+0.5
},g=function(c){if(c){var e=x.get("user_sgm"),b=!1;
if(e){for(var a=e.split(","),f=0;
f<a.length;
f+=1){a[f]===c&&(b=!0)
}}b||(e=e?e+(","+c):c);
x.set("user_sgm",e)
}},w=function(e){if(void 0===e){return !1
}for(var f=[],b=c(),a=0,k=0;
k<e.length;
k+=1){var h=e[k];
h.segment===b&&(a+=h.percentage,f.push(h))
}if(0<a){for(b=e=0;
b<f.length;
b+=1){if(e+=f[b].percentage/a,u()<=e){return g(f[b].name),q(f[b].redirectPath,!0),!0
}}}return !1
},k=function(){f();
return h.isClient
},n=function(){f();
return h.isDemoClient
},e=function(){f();
return h.isLoggedIn
},r=function(){f();
return h.isProspect
};
l.info.user=h;
l.startup.updateUserSegment=f;
l.startup.redirectUserToURL=q;
l.startup.generateHashNumber=u;
l.startup.redirectUser=w;
l.startup.isClient=k;
l.startup.isDemoClient=n;
l.startup.isLoggedIn=e;
l.startup.isProspect=r;
l.startup.getUserSegment=c;
l.util.addUserSegment=g;
return{user:h,updateUserSegment:f,redirectUserToURL:q,generateHashNumber:u,redirectUser:w,addUserSegment:g,isClient:k,isDemoClient:n,isLoggedIn:e,isProspect:r,getUserSegment:c}
}(),ka=function(){function h(){"local"===this.environment&&(window.dlog("User Auth: local environment detected"),-1<window.location.search.indexOf("fSession")&&(x.set(f.SESSION_OPEN_COOKIE,"true",1),-1<window.location.search.indexOf("fDealer")&&x.set(f.DEALER_OPEN_COOKIE,"true",1)))
}var f={CST:"CST",DEALER_OPEN_COOKIE:"dealerOpen",FORCE_LOG_OUT:"force-log-out",INVESTMENT_CLIENT_COOKIE:"INVESTMENT-CLIENT",LOGGED_IN_CLASS:"logged-in",SESSION_OPEN_COOKIE:"sessionOpen",fetchingResults:{ERROR:"error",SUCCESS:"success",NOT_REQUESTED:"not requested"}},c={clientId:"F4k3C713Nt"},q=function(){h();
this.environment=D.environment();
this.fetchingResult=f.fetchingResults.NOT_REQUESTED
};
q.prototype.init=function(){window.dlog("User Auth: performing initial setup");
var c=document.getElementsByTagName("html")[0];
c=R.hasClass(c,f.FORCE_LOG_OUT);
var g=x.get(f.CST),h=D.sessionOpen();
c||Z()||h&&!g?(window.dlog("User Auth: forced log out"),this.logOut()):h?(window.dlog("User Auth: sessionOpen cookie found, user has used login form, starting authentication"),this.setupButtons("show"),this.fetchDetails(this.ajaxResponse.bind(this))):window.dlog("User Auth: sessionOpen cookie missing and no userDetails stored, authentication cancelled")
};
q.prototype.logOut=function(){this.fetchingResult=f.fetchingResults.ERROR;
window.dlog("User Auth: logging out, eating cookies, hiding button and updating user segment");
x.eat(f.SESSION_OPEN_COOKIE,"true");
x.eat(f.DEALER_OPEN_COOKIE);
x.eat(f.INVESTMENT_CLIENT_COOKIE,"true");
this.setupButtons("hide");
V.updateUserSegment()
};
q.prototype.fetchDetails=function(h){if(this.fetchingResult===f.fetchingResults.SUCCESS){h(this.fetchedData)
}else{if(this.fetchingResult===f.fetchingResults.ERROR){this.logOut()
}else{var g=K.get("loggedin.authTimeOut"),l="local"===this.environment?"net":this.environment;
"www"===l&&"DEMO"===x.get("IG-ENVIRONMENT")&&(l="demo");
var k=K.get("loggedin.authURL")||"";
0===k.indexOf("/")?k="https://"+l+".ig.com"+k+"?"+(new Date).getTime():0===k.indexOf("http:")&&(k=k.replace("http:","https:"));
"local"===this.environment&&D.sessionOpen()?(window.dlog("User Auth: spoofing a response from ajax call"),this.ajaxResponse(c)):(window.dlog("User Auth: calling ajax service with URL:",k),ia(k,h,this.logOut.bind(this),"User Auth",g,function(){return window.dlog("User Auth: Request cancelled, prevent logout from happening")
},!0))
}}};
q.prototype.setupButtons=function(c){var g=document.getElementsByTagName("html")[0];
switch(c){case"show":window.dlog("User Auth: buttons shown, adding events to document");
R.addClass(g,f.LOGGED_IN_CLASS);
Y.remove(".account-logout","click",this.logoutEventHandler.bind(this));
Y.add(".account-logout","click",this.logoutEventHandler.bind(this));
l.util.ReplaceLoginLinks&&l.util.ReplaceLoginLinks.selectorsLoaded&&l.util.ReplaceLoginLinks.myIgitems();
break;
case"hide":window.dlog("User Auth: buttons hidden");
R.removeClass(g,f.LOGGED_IN_CLASS);
break;
default:window.dlog("User Auth: Buttons setup called without supported parameter")
}};
q.prototype.ajaxResponse=function(c){this.fetchingResult=f.fetchingResults.SUCCESS;
var g=this.fetchedData=c;
if("string"===typeof c){try{g=JSON.parse(c)
}catch(w){g=!1
}}g&&"object"===typeof g?(window.dlog("User Auth: received:",c),this.setupButtons("show")):(window.dlog("User Auth: Wrong or no data received from the validation service. Forcing logout."),this.logOut())
};
q.prototype.logoutEventHandler=function(c){D.sessionOpen()||(c.preventDefault(),document.location.reload());
window.PS.MyIG&&window.PS.MyIG.authenticatorLibraryLoaded?window.PS.MyIG.logout():(window.dlog("LOGOUT. Library not loaded"),this.logOut())
};
l.startup.authenticateUser=new q;
return l.startup.authenticateUser
}(),la=function(){window.analytics=window.analytics||{};
var h=function(){};
h.init=function(){window.analytics.s_account=K.get("analytics.s_account");
window.analytics.page_title=K.get("analytics.page_title");
window.analytics.cq_page_name=K.get("analytics.cq_page_name");
window.analytics.path=K.get("analytics.path");
window.analytics.content_tags=K.get("contentMetatags")
};
return h
}(),ma=function(){l.startup.appendSmartBanner=function(h){h=void 0===h?window.navigator.userAgent:h;
var f=document.getElementsByTagName("head")[0],c=document.createElement("meta");
l.util.jspVars.get("applebanner.disable")||(/(iPad).*AppleWebKit.*Mobile.*Safari/.test(h)?(c.name="apple-itunes-app",c.content="app-id\x3d"+l.util.jspVars.get("applebanner.ipad"),f.appendChild(c)):/(iPhone|iPod).*AppleWebKit.*Mobile.*Safari/.test(h)&&(c.name="apple-itunes-app",c.content="app-id\x3d"+l.util.jspVars.get("applebanner.iphone"),f.appendChild(c)))
};
return l.startup.appendSmartBanner
}(),W=function(){function h(){var g=c("qpid"),h=c("qppid")||"",e=30;
var l=!!x.get("salesAttribution")&&-1<x.get("salesAttribution").indexOf("affiliateId");
l="3"===D.getQuerystring("chid")&&l;
!g&&K.get("microsite.qpid")&&(g=K.get("microsite.qpid"),h=K.get("microsite.qppid"));
if(g&&!l){l=g;
""!==h&&(l+=","+h);
if("2338126"===g||"2338125"===g){e=40
}u("qpid",l,e,!0)
}g={};
h=[{key:"s_kwcid",type:"adGroupId",delimiter:"!",section:3},{key:"crid",type:"creativeId"}];
for(e=0;
e<h.length;
e+=1){l=h[e];
var w=c(l.key,l.delimiter,l.section);
w&&(g[l.type]=w,f("referralID"),q(g))
}g=[{name:"referralID",key:"referralID",cookieName:"referralID",duration:30}];
for(h=0;
h<g.length;
h+=1){e=g[h],(l=c(e.key,e.delimiter,e.section))&&u(e.cookieName,l,e.duration,!0)
}g=[{name:"cellexpert",key:"cx_",type:"affiliate",affliateMappings:{affiliateId:"cx_aid",anSessionId:"cx_us",productGroup:"cx_pg",creativeId:"cx_cid"}}];
for(h=0;
h<g.length;
h+=1){w=g[h];
e=void 0;
l=w.key;
w=w.affliateMappings;
var O=!0,b={},a=/(#\w+)/g;
if(-1<D.getLocationHref().indexOf(l)){for(e in w){l=D.getQuerystring(w[e]).replace(a,""),""===l&&(O=!1,window.dlog("tracking: missing affliate parameter: "+e)),b[e]=l
}O&&q(b,!0)
}}}function f(c){for(var f=[],e=0;
e<arguments.length;
++e){f[e-0]=arguments[e]
}e=[];
if(0===f.length){e=["qpid","salesAttribution","referralID"]
}else{for(var g=f.length-1;
0<=g;
--g){var h=f[g];
-1===e.indexOf(h)&&e.push(h)
}}for(f=e.length-1;
0<=f;
--f){x.eat(e[f]),x.eat(e[f],!0)
}}function c(c,f,e){var g=D.getQuerystring(c)||!1;
f&&!e&&(g=!1,window.dlog("tracking: invalid delimiter and section combination for key: "+c+" delimiter: "+f+" section: "+e));
g&&f&&e&&(g=g.split(f)[e]||!1,window.dlog("tracking: invalid section for delimiter for key: "+c+" delimiter: "+f+" section: "+e));
return g
}function q(c,f){c=JSON.stringify(c);
u("salesAttribution",c,null,f);
x.set("saLastSetDate",Date.now())
}function u(c,g,e,h){!0===h&&f();
e||(e=30);
g&&"{}"!==g&&x.set(c,g,e,!0)
}function g(){var c=D.getQuerystring("tid");
""!==c&&x.set("client_id",c,30,!0)
}function w(){var c=D.getQuerystring("bta");
""!==c&&x.set("bta",c,30)
}l.tracking={trackReferrers:h,trackTrackingId:g,trackAffiliateBTAId:w,clearAttribution:f};
return{trackReferrers:h,trackTrackingId:g,trackAffiliateBTAId:w,clearAttribution:f}
}();
(function(){var h=function(){};
h.init=function(){var f=document.getElementsByTagName("html")[0];
R.removeClass(f,"nojs");
Z()&&R.addClass(f,"webapp");
("ontouchstart" in window||window.DocumentTouch&&document instanceof window.DocumentTouch||0<window.navigator.msMaxTouchPoints)&&R.addClass(f,"touch");
(V.isClient()||V.isDemoClient())&&R.addClass(f,"client");
K.get("loggedin.authThisTemplate")?ka.init():window.dlog("User Auth: this template does not change for logged in users");
ma();
la.init();
W.trackReferrers();
W.trackTrackingId();
W.trackAffiliateBTAId()
};
l.util.Initialize=h
})()
})(window.PS);