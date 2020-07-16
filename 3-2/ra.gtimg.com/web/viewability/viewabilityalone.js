;// 对IntersectionObserver的封装
(function(window, document) {
	// console.log(1);
	// console.log(window.IntersectionObserverEntry.prototype);
	if ("IntersectionObserver" in window
			&& "IntersectionObserverEntry" in window
			&& "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
		return;
	}
	var docElement = document.documentElement;
	var registry = [];
	function IntersectionObserverEntry(entry) {
		this.time = entry.time;
		this.rootBounds = entry.rootBounds;
		this.boundingClientRect = entry.boundingClientRect;
		this.intersectionRect = entry.intersectionRect;
		this.target = entry.target;
		var targetRect = this.boundingClientRect;
		var targetArea = targetRect.width * targetRect.height;
		var intersectionRect = this.intersectionRect;
		var intersectionArea = intersectionRect.width * intersectionRect.height;
		this.intersectionRatio = targetArea ? (intersectionArea / targetArea) : 0;
	}
	function IntersectionObserver(callback, opt_options) {
		var options = opt_options || {};
		if (typeof callback != "function") {
			throw new Error("callback must be a function");
		}
		if (options.root && options.root.nodeType != 1) {
			throw new Error("root must be an Element");
		}
		this._checkForIntersections = throttle(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);
		this._callback = callback;
		this._observationTargets = [];
		this._queuedEntries = [];
		this._rootMarginValues = this._parseRootMargin(options.rootMargin);
		this.thresholds = this._initThresholds(options.threshold);
		this.root = options.root || null;
		this.rootMargin = this._rootMarginValues.map(function(margin) {
			return margin.value + margin.unit;
		}).join(" ");
	}
  IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;
  IntersectionObserver.prototype.POLL_INTERVAL = null;
	IntersectionObserver.prototype.observe = function(target) {
		if (this._observationTargets.some(function(item) {
			return item.element == target;
		})) {
			return;
		}
		if (!(target && target.nodeType == 1)) {
			throw new Error("target must be an Element");
		}
		this._registerInstance();
		this._observationTargets.push({
			element : target,
			entry : null
		});
		this._monitorIntersections();
	};
	IntersectionObserver.prototype.unobserve = function(target) {
		this._observationTargets = this._observationTargets.filter(function(
				item) {
			return item.element != target;
		});
		if (!this._observationTargets.length) {
			this._unmonitorIntersections();
			this._unregisterInstance();
		}
	};
	IntersectionObserver.prototype.disconnect = function() {
		this._observationTargets = [];
		this._unmonitorIntersections();
		this._unregisterInstance();
	};
	IntersectionObserver.prototype.takeRecords = function() {
		var records = this._queuedEntries.slice();
		this._queuedEntries = [];
		return records;
	};
	IntersectionObserver.prototype._initThresholds = function(opt_threshold) {
		var threshold = opt_threshold || [ 0 ];
		if (!Array.isArray(threshold)) {
			threshold = [ threshold ];
		}
		return threshold
				.sort()
				.filter(
						function(t, i, a) {
							if (typeof t != "number" || isNaN(t) || t < 0
									|| t > 1) {
								throw new Error(
										"threshold must be a number between 0 and 1 inclusively");
							}
							return t !== a[i - 1];
						});
	};
	IntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {
		var marginString = opt_rootMargin || "0px";
		var margins = marginString
				.split(/\s+/)
				.map(
						function(margin) {
							var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
							if (!parts) {
								throw new Error(
										"rootMargin must be specified in pixels or percent");
							}
							return {
								value : parseFloat(parts[1]),
								unit : parts[2]
							};
						});
		margins[1] = margins[1] || margins[0];
		margins[2] = margins[2] || margins[0];
		margins[3] = margins[3] || margins[1];
		return margins;
	};
	IntersectionObserver.prototype._monitorIntersections = function() {
		if (!this._monitoringIntersections) {
			this._monitoringIntersections = true;
			this._checkForIntersections();
			if (this.POLL_INTERVAL) {
				this._monitoringInterval = setInterval(
						this._checkForIntersections, this.POLL_INTERVAL);
			} else {
				addEvent(window, "resize", this._checkForIntersections, true);
				addEvent(document, "scroll", this._checkForIntersections, true);
				if ("MutationObserver" in window) {
					this._domObserver = new MutationObserver(
							this._checkForIntersections);
					this._domObserver.observe(document, {
						attributes : true,
						childList : true,
						characterData : true,
						subtree : true
					});
				}
			}
		}
	};
	IntersectionObserver.prototype._unmonitorIntersections = function() {
		if (this._monitoringIntersections) {
			this._monitoringIntersections = false;
			clearInterval(this._monitoringInterval);
			this._monitoringInterval = null;
			removeEvent(window, "resize", this._checkForIntersections, true);
			removeEvent(document, "scroll", this._checkForIntersections, true);
			if (this._domObserver) {
				this._domObserver.disconnect();
				this._domObserver = null;
			}
		}
	};
	IntersectionObserver.prototype._checkForIntersections = function() {
		var rootIsInDom = this._rootIsInDom();
		var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();
		this._observationTargets.forEach(function(item) {
			var target = item.element;
			var targetRect = getBoundingClientRect(target);
			var rootContainsTarget = this._rootContainsTarget(target);
			var oldEntry = item.entry;
			var newEntry = item.entry = new IntersectionObserverEntry({
				time : now(),
				target : target,
				boundingClientRect : targetRect,
				rootBounds : rootRect,
				intersectionRect : (rootIsInDom && rootContainsTarget) ? this
						._computeTargetAndRootIntersection(target, rootRect)
						: getEmptyRect()
			});
			if (rootIsInDom && rootContainsTarget) {
				if (this._hasCrossedThreshold(oldEntry, newEntry)) {
					this._queuedEntries.push(newEntry);
				}
			} else {
				if (oldEntry && hasIntersection(oldEntry.intersectionRect)) {
					this._queuedEntries.push(newEntry);
				}
			}
		}, this);
		if (this._queuedEntries.length) {
			this._callback(this.takeRecords(), this);
		}
	};
	IntersectionObserver.prototype._computeTargetAndRootIntersection = function(
			target, rootRect) {
		var targetRect = getBoundingClientRect(target);
		var intersectionRect = targetRect;
		var parent = target.parentNode;
		var atRoot = false;
		while (!atRoot) {
			var parentRect = null;
			if (parent == this.root || parent.nodeType != 1) {
				atRoot = true;
				parentRect = rootRect;
			} else {
				var style = window.getComputedStyle ? window
						.getComputedStyle(parent) : parent.currentStyle;
				if (style.overflow != "visible") {
					parentRect = getBoundingClientRect(parent);
				}
			}
			if (parentRect) {
				intersectionRect = computeRectIntersection(parentRect,
						intersectionRect);
				if (!hasIntersection(intersectionRect)) {
					break;
				}
			}
			parent = parent.parentNode;
		}
		return intersectionRect;
	};
	IntersectionObserver.prototype._getRootRect = function() {
		var rootRect;
		if (this.root) {
			rootRect = getBoundingClientRect(this.root);
		} else {
			var html = document.documentElement;
			var body = document.body;
			rootRect = {
				top : 0,
				left : 0,
				right : html.clientWidth || body.clientWidth,
				width : html.clientWidth || body.clientWidth,
				bottom : html.clientHeight || body.clientHeight,
				height : html.clientHeight || body.clientHeight
			};
		}
		return this._expandRectByRootMargin(rootRect);
	};
	IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
		var margins = this._rootMarginValues.map(function(margin, i) {
			return margin.unit == "px" ? margin.value : margin.value
					* (i % 2 ? rect.width : rect.height) / 100;
		});
		var newRect = {
			top : rect.top - margins[0],
			right : rect.right + margins[1],
			bottom : rect.bottom + margins[2],
			left : rect.left - margins[3]
		};
		newRect.width = newRect.right - newRect.left;
		newRect.height = newRect.bottom - newRect.top;
		return newRect;
	};
	IntersectionObserver.prototype._hasCrossedThreshold = function(oldEntry,
			newEntry) {
		var oldRatio = oldEntry && hasIntersection(oldEntry.intersectionRect) ? oldEntry.intersectionRatio || 0
				: -1;
		var newRatio = hasIntersection(newEntry.intersectionRect) ? newEntry.intersectionRatio || 0
				: -1;
		if (oldRatio === newRatio) {
			return;
		}
		for (var i = 0; i < this.thresholds.length; i++) {
			var threshold = this.thresholds[i];
			if (threshold == oldRatio || threshold == newRatio
					|| threshold < oldRatio !== threshold < newRatio) {
				return true;
			}
		}
	};
	IntersectionObserver.prototype._rootIsInDom = function() {
		return !this.root || docElement.contains(this.root);
	};
	IntersectionObserver.prototype._rootContainsTarget = function(target) {
		return (this.root || docElement).contains(target);
	};
	IntersectionObserver.prototype._registerInstance = function() {
		if (registry.indexOf(this) < 0) {
			registry.push(this);
		}
	};
	IntersectionObserver.prototype._unregisterInstance = function() {
		var index = registry.indexOf(this);
		if (index != -1) {
			registry.splice(index, 1);
		}
	};
	function now() {
		return window.performance && performance.now && performance.now();
	}
	function throttle(fn, timeout) {
		var timer = null;
		return function() {
			if (!timer) {
				timer = setTimeout(function() {
					fn();
					timer = null;
				}, timeout);
			}
		};
	}
	function addEvent(node, event, fn, opt_useCapture) {
		if (typeof node.addEventListener == "function") {
			node.addEventListener(event, fn, opt_useCapture || false);
		} else {
			if (typeof node.attachEvent == "function") {
				node.attachEvent("on" + event, fn);
			}
		}
	}
	function removeEvent(node, event, fn, opt_useCapture) {
		if (typeof node.removeEventListener == "function") {
			node.removeEventListener(event, fn, opt_useCapture || false);
		} else {
			if (typeof node.detatchEvent == "function") {
				node.detatchEvent("on" + event, fn);
			}
		}
	}
	function computeRectIntersection(rect1, rect2) {
		var top = Math.max(rect1.top, rect2.top);
		var bottom = Math.min(rect1.bottom, rect2.bottom);
		var left = Math.max(rect1.left, rect2.left);
		var right = Math.min(rect1.right, rect2.right);
		var width = right - left;
		var height = bottom - top;
		return (width < 0 || height < 0) ? getEmptyRect() : {
			top : top,
			bottom : bottom,
			left : left,
			right : right,
			width : width,
			height : height
		};
	}
	function hasIntersection(rect) {
		return rect.top > 0 || rect.bottom > 0 || rect.left > 0
				|| rect.right > 0;
	}
	function getBoundingClientRect(el) {
		var rect = el.getBoundingClientRect();
		if (!rect) {
			return;
		}
		if (!rect.width || !rect.height) {
			rect = {
				top : rect.top,
				right : rect.right,
				bottom : rect.bottom,
				left : rect.left,
				width : rect.right - rect.left,
				height : rect.bottom - rect.top
			};
		}
		return rect;
	}
	function getEmptyRect() {
		return {
			top : 0,
			bottom : 0,
			left : 0,
			right : 0,
			width : 0,
			height : 0
		};
	}
	window.IntersectionObserver = IntersectionObserver;
	window.IntersectionObserverEntry = IntersectionObserverEntry;
}(window, document));
function OVVIntersectionObserverViewabilityMonitor() {
	this.intersectionObserverSupported = !!window.IntersectionObserver;
	var _duration = -1, _percentVieawable = 0, thresholds = [ 0, 0.1, 0.2,
			0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1 ], observer;
	if (this.intersectionObserverSupported) {
		observer = new IntersectionObserver(thresholdCallback, {
			threshold : thresholds
		});
		if (typeof window.addEventListener != "function"
				&& typeof window.attachEvent != "function") {
			observer.POLL_INTERVAL = 100;
		}
	}
	this.getPercentViewable = function() {
		return _percentVieawable;
	};
	this.getDuration = function() {
		return _duration;
	};
	this.beginMonitoring = function(element) {
		if (!!element) {
			// console.log(element)
			observer.observe(element);
		}
	};
	this.disconnect = function() {
		observer.disconnect();
	};
	function thresholdCallback(entries) {
		// console.log(entries[0])
		if (entries && entries.length
				&& entries[0].intersectionRatio !== "undefined") {
			_percentVieawable = entries[0].intersectionRatio * 100;
			_duration = entries[0].time;
		}
	}
}

