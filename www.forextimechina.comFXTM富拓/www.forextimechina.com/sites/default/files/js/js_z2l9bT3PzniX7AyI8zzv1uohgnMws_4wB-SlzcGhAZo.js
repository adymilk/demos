/*!
 * jQuery Browser Plugin v0.0.6
 * https://github.com/gabceb/jquery-browser-plugin
 *
 * Original jquery-browser code Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * http://jquery.org/license
 *
 * Modifications Copyright 2013 Gabriel Cebrian
 * https://github.com/gabceb
 *
 * Released under the MIT license
 *
 * Date: 2013-07-29T17:23:27-07:00
 */

(function( jQuery, window, undefined ) {
  "use strict";

  var matched, browser;

  jQuery.uaMatch = function( ua ) {
    ua = ua.toLowerCase();

  	var match = /(opr)[\/]([\w.]+)/.exec( ua ) ||
  		/(chrome)[ \/]([\w.]+)/.exec( ua ) ||
  		/(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
  		/(webkit)[ \/]([\w.]+)/.exec( ua ) ||
  		/(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
  		/(msie) ([\w.]+)/.exec( ua ) ||
  		ua.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec( ua ) ||
  		ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
  		[];

  	var platform_match = /(ipad)/.exec( ua ) ||
  		/(iphone)/.exec( ua ) ||
  		/(android)/.exec( ua ) ||
  		/(windows phone)/.exec( ua ) ||
  		/(win)/.exec( ua ) ||
  		/(mac)/.exec( ua ) ||
  		/(linux)/.exec( ua ) ||
  		/(cros)/i.exec( ua ) ||
  		[];

  	return {
  		browser: match[ 3 ] || match[ 1 ] || "",
  		version: match[ 2 ] || "0",
  		platform: platform_match[ 0 ] || ""
  	};
  };

  matched = jQuery.uaMatch( window.navigator.userAgent );
  browser = {};

  if ( matched.browser ) {
  	browser[ matched.browser ] = true;
  	browser.version = matched.version;
  	browser.versionNumber = parseInt(matched.version);
  }

  if ( matched.platform ) {
  	browser[ matched.platform ] = true;
  }

  // These are all considered mobile platforms, meaning they run a mobile browser
  if ( browser.android || browser.ipad || browser.iphone || browser[ "windows phone" ] ) {
  	browser.mobile = true;
  }

  // These are all considered desktop platforms, meaning they run a desktop browser
  if ( browser.cros || browser.mac || browser.linux || browser.win ) {
  	browser.desktop = true;
  }

  // Chrome, Opera 15+ and Safari are webkit based browsers
  if ( browser.chrome || browser.opr || browser.safari ) {
  	browser.webkit = true;
  }

  // IE11 has a new token so we will assign it msie to avoid breaking changes
  if ( browser.rv )
  {
  	var ie = "msie";

  	matched.browser = ie;
  	browser[ie] = true;
  }

  // Opera 15+ are identified as opr
  if ( browser.opr )
  {
  	var opera = "opera";

  	matched.browser = opera;
  	browser[opera] = true;
  }

  // Stock Android browsers are marked as Safari on Android.
  if ( browser.safari && browser.android )
  {
  	var android = "android";

  	matched.browser = android;
  	browser[android] = true;
  }

  // Assign the name and platform variable
  browser.name = matched.browser;
  browser.platform = matched.platform;


  jQuery.browser = browser;
})( jQuery, window );;
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));
;
'use strict';
/* global jQuery */
/* global document */
var _utm_separator = '#fx5590#';

