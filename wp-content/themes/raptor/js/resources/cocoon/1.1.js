webpackJsonp([1,3],[
	/* 0 */,
	/* 1 */,
	/* 2 */,
	/* 3 */,
	/* 4 */,
	/* 5 */,
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {

        var map = {
            "./accordion": 7,
            "./accordion.js": 7,
            "./chapter-nav": 9,
            "./chapter-nav.js": 9,
            "./form-float-label": 14,
            "./form-float-label.js": 14,
            "./header": 15,
            "./header.js": 15,
            "./hero": 16,
            "./hero.js": 16,
            "./intro-load-images": 21,
            "./intro-load-images.js": 21,
            "./layers": 27,
            "./layers.js": 27,
            "./modal": 28,
            "./modal-form": 29,
            "./modal-form.js": 29,
            "./modal.js": 28,
            "./outer-form": 30,
            "./outer-form.js": 30,
            "./promo": 31,
            "./promo.js": 31,
            "./responsive-bg": 32,
            "./responsive-bg.js": 32,
            "./retailer-map": 33,
            "./retailer-map.js": 33,
            "./scroll-nav": 34,
            "./scroll-nav.js": 34,
            "./technology": 35,
            "./technology.js": 35
        };
        function webpackContext(req) {
            return __webpack_require__(webpackContextResolve(req));
        };
        function webpackContextResolve(req) {
            return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
        };
        webpackContext.keys = function webpackContextKeys() {
            return Object.keys(map);
        };
        webpackContext.resolve = webpackContextResolve;
        module.exports = webpackContext;
        webpackContext.id = 6;


		/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {


        // --
        // USAGE
        // --
        //
        // data-component="test-component data-component-options='{"message":"test"}'
        //
        // "message" A message that will be alerted on click
        //

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

        var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

        var _systemAbstract = __webpack_require__(8);

        var _systemAbstract2 = _interopRequireDefault(_systemAbstract);

        var Component_Accordion = (function (_Abstract2) {
            _inherits(Component_Accordion, _Abstract2);

            function Component_Accordion(el, options) {
                _classCallCheck(this, Component_Accordion);

                _get(Object.getPrototypeOf(Component_Accordion.prototype), "constructor", this).call(this, el, jQuery.extend(true, {
                    "message": "Example Component Message Default"
                }, options), 'component');

                this.initialise();
            }

            _createClass(Component_Accordion, [{
                key: "bindEvents",
                value: function bindEvents() {
                    var _this = this;

                    this.$el.on('floatLabel:reinit', function () {
                        _this.initialise();
                    });
                }
            }, {
                key: "initialise",
                value: function initialise() {
                    this.expander();
                    this.accordion();
                }
            }, {
                key: "expander",
                value: function expander() {
                    $('.c-form__expander .expander-trigger').click(function () {
                        $(this).toggleClass("expander-hidden");
                    });
                }
            }, {
                key: "accordion",
                value: function accordion() {
                    var $accordionlink = $('.accordion').find('.accordion-item .accordion-link');
                    $accordionlink.click(function () {
                        $('.accordion-content').toggleClass('open');
                    });
                }
            }]);

            return Component_Accordion;
        })(_systemAbstract2["default"]);

        exports["default"] = Component_Accordion;
        module.exports = exports["default"];

		/***/ },
	/* 8 */
	/***/ function(module, exports) {

        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

        var ComponentAbstract = (function () {
            function ComponentAbstract(el, options, type) {
                _classCallCheck(this, ComponentAbstract);

                this.el = el;
                this.$el = jQuery(el);
                this.type = type || 'module';
                this.options = options || 'module';

                this.options = jQuery.extend(true, this.options, options, this.$el.data(type + '-options'));

                this.mainClassName = this._getClassName();
            }

            _createClass(ComponentAbstract, [{
                key: '_getClassName',
                value: function _getClassName() {
                    var prefix = this.type === 'module' ? 'm-' : 'c-';
                    var className = this.el.className.split(' ').filter(function (cn) {
                        return cn.indexOf(prefix) === 0;
                    });

                    if (className.length) {
                        return className[0];
                    } else {
                        return false;
                    }
                }
            }]);

            return ComponentAbstract;
        })();

        exports['default'] = ComponentAbstract;
        module.exports = exports['default'];

		/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

        var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

        var _systemAbstract = __webpack_require__(8);

        var _systemAbstract2 = _interopRequireDefault(_systemAbstract);

        var Component_ChapterNav = (function (_Abstract2) {
            _inherits(Component_ChapterNav, _Abstract2);

            function Component_ChapterNav(el, options) {
                _classCallCheck(this, Component_ChapterNav);

                _get(Object.getPrototypeOf(Component_ChapterNav.prototype), "constructor", this).call(this, el, jQuery.extend(true, {
                    "message": "Example Component Message Default"
                }, options), 'component');

                this.chapterNav = this.$el;
                this.links = this.$el.find('.m-chapter-nav__link');
                this.initialise();
            }

            _createClass(Component_ChapterNav, [{
                key: "initialise",
                value: function initialise() {
                    __webpack_require__(10);
                    __webpack_require__(12);

                    this.chapterNav.addClass("-visible");

                    this.initialiseListeners();
                }
            }, {
                key: "initialiseListeners",
                value: function initialiseListeners() {
                    var _this = this;

                    var $this = this;
                    this.$el.hover(function (e) {
                        return _this.onComponentHover(e);
                    }, function (e) {
                        return _this.onComponentHover(e);
                    });
                    this.$el.on('click', '.m-chapter-nav__link', function (e) {
                        return _this.onLinkClick(e);
                    });
                    //jQuery(window).scroll((e) => this.onScrolling(e))
                }
            }, {
                key: "onComponentHover",
                value: function onComponentHover(e) {

                    if (e.type == "mouseenter") {
                        jQuery(e.currentTarget).addClass("-active");
                    } else {
                        jQuery(e.currentTarget).removeClass("-active");
                    }
                }
            }, {
                key: "onLinkClick",
                value: function onLinkClick(e) {
                    e.preventDefault();
                    jQuery('.m-chapter-nav__list a').removeClass('-active')
                    jQuery(e.currentTarget).addClass("-active").siblings().removeClass("-active");
                    var href = jQuery(e.currentTarget).attr("data-href");
                    var animate = jQuery(e.currentTarget).data("animate");

                    if (!animate) {
                        jQuery("html, body").animate({
                            scrollTop: jQuery(href).offset().top
                        }, 1000);
                    } else {
                        if (animate == "top") {
                            jQuery("html, body").animate({
                                scrollTop: 0
                            }, 1000);
                        } else if (animate == "bottom") {
                            jQuery("html, body").animate({
                                scrollTop: jQuery(document).height()
                            }, 1000);
                        }
                    }
                }
            }]);

            return Component_ChapterNav;
        })(_systemAbstract2["default"]);

        exports["default"] = Component_ChapterNav;
        module.exports = exports["default"];

		/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
		/* WEBPACK VAR INJECTION */(function(global) {/*!
		 * VERSION: 1.19.0
		 * DATE: 2016-07-14
		 * UPDATES AND DOCS AT: http://greensock.com
		 *
		 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
		 *
		 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
		 * This work is subject to the terms at http://greensock.com/standard-license or for
		 * Club GreenSock members, the software agreement that was issued with your membership.
		 *
		 * @author: Jack Doyle, jack@greensock.com
		 **/"use strict";var _gsScope="undefined" != typeof module && module.exports && "undefined" != typeof global?global:undefined || window;(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function d(a){var b,c=[],d=a.length;for(b = 0;b !== d;c.push(a[b++]));return c;},e=function e(a,b,c){var d,e,f=a.cycle;for(d in f) e = f[d],a[d] = "function" == typeof e?e(c,b[c]):e[c % e.length];delete a.cycle;},f=function f(a,b,d){c.call(this,a,b,d),this._cycle = 0,this._yoyo = this.vars.yoyo === !0,this._repeat = this.vars.repeat || 0,this._repeatDelay = this.vars.repeatDelay || 0,this._dirty = !0,this.render = f.prototype.render;},g=1e-10,h=c._internals,i=h.isSelector,j=h.isArray,k=f.prototype = c.to({},.1,{}),l=[];f.version = "1.19.0",k.constructor = f,k.kill()._gc = !1,f.killTweensOf = f.killDelayedCallsTo = c.killTweensOf,f.getTweensOf = c.getTweensOf,f.lagSmoothing = c.lagSmoothing,f.ticker = c.ticker,f.render = c.render,k.invalidate = function(){return this._yoyo = this.vars.yoyo === !0,this._repeat = this.vars.repeat || 0,this._repeatDelay = this.vars.repeatDelay || 0,this._uncache(!0),c.prototype.invalidate.call(this);},k.updateTo = function(a,b){var d,e=this.ratio,f=this.vars.immediateRender || a.immediateRender;b && this._startTime < this._timeline._time && (this._startTime = this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime - this._delay));for(d in a) this.vars[d] = a[d];if(this._initted || f)if(b)this._initted = !1,f && this.render(0,!0,!0);else if((this._gc && this._enabled(!0,!1),this._notifyPluginsOfEnabled && this._firstPT && c._onPluginEvent("_onDisable",this),this._time / this._duration > .998)){var g=this._totalTime;this.render(0,!0,!1),this._initted = !1,this.render(g,!0,!1);}else if((this._initted = !1,this._init(),this._time > 0 || f))for(var h,i=1 / (1 - e),j=this._firstPT;j;) h = j.s + j.c,j.c *= i,j.s = h - j.c,j = j._next;return this;},k.render = function(a,b,c){this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();var d,e,f,i,j,k,l,m,n=this._dirty?this.totalDuration():this._totalDuration,o=this._time,p=this._totalTime,q=this._cycle,r=this._duration,s=this._rawPrevTime;if((a >= n - 1e-7?(this._totalTime = n,this._cycle = this._repeat,this._yoyo && 0 !== (1 & this._cycle)?(this._time = 0,this.ratio = this._ease._calcEnd?this._ease.getRatio(0):0):(this._time = r,this.ratio = this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed || (d = !0,e = "onComplete",c = c || this._timeline.autoRemoveChildren),0 === r && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0),(0 > s || 0 >= a && a >= -1e-7 || s === g && "isPause" !== this.data) && s !== a && (c = !0,s > g && (e = "onReverseComplete")),this._rawPrevTime = m = !b || a || s === a?a:g)):1e-7 > a?(this._totalTime = this._time = this._cycle = 0,this.ratio = this._ease._calcEnd?this._ease.getRatio(0):0,(0 !== p || 0 === r && s > 0) && (e = "onReverseComplete",d = this._reversed),0 > a && (this._active = !1,0 === r && (this._initted || !this.vars.lazy || c) && (s >= 0 && (c = !0),this._rawPrevTime = m = !b || a || s === a?a:g)),this._initted || (c = !0)):(this._totalTime = this._time = a,0 !== this._repeat && (i = r + this._repeatDelay,this._cycle = this._totalTime / i >> 0,0 !== this._cycle && this._cycle === this._totalTime / i && a >= p && this._cycle--,this._time = this._totalTime - this._cycle * i,this._yoyo && 0 !== (1 & this._cycle) && (this._time = r - this._time),this._time > r?this._time = r:this._time < 0 && (this._time = 0)),this._easeType?(j = this._time / r,k = this._easeType,l = this._easePower,(1 === k || 3 === k && j >= .5) && (j = 1 - j),3 === k && (j *= 2),1 === l?j *= j:2 === l?j *= j * j:3 === l?j *= j * j * j:4 === l && (j *= j * j * j * j),1 === k?this.ratio = 1 - j:2 === k?this.ratio = j:this._time / r < .5?this.ratio = j / 2:this.ratio = 1 - j / 2):this.ratio = this._ease.getRatio(this._time / r)),o === this._time && !c && q === this._cycle))return void (p !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate")));if(!this._initted){if((this._init(),!this._initted || this._gc))return;if(!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))return this._time = o,this._totalTime = p,this._rawPrevTime = s,this._cycle = q,h.lazyTweens.push(this),void (this._lazy = [a,b]);this._time && !d?this.ratio = this._ease.getRatio(this._time / r):d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time?0:1));}for(this._lazy !== !1 && (this._lazy = !1),this._active || !this._paused && this._time !== o && a >= 0 && (this._active = !0),0 === p && (2 === this._initted && a > 0 && this._init(),this._startAt && (a >= 0?this._startAt.render(a,b,c):e || (e = "_dummyGS")),this.vars.onStart && (0 !== this._totalTime || 0 === r) && (b || this._callback("onStart"))),f = this._firstPT;f;) f.f?f.t[f.p](f.c * this.ratio + f.s):f.t[f.p] = f.c * this.ratio + f.s,f = f._next;this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a,b,c),b || (this._totalTime !== p || e) && this._callback("onUpdate")),this._cycle !== q && (b || this._gc || this.vars.onRepeat && this._callback("onRepeat")),e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a,b,c),d && (this._timeline.autoRemoveChildren && this._enabled(!1,!1),this._active = !1),!b && this.vars[e] && this._callback(e),0 === r && this._rawPrevTime === g && m !== g && (this._rawPrevTime = 0));},f.to = function(a,b,c){return new f(a,b,c);},f.from = function(a,b,c){return c.runBackwards = !0,c.immediateRender = 0 != c.immediateRender,new f(a,b,c);},f.fromTo = function(a,b,c,d){return d.startAt = c,d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender,new f(a,b,d);},f.staggerTo = f.allTo = function(a,b,g,h,k,m,n){h = h || 0;var o,p,q,r,s=0,t=[],u=function u(){g.onComplete && g.onComplete.apply(g.onCompleteScope || this,arguments),k.apply(n || g.callbackScope || this,m || l);},v=g.cycle,w=g.startAt && g.startAt.cycle;for(j(a) || ("string" == typeof a && (a = c.selector(a) || a),i(a) && (a = d(a))),a = a || [],0 > h && (a = d(a),a.reverse(),h *= -1),o = a.length - 1,q = 0;o >= q;q++) {p = {};for(r in g) p[r] = g[r];if((v && (e(p,a,q),null != p.duration && (b = p.duration,delete p.duration)),w)){w = p.startAt = {};for(r in g.startAt) w[r] = g.startAt[r];e(p.startAt,a,q);}p.delay = s + (p.delay || 0),q === o && k && (p.onComplete = u),t[q] = new f(a[q],b,p),s += h;}return t;},f.staggerFrom = f.allFrom = function(a,b,c,d,e,g,h){return c.runBackwards = !0,c.immediateRender = 0 != c.immediateRender,f.staggerTo(a,b,c,d,e,g,h);},f.staggerFromTo = f.allFromTo = function(a,b,c,d,e,g,h,i){return d.startAt = c,d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender,f.staggerTo(a,b,d,e,g,h,i);},f.delayedCall = function(a,b,c,d,e){return new f(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,useFrames:e,overwrite:0});},f.set = function(a,b){return new f(a,0,b);},f.isTweening = function(a){return c.getTweensOf(a,!0).length > 0;};var m=function m(a,b){for(var d=[],e=0,f=a._first;f;) f instanceof c?d[e++] = f:(b && (d[e++] = f),d = d.concat(m(f,b)),e = d.length),f = f._next;return d;},n=f.getAllTweens = function(b){return m(a._rootTimeline,b).concat(m(a._rootFramesTimeline,b));};f.killAll = function(a,c,d,e){null == c && (c = !0),null == d && (d = !0);var f,g,h,i=n(0 != e),j=i.length,k=c && d && e;for(h = 0;j > h;h++) g = i[h],(k || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && (a?g.totalTime(g._reversed?0:g.totalDuration()):g._enabled(!1,!1));},f.killChildTweensOf = function(a,b){if(null != a){var e,g,k,l,m,n=h.tweenLookup;if(("string" == typeof a && (a = c.selector(a) || a),i(a) && (a = d(a)),j(a)))for(l = a.length;--l > -1;) f.killChildTweensOf(a[l],b);else {e = [];for(k in n) for(g = n[k].target.parentNode;g;) g === a && (e = e.concat(n[k].tweens)),g = g.parentNode;for(m = e.length,l = 0;m > l;l++) b && e[l].totalTime(e[l].totalDuration()),e[l]._enabled(!1,!1);}}};var o=function o(a,c,d,e){c = c !== !1,d = d !== !1,e = e !== !1;for(var f,g,h=n(e),i=c && d && e,j=h.length;--j > -1;) g = h[j],(i || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && g.paused(a);};return f.pauseAll = function(a,b,c){o(!0,a,b,c);},f.resumeAll = function(a,b,c){o(!1,a,b,c);},f.globalTimeScale = function(b){var d=a._rootTimeline,e=c.ticker.time;return arguments.length?(b = b || g,d._startTime = e - (e - d._startTime) * d._timeScale / b,d = a._rootFramesTimeline,e = c.ticker.frame,d._startTime = e - (e - d._startTime) * d._timeScale / b,d._timeScale = a._rootTimeline._timeScale = b,b):d._timeScale;},k.progress = function(a,b){return arguments.length?this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle)?1 - a:a) + this._cycle * (this._duration + this._repeatDelay),b):this._time / this.duration();},k.totalProgress = function(a,b){return arguments.length?this.totalTime(this.totalDuration() * a,b):this._totalTime / this.totalDuration();},k.time = function(a,b){return arguments.length?(this._dirty && this.totalDuration(),a > this._duration && (a = this._duration),this._yoyo && 0 !== (1 & this._cycle)?a = this._duration - a + this._cycle * (this._duration + this._repeatDelay):0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)),this.totalTime(a,b)):this._time;},k.duration = function(b){return arguments.length?a.prototype.duration.call(this,b):this._duration;},k.totalDuration = function(a){return arguments.length?-1 === this._repeat?this:this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)):(this._dirty && (this._totalDuration = -1 === this._repeat?999999999999:this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat,this._dirty = !1),this._totalDuration);},k.repeat = function(a){return arguments.length?(this._repeat = a,this._uncache(!0)):this._repeat;},k.repeatDelay = function(a){return arguments.length?(this._repeatDelay = a,this._uncache(!0)):this._repeatDelay;},k.yoyo = function(a){return arguments.length?(this._yoyo = a,this):this._yoyo;},f;},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function d(a){b.call(this,a),this._labels = {},this.autoRemoveChildren = this.vars.autoRemoveChildren === !0,this.smoothChildTiming = this.vars.smoothChildTiming === !0,this._sortChildren = !0,this._onUpdate = this.vars.onUpdate;var c,d,e=this.vars;for(d in e) c = e[d],i(c) && -1 !== c.join("").indexOf("{self}") && (e[d] = this._swapSelfInParams(c));i(e.tweens) && this.add(e.tweens,0,e.align,e.stagger);},e=1e-10,f=c._internals,g=d._internals = {},h=f.isSelector,i=f.isArray,j=f.lazyTweens,k=f.lazyRender,l=_gsScope._gsDefine.globals,m=function m(a){var b,c={};for(b in a) c[b] = a[b];return c;},n=function n(a,b,c){var d,e,f=a.cycle;for(d in f) e = f[d],a[d] = "function" == typeof e?e.call(b[c],c):e[c % e.length];delete a.cycle;},o=g.pauseCallback = function(){},p=function p(a){var b,c=[],d=a.length;for(b = 0;b !== d;c.push(a[b++]));return c;},q=d.prototype = new b();return d.version = "1.19.0",q.constructor = d,q.kill()._gc = q._forcingPlayhead = q._hasPause = !1,q.to = function(a,b,d,e){var f=d.repeat && l.TweenMax || c;return b?this.add(new f(a,b,d),e):this.set(a,d,e);},q.from = function(a,b,d,e){return this.add((d.repeat && l.TweenMax || c).from(a,b,d),e);},q.fromTo = function(a,b,d,e,f){var g=e.repeat && l.TweenMax || c;return b?this.add(g.fromTo(a,b,d,e),f):this.set(a,e,f);},q.staggerTo = function(a,b,e,f,g,i,j,k){var l,o,q=new d({onComplete:i,onCompleteParams:j,callbackScope:k,smoothChildTiming:this.smoothChildTiming}),r=e.cycle;for("string" == typeof a && (a = c.selector(a) || a),a = a || [],h(a) && (a = p(a)),f = f || 0,0 > f && (a = p(a),a.reverse(),f *= -1),o = 0;o < a.length;o++) l = m(e),l.startAt && (l.startAt = m(l.startAt),l.startAt.cycle && n(l.startAt,a,o)),r && (n(l,a,o),null != l.duration && (b = l.duration,delete l.duration)),q.to(a[o],b,l,o * f);return this.add(q,g);},q.staggerFrom = function(a,b,c,d,e,f,g,h){return c.immediateRender = 0 != c.immediateRender,c.runBackwards = !0,this.staggerTo(a,b,c,d,e,f,g,h);},q.staggerFromTo = function(a,b,c,d,e,f,g,h,i){return d.startAt = c,d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender,this.staggerTo(a,b,d,e,f,g,h,i);},q.call = function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e);},q.set = function(a,b,d){return d = this._parseTimeOrLabel(d,0,!0),null == b.immediateRender && (b.immediateRender = d === this._time && !this._paused),this.add(new c(a,0,b),d);},d.exportRoot = function(a,b){a = a || {},null == a.smoothChildTiming && (a.smoothChildTiming = !0);var e,f,g=new d(a),h=g._timeline;for(null == b && (b = !0),h._remove(g,!0),g._startTime = 0,g._rawPrevTime = g._time = g._totalTime = h._time,e = h._first;e;) f = e._next,b && e instanceof c && e.target === e.vars.onComplete || g.add(e,e._startTime - e._delay),e = f;return h.add(g,0),g;},q.add = function(e,f,g,h){var j,k,l,m,n,o;if(("number" != typeof f && (f = this._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a))){if(e instanceof Array || e && e.push && i(e)){for(g = g || "normal",h = h || 0,j = f,k = e.length,l = 0;k > l;l++) i(m = e[l]) && (m = new d({tweens:m})),this.add(m,j),"string" != typeof m && "function" != typeof m && ("sequence" === g?j = m._startTime + m.totalDuration() / m._timeScale:"start" === g && (m._startTime -= m.delay())),j += h;return this._uncache(!0);}if("string" == typeof e)return this.addLabel(e,f);if("function" != typeof e)throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";e = c.delayedCall(0,e);}if((b.prototype.add.call(this,e,f),(this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()))for(n = this,o = n.rawTime() > e._startTime;n._timeline;) o && n._timeline.smoothChildTiming?n.totalTime(n._totalTime,!0):n._gc && n._enabled(!0,!1),n = n._timeline;return this;},q.remove = function(b){if(b instanceof a){this._remove(b,!1);var c=b._timeline = b.vars.useFrames?a._rootFramesTimeline:a._rootTimeline;return b._startTime = (b._paused?b._pauseTime:c._time) - (b._reversed?b.totalDuration() - b._totalTime:b._totalTime) / b._timeScale,this;}if(b instanceof Array || b && b.push && i(b)){for(var d=b.length;--d > -1;) this.remove(b[d]);return this;}return "string" == typeof b?this.removeLabel(b):this.kill(null,b);},q._remove = function(a,c){b.prototype._remove.call(this,a,c);var d=this._last;return d?this._time > d._startTime + d._totalDuration / d._timeScale && (this._time = this.duration(),this._totalTime = this._totalDuration):this._time = this._totalTime = this._duration = this._totalDuration = 0,this;},q.append = function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a));},q.insert = q.insertMultiple = function(a,b,c,d){return this.add(a,b || 0,c,d);},q.appendMultiple = function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d);},q.addLabel = function(a,b){return this._labels[a] = this._parseTimeOrLabel(b),this;},q.addPause = function(a,b,d,e){var f=c.delayedCall(0,o,d,e || this);return f.vars.onComplete = f.vars.onReverseComplete = b,f.data = "isPause",this._hasPause = !0,this.add(f,a);},q.removeLabel = function(a){return delete this._labels[a],this;},q.getLabelTime = function(a){return null != this._labels[a]?this._labels[a]:-1;},q._parseTimeOrLabel = function(b,c,d,e){var f;if(e instanceof a && e.timeline === this)this.remove(e);else if(e && (e instanceof Array || e.push && i(e)))for(f = e.length;--f > -1;) e[f] instanceof a && e[f].timeline === this && this.remove(e[f]);if("string" == typeof c)return this._parseTimeOrLabel(c,d && "number" == typeof b && null == this._labels[c]?b - this.duration():0,d);if((c = c || 0,"string" != typeof b || !isNaN(b) && null == this._labels[b]))null == b && (b = this.duration());else {if((f = b.indexOf("="),-1 === f))return null == this._labels[b]?d?this._labels[b] = this.duration() + c:c:this._labels[b] + c;c = parseInt(b.charAt(f - 1) + "1",10) * Number(b.substr(f + 1)),b = f > 1?this._parseTimeOrLabel(b.substr(0,f - 1),0,d):this.duration();}return Number(b) + c;},q.seek = function(a,b){return this.totalTime("number" == typeof a?a:this._parseTimeOrLabel(a),b !== !1);},q.stop = function(){return this.paused(!0);},q.gotoAndPlay = function(a,b){return this.play(a,b);},q.gotoAndStop = function(a,b){return this.pause(a,b);},q.render = function(a,b,c){this._gc && this._enabled(!0,!1);var d,f,g,h,i,l,m,n=this._dirty?this.totalDuration():this._totalDuration,o=this._time,p=this._startTime,q=this._timeScale,r=this._paused;if(a >= n - 1e-7)this._totalTime = this._time = n,this._reversed || this._hasPausedChild() || (f = !0,h = "onComplete",i = !!this._timeline.autoRemoveChildren,0 === this._duration && (0 >= a && a >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === e) && this._rawPrevTime !== a && this._first && (i = !0,this._rawPrevTime > e && (h = "onReverseComplete"))),this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a?a:e,a = n + 1e-4;else if(1e-7 > a)if((this._totalTime = this._time = 0,(0 !== o || 0 === this._duration && this._rawPrevTime !== e && (this._rawPrevTime > 0 || 0 > a && this._rawPrevTime >= 0)) && (h = "onReverseComplete",f = this._reversed),0 > a))this._active = !1,this._timeline.autoRemoveChildren && this._reversed?(i = f = !0,h = "onReverseComplete"):this._rawPrevTime >= 0 && this._first && (i = !0),this._rawPrevTime = a;else {if((this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a?a:e,0 === a && f))for(d = this._first;d && 0 === d._startTime;) d._duration || (f = !1),d = d._next;a = 0,this._initted || (i = !0);}else {if(this._hasPause && !this._forcingPlayhead && !b){if(a >= o)for(d = this._first;d && d._startTime <= a && !l;) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (l = d),d = d._next;else for(d = this._last;d && d._startTime >= a && !l;) d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (l = d),d = d._prev;l && (this._time = a = l._startTime,this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay));}this._totalTime = this._time = this._rawPrevTime = a;}if(this._time !== o && this._first || c || i || l){if((this._initted || (this._initted = !0),this._active || !this._paused && this._time !== o && a > 0 && (this._active = !0),0 === o && this.vars.onStart && (0 === this._time && this._duration || b || this._callback("onStart")),m = this._time,m >= o))for(d = this._first;d && (g = d._next,m === this._time && (!this._paused || r));) (d._active || d._startTime <= m && !d._paused && !d._gc) && (l === d && this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration) - (a - d._startTime) * d._timeScale,b,c):d.render((a - d._startTime) * d._timeScale,b,c)),d = g;else for(d = this._last;d && (g = d._prev,m === this._time && (!this._paused || r));) {if(d._active || d._startTime <= o && !d._paused && !d._gc){if(l === d){for(l = d._prev;l && l.endTime() > this._time;) l.render(l._reversed?l.totalDuration() - (a - l._startTime) * l._timeScale:(a - l._startTime) * l._timeScale,b,c),l = l._prev;l = null,this.pause();}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration) - (a - d._startTime) * d._timeScale,b,c):d.render((a - d._startTime) * d._timeScale,b,c);}d = g;}this._onUpdate && (b || (j.length && k(),this._callback("onUpdate"))),h && (this._gc || (p === this._startTime || q !== this._timeScale) && (0 === this._time || n >= this.totalDuration()) && (f && (j.length && k(),this._timeline.autoRemoveChildren && this._enabled(!1,!1),this._active = !1),!b && this.vars[h] && this._callback(h)));}},q._hasPausedChild = function(){for(var a=this._first;a;) {if(a._paused || a instanceof d && a._hasPausedChild())return !0;a = a._next;}return !1;},q.getChildren = function(a,b,d,e){e = e || -9999999999;for(var f=[],g=this._first,h=0;g;) g._startTime < e || (g instanceof c?b !== !1 && (f[h++] = g):(d !== !1 && (f[h++] = g),a !== !1 && (f = f.concat(g.getChildren(!0,b,d)),h = f.length))),g = g._next;return f;},q.getTweensOf = function(a,b){var d,e,f=this._gc,g=[],h=0;for(f && this._enabled(!0,!0),d = c.getTweensOf(a),e = d.length;--e > -1;) (d[e].timeline === this || b && this._contains(d[e])) && (g[h++] = d[e]);return f && this._enabled(!1,!0),g;},q.recent = function(){return this._recent;},q._contains = function(a){for(var b=a.timeline;b;) {if(b === this)return !0;b = b.timeline;}return !1;},q.shiftChildren = function(a,b,c){c = c || 0;for(var d,e=this._first,f=this._labels;e;) e._startTime >= c && (e._startTime += a),e = e._next;if(b)for(d in f) f[d] >= c && (f[d] += a);return this._uncache(!0);},q._kill = function(a,b){if(!a && !b)return this._enabled(!1,!1);for(var c=b?this.getTweensOf(b):this.getChildren(!0,!0,!1),d=c.length,e=!1;--d > -1;) c[d]._kill(a,b) && (e = !0);return e;},q.clear = function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time = this._totalTime = 0;--c > -1;) b[c]._enabled(!1,!1);return a !== !1 && (this._labels = {}),this._uncache(!0);},q.invalidate = function(){for(var b=this._first;b;) b.invalidate(),b = b._next;return a.prototype.invalidate.call(this);},q._enabled = function(a,c){if(a === this._gc)for(var d=this._first;d;) d._enabled(a,!0),d = d._next;return b.prototype._enabled.call(this,a,c);},q.totalTime = function(b,c,d){this._forcingPlayhead = !0;var e=a.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead = !1,e;},q.duration = function(a){return arguments.length?(0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a),this):(this._dirty && this.totalDuration(),this._duration);},q.totalDuration = function(a){if(!arguments.length){if(this._dirty){for(var b,c,d=0,e=this._last,f=999999999999;e;) b = e._prev,e._dirty && e.totalDuration(),e._startTime > f && this._sortChildren && !e._paused?this.add(e,e._startTime - e._delay):f = e._startTime,e._startTime < 0 && !e._paused && (d -= e._startTime,this._timeline.smoothChildTiming && (this._startTime += e._startTime / this._timeScale),this.shiftChildren(-e._startTime,!1,-9999999999),f = 0),c = e._startTime + e._totalDuration / e._timeScale,c > d && (d = c),e = b;this._duration = this._totalDuration = d,this._dirty = !1;}return this._totalDuration;}return a && this.totalDuration()?this.timeScale(this._totalDuration / a):this;},q.paused = function(b){if(!b)for(var c=this._first,d=this._time;c;) c._startTime === d && "isPause" === c.data && (c._rawPrevTime = 0),c = c._next;return a.prototype.paused.apply(this,arguments);},q.usesFrames = function(){for(var b=this._timeline;b._timeline;) b = b._timeline;return b === a._rootFramesTimeline;},q.rawTime = function(){return this._paused?this._totalTime:(this._timeline.rawTime() - this._startTime) * this._timeScale;},d;},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function d(b){a.call(this,b),this._repeat = this.vars.repeat || 0,this._repeatDelay = this.vars.repeatDelay || 0,this._cycle = 0,this._yoyo = this.vars.yoyo === !0,this._dirty = !0;},e=1e-10,f=b._internals,g=f.lazyTweens,h=f.lazyRender,i=_gsScope._gsDefine.globals,j=new c(null,null,1,0),k=d.prototype = new a();return k.constructor = d,k.kill()._gc = !1,d.version = "1.19.0",k.invalidate = function(){return this._yoyo = this.vars.yoyo === !0,this._repeat = this.vars.repeat || 0,this._repeatDelay = this.vars.repeatDelay || 0,this._uncache(!0),a.prototype.invalidate.call(this);},k.addCallback = function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c);},k.removeCallback = function(a,b){if(a)if(null == b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d > -1;) c[d]._startTime === e && c[d]._enabled(!1,!1);return this;},k.removePause = function(b){return this.removeCallback(a._internals.pauseCallback,b);},k.tweenTo = function(a,c){c = c || {};var d,e,f,g={ease:j,useFrames:this.usesFrames(),immediateRender:!1},h=c.repeat && i.TweenMax || b;for(e in c) g[e] = c[e];return g.time = this._parseTimeOrLabel(a),d = Math.abs(Number(g.time) - this._time) / this._timeScale || .001,f = new h(this,d,g),g.onStart = function(){f.target.paused(!0),f.vars.time !== f.target.time() && d === f.duration() && f.duration(Math.abs(f.vars.time - f.target.time()) / f.target._timeScale),c.onStart && f._callback("onStart");},f;},k.tweenFromTo = function(a,b,c){c = c || {},a = this._parseTimeOrLabel(a),c.startAt = {onComplete:this.seek,onCompleteParams:[a],callbackScope:this},c.immediateRender = c.immediateRender !== !1;var d=this.tweenTo(b,c);return d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001);},k.render = function(a,b,c){this._gc && this._enabled(!0,!1);var d,f,i,j,k,l,m,n,o=this._dirty?this.totalDuration():this._totalDuration,p=this._duration,q=this._time,r=this._totalTime,s=this._startTime,t=this._timeScale,u=this._rawPrevTime,v=this._paused,w=this._cycle;if(a >= o - 1e-7)this._locked || (this._totalTime = o,this._cycle = this._repeat),this._reversed || this._hasPausedChild() || (f = !0,j = "onComplete",k = !!this._timeline.autoRemoveChildren,0 === this._duration && (0 >= a && a >= -1e-7 || 0 > u || u === e) && u !== a && this._first && (k = !0,u > e && (j = "onReverseComplete"))),this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a?a:e,this._yoyo && 0 !== (1 & this._cycle)?this._time = a = 0:(this._time = p,a = p + 1e-4);else if(1e-7 > a)if((this._locked || (this._totalTime = this._cycle = 0),this._time = 0,(0 !== q || 0 === p && u !== e && (u > 0 || 0 > a && u >= 0) && !this._locked) && (j = "onReverseComplete",f = this._reversed),0 > a))this._active = !1,this._timeline.autoRemoveChildren && this._reversed?(k = f = !0,j = "onReverseComplete"):u >= 0 && this._first && (k = !0),this._rawPrevTime = a;else {if((this._rawPrevTime = p || !b || a || this._rawPrevTime === a?a:e,0 === a && f))for(d = this._first;d && 0 === d._startTime;) d._duration || (f = !1),d = d._next;a = 0,this._initted || (k = !0);}else if((0 === p && 0 > u && (k = !0),this._time = this._rawPrevTime = a,this._locked || (this._totalTime = a,0 !== this._repeat && (l = p + this._repeatDelay,this._cycle = this._totalTime / l >> 0,0 !== this._cycle && this._cycle === this._totalTime / l && a >= r && this._cycle--,this._time = this._totalTime - this._cycle * l,this._yoyo && 0 !== (1 & this._cycle) && (this._time = p - this._time),this._time > p?(this._time = p,a = p + 1e-4):this._time < 0?this._time = a = 0:a = this._time)),this._hasPause && !this._forcingPlayhead && !b)){if((a = this._time,a >= q))for(d = this._first;d && d._startTime <= a && !m;) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (m = d),d = d._next;else for(d = this._last;d && d._startTime >= a && !m;) d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (m = d),d = d._prev;m && (this._time = a = m._startTime,this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay));}if(this._cycle !== w && !this._locked){var x=this._yoyo && 0 !== (1 & w),y=x === (this._yoyo && 0 !== (1 & this._cycle)),z=this._totalTime,A=this._cycle,B=this._rawPrevTime,C=this._time;if((this._totalTime = w * p,this._cycle < w?x = !x:this._totalTime += p,this._time = q,this._rawPrevTime = 0 === p?u - 1e-4:u,this._cycle = w,this._locked = !0,q = x?0:p,this.render(q,b,0 === p),b || this._gc || this.vars.onRepeat && this._callback("onRepeat"),q !== this._time))return;if((y && (q = x?p + 1e-4:-1e-4,this.render(q,!0,!1)),this._locked = !1,this._paused && !v))return;this._time = C,this._totalTime = z,this._cycle = A,this._rawPrevTime = B;}if(!(this._time !== q && this._first || c || k || m))return void (r !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate")));if((this._initted || (this._initted = !0),this._active || !this._paused && this._totalTime !== r && a > 0 && (this._active = !0),0 === r && this.vars.onStart && (0 === this._totalTime && this._totalDuration || b || this._callback("onStart")),n = this._time,n >= q))for(d = this._first;d && (i = d._next,n === this._time && (!this._paused || v));) (d._active || d._startTime <= this._time && !d._paused && !d._gc) && (m === d && this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration) - (a - d._startTime) * d._timeScale,b,c):d.render((a - d._startTime) * d._timeScale,b,c)),d = i;else for(d = this._last;d && (i = d._prev,n === this._time && (!this._paused || v));) {if(d._active || d._startTime <= q && !d._paused && !d._gc){if(m === d){for(m = d._prev;m && m.endTime() > this._time;) m.render(m._reversed?m.totalDuration() - (a - m._startTime) * m._timeScale:(a - m._startTime) * m._timeScale,b,c),m = m._prev;m = null,this.pause();}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration) - (a - d._startTime) * d._timeScale,b,c):d.render((a - d._startTime) * d._timeScale,b,c);}d = i;}this._onUpdate && (b || (g.length && h(),this._callback("onUpdate"))),j && (this._locked || this._gc || (s === this._startTime || t !== this._timeScale) && (0 === this._time || o >= this.totalDuration()) && (f && (g.length && h(),this._timeline.autoRemoveChildren && this._enabled(!1,!1),this._active = !1),!b && this.vars[j] && this._callback(j)));},k.getActive = function(a,b,c){null == a && (a = !0),null == b && (b = !0),null == c && (c = !1);var d,e,f=[],g=this.getChildren(a,b,c),h=0,i=g.length;for(d = 0;i > d;d++) e = g[d],e.isActive() && (f[h++] = e);return f;},k.getLabelAfter = function(a){a || 0 !== a && (a = this._time);var b,c=this.getLabelsArray(),d=c.length;for(b = 0;d > b;b++) if(c[b].time > a)return c[b].name;return null;},k.getLabelBefore = function(a){null == a && (a = this._time);for(var b=this.getLabelsArray(),c=b.length;--c > -1;) if(b[c].time < a)return b[c].name;return null;},k.getLabelsArray = function(){var a,b=[],c=0;for(a in this._labels) b[c++] = {time:this._labels[a],name:a};return b.sort(function(a,b){return a.time - b.time;}),b;},k.progress = function(a,b){return arguments.length?this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle)?1 - a:a) + this._cycle * (this._duration + this._repeatDelay),b):this._time / this.duration();},k.totalProgress = function(a,b){return arguments.length?this.totalTime(this.totalDuration() * a,b):this._totalTime / this.totalDuration();},k.totalDuration = function(b){return arguments.length?-1 !== this._repeat && b?this.timeScale(this.totalDuration() / b):this:(this._dirty && (a.prototype.totalDuration.call(this),this._totalDuration = -1 === this._repeat?999999999999:this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat),this._totalDuration);},k.time = function(a,b){return arguments.length?(this._dirty && this.totalDuration(),a > this._duration && (a = this._duration),this._yoyo && 0 !== (1 & this._cycle)?a = this._duration - a + this._cycle * (this._duration + this._repeatDelay):0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)),this.totalTime(a,b)):this._time;},k.repeat = function(a){return arguments.length?(this._repeat = a,this._uncache(!0)):this._repeat;},k.repeatDelay = function(a){return arguments.length?(this._repeatDelay = a,this._uncache(!0)):this._repeatDelay;},k.yoyo = function(a){return arguments.length?(this._yoyo = a,this):this._yoyo;},k.currentLabel = function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time + 1e-8);},d;},!0),(function(){var a=180 / Math.PI,b=[],c=[],d=[],e={},f=_gsScope._gsDefine.globals,g=function g(a,b,c,d){c === d && (c = d - (d - b) / 1e6),a === b && (b = a + (c - a) / 1e6),this.a = a,this.b = b,this.c = c,this.d = d,this.da = d - a,this.ca = c - a,this.ba = b - a;},h=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",i=function i(a,b,c,d){var e={a:a},f={},g={},h={c:d},i=(a + b) / 2,j=(b + c) / 2,k=(c + d) / 2,l=(i + j) / 2,m=(j + k) / 2,n=(m - l) / 8;return e.b = i + (a - i) / 4,f.b = l + n,e.c = f.a = (e.b + f.b) / 2,f.c = g.a = (l + m) / 2,g.b = m - n,h.b = k + (d - k) / 4,g.c = h.a = (g.b + h.b) / 2,[e,f,g,h];},j=function j(a,e,f,g,h){var j,k,l,m,n,o,p,q,r,s,t,u,v,w=a.length - 1,x=0,y=a[0].a;for(j = 0;w > j;j++) n = a[x],k = n.a,l = n.d,m = a[x + 1].d,h?(t = b[j],u = c[j],v = (u + t) * e * .25 / (g?.5:d[j] || .5),o = l - (l - k) * (g?.5 * e:0 !== t?v / t:0),p = l + (m - l) * (g?.5 * e:0 !== u?v / u:0),q = l - (o + ((p - o) * (3 * t / (t + u) + .5) / 4 || 0))):(o = l - (l - k) * e * .5,p = l + (m - l) * e * .5,q = l - (o + p) / 2),o += q,p += q,n.c = r = o,0 !== j?n.b = y:n.b = y = n.a + .6 * (n.c - n.a),n.da = l - k,n.ca = r - k,n.ba = y - k,f?(s = i(k,y,r,l),a.splice(x,1,s[0],s[1],s[2],s[3]),x += 4):x++,y = p;n = a[x],n.b = y,n.c = y + .4 * (n.d - y),n.da = n.d - n.a,n.ca = n.c - n.a,n.ba = y - n.a,f && (s = i(n.a,y,n.c,n.d),a.splice(x,1,s[0],s[1],s[2],s[3]));},k=function k(a,d,e,f){var h,i,j,k,l,m,n=[];if(f)for(a = [f].concat(a),i = a.length;--i > -1;) "string" == typeof (m = a[i][d]) && "=" === m.charAt(1) && (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)));if((h = a.length - 2,0 > h))return n[0] = new g(a[0][d],0,0,a[-1 > h?0:1][d]),n;for(i = 0;h > i;i++) j = a[i][d],k = a[i + 1][d],n[i] = new g(j,0,0,k),e && (l = a[i + 2][d],b[i] = (b[i] || 0) + (k - j) * (k - j),c[i] = (c[i] || 0) + (l - k) * (l - k));return n[i] = new g(a[i][d],0,0,a[i + 1][d]),n;},l=function l(a,f,g,i,_l,m){var n,o,p,q,r,s,t,u,v={},w=[],x=m || a[0];_l = "string" == typeof _l?"," + _l + ",":h,null == f && (f = 1);for(o in a[0]) w.push(o);if(a.length > 1){for(u = a[a.length - 1],t = !0,n = w.length;--n > -1;) if((o = w[n],Math.abs(x[o] - u[o]) > .05)){t = !1;break;}t && (a = a.concat(),m && a.unshift(m),a.push(a[1]),m = a[a.length - 3]);}for(b.length = c.length = d.length = 0,n = w.length;--n > -1;) o = w[n],e[o] = -1 !== _l.indexOf("," + o + ","),v[o] = k(a,o,e[o],m);for(n = b.length;--n > -1;) b[n] = Math.sqrt(b[n]),c[n] = Math.sqrt(c[n]);if(!i){for(n = w.length;--n > -1;) if(e[o])for(p = v[w[n]],s = p.length - 1,q = 0;s > q;q++) r = p[q + 1].da / c[q] + p[q].da / b[q] || 0,d[q] = (d[q] || 0) + r * r;for(n = d.length;--n > -1;) d[n] = Math.sqrt(d[n]);}for(n = w.length,q = g?4:1;--n > -1;) o = w[n],p = v[o],j(p,f,g,i,e[o]),t && (p.splice(0,q),p.splice(p.length - q,q));return v;},m=function m(a,b,c){b = b || "soft";var d,e,f,h,i,j,k,l,m,n,o,p={},q="cubic" === b?3:2,r="soft" === b,s=[];if((r && c && (a = [c].concat(a)),null == a || a.length < q + 1))throw "invalid Bezier data";for(m in a[0]) s.push(m);for(j = s.length;--j > -1;) {for(m = s[j],p[m] = i = [],n = 0,l = a.length,k = 0;l > k;k++) d = null == c?a[k][m]:"string" == typeof (o = a[k][m]) && "=" === o.charAt(1)?c[m] + Number(o.charAt(0) + o.substr(2)):Number(o),r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2),i[n++] = d;for(l = n - q + 1,n = 0,k = 0;l > k;k += q) d = i[k],e = i[k + 1],f = i[k + 2],h = 2 === q?0:i[k + 3],i[n++] = o = 3 === q?new g(d,e,f,h):new g(d,(2 * e + d) / 3,(2 * e + f) / 3,f);i.length = n;}return p;},n=function n(a,b,c){for(var d,e,f,g,h,i,j,k,l,m,n,o=1 / c,p=a.length;--p > -1;) for(m = a[p],f = m.a,g = m.d - f,h = m.c - f,i = m.b - f,d = e = 0,k = 1;c >= k;k++) j = o * k,l = 1 - j,d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j),n = p * c + k - 1,b[n] = (b[n] || 0) + d * d;},o=function o(a,b){b = b >> 0 || 6;var c,d,e,f,g=[],h=[],i=0,j=0,k=b - 1,l=[],m=[];for(c in a) n(a[c],g,b);for(e = g.length,d = 0;e > d;d++) i += Math.sqrt(g[d]),f = d % b,m[f] = i,f === k && (j += i,f = d / b >> 0,l[f] = m,h[f] = j,i = 0,m = []);return {length:j,lengths:h,segments:l};},p=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.7",API:2,global:!0,init:function init(a,b,c){this._target = a,b instanceof Array && (b = {values:b}),this._func = {},this._mod = {},this._props = [],this._timeRes = null == b.timeResolution?6:parseInt(b.timeResolution,10);var d,e,f,g,h,i=b.values || [],j={},k=i[0],n=b.autoRotate || c.vars.orientToBezier;this._autoRotate = n?n instanceof Array?n:[["x","y","rotation",n === !0?0:Number(n) || 0]]:null;for(d in k) this._props.push(d);for(f = this._props.length;--f > -1;) d = this._props[f],this._overwriteProps.push(d),e = this._func[d] = "function" == typeof a[d],j[d] = e?a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)]?d:"get" + d.substr(3)]():parseFloat(a[d]),h || j[d] !== i[0][d] && (h = j);if((this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type?l(i,isNaN(b.curviness)?1:b.curviness,!1,"thruBasic" === b.type,b.correlate,h):m(i,b.type,j),this._segCount = this._beziers[d].length,this._timeRes)){var p=o(this._beziers,this._timeRes);this._length = p.length,this._lengths = p.lengths,this._segments = p.segments,this._l1 = this._li = this._s1 = this._si = 0,this._l2 = this._lengths[0],this._curSeg = this._segments[0],this._s2 = this._curSeg[0],this._prec = 1 / this._curSeg.length;}if(n = this._autoRotate)for(this._initialRotations = [],n[0] instanceof Array || (this._autoRotate = n = [n]),f = n.length;--f > -1;) {for(g = 0;3 > g;g++) d = n[f][g],this._func[d] = "function" == typeof a[d]?a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)]?d:"get" + d.substr(3)]:!1;d = n[f][2],this._initialRotations[f] = (this._func[d]?this._func[d].call(this._target):this._target[d]) || 0,this._overwriteProps.push(d);}return this._startRatio = c.vars.runBackwards?1:0,!0;},set:function set(b){var c,d,e,f,g,h,i,j,k,l,m=this._segCount,n=this._func,o=this._target,p=b !== this._startRatio;if(this._timeRes){if((k = this._lengths,l = this._curSeg,b *= this._length,e = this._li,b > this._l2 && m - 1 > e)){for(j = m - 1;j > e && (this._l2 = k[++e]) <= b;);this._l1 = k[e - 1],this._li = e,this._curSeg = l = this._segments[e],this._s2 = l[this._s1 = this._si = 0];}else if(b < this._l1 && e > 0){for(;e > 0 && (this._l1 = k[--e]) >= b;);0 === e && b < this._l1?this._l1 = 0:e++,this._l2 = k[e],this._li = e,this._curSeg = l = this._segments[e],this._s1 = l[(this._si = l.length - 1) - 1] || 0,this._s2 = l[this._si];}if((c = e,b -= this._l1,e = this._si,b > this._s2 && e < l.length - 1)){for(j = l.length - 1;j > e && (this._s2 = l[++e]) <= b;);this._s1 = l[e - 1],this._si = e;}else if(b < this._s1 && e > 0){for(;e > 0 && (this._s1 = l[--e]) >= b;);0 === e && b < this._s1?this._s1 = 0:e++,this._s2 = l[e],this._si = e;}h = (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec || 0;}else c = 0 > b?0:b >= 1?m - 1:m * b >> 0,h = (b - c * (1 / m)) * m;for(d = 1 - h,e = this._props.length;--e > -1;) f = this._props[e],g = this._beziers[f][c],i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a,this._mod[f] && (i = this._mod[f](i,o)),n[f]?o[f](i):o[f] = i;if(this._autoRotate){var q,r,s,t,u,v,w,x=this._autoRotate;for(e = x.length;--e > -1;) f = x[e][2],v = x[e][3] || 0,w = x[e][4] === !0?1:a,g = this._beziers[x[e][0]],q = this._beziers[x[e][1]],g && q && (g = g[c],q = q[c],r = g.a + (g.b - g.a) * h,t = g.b + (g.c - g.b) * h,r += (t - r) * h,t += (g.c + (g.d - g.c) * h - t) * h,s = q.a + (q.b - q.a) * h,u = q.b + (q.c - q.b) * h,s += (u - s) * h,u += (q.c + (q.d - q.c) * h - u) * h,i = p?Math.atan2(u - s,t - r) * w + v:this._initialRotations[e],this._mod[f] && (i = this._mod[f](i,o)),n[f]?o[f](i):o[f] = i);}}}),q=p.prototype;p.bezierThrough = l,p.cubicToQuadratic = i,p._autoCSS = !0,p.quadraticToCubic = function(a,b,c){return new g(a,(2 * b + a) / 3,(2 * b + c) / 3,c);},p._cssRegister = function(){var a=f.CSSPlugin;if(a){var b=a._internals,c=b._parseToProxy,d=b._setPluginRatio,e=b.CSSPropTween;b._registerComplexSpecialProp("bezier",{parser:function parser(a,b,f,g,h,i){b instanceof Array && (b = {values:b}),i = new p();var j,k,l,m=b.values,n=m.length - 1,o=[],q={};if(0 > n)return h;for(j = 0;n >= j;j++) l = c(a,m[j],g,h,i,n !== j),o[j] = l.end;for(k in b) q[k] = b[k];return q.values = o,h = new e(a,"bezier",0,0,l.pt,2),h.data = l,h.plugin = i,h.setRatio = d,0 === q.autoRotate && (q.autoRotate = !0),!q.autoRotate || q.autoRotate instanceof Array || (j = q.autoRotate === !0?0:Number(q.autoRotate),q.autoRotate = null != l.end.left?[["left","top","rotation",j,!1]]:null != l.end.x?[["x","y","rotation",j,!1]]:!1),q.autoRotate && (g._transform || g._enableTransforms(!1),l.autoRotate = g._target._gsTransform,l.proxy.rotation = l.autoRotate.rotation || 0,g._overwriteProps.push("rotation")),i._onInitTween(l.proxy,q,g._tween),h;}});}},q._mod = function(a){for(var b,c=this._overwriteProps,d=c.length;--d > -1;) b = a[c[d]],b && "function" == typeof b && (this._mod[c[d]] = b);},q._kill = function(a){var b,c,d=this._props;for(b in this._beziers) if(b in a)for(delete this._beziers[b],delete this._func[b],c = d.length;--c > -1;) d[c] === b && d.splice(c,1);if(d = this._autoRotate)for(c = d.length;--c > -1;) a[d[c][2]] && d.splice(c,1);return this._super._kill.call(this,a);};})(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var c,d,e,f,g=function g(){a.call(this,"css"),this._overwriteProps.length = 0,this.setRatio = g.prototype.setRatio;},h=_gsScope._gsDefine.globals,i={},j=g.prototype = new a("css");j.constructor = g,g.version = "1.19.0",g.API = 2,g.defaultTransformPerspective = 0,g.defaultSkewType = "compensated",g.defaultSmoothOrigin = !0,j = "px",g.suffixMap = {top:j,right:j,bottom:j,left:j,width:j,height:j,fontSize:j,padding:j,margin:j,perspective:j,lineHeight:""};var k,l,m,n,o,p,q,r,s=/(?:\-|\.|\b)(\d|\.|e\-)+/g,t=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,u=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,w=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,y=/opacity:([^;]*)/i,z=/alpha\(opacity *=.+?\)/i,A=/^(rgb|hsl)/,B=/([A-Z])/g,C=/-([a-z])/gi,D=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,E=function E(a,b){return b.toUpperCase();},F=/(?:Left|Right|Width)/i,G=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,H=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,I=/,(?=[^\)]*(?:\(|$))/gi,J=/[\s,\(]/i,K=Math.PI / 180,L=180 / Math.PI,M={},N=document,O=function O(a){return N.createElementNS?N.createElementNS("http://www.w3.org/1999/xhtml",a):N.createElement(a);},P=O("div"),Q=O("img"),R=g._internals = {_specialProps:i},S=navigator.userAgent,T=(function(){var a=S.indexOf("Android"),b=O("a");return m = -1 !== S.indexOf("Safari") && -1 === S.indexOf("Chrome") && (-1 === a || Number(S.substr(a + 8,1)) > 3),o = m && Number(S.substr(S.indexOf("Version/") + 8,1)) < 6,n = -1 !== S.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(S) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(S)) && (p = parseFloat(RegExp.$1)),b?(b.style.cssText = "top:1px;opacity:.55;",/^0.55/.test(b.style.opacity)):!1;})(),U=function U(a){return x.test("string" == typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter) || "")?parseFloat(RegExp.$1) / 100:1;},V=function V(a){window.console && console.log(a);},W="",X="",Y=function Y(a,b){b = b || P;var c,d,e=b.style;if(void 0 !== e[a])return a;for(a = a.charAt(0).toUpperCase() + a.substr(1),c = ["O","Moz","ms","Ms","Webkit"],d = 5;--d > -1 && void 0 === e[c[d] + a];);return d >= 0?(X = 3 === d?"ms":c[d],W = "-" + X.toLowerCase() + "-",X + a):null;},Z=N.defaultView?N.defaultView.getComputedStyle:function(){},$=g.getStyle = function(a,b,c,d,e){var f;return T || "opacity" !== b?(!d && a.style[b]?f = a.style[b]:(c = c || Z(a))?f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(B,"-$1").toLowerCase()):a.currentStyle && (f = a.currentStyle[b]),null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f?f:e):U(a);},_=R.convertToPixels = function(a,c,d,e,f){if("px" === e || !e)return d;if("auto" === e || !d)return 0;var h,i,j,k=F.test(c),l=a,m=P.style,n=0 > d,o=1 === d;if((n && (d = -d),o && (d *= 100),"%" === e && -1 !== c.indexOf("border")))h = d / 100 * (k?a.clientWidth:a.clientHeight);else {if((m.cssText = "border:0 solid red;position:" + $(a,"position") + ";line-height:0;","%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e))m[k?"borderLeftWidth":"borderTopWidth"] = d + e;else {if((l = a.parentNode || N.body,i = l._gsCache,j = b.ticker.frame,i && k && i.time === j))return i.width * d / 100;m[k?"width":"height"] = d + e;}l.appendChild(P),h = parseFloat(P[k?"offsetWidth":"offsetHeight"]),l.removeChild(P),k && "%" === e && g.cacheWidths !== !1 && (i = l._gsCache = l._gsCache || {},i.time = j,i.width = h / d * 100),0 !== h || f || (h = _(a,c,d,e,!0));}return o && (h /= 100),n?-h:h;},aa=R.calculateOffset = function(a,b,c){if("absolute" !== $(a,"position",c))return 0;var d="left" === b?"Left":"Top",e=$(a,"margin" + d,c);return a["offset" + d] - (_(a,b,parseFloat(e),e.replace(w,"")) || 0);},ba=function ba(a,b){var c,d,e,f={};if(b = b || Z(a,null))if(c = b.length)for(;--c > -1;) e = b[c],(-1 === e.indexOf("-transform") || Ca === e) && (f[e.replace(C,E)] = b.getPropertyValue(e));else for(c in b) (-1 === c.indexOf("Transform") || Ba === c) && (f[c] = b[c]);else if(b = a.currentStyle || a.style)for(c in b) "string" == typeof c && void 0 === f[c] && (f[c.replace(C,E)] = b[c]);return T || (f.opacity = U(a)),d = Pa(a,b,!1),f.rotation = d.rotation,f.skewX = d.skewX,f.scaleX = d.scaleX,f.scaleY = d.scaleY,f.x = d.x,f.y = d.y,Ea && (f.z = d.z,f.rotationX = d.rotationX,f.rotationY = d.rotationY,f.scaleZ = d.scaleZ),f.filters && delete f.filters,f;},ca=function ca(a,b,c,d,e){var f,g,h,i={},j=a.style;for(g in c) "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g?"" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(v,"")?f:0:aa(a,g),void 0 !== j[g] && (h = new ra(j,g,j[g],h)));if(d)for(g in d) "className" !== g && (i[g] = d[g]);return {difs:i,firstMPT:h};},da={width:["Left","Right"],height:["Top","Bottom"]},ea=["marginLeft","marginRight","marginTop","marginBottom"],fa=function fa(a,b,c){if("svg" === (a.nodeName + "").toLowerCase())return (c || Z(a))[b] || 0;if(a.getBBox && Ma(a))return a.getBBox()[b] || 0;var d=parseFloat("width" === b?a.offsetWidth:a.offsetHeight),e=da[b],f=e.length;for(c = c || Z(a,null);--f > -1;) d -= parseFloat($(a,"padding" + e[f],c,!0)) || 0,d -= parseFloat($(a,"border" + e[f] + "Width",c,!0)) || 0;return d;},ga=function ga(a,b){if("contain" === a || "auto" === a || "auto auto" === a)return a + " ";(null == a || "" === a) && (a = "0 0");var c,d=a.split(" "),e=-1 !== a.indexOf("left")?"0%":-1 !== a.indexOf("right")?"100%":d[0],f=-1 !== a.indexOf("top")?"0%":-1 !== a.indexOf("bottom")?"100%":d[1];if(d.length > 3 && !b){for(d = a.split(", ").join(",").split(","),a = [],c = 0;c < d.length;c++) a.push(ga(d[c]));return a.join(",");}return null == f?f = "center" === e?"50%":"0":"center" === f && (f = "50%"),("center" === e || isNaN(parseFloat(e)) && -1 === (e + "").indexOf("=")) && (e = "50%"),a = e + " " + f + (d.length > 2?" " + d[2]:""),b && (b.oxp = -1 !== e.indexOf("%"),b.oyp = -1 !== f.indexOf("%"),b.oxr = "=" === e.charAt(1),b.oyr = "=" === f.charAt(1),b.ox = parseFloat(e.replace(v,"")),b.oy = parseFloat(f.replace(v,"")),b.v = a),b || a;},ha=function ha(a,b){return "function" == typeof a && (a = a(r,q)),"string" == typeof a && "=" === a.charAt(1)?parseInt(a.charAt(0) + "1",10) * parseFloat(a.substr(2)):parseFloat(a) - parseFloat(b) || 0;},ia=function ia(a,b){return "function" == typeof a && (a = a(r,q)),null == a?b:"string" == typeof a && "=" === a.charAt(1)?parseInt(a.charAt(0) + "1",10) * parseFloat(a.substr(2)) + b:parseFloat(a) || 0;},ja=function ja(a,b,c,d){var e,f,g,h,i,j=1e-6;return "function" == typeof a && (a = a(r,q)),null == a?h = b:"number" == typeof a?h = a:(e = 360,f = a.split("_"),i = "=" === a.charAt(1),g = (i?parseInt(a.charAt(0) + "1",10) * parseFloat(f[0].substr(2)):parseFloat(f[0])) * (-1 === a.indexOf("rad")?1:L) - (i?0:b),f.length && (d && (d[c] = b + g),-1 !== a.indexOf("short") && (g %= e,g !== g % (e / 2) && (g = 0 > g?g + e:g - e)),-1 !== a.indexOf("_cw") && 0 > g?g = (g + 9999999999 * e) % e - (g / e | 0) * e:-1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (g / e | 0) * e)),h = b + g),j > h && h > -j && (h = 0),h;},ka={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},la=function la(a,b,c){return a = 0 > a?a + 1:a > 1?a - 1:a,255 * (1 > 6 * a?b + (c - b) * a * 6:.5 > a?c:2 > 3 * a?b + (c - b) * (2 / 3 - a) * 6:b) + .5 | 0;},ma=g.parseColor = function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a)if("number" == typeof a)c = [a >> 16,a >> 8 & 255,255 & a];else {if(("," === a.charAt(a.length - 1) && (a = a.substr(0,a.length - 1)),ka[a]))c = ka[a];else if("#" === a.charAt(0))4 === a.length && (d = a.charAt(1),e = a.charAt(2),f = a.charAt(3),a = "#" + d + d + e + e + f + f),a = parseInt(a.substr(1),16),c = [a >> 16,a >> 8 & 255,255 & a];else if("hsl" === a.substr(0,3))if((c = m = a.match(s),b)){if(-1 !== a.indexOf("="))return a.match(t);}else g = Number(c[0]) % 360 / 360,h = Number(c[1]) / 100,i = Number(c[2]) / 100,e = .5 >= i?i * (h + 1):i + h - i * h,d = 2 * i - e,c.length > 3 && (c[3] = Number(a[3])),c[0] = la(g + 1 / 3,d,e),c[1] = la(g,d,e),c[2] = la(g - 1 / 3,d,e);else c = a.match(s) || ka.transparent;c[0] = Number(c[0]),c[1] = Number(c[1]),c[2] = Number(c[2]),c.length > 3 && (c[3] = Number(c[3]));}else c = ka.black;return b && !m && (d = c[0] / 255,e = c[1] / 255,f = c[2] / 255,j = Math.max(d,e,f),k = Math.min(d,e,f),i = (j + k) / 2,j === k?g = h = 0:(l = j - k,h = i > .5?l / (2 - j - k):l / (j + k),g = j === d?(e - f) / l + (f > e?6:0):j === e?(f - d) / l + 2:(d - e) / l + 4,g *= 60),c[0] = g + .5 | 0,c[1] = 100 * h + .5 | 0,c[2] = 100 * i + .5 | 0),c;},na=function na(a,b){var c,d,e,f=a.match(oa) || [],g=0,h=f.length?"":a;for(c = 0;c < f.length;c++) d = f[c],e = a.substr(g,a.indexOf(d,g) - g),g += e.length + d.length,d = ma(d,b),3 === d.length && d.push(1),h += e + (b?"hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3]:"rgba(" + d.join(",")) + ")";return h + a.substr(g);},oa="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(j in ka) oa += "|" + j + "\\b";oa = new RegExp(oa + ")","gi"),g.colorStringFilter = function(a){var b,c=a[0] + a[1];oa.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("),a[0] = na(a[0],b),a[1] = na(a[1],b)),oa.lastIndex = 0;},b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);var pa=function pa(a,b,c,d){if(null == a)return function(a){return a;};var e,f=b?(a.match(oa) || [""])[0]:"",g=a.split(f).join("").match(u) || [],h=a.substr(0,a.indexOf(g[0])),i=")" === a.charAt(a.length - 1)?")":"",j=-1 !== a.indexOf(" ")?" ":",",k=g.length,l=k > 0?g[0].replace(s,""):"";return k?e = b?function(a){var b,m,n,o;if("number" == typeof a)a += l;else if(d && I.test(a)){for(o = a.replace(I,"|").split("|"),n = 0;n < o.length;n++) o[n] = e(o[n]);return o.join(",");}if((b = (a.match(oa) || [f])[0],m = a.split(b).join("").match(u) || [],n = m.length,k > n--))for(;++n < k;) m[n] = c?m[(n - 1) / 2 | 0]:g[n];return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset")?" inset":"");}:function(a){var b,f,m;if("number" == typeof a)a += l;else if(d && I.test(a)){for(f = a.replace(I,"|").split("|"),m = 0;m < f.length;m++) f[m] = e(f[m]);return f.join(",");}if((b = a.match(u) || [],m = b.length,k > m--))for(;++m < k;) b[m] = c?b[(m - 1) / 2 | 0]:g[m];return h + b.join(j) + i;}:function(a){return a;};},qa=function qa(a){return a = a.split(","),function(b,c,d,e,f,g,h){var i,j=(c + "").split(" ");for(h = {},i = 0;4 > i;i++) h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];return e.parse(b,h,f,g);};},ra=(R._setPluginRatio = function(a){this.plugin.setRatio(a);for(var b,c,d,e,f,g=this.data,h=g.proxy,i=g.firstMPT,j=1e-6;i;) b = h[i.v],i.r?b = Math.round(b):j > b && b > -j && (b = 0),i.t[i.p] = b,i = i._next;if((g.autoRotate && (g.autoRotate.rotation = g.mod?g.mod(h.rotation,this.t):h.rotation),1 === a || 0 === a))for(i = g.firstMPT,f = 1 === a?"e":"b";i;) {if((c = i.t,c.type)){if(1 === c.type){for(e = c.xs0 + c.s + c.xs1,d = 1;d < c.l;d++) e += c["xn" + d] + c["xs" + (d + 1)];c[f] = e;}}else c[f] = c.s + c.xs0;i = i._next;}},function(a,b,c,d,e){this.t = a,this.p = b,this.v = c,this.r = e,d && (d._prev = this,this._next = d);}),sa=(R._parseToProxy = function(a,b,c,d,e,f){var g,h,i,j,k,l=d,m={},n={},o=c._transform,p=M;for(c._transform = null,M = b,d = k = c.parse(a,b,d,e),M = p,f && (c._transform = o,l && (l._prev = null,l._prev && (l._prev._next = null)));d && d !== l;) {if(d.type <= 1 && (h = d.p,n[h] = d.s + d.c,m[h] = d.s,f || (j = new ra(d,"s",h,j,d.r),d.c = 0),1 === d.type))for(g = d.l;--g > 0;) i = "xn" + g,h = d.p + "_" + i,n[h] = d.data[i],m[h] = d[i],f || (j = new ra(d,i,h,j,d.rxp[i]));d = d._next;}return {proxy:m,end:n,firstMPT:j,pt:k};},R.CSSPropTween = function(a,b,d,e,g,h,i,j,k,l,m){this.t = a,this.p = b,this.s = d,this.c = e,this.n = i || b,a instanceof sa || f.push(this.n),this.r = j,this.type = h || 0,k && (this.pr = k,c = !0),this.b = void 0 === l?d:l,this.e = void 0 === m?d + e:m,g && (this._next = g,g._prev = this);}),ta=function ta(a,b,c,d,e,f){var g=new sa(a,b,c,d - c,e,-1,f);return g.b = c,g.e = g.xs0 = d,g;},ua=g.parseComplex = function(a,b,c,d,e,f,h,i,j,l){c = c || f || "","function" == typeof d && (d = d(r,q)),h = new sa(a,b,0,0,h,l?2:1,null,!1,i,c,d),d += "",e && oa.test(d + c) && (d = [c,d],g.colorStringFilter(d),c = d[0],d = d[1]);var m,n,o,p,u,v,w,x,y,z,A,B,C,D=c.split(", ").join(",").split(" "),E=d.split(", ").join(",").split(" "),F=D.length,G=k !== !1;for((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (D = D.join(" ").replace(I,", ").split(" "),E = E.join(" ").replace(I,", ").split(" "),F = D.length),F !== E.length && (D = (f || "").split(" "),F = D.length),h.plugin = j,h.setRatio = l,oa.lastIndex = 0,m = 0;F > m;m++) if((p = D[m],u = E[m],x = parseFloat(p),x || 0 === x))h.appendXtra("",x,ha(u,x),u.replace(t,""),G && -1 !== u.indexOf("px"),!0);else if(e && oa.test(p))B = u.indexOf(")") + 1,B = ")" + (B?u.substr(B):""),C = -1 !== u.indexOf("hsl") && T,p = ma(p,C),u = ma(u,C),y = p.length + u.length > 6,y && !T && 0 === u[3]?(h["xs" + h.l] += h.l?" transparent":"transparent",h.e = h.e.split(E[m]).join("transparent")):(T || (y = !1),C?h.appendXtra(y?"hsla(":"hsl(",p[0],ha(u[0],p[0]),",",!1,!0).appendXtra("",p[1],ha(u[1],p[1]),"%,",!1).appendXtra("",p[2],ha(u[2],p[2]),y?"%,":"%" + B,!1):h.appendXtra(y?"rgba(":"rgb(",p[0],u[0] - p[0],",",!0,!0).appendXtra("",p[1],u[1] - p[1],",",!0).appendXtra("",p[2],u[2] - p[2],y?",":B,!0),y && (p = p.length < 4?1:p[3],h.appendXtra("",p,(u.length < 4?1:u[3]) - p,B,!1))),oa.lastIndex = 0;else if(v = p.match(s)){if((w = u.match(t),!w || w.length !== v.length))return h;for(o = 0,n = 0;n < v.length;n++) A = v[n],z = p.indexOf(A,o),h.appendXtra(p.substr(o,z - o),Number(A),ha(w[n],A),"",G && "px" === p.substr(z + A.length,2),0 === n),o = z + A.length;h["xs" + h.l] += p.substr(o);}else h["xs" + h.l] += h.l || h["xs" + h.l]?" " + u:u;if(-1 !== d.indexOf("=") && h.data){for(B = h.xs0 + h.data.s,m = 1;m < h.l;m++) B += h["xs" + m] + h.data["xn" + m];h.e = B + h["xs" + m];}return h.l || (h.type = -1,h.xs0 = h.e),h.xfirst || h;},va=9;for(j = sa.prototype,j.l = j.pr = 0;--va > 0;) j["xn" + va] = 0,j["xs" + va] = "";j.xs0 = "",j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null,j.appendXtra = function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs" + h] += f && (h || g["xs" + h])?" " + a:a || "",c || 0 === h || g.plugin?(g.l++,g.type = g.setRatio?2:1,g["xs" + g.l] = d || "",h > 0?(g.data["xn" + h] = b + c,g.rxp["xn" + h] = e,g["xn" + h] = b,g.plugin || (g.xfirst = new sa(g,"xn" + h,b,c,g.xfirst || g,0,g.n,e,g.pr),g.xfirst.xs0 = 0),g):(g.data = {s:b + c},g.rxp = {},g.s = b,g.c = c,g.r = e,g)):(g["xs" + h] += b + (d || ""),g);};var wa=function wa(a,b){b = b || {},this.p = b.prefix?Y(a) || a:a,i[a] = i[this.p] = this,this.format = b.formatter || pa(b.defaultValue,b.color,b.collapsible,b.multi),b.parser && (this.parse = b.parser),this.clrs = b.color,this.multi = b.multi,this.keyword = b.keyword,this.dflt = b.defaultValue,this.pr = b.priority || 0;},xa=R._registerComplexSpecialProp = function(a,b,c){"object" != typeof b && (b = {parser:c});var d,e,f=a.split(","),g=b.defaultValue;for(c = c || [g],d = 0;d < f.length;d++) b.prefix = 0 === d && b.prefix,b.defaultValue = c[d] || g,e = new wa(f[d],b);},ya=R._registerPluginProp = function(a){if(!i[a]){var b=a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";xa(a,{parser:function parser(a,c,d,e,f,g,j){var k=h.com.greensock.plugins[b];return k?(k._cssRegister(),i[d].parse(a,c,d,e,f,g,j)):(V("Error: " + b + " js file not loaded."),f);}});}};j = wa.prototype,j.parseComplex = function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this.keyword;if((this.multi && (I.test(c) || I.test(b)?(h = b.replace(I,"|").split("|"),i = c.replace(I,"|").split("|")):m && (h = [b],i = [c])),i)){for(j = i.length > h.length?i.length:h.length,g = 0;j > g;g++) b = h[g] = h[g] || this.dflt,c = i[g] = i[g] || this.dflt,m && (k = b.indexOf(m),l = c.indexOf(m),k !== l && (-1 === l?h[g] = h[g].split(m).join(""):-1 === k && (h[g] += " " + m)));b = h.join(", "),c = i.join(", ");}return ua(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f);},j.parse = function(a,b,c,d,f,g,h){return this.parseComplex(a.style,this.format($(a,this.p,e,!1,this.dflt)),this.format(b),f,g);},g.registerSpecialProp = function(a,b,c){xa(a,{parser:function parser(a,d,e,f,g,h,i){var j=new sa(a,e,0,0,g,2,e,!1,c);return j.plugin = h,j.setRatio = b(a,d,f._tween,e),j;},priority:c});},g.useSVGTransformAttr = m || n;var za,Aa="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Ba=Y("transform"),Ca=W + "transform",Da=Y("transformOrigin"),Ea=null !== Y("perspective"),Fa=R.Transform = function(){this.perspective = parseFloat(g.defaultTransformPerspective) || 0,this.force3D = g.defaultForce3D !== !1 && Ea?g.defaultForce3D || "auto":!1;},Ga=window.SVGElement,Ha=function Ha(a,b,c){var d,e=N.createElementNS("http://www.w3.org/2000/svg",a),f=/([a-z])([A-Z])/g;for(d in c) e.setAttributeNS(null,d.replace(f,"$1-$2").toLowerCase(),c[d]);return b.appendChild(e),e;},Ia=N.documentElement,Ja=(function(){var a,b,c,d=p || /Android/i.test(S) && !window.chrome;return N.createElementNS && !d && (a = Ha("svg",Ia),b = Ha("rect",a,{width:100,height:50,x:100}),c = b.getBoundingClientRect().width,b.style[Da] = "50% 50%",b.style[Ba] = "scaleX(0.5)",d = c === b.getBoundingClientRect().width && !(n && Ea),Ia.removeChild(a)),d;})(),Ka=function Ka(a,b,c,d,e,f){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=a._gsTransform,w=Oa(a,!0);v && (t = v.xOrigin,u = v.yOrigin),(!d || (h = d.split(" ")).length < 2) && (n = a.getBBox(),b = ga(b).split(" "),h = [(-1 !== b[0].indexOf("%")?parseFloat(b[0]) / 100 * n.width:parseFloat(b[0])) + n.x,(-1 !== b[1].indexOf("%")?parseFloat(b[1]) / 100 * n.height:parseFloat(b[1])) + n.y]),c.xOrigin = k = parseFloat(h[0]),c.yOrigin = l = parseFloat(h[1]),d && w !== Na && (m = w[0],n = w[1],o = w[2],p = w[3],q = w[4],r = w[5],s = m * p - n * o,i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s,j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s,k = c.xOrigin = h[0] = i,l = c.yOrigin = h[1] = j),v && (f && (c.xOffset = v.xOffset,c.yOffset = v.yOffset,v = c),e || e !== !1 && g.defaultSmoothOrigin !== !1?(i = k - t,j = l - u,v.xOffset += i * w[0] + j * w[2] - i,v.yOffset += i * w[1] + j * w[3] - j):v.xOffset = v.yOffset = 0),f || a.setAttribute("data-svg-origin",h.join(" "));},La=function La(a){try{return a.getBBox();}catch(a) {}},Ma=function Ma(a){return !!(Ga && a.getBBox && a.getCTM && La(a) && (!a.parentNode || a.parentNode.getBBox && a.parentNode.getCTM));},Na=[1,0,0,1,0,0],Oa=function Oa(a,b){var c,d,e,f,g,h,i=a._gsTransform || new Fa(),j=1e5,k=a.style;if((Ba?d = $(a,Ca,null,!0):a.currentStyle && (d = a.currentStyle.filter.match(G),d = d && 4 === d.length?[d[0].substr(4),Number(d[2].substr(4)),Number(d[1].substr(4)),d[3].substr(4),i.x || 0,i.y || 0].join(","):""),c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d,c && Ba && ((h = "none" === Z(a).display) || !a.parentNode) && (h && (f = k.display,k.display = "block"),a.parentNode || (g = 1,Ia.appendChild(a)),d = $(a,Ca,null,!0),c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d,f?k.display = f:h && Ta(k,"display"),g && Ia.removeChild(a)),(i.svg || a.getBBox && Ma(a)) && (c && -1 !== (k[Ba] + "").indexOf("matrix") && (d = k[Ba],c = 0),e = a.getAttribute("transform"),c && e && (-1 !== e.indexOf("matrix")?(d = e,c = 0):-1 !== e.indexOf("translate") && (d = "matrix(1,0,0,1," + e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")",c = 0))),c))return Na;for(e = (d || "").match(s) || [],va = e.length;--va > -1;) f = Number(e[va]),e[va] = (g = f - (f |= 0))?(g * j + (0 > g?-.5:.5) | 0) / j + f:f;return b && e.length > 6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e;},Pa=R.getTransform = function(a,c,d,e){if(a._gsTransform && d && !e)return a._gsTransform;var f,h,i,j,k,l,m=d?a._gsTransform || new Fa():new Fa(),n=m.scaleX < 0,o=2e-5,p=1e5,q=Ea?parseFloat($(a,Da,c,!1,"0 0 0").split(" ")[2]) || m.zOrigin || 0:0,r=parseFloat(g.defaultTransformPerspective) || 0;if((m.svg = !(!a.getBBox || !Ma(a)),m.svg && (Ka(a,$(a,Da,c,!1,"50% 50%") + "",m,a.getAttribute("data-svg-origin")),za = g.useSVGTransformAttr || Ja),f = Oa(a),f !== Na)){if(16 === f.length){var s,t,u,v,w,x=f[0],y=f[1],z=f[2],A=f[3],B=f[4],C=f[5],D=f[6],E=f[7],F=f[8],G=f[9],H=f[10],I=f[12],J=f[13],K=f[14],M=f[11],N=Math.atan2(D,H);m.zOrigin && (K = -m.zOrigin,I = F * K - f[12],J = G * K - f[13],K = H * K + m.zOrigin - f[14]),m.rotationX = N * L,N && (v = Math.cos(-N),w = Math.sin(-N),s = B * v + F * w,t = C * v + G * w,u = D * v + H * w,F = B * -w + F * v,G = C * -w + G * v,H = D * -w + H * v,M = E * -w + M * v,B = s,C = t,D = u),N = Math.atan2(-z,H),m.rotationY = N * L,N && (v = Math.cos(-N),w = Math.sin(-N),s = x * v - F * w,t = y * v - G * w,u = z * v - H * w,G = y * w + G * v,H = z * w + H * v,M = A * w + M * v,x = s,y = t,z = u),N = Math.atan2(y,x),m.rotation = N * L,N && (v = Math.cos(-N),w = Math.sin(-N),x = x * v + B * w,t = y * v + C * w,C = y * -w + C * v,D = z * -w + D * v,y = t),m.rotationX && Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 && (m.rotationX = m.rotation = 0,m.rotationY = 180 - m.rotationY),m.scaleX = (Math.sqrt(x * x + y * y) * p + .5 | 0) / p,m.scaleY = (Math.sqrt(C * C + G * G) * p + .5 | 0) / p,m.scaleZ = (Math.sqrt(D * D + H * H) * p + .5 | 0) / p,m.rotationX || m.rotationY?m.skewX = 0:(m.skewX = B || C?Math.atan2(B,C) * L + m.rotation:m.skewX || 0,Math.abs(m.skewX) > 90 && Math.abs(m.skewX) < 270 && (n?(m.scaleX *= -1,m.skewX += m.rotation <= 0?180:-180,m.rotation += m.rotation <= 0?180:-180):(m.scaleY *= -1,m.skewX += m.skewX <= 0?180:-180))),m.perspective = M?1 / (0 > M?-M:M):0,m.x = I,m.y = J,m.z = K,m.svg && (m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B),m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C));}else if(!Ea || e || !f.length || m.x !== f[4] || m.y !== f[5] || !m.rotationX && !m.rotationY){var O=f.length >= 6,P=O?f[0]:1,Q=f[1] || 0,R=f[2] || 0,S=O?f[3]:1;m.x = f[4] || 0,m.y = f[5] || 0,i = Math.sqrt(P * P + Q * Q),j = Math.sqrt(S * S + R * R),k = P || Q?Math.atan2(Q,P) * L:m.rotation || 0,l = R || S?Math.atan2(R,S) * L + k:m.skewX || 0,Math.abs(l) > 90 && Math.abs(l) < 270 && (n?(i *= -1,l += 0 >= k?180:-180,k += 0 >= k?180:-180):(j *= -1,l += 0 >= l?180:-180)),m.scaleX = i,m.scaleY = j,m.rotation = k,m.skewX = l,Ea && (m.rotationX = m.rotationY = m.z = 0,m.perspective = r,m.scaleZ = 1),m.svg && (m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R),m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S));}m.zOrigin = q;for(h in m) m[h] < o && m[h] > -o && (m[h] = 0);}return d && (a._gsTransform = m,m.svg && (za && a.style[Ba]?b.delayedCall(.001,function(){Ta(a.style,Ba);}):!za && a.getAttribute("transform") && b.delayedCall(.001,function(){a.removeAttribute("transform");}))),m;},Qa=function Qa(a){var b,c,d=this.data,e=-d.rotation * K,f=e + d.skewX * K,g=1e5,h=(Math.cos(e) * d.scaleX * g | 0) / g,i=(Math.sin(e) * d.scaleX * g | 0) / g,j=(Math.sin(f) * -d.scaleY * g | 0) / g,k=(Math.cos(f) * d.scaleY * g | 0) / g,l=this.t.style,m=this.t.currentStyle;if(m){c = i,i = -j,j = -c,b = m.filter,l.filter = "";var n,o,q=this.t.offsetWidth,r=this.t.offsetHeight,s="absolute" !== m.position,t="progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k,u=d.x + q * d.xPercent / 100,v=d.y + r * d.yPercent / 100;if((null != d.ox && (n = (d.oxp?q * d.ox * .01:d.ox) - q / 2,o = (d.oyp?r * d.oy * .01:d.oy) - r / 2,u += n - (n * h + o * i),v += o - (n * j + o * k)),s?(n = q / 2,o = r / 2,t += ", Dx=" + (n - (n * h + o * i) + u) + ", Dy=" + (o - (n * j + o * k) + v) + ")"):t += ", sizingMethod='auto expand')",-1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(")?l.filter = b.replace(H,t):l.filter = t + " " + b,(0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === t.indexOf("Dx=0, Dy=0") || x.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter")),!s)){var y,z,A,B=8 > p?1:-1;for(n = d.ieOffsetX || 0,o = d.ieOffsetY || 0,d.ieOffsetX = Math.round((q - ((0 > h?-h:h) * q + (0 > i?-i:i) * r)) / 2 + u),d.ieOffsetY = Math.round((r - ((0 > k?-k:k) * r + (0 > j?-j:j) * q)) / 2 + v),va = 0;4 > va;va++) z = ea[va],y = m[z],c = -1 !== y.indexOf("px")?parseFloat(y):_(this.t,z,parseFloat(y),y.replace(w,"")) || 0,A = c !== d[z]?2 > va?-d.ieOffsetX:-d.ieOffsetY:2 > va?n - d.ieOffsetX:o - d.ieOffsetY,l[z] = (d[z] = Math.round(c - A * (0 === va || 2 === va?1:B))) + "px";}}},Ra=R.set3DTransformRatio = R.setTransformRatio = function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z=this.data,A=this.t.style,B=z.rotation,C=z.rotationX,D=z.rotationY,E=z.scaleX,F=z.scaleY,G=z.scaleZ,H=z.x,I=z.y,J=z.z,L=z.svg,M=z.perspective,N=z.force3D;if(((1 === a || 0 === a) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !N) && !J && !M && !D && !C && 1 === G || za && L || !Ea)return void (B || z.skewX || L?(B *= K,x = z.skewX * K,y = 1e5,b = Math.cos(B) * E,e = Math.sin(B) * E,c = Math.sin(B - x) * -F,f = Math.cos(B - x) * F,x && "simple" === z.skewType && (s = Math.tan(x - z.skewY * K),s = Math.sqrt(1 + s * s),c *= s,f *= s,z.skewY && (s = Math.tan(z.skewY * K),s = Math.sqrt(1 + s * s),b *= s,e *= s)),L && (H += z.xOrigin - (z.xOrigin * b + z.yOrigin * c) + z.xOffset,I += z.yOrigin - (z.xOrigin * e + z.yOrigin * f) + z.yOffset,za && (z.xPercent || z.yPercent) && (p = this.t.getBBox(),H += .01 * z.xPercent * p.width,I += .01 * z.yPercent * p.height),p = 1e-6,p > H && H > -p && (H = 0),p > I && I > -p && (I = 0)),u = (b * y | 0) / y + "," + (e * y | 0) / y + "," + (c * y | 0) / y + "," + (f * y | 0) / y + "," + H + "," + I + ")",L && za?this.t.setAttribute("transform","matrix(" + u):A[Ba] = (z.xPercent || z.yPercent?"translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(":"matrix(") + u):A[Ba] = (z.xPercent || z.yPercent?"translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(":"matrix(") + E + ",0,0," + F + "," + H + "," + I + ")");if((n && (p = 1e-4,p > E && E > -p && (E = G = 2e-5),p > F && F > -p && (F = G = 2e-5),!M || z.z || z.rotationX || z.rotationY || (M = 0)),B || z.skewX))B *= K,q = b = Math.cos(B),r = e = Math.sin(B),z.skewX && (B -= z.skewX * K,q = Math.cos(B),r = Math.sin(B),"simple" === z.skewType && (s = Math.tan((z.skewX - z.skewY) * K),s = Math.sqrt(1 + s * s),q *= s,r *= s,z.skewY && (s = Math.tan(z.skewY * K),s = Math.sqrt(1 + s * s),b *= s,e *= s))),c = -r,f = q;else {if(!(D || C || 1 !== G || M || L))return void (A[Ba] = (z.xPercent || z.yPercent?"translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(":"translate3d(") + H + "px," + I + "px," + J + "px)" + (1 !== E || 1 !== F?" scale(" + E + "," + F + ")":""));b = f = 1,c = e = 0;}j = 1,d = g = h = i = k = l = 0,m = M?-1 / M:0,o = z.zOrigin,p = 1e-6,v = ",",w = "0",B = D * K,B && (q = Math.cos(B),r = Math.sin(B),h = -r,k = m * -r,d = b * r,g = e * r,j = q,m *= q,b *= q,e *= q),B = C * K,B && (q = Math.cos(B),r = Math.sin(B),s = c * q + d * r,t = f * q + g * r,i = j * r,l = m * r,d = c * -r + d * q,g = f * -r + g * q,j *= q,m *= q,c = s,f = t),1 !== G && (d *= G,g *= G,j *= G,m *= G),1 !== F && (c *= F,f *= F,i *= F,l *= F),1 !== E && (b *= E,e *= E,h *= E,k *= E),(o || L) && (o && (H += d * -o,I += g * -o,J += j * -o + o),L && (H += z.xOrigin - (z.xOrigin * b + z.yOrigin * c) + z.xOffset,I += z.yOrigin - (z.xOrigin * e + z.yOrigin * f) + z.yOffset),p > H && H > -p && (H = w),p > I && I > -p && (I = w),p > J && J > -p && (J = 0)),u = z.xPercent || z.yPercent?"translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(":"matrix3d(",u += (p > b && b > -p?w:b) + v + (p > e && e > -p?w:e) + v + (p > h && h > -p?w:h),u += v + (p > k && k > -p?w:k) + v + (p > c && c > -p?w:c) + v + (p > f && f > -p?w:f),C || D || 1 !== G?(u += v + (p > i && i > -p?w:i) + v + (p > l && l > -p?w:l) + v + (p > d && d > -p?w:d),u += v + (p > g && g > -p?w:g) + v + (p > j && j > -p?w:j) + v + (p > m && m > -p?w:m) + v):u += ",0,0,0,0,1,0,",u += H + v + I + v + J + v + (M?1 + -J / M:1) + ")",A[Ba] = u;};j = Fa.prototype,j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0,j.scaleX = j.scaleY = j.scaleZ = 1,xa("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function parser(a,b,c,d,f,h,i){if(d._lastParsedTransform === i)return f;d._lastParsedTransform = i;var j;"function" == typeof i[c] && (j = i[c],i[c] = b);var k,l,m,n,o,p,s,t,u,v=a._gsTransform,w=a.style,x=1e-6,y=Aa.length,z=i,A={},B="transformOrigin",C=Pa(a,e,!0,z.parseTransform),D=z.transform && ("function" == typeof z.transform?z.transform(r,q):z.transform);if((d._transform = C,D && "string" == typeof D && Ba))l = P.style,l[Ba] = D,l.display = "block",l.position = "absolute",N.body.appendChild(P),k = Pa(P,null,!1),C.svg && (p = C.xOrigin,s = C.yOrigin,k.x -= C.xOffset,k.y -= C.yOffset,(z.transformOrigin || z.svgOrigin) && (D = {},Ka(a,ga(z.transformOrigin),D,z.svgOrigin,z.smoothOrigin,!0),p = D.xOrigin,s = D.yOrigin,k.x -= D.xOffset - C.xOffset,k.y -= D.yOffset - C.yOffset),(p || s) && (t = Oa(P,!0),k.x -= p - (p * t[0] + s * t[2]),k.y -= s - (p * t[1] + s * t[3]))),N.body.removeChild(P),k.perspective || (k.perspective = C.perspective),null != z.xPercent && (k.xPercent = ia(z.xPercent,C.xPercent)),null != z.yPercent && (k.yPercent = ia(z.yPercent,C.yPercent));else if("object" == typeof z){if((k = {scaleX:ia(null != z.scaleX?z.scaleX:z.scale,C.scaleX),scaleY:ia(null != z.scaleY?z.scaleY:z.scale,C.scaleY),scaleZ:ia(z.scaleZ,C.scaleZ),x:ia(z.x,C.x),y:ia(z.y,C.y),z:ia(z.z,C.z),xPercent:ia(z.xPercent,C.xPercent),yPercent:ia(z.yPercent,C.yPercent),perspective:ia(z.transformPerspective,C.perspective)},o = z.directionalRotation,null != o))if("object" == typeof o)for(l in o) z[l] = o[l];else z.rotation = o;"string" == typeof z.x && -1 !== z.x.indexOf("%") && (k.x = 0,k.xPercent = ia(z.x,C.xPercent)),"string" == typeof z.y && -1 !== z.y.indexOf("%") && (k.y = 0,k.yPercent = ia(z.y,C.yPercent)),k.rotation = ja("rotation" in z?z.rotation:"shortRotation" in z?z.shortRotation + "_short":"rotationZ" in z?z.rotationZ:C.rotation - C.skewY,C.rotation - C.skewY,"rotation",A),Ea && (k.rotationX = ja("rotationX" in z?z.rotationX:"shortRotationX" in z?z.shortRotationX + "_short":C.rotationX || 0,C.rotationX,"rotationX",A),k.rotationY = ja("rotationY" in z?z.rotationY:"shortRotationY" in z?z.shortRotationY + "_short":C.rotationY || 0,C.rotationY,"rotationY",A)),k.skewX = ja(z.skewX,C.skewX - C.skewY),(k.skewY = ja(z.skewY,C.skewY)) && (k.skewX += k.skewY,k.rotation += k.skewY);}for(Ea && null != z.force3D && (C.force3D = z.force3D,n = !0),C.skewType = z.skewType || C.skewType || g.defaultSkewType,m = C.force3D || C.z || C.rotationX || C.rotationY || k.z || k.rotationX || k.rotationY || k.perspective,m || null == z.scale || (k.scaleZ = 1);--y > -1;) u = Aa[y],D = k[u] - C[u],(D > x || -x > D || null != z[u] || null != M[u]) && (n = !0,f = new sa(C,u,C[u],D,f),u in A && (f.e = A[u]),f.xs0 = 0,f.plugin = h,d._overwriteProps.push(f.n));return D = z.transformOrigin,C.svg && (D || z.svgOrigin) && (p = C.xOffset,s = C.yOffset,Ka(a,ga(D),k,z.svgOrigin,z.smoothOrigin),f = ta(C,"xOrigin",(v?C:k).xOrigin,k.xOrigin,f,B),f = ta(C,"yOrigin",(v?C:k).yOrigin,k.yOrigin,f,B),(p !== C.xOffset || s !== C.yOffset) && (f = ta(C,"xOffset",v?p:C.xOffset,C.xOffset,f,B),f = ta(C,"yOffset",v?s:C.yOffset,C.yOffset,f,B)),D = za?null:"0px 0px"),(D || Ea && m && C.zOrigin) && (Ba?(n = !0,u = Da,D = (D || $(a,u,e,!1,"50% 50%")) + "",f = new sa(w,u,0,0,f,-1,B),f.b = w[u],f.plugin = h,Ea?(l = C.zOrigin,D = D.split(" "),C.zOrigin = (D.length > 2 && (0 === l || "0px" !== D[2])?parseFloat(D[2]):l) || 0,f.xs0 = f.e = D[0] + " " + (D[1] || "50%") + " 0px",f = new sa(C,"zOrigin",0,0,f,-1,f.n),f.b = l,f.xs0 = f.e = C.zOrigin):f.xs0 = f.e = D):ga(D + "",C)),n && (d._transformType = C.svg && za || !m && 3 !== this._transformType?2:3),j && (i[c] = j),f;},prefix:!0}),xa("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),xa("borderRadius",{defaultValue:"0px",parser:function parser(a,b,c,f,g,h){b = this.format(b);var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],z=a.style;for(q = parseFloat(a.offsetWidth),r = parseFloat(a.offsetHeight),i = b.split(" "),j = 0;j < y.length;j++) this.p.indexOf("border") && (y[j] = Y(y[j])),m = l = $(a,y[j],e,!1,"0px"),-1 !== m.indexOf(" ") && (l = m.split(" "),m = l[0],l = l[1]),n = k = i[j],o = parseFloat(m),t = m.substr((o + "").length),u = "=" === n.charAt(1),u?(p = parseInt(n.charAt(0) + "1",10),n = n.substr(2),p *= parseFloat(n),s = n.substr((p + "").length - (0 > p?1:0)) || ""):(p = parseFloat(n),s = n.substr((p + "").length)),"" === s && (s = d[c] || t),s !== t && (v = _(a,"borderLeft",o,t),w = _(a,"borderTop",o,t),"%" === s?(m = v / q * 100 + "%",l = w / r * 100 + "%"):"em" === s?(x = _(a,"borderLeft",1,"em"),m = v / x + "em",l = w / x + "em"):(m = v + "px",l = w + "px"),u && (n = parseFloat(m) + p + s,k = parseFloat(l) + p + s)),g = ua(z,y[j],m + " " + l,n + " " + k,!1,"0px",g);return g;},prefix:!0,formatter:pa("0px 0px 0px 0px",!1,!0)}),xa("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function parser(a,b,c,d,f,g){return ua(a.style,c,this.format($(a,c,e,!1,"0px 0px")),this.format(b),!1,"0px",f);},prefix:!0,formatter:pa("0px 0px",!1,!0)}),xa("backgroundPosition",{defaultValue:"0 0",parser:function parser(a,b,c,d,f,g){var h,i,j,k,l,m,n="background-position",o=e || Z(a,null),q=this.format((o?p?o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y"):o.getPropertyValue(n):a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),r=this.format(b);if(-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && r.split(",").length < 2 && (m = $(a,"backgroundImage").replace(D,""),m && "none" !== m)){for(h = q.split(" "),i = r.split(" "),Q.setAttribute("src",m),j = 2;--j > -1;) q = h[j],k = -1 !== q.indexOf("%"),k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j?a.offsetWidth - Q.width:a.offsetHeight - Q.height,h[j] = k?parseFloat(q) / 100 * l + "px":parseFloat(q) / l * 100 + "%");q = h.join(" ");}return this.parseComplex(a.style,q,r,f,g);},formatter:ga}),xa("backgroundSize",{defaultValue:"0 0",formatter:function formatter(a){return a += "",ga(-1 === a.indexOf(" ")?a + " " + a:a);}}),xa("perspective",{defaultValue:"0px",prefix:!0}),xa("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),xa("transformStyle",{prefix:!0}),xa("backfaceVisibility",{prefix:!0}),xa("userSelect",{prefix:!0}),xa("margin",{parser:qa("marginTop,marginRight,marginBottom,marginLeft")}),xa("padding",{parser:qa("paddingTop,paddingRight,paddingBottom,paddingLeft")}),xa("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function parser(a,b,c,d,f,g){var h,i,j;return 9 > p?(i = a.currentStyle,j = 8 > p?" ":",",h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")",b = this.format(b).split(",").join(j)):(h = this.format($(a,this.p,e,!1,this.dflt)),b = this.format(b)),this.parseComplex(a.style,h,b,f,g);}}),xa("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),xa("autoRound,strictUnits",{parser:function parser(a,b,c,d,e){return e;}}),xa("border",{defaultValue:"0px solid #000",parser:function parser(a,b,c,d,f,g){var h=$(a,"borderTopWidth",e,!1,"0px"),i=this.format(b).split(" "),j=i[0].replace(w,"");return "px" !== j && (h = parseFloat(h) / _(a,"borderTopWidth",1,j) + j),this.parseComplex(a.style,this.format(h + " " + $(a,"borderTopStyle",e,!1,"solid") + " " + $(a,"borderTopColor",e,!1,"#000")),i.join(" "),f,g);},color:!0,formatter:function formatter(a){var b=a.split(" ");return b[0] + " " + (b[1] || "solid") + " " + (a.match(oa) || ["#000"])[0];}}),xa("borderWidth",{parser:qa("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),xa("float,cssFloat,styleFloat",{parser:function parser(a,b,c,d,e,f){var g=a.style,h="cssFloat" in g?"cssFloat":"styleFloat";return new sa(g,h,0,0,e,-1,c,!1,0,g[h],b);}});var Sa=function Sa(a){var b,c=this.t,d=c.filter || $(this.data,"filter") || "",e=this.s + this.c * a | 0;100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(")?(c.removeAttribute("filter"),b = !$(this.data,"filter")):(c.filter = d.replace(z,""),b = !0)),b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"),-1 === d.indexOf("pacity")?0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")"):c.filter = d.replace(x,"opacity=" + e));};xa("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function parser(a,b,c,d,f,g){var h=parseFloat($(a,"opacity",e,!1,"1")),i=a.style,j="autoAlpha" === c;return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0)?-1:1) * parseFloat(b.substr(2)) + h),j && 1 === h && "hidden" === $(a,"visibility",e) && 0 !== b && (h = 0),T?f = new sa(i,"opacity",h,b - h,f):(f = new sa(i,"opacity",100 * h,100 * (b - h),f),f.xn1 = j?1:0,i.zoom = 1,f.type = 2,f.b = "alpha(opacity=" + f.s + ")",f.e = "alpha(opacity=" + (f.s + f.c) + ")",f.data = a,f.plugin = g,f.setRatio = Sa),j && (f = new sa(i,"visibility",0,0,f,-1,null,!1,0,0 !== h?"inherit":"hidden",0 === b?"hidden":"inherit"),f.xs0 = "inherit",d._overwriteProps.push(f.n),d._overwriteProps.push(c)),f;}});var Ta=function Ta(a,b){b && (a.removeProperty?(("ms" === b.substr(0,2) || "webkit" === b.substr(0,6)) && (b = "-" + b),a.removeProperty(b.replace(B,"-$1").toLowerCase())):a.removeAttribute(b));},Ua=function Ua(a){if((this.t._gsClassPT = this,1 === a || 0 === a)){this.t.setAttribute("class",0 === a?this.b:this.e);for(var b=this.data,c=this.t.style;b;) b.v?c[b.p] = b.v:Ta(c,b.p),b = b._next;1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null);}else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class",this.e);};xa("className",{parser:function parser(a,b,d,f,g,h,i){var j,k,l,m,n,o=a.getAttribute("class") || "",p=a.style.cssText;if((g = f._classNamePT = new sa(a,d,0,0,g,2),g.setRatio = Ua,g.pr = -11,c = !0,g.b = o,k = ba(a,e),l = a._gsClassPT)){for(m = {},n = l.data;n;) m[n.p] = 1,n = n._next;l.setRatio(1);}return a._gsClassPT = g,g.e = "=" !== b.charAt(1)?b:o.replace(new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"),"") + ("+" === b.charAt(0)?" " + b.substr(2):""),a.setAttribute("class",g.e),j = ca(a,k,ba(a),i,m),a.setAttribute("class",o),g.data = j.firstMPT,a.style.cssText = p,g = g.xfirst = f.parse(a,j.difs,g,h);}});var Va=function Va(a){if((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data){var b,c,d,e,f,g=this.t.style,h=i.transform.parse;if("all" === this.e)g.cssText = "",e = !0;else for(b = this.e.split(" ").join("").split(","),d = b.length;--d > -1;) c = b[d],i[c] && (i[c].parse === h?e = !0:c = "transformOrigin" === c?Da:i[c].p),Ta(g,c);e && (Ta(g,Ba),f = this.t._gsTransform,f && (f.svg && (this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform));}};for(xa("clearProps",{parser:function parser(a,b,d,e,f){return f = new sa(a,d,0,0,f,2),f.setRatio = Va,f.e = b,f.pr = -10,f.data = e._tween,c = !0,f;}}),j = "bezier,throwProps,physicsProps,physics2D".split(","),va = j.length;va--;) ya(j[va]);j = g.prototype,j._firstPT = j._lastParsedTransform = j._transform = null,j._onInitTween = function(a,b,h,j){if(!a.nodeType)return !1;this._target = q = a,this._tween = h,this._vars = b,r = j,k = b.autoRound,c = !1,d = b.suffixMap || g.suffixMap,e = Z(a,""),f = this._overwriteProps;var n,p,s,t,u,v,w,x,z,A=a.style;if((l && "" === A.zIndex && (n = $(a,"zIndex",e),("auto" === n || "" === n) && this._addLazySet(A,"zIndex",0)),"string" == typeof b && (t = A.cssText,n = ba(a,e),A.cssText = t + ";" + b,n = ca(a,n,ba(a)).difs,!T && y.test(b) && (n.opacity = parseFloat(RegExp.$1)),b = n,A.cssText = t),b.className?this._firstPT = p = i.className.parse(a,b.className,"className",this,null,null,b):this._firstPT = p = this.parse(a,b,null),this._transformType)){for(z = 3 === this._transformType,Ba?m && (l = !0,"" === A.zIndex && (w = $(a,"zIndex",e),("auto" === w || "" === w) && this._addLazySet(A,"zIndex",0)),o && this._addLazySet(A,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility || (z?"visible":"hidden"))):A.zoom = 1,s = p;s && s._next;) s = s._next;x = new sa(a,"transform",0,0,null,2),this._linkCSSP(x,null,s),x.setRatio = Ba?Ra:Qa,x.data = this._transform || Pa(a,e,!0),x.tween = h,x.pr = -1,f.pop();}if(c){for(;p;) {for(v = p._next,s = t;s && s.pr > p.pr;) s = s._next;(p._prev = s?s._prev:u)?p._prev._next = p:t = p,(p._next = s)?s._prev = p:u = p,p = v;}this._firstPT = t;}return !0;},j.parse = function(a,b,c,f){var g,h,j,l,m,n,o,p,s,t,u=a.style;for(g in b) n = b[g],"function" == typeof n && (n = n(r,q)),h = i[g],h?c = h.parse(a,n,g,this,c,f,b):(m = $(a,g,e) + "",s = "string" == typeof n,"color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || s && A.test(n)?(s || (n = ma(n),n = (n.length > 3?"rgba(":"rgb(") + n.join(",") + ")"),c = ua(u,g,m,n,!0,"transparent",c,0,f)):s && J.test(n)?c = ua(u,g,m,n,!0,null,c,0,f):(j = parseFloat(m),o = j || 0 === j?m.substr((j + "").length):"",("" === m || "auto" === m) && ("width" === g || "height" === g?(j = fa(a,g,e),o = "px"):"left" === g || "top" === g?(j = aa(a,g,e),o = "px"):(j = "opacity" !== g?0:1,o = "")),t = s && "=" === n.charAt(1),t?(l = parseInt(n.charAt(0) + "1",10),n = n.substr(2),l *= parseFloat(n),p = n.replace(w,"")):(l = parseFloat(n),p = s?n.replace(w,""):""),"" === p && (p = g in d?d[g]:o),n = l || 0 === l?(t?l + j:l) + p:b[g],o !== p && "" !== p && (l || 0 === l) && j && (j = _(a,g,j,o),"%" === p?(j /= _(a,g,100,"%") / 100,b.strictUnits !== !0 && (m = j + "%")):"em" === p || "rem" === p || "vw" === p || "vh" === p?j /= _(a,g,1,p):"px" !== p && (l = _(a,g,l,p),p = "px"),t && (l || 0 === l) && (n = l + j + p)),t && (l += j),!j && 0 !== j || !l && 0 !== l?void 0 !== u[g] && (n || n + "" != "NaN" && null != n)?(c = new sa(u,g,l || j || 0,0,c,-1,g,!1,0,m,n),c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style")?n:m):V("invalid " + g + " tween value: " + b[g]):(c = new sa(u,g,j,l - j,c,0,g,k !== !1 && ("px" === p || "zIndex" === g),0,m,n),c.xs0 = p))),f && c && !c.plugin && (c.plugin = f);return c;},j.setRatio = function(a){var b,c,d,e=this._firstPT,f=1e-6;if(1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)if(a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)for(;e;) {if((b = e.c * a + e.s,e.r?b = Math.round(b):f > b && b > -f && (b = 0),e.type))if(1 === e.type)if((d = e.l,2 === d))e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;else if(3 === d)e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;else if(4 === d)e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;else if(5 === d)e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;else {for(c = e.xs0 + b + e.xs1,d = 1;d < e.l;d++) c += e["xn" + d] + e["xs" + (d + 1)];e.t[e.p] = c;}else -1 === e.type?e.t[e.p] = e.xs0:e.setRatio && e.setRatio(a);else e.t[e.p] = b + e.xs0;e = e._next;}else for(;e;) 2 !== e.type?e.t[e.p] = e.b:e.setRatio(a),e = e._next;else for(;e;) {if(2 !== e.type)if(e.r && -1 !== e.type)if((b = Math.round(e.s + e.c),e.type)){if(1 === e.type){for(d = e.l,c = e.xs0 + b + e.xs1,d = 1;d < e.l;d++) c += e["xn" + d] + e["xs" + (d + 1)];e.t[e.p] = c;}}else e.t[e.p] = b + e.xs0;else e.t[e.p] = e.e;else e.setRatio(a);e = e._next;}},j._enableTransforms = function(a){this._transform = this._transform || Pa(this._target,e,!0),this._transformType = this._transform.svg && za || !a && 3 !== this._transformType?2:3;};var Wa=function Wa(a){this.t[this.p] = this.e,this.data._linkCSSP(this,this._next,null,!0);};j._addLazySet = function(a,b,c){var d=this._firstPT = new sa(a,b,0,0,this._firstPT,2);d.e = c,d.setRatio = Wa,d.data = this;},j._linkCSSP = function(a,b,c,d){return a && (b && (b._prev = a),a._next && (a._next._prev = a._prev),a._prev?a._prev._next = a._next:this._firstPT === a && (this._firstPT = a._next,d = !0),c?c._next = a:d || null !== this._firstPT || (this._firstPT = a),a._next = b,a._prev = c),a;},j._mod = function(a){for(var b=this._firstPT;b;) "function" == typeof a[b.p] && a[b.p] === Math.round && (b.r = 1),b = b._next;},j._kill = function(b){var c,d,e,f=b;if(b.autoAlpha || b.alpha){f = {};for(d in b) f[d] = b[d];f.opacity = 1,f.autoAlpha && (f.visibility = 1);}for(b.className && (c = this._classNamePT) && (e = c.xfirst,e && e._prev?this._linkCSSP(e._prev,c._next,e._prev._prev):e === this._firstPT && (this._firstPT = c._next),c._next && this._linkCSSP(c._next,c._next._next,e._prev),this._classNamePT = null),c = this._firstPT;c;) c.plugin && c.plugin !== d && c.plugin._kill && (c.plugin._kill(b),d = c.plugin),c = c._next;return a.prototype._kill.call(this,f);};var Xa=function Xa(a,b,c){var d,e,f,g;if(a.slice)for(e = a.length;--e > -1;) Xa(a[e],b,c);else for(d = a.childNodes,e = d.length;--e > -1;) f = d[e],g = f.type,f.style && (b.push(ba(f)),c && c.push(f)),1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Xa(f,b,c);};return g.cascadeTo = function(a,c,d){var e,f,g,h,i=b.to(a,c,d),j=[i],k=[],l=[],m=[],n=b._internals.reservedProps;for(a = i._targets || i.target,Xa(a,k,m),i.render(c,!0,!0),Xa(a,l),i.render(0,!0,!0),i._enabled(!0),e = m.length;--e > -1;) if((f = ca(m[e],k[e],l[e]),f.firstMPT)){f = f.difs;for(g in d) n[g] && (f[g] = d[g]);h = {};for(g in f) h[g] = k[e][g];j.push(b.fromTo(m[e],c,h,f));}return j;},a.activate([g]),g;},!0),(function(){var a=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.6.0",priority:-1,API:2,init:function init(a,b,c){return this._tween = c,!0;}}),b=function b(a){for(;a;) a.f || a.blob || (a.m = Math.round),a = a._next;},c=a.prototype;c._onInitAllProps = function(){for(var a,c,d,e=this._tween,f=e.vars.roundProps.join?e.vars.roundProps:e.vars.roundProps.split(","),g=f.length,h={},i=e._propLookup.roundProps;--g > -1;) h[f[g]] = Math.round;for(g = f.length;--g > -1;) for(a = f[g],c = e._firstPT;c;) d = c._next,c.pg?c.t._mod(h):c.n === a && (2 === c.f && c.t?b(c.t._firstPT):(this._add(c.t,a,c.s,c.c),d && (d._prev = c._prev),c._prev?c._prev._next = d:e._firstPT === c && (e._firstPT = d),c._next = c._prev = null,e._propLookup[a] = i)),c = d;return !1;},c._add = function(a,b,c,d){this._addTween(a,b,c,c + d,b,Math.round),this._overwriteProps.push(b);};})(),(function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.6.0",init:function init(a,b,c,d){var e,f;if("function" != typeof a.setAttribute)return !1;for(e in b) f = b[e],"function" == typeof f && (f = f(d,a)),this._addTween(a,"setAttribute",a.getAttribute(e) + "",f + "",e,!1,e),this._overwriteProps.push(e);return !0;}});})(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.3.0",API:2,init:function init(a,b,c,d){"object" != typeof b && (b = {rotation:b}),this.finals = {};var e,f,g,h,i,j,k=b.useRadians === !0?2 * Math.PI:360,l=1e-6;for(e in b) "useRadians" !== e && (h = b[e],"function" == typeof h && (h = h(d,a)),j = (h + "").split("_"),f = j[0],g = parseFloat("function" != typeof a[e]?a[e]:a[e.indexOf("set") || "function" != typeof a["get" + e.substr(3)]?e:"get" + e.substr(3)]()),h = this.finals[e] = "string" == typeof f && "=" === f.charAt(1)?g + parseInt(f.charAt(0) + "1",10) * Number(f.substr(2)):Number(f) || 0,i = h - g,j.length && (f = j.join("_"),-1 !== f.indexOf("short") && (i %= k,i !== i % (k / 2) && (i = 0 > i?i + k:i - k)),-1 !== f.indexOf("_cw") && 0 > i?i = (i + 9999999999 * k) % k - (i / k | 0) * k:-1 !== f.indexOf("ccw") && i > 0 && (i = (i - 9999999999 * k) % k - (i / k | 0) * k)),(i > l || -l > i) && (this._addTween(a,e,g,g + i,e),this._overwriteProps.push(e)));return !0;},set:function set(a){var b;if(1 !== a)this._super.setRatio.call(this,a);else for(b = this._firstPT;b;) b.f?b.t[b.p](this.finals[b.p]):b.t[b.p] = this.finals[b.p],b = b._next;}})._autoCSS = !0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(a){var b,c,d,e=_gsScope.GreenSockGlobals || _gsScope,f=e.com.greensock,g=2 * Math.PI,h=Math.PI / 2,i=f._class,j=function j(b,c){var d=i("easing." + b,function(){},!0),e=d.prototype = new a();return e.constructor = d,e.getRatio = c,d;},k=a.register || function(){},l=function l(a,b,c,d,e){var f=i("easing." + a,{easeOut:new b(),easeIn:new c(),easeInOut:new d()},!0);return k(f,a),f;},m=function m(a,b,c){this.t = a,this.v = b,c && (this.next = c,c.prev = this,this.c = c.v - b,this.gap = c.t - a);},n=function n(b,c){var d=i("easing." + b,function(a){this._p1 = a || 0 === a?a:1.70158,this._p2 = 1.525 * this._p1;},!0),e=d.prototype = new a();return e.constructor = d,e.getRatio = c,e.config = function(a){return new d(a);},d;},o=l("Back",n("BackOut",function(a){return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1;}),n("BackIn",function(a){return a * a * ((this._p1 + 1) * a - this._p1);}),n("BackInOut",function(a){return (a *= 2) < 1?.5 * a * a * ((this._p2 + 1) * a - this._p2):.5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2);})),p=i("easing.SlowMo",function(a,b,c){b = b || 0 === b?b:.7,null == a?a = .7:a > 1 && (a = 1),this._p = 1 !== a?b:0,this._p1 = (1 - a) / 2,this._p2 = a,this._p3 = this._p1 + this._p2,this._calcEnd = c === !0;},!0),q=p.prototype = new a();return q.constructor = p,q.getRatio = function(a){var b=a + (.5 - a) * this._p;return a < this._p1?this._calcEnd?1 - (a = 1 - a / this._p1) * a:b - (a = 1 - a / this._p1) * a * a * a * b:a > this._p3?this._calcEnd?1 - (a = (a - this._p3) / this._p1) * a:b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a:this._calcEnd?1:b;},p.ease = new p(.7,.7),q.config = p.config = function(a,b,c){return new p(a,b,c);},b = i("easing.SteppedEase",function(a){a = a || 1,this._p1 = 1 / a,this._p2 = a + 1;},!0),q = b.prototype = new a(),q.constructor = b,q.getRatio = function(a){return 0 > a?a = 0:a >= 1 && (a = .999999999),(this._p2 * a >> 0) * this._p1;},q.config = b.config = function(a){return new b(a);},c = i("easing.RoughEase",function(b){b = b || {};for(var c,d,e,f,g,h,i=b.taper || "none",j=[],k=0,l=0 | (b.points || 20),n=l,o=b.randomize !== !1,p=b.clamp === !0,q=b.template instanceof a?b.template:null,r="number" == typeof b.strength?.4 * b.strength:.4;--n > -1;) c = o?Math.random():1 / l * n,d = q?q.getRatio(c):c,"none" === i?e = r:"out" === i?(f = 1 - c,e = f * f * r):"in" === i?e = c * c * r:.5 > c?(f = 2 * c,e = f * f * .5 * r):(f = 2 * (1 - c),e = f * f * .5 * r),o?d += Math.random() * e - .5 * e:n % 2?d += .5 * e:d -= .5 * e,p && (d > 1?d = 1:0 > d && (d = 0)),j[k++] = {x:c,y:d};for(j.sort(function(a,b){return a.x - b.x;}),h = new m(1,1,null),n = l;--n > -1;) g = j[n],h = new m(g.x,g.y,h);this._prev = new m(0,0,0 !== h.t?h:h.next);},!0),q = c.prototype = new a(),q.constructor = c,q.getRatio = function(a){var b=this._prev;if(a > b.t){for(;b.next && a >= b.t;) b = b.next;b = b.prev;}else for(;b.prev && a <= b.t;) b = b.prev;return this._prev = b,b.v + (a - b.t) / b.gap * b.c;},q.config = function(a){return new c(a);},c.ease = new c(),l("Bounce",j("BounceOut",function(a){return 1 / 2.75 > a?7.5625 * a * a:2 / 2.75 > a?7.5625 * (a -= 1.5 / 2.75) * a + .75:2.5 / 2.75 > a?7.5625 * (a -= 2.25 / 2.75) * a + .9375:7.5625 * (a -= 2.625 / 2.75) * a + .984375;}),j("BounceIn",function(a){return (a = 1 - a) < 1 / 2.75?1 - 7.5625 * a * a:2 / 2.75 > a?1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75):2.5 / 2.75 > a?1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375):1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375);}),j("BounceInOut",function(a){var b=.5 > a;return a = b?1 - 2 * a:2 * a - 1,a = 1 / 2.75 > a?7.5625 * a * a:2 / 2.75 > a?7.5625 * (a -= 1.5 / 2.75) * a + .75:2.5 / 2.75 > a?7.5625 * (a -= 2.25 / 2.75) * a + .9375:7.5625 * (a -= 2.625 / 2.75) * a + .984375,b?.5 * (1 - a):.5 * a + .5;})),l("Circ",j("CircOut",function(a){return Math.sqrt(1 - (a -= 1) * a);}),j("CircIn",function(a){return -(Math.sqrt(1 - a * a) - 1);}),j("CircInOut",function(a){return (a *= 2) < 1?-.5 * (Math.sqrt(1 - a * a) - 1):.5 * (Math.sqrt(1 - (a -= 2) * a) + 1);})),d = function(b,c,d){var e=i("easing." + b,function(a,b){this._p1 = a >= 1?a:1,this._p2 = (b || d) / (1 > a?a:1),this._p3 = this._p2 / g * (Math.asin(1 / this._p1) || 0),this._p2 = g / this._p2;},!0),f=e.prototype = new a();return f.constructor = e,f.getRatio = c,f.config = function(a,b){return new e(a,b);},e;},l("Elastic",d("ElasticOut",function(a){return this._p1 * Math.pow(2,-10 * a) * Math.sin((a - this._p3) * this._p2) + 1;},.3),d("ElasticIn",function(a){return -(this._p1 * Math.pow(2,10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2));},.3),d("ElasticInOut",function(a){return (a *= 2) < 1?-.5 * (this._p1 * Math.pow(2,10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2)):this._p1 * Math.pow(2,-10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) * .5 + 1;},.45)),l("Expo",j("ExpoOut",function(a){return 1 - Math.pow(2,-10 * a);}),j("ExpoIn",function(a){return Math.pow(2,10 * (a - 1)) - .001;}),j("ExpoInOut",function(a){return (a *= 2) < 1?.5 * Math.pow(2,10 * (a - 1)):.5 * (2 - Math.pow(2,-10 * (a - 1)));})),l("Sine",j("SineOut",function(a){return Math.sin(a * h);}),j("SineIn",function(a){return -Math.cos(a * h) + 1;}),j("SineInOut",function(a){return -.5 * (Math.cos(Math.PI * a) - 1);})),i("easing.EaseLookup",{find:function find(b){return a.map[b];}},!0),k(e.SlowMo,"SlowMo","ease,"),k(c,"RoughEase","ease,"),k(b,"SteppedEase","ease,"),o;},!0);}),_gsScope._gsDefine && _gsScope._gsQueue.pop()(),(function(a,b){"use strict";var c={},d=a.GreenSockGlobals = a.GreenSockGlobals || a;if(!d.TweenLite){var e,f,g,h,i,j=function j(a){var b,c=a.split("."),e=d;for(b = 0;b < c.length;b++) e[c[b]] = e = e[c[b]] || {};return e;},k=j("com.greensock"),l=1e-10,m=function m(a){var b,c=[],d=a.length;for(b = 0;b !== d;c.push(a[b++]));return c;},n=function n(){},o=(function(){var a=Object.prototype.toString,b=a.call([]);return function(c){return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b);};})(),p={},q=function q(e,f,g,h){this.sc = p[e]?p[e].sc:[],p[e] = this,this.gsClass = null,this.func = g;var i=[];this.check = function(k){for(var l,m,n,o,r,s=f.length,t=s;--s > -1;) (l = p[f[s]] || new q(f[s],[])).gsClass?(i[s] = l.gsClass,t--):k && l.sc.push(this);if(0 === t && g){if((m = ("com.greensock." + e).split("."),n = m.pop(),o = j(m.join("."))[n] = this.gsClass = g.apply(g,i),h))if((d[n] = c[n] = o,r = "undefined" != typeof module && module.exports,!r && "function" == "function" && __webpack_require__(11)))!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return o;}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if(r)if(e === b){module.exports = c[b] = o;for(s in c) o[s] = c[s];}else c[b] && (c[b][n] = o);for(s = 0;s < this.sc.length;s++) this.sc[s].check();}},this.check(!0);},r=a._gsDefine = function(a,b,c,d){return new q(a,b,c,d);},s=k._class = function(a,b,c){return b = b || function(){},r(a,[],function(){return b;},c),b;};r.globals = d;var t=[0,0,1,1],u=s("easing.Ease",function(a,b,c,d){this._func = a,this._type = c || 0,this._power = d || 0,this._params = b?t.concat(b):t;},!0),v=u.map = {},w=u.register = function(a,b,c,d){for(var e,f,g,h,i=b.split(","),j=i.length,l=(c || "easeIn,easeOut,easeInOut").split(",");--j > -1;) for(f = i[j],e = d?s("easing." + f,null,!0):k.easing[f] || {},g = l.length;--g > -1;) h = l[g],v[f + "." + h] = v[h + f] = e[h] = a.getRatio?a:a[h] || new a();};for(g = u.prototype,g._calcEnd = !1,g.getRatio = function(a){if(this._func)return this._params[0] = a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1 === b?1 - a:2 === b?a:.5 > a?2 * a:2 * (1 - a);return 1 === c?d *= d:2 === c?d *= d * d:3 === c?d *= d * d * d:4 === c && (d *= d * d * d * d),1 === b?1 - d:2 === b?d:.5 > a?d / 2:1 - d / 2;},e = ["Linear","Quad","Cubic","Quart","Quint,Strong"],f = e.length;--f > -1;) g = e[f] + ",Power" + f,w(new u(null,null,1,f),g,"easeOut",!0),w(new u(null,null,2,f),g,"easeIn" + (0 === f?",easeNone":"")),w(new u(null,null,3,f),g,"easeInOut");v.linear = k.easing.Linear.easeIn,v.swing = k.easing.Quad.easeInOut;var x=s("events.EventDispatcher",function(a){this._listeners = {},this._eventTarget = a || this;});g = x.prototype,g.addEventListener = function(a,b,c,d,e){e = e || 0;var f,g,j=this._listeners[a],k=0;for(this !== h || i || h.wake(),null == j && (this._listeners[a] = j = []),g = j.length;--g > -1;) f = j[g],f.c === b && f.s === c?j.splice(g,1):0 === k && f.pr < e && (k = g + 1);j.splice(k,0,{c:b,s:c,up:d,pr:e});},g.removeEventListener = function(a,b){var c,d=this._listeners[a];if(d)for(c = d.length;--c > -1;) if(d[c].c === b)return void d.splice(c,1);},g.dispatchEvent = function(a){var b,c,d,e=this._listeners[a];if(e)for(b = e.length,b > 1 && (e = e.slice(0)),c = this._eventTarget;--b > -1;) d = e[b],d && (d.up?d.c.call(d.s || c,{type:a,target:c}):d.c.call(d.s || c));};var y=a.requestAnimationFrame,z=a.cancelAnimationFrame,A=Date.now || function(){return new Date().getTime();},B=A();for(e = ["ms","moz","webkit","o"],f = e.length;--f > -1 && !y;) y = a[e[f] + "RequestAnimationFrame"],z = a[e[f] + "CancelAnimationFrame"] || a[e[f] + "CancelRequestAnimationFrame"];s("Ticker",function(a,b){var c,d,e,f,g,j=this,k=A(),m=b !== !1 && y?"auto":!1,o=500,p=33,q="tick",r=function r(a){var b,h,i=A() - B;i > o && (k += i - p),B += i,j.time = (B - k) / 1e3,b = j.time - g,(!c || b > 0 || a === !0) && (j.frame++,g += b + (b >= f?.004:f - b),h = !0),a !== !0 && (e = d(r)),h && j.dispatchEvent(q);};x.call(j),j.time = j.frame = 0,j.tick = function(){r(!0);},j.lagSmoothing = function(a,b){o = a || 1 / l,p = Math.min(b,o,0);},j.sleep = function(){null != e && (m && z?z(e):clearTimeout(e),d = n,e = null,j === h && (i = !1));},j.wake = function(a){null !== e?j.sleep():a?k += -B + (B = A()):j.frame > 10 && (B = A() - o + 5),d = 0 === c?n:m && y?y:function(a){return setTimeout(a,1e3 * (g - j.time) + 1 | 0);},j === h && (i = !0),r(2);},j.fps = function(a){return arguments.length?(c = a,f = 1 / (c || 60),g = this.time + f,void j.wake()):c;},j.useRAF = function(a){return arguments.length?(j.sleep(),m = a,void j.fps(c)):m;},j.fps(a),setTimeout(function(){"auto" === m && j.frame < 5 && "hidden" !== document.visibilityState && j.useRAF(!1);},1500);}),g = k.Ticker.prototype = new k.events.EventDispatcher(),g.constructor = k.Ticker;var C=s("core.Animation",function(a,b){if((this.vars = b = b || {},this._duration = this._totalDuration = a || 0,this._delay = Number(b.delay) || 0,this._timeScale = 1,this._active = b.immediateRender === !0,this.data = b.data,this._reversed = b.reversed === !0,V)){i || h.wake();var c=this.vars.useFrames?U:V;c.add(this,c._time),this.vars.paused && this.paused(!0);}});h = C.ticker = new k.Ticker(),g = C.prototype,g._dirty = g._gc = g._initted = g._paused = !1,g._totalTime = g._time = 0,g._rawPrevTime = -1,g._next = g._last = g._onUpdate = g._timeline = g.timeline = null,g._paused = !1;var D=function D(){i && A() - B > 2e3 && h.wake(),setTimeout(D,2e3);};D(),g.play = function(a,b){return null != a && this.seek(a,b),this.reversed(!1).paused(!1);},g.pause = function(a,b){return null != a && this.seek(a,b),this.paused(!0);},g.resume = function(a,b){return null != a && this.seek(a,b),this.paused(!1);},g.seek = function(a,b){return this.totalTime(Number(a),b !== !1);},g.restart = function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b !== !1,!0);},g.reverse = function(a,b){return null != a && this.seek(a || this.totalDuration(),b),this.reversed(!0).paused(!1);},g.render = function(a,b,c){},g.invalidate = function(){return this._time = this._totalTime = 0,this._initted = this._gc = !1,this._rawPrevTime = -1,(this._gc || !this.timeline) && this._enabled(!0),this;},g.isActive = function(){var a,b=this._timeline,c=this._startTime;return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime()) >= c && a < c + this.totalDuration() / this._timeScale;},g._enabled = function(a,b){return i || h.wake(),this._gc = !a,this._active = this.isActive(),b !== !0 && (a && !this.timeline?this._timeline.add(this,this._startTime - this._delay):!a && this.timeline && this._timeline._remove(this,!0)),!1;},g._kill = function(a,b){return this._enabled(!1,!1);},g.kill = function(a,b){return this._kill(a,b),this;},g._uncache = function(a){for(var b=a?this:this.timeline;b;) b._dirty = !0,b = b.timeline;return this;},g._swapSelfInParams = function(a){for(var b=a.length,c=a.concat();--b > -1;) "{self}" === a[b] && (c[b] = this);return c;},g._callback = function(a){var b=this.vars,c=b[a],d=b[a + "Params"],e=b[a + "Scope"] || b.callbackScope || this,f=d?d.length:0;switch(f){case 0:c.call(e);break;case 1:c.call(e,d[0]);break;case 2:c.call(e,d[0],d[1]);break;default:c.apply(e,d);}},g.eventCallback = function(a,b,c,d){if("on" === (a || "").substr(0,2)){var e=this.vars;if(1 === arguments.length)return e[a];null == b?delete e[a]:(e[a] = b,e[a + "Params"] = o(c) && -1 !== c.join("").indexOf("{self}")?this._swapSelfInParams(c):c,e[a + "Scope"] = d),"onUpdate" === a && (this._onUpdate = b);}return this;},g.delay = function(a){return arguments.length?(this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay),this._delay = a,this):this._delay;},g.duration = function(a){return arguments.length?(this._duration = this._totalDuration = a,this._uncache(!0),this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration),!0),this):(this._dirty = !1,this._duration);},g.totalDuration = function(a){return this._dirty = !1,arguments.length?this.duration(a):this._totalDuration;},g.time = function(a,b){return arguments.length?(this._dirty && this.totalDuration(),this.totalTime(a > this._duration?this._duration:a,b)):this._time;},g.totalTime = function(a,b,c){if((i || h.wake(),!arguments.length))return this._totalTime;if(this._timeline){if((0 > a && !c && (a += this.totalDuration()),this._timeline.smoothChildTiming)){this._dirty && this.totalDuration();var d=this._totalDuration,e=this._timeline;if((a > d && !c && (a = d),this._startTime = (this._paused?this._pauseTime:e._time) - (this._reversed?d - a:a) / this._timeScale,e._dirty || this._uncache(!1),e._timeline))for(;e._timeline;) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime,!0),e = e._timeline;}this._gc && this._enabled(!0,!1),(this._totalTime !== a || 0 === this._duration) && (I.length && X(),this.render(a,b,!1),I.length && X());}return this;},g.progress = g.totalProgress = function(a,b){var c=this.duration();return arguments.length?this.totalTime(c * a,b):c?this._time / c:this.ratio;},g.startTime = function(a){return arguments.length?(a !== this._startTime && (this._startTime = a,this.timeline && this.timeline._sortChildren && this.timeline.add(this,a - this._delay)),this):this._startTime;},g.endTime = function(a){return this._startTime + (0 != a?this.totalDuration():this.duration()) / this._timeScale;},g.timeScale = function(a){if(!arguments.length)return this._timeScale;if((a = a || l,this._timeline && this._timeline.smoothChildTiming)){var b=this._pauseTime,c=b || 0 === b?b:this._timeline.totalTime();this._startTime = c - (c - this._startTime) * this._timeScale / a;}return this._timeScale = a,this._uncache(!1);},g.reversed = function(a){return arguments.length?(a != this._reversed && (this._reversed = a,this.totalTime(this._timeline && !this._timeline.smoothChildTiming?this.totalDuration() - this._totalTime:this._totalTime,!0)),this):this._reversed;},g.paused = function(a){if(!arguments.length)return this._paused;var b,c,d=this._timeline;return a != this._paused && d && (i || a || h.wake(),b = d.rawTime(),c = b - this._pauseTime,!a && d.smoothChildTiming && (this._startTime += c,this._uncache(!1)),this._pauseTime = a?b:null,this._paused = a,this._active = this.isActive(),!a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming?this._totalTime:(b - this._startTime) / this._timeScale,this.render(b,b === this._totalTime,!0))),this._gc && !a && this._enabled(!0,!1),this;};var E=s("core.SimpleTimeline",function(a){C.call(this,0,a),this.autoRemoveChildren = this.smoothChildTiming = !0;});g = E.prototype = new C(),g.constructor = E,g.kill()._gc = !1,g._first = g._last = g._recent = null,g._sortChildren = !1,g.add = g.insert = function(a,b,c,d){var e,f;if((a._startTime = Number(b || 0) + a._delay,a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale),a.timeline && a.timeline._remove(a,!0),a.timeline = a._timeline = this,a._gc && a._enabled(!0,!0),e = this._last,this._sortChildren))for(f = a._startTime;e && e._startTime > f;) e = e._prev;return e?(a._next = e._next,e._next = a):(a._next = this._first,this._first = a),a._next?a._next._prev = a:this._last = a,a._prev = e,this._recent = a,this._timeline && this._uncache(!0),this;},g._remove = function(a,b){return a.timeline === this && (b || a._enabled(!1,!0),a._prev?a._prev._next = a._next:this._first === a && (this._first = a._next),a._next?a._next._prev = a._prev:this._last === a && (this._last = a._prev),a._next = a._prev = a.timeline = null,a === this._recent && (this._recent = this._last),this._timeline && this._uncache(!0)),this;},g.render = function(a,b,c){var d,e=this._first;for(this._totalTime = this._time = this._rawPrevTime = a;e;) d = e._next,(e._active || a >= e._startTime && !e._paused) && (e._reversed?e.render((e._dirty?e.totalDuration():e._totalDuration) - (a - e._startTime) * e._timeScale,b,c):e.render((a - e._startTime) * e._timeScale,b,c)),e = d;},g.rawTime = function(){return i || h.wake(),this._totalTime;};var F=s("TweenLite",function(b,c,d){if((C.call(this,c,d),this.render = F.prototype.render,null == b))throw "Cannot tween a null target.";this.target = b = "string" != typeof b?b:F.selector(b) || b;var e,f,g,h=b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType),i=this.vars.overwrite;if((this._overwrite = i = null == i?T[F.defaultOverwrite]:"number" == typeof i?i >> 0:T[i],(h || b instanceof Array || b.push && o(b)) && "number" != typeof b[0]))for(this._targets = g = m(b),this._propLookup = [],this._siblings = [],e = 0;e < g.length;e++) f = g[e],f?"string" != typeof f?f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType)?(g.splice(e--,1),this._targets = g = g.concat(m(f))):(this._siblings[e] = Y(f,this,!1),1 === i && this._siblings[e].length > 1 && $(f,this,null,1,this._siblings[e])):(f = g[e--] = F.selector(f),"string" == typeof f && g.splice(e + 1,1)):g.splice(e--,1);else this._propLookup = {},this._siblings = Y(b,this,!1),1 === i && this._siblings.length > 1 && $(b,this,null,1,this._siblings);(this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -l,this.render(Math.min(0,-this._delay)));},!0),G=function G(b){return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType);},H=function H(a,b){var c,d={};for(c in a) S[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!P[c] || P[c] && P[c]._autoCSS) || (d[c] = a[c],delete a[c]);a.css = d;};g = F.prototype = new C(),g.constructor = F,g.kill()._gc = !1,g.ratio = 0,g._firstPT = g._targets = g._overwrittenProps = g._startAt = null,g._notifyPluginsOfEnabled = g._lazy = !1,F.version = "1.19.0",F.defaultEase = g._ease = new u(null,null,1,1),F.defaultOverwrite = "auto",F.ticker = h,F.autoSleep = 120,F.lagSmoothing = function(a,b){h.lagSmoothing(a,b);},F.selector = a.$ || a.jQuery || function(b){var c=a.$ || a.jQuery;return c?(F.selector = c,c(b)):"undefined" == typeof document?b:document.querySelectorAll?document.querySelectorAll(b):document.getElementById("#" === b.charAt(0)?b.substr(1):b);};var I=[],J={},K=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,L=function L(a){for(var b,c=this._firstPT,d=1e-6;c;) b = c.blob?a?this.join(""):this.start:c.c * a + c.s,c.m?b = c.m(b,this._target || c.t):d > b && b > -d && (b = 0),c.f?c.fp?c.t[c.p](c.fp,b):c.t[c.p](b):c.t[c.p] = b,c = c._next;},M=function M(a,b,c,d){var e,f,g,h,i,j,k,l=[a,b],m=0,n="",o=0;for(l.start = a,c && (c(l),a = l[0],b = l[1]),l.length = 0,e = a.match(K) || [],f = b.match(K) || [],d && (d._next = null,d.blob = 1,l._firstPT = l._applyPT = d),i = f.length,h = 0;i > h;h++) k = f[h],j = b.substr(m,b.indexOf(k,m) - m),n += j || !h?j:",",m += j.length,o?o = (o + 1) % 5:"rgba(" === j.substr(-5) && (o = 1),k === e[h] || e.length <= h?n += k:(n && (l.push(n),n = ""),g = parseFloat(e[h]),l.push(g),l._firstPT = {_next:l._firstPT,t:l,p:l.length - 1,s:g,c:("=" === k.charAt(1)?parseInt(k.charAt(0) + "1",10) * parseFloat(k.substr(2)):parseFloat(k) - g) || 0,f:0,m:o && 4 > o?Math.round:0}),m += k.length;return n += b.substr(m),n && l.push(n),l.setRatio = L,l;},N=function N(a,b,c,d,e,f,g,h,i){"function" == typeof d && (d = d(i || 0,a));var j,k,l="get" === c?a[b]:c,m=typeof a[b],n="string" == typeof d && "=" === d.charAt(1),o={t:a,p:b,s:l,f:"function" === m,pg:0,n:e || b,m:f?"function" == typeof f?f:Math.round:0,pr:0,c:n?parseInt(d.charAt(0) + "1",10) * parseFloat(d.substr(2)):parseFloat(d) - l || 0};return "number" !== m && ("function" === m && "get" === c && (k = b.indexOf("set") || "function" != typeof a["get" + b.substr(3)]?b:"get" + b.substr(3),o.s = l = g?a[k](g):a[k]()),"string" == typeof l && (g || isNaN(l))?(o.fp = g,j = M(l,d,h || F.defaultStringFilter,o),o = {t:j,p:"setRatio",s:0,c:1,f:2,pg:0,n:e || b,pr:0,m:0}):n || (o.s = parseFloat(l),o.c = parseFloat(d) - o.s || 0)),o.c?((o._next = this._firstPT) && (o._next._prev = o),this._firstPT = o,o):void 0;},O=F._internals = {isArray:o,isSelector:G,lazyTweens:I,blobDif:M},P=F._plugins = {},Q=O.tweenLookup = {},R=0,S=O.reservedProps = {ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1},T={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},U=C._rootFramesTimeline = new E(),V=C._rootTimeline = new E(),W=30,X=O.lazyRender = function(){var a,b=I.length;for(J = {};--b > -1;) a = I[b],a && a._lazy !== !1 && (a.render(a._lazy[0],a._lazy[1],!0),a._lazy = !1);I.length = 0;};V._startTime = h.time,U._startTime = h.frame,V._active = U._active = !0,setTimeout(X,1),C._updateRoot = F.render = function(){var a,b,c;if((I.length && X(),V.render((h.time - V._startTime) * V._timeScale,!1,!1),U.render((h.frame - U._startTime) * U._timeScale,!1,!1),I.length && X(),h.frame >= W)){W = h.frame + (parseInt(F.autoSleep,10) || 120);for(c in Q) {for(b = Q[c].tweens,a = b.length;--a > -1;) b[a]._gc && b.splice(a,1);0 === b.length && delete Q[c];}if((c = V._first,(!c || c._paused) && F.autoSleep && !U._first && 1 === h._listeners.tick.length)){for(;c && c._paused;) c = c._next;c || h.sleep();}}},h.addEventListener("tick",C._updateRoot);var Y=function Y(a,b,c){var d,e,f=a._gsTweenID;if((Q[f || (a._gsTweenID = f = "t" + R++)] || (Q[f] = {target:a,tweens:[]}),b && (d = Q[f].tweens,d[e = d.length] = b,c)))for(;--e > -1;) d[e] === b && d.splice(e,1);return Q[f].tweens;},Z=function Z(a,b,c,d){var e,f,g=a.vars.onOverwrite;return g && (e = g(a,b,c,d)),g = F.onOverwrite,g && (f = g(a,b,c,d)),e !== !1 && f !== !1;},$=function $(a,b,c,d,e){var f,g,h,i;if(1 === d || d >= 4){for(i = e.length,f = 0;i > f;f++) if((h = e[f]) !== b)h._gc || h._kill(null,a,b) && (g = !0);else if(5 === d)break;return g;}var j,k=b._startTime + l,m=[],n=0,o=0 === b._duration;for(f = e.length;--f > -1;) (h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline?(j = j || _(b,0,o),0 === _(h,j,o) && (m[n++] = h)):h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale > k && ((o || !h._initted) && k - h._startTime <= 2e-10 || (m[n++] = h)));for(f = n;--f > -1;) if((h = m[f],2 === d && h._kill(c,a,b) && (g = !0),2 !== d || !h._firstPT && h._initted)){if(2 !== d && !Z(h,b))continue;h._enabled(!1,!1) && (g = !0);}return g;},_=function _(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;) {if((f += d._startTime,e *= d._timeScale,d._paused))return -100;d = d._timeline;}return f /= e,f > b?f - b:c && f === b || !a._initted && 2 * l > f - b?l:(f += a.totalDuration() / a._timeScale / e) > b + l?0:f - b - l;};g._init = function(){var a,b,c,d,e,f,g=this.vars,h=this._overwrittenProps,i=this._duration,j=!!g.immediateRender,k=g.ease;if(g.startAt){this._startAt && (this._startAt.render(-1,!0),this._startAt.kill()),e = {};for(d in g.startAt) e[d] = g.startAt[d];if((e.overwrite = !1,e.immediateRender = !0,e.lazy = j && g.lazy !== !1,e.startAt = e.delay = null,this._startAt = F.to(this.target,0,e),j))if(this._time > 0)this._startAt = null;else if(0 !== i)return;}else if(g.runBackwards && 0 !== i)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt = null;else {0 !== this._time && (j = !1),c = {};for(d in g) S[d] && "autoCSS" !== d || (c[d] = g[d]);if((c.overwrite = 0,c.data = "isFromStart",c.lazy = j && g.lazy !== !1,c.immediateRender = j,this._startAt = F.to(this.target,0,c),j)){if(0 === this._time)return;}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender && (this._startAt = null);}if((this._ease = k = k?k instanceof u?k:"function" == typeof k?new u(k,g.easeParams):v[k] || F.defaultEase:F.defaultEase,g.easeParams instanceof Array && k.config && (this._ease = k.config.apply(k,g.easeParams)),this._easeType = this._ease._type,this._easePower = this._ease._power,this._firstPT = null,this._targets))for(f = this._targets.length,a = 0;f > a;a++) this._initProps(this._targets[a],this._propLookup[a] = {},this._siblings[a],h?h[a]:null,a) && (b = !0);else b = this._initProps(this.target,this._propLookup,this._siblings,h,0);if((b && F._onPluginEvent("_onInitAllProps",this),h && (this._firstPT || "function" != typeof this.target && this._enabled(!1,!1)),g.runBackwards))for(c = this._firstPT;c;) c.s += c.c,c.c = -c.c,c = c._next;this._onUpdate = g.onUpdate,this._initted = !0;},g._initProps = function(b,c,d,e,f){var g,h,i,j,k,l;if(null == b)return !1;J[b._gsTweenID] && X(),this.vars.css || b.style && b !== a && b.nodeType && P.css && this.vars.autoCSS !== !1 && H(this.vars,b);for(g in this.vars) if((l = this.vars[g],S[g]))l && (l instanceof Array || l.push && o(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = l = this._swapSelfInParams(l,this));else if(P[g] && (j = new P[g]())._onInitTween(b,this.vars[g],this,f)){for(this._firstPT = k = {_next:this._firstPT,t:j,p:"setRatio",s:0,c:1,f:1,n:g,pg:1,pr:j._priority,m:0},h = j._overwriteProps.length;--h > -1;) c[j._overwriteProps[h]] = this._firstPT;(j._priority || j._onInitAllProps) && (i = !0),(j._onDisable || j._onEnable) && (this._notifyPluginsOfEnabled = !0),k._next && (k._next._prev = k);}else c[g] = N.call(this,b,g,"get",l,g,0,null,this.vars.stringFilter,f);return e && this._kill(e,b)?this._initProps(b,c,d,e,f):this._overwrite > 1 && this._firstPT && d.length > 1 && $(b,this,c,this._overwrite,d)?(this._kill(c,b),this._initProps(b,c,d,e,f)):(this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (J[b._gsTweenID] = !0),i);},g.render = function(a,b,c){var d,e,f,g,h=this._time,i=this._duration,j=this._rawPrevTime;if(a >= i - 1e-7)this._totalTime = this._time = i,this.ratio = this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed || (d = !0,e = "onComplete",c = c || this._timeline.autoRemoveChildren),0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0),(0 > j || 0 >= a && a >= -1e-7 || j === l && "isPause" !== this.data) && j !== a && (c = !0,j > l && (e = "onReverseComplete")),this._rawPrevTime = g = !b || a || j === a?a:l);else if(1e-7 > a)this._totalTime = this._time = 0,this.ratio = this._ease._calcEnd?this._ease.getRatio(0):0,(0 !== h || 0 === i && j > 0) && (e = "onReverseComplete",d = this._reversed),0 > a && (this._active = !1,0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (j !== l || "isPause" !== this.data) && (c = !0),this._rawPrevTime = g = !b || a || j === a?a:l)),this._initted || (c = !0);else if((this._totalTime = this._time = a,this._easeType)){var k=a / i,m=this._easeType,n=this._easePower;(1 === m || 3 === m && k >= .5) && (k = 1 - k),3 === m && (k *= 2),1 === n?k *= k:2 === n?k *= k * k:3 === n?k *= k * k * k:4 === n && (k *= k * k * k * k),1 === m?this.ratio = 1 - k:2 === m?this.ratio = k:.5 > a / i?this.ratio = k / 2:this.ratio = 1 - k / 2;}else this.ratio = this._ease.getRatio(a / i);if(this._time !== h || c){if(!this._initted){if((this._init(),!this._initted || this._gc))return;if(!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))return this._time = this._totalTime = h,this._rawPrevTime = j,I.push(this),void (this._lazy = [a,b]);this._time && !d?this.ratio = this._ease.getRatio(this._time / i):d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time?0:1));}for(this._lazy !== !1 && (this._lazy = !1),this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0),0 === h && (this._startAt && (a >= 0?this._startAt.render(a,b,c):e || (e = "_dummyGS")),this.vars.onStart && (0 !== this._time || 0 === i) && (b || this._callback("onStart"))),f = this._firstPT;f;) f.f?f.t[f.p](f.c * this.ratio + f.s):f.t[f.p] = f.c * this.ratio + f.s,f = f._next;this._onUpdate && (0 > a && this._startAt && a !== -1e-4 && this._startAt.render(a,b,c),b || (this._time !== h || d || c) && this._callback("onUpdate")),e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && a !== -1e-4 && this._startAt.render(a,b,c),d && (this._timeline.autoRemoveChildren && this._enabled(!1,!1),this._active = !1),!b && this.vars[e] && this._callback(e),0 === i && this._rawPrevTime === l && g !== l && (this._rawPrevTime = 0));}},g._kill = function(a,b,c){if(("all" === a && (a = null),null == a && (null == b || b === this.target)))return this._lazy = !1,this._enabled(!1,!1);b = "string" != typeof b?b || this._targets || this.target:F.selector(b) || b;var d,e,f,g,h,i,j,k,l,m=c && this._time && c._startTime === this._startTime && this._timeline === c._timeline;if((o(b) || G(b)) && "number" != typeof b[0])for(d = b.length;--d > -1;) this._kill(a,b[d],c) && (i = !0);else {if(this._targets){for(d = this._targets.length;--d > -1;) if(b === this._targets[d]){h = this._propLookup[d] || {},this._overwrittenProps = this._overwrittenProps || [],e = this._overwrittenProps[d] = a?this._overwrittenProps[d] || {}:"all";break;}}else {if(b !== this.target)return !1;h = this._propLookup,e = this._overwrittenProps = a?this._overwrittenProps || {}:"all";}if(h){if((j = a || h,k = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill),c && (F.onOverwrite || this.vars.onOverwrite))){for(f in j) h[f] && (l || (l = []),l.push(f));if((l || !a) && !Z(this,c,b,l))return !1;}for(f in j) (g = h[f]) && (m && (g.f?g.t[g.p](g.s):g.t[g.p] = g.s,i = !0),g.pg && g.t._kill(j) && (i = !0),g.pg && 0 !== g.t._overwriteProps.length || (g._prev?g._prev._next = g._next:g === this._firstPT && (this._firstPT = g._next),g._next && (g._next._prev = g._prev),g._next = g._prev = null),delete h[f]),k && (e[f] = 1);!this._firstPT && this._initted && this._enabled(!1,!1);}}return i;},g.invalidate = function(){return this._notifyPluginsOfEnabled && F._onPluginEvent("_onDisable",this),this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null,this._notifyPluginsOfEnabled = this._active = this._lazy = !1,this._propLookup = this._targets?{}:[],C.prototype.invalidate.call(this),this.vars.immediateRender && (this._time = -l,this.render(Math.min(0,-this._delay))),this;},g._enabled = function(a,b){if((i || h.wake(),a && this._gc)){var c,d=this._targets;if(d)for(c = d.length;--c > -1;) this._siblings[c] = Y(d[c],this,!0);else this._siblings = Y(this.target,this,!0);}return C.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled && this._firstPT?F._onPluginEvent(a?"_onEnable":"_onDisable",this):!1;},F.to = function(a,b,c){return new F(a,b,c);},F.from = function(a,b,c){return c.runBackwards = !0,c.immediateRender = 0 != c.immediateRender,new F(a,b,c);},F.fromTo = function(a,b,c,d){return d.startAt = c,d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender,new F(a,b,d);},F.delayedCall = function(a,b,c,d,e){return new F(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,lazy:!1,useFrames:e,overwrite:0});},F.set = function(a,b){return new F(a,0,b);},F.getTweensOf = function(a,b){if(null == a)return [];a = "string" != typeof a?a:F.selector(a) || a;var c,d,e,f;if((o(a) || G(a)) && "number" != typeof a[0]){for(c = a.length,d = [];--c > -1;) d = d.concat(F.getTweensOf(a[c],b));for(c = d.length;--c > -1;) for(f = d[c],e = c;--e > -1;) f === d[e] && d.splice(c,1);}else for(d = Y(a).concat(),c = d.length;--c > -1;) (d[c]._gc || b && !d[c].isActive()) && d.splice(c,1);return d;},F.killTweensOf = F.killDelayedCallsTo = function(a,b,c){"object" == typeof b && (c = b,b = !1);for(var d=F.getTweensOf(a,b),e=d.length;--e > -1;) d[e]._kill(c,a);};var aa=s("plugins.TweenPlugin",function(a,b){this._overwriteProps = (a || "").split(","),this._propName = this._overwriteProps[0],this._priority = b || 0,this._super = aa.prototype;},!0);if((g = aa.prototype,aa.version = "1.19.0",aa.API = 2,g._firstPT = null,g._addTween = N,g.setRatio = L,g._kill = function(a){var b,c=this._overwriteProps,d=this._firstPT;if(null != a[this._propName])this._overwriteProps = [];else for(b = c.length;--b > -1;) null != a[c[b]] && c.splice(b,1);for(;d;) null != a[d.n] && (d._next && (d._next._prev = d._prev),d._prev?(d._prev._next = d._next,d._prev = null):this._firstPT === d && (this._firstPT = d._next)),d = d._next;return !1;},g._mod = g._roundProps = function(a){for(var b,c=this._firstPT;c;) b = a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")],b && "function" == typeof b && (2 === c.f?c.t._applyPT.m = b:c.m = b),c = c._next;},F._onPluginEvent = function(a,b){var c,d,e,f,g,h=b._firstPT;if("_onInitAllProps" === a){for(;h;) {for(g = h._next,d = e;d && d.pr > h.pr;) d = d._next;(h._prev = d?d._prev:f)?h._prev._next = h:e = h,(h._next = d)?d._prev = h:f = h,h = g;}h = b._firstPT = e;}for(;h;) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0),h = h._next;return c;},aa.activate = function(a){for(var b=a.length;--b > -1;) a[b].API === aa.API && (P[new a[b]()._propName] = a[b]);return !0;},r.plugin = function(a){if(!(a && a.propName && a.init && a.API))throw "illegal plugin definition.";var b,c=a.propName,d=a.priority || 0,e=a.overwriteProps,f={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},g=s("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin",function(){aa.call(this,c,d),this._overwriteProps = e || [];},a.global === !0),h=g.prototype = new aa(c);h.constructor = g,g.API = a.API;for(b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);return g.version = a.version,aa.activate([g]),g;},e = a._gsQueue)){for(f = 0;f < e.length;f++) e[f]();for(g in p) p[g].func || a.console.log("GSAP encountered missing dependency: " + g);}i = !1;}})("undefined" != typeof module && module.exports && "undefined" != typeof global?global:undefined || window,"TweenMax");
			/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

		/***/ },
	/* 11 */
	/***/ function(module, exports) {

		/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

			/* WEBPACK VAR INJECTION */}.call(exports, {}))

		/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
		 * jQuery.scrollTo
		 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
		 * Licensed under MIT
		 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
		 * @projectDescription Lightweight, cross-browser and highly customizable animated scrolling with jQuery
		 * @author Ariel Flesler
		 * @version 2.1.2
		 */
        'use strict';

        ;(function (factory) {
            'use strict';
            if (true) {
                // AMD
                !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(13)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } else if (typeof module !== 'undefined' && module.exports) {
                // CommonJS
                module.exports = factory(require('jquery'));
            } else {
                // Global
                factory(jQuery);
            }
        })(function ($) {
            'use strict';

            var $scrollTo = jQuery.scrollTo = function (target, duration, settings) {
                return $(window).scrollTo(target, duration, settings);
            };

            $scrollTo.defaults = {
                axis: 'xy',
                duration: 0,
                limit: true
            };

            function isWin(elem) {
                return !elem.nodeName || jQuery.inArray(elem.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']) !== -1;
            }

            jQuery.fn.scrollTo = function (target, duration, settings) {
                if (typeof duration === 'object') {
                    settings = duration;
                    duration = 0;
                }
                if (typeof settings === 'function') {
                    settings = { onAfter: settings };
                }
                if (target === 'max') {
                    target = 9e9;
                }

                settings = jQuery.extend({}, $scrollTo.defaults, settings);
                // Speed is still recognized for backwards compatibility
                duration = duration || settings.duration;
                // Make sure the settings are given right
                var queue = settings.queue && settings.axis.length > 1;
                if (queue) {
                    // Let's keep the overall duration
                    duration /= 2;
                }
                settings.offset = both(settings.offset);
                settings.over = both(settings.over);

                return this.each(function () {
                    // Null target yields nothing, just like jQuery does
                    if (target === null) return;

                    var win = isWin(this),
                        elem = win ? this.contentWindow || window : this,
                        $elem = jQuery(elem),
                        targ = target,
                        attr = {},
                        toff;

                    switch (typeof targ) {
                        // A number will pass the regex
                        case 'number':
                        case 'string':
                            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)) {
                                targ = both(targ);
                                // We are done
                                break;
                            }
                            // Relative/Absolute selector
                            targ = win ? jQuery(targ) : jQuery(targ, elem);
						/* falls through */
                        case 'object':
                            if (targ.length === 0) return;
                            // DOMElement / jQuery
                            if (targ.is || targ.style) {
                                // Get the real position of the target
                                toff = (targ = jQuery(targ)).offset();
                            }
                    }

                    var offset = jQuery.isFunction(settings.offset) && settings.offset(elem, targ) || settings.offset;

                    jQuery.each(settings.axis.split(''), function (i, axis) {
                        var Pos = axis === 'x' ? 'Left' : 'Top',
                            pos = Pos.toLowerCase(),
                            key = 'scroll' + Pos,
                            prev = $elem[key](),
                            max = $scrollTo.max(elem, axis);

                        if (toff) {
                            // jQuery / DOMElement
                            attr[key] = toff[pos] + (win ? 0 : prev - $elem.offset()[pos]);

                            // If it's a dom element, reduce the margin
                            if (settings.margin) {
                                attr[key] -= parseInt(targ.css('margin' + Pos), 10) || 0;
                                attr[key] -= parseInt(targ.css('border' + Pos + 'Width'), 10) || 0;
                            }

                            attr[key] += offset[pos] || 0;

                            if (settings.over[pos]) {
                                // Scroll to a fraction of its width/height
                                attr[key] += targ[axis === 'x' ? 'width' : 'height']() * settings.over[pos];
                            }
                        } else {
                            var val = targ[pos];
                            // Handle percentage values
                            attr[key] = val.slice && val.slice(-1) === '%' ? parseFloat(val) / 100 * max : val;
                        }

                        // Number or 'number'
                        if (settings.limit && /^\d+$/.test(attr[key])) {
                            // Check the limits
                            attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max);
                        }

                        // Don't waste time animating, if there's no need.
                        if (!i && settings.axis.length > 1) {
                            if (prev === attr[key]) {
                                // No animation needed
                                attr = {};
                            } else if (queue) {
                                // Intermediate animation
                                animate(settings.onAfterFirst);
                                // Don't animate this axis again in the next iteration.
                                attr = {};
                            }
                        }
                    });

                    animate(settings.onAfter);

                    function animate(callback) {
                        var opts = jQuery.extend({}, settings, {
                            // The queue setting conflicts with animate()
                            // Force it to always be true
                            queue: true,
                            duration: duration,
                            complete: callback && function () {
                                callback.call(elem, targ, settings);
                            }
                        });
                        $elem.animate(attr, opts);
                    }
                });
            };

            // Max scrolling position, works on quirks mode
            // It only fails (not too badly) on IE, quirks mode.
            $scrollTo.max = function (elem, axis) {
                var Dim = axis === 'x' ? 'Width' : 'Height',
                    scroll = 'scroll' + Dim;

                if (!isWin(elem)) return elem[scroll] - jQuery(elem)[Dim.toLowerCase()]();

                var size = 'client' + Dim,
                    doc = elem.ownerDocument || elem.document,
                    html = doc.documentElement,
                    body = doc.body;

                return Math.max(html[scroll], body[scroll]) - Math.min(html[size], body[size]);
            };

            function both(val) {
                return jQuery.isFunction(val) || jQuery.isPlainObject(val) ? val : { top: val, left: val };
            }

            // Add special hooks so that window scroll properties can be animated
            jQuery.Tween.propHooks.scrollLeft = jQuery.Tween.propHooks.scrollTop = {
                get: function get(t) {
                    return jQuery(t.elem)[t.prop]();
                },
                set: function set(t) {
                    var curr = this.get(t);
                    // If interrupt is true and user scrolled, stop animating
                    if (t.options.interrupt && t._last && t._last !== curr) {
                        return jQuery(t.elem).stop();
                    }
                    var next = Math.round(t.now);
                    // Don't waste CPU
                    // Browsers don't render floating point scroll
                    if (curr !== next) {
                        jQuery(t.elem)[t.prop](next);
                        t._last = this.get(t);
                    }
                }
            };

            // AMD requirement
            return $scrollTo;
        });

		/***/ },
	/* 13 */
	/***/ function(module, exports) {

        module.exports = jQuery;

		/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {


        // --
        // USAGE
        // --
        //
        // data-component="test-component data-component-options='{"message":"test"}'
        //
        // "message" A message that will be alerted on click
        //

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

        var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

        var _systemAbstract = __webpack_require__(8);

        var _systemAbstract2 = _interopRequireDefault(_systemAbstract);

        var Component_FormFloatLabel = (function (_Abstract2) {
            _inherits(Component_FormFloatLabel, _Abstract2);

            function Component_FormFloatLabel(el, options) {
                _classCallCheck(this, Component_FormFloatLabel);

                _get(Object.getPrototypeOf(Component_FormFloatLabel.prototype), "constructor", this).call(this, el, jQuery.extend(true, {
                    "message": "Example Component Message Default"
                }, options), 'component');

                this.initialise();
            }

            _createClass(Component_FormFloatLabel, [{
                key: "bindEvents",
                value: function bindEvents() {
                    var _this = this;

                    this.$el.on('floatLabel:reinit', function () {
                        _this.initialise();
                    });
                }
            }, {
                key: "initialise",
                value: function initialise() {
                    //this.expander();
                    jQuery('.c-from__control').on('focus blur', function (e) {
                        jQuery(this).parents('.c-form__group').toggleClass('-label--focused', e.type === 'focus' || this.value.length > 0);
                    }).trigger('blur');
                }

                //expander()
                //{
                //    jQuery('.c-form__expander .expander-trigger').click(function(){
                //        jQuery(this).toggleClass("expander-hidden");
                //    });
                //}

            }]);

            return Component_FormFloatLabel;
        })(_systemAbstract2["default"]);

        exports["default"] = Component_FormFloatLabel;
        module.exports = exports["default"];

		/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

        var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

        var _systemAbstract = __webpack_require__(8);

        var _systemAbstract2 = _interopRequireDefault(_systemAbstract);

        var Component_Header = (function (_Abstract2) {
            _inherits(Component_Header, _Abstract2);

            function Component_Header(el, options) {
                _classCallCheck(this, Component_Header);

                _get(Object.getPrototypeOf(Component_Header.prototype), "constructor", this).call(this, el, jQuery.extend(true, {
                    "message": "Example Component Message Default"
                }, options), 'component');

                this.searchFlag = false;
                this.initialise();
            }

            _createClass(Component_Header, [{
                key: "initialise",
                value: function initialise() {
                    this.initialiseListeners();
                    //if(jQuery('body').hasClass('desktop')){
                    //this.scrollCheck();
                    //}
                }
            }, {
                key: "initialiseListeners",
                value: function initialiseListeners() {
                    var _this = this;

                    this.$el.on('click', '.m-header__hamburger', function (e) {
                        return _this.onClickHamburger(e);
                    });
                    this.$el.on('click', '.m-offcanvas__overlay', function (e) {
                        return _this.onClickHamburger(e);
                    });
                    this.$el.on('click', '#search_button', function (e) {
                        return _this.onClickSearch(e);
                    });
                    this.$el.on('keypress', '#search_input', function (e) {
                        return _this.onSubmitSearch(e);
                    });
                    //jQuery(window).scroll((e) => this.scrollCheck(e));
                }
            }, {
                key: "onClickHamburger",
                value: function onClickHamburger(e) {
                    e.preventDefault();
                    if (jQuery('#offcanvas').hasClass('is-opened')) {
                        this.close();
                    } else {
                        this.open();
                    }
                }
            }, {
                key: "onClickSearch",
                value: function onClickSearch(e) {
                    var input = jQuery('#search_input');

                    if (this.searchFlag == false) {
                        jQuery('#search_input').css('display', 'block');
                        this.searchFlag = true;
                    } else {
                        if (input.val() != '') {
                            window.location = '/search?searchtext=' + input.val();
                        } else {
                            jQuery('#search_input').css('display', 'none');
                            this.searchFlag = false;
                        }
                    }
                }
            }, {
                key: "onSubmitSearch",
                value: function onSubmitSearch(e) {

                    if (e.which == 13) {
                        //enter
                        e.preventDefault();
                        if (e.currentTarget['value'] != '') {
                            window.location = '/search?searchtext=' + e.currentTarget['value'];
                        }
                        return false;
                    }
                }
            }, {
                key: "open",
                value: function open() {
                    jQuery('body, html').addClass('m-offcanvas-is-open');
                    jQuery('#offcanvas').addClass('is-opened');
                    jQuery('.m-header__hamburger').addClass('-close');
                    if (jQuery('.subpage').length > 0) {
                        jQuery('#offcanvas').css('left', '0');
                    } else {
                        jQuery('#offcanvas').css('left', '-50%');
                    }
                }
            }, {
                key: "close",
                value: function close() {
                    jQuery('body, html').removeClass('m-offcanvas-is-open');
                    jQuery('#offcanvas').removeClass('is-opened');
                    jQuery('.m-header__hamburger').removeClass('-close');
                }
            }]);

            return Component_Header;
        })(_systemAbstract2["default"]);

        exports["default"] = Component_Header;
        module.exports = exports["default"];

		/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

        var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

        var _systemAbstract = __webpack_require__(8);

        var _systemAbstract2 = _interopRequireDefault(_systemAbstract);

        var Component_Hero = (function (_Abstract2) {
            _inherits(Component_Hero, _Abstract2);

            function Component_Hero(el, options) {
                _classCallCheck(this, Component_Hero);

                _get(Object.getPrototypeOf(Component_Hero.prototype), "constructor", this).call(this, el, jQuery.extend(true, {
                    "message": "Example Component Message Default"
                }, options), 'component');

                this.$el = jQuery(el), this.lastScrollY, this.scheduledAnimationFrame, this.nav = jQuery('.header--fixed.headroom');
                this.subnav = jQuery('.m-header__subnav');
                this.screenHeight = jQuery(window).height();
                this.cta = this.$el.find('.m-hero__intro-cta');
                this.introText = this.$el.find('.m-hero__intro-text');
                this.coverVideo = jQuery('.covervid-video')[0];

                this.initialise();
            }

            _createClass(Component_Hero, [{
                key: "initialise",
                value: function initialise() {
                    __webpack_require__(17);
                    __webpack_require__(18);
                    __webpack_require__(10);
                    __webpack_require__(19);
                    __webpack_require__(20);

                    this.initialiseListeners();
                    this.firstLoad();
                }
            }, {
                key: "initialiseListeners",
                value: function initialiseListeners() {
                    var _this = this;

                    var $this = this;
                    jQuery(window).scroll(function (e) {
                        return _this.onScrolling(e);
                    });
                    jQuery(window).resize(function (e) {
                        return _this.onResize(e);
                    });
                    this.$el.on('click', '.m-hero__trigger-scroll', function (e) {
                        return _this.onTriggerScroll(e);
                    });

                    var videoLock = false;
                    if (jQuery(this.coverVideo).length > 0) {
                        jQuery('.covervid-video').coverVid(1920, 1080);
                        jQuery('.covervid-video').on("timeupdate", function () {

                            if (jQuery('.covervid-video')[0].currentTime >= 1 && videoLock == false) {
                                videoLock = true;
                                jQuery('.covervid-video').addClass('visible');
                            }
                        });
                    }

                    setInterval(function () {
                        if ($this.scheduledAnimationFrame) {
                            $this.scheduledAnimationFrame = false;
                            $this.doThisStuffOnScroll();
                        }
                    }, 100);
                }
            }, {
                key: "onScrolling",
                value: function onScrolling(e) {
                    this.scheduledAnimationFrame = true;
                }
            }, {
                key: "doThisStuffOnScroll",
                value: function doThisStuffOnScroll(e) {

                    var body = jQuery('body');
                    var header = document.getElementById('header');
                    var headerHeight = header ? header.clientHeight : 0;
                    var banner = document.getElementById('top-banner');
                    var bannerHeight = banner ? banner.clientHeight : 0;
                    var s = jQuery(window).scrollTop();
                    var h = this.screenHeight;
                    var f = h - (s + bannerHeight);


                    TweenLite.to('#hero', 0.4, { height: f, ease: Cubic.easeOut });

                    if (s > headerHeight + (window.innerWidth < 1023 ? bannerHeight : 0)) {
                        this.cta.removeClass('-show');
                        //TweenLite.set(this.nav, { y: '-60%' });
                        //this.subnav.css('background-color', 'rgb(0,0,0)');
                        if (jQuery(this.coverVideo).length > 0) {
                            if (!this.coverVideo.paused) {
                                this.coverVideo.pause();
                            }
                        }
                    } else {
                        //TweenLite.set(this.nav, { y: '0%' });
                        //this.subnav.css('background-color', 'rgba(0,0,0,0.5)');
                        this.cta.addClass('-show');
                        if (jQuery(this.coverVideo).length > 0) {
                            if (this.coverVideo.paused) {
                                this.coverVideo.play();
                            }
                        }
                    }
                    if(s<150){
                        jQuery("#fixed-image").css({"transform": "translate(-7%, 0%) translate3d(0px, 0px, 0px) scale(0.8, 0.8)"});

                    }
                    if (banner) {
                        if (s > bannerHeight - 20) {
                            if (body.hasClass('fixed-head')) {
                                body.removeClass('fixed-head');
                            }
                        } else {
                            if (!body.hasClass('fixed-head')) {
                                body.addClass('fixed-head');
                            }
                        }
                    } else {
                        if (body.hasClass('fixed-head')) {
                            body.removeClass('fixed-head');
                        }
                    }
                }
            }, {
                key: "onTriggerScroll",
                value: function onTriggerScroll(e) {
                    e.preventDefault();
                    var href = e.currentTarget.attributes['href'].nodeValue;
                    var h = jQuery(href).offset().top;
                    jQuery("html, body").animate({ scrollTop: h }, 1000);
                }
            }, {
                key: "introAnimation",
                value: function introAnimation() {
                    var $this = this;
                    setTimeout(function () {
                        $this.introText.addClass('-show');
                        $this.cta.addClass('-show');
                    }, 1000);
                }
            }, {
                key: "firstLoad",
                value: function firstLoad() {
                    var context = this;

                    jQuery(this.$el).imagesLoaded().done(function (instance) {
                        var tl = new TimelineMax();
                        tl.to(context.$el, 1, { opacity: 1 });
                        context.introAnimation();
                        context.onScrolling();
                    }).fail(function () {
                    }).progress(function (instance, image) {
                        var result = image.isLoaded ? 'loaded' : 'broken';
                    });
                }
            }, {
                key: "onResize",
                value: function onResize() {
                    this.screenHeight = jQuery(window).height();
                    this.doThisStuffOnScroll();
                }
            }]);

            return Component_Hero;
        })(_systemAbstract2["default"]);

        exports["default"] = Component_Hero;
        module.exports = exports["default"];

		/***/ },
	/* 17 */
	/***/ function(module, exports) {

        'use strict';

        var _coverVid = function _coverVid(elem, width, height) {

            // call sizeVideo on load
            sizeVideo();

            // debounce for resize function
            function debounce(fn, delay) {
                var timer = null;

                return function () {
                    var context = this,
                        args = arguments;

                    window.clearTimeout(timer);

                    timer = window.setTimeout(function () {
                        fn.apply(context, args);
                    }, delay);
                };
            }
            // call sizeVideo on resize
            window.addEventListener('resize', debounce(sizeVideo, 50));

            // Set necessary styles to position video "center center"
            elem.style.position = 'absolute';
            elem.style.top = '50%';
            // elem.style.left = '50%';
            elem.style['-webkit-transform'] = 'translate(-50%, -50%)';
            elem.style['-ms-transform'] = 'translate(-50%, -50%)';
            elem.style.transform = 'translate(-50%, -50%)';

            // Set overflow hidden on parent element
            elem.parentNode.style.overflow = 'hidden';

            // Get image defined on poster attribute of video
            var posterImage = elem.getAttribute('poster');

            // Remove poster to disable
            elem.removeAttribute('poster');

            // Set poster image as a background cover image on parent element
            elem.parentNode.style.backgroundImage = 'url(' + posterImage + ')';
            elem.parentNode.style.backgroundSize = 'cover';
            elem.parentNode.style.backgroundPosition = 'center center';

            // Define the attached selector
            function sizeVideo() {

                // Get parent element height and width
                var parentHeight = elem.parentNode.offsetHeight;
                var parentWidth = elem.parentNode.offsetWidth;

                // Get native video width and height
                var nativeWidth = width;
                var nativeHeight = height;

                // Get the scale factors
                var heightScaleFactor = parentHeight / nativeHeight;
                var widthScaleFactor = parentWidth / nativeWidth;

                // ------- 	original -------
                // Based on highest scale factor set width and height
                // if (widthScaleFactor > heightScaleFactor) {
                // 	elem.style.height = 'auto';
                // 	elem.style.width = parentWidth+'px';
                // } else {
                // 	elem.style.height = parentHeight+'px';
                // 	elem.style.width = 'auto';
                // }

                // ------- 	ammends -------

                if (parentWidth > nativeWidth) {
                    elem.style.height = 'auto';
                    elem.style.width = '100%';
                    elem.style.minHeight = parentHeight + 'px';
                } else {
                    elem.style.height = 'auto';
                    elem.style.width = '100%';
                    // to maintian scale when scrolled down
                    elem.style.minWidth = parentWidth + 'px';
                    elem.style.minHeight = parentHeight + 'px';

                    // var eleActualWidth = (jQuery(window).height() / nativeHeight) * nativeWidth;
                    // var centerVideoAlign = ((eleActualWidth - jQuery(window).width()) / 2) * -1;

                    // console.log('begin log');
                    // console.log(centerVideoAlign);

                    // elem.style.left = centerVideoAlign+'px';
                }

                // ------- 	end ammends -------
            }

            // Check for video support
            var supportsVideo = typeof elem.canPlayType != 'undefined' ? true : false;

            // Check if mobile
            var isMobile = false;
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;

            // Remove video if not supported or mobile
            if (!supportsVideo || isMobile) {
                elem && elem.parentNode && elem.parentNode.removeChild(elem);
            }
        };

        if (window.jQuery) {
            jQuery.fn.extend({
                'coverVid': function coverVid() {
                    _coverVid(this[0], arguments[0], arguments[1]);
                    return this;
                }
            });
        }

		/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*!
		 * VERSION: 1.19.0
		 * DATE: 2016-07-16
		 * UPDATES AND DOCS AT: http://greensock.com
		 *
		 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
		 * This work is subject to the terms at http://greensock.com/standard-license or for
		 * Club GreenSock members, the software agreement that was issued with your membership.
		 *
		 * @author: Jack Doyle, jack@greensock.com
		 */
            "use strict";

            !(function (a, b) {
                "use strict";var c = {},
                    d = a.GreenSockGlobals = a.GreenSockGlobals || a;if (!d.TweenLite) {
                    var e,
                        f,
                        g,
                        h,
                        i,
                        j = function j(a) {
                            var b,
                                c = a.split("."),
                                e = d;for (b = 0; b < c.length; b++) e[c[b]] = e = e[c[b]] || {};return e;
                        },
                        k = j("com.greensock"),
                        l = 1e-10,
                        m = function m(a) {
                            var b,
                                c = [],
                                d = a.length;for (b = 0; b !== d; c.push(a[b++]));return c;
                        },
                        n = function n() {},
                        o = (function () {
                            var a = Object.prototype.toString,
                                b = a.call([]);return function (c) {
                                return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b);
                            };
                        })(),
                        p = {},
                        q = function q(e, f, g, h) {
                            this.sc = p[e] ? p[e].sc : [], p[e] = this, this.gsClass = null, this.func = g;var i = [];this.check = function (k) {
                                for (var l, m, n, o, r, s = f.length, t = s; --s > -1;) (l = p[f[s]] || new q(f[s], [])).gsClass ? (i[s] = l.gsClass, t--) : k && l.sc.push(this);if (0 === t && g) {
                                    if ((m = ("com.greensock." + e).split("."), n = m.pop(), o = j(m.join("."))[n] = this.gsClass = g.apply(g, i), h)) if ((d[n] = c[n] = o, r = "undefined" != typeof module && module.exports, !r && "function" == "function" && __webpack_require__(11))) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
                                        return o;
                                    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if (r) if (e === b) {
                                        module.exports = c[b] = o;for (s in c) o[s] = c[s];
                                    } else c[b] && (c[b][n] = o);for (s = 0; s < this.sc.length; s++) this.sc[s].check();
                                }
                            }, this.check(!0);
                        },
                        r = a._gsDefine = function (a, b, c, d) {
                            return new q(a, b, c, d);
                        },
                        s = k._class = function (a, b, c) {
                            return b = b || function () {}, r(a, [], function () {
                                return b;
                            }, c), b;
                        };r.globals = d;var t = [0, 0, 1, 1],
                        u = s("easing.Ease", function (a, b, c, d) {
                            this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? t.concat(b) : t;
                        }, !0),
                        v = u.map = {},
                        w = u.register = function (a, b, c, d) {
                            for (var e, f, g, h, i = b.split(","), j = i.length, l = (c || "easeIn,easeOut,easeInOut").split(","); --j > -1;) for (f = i[j], e = d ? s("easing." + f, null, !0) : k.easing[f] || {}, g = l.length; --g > -1;) h = l[g], v[f + "." + h] = v[h + f] = e[h] = a.getRatio ? a : a[h] || new a();
                        };for (g = u.prototype, g._calcEnd = !1, g.getRatio = function (a) {
                        if (this._func) return this._params[0] = a, this._func.apply(null, this._params);var b = this._type,
                            c = this._power,
                            d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2;
                    }, e = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], f = e.length; --f > -1;) g = e[f] + ",Power" + f, w(new u(null, null, 1, f), g, "easeOut", !0), w(new u(null, null, 2, f), g, "easeIn" + (0 === f ? ",easeNone" : "")), w(new u(null, null, 3, f), g, "easeInOut");v.linear = k.easing.Linear.easeIn, v.swing = k.easing.Quad.easeInOut;var x = s("events.EventDispatcher", function (a) {
                        this._listeners = {}, this._eventTarget = a || this;
                    });g = x.prototype, g.addEventListener = function (a, b, c, d, e) {
                        e = e || 0;var f,
                            g,
                            j = this._listeners[a],
                            k = 0;for (this !== h || i || h.wake(), null == j && (this._listeners[a] = j = []), g = j.length; --g > -1;) f = j[g], f.c === b && f.s === c ? j.splice(g, 1) : 0 === k && f.pr < e && (k = g + 1);j.splice(k, 0, { c: b, s: c, up: d, pr: e });
                    }, g.removeEventListener = function (a, b) {
                        var c,
                            d = this._listeners[a];if (d) for (c = d.length; --c > -1;) if (d[c].c === b) return void d.splice(c, 1);
                    }, g.dispatchEvent = function (a) {
                        var b,
                            c,
                            d,
                            e = this._listeners[a];if (e) for (b = e.length, b > 1 && (e = e.slice(0)), c = this._eventTarget; --b > -1;) d = e[b], d && (d.up ? d.c.call(d.s || c, { type: a, target: c }) : d.c.call(d.s || c));
                    };var y = a.requestAnimationFrame,
                        z = a.cancelAnimationFrame,
                        A = Date.now || function () {
                                return new Date().getTime();
                            },
                        B = A();for (e = ["ms", "moz", "webkit", "o"], f = e.length; --f > -1 && !y;) y = a[e[f] + "RequestAnimationFrame"], z = a[e[f] + "CancelAnimationFrame"] || a[e[f] + "CancelRequestAnimationFrame"];s("Ticker", function (a, b) {
                        var c,
                            d,
                            e,
                            f,
                            g,
                            j = this,
                            k = A(),
                            m = b !== !1 && y ? "auto" : !1,
                            o = 500,
                            p = 33,
                            q = "tick",
                            r = function r(a) {
                                var b,
                                    h,
                                    i = A() - B;i > o && (k += i - p), B += i, j.time = (B - k) / 1e3, b = j.time - g, (!c || b > 0 || a === !0) && (j.frame++, g += b + (b >= f ? .004 : f - b), h = !0), a !== !0 && (e = d(r)), h && j.dispatchEvent(q);
                            };x.call(j), j.time = j.frame = 0, j.tick = function () {
                            r(!0);
                        }, j.lagSmoothing = function (a, b) {
                            o = a || 1 / l, p = Math.min(b, o, 0);
                        }, j.sleep = function () {
                            null != e && (m && z ? z(e) : clearTimeout(e), d = n, e = null, j === h && (i = !1));
                        }, j.wake = function (a) {
                            null !== e ? j.sleep() : a ? k += -B + (B = A()) : j.frame > 10 && (B = A() - o + 5), d = 0 === c ? n : m && y ? y : function (a) {
                                return setTimeout(a, 1e3 * (g - j.time) + 1 | 0);
                            }, j === h && (i = !0), r(2);
                        }, j.fps = function (a) {
                            return arguments.length ? (c = a, f = 1 / (c || 60), g = this.time + f, void j.wake()) : c;
                        }, j.useRAF = function (a) {
                            return arguments.length ? (j.sleep(), m = a, void j.fps(c)) : m;
                        }, j.fps(a), setTimeout(function () {
                            "auto" === m && j.frame < 5 && "hidden" !== document.visibilityState && j.useRAF(!1);
                        }, 1500);
                    }), g = k.Ticker.prototype = new k.events.EventDispatcher(), g.constructor = k.Ticker;var C = s("core.Animation", function (a, b) {
                        if ((this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = b.immediateRender === !0, this.data = b.data, this._reversed = b.reversed === !0, V)) {
                            i || h.wake();var c = this.vars.useFrames ? U : V;c.add(this, c._time), this.vars.paused && this.paused(!0);
                        }
                    });h = C.ticker = new k.Ticker(), g = C.prototype, g._dirty = g._gc = g._initted = g._paused = !1, g._totalTime = g._time = 0, g._rawPrevTime = -1, g._next = g._last = g._onUpdate = g._timeline = g.timeline = null, g._paused = !1;var D = function D() {
                        i && A() - B > 2e3 && h.wake(), setTimeout(D, 2e3);
                    };D(), g.play = function (a, b) {
                        return null != a && this.seek(a, b), this.reversed(!1).paused(!1);
                    }, g.pause = function (a, b) {
                        return null != a && this.seek(a, b), this.paused(!0);
                    }, g.resume = function (a, b) {
                        return null != a && this.seek(a, b), this.paused(!1);
                    }, g.seek = function (a, b) {
                        return this.totalTime(Number(a), b !== !1);
                    }, g.restart = function (a, b) {
                        return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0);
                    }, g.reverse = function (a, b) {
                        return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1);
                    }, g.render = function (a, b, c) {}, g.invalidate = function () {
                        return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this;
                    }, g.isActive = function () {
                        var a,
                            b = this._timeline,
                            c = this._startTime;return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime()) >= c && a < c + this.totalDuration() / this._timeScale;
                    }, g._enabled = function (a, b) {
                        return i || h.wake(), this._gc = !a, this._active = this.isActive(), b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1;
                    }, g._kill = function (a, b) {
                        return this._enabled(!1, !1);
                    }, g.kill = function (a, b) {
                        return this._kill(a, b), this;
                    }, g._uncache = function (a) {
                        for (var b = a ? this : this.timeline; b;) b._dirty = !0, b = b.timeline;return this;
                    }, g._swapSelfInParams = function (a) {
                        for (var b = a.length, c = a.concat(); --b > -1;) "{self}" === a[b] && (c[b] = this);return c;
                    }, g._callback = function (a) {
                        var b = this.vars,
                            c = b[a],
                            d = b[a + "Params"],
                            e = b[a + "Scope"] || b.callbackScope || this,
                            f = d ? d.length : 0;switch (f) {case 0:
                            c.call(e);break;case 1:
                            c.call(e, d[0]);break;case 2:
                            c.call(e, d[0], d[1]);break;default:
                            c.apply(e, d);}
                    }, g.eventCallback = function (a, b, c, d) {
                        if ("on" === (a || "").substr(0, 2)) {
                            var e = this.vars;if (1 === arguments.length) return e[a];null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = o(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b);
                        }return this;
                    }, g.delay = function (a) {
                        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay;
                    }, g.duration = function (a) {
                        return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration);
                    }, g.totalDuration = function (a) {
                        return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration;
                    }, g.time = function (a, b) {
                        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time;
                    }, g.totalTime = function (a, b, c) {
                        if ((i || h.wake(), !arguments.length)) return this._totalTime;if (this._timeline) {
                            if ((0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming)) {
                                this._dirty && this.totalDuration();var d = this._totalDuration,
                                    e = this._timeline;if ((a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline)) for (; e._timeline;) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline;
                            }this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (I.length && X(), this.render(a, b, !1), I.length && X());
                        }return this;
                    }, g.progress = g.totalProgress = function (a, b) {
                        var c = this.duration();return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio;
                    }, g.startTime = function (a) {
                        return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime;
                    }, g.endTime = function (a) {
                        return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale;
                    }, g.timeScale = function (a) {
                        if (!arguments.length) return this._timeScale;if ((a = a || l, this._timeline && this._timeline.smoothChildTiming)) {
                            var b = this._pauseTime,
                                c = b || 0 === b ? b : this._timeline.totalTime();this._startTime = c - (c - this._startTime) * this._timeScale / a;
                        }return this._timeScale = a, this._uncache(!1);
                    }, g.reversed = function (a) {
                        return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed;
                    }, g.paused = function (a) {
                        if (!arguments.length) return this._paused;var b,
                            c,
                            d = this._timeline;return a != this._paused && d && (i || a || h.wake(), b = d.rawTime(), c = b - this._pauseTime, !a && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this;
                    };var E = s("core.SimpleTimeline", function (a) {
                        C.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0;
                    });g = E.prototype = new C(), g.constructor = E, g.kill()._gc = !1, g._first = g._last = g._recent = null, g._sortChildren = !1, g.add = g.insert = function (a, b, c, d) {
                        var e, f;if ((a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), e = this._last, this._sortChildren)) for (f = a._startTime; e && e._startTime > f;) e = e._prev;return e ? (a._next = e._next, e._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = e, this._recent = a, this._timeline && this._uncache(!0), this;
                    }, g._remove = function (a, b) {
                        return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this;
                    }, g.render = function (a, b, c) {
                        var d,
                            e = this._first;for (this._totalTime = this._time = this._rawPrevTime = a; e;) d = e._next, (e._active || a >= e._startTime && !e._paused) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d;
                    }, g.rawTime = function () {
                        return i || h.wake(), this._totalTime;
                    };var F = s("TweenLite", function (b, c, d) {
                            if ((C.call(this, c, d), this.render = F.prototype.render, null == b)) throw "Cannot tween a null target.";this.target = b = "string" != typeof b ? b : F.selector(b) || b;var e,
                            f,
                            g,
                            h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType),
                            i = this.vars.overwrite;if ((this._overwrite = i = null == i ? T[F.defaultOverwrite] : "number" == typeof i ? i >> 0 : T[i], (h || b instanceof Array || b.push && o(b)) && "number" != typeof b[0])) for (this._targets = g = m(b), this._propLookup = [], this._siblings = [], e = 0; e < g.length; e++) f = g[e], f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(m(f))) : (this._siblings[e] = Y(f, this, !1), 1 === i && this._siblings[e].length > 1 && $(f, this, null, 1, this._siblings[e])) : (f = g[e--] = F.selector(f), "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);else this._propLookup = {}, this._siblings = Y(b, this, !1), 1 === i && this._siblings.length > 1 && $(b, this, null, 1, this._siblings);(this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -l, this.render(Math.min(0, -this._delay)));
                        }, !0),
                        G = function G(b) {
                            return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType);
                        },
                        H = function H(a, b) {
                            var c,
                                d = {};for (c in a) S[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!P[c] || P[c] && P[c]._autoCSS) || (d[c] = a[c], delete a[c]);a.css = d;
                        };g = F.prototype = new C(), g.constructor = F, g.kill()._gc = !1, g.ratio = 0, g._firstPT = g._targets = g._overwrittenProps = g._startAt = null, g._notifyPluginsOfEnabled = g._lazy = !1, F.version = "1.19.0", F.defaultEase = g._ease = new u(null, null, 1, 1), F.defaultOverwrite = "auto", F.ticker = h, F.autoSleep = 120, F.lagSmoothing = function (a, b) {
                        h.lagSmoothing(a, b);
                    }, F.selector = a.$ || a.jQuery || function (b) {
                            var c = a.$ || a.jQuery;return c ? (F.selector = c, c(b)) : "undefined" == typeof document ? b : document.querySelectorAll ? document.querySelectorAll(b) : document.getElementById("#" === b.charAt(0) ? b.substr(1) : b);
                        };var I = [],
                        J = {},
                        K = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                        L = function L(a) {
                            for (var b, c = this._firstPT, d = 1e-6; c;) b = c.blob ? a ? this.join("") : this.start : c.c * a + c.s, c.m ? b = c.m(b, this._target || c.t) : d > b && b > -d && (b = 0), c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b, c = c._next;
                        },
                        M = function M(a, b, c, d) {
                            var e,
                                f,
                                g,
                                h,
                                i,
                                j,
                                k,
                                l = [a, b],
                                m = 0,
                                n = "",
                                o = 0;for (l.start = a, c && (c(l), a = l[0], b = l[1]), l.length = 0, e = a.match(K) || [], f = b.match(K) || [], d && (d._next = null, d.blob = 1, l._firstPT = l._applyPT = d), i = f.length, h = 0; i > h; h++) k = f[h], j = b.substr(m, b.indexOf(k, m) - m), n += j || !h ? j : ",", m += j.length, o ? o = (o + 1) % 5 : "rgba(" === j.substr(-5) && (o = 1), k === e[h] || e.length <= h ? n += k : (n && (l.push(n), n = ""), g = parseFloat(e[h]), l.push(g), l._firstPT = { _next: l._firstPT, t: l, p: l.length - 1, s: g, c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0, f: 0, m: o && 4 > o ? Math.round : 0 }), m += k.length;return n += b.substr(m), n && l.push(n), l.setRatio = L, l;
                        },
                        N = function N(a, b, c, d, e, f, g, h, i) {
                            "function" == typeof d && (d = d(i || 0, a));var j,
                                k,
                                l = "get" === c ? a[b] : c,
                                m = typeof a[b],
                                n = "string" == typeof d && "=" === d.charAt(1),
                                o = { t: a, p: b, s: l, f: "function" === m, pg: 0, n: e || b, m: f ? "function" == typeof f ? f : Math.round : 0, pr: 0, c: n ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - l || 0 };return "number" !== m && ("function" === m && "get" === c && (k = b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3), o.s = l = g ? a[k](g) : a[k]()), "string" == typeof l && (g || isNaN(l)) ? (o.fp = g, j = M(l, d, h || F.defaultStringFilter, o), o = { t: j, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: e || b, pr: 0, m: 0 }) : n || (o.s = parseFloat(l), o.c = parseFloat(d) - o.s || 0)), o.c ? ((o._next = this._firstPT) && (o._next._prev = o), this._firstPT = o, o) : void 0;
                        },
                        O = F._internals = { isArray: o, isSelector: G, lazyTweens: I, blobDif: M },
                        P = F._plugins = {},
                        Q = O.tweenLookup = {},
                        R = 0,
                        S = O.reservedProps = { ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1, callbackScope: 1, stringFilter: 1, id: 1 },
                        T = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, "true": 1, "false": 0 },
                        U = C._rootFramesTimeline = new E(),
                        V = C._rootTimeline = new E(),
                        W = 30,
                        X = O.lazyRender = function () {
                            var a,
                                b = I.length;for (J = {}; --b > -1;) a = I[b], a && a._lazy !== !1 && (a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1);I.length = 0;
                        };V._startTime = h.time, U._startTime = h.frame, V._active = U._active = !0, setTimeout(X, 1), C._updateRoot = F.render = function () {
                        var a, b, c;if ((I.length && X(), V.render((h.time - V._startTime) * V._timeScale, !1, !1), U.render((h.frame - U._startTime) * U._timeScale, !1, !1), I.length && X(), h.frame >= W)) {
                            W = h.frame + (parseInt(F.autoSleep, 10) || 120);for (c in Q) {
                                for (b = Q[c].tweens, a = b.length; --a > -1;) b[a]._gc && b.splice(a, 1);0 === b.length && delete Q[c];
                            }if ((c = V._first, (!c || c._paused) && F.autoSleep && !U._first && 1 === h._listeners.tick.length)) {
                                for (; c && c._paused;) c = c._next;c || h.sleep();
                            }
                        }
                    }, h.addEventListener("tick", C._updateRoot);var Y = function Y(a, b, c) {
                            var d,
                                e,
                                f = a._gsTweenID;if ((Q[f || (a._gsTweenID = f = "t" + R++)] || (Q[f] = { target: a, tweens: [] }), b && (d = Q[f].tweens, d[e = d.length] = b, c))) for (; --e > -1;) d[e] === b && d.splice(e, 1);return Q[f].tweens;
                        },
                        Z = function Z(a, b, c, d) {
                            var e,
                                f,
                                g = a.vars.onOverwrite;return g && (e = g(a, b, c, d)), g = F.onOverwrite, g && (f = g(a, b, c, d)), e !== !1 && f !== !1;
                        },
                        $ = function $(a, b, c, d, e) {
                            var f, g, h, i;if (1 === d || d >= 4) {
                                for (i = e.length, f = 0; i > f; f++) if ((h = e[f]) !== b) h._gc || h._kill(null, a, b) && (g = !0);else if (5 === d) break;return g;
                            }var j,
                                k = b._startTime + l,
                                m = [],
                                n = 0,
                                o = 0 === b._duration;for (f = e.length; --f > -1;) (h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || _(b, 0, o), 0 === _(h, j, o) && (m[n++] = h)) : h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale > k && ((o || !h._initted) && k - h._startTime <= 2e-10 || (m[n++] = h)));for (f = n; --f > -1;) if ((h = m[f], 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || !h._firstPT && h._initted)) {
                                if (2 !== d && !Z(h, b)) continue;h._enabled(!1, !1) && (g = !0);
                            }return g;
                        },
                        _ = function _(a, b, c) {
                            for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
                                if ((f += d._startTime, e *= d._timeScale, d._paused)) return -100;d = d._timeline;
                            }return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * l > f - b ? l : (f += a.totalDuration() / a._timeScale / e) > b + l ? 0 : f - b - l;
                        };g._init = function () {
                        var a,
                            b,
                            c,
                            d,
                            e,
                            f,
                            g = this.vars,
                            h = this._overwrittenProps,
                            i = this._duration,
                            j = !!g.immediateRender,
                            k = g.ease;if (g.startAt) {
                            this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), e = {};for (d in g.startAt) e[d] = g.startAt[d];if ((e.overwrite = !1, e.immediateRender = !0, e.lazy = j && g.lazy !== !1, e.startAt = e.delay = null, this._startAt = F.to(this.target, 0, e), j)) if (this._time > 0) this._startAt = null;else if (0 !== i) return;
                        } else if (g.runBackwards && 0 !== i) if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;else {
                            0 !== this._time && (j = !1), c = {};for (d in g) S[d] && "autoCSS" !== d || (c[d] = g[d]);if ((c.overwrite = 0, c.data = "isFromStart", c.lazy = j && g.lazy !== !1, c.immediateRender = j, this._startAt = F.to(this.target, 0, c), j)) {
                                if (0 === this._time) return;
                            } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
                        }if ((this._ease = k = k ? k instanceof u ? k : "function" == typeof k ? new u(k, g.easeParams) : v[k] || F.defaultEase : F.defaultEase, g.easeParams instanceof Array && k.config && (this._ease = k.config.apply(k, g.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)) for (f = this._targets.length, a = 0; f > a; a++) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], h ? h[a] : null, a) && (b = !0);else b = this._initProps(this.target, this._propLookup, this._siblings, h, 0);if ((b && F._onPluginEvent("_onInitAllProps", this), h && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), g.runBackwards)) for (c = this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;this._onUpdate = g.onUpdate, this._initted = !0;
                    }, g._initProps = function (b, c, d, e, f) {
                        var g, h, i, j, k, l;if (null == b) return !1;J[b._gsTweenID] && X(), this.vars.css || b.style && b !== a && b.nodeType && P.css && this.vars.autoCSS !== !1 && H(this.vars, b);for (g in this.vars) if ((l = this.vars[g], S[g])) l && (l instanceof Array || l.push && o(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = l = this._swapSelfInParams(l, this));else if (P[g] && (j = new P[g]())._onInitTween(b, this.vars[g], this, f)) {
                            for (this._firstPT = k = { _next: this._firstPT, t: j, p: "setRatio", s: 0, c: 1, f: 1, n: g, pg: 1, pr: j._priority, m: 0 }, h = j._overwriteProps.length; --h > -1;) c[j._overwriteProps[h]] = this._firstPT;(j._priority || j._onInitAllProps) && (i = !0), (j._onDisable || j._onEnable) && (this._notifyPluginsOfEnabled = !0), k._next && (k._next._prev = k);
                        } else c[g] = N.call(this, b, g, "get", l, g, 0, null, this.vars.stringFilter, f);return e && this._kill(e, b) ? this._initProps(b, c, d, e, f) : this._overwrite > 1 && this._firstPT && d.length > 1 && $(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e, f)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (J[b._gsTweenID] = !0), i);
                    }, g.render = function (a, b, c) {
                        var d,
                            e,
                            f,
                            g,
                            h = this._time,
                            i = this._duration,
                            j = this._rawPrevTime;if (a >= i - 1e-7) this._totalTime = this._time = i, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 > j || 0 >= a && a >= -1e-7 || j === l && "isPause" !== this.data) && j !== a && (c = !0, j > l && (e = "onReverseComplete")), this._rawPrevTime = g = !b || a || j === a ? a : l);else if (1e-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === i && j > 0) && (e = "onReverseComplete", d = this._reversed), 0 > a && (this._active = !1, 0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (j !== l || "isPause" !== this.data) && (c = !0), this._rawPrevTime = g = !b || a || j === a ? a : l)), this._initted || (c = !0);else if ((this._totalTime = this._time = a, this._easeType)) {
                            var k = a / i,
                                m = this._easeType,
                                n = this._easePower;(1 === m || 3 === m && k >= .5) && (k = 1 - k), 3 === m && (k *= 2), 1 === n ? k *= k : 2 === n ? k *= k * k : 3 === n ? k *= k * k * k : 4 === n && (k *= k * k * k * k), 1 === m ? this.ratio = 1 - k : 2 === m ? this.ratio = k : .5 > a / i ? this.ratio = k / 2 : this.ratio = 1 - k / 2;
                        } else this.ratio = this._ease.getRatio(a / i);if (this._time !== h || c) {
                            if (!this._initted) {
                                if ((this._init(), !this._initted || this._gc)) return;if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = h, this._rawPrevTime = j, I.push(this), void (this._lazy = [a, b]);this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
                            }for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0), 0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === i) && (b || this._callback("onStart"))), f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;this._onUpdate && (0 > a && this._startAt && a !== -1e-4 && this._startAt.render(a, b, c), b || (this._time !== h || d || c) && this._callback("onUpdate")), e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && a !== -1e-4 && this._startAt.render(a, b, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this._callback(e), 0 === i && this._rawPrevTime === l && g !== l && (this._rawPrevTime = 0));
                        }
                    }, g._kill = function (a, b, c) {
                        if (("all" === a && (a = null), null == a && (null == b || b === this.target))) return this._lazy = !1, this._enabled(!1, !1);b = "string" != typeof b ? b || this._targets || this.target : F.selector(b) || b;var d,
                            e,
                            f,
                            g,
                            h,
                            i,
                            j,
                            k,
                            l,
                            m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline;if ((o(b) || G(b)) && "number" != typeof b[0]) for (d = b.length; --d > -1;) this._kill(a, b[d], c) && (i = !0);else {
                            if (this._targets) {
                                for (d = this._targets.length; --d > -1;) if (b === this._targets[d]) {
                                    h = this._propLookup[d] || {}, this._overwrittenProps = this._overwrittenProps || [], e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";break;
                                }
                            } else {
                                if (b !== this.target) return !1;h = this._propLookup, e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all";
                            }if (h) {
                                if ((j = a || h, k = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill), c && (F.onOverwrite || this.vars.onOverwrite))) {
                                    for (f in j) h[f] && (l || (l = []), l.push(f));if ((l || !a) && !Z(this, c, b, l)) return !1;
                                }for (f in j) (g = h[f]) && (m && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s, i = !0), g.pg && g.t._kill(j) && (i = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete h[f]), k && (e[f] = 1);!this._firstPT && this._initted && this._enabled(!1, !1);
                            }
                        }return i;
                    }, g.invalidate = function () {
                        return this._notifyPluginsOfEnabled && F._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], C.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -l, this.render(Math.min(0, -this._delay))), this;
                    }, g._enabled = function (a, b) {
                        if ((i || h.wake(), a && this._gc)) {
                            var c,
                                d = this._targets;if (d) for (c = d.length; --c > -1;) this._siblings[c] = Y(d[c], this, !0);else this._siblings = Y(this.target, this, !0);
                        }return C.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? F._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1;
                    }, F.to = function (a, b, c) {
                        return new F(a, b, c);
                    }, F.from = function (a, b, c) {
                        return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new F(a, b, c);
                    }, F.fromTo = function (a, b, c, d) {
                        return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new F(a, b, d);
                    }, F.delayedCall = function (a, b, c, d, e) {
                        return new F(b, 0, { delay: a, onComplete: b, onCompleteParams: c, callbackScope: d, onReverseComplete: b, onReverseCompleteParams: c, immediateRender: !1, lazy: !1, useFrames: e, overwrite: 0 });
                    }, F.set = function (a, b) {
                        return new F(a, 0, b);
                    }, F.getTweensOf = function (a, b) {
                        if (null == a) return [];a = "string" != typeof a ? a : F.selector(a) || a;var c, d, e, f;if ((o(a) || G(a)) && "number" != typeof a[0]) {
                            for (c = a.length, d = []; --c > -1;) d = d.concat(F.getTweensOf(a[c], b));for (c = d.length; --c > -1;) for (f = d[c], e = c; --e > -1;) f === d[e] && d.splice(c, 1);
                        } else for (d = Y(a).concat(), c = d.length; --c > -1;) (d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);return d;
                    }, F.killTweensOf = F.killDelayedCallsTo = function (a, b, c) {
                        "object" == typeof b && (c = b, b = !1);for (var d = F.getTweensOf(a, b), e = d.length; --e > -1;) d[e]._kill(c, a);
                    };var aa = s("plugins.TweenPlugin", function (a, b) {
                        this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = aa.prototype;
                    }, !0);if ((g = aa.prototype, aa.version = "1.19.0", aa.API = 2, g._firstPT = null, g._addTween = N, g.setRatio = L, g._kill = function (a) {
                            var b,
                                c = this._overwriteProps,
                                d = this._firstPT;if (null != a[this._propName]) this._overwriteProps = [];else for (b = c.length; --b > -1;) null != a[c[b]] && c.splice(b, 1);for (; d;) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;return !1;
                        }, g._mod = g._roundProps = function (a) {
                            for (var b, c = this._firstPT; c;) b = a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")], b && "function" == typeof b && (2 === c.f ? c.t._applyPT.m = b : c.m = b), c = c._next;
                        }, F._onPluginEvent = function (a, b) {
                            var c,
                                d,
                                e,
                                f,
                                g,
                                h = b._firstPT;if ("_onInitAllProps" === a) {
                                for (; h;) {
                                    for (g = h._next, d = e; d && d.pr > h.pr;) d = d._next;(h._prev = d ? d._prev : f) ? h._prev._next = h : e = h, (h._next = d) ? d._prev = h : f = h, h = g;
                                }h = b._firstPT = e;
                            }for (; h;) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;return c;
                        }, aa.activate = function (a) {
                            for (var b = a.length; --b > -1;) a[b].API === aa.API && (P[new a[b]()._propName] = a[b]);return !0;
                        }, r.plugin = function (a) {
                            if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";var b,
                                c = a.propName,
                                d = a.priority || 0,
                                e = a.overwriteProps,
                                f = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" },
                                g = s("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function () {
                                    aa.call(this, c, d), this._overwriteProps = e || [];
                                }, a.global === !0),
                                h = g.prototype = new aa(c);h.constructor = g, g.API = a.API;for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);return g.version = a.version, aa.activate([g]), g;
                        }, e = a._gsQueue)) {
                        for (f = 0; f < e.length; f++) e[f]();for (g in p) p[g].func || a.console.log("GSAP encountered missing dependency: " + g);
                    }i = !1;
                }
            })("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : undefined || window, "TweenLite");
			/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

		/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_0__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_1__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
		 * imagesLoaded PACKAGED v3.1.8
		 * JavaScript is all like "You images are done yet or what?"
		 * MIT License
		 */

        "use strict";

        (function () {
            function e() {}function t(e, t) {
                for (var n = e.length; n--;) if (e[n].listener === t) return n;return -1;
            }function n(e) {
                return function () {
                    return this[e].apply(this, arguments);
                };
            }var i = e.prototype,
                r = this,
                o = r.EventEmitter;i.getListeners = function (e) {
                var t,
                    n,
                    i = this._getEvents();if ("object" == typeof e) {
                    t = {};for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n]);
                } else t = i[e] || (i[e] = []);return t;
            }, i.flattenListeners = function (e) {
                var t,
                    n = [];for (t = 0; e.length > t; t += 1) n.push(e[t].listener);return n;
            }, i.getListenersAsObject = function (e) {
                var t,
                    n = this.getListeners(e);return n instanceof Array && (t = {}, t[e] = n), t || n;
            }, i.addListener = function (e, n) {
                var i,
                    r = this.getListenersAsObject(e),
                    o = "object" == typeof n;for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : { listener: n, once: !1 });return this;
            }, i.on = n("addListener"), i.addOnceListener = function (e, t) {
                return this.addListener(e, { listener: t, once: !0 });
            }, i.once = n("addOnceListener"), i.defineEvent = function (e) {
                return this.getListeners(e), this;
            }, i.defineEvents = function (e) {
                for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);return this;
            }, i.removeListener = function (e, n) {
                var i,
                    r,
                    o = this.getListenersAsObject(e);for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));return this;
            }, i.off = n("removeListener"), i.addListeners = function (e, t) {
                return this.manipulateListeners(!1, e, t);
            }, i.removeListeners = function (e, t) {
                return this.manipulateListeners(!0, e, t);
            }, i.manipulateListeners = function (e, t, n) {
                var i,
                    r,
                    o = e ? this.removeListener : this.addListener,
                    s = e ? this.removeListeners : this.addListeners;if ("object" != typeof t || t instanceof RegExp) for (i = n.length; i--;) o.call(this, t, n[i]);else for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));return this;
            }, i.removeEvent = function (e) {
                var t,
                    n = typeof e,
                    i = this._getEvents();if ("string" === n) delete i[e];else if ("object" === n) for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];else delete this._events;return this;
            }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function (e, t) {
                var n,
                    i,
                    r,
                    o,
                    s = this.getListenersAsObject(e);for (r in s) if (s.hasOwnProperty(r)) for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);return this;
            }, i.trigger = n("emitEvent"), i.emit = function (e) {
                var t = Array.prototype.slice.call(arguments, 1);return this.emitEvent(e, t);
            }, i.setOnceReturnValue = function (e) {
                return this._onceReturnValue = e, this;
            }, i._getOnceReturnValue = function () {
                return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0;
            }, i._getEvents = function () {
                return this._events || (this._events = {});
            }, e.noConflict = function () {
                return r.EventEmitter = o, e;
            },  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_LOCAL_MODULE_0__ = (function () {
                return e;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e;
        }).call(undefined), (function (e) {
            function t(t) {
                var n = e.event;return n.target = n.target || n.srcElement || t, n;
            }var n = document.documentElement,
                i = function i() {};n.addEventListener ? i = function (e, t, n) {
                e.addEventListener(t, n, !1);
            } : n.attachEvent && (i = function (e, n, i) {
                    e[n + i] = i.handleEvent ? function () {
                        var n = t(e);i.handleEvent.call(i, n);
                    } : function () {
                        var n = t(e);i.call(e, n);
                    }, e.attachEvent("on" + n, e[n + i]);
                });var r = function r() {};n.removeEventListener ? r = function (e, t, n) {
                e.removeEventListener(t, n, !1);
            } : n.detachEvent && (r = function (e, t, n) {
                    e.detachEvent("on" + t, e[t + n]);try {
                        delete e[t + n];
                    } catch (i) {
                        e[t + n] = void 0;
                    }
                });var o = { bind: i, unbind: r }; true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (o), __WEBPACK_LOCAL_MODULE_1__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__)) : e.eventie = o;
        })(undefined), (function (e, t) {
            true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__, __WEBPACK_LOCAL_MODULE_1__], __WEBPACK_AMD_DEFINE_RESULT__ = function (n, i) {
                return t(e, n, i);
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie);
        })(window, function (e, t, n) {
            function i(e, t) {
                for (var n in t) e[n] = t[n];return e;
            }function r(e) {
                return "[object Array]" === d.call(e);
            }function o(e) {
                var t = [];if (r(e)) t = e;else if ("number" == typeof e.length) for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);else t.push(e);return t;
            }function s(e, t, n) {
                if (!(this instanceof s)) return new s(e, t);"string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), a && (this.jqDeferred = new a.Deferred());var r = this;setTimeout(function () {
                    r.check();
                });
            }function f(e) {
                this.img = e;
            }function c(e) {
                this.src = e, v[e] = this;
            }var a = e.jQuery,
                u = e.console,
                h = u !== void 0,
                d = Object.prototype.toString;s.prototype = new t(), s.prototype.options = {}, s.prototype.getImages = function () {
                this.images = [];for (var e = 0, t = this.elements.length; t > e; e++) {
                    var n = this.elements[e];"IMG" === n.nodeName && this.addImage(n);var i = n.nodeType;if (i && (1 === i || 9 === i || 11 === i)) for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
                        var f = r[o];this.addImage(f);
                    }
                }
            }, s.prototype.addImage = function (e) {
                var t = new f(e);this.images.push(t);
            }, s.prototype.check = function () {
                function e(e, r) {
                    return t.options.debug && h && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0;
                }var t = this,
                    n = 0,
                    i = this.images.length;if ((this.hasAnyBroken = !1, !i)) return this.complete(), void 0;for (var r = 0; i > r; r++) {
                    var o = this.images[r];o.on("confirm", e), o.check();
                }
            }, s.prototype.progress = function (e) {
                this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;var t = this;setTimeout(function () {
                    t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e);
                });
            }, s.prototype.complete = function () {
                var e = this.hasAnyBroken ? "fail" : "done";this.isComplete = !0;var t = this;setTimeout(function () {
                    if ((t.emit(e, t), t.emit("always", t), t.jqDeferred)) {
                        var n = t.hasAnyBroken ? "reject" : "resolve";t.jqDeferred[n](t);
                    }
                });
            }, a && (a.fn.imagesLoaded = function (e, t) {
                var n = new s(this, e, t);return n.jqDeferred.promise(a(this));
            }), f.prototype = new t(), f.prototype.check = function () {
                var e = v[this.img.src] || new c(this.img.src);if (e.isConfirmed) return this.confirm(e.isLoaded, "cached was confirmed"), void 0;if (this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;var t = this;e.on("confirm", function (e, n) {
                    return t.confirm(e.isLoaded, n), !0;
                }), e.check();
            }, f.prototype.confirm = function (e, t) {
                this.isLoaded = e, this.emit("confirm", this, t);
            };var v = {};return c.prototype = new t(), c.prototype.check = function () {
                if (!this.isChecked) {
                    var e = new Image();n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0;
                }
            }, c.prototype.handleEvent = function (e) {
                var t = "on" + e.type;this[t] && this[t](e);
            }, c.prototype.onload = function (e) {
                this.confirm(!0, "onload"), this.unbindProxyEvents(e);
            }, c.prototype.onerror = function (e) {
                this.confirm(!1, "onerror"), this.unbindProxyEvents(e);
            }, c.prototype.confirm = function (e, t) {
                this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t);
            }, c.prototype.unbindProxyEvents = function (e) {
                n.unbind(e.target, "load", this), n.unbind(e.target, "error", this);
            }, s;
        });

		/***/ },
	/* 20 */
	/***/ function(module, exports) {

        /**
         * imagefill.js
         * Author & copyright (c) 2013: John Polacek
         * johnpolacek.com
         * https://twitter.com/johnpolacek
         *
         * Dual MIT & GPL license
         *
         * Project Page: http://johnpolacek.github.io/imagefill.js
         *
         * The jQuery plugin for making images fill their containers (and be centered)
         *
         * EXAMPLE
         * Given this html:
         * <div class="container"><img src="myawesomeimage" /></div>
         * $('.container').imagefill(); // image stretches to fill container
         *
         * REQUIRES:
         * imagesLoaded - https://github.com/desandro/imagesloaded
         *
         */
        'use strict';

        ;(function ($) {

            jQuery.fn.imagefill = function (options) {

                var $container = this,
                    imageAspect = 1 / 1,
                    containersH = 0,
                    containersW = 0,
                    defaults = {
                        runOnce: false,
                        target: 'img',
                        throttle: 200 // 5fps
                    },
                    settings = jQuery.extend({}, defaults, options);

                var $img = $container.find(settings.target).addClass('loading').css({ 'position': 'absolute' });

                // make sure container isn't position:static
                var containerPos = $container.css('position');
                $container.css({ 'overflow': 'hidden', 'position': containerPos === 'static' ? 'relative' : containerPos });

                // set containerH, containerW
                $container.each(function () {
                    containersH += jQuery(this).outerHeight();
                    containersW += jQuery(this).outerWidth();
                });

                // wait for image to load, then fit it inside the container
                $container.imagesLoaded().done(function (img) {
                    imageAspect = $img.width() / $img.height();
                    $img.removeClass('loading');
                    fitImages();
                    if (!settings.runOnce) {
                        checkSizeChange();
                    }
                });

                function fitImages() {
                    containersH = 0;
                    containersW = 0;
                    $container.each(function () {
                        imageAspect = jQuery(this).find(settings.target).width() / jQuery(this).find(settings.target).height();
                        var containerW = jQuery(this).outerWidth(),
                            containerH = jQuery(this).outerHeight();
                        containersH += jQuery(this).outerHeight();
                        containersW += jQuery(this).outerWidth();

                        var containerAspect = containerW / containerH;
                        if (containerAspect < imageAspect) {
                            // taller
                            jQuery(this).find(settings.target).css({
                                width: 'auto',
                                height: containerH,
                                top: 0,
                                left: -(containerH * imageAspect - containerW) / 2
                            });
                        } else {
                            // wider
                            jQuery(this).find(settings.target).css({
                                width: containerW,
                                height: 'auto',
                                top: -(containerW / imageAspect - containerH) / 2,
                                left: 0
                            });
                        }
                    });
                }

                function checkSizeChange() {
                    var checkW = 0,
                        checkH = 0;
                    $container.each(function () {
                        checkH += jQuery(this).outerHeight();
                        checkW += jQuery(this).outerWidth();
                    });
                    if (containersH !== checkH || containersW !== checkW) {
                        fitImages();
                    }
                    setTimeout(checkSizeChange, settings.throttle);
                }

                return this;
            };
        })(jQuery);

		/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

        var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

        var _systemAbstract = __webpack_require__(8);

        var _systemAbstract2 = _interopRequireDefault(_systemAbstract);

        var _entryFixedImage2 = __webpack_require__(22);

        var _entryFixedImage3 = _interopRequireDefault(_entryFixedImage2);

        var Component_IntroLoadImages = (function (_Abstract2) {
            _inherits(Component_IntroLoadImages, _Abstract2);

            function Component_IntroLoadImages(el, options) {
                _classCallCheck(this, Component_IntroLoadImages);

                _get(Object.getPrototypeOf(Component_IntroLoadImages.prototype), "constructor", this).call(this, el, jQuery.extend(true, {
                    "message": "Example Component Message Default"
                }, options), 'component');

                this.container = this.$el;
                this.containerHeight = null;
                this.bottom = jQuery('#wrapper-bottom');
                this.controller = null;
                this.scene0 = null;
                this.scene1 = null;
                this.scene2 = null;
                this.scene3 = null;
                this.scene4 = null;
                this.scene5 = null;
                this.mainImage = null;
                this.initialise();
            }

            _createClass(Component_IntroLoadImages, [{
                key: "initialise",
                value: function initialise() {
                    __webpack_require__(23);
                    __webpack_require__(25);
                    __webpack_require__(19);
                    __webpack_require__(20);
                    var $this = this;
                    this.resize();
                    this.loadSmallImage();
                }
            }, {
                key: "loadSmallImage",
                value: function loadSmallImage() {

                    var $this = this;
                    var $fixedImageHolder = jQuery("#fixed-image-holder");
                    var $fixedImage = $fixedImageHolder.find("#fixed-image");
                    var $fixedImageSmall = $fixedImage.find("#m-full-width__img--s");
                    var $fixedImageLarge = $fixedImage.find("#m-full-width__img--l");

                    var windowSize = jQuery(window).width();

                    if (windowSize <= 1024) {
                        //changing image on ipad
                        var attrSmall = $fixedImageSmall["0"].attributes['src'].nodeValue;
                        var attrLarge = $fixedImageLarge["0"].attributes['src'].nodeValue;
                        attrSmall = attrSmall.replace(".jpg", "-tablet.jpg");
                        attrLarge = attrLarge.replace(".jpg", "-tablet.jpg");
                        $fixedImageSmall["0"].src = attrSmall;
                        $fixedImageLarge["0"].src = attrLarge;
                        $fixedImageSmall["0"].width = "1024";
                        $fixedImageSmall["0"].height = "576";
                        $fixedImageLarge["0"].width = "2048";
                        $fixedImageLarge["0"].height = "1152";
                        jQuery('body').addClass('tablet');
                    }

                    this.mainImage = new _entryFixedImage3["default"]($fixedImage);

                    //on image loaded setup image sizing and scroll scenes:
                    $fixedImageSmall.imagesLoaded().done(function (instance) {
//                        console.log('all images successfully loaded');
                        TweenLite.to($fixedImage, 1, { opacity: 1 });
                        $this.scrollMagicScenes();
                    }).fail(function () {
//                        console.log('all images loaded, at least one is broken');
                    }).progress(function (instance, image) {
                        var result = image.isLoaded ? 'loaded' : 'broken';
//                        console.log('image is ' + result + ' for ' + image.img.src);
                    });
                }
            }, {
                key: "resize",
                value: function resize() {
                    var $this = this;
                    jQuery(window).resize(function () {
                        if (jQuery('body').hasClass('mobile')) {
                            if ($this.controller != null) {
                                $this.controller.destroy(1);
                                $this.scene0.destroy(1);
                                $this.scene1.destroy(1);
                                $this.scene2.destroy(1);
                                $this.scene3.destroy(1);
                                $this.scene4.destroy(1);
                                $this.scene5.destroy(1);
                                $this.controller = null;
                                $this.scene0 = null;
                                $this.scene1 = null;
                                $this.scene2 = null;
                                $this.scene3 = null;
                                $this.scene4 = null;
                                $this.scene5 = null;
                            }
                        } else {
                            if ($this.controller == null) {
                                $this.scrollMagicScenes();
                            }
                        }
                    });
                }
            }, {
                key: "scrollMagicScenes",
                value: function scrollMagicScenes() {

                    if (jQuery('body').hasClass('mobile')) {
                        return;
                    }

                    var $this = this;
                    var ScrollMagic = __webpack_require__(24);
                    this.controller = new ScrollMagic.Controller({ globalSceneOptions: { duration: "100%" } });

                    this.scene0 = new ScrollMagic.Scene({ triggerElement: "#hero", duration: "100%" }).on("enter", function (event) {
                        jQuery('.m-chapter-nav__link.-intro').addClass('-active');
                        $this.mainImage.zoomStyle(2);
                    }).on("leave", function (event) {
                    }).addTo($this.controller);
                    //.addIndicators({name: "layer01"})

                    this.scene1 = new ScrollMagic.Scene({ triggerElement: "#layer01", duration: "100%", offset: 200 }).on("enter", function (event) {
                        var s = jQuery(window).scrollTop();
                        $this.mainImage.zoomStyle(2);
                        jQuery('#nyfw-promo').addClass('-visible');
                        jQuery('.m-chapter-nav__link.-layer01').addClass('-active');
                        jQuery('.m-shadow.-left').addClass('-visible');
                        jQuery('.m-chapter-nav__link.-intro').removeClass('-active');
                    }).on("leave", function (event) {
                        jQuery('.m-shadow.-left').removeClass('-visible');
                        jQuery('.m-chapter-nav__link.-layer01').removeClass('-active');
                        if (event.scrollDirection == "REVERSE") {
                            jQuery('.m-chapter-nav__link.-intro').addClass('-active');
                            TweenLite.to('#nyfw-promo', 0.5, { opacity: 0 });
                            $this.mainImage.resetStyle(0);
                        }
                    }).addTo($this.controller);
                    //.addIndicators({name: "layer01"})

                    this.scene2 = new ScrollMagic.Scene({ triggerElement: "#layer02" }).on("enter", function () {
                        $this.mainImage.zoomStyle(3);
                        jQuery('.m-shadow.-right').addClass('-visible');
                        jQuery('.m-chapter-nav__link.-layer02').addClass('-active');
                        TweenLite.to('#nyfw-promo', 0.5, { opacity: 0 });
                    }).on("leave", function (event) {
                        jQuery('.m-shadow.-right').removeClass('-visible');
                        jQuery('.m-chapter-nav__link.-layer02').removeClass('-active');
                        if (event.scrollDirection == "REVERSE") {
                            //$this.mainImage.zoomStyle(0);
                            TweenLite.to('#nyfw-promo', 0.5, { opacity: 1 });
                        }
                    }).addTo($this.controller);
                    //.addIndicators({name: "layer02"})

                    this.scene3 = new ScrollMagic.Scene({ triggerElement: "#layer03" }).on("enter", function () {
                        $this.mainImage.zoomStyle(4);
                        jQuery('.m-shadow.-left').addClass('-visible');
                        jQuery('.m-chapter-nav__link.-layer03').addClass('-active');
                    }).on("leave", function (event) {
                        jQuery('.m-shadow.-left').removeClass('-visible');
                        jQuery('.m-chapter-nav__link.-layer03').removeClass('-active');
                        if (event.scrollDirection == "REVERSE") {
                            //$this.mainImage.zoomStyle(1);
                        }
                    }).addTo($this.controller);
                    //.addIndicators({name: "layer02"})

                    this.scene4 = new ScrollMagic.Scene({ triggerElement: "#layer04" }).on("enter", function () {
                        $this.mainImage.zoomStyle(5);
                        jQuery('.m-chapter-nav__link.-layer04').addClass('-active');
                        jQuery('.m-shadow.-right').addClass('-visible');
                    }).on("leave", function (event) {
                        jQuery('.m-shadow.-right').removeClass('-visible');
                        jQuery('.m-chapter-nav__link.-layer04').removeClass('-active');
                        if (event.scrollDirection == "REVERSE") {
                            //$this.mainImage.zoomStyle(2);
                        }
                    }).addTo($this.controller);
                    //.addIndicators({name: "layer04"})

                    var clickpointsTL = new TimelineMax();
                    this.scene5 = new ScrollMagic.Scene({ triggerElement: "#technology" }).on("enter leave", function (event) {

                        if (event.type == 'enter') {
//                            console.log("enter technology");
                            jQuery('.m-chapter-nav__link.-technology').addClass('-active');
                            jQuery('.m-technology__container').addClass('-visible');
                            jQuery('.m-shadow').css('display', 'none');

                            clickpointsTL.to(
                                ".m-technology__clickpoints .-point01",
                                0.5, { opacity: 1 }, "-=0.25").to(".m-technology__clickpoints .-point02", 0.5, { opacity: 1 }, "-=0.25").to(".m-technology__clickpoints .-point03", 0.5, { opacity: 1 }, "-=0.25").to(".m-technology__clickpoints .-point04", 0.5, { opacity: 1 }, "-=0.25").to(".m-technology__clickpoints .-point05", 0.5, { opacity: 1 }, "-=0.25").to(".m-technology__clickpoints .-point06", 0.5, { opacity: 1 }, "-=0.25").to(".m-technology__clickpoints .-point07", 0.5, { opacity: 1 }, "-=0.25");

                            if (event.scrollDirection == "REVERSE") {
                                jQuery('.m-chapter-nav__link.-retailers').removeClass('-active');
                            }
                        } else {
//                            console.log('leave technology');
                            jQuery('.m-chapter-nav__link.-technology').removeClass('-active');
                            jQuery('.m-chapter-nav__link.-retailers').addClass('-active');
                            jQuery('.m-technology__product').removeClass('-visible');
                            jQuery('.m-technology__container').removeClass('-visible');

                            jQuery('.m-technology__clickpoints  .-with-plus').css('opacity', '0');
                            jQuery('.m-shadow').css('display', 'block');
                            if (event.scrollDirection == "REVERSE") {
                                jQuery('.m-chapter-nav__link.-retailers').removeClass('-active');
                            }
                        }
                    }).addTo($this.controller);
                    //.addIndicators({name: "technology"})
                }
            }]);

            return Component_IntroLoadImages;
        })(_systemAbstract2["default"]);

        exports["default"] = Component_IntroLoadImages;
        module.exports = exports["default"];

		/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {

        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

        var FixedImage = (function () {
            function FixedImage(el) {
                _classCallCheck(this, FixedImage);

                var _this = this;
                var image = new Image();
                var poster = document.getElementById('m-full-width__img--s');
                image.src = poster.src;
                image.onload = function () {
                    _this.maxImageWidth = this.naturalWidth;
                    _this.maxImageHeight = this.naturalHeight;
                    _this.el = el;
                    _this.$el = jQuery(el);
                    _this.screenHeight = jQuery(window).height();
                    _this.screenWidth = jQuery(window).width();
                    _this.zoomed = 0;
                    _this.scene = 0;
                    _this.imageSizeRatio = 0;
                    _this.diff = 0;
                    _this.initialise();
                };

            }

            _createClass(FixedImage, [{
                key: 'initialise',
                value: function initialise() {
                    var _this = this;

                    __webpack_require__(18);

                    this.setSize();
                    this.fitImage();
                    this.resetStyle(0);

                    jQuery(window).resize(function (e) {
                        return _this.onResizing(e);
                    });
                }
            }, {
                key: 'setSize',
                value: function setSize() {
                    if (this.screenHeight / this.screenWidth > this.maxImageHeight / this.maxImageWidth) {
                        //if screen ratio is landscape
                        this.imageSizeRatio = this.screenHeight / this.maxImageHeight;
                    } else {
                        //if screen ratio is portrait
                        this.imageSizeRatio = this.screenWidth / this.maxImageWidth;
                    }
                    this.diff = (this.maxImageWidth * this.imageSizeRatio - this.screenWidth) / 2;
                    //console.log("scale:" + this.imageSizeRatio + ", diff: " + this.diff);
                }
            }, {
                key: 'fitImage',
                value: function fitImage() {
                    this.$el.width(this.maxImageWidth);
                    this.$el.height(this.maxImageHeight);
                    TweenLite.set(this.$el, { x: -this.diff, scale: this.imageSizeRatio });
                }
            }, {
                key: 'resetStyle',
                value: function resetStyle(currentNum) {
                    console.log("reset");
                    //TweenLite.to(this.$el, 1, { x: "0%", y: "0%", scale: this.imageSizeRatio });
                    TweenLite.to(this.$el, 1, { x: "-7%", y: "0%", scale: 0.8 });
                    this.zoomed = false;
                    this.scene = currentNum;
                    setTimeout(function () {
                        jQuery('#m-full-width__img--l').css('visibility', 'hidden');
                    }, 1000);
                }
            }, {
                key: 'onResizing',
                value: function onResizing() {
                    this.screenHeight = jQuery(window).height();
                    this.screenWidth = jQuery(window).width();
                    this.setSize();
                    if (this.scene === 0) {
                        this.fitImage();
                    } else {
                        this.zoomStyle(this.scene);
                    }
                }
            }, {
                key: 'zoomStyle',
                value: function zoomStyle(currentNum) {
                    /*
                    if (this.scene === currentNum) {
                        var s = jQuery(window).scrollTop();
                        console.log("currentNum = "+currentNum)
                        if(){

                        }
                        return;
                    }*/

                    var s = jQuery(window).scrollTop();
                    if(s<150){
                        this.resetStyle(1);
                        return;
                    }

                    if (currentNum === 0) {
                        this.resetStyle(currentNum);
                        return;
                    }

                    jQuery('#m-full-width__img--l').css('visibility', 'hidden');
                    var currentSceneNum = currentNum;

                    var imageHeight = this.maxImageHeight;
                    var imageWidth = this.maxImageWidth;
                    var sceneXPos = [15, 80, 25, 75, 65];
                    var sceneYPos = [10, 50, 50, 80, 60];
                    var sceneScale = [2, 3.2, 2.5, 3.2, 4];
                    var currentPosX = sceneXPos[currentSceneNum - 1] * this.imageSizeRatio;
                    var currentPosY = sceneYPos[currentSceneNum - 1] * this.imageSizeRatio;
                    var currentScale = sceneScale[currentSceneNum - 1] * this.imageSizeRatio;
                    var context = this;
                    requestAnimationFrame(zoomUpdate);
                    function zoomUpdate() {
                        //TweenLite.set(context.$el, {x: -currentPosX+'%', y: -currentPosY+'%', scale: currentScale, force3D: true, onComplete: showLargeImage()});
                        TweenLite.to(context.$el, 1, { x: -currentPosX + '%', y: -currentPosY + '%', scale: currentScale, force3D: true, onComplete: showLargeImage() });
                        context.scene = currentNum;
                    }
                    this.zoomed = false;

                    function showLargeImage() {
                        setTimeout(function () {
                            jQuery('#m-full-width__img--l').css('visibility', 'visible');
                        }, 1000);
                    }
                }
            }]);

            return FixedImage;
        })();

        exports['default'] = FixedImage;
        module.exports = exports['default'];

		/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
		 * ScrollMagic v2.0.5 (2015-04-29)
		 * The javascript library for magical scroll interactions.
		 * (c) 2015 Jan Paepke (@janpaepke)
		 * Project Website: http://scrollmagic.io
		 *
		 * @version 2.0.5
		 * @license Dual licensed under MIT license and GPL.
		 * @author Jan Paepke - e-mail@janpaepke.de
		 *
		 * @file Debug Extension for ScrollMagic.
		 */
        /**
         * This plugin was formerly known as the ScrollMagic debug extension.
         *
         * It enables you to add visual indicators to your page, to be able to see exactly when a scene is triggered.
         *
         * To have access to this extension, please include `plugins/debug.addIndicators.js`.
         * @mixin debug.addIndicators
         */
        (function (root, factory) {
            if (true) {
                // AMD. Register as an anonymous module.
                !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(24)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } else if (typeof exports === 'object') {
                // CommonJS
                factory(require('scrollmagic'));
            } else {
                // no browser global export needed, just execute
                factory(root.ScrollMagic || (root.jQuery && root.jQuery.ScrollMagic));
            }
        }(this, function (ScrollMagic) {
            "use strict";
            var NAMESPACE = "debug.addIndicators";

            var
                console = window.console || {},
                err = Function.prototype.bind.call(console.error || console.log ||
                    function () {}, console);
            if (!ScrollMagic) {
                err("(" + NAMESPACE + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs.");
            }

            // plugin settings
            var
                FONT_SIZE = "0.85em",
                ZINDEX = "9999",
                EDGE_OFFSET = 15; // minimum edge distance, added to indentation

            // overall vars
            var
                _util = ScrollMagic._util,
                _autoindex = 0;



            ScrollMagic.Scene.extend(function () {
                var
                    Scene = this,
                    _indicator;

                var log = function () {
                    if (Scene._log) { // not available, when main source minified
                        Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ")", "->");
                        Scene._log.apply(this, arguments);
                    }
                };

                /**
                 * Add visual indicators for a ScrollMagic.Scene.
                 * @memberof! debug.addIndicators#
                 *
                 * @example
                 * // add basic indicators
                 * scene.addIndicators()
                 *
                 * // passing options
                 * scene.addIndicators({name: "pin scene", colorEnd: "#FFFFFF"});
                 *
                 * @param {object} [options] - An object containing one or more options for the indicators.
                 * @param {(string|object)} [options.parent=undefined] - A selector, DOM Object or a jQuery object that the indicators should be added to.
                 If undefined, the controller's container will be used.
                 * @param {number} [options.name=""] - This string will be displayed at the start and end indicators of the scene for identification purposes. If no name is supplied an automatic index will be used.
                 * @param {number} [options.indent=0] - Additional position offset for the indicators (useful, when having multiple scenes starting at the same position).
                 * @param {string} [options.colorStart=green] - CSS color definition for the start indicator.
                 * @param {string} [options.colorEnd=red] - CSS color definition for the end indicator.
                 * @param {string} [options.colorTrigger=blue] - CSS color definition for the trigger indicator.
                 */
                Scene.addIndicators = function (options) {
                    if (!_indicator) {
                        var
                            DEFAULT_OPTIONS = {
                                name: "",
                                indent: 0,
                                parent: undefined,
                                colorStart: "green",
                                colorEnd: "red",
                                colorTrigger: "blue",
                            };

                        options = _util.extend({}, DEFAULT_OPTIONS, options);

                        _autoindex++;
                        _indicator = new Indicator(Scene, options);

                        Scene.on("add.plugin_addIndicators", _indicator.add);
                        Scene.on("remove.plugin_addIndicators", _indicator.remove);
                        Scene.on("destroy.plugin_addIndicators", Scene.removeIndicators);

                        // it the scene already has a controller we can start right away.
                        if (Scene.controller()) {
                            _indicator.add();
                        }
                    }
                    return Scene;
                };

                /**
                 * Removes visual indicators from a ScrollMagic.Scene.
                 * @memberof! debug.addIndicators#
                 *
                 * @example
                 * // remove previously added indicators
                 * scene.removeIndicators()
                 *
                 */
                Scene.removeIndicators = function () {
                    if (_indicator) {
                        _indicator.remove();
                        this.off("*.plugin_addIndicators");
                        _indicator = undefined;
                    }
                    return Scene;
                };

            });


			/*
			 * ----------------------------------------------------------------
			 * Extension for controller to store and update related indicators
			 * ----------------------------------------------------------------
			 */
            // add option to globally auto-add indicators to scenes
            /**
             * Every ScrollMagic.Controller instance now accepts an additional option.
             * See {@link ScrollMagic.Controller} for a complete list of the standard options.
             * @memberof! debug.addIndicators#
             * @method new ScrollMagic.Controller(options)
             * @example
             * // make a controller and add indicators to all scenes attached
             * var controller = new ScrollMagic.Controller({addIndicators: true});
             * // this scene will automatically have indicators added to it
             * new ScrollMagic.Scene()
             *                .addTo(controller);
             *
             * @param {object} [options] - Options for the Controller.
             * @param {boolean} [options.addIndicators=false] - If set to `true` every scene that is added to the controller will automatically get indicators added to it.
             */
            ScrollMagic.Controller.addOption("addIndicators", false);
            // extend Controller
            ScrollMagic.Controller.extend(function () {
                var
                    Controller = this,
                    _info = Controller.info(),
                    _container = _info.container,
                    _isDocument = _info.isDocument,
                    _vertical = _info.vertical,
                    _indicators = { // container for all indicators and methods
                        groups: []
                    };

                var log = function () {
                    if (Controller._log) { // not available, when main source minified
                        Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ")", "->");
                        Controller._log.apply(this, arguments);
                    }
                };
                if (Controller._indicators) {
                    log(2, "WARNING: Scene already has a property '_indicators', which will be overwritten by plugin.");
                }

                // add indicators container
                this._indicators = _indicators;
				/*
				 needed updates:
				 +++++++++++++++
				 start/end position on scene shift (handled in Indicator class)
				 trigger parameters on triggerHook value change (handled in Indicator class)
				 bounds position on container scroll or resize (to keep alignment to bottom/right)
				 trigger position on container resize, window resize (if container isn't document) and window scroll (if container isn't document)
				 */

                // event handler for when associated bounds markers need to be repositioned
                var handleBoundsPositionChange = function () {
                    _indicators.updateBoundsPositions();
                };

                // event handler for when associated trigger groups need to be repositioned
                var handleTriggerPositionChange = function () {
                    _indicators.updateTriggerGroupPositions();
                };

                _container.addEventListener("resize", handleTriggerPositionChange);
                if (!_isDocument) {
                    window.addEventListener("resize", handleTriggerPositionChange);
                    window.addEventListener("scroll", handleTriggerPositionChange);
                }
                // update all related bounds containers
                _container.addEventListener("resize", handleBoundsPositionChange);
                _container.addEventListener("scroll", handleBoundsPositionChange);


                // updates the position of the bounds container to aligned to the right for vertical containers and to the bottom for horizontal
                this._indicators.updateBoundsPositions = function (specificIndicator) {

                    var // constant for all bounds
                        groups = specificIndicator ? [_util.extend({}, specificIndicator.triggerGroup, {
                            members: [specificIndicator]
                        })] : // create a group with only one element
                            _indicators.groups,
                        // use all
                        g = groups.length,
                        css = {},
                        paramPos = _vertical ? "left" : "top",
                        paramDimension = _vertical ? "width" : "height",
                        edge = _vertical ? _util.get.scrollLeft(_container) + _util.get.width(_container) - EDGE_OFFSET : _util.get.scrollTop(_container) + _util.get.height(_container) - EDGE_OFFSET,
                        b, triggerSize, group;
                    while (g--) { // group loop
                        group = groups[g];
                        b = group.members.length;
                        triggerSize = _util.get[paramDimension](group.element.firstChild);
                        while (b--) { // indicators loop
                            css[paramPos] = edge - triggerSize;
                            _util.css(group.members[b].bounds, css);
                        }
                    }
                };

                // updates the positions of all trigger groups attached to a controller or a specific one, if provided
                this._indicators.updateTriggerGroupPositions = function (specificGroup) {
                    var // constant vars
                        groups = specificGroup ? [specificGroup] : _indicators.groups,
                        i = groups.length,
                        container = _isDocument ? document.body : _container,
                        containerOffset = _isDocument ? {
                            top: 0,
                            left: 0
                        } : _util.get.offset(container, true),
                        edge = _vertical ? _util.get.width(_container) - EDGE_OFFSET : _util.get.height(_container) - EDGE_OFFSET,
                        paramDimension = _vertical ? "width" : "height",
                        paramTransform = _vertical ? "Y" : "X";
                    var // changing vars
                        group, elem, pos, elemSize, transform;
                    while (i--) {
                        group = groups[i];
                        elem = group.element;
                        pos = group.triggerHook * Controller.info("size");
                        elemSize = _util.get[paramDimension](elem.firstChild.firstChild);
                        transform = pos > elemSize ? "translate" + paramTransform + "(-100%)" : "";

                        _util.css(elem, {
                            top: containerOffset.top + (_vertical ? pos : edge - group.members[0].options.indent),
                            left: containerOffset.left + (_vertical ? edge - group.members[0].options.indent : pos)
                        });
                        _util.css(elem.firstChild.firstChild, {
                            "-ms-transform": transform,
                            "-webkit-transform": transform,
                            "transform": transform
                        });
                    }
                };

                // updates the label for the group to contain the name, if it only has one member
                this._indicators.updateTriggerGroupLabel = function (group) {
                    var
                        text = "trigger" + (group.members.length > 1 ? "" : " " + group.members[0].options.name),
                        elem = group.element.firstChild.firstChild,
                        doUpdate = elem.textContent !== text;
                    if (doUpdate) {
                        elem.textContent = text;
                        if (_vertical) { // bounds position is dependent on text length, so update
                            _indicators.updateBoundsPositions();
                        }
                    }
                };

                // add indicators if global option is set
                this.addScene = function (newScene) {

                    if (this._options.addIndicators && newScene instanceof ScrollMagic.Scene && newScene.controller() === Controller) {
                        newScene.addIndicators();
                    }
                    // call original destroy method
                    this.$super.addScene.apply(this, arguments);
                };

                // remove all previously set listeners on destroy
                this.destroy = function () {
                    _container.removeEventListener("resize", handleTriggerPositionChange);
                    if (!_isDocument) {
                        window.removeEventListener("resize", handleTriggerPositionChange);
                        window.removeEventListener("scroll", handleTriggerPositionChange);
                    }
                    _container.removeEventListener("resize", handleBoundsPositionChange);
                    _container.removeEventListener("scroll", handleBoundsPositionChange);
                    // call original destroy method
                    this.$super.destroy.apply(this, arguments);
                };
                return Controller;

            });

			/*
			 * ----------------------------------------------------------------
			 * Internal class for the construction of Indicators
			 * ----------------------------------------------------------------
			 */
            var Indicator = function (Scene, options) {
                var
                    Indicator = this,
                    _elemBounds = TPL.bounds(),
                    _elemStart = TPL.start(options.colorStart),
                    _elemEnd = TPL.end(options.colorEnd),
                    _boundsContainer = options.parent && _util.get.elements(options.parent)[0],
                    _vertical, _ctrl;

                var log = function () {
                    if (Scene._log) { // not available, when main source minified
                        Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ")", "->");
                        Scene._log.apply(this, arguments);
                    }
                };

                options.name = options.name || _autoindex;

                // prepare bounds elements
                _elemStart.firstChild.textContent += " " + options.name;
                _elemEnd.textContent += " " + options.name;
                _elemBounds.appendChild(_elemStart);
                _elemBounds.appendChild(_elemEnd);

                // set public variables
                Indicator.options = options;
                Indicator.bounds = _elemBounds;
                // will be set later
                Indicator.triggerGroup = undefined;

                // add indicators to DOM
                this.add = function () {
                    _ctrl = Scene.controller();
                    _vertical = _ctrl.info("vertical");

                    var isDocument = _ctrl.info("isDocument");

                    if (!_boundsContainer) {
                        // no parent supplied or doesnt exist
                        _boundsContainer = isDocument ? document.body : _ctrl.info("container"); // check if window/document (then use body)
                    }
                    if (!isDocument && _util.css(_boundsContainer, "position") === 'static') {
                        // position mode needed for correct positioning of indicators
                        _util.css(_boundsContainer, {
                            position: "relative"
                        });
                    }

                    // add listeners for updates
                    Scene.on("change.plugin_addIndicators", handleTriggerParamsChange);
                    Scene.on("shift.plugin_addIndicators", handleBoundsParamsChange);

                    // updates trigger & bounds (will add elements if needed)
                    updateTriggerGroup();
                    updateBounds();

                    setTimeout(function () { // do after all execution is finished otherwise sometimes size calculations are off
                        _ctrl._indicators.updateBoundsPositions(Indicator);
                    }, 0);

                    log(3, "added indicators");
                };

                // remove indicators from DOM
                this.remove = function () {
                    if (Indicator.triggerGroup) { // if not set there's nothing to remove
                        Scene.off("change.plugin_addIndicators", handleTriggerParamsChange);
                        Scene.off("shift.plugin_addIndicators", handleBoundsParamsChange);

                        if (Indicator.triggerGroup.members.length > 1) {
                            // just remove from memberlist of old group
                            var group = Indicator.triggerGroup;
                            group.members.splice(group.members.indexOf(Indicator), 1);
                            _ctrl._indicators.updateTriggerGroupLabel(group);
                            _ctrl._indicators.updateTriggerGroupPositions(group);
                            Indicator.triggerGroup = undefined;
                        } else {
                            // remove complete group
                            removeTriggerGroup();
                        }
                        removeBounds();

                        log(3, "removed indicators");
                    }
                };

				/*
				 * ----------------------------------------------------------------
				 * internal Event Handlers
				 * ----------------------------------------------------------------
				 */

                // event handler for when bounds params change
                var handleBoundsParamsChange = function () {
                    updateBounds();
                };

                // event handler for when trigger params change
                var handleTriggerParamsChange = function (e) {
                    if (e.what === "triggerHook") {
                        updateTriggerGroup();
                    }
                };

				/*
				 * ----------------------------------------------------------------
				 * Bounds (start / stop) management
				 * ----------------------------------------------------------------
				 */

                // adds an new bounds elements to the array and to the DOM
                var addBounds = function () {
                    var v = _ctrl.info("vertical");
                    // apply stuff we didn't know before...
                    _util.css(_elemStart.firstChild, {
                        "border-bottom-width": v ? 1 : 0,
                        "border-right-width": v ? 0 : 1,
                        "bottom": v ? -1 : options.indent,
                        "right": v ? options.indent : -1,
                        "padding": v ? "0 8px" : "2px 4px",
                    });
                    _util.css(_elemEnd, {
                        "border-top-width": v ? 1 : 0,
                        "border-left-width": v ? 0 : 1,
                        "top": v ? "100%" : "",
                        "right": v ? options.indent : "",
                        "bottom": v ? "" : options.indent,
                        "left": v ? "" : "100%",
                        "padding": v ? "0 8px" : "2px 4px"
                    });
                    // append
                    _boundsContainer.appendChild(_elemBounds);
                };

                // remove bounds from list and DOM
                var removeBounds = function () {
                    _elemBounds.parentNode.removeChild(_elemBounds);
                };

                // update the start and end positions of the scene
                var updateBounds = function () {
                    if (_elemBounds.parentNode !== _boundsContainer) {
                        addBounds(); // Add Bounds elements (start/end)
                    }
                    var css = {};
                    css[_vertical ? "top" : "left"] = Scene.triggerPosition();
                    css[_vertical ? "height" : "width"] = Scene.duration();
                    _util.css(_elemBounds, css);
                    _util.css(_elemEnd, {
                        display: Scene.duration() > 0 ? "" : "none"
                    });
                };

				/*
				 * ----------------------------------------------------------------
				 * trigger and trigger group management
				 * ----------------------------------------------------------------
				 */

                // adds an new trigger group to the array and to the DOM
                var addTriggerGroup = function () {
                    var triggerElem = TPL.trigger(options.colorTrigger); // new trigger element
                    var css = {};
                    css[_vertical ? "right" : "bottom"] = 0;
                    css[_vertical ? "border-top-width" : "border-left-width"] = 1;
                    _util.css(triggerElem.firstChild, css);
                    _util.css(triggerElem.firstChild.firstChild, {
                        padding: _vertical ? "0 8px 3px 8px" : "3px 4px"
                    });
                    document.body.appendChild(triggerElem); // directly add to body
                    var newGroup = {
                        triggerHook: Scene.triggerHook(),
                        element: triggerElem,
                        members: [Indicator]
                    };
                    _ctrl._indicators.groups.push(newGroup);
                    Indicator.triggerGroup = newGroup;
                    // update right away
                    _ctrl._indicators.updateTriggerGroupLabel(newGroup);
                    _ctrl._indicators.updateTriggerGroupPositions(newGroup);
                };

                var removeTriggerGroup = function () {
                    _ctrl._indicators.groups.splice(_ctrl._indicators.groups.indexOf(Indicator.triggerGroup), 1);
                    Indicator.triggerGroup.element.parentNode.removeChild(Indicator.triggerGroup.element);
                    Indicator.triggerGroup = undefined;
                };

                // updates the trigger group -> either join existing or add new one
				/*
				 * Logic:
				 * 1 if a trigger group exist, check if it's in sync with Scene settings â€“ if so, nothing else needs to happen
				 * 2 try to find an existing one that matches Scene parameters
				 * 	 2.1 If a match is found check if already assigned to an existing group
				 *			 If so:
				 *       A: it was the last member of existing group -> kill whole group
				 *       B: the existing group has other members -> just remove from member list
				 *	 2.2 Assign to matching group
				 * 3 if no new match could be found, check if assigned to existing group
				 *   A: yes, and it's the only member -> just update parameters and positions and keep using this group
				 *   B: yes but there are other members -> remove from member list and create a new one
				 *   C: no, so create a new one
				 */
                var updateTriggerGroup = function () {
                    var
                        triggerHook = Scene.triggerHook(),
                        closeEnough = 0.0001;

                    // Have a group, check if it still matches
                    if (Indicator.triggerGroup) {
                        if (Math.abs(Indicator.triggerGroup.triggerHook - triggerHook) < closeEnough) {
                            // _util.log(0, "trigger", options.name, "->", "no need to change, still in sync");
                            return; // all good
                        }
                    }
                    // Don't have a group, check if a matching one exists
                    // _util.log(0, "trigger", options.name, "->", "out of sync!");
                    var
                        groups = _ctrl._indicators.groups,
                        group, i = groups.length;
                    while (i--) {
                        group = groups[i];
                        if (Math.abs(group.triggerHook - triggerHook) < closeEnough) {
                            // found a match!
                            // _util.log(0, "trigger", options.name, "->", "found match");
                            if (Indicator.triggerGroup) { // do I have an old group that is out of sync?
                                if (Indicator.triggerGroup.members.length === 1) { // is it the only remaining group?
                                    // _util.log(0, "trigger", options.name, "->", "kill");
                                    // was the last member, remove the whole group
                                    removeTriggerGroup();
                                } else {
                                    Indicator.triggerGroup.members.splice(Indicator.triggerGroup.members.indexOf(Indicator), 1); // just remove from memberlist of old group
                                    _ctrl._indicators.updateTriggerGroupLabel(Indicator.triggerGroup);
                                    _ctrl._indicators.updateTriggerGroupPositions(Indicator.triggerGroup);
                                    // _util.log(0, "trigger", options.name, "->", "removing from previous member list");
                                }
                            }
                            // join new group
                            group.members.push(Indicator);
                            Indicator.triggerGroup = group;
                            _ctrl._indicators.updateTriggerGroupLabel(group);
                            return;
                        }
                    }

                    // at this point I am obviously out of sync and don't match any other group
                    if (Indicator.triggerGroup) {
                        if (Indicator.triggerGroup.members.length === 1) {
                            // _util.log(0, "trigger", options.name, "->", "updating existing");
                            // out of sync but i'm the only member => just change and update
                            Indicator.triggerGroup.triggerHook = triggerHook;
                            _ctrl._indicators.updateTriggerGroupPositions(Indicator.triggerGroup);
                            return;
                        } else {
                            // _util.log(0, "trigger", options.name, "->", "removing from previous member list");
                            Indicator.triggerGroup.members.splice(Indicator.triggerGroup.members.indexOf(Indicator), 1); // just remove from memberlist of old group
                            _ctrl._indicators.updateTriggerGroupLabel(Indicator.triggerGroup);
                            _ctrl._indicators.updateTriggerGroupPositions(Indicator.triggerGroup);
                            Indicator.triggerGroup = undefined; // need a brand new group...
                        }
                    }
                    // _util.log(0, "trigger", options.name, "->", "add a new one");
                    // did not find any match, make new trigger group
                    addTriggerGroup();
                };
            };

			/*
			 * ----------------------------------------------------------------
			 * Templates for the indicators
			 * ----------------------------------------------------------------
			 */
            var TPL = {
                start: function (color) {
                    // inner element (for bottom offset -1, while keeping top position 0)
                    var inner = document.createElement("div");
                    inner.textContent = "start";
                    _util.css(inner, {
                        position: "absolute",
                        overflow: "visible",
                        "border-width": 0,
                        "border-style": "solid",
                        color: color,
                        "border-color": color
                    });
                    var e = document.createElement('div');
                    // wrapper
                    _util.css(e, {
                        position: "absolute",
                        overflow: "visible",
                        width: 0,
                        height: 0
                    });
                    e.appendChild(inner);
                    return e;
                },
                end: function (color) {
                    var e = document.createElement('div');
                    e.textContent = "end";
                    _util.css(e, {
                        position: "absolute",
                        overflow: "visible",
                        "border-width": 0,
                        "border-style": "solid",
                        color: color,
                        "border-color": color
                    });
                    return e;
                },
                bounds: function () {
                    var e = document.createElement('div');
                    _util.css(e, {
                        position: "absolute",
                        overflow: "visible",
                        "white-space": "nowrap",
                        "pointer-events": "none",
                        "font-size": FONT_SIZE
                    });
                    e.style.zIndex = ZINDEX;
                    return e;
                },
                trigger: function (color) {
                    // inner to be above or below line but keep position
                    var inner = document.createElement('div');
                    inner.textContent = "trigger";
                    _util.css(inner, {
                        position: "relative",
                    });
                    // inner wrapper for right: 0 and main element has no size
                    var w = document.createElement('div');
                    _util.css(w, {
                        position: "absolute",
                        overflow: "visible",
                        "border-width": 0,
                        "border-style": "solid",
                        color: color,
                        "border-color": color
                    });
                    w.appendChild(inner);
                    // wrapper
                    var e = document.createElement('div');
                    _util.css(e, {
                        position: "fixed",
                        overflow: "visible",
                        "white-space": "nowrap",
                        "pointer-events": "none",
                        "font-size": FONT_SIZE
                    });
                    e.style.zIndex = ZINDEX;
                    e.appendChild(w);
                    return e;
                },
            };

        }));

		/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
		 * ScrollMagic v2.0.5 (2015-04-29)
		 * The javascript library for magical scroll interactions.
		 * (c) 2015 Jan Paepke (@janpaepke)
		 * Project Website: http://scrollmagic.io
		 *
		 * @version 2.0.5
		 * @license Dual licensed under MIT license and GPL.
		 * @author Jan Paepke - e-mail@janpaepke.de
		 *
		 * @file ScrollMagic main library.
		 */
        /**
         * @namespace ScrollMagic
         */
        (function (root, factory) {
            if (true) {
                // AMD. Register as an anonymous module.
                !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } else if (typeof exports === 'object') {
                // CommonJS
                module.exports = factory();
            } else {
                // Browser global
                root.ScrollMagic = factory();
            }
        }(this, function () {
            "use strict";

            var ScrollMagic = function () {
                _util.log(2, '(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use \'new ScrollMagic.Controller()\' to create a new controller instance. Use \'new ScrollMagic.Scene()\' to instance a scene.');
            };

            ScrollMagic.version = "2.0.5";

            // TODO: temporary workaround for chrome's scroll jitter bug
            window.addEventListener("mousewheel", function () {});

            // global const
            var PIN_SPACER_ATTRIBUTE = "data-scrollmagic-pin-spacer";

            /**
             * The main class that is needed once per scroll container.
             *
             * @class
             *
             * @example
             * // basic initialization
             * var controller = new ScrollMagic.Controller();
             *
             * // passing options
             * var controller = new ScrollMagic.Controller({container: "#myContainer", loglevel: 3});
             *
             * @param {object} [options] - An object containing one or more options for the controller.
             * @param {(string|object)} [options.container=window] - A selector, DOM object that references the main container for scrolling.
             * @param {boolean} [options.vertical=true] - Sets the scroll mode to vertical (`true`) or horizontal (`false`) scrolling.
             * @param {object} [options.globalSceneOptions={}] - These options will be passed to every Scene that is added to the controller using the addScene method. For more information on Scene options see {@link ScrollMagic.Scene}.
             * @param {number} [options.loglevel=2] Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
             ** `0` => silent
             ** `1` => errors
             ** `2` => errors, warnings
             ** `3` => errors, warnings, debuginfo
             * @param {boolean} [options.refreshInterval=100] - Some changes don't call events by default, like changing the container size or moving a scene trigger element.
             This interval polls these parameters to fire the necessary events.
             If you don't use custom containers, trigger elements or have static layouts, where the positions of the trigger elements don't change, you can set this to 0 disable interval checking and improve performance.
             *
             */
            ScrollMagic.Controller = function (options) {
				/*
				 * ----------------------------------------------------------------
				 * settings
				 * ----------------------------------------------------------------
				 */
                var
                    NAMESPACE = 'ScrollMagic.Controller',
                    SCROLL_DIRECTION_FORWARD = 'FORWARD',
                    SCROLL_DIRECTION_REVERSE = 'REVERSE',
                    SCROLL_DIRECTION_PAUSED = 'PAUSED',
                    DEFAULT_OPTIONS = CONTROLLER_OPTIONS.defaults;

				/*
				 * ----------------------------------------------------------------
				 * private vars
				 * ----------------------------------------------------------------
				 */
                var
                    Controller = this,
                    _options = _util.extend({}, DEFAULT_OPTIONS, options),
                    _sceneObjects = [],
                    _updateScenesOnNextCycle = false,
                    // can be boolean (true => all scenes) or an array of scenes to be updated
                    _scrollPos = 0,
                    _scrollDirection = SCROLL_DIRECTION_PAUSED,
                    _isDocument = true,
                    _viewPortSize = 0,
                    _enabled = true,
                    _updateTimeout, _refreshTimeout;

				/*
				 * ----------------------------------------------------------------
				 * private functions
				 * ----------------------------------------------------------------
				 */

                /**
                 * Internal constructor function of the ScrollMagic Controller
                 * @private
                 */
                var construct = function () {
                    for (var key in _options) {
                        if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
                            log(2, "WARNING: Unknown option \"" + key + "\"");
                            delete _options[key];
                        }
                    }
                    _options.container = _util.get.elements(_options.container)[0];
                    // check ScrollContainer
                    if (!_options.container) {
                        log(1, "ERROR creating object " + NAMESPACE + ": No valid scroll container supplied");
                        throw NAMESPACE + " init failed."; // cancel
                    }
                    _isDocument = _options.container === window || _options.container === document.body || !document.body.contains(_options.container);
                    // normalize to window
                    if (_isDocument) {
                        _options.container = window;
                    }
                    // update container size immediately
                    _viewPortSize = getViewportSize();
                    // set event handlers
                    _options.container.addEventListener("resize", onChange);
                    _options.container.addEventListener("scroll", onChange);

                    _options.refreshInterval = parseInt(_options.refreshInterval) || DEFAULT_OPTIONS.refreshInterval;
                    scheduleRefresh();

                    log(3, "added new " + NAMESPACE + " controller (v" + ScrollMagic.version + ")");
                };

                /**
                 * Schedule the next execution of the refresh function
                 * @private
                 */
                var scheduleRefresh = function () {
                    if (_options.refreshInterval > 0) {
                        _refreshTimeout = window.setTimeout(refresh, _options.refreshInterval);
                    }
                };

                /**
                 * Default function to get scroll pos - overwriteable using `Controller.scrollPos(newFunction)`
                 * @private
                 */
                var getScrollPos = function () {
                    return _options.vertical ? _util.get.scrollTop(_options.container) : _util.get.scrollLeft(_options.container);
                };

                /**
                 * Returns the current viewport Size (width vor horizontal, height for vertical)
                 * @private
                 */
                var getViewportSize = function () {
                    return _options.vertical ? _util.get.height(_options.container) : _util.get.width(_options.container);
                };

                /**
                 * Default function to set scroll pos - overwriteable using `Controller.scrollTo(newFunction)`
                 * Make available publicly for pinned mousewheel workaround.
                 * @private
                 */
                var setScrollPos = this._setScrollPos = function (pos) {
                    if (_options.vertical) {
                        if (_isDocument) {
                            window.scrollTo(_util.get.scrollLeft(), pos);
                        } else {
                            _options.container.scrollTop = pos;
                        }
                    } else {
                        if (_isDocument) {
                            window.scrollTo(pos, _util.get.scrollTop());
                        } else {
                            _options.container.scrollLeft = pos;
                        }
                    }
                };

                /**
                 * Handle updates in cycles instead of on scroll (performance)
                 * @private
                 */
                var updateScenes = function () {
                    if (_enabled && _updateScenesOnNextCycle) {
                        // determine scenes to update
                        var scenesToUpdate = _util.type.Array(_updateScenesOnNextCycle) ? _updateScenesOnNextCycle : _sceneObjects.slice(0);
                        // reset scenes
                        _updateScenesOnNextCycle = false;
                        var oldScrollPos = _scrollPos;
                        // update scroll pos now instead of onChange, as it might have changed since scheduling (i.e. in-browser smooth scroll)
                        _scrollPos = Controller.scrollPos();
                        var deltaScroll = _scrollPos - oldScrollPos;
                        if (deltaScroll !== 0) { // scroll position changed?
                            _scrollDirection = (deltaScroll > 0) ? SCROLL_DIRECTION_FORWARD : SCROLL_DIRECTION_REVERSE;
                        }
                        // reverse order of scenes if scrolling reverse
                        if (_scrollDirection === SCROLL_DIRECTION_REVERSE) {
                            scenesToUpdate.reverse();
                        }
                        // update scenes
                        scenesToUpdate.forEach(function (scene, index) {
                            log(3, "updating Scene " + (index + 1) + "/" + scenesToUpdate.length + " (" + _sceneObjects.length + " total)");
                            scene.update(true);
                        });
                        if (scenesToUpdate.length === 0 && _options.loglevel >= 3) {
                            log(3, "updating 0 Scenes (nothing added to controller)");
                        }
                    }
                };

                /**
                 * Initializes rAF callback
                 * @private
                 */
                var debounceUpdate = function () {
                    _updateTimeout = _util.rAF(updateScenes);
                };

                /**
                 * Handles Container changes
                 * @private
                 */
                var onChange = function (e) {
                    log(3, "event fired causing an update:", e.type);
                    if (e.type == "resize") {
                        // resize
                        _viewPortSize = getViewportSize();
                        _scrollDirection = SCROLL_DIRECTION_PAUSED;
                    }
                    // schedule update
                    if (_updateScenesOnNextCycle !== true) {
                        _updateScenesOnNextCycle = true;
                        debounceUpdate();
                    }
                };

                var refresh = function () {
                    if (!_isDocument) {
                        // simulate resize event. Only works for viewport relevant param (performance)
                        if (_viewPortSize != getViewportSize()) {
                            var resizeEvent;
                            try {
                                resizeEvent = new Event('resize', {
                                    bubbles: false,
                                    cancelable: false
                                });
                            } catch (e) { // stupid IE
                                resizeEvent = document.createEvent("Event");
                                resizeEvent.initEvent("resize", false, false);
                            }
                            _options.container.dispatchEvent(resizeEvent);
                        }
                    }
                    _sceneObjects.forEach(function (scene, index) { // refresh all scenes
                        scene.refresh();
                    });
                    scheduleRefresh();
                };

                /**
                 * Send a debug message to the console.
                 * provided publicly with _log for plugins
                 * @private
                 *
                 * @param {number} loglevel - The loglevel required to initiate output for the message.
                 * @param {...mixed} output - One or more variables that should be passed to the console.
                 */
                var log = this._log = function (loglevel, output) {
                    if (_options.loglevel >= loglevel) {
                        Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");
                        _util.log.apply(window, arguments);
                    }
                };
                // for scenes we have getters for each option, but for the controller we don't, so we need to make it available externally for plugins
                this._options = _options;

                /**
                 * Sort scenes in ascending order of their start offset.
                 * @private
                 *
                 * @param {array} ScenesArray - an array of ScrollMagic Scenes that should be sorted
                 * @return {array} The sorted array of Scenes.
                 */
                var sortScenes = function (ScenesArray) {
                    if (ScenesArray.length <= 1) {
                        return ScenesArray;
                    } else {
                        var scenes = ScenesArray.slice(0);
                        scenes.sort(function (a, b) {
                            return a.scrollOffset() > b.scrollOffset() ? 1 : -1;
                        });
                        return scenes;
                    }
                };

                /**
                 * ----------------------------------------------------------------
                 * public functions
                 * ----------------------------------------------------------------
                 */

                /**
                 * Add one ore more scene(s) to the controller.
                 * This is the equivalent to `Scene.addTo(controller)`.
                 * @public
                 * @example
                 * // with a previously defined scene
                 * controller.addScene(scene);
                 *
                 * // with a newly created scene.
                 * controller.addScene(new ScrollMagic.Scene({duration : 0}));
                 *
                 * // adding multiple scenes
                 * controller.addScene([scene, scene2, new ScrollMagic.Scene({duration : 0})]);
                 *
                 * @param {(ScrollMagic.Scene|array)} newScene - ScrollMagic Scene or Array of Scenes to be added to the controller.
                 * @return {Controller} Parent object for chaining.
                 */
                this.addScene = function (newScene) {
                    if (_util.type.Array(newScene)) {
                        newScene.forEach(function (scene, index) {
                            Controller.addScene(scene);
                        });
                    } else if (newScene instanceof ScrollMagic.Scene) {
                        if (newScene.controller() !== Controller) {
                            newScene.addTo(Controller);
                        } else if (_sceneObjects.indexOf(newScene) < 0) {
                            // new scene
                            _sceneObjects.push(newScene); // add to array
                            _sceneObjects = sortScenes(_sceneObjects); // sort
                            newScene.on("shift.controller_sort", function () { // resort whenever scene moves
                                _sceneObjects = sortScenes(_sceneObjects);
                            });
                            // insert Global defaults.
                            for (var key in _options.globalSceneOptions) {
                                if (newScene[key]) {
                                    newScene[key].call(newScene, _options.globalSceneOptions[key]);
                                }
                            }
                            log(3, "adding Scene (now " + _sceneObjects.length + " total)");
                        }
                    } else {
                        log(1, "ERROR: invalid argument supplied for '.addScene()'");
                    }
                    return Controller;
                };

                /**
                 * Remove one ore more scene(s) from the controller.
                 * This is the equivalent to `Scene.remove()`.
                 * @public
                 * @example
                 * // remove a scene from the controller
                 * controller.removeScene(scene);
                 *
                 * // remove multiple scenes from the controller
                 * controller.removeScene([scene, scene2, scene3]);
                 *
                 * @param {(ScrollMagic.Scene|array)} Scene - ScrollMagic Scene or Array of Scenes to be removed from the controller.
                 * @returns {Controller} Parent object for chaining.
                 */
                this.removeScene = function (Scene) {
                    if (_util.type.Array(Scene)) {
                        Scene.forEach(function (scene, index) {
                            Controller.removeScene(scene);
                        });
                    } else {
                        var index = _sceneObjects.indexOf(Scene);
                        if (index > -1) {
                            Scene.off("shift.controller_sort");
                            _sceneObjects.splice(index, 1);
                            log(3, "removing Scene (now " + _sceneObjects.length + " left)");
                            Scene.remove();
                        }
                    }
                    return Controller;
                };

                /**
                 * Update one ore more scene(s) according to the scroll position of the container.
                 * This is the equivalent to `Scene.update()`.
                 * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.
                 * It then updates the current scene state accordingly (or does nothing, if the state is already correct) â€“ Pins will be set to their correct position and tweens will be updated to their correct progress.
                 * _**Note:** This method gets called constantly whenever Controller detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
                 * @public
                 * @example
                 * // update a specific scene on next cycle
                 * controller.updateScene(scene);
                 *
                 * // update a specific scene immediately
                 * controller.updateScene(scene, true);
                 *
                 * // update multiple scenes scene on next cycle
                 * controller.updateScene([scene1, scene2, scene3]);
                 *
                 * @param {ScrollMagic.Scene} Scene - ScrollMagic Scene or Array of Scenes that is/are supposed to be updated.
                 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle.
                 This is useful when changing multiple properties of the scene - this way it will only be updated once all new properties are set (updateScenes).
                 * @return {Controller} Parent object for chaining.
                 */
                this.updateScene = function (Scene, immediately) {
                    if (_util.type.Array(Scene)) {
                        Scene.forEach(function (scene, index) {
                            Controller.updateScene(scene, immediately);
                        });
                    } else {
                        if (immediately) {
                            Scene.update(true);
                        } else if (_updateScenesOnNextCycle !== true && Scene instanceof ScrollMagic.Scene) { // if _updateScenesOnNextCycle is true, all connected scenes are already scheduled for update
                            // prep array for next update cycle
                            _updateScenesOnNextCycle = _updateScenesOnNextCycle || [];
                            if (_updateScenesOnNextCycle.indexOf(Scene) == -1) {
                                _updateScenesOnNextCycle.push(Scene);
                            }
                            _updateScenesOnNextCycle = sortScenes(_updateScenesOnNextCycle); // sort
                            debounceUpdate();
                        }
                    }
                    return Controller;
                };

                /**
                 * Updates the controller params and calls updateScene on every scene, that is attached to the controller.
                 * See `Controller.updateScene()` for more information about what this means.
                 * In most cases you will not need this function, as it is called constantly, whenever ScrollMagic detects a state change event, like resize or scroll.
                 * The only application for this method is when ScrollMagic fails to detect these events.
                 * One application is with some external scroll libraries (like iScroll) that move an internal container to a negative offset instead of actually scrolling. In this case the update on the controller needs to be called whenever the child container's position changes.
                 * For this case there will also be the need to provide a custom function to calculate the correct scroll position. See `Controller.scrollPos()` for details.
                 * @public
                 * @example
                 * // update the controller on next cycle (saves performance due to elimination of redundant updates)
                 * controller.update();
                 *
                 * // update the controller immediately
                 * controller.update(true);
                 *
                 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance)
                 * @return {Controller} Parent object for chaining.
                 */
                this.update = function (immediately) {
                    onChange({
                        type: "resize"
                    }); // will update size and set _updateScenesOnNextCycle to true
                    if (immediately) {
                        updateScenes();
                    }
                    return Controller;
                };

                /**
                 * Scroll to a numeric scroll offset, a DOM element, the start of a scene or provide an alternate method for scrolling.
                 * For vertical controllers it will change the top scroll offset and for horizontal applications it will change the left offset.
                 * @public
                 *
                 * @since 1.1.0
                 * @example
                 * // scroll to an offset of 100
                 * controller.scrollTo(100);
                 *
                 * // scroll to a DOM element
                 * controller.scrollTo("#anchor");
                 *
                 * // scroll to the beginning of a scene
                 * var scene = new ScrollMagic.Scene({offset: 200});
                 * controller.scrollTo(scene);
                 *
                 * // define a new scroll position modification function (jQuery animate instead of jump)
                 * controller.scrollTo(function (newScrollPos) {
			 *	$("html, body").animate({scrollTop: newScrollPos});
			 * });
                 * controller.scrollTo(100); // call as usual, but the new function will be used instead
                 *
                 * // define a new scroll function with an additional parameter
                 * controller.scrollTo(function (newScrollPos, message) {
			 *  console.log(message);
			 *	$(this).animate({scrollTop: newScrollPos});
			 * });
                 * // call as usual, but supply an extra parameter to the defined custom function
                 * controller.scrollTo(100, "my message");
                 *
                 * // define a new scroll function with an additional parameter containing multiple variables
                 * controller.scrollTo(function (newScrollPos, options) {
			 *  someGlobalVar = options.a + options.b;
			 *	$(this).animate({scrollTop: newScrollPos});
			 * });
                 * // call as usual, but supply an extra parameter containing multiple options
                 * controller.scrollTo(100, {a: 1, b: 2});
                 *
                 * // define a new scroll function with a callback supplied as an additional parameter
                 * controller.scrollTo(function (newScrollPos, callback) {
			 *	$(this).animate({scrollTop: newScrollPos}, 400, "swing", callback);
			 * });
                 * // call as usual, but supply an extra parameter, which is used as a callback in the previously defined custom scroll function
                 * controller.scrollTo(100, function() {
			 *	console.log("scroll has finished.");
			 * });
                 *
                 * @param {mixed} scrollTarget - The supplied argument can be one of these types:
                 * 1. `number` -> The container will scroll to this new scroll offset.
                 * 2. `string` or `object` -> Can be a selector or a DOM object.
                 *  The container will scroll to the position of this element.
                 * 3. `ScrollMagic Scene` -> The container will scroll to the start of this scene.
                 * 4. `function` -> This function will be used for future scroll position modifications.
                 *  This provides a way for you to change the behaviour of scrolling and adding new behaviour like animation. The function receives the new scroll position as a parameter and a reference to the container element using `this`.
                 *  It may also optionally receive an optional additional parameter (see below)
                 *  _**NOTE:**
                 *  All other options will still work as expected, using the new function to scroll._
                 * @param {mixed} [additionalParameter] - If a custom scroll function was defined (see above 4.), you may want to supply additional parameters to it, when calling it. You can do this using this parameter â€“ see examples for details. Please note, that this parameter will have no effect, if you use the default scrolling function.
                 * @returns {Controller} Parent object for chaining.
                 */
                this.scrollTo = function (scrollTarget, additionalParameter) {
                    if (_util.type.Number(scrollTarget)) { // excecute
                        setScrollPos.call(_options.container, scrollTarget, additionalParameter);
                    } else if (scrollTarget instanceof ScrollMagic.Scene) { // scroll to scene
                        if (scrollTarget.controller() === Controller) { // check if the controller is associated with this scene
                            Controller.scrollTo(scrollTarget.scrollOffset(), additionalParameter);
                        } else {
                            log(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", scrollTarget);
                        }
                    } else if (_util.type.Function(scrollTarget)) { // assign new scroll function
                        setScrollPos = scrollTarget;
                    } else { // scroll to element
                        var elem = _util.get.elements(scrollTarget)[0];
                        if (elem) {
                            // if parent is pin spacer, use spacer position instead so correct start position is returned for pinned elements.
                            while (elem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
                                elem = elem.parentNode;
                            }

                            var
                                param = _options.vertical ? "top" : "left",
                                // which param is of interest ?
                                containerOffset = _util.get.offset(_options.container),
                                // container position is needed because element offset is returned in relation to document, not in relation to container.
                                elementOffset = _util.get.offset(elem);

                            if (!_isDocument) { // container is not the document root, so substract scroll Position to get correct trigger element position relative to scrollcontent
                                containerOffset[param] -= Controller.scrollPos();
                            }

                            Controller.scrollTo(elementOffset[param] - containerOffset[param], additionalParameter);
                        } else {
                            log(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", scrollTarget);
                        }
                    }
                    return Controller;
                };

                /**
                 * **Get** the current scrollPosition or **Set** a new method to calculate it.
                 * -> **GET**:
                 * When used as a getter this function will return the current scroll position.
                 * To get a cached value use Controller.info("scrollPos"), which will be updated in the update cycle.
                 * For vertical controllers it will return the top scroll offset and for horizontal applications it will return the left offset.
                 *
                 * -> **SET**:
                 * When used as a setter this method prodes a way to permanently overwrite the controller's scroll position calculation.
                 * A typical usecase is when the scroll position is not reflected by the containers scrollTop or scrollLeft values, but for example by the inner offset of a child container.
                 * Moving a child container inside a parent is a commonly used method for several scrolling frameworks, including iScroll.
                 * By providing an alternate calculation function you can make sure ScrollMagic receives the correct scroll position.
                 * Please also bear in mind that your function should return y values for vertical scrolls an x for horizontals.
                 *
                 * To change the current scroll position please use `Controller.scrollTo()`.
                 * @public
                 *
                 * @example
                 * // get the current scroll Position
                 * var scrollPos = controller.scrollPos();
                 *
                 * // set a new scroll position calculation method
                 * controller.scrollPos(function () {
			 *	return this.info("vertical") ? -mychildcontainer.y : -mychildcontainer.x
			 * });
                 *
                 * @param {function} [scrollPosMethod] - The function to be used for the scroll position calculation of the container.
                 * @returns {(number|Controller)} Current scroll position or parent object for chaining.
                 */
                this.scrollPos = function (scrollPosMethod) {
                    if (!arguments.length) { // get
                        return getScrollPos.call(Controller);
                    } else { // set
                        if (_util.type.Function(scrollPosMethod)) {
                            getScrollPos = scrollPosMethod;
                        } else {
                            log(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'.");
                        }
                    }
                    return Controller;
                };

                /**
                 * **Get** all infos or one in particular about the controller.
                 * @public
                 * @example
                 * // returns the current scroll position (number)
                 * var scrollPos = controller.info("scrollPos");
                 *
                 * // returns all infos as an object
                 * var infos = controller.info();
                 *
                 * @param {string} [about] - If passed only this info will be returned instead of an object containing all.
                 Valid options are:
                 ** `"size"` => the current viewport size of the container
                 ** `"vertical"` => true if vertical scrolling, otherwise false
                 ** `"scrollPos"` => the current scroll position
                 ** `"scrollDirection"` => the last known direction of the scroll
                 ** `"container"` => the container element
                 ** `"isDocument"` => true if container element is the document.
                 * @returns {(mixed|object)} The requested info(s).
                 */
                this.info = function (about) {
                    var values = {
                        size: _viewPortSize,
                        // contains height or width (in regard to orientation);
                        vertical: _options.vertical,
                        scrollPos: _scrollPos,
                        scrollDirection: _scrollDirection,
                        container: _options.container,
                        isDocument: _isDocument
                    };
                    if (!arguments.length) { // get all as an object
                        return values;
                    } else if (values[about] !== undefined) {
                        return values[about];
                    } else {
                        log(1, "ERROR: option \"" + about + "\" is not available");
                        return;
                    }
                };

                /**
                 * **Get** or **Set** the current loglevel option value.
                 * @public
                 *
                 * @example
                 * // get the current value
                 * var loglevel = controller.loglevel();
                 *
                 * // set a new value
                 * controller.loglevel(3);
                 *
                 * @param {number} [newLoglevel] - The new loglevel setting of the Controller. `[0-3]`
                 * @returns {(number|Controller)} Current loglevel or parent object for chaining.
                 */
                this.loglevel = function (newLoglevel) {
                    if (!arguments.length) { // get
                        return _options.loglevel;
                    } else if (_options.loglevel != newLoglevel) { // set
                        _options.loglevel = newLoglevel;
                    }
                    return Controller;
                };

                /**
                 * **Get** or **Set** the current enabled state of the controller.
                 * This can be used to disable all Scenes connected to the controller without destroying or removing them.
                 * @public
                 *
                 * @example
                 * // get the current value
                 * var enabled = controller.enabled();
                 *
                 * // disable the controller
                 * controller.enabled(false);
                 *
                 * @param {boolean} [newState] - The new enabled state of the controller `true` or `false`.
                 * @returns {(boolean|Controller)} Current enabled state or parent object for chaining.
                 */
                this.enabled = function (newState) {
                    if (!arguments.length) { // get
                        return _enabled;
                    } else if (_enabled != newState) { // set
                        _enabled = !! newState;
                        Controller.updateScene(_sceneObjects, true);
                    }
                    return Controller;
                };

                /**
                 * Destroy the Controller, all Scenes and everything.
                 * @public
                 *
                 * @example
                 * // without resetting the scenes
                 * controller = controller.destroy();
                 *
                 * // with scene reset
                 * controller = controller.destroy(true);
                 *
                 * @param {boolean} [resetScenes=false] - If `true` the pins and tweens (if existent) of all scenes will be reset.
                 * @returns {null} Null to unset handler variables.
                 */
                this.destroy = function (resetScenes) {
                    window.clearTimeout(_refreshTimeout);
                    var i = _sceneObjects.length;
                    while (i--) {
                        _sceneObjects[i].destroy(resetScenes);
                    }
                    _options.container.removeEventListener("resize", onChange);
                    _options.container.removeEventListener("scroll", onChange);
                    _util.cAF(_updateTimeout);
                    log(3, "destroyed " + NAMESPACE + " (reset: " + (resetScenes ? "true" : "false") + ")");
                    return null;
                };

                // INIT
                construct();
                return Controller;
            };

            // store pagewide controller options
            var CONTROLLER_OPTIONS = {
                defaults: {
                    container: window,
                    vertical: true,
                    globalSceneOptions: {},
                    loglevel: 2,
                    refreshInterval: 100
                }
            };
			/*
			 * method used to add an option to ScrollMagic Scenes.
			 */
            ScrollMagic.Controller.addOption = function (name, defaultValue) {
                CONTROLLER_OPTIONS.defaults[name] = defaultValue;
            };
            // instance extension function for plugins
            ScrollMagic.Controller.extend = function (extension) {
                var oldClass = this;
                ScrollMagic.Controller = function () {
                    oldClass.apply(this, arguments);
                    this.$super = _util.extend({}, this); // copy parent state
                    return extension.apply(this, arguments) || this;
                };
                _util.extend(ScrollMagic.Controller, oldClass); // copy properties
                ScrollMagic.Controller.prototype = oldClass.prototype; // copy prototype
                ScrollMagic.Controller.prototype.constructor = ScrollMagic.Controller; // restore constructor
            };


            /**
             * A Scene defines where the controller should react and how.
             *
             * @class
             *
             * @example
             * // create a standard scene and add it to a controller
             * new ScrollMagic.Scene()
             *		.addTo(controller);
             *
             * // create a scene with custom options and assign a handler to it.
             * var scene = new ScrollMagic.Scene({
		 * 		duration: 100,
		 *		offset: 200,
		 *		triggerHook: "onEnter",
		 *		reverse: false
		 * });
             *
             * @param {object} [options] - Options for the Scene. The options can be updated at any time.
             Instead of setting the options for each scene individually you can also set them globally in the controller as the controllers `globalSceneOptions` option. The object accepts the same properties as the ones below.
             When a scene is added to the controller the options defined using the Scene constructor will be overwritten by those set in `globalSceneOptions`.
             * @param {(number|function)} [options.duration=0] - The duration of the scene.
             If `0` tweens will auto-play when reaching the scene start point, pins will be pinned indefinetly starting at the start position.
             A function retuning the duration value is also supported. Please see `Scene.duration()` for details.
             * @param {number} [options.offset=0] - Offset Value for the Trigger Position. If no triggerElement is defined this will be the scroll distance from the start of the page, after which the scene will start.
             * @param {(string|object)} [options.triggerElement=null] - Selector or DOM object that defines the start of the scene. If undefined the scene will start right at the start of the page (unless an offset is set).
             * @param {(number|string)} [options.triggerHook="onCenter"] - Can be a number between 0 and 1 defining the position of the trigger Hook in relation to the viewport.
             Can also be defined using a string:
             ** `"onEnter"` => `1`
             ** `"onCenter"` => `0.5`
             ** `"onLeave"` => `0`
             * @param {boolean} [options.reverse=true] - Should the scene reverse, when scrolling up?
             * @param {number} [options.loglevel=2] - Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
             ** `0` => silent
             ** `1` => errors
             ** `2` => errors, warnings
             ** `3` => errors, warnings, debuginfo
             *
             */
            ScrollMagic.Scene = function (options) {

				/*
				 * ----------------------------------------------------------------
				 * settings
				 * ----------------------------------------------------------------
				 */

                var
                    NAMESPACE = 'ScrollMagic.Scene',
                    SCENE_STATE_BEFORE = 'BEFORE',
                    SCENE_STATE_DURING = 'DURING',
                    SCENE_STATE_AFTER = 'AFTER',
                    DEFAULT_OPTIONS = SCENE_OPTIONS.defaults;

				/*
				 * ----------------------------------------------------------------
				 * private vars
				 * ----------------------------------------------------------------
				 */

                var
                    Scene = this,
                    _options = _util.extend({}, DEFAULT_OPTIONS, options),
                    _state = SCENE_STATE_BEFORE,
                    _progress = 0,
                    _scrollOffset = {
                        start: 0,
                        end: 0
                    },
                    // reflects the controllers's scroll position for the start and end of the scene respectively
                    _triggerPos = 0,
                    _enabled = true,
                    _durationUpdateMethod, _controller;

                /**
                 * Internal constructor function of the ScrollMagic Scene
                 * @private
                 */
                var construct = function () {
                    for (var key in _options) { // check supplied options
                        if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
                            log(2, "WARNING: Unknown option \"" + key + "\"");
                            delete _options[key];
                        }
                    }
                    // add getters/setters for all possible options
                    for (var optionName in DEFAULT_OPTIONS) {
                        addSceneOption(optionName);
                    }
                    // validate all options
                    validateOption();
                };

				/*
				 * ----------------------------------------------------------------
				 * Event Management
				 * ----------------------------------------------------------------
				 */

                var _listeners = {};
                /**
                 * Scene start event.
                 * Fires whenever the scroll position its the starting point of the scene.
                 * It will also fire when scrolling back up going over the start position of the scene. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
                 *
                 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
                 *
                 * @event ScrollMagic.Scene#start
                 *
                 * @example
                 * scene.on("start", function (event) {
			 * 	console.log("Hit start point of scene.");
			 * });
                 *
                 * @property {object} event - The event Object passed to each callback
                 * @property {string} event.type - The name of the event
                 * @property {Scene} event.target - The Scene object that triggered this event
                 * @property {number} event.progress - Reflects the current progress of the scene
                 * @property {string} event.state - The current state of the scene `"BEFORE"` or `"DURING"`
                 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
                 */
                /**
                 * Scene end event.
                 * Fires whenever the scroll position its the ending point of the scene.
                 * It will also fire when scrolling back up from after the scene and going over its end position. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
                 *
                 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
                 *
                 * @event ScrollMagic.Scene#end
                 *
                 * @example
                 * scene.on("end", function (event) {
			 * 	console.log("Hit end point of scene.");
			 * });
                 *
                 * @property {object} event - The event Object passed to each callback
                 * @property {string} event.type - The name of the event
                 * @property {Scene} event.target - The Scene object that triggered this event
                 * @property {number} event.progress - Reflects the current progress of the scene
                 * @property {string} event.state - The current state of the scene `"DURING"` or `"AFTER"`
                 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
                 */
                /**
                 * Scene enter event.
                 * Fires whenever the scene enters the "DURING" state.
                 * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene enters its active scroll timeframe, regardless of the scroll-direction.
                 *
                 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
                 *
                 * @event ScrollMagic.Scene#enter
                 *
                 * @example
                 * scene.on("enter", function (event) {
			 * 	console.log("Scene entered.");
			 * });
                 *
                 * @property {object} event - The event Object passed to each callback
                 * @property {string} event.type - The name of the event
                 * @property {Scene} event.target - The Scene object that triggered this event
                 * @property {number} event.progress - Reflects the current progress of the scene
                 * @property {string} event.state - The current state of the scene - always `"DURING"`
                 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
                 */
                /**
                 * Scene leave event.
                 * Fires whenever the scene's state goes from "DURING" to either "BEFORE" or "AFTER".
                 * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene leaves its active scroll timeframe, regardless of the scroll-direction.
                 *
                 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
                 *
                 * @event ScrollMagic.Scene#leave
                 *
                 * @example
                 * scene.on("leave", function (event) {
			 * 	console.log("Scene left.");
			 * });
                 *
                 * @property {object} event - The event Object passed to each callback
                 * @property {string} event.type - The name of the event
                 * @property {Scene} event.target - The Scene object that triggered this event
                 * @property {number} event.progress - Reflects the current progress of the scene
                 * @property {string} event.state - The current state of the scene `"BEFORE"` or `"AFTER"`
                 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
                 */
                /**
                 * Scene update event.
                 * Fires whenever the scene is updated (but not necessarily changes the progress).
                 *
                 * @event ScrollMagic.Scene#update
                 *
                 * @example
                 * scene.on("update", function (event) {
			 * 	console.log("Scene updated.");
			 * });
                 *
                 * @property {object} event - The event Object passed to each callback
                 * @property {string} event.type - The name of the event
                 * @property {Scene} event.target - The Scene object that triggered this event
                 * @property {number} event.startPos - The starting position of the scene (in relation to the conainer)
                 * @property {number} event.endPos - The ending position of the scene (in relation to the conainer)
                 * @property {number} event.scrollPos - The current scroll position of the container
                 */
                /**
                 * Scene progress event.
                 * Fires whenever the progress of the scene changes.
                 *
                 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
                 *
                 * @event ScrollMagic.Scene#progress
                 *
                 * @example
                 * scene.on("progress", function (event) {
			 * 	console.log("Scene progress changed to " + event.progress);
			 * });
                 *
                 * @property {object} event - The event Object passed to each callback
                 * @property {string} event.type - The name of the event
                 * @property {Scene} event.target - The Scene object that triggered this event
                 * @property {number} event.progress - Reflects the current progress of the scene
                 * @property {string} event.state - The current state of the scene `"BEFORE"`, `"DURING"` or `"AFTER"`
                 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
                 */
                /**
                 * Scene change event.
                 * Fires whenvever a property of the scene is changed.
                 *
                 * @event ScrollMagic.Scene#change
                 *
                 * @example
                 * scene.on("change", function (event) {
			 * 	console.log("Scene Property \"" + event.what + "\" changed to " + event.newval);
			 * });
                 *
                 * @property {object} event - The event Object passed to each callback
                 * @property {string} event.type - The name of the event
                 * @property {Scene} event.target - The Scene object that triggered this event
                 * @property {string} event.what - Indicates what value has been changed
                 * @property {mixed} event.newval - The new value of the changed property
                 */
                /**
                 * Scene shift event.
                 * Fires whenvever the start or end **scroll offset** of the scene change.
                 * This happens explicitely, when one of these values change: `offset`, `duration` or `triggerHook`.
                 * It will fire implicitly when the `triggerElement` changes, if the new element has a different position (most cases).
                 * It will also fire implicitly when the size of the container changes and the triggerHook is anything other than `onLeave`.
                 *
                 * @event ScrollMagic.Scene#shift
                 * @since 1.1.0
                 *
                 * @example
                 * scene.on("shift", function (event) {
			 * 	console.log("Scene moved, because the " + event.reason + " has changed.)");
			 * });
                 *
                 * @property {object} event - The event Object passed to each callback
                 * @property {string} event.type - The name of the event
                 * @property {Scene} event.target - The Scene object that triggered this event
                 * @property {string} event.reason - Indicates why the scene has shifted
                 */
                /**
                 * Scene destroy event.
                 * Fires whenvever the scene is destroyed.
                 * This can be used to tidy up custom behaviour used in events.
                 *
                 * @event ScrollMagic.Scene#destroy
                 * @since 1.1.0
                 *
                 * @example
                 * scene.on("enter", function (event) {
			 *        // add custom action
			 *        $("#my-elem").left("200");
			 *      })
                 *      .on("destroy", function (event) {
			 *        // reset my element to start position
			 *        if (event.reset) {
			 *          $("#my-elem").left("0");
			 *        }
			 *      });
                 *
                 * @property {object} event - The event Object passed to each callback
                 * @property {string} event.type - The name of the event
                 * @property {Scene} event.target - The Scene object that triggered this event
                 * @property {boolean} event.reset - Indicates if the destroy method was called with reset `true` or `false`.
                 */
                /**
                 * Scene add event.
                 * Fires when the scene is added to a controller.
                 * This is mostly used by plugins to know that change might be due.
                 *
                 * @event ScrollMagic.Scene#add
                 * @since 2.0.0
                 *
                 * @example
                 * scene.on("add", function (event) {
			 * 	console.log('Scene was added to a new controller.');
			 * });
                 *
                 * @property {object} event - The event Object passed to each callback
                 * @property {string} event.type - The name of the event
                 * @property {Scene} event.target - The Scene object that triggered this event
                 * @property {boolean} event.controller - The controller object the scene was added to.
                 */
                /**
                 * Scene remove event.
                 * Fires when the scene is removed from a controller.
                 * This is mostly used by plugins to know that change might be due.
                 *
                 * @event ScrollMagic.Scene#remove
                 * @since 2.0.0
                 *
                 * @example
                 * scene.on("remove", function (event) {
			 * 	console.log('Scene was removed from its controller.');
			 * });
                 *
                 * @property {object} event - The event Object passed to each callback
                 * @property {string} event.type - The name of the event
                 * @property {Scene} event.target - The Scene object that triggered this event
                 */

                /**
                 * Add one ore more event listener.
                 * The callback function will be fired at the respective event, and an object containing relevant data will be passed to the callback.
                 * @method ScrollMagic.Scene#on
                 *
                 * @example
                 * function callback (event) {
			 * 		console.log("Event fired! (" + event.type + ")");
			 * }
                 * // add listeners
                 * scene.on("change update progress start end enter leave", callback);
                 *
                 * @param {string} names - The name or names of the event the callback should be attached to.
                 * @param {function} callback - A function that should be executed, when the event is dispatched. An event object will be passed to the callback.
                 * @returns {Scene} Parent object for chaining.
                 */
                this.on = function (names, callback) {
                    if (_util.type.Function(callback)) {
                        names = names.trim().split(' ');
                        names.forEach(function (fullname) {
                            var
                                nameparts = fullname.split('.'),
                                eventname = nameparts[0],
                                namespace = nameparts[1];
                            if (eventname != "*") { // disallow wildcards
                                if (!_listeners[eventname]) {
                                    _listeners[eventname] = [];
                                }
                                _listeners[eventname].push({
                                    namespace: namespace || '',
                                    callback: callback
                                });
                            }
                        });
                    } else {
                        log(1, "ERROR when calling '.on()': Supplied callback for '" + names + "' is not a valid function!");
                    }
                    return Scene;
                };

                /**
                 * Remove one or more event listener.
                 * @method ScrollMagic.Scene#off
                 *
                 * @example
                 * function callback (event) {
			 * 		console.log("Event fired! (" + event.type + ")");
			 * }
                 * // add listeners
                 * scene.on("change update", callback);
                 * // remove listeners
                 * scene.off("change update", callback);
                 *
                 * @param {string} names - The name or names of the event that should be removed.
                 * @param {function} [callback] - A specific callback function that should be removed. If none is passed all callbacks to the event listener will be removed.
                 * @returns {Scene} Parent object for chaining.
                 */
                this.off = function (names, callback) {
                    if (!names) {
                        log(1, "ERROR: Invalid event name supplied.");
                        return Scene;
                    }
                    names = names.trim().split(' ');
                    names.forEach(function (fullname, key) {
                        var
                            nameparts = fullname.split('.'),
                            eventname = nameparts[0],
                            namespace = nameparts[1] || '',
                            removeList = eventname === '*' ? Object.keys(_listeners) : [eventname];
                        removeList.forEach(function (remove) {
                            var
                                list = _listeners[remove] || [],
                                i = list.length;
                            while (i--) {
                                var listener = list[i];
                                if (listener && (namespace === listener.namespace || namespace === '*') && (!callback || callback == listener.callback)) {
                                    list.splice(i, 1);
                                }
                            }
                            if (!list.length) {
                                delete _listeners[remove];
                            }
                        });
                    });
                    return Scene;
                };

                /**
                 * Trigger an event.
                 * @method ScrollMagic.Scene#trigger
                 *
                 * @example
                 * this.trigger("change");
                 *
                 * @param {string} name - The name of the event that should be triggered.
                 * @param {object} [vars] - An object containing info that should be passed to the callback.
                 * @returns {Scene} Parent object for chaining.
                 */
                this.trigger = function (name, vars) {
                    if (name) {
                        var
                            nameparts = name.trim().split('.'),
                            eventname = nameparts[0],
                            namespace = nameparts[1],
                            listeners = _listeners[eventname];
                        log(3, 'event fired:', eventname, vars ? "->" : '', vars || '');
                        if (listeners) {
                            listeners.forEach(function (listener, key) {
                                if (!namespace || namespace === listener.namespace) {
                                    listener.callback.call(Scene, new ScrollMagic.Event(eventname, listener.namespace, Scene, vars));
                                }
                            });
                        }
                    } else {
                        log(1, "ERROR: Invalid event name supplied.");
                    }
                    return Scene;
                };

                // set event listeners
                Scene.on("change.internal", function (e) {
                    if (e.what !== "loglevel" && e.what !== "tweenChanges") { // no need for a scene update scene with these options...
                        if (e.what === "triggerElement") {
                            updateTriggerElementPosition();
                        } else if (e.what === "reverse") { // the only property left that may have an impact on the current scene state. Everything else is handled by the shift event.
                            Scene.update();
                        }
                    }
                }).on("shift.internal", function (e) {
                    updateScrollOffset();
                    Scene.update(); // update scene to reflect new position
                });

                /**
                 * Send a debug message to the console.
                 * @private
                 * but provided publicly with _log for plugins
                 *
                 * @param {number} loglevel - The loglevel required to initiate output for the message.
                 * @param {...mixed} output - One or more variables that should be passed to the console.
                 */
                var log = this._log = function (loglevel, output) {
                    if (_options.loglevel >= loglevel) {
                        Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");
                        _util.log.apply(window, arguments);
                    }
                };

                /**
                 * Add the scene to a controller.
                 * This is the equivalent to `Controller.addScene(scene)`.
                 * @method ScrollMagic.Scene#addTo
                 *
                 * @example
                 * // add a scene to a ScrollMagic Controller
                 * scene.addTo(controller);
                 *
                 * @param {ScrollMagic.Controller} controller - The controller to which the scene should be added.
                 * @returns {Scene} Parent object for chaining.
                 */
                this.addTo = function (controller) {
                    if (!(controller instanceof ScrollMagic.Controller)) {
                        log(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller");
                    } else if (_controller != controller) {
                        // new controller
                        if (_controller) { // was associated to a different controller before, so remove it...
                            _controller.removeScene(Scene);
                        }
                        _controller = controller;
                        validateOption();
                        updateDuration(true);
                        updateTriggerElementPosition(true);
                        updateScrollOffset();
                        _controller.info("container").addEventListener('resize', onContainerResize);
                        controller.addScene(Scene);
                        Scene.trigger("add", {
                            controller: _controller
                        });
                        log(3, "added " + NAMESPACE + " to controller");
                        Scene.update();
                    }
                    return Scene;
                };

                /**
                 * **Get** or **Set** the current enabled state of the scene.
                 * This can be used to disable this scene without removing or destroying it.
                 * @method ScrollMagic.Scene#enabled
                 *
                 * @example
                 * // get the current value
                 * var enabled = scene.enabled();
                 *
                 * // disable the scene
                 * scene.enabled(false);
                 *
                 * @param {boolean} [newState] - The new enabled state of the scene `true` or `false`.
                 * @returns {(boolean|Scene)} Current enabled state or parent object for chaining.
                 */
                this.enabled = function (newState) {
                    if (!arguments.length) { // get
                        return _enabled;
                    } else if (_enabled != newState) { // set
                        _enabled = !! newState;
                        Scene.update(true);
                    }
                    return Scene;
                };

                /**
                 * Remove the scene from the controller.
                 * This is the equivalent to `Controller.removeScene(scene)`.
                 * The scene will not be updated anymore until you readd it to a controller.
                 * To remove the pin or the tween you need to call removeTween() or removePin() respectively.
                 * @method ScrollMagic.Scene#remove
                 * @example
                 * // remove the scene from its controller
                 * scene.remove();
                 *
                 * @returns {Scene} Parent object for chaining.
                 */
                this.remove = function () {
                    if (_controller) {
                        _controller.info("container").removeEventListener('resize', onContainerResize);
                        var tmpParent = _controller;
                        _controller = undefined;
                        tmpParent.removeScene(Scene);
                        Scene.trigger("remove");
                        log(3, "removed " + NAMESPACE + " from controller");
                    }
                    return Scene;
                };

                /**
                 * Destroy the scene and everything.
                 * @method ScrollMagic.Scene#destroy
                 * @example
                 * // destroy the scene without resetting the pin and tween to their initial positions
                 * scene = scene.destroy();
                 *
                 * // destroy the scene and reset the pin and tween
                 * scene = scene.destroy(true);
                 *
                 * @param {boolean} [reset=false] - If `true` the pin and tween (if existent) will be reset.
                 * @returns {null} Null to unset handler variables.
                 */
                this.destroy = function (reset) {
                    Scene.trigger("destroy", {
                        reset: reset
                    });
                    Scene.remove();
                    Scene.off("*.*");
                    log(3, "destroyed " + NAMESPACE + " (reset: " + (reset ? "true" : "false") + ")");
                    return null;
                };


                /**
                 * Updates the Scene to reflect the current state.
                 * This is the equivalent to `Controller.updateScene(scene, immediately)`.
                 * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.
                 * It then updates the current scene state accordingly (or does nothing, if the state is already correct) â€“ Pins will be set to their correct position and tweens will be updated to their correct progress.
                 * This means an update doesn't necessarily result in a progress change. The `progress` event will be fired if the progress has indeed changed between this update and the last.
                 * _**NOTE:** This method gets called constantly whenever ScrollMagic detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
                 * @method ScrollMagic.Scene#update
                 * @example
                 * // update the scene on next tick
                 * scene.update();
                 *
                 * // update the scene immediately
                 * scene.update(true);
                 *
                 * @fires Scene.update
                 *
                 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance).
                 * @returns {Scene} Parent object for chaining.
                 */
                this.update = function (immediately) {
                    if (_controller) {
                        if (immediately) {
                            if (_controller.enabled() && _enabled) {
                                var
                                    scrollPos = _controller.info("scrollPos"),
                                    newProgress;

                                if (_options.duration > 0) {
                                    newProgress = (scrollPos - _scrollOffset.start) / (_scrollOffset.end - _scrollOffset.start);
                                } else {
                                    newProgress = scrollPos >= _scrollOffset.start ? 1 : 0;
                                }

                                Scene.trigger("update", {
                                    startPos: _scrollOffset.start,
                                    endPos: _scrollOffset.end,
                                    scrollPos: scrollPos
                                });

                                Scene.progress(newProgress);
                            } else if (_pin && _state === SCENE_STATE_DURING) {
                                updatePinState(true); // unpin in position
                            }
                        } else {
                            _controller.updateScene(Scene, false);
                        }
                    }
                    return Scene;
                };

                /**
                 * Updates dynamic scene variables like the trigger element position or the duration.
                 * This method is automatically called in regular intervals from the controller. See {@link ScrollMagic.Controller} option `refreshInterval`.
                 *
                 * You can call it to minimize lag, for example when you intentionally change the position of the triggerElement.
                 * If you don't it will simply be updated in the next refresh interval of the container, which is usually sufficient.
                 *
                 * @method ScrollMagic.Scene#refresh
                 * @since 1.1.0
                 * @example
                 * scene = new ScrollMagic.Scene({triggerElement: "#trigger"});
                 *
                 * // change the position of the trigger
                 * $("#trigger").css("top", 500);
                 * // immediately let the scene know of this change
                 * scene.refresh();
                 *
                 * @fires {@link Scene.shift}, if the trigger element position or the duration changed
                 * @fires {@link Scene.change}, if the duration changed
                 *
                 * @returns {Scene} Parent object for chaining.
                 */
                this.refresh = function () {
                    updateDuration();
                    updateTriggerElementPosition();
                    // update trigger element position
                    return Scene;
                };

                /**
                 * **Get** or **Set** the scene's progress.
                 * Usually it shouldn't be necessary to use this as a setter, as it is set automatically by scene.update().
                 * The order in which the events are fired depends on the duration of the scene:
                 *  1. Scenes with `duration == 0`:
                 *  Scenes that have no duration by definition have no ending. Thus the `end` event will never be fired.
                 *  When the trigger position of the scene is passed the events are always fired in this order:
                 *  `enter`, `start`, `progress` when scrolling forward
                 *  and
                 *  `progress`, `start`, `leave` when scrolling in reverse
                 *  2. Scenes with `duration > 0`:
                 *  Scenes with a set duration have a defined start and end point.
                 *  When scrolling past the start position of the scene it will fire these events in this order:
                 *  `enter`, `start`, `progress`
                 *  When continuing to scroll and passing the end point it will fire these events:
                 *  `progress`, `end`, `leave`
                 *  When reversing through the end point these events are fired:
                 *  `enter`, `end`, `progress`
                 *  And when continuing to scroll past the start position in reverse it will fire:
                 *  `progress`, `start`, `leave`
                 *  In between start and end the `progress` event will be called constantly, whenever the progress changes.
                 *
                 * In short:
                 * `enter` events will always trigger **before** the progress update and `leave` envents will trigger **after** the progress update.
                 * `start` and `end` will always trigger at their respective position.
                 *
                 * Please review the event descriptions for details on the events and the event object that is passed to the callback.
                 *
                 * @method ScrollMagic.Scene#progress
                 * @example
                 * // get the current scene progress
                 * var progress = scene.progress();
                 *
                 * // set new scene progress
                 * scene.progress(0.3);
                 *
                 * @fires {@link Scene.enter}, when used as setter
                 * @fires {@link Scene.start}, when used as setter
                 * @fires {@link Scene.progress}, when used as setter
                 * @fires {@link Scene.end}, when used as setter
                 * @fires {@link Scene.leave}, when used as setter
                 *
                 * @param {number} [progress] - The new progress value of the scene `[0-1]`.
                 * @returns {number} `get` -  Current scene progress.
                 * @returns {Scene} `set` -  Parent object for chaining.
                 */
                this.progress = function (progress) {
                    if (!arguments.length) { // get
                        return _progress;
                    } else { // set
                        var
                            doUpdate = false,
                            oldState = _state,
                            scrollDirection = _controller ? _controller.info("scrollDirection") : 'PAUSED',
                            reverseOrForward = _options.reverse || progress >= _progress;
                        if (_options.duration === 0) {
                            // zero duration scenes
                            doUpdate = _progress != progress;
                            _progress = progress < 1 && reverseOrForward ? 0 : 1;
                            _state = _progress === 0 ? SCENE_STATE_BEFORE : SCENE_STATE_DURING;
                        } else {
                            // scenes with start and end
                            if (progress < 0 && _state !== SCENE_STATE_BEFORE && reverseOrForward) {
                                // go back to initial state
                                _progress = 0;
                                _state = SCENE_STATE_BEFORE;
                                doUpdate = true;
                            } else if (progress >= 0 && progress < 1 && reverseOrForward) {
                                _progress = progress;
                                _state = SCENE_STATE_DURING;
                                doUpdate = true;
                            } else if (progress >= 1 && _state !== SCENE_STATE_AFTER) {
                                _progress = 1;
                                _state = SCENE_STATE_AFTER;
                                doUpdate = true;
                            } else if (_state === SCENE_STATE_DURING && !reverseOrForward) {
                                updatePinState(); // in case we scrolled backwards mid-scene and reverse is disabled => update the pin position, so it doesn't move back as well.
                            }
                        }
                        if (doUpdate) {
                            // fire events
                            var
                                eventVars = {
                                    progress: _progress,
                                    state: _state,
                                    scrollDirection: scrollDirection
                                },
                                stateChanged = _state != oldState;

                            var trigger = function (eventName) { // tmp helper to simplify code
                                Scene.trigger(eventName, eventVars);
                            };

                            if (stateChanged) { // enter events
                                if (oldState !== SCENE_STATE_DURING) {
                                    trigger("enter");
                                    trigger(oldState === SCENE_STATE_BEFORE ? "start" : "end");
                                }
                            }
                            trigger("progress");
                            if (stateChanged) { // leave events
                                if (_state !== SCENE_STATE_DURING) {
                                    trigger(_state === SCENE_STATE_BEFORE ? "start" : "end");
                                    trigger("leave");
                                }
                            }
                        }

                        return Scene;
                    }
                };


                /**
                 * Update the start and end scrollOffset of the container.
                 * The positions reflect what the controller's scroll position will be at the start and end respectively.
                 * Is called, when:
                 *   - Scene event "change" is called with: offset, triggerHook, duration
                 *   - scroll container event "resize" is called
                 *   - the position of the triggerElement changes
                 *   - the controller changes -> addTo()
                 * @private
                 */
                var updateScrollOffset = function () {
                    _scrollOffset = {
                        start: _triggerPos + _options.offset
                    };
                    if (_controller && _options.triggerElement) {
                        // take away triggerHook portion to get relative to top
                        _scrollOffset.start -= _controller.info("size") * _options.triggerHook;
                    }
                    _scrollOffset.end = _scrollOffset.start + _options.duration;
                };

                /**
                 * Updates the duration if set to a dynamic function.
                 * This method is called when the scene is added to a controller and in regular intervals from the controller through scene.refresh().
                 *
                 * @fires {@link Scene.change}, if the duration changed
                 * @fires {@link Scene.shift}, if the duration changed
                 *
                 * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
                 * @private
                 */
                var updateDuration = function (suppressEvents) {
                    // update duration
                    if (_durationUpdateMethod) {
                        var varname = "duration";
                        if (changeOption(varname, _durationUpdateMethod.call(Scene)) && !suppressEvents) { // set
                            Scene.trigger("change", {
                                what: varname,
                                newval: _options[varname]
                            });
                            Scene.trigger("shift", {
                                reason: varname
                            });
                        }
                    }
                };

                /**
                 * Updates the position of the triggerElement, if present.
                 * This method is called ...
                 *  - ... when the triggerElement is changed
                 *  - ... when the scene is added to a (new) controller
                 *  - ... in regular intervals from the controller through scene.refresh().
                 *
                 * @fires {@link Scene.shift}, if the position changed
                 *
                 * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
                 * @private
                 */
                var updateTriggerElementPosition = function (suppressEvents) {
                    var
                        elementPos = 0,
                        telem = _options.triggerElement;
                    if (_controller && telem) {
                        var
                            controllerInfo = _controller.info(),
                            containerOffset = _util.get.offset(controllerInfo.container),
                            // container position is needed because element offset is returned in relation to document, not in relation to container.
                            param = controllerInfo.vertical ? "top" : "left"; // which param is of interest ?
                        // if parent is spacer, use spacer position instead so correct start position is returned for pinned elements.
                        while (telem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
                            telem = telem.parentNode;
                        }

                        var elementOffset = _util.get.offset(telem);

                        if (!controllerInfo.isDocument) { // container is not the document root, so substract scroll Position to get correct trigger element position relative to scrollcontent
                            containerOffset[param] -= _controller.scrollPos();
                        }

                        elementPos = elementOffset[param] - containerOffset[param];
                    }
                    var changed = elementPos != _triggerPos;
                    _triggerPos = elementPos;
                    if (changed && !suppressEvents) {
                        Scene.trigger("shift", {
                            reason: "triggerElementPosition"
                        });
                    }
                };

                /**
                 * Trigger a shift event, when the container is resized and the triggerHook is > 1.
                 * @private
                 */
                var onContainerResize = function (e) {
                    if (_options.triggerHook > 0) {
                        Scene.trigger("shift", {
                            reason: "containerResize"
                        });
                    }
                };

                var _validate = _util.extend(SCENE_OPTIONS.validate, {
                    // validation for duration handled internally for reference to private var _durationMethod
                    duration: function (val) {
                        if (_util.type.String(val) && val.match(/^(\.|\d)*\d+%$/)) {
                            // percentage value
                            var perc = parseFloat(val) / 100;
                            val = function () {
                                return _controller ? _controller.info("size") * perc : 0;
                            };
                        }
                        if (_util.type.Function(val)) {
                            // function
                            _durationUpdateMethod = val;
                            try {
                                val = parseFloat(_durationUpdateMethod());
                            } catch (e) {
                                val = -1; // will cause error below
                            }
                        }
                        // val has to be float
                        val = parseFloat(val);
                        if (!_util.type.Number(val) || val < 0) {
                            if (_durationUpdateMethod) {
                                _durationUpdateMethod = undefined;
                                throw ["Invalid return value of supplied function for option \"duration\":", val];
                            } else {
                                throw ["Invalid value for option \"duration\":", val];
                            }
                        }
                        return val;
                    }
                });

                /**
                 * Checks the validity of a specific or all options and reset to default if neccessary.
                 * @private
                 */
                var validateOption = function (check) {
                    check = arguments.length ? [check] : Object.keys(_validate);
                    check.forEach(function (optionName, key) {
                        var value;
                        if (_validate[optionName]) { // there is a validation method for this option
                            try { // validate value
                                value = _validate[optionName](_options[optionName]);
                            } catch (e) { // validation failed -> reset to default
                                value = DEFAULT_OPTIONS[optionName];
                                var logMSG = _util.type.String(e) ? [e] : e;
                                if (_util.type.Array(logMSG)) {
                                    logMSG[0] = "ERROR: " + logMSG[0];
                                    logMSG.unshift(1); // loglevel 1 for error msg
                                    log.apply(this, logMSG);
                                } else {
                                    log(1, "ERROR: Problem executing validation callback for option '" + optionName + "':", e.message);
                                }
                            } finally {
                                _options[optionName] = value;
                            }
                        }
                    });
                };

                /**
                 * Helper used by the setter/getters for scene options
                 * @private
                 */
                var changeOption = function (varname, newval) {
                    var
                        changed = false,
                        oldval = _options[varname];
                    if (_options[varname] != newval) {
                        _options[varname] = newval;
                        validateOption(varname); // resets to default if necessary
                        changed = oldval != _options[varname];
                    }
                    return changed;
                };

                // generate getters/setters for all options
                var addSceneOption = function (optionName) {
                    if (!Scene[optionName]) {
                        Scene[optionName] = function (newVal) {
                            if (!arguments.length) { // get
                                return _options[optionName];
                            } else {
                                if (optionName === "duration") { // new duration is set, so any previously set function must be unset
                                    _durationUpdateMethod = undefined;
                                }
                                if (changeOption(optionName, newVal)) { // set
                                    Scene.trigger("change", {
                                        what: optionName,
                                        newval: _options[optionName]
                                    });
                                    if (SCENE_OPTIONS.shifts.indexOf(optionName) > -1) {
                                        Scene.trigger("shift", {
                                            reason: optionName
                                        });
                                    }
                                }
                            }
                            return Scene;
                        };
                    }
                };

                /**
                 * **Get** or **Set** the duration option value.
                 * As a setter it also accepts a function returning a numeric value.
                 * This is particularly useful for responsive setups.
                 *
                 * The duration is updated using the supplied function every time `Scene.refresh()` is called, which happens periodically from the controller (see ScrollMagic.Controller option `refreshInterval`).
                 * _**NOTE:** Be aware that it's an easy way to kill performance, if you supply a function that has high CPU demand.
                 * Even for size and position calculations it is recommended to use a variable to cache the value. (see example)
                 * This counts double if you use the same function for multiple scenes._
                 *
                 * @method ScrollMagic.Scene#duration
                 * @example
                 * // get the current duration value
                 * var duration = scene.duration();
                 *
                 * // set a new duration
                 * scene.duration(300);
                 *
                 * // use a function to automatically adjust the duration to the window height.
                 * var durationValueCache;
                 * function getDuration () {
			 *   return durationValueCache;
			 * }
                 * function updateDuration (e) {
			 *   durationValueCache = window.innerHeight;
			 * }
                 * $(window).on("resize", updateDuration); // update the duration when the window size changes
                 * $(window).triggerHandler("resize"); // set to initial value
                 * scene.duration(getDuration); // supply duration method
                 *
                 * @fires {@link Scene.change}, when used as setter
                 * @fires {@link Scene.shift}, when used as setter
                 * @param {(number|function)} [newDuration] - The new duration of the scene.
                 * @returns {number} `get` -  Current scene duration.
                 * @returns {Scene} `set` -  Parent object for chaining.
                 */

                /**
                 * **Get** or **Set** the offset option value.
                 * @method ScrollMagic.Scene#offset
                 * @example
                 * // get the current offset
                 * var offset = scene.offset();
                 *
                 * // set a new offset
                 * scene.offset(100);
                 *
                 * @fires {@link Scene.change}, when used as setter
                 * @fires {@link Scene.shift}, when used as setter
                 * @param {number} [newOffset] - The new offset of the scene.
                 * @returns {number} `get` -  Current scene offset.
                 * @returns {Scene} `set` -  Parent object for chaining.
                 */

                /**
                 * **Get** or **Set** the triggerElement option value.
                 * Does **not** fire `Scene.shift`, because changing the trigger Element doesn't necessarily mean the start position changes. This will be determined in `Scene.refresh()`, which is automatically triggered.
                 * @method ScrollMagic.Scene#triggerElement
                 * @example
                 * // get the current triggerElement
                 * var triggerElement = scene.triggerElement();
                 *
                 * // set a new triggerElement using a selector
                 * scene.triggerElement("#trigger");
                 * // set a new triggerElement using a DOM object
                 * scene.triggerElement(document.getElementById("trigger"));
                 *
                 * @fires {@link Scene.change}, when used as setter
                 * @param {(string|object)} [newTriggerElement] - The new trigger element for the scene.
                 * @returns {(string|object)} `get` -  Current triggerElement.
                 * @returns {Scene} `set` -  Parent object for chaining.
                 */

                /**
                 * **Get** or **Set** the triggerHook option value.
                 * @method ScrollMagic.Scene#triggerHook
                 * @example
                 * // get the current triggerHook value
                 * var triggerHook = scene.triggerHook();
                 *
                 * // set a new triggerHook using a string
                 * scene.triggerHook("onLeave");
                 * // set a new triggerHook using a number
                 * scene.triggerHook(0.7);
                 *
                 * @fires {@link Scene.change}, when used as setter
                 * @fires {@link Scene.shift}, when used as setter
                 * @param {(number|string)} [newTriggerHook] - The new triggerHook of the scene. See {@link Scene} parameter description for value options.
                 * @returns {number} `get` -  Current triggerHook (ALWAYS numerical).
                 * @returns {Scene} `set` -  Parent object for chaining.
                 */

                /**
                 * **Get** or **Set** the reverse option value.
                 * @method ScrollMagic.Scene#reverse
                 * @example
                 * // get the current reverse option
                 * var reverse = scene.reverse();
                 *
                 * // set new reverse option
                 * scene.reverse(false);
                 *
                 * @fires {@link Scene.change}, when used as setter
                 * @param {boolean} [newReverse] - The new reverse setting of the scene.
                 * @returns {boolean} `get` -  Current reverse option value.
                 * @returns {Scene} `set` -  Parent object for chaining.
                 */

                /**
                 * **Get** or **Set** the loglevel option value.
                 * @method ScrollMagic.Scene#loglevel
                 * @example
                 * // get the current loglevel
                 * var loglevel = scene.loglevel();
                 *
                 * // set new loglevel
                 * scene.loglevel(3);
                 *
                 * @fires {@link Scene.change}, when used as setter
                 * @param {number} [newLoglevel] - The new loglevel setting of the scene. `[0-3]`
                 * @returns {number} `get` -  Current loglevel.
                 * @returns {Scene} `set` -  Parent object for chaining.
                 */

                /**
                 * **Get** the associated controller.
                 * @method ScrollMagic.Scene#controller
                 * @example
                 * // get the controller of a scene
                 * var controller = scene.controller();
                 *
                 * @returns {ScrollMagic.Controller} Parent controller or `undefined`
                 */
                this.controller = function () {
                    return _controller;
                };

                /**
                 * **Get** the current state.
                 * @method ScrollMagic.Scene#state
                 * @example
                 * // get the current state
                 * var state = scene.state();
                 *
                 * @returns {string} `"BEFORE"`, `"DURING"` or `"AFTER"`
                 */
                this.state = function () {
                    return _state;
                };

                /**
                 * **Get** the current scroll offset for the start of the scene.
                 * Mind, that the scrollOffset is related to the size of the container, if `triggerHook` is bigger than `0` (or `"onLeave"`).
                 * This means, that resizing the container or changing the `triggerHook` will influence the scene's start offset.
                 * @method ScrollMagic.Scene#scrollOffset
                 * @example
                 * // get the current scroll offset for the start and end of the scene.
                 * var start = scene.scrollOffset();
                 * var end = scene.scrollOffset() + scene.duration();
                 * console.log("the scene starts at", start, "and ends at", end);
                 *
                 * @returns {number} The scroll offset (of the container) at which the scene will trigger. Y value for vertical and X value for horizontal scrolls.
                 */
                this.scrollOffset = function () {
                    return _scrollOffset.start;
                };

                /**
                 * **Get** the trigger position of the scene (including the value of the `offset` option).
                 * @method ScrollMagic.Scene#triggerPosition
                 * @example
                 * // get the scene's trigger position
                 * var triggerPosition = scene.triggerPosition();
                 *
                 * @returns {number} Start position of the scene. Top position value for vertical and left position value for horizontal scrolls.
                 */
                this.triggerPosition = function () {
                    var pos = _options.offset; // the offset is the basis
                    if (_controller) {
                        // get the trigger position
                        if (_options.triggerElement) {
                            // Element as trigger
                            pos += _triggerPos;
                        } else {
                            // return the height of the triggerHook to start at the beginning
                            pos += _controller.info("size") * Scene.triggerHook();
                        }
                    }
                    return pos;
                };

                var
                    _pin, _pinOptions;

                Scene.on("shift.internal", function (e) {
                    var durationChanged = e.reason === "duration";
                    if ((_state === SCENE_STATE_AFTER && durationChanged) || (_state === SCENE_STATE_DURING && _options.duration === 0)) {
                        // if [duration changed after a scene (inside scene progress updates pin position)] or [duration is 0, we are in pin phase and some other value changed].
                        updatePinState();
                    }
                    if (durationChanged) {
                        updatePinDimensions();
                    }
                }).on("progress.internal", function (e) {
                    updatePinState();
                }).on("add.internal", function (e) {
                    updatePinDimensions();
                }).on("destroy.internal", function (e) {
                    Scene.removePin(e.reset);
                });
                /**
                 * Update the pin state.
                 * @private
                 */
                var updatePinState = function (forceUnpin) {
                    if (_pin && _controller) {
                        var
                            containerInfo = _controller.info(),
                            pinTarget = _pinOptions.spacer.firstChild; // may be pin element or another spacer, if cascading pins
                        if (!forceUnpin && _state === SCENE_STATE_DURING) { // during scene or if duration is 0 and we are past the trigger
                            // pinned state
                            if (_util.css(pinTarget, "position") != "fixed") {
                                // change state before updating pin spacer (position changes due to fixed collapsing might occur.)
                                _util.css(pinTarget, {
                                    "position": "fixed"
                                });
                                // update pin spacer
                                updatePinDimensions();
                            }

                            var
                                fixedPos = _util.get.offset(_pinOptions.spacer, true),
                                // get viewport position of spacer
                                scrollDistance = _options.reverse || _options.duration === 0 ? containerInfo.scrollPos - _scrollOffset.start // quicker
                                    : Math.round(_progress * _options.duration * 10) / 10; // if no reverse and during pin the position needs to be recalculated using the progress
                            // add scrollDistance
                            fixedPos[containerInfo.vertical ? "top" : "left"] += scrollDistance;

                            // set new values
                            _util.css(_pinOptions.spacer.firstChild, {
                                top: fixedPos.top,
                                left: fixedPos.left
                            });
                        } else {
                            // unpinned state
                            var
                                newCSS = {
                                    position: _pinOptions.inFlow ? "relative" : "absolute",
                                    top: 0,
                                    left: 0
                                },
                                change = _util.css(pinTarget, "position") != newCSS.position;

                            if (!_pinOptions.pushFollowers) {
                                newCSS[containerInfo.vertical ? "top" : "left"] = _options.duration * _progress;
                            } else if (_options.duration > 0) { // only concerns scenes with duration
                                if (_state === SCENE_STATE_AFTER && parseFloat(_util.css(_pinOptions.spacer, "padding-top")) === 0) {
                                    change = true; // if in after state but havent updated spacer yet (jumped past pin)
                                } else if (_state === SCENE_STATE_BEFORE && parseFloat(_util.css(_pinOptions.spacer, "padding-bottom")) === 0) { // before
                                    change = true; // jumped past fixed state upward direction
                                }
                            }
                            // set new values
                            _util.css(pinTarget, newCSS);
                            if (change) {
                                // update pin spacer if state changed
                                updatePinDimensions();
                            }
                        }
                    }
                };

                /**
                 * Update the pin spacer and/or element size.
                 * The size of the spacer needs to be updated whenever the duration of the scene changes, if it is to push down following elements.
                 * @private
                 */
                var updatePinDimensions = function () {
                    if (_pin && _controller && _pinOptions.inFlow) { // no spacerresize, if original position is absolute
                        var
                            after = (_state === SCENE_STATE_AFTER),
                            before = (_state === SCENE_STATE_BEFORE),
                            during = (_state === SCENE_STATE_DURING),
                            vertical = _controller.info("vertical"),
                            pinTarget = _pinOptions.spacer.firstChild,
                            // usually the pined element but can also be another spacer (cascaded pins)
                            marginCollapse = _util.isMarginCollapseType(_util.css(_pinOptions.spacer, "display")),
                            css = {};

                        // set new size
                        // if relsize: spacer -> pin | else: pin -> spacer
                        if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
                            if (during) {
                                _util.css(_pin, {
                                    "width": _util.get.width(_pinOptions.spacer)
                                });
                            } else {
                                _util.css(_pin, {
                                    "width": "100%"
                                });
                            }
                        } else {
                            // minwidth is needed for cascaded pins.
                            css["min-width"] = _util.get.width(vertical ? _pin : pinTarget, true, true);
                            css.width = during ? css["min-width"] : "auto";
                        }
                        if (_pinOptions.relSize.height) {
                            if (during) {
                                // the only padding the spacer should ever include is the duration (if pushFollowers = true), so we need to substract that.
                                _util.css(_pin, {
                                    "height": _util.get.height(_pinOptions.spacer) - (_pinOptions.pushFollowers ? _options.duration : 0)
                                });
                            } else {
                                _util.css(_pin, {
                                    "height": "100%"
                                });
                            }
                        } else {
                            // margin is only included if it's a cascaded pin to resolve an IE9 bug
                            css["min-height"] = _util.get.height(vertical ? pinTarget : _pin, true, !marginCollapse); // needed for cascading pins
                            css.height = during ? css["min-height"] : "auto";
                        }

                        // add space for duration if pushFollowers is true
                        if (_pinOptions.pushFollowers) {
                            css["padding" + (vertical ? "Top" : "Left")] = _options.duration * _progress;
                            css["padding" + (vertical ? "Bottom" : "Right")] = _options.duration * (1 - _progress);
                        }
                        _util.css(_pinOptions.spacer, css);
                    }
                };

                /**
                 * Updates the Pin state (in certain scenarios)
                 * If the controller container is not the document and we are mid-pin-phase scrolling or resizing the main document can result to wrong pin positions.
                 * So this function is called on resize and scroll of the document.
                 * @private
                 */
                var updatePinInContainer = function () {
                    if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) {
                        updatePinState();
                    }
                };

                /**
                 * Updates the Pin spacer size state (in certain scenarios)
                 * If container is resized during pin and relatively sized the size of the pin might need to be updated...
                 * So this function is called on resize of the container.
                 * @private
                 */
                var updateRelativePinSpacer = function () {
                    if (_controller && _pin && // well, duh
                        _state === SCENE_STATE_DURING && // element in pinned state?
                        ( // is width or height relatively sized, but not in relation to body? then we need to recalc.
                        ((_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) && _util.get.width(window) != _util.get.width(_pinOptions.spacer.parentNode)) || (_pinOptions.relSize.height && _util.get.height(window) != _util.get.height(_pinOptions.spacer.parentNode)))) {
                        updatePinDimensions();
                    }
                };

                /**
                 * Is called, when the mousewhel is used while over a pinned element inside a div container.
                 * If the scene is in fixed state scroll events would be counted towards the body. This forwards the event to the scroll container.
                 * @private
                 */
                var onMousewheelOverPin = function (e) {
                    if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) { // in pin state
                        e.preventDefault();
                        _controller._setScrollPos(_controller.info("scrollPos") - ((e.wheelDelta || e[_controller.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || -e.detail * 30));
                    }
                };

                /**
                 * Pin an element for the duration of the tween.
                 * If the scene duration is 0 the element will only be unpinned, if the user scrolls back past the start position.
                 * Make sure only one pin is applied to an element at the same time.
                 * An element can be pinned multiple times, but only successively.
                 * _**NOTE:** The option `pushFollowers` has no effect, when the scene duration is 0._
                 * @method ScrollMagic.Scene#setPin
                 * @example
                 * // pin element and push all following elements down by the amount of the pin duration.
                 * scene.setPin("#pin");
                 *
                 * // pin element and keeping all following elements in their place. The pinned element will move past them.
                 * scene.setPin("#pin", {pushFollowers: false});
                 *
                 * @param {(string|object)} element - A Selector targeting an element or a DOM object that is supposed to be pinned.
                 * @param {object} [settings] - settings for the pin
                 * @param {boolean} [settings.pushFollowers=true] - If `true` following elements will be "pushed" down for the duration of the pin, if `false` the pinned element will just scroll past them.
                 Ignored, when duration is `0`.
                 * @param {string} [settings.spacerClass="scrollmagic-pin-spacer"] - Classname of the pin spacer element, which is used to replace the element.
                 *
                 * @returns {Scene} Parent object for chaining.
                 */
                this.setPin = function (element, settings) {
                    var
                        defaultSettings = {
                            pushFollowers: true,
                            spacerClass: "scrollmagic-pin-spacer"
                        };
                    settings = _util.extend({}, defaultSettings, settings);

                    // validate Element
                    element = _util.get.elements(element)[0];
                    if (!element) {
                        log(1, "ERROR calling method 'setPin()': Invalid pin element supplied.");
                        return Scene; // cancel
                    } else if (_util.css(element, "position") === "fixed") {
                        log(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'.");
                        return Scene; // cancel
                    }

                    if (_pin) { // preexisting pin?
                        if (_pin === element) {
                            // same pin we already have -> do nothing
                            return Scene; // cancel
                        } else {
                            // kill old pin
                            Scene.removePin();
                        }

                    }
                    _pin = element;

                    var
                        parentDisplay = _pin.parentNode.style.display,
                        boundsParams = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];

                    _pin.parentNode.style.display = 'none'; // hack start to force css to return stylesheet values instead of calculated px values.
                    var
                        inFlow = _util.css(_pin, "position") != "absolute",
                        pinCSS = _util.css(_pin, boundsParams.concat(["display"])),
                        sizeCSS = _util.css(_pin, ["width", "height"]);
                    _pin.parentNode.style.display = parentDisplay; // hack end.
                    if (!inFlow && settings.pushFollowers) {
                        log(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled.");
                        settings.pushFollowers = false;
                    }
                    window.setTimeout(function () { // wait until all finished, because with responsive duration it will only be set after scene is added to controller
                        if (_pin && _options.duration === 0 && settings.pushFollowers) {
                            log(2, "WARNING: pushFollowers =", true, "has no effect, when scene duration is 0.");
                        }
                    }, 0);

                    // create spacer and insert
                    var
                        spacer = _pin.parentNode.insertBefore(document.createElement('div'), _pin),
                        spacerCSS = _util.extend(pinCSS, {
                            position: inFlow ? "relative" : "absolute",
                            boxSizing: "content-box",
                            mozBoxSizing: "content-box",
                            webkitBoxSizing: "content-box"
                        });

                    if (!inFlow) { // copy size if positioned absolutely, to work for bottom/right positioned elements.
                        _util.extend(spacerCSS, _util.css(_pin, ["width", "height"]));
                    }

                    _util.css(spacer, spacerCSS);
                    spacer.setAttribute(PIN_SPACER_ATTRIBUTE, "");
                    _util.addClass(spacer, settings.spacerClass);

                    // set the pin Options
                    _pinOptions = {
                        spacer: spacer,
                        relSize: { // save if size is defined using % values. if so, handle spacer resize differently...
                            width: sizeCSS.width.slice(-1) === "%",
                            height: sizeCSS.height.slice(-1) === "%",
                            autoFullWidth: sizeCSS.width === "auto" && inFlow && _util.isMarginCollapseType(pinCSS.display)
                        },
                        pushFollowers: settings.pushFollowers,
                        inFlow: inFlow,
                        // stores if the element takes up space in the document flow
                    };

                    if (!_pin.___origStyle) {
                        _pin.___origStyle = {};
                        var
                            pinInlineCSS = _pin.style,
                            copyStyles = boundsParams.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
                        copyStyles.forEach(function (val) {
                            _pin.___origStyle[val] = pinInlineCSS[val] || "";
                        });
                    }

                    // if relative size, transfer it to spacer and make pin calculate it...
                    if (_pinOptions.relSize.width) {
                        _util.css(spacer, {
                            width: sizeCSS.width
                        });
                    }
                    if (_pinOptions.relSize.height) {
                        _util.css(spacer, {
                            height: sizeCSS.height
                        });
                    }

                    // now place the pin element inside the spacer
                    spacer.appendChild(_pin);
                    // and set new css
                    _util.css(_pin, {
                        position: inFlow ? "relative" : "absolute",
                        margin: "auto",
                        top: "auto",
                        left: "auto",
                        bottom: "auto",
                        right: "auto"
                    });

                    if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
                        _util.css(_pin, {
                            boxSizing: "border-box",
                            mozBoxSizing: "border-box",
                            webkitBoxSizing: "border-box"
                        });
                    }

                    // add listener to document to update pin position in case controller is not the document.
                    window.addEventListener('scroll', updatePinInContainer);
                    window.addEventListener('resize', updatePinInContainer);
                    window.addEventListener('resize', updateRelativePinSpacer);
                    // add mousewheel listener to catch scrolls over fixed elements
                    _pin.addEventListener("mousewheel", onMousewheelOverPin);
                    _pin.addEventListener("DOMMouseScroll", onMousewheelOverPin);

                    log(3, "added pin");

                    // finally update the pin to init
                    updatePinState();

                    return Scene;
                };

                /**
                 * Remove the pin from the scene.
                 * @method ScrollMagic.Scene#removePin
                 * @example
                 * // remove the pin from the scene without resetting it (the spacer is not removed)
                 * scene.removePin();
                 *
                 * // remove the pin from the scene and reset the pin element to its initial position (spacer is removed)
                 * scene.removePin(true);
                 *
                 * @param {boolean} [reset=false] - If `false` the spacer will not be removed and the element's position will not be reset.
                 * @returns {Scene} Parent object for chaining.
                 */
                this.removePin = function (reset) {
                    if (_pin) {
                        if (_state === SCENE_STATE_DURING) {
                            updatePinState(true); // force unpin at position
                        }
                        if (reset || !_controller) { // if there's no controller no progress was made anyway...
                            var pinTarget = _pinOptions.spacer.firstChild; // usually the pin element, but may be another spacer (cascaded pins)...
                            if (pinTarget.hasAttribute(PIN_SPACER_ATTRIBUTE)) { // copy margins to child spacer
                                var
                                    style = _pinOptions.spacer.style,
                                    values = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                                margins = {};
                                values.forEach(function (val) {
                                    margins[val] = style[val] || "";
                                });
                                _util.css(pinTarget, margins);
                            }
                            _pinOptions.spacer.parentNode.insertBefore(pinTarget, _pinOptions.spacer);
                            _pinOptions.spacer.parentNode.removeChild(_pinOptions.spacer);
                            if (!_pin.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) { // if it's the last pin for this element -> restore inline styles
                                // TODO: only correctly set for first pin (when cascading) - how to fix?
                                _util.css(_pin, _pin.___origStyle);
                                delete _pin.___origStyle;
                            }
                        }
                        window.removeEventListener('scroll', updatePinInContainer);
                        window.removeEventListener('resize', updatePinInContainer);
                        window.removeEventListener('resize', updateRelativePinSpacer);
                        _pin.removeEventListener("mousewheel", onMousewheelOverPin);
                        _pin.removeEventListener("DOMMouseScroll", onMousewheelOverPin);
                        _pin = undefined;
                        log(3, "removed pin (reset: " + (reset ? "true" : "false") + ")");
                    }
                    return Scene;
                };


                var
                    _cssClasses, _cssClassElems = [];

                Scene.on("destroy.internal", function (e) {
                    Scene.removeClassToggle(e.reset);
                });
                /**
                 * Define a css class modification while the scene is active.
                 * When the scene triggers the classes will be added to the supplied element and removed, when the scene is over.
                 * If the scene duration is 0 the classes will only be removed if the user scrolls back past the start position.
                 * @method ScrollMagic.Scene#setClassToggle
                 * @example
                 * // add the class 'myclass' to the element with the id 'my-elem' for the duration of the scene
                 * scene.setClassToggle("#my-elem", "myclass");
                 *
                 * // add multiple classes to multiple elements defined by the selector '.classChange'
                 * scene.setClassToggle(".classChange", "class1 class2 class3");
                 *
                 * @param {(string|object)} element - A Selector targeting one or more elements or a DOM object that is supposed to be modified.
                 * @param {string} classes - One or more Classnames (separated by space) that should be added to the element during the scene.
                 *
                 * @returns {Scene} Parent object for chaining.
                 */
                this.setClassToggle = function (element, classes) {
                    var elems = _util.get.elements(element);
                    if (elems.length === 0 || !_util.type.String(classes)) {
                        log(1, "ERROR calling method 'setClassToggle()': Invalid " + (elems.length === 0 ? "element" : "classes") + " supplied.");
                        return Scene;
                    }
                    if (_cssClassElems.length > 0) {
                        // remove old ones
                        Scene.removeClassToggle();
                    }
                    _cssClasses = classes;
                    _cssClassElems = elems;
                    Scene.on("enter.internal_class leave.internal_class", function (e) {
                        var toggle = e.type === "enter" ? _util.addClass : _util.removeClass;
                        _cssClassElems.forEach(function (elem, key) {
                            toggle(elem, _cssClasses);
                        });
                    });
                    return Scene;
                };

                /**
                 * Remove the class binding from the scene.
                 * @method ScrollMagic.Scene#removeClassToggle
                 * @example
                 * // remove class binding from the scene without reset
                 * scene.removeClassToggle();
                 *
                 * // remove class binding and remove the changes it caused
                 * scene.removeClassToggle(true);
                 *
                 * @param {boolean} [reset=false] - If `false` and the classes are currently active, they will remain on the element. If `true` they will be removed.
                 * @returns {Scene} Parent object for chaining.
                 */
                this.removeClassToggle = function (reset) {
                    if (reset) {
                        _cssClassElems.forEach(function (elem, key) {
                            _util.removeClass(elem, _cssClasses);
                        });
                    }
                    Scene.off("start.internal_class end.internal_class");
                    _cssClasses = undefined;
                    _cssClassElems = [];
                    return Scene;
                };

                // INIT
                construct();
                return Scene;
            };

            // store pagewide scene options
            var SCENE_OPTIONS = {
                defaults: {
                    duration: 0,
                    offset: 0,
                    triggerElement: undefined,
                    triggerHook: 0.5,
                    reverse: true,
                    loglevel: 2
                },
                validate: {
                    offset: function (val) {
                        val = parseFloat(val);
                        if (!_util.type.Number(val)) {
                            throw ["Invalid value for option \"offset\":", val];
                        }
                        return val;
                    },
                    triggerElement: function (val) {
                        val = val || undefined;
                        if (val) {
                            var elem = _util.get.elements(val)[0];
                            if (elem) {
                                val = elem;
                            } else {
                                throw ["Element defined in option \"triggerElement\" was not found:", val];
                            }
                        }
                        return val;
                    },
                    triggerHook: function (val) {
                        var translate = {
                            "onCenter": 0.5,
                            "onEnter": 1,
                            "onLeave": 0
                        };
                        if (_util.type.Number(val)) {
                            val = Math.max(0, Math.min(parseFloat(val), 1)); //  make sure its betweeen 0 and 1
                        } else if (val in translate) {
                            val = translate[val];
                        } else {
                            throw ["Invalid value for option \"triggerHook\": ", val];
                        }
                        return val;
                    },
                    reverse: function (val) {
                        return !!val; // force boolean
                    },
                    loglevel: function (val) {
                        val = parseInt(val);
                        if (!_util.type.Number(val) || val < 0 || val > 3) {
                            throw ["Invalid value for option \"loglevel\":", val];
                        }
                        return val;
                    }
                },
                // holder for  validation methods. duration validation is handled in 'getters-setters.js'
                shifts: ["duration", "offset", "triggerHook"],
                // list of options that trigger a `shift` event
            };
			/*
			 * method used to add an option to ScrollMagic Scenes.
			 * TODO: DOC (private for dev)
			 */
            ScrollMagic.Scene.addOption = function (name, defaultValue, validationCallback, shifts) {
                if (!(name in SCENE_OPTIONS.defaults)) {
                    SCENE_OPTIONS.defaults[name] = defaultValue;
                    SCENE_OPTIONS.validate[name] = validationCallback;
                    if (shifts) {
                        SCENE_OPTIONS.shifts.push(name);
                    }
                } else {
                    ScrollMagic._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + name + "', because it already exists.");
                }
            };
            // instance extension function for plugins
            // TODO: DOC (private for dev)
            ScrollMagic.Scene.extend = function (extension) {
                var oldClass = this;
                ScrollMagic.Scene = function () {
                    oldClass.apply(this, arguments);
                    this.$super = _util.extend({}, this); // copy parent state
                    return extension.apply(this, arguments) || this;
                };
                _util.extend(ScrollMagic.Scene, oldClass); // copy properties
                ScrollMagic.Scene.prototype = oldClass.prototype; // copy prototype
                ScrollMagic.Scene.prototype.constructor = ScrollMagic.Scene; // restore constructor
            };


            /**
             * TODO: DOCS (private for dev)
             * @class
             * @private
             */

            ScrollMagic.Event = function (type, namespace, target, vars) {
                vars = vars || {};
                for (var key in vars) {
                    this[key] = vars[key];
                }
                this.type = type;
                this.target = this.currentTarget = target;
                this.namespace = namespace || '';
                this.timeStamp = this.timestamp = Date.now();
                return this;
            };

			/*
			 * TODO: DOCS (private for dev)
			 */

            var _util = ScrollMagic._util = (function (window) {
                var U = {},
                    i;

                /**
                 * ------------------------------
                 * internal helpers
                 * ------------------------------
                 */

                    // parse float and fall back to 0.
                var floatval = function (number) {
                        return parseFloat(number) || 0;
                    };
                // get current style IE safe (otherwise IE would return calculated values for 'auto')
                var _getComputedStyle = function (elem) {
                    return elem.currentStyle ? elem.currentStyle : window.getComputedStyle(elem);
                };

                // get element dimension (width or height)
                var _dimension = function (which, elem, outer, includeMargin) {
                    elem = (elem === document) ? window : elem;
                    if (elem === window) {
                        includeMargin = false;
                    } else if (!_type.DomElement(elem)) {
                        return 0;
                    }
                    which = which.charAt(0).toUpperCase() + which.substr(1).toLowerCase();
                    var dimension = (outer ? elem['offset' + which] || elem['outer' + which] : elem['client' + which] || elem['inner' + which]) || 0;
                    if (outer && includeMargin) {
                        var style = _getComputedStyle(elem);
                        dimension += which === 'Height' ? floatval(style.marginTop) + floatval(style.marginBottom) : floatval(style.marginLeft) + floatval(style.marginRight);
                    }
                    return dimension;
                };
                // converts 'margin-top' into 'marginTop'
                var _camelCase = function (str) {
                    return str.replace(/^[^a-z]+([a-z])/g, '$1').replace(/-([a-z])/g, function (g) {
                        return g[1].toUpperCase();
                    });
                };

                /**
                 * ------------------------------
                 * external helpers
                 * ------------------------------
                 */

                // extend obj â€“ same as jQuery.extend({}, objA, objB)
                U.extend = function (obj) {
                    obj = obj || {};
                    for (i = 1; i < arguments.length; i++) {
                        if (!arguments[i]) {
                            continue;
                        }
                        for (var key in arguments[i]) {
                            if (arguments[i].hasOwnProperty(key)) {
                                obj[key] = arguments[i][key];
                            }
                        }
                    }
                    return obj;
                };

                // check if a css display type results in margin-collapse or not
                U.isMarginCollapseType = function (str) {
                    return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(str) > -1;
                };

                // implementation of requestAnimationFrame
                // based on https://gist.github.com/paulirish/1579671
                var
                    lastTime = 0,
                    vendors = ['ms', 'moz', 'webkit', 'o'];
                var _requestAnimationFrame = window.requestAnimationFrame;
                var _cancelAnimationFrame = window.cancelAnimationFrame;
                // try vendor prefixes if the above doesn't work
                for (i = 0; !_requestAnimationFrame && i < vendors.length; ++i) {
                    _requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
                    _cancelAnimationFrame = window[vendors[i] + 'CancelAnimationFrame'] || window[vendors[i] + 'CancelRequestAnimationFrame'];
                }

                // fallbacks
                if (!_requestAnimationFrame) {
                    _requestAnimationFrame = function (callback) {
                        var
                            currTime = new Date().getTime(),
                            timeToCall = Math.max(0, 16 - (currTime - lastTime)),
                            id = window.setTimeout(function () {
                                callback(currTime + timeToCall);
                            }, timeToCall);
                        lastTime = currTime + timeToCall;
                        return id;
                    };
                }
                if (!_cancelAnimationFrame) {
                    _cancelAnimationFrame = function (id) {
                        window.clearTimeout(id);
                    };
                }
                U.rAF = _requestAnimationFrame.bind(window);
                U.cAF = _cancelAnimationFrame.bind(window);

                var
                    loglevels = ["error", "warn", "log"],
                    console = window.console || {};

                console.log = console.log ||
                    function () {}; // no console log, well - do nothing then...
                // make sure methods for all levels exist.
                for (i = 0; i < loglevels.length; i++) {
                    var method = loglevels[i];
                    if (!console[method]) {
                        console[method] = console.log; // prefer .log over nothing
                    }
                }
                U.log = function (loglevel) {
                    if (loglevel > loglevels.length || loglevel <= 0) loglevel = loglevels.length;
                    var now = new Date(),
                        time = ("0" + now.getHours()).slice(-2) + ":" + ("0" + now.getMinutes()).slice(-2) + ":" + ("0" + now.getSeconds()).slice(-2) + ":" + ("00" + now.getMilliseconds()).slice(-3),
                        method = loglevels[loglevel - 1],
                        args = Array.prototype.splice.call(arguments, 1),
                        func = Function.prototype.bind.call(console[method], console);
                    args.unshift(time);
                    func.apply(console, args);
                };

                /**
                 * ------------------------------
                 * type testing
                 * ------------------------------
                 */

                var _type = U.type = function (v) {
                    return Object.prototype.toString.call(v).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
                };
                _type.String = function (v) {
                    return _type(v) === 'string';
                };
                _type.Function = function (v) {
                    return _type(v) === 'function';
                };
                _type.Array = function (v) {
                    return Array.isArray(v);
                };
                _type.Number = function (v) {
                    return !_type.Array(v) && (v - parseFloat(v) + 1) >= 0;
                };
                _type.DomElement = function (o) {
                    return (
                        typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
                            o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string");
                };

                /**
                 * ------------------------------
                 * DOM Element info
                 * ------------------------------
                 */
                    // always returns a list of matching DOM elements, from a selector, a DOM element or an list of elements or even an array of selectors
                var _get = U.get = {};
                _get.elements = function (selector) {
                    var arr = [];
                    if (_type.String(selector)) {
                        try {
                            selector = document.querySelectorAll(selector);
                        } catch (e) { // invalid selector
                            return arr;
                        }
                    }
                    if (_type(selector) === 'nodelist' || _type.Array(selector)) {
                        for (var i = 0, ref = arr.length = selector.length; i < ref; i++) { // list of elements
                            var elem = selector[i];
                            arr[i] = _type.DomElement(elem) ? elem : _get.elements(elem); // if not an element, try to resolve recursively
                        }
                    } else if (_type.DomElement(selector) || selector === document || selector === window) {
                        arr = [selector]; // only the element
                    }
                    return arr;
                };
                // get scroll top value
                _get.scrollTop = function (elem) {
                    return (elem && typeof elem.scrollTop === 'number') ? elem.scrollTop : window.pageYOffset || 0;
                };
                // get scroll left value
                _get.scrollLeft = function (elem) {
                    return (elem && typeof elem.scrollLeft === 'number') ? elem.scrollLeft : window.pageXOffset || 0;
                };
                // get element height
                _get.width = function (elem, outer, includeMargin) {
                    return _dimension('width', elem, outer, includeMargin);
                };
                // get element width
                _get.height = function (elem, outer, includeMargin) {
                    return _dimension('height', elem, outer, includeMargin);
                };

                // get element position (optionally relative to viewport)
                _get.offset = function (elem, relativeToViewport) {
                    var offset = {
                        top: 0,
                        left: 0
                    };
                    if (elem && elem.getBoundingClientRect) { // check if available
                        var rect = elem.getBoundingClientRect();
                        offset.top = rect.top;
                        offset.left = rect.left;
                        if (!relativeToViewport) { // clientRect is by default relative to viewport...
                            offset.top += _get.scrollTop();
                            offset.left += _get.scrollLeft();
                        }
                    }
                    return offset;
                };

                /**
                 * ------------------------------
                 * DOM Element manipulation
                 * ------------------------------
                 */

                U.addClass = function (elem, classname) {
                    if (classname) {
                        if (elem.classList) elem.classList.add(classname);
                        else elem.className += ' ' + classname;
                    }
                };
                U.removeClass = function (elem, classname) {
                    if (classname) {
                        if (elem.classList) elem.classList.remove(classname);
                        else elem.className = elem.className.replace(new RegExp('(^|\\b)' + classname.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
                    }
                };
                // if options is string -> returns css value
                // if options is array -> returns object with css value pairs
                // if options is object -> set new css values
                U.css = function (elem, options) {
                    if (_type.String(options)) {
                        return _getComputedStyle(elem)[_camelCase(options)];
                    } else if (_type.Array(options)) {
                        var
                            obj = {},
                            style = _getComputedStyle(elem);
                        options.forEach(function (option, key) {
                            obj[option] = style[_camelCase(option)];
                        });
                        return obj;
                    } else {
                        for (var option in options) {
                            var val = options[option];
                            if (val == parseFloat(val)) { // assume pixel for seemingly numerical values
                                val += 'px';
                            }
                            elem.style[_camelCase(option)] = val;
                        }
                    }
                };

                return U;
            }(window || {}));

            ScrollMagic.Scene.prototype.addIndicators = function () {
                ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin \'debug.addIndicators\'. Please make sure to include plugins/debug.addIndicators.js');
                return this;
            }
            ScrollMagic.Scene.prototype.removeIndicators = function () {
                ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin \'debug.addIndicators\'. Please make sure to include plugins/debug.addIndicators.js');
                return this;
            }
            ScrollMagic.Scene.prototype.setTween = function () {
                ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin \'animation.gsap\'. Please make sure to include plugins/animation.gsap.js');
                return this;
            }
            ScrollMagic.Scene.prototype.removeTween = function () {
                ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin \'animation.gsap\'. Please make sure to include plugins/animation.gsap.js');
                return this;
            }
            ScrollMagic.Scene.prototype.setVelocity = function () {
                ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin \'animation.velocity\'. Please make sure to include plugins/animation.velocity.js');
                return this;
            }
            ScrollMagic.Scene.prototype.removeVelocity = function () {
                ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin \'animation.velocity\'. Please make sure to include plugins/animation.velocity.js');
                return this;
            }

            return ScrollMagic;
        }));

		/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
		 * ScrollMagic v2.0.5 (2015-04-29)
		 * The javascript library for magical scroll interactions.
		 * (c) 2015 Jan Paepke (@janpaepke)
		 * Project Website: http://scrollmagic.io
		 *
		 * @version 2.0.5
		 * @license Dual licensed under MIT license and GPL.
		 * @author Jan Paepke - e-mail@janpaepke.de
		 *
		 * @file ScrollMagic GSAP Animation Plugin.
		 *
		 * requires: GSAP ~1.14
		 * Powered by the Greensock Animation Platform (GSAP): http://www.greensock.com/js
		 * Greensock License info at http://www.greensock.com/licensing/
		 */
        /**
         * This plugin is meant to be used in conjunction with the Greensock Animation Plattform.
         * It offers an easy API to trigger Tweens or synchronize them to the scrollbar movement.
         *
         * Both the `lite` and the `max` versions of the GSAP library are supported.
         * The most basic requirement is `TweenLite`.
         *
         * To have access to this extension, please include `plugins/animation.gsap.js`.
         * @requires {@link http://greensock.com/gsap|GSAP ~1.14.x}
         * @mixin animation.GSAP
         */
        (function (root, factory) {
            if (true) {
                // AMD. Register as an anonymous module.
                !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(24), __webpack_require__(10), __webpack_require__(26)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } else if (typeof exports === 'object') {
                // CommonJS
                // Loads whole gsap package onto global scope.
                require('gsap');
                factory(require('scrollmagic'), TweenMax, TimelineMax);
            } else {
                // Browser globals
                factory(root.ScrollMagic || (root.jQuery && root.jQuery.ScrollMagic), root.TweenMax || root.TweenLite, root.TimelineMax || root.TimelineLite);
            }
        }(this, function (ScrollMagic, Tween, Timeline) {
            "use strict";
            var NAMESPACE = "animation.gsap";

            var
                console = window.console || {},
                err = Function.prototype.bind.call(console.error || console.log ||
                    function () {}, console);
            if (!ScrollMagic) {
                err("(" + NAMESPACE + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs.");
            }
            if (!Tween) {
                err("(" + NAMESPACE + ") -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs.");
            }

			/*
			 * ----------------------------------------------------------------
			 * Extensions for Scene
			 * ----------------------------------------------------------------
			 */
            /**
             * Every instance of ScrollMagic.Scene now accepts an additional option.
             * See {@link ScrollMagic.Scene} for a complete list of the standard options.
             * @memberof! animation.GSAP#
             * @method new ScrollMagic.Scene(options)
             * @example
             * var scene = new ScrollMagic.Scene({tweenChanges: true});
             *
             * @param {object} [options] - Options for the Scene. The options can be updated at any time.
             * @param {boolean} [options.tweenChanges=false] - Tweens Animation to the progress target instead of setting it.
             Does not affect animations where duration is `0`.
             */
            /**
             * **Get** or **Set** the tweenChanges option value.
             * This only affects scenes with a duration. If `tweenChanges` is `true`, the progress update when scrolling will not be immediate, but instead the animation will smoothly animate to the target state.
             * For a better understanding, try enabling and disabling this option in the [Scene Manipulation Example](../examples/basic/scene_manipulation.html).
             * @memberof! animation.GSAP#
             * @method Scene.tweenChanges
             *
             * @example
             * // get the current tweenChanges option
             * var tweenChanges = scene.tweenChanges();
             *
             * // set new tweenChanges option
             * scene.tweenChanges(true);
             *
             * @fires {@link Scene.change}, when used as setter
             * @param {boolean} [newTweenChanges] - The new tweenChanges setting of the scene.
             * @returns {boolean} `get` -  Current tweenChanges option value.
             * @returns {Scene} `set` -  Parent object for chaining.
             */
            // add option (TODO: DOC (private for dev))
            ScrollMagic.Scene.addOption("tweenChanges", // name
                false, // default


                function (val) { // validation callback
                    return !!val;
                });
            // extend scene
            ScrollMagic.Scene.extend(function () {
                var Scene = this,
                    _tween;

                var log = function () {
                    if (Scene._log) { // not available, when main source minified
                        Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ")", "->");
                        Scene._log.apply(this, arguments);
                    }
                };

                // set listeners
                Scene.on("progress.plugin_gsap", function () {
                    updateTweenProgress();
                });
                Scene.on("destroy.plugin_gsap", function (e) {
                    Scene.removeTween(e.reset);
                });

                /**
                 * Update the tween progress to current position.
                 * @private
                 */
                var updateTweenProgress = function () {
                    if (_tween) {
                        var
                            progress = Scene.progress(),
                            state = Scene.state();
                        if (_tween.repeat && _tween.repeat() === -1) {
                            // infinite loop, so not in relation to progress
                            if (state === 'DURING' && _tween.paused()) {
                                _tween.play();
                            } else if (state !== 'DURING' && !_tween.paused()) {
                                _tween.pause();
                            }
                        } else if (progress != _tween.progress()) { // do we even need to update the progress?
                            // no infinite loop - so should we just play or go to a specific point in time?
                            if (Scene.duration() === 0) {
                                // play the animation
                                if (progress > 0) { // play from 0 to 1
                                    _tween.play();
                                } else { // play from 1 to 0
                                    _tween.reverse();
                                }
                            } else {
                                // go to a specific point in time
                                if (Scene.tweenChanges() && _tween.tweenTo) {
                                    // go smooth
                                    _tween.tweenTo(progress * _tween.duration());
                                } else {
                                    // just hard set it
                                    _tween.progress(progress).pause();
                                }
                            }
                        }
                    }
                };

                /**
                 * Add a tween to the scene.
                 * If you want to add multiple tweens, add them into a GSAP Timeline object and supply it instead (see example below).
                 *
                 * If the scene has a duration, the tween's duration will be projected to the scroll distance of the scene, meaning its progress will be synced to scrollbar movement.
                 * For a scene with a duration of `0`, the tween will be triggered when scrolling forward past the scene's trigger position and reversed, when scrolling back.
                 * To gain better understanding, check out the [Simple Tweening example](../examples/basic/simple_tweening.html).
                 *
                 * Instead of supplying a tween this method can also be used as a shorthand for `TweenMax.to()` (see example below).
                 * @memberof! animation.GSAP#
                 *
                 * @example
                 * // add a single tween directly
                 * scene.setTween(TweenMax.to("obj"), 1, {x: 100});
                 *
                 * // add a single tween via variable
                 * var tween = TweenMax.to("obj"), 1, {x: 100};
                 * scene.setTween(tween);
                 *
                 * // add multiple tweens, wrapped in a timeline.
                 * var timeline = new TimelineMax();
                 * var tween1 = TweenMax.from("obj1", 1, {x: 100});
                 * var tween2 = TweenMax.to("obj2", 1, {y: 100});
                 * timeline
                 *		.add(tween1)
                 *		.add(tween2);
                 * scene.addTween(timeline);
                 *
                 * // short hand to add a TweenMax.to() tween
                 * scene.setTween("obj3", 0.5, {y: 100});
                 *
                 * // short hand to add a TweenMax.to() tween for 1 second
                 * // this is useful, when the scene has a duration and the tween duration isn't important anyway
                 * scene.setTween("obj3", {y: 100});
                 *
                 * @param {(object|string)} TweenObject - A TweenMax, TweenLite, TimelineMax or TimelineLite object that should be animated in the scene. Can also be a Dom Element or Selector, when using direct tween definition (see examples).
                 * @param {(number|object)} duration - A duration for the tween, or tween parameters. If an object containing parameters are supplied, a default duration of 1 will be used.
                 * @param {object} params - The parameters for the tween
                 * @returns {Scene} Parent object for chaining.
                 */
                Scene.setTween = function (TweenObject, duration, params) {
                    var newTween;
                    if (arguments.length > 1) {
                        if (arguments.length < 3) {
                            params = duration;
                            duration = 1;
                        }
                        TweenObject = Tween.to(TweenObject, duration, params);
                    }
                    try {
                        // wrap Tween into a Timeline Object if available to include delay and repeats in the duration and standardize methods.
                        if (Timeline) {
                            newTween = new Timeline({
                                smoothChildTiming: true
                            }).add(TweenObject);
                        } else {
                            newTween = TweenObject;
                        }
                        newTween.pause();
                    } catch (e) {
                        log(1, "ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject");
                        return Scene;
                    }
                    if (_tween) { // kill old tween?
                        Scene.removeTween();
                    }
                    _tween = newTween;

                    // some properties need to be transferred it to the wrapper, otherwise they would get lost.
                    if (TweenObject.repeat && TweenObject.repeat() === -1) { // TweenMax or TimelineMax Object?
                        _tween.repeat(-1);
                        _tween.yoyo(TweenObject.yoyo());
                    }
                    // Some tween validations and debugging helpers
                    if (Scene.tweenChanges() && !_tween.tweenTo) {
                        log(2, "WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic.");
                    }

                    // check if there are position tweens defined for the trigger and warn about it :)
                    if (_tween && Scene.controller() && Scene.triggerElement() && Scene.loglevel() >= 2) { // controller is needed to know scroll direction.
                        var
                            triggerTweens = Tween.getTweensOf(Scene.triggerElement()),
                            vertical = Scene.controller().info("vertical");
                        triggerTweens.forEach(function (value, index) {
                            var
                                tweenvars = value.vars.css || value.vars,
                                condition = vertical ? (tweenvars.top !== undefined || tweenvars.bottom !== undefined) : (tweenvars.left !== undefined || tweenvars.right !== undefined);
                            if (condition) {
                                log(2, "WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!");
                                return false;
                            }
                        });
                    }

                    // warn about tween overwrites, when an element is tweened multiple times
                    if (parseFloat(TweenLite.version) >= 1.14) { // onOverwrite only present since GSAP v1.14.0
                        var
                            list = _tween.getChildren ? _tween.getChildren(true, true, false) : [_tween],
                            // get all nested tween objects
                            newCallback = function () {
                                log(2, "WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another");
                            };
                        for (var i = 0, thisTween, oldCallback; i < list.length; i++) { /*jshint loopfunc: true */
                            thisTween = list[i];
                            if (oldCallback !== newCallback) { // if tweens is added more than once
                                oldCallback = thisTween.vars.onOverwrite;
                                thisTween.vars.onOverwrite = function () {
                                    if (oldCallback) {
                                        oldCallback.apply(this, arguments);
                                    }
                                    newCallback.apply(this, arguments);
                                };
                            }
                        }
                    }
                    log(3, "added tween");

                    updateTweenProgress();
                    return Scene;
                };

                /**
                 * Remove the tween from the scene.
                 * This will terminate the control of the Scene over the tween.
                 *
                 * Using the reset option you can decide if the tween should remain in the current state or be rewound to set the target elements back to the state they were in before the tween was added to the scene.
                 * @memberof! animation.GSAP#
                 *
                 * @example
                 * // remove the tween from the scene without resetting it
                 * scene.removeTween();
                 *
                 * // remove the tween from the scene and reset it to initial position
                 * scene.removeTween(true);
                 *
                 * @param {boolean} [reset=false] - If `true` the tween will be reset to its initial values.
                 * @returns {Scene} Parent object for chaining.
                 */
                Scene.removeTween = function (reset) {
                    if (_tween) {
                        if (reset) {
                            _tween.progress(0).pause();
                        }
                        _tween.kill();
                        _tween = undefined;
                        log(3, "removed tween (reset: " + (reset ? "true" : "false") + ")");
                    }
                    return Scene;
                };

            });
        }));

		/***/ },
	/* 26 */
	/***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*!
		 * VERSION: 1.18.6
		 * DATE: 2016-07-12
		 * UPDATES AND DOCS AT: http://greensock.com
		 *
		 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
		 * This work is subject to the terms at http://greensock.com/standard-license or for
		 * Club GreenSock members, the software agreement that was issued with your membership.
		 *
		 * @author: Jack Doyle, jack@greensock.com
		 */
            "use strict";

            var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : undefined || window;(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
                "use strict";_gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (a, b, c) {
                    var d = function d(b) {
                            a.call(this, b), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0;
                        },
                        e = 1e-10,
                        f = b._internals,
                        g = f.lazyTweens,
                        h = f.lazyRender,
                        i = _gsScope._gsDefine.globals,
                        j = new c(null, null, 1, 0),
                        k = d.prototype = new a();return k.constructor = d, k.kill()._gc = !1, d.version = "1.19.0", k.invalidate = function () {
                        return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), a.prototype.invalidate.call(this);
                    }, k.addCallback = function (a, c, d, e) {
                        return this.add(b.delayedCall(0, a, d, e), c);
                    }, k.removeCallback = function (a, b) {
                        if (a) if (null == b) this._kill(null, a);else for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); --d > -1;) c[d]._startTime === e && c[d]._enabled(!1, !1);return this;
                    }, k.removePause = function (b) {
                        return this.removeCallback(a._internals.pauseCallback, b);
                    }, k.tweenTo = function (a, c) {
                        c = c || {};var d,
                            e,
                            f,
                            g = { ease: j, useFrames: this.usesFrames(), immediateRender: !1 },
                            h = c.repeat && i.TweenMax || b;for (e in c) g[e] = c[e];return g.time = this._parseTimeOrLabel(a), d = Math.abs(Number(g.time) - this._time) / this._timeScale || .001, f = new h(this, d, g), g.onStart = function () {
                            f.target.paused(!0), f.vars.time !== f.target.time() && d === f.duration() && f.duration(Math.abs(f.vars.time - f.target.time()) / f.target._timeScale), c.onStart && f._callback("onStart");
                        }, f;
                    }, k.tweenFromTo = function (a, b, c) {
                        c = c || {}, a = this._parseTimeOrLabel(a), c.startAt = { onComplete: this.seek, onCompleteParams: [a], callbackScope: this }, c.immediateRender = c.immediateRender !== !1;var d = this.tweenTo(b, c);return d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001);
                    }, k.render = function (a, b, c) {
                        this._gc && this._enabled(!0, !1);var d,
                            f,
                            i,
                            j,
                            k,
                            l,
                            m,
                            n,
                            o = this._dirty ? this.totalDuration() : this._totalDuration,
                            p = this._duration,
                            q = this._time,
                            r = this._totalTime,
                            s = this._startTime,
                            t = this._timeScale,
                            u = this._rawPrevTime,
                            v = this._paused,
                            w = this._cycle;if (a >= o - 1e-7) this._locked || (this._totalTime = o, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (f = !0, j = "onComplete", k = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= a && a >= -1e-7 || 0 > u || u === e) && u !== a && this._first && (k = !0, u > e && (j = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, this._yoyo && 0 !== (1 & this._cycle) ? this._time = a = 0 : (this._time = p, a = p + 1e-4);else if (1e-7 > a) if ((this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== q || 0 === p && u !== e && (u > 0 || 0 > a && u >= 0) && !this._locked) && (j = "onReverseComplete", f = this._reversed), 0 > a)) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (k = f = !0, j = "onReverseComplete") : u >= 0 && this._first && (k = !0), this._rawPrevTime = a;else {
                            if ((this._rawPrevTime = p || !b || a || this._rawPrevTime === a ? a : e, 0 === a && f)) for (d = this._first; d && 0 === d._startTime;) d._duration || (f = !1), d = d._next;a = 0, this._initted || (k = !0);
                        } else if ((0 === p && 0 > u && (k = !0), this._time = this._rawPrevTime = a, this._locked || (this._totalTime = a, 0 !== this._repeat && (l = p + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && a >= r && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = p - this._time), this._time > p ? (this._time = p, a = p + 1e-4) : this._time < 0 ? this._time = a = 0 : a = this._time)), this._hasPause && !this._forcingPlayhead && !b)) {
                            if ((a = this._time, a >= q)) for (d = this._first; d && d._startTime <= a && !m;) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (m = d), d = d._next;else for (d = this._last; d && d._startTime >= a && !m;) d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (m = d), d = d._prev;m && (this._time = a = m._startTime, this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay));
                        }if (this._cycle !== w && !this._locked) {
                            var x = this._yoyo && 0 !== (1 & w),
                                y = x === (this._yoyo && 0 !== (1 & this._cycle)),
                                z = this._totalTime,
                                A = this._cycle,
                                B = this._rawPrevTime,
                                C = this._time;if ((this._totalTime = w * p, this._cycle < w ? x = !x : this._totalTime += p, this._time = q, this._rawPrevTime = 0 === p ? u - 1e-4 : u, this._cycle = w, this._locked = !0, q = x ? 0 : p, this.render(q, b, 0 === p), b || this._gc || this.vars.onRepeat && this._callback("onRepeat"), q !== this._time)) return;if ((y && (q = x ? p + 1e-4 : -1e-4, this.render(q, !0, !1)), this._locked = !1, this._paused && !v)) return;this._time = C, this._totalTime = z, this._cycle = A, this._rawPrevTime = B;
                        }if (!(this._time !== q && this._first || c || k || m)) return void (r !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate")));if ((this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== r && a > 0 && (this._active = !0), 0 === r && this.vars.onStart && (0 === this._totalTime && this._totalDuration || b || this._callback("onStart")), n = this._time, n >= q)) for (d = this._first; d && (i = d._next, n === this._time && (!this._paused || v));) (d._active || d._startTime <= this._time && !d._paused && !d._gc) && (m === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = i;else for (d = this._last; d && (i = d._prev, n === this._time && (!this._paused || v));) {
                            if (d._active || d._startTime <= q && !d._paused && !d._gc) {
                                if (m === d) {
                                    for (m = d._prev; m && m.endTime() > this._time;) m.render(m._reversed ? m.totalDuration() - (a - m._startTime) * m._timeScale : (a - m._startTime) * m._timeScale, b, c), m = m._prev;m = null, this.pause();
                                }d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c);
                            }d = i;
                        }this._onUpdate && (b || (g.length && h(), this._callback("onUpdate"))), j && (this._locked || this._gc || (s === this._startTime || t !== this._timeScale) && (0 === this._time || o >= this.totalDuration()) && (f && (g.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[j] && this._callback(j)));
                    }, k.getActive = function (a, b, c) {
                        null == a && (a = !0), null == b && (b = !0), null == c && (c = !1);var d,
                            e,
                            f = [],
                            g = this.getChildren(a, b, c),
                            h = 0,
                            i = g.length;for (d = 0; i > d; d++) e = g[d], e.isActive() && (f[h++] = e);return f;
                    }, k.getLabelAfter = function (a) {
                        a || 0 !== a && (a = this._time);var b,
                            c = this.getLabelsArray(),
                            d = c.length;for (b = 0; d > b; b++) if (c[b].time > a) return c[b].name;return null;
                    }, k.getLabelBefore = function (a) {
                        null == a && (a = this._time);for (var b = this.getLabelsArray(), c = b.length; --c > -1;) if (b[c].time < a) return b[c].name;return null;
                    }, k.getLabelsArray = function () {
                        var a,
                            b = [],
                            c = 0;for (a in this._labels) b[c++] = { time: this._labels[a], name: a };return b.sort(function (a, b) {
                            return a.time - b.time;
                        }), b;
                    }, k.progress = function (a, b) {
                        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration();
                    }, k.totalProgress = function (a, b) {
                        return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration();
                    }, k.totalDuration = function (b) {
                        return arguments.length ? -1 !== this._repeat && b ? this.timeScale(this.totalDuration() / b) : this : (this._dirty && (a.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration);
                    }, k.time = function (a, b) {
                        return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time;
                    }, k.repeat = function (a) {
                        return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat;
                    }, k.repeatDelay = function (a) {
                        return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay;
                    }, k.yoyo = function (a) {
                        return arguments.length ? (this._yoyo = a, this) : this._yoyo;
                    }, k.currentLabel = function (a) {
                        return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + 1e-8);
                    }, d;
                }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (a, b, c) {
                    var d = function d(a) {
                            b.call(this, a), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;var c,
                            d,
                            e = this.vars;for (d in e) c = e[d], i(c) && -1 !== c.join("").indexOf("{self}") && (e[d] = this._swapSelfInParams(c));i(e.tweens) && this.add(e.tweens, 0, e.align, e.stagger);
                        },
                        e = 1e-10,
                        f = c._internals,
                        g = d._internals = {},
                        h = f.isSelector,
                        i = f.isArray,
                        j = f.lazyTweens,
                        k = f.lazyRender,
                        l = _gsScope._gsDefine.globals,
                        m = function m(a) {
                            var b,
                                c = {};for (b in a) c[b] = a[b];return c;
                        },
                        n = function n(a, b, c) {
                            var d,
                                e,
                                f = a.cycle;for (d in f) e = f[d], a[d] = "function" == typeof e ? e.call(b[c], c) : e[c % e.length];delete a.cycle;
                        },
                        o = g.pauseCallback = function () {},
                        p = function p(a) {
                            var b,
                                c = [],
                                d = a.length;for (b = 0; b !== d; c.push(a[b++]));return c;
                        },
                        q = d.prototype = new b();return d.version = "1.19.0", q.constructor = d, q.kill()._gc = q._forcingPlayhead = q._hasPause = !1, q.to = function (a, b, d, e) {
                        var f = d.repeat && l.TweenMax || c;return b ? this.add(new f(a, b, d), e) : this.set(a, d, e);
                    }, q.from = function (a, b, d, e) {
                        return this.add((d.repeat && l.TweenMax || c).from(a, b, d), e);
                    }, q.fromTo = function (a, b, d, e, f) {
                        var g = e.repeat && l.TweenMax || c;return b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f);
                    }, q.staggerTo = function (a, b, e, f, g, i, j, k) {
                        var l,
                            o,
                            q = new d({ onComplete: i, onCompleteParams: j, callbackScope: k, smoothChildTiming: this.smoothChildTiming }),
                            r = e.cycle;for ("string" == typeof a && (a = c.selector(a) || a), a = a || [], h(a) && (a = p(a)), f = f || 0, 0 > f && (a = p(a), a.reverse(), f *= -1), o = 0; o < a.length; o++) l = m(e), l.startAt && (l.startAt = m(l.startAt), l.startAt.cycle && n(l.startAt, a, o)), r && (n(l, a, o), null != l.duration && (b = l.duration, delete l.duration)), q.to(a[o], b, l, o * f);return this.add(q, g);
                    }, q.staggerFrom = function (a, b, c, d, e, f, g, h) {
                        return c.immediateRender = 0 != c.immediateRender, c.runBackwards = !0, this.staggerTo(a, b, c, d, e, f, g, h);
                    }, q.staggerFromTo = function (a, b, c, d, e, f, g, h, i) {
                        return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, this.staggerTo(a, b, d, e, f, g, h, i);
                    }, q.call = function (a, b, d, e) {
                        return this.add(c.delayedCall(0, a, b, d), e);
                    }, q.set = function (a, b, d) {
                        return d = this._parseTimeOrLabel(d, 0, !0), null == b.immediateRender && (b.immediateRender = d === this._time && !this._paused), this.add(new c(a, 0, b), d);
                    }, d.exportRoot = function (a, b) {
                        a = a || {}, null == a.smoothChildTiming && (a.smoothChildTiming = !0);var e,
                            f,
                            g = new d(a),
                            h = g._timeline;for (null == b && (b = !0), h._remove(g, !0), g._startTime = 0, g._rawPrevTime = g._time = g._totalTime = h._time, e = h._first; e;) f = e._next, b && e instanceof c && e.target === e.vars.onComplete || g.add(e, e._startTime - e._delay), e = f;return h.add(g, 0), g;
                    }, q.add = function (e, f, g, h) {
                        var j, k, l, m, n, o;if (("number" != typeof f && (f = this._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a))) {
                            if (e instanceof Array || e && e.push && i(e)) {
                                for (g = g || "normal", h = h || 0, j = f, k = e.length, l = 0; k > l; l++) i(m = e[l]) && (m = new d({ tweens: m })), this.add(m, j), "string" != typeof m && "function" != typeof m && ("sequence" === g ? j = m._startTime + m.totalDuration() / m._timeScale : "start" === g && (m._startTime -= m.delay())), j += h;return this._uncache(!0);
                            }if ("string" == typeof e) return this.addLabel(e, f);if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";e = c.delayedCall(0, e);
                        }if ((b.prototype.add.call(this, e, f), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())) for (n = this, o = n.rawTime() > e._startTime; n._timeline;) o && n._timeline.smoothChildTiming ? n.totalTime(n._totalTime, !0) : n._gc && n._enabled(!0, !1), n = n._timeline;return this;
                    }, q.remove = function (b) {
                        if (b instanceof a) {
                            this._remove(b, !1);var c = b._timeline = b.vars.useFrames ? a._rootFramesTimeline : a._rootTimeline;return b._startTime = (b._paused ? b._pauseTime : c._time) - (b._reversed ? b.totalDuration() - b._totalTime : b._totalTime) / b._timeScale, this;
                        }if (b instanceof Array || b && b.push && i(b)) {
                            for (var d = b.length; --d > -1;) this.remove(b[d]);return this;
                        }return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b);
                    }, q._remove = function (a, c) {
                        b.prototype._remove.call(this, a, c);var d = this._last;return d ? this._time > d._startTime + d._totalDuration / d._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this;
                    }, q.append = function (a, b) {
                        return this.add(a, this._parseTimeOrLabel(null, b, !0, a));
                    }, q.insert = q.insertMultiple = function (a, b, c, d) {
                        return this.add(a, b || 0, c, d);
                    }, q.appendMultiple = function (a, b, c, d) {
                        return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d);
                    }, q.addLabel = function (a, b) {
                        return this._labels[a] = this._parseTimeOrLabel(b), this;
                    }, q.addPause = function (a, b, d, e) {
                        var f = c.delayedCall(0, o, d, e || this);return f.vars.onComplete = f.vars.onReverseComplete = b, f.data = "isPause", this._hasPause = !0, this.add(f, a);
                    }, q.removeLabel = function (a) {
                        return delete this._labels[a], this;
                    }, q.getLabelTime = function (a) {
                        return null != this._labels[a] ? this._labels[a] : -1;
                    }, q._parseTimeOrLabel = function (b, c, d, e) {
                        var f;if (e instanceof a && e.timeline === this) this.remove(e);else if (e && (e instanceof Array || e.push && i(e))) for (f = e.length; --f > -1;) e[f] instanceof a && e[f].timeline === this && this.remove(e[f]);if ("string" == typeof c) return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - this.duration() : 0, d);if ((c = c || 0, "string" != typeof b || !isNaN(b) && null == this._labels[b])) null == b && (b = this.duration());else {
                            if ((f = b.indexOf("="), -1 === f)) return null == this._labels[b] ? d ? this._labels[b] = this.duration() + c : c : this._labels[b] + c;c = parseInt(b.charAt(f - 1) + "1", 10) * Number(b.substr(f + 1)), b = f > 1 ? this._parseTimeOrLabel(b.substr(0, f - 1), 0, d) : this.duration();
                        }return Number(b) + c;
                    }, q.seek = function (a, b) {
                        return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1);
                    }, q.stop = function () {
                        return this.paused(!0);
                    }, q.gotoAndPlay = function (a, b) {
                        return this.play(a, b);
                    }, q.gotoAndStop = function (a, b) {
                        return this.pause(a, b);
                    }, q.render = function (a, b, c) {
                        this._gc && this._enabled(!0, !1);var d,
                            f,
                            g,
                            h,
                            i,
                            l,
                            m,
                            n = this._dirty ? this.totalDuration() : this._totalDuration,
                            o = this._time,
                            p = this._startTime,
                            q = this._timeScale,
                            r = this._paused;if (a >= n - 1e-7) this._totalTime = this._time = n, this._reversed || this._hasPausedChild() || (f = !0, h = "onComplete", i = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= a && a >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === e) && this._rawPrevTime !== a && this._first && (i = !0, this._rawPrevTime > e && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, a = n + 1e-4;else if (1e-7 > a) if ((this._totalTime = this._time = 0, (0 !== o || 0 === this._duration && this._rawPrevTime !== e && (this._rawPrevTime > 0 || 0 > a && this._rawPrevTime >= 0)) && (h = "onReverseComplete", f = this._reversed), 0 > a)) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (i = f = !0, h = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (i = !0), this._rawPrevTime = a;else {
                            if ((this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, 0 === a && f)) for (d = this._first; d && 0 === d._startTime;) d._duration || (f = !1), d = d._next;a = 0, this._initted || (i = !0);
                        } else {
                            if (this._hasPause && !this._forcingPlayhead && !b) {
                                if (a >= o) for (d = this._first; d && d._startTime <= a && !l;) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (l = d), d = d._next;else for (d = this._last; d && d._startTime >= a && !l;) d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (l = d), d = d._prev;l && (this._time = a = l._startTime, this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay));
                            }this._totalTime = this._time = this._rawPrevTime = a;
                        }if (this._time !== o && this._first || c || i || l) {
                            if ((this._initted || (this._initted = !0), this._active || !this._paused && this._time !== o && a > 0 && (this._active = !0), 0 === o && this.vars.onStart && (0 === this._time && this._duration || b || this._callback("onStart")), m = this._time, m >= o)) for (d = this._first; d && (g = d._next, m === this._time && (!this._paused || r));) (d._active || d._startTime <= m && !d._paused && !d._gc) && (l === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = g;else for (d = this._last; d && (g = d._prev, m === this._time && (!this._paused || r));) {
                                if (d._active || d._startTime <= o && !d._paused && !d._gc) {
                                    if (l === d) {
                                        for (l = d._prev; l && l.endTime() > this._time;) l.render(l._reversed ? l.totalDuration() - (a - l._startTime) * l._timeScale : (a - l._startTime) * l._timeScale, b, c), l = l._prev;l = null, this.pause();
                                    }d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c);
                                }d = g;
                            }this._onUpdate && (b || (j.length && k(), this._callback("onUpdate"))), h && (this._gc || (p === this._startTime || q !== this._timeScale) && (0 === this._time || n >= this.totalDuration()) && (f && (j.length && k(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[h] && this._callback(h)));
                        }
                    }, q._hasPausedChild = function () {
                        for (var a = this._first; a;) {
                            if (a._paused || a instanceof d && a._hasPausedChild()) return !0;a = a._next;
                        }return !1;
                    }, q.getChildren = function (a, b, d, e) {
                        e = e || -9999999999;for (var f = [], g = this._first, h = 0; g;) g._startTime < e || (g instanceof c ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g), a !== !1 && (f = f.concat(g.getChildren(!0, b, d)), h = f.length))), g = g._next;return f;
                    }, q.getTweensOf = function (a, b) {
                        var d,
                            e,
                            f = this._gc,
                            g = [],
                            h = 0;for (f && this._enabled(!0, !0), d = c.getTweensOf(a), e = d.length; --e > -1;) (d[e].timeline === this || b && this._contains(d[e])) && (g[h++] = d[e]);return f && this._enabled(!1, !0), g;
                    }, q.recent = function () {
                        return this._recent;
                    }, q._contains = function (a) {
                        for (var b = a.timeline; b;) {
                            if (b === this) return !0;b = b.timeline;
                        }return !1;
                    }, q.shiftChildren = function (a, b, c) {
                        c = c || 0;for (var d, e = this._first, f = this._labels; e;) e._startTime >= c && (e._startTime += a), e = e._next;if (b) for (d in f) f[d] >= c && (f[d] += a);return this._uncache(!0);
                    }, q._kill = function (a, b) {
                        if (!a && !b) return this._enabled(!1, !1);for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1;) c[d]._kill(a, b) && (e = !0);return e;
                    }, q.clear = function (a) {
                        var b = this.getChildren(!1, !0, !0),
                            c = b.length;for (this._time = this._totalTime = 0; --c > -1;) b[c]._enabled(!1, !1);return a !== !1 && (this._labels = {}), this._uncache(!0);
                    }, q.invalidate = function () {
                        for (var b = this._first; b;) b.invalidate(), b = b._next;return a.prototype.invalidate.call(this);
                    }, q._enabled = function (a, c) {
                        if (a === this._gc) for (var d = this._first; d;) d._enabled(a, !0), d = d._next;return b.prototype._enabled.call(this, a, c);
                    }, q.totalTime = function (b, c, d) {
                        this._forcingPlayhead = !0;var e = a.prototype.totalTime.apply(this, arguments);return this._forcingPlayhead = !1, e;
                    }, q.duration = function (a) {
                        return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration);
                    }, q.totalDuration = function (a) {
                        if (!arguments.length) {
                            if (this._dirty) {
                                for (var b, c, d = 0, e = this._last, f = 999999999999; e;) b = e._prev, e._dirty && e.totalDuration(), e._startTime > f && this._sortChildren && !e._paused ? this.add(e, e._startTime - e._delay) : f = e._startTime, e._startTime < 0 && !e._paused && (d -= e._startTime, this._timeline.smoothChildTiming && (this._startTime += e._startTime / this._timeScale), this.shiftChildren(-e._startTime, !1, -9999999999), f = 0), c = e._startTime + e._totalDuration / e._timeScale, c > d && (d = c), e = b;this._duration = this._totalDuration = d, this._dirty = !1;
                            }return this._totalDuration;
                        }return a && this.totalDuration() ? this.timeScale(this._totalDuration / a) : this;
                    }, q.paused = function (b) {
                        if (!b) for (var c = this._first, d = this._time; c;) c._startTime === d && "isPause" === c.data && (c._rawPrevTime = 0), c = c._next;return a.prototype.paused.apply(this, arguments);
                    }, q.usesFrames = function () {
                        for (var b = this._timeline; b._timeline;) b = b._timeline;return b === a._rootFramesTimeline;
                    }, q.rawTime = function () {
                        return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale;
                    }, d;
                }, !0);
            }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), (function (a) {
                "use strict";var b = function b() {
                    return (_gsScope.GreenSockGlobals || _gsScope)[a];
                }; true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(18)], __WEBPACK_AMD_DEFINE_FACTORY__ = (b), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "undefined" != typeof module && module.exports && (require("./TweenLite.js"), module.exports = b());
            })("TimelineMax");
			/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

		/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

        var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

        var _systemAbstract = __webpack_require__(8);

        var _systemAbstract2 = _interopRequireDefault(_systemAbstract);

        var Component_Layers = (function (_Abstract2) {
            _inherits(Component_Layers, _Abstract2);

            function Component_Layers(el, options) {
                _classCallCheck(this, Component_Layers);

                _get(Object.getPrototypeOf(Component_Layers.prototype), "constructor", this).call(this, el, jQuery.extend(true, {
                    "message": "Example Component Message Default"
                }, options), 'component');

                this.wrapper = jQuery(this.el), this.layers = jQuery(this.wrapper).find('.m-layer'), this.currY = jQuery(window).scrollTop(), this.windowHeight = jQuery(window).height(), this.wrapperPos = jQuery(this.wrapper).position(), this.wrapperHeight = jQuery(wrapper).height(), this.wrapperDuration = this.wrapperPos.top + this.wrapperHeight, this.scrollPercent = this.currY - this.windowHeight, this.lastScrollY, this.target = jQuery('.m-layer');
                this.scheduledAnimationFrame, this.initialise();
            }

            _createClass(Component_Layers, [{
                key: "initialise",
                value: function initialise() {
                    var $this = this;
                    this.fire();
                }
            }, {
                key: "fire",
                value: function fire() {
                    //if(this.currY > 0){//this.move(this.wrapper, this.scrollPercent, this.wrapperDuration, this.currY, this.windowHeight)}
                    this.move(this.scrollPercent, this.currY, this.windowHeight);
                    this.initialiseListeners();
                }
            }, {
                key: "initialiseListeners",
                value: function initialiseListeners() {
                    var _this = this;

                    var $this = this;
                    jQuery(window).scroll(function (e) {
                        return _this.onScrolling(e);
                    });

                    setInterval(function () {
                        if ($this.scheduledAnimationFrame) {
                            $this.scheduledAnimationFrame = false;
                            $this.currY = jQuery(window).scrollTop();
                            $this.scrollPercent = $this.currY - $this.windowHeight; //px
                            $this.move($this.scrollPercent, $this.currY, $this.windowHeight);
                        }
                    }, 100);
                }
            }, {
                key: "onScrolling",
                value: function onScrolling(e) {
                    this.scheduledAnimationFrame = true;
                }
            }, {
                key: "move",
                value: function move(_pos, _scroll, _screen) {
                    if (jQuery('body').hasClass('mobile')) {
                        console.log("mobile");
                        //mobile fade transition bg image
                        console.log(_scroll);
                        if (_scroll > jQuery('#layer04').offset().top - _screen / 3) {
                            jQuery('.m-layer__figure .-figure').removeClass('-visible');
                            jQuery('.m-layer__figure .-04').addClass('-visible');
                        } else if (_scroll > jQuery('#layer03').offset().top - _screen / 3) {
                            jQuery('.m-layer__figure .-figure').removeClass('-visible');
                            jQuery('.m-layer__figure .-03').addClass('-visible');
                        } else if (_scroll > jQuery('#layer02').offset().top - _screen / 3) {
                            jQuery('.m-layer__figure .-figure').removeClass('-visible');
                            jQuery('.m-layer__figure .-02').addClass('-visible');
                            jQuery('#nyfw-promo').removeClass('-visible');
                        } else if (_scroll > jQuery('#layer01').offset().top - _screen / 3) {
                            jQuery('.m-layer__figure .-figure').removeClass('-visible');
                            jQuery('.m-layer__figure .-01').addClass('-visible');
                            jQuery('#nyfw-promo').addClass('-visible');
                        } else if (_scroll > jQuery('#layer00').offset().top - _screen / 3) {
                            console.log("#layer00");
                            jQuery('.m-layer__figure .-figure').removeClass('-visible');
                            jQuery('.m-layer__figure .-00').addClass('-visible');
                        } else {
                            jQuery('#nyfw-promo').removeClass('-visible');
                        }
                    } else {
                        TweenLite.to(this.target, 0.6, { y: -_pos, ease: Cubic.easeOut }); //px //Power4.easeOut
                    }
                }
            }]);

            return Component_Layers;
        })(_systemAbstract2["default"]);

        exports["default"] = Component_Layers;
        module.exports = exports["default"];

		/***/ },
	/* 28 */
	/***/ function(module, exports, __webpack_require__) {

        // --
        // USAGE
        // --
        //
        // data-component="test-component data-component-options='{"message":"test"}'
        //
        // "message" A message that will be alerted on click
        //

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

        var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

        var _systemAbstract = __webpack_require__(8);

        var _systemAbstract2 = _interopRequireDefault(_systemAbstract);

        var Component_Modal = (function (_Abstract2) {
            _inherits(Component_Modal, _Abstract2);

            function Component_Modal(el, options) {
                _classCallCheck(this, Component_Modal);

                _get(Object.getPrototypeOf(Component_Modal.prototype), "constructor", this).call(this, el, jQuery.extend(true, {
                    "message": "Example Component Message Default"
                }, options), 'component');

                this.initialise();
            }

            _createClass(Component_Modal, [{
                key: "initialise",
                value: function initialise() {
                    this.initialiseListeners();
                }
            }, {
                key: "initialiseListeners",
                value: function initialiseListeners() {
                    var _this = this;

                    this.$parent = this.$el.parents('body');
                    this.$parent.on("click", ".m-modal__bg", function (e) {
                        return _this.onCloseModal(e);
                    });
                    this.$parent.on("click", ".m-modal__close", function (e) {
                        return _this.onCloseModal(e);
                    });
                    this.$el.on("click", function (e) {
                        return _this.onOpenModal(e);
                    });
                }
            }, {
                key: "onCloseModal",
                value: function onCloseModal() {
                    jQuery('.m-modal__figure').css('background-image', 'url()');
                    jQuery('.m-modal__copy').text(" ");
                    jQuery('.m-modal__container').removeClass('-video');
                    // player.stopVideo();
                    jQuery("#modal-template").fadeOut('fast', function () {
                        jQuery(this).remove();
                        if (jQuery('html').hasClass('mobile')) {
                            jQuery('#happiness-content').children().css("display", "block");
                        }
                    });
                    //jQuery('html').removeClass('no-scroll');
                }
            }, {
                key: "onOpenModal",
                value: function onOpenModal(event) {
                    event.preventDefault();
                    var video;
                    var videoName;
                    var wrap;

                    if (event.currentTarget.attributes['data-video']) {
                        video = event.currentTarget.attributes['data-video'].nodeValue;
                        videoName = event.currentTarget.attributes['data-name'].nodeValue;
                        wrap = "<section id='modal-template' class='m-modal' style='display:none;' ><div class='m-modal__bg'></div><div class='m-modal__container -video'><a class='c-btn -circle -border-white -with-close m-modal__close'><span class='c-icon -close'></span></a><div id='ytplayer' class='m-modal__video'></div></div></section>";
                    }

                    jQuery('body').append(wrap);
                    // jQuery('html').addClass('no-scroll');
                    jQuery('#modal-template').fadeIn('fast', function () {
                        if (video) {
                            var onPlayerStateChange = function onPlayerStateChange(event) {

                                // track when user clicks to Play
                                if (event.data == YT.PlayerState.PLAYING) {
                                    dataLayer.push({
                                        'event': 'youtube',
                                        'eventCategory': 'Youtube Videos',
                                        'eventAction': '/gotyourback',
                                        'eventLabel': 'Video play - ' + videoName,
                                        'eventValue': '0'
                                    });
                                    pauseFlag = true;
                                }
                                // track when user clicks to Pause
                                if (event.data == YT.PlayerState.PAUSED && pauseFlag) {
                                    dataLayer.push({
                                        'event': 'youtube',
                                        'eventCategory': 'Youtube Videos',
                                        'eventAction': '/gotyourback',
                                        'eventLabel': 'Video paused - ' + videoName,
                                        'eventValue': '0'
                                    });
                                    pauseFlag = false;
                                }
                                // track when video ends
                                if (event.data == YT.PlayerState.ENDED) {
                                    dataLayer.push({
                                        'event': 'youtube',
                                        'eventCategory': 'Youtube Videos',
                                        'eventAction': '/gotyourback',
                                        'eventLabel': 'Video ended - ' + videoName,
                                        'eventValue': '0'
                                    });
                                }
                            };

                            if (jQuery('body').hasClass('mobile')) {
                                var player = new YT.Player('ytplayer', {
                                    height: '260',
                                    width: '100%',
                                    videoId: video,
                                    playerVars: { 'autoplay': 1, 'fs': 0 },
                                    events: {
                                        //'onReady': onPlayerReady,
                                        'onStateChange': onPlayerStateChange
                                    }
                                });
                            } else {
                                var player = new YT.Player('ytplayer', {
                                    height: '540',
                                    width: '100%',
                                    videoId: video,
                                    playerVars: { 'autoplay': 1, 'fs': 0 },
                                    events: {
                                        //'onReady': onPlayerReady,
                                        'onStateChange': onPlayerStateChange
                                    }
                                });
                            }
                            var pauseFlag = true;
                        }
                    });
                }
            }]);

            return Component_Modal;
        })(_systemAbstract2["default"]);

        exports["default"] = Component_Modal;
        module.exports = exports["default"];

		/***/ },
	/* 29 */
	/***/ function(module, exports, __webpack_require__) {

        // --
        // USAGE
        // --
        //
        // data-component="test-component data-component-options='{"message":"test"}'
        //
        // "message" A message that will be alerted on click
        //

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

        var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

        var _systemAbstract = __webpack_require__(8);

        var _systemAbstract2 = _interopRequireDefault(_systemAbstract);

        var Component_ModalForm = (function (_Abstract2) {
            _inherits(Component_ModalForm, _Abstract2);

            function Component_ModalForm(el, options) {
                _classCallCheck(this, Component_ModalForm);

                _get(Object.getPrototypeOf(Component_ModalForm.prototype), "constructor", this).call(this, el, jQuery.extend(true, {
                    "message": "Example Component Message Default"
                }, options), 'component');

                this.initialise();
            }

            _createClass(Component_ModalForm, [{
                key: "initialise",
                value: function initialise() {
                    this.initialiseListeners();
                }
            }, {
                key: "initialiseListeners",
                value: function initialiseListeners() {
                    var _this = this;

                    this.$parent = this.$el.parents('body');
                    this.$parent.on("click", ".m-modal__bg", function (e) {
                        return _this.onCloseModal(e);
                    });
                    this.$parent.on("click", ".m-modal__close", function (e) {
                        return _this.onCloseModal(e);
                    });
                    this.$el.on("click", function (e) {
                        return _this.onOpenModal(e);
                    });
                    //this.$el.find(".c-btn").on("click", (e) => this.onEnterComp(e));
                }
            }, {
                key: "onCloseModal",
                value: function onCloseModal() {
                    jQuery("#modal-template").fadeOut('fast');
                    jQuery('html').removeClass('no-scroll -form');
                }
            }, {
                key: "onOpenModal",
                value: function onOpenModal(event) {
                    //event.preventDefault();
                    //removed this because of modal click bug
                    jQuery('html').addClass('no-scroll -form');
                    jQuery('#modal-template').fadeIn('fast');
                }

                // onEnterComp(event){
                //   //event.preventDefault();
                //   console.log("button click");
                //}

            }]);

            return Component_ModalForm;
        })(_systemAbstract2["default"]);

        exports["default"] = Component_ModalForm;
        module.exports = exports["default"];

		/***/ },
	/* 30 */
	/***/ function(module, exports, __webpack_require__) {

        // --
        // USAGE
        // --
        //
        // data-component="test-component data-component-options='{"message":"test"}'
        //
        // "message" A message that will be alerted on click
        //

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

        var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

        var _systemAbstract = __webpack_require__(8);

        var _systemAbstract2 = _interopRequireDefault(_systemAbstract);

        var Component_OuterForm = (function (_Abstract2) {
            _inherits(Component_OuterForm, _Abstract2);

            function Component_OuterForm(el, options) {
                _classCallCheck(this, Component_OuterForm);

                _get(Object.getPrototypeOf(Component_OuterForm.prototype), "constructor", this).call(this, el, jQuery.extend(true, {
                    "message": "Example Component Message Default"
                }, options), 'component');

                this.initialise();
            }

            _createClass(Component_OuterForm, [{
                key: "initialise",
                value: function initialise() {
                    this.initialiseListeners();
                }
            }, {
                key: "initialiseListeners",
                value: function initialiseListeners() {}
            }]);

            return Component_OuterForm;
        })(_systemAbstract2["default"]);

        exports["default"] = Component_OuterForm;
        module.exports = exports["default"];

		/***/ },
	/* 31 */
	/***/ function(module, exports, __webpack_require__) {

        // --
        // USAGE
        // --
        //
        // data-component="test-component data-component-options='{"message":"test"}'
        //
        // "message" A message that will be alerted on click
        //

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

        var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

        var _systemAbstract = __webpack_require__(8);

        var _systemAbstract2 = _interopRequireDefault(_systemAbstract);

        var Component_Promo = (function (_Abstract2) {
            _inherits(Component_Promo, _Abstract2);

            function Component_Promo(el, options) {
                _classCallCheck(this, Component_Promo);

                _get(Object.getPrototypeOf(Component_Promo.prototype), "constructor", this).call(this, el, jQuery.extend(true, {
                    "message": "Example Component Message Default"
                }, options), 'component');

                this.initialise();
            }

            _createClass(Component_Promo, [{
                key: "initialise",
                value: function initialise() {
                    this.initialiseListeners();
                }
            }, {
                key: "initialiseListeners",
                value: function initialiseListeners() {
                    var _this = this;

                    this.$el.click('.m-promo__close', function (e) {
                        return _this.onCloseClicked(e);
                    });
                }
            }, {
                key: "onCloseClicked",
                value: function onCloseClicked(e) {
                    this.$el.remove();
                }
            }]);

            return Component_Promo;
        })(_systemAbstract2["default"]);

        exports["default"] = Component_Promo;
        module.exports = exports["default"];

		/***/ },
	/* 32 */
	/***/ function(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

        var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

        var _systemAbstract = __webpack_require__(8);

        var _systemAbstract2 = _interopRequireDefault(_systemAbstract);

        var Component_ResponsiveBg = (function (_Abstract2) {
            _inherits(Component_ResponsiveBg, _Abstract2);

            function Component_ResponsiveBg(el, options) {
                _classCallCheck(this, Component_ResponsiveBg);

                _get(Object.getPrototypeOf(Component_ResponsiveBg.prototype), "constructor", this).call(this, el, jQuery.extend(true, {
                    "message": "Message Default"
                }, options), 'component');

                this.initialise();
            }

            _createClass(Component_ResponsiveBg, [{
                key: "initialise",
                value: function initialise() {
                    var desktop = this.el.attributes['data-bg-desktop'].nodeValue;
                    var mobile = this.el.attributes['data-bg-mobile'].nodeValue;
                    var windowWidth = jQuery(window).width();
                    var $this = this;

                    this.checkSize(desktop, mobile, windowWidth);
                    jQuery(window).resize(function () {
                        windowWidth = jQuery(window).width();
                        $this.checkSize(desktop, mobile, windowWidth);
                    });
                }
            }, {
                key: "checkSize",
                value: function checkSize(desktopImg, mobileImg, windowWidth) {

                    var desktopBreakpointSize = jQuery("#bp-desktop").width();
                    if (windowWidth < desktopBreakpointSize) {
                        this.responsiveImage(mobileImg);
                    } else if (windowWidth > desktopBreakpointSize - 1) {
                        this.responsiveImage(desktopImg);
                    }
                }
            }, {
                key: "responsiveImage",
                value: function responsiveImage(image) {
                    jQuery(this.el).css("background-image", "url(" + image + ")");
                }
            }]);

            return Component_ResponsiveBg;
        })(_systemAbstract2["default"]);

        exports["default"] = Component_ResponsiveBg;
        module.exports = exports["default"];

		/***/ },
	/* 33 */
	/***/ function(module, exports, __webpack_require__) {

        // --
        // USAGE
        // --
        //
        // data-component="test-component data-component-options='{"message":"test"}'
        //
        // "message" A message that will be alerted on click
        //

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

        var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

        var _systemAbstract = __webpack_require__(8);

        var _systemAbstract2 = _interopRequireDefault(_systemAbstract);

        var Component_RetailerMap = (function (_Abstract2) {
            _inherits(Component_RetailerMap, _Abstract2);

            function Component_RetailerMap(el, options) {
                _classCallCheck(this, Component_RetailerMap);

                _get(Object.getPrototypeOf(Component_RetailerMap.prototype), "constructor", this).call(this, el, jQuery.extend(true, {
                    "message": "Example Component Message Default"
                }, options), 'component');

                this.countryRestrict = { 'country': document.getElementById('country').value };
                this.autocomplete;
                this.places;
                this.place;
                this.initialise();
            }

            _createClass(Component_RetailerMap, [{
                key: "initialise",
                value: function initialise() {
                    var context = this;

                    this.initialiseListeners();
                    var autoCompleteOptions = {
                        componentRestrictions: this.countryRestrict
                    };
                    this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('retailer_search_input'), autoCompleteOptions);
                    var input = document.getElementById('retailer_search_input');

                    google.maps.event.addDomListener(input, 'keydown', function (e) {
                        if (e.which == 13) {
                            //enter
                            e.preventDefault();
                            if (jQuery('#retailer_search_input').val() != '') {
                                window.location = '/stockists?address=' + jQuery("#retailer_search_input").val() + ' ' + context.countryRestrict.country;
                            }
                        }
                    });

                    google.maps.event.addListener(this.autocomplete, 'place_changed', function () {
                        //this.place = this.autocomplete.getPlace();
                        //window.location = '/stockists?q=' + jQuery("#retailer_search_input").val();
						/*
						 if (this.place.geometry) {
						 window.location = '/stockists?q=' + this.place.formatted_address + '&ranges=' + jQuery('#rangesInput').val() + ',&retailers=' + jQuery('#retailersInput').val();
						 }
						 // if enter
						 else {

						 }*/
                    });

                    // need to stop prop of the touchend event - from https://gist.github.com/schoenobates/ef578a02ac8ab6726487
                    if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {
                        setTimeout(function () {
                            var container = document.getElementsByClassName('pac-container')[0];
                            container.addEventListener('touchend', function (e) {
                                e.stopImmediatePropagation();
                            });
                        }, 500);
                    }
                }
            }, {
                key: "initialiseListeners",
                value: function initialiseListeners() {
                    //var $this = this;
                    var context = this;
                    jQuery('#retailer_search_button').click(function (e) {
                        e.preventDefault();
                        if (jQuery('#retailer_search_input').val() != '') {
                            window.location = '/stockists?address=' + jQuery("#retailer_search_input").val() + ' ' + context.countryRestrict.country;
                        } else {
                            //alert('show validation error');
                        }
                    });
                }
            }, {
                key: "setAutocompleteCountry",
                value: function setAutocompleteCountry(country) {
                    var country = document.getElementById('country').value;
                    this.autocomplete.setComponentRestrictions({ 'country': country });
                    jQuery('#retailer_search_input').val('');
                }
            }]);

            return Component_RetailerMap;
        })(_systemAbstract2["default"]);

        exports["default"] = Component_RetailerMap;
        module.exports = exports["default"];

		/***/ },
	/* 34 */
	/***/ function(module, exports, __webpack_require__) {

        // --
        // USAGE
        // --
        //
        // data-component="test-component data-component-options='{"message":"test"}'
        //
        // "message" A message that will be alerted on click
        //

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

        var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

        var _systemAbstract = __webpack_require__(8);

        var _systemAbstract2 = _interopRequireDefault(_systemAbstract);

        var Component_DataScrollNav = (function (_Abstract2) {
            _inherits(Component_DataScrollNav, _Abstract2);

            function Component_DataScrollNav(el, options) {
                _classCallCheck(this, Component_DataScrollNav);

                _get(Object.getPrototypeOf(Component_DataScrollNav.prototype), "constructor", this).call(this, el, jQuery.extend(true, {
                    "message": "Example Component Message Default"
                }, options), 'component');

                this.initialise();
            }

            _createClass(Component_DataScrollNav, [{
                key: "initialise",
                value: function initialise() {

                    var $elementLink = jQuery('.m-hero.-page');
                    //if (!$elementLink.length) { return; }

                    var $links = $elementLink.find('.m-hero__intro-cta a');
                    $links.each(function () {
                        var $this = jQuery(this);
                        jQuery(this).click(function (e) {
                            //e.preventDefault();
                            var href = jQuery(this).attr('href');
                            var offsetTop = jQuery(href).offset().top;
                            jQuery(window).scrollTo(offsetTop, 10000);
                        });
                    });
                }
            }]);

            return Component_DataScrollNav;
        })(_systemAbstract2["default"]);

        exports["default"] = Component_DataScrollNav;
        module.exports = exports["default"];

		/***/ },
	/* 35 */
	/***/ function(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

        var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

        var _systemAbstract = __webpack_require__(8);

        var _systemAbstract2 = _interopRequireDefault(_systemAbstract);

        var Component_Technology = (function (_Abstract2) {
            _inherits(Component_Technology, _Abstract2);

            function Component_Technology(el, options) {
                _classCallCheck(this, Component_Technology);

                _get(Object.getPrototypeOf(Component_Technology.prototype), "constructor", this).call(this, el, jQuery.extend(true, {
                    "message": "Example Component Message Default"
                }, options), 'component');

                this.slider = this.$el.find('.m-technology__slider');
                this.pointers = this.$el.find('.-with-plus');
                this.flag = false;
                this.timer = null;
                this.initialise();
            }

            _createClass(Component_Technology, [{
                key: "initialise",
                value: function initialise() {
                    this.initialiseListeners();
                    __webpack_require__(10);
                }
            }, {
                key: "initialiseListeners",
                value: function initialiseListeners() {
                    var _this = this;

                    this.$el.on('click', '.m-technology__clickpoints .-with-plus', function (e) {
                        return _this.onPointClick(e);
                    });
                    this.$el.on('click', '.m-technology__close', function (e) {
                        return _this.onCloseSlider(e);
                    });
                }
            }, {
                key: "onPointClick",
                value: function onPointClick(e) {
                    e.preventDefault();
                    var content = e.currentTarget.attributes['data-point'].nodeValue;
                    var bg = e.currentTarget.attributes['data-bg'].nodeValue;

                    if (jQuery('body').hasClass('mobile')) {
                        jQuery('.app-left-right-flex').hide();
                    }

                    this.showSlider(content, bg);
                    this.highlightPointer(e.currentTarget);

                    jQuery(this.pointers).removeClass('-active');
                    jQuery(e.currentTarget).addClass('-active');
                }
            }, {
                key: "highlightPointer",
                value: function highlightPointer(target) {}
            }, {
                key: "showSlider",
                value: function showSlider(_content, _bg) {
                    var $this = this;
                    //jQuery($this.slider).addClass("-is-opened");
                    $this.slider.find('.-content').removeClass('-show');
                    $this.slider.find('.-content.' + _content).addClass('-show');
                    jQuery(window).scrollTo('#technology');
                    if (jQuery('body').hasClass('mobile')) {
                        //jQuery('html').addClass('no-scroll');
                        this.slider.css('background-image', 'url(' + _bg + ')');
                        jQuery(this.slider).fadeIn();
                        this.slider.addClass('-visible');
                    } else {
                        jQuery($this.slider).css('left', '0');
                    }
                }
            }, {
                key: "onCloseSlider",
                value: function onCloseSlider(e) {

                    //jQuery(this.slider).removeClass("-is-opened");
                    jQuery(this.pointers).removeClass("-active");
                    if (jQuery('body').hasClass('mobile')) {
                        jQuery('html').removeClass('no-scroll');
                        jQuery(window).scrollTo('#technology');
                        jQuery(this.slider).fadeOut();
                    } else {
                        jQuery(this.slider).css('left', '-25%');
                    }

                    if (jQuery('body').hasClass('mobile')) {
                        jQuery('.app-left-right-flex').css('display', 'flex');
                    }
                }
            }]);

            return Component_Technology;
        })(_systemAbstract2["default"]);

        exports["default"] = Component_Technology;
        module.exports = exports["default"];

		/***/ }
]);
//# sourceMappingURL=1.1.js.map