if (!Array.prototype.forEach) {
	Array.prototype.forEach = function(callback, thisArg) {
		var T, k;
		if (this == null) {
			throw new TypeError(" this is null or not defined");
		}
		var O = Object(this);
		var len = O.length >>> 0;
		if (typeof callback !== "function") {
			throw new TypeError(callback + " is not a function");
		}
		if (arguments.length > 1) {
			T = thisArg;
		}
		k = 0;
		while (k < len) {
			var kValue;
			if (k in O) {
				kValue = O[k];
				callback.call(T, kValue, k, O);
			}
			k++;
		}
	};
}
if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function(searchElement, fromIndex) {
		var k;
		if (this == null) {
			throw new TypeError('"this" is null or not defined');
		}
		var O = Object(this);
		var len = O.length >>> 0;
		if (len === 0) {
			return -1;
		}
		var n = +fromIndex || 0;
		if (Math.abs(n) === Infinity) {
			n = 0;
		}
		if (n >= len) {
			return -1;
		}
		k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
		while (k < len) {
			if (k in O && O[k] === searchElement) {
				return k;
			}
			k++;
		}
		return -1;
	};
}
if (!Array.prototype.some) {
	Array.prototype.some = function(fun) {
		if (this === void 0 || this === null) {
			throw new TypeError();
		}
		var t = Object(this);
		var len = t.length >>> 0;
		if (typeof fun !== "function") {
			throw new TypeError();
		}
		var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
		for (var i = 0; i < len; i++) {
			if (i in t && fun.call(thisArg, t[i], i, t)) {
				return true;
			}
		}
		return false;
	};
}
if (!Array.prototype.filter) {
	Array.prototype.filter = function(fun) {
		if (this === void 0 || this === null) {
			throw new TypeError();
		}
		var t = Object(this);
		var len = t.length >>> 0;
		if (typeof fun !== "function") {
			throw new TypeError();
		}
		var res = [];
		var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
		for (var i = 0; i < len; i++) {
			if (i in t) {
				var val = t[i];
				if (fun.call(thisArg, val, i, t)) {
					res.push(val);
				}
			}
		}
		return res;
	};
}
if (!Array.isArray) {
	Array.isArray = function(arg) {
		return Object.prototype.toString.call(arg) === "[object Array]";
	};
}
if (!Array.prototype.map) {
	Array.prototype.map = function(callback, thisArg) {
		var T, A, k;
		if (this == null) {
			throw new TypeError(" this is null or not defined");
		}
		var O = Object(this);
		var len = O.length >>> 0;
		if (Object.prototype.toString.call(callback) != "[object Function]") {
			throw new TypeError(callback + " is not a function");
		}
		if (thisArg) {
			T = thisArg;
		}
		A = new Array(len);
		k = 0;
		while (k < len) {
			var kValue, mappedValue;
			if (k in O) {
				kValue = O[k];
				mappedValue = callback.call(T, kValue, k, O);
				A[k] = mappedValue;
			}
			k++;
		}
		return A;
	};
}
if (!Function.prototype.bind) {
	Function.prototype.bind = function(oThis) {
		if (typeof this !== "function") {
			throw new TypeError(
					"Function.prototype.bind - what is trying to be bound is not callable");
		}
		var aArgs = Array.prototype.slice.call(arguments, 1), fToBind = this, fNOP = function() {
		}, fBound = function() {
			return fToBind.apply(this instanceof fNOP ? this : oThis || this,
					aArgs.concat(Array.prototype.slice.call(arguments)));
		};
		fNOP.prototype = this.prototype;
		fBound.prototype = new fNOP();
		return fBound;
	};
}