// require jquery and jquery-cookie
(function ($) {
    $.fn.utmz = function (options) {

        var opts = $.extend({}, $.fn.utmz.defaults, options);

        /**
         * parse document.location.search to extract GET parameters
         *
         * @param  string qs query string
         * @return array  array of GET parameters
         */
        var _getQueryParams = function (qs) {
            qs = qs.split('+').join(' ');

            qs = qs.replace('&amp;','&');
            qs = qs.replace('?&','?');
            qs = qs.replace('%0A','');
            qs = qs.replace('%0a','');

            qs = qs.toLowerCase();

            var params = {}, tokens,
                re = /[?&]?([^=]+)=([^&]*)/g;

            while (tokens = re.exec(qs)) {
                params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
            }

            return params;
        };

        /**
         * extract uri fragments (protocol, host, port, pathname, search, hash)
         *
         * @param  string url an uri
         * @return object uri fragments
         */
        var _parseUrl = function (url) {
            var parser = document.createElement('a'),
                searchObject = {},
                queries, split, i;
            // Let the browser do the work

            parser.href = url;
            queries = parser.search.replace(/^\?/, '').split('&');

            for (i = 0; i < queries.length; i++) {
                split = queries[i].split('=');
                searchObject[split[0]] = split[1];
            }

            return {
                protocol: parser.protocol,
                host: parser.host,
                hostname: parser.hostname,
                port: parser.port,
                pathname: parser.pathname,
                search: parser.search,
                searchObject: searchObject,
                hash: parser.hash
            };
        };

        /**
         * Create a list of sub-domaines
         * ex if client domain is 'client.inte.paris.ecedi.fr' it will return an arryay like
         * ['.ecedi.fr', '.paris.ecedi.fr', '.inte.paris.ecedi.fr', 'client.inte.paris.ecedi.fr']
         *
         * The id is to produce a list of domainew where we will try to write the cookie. An attempt to
         * replicate  Google Analytics Universal 'auto' cookie domain discovery
         *
         * @param  string domain a fqdn
         * @return array  list of subdomain available to write cookie to
         */
        var _listSubDomains = function (domain) {
            var doms = domain.split('.');
            if (doms.length <= 2) {
                return [domain];
            }

            var output = [];
            var i = doms.length - 1;
            var tmp = '';

            for (i; i >= 0; i--) {
                tmp = '.' + doms[i] + tmp;
                output.push(tmp);
            }
            //remove first item
            output.shift();
            return output;

        };

        /**
         * format the json object as a proper utmz value
         *
         * @param  {object} data the utmz v
         * @return {string} the cookie value, mocking _utmz format
         */
        var _serialize = function (data) {

            var rows = data;

            var _hash = function (d) {
                var a = 1, c = 0, h, o;
                if (d) {
                    a = 0;
                    for (h = d.length - 1; h >= 0; h--) {
                        o = d.charCodeAt(h);
                        a = (a << 6 & 268435455) + o + (o << 14);
                        c = a & 266338304;
                        a = c !== 0 ? a ^ c >> 21 : a;
                    }
                }
                return a;
            };



            for(var i =0; i < rows.length; i++) {

                /**
                 * a simple js hash function to encode domain
                 * @param  string d the string to hash
                 * @return string the hash
                 */

                var timestamp = Date.now().toString(), session = 6, campaign = 1, cData = '';

                if('undefined' != typeof rows[i].date)
                {
                    timestamp = rows[i].date;
                }

                //flatten data object
                cData = 'utmcsr=' + rows[i].utmcsr + '|utmccn=' + rows[i].utmccn + '|utmcmd=' + rows[i].utmcmd
                + '|utmcct=' + rows[i].utmcct + '|utmctr=' + rows[i].utmctr + '|utmgclid=' + rows[i].utmgclid + '|utm_blocka=' + rows[i].utm_blocka
                + '|hmsr=' + rows[i].hmsr + '|hmmd=' + rows[i].hmmd + '|hmpl=' + rows[i].hmpl + '|hmkw=' + rows[i].hmkw + '|hmci=' + rows[i].hmci;

                rows[i] = _hash(document.domain) + '.' + timestamp + '.' + session + '.' + campaign + '.' + cData;

            }

            return rows.join(_utm_separator);

        };

        /**
         * format a utmz cookie string into a json object
         * @param  {string} str _utmz cookie value
         * @return {object}
         */
        var _deserialize = function (str) {
            var rows = str.split(_utm_separator);

            for (var j =0; j < rows.length; j++) {
                if(rows[j].length > 0) {
                    var pairs = rows[j].split('.').slice(4).join('.').split('|');
                    var timestamp = rows[j].split('.').slice(1,2);
                    var ga = {};
                    for (var i = 0; i < pairs.length; i++) {
                        var temp = pairs[i].split('=');
                        ga[temp[0]] = temp[1];
                    }
                    ga.date = timestamp[0].toString();
                    rows[j] = ga;
                }
            }
            return rows;
        };

        var _removeProtocol = function(href) {
            return href.replace(/.*?:\/\//g, "");
        }

        /**
         * write cookie
         *
         * @param  {object} data    the json object to write as a cookie string
         * @param  {array} domains  list of domains to write cookie in
         * @return {void}
         */
        var _write = function (data, domains) {
            //console.log(data);
            var formatedCookie = _serialize(data);
            //console.log(formatedCookie);
            $.cookie.raw = true;

            if (opts.domainName === 'auto') {
                $(domains).each(function (index, value) {
                    return $.cookie(opts.cookieName, formatedCookie, {
                        expires: opts.expires,
                        domain: value,
                        path: opts.cookiePath
                    });
                });
            } else {
                return $.cookie(opts.cookieName, formatedCookie, {
                    expires: opts.expires,
                    domain: opts.domainName,
                    path: opts.cookiePath
                });
            }
        };

        //utmz code {source, name, medium}
        //var oldCookie = {utmcsr : '(direct)', utmccn: false, utmcmd: false};
        var oldCookie =
            [{
                utmcsr: '(direct)',
                utmccn: '(direct)',
                utmcmd: '(none)',
                utmcct: '(none)',
                utmctr: '(none)',
                utmgclid: '(none)',
                utm_blocka: '(none)',
                hmsr:'',
                hmmd:'',
                hmpl:'',
                hmkw:'',
                hmci:''
            }];

        var _exists = false;
        if ($.cookie(opts.cookieName)) {
            oldCookie = _deserialize($.cookie(opts.cookieName));
            //console.log(oldCookie);
            _exists = true;
        }
        var get = _getQueryParams(document.location.search);

        var _utmz = {
            utmcsr: '(direct)',
            utmccn: '(direct)',
            utmcmd: '(none)',
            utmcct: '(none)',
            utmctr: '(none)',
            utmgclid: '(none)',
            utm_blocka: '(none)',
            hmsr:'',
            hmmd:'',
            hmpl:'',
            hmkw:'',
            hmci:''
        };

        var myDomain = _parseUrl(document.domain).hostname;

        // # source simple sticky               
        if (get.hasOwnProperty('utm_source')) {
            _utmz.utmcsr = get.utm_source;
        } else {
            if(document.referrer != '') {
                var referrerHostName = _removeProtocol(document.referrer);

                var GOOGLE = /www.google/;
                var YAHOO = /search.yahoo/;
                var BING = /www.bing/;
                if(GOOGLE.test(referrerHostName)){
                    _utmz.utmcsr = '(google)';
                } else if(YAHOO.test(referrerHostName)){
                    _utmz.utmcsr = '(yahoo)';
                } else if(BING.test(referrerHostName)){
                    _utmz.utmcsr = '(bing)';
                } else {
                    var referrerDomain = referrerHostName;
                    if(referrerDomain.length > 20) {
                        referrerDomain = referrerDomain.substring(0,20);
                    }
                    _utmz.utmcsr = referrerDomain;
                }
            }
        }

        // #campaign
        if (get.hasOwnProperty('utm_campaign')) {
            _utmz.utmccn = get.utm_campaign;
        } else {
            if(document.referrer != '') {
                _utmz.utmccn = '(referral)';
            }
        }

        if (get.hasOwnProperty('utm_medium')) {
            _utmz.utmcmd = get.utm_medium;
        } else {
            if(document.referrer != '') {
                _utmz.utmcmd = '(referral)';
            }
        }

        // #utm_content
        if (get.hasOwnProperty('utm_content')) {
            _utmz.utmcct = get.utm_content;
        }

        // #utm_term
        if (get.hasOwnProperty('utm_term')) {
            _utmz.utmctr = get.utm_term;
        }

        // #utm_gclid
        if (get.hasOwnProperty('utm_gclid')) {
            _utmz.utmgclid = get.utm_gclid;
        }

        // #utm_blocka
        if (get.hasOwnProperty('utm_blocka')) {
            _utmz.utm_blocka = get.utm_blocka;
        }

        // #hmsr
        if (get.hasOwnProperty('hmsr')) {
            _utmz.hmsr = get.hmsr;
        }

        // #hmmd
        if (get.hasOwnProperty('hmmd')) {
            _utmz.hmmd = get.hmmd;
        }

        // #hmpl
        if (get.hasOwnProperty('hmpl')) {
            _utmz.hmpl = get.hmpl;
        }

        // #hmkw
        if (get.hasOwnProperty('hmkw')) {
            _utmz.hmkw = get.hmkw;
        }

        // #hmci
        if (get.hasOwnProperty('hmci')) {
            _utmz.hmci = get.hmci;
        }

        //var writeDomains = _listSubDomains(myDomain);
        var writeDomains = new Array;
        writeDomains.push('.'+myDomain);

        var _data = new Array;
        if(_exists) {
             _data = oldCookie;
            var _ex = false;

            for(var k=0; k < _data.length; k++) {
                var _tmp_date = _data[k].date;
                delete(_data[k].date);
                if(JSON.stringify(_utmz) == JSON.stringify(_data[k])) {
                    _ex = true;
                }
                _data[k].date = _tmp_date;
            }
            if(!_ex) {
                _utmz.date = Date.now().toString();
                _data.push(_utmz);
            }
        } else {
            _utmz.date = Date.now().toString();
            _data.push(_utmz);
        }

        _write(_data, writeDomains);

        return this;
    };

    // Plugin defaults – added as a property on our plugin function.
    $.fn.utmz.defaults = {
        domainName: 'auto',
        cookiePath: '/',
        expires: 182,
        cookieName: '__utmze'
    };
}(jQuery));;
'use strict';
/* global jQuery */
/* global document */
// require jquery and jquery-cookie
(function ($) {
    $.fn.utmzCustom = function (options) {

        var opts = $.extend({}, $.fn.utmzCustom.defaults, options);

        var cookieRewrite = false;

        /**
         * parse document.location.search to extract GET parameters
         *
         * @param  string qs query string
         * @return array  array of GET parameters
         */
        var _getQueryParams = function (qs) {
            qs = qs.split('+').join(' ');

            qs = qs.replace('&amp;','&');
            qs = qs.replace('?&','?');
            qs = qs.replace('%0A','');
            qs = qs.replace('%0a','');

            //qs = qs.toLowerCase();

            var params = {}, tokens,
                re = /[?&]?([^=]+)=([^&]*)/g;

            while (tokens = re.exec(qs)) {
                params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
            }

            return params;
        };

        /**
         * extract uri fragments (protocol, host, port, pathname, search, hash)
         *
         * @param  string url an uri
         * @return object uri fragments
         */
        var _parseUrl = function (url) {
            var parser = document.createElement('a'),
                searchObject = {},
                queries, split, i;
            // Let the browser do the work

            parser.href = url;
            queries = parser.search.replace(/^\?/, '').split('&');

            for (i = 0; i < queries.length; i++) {
                split = queries[i].split('=');
                searchObject[split[0]] = split[1];
            }

            return {
                protocol: parser.protocol,
                host: parser.host,
                hostname: parser.hostname,
                port: parser.port,
                pathname: parser.pathname,
                search: parser.search,
                searchObject: searchObject,
                hash: parser.hash
            };
        };


        var _hash = function (d) {
            var a = 1, c = 0, h, o;
            if (d) {
                a = 0;
                for (h = d.length - 1; h >= 0; h--) {
                    o = d.charCodeAt(h);
                    a = (a << 6 & 268435455) + o + (o << 14);
                    c = a & 266338304;
                    a = c !== 0 ? a ^ c >> 21 : a;
                }
            }
            return a;
        };

        /**
         * format the json object as a proper utmz value
         *
         * @param  {object} data the utmz v
         * @return {string} the cookie value, mocking _utmz format
         */
        var _serialize = function (data) {
            //log('serialize data', data);
            var timestamp = Date.now().toString();
            if ('undefined' != typeof data.date) {
                timestamp = data.date;
            }

            /**
             * a simple js hash function to encode domain
             * @param  string d the string to hash
             * @return string the hash
             */
            var cData = _hash(document.domain) + '.' + timestamp + '.utmcsr=' + data.utmcsr +
                (data.utmgclid ? ('|utmgclid=' + data.utmgclid) : '') +
                (data.utmccn ? ('|utmccn=' + data.utmccn.toLowerCase()) : '') +
                (data.utmcmd ? ('|utmcmd=' + data.utmcmd.toLowerCase()) : '') +
                (data.utmctr ? ('|utmctr=' + data.utmctr.toLowerCase()) : '') +
                (data.utmcct ? ('|utmcct=' + data.utmcct.toLowerCase()) : '');

            return cData;

        };

        /**
         * format a utmz cookie string into a json object
         * @param  {string} str _utmz cookie value
         * @return {object}
         */
        var _deserialize = function (str) {

            log('_deserialize str', str);

            if (str.length > 0) {
                var pairs = str.split('|');
                for (var i = 0; i < pairs.length; i++) {
                    var temp = pairs[i] && pairs[i].split('=');
                    ga[temp[0]] = temp[1] || '';
                }
                str = ga;
            }

            log('_deserialize str return', str);

            return str;

        };

        var _removeProtocol = function (href) {
            return href.replace(/.*?:\/\//g, "");
        };

        /**
         * write cookie
         *
         * @param  {object} data    the json object to write as a cookie string
         * @param  {string} domain  list of domains to write cookie in
         * @return {void}
         */
        var _write = function (data, domain) {
            log('utmz _write', data, domain);
            var formatedCookie = _serialize(data);

            $.cookie.raw = true;

            return $.cookie(
                opts.cookieName,
                formatedCookie,
                {
                    expires: opts.expires,
                    domain: domain,
                    path: opts.cookiePath
                }
            );
        };

        var _rewrite = function (domain) {
            log('utmz _rewrite', domain);
            $.cookie.raw = true;
            return $.cookie(
                opts.cookieName,
                $.cookie(opts.cookieName),
                {
                    expires: opts.expires,
                    domain: domain,
                    path: opts.cookiePath
                }
            );
        }

        var _writeOriginal = function (data, domain) {
            log('utmz _writeOriginal', data);
            $.cookie.raw = true;
            return $.cookie(
                opts.cookieName,
                data,
                {
                    expires: opts.expires,
                    domain: domain,
                    path: opts.cookiePath
                }
            );
        }

        var oldCookie =
            [{
                utmcsr: '',
                utmccn: '',
                utmcmd: '',
                utmcct: '',
                utmctr: '',
                utmgclid: ''
            }];

        var _exists = false;

        var myDomain = _parseUrl(document.domain).hostname.replace('.www', '').replace('www', '');




        /*
        *
        * START LOGIC
        *
        * */

        if ($.cookie(opts.cookieName)) {
            oldCookie = _deserialize($.cookie(opts.cookieName));
            log('oldCookie', oldCookie);
            _exists = true;
        }

        if ($.cookie('__utmz') && !_exists) {

            log('__utmz Origin', $.cookie('__utmz'));

            _writeOriginal($.cookie('__utmz'), myDomain);

            // Go away
            return;
        }



        var get = _getQueryParams(document.location.search);

        var _utmz = {
            utmcsr: '',
            utmccn: '',
            utmcmd: '',
            utmcct: '',
            utmctr: '',
            utmgclid: ''
        };

        var searchSystem = {
            system: false,
            known: true,
            query: ""
        };

        function knownSearchSystem(referrerHostName) {
            var Ld = "daum:q eniro:search_word naver:query pchome:q images.google:q google:q yahoo:p yahoo:q msn:q bing:q aol:query aol:q lycos:q lycos:query ask:q cnn:query virgilio:qs baidu:wd baidu:word alice:qs yandex:text najdi:q seznam:q rakuten:qt biglobe:q goo.ne:MT search.smt.docomo:MT onet:qt onet:q kvasir:q terra:query rambler:query conduit:q babylon:q search-results:q avg:q comcast:q incredimail:q startsiden:q go.mail.ru:q centrum.cz:q 360.cn:q sogou:query tut.by:query globo:q ukr:q so.com:q haosou.com:q auone:q".split(" ")
            var $urlData = $.utils.parseUrl(referrerHostName);
            if ($urlData[0]) {

                for (var i = 0; i < Ld.length; i++) {
                    var systemParameters = Ld[i].split(":");

                    if (-1 < $urlData[0].indexOf(systemParameters[0])) {
                        searchSystem.system = systemParameters[0];
                        searchSystem.query = $urlData[0][systemParameters[1]] ? $urlData[0][systemParameters[1]] : "";

                        if (!searchSystem.query && -1 < $urlData[0].indexOf('google.')) {
                            searchSystem.query = "(not provided)";
                        }
                        return;
                    }
                }

                searchSystem.known = false;
            }

            /* var GOOGLE = /www.google/;
             var YAHOO = /search.yahoo/;
             var BING = /www.bing/;
             var BAIDU = /www.baidu/;


             if (GOOGLE.test(referrerHostName)) {
             searchSystem.system = 'google';
             } else if (YAHOO.test(referrerHostName)) {
             searchSystem.system = 'yahoo';
             } else if (BING.test(referrerHostName)) {
             searchSystem.system = 'bing';
             } else if (BAIDU.test(referrerHostName)) {
             searchSystem.system = 'baidu';
             } else {
             if (referrerHostName.length > 20) {
             referrerHostName = referrerHostName.substring(0, 20);
             }
             searchSystem.system = referrerHostName;
             searchSystem.known = false;
             }*/
        }

        log('get()', get);


        if (get.hasOwnProperty('gclid')) {
            /**
             * Are any these parameters set?
             * adwords / doubleClick
             */
            _utmz.utmgclid = get.gclid;
            _utmz.utmcsr = 'google';
            _utmz.utmcmd = 'cpc';
            _utmz.utmccn = get.utm_campaign || '(not set)';
            _utmz.utmcct = get.utm_content || '(not set)';
            _utmz.utmctr = get.utm_term || '(not set)';
            //} else if (get.hasOwnProperty('utm_campaign')) {
            //
            //    // # source simple sticky
            //    _utmz.utmcsr = get.utm_source;
            //    _utmz.utmcmd = get.utm_medium || '(not set)';
            //    _utmz.utmccn = get.utm_campaign || '(not set)';
            //    _utmz.utmcct = get.utm_content || '(not set)';
            //    _utmz.utmctr = get.utm_term || '(not set)';
            //    if (get.utm_gclid)
            //        _utmz.utmgclid = get.gclid;
        } else if (get.hasOwnProperty('utm_source')) {
            /**
             * Is parameter set?
             * campaignSource
             */
            _utmz.utmcsr = get.utm_source;
            _utmz.utmcmd = get.utm_medium || '(not set)';
            _utmz.utmccn = get.utm_campaign || '(not set)';
            _utmz.utmcct = get.utm_content || '(not set)';
            _utmz.utmctr = get.utm_term || '(not set)';
            //if (get.gclid)
            //    _utmz.utmgclid = get.gclid;
        } else if (false) {
            /**
             * @ToDo: documentLocation
             * Is parameter set?
             * documentLocation
             */
            _utmz.utmcsr = get.utm_source;
            _utmz.utmcmd = get.utm_medium || '(not set)';
            _utmz.utmccn = get.utm_campaign || '(not set)';
            _utmz.utmcct = get.utm_content || '(not set)';
            _utmz.utmctr = get.utm_term || '(not set)';
        } else {
            /**
             * Traffic Sources
             */
            if ($.cookie('fxtmreferer') || document.referrer) {
                /**
                 * Is parameter set?
                 * documentReferrer
                 */
                // First check cookies, that created in geojs.php before redirecting to global/eu
                var referrerHostName = /*($.cookie('fxtmreferer') || */ _removeProtocol(document.referrer).replace('www.', '');
                //log('referrerHostName', referrerHostName);
                knownSearchSystem(referrerHostName);
                //log('knownSearchSystem', searchSystem);
                if (searchSystem.known) {
                    /**
                     * maps to known Search Engine?
                     */
                    // Have this logic in file, but google don't use it
                    // if (!get.hasOwnProperty('utm_term')) {
                    _utmz.utmcsr = searchSystem.system && searchSystem.system.replace('www.','');
                    _utmz.utmcmd = 'organic';
                    _utmz.utmccn = '(organic)';
                    _utmz.utmctr = searchSystem.query || '';
                    //}
                } else {

                    var ignored_refferers = [
                        'forextime.com',
                        'forextime.co.uk',
                        'forextime.com.cn',
                        'forextimechina.com',
                        'forextimekr.com'
                    ];
                    var isIgnored = false;

                    _.each(ignored_refferers, function (v, k) {
                        if (referrerHostName.indexOf(v) > -1) {
                            isIgnored = true;
                        }
                    });

                    if (!isIgnored) {
                        var refHost = _parseUrl(document.referrer);

                        _utmz.utmcsr = refHost.hostname.replace('www.','');
                        _utmz.utmcmd = 'referral';
                        _utmz.utmccn = '(referral)';
                        _utmz.utmcct = refHost.pathname;
                        _utmz.utmctr = '(not set)';
                    }
                }
            }

            if (_utmz.utmcsr === '') {
                /**
                 * default
                 */
                if (_exists) {
                    /**
                     * Existing campaign data for client or user ID and property ID
                     */
                    if (true) {
                        /**
                         *  withing timeout period
                         */
                        cookieRewrite = true;
                    }
                } else {
                    _utmz.utmcsr = '(direct)';
                    _utmz.utmcmd = '(none)';
                    _utmz.utmccn = '(direct)';
                }
            }
        }

        if (cookieRewrite) {
            _rewrite(myDomain)
        } else {
            _write(_utmz, myDomain);
        }

        return this;
    };

    // Plugin defaults – added as a property on our plugin function.
    $.fn.utmzCustom.defaults = {
        domainName: 'auto',
        cookiePath: '/',
        expires: 183,
        cookieName: '__utmz_new2'
    };
}(jQuery));;
