try {
	document.domain = "qq.com"
} catch(e$$5) {}
String.prototype.hasString = function(e) {
	if (typeof e == "object") {
		for (var d = 0, f = e.length; d < f; d++) {
			if (!this.hasString(e[d])) {
				return false
			}
		}
		return true
	} else {
		if (this.indexOf(e) != -1) {
			return true
		}
	}
};
SUI = window.SUI || {
	getScript: function(f, e, h) {
		var g = SUI.DC("script");
		if (e) {
			if (SUI.B.ie) {
				g.onreadystatechange = function() {
					if (g.readyState == "loaded" || g.readyState == "complete") {
						e()
					}
				}
			} else {
				g.onload = e
			}
		}
		h && SUI.A(g, "charset", h);
		SUI.A(g, "type", "text/javascript");
		SUI.A(g, "src", f);
		SUI.GT(document, "head")[0].appendChild(g)
	},
	cookie: function(g, f, j, i) {
		if (f) {
			var h = "";
			if (j) {
				h = new Date;
				h.setTime(h.getTime() + j * 86400000);
				h = "; expires=" + h.toGMTString()
			}
			document.cookie = g + "=" + f + h + "; path=/" + (i ? ";domain=" + i: "")
		} else {
			g += "=";
			f = document.cookie.split(";");
			for (j = 0; j < f.length; j++) {
				for (i = f[j]; i.charAt(0) == " ";) {
					i = i.substring(1, i.length)
				}
				if (i.indexOf(g) == 0) {
					return decodeURIComponent(i.substring(g.length, i.length))
				}
			}
			return null
		}
	},
	getX: function(b) {
		return b.offsetParent ? b.offsetLeft + SUI.getX(b.offsetParent) : b.offsetLeft
	},
	getY: function(b) {
		return b.offsetParent ? b.offsetTop + SUI.getY(b.offsetParent) : b.offsetTop
	},
	width: function(b) {
		return parseInt(b.offsetWidth)
	},
	height: function(b) {
		return parseInt(b.offsetHeight)
	},
	windowWidth: function() {
		var b = document.documentElement;
		return self.innerWidth || b && b.clientWidth || document.body.clientWidth
	},
	windowHeight: function() {
		var b = document.documentElement;
		return self.innerHeight || b && b.clientHeight || document.body.clientHeight
	},
	scrollX: function(f) {
		var e = document.documentElement;
		if (f) {
			var h = f.parentNode,
			g = f.scrollLeft || 0;
			if (f == e) {
				g = SUI.scrollX()
			}
			return h ? g + SUI.scrollX(h) : g
		}
		return self.pageXOffset || e && e.scrollLeft || document.body.scrollLeft
	},
	scrollY: function(f) {
		var e = document.documentElement;
		if (f) {
			var h = f.parentNode,
			g = f.scrollTop || 0;
			if (f == e) {
				g = SUI.scrollY()
			}
			return h ? g + SUI.scrollY(h) : g
		}
		return self.pageYOffset || e && e.scrollTop || document.body.scrollTop
	},
	hide: function(d) {
		if (SUI.isString(d)) {
			d = this.G(d)
		}
		if (d) {
			var c = this.C(d, "display");
			if (c != "none") {
				d.__curDisplay = c
			}
			d.style.display = "none"
		}
	},
	show: function(b) {
		if (SUI.isString(b)) {
			b = this.G(b)
		}
		if (b) {
			b.style.display = b.__curDisplay || ""
		}
	},
	toggle: function(b) {
		if (SUI.isString(b)) {
			b = this.G(b)
		}
		this.C(b, "display") == "none" ? this.show(b) : this.hide(b)
	},
	html: function(e) {
		var d = SUI.DC("div"),
		f = [];
		d.innerHTML = e;
		SUI.each(d.childNodes,
		function(a) {
			f.push(a)
		});
		return f
	},
	A: function(e, d, f) {
		if (f == undefined) {
			return e.getAttribute(d)
		} else {
			f == "" ? e.removeAttribute(d) : e.setAttribute(d, f)
		}
	},
	C: function(e, d, f) {
		if (f == undefined) {
			if (window.getComputedStyle) {
				d = d.replace(/([A-Z])/g, "-$1");
				d = d.toLowerCase();
				return window.getComputedStyle(e, null).getPropertyValue(d)
			} else {
				if (e.currentStyle) {
					if (d == "opacity") {
						return e.style.filter.indexOf("opacity=") >= 0 ? parseFloat(e.style.filter.match(/opacity=([^)]*)/)[1]) / 100: "1"
					}
					return e.currentStyle[d]
				}
			}
		} else {
			if (d == "opacity" && SUI.B.ie) {
				e.style.filter = (e.filter || "").replace(/alpha\([^)]*\)/, "") + "alpha(opacity=" + f * 100 + ")"
			} else {
				e.style[d] = f
			}
		}
	},
	DC: function(b) {
		return document.createElement(b)
	},
	G: function(b) {
		return document.getElementById(b)
	},
	GT: function(d, c) {
		return d.getElementsByTagName(c)
	},
	GC: function() {
		function r(m, d) {
			if (!d) {
				d = m;
				m = document
			}
			m = m || document;
			if (!/^[\w\-_#]+$/.test(d) && m.querySelectorAll) {
				return q(m.querySelectorAll(d))
			}
			if (d.indexOf(",") > -1) {
				for (var f = d.split(/,/g), p = [], e = 0, l = f.length; e < l; ++e) {
					p = p.concat(r(m, f[e]))
				}
				return g(p)
			}
			f = d.match(n);
			l = f.pop();
			p = (l.match(i) || h)[1];
			var c = !p && (l.match(k) || h)[1];
			e = l.split(".").slice(2);
			l = !p && (l.match(j) || h)[1];
			if (c && !l && m.getElementsByClassName) {
				l = q(m.getElementsByClassName(c))
			} else {
				l = !p && q(m.getElementsByTagName(l || "*"));
				if (c) {
					c = RegExp("(^|\\s)" + c + "(\\s|$)");
					var a = -1,
					v,
					u = -1,
					b = [];
					for (e = e || ""; v = l[++a];) {
						if (c.test(v.className) && v.className.hasString(e)) {
							b[++u] = v
						}
					}
					l = b
				}
				if (p) {
					return (f = m.getElementById(p)) ? [f] : []
				}
			}
			return f[0] && l[0] ? o(f, l) : l
		}
		function q(c) {
			try {
				return Array.prototype.slice.call(c)
			} catch(e) {
				for (var b = [], d = 0, a = c.length; d < a; ++d) {
					b[d] = c[d]
				}
				return b
			}
		}
		function o(m, d, f) {
			var p = m.pop();
			if (p === ">") {
				return o(m, d, true)
			}
			var e = [],
			l = -1,
			c = (p.match(i) || h)[1],
			a = !c && (p.match(k) || h)[1];
			p = !c && (p.match(j) || h)[1];
			var z = -1,
			w,
			b,
			v;
			for (p = p && p.toLowerCase(); w = d[++z];) {
				b = w.parentNode;
				do {
					v = (v = (v = !p || p === "*" || p === b.nodeName.toLowerCase()) && (!c || b.id === c)) && (!a || RegExp("(^|\\s)" + a + "(\\s|$)").test(b.className));
					if (f || v) {
						break
					}
				}
				while (b = b.parentNode);
				if (v) {
					e[++l] = w
				}
			}
			return m[0] && e[0] ? o(m, e) : e
		}
		var n = /(?:[\w\-\\.#]+)+(?:\[\w+?=([\'"])?(?:\\\1|.)+?\1\])?|\*|>/ig,
		k = /^(?:[\w\-_]+)?\.([\w\-_]+)/,
		i = /^(?:[\w\-_]+)?#([\w\-_]+)/,
		j = /^([\w\*\-_]+)/,
		h = [null, null],
		g = function() {
			var a = +new Date,
			b = function() {
				var c = 1;
				return function(f) {
					var d = f[a],
					e = c++;
					if (!d) {
						f[a] = e;
						return true
					}
					return false
				}
			} ();
			return function(d) {
				for (var l = d.length, c = [], e = -1, m = 0, f; m < l; ++m) {
					f = d[m];
					if (b(f)) {
						c[++e] = f
					}
				}
				a += 1;
				return c
			}
		} ();
		return r
	} (),
	E: function(b) {
		if (b && b.clone) {
			return b
		}
		b = window.event || b;
		return {
			clone: true,
			stop: function() {
				if (b && b.stopPropagation) {
					b.stopPropagation()
				} else {
					b.cancelBubble = true
				}
			},
			prevent: function() {
				if (b && b.preventDefault) {
					b.preventDefault()
				} else {
					b.returnValue = false
				}
			},
			target: b.target || b.srcElement,
			x: b.clientX || b.pageX,
			y: b.clientY || b.pageY,
			button: b.button,
			key: b.keyCode,
			shift: b.shiftKey,
			alt: b.altKey,
			ctrl: b.ctrlKey,
			type: b.type,
			wheel: b.wheelDelta / 120 || -b.detail / 3
		}
	},
	EA: function(a, b, c, d) {
		if (SUI.isString(a)) {
			var e = c;
			c = function() {
				eval(e)
			}
		}
		if (a.addEventListener) {
			if (b == "mousewheel") {
				b = "DOMMouseScroll"
			}
			a.addEventListener(b, c, d);
			return true
		} else {
			return a.attachEvent ? a.attachEvent("on" + b, c) : false
		}
	},
	isUndefined: function(b) {
		return typeof b == "undefined"
	},
	isFunction: function(b) {
		return this.getType(b) == "Function"
	},
	isString: function(b) {
		return this.getType(b) == "String"
	},
	getType: function(b) {
		return Object.prototype.toString.call(b).slice(8, -1)
	},
	trim: function(b) {
		return b.replace(/^\s+|\s+$/g, "")
	},
	each: function(f, e) {
		if (SUI.isUndefined(f[0])) {
			for (var h in f) {
				SUI.isFunction(f[h]) || e(h, f[h])
			}
		} else {
			h = 0;
			for (var g = f.length; h < g; h++) {
				SUI.isFunction(f[h]) || e(f[h], h)
			}
		}
	},
	ready: function(b) {
		if (SUI.ready.done) {
			return b()
		}
		if (SUI.isReady.done) {
			SUI.readyDo.push(b)
		} else {
			SUI.readyDo = [b];
			SUI.isReady()
		}
	},
	readyDo: [],
	isReady: function() {
		if (!SUI.isReady.done) {
			SUI.isReady.done = true;
			if (document.addEventListener) {
				document.addEventListener("DOMContentLoaded",
				function() {
					document.removeEventListener("DOMContentLoaded", arguments.callee, false);
					SUI.onReady()
				},
				false)
			} else {
				if (document.attachEvent) {
					var b = top != self;
					if (b) {
						document.attachEvent("onreadystatechange",
						function() {
							if (document.readyState === "complete") {
								document.detachEvent("onreadystatechange", arguments.callee);
								SUI.onReady()
							}
						})
					} else {
						document.documentElement.doScroll && !b &&
						function() {
							if (!SUI.ready.done) {
								try {
									document.documentElement.doScroll("left")
								} catch(a) {
									setTimeout(arguments.callee, 0);
									return
								}
								SUI.onReady()
							}
						} ()
					}
				}
			}
			SUI.EA(window, "load", SUI.onReady)
		}
	},
	onReady: function() {
		if (!SUI.ready.done) {
			SUI.ready.done = true;
			for (var e = 0, d = SUI.readyDo.length; e < d; e++) {
				try {
					SUI.readyDo[e]()
				} catch(f) {}
			}
			SUI.readyDo = null
		}
	},
	B: function() {
		var d = {},
		c = navigator.userAgent;
		d.ie6 = c.hasString("MSIE 6") && !c.hasString("MSIE 7") && !c.hasString("MSIE 8");
		d.ie8 = c.hasString("MSIE 8");
		d.ie = c.hasString("MSIE");
		d.safari = c.hasString("WebKit");
		d.ipad = c.hasString("iPad");
		d.firefox = c.hasString("Firefox");
		return d
	} ()
};
SUI.B.ie6 && document.execCommand("BackgroundImageCache", false, true);
SUI.bind = function(e, d) {
	var f = d || window;
	return function() {
		return e.apply(f, arguments)
	}
};
SUI.safeHtml = function(b) {
	return b.replace(/</g, "&lt;").replace(/>/g, "&gt;")
};
SUI.removeCookie = function(d) {
	var c = "; expires=" + (new Date).toGMTString();
	document.cookie = d + "=" + c + "; domain=qq.com; path=/"
};
var MI = MI || {};
MI.random = function(b) {
	return parseInt((new Date).getTime() / (b || 1))
};
MI.S = function(g, f) {
	try {
		if (window.localStorage) {
			if (f) {
				localStorage[g] = f
			} else {
				return localStorage[g] || ""
			}
		} else {
			if (SUI.B.ie) {
				if (!MI.S._body) {
					MI.S._body = SUI.html('<input style="display:none;behavior:url(#default#userData)" id="usersData">')[0]
				}
				var j = MI.S._body;
				if (!j.appended) {
					document.body.appendChild(j);
					j.appended = 1
				}
				try {
					j.load("oXMLBranch")
				} catch(i) {}
				if (f != undefined) {
					f == "" ? j.removeAttribute(g) : SUI.A(j, g, f);
					j.save("oXMLBranch")
				} else {
					return SUI.A(j, g) || ""
				}
			} else {
				return "$No$"
			}
		}
	} catch(h) {
		MI.Bos("btnPortalStorageFull");
		MI.S.clear()
	}
};
MI.S.clear = function() {
	var g = /^draft|top|time|option|tips/,
	f = window.localStorage;
	if (f) {
		try {
			for (var j in f) {
				j.match(g) || (f[j] = "")
			}
		} catch(i) {}
	} else {
		if (SUI.B.ie) {
			var h = MI.S._body;
			h.load("oXMLBranch");
			SUI.each(h.xmlDocument.firstChild.attributes,
			function(b) {
				try {
					var c = b.nodeName;
					c.match(g) || h.removeAttribute(c)
				} catch(a) {}
			});
			h.save("oXMLBranch")
		}
	}
};
MI.Bos = function(f, e) {
	try {
		var h = SUI.trim(SUI.cookie("o_cookie"));
		MI.Bos.pic.src = "http://btrace.qq.com/collect?sIp=&iQQ=" + h + "&sBiz=microblog&sOp=" + f + "&iSta=0&iTy=214&iFlow=0" + (e ? "&sServerIp=&iBackInt1=&iBackInt2=&sBackStr1=" + e: "")
	} catch(g) {}
};
MI.Bos.pic = new Image;
MI.Popup = function(d) {
	var c = this;
	c.body = document.body;
	c.title = d.title;
	c.titleCls = d.titleCls;
	c.width = d.width;
	c.height = d.height;
	c.src = d.src;
	c.isDrag = false;
	c.noDrag = false;
	c.referEl = document.getElementById("mini_nav_qq");
	c.isIE = document.all ? true: false;
	c.getMX = function(a) {
		return c.isIE ? a.clientX + Math.max(document.body.scrollLeft, document.documentElement.scrollLeft) : a.pageX
	};
	c.getMY = function(a) {
		return c.isIE ? a.clientY + Math.max(document.body.scrollTop, document.documentElement.scrollTop) : a.pageY
	};
	c.setEvent = function(a) {
		a.setCapture && a.setCapture();
		window.captureEvents && window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP)
	};
	c.setTitle = function(a) {
		c.layerTitle.firstChild.innerHTML = a
	};
	c.releaseEvent = function(a) {
		a.releaseCapture && a.releaseCapture();
		window.releaseEvents && window.releaseEvents(Event.MOUSEMOVE | Event.MOUSEUP)
	};
	c.creatDom = function(i, h) {
		var g = document.createElement(i.tag || "div"),
		a = g.setAttribute ? true: false,
		b;
		for (b in i) {
			if (! (b == "tag" || b == "children" || b == "cn" || b == "html" || b == "style" || typeof i[b] == "function")) {
				if (b == "cls") {
					if (i.cls) {
						g.className = i.cls
					}
				} else {
					if (a) {
						g.setAttribute(b, i[b])
					} else {
						g[b] = i[b]
					}
				}
			}
		}
		if (i.html) {
			g.innerHTML = i.html
		} (function(e, l) {
			function k(n, j, m) {
				if (! (!n || typeof m != "string")) {
					n.style[j ? j: ""] = m ? m: "";
					return n
				}
			}
			if (l) {
				if (typeof l == "string") {
					for (var o = /\s?([a-z\-]*)\:\s?([^;]*);?/gi, f; (f = o.exec(l)) != null;) {
						k(e, f[1], f[2])
					}
				} else {
					if (typeof l == "object") {
						for (o in l) {
							k(e, o, l[o])
						}
					}
				}
			}
		})(g, i.style);
		h && h.appendChild(g);
		return g
	};
	c.getObjPosition = function(b) {
		var a = {};
		a.x = b.offsetLeft;
		for (a.y = b.offsetTop; b = b.offsetParent;) {
			a.x += b.offsetLeft;
			a.y += b.offsetTop
		}
		return a
	};
	c.getWindowSize = function() {
		var a = {};
		if (window.self && self.innerWidth) {
			a.width = self.innerWidth;
			a.height = self.innerHeight;
			return a
		}
		if (document.documentElement && document.documentElement.clientHeight) {
			a.width = document.documentElement.clientWidth;
			a.height = document.documentElement.clientHeight;
			return a
		}
		a.width = document.body.clientWidth;
		a.height = document.body.clientHeight;
		return a
	};
	c.keyDownListener = function(a) {
		a = a ? a: window.event;
		a.keyCode == 27 && c.closePopup()
	};
	c.keyDownAddListener = function() {
		c.isIE ? document.attachEvent("onkeydown", c.keyDownListener) : document.addEventListener("keydown", c.keyDownListener, false)
	};
	c.keyDownRemoveListener = function() {
		c.isIE ? document.detachEvent("onkeydown", c.keyDownListener) : document.removeEventListener("keydown", c.keyDownListener, false)
	};
	c.createInfoWindow = function(f, b) {
		c.layerbg = c.creatDom({
			cls: "share_layer"
		});
		c.main = c.creatDom({
			cls: "share_layer_main"
		});
		c.layerTitle = c.creatDom({
			cls: "share_layer_title"
		});
		var a = c.creatDom({
			tag: "h3",
			html: c.title,
			cls: c.titleCls || ""
		});
		c.close = c.creatDom({
			tag: "a",
			title: "\u5173\u95ed",
			cls: "del_fri",
			href: "javascript:void(0)",
			html: "X"
		});
		c.close.onmousedown = function() {
			c.releaseEvent(c.layerTitle);
			c.closePopup()
		};
		c.layerTitle.appendChild(a);
		c.layerTitle.appendChild(c.close);
		c.main.appendChild(c.layerTitle);
		c.con = c.creatDom({
			cls: "share_layer_cont"
		});
		c.iframe = c.creatDom({
			tag: "iframe"
		});
		c.iframe.setAttribute("id", "mbPopupWinFrame");
		c.iframe.setAttribute("name", "mbPopupWinFrame");
		c.iframe.setAttribute("frameBorder", "0", 0);
		c.iframe.setAttribute("marginheight", "0");
		c.iframe.setAttribute("marginwidth", "0");
		c.iframe.setAttribute("scrolling", "no");
		c.iframe.style.width = c.width + "px";
		c.iframe.style.height = c.height + "px";
		c.iframe.style.display = "block";
		c.con.appendChild(c.iframe);
		window.setTimeout(function() {
			c.iframe.setAttribute("src", c.src, 0)
		},
		5);
		c.main.appendChild(c.con);
		a = c.creatDom({
			cls: "bg"
		});
		c.layerbg.appendChild(c.main);
		c.layerbg.appendChild(a);
		c.body.appendChild(c.layerbg);
		c.floatPopup(f, b);
		c.dragPopup(c.layerTitle, c.layerbg)
	};
	c.tr = function() {
		var b = SUI.width(this.referEl),
		a = SUI.getX(this.referEl);
		this.layerbg.style.width = this.width + 2 + "px";
		this.layerbg.style.left = a + b - this.width - 9 + "px";
		this.layerbg.style.top = "-8px"
	};
	c.floatPopup = function(f, b, a) {
		if (b == "top-right" && c.referEl) {
			c.tr()
		} else {
			f = (SUI.windowWidth() - c.width) / 2;
			if (f < 0) {
				f = 0
			}
			b = (SUI.windowHeight() - c.height - 30) / 2;
			if (b < 0) {
				b = 0
			}
			c.layerbg.style.width = c.width + 2 + "px";
			c.layerbg.style.left = a ? a.left: SUI.scrollX() + f + "px";
			c.layerbg.style.top = a ? a.left: SUI.scrollY() + b + "px"
		}
	};
	c.dragPopup = function(b, a) {
		b.onmousedown = function(g) {
			a.style.position = "absolute";
			var f = document;
			if (!g) {
				g = window.event
			}
			x = g.layerX ? g.layerX: g.offsetX;
			y = g.layerY ? g.layerY: g.offsetY;
			c.setEvent(b);
			f.onmousemove = function(h) {
				if (!c.noDrag) {
					if (!h) {
						h = window.event
					}
					var e = c.getMX(h),
					i = c.getMY(h);
					if (!h.pageX) {
						h.pageX = e
					}
					if (!h.pageY) {
						h.pageY = i
					}
					e = h.pageY - y;
					a.style.left = h.pageX - x - (c.isIE ? 10: 7) + "px";
					a.style.top = e - (c.isIE ? 10: 7) + "px"
				}
			};
			f.onmouseup = function() {
				c.isDrag = false;
				c.releaseEvent(b);
				f.onmousemove = null;
				f.onmouseup = null;
				f.onselectstart = null
			};
			f.onselectstart = function() {
				return false
			}
		}
	};
	c.resizePopup = function(a) {
		if (a.width) {
			c.layerbg.style.width = a.width + 2 + "px";
			c.iframe.style.width = a.width + "px"
		}
		if (a.height) {
			c.iframe.style.height = a.height + "px"
		}
	};
	c.showPopup = function(g, f, b, a) {
		c.noDrag = b;
		c.layerbg && c.closePopup();
		c.createInfoWindow(g, f, a);
		c.layerTitle.style.cursor = b ? "default": "move";
		c.keyDownAddListener()
	};
	c.closePopup = function() {
		c.timeId && clearInterval(c.timeId);
		c.iframe.parentNode.removeChild(c.iframe);
		c.layerbg.parentNode.removeChild(c.layerbg);
		c.layerbg = null;
		c.keyDownRemoveListener()
	};
	c.hidePopup = function() {
		c.layerbg.style.display = "none"
	};
	c.dataCenter = {}
};
function mb_cbRegister() {
	try {
		MI.Login.popup.closePopup()
	} catch(b) {}
	mb_cbLogin()
}
function mb_cbLogin() {
	window.mb_quick_reg_call && window.mb_quick_reg_call();
	MI.AccountInfo.get();
	MI.Login.callerName && MI.Login.cbLogin[MI.Login.callerName] && MI.Login.cbLogin[MI.Login.callerName]();
	if (MI.Login.callerName != "statusbar") {
		try {
			_MB_WEBTOP_STATUSBAR_.update()
		} catch(b) {}
	}
	typeof _MB_WEB_FOLLOWING_CHANGE_ == "function" && _MB_WEB_FOLLOWING_CHANGE_();
	MI.Bos("btnPortalLoginOK")
}
function mb_quick_reg(e, d, f) {
	d = d || "";
	if (MI.AccountInfo.uin && MI.S("account_uin_" + MI.AccountInfo.uin)) {
		if (MI.S("account_mbid_" + MI.AccountInfo.uin)) {
			f && f()
		} else {
			MI.Login.popup.src = "http://mini.t.qq.com/invite/quick.php?pref=" + d;
			MI.Login.showPopup(d, e);
			if (f) {
				window.mb_quick_reg_call = function() {
					f();
					window.mb_quick_reg_call = null
				}
			}
		}
	} else {
		MI.Login.popup.src = "http://mini.t.qq.com/mblogin_quick.htm?pref=" + d;
		MI.Login.showPopup(d, e);
		if (f) {
			window.mb_quick_reg_call = function() {
				f();
				window.mb_quick_reg_call = null
			}
		}
	}
	MI.Login.from = d;
	MI.Bos("btnPortalQuickLogin", d)
}
mb_quick_reg_call = null;
if (!MI.Login) {
	MI.Login = {
		callerName: "",
		cbLogin: {},
		from: window.location.host,
		popup: new MI.Popup({
			title: "\u5fae\u535a\u767b\u5f55",
			titleCls: "mblogo",
			width: 576,
			height: 167,
			src: "http://mini.t.qq.com/mblogin_quick.htm?pref=" + window.location.host
		}),
		logout: function() {
			SUI.removeCookie("uin", "", 0);
			SUI.removeCookie("skey", "", 0);
			SUI.removeCookie("luin", "", 0);
			SUI.removeCookie("lskey", "", 0);
			MI.AccountInfo.clearLocal()
		},
		getUin: function() {
			var b = SUI.cookie("uin") || SUI.cookie("luin") || SUI.cookie("skey");
			if (!b) {
				return 0
			}
			b = parseInt(b.replace(/[^\d]/g, ""), 10);
			if (!isNaN(b) && b > 10000) {
				return b
			}
			return 0
		},
		setCallback: function(d, c) {
			this.cbLogin[d] = c
		},
		showPopup: function(g, f, j, i, h) {
			this.callerName = g;			
			if(!SUI.G("onekey")){ userLogin(); return false; }
			else
				SUI.G("onekey").click()
		}
	}
}
function mb_cbAccountInfo(f) {
	var e = false,
	h = false;
	if (f.result == -1) {
		MI.Login.logout();
		h = true
	} else {
		if (f.result == -3) {
			e = true
		} else {
			if (f.result) {
				return
			}
		}
	}
	var g;
	if (f.info) {
		g = {
			uin: f.info[0] || "",
			nick: SUI.safeHtml(f.info[1] || ""),
			mbid: f.info[2] || "",
			mbnick: f.info[3] || "",
			data: f
		}
	}
	MI.AccountInfo.cacheInfo(g);
	MI.AccountInfo.callback(g, e, h)
}
if (!MI.AccountInfo) {
	MI.AccountInfo = {
		uin: MI.Login.getUin(),
		callerName: "",
		cbAccountInfo: {},
		nickDelay: 300000,
		mbDelay: 1200000,
		setCallback: function(d, c) {
			this.cbAccountInfo[d] = c
		},
		callback: function(e, d, f) {
			this.callerName && this.cbAccountInfo[this.callerName] && this.cbAccountInfo[this.callerName](e, d, f);
			MI.Login.callerName != this.callerName && MI.Login.callerName && this.cbAccountInfo[MI.Login.callerName] && this.cbAccountInfo[MI.Login.callerName](e, d, f)
		},
		cacheInfo: function(e) {
			if (e) {
				var d = +new Date,
				f = e.uin;
				this.uin = f;
				this.nick = e.nick;
				this.account = e.mbid;
				MI.S("account_lasttime", d);
				MI.S("account_time_" + f, d);
				MI.S("account_uin_" + f, e.uin);
				MI.S("account_nick_" + f, e.nick);
				MI.S("account_mbid_" + f, e.mbid);
				MI.S("account_mbnick_" + f, e.mbnick)
			}
		},
		getFromLocal: function(g) {
			if (g) {
				var f = MI.S("account_time_" + g);
				if (f) {
					var j = SUI.safeHtml(MI.S("account_nick_" + g)),
					i = MI.S("account_mbid_" + g),
					h = MI.S("account_mbnick_" + g);
					if (i && h) {
						if ( + new Date - f > (i ? this.mbDelay: this.nickDelay)) {
							this.clear(g)
						} else {
							return {
								uin: g,
								nick: j,
								mbid: i,
								mbnick: h
							}
						}
					}
				}
			}
		},
		get: function(f, e) {
			var g = MI.Login.getUin();
			var d = SUI.cookie("skey");
			var h = this.getFromLocal(f);
			this.callerName = e;
			h ? this.callback(h) : SUI.getScript("http://mini.t.qq.com/mini/mycheck.php?r=" + (new Date).getTime())
		},
		clearLocal: function() {
			this.clear(this.uin)
		},
		clear: function(b) {
			if (b) {
				MI.S("account_time_" + b, "");
				MI.S("account_uin_" + b, "");
				MI.S("account_nick_" + b, "");
				MI.S("account_mbid_" + b, "");
				MI.S("account_mbnick_" + b, "")
			}
		},
		clearLocalAll: function() {
			var b = MI.S("account_lasttime");
			b && +new Date - b > this.mbDelay && MI.S.clear()
		}
	}
}
function ptlogin2_onResizeMb(d, c) {
	MI.Login.popup.resizePopup({
		height: c
	})
}
MI.StatusBar = function(b) {
	this.loginEl = b.loginEl;
	this.logoutEl = b.logoutEl;
	this.entryEl = b.entryEl;
	this.infoEl = b.infoEl;
	this.logoEl = b.logoEl;
	this.regEl = b.regEl;
	this.loginPos = b.loginPos;
	this.loginNoDrag = b.loginNoDrag;
	this.init()
};
MI.StatusBar.prototype.init = function() {
	var b = this;
	MI.Login.setCallback("statusbar", SUI.bind(b.update, b));
	MI.AccountInfo.setCallback("statusbar", SUI.bind(b.showInfo, b));
	b.update();
	if (b.loginEl) {
		b.loginEl.onclick = function() {
			var a = MI.Login.getUin();
			if (a) {
				MI.AccountInfo.get(a, "statusbar")
			} else {
				SUI.G("mbCarduserNotLogin") && SUI.hide(SUI.G("mbCarduserNotLogin"));
				MI.Login.showPopup("statusbar", this, b.loginPos, b.loginNoDrag)
			}
			MI.Bos("btnPortalLogin");
			return false
		}
	}
	if (b.logoutEl) {
		b.logoutEl.onclick = function() {
			MI.Login.logout();
			b.update();
			MI.Bos("btnPortalLogout");
			return false
		}
	}
	if (b.regEl) {
		b.regEl.onclick = function() {
			MI.Bos("btnPortalReg")
		}
	}
};
MI.StatusBar.prototype._show = function(d, c) {
	d.style.display = c
};
MI.StatusBar.prototype.update = function() {
	var b = MI.Login.getUin();
	b ? MI.AccountInfo.get(b, "statusbar") : this.showLogin()
};
MI.StatusBar.prototype.showLogin = function() {
	this.loginEl && this._show(this.loginEl, "");
	this.logoutEl && this._show(this.logoutEl, "none");
	this.entryEl && this._show(this.entryEl, "none");
	this.infoEl && this._show(this.infoEl, "none");
	this.regEl && this._show(this.regEl, "");
	var f = MI.Login.getUin(),
	e = SUI.cookie("mbCardUserNotLoginTips"),
	h = SUI.G("mbCarduserNotLogin"),
	g = SUI.GC(".mbClose")[0];
	if (!f && e != 1) {
		SUI.show(h);
		g.onclick = function(a) {
			SUI.E(a).stop();
			SUI.hide(h);
			SUI.cookie("mbCardUserNotLoginTips", "1", 1, ".qq.com")
		}
	}
};
MI.StatusBar.prototype.showInfo = function(j, h) {
	function p() {
		clearTimeout(i);
		i = setTimeout(function() {
			SUI.show(SUI.G("mbCardUserInfo"))
		},
		50);
		return false
	}
	function o() {
		clearTimeout(i);
		i = setTimeout(function() {
			SUI.hide(SUI.G("mbCardUserInfo"))
		},
		50);
		return false
	}
	function n() {
		o();
		SUI.cookie("mbCardUserInfoTips", "1", 1, ".qq.com")
	}
	if (!h) {
		if (j) {
			var i,
			k = '<span><a href="http://t.qq.com?pref=qqcom.mininav" target="_blank">\u5fae\u535a</a> \u6b22\u8fce\u60a8</span><em><a target="_blank" href="http://t.qq.com' + (j.mbid ? "/" + j.mbid + "/": "") + '?pref=qqcom.mininav" onclick="MI.Bos(\'' + (j.mbid ? "btnPortalJump1": "btnPortalJump2") + "')\">";
			k += j.mbid ? j.mbnick + "(@" + j.mbid + ")": j.nick + "(" + j.uin + ")";
			k += "</a></em>";
			if (j.mbid && j.data && j.data.info[4] > 0) {
				k += '<span><a class="mbAtMe" target="_blank" href="http://t.qq.com/at?pref=qqcom.mininav" onclick="MI.Bos(\'' + (j.mbid ? "btnPortalJump1": "btnPortalJump2") + "')\">" + j.data.info[4] + "\u6761\u6d88\u606f\u63d0\u5230\u6211</a></span>"
			}
			this.infoEl.innerHTML = k;
			if (this.entryEl) {
				this.entryEl.innerHTML = '<a class="mbRegBtn" target="_blank" href="http://t.qq.com' + (j.mbid ? "/" + j.mbid + "/": "") + '?pref=qqcom.mininav" onclick="MI.Bos(\'' + (j.mbid ? "btnPortalJump3": "btnPortalJump4") + "')\">" + (j.mbid ? "\u8fdb\u5165": "\u5f00\u901a") + "\u5fae\u535a</a>";
				if (!j.mbid) {
					k = '\t\t\t<div id="mbCardUserInfo" class="mbCardUserInfo" style="display:none">\t\t\t\t<div class="arrowBox"><div calss="arrow"></div></div>\t\t\t\t<div class="mbClose"><a href="#"><span>\u5173\u95ed</span></a></div>\t\t\t\t<div class="mbCardUserDetail">\t\t\t\t\t<div><span class="mbUserNick">' + j.nick + "</span>\u4f60\u597d\uff0c\t\t\t\t";
					if (j.data && j.data.info[4] > 0) {
						k += '\u4f60\u6709<span class="mbFriends">' + j.data.info[4] + "</span>\u4e2a\u597d\u53cb\u5df2\u7ecf\u5f00\u901a\u4e86\u817e\u8baf\u5fae\u535a\u3002"
					}
					k += '\u5feb\u6765\u52a0\u5165\u5fae\u535a\u5427\u3002</div>\t\t\t\t\t<div class="mbReg"><a href="http://t.qq.com?pref=qqcom.toptips" target="_blank">\u5f00\u901a\u5fae\u535a</a></div>\t\t\t\t</div>\t\t\t</div>\t\t\t';
					this.entryEl.innerHTML += k
				}
				if (!j.mbid) {
					SUI.GC(".mbRegBtn");
					k = SUI.GC(".mbClose")[1];
					SUI.GC(".mbCardUserInfo");
					var g = SUI.G("mbCarduserNotLogin");
					g && SUI.hide(g);
					p();
					k.onclick = n;
					SUI.cookie("mbCardUserInfoTips") == 1 && g && o(g)
				}
			}
			this.loginEl && this._show(this.loginEl, "none");
			this.logoutEl && this._show(this.logoutEl, "block");
			this.entryEl && this._show(this.entryEl, "block");
			this.infoEl && this._show(this.infoEl, "");
			this.regEl && this._show(this.regEl, "none")
		}
	}
};/*  |xGv00|9f10f2d4d673da07770e03c26cc54379 */