/**
 * 获取浏览器名称及版本
 */
var crystalbrowsersniffer = function(uastr) {
	if(!uastr) return "unknown";
	var uastr = uastr.toLowerCase();
	var pos = -1;
	var ret = uastr.match(/(?:metasr.\d*|qqbrowser.\d*|maxthon.\d*|theworld|lbbrowser|firefox.\d*|opera.\d*|bidubrowser.\d*)/);
	if (ret !== null) {
		return ret[0].replace(" ", "").replace("/", "");
	}
	if(uastr.indexOf('android') > -1) {
		return 'android';
	} else if(uastr.indexOf('iphone') > -1 ) {
		return 'iphone';
	} else if(uastr.indexOf('ipad') > -1) {
		return 'ipad';
	}
	if ((pos = uastr.indexOf("chrome")) > -1) {
		return "chrome" + parseInt(uastr.substr(pos + 7, 4));
	} else if ((pos = uastr.indexOf("safari")) > -1) {
		return "safari";
	} else {
		var mpos = uastr.indexOf("msie");
		if (mpos > -1) {
			return "ie" + parseInt(uastr.substr(mpos + 5, 2));
		} else {
			var tpos = uastr.indexOf("trident");
			if (tpos > -1) {
				var rvpos = uastr.indexOf("rv:");
				if (rvpos > -1) {
					return "ie" + parseInt(uastr.substr(rvpos + 3, 2));
				}
			}
		}
	}
	return uastr;
};

