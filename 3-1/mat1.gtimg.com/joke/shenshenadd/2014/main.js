!function(e, t) {
    function n(e) {
        var t = e.length,
        n = ut.type(e);
        return ut.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function r(e) {
        var t = Et[e] = {};
        return ut.each(e.match(ct) || [],
        function(e, n) {
            t[n] = !0
        }),
        t
    }
    function i(e, n, r, i) {
        if (ut.acceptData(e)) {
            var o, a, s = ut.expando,
            u = "string" == typeof n,
            l = e.nodeType,
            c = l ? ut.cache: e,
            f = l ? e[s] : e[s] && s;
            if (f && c[f] && (i || c[f].data) || !u || r !== t) return f || (l ? e[s] = f = Z.pop() || ut.guid++:f = s),
            c[f] || (c[f] = {},
            l || (c[f].toJSON = ut.noop)),
            ("object" == typeof n || "function" == typeof n) && (i ? c[f] = ut.extend(c[f], n) : c[f].data = ut.extend(c[f].data, n)),
            o = c[f],
            i || (o.data || (o.data = {}), o = o.data),
            r !== t && (o[ut.camelCase(n)] = r),
            u ? (a = o[n], null == a && (a = o[ut.camelCase(n)])) : a = o,
            a
        }
    }
    function o(e, t, n) {
        if (ut.acceptData(e)) {
            var r, i, o, a = e.nodeType,
            u = a ? ut.cache: e,
            l = a ? e[ut.expando] : ut.expando;
            if (u[l]) {
                if (t && (o = n ? u[l] : u[l].data)) {
                    ut.isArray(t) ? t = t.concat(ut.map(t, ut.camelCase)) : t in o ? t = [t] : (t = ut.camelCase(t), t = t in o ? [t] : t.split(" "));
                    for (r = 0, i = t.length; i > r; r++) delete o[t[r]];
                    if (! (n ? s: ut.isEmptyObject)(o)) return
                } (n || (delete u[l].data, s(u[l]))) && (a ? ut.cleanData([e], !0) : ut.support.deleteExpando || u != u.window ? delete u[l] : u[l] = null)
            }
        }
    }
    function a(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(Nt, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null: +r + "" === r ? +r: kt.test(r) ? ut.parseJSON(r) : r
                } catch(o) {}
                ut.data(e, n, r)
            } else r = t
        }
        return r
    }
    function s(e) {
        var t;
        for (t in e) if (("data" !== t || !ut.isEmptyObject(e[t])) && "toJSON" !== t) return ! 1;
        return ! 0
    }
    function u() {
        return ! 0
    }
    function l() {
        return ! 1
    }
    function c(e, t) {
        do e = e[t];
        while (e && 1 !== e.nodeType);
        return e
    }
    function f(e, t, n) {
        if (t = t || 0, ut.isFunction(t)) return ut.grep(e,
        function(e, r) {
            var i = !!t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return ut.grep(e,
        function(e) {
            return e === t === n
        });
        if ("string" == typeof t) {
            var r = ut.grep(e,
            function(e) {
                return 1 === e.nodeType
            });
            if (It.test(t)) return ut.filter(t, r, !n);
            t = ut.filter(t, r)
        }
        return ut.grep(e,
        function(e) {
            return ut.inArray(e, t) >= 0 === n
        })
    }
    function p(e) {
        var t = Vt.split("|"),
        n = e.createDocumentFragment();
        if (n.createElement) for (; t.length;) n.createElement(t.pop());
        return n
    }
    function d(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }
    function h(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type,
        e
    }
    function m(e) {
        var t = on.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function g(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) ut._data(n, "globalEval", !t || ut._data(t[r], "globalEval"))
    }
    function y(e, t) {
        if (1 === t.nodeType && ut.hasData(e)) {
            var n, r, i, o = ut._data(e),
            a = ut._data(t, o),
            s = o.events;
            if (s) {
                delete a.handle,
                a.events = {};
                for (n in s) for (r = 0, i = s[n].length; i > r; r++) ut.event.add(t, n, s[n][r])
            }
            a.data && (a.data = ut.extend({},
            a.data))
        }
    }
    function v(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ut.support.noCloneEvent && t[ut.expando]) {
                i = ut._data(t);
                for (r in i.events) ut.removeEvent(t, r, i.handle);
                t.removeAttribute(ut.expando)
            }
            "script" === n && t.text !== e.text ? (h(t).text = e.text, m(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ut.support.html5Clone && e.innerHTML && !ut.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected: ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    function b(e, n) {
        var r, i, o = 0,
        a = typeof e.getElementsByTagName !== U ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== U ? e.querySelectorAll(n || "*") : t;
        if (!a) for (a = [], r = e.childNodes || e; null != (i = r[o]); o++) ! n || ut.nodeName(i, n) ? a.push(i) : ut.merge(a, b(i, n));
        return n === t || n && ut.nodeName(e, n) ? ut.merge([e], a) : a
    }
    function x(e) {
        tn.test(e.type) && (e.defaultChecked = e.checked)
    }
    function T(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Nn.length; i--;) if (t = Nn[i] + n, t in e) return t;
        return r
    }
    function w(e, t) {
        return e = t || e,
        "none" === ut.css(e, "display") || !ut.contains(e.ownerDocument, e)
    }
    function E(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a],
        r.style && (o[a] = ut._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && w(r) && (o[a] = ut._data(r, "olddisplay", S(r.nodeName)))) : o[a] || (i = w(r), (n && "none" !== n || !i) && ut._data(r, "olddisplay", i ? n: ut.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a],
        r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "": "none"));
        return e
    }
    function k(e, t, n) {
        var r = vn.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function N(e, t, n, r, i) {
        for (var o = n === (r ? "border": "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === n && (a += ut.css(e, n + kn[o], !0, i)),
        r ? ("content" === n && (a -= ut.css(e, "padding" + kn[o], !0, i)), "margin" !== n && (a -= ut.css(e, "border" + kn[o] + "Width", !0, i))) : (a += ut.css(e, "padding" + kn[o], !0, i), "padding" !== n && (a += ut.css(e, "border" + kn[o] + "Width", !0, i)));
        return a
    }
    function C(e, t, n) {
        var r = !0,
        i = "width" === t ? e.offsetWidth: e.offsetHeight,
        o = fn(e),
        a = ut.support.boxSizing && "border-box" === ut.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = pn(e, t, o), (0 > i || null == i) && (i = e.style[t]), bn.test(i)) return i;
            r = a && (ut.support.boxSizingReliable || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + N(e, t, n || (a ? "border": "content"), r, o) + "px"
    }
    function S(e) {
        var t = Y,
        n = Tn[e];
        return n || (n = A(e, t), "none" !== n && n || (cn = (cn || ut("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (cn[0].contentWindow || cn[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = A(e, t), cn.detach()), Tn[e] = n),
        n
    }
    function A(e, t) {
        var n = ut(t.createElement(e)).appendTo(t.body),
        r = ut.css(n[0], "display");
        return n.remove(),
        r
    }
    function L(e, t, n, r) {
        var i;
        if (ut.isArray(t)) ut.each(t,
        function(t, i) {
            n || Sn.test(e) ? r(e, i) : L(e + "[" + ("object" == typeof i ? t: "") + "]", i, n, r)
        });
        else if (n || "object" !== ut.type(t)) r(e, t);
        else for (i in t) L(e + "[" + i + "]", t[i], n, r)
    }
    function j(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
            o = t.toLowerCase().match(ct) || [];
            if (ut.isFunction(n)) for (; r = o[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function D(e, n, r, i) {
        function o(u) {
            var l;
            return a[u] = !0,
            ut.each(e[u] || [],
            function(e, u) {
                var c = u(n, r, i);
                return "string" != typeof c || s || a[c] ? s ? !(l = c) : t: (n.dataTypes.unshift(c), o(c), !1)
            }),
            l
        }
        var a = {},
        s = e === zn;
        return o(n.dataTypes[0]) || !a["*"] && o("*")
    }
    function H(e, n) {
        var r, i, o = ut.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e: r || (r = {}))[i] = n[i]);
        return r && ut.extend(!0, e, r),
        e
    }
    function _(e, n, r) {
        var i, o, a, s, u = e.contents,
        l = e.dataTypes,
        c = e.responseFields;
        for (s in c) s in r && (n[c[s]] = r[s]);
        for (;
        "*" === l[0];) l.shift(),
        o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o) for (s in u) if (u[s] && u[s].test(o)) {
            l.unshift(s);
            break
        }
        if (l[0] in r) a = l[0];
        else {
            for (s in r) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== l[0] && l.unshift(a), r[a]) : t
    }
    function O(e, t) {
        var n, r, i, o, a = {},
        s = 0,
        u = e.dataTypes.slice(),
        l = u[0];
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1]) for (i in e.converters) a[i.toLowerCase()] = e.converters[i];
        for (; r = u[++s];) if ("*" !== r) {
            if ("*" !== l && l !== r) {
                if (i = a[l + " " + r] || a["* " + r], !i) for (n in a) if (o = n.split(" "), o[1] === r && (i = a[l + " " + o[0]] || a["* " + o[0]])) {
                    i === !0 ? i = a[n] : a[n] !== !0 && (r = o[0], u.splice(s--, 0, r));
                    break
                }
                if (i !== !0) if (i && e["throws"]) t = i(t);
                else try {
                    t = i(t)
                } catch(c) {
                    return {
                        state: "parsererror",
                        error: i ? c: "No conversion from " + l + " to " + r
                    }
                }
            }
            l = r
        }
        return {
            state: "success",
            data: t
        }
    }
    function q() {
        try {
            return new e.XMLHttpRequest
        } catch(t) {}
    }
    function F() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch(t) {}
    }
    function M() {
        return setTimeout(function() {
            Zn = t
        }),
        Zn = ut.now()
    }
    function B(e, t) {
        ut.each(t,
        function(t, n) {
            for (var r = (or[t] || []).concat(or["*"]), i = 0, o = r.length; o > i; i++) if (r[i].call(e, t, n)) return
        })
    }
    function P(e, t, n) {
        var r, i, o = 0,
        a = ir.length,
        s = ut.Deferred().always(function() {
            delete u.elem
        }),
        u = function() {
            if (i) return ! 1;
            for (var t = Zn || M(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
            return s.notifyWith(e, [l, o, n]),
            1 > o && u ? n: (s.resolveWith(e, [l]), !1)
        },
        l = s.promise({
            elem: e,
            props: ut.extend({},
            t),
            opts: ut.extend(!0, {
                specialEasing: {}
            },
            n),
            originalProperties: t,
            originalOptions: n,
            startTime: Zn || M(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = ut.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0,
                r = t ? l.tweens.length: 0;
                if (i) return this;
                for (i = !0; r > n; n++) l.tweens[n].run(1);
                return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]),
                this
            }
        }),
        c = l.props;
        for ($(c, l.opts.specialEasing); a > o; o++) if (r = ir[o].call(l, e, c, l.opts)) return r;
        return B(l, c),
        ut.isFunction(l.opts.start) && l.opts.start.call(e, l),
        ut.fx.timer(ut.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function $(e, t) {
        var n, r, i, o, a;
        for (i in e) if (r = ut.camelCase(i), o = t[r], n = e[i], ut.isArray(n) && (o = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), a = ut.cssHooks[r], a && "expand" in a) {
            n = a.expand(n),
            delete e[r];
            for (i in n) i in e || (e[i] = n[i], t[i] = o)
        } else t[r] = o
    }
    function R(e, t, n) {
        var r, i, o, a, s, u, l, c, f, p = this,
        d = e.style,
        h = {},
        m = [],
        g = e.nodeType && w(e);
        n.queue || (c = ut._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, f = c.empty.fire, c.empty.fire = function() {
            c.unqueued || f()
        }), c.unqueued++, p.always(function() {
            p.always(function() {
                c.unqueued--,
                ut.queue(e, "fx").length || c.empty.fire()
            })
        })),
        1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === ut.css(e, "display") && "none" === ut.css(e, "float") && (ut.support.inlineBlockNeedsLayout && "inline" !== S(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")),
        n.overflow && (d.overflow = "hidden", ut.support.shrinkWrapBlocks || p.always(function() {
            d.overflow = n.overflow[0],
            d.overflowX = n.overflow[1],
            d.overflowY = n.overflow[2]
        }));
        for (i in t) if (a = t[i], tr.exec(a)) {
            if (delete t[i], u = u || "toggle" === a, a === (g ? "hide": "show")) continue;
            m.push(i)
        }
        if (o = m.length) {
            s = ut._data(e, "fxshow") || ut._data(e, "fxshow", {}),
            "hidden" in s && (g = s.hidden),
            u && (s.hidden = !g),
            g ? ut(e).show() : p.done(function() {
                ut(e).hide()
            }),
            p.done(function() {
                var t;
                ut._removeData(e, "fxshow");
                for (t in h) ut.style(e, t, h[t])
            });
            for (i = 0; o > i; i++) r = m[i],
            l = p.createTween(r, g ? s[r] : 0),
            h[r] = s[r] || ut.style(e, r),
            r in s || (s[r] = l.start, g && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function W(e, t, n, r, i) {
        return new W.prototype.init(e, t, n, r, i)
    }
    function I(e, t) {
        var n, r = {
            height: e
        },
        i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = kn[i],
        r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function z(e) {
        return ut.isWindow(e) ? e: 9 === e.nodeType ? e.defaultView || e.parentWindow: !1
    }
    var X, V, U = typeof t,
    Y = e.document,
    G = e.location,
    J = e.jQuery,
    K = e.$,
    Q = {},
    Z = [],
    et = "1.9.1",
    tt = Z.concat,
    nt = Z.push,
    rt = Z.slice,
    it = Z.indexOf,
    ot = Q.toString,
    at = Q.hasOwnProperty,
    st = et.trim,
    ut = function(e, t) {
        return new ut.fn.init(e, t, V)
    },
    lt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ct = /\S+/g,
    ft = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    pt = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    ht = /^[\],:{}\s]*$/,
    mt = /(?:^|:|,)(?:\s*\[)+/g,
    gt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    yt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
    vt = /^-ms-/,
    bt = /-([\da-z])/gi,
    xt = function(e, t) {
        return t.toUpperCase()
    },
    Tt = function(e) { (Y.addEventListener || "load" === e.type || "complete" === Y.readyState) && (wt(), ut.ready())
    },
    wt = function() {
        Y.addEventListener ? (Y.removeEventListener("DOMContentLoaded", Tt, !1), e.removeEventListener("load", Tt, !1)) : (Y.detachEvent("onreadystatechange", Tt), e.detachEvent("onload", Tt))
    };
    ut.fn = ut.prototype = {
        jquery: et,
        constructor: ut,
        init: function(e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : pt.exec(e), !i || !i[1] && n) return ! n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof ut ? n[0] : n, ut.merge(this, ut.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n: Y, !0)), dt.test(i[1]) && ut.isPlainObject(n)) for (i in n) ut.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = Y.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1,
                    this[0] = o
                }
                return this.context = Y,
                this.selector = e,
                this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ut.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ut.makeArray(e, this))
        },
        selector: "",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return rt.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = ut.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return ut.each(this, e, t)
        },
        ready: function(e) {
            return ut.ready.promise().done(e),
            this
        },
        slice: function() {
            return this.pushStack(rt.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(e) {
            var t = this.length,
            n = +e + (0 > e ? t: 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) {
            return this.pushStack(ut.map(this,
            function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: nt,
        sort: [].sort,
        splice: [].splice
    },
    ut.fn.init.prototype = ut.fn,
    ut.extend = ut.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {},
        u = 1,
        l = arguments.length,
        c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {},
        u = 2), "object" == typeof s || ut.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++) if (null != (o = arguments[u])) for (i in o) e = s[i],
        r = o[i],
        s !== r && (c && r && (ut.isPlainObject(r) || (n = ut.isArray(r))) ? (n ? (n = !1, a = e && ut.isArray(e) ? e: []) : a = e && ut.isPlainObject(e) ? e: {},
        s[i] = ut.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    },
    ut.extend({
        noConflict: function(t) {
            return e.$ === ut && (e.$ = K),
            t && e.jQuery === ut && (e.jQuery = J),
            ut
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? ut.readyWait++:ut.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--ut.readyWait: !ut.isReady) {
                if (!Y.body) return setTimeout(ut.ready);
                ut.isReady = !0,
                e !== !0 && --ut.readyWait > 0 || (X.resolveWith(Y, [ut]), ut.fn.trigger && ut(Y).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === ut.type(e)
        },
        isArray: Array.isArray ||
        function(e) {
            return "array" === ut.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return ! isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? e + "": "object" == typeof e || "function" == typeof e ? Q[ot.call(e)] || "object": typeof e
        },
        isPlainObject: function(e) {
            if (!e || "object" !== ut.type(e) || e.nodeType || ut.isWindow(e)) return ! 1;
            try {
                if (e.constructor && !at.call(e, "constructor") && !at.call(e.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(n) {
                return ! 1
            }
            var r;
            for (r in e);
            return r === t || at.call(e, r)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return ! 1;
            return ! 0
        },
        error: function(e) {
            throw Error(e)
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1),
            t = t || Y;
            var r = dt.exec(e),
            i = !n && [];
            return r ? [t.createElement(r[1])] : (r = ut.buildFragment([e], t, i), i && ut(i).remove(), ut.merge([], r.childNodes))
        },
        parseJSON: function(n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n: "string" == typeof n && (n = ut.trim(n), n && ht.test(n.replace(gt, "@").replace(yt, "]").replace(mt, ""))) ? Function("return " + n)() : (ut.error("Invalid JSON: " + n), t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch(o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || ut.error("Invalid XML: " + n),
            r
        },
        noop: function() {},
        globalEval: function(t) {
            t && ut.trim(t) && (e.execScript ||
            function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(vt, "ms-").replace(bt, xt)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var i, o = 0,
            a = e.length,
            s = n(e);
            if (r) {
                if (s) for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
                else for (o in e) if (i = t.apply(e[o], r), i === !1) break
            } else if (s) for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else for (o in e) if (i = t.call(e[o], o, e[o]), i === !1) break;
            return e
        },
        trim: st && !st.call("ï»¿Â ") ?
        function(e) {
            return null == e ? "": st.call(e)
        }: function(e) {
            return null == e ? "": (e + "").replace(ft, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? ut.merge(r, "string" == typeof e ? [e] : e) : nt.call(r, e)),
            r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (it) return it.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n: 0; r > n; n++) if (n in t && t[n] === e) return n
            }
            return - 1
        },
        merge: function(e, n) {
            var r = n.length,
            i = e.length,
            o = 0;
            if ("number" == typeof r) for (; r > o; o++) e[i++] = n[o];
            else for (; n[o] !== t;) e[i++] = n[o++];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            var r, i = [],
            o = 0,
            a = e.length;
            for (n = !!n; a > o; o++) r = !!t(e[o], o),
            n !== r && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o = 0,
            a = e.length,
            s = n(e),
            u = [];
            if (s) for (; a > o; o++) i = t(e[o], o, r),
            null != i && (u[u.length] = i);
            else for (o in e) i = t(e[o], o, r),
            null != i && (u[u.length] = i);
            return tt.apply([], u)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o),
            ut.isFunction(e) ? (r = rt.call(arguments, 2), i = function() {
                return e.apply(n || this, r.concat(rt.call(arguments)))
            },
            i.guid = e.guid = e.guid || ut.guid++, i) : t
        },
        access: function(e, n, r, i, o, a, s) {
            var u = 0,
            l = e.length,
            c = null == r;
            if ("object" === ut.type(r)) {
                o = !0;
                for (u in r) ut.access(e, n, u, r[u], !0, a, s)
            } else if (i !== t && (o = !0, ut.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
                return c.call(ut(e), n)
            })), n)) for (; l > u; u++) n(e[u], r, s ? i: i.call(e[u], u, n(e[u], r)));
            return o ? e: c ? n.call(e) : l ? n(e[0], r) : a
        },
        now: function() {
            return (new Date).getTime()
        }
    }),
    ut.ready.promise = function(t) {
        if (!X) if (X = ut.Deferred(), "complete" === Y.readyState) setTimeout(ut.ready);
        else if (Y.addEventListener) Y.addEventListener("DOMContentLoaded", Tt, !1),
        e.addEventListener("load", Tt, !1);
        else {
            Y.attachEvent("onreadystatechange", Tt),
            e.attachEvent("onload", Tt);
            var n = !1;
            try {
                n = null == e.frameElement && Y.documentElement
            } catch(r) {}
            n && n.doScroll &&
            function i() {
                if (!ut.isReady) {
                    try {
                        n.doScroll("left")
                    } catch(e) {
                        return setTimeout(i, 50)
                    }
                    wt(),
                    ut.ready()
                }
            } ()
        }
        return X.promise(t)
    },
    ut.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(e, t) {
        Q["[object " + t + "]"] = t.toLowerCase()
    }),
    V = ut(Y);
    var Et = {};
    ut.Callbacks = function(e) {
        e = "string" == typeof e ? Et[e] || r(e) : ut.extend({},
        e);
        var n, i, o, a, s, u, l = [],
        c = !e.once && [],
        f = function(t) {
            for (i = e.memory && t, o = !0, s = u || 0, u = 0, a = l.length, n = !0; l && a > s; s++) if (l[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                i = !1;
                break
            }
            n = !1,
            l && (c ? c.length && f(c.shift()) : i ? l = [] : p.disable())
        },
        p = {
            add: function() {
                if (l) {
                    var t = l.length; !
                    function r(t) {
                        ut.each(t,
                        function(t, n) {
                            var i = ut.type(n);
                            "function" === i ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                        })
                    } (arguments),
                    n ? a = l.length: i && (u = t, f(i))
                }
                return this
            },
            remove: function() {
                return l && ut.each(arguments,
                function(e, t) {
                    for (var r; (r = ut.inArray(t, l, r)) > -1;) l.splice(r, 1),
                    n && (a >= r && a--, s >= r && s--)
                }),
                this
            },
            has: function(e) {
                return e ? ut.inArray(e, l) > -1 : !(!l || !l.length)
            },
            empty: function() {
                return l = [],
                this
            },
            disable: function() {
                return l = c = i = t,
                this
            },
            disabled: function() {
                return ! l
            },
            lock: function() {
                return c = t,
                i || p.disable(),
                this
            },
            locked: function() {
                return ! c
            },
            fireWith: function(e, t) {
                return t = t || [],
                t = [e, t.slice ? t.slice() : t],
                !l || o && !c || (n ? c.push(t) : f(t)),
                this
            },
            fire: function() {
                return p.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! o
            }
        };
        return p
    },
    ut.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", ut.Callbacks("once memory"), "resolved"], ["reject", "fail", ut.Callbacks("once memory"), "rejected"], ["notify", "progress", ut.Callbacks("memory")]],
            n = "pending",
            r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return ut.Deferred(function(n) {
                        ut.each(t,
                        function(t, o) {
                            var a = o[0],
                            s = ut.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && ut.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? ut.extend(e, r) : r
                }
            },
            i = {};
            return r.pipe = r.then,
            ut.each(t,
            function(e, o) {
                var a = o[2],
                s = o[3];
                r[o[1]] = a.add,
                s && a.add(function() {
                    n = s
                },
                t[1 ^ e][2].disable, t[2][2].lock),
                i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r: this, arguments),
                    this
                },
                i[o[0] + "With"] = a.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t = 0,
            n = rt.call(arguments),
            r = n.length,
            i = 1 !== r || e && ut.isFunction(e.promise) ? r: 0,
            o = 1 === i ? e: ut.Deferred(),
            a = function(e, t, n) {
                return function(r) {
                    t[e] = this,
                    n[e] = arguments.length > 1 ? rt.call(arguments) : r,
                    n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                }
            },
            s,
            u,
            l;
            if (r > 1) for (s = Array(r), u = Array(r), l = Array(r); r > t; t++) n[t] && ut.isFunction(n[t].promise) ? n[t].promise().done(a(t, l, n)).fail(o.reject).progress(a(t, u, s)) : --i;
            return i || o.resolveWith(l, n),
            o.promise()
        }
    }),
    ut.support = function() {
        var t, n, r, i, o, a, s, u, l, c, f = Y.createElement("div");
        if (f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = f.getElementsByTagName("*"), r = f.getElementsByTagName("a")[0], !n || !r || !n.length) return {};
        o = Y.createElement("select"),
        s = o.appendChild(Y.createElement("option")),
        i = f.getElementsByTagName("input")[0],
        r.style.cssText = "top:1px;float:left;opacity:.5",
        t = {
            getSetAttribute: "t" !== f.className,
            leadingWhitespace: 3 === f.firstChild.nodeType,
            tbody: !f.getElementsByTagName("tbody").length,
            htmlSerialize: !!f.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: "/a" === r.getAttribute("href"),
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: !!i.value,
            optSelected: s.selected,
            enctype: !!Y.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== Y.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === Y.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        },
        i.checked = !0,
        t.noCloneChecked = i.cloneNode(!0).checked,
        o.disabled = !0,
        t.optDisabled = !s.disabled;
        try {
            delete f.test
        } catch(p) {
            t.deleteExpando = !1
        }
        i = Y.createElement("input"),
        i.setAttribute("value", ""),
        t.input = "" === i.getAttribute("value"),
        i.value = "t",
        i.setAttribute("type", "radio"),
        t.radioValue = "t" === i.value,
        i.setAttribute("checked", "t"),
        i.setAttribute("name", "t"),
        a = Y.createDocumentFragment(),
        a.appendChild(i),
        t.appendChecked = i.checked,
        t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked,
        f.attachEvent && (f.attachEvent("onclick",
        function() {
            t.noCloneEvent = !1
        }), f.cloneNode(!0).click());
        for (c in {
            submit: !0,
            change: !0,
            focusin: !0
        }) f.setAttribute(u = "on" + c, "t"),
        t[c + "Bubbles"] = u in e || f.attributes[u].expando === !1;
        return f.style.backgroundClip = "content-box",
        f.cloneNode(!0).style.backgroundClip = "",
        t.clearCloneStyle = "content-box" === f.style.backgroundClip,
        ut(function() {
            var n, r, i, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
            a = Y.getElementsByTagName("body")[0];
            a && (n = Y.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(f), f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = f.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = l && 0 === i[0].offsetHeight, f.innerHTML = "", f.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === f.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== a.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(f, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(f, null) || {
                width: "4px"
            }).width, r = f.appendChild(Y.createElement("div")), r.style.cssText = f.style.cssText = o, r.style.marginRight = r.style.width = "0", f.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof f.style.zoom !== U && (f.innerHTML = "", f.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === f.offsetWidth, f.style.display = "block", f.innerHTML = "<div></div>", f.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== f.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = f = i = r = null)
        }),
        n = o = a = s = r = i = null,
        t
    } ();
    var kt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    Nt = /([A-Z])/g;
    ut.extend({
        cache: {},
        expando: "jQuery" + (et + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? ut.cache[e[ut.expando]] : e[ut.expando],
            !!e && !s(e)
        },
        data: function(e, t, n) {
            return i(e, t, n)
        },
        removeData: function(e, t) {
            return o(e, t)
        },
        _data: function(e, t, n) {
            return i(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return o(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return ! 1;
            var t = e.nodeName && ut.noData[e.nodeName.toLowerCase()];
            return ! t || t !== !0 && e.getAttribute("classid") === t
        }
    }),
    ut.fn.extend({
        data: function(e, n) {
            var r, i, o = this[0],
            s = 0,
            u = null;
            if (e === t) {
                if (this.length && (u = ut.data(o), 1 === o.nodeType && !ut._data(o, "parsedAttrs"))) {
                    for (r = o.attributes; r.length > s; s++) i = r[s].name,
                    i.indexOf("data-") || (i = ut.camelCase(i.slice(5)), a(o, i, u[i]));
                    ut._data(o, "parsedAttrs", !0)
                }
                return u
            }
            return "object" == typeof e ? this.each(function() {
                ut.data(this, e)
            }) : ut.access(this,
            function(n) {
                return n === t ? o ? a(o, e, ut.data(o, e)) : null: (this.each(function() {
                    ut.data(this, e, n)
                }), t)
            },
            null, n, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                ut.removeData(this, e)
            })
        }
    }),
    ut.extend({
        queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = ut._data(e, n), r && (!i || ut.isArray(r) ? i = ut._data(e, n, ut.makeArray(r)) : i.push(r)), i || []) : t
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ut.queue(e, t),
            r = n.length,
            i = n.shift(),
            o = ut._queueHooks(e, t),
            a = function() {
                ut.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--),
            o.cur = i,
            i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ut._data(e, n) || ut._data(e, n, {
                empty: ut.Callbacks("once memory").add(function() {
                    ut._removeData(e, t + "queue"),
                    ut._removeData(e, n)
                })
            })
        }
    }),
    ut.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--),
            r > arguments.length ? ut.queue(this[0], e) : n === t ? this: this.each(function() {
                var t = ut.queue(this, e, n);
                ut._queueHooks(this, e),
                "fx" === e && "inprogress" !== t[0] && ut.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ut.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = ut.fx ? ut.fx.speeds[e] || e: e,
            t = t || "fx",
            this.queue(t,
            function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
            o = ut.Deferred(),
            a = this,
            s = this.length,
            u = function() {--i || o.resolveWith(a, [a])
            };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) r = ut._data(a[s], e + "queueHooks"),
            r && r.empty && (i++, r.empty.add(u));
            return u(),
            o.promise(n)
        }
    });
    var Ct, St, At = /[\t\r\n]/g,
    Lt = /\r/g,
    jt = /^(?:input|select|textarea|button|object)$/i,
    Dt = /^(?:a|area)$/i,
    Ht = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
    _t = /^(?:checked|selected)$/i,
    Ot = ut.support.getSetAttribute,
    qt = ut.support.input;
    ut.fn.extend({
        attr: function(e, t) {
            return ut.access(this, ut.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ut.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return ut.access(this, ut.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = ut.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = t,
                    delete this[e]
                } catch(n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, o, a = 0,
            s = this.length,
            u = "string" == typeof e && e;
            if (ut.isFunction(e)) return this.each(function(t) {
                ut(this).addClass(e.call(this, t, this.className))
            });
            if (u) for (t = (e || "").match(ct) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(At, " ") : " ")) {
                for (o = 0; i = t[o++];) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                n.className = ut.trim(r)
            }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0,
            s = this.length,
            u = 0 === arguments.length || "string" == typeof e && e;
            if (ut.isFunction(e)) return this.each(function(t) {
                ut(this).removeClass(e.call(this, t, this.className))
            });
            if (u) for (t = (e || "").match(ct) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(At, " ") : "")) {
                for (o = 0; i = t[o++];) for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                n.className = e ? ut.trim(r) : ""
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
            r = "boolean" == typeof t;
            return this.each(ut.isFunction(e) ?
            function(n) {
                ut(this).toggleClass(e.call(this, n, this.className, t), t)
            }: function() {
                if ("string" === n) for (var i, o = 0,
                a = ut(this), s = t, u = e.match(ct) || []; i = u[o++];) s = r ? s: !a.hasClass(i),
                a[s ? "addClass": "removeClass"](i);
                else(n === U || "boolean" === n) && (this.className && ut._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "": ut._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ",
            n = 0,
            r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(At, " ").indexOf(t) >= 0) return ! 0;
            return ! 1
        },
        val: function(e) {
            var n, r, i, o = this[0];
            return arguments.length ? (i = ut.isFunction(e), this.each(function(n) {
                var o, a = ut(this);
                1 === this.nodeType && (o = i ? e.call(this, n, a.val()) : e, null == o ? o = "": "number" == typeof o ? o += "": ut.isArray(o) && (o = ut.map(o,
                function(e) {
                    return null == e ? "": e + ""
                })), r = ut.valHooks[this.type] || ut.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
            })) : o ? (r = ut.valHooks[o.type] || ut.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n: (n = o.value, "string" == typeof n ? n.replace(Lt, "") : null == n ? "": n)) : void 0
        }
    }),
    ut.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return ! t || t.specified ? e.value: e.text
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options,
                    i = e.selectedIndex,
                    o = "select-one" === e.type || 0 > i,
                    a = o ? null: [], s = o ? i + 1 : r.length, u = 0 > i ? s: o ? i: 0; s > u; u++) if (n = r[u], !(!n.selected && u !== i || (ut.support.optDisabled ? n.disabled: null !== n.getAttribute("disabled")) || n.parentNode.disabled && ut.nodeName(n.parentNode, "optgroup"))) {
                        if (t = ut(n).val(), o) return t;
                        a.push(t)
                    }
                    return a
                },
                set: function(e, t) {
                    var n = ut.makeArray(t);
                    return ut(e).find("option").each(function() {
                        this.selected = ut.inArray(ut(this).val(), n) >= 0
                    }),
                    n.length || (e.selectedIndex = -1),
                    n
                }
            }
        },
        attr: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? typeof e.getAttribute === U ? ut.prop(e, n, r) : (o = 1 !== s || !ut.isXMLDoc(e), o && (n = n.toLowerCase(), i = ut.attrHooks[n] || (Ht.test(n) ? St: Ct)), r === t ? i && o && "get" in i && null !== (a = i.get(e, n)) ? a: (typeof e.getAttribute !== U && (a = e.getAttribute(n)), null == a ? t: a) : null !== r ? i && o && "set" in i && (a = i.set(e, r, n)) !== t ? a: (e.setAttribute(n, r + ""), r) : (ut.removeAttr(e, n), t)) : void 0
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
            o = t && t.match(ct);
            if (o && 1 === e.nodeType) for (; n = o[i++];) r = ut.propFix[n] || n,
            Ht.test(n) ? !Ot && _t.test(n) ? e[ut.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : ut.attr(e, n, ""),
            e.removeAttribute(Ot ? n: r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ut.support.radioValue && "radio" === t && ut.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? (a = 1 !== s || !ut.isXMLDoc(e), a && (n = ut.propFix[n] || n, o = ut.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i: e[n] = r: o && "get" in o && null !== (i = o.get(e, n)) ? i: e[n]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : jt.test(e.nodeName) || Dt.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }),
    St = {
        get: function(e, n) {
            var r = ut.prop(e, n),
            i = "boolean" == typeof r && e.getAttribute(n),
            o = "boolean" == typeof r ? qt && Ot ? null != i: _t.test(n) ? e[ut.camelCase("default-" + n)] : !!i: e.getAttributeNode(n);
            return o && o.value !== !1 ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            return t === !1 ? ut.removeAttr(e, n) : qt && Ot || !_t.test(n) ? e.setAttribute(!Ot && ut.propFix[n] || n, n) : e[ut.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    qt && Ot || (ut.attrHooks.value = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return ut.nodeName(e, "input") ? e.defaultValue: r && r.specified ? r.value: t
        },
        set: function(e, n, r) {
            return ut.nodeName(e, "input") ? (e.defaultValue = n, t) : Ct && Ct.set(e, n, r)
        }
    }),
    Ot || (Ct = ut.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value: r.specified) ? r.value: t
        },
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)),
            i.value = n += "",
            "value" === r || n === e.getAttribute(r) ? n: t
        }
    },
    ut.attrHooks.contenteditable = {
        get: Ct.get,
        set: function(e, t, n) {
            Ct.set(e, "" === t ? !1 : t, n)
        }
    },
    ut.each(["width", "height"],
    function(e, n) {
        ut.attrHooks[n] = ut.extend(ut.attrHooks[n], {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        })
    })),
    ut.support.hrefNormalized || (ut.each(["href", "src", "width", "height"],
    function(e, n) {
        ut.attrHooks[n] = ut.extend(ut.attrHooks[n], {
            get: function(e) {
                var r = e.getAttribute(n, 2);
                return null == r ? t: r
            }
        })
    }), ut.each(["href", "src"],
    function(e, t) {
        ut.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    })),
    ut.support.style || (ut.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }),
    ut.support.optSelected || (ut.propHooks.selected = ut.extend(ut.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
        }
    })),
    ut.support.enctype || (ut.propFix.enctype = "encoding"),
    ut.support.checkOn || ut.each(["radio", "checkbox"],
    function() {
        ut.valHooks[this] = {
            get: function(e) {
                return null === e.getAttribute("value") ? "on": e.value
            }
        }
    }),
    ut.each(["radio", "checkbox"],
    function() {
        ut.valHooks[this] = ut.extend(ut.valHooks[this], {
            set: function(e, n) {
                return ut.isArray(n) ? e.checked = ut.inArray(ut(e).val(), n) >= 0 : t
            }
        })
    });
    var Ft = /^(?:input|select|textarea)$/i,
    Mt = /^key/,
    Bt = /^(?:mouse|contextmenu)|click/,
    Pt = /^(?:focusinfocus|focusoutblur)$/,
    $t = /^([^.]*)(?:\.(.+)|)$/;
    ut.event = {
        global: {},
        add: function(e, n, r, i, o) {
            var a, s, u, l, c, f, p, d, h, m, g, y = ut._data(e);
            if (y) {
                for (r.handler && (l = r, r = l.handler, o = l.selector), r.guid || (r.guid = ut.guid++), (s = y.events) || (s = y.events = {}), (f = y.handle) || (f = y.handle = function(e) {
                    return typeof ut === U || e && ut.event.triggered === e.type ? t: ut.event.dispatch.apply(f.elem, arguments)
                },
                f.elem = e), n = (n || "").match(ct) || [""], u = n.length; u--;) a = $t.exec(n[u]) || [],
                h = g = a[1],
                m = (a[2] || "").split(".").sort(),
                c = ut.event.special[h] || {},
                h = (o ? c.delegateType: c.bindType) || h,
                c = ut.event.special[h] || {},
                p = ut.extend({
                    type: h,
                    origType: g,
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && ut.expr.match.needsContext.test(o),
                    namespace: m.join(".")
                },
                l),
                (d = s[h]) || (d = s[h] = [], d.delegateCount = 0, c.setup && c.setup.call(e, i, m, f) !== !1 || (e.addEventListener ? e.addEventListener(h, f, !1) : e.attachEvent && e.attachEvent("on" + h, f))),
                c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)),
                o ? d.splice(d.delegateCount++, 0, p) : d.push(p),
                ut.event.global[h] = !0;
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, m, g = ut.hasData(e) && ut._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(ct) || [""], l = t.length; l--;) if (s = $t.exec(t[l]) || [], d = m = s[1], h = (s[2] || "").split(".").sort(), d) {
                    for (f = ut.event.special[d] || {},
                    d = (r ? f.delegateType: f.bindType) || d, p = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = p.length; o--;) a = p[o],
                    !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (p.splice(o, 1), a.selector && p.delegateCount--, f.remove && f.remove.call(e, a));
                    u && !p.length && (f.teardown && f.teardown.call(e, h, g.handle) !== !1 || ut.removeEvent(e, d, g.handle), delete c[d])
                } else for (d in c) ut.event.remove(e, d + t[l], n, r, !0);
                ut.isEmptyObject(c) && (delete g.handle, ut._removeData(e, "events"))
            }
        },
        trigger: function(n, r, i, o) {
            var a, s, u, l, c, f, p, d = [i || Y],
            h = at.call(n, "type") ? n.type: n,
            m = at.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = f = i = i || Y, 3 !== i.nodeType && 8 !== i.nodeType && !Pt.test(h + ut.event.triggered) && (h.indexOf(".") >= 0 && (m = h.split("."), h = m.shift(), m.sort()), s = 0 > h.indexOf(":") && "on" + h, n = n[ut.expando] ? n: new ut.Event(h, "object" == typeof n && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : ut.makeArray(r, [n]), c = ut.event.special[h] || {},
            o || !c.trigger || c.trigger.apply(i, r) !== !1)) {
                if (!o && !c.noBubble && !ut.isWindow(i)) {
                    for (l = c.delegateType || h, Pt.test(l + h) || (u = u.parentNode); u; u = u.parentNode) d.push(u),
                    f = u;
                    f === (i.ownerDocument || Y) && d.push(f.defaultView || f.parentWindow || e)
                }
                for (p = 0; (u = d[p++]) && !n.isPropagationStopped();) n.type = p > 1 ? l: c.bindType || h,
                a = (ut._data(u, "events") || {})[n.type] && ut._data(u, "handle"),
                a && a.apply(u, r),
                a = s && u[s],
                a && ut.acceptData(u) && a.apply && a.apply(u, r) === !1 && n.preventDefault();
                if (n.type = h, !(o || n.isDefaultPrevented() || c._default && c._default.apply(i.ownerDocument, r) !== !1 || "click" === h && ut.nodeName(i, "a") || !ut.acceptData(i) || !s || !i[h] || ut.isWindow(i))) {
                    f = i[s],
                    f && (i[s] = null),
                    ut.event.triggered = h;
                    try {
                        i[h]()
                    } catch(g) {}
                    ut.event.triggered = t,
                    f && (i[s] = f)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = ut.event.fix(e);
            var n, r, i, o, a, s = [],
            u = rt.call(arguments),
            l = (ut._data(this, "events") || {})[e.type] || [],
            c = ut.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (s = ut.event.handlers.call(this, e, l), n = 0; (o = s[n++]) && !e.isPropagationStopped();) for (e.currentTarget = o.elem, a = 0; (i = o.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((ut.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, n) {
            var r, i, o, a, s = [],
            u = n.delegateCount,
            l = e.target;
            if (u && l.nodeType && (!e.button || "click" !== e.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                for (o = [], a = 0; u > a; a++) i = n[a],
                r = i.selector + " ",
                o[r] === t && (o[r] = i.needsContext ? ut(r, this).index(l) >= 0 : ut.find(r, this, null, [l]).length),
                o[r] && o.push(i);
                o.length && s.push({
                    elem: l,
                    handlers: o
                })
            }
            return n.length > u && s.push({
                elem: this,
                handlers: n.slice(u)
            }),
            s
        },
        fix: function(e) {
            if (e[ut.expando]) return e;
            var t, n, r, i = e.type,
            o = e,
            a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Bt.test(i) ? this.mouseHooks: Mt.test(i) ? this.keyHooks: {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ut.Event(o), t = r.length; t--;) n = r[t],
            e[n] = o[n];
            return e.target || (e.target = o.srcElement || Y),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, a = n.button,
                s = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || Y, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)),
                !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement: s),
                e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                trigger: function() {
                    return ut.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                }
            },
            focus: {
                trigger: function() {
                    if (this !== Y.activeElement && this.focus) try {
                        return this.focus(),
                        !1
                    } catch(e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === Y.activeElement && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = ut.extend(new ut.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? ut.event.trigger(i, null, t) : ut.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    ut.removeEvent = Y.removeEventListener ?
    function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }: function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === U && (e[r] = null), e.detachEvent(r, n))
    },
    ut.Event = function(e, n) {
        return this instanceof ut.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? u: l) : this.type = e, n && ut.extend(this, n), this.timeStamp = e && e.timeStamp || ut.now(), this[ut.expando] = !0, t) : new ut.Event(e, n)
    },
    ut.Event.prototype = {
        isDefaultPrevented: l,
        isPropagationStopped: l,
        isImmediatePropagationStopped: l,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = u,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = u,
            e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = u,
            this.stopPropagation()
        }
    },
    ut.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(e, t) {
        ut.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                i = e.relatedTarget,
                o = e.handleObj;
                return (!i || i !== r && !ut.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t),
                n
            }
        }
    }),
    ut.support.submitBubbles || (ut.event.special.submit = {
        setup: function() {
            return ut.nodeName(this, "form") ? !1 : (ut.event.add(this, "click._submit keypress._submit",
            function(e) {
                var n = e.target,
                r = ut.nodeName(n, "input") || ut.nodeName(n, "button") ? n.form: t;
                r && !ut._data(r, "submitBubbles") && (ut.event.add(r, "submit._submit",
                function(e) {
                    e._submit_bubble = !0
                }), ut._data(r, "submitBubbles", !0))
            }), t)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ut.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return ut.nodeName(this, "form") ? !1 : (ut.event.remove(this, "._submit"), t)
        }
    }),
    ut.support.changeBubbles || (ut.event.special.change = {
        setup: function() {
            return Ft.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ut.event.add(this, "propertychange._change",
            function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), ut.event.add(this, "click._change",
            function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1),
                ut.event.simulate("change", this, e, !0)
            })), !1) : (ut.event.add(this, "beforeactivate._change",
            function(e) {
                var t = e.target;
                Ft.test(t.nodeName) && !ut._data(t, "changeBubbles") && (ut.event.add(t, "change._change",
                function(e) { ! this.parentNode || e.isSimulated || e.isTrigger || ut.event.simulate("change", this.parentNode, e, !0)
                }), ut._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function() {
            return ut.event.remove(this, "._change"),
            !Ft.test(this.nodeName)
        }
    }),
    ut.support.focusinBubbles || ut.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(e, t) {
        var n = 0,
        r = function(e) {
            ut.event.simulate(t, e.target, ut.event.fix(e), !0)
        };
        ut.event.special[t] = {
            setup: function() {
                0 === n++&&Y.addEventListener(e, r, !0)
            },
            teardown: function() {
                0 === --n && Y.removeEventListener(e, r, !0)
            }
        }
    }),
    ut.fn.extend({
        on: function(e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e) this.on(a, n, r, e[a], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = l;
            else if (!i) return this;
            return 1 === o && (s = i, i = function(e) {
                return ut().off(e),
                s.apply(this, arguments)
            },
            i.guid = s.guid || (s.guid = ut.guid++)),
            this.each(function() {
                ut.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj,
            ut(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace: i.origType, i.selector, i.handler),
            this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t),
            r === !1 && (r = l),
            this.each(function() {
                ut.event.remove(this, e, r, n)
            })
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        trigger: function(e, t) {
            return this.each(function() {
                ut.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, n) {
            var r = this[0];
            return r ? ut.event.trigger(e, n, r, !0) : t
        }
    }),
    function(e, t) {
        function n(e) {
            return ht.test(e + "")
        }
        function r() {
            var e, t = [];
            return e = function(n, r) {
                return t.push(n += " ") > k.cacheLength && delete e[t.shift()],
                e[n] = r
            }
        }
        function i(e) {
            return e[P] = !0,
            e
        }
        function o(e) {
            var t = D.createElement("div");
            try {
                return e(t)
            } catch(n) {
                return ! 1
            } finally {
                t = null
            }
        }
        function a(e, t, n, r) {
            var i, o, a, s, u, l, c, d, h, m;
            if ((t ? t.ownerDocument || t: $) !== D && j(t), t = t || D, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (!_ && !r) {
                if (i = mt.exec(e)) if (a = i[1]) {
                    if (9 === s) {
                        if (o = t.getElementById(a), !o || !o.parentNode) return n;
                        if (o.id === a) return n.push(o),
                        n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && M(t, o) && o.id === a) return n.push(o),
                    n
                } else {
                    if (i[2]) return K.apply(n, Q.call(t.getElementsByTagName(e), 0)),
                    n;
                    if ((a = i[3]) && R.getByClassName && t.getElementsByClassName) return K.apply(n, Q.call(t.getElementsByClassName(a), 0)),
                    n
                }
                if (R.qsa && !O.test(e)) {
                    if (c = !0, d = P, h = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (l = f(e), (c = t.getAttribute("id")) ? d = c.replace(vt, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", u = l.length; u--;) l[u] = d + p(l[u]);
                        h = dt.test(e) && t.parentNode || t,
                        m = l.join(",")
                    }
                    if (m) try {
                        return K.apply(n, Q.call(h.querySelectorAll(m), 0)),
                        n
                    } catch(g) {} finally {
                        c || t.removeAttribute("id")
                    }
                }
            }
            return x(e.replace(at, "$1"), t, n, r)
        }
        function s(e, t) {
            var n = t && e,
            r = n && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
            if (r) return r;
            if (n) for (; n = n.nextSibling;) if (n === t) return - 1;
            return e ? 1 : -1
        }
        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function c(e) {
            return i(function(t) {
                return t = +t,
                i(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function f(e, t) {
            var n, r, i, o, s, u, l, c = X[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, u = [], l = k.preFilter; s;) { (!n || (r = st.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(i = [])),
                n = !1,
                (r = lt.exec(s)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(at, " ")
                }), s = s.slice(n.length));
                for (o in k.filter) ! (r = pt[o].exec(s)) || l[o] && !(r = l[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length: s ? a.error(e) : X(e, u).slice(0)
        }
        function p(e) {
            for (var t = 0,
            n = e.length,
            r = ""; n > t; t++) r += e[t].value;
            return r
        }
        function d(e, t, n) {
            var r = t.dir,
            i = n && "parentNode" === r,
            o = I++;
            return t.first ?
            function(t, n, o) {
                for (; t = t[r];) if (1 === t.nodeType || i) return e(t, n, o)
            }: function(t, n, a) {
                var s, u, l, c = W + " " + o;
                if (a) {
                    for (; t = t[r];) if ((1 === t.nodeType || i) && e(t, n, a)) return ! 0
                } else for (; t = t[r];) if (1 === t.nodeType || i) if (l = t[P] || (t[P] = {}), (u = l[r]) && u[0] === c) {
                    if ((s = u[1]) === !0 || s === E) return s === !0
                } else if (u = l[r] = [c], u[1] = e(t, n, a) || E, u[1] === !0) return ! 0
            }
        }
        function h(e) {
            return e.length > 1 ?
            function(t, n, r) {
                for (var i = e.length; i--;) if (!e[i](t, n, r)) return ! 1;
                return ! 0
            }: e[0]
        }
        function m(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
            return a
        }
        function g(e, t, n, r, o, a) {
            return r && !r[P] && (r = g(r)),
            o && !o[P] && (o = g(o, a)),
            i(function(i, a, s, u) {
                var l, c, f, p = [],
                d = [],
                h = a.length,
                g = i || b(t || "*", s.nodeType ? [s] : s, []),
                y = !e || !i && t ? g: m(g, p, e, s, u),
                v = n ? o || (i ? e: h || r) ? [] : a: y;
                if (n && n(y, v, s, u), r) for (l = m(v, d), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = v.length; c--;)(f = v[c]) && l.push(y[c] = f);
                            o(null, v = [], l, u)
                        }
                        for (c = v.length; c--;)(f = v[c]) && (l = o ? Z.call(i, f) : p[c]) > -1 && (i[l] = !(a[l] = f))
                    }
                } else v = m(v === a ? v.splice(h, v.length) : v),
                o ? o(null, a, v, u) : K.apply(a, v)
            })
        }
        function y(e) {
            for (var t, n, r, i = e.length,
            o = k.relative[e[0].type], a = o || k.relative[" "], s = o ? 1 : 0, u = d(function(e) {
                return e === t
            },
            a, !0), l = d(function(e) {
                return Z.call(t, e) > -1
            },
            a, !0), c = [function(e, n, r) {
                return ! o && (r || n !== L) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
            }]; i > s; s++) if (n = k.relative[e[s].type]) c = [d(h(c), n)];
            else {
                if (n = k.filter[e[s].type].apply(null, e[s].matches), n[P]) {
                    for (r = ++s; i > r && !k.relative[e[r].type]; r++);
                    return g(s > 1 && h(c), s > 1 && p(e.slice(0, s - 1)).replace(at, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && p(e))
                }
                c.push(n)
            }
            return h(c)
        }
        function v(e, t) {
            var n = 0,
            r = t.length > 0,
            o = e.length > 0,
            s = function(i, s, u, l, c) {
                var f, p, d, h = [],
                g = 0,
                y = "0",
                v = i && [],
                b = null != c,
                x = L,
                T = i || o && k.find.TAG("*", c && s.parentNode || s),
                w = W += null == x ? 1 : Math.random() || .1;
                for (b && (L = s !== D && s, E = n); null != (f = T[y]); y++) {
                    if (o && f) {
                        for (p = 0; d = e[p++];) if (d(f, s, u)) {
                            l.push(f);
                            break
                        }
                        b && (W = w, E = ++n)
                    }
                    r && ((f = !d && f) && g--, i && v.push(f))
                }
                if (g += y, r && y !== g) {
                    for (p = 0; d = t[p++];) d(v, h, s, u);
                    if (i) {
                        if (g > 0) for (; y--;) v[y] || h[y] || (h[y] = J.call(l));
                        h = m(h)
                    }
                    K.apply(l, h),
                    b && !i && h.length > 0 && g + t.length > 1 && a.uniqueSort(l)
                }
                return b && (W = w, L = x),
                v
            };
            return r ? i(s) : s
        }
        function b(e, t, n) {
            for (var r = 0,
            i = t.length; i > r; r++) a(e, t[r], n);
            return n
        }
        function x(e, t, n, r) {
            var i, o, a, s, u, l = f(e);
            if (!r && 1 === l.length) {
                if (o = l[0] = l[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && !_ && k.relative[o[1].type]) {
                    if (t = k.find.ID(a.matches[0].replace(xt, Tt), t)[0], !t) return n;
                    e = e.slice(o.shift().value.length)
                }
                for (i = pt.needsContext.test(e) ? 0 : o.length; i--&&(a = o[i], !k.relative[s = a.type]);) if ((u = k.find[s]) && (r = u(a.matches[0].replace(xt, Tt), dt.test(o[0].type) && t.parentNode || t))) {
                    if (o.splice(i, 1), e = r.length && p(o), !e) return K.apply(n, Q.call(r, 0)),
                    n;
                    break
                }
            }
            return S(e, l)(r, t, _, n, dt.test(e)),
            n
        }
        function T() {}
        var w, E, k, N, C, S, A, L, j, D, H, _, O, q, F, M, B, P = "sizzle" + -new Date,
        $ = e.document,
        R = {},
        W = 0,
        I = 0,
        z = r(),
        X = r(),
        V = r(),
        U = typeof t,
        Y = 1 << 31,
        G = [],
        J = G.pop,
        K = G.push,
        Q = G.slice,
        Z = G.indexOf ||
        function(e) {
            for (var t = 0,
            n = this.length; n > t; t++) if (this[t] === e) return t;
            return - 1
        },
        et = "[\\x20\\t\\r\\n\\f]",
        tt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        nt = tt.replace("w", "w#"),
        rt = "([*^$|!~]?=)",
        it = "\\[" + et + "*(" + tt + ")" + et + "*(?:" + rt + et + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + nt + ")|)|)" + et + "*\\]",
        ot = ":(" + tt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + it.replace(3, 8) + ")*)|.*)\\)|)",
        at = RegExp("^" + et + "+|((?:^|[^\\\\])(?:\\\\.)*)" + et + "+$", "g"),
        st = RegExp("^" + et + "*," + et + "*"),
        lt = RegExp("^" + et + "*([\\x20\\t\\r\\n\\f>+~])" + et + "*"),
        ct = RegExp(ot),
        ft = RegExp("^" + nt + "$"),
        pt = {
            ID: RegExp("^#(" + tt + ")"),
            CLASS: RegExp("^\\.(" + tt + ")"),
            NAME: RegExp("^\\[name=['\"]?(" + tt + ")['\"]?\\]"),
            TAG: RegExp("^(" + tt.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + it),
            PSEUDO: RegExp("^" + ot),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + et + "*(even|odd|(([+-]|)(\\d*)n|)" + et + "*(?:([+-]|)" + et + "*(\\d+)|))" + et + "*\\)|)", "i"),
            needsContext: RegExp("^" + et + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + et + "*((?:-\\d)?\\d*)" + et + "*\\)|)(?=[^-]|$)", "i")
        },
        dt = /[\x20\t\r\n\f]*[+~]/,
        ht = /^[^{]+\{\s*\[native code/,
        mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        gt = /^(?:input|select|textarea|button)$/i,
        yt = /^h\d$/i,
        vt = /'|\\/g,
        bt = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
        xt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
        Tt = function(e, t) {
            var n = "0x" + t - 65536;
            return n !== n ? t: 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
        };
        try {
            Q.call($.documentElement.childNodes, 0)[0].nodeType
        } catch(wt) {
            Q = function(e) {
                for (var t, n = []; t = this[e++];) n.push(t);
                return n
            }
        }
        C = a.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName: !1
        },
        j = a.setDocument = function(e) {
            var r = e ? e.ownerDocument || e: $;
            return r !== D && 9 === r.nodeType && r.documentElement ? (D = r, H = r.documentElement, _ = C(r), R.tagNameNoComments = o(function(e) {
                return e.appendChild(r.createComment("")),
                !e.getElementsByTagName("*").length
            }), R.attributes = o(function(e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return "boolean" !== t && "string" !== t
            }), R.getByClassName = o(function(e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
                e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
            }), R.getByName = o(function(e) {
                e.id = P + 0,
                e.innerHTML = "<a name='" + P + "'></a><div name='" + P + "'></div>",
                H.insertBefore(e, H.firstChild);
                var t = r.getElementsByName && r.getElementsByName(P).length === 2 + r.getElementsByName(P + 0).length;
                return R.getIdNotName = !r.getElementById(P),
                H.removeChild(e),
                t
            }), k.attrHandle = o(function(e) {
                return e.innerHTML = "<a href='#'></a>",
                e.firstChild && typeof e.firstChild.getAttribute !== U && "#" === e.firstChild.getAttribute("href")
            }) ? {}: {
                href: function(e) {
                    return e.getAttribute("href", 2)
                },
                type: function(e) {
                    return e.getAttribute("type")
                }
            },
            R.getIdNotName ? (k.find.ID = function(e, t) {
                if (typeof t.getElementById !== U && !_) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            },
            k.filter.ID = function(e) {
                var t = e.replace(xt, Tt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (k.find.ID = function(e, n) {
                if (typeof n.getElementById !== U && !_) {
                    var r = n.getElementById(e);
                    return r ? r.id === e || typeof r.getAttributeNode !== U && r.getAttributeNode("id").value === e ? [r] : t: []
                }
            },
            k.filter.ID = function(e) {
                var t = e.replace(xt, Tt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== U && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), k.find.TAG = R.tagNameNoComments ?
            function(e, n) {
                return typeof n.getElementsByTagName !== U ? n.getElementsByTagName(e) : t
            }: function(e, t) {
                var n, r = [],
                i = 0,
                o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            },
            k.find.NAME = R.getByName &&
            function(e, n) {
                return typeof n.getElementsByName !== U ? n.getElementsByName(name) : t
            },
            k.find.CLASS = R.getByClassName &&
            function(e, n) {
                return typeof n.getElementsByClassName === U || _ ? t: n.getElementsByClassName(e)
            },
            q = [], O = [":focus"], (R.qsa = n(r.querySelectorAll)) && (o(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>",
                e.querySelectorAll("[selected]").length || O.push("\\[" + et + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
                e.querySelectorAll(":checked").length || O.push(":checked")
            }), o(function(e) {
                e.innerHTML = "<input type='hidden' i=''/>",
                e.querySelectorAll("[i^='']").length && O.push("[*^$]=" + et + "*(?:\"\"|'')"),
                e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                O.push(",.*:")
            })), (R.matchesSelector = n(F = H.matchesSelector || H.mozMatchesSelector || H.webkitMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && o(function(e) {
                R.disconnectedMatch = F.call(e, "div"),
                F.call(e, "[s!='']:x"),
                q.push("!=", ot)
            }), O = RegExp(O.join("|")), q = RegExp(q.join("|")), M = n(H.contains) || H.compareDocumentPosition ?
            function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement: e,
                r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }: function(e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return ! 0;
                return ! 1
            },
            B = H.compareDocumentPosition ?
            function(e, t) {
                var n;
                return e === t ? (A = !0, 0) : (n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & n || e.parentNode && 11 === e.parentNode.nodeType ? e === r || M($, e) ? -1 : t === r || M($, t) ? 1 : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            }: function(e, t) {
                var n, i = 0,
                o = e.parentNode,
                a = t.parentNode,
                u = [e],
                l = [t];
                if (e === t) return A = !0,
                0;
                if (!o || !a) return e === r ? -1 : t === r ? 1 : o ? -1 : a ? 1 : 0;
                if (o === a) return s(e, t);
                for (n = e; n = n.parentNode;) u.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; u[i] === l[i];) i++;
                return i ? s(u[i], l[i]) : u[i] === $ ? -1 : l[i] === $ ? 1 : 0
            },
            A = !1, [0, 0].sort(B), R.detectDuplicates = A, D) : D
        },
        a.matches = function(e, t) {
            return a(e, null, null, t)
        },
        a.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== D && j(e), t = t.replace(bt, "='$1']"), !(!R.matchesSelector || _ || q && q.test(t) || O.test(t))) try {
                var n = F.call(e, t);
                if (n || R.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch(r) {}
            return a(t, D, null, [e]).length > 0
        },
        a.contains = function(e, t) {
            return (e.ownerDocument || e) !== D && j(e),
            M(e, t)
        },
        a.attr = function(e, t) {
            var n;
            return (e.ownerDocument || e) !== D && j(e),
            _ || (t = t.toLowerCase()),
            (n = k.attrHandle[t]) ? n(e) : _ || R.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t: n && n.specified ? n.value: null
        },
        a.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        },
        a.uniqueSort = function(e) {
            var t, n = [],
            r = 1,
            i = 0;
            if (A = !R.detectDuplicates, e.sort(B), A) {
                for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return e
        },
        N = a.getText = function(e) {
            var t, n = "",
            r = 0,
            i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += N(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[r]; r++) n += N(t);
            return n
        },
        k = a.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pt,
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(xt, Tt),
                    e[3] = (e[4] || e[5] || "").replace(xt, Tt),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || a.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && a.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    return pt.CHILD.test(e[0]) ? null: (e[4] ? e[2] = e[4] : n && ct.test(n) && (t = f(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    return "*" === e ?
                    function() {
                        return ! 0
                    }: (e = e.replace(xt, Tt).toLowerCase(),
                    function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    })
                },
                CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = RegExp("(^|" + et + ")" + e + "(" + et + "|$)")) && z(e,
                    function(e) {
                        return t.test(e.className || typeof e.getAttribute !== U && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = a.attr(r, e);
                        return null == i ? "!=" === t: t ? (i += "", "=" === t ? i === n: "!=" === t ? i !== n: "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice( - n.length) === n: "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-": !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                    a = "last" !== e.slice( - 4),
                    s = "of-type" === t;
                    return 1 === r && 0 === i ?
                    function(e) {
                        return !! e.parentNode
                    }: function(t, n, u) {
                        var l, c, f, p, d, h, m = o !== a ? "nextSibling": "previousSibling",
                        g = t.parentNode,
                        y = s && t.nodeName.toLowerCase(),
                        v = !u && !s;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (f = t; f = f[m];) if (s ? f.nodeName.toLowerCase() === y: 1 === f.nodeType) return ! 1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return ! 0
                            }
                            if (h = [a ? g.firstChild: g.lastChild], a && v) {
                                for (c = g[P] || (g[P] = {}), l = c[e] || [], d = l[0] === W && l[1], p = l[0] === W && l[2], f = d && g.childNodes[d]; f = ++d && f && f[m] || (p = d = 0) || h.pop();) if (1 === f.nodeType && ++p && f === t) {
                                    c[e] = [W, d, p];
                                    break
                                }
                            } else if (v && (l = (t[P] || (t[P] = {}))[e]) && l[0] === W) p = l[1];
                            else for (; (f = ++d && f && f[m] || (p = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== y: 1 !== f.nodeType) || !++p || (v && ((f[P] || (f[P] = {}))[e] = [W, p]), f !== t)););
                            return p -= i,
                            p === r || 0 === p % r && p / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, r = k.pseudos[e] || k.setFilters[e.toLowerCase()] || a.error("unsupported pseudo: " + e);
                    return r[P] ? r(t) : r.length > 1 ? (n = [e, e, "", t], k.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, n) {
                        for (var i, o = r(e, t), a = o.length; a--;) i = Z.call(e, o[a]),
                        e[i] = !(n[i] = o[a])
                    }) : function(e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                    n = [],
                    r = S(e.replace(at, "$1"));
                    return r[P] ? i(function(e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e,
                        r(t, null, o, n),
                        !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(t) {
                        return a(e, t).length > 0
                    }
                }),
                contains: i(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || N(t)).indexOf(e) > -1
                    }
                }),
                lang: i(function(e) {
                    return ft.test(e || "") || a.error("unsupported lang: " + e),
                    e = e.replace(xt, Tt).toLowerCase(),
                    function(t) {
                        var n;
                        do
                        if (n = _ ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(),
                        n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return ! 1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === H
                },
                focus: function(e) {
                    return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return ! 1;
                    return ! 0
                },
                parent: function(e) {
                    return ! k.pseudos.empty(e)
                },
                header: function(e) {
                    return yt.test(e.nodeName)
                },
                input: function(e) {
                    return gt.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, n) {
                    return [0 > n ? n + t: n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var r = 0 > n ? n + t: n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var r = 0 > n ? n + t: n; t > ++r;) e.push(r);
                    return e
                })
            }
        };
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) k.pseudos[w] = u(w);
        for (w in {
            submit: !0,
            reset: !0
        }) k.pseudos[w] = l(w);
        S = a.compile = function(e, t) {
            var n, r = [],
            i = [],
            o = V[e + " "];
            if (!o) {
                for (t || (t = f(e)), n = t.length; n--;) o = y(t[n]),
                o[P] ? r.push(o) : i.push(o);
                o = V(e, v(i, r))
            }
            return o
        },
        k.pseudos.nth = k.pseudos.eq,
        k.filters = T.prototype = k.pseudos,
        k.setFilters = new T,
        j(),
        a.attr = ut.attr,
        ut.find = a,
        ut.expr = a.selectors,
        ut.expr[":"] = ut.expr.pseudos,
        ut.unique = a.uniqueSort,
        ut.text = a.getText,
        ut.isXMLDoc = a.isXML,
        ut.contains = a.contains
    } (e);
    var Rt = /Until$/,
    Wt = /^(?:parents|prev(?:Until|All))/,
    It = /^.[^:#\[\.,]*$/,
    zt = ut.expr.match.needsContext,
    Xt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    ut.fn.extend({
        find: function(e) {
            var t, n, r, i = this.length;
            if ("string" != typeof e) return r = this,
            this.pushStack(ut(e).filter(function() {
                for (t = 0; i > t; t++) if (ut.contains(r[t], this)) return ! 0
            }));
            for (n = [], t = 0; i > t; t++) ut.find(e, this[t], n);
            return n = this.pushStack(i > 1 ? ut.unique(n) : n),
            n.selector = (this.selector ? this.selector + " ": "") + e,
            n
        },
        has: function(e) {
            var t, n = ut(e, this),
            r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++) if (ut.contains(this, n[t])) return ! 0
            })
        },
        not: function(e) {
            return this.pushStack(f(this, e, !1))
        },
        filter: function(e) {
            return this.pushStack(f(this, e, !0))
        },
        is: function(e) {
            return !! e && ("string" == typeof e ? zt.test(e) ? ut(e, this.context).index(this[0]) >= 0 : ut.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            for (var n, r = 0,
            i = this.length,
            o = [], a = zt.test(e) || "string" != typeof e ? ut(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                if (a ? a.index(n) > -1 : ut.find.matchesSelector(n, e)) {
                    o.push(n);
                    break
                }
                n = n.parentNode
            }
            return this.pushStack(o.length > 1 ? ut.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ut.inArray(this[0], ut(e)) : ut.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? ut(e, t) : ut.makeArray(e && e.nodeType ? [e] : e),
            r = ut.merge(this.get(), n);
            return this.pushStack(ut.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
        }
    }),
    ut.fn.andSelf = ut.fn.addBack,
    ut.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t: null
        },
        parents: function(e) {
            return ut.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return ut.dir(e, "parentNode", n)
        },
        next: function(e) {
            return c(e, "nextSibling")
        },
        prev: function(e) {
            return c(e, "previousSibling")
        },
        nextAll: function(e) {
            return ut.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return ut.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return ut.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return ut.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return ut.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ut.sibling(e.firstChild)
        },
        contents: function(e) {
            return ut.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document: ut.merge([], e.childNodes)
        }
    },
    function(e, t) {
        ut.fn[e] = function(n, r) {
            var i = ut.map(this, t, n);
            return Rt.test(e) || (r = n),
            r && "string" == typeof r && (i = ut.filter(r, i)),
            i = this.length > 1 && !Xt[e] ? ut.unique(i) : i,
            this.length > 1 && Wt.test(e) && (i = i.reverse()),
            this.pushStack(i)
        }
    }),
    ut.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"),
            1 === t.length ? ut.find.matchesSelector(t[0], e) ? [t[0]] : [] : ut.find.matches(e, t)
        },
        dir: function(e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !ut(o).is(r));) 1 === o.nodeType && i.push(o),
            o = o[n];
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var Vt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    Ut = / jQuery\d+="(?:null|\d+)"/g,
    Yt = RegExp("<(?:" + Vt + ")[\\s/>]", "i"),
    Gt = /^\s+/,
    Jt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Kt = /<([\w:]+)/,
    Qt = /<tbody/i,
    Zt = /<|&#?\w+;/,
    en = /<(?:script|style|link)/i,
    tn = /^(?:checkbox|radio)$/i,
    nn = /checked\s*(?:[^=]|=\s*.checked.)/i,
    rn = /^$|\/(?:java|ecma)script/i,
    on = /^true\/(.*)/,
    an = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    sn = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ut.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    un = p(Y),
    ln = un.appendChild(Y.createElement("div"));
    sn.optgroup = sn.option,
    sn.tbody = sn.tfoot = sn.colgroup = sn.caption = sn.thead,
    sn.th = sn.td,
    ut.fn.extend({
        text: function(e) {
            return ut.access(this,
            function(e) {
                return e === t ? ut.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Y).createTextNode(e))
            },
            null, e, arguments.length)
        },
        wrapAll: function(e) {
            if (ut.isFunction(e)) return this.each(function(t) {
                ut(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = ut(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(ut.isFunction(e) ?
            function(t) {
                ut(this).wrapInner(e.call(this, t))
            }: function() {
                var t = ut(this),
                n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ut.isFunction(e);
            return this.each(function(n) {
                ut(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ut.nodeName(this, "body") || ut(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0,
            function(e) { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0,
            function(e) { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
            })
        },
        before: function() {
            return this.domManip(arguments, !1,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, !1,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = 0; null != (n = this[r]); r++)(!e || ut.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || ut.cleanData(b(n)), n.parentNode && (t && ut.contains(n.ownerDocument, n) && g(b(n, "script")), n.parentNode.removeChild(n)));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ut.cleanData(b(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && ut.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e,
            t = null == t ? e: t,
            this.map(function() {
                return ut.clone(this, e, t)
            })
        },
        html: function(e) {
            return ut.access(this,
            function(e) {
                var n = this[0] || {},
                r = 0,
                i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Ut, "") : t;
                if (! ("string" != typeof e || en.test(e) || !ut.support.htmlSerialize && Yt.test(e) || !ut.support.leadingWhitespace && Gt.test(e) || sn[(Kt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Jt, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {},
                        1 === n.nodeType && (ut.cleanData(b(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch(o) {}
                }
                n && this.empty().append(e)
            },
            null, e, arguments.length)
        },
        replaceWith: function(e) {
            var t = ut.isFunction(e);
            return t || "string" == typeof e || (e = ut(e).not(this).detach()),
            this.domManip([e], !0,
            function(e) {
                var t = this.nextSibling,
                n = this.parentNode;
                n && (ut(this).remove(), n.insertBefore(e, t))
            })
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, n, r) {
            e = tt.apply([], e);
            var i, o, a, s, u, l, c = 0,
            f = this.length,
            p = this,
            g = f - 1,
            y = e[0],
            v = ut.isFunction(y);
            if (v || !(1 >= f || "string" != typeof y || ut.support.checkClone) && nn.test(y)) return this.each(function(i) {
                var o = p.eq(i);
                v && (e[0] = y.call(this, i, n ? o.html() : t)),
                o.domManip(e, n, r)
            });
            if (f && (l = ut.buildFragment(e, this[0].ownerDocument, !1, this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
                for (n = n && ut.nodeName(i, "tr"), s = ut.map(b(l, "script"), h), a = s.length; f > c; c++) o = l,
                c !== g && (o = ut.clone(o, !0, !0), a && ut.merge(s, b(o, "script"))),
                r.call(n && ut.nodeName(this[c], "table") ? d(this[c], "tbody") : this[c], o, c);
                if (a) for (u = s[s.length - 1].ownerDocument, ut.map(s, m), c = 0; a > c; c++) o = s[c],
                rn.test(o.type || "") && !ut._data(o, "globalEval") && ut.contains(u, o) && (o.src ? ut.ajax({
                    url: o.src,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                }) : ut.globalEval((o.text || o.textContent || o.innerHTML || "").replace(an, "")));
                l = i = null
            }
            return this
        }
    }),
    ut.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(e, t) {
        ut.fn[e] = function(e) {
            for (var n, r = 0,
            i = [], o = ut(e), a = o.length - 1; a >= r; r++) n = r === a ? this: this.clone(!0),
            ut(o[r])[t](n),
            nt.apply(i, n.get());
            return this.pushStack(i)
        }
    }),
    ut.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, u = ut.contains(e.ownerDocument, e);
            if (ut.support.html5Clone || ut.isXMLDoc(e) || !Yt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (ln.innerHTML = e.outerHTML, ln.removeChild(o = ln.firstChild)), !(ut.support.noCloneEvent && ut.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ut.isXMLDoc(e))) for (r = b(o), s = b(e), a = 0; null != (i = s[a]); ++a) r[a] && v(i, r[a]);
            if (t) if (n) for (s = s || b(e), r = r || b(o), a = 0; null != (i = s[a]); a++) y(i, r[a]);
            else y(e, o);
            return r = b(o, "script"),
            r.length > 0 && g(r, !u && b(e, "script")),
            r = s = i = null,
            o
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, u, l, c, f = e.length,
            d = p(t), h = [], m = 0; f > m; m++) if (o = e[m], o || 0 === o) if ("object" === ut.type(o)) ut.merge(h, o.nodeType ? [o] : o);
            else if (Zt.test(o)) {
                for (s = s || d.appendChild(t.createElement("div")), u = (Kt.exec(o) || ["", ""])[1].toLowerCase(), c = sn[u] || sn._default, s.innerHTML = c[1] + o.replace(Jt, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
                if (!ut.support.leadingWhitespace && Gt.test(o) && h.push(t.createTextNode(Gt.exec(o)[0])), !ut.support.tbody) for (o = "table" !== u || Qt.test(o) ? "<table>" !== c[1] || Qt.test(o) ? 0 : s: s.firstChild, i = o && o.childNodes.length; i--;) ut.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
                for (ut.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = d.lastChild
            } else h.push(t.createTextNode(o));
            for (s && d.removeChild(s), ut.support.appendChecked || ut.grep(b(h, "input"), x), m = 0; o = h[m++];) if ((!r || -1 === ut.inArray(o, r)) && (a = ut.contains(o.ownerDocument, o), s = b(d.appendChild(o), "script"), a && g(s), n)) for (i = 0; o = s[i++];) rn.test(o.type || "") && n.push(o);
            return s = null,
            d
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0,
            s = ut.expando,
            u = ut.cache,
            l = ut.support.deleteExpando,
            c = ut.event.special; null != (n = e[a]); a++) if ((t || ut.acceptData(n)) && (i = n[s], o = i && u[i])) {
                if (o.events) for (r in o.events) c[r] ? ut.event.remove(n, r) : ut.removeEvent(n, r, o.handle);
                u[i] && (delete u[i], l ? delete n[s] : typeof n.removeAttribute !== U ? n.removeAttribute(s) : n[s] = null, Z.push(i))
            }
        }
    });
    var cn, fn, pn, dn = /alpha\([^)]*\)/i,
    hn = /opacity\s*=\s*([^)]*)/,
    mn = /^(top|right|bottom|left)$/,
    gn = /^(none|table(?!-c[ea]).+)/,
    yn = /^margin/,
    vn = RegExp("^(" + lt + ")(.*)$", "i"),
    bn = RegExp("^(" + lt + ")(?!px)[a-z%]+$", "i"),
    xn = RegExp("^([+-])=(" + lt + ")", "i"),
    Tn = {
        BODY: "block"
    },
    wn = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    En = {
        letterSpacing: 0,
        fontWeight: 400
    },
    kn = ["Top", "Right", "Bottom", "Left"],
    Nn = ["Webkit", "O", "Moz", "ms"];
    ut.fn.extend({
        css: function(e, n) {
            return ut.access(this,
            function(e, n, r) {
                var i, o, a = {},
                s = 0;
                if (ut.isArray(n)) {
                    for (o = fn(e), i = n.length; i > s; s++) a[n[s]] = ut.css(e, n[s], !1, o);
                    return a
                }
                return r !== t ? ut.style(e, n, r) : ut.css(e, n)
            },
            e, n, arguments.length > 1)
        },
        show: function() {
            return E(this, !0)
        },
        hide: function() {
            return E(this)
        },
        toggle: function(e) {
            var t = "boolean" == typeof e;
            return this.each(function() { (t ? e: w(this)) ? ut(this).show() : ut(this).hide()
            })
        }
    }),
    ut.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = pn(e, "opacity");
                        return "" === n ? "1": n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ut.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, u = ut.camelCase(n),
                l = e.style;
                if (n = ut.cssProps[u] || (ut.cssProps[u] = T(l, u)), s = ut.cssHooks[n] || ut.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o: l[n];
                if (a = typeof r, "string" === a && (o = xn.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(ut.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || ut.cssNumber[u] || (r += "px"), ut.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    l[n] = r
                } catch(c) {}
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, u = ut.camelCase(n);
            return n = ut.cssProps[u] || (ut.cssProps[u] = T(e.style, u)),
            s = ut.cssHooks[n] || ut.cssHooks[u],
            s && "get" in s && (a = s.get(e, !0, r)),
            a === t && (a = pn(e, n, i)),
            "normal" === a && n in En && (a = En[n]),
            "" === r || r ? (o = parseFloat(a), r === !0 || ut.isNumeric(o) ? o || 0 : a) : a
        },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o],
            e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        }
    }),
    e.getComputedStyle ? (fn = function(t) {
        return e.getComputedStyle(t, null)
    },
    pn = function(e, n, r) {
        var i, o, a, s = r || fn(e),
        u = s ? s.getPropertyValue(n) || s[n] : t,
        l = e.style;
        return s && ("" !== u || ut.contains(e.ownerDocument, e) || (u = ut.style(e, n)), bn.test(u) && yn.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)),
        u
    }) : Y.documentElement.currentStyle && (fn = function(e) {
        return e.currentStyle
    },
    pn = function(e, n, r) {
        var i, o, a, s = r || fn(e),
        u = s ? s[n] : t,
        l = e.style;
        return null == u && l && l[n] && (u = l[n]),
        bn.test(u) && !mn.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em": u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)),
        "" === u ? "auto": u
    }),
    ut.each(["height", "width"],
    function(e, n) {
        ut.cssHooks[n] = {
            get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && gn.test(ut.css(e, "display")) ? ut.swap(e, wn,
                function() {
                    return C(e, n, i)
                }) : C(e, n, i) : t
            },
            set: function(e, t, r) {
                var i = r && fn(e);
                return k(e, t, r ? N(e, n, r, ut.support.boxSizing && "border-box" === ut.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }),
    ut.support.opacity || (ut.cssHooks.opacity = {
        get: function(e, t) {
            return hn.test((t && e.currentStyle ? e.currentStyle.filter: e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": t ? "1": ""
        },
        set: function(e, t) {
            var n = e.style,
            r = e.currentStyle,
            i = ut.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")": "",
            o = r && r.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === ut.trim(o.replace(dn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = dn.test(o) ? o.replace(dn, i) : o + " " + i)
        }
    }),
    ut(function() {
        ut.support.reliableMarginRight || (ut.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? ut.swap(e, {
                    display: "inline-block"
                },
                pn, [e, "marginRight"]) : t
            }
        }),
        !ut.support.pixelPosition && ut.fn.position && ut.each(["top", "left"],
        function(e, n) {
            ut.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = pn(e, n), bn.test(r) ? ut(e).position()[n] + "px": r) : t
                }
            }
        })
    }),
    ut.expr && ut.expr.filters && (ut.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !ut.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ut.css(e, "display"))
    },
    ut.expr.filters.visible = function(e) {
        return ! ut.expr.filters.hidden(e)
    }),
    ut.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(e, t) {
        ut.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0,
                i = {},
                o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + kn[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        yn.test(e) || (ut.cssHooks[e + t].set = k)
    });
    var Cn = /%20/g,
    Sn = /\[\]$/,
    An = /\r?\n/g,
    Ln = /^(?:submit|button|image|reset|file)$/i,
    jn = /^(?:input|select|textarea|keygen)/i;
    ut.fn.extend({
        serialize: function() {
            return ut.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ut.prop(this, "elements");
                return e ? ut.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ut(this).is(":disabled") && jn.test(this.nodeName) && !Ln.test(e) && (this.checked || !tn.test(e))
            }).map(function(e, t) {
                var n = ut(this).val();
                return null == n ? null: ut.isArray(n) ? ut.map(n,
                function(e) {
                    return {
                        name: t.name,
                        value: e.replace(An, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(An, "\r\n")
                }
            }).get()
        }
    }),
    ut.param = function(e, n) {
        var r, i = [],
        o = function(e, t) {
            t = ut.isFunction(t) ? t() : null == t ? "": t,
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = ut.ajaxSettings && ut.ajaxSettings.traditional), ut.isArray(e) || e.jquery && !ut.isPlainObject(e)) ut.each(e,
        function() {
            o(this.name, this.value)
        });
        else for (r in e) L(r, e[r], n, o);
        return i.join("&").replace(Cn, "+")
    },
    ut.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(e, t) {
        ut.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    ut.fn.hover = function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    };
    var Dn, Hn, _n = ut.now(),
    On = /\?/,
    qn = /#.*$/,
    Fn = /([?&])_=[^&]*/,
    Mn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Bn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Pn = /^(?:GET|HEAD)$/,
    $n = /^\/\//,
    Rn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    Wn = ut.fn.load,
    In = {},
    zn = {},
    Xn = "*/".concat("*");
    try {
        Hn = G.href
    } catch(Vn) {
        Hn = Y.createElement("a"),
        Hn.href = "",
        Hn = Hn.href
    }
    Dn = Rn.exec(Hn.toLowerCase()) || [],
    ut.fn.load = function(e, n, r) {
        if ("string" != typeof e && Wn) return Wn.apply(this, arguments);
        var i, o, a, s = this,
        u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)),
        ut.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"),
        s.length > 0 && ut.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function(e) {
            o = arguments,
            s.html(i ? ut("<div>").append(ut.parseHTML(e)).find(i) : e)
        }).complete(r &&
        function(e, t) {
            s.each(r, o || [e.responseText, t, e])
        }),
        this
    },
    ut.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(e, t) {
        ut.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    ut.each(["get", "post"],
    function(e, n) {
        ut[n] = function(e, r, i, o) {
            return ut.isFunction(r) && (o = o || i, i = r, r = t),
            ut.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    }),
    ut.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Hn,
            type: "GET",
            isLocal: Bn.test(Dn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Xn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": ut.parseJSON,
                "text xml": ut.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? H(H(e, ut.ajaxSettings), t) : H(ut.ajaxSettings, e)
        },
        ajaxPrefilter: j(In),
        ajaxTransport: j(zn),
        ajax: function(e, n) {
            function r(e, n, r, i) {
                var o, f, v, b, T, E = n;
                2 !== x && (x = 2, u && clearTimeout(u), c = t, s = i || "", w.readyState = e > 0 ? 4 : 0, r && (b = _(p, w, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (T = w.getResponseHeader("Last-Modified"), T && (ut.lastModified[a] = T), T = w.getResponseHeader("etag"), T && (ut.etag[a] = T)), 204 === e ? (o = !0, E = "nocontent") : 304 === e ? (o = !0, E = "notmodified") : (o = O(p, b), E = o.state, f = o.data, v = o.error, o = !v)) : (v = E, (e || !E) && (E = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (n || E) + "", o ? m.resolveWith(d, [f, E, w]) : m.rejectWith(d, [w, E, v]), w.statusCode(y), y = t, l && h.trigger(o ? "ajaxSuccess": "ajaxError", [w, p, o ? f: v]), g.fireWith(d, [w, E]), l && (h.trigger("ajaxComplete", [w, p]), --ut.active || ut.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t),
            n = n || {};
            var i, o, a, s, u, l, c, f, p = ut.ajaxSetup({},
            n),
            d = p.context || p,
            h = p.context && (d.nodeType || d.jquery) ? ut(d) : ut.event,
            m = ut.Deferred(),
            g = ut.Callbacks("once memory"),
            y = p.statusCode || {},
            v = {},
            b = {},
            x = 0,
            T = "canceled",
            w = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                        if (!f) for (f = {}; t = Mn.exec(s);) f[t[1].toLowerCase()] = t[2];
                        t = f[e.toLowerCase()]
                    }
                    return null == t ? null: t
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? s: null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return x || (e = b[n] = b[n] || e, v[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return x || (p.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (2 > x) for (t in e) y[t] = [y[t], e[t]];
                    else w.always(e[w.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || T;
                    return c && c.abort(t),
                    r(0, t),
                    this
                }
            };
            if (m.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, p.url = ((e || p.url || Hn) + "").replace(qn, "").replace($n, Dn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = ut.trim(p.dataType || "*").toLowerCase().match(ct) || [""], null == p.crossDomain && (i = Rn.exec(p.url.toLowerCase()), p.crossDomain = !(!i || i[1] === Dn[1] && i[2] === Dn[2] && (i[3] || ("http:" === i[1] ? 80 : 443)) == (Dn[3] || ("http:" === Dn[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = ut.param(p.data, p.traditional)), D(In, p, n, w), 2 === x) return w;
            l = p.global,
            l && 0 === ut.active++&&ut.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !Pn.test(p.type),
            a = p.url,
            p.hasContent || (p.data && (a = p.url += (On.test(a) ? "&": "?") + p.data, delete p.data), p.cache === !1 && (p.url = Fn.test(a) ? a.replace(Fn, "$1_=" + _n++) : a + (On.test(a) ? "&": "?") + "_=" + _n++)),
            p.ifModified && (ut.lastModified[a] && w.setRequestHeader("If-Modified-Since", ut.lastModified[a]), ut.etag[a] && w.setRequestHeader("If-None-Match", ut.etag[a])),
            (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && w.setRequestHeader("Content-Type", p.contentType),
            w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Xn + "; q=0.01": "") : p.accepts["*"]);
            for (o in p.headers) w.setRequestHeader(o, p.headers[o]);
            if (p.beforeSend && (p.beforeSend.call(d, w, p) === !1 || 2 === x)) return w.abort();
            T = "abort";
            for (o in {
                success: 1,
                error: 1,
                complete: 1
            }) w[o](p[o]);
            if (c = D(zn, p, n, w)) {
                w.readyState = 1,
                l && h.trigger("ajaxSend", [w, p]),
                p.async && p.timeout > 0 && (u = setTimeout(function() {
                    w.abort("timeout")
                },
                p.timeout));
                try {
                    x = 1,
                    c.send(v, r)
                } catch(E) {
                    if (! (2 > x)) throw E;
                    r( - 1, E)
                }
            } else r( - 1, "No Transport");
            return w
        },
        getScript: function(e, n) {
            return ut.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return ut.get(e, t, n, "json")
        }
    }),
    ut.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return ut.globalEval(e),
                e
            }
        }
    }),
    ut.ajaxPrefilter("script",
    function(e) {
        e.cache === t && (e.cache = !1),
        e.crossDomain && (e.type = "GET", e.global = !1)
    }),
    ut.ajaxTransport("script",
    function(e) {
        if (e.crossDomain) {
            var n, r = Y.head || ut("head")[0] || Y.documentElement;
            return {
                send: function(t, i) {
                    n = Y.createElement("script"),
                    n.async = !0,
                    e.scriptCharset && (n.charset = e.scriptCharset),
                    n.src = e.url,
                    n.onload = n.onreadystatechange = function(e, t) { (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    },
                    r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Un = [],
    Yn = /(=)\?(?=&|$)|\?\?/;
    ut.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Un.pop() || ut.expando + "_" + _n++;
            return this[e] = !0,
            e
        }
    }),
    ut.ajaxPrefilter("json jsonp",
    function(n, r, i) {
        var o, a, s, u = n.jsonp !== !1 && (Yn.test(n.url) ? "url": "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Yn.test(n.data) && "data");
        return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ut.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Yn, "$1" + o) : n.jsonp !== !1 && (n.url += (On.test(n.url) ? "&": "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
            return s || ut.error(o + " was not called"),
            s[0]
        },
        n.dataTypes[0] = "json", a = e[o], e[o] = function() {
            s = arguments
        },
        i.always(function() {
            e[o] = a,
            n[o] && (n.jsonpCallback = r.jsonpCallback, Un.push(o)),
            s && ut.isFunction(a) && a(s[0]),
            s = a = t
        }), "script") : t
    });
    var Gn, Jn, Kn = 0,
    Qn = e.ActiveXObject &&
    function() {
        var e;
        for (e in Gn) Gn[e](t, !0)
    };
    ut.ajaxSettings.xhr = e.ActiveXObject ?
    function() {
        return ! this.isLocal && q() || F()
    }: q,
    Jn = ut.ajaxSettings.xhr(),
    ut.support.cors = !!Jn && "withCredentials" in Jn,
    Jn = ut.support.ajax = !!Jn,
    Jn && ut.ajaxTransport(function(n) {
        if (!n.crossDomain || ut.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, u = n.xhr();
                    if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) u[s] = n.xhrFields[s];
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType),
                    n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) u.setRequestHeader(s, i[s])
                    } catch(l) {}
                    u.send(n.hasContent && n.data || null),
                    r = function(e, i) {
                        var s, l, c, f;
                        try {
                            if (r && (i || 4 === u.readyState)) if (r = t, a && (u.onreadystatechange = ut.noop, Qn && delete Gn[a]), i) 4 !== u.readyState && u.abort();
                            else {
                                f = {},
                                s = u.status,
                                l = u.getAllResponseHeaders(),
                                "string" == typeof u.responseText && (f.text = u.responseText);
                                try {
                                    c = u.statusText
                                } catch(p) {
                                    c = ""
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
                            }
                        } catch(d) {
                            i || o( - 1, d)
                        }
                        f && o(s, c, f, l)
                    },
                    n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Kn, Qn && (Gn || (Gn = {},
                    ut(e).unload(Qn)), Gn[a] = r), u.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(t, !0)
                }
            }
        }
    });
    var Zn, er, tr = /^(?:toggle|show|hide)$/,
    nr = RegExp("^(?:([+-])=|)(" + lt + ")([a-z%]*)$", "i"),
    rr = /queueHooks$/,
    ir = [R],
    or = {
        "*": [function(e, t) {
            var n, r, i = this.createTween(e, t),
            o = nr.exec(t),
            a = i.cur(),
            s = +a || 0,
            u = 1,
            l = 20;
            if (o) {
                if (n = +o[2], r = o[3] || (ut.cssNumber[e] ? "": "px"), "px" !== r && s) {
                    s = ut.css(i.elem, e, !0) || n || 1;
                    do u = u || ".5",
                    s /= u,
                    ut.style(i.elem, e, s + r);
                    while (u !== (u = i.cur() / a) && 1 !== u && --l)
                }
                i.unit = r,
                i.start = s,
                i.end = o[1] ? s + (o[1] + 1) * n: n
            }
            return i
        }]
    };
    ut.Animation = ut.extend(P, {
        tweener: function(e, t) {
            ut.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0,
            i = e.length; i > r; r++) n = e[r],
            or[n] = or[n] || [],
            or[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? ir.unshift(e) : ir.push(e)
        }
    }),
    ut.Tween = W,
    W.prototype = {
        constructor: W,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (ut.cssNumber[n] ? "": "px")
        },
        cur: function() {
            var e = W.propHooks[this.prop];
            return e && e.get ? e.get(this) : W.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = W.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ut.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : W.propHooks._default.set(this),
            this
        }
    },
    W.prototype.init.prototype = W.prototype,
    W.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ut.css(e.elem, e.prop, ""), t && "auto" !== t ? t: 0) : e.elem[e.prop]
            },
            set: function(e) {
                ut.fx.step[e.prop] ? ut.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ut.cssProps[e.prop]] || ut.cssHooks[e.prop]) ? ut.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    W.propHooks.scrollTop = W.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    ut.each(["toggle", "show", "hide"],
    function(e, t) {
        var n = ut.fn[t];
        ut.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(I(t, !0), e, r, i)
        }
    }),
    ut.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(w).css("opacity", 0).show().end().animate({
                opacity: t
            },
            e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = ut.isEmptyObject(e),
            o = ut.speed(t, n, r),
            a = function() {
                var t = P(this, ut.extend({},
                e), o);
                a.finish = function() {
                    t.stop(!0)
                },
                (i || ut._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t),
            n && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0,
                n = null != e && e + "queueHooks",
                o = ut.timers,
                a = ut._data(this);
                if (n) a[n] && a[n].stop && i(a[n]);
                else for (n in a) a[n] && a[n].stop && rr.test(n) && i(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1)); (t || !r) && ut.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = ut._data(this),
                r = n[e + "queue"],
                i = n[e + "queueHooks"],
                o = ut.timers,
                a = r ? r.length: 0;
                for (n.finish = !0, ut.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    ut.each({
        slideDown: I("show"),
        slideUp: I("hide"),
        slideToggle: I("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(e, t) {
        ut.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    ut.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? ut.extend({},
        e) : {
            complete: n || !n && t || ut.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !ut.isFunction(t) && t
        };
        return r.duration = ut.fx.off ? 0 : "number" == typeof r.duration ? r.duration: r.duration in ut.fx.speeds ? ut.fx.speeds[r.duration] : ut.fx.speeds._default,
        (null == r.queue || r.queue === !0) && (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            ut.isFunction(r.old) && r.old.call(this),
            r.queue && ut.dequeue(this, r.queue)
        },
        r
    },
    ut.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return.5 - Math.cos(e * Math.PI) / 2
        }
    },
    ut.timers = [],
    ut.fx = W.prototype.init,
    ut.fx.tick = function() {
        var e, n = ut.timers,
        r = 0;
        for (Zn = ut.now(); n.length > r; r++) e = n[r],
        e() || n[r] !== e || n.splice(r--, 1);
        n.length || ut.fx.stop(),
        Zn = t
    },
    ut.fx.timer = function(e) {
        e() && ut.timers.push(e) && ut.fx.start()
    },
    ut.fx.interval = 13,
    ut.fx.start = function() {
        er || (er = setInterval(ut.fx.tick, ut.fx.interval))
    },
    ut.fx.stop = function() {
        clearInterval(er),
        er = null
    },
    ut.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    ut.fx.step = {},
    ut.expr && ut.expr.filters && (ut.expr.filters.animated = function(e) {
        return ut.grep(ut.timers,
        function(t) {
            return e === t.elem
        }).length
    }),
    ut.fn.offset = function(e) {
        if (arguments.length) return e === t ? this: this.each(function(t) {
            ut.offset.setOffset(this, e, t)
        });
        var n, r, i = {
            top: 0,
            left: 0
        },
        o = this[0],
        a = o && o.ownerDocument;
        return a ? (n = a.documentElement, ut.contains(n, o) ? (typeof o.getBoundingClientRect !== U && (i = o.getBoundingClientRect()), r = z(a), {
            top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : i) : void 0
    },
    ut.offset = {
        setOffset: function(e, t, n) {
            var r = ut.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = ut(e),
            o = i.offset(),
            a = ut.css(e, "top"),
            s = ut.css(e, "left"),
            u = ("absolute" === r || "fixed" === r) && ut.inArray("auto", [a, s]) > -1,
            l = {},
            c = {},
            f,
            p;
            u ? (c = i.position(), f = c.top, p = c.left) : (f = parseFloat(a) || 0, p = parseFloat(s) || 0),
            ut.isFunction(t) && (t = t.call(e, n, o)),
            null != t.top && (l.top = t.top - o.top + f),
            null != t.left && (l.left = t.left - o.left + p),
            "using" in t ? t.using.call(e, l) : i.css(l)
        }
    },
    ut.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                },
                r = this[0];
                return "fixed" === ut.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ut.nodeName(e[0], "html") || (n = e.offset()), n.top += ut.css(e[0], "borderTopWidth", !0), n.left += ut.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - ut.css(r, "marginTop", !0),
                    left: t.left - n.left - ut.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Y.documentElement; e && !ut.nodeName(e, "html") && "static" === ut.css(e, "position");) e = e.offsetParent;
                return e || Y.documentElement
            })
        }
    }),
    ut.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(e, n) {
        var r = /Y/.test(n);
        ut.fn[e] = function(i) {
            return ut.access(this,
            function(e, i, o) {
                var a = z(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? ut(a).scrollLeft() : o, r ? o: ut(a).scrollTop()) : e[i] = o, t)
            },
            e, i, arguments.length, null)
        }
    }),
    ut.each({
        Height: "height",
        Width: "width"
    },
    function(e, n) {
        ut.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        },
        function(r, i) {
            ut.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                s = r || (i === !0 || o === !0 ? "margin": "border");
                return ut.access(this,
                function(n, r, i) {
                    var o;
                    return ut.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? ut.css(n, r, s) : ut.style(n, r, i, s)
                },
                n, a ? i: t, a, null)
            }
        })
    }),
    e.jQuery = e.$ = ut,
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [],
    function() {
        return ut
    })
} (window),
/*!
 * EventEmitter v4.2.4 - git.io/ee
 * Oliver Caldwell
 * MIT license
 * @preserve
 */
function() {
    function e() {}
    function t(e, t) {
        for (var n = e.length; n--;) if (e[n].listener === t) return n;
        return - 1
    }
    function n(e) {
        return function t() {
            return this[e].apply(this, arguments)
        }
    }
    var r = e.prototype;
    r.getListeners = function i(e) {
        var t = this._getEvents(),
        n,
        r;
        if ("object" == typeof e) {
            n = {};
            for (r in t) t.hasOwnProperty(r) && e.test(r) && (n[r] = t[r])
        } else n = t[e] || (t[e] = []);
        return n
    },
    r.flattenListeners = function o(e) {
        var t = [],
        n;
        for (n = 0; n < e.length; n += 1) t.push(e[n].listener);
        return t
    },
    r.getListenersAsObject = function a(e) {
        var t = this.getListeners(e),
        n;
        return t instanceof Array && (n = {},
        n[e] = t),
        n || t
    },
    r.addListener = function s(e, n) {
        var r = this.getListenersAsObject(e),
        i = "object" == typeof n,
        o;
        for (o in r) r.hasOwnProperty(o) && -1 === t(r[o], n) && r[o].push(i ? n: {
            listener: n,
            once: !1
        });
        return this
    },
    r.on = n("addListener"),
    r.addOnceListener = function u(e, t) {
        return this.addListener(e, {
            listener: t,
            once: !0
        })
    },
    r.once = n("addOnceListener"),
    r.defineEvent = function l(e) {
        return this.getListeners(e),
        this
    },
    r.defineEvents = function c(e) {
        for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
        return this
    },
    r.removeListener = function f(e, n) {
        var r = this.getListenersAsObject(e),
        i,
        o;
        for (o in r) r.hasOwnProperty(o) && (i = t(r[o], n), -1 !== i && r[o].splice(i, 1));
        return this
    },
    r.off = n("removeListener"),
    r.addListeners = function p(e, t) {
        return this.manipulateListeners(!1, e, t)
    },
    r.removeListeners = function d(e, t) {
        return this.manipulateListeners(!0, e, t)
    },
    r.manipulateListeners = function h(e, t, n) {
        var r, i, o = e ? this.removeListener: this.addListener,
        a = e ? this.removeListeners: this.addListeners;
        if ("object" != typeof t || t instanceof RegExp) for (r = n.length; r--;) o.call(this, t, n[r]);
        else for (r in t) t.hasOwnProperty(r) && (i = t[r]) && ("function" == typeof i ? o.call(this, r, i) : a.call(this, r, i));
        return this
    },
    r.removeEvent = function m(e) {
        var t = typeof e,
        n = this._getEvents(),
        r;
        if ("string" === t) delete n[e];
        else if ("object" === t) for (r in n) n.hasOwnProperty(r) && e.test(r) && delete n[r];
        else delete this._events;
        return this
    },
    r.removeAllListeners = n("removeEvent"),
    r.emitEvent = function g(e, t) {
        var n = this.getListenersAsObject(e),
        r,
        i,
        o,
        a;
        for (o in n) if (n.hasOwnProperty(o)) for (i = n[o].length; i--;) r = n[o][i],
        r.once === !0 && this.removeListener(e, r.listener),
        a = r.listener.apply(this, t || []),
        a === this._getOnceReturnValue() && this.removeListener(e, r.listener);
        return this
    },
    r.trigger = n("emitEvent"),
    r.emit = function y(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    },
    r.setOnceReturnValue = function v(e) {
        return this._onceReturnValue = e,
        this
    },
    r._getOnceReturnValue = function b() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue: !0
    },
    r._getEvents = function x() {
        return this._events || (this._events = {})
    },
    "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [],
    function() {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e: this.EventEmitter = e
}.call(this),
function(e) {
    var t = document.documentElement,
    n = function() {};
    t.addEventListener ? n = function(e, t, n) {
        e.addEventListener(t, n, !1)
    }: t.attachEvent && (n = function(t, n, r) {
        t[n + r] = r.handleEvent ?
        function() {
            var t = e.event;
            t.target = t.target || t.srcElement,
            r.handleEvent.call(r, t)
        }: function() {
            var n = e.event;
            n.target = n.target || n.srcElement,
            r.call(t, n)
        },
        t.attachEvent("on" + n, t[n + r])
    });
    var r = function() {};
    t.removeEventListener ? r = function(e, t, n) {
        e.removeEventListener(t, n, !1)
    }: t.detachEvent && (r = function(e, t, n) {
        e.detachEvent("on" + t, e[t + n]);
        try {
            delete e[t + n]
        } catch(r) {
            e[t + n] = void 0
        }
    });
    var i = {
        bind: n,
        unbind: r
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", i) : e.eventie = i
} (this),
function(e) {
    function t(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }
    function n(e) {
        return "[object Array]" === u.call(e)
    }
    function r(e) {
        var t = [];
        if (n(e)) t = e;
        else if ("number" == typeof e.length) for (var r = 0,
        i = e.length; i > r; r++) t.push(e[r]);
        else t.push(e);
        return t
    }
    function i(e, n) {
        function i(e, n, a) {
            if (! (this instanceof i)) return new i(e, n);
            "string" == typeof e && (e = document.querySelectorAll(e)),
            this.elements = r(e),
            this.options = t({},
            this.options),
            "function" == typeof n ? a = n: t(this.options, n),
            a && this.on("always", a),
            this.getImages(),
            o && (this.jqDeferred = new o.Deferred);
            var s = this;
            setTimeout(function() {
                s.check()
            })
        }
        function u(e) {
            this.img = e
        }
        i.prototype = new e,
        i.prototype.options = {},
        i.prototype.getImages = function() {
            this.images = [];
            for (var e = 0,
            t = this.elements.length; t > e; e++) {
                var n = this.elements[e];
                "IMG" === n.nodeName && this.addImage(n);
                for (var r = n.querySelectorAll("img"), i = 0, o = r.length; o > i; i++) {
                    var a = r[i];
                    this.addImage(a)
                }
            }
        },
        i.prototype.addImage = function(e) {
            var t = new u(e);
            this.images.push(t)
        },
        i.prototype.check = function() {
            function e(e, i) {
                return t.options.debug && s && a.log("confirm", e, i),
                t.progress(e),
                n++,
                n === r && t.complete(),
                !0
            }
            var t = this,
            n = 0,
            r = this.images.length;
            if (this.hasAnyBroken = !1, !r) return void this.complete();
            for (var i = 0; r > i; i++) {
                var o = this.images[i];
                o.on("confirm", e),
                o.check()
            }
        },
        i.prototype.progress = function(e) {
            this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
            var t = this;
            setTimeout(function() {
                t.emit("progress", t, e),
                t.jqDeferred && t.jqDeferred.notify(t, e)
            })
        },
        i.prototype.complete = function() {
            var e = this.hasAnyBroken ? "fail": "done";
            this.isComplete = !0;
            var t = this;
            setTimeout(function() {
                if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                    var n = t.hasAnyBroken ? "reject": "resolve";
                    t.jqDeferred[n](t)
                }
            })
        },
        o && (o.fn.imagesLoaded = function(e, t) {
            var n = new i(this, e, t);
            return n.jqDeferred.promise(o(this))
        });
        var l = {};
        return u.prototype = new e,
        u.prototype.check = function() {
            var e = l[this.img.src];
            if (e) return void this.useCached(e);
            if (l[this.img.src] = this, this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
            var t = this.proxyImage = new Image;
            n.bind(t, "load", this),
            n.bind(t, "error", this),
            t.src = this.img.src
        },
        u.prototype.useCached = function(e) {
            if (e.isConfirmed) this.confirm(e.isLoaded, "cached was confirmed");
            else {
                var t = this;
                e.on("confirm",
                function(e) {
                    return t.confirm(e.isLoaded, "cache emitted confirmed"),
                    !0
                })
            }
        },
        u.prototype.confirm = function(e, t) {
            this.isConfirmed = !0,
            this.isLoaded = e,
            this.emit("confirm", this, t)
        },
        u.prototype.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        },
        u.prototype.onload = function() {
            this.confirm(!0, "onload"),
            this.unbindProxyEvents()
        },
        u.prototype.onerror = function() {
            this.confirm(!1, "onerror"),
            this.unbindProxyEvents()
        },
        u.prototype.unbindProxyEvents = function() {
            n.unbind(this.proxyImage, "load", this),
            n.unbind(this.proxyImage, "error", this)
        },
        i
    }
    var o = e.jQuery,
    a = e.console,
    s = "undefined" != typeof a,
    u = Object.prototype.toString;
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], i) : e.imagesLoaded = i(e.EventEmitter, e.eventie)
} (window),
function(e, t, n) {
    "use strict";
    function r(n) {
        if (u = t.documentElement, l = t.body, z(), yt = this, n = n || {},
        kt = n.constants || {},
        n.easing) for (var r in n.easing) U[r] = n.easing[r];
        Bt = n.edgeStrategy || "set",
        xt = {
            beforerender: n.beforerender,
            render: n.render
        },
        Tt = n.forceHeight !== !1,
        Tt && (Et = n.scale || 1),
        Nt = n.mobileDeceleration || k,
        _t = n.smoothScrolling !== !1,
        Ot = n.smoothScrollingDuration || N,
        qt = {
            targetTop: yt.getScrollTop()
        },
        Pt = (n.mobileCheck ||
        function() {
            return /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || e.opera)
        })(),
        Pt ? (bt = t.getElementById("skrollr-body"), bt && ot(), Y(), pt(u, [v, T], [b])) : pt(u, [v, x], [b]),
        yt.refresh(),
        at(e, "resize orientationchange",
        function() {
            var e = u.clientWidth,
            t = u.clientHeight; (t !== jt || e !== Lt) && (jt = t, Lt = e, Dt = !0)
        });
        var i = X();
        return function o() {
            K(),
            It = i(o)
        } (),
        yt
    }
    var i = e.skrollr = {
        get: function() {
            return yt
        },
        init: function(e) {
            return yt || new r(e)
        },
        VERSION: "0.6.17"
    },
    o = Object.prototype.hasOwnProperty,
    a = e.Math,
    s = e.getComputedStyle,
    u,
    l,
    c = "touchstart",
    f = "touchmove",
    p = "touchcancel",
    d = "touchend",
    h = "skrollable",
    m = h + "-before",
    g = h + "-between",
    y = h + "-after",
    v = "skrollr",
    b = "no-" + v,
    x = v + "-desktop",
    T = v + "-mobile",
    w = "linear",
    E = 1e3,
    k = .004,
    N = 200,
    C = "start",
    S = "end",
    A = "center",
    L = "bottom",
    j = "___skrollable_id",
    D = /^(?:input|textarea|button|select)$/i,
    H = /^\s+|\s+$/g,
    _ = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
    O = /\s*([\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
    q = /^([a-z\-]+)\[(\w+)\]$/,
    F = /-([a-z])/g,
    M = function(e, t) {
        return t.toUpperCase()
    },
    B = /[\-+]?[\d]*\.?[\d]+/g,
    P = /\{\?\}/g,
    $ = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
    R = /[a-z\-]+-gradient/g,
    W = "",
    I = "",
    z = function() {
        var e = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
        if (s) {
            var t = s(l, null);
            for (var n in t) if (W = n.match(e) || +n == n && t[n].match(e)) break;
            if (!W) return void(W = I = "");
            W = W[0],
            "-" === W.slice(0, 1) ? (I = W, W = {
                "-webkit-": "webkit",
                "-moz-": "Moz",
                "-ms-": "ms",
                "-o-": "O"
            } [W]) : I = "-" + W.toLowerCase() + "-"
        }
    },
    X = function() {
        var t = e.requestAnimationFrame || e[W.toLowerCase() + "RequestAnimationFrame"],
        n = mt();
        return (Pt || !t) && (t = function(t) {
            var r = mt() - n,
            i = a.max(0, 1e3 / 60 - r);
            return e.setTimeout(function() {
                n = mt(),
                t()
            },
            i)
        }),
        t
    },
    V = function() {
        var t = e.cancelAnimationFrame || e[W.toLowerCase() + "CancelAnimationFrame"];
        return (Pt || !t) && (t = function(t) {
            return e.clearTimeout(t)
        }),
        t
    },
    U = {
        begin: function() {
            return 0
        },
        end: function() {
            return 1
        },
        linear: function(e) {
            return e
        },
        quadratic: function(e) {
            return e * e
        },
        cubic: function(e) {
            return e * e * e
        },
        swing: function(e) {
            return - a.cos(e * a.PI) / 2 + .5
        },
        sqrt: function(e) {
            return a.sqrt(e)
        },
        outCubic: function(e) {
            return a.pow(e - 1, 3) + 1
        },
        bounce: function(e) {
            var t;
            if (.5083 >= e) t = 3;
            else if (.8489 >= e) t = 9;
            else if (.96208 >= e) t = 27;
            else {
                if (! (.99981 >= e)) return 1;
                t = 91
            }
            return 1 - a.abs(3 * a.cos(e * t * 1.028) / t)
        }
    };
    r.prototype.refresh = function(e) {
        var r, i, o = !1;
        for (e === n ? (o = !0, vt = [], Mt = 0, e = t.getElementsByTagName("*")) : e = [].concat(e), r = 0, i = e.length; i > r; r++) {
            var a = e[r],
            s = a,
            u = [],
            l = _t,
            c = Bt;
            if (a.attributes) {
                for (var f = 0,
                p = a.attributes.length; p > f; f++) {
                    var d = a.attributes[f];
                    if ("data-anchor-target" !== d.name) if ("data-smooth-scrolling" !== d.name) if ("data-edge-strategy" !== d.name) {
                        var m = d.name.match(_);
                        if (null !== m) {
                            var g = {
                                props: d.value,
                                element: a
                            };
                            u.push(g);
                            var y = m[1];
                            y = y && kt[y.substr(1)] || 0;
                            var v = m[2];
                            /p$/.test(v) ? (g.isPercentage = !0, g.offset = ((0 | v.slice(0, -1)) + y) / 100) : g.offset = (0 | v) + y;
                            var b = m[3],
                            x = m[4] || b;
                            b && b !== C && b !== S ? (g.mode = "relative", g.anchors = [b, x]) : (g.mode = "absolute", b === S ? g.isEnd = !0 : g.isPercentage || (g.frame = g.offset * Et, delete g.offset))
                        }
                    } else c = d.value;
                    else l = "off" !== d.value;
                    else if (s = t.querySelector(d.value), null === s) throw 'Unable to find anchor target "' + d.value + '"'
                }
                if (u.length) {
                    var T, w, E; ! o && j in a ? (E = a[j], T = vt[E].styleAttr, w = vt[E].classAttr) : (E = a[j] = Mt++, T = a.style.cssText, w = ft(a)),
                    vt[E] = {
                        element: a,
                        styleAttr: T,
                        classAttr: w,
                        anchorTarget: s,
                        keyFrames: u,
                        smoothScrolling: l,
                        edgeStrategy: c
                    },
                    pt(a, [h], [])
                }
            }
        }
        for (lt(), r = 0, i = e.length; i > r; r++) {
            var k = vt[e[r][j]];
            k !== n && (Q(k), et(k))
        }
        return yt
    },
    r.prototype.relativeToAbsolute = function(e, t, n) {
        var r = u.clientHeight,
        i = e.getBoundingClientRect(),
        o = i.top,
        a = i.bottom - i.top;
        return t === L ? o -= r: t === A && (o -= r / 2),
        n === L ? o += a: n === A && (o += a / 2),
        o += yt.getScrollTop(),
        o + .5 | 0
    },
    r.prototype.animateTo = function(e, t) {
        t = t || {};
        var r = mt(),
        i = yt.getScrollTop();
        return Ht = {
            startTop: i,
            topDiff: e - i,
            targetTop: e,
            duration: t.duration || E,
            startTime: r,
            endTime: r + (t.duration || E),
            easing: U[t.easing || w],
            done: t.done
        },
        Ht.topDiff || (Ht.done && Ht.done.call(yt, !1), Ht = n),
        yt
    },
    r.prototype.stopAnimateTo = function() {
        Ht && Ht.done && Ht.done.call(yt, !0),
        Ht = n
    },
    r.prototype.isAnimatingTo = function() {
        return !! Ht
    },
    r.prototype.setScrollTop = function(t, n) {
        return Ft = n === !0,
        Pt ? $t = a.min(a.max(t, 0), wt) : e.scrollTo(0, t),
        yt
    },
    r.prototype.getScrollTop = function() {
        return Pt ? $t: e.pageYOffset || u.scrollTop || l.scrollTop || 0
    },
    r.prototype.getMaxScrollTop = function() {
        return wt
    },
    r.prototype.on = function(e, t) {
        return xt[e] = t,
        yt
    },
    r.prototype.off = function(e) {
        return delete xt[e],
        yt
    },
    r.prototype.destroy = function() {
        var e = V();
        e(It),
        ut(),
        pt(u, [b], [v, x, T]);
        for (var t = 0,
        r = vt.length; r > t; t++) it(vt[t].element);
        u.style.overflow = l.style.overflow = "auto",
        u.style.height = l.style.height = "auto",
        bt && i.setStyle(bt, "transform", "none"),
        yt = n,
        bt = n,
        xt = n,
        Tt = n,
        wt = 0,
        Et = 1,
        kt = n,
        Nt = n,
        Ct = "down",
        St = -1,
        Lt = 0,
        jt = 0,
        Dt = !1,
        Ht = n,
        _t = n,
        Ot = n,
        qt = n,
        Ft = n,
        Mt = 0,
        Bt = n,
        Pt = !1,
        $t = 0,
        Rt = n
    };
    var Y = function() {
        var r, i, o, s, h, m, g, y, v, b, x, T;
        at(u, [c, f, p, d].join(" "),
        function(e) {
            var u = e.changedTouches[0];
            for (s = e.target; 3 === s.nodeType;) s = s.parentNode;
            switch (h = u.clientY, m = u.clientX, b = e.timeStamp, D.test(s.tagName) || e.preventDefault(), e.type) {
            case c:
                r && r.blur(),
                yt.stopAnimateTo(),
                r = s,
                i = g = h,
                o = m,
                v = b;
                break;
            case f:
                y = h - g,
                T = b - x,
                yt.setScrollTop($t - y, !0),
                g = h,
                x = b;
                break;
            default:
            case p:
            case d:
                var l = i - h,
                w = o - m,
                E = w * w + l * l;
                if (49 > E) {
                    if (!D.test(r.tagName)) {
                        r.focus();
                        var k = t.createEvent("MouseEvents");
                        k.initMouseEvent("click", !0, !0, e.view, 1, u.screenX, u.screenY, u.clientX, u.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null),
                        r.dispatchEvent(k)
                    }
                    return
                }
                r = n;
                var N = y / T;
                N = a.max(a.min(N, 3), -3);
                var C = a.abs(N / Nt),
                S = N * C + .5 * Nt * C * C,
                A = yt.getScrollTop() - S,
                L = 0;
                A > wt ? (L = (wt - A) / S, A = wt) : 0 > A && (L = -A / S, A = 0),
                C *= 1 - L,
                yt.animateTo(A + .5 | 0, {
                    easing: "outCubic",
                    duration: C
                })
            }
        }),
        e.scrollTo(0, 0),
        u.style.overflow = l.style.overflow = "hidden"
    },
    G = function() {
        var e, t, n, r, i, o, s, l, c;
        for (l = 0, c = vt.length; c > l; l++) for (e = vt[l], t = e.element, n = e.anchorTarget, r = e.keyFrames, i = 0, o = r.length; o > i; i++) {
            s = r[i];
            var f = s.offset;
            s.isPercentage && (f *= u.clientHeight, s.frame = f),
            "relative" === s.mode && (it(t), s.frame = yt.relativeToAbsolute(n, s.anchors[0], s.anchors[1]) - f, it(t, !0)),
            Tt && !s.isEnd && s.frame > wt && (wt = s.frame)
        }
        for (wt = a.max(wt, ct()), l = 0, c = vt.length; c > l; l++) {
            for (e = vt[l], r = e.keyFrames, i = 0, o = r.length; o > i; i++) s = r[i],
            s.isEnd && (s.frame = wt - s.offset);
            e.keyFrames.sort(gt)
        }
    },
    J = function(e, t) {
        for (var n = 0,
        r = vt.length; r > n; n++) {
            var a = vt[n],
            s = a.element,
            u = a.smoothScrolling ? e: t,
            l = a.keyFrames,
            c = l[0].frame,
            f = l[l.length - 1].frame,
            p = c > u,
            d = u > f,
            v = l[p ? 0 : l.length - 1],
            b,
            x;
            if (p || d) {
                if (p && -1 === a.edge || d && 1 === a.edge) continue;
                switch (pt(s, [p ? m: y], [m, g, y]), a.edge = p ? -1 : 1, a.edgeStrategy) {
                case "reset":
                    it(s);
                    continue;
                case "ease":
                    u = v.frame;
                    break;
                default:
                case "set":
                    var T = v.props;
                    for (b in T) o.call(T, b) && (x = rt(T[b].value), i.setStyle(s, b, x));
                    continue
                }
            } else 0 !== a.edge && (pt(s, [h, g], [m, y]), a.edge = 0);
            for (var w = 0,
            E = l.length - 1; E > w; w++) if (u >= l[w].frame && u <= l[w + 1].frame) {
                var k = l[w],
                N = l[w + 1];
                for (b in k.props) if (o.call(k.props, b)) {
                    var C = (u - k.frame) / (N.frame - k.frame);
                    C = k.props[b].easing(C),
                    x = nt(k.props[b].value, N.props[b].value, C),
                    x = rt(x),
                    i.setStyle(s, b, x)
                }
                break
            }
        }
    },
    K = function() {
        Dt && (Dt = !1, lt());
        var e = yt.getScrollTop(),
        t,
        r = mt(),
        o;
        if (Ht) r >= Ht.endTime ? (e = Ht.targetTop, t = Ht.done, Ht = n) : (o = Ht.easing((r - Ht.startTime) / Ht.duration), e = Ht.startTop + o * Ht.topDiff | 0),
        yt.setScrollTop(e, !0);
        else if (!Ft) {
            var a = qt.targetTop - e;
            a && (qt = {
                startTop: St,
                topDiff: e - St,
                targetTop: e,
                startTime: At,
                endTime: At + Ot
            }),
            r <= qt.endTime && (o = U.sqrt((r - qt.startTime) / Ot), e = qt.startTop + o * qt.topDiff | 0)
        }
        if (Pt && bt && i.setStyle(bt, "transform", "translate(0, " + -$t + "px) " + Rt), Ft || St !== e) {
            Ct = e > St ? "down": St > e ? "up": Ct,
            Ft = !1;
            var s = {
                curTop: e,
                lastTop: St,
                maxTop: wt,
                direction: Ct
            },
            u = xt.beforerender && xt.beforerender.call(yt, s);
            u !== !1 && (J(e, yt.getScrollTop()), St = e, xt.render && xt.render.call(yt, s)),
            t && t.call(yt, !1)
        }
        At = r
    },
    Q = function(e) {
        for (var t = 0,
        n = e.keyFrames.length; n > t; t++) {
            for (var r = e.keyFrames[t], i, o, a, s = {},
            u; null !== (u = O.exec(r.props));) a = u[1],
            o = u[2],
            i = a.match(q),
            null !== i ? (a = i[1], i = i[2]) : i = w,
            o = o.indexOf("!") ? Z(o) : [o.slice(1)],
            s[a] = {
                value: o,
                easing: U[i]
            };
            r.props = s
        }
    },
    Z = function(e) {
        var t = [];
        return $.lastIndex = 0,
        e = e.replace($,
        function(e) {
            return e.replace(B,
            function(e) {
                return e / 255 * 100 + "%"
            })
        }),
        I && (R.lastIndex = 0, e = e.replace(R,
        function(e) {
            return I + e
        })),
        e = e.replace(B,
        function(e) {
            return t.push( + e),
            "{?}"
        }),
        t.unshift(e),
        t
    },
    et = function(e) {
        var t = {},
        n, r;
        for (n = 0, r = e.keyFrames.length; r > n; n++) tt(e.keyFrames[n], t);
        for (t = {},
        n = e.keyFrames.length - 1; n >= 0; n--) tt(e.keyFrames[n], t)
    },
    tt = function(e, t) {
        var n;
        for (n in t) o.call(e.props, n) || (e.props[n] = t[n]);
        for (n in e.props) t[n] = e.props[n]
    },
    nt = function(e, t, n) {
        var r, i = e.length;
        if (i !== t.length) throw "Can't interpolate between \"" + e[0] + '" and "' + t[0] + '"';
        var o = [e[0]];
        for (r = 1; i > r; r++) o[r] = e[r] + (t[r] - e[r]) * n;
        return o
    },
    rt = function(e) {
        var t = 1;
        return P.lastIndex = 0,
        e[0].replace(P,
        function() {
            return e[t++]
        })
    },
    it = function(e, t) {
        e = [].concat(e);
        for (var n, r, i = 0,
        o = e.length; o > i; i++) r = e[i],
        n = vt[r[j]],
        n && (t ? (r.style.cssText = n.dirtyStyleAttr, pt(r, n.dirtyClassAttr)) : (n.dirtyStyleAttr = r.style.cssText, n.dirtyClassAttr = ft(r), r.style.cssText = n.styleAttr, pt(r, n.classAttr)))
    },
    ot = function() {
        Rt = "translateZ(0)",
        i.setStyle(bt, "transform", Rt);
        var e = s(bt),
        t = e.getPropertyValue("transform"),
        n = e.getPropertyValue(I + "transform"),
        r = t && "none" !== t || n && "none" !== n;
        r || (Rt = "")
    };
    i.setStyle = function(e, t, n) {
        var r = e.style;
        if (t = t.replace(F, M).replace("-", ""), "zIndex" === t) r[t] = isNaN(n) ? n: "" + (0 | n);
        else if ("float" === t) r.styleFloat = r.cssFloat = n;
        else try {
            W && (r[W + t.slice(0, 1).toUpperCase() + t.slice(1)] = n),
            r[t] = n
        } catch(i) {}
    };
    var at = i.addEvent = function(t, n, r) {
        var i = function(t) {
            return t = t || e.event,
            t.target || (t.target = t.srcElement),
            t.preventDefault || (t.preventDefault = function() {
                t.returnValue = !1
            }),
            r.call(this, t)
        };
        n = n.split(" ");
        for (var o, a = 0,
        s = n.length; s > a; a++) o = n[a],
        t.addEventListener ? t.addEventListener(o, r, !1) : t.attachEvent("on" + o, i),
        Wt.push({
            element: t,
            name: o,
            listener: r
        })
    },
    st = i.removeEvent = function(e, t, n) {
        t = t.split(" ");
        for (var r = 0,
        i = t.length; i > r; r++) e.removeEventListener ? e.removeEventListener(t[r], n, !1) : e.detachEvent("on" + t[r], n)
    },
    ut = function() {
        for (var e, t = 0,
        n = Wt.length; n > t; t++) e = Wt[t],
        st(e.element, e.name, e.listener);
        Wt = []
    },
    lt = function() {
        var e = yt.getScrollTop();
        wt = 0,
        Tt && !Pt && (l.style.height = "auto"),
        G(),
        Tt && !Pt && (l.style.height = wt + u.clientHeight + "px"),
        Pt ? yt.setScrollTop(a.min(yt.getScrollTop(), wt)) : yt.setScrollTop(e, !0),
        Ft = !0
    },
    ct = function() {
        var e = bt && bt.offsetHeight || 0,
        t = a.max(e, l.scrollHeight, l.offsetHeight, u.scrollHeight, u.offsetHeight, u.clientHeight);
        return t - u.clientHeight
    },
    ft = function(t) {
        var n = "className";
        return e.SVGElement && t instanceof e.SVGElement && (t = t[n], n = "baseVal"),
        t[n]
    },
    pt = function(t, r, i) {
        var o = "className";
        if (e.SVGElement && t instanceof e.SVGElement && (t = t[o], o = "baseVal"), i === n) return void(t[o] = r);
        for (var a = t[o], s = 0, u = i.length; u > s; s++) a = ht(a).replace(ht(i[s]), " ");
        a = dt(a);
        for (var l = 0,
        c = r.length; c > l; l++) - 1 === ht(a).indexOf(ht(r[l])) && (a += " " + r[l]);
        t[o] = dt(a)
    },
    dt = function(e) {
        return e.replace(H, "")
    },
    ht = function(e) {
        return " " + e + " "
    },
    mt = Date.now ||
    function() {
        return + new Date
    },
    gt = function(e, t) {
        return e.frame - t.frame
    },
    yt,
    vt,
    bt,
    xt,
    Tt,
    wt = 0,
    Et = 1,
    kt,
    Nt,
    Ct = "down",
    St = -1,
    At = mt(),
    Lt = 0,
    jt = 0,
    Dt = !1,
    Ht,
    _t,
    Ot,
    qt,
    Ft,
    Mt = 0,
    Bt,
    Pt = !1,
    $t = 0,
    Rt,
    Wt = [],
    It
} (window, document),

$(document).ready(function() {
    var e = $(window),
    t = function() {
        $(".scene_inner").css({
            height: $(window).height(),
            width: $(window).width()
        })
    };
    t(),
    e.resize(t),
    imagesLoaded("body", function() {
        var e = skrollr.init();
        $(".loading").fadeOut(),
        $(".scroll_down, .scroll_logo").fadeIn(),
        $(".all_scenes").show()
    }),
    $(".about_contact .contact, .final_contact").click(function() {
        $(".contact_page.popup").show()
    }),
    $(".contact_page .close").click(function() {
        $(".contact_page.popup").hide()
    }),
    $(".social a").click(function() {
        var e = $(this).attr("href");
        return window.open(e, "share", "height=420, width=580, top=250, left=250, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no"),
        !1
    })
});
/*  |xGv00|e8544292d61587db08c7482a15945fd0 */