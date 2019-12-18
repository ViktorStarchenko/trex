/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		3:0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/
/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({"0":"main"}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/wp-content/themes/raptor/js/resources/cocoon/";
/******/ })
/************************************************************************/
/******/ ([]);
//# sourceMappingURL=common.js.map
webpackJsonp([0,3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// make sure we won't load jQuery in multiple files
	// import 'jquery'
	// import main loader
	// load app
	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _systemApp = __webpack_require__(2);

	var _systemApp2 = _interopRequireDefault(_systemApp);

	// init
	var app = new _systemApp2['default']();
	window.App = app;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var ViewportUnitsBuggyfill = __webpack_require__(3);
	// var FastClick = __webpack_require__(4);
	var Loader = __webpack_require__(5);

	var App = (function () {
	  function App(options) {
	    _classCallCheck(this, App);

	    this.options = jQuery.extend({}, options);
	    this.initialise();
	  }

	  _createClass(App, [{
	    key: 'initialise',
	    value: function initialise() {
	      //this.jQuerybody = jQuery("body");
	      ViewportUnitsBuggyfill.init();
	      //FastClick.attach(document.body);
	      this.initialiseJqueryFunctions();
	      this.onWindowResized();
	      this.initialiseListeners();
	    }
	  }, {
	    key: 'initialiseListeners',
	    value: function initialiseListeners() {
	      var _this = this;

	      jQuery(window).resize(this.onWindowResized);
	      jQuery('body').on('click', 'a[href="#retailers"]', function (e) {
	        return _this.onClickRetailers(e);
	      });
	      this.genericUpdate();
	    }
	  }, {
	    key: 'initialiseJqueryFunctions',
	    value: function initialiseJqueryFunctions() {
	      //Case insensitive Jquery Contains method
	      jQuery.expr[":"].containsNoCase = function (el, i, m) {
	        var search = m[3];
	        if (!search) {
	          return false;
	        }
	        return eval("/" + search + "/i").test(jQuery(el).text());
	      };
	    }
	  }, {
	    key: 'onClickRetailers',
	    value: function onClickRetailers(e) {
	      e.preventDefault;
	      jQuery("html, body").animate({
	        scrollTop: jQuery("#retailers").offset().top
	      }, 1000);
	    }
	  }, {
	    key: 'onWindowResized',
	    value: function onWindowResized() {
	      this.jQuerybody = jQuery("body");
	      var desktopBreakpointSize = jQuery("#bp-desktop").width();
	      this.jQuerybody.removeClass("desktop").removeClass("mobile");

	      if (null == desktopBreakpointSize) {
              desktopBreakpointSize = 1023;
		  }

	      if (jQuery(window).outerWidth() >= desktopBreakpointSize) {
	        this.jQuerybody.addClass("desktop");
	      } else {
	        this.jQuerybody.addClass("mobile");
	      }
	    }
	  }, {
	    key: 'genericUpdate',
	    value: function genericUpdate() {
	      jQuery("body").on("update", function (event, data) {
	        var el = data.element;

	        Loader.reloadComponents(el);
	      });
	    }
	  }]);

	  return App;
	})();

	exports['default'] = App;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * viewport-units-buggyfill v0.6.0
	 * @web: https://github.com/rodneyrehm/viewport-units-buggyfill/
	 * @author: Rodney Rehm - http://rodneyrehm.de/en/
	 */

	(function (root, factory) {
	  'use strict';
	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like enviroments that support module.exports,
	    // like Node.
	    module.exports = factory();
	  } else {
	    // Browser globals (root is window)
	    root.viewportUnitsBuggyfill = factory();
	  }
	}(this, function () {
	  'use strict';
	  /*global document, window, navigator, location, XMLHttpRequest, XDomainRequest, CustomEvent*/

	  var initialized = false;
	  var options;
	  var userAgent = window.navigator.userAgent;
	  var viewportUnitExpression = /([+-]?[0-9.]+)(vh|vw|vmin|vmax)/g;
	  var forEach = [].forEach;
	  var dimensions;
	  var declarations;
	  var styleNode;
	  var isBuggyIE = /MSIE [0-9]\./i.test(userAgent);
	  var isOldIE = /MSIE [0-8]\./i.test(userAgent);
	  var isOperaMini = userAgent.indexOf('Opera Mini') > -1;

	  var isMobileSafari = /(iPhone|iPod|iPad).+AppleWebKit/i.test(userAgent) && (function() {
	    // Regexp for iOS-version tested against the following userAgent strings:
	    // Example WebView UserAgents:
	    // * iOS Chrome on iOS8: "Mozilla/5.0 (iPad; CPU OS 8_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) CriOS/39.0.2171.50 Mobile/12B410 Safari/600.1.4"
	    // * iOS Facebook on iOS7: "Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_1 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Mobile/11D201 [FBAN/FBIOS;FBAV/12.1.0.24.20; FBBV/3214247; FBDV/iPhone6,1;FBMD/iPhone; FBSN/iPhone OS;FBSV/7.1.1; FBSS/2; FBCR/AT&T;FBID/phone;FBLC/en_US;FBOP/5]"
	    // Example Safari UserAgents:
	    // * Safari iOS8: "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4"
	    // * Safari iOS7: "Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A4449d Safari/9537.53"
	    var iOSversion = userAgent.match(/OS (\d)/);
	    // viewport units work fine in mobile Safari and webView on iOS 8+
	    return iOSversion && iOSversion.length>1 && parseInt(iOSversion[1]) < 10;
	  })();

	  var isBadStockAndroid = (function() {
	    // Android stock browser test derived from
	    // http://stackoverflow.com/questions/24926221/distinguish-android-chrome-from-stock-browser-stock-browsers-user-agent-contai
	    var isAndroid = userAgent.indexOf(' Android ') > -1;
	    if (!isAndroid) {
	      return false;
	    }

	    var isStockAndroid = userAgent.indexOf('Version/') > -1;
	    if (!isStockAndroid) {
	      return false;
	    }

	    var versionNumber = parseFloat((userAgent.match('Android ([0-9.]+)') || [])[1]);
	    // anything below 4.4 uses WebKit without *any* viewport support,
	    // 4.4 has issues with viewport units within calc()
	    return versionNumber <= 4.4;
	  })();

	  // added check for IE10, IE11 and Edge < 20, since it *still* doesn't understand vmax
	  // http://caniuse.com/#feat=viewport-units
	  if (!isBuggyIE) {
	    isBuggyIE = !!navigator.userAgent.match(/Trident.*rv[ :]*1[01]\.| Edge\/1\d\./);
	  }

	  // Polyfill for creating CustomEvents on IE9/10/11
	  // from https://github.com/krambuhl/custom-event-polyfill
	  try {
	    new CustomEvent('test');
	  } catch(e) {
	    var CustomEvent = function(event, params) {
	      var evt;
	      params = params || {
	        bubbles: false,
	        cancelable: false,
	        detail: undefined
	      };

	      evt = document.createEvent('CustomEvent');
	      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
	      return evt;
	    };
	    CustomEvent.prototype = window.Event.prototype;
	    window.CustomEvent = CustomEvent; // expose definition to window
	  }

	  function debounce(func, wait) {
	    var timeout;
	    return function() {
	      var context = this;
	      var args = arguments;
	      var callback = function() {
	        func.apply(context, args);
	      };

	      clearTimeout(timeout);
	      timeout = setTimeout(callback, wait);
	    };
	  }

	  // from http://stackoverflow.com/questions/326069/how-to-identify-if-a-webpage-is-being-loaded-inside-an-iframe-or-directly-into-t
	  function inIframe() {
	    try {
	      return window.self !== window.top;
	    } catch (e) {
	      return true;
	    }
	  }

	  function initialize(initOptions) {
	    if (initialized) {
	      return;
	    }

	    if (initOptions === true) {
	      initOptions = {
	        force: true
	      };
	    }

	    options = initOptions || {};
	    options.isMobileSafari = isMobileSafari;
	    options.isBadStockAndroid = isBadStockAndroid;

	    if (options.ignoreVmax && !options.force && !isOldIE) {
	      // modern IE (10 and up) do not support vmin/vmax,
	      // but chances are this unit is not even used, so
	      // allow overwriting the "hacktivation"
	      // https://github.com/rodneyrehm/viewport-units-buggyfill/issues/56
	      isBuggyIE = false;
	    }

	    if (isOldIE || (!options.force && !isMobileSafari && !isBuggyIE && !isBadStockAndroid && !isOperaMini && (!options.hacks || !options.hacks.required(options)))) {
	      // this buggyfill only applies to mobile safari, IE9-10 and the Stock Android Browser.
	      if (window.console && isOldIE) {
	        console.info('viewport-units-buggyfill requires a proper CSSOM and basic viewport unit support, which are not available in IE8 and below');
	      }

	      return {
	        init: function () {}
	      };
	    }

	    // fire a custom event that buggyfill was initialize
	    window.dispatchEvent(new CustomEvent('viewport-units-buggyfill-init'));

	    options.hacks && options.hacks.initialize(options);

	    initialized = true;
	    styleNode = document.createElement('style');
	    styleNode.id = 'patched-viewport';
	    document.head.appendChild(styleNode);

	    // Issue #6: Cross Origin Stylesheets are not accessible through CSSOM,
	    // therefore download and inject them as <style> to circumvent SOP.
	    importCrossOriginLinks(function() {
	      var _refresh = debounce(refresh, options.refreshDebounceWait || 100);
	      // doing a full refresh rather than updateStyles because an orientationchange
	      // could activate different stylesheets
	      window.addEventListener('orientationchange', _refresh, true);
	      // orientationchange might have happened while in a different window
	      window.addEventListener('pageshow', _refresh, true);

	      if (options.force || isBuggyIE || inIframe()) {
	        window.addEventListener('resize', _refresh, true);
	        options._listeningToResize = true;
	      }

	      options.hacks && options.hacks.initializeEvents(options, refresh, _refresh);

	      refresh();
	    });
	  }

	  function updateStyles() {
	    styleNode.textContent = getReplacedViewportUnits();
	    // move to the end in case inline <style>s were added dynamically
	    styleNode.parentNode.appendChild(styleNode);
	    // fire a custom event that styles were updated
	    window.dispatchEvent(new CustomEvent('viewport-units-buggyfill-style'));
	  }

	  function refresh() {
	    if (!initialized) {
	      return;
	    }

	    findProperties();

	    // iOS Safari will report window.innerWidth and .innerHeight as 0 unless a timeout is used here.
	    // TODO: figure out WHY innerWidth === 0
	    setTimeout(function() {
	      updateStyles();
	    }, 1);
	  }

	  // http://stackoverflow.com/a/23613052
	  function processStylesheet(ss) {
	    // cssRules respects same-origin policy, as per
	    // https://code.google.com/p/chromium/issues/detail?id=49001#c10.
	    try {
	      if (!ss.cssRules) { return; }
	    } catch(e) {
	      if (e.name !== 'SecurityError') { throw e; }
	      return;
	    }
	    // ss.cssRules is available, so proceed with desired operations.
	    var rules = [];
	    for (var i = 0; i < ss.cssRules.length; i++) {
	      var rule = ss.cssRules[i];
	      rules.push(rule);
	    }
	    return rules;
	  }

	  function findProperties() {
	    declarations = [];
	    forEach.call(document.styleSheets, function(sheet) {
	      var cssRules = processStylesheet(sheet);

	      if (!cssRules || sheet.ownerNode.id === 'patched-viewport' || sheet.ownerNode.getAttribute('data-viewport-units-buggyfill') === 'ignore') {
	        // skip entire sheet because no rules are present, it's supposed to be ignored or it's the target-element of the buggyfill
	        return;
	      }

	      if (sheet.media && sheet.media.mediaText && window.matchMedia && !window.matchMedia(sheet.media.mediaText).matches) {
	        // skip entire sheet because media attribute doesn't match
	        return;
	      }

	      forEach.call(cssRules, findDeclarations);
	    });

	    return declarations;
	  }

	  function findDeclarations(rule) {
	    if (rule.type === 7) {
	      var value;

	      // there may be a case where accessing cssText throws an error.
	      // I could not reproduce this issue, but the worst that can happen
	      // this way is an animation not running properly.
	      // not awesome, but probably better than a script error
	      // see https://github.com/rodneyrehm/viewport-units-buggyfill/issues/21
	      try {
	        value = rule.cssText;
	      } catch(e) {
	        return;
	      }

	      viewportUnitExpression.lastIndex = 0;
	      if (viewportUnitExpression.test(value)) {
	        // KeyframesRule does not have a CSS-PropertyName
	        declarations.push([rule, null, value]);
	        options.hacks && options.hacks.findDeclarations(declarations, rule, null, value);
	      }

	      return;
	    }

	    if (!rule.style) {
	      if (!rule.cssRules) {
	        return;
	      }

	      forEach.call(rule.cssRules, function(_rule) {
	        findDeclarations(_rule);
	      });

	      return;
	    }

	    forEach.call(rule.style, function(name) {
	      var value = rule.style.getPropertyValue(name);
	      // preserve those !important rules
	      if (rule.style.getPropertyPriority(name)) {
	        value += ' !important';
	      }

	      viewportUnitExpression.lastIndex = 0;
	      if (viewportUnitExpression.test(value)) {
	        declarations.push([rule, name, value]);
	        options.hacks && options.hacks.findDeclarations(declarations, rule, name, value);
	      }
	    });
	  }

	  function getReplacedViewportUnits() {
	    dimensions = getViewport();

	    var css = [];
	    var buffer = [];
	    var open;
	    var close;

	    declarations.forEach(function(item) {
	      var _item = overwriteDeclaration.apply(null, item);
	      var _open = _item.selector.length ? (_item.selector.join(' {\n') + ' {\n') : '';
	      var _close = new Array(_item.selector.length + 1).join('\n}');

	      if (!_open || _open !== open) {
	        if (buffer.length) {
	          css.push(open + buffer.join('\n') + close);
	          buffer.length = 0;
	        }

	        if (_open) {
	          open = _open;
	          close = _close;
	          buffer.push(_item.content);
	        } else {
	          css.push(_item.content);
	          open = null;
	          close = null;
	        }

	        return;
	      }

	      if (_open && !open) {
	        open = _open;
	        close = _close;
	      }

	      buffer.push(_item.content);
	    });

	    if (buffer.length) {
	      css.push(open + buffer.join('\n') + close);
	    }

	    // Opera Mini messes up on the content hack (it replaces the DOM node's innerHTML with the value).
	    // This fixes it. We test for Opera Mini only since it is the most expensive CSS selector
	    // see https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors
	    if (isOperaMini) {
	      css.push('* { content: normal !important; }');
	    }

	    return css.join('\n\n');
	  }

	  function overwriteDeclaration(rule, name, value) {
	    var _value;
	    var _selectors = [];

	    _value = value.replace(viewportUnitExpression, replaceValues);

	    if (options.hacks) {
	      _value = options.hacks.overwriteDeclaration(rule, name, _value);
	    }

	    if (name) {
	      // skipping KeyframesRule
	      _selectors.push(rule.selectorText);
	      _value = name + ': ' + _value + ';';
	    }

	    var _rule = rule.parentRule;
	    while (_rule) {
	      _selectors.unshift('@media ' + _rule.media.mediaText);
	      _rule = _rule.parentRule;
	    }

	    return {
	      selector: _selectors,
	      content: _value
	    };
	  }

	  function replaceValues(match, number, unit) {
	    var _base = dimensions[unit];
	    var _number = parseFloat(number) / 100;
	    return (_number * _base) + 'px';
	  }

	  function getViewport() {
	    var vh = window.innerHeight;
	    var vw = window.innerWidth;

	    return {
	      vh: vh,
	      vw: vw,
	      vmax: Math.max(vw, vh),
	      vmin: Math.min(vw, vh)
	    };
	  }

	  function importCrossOriginLinks(next) {
	    var _waiting = 0;
	    var decrease = function() {
	      _waiting--;
	      if (!_waiting) {
	        next();
	      }
	    };

	    forEach.call(document.styleSheets, function(sheet) {
	      if (!sheet.href || origin(sheet.href) === origin(location.href) || sheet.ownerNode.getAttribute('data-viewport-units-buggyfill') === 'ignore') {
	        // skip <style> and <link> from same origin or explicitly declared to ignore
	        return;
	      }

	      _waiting++;
	      convertLinkToStyle(sheet.ownerNode, decrease);
	    });

	    if (!_waiting) {
	      next();
	    }
	  }

	  function origin(url) {
	    return url.slice(0, url.indexOf('/', url.indexOf('://') + 3));
	  }

	  function convertLinkToStyle(link, next) {
	    getCors(link.href, function() {
	      var style = document.createElement('style');
	      style.media = link.media;
	      style.setAttribute('data-href', link.href);
	      style.textContent = this.responseText;
	      link.parentNode.replaceChild(style, link);
	      next();
	    }, next);
	  }

	  function getCors(url, success, error) {
	    var xhr = new XMLHttpRequest();
	    if ('withCredentials' in xhr) {
	      // XHR for Chrome/Firefox/Opera/Safari.
	      xhr.open('GET', url, true);
	    } else if (typeof XDomainRequest !== 'undefined') {
	      // XDomainRequest for IE.
	      xhr = new XDomainRequest();
	      xhr.open('GET', url);
	    } else {
	      throw new Error('cross-domain XHR not supported');
	    }

	    xhr.onload = success;
	    xhr.onerror = error;
	    xhr.send();
	    return xhr;
	  }

	  return {
	    version: '0.6.0',
	    findProperties: findProperties,
	    getCss: getReplacedViewportUnits,
	    init: initialize,
	    refresh: refresh
	  };

	}));


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var Loader = (function () {
	  function Loader() {
	    _classCallCheck(this, Loader);

	    this.reloadComponents();
	    this.loadEntryScripts();
	  }

	  _createClass(Loader, [{
	    key: 'reloadComponents',
	    value: function reloadComponents(parent) {
	      if (typeof parent === "undefined") {
	        parent = document;
	      }
	      var componentElements = parent.querySelectorAll('[data-component]');

	      var _loop = function () {
	        var el = componentElements[i];
	        var name = el.getAttribute('data-component');
	        __webpack_require__.e/* nsure */(1, function () {
	          var Component = __webpack_require__(6)("./" + name);
	          new Component(el);
	        });
	      };

	      for (var i = 0; i < componentElements.length; i++) {
	        _loop();
	      }
	    }
	  }, {
	    key: 'loadEntryScripts',
	    value: function loadEntryScripts() {
	      var entryElements = document.querySelectorAll('[data-entry]');

	      var _loop2 = function () {
	        var el = entryElements[i];
	        var name = el.getAttribute('data-entry');
	        __webpack_require__.e/* nsure */(2, function () {
	          var Entry = __webpack_require__(36)("./" + name);
	          new Entry(el);
	        });
	      };

	      for (var i = 0; i < entryElements.length; i++) {
	        _loop2();
	      }
	    }
	  }]);

	  return Loader;
	})();

	exports['default'] = new Loader();
	module.exports = exports['default'];

/***/ }
]);
//# sourceMappingURL=main.js.map
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
function onYouTubePlayerAPIReady() {

}

var miracoilSwiper = new Swiper('.app-miracoil-swiper .swiper-container', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true
});

var reviewsSwiper = new Swiper('.app-reviews-swiper .swiper-container', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    slidesPerView: 4,
    spaceBetween: 50,
    breakpoints: {
        1280: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 30
        }
    }
});

var dealsSwiper = new Swiper('.app-deals-swiper .swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    slidesPerView: 4,
    spaceBetween: 40,
    breakpoints: {
        1280: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 1
        }
    }
});

function miracoilSwiperTrigger (e) {
    e.preventDefault();
    var $this = $(e.target);
    var $nav = $this.closest('nav');
    var $index = $nav.find('a').index($this) + 1;

    miracoilSwiper.slideTo($index);
}