function crystalViewCheck() {
		this.percentObscured = 0;
		this.percentViewable = -1;
		this.viewabilityState = "";
		this.vb = 0;
		this.technique = "";
		this.focus = null;
		this.servingScenario = "";
		this.duration = -1;
		this.step = 0;
	}
	crystalViewCheck.UNMEASURABLE = "unmeasurable";
	crystalViewCheck.VIEWABLE = "viewable";
	crystalViewCheck.UNVIEWABLE = "unviewable";
	crystalViewCheck.INTERSECTIONOBSERVER = "intersectionobserver";
	crystalViewCheck.CSS_INVISIBILITY = "css_invisibility";
	crystalViewCheck.DOM_OBSCURING = "dom_obscuring";

function ViewabilityCheck(config) {
		var urlTemplate = config.reportItemUrl;
    // 是否支持区域检测
		this.intersectionObserverSupported = !!window.IntersectionObserver;
		this.version = "2.00";
		this._surl = urlTemplate;
		this.uniqueID = (Math.floor(Math.random() * 100000000) + '0' + new Date()
				.getTime().toString());
		this.servingScenarioEnum = {
			OnPage : 1,
			SameDomainIframe : 2,
			CrossDomainIframe : 3
		};
    // 判断节点位置
		function getServingScenarioType(servingScenarioEnum) {
			try {
				if (window.top == window) {
					return servingScenarioEnum.OnPage;
				}
				var curWin = window;
				var level = 0;
				while (curWin.parent != curWin && level < 100) {
					if (curWin.parent.document.domain != curWin.document.domain) {
						return servingScenarioEnum.CrossDomainIframe;
					}
					curWin = curWin.parent;
          level++;
				}
				return servingScenarioEnum.SameDomainIframe;
			} catch (e) {
			}
			return servingScenarioEnum.CrossDomainIframe;
		}
    // 服务场景
		this.servingScenario = getServingScenarioType(this.servingScenarioEnum);
		this.IN_IFRAME = (this.servingScenario !== this.servingScenarioEnum.OnPage);
		this.IN_XD_IFRAME = (this.servingScenario === this.servingScenarioEnum.CrossDomainIframe);
		this.args = {};
		this.cElemt = null;
		var intersectionObserverMonitor;
    // 检测程序入口
		this.checkViewability = function(elem, statusCallback, ivC, ivT, timeOut) {
			var that = this;
			that.error = '';
			that.focusAttr = '';
			that.focusValue = '';
			that.hiddenAttr = '';
			that.hiddenValue = '';
			that.vbState = '';
			that.initRTB(elem);
			var cback = statusCallback ? statusCallback : that.rcallback;
			var intervalCount = ivC ? ivC : 20;
			var intervalTime = ivT ? ivT : 100;
			var pressTimeout = timeOut ? timeOut : 15000;
			if (that.DEBUG_MODE) {
				console.log("intervalTime: " + intervalTime
						+ ", intervalCount: " + intervalCount);
			}
			var count = 0;
			var seq_n = 0;
			var seq = 0;
			var timer = setInterval(
					function() {
						var check = that.checkViewable();
						if ( (check.viewabilityState == "viewable" && check.focus) || crystalViewModule.viewablityFlashFullscreen) {
							count++;
						} else {
							count = 0;
						}
						check.count = seq;
						if (count >= intervalCount && !that.DEBUG_MODE) {
							check.vb = 1;
							cback(check, that);
							clearInterval(timer);
							if (that.intersectionObserverSupported) {
								intersectionObserverMonitor.disconnect();
							}
						}
						// 参考价值不大，暂时不用了
						// 为了测试2秒之内的衰减，增加0.5,1,1.5三个阶段的上报
						// if (count === 5  || count === 10 || count === 15) {
						// 	check.step = count / 5;
						// 	cback(check, that);
						// }
						if (seq_n == 0 && !that.DEBUG_MODE) {
							cback(check, that);
							seq++;
						} else {
							if (that.DEBUG_MODE
									&& (seq_n * intervalTime) / 1000 > seq) {
								cback(check, that);
								seq++;
							}
						}
						if ((seq_n * intervalTime) > pressTimeout) {
							clearInterval(timer);
							if (that.intersectionObserverSupported) {
								intersectionObserverMonitor.disconnect();
							}
						}
						seq_n++;
						if(seq_n === 20) {
							check.step = 4;
							cback(check, that);
						}
					}, intervalTime);
		};
		this.rcallback = function(check, rtbObj) {
			var that = rtbObj;
			var args = {};
			args.id = that.uniqueID;
			args.seq = check.count;  // 0-pv 1-可见
			args.fcs = check.focus ? 1 : 0;  // 0-非可见场景 1-可见
			args.ifr = check.servingScenario;  // 是否在iframe中
			args.ver = that.version; // 版本号
			args.dt = Math.round(check.duration);  // 从pv到可见时长
			args.vb = check.vb;  // 是否为可见场景
			args.step = check.step;
      // rta_sr 屏幕分辨率
			var targs = that.mergeParam(args, that.args);
			var params = that.jsonToQuery(targs);
			// 附加的domain及url参数
			that._rtb_send(targs);
		};
		this.mergeParam = function(oSource, oParams) {
			var key, obj = {};
			oParams = oParams || {};
			for (key in oSource) {
				obj[key] = oSource[key];
			}
			for (key in oParams) {
				obj[key] = oParams[key];
			}
			return obj;
		};
		this.jsonToQuery = function(oArgs) {
			var that = this;
			if (oArgs) {
				var _query = [];
				for ( var p in oArgs) {
					_query.push(p + "=" + encodeURIComponent(oArgs[p]));
				}
				if (_query.length) {
					return _query.join("&");
				} else {
					return "";
				}
			}
		};
		this.initRTB = function(elem) {
			var that = this;
			that.cElemt = elem;
			// if (that.DEBUG_MODE) {
			// 	console.log("checkViewability intersectionObserverSupported: "
			// 			+ that.intersectionObserverSupported);
			// }
			if (that.intersectionObserverSupported) {
				intersectionObserverMonitor = new OVVIntersectionObserverViewabilityMonitor();
				intersectionObserverMonitor.beginMonitoring(elem);
			}
			// alert(typeof elem.getBoundingClientRect);
			// IE8 getBoundingClientRect 是object属性
			if(elem && typeof elem.getBoundingClientRect === 'function' || typeof elem.getBoundingClientRect === 'object') {
				var rect = elem.getBoundingClientRect()
			} else {
				var rect = {left:0,top:0,right:0,bottom:0};
			}
			that.args.left = rect.left;
			that.args.top = rect.top;
			that.args.right = rect.right;
			that.args.bottom = rect.bottom;
			// 设置屏幕分辨率
      that.args.sr = screen.availWidth + "x" + screen.availHeight;
		};
		this.checkViewable = function() {
			var that = this;
			var check = new crystalViewCheck();
			check.focus = that.isInFocus();
			check.servingScenario = that.servingScenario;
			// console.log(that.intersectionObserverSupported);
			that.obSupport = that.intersectionObserverSupported;
			if (that.intersectionObserverSupported) {
				that.checkIntersectionObserver(check);
			}
			that.checkCssInvisibility(check, that.cElemt);
			that.checkDomObscuring(check, that.cElemt);
			return check;
		};
		this.checkIntersectionObserver = function(check) {
			check.technique = crystalViewCheck.INTERSECTIONOBSERVER;
			check.percentViewable = intersectionObserverMonitor
					.getPercentViewable();
			check.duration = intersectionObserverMonitor.getDuration();
			check.viewabilityState = check.percentViewable >= 50 ? crystalViewCheck.VIEWABLE
					: crystalViewCheck.UNVIEWABLE;
			this.vbState = check.viewabilityState === crystalViewCheck.VIEWABLE ? 'see' : 'nosee';
		};
		this.checkCssInvisibility = function(check, element) {
			var that = this;
      // console.log(element);
			var visibility = that.getStyle(element, "visibility");
			var display = that.getStyle(element, "display");
			if (visibility == "hidden" || display == "none") {
				check.technique = crystalViewCheck.CSS_INVISIBILITY;
				check.viewabilityState = crystalViewCheck.UNVIEWABLE;
				that.vbState = 'hidden';
				return true;
			}
			return false;
		};
		this.getStyle = function(element, att) {
			if (window.getComputedStyle) {
				var style = window.getComputedStyle(element, null);
				return style.getPropertyValue(att);
			} else {
				var style = element.currentStyle;
				return style.getAttribute(att);
			}
		};
		this.checkDomObscuring = function(check, player) {
			var that = this;
			var playerRect = player.getBoundingClientRect(),
			maxPercentObscured = 0,
			offset = 12,
			xLeft = playerRect.left	+ offset,
 			xRight = playerRect.right - offset,
			yTop = playerRect.top	+ offset,
 			yBottom = playerRect.bottom - offset,
 			pwidth = playerRect.width ? playerRect.width : playerRect.right - playerRect.left,
			pheight = playerRect.height ? playerRect.height : playerRect.bottom - playerRect.top,
 			xCenter = Math.floor(playerRect.left + pwidth / 2),
 			yCenter = Math.floor(playerRect.top + pheight / 2),
			testPoints = [ {
				x : xLeft,
				y : yTop
			}, {
				x : xCenter,
				y : yTop
			}, {
				x : xRight,
				y : yTop
			}, {
				x : xLeft,
				y : yCenter
			}, {
				x : xCenter,
				y : yCenter
			}, {
				x : xRight,
				y : yCenter
			}, {
				x : xLeft,
				y : yBottom
			}, {
				x : xCenter,
				y : yBottom
			}, {
				x : xRight,
				y : yBottom
			} ];
			var rootElem = document.documentElement;
			for ( var p in testPoints) {
				if (testPoints[p] && testPoints[p].x >= 0
						&& testPoints[p].y >= 0) {
					var elem = document.elementFromPoint(testPoints[p].x,
							testPoints[p].y);
					if (elem != null && elem != player
							&& !player.contains(elem) && rootElem != elem && that.getStyle(elem,'background-image') !== 'none') {
						overlappingArea = that.overlapping(playerRect, elem
								.getBoundingClientRect());
						if (overlappingArea > 0) {
							check.percentObscured = 100 * that.overlapping(
									playerRect, elem.getBoundingClientRect());
							if (check.percentObscured > 50) {
								check.technique = crystalViewCheck.DOM_OBSCURING;
								check.viewabilityState = crystalViewCheck.UNVIEWABLE;
								that.vbState = 'overlap';
								return true;
							}
							if (maxPercentObscured > check.percentObscured) {
								check.percentObscured = maxPercentObscured;
							} else {
								maxPercentObscured = check.percentObscured;
							}
						}
					}
					if (that.DEBUG_MODE && elem != null) {
					}
				} else {
					if (that.DEBUG_MODE) {
					}
				}
			}
			return false;
		};
		this.overlapping = function(playerRect, elem) {
			var pwidth = playerRect.width ? playerRect.width : playerRect.right
					- playerRect.left;
			var pheight = playerRect.height ? playerRect.height
					: playerRect.bottom - playerRect.top;
			var playerArea = pwidth * pheight;
			var x_overlap = Math.max(0, Math.min(playerRect.right, elem.right)
					- Math.max(playerRect.left, elem.left));
			var y_overlap = Math.max(0, Math
					.min(playerRect.bottom, elem.bottom)
					- Math.max(playerRect.top, elem.top));
			return (x_overlap * y_overlap) / playerArea;
		};
		this.isInFocus = function() {
			var that = this;
			try {
				that.hiddenAttr = (typeof document.hidden !== 'undefined'? 'T':'F');
				if (document.hidden !== "undefined") {
					that.hiddenValue = document.hidden;
					if (document.hidden === true) {
						return false;
					}
				}
				if (that.IN_XD_IFRAME) {
					that.focusAttr = typeof document.hasFocus !== 'undefined' ? 'T':'F';
					that.focusValue = 'frame'+document.hasFocus();
					return document.hasFocus();
				}
				if (window.top.document.hasFocus) {
					that.focusAttr = typeof window.top.document.hasFocus !== 'undefined' ? 'T':'F';
					that.focusValue = 'notframe'+window.top.document.hasFocus();
					return window.top.document.hasFocus();
				}
			} catch (e) {
				that.error = e.message;
				if (that.DEBUG_MODE) {
					console.log(e);
				}
			}
			return false;
		};
		this._rtb_send = function(params) {
			var that = this;
			for(var i=0;i<that._surl.length;i++) {
				if(that._surl[i]) {
					if(that._surl[i].indexOf('secure-chn.imrworldwide.com') > -1 && params.seq===0) {
						// 此种情况不上报
					} else if(that._surl[i].indexOf('dp3.qq.com') === -1 && params.step !== 0) {
						// 非dp3不上报0.5,1,1.5秒上报逻辑
					} else {
						(function() {
							var el = document.createElement("IMG");
							el.width = "0";
							el.height = "0";
							el.style.visibility = "hidden";
							el.style.position = "absolute";
							el.style.top = "0";
							var node = null;
							try {
								node = document.body.firstChild;
							} catch (e) {
							}
							if (node) {
								node.parentNode.insertBefore(el, node);
							} else {
								document.body.appendChild(el);
							}
							var thissrc = that._surl[i]
								.replace('{view_id}',params.id)
								.replace('{view_seq}',params.seq)
								.replace('{view_fcs}',params.fcs)
								.replace('{view_ifr}',params.ifr)
								.replace('{view_ver}',params.ver)
								.replace('{view_dt}',params.dt)
								.replace('{view_vb}',params.vb)
								.replace('{view_sr}',params.sr)
								.replace('{view_timestamp}',(new Date).getTime())
								.replace('__VIEWID__',params.id)
								.replace('__VIEWSEQ__',params.seq)
								.replace('__VIEWFCS__',params.fcs)
								.replace('__VIEWIFR__',params.ifr)
								.replace('__VIEWVER__',params.ver)
								.replace('__VIEWDT__',params.dt)
								.replace('__VIEWVB__',params.vb)
								.replace('__VIEWSR__',params.sr)
								.replace('__TIMESTAMP__',(new Date).getTime())
							if(thissrc.indexOf('dp3.qq.com')>-1) {
								thissrc = thissrc + '&FLASHFULL='+crystalViewModule.viewablityFlashFullscreen+'&UA='+crystalbrowsersniffer(navigator.userAgent)+'&PLATFORM=h5&WIDTH='+(params.right-params.left)+'&HEIGHT='+(params.bottom-params.top)+'&MOUSEMOVE=1&STEP='+params.step+'&DOMAIN='+window.location.host+'&URL='+window.location.href+'&REF='+document.referrer+'&BODYTOP='+document.body.scrollTop+'&OBSUPPORT='+that.obSupport+'&VBSTATE='+that.vbState+'&HIDDENATTR='+that.hiddenAttr+'&HIDDENVALUE='+that.hiddenValue+'&FOCUSATTR='+that.focusAttr+'&FOCUSVALUE='+that.focusValue+'&ERROR='+that.error;
							}
							el.src = thissrc;
							// 过几秒之后移除该节点
							setTimeout(function() {
								el.parentNode.removeChild(el);
							},5000);
						})();
					}
				}
			}
		};
	}

