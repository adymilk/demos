(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],2:[function(require,module,exports){
// simple commonJS cookie reader, best perf according to http://jsperf.com/cookie-parsing
module.exports = function (name) {
    var cookie = document.cookie,
        setPos = cookie.search(new RegExp('\\b' + name + '=')),
        stopPos = cookie.indexOf(';', setPos),
        res;
    if (!~setPos) return null;
    res = decodeURIComponent(cookie.substring(setPos, ~stopPos ? stopPos : undefined).split('=')[1]);
    return (res.charAt(0) === '{') ? JSON.parse(res) : res;
};

},{}],3:[function(require,module,exports){
(function (process){
/*
 * LIGHTSTREAMER - www.lightstreamer.com
 * Lightstreamer JavaScript Client
 * Version 6.1.1 build 1640
 * Copyright (c) 2004-2014 Weswit Srl. All Rights Reserved.
 * Contains: Lightstreamer/LightstreamerClient, Lightstreamer/Subscription
 * Globals
 */
(function(){function define(a,c,e){define.a[a]={e:c,d:e}}define.a={};define.b=function(a,c,e){for(var g=[],f=0;f<a.length;f++){var d=define.a[a[f]];if(!d)throw"All the modules must already be 'defined' Async load not supported: use a full-featured AMD loader like requirejs";d.c||define.b(d.e,d.d,a[f]);g.push(d.c)}a=c.apply(null,g);if(e)define.a[e].c=a};function require(a,c){define.b(a,c,null)};function u(){return function(h){return h}}function E(){return function(){}}function G(h){return function(e){this[h]=e}}function M(h){return function(){return this[h]}}function U(h){return function(){return h}}
define("IllegalStateException",[],function(){function h(e){this.name="IllegalStateException";this.message=e}h.prototype={toString:function(){return["[",this.name,this.message,"]"].join("|")}};return h});
define("Environment",["IllegalStateException"],function(h){var e="undefined"!==typeof window&&navigator&&document,a="undefined"!==typeof importScripts,d="object"==typeof process&&(/node(\.exe)?$/.test(process.execPath)||process.node&&process.v8||process.versions&&process.versions.node&&process.versions.v8);if(e&&!document.getElementById)throw new h("Not supported browser");var c={isBrowserDocument:function(){return e},isBrowser:function(){return!d&&(e||a)},isNodeJS:function(){return!e&&d},isWebWorker:function(){return!e&&
!d&&a},browserDocumentOrDie:function(){if(!this.isBrowserDocument())throw new h("Trying to load a browser-only module on non-browser environment");}};c.isBrowserDocument=c.isBrowserDocument;c.isBrowser=c.isBrowser;c.isNodeJS=c.isNodeJS;c.isWebWorker=c.isWebWorker;c.browserDocumentOrDie=c.browserDocumentOrDie;return c});
define("Helpers",["Environment"],function(h){var e=/^\s*([\s\S]*?)\s*$/,a=/,/,d=/\./,c={getTimeStamp:function(){return(new Date).getTime()},randomG:function(a){return Math.round(Math.random()*(a||1E3))},trim:function(a){return a.replace(e,"$1")},getNumber:function(c,b){if(c){if(!c.replace)return c;b?(c=c.replace(d,""),c=c.replace(a,".")):c=c.replace(a,"");return new Number(c)}return 0},isArray:function(a){return a.join&&"function"==typeof a.join},addEvent:function(a,b,c){if(!h.isBrowserDocument())return!1;
"undefined"!=typeof a.addEventListener?a.addEventListener(b,c,!1):"undefined"!=typeof a.attachEvent&&a.attachEvent("on"+b,c);return!0}};c.getTimeStamp=c.getTimeStamp;c.randomG=c.randomG;c.trim=c.trim;c.getNumber=c.getNumber;c.isArray=c.isArray;c.addEvent=c.addEvent;return c});
define("BrowserDetection",["Environment"],function(h){function e(a){var c=b;return function(){null===c&&(c=-1<f.indexOf(a));return c}}function a(a){var c=b;return function(){if(null===c){c=!0;for(var b=0;b<a.length;b++)c=c&&a[b]()}return c}}function d(a,c){var g=b,f=b;return function(b,d){null===g&&(f=(g=a())?c():null);return g?b&&f?!0===d?f<=b:!1===d?f>=b:f==b:!0:!1}}function c(a){return function(){var b=a.exec(f);return b&&2<=b.length?b[1]:null}}function g(a){return function(){return!a()}}var b=
h.isBrowser()?null:!1,f=h.isBrowser()?navigator.userAgent.toLowerCase():null,k=b;h={isProbablyRekonq:e("rekonq"),isProbablyAWebkit:e("webkit"),isProbablyPlaystation:e("playstation 3"),isProbablyChrome:d(e("chrome/"),c(RegExp("chrome/([0-9]+)","g"))),isProbablyAKhtml:function(){null===k&&(k=document.childNodes&&!document.all&&!navigator.iC&&!navigator.YB);return k},isProbablyKonqueror:d(e("konqueror"),c(RegExp("konqueror/([0-9.]+)","g"))),isProbablyIE:d(e("msie"),c(RegExp("msie\\s([0-9]+)[.;]","g"))),
isProbablyFX:d(e("firefox"),c(/firefox\/(\d+\.?\d*)/)),isProbablyOldOpera:d(function(){return"undefined"!=typeof opera},function(){if(opera.version){var a=opera.version(),a=a.replace(RegExp("[^0-9.]+","g"),"");return parseInt(a)}return 7})};h.isProbablyAndroidBrowser=a([e("android"),h.isProbablyAWebkit,g(h.isProbablyChrome)]);h.isProbablyOperaMobile=a([h.isProbablyOldOpera,e("opera mobi")]);h.isProbablyApple=d(a([e("safari"),function(a){var c=b;return function(){if(null===c){c=!1;for(var b=0;b<a.length;b++)c=
c||a[b]()}return c}}([e("ipad"),e("iphone"),e("ipod"),a([g(h.isProbablyAndroidBrowser),g(h.isProbablyChrome),g(h.isProbablyRekonq)])])]),c(/version\/(\d+\.?\d*)/));h.isProbablyRekonq=h.isProbablyRekonq;h.isProbablyChrome=h.isProbablyChrome;h.isProbablyAWebkit=h.isProbablyAWebkit;h.isProbablyPlaystation=h.isProbablyPlaystation;h.isProbablyAndroidBrowser=h.isProbablyAndroidBrowser;h.isProbablyOperaMobile=h.isProbablyOperaMobile;h.isProbablyApple=h.isProbablyApple;h.isProbablyAKhtml=h.isProbablyAKhtml;
h.isProbablyKonqueror=h.isProbablyKonqueror;h.isProbablyIE=h.isProbablyIE;h.isProbablyFX=h.isProbablyFX;h.isProbablyOldOpera=h.isProbablyOldOpera;return h});
define("List",[],function(){function h(){this.data=[]}h.prototype={add:function(e){this.data.push(e)},remove:function(e){for(var a=0;a<this.data.length;a++)if(this.data[a]==e)return this.data.splice(a,1),!0;return!1},forEach:function(e){for(var a=0;a<this.data.length;a++)e(this.data[a])},asArray:function(){return[].concat(this.data)},clean:function(){this.data=[]}};h.prototype.add=h.prototype.add;h.prototype.remove=h.prototype.remove;h.prototype.forEach=h.prototype.forEach;h.prototype.asArray=h.prototype.asArray;
h.prototype.clean=h.prototype.clean;return h});
define("EnvironmentStatus",["Helpers","BrowserDetection","Environment","List"],function(h,e,a,d){function c(a,b,c,g,f){return function(){a[b]||(a[c]=!0,g.forEach(function(a){try{if(a[f])a[f]();else a()}catch(b){}}),"preunloading"!=b&&g.clean(),a[b]=!0,a[c]=!1)}}function g(a,b){setTimeout(function(){if(a[b])a[b]();else a()},0)}function b(a,b,c,g){setTimeout(function(){c?g?a.apply(c,g):a.apply(c):g?a.apply(null,g):a()},b)}function f(){m=!0}var k=new d,n=new d,l=new d,m=!1,p={ih:"onloadDone",gs:"onloadInprogress",
Lh:"unloaded",xo:"unloading",ps:"preunloading"};d={};for(var q in p)d[p[q]]=q;q={ih:!1,gs:!1,Lh:!1,xo:!1,ps:!1,isLoaded:M("ih"),isUnloaded:M("Lh"),isUnloading:M("xo"),addOnloadHandler:function(a){this.Hx()?n.add(a):g(a,"onloadEvent")},addUnloadHandler:function(a){this.Ix()?k.add(a):g(a,"unloadEvent")},addBeforeUnloadHandler:function(a){l.add(a);this.ps&&g(a,"preUnloadEvent")},removeOnloadHandler:function(a){n.remove(a)},removeUnloadHandler:function(a){k.remove(a)},removeBeforeUnloadHandler:function(a){l.remove(a)},
Hx:function(){return!(this.ih||this.gs)},Ix:function(){return!(this.Lh||this.xo)},qu:function(){h.addEvent(window,"unload",this.Qu);h.addEvent(window,"beforeunload",this.su);if(document&&"undefined"!=typeof document.readyState){if("COMPLETE"==document.readyState.toUpperCase()){this.$h();return}b(this.Kp,1E3,this)}else if(this.br()){this.$h();return}if(!h.addEvent(window,"load",this.Nj))this.$h();else if(e.isProbablyOldOpera()){var a=!1;e.isProbablyOldOpera(9,!1)&&(a=!0,h.addEvent(document,"DOMContentLoaded",
f));b(this.Jp,1E3,this,[a])}},$h:function(){b(this.Nj,0)},Kp:function(){this.ih||("COMPLETE"==document.readyState.toUpperCase()?this.Nj():b(this.Kp,1E3,this))},Jp:function(a){this.ih||(m||!a&&this.br()?this.Nj():b(this.Jp,1E3,this,[a]))},br:function(){return"undefined"!=typeof document.getElementsByTagName&&"undefined"!=typeof document.getElementById&&(null!=document.getElementsByTagName("body")[0]||null!=document.body)}};q.Nj=c(q,d.onloadDone,d.onloadInprogress,n,"onloadEvent");q.Qu=c(q,d.unloaded,
d.unloading,k,"unloadEvent");q.su=c(q,d.preunloading,d.preunloading,l,"preUnloadEvent");a.isBrowserDocument()?q.qu():q.$h();q.addOnloadHandler=q.addOnloadHandler;q.addUnloadHandler=q.addUnloadHandler;q.addBeforeUnloadHandler=q.addBeforeUnloadHandler;q.removeOnloadHandler=q.removeOnloadHandler;q.removeUnloadHandler=q.removeUnloadHandler;q.removeBeforeUnloadHandler=q.removeBeforeUnloadHandler;q.isLoaded=q.isLoaded;q.isUnloaded=q.isUnloaded;q.isUnloading=q.isUnloading;return q});
define("Global",["EnvironmentStatus","Environment"],function(h,e){var a={yt:h,toString:function(){return"[Lightstreamer javascript client version "+this.version+" build "+this.build+"]"},sa:function(a,c,g,b){a=(b||"_")+a;this[a]||(this[a]={});this[a][c]=g;return"Lightstreamer."+a+"."+c},jx:function(a,c,g){a=(g||"_")+a;return this[a]&&this[a][c]},rl:function(a,c,g){a=(g||"_")+a;if(this[a]&&this[a][c]){delete this[a][c];for(var b in this[a])return;delete this[a]}},Iu:function(a,c){var g=(c||"_")+a;
this[g]&&delete this[g]},cj:{},eu:function(a){var c=this.cj,g=a.ff;c[g]||(c[g]=[]);c[g].push(a)},Qz:function(a){var c=a.ff,g=this.cj[c];if(g){for(var b=0;b<g.length;b++)g[b]==a&&g.splice(b,1);0==g.length&&delete g[c]}},Qw:function(a){return this.cj[a]&&(a=this.cj[a])&&0<a.length?a[0]:null}};e.isBrowserDocument()&&(window.RB&&OpenAjax.lx&&OpenAjax.lx.gC("Lightstreamer","http://www.lightstreamer.com/",a.version),window.Lightstreamer=a);a.version="6.1.1";a.build="1640";return a});
define("LoggerProxy",["Helpers"],function(h){function e(a){this.Sn(a)}function a(){return!1}var d={error:a,warn:a,info:a,debug:a,fatal:a,isDebugEnabled:a,isInfoEnabled:a,isWarnEnabled:a,isErrorEnabled:a,isFatalEnabled:a};e.prototype={Sn:function(a){this.Na=a||d},logFatal:function(a){this.Bx()&&(a+=this.qe(arguments,1),this.fatal(a))},fatal:function(a,d){this.Na.fatal(a,d)},Bx:function(){return!this.Na.isFatalEnabled||this.Na.isFatalEnabled()},logError:function(a){this.ar()&&(a+=this.qe(arguments,
1),this.error(a))},logErrorExc:function(a,d){this.ar()&&(d+=this.qe(arguments,2),this.error(d,a))},error:function(a,d){this.Na.error(a,d)},ar:function(){return!this.Na.isErrorEnabled||this.Na.isErrorEnabled()},logWarn:function(a){this.Ux()&&(a+=this.qe(arguments,1),this.warn(a))},warn:function(a,d){this.Na.warn(a,d)},Ux:function(){return!this.Na.isWarnEnabled||this.Na.isWarnEnabled()},logInfo:function(a){this.isInfoLogEnabled()&&(a+=this.qe(arguments,1),this.info(a))},info:function(a,d){this.Na.info(a,
d)},isInfoLogEnabled:function(){return!this.Na.isInfoEnabled||this.Na.isInfoEnabled()},logDebug:function(a){this.isDebugLogEnabled()&&(a+=this.qe(arguments,1),this.debug(a))},debug:function(a,d){this.Na.debug(a,d)},isDebugLogEnabled:function(){return!this.Na.isDebugEnabled||this.Na.isDebugEnabled()},qe:function(a,d){for(var b=" {",f=d?d:0;f<a.length;f++)try{var e=a[f];null===e?b+="NULL":0>e.length?b+="*":null!=e.charAt?b+=e:e.message?(b+=e.message,e.stack&&(b+="\n"+e.stack+"\n")):e[0]==e?b+=e:h.isArray(e)?
(b+="(",b+=this.qe(e),b+=")"):b+=e;b+=" "}catch(n){b+="missing-parameter "}return b+"}"}};e.prototype.debug=e.prototype.debug;e.prototype.isDebugLogEnabled=e.prototype.isDebugLogEnabled;e.prototype.logDebug=e.prototype.logDebug;e.prototype.info=e.prototype.info;e.prototype.isInfoLogEnabled=e.prototype.isInfoLogEnabled;e.prototype.logInfo=e.prototype.logInfo;e.prototype.warn=e.prototype.warn;e.prototype.isWarnEnabled=e.prototype.isWarnEnabled;e.prototype.logWarn=e.prototype.logWarn;e.prototype.error=
e.prototype.error;e.prototype.isErrorEnabled=e.prototype.isErrorEnabled;e.prototype.logError=e.prototype.logError;e.prototype.logErrorExc=e.prototype.logErrorExc;e.prototype.fatal=e.prototype.fatal;e.prototype.isFatalEnabled=e.prototype.isFatalEnabled;e.prototype.logFatal=e.prototype.logFatal;return e});
define("IllegalArgumentException",[],function(){function h(e){this.name="IllegalArgumentException";this.message=e}h.prototype={toString:function(){return["[",this.name,this.message,"]"].join("|")}};return h});
define("LoggerManager",["LoggerProxy","IllegalArgumentException"],function(h,e){var a={},d=null,c={setLoggerProvider:function(c){if(c&&!c.getLogger)throw new e("The given object is not a LoggerProvider");d=c;for(var b in a)d?a[b].Sn(d.getLogger(b)):a[b].Sn(null)},getLoggerProxy:function(c){a[c]||(a[c]=d?new h(d.getLogger(c)):new h);return a[c]},resolve:u()};c.setLoggerProvider=c.setLoggerProvider;c.getLoggerProxy=c.getLoggerProxy;c.resolve=c.resolve;return c});
define("lsA",["Environment"],function(h){return{Qd:1E3,Xo:200,To:1,vc:0,Uo:2,Lo:3,Wo:4,Kk:"1640",Oh:h.isBrowserDocument()?document.location.protocol:"file:",ab:"lightstreamer.stream",Oe:"lightstreamer.protocol",Rd:"lightstreamer.session",ng:"lightstreamer.subscriptions",Jk:"lightstreamer.actions",Oa:"lightstreamer.sharing",So:"lightstreamer.flash",TB:"lightstreamer.stats",Sd:"Lightstreamer_",Ok:"lightstreamer",wc:"UNORDERED_MESSAGES",og:{length:-1,toString:U("[UNCHANGED]")},CONNECTING:"CONNECTING",
Gb:"CONNECTED:",mg:"STREAM-SENSING",Ph:"WS-STREAMING",kg:"HTTP-STREAMING",Qe:"STALLED",qg:"WS-POLLING",Pd:"HTTP-POLLING",$b:"DISCONNECTED",pg:"DISCONNECTED:WILL-RETRY",Sk:"WS",Nh:"HTTP",Qk:"RAW",Mk:"DISTINCT",jg:"COMMAND",Pk:"MERGE"}});
define("lsF",["LoggerManager","Helpers","lsA"],function(h,e,a){function d(b){this.Ea=null;this.Ys(b)}function c(b,f){return"var callFun \x3d "+function(b,f){window.name!=b||(window!=top||window.Lightstreamer&&window.Lightstreamer.yt)||(window.name=f,window.close())}.toString()+"; callFun('"+b+"', '"+f+"');"}function g(b,f,c,a){this.log=b;this.ey=f;this.Dh=c;this.Np=a}var b=0,f=0,k=!1,n=!1,l=h.getLoggerProxy(a.Oa),m=[];d.prototype={Ys:function(b){l.logDebug(h.resolve(3));this.Ea=b;this.Xz()||
this.Ub()},Ub:function(){l.logDebug(h.resolve(4));this.Ea=null;delete m[this.uz]},Xz:function(){try{return this.Ea?!0:!1}catch(b){return!1}},Gh:function(){return this.uB()},uB:function(){l.logDebug(h.resolve(5));var b=1;try{if(null==this.Ea)return b=2,new g("null",b,!1,!0);if(this.Ea.closed)return b=3,this.Ub(),new g("closed",b,!1,!0);if(!this.Ea.Lightstreamer)return b=4,this.Ub(),new g("not global",b,!1,!1);b=5;return new g("OK",b,!0,!1)}catch(f){return this.Ub(),new g("exception "+b+" "+f,6,!1,
!0)}},Om:function(a,g,d){var t=null;try{m[a]&&(t=m[a])}catch(s){t=null}if(t&&(delete m[a],this.rr(t,a,g)))return!0;a:{var t="javascript:"+('eval("'+c(a,a+"__TRASH")+'; ")'),x=null;l.logDebug(h.resolve(1));if(n)t=!1;else{try{var D;if(window.UB){var y=!0;-5>f-b&&(y=!1);window.Jt&&y?(b++,D=d>e.getTimeStamp()?window.Jt(t,a,"height\x3d100,width\x3d100",!0):!1):(k||(k=!0,l.logWarn(h.resolve(0))),b=0,D=null)}else D=d>e.getTimeStamp()?window.open(t,a,"height\x3d100,width\x3d100",!0):!1;x=D}catch(C){l.logDebug(h.resolve(2),
C);t=!1;break a}if(x)try{f++}catch(w){n=!0}t=x}}if(!1===t)return l.logDebug(h.resolve(6)),!1;if(!t)return l.logDebug(h.resolve(7)),!0;l.logDebug(h.resolve(8));this.rr(t,a,g);return!0},rr:function(b,f,a){try{l.logDebug(h.resolve(9));if(b.closed)return l.logDebug(h.resolve(10)),!1;var c=b;if(a){if(b==b.top&&!b.Lightstreamer){l.logDebug(h.resolve(11));try{a=trashName,b.name!=f&&b.name!=a||b.close()}catch(k){l.logDebug(h.resolve(12),k)}return!1}c=b.parent;if(null==c)return l.logDebug(h.resolve(13)),!1}if(!c.Lightstreamer)return l.logDebug(h.resolve(14)),
!1;if(!c.Lightstreamer.yt)return l.logDebug(h.resolve(15)),!1;l.logDebug(h.resolve(16));this.Ea=c;this.uz=f;m[f]=b}catch(g){return l.logDebug(h.resolve(17),g),!1}return!0}};g.prototype.toString=function(){return["[|TestResult",this.log,this.ey,this.Dh,this.Np,"]"].join("|")};d.Kt=g;return d});
define("Executor",["Helpers","EnvironmentStatus","Environment"],function(h,e,a){function d(){}function c(a,b){return a.time===b.time?a.rn-b.rn:a.time-b.time}function g(){s=!1;f()}function b(){q?clearInterval(q):a.isBrowserDocument()&&"undefined"!=typeof postMessage?(d=function(){window.postMessage("Lightstreamer.run",t)},h.addEvent(window,"message",function(a){("Lightstreamer.run"==a.data&&"*"==t||a.origin==t)&&g()},!0)):a.isNodeJS()&&("undefined"!=typeof process&&process.nextTick)&&(d=function(){process.nextTick(g)});
q=setInterval(f,k)}function f(){if(e.Lh)clearInterval(q);else{m=h.getTimeStamp();if(0<l.length){n&&(l.sort(c),n=!1);for(var a;0<l.length&&l[0].time<=m&&!e.Lh;)a=l.shift(),a.kf&&(x.executeTask(a),a.step&&p.push(a))}for(0>=l.length&&(r=0);0<p.length;)a=p.shift(),a.rn=r++,x.addPackedTimedTask(a,a.step,!0)}}var k=50,n=!1,l=[],m=h.getTimeStamp(),p=[],q=null,r=0,t=a.isBrowserDocument()&&"file:"!=document.location.protocol?document.location.protocol+"//"+document.location.hostname+(document.location.port?
":"+document.location.port:""):"*",s=!1,x={toString:function(){return["[|Executor",k,l.length,"]"].join("|")},getQueueLength:function(){return l.length},packTask:function(a,b,c){return{kf:a,Fl:b||null,xe:c||null,rn:r++}},addPackedTimedTask:function(a,b,c){a.step=c?b:null;a.time=m+parseInt(b);if(isNaN(a.time))throw"Executor error time: "+a.time;l.push(a);n=!0},addRepetitiveTask:function(a,b,c,g){return this.addTimedTask(a,b,c,g,!0)},stopRepetitiveTask:function(a){a&&(a.kf=null,a.step=null)},addTimedTask:function(a,
b,c,g,f){a=this.packTask(a,c,g);this.addPackedTimedTask(a,b,f);0!=b||s||(s=!0,d());return a},modifyTaskParam:function(a,b,c){a.xe[b]=c},modifyAllTaskParams:function(a,b){a.xe=b},delayTask:function(a,b){a.time+=b;n=!0},executeTask:function(a,b){try{var c=b||a.xe;a.Fl?c?a.kf.apply(a.Fl,c):a.kf.apply(a.Fl):c?a.kf.apply(null,c):a.kf()}catch(g){}}};a.isWebWorker()?setTimeout(b,1):b();x.getQueueLength=x.getQueueLength;x.packTask=x.packTask;x.addPackedTimedTask=x.addPackedTimedTask;x.addRepetitiveTask=x.addRepetitiveTask;
x.stopRepetitiveTask=x.stopRepetitiveTask;x.addTimedTask=x.addTimedTask;x.modifyTaskParam=x.modifyTaskParam;x.modifyAllTaskParams=x.modifyAllTaskParams;x.delayTask=x.delayTask;x.executeTask=x.executeTask;return x});
define("Inheritance",["IllegalStateException"],function(h){function e(a,c,g){if(c)return g?c.apply(a,g):c.apply(a)}var a={Dt:function(d,c,g,b){for(var f in c.prototype)if(!d.prototype[f])d.prototype[f]=c.prototype[f];else if(b){var e;a:{e=c.prototype;var n=void 0;for(n in e)if(e[f]==e[n]&&f!=n){e=n;break a}e=null}if(e){if(d.prototype[e]&&d.prototype[e]!==d.prototype[f]&&c.prototype[e]!==c.prototype[e])throw new h("Can't solve alias collision, try to minify the classes again ("+e+", "+f+")");d.prototype[e]=
d.prototype[f]}}g||(d.prototype._super_=c,d.prototype._callSuperConstructor=a._callSuperConstructor,d.prototype._callSuperMethod=a._callSuperMethod)},_callSuperMethod:function(a,c,g){return e(this,a.prototype._super_.prototype[c],g)},_callSuperConstructor:function(a,c){e(this,a.prototype._super_,c)}};return a.Dt});
define("CookieManager",["Helpers","Environment"],function(h,e){var a=!1,d={areCookiesEnabled:function(){return a},getAllCookiesAsSingleString:function(){return this.areCookiesEnabled()?document.cookie.toString():null},writeCookie:function(a,g){this.xt(a,g,"")},xt:function(a,g,b){this.areCookiesEnabled()&&(document.cookie=encodeURIComponent(a)+"\x3d"+g+"; "+b+"path\x3d/;")},readCookie:function(a){if(!this.areCookiesEnabled())return null;a=encodeURIComponent(a)+"\x3d";for(var g=this.getAllCookiesAsSingleString(),
g=g.split(";"),b=0;b<g.length;b++)if(g[b]=h.trim(g[b]),0==g[b].indexOf(a))return g[b].substring(a.length,g[b].length);return null},removeCookie:function(a){if(this.areCookiesEnabled()){var g=new Date;g.setTime(g.getTime()-864E5);this.xt(a,"deleting","expires\x3d"+g.toGMTString()+"; ")}},Eu:function(){if(e.isBrowserDocument()&&"file:"!=document.location.protocol){a=!0;var c="LS__cookie_test"+h.randomG();this.writeCookie(c,"testing");var g=this.readCookie(c);if("testing"==g&&(this.removeCookie(c),g=
this.readCookie(c),null==g))return;a=!1}}};d.Eu();d.areCookiesEnabled=d.areCookiesEnabled;d.getAllCookiesAsSingleString=d.getAllCookiesAsSingleString;d.writeCookie=d.writeCookie;d.removeCookie=d.removeCookie;d.readCookie=d.readCookie;return d});
define("lsG",["Environment"],function(h){var e=RegExp("\\.","g"),a=RegExp("-","g"),d={".":!0," ":!0,0:!0};return{dr:function(){return h.isBrowser()?!1===navigator.onLine:!1},um:function(){if(!h.isBrowserDocument())return!0;try{return-1<document.location.host.indexOf("[")?!0:document.domain==document.location.hostname}catch(a){return!1}},$e:function(a){if("undefined"!=typeof a){if(!0===a||!1===a)return!0===a;if(null!=a)return isNaN(a)||""==a?(a||""==a)&&a.toString?a.toString():isNaN(a)?NaN:a:a.charAt&&
a.charAt(0)in d&&a.toString?a.toString():parseFloat(a,10)}return null},qj:function(a){return require.qj?require.qj(a):require(a)},aa:function(a,g){a=a||{};if(g)for(var b in g)a[b]=g[b];return a},Vj:function(c){return c.replace(e,"_").replace(a,"__")},getReverse:function(a){var g={},b;for(b in a)g[a[b]]=b;return g}}});
define("lsAZ",["lsA"],function(h){function e(a,d,c){this.id=a;this.R=d;this.status=c}e.prototype={xb:M("status")};return{Rf:function(a,d){return this.An(d+"_"+a)},MB:function(a,d,c){c=c.join("|");this.write(h.Sd+d+"_"+a,c)},sl:function(a,d){this.clean(h.Sd+d+"_"+a)},Mj:function(a){return this.An(a)},Hz:function(a){a=this.An(a);if(!a)return null;for(var d=[],c=0;c<a.length;c++){var g=a[c].split("_");if(2==g.length){var b=this.Rf(g[1],g[0]);null!=b&&d.push(new e(g[0],g[1],b))}}return d},
Yk:function(a,d,c){a=h.Sd+a;d+=c?"_"+c:"";c=this.Lj(a);if(!c)c="|";else if(-1<c.indexOf("|"+d+"|"))return!1;this.write(a,c+(d+"|"));return!0},rh:function(a,d,c){a=h.Sd+a;d+=c?"_"+c:"";if(c=this.Lj(a))d="|"+d+"|",-1<c.indexOf(d)&&(c=c.replace(d,"|"),"|"==c?this.clean(a):this.write(a,c))},Rv:function(){for(var a=this.keys(),d=[],c=0;c<a.length;c++)0==a[c].indexOf(h.Sd)&&(a[c]=a[c].substring(h.Sd.length),d.push(a[c]));return d},An:function(a){a=h.Sd+a;a=this.Lj(a);if(!a)return null;a=a.split("|");""==
a[0]&&a.shift();""==a[a.length-1]&&a.pop();return 0<a.length?a:null}}});define("lsAa",["lsG","lsAZ"],function(h,e){return h.aa({Lj:function(a){return localStorage.getItem(a)},write:function(a,d){localStorage.setItem(a,d)},clean:function(a){localStorage.removeItem(a)},keys:function(){for(var a=[],d=0;d<localStorage.length;d++)a.push(localStorage.key(d));return a}},e)});
define("lsAX",["CookieManager","lsAZ","lsG","Helpers"],function(h,e,a,d){return a.aa({Lj:function(a){return h.readCookie(a)},write:function(a,g){h.writeCookie(a,g)},clean:function(a){h.removeCookie(a)},keys:function(){for(var a=[],a=h.getAllCookiesAsSingleString().split(";"),g=0;g<a.length;g++)a[g]=d.trim(a[g]),a[g]=a[g].substring(0,a[g].indexOf("\x3d")),a[g]=decodeURIComponent(a[g]);return a}},e)});
define("Dismissable",["Executor"],function(h){function e(){this.initTouches()}e.prototype={clean:E(),initTouches:function(a){this.qo=this.of=0;this.timeout=a||5E3},HB:function(a){a==this.qo&&0>=this.of&&this.clean()},dismiss:function(){this.of--;0>=this.of&&h.addTimedTask(this.HB,this.timeout,this,[this.qo])},touch:function(){this.qo++;0>this.of&&(this.of=0);this.of++}};e.prototype.touch=e.prototype.touch;e.prototype.dismiss=e.prototype.dismiss;e.prototype.clean=e.prototype.clean;e.prototype.initTouches=
e.prototype.initTouches;return e});define("lsAW","lsAa lsAX Executor Dismissable Inheritance lsA Helpers".split(" "),function(h,e,a,d,c,g,b){function f(b){this._callSuperConstructor(f);this.da=b;this.uk=null}var k=[],n=g.Qd+g.Xo,l=6E4;f.prototype={start:function(){this.uk&&a.stopRepetitiveTask(this.uk);this.uk=a.addRepetitiveTask(this.Fp,l,this);a.addTimedTask(this.Fp,0,this)},clean:function(){a.stopRepetitiveTask(this.uk);for(var b=0;b<k.length;b++)if(k[b]==this){k.splice(b,1);break}},
Fp:function(){for(var a=b.getTimeStamp(),f=this.da.Rv(),k=0;k<f.length;k++)0<f[k].indexOf("_")&&this.ld(f[k],null,a);for(k=0;k<f.length;k++)-1>=f[k].indexOf("_")&&this.Fu(f[k])},ld:function(b,a,f){if(!a){a=b.split("_");if(2!=a.length)return!1;b=a[0];a=a[1]}var k=this.da.Rf(a,b);return k?f?f-k[g.vc]>n?(this.da.sl(a,b),!1):!0:!0:!1},Fu:function(b){for(var a=this.da.Mj(b),f=0;f<a.length;f++)0<a[f].indexOf("_")?this.ld(a[f])||this.da.rh(b,a[f]):this.ld(a[f],b)||this.da.rh(b,a[f])}};c(f,d,!1,!0);h=new f(h);
var m=new f(e),p="undefined"!=typeof localStorage&&null!==localStorage&&localStorage.getItem&&localStorage.setItem?h:m;return{start:function(b){b=b?m:p;for(var a=0;a<k.length;a++)if(k[a]==b){b.touch();return}k.push(b);b.touch();b.start()},stop:function(b){b=b?m:p;for(var a=0;a<k.length;a++)k[a]==b&&b.dismiss()},ZB:function(b){l=b;for(b=0;b<k.length;b++)k[b].start()}}});
define("IFrameHandler",["BrowserDetection","EnvironmentStatus","Environment"],function(h,e,a){var d=h.isProbablyAWebkit()&&h.isProbablyChrome(32,!0)?null:"about:blank",c={},g={createFrame:function(b,f){if(!a.isBrowserDocument())return null;var g=document.getElementsByTagName("BODY")[0];if(!g)return null;f=f||d;var e=document.createElement("iframe");e.style.visibility="hidden";e.style.height="0px";e.style.width="0px";e.style.display="none";e.name=b;e.id=b;h.isProbablyIE()||h.isProbablyOldOpera()?(e.src=
f,g.appendChild(e)):(g.appendChild(e),e.src=f);try{if(e.contentWindow){try{e.contentWindow.name=b}catch(l){}c[b]=e.contentWindow;return c[b]}return document.frames&&document.frames[b]?(c[b]=document.frames[b],c[b]):null}catch(m){return null}},getFrameWindow:function(a,f,d){f&&!c[a]&&this.createFrame(a,d);return c[a]||null},disposeFrame:function(a){if(c[a]){try{document.getElementsByTagName("BODY")[0].removeChild(document.getElementById(a))}catch(f){}delete c[a]}},removeFrames:function(){for(var a in c)try{document.getElementsByTagName("BODY")[0].removeChild(document.getElementById(a))}catch(f){}c=
{}}};g.createFrame=g.createFrame;g.getFrameWindow=g.getFrameWindow;g.disposeFrame=g.disposeFrame;g.removeFrames=g.removeFrames;e.addUnloadHandler(g.removeFrames);return g});
define("lsAY","Executor lsA lsAW lsAa lsAX Helpers EnvironmentStatus IFrameHandler LoggerManager lsG Environment".split(" "),function(h,e,a,d,c,g,b,f,k,n,l){function m(b,f,g){l.browserDocumentOrDie();this.R=b;this.$i=this.id=null;this.jk=500;this.io=f;this.cf=null;this.host=location.host;this.od=null;this.oh=!1;this.pq=0;g?(this.da=c,a.start(!0)):(this.da=q,a.start());this.Hv=g;this.po=this.nk=null;this.ca();this.ss();this.wq();this.gh={};p.logInfo(k.resolve(19),
this)}var p=k.getLoggerProxy(e.Oa),q="undefined"!=typeof localStorage&&null!==localStorage&&localStorage.getItem&&localStorage.setItem?d:c,r=g.randomG(),t=e.vc;m.om=function(){return q};m.prototype={toString:function(){return["[SharedStatus",this.id,this.R,"]"].join("|")},ca:function(){this.id=r++;this.da.Yk(this.R,this.id)?this.da.Rf(this.R,this.id)?this.ca():(this.od=this.Nv(),b.addBeforeUnloadHandler(this),b.addUnloadHandler(this)):this.ca()},start:function(){this.po=h.addRepetitiveTask(this.Kz,
e.Qd,this);p.logInfo(k.resolve(20),this)},wq:function(){f.getFrameWindow(this.od,!0)?(this.jk=500,this.nk=h.addTimedTask(this.start,0,this)):(this.nk=h.addTimedTask(this.wq,this.jk,this),this.jk*=2)},ba:M("id"),Yt:function(b){b!=this.cf&&(this.cf=b,this.da.Yk(b,this.id,this.R))},ws:function(b){this.cf!=b?p.logError(k.resolve(18),this.cf,b):this.cf=null;this.da.rh(b,this.id,this.R)},Cw:function(b){b=this.da.Hz(b);if(!b)return 0;for(var a=0,f=0;f<b.length;f++)g.getTimeStamp()-b[f].xb()[t]>e.Qd||a++;
return a},ss:function(){this.$i=g.getTimeStamp()+this.pq;this.da.MB(this.R,this.id,[this.$i,this.od,this.host,e.Kk,e.Oh])},Kz:function(){if(this.oh)p.logDebug(k.resolve(23)),this.oh=!1;else{var b=!1;if(this.io){p.logDebug(k.resolve(24),this);var a=this.da.Mj(this.R);if(a){p.logDebug(k.resolve(26),this.R);for(var f=0;f<a.length;f++)if(a[f]!=this.id){var c=this.da.Rf(this.R,a[f]);c?c[e.Lo]!=e.Kk||c[e.Wo]!=e.Oh?p.logDebug(k.resolve(28),a[f]):(c[t]==this.$i&&(this.pq=g.randomG(5)),c[t]>this.$i?b|=this.py(a[f],
c[t]):this.gh[a[f]]&&delete this.gh[a[f]]):p.logDebug(k.resolve(27),a[f])}}else p.logDebug(k.resolve(25),this)}b||(p.logDebug(k.resolve(29)),this.da.Yk(this.R,this.id),this.ss())}},py:function(b,a){p.logDebug(k.resolve(30),b,a);if(this.gh[b])if(this.gh[b]!=a)p.logInfo(k.resolve(21)),this.Ai();else return!1;this.gh[b]=a;return!0},Nv:function(){return n.Vj("LSF__"+document.domain+"_"+this.id+"_"+this.R)},Ai:function(){this.clean();this.io&&h.executeTask(this.io)},pr:function(){this.da.sl(this.R,this.id);
this.da.rh(this.R,this.id);this.oh=!0},clean:function(){p.logInfo(k.resolve(22),this);h.stopRepetitiveTask(this.po);h.stopRepetitiveTask(this.nk);f.disposeFrame(this.od);this.od=this.nk=this.po=null;this.ws(this.cf);this.pr()},unloadEvent:function(){this.clean()},preUnloadEvent:function(){this.pr()},ha:function(){this.clean();b.removeBeforeUnloadHandler(this);b.removeUnloadHandler(this);a.stop(this.Hv)}};m.prototype.unloadEvent=m.prototype.unloadEvent;m.prototype.preUnloadEvent=m.prototype.preUnloadEvent;
return m});
define("lsAR","lsF Executor LoggerManager BrowserDetection Inheritance CookieManager lsAY Helpers lsA".split(" "),function(h,e,a,d,c,g,b,f,k){function n(b,a,f,k,c){this._callSuperConstructor(n,[b]);this.appName=a;this.bl=this.fh=this.$d=null;this.Vn=!0;this.Nf={};this.Rc={};this.$m=0;this.Dc=c||5E3;this.Zd=null;this.uo=!1;this.Bk=this.xk=0;this.to=!1;this.LB=f;this.dg=k;g.areCookiesEnabled()&&e.addRepetitiveTask(this.Ku,6E4,this)}function l(b){for(var a in b)return a}var m=
l({Ub:!0}),p=l({Om:!0}),q=l({Gh:!0}),r=a.getLoggerProxy(k.Oa),t=h.Kt;n.prototype={Ub:function(){this._callSuperMethod(n,m);this.fh=this.$d=null},mf:function(){return null!=this.Ea?(this.kt(),null!==this.Ea?this.Ea:null):null},rv:function(b){this.Vn=!b},Yz:function(b,f){var k=null;if((this.to||null==b)&&this.LB)r.logDebug(a.resolve(31)),k=this.Cv(),this.to=!1;else if(null!=b)r.logDebug(a.resolve(32)),this.Ys(b),this.to=!0;else return 10==this.$m&&r.logDebug(a.resolve(33)),10>=this.$m&&this.$m++,null;
r.logDebug(a.resolve(34));var c=this.kt();r.logDebug(a.resolve(35),c);if(null!=this.Ea){r.logDebug(a.resolve(36));this.Bk=0;try{return this.Nf["LS6__"+document.domain+"_"+this.$d+"_"+this.appName]="OK",this.Ea}catch(g){r.logDebug(a.resolve(37))}}if(d.isProbablyOldOpera()&&f&&k&&"null"==k.log)return r.logDebug(a.resolve(38)),e.executeTask(f),null;this.Bk++;10<=this.Bk&&(this.Bk=0,f&&this.Px()?(r.logDebug(a.resolve(39)),e.executeTask(f)):(r.logDebug(a.resolve(40)),this.uo=!0));return null},Om:function(b,
a,f){return!1===this._callSuperMethod(n,p,[b,!0,a])?!1:this.lt(f)},Px:function(){if(this.fv)return r.logDebug(a.resolve(41)),!0;if(d.isProbablyOldOpera())return r.logDebug(a.resolve(42)),!0;if(d.isProbablyChrome())return r.logDebug(a.resolve(43)),!0;if(d.isProbablyApple(7,!1))return r.logDebug(a.resolve(44)),!0},hw:function(){if(!g.areCookiesEnabled())return null;this.bl=null;var c=k.Qd+(this.Vn?k.Xo:0),d=b.om(),l=d.Mj(this.appName);if(!l)return r.logDebug(a.resolve(45)),null;for(var t=0;t<l.length;t++){var q=
l[t]+"_"+this.appName,n=d.Rf(this.appName,l[t]);if(n)if(this.Nf[n[k.To]])r.logDebug(a.resolve(47),q);else if(n[k.Lo]!=k.Kk||n[k.Wo]!=k.Oh)r.logDebug(a.resolve(48),n);else{var h=f.getTimeStamp(),p=h-parseInt(n[k.vc]),m=1E3-p;if(p>c)this.Rc[q]?p>2*k.Qd?(this.Rc[q]=null,r.logDebug(a.resolve(49),q)):(this.Rc[q]=n[k.vc],this.dg&&e.executeTask(this.dg,[m]),r.logDebug(a.resolve(50),q)):r.logDebug(a.resolve(51),q);else{if(this.Vn)if(!this.Rc[q]){r.logDebug(a.resolve(52),q);this.Rc[q]=n[k.vc];this.dg&&e.executeTask(this.dg,
[m]);continue}else if(this.Rc[q]==n[k.vc]){r.logDebug(a.resolve(53),q);this.dg&&e.executeTask(this.dg,[m]);continue}this.bl=h+k.Qd-p;r.logDebug(a.resolve(54),q);return{J:n,id:l[t]}}}else r.logDebug(a.resolve(46),q)}return null},Cv:function(){var b=this.hw();if(!b)return!1;var a=b.J,f=a[k.To],b=this.Om(f,this.bl,b.id);this.Nf[f]=!1===b||!b.Dh&&!1==b.Np?!1:b.log?b.log:"unknown";a[k.Uo]&&a[k.Uo]!=location.host&&(this.fv=!0);return b},Gh:function(){var b=this._callSuperMethod(n,q);b.Dh||(this.$d=null);
return b},kt:function(){return this.$d?this.lt(this.$d):this.tB()},lt:function(b){var f=this.Gh();if(!f.Dh)return f;r.logDebug(a.resolve(55));f=0;try{var k=this.Ea.Lightstreamer["_"+b];if(!k)return f=6,r.logDebug(a.resolve(56),b),this.Ub(),new t(b+" not IN global",f,!1,!1);if(!k.lsEngine)return f=7,r.logDebug(a.resolve(57),b),this.Ub(),new t(b+" not IN ITS global",f,!1,!1);this.$d=b;this.fh=k.lsEngine;f=8;return new t("OK",f,!0,!1)}catch(c){return r.logDebug(a.resolve(58),f,c),this.Ub(),new t("exception "+
f+" "+c,9,!1,!0)}},tB:function(){var b=this.Gh();if(!b.Dh)return b;r.logDebug(a.resolve(59));try{var f=this.Ea.Lightstreamer,k;for(k in f)try{if(0==k.indexOf("_")&&f[k].lsEngine&&f[k].lsEngine.ff==this.appName)return this.fh=f[k].lsEngine,this.$d=this.fh.Qg(),new t("OK",10,!0,!1)}catch(c){}}catch(g){return r.logDebug(a.resolve(60),g),this.Ub(),new t("exception "+g,11,!1,!0)}},Ss:function(b){this.Dc=b;this.ki&&(b=this.Zd,this.bt(),this.at(b))},at:function(b){this.ki||(r.logDebug(a.resolve(61)),this.Zd=
b,this.ki=e.addRepetitiveTask(this.ld,this.Dc,this))},bt:function(){r.logDebug(a.resolve(62));e.stopRepetitiveTask(this.ki);delete this.Zd;delete this.ki},ld:function(){null===this.mf()&&this.Zd&&e.executeTask(this.Zd,[!1]);this.Zd&&e.executeTask(this.Zd,[!0])},Ku:function(){var b=document.cookie.toString();this.Ju(b);this.Ou(b)},Ju:function(b){var a=this.Nf;this.Nf={};for(var f in a)a[f]&&-1<b.indexOf(f)&&(this.Nf[f]=a[f])},Ou:function(b){var a=this.Rc;this.Rc={};for(var f in a)a[f]&&-1<b.indexOf(f)&&
(this.Rc[f]=a[f])},CB:function(b){this.uo=!1;e.addTimedTask(this.BB,2E4,this,[new Number(++this.xk),b])},BB:function(b,a){this.uo&&b==this.xk&&(e.executeTask(a),this.xk++)},uu:function(){this.xk++}};c(n,h);return n});
define("Setter",["IllegalArgumentException"],function(h){function e(){}e.prototype.checkPositiveNumber=function(a,d,c){var g=new Number(a);if(isNaN(g))throw new h("The given value is not valid. Use a number");if(!c&&g!=Math.round(g))throw new h("The given value is not valid. Use an integer");if(d){if(0>a)throw new h("The given value is not valid. Use a positive number or 0");}else if(0>=a)throw new h("The given value is not valid. Use a positive number");return g};e.prototype.checkBool=function(a,
d){if(!0===a||!1===a||d&&!a)return!0===a;throw new h("The given value is not valid. Use true or false");};return e});define("lsH",["LoggerManager","lsG","Inheritance","Setter","lsA"],function(h,e,a,d,c){function g(b){this.W="lsH";this.parent=null;this.qp=!1;b&&this.pi(b)}var b=h.getLoggerProxy(c.Jk),f=h.getLoggerProxy(c.Oa);g.prototype={Oi:function(b){return this.Dk[b]},Y:function(a,f){var c=this.Oi(a),g=this[c];this[c]=e.$e(f);b.logDebug(h.resolve(64),this.parent,a,this.Ri(c));this.parent&&this.qp&&this.We(a);g!=this[c]&&this.Dr(a)},Ri:function(b){return this.Xp&&this.Xp[b]?"[...]":this[b]},N:function(a,
f){var c=this.Oi(a);f!=this[c]&&(this[c]=f,b.logInfo(h.resolve(63),a,this.Ri(c)),this.We(a),this.Dr(a))},Xf:function(b,a){this.parent=b;this.qp=a},We:function(b){var a=this.Oi(b);f.logDebug(h.resolve(65),b,this.Ri(a));return this.parent&&this.parent.We&&!this.parent.We(this.W,b,e.$e(this[a]))?!1:!0},Dr:function(a){var f=this.Oi(a);!this.parent||!this.parent.Fr||this.Br&&this.Br[f]||(b.logDebug(h.resolve(66),a,this.Ri(f)),this.parent.Fr(a,this))},pi:function(b){var a=this.Dk,f;for(f in a)this.Y(f,
b[a[f]])}};a(g,d,!1,!0);return g});define("lsJ",["lsH","Inheritance","lsG"],function(h,e,a){function d(b){this.Cm=null;this.Eg=!1;this.Br=c;this.Dk=g;this._callSuperConstructor(d,arguments);this.W="lsJ"}var c={Cm:!0,Eg:!0},g={Eg:"connectionRequested",Cm:"isLocalEngine"},g=a.getReverse(g);e(d,h);return d});
define("lsL","IllegalArgumentException lsA lsH Inheritance Global Environment lsG".split(" "),function(h,e,a,d,c,g,b){function f(){this.El=5E5;this.Ui=19E3;this.Ad=this.Mc=this.uf=0;this.Cd=3E3;this.mk=2E3;this.Ze=4E3;this.En=5E3;this.Wn=!0;this.em=null;this.Mp=this.Mn=!1;this.Sj=0;this.Rl=!0;this.Xn=5E3;this.lk=null;this.Go=!0;this.Hi=2E3;this.ko=4E3;this.Dk=n;this._callSuperConstructor(f,arguments);this.W="lsL"}var k={};k[e.kg]=!0;k[e.qg]=!0;k[e.Pd]=!0;k[e.Ph]=
!0;k[e.Sk]=!0;k[e.Nh]=!0;var n={El:"contentLength",Ui:"idleMillis",uf:"keepaliveMillis",Mc:"maxBandwidth",Ad:"pollingMillis",Cd:"reconnectTimeout",mk:"stalledTimeout",Ze:"connectTimeout",En:"retryTimeout",Wn:"slowingEnabled",em:"forcedTransport",Mn:"serverInstanceAddressIgnored",Mp:"cookieHandlingRequired",Sj:"reverseHeartbeatMillis",Rl:"earlyWSOpenEnabled",Xn:"spinFixTimeout",lk:"spinFixEnabled",Go:"xDomainStreamingEnabled",Hi:"forceBindTimeout",ko:"switchCheckTimeout"},n=b.getReverse(n);f.prototype=
{oA:function(b){this.N("contentLength",this.checkPositiveNumber(b))},cw:M("El"),tA:function(b){this.N("idleMillis",this.checkPositiveNumber(b,!0))},qw:M("Ui"),vA:function(b){this.N("keepaliveMillis",this.checkPositiveNumber(b,!0))},tw:M("uf"),xA:function(b){b="unlimited"==(new String(b)).toLowerCase()?0:this.checkPositiveNumber(b,!1,!0);this.N("maxBandwidth",b)},vw:function(){return 0>=this.Mc?"unlimited":this.Mc},CA:function(b){this.N("pollingMillis",this.checkPositiveNumber(b,!0))},Dw:M("Ad"),Hw:M("Cd"),
PA:function(b){this.N("stalledTimeout",this.checkPositiveNumber(b))},Pq:M("mk"),mA:function(b){this.N("connectTimeout",this.checkPositiveNumber(b))},$v:M("Ze"),FA:function(b){this.N("retryTimeout",this.checkPositiveNumber(b))},Lw:M("En"),LA:function(b){this.N("slowingEnabled",this.checkBool(b))},Nx:M("Wn"),sA:function(b){if(null!==b&&!k[b])throw new h("The given value is not valid. Use one of: HTTP-STREAMING, HTTP-POLLING, WS-STREAMING, WS-POLLING, WS, HTTP or null");this.N("forcedTransport",b)},
ow:M("em"),JA:function(b){this.N("serverInstanceAddressIgnored",this.checkBool(b))},Mx:M("Mn"),pA:function(b){if(b&&!g.isBrowser())throw new h("cookieHandlingRequired is only supported on Browsers");this.N("cookieHandlingRequired",this.checkBool(b))},Xi:M("Mp"),qA:function(b){this.N("earlyWSOpenEnabled",this.checkBool(b))},zx:M("Rl"),GA:function(b){this.N("reverseHeartbeatMillis",this.checkPositiveNumber(b,!0))},Mw:M("Sj"),TA:function(b){this.N("xDomainStreamingEnabled",this.checkBool(b))},Vx:M("Go"),
rA:function(b){this.N("forceBindTimeout",this.checkPositiveNumber(b))},mw:M("Hi"),QA:function(b){this.N("switchCheckTimeout",this.checkPositiveNumber(b))},Ww:M("ko"),OA:function(b){this.N("spinFixTimeout",this.checkPositiveNumber(b))},Uw:M("Xn"),NA:function(b){this.N("spinFixTimeout",null===this.XB?null:this.checkBool(b))},Tw:M("lk")};f.prototype.setContentLength=f.prototype.oA;f.prototype.getContentLength=f.prototype.cw;f.prototype.setIdleMillis=f.prototype.tA;f.prototype.getIdleMillis=f.prototype.qw;
f.prototype.setKeepaliveMillis=f.prototype.vA;f.prototype.getKeepaliveMillis=f.prototype.tw;f.prototype.setMaxBandwidth=f.prototype.xA;f.prototype.getMaxBandwidth=f.prototype.vw;f.prototype.setPollingMillis=f.prototype.CA;f.prototype.getPollingMillis=f.prototype.Dw;f.prototype.setReconnectTimeout=f.prototype.Pq;f.prototype.getReconnectTimeout=f.prototype.Hw;f.prototype.setStalledTimeout=f.prototype.PA;f.prototype.getStalledTimeout=f.prototype.Pq;f.prototype.setConnectTimeout=f.prototype.mA;f.prototype.getConnectTimeout=
f.prototype.$v;f.prototype.setRetryTimeout=f.prototype.FA;f.prototype.getRetryTimeout=f.prototype.Lw;f.prototype.setSlowingEnabled=f.prototype.LA;f.prototype.isSlowingEnabled=f.prototype.Nx;f.prototype.setForcedTransport=f.prototype.sA;f.prototype.getForcedTransport=f.prototype.ow;f.prototype.setServerInstanceAddressIgnored=f.prototype.JA;f.prototype.isServerInstanceAddressIgnored=f.prototype.Mx;f.prototype.setCookieHandlingRequired=f.prototype.pA;f.prototype.isCookieHandlingRequired=f.prototype.Xi;
f.prototype.setEarlyWSOpenEnabled=f.prototype.qA;f.prototype.isEarlyWSOpenEnabled=f.prototype.zx;f.prototype.setReverseHeartbeatMillis=f.prototype.GA;f.prototype.getReverseHeartbeatMillis=f.prototype.Mw;f.prototype.setXDomainStreamingEnabled=f.prototype.TA;f.prototype.isXDomainStreamingEnabled=f.prototype.Vx;f.prototype.setForceBindTimeout=f.prototype.rA;f.prototype.getForceBindTimeout=f.prototype.mw;f.prototype.setSwitchCheckTimeout=f.prototype.QA;f.prototype.getSwitchCheckTimeout=f.prototype.Ww;
f.prototype.setSpinFixTimeout=f.prototype.OA;f.prototype.getSpinFixTimeout=f.prototype.Uw;f.prototype.setSpinFixEnabled=f.prototype.NA;f.prototype.getSpinFixEnabled=f.prototype.Tw;d(f,a);return f});
define("lsB",[],function(){function h(e,a,d,c){var g=3,b,f=a;a-=d;d="";var k;k="document".toString();var n=0,l=k.length;for(b=0;b<l;b++)n+=k.charCodeAt(b);k=parseInt(n);if(0<k&&(n=e.length,0<n))for(l=0;f+g-l<=n;l+=3){b=l;if(0<a)for(b=3*k;b>=a;b-=a);b=parseInt(e.substring(l,g-1))-parseInt(e.substring(b,b+2))+c-parseInt(e.substring(f,f+g-l));d=unescape("%"+b.toString(16))+d;g+=3;f+=3;k+=b}return d}return{dx:function(){return h("2844232422362353182342452312352492633183053182412392513042362492412532492362342352342462472452423042312312313182482758859157156756051950251650550051450653351251952051650852152653954583",
116,2,621)},cC:function(){return h("2844232422362353182342452312352492633183053182412392513042362492412532492362342352342462472452423042312312313182482393182292342362492382392362383182422532332342512492422422492342402770",6,7,350)}}});
define("ASSERT",["LoggerManager"],function(h){var e=h.getLoggerProxy("weswit.test"),a=0,d={},c={VOID:d,getFailures:function(){return a},compareArrays:function(a,b,c){if(a.length!=b.length)return this.Lb(),e.logError(h.resolve(479),a,b),!1;if(c)for(d=0;d<a.length;d++){if(a[d]!=b[d])return e.logError(h.resolve(482),a[d],b[d]),this.Lb(),!1}else{c={};for(var d=0;d<a.length;d++)c[a[d]]=1;for(d=0;d<b.length;d++)if(c[b[d]])c[b[d]]++;else return e.logError(h.resolve(480),b[d]),this.Lb(),!1;for(d in c)if(1==
c[d])return e.logError(h.resolve(481),c[d]),this.Lb(),!1}return!0},verifySuccess:function(a,b,c,d,e){return this.Mh(a,b,c,d,!1,e)},verifyException:function(a,b,c){return this.Mh(a,b,c,null,!0)},verifyNotNull:function(a){return null===a?(this.Lb(),e.logError(h.resolve(483),a),!1):!0},verifyValue:function(a,b,c){var d=!1;!0===c?d=a===b:c?d=c(a,b):isNaN(a)?d=a==b:(c=a&&a.charAt?a.charAt(0):null,d=b&&b.charAt?b.charAt(0):null,d="."==c||" "==c||"0"==c||"."==d||" "==d||"0"==d?String(a)==String(b):a==b);
return d?!0:(this.Lb(),e.logError(h.resolve(484),a,b),!1)},verifyDiffValue:function(a,b,c){return(c?a===b:a==b)?(this.Lb(),e.logError(h.resolve(485),a,b),!1):!0},verifyOk:function(a){return a?!0:(this.Lb(),e.logError(h.resolve(486)),!1)},verifyNotOk:function(a){return a?(this.Lb(),e.logError(h.resolve(487)),!1):!0},fail:function(){e.logError(h.resolve(488));this.Lb();return!1},Lb:function(){a++},Mh:function(a,b,c,k,n,l){var m=!1,p=null,q=null;try{p=c!==d?a[b].apply(a,c):a[b]()}catch(r){m=!0,q=r}a=
n?"succes":"failure";return n!=m?(this.Lb(),e.logError(h.resolve(489),a,"for",b,c,k,q),!1):n||k===d?!0:this.verifyValue(p,k,l)}};c.getFailures=c.getFailures;c.fail=c.fail;c.verifyNotOk=c.verifyNotOk;c.verifyOk=c.verifyOk;c.verifyDiffValue=c.verifyDiffValue;c.verifyNotNull=c.verifyNotNull;c.verifyValue=c.verifyValue;c.verifyException=c.verifyException;c.verifySuccess=c.verifySuccess;c.compareArrays=c.compareArrays;return c});
define("lsq","LoggerManager lsG lsB Environment ASSERT lsA".split(" "),function(h,e,a,d,c,g){var b=h.getLoggerProxy(g.Oe),f=a.dx(),k=/^[a-z][a-z0-9-]+$/,n=/^((?:[a-z][a-z.0-9-]+).(?:[a-z][a-z-]+))(?![\w.])/,l=/^((?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))(?![d])/,m=/^[a-f0-9:]+$/;return{GB:function(b){b=b.toLowerCase();var a=0==b.indexOf("http://")?7:0==b.indexOf("https://")?8:-1;if(-1==a)return"The given server address has not a valid scheme";
var f=b.lastIndexOf(":"),f=f>a?f:b.length,c=this.kq(b,b.indexOf("://"));if(null!=c&&isNaN(c.substring(1)))return"The given server address has not a valid port";c=b.indexOf("/",a);c=c<f?c:f;if("["==b.charAt(a)){if(b=b.substring(a+1,b.lastIndexOf("]")),!m.test(b))return"The given server address is not a valid IPv6"}else if(b=b.substring(a,c),-1<b.indexOf(".")){if(!n.test(b)&&!l.test(b))return"The given server address is not a valid URL"}else if(!k.test(b))return"The given server address is not a valid machine name";
return!0},kq:function(b,a){var f=b.indexOf(":",a+1);if(-1>=f)return null;if(-1<b.indexOf("]")){f=b.indexOf("]:");if(-1>=f)return null;f+=1}else if(f!=b.lastIndexOf(":"))return null;var c=b.indexOf("/",a+3);return-1<c?b.substring(f,c):b.substring(f)},Ru:function(b,a){var f=this.kq(b,b.indexOf("://"));if(f){var c=a.indexOf("/");a=-1>=c?a+f:a.substring(0,c)+f+a.substring(c)}a=0==b.toLowerCase().indexOf("https://")?"https://"+a:"http://"+a;"/"!=a.substr(a.length-1)&&(a+="/");return a},Ew:function(a,k,
g,l,n,x,m,y,C,w,L){L=L&&d.isBrowserDocument()&&!e.um()?"LS_domain\x3d"+document.domain+"\x26":"";a="LS_phase\x3d"+a+"\x26"+L+(y?"LS_cause\x3d"+y+"\x26":"");n||x?(a+="LS_polling\x3dtrue\x26",y=w=0,x&&(w=Number(g.Ad),null==C||isNaN(C)||(w+=C),y=g.Ui),isNaN(w)||(a+="LS_polling_millis\x3d"+w+"\x26"),isNaN(y)||(a+="LS_idle_millis\x3d"+y+"\x26")):(0<g.uf&&(a+="LS_keepalive_millis\x3d"+g.uf+"\x26"),w&&(a+="LS_content_length\x3d"+g.El+"\x26"));if(n)return k="",0<g.Mc&&(k+="LS_requested_max_bandwidth\x3d"+
g.Mc+"\x26"),null!=l.Wh&&(k+="LS_adapter_set\x3d"+encodeURIComponent(l.Wh)+"\x26"),null!=l.Ck&&(k+="LS_user\x3d"+encodeURIComponent(l.Ck)+"\x26"),g=a+f+k,m&&(g+="LS_old_session\x3d"+m+"\x26"),b.logDebug(h.resolve(69),g),null!=l.Cj&&(g+="LS_password\x3d"+encodeURIComponent(l.Cj)+"\x26"),g;c.verifyOk(k)||b.logError(h.resolve(67));l="LS_session\x3d"+k+"\x26"+a;b.logDebug(h.resolve(68),l);return l},gw:function(a,f){var c={LS_op:"destroy",LS_session:a};f&&(c.LS_cause=f);b.logDebug(h.resolve(70));return c},
nw:function(a,f){var c={LS_op:"force_rebind"};a&&(c.LS_cause=a);null==f||isNaN(f)||(c.LS_polling_millis=f);b.logDebug(h.resolve(71));return c},uw:function(b,a,f){a.LS_build=f;a.LS_phase=b;return a},aw:function(b){return{LS_op:"constrain",LS_requested_max_bandwidth:0<b.Mc?b.Mc:0}},Mq:function(a,f,c){a=f||".js"==c||""==c?(a?this.gm()+"create_session":"bind_session")+c:(a?this.gm():"")+"STREAMING_IN_PROGRESS";b.logDebug(h.resolve(72),a);return a},gm:U("")}});
define("lsK","IllegalArgumentException lsH Inheritance Environment Global lsq lsG".split(" "),function(h,e,a,d,c,g,b){function f(){this.wh=l;this.Os=this.Ns=this.Cj=this.Ck=this.Wh=null;this.Xp=n;this.Dk=k;this._callSuperConstructor(f,arguments);this.W="lsK"}var k={wh:"serverAddress",Wh:"adapterSet",Ck:"user",Cj:"password",Ns:"serverInstanceAddress",Os:"serverSocketName"},k=b.getReverse(k),n={Cj:!0},l=d.isBrowser()&&"file:"!=location.protocol?location.protocol+
"//"+location.hostname+(location.port?":"+location.port:"")+"/":null;f.prototype={Ws:function(b){if(null===b)b=l;else{"/"!=b.substr(b.length-1)&&(b+="/");var a=g.GB(b);if(!0!==a)throw new h(a);}this.N("serverAddress",b)},Nq:M("wh"),Qs:function(b){this.N("adapterSet",b)},Pv:M("Wh"),SA:function(b){this.N("user",b)},cx:M("Ck"),zA:function(b){this.N("password",b)},Ow:M("Ns"),Pw:M("Os")};f.prototype.setServerAddress=f.prototype.Ws;f.prototype.getServerAddress=f.prototype.Nq;f.prototype.setAdapterSet=f.prototype.Qs;
f.prototype.getAdapterSet=f.prototype.Pv;f.prototype.setUser=f.prototype.SA;f.prototype.getUser=f.prototype.cx;f.prototype.setPassword=f.prototype.zA;f.prototype.getServerInstanceAddress=f.prototype.Ow;f.prototype.getServerSocketName=f.prototype.Pw;a(f,e);return f});
define("lsAQ",["LoggerManager","EnvironmentStatus","ASSERT","lsA"],function(h,e,a,d){function c(b){this.u=null;this.ob=!1;this.p=null;this.b=b;e.addUnloadHandler(this)}var g=h.getLoggerProxy(d.Oa);c.prototype={oc:function(){g.logInfo(h.resolve(73));this.ob=!0;this.b.g.hx()},Pc:function(){g.logInfo(h.resolve(74));this.ob=!1;this.b.Nn()},ga:function(b){return b==this.u},ck:function(b){a.verifyNotOk(this.ob);this.u=b;this.oc()},Ps:function(b){this.u=b;this.ob&&this.Pc()},ok:function(b){this.b.zg(b)},
re:function(b){this.b.dq(b);this.Pc()},unloadEvent:function(){this.an()},ha:function(){e.removeUnloadHandler(this)}};c.prototype.unloadEvent=c.prototype.unloadEvent;return c});
define("lsAV","lsAQ Inheritance LoggerManager lsG Executor ASSERT lsA Helpers".split(" "),function(h,e,a,d,c,g,b,f){function k(b,a){this._callSuperConstructor(k,[b]);this.Ek=2E3;this.ca();this.yn=a;this.gd=null}var n={oy:"newPage",sv:"engineConfiguration",cv:"deletePage",oB:"tableRemove",bd:"updateSubscriptionParams",bd:"updateSubscriptionParams",wj:"onTable",pB:"tableRequestSubmission",gi:"callConnect",hi:"callDisconnect",aA:"sendMex",Ed:"sendLog"},n=d.getReverse(n),
l,m;for(m in{re:!0})l=m;var p=a.getLoggerProxy(b.Oa);k.prototype={toString:function(){return["[|RemoteEngineHandler",this.p,this.Fk,this.le,this.Ta,this.ob,this.u,this.gd,this.Am,"]"].join("|")},ca:function(b){this.u=null;this.gd=b?this.gd+1:f.randomG()+1;this.le=!1;this.Ta=null;this.ob=this.Fk=!1;this.p=-1;this.ub=null;this.Am=!1},vm:M("le"),mi:function(){var b=!1;try{var f=this.mf();f&&(b=f.fb().li(this.p))}catch(c){p,logInfo(a.resolve(76),c),b=!1}b||this.re();return b},li:function(b,f){p.logDebug(a.resolve(77),
b,this.gd);return f?(p.logDebug(a.resolve(78),f,this.u),b==this.gd&&this.ga(f)):b==this.gd},Ce:function(b,f){p.logDebug(a.resolve(79),b,this);return this.Dd(b,f,!1,!1)},na:function(b,f){p.logDebug(a.resolve(80),b,this);return this.Dd(b,f,!0,!1)},Kn:function(b,f){p.logDebug(a.resolve(81),b,this);return this.Dd(b,f,!1,!0)},Vf:function(b,f){p.logDebug(a.resolve(82),b,this);return this.Dd(b,f,!0,!0)},fb:function(){var b=this.mf();return b?b.fb():null},Dd:function(b,f,c,k){if(!this.le)return!1;p.logDebug(a.resolve(83),
b);b=n[b];try{var g=this.fb();if(!g)return!1;(k?g.qm(this.p):g.rs).Q(b,this.p,f,c?this.u:null)}catch(d){return this.Bv(d),!1}return!0},hn:function(b,a,f,k,g,d,l,e){this.le=!0;this.Fk=!1;this.p=b;this.u=a;this.Ta=l;this.Ek=2E3;this.ob=e;this.ub.at(c.packTask(this.Jy,this));this.b.Nr(!0,!1,k,g,d);this.b.zg(f);this.ob&&this.oc()},Rm:function(){this.ub.ld();c.addTimedTask(this.ub.ld,1E3,this.ub)},Jy:function(b){b?this.mi():this.re()},re:function(b){this.le&&this.ub&&(this.ub.bt(),this.ub.Ub(),this.ca(!0),
this._callSuperMethod(k,l,[b]))},Bv:function(){this.Am||p.logDebug(a.resolve(84));this.Am=!0;c.addTimedTask(this.ub.ld,0,this.ub)},Ly:function(b,f){if(this.le||this.Fk)p.logError(a.resolve(75)),g.fail();this.Fk=!0;this.gd++;try{this.ub=b,this.fb().rs.Q(n.newPage,-1,{Eo:window,Fj:this.gd,yn:this.yn})}catch(k){return this.ca(!0),!1}c.addTimedTask(this.My,this.Ek,this,[f]);this.Ek+=500;return!0},My:function(b){c.executeTask(b)},Js:function(b,a,f){this.Kn("engineConfiguration",{dp:b,Vt:f,Gz:a})},an:function(){this.le&&
this.p&&this.Ce("deletePage",this.p)},mn:function(b,a){b?this.Vf("tableRemove",{w:a}):this.Vf("tableRemove",{Fe:a,kb:this.p})},on:function(b,a,f){b?this.Vf("updateSubscriptionParams",d.aa({w:a},f)):this.Vf("updateSubscriptionParams",d.aa({Fe:a,kb:this.p},f))},wj:function(b,a,f,c,k){this.Vf("onTable",d.aa({zb:b,Fe:a,Db:f,kb:this.p,tk:c},k))},as:function(b,a){this.Vf("tableRequestSubmission",{kb:this.p,w:b,df:a})},gi:function(){this.Kn("callConnect")},hi:function(){this.Kn("callDisconnect")},uq:function(b,
a,f,c){this.na("sendMex",{Nc:b,Zj:a,dh:f,Se:c})},tq:function(b){this.Ce("sendLog",b)},mf:function(){return this.ub?this.ub.fh:null}};e(k,h);return k});
define("lsAT",["lsAQ","Inheritance","ASSERT","Executor"],function(h,e,a,d){function c(a,b){this._callSuperConstructor(c,[a]);this.la=b;this.p=this.la.fb().$t(a);this.u=this.la.fb().u}c.prototype={vm:U(!0),bound:function(a){var b=this.la;this.b.Nr(!1,a,b.ea,b.ra,b.K);this.b.zg(b.xb());b.oe()&&this.oc()},mi:function(){return this.la.fb().li(this.p)},Rm:E(),an:function(){this.la.fb().ri(this.p)},Js:function(a,b,f){a="lsK"==a?this.la.ea:"lsL"==a?this.la.ra:
this.la.K;d.addTimedTask(a.Y,0,a,[b,f])},mn:function(c,b){a.verifyOk(c);d.addTimedTask(this.lz,0,this,[this.u,c,b])},lz:function(a,b,f){var c=this.la.fb();c&&c.ga(a)&&(b?c.si(f):c.Qp(this.p,f))},on:function(a,b,f){d.addTimedTask(this.mz,0,this,[this.u,a,b,f])},mz:function(a,b,f,c){var d=this.la.fb();d&&d.ga(a)&&(b?d.bd(f,c):d.zk(this.p,f,c))},wj:function(a,b,f,c,e){d.addTimedTask(this.kz,0,this,[this.u,a,b,f,c,e])},kz:function(a,b,f,c,d,l){var e=this.la.fb();e&&e.ga(a)&&e.Sq(b,f,c,this.p,d,l)},as:function(a,
b){this.la.fb().pk(this.p,a,b)},gi:function(){this.la.vi()},hi:function(){this.la.Wp()},uq:function(a,b,f,c){this.la.Wj(a,b,f,c)},tq:function(a){this.la.Ed(a)},ay:function(){this.la.Ai()},mf:M("la")};e(c,h);return c});
define("lsAU",["ASSERT","Executor"],function(h,e){function a(a){this.wf=-1;this.mh={};this.Ej={};this.nh={};this.Dj=0;this.j=a}a.prototype={lo:G("j"),xw:function(a,c){this.wf++;this.mh[this.wf]=c;this.Ej[this.wf]=a;this.nh[this.wf]=!1;this.Dj++;var g={};g.kb=this.j.p;g.Da=this.wf;return g},wb:function(a){return this.mh[a]},Tg:function(a){return this.Ej[a]},JB:function(a){return this.nh[a]},Lu:function(){var a=[],c;for(c in this.mh)a.push(c);a.sort(function(a,b){return a-b});for(c=0;c<a.length;c++)this.vr(a[c]);
h.verifyValue(this.Dj,0);this.wf=-1;this.mh={};this.Ej={};this.nh={};this.Dj=0},clean:function(a){delete this.mh[a];delete this.Ej[a];delete this.nh[a];this.Dj--},jj:function(a){this.wb(a)&&(this.nh[a]=!0)},ej:function(a){var c=this.wb(a);c&&e.addTimedTask(c.onProcessed,0,c,[this.Tg(a)]);this.clean(a)},ij:function(a){var c=this.wb(a);c&&e.addTimedTask(c.onError,0,c,[this.Tg(a)]);this.clean(a)},gj:function(a,c,g){var b=this.wb(a);b&&e.addTimedTask(b.onDeny,0,b,[this.Tg(a),c,g]);this.clean(a)},hj:function(a){var c=
this.wb(a);c&&e.addTimedTask(c.onDiscarded,0,c,[this.Tg(a)]);this.clean(a)},vr:function(a){var c=this.wb(a);c&&e.addTimedTask(c.onAbort,0,c,[this.Tg(a),this.JB(a)]);this.clean(a)}};return a});
define("lsAe",["Executor","LoggerManager","ASSERT","lsA"],function(h,e,a,d){function c(b){this.qy=0;this.rc={};this.Eh={};this.Ov=1;this.Ca=null;this.e=b;this.Lp=4E3}var g=e.getLoggerProxy(d.ng),b=e.getLoggerProxy(d.Oa);c.prototype={toString:U("[SubscriptionsHandler]"),lo:G("Ca"),rd:function(b){return this.rc[this.Eh[b]]||null},Xh:function(b){var a=++this.qy;g.logInfo(e.resolve(87),b);b.Fy(a,++this.Ov,this);this.rc[a]=b;this.Ca&&this.Ca.ob&&this.un(b)},Pj:function(b){var c=b.ac,
d=b.Ge;g.logInfo(e.resolve(88),b);if(b.Em()||b.ne())a.verifyOk(this.Ca.vm()),d?this.Ca.mn(!0,d):this.Ca.mn(!1,c);b.$y();d&&delete this.Eh[d];delete this.rc[c];return b},bd:function(b,c){if(a.verifyOk(b.Zg()&&this.Ca&&this.Ca.vm())){var d=b.Ge;if(d)this.Ca.on(!0,d,c);else this.Ca.on(!1,b.ac,c)}else g.logError(e.resolve(85),b)},un:function(f,c,d){if(c){if(!f.Gm()||!this.Ca.ga(c)||!f.ol(d))return}else f.Gx()||(g.logError(e.resolve(86)),a.fail()),f.gz();d=f.Db;h.addTimedTask(this.un,this.Lp,this,[f,this.Ca.u,
d]);b.logDebug(e.resolve(89));this.Ca.wj(f.zb,f.ac,d,f.tk,f.Rj)},xj:function(a,c,g,d){var h=this.rc[a];h&&(h.Gm()&&h.xp(g)&&h.ol(d))&&(b.logDebug(e.resolve(90)),h.xj(c),this.Eh[c]=a,this.et(h))},et:function(a,c,g,d,m,p){if(a.Em()){if(c){if(!this.Ca.ga(c)||!a.xp(d)||!a.ol(m))return!1;p++}else p=1;c=(g?2*g:this.Lp)+this.e.Ad;b.logDebug(e.resolve(91));g=h.packTask(this.et,this,[a,this.Ca.u,c,a.zb,a.Db,p]);a.ku(g,c);this.Ca.as(a.Ge,p)}},hx:function(){g.logDebug(e.resolve(92));for(var b in this.rc)this.un(this.rc[b])},
yz:function(b){a.verifyNotOk(b.Fx());g.logDebug(e.resolve(93),b);delete this.Eh[b.Ge];b.Xy();b.dt&&delete this.rc[b.ac]},xz:function(){g.logDebug(e.resolve(94));for(var b in this.rc)this.yz(this.rc[b]);this.Eh={}},yk:function(b,a){var c=this.rd(b[0]);if(!c)return!0;c.update(b,a,!1)},yd:function(b,a,c){b=this.rd(b);if(!b)return!1;b.fy(a,c)},Tb:function(b,a){var c=this.rd(b);if(!c)return!1;c.Yl(a)},Sb:function(b,a){var c=this.rd(b);if(!c)return!1;c.ul(a)},eq:function(b,a,c){(c=this.rd(c))&&c.gA(b,a)},
ft:function(b,a,c,g,d){(b=this.rd(b))&&b.ez(a,c,g,d)},ht:function(b){(b=this.rd(b))&&b.hz()}};return c});
define("lsD",["LoggerManager","Executor","lsA"],function(h,e,a){function d(b,a,c,g){this.Vk=b;this.aq=a;this.xe=c;this.hs=g}function c(b,a,g){this.wg=!0===g;this.Zu=b;this.gq=a;this.L=this.wg?[]:{Qf:0,ig:0,fe:0};this.wg||(this.ac=c.next++,c.Ij[this.ac]=this)}var g=h.getLoggerProxy(a.Oa);c.Ij={};c.next=0;c.Sa=function(){for(var b in this.Ij)this.Ij[b].Sa()};c.remove=function(b){delete this.Ij[b.ac]};c.prototype={Q:function(b,a,c,d){g.logDebug(h.resolve(97),b);this.wg?e.addTimedTask(this.Sr,
0,this,[b,a,c,d]):this.Sr(b,a,c,d)},Sr:function(b,a,c,g){if(this.wg)this.L.push(new d(b,a,c,g)),this.Sa();else{this.oh();this.L[this.L.ig]=new d(b,a,c,g);this.L.ig++;try{e.addTimedTask(this.Sa,0,this)}catch(l){}this.clean()}},clean:function(){for(var b=this.L.Qf;this.L.fe<b;this.L.fe++)delete this.L[this.L.fe]},oh:function(){this.L.fe==this.L.Qf&&this.L.fe==this.L.ig&&(this.L.ig=0,this.L.Qf=0,this.L.fe=0,this.L={Qf:0,ig:0,fe:0})},Sa:function(){if(this.wg)for(;0<this.L.length;){var b=this.L.shift();
this.handleEvent(b)}else{for(var a=this.L.Qf;a<this.L.ig;)b=this.L[a],this.handleEvent(b),a++;this.L.Qf=a}},handleEvent:function(b){try{if(this.Zu.li(b.aq,b.hs))if(this.gq[b.Vk])this.gq[b.Vk](b.xe);else g.logError(h.resolve(95))}catch(a){g.logError(h.resolve(96))}}};d.prototype.toString=function(){return["[|CrossPageProxy.Event",this.Vk,this.aq,this.xe,this.hs,"]"].join("|")};return c});
define("lso",[],function(){function h(e){this.Dg=e;this.He={};this.Ie={}}h.prototype={Xh:function(e,a,d,c,g){d={jb:e,Nt:d,Db:c,zb:g,id:a};this.He[a]=d;this.Ie[e]=d},Pj:function(e){this.Ie[e]&&(delete this.He[this.Ie[e].id],delete this.Ie[e])},Lz:function(e){this.Dg.si(this.rm(e))},zk:function(e,a){this.Dg.bd(this.rm(e),a)},ha:E(),Xw:function(e){return this.Ie[e]?this.Ie[e].Nt:null},rm:function(e){return this.He[e]?this.He[e].jb:null},yx:function(e,a,d){return this.He[e]&&this.He[e].Db==
a&&this.He[e].zb==d},Fm:function(e){return(e=this.Ug().g.rd(e))?e.ne():!1}};return h});
define("lsp","lso Inheritance lsF lsD lsL lsK lsJ LoggerManager lsA lsG".split(" "),function(h,e,a,d,c,g,b,f,k,n){function l(b,c,f,g,k){this._callSuperConstructor(l,[f]);this.tn=new a(b);this.pp=c;this.ls=k;this.Wm=null;this.jt=new d(this.Dg,g,!1)}var m={Fm:"isTableSubscribed",tz:"pageCallback",kB:"tableCallback",cu:"addRequestSent",lB:"tableError",qB:"tableSubscription",rB:"tableUnsubscription",yk:"updatePage",
mB:"tableOverflow",Yl:"endOfSnapshot",ul:"clearSnapshot",hj:"messageDiscarded",gj:"messageDenied",ij:"messageError",ej:"messageComplete",jj:"messageOnNetwork",ck:"sessionReadyNotification",Nn:"sessionEnd",ok:"statusChange",ak:"serverError",Tu:"configurationChange",uv:"engineDying",tv:"engineDeath"},m=n.getReverse(m),p=f.getLoggerProxy(k.Oa);l.Et=!1;l.prototype={toString:function(){return["[|RemotePushPageHandler",this.ls,this.pp,"]"].join("|")},ha:function(){p.logInfo(f.resolve(98),this);d.remove(this.jt)},
qm:M("jt"),Ce:function(b,a){p.logDebug(f.resolve(100),b,this);this.Dd(b,a,!1)},na:function(b,a,c){p.logDebug(f.resolve(101),b,this);this.Dd(b,a,c||!0)},Ms:function(b,a,c){p.logDebug(f.resolve(102),b,this);this.Dd(b,a,c-1)},Dd:function(b,a,c){if(!l.Et){b=m[b];c=!0===c?this.Dg.u:!1===c?null:c;try{this.Ug().rk.Q(b,this.pp,a,c)}catch(g){p.logInfo(f.resolve(99),g),this.Dg.ri(this.Wm)}}},Ug:function(){try{return this.tn.Ea.Lightstreamer["P"+this.ls].lsPage}catch(b){return p.logDebug(f.resolve(103),b),null}},
$g:function(){try{this.tn.Gh();if(!this.tn.Ea)return p.logDebug(f.resolve(104),this),!1;var b=this.Ug();if(!b)return p.logDebug(f.resolve(105),this),!1;var a=b.j;if(!a)return p.logDebug(f.resolve(106),this),!1;var c=a.p;return null!=c&&c!=this.Wm?(p.logDebug(f.resolve(107),this),!1):!0}catch(g){return p.logDebug(f.resolve(108),g,this),!1}},Fm:function(b){try{return this._callSuperMethod(l,m.isTableSubscribed,[b])}catch(a){return p.logDebug(f.resolve(109),a),!1}},hn:function(a,f,k){this.Wm=a;this.Ce("pageCallback",
{Eo:a,u:f,Ta:k.Qg(),K:new b(k.K),ra:new c(k.ra),ea:new g(k.ea),status:k.xb(),ob:k.oe()})},Zr:function(b,a,c,f){this.na("tableCallback",{zb:b,Db:a,Fe:c,w:f})},Hr:function(b){this.na("addRequestSent",{w:b})},Lf:function(b,a,c){this.na("tableError",{bm:b,Nc:a,w:c})},bs:function(b,a,c,f,g){this.na("tableSubscription",{w:b,$x:a,wu:c,Zx:f,Fv:g})},cs:function(b){this.na("tableUnsubscription",{w:b})},ds:function(b,a){this.na("updatePage",{ju:b,YA:a})},$r:function(b,a,c){this.na("tableOverflow",{w:b,item:a,
gy:c})},Tb:function(b,a){this.na("endOfSnapshot",{w:b,item:a})},Sb:function(b,a){this.na("clearSnapshot",{w:b,item:a})},ue:function(b){this.na("messageDiscarded",{Da:b})},Vr:function(b,a,c){this.na("messageDenied",{Da:b,Uk:a,Nc:c})},If:function(b,a,c){this.na("messageError",{Da:b,Uk:a,Nc:c})},Ur:function(b){this.na("messageComplete",{Da:b})},Wr:function(b){this.na("messageOnNetwork",{Da:b})},oc:function(b){this.Ms("sessionReadyNotification",{a:b},b)},Pc:function(b){this.Ms("sessionEnd",{a:b},b)},
onStatusChange:function(b){this.na("statusChange",{status:b})},Jf:function(b,a){this.na("serverError",{bm:b,Nc:a})},Kr:function(b,a,c){this.Ce("configurationChange",{Gr:b,Fz:a,FB:c})},Pr:function(){this.Ce("engineDying")},Or:function(b){this.Ce("engineDeath",{hB:b})}};e(l,h);return l});
define("lsAf",["lsA"],function(h){return function(e,a){var d=a?e:[];d.Cc=[];a||(d[0]=parseInt(e[0]),d[1]=parseInt(e[1]));for(var c=2,g=e.length;c<g;c++)e[c]?-1==e[c].length?d[c]=h.og:(a||(d[c]=e[c].toString()),d.Cc.push(c-1)):(a||(d[c]=""===e[c]?"":null),d.Cc.push(c-1));return d}});
define("lsk",["lso","Inheritance","lsAf"],function(h,e,a){function d(a,g){this._callSuperConstructor(d,[a]);this.b=g}d.prototype={Ug:M("b"),$g:U(!0),Zr:function(a,g,b,f){this.b.g.xj(b,f,a,g)},Hr:function(a){this.b.g.ht(a)},Lf:function(a,g,b){this.b.g.eq(a,g,b)},bs:function(a,g,b,f,k){this.b.g.ft(a,g,b,f,k)},cs:E(),ds:function(c,g){this.b.g.yk(a(c,!0),g)},$r:function(a,g,b){this.b.g.yd(a,g,b)},Tb:function(a,g){this.b.g.Tb(a,g)},Sb:function(a,g){this.b.g.Sb(a,g)},
ue:function(a){this.b.q.hj(a)},Vr:function(a,g,b){this.b.q.gj(a,g,b)},If:function(a,g,b){this.b.q.ij(a,g,b)},Ur:function(a){this.b.q.ej(a)},Wr:function(a){this.b.q.jj(a)},oc:function(a){this.b.j.ck(a)},Pc:function(a){this.b.j.Ps(a)},onStatusChange:function(a){this.b.j.ok(a)},Jf:function(a,g){this.b.ak(a,g)},Kr:function(a,g,b){("lsK"==a?this.b.ea:"lsL"==a?this.b.ra:this.b.K).Y(g,b)},Pr:function(){this.b.j.Rm()},Or:function(a){this.b.j.re(a)}};e(d,h);return d});
define("lsg",["lsG","LoggerManager","lsA"],function(h,e,a){function d(b){return null==b?null:b.toString()}function c(b){var a={},c;for(c in b)0===c.indexOf("LS_")&&(a[c]=d(b[c]));return a}function g(b,a){this.U=b;this.Bd=a}var b=e.getLoggerProxy(a.Oa);g.prototype={toString:U("[Master EventBridge]"),oy:function(a){b.logDebug(e.resolve(110),this);this.Bd.au(a.Eo,parseInt(a.Fj),parseInt(a.yn))},wj:function(a){b.logDebug(e.resolve(111),this);this.Bd.Sq(parseInt(a.zb),d(a.Fe),parseInt(a.Db),
parseInt(a.kb),parseInt(a.tk),c(a))},pB:function(a){b.logDebug(e.resolve(112),this);this.Bd.pk(parseInt(a.kb),parseInt(a.w),parseInt(a.df))},oB:function(a){b.logDebug(e.resolve(113),this);a.w?this.Bd.si(parseInt(a.w)):this.Bd.Qp(parseInt(a.kb),d(a.Fe))},bd:function(a){b.logDebug(e.resolve(114),this);a.w?this.Bd.bd(parseInt(a.w),c(a)):this.Bd.zk(parseInt(a.kb),d(a.Fe),c(a))},cv:function(a){b.logDebug(e.resolve(115),this);this.Bd.ri(parseInt(a))},Ed:function(a){b.logDebug(e.resolve(116),this);this.U.Ed(c(a))},
aA:function(a){b.logDebug(e.resolve(117),this);this.U.Wj(d(a.Nc),h.$e(a.Zj),a.dh,h.$e(a.Se))},sv:function(a){b.logDebug(e.resolve(118),this);("lsK"==a.dp?this.U.ea:"lsL"==a.dp?this.U.ra:this.U.K).Y(d(a.Gz),a.Vt)},gi:function(){b.logDebug(e.resolve(119),this);this.U.vi()},hi:function(){b.logDebug(e.resolve(120),this);this.U.Wp()}};return g});
define("lsQ",[],function(){function h(e){this.As=e;this.Xj=!0;this.Se=100}h.prototype={Zw:function(){var e=this.Se;this.Se+=5E3;return e},toString:function(){return["[|DeleteStatus",this.Xj,this.As,this.Se,"]"].join("|")}};return h});define("lsW",["Executor"],function(h){function e(a,d){this.Ye=a;this.nt=this.kw?this.Ye.Hi:d?2*d:4E3}e.prototype={xd:function(a){a?this.be():h.addTimedTask(this.zd,this.nt+Number(this.Ye.Ad),this)},zd:function(){this.verifySuccess()||this.be()}};return e});
define("lsV",["Inheritance","lsW","ASSERT"],function(h,e,a){function d(a,g,b,f,k,e){this._callSuperConstructor(d,[a,e]);this.w=g;this.Fj=b;this.we=f;this.Au=k}d.prototype={verifySuccess:function(){return!this.we.Tx(this.w,this.Fj)},be:function(){this.we.bd(this.w,this.Au,this.nt)},rj:function(){a.fail();this.Kf(this.w,this.Fj)}};h(d,e);return d});
define("lsn","lsD EnvironmentStatus lsp lsk Executor lsG LoggerManager ASSERT lsg lsQ lsV lsA Helpers".split(" "),function(h,e,a,d,c,g,b,f,k,n,l,m,p){function q(b){this.s={};this.yr=1;this.sk={};this.ry=1;this.Bs=p.randomG();this.Yj={};this.ae={};this.gt=0;this.ye={};this.U=b;this.u=p.randomG(100)+1;this.rs=new h(this,new k(this.U,this),!0);this.Mu=c.addRepetitiveTask(this.Nu,5E3,
this);e.addBeforeUnloadHandler(this);e.addUnloadHandler(this)}var r=b.getLoggerProxy(m.Oa);q.prototype={toString:function(){return["[|PushPageCollectionHandler",this.u,"]"].join("|")},li:function(b,a){return-1==b?!0:this.qd(b)?a?this.ga(a):!0:!1},ga:function(b){return b==this.u},qd:function(a){return this.s[a]?this.s[a]:(r.logDebug(b.resolve(125)),null)},qm:function(b){return(b=this.qd(b))?b.qm():null},Jc:function(a){a=this.sk[a];return"undefined"==typeof a?(r.logDebug(b.resolve(126)),null):this.qd(a)},
au:function(c,f,g){var d=this.yr++,l=new k(this.U,this);c=new a(c,f,this,l,g);this.s[d]=c;r.logDebug(b.resolve(127),this);c.hn(d,this.u,this.U)},$t:function(a){var c=this.yr++;a=new d(this,a);this.s[c]=a;r.logDebug(b.resolve(128),this);return c},Qp:function(a,c){r.logDebug(b.resolve(129),this);a&&this.s[a]&&this.s[a].Lz(c)},Yq:function(a){delete this.sk[a];var f;if((f=this.ae[a])&&f.Xj){var g=f.Zw();f.Xj=!1;5E3<g&&this.wp(0);r.logDebug(b.resolve(130));c.addTimedTask(this.Az,g,this,[a,f.As])}},wp:function(a){var c=
this.U.Wc;c&&c.Cw(this.U.h.Kc())>a&&r.logWarn(b.resolve(124))},si:function(a){r.logDebug(b.resolve(131),this);var c=this.sk[a];c&&this.s[c]?this.s[c].Pj(a):(r.logError(b.resolve(121),this),f.fail());this.Yq(a)},zk:function(a,c,f){r.logDebug(b.resolve(132),this,f);a&&this.s[a]&&this.s[a].zk(c,f)},bd:function(a,c,f){r.logDebug(b.resolve(133),this,c);var k=++this.gt,d=g.aa({LS_table:a,LS_op:"reconf",LS_win_phase:k},c);this.ye[a]=k;c=new l(this.U.ra,a,k,this,c,f);this.U.h.cA(a,d,c)},Kf:function(a,b){this.ye[a]==
b&&delete this.ye[a]},Tx:function(a,b){return this.ye[a]&&this.ye[a]==b?!0:!1},Bp:function(a){delete this.ae[a];delete this.Yj[a];delete this.ye[a]},zp:function(){this.ae={};this.Yj={};this.gt=0;this.ye={}},ri:function(a){r.logDebug(b.resolve(134),this,a);if(this.s[a]){var c=this.s[a].Ie,f;for(f in c)this.si(f);this.s[a].ha();delete this.s[a]}},du:function(a){this.Yj[a]=!0},Pz:function(a){this.ae[a]&&(this.ae[a].Xj=!0)},Kx:function(a){return this.Yj[a]},Ay:function(a){var b=this.s,c;for(c in b)b[c].onStatusChange(a);
return!0},By:function(a,b){var c=this.s,f;for(f in c)c[f].Jf(a,b)},Sq:function(a,c,g,k,d,l){f.verifyOk(this.U.oe())||r.logError(b.resolve(122));d=this.s[k];if(!d)r.logError(b.resolve(123),this,k),f.fail();else if(this.U.oe()){var e;d.yx(c,g,a)?e=d.rm(c):(e=this.ry++,this.sk[e]=k,k=this.ew(l,e),d.Xh(e,c,k.add,g,a),this.ae[e]=new n(k.remove));r.logDebug(b.resolve(135));d.Zr(a,g,c,e)}},pk:function(a,b,c){3<=c&&this.wp(1);(a=this.s[a].Xw(b))&&this.U.h.bA(b,a,this,2<=c)},ew:function(a,b){this.Bs++;var c=
{LS_table:b,LS_req_phase:this.Bs,LS_win_phase:this.u};g.aa(a,c);return{add:g.aa(a,{LS_op:"add"}),remove:g.aa(c,{LS_op:"delete"})}},Er:function(a){var b=this.s;this.s={};for(var c in b)b[c].Or(a)},xy:function(){var a=this.s,b;for(b in a)a[b].Pr()},Nu:function(){for(var a in this.s)this.s[a].$g()||(r.logDebug(b.resolve(136),this),this.ri(a))},oc:function(){this.zp();var a=this.s;this.u++;for(var b in a)a[b].oc(this.u)},Pc:function(){this.zp();var a=this.s;this.u++;for(var b in a)a[b].Pc(this.u)},Az:function(a,
b){this.ae[a]&&this.U.oe()&&this.U.h.dA(a,b,this)},ha:function(){c.stopRepetitiveTask(this.Mu);e.removeBeforeUnloadHandler(this);e.removeUnloadHandler(this)},unloadEvent:function(){this.Er(!1)},preUnloadEvent:function(){this.xy()}};q.prototype.unloadEvent=q.prototype.unloadEvent;q.prototype.preUnloadEvent=q.prototype.preUnloadEvent;return q});
define("lsl",["LoggerManager","BrowserDetection","Helpers","lsA"],function(h,e,a,d){var c=e.isProbablyFX(1.5,!0)?10:50,g=c,b=0,f=0,k=0,n=null,l=null,m=null,p=h.getLoggerProxy(d.Rd);return{ca:function(){g=c;k=f=b=0;m=l=n=null},mx:function(){n=b;l=f;m=k;var c=a.getTimeStamp();k||(k=c);6E4<=c-k&&(b=0,k=c);f&&1E3>c-f&&b++;f=c},Tj:function(){l!=f&&(b=n,f=l,k=m)},sp:function(){if(0!=f){if(!g)return!1;if(b>=g)return p.logError(h.resolve(137)),g=0,!1}return!0}}});
define("lsAH",["Environment"],function(h){function e(a,d,c,g){this.AA(a);this.Yf(d);this.setData(c);this.fk(g)}e.Mt="GET";e.Qh="POST";e.prototype={toString:function(){return["[",this.bc,this.Rh,this.xc,this.rg,"]"].join("|")},AA:function(a){for(;a&&"/"==a.substring(a.length-1);)a=a.substring(0,a.length-1);this.bc=a},Yf:function(a){for(;a&&"/"==a.substring(0,1);)a=a.substring(1);this.Rh=a},fk:function(a){this.rg=a||e.Qh},setData:function(a){this.xc=a||null},Bi:function(a){this.xc?this.Vu(a)||(this.xc+=
a):this.setData(a)},Vu:function(a){return this.xc&&-1<this.xc.indexOf(a)},getFile:M("Rh"),Ua:function(){return this.Rh?this.bc+"/"+this.Rh:this.bc},getData:M("xc"),bx:function(){return this.xc?this.Ua()+"?"+this.xc:this.Ua()},fr:function(){return!(0==this.bc.indexOf("http://")||0==this.bc.indexOf("https://")||0==this.bc.indexOf("file:///"))},Lx:function(a,d){if(!h.isBrowser())return!1;if(this.fr())return h.isWebWorker()?location.hostname==a:document.domain==a;if(d){if(!this.hr(d))return!1;if("file:"==
d)return""==a}a=a.replace(".",".");return RegExp("^https?://(?:[a-z][a-z0-9-]+.)*"+a+"(?:/|$|:)","i").test(this.bc)},hr:function(a){return h.isBrowser()&&a.indexOf(":")==a.length-1?this.fr()?location.protocol==a:0==this.bc.indexOf(a):!1},va:function(){if(!h.isBrowser())return!0;var a=h.isWebWorker()?location.hostname:document.domain;return!this.Lx(a,location.protocol)},ua:function(){return h.isBrowser()?!this.hr(location.protocol):!0}};e.Wt=new e("about:blank");return e});
define("lsO",[],function(){function h(e,a,d,c,g){this.Tc=e;this.us=a;this.vs=c;this.Td=d;this.Be=g}h.Nd=1;h.Pe=2;h.Lk=3;h.Ne=4;h.cd=5;h.Le=6;h.Nk=7;h.Me=8;h.Mo=9;h.prototype={toString:function(){return["[|ControlRequest",this.vs,this.Td,this.Be,this.Tc,"]"].join("|")},getKey:M("vs")};return h});
define("lsa",["lsAH","lsO","lsG"],function(h,e,a){function d(){}d.prototype={toString:U("[Encoder]"),qx:function(a){var g=new h;g.Yf((a.pd()==e.Ne?"msg":a.pd()==e.cd?"send_log":a.pd()==e.Me?"heartbeat":"control")+this.Rg());g.fk(h.Qh);return g},bq:function(a,g,b){for(b=b?"":"\r\n";0<a.getLength();){var f=a.Gi(),k=f.us,d=f.Td;if(d==e.Nd&&k.bh())a.shift();else if(d!=e.Pe||k.gu())if(k&&k.verifySuccess&&k.verifySuccess())a.shift();else return a=f.Tc,d==e.Ne?b+this.Xl(a,k,g):d==e.Le?
b+this.Ul(a,k,g):d==e.Me?b+this.Vl(a,k,g):d==e.cd?b+this.Wl(a,k,g):b+this.Tl(a,k,g);else k.rj(),a.shift()}return null},expand:function(a,g){var b="";if(a)for(var f in a)f!==g&&(b+=f+"\x3d"+a[f]+"\x26");return b},Kg:function(a,g){var b=this.expand(a);return b+=this.expand(g)},cq:function(a,g,b){var f=this.expand(a,b),f=f+this.expand(g,b);a[b]?f+=b+"\x3d"+a[b]:g&&(f+=b+"\x3d"+g[b]);return"LS_unq\x3d"+f.length+"\x26"+f},Fo:u(),Rg:U(".js"),jm:U(0),mm:U(2),Tl:function(c,g,b,f){f=a.aa(f,{LS_session:b});
return this.Kg(c,f)},Ul:function(a,g,b,f){return this.Kg(a,f)},Vl:function(a,g,b,f){return this.Kg(a,f)},Wl:function(c,g,b,f){return b?(f=a.aa(f,{LS_session:b}),this.Kg(c,f)):this.Kg(c)},Xl:function(a,g,b,f){return this.cq(a,f,"LS_message")}};return d});
define("lsb",["lsa","Inheritance","lsG"],function(h,e,a){function d(){}var c=1,g={Xl:"encodeMessageRequest",Tl:"encodeControlRequest",Ul:"encodeDestroyRequest",Vl:"encodeHeartbeatRequest",Wl:"encodeLogRequest"},g=a.getReverse(g);d.prototype={Xl:function(b,c,k,e){e=a.aa(e,{LS_session:k});c.Co?e.LS_msg_prog||b.LS_msg_prog||(e=a.aa(e,{LS_ack:"",LS_msg_prog:c.qa.zv(c.jb)})):(c.qv(!0),e=a.aa(e,{LS_ack:"",LS_msg_prog:c.qa.ur(c.jb)}));return this._callSuperMethod(d,g.encodeMessageRequest,[b,
c,k,e])},Tl:function(b,f,k,e){e=a.aa(e,{LS_unique:c++});return this._callSuperMethod(d,g.encodeControlRequest,[b,f,k,e])},Ul:function(b,f,k,e){e=a.aa(e,{LS_unique:c++});return this._callSuperMethod(d,g.encodeDestroyRequest,[b,f,k,e])},Vl:function(b,f,k,e){e=a.aa(e,{LS_unique:c++});return this._callSuperMethod(d,g.encodeHeartbeatRequest,[b,f,k,e])},Wl:function(b,f,k,e){e=a.aa(e,{LS_unique:c++});return this._callSuperMethod(d,g.encodeLogRequest,[b,f,k,e])},expand:function(a,c){var g="";if(a)for(var d in a)g=
d!==c?g+(d+"\x3d"+a[d]+"\x26"):g+(d+"\x3d"+encodeURIComponent(a[d])+"\x26");return g},cq:function(a,c,g){a=this.expand(a,g);return a+=this.expand(c,g)}};e(d,h);return d});
define("lsAI",["lsb"],function(h){function e(){for(var a in{pa:!0})this.Sh=a;this.W=e}function a(){return!1}function d(){return!0}var c=new h;e.Oo="LS_container\x3dlsc\x26";e.fc=function(c,b){for(var f in b)c[f]=!0===b[f]?d:!1===b[f]?a:b[f]};e.fc(e,{ta:!1,va:!1,ua:!1,dc:!1,ec:!1,rf:!1});e.prototype={Z:E(),bk:function(a,b,c,k,d,l){this.W.ec()?a.Bi("LS_eng\x3d"+l+"\x26"):a.Bi(e.Oo);return this.pa(a,b,c,k,d)},pa:U(!1),ie:function(){return c}};return e});
define("lsf",["lsa","Inheritance"],function(h,e){function a(){}a.prototype={toString:U("[WSEncoder]"),jm:function(a){return a.length+2},Rg:U("")};e(a,h);return a});
define("lsAK","lsAI Inheritance EnvironmentStatus Executor Environment LoggerManager lsG ASSERT lsf lsA".split(" "),function(h,e,a,d,c,g,b,f,k,n){function l(a){this._callSuperConstructor(l);this.k=!1;this.$a=this.yj=this.Xa=this.zi=null;this.ve=this.jh=!1;this.xh=null;this.pn=!1;this.NB=a;this.W=l}function m(a){a=a.toLowerCase();a=0==a.indexOf("http://")?a.replace("http://","ws://"):a.replace("https://","wss://");if(q)return new q(a,r);if("undefined"!=typeof WebSocket)return new WebSocket(a,
r);if("undefined"!=typeof MozWebSocket)return new MozWebSocket(a,r);l.Kl();return null}var p=g.getLoggerProxy(n.ab),q=null;c.isNodeJS()&&(q=b.qj("faye-websocket").Client);var r="js.lightstreamer.com",t=new k,s=!1;l.Kl=function(){s=!0};l.Wz=function(){s=!1};l.xx=function(){return s};h.fc(l,{ta:function(){if(s)return!1;var a=null;"undefined"!=typeof WebSocket?a=WebSocket:"undefined"!=typeof MozWebSocket&&(a=MozWebSocket);return a&&2==a.prototype.CLOSED?!1:q||a},va:!0,ua:function(){return!c.isBrowser()||
"http:"==location.protocol||"file:"==location.protocol},dc:!0,ec:!1,rf:!0});l.prototype={toString:function(){return["[|WebSocketConnection",this.k,this.Xa,this.zi,this.Dm(),"]"].join("|")},Z:function(){if(this.$a){p.logDebug(g.resolve(142));this.Xa=null;if(this.$a)try{this.$a.close(1E3)}catch(a){p.logDebug(g.resolve(143),a)}this.Wa()}},oz:function(a,b,c,f,k){if(this.k)p.logError(g.resolve(138));else if(s)return!1;this.ve=!1;this.xh=a.bc;this.Xa=b;try{this.$a=m(this.xh)}catch(l){return p.logDebug(g.resolve(144),
l),!1}d.addTimedTask(this.pz,6E3,this,[this.Xa]);var e=this;this.$a.onmessage=function(a){e.jn(a,b,c)};this.$a.onerror=function(){e.Py(b,f)};this.$a.onclose=function(a){e.Hy(a,b,k,f)};this.$a.onopen=function(){e.Wy(b)};return!0},pz:function(a){if(a==this.Xa&&this.$a&&!this.pn)try{p.logDebug(g.resolve(145)),this.$a.close(1E3)}catch(b){p.logDebug(g.resolve(146))}},pa:function(a,b){if(this.k)return p.logError(g.resolve(139)),null;if(s)return!1;this.yj=a;this.zi=b;p.logDebug(g.resolve(147),a.Ua());this.Dm()&&
this.Ks(b);return!0},wx:function(a){return f.verifyOk(this.xh)?0==this.xh.indexOf(a):(p.logError(g.resolve(140)),!1)},Dm:function(){return null!=this.$a&&1==this.$a.readyState},sg:function(a,b){if(!this.Dm())return null;b&&(this.tt(b),a.Bi(h.Oo));p.isDebugLogEnabled()&&p.logDebug(g.resolve(148),a.getFile());try{this.$a.send(a.getFile()+"\r\n"+a.getData())}catch(c){return p.logDebug(g.resolve(149),c),!1}return!0},Ks:function(a){var b=this.sg(this.yj,a);f.verifyOk(null!==b)||p.logError(g.resolve(141),
a);b&&(this.k=!0,this.NB.Dv(this.Xa))},tt:G("zi"),jn:function(b,c,f){this.Xa!=c||a.isUnloaded()||(p.isDebugLogEnabled()&&p.logDebug(g.resolve(150),b.data),this.jh=!0,d.executeTask(f,[b.data,this.zi]))},Py:function(b,c){this.Xa!=b||a.isUnloaded()||(p.logDebug(g.resolve(151)),this.ve|=!this.jh,d.executeTask(c,["wsc.unknown",this.Xa,!0,this.ve]))},Wy:function(b){this.Xa!=b||a.isUnloaded()||(this.pn=!0,p.logDebug(g.resolve(152)),this.yj&&this.Ks())},Hy:function(b,c,f,k){this.Xa!=c||a.isUnloaded()||(b=
b?b.code:-1,p.logDebug(g.resolve(153),b,this.jh),1E3==b||1001==b?(d.modifyAllTaskParams(f,[this.Xa,!0]),d.addPackedTimedTask(f,300),this.Wa()):(this.ve|=!this.jh,f=this.Xa,this.Wa(),d.executeTask(k,["wsc."+b,f,!0,this.ve])))},Wa:function(){this.pn=this.k=!1;this.yj=this.Xa=null;this.jh=!1;this.xh=this.$a=null},ie:function(){return t}};e(l,h);return l});
define("lsR",["Inheritance","lsW"],function(h,e){function a(d,c,g,b){this._callSuperConstructor(a,[b]);this.Ot=d;this.Ut=g;this.d=c}a.prototype={verifySuccess:function(){return!this.d.ga(this.Ut)},be:function(){this.d.Ii(this.Ot)},kw:function(){return this.Ye.Hi},rj:E()};h(a,e);return a});
define("lsr","EnvironmentStatus Helpers LoggerManager Executor lsl lsA lsR lsO lsq ASSERT BrowserDetection lsAK".split(" "),function(h,e,a,d,c,g,b,f,k,n,l){function m(a,b,c,f,g){this.kl=d.packTask(this.fz,this);this.jl=d.packTask(this.ln,this);this.il=d.packTask(this.kn,this);this.I=a;this.ge=b;this.a=1;this.ma=0;this.Ka=100*e.randomG(100);this.c=c;this.M=f;this.qc=c.qc;this.e=c.e;this.sb=c.sb;this.$=null;this.X=c.X;this.Jb=c.Qg();
this.mr=this.hg=this.Wf=0;this.De=this.Cd=this.Km=null;this.reset();g&&(this.Ve=g.Ve,this.pb=g.pb,this.Hd=g.Hd,this.Ka=g.Ka,this.Wf=g.Wf,this.$j=g.$j,this.ym=g.ym)}var p=a.getLoggerProxy(g.Rd),q=a.getLoggerProxy(g.Oe);m.Tk=1;m.Od=2;m.Po=3;m.Ro=4;m.Qo=5;m.At=7;m.Ht=8;m.SB=9;m.VB=10;m.Gt=6;m.Rk=11;m.prototype={reset:function(){this.Ve=0;this.pb=this.Hd=null;this.Wf=0;this.cg=this.Zc=this.dl=!1;this.jo="";this.Xc=!1},Bc:function(a){var b=this.a;this.a=a;this.ma++;a=this.ma;this.a!=b&&this.c.bB(this.M);
return a==this.ma},Wi:function(){this.Ka++},ga:function(a){return this.Ka==a},lm:function(){var a=this.a;return 1==a?g.$b:11==a?g.pg:2==a?g.CONNECTING:3==a||4==a||5==a?g.Gb+this.Dq():10==a?g.Qe:g.Gb+this.zq()},k:function(){return 1!=this.a&&2!=this.a&&11!=this.a},Sx:function(){return 2==this.a||7==this.a||5==this.a},er:function(){return 3==this.a||8==this.a||9==this.a||10==this.a},Qx:function(){return!this.I},Kc:function(){return this.k()?this.Hd:this.$j},Vg:M("pb"),Hb:function(b,f){var g=1!=this.a&&
11!=this.a?!1:!0;if(!c.sp())return this.Qa("mad",g,!0),!1;!1==g&&this.Qa("new."+(f||""),!1,!1);p.logDebug(a.resolve(166),this);this.reset();this.os();this.sb.Y("serverSocketName",null);this.sb.Y("serverInstanceAddress",null);this.$j=this.sb.wh;this.ym=this.e.Mn;this.Wi();return!0},Wd:function(){if(!c.sp())return this.Qa("madb",!1,!0),!1;this.Ve++;n.verifyOk(6==this.a||4==this.a||1==this.a)||p.logError(a.resolve(154));if(1==this.a){if(!this.Bc(4))return!1;this.os();this.ke()}this.Wi();p.logDebug(a.resolve(167),
this);return!0},Cs:function(a,b,c){this.M=a;this.Zc||(this.Xc=!1,2==this.a||11==this.a||1==this.a?this.c.bf(this.M,b,c):6==this.a||4==this.a?this.c.mo(this.M,b,c):(this.Zc=!0,this.cg=c,this.jo=b,this.Ii(b)))},Tz:function(b){this.M=b;this.Xc||(n.verifyOk(2!=this.a&&11!=this.a&&1!=this.a)||p.logError(a.resolve(155)),6==this.a||4==this.a?this.c.Zs(this.M):(this.Xc=!0,this.Ii("slow")))},os:function(){1!=this.a&&11!=this.a||this.qc.Dz();this.I&&this.ge&&this.qc.Es()},ke:E(),Qa:function(b,c,f){1!=this.a&&
(2!=this.a&&11!=this.a)&&(this.c.vj(this.Kc()),c||this.$z(b),this.M=this.c.bz(this.M,f),this.sb.Y("serverSocketName",null),this.sb.Y("serverInstanceAddress",null),p.logDebug(a.resolve(168),this,b));this.$f(!f)},$f:function(a){this.Wi();this.reset();this.Bc(a?11:1)},nv:function(b){if(this.Bc(3==this.a?4:6)){this.Wi();var c=b;this.I&&(b>this.e.Ad||this.e.Y("pollingMillis",b),c=this.Gw());n.verifyOk(6==this.a||4==this.a)||p.logError(a.resolve(156));4!=this.a&&c&&0<c?(p.logDebug(a.resolve(169)),this.ud(c)):
this.zd(this.ma)}},zd:function(b,c){if(b==this.ma){var f="timeout."+this.a+"."+this.Ve;2==this.a||3==this.a||7==this.a||10==this.a||11==this.a?this.Xc||this.Zc?this.c.bf(this.M,f+".switch",this.cg):!this.I||this.ge?this.Hb(this.pb,f):this.c.bf(this.M,f,!1):5==this.a?(this.hg--,this.Xc||this.Zc?this.c.bf(this.M,f+".switch",this.cg):0<this.hg||this.ge?this.Hb(this.pb,f):this.I?this.c.bf(this.M,f+".switch",this.cg):this.Qc(this.M,f)):6==this.a?(this.I&&this.qc.vB(c),this.Wd("loop")):4==this.a?this.Wd("loop1"):
8==this.a?this.zB():9==this.a?this.yB():(p.logError(a.resolve(157),this),n.fail())}},Un:function(){return this.ge||this.c.Un()},Qc:function(a,b){var c=this.Un();c&&this.Qa("giveup",1!=this.a&&11!=this.a?!1:!0,!0);this.c.Qc(a,b,c)},Ja:function(b,c,f,g){8==this.a||10==this.a||9==this.a||7==this.a||g?(this.Qa(b,c,!1),this.zd(this.ma)):2==this.a||3==this.a||5==this.a?this.Zc&&!this.ge||l.isProbablyAndroidBrowser()?this.c.bf(this.M,this.jo+".error",this.cg):(this.Qa(b,c,!1),this.ud(this.e.En)):(p.logError(a.resolve(158),
b,this),n.fail())},cn:function(b){this.$&&this.$.vq&&this.$.vq();8==this.a||9==this.a||10==this.a||3==this.a?this.Zc?this.c.mo(this.M,this.jo,this.cg):this.Xc?this.c.Zs(this.M):this.nv(b):(p.logError(a.resolve(159),this),n.fail())},Q:function(){2==this.a?this.Bc(3)&&this.xB():3!=this.a&&(7==this.a||5==this.a||9==this.a||10==this.a||8==this.a?this.Bc(8)&&this.AB():(p.logError(a.resolve(160),this),n.fail()))},Hl:function(){c.mx();this.De=e.getTimeStamp();n.verifyOk(1==this.a||11==this.a)||p.logError(a.resolve(161));
if(!this.Bc(2))return!1;this.ud(this.e.Ze);this.$=this.c.Aq()},yg:function(){this.De=e.getTimeStamp();n.verifyOk(6==this.a||4==this.a)||p.logError(a.resolve(162),this);if(!this.Bc(6==this.a?7:5))return!1;this.ud(this.Sv());this.$=this.c.Aq()},ud:function(a){return d.addTimedTask(this.zd,a,this,[this.ma,a])},AB:function(){if(0<this.e.uf){var a=e.getTimeStamp();50>a-this.mr&&this.Km?d.modifyTaskParam(this.Km,0,this.ma):(this.mr=a,this.Km=this.ud(this.e.uf))}},zB:function(){this.Bc(9)&&this.ud(this.e.mk)},
yB:function(){this.Bc(10)&&this.ud(this.e.Cd)},xB:function(){n.verifyValue(this.a,3)||p.logError(a.resolve(163));this.ud(this.e.mk)},Sv:function(){return this.I?this.e.Ze+this.e.Ui:0<this.hg&&null!=this.Cd?this.Cd:this.e.Ze},Gw:function(){if(4==this.a)return this.e.Ad;var a=this.e.Ad;if(this.De)var b=e.getTimeStamp()-this.De,a=a>b?a-b:0;return a},xu:function(){this.De||(p.logError(a.resolve(164),this),n.fail(),this.Cd=null);var b=e.getTimeStamp()-this.De,c=this.e.Ze;this.Cd=(b>c?c:b)+c},fz:function(a,
b){!h.isUnloaded()&&this.ga(b)&&""!==a&&(null==a?(c.Tj(),this.Ja("nullresp")):this.$.ap(b,a))},ln:function(a,b,f,g){!h.isUnloaded()&&this.ga(b)&&(c.Tj(),this.Ja("failure."+a,!1,f,g))},kn:function(a){this.ga(a)&&(c.Tj(),this.Ja("wrongend"))},fq:function(){this.Ja("eval")},cz:function(){this.Zc||this.Xc||this.c.dz(this.M)},jz:function(){q.isDebugLogEnabled()&&q.logDebug(a.resolve(170));this.Q();8==this.a&&(this.hg=1)},az:function(b){q.isDebugLogEnabled()&&q.logDebug(a.resolve(171),b);this.Wf=b;this.e.Y("maxBandwidth",
b)},Ny:function(){q.isDebugLogEnabled()&&q.logDebug(a.resolve(172));this.Ja("error41",!0)},Ry:function(){q.isDebugLogEnabled()&&q.logDebug(a.resolve(173));this.Q()},Vy:function(b,c,f,g,d,l){q.isDebugLogEnabled()&&q.logDebug(a.resolve(174));var e=this.$j;null==c||this.ym||(e=c=k.Ru(e,c));e!=this.Hd&&(this.c.vj(this.Hd),this.Hd=e,this.c.gn(this.Hd));g&&(this.I?this.e.Y("idleMillis",g):this.e.Y("keepaliveMillis",g));2==this.a?this.pb=b:(n.verifyValue(this.pb,b)||p.logError(a.resolve(165)),this.xu());
this.qc.aB(this.I);this.Q();3==this.a?(this.c.oc(f),this.sb.Y("serverSocketName",d),this.sb.Y("serverInstanceAddress",this.Hd),this.dl&&(this.ii(),this.dl=!1)):this.c.Yr(f);l&&this.c.Qy(l)},Sy:function(b){q.isDebugLogEnabled()&&q.logDebug(a.resolve(175));this.cn(b)},iz:function(){c.Tj();this.Ja("syncerror",!0)},Lr:function(b){q.isDebugLogEnabled()&&q.logDebug(a.resolve(176),b);this.Qa("end",!0,!0)},nn:function(a,b){this.Q();this.c.nn(a,b)},Tb:function(a){this.Q();this.c.Tb(a)},Sb:function(a){this.Q();
this.c.Sb(a)},yd:function(a){this.Q();this.c.yd(a)},dn:function(a,b){this.Q();this.c.dn(a,b)},fn:function(a,b){this.Q();this.c.fn(a,b)},en:function(a,b,c,f){this.Q();this.c.en(a,b,f,c)},ue:function(a,b){this.Q();this.c.ue(a,b)},If:function(a,b,c,f){this.Q();this.c.If(a,b,f,c)},Lf:function(a,b,c){this.Q();this.c.Lf(a,b,c)},Jf:function(a,b){this.Lr(b);this.c.Jf(a,b)},onUnsubscription:function(a){this.Q();this.c.onUnsubscription(a)},onSubscription:function(a,b,c,f,g){this.Q();this.c.onSubscription(a,
b,c,f,g)},Kf:function(a,b){this.Q();this.c.Kf(a,b)},Ii:function(c){p.logDebug(a.resolve(177),this);var g=k.nw(c,this.qc.hm());c=new b(c,this,this.Ka,this.e);this.X.zc(this.pb,g,f.Nk,c)},$z:function(b){p.logDebug(a.resolve(178),this);b=k.gw(this.pb,b);this.X.zc(this.pb,b,f.Le,null,this.Kc())},ii:function(){1!=this.a&&11!=this.a&&(2==this.a?this.dl=!0:0>=this.Wf&&0>=this.e.Mc||this.Wf!=this.e.Mc&&this.X.zc(null,k.aw(this.e),f.Lk,null))}};return m});
define("lsAJ",[],function(){function h(){this.wn=!1;this.Hj=0;this.Io=!1}h.prototype={jq:function(e,a){if(!a&&!this.Jx(e))return null;0==this.Hj&&"/*"==e.substring(0,2)&&(this.Io=!0);var d=-1;if(a&&!this.Io)d=e.length;else{d=e.lastIndexOf(";\n");if(0>d)return null;d+=2}var c=e.substring(this.Hj,d);0==this.Hj&&this.Io&&(c=c.substring(2,c.length));this.Hj=d;return c},co:function(e){return this.jq(e,!1)},bo:function(e){return this.jq(e,!0)},Jx:function(e){if(this.wn)return!0;var a=e.indexOf("setPhase("),
d=e.indexOf("setPhase(ph)");if(-1<a){if(-1>=d)return this.wn=!0;a=e.indexOf("setPhase(",a+1);if(-1<a&&e.lastIndexOf(";\n")>a)return this.wn=!0}return!1}};return h});
define("lsAN","lsAI Inheritance Executor BrowserDetection EnvironmentStatus lsAJ Environment LoggerManager lsG lsA".split(" "),function(h,e,a,d,c,g,b,f,k,n){function l(){this._callSuperConstructor(l);this.k=!1;this.Bb=this.oa=this.gc=this.t=null;this.W=l}function m(b){return function(){a.executeTask(b)}}var p=f.getLoggerProxy(n.ab),q=b.isBrowser()?2:3,r;b.isNodeJS()&&(r=k.qj("xmlhttprequest").XMLHttpRequest);var t=null;h.fc(l,{ta:function(){if(null!==
t)return t;d.isProbablyIE(9,!0)?t=!1:"undefined"!=typeof XMLHttpRequest?"undefined"!=typeof(new XMLHttpRequest).withCredentials&&(t=!0):!b.isBrowser()&&r&&(t=!0);null===t&&(t=!1);return t},rf:function(){return!d.isProbablyOldOpera()&&!d.isProbablyPlaystation()},va:!0,ua:!0,dc:!1,ec:!1});l.prototype={toString:function(){return["[|XSXHRConnection",this.k,this.t,this.gc,"]"].join("|")},Z:function(){if(this.k){p.logDebug(f.resolve(179));this.t=null;if(this.oa)try{this.oa.abort()}catch(a){p.logDebug(f.resolve(180))}this.Wa()}},
pa:function(b,c,k,d,l){if(this.k)return null;this.oa=r?new r:new XMLHttpRequest;this.Bb=new g;k=a.packTask(this.jn,this,[c,k,l]);this.oa.onreadystatechange=m(k);this.t=c;this.gc=null;p.logDebug(f.resolve(181),b.Ua());try{this.oa.open(b.rg,b.Ua(),!0),this.oa.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),this.oa.send(b.getData()),this.k=!0}catch(e){return p.logDebug(f.resolve(182),e),!1}return!0},jn:function(b,g,k){this.t!=b||c.isUnloaded()||(b=null,this.qf()&&g&&(3==this.oa.readyState?
b=this.Bb.co(this.oa.responseText):4==this.oa.readyState&&(b=this.Bb.bo(this.oa.responseText)),p.isDebugLogEnabled()&&p.logDebug(f.resolve(183),b),null!=b&&a.executeTask(g,[b,this.t])),4==this.oa.readyState&&(!this.qf()&&g&&a.executeTask(g,[null,this.t]),p.logDebug(f.resolve(184)),this.Wa(),""==b&&k&&a.addTimedTask(this.hh,100,this,[this.t,k])))},hh:function(b,c){a.executeTask(c,[b])},Wa:function(){this.k=!1;this.t=null;this.oa&&(delete this.oa.onreadystatechange,delete this.oa)},qf:function(){try{if(null===
this.gc){if(this.oa.readyState<q)return!1;this.gc=200<=this.oa.status&&299>=this.oa.status}return this.gc}catch(a){return p.logDebug(f.resolve(185),a),!1}}};e(l,h);return l});
define("lsAE","lsAI Inheritance Executor EnvironmentStatus lsAJ LoggerManager lsA".split(" "),function(h,e,a,d,c,g,b){function f(){this._callSuperConstructor(f);this.k=!1;this.za=this.Bb=this.t=null;this.W=f}function k(b){return function(){a.executeTask(b)}}var n=g.getLoggerProxy(b.ab),l=null;h.fc(f,{ta:function(){return null!==l?l:l="undefined"!=typeof XDomainRequest?!0:!1},rf:!0,va:!0,ua:!1,dc:!1,ec:!1});f.prototype={toString:function(){return["[|IEXSXHRConnection",
this.k,this.t,"]"].join("|")},Z:function(){if(this.k){n.logDebug(g.resolve(186));this.t=null;if(this.za)try{this.za.abort()}catch(a){n.logDebug(g.resolve(187))}this.Wa()}},pa:function(b,f,d,l,e){if(this.k)return null;this.za=new XDomainRequest;this.Bb=new c;e=a.packTask(this.Vz,this,[f,d,e]);var h=a.packTask(this.op,this,[f,l,"xdr.err"]);l=a.packTask(this.op,this,[f,l,"xdr.timeout"]);d=a.packTask(this.qs,this,[f,d,!1]);this.za.onload=k(e);this.za.onerror=k(h);this.za.ontimeout=k(l);this.za.onprogress=
k(d);this.t=f;n.logDebug(g.resolve(188),b.Ua());try{this.za.open(b.rg,b.Ua()),this.za.send(b.getData()),this.k=!0}catch(x){return n.logDebug(g.resolve(189),x),!1}return!0},op:function(b,c,f){this.t!=b||d.isUnloaded()||(n.logDebug(g.resolve(190)),a.executeTask(c,[f,b]))},qs:function(b,c,f){this.t==b&&!d.isUnloaded()&&c&&(b=f?this.Bb.bo(String(this.za.responseText)):this.Bb.co(String(this.za.responseText)),n.isDebugLogEnabled()&&n.logDebug(g.resolve(191),b),null!=b&&a.executeTask(c,[b,this.t]))},Vz:function(b,
c,f){this.t!=b||d.isUnloaded()||(this.qs(b,c,!0),this.Wa(),n.logDebug(g.resolve(192)),f&&a.addTimedTask(this.hh,100,this,[f,this.t]))},hh:function(b,c){a.executeTask(b,[c])},Wa:function(){this.k=!1;this.Bb=this.t=null;this.za&&(this.za.onload=null,this.za.onerror=null,this.za.ontimeout=null,this.za=this.za.onprogress=null)}};e(f,h);return f});
define("lsAA",["lsAI","Inheritance","Executor"],function(h,e,a){function d(){this._callSuperConstructor(d)}h.fc(d,{ta:!1,va:!1,ua:!1,dc:!1,ec:!1});d.prototype={pa:function(c,g,b){b&&a.addTimedTask(this.xd,1E3,this,[b,g]);return!0},xd:function(c,g){a.executeTask(c,["",g])}};e(d,h);return d});
define("lse",["lsb","Inheritance"],function(h,e){function a(){}a.prototype={jm:U(15),mm:function(a){return a?encodeURIComponent(a).length-a.length:0},Fo:function(a){return"LS_querystring\x3d"+encodeURIComponent(a)}};e(a,h);return a});define("lsd",["lse","Inheritance"],function(h,e){function a(){}a.prototype={toString:U("[LegacyEncoder]"),Rg:U(".html"),Fo:u()};e(a,h);return a});
define("lsAB","lsAI lsAA Inheritance IFrameHandler Executor Environment LoggerManager lsd lsA lsG".split(" "),function(h,e,a,d,c,g,b,f,k,n){function l(a){this._callSuperConstructor(l);a&&(this.target=n.Vj(a),d.getFrameWindow(a,!0));this.k=!1;this.W=l;this.bj=0}var m=new f,p=b.getLoggerProxy(k.ab);h.fc(l,{ta:function(){return g.isBrowserDocument()},va:!0,ua:!0,dc:!0,ec:!0});l.prototype={toString:function(){return["[|FormConnection",this.target,
"]"].join("|")},Z:function(){p.logDebug(b.resolve(193));this.k=!1;this.bj++},pa:function(a,f,g,k){if(this.k)return null;this._callSuperMethod(l,this.Sh,[a,f,g,k]);try{this.bj++;var d=this.Mv();if(!d)return!1;p.logDebug(b.resolve(194),a.Ua());d.Hc.method=a.rg;d.Hc.target=this.target;d.Hc.action=a.Ua();d.Jj.value=a.getData();d.Hc.submit();c.addTimedTask(this.av,1E3,this,[d.Hc,this.bj]);return this.k=!0}catch(e){return p.logDebug(b.resolve(195),e),!1}},Mv:function(){var a=document.getElementsByTagName("BODY")[0];
if(!a)return null;var b={};b.Hc=document.createElement("FORM");try{b.Hc.acceptCharset="utf-8"}catch(c){}b.Hc.style.display="none";b.Jj=document.createElement("INPUT");b.Jj.type="hidden";b.Jj.name="LS_querystring";b.Hc.appendChild(b.Jj);a.appendChild(b.Hc);return b},av:function(a,b){a.parentNode.removeChild(a);b==this.bj&&(this.k=!1)},ie:function(){return m}};a(l,e);return l});
define("lsAC","lsAI lsAA lsAH Inheritance IFrameHandler Executor EnvironmentStatus Environment lsAB LoggerManager lsd lsA lsG".split(" "),function(h,e,a,d,c,g,b,f,k,n,l,m,p){function q(a){this._callSuperConstructor(q);this.target=p.Vj(a);this.Ac=0;this.k=!1;this.Ji=null;c.getFrameWindow(this.target,!0);this.W=q}var r=new l,t=n.getLoggerProxy(m.ab);h.fc(q,{ta:function(){return f.isBrowserDocument()},va:!1,ua:!1,dc:!0,ec:!0,rf:!0});
q.prototype={toString:function(){return["[|FrameConnection",this.k,this.target,this.Ac,this.Ji,"]"].join("|")},Pt:function(b){b==this.Ac&&(this.Ac++,this.k&&(this.cp(this.Ac,a.Wt),this.k=!1))},Z:function(){t.logDebug(n.resolve(196));var a=++this.Ac;g.addTimedTask(this.Pt,0,this,[a])},cp:function(a,f,g,k,d){if(a==this.Ac&&!b.isUnloading()){this._callSuperMethod(q,this.Sh,[f,g,k,d]);this.Ac++;t.logDebug(n.resolve(197),f.Ua());try{c.getFrameWindow(this.target).location.replace(f.bx()),this.k=!0}catch(l){return t.logDebug(n.resolve(198),
l),!1}return!0}},dy:function(a,b,c,f){this.Ji||(this.Ji=new k(this.target));this.Ac++;if(a=this.Ji.pa(a,b,c,f))this.k=!0;return a},pa:function(b,c,f,k){if(b.method==a.Qh)return this.dy(b,c,f,k);var d=++this.Ac;g.addTimedTask(this.cp,0,this,[d,b,c,f,k]);return!0},ie:function(){return r}};d(q,e);return q});
define("lsy","LoggerManager lsAC lsAH lsG Executor EnvironmentStatus IFrameHandler Global Environment Inheritance Dismissable lsA Helpers".split(" "),function(h,e,a,d,c,g,b,f,k,n,l,m,p){function q(a){this.path=a;this.ug=p.randomG();this.status=k.isBrowserDocument()&&(window.ActiveXObject||"undefined"!=typeof XMLHttpRequest)?2:-1;this.Zh=++t;this.od="LS_AJAXFRAME_"+this.Zh;this.initTouches();this.pu()}var r=h.getLoggerProxy(m.ab),t=0,s={};q.Qv=function(a){s[a]||(s[a]=
new q(a),s[a].pa(!1));return s[a]};q.prototype={toString:function(){return["[|AjaxFrameHandler",this.status,"]"].join("|")},pu:function(){var a=this;f.sa(this.Zh,"LS_a",function(b){a.Gy(b)},"A")},clean:function(){f.rl(this.Zh,"LS_a","A");var a=this.path;s[a]&&delete s[a]},ca:function(a){this.ug++;this.status=a?3:0},pa:function(b){if(-1!=this.status&&(r.logDebug(h.resolve(199)),!this.td())){this.ca(b);b=this.ug;d.dr()&&r.logDebug(h.resolve(200));var f="id\x3d"+this.Zh+"\x26";d.um()||(f+="domain\x3d"+
document.domain+"\x26");f=new a(this.path,"xhr.html",f);(new e(this.od)).pa(f);c.addTimedTask(this.Jv,1E4,this,[b]);c.addTimedTask(this.gx,2E3,this,[b])}},Gy:function(){g.isUnloaded()||1==this.status||(r.logDebug(h.resolve(201)),this.status=1)},Jv:function(a){this.ug!=a||this.td()||(r.logDebug(h.resolve(202)),this.pa(!0))},gx:function(a){this.ug!=a||this.td()||(r.logDebug(h.resolve(203)),this.status=4)},disable:function(){this.status=-1;this.ug++},td:function(){return 1===this.status},$q:function(){return-1===
this.status||3===this.status||4===this.status},eA:function(a,c,f){if(this.$q())return!1;if(1!==this.status)return null;r.logDebug(h.resolve(204),a);var g;try{g=!1!==b.getFrameWindow(this.od).hC(a,c,f)}catch(k){g=!1,r.logDebug(h.resolve(205),k)}!1===g&&this.disable();return g}};n(q,l,!0,!0);return q});
define("lsAL","lsAI Inheritance lsy EnvironmentStatus Executor Environment LoggerManager lsA".split(" "),function(h,e,a,d,c,g,b,f){function k(){this._callSuperConstructor(k);this.error=this.response=this.gc=this.sender=this.t=null;this.k=!1;this.a=0;this.LS_x=this.Oy;this.wd=null;this.W=k}var n=b.getLoggerProxy(f.ab);h.fc(k,{ta:function(){return g.isBrowserDocument()&&(window.ActiveXObject||"undefined"!=typeof XMLHttpRequest)},va:!1,ua:!1,dc:!0,ec:!1});k.prototype=
{toString:function(){return["[|XHRConnection",this.k,this.a,this.t,"]"].join("|")},pa:function(c,f,g,k){this.wd=a.Qv(c.bc);if(this.wd.$q())return this.wd.dismiss(),!1;if(!this.wd.td()||this.k)return null;this.wd.touch();this.t=f;this.gc=null;this.response=g;this.error=k;this.a++;var d=this,e=this.a;this.LS_h=function(){d.Xr(e)};this.k=!0;n.logDebug(b.resolve(206),c.Ua());return this.wd.eA(c.Ua(),c.getData(),this)},Z:function(){if(this.k){this.Wa();n.logDebug(b.resolve(207));try{this.sender&&this.sender.abort&&
this.sender.abort()}catch(a){n.logDebug(b.resolve(208),a)}this.ni()}},qf:function(){try{if(null===this.gc){if(2>this.sender.readyState)return!1;this.gc=200<=this.sender.status&&299>=this.sender.status}return this.gc}catch(a){return n.logDebug(b.resolve(209),a),!1}},Xr:function(a){d.isUnloaded()||(a!=this.a||!this.sender)||4!=this.sender.readyState&&"complete"!=this.sender.readyState||(a=null,this.qf()&&(a=this.sender.responseText,a=a.toString(),"/*"==a.substring(0,2)&&(a=a.substring(2,a.length-2))),
n.isDebugLogEnabled()&&n.logDebug(b.resolve(210),a),this.Wa(),this.response&&c.executeTask(this.response,[a,this.t]),this.ni())},Oy:function(){d.isUnloaded()||(myFrameHandler.disable(),n.logDebug(b.resolve(211)),this.Wa(),this.error&&c.executeTask(this.error,["xhr.unknown",this.t]),this.ni())},ni:function(){try{delete this.sender.onreadystatechange}catch(a){n.logDebug(b.resolve(212),a)}try{delete this.sender}catch(c){n.logDebug(b.resolve(213),c)}this.response=this.error=null;this.wd&&this.wd.dismiss()},
Wa:function(){this.k=!1;this.a++}};e(k,h);return k});
define("lsAM","lsAI lsAL Inheritance EnvironmentStatus Executor BrowserDetection lsAJ Environment LoggerManager lsA".split(" "),function(h,e,a,d,c,g,b,f,k,n){function l(){this._callSuperConstructor(l);this.Bb=null;this.W=l}var m=k.getLoggerProxy(n.ab),p=null;h.fc(l,{ta:function(){return null!==p?p:p=f.isBrowserDocument()?g.isProbablyIE()?!1:"undefined"!=typeof XMLHttpRequest?"undefined"!=typeof(new XMLHttpRequest).addEventListener:!1:!1},
rf:function(){return!g.isProbablyOldOpera()},va:!1,ua:!1,dc:!0,ec:!1});l.prototype={toString:function(){return["[|XHRStreamingConnection",this.k,this.a,this.t,"]"].join("|")},pa:function(a,c,f,g,d){a=this._callSuperMethod(l,this.Sh,[a,c,f,g]);m.logDebug(k.resolve(214));a&&(this.Bb=new b,this.Hp=d);return a},Xr:function(a){!d.isUnloaded()&&(a==this.a&&this.sender)&&(a=null,this.qf()&&this.response&&(3==this.sender.readyState?a=this.Bb.co(this.sender.responseText):4==this.sender.readyState&&(a=this.Bb.bo(this.sender.responseText)),
m.isDebugLogEnabled()&&m.logDebug(k.resolve(215),a),null!=a&&c.executeTask(this.response,[a,this.t])),4==this.sender.readyState&&(!this.qf()&&this.response&&c.executeTask(this.response,[null,this.t]),this.Wa(),this.ni(),m.isDebugLogEnabled()&&m.logDebug(k.resolve(216)),""==a&&this.Hp&&c.addTimedTask(this.hh,100,this,[this.t])))},hh:function(a){c.executeTask(this.Hp,[a])}};a(l,e);return l});
define("lsE",["Executor","IFrameHandler","Global","BrowserDetection","lsG"],function(h,e,a,d,c){function g(f){this.Zl=f;this.mb=!1;this.Pm=document.domain;this.Up=this.Ei=!1;this.mj=-1;this.$p=f=c.Vj(this.Gq()+"_"+this.Pm);h.addTimedTask(this.Hu,3E3,this);var g="about:blank";this.pj()&&(this.mj=++b,g=a.sa(this.mj,"EQCallback_"+f,this.ex(),"Q"),g="javascript:(function(){document.open();"+("document.domain\x3d'"+document.domain+"';")+("parent."+g+"(window);")+"document.close();})()");try{this.jc=
e.getFrameWindow(f,!0,g),this.my()?h.addTimedTask(this.Pl,1,this):this.pj()||this.Pl()}catch(d){}}var b=0;g.prototype={Fq:U(null),Mh:U(!0),ha:function(){h.addTimedTask(e.disposeFrame,0,e,[this.$p]);null!==this.mj&&a.rl(this.mj,"EQCallback_"+this.$p,"Q");this.Up=!0},bg:function(){return this.Ei||this.Up?!1:document.domain==this.Pm?!0:this.Ym()?!1:!0},td:M("mb"),Pl:function(){var a=this.Fq();this.pj()?this.jc.document.write("\x3cscript\x3edocument.domain\x3d'"+this.Pm+"';\x3c/script\x3e"):d.isProbablyOldOpera()&&
!a||this.jc.document.open();a&&this.jc.document.write(a);this.pj()||d.isProbablyOldOpera()&&!a||this.jc.document.close();this.mb=this.Mh()},ex:function(){var a=this;return function(b){a.jc=b;a.Pl()}},pj:function(){return d.isProbablyIE()&&!c.um()},Ym:function(){return d.isProbablyIE()||d.isProbablyOldOpera()||d.isProbablyKonqueror(4.4,!0)},my:function(){return d.isProbablyKonqueror()},Rt:function(a,b){this.Ei=!0;this.Zl&&(this.Zl.xe=[a,b],h.executeTask(this.Zl))},Hu:function(){this.mb||this.Rt(5)}};
return g});
define("lsAG","LoggerManager Executor lsE Inheritance Dismissable lsA Helpers".split(" "),function(h,e,a,d,c,g,b){function f(a,b){this.Tt=a;this._callSuperConstructor(f,[b]);this.Fg=null;this.initTouches()}function k(a,b,c){try{a.appendChild(b),b.src=c}catch(f){}}var n=h.getLoggerProxy(g.ab);f.prototype={toString:U("[JSONPFrame]"),ou:function(a,b){try{var c=this.bw();if(!c)return c;var f=this.jc.document.createElement("script");f.id=a;f.type="text/javascript";e.addTimedTask(k,50,
null,[c,f,b])}catch(g){return n.logDebug(h.resolve(217),g),!1}return!0},ev:function(a){var b=this.jc.document.getElementById(a);e.addTimedTask(function(){b&&b.parentNode&&b.parentNode.removeChild(b)},4E3)},clean:function(){this.ha()},bw:function(){if(this.Fg)return this.Fg;this.Fg=this.jc.document.getElementsByTagName("BODY")[0];if(!this.Fg){if(this.df)return 2E3<b.getTimeStamp()-this.df?!1:null;this.df=b.getTimeStamp();return null}return this.Fg},Gq:function(){return"LS6__JF_"+this.Tt}};d(f,a);d(f,
c,!0,!0);return f});define("lsc",["lse","Inheritance"],function(h,e){function a(){}a.prototype={toString:U("[JSONPEncoder]")};e(a,h);return a});
define("lsAF","lsAI lsAA Inheritance Helpers Environment lsAG Executor LoggerManager lsc lsA".split(" "),function(h,e,a,d,c,g,b,f,k,n){function l(a){this._callSuperConstructor(l);this.originalTarget=a;this.target=a+d.randomG();this.Kb=new g(this.target,b.packTask(this.Ar,this));this.yi=0;this.Fn="script_"+d.randomG();this.df=null;this.lp=!1;this.oq=!0;this.W=l}var m,p;for(p in{bk:!0})m=p;var q=f.getLoggerProxy(n.ab),r=/(^|&)LS_domain=[^&]*/,
t=new k;h.fc(l,{ta:function(){return c.isBrowserDocument()},va:!0,ua:!0,dc:!0,ec:!0});l.prototype={toString:function(){return["[|JSONPConnection",this.target,this.Fn,this.df,"]"].join("|")},Ar:function(){this.lp=!0},bk:function(a,b,c,f,g,k){(this.oq||10==this.yi)&&a.Bi("LS_force_head\x3dtrue\x26");this.oq=!1;var d=a.getData(),d=d.replace(r,"");0==d.indexOf("\x26")&&(d=d.substring(1));a.setData(d);return this._callSuperMethod(l,m,[a,b,c,f,g,k])},pa:function(a,c,k,e){this.Z();if(this.lp)return!1;if(!this.Kb.bg()&&
this.Kb.Ym()||10==this.yi)this.Kb.ha(),this.yi=0,this.target=this.originalTarget+d.randomG(),this.Kb=new g(this.target,b.packTask(this.Ar,this));if(!this.Kb.td())return null;this.yi++;q.logDebug(f.resolve(218),a.Ua());var h=a.Ua(),n=a.getData(),h=this.Kb.ou(this.Fn,h+"?"+n);if(!h)return h;this.Kb.touch();this._callSuperMethod(l,this.Sh,[a,c,k,e]);return!0},Z:function(){this.Kb.dismiss();if(this.Kb.bg()||!this.Kb.Ym()){q.logDebug(f.resolve(219));try{this.Kb.ev(this.Fn)}catch(a){}}},ie:function(){return t}};
a(l,e);return l});
define("lsz","LoggerManager lsAN lsAE lsAM lsAL lsAC lsAF lsAB lsAA lsAK lsA".split(" "),function(h,e,a,d,c,g,b,f,k,n,l){function m(a,b){this.Qm=a;this.vu=b;this.Gj=-1}function p(){return!1}var q=h.getLoggerProxy(l.ab);m.aC=function(){n.ta=p};m.bC=function(){e.ta=p;a.ta=p;d.ta=p;c.ta=p};m.$B=function(){f.ta=p;g.ta=p};m.Yo=[];l=[e,a,d,g];for(var r=0;r<l.length;r++)l[r].rf()&&
m.Yo.push(l[r]);m.Bt=[e,a,c,b,f];m.lg=[e,a,c,b,g];m.Cx=function(a){return a.W===g};m.jC=function(a){return a.W.prototype.xd!=k.prototype.xd};m.pf=function(a,b,c,f,g){q.logDebug(h.resolve(220),a);if(!a.ta())return q.logDebug(h.resolve(221)),!1;if(b&&!a.va())return q.logDebug(h.resolve(222)),!1;if(c&&!a.dc())return q.logDebug(h.resolve(223)),!1;if(f&&!a.ua())return q.logDebug(h.resolve(224)),!1;if(b=g){a:{for(b=0;b<g.length;b++)if(g[b]==a){a=!0;break a}a=!1}b=!a}if(b)return q.logDebug(h.resolve(225)),
!1;q.logDebug(h.resolve(226));return!0};m.prototype={wm:function(){return this.Gj<this.Qm.length-1},Kq:function(b,c,f){for(q.logDebug(h.resolve(227),b,c,f);this.wm();){this.Gj++;var g=this.Qm[this.Gj];if((!this.vu||g!==a)&&this.pf(g,b,c,f))return g}return null},pf:function(a,b,c,f){return m.pf(a,b,c,f,this.Qm)},yc:function(){q.logDebug(h.resolve(228));this.Gj=-1}};return m});
define("lsAD",["lsAC","BrowserDetection","IFrameHandler","Executor"],function(h,e,a,d){function c(){this.oj=!1}c.prototype={Bz:function(c){(this.oj=c===h)&&a.getFrameWindow("LS6__HOURGLASS",!0)},dB:function(){d.addTimedTask(this.eB,900,this)},eB:function(){if(this.oj&&(this.oj=!1,!e.isProbablyAKhtml()&&!e.isProbablyIE(6,!0)&&!e.isProbablyIE(9,!1)))try{window.open("about:blank","LS6__HOURGLASS",null,!0)}catch(a){}}};return c});
define("lss","lsA Inheritance lsr lsz lsAD lsAH lsG lsq Executor LoggerManager BrowserDetection EnvironmentStatus lsAE".split(" "),function(h,e,a,d,c,g,b,f,k,n,l,m,p){function q(a,b,c,f,g){this._callSuperConstructor(q,arguments);this.Xu=new d(d.lg);this.Te=this.De=this.nj=this.ic=this.Pa=null}function r(a){a&&a!=D||(D++,x=s)}var t={Hb:"createSession",Wd:"bindSession",$f:"shutdown",yg:"bindSent",Q:"onEvent"},t=b.getReverse(t),s=1,x=
1,D=1,y=n.getLoggerProxy(h.Rd),C=n.getLoggerProxy(h.Oe);q.prototype={zq:function(){return this.I?h.Pd:h.kg},Dq:function(){return this.I?h.Pd:h.mg},toString:function(){return["[|SessionHTTP",this.I,this.ge,this.a,this.ma,this.Ka,this.hg,this.pb,this.Zc,this.Xc,"]"].join("|")},Hb:function(a,b){if(!this._callSuperMethod(q,t.createSession,[a,b]))return!1;this.Il(this.ma,b,a);return!0},Il:function(a,c,f){if(a==this.ma){if(b.dr()){if(0>=x){y.logDebug(n.resolve(230));k.addTimedTask(this.Il,3E3,this,[a,f,
"offline"]);return}x--;0==x&&k.addTimedTask(r,2E4,null,[D])}a=this.hq(f,this.Il,c);null!==a&&(a?this.Hl():!1===a&&y.logWarn(n.resolve(229)))}},Wd:function(a){if(!this._callSuperMethod(q,t.bindSession,[a]))return!1;this.Te&&this.Te.Z();this.Ev();this.bi(this.ma,a);return!0},Ev:function(){if(!m.isLoaded()&&(null===this.e.lk&&(l.isProbablyAndroidBrowser()||l.isProbablyApple())||!0===this.e.lk)){var b=this.Ve,c=this;m.addOnloadHandler(function(){k.addTimedTask(function(){b==c.Ve&&c.a==a.Ht&&c.Ii("spinfix")},
c.e.Xn)})}},bi:function(a,b){if(a==this.ma){this.ic||(this.ic=this.I?new d(d.lg):new d(d.Yo,!this.e.Go));this.nj||this.I||(this.nj=new c);var f=this.hq(null,this.bi,b);null!==f&&(f?this.yg():!1!==f||this.I||this.Qc(this.M,"streaming.unavailable"))}},ke:function(){this.a!=a.Tk&&(this.a!=a.Od&&this.a!=a.Rk)&&(0<this.e.Sj&&!this.I?this.X.$A(this.e.Sj):this.X.ct())},$f:function(a){this._callSuperMethod(q,t.shutdown,[a]);this.Te&&this.Te.Z()},Ng:function(b,c,k){var d=this.a==a.Tk||this.a==a.Rk,e=this.Kc(),
e=new g(e+h.Ok),l=!e.ua()&&!e.va();b=f.Ew(this.Ka,this.pb,this.e,this.sb,d,this.I,b,c,this.qc.hm(),k,l);e.setData(b);C.logDebug(n.resolve(231),e);return e},hq:function(b,c,e){var l=this.a==a.Tk||this.a==a.Rk,h=!l,q=this.Ng(b,e,!0);this.X.al(null);this.Pa&&this.Pa.W==p&&(this.Pa=null);var m=l?this.Xu:this.ic;this.Pa&&!m.pf(this.Pa.W,q.va(),this.e.Xi(),q.ua())&&(m.yc(),this.Pa=null);for(var r=!1,t=(this.I?"LS6__POLLFRAME":"LS6__PUSHFRAME")+"_"+this.Jb;(this.Pa||m.wm())&&!1===r;){if(!this.Pa){r=m.Kq(q.va(),
this.e.Xi(),q.ua());if(!r)return m.yc(),!1;this.Pa=new r(t)}q.fk(d.Cx(this.Pa)&&h?g.Mt:g.Qh);q.Yf(f.Mq(l,this.I,this.Pa.ie().Rg()));r=this.Pa.bk(q,this.Ka,this.kl,this.jl,this.il,this.Jb);if(null===r)return y.logDebug(n.resolve(232)),k.addTimedTask(c,50,this,[this.ma,e,b]),null;!1===r?this.Pa=null:(y.logDebug(n.resolve(233)),m.yc(),this.Te=this.Pa)}return r},yg:function(){this._callSuperMethod(q,t.bindSent);this.Xm()&&this.nj.Bz(this.Te.W)},Xm:function(){return!this.I},Q:function(){this.a==a.Qo&&
r();!this.Xm()||this.a!=a.At&&this.a!=a.Qo||this.nj.dB();this._callSuperMethod(q,t.onEvent)}};e(q,a);return q});
define("lsu","lsA lsr lss Inheritance lsAK lsz lsq Executor LoggerManager ASSERT lsAH lsG".split(" "),function(h,e,a,d,c,g,b,f,k,n,l,m){function p(a,b,c,f,g){this._callSuperConstructor(p,arguments);this.S=null;this.Yb=1;this.Mf=null;this.jf=!1}var q={Hl:"createSent",zd:"onTimeout",cn:"onLoop",ln:"onStreamError",kn:"onStreamEnd",Ja:"onErrorEvent",$f:"shutdown"},q=m.getReverse(q),r=k.getLoggerProxy(h.Rd);p.prototype={toString:function(){return["[|SessionWS",
this.I,this.ge,this.a,this.ma,this.Ka,this.Yb,this.hg,this.pb,this.S,this.Zc,this.Xc,"]"].join("|")},Yd:G("Yb"),zq:function(){return this.I?h.qg:h.Ph},Dq:function(){return h.mg},qn:function(){n.verifyValue(this.Yb,1)||r.logError(k.resolve(234));this.Mf=this.Ka;this.S=new c(this);var a=this.Kc(),a=new l(a+h.Ok);if(g.pf(c,a.va(),this.e.Xi(),a.ua())&&(r.logDebug(k.resolve(241)),this.S.oz(a,this.Mf,this.kl,this.jl,this.il)))return this.X.al(this.S),this.Yd(2),!0;this.Yd(5);return!1},Hl:function(){this._callSuperMethod(p,
q.createSent);this.e.Rl&&!this.jf&&this.qn()},bi:function(a,g){if(a==this.ma)if(this.jf=!1,1==this.Yb?this.qn():2!=this.Yb||this.S.wx(this.Kc())||(r.logWarn(k.resolve(239)),this.S.Z(),this.Yd(1),this.qn()),6==this.Yb)this.Qc(this.M,"ws.early.closed");else if(5==this.Yb)this.Qc(this.M,"ws.notgood");else if(3==this.Yb)c.Kl(),this.Qc(this.M,"ws.early.openfail");else{var d=this.Ng(null,g,!1),e=!1;d.Yf(b.Mq(!1,this.I,this.S.ie().Rg()));var l=!1;2==this.Yb?(e=this.S.bk(d,this.Ka,this.kl,this.jl,this.il,
this.Jb),l=!0):4==this.Yb?e=this.S.sg(d,this.Ka):(n.fail(),r.logError(k.resolve(235),this));null===e?(r.logDebug(k.resolve(242)),f.addTimedTask(this.bi,50,this,[a,g])):!1===e?(r.logWarn(k.resolve(240)),this.Qc(this.M,"ws.false")):l||(r.logDebug(k.resolve(243)),this.yg())}},Dv:function(a){this.Mf==a&&(r.logDebug(k.resolve(244)),this.yg(),this.Yd(4))},zd:function(a,b){a==this.ma&&(this.a==e.Od&&(this.jf=!0),this._callSuperMethod(p,q.onTimeout,[a,b]))},cn:function(a){this._callSuperMethod(p,q.onLoop,
[a]);this.S&&this.S.tt(this.Ka)},ln:function(a,b,c,f){c?b==this.Mf&&this._callSuperMethod(p,q.onStreamError,[a,this.Ka,c,f]):(this.a==e.Od&&(this.jf=!0),this._callSuperMethod(p,q.onStreamError,arguments))},kn:function(a,b){b?a==this.Mf&&(this.a==e.Ft||this.a==e.Od||this.a==e.Po?this.Ja("ws.early.end",!1,!0):(n.verifyDiffValue(this.a,e.Ro)||r.logError(k.resolve(236),this),this._callSuperMethod(p,q.onStreamEnd,[this.Ka,b]))):(this.a==e.Od&&(this.jf=!0),this._callSuperMethod(p,q.onStreamEnd,arguments))},
Ja:function(a,b,f,g){f?(n.verifyDiffValue(this.Yb,1)||r.logError(k.resolve(237),this),g?this.Yd(3):this.Yd(6),this.a==e.Ft||this.a==e.Od||this.a==e.Po?r.logDebug(k.resolve(245),this):this.a==e.Ro?(r.logDebug(k.resolve(246),this),g&&c.Kl(),this.Qc(this.M,"ws.error."+a)):this.I&&this.a==e.Gt?(n.verifyNotOk(g)||r.logError(k.resolve(238),this),r.logDebug(k.resolve(247),this),this.Qa(a,b,!1),this.zd(this.ma)):this._callSuperMethod(p,q.onErrorEvent,arguments)):(this.a==e.Od&&(this.jf=!0),this._callSuperMethod(p,
q.onErrorEvent,arguments))},$f:function(a){this._callSuperMethod(p,q.shutdown,[a]);this.S&&(this.Mf=null,this.S.Z(),this.S=null,this.X.al(null));this.Yd(1)},Xm:U(!1),ke:function(){this.X.ct()}};d(p,a);return p});
define("lsm",["Global","LoggerManager","EnvironmentStatus","ASSERT","lsA"],function(h,e,a,d,c){function g(a,b){this.nB=b;this.xv(a)}var b=e.getLoggerProxy(c.Oe),f=!1;g.XA=function(a){f=a};g.prototype={Xd:function(a){b.logDebug(e.resolve(249),a);this.h=a},xv:function(a){var b=this;h.sa(a,"LS_e",function(a,c,f,g,d,k,e,h){b.Yy(a,c,f,g,d,k,e,h)});h.sa(a,"LS_t",E());h.sa(a,"LS_u",function(a,c,f){b.es(a,c,f)});h.sa(a,"LS_v",function(a,c){b.es(a,c,!0)});h.sa(a,"LS_o",function(a,c){b.yd(a,c)});
h.sa(a,"LS_n",function(a,c){b.Tb(a,c)});h.sa(a,"LS_s",function(a,c){b.Sb(a,c)});h.sa(a,"LS_l",function(a,c,f,g){b.Ja(a,c,f,g)});h.sa(a,"LS_w",function(a,c,f,g,d,k,e){b.Iy(a,c,f,g,d,k,e)});h.sa(a,"setTimeout",function(a,b){setTimeout(a,b)});h.sa(a,"alert",function(a){"undefined"!=typeof alert?alert(a):"undefined"!=typeof console&&console.log(a)})},pc:function(c,g,d,h){var p=!f&&!a.isUnloaded()&&null!=this.h;p&&c&&(p&=this.h.ga(c));p&&g&&(p&=this.nB.ga(g));p&&!h&&(p=d?p&this.h.Sx():p&this.h.er());b.isDebugLogEnabled()&&
b.logDebug(e.resolve(250),p);return p},Yy:function(a,b,c,f,g,d,e,h){if(this.pc(b,null,1==a,3==a||4==a))if(1==a)this.h.Vy(c,f,d,g,e,h);else if(2==a)this.h.Sy(c);else if(3==a)this.h.iz();else if(4==a){a=30;if(null!=c){a=c;if(41==a){this.h.Ny();return}if(0<a&&30>a||39<a)a=39}this.Ja(a,b,null,"The session has been forcibly closed by the Server")}else 5==a?this.h.az(c):this.h.Lr("Unsupported Server version")},es:function(a,b,c){2>b.length?this.pc(a)&&this.h.Ry():this.pc(null,a)&&this.h.nn(b,c||!1)},Tb:function(a,
b){this.pc(null,a)&&this.h.Tb(b)},Sb:function(a,b){this.pc(null,a)&&this.h.Sb(b)},yd:function(a,b){this.pc(null,a)&&this.h.yd(b)},Ty:function(a,c,f,g){if(this.pc())if(d.verifyValue(f.substring(0,3),"MSG")||b.logError(e.resolve(248),f),f=f.substr(3),39==a)for(a=parseInt(g),c=parseInt(c),a=c-a+1;a<=c;a++)this.h.ue(f,a);else 38==a?this.h.ue(f,c):0>=a?this.h.en(f,a,g,c):this.h.If(f,a,g,c)},Ja:function(a,b,c,f){null!=c&&isNaN(c)?this.Ty(a,b,c,f):null!=c?this.pc(null,b)&&this.h.Lf(c,a,f):this.pc(b,null,
null,!0)&&this.h.Jf(a,f)},Iy:function(a,c,f,g,d,h,r){if(this.pc(null,4==a||5==a||9==a?null:c))if(4==a)this.h.dn(f,c);else if(5==a)this.h.fn(f,c);else if(8==a)this.h.onUnsubscription(f);else if(6==a)this.h.onSubscription(f,g,d,h+1,r+1);else 9==a?this.h.Kf(f,c):b.logDebug(e.resolve(251),a)}};return g});
define("lsU",["lsO"],function(h){function e(a,d,c){this.Kd=d;this.Td=c;this.qa=a}e.prototype={bh:function(){var a=this.qa.Jc(this.Kd);return a?a.Fm(this.Kd):!0},gu:function(){return this.qa.Kx(this.Kd)},xd:function(){if(this.Td==h.Nd){var a=this.qa.Jc(this.Kd);a&&a.Hr(this.Kd);this.qa.du(this.Kd)}else this.Td==h.Pe&&this.qa.Pz(this.Kd)},rj:function(){this.qa.Bp(this.Kd)}};return e});
define("lsv",["LoggerManager","Global","Helpers","ASSERT","lsA"],function(h,e,a,d,c){function g(a,b){this.Oj=0;this.Ia=null;this.Xg=!1;this.e=a;this.d=null;this.tu(b)}var b=h.getLoggerProxy(c.Oe),f=h.getLoggerProxy(c.Rd);g.prototype={toString:function(){return["[","lsv",this.Ia,this.Oj,0.5,7E3,"]"].join("|")},Dx:function(a){return null!=this.Ia&&this.Ia>a},Xd:G("d"),hm:function(){return null!=this.Ia&&0<this.Ia?Math.round(this.Ia):null},Es:function(){this.Ia=null;this.Xg=
!1},Dz:function(){this.Xg=!1},vB:function(a){this.mt(a)},jB:function(a,c){b.logDebug(h.resolve(255));this.d&&this.d.ga(a)&&(d.verifyOk(this.d.er())||b.logError(h.resolve(252)),this.d.Qx()&&(this.mt(1E3*c)?this.e.Wn&&this.d.cz():this.d.jz()))},tu:function(a){var b=this;e.sa(a,"LS_s",function(a,c){b.jB(a,c)})},aB:function(b){b||this.Es();this.Oj=a.getTimeStamp()},mt:function(b){var c=a.getTimeStamp();if(!this.Oj)return!0;b=c-this.Oj-b;if(null==this.Ia)return this.Ia=b,f.logDebug(h.resolve(256)),!1;
if(2E4<b&&b>2*this.Ia&&(this.Xg=!this.Xg))return f.logInfo(h.resolve(253)),7E3<this.Ia;this.Ia=0.5*this.Ia+0.5*b;if(60>this.Ia)return this.Ia=0,f.logDebug(h.resolve(257)),!1;if(this.Dx(7E3))return f.logInfo(h.resolve(254)),!0;f.logDebug(h.resolve(258));return!1}};return g});
define("lsP",["LoggerManager","lsO","ASSERT","lsA"],function(h,e,a,d){function c(a){this.Cb=[];this.keys={};this.ai=a;this.iy=0}var g=h.getLoggerProxy(d.ng);c.prototype={toString:function(){return["[|ControlRequestBatch",this.ai,this.Cb.length,"]"].join("|")},gp:function(a,c){this.keys[a]=c;this.Cb.push(a)},Ue:function(b,c){var d=b.Td;if(d==e.Ne||d==e.cd||d==e.Me){if(this.ai!=d)return g.logError(h.resolve(259),this),a.fail(),!1;this.gp(this.iy++,b);return!0}if(this.ai!=
e.Nd)return g.logError(h.resolve(260),this),a.fail(),!1;var n;switch(d){case e.Lk:n="C";break;case e.Nk:n="F";break;case e.Mo:n="X"+b.getKey();break;default:n=b.getKey()}var l=this.keys[n];g.logDebug(h.resolve(264),this,n,b);if(l){if(d==e.Lk||d==e.Nk){c||(g.logDebug(h.resolve(265)),this.ho(n,b));return}if(d==e.Pe){l.Be?(g.logDebug(h.resolve(266)),c||this.ho(n,b)):l.Td==e.Pe?g.logDebug(h.resolve(267)):(g.logDebug(h.resolve(268)),a.verifyNotOk(c)||g.logError(h.resolve(261),this),c||this.Oz(n));return}if(d==
e.Le){for(;l&&b.Be!=l.Be;)g.logDebug(h.resolve(269)),n+="_",l=this.keys[n];if(l){g.logDebug(h.resolve(270));return}}else{c||(g.logDebug(h.resolve(271)),this.ho(n,b));return}}g.logDebug(h.resolve(272));this.gp(n,b)},getLength:function(){return this.Cb.length},ho:function(a,c){this.keys[a]=c},Cn:function(a){if(this.Cb.length<=a)return g.logError(h.resolve(262)),null;var c=this.Cb[a];this.Cb.splice(a,1);a=this.keys[c];delete this.keys[c];return a},Oz:function(a){if(!this.keys[a])return g.logError(h.resolve(263)),
null;for(var c=0;c<this.Cb.length;c++)if(this.Cb[c]==a)return this.Cn(c)},shift:function(){return this.Cn(0)},pop:function(){return this.Cn(this.Cb.length-1)},vf:function(){return this.pm(this.Cb.length-1)},Gi:function(){return this.pm(0)},pm:function(a){return 0>=this.Cb.length?null:this.keys[this.Cb[a]]},pd:M("ai")};return c});
define("lsN","lsO lsP LoggerManager lsAH Executor lsz lsA ASSERT".split(" "),function(h,e,a,d,c,g,b,f){function k(){this.a=this.Tc=this.Ec=this.Aa=null}function n(a,b,c){this.ic=new g(g.Bt);this.xm=this.ui=this.dj=this.Gl=this.Sm=null;this.sh=this.Tf=0;this.a=this.status=this.f=1;this.Kh=0;this.Ra=this.o=null;this.qa=a;this.sb=b;this.Ta=c;this.S=null;this.yc()}var l=a.getLoggerProxy(b.ng),m={1:"IDLE",2:"STAND BY",3:"WAITING RESP"};
n.prototype={toString:function(){return["[|ControlConnectionHandler",m[this.status],this.o,this.sh,"]"].join("|")},EA:function(b){this.sh=b;l.logDebug(a.resolve(290),this)},$A:function(b){this.Tf=b;l.logInfo(a.resolve(280),this);1==this.status&&this.Ls(this.f)},Ls:function(b){1==this.status&&(this.f==b&&0!=this.Tf)&&(l.logDebug(a.resolve(291),this),this.zc(null,"",h.Me))},ct:function(){l.logInfo(a.resolve(281),this);this.Tf=0},Z:function(){l.logDebug(a.resolve(292));this.Ra&&this.Ra.Z()},fa:function(a){this.f++;
1==a&&0<this.Tf&&c.addTimedTask(this.Ls,this.Tf,this,[this.f]);this.status=a},yc:function(){l.logDebug(a.resolve(293),this);this.sh=0;this.Sm=new e(h.Ne);this.Gl=new e(h.Nd);this.xm=new e(h.Me);this.S=null;this.Tf=0;this.dj||(this.dj=new e(h.cd));this.ui||(this.ui=new e(h.Nd));this.Qj=[this.Sm,this.Gl,this.dj,this.ui,this.xm];this.a++;var b=this.o?this.o.pd():null;null!==b&&b!==h.Le&&b!==h.cd?(f.verifyDiffValue(this.status,1)||l.logError(a.resolve(273)),this.Z(),this.o=null,this.fa(1),this.Sa(!1,
"reset1")):null===b&&(f.verifyValue(this.status,1)||l.logError(a.resolve(274)),f.verifyValue(this.o,null)||l.logError(a.resolve(275)),this.Sa(!1,"reset2"))},al:function(b){b?l.logDebug(a.resolve(294),this):this.S&&l.logDebug(a.resolve(295),this);this.S=b},zc:function(a,b,f,g,d){c.addTimedTask(this.bu,0,this,[this.a,a,b,f,g,d])},nl:function(a,b){return b==h.Le||b==h.cd?!0:this.a===a},ip:function(a,b){a==h.Ne?this.Sm.Ue(b):a==h.cd?this.dj.Ue(b):a==h.Le?this.ui.Ue(b):a==h.Me?this.xm.Ue(b):this.Gl.Ue(b)},
bu:function(b,c,f,g,d,e){this.nl(b,g)&&(l.logInfo(a.resolve(282),this,f),b=new h(f,d,g,c,e),this.ip(g,b),1==this.status?this.Sa(!0,"add"):l.logDebug(a.resolve(296),this))},Sa:function(b,f){!0===b?(l.logDebug(a.resolve(297),b,this),this.Rp(this.f,f)):c.addTimedTask(this.Rp,!1===b?0:b,this,[this.f,"async."+f])},Rp:function(b,c){if(b==this.f){for(var f=0;1>f;){f++;this.fa(2);l.logDebug(a.resolve(298),c,this);var g=null;null!=this.o?(l.logDebug(a.resolve(299)),g=this.Is(this.o)):(l.logDebug(a.resolve(300)),
g=this.Zz());if(1==g)l.logInfo(a.resolve(283)),this.o=null;else{if(2==g){l.logInfo(a.resolve(284));this.Sa(200,"later");return}if(3==g){l.logWarn(a.resolve(277));this.o&&this.o.bn(!0);this.o=null;this.Sa(!1,"no");return}if(4==g){l.logInfo(a.resolve(285));this.fa(3);this.o.bn();this.Sa(4E3,"http");return}if(5==g)l.logInfo(a.resolve(286)),this.fa(3),this.o.bn(),this.o=null,this.fa(1);else{l.logInfo(a.resolve(287));this.Z();this.fa(1);return}}}this.Sa(!1,"limit")}},Zz:function(){for(var a=0;a<this.Qj.length;){this.Kh=
this.Kh<this.Qj.length-1?this.Kh+1:0;if(0<this.Qj[this.Kh].getLength())return this.Is(this.Qj[this.Kh]);a++}return null},Is:function(g){var e;e=this.qa.Kc();var k=g.Gi();e=k?new d((k.Be&&!0!==k.Be?k.Be:e)+b.Ok):null;if(null==e)return l.logDebug(a.resolve(301)),1;l.logDebug(a.resolve(302));k=!1;if(this.S){l.logDebug(a.resolve(303));k=this.Op(g,this.S);if(null==k)return l.logDebug(a.resolve(304)),1;e.Yf(k.getFile());e.setData(k.getData());k=this.S.sg(e);if(!1===k)this.S=null;else return null===k?2:
5}this.Ra&&!this.ic.pf(this.Ra.W,e.va(),!1,e.ua())&&(this.ic.yc(),this.Ra=null);for(;this.Ra||this.ic.wm();){if(!this.Ra){k=this.ic.Kq(e.va(),!1,e.ua());if(!k)return l.logWarn(a.resolve(278),this.Ra),f.fail(),this.ic.yc(),3;this.Ra=new k("LS6__CONTROLFRAME");l.logDebug(a.resolve(305),this.Ra)}k=this.Op(g,this.Ra);if(null==k)return l.logDebug(a.resolve(306)),1;e.Yf(k.getFile());e.setData(k.getData());e.fk(k.rg);this.o.BA(this.f);this.Ra.Z();k=this.Ra.pa(e,this.o.a,c.packTask(this.Zy,this),c.packTask(this.Ja,
this));if(!1===k)l.logDebug(a.resolve(307)),this.Ra=null;else{if(null===k)return l.logDebug(a.resolve(308)),2;this.ic.yc();return 4}}!1!==k&&(l.logError(a.resolve(276)),f.fail());return 3},Op:function(a,b){var c=b.ie();if(null==this.o)this.o=new k,this.o.Ts(c),this.o.fill(a,this.sh,this.qa.Vg());else if(this.o.ny(c)&&(this.o.Ts(c),c=this.o.Jz(this.sh,this.qa.Vg())))for(var f=c.pd();0<c.getLength();)this.ip(f,c.shift());return this.o.ah()?this.o=null:this.o.Tc},Zy:function(b,c){this.o&&c==this.o.a&&
(l.logInfo(a.resolve(288),c),this.fa(1),this.o=null,this.Sa(!1,"ready4next"))},Ja:function(b,c){this.o&&c==this.o.a&&(l.logInfo(a.resolve(289),this,b),this.fa(1),this.o=null,this.Sa(!1,"error"))}};k.prototype={toString:function(){return this.Aa?this.Aa.toString():null},pd:function(){return this.Aa?this.Aa.pd():null},Gi:function(){return this.Aa?this.Aa.Gi():null},getLength:function(){return this.Aa?this.Aa.getLength():0},shift:function(){return this.Aa?this.Aa.shift():null},ny:function(a){return a!=
this.Ec},Ts:G("Ec"),fill:function(b,c,f){if(!(0>=b.getLength())){this.Aa=new e(b.pd());this.Tc=this.Ec.qx(b);var g="",d=this.Ec.bq(b,f,!0);if(null===d)this.Tc=this.Aa=null;else{var k=this.Ec.jm(this.Tc.getFile()),h=this.Ec.mm(d)+d.length;0<c&&h+k>c&&l.logWarn(a.resolve(279),g);do g+=d,this.Aa.Ue(b.shift()),k+=h,0<b.getLength()&&(d=this.Ec.bq(b,f))&&(h=this.Ec.mm(d)+d.length);while(d&&(0==c||k+h<c)&&0<b.getLength());g?this.Tc.setData(this.Ec.Fo(g)):this.Tc=null}}},Jz:function(a,b){var c=this.Aa;this.Aa=
null;this.fill(c,a,b);return 0<c.getLength()?c:null},BA:G("a"),ah:function(){return 0>=this.getLength()},bn:function(a){for(var b=0,f=null;f=this.Aa.pm(b);)(f=f.us)&&c.addTimedTask(f.xd,0,f,[a]),b++}};return n});
define("lsS",["Inheritance","lsW","lsG"],function(h,e){function a(c,b,f,d,e,l,h){this._callSuperConstructor(a,[b]);this.Ln=d;this.jb=e;this.Zj=l;this.a=f;this.qa=c;this.Co=h}var d,c;for(c in{xd:!0})d=c;a.prototype={xd:function(c){this._callSuperMethod(a,d,[c]);c||(this.qa.fA(this.Zj,this.jb),this.Co||this.qa.sy(this.Zj,this.jb))},verifySuccess:function(){return this.qa.Gu(this.a)&&this.Ln.q[this.jb]&&null!=this.Ln.q[this.jb].ph?!1:!0},be:function(){this.qa.Uz(this.jb,this)},rj:E(),
qv:G("Co")};h(a,e);return a});
define("lsT",["lsS","lsO","LoggerManager","lsA"],function(h,e,a,d){function c(a,c,g){this.Uh=!1;this.kj=0;this.Gd={};this.$c={};this.qt=0;this.X=a;this.r=c;this.Ye=g}var g=a.getLoggerProxy(d.ng);c.prototype={Z:function(){this.Uh=!1;this.Gd={};this.qt=0;this.$c={};this.kj++;g.logDebug(a.resolve(314))},Xk:function(){g.logDebug(a.resolve(315));if(!this.Uh){for(var b in this.Gd){var c=this.Gd[b],d;for(d in c.q)if(null!=c.q[d].ph){var e=new h(this,this.Ye,
this.kj,c,d);this.Jn(d,query,e)}}this.Uh=!0}},sg:function(b,c,e,n){g.logDebug(a.resolve(316));var l=this.Gd[c];null==l&&(l={Af:0,q:{}},this.Gd[c]=l);l.Af++;b={LS_message:b};var m=!1;e&&(b.LS_outcome="",m=!0);c!=d.wc&&(b.LS_sequence=encodeURIComponent(c),m=!0);n&&(b.LS_max_wait=n,m=!0);m&&(b.LS_ack="",b.LS_msg_prog=c==d.wc?this.ur(l.Af):l.Af);n={};n.ph=b;n.dh=e;l.q[l.Af]=n;this.Uh&&(g.logDebug(a.resolve(317),b),c=new h(this,this.Ye,this.kj,l,l.Af,c,m),this.Jn(l.Af,b,c))},ur:function(a){var c=++this.qt;
this.$c[c]=a;return c},th:function(a){return this.$c[a]?this.$c[a]:a},Mz:function(a){for(var c in this.$c)if(this.$c[c]==a){delete this.$c[c];break}},zv:function(a){for(var c in this.$c)if(this.$c[c]==a)return c},Gu:function(a){return a==this.kj},Uz:function(b,c){var d=c.Ln.q[b].ph;g.logDebug(a.resolve(318),d);this.Jn(b,d,c)},Jn:function(a,c,g){this.X.zc(a,c,e.Ne,g)},Xt:function(b,c){c=b==d.wc?this.th(c):c;g.logInfo(a.resolve(309),b,c);var e=this.Gd[b];e.q[c]&&(null!=e.q[c].ph&&(g.logDebug(a.resolve(319)),
e.q[c].ph=null),null==e.q[c].dh&&(g.logDebug(a.resolve(320)),this.Re(b,c)))},sy:function(b,c){g.logDebug(a.resolve(321),b,c);this.Re(b,c)},Re:function(b,c){g.logDebug(a.resolve(322));var e=this.Gd[b];e&&e.q[c]&&(delete e.q[c],b==d.wc&&this.Mz(c))},wb:function(a,c){var g=this.Gd[a];return g&&g.q[c]&&g.q[c].dh?g.q[c].dh:null},fA:function(b,c){g.logDebug(a.resolve(323),b,c);var d=this.wb(b,c);if(d){var e=this.r.qd(d.kb);e&&e.Wr(d.Da)}},Qt:function(b,c){c=b==d.wc?this.th(c):c;g.logInfo(a.resolve(310),
b,c);var e=this.wb(b,c);if(e){var h=this.r.qd(e.kb);h&&h.Ur(e.Da)}this.Re(b,c)},wy:function(b,c){c=b==d.wc?this.th(c):c;g.logInfo(a.resolve(311),b,c);var e=this.wb(b,c);if(e){var h=this.r.qd(e.kb);h&&h.ue(e.Da)}this.Re(b,c)},vy:function(b,c,e,h){h=b==d.wc?this.th(h):h;g.logInfo(a.resolve(312),b,h);var l=this.wb(b,h);if(l){var m=this.r.qd(l.kb);m&&m.Vr(l.Da,c,e)}this.Re(b,h)},yy:function(b,c,e,h){h=b==d.wc?this.th(h):h;g.logInfo(a.resolve(313),b,h);var l=this.wb(b,h);if(l){var m=this.r.qd(l.kb);m&&
m.If(l.Da,c,e)}this.Re(b,h)}};return c});
define("lsi",["LoggerManager","Executor","Global","ASSERT","lsA"],function(h,e,a,d,c){function g(b){this.Ta=b;this.vb=[];this.Tq=!1;this.lsc={};this.lsc.LS_window=a["_"+b];this.dv=this.Lv(this.lsc)}var b=h.getLoggerProxy(c.ab);g.prototype={toString:function(){return"[EvalQueue|"+this.vb.length+"]"},Lv:function(){eval("var lsc \x3d arguments[0]");return function(a){with(lsc)eval(a)}},ap:function(a,c){this.bg()&&(this.vb.push({zj:a,tb:c}),b.isDebugLogEnabled()&&b.logDebug(h.resolve(325)),
e.addTimedTask(this.ti,0,this))},Xd:G("d"),ti:function(){for(b.isDebugLogEnabled()&&b.logDebug(h.resolve(326),this.vb.length);0<this.vb.length;){var a=this.vb.shift();if(this.d&&this.d.ga(a.zj))try{this.dv(a.tb)}catch(c){this.Tq=!0,this.vb=[],d.fail(),b.logError(h.resolve(324),c,a.tb),this.d.fq()}else b.isDebugLogEnabled()&&b.logDebug(h.resolve(327),a.zj,this.d)}},bg:function(){return!this.Tq},ha:E()};return g});
define("lsh",[],function(){function h(e){this.lsc={};this.lsc.LS_window=e;this.mb=!1}h.prototype={td:M("mb"),dw:M("lsc"),vv:function(e){eval("var lsc \x3d this.lsc");with(lsc)eval(e);this.mb=!0}};return h});
define("lsw","LoggerManager Executor lsE Inheritance Global lsh lsA".split(" "),function(h,e,a,d,c,g,b){function f(a,b){this.Ta=a;this._callSuperConstructor(f,[e.packTask(this.Rr,this)]);this.vb=[];this.xi=b?b:new g(c["_"+a])}var k=h.getLoggerProxy(b.ab),n=0;f.prototype={toString:function(){return"[WrappedEvalQueue|"+this.vb.length+"]"},ap:function(a,b){this.bg()&&(this.vb.push({zj:a,tb:b}),k.isDebugLogEnabled()&&k.logDebug(h.resolve(329)),e.addTimedTask(this.ti,
0,this))},vq:function(){this.Ei=!0},Xd:G("d"),Fq:U("\x3cscript\x3ewindow.evalProxy \x3d function(lsc,_p){with(lsc){eval(_p);}};\x3c/script\x3e"),Mh:function(){return this.jc.evalProxy?!0:!1},Gq:function(){return"LS6__EQ_"+this.Ta+"_"+ ++n},ti:function(){if(this.mb)for(k.isDebugLogEnabled()&&k.logDebug(h.resolve(330));0<this.vb.length;){var a=this.vb.shift();if(this.d&&this.d.ga(a.zj)){var b=null,c=null;if(!this.xi.td()&&(-1<(b=a.tb.indexOf("// END OF HEADER"))||-1<(c=a.tb.indexOf("myEnv.LS_window \x3d LS_window;")))){var g;
-1<b?(g=a.tb.substring(0,b),b=a.tb.substring(b)):(g=a.tb.substring(0,c+28),b=a.tb.substring(c+28));a.tb=b;this.xi.vv(g)}try{this.jc.evalProxy(this.xi.dw(),a.tb)}catch(f){this.Rr(a.tb,f);break}}}else e.addTimedTask(this.ti,100,this)},Rr:function(a,b){this.Ei=!0;this.vb=[];k.logError(h.resolve(328),b,a);this.d&&this.d.fq()}};d(f,a);return f});
define("lst","Executor BrowserDetection ASSERT LoggerManager lsq lsl lsAK lss lsu EnvironmentStatus Global lsm lsO lsU lsA lsv lsN lsT lsi lsw".split(" "),function(h,e,a,d,c,g,b,f,k,n,l,m,p,q,r,t,s,x,D,y){function C(a,b){this.status=L;this.f=0;this.vl=this.d=null;this.he="";this.we=a;this.r=b;this.e=a.ra;this.sb=a.ea;this.Jb=a.Qg();this.qc=
new t(this.e,this.Jb);this.sz=new m(this.Jb,b);n.addUnloadHandler(this);this.wv();this.X=new s(this,a.ea,this.Jb);this.Fd=new x(this.X,this.r,this.e)}function w(a){switch(a){case L:return"No session";case A:return"WS Streaming";case H:return"prepare WS Streaming";case R:return"WS Polling";case N:return"prepare WS Polling";case F:return"HTTP Streaming";case v:return"prepare HTTP Streaming";case I:return"HTTP Polling";case z:return"prepare HTTP Polling";case J:return"Shutting down"}}var L=1,A=2,H=3,
R=4,N=5,F=6,v=7,I=8,z=9,J=10,O={};O[A]=v;O[F]=z;O[R]=H;O[I]=H;O["_"+A]=H;O["_"+F]=z;O["_"+R]=H;O["_"+I]=v;var K={};K[A]=v;K[F]=z;K[R]=H;K[I]=H;K["_"+A]=H;K["_"+F]=z;K["_"+R]=H;K["_"+I]=z;var T={};T[A]=H;T[F]=v;T[R]=N;T[I]=z;var Q={};Q[A]=N;Q[F]=z;Q[v]=z;Q[z]=z;var S={};S[H]=!0;S[N]=!0;S[v]=!0;S[z]=!0;var B=d.getLoggerProxy(r.Oe),P=d.getLoggerProxy(r.Rd);C.prototype={wv:function(){var a=this;l.sa(this.Jb,"LS_forceReload",function(){a.d&&a.d.Ja("server.exit",!0)})},fa:function(a){this.status=a;this.f++},
Qa:function(a,b,c){this.status!=L&&this.status!=J&&this.d&&this.d.Qa(a?"api":b,!1,c)},$g:function(){return this.status!=L&&this.status!=J},Hb:function(a,b,c,f,d,e,k){a&&g.ca();a=a?"api":e;this.he=b?"_":"";!k&&this.$g()?(b=f?d?z:N:d?v:H,this.fa(b),this.Zn(a),this.d.Cs(this.f,a,c)):(this.Ds(),k=this.d?this.d.Vg():null,a="new."+a,this.Qa(!1,a,!1),b=f?d?I:R:d?F:A,this.fa(b),this.ms(f,c,d),this.d.Hb(k,a))},ms:function(a,b,c,g){this.d=new (c?f:k)(a,b,this,this.f,g);g&&g.$f();this.qc.Xd(this.d);this.$&&
this.$.Xd(this.d);this.sz.Xd(this.d)},Wd:function(a,b,c,g){this.fa(b?c?I:R:c?F:A);this.ms(b,a,c,this.d);this.d.Wd(g)},Un:function(){return"_"==this.he&&T[this.status]==K[this.he+this.status]},Qc:function(b,c,g){b==this.f&&(g?(P.logInfo(d.resolve(336)),this.fa(L)):(b=K[this.status]||this.status,P.logInfo(d.resolve(337),w(this.status),w(b)),b==L||b==J?(P.logError(d.resolve(331)),a.fail()):(this.fa(b),this.Zn(c),this.d.Cs(this.f,c,!1))))},dz:function(b){b==this.f&&(b=Q[this.status],P.logInfo(d.resolve(338),
w(this.status),w(b)),b?(this.fa(b),this.Zn("slow"),this.d.Tz(this.f)):(P.logError(d.resolve(332),w(this.status),this.d),a.fail()))},bf:function(b,c,g){b==this.f&&(b=O[this.he+this.status]||this.status,P.logInfo(d.resolve(339),w(this.status),w(b)),b==L||b==J?(P.logError(d.resolve(333)),a.fail()):this.Hb(!1,"_"==this.he,g,b==H||b==v?!1:!0,b==H||b==N?!1:!0,c,!0))},mo:function(b,c,g){b==this.f&&(b=this.status,P.logInfo(d.resolve(340),w(this.status)),S[b]?this.Wd(g,b==H||b==v?!1:!0,b==H||b==N?!1:!0,c):
(P.logError(d.resolve(334)),a.fail()))},Zs:function(a){P.logInfo(d.resolve(341));this.mo(a,"slow",!1)},iB:function(b,c){if(b==this.f){var g=this.status;P.logInfo(d.resolve(342),w(this.status));S[g]?this.Hb(!1,"_"==this.he,!1,g==H||g==v?!1:!0,g==H||g==N?!1:!0,"switch.timeout."+c,!0):(P.logError(d.resolve(335)),a.fail())}},Zn:function(a){h.addTimedTask(this.iB,this.e.ko+(this.qc.hm()||0),this,[this.f,a])},Ds:function(){this.X.yc();this.Fd.Z()},oe:function(){return this.d?this.d.k():null},lm:function(){return this.d?
this.d.lm():r.$b},Kc:function(){return this.d?this.d.Kc():this.sb.wh},Vg:function(){return this.d?this.d.Vg():null},Aq:function(){if(!this.$||!this.$.bg()){if(e.isProbablyIE(9,!0)){var a=null;this.$&&(a=this.$.xi,this.$.ha());this.$=new y(this.Jb,a)}else this.$=new D(this.Jb);this.$.Xd(this.d)}return this.$},ha:function(){this.$&&this.$.ha();n.removeUnloadHandler(this)},unloadEvent:function(){this.Qa(!1,"unload",!0);this.fa(J)},Qg:M("Jb"),bB:function(a){a==this.f&&this.we.zy()},oc:function(a){P.logInfo(d.resolve(343),
this);this.Yr(a);this.Fd.Xk();this.r.oc();this.ke()},Yr:function(a){P.logDebug(d.resolve(344),this);a&&this.X.EA(a)},bz:function(a,b){if(a!=this.f)return null;P.logDebug(d.resolve(345),this);this.Ds();this.we.Pc();b?this.fa(L):this.fa(this.status);return this.f},nn:function(a,b){var c=this.r.Jc(a[0]);c?(B.isDebugLogEnabled()&&B.logDebug(d.resolve(347),a),c.ds(a,b)):(this.r.Yq(a[0]),B.logDebug(d.resolve(346),this))},yd:function(a){var b=this.r.Jc(a[0]);b?(B.isDebugLogEnabled()&&B.logDebug(d.resolve(349),
a),b.$r(a[0],a[1],a[2])):B.logDebug(d.resolve(348),this)},Tb:function(a){var b=this.r.Jc(a[0]);b?(B.isDebugLogEnabled()&&B.logDebug(d.resolve(351),a),b.Tb(a[0],a[1])):B.logDebug(d.resolve(350),this)},Sb:function(a){var b=this.r.Jc(a[0]);b?(B.isDebugLogEnabled()&&B.logDebug(d.resolve(353),a),b.Sb(a[0],a[1])):B.logDebug(d.resolve(352),this)},Jf:function(a,b){B.isDebugLogEnabled()&&B.logDebug(d.resolve(354),a,b);this.r.By(a,b)},Lf:function(a,b,c){var g=this.r.Jc(a);g?(B.isDebugLogEnabled()&&B.logDebug(d.resolve(356),
a,b,c),g.Lf(b,c,a)):B.logDebug(d.resolve(355),this)},onUnsubscription:function(a){this.r.Bp(a);var b=this.r.Jc(a);b?(B.isDebugLogEnabled()&&B.logDebug(d.resolve(358),a),b.cs(a)):B.logDebug(d.resolve(357),this)},Kf:function(a,b){B.isDebugLogEnabled()&&B.logDebug(d.resolve(359),a,b);this.r.Kf(a,b)},onSubscription:function(a,b,c,g,f){var e=this.r.Jc(a);e?(B.isDebugLogEnabled()&&B.logDebug(d.resolve(361),a,b,c,g,f),e.bs(a,g,f,b,c)):B.logDebug(d.resolve(360),this)},dn:function(a,b){B.isDebugLogEnabled()&&
B.logDebug(d.resolve(362),a,b);this.Fd.Xt(a,b)},fn:function(a,b){B.isDebugLogEnabled()&&B.logDebug(d.resolve(363),a,b);this.Fd.Qt(a,b)},en:function(a,b,c,g){B.isDebugLogEnabled()&&B.logDebug(d.resolve(364),a,g,b,c);this.Fd.vy(a,b,g,c)},ue:function(a,b){B.isDebugLogEnabled()&&B.logDebug(d.resolve(365),a,b);this.Fd.wy(a,b)},If:function(a,b,c,g){B.isDebugLogEnabled()&&B.logDebug(d.resolve(366),a,g,b,c);this.Fd.yy(a,b,g,c)},vj:function(a){this.we.vj(a)},gn:function(a){B.isDebugLogEnabled()&&B.logDebug(d.resolve(367),
a);this.we.gn(a)},Qy:function(a){this.vl&&(a!=this.vl&&b.xx())&&(b.Wz(),this.Hb(!1,"_"==this.he,!1,!1,!1,"ip",!1));this.vl=a},Wj:function(a,b,c,g){this.Fd.sg(a,b,c,g)},Ed:function(a,b){var g=c.uw(this.f,a,b);this.X.zc(null,g,p.cd,null)},ii:function(){this.d&&this.d.ii()},bA:function(a,b,c,g){this.X.zc(a,b,p.Nd,new q(c,a,p.Nd),g)},dA:function(a,b,c){this.X.zc(a,b,p.Pe,new q(c,a,p.Pe))},cA:function(a,b,c){this.X.zc(a,b,p.Mo,c)},ke:function(){this.d&&this.d.ke()}};C.prototype.unloadEvent=C.prototype.unloadEvent;
return C});
define("lsj","Global lsA LoggerManager lsJ lsK lsL lsn lst lsO Executor lsAY".split(" "),function(h,e,a,d,c,g,b,f,k,n,l){function m(e,k,p,m,y){this.K=new d(k);this.K.Xf(this,!0);this.ff=null;e?this.ff=e:(r.logWarn(a.resolve(368)),this.ff="default");this.ea=new c(m);this.ea.Xf(this,!0);this.ra=new g(p);this.ra.Xf(this,!0);this.Mm=null;if(this.K.Cm){this.Wc=null;do this.Ta="s"+q++;while(h.jx(this.Ta,
"lsEngine"))}else this.Wc=new l(this.ff,y?null:n.packTask(this.Ai,this)),this.Ta=this.Wc.ba();this.r=new b(this);this.h=new f(this,this.r);h.sa(this.Ta,"lsEngine",this);h.eu(this);this.K.Eg&&this.vi()}var p="1640";isNaN(p)&&(p=0);var q=0,r=a.getLoggerProxy(e.Rd);m.prototype={toString:U("[LightstreamerEngine]"),oe:function(){return this.h.oe()},Pc:function(){this.r.Pc()},vj:function(a){this.Wc&&this.Wc.ws(a)},gn:function(a){this.Wc&&this.Wc.Yt(a)},We:function(a,b,c){var g=this.r.s,f;for(f in g)g[f].Kr(a,
b,c);"maxBandwidth"==b?this.h.ii(c):"forcedTransport"==b?this.K.Eg&&this.vi():"reverseHeartbeatMillis"==b&&this.h.ke();return!0},zy:function(){var a=this.xb();if(this.Mm!=a){var b=this.Mm;this.Mm=a;this.r.Ay(a,b);if(this.onStatusChange)this.onStatusChange(a)}},fb:M("r"),Ed:function(a){this.h.Ed(a,p);return!0},Qg:M("Ta"),Ai:function(){this.h.Qa(!1,"suicide",!0);this.h.ha();h.Iu(this.Ta);h.Qz(this);this.Wc&&this.Wc.ha();this.r.Er(!0);this.r.ha()},Fw:function(){var a=[],b=this.r.s,c;for(c in b)if(b[c].$g())try{var g=
b[c].Ug();a.push(g)}catch(f){}return a},Wp:function(){r.logInfo(a.resolve(369));this.K.Y("connectionRequested",!1);this.h.Qa(!0,"api",!0)},vi:function(){r.logInfo(a.resolve(370));this.K.Y("connectionRequested",!0);var b=this.ra.em;null===b?this.h.Hb(!0,!1,!1,!1,!1):this.kv(b)},kv:function(a){var b=a==e.Sk||a==e.Nh;this.h.Hb(!0,b,!b,a==e.qg||a==e.Pd,a==e.Pd||a==e.kg||a==e.Nh)},Wj:function(a,b,c,g){var f=this.xb();if(f==e.$b||f==e.pg)return!1;this.h.Wj(a,b,c,g);return!0},xb:function(){return this.h.lm()}};
return m});
define("lsAS","lsK lsL lsJ lsA lsG lsAf LoggerManager".split(" "),function(h,e,a,d,c,g,b){function f(a){this.b=a}function k(a){return null==a?null:a.toString()}var n=b.getLoggerProxy(d.Oa);f.prototype={toString:U("[Client EventBridge]"),tz:function(c){n.logDebug(b.resolve(371),this);this.b.j.hn(parseInt(c.Eo),parseInt(c.u),k(c.status),new h(c.ea),new e(c.ra),new a(c.K),parseInt(c.Ta),!0===c.ob)},Tu:function(a){n.logDebug(b.resolve(372),this);
("lsK"==a.Gr?this.b.ea:"lsL"==a.Gr?this.b.ra:this.b.K).Y(k(a.Fz),a.FB)},ok:function(a){n.logDebug(b.resolve(373),this);this.b.j.ok(k(a.status))},ck:function(a){n.logDebug(b.resolve(374),this);this.b.j.ck(c.$e(a.a))},Nn:function(a){n.logDebug(b.resolve(375),this);this.b.j.Ps(c.$e(a.a))},tv:function(a){n.logDebug(b.resolve(376),this);this.b.j.re(!0===a.hB)},uv:function(){n.logDebug(b.resolve(377),this);this.b.j.Rm()},ak:function(a){n.logDebug(b.resolve(378),this);this.b.ak(parseInt(a.bm),
k(a.Nc))},kB:function(a){n.logDebug(b.resolve(379),this);this.b.g.xj(k(a.Fe),parseInt(a.w),parseInt(a.zb),parseInt(a.Db))},yk:function(a){var b=g(a.ju,!1);this.b.g.yk(b,a.YA?!0:!1)},mB:function(a){n.logDebug(b.resolve(381),this);this.b.g.yd(parseInt(a.w),parseInt(a.item),parseInt(a.gy))},Yl:function(a){n.logDebug(b.resolve(382),this);this.b.g.Tb(parseInt(a.w),parseInt(a.item))},ul:function(a){n.logDebug(b.resolve(383),this);this.b.g.Sb(parseInt(a.w),parseInt(a.item))},lB:function(a){n.logDebug(b.resolve(384),
this);this.b.g.eq(parseInt(a.bm),k(a.Nc),parseInt(a.w))},qB:function(a){n.logDebug(b.resolve(385),this);this.b.g.ft(parseInt(a.w),parseInt(a.$x),parseInt(a.wu),parseInt(a.Zx),parseInt(a.Fv))},rB:function(){n.logDebug(b.resolve(386),this)},cu:function(a){n.logDebug(b.resolve(387),this);this.b.g.ht(parseInt(a.w))},ij:function(a){n.logDebug(b.resolve(388),this);this.b.q.ij(parseInt(a.Da),parseInt(a.Uk),k(a.Nc))},ej:function(a){n.logDebug(b.resolve(389),this);this.b.q.ej(parseInt(a.Da))},jj:function(a){n.logDebug(b.resolve(390),
this);this.b.q.jj(parseInt(a.Da))},gj:function(a){n.logDebug(b.resolve(391),this);this.b.q.gj(parseInt(a.Da),parseInt(a.Uk),k(a.Nc))},hj:function(a){n.logDebug(b.resolve(392),this);this.b.q.hj(parseInt(a.Da))}};return f});
define("EventDispatcher",["Executor","List","Inheritance"],function(h,e,a){function d(){this._callSuperConstructor(d)}function c(){this.initDispatcher()}c.prototype={initDispatcher:function(){this.vk=new d;this.it=!1},addListener:function(a){a&&(a={c:a,sr:!0},this.vk.add(a),this.Ll("onListenStart",[this],a,!0))},removeListener:function(a){a&&(a=this.vk.remove(a))&&this.Ll("onListenEnd",[this],a,!0)},getListeners:function(){return this.vk.asArray()},useSynchEvents:function(a){this.it=!0===a},Ll:function(a,
b,c,d){this.it?this.Tp(a,b,c,!0):h.addTimedTask(this.Tp,0,this,[a,b,c,d])},Tp:function(a,b,c,d){if(c&&c.c[a]&&(d||c.sr))try{b?c.c[a].apply(c.c,b):c.c[a].apply(c.c)}catch(e){}},dispatchEvent:function(a,b){var c=this;this.vk.forEach(function(d){c.Ll(a,b,d,!1)})}};c.prototype.initDispatcher=c.prototype.initDispatcher;c.prototype.addListener=c.prototype.addListener;c.prototype.removeListener=c.prototype.removeListener;c.prototype.getListeners=c.prototype.getListeners;c.prototype.useSynchEvents=c.prototype.useSynchEvents;
c.prototype.dispatchEvent=c.prototype.dispatchEvent;d.prototype={remove:function(a){for(var b=0;b<this.data.length;b++)if(this.data[b].c==a)return a=this.data[b],a.sr=!1,this.data.splice(b,1),a;return!1},asArray:function(){var a=[];this.forEach(function(b){a.push(b.c)});return a}};a(d,e);return c});
define("lsAP","Executor lsA LoggerManager Inheritance Setter Environment IllegalStateException IllegalArgumentException Helpers".split(" "),function(h,e,a,d,c,g,b,f,k){function n(){this.Dc=5E3;this.Nl=!1;this.P=this.Tn=this.Zf=this.Vb=this.R=this.Pf=null}var l=/^[a-zA-Z0-9]*$/,m={ATTACH:!0,"ATTACH:FAST":!0,IGNORE:!0,ABORT:!0},p={CREATE:!0,ABORT:!0,WAIT:!0},q={ATTACH:!0,"ATTACH:FAST":!0},r=a.getLoggerProxy(e.Oa);n.prototype={DA:G("P"),iA:function(a){this.Dc=this.checkPositiveNumber(a);
this.P.zu(this.Dc)},$u:function(){this.Sl("default"+k.randomG(),"IGNORE","CREATE",!0,null)},Sl:function(b,c,d,k,h){if(!b)throw new f("The share name is missing");if(!l.test(b))throw new f("The given share name is not valid, use only alphanumeric characters");if(!p[d])throw new f("sharePolicyOnNotFound must be one of: CREATE, ABORT, WAIT");if(!m[c])throw new f("sharePolicyOnFound must be one of: ATTACH, ATTACH:FAST, IGNORE, ABORT");if(!g.isBrowserDocument()){if(q[c])throw new f("ATTACH* can only be used if the LightstreamerClient is loaded inside a browser document");
k||(k=!0)}"file:"!=e.Oh||k||(r.logWarn(a.resolve(393)),k=!0);this.P.jr()||(this.Nl=!0,this.P.lv(),this.Nl=!1);this.Pf=this.checkBool(k,!0);this.R=b;this.Vb=c;this.Zf=d;this.Tn=h;"IGNORE"==this.Vb&&"CREATE"==this.Zf?(r.logInfo(a.resolve(394)),this.P.Vp(this.R,this.Pf)):"IGNORE"!=this.Vb&&"ABORT"!=this.Vb||"ABORT"!=this.Zf?(r.logInfo(a.resolve(396)),this.P.Yp(this.R,"ATTACH:FAST"==this.Vb,this.Pf,this.Dc,this.Tn)):(r.logInfo(a.resolve(395)),this.P.Ol())},cr:function(){return this.P.Ex()},Rw:M("R"),
Sw:function(){return this.P.Tv()},ru:function(){return"IGNORE"==this.Vb},Qr:function(b,c,g){"ABORT"==this.Vb?(r.logInfo(a.resolve(397)),this.P.Ol()):"IGNORE"!=this.Vb?(r.logInfo(a.resolve(398)),this.P.hv(c,g)):r.logInfo(a.resolve(399))},IB:function(a){this.P.nl(a)&&this.P.Yp(this.R,"ATTACH:FAST"==this.Vb,this.Pf,this.Dc,this.Tn)},uj:function(b,c){"CREATE"==this.Zf?(r.logInfo(a.resolve(400)),this.P.Vp(this.R,c||this.Pf)):"WAIT"==this.Zf?(r.logInfo(a.resolve(401),1E3),h.addTimedTask(this.IB,1E3,this,
[b])):(r.logInfo(a.resolve(402)),this.P.Ol())},Ky:function(){this.Nl||(r.logInfo(a.resolve(403)),this.Sl(this.R,this.Vb,-1<this.Vb.indexOf("ATTACH")?"CREATE":this.Zf,this.Pf,null))}};n.prototype.setCheckShareTimeout=n.prototype.iA;n.prototype.enableSharing=n.prototype.Sl;n.prototype.isMaster=n.prototype.cr;n.prototype.getShareName=n.prototype.Rw;n.prototype.getSharedClients=n.prototype.Sw;d(n,c,!0,!0);return n});
define("LightstreamerClient","Helpers Global lsAR Executor CookieManager lsAY lsJ lsL lsK lsAV lsAT lsAU lsAe lsD lsj lsAS Inheritance Setter EventDispatcher lsA EnvironmentStatus IllegalArgumentException Environment LoggerManager lsAP IllegalStateException ASSERT lsm".split(" "),function(h,e,a,d,c,g,b,f,k,n,l,m,p,q,r,t,s,x,D,y,C,
w,L,A,H,R,N,F){function v(a,c){this._callSuperConstructor(v);this.wk=++O;this.Ef=this.rk=this.Sc=this.nb=this.j=null;this.q=new m;this.ja=0;this.f=1;this.pe=y.$b;this.Ip=new f;this.Cl=new k;this.Dl=new H;this.connectionOptions=this.Ip;this.connectionDetails=this.Cl;this.connectionSharing=this.Dl;this.K=new b;this.ra=this.Ip;this.ea=this.Cl;this.cc=this.Dl;a&&this.ea.Ws(a);c&&this.ea.Qs(c);this.K.Xf(this);this.ra.Xf(this);this.ea.Xf(this);this.cc.DA(this);this.g=new p(this.ra);this.Tm=2E3;this.Dc=
null;"undefined"!=typeof console&&L.isBrowser()&&J.logWarn(A.resolve(404))}function I(a,b){var c=g.om();c.sl(b,a);c.rh(b,a)}var z=A.getLoggerProxy(y.Oa),J=A.getLoggerProxy(y.Jk),O=0,K=/^[a-zA-Z0-9_]*$/;v.setLoggerProvider=function(a){A.setLoggerProvider(a)};v.LIB_NAME="JAVASCRIPT";v.LIB_VERSION="6.1.1 build 1640";v.simulateSilence=function(a){F.XA(a)};v.prototype={toString:function(){return["[|LightstreamerClient",this.wk,this.f,this.ja,"]"].join("|")},We:function(a,b,c){this.j&&this.j.Js(a,b,c);
return!0},Fr:function(a,b){b!=this.K&&this.dispatchEvent("onPropertyChange",[a])},Vp:function(a,b){z.logInfo(A.resolve(405),a,b);this.kd(9);this.K.Y("isLocalEngine",b);var c=new r(a,this.K,this.ra,this.ea,this.cc.ru()),c=new l(this,c);this.$k(c);c.bound(!0)},Ol:function(){this.kd(7);z.logInfo(A.resolve(406));this.dispatchEvent("onShareAbort")},lv:function(){if(1!=this.f){var a=this.f;this.kd(1);this.j&&(5==a?(z.logInfo(A.resolve(407)),this.j.ay()):(z.logInfo(A.resolve(408)),this.j.an(),this.j.re()))}},
nl:function(a){return this.ja==a},Yp:function(a,b,c,g,f){this.kd(2);c||this.Ez(a,f);this.nb&&(this.nb.rv(b),this.nb.Ss(g));z.logDebug(A.resolve(417));(b=e.Qw(a))?this.cc.Qr(this.ja,b,!0):this.kp(this.ja,a)?this.cc.uj(this.ja):c?this.cc.uj(this.ja):this.Hn(this.ja,f)},hv:function(a,b){if(b){z.logInfo(A.resolve(409));var c=new l(this,a);this.kd(8);this.$k(c);c.bound(!1)}else z.logInfo(A.resolve(410)),this.kd(3),this.$k(this.Sc)},Hn:function(a,b,c){if(this.ja==a){z.logDebug(A.resolve(418));c=this.Vs((c||
100)+50);this.Ef=null;this.Sc.ca(!0);var g=d.packTask(this.be,this,[a]);this.nb.Yz(b,g,a)?(g=d.packTask(this.ty,this,[a+1,b]),this.Sc.Ly(this.nb,g)?(z.logDebug(A.resolve(421)),this.cc.Qr(this.ja,b,!1)):(z.logDebug(A.resolve(420),c),d.addTimedTask(this.Hn,c,this,[a,b,c]))):(z.logDebug(A.resolve(419),c),d.addTimedTask(this.Hn,c,this,[a,b,c]))}},be:function(a){this.ja==a&&this.cc.uj(this.ja,!0)},ty:function(a){this.ja==a&&3==this.f&&(z.logDebug(A.resolve(422)),this.Sc.ca(!0),this.ja==a&&this.dq(!1))},
zu:function(a){this.nb&&this.nb.Ss(a)},kp:function(a,b,g){if(a!=this.ja||!c.areCookiesEnabled())return!0;var f=this.Rx(b,g);if(!0!==f&&!1!==f)return d.addTimedTask(this.kp,f.Yh,this,[a,b,f]),!1;if(g){if(f)return!1;this.cc.uj(this.ja)}return!0},Rx:function(a,b){var c={Yh:0},f=!1,d=h.getTimeStamp(),e=g.om(),k=e.Mj(a);if(!k)return z.logDebug(A.resolve(423)),!1;z.logDebug(A.resolve(424),this);for(var l=0;l<k.length;l++){var n=e.Rf(a,k[l]);if(!n||5>n.length)I(k[l],a);else if(b&&b[k[l]]){if(n[y.vc]!=b[k[l]])return z.logInfo(A.resolve(411)),
!0;z.logInfo(A.resolve(412))}else{var p=Number(n[y.vc])+y.Qd+2E3-d;-6E4>=p?(z.logInfo(A.resolve(413)),I(k[l],a)):(p<this.Tm&&(p=this.Tm),c[k[l]]=n[y.vc],f=!0,c.Yh=c.Yh>p?c.Yh:p)}}if(f)return z.logInfo(A.resolve(414)),c;z.logInfo(A.resolve(415));return!1},jr:function(){return 1==this.f},Ax:function(){return 7==this.f},kd:function(a){a==this.f?N.verifyOk(2==a||1==a):(1==this.f&&7!=a&&e.sa(this.wk,"lsPage",this,"P"),7!=a&&6!=a&&5!=a&&1!=a&&8!=a||this.gv(),1==a&&e.rl(this.wk,"lsPage","P"),this.f=a,this.ja++)},
Ex:function(){return 5==this.f?!0:4==this.f?!1:null},Ez:function(b,c){if(!this.nb){var g=d.packTask(this.Vs,this);this.nb=new a(c||null,b,!0,g,this.Dc);this.Sc=new n(this,this.wk);this.rk=new q(this.Sc,new t(this),!1);this.nb.CB(d.packTask(this.be,this,[this.ja]))}},gv:function(){this.nb&&(this.nb.uu(),this.nb=null,this.Sc&&(this.Sc.ha(),this.Sc=null),q.remove(this.rk),this.rk=null)},Vs:function(a){2500<a?a=2500:50>a&&(a=50);return this.Ef=this.Ef&&this.Ef<a?this.Ef:a},$k:function(a){this.j&&this.j!=
a&&this.j.ha();this.j=a;this.g.lo(a);this.q.lo(a)},Nr:function(a,b,c,g,f){z.logDebug(A.resolve(425));this.kd(b?5:4);b||(this.ra.pi(g),this.K.pi(f),this.ea.pi(c))},dq:function(a){this.Tm=a?1E4:2E3;z.logInfo(A.resolve(416));this.K.Eg?this.zg(y.pg):this.zg(y.$b);this.j.ha();this.j=null;C.isUnloading()||C.isUnloaded()?this.kd(1):(N.verifyOk(5!=this.f||a),this.cc.Ky(this.ja))},Tv:function(){if(5==this.f||4==this.f)try{return this.j.mf().Fw()}catch(a){this.j&&this.j.mi&&d.addTimedTask(this.j.mi,0,this.j)}return[]},
Uu:function(){if(!this.ea.wh)throw new R("Configure the server address before trying to connect");this.jr()&&this.cc.$u();if(this.Ax())throw new R("Cannot connect in the current status, reconfigure sharing policies.");J.logDebug(A.resolve(426));d.addTimedTask(this.mu,0,this)},mu:function(){if(!this.pe||this.pe!=y.CONNECTING&&this.pe!=y.Qe&&0!=this.pe.indexOf(y.Gb)){J.logDebug(A.resolve(427));this.K.Y("connectionRequested",!0);var a=this.j;a&&a.gi()}},disconnect:function(){J.logDebug(A.resolve(428));
d.addTimedTask(this.nu,0,this)},nu:function(){J.logDebug(A.resolve(429));this.K.Y("connectionRequested",!1);var a=this.j;a&&a.hi()},xb:M("pe"),sendMessage:function(a,b,c,g){if(!b)b=y.wc;else if(!K.test(b))throw new w("The given sequence name is not valid, use only alphanumeric characters plus underscore, or null");c=c?this.checkPositiveNumber(c):null;d.addTimedTask(this.lu,0,this,[a,b,g,c])},lu:function(a,b,c,g){c&&(c=this.q.xw(a,c));5!=this.f&&4!=this.f||!this.j.ob?c&&this.q.vr(c.Da):this.j.uq(a,
b,c,g)},ak:function(a,b){this.dispatchEvent("onServerError",[a,b])},Nn:function(){this.g.xz();this.q.Lu()},zg:function(a){a!=this.pe&&(this.pe=a,this.dispatchEvent("onStatusChange",[a]))},Ed:function(a){return 5!=this.f&&4!=this.f||!this.j.ob?!1:(this.j.tq(a),!0)},Vw:function(){var a=[],b=this.g.rc,c;for(c in b)b[c].dt||a.push(b[c]);return a},fo:function(a){this.g.Xh(a)},rt:function(a){this.g.Pj(a)},addListener:function(a){this._callSuperMethod(v,"addListener",[a])},removeListener:function(a){this._callSuperMethod(v,
"removeListener",[a])},getListeners:function(){return this._callSuperMethod(v,"getListeners")}};v.setLoggerProvider=v.setLoggerProvider;v.prototype.connect=v.prototype.Uu;v.prototype.disconnect=v.prototype.disconnect;v.prototype.getStatus=v.prototype.xb;v.prototype.sendMessage=v.prototype.sendMessage;v.prototype.getSubscriptions=v.prototype.Vw;v.prototype.subscribe=v.prototype.fo;v.prototype.unsubscribe=v.prototype.rt;v.prototype.addListener=v.prototype.addListener;v.prototype.removeListener=v.prototype.removeListener;
v.prototype.getListeners=v.prototype.getListeners;s(v,D,!1,!0);s(v,x,!0,!0);return v});define("lsAc",["lsA","ASSERT"],function(h,e){function a(a,c,g){this.Bj=a;this.kr=c;this.ts=g}a.prototype={onItemUpdate:function(a){if(this.VA())return e.verifyValue(a.Li(),1),a=a.Md,this.Bj.IA(a.length-2),a=this.Wu(a),this.Bj.update(a,!1,!0)},VA:function(){return this.Bj.kx(this.kr,this.ts)},Wu:function(a){var c=this.Bj,g=this.kr,b=[];b[0]=c.Ge;b[1]=g;b.Cc=[];for(var g=c.Hq()+2,f=2,e=2;e<g;e++)e==c.keyCode+1?b[e]=this.ts:e==c.eb+1?b[e]="UPDATE":e<=c.ia.yb+1?b[e]=h.og:
(b[e]=a[f],a.vo[f]?b[e]=h.og:b.Cc.push(e-1),f++);return b}};return a});
define("lsAb",["LoggerManager","IllegalArgumentException","lsA"],function(h,e,a){function d(a,b,c,d,e){this.Yx=b;this.Xx=a;this.St=d;this.ia=c;this.Md=e}var c=h.getLoggerProxy(a.Jk);d.prototype={nm:M("Xx"),Li:M("Yx"),getValue:function(a){a=this.Ih(a);return(a=this.Md[a])&&a.fC?a.value:a},ir:function(a){a=this.Ih(a);return!this.Md.vo[a]},Ox:M("St"),forEachChangedField:function(a){for(var b=this.Md.Cc,f=0;f<b.length;f++){var d=this.ia.getName(b[f]),e=this.Md[b[f]+1];try{a(d,b[f],e)}catch(l){c.logErrorExc(l,
h.resolve(430))}}},rq:function(a){for(var b=2;b<this.Md.length;b++){var f=b-1,d=this.ia.getName(f),e=this.Md[b];try{a(d,f,e)}catch(l){c.logErrorExc(l,h.resolve(431))}}},Ih:function(a){a=isNaN(a)?this.ia.je(a):a;if(null==a)throw new e("the specified field does not exist");if(0>=a||a>this.ia.km()+1)throw new e("the specified field position is out of bounds");return a+1},Bw:function(){return this.Md.length-2},iw:function(a){return this.ia.getName(a)}};d.prototype.getItemName=d.prototype.nm;d.prototype.getItemPos=
d.prototype.Li;d.prototype.getValue=d.prototype.getValue;d.prototype.isValueChanged=d.prototype.ir;d.prototype.isSnapshot=d.prototype.Ox;d.prototype.forEachChangedField=d.prototype.forEachChangedField;d.prototype.forEachField=d.prototype.rq;return d});define("lsX",[],function(){function h(){this.Wb=null;this.yb=0}h.prototype={Xs:G("Wb"),km:function(){return this.Wb?this.yb+this.Wb.yb:this.yb},Id:G("yb")};return h});
define("lsY",["Inheritance","lsX"],function(h,e){function a(d){this._callSuperConstructor(a);this.list=d;for(var c={},g=0;g<d.length;g++)c[d[g]]=g+1;this.Fs=c;this.yb=d.length}a.prototype={Id:E(),fm:function(){return this.list.join(" ")},je:function(a){return this.Fs[a]?this.Fs[a]:this.Wb?(a=this.Wb.je(a),null!==a?a+this.yb:null):null},getName:function(a){return a>this.yb&&this.Wb?this.Wb.getName(a-this.yb):this.list[a-1]||null},Ic:M("list")};h(a,e);return a});
define("lsZ",["Inheritance","lsX"],function(h,e){function a(d){this._callSuperConstructor(a);this.name=d}a.prototype={fm:M("name"),je:function(a){return this.Wb?(a=this.Wb.je(a),null!==a?a+this.yb:null):null},getName:function(a){return this.Wb?this.Wb.getName(a-this.yb):null},Ic:M("name")};h(a,e);return a});
define("Matrix",[],function(){function h(e){this.wa=e||{}}h.prototype={insert:function(e,a,d){this.wa[a]||(this.wa[a]={});this.wa[a][d]=e},get:function(e,a){return this.wa[e]&&"undefined"!=typeof this.wa[e][a]?this.wa[e][a]:null},del:function(e,a){if(this.wa[e]){this.wa[e][a]&&delete this.wa[e][a];for(var d in this.wa[e])return;delete this.wa[e]}},insertRow:function(e,a){this.wa[a]=e},getRow:function(e){return this.wa[e]?this.wa[e]:null},delRow:function(e){this.wa[e]&&delete this.wa[e]},getEntireMatrix:M("wa")};
h.prototype.insert=h.prototype.insert;h.prototype.get=h.prototype.get;h.prototype.del=h.prototype.del;h.prototype.insertRow=h.prototype.insertRow;h.prototype.getRow=h.prototype.getRow;h.prototype.delRow=h.prototype.delRow;h.prototype.getEntireMatrix=h.prototype.getEntireMatrix;return h});
define("Subscription","lsAc lsAb lsY lsZ Inheritance Setter Matrix Executor lsA EventDispatcher IllegalArgumentException IllegalStateException LoggerManager lsG ASSERT Helpers".split(" "),function(h,e,a,d,c,g,b,f,k,n,l,m,p,q,r,t){function s(a,c,g){this._callSuperConstructor(s);a=(new String(a)).toUpperCase();if(!a||!y[a])throw new l("The given value is not a valid subscription mode. Admitted values are MERGE, DISTINCT, RAW, COMMAND");
this.dd=a;this.ia=this.Fc=this.Mb=this.Qb=this.sf=this.tf=null;this.kc="RAW"===a?null:"yes";this.Rj=this.Ge=this.qi=this.Th=this.$o=this.ep=this.Ae=this.Ya=null;this.te=new b;this.Oc=new b;this.c=null;this.Za=1;this.tk=0;this.ac=null;this.Db=0;this.zb=null;this.qh;this.Kj;this.Uj=this.tj=0;this.rb=this.dd==k.jg?2:1;this.wo=this.keyCode=this.eb=null;this.xa={};this.Ch=this.Ee=this.Jd=null;this.gB=k.Pk;if(c){if(!g||!t.isArray(g))throw new l("Please specify a valid field list");t.isArray(c)?this.zh(c):
this.zh([c]);this.ek(g)}else if(g)throw new l("Please specify a valid item or item list");}function x(a,b){for(var c=0;c<a.length;c++)if(a[c]){if(-1<a[c].indexOf(" "))throw new l(b+A);if(!isNaN(a[c]))throw new l(b+H);}else throw new l(b+L);}function D(a,b){return a-b}var y={COMMAND:!0,RAW:!0,MERGE:!0,DISTINCT:!0},C=k.og,w=p.getLoggerProxy(k.ng),L=" name cannot be empty",A=" name cannot contain spaces",H=" name cannot be a number";s.prototype={toString:function(){return["[|Subscription",this.Za,this.tk,
this.ac,this.Db,this.zb,"]"].join("|")},Ap:function(){this.Ge=null;this.te=new b;this.Oc=new b;this.ia.Id(0);this.Qb.Id(0);3==this.rb&&(this.ia.Xs(null),this.xa={});this.Kj=this.qh=null;w.logDebug(p.resolve(436),this)},Fy:function(a,b,c){this.Ab();if(!this.Qb)throw new l("Invalid Subscription, please specify an item list or item group");if(!this.ia)throw new l("Invalid Subscription, please specify a field list or field schema");this.Za=5;this.zb=b;this.ac=a;this.c=c;this.Db++;this.tj++;r.verifyValue(this.tj,
1);this.Ng();w.logInfo(p.resolve(433),this);return!0},gz:function(){this.Db++;this.Za=2;w.logDebug(p.resolve(437),this)},xj:function(a){this.Ge=a;this.Za=3;w.logDebug(p.resolve(438),this)},Xy:function(){var a=this.ne();this.Za=5;this.Ap();a&&this.Mr();w.logDebug(p.resolve(439),this)},$y:function(){this.vx();var a=this.ne();this.Za=1;this.ac=this.zb=null;delete this.Rj;3==this.rb&&this.Rz();this.Ap();this.tj--;r.verifyValue(this.tj,0);a&&this.Mr();this.c=null;w.logDebug(p.resolve(440),this)},hz:function(){this.qh&&
(f.addPackedTimedTask(this.qh,this.Kj),this.Kj=this.qh=null,w.logDebug(p.resolve(441),this))},ez:function(a,b,c,g){this.Za=4;this.Uj++;r.verifyValue(this.Uj,1);w.logInfo(p.resolve(434),this);3==this.rb&&this.ia.Xs(this.Ch);this.Fc&&1!=this.rb&&this.KA(b,a);this.Qb.Id(c);this.ia.Id(g);this.dispatchEvent("onSubscription")},Mr:function(){this.Uj--;r.verifyValue(this.Uj,0);w.logInfo(p.resolve(435),this);this.dispatchEvent("onUnsubscription")},Rz:function(){for(var a in this.xa)this.ys(a)},ys:function(a){for(var b in this.xa[a])this.zs(a,
b)},ol:function(a){return a==this.Db},xp:function(a){return this.zb==a},ku:function(a,b){this.qh=a;this.Kj=b},xq:function(){if(null!=this.Ya){var a=this.Ya;return{LS_requested_max_frequency:"unlimited"==a?0:a}}return{}},Ng:function(){var a={LS_mode:this.dd,LS_id:encodeURIComponent(this.Qb.fm()),LS_schema:encodeURIComponent(this.ia.fm())};null!=this.qi&&(a.LS_data_adapter=encodeURIComponent(this.qi));null!=this.Th&&(a.LS_selector=encodeURIComponent(this.Th));null!=this.ep&&(a.LS_start=this.ep);null!=
this.$o&&(a.LS_end=this.$o);null!=this.kc&&(a.LS_snapshot="yes"===this.kc?"true":"no"===this.kc?"false":this.kc);q.aa(a,this.xq());if(null!=this.Ae){var b=this.Ae;"unlimited"!=b&&0<b&&(a.LS_requested_buffer_size=b)}w.logDebug(p.resolve(442),this);return this.Rj=a},HA:function(){if(this.dd==k.jg&&null!=this.Mb&&(this.eb=this.Mb.je("command"),this.keyCode=this.Mb.je("key"),!this.eb||!this.keyCode))throw new l("A field list for a COMMAND subscription must contain the key and command fields");},KA:function(a,
b){w.logDebug(p.resolve(443),this,a,b);this.eb=a;this.keyCode=b},Ab:function(){if(this.Zg())throw new m("Cannot modify an active Subscription, please unsubscribe before applying any change");},vx:function(){if(!this.Zg())throw new m("Subscription is not active");},In:function(){if(this.dd!=k.jg)throw new m("Second level field list is only available on COMMAND Subscriptions");},zl:function(){if(this.dd!=k.jg)throw new m("This method can only be used on COMMAND subscriptions");},Fx:function(){return 1==
this.Za},Gm:function(){return 2==this.Za},Em:function(){return 3==this.Za},ne:function(){return 4==this.Za},Gx:function(){return 5==this.Za},Zg:function(){return 1!=this.Za},bh:function(){return this.ne()},zh:function(b){this.Ab();if(!t.isArray(b))throw new l(" Please specifiy a valid array");x(b,"An item");this.tf=null==b?null:new a(b);this.sf=null;this.Qb=this.tf},sw:function(){if(!this.tf){if(this.sf)throw new m("This Subscription was initiated using an item group, use getItemGroup instead of using getItems");
throw new m("The  item list/item group of this Subscription was not initiated");}return this.tf.Ic()},Us:function(a){this.Ab();this.tf=null;this.Qb=this.sf=null==a?null:new d(a)},rw:function(){if(!this.sf){if(this.tf)throw new m("This Subscription was initiated using an item list, use getItems instead of using getItemGroup");throw new m("The  item list/item group of this Subscription was not initiated");}return this.sf.Ic()},ek:function(b){this.Ab();if(!t.isArray(b))throw new l(" Please specifiy a valid array");
x(b,"A field");this.Mb=null==b?null:new a(b);this.Fc=null;this.ia=this.Mb;this.HA()},Cq:function(){if(!this.Mb){if(this.Fc)throw new m("This Subscription was initiated using a field schema, use getFieldSchema instead of using getFields");throw new IllegalStateExceptio("The field list/field schema of this Subscription was not initiated");}return this.Mb.Ic()},On:function(a){this.Ab();this.Mb=null;this.ia=this.Fc=null==a?null:new d(a)},jw:function(){if(!this.Fc){if(this.Mb)throw new m("This Subscription was initiated using a field list, use getFields instead of using getFieldSchema");
throw new IllegalStateExceptio("The field list/field schema of this Subscription was not initiated");}return this.Fc.Ic()},Ni:M("dd"),yh:function(a){this.Ab();this.qi=a;w.logDebug(p.resolve(444),this,a)},fw:M("qi"),ik:function(a){this.Ab();this.Th=a;w.logDebug(p.resolve(445),this,a)},Nw:M("Th"),Ah:function(a){a&&(a=new String(a),a=a.toLowerCase());var b=this.Ya;if(this.Zg()){if(!a&&0!=a||null==this.Ya)throw new m("Can't change the frequency from/to 'unfiltered' or null while the Subscription is active");
if("unfiltered"==a||"unfiltered"==this.Ya)throw new m("Can't change the frequency from/to 'unfiltered' or null while the Subscription is active");}if(a||0==a)if("unfiltered"==a||"unlimited"==a)this.Ya=a;else try{this.Ya=this.checkPositiveNumber(a,!1,!0)}catch(c){throw new l("The given value is not valid for this setting; use null, 'unlimited', 'unfiltered' or a positive number instead");}else this.Ya=null;if((this.Gm()||this.Em()||this.ne())&&String(b)!=String(this.Ya)&&(this.Ng(),this.c.bd(this,
this.xq()),3==this.rb))for(var g in this.xa)for(var f in this.xa[g])r.verifyOk(this.ne()),this.xa[g][f].Ah(this.Ya);w.logDebug(p.resolve(446),this,this.Ya)},Jw:M("Ya"),hk:function(a){this.Ab();if(a||0==a)if(a=new String(a),a=a.toLowerCase(),"unlimited"==a)this.Ae=a;else try{this.Ae=this.checkPositiveNumber(a)}catch(b){throw new l("The given value is not valid for this setting; use null, 'unlimited' or a positive number instead");}else this.Ae=null;w.logDebug(p.resolve(447),this,this.Ae)},Iw:M("Ae"),
Rn:function(a){this.Ab();if(a||0==a)if(a=new String(a),a=a.toLowerCase(),"no"==a)this.kc=a;else{if(this.dd==k.Qk)throw new m("Snapshot is not permitted if RAW was specified as mode");if("yes"==a)this.kc=a;else{if(isNaN(a))throw new l("The given value is not valid for this setting; use null, 'yes', 'no' or a positive number instead");if(this.dd!=k.Mk)throw new m("Numeric values are only allowed when the subscription mode is DISTINCT");try{this.kc=this.checkPositiveNumber(a)}catch(b){throw new l("The given value is not valid for this setting; use null, 'yes', 'no' or a positive number instead");
}}}else this.kc=null;w.logDebug(p.resolve(448),this,this.kc)},Kw:M("kc"),lA:function(b){this.Ab();this.In();if(!t.isArray(b))throw new l(" Please specifiy a valid array");x(b,"A field");this.Jd=null==b?null:new a(b);this.Ee=null;this.Ch=this.Jd;this.ns()},Yv:function(){if(!this.Jd){if(this.Ee)throw new m("The second level of this Subscription was initiated using a field schema, use getCommandSecondLevelFieldSchema instead of using getCommandSecondLevelFields");throw new m("The second level of this Subscription was not initiated");
}return this.Jd.Ic()},kA:function(a){this.Ab();this.In();this.Jd=null;this.Ch=this.Ee=null==a?null:new d(a);this.ns()},Xv:function(){if(!this.Ee){if(this.Jd)throw new m("The second level of this Subscription was initiated using a field list, use getCommandSecondLevelFields instead of using getCommandSecondLevelFieldSchema");throw new m("The second level of this Subscription was not initiated");}return this.Ee.Ic()},jA:function(a){this.Ab();this.In();this.wo=a;w.logDebug(p.resolve(449),this,a)},Wv:M("wo"),
getValue:function(a,b){return this.te.get(this.pt(a),this.ot(b))},Zv:function(a,b,c){this.zl();return this.Oc.get(this.pt(a)+" "+b,this.ot(c,!0))},Iq:function(){this.zl();if(!this.Fc&&this.Mb)throw new m("This Subscription was initiated using a field list, key field is always 'key'");if(null==this.keyCode)throw new m("The position of the key field is currently unknown");return this.keyCode},yq:function(){this.zl();if(!this.Fc&&this.Mb)throw new m("This Subscription was initiated using a field list, command field is always 'command'");
if(null==this.eb)throw new m("The position of the command field is currently unknown");return this.eb},ot:function(a,b){var c=this.Ih(a,this.ia,b);if(null===c)throw new l("the specified field does not exist");if(!1===c)throw new l("the specified field position is out of bounds");return c},pt:function(a){a=this.Ih(a,this.Qb);if(null===a)throw new l("the specified item does not exist");if(!1===a)throw new l("the specified item position is out of bounds");return a},Ih:function(a,b,c){a=isNaN(a)?b.je(a):
a;return null==a?null:0>=a||a>(c?b.km():b.yb)?!1:a},ns:function(){this.rb=null==this.Ch?2:3},Yl:function(a){this.dispatchEvent("onEndOfSnapshot",[this.Qb.getName(a),a])},ul:function(a){var c=this.Qb.getName(a);2==this.rb?this.Oc=new b:3==this.rb&&(this.Oc=new b,this.ys(a));this.dispatchEvent("onClearSnapshot",[c,a])},fy:function(a,b){this.dispatchEvent("onItemLostUpdates",[this.Qb.getName(a),a,b])},gA:function(a,b){this.dispatchEvent("onSubscriptionError",[a,b])},update:function(a,b,c){r.verifyValue(4,
this.Za);var g=a[1],f=new String(g);1!=this.rb&&(f=this.qz(a,g,c));3!=this.rb||c||this.ix(a);1==this.rb?this.ut(this.te,g,a,!0):this.ut(this.Oc,f,a,!0);a=new e(this.Qb.getName(g),g,this.ia,b,a);this.dispatchEvent("onItemUpdate",[a]);"DELETE"==this.Oc.get(f,this.eb)&&this.Oc.delRow(f)},ut:function(a,b,c,g){var f=c.length-2,d=1,e=2;for(c.vo={};d<=f;d++,e++)c[e]!==C?a.insert(c[e],b,d):g&&(c[e]=a.get(b,d),c.vo[e]=!0)},qz:function(a,b,c){var g;if("undefined"==typeof a[this.keyCode+1]||"undefined"==typeof a[this.eb+
1])return w.logWarn(p.resolve(432)),null;g=a[this.keyCode+1]==C?b+" "+this.te.get(b,this.keyCode):b+" "+a[this.keyCode+1];if(c)a[this.keyCode+1]=C,a[this.eb+1]==this.Oc.get(g,this.eb)?a[this.eb+1]=C:(a.Cc.push(this.eb),a.Cc.sort(D));else{a.Cc=[];for(c=2;c<a.length;c++)a[c]&&a[c]==C?a[c]=this.te.get(b,c-1):this.te.insert(a[c],b,c-1),a[c]==this.Oc.get(g,c-1)?a[c]=C:a.Cc.push(c-1);if(3==this.rb&&(b=this.Hq()+2,b>a.length))for(c=a.length;c<b;c++)a[c]=C}return g},ix:function(a){var b=a[1],c=a[this.keyCode+
1]==C?this.te.get(b,this.keyCode):a[this.keyCode+1];a=a[this.eb+1];this.xa[b]&&this.xa[b][c]&&"DELETE"==a?this.zs(b,c):this.xa[b]&&this.xa[b][c]||"DELETE"==a||this.fu(b,c)},hy:function(){this.dt=!0},kx:function(a,b){return this.xa[a]&&this.xa[a][b]},zs:function(a,b){this.c.Pj(this.xa[a][b]);delete this.xa[a][b]},fu:function(a,b){var c=new s(this.gB);c.zh([b]);this.Jd?c.ek(this.Jd.Ic()):c.On(this.Ee.Ic());c.yh(this.wo);c.Rn("yes");c.Ya=this.Ya;c.hy();var g=new h(this,a,b);c.addListener(g);this.xa[a]||
(this.xa[a]={});this.xa[a][b]=c;this.c.Xh(c)},IA:function(a){this.Ch.Id(a)},Hq:function(){return this.ia.km()},addListener:function(a){this._callSuperMethod(s,"addListener",[a])},removeListener:function(a){this._callSuperMethod(s,"removeListener",[a])},getListeners:function(){return this._callSuperMethod(s,"getListeners")}};s.prototype.isActive=s.prototype.Zg;s.prototype.isSubscribed=s.prototype.bh;s.prototype.setItems=s.prototype.zh;s.prototype.getItems=s.prototype.sw;s.prototype.setItemGroup=s.prototype.Us;
s.prototype.getItemGroup=s.prototype.rw;s.prototype.setFields=s.prototype.ek;s.prototype.getFields=s.prototype.Cq;s.prototype.setFieldSchema=s.prototype.On;s.prototype.getFieldSchema=s.prototype.jw;s.prototype.getMode=s.prototype.Ni;s.prototype.setDataAdapter=s.prototype.yh;s.prototype.getDataAdapter=s.prototype.fw;s.prototype.setSelector=s.prototype.ik;s.prototype.getSelector=s.prototype.Nw;s.prototype.setRequestedMaxFrequency=s.prototype.Ah;s.prototype.getRequestedMaxFrequency=s.prototype.Jw;s.prototype.setRequestedBufferSize=
s.prototype.hk;s.prototype.getRequestedBufferSize=s.prototype.Iw;s.prototype.setRequestedSnapshot=s.prototype.Rn;s.prototype.getRequestedSnapshot=s.prototype.Kw;s.prototype.setCommandSecondLevelFields=s.prototype.lA;s.prototype.getCommandSecondLevelFields=s.prototype.Yv;s.prototype.setCommandSecondLevelFieldSchema=s.prototype.kA;s.prototype.getCommandSecondLevelFieldSchema=s.prototype.Xv;s.prototype.setCommandSecondLevelDataAdapter=s.prototype.jA;s.prototype.getCommandSecondLevelDataAdapter=s.prototype.Wv;
s.prototype.getValue=s.prototype.getValue;s.prototype.getCommandValue=s.prototype.Zv;s.prototype.getKeyPosition=s.prototype.Iq;s.prototype.getCommandPosition=s.prototype.yq;s.prototype.addListener=s.prototype.addListener;s.prototype.removeListener=s.prototype.removeListener;s.prototype.getListeners=s.prototype.getListeners;c(s,n,!1,!0);c(s,g,!0,!0);return s});
var classes =['LightstreamerClient','Subscription'];window.Lightstreamer={};require(classes,function(){for (var i=0;i<classes.length;i++)Lightstreamer[classes[i]]=arguments[i];});})();
}).call(this,require('_process'))
},{"_process":1}],4:[function(require,module,exports){
pidCryptUtil = {};

pidCryptUtil.encodeBase64 = function(str, utf8encode) {
    if (!str) str = "";
    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    utf8encode = typeof utf8encode == "undefined" ? false : utf8encode;
    var o1, o2, o3, bits, h1, h2, h3, h4, e = [], pad = "", c, plain, coded;
    plain = utf8encode ? pidCryptUtil.encodeUTF8(str) : str;
    c = plain.length % 3;
    if (c > 0) {
        while (c++ < 3) {
            pad += "=";
            plain += "\0";
        }
    }
    for (c = 0; c < plain.length; c += 3) {
        o1 = plain.charCodeAt(c);
        o2 = plain.charCodeAt(c + 1);
        o3 = plain.charCodeAt(c + 2);
        bits = o1 << 16 | o2 << 8 | o3;
        h1 = bits >> 18 & 63;
        h2 = bits >> 12 & 63;
        h3 = bits >> 6 & 63;
        h4 = bits & 63;
        e[c / 3] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
    }
    coded = e.join("");
    coded = coded.slice(0, coded.length - pad.length) + pad;
    return coded;
};

pidCryptUtil.decodeBase64 = function(str, utf8decode) {
    if (!str) str = "";
    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    utf8decode = typeof utf8decode == "undefined" ? false : utf8decode;
    var o1, o2, o3, h1, h2, h3, h4, bits, d = [], plain, coded;
    coded = utf8decode ? pidCryptUtil.decodeUTF8(str) : str;
    for (var c = 0; c < coded.length; c += 4) {
        h1 = b64.indexOf(coded.charAt(c));
        h2 = b64.indexOf(coded.charAt(c + 1));
        h3 = b64.indexOf(coded.charAt(c + 2));
        h4 = b64.indexOf(coded.charAt(c + 3));
        bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
        o1 = bits >>> 16 & 255;
        o2 = bits >>> 8 & 255;
        o3 = bits & 255;
        d[c / 4] = String.fromCharCode(o1, o2, o3);
        if (h4 == 64) d[c / 4] = String.fromCharCode(o1, o2);
        if (h3 == 64) d[c / 4] = String.fromCharCode(o1);
    }
    plain = d.join("");
    plain = utf8decode ? pidCryptUtil.decodeUTF8(plain) : plain;
    return plain;
};

pidCryptUtil.encodeUTF8 = function(str) {
    if (!str) str = "";
    str = str.replace(/[\u0080-\u07ff]/g, function(c) {
        var cc = c.charCodeAt(0);
        return String.fromCharCode(192 | cc >> 6, 128 | cc & 63);
    });
    str = str.replace(/[\u0800-\uffff]/g, function(c) {
        var cc = c.charCodeAt(0);
        return String.fromCharCode(224 | cc >> 12, 128 | cc >> 6 & 63, 128 | cc & 63);
    });
    return str;
};

pidCryptUtil.decodeUTF8 = function(str) {
    if (!str) str = "";
    str = str.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, function(c) {
        var cc = (c.charCodeAt(0) & 31) << 6 | c.charCodeAt(1) & 63;
        return String.fromCharCode(cc);
    });
    str = str.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, function(c) {
        var cc = (c.charCodeAt(0) & 15) << 12 | (c.charCodeAt(1) & 63) << 6 | c.charCodeAt(2) & 63;
        return String.fromCharCode(cc);
    });
    return str;
};

pidCryptUtil.convertToHex = function(str) {
    if (!str) str = "";
    var hs = "";
    var hv = "";
    for (var i = 0; i < str.length; i++) {
        hv = str.charCodeAt(i).toString(16);
        hs += hv.length == 1 ? "0" + hv : hv;
    }
    return hs;
};

pidCryptUtil.convertFromHex = function(str) {
    if (!str) str = "";
    var s = "";
    for (var i = 0; i < str.length; i += 2) {
        s += String.fromCharCode(parseInt(str.substring(i, i + 2), 16));
    }
    return s;
};

pidCryptUtil.stripLineFeeds = function(str) {
    if (!str) str = "";
    var s = "";
    s = str.replace(/\n/g, "");
    s = s.replace(/\r/g, "");
    return s;
};

pidCryptUtil.toByteArray = function(str) {
    if (!str) str = "";
    var ba = [];
    for (var i = 0; i < str.length; i++) ba[i] = str.charCodeAt(i);
    return ba;
};

pidCryptUtil.fragment = function(str, length, lf) {
    if (!str) str = "";
    if (!length || length >= str.length) return str;
    if (!lf) lf = "\n";
    var tmp = "";
    for (var i = 0; i < str.length; i += length) tmp += str.substr(i, length) + lf;
    return tmp;
};

pidCryptUtil.formatHex = function(str, length) {
    if (!str) str = "";
    if (!length) length = 45;
    var str_new = "";
    var j = 0;
    var hex = str.toLowerCase();
    for (var i = 0; i < hex.length; i += 2) str_new += hex.substr(i, 2) + ":";
    hex = this.fragment(str_new, length);
    return hex;
};

pidCryptUtil.byteArray2String = function(b) {
    var s = "";
    for (var i = 0; i < b.length; i++) {
        s += String.fromCharCode(b[i]);
    }
    return s;
};

function pidCrypt() {
    function getRandomBytes(len) {
        if (!len) len = 8;
        var bytes = new Array(len);
        var field = [];
        for (var i = 0; i < 256; i++) field[i] = i;
        for (i = 0; i < bytes.length; i++) bytes[i] = field[Math.floor(Math.random() * field.length)];
        return bytes;
    }
    this.setDefaults = function() {
        this.params.nBits = 256;
        this.params.salt = getRandomBytes(8);
        this.params.salt = pidCryptUtil.byteArray2String(this.params.salt);
        this.params.salt = pidCryptUtil.convertToHex(this.params.salt);
        this.params.blockSize = 16;
        this.params.UTF8 = true;
        this.params.A0_PAD = true;
    };
    this.debug = true;
    this.params = {};
    this.params.dataIn = "";
    this.params.dataOut = "";
    this.params.decryptIn = "";
    this.params.decryptOut = "";
    this.params.encryptIn = "";
    this.params.encryptOut = "";
    this.params.key = "";
    this.params.iv = "";
    this.params.clear = true;
    this.setDefaults();
    this.errors = "";
    this.warnings = "";
    this.infos = "";
    this.debugMsg = "";
    this.setParams = function(pObj) {
        if (!pObj) pObj = {};
        for (var p in pObj) this.params[p] = pObj[p];
    };
    this.getParams = function() {
        return this.params;
    };
    this.getParam = function(p) {
        return this.params[p] || "";
    };
    this.clearParams = function() {
        this.params = {};
    };
    this.getNBits = function() {
        return this.params.nBits;
    };
    this.getOutput = function() {
        return this.params.dataOut;
    };
    this.setError = function(str) {
        this.error = str;
    };
    this.appendError = function(str) {
        this.errors += str;
        return "";
    };
    this.getErrors = function() {
        return this.errors;
    };
    this.isError = function() {
        if (this.errors.length > 0) return true;
        return false;
    };
    this.appendInfo = function(str) {
        this.infos += str;
        return "";
    };
    this.getInfos = function() {
        return this.infos;
    };
    this.setDebug = function(flag) {
        this.debug = flag;
    };
    this.appendDebug = function(str) {
        this.debugMsg += str;
        return "";
    };
    this.isDebug = function() {
        return this.debug;
    };
    this.getAllMessages = function(options) {
        var defaults = {
            lf: "\n",
            clr_mes: false,
            verbose: 15
        };
        if (!options) options = defaults;
        for (var d in defaults) if (typeof options[d] == "undefined") options[d] = defaults[d];
        var mes = "";
        var tmp = "";
        for (var p in this.params) {
            switch (p) {
              case "encryptOut":
                tmp = pidCryptUtil.toByteArray(this.params[p].toString());
                tmp = pidCryptUtil.fragment(tmp.join(), 64, options.lf);
                break;

              case "key":
              case "iv":
                tmp = pidCryptUtil.formatHex(this.params[p], 48);
                break;

              default:
                tmp = pidCryptUtil.fragment(this.params[p].toString(), 64, options.lf);
            }
            mes += "<p><b>" + p + "</b>:<pre>" + tmp + "</pre></p>";
        }
        if (this.debug) mes += "debug: " + this.debug + options.lf;
        if (this.errors.length > 0 && (options.verbose & 1) == 1) mes += "Errors:" + options.lf + this.errors + options.lf;
        if (this.warnings.length > 0 && (options.verbose & 2) == 2) mes += "Warnings:" + options.lf + this.warnings + options.lf;
        if (this.infos.length > 0 && (options.verbose & 4) == 4) mes += "Infos:" + options.lf + this.infos + options.lf;
        if (this.debug && (options.verbose & 8) == 8) mes += "Debug messages:" + options.lf + this.debugMsg + options.lf;
        if (options.clr_mes) this.errors = this.infos = this.warnings = this.debug = "";
        return mes;
    };
    this.getRandomBytes = function(len) {
        return getRandomBytes(len);
    };
}

if (typeof pidCrypt != "undefined") {
    pidCrypt.MD5 = function(string) {
        function RotateLeft(lValue, iShiftBits) {
            return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
        }
        function AddUnsigned(lX, lY) {
            var lX4, lY4, lX8, lY8, lResult;
            lX8 = lX & 2147483648;
            lY8 = lY & 2147483648;
            lX4 = lX & 1073741824;
            lY4 = lY & 1073741824;
            lResult = (lX & 1073741823) + (lY & 1073741823);
            if (lX4 & lY4) {
                return lResult ^ 2147483648 ^ lX8 ^ lY8;
            }
            if (lX4 | lY4) {
                if (lResult & 1073741824) {
                    return lResult ^ 3221225472 ^ lX8 ^ lY8;
                } else {
                    return lResult ^ 1073741824 ^ lX8 ^ lY8;
                }
            } else {
                return lResult ^ lX8 ^ lY8;
            }
        }
        function F(x, y, z) {
            return x & y | ~x & z;
        }
        function G(x, y, z) {
            return x & z | y & ~z;
        }
        function H(x, y, z) {
            return x ^ y ^ z;
        }
        function I(x, y, z) {
            return y ^ (x | ~z);
        }
        function FF(a, b, c, d, x, s, ac) {
            a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
            return AddUnsigned(RotateLeft(a, s), b);
        }
        function GG(a, b, c, d, x, s, ac) {
            a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
            return AddUnsigned(RotateLeft(a, s), b);
        }
        function HH(a, b, c, d, x, s, ac) {
            a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
            return AddUnsigned(RotateLeft(a, s), b);
        }
        function II(a, b, c, d, x, s, ac) {
            a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
            return AddUnsigned(RotateLeft(a, s), b);
        }
        function ConvertToWordArray(string) {
            var lWordCount;
            var lMessageLength = string.length;
            var lNumberOfWords_temp1 = lMessageLength + 8;
            var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
            var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
            var lWordArray = Array(lNumberOfWords - 1);
            var lBytePosition = 0;
            var lByteCount = 0;
            while (lByteCount < lMessageLength) {
                lWordCount = (lByteCount - lByteCount % 4) / 4;
                lBytePosition = lByteCount % 4 * 8;
                lWordArray[lWordCount] = lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
                lByteCount++;
            }
            lWordCount = (lByteCount - lByteCount % 4) / 4;
            lBytePosition = lByteCount % 4 * 8;
            lWordArray[lWordCount] = lWordArray[lWordCount] | 128 << lBytePosition;
            lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
            lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
            return lWordArray;
        }
        function WordToHex(lValue) {
            var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
            for (lCount = 0; lCount <= 3; lCount++) {
                lByte = lValue >>> lCount * 8 & 255;
                WordToHexValue_temp = "0" + lByte.toString(16);
                WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
            }
            return WordToHexValue;
        }
        var x = Array();
        var k, AA, BB, CC, DD, a, b, c, d;
        var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
        var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
        var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
        var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
        x = ConvertToWordArray(string);
        a = 1732584193;
        b = 4023233417;
        c = 2562383102;
        d = 271733878;
        for (k = 0; k < x.length; k += 16) {
            AA = a;
            BB = b;
            CC = c;
            DD = d;
            a = FF(a, b, c, d, x[k + 0], S11, 3614090360);
            d = FF(d, a, b, c, x[k + 1], S12, 3905402710);
            c = FF(c, d, a, b, x[k + 2], S13, 606105819);
            b = FF(b, c, d, a, x[k + 3], S14, 3250441966);
            a = FF(a, b, c, d, x[k + 4], S11, 4118548399);
            d = FF(d, a, b, c, x[k + 5], S12, 1200080426);
            c = FF(c, d, a, b, x[k + 6], S13, 2821735955);
            b = FF(b, c, d, a, x[k + 7], S14, 4249261313);
            a = FF(a, b, c, d, x[k + 8], S11, 1770035416);
            d = FF(d, a, b, c, x[k + 9], S12, 2336552879);
            c = FF(c, d, a, b, x[k + 10], S13, 4294925233);
            b = FF(b, c, d, a, x[k + 11], S14, 2304563134);
            a = FF(a, b, c, d, x[k + 12], S11, 1804603682);
            d = FF(d, a, b, c, x[k + 13], S12, 4254626195);
            c = FF(c, d, a, b, x[k + 14], S13, 2792965006);
            b = FF(b, c, d, a, x[k + 15], S14, 1236535329);
            a = GG(a, b, c, d, x[k + 1], S21, 4129170786);
            d = GG(d, a, b, c, x[k + 6], S22, 3225465664);
            c = GG(c, d, a, b, x[k + 11], S23, 643717713);
            b = GG(b, c, d, a, x[k + 0], S24, 3921069994);
            a = GG(a, b, c, d, x[k + 5], S21, 3593408605);
            d = GG(d, a, b, c, x[k + 10], S22, 38016083);
            c = GG(c, d, a, b, x[k + 15], S23, 3634488961);
            b = GG(b, c, d, a, x[k + 4], S24, 3889429448);
            a = GG(a, b, c, d, x[k + 9], S21, 568446438);
            d = GG(d, a, b, c, x[k + 14], S22, 3275163606);
            c = GG(c, d, a, b, x[k + 3], S23, 4107603335);
            b = GG(b, c, d, a, x[k + 8], S24, 1163531501);
            a = GG(a, b, c, d, x[k + 13], S21, 2850285829);
            d = GG(d, a, b, c, x[k + 2], S22, 4243563512);
            c = GG(c, d, a, b, x[k + 7], S23, 1735328473);
            b = GG(b, c, d, a, x[k + 12], S24, 2368359562);
            a = HH(a, b, c, d, x[k + 5], S31, 4294588738);
            d = HH(d, a, b, c, x[k + 8], S32, 2272392833);
            c = HH(c, d, a, b, x[k + 11], S33, 1839030562);
            b = HH(b, c, d, a, x[k + 14], S34, 4259657740);
            a = HH(a, b, c, d, x[k + 1], S31, 2763975236);
            d = HH(d, a, b, c, x[k + 4], S32, 1272893353);
            c = HH(c, d, a, b, x[k + 7], S33, 4139469664);
            b = HH(b, c, d, a, x[k + 10], S34, 3200236656);
            a = HH(a, b, c, d, x[k + 13], S31, 681279174);
            d = HH(d, a, b, c, x[k + 0], S32, 3936430074);
            c = HH(c, d, a, b, x[k + 3], S33, 3572445317);
            b = HH(b, c, d, a, x[k + 6], S34, 76029189);
            a = HH(a, b, c, d, x[k + 9], S31, 3654602809);
            d = HH(d, a, b, c, x[k + 12], S32, 3873151461);
            c = HH(c, d, a, b, x[k + 15], S33, 530742520);
            b = HH(b, c, d, a, x[k + 2], S34, 3299628645);
            a = II(a, b, c, d, x[k + 0], S41, 4096336452);
            d = II(d, a, b, c, x[k + 7], S42, 1126891415);
            c = II(c, d, a, b, x[k + 14], S43, 2878612391);
            b = II(b, c, d, a, x[k + 5], S44, 4237533241);
            a = II(a, b, c, d, x[k + 12], S41, 1700485571);
            d = II(d, a, b, c, x[k + 3], S42, 2399980690);
            c = II(c, d, a, b, x[k + 10], S43, 4293915773);
            b = II(b, c, d, a, x[k + 1], S44, 2240044497);
            a = II(a, b, c, d, x[k + 8], S41, 1873313359);
            d = II(d, a, b, c, x[k + 15], S42, 4264355552);
            c = II(c, d, a, b, x[k + 6], S43, 2734768916);
            b = II(b, c, d, a, x[k + 13], S44, 1309151649);
            a = II(a, b, c, d, x[k + 4], S41, 4149444226);
            d = II(d, a, b, c, x[k + 11], S42, 3174756917);
            c = II(c, d, a, b, x[k + 2], S43, 718787259);
            b = II(b, c, d, a, x[k + 9], S44, 3951481745);
            a = AddUnsigned(a, AA);
            b = AddUnsigned(b, BB);
            c = AddUnsigned(c, CC);
            d = AddUnsigned(d, DD);
        }
        var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
        return temp.toLowerCase();
    };
}

if (typeof pidCrypt != "undefined") {
    pidCrypt.SHA1 = function(msg) {
        function rotate_left(n, s) {
            var t4 = n << s | n >>> 32 - s;
            return t4;
        }
        function lsb_hex(val) {
            var str = "";
            var i;
            var vh;
            var vl;
            for (i = 0; i <= 6; i += 2) {
                vh = val >>> i * 4 + 4 & 15;
                vl = val >>> i * 4 & 15;
                str += vh.toString(16) + vl.toString(16);
            }
            return str;
        }
        function cvt_hex(val) {
            var str = "";
            var i;
            var v;
            for (i = 7; i >= 0; i--) {
                v = val >>> i * 4 & 15;
                str += v.toString(16);
            }
            return str;
        }
        var blockstart;
        var i, j;
        var W = new Array(80);
        var H0 = 1732584193;
        var H1 = 4023233417;
        var H2 = 2562383102;
        var H3 = 271733878;
        var H4 = 3285377520;
        var A, B, C, D, E;
        var temp;
        var msg_len = msg.length;
        var word_array = new Array();
        for (i = 0; i < msg_len - 3; i += 4) {
            j = msg.charCodeAt(i) << 24 | msg.charCodeAt(i + 1) << 16 | msg.charCodeAt(i + 2) << 8 | msg.charCodeAt(i + 3);
            word_array.push(j);
        }
        switch (msg_len % 4) {
          case 0:
            i = 2147483648;
            break;

          case 1:
            i = msg.charCodeAt(msg_len - 1) << 24 | 8388608;
            break;

          case 2:
            i = msg.charCodeAt(msg_len - 2) << 24 | msg.charCodeAt(msg_len - 1) << 16 | 32768;
            break;

          case 3:
            i = msg.charCodeAt(msg_len - 3) << 24 | msg.charCodeAt(msg_len - 2) << 16 | msg.charCodeAt(msg_len - 1) << 8 | 128;
            break;
        }
        word_array.push(i);
        while (word_array.length % 16 != 14) word_array.push(0);
        word_array.push(msg_len >>> 29);
        word_array.push(msg_len << 3 & 4294967295);
        for (blockstart = 0; blockstart < word_array.length; blockstart += 16) {
            for (i = 0; i < 16; i++) W[i] = word_array[blockstart + i];
            for (i = 16; i <= 79; i++) W[i] = rotate_left(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
            A = H0;
            B = H1;
            C = H2;
            D = H3;
            E = H4;
            for (i = 0; i <= 19; i++) {
                temp = rotate_left(A, 5) + (B & C | ~B & D) + E + W[i] + 1518500249 & 4294967295;
                E = D;
                D = C;
                C = rotate_left(B, 30);
                B = A;
                A = temp;
            }
            for (i = 20; i <= 39; i++) {
                temp = rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 1859775393 & 4294967295;
                E = D;
                D = C;
                C = rotate_left(B, 30);
                B = A;
                A = temp;
            }
            for (i = 40; i <= 59; i++) {
                temp = rotate_left(A, 5) + (B & C | B & D | C & D) + E + W[i] + 2400959708 & 4294967295;
                E = D;
                D = C;
                C = rotate_left(B, 30);
                B = A;
                A = temp;
            }
            for (i = 60; i <= 79; i++) {
                temp = rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 3395469782 & 4294967295;
                E = D;
                D = C;
                C = rotate_left(B, 30);
                B = A;
                A = temp;
            }
            H0 = H0 + A & 4294967295;
            H1 = H1 + B & 4294967295;
            H2 = H2 + C & 4294967295;
            H3 = H3 + D & 4294967295;
            H4 = H4 + E & 4294967295;
        }
        var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);
        return temp.toLowerCase();
    };
}

if (typeof pidCrypt != "undefined") {
    pidCrypt.SHA256 = function(s) {
        var chrsz = 8;
        function safe_add(x, y) {
            var lsw = (x & 65535) + (y & 65535);
            var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return msw << 16 | lsw & 65535;
        }
        function S(X, n) {
            return X >>> n | X << 32 - n;
        }
        function R(X, n) {
            return X >>> n;
        }
        function Ch(x, y, z) {
            return x & y ^ ~x & z;
        }
        function Maj(x, y, z) {
            return x & y ^ x & z ^ y & z;
        }
        function Sigma0256(x) {
            return S(x, 2) ^ S(x, 13) ^ S(x, 22);
        }
        function Sigma1256(x) {
            return S(x, 6) ^ S(x, 11) ^ S(x, 25);
        }
        function Gamma0256(x) {
            return S(x, 7) ^ S(x, 18) ^ R(x, 3);
        }
        function Gamma1256(x) {
            return S(x, 17) ^ S(x, 19) ^ R(x, 10);
        }
        function core_sha256(m, l) {
            var K = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298);
            var HASH = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225);
            var W = new Array(64);
            var a, b, c, d, e, f, g, h, i, j;
            var T1, T2;
            m[l >> 5] |= 128 << 24 - l % 32;
            m[(l + 64 >> 9 << 4) + 15] = l;
            for (var i = 0; i < m.length; i += 16) {
                a = HASH[0];
                b = HASH[1];
                c = HASH[2];
                d = HASH[3];
                e = HASH[4];
                f = HASH[5];
                g = HASH[6];
                h = HASH[7];
                for (var j = 0; j < 64; j++) {
                    if (j < 16) W[j] = m[j + i]; else W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);
                    T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);
                    T2 = safe_add(Sigma0256(a), Maj(a, b, c));
                    h = g;
                    g = f;
                    f = e;
                    e = safe_add(d, T1);
                    d = c;
                    c = b;
                    b = a;
                    a = safe_add(T1, T2);
                }
                HASH[0] = safe_add(a, HASH[0]);
                HASH[1] = safe_add(b, HASH[1]);
                HASH[2] = safe_add(c, HASH[2]);
                HASH[3] = safe_add(d, HASH[3]);
                HASH[4] = safe_add(e, HASH[4]);
                HASH[5] = safe_add(f, HASH[5]);
                HASH[6] = safe_add(g, HASH[6]);
                HASH[7] = safe_add(h, HASH[7]);
            }
            return HASH;
        }
        function str2binb(str) {
            var bin = Array();
            var mask = (1 << chrsz) - 1;
            for (var i = 0; i < str.length * chrsz; i += chrsz) bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << 24 - i % 32;
            return bin;
        }
        function binb2hex(binarray) {
            var hexcase = 0;
            var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
            var str = "";
            for (var i = 0; i < binarray.length * 4; i++) {
                str += hex_tab.charAt(binarray[i >> 2] >> (3 - i % 4) * 8 + 4 & 15) + hex_tab.charAt(binarray[i >> 2] >> (3 - i % 4) * 8 & 15);
            }
            return str;
        }
        function hex_sha256(s) {
            return binb2hex(core_sha256(str2binb(s), s.length * chrsz));
        }
        return binb2hex(core_sha256(str2binb(s), s.length * chrsz));
    };
}

if (typeof pidCrypt != "undefined") {
    function Int_64(msint_32, lsint_32) {
        this.highOrder = msint_32;
        this.lowOrder = lsint_32;
    }
    function jsSHA(srcString) {
        jsSHA.charSize = 8;
        jsSHA.b64pad = "";
        jsSHA.hexCase = 0;
        var sha384 = null;
        var sha512 = null;
        var str2binb = function(str) {
            var bin = [];
            var mask = (1 << jsSHA.charSize) - 1;
            var length = str.length * jsSHA.charSize;
            for (var i = 0; i < length; i += jsSHA.charSize) {
                bin[i >> 5] |= (str.charCodeAt(i / jsSHA.charSize) & mask) << 32 - jsSHA.charSize - i % 32;
            }
            return bin;
        };
        var strBinLen = srcString.length * jsSHA.charSize;
        var strToHash = str2binb(srcString);
        var binb2hex = function(binarray) {
            var hex_tab = jsSHA.hexCase ? "0123456789ABCDEF" : "0123456789abcdef";
            var str = "";
            var length = binarray.length * 4;
            for (var i = 0; i < length; i++) {
                str += hex_tab.charAt(binarray[i >> 2] >> (3 - i % 4) * 8 + 4 & 15) + hex_tab.charAt(binarray[i >> 2] >> (3 - i % 4) * 8 & 15);
            }
            return str;
        };
        var binb2b64 = function(binarray) {
            var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            var str = "";
            var length = binarray.length * 4;
            for (var i = 0; i < length; i += 3) {
                var triplet = (binarray[i >> 2] >> 8 * (3 - i % 4) & 255) << 16 | (binarray[i + 1 >> 2] >> 8 * (3 - (i + 1) % 4) & 255) << 8 | binarray[i + 2 >> 2] >> 8 * (3 - (i + 2) % 4) & 255;
                for (var j = 0; j < 4; j++) {
                    if (i * 8 + j * 6 > binarray.length * 32) {
                        str += jsSHA.b64pad;
                    } else {
                        str += tab.charAt(triplet >> 6 * (3 - j) & 63);
                    }
                }
            }
            return str;
        };
        var rotr = function(x, n) {
            if (n < 32) {
                return new Int_64(x.highOrder >>> n | x.lowOrder << 32 - n, x.lowOrder >>> n | x.highOrder << 32 - n);
            } else if (n === 32) {
                return new Int_64(x.lowOrder, x.highOrder);
            } else {
                return rotr(rotr(x, 32), n - 32);
            }
        };
        var shr = function(x, n) {
            if (n < 32) {
                return new Int_64(x.highOrder >>> n, x.lowOrder >>> n | x.highOrder << 32 - n);
            } else if (n === 32) {
                return new Int_64(0, x.highOrder);
            } else {
                return shr(shr(x, 32), n - 32);
            }
        };
        var ch = function(x, y, z) {
            return new Int_64(x.highOrder & y.highOrder ^ ~x.highOrder & z.highOrder, x.lowOrder & y.lowOrder ^ ~x.lowOrder & z.lowOrder);
        };
        var maj = function(x, y, z) {
            return new Int_64(x.highOrder & y.highOrder ^ x.highOrder & z.highOrder ^ y.highOrder & z.highOrder, x.lowOrder & y.lowOrder ^ x.lowOrder & z.lowOrder ^ y.lowOrder & z.lowOrder);
        };
        var sigma0 = function(x) {
            var rotr28 = rotr(x, 28);
            var rotr34 = rotr(x, 34);
            var rotr39 = rotr(x, 39);
            return new Int_64(rotr28.highOrder ^ rotr34.highOrder ^ rotr39.highOrder, rotr28.lowOrder ^ rotr34.lowOrder ^ rotr39.lowOrder);
        };
        var sigma1 = function(x) {
            var rotr14 = rotr(x, 14);
            var rotr18 = rotr(x, 18);
            var rotr41 = rotr(x, 41);
            return new Int_64(rotr14.highOrder ^ rotr18.highOrder ^ rotr41.highOrder, rotr14.lowOrder ^ rotr18.lowOrder ^ rotr41.lowOrder);
        };
        var gamma0 = function(x) {
            var rotr1 = rotr(x, 1);
            var rotr8 = rotr(x, 8);
            var shr7 = shr(x, 7);
            return new Int_64(rotr1.highOrder ^ rotr8.highOrder ^ shr7.highOrder, rotr1.lowOrder ^ rotr8.lowOrder ^ shr7.lowOrder);
        };
        var gamma1 = function(x) {
            var rotr19 = rotr(x, 19);
            var rotr61 = rotr(x, 61);
            var shr6 = shr(x, 6);
            return new Int_64(rotr19.highOrder ^ rotr61.highOrder ^ shr6.highOrder, rotr19.lowOrder ^ rotr61.lowOrder ^ shr6.lowOrder);
        };
        var safeAdd = function(x, y) {
            var lsw = (x.lowOrder & 65535) + (y.lowOrder & 65535);
            var msw = (x.lowOrder >>> 16) + (y.lowOrder >>> 16) + (lsw >>> 16);
            var lowOrder = (msw & 65535) << 16 | lsw & 65535;
            lsw = (x.highOrder & 65535) + (y.highOrder & 65535) + (msw >>> 16);
            msw = (x.highOrder >>> 16) + (y.highOrder >>> 16) + (lsw >>> 16);
            var highOrder = (msw & 65535) << 16 | lsw & 65535;
            return new Int_64(highOrder, lowOrder);
        };
        var coreSHA2 = function(variant) {
            var W = [];
            var a, b, c, d, e, f, g, h;
            var T1, T2;
            var H;
            var K = [ new Int_64(1116352408, 3609767458), new Int_64(1899447441, 602891725), new Int_64(3049323471, 3964484399), new Int_64(3921009573, 2173295548), new Int_64(961987163, 4081628472), new Int_64(1508970993, 3053834265), new Int_64(2453635748, 2937671579), new Int_64(2870763221, 3664609560), new Int_64(3624381080, 2734883394), new Int_64(310598401, 1164996542), new Int_64(607225278, 1323610764), new Int_64(1426881987, 3590304994), new Int_64(1925078388, 4068182383), new Int_64(2162078206, 991336113), new Int_64(2614888103, 633803317), new Int_64(3248222580, 3479774868), new Int_64(3835390401, 2666613458), new Int_64(4022224774, 944711139), new Int_64(264347078, 2341262773), new Int_64(604807628, 2007800933), new Int_64(770255983, 1495990901), new Int_64(1249150122, 1856431235), new Int_64(1555081692, 3175218132), new Int_64(1996064986, 2198950837), new Int_64(2554220882, 3999719339), new Int_64(2821834349, 766784016), new Int_64(2952996808, 2566594879), new Int_64(3210313671, 3203337956), new Int_64(3336571891, 1034457026), new Int_64(3584528711, 2466948901), new Int_64(113926993, 3758326383), new Int_64(338241895, 168717936), new Int_64(666307205, 1188179964), new Int_64(773529912, 1546045734), new Int_64(1294757372, 1522805485), new Int_64(1396182291, 2643833823), new Int_64(1695183700, 2343527390), new Int_64(1986661051, 1014477480), new Int_64(2177026350, 1206759142), new Int_64(2456956037, 344077627), new Int_64(2730485921, 1290863460), new Int_64(2820302411, 3158454273), new Int_64(3259730800, 3505952657), new Int_64(3345764771, 106217008), new Int_64(3516065817, 3606008344), new Int_64(3600352804, 1432725776), new Int_64(4094571909, 1467031594), new Int_64(275423344, 851169720), new Int_64(430227734, 3100823752), new Int_64(506948616, 1363258195), new Int_64(659060556, 3750685593), new Int_64(883997877, 3785050280), new Int_64(958139571, 3318307427), new Int_64(1322822218, 3812723403), new Int_64(1537002063, 2003034995), new Int_64(1747873779, 3602036899), new Int_64(1955562222, 1575990012), new Int_64(2024104815, 1125592928), new Int_64(2227730452, 2716904306), new Int_64(2361852424, 442776044), new Int_64(2428436474, 593698344), new Int_64(2756734187, 3733110249), new Int_64(3204031479, 2999351573), new Int_64(3329325298, 3815920427), new Int_64(3391569614, 3928383900), new Int_64(3515267271, 566280711), new Int_64(3940187606, 3454069534), new Int_64(4118630271, 4000239992), new Int_64(116418474, 1914138554), new Int_64(174292421, 2731055270), new Int_64(289380356, 3203993006), new Int_64(460393269, 320620315), new Int_64(685471733, 587496836), new Int_64(852142971, 1086792851), new Int_64(1017036298, 365543100), new Int_64(1126000580, 2618297676), new Int_64(1288033470, 3409855158), new Int_64(1501505948, 4234509866), new Int_64(1607167915, 987167468), new Int_64(1816402316, 1246189591) ];
            if (variant === "SHA-384") {
                H = [ new Int_64(3418070365, 3238371032), new Int_64(1654270250, 914150663), new Int_64(2438529370, 812702999), new Int_64(355462360, 4144912697), new Int_64(1731405415, 4290775857), new Int_64(41048885895, 1750603025), new Int_64(3675008525, 1694076839), new Int_64(1203062813, 3204075428) ];
            } else {
                H = [ new Int_64(1779033703, 4089235720), new Int_64(3144134277, 2227873595), new Int_64(1013904242, 4271175723), new Int_64(2773480762, 1595750129), new Int_64(1359893119, 2917565137), new Int_64(2600822924, 725511199), new Int_64(528734635, 4215389547), new Int_64(1541459225, 327033209) ];
            }
            var message = strToHash.slice();
            message[strBinLen >> 5] |= 128 << 24 - strBinLen % 32;
            message[(strBinLen + 1 + 128 >> 10 << 5) + 31] = strBinLen;
            var appendedMessageLength = message.length;
            for (var i = 0; i < appendedMessageLength; i += 32) {
                a = H[0];
                b = H[1];
                c = H[2];
                d = H[3];
                e = H[4];
                f = H[5];
                g = H[6];
                h = H[7];
                for (var t = 0; t < 80; t++) {
                    if (t < 16) {
                        W[t] = new Int_64(message[t * 2 + i], message[t * 2 + i + 1]);
                    } else {
                        W[t] = safeAdd(safeAdd(safeAdd(gamma1(W[t - 2]), W[t - 7]), gamma0(W[t - 15])), W[t - 16]);
                    }
                    T1 = safeAdd(safeAdd(safeAdd(safeAdd(h, sigma1(e)), ch(e, f, g)), K[t]), W[t]);
                    T2 = safeAdd(sigma0(a), maj(a, b, c));
                    h = g;
                    g = f;
                    f = e;
                    e = safeAdd(d, T1);
                    d = c;
                    c = b;
                    b = a;
                    a = safeAdd(T1, T2);
                }
                H[0] = safeAdd(a, H[0]);
                H[1] = safeAdd(b, H[1]);
                H[2] = safeAdd(c, H[2]);
                H[3] = safeAdd(d, H[3]);
                H[4] = safeAdd(e, H[4]);
                H[5] = safeAdd(f, H[5]);
                H[6] = safeAdd(g, H[6]);
                H[7] = safeAdd(h, H[7]);
            }
            switch (variant) {
              case "SHA-384":
                return [ H[0].highOrder, H[0].lowOrder, H[1].highOrder, H[1].lowOrder, H[2].highOrder, H[2].lowOrder, H[3].highOrder, H[3].lowOrder, H[4].highOrder, H[4].lowOrder, H[5].highOrder, H[5].lowOrder ];

              case "SHA-512":
                return [ H[0].highOrder, H[0].lowOrder, H[1].highOrder, H[1].lowOrder, H[2].highOrder, H[2].lowOrder, H[3].highOrder, H[3].lowOrder, H[4].highOrder, H[4].lowOrder, H[5].highOrder, H[5].lowOrder, H[6].highOrder, H[6].lowOrder, H[7].highOrder, H[7].lowOrder ];

              default:
                return [];
            }
        };
        this.getHash = function(variant, format) {
            var formatFunc = null;
            switch (format) {
              case "HEX":
                formatFunc = binb2hex;
                break;

              case "B64":
                formatFunc = binb2b64;
                break;

              default:
                return "FORMAT NOT RECOGNIZED";
            }
            switch (variant) {
              case "SHA-384":
                if (sha384 === null) {
                    sha384 = coreSHA2(variant);
                }
                return formatFunc(sha384);

              case "SHA-512":
                if (sha512 === null) {
                    sha512 = coreSHA2(variant);
                }
                return formatFunc(sha512);

              default:
                return "HASH NOT RECOGNIZED";
            }
        };
    }
    pidCrypt.SHA512 = function(str, format) {
        if (!format) format = "HEX";
        var sha = new jsSHA(str);
        return sha.getHash("SHA-512", format);
    };
    pidCrypt.SHA384 = function(str, format) {
        if (!format) format = "HEX";
        var sha = new jsSHA(str);
        return sha.getHash("SHA-384", format);
    };
}

if (typeof pidCrypt != "undefined") {
    pidCrypt.AES = function(env) {
        this.env = env ? env : new pidCrypt();
        this.blockSize = 16;
        this.ShiftRowTabInv;
        this.xtime;
        this.SBox = new Array(99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22);
        this.SBoxInv = new Array(82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125);
        this.ShiftRowTab = new Array(0, 5, 10, 15, 4, 9, 14, 3, 8, 13, 2, 7, 12, 1, 6, 11);
    };
    pidCrypt.AES.prototype.init = function() {
        this.env.setParams({
            blockSize: this.blockSize
        });
        this.ShiftRowTabInv = new Array(16);
        for (var i = 0; i < 16; i++) this.ShiftRowTabInv[this.ShiftRowTab[i]] = i;
        this.xtime = new Array(256);
        for (i = 0; i < 128; i++) {
            this.xtime[i] = i << 1;
            this.xtime[128 + i] = i << 1 ^ 27;
        }
    };
    pidCrypt.AES.prototype.expandKey = function(input) {
        var key = input.slice();
        var kl = key.length, ks, Rcon = 1;
        switch (kl) {
          case 16:
            ks = 16 * (10 + 1);
            break;

          case 24:
            ks = 16 * (12 + 1);
            break;

          case 32:
            ks = 16 * (14 + 1);
            break;

          default:
            alert("AESCore.expandKey: Only key lengths of 16, 24 or 32 bytes allowed!");
        }
        for (var i = kl; i < ks; i += 4) {
            var temp = key.slice(i - 4, i);
            if (i % kl == 0) {
                temp = new Array(this.SBox[temp[1]] ^ Rcon, this.SBox[temp[2]], this.SBox[temp[3]], this.SBox[temp[0]]);
                if ((Rcon <<= 1) >= 256) Rcon ^= 283;
            } else if (kl > 24 && i % kl == 16) temp = new Array(this.SBox[temp[0]], this.SBox[temp[1]], this.SBox[temp[2]], this.SBox[temp[3]]);
            for (var j = 0; j < 4; j++) key[i + j] = key[i + j - kl] ^ temp[j];
        }
        return key;
    };
    pidCrypt.AES.prototype.encrypt = function(input, key) {
        var l = key.length;
        var block = input.slice();
        this.addRoundKey(block, key.slice(0, 16));
        for (var i = 16; i < l - 16; i += 16) {
            this.subBytes(block);
            this.shiftRows(block);
            this.mixColumns(block);
            this.addRoundKey(block, key.slice(i, i + 16));
        }
        this.subBytes(block);
        this.shiftRows(block);
        this.addRoundKey(block, key.slice(i, l));
        return block;
    };
    pidCrypt.AES.prototype.decrypt = function(input, key) {
        var l = key.length;
        var block = input.slice();
        this.addRoundKey(block, key.slice(l - 16, l));
        this.shiftRows(block, 1);
        this.subBytes(block, 1);
        for (var i = l - 32; i >= 16; i -= 16) {
            this.addRoundKey(block, key.slice(i, i + 16));
            this.mixColumns_Inv(block);
            this.shiftRows(block, 1);
            this.subBytes(block, 1);
        }
        this.addRoundKey(block, key.slice(0, 16));
        return block;
    };
    pidCrypt.AES.prototype.subBytes = function(state, inv) {
        var box = typeof inv == "undefined" ? this.SBox.slice() : this.SBoxInv.slice();
        for (var i = 0; i < 16; i++) state[i] = box[state[i]];
    };
    pidCrypt.AES.prototype.addRoundKey = function(state, rkey) {
        for (var i = 0; i < 16; i++) state[i] ^= rkey[i];
    };
    pidCrypt.AES.prototype.shiftRows = function(state, inv) {
        var shifttab = typeof inv == "undefined" ? this.ShiftRowTab.slice() : this.ShiftRowTabInv.slice();
        var h = new Array().concat(state);
        for (var i = 0; i < 16; i++) state[i] = h[shifttab[i]];
    };
    pidCrypt.AES.prototype.mixColumns = function(state) {
        for (var i = 0; i < 16; i += 4) {
            var s0 = state[i + 0], s1 = state[i + 1];
            var s2 = state[i + 2], s3 = state[i + 3];
            var h = s0 ^ s1 ^ s2 ^ s3;
            state[i + 0] ^= h ^ this.xtime[s0 ^ s1];
            state[i + 1] ^= h ^ this.xtime[s1 ^ s2];
            state[i + 2] ^= h ^ this.xtime[s2 ^ s3];
            state[i + 3] ^= h ^ this.xtime[s3 ^ s0];
        }
    };
    pidCrypt.AES.prototype.mixColumns_Inv = function(state) {
        for (var i = 0; i < 16; i += 4) {
            var s0 = state[i + 0], s1 = state[i + 1];
            var s2 = state[i + 2], s3 = state[i + 3];
            var h = s0 ^ s1 ^ s2 ^ s3;
            var xh = this.xtime[h];
            var h1 = this.xtime[this.xtime[xh ^ s0 ^ s2]] ^ h;
            var h2 = this.xtime[this.xtime[xh ^ s1 ^ s3]] ^ h;
            state[i + 0] ^= h1 ^ this.xtime[s0 ^ s1];
            state[i + 1] ^= h2 ^ this.xtime[s1 ^ s2];
            state[i + 2] ^= h1 ^ this.xtime[s2 ^ s3];
            state[i + 3] ^= h2 ^ this.xtime[s3 ^ s0];
        }
    };
    pidCrypt.AES.prototype.xOr_Array = function(a1, a2) {
        var i;
        var res = Array();
        for (i = 0; i < a1.length; i++) res[i] = a1[i] ^ a2[i];
        return res;
    };
    pidCrypt.AES.prototype.getCounterBlock = function() {
        var ctrBlk = new Array(this.blockSize);
        var nonce = new Date().getTime();
        var nonceSec = Math.floor(nonce / 1e3);
        var nonceMs = nonce % 1e3;
        for (var i = 0; i < 4; i++) ctrBlk[i] = nonceSec >>> i * 8 & 255;
        for (var i = 0; i < 4; i++) ctrBlk[i + 4] = nonceMs & 255;
        return ctrBlk.slice();
    };
}

if (typeof pidCrypt != "undefined" && typeof pidCrypt.AES != "undefined" && typeof pidCrypt.MD5 != "undefined") {
    pidCrypt.AES.CBC = function() {
        this.pidcrypt = new pidCrypt();
        this.aes = new pidCrypt.AES(this.pidcrypt);
        this.getOutput = function() {
            return this.pidcrypt.getOutput();
        };
        this.getAllMessages = function(lnbrk) {
            return this.pidcrypt.getAllMessages(lnbrk);
        };
        this.isError = function() {
            return this.pidcrypt.isError();
        };
    };
    pidCrypt.AES.CBC.prototype.init = function(password, options) {
        if (!options) options = {};
        var pidcrypt = this.pidcrypt;
        pidcrypt.setDefaults();
        var pObj = this.pidcrypt.getParams();
        for (var o in options) pObj[o] = options[o];
        var k_iv = this.createKeyAndIv({
            password: password,
            salt: pObj.salt,
            bits: pObj.nBits
        });
        pObj.key = k_iv.key;
        pObj.iv = k_iv.iv;
        pObj.dataOut = "";
        pidcrypt.setParams(pObj);
        this.aes.init();
    };
    pidCrypt.AES.CBC.prototype.initEncrypt = function(dataIn, password, options) {
        this.init(password, options);
        this.pidcrypt.setParams({
            dataIn: dataIn,
            encryptIn: pidCryptUtil.toByteArray(dataIn)
        });
    };
    pidCrypt.AES.CBC.prototype.initDecrypt = function(crypted, password, options) {
        if (!options) options = {};
        var pidcrypt = this.pidcrypt;
        pidcrypt.setParams({
            dataIn: crypted
        });
        if (!password) pidcrypt.appendError("pidCrypt.AES.CBC.initFromEncryption: Sorry, can not crypt or decrypt without password.\n");
        var ciphertext = pidCryptUtil.decodeBase64(crypted);
        if (ciphertext.indexOf("Salted__") != 0) pidcrypt.appendError("pidCrypt.AES.CBC.initFromCrypt: Sorry, unknown encryption method.\n");
        var salt = ciphertext.substr(8, 8);
        options.salt = pidCryptUtil.convertToHex(salt);
        this.init(password, options);
        ciphertext = ciphertext.substr(16);
        pidcrypt.setParams({
            decryptIn: pidCryptUtil.toByteArray(ciphertext)
        });
    };
    pidCrypt.AES.CBC.prototype.initByValues = function(dataIn, key, iv, options) {
        var pObj = {};
        this.init("", options);
        pObj.dataIn = dataIn;
        pObj.key = key;
        pObj.iv = iv;
        this.pidcrypt.setParams(pObj);
    };
    pidCrypt.AES.CBC.prototype.getAllMessages = function(lnbrk) {
        return this.pidcrypt.getAllMessages(lnbrk);
    };
    pidCrypt.AES.CBC.prototype.createKeyAndIv = function(pObj) {
        var pidcrypt = this.pidcrypt;
        var retObj = {};
        var count = 1;
        var miter = "3";
        if (!pObj) pObj = {};
        if (!pObj.salt) {
            pObj.salt = pidcrypt.getRandomBytes(8);
            pObj.salt = pidCryptUtil.convertToHex(pidCryptUtil.byteArray2String(pObj.salt));
            pidcrypt.setParams({
                salt: pObj.salt
            });
        }
        var data00 = pObj.password + pidCryptUtil.convertFromHex(pObj.salt);
        var hashtarget = "";
        var result = "";
        var keymaterial = [];
        var loop = 0;
        keymaterial[loop++] = data00;
        for (var j = 0; j < miter; j++) {
            if (j == 0) result = data00; else {
                hashtarget = pidCryptUtil.convertFromHex(result);
                hashtarget += data00;
                result = hashtarget;
            }
            for (var c = 0; c < count; c++) {
                result = pidCrypt.MD5(result);
            }
            keymaterial[loop++] = result;
        }
        switch (pObj.bits) {
          case 128:
            retObj.key = keymaterial[1];
            retObj.iv = keymaterial[2];
            break;

          case 192:
            retObj.key = keymaterial[1] + keymaterial[2].substr(0, 16);
            retObj.iv = keymaterial[3];
            break;

          case 256:
            retObj.key = keymaterial[1] + keymaterial[2];
            retObj.iv = keymaterial[3];
            break;

          default:
            pidcrypt.appendError("pidCrypt.AES.CBC.createKeyAndIv: Sorry, only 128, 192 and 256 bits are supported.\nBits(" + typeof pObj.bits + ") = " + pObj.bits);
        }
        return retObj;
    };
    pidCrypt.AES.CBC.prototype.encryptRaw = function(byteArray) {
        var pidcrypt = this.pidcrypt;
        var aes = this.aes;
        var p = pidcrypt.getParams();
        if (!byteArray) byteArray = p.encryptIn;
        pidcrypt.setParams({
            encryptIn: byteArray
        });
        if (!p.dataIn) pidcrypt.setParams({
            dataIn: byteArray
        });
        var iv = pidCryptUtil.convertFromHex(p.iv);
        var charDiv = p.blockSize - (byteArray.length + 1) % p.blockSize;
        if (p.A0_PAD) byteArray[byteArray.length] = 10;
        for (var c = 0; c < charDiv; c++) byteArray[byteArray.length] = charDiv;
        var nBytes = Math.floor(p.nBits / 8);
        var keyBytes = new Array(nBytes);
        var key = pidCryptUtil.convertFromHex(p.key);
        for (var i = 0; i < nBytes; i++) {
            keyBytes[i] = isNaN(key.charCodeAt(i)) ? 0 : key.charCodeAt(i);
        }
        var keySchedule = aes.expandKey(keyBytes);
        var blockCount = Math.ceil(byteArray.length / p.blockSize);
        var ciphertxt = new Array(blockCount);
        var textBlock = [];
        var state = pidCryptUtil.toByteArray(iv);
        for (var b = 0; b < blockCount; b++) {
            textBlock = byteArray.slice(b * p.blockSize, b * p.blockSize + p.blockSize);
            state = aes.xOr_Array(state, textBlock);
            state = aes.encrypt(state.slice(), keySchedule);
            ciphertxt[b] = pidCryptUtil.byteArray2String(state);
        }
        var ciphertext = ciphertxt.join("");
        pidcrypt.setParams({
            dataOut: ciphertext,
            encryptOut: ciphertext
        });
        if (!pidcrypt.isDebug() && pidcrypt.clear) pidcrypt.clearParams();
        return ciphertext || "";
    };
    pidCrypt.AES.CBC.prototype.encrypt = function(plaintext) {
        var pidcrypt = this.pidcrypt;
        var salt = "";
        var p = pidcrypt.getParams();
        if (!plaintext) plaintext = p.dataIn;
        if (p.UTF8) plaintext = pidCryptUtil.encodeUTF8(plaintext);
        pidcrypt.setParams({
            dataIn: plaintext,
            encryptIn: pidCryptUtil.toByteArray(plaintext)
        });
        var ciphertext = this.encryptRaw();
        salt = "Salted__" + pidCryptUtil.convertFromHex(p.salt);
        ciphertext = salt + ciphertext;
        ciphertext = pidCryptUtil.encodeBase64(ciphertext);
        pidcrypt.setParams({
            dataOut: ciphertext
        });
        if (!pidcrypt.isDebug() && pidcrypt.clear) pidcrypt.clearParams();
        return ciphertext || "";
    };
    pidCrypt.AES.CBC.prototype.encryptText = function(dataIn, password, options) {
        this.initEncrypt(dataIn, password, options);
        return this.encrypt();
    };
    pidCrypt.AES.CBC.prototype.decryptRaw = function(byteArray) {
        var aes = this.aes;
        var pidcrypt = this.pidcrypt;
        var p = pidcrypt.getParams();
        if (!byteArray) byteArray = p.decryptIn;
        pidcrypt.setParams({
            decryptIn: byteArray
        });
        if (!p.dataIn) pidcrypt.setParams({
            dataIn: byteArray
        });
        if (p.iv.length / 2 < p.blockSize) return pidcrypt.appendError("pidCrypt.AES.CBC.decrypt: Sorry, can not decrypt without complete set of parameters.\n Length of key,iv:" + p.key.length + "," + p.iv.length);
        var iv = pidCryptUtil.convertFromHex(p.iv);
        if (byteArray.length % p.blockSize != 0) return pidcrypt.appendError("pidCrypt.AES.CBC.decrypt: Sorry, the encrypted text has the wrong length for aes-cbc mode\n Length of ciphertext:" + byteArray.length + byteArray.length % p.blockSize);
        var nBytes = Math.floor(p.nBits / 8);
        var keyBytes = new Array(nBytes);
        var key = pidCryptUtil.convertFromHex(p.key);
        for (var i = 0; i < nBytes; i++) {
            keyBytes[i] = isNaN(key.charCodeAt(i)) ? 0 : key.charCodeAt(i);
        }
        var keySchedule = aes.expandKey(keyBytes);
        var nBlocks = Math.ceil(byteArray.length / p.blockSize);
        var plaintxt = new Array(nBlocks.length);
        var state = pidCryptUtil.toByteArray(iv);
        var ciphertextBlock = [];
        var dec_state = [];
        for (var b = 0; b < nBlocks; b++) {
            ciphertextBlock = byteArray.slice(b * p.blockSize, b * p.blockSize + p.blockSize);
            dec_state = aes.decrypt(ciphertextBlock, keySchedule);
            plaintxt[b] = pidCryptUtil.byteArray2String(aes.xOr_Array(state, dec_state));
            state = ciphertextBlock.slice();
        }
        var plaintext = plaintxt.join("");
        if (pidcrypt.isDebug()) pidcrypt.appendDebug("Padding after decryption:" + pidCryptUtil.convertToHex(plaintext) + ":" + plaintext.length + "\n");
        var endByte = plaintext.charCodeAt(plaintext.length - 1);
        if (p.A0_PAD) {
            plaintext = plaintext.substr(0, plaintext.length - (endByte + 1));
        } else {
            var div = plaintext.length - (plaintext.length - endByte);
            var firstPadByte = plaintext.charCodeAt(plaintext.length - endByte);
            if (endByte == firstPadByte && endByte == div) plaintext = plaintext.substr(0, plaintext.length - endByte);
        }
        pidcrypt.setParams({
            dataOut: plaintext,
            decryptOut: plaintext
        });
        if (!pidcrypt.isDebug() && pidcrypt.clear) pidcrypt.clearParams();
        return plaintext || "";
    };
    pidCrypt.AES.CBC.prototype.decrypt = function(ciphertext) {
        var pidcrypt = this.pidcrypt;
        var p = pidcrypt.getParams();
        if (ciphertext) pidcrypt.setParams({
            dataIn: ciphertext
        });
        if (!p.decryptIn) {
            var decryptIn = pidCryptUtil.decodeBase64(p.dataIn);
            if (decryptIn.indexOf("Salted__") == 0) decryptIn = decryptIn.substr(16);
            pidcrypt.setParams({
                decryptIn: pidCryptUtil.toByteArray(decryptIn)
            });
        }
        var plaintext = this.decryptRaw();
        if (p.UTF8) plaintext = pidCryptUtil.decodeUTF8(plaintext);
        if (pidcrypt.isDebug()) pidcrypt.appendDebug("Removed Padding after decryption:" + pidCryptUtil.convertToHex(plaintext) + ":" + plaintext.length + "\n");
        pidcrypt.setParams({
            dataOut: plaintext
        });
        if (!pidcrypt.isDebug() && pidcrypt.clear) pidcrypt.clearParams();
        return plaintext || "";
    };
    pidCrypt.AES.CBC.prototype.decryptText = function(dataIn, password, options) {
        this.initDecrypt(dataIn, password, options);
        return this.decrypt();
    };
}

if (typeof pidCrypt != "undefined" && typeof pidCrypt.AES != "undefined") {
    pidCrypt.AES.CTR = function() {
        this.pidcrypt = new pidCrypt();
        this.aes = new pidCrypt.AES(this.pidcrypt);
        this.getOutput = function() {
            return this.pidcrypt.getOutput();
        };
        this.getAllMessages = function(lnbrk) {
            return this.pidcrypt.getAllMessages(lnbrk);
        };
        this.isError = function() {
            return this.pidcrypt.isError();
        };
    };
    pidCrypt.AES.CTR.prototype.init = function(password, options) {
        if (!options) options = {};
        if (!password) this.pidcrypt.appendError("pidCrypt.AES.CTR.initFromEncryption: Sorry, can not crypt or decrypt without password.\n");
        this.pidcrypt.setDefaults();
        var pObj = this.pidcrypt.getParams();
        for (var o in options) pObj[o] = options[o];
        pObj.password = password;
        pObj.key = password;
        pObj.dataOut = "";
        this.pidcrypt.setParams(pObj);
        this.aes.init();
    };
    pidCrypt.AES.CTR.prototype.initEncrypt = function(dataIn, password, options) {
        this.init(password, options);
        this.pidcrypt.setParams({
            dataIn: dataIn,
            encryptIn: pidCryptUtil.toByteArray(dataIn)
        });
    };
    pidCrypt.AES.CTR.prototype.initDecrypt = function(crypted, password, options) {
        var pObj = {};
        this.init(password, options);
        pObj.dataIn = crypted;
        var cipherText = pidCryptUtil.decodeBase64(crypted);
        var salt = cipherText.substr(0, 8);
        pObj.salt = pidCryptUtil.convertToHex(salt);
        cipherText = cipherText.substr(8);
        pObj.decryptIn = pidCryptUtil.toByteArray(cipherText);
        this.pidcrypt.setParams(pObj);
    };
    pidCrypt.AES.CTR.prototype.getAllMessages = function(lnbrk) {
        return this.pidcrypt.getAllMessages(lnbrk);
    };
    pidCrypt.AES.CTR.prototype.getCounterBlock = function(bs) {
        var ctrBlk = new Array(bs);
        var nonce = new Date().getTime();
        var nonceSec = Math.floor(nonce / 1e3);
        var nonceMs = nonce % 1e3;
        for (var i = 0; i < 4; i++) ctrBlk[i] = nonceSec >>> i * 8 & 255;
        for (i = 0; i < 4; i++) ctrBlk[i + 4] = nonceMs & 255;
        return ctrBlk.slice();
    };
    pidCrypt.AES.CTR.prototype.encryptRaw = function(byteArray) {
        var aes = this.aes;
        var pidcrypt = this.pidcrypt;
        var p = pidcrypt.getParams();
        if (!byteArray) byteArray = p.encryptIn;
        pidcrypt.setParams({
            encryptIn: byteArray
        });
        var password = p.key;
        var nBytes = Math.floor(p.nBits / 8);
        var pwBytes = new Array(nBytes);
        for (var i = 0; i < nBytes; i++) pwBytes[i] = isNaN(password.charCodeAt(i)) ? 0 : password.charCodeAt(i);
        var key = aes.encrypt(pwBytes.slice(0, 16), aes.expandKey(pwBytes));
        key = key.concat(key.slice(0, nBytes - 16));
        var counterBlock = this.getCounterBlock(p.blockSize);
        var ctrTxt = pidCryptUtil.byteArray2String(counterBlock.slice(0, 8));
        pidcrypt.setParams({
            salt: pidCryptUtil.convertToHex(ctrTxt)
        });
        var keySchedule = aes.expandKey(key);
        var blockCount = Math.ceil(byteArray.length / p.blockSize);
        var ciphertxt = new Array(blockCount);
        for (var b = 0; b < blockCount; b++) {
            for (var c = 0; c < 4; c++) counterBlock[15 - c] = b >>> c * 8 & 255;
            for (var c = 0; c < 4; c++) counterBlock[15 - c - 4] = b / 4294967296 >>> c * 8;
            var cipherCntr = aes.encrypt(counterBlock, keySchedule);
            var blockLength = b < blockCount - 1 ? p.blockSize : (byteArray.length - 1) % p.blockSize + 1;
            var cipherChar = new Array(blockLength);
            for (var i = 0; i < blockLength; i++) {
                cipherChar[i] = cipherCntr[i] ^ byteArray[b * p.blockSize + i];
                cipherChar[i] = String.fromCharCode(cipherChar[i]);
            }
            ciphertxt[b] = cipherChar.join("");
        }
        var ciphertext = ctrTxt + ciphertxt.join("");
        pidcrypt.setParams({
            dataOut: ciphertext,
            encryptOut: ciphertext
        });
        if (!pidcrypt.isDebug() && pidcrypt.clear) pidcrypt.clearParams();
        return ciphertext;
    };
    pidCrypt.AES.CTR.prototype.encrypt = function(plaintext) {
        var pidcrypt = this.pidcrypt;
        var p = pidcrypt.getParams();
        if (!plaintext) plaintext = p.dataIn;
        if (p.UTF8) {
            plaintext = pidCryptUtil.encodeUTF8(plaintext);
            pidcrypt.setParams({
                key: pidCryptUtil.encodeUTF8(pidcrypt.getParam("key"))
            });
        }
        pidcrypt.setParams({
            dataIn: plaintext,
            encryptIn: pidCryptUtil.toByteArray(plaintext)
        });
        var ciphertext = this.encryptRaw();
        ciphertext = pidCryptUtil.encodeBase64(ciphertext);
        pidcrypt.setParams({
            dataOut: ciphertext
        });
        if (!pidcrypt.isDebug() && pidcrypt.clear) pidcrypt.clearParams();
        return ciphertext;
    };
    pidCrypt.AES.CTR.prototype.encryptText = function(dataIn, password, options) {
        this.initEncrypt(dataIn, password, options);
        return this.encrypt();
    };
    pidCrypt.AES.CTR.prototype.decryptRaw = function(byteArray) {
        var pidcrypt = this.pidcrypt;
        var aes = this.aes;
        var p = pidcrypt.getParams();
        if (!byteArray) byteArray = p.decryptIn;
        pidcrypt.setParams({
            decryptIn: byteArray
        });
        if (!p.dataIn) pidcrypt.setParams({
            dataIn: byteArray
        });
        var nBytes = Math.floor(p.nBits / 8);
        var pwBytes = new Array(nBytes);
        for (var i = 0; i < nBytes; i++) {
            pwBytes[i] = isNaN(p.key.charCodeAt(i)) ? 0 : p.key.charCodeAt(i);
        }
        var key = aes.encrypt(pwBytes.slice(0, 16), aes.expandKey(pwBytes));
        key = key.concat(key.slice(0, nBytes - 16));
        var counterBlock = new Array(8);
        var ctrTxt = pidCryptUtil.convertFromHex(p.salt);
        for (i = 0; i < 8; i++) counterBlock[i] = ctrTxt.charCodeAt(i);
        var keySchedule = aes.expandKey(key);
        var nBlocks = Math.ceil(byteArray.length / p.blockSize);
        var blockArray = new Array(nBlocks);
        for (var b = 0; b < nBlocks; b++) blockArray[b] = byteArray.slice(b * p.blockSize, b * p.blockSize + p.blockSize);
        var plaintxt = new Array(blockArray.length);
        var cipherCntr = [];
        var plaintxtByte = [];
        for (b = 0; b < nBlocks; b++) {
            for (var c = 0; c < 4; c++) counterBlock[15 - c] = b >>> c * 8 & 255;
            for (c = 0; c < 4; c++) counterBlock[15 - c - 4] = (b + 1) / 4294967296 - 1 >>> c * 8 & 255;
            cipherCntr = aes.encrypt(counterBlock, keySchedule);
            plaintxtByte = new Array(blockArray[b].length);
            for (i = 0; i < blockArray[b].length; i++) {
                plaintxtByte[i] = cipherCntr[i] ^ blockArray[b][i];
                plaintxtByte[i] = String.fromCharCode(plaintxtByte[i]);
            }
            plaintxt[b] = plaintxtByte.join("");
        }
        var plaintext = plaintxt.join("");
        pidcrypt.setParams({
            dataOut: plaintext
        });
        if (!pidcrypt.isDebug() && pidcrypt.clear) pidcrypt.clearParams();
        return plaintext;
    };
    pidCrypt.AES.CTR.prototype.decrypt = function(ciphertext) {
        var pidcrypt = this.pidcrypt;
        var p = pidcrypt.getParams();
        if (ciphertext) pidcrypt.setParams({
            dataIn: ciphertext,
            decryptIn: pidCryptUtil.toByteArray(ciphertext)
        });
        if (p.UTF8) {
            pidcrypt.setParams({
                key: pidCryptUtil.encodeUTF8(pidcrypt.getParam("key"))
            });
        }
        var plaintext = this.decryptRaw();
        plaintext = pidCryptUtil.decodeUTF8(plaintext);
        pidcrypt.setParams({
            dataOut: plaintext
        });
        if (!pidcrypt.isDebug() && pidcrypt.clear) pidcrypt.clearParams();
        return plaintext;
    };
    pidCrypt.AES.CTR.prototype.decryptText = function(crypted, password, options) {
        this.initDecrypt(crypted, password, options);
        return this.decrypt();
    };
}

function Stream(enc, pos) {
    if (enc instanceof Stream) {
        this.enc = enc.enc;
        this.pos = enc.pos;
    } else {
        this.enc = enc;
        this.pos = pos;
    }
}

Stream.prototype.parseStringHex = function(start, end) {
    if (typeof end == "undefined") end = this.enc.length;
    var s = "";
    for (var i = start; i < end; ++i) {
        var h = this.get(i);
        s += this.hexDigits.charAt(h >> 4) + this.hexDigits.charAt(h & 15);
    }
    return s;
};

Stream.prototype.get = function(pos) {
    if (pos == undefined) pos = this.pos++;
    if (pos >= this.enc.length) throw "Requesting byte offset " + pos + " on a stream of length " + this.enc.length;
    return this.enc[pos];
};

Stream.prototype.hexDigits = "0123456789ABCDEF";

Stream.prototype.hexDump = function(start, end) {
    var s = "";
    for (var i = start; i < end; ++i) {
        var h = this.get(i);
        s += this.hexDigits.charAt(h >> 4) + this.hexDigits.charAt(h & 15);
        if ((i & 15) == 7) s += " ";
        s += (i & 15) == 15 ? "\n" : " ";
    }
    return s;
};

Stream.prototype.parseStringISO = function(start, end) {
    var s = "";
    for (var i = start; i < end; ++i) s += String.fromCharCode(this.get(i));
    return s;
};

Stream.prototype.parseStringUTF = function(start, end) {
    var s = "", c = 0;
    for (var i = start; i < end; ) {
        var c = this.get(i++);
        if (c < 128) s += String.fromCharCode(c); else if (c > 191 && c < 224) s += String.fromCharCode((c & 31) << 6 | this.get(i++) & 63); else s += String.fromCharCode((c & 15) << 12 | (this.get(i++) & 63) << 6 | this.get(i++) & 63);
    }
    return s;
};

Stream.prototype.reTime = /^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;

Stream.prototype.parseTime = function(start, end) {
    var s = this.parseStringISO(start, end);
    var m = this.reTime.exec(s);
    if (!m) return "Unrecognized time: " + s;
    s = m[1] + "-" + m[2] + "-" + m[3] + " " + m[4];
    if (m[5]) {
        s += ":" + m[5];
        if (m[6]) {
            s += ":" + m[6];
            if (m[7]) s += "." + m[7];
        }
    }
    if (m[8]) {
        s += " UTC";
        if (m[8] != "Z") {
            s += m[8];
            if (m[9]) s += ":" + m[9];
        }
    }
    return s;
};

Stream.prototype.parseInteger = function(start, end) {
    if (end - start > 4) return undefined;
    var n = 0;
    for (var i = start; i < end; ++i) n = n << 8 | this.get(i);
    return n;
};

Stream.prototype.parseOID = function(start, end) {
    var s, n = 0, bits = 0;
    for (var i = start; i < end; ++i) {
        var v = this.get(i);
        n = n << 7 | v & 127;
        bits += 7;
        if (!(v & 128)) {
            if (s == undefined) s = parseInt(n / 40) + "." + n % 40; else s += "." + (bits >= 31 ? "big" : n);
            n = bits = 0;
        }
        s += String.fromCharCode();
    }
    return s;
};

if (typeof pidCrypt != "undefined") {
    pidCrypt.ASN1 = function(stream, header, length, tag, sub) {
        this.stream = stream;
        this.header = header;
        this.length = length;
        this.tag = tag;
        this.sub = sub;
    };
    pidCrypt.ASN1.prototype.toHexTree = function() {
        var node = {};
        node.type = this.typeName();
        if (node.type != "SEQUENCE") node.value = this.stream.parseStringHex(this.posContent(), this.posEnd());
        if (this.sub != null) {
            node.sub = [];
            for (var i = 0, max = this.sub.length; i < max; ++i) node.sub[i] = this.sub[i].toHexTree();
        }
        return node;
    };
    pidCrypt.ASN1.prototype.typeName = function() {
        if (this.tag == undefined) return "unknown";
        var tagClass = this.tag >> 6;
        var tagConstructed = this.tag >> 5 & 1;
        var tagNumber = this.tag & 31;
        switch (tagClass) {
          case 0:
            switch (tagNumber) {
              case 0:
                return "EOC";

              case 1:
                return "BOOLEAN";

              case 2:
                return "INTEGER";

              case 3:
                return "BIT_STRING";

              case 4:
                return "OCTET_STRING";

              case 5:
                return "NULL";

              case 6:
                return "OBJECT_IDENTIFIER";

              case 7:
                return "ObjectDescriptor";

              case 8:
                return "EXTERNAL";

              case 9:
                return "REAL";

              case 10:
                return "ENUMERATED";

              case 11:
                return "EMBEDDED_PDV";

              case 12:
                return "UTF8String";

              case 16:
                return "SEQUENCE";

              case 17:
                return "SET";

              case 18:
                return "NumericString";

              case 19:
                return "PrintableString";

              case 20:
                return "TeletexString";

              case 21:
                return "VideotexString";

              case 22:
                return "IA5String";

              case 23:
                return "UTCTime";

              case 24:
                return "GeneralizedTime";

              case 25:
                return "GraphicString";

              case 26:
                return "VisibleString";

              case 27:
                return "GeneralString";

              case 28:
                return "UniversalString";

              case 30:
                return "BMPString";

              default:
                return "Universal_" + tagNumber.toString(16);
            }

          case 1:
            return "Application_" + tagNumber.toString(16);

          case 2:
            return "[" + tagNumber + "]";

          case 3:
            return "Private_" + tagNumber.toString(16);
        }
    };
    pidCrypt.ASN1.prototype.content = function() {
        if (this.tag == undefined) return null;
        var tagClass = this.tag >> 6;
        if (tagClass != 0) return null;
        var tagNumber = this.tag & 31;
        var content = this.posContent();
        var len = Math.abs(this.length);
        switch (tagNumber) {
          case 1:
            return this.stream.get(content) == 0 ? "false" : "true";

          case 2:
            return this.stream.parseInteger(content, content + len);

          case 6:
            return this.stream.parseOID(content, content + len);

          case 12:
            return this.stream.parseStringUTF(content, content + len);

          case 18:
          case 19:
          case 20:
          case 21:
          case 22:
          case 26:
            return this.stream.parseStringISO(content, content + len);

          case 23:
          case 24:
            return this.stream.parseTime(content, content + len);
        }
        return null;
    };
    pidCrypt.ASN1.prototype.toString = function() {
        return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (this.sub == null ? "null" : this.sub.length) + "]";
    };
    pidCrypt.ASN1.prototype.print = function(indent) {
        if (indent == undefined) indent = "";
        document.writeln(indent + this);
        if (this.sub != null) {
            indent += "  ";
            for (var i = 0, max = this.sub.length; i < max; ++i) this.sub[i].print(indent);
        }
    };
    pidCrypt.ASN1.prototype.toPrettyString = function(indent) {
        if (indent == undefined) indent = "";
        var s = indent + this.typeName() + " @" + this.stream.pos;
        if (this.length >= 0) s += "+";
        s += this.length;
        if (this.tag & 32) s += " (constructed)"; else if ((this.tag == 3 || this.tag == 4) && this.sub != null) s += " (encapsulates)";
        s += "\n";
        if (this.sub != null) {
            indent += "  ";
            for (var i = 0, max = this.sub.length; i < max; ++i) s += this.sub[i].toPrettyString(indent);
        }
        return s;
    };
    pidCrypt.ASN1.prototype.toDOM = function() {
        var node = document.createElement("div");
        node.className = "node";
        node.asn1 = this;
        var head = document.createElement("div");
        head.className = "head";
        var s = this.typeName();
        head.innerHTML = s;
        node.appendChild(head);
        this.head = head;
        var value = document.createElement("div");
        value.className = "value";
        s = "Offset: " + this.stream.pos + "<br/>";
        s += "Length: " + this.header + "+";
        if (this.length >= 0) s += this.length; else s += -this.length + " (undefined)";
        if (this.tag & 32) s += "<br/>(constructed)"; else if ((this.tag == 3 || this.tag == 4) && this.sub != null) s += "<br/>(encapsulates)";
        var content = this.content();
        if (content != null) {
            s += "<br/>Value:<br/><b>" + content + "</b>";
            if (typeof oids == "object" && this.tag == 6) {
                var oid = oids[content];
                if (oid) {
                    if (oid.d) s += "<br/>" + oid.d;
                    if (oid.c) s += "<br/>" + oid.c;
                    if (oid.w) s += "<br/>(warning!)";
                }
            }
        }
        value.innerHTML = s;
        node.appendChild(value);
        var sub = document.createElement("div");
        sub.className = "sub";
        if (this.sub != null) {
            for (var i = 0, max = this.sub.length; i < max; ++i) sub.appendChild(this.sub[i].toDOM());
        }
        node.appendChild(sub);
        head.switchNode = node;
        head.onclick = function() {
            var node = this.switchNode;
            node.className = node.className == "node collapsed" ? "node" : "node collapsed";
        };
        return node;
    };
    pidCrypt.ASN1.prototype.posStart = function() {
        return this.stream.pos;
    };
    pidCrypt.ASN1.prototype.posContent = function() {
        return this.stream.pos + this.header;
    };
    pidCrypt.ASN1.prototype.posEnd = function() {
        return this.stream.pos + this.header + Math.abs(this.length);
    };
    pidCrypt.ASN1.prototype.toHexDOM_sub = function(node, className, stream, start, end) {
        if (start >= end) return;
        var sub = document.createElement("span");
        sub.className = className;
        sub.appendChild(document.createTextNode(stream.hexDump(start, end)));
        node.appendChild(sub);
    };
    pidCrypt.ASN1.prototype.toHexDOM = function() {
        var node = document.createElement("span");
        node.className = "hex";
        this.head.hexNode = node;
        this.head.onmouseover = function() {
            this.hexNode.className = "hexCurrent";
        };
        this.head.onmouseout = function() {
            this.hexNode.className = "hex";
        };
        this.toHexDOM_sub(node, "tag", this.stream, this.posStart(), this.posStart() + 1);
        this.toHexDOM_sub(node, this.length >= 0 ? "dlen" : "ulen", this.stream, this.posStart() + 1, this.posContent());
        if (this.sub == null) node.appendChild(document.createTextNode(this.stream.hexDump(this.posContent(), this.posEnd()))); else if (this.sub.length > 0) {
            var first = this.sub[0];
            var last = this.sub[this.sub.length - 1];
            this.toHexDOM_sub(node, "intro", this.stream, this.posContent(), first.posStart());
            for (var i = 0, max = this.sub.length; i < max; ++i) node.appendChild(this.sub[i].toHexDOM());
            this.toHexDOM_sub(node, "outro", this.stream, last.posEnd(), this.posEnd());
        }
        return node;
    };
    pidCrypt.ASN1.decodeLength = function(stream) {
        var buf = stream.get();
        var len = buf & 127;
        if (len == buf) return len;
        if (len > 3) throw "Length over 24 bits not supported at position " + (stream.pos - 1);
        if (len == 0) return -1;
        buf = 0;
        for (var i = 0; i < len; ++i) buf = buf << 8 | stream.get();
        return buf;
    };
    pidCrypt.ASN1.hasContent = function(tag, len, stream) {
        if (tag & 32) return true;
        if (tag < 3 || tag > 4) return false;
        var p = new Stream(stream);
        if (tag == 3) p.get();
        var subTag = p.get();
        if (subTag >> 6 & 1) return false;
        try {
            var subLength = pidCrypt.ASN1.decodeLength(p);
            return p.pos - stream.pos + subLength == len;
        } catch (exception) {
            return false;
        }
    };
    pidCrypt.ASN1.decode = function(stream) {
        if (!(stream instanceof Stream)) stream = new Stream(stream, 0);
        var streamStart = new Stream(stream);
        var tag = stream.get();
        var len = pidCrypt.ASN1.decodeLength(stream);
        var header = stream.pos - streamStart.pos;
        var sub = null;
        if (pidCrypt.ASN1.hasContent(tag, len, stream)) {
            var start = stream.pos;
            if (tag == 3) stream.get();
            sub = [];
            if (len >= 0) {
                var end = start + len;
                while (stream.pos < end) sub[sub.length] = pidCrypt.ASN1.decode(stream);
                if (stream.pos != end) throw "Content size is not correct for container starting at offset " + start;
            } else {
                try {
                    for (;;) {
                        var s = pidCrypt.ASN1.decode(stream);
                        if (s.tag == 0) break;
                        sub[sub.length] = s;
                    }
                    len = start - stream.pos;
                } catch (e) {
                    throw "Exception while decoding undefined length content: " + e;
                }
            }
        } else stream.pos += len;
        return new pidCrypt.ASN1(streamStart, header, len, tag, sub);
    };
    pidCrypt.ASN1.test = function() {
        var test = [ {
            value: [ 39 ],
            expected: 39
        }, {
            value: [ 129, 201 ],
            expected: 201
        }, {
            value: [ 131, 254, 220, 186 ],
            expected: 16702650
        } ];
        for (var i = 0, max = test.length; i < max; ++i) {
            var pos = 0;
            var stream = new Stream(test[i].value, 0);
            var res = pidCrypt.ASN1.decodeLength(stream);
            if (res != test[i].expected) document.write("In test[" + i + "] expected " + test[i].expected + " got " + res + "\n");
        }
    };
}

var dbits;

var canary = 0xdeadbeefcafe;

var j_lm = (canary & 16777215) == 15715070;

function BigInteger(a, b, c) {
    if (a != null) if ("number" == typeof a) this.fromNumber(a, b, c); else if (b == null && "string" != typeof a) this.fromString(a, 256); else this.fromString(a, b);
}

function nbi() {
    return new BigInteger(null);
}

function am1(i, x, w, j, c, n) {
    while (--n >= 0) {
        var v = x * this[i++] + w[j] + c;
        c = Math.floor(v / 67108864);
        w[j++] = v & 67108863;
    }
    return c;
}

function am2(i, x, w, j, c, n) {
    var xl = x & 32767, xh = x >> 15;
    while (--n >= 0) {
        var l = this[i] & 32767;
        var h = this[i++] >> 15;
        var m = xh * l + h * xl;
        l = xl * l + ((m & 32767) << 15) + w[j] + (c & 1073741823);
        c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
        w[j++] = l & 1073741823;
    }
    return c;
}

function am3(i, x, w, j, c, n) {
    var xl = x & 16383, xh = x >> 14;
    while (--n >= 0) {
        var l = this[i] & 16383;
        var h = this[i++] >> 14;
        var m = xh * l + h * xl;
        l = xl * l + ((m & 16383) << 14) + w[j] + c;
        c = (l >> 28) + (m >> 14) + xh * h;
        w[j++] = l & 268435455;
    }
    return c;
}

if (j_lm && navigator.appName == "Microsoft Internet Explorer") {
    BigInteger.prototype.am = am2;
    dbits = 30;
} else if (j_lm && navigator.appName != "Netscape") {
    BigInteger.prototype.am = am1;
    dbits = 26;
} else {
    BigInteger.prototype.am = am3;
    dbits = 28;
}

BigInteger.prototype.DB = dbits;

BigInteger.prototype.DM = (1 << dbits) - 1;

BigInteger.prototype.DV = 1 << dbits;

var BI_FP = 52;

BigInteger.prototype.FV = Math.pow(2, BI_FP);

BigInteger.prototype.F1 = BI_FP - dbits;

BigInteger.prototype.F2 = 2 * dbits - BI_FP;

var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";

var BI_RC = new Array();

var rr, vv;

rr = "0".charCodeAt(0);

for (vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;

rr = "a".charCodeAt(0);

for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;

rr = "A".charCodeAt(0);

for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;

function int2char(n) {
    return BI_RM.charAt(n);
}

function intAt(s, i) {
    var c = BI_RC[s.charCodeAt(i)];
    return c == null ? -1 : c;
}

function bnpCopyTo(r) {
    for (var i = this.t - 1; i >= 0; --i) r[i] = this[i];
    r.t = this.t;
    r.s = this.s;
}

function bnpFromInt(x) {
    this.t = 1;
    this.s = x < 0 ? -1 : 0;
    if (x > 0) this[0] = x; else if (x < -1) this[0] = x + DV; else this.t = 0;
}

function nbv(i) {
    var r = nbi();
    r.fromInt(i);
    return r;
}

function bnpFromString(s, b) {
    var k;
    if (b == 16) k = 4; else if (b == 8) k = 3; else if (b == 256) k = 8; else if (b == 2) k = 1; else if (b == 32) k = 5; else if (b == 4) k = 2; else {
        this.fromRadix(s, b);
        return;
    }
    this.t = 0;
    this.s = 0;
    var i = s.length, mi = false, sh = 0;
    while (--i >= 0) {
        var x = k == 8 ? s[i] & 255 : intAt(s, i);
        if (x < 0) {
            if (s.charAt(i) == "-") mi = true;
            continue;
        }
        mi = false;
        if (sh == 0) this[this.t++] = x; else if (sh + k > this.DB) {
            this[this.t - 1] |= (x & (1 << this.DB - sh) - 1) << sh;
            this[this.t++] = x >> this.DB - sh;
        } else this[this.t - 1] |= x << sh;
        sh += k;
        if (sh >= this.DB) sh -= this.DB;
    }
    if (k == 8 && (s[0] & 128) != 0) {
        this.s = -1;
        if (sh > 0) this[this.t - 1] |= (1 << this.DB - sh) - 1 << sh;
    }
    this.clamp();
    if (mi) BigInteger.ZERO.subTo(this, this);
}

function bnpClamp() {
    var c = this.s & this.DM;
    while (this.t > 0 && this[this.t - 1] == c) --this.t;
}

function bnToString(b) {
    if (this.s < 0) return "-" + this.negate().toString(b);
    var k;
    if (b == 16) k = 4; else if (b == 8) k = 3; else if (b == 2) k = 1; else if (b == 32) k = 5; else if (b == 4) k = 2; else return this.toRadix(b);
    var km = (1 << k) - 1, d, m = false, r = "", i = this.t;
    var p = this.DB - i * this.DB % k;
    if (i-- > 0) {
        if (p < this.DB && (d = this[i] >> p) > 0) {
            m = true;
            r = int2char(d);
        }
        while (i >= 0) {
            if (p < k) {
                d = (this[i] & (1 << p) - 1) << k - p;
                d |= this[--i] >> (p += this.DB - k);
            } else {
                d = this[i] >> (p -= k) & km;
                if (p <= 0) {
                    p += this.DB;
                    --i;
                }
            }
            if (d > 0) m = true;
            if (m) r += int2char(d);
        }
    }
    return m ? r : "0";
}

function bnNegate() {
    var r = nbi();
    BigInteger.ZERO.subTo(this, r);
    return r;
}

function bnAbs() {
    return this.s < 0 ? this.negate() : this;
}

function bnCompareTo(a) {
    var r = this.s - a.s;
    if (r != 0) return r;
    var i = this.t;
    r = i - a.t;
    if (r != 0) return r;
    while (--i >= 0) if ((r = this[i] - a[i]) != 0) return r;
    return 0;
}

function nbits(x) {
    var r = 1, t;
    if ((t = x >>> 16) != 0) {
        x = t;
        r += 16;
    }
    if ((t = x >> 8) != 0) {
        x = t;
        r += 8;
    }
    if ((t = x >> 4) != 0) {
        x = t;
        r += 4;
    }
    if ((t = x >> 2) != 0) {
        x = t;
        r += 2;
    }
    if ((t = x >> 1) != 0) {
        x = t;
        r += 1;
    }
    return r;
}

function bnBitLength() {
    if (this.t <= 0) return 0;
    return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM);
}

function bnpDLShiftTo(n, r) {
    var i;
    for (i = this.t - 1; i >= 0; --i) r[i + n] = this[i];
    for (i = n - 1; i >= 0; --i) r[i] = 0;
    r.t = this.t + n;
    r.s = this.s;
}

function bnpDRShiftTo(n, r) {
    for (var i = n; i < this.t; ++i) r[i - n] = this[i];
    r.t = Math.max(this.t - n, 0);
    r.s = this.s;
}

function bnpLShiftTo(n, r) {
    var bs = n % this.DB;
    var cbs = this.DB - bs;
    var bm = (1 << cbs) - 1;
    var ds = Math.floor(n / this.DB), c = this.s << bs & this.DM, i;
    for (i = this.t - 1; i >= 0; --i) {
        r[i + ds + 1] = this[i] >> cbs | c;
        c = (this[i] & bm) << bs;
    }
    for (i = ds - 1; i >= 0; --i) r[i] = 0;
    r[ds] = c;
    r.t = this.t + ds + 1;
    r.s = this.s;
    r.clamp();
}

function bnpRShiftTo(n, r) {
    r.s = this.s;
    var ds = Math.floor(n / this.DB);
    if (ds >= this.t) {
        r.t = 0;
        return;
    }
    var bs = n % this.DB;
    var cbs = this.DB - bs;
    var bm = (1 << bs) - 1;
    r[0] = this[ds] >> bs;
    for (var i = ds + 1; i < this.t; ++i) {
        r[i - ds - 1] |= (this[i] & bm) << cbs;
        r[i - ds] = this[i] >> bs;
    }
    if (bs > 0) r[this.t - ds - 1] |= (this.s & bm) << cbs;
    r.t = this.t - ds;
    r.clamp();
}

function bnpSubTo(a, r) {
    var i = 0, c = 0, m = Math.min(a.t, this.t);
    while (i < m) {
        c += this[i] - a[i];
        r[i++] = c & this.DM;
        c >>= this.DB;
    }
    if (a.t < this.t) {
        c -= a.s;
        while (i < this.t) {
            c += this[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
        }
        c += this.s;
    } else {
        c += this.s;
        while (i < a.t) {
            c -= a[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
        }
        c -= a.s;
    }
    r.s = c < 0 ? -1 : 0;
    if (c < -1) r[i++] = this.DV + c; else if (c > 0) r[i++] = c;
    r.t = i;
    r.clamp();
}

function bnpMultiplyTo(a, r) {
    var x = this.abs(), y = a.abs();
    var i = x.t;
    r.t = i + y.t;
    while (--i >= 0) r[i] = 0;
    for (i = 0; i < y.t; ++i) r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);
    r.s = 0;
    r.clamp();
    if (this.s != a.s) BigInteger.ZERO.subTo(r, r);
}

function bnpSquareTo(r) {
    var x = this.abs();
    var i = r.t = 2 * x.t;
    while (--i >= 0) r[i] = 0;
    for (i = 0; i < x.t - 1; ++i) {
        var c = x.am(i, x[i], r, 2 * i, 0, 1);
        if ((r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV) {
            r[i + x.t] -= x.DV;
            r[i + x.t + 1] = 1;
        }
    }
    if (r.t > 0) r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1);
    r.s = 0;
    r.clamp();
}

function bnpDivRemTo(m, q, r) {
    var pm = m.abs();
    if (pm.t <= 0) return;
    var pt = this.abs();
    if (pt.t < pm.t) {
        if (q != null) q.fromInt(0);
        if (r != null) this.copyTo(r);
        return;
    }
    if (r == null) r = nbi();
    var y = nbi(), ts = this.s, ms = m.s;
    var nsh = this.DB - nbits(pm[pm.t - 1]);
    if (nsh > 0) {
        pm.lShiftTo(nsh, y);
        pt.lShiftTo(nsh, r);
    } else {
        pm.copyTo(y);
        pt.copyTo(r);
    }
    var ys = y.t;
    var y0 = y[ys - 1];
    if (y0 == 0) return;
    var yt = y0 * (1 << this.F1) + (ys > 1 ? y[ys - 2] >> this.F2 : 0);
    var d1 = this.FV / yt, d2 = (1 << this.F1) / yt, e = 1 << this.F2;
    var i = r.t, j = i - ys, t = q == null ? nbi() : q;
    y.dlShiftTo(j, t);
    if (r.compareTo(t) >= 0) {
        r[r.t++] = 1;
        r.subTo(t, r);
    }
    BigInteger.ONE.dlShiftTo(ys, t);
    t.subTo(y, y);
    while (y.t < ys) y[y.t++] = 0;
    while (--j >= 0) {
        var qd = r[--i] == y0 ? this.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);
        if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd) {
            y.dlShiftTo(j, t);
            r.subTo(t, r);
            while (r[i] < --qd) r.subTo(t, r);
        }
    }
    if (q != null) {
        r.drShiftTo(ys, q);
        if (ts != ms) BigInteger.ZERO.subTo(q, q);
    }
    r.t = ys;
    r.clamp();
    if (nsh > 0) r.rShiftTo(nsh, r);
    if (ts < 0) BigInteger.ZERO.subTo(r, r);
}

function bnMod(a) {
    var r = nbi();
    this.abs().divRemTo(a, null, r);
    if (this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r, r);
    return r;
}

function Classic(m) {
    this.m = m;
}

function cConvert(x) {
    if (x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m); else return x;
}

function cRevert(x) {
    return x;
}

function cReduce(x) {
    x.divRemTo(this.m, null, x);
}

function cMulTo(x, y, r) {
    x.multiplyTo(y, r);
    this.reduce(r);
}

function cSqrTo(x, r) {
    x.squareTo(r);
    this.reduce(r);
}

Classic.prototype.convert = cConvert;

Classic.prototype.revert = cRevert;

Classic.prototype.reduce = cReduce;

Classic.prototype.mulTo = cMulTo;

Classic.prototype.sqrTo = cSqrTo;

function bnpInvDigit() {
    if (this.t < 1) return 0;
    var x = this[0];
    if ((x & 1) == 0) return 0;
    var y = x & 3;
    y = y * (2 - (x & 15) * y) & 15;
    y = y * (2 - (x & 255) * y) & 255;
    y = y * (2 - ((x & 65535) * y & 65535)) & 65535;
    y = y * (2 - x * y % this.DV) % this.DV;
    return y > 0 ? this.DV - y : -y;
}

function Montgomery(m) {
    this.m = m;
    this.mp = m.invDigit();
    this.mpl = this.mp & 32767;
    this.mph = this.mp >> 15;
    this.um = (1 << m.DB - 15) - 1;
    this.mt2 = 2 * m.t;
}

function montConvert(x) {
    var r = nbi();
    x.abs().dlShiftTo(this.m.t, r);
    r.divRemTo(this.m, null, r);
    if (x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r, r);
    return r;
}

function montRevert(x) {
    var r = nbi();
    x.copyTo(r);
    this.reduce(r);
    return r;
}

function montReduce(x) {
    while (x.t <= this.mt2) x[x.t++] = 0;
    for (var i = 0; i < this.m.t; ++i) {
        var j = x[i] & 32767;
        var u0 = j * this.mpl + ((j * this.mph + (x[i] >> 15) * this.mpl & this.um) << 15) & x.DM;
        j = i + this.m.t;
        x[j] += this.m.am(0, u0, x, i, 0, this.m.t);
        while (x[j] >= x.DV) {
            x[j] -= x.DV;
            x[++j]++;
        }
    }
    x.clamp();
    x.drShiftTo(this.m.t, x);
    if (x.compareTo(this.m) >= 0) x.subTo(this.m, x);
}

function montSqrTo(x, r) {
    x.squareTo(r);
    this.reduce(r);
}

function montMulTo(x, y, r) {
    x.multiplyTo(y, r);
    this.reduce(r);
}

Montgomery.prototype.convert = montConvert;

Montgomery.prototype.revert = montRevert;

Montgomery.prototype.reduce = montReduce;

Montgomery.prototype.mulTo = montMulTo;

Montgomery.prototype.sqrTo = montSqrTo;

function bnpIsEven() {
    return (this.t > 0 ? this[0] & 1 : this.s) == 0;
}

function bnpExp(e, z) {
    if (e > 4294967295 || e < 1) return BigInteger.ONE;
    var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e) - 1;
    g.copyTo(r);
    while (--i >= 0) {
        z.sqrTo(r, r2);
        if ((e & 1 << i) > 0) z.mulTo(r2, g, r); else {
            var t = r;
            r = r2;
            r2 = t;
        }
    }
    return z.revert(r);
}

function bnModPowInt(e, m) {
    var z;
    if (e < 256 || m.isEven()) z = new Classic(m); else z = new Montgomery(m);
    return this.exp(e, z);
}

BigInteger.prototype.copyTo = bnpCopyTo;

BigInteger.prototype.fromInt = bnpFromInt;

BigInteger.prototype.fromString = bnpFromString;

BigInteger.prototype.clamp = bnpClamp;

BigInteger.prototype.dlShiftTo = bnpDLShiftTo;

BigInteger.prototype.drShiftTo = bnpDRShiftTo;

BigInteger.prototype.lShiftTo = bnpLShiftTo;

BigInteger.prototype.rShiftTo = bnpRShiftTo;

BigInteger.prototype.subTo = bnpSubTo;

BigInteger.prototype.multiplyTo = bnpMultiplyTo;

BigInteger.prototype.squareTo = bnpSquareTo;

BigInteger.prototype.divRemTo = bnpDivRemTo;

BigInteger.prototype.invDigit = bnpInvDigit;

BigInteger.prototype.isEven = bnpIsEven;

BigInteger.prototype.exp = bnpExp;

BigInteger.prototype.toString = bnToString;

BigInteger.prototype.negate = bnNegate;

BigInteger.prototype.abs = bnAbs;

BigInteger.prototype.compareTo = bnCompareTo;

BigInteger.prototype.bitLength = bnBitLength;

BigInteger.prototype.mod = bnMod;

BigInteger.prototype.modPowInt = bnModPowInt;

BigInteger.ZERO = nbv(0);

BigInteger.ONE = nbv(1);

function bnClone() {
    var r = nbi();
    this.copyTo(r);
    return r;
}

function bnIntValue() {
    if (this.s < 0) {
        if (this.t == 1) return this[0] - this.DV; else if (this.t == 0) return -1;
    } else if (this.t == 1) return this[0]; else if (this.t == 0) return 0;
    return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
}

function bnByteValue() {
    return this.t == 0 ? this.s : this[0] << 24 >> 24;
}

function bnShortValue() {
    return this.t == 0 ? this.s : this[0] << 16 >> 16;
}

function bnpChunkSize(r) {
    return Math.floor(Math.LN2 * this.DB / Math.log(r));
}

function bnSigNum() {
    if (this.s < 0) return -1; else if (this.t <= 0 || this.t == 1 && this[0] <= 0) return 0; else return 1;
}

function bnpToRadix(b) {
    if (b == null) b = 10;
    if (this.signum() == 0 || b < 2 || b > 36) return "0";
    var cs = this.chunkSize(b);
    var a = Math.pow(b, cs);
    var d = nbv(a), y = nbi(), z = nbi(), r = "";
    this.divRemTo(d, y, z);
    while (y.signum() > 0) {
        r = (a + z.intValue()).toString(b).substr(1) + r;
        y.divRemTo(d, y, z);
    }
    return z.intValue().toString(b) + r;
}

function bnpFromRadix(s, b) {
    this.fromInt(0);
    if (b == null) b = 10;
    var cs = this.chunkSize(b);
    var d = Math.pow(b, cs), mi = false, j = 0, w = 0;
    for (var i = 0; i < s.length; ++i) {
        var x = intAt(s, i);
        if (x < 0) {
            if (s.charAt(i) == "-" && this.signum() == 0) mi = true;
            continue;
        }
        w = b * w + x;
        if (++j >= cs) {
            this.dMultiply(d);
            this.dAddOffset(w, 0);
            j = 0;
            w = 0;
        }
    }
    if (j > 0) {
        this.dMultiply(Math.pow(b, j));
        this.dAddOffset(w, 0);
    }
    if (mi) BigInteger.ZERO.subTo(this, this);
}

function bnpFromNumber(a, b, c) {
    if ("number" == typeof b) {
        if (a < 2) this.fromInt(1); else {
            this.fromNumber(a, c);
            if (!this.testBit(a - 1)) this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), op_or, this);
            if (this.isEven()) this.dAddOffset(1, 0);
            while (!this.isProbablePrime(b)) {
                this.dAddOffset(2, 0);
                if (this.bitLength() > a) this.subTo(BigInteger.ONE.shiftLeft(a - 1), this);
            }
        }
    } else {
        var x = new Array(), t = a & 7;
        x.length = (a >> 3) + 1;
        b.nextBytes(x);
        if (t > 0) x[0] &= (1 << t) - 1; else x[0] = 0;
        this.fromString(x, 256);
    }
}

function bnToByteArray() {
    var i = this.t, r = new Array();
    r[0] = this.s;
    var p = this.DB - i * this.DB % 8, d, k = 0;
    if (i-- > 0) {
        if (p < this.DB && (d = this[i] >> p) != (this.s & this.DM) >> p) r[k++] = d | this.s << this.DB - p;
        while (i >= 0) {
            if (p < 8) {
                d = (this[i] & (1 << p) - 1) << 8 - p;
                d |= this[--i] >> (p += this.DB - 8);
            } else {
                d = this[i] >> (p -= 8) & 255;
                if (p <= 0) {
                    p += this.DB;
                    --i;
                }
            }
            if ((d & 128) != 0) d |= -256;
            if (k == 0 && (this.s & 128) != (d & 128)) ++k;
            if (k > 0 || d != this.s) r[k++] = d;
        }
    }
    return r;
}

function bnEquals(a) {
    return this.compareTo(a) == 0;
}

function bnMin(a) {
    return this.compareTo(a) < 0 ? this : a;
}

function bnMax(a) {
    return this.compareTo(a) > 0 ? this : a;
}

function bnpBitwiseTo(a, op, r) {
    var i, f, m = Math.min(a.t, this.t);
    for (i = 0; i < m; ++i) r[i] = op(this[i], a[i]);
    if (a.t < this.t) {
        f = a.s & this.DM;
        for (i = m; i < this.t; ++i) r[i] = op(this[i], f);
        r.t = this.t;
    } else {
        f = this.s & this.DM;
        for (i = m; i < a.t; ++i) r[i] = op(f, a[i]);
        r.t = a.t;
    }
    r.s = op(this.s, a.s);
    r.clamp();
}

function op_and(x, y) {
    return x & y;
}

function bnAnd(a) {
    var r = nbi();
    this.bitwiseTo(a, op_and, r);
    return r;
}

function op_or(x, y) {
    return x | y;
}

function bnOr(a) {
    var r = nbi();
    this.bitwiseTo(a, op_or, r);
    return r;
}

function op_xor(x, y) {
    return x ^ y;
}

function bnXor(a) {
    var r = nbi();
    this.bitwiseTo(a, op_xor, r);
    return r;
}

function op_andnot(x, y) {
    return x & ~y;
}

function bnAndNot(a) {
    var r = nbi();
    this.bitwiseTo(a, op_andnot, r);
    return r;
}

function bnNot() {
    var r = nbi();
    for (var i = 0; i < this.t; ++i) r[i] = this.DM & ~this[i];
    r.t = this.t;
    r.s = ~this.s;
    return r;
}

function bnShiftLeft(n) {
    var r = nbi();
    if (n < 0) this.rShiftTo(-n, r); else this.lShiftTo(n, r);
    return r;
}

function bnShiftRight(n) {
    var r = nbi();
    if (n < 0) this.lShiftTo(-n, r); else this.rShiftTo(n, r);
    return r;
}

function lbit(x) {
    if (x == 0) return -1;
    var r = 0;
    if ((x & 65535) == 0) {
        x >>= 16;
        r += 16;
    }
    if ((x & 255) == 0) {
        x >>= 8;
        r += 8;
    }
    if ((x & 15) == 0) {
        x >>= 4;
        r += 4;
    }
    if ((x & 3) == 0) {
        x >>= 2;
        r += 2;
    }
    if ((x & 1) == 0) ++r;
    return r;
}

function bnGetLowestSetBit() {
    for (var i = 0; i < this.t; ++i) if (this[i] != 0) return i * this.DB + lbit(this[i]);
    if (this.s < 0) return this.t * this.DB;
    return -1;
}

function cbit(x) {
    var r = 0;
    while (x != 0) {
        x &= x - 1;
        ++r;
    }
    return r;
}

function bnBitCount() {
    var r = 0, x = this.s & this.DM;
    for (var i = 0; i < this.t; ++i) r += cbit(this[i] ^ x);
    return r;
}

function bnTestBit(n) {
    var j = Math.floor(n / this.DB);
    if (j >= this.t) return this.s != 0;
    return (this[j] & 1 << n % this.DB) != 0;
}

function bnpChangeBit(n, op) {
    var r = BigInteger.ONE.shiftLeft(n);
    this.bitwiseTo(r, op, r);
    return r;
}

function bnSetBit(n) {
    return this.changeBit(n, op_or);
}

function bnClearBit(n) {
    return this.changeBit(n, op_andnot);
}

function bnFlipBit(n) {
    return this.changeBit(n, op_xor);
}

function bnpAddTo(a, r) {
    var i = 0, c = 0, m = Math.min(a.t, this.t);
    while (i < m) {
        c += this[i] + a[i];
        r[i++] = c & this.DM;
        c >>= this.DB;
    }
    if (a.t < this.t) {
        c += a.s;
        while (i < this.t) {
            c += this[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
        }
        c += this.s;
    } else {
        c += this.s;
        while (i < a.t) {
            c += a[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
        }
        c += a.s;
    }
    r.s = c < 0 ? -1 : 0;
    if (c > 0) r[i++] = c; else if (c < -1) r[i++] = this.DV + c;
    r.t = i;
    r.clamp();
}

function bnAdd(a) {
    var r = nbi();
    this.addTo(a, r);
    return r;
}

function bnSubtract(a) {
    var r = nbi();
    this.subTo(a, r);
    return r;
}

function bnMultiply(a) {
    var r = nbi();
    this.multiplyTo(a, r);
    return r;
}

function bnDivide(a) {
    var r = nbi();
    this.divRemTo(a, r, null);
    return r;
}

function bnRemainder(a) {
    var r = nbi();
    this.divRemTo(a, null, r);
    return r;
}

function bnDivideAndRemainder(a) {
    var q = nbi(), r = nbi();
    this.divRemTo(a, q, r);
    return new Array(q, r);
}

function bnpDMultiply(n) {
    this[this.t] = this.am(0, n - 1, this, 0, 0, this.t);
    ++this.t;
    this.clamp();
}

function bnpDAddOffset(n, w) {
    while (this.t <= w) this[this.t++] = 0;
    this[w] += n;
    while (this[w] >= this.DV) {
        this[w] -= this.DV;
        if (++w >= this.t) this[this.t++] = 0;
        ++this[w];
    }
}

function NullExp() {}

function nNop(x) {
    return x;
}

function nMulTo(x, y, r) {
    x.multiplyTo(y, r);
}

function nSqrTo(x, r) {
    x.squareTo(r);
}

NullExp.prototype.convert = nNop;

NullExp.prototype.revert = nNop;

NullExp.prototype.mulTo = nMulTo;

NullExp.prototype.sqrTo = nSqrTo;

function bnPow(e) {
    return this.exp(e, new NullExp());
}

function bnpMultiplyLowerTo(a, n, r) {
    var i = Math.min(this.t + a.t, n);
    r.s = 0;
    r.t = i;
    while (i > 0) r[--i] = 0;
    var j;
    for (j = r.t - this.t; i < j; ++i) r[i + this.t] = this.am(0, a[i], r, i, 0, this.t);
    for (j = Math.min(a.t, n); i < j; ++i) this.am(0, a[i], r, i, 0, n - i);
    r.clamp();
}

function bnpMultiplyUpperTo(a, n, r) {
    --n;
    var i = r.t = this.t + a.t - n;
    r.s = 0;
    while (--i >= 0) r[i] = 0;
    for (i = Math.max(n - this.t, 0); i < a.t; ++i) r[this.t + i - n] = this.am(n - i, a[i], r, 0, 0, this.t + i - n);
    r.clamp();
    r.drShiftTo(1, r);
}

function Barrett(m) {
    this.r2 = nbi();
    this.q3 = nbi();
    BigInteger.ONE.dlShiftTo(2 * m.t, this.r2);
    this.mu = this.r2.divide(m);
    this.m = m;
}

function barrettConvert(x) {
    if (x.s < 0 || x.t > 2 * this.m.t) return x.mod(this.m); else if (x.compareTo(this.m) < 0) return x; else {
        var r = nbi();
        x.copyTo(r);
        this.reduce(r);
        return r;
    }
}

function barrettRevert(x) {
    return x;
}

function barrettReduce(x) {
    x.drShiftTo(this.m.t - 1, this.r2);
    if (x.t > this.m.t + 1) {
        x.t = this.m.t + 1;
        x.clamp();
    }
    this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
    this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
    while (x.compareTo(this.r2) < 0) x.dAddOffset(1, this.m.t + 1);
    x.subTo(this.r2, x);
    while (x.compareTo(this.m) >= 0) x.subTo(this.m, x);
}

function barrettSqrTo(x, r) {
    x.squareTo(r);
    this.reduce(r);
}

function barrettMulTo(x, y, r) {
    x.multiplyTo(y, r);
    this.reduce(r);
}

Barrett.prototype.convert = barrettConvert;

Barrett.prototype.revert = barrettRevert;

Barrett.prototype.reduce = barrettReduce;

Barrett.prototype.mulTo = barrettMulTo;

Barrett.prototype.sqrTo = barrettSqrTo;

function bnModPow(e, m) {
    var i = e.bitLength(), k, r = nbv(1), z;
    if (i <= 0) return r; else if (i < 18) k = 1; else if (i < 48) k = 3; else if (i < 144) k = 4; else if (i < 768) k = 5; else k = 6;
    if (i < 8) z = new Classic(m); else if (m.isEven()) z = new Barrett(m); else z = new Montgomery(m);
    var g = new Array(), n = 3, k1 = k - 1, km = (1 << k) - 1;
    g[1] = z.convert(this);
    if (k > 1) {
        var g2 = nbi();
        z.sqrTo(g[1], g2);
        while (n <= km) {
            g[n] = nbi();
            z.mulTo(g2, g[n - 2], g[n]);
            n += 2;
        }
    }
    var j = e.t - 1, w, is1 = true, r2 = nbi(), t;
    i = nbits(e[j]) - 1;
    while (j >= 0) {
        if (i >= k1) w = e[j] >> i - k1 & km; else {
            w = (e[j] & (1 << i + 1) - 1) << k1 - i;
            if (j > 0) w |= e[j - 1] >> this.DB + i - k1;
        }
        n = k;
        while ((w & 1) == 0) {
            w >>= 1;
            --n;
        }
        if ((i -= n) < 0) {
            i += this.DB;
            --j;
        }
        if (is1) {
            g[w].copyTo(r);
            is1 = false;
        } else {
            while (n > 1) {
                z.sqrTo(r, r2);
                z.sqrTo(r2, r);
                n -= 2;
            }
            if (n > 0) z.sqrTo(r, r2); else {
                t = r;
                r = r2;
                r2 = t;
            }
            z.mulTo(r2, g[w], r);
        }
        while (j >= 0 && (e[j] & 1 << i) == 0) {
            z.sqrTo(r, r2);
            t = r;
            r = r2;
            r2 = t;
            if (--i < 0) {
                i = this.DB - 1;
                --j;
            }
        }
    }
    return z.revert(r);
}

function bnGCD(a) {
    var x = this.s < 0 ? this.negate() : this.clone();
    var y = a.s < 0 ? a.negate() : a.clone();
    if (x.compareTo(y) < 0) {
        var t = x;
        x = y;
        y = t;
    }
    var i = x.getLowestSetBit(), g = y.getLowestSetBit();
    if (g < 0) return x;
    if (i < g) g = i;
    if (g > 0) {
        x.rShiftTo(g, x);
        y.rShiftTo(g, y);
    }
    while (x.signum() > 0) {
        if ((i = x.getLowestSetBit()) > 0) x.rShiftTo(i, x);
        if ((i = y.getLowestSetBit()) > 0) y.rShiftTo(i, y);
        if (x.compareTo(y) >= 0) {
            x.subTo(y, x);
            x.rShiftTo(1, x);
        } else {
            y.subTo(x, y);
            y.rShiftTo(1, y);
        }
    }
    if (g > 0) y.lShiftTo(g, y);
    return y;
}

function bnpModInt(n) {
    if (n <= 0) return 0;
    var d = this.DV % n, r = this.s < 0 ? n - 1 : 0;
    if (this.t > 0) if (d == 0) r = this[0] % n; else for (var i = this.t - 1; i >= 0; --i) r = (d * r + this[i]) % n;
    return r;
}

function bnModInverse(m) {
    var ac = m.isEven();
    if (this.isEven() && ac || m.signum() == 0) return BigInteger.ZERO;
    var u = m.clone(), v = this.clone();
    var a = nbv(1), b = nbv(0), c = nbv(0), d = nbv(1);
    while (u.signum() != 0) {
        while (u.isEven()) {
            u.rShiftTo(1, u);
            if (ac) {
                if (!a.isEven() || !b.isEven()) {
                    a.addTo(this, a);
                    b.subTo(m, b);
                }
                a.rShiftTo(1, a);
            } else if (!b.isEven()) b.subTo(m, b);
            b.rShiftTo(1, b);
        }
        while (v.isEven()) {
            v.rShiftTo(1, v);
            if (ac) {
                if (!c.isEven() || !d.isEven()) {
                    c.addTo(this, c);
                    d.subTo(m, d);
                }
                c.rShiftTo(1, c);
            } else if (!d.isEven()) d.subTo(m, d);
            d.rShiftTo(1, d);
        }
        if (u.compareTo(v) >= 0) {
            u.subTo(v, u);
            if (ac) a.subTo(c, a);
            b.subTo(d, b);
        } else {
            v.subTo(u, v);
            if (ac) c.subTo(a, c);
            d.subTo(b, d);
        }
    }
    if (v.compareTo(BigInteger.ONE) != 0) return BigInteger.ZERO;
    if (d.compareTo(m) >= 0) return d.subtract(m);
    if (d.signum() < 0) d.addTo(m, d); else return d;
    if (d.signum() < 0) return d.add(m); else return d;
}

var lowprimes = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509 ];

var lplim = (1 << 26) / lowprimes[lowprimes.length - 1];

function bnIsProbablePrime(t) {
    var i, x = this.abs();
    if (x.t == 1 && x[0] <= lowprimes[lowprimes.length - 1]) {
        for (i = 0; i < lowprimes.length; ++i) if (x[0] == lowprimes[i]) return true;
        return false;
    }
    if (x.isEven()) return false;
    i = 1;
    while (i < lowprimes.length) {
        var m = lowprimes[i], j = i + 1;
        while (j < lowprimes.length && m < lplim) m *= lowprimes[j++];
        m = x.modInt(m);
        while (i < j) if (m % lowprimes[i++] == 0) return false;
    }
    return x.millerRabin(t);
}

function bnpMillerRabin(t) {
    var n1 = this.subtract(BigInteger.ONE);
    var k = n1.getLowestSetBit();
    if (k <= 0) return false;
    var r = n1.shiftRight(k);
    t = t + 1 >> 1;
    if (t > lowprimes.length) t = lowprimes.length;
    var a = nbi();
    for (var i = 0; i < t; ++i) {
        a.fromInt(lowprimes[i]);
        var y = a.modPow(r, this);
        if (y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
            var j = 1;
            while (j++ < k && y.compareTo(n1) != 0) {
                y = y.modPowInt(2, this);
                if (y.compareTo(BigInteger.ONE) == 0) return false;
            }
            if (y.compareTo(n1) != 0) return false;
        }
    }
    return true;
}

BigInteger.prototype.chunkSize = bnpChunkSize;

BigInteger.prototype.toRadix = bnpToRadix;

BigInteger.prototype.fromRadix = bnpFromRadix;

BigInteger.prototype.fromNumber = bnpFromNumber;

BigInteger.prototype.bitwiseTo = bnpBitwiseTo;

BigInteger.prototype.changeBit = bnpChangeBit;

BigInteger.prototype.addTo = bnpAddTo;

BigInteger.prototype.dMultiply = bnpDMultiply;

BigInteger.prototype.dAddOffset = bnpDAddOffset;

BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;

BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;

BigInteger.prototype.modInt = bnpModInt;

BigInteger.prototype.millerRabin = bnpMillerRabin;

BigInteger.prototype.clone = bnClone;

BigInteger.prototype.intValue = bnIntValue;

BigInteger.prototype.byteValue = bnByteValue;

BigInteger.prototype.shortValue = bnShortValue;

BigInteger.prototype.signum = bnSigNum;

BigInteger.prototype.toByteArray = bnToByteArray;

BigInteger.prototype.equals = bnEquals;

BigInteger.prototype.min = bnMin;

BigInteger.prototype.max = bnMax;

BigInteger.prototype.and = bnAnd;

BigInteger.prototype.or = bnOr;

BigInteger.prototype.xor = bnXor;

BigInteger.prototype.andNot = bnAndNot;

BigInteger.prototype.not = bnNot;

BigInteger.prototype.shiftLeft = bnShiftLeft;

BigInteger.prototype.shiftRight = bnShiftRight;

BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;

BigInteger.prototype.bitCount = bnBitCount;

BigInteger.prototype.testBit = bnTestBit;

BigInteger.prototype.setBit = bnSetBit;

BigInteger.prototype.clearBit = bnClearBit;

BigInteger.prototype.flipBit = bnFlipBit;

BigInteger.prototype.add = bnAdd;

BigInteger.prototype.subtract = bnSubtract;

BigInteger.prototype.multiply = bnMultiply;

BigInteger.prototype.divide = bnDivide;

BigInteger.prototype.remainder = bnRemainder;

BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;

BigInteger.prototype.modPow = bnModPow;

BigInteger.prototype.modInverse = bnModInverse;

BigInteger.prototype.pow = bnPow;

BigInteger.prototype.gcd = bnGCD;

BigInteger.prototype.isProbablePrime = bnIsProbablePrime;

function SecureRandom() {
    this.rng_state;
    this.rng_pool;
    this.rng_pptr;
    this.rng_seed_int = function(x) {
        this.rng_pool[this.rng_pptr++] ^= x & 255;
        this.rng_pool[this.rng_pptr++] ^= x >> 8 & 255;
        this.rng_pool[this.rng_pptr++] ^= x >> 16 & 255;
        this.rng_pool[this.rng_pptr++] ^= x >> 24 & 255;
        if (this.rng_pptr >= rng_psize) this.rng_pptr -= rng_psize;
    };
    this.rng_seed_time = function() {
        this.rng_seed_int(new Date().getTime());
    };
    if (this.rng_pool == null) {
        this.rng_pool = new Array();
        this.rng_pptr = 0;
        var t;
        if (navigator.appName == "Netscape" && navigator.appVersion < "5" && window.crypto) {
            var z = window.crypto.random(32);
            for (t = 0; t < z.length; ++t) this.rng_pool[this.rng_pptr++] = z.charCodeAt(t) & 255;
        }
        while (this.rng_pptr < rng_psize) {
            t = Math.floor(65536 * Math.random());
            this.rng_pool[this.rng_pptr++] = t >>> 8;
            this.rng_pool[this.rng_pptr++] = t & 255;
        }
        this.rng_pptr = 0;
        this.rng_seed_time();
    }
    this.rng_get_byte = function() {
        if (this.rng_state == null) {
            this.rng_seed_time();
            this.rng_state = prng_newstate();
            this.rng_state.init(this.rng_pool);
            for (this.rng_pptr = 0; this.rng_pptr < this.rng_pool.length; ++this.rng_pptr) this.rng_pool[this.rng_pptr] = 0;
            this.rng_pptr = 0;
        }
        return this.rng_state.next();
    };
    this.nextBytes = function(ba) {
        var i;
        for (i = 0; i < ba.length; ++i) ba[i] = this.rng_get_byte();
    };
}

function Arcfour() {
    this.i = 0;
    this.j = 0;
    this.S = new Array();
}

function ARC4init(key) {
    var i, j, t;
    for (i = 0; i < 256; ++i) this.S[i] = i;
    j = 0;
    for (i = 0; i < 256; ++i) {
        j = j + this.S[i] + key[i % key.length] & 255;
        t = this.S[i];
        this.S[i] = this.S[j];
        this.S[j] = t;
    }
    this.i = 0;
    this.j = 0;
}

function ARC4next() {
    var t;
    this.i = this.i + 1 & 255;
    this.j = this.j + this.S[this.i] & 255;
    t = this.S[this.i];
    this.S[this.i] = this.S[this.j];
    this.S[this.j] = t;
    return this.S[t + this.S[this.i] & 255];
}

Arcfour.prototype.init = ARC4init;

Arcfour.prototype.next = ARC4next;

function prng_newstate() {
    return new Arcfour();
}

var rng_psize = 256;

if (typeof pidCrypt != "undefined" && typeof BigInteger != "undefined" && typeof SecureRandom != "undefined" && typeof Arcfour != "undefined") {
    function parseBigInt(str, r) {
        return new BigInteger(str, r);
    }
    function linebrk(s, n) {
        var ret = "";
        var i = 0;
        while (i + n < s.length) {
            ret += s.substring(i, i + n) + "\n";
            i += n;
        }
        return ret + s.substring(i, s.length);
    }
    function byte2Hex(b) {
        if (b < 16) return "0" + b.toString(16); else return b.toString(16);
    }
    function pkcs1unpad2(d, n) {
        var b = d.toByteArray();
        var i = 0;
        while (i < b.length && b[i] == 0) ++i;
        if (b.length - i != n - 1 || b[i] != 2) return null;
        ++i;
        while (b[i] != 0) if (++i >= b.length) return null;
        var ret = "";
        while (++i < b.length) ret += String.fromCharCode(b[i]);
        return ret;
    }
    function pkcs1pad2(s, n) {
        if (n < s.length + 11) {
            alert("Message too long for RSA");
            return null;
        }
        var ba = new Array();
        var i = s.length - 1;
        while (i >= 0 && n > 0) {
            ba[--n] = s.charCodeAt(i--);
        }
        ba[--n] = 0;
        var rng = new SecureRandom();
        var x = new Array();
        while (n > 2) {
            x[0] = 0;
            while (x[0] == 0) rng.nextBytes(x);
            ba[--n] = x[0];
        }
        ba[--n] = 2;
        ba[--n] = 0;
        return new BigInteger(ba);
    }
    pidCrypt.RSA = function() {
        this.n = null;
        this.e = 0;
        this.d = null;
        this.p = null;
        this.q = null;
        this.dmp1 = null;
        this.dmq1 = null;
        this.coeff = null;
    };
    pidCrypt.RSA.prototype.doPrivate = function(x) {
        if (this.p == null || this.q == null) return x.modPow(this.d, this.n);
        var xp = x.mod(this.p).modPow(this.dmp1, this.p);
        var xq = x.mod(this.q).modPow(this.dmq1, this.q);
        while (xp.compareTo(xq) < 0) xp = xp.add(this.p);
        return xp.subtract(xq).multiply(this.coeff).mod(this.p).multiply(this.q).add(xq);
    };
    pidCrypt.RSA.prototype.setPublic = function(N, E, radix) {
        if (typeof radix == "undefined") radix = 16;
        if (N != null && E != null && N.length > 0 && E.length > 0) {
            this.n = parseBigInt(N, radix);
            this.e = parseInt(E, radix);
        } else alert("Invalid RSA public key");
    };
    pidCrypt.RSA.prototype.doPublic = function(x) {
        return x.modPowInt(this.e, this.n);
    };
    pidCrypt.RSA.prototype.encryptRaw = function(text) {
        var m = pkcs1pad2(text, this.n.bitLength() + 7 >> 3);
        if (m == null) return null;
        var c = this.doPublic(m);
        if (c == null) return null;
        var h = c.toString(16);
        if ((h.length & 1) == 0) return h; else return "0" + h;
    };
    pidCrypt.RSA.prototype.encrypt = function(text) {
        text = pidCryptUtil.encodeBase64(text);
        return this.encryptRaw(text);
    };
    pidCrypt.RSA.prototype.decryptRaw = function(ctext) {
        var c = parseBigInt(ctext, 16);
        var m = this.doPrivate(c);
        if (m == null) return null;
        return pkcs1unpad2(m, this.n.bitLength() + 7 >> 3);
    };
    pidCrypt.RSA.prototype.decrypt = function(ctext) {
        var str = this.decryptRaw(ctext);
        str = str ? pidCryptUtil.decodeBase64(str) : "";
        return str;
    };
    pidCrypt.RSA.prototype.setPrivate = function(N, E, D, radix) {
        if (typeof radix == "undefined") radix = 16;
        if (N != null && E != null && N.length > 0 && E.length > 0) {
            this.n = parseBigInt(N, radix);
            this.e = parseInt(E, radix);
            this.d = parseBigInt(D, radix);
        } else alert("Invalid RSA private key");
    };
    pidCrypt.RSA.prototype.setPrivateEx = function(N, E, D, P, Q, DP, DQ, C, radix) {
        if (typeof radix == "undefined") radix = 16;
        if (N != null && E != null && N.length > 0 && E.length > 0) {
            this.n = parseBigInt(N, radix);
            this.e = parseInt(E, radix);
            this.d = parseBigInt(D, radix);
            this.p = parseBigInt(P, radix);
            this.q = parseBigInt(Q, radix);
            this.dmp1 = parseBigInt(DP, radix);
            this.dmq1 = parseBigInt(DQ, radix);
            this.coeff = parseBigInt(C, radix);
        } else alert("Invalid RSA private key");
    };
    pidCrypt.RSA.prototype.generate = function(B, E) {
        var rng = new SecureRandom();
        var qs = B >> 1;
        this.e = parseInt(E, 16);
        var ee = new BigInteger(E, 16);
        for (;;) {
            for (;;) {
                this.p = new BigInteger(B - qs, 1, rng);
                if (this.p.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE) == 0 && this.p.isProbablePrime(10)) break;
            }
            for (;;) {
                this.q = new BigInteger(qs, 1, rng);
                if (this.q.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE) == 0 && this.q.isProbablePrime(10)) break;
            }
            if (this.p.compareTo(this.q) <= 0) {
                var t = this.p;
                this.p = this.q;
                this.q = t;
            }
            var p1 = this.p.subtract(BigInteger.ONE);
            var q1 = this.q.subtract(BigInteger.ONE);
            var phi = p1.multiply(q1);
            if (phi.gcd(ee).compareTo(BigInteger.ONE) == 0) {
                this.n = this.p.multiply(this.q);
                this.d = ee.modInverse(phi);
                this.dmp1 = this.d.mod(p1);
                this.dmq1 = this.d.mod(q1);
                this.coeff = this.q.modInverse(this.p);
                break;
            }
        }
    };
    pidCrypt.RSA.prototype.getASNData = function(tree) {
        var params = {};
        var data = [];
        var p = 0;
        if (tree.value && tree.type == "INTEGER") data[p++] = tree.value;
        if (tree.sub) for (var i = 0; i < tree.sub.length; i++) data = data.concat(this.getASNData(tree.sub[i]));
        return data;
    };
    pidCrypt.RSA.prototype.setKeyFromASN = function(key, asntree) {
        var keys = [ "N", "E", "D", "P", "Q", "DP", "DQ", "C" ];
        var params = {};
        var asnData = this.getASNData(asntree);
        switch (key) {
          case "Public":
          case "public":
            for (var i = 0; i < asnData.length; i++) params[keys[i]] = asnData[i].toLowerCase();
            this.setPublic(params.N, params.E, 16);
            break;

          case "Private":
          case "private":
            for (var i = 1; i < asnData.length; i++) params[keys[i - 1]] = asnData[i].toLowerCase();
            this.setPrivateEx(params.N, params.E, params.D, params.P, params.Q, params.DP, params.DQ, params.C, 16);
            break;
        }
    };
    pidCrypt.RSA.prototype.setPublicKeyFromASN = function(asntree) {
        this.setKeyFromASN("public", asntree);
    };
    pidCrypt.RSA.prototype.setPrivateKeyFromASN = function(asntree) {
        this.setKeyFromASN("private", asntree);
    };
    pidCrypt.RSA.prototype.getParameters = function() {
        var params = {};
        if (this.n != null) params.n = this.n;
        params.e = this.e;
        if (this.d != null) params.d = this.d;
        if (this.p != null) params.p = this.p;
        if (this.q != null) params.q = this.q;
        if (this.dmp1 != null) params.dmp1 = this.dmp1;
        if (this.dmq1 != null) params.dmq1 = this.dmq1;
        if (this.coeff != null) params.c = this.coeff;
        return params;
    };
}

String.prototype.encodeBase64 = function(utf8encode) {
    return pidCryptUtil.encodeBase64(this, utf8encode);
};

String.prototype.decodeBase64 = function(utf8decode) {
    return pidCryptUtil.decodeBase64(this, utf8decode);
};

String.prototype.encodeUTF8 = function() {
    return pidCryptUtil.encodeUTF8(this);
};

String.prototype.decodeUTF8 = function() {
    return pidCryptUtil.decodeUTF8(this);
};

String.prototype.convertToHex = function() {
    return pidCryptUtil.convertToHex(this);
};

String.prototype.convertFromHex = function() {
    return pidCryptUtil.convertFromHex(this);
};

String.prototype.stripLineFeeds = function() {
    return pidCryptUtil.stripLineFeeds(this);
};

String.prototype.toByteArray = function() {
    return pidCryptUtil.toByteArray(this);
};

String.prototype.fragment = function(length, lf) {
    return pidCryptUtil.fragment(this, length, lf);
};

String.prototype.formatHex = function(length) {
    return pidCryptUtil.formatHex(this, length);
};

module.exports = {
    pidCrypt: pidCrypt,
    pidCryptUtil: pidCryptUtil
};
},{}],5:[function(require,module,exports){
(function (process){
// vim:ts=4:sts=4:sw=4:
/*!
 *
 * Copyright 2009-2012 Kris Kowal under the terms of the MIT
 * license found at http://github.com/kriskowal/q/raw/master/LICENSE
 *
 * With parts by Tyler Close
 * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
 * at http://www.opensource.org/licenses/mit-license.html
 * Forked at ref_send.js version: 2009-05-11
 *
 * With parts by Mark Miller
 * Copyright (C) 2011 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

(function (definition) {
    "use strict";

    // This file will function properly as a <script> tag, or a module
    // using CommonJS and NodeJS or RequireJS module formats.  In
    // Common/Node/RequireJS, the module exports the Q API and when
    // executed as a simple <script>, it creates a Q global instead.

    // Montage Require
    if (typeof bootstrap === "function") {
        bootstrap("promise", definition);

    // CommonJS
    } else if (typeof exports === "object" && typeof module === "object") {
        module.exports = definition();

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
        define(definition);

    // SES (Secure EcmaScript)
    } else if (typeof ses !== "undefined") {
        if (!ses.ok()) {
            return;
        } else {
            ses.makeQ = definition;
        }

    // <script>
    } else if (typeof window !== "undefined" || typeof self !== "undefined") {
        // Prefer window over self for add-on scripts. Use self for
        // non-windowed contexts.
        var global = typeof window !== "undefined" ? window : self;

        // Get the `window` object, save the previous Q global
        // and initialize Q as a global.
        var previousQ = global.Q;
        global.Q = definition();

        // Add a noConflict function so Q can be removed from the
        // global namespace.
        global.Q.noConflict = function () {
            global.Q = previousQ;
            return this;
        };

    } else {
        throw new Error("This environment was not anticipated by Q. Please file a bug.");
    }

})(function () {
"use strict";

var hasStacks = false;
try {
    throw new Error();
} catch (e) {
    hasStacks = !!e.stack;
}

// All code after this point will be filtered from stack traces reported
// by Q.
var qStartingLine = captureLine();
var qFileName;

// shims

// used for fallback in "allResolved"
var noop = function () {};

// Use the fastest possible means to execute a task in a future turn
// of the event loop.
var nextTick =(function () {
    // linked list of tasks (single, with head node)
    var head = {task: void 0, next: null};
    var tail = head;
    var flushing = false;
    var requestTick = void 0;
    var isNodeJS = false;
    // queue for late tasks, used by unhandled rejection tracking
    var laterQueue = [];

    function flush() {
        /* jshint loopfunc: true */
        var task, domain;

        while (head.next) {
            head = head.next;
            task = head.task;
            head.task = void 0;
            domain = head.domain;

            if (domain) {
                head.domain = void 0;
                domain.enter();
            }
            runSingle(task, domain);

        }
        while (laterQueue.length) {
            task = laterQueue.pop();
            runSingle(task);
        }
        flushing = false;
    }
    // runs a single function in the async queue
    function runSingle(task, domain) {
        try {
            task();

        } catch (e) {
            if (isNodeJS) {
                // In node, uncaught exceptions are considered fatal errors.
                // Re-throw them synchronously to interrupt flushing!

                // Ensure continuation if the uncaught exception is suppressed
                // listening "uncaughtException" events (as domains does).
                // Continue in next event to avoid tick recursion.
                if (domain) {
                    domain.exit();
                }
                setTimeout(flush, 0);
                if (domain) {
                    domain.enter();
                }

                throw e;

            } else {
                // In browsers, uncaught exceptions are not fatal.
                // Re-throw them asynchronously to avoid slow-downs.
                setTimeout(function () {
                    throw e;
                }, 0);
            }
        }

        if (domain) {
            domain.exit();
        }
    }

    nextTick = function (task) {
        tail = tail.next = {
            task: task,
            domain: isNodeJS && process.domain,
            next: null
        };

        if (!flushing) {
            flushing = true;
            requestTick();
        }
    };

    if (typeof process === "object" &&
        process.toString() === "[object process]" && process.nextTick) {
        // Ensure Q is in a real Node environment, with a `process.nextTick`.
        // To see through fake Node environments:
        // * Mocha test runner - exposes a `process` global without a `nextTick`
        // * Browserify - exposes a `process.nexTick` function that uses
        //   `setTimeout`. In this case `setImmediate` is preferred because
        //    it is faster. Browserify's `process.toString()` yields
        //   "[object Object]", while in a real Node environment
        //   `process.nextTick()` yields "[object process]".
        isNodeJS = true;

        requestTick = function () {
            process.nextTick(flush);
        };

    } else if (typeof setImmediate === "function") {
        // In IE10, Node.js 0.9+, or https://github.com/NobleJS/setImmediate
        if (typeof window !== "undefined") {
            requestTick = setImmediate.bind(window, flush);
        } else {
            requestTick = function () {
                setImmediate(flush);
            };
        }

    } else if (typeof MessageChannel !== "undefined") {
        // modern browsers
        // http://www.nonblocking.io/2011/06/windownexttick.html
        var channel = new MessageChannel();
        // At least Safari Version 6.0.5 (8536.30.1) intermittently cannot create
        // working message ports the first time a page loads.
        channel.port1.onmessage = function () {
            requestTick = requestPortTick;
            channel.port1.onmessage = flush;
            flush();
        };
        var requestPortTick = function () {
            // Opera requires us to provide a message payload, regardless of
            // whether we use it.
            channel.port2.postMessage(0);
        };
        requestTick = function () {
            setTimeout(flush, 0);
            requestPortTick();
        };

    } else {
        // old browsers
        requestTick = function () {
            setTimeout(flush, 0);
        };
    }
    // runs a task after all other tasks have been run
    // this is useful for unhandled rejection tracking that needs to happen
    // after all `then`d tasks have been run.
    nextTick.runAfter = function (task) {
        laterQueue.push(task);
        if (!flushing) {
            flushing = true;
            requestTick();
        }
    };
    return nextTick;
})();

// Attempt to make generics safe in the face of downstream
// modifications.
// There is no situation where this is necessary.
// If you need a security guarantee, these primordials need to be
// deeply frozen anyway, and if you don’t need a security guarantee,
// this is just plain paranoid.
// However, this **might** have the nice side-effect of reducing the size of
// the minified code by reducing x.call() to merely x()
// See Mark Miller’s explanation of what this does.
// http://wiki.ecmascript.org/doku.php?id=conventions:safe_meta_programming
var call = Function.call;
function uncurryThis(f) {
    return function () {
        return call.apply(f, arguments);
    };
}
// This is equivalent, but slower:
// uncurryThis = Function_bind.bind(Function_bind.call);
// http://jsperf.com/uncurrythis

var array_slice = uncurryThis(Array.prototype.slice);

var array_reduce = uncurryThis(
    Array.prototype.reduce || function (callback, basis) {
        var index = 0,
            length = this.length;
        // concerning the initial value, if one is not provided
        if (arguments.length === 1) {
            // seek to the first value in the array, accounting
            // for the possibility that is is a sparse array
            do {
                if (index in this) {
                    basis = this[index++];
                    break;
                }
                if (++index >= length) {
                    throw new TypeError();
                }
            } while (1);
        }
        // reduce
        for (; index < length; index++) {
            // account for the possibility that the array is sparse
            if (index in this) {
                basis = callback(basis, this[index], index);
            }
        }
        return basis;
    }
);

var array_indexOf = uncurryThis(
    Array.prototype.indexOf || function (value) {
        // not a very good shim, but good enough for our one use of it
        for (var i = 0; i < this.length; i++) {
            if (this[i] === value) {
                return i;
            }
        }
        return -1;
    }
);

var array_map = uncurryThis(
    Array.prototype.map || function (callback, thisp) {
        var self = this;
        var collect = [];
        array_reduce(self, function (undefined, value, index) {
            collect.push(callback.call(thisp, value, index, self));
        }, void 0);
        return collect;
    }
);

var object_create = Object.create || function (prototype) {
    function Type() { }
    Type.prototype = prototype;
    return new Type();
};

var object_hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);

var object_keys = Object.keys || function (object) {
    var keys = [];
    for (var key in object) {
        if (object_hasOwnProperty(object, key)) {
            keys.push(key);
        }
    }
    return keys;
};

var object_toString = uncurryThis(Object.prototype.toString);

function isObject(value) {
    return value === Object(value);
}

// generator related shims

// FIXME: Remove this function once ES6 generators are in SpiderMonkey.
function isStopIteration(exception) {
    return (
        object_toString(exception) === "[object StopIteration]" ||
        exception instanceof QReturnValue
    );
}

// FIXME: Remove this helper and Q.return once ES6 generators are in
// SpiderMonkey.
var QReturnValue;
if (typeof ReturnValue !== "undefined") {
    QReturnValue = ReturnValue;
} else {
    QReturnValue = function (value) {
        this.value = value;
    };
}

// long stack traces

var STACK_JUMP_SEPARATOR = "From previous event:";

function makeStackTraceLong(error, promise) {
    // If possible, transform the error stack trace by removing Node and Q
    // cruft, then concatenating with the stack trace of `promise`. See #57.
    if (hasStacks &&
        promise.stack &&
        typeof error === "object" &&
        error !== null &&
        error.stack &&
        error.stack.indexOf(STACK_JUMP_SEPARATOR) === -1
    ) {
        var stacks = [];
        for (var p = promise; !!p; p = p.source) {
            if (p.stack) {
                stacks.unshift(p.stack);
            }
        }
        stacks.unshift(error.stack);

        var concatedStacks = stacks.join("\n" + STACK_JUMP_SEPARATOR + "\n");
        error.stack = filterStackString(concatedStacks);
    }
}

function filterStackString(stackString) {
    var lines = stackString.split("\n");
    var desiredLines = [];
    for (var i = 0; i < lines.length; ++i) {
        var line = lines[i];

        if (!isInternalFrame(line) && !isNodeFrame(line) && line) {
            desiredLines.push(line);
        }
    }
    return desiredLines.join("\n");
}

function isNodeFrame(stackLine) {
    return stackLine.indexOf("(module.js:") !== -1 ||
           stackLine.indexOf("(node.js:") !== -1;
}

function getFileNameAndLineNumber(stackLine) {
    // Named functions: "at functionName (filename:lineNumber:columnNumber)"
    // In IE10 function name can have spaces ("Anonymous function") O_o
    var attempt1 = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(stackLine);
    if (attempt1) {
        return [attempt1[1], Number(attempt1[2])];
    }

    // Anonymous functions: "at filename:lineNumber:columnNumber"
    var attempt2 = /at ([^ ]+):(\d+):(?:\d+)$/.exec(stackLine);
    if (attempt2) {
        return [attempt2[1], Number(attempt2[2])];
    }

    // Firefox style: "function@filename:lineNumber or @filename:lineNumber"
    var attempt3 = /.*@(.+):(\d+)$/.exec(stackLine);
    if (attempt3) {
        return [attempt3[1], Number(attempt3[2])];
    }
}

function isInternalFrame(stackLine) {
    var fileNameAndLineNumber = getFileNameAndLineNumber(stackLine);

    if (!fileNameAndLineNumber) {
        return false;
    }

    var fileName = fileNameAndLineNumber[0];
    var lineNumber = fileNameAndLineNumber[1];

    return fileName === qFileName &&
        lineNumber >= qStartingLine &&
        lineNumber <= qEndingLine;
}

// discover own file name and line number range for filtering stack
// traces
function captureLine() {
    if (!hasStacks) {
        return;
    }

    try {
        throw new Error();
    } catch (e) {
        var lines = e.stack.split("\n");
        var firstLine = lines[0].indexOf("@") > 0 ? lines[1] : lines[2];
        var fileNameAndLineNumber = getFileNameAndLineNumber(firstLine);
        if (!fileNameAndLineNumber) {
            return;
        }

        qFileName = fileNameAndLineNumber[0];
        return fileNameAndLineNumber[1];
    }
}

function deprecate(callback, name, alternative) {
    return function () {
        if (typeof console !== "undefined" &&
            typeof console.warn === "function") {
            console.warn(name + " is deprecated, use " + alternative +
                         " instead.", new Error("").stack);
        }
        return callback.apply(callback, arguments);
    };
}

// end of shims
// beginning of real work

/**
 * Constructs a promise for an immediate reference, passes promises through, or
 * coerces promises from different systems.
 * @param value immediate reference or promise
 */
function Q(value) {
    // If the object is already a Promise, return it directly.  This enables
    // the resolve function to both be used to created references from objects,
    // but to tolerably coerce non-promises to promises.
    if (value instanceof Promise) {
        return value;
    }

    // assimilate thenables
    if (isPromiseAlike(value)) {
        return coerce(value);
    } else {
        return fulfill(value);
    }
}
Q.resolve = Q;

/**
 * Performs a task in a future turn of the event loop.
 * @param {Function} task
 */
Q.nextTick = nextTick;

/**
 * Controls whether or not long stack traces will be on
 */
Q.longStackSupport = false;

// enable long stacks if Q_DEBUG is set
if (typeof process === "object" && process && process.env && process.env.Q_DEBUG) {
    Q.longStackSupport = true;
}

/**
 * Constructs a {promise, resolve, reject} object.
 *
 * `resolve` is a callback to invoke with a more resolved value for the
 * promise. To fulfill the promise, invoke `resolve` with any value that is
 * not a thenable. To reject the promise, invoke `resolve` with a rejected
 * thenable, or invoke `reject` with the reason directly. To resolve the
 * promise to another thenable, thus putting it in the same state, invoke
 * `resolve` with that other thenable.
 */
Q.defer = defer;
function defer() {
    // if "messages" is an "Array", that indicates that the promise has not yet
    // been resolved.  If it is "undefined", it has been resolved.  Each
    // element of the messages array is itself an array of complete arguments to
    // forward to the resolved promise.  We coerce the resolution value to a
    // promise using the `resolve` function because it handles both fully
    // non-thenable values and other thenables gracefully.
    var messages = [], progressListeners = [], resolvedPromise;

    var deferred = object_create(defer.prototype);
    var promise = object_create(Promise.prototype);

    promise.promiseDispatch = function (resolve, op, operands) {
        var args = array_slice(arguments);
        if (messages) {
            messages.push(args);
            if (op === "when" && operands[1]) { // progress operand
                progressListeners.push(operands[1]);
            }
        } else {
            Q.nextTick(function () {
                resolvedPromise.promiseDispatch.apply(resolvedPromise, args);
            });
        }
    };

    // XXX deprecated
    promise.valueOf = function () {
        if (messages) {
            return promise;
        }
        var nearerValue = nearer(resolvedPromise);
        if (isPromise(nearerValue)) {
            resolvedPromise = nearerValue; // shorten chain
        }
        return nearerValue;
    };

    promise.inspect = function () {
        if (!resolvedPromise) {
            return { state: "pending" };
        }
        return resolvedPromise.inspect();
    };

    if (Q.longStackSupport && hasStacks) {
        try {
            throw new Error();
        } catch (e) {
            // NOTE: don't try to use `Error.captureStackTrace` or transfer the
            // accessor around; that causes memory leaks as per GH-111. Just
            // reify the stack trace as a string ASAP.
            //
            // At the same time, cut off the first line; it's always just
            // "[object Promise]\n", as per the `toString`.
            promise.stack = e.stack.substring(e.stack.indexOf("\n") + 1);
        }
    }

    // NOTE: we do the checks for `resolvedPromise` in each method, instead of
    // consolidating them into `become`, since otherwise we'd create new
    // promises with the lines `become(whatever(value))`. See e.g. GH-252.

    function become(newPromise) {
        resolvedPromise = newPromise;
        promise.source = newPromise;

        array_reduce(messages, function (undefined, message) {
            Q.nextTick(function () {
                newPromise.promiseDispatch.apply(newPromise, message);
            });
        }, void 0);

        messages = void 0;
        progressListeners = void 0;
    }

    deferred.promise = promise;
    deferred.resolve = function (value) {
        if (resolvedPromise) {
            return;
        }

        become(Q(value));
    };

    deferred.fulfill = function (value) {
        if (resolvedPromise) {
            return;
        }

        become(fulfill(value));
    };
    deferred.reject = function (reason) {
        if (resolvedPromise) {
            return;
        }

        become(reject(reason));
    };
    deferred.notify = function (progress) {
        if (resolvedPromise) {
            return;
        }

        array_reduce(progressListeners, function (undefined, progressListener) {
            Q.nextTick(function () {
                progressListener(progress);
            });
        }, void 0);
    };

    return deferred;
}

/**
 * Creates a Node-style callback that will resolve or reject the deferred
 * promise.
 * @returns a nodeback
 */
defer.prototype.makeNodeResolver = function () {
    var self = this;
    return function (error, value) {
        if (error) {
            self.reject(error);
        } else if (arguments.length > 2) {
            self.resolve(array_slice(arguments, 1));
        } else {
            self.resolve(value);
        }
    };
};

/**
 * @param resolver {Function} a function that returns nothing and accepts
 * the resolve, reject, and notify functions for a deferred.
 * @returns a promise that may be resolved with the given resolve and reject
 * functions, or rejected by a thrown exception in resolver
 */
Q.Promise = promise; // ES6
Q.promise = promise;
function promise(resolver) {
    if (typeof resolver !== "function") {
        throw new TypeError("resolver must be a function.");
    }
    var deferred = defer();
    try {
        resolver(deferred.resolve, deferred.reject, deferred.notify);
    } catch (reason) {
        deferred.reject(reason);
    }
    return deferred.promise;
}

promise.race = race; // ES6
promise.all = all; // ES6
promise.reject = reject; // ES6
promise.resolve = Q; // ES6

// XXX experimental.  This method is a way to denote that a local value is
// serializable and should be immediately dispatched to a remote upon request,
// instead of passing a reference.
Q.passByCopy = function (object) {
    //freeze(object);
    //passByCopies.set(object, true);
    return object;
};

Promise.prototype.passByCopy = function () {
    //freeze(object);
    //passByCopies.set(object, true);
    return this;
};

/**
 * If two promises eventually fulfill to the same value, promises that value,
 * but otherwise rejects.
 * @param x {Any*}
 * @param y {Any*}
 * @returns {Any*} a promise for x and y if they are the same, but a rejection
 * otherwise.
 *
 */
Q.join = function (x, y) {
    return Q(x).join(y);
};

Promise.prototype.join = function (that) {
    return Q([this, that]).spread(function (x, y) {
        if (x === y) {
            // TODO: "===" should be Object.is or equiv
            return x;
        } else {
            throw new Error("Can't join: not the same: " + x + " " + y);
        }
    });
};

/**
 * Returns a promise for the first of an array of promises to become settled.
 * @param answers {Array[Any*]} promises to race
 * @returns {Any*} the first promise to be settled
 */
Q.race = race;
function race(answerPs) {
    return promise(function (resolve, reject) {
        // Switch to this once we can assume at least ES5
        // answerPs.forEach(function (answerP) {
        //     Q(answerP).then(resolve, reject);
        // });
        // Use this in the meantime
        for (var i = 0, len = answerPs.length; i < len; i++) {
            Q(answerPs[i]).then(resolve, reject);
        }
    });
}

Promise.prototype.race = function () {
    return this.then(Q.race);
};

/**
 * Constructs a Promise with a promise descriptor object and optional fallback
 * function.  The descriptor contains methods like when(rejected), get(name),
 * set(name, value), post(name, args), and delete(name), which all
 * return either a value, a promise for a value, or a rejection.  The fallback
 * accepts the operation name, a resolver, and any further arguments that would
 * have been forwarded to the appropriate method above had a method been
 * provided with the proper name.  The API makes no guarantees about the nature
 * of the returned object, apart from that it is usable whereever promises are
 * bought and sold.
 */
Q.makePromise = Promise;
function Promise(descriptor, fallback, inspect) {
    if (fallback === void 0) {
        fallback = function (op) {
            return reject(new Error(
                "Promise does not support operation: " + op
            ));
        };
    }
    if (inspect === void 0) {
        inspect = function () {
            return {state: "unknown"};
        };
    }

    var promise = object_create(Promise.prototype);

    promise.promiseDispatch = function (resolve, op, args) {
        var result;
        try {
            if (descriptor[op]) {
                result = descriptor[op].apply(promise, args);
            } else {
                result = fallback.call(promise, op, args);
            }
        } catch (exception) {
            result = reject(exception);
        }
        if (resolve) {
            resolve(result);
        }
    };

    promise.inspect = inspect;

    // XXX deprecated `valueOf` and `exception` support
    if (inspect) {
        var inspected = inspect();
        if (inspected.state === "rejected") {
            promise.exception = inspected.reason;
        }

        promise.valueOf = function () {
            var inspected = inspect();
            if (inspected.state === "pending" ||
                inspected.state === "rejected") {
                return promise;
            }
            return inspected.value;
        };
    }

    return promise;
}

Promise.prototype.toString = function () {
    return "[object Promise]";
};

Promise.prototype.then = function (fulfilled, rejected, progressed) {
    var self = this;
    var deferred = defer();
    var done = false;   // ensure the untrusted promise makes at most a
                        // single call to one of the callbacks

    function _fulfilled(value) {
        try {
            return typeof fulfilled === "function" ? fulfilled(value) : value;
        } catch (exception) {
            return reject(exception);
        }
    }

    function _rejected(exception) {
        if (typeof rejected === "function") {
            makeStackTraceLong(exception, self);
            try {
                return rejected(exception);
            } catch (newException) {
                return reject(newException);
            }
        }
        return reject(exception);
    }

    function _progressed(value) {
        return typeof progressed === "function" ? progressed(value) : value;
    }

    Q.nextTick(function () {
        self.promiseDispatch(function (value) {
            if (done) {
                return;
            }
            done = true;

            deferred.resolve(_fulfilled(value));
        }, "when", [function (exception) {
            if (done) {
                return;
            }
            done = true;

            deferred.resolve(_rejected(exception));
        }]);
    });

    // Progress propagator need to be attached in the current tick.
    self.promiseDispatch(void 0, "when", [void 0, function (value) {
        var newValue;
        var threw = false;
        try {
            newValue = _progressed(value);
        } catch (e) {
            threw = true;
            if (Q.onerror) {
                Q.onerror(e);
            } else {
                throw e;
            }
        }

        if (!threw) {
            deferred.notify(newValue);
        }
    }]);

    return deferred.promise;
};

Q.tap = function (promise, callback) {
    return Q(promise).tap(callback);
};

/**
 * Works almost like "finally", but not called for rejections.
 * Original resolution value is passed through callback unaffected.
 * Callback may return a promise that will be awaited for.
 * @param {Function} callback
 * @returns {Q.Promise}
 * @example
 * doSomething()
 *   .then(...)
 *   .tap(console.log)
 *   .then(...);
 */
Promise.prototype.tap = function (callback) {
    callback = Q(callback);

    return this.then(function (value) {
        return callback.fcall(value).thenResolve(value);
    });
};

/**
 * Registers an observer on a promise.
 *
 * Guarantees:
 *
 * 1. that fulfilled and rejected will be called only once.
 * 2. that either the fulfilled callback or the rejected callback will be
 *    called, but not both.
 * 3. that fulfilled and rejected will not be called in this turn.
 *
 * @param value      promise or immediate reference to observe
 * @param fulfilled  function to be called with the fulfilled value
 * @param rejected   function to be called with the rejection exception
 * @param progressed function to be called on any progress notifications
 * @return promise for the return value from the invoked callback
 */
Q.when = when;
function when(value, fulfilled, rejected, progressed) {
    return Q(value).then(fulfilled, rejected, progressed);
}

Promise.prototype.thenResolve = function (value) {
    return this.then(function () { return value; });
};

Q.thenResolve = function (promise, value) {
    return Q(promise).thenResolve(value);
};

Promise.prototype.thenReject = function (reason) {
    return this.then(function () { throw reason; });
};

Q.thenReject = function (promise, reason) {
    return Q(promise).thenReject(reason);
};

/**
 * If an object is not a promise, it is as "near" as possible.
 * If a promise is rejected, it is as "near" as possible too.
 * If it’s a fulfilled promise, the fulfillment value is nearer.
 * If it’s a deferred promise and the deferred has been resolved, the
 * resolution is "nearer".
 * @param object
 * @returns most resolved (nearest) form of the object
 */

// XXX should we re-do this?
Q.nearer = nearer;
function nearer(value) {
    if (isPromise(value)) {
        var inspected = value.inspect();
        if (inspected.state === "fulfilled") {
            return inspected.value;
        }
    }
    return value;
}

/**
 * @returns whether the given object is a promise.
 * Otherwise it is a fulfilled value.
 */
Q.isPromise = isPromise;
function isPromise(object) {
    return object instanceof Promise;
}

Q.isPromiseAlike = isPromiseAlike;
function isPromiseAlike(object) {
    return isObject(object) && typeof object.then === "function";
}

/**
 * @returns whether the given object is a pending promise, meaning not
 * fulfilled or rejected.
 */
Q.isPending = isPending;
function isPending(object) {
    return isPromise(object) && object.inspect().state === "pending";
}

Promise.prototype.isPending = function () {
    return this.inspect().state === "pending";
};

/**
 * @returns whether the given object is a value or fulfilled
 * promise.
 */
Q.isFulfilled = isFulfilled;
function isFulfilled(object) {
    return !isPromise(object) || object.inspect().state === "fulfilled";
}

Promise.prototype.isFulfilled = function () {
    return this.inspect().state === "fulfilled";
};

/**
 * @returns whether the given object is a rejected promise.
 */
Q.isRejected = isRejected;
function isRejected(object) {
    return isPromise(object) && object.inspect().state === "rejected";
}

Promise.prototype.isRejected = function () {
    return this.inspect().state === "rejected";
};

//// BEGIN UNHANDLED REJECTION TRACKING

// This promise library consumes exceptions thrown in handlers so they can be
// handled by a subsequent promise.  The exceptions get added to this array when
// they are created, and removed when they are handled.  Note that in ES6 or
// shimmed environments, this would naturally be a `Set`.
var unhandledReasons = [];
var unhandledRejections = [];
var reportedUnhandledRejections = [];
var trackUnhandledRejections = true;

function resetUnhandledRejections() {
    unhandledReasons.length = 0;
    unhandledRejections.length = 0;

    if (!trackUnhandledRejections) {
        trackUnhandledRejections = true;
    }
}

function trackRejection(promise, reason) {
    if (!trackUnhandledRejections) {
        return;
    }
    if (typeof process === "object" && typeof process.emit === "function") {
        Q.nextTick.runAfter(function () {
            if (array_indexOf(unhandledRejections, promise) !== -1) {
                process.emit("unhandledRejection", reason, promise);
                reportedUnhandledRejections.push(promise);
            }
        });
    }

    unhandledRejections.push(promise);
    if (reason && typeof reason.stack !== "undefined") {
        unhandledReasons.push(reason.stack);
    } else {
        unhandledReasons.push("(no stack) " + reason);
    }
}

function untrackRejection(promise) {
    if (!trackUnhandledRejections) {
        return;
    }

    var at = array_indexOf(unhandledRejections, promise);
    if (at !== -1) {
        if (typeof process === "object" && typeof process.emit === "function") {
            Q.nextTick.runAfter(function () {
                var atReport = array_indexOf(reportedUnhandledRejections, promise);
                if (atReport !== -1) {
                    process.emit("rejectionHandled", unhandledReasons[at], promise);
                    reportedUnhandledRejections.splice(atReport, 1);
                }
            });
        }
        unhandledRejections.splice(at, 1);
        unhandledReasons.splice(at, 1);
    }
}

Q.resetUnhandledRejections = resetUnhandledRejections;

Q.getUnhandledReasons = function () {
    // Make a copy so that consumers can't interfere with our internal state.
    return unhandledReasons.slice();
};

Q.stopUnhandledRejectionTracking = function () {
    resetUnhandledRejections();
    trackUnhandledRejections = false;
};

resetUnhandledRejections();

//// END UNHANDLED REJECTION TRACKING

/**
 * Constructs a rejected promise.
 * @param reason value describing the failure
 */
Q.reject = reject;
function reject(reason) {
    var rejection = Promise({
        "when": function (rejected) {
            // note that the error has been handled
            if (rejected) {
                untrackRejection(this);
            }
            return rejected ? rejected(reason) : this;
        }
    }, function fallback() {
        return this;
    }, function inspect() {
        return { state: "rejected", reason: reason };
    });

    // Note that the reason has not been handled.
    trackRejection(rejection, reason);

    return rejection;
}

/**
 * Constructs a fulfilled promise for an immediate reference.
 * @param value immediate reference
 */
Q.fulfill = fulfill;
function fulfill(value) {
    return Promise({
        "when": function () {
            return value;
        },
        "get": function (name) {
            return value[name];
        },
        "set": function (name, rhs) {
            value[name] = rhs;
        },
        "delete": function (name) {
            delete value[name];
        },
        "post": function (name, args) {
            // Mark Miller proposes that post with no name should apply a
            // promised function.
            if (name === null || name === void 0) {
                return value.apply(void 0, args);
            } else {
                return value[name].apply(value, args);
            }
        },
        "apply": function (thisp, args) {
            return value.apply(thisp, args);
        },
        "keys": function () {
            return object_keys(value);
        }
    }, void 0, function inspect() {
        return { state: "fulfilled", value: value };
    });
}

/**
 * Converts thenables to Q promises.
 * @param promise thenable promise
 * @returns a Q promise
 */
function coerce(promise) {
    var deferred = defer();
    Q.nextTick(function () {
        try {
            promise.then(deferred.resolve, deferred.reject, deferred.notify);
        } catch (exception) {
            deferred.reject(exception);
        }
    });
    return deferred.promise;
}

/**
 * Annotates an object such that it will never be
 * transferred away from this process over any promise
 * communication channel.
 * @param object
 * @returns promise a wrapping of that object that
 * additionally responds to the "isDef" message
 * without a rejection.
 */
Q.master = master;
function master(object) {
    return Promise({
        "isDef": function () {}
    }, function fallback(op, args) {
        return dispatch(object, op, args);
    }, function () {
        return Q(object).inspect();
    });
}

/**
 * Spreads the values of a promised array of arguments into the
 * fulfillment callback.
 * @param fulfilled callback that receives variadic arguments from the
 * promised array
 * @param rejected callback that receives the exception if the promise
 * is rejected.
 * @returns a promise for the return value or thrown exception of
 * either callback.
 */
Q.spread = spread;
function spread(value, fulfilled, rejected) {
    return Q(value).spread(fulfilled, rejected);
}

Promise.prototype.spread = function (fulfilled, rejected) {
    return this.all().then(function (array) {
        return fulfilled.apply(void 0, array);
    }, rejected);
};

/**
 * The async function is a decorator for generator functions, turning
 * them into asynchronous generators.  Although generators are only part
 * of the newest ECMAScript 6 drafts, this code does not cause syntax
 * errors in older engines.  This code should continue to work and will
 * in fact improve over time as the language improves.
 *
 * ES6 generators are currently part of V8 version 3.19 with the
 * --harmony-generators runtime flag enabled.  SpiderMonkey has had them
 * for longer, but under an older Python-inspired form.  This function
 * works on both kinds of generators.
 *
 * Decorates a generator function such that:
 *  - it may yield promises
 *  - execution will continue when that promise is fulfilled
 *  - the value of the yield expression will be the fulfilled value
 *  - it returns a promise for the return value (when the generator
 *    stops iterating)
 *  - the decorated function returns a promise for the return value
 *    of the generator or the first rejected promise among those
 *    yielded.
 *  - if an error is thrown in the generator, it propagates through
 *    every following yield until it is caught, or until it escapes
 *    the generator function altogether, and is translated into a
 *    rejection for the promise returned by the decorated generator.
 */
Q.async = async;
function async(makeGenerator) {
    return function () {
        // when verb is "send", arg is a value
        // when verb is "throw", arg is an exception
        function continuer(verb, arg) {
            var result;

            // Until V8 3.19 / Chromium 29 is released, SpiderMonkey is the only
            // engine that has a deployed base of browsers that support generators.
            // However, SM's generators use the Python-inspired semantics of
            // outdated ES6 drafts.  We would like to support ES6, but we'd also
            // like to make it possible to use generators in deployed browsers, so
            // we also support Python-style generators.  At some point we can remove
            // this block.

            if (typeof StopIteration === "undefined") {
                // ES6 Generators
                try {
                    result = generator[verb](arg);
                } catch (exception) {
                    return reject(exception);
                }
                if (result.done) {
                    return Q(result.value);
                } else {
                    return when(result.value, callback, errback);
                }
            } else {
                // SpiderMonkey Generators
                // FIXME: Remove this case when SM does ES6 generators.
                try {
                    result = generator[verb](arg);
                } catch (exception) {
                    if (isStopIteration(exception)) {
                        return Q(exception.value);
                    } else {
                        return reject(exception);
                    }
                }
                return when(result, callback, errback);
            }
        }
        var generator = makeGenerator.apply(this, arguments);
        var callback = continuer.bind(continuer, "next");
        var errback = continuer.bind(continuer, "throw");
        return callback();
    };
}

/**
 * The spawn function is a small wrapper around async that immediately
 * calls the generator and also ends the promise chain, so that any
 * unhandled errors are thrown instead of forwarded to the error
 * handler. This is useful because it's extremely common to run
 * generators at the top-level to work with libraries.
 */
Q.spawn = spawn;
function spawn(makeGenerator) {
    Q.done(Q.async(makeGenerator)());
}

// FIXME: Remove this interface once ES6 generators are in SpiderMonkey.
/**
 * Throws a ReturnValue exception to stop an asynchronous generator.
 *
 * This interface is a stop-gap measure to support generator return
 * values in older Firefox/SpiderMonkey.  In browsers that support ES6
 * generators like Chromium 29, just use "return" in your generator
 * functions.
 *
 * @param value the return value for the surrounding generator
 * @throws ReturnValue exception with the value.
 * @example
 * // ES6 style
 * Q.async(function* () {
 *      var foo = yield getFooPromise();
 *      var bar = yield getBarPromise();
 *      return foo + bar;
 * })
 * // Older SpiderMonkey style
 * Q.async(function () {
 *      var foo = yield getFooPromise();
 *      var bar = yield getBarPromise();
 *      Q.return(foo + bar);
 * })
 */
Q["return"] = _return;
function _return(value) {
    throw new QReturnValue(value);
}

/**
 * The promised function decorator ensures that any promise arguments
 * are settled and passed as values (`this` is also settled and passed
 * as a value).  It will also ensure that the result of a function is
 * always a promise.
 *
 * @example
 * var add = Q.promised(function (a, b) {
 *     return a + b;
 * });
 * add(Q(a), Q(B));
 *
 * @param {function} callback The function to decorate
 * @returns {function} a function that has been decorated.
 */
Q.promised = promised;
function promised(callback) {
    return function () {
        return spread([this, all(arguments)], function (self, args) {
            return callback.apply(self, args);
        });
    };
}

/**
 * sends a message to a value in a future turn
 * @param object* the recipient
 * @param op the name of the message operation, e.g., "when",
 * @param args further arguments to be forwarded to the operation
 * @returns result {Promise} a promise for the result of the operation
 */
Q.dispatch = dispatch;
function dispatch(object, op, args) {
    return Q(object).dispatch(op, args);
}

Promise.prototype.dispatch = function (op, args) {
    var self = this;
    var deferred = defer();
    Q.nextTick(function () {
        self.promiseDispatch(deferred.resolve, op, args);
    });
    return deferred.promise;
};

/**
 * Gets the value of a property in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of property to get
 * @return promise for the property value
 */
Q.get = function (object, key) {
    return Q(object).dispatch("get", [key]);
};

Promise.prototype.get = function (key) {
    return this.dispatch("get", [key]);
};

/**
 * Sets the value of a property in a future turn.
 * @param object    promise or immediate reference for object object
 * @param name      name of property to set
 * @param value     new value of property
 * @return promise for the return value
 */
Q.set = function (object, key, value) {
    return Q(object).dispatch("set", [key, value]);
};

Promise.prototype.set = function (key, value) {
    return this.dispatch("set", [key, value]);
};

/**
 * Deletes a property in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of property to delete
 * @return promise for the return value
 */
Q.del = // XXX legacy
Q["delete"] = function (object, key) {
    return Q(object).dispatch("delete", [key]);
};

Promise.prototype.del = // XXX legacy
Promise.prototype["delete"] = function (key) {
    return this.dispatch("delete", [key]);
};

/**
 * Invokes a method in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of method to invoke
 * @param value     a value to post, typically an array of
 *                  invocation arguments for promises that
 *                  are ultimately backed with `resolve` values,
 *                  as opposed to those backed with URLs
 *                  wherein the posted value can be any
 *                  JSON serializable object.
 * @return promise for the return value
 */
// bound locally because it is used by other methods
Q.mapply = // XXX As proposed by "Redsandro"
Q.post = function (object, name, args) {
    return Q(object).dispatch("post", [name, args]);
};

Promise.prototype.mapply = // XXX As proposed by "Redsandro"
Promise.prototype.post = function (name, args) {
    return this.dispatch("post", [name, args]);
};

/**
 * Invokes a method in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of method to invoke
 * @param ...args   array of invocation arguments
 * @return promise for the return value
 */
Q.send = // XXX Mark Miller's proposed parlance
Q.mcall = // XXX As proposed by "Redsandro"
Q.invoke = function (object, name /*...args*/) {
    return Q(object).dispatch("post", [name, array_slice(arguments, 2)]);
};

Promise.prototype.send = // XXX Mark Miller's proposed parlance
Promise.prototype.mcall = // XXX As proposed by "Redsandro"
Promise.prototype.invoke = function (name /*...args*/) {
    return this.dispatch("post", [name, array_slice(arguments, 1)]);
};

/**
 * Applies the promised function in a future turn.
 * @param object    promise or immediate reference for target function
 * @param args      array of application arguments
 */
Q.fapply = function (object, args) {
    return Q(object).dispatch("apply", [void 0, args]);
};

Promise.prototype.fapply = function (args) {
    return this.dispatch("apply", [void 0, args]);
};

/**
 * Calls the promised function in a future turn.
 * @param object    promise or immediate reference for target function
 * @param ...args   array of application arguments
 */
Q["try"] =
Q.fcall = function (object /* ...args*/) {
    return Q(object).dispatch("apply", [void 0, array_slice(arguments, 1)]);
};

Promise.prototype.fcall = function (/*...args*/) {
    return this.dispatch("apply", [void 0, array_slice(arguments)]);
};

/**
 * Binds the promised function, transforming return values into a fulfilled
 * promise and thrown errors into a rejected one.
 * @param object    promise or immediate reference for target function
 * @param ...args   array of application arguments
 */
Q.fbind = function (object /*...args*/) {
    var promise = Q(object);
    var args = array_slice(arguments, 1);
    return function fbound() {
        return promise.dispatch("apply", [
            this,
            args.concat(array_slice(arguments))
        ]);
    };
};
Promise.prototype.fbind = function (/*...args*/) {
    var promise = this;
    var args = array_slice(arguments);
    return function fbound() {
        return promise.dispatch("apply", [
            this,
            args.concat(array_slice(arguments))
        ]);
    };
};

/**
 * Requests the names of the owned properties of a promised
 * object in a future turn.
 * @param object    promise or immediate reference for target object
 * @return promise for the keys of the eventually settled object
 */
Q.keys = function (object) {
    return Q(object).dispatch("keys", []);
};

Promise.prototype.keys = function () {
    return this.dispatch("keys", []);
};

/**
 * Turns an array of promises into a promise for an array.  If any of
 * the promises gets rejected, the whole array is rejected immediately.
 * @param {Array*} an array (or promise for an array) of values (or
 * promises for values)
 * @returns a promise for an array of the corresponding values
 */
// By Mark Miller
// http://wiki.ecmascript.org/doku.php?id=strawman:concurrency&rev=1308776521#allfulfilled
Q.all = all;
function all(promises) {
    return when(promises, function (promises) {
        var pendingCount = 0;
        var deferred = defer();
        array_reduce(promises, function (undefined, promise, index) {
            var snapshot;
            if (
                isPromise(promise) &&
                (snapshot = promise.inspect()).state === "fulfilled"
            ) {
                promises[index] = snapshot.value;
            } else {
                ++pendingCount;
                when(
                    promise,
                    function (value) {
                        promises[index] = value;
                        if (--pendingCount === 0) {
                            deferred.resolve(promises);
                        }
                    },
                    deferred.reject,
                    function (progress) {
                        deferred.notify({ index: index, value: progress });
                    }
                );
            }
        }, void 0);
        if (pendingCount === 0) {
            deferred.resolve(promises);
        }
        return deferred.promise;
    });
}

Promise.prototype.all = function () {
    return all(this);
};

/**
 * Returns the first resolved promise of an array. Prior rejected promises are
 * ignored.  Rejects only if all promises are rejected.
 * @param {Array*} an array containing values or promises for values
 * @returns a promise fulfilled with the value of the first resolved promise,
 * or a rejected promise if all promises are rejected.
 */
Q.any = any;

function any(promises) {
    if (promises.length === 0) {
        return Q.resolve();
    }

    var deferred = Q.defer();
    var pendingCount = 0;
    array_reduce(promises, function (prev, current, index) {
        var promise = promises[index];

        pendingCount++;

        when(promise, onFulfilled, onRejected, onProgress);
        function onFulfilled(result) {
            deferred.resolve(result);
        }
        function onRejected() {
            pendingCount--;
            if (pendingCount === 0) {
                deferred.reject(new Error(
                    "Can't get fulfillment value from any promise, all " +
                    "promises were rejected."
                ));
            }
        }
        function onProgress(progress) {
            deferred.notify({
                index: index,
                value: progress
            });
        }
    }, undefined);

    return deferred.promise;
}

Promise.prototype.any = function () {
    return any(this);
};

/**
 * Waits for all promises to be settled, either fulfilled or
 * rejected.  This is distinct from `all` since that would stop
 * waiting at the first rejection.  The promise returned by
 * `allResolved` will never be rejected.
 * @param promises a promise for an array (or an array) of promises
 * (or values)
 * @return a promise for an array of promises
 */
Q.allResolved = deprecate(allResolved, "allResolved", "allSettled");
function allResolved(promises) {
    return when(promises, function (promises) {
        promises = array_map(promises, Q);
        return when(all(array_map(promises, function (promise) {
            return when(promise, noop, noop);
        })), function () {
            return promises;
        });
    });
}

Promise.prototype.allResolved = function () {
    return allResolved(this);
};

/**
 * @see Promise#allSettled
 */
Q.allSettled = allSettled;
function allSettled(promises) {
    return Q(promises).allSettled();
}

/**
 * Turns an array of promises into a promise for an array of their states (as
 * returned by `inspect`) when they have all settled.
 * @param {Array[Any*]} values an array (or promise for an array) of values (or
 * promises for values)
 * @returns {Array[State]} an array of states for the respective values.
 */
Promise.prototype.allSettled = function () {
    return this.then(function (promises) {
        return all(array_map(promises, function (promise) {
            promise = Q(promise);
            function regardless() {
                return promise.inspect();
            }
            return promise.then(regardless, regardless);
        }));
    });
};

/**
 * Captures the failure of a promise, giving an oportunity to recover
 * with a callback.  If the given promise is fulfilled, the returned
 * promise is fulfilled.
 * @param {Any*} promise for something
 * @param {Function} callback to fulfill the returned promise if the
 * given promise is rejected
 * @returns a promise for the return value of the callback
 */
Q.fail = // XXX legacy
Q["catch"] = function (object, rejected) {
    return Q(object).then(void 0, rejected);
};

Promise.prototype.fail = // XXX legacy
Promise.prototype["catch"] = function (rejected) {
    return this.then(void 0, rejected);
};

/**
 * Attaches a listener that can respond to progress notifications from a
 * promise's originating deferred. This listener receives the exact arguments
 * passed to ``deferred.notify``.
 * @param {Any*} promise for something
 * @param {Function} callback to receive any progress notifications
 * @returns the given promise, unchanged
 */
Q.progress = progress;
function progress(object, progressed) {
    return Q(object).then(void 0, void 0, progressed);
}

Promise.prototype.progress = function (progressed) {
    return this.then(void 0, void 0, progressed);
};

/**
 * Provides an opportunity to observe the settling of a promise,
 * regardless of whether the promise is fulfilled or rejected.  Forwards
 * the resolution to the returned promise when the callback is done.
 * The callback can return a promise to defer completion.
 * @param {Any*} promise
 * @param {Function} callback to observe the resolution of the given
 * promise, takes no arguments.
 * @returns a promise for the resolution of the given promise when
 * ``fin`` is done.
 */
Q.fin = // XXX legacy
Q["finally"] = function (object, callback) {
    return Q(object)["finally"](callback);
};

Promise.prototype.fin = // XXX legacy
Promise.prototype["finally"] = function (callback) {
    callback = Q(callback);
    return this.then(function (value) {
        return callback.fcall().then(function () {
            return value;
        });
    }, function (reason) {
        // TODO attempt to recycle the rejection with "this".
        return callback.fcall().then(function () {
            throw reason;
        });
    });
};

/**
 * Terminates a chain of promises, forcing rejections to be
 * thrown as exceptions.
 * @param {Any*} promise at the end of a chain of promises
 * @returns nothing
 */
Q.done = function (object, fulfilled, rejected, progress) {
    return Q(object).done(fulfilled, rejected, progress);
};

Promise.prototype.done = function (fulfilled, rejected, progress) {
    var onUnhandledError = function (error) {
        // forward to a future turn so that ``when``
        // does not catch it and turn it into a rejection.
        Q.nextTick(function () {
            makeStackTraceLong(error, promise);
            if (Q.onerror) {
                Q.onerror(error);
            } else {
                throw error;
            }
        });
    };

    // Avoid unnecessary `nextTick`ing via an unnecessary `when`.
    var promise = fulfilled || rejected || progress ?
        this.then(fulfilled, rejected, progress) :
        this;

    if (typeof process === "object" && process && process.domain) {
        onUnhandledError = process.domain.bind(onUnhandledError);
    }

    promise.then(void 0, onUnhandledError);
};

/**
 * Causes a promise to be rejected if it does not get fulfilled before
 * some milliseconds time out.
 * @param {Any*} promise
 * @param {Number} milliseconds timeout
 * @param {Any*} custom error message or Error object (optional)
 * @returns a promise for the resolution of the given promise if it is
 * fulfilled before the timeout, otherwise rejected.
 */
Q.timeout = function (object, ms, error) {
    return Q(object).timeout(ms, error);
};

Promise.prototype.timeout = function (ms, error) {
    var deferred = defer();
    var timeoutId = setTimeout(function () {
        if (!error || "string" === typeof error) {
            error = new Error(error || "Timed out after " + ms + " ms");
            error.code = "ETIMEDOUT";
        }
        deferred.reject(error);
    }, ms);

    this.then(function (value) {
        clearTimeout(timeoutId);
        deferred.resolve(value);
    }, function (exception) {
        clearTimeout(timeoutId);
        deferred.reject(exception);
    }, deferred.notify);

    return deferred.promise;
};

/**
 * Returns a promise for the given value (or promised value), some
 * milliseconds after it resolved. Passes rejections immediately.
 * @param {Any*} promise
 * @param {Number} milliseconds
 * @returns a promise for the resolution of the given promise after milliseconds
 * time has elapsed since the resolution of the given promise.
 * If the given promise rejects, that is passed immediately.
 */
Q.delay = function (object, timeout) {
    if (timeout === void 0) {
        timeout = object;
        object = void 0;
    }
    return Q(object).delay(timeout);
};

Promise.prototype.delay = function (timeout) {
    return this.then(function (value) {
        var deferred = defer();
        setTimeout(function () {
            deferred.resolve(value);
        }, timeout);
        return deferred.promise;
    });
};

/**
 * Passes a continuation to a Node function, which is called with the given
 * arguments provided as an array, and returns a promise.
 *
 *      Q.nfapply(FS.readFile, [__filename])
 *      .then(function (content) {
 *      })
 *
 */
Q.nfapply = function (callback, args) {
    return Q(callback).nfapply(args);
};

Promise.prototype.nfapply = function (args) {
    var deferred = defer();
    var nodeArgs = array_slice(args);
    nodeArgs.push(deferred.makeNodeResolver());
    this.fapply(nodeArgs).fail(deferred.reject);
    return deferred.promise;
};

/**
 * Passes a continuation to a Node function, which is called with the given
 * arguments provided individually, and returns a promise.
 * @example
 * Q.nfcall(FS.readFile, __filename)
 * .then(function (content) {
 * })
 *
 */
Q.nfcall = function (callback /*...args*/) {
    var args = array_slice(arguments, 1);
    return Q(callback).nfapply(args);
};

Promise.prototype.nfcall = function (/*...args*/) {
    var nodeArgs = array_slice(arguments);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.fapply(nodeArgs).fail(deferred.reject);
    return deferred.promise;
};

/**
 * Wraps a NodeJS continuation passing function and returns an equivalent
 * version that returns a promise.
 * @example
 * Q.nfbind(FS.readFile, __filename)("utf-8")
 * .then(console.log)
 * .done()
 */
Q.nfbind =
Q.denodeify = function (callback /*...args*/) {
    var baseArgs = array_slice(arguments, 1);
    return function () {
        var nodeArgs = baseArgs.concat(array_slice(arguments));
        var deferred = defer();
        nodeArgs.push(deferred.makeNodeResolver());
        Q(callback).fapply(nodeArgs).fail(deferred.reject);
        return deferred.promise;
    };
};

Promise.prototype.nfbind =
Promise.prototype.denodeify = function (/*...args*/) {
    var args = array_slice(arguments);
    args.unshift(this);
    return Q.denodeify.apply(void 0, args);
};

Q.nbind = function (callback, thisp /*...args*/) {
    var baseArgs = array_slice(arguments, 2);
    return function () {
        var nodeArgs = baseArgs.concat(array_slice(arguments));
        var deferred = defer();
        nodeArgs.push(deferred.makeNodeResolver());
        function bound() {
            return callback.apply(thisp, arguments);
        }
        Q(bound).fapply(nodeArgs).fail(deferred.reject);
        return deferred.promise;
    };
};

Promise.prototype.nbind = function (/*thisp, ...args*/) {
    var args = array_slice(arguments, 0);
    args.unshift(this);
    return Q.nbind.apply(void 0, args);
};

/**
 * Calls a method of a Node-style object that accepts a Node-style
 * callback with a given array of arguments, plus a provided callback.
 * @param object an object that has the named method
 * @param {String} name name of the method of object
 * @param {Array} args arguments to pass to the method; the callback
 * will be provided by Q and appended to these arguments.
 * @returns a promise for the value or error
 */
Q.nmapply = // XXX As proposed by "Redsandro"
Q.npost = function (object, name, args) {
    return Q(object).npost(name, args);
};

Promise.prototype.nmapply = // XXX As proposed by "Redsandro"
Promise.prototype.npost = function (name, args) {
    var nodeArgs = array_slice(args || []);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
};

/**
 * Calls a method of a Node-style object that accepts a Node-style
 * callback, forwarding the given variadic arguments, plus a provided
 * callback argument.
 * @param object an object that has the named method
 * @param {String} name name of the method of object
 * @param ...args arguments to pass to the method; the callback will
 * be provided by Q and appended to these arguments.
 * @returns a promise for the value or error
 */
Q.nsend = // XXX Based on Mark Miller's proposed "send"
Q.nmcall = // XXX Based on "Redsandro's" proposal
Q.ninvoke = function (object, name /*...args*/) {
    var nodeArgs = array_slice(arguments, 2);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    Q(object).dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
};

Promise.prototype.nsend = // XXX Based on Mark Miller's proposed "send"
Promise.prototype.nmcall = // XXX Based on "Redsandro's" proposal
Promise.prototype.ninvoke = function (name /*...args*/) {
    var nodeArgs = array_slice(arguments, 1);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
};

/**
 * If a function would like to support both Node continuation-passing-style and
 * promise-returning-style, it can end its internal promise chain with
 * `nodeify(nodeback)`, forwarding the optional nodeback argument.  If the user
 * elects to use a nodeback, the result will be sent there.  If they do not
 * pass a nodeback, they will receive the result promise.
 * @param object a result (or a promise for a result)
 * @param {Function} nodeback a Node.js-style callback
 * @returns either the promise or nothing
 */
Q.nodeify = nodeify;
function nodeify(object, nodeback) {
    return Q(object).nodeify(nodeback);
}

Promise.prototype.nodeify = function (nodeback) {
    if (nodeback) {
        this.then(function (value) {
            Q.nextTick(function () {
                nodeback(null, value);
            });
        }, function (error) {
            Q.nextTick(function () {
                nodeback(error);
            });
        });
    } else {
        return this;
    }
};

Q.noConflict = function() {
    throw new Error("Q.noConflict only works when Q is used as a global");
};

// All code before this point will be filtered from stack traces.
var qEndingLine = captureLine();

return Q;

});

}).call(this,require('_process'))
},{"_process":1}],6:[function(require,module,exports){
module.exports = require("./qajax")(require("q"), window.XMLHttpRequest, window.FormData);

},{"./qajax":7,"q":5}],7:[function(require,module,exports){
/*
 * Qajax.js - Simple Promise ajax library based on Q
 */
/*jslint newcap: true */
(function (global, definition) {
  if (typeof exports === "object") {
    module.exports = definition;
  }
  else if (typeof define === 'function' && define.amd){
    define(['q'], function (Q) {
      return definition(Q, global.XMLHttpRequest, global.FormData);
    });
  }
  else {
    global.Qajax = definition(global.Q, global.XMLHttpRequest, global.FormData);
  }
})(this, function (Q, XMLHttpRequest, FormData) {
  "use strict";

  var CONTENT_TYPE = "Content-Type";
  var neverEnding = Q.defer().promise;

  function noop (){}

  // Serialize a map of properties (as a JavaScript object) to a query string
  function serializeQuery(paramsObj) {
    var k, params = [];
    for (k in paramsObj) {
      if (paramsObj.hasOwnProperty(k) && paramsObj[k] !== undefined) {
        params.push(encodeURIComponent(k) + "=" + encodeURIComponent(paramsObj[k]));
      }
    }
    return params.join("&");
  }

  function hasQuery(url) {
    return (url.indexOf("?") === -1);
  }

  function cloneObject (obj) {
    var clone = {};
    if (obj) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          clone[key] = obj[key];
        }
      }
    }
    return clone;
  }

  function QajaxBuilder (urlOrSettings, maybeSettings) {
    if (arguments.length === 0) throw new Error("Qajax: settings are required");

    var settings;
    if (typeof urlOrSettings === "string") {
      settings = typeof maybeSettings === 'object' && maybeSettings || {};
      settings.url = urlOrSettings;
    }
    else if (typeof urlOrSettings === "object") {
      settings = urlOrSettings;
    }
    else {
      throw new Error("Qajax: settings must be an object");
    }

    if (!settings.url) {
      throw new Error("Qajax: settings.url is required");
    }
    if ("cancellation" in settings && !Q.isPromiseAlike(settings.cancellation)) {
      throw new Error("cancellation must be a Promise.");
    }

    // Instance defaults (other defaults are extended by prototype)
    this.headers = cloneObject(this.headers);
    this.params = {};
    for (var key in settings)
      this[key] = settings[key];

    // Handle the settings to prepare some work.
    var params = this.params;
    var cacheParam = this.cache;
    if (cacheParam)
      params[cacheParam === true ? "_" : cacheParam] = (new Date()).getTime();

    // Let's build the url based on the configuration
    var url = this.base + this.url;
    var queryParams = serializeQuery(params);
    if (queryParams)
      url = url + (hasQuery(url) ? "?" : "&") + queryParams;
    this.url = url;

    // if data is a Javascript object, JSON is used
    var data = this.data;
    var headers = this.headers;
    if (
      data !== null &&
      typeof data === "object" &&
      (!FormData || !(data instanceof FormData))) {
      if (!(CONTENT_TYPE in headers))
        headers[CONTENT_TYPE] = "application/json";
      this.data = JSON.stringify(data);
    }

    // Protect send from any exception which will be encapsulated in a failure.
    var _send = this._send;
    var ctx = this;
    this.send = function () {
      return Q.fcall(function () { return _send.call(ctx); });
    };
  }

  QajaxBuilder.prototype = {

    // Qajax defaults are stored in the QajaxBuilder prototype*

    log: noop, // Provide a `log` function. by default there won't be logs.
    timeout: 60000,
    cache: typeof window === "undefined" ? false : !!(window.ActiveXObject || "ActiveXObject" in window), // By default, only enabled on old IE (also the presence of ActiveXObject is a nice correlation with the cache bug)
    method: "GET",
    base: "",
    withCredentials: false,
    cancellation: neverEnding,


    _send: function () {
      var xhr = new XMLHttpRequest(),
        xhrResult = Q.defer(),
        log = this.log,
        method = this.method,
        url = this.url;

      // Bind the XHR finished callback
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          try {
            log(method + " " + url + " => " + xhr.status);
            if (xhr.status) {
              xhrResult.resolve(xhr);
            } else {
              xhrResult.reject(xhr); // this case occured mainly when xhr.abort() has been called.
            }
          } catch (e) {
            xhrResult.reject(xhr); // IE could throw an error
          }
        }
      };

      xhr.onprogress = function (progress) {
        xhrResult.notify(progress);
      };

      xhr.open(method, url, true);

      if (this.responseType)
        xhr.responseType = this.responseType;

      var headers = this.headers;
      for (var h in headers)
        if (headers.hasOwnProperty(h))
          xhr.setRequestHeader(h, headers[h]);

      if (this.withCredentials)
        xhr.withCredentials = true;

      // Send the XHR
      var data = this.data;
      if (data !== undefined && data !== null)
        xhr.send(data);
      else
        xhr.send();

      this.cancellation.fin(function () {
        if (!xhrResult.promise.isFulfilled()) {
          log("Qajax cancellation reached.");
          xhr.abort();
        }
      });

      // If no timeout, just return the promise
      if (!this.timeout) {
        return xhrResult.promise;
      }
      // Else, either the xhr promise or the timeout is reached
      else {
        return xhrResult.promise.timeout(this.timeout).fail(function (errorOrXHR) {
          // If timeout has reached (Error is triggered)
          if (errorOrXHR instanceof Error) {
            log("Qajax request delay reach in " + method + " " + url);
            xhr.abort(); // Abort this XHR so it can reject xhrResult
          }
          // Make the promise fail again.
          throw xhr;
        });
      }
    }
  };


  function Qajax (urlOrSettings, maybeSettings) {
    return new QajaxBuilder(urlOrSettings, maybeSettings).send();
  }

  // Defaults settings of Qajax are bound to the QajaxBuilder.prototype.
  Qajax.defaults = QajaxBuilder.prototype;

  // The builder is exposed in case you want different instance of Qajax (with different defaults)
  Qajax.Builder = QajaxBuilder;


  /// Some helpers are attached to Qajax object.

  Qajax.filterStatus = function (validStatus) {
    var log = this.log;
    var check, typ;
    typ = typeof validStatus;
    if (typ === "function") {
      check = validStatus;
    } else if (typ === "number") {
      check = function (s) {
        return s === validStatus;
      };
    } else {
      throw "validStatus type " + typ + " unsupported";
    }
    return function (xhr) {
      var status = 0;
      try {
        status = xhr.status; // IE can fail to access status
      } catch (e) {
        log("Qajax: failed to read xhr.status");
      }
      if (status === 1223) {
        status = 204; // 204 No Content IE bug
      }
      return check(status) ? Q.resolve(xhr) : Q.reject(xhr);
    };
  };

  Qajax.filterSuccess = Qajax.filterStatus(function (s) {
    return s >= 200 && s < 300 || s === 304;
  });

  Qajax.toJSON = function (xhr) {
    return Q.fcall(function () {
      return JSON.parse(xhr.responseText);
    });
  };

  Qajax.getJSON = function (url) {
    return Qajax({ url: url, method: "GET" })
      .then(Qajax.filterSuccess)
      .then(Qajax.toJSON);
  };

  Qajax.serialize = serializeQuery;

  return Qajax;

});

},{}],8:[function(require,module,exports){
var cookie = require('cookie');
var setter = require('./lib/setter');

module.exports = function setCookie(name, value, options) {
  var cookieStr = cookie.serialize(name, value, options);
  setter(cookieStr, options);
};

},{"./lib/setter":9,"cookie":10}],9:[function(require,module,exports){
/**
 * Cookie setter for browser environment.
 */

module.exports = function setter(cookieStr, _) {
  document.cookie = cookieStr;
};

},{}],10:[function(require,module,exports){
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 * @public
 */

exports.parse = parse;
exports.serialize = serialize;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {}
  var opt = options || {};
  var pairs = str.split(/; */);
  var dec = opt.decode || decode;

  pairs.forEach(function(pair) {
    var eq_idx = pair.indexOf('=')

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      return;
    }

    var key = pair.substr(0, eq_idx).trim()
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  });

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var pairs = [name + '=' + value];

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
    pairs.push('Max-Age=' + maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    pairs.push('Domain=' + opt.domain);
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    pairs.push('Path=' + opt.path);
  }

  if (opt.expires) pairs.push('Expires=' + opt.expires.toUTCString());
  if (opt.httpOnly) pairs.push('HttpOnly');
  if (opt.secure) pairs.push('Secure');

  return pairs.join('; ');
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}

},{}],11:[function(require,module,exports){
(function (global){
!function(){"use strict";function e(e,r){this._userAgent=e,this._serverUrl=r,this._encryptor=new i(r),this._encryptor.withSalt()}var r=require("qajax"),t=require("set-cookie"),i=require("./encryptor.js");e.prototype.logout=function(){var e=r({url:this._buildUrl(this._serverUrl+"/logout"),method:"PUT",withCredentials:!0}).then(r.filterSuccess);return this._removeCookies(),e},e.prototype.login=function(e){return e.redirectUrl=this._getQueryParameter("next")||e.redirectUrl,this._encryptor.encrypt(e.password).then(this._doLogin.bind(this,e.redirectUrl,e.username)).then(function(r){var t=r.silentToken;return t?this._silentLogin({temporaryCst:t,url:r.silentTokenAuthenticationEndpointUrl,redirectUrl:e.redirectUrl}):r}.bind(this))},e.prototype._silentLogin=function(e){return r({url:this._buildUrl(e.url),method:"POST",withCredentials:!0,data:{redirectUrl:e.redirectUrl,silentToken:e.temporaryCst},headers:{"x-device-user-agent":this._userAgent}}).then(r.filterSuccess).then(r.toJSON)},e.prototype._doLogin=function(e,t,i){var n={username:t,password:i,enc:!0,advertisingId:null,redirectUrl:e};return r({url:this._buildUrl(this._serverUrl+"/session"),withCredentials:!0,method:"POST",data:n,headers:{"x-device-user-agent":this._userAgent}}).then(r.filterSuccess).then(r.toJSON)},e.prototype._getQueryParameter=function(e){return global.location.search.substr(1).split("&").reduce(function(e,r){var t=r.split("=");return e[t[0]]=t[1],e},{})[e]||null},e.prototype._buildUrl=function(e){var r=this._getQueryParameter("login-service_cluster");return r?e+"?login-service_cluster="+r:e},e.prototype._removeCookies=function(e){return["CST","X-SECURITY-TOKEN","sessionOpen","dealerOpen","IG-ENVIRONMENT"].forEach(function(e){t(e,"",{expires:new Date(0)})}),e},module.exports=e}();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./encryptor.js":14,"qajax":6,"set-cookie":8}],12:[function(require,module,exports){
!function(){"use strict";function e(e,r){this._userAgent=e,this._serverUrl=t[r]+"/clientsecurity",this._encryptor=new n(this._serverUrl),this._encryptor.withSalt()}var t={TEST:"https://net.ig.com",UAT:"https://web.ig.com",DEMO:"https://demo.ig.com",PROD:"https://www.ig.com"},r=require("qajax"),n=require("./encryptor.js");e.prototype.logout=function(e){return r({url:this._serverUrl+"/logout",method:"POST",headers:{"x-device-user-agent":this._userAgent,CST:e}}).then(r.filterSuccess)},e.prototype.login=function(e){return this._encryptor.encrypt(e.password).then(this._doLogin.bind(this,e.username)).then(function(e){var t=JSON.parse(e.responseText);if("CHANGE_ENVIRONMENT"===t.authenticationStatus){var r=e.getResponseHeader("CST");return this._silentLogin({temporaryCst:r,newEnvironment:t.redirectTo})}return e}.bind(this)).then(function(e){return{trackingId:JSON.parse(e.responseText).trackingId}})},e.prototype._silentLogin=function(e){return r({url:t[e.newEnvironment]+"/clientsecurity/session/silent",method:"POST",headers:{"x-device-user-agent":this._userAgent,CST:e.temporaryCst}}).then(r.filterSuccess)},e.prototype._doLogin=function(e,t){var n={username:e,password:t,enc:!0,advertisingId:null};return r({url:this._serverUrl+"/v2/session",method:"POST",data:n,headers:{"x-device-user-agent":this._userAgent}}).then(r.filterSuccess)},Object.defineProperty(e,"TEST",{get:function(){return"TEST"}}),Object.defineProperty(e,"UAT",{get:function(){return"UAT"}}),Object.defineProperty(e,"DEMO",{get:function(){return"DEMO"}}),Object.defineProperty(e,"PROD",{get:function(){return"PROD"}}),module.exports=e}();

},{"./encryptor.js":14,"qajax":6}],13:[function(require,module,exports){
!function(){"use strict";function e(e){var r=n.decodeBase64(e);return o.ASN1.decode(n.toByteArray(r)).toHexTree()}function r(e,r){var t,c;return c=new o.RSA,c.setPublicKeyFromASN(r),t=c.encrypt(e),n.encodeBase64(n.convertFromHex(t))}var t=require("ig-pidcrypt"),o=t.pidCrypt,n=t.pidCryptUtil;module.exports={convertPublicKeyToHexTree:e,encodeStringWithRSA:r}}();

},{"ig-pidcrypt":4}],14:[function(require,module,exports){
!function(){"use strict";function t(t){this._serverUrl=t,this._withSalt=!1,this._userSalt=null}var e=require("qajax"),r=require("./encryptUtil.js");t.prototype.encrypt=function(t){return this._getPublicKey().then(function(e){var r=this._addSalt(t,e.timeStamp);return this._doEncrypt(r,e.encryptionKey)}.bind(this))},t.prototype.withSalt=function(t){return this._withSalt=!0,this._userSalt=t?t:null,this},t.prototype._doEncrypt=function(t,e){var i=r.convertPublicKeyToHexTree(e);return r.encodeStringWithRSA(t,i)},t.prototype._getPublicKey=function(){return e(this._serverUrl+"/encryptionkey?"+Date.now()).then(e.toJSON)},t.prototype._addSalt=function(t,e){return this._withSalt?t+"|"+(this._userSalt?this._userSalt:e):t},module.exports=t}();

},{"./encryptUtil.js":13,"qajax":6}],15:[function(require,module,exports){
(function (process,global){
!function(){"use strict";var r=require("./encryptor.js"),t=require("./authenticator.js"),e=require("./dailyFxAuthenticator.js"),o=require("./session.js");process.browser&&(global.IG=global.IG||{},global.IG.Authenticator=t,global.IG.DailyFxAuthenticator=e,global.IG.Encryptor=r,global.IG.Session=o),module.exports={Authenticator:t,DailyFxAuthenticator:e,Encryptor:r,Session:o}}();
}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./authenticator.js":11,"./dailyFxAuthenticator.js":12,"./encryptor.js":14,"./session.js":16,"_process":1}],16:[function(require,module,exports){
(function (global){
!function(){"use strict";function t(t){var i=s("sessionOpen"),o=s("CST");i&&o&&n(o,t,function(t){r(t,e)})}function e(){global.location.href="/uk/login"}function n(t,e,n){var r=i(c[s("IG-ENVIRONMENT")],t),u=o(e);r.subscribe(u),u.addListener({onItemUpdate:n})}function i(t,e){var n=new Lightstreamer.LightstreamerClient(t,"InVisionProvider");return n.connectionDetails.setPassword("CST-"+e),n.connectionSharing.enableSharing("mdpHeimdallr","ATTACH","CREATE"),n.connect(),n}function o(t){return new Lightstreamer.Subscription("RAW","V2-M-MESSAGE_EVENT_HANDLER|"+t+"-LGT",["logout"])}function r(t,e){t.forEachChangedField(function(t,n,i){"logout"===t&&"LGT"===i.substring(0,3)&&e()})}require("ig-lightstreamer");var s=require("cookie-getter"),c={TEST:"https://net-mdp.ig.com",UAT:"https://web-mdp.ig.com",DEMO:"https://demo-mdp.ig.com",PROD:"https://mdp.ig.com"};module.exports.registerForLogoutEvent=t}();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"cookie-getter":2,"ig-lightstreamer":3}]},{},[15]);