if(typeof crystalViewModule === 'undefined') {
	crystalViewModule = window.crystalViewModule = {};
}
crystalViewModule.viewablityFlashFullscreen = null;
crystalViewModule.startviewability = function(viewconfig) {
	// 启动move事件侦听

  // 检测次数
  var intervalCount = viewconfig.intc ? viewconfig.intc : 20;
  // 间隔时间 Iab标准
	var intervalTime = viewconfig.intt ? viewconfig.intt : 100;
	var timeout = viewconfig.duration ? viewconfig.duration : 15000;
	var cbk = viewconfig.cbk ? viewconfig.cbk : null;
  var reportUrl = viewconfig.reportItemUrl;
	if(typeof reportUrl.length !== 'undefined') {
		if(reportUrl.length === 1) {
			if(!reportUrl[0]) {
				return;
			}
		}
	}
	var objId = viewconfig.objectID;
  var oid = viewconfig.oid;
  var duration = parseInt(timeout,10);
  var retry = viewconfig.retry;
	var elem = null;
	var bypassFlash = false;
	if(objId) {
		elem = document.getElementById(objId);
		if(elem) bypassFlash = true;	// 根据objectID可以找到播放器节点视为走了flash播放器插件
	}
	if(!elem) {
		if(typeof objId === "object" && typeof objId.length !== 'undefined' && objId.length > 0) {
			elem = objId[0];
		} else {
			elem = document.querySelector(objId);
		}
	}
	if(!elem) {
		elem = document.querySelector('.txp_player');
	}
	if(!elem) {
		elem = document.querySelector('.txp_video_container');
	}
	if(!elem) {
		elem = document.querySelector('#video_container_body');
	}
	if(!elem) return;
	// 侦听flash的全屏事件
	if(bypassFlash) {
		Txplayer && Txplayer.dataset._instance[objId].on('windowFullscreenChange',function(a){
			crystalViewModule.viewablityFlashFullscreen = a;
		});
	}
  // console.log(elem);
  var observer = new ViewabilityCheck(viewconfig);
  var callback = function(check, that) {
    // console.log(check.count);
    // console.log(check.duration, duration);
    // if(check.duration > duration) {
      // console.log('前帖已播完，无须上报');
    // } else {
      that.rcallback(check, that);
    // }
  }
  observer.checkViewability(elem, callback, intervalCount, intervalTime, duration);
}
