!function (t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.AV = e() : t.AV = e()
}(this, function () {
  return function (t) {
    function e(r) {
      if (n[r])return n[r].exports;
      var i = n[r] = {i: r, l: !1, exports: {}};
      return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
    }

    var n = {};
    return e.m = t, e.c = n, e.i = function (t) {
      return t
    }, e.d = function (t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, {configurable: !1, enumerable: !0, get: r})
    }, e.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t.default
      } : function () {
        return t
      };
      return e.d(n, "a", n), n
    }, e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 32)
  }([function (t, e, n) {
    var r, i;
    (function () {
      function n(t) {
        function e(e, n, r, i, s, o) {
          for (; s >= 0 && s < o; s += t) {
            var a = i ? i[s] : s;
            r = n(r, e[a], a, e)
          }
          return r
        }

        return function (n, r, i, s) {
          r = A(r, s, 4);
          var o = !x(n) && O.keys(n), a = (o || n).length, u = t > 0 ? 0 : a - 1;
          return arguments.length < 3 && (i = n[o ? o[u] : u], u += t), e(n, r, i, o, u, a)
        }
      }

      function s(t) {
        return function (e, n, r) {
          n = S(n, r);
          for (var i = j(e), s = t > 0 ? 0 : i - 1; s >= 0 && s < i; s += t)if (n(e[s], s, e))return s;
          return -1
        }
      }

      function o(t, e, n) {
        return function (r, i, s) {
          var o = 0, a = j(r);
          if ("number" == typeof s)t > 0 ? o = s >= 0 ? s : Math.max(s + a, o) : a = s >= 0 ? Math.min(s + 1, a) : s + a + 1; else if (n && s && a)return s = n(r, i), r[s] === i ? s : -1;
          if (i !== i)return s = e(p.call(r, o, a), O.isNaN), s >= 0 ? s + o : -1;
          for (s = t > 0 ? o : a - 1; s >= 0 && s < a; s += t)if (r[s] === i)return s;
          return -1
        }
      }

      function a(t, e) {
        var n = R.length, r = t.constructor, i = O.isFunction(r) && r.prototype || h, s = "constructor";
        for (O.has(t, s) && !O.contains(e, s) && e.push(s); n--;)s = R[n], s in t && t[s] !== i[s] && !O.contains(e, s) && e.push(s)
      }

      var u = this, c = u._, l = Array.prototype, h = Object.prototype, f = Function.prototype, d = l.push, p = l.slice, _ = h.toString, v = h.hasOwnProperty, m = Array.isArray, y = Object.keys, g = f.bind, b = Object.create, w = function () {
      }, O = function (t) {
        return t instanceof O ? t : this instanceof O ? void(this._wrapped = t) : new O(t)
      };
      "undefined" != typeof t && t.exports && (e = t.exports = O), e._ = O, O.VERSION = "1.8.3";
      var A = function (t, e, n) {
        if (void 0 === e)return t;
        switch (null == n ? 3 : n) {
          case 1:
            return function (n) {
              return t.call(e, n)
            };
          case 2:
            return function (n, r) {
              return t.call(e, n, r)
            };
          case 3:
            return function (n, r, i) {
              return t.call(e, n, r, i)
            };
          case 4:
            return function (n, r, i, s) {
              return t.call(e, n, r, i, s)
            }
        }
        return function () {
          return t.apply(e, arguments)
        }
      }, S = function (t, e, n) {
        return null == t ? O.identity : O.isFunction(t) ? A(t, e, n) : O.isObject(t) ? O.matcher(t) : O.property(t)
      };
      O.iteratee = function (t, e) {
        return S(t, e, 1 / 0)
      };
      var E = function (t, e) {
        return function (n) {
          var r = arguments.length;
          if (r < 2 || null == n)return n;
          for (var i = 1; i < r; i++)for (var s = arguments[i], o = t(s), a = o.length, u = 0; u < a; u++) {
            var c = o[u];
            e && void 0 !== n[c] || (n[c] = s[c])
          }
          return n
        }
      }, T = function (t) {
        if (!O.isObject(t))return {};
        if (b)return b(t);
        w.prototype = t;
        var e = new w;
        return w.prototype = null, e
      }, C = function (t) {
        return function (e) {
          return null == e ? void 0 : e[t]
        }
      }, N = Math.pow(2, 53) - 1, j = C("length"), x = function (t) {
        var e = j(t);
        return "number" == typeof e && e >= 0 && e <= N
      };
      O.each = O.forEach = function (t, e, n) {
        e = A(e, n);
        var r, i;
        if (x(t))for (r = 0, i = t.length; r < i; r++)e(t[r], r, t); else {
          var s = O.keys(t);
          for (r = 0, i = s.length; r < i; r++)e(t[s[r]], s[r], t)
        }
        return t
      }, O.map = O.collect = function (t, e, n) {
        e = S(e, n);
        for (var r = !x(t) && O.keys(t), i = (r || t).length, s = Array(i), o = 0; o < i; o++) {
          var a = r ? r[o] : o;
          s[o] = e(t[a], a, t)
        }
        return s
      }, O.reduce = O.foldl = O.inject = n(1), O.reduceRight = O.foldr = n(-1), O.find = O.detect = function (t, e, n) {
        var r;
        if (r = x(t) ? O.findIndex(t, e, n) : O.findKey(t, e, n), void 0 !== r && r !== -1)return t[r]
      }, O.filter = O.select = function (t, e, n) {
        var r = [];
        return e = S(e, n), O.each(t, function (t, n, i) {
          e(t, n, i) && r.push(t)
        }), r
      }, O.reject = function (t, e, n) {
        return O.filter(t, O.negate(S(e)), n)
      }, O.every = O.all = function (t, e, n) {
        e = S(e, n);
        for (var r = !x(t) && O.keys(t), i = (r || t).length, s = 0; s < i; s++) {
          var o = r ? r[s] : s;
          if (!e(t[o], o, t))return !1
        }
        return !0
      }, O.some = O.any = function (t, e, n) {
        e = S(e, n);
        for (var r = !x(t) && O.keys(t), i = (r || t).length, s = 0; s < i; s++) {
          var o = r ? r[s] : s;
          if (e(t[o], o, t))return !0
        }
        return !1
      }, O.contains = O.includes = O.include = function (t, e, n, r) {
        return x(t) || (t = O.values(t)), ("number" != typeof n || r) && (n = 0), O.indexOf(t, e, n) >= 0
      }, O.invoke = function (t, e) {
        var n = p.call(arguments, 2), r = O.isFunction(e);
        return O.map(t, function (t) {
          var i = r ? e : t[e];
          return null == i ? i : i.apply(t, n)
        })
      }, O.pluck = function (t, e) {
        return O.map(t, O.property(e))
      }, O.where = function (t, e) {
        return O.filter(t, O.matcher(e))
      }, O.findWhere = function (t, e) {
        return O.find(t, O.matcher(e))
      }, O.max = function (t, e, n) {
        var r, i, s = -(1 / 0), o = -(1 / 0);
        if (null == e && null != t) {
          t = x(t) ? t : O.values(t);
          for (var a = 0, u = t.length; a < u; a++)r = t[a], r > s && (s = r)
        } else e = S(e, n), O.each(t, function (t, n, r) {
          i = e(t, n, r), (i > o || i === -(1 / 0) && s === -(1 / 0)) && (s = t, o = i)
        });
        return s
      }, O.min = function (t, e, n) {
        var r, i, s = 1 / 0, o = 1 / 0;
        if (null == e && null != t) {
          t = x(t) ? t : O.values(t);
          for (var a = 0, u = t.length; a < u; a++)r = t[a], r < s && (s = r)
        } else e = S(e, n), O.each(t, function (t, n, r) {
          i = e(t, n, r), (i < o || i === 1 / 0 && s === 1 / 0) && (s = t, o = i)
        });
        return s
      }, O.shuffle = function (t) {
        for (var e, n = x(t) ? t : O.values(t), r = n.length, i = Array(r), s = 0; s < r; s++)e = O.random(0, s), e !== s && (i[s] = i[e]), i[e] = n[s];
        return i
      }, O.sample = function (t, e, n) {
        return null == e || n ? (x(t) || (t = O.values(t)), t[O.random(t.length - 1)]) : O.shuffle(t).slice(0, Math.max(0, e))
      }, O.sortBy = function (t, e, n) {
        return e = S(e, n), O.pluck(O.map(t, function (t, n, r) {
          return {value: t, index: n, criteria: e(t, n, r)}
        }).sort(function (t, e) {
          var n = t.criteria, r = e.criteria;
          if (n !== r) {
            if (n > r || void 0 === n)return 1;
            if (n < r || void 0 === r)return -1
          }
          return t.index - e.index
        }), "value")
      };
      var U = function (t) {
        return function (e, n, r) {
          var i = {};
          return n = S(n, r), O.each(e, function (r, s) {
            var o = n(r, s, e);
            t(i, r, o)
          }), i
        }
      };
      O.groupBy = U(function (t, e, n) {
        O.has(t, n) ? t[n].push(e) : t[n] = [e]
      }), O.indexBy = U(function (t, e, n) {
        t[n] = e
      }), O.countBy = U(function (t, e, n) {
        O.has(t, n) ? t[n]++ : t[n] = 1
      }), O.toArray = function (t) {
        return t ? O.isArray(t) ? p.call(t) : x(t) ? O.map(t, O.identity) : O.values(t) : []
      }, O.size = function (t) {
        return null == t ? 0 : x(t) ? t.length : O.keys(t).length
      }, O.partition = function (t, e, n) {
        e = S(e, n);
        var r = [], i = [];
        return O.each(t, function (t, n, s) {
          (e(t, n, s) ? r : i).push(t)
        }), [r, i]
      }, O.first = O.head = O.take = function (t, e, n) {
        if (null != t)return null == e || n ? t[0] : O.initial(t, t.length - e)
      }, O.initial = function (t, e, n) {
        return p.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)))
      }, O.last = function (t, e, n) {
        if (null != t)return null == e || n ? t[t.length - 1] : O.rest(t, Math.max(0, t.length - e))
      }, O.rest = O.tail = O.drop = function (t, e, n) {
        return p.call(t, null == e || n ? 1 : e)
      }, O.compact = function (t) {
        return O.filter(t, O.identity)
      };
      var k = function (t, e, n, r) {
        for (var i = [], s = 0, o = r || 0, a = j(t); o < a; o++) {
          var u = t[o];
          if (x(u) && (O.isArray(u) || O.isArguments(u))) {
            e || (u = k(u, e, n));
            var c = 0, l = u.length;
            for (i.length += l; c < l;)i[s++] = u[c++]
          } else n || (i[s++] = u)
        }
        return i
      };
      O.flatten = function (t, e) {
        return k(t, e, !1)
      }, O.without = function (t) {
        return O.difference(t, p.call(arguments, 1))
      }, O.uniq = O.unique = function (t, e, n, r) {
        O.isBoolean(e) || (r = n, n = e, e = !1), null != n && (n = S(n, r));
        for (var i = [], s = [], o = 0, a = j(t); o < a; o++) {
          var u = t[o], c = n ? n(u, o, t) : u;
          e ? (o && s === c || i.push(u), s = c) : n ? O.contains(s, c) || (s.push(c), i.push(u)) : O.contains(i, u) || i.push(u)
        }
        return i
      }, O.union = function () {
        return O.uniq(k(arguments, !0, !0))
      }, O.intersection = function (t) {
        for (var e = [], n = arguments.length, r = 0, i = j(t); r < i; r++) {
          var s = t[r];
          if (!O.contains(e, s)) {
            for (var o = 1; o < n && O.contains(arguments[o], s); o++);
            o === n && e.push(s)
          }
        }
        return e
      }, O.difference = function (t) {
        var e = k(arguments, !0, !0, 1);
        return O.filter(t, function (t) {
          return !O.contains(e, t)
        })
      }, O.zip = function () {
        return O.unzip(arguments)
      }, O.unzip = function (t) {
        for (var e = t && O.max(t, j).length || 0, n = Array(e), r = 0; r < e; r++)n[r] = O.pluck(t, r);
        return n
      }, O.object = function (t, e) {
        for (var n = {}, r = 0, i = j(t); r < i; r++)e ? n[t[r]] = e[r] : n[t[r][0]] = t[r][1];
        return n
      }, O.findIndex = s(1), O.findLastIndex = s(-1), O.sortedIndex = function (t, e, n, r) {
        n = S(n, r, 1);
        for (var i = n(e), s = 0, o = j(t); s < o;) {
          var a = Math.floor((s + o) / 2);
          n(t[a]) < i ? s = a + 1 : o = a
        }
        return s
      }, O.indexOf = o(1, O.findIndex, O.sortedIndex), O.lastIndexOf = o(-1, O.findLastIndex), O.range = function (t, e, n) {
        null == e && (e = t || 0, t = 0), n = n || 1;
        for (var r = Math.max(Math.ceil((e - t) / n), 0), i = Array(r), s = 0; s < r; s++, t += n)i[s] = t;
        return i
      };
      var I = function (t, e, n, r, i) {
        if (!(r instanceof e))return t.apply(n, i);
        var s = T(t.prototype), o = t.apply(s, i);
        return O.isObject(o) ? o : s
      };
      O.bind = function (t, e) {
        if (g && t.bind === g)return g.apply(t, p.call(arguments, 1));
        if (!O.isFunction(t))throw new TypeError("Bind must be called on a function");
        var n = p.call(arguments, 2), r = function () {
          return I(t, r, e, this, n.concat(p.call(arguments)))
        };
        return r
      }, O.partial = function (t) {
        var e = p.call(arguments, 1), n = function () {
          for (var r = 0, i = e.length, s = Array(i), o = 0; o < i; o++)s[o] = e[o] === O ? arguments[r++] : e[o];
          for (; r < arguments.length;)s.push(arguments[r++]);
          return I(t, n, this, this, s)
        };
        return n
      }, O.bindAll = function (t) {
        var e, n, r = arguments.length;
        if (r <= 1)throw new Error("bindAll must be passed function names");
        for (e = 1; e < r; e++)n = arguments[e], t[n] = O.bind(t[n], t);
        return t
      }, O.memoize = function (t, e) {
        var n = function (r) {
          var i = n.cache, s = "" + (e ? e.apply(this, arguments) : r);
          return O.has(i, s) || (i[s] = t.apply(this, arguments)), i[s]
        };
        return n.cache = {}, n
      }, O.delay = function (t, e) {
        var n = p.call(arguments, 2);
        return setTimeout(function () {
          return t.apply(null, n)
        }, e)
      }, O.defer = O.partial(O.delay, O, 1), O.throttle = function (t, e, n) {
        var r, i, s, o = null, a = 0;
        n || (n = {});
        var u = function () {
          a = n.leading === !1 ? 0 : O.now(), o = null, s = t.apply(r, i), o || (r = i = null)
        };
        return function () {
          var c = O.now();
          a || n.leading !== !1 || (a = c);
          var l = e - (c - a);
          return r = this, i = arguments, l <= 0 || l > e ? (o && (clearTimeout(o), o = null), a = c, s = t.apply(r, i), o || (r = i = null)) : o || n.trailing === !1 || (o = setTimeout(u, l)), s
        }
      }, O.debounce = function (t, e, n) {
        var r, i, s, o, a, u = function () {
          var c = O.now() - o;
          c < e && c >= 0 ? r = setTimeout(u, e - c) : (r = null, n || (a = t.apply(s, i), r || (s = i = null)))
        };
        return function () {
          s = this, i = arguments, o = O.now();
          var c = n && !r;
          return r || (r = setTimeout(u, e)), c && (a = t.apply(s, i), s = i = null), a
        }
      }, O.wrap = function (t, e) {
        return O.partial(e, t)
      }, O.negate = function (t) {
        return function () {
          return !t.apply(this, arguments)
        }
      }, O.compose = function () {
        var t = arguments, e = t.length - 1;
        return function () {
          for (var n = e, r = t[e].apply(this, arguments); n--;)r = t[n].call(this, r);
          return r
        }
      }, O.after = function (t, e) {
        return function () {
          if (--t < 1)return e.apply(this, arguments)
        }
      }, O.before = function (t, e) {
        var n;
        return function () {
          return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = null), n
        }
      }, O.once = O.partial(O.before, 2);
      var P = !{toString: null}.propertyIsEnumerable("toString"), R = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
      O.keys = function (t) {
        if (!O.isObject(t))return [];
        if (y)return y(t);
        var e = [];
        for (var n in t)O.has(t, n) && e.push(n);
        return P && a(t, e), e
      }, O.allKeys = function (t) {
        if (!O.isObject(t))return [];
        var e = [];
        for (var n in t)e.push(n);
        return P && a(t, e), e
      }, O.values = function (t) {
        for (var e = O.keys(t), n = e.length, r = Array(n), i = 0; i < n; i++)r[i] = t[e[i]];
        return r
      }, O.mapObject = function (t, e, n) {
        e = S(e, n);
        for (var r, i = O.keys(t), s = i.length, o = {}, a = 0; a < s; a++)r = i[a], o[r] = e(t[r], r, t);
        return o
      }, O.pairs = function (t) {
        for (var e = O.keys(t), n = e.length, r = Array(n), i = 0; i < n; i++)r[i] = [e[i], t[e[i]]];
        return r
      }, O.invert = function (t) {
        for (var e = {}, n = O.keys(t), r = 0, i = n.length; r < i; r++)e[t[n[r]]] = n[r];
        return e
      }, O.functions = O.methods = function (t) {
        var e = [];
        for (var n in t)O.isFunction(t[n]) && e.push(n);
        return e.sort()
      }, O.extend = E(O.allKeys), O.extendOwn = O.assign = E(O.keys), O.findKey = function (t, e, n) {
        e = S(e, n);
        for (var r, i = O.keys(t), s = 0, o = i.length; s < o; s++)if (r = i[s], e(t[r], r, t))return r
      }, O.pick = function (t, e, n) {
        var r, i, s = {}, o = t;
        if (null == o)return s;
        O.isFunction(e) ? (i = O.allKeys(o), r = A(e, n)) : (i = k(arguments, !1, !1, 1), r = function (t, e, n) {
          return e in n
        }, o = Object(o));
        for (var a = 0, u = i.length; a < u; a++) {
          var c = i[a], l = o[c];
          r(l, c, o) && (s[c] = l)
        }
        return s
      }, O.omit = function (t, e, n) {
        if (O.isFunction(e))e = O.negate(e); else {
          var r = O.map(k(arguments, !1, !1, 1), String);
          e = function (t, e) {
            return !O.contains(r, e)
          }
        }
        return O.pick(t, e, n)
      }, O.defaults = E(O.allKeys, !0), O.create = function (t, e) {
        var n = T(t);
        return e && O.extendOwn(n, e), n
      }, O.clone = function (t) {
        return O.isObject(t) ? O.isArray(t) ? t.slice() : O.extend({}, t) : t
      }, O.tap = function (t, e) {
        return e(t), t
      }, O.isMatch = function (t, e) {
        var n = O.keys(e), r = n.length;
        if (null == t)return !r;
        for (var i = Object(t), s = 0; s < r; s++) {
          var o = n[s];
          if (e[o] !== i[o] || !(o in i))return !1
        }
        return !0
      };
      var D = function (t, e, n, r) {
        if (t === e)return 0 !== t || 1 / t === 1 / e;
        if (null == t || null == e)return t === e;
        t instanceof O && (t = t._wrapped), e instanceof O && (e = e._wrapped);
        var i = _.call(t);
        if (i !== _.call(e))return !1;
        switch (i) {
          case"[object RegExp]":
          case"[object String]":
            return "" + t == "" + e;
          case"[object Number]":
            return +t !== +t ? +e !== +e : 0 === +t ? 1 / +t === 1 / e : +t === +e;
          case"[object Date]":
          case"[object Boolean]":
            return +t === +e
        }
        var s = "[object Array]" === i;
        if (!s) {
          if ("object" != typeof t || "object" != typeof e)return !1;
          var o = t.constructor, a = e.constructor;
          if (o !== a && !(O.isFunction(o) && o instanceof o && O.isFunction(a) && a instanceof a) && "constructor" in t && "constructor" in e)return !1
        }
        n = n || [], r = r || [];
        for (var u = n.length; u--;)if (n[u] === t)return r[u] === e;
        if (n.push(t), r.push(e), s) {
          if (u = t.length, u !== e.length)return !1;
          for (; u--;)if (!D(t[u], e[u], n, r))return !1
        } else {
          var c, l = O.keys(t);
          if (u = l.length, O.keys(e).length !== u)return !1;
          for (; u--;)if (c = l[u], !O.has(e, c) || !D(t[c], e[c], n, r))return !1
        }
        return n.pop(), r.pop(), !0
      };
      O.isEqual = function (t, e) {
        return D(t, e)
      }, O.isEmpty = function (t) {
        return null == t || (x(t) && (O.isArray(t) || O.isString(t) || O.isArguments(t)) ? 0 === t.length : 0 === O.keys(t).length)
      }, O.isElement = function (t) {
        return !(!t || 1 !== t.nodeType)
      }, O.isArray = m || function (t) {
          return "[object Array]" === _.call(t)
        }, O.isObject = function (t) {
        var e = typeof t;
        return "function" === e || "object" === e && !!t
      }, O.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (t) {
        O["is" + t] = function (e) {
          return _.call(e) === "[object " + t + "]"
        }
      }), O.isArguments(arguments) || (O.isArguments = function (t) {
        return O.has(t, "callee")
      }), "function" != typeof/./ && "object" != typeof Int8Array && (O.isFunction = function (t) {
        return "function" == typeof t || !1
      }), O.isFinite = function (t) {
        return isFinite(t) && !isNaN(parseFloat(t))
      }, O.isNaN = function (t) {
        return O.isNumber(t) && t !== +t
      }, O.isBoolean = function (t) {
        return t === !0 || t === !1 || "[object Boolean]" === _.call(t)
      }, O.isNull = function (t) {
        return null === t
      }, O.isUndefined = function (t) {
        return void 0 === t
      }, O.has = function (t, e) {
        return null != t && v.call(t, e)
      }, O.noConflict = function () {
        return u._ = c, this
      }, O.identity = function (t) {
        return t
      }, O.constant = function (t) {
        return function () {
          return t
        }
      }, O.noop = function () {
      }, O.property = C, O.propertyOf = function (t) {
        return null == t ? function () {
        } : function (e) {
          return t[e]
        }
      }, O.matcher = O.matches = function (t) {
        return t = O.extendOwn({}, t), function (e) {
          return O.isMatch(e, t)
        }
      }, O.times = function (t, e, n) {
        var r = Array(Math.max(0, t));
        e = A(e, n, 1);
        for (var i = 0; i < t; i++)r[i] = e(i);
        return r
      }, O.random = function (t, e) {
        return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
      }, O.now = Date.now || function () {
          return (new Date).getTime()
        };
      var L = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
      }, q = O.invert(L), M = function (t) {
        var e = function (e) {
          return t[e]
        }, n = "(?:" + O.keys(t).join("|") + ")", r = RegExp(n), i = RegExp(n, "g");
        return function (t) {
          return t = null == t ? "" : "" + t, r.test(t) ? t.replace(i, e) : t
        }
      };
      O.escape = M(L), O.unescape = M(q), O.result = function (t, e, n) {
        var r = null == t ? void 0 : t[e];
        return void 0 === r && (r = n), O.isFunction(r) ? r.call(t) : r
      };
      var F = 0;
      O.uniqueId = function (t) {
        var e = ++F + "";
        return t ? t + e : e
      }, O.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
      };
      var J = /(.)^/, B = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, Q = /\\|'|\r|\n|\u2028|\u2029/g, V = function (t) {
        return "\\" + B[t]
      };
      O.template = function (t, e, n) {
        !e && n && (e = n), e = O.defaults({}, e, O.templateSettings);
        var r = RegExp([(e.escape || J).source, (e.interpolate || J).source, (e.evaluate || J).source].join("|") + "|$", "g"), i = 0, s = "__p+='";
        t.replace(r, function (e, n, r, o, a) {
          return s += t.slice(i, a).replace(Q, V), i = a + e.length, n ? s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? s += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : o && (s += "';\n" + o + "\n__p+='"), e
        }), s += "';\n", e.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
        try {
          var o = new Function(e.variable || "obj", "_", s)
        } catch (t) {
          throw t.source = s, t
        }
        var a = function (t) {
          return o.call(this, t, O)
        }, u = e.variable || "obj";
        return a.source = "function(" + u + "){\n" + s + "}", a
      }, O.chain = function (t) {
        var e = O(t);
        return e._chain = !0, e
      };
      var W = function (t, e) {
        return t._chain ? O(e).chain() : e
      };
      O.mixin = function (t) {
        O.each(O.functions(t), function (e) {
          var n = O[e] = t[e];
          O.prototype[e] = function () {
            var t = [this._wrapped];
            return d.apply(t, arguments), W(this, n.apply(O, t))
          }
        })
      }, O.mixin(O), O.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
        var e = l[t];
        O.prototype[t] = function () {
          var n = this._wrapped;
          return e.apply(n, arguments), "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0], W(this, n)
        }
      }), O.each(["concat", "join", "slice"], function (t) {
        var e = l[t];
        O.prototype[t] = function () {
          return W(this, e.apply(this._wrapped, arguments))
        }
      }), O.prototype.value = function () {
        return this._wrapped
      }, O.prototype.valueOf = O.prototype.toJSON = O.prototype.value, O.prototype.toString = function () {
        return "" + this._wrapped
      }, r = [], i = function () {
        return O
      }.apply(e, r), !(void 0 !== i && (t.exports = i))
    }).call(this)
  }, function (t, e, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, i = n(7), s = n(6)("leancloud:request"), o = n(46), a = n(2), u = n(10), c = n(3), l = n(5), h = n(0), f = n(4), d = f.getSessionToken, p = void 0, _ = {
      cn: "https://api.leancloud.cn",
      us: "https://us-api.leancloud.cn"
    }, v = function (t, e) {
      var n = (new Date).getTime(), r = o(n + t);
      return e ? r + "," + n + ",master" : r + "," + n
    }, m = 0, y = function (t, e, n) {
      var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = arguments[4], u = m++;
      return s("request(" + u + ")", t, e, n, r), new a(function (a, c) {
        var l = i(t, e).set(r).send(n);
        o && l.on("progress", o), l.end(function (t, e) {
          return e && s("response(" + u + ")", e.status, e.body || e.text, e.header), t ? (e && (t.statusCode = e.status, t.responseText = e.text, t.response = e.body), c(t)) : a(e.body)
        })
      })
    }, g = function (t, e) {
      e ? t["X-LC-Sign"] = v(l.applicationKey) : t["X-LC-Key"] = l.applicationKey
    }, b = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = arguments[1], n = {
        "X-LC-Id": l.applicationId,
        "Content-Type": "application/json;charset=UTF-8"
      }, r = !1;
      return "boolean" == typeof t.useMasterKey ? r = t.useMasterKey : "boolean" == typeof l._useMasterKey && (r = l._useMasterKey), r ? l.masterKey ? e ? n["X-LC-Sign"] = v(l.masterKey, !0) : n["X-LC-Key"] = l.masterKey + ",master" : (console.warn("masterKey is not set, fall back to use appKey"), g(n, e)) : g(n, e), l.hookKey && (n["X-LC-Hook-Key"] = l.hookKey), null !== l._config.applicationProduction && (n["X-LC-Prod"] = String(l._config.applicationProduction)), n["X-LC-UA"] = l._config.userAgent, a.resolve().then(function () {
        var e = d(t);
        if (e)n["X-LC-Session"] = e; else if (!l._config.disableCurrentUser)return l.User.currentAsync().then(function (t) {
          return t && t._sessionToken && (n["X-LC-Session"] = t._sessionToken), n
        });
        return n
      })
    }, w = function (t, e, n, i, s) {
      l.serverURL && (l._config.APIServerURL = l.serverURL, console.warn("Please use AV._config.APIServerURL to replace AV.serverURL, and it is an internal interface."));
      var o = l._config.APIServerURL || _.cn;
      if ("/" !== o.charAt(o.length - 1) && (o += "/"), o += "1.1/" + t, e && (o += "/" + e), n && (o += "/" + n), "users" !== t && "classes" !== t || !s || (o += "?", s._fetchWhenSave && (delete s._fetchWhenSave, o += "&new=true"), s._where && (o += "&where=" + encodeURIComponent(JSON.stringify(s._where)), delete s._where)), "get" === i.toLowerCase()) {
        o.indexOf("?") === -1 && (o += "?");
        for (var a in s)"object" === r(s[a]) && (s[a] = JSON.stringify(s[a])), o += "&" + a + "=" + encodeURIComponent(s[a])
      }
      return o
    }, O = function (t, e) {
      return "number" != typeof e && (e = 3600), u.setAsync("APIServerURL", t, 1e3 * e)
    }, A = function (t) {
      return new a(function (e, n) {
        if (410 === t.statusCode)O(t.response.api_server, t.response.ttl).then(function () {
          e(t.response.location)
        }).catch(n); else {
          var r = {code: t.code || -1, error: t.message || t.responseText};
          if (t.response && t.response.code)r = t.response; else if (t.responseText)try {
            r = JSON.parse(t.responseText)
          } catch (t) {
          }
          n(new c(r.code, r.error))
        }
      })
    }, S = function (t) {
      l._config.APIServerURL = "https://" + t;
      var e = h.findKey(_, function (t) {
        return t === l._config.APIServerURL
      });
      e && (l._config.region = e)
    }, E = function () {
      var t = "https://app-router.leancloud.cn/1/route?appId=" + l.applicationId;
      return y("get", t).then(function (t) {
        if (t.api_server)return S(t.api_server), O(t.api_server, t.ttl)
      }, function (t) {
        if (t.statusCode >= 400 && t.statusCode < 500)throw t
      })
    }, T = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "cn";
      p = new a(function (e, n) {
        return l._config.APIServerURL ? void e() : "cn" === t ? u.getAsync("APIServerURL").then(function (t) {
          return t ? void S(t) : E()
        }).then(function () {
          e()
        }).catch(function (t) {
          n(t)
        }) : (l._config.region = t, l._config.APIServerURL = _[t], e(), void 0)
      })
    }, C = function (t, e, n, r) {
      var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, s = arguments[5];
      if (!l.applicationId)throw new Error("You must specify your applicationId using AV.init()");
      if (!l.applicationKey && !l.masterKey)throw new Error("You must specify a AppKey using AV.init()");
      return p ? p.then(function () {
        var o = w(t, e, n, r, i);
        return b(s, "bigquery" !== t).then(function (t) {
          return y(r, o, i, t).then(null, function (e) {
            return A(e).then(function (e) {
              return y(r, e, i, t)
            })
          })
        })
      }) : a.reject(new Error("Not initialized"))
    };
    t.exports = {ajax: y, request: C, setServerUrlByRegion: T}
  }, function (t, e, n) {
    "use strict";
    var r = (n(0), n(43).Promise);
    r._continueWhile = function (t, e) {
      return t() ? e().then(function () {
        return r._continueWhile(t, e)
      }) : r.resolve()
    }, t.exports = r
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      var n = new Error(e);
      return n.code = t, n
    }

    var i = n(0);
    i.extend(r, {
      OTHER_CAUSE: -1,
      INTERNAL_SERVER_ERROR: 1,
      CONNECTION_FAILED: 100,
      OBJECT_NOT_FOUND: 101,
      INVALID_QUERY: 102,
      INVALID_CLASS_NAME: 103,
      MISSING_OBJECT_ID: 104,
      INVALID_KEY_NAME: 105,
      INVALID_POINTER: 106,
      INVALID_JSON: 107,
      COMMAND_UNAVAILABLE: 108,
      NOT_INITIALIZED: 109,
      INCORRECT_TYPE: 111,
      INVALID_CHANNEL_NAME: 112,
      PUSH_MISCONFIGURED: 115,
      OBJECT_TOO_LARGE: 116,
      OPERATION_FORBIDDEN: 119,
      CACHE_MISS: 120,
      INVALID_NESTED_KEY: 121,
      INVALID_FILE_NAME: 122,
      INVALID_ACL: 123,
      TIMEOUT: 124,
      INVALID_EMAIL_ADDRESS: 125,
      MISSING_CONTENT_TYPE: 126,
      MISSING_CONTENT_LENGTH: 127,
      INVALID_CONTENT_LENGTH: 128,
      FILE_TOO_LARGE: 129,
      FILE_SAVE_ERROR: 130,
      FILE_DELETE_ERROR: 153,
      DUPLICATE_VALUE: 137,
      INVALID_ROLE_NAME: 139,
      EXCEEDED_QUOTA: 140,
      SCRIPT_FAILED: 141,
      VALIDATION_ERROR: 142,
      INVALID_IMAGE_DATA: 150,
      UNSAVED_FILE_ERROR: 151,
      INVALID_PUSH_TIME_ERROR: 152,
      USERNAME_MISSING: 200,
      PASSWORD_MISSING: 201,
      USERNAME_TAKEN: 202,
      EMAIL_TAKEN: 203,
      EMAIL_MISSING: 204,
      EMAIL_NOT_FOUND: 205,
      SESSION_MISSING: 206,
      MUST_CREATE_USER_THROUGH_SIGNUP: 207,
      ACCOUNT_ALREADY_LINKED: 208,
      LINKED_ID_MISSING: 250,
      INVALID_LINKED_SESSION: 251,
      UNSUPPORTED_SERVICE: 252,
      X_DOMAIN_REQUEST: 602
    }), t.exports = r
  }, function (t, e, n) {
    "use strict";
    var r = n(0), i = function (t) {
      return r.isNull(t) || r.isUndefined(t)
    }, s = function (t) {
      return r.isArray(t) ? t : void 0 === t || null === t ? [] : [t]
    }, o = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.keys, n = t.include, r = t.includeACL, i = {};
      return e && (i.keys = s(e).join(",")), n && (i.include = s(n).join(",")), r && (i.returnACL = r), i
    }, a = function (t) {
      return t.sessionToken ? t.sessionToken : t.user && "function" == typeof t.user.getSessionToken ? t.user.getSessionToken() : void 0
    }, u = function (t) {
      return function (e) {
        return t(e), e
      }
    };
    t.exports = {isNullOrUndefined: i, ensureArray: s, transformFetchOptions: o, getSessionToken: a, tap: u}
  }, function (t, e, n) {
    "use strict";
    (function (e) {
      var r = n(0), i = n(34), s = n(4), o = s.isNullOrUndefined, a = e.AV || {};
      a._config = a._config || {};
      var u = a._config;
      r.extend(u, {
        region: "cn",
        APIServerURL: u.APIServerURL || "",
        disableCurrentUser: !1,
        userAgent: i,
        applicationProduction: null
      });
      var c = function () {
      }, l = function (t, e, n) {
        var i;
        return i = e && e.hasOwnProperty("constructor") ? e.constructor : function () {
          t.apply(this, arguments)
        }, r.extend(i, t), c.prototype = t.prototype, i.prototype = new c, e && r.extend(i.prototype, e), n && r.extend(i, n), i.prototype.constructor = i, i.__super__ = t.prototype, i
      };
      a.setProduction = function (t) {
        o(t) ? u.applicationProduction = null : u.applicationProduction = t ? 1 : 0
      }, a._getAVPath = function (t) {
        if (!a.applicationId)throw new Error("You need to call AV.initialize before using AV.");
        if (t || (t = ""), !r.isString(t))throw new Error("Tried to get a localStorage path that wasn't a String.");
        return "/" === t[0] && (t = t.substring(1)), "AV/" + a.applicationId + "/" + t
      }, a._installationId = null, a._getInstallationId = function () {
        if (a._installationId)return a.Promise.resolve(a._installationId);
        var t = a._getAVPath("installationId");
        return a.localStorage.getItemAsync(t).then(function (e) {
          if (a._installationId = e, a._installationId)return e;
          var n = function () {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
          };
          return a._installationId = n() + n() + "-" + n() + "-" + n() + "-" + n() + "-" + n() + n() + n(), a.localStorage.setItemAsync(t, a._installationId)
        })
      }, a._parseDate = function (t) {
        var e = new RegExp("^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})T([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})(.([0-9]+))?Z$"), n = e.exec(t);
        if (!n)return null;
        var r = n[1] || 0, i = (n[2] || 1) - 1, s = n[3] || 0, o = n[4] || 0, a = n[5] || 0, u = n[6] || 0, c = n[8] || 0;
        return new Date(Date.UTC(r, i, s, o, a, u, c))
      }, a._extend = function (t, e) {
        var n = l(this, t, e);
        return n.extend = this.extend, n
      }, a._getValue = function (t, e) {
        return t && t[e] ? r.isFunction(t[e]) ? t[e]() : t[e] : null
      }, a._encode = function (t, e, n) {
        if (t instanceof a.Object) {
          if (n)throw new Error("AV.Objects not allowed here");
          if (!e || r.include(e, t) || !t._hasData)return t._toPointer();
          if (!t.dirty())return e = e.concat(t), a._encode(t._toFullJSON(e), e, n);
          throw new Error("Tried to save an object with a pointer to a new, unsaved object.")
        }
        if (t instanceof a.ACL)return t.toJSON();
        if (r.isDate(t))return {__type: "Date", iso: t.toJSON()};
        if (t instanceof a.GeoPoint)return t.toJSON();
        if (r.isArray(t))return r.map(t, function (t) {
          return a._encode(t, e, n)
        });
        if (r.isRegExp(t))return t.source;
        if (t instanceof a.Relation)return t.toJSON();
        if (t instanceof a.Op)return t.toJSON();
        if (t instanceof a.File) {
          if (!t.url() && !t.id)throw new Error("Tried to save an object containing an unsaved file.");
          return t._toFullJSON()
        }
        return r.isObject(t) ? r.mapObject(t, function (t, r) {
          return a._encode(t, e, n)
        }) : t
      }, a._decode = function (t, e) {
        if (!r.isObject(t) || r.isDate(t))return t;
        if (r.isArray(t))return r.map(t, function (t) {
          return a._decode(t)
        });
        if (t instanceof a.Object)return t;
        if (t instanceof a.File)return t;
        if (t instanceof a.Op)return t;
        if (t instanceof a.GeoPoint)return t;
        if (t instanceof a.ACL)return t;
        if ("ACL" === e)return new a.ACL(t);
        if (t.__op)return a.Op._decode(t);
        var n;
        if ("Pointer" === t.__type) {
          n = t.className;
          var i = a.Object._create(n, void 0, void 0, !0);
          if (Object.keys(t).length > 3) {
            var s = r.clone(t);
            delete s.__type, delete s.className, i._finishFetch(s, !0)
          } else i._finishFetch({objectId: t.objectId}, !1);
          return i
        }
        if ("Object" === t.__type) {
          n = t.className;
          var o = r.clone(t);
          delete o.__type, delete o.className;
          var u = a.Object._create(n, void 0, void 0, !0);
          return u._finishFetch(o, !0), u
        }
        if ("Date" === t.__type)return a._parseDate(t.iso);
        if ("GeoPoint" === t.__type)return new a.GeoPoint({latitude: t.latitude, longitude: t.longitude});
        if ("Relation" === t.__type) {
          if (!e)throw new Error("key missing decoding a Relation");
          var c = new a.Relation(null, e);
          return c.targetClassName = t.className, c
        }
        if ("File" === t.__type) {
          var l = new a.File(t.name), h = r.clone(t);
          return delete h.__type, l._finishFetch(h), l
        }
        return r.mapObject(t, a._decode)
      }, a._encodeObjectOrArray = function (t) {
        var e = function (t) {
          return t && t._toFullJSON && (t = t._toFullJSON([])), r.mapObject(t, function (t) {
            return a._encode(t, [])
          })
        };
        return r.isArray(t) ? t.map(function (t) {
          return e(t)
        }) : e(t)
      }, a._arrayEach = r.each, a._traverse = function (t, e, n) {
        if (t instanceof a.Object) {
          if (n = n || [], r.indexOf(n, t) >= 0)return;
          return n.push(t), a._traverse(t.attributes, e, n), e(t)
        }
        return t instanceof a.Relation || t instanceof a.File ? e(t) : r.isArray(t) ? (r.each(t, function (r, i) {
          var s = a._traverse(r, e, n);
          s && (t[i] = s)
        }), e(t)) : r.isObject(t) ? (a._each(t, function (r, i) {
          var s = a._traverse(r, e, n);
          s && (t[i] = s)
        }), e(t)) : e(t)
      }, a._objectEach = a._each = function (t, e) {
        r.isObject(t) ? r.each(r.keys(t), function (n) {
          e(t[n], n)
        }) : r.each(t, e)
      }, t.exports = a
    }).call(e, n(9))
  }, function (t, e, n) {
    function r() {
      return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
    }

    function i(t) {
      var n = this.useColors;
      if (t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff), n) {
        var r = "color: " + this.color;
        t.splice(1, 0, r, "color: inherit");
        var i = 0, s = 0;
        t[0].replace(/%[a-zA-Z%]/g, function (t) {
          "%%" !== t && (i++, "%c" === t && (s = i))
        }), t.splice(s, 0, r)
      }
    }

    function s() {
      return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
    }

    function o(t) {
      try {
        null == t ? e.storage.removeItem("debug") : e.storage.debug = t
      } catch (t) {
      }
    }

    function a() {
      var t;
      try {
        t = e.storage.debug
      } catch (t) {
      }
      return !t && "undefined" != typeof process && "env" in process && (t = process.env.DEBUG), t
    }

    function u() {
      try {
        return window.localStorage
      } catch (t) {
      }
    }

    e = t.exports = n(42), e.log = s, e.formatArgs = i, e.save = o, e.load = a, e.useColors = r, e.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : u(), e.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], e.formatters.j = function (t) {
      try {
        return JSON.stringify(t)
      } catch (t) {
        return "[UnexpectedJSONParseError]: " + t.message
      }
    }, e.enable(a())
  }, function (t, e, n) {
    function r() {
    }

    function i(t) {
      if (!_(t))return t;
      var e = [];
      for (var n in t)s(e, n, t[n]);
      return e.join("&")
    }

    function s(t, e, n) {
      if (null != n)if (Array.isArray(n))n.forEach(function (n) {
        s(t, e, n)
      }); else if (_(n))for (var r in n)s(t, e + "[" + r + "]", n[r]); else t.push(encodeURIComponent(e) + "=" + encodeURIComponent(n)); else null === n && t.push(encodeURIComponent(e))
    }

    function o(t) {
      for (var e, n, r = {}, i = t.split("&"), s = 0, o = i.length; s < o; ++s)e = i[s], n = e.indexOf("="), n == -1 ? r[decodeURIComponent(e)] = "" : r[decodeURIComponent(e.slice(0, n))] = decodeURIComponent(e.slice(n + 1));
      return r
    }

    function a(t) {
      var e, n, r, i, s = t.split(/\r?\n/), o = {};
      s.pop();
      for (var a = 0, u = s.length; a < u; ++a)n = s[a], e = n.indexOf(":"), r = n.slice(0, e).toLowerCase(), i = b(n.slice(e + 1)), o[r] = i;
      return o
    }

    function u(t) {
      return /[\/+]json\b/.test(t)
    }

    function c(t) {
      this.req = t, this.xhr = this.req.xhr, this.text = "HEAD" != this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || "undefined" == typeof this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText;
      var e = this.xhr.status;
      1223 === e && (e = 204), this._setStatusProperties(e), this.header = this.headers = a(this.xhr.getAllResponseHeaders()), this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), null === this.text && t._responseType ? this.body = this.xhr.response : this.body = "HEAD" != this.req.method ? this._parseBody(this.text ? this.text : this.xhr.response) : null
    }

    function l(t, e) {
      var n = this;
      this._query = this._query || [], this.method = t, this.url = e, this.header = {}, this._header = {}, this.on("end", function () {
        var t = null, e = null;
        try {
          e = new c(n)
        } catch (e) {
          return t = new Error("Parser is unable to parse the response"), t.parse = !0, t.original = e, n.xhr ? (t.rawResponse = "undefined" == typeof n.xhr.responseType ? n.xhr.responseText : n.xhr.response, t.status = n.xhr.status ? n.xhr.status : null, t.statusCode = t.status) : (t.rawResponse = null, t.status = null), n.callback(t)
        }
        n.emit("response", e);
        var r;
        try {
          n._isResponseOK(e) || (r = new Error(e.statusText || "Unsuccessful HTTP response"), r.original = t, r.response = e, r.status = e.status)
        } catch (t) {
          r = t
        }
        r ? n.callback(r, e) : n.callback(null, e)
      })
    }

    function h(t, e, n) {
      var r = g("DELETE", t);
      return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r
    }

    var f;
    "undefined" != typeof window ? f = window : "undefined" != typeof self ? f = self : (console.warn("Using browser-only version of superagent in non-browser environment"), f = this);
    var d = n(40), p = n(49), _ = n(8), v = n(48), m = n(50), y = n(51), g = e = t.exports = function (t, n) {
      return "function" == typeof n ? new e.Request("GET", t).end(n) : 1 == arguments.length ? new e.Request("GET", t) : new e.Request(t, n)
    };
    e.Request = l, g.getXHR = function () {
      if (!(!f.XMLHttpRequest || f.location && "file:" == f.location.protocol && f.ActiveXObject))return new XMLHttpRequest;
      try {
        return new ActiveXObject("Microsoft.XMLHTTP")
      } catch (t) {
      }
      try {
        return new ActiveXObject("Msxml2.XMLHTTP.6.0")
      } catch (t) {
      }
      try {
        return new ActiveXObject("Msxml2.XMLHTTP.3.0")
      } catch (t) {
      }
      try {
        return new ActiveXObject("Msxml2.XMLHTTP")
      } catch (t) {
      }
      throw Error("Browser-only verison of superagent could not find XHR")
    };
    var b = "".trim ? function (t) {
      return t.trim()
    } : function (t) {
      return t.replace(/(^\s*|\s*$)/g, "")
    };
    g.serializeObject = i, g.parseString = o, g.types = {
      html: "text/html",
      json: "application/json",
      xml: "application/xml",
      urlencoded: "application/x-www-form-urlencoded",
      form: "application/x-www-form-urlencoded",
      "form-data": "application/x-www-form-urlencoded"
    }, g.serialize = {
      "application/x-www-form-urlencoded": i,
      "application/json": JSON.stringify
    }, g.parse = {
      "application/x-www-form-urlencoded": o,
      "application/json": JSON.parse
    }, m(c.prototype), c.prototype._parseBody = function (t) {
      var e = g.parse[this.type];
      return this.req._parser ? this.req._parser(this, t) : (!e && u(this.type) && (e = g.parse["application/json"]), e && t && (t.length || t instanceof Object) ? e(t) : null)
    }, c.prototype.toError = function () {
      var t = this.req, e = t.method, n = t.url, r = "cannot " + e + " " + n + " (" + this.status + ")", i = new Error(r);
      return i.status = this.status, i.method = e, i.url = n, i
    }, g.Response = c, d(l.prototype), p(l.prototype), l.prototype.type = function (t) {
      return this.set("Content-Type", g.types[t] || t), this
    }, l.prototype.accept = function (t) {
      return this.set("Accept", g.types[t] || t), this
    }, l.prototype.auth = function (t, e, n) {
      switch ("object" == typeof e && null !== e && (n = e), n || (n = {type: "function" == typeof btoa ? "basic" : "auto"}), n.type) {
        case"basic":
          this.set("Authorization", "Basic " + btoa(t + ":" + e));
          break;
        case"auto":
          this.username = t, this.password = e;
          break;
        case"bearer":
          this.set("Authorization", "Bearer " + t)
      }
      return this
    }, l.prototype.query = function (t) {
      return "string" != typeof t && (t = i(t)), t && this._query.push(t), this
    }, l.prototype.attach = function (t, e, n) {
      if (e) {
        if (this._data)throw Error("superagent can't mix .send() and .attach()");
        this._getFormData().append(t, e, n || e.name)
      }
      return this
    }, l.prototype._getFormData = function () {
      return this._formData || (this._formData = new f.FormData), this._formData
    }, l.prototype.callback = function (t, e) {
      if (this._maxRetries && this._retries++ < this._maxRetries && y(t, e))return this._retry();
      var n = this._callback;
      this.clearTimeout(), t && (this._maxRetries && (t.retries = this._retries - 1), this.emit("error", t)), n(t, e)
    }, l.prototype.crossDomainError = function () {
      var t = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
      t.crossDomain = !0, t.status = this.status, t.method = this.method, t.url = this.url, this.callback(t)
    }, l.prototype.buffer = l.prototype.ca = l.prototype.agent = function () {
      return console.warn("This is not supported in browser version of superagent"), this
    }, l.prototype.pipe = l.prototype.write = function () {
      throw Error("Streaming is not supported in browser version of superagent")
    }, l.prototype._appendQueryString = function () {
      var t = this._query.join("&");
      if (t && (this.url += (this.url.indexOf("?") >= 0 ? "&" : "?") + t), this._sort) {
        var e = this.url.indexOf("?");
        if (e >= 0) {
          var n = this.url.substring(e + 1).split("&");
          v(this._sort) ? n.sort(this._sort) : n.sort(), this.url = this.url.substring(0, e) + "?" + n.join("&")
        }
      }
    }, l.prototype._isHost = function (t) {
      return t && "object" == typeof t && !Array.isArray(t) && "[object Object]" !== Object.prototype.toString.call(t)
    }, l.prototype.end = function (t) {
      return this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"), this._endCalled = !0, this._callback = t || r, this._appendQueryString(), this._end()
    }, l.prototype._end = function () {
      var t = this, e = this.xhr = g.getXHR(), n = this._formData || this._data;
      this._setTimeouts(), e.onreadystatechange = function () {
        var n = e.readyState;
        if (n >= 2 && t._responseTimeoutTimer && clearTimeout(t._responseTimeoutTimer), 4 == n) {
          var r;
          try {
            r = e.status
          } catch (t) {
            r = 0
          }
          if (!r) {
            if (t.timedout || t._aborted)return;
            return t.crossDomainError()
          }
          t.emit("end")
        }
      };
      var r = function (e, n) {
        n.total > 0 && (n.percent = n.loaded / n.total * 100), n.direction = e, t.emit("progress", n)
      };
      if (this.hasListeners("progress"))try {
        e.onprogress = r.bind(null, "download"), e.upload && (e.upload.onprogress = r.bind(null, "upload"))
      } catch (t) {
      }
      try {
        this.username && this.password ? e.open(this.method, this.url, !0, this.username, this.password) : e.open(this.method, this.url, !0)
      } catch (t) {
        return this.callback(t)
      }
      if (this._withCredentials && (e.withCredentials = !0), !this._formData && "GET" != this.method && "HEAD" != this.method && "string" != typeof n && !this._isHost(n)) {
        var i = this._header["content-type"], s = this._serializer || g.serialize[i ? i.split(";")[0] : ""];
        !s && u(i) && (s = g.serialize["application/json"]), s && (n = s(n))
      }
      for (var o in this.header)null != this.header[o] && this.header.hasOwnProperty(o) && e.setRequestHeader(o, this.header[o]);
      return this._responseType && (e.responseType = this._responseType), this.emit("request", this), e.send("undefined" != typeof n ? n : null), this
    }, g.get = function (t, e, n) {
      var r = g("GET", t);
      return "function" == typeof e && (n = e, e = null), e && r.query(e), n && r.end(n), r
    }, g.head = function (t, e, n) {
      var r = g("HEAD", t);
      return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r
    }, g.options = function (t, e, n) {
      var r = g("OPTIONS", t);
      return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r
    }, g.del = h, g.delete = h, g.patch = function (t, e, n) {
      var r = g("PATCH", t);
      return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r
    }, g.post = function (t, e, n) {
      var r = g("POST", t);
      return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r
    }, g.put = function (t, e, n) {
      var r = g("PUT", t);
      return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r
    }
  }, function (t, e) {
    function n(t) {
      return null !== t && "object" == typeof t
    }

    t.exports = n
  }, function (t, e) {
    var n;
    n = function () {
      return this
    }();
    try {
      n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
      "object" == typeof window && (n = window)
    }
    t.exports = n
  }, function (t, e, n) {
    "use strict";
    var r = n(11), i = n(5), s = e.removeAsync = r.removeItemAsync.bind(r), o = function (t, e) {
      try {
        t = JSON.parse(t)
      } catch (t) {
        return null
      }
      if (t) {
        var n = t.expiredAt && t.expiredAt < Date.now();
        return n ? s(e).then(function () {
          return null
        }) : t.value
      }
      return null
    };
    e.getAsync = function (t) {
      return t = i.applicationId + "/" + t, r.getItemAsync(t).then(function (e) {
        return o(e, t)
      })
    }, e.setAsync = function (t, e, n) {
      var s = {value: e};
      return "number" == typeof n && (s.expiredAt = Date.now() + n), r.setItemAsync(i.applicationId + "/" + t, JSON.stringify(s))
    }
  }, function (t, e, n) {
    "use strict";
    var r = n(0), i = n(2), s = n(38), o = ["getItem", "setItem", "removeItem", "clear"];
    s.async ? r(o).each(function (t) {
      "function" != typeof s[t] && (s[t] = function () {
        var e = new Error("Synchronous API [" + t + "] is not available in this runtime.");
        throw e.code = "SYNC_API_NOT_AVAILABLE", e
      })
    }) : r(o).each(function (t) {
      "function" == typeof s[t] && (s[t + "Async"] = function () {
        return i.resolve(s[t].apply(s, arguments))
      })
    }), t.exports = s
  }, function (t, e, n) {
    "use strict";
    t.exports = "2.5.0"
  }, function (t, e) {
    var n = {
      utf8: {
        stringToBytes: function (t) {
          return n.bin.stringToBytes(unescape(encodeURIComponent(t)))
        }, bytesToString: function (t) {
          return decodeURIComponent(escape(n.bin.bytesToString(t)))
        }
      }, bin: {
        stringToBytes: function (t) {
          for (var e = [], n = 0; n < t.length; n++)e.push(255 & t.charCodeAt(n));
          return e
        }, bytesToString: function (t) {
          for (var e = [], n = 0; n < t.length; n++)e.push(String.fromCharCode(t[n]));
          return e.join("")
        }
      }
    };
    t.exports = n
  }, function (t, e, n) {
    "use strict";
    var r = n(0);
    t.exports = function (t) {
      var e = "*";
      t.ACL = function (e) {
        var n = this;
        if (n.permissionsById = {}, r.isObject(e))if (e instanceof t.User)n.setReadAccess(e, !0), n.setWriteAccess(e, !0); else {
          if (r.isFunction(e))throw new Error("AV.ACL() called with a function.  Did you forget ()?");
          t._objectEach(e, function (e, i) {
            if (!r.isString(i))throw new Error("Tried to create an ACL with an invalid userId.");
            n.permissionsById[i] = {}, t._objectEach(e, function (t, e) {
              if ("read" !== e && "write" !== e)throw new Error("Tried to create an ACL with an invalid permission type.");
              if (!r.isBoolean(t))throw new Error("Tried to create an ACL with an invalid permission value.");
              n.permissionsById[i][e] = t
            })
          })
        }
      }, t.ACL.prototype.toJSON = function () {
        return r.clone(this.permissionsById)
      }, t.ACL.prototype._setAccess = function (e, n, i) {
        if (n instanceof t.User ? n = n.id : n instanceof t.Role && (n = "role:" + n.getName()), !r.isString(n))throw new Error("userId must be a string.");
        if (!r.isBoolean(i))throw new Error("allowed must be either true or false.");
        var s = this.permissionsById[n];
        if (!s) {
          if (!i)return;
          s = {}, this.permissionsById[n] = s
        }
        i ? this.permissionsById[n][e] = !0 : (delete s[e], r.isEmpty(s) && delete this.permissionsById[n])
      }, t.ACL.prototype._getAccess = function (e, n) {
        n instanceof t.User ? n = n.id : n instanceof t.Role && (n = "role:" + n.getName());
        var r = this.permissionsById[n];
        return !!r && !!r[e]
      }, t.ACL.prototype.setReadAccess = function (t, e) {
        this._setAccess("read", t, e)
      }, t.ACL.prototype.getReadAccess = function (t) {
        return this._getAccess("read", t)
      }, t.ACL.prototype.setWriteAccess = function (t, e) {
        this._setAccess("write", t, e)
      }, t.ACL.prototype.getWriteAccess = function (t) {
        return this._getAccess("write", t)
      }, t.ACL.prototype.setPublicReadAccess = function (t) {
        this.setReadAccess(e, t)
      }, t.ACL.prototype.getPublicReadAccess = function () {
        return this.getReadAccess(e)
      }, t.ACL.prototype.setPublicWriteAccess = function (t) {
        this.setWriteAccess(e, t)
      }, t.ACL.prototype.getPublicWriteAccess = function () {
        return this.getWriteAccess(e)
      }, t.ACL.prototype.getRoleReadAccess = function (e) {
        if (e instanceof t.Role && (e = e.getName()), r.isString(e))return this.getReadAccess("role:" + e);
        throw new Error("role must be a AV.Role or a String")
      }, t.ACL.prototype.getRoleWriteAccess = function (e) {
        if (e instanceof t.Role && (e = e.getName()), r.isString(e))return this.getWriteAccess("role:" + e);
        throw new Error("role must be a AV.Role or a String")
      }, t.ACL.prototype.setRoleReadAccess = function (e, n) {
        if (e instanceof t.Role && (e = e.getName()), r.isString(e))return void this.setReadAccess("role:" + e, n);
        throw new Error("role must be a AV.Role or a String")
      }, t.ACL.prototype.setRoleWriteAccess = function (e, n) {
        if (e instanceof t.Role && (e = e.getName()), r.isString(e))return void this.setWriteAccess("role:" + e, n);
        throw new Error("role must be a AV.Role or a String")
      }
    }
  }, function (t, e, n) {
    "use strict";
    var r = n(4), i = r.tap;
    t.exports = function (t) {
      t.Captcha = function (t, e) {
        this._options = t, this._authOptions = e, this.url = void 0, this.captchaToken = void 0, this.validateToken = void 0
      }, t.Captcha.prototype.refresh = function () {
        var e = this;
        return t.Cloud._requestCaptcha(this._options, this._authOptions).then(function (t) {
          var n = t.captchaToken, r = t.url;
          return Object.assign(e, {captchaToken: n, url: r}), r
        })
      }, t.Captcha.prototype.verify = function (e) {
        var n = this;
        return t.Cloud.verifyCaptcha(e, this.captchaToken).then(i(function (t) {
          return n.validateToken = t
        }))
      }, t.Captcha.prototype.bind = function (t, e) {
        var n = this, r = t.textInput, i = t.image, s = t.verifyButton, o = e.success, a = e.error;
        if ("string" == typeof r && (r = document.getElementById(r), !r))throw new Error("textInput with id " + r + " not found");
        if ("string" == typeof i && (i = document.getElementById(i), !i))throw new Error("image with id " + i + " not found");
        if ("string" == typeof s && (s = document.getElementById(s), !s))throw new Error("verifyButton with id " + s + " not found");
        this.__refresh = function () {
          return n.refresh().then(function (t) {
            i.src = t, r && (r.value = "", r.focus())
          }).catch(function (t) {
            return console.warn("refresh captcha fail: " + t.message)
          })
        }, i && (this.__image = i, i.src = this.url, i.addEventListener("click", this.__refresh)), this.__verify = function () {
          var t = r.value;
          n.verify(t).catch(function (t) {
            throw n.__refresh(), t
          }).then(o, a).catch(function (t) {
            return console.warn("verify captcha fail: " + t.message)
          })
        }, r && s && (this.__verifyButton = s, s.addEventListener("click", this.__verify))
      }, t.Captcha.prototype.unbind = function () {
        this.__image && this.__image.removeEventListener("click", this.__refresh), this.__verifyButton && this.__verifyButton.removeEventListener("click", this.__verify)
      }, t.Captcha.request = function (e, n) {
        var r = new t.Captcha(e, n);
        return r.refresh().then(function () {
          return r
        })
      }
    }
  }, function (t, e, n) {
    "use strict";
    var r = n(0), i = n(1).request;
    t.exports = function (t) {
      t.Cloud = t.Cloud || {}, r.extend(t.Cloud, {
        run: function (e, n, r) {
          var s = i("functions", e, null, "POST", t._encode(n, null, !0), r);
          return s.then(function (e) {
            return t._decode(e).result
          })
        }, rpc: function (e, n, s) {
          return r.isArray(n) ? Promise.reject(new Error("Can't pass Array as the param of rpc function in JavaScript SDK.")) : i("call", e, null, "POST", t._encodeObjectOrArray(n), s).then(function (e) {
            return t._decode(e).result
          })
        }, getServerDate: function () {
          var e = i("date", null, null, "GET");
          return e.then(function (e) {
            return t._decode(e)
          })
        }, requestSmsCode: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (r.isString(t) && (t = {mobilePhoneNumber: t}), !t.mobilePhoneNumber)throw new Error("Missing mobilePhoneNumber.");
          e.validateToken && (t = r.extend({}, t, {validate_token: e.validateToken}));
          var n = i("requestSmsCode", null, null, "POST", t, e);
          return n
        }, verifySmsCode: function (t, e) {
          if (!t)throw new Error("Missing sms code.");
          var n = {};
          r.isString(e) && (n.mobilePhoneNumber = e);
          var s = i("verifySmsCode", t, null, "POST", n);
          return s
        }, _requestCaptcha: function (t, e) {
          return i("requestCaptcha", null, null, "GET", t, e).then(function (t) {
            var e = t.captcha_url, n = t.captcha_token;
            return {captchaToken: n, url: e}
          })
        }, requestCaptcha: t.Captcha.request, verifyCaptcha: function (t, e) {
          return i("verifyCaptcha", null, null, "POST", {captcha_code: t, captcha_token: e}).then(function (t) {
            var e = t.validate_token;
            return e
          })
        }
      })
    }
  }, function (t, e, n) {
    "use strict";
    var r = n(0), i = n(1).request, s = n(5);
    t.exports = s.Object.extend("_Conversation", {
      constructor: function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        s.Object.prototype.constructor.call(this, null, null), this.set("name", t), void 0 !== e.isSystem && this.set("sys", !!e.isSystem), void 0 !== e.isTransient && this.set("tr", !!e.isTransient)
      }, getCreator: function () {
        return this.get("c")
      }, getLastMessageAt: function () {
        return this.get("lm")
      }, getMembers: function () {
        return this.get("m")
      }, addMember: function (t) {
        return this.add("m", t)
      }, getMutedMembers: function () {
        return this.get("mu")
      }, getName: function () {
        return this.get("name")
      }, isTransient: function () {
        return this.get("tr")
      }, isSystem: function () {
        return this.get("sys")
      }, send: function (t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        "function" == typeof e.toJSON && (e = e.toJSON()), "string" != typeof e && (e = JSON.stringify(e));
        var s = {from_peer: t, conv_id: this.id, transient: !1, message: e};
        return void 0 !== n.toClients && (s.to_peers = n.toClients), void 0 !== n.transient && (s.transient = !!n.transient), void 0 !== n.pushData && (s.push_data = n.pushData), i("rtm", "messages", null, "POST", s, r)
      }, broadcast: function (t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        "function" == typeof e.toJSON && (e = e.toJSON()), "string" != typeof e && (e = JSON.stringify(e));
        var o = {from_peer: t, conv_id: this.id, message: e};
        if (void 0 !== n.pushData && (o.push = n.pushData), void 0 !== n.validTill) {
          var a = n.validTill;
          r.isDate(a) && (a = a.getTime()), n.valid_till = a
        }
        return i("rtm", "broadcast", null, "POST", o, s)
      }
    })
  }, function (t, e, n) {
    "use strict";
    var r = n(0);
    t.exports = function (t) {
      var e = /\s+/, n = Array.prototype.slice;
      t.Events = {
        on: function (t, n, r) {
          var i, s, o, a, u;
          if (!n)return this;
          for (t = t.split(e), i = this._callbacks || (this._callbacks = {}), s = t.shift(); s;)u = i[s], o = u ? u.tail : {}, o.next = a = {}, o.context = r, o.callback = n, i[s] = {
            tail: a,
            next: u ? u.next : o
          }, s = t.shift();
          return this
        }, off: function (t, n, i) {
          var s, o, a, u, c, l;
          if (o = this._callbacks) {
            if (!(t || n || i))return delete this._callbacks, this;
            for (t = t ? t.split(e) : r.keys(o), s = t.shift(); s;)if (a = o[s], delete o[s], a && (n || i)) {
              for (u = a.tail, a = a.next; a !== u;)c = a.callback, l = a.context, (n && c !== n || i && l !== i) && this.on(s, c, l), a = a.next;
              s = t.shift()
            }
            return this
          }
        }, trigger: function (t) {
          var r, i, s, o, a, u, c;
          if (!(s = this._callbacks))return this;
          for (u = s.all, t = t.split(e), c = n.call(arguments, 1), r = t.shift(); r;) {
            if (i = s[r])for (o = i.tail; (i = i.next) !== o;)i.callback.apply(i.context || this, c);
            if (i = u)for (o = i.tail, a = [r].concat(c); (i = i.next) !== o;)i.callback.apply(i.context || this, a);
            r = t.shift()
          }
          return this
        }
      }, t.Events.bind = t.Events.on, t.Events.unbind = t.Events.off
    }
  }, function (t, e, n) {
    "use strict";
    var r = n(0), i = n(35), s = n(36), o = n(37), a = n(3), u = n(1).request, c = n(2), l = n(4), h = l.tap, f = l.transformFetchOptions, d = n(6)("leancloud:file"), p = n(39);
    t.exports = function (t) {
      var e = (t._config, function () {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
      }), n = function (t) {
        return t.match(/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/)[4]
      }, l = function (t) {
        if (t < 26)return String.fromCharCode(65 + t);
        if (t < 52)return String.fromCharCode(97 + (t - 26));
        if (t < 62)return String.fromCharCode(48 + (t - 52));
        if (62 === t)return "+";
        if (63 === t)return "/";
        throw new Error("Tried to encode large digit " + t + " in base64.")
      }, _ = function (t) {
        var e = [];
        return e.length = Math.ceil(t.length / 3), r.times(e.length, function (n) {
          var r = t[3 * n], i = t[3 * n + 1] || 0, s = t[3 * n + 2] || 0, o = 3 * n + 1 < t.length, a = 3 * n + 2 < t.length;
          e[n] = [l(r >> 2 & 63), l(r << 4 & 48 | i >> 4 & 15), o ? l(i << 2 & 60 | s >> 6 & 3) : "=", a ? l(63 & s) : "="].join("")
        }), e.join("")
      };
      t.File = function (e, n, i) {
        if (this.attributes = {
            name: e,
            url: "",
            metaData: {},
            base64: ""
          }, r.isString(n))throw new TypeError("Creating an AV.File from a String is not yet supported.");
        r.isArray(n) && (this.attributes.metaData.size = n.length, n = {base64: _(n)}), this._extName = "", this._data = n;
        var s = void 0;
        if (n && n.owner)s = n.owner; else if (!t._config.disableCurrentUser)try {
          s = t.User.current()
        } catch (t) {
          if ("SYNC_API_NOT_AVAILABLE" !== t.code)throw t;
          console.warn("Get current user failed. It seems this runtime use an async storage system, please create AV.File in the callback of AV.User.currentAsync().")
        }
        this.attributes.metaData.owner = s ? s.id : "unknown", this.set("mime_type", i)
      }, t.File.withURL = function (e, n, r, i) {
        if (!e || !n)throw new Error("Please provide file name and url");
        var s = new t.File(e, null, i);
        if (r)for (var o in r)s.attributes.metaData[o] || (s.attributes.metaData[o] = r[o]);
        return s.attributes.url = n, s.attributes.metaData.__source = "external", s
      }, t.File.createWithoutData = function (e) {
        var n = new t.File;
        return n.id = e, n
      }, t.File.prototype = {
        className: "_File", _toFullJSON: function (e) {
          var n = this, i = r.clone(this.attributes);
          return t._objectEach(i, function (n, r) {
            i[r] = t._encode(n, e)
          }), t._objectEach(this._operations, function (t, e) {
            i[e] = t
          }), r.has(this, "id") && (i.objectId = this.id), r(["createdAt", "updatedAt"]).each(function (t) {
            if (r.has(n, t)) {
              var e = n[t];
              i[t] = r.isDate(e) ? e.toJSON() : e
            }
          }), i.__type = "File", i
        }, toJSON: function () {
          var t = this._toFullJSON();
          return r.has(this, "id") && (t.id = this.id), t
        }, getACL: function () {
          return this._acl
        }, setACL: function (e) {
          return e instanceof t.ACL ? void(this._acl = e) : new a(a.OTHER_CAUSE, "ACL must be a AV.ACL.")
        }, name: function () {
          return this.get("name")
        }, url: function () {
          return this.get("url")
        }, get: function (t) {
          switch (t) {
            case"objectId":
              return this.id;
            case"url":
            case"name":
            case"mime_type":
            case"metaData":
            case"createdAt":
            case"updatedAt":
              return this.attributes[t];
            default:
              return this.attributes.metaData[t]
          }
        }, set: function t() {
          for (var e = this, t = function (t, n) {
            switch (t) {
              case"name":
              case"url":
              case"mime_type":
              case"base64":
              case"metaData":
                e.attributes[t] = n;
                break;
              default:
                e.attributes.metaData[t] = n
            }
          }, n = arguments.length, r = Array(n), i = 0; i < n; i++)r[i] = arguments[i];
          switch (r.length) {
            case 1:
              for (var s in r[0])t(s, r[0][s]);
              break;
            case 2:
              t(r[0], r[1])
          }
        }, metaData: function (t, e) {
          return t && e ? (this.attributes.metaData[t] = e, this) : t && !e ? this.attributes.metaData[t] : this.attributes.metaData
        }, thumbnailURL: function (t, e, n, r, i) {
          var s = this.attributes.url;
          if (!s)throw new Error("Invalid url.");
          if (!t || !e || t <= 0 || e <= 0)throw new Error("Invalid width or height value.");
          if (n = n || 100, r = !r || r, n <= 0 || n > 100)throw new Error("Invalid quality value.");
          i = i || "png";
          var o = r ? 2 : 1;
          return s + "?imageView/" + o + "/w/" + t + "/h/" + e + "/q/" + n + "/format/" + i
        }, size: function () {
          return this.metaData().size
        }, ownerId: function () {
          return this.metaData().owner
        }, destroy: function (t) {
          if (!this.id)return c.reject(new Error("The file id is not eixsts."));
          var e = u("files", null, this.id, "DELETE", null, t);
          return e
        }, _fileToken: function (t) {
          var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "fileTokens", i = this.attributes.name, s = n(i);
          !s && this._extName && (i += this._extName, s = this._extName);
          var o = e() + e() + e() + e() + e() + s, a = {
            key: o,
            name: i,
            ACL: this._acl,
            mime_type: t,
            metaData: this.attributes.metaData
          };
          return this._qiniu_key = o, u(r, null, null, "POST", a)
        }, save: function (t) {
          var e = this;
          if (this.id)throw new Error("File already saved. If you want to manipulate a file, use AV.Query to get it.");
          if (!this._previousSave)if (this._data) {
            var r = this.get("mime_type");
            this._previousSave = this._fileToken(r).then(function (a) {
              return a.mime_type && (r = a.mime_type, e.set("mime_type", r)), e._token = a.token, c.resolve().then(function () {
                var t = e._data;
                if (t && t.base64)return p(t.base64, r);
                if (t && t.blob)return !t.blob.type && r && (t.blob.type = r), t.blob.name || (t.blob.name = e.get("name")), t.blob;
                if ("undefined" != typeof File && t instanceof File)return t.size && (e.attributes.metaData.size = t.size), t.name && (e._extName = n(t.name)), t;
                if ("undefined" != typeof Buffer && Buffer.isBuffer(t))return e.attributes.metaData.size = t.length, t;
                throw new TypeError("malformed file data")
              }).then(function (n) {
                var r = void 0;
                switch (a.provider) {
                  case"s3":
                    r = o(a, n, e, t);
                    break;
                  case"qcloud":
                    r = i(a, n, e, t);
                    break;
                  case"qiniu":
                  default:
                    r = s(a, n, e, t)
                }
                return r.then(h(function () {
                  return e._callback(!0)
                }), function (t) {
                  throw e._callback(!1), t
                })
              })
            })
          } else if (this.attributes.url && "external" === this.attributes.metaData.__source) {
            var a = {
              name: this.attributes.name,
              ACL: this._acl,
              metaData: this.attributes.metaData,
              mime_type: this.mimeType,
              url: this.attributes.url
            };
            this._previousSave = u("files", this.attributes.name, null, "post", a).then(function (t) {
              return e.attributes.name = t.name, e.attributes.url = t.url, e.id = t.objectId, t.size && (e.attributes.metaData.size = t.size), e
            })
          }
          return this._previousSave
        }, _callback: function (t) {
          u("fileCallback", null, null, "post", {
            token: this._token,
            result: t
          }).catch(d), delete this._token, delete this._data
        }, fetch: function (t, e) {
          var n = u("files", null, this.id, "GET", f(t), e);
          return n.then(this._finishFetch.bind(this))
        }, _finishFetch: function (e) {
          var n = t.Object.prototype.parse(e);
          return n.attributes = {
            name: n.name,
            url: n.url,
            mime_type: n.mime_type,
            bucket: n.bucket
          }, n.attributes.metaData = n.metaData || {}, n.id = n.objectId, delete n.objectId, delete n.metaData, delete n.url, delete n.name, delete n.mime_type, delete n.bucket, r.extend(this, n), this
        }
      }
    }
  }, function (t, e, n) {
    "use strict";
    var r = n(0);
    t.exports = function (t) {
      t.GeoPoint = function (e, n) {
        r.isArray(e) ? (t.GeoPoint._validate(e[0], e[1]), this.latitude = e[0], this.longitude = e[1]) : r.isObject(e) ? (t.GeoPoint._validate(e.latitude, e.longitude), this.latitude = e.latitude, this.longitude = e.longitude) : r.isNumber(e) && r.isNumber(n) ? (t.GeoPoint._validate(e, n), this.latitude = e, this.longitude = n) : (this.latitude = 0, this.longitude = 0);
        var i = this;
        this.__defineGetter__ && this.__defineSetter__ && (this._latitude = this.latitude, this._longitude = this.longitude, this.__defineGetter__("latitude", function () {
          return i._latitude
        }), this.__defineGetter__("longitude", function () {
          return i._longitude
        }), this.__defineSetter__("latitude", function (e) {
          t.GeoPoint._validate(e, i.longitude), i._latitude = e
        }), this.__defineSetter__("longitude", function (e) {
          t.GeoPoint._validate(i.latitude, e), i._longitude = e
        }))
      }, t.GeoPoint._validate = function (t, e) {
        if (t < -90)throw new Error("AV.GeoPoint latitude " + t + " < -90.0.");
        if (t > 90)throw new Error("AV.GeoPoint latitude " + t + " > 90.0.");
        if (e < -180)throw new Error("AV.GeoPoint longitude " + e + " < -180.0.");
        if (e > 180)throw new Error("AV.GeoPoint longitude " + e + " > 180.0.")
      }, t.GeoPoint.current = function () {
        return new t.Promise(function (e, n) {
          navigator.geolocation.getCurrentPosition(function (n) {
            e(new t.GeoPoint({latitude: n.coords.latitude, longitude: n.coords.longitude}))
          }, n)
        })
      }, t.GeoPoint.prototype = {
        toJSON: function () {
          return t.GeoPoint._validate(this.latitude, this.longitude), {
            __type: "GeoPoint",
            latitude: this.latitude,
            longitude: this.longitude
          }
        }, radiansTo: function (t) {
          var e = Math.PI / 180, n = this.latitude * e, r = this.longitude * e, i = t.latitude * e, s = t.longitude * e, o = n - i, a = r - s, u = Math.sin(o / 2), c = Math.sin(a / 2), l = u * u + Math.cos(n) * Math.cos(i) * c * c;
          return l = Math.min(1, l), 2 * Math.asin(Math.sqrt(l))
        }, kilometersTo: function (t) {
          return 6371 * this.radiansTo(t)
        }, milesTo: function (t) {
          return 3958.8 * this.radiansTo(t)
        }
      }
    }
  }, function (t, e, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, i = n(5), s = n(1), o = function (t, e, n, r) {
      i.applicationId && t !== i.applicationId && e !== i.applicationKey && n !== i.masterKey && console.warn("LeanCloud SDK is already initialized, please do not reinitialize it."), i.applicationId = t, i.applicationKey = e, i.masterKey = n, i._useMasterKey = !1
    }, a = function () {
      console.warn("MasterKey is not supposed to be used in browser.")
    };
    i.init = function () {
      if (1 === arguments.length) {
        var t = arguments.length <= 0 ? void 0 : arguments[0];
        if ("object" !== ("undefined" == typeof t ? "undefined" : r(t)))throw new Error("AV.init(): Parameter is not correct.");
        t.masterKey && a(), o(t.appId, t.appKey, t.masterKey, t.hookKey), s.setServerUrlByRegion(t.region)
      } else(arguments.length <= 3 ? void 0 : arguments[3]) && a(), o.apply(void 0, arguments), s.setServerUrlByRegion("cn")
    }, i.initialize = i.init
  }, function (t, e, n) {
    "use strict";
    var r = n(0), i = n(3), s = n(1).request;
    t.exports = function (t) {
      t.Insight = t.Insight || {}, r.extend(t.Insight, {
        startJob: function (e, n) {
          if (!e || !e.sql)throw new Error("Please provide the sql to run the job.");
          var r = {
            jobConfig: e,
            appId: t.applicationId
          }, i = s("bigquery", "jobs", null, "POST", t._encode(r, null, !0), n);
          return i.then(function (e) {
            return t._decode(e).id
          })
        }, on: function (t, e) {
        }
      }), t.Insight.JobQuery = function (t, e) {
        if (!t)throw new Error("Please provide the job id.");
        this.id = t, this.className = e, this._skip = 0, this._limit = 100
      }, t.Insight.JobQuery.prototype = {
        skip: function (t) {
          return this._skip = t, this
        }, limit: function (t) {
          return this._limit = t, this
        }, find: function (e) {
          var n = {skip: this._skip, limit: this._limit}, r = s("bigquery", "jobs", this.id, "GET", n, e);
          return r.then(function (e) {
            return e.error ? t.Promise.reject(new i(e.code, e.error)) : t.Promise.resolve(e)
          })
        }
      }
    }
  }, function (t, e, n) {
    "use strict";
    var r = n(0), i = n(3), s = n(1).request, o = n(4), a = ["objectId", "createdAt", "updatedAt"], u = function (t) {
      if (a.indexOf(t) !== -1)throw new Error("key[" + t + "] is reserved")
    };
    t.exports = function (t) {
      t.Object = function (e, n) {
        if (r.isString(e))return t.Object._create.apply(this, arguments);
        e = e || {}, n && n.parse && (e = this.parse(e), e = this._mergeMagicFields(e));
        var i = t._getValue(this, "defaults");
        i && (e = r.extend({}, i, e)), n && n.collection && (this.collection = n.collection), this._serverData = {}, this._opSetQueue = [{}], this._flags = {}, this.attributes = {}, this._hashedJSON = {}, this._escapedAttributes = {}, this.cid = r.uniqueId("c"), this.changed = {}, this._silent = {}, this._pending = {}, this.set(e, {silent: !0}), this.changed = {}, this._silent = {}, this._pending = {}, this._hasData = !0, this._previousAttributes = r.clone(this.attributes), this.initialize.apply(this, arguments)
      }, t.Object.saveAll = function (e, n) {
        return t.Object._deepSaveAsync(e, null, n)
      }, t.Object.fetchAll = function (e, n) {
        return t.Promise.resolve().then(function () {
          return s("batch", null, null, "POST", {
            requests: r.map(e, function (t) {
              if (!t.className)throw new Error("object must have className to fetch");
              if (!t.id)throw new Error("object must have id to fetch");
              if (t.dirty())throw new Error("object is modified but not saved");
              return {method: "GET", path: "/1.1/classes/" + t.className + "/" + t.id}
            })
          }, n)
        }).then(function (t) {
          return r.forEach(e, function (e, n) {
            if (!t[n].success) {
              var r = new Error(t[n].error.error);
              throw r.code = t[n].error.code, r
            }
            e._finishFetch(e.parse(t[n].success))
          }), e
        })
      }, r.extend(t.Object.prototype, t.Events, {
        _fetchWhenSave: !1, initialize: function () {
        }, fetchWhenSave: function (t) {
          if (console.warn("AV.Object#fetchWhenSave is deprecated, use AV.Object#save with options.fetchWhenSave instead."), !r.isBoolean(t))throw new Error("Expect boolean value for fetchWhenSave");
          this._fetchWhenSave = t
        }, getObjectId: function () {
          return this.id
        }, getCreatedAt: function () {
          return this.createdAt || this.get("createdAt")
        }, getUpdatedAt: function () {
          return this.updatedAt || this.get("updatedAt")
        }, toJSON: function () {
          var e = this._toFullJSON();
          return t._arrayEach(["__type", "className"], function (t) {
            delete e[t]
          }), e
        }, _toFullJSON: function (e) {
          var n = this, i = r.clone(this.attributes);
          return t._objectEach(i, function (n, r) {
            i[r] = t._encode(n, e)
          }), t._objectEach(this._operations, function (t, e) {
            i[e] = t
          }), r.has(this, "id") && (i.objectId = this.id), r(["createdAt", "updatedAt"]).each(function (t) {
            if (r.has(n, t)) {
              var e = n[t];
              i[t] = r.isDate(e) ? e.toJSON() : e
            }
          }), i.__type = "Object", i.className = this.className, i
        }, _refreshCache: function () {
          var e = this;
          e._refreshingCache || (e._refreshingCache = !0, t._objectEach(this.attributes, function (n, i) {
            n instanceof t.Object ? n._refreshCache() : r.isObject(n) && e._resetCacheForKey(i) && e.set(i, new t.Op.Set(n), {silent: !0})
          }), delete e._refreshingCache)
        }, dirty: function (t) {
          this._refreshCache();
          var e = r.last(this._opSetQueue);
          return t ? !!e[t] : !this.id || r.keys(e).length > 0
        }, _toPointer: function () {
          return {__type: "Pointer", className: this.className, objectId: this.id}
        }, get: function (t) {
          switch (t) {
            case"objectId":
              return this.id;
            case"createdAt":
            case"updatedAt":
              return this[t];
            default:
              return this.attributes[t]
          }
        }, relation: function (e) {
          var n = this.get(e);
          if (n) {
            if (!(n instanceof t.Relation))throw new Error("Called relation() on non-relation field " + e);
            return n._ensureParentAndKey(this, e), n
          }
          return new t.Relation(this, e)
        }, escape: function (t) {
          var e = this._escapedAttributes[t];
          if (e)return e;
          var n, i = this.attributes[t];
          return n = o.isNullOrUndefined(i) ? "" : r.escape(i.toString()), this._escapedAttributes[t] = n, n
        }, has: function (t) {
          return !o.isNullOrUndefined(this.attributes[t])
        }, _mergeMagicFields: function (e) {
          var n = this, i = ["objectId", "createdAt", "updatedAt"];
          return t._arrayEach(i, function (i) {
            e[i] && ("objectId" === i ? n.id = e[i] : "createdAt" !== i && "updatedAt" !== i || r.isDate(e[i]) ? n[i] = e[i] : n[i] = t._parseDate(e[i]), delete e[i])
          }), e
        }, _startSave: function () {
          this._opSetQueue.push({})
        }, _cancelSave: function () {
          var e = r.first(this._opSetQueue);
          this._opSetQueue = r.rest(this._opSetQueue);
          var n = r.first(this._opSetQueue);
          t._objectEach(e, function (t, r) {
            var i = e[r], s = n[r];
            i && s ? n[r] = s._mergeWithPrevious(i) : i && (n[r] = i)
          }), this._saving = this._saving - 1
        }, _finishSave: function (e) {
          var n = {};
          t._traverse(this.attributes, function (e) {
            e instanceof t.Object && e.id && e._hasData && (n[e.id] = e)
          });
          var i = r.first(this._opSetQueue);
          this._opSetQueue = r.rest(this._opSetQueue), this._applyOpSet(i, this._serverData), this._mergeMagicFields(e);
          var s = this;
          t._objectEach(e, function (e, r) {
            s._serverData[r] = t._decode(e, r);
            var i = t._traverse(s._serverData[r], function (e) {
              if (e instanceof t.Object && n[e.id])return n[e.id]
            });
            i && (s._serverData[r] = i)
          }), this._rebuildAllEstimatedData(), this._saving = this._saving - 1
        }, _finishFetch: function (e, n) {
          this._opSetQueue = [{}], this._mergeMagicFields(e);
          var r = this;
          t._objectEach(e, function (e, n) {
            r._serverData[n] = t._decode(e, n)
          }), this._rebuildAllEstimatedData(), this._refreshCache(), this._opSetQueue = [{}], this._hasData = n
        }, _applyOpSet: function (e, n) {
          var r = this;
          t._objectEach(e, function (e, i) {
            n[i] = e._estimate(n[i], r, i), n[i] === t.Op._UNSET && delete n[i]
          })
        }, _resetCacheForKey: function (e) {
          var n = this.attributes[e];
          if (r.isObject(n) && !(n instanceof t.Object) && !(n instanceof t.File)) {
            n = n.toJSON ? n.toJSON() : n;
            var i = JSON.stringify(n);
            if (this._hashedJSON[e] !== i) {
              var s = !!this._hashedJSON[e];
              return this._hashedJSON[e] = i, s
            }
          }
          return !1
        }, _rebuildEstimatedDataForKey: function (e) {
          var n = this;
          delete this.attributes[e], this._serverData[e] && (this.attributes[e] = this._serverData[e]), t._arrayEach(this._opSetQueue, function (r) {
            var i = r[e];
            i && (n.attributes[e] = i._estimate(n.attributes[e], n, e), n.attributes[e] === t.Op._UNSET ? delete n.attributes[e] : n._resetCacheForKey(e))
          })
        }, _rebuildAllEstimatedData: function () {
          var e = this, n = r.clone(this.attributes);
          this.attributes = r.clone(this._serverData), t._arrayEach(this._opSetQueue, function (n) {
            e._applyOpSet(n, e.attributes), t._objectEach(n, function (t, n) {
              e._resetCacheForKey(n)
            })
          }), t._objectEach(n, function (t, n) {
            e.attributes[n] !== t && e.trigger("change:" + n, e, e.attributes[n], {})
          }), t._objectEach(this.attributes, function (t, i) {
            r.has(n, i) || e.trigger("change:" + i, e, t, {})
          })
        }, set: function (e, n, i) {
          var s;
          if (r.isObject(e) || o.isNullOrUndefined(e) ? (s = r.mapObject(e, function (e, n) {
              return u(n), t._decode(e, n)
            }), i = n) : (s = {}, u(e), s[e] = t._decode(n, e)), i = i || {},
              !s)return this;
          s instanceof t.Object && (s = s.attributes), i.unset && t._objectEach(s, function (e, n) {
            s[n] = new t.Op.Unset
          });
          var a = r.clone(s), c = this;
          t._objectEach(a, function (e, n) {
            e instanceof t.Op && (a[n] = e._estimate(c.attributes[n], c, n), a[n] === t.Op._UNSET && delete a[n])
          }), this._validate(s, i), i.changes = {};
          var l = this._escapedAttributes;
          this._previousAttributes || {};
          return t._arrayEach(r.keys(s), function (e) {
            var n = s[e];
            n instanceof t.Relation && (n.parent = c), n instanceof t.Op || (n = new t.Op.Set(n));
            var o = !0;
            n instanceof t.Op.Set && r.isEqual(c.attributes[e], n.value) && (o = !1), o && (delete l[e], i.silent ? c._silent[e] = !0 : i.changes[e] = !0);
            var a = r.last(c._opSetQueue);
            a[e] = n._mergeWithPrevious(a[e]), c._rebuildEstimatedDataForKey(e), o ? (c.changed[e] = c.attributes[e], i.silent || (c._pending[e] = !0)) : (delete c.changed[e], delete c._pending[e])
          }), i.silent || this.change(i), this
        }, unset: function (t, e) {
          return e = e || {}, e.unset = !0, this.set(t, null, e)
        }, increment: function (e, n) {
          return (r.isUndefined(n) || r.isNull(n)) && (n = 1), this.set(e, new t.Op.Increment(n))
        }, add: function (e, n) {
          return this.set(e, new t.Op.Add(o.ensureArray(n)))
        }, addUnique: function (e, n) {
          return this.set(e, new t.Op.AddUnique(o.ensureArray(n)))
        }, remove: function (e, n) {
          return this.set(e, new t.Op.Remove(o.ensureArray(n)))
        }, op: function (t) {
          return r.last(this._opSetQueue)[t]
        }, clear: function (t) {
          t = t || {}, t.unset = !0;
          var e = r.extend(this.attributes, this._operations);
          return this.set(e, t)
        }, _getSaveJSON: function () {
          var e = r.clone(r.first(this._opSetQueue));
          return t._objectEach(e, function (t, n) {
            e[n] = t.toJSON()
          }), e
        }, _canBeSerialized: function () {
          return t.Object._canBeSerializedAsValue(this.attributes)
        }, fetch: function (t, e) {
          var n = this, r = s("classes", this.className, this.id, "GET", o.transformFetchOptions(t), e);
          return r.then(function (t) {
            return n._finishFetch(n.parse(t), !0), n
          })
        }, save: function (e, n, i) {
          var a, u, c;
          r.isObject(e) || o.isNullOrUndefined(e) ? (a = e, c = n) : (a = {}, a[e] = n, c = i), c = r.clone(c) || {}, c.wait && (u = r.clone(this.attributes));
          var l = r.clone(c) || {};
          l.wait && (l.silent = !0), a && this.set(a, l);
          var h = this;
          h._refreshCache();
          var f = [], d = [];
          return t.Object._findUnsavedChildren(h.attributes, f, d), f.length + d.length > 0 ? t.Object._deepSaveAsync(this.attributes, h, c).then(function () {
            return h.save(null, c)
          }) : (this._startSave(), this._saving = (this._saving || 0) + 1, this._allPreviousSaves = this._allPreviousSaves || t.Promise.resolve(), this._allPreviousSaves = this._allPreviousSaves.catch(function (t) {
          }).then(function () {
            var t = h.id ? "PUT" : "POST", e = h._getSaveJSON();
            if (h._fetchWhenSave && (e._fetchWhenSave = !0), c.fetchWhenSave && (e._fetchWhenSave = !0), c.query) {
              var n;
              if ("function" == typeof c.query.toJSON && (n = c.query.toJSON(), n && (e._where = n.where)), !e._where) {
                var i = new Error("options.query is not an AV.Query");
                throw i
              }
            }
            r.extend(e, h._flags);
            var o = "classes", f = h.className;
            "_User" !== h.className || h.id || (o = "users", f = null);
            var d = c._makeRequest || s, p = d(o, f, h.id, t, e, c);
            return p = p.then(function (t) {
              var e = h.parse(t);
              return c.wait && (e = r.extend(a || {}, e)), h._finishSave(e), c.wait && h.set(u, l), h
            }, function (t) {
              throw h._cancelSave(), t
            })
          }), this._allPreviousSaves)
        }, destroy: function (t) {
          t = t || {};
          var e = this, n = function () {
            e.trigger("destroy", e, e.collection, t)
          };
          if (!this.id)return n();
          t.wait || n();
          var r = s("classes", this.className, this.id, "DELETE", this._flags, t);
          return r.then(function () {
            return t.wait && n(), e
          })
        }, parse: function (e) {
          var n = r.clone(e);
          return r(["createdAt", "updatedAt"]).each(function (e) {
            n[e] && (n[e] = t._parseDate(n[e]))
          }), n.updatedAt || (n.updatedAt = n.createdAt), n
        }, clone: function () {
          return new this.constructor(this.attributes)
        }, isNew: function () {
          return !this.id
        }, change: function (e) {
          e = e || {};
          var n = this._changing;
          this._changing = !0;
          var i = this;
          t._objectEach(this._silent, function (t) {
            i._pending[t] = !0
          });
          var s = r.extend({}, e.changes, this._silent);
          if (this._silent = {}, t._objectEach(s, function (t, n) {
              i.trigger("change:" + n, i, i.get(n), e)
            }), n)return this;
          for (var o = function (t, e) {
            i._pending[e] || i._silent[e] || delete i.changed[e]
          }; !r.isEmpty(this._pending);)this._pending = {}, this.trigger("change", this, e), t._objectEach(this.changed, o), i._previousAttributes = r.clone(this.attributes);
          return this._changing = !1, this
        }, hasChanged: function (t) {
          return arguments.length ? this.changed && r.has(this.changed, t) : !r.isEmpty(this.changed)
        }, changedAttributes: function (e) {
          if (!e)return !!this.hasChanged() && r.clone(this.changed);
          var n = {}, i = this._previousAttributes;
          return t._objectEach(e, function (t, e) {
            r.isEqual(i[e], t) || (n[e] = t)
          }), n
        }, previous: function (t) {
          return arguments.length && this._previousAttributes ? this._previousAttributes[t] : null
        }, previousAttributes: function () {
          return r.clone(this._previousAttributes)
        }, isValid: function () {
          try {
            this.validate(this.attributes)
          } catch (t) {
            return !1
          }
          return !0
        }, validate: function (e) {
          if (r.has(e, "ACL") && !(e.ACL instanceof t.ACL))throw new i(i.OTHER_CAUSE, "ACL must be a AV.ACL.")
        }, _validate: function (t, e) {
          !e.silent && this.validate && (t = r.extend({}, this.attributes, t), this.validate(t))
        }, getACL: function () {
          return this.get("ACL")
        }, setACL: function (t, e) {
          return this.set("ACL", t, e)
        }, disableBeforeHook: function () {
          this.ignoreHook("beforeSave"), this.ignoreHook("beforeUpdate"), this.ignoreHook("beforeDelete")
        }, disableAfterHook: function () {
          this.ignoreHook("afterSave"), this.ignoreHook("afterUpdate"), this.ignoreHook("afterDelete")
        }, ignoreHook: function (e) {
          r.contains(["beforeSave", "afterSave", "beforeUpdate", "afterUpdate", "beforeDelete", "afterDelete"], e) || console.trace("Unsupported hookName: " + e), t.hookKey || console.trace("ignoreHook required hookKey"), this._flags.__ignore_hooks || (this._flags.__ignore_hooks = []), this._flags.__ignore_hooks.push(e)
        }
      }), t.Object.createWithoutData = function (e, n, r) {
        var i = t.Object._create(e, void 0, void 0, !0);
        return i.id = n, i._hasData = r, i
      }, t.Object.destroyAll = function (e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!e || 0 === e.length)return t.Promise.resolve();
        var i = r.groupBy(e, function (t) {
          return JSON.stringify({className: t.className, flags: t._flags})
        }), o = {
          requests: r.map(i, function (t) {
            var e = r.map(t, "id").join(",");
            return {method: "DELETE", path: "/1.1/classes/" + t[0].className + "/" + e, body: t[0]._flags}
          })
        };
        return s("batch", null, null, "POST", o, n)
      }, t.Object._getSubclass = function (e) {
        if (!r.isString(e))throw new Error("AV.Object._getSubclass requires a string argument.");
        var n = t.Object._classMap[e];
        return n || (n = t.Object.extend(e), t.Object._classMap[e] = n), n
      }, t.Object._create = function (e, n, r, i) {
        var s = t.Object._getSubclass(e);
        return new s(n, r, i)
      }, t.Object._classMap = {}, t.Object._extend = t._extend, t.Object.new = function (e, n) {
        return new t.Object(e, n)
      }, t.Object.extend = function (e, n, i) {
        if (!r.isString(e)) {
          if (e && r.has(e, "className"))return t.Object.extend(e.className, e, n);
          throw new Error("AV.Object.extend's first argument should be the className.")
        }
        "User" === e && (e = "_User");
        var s = null;
        if (r.has(t.Object._classMap, e)) {
          var o = t.Object._classMap[e];
          if (!n && !i)return o;
          s = o._extend(n, i)
        } else n = n || {}, n._className = e, s = this._extend(n, i);
        return s.extend = function (n) {
          if (r.isString(n) || n && r.has(n, "className"))return t.Object.extend.apply(s, arguments);
          var i = [e].concat(r.toArray(arguments));
          return t.Object.extend.apply(s, i)
        }, s.new = function (t, e) {
          return new s(t, e)
        }, t.Object._classMap[e] = s, s
      }, Object.defineProperty(t.Object.prototype, "className", {
        get: function () {
          var t = this._className || this.constructor._LCClassName || this.constructor.name;
          return "User" === t ? "_User" : t
        }
      }), t.Object.register = function (e, n) {
        if (!(e.prototype instanceof t.Object))throw new Error("registered class is not a subclass of AV.Object");
        var r = n || e.name;
        if (!r.length)throw new Error("registered class must be named");
        n && (e._LCClassName = n), t.Object._classMap[r] = e
      }, t.Object._findUnsavedChildren = function (e, n, r) {
        t._traverse(e, function (e) {
          return e instanceof t.Object ? (e._refreshCache(), void(e.dirty() && n.push(e))) : e instanceof t.File ? void(e.url() || e.id || r.push(e)) : void 0
        })
      }, t.Object._canBeSerializedAsValue = function (e) {
        var n = !0;
        return e instanceof t.Object || e instanceof t.File ? n = !!e.id : r.isArray(e) ? t._arrayEach(e, function (e) {
          t.Object._canBeSerializedAsValue(e) || (n = !1)
        }) : r.isObject(e) && t._objectEach(e, function (e) {
          t.Object._canBeSerializedAsValue(e) || (n = !1)
        }), n
      }, t.Object._deepSaveAsync = function (e, n, o) {
        var a = [], u = [];
        t.Object._findUnsavedChildren(e, a, u), n && (a = r.filter(a, function (t) {
          return t != n
        }));
        var c = t.Promise.resolve();
        r.each(u, function (t) {
          c = c.then(function () {
            return t.save()
          })
        });
        var l = r.uniq(a), h = r.uniq(l);
        return c.then(function () {
          return t.Promise._continueWhile(function () {
            return h.length > 0
          }, function () {
            var e = [], n = [];
            if (t._arrayEach(h, function (t) {
                return e.length > 20 ? void n.push(t) : void(t._canBeSerialized() ? e.push(t) : n.push(t))
              }), h = n, 0 === e.length)return t.Promise.reject(new i(i.OTHER_CAUSE, "Tried to save a batch with a cycle."));
            var a = t.Promise.resolve(r.map(e, function (e) {
              return e._allPreviousSaves || t.Promise.resolve()
            })), u = a.then(function () {
              return s("batch", null, null, "POST", {
                requests: r.map(e, function (t) {
                  var e = t._getSaveJSON();
                  r.extend(e, t._flags);
                  var n = "POST", i = "/1.1/classes/" + t.className;
                  return t.id && (i = i + "/" + t.id, n = "PUT"), t._startSave(), {method: n, path: i, body: e}
                })
              }, o).then(function (n) {
                var r;
                if (t._arrayEach(e, function (t, e) {
                    n[e].success ? t._finishSave(t.parse(n[e].success)) : (r = r || n[e].error, t._cancelSave())
                  }), r)return t.Promise.reject(new i(r.code, r.error))
              })
            });
            return t._arrayEach(e, function (t) {
              t._allPreviousSaves = u
            }), u
          })
        }).then(function () {
          return e
        })
      }
    }
  }, function (t, e, n) {
    "use strict";
    var r = n(0);
    t.exports = function (t) {
      t.Op = function () {
        this._initialize.apply(this, arguments)
      }, t.Op.prototype = {
        _initialize: function () {
        }
      }, r.extend(t.Op, {
        _extend: t._extend, _opDecoderMap: {}, _registerDecoder: function (e, n) {
          t.Op._opDecoderMap[e] = n
        }, _decode: function (e) {
          var n = t.Op._opDecoderMap[e.__op];
          return n ? n(e) : void 0
        }
      }), t.Op._registerDecoder("Batch", function (e) {
        var n = null;
        return t._arrayEach(e.ops, function (e) {
          e = t.Op._decode(e), n = e._mergeWithPrevious(n)
        }), n
      }), t.Op.Set = t.Op._extend({
        _initialize: function (t) {
          this._value = t
        }, value: function () {
          return this._value
        }, toJSON: function () {
          return t._encode(this.value())
        }, _mergeWithPrevious: function (t) {
          return this
        }, _estimate: function (t) {
          return this.value()
        }
      }), t.Op._UNSET = {}, t.Op.Unset = t.Op._extend({
        toJSON: function () {
          return {__op: "Delete"}
        }, _mergeWithPrevious: function (t) {
          return this
        }, _estimate: function (e) {
          return t.Op._UNSET
        }
      }), t.Op._registerDecoder("Delete", function (e) {
        return new t.Op.Unset
      }), t.Op.Increment = t.Op._extend({
        _initialize: function (t) {
          this._amount = t
        }, amount: function () {
          return this._amount
        }, toJSON: function () {
          return {__op: "Increment", amount: this._amount}
        }, _mergeWithPrevious: function (e) {
          if (e) {
            if (e instanceof t.Op.Unset)return new t.Op.Set(this.amount());
            if (e instanceof t.Op.Set)return new t.Op.Set(e.value() + this.amount());
            if (e instanceof t.Op.Increment)return new t.Op.Increment(this.amount() + e.amount());
            throw new Error("Op is invalid after previous op.")
          }
          return this
        }, _estimate: function (t) {
          return t ? t + this.amount() : this.amount()
        }
      }), t.Op._registerDecoder("Increment", function (e) {
        return new t.Op.Increment(e.amount)
      }), t.Op.Add = t.Op._extend({
        _initialize: function (t) {
          this._objects = t
        }, objects: function () {
          return this._objects
        }, toJSON: function () {
          return {__op: "Add", objects: t._encode(this.objects())}
        }, _mergeWithPrevious: function (e) {
          if (e) {
            if (e instanceof t.Op.Unset)return new t.Op.Set(this.objects());
            if (e instanceof t.Op.Set)return new t.Op.Set(this._estimate(e.value()));
            if (e instanceof t.Op.Add)return new t.Op.Add(e.objects().concat(this.objects()));
            throw new Error("Op is invalid after previous op.")
          }
          return this
        }, _estimate: function (t) {
          return t ? t.concat(this.objects()) : r.clone(this.objects())
        }
      }), t.Op._registerDecoder("Add", function (e) {
        return new t.Op.Add(t._decode(e.objects))
      }), t.Op.AddUnique = t.Op._extend({
        _initialize: function (t) {
          this._objects = r.uniq(t)
        }, objects: function () {
          return this._objects
        }, toJSON: function () {
          return {__op: "AddUnique", objects: t._encode(this.objects())}
        }, _mergeWithPrevious: function (e) {
          if (e) {
            if (e instanceof t.Op.Unset)return new t.Op.Set(this.objects());
            if (e instanceof t.Op.Set)return new t.Op.Set(this._estimate(e.value()));
            if (e instanceof t.Op.AddUnique)return new t.Op.AddUnique(this._estimate(e.objects()));
            throw new Error("Op is invalid after previous op.")
          }
          return this
        }, _estimate: function (e) {
          if (e) {
            var n = r.clone(e);
            return t._arrayEach(this.objects(), function (e) {
              if (e instanceof t.Object && e.id) {
                var i = r.find(n, function (n) {
                  return n instanceof t.Object && n.id === e.id
                });
                if (i) {
                  var s = r.indexOf(n, i);
                  n[s] = e
                } else n.push(e)
              } else r.contains(n, e) || n.push(e)
            }), n
          }
          return r.clone(this.objects())
        }
      }), t.Op._registerDecoder("AddUnique", function (e) {
        return new t.Op.AddUnique(t._decode(e.objects))
      }), t.Op.Remove = t.Op._extend({
        _initialize: function (t) {
          this._objects = r.uniq(t)
        }, objects: function () {
          return this._objects
        }, toJSON: function () {
          return {__op: "Remove", objects: t._encode(this.objects())}
        }, _mergeWithPrevious: function (e) {
          if (e) {
            if (e instanceof t.Op.Unset)return e;
            if (e instanceof t.Op.Set)return new t.Op.Set(this._estimate(e.value()));
            if (e instanceof t.Op.Remove)return new t.Op.Remove(r.union(e.objects(), this.objects()));
            throw new Error("Op is invalid after previous op.")
          }
          return this
        }, _estimate: function (e) {
          if (e) {
            var n = r.difference(e, this.objects());
            return t._arrayEach(this.objects(), function (e) {
              e instanceof t.Object && e.id && (n = r.reject(n, function (n) {
                return n instanceof t.Object && n.id === e.id
              }))
            }), n
          }
          return []
        }
      }), t.Op._registerDecoder("Remove", function (e) {
        return new t.Op.Remove(t._decode(e.objects))
      }), t.Op.Relation = t.Op._extend({
        _initialize: function (e, n) {
          this._targetClassName = null;
          var i = this, s = function (e) {
            if (e instanceof t.Object) {
              if (!e.id)throw new Error("You can't add an unsaved AV.Object to a relation.");
              if (i._targetClassName || (i._targetClassName = e.className), i._targetClassName !== e.className)throw new Error("Tried to create a AV.Relation with 2 different types: " + i._targetClassName + " and " + e.className + ".");
              return e.id
            }
            return e
          };
          this.relationsToAdd = r.uniq(r.map(e, s)), this.relationsToRemove = r.uniq(r.map(n, s))
        }, added: function () {
          var e = this;
          return r.map(this.relationsToAdd, function (n) {
            var r = t.Object._create(e._targetClassName);
            return r.id = n, r
          })
        }, removed: function () {
          var e = this;
          return r.map(this.relationsToRemove, function (n) {
            var r = t.Object._create(e._targetClassName);
            return r.id = n, r
          })
        }, toJSON: function () {
          var t = null, e = null, n = this, i = function (t) {
            return {__type: "Pointer", className: n._targetClassName, objectId: t}
          }, s = null;
          return this.relationsToAdd.length > 0 && (s = r.map(this.relationsToAdd, i), t = {
            __op: "AddRelation",
            objects: s
          }), this.relationsToRemove.length > 0 && (s = r.map(this.relationsToRemove, i), e = {
            __op: "RemoveRelation",
            objects: s
          }), t && e ? {__op: "Batch", ops: [t, e]} : t || e || {}
        }, _mergeWithPrevious: function (e) {
          if (e) {
            if (e instanceof t.Op.Unset)throw new Error("You can't modify a relation after deleting it.");
            if (e instanceof t.Op.Relation) {
              if (e._targetClassName && e._targetClassName !== this._targetClassName)throw new Error("Related object must be of class " + e._targetClassName + ", but " + this._targetClassName + " was passed in.");
              var n = r.union(r.difference(e.relationsToAdd, this.relationsToRemove), this.relationsToAdd), i = r.union(r.difference(e.relationsToRemove, this.relationsToAdd), this.relationsToRemove), s = new t.Op.Relation(n, i);
              return s._targetClassName = this._targetClassName, s
            }
            throw new Error("Op is invalid after previous op.")
          }
          return this
        }, _estimate: function (e, n, r) {
          if (e) {
            if (e instanceof t.Relation) {
              if (this._targetClassName)if (e.targetClassName) {
                if (e.targetClassName !== this._targetClassName)throw new Error("Related object must be a " + e.targetClassName + ", but a " + this._targetClassName + " was passed in.")
              } else e.targetClassName = this._targetClassName;
              return e
            }
            throw new Error("Op is invalid after previous op.")
          }
          var i = new t.Relation(n, r);
          i.targetClassName = this._targetClassName
        }
      }), t.Op._registerDecoder("AddRelation", function (e) {
        return new t.Op.Relation(t._decode(e.objects), [])
      }), t.Op._registerDecoder("RemoveRelation", function (e) {
        return new t.Op.Relation([], t._decode(e.objects))
      })
    }
  }, function (t, e, n) {
    "use strict";
    var r = n(1).request;
    t.exports = function (t) {
      t.Installation = t.Object.extend("_Installation"), t.Push = t.Push || {}, t.Push.send = function (t, e) {
        if (t.where && (t.where = t.where.toJSON().where), t.where && t.cql)throw new Error("Both where and cql can't be set");
        if (t.push_time && (t.push_time = t.push_time.toJSON()), t.expiration_time && (t.expiration_time = t.expiration_time.toJSON()), t.expiration_time && t.expiration_time_interval)throw new Error("Both expiration_time and expiration_time_interval can't be set");
        var n = r("push", null, null, "POST", t, e);
        return n
      }
    }
  }, function (t, e, n) {
    "use strict";
    var r = n(0), i = n(6)("leancloud:query"), s = n(2), o = n(3), a = n(1).request, u = n(4), c = u.ensureArray, l = u.transformFetchOptions, h = function (t, e) {
      if (void 0 === t)throw new Error(e)
    };
    t.exports = function (t) {
      t.Query = function (e) {
        r.isString(e) && (e = t.Object._getSubclass(e)), this.objectClass = e, this.className = e.prototype.className, this._where = {}, this._include = [], this._select = [], this._limit = -1, this._skip = 0, this._extraOptions = {}
      }, t.Query.or = function () {
        var e = r.toArray(arguments), n = null;
        t._arrayEach(e, function (t) {
          if (r.isNull(n) && (n = t.className), n !== t.className)throw new Error("All queries must be for the same class")
        });
        var i = new t.Query(n);
        return i._orQuery(e), i
      }, t.Query.and = function () {
        var e = r.toArray(arguments), n = null;
        t._arrayEach(e, function (t) {
          if (r.isNull(n) && (n = t.className), n !== t.className)throw new Error("All queries must be for the same class")
        });
        var i = new t.Query(n);
        return i._andQuery(e), i
      }, t.Query.doCloudQuery = function (e, n, i) {
        var s = {cql: e};
        r.isArray(n) ? s.pvalues = n : i = n;
        var o = a("cloudQuery", null, null, "GET", s, i);
        return o.then(function (e) {
          var n = new t.Query(e.className), i = r.map(e.results, function (t) {
            var r = n._newObject(e);
            return r._finishFetch && r._finishFetch(n._processResult(t), !0), r
          });
          return {results: i, count: e.count, className: e.className}
        })
      }, t.Query._extend = t._extend, t.Query.prototype = {
        _processResult: function (t) {
          return t
        }, get: function (t, e) {
          if (!t) {
            var n = new o(o.OBJECT_NOT_FOUND, "Object not found.");
            throw n
          }
          var i = this._newObject();
          i.id = t;
          var s = this.toJSON(), u = {};
          return s.keys && (u.keys = s.keys), s.include && (u.include = s.include), s.includeACL && (u.includeACL = s.includeACL), a("classes", this.className, t, "GET", l(u), e).then(function (t) {
            if (r.isEmpty(t))throw new o(o.OBJECT_NOT_FOUND, "Object not found.");
            return i._finishFetch(i.parse(t), !0), i
          })
        }, toJSON: function () {
          var e = {where: this._where};
          return this._include.length > 0 && (e.include = this._include.join(",")), this._select.length > 0 && (e.keys = this._select.join(",")), void 0 !== this._includeACL && (e.returnACL = this._includeACL), this._limit >= 0 && (e.limit = this._limit), this._skip > 0 && (e.skip = this._skip), void 0 !== this._order && (e.order = this._order), t._objectEach(this._extraOptions, function (t, n) {
            e[n] = t
          }), e
        }, _newObject: function (e) {
          return e && e.className ? new t.Object(e.className) : this.objectClass === t.Role ? new t.Role(void 0, void 0, !0) : new this.objectClass
        }, _createRequest: function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.toJSON(), e = arguments[1];
          if (JSON.stringify(t).length > 2e3) {
            var n = {requests: [{method: "GET", path: "/1.1/classes/" + this.className, params: t}]};
            return a("batch", null, null, "POST", n, e).then(function (t) {
              var e = t[0];
              if (e.success)return e.success;
              var n = new Error(e.error.error || "Unknown batch error");
              throw n.code = e.error.code, n
            })
          }
          return a("classes", this.className, null, "GET", t, e)
        }, _parseResponse: function (t) {
          var e = this;
          return r.map(t.results, function (n) {
            var r = e._newObject(t);
            return r._finishFetch && r._finishFetch(e._processResult(n), !0), r
          })
        }, find: function (t) {
          var e = this._createRequest(void 0, t);
          return e.then(this._parseResponse.bind(this))
        }, scan: function () {
          var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.orderedBy, o = e.batchSize, u = arguments[1], c = this.toJSON();
          i("scan %O", c), c.order && (console.warn("The order of the query is ignored for Query#scan. Checkout the orderedBy option of Query#scan."), delete c.order), c.skip && (console.warn("The skip option of the query is ignored for Query#scan."), delete c.skip), c.limit && (console.warn("The limit option of the query is ignored for Query#scan."), delete c.limit), n && (c.scan_key = n), o && (c.limit = o);
          var l = s.resolve([]), h = void 0, f = !1;
          return {
            next: function () {
              return l = l.then(function (e) {
                return f ? [] : e.length > 1 ? e : h || 0 === e.length ? a("scan/classes", t.className, null, "GET", h ? r.extend({}, c, {cursor: h}) : c, u).then(function (e) {
                  return h = e.cursor, t._parseResponse(e)
                }).then(function (t) {
                  return t.length || (f = !0), e.concat(t)
                }) : (f = !0, e)
              }), l.then(function (t) {
                return t.shift()
              }).then(function (t) {
                return {value: t, done: f}
              })
            }
          }
        }, destroyAll: function (e) {
          var n = this;
          return n.find(e).then(function (n) {
            return t.Object.destroyAll(n, e)
          })
        }, count: function (t) {
          var e = this.toJSON();
          e.limit = 0, e.count = 1;
          var n = this._createRequest(e, t);
          return n.then(function (t) {
            return t.count
          })
        }, first: function (t) {
          var e = this, n = this.toJSON();
          n.limit = 1;
          var i = this._createRequest(n, t);
          return i.then(function (t) {
            return r.map(t.results, function (t) {
              var n = e._newObject();
              return n._finishFetch && n._finishFetch(e._processResult(t), !0), n
            })[0]
          })
        }, skip: function (t) {
          return h(t, "undefined is not a valid skip value"), this._skip = t, this
        }, limit: function (t) {
          return h(t, "undefined is not a valid limit value"), this._limit = t, this
        }, equalTo: function (e, n) {
          return h(e, "undefined is not a valid key"), h(n, "undefined is not a valid value"), this._where[e] = t._encode(n), this
        }, _addCondition: function (e, n, r) {
          return h(e, "undefined is not a valid condition key"), h(n, "undefined is not a valid condition"), h(r, "undefined is not a valid condition value"), this._where[e] || (this._where[e] = {}), this._where[e][n] = t._encode(r), this
        }, sizeEqualTo: function (t, e) {
          this._addCondition(t, "$size", e)
        }, notEqualTo: function (t, e) {
          return this._addCondition(t, "$ne", e), this
        }, lessThan: function (t, e) {
          return this._addCondition(t, "$lt", e), this
        }, greaterThan: function (t, e) {
          return this._addCondition(t, "$gt", e), this
        }, lessThanOrEqualTo: function (t, e) {
          return this._addCondition(t, "$lte", e), this
        }, greaterThanOrEqualTo: function (t, e) {
          return this._addCondition(t, "$gte", e), this
        }, containedIn: function (t, e) {
          return this._addCondition(t, "$in", e), this
        }, notContainedIn: function (t, e) {
          return this._addCondition(t, "$nin", e), this
        }, containsAll: function (t, e) {
          return this._addCondition(t, "$all", e), this
        }, exists: function (t) {
          return this._addCondition(t, "$exists", !0), this
        }, doesNotExist: function (t) {
          return this._addCondition(t, "$exists", !1), this
        }, matches: function (t, e, n) {
          return this._addCondition(t, "$regex", e), n || (n = ""), e.ignoreCase && (n += "i"), e.multiline && (n += "m"), n && n.length && this._addCondition(t, "$options", n), this
        }, matchesQuery: function (t, e) {
          var n = e.toJSON();
          return n.className = e.className, this._addCondition(t, "$inQuery", n), this
        }, doesNotMatchQuery: function (t, e) {
          var n = e.toJSON();
          return n.className = e.className, this._addCondition(t, "$notInQuery", n), this
        }, matchesKeyInQuery: function (t, e, n) {
          var r = n.toJSON();
          return r.className = n.className, this._addCondition(t, "$select", {key: e, query: r}), this
        }, doesNotMatchKeyInQuery: function (t, e, n) {
          var r = n.toJSON();
          return r.className = n.className, this._addCondition(t, "$dontSelect", {key: e, query: r}), this
        }, _orQuery: function (t) {
          var e = r.map(t, function (t) {
            return t.toJSON().where
          });
          return this._where.$or = e, this
        }, _andQuery: function (t) {
          var e = r.map(t, function (t) {
            return t.toJSON().where
          });
          return this._where.$and = e, this
        }, _quote: function (t) {
          return "\\Q" + t.replace("\\E", "\\E\\\\E\\Q") + "\\E"
        }, contains: function (t, e) {
          return this._addCondition(t, "$regex", this._quote(e)), this
        }, startsWith: function (t, e) {
          return this._addCondition(t, "$regex", "^" + this._quote(e)), this
        }, endsWith: function (t, e) {
          return this._addCondition(t, "$regex", this._quote(e) + "$"), this
        }, ascending: function (t) {
          return h(t, "undefined is not a valid key"), this._order = t, this
        }, addAscending: function (t) {
          return h(t, "undefined is not a valid key"), this._order ? this._order += "," + t : this._order = t, this
        }, descending: function (t) {
          return h(t, "undefined is not a valid key"), this._order = "-" + t, this
        }, addDescending: function (t) {
          return h(t, "undefined is not a valid key"), this._order ? this._order += ",-" + t : this._order = "-" + t, this
        }, near: function (e, n) {
          return n instanceof t.GeoPoint || (n = new t.GeoPoint(n)), this._addCondition(e, "$nearSphere", n), this
        }, withinRadians: function (t, e, n) {
          return this.near(t, e), this._addCondition(t, "$maxDistance", n), this
        }, withinMiles: function (t, e, n) {
          return this.withinRadians(t, e, n / 3958.8)
        }, withinKilometers: function (t, e, n) {
          return this.withinRadians(t, e, n / 6371)
        }, withinGeoBox: function (e, n, r) {
          return n instanceof t.GeoPoint || (n = new t.GeoPoint(n)), r instanceof t.GeoPoint || (r = new t.GeoPoint(r)), this._addCondition(e, "$within", {$box: [n, r]}), this
        }, include: function (t) {
          var e = this;
          return h(t, "undefined is not a valid key"), r(arguments).forEach(function (t) {
            e._include = e._include.concat(c(t))
          }), this
        }, includeACL: function () {
          var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return this._includeACL = t, this
        }, select: function (t) {
          var e = this;
          return h(t, "undefined is not a valid key"), r(arguments).forEach(function (t) {
            e._select = e._select.concat(c(t))
          }), this
        }, each: function (e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this._order || this._skip || this._limit >= 0) {
            var i = new Error("Cannot iterate on a query with sort, skip, or limit.");
            return t.Promise.reject(i)
          }
          var s = new t.Query(this.objectClass);
          s._limit = n.batchSize || 100, s._where = r.clone(this._where), s._include = r.clone(this._include), s.ascending("objectId");
          var o = !1;
          return t.Promise._continueWhile(function () {
            return !o
          }, function () {
            return s.find(n).then(function (n) {
              var i = t.Promise.resolve();
              return r.each(n, function (t) {
                i = i.then(function () {
                  return e(t)
                })
              }), i.then(function () {
                n.length >= s._limit ? s.greaterThan("objectId", n[n.length - 1].id) : o = !0
              })
            })
          })
        }
      }, t.FriendShipQuery = t.Query._extend({
        _objectClass: t.User, _newObject: function () {
          return new t.User
        }, _processResult: function (t) {
          if (t && t[this._friendshipTag]) {
            var e = t[this._friendshipTag];
            return "Pointer" === e.__type && "_User" === e.className && (delete e.__type, delete e.className), e
          }
          return null
        }
      })
    }
  }, function (t, e, n) {
    "use strict";
    var r = n(0);
    t.exports = function (t) {
      t.Relation = function (t, e) {
        if (!r.isString(e))throw new TypeError("key must be a string");
        this.parent = t, this.key = e, this.targetClassName = null
      }, t.Relation.reverseQuery = function (e, n, r) {
        var i = new t.Query(e);
        return i.equalTo(n, r._toPointer()), i
      }, t.Relation.prototype = {
        _ensureParentAndKey: function (t, e) {
          if (this.parent = this.parent || t, this.key = this.key || e, this.parent !== t)throw new Error("Internal Error. Relation retrieved from two different Objects.");
          if (this.key !== e)throw new Error("Internal Error. Relation retrieved from two different keys.")
        }, add: function (e) {
          r.isArray(e) || (e = [e]);
          var n = new t.Op.Relation(e, []);
          this.parent.set(this.key, n), this.targetClassName = n._targetClassName
        }, remove: function (e) {
          r.isArray(e) || (e = [e]);
          var n = new t.Op.Relation([], e);
          this.parent.set(this.key, n), this.targetClassName = n._targetClassName
        }, toJSON: function () {
          return {__type: "Relation", className: this.targetClassName}
        }, query: function e() {
          var n, e;
          return this.targetClassName ? (n = t.Object._getSubclass(this.targetClassName), e = new t.Query(n)) : (n = t.Object._getSubclass(this.parent.className), e = new t.Query(n), e._extraOptions.redirectClassNameForKey = this.key), e._addCondition("$relatedTo", "object", this.parent._toPointer()), e._addCondition("$relatedTo", "key", this.key), e
        }
      }
    }
  }, function (t, e, n) {
    "use strict";
    var r = n(0), i = n(3);
    t.exports = function (t) {
      t.Role = t.Object.extend("_Role", {
        constructor: function (e, n, i) {
          if (r.isString(e) ? (t.Object.prototype.constructor.call(this, null, null), this.setName(e)) : t.Object.prototype.constructor.call(this, e, n), void 0 === n) {
            if (!i && !this.getACL()) {
              console.warn("DEPRECATED: To create a Role without ACL(a default ACL will be used) is deprecated. Please specify an ACL.");
              var s = new t.ACL;
              s.setPublicReadAccess(!0), this.setACL(s)
            }
          } else {
            if (!(n instanceof t.ACL))throw new TypeError("acl must be an instance of AV.ACL");
            this.setACL(n)
          }
        }, getName: function () {
          return this.get("name")
        }, setName: function (t, e) {
          return this.set("name", t, e)
        }, getUsers: function () {
          return this.relation("users")
        }, getRoles: function () {
          return this.relation("roles")
        }, validate: function (e, n) {
          if ("name" in e && e.name !== this.getName()) {
            var s = e.name;
            if (this.id && this.id !== e.objectId)return new i(i.OTHER_CAUSE, "A role's name can only be set before it has been saved.");
            if (!r.isString(s))return new i(i.OTHER_CAUSE, "A role's name must be a String.");
            if (!/^[0-9a-zA-Z\-_ ]+$/.test(s))return new i(i.OTHER_CAUSE, "A role's name can only contain alphanumeric characters, _, -, and spaces.")
          }
          return !!t.Object.prototype.validate && t.Object.prototype.validate.call(this, e, n)
        }
      })
    }
  }, function (t, e, n) {
    "use strict";
    var r = n(0), i = n(1).request;
    t.exports = function (t) {
      t.SearchSortBuilder = function () {
        this._sortFields = []
      }, t.SearchSortBuilder.prototype = {
        _addField: function (t, e, n, r) {
          var i = {};
          return i[t] = {
            order: e || "asc",
            mode: n || "avg",
            missing: "_" + (r || "last")
          }, this._sortFields.push(i), this
        }, ascending: function (t, e, n) {
          return this._addField(t, "asc", e, n)
        }, descending: function (t, e, n) {
          return this._addField(t, "desc", e, n)
        }, whereNear: function (t, e, n) {
          n = n || {};
          var r = {}, i = {lat: e.latitude, lon: e.longitude}, s = {
            order: n.order || "asc",
            mode: n.mode || "avg",
            unit: n.unit || "km"
          };
          return s[t] = i, r._geo_distance = s, this._sortFields.push(r), this
        }, build: function () {
          return JSON.stringify(t._encode(this._sortFields))
        }
      }, t.SearchQuery = t.Query._extend({
        _sid: null,
        _hits: 0,
        _queryString: null,
        _highlights: null,
        _sortBuilder: null,
        _createRequest: function (t, e) {
          return i("search/select", null, null, "GET", t || this.toJSON(), e)
        },
        sid: function (t) {
          return this._sid = t, this
        },
        queryString: function (t) {
          return this._queryString = t, this
        },
        highlights: function (t) {
          var e;
          return e = t && r.isString(t) ? arguments : t, this._highlights = e, this
        },
        sortBy: function (t) {
          return this._sortBuilder = t, this
        },
        hits: function () {
          return this._hits || (this._hits = 0), this._hits
        },
        _processResult: function (t) {
          return delete t.className, delete t._app_url, delete t._deeplink, t
        },
        hasMore: function () {
          return !this._hitEnd
        },
        reset: function () {
          this._hitEnd = !1, this._sid = null, this._hits = 0
        },
        find: function () {
          var t = this, e = this._createRequest();
          return e.then(function (e) {
            return e.sid ? (t._oldSid = t._sid, t._sid = e.sid) : (t._sid = null, t._hitEnd = !0), t._hits = e.hits || 0, r.map(e.results, function (n) {
              n.className && (e.className = n.className);
              var r = t._newObject(e);
              return r.appURL = n._app_url, r._finishFetch(t._processResult(n), !0), r
            })
          })
        },
        toJSON: function () {
          var e = t.SearchQuery.__super__.toJSON.call(this);
          if (delete e.where, this.className && (e.clazz = this.className), this._sid && (e.sid = this._sid), !this._queryString)throw new Error("Please set query string.");
          if (e.q = this._queryString, this._highlights && (e.highlights = this._highlights.join(",")), this._sortBuilder && e.order)throw new Error("sort and order can not be set at same time.");
          return this._sortBuilder && (e.sort = this._sortBuilder.build()), e
        }
      })
    }
  }, function (t, e, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, i = n(0), s = n(1).request;
    t.exports = function (t) {
      var e = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return t.User.currentAsync().then(function (n) {
          return n || t.User._fetchUserBySessionToken(e.sessionToken)
        })
      }, n = function (n) {
        return e(n).then(function (e) {
          return t.Object.createWithoutData("_User", e.id)._toPointer()
        })
      };
      t.Status = function (t, e) {
        return this.data = {}, this.inboxType = "default", this.query = null, t && "object" === ("undefined" == typeof t ? "undefined" : r(t)) ? this.data = t : (t && (this.data.image = t), e && (this.data.message = e)), this
      }, t.Status.prototype = {
        get: function (t) {
          return this.data[t]
        }, set: function (t, e) {
          return this.data[t] = e, this
        }, destroy: function (e) {
          if (!this.id)return t.Promise.reject(new Error("The status id is not exists."));
          var n = s("statuses", null, this.id, "DELETE", e);
          return n
        }, toObject: function () {
          return this.id ? t.Object.createWithoutData("_Status", this.id) : null
        }, _getDataJSON: function () {
          var e = i.clone(this.data);
          return t._encode(e)
        }, send: function () {
          var e = this, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (!r.sessionToken && !t.User.current())throw new Error("Please signin an user.");
          return this.query ? n(r).then(function (t) {
            var n = e.query.toJSON();
            n.className = e.query.className;
            var i = {};
            return i.query = n, e.data = e.data || {}, e.data.source = e.data.source || t, i.data = e._getDataJSON(), i.inboxType = e.inboxType || "default", s("statuses", null, null, "POST", i, r)
          }).then(function (n) {
            return e.id = n.objectId, e.createdAt = t._parseDate(n.createdAt),
              e
          }) : t.Status.sendStatusToFollowers(this, r)
        }, _finishFetch: function (e) {
          this.id = e.objectId, this.createdAt = t._parseDate(e.createdAt), this.updatedAt = t._parseDate(e.updatedAt), this.messageId = e.messageId, delete e.messageId, delete e.objectId, delete e.createdAt, delete e.updatedAt, this.data = t._decode(e)
        }
      }, t.Status.sendStatusToFollowers = function (e) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!r.sessionToken && !t.User.current())throw new Error("Please signin an user.");
        return n(r).then(function (n) {
          var i = {};
          i.className = "_Follower", i.keys = "follower", i.where = {user: n};
          var o = {};
          o.query = i, e.data = e.data || {}, e.data.source = e.data.source || n, o.data = e._getDataJSON(), o.inboxType = e.inboxType || "default";
          var a = s("statuses", null, null, "POST", o, r);
          return a.then(function (n) {
            return e.id = n.objectId, e.createdAt = t._parseDate(n.createdAt), e
          })
        })
      }, t.Status.sendPrivateStatus = function (e, r) {
        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (!o.sessionToken && !t.User.current())throw new Error("Please signin an user.");
        if (!r)throw new Error("Invalid target user.");
        var a = i.isString(r) ? r : r.id;
        if (!a)throw new Error("Invalid target user.");
        return n(o).then(function (n) {
          var r = {};
          r.className = "_User", r.where = {objectId: a};
          var i = {};
          i.query = r, e.data = e.data || {}, e.data.source = e.data.source || n, i.data = e._getDataJSON(), i.inboxType = "private", e.inboxType = "private";
          var u = s("statuses", null, null, "POST", i, o);
          return u.then(function (n) {
            return e.id = n.objectId, e.createdAt = t._parseDate(n.createdAt), e
          })
        })
      }, t.Status.countUnreadStatuses = function (n) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default", o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (i.isString(r) || (o = r), !o.sessionToken && null == n && !t.User.current())throw new Error("Please signin an user or pass the owner objectId.");
        return e(o).then(function (e) {
          var n = {};
          return n.inboxType = t._encode(r), n.owner = t._encode(e), s("subscribe/statuses/count", null, null, "GET", n, o)
        })
      }, t.Status.resetUnreadCount = function (n) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default", o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (i.isString(r) || (o = r), !o.sessionToken && null == n && !t.User.current())throw new Error("Please signin an user or pass the owner objectId.");
        return e(o).then(function (e) {
          var n = {};
          return n.inboxType = t._encode(r), n.owner = t._encode(e), s("subscribe/statuses/resetUnreadCount", null, null, "POST", n, o)
        })
      }, t.Status.statusQuery = function (e) {
        var n = new t.Query("_Status");
        return e && n.equalTo("source", e), n
      }, t.InboxQuery = t.Query._extend({
        _objectClass: t.Status,
        _sinceId: 0,
        _maxId: 0,
        _inboxType: "default",
        _owner: null,
        _newObject: function () {
          return new t.Status
        },
        _createRequest: function (t, e) {
          return s("subscribe/statuses", null, null, "GET", t || this.toJSON(), e)
        },
        sinceId: function (t) {
          return this._sinceId = t, this
        },
        maxId: function (t) {
          return this._maxId = t, this
        },
        owner: function (t) {
          return this._owner = t, this
        },
        inboxType: function (t) {
          return this._inboxType = t, this
        },
        toJSON: function () {
          var e = t.InboxQuery.__super__.toJSON.call(this);
          return e.owner = t._encode(this._owner), e.inboxType = t._encode(this._inboxType), e.sinceId = t._encode(this._sinceId), e.maxId = t._encode(this._maxId), e
        }
      }), t.Status.inboxQuery = function (e, n) {
        var r = new t.InboxQuery(t.Status);
        return e && (r._owner = e), n && (r._inboxType = n), r
      }
    }
  }, function (t, e, n) {
    "use strict";
    var r = n(0), i = n(3), s = n(1).request, o = n(2), a = function () {
      if ("undefined" == typeof wx || "function" != typeof wx.login)throw new Error("Weapp Login is only available in Weapp");
      return new o(function (t, e) {
        wx.login({
          success: function (n) {
            var r = n.code, i = n.errMsg;
            r ? t(r) : e(new Error(i))
          }
        })
      })
    };
    t.exports = function (t) {
      t.User = t.Object.extend("_User", {
        _isCurrentUser: !1, _mergeMagicFields: function (e) {
          e.sessionToken && (this._sessionToken = e.sessionToken, delete e.sessionToken), t.User.__super__._mergeMagicFields.call(this, e)
        }, _cleanupAuthData: function () {
          if (this.isCurrent()) {
            var e = this.get("authData");
            e && t._objectEach(this.get("authData"), function (t, n) {
              e[n] || delete e[n]
            })
          }
        }, _synchronizeAllAuthData: function () {
          var e = this.get("authData");
          if (e) {
            var n = this;
            t._objectEach(this.get("authData"), function (t, e) {
              n._synchronizeAuthData(e)
            })
          }
        }, _synchronizeAuthData: function (e) {
          if (this.isCurrent()) {
            var n;
            r.isString(e) ? (n = e, e = t.User._authProviders[n]) : n = e.getAuthType();
            var i = this.get("authData");
            if (i && e) {
              var s = e.restoreAuthentication(i[n]);
              s || this._unlinkFrom(e)
            }
          }
        }, _handleSaveResult: function (e) {
          return e && !t._config.disableCurrentUser && (this._isCurrentUser = !0), this._cleanupAuthData(), this._synchronizeAllAuthData(), delete this._serverData.password, this._rebuildEstimatedDataForKey("password"), this._refreshCache(), !e && !this.isCurrent() || t._config.disableCurrentUser ? o.resolve() : o.resolve(t.User._saveCurrentUser(this))
        }, _linkWith: function (e, n) {
          var i, s = this;
          if (r.isString(e) ? (i = e, e = t.User._authProviders[e]) : i = e.getAuthType(), n) {
            var o = this.get("authData") || {};
            return o[i] = n, this.save({authData: o}).then(function (t) {
              return t._handleSaveResult(!0).then(function () {
                return t
              })
            })
          }
          return e.authenticate().then(function (t) {
            return s._linkWith(e, t)
          })
        }, linkWithWeapp: function () {
          var t = this;
          return a().then(function (e) {
            return t._linkWith("lc_weapp", {code: e})
          })
        }, _unlinkFrom: function (e) {
          var n = this;
          return r.isString(e) && (e = t.User._authProviders[e]), this._linkWith(e, null).then(function (t) {
            return n._synchronizeAuthData(e), t
          })
        }, _isLinked: function (t) {
          var e;
          e = r.isString(t) ? t : t.getAuthType();
          var n = this.get("authData") || {};
          return !!n[e]
        }, logOut: function () {
          this._logOutWithAll(), this._isCurrentUser = !1
        }, _logOutWithAll: function () {
          var e = this.get("authData");
          if (e) {
            var n = this;
            t._objectEach(this.get("authData"), function (t, e) {
              n._logOutWith(e)
            })
          }
        }, _logOutWith: function (e) {
          this.isCurrent() && (r.isString(e) && (e = t.User._authProviders[e]), e && e.deauthenticate && e.deauthenticate())
        }, signUp: function (t, e) {
          var n, r = t && t.username || this.get("username");
          if (!r || "" === r)throw n = new i(i.OTHER_CAUSE, "Cannot sign up user with an empty name.");
          var s = t && t.password || this.get("password");
          if (!s || "" === s)throw n = new i(i.OTHER_CAUSE, "Cannot sign up user with an empty password.");
          return this.save(t, e).then(function (t) {
            return t._handleSaveResult(!0).then(function () {
              return t
            })
          })
        }, signUpOrlogInWithMobilePhone: function (t) {
          var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = t && t.mobilePhoneNumber || this.get("mobilePhoneNumber");
          if (!r || "" === r)throw e = new i(i.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber with an empty mobilePhoneNumber.");
          var o = t && t.smsCode || this.get("smsCode");
          if (!o || "" === o)throw e = new i(i.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber  with an empty smsCode.");
          return n._makeRequest = function (t, e, n, r, i) {
            return s("usersByMobilePhone", null, null, "POST", i)
          }, this.save(t, n).then(function (t) {
            return delete t.attributes.smsCode, delete t._serverData.smsCode, t._handleSaveResult(!0).then(function () {
              return t
            })
          })
        }, logIn: function () {
          var t = this, e = s("login", null, null, "POST", this.toJSON());
          return e.then(function (e) {
            var n = t.parse(e);
            return t._finishFetch(n), t._handleSaveResult(!0).then(function () {
              return n.smsCode || delete t.attributes.smsCode, t
            })
          })
        }, save: function (e, n, i) {
          var s, o;
          return r.isObject(e) || r.isNull(e) || r.isUndefined(e) ? (s = e, o = n) : (s = {}, s[e] = n, o = i), o = o || {}, t.Object.prototype.save.call(this, s, o).then(function (t) {
            return t._handleSaveResult(!1).then(function () {
              return t
            })
          })
        }, follow: function (e, n) {
          if (!this.id)throw new Error("Please signin.");
          var i = void 0, o = void 0;
          e.user ? (i = e.user, o = e.attributes) : i = e;
          var a = r.isString(i) ? i : i.id;
          if (!a)throw new Error("Invalid target user.");
          var u = "users/" + this.id + "/friendship/" + a, c = s(u, null, null, "POST", t._encode(o), n);
          return c
        }, unfollow: function (t, e) {
          if (!this.id)throw new Error("Please signin.");
          var n = void 0;
          n = t.user ? t.user : t;
          var i = r.isString(n) ? n : n.id;
          if (!i)throw new Error("Invalid target user.");
          var o = "users/" + this.id + "/friendship/" + i, a = s(o, null, null, "DELETE", null, e);
          return a
        }, followerQuery: function () {
          return t.User.followerQuery(this.id)
        }, followeeQuery: function () {
          return t.User.followeeQuery(this.id)
        }, fetch: function (e, n) {
          return t.Object.prototype.fetch.call(this, e, n).then(function (t) {
            return t._handleSaveResult(!1).then(function () {
              return t
            })
          })
        }, updatePassword: function (t, e, n) {
          var r = "users/" + this.id + "/updatePassword", i = {
            old_password: t,
            new_password: e
          }, o = s(r, null, null, "PUT", i, n);
          return o
        }, isCurrent: function () {
          return this._isCurrentUser
        }, getUsername: function () {
          return this.get("username")
        }, getMobilePhoneNumber: function () {
          return this.get("mobilePhoneNumber")
        }, setMobilePhoneNumber: function (t, e) {
          return this.set("mobilePhoneNumber", t, e)
        }, setUsername: function (t, e) {
          return this.set("username", t, e)
        }, setPassword: function (t, e) {
          return this.set("password", t, e)
        }, getEmail: function () {
          return this.get("email")
        }, setEmail: function (t, e) {
          return this.set("email", t, e)
        }, authenticated: function () {
          return console.warn("DEPRECATED: å¦‚æžœè¦åˆ¤æ–­å½“å‰ç”¨æˆ·çš„ç™»å½•çŠ¶æ€æ˜¯å¦æœ‰æ•ˆï¼Œè¯·ä½¿ç”¨ currentUser.isAuthenticated().then()ï¼Œå¦‚æžœè¦åˆ¤æ–­è¯¥ç”¨æˆ·æ˜¯å¦æ˜¯å½“å‰ç™»å½•ç”¨æˆ·ï¼Œè¯·ä½¿ç”¨ user.id === currentUser.idã€‚"), !!this._sessionToken && !t._config.disableCurrentUser && t.User.current() && t.User.current().id === this.id
        }, isAuthenticated: function () {
          var e = this;
          return o.resolve().then(function () {
            return !!e._sessionToken && t.User._fetchUserBySessionToken(e._sessionToken).then(function () {
                return !0
              }, function (t) {
                if (211 === t.code)return !1;
                throw t
              })
          })
        }, getSessionToken: function () {
          return this._sessionToken
        }, refreshSessionToken: function (t) {
          var e = this;
          return s("users/" + this.id + "/refreshSessionToken", null, null, "PUT", null, t).then(function (t) {
            return e._finishFetch(t), e._handleSaveResult(!0).then(function () {
              return e
            })
          })
        }, getRoles: function (e) {
          return t.Relation.reverseQuery("_Role", "users", this).find(e)
        }
      }, {
        _currentUser: null,
        _currentUserMatchesDisk: !1,
        _CURRENT_USER_KEY: "currentUser",
        _authProviders: {},
        signUp: function (e, n, r, i) {
          r = r || {}, r.username = e, r.password = n;
          var s = t.Object._create("_User");
          return s.signUp(r, i)
        },
        logIn: function (e, n, r) {
          var i = t.Object._create("_User");
          return i._finishFetch({username: e, password: n}), i.logIn(r)
        },
        become: function (t) {
          return this._fetchUserBySessionToken(t).then(function (t) {
            return t._handleSaveResult(!0).then(function () {
              return t
            })
          })
        },
        _fetchUserBySessionToken: function (e) {
          var n = t.Object._create("_User");
          return s("users", "me", null, "GET", {session_token: e}).then(function (t) {
            var e = n.parse(t);
            return n._finishFetch(e), n
          })
        },
        logInWithMobilePhoneSmsCode: function (e, n, r) {
          var i = t.Object._create("_User");
          return i._finishFetch({mobilePhoneNumber: e, smsCode: n}), i.logIn(r)
        },
        signUpOrlogInWithMobilePhone: function (e, n, r, i) {
          r = r || {}, r.mobilePhoneNumber = e, r.smsCode = n;
          var s = t.Object._create("_User");
          return s.signUpOrlogInWithMobilePhone(r, i)
        },
        logInWithMobilePhone: function (e, n, r) {
          var i = t.Object._create("_User");
          return i._finishFetch({mobilePhoneNumber: e, password: n}), i.logIn(r)
        },
        signUpOrlogInWithAuthData: function (e, n) {
          return t.User._logInWith(n, e)
        },
        loginWithWeapp: function () {
          var t = this;
          return a().then(function (e) {
            return t.signUpOrlogInWithAuthData({code: e}, "lc_weapp")
          })
        },
        associateWithAuthData: function (t, e, n) {
          return t._linkWith(e, n)
        },
        logOut: function () {
          return t._config.disableCurrentUser ? (console.warn("AV.User.current() was disabled in multi-user environment, call logOut() from user object instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), o.resolve(null)) : (null !== t.User._currentUser && (t.User._currentUser._logOutWithAll(), t.User._currentUser._isCurrentUser = !1), t.User._currentUserMatchesDisk = !0, t.User._currentUser = null, t.localStorage.removeItemAsync(t._getAVPath(t.User._CURRENT_USER_KEY)))
        },
        followerQuery: function (e) {
          if (!e || !r.isString(e))throw new Error("Invalid user object id.");
          var n = new t.FriendShipQuery("_Follower");
          return n._friendshipTag = "follower", n.equalTo("user", t.Object.createWithoutData("_User", e)), n
        },
        followeeQuery: function (e) {
          if (!e || !r.isString(e))throw new Error("Invalid user object id.");
          var n = new t.FriendShipQuery("_Followee");
          return n._friendshipTag = "followee", n.equalTo("user", t.Object.createWithoutData("_User", e)), n
        },
        requestPasswordReset: function (t) {
          var e = {email: t}, n = s("requestPasswordReset", null, null, "POST", e);
          return n
        },
        requestEmailVerify: function (t) {
          var e = {email: t}, n = s("requestEmailVerify", null, null, "POST", e);
          return n
        },
        requestMobilePhoneVerify: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = {mobilePhoneNumber: t};
          e.validateToken && (n.validate_token = e.validateToken);
          var r = s("requestMobilePhoneVerify", null, null, "POST", n, e);
          return r
        },
        requestPasswordResetBySmsCode: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = {mobilePhoneNumber: t};
          e.validateToken && (n.validate_token = e.validateToken);
          var r = s("requestPasswordResetBySmsCode", null, null, "POST", n, e);
          return r
        },
        resetPasswordBySmsCode: function (t, e) {
          var n = {password: e}, r = s("resetPasswordBySmsCode", null, t, "PUT", n);
          return r
        },
        verifyMobilePhone: function (t) {
          var e = s("verifyMobilePhone", null, t, "POST", null);
          return e
        },
        requestLoginSmsCode: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = {mobilePhoneNumber: t};
          e.validateToken && (n.validate_token = e.validateToken);
          var r = s("requestLoginSmsCode", null, null, "POST", n, e);
          return r
        },
        currentAsync: function () {
          return t._config.disableCurrentUser ? (console.warn("AV.User.currentAsync() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), o.resolve(null)) : t.User._currentUser ? o.resolve(t.User._currentUser) : t.User._currentUserMatchesDisk ? o.resolve(t.User._currentUser) : t.localStorage.getItemAsync(t._getAVPath(t.User._CURRENT_USER_KEY)).then(function (e) {
            if (!e)return null;
            t.User._currentUserMatchesDisk = !0, t.User._currentUser = t.Object._create("_User"), t.User._currentUser._isCurrentUser = !0;
            var n = JSON.parse(e);
            return t.User._currentUser.id = n._id, delete n._id, t.User._currentUser._sessionToken = n._sessionToken, delete n._sessionToken, t.User._currentUser._finishFetch(n), t.User._currentUser._synchronizeAllAuthData(), t.User._currentUser._refreshCache(), t.User._currentUser._opSetQueue = [{}], t.User._currentUser
          })
        },
        current: function () {
          if (t._config.disableCurrentUser)return console.warn("AV.User.current() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), null;
          if (t.User._currentUser)return t.User._currentUser;
          if (t.User._currentUserMatchesDisk)return t.User._currentUser;
          t.User._currentUserMatchesDisk = !0;
          var e = t.localStorage.getItem(t._getAVPath(t.User._CURRENT_USER_KEY));
          if (!e)return null;
          t.User._currentUser = t.Object._create("_User"), t.User._currentUser._isCurrentUser = !0;
          var n = JSON.parse(e);
          return t.User._currentUser.id = n._id, delete n._id, t.User._currentUser._sessionToken = n._sessionToken, delete n._sessionToken, t.User._currentUser._finishFetch(n), t.User._currentUser._synchronizeAllAuthData(), t.User._currentUser._refreshCache(), t.User._currentUser._opSetQueue = [{}], t.User._currentUser
        },
        _saveCurrentUser: function (e) {
          var n;
          return n = t.User._currentUser !== e ? t.User.logOut() : o.resolve(), n.then(function () {
            e._isCurrentUser = !0, t.User._currentUser = e;
            var n = e.toJSON();
            return n._id = e.id, n._sessionToken = e._sessionToken, t.localStorage.setItemAsync(t._getAVPath(t.User._CURRENT_USER_KEY), JSON.stringify(n)).then(function () {
              t.User._currentUserMatchesDisk = !0
            })
          })
        },
        _registerAuthenticationProvider: function (e) {
          t.User._authProviders[e.getAuthType()] = e, !t._config.disableCurrentUser && t.User.current() && t.User.current()._synchronizeAuthData(e.getAuthType())
        },
        _logInWith: function (e, n) {
          var r = t.Object._create("_User");
          return r._linkWith(e, n)
        }
      })
    }
  }, function (t, e, n) {
    "use strict";
    var r = n(5);
    r._ = n(0), r.version = n(12), r.Promise = n(2), r.localStorage = n(11), r.Cache = n(10), r.Error = n(3), n(21), n(18)(r), n(20)(r), n(14)(r), n(24)(r), n(27)(r), n(19)(r), n(23)(r), n(28)(r), n(31)(r), n(26)(r), n(15)(r), n(16)(r), n(25)(r), n(30)(r), n(29)(r), n(22)(r), r.Conversation = n(17), t.exports = r
  }, function (t, e, n) {
    "use strict";
    t.exports = []
  }, function (t, e, n) {
    "use strict";
    var r = n(12), i = ["Browser"].concat(n(33));
    t.exports = "LeanCloud-JS-SDK/" + r + " (" + i.join("; ") + ")"
  }, function (t, e, n) {
    "use strict";
    var r = n(7), i = n(6)("cos"), s = n(2);
    t.exports = function (t, e, n) {
      var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      n.attributes.url = t.url, n._bucket = t.bucket, n.id = t.objectId;
      var a = t.upload_url + "?sign=" + encodeURIComponent(t.token);
      return new s(function (t, s) {
        var u = r("POST", a).field("fileContent", e).field("op", "upload");
        o.onprogress && u.on("progress", o.onprogress), u.end(function (e, r) {
          return r && i(r.status, r.body, r.text), e ? (r && (e.statusCode = r.status, e.responseText = r.text, e.response = r.body), s(e)) : void t(n)
        })
      })
    }
  }, function (t, e, n) {
    "use strict";
    var r = n(7), i = n(2), s = n(6)("qiniu");
    t.exports = function (t, e, n) {
      var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      n.attributes.url = t.url, n._bucket = t.bucket, n.id = t.objectId;
      var a = t.token;
      return new i(function (t, i) {
        var u = r("POST", "https://up.qbox.me").field("file", e).field("name", n.attributes.name).field("key", n._qiniu_key).field("token", a);
        o.onprogress && u.on("progress", o.onprogress), u.end(function (e, r) {
          return r && s(r.status, r.body, r.text), e ? (r && (e.statusCode = r.status, e.responseText = r.text, e.response = r.body), i(e)) : void t(n)
        })
      })
    }
  }, function (t, e, n) {
    "use strict";
    var r = n(7);
    n(2);
    t.exports = function (t, e, n) {
      var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return n.attributes.url = t.url, n._bucket = t.bucket, n.id = t.objectId, new Promise(function (s, o) {
        var a = r("PUT", t.upload_url).set("Content-Type", n.get("mime_type")).send(e);
        i.onprogress && a.on("progress", i.onprogress), a.end(function (t, e) {
          return t ? (e && (t.statusCode = e.status, t.responseText = e.text, t.response = e.body), o(t)) : void s(n)
        })
      })
    }
  }, function (t, e, n) {
    "use strict";
    (function (e) {
      var r = n(0), i = (n(2), {}), s = ["getItem", "setItem", "removeItem", "clear"], o = e.localStorage;
      try {
        var a = "__storejs__";
        if (o.setItem(a, a), o.getItem(a) != a)throw new Error;
        o.removeItem(a)
      } catch (t) {
        o = n(45)
      }
      r(s).each(function (t) {
        i[t] = function () {
          return o[t].apply(o, arguments)
        }
      }), i.async = !1, t.exports = i
    }).call(e, n(9))
  }, function (t, e, n) {
    "use strict";
    var r = function (t, e) {
      var n;
      t.indexOf("base64") < 0 ? n = atob(t) : t.split(",")[0].indexOf("base64") >= 0 ? (e = e || t.split(",")[0].split(":")[1].split(";")[0], n = atob(t.split(",")[1])) : n = unescape(t.split(",")[1]);
      for (var r = new Uint8Array(n.length), i = 0; i < n.length; i++)r[i] = n.charCodeAt(i);
      return new Blob([r], {type: e})
    };
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      if (t)return i(t)
    }

    function i(t) {
      for (var e in r.prototype)t[e] = r.prototype[e];
      return t
    }

    t.exports = r, r.prototype.on = r.prototype.addEventListener = function (t, e) {
      return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
    }, r.prototype.once = function (t, e) {
      function n() {
        this.off(t, n), e.apply(this, arguments)
      }

      return n.fn = e, this.on(t, n), this
    }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function (t, e) {
      if (this._callbacks = this._callbacks || {}, 0 == arguments.length)return this._callbacks = {}, this;
      var n = this._callbacks["$" + t];
      if (!n)return this;
      if (1 == arguments.length)return delete this._callbacks["$" + t], this;
      for (var r, i = 0; i < n.length; i++)if (r = n[i], r === e || r.fn === e) {
        n.splice(i, 1);
        break
      }
      return this
    }, r.prototype.emit = function (t) {
      this._callbacks = this._callbacks || {};
      var e = [].slice.call(arguments, 1), n = this._callbacks["$" + t];
      if (n) {
        n = n.slice(0);
        for (var r = 0, i = n.length; r < i; ++r)n[r].apply(this, e)
      }
      return this
    }, r.prototype.listeners = function (t) {
      return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
    }, r.prototype.hasListeners = function (t) {
      return !!this.listeners(t).length
    }
  }, function (t, e) {
    !function () {
      var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = {
        rotl: function (t, e) {
          return t << e | t >>> 32 - e
        }, rotr: function (t, e) {
          return t << 32 - e | t >>> e
        }, endian: function (t) {
          if (t.constructor == Number)return 16711935 & n.rotl(t, 8) | 4278255360 & n.rotl(t, 24);
          for (var e = 0; e < t.length; e++)t[e] = n.endian(t[e]);
          return t
        }, randomBytes: function (t) {
          for (var e = []; t > 0; t--)e.push(Math.floor(256 * Math.random()));
          return e
        }, bytesToWords: function (t) {
          for (var e = [], n = 0, r = 0; n < t.length; n++, r += 8)e[r >>> 5] |= t[n] << 24 - r % 32;
          return e
        }, wordsToBytes: function (t) {
          for (var e = [], n = 0; n < 32 * t.length; n += 8)e.push(t[n >>> 5] >>> 24 - n % 32 & 255);
          return e
        }, bytesToHex: function (t) {
          for (var e = [], n = 0; n < t.length; n++)e.push((t[n] >>> 4).toString(16)), e.push((15 & t[n]).toString(16));
          return e.join("")
        }, hexToBytes: function (t) {
          for (var e = [], n = 0; n < t.length; n += 2)e.push(parseInt(t.substr(n, 2), 16));
          return e
        }, bytesToBase64: function (t) {
          for (var n = [], r = 0; r < t.length; r += 3)for (var i = t[r] << 16 | t[r + 1] << 8 | t[r + 2], s = 0; s < 4; s++)8 * r + 6 * s <= 8 * t.length ? n.push(e.charAt(i >>> 6 * (3 - s) & 63)) : n.push("=");
          return n.join("")
        }, base64ToBytes: function (t) {
          t = t.replace(/[^A-Z0-9+\/]/gi, "");
          for (var n = [], r = 0, i = 0; r < t.length; i = ++r % 4)0 != i && n.push((e.indexOf(t.charAt(r - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | e.indexOf(t.charAt(r)) >>> 6 - 2 * i);
          return n
        }
      };
      t.exports = n
    }()
  }, function (t, e, n) {
    function r(t) {
      var n, r = 0;
      for (n in t)r = (r << 5) - r + t.charCodeAt(n), r |= 0;
      return e.colors[Math.abs(r) % e.colors.length]
    }

    function i(t) {
      function n() {
        if (n.enabled) {
          var t = n, r = +new Date, i = r - (c || r);
          t.diff = i, t.prev = c, t.curr = r, c = r;
          for (var s = new Array(arguments.length), o = 0; o < s.length; o++)s[o] = arguments[o];
          s[0] = e.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
          var a = 0;
          s[0] = s[0].replace(/%([a-zA-Z%])/g, function (n, r) {
            if ("%%" === n)return n;
            a++;
            var i = e.formatters[r];
            if ("function" == typeof i) {
              var o = s[a];
              n = i.call(t, o), s.splice(a, 1), a--
            }
            return n
          }), e.formatArgs.call(t, s);
          var u = n.log || e.log || console.log.bind(console);
          u.apply(t, s)
        }
      }

      return n.namespace = t, n.enabled = e.enabled(t), n.useColors = e.useColors(), n.color = r(t), "function" == typeof e.init && e.init(n), n
    }

    function s(t) {
      e.save(t), e.names = [], e.skips = [];
      for (var n = ("string" == typeof t ? t : "").split(/[\s,]+/), r = n.length, i = 0; i < r; i++)n[i] && (t = n[i].replace(/\*/g, ".*?"), "-" === t[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")))
    }

    function o() {
      e.enable("")
    }

    function a(t) {
      var n, r;
      for (n = 0, r = e.skips.length; n < r; n++)if (e.skips[n].test(t))return !1;
      for (n = 0, r = e.names.length; n < r; n++)if (e.names[n].test(t))return !0;
      return !1
    }

    function u(t) {
      return t instanceof Error ? t.stack || t.message : t
    }

    e = t.exports = i.debug = i.default = i, e.coerce = u, e.disable = o, e.enable = s, e.enabled = a, e.humanize = n(47), e.names = [], e.skips = [], e.formatters = {};
    var c
  }, function (t, e, n) {
    (function (e) {
      !function (e, n) {
        t.exports = n()
      }(this, function () {
        "use strict";
        function t(t) {
          return "function" == typeof t || "object" == typeof t && null !== t
        }

        function r(t) {
          return "function" == typeof t
        }

        function i(t) {
          G = t
        }

        function s(t) {
          H = t
        }

        function o() {
          return function () {
            return process.nextTick(h)
          }
        }

        function a() {
          return "undefined" != typeof z ? function () {
            z(h)
          } : l()
        }

        function u() {
          var t = 0, e = new Y(h), n = document.createTextNode("");
          return e.observe(n, {characterData: !0}), function () {
            n.data = t = ++t % 2
          }
        }

        function c() {
          var t = new MessageChannel;
          return t.port1.onmessage = h, function () {
            return t.port2.postMessage(0)
          }
        }

        function l() {
          var t = setTimeout;
          return function () {
            return t(h, 1)
          }
        }

        function h() {
          for (var t = 0; t < K; t += 2) {
            var e = et[t], n = et[t + 1];
            e(n), et[t] = void 0, et[t + 1] = void 0
          }
          K = 0
        }

        function f() {
          try {
            var t = n(53);
            return z = t.runOnLoop || t.runOnContext, a()
          } catch (t) {
            return l()
          }
        }

        function d(t, e) {
          var n = arguments, r = this, i = new this.constructor(_);
          void 0 === i[rt] && P(i);
          var s = r._state;
          return s ? !function () {
            var t = n[s - 1];
            H(function () {
              return U(s, i, t, r._result)
            })
          }() : C(r, i, t, e), i
        }

        function p(t) {
          var e = this;
          if (t && "object" == typeof t && t.constructor === e)return t;
          var n = new e(_);
          return A(n, t), n
        }

        function _() {
        }

        function v() {
          return new TypeError("You cannot resolve a promise with itself")
        }

        function m() {
          return new TypeError("A promises callback cannot return that same promise.")
        }

        function y(t) {
          try {
            return t.then
          } catch (t) {
            return at.error = t, at
          }
        }

        function g(t, e, n, r) {
          try {
            t.call(e, n, r)
          } catch (t) {
            return t
          }
        }

        function b(t, e, n) {
          H(function (t) {
            var r = !1, i = g(n, e, function (n) {
              r || (r = !0, e !== n ? A(t, n) : E(t, n))
            }, function (e) {
              r || (r = !0, T(t, e))
            }, "Settle: " + (t._label || " unknown promise"));
            !r && i && (r = !0, T(t, i))
          }, t)
        }

        function w(t, e) {
          e._state === st ? E(t, e._result) : e._state === ot ? T(t, e._result) : C(e, void 0, function (e) {
            return A(t, e)
          }, function (e) {
            return T(t, e)
          })
        }

        function O(t, e, n) {
          e.constructor === t.constructor && n === d && e.constructor.resolve === p ? w(t, e) : n === at ? (T(t, at.error), at.error = null) : void 0 === n ? E(t, e) : r(n) ? b(t, e, n) : E(t, e)
        }

        function A(e, n) {
          e === n ? T(e, v()) : t(n) ? O(e, n, y(n)) : E(e, n)
        }

        function S(t) {
          t._onerror && t._onerror(t._result), N(t)
        }

        function E(t, e) {
          t._state === it && (t._result = e, t._state = st, 0 !== t._subscribers.length && H(N, t))
        }

        function T(t, e) {
          t._state === it && (t._state = ot, t._result = e, H(S, t))
        }

        function C(t, e, n, r) {
          var i = t._subscribers, s = i.length;
          t._onerror = null, i[s] = e, i[s + st] = n, i[s + ot] = r, 0 === s && t._state && H(N, t)
        }

        function N(t) {
          var e = t._subscribers, n = t._state;
          if (0 !== e.length) {
            for (var r = void 0, i = void 0, s = t._result, o = 0; o < e.length; o += 3)r = e[o], i = e[o + n], r ? U(n, r, i, s) : i(s);
            t._subscribers.length = 0
          }
        }

        function j() {
          this.error = null
        }

        function x(t, e) {
          try {
            return t(e)
          } catch (t) {
            return ut.error = t, ut
          }
        }

        function U(t, e, n, i) {
          var s = r(n), o = void 0, a = void 0, u = void 0, c = void 0;
          if (s) {
            if (o = x(n, i), o === ut ? (c = !0, a = o.error, o.error = null) : u = !0, e === o)return void T(e, m())
          } else o = i, u = !0;
          e._state !== it || (s && u ? A(e, o) : c ? T(e, a) : t === st ? E(e, o) : t === ot && T(e, o))
        }

        function k(t, e) {
          try {
            e(function (e) {
              A(t, e)
            }, function (e) {
              T(t, e)
            })
          } catch (e) {
            T(t, e)
          }
        }

        function I() {
          return ct++
        }

        function P(t) {
          t[rt] = ct++, t._state = void 0, t._result = void 0, t._subscribers = []
        }

        function R(t, e) {
          this._instanceConstructor = t, this.promise = new t(_), this.promise[rt] || P(this.promise), W(e) ? (this._input = e, this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? E(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && E(this.promise, this._result))) : T(this.promise, D())
        }

        function D() {
          return new Error("Array Methods must be provided an Array")
        }

        function L(t) {
          return new R(this, t).promise
        }

        function q(t) {
          var e = this;
          return new e(W(t) ? function (n, r) {
            for (var i = t.length, s = 0; s < i; s++)e.resolve(t[s]).then(n, r)
          } : function (t, e) {
            return e(new TypeError("You must pass an array to race."))
          })
        }

        function M(t) {
          var e = this, n = new e(_);
          return T(n, t), n
        }

        function F() {
          throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
        }

        function J() {
          throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
        }

        function B(t) {
          this[rt] = I(), this._result = this._state = void 0, this._subscribers = [], _ !== t && ("function" != typeof t && F(), this instanceof B ? k(this, t) : J())
        }

        function Q() {
          var t = void 0;
          if ("undefined" != typeof e)t = e; else if ("undefined" != typeof self)t = self; else try {
            t = Function("return this")()
          } catch (t) {
            throw new Error("polyfill failed because global object is unavailable in this environment")
          }
          var n = t.Promise;
          if (n) {
            var r = null;
            try {
              r = Object.prototype.toString.call(n.resolve())
            } catch (t) {
            }
            if ("[object Promise]" === r && !n.cast)return
          }
          t.Promise = B
        }

        var V = void 0;
        V = Array.isArray ? Array.isArray : function (t) {
          return "[object Array]" === Object.prototype.toString.call(t)
        };
        var W = V, K = 0, z = void 0, G = void 0, H = function (t, e) {
          et[K] = t, et[K + 1] = e, K += 2, 2 === K && (G ? G(h) : nt())
        }, $ = "undefined" != typeof window ? window : void 0, X = $ || {}, Y = X.MutationObserver || X.WebKitMutationObserver, Z = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process), tt = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, et = new Array(1e3), nt = void 0;
        nt = Z ? o() : Y ? u() : tt ? c() : void 0 === $ ? f() : l();
        var rt = Math.random().toString(36).substring(16), it = void 0, st = 1, ot = 2, at = new j, ut = new j, ct = 0;
        return R.prototype._enumerate = function () {
          for (var t = this.length, e = this._input, n = 0; this._state === it && n < t; n++)this._eachEntry(e[n], n)
        }, R.prototype._eachEntry = function (t, e) {
          var n = this._instanceConstructor, r = n.resolve;
          if (r === p) {
            var i = y(t);
            if (i === d && t._state !== it)this._settledAt(t._state, e, t._result); else if ("function" != typeof i)this._remaining--, this._result[e] = t; else if (n === B) {
              var s = new n(_);
              O(s, t, i), this._willSettleAt(s, e)
            } else this._willSettleAt(new n(function (e) {
              return e(t)
            }), e)
          } else this._willSettleAt(r(t), e)
        }, R.prototype._settledAt = function (t, e, n) {
          var r = this.promise;
          r._state === it && (this._remaining--, t === ot ? T(r, n) : this._result[e] = n), 0 === this._remaining && E(r, this._result)
        }, R.prototype._willSettleAt = function (t, e) {
          var n = this;
          C(t, void 0, function (t) {
            return n._settledAt(st, e, t)
          }, function (t) {
            return n._settledAt(ot, e, t)
          })
        }, B.all = L, B.race = q, B.resolve = p, B.reject = M, B._setScheduler = i, B._setAsap = s, B._asap = H, B.prototype = {
          constructor: B,
          then: d,
          catch: function (t) {
            return this.then(null, t)
          }
        }, B.polyfill = Q, B.Promise = B, B
      })
    }).call(e, n(9))
  }, function (t, e) {
    function n(t) {
      return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
    }

    function r(t) {
      return "function" == typeof t.readFloatLE && "function" == typeof t.slice && n(t.slice(0, 0))
    }

    t.exports = function (t) {
      return null != t && (n(t) || r(t) || !!t._isBuffer)
    }
  }, function (t, e, n) {
    !function (e) {
      var n = {}, r = {};
      n.length = 0, n.getItem = function (t) {
        return r[t] || null
      }, n.setItem = function (t, e) {
        "undefined" == typeof e ? n.removeItem(t) : (r.hasOwnProperty(t) || n.length++, r[t] = "" + e)
      }, n.removeItem = function (t) {
        r.hasOwnProperty(t) && (delete r[t], n.length--)
      }, n.key = function (t) {
        return Object.keys(r)[t] || null
      }, n.clear = function () {
        r = {}, n.length = 0
      }, t.exports = n
    }(this)
  }, function (t, e, n) {
    !function () {
      var e = n(41), r = n(13).utf8, i = n(44), s = n(13).bin, o = function (t, n) {
        t.constructor == String ? t = n && "binary" === n.encoding ? s.stringToBytes(t) : r.stringToBytes(t) : i(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || (t = t.toString());
        for (var a = e.bytesToWords(t), u = 8 * t.length, c = 1732584193, l = -271733879, h = -1732584194, f = 271733878, d = 0; d < a.length; d++)a[d] = 16711935 & (a[d] << 8 | a[d] >>> 24) | 4278255360 & (a[d] << 24 | a[d] >>> 8);
        a[u >>> 5] |= 128 << u % 32, a[(u + 64 >>> 9 << 4) + 14] = u;
        for (var p = o._ff, _ = o._gg, v = o._hh, m = o._ii, d = 0; d < a.length; d += 16) {
          var y = c, g = l, b = h, w = f;
          c = p(c, l, h, f, a[d + 0], 7, -680876936), f = p(f, c, l, h, a[d + 1], 12, -389564586), h = p(h, f, c, l, a[d + 2], 17, 606105819), l = p(l, h, f, c, a[d + 3], 22, -1044525330), c = p(c, l, h, f, a[d + 4], 7, -176418897), f = p(f, c, l, h, a[d + 5], 12, 1200080426), h = p(h, f, c, l, a[d + 6], 17, -1473231341), l = p(l, h, f, c, a[d + 7], 22, -45705983), c = p(c, l, h, f, a[d + 8], 7, 1770035416), f = p(f, c, l, h, a[d + 9], 12, -1958414417), h = p(h, f, c, l, a[d + 10], 17, -42063), l = p(l, h, f, c, a[d + 11], 22, -1990404162), c = p(c, l, h, f, a[d + 12], 7, 1804603682), f = p(f, c, l, h, a[d + 13], 12, -40341101), h = p(h, f, c, l, a[d + 14], 17, -1502002290), l = p(l, h, f, c, a[d + 15], 22, 1236535329), c = _(c, l, h, f, a[d + 1], 5, -165796510), f = _(f, c, l, h, a[d + 6], 9, -1069501632), h = _(h, f, c, l, a[d + 11], 14, 643717713), l = _(l, h, f, c, a[d + 0], 20, -373897302), c = _(c, l, h, f, a[d + 5], 5, -701558691), f = _(f, c, l, h, a[d + 10], 9, 38016083), h = _(h, f, c, l, a[d + 15], 14, -660478335), l = _(l, h, f, c, a[d + 4], 20, -405537848), c = _(c, l, h, f, a[d + 9], 5, 568446438), f = _(f, c, l, h, a[d + 14], 9, -1019803690), h = _(h, f, c, l, a[d + 3], 14, -187363961), l = _(l, h, f, c, a[d + 8], 20, 1163531501), c = _(c, l, h, f, a[d + 13], 5, -1444681467), f = _(f, c, l, h, a[d + 2], 9, -51403784), h = _(h, f, c, l, a[d + 7], 14, 1735328473), l = _(l, h, f, c, a[d + 12], 20, -1926607734), c = v(c, l, h, f, a[d + 5], 4, -378558), f = v(f, c, l, h, a[d + 8], 11, -2022574463), h = v(h, f, c, l, a[d + 11], 16, 1839030562), l = v(l, h, f, c, a[d + 14], 23, -35309556), c = v(c, l, h, f, a[d + 1], 4, -1530992060), f = v(f, c, l, h, a[d + 4], 11, 1272893353), h = v(h, f, c, l, a[d + 7], 16, -155497632), l = v(l, h, f, c, a[d + 10], 23, -1094730640), c = v(c, l, h, f, a[d + 13], 4, 681279174), f = v(f, c, l, h, a[d + 0], 11, -358537222), h = v(h, f, c, l, a[d + 3], 16, -722521979), l = v(l, h, f, c, a[d + 6], 23, 76029189), c = v(c, l, h, f, a[d + 9], 4, -640364487), f = v(f, c, l, h, a[d + 12], 11, -421815835), h = v(h, f, c, l, a[d + 15], 16, 530742520), l = v(l, h, f, c, a[d + 2], 23, -995338651), c = m(c, l, h, f, a[d + 0], 6, -198630844), f = m(f, c, l, h, a[d + 7], 10, 1126891415), h = m(h, f, c, l, a[d + 14], 15, -1416354905), l = m(l, h, f, c, a[d + 5], 21, -57434055), c = m(c, l, h, f, a[d + 12], 6, 1700485571), f = m(f, c, l, h, a[d + 3], 10, -1894986606), h = m(h, f, c, l, a[d + 10], 15, -1051523), l = m(l, h, f, c, a[d + 1], 21, -2054922799), c = m(c, l, h, f, a[d + 8], 6, 1873313359), f = m(f, c, l, h, a[d + 15], 10, -30611744), h = m(h, f, c, l, a[d + 6], 15, -1560198380), l = m(l, h, f, c, a[d + 13], 21, 1309151649), c = m(c, l, h, f, a[d + 4], 6, -145523070), f = m(f, c, l, h, a[d + 11], 10, -1120210379), h = m(h, f, c, l, a[d + 2], 15, 718787259), l = m(l, h, f, c, a[d + 9], 21, -343485551), c = c + y >>> 0, l = l + g >>> 0, h = h + b >>> 0, f = f + w >>> 0
        }
        return e.endian([c, l, h, f])
      };
      o._ff = function (t, e, n, r, i, s, o) {
        var a = t + (e & n | ~e & r) + (i >>> 0) + o;
        return (a << s | a >>> 32 - s) + e
      }, o._gg = function (t, e, n, r, i, s, o) {
        var a = t + (e & r | n & ~r) + (i >>> 0) + o;
        return (a << s | a >>> 32 - s) + e
      }, o._hh = function (t, e, n, r, i, s, o) {
        var a = t + (e ^ n ^ r) + (i >>> 0) + o;
        return (a << s | a >>> 32 - s) + e
      }, o._ii = function (t, e, n, r, i, s, o) {
        var a = t + (n ^ (e | ~r)) + (i >>> 0) + o;
        return (a << s | a >>> 32 - s) + e;
      }, o._blocksize = 16, o._digestsize = 16, t.exports = function (t, n) {
        if (void 0 === t || null === t)throw new Error("Illegal argument " + t);
        var r = e.wordsToBytes(o(t, n));
        return n && n.asBytes ? r : n && n.asString ? s.bytesToString(r) : e.bytesToHex(r)
      }
    }()
  }, function (t, e) {
    function n(t) {
      if (t = String(t), !(t.length > 100)) {
        var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
        if (e) {
          var n = parseFloat(e[1]), r = (e[2] || "ms").toLowerCase();
          switch (r) {
            case"years":
            case"year":
            case"yrs":
            case"yr":
            case"y":
              return n * l;
            case"days":
            case"day":
            case"d":
              return n * c;
            case"hours":
            case"hour":
            case"hrs":
            case"hr":
            case"h":
              return n * u;
            case"minutes":
            case"minute":
            case"mins":
            case"min":
            case"m":
              return n * a;
            case"seconds":
            case"second":
            case"secs":
            case"sec":
            case"s":
              return n * o;
            case"milliseconds":
            case"millisecond":
            case"msecs":
            case"msec":
            case"ms":
              return n;
            default:
              return
          }
        }
      }
    }

    function r(t) {
      return t >= c ? Math.round(t / c) + "d" : t >= u ? Math.round(t / u) + "h" : t >= a ? Math.round(t / a) + "m" : t >= o ? Math.round(t / o) + "s" : t + "ms"
    }

    function i(t) {
      return s(t, c, "day") || s(t, u, "hour") || s(t, a, "minute") || s(t, o, "second") || t + " ms"
    }

    function s(t, e, n) {
      if (!(t < e))return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s"
    }

    var o = 1e3, a = 60 * o, u = 60 * a, c = 24 * u, l = 365.25 * c;
    t.exports = function (t, e) {
      e = e || {};
      var s = typeof t;
      if ("string" === s && t.length > 0)return n(t);
      if ("number" === s && isNaN(t) === !1)return e.long ? i(t) : r(t);
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t))
    }
  }, function (t, e, n) {
    function r(t) {
      var e = i(t) ? Object.prototype.toString.call(t) : "";
      return "[object Function]" === e
    }

    var i = n(8);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      if (t)return i(t)
    }

    function i(t) {
      for (var e in r.prototype)t[e] = r.prototype[e];
      return t
    }

    var s = n(8);
    t.exports = r, r.prototype.clearTimeout = function () {
      return clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), delete this._timer, delete this._responseTimeoutTimer, this
    }, r.prototype.parse = function (t) {
      return this._parser = t, this
    }, r.prototype.responseType = function (t) {
      return this._responseType = t, this
    }, r.prototype.serialize = function (t) {
      return this._serializer = t, this
    }, r.prototype.timeout = function (t) {
      if (!t || "object" != typeof t)return this._timeout = t, this._responseTimeout = 0, this;
      for (var e in t)switch (e) {
        case"deadline":
          this._timeout = t.deadline;
          break;
        case"response":
          this._responseTimeout = t.response;
          break;
        default:
          console.warn("Unknown timeout option", e)
      }
      return this
    }, r.prototype.retry = function (t) {
      return 0 !== arguments.length && t !== !0 || (t = 1), t <= 0 && (t = 0), this._maxRetries = t, this._retries = 0, this
    }, r.prototype._retry = function () {
      return this.clearTimeout(), this.req && (this.req = null, this.req = this.request()), this._aborted = !1, this.timedout = !1, this._end()
    }, r.prototype.then = function (t, e) {
      if (!this._fullfilledPromise) {
        var n = this;
        this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"), this._fullfilledPromise = new Promise(function (t, e) {
          n.end(function (n, r) {
            n ? e(n) : t(r)
          })
        })
      }
      return this._fullfilledPromise.then(t, e)
    }, r.prototype.catch = function (t) {
      return this.then(void 0, t)
    }, r.prototype.use = function (t) {
      return t(this), this
    }, r.prototype.ok = function (t) {
      if ("function" != typeof t)throw Error("Callback required");
      return this._okCallback = t, this
    }, r.prototype._isResponseOK = function (t) {
      return !!t && (this._okCallback ? this._okCallback(t) : t.status >= 200 && t.status < 300)
    }, r.prototype.get = function (t) {
      return this._header[t.toLowerCase()]
    }, r.prototype.getHeader = r.prototype.get, r.prototype.set = function (t, e) {
      if (s(t)) {
        for (var n in t)this.set(n, t[n]);
        return this
      }
      return this._header[t.toLowerCase()] = e, this.header[t] = e, this
    }, r.prototype.unset = function (t) {
      return delete this._header[t.toLowerCase()], delete this.header[t], this
    }, r.prototype.field = function (t, e) {
      if (null === t || void 0 === t)throw new Error(".field(name, val) name can not be empty");
      if (this._data && console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"), s(t)) {
        for (var n in t)this.field(n, t[n]);
        return this
      }
      if (Array.isArray(e)) {
        for (var r in e)this.field(t, e[r]);
        return this
      }
      if (null === e || void 0 === e)throw new Error(".field(name, val) val can not be empty");
      return "boolean" == typeof e && (e = "" + e), this._getFormData().append(t, e), this
    }, r.prototype.abort = function () {
      return this._aborted ? this : (this._aborted = !0, this.xhr && this.xhr.abort(), this.req && this.req.abort(), this.clearTimeout(), this.emit("abort"), this)
    }, r.prototype.withCredentials = function (t) {
      return void 0 == t && (t = !0), this._withCredentials = t, this
    }, r.prototype.redirects = function (t) {
      return this._maxRedirects = t, this
    }, r.prototype.toJSON = function () {
      return {method: this.method, url: this.url, data: this._data, headers: this._header}
    }, r.prototype.send = function (t) {
      var e = s(t), n = this._header["content-type"];
      if (this._formData && console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"), e && !this._data)Array.isArray(t) ? this._data = [] : this._isHost(t) || (this._data = {}); else if (t && this._data && this._isHost(this._data))throw Error("Can't merge these send calls");
      if (e && s(this._data))for (var r in t)this._data[r] = t[r]; else"string" == typeof t ? (n || this.type("form"), n = this._header["content-type"], "application/x-www-form-urlencoded" == n ? this._data = this._data ? this._data + "&" + t : t : this._data = (this._data || "") + t) : this._data = t;
      return !e || this._isHost(t) ? this : (n || this.type("json"), this)
    }, r.prototype.sortQuery = function (t) {
      return this._sort = "undefined" == typeof t || t, this
    }, r.prototype._timeoutError = function (t, e, n) {
      if (!this._aborted) {
        var r = new Error(t + e + "ms exceeded");
        r.timeout = e, r.code = "ECONNABORTED", r.errno = n, this.timedout = !0, this.abort(), this.callback(r)
      }
    }, r.prototype._setTimeouts = function () {
      var t = this;
      this._timeout && !this._timer && (this._timer = setTimeout(function () {
        t._timeoutError("Timeout of ", t._timeout, "ETIME")
      }, this._timeout)), this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout(function () {
        t._timeoutError("Response timeout of ", t._responseTimeout, "ETIMEDOUT")
      }, this._responseTimeout))
    }
  }, function (t, e, n) {
    function r(t) {
      if (t)return i(t)
    }

    function i(t) {
      for (var e in r.prototype)t[e] = r.prototype[e];
      return t
    }

    var s = n(52);
    t.exports = r, r.prototype.get = function (t) {
      return this.header[t.toLowerCase()]
    }, r.prototype._setHeaderProperties = function (t) {
      var e = t["content-type"] || "";
      this.type = s.type(e);
      var n = s.params(e);
      for (var r in n)this[r] = n[r];
      this.links = {};
      try {
        t.link && (this.links = s.parseLinks(t.link))
      } catch (t) {
      }
    }, r.prototype._setStatusProperties = function (t) {
      var e = t / 100 | 0;
      this.status = this.statusCode = t, this.statusType = e, this.info = 1 == e, this.ok = 2 == e, this.redirect = 3 == e, this.clientError = 4 == e, this.serverError = 5 == e, this.error = (4 == e || 5 == e) && this.toError(), this.accepted = 202 == t, this.noContent = 204 == t, this.badRequest = 400 == t, this.unauthorized = 401 == t, this.notAcceptable = 406 == t, this.forbidden = 403 == t, this.notFound = 404 == t
    }
  }, function (t, e) {
    var n = ["ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT"];
    t.exports = function (t, e) {
      return !!(t && t.code && ~n.indexOf(t.code)) || (!!(e && e.status && e.status >= 500) || (!!(t && "timeout" in t && "ECONNABORTED" == t.code) || !!(t && "crossDomain" in t)))
    }
  }, function (t, e) {
    e.type = function (t) {
      return t.split(/ *; */).shift()
    }, e.params = function (t) {
      return t.split(/ *; */).reduce(function (t, e) {
        var n = e.split(/ *= */), r = n.shift(), i = n.shift();
        return r && i && (t[r] = i), t
      }, {})
    }, e.parseLinks = function (t) {
      return t.split(/ *, */).reduce(function (t, e) {
        var n = e.split(/ *; */), r = n[0].slice(1, -1), i = n[1].split(/ *= */)[1].slice(1, -1);
        return t[i] = r, t
      }, {})
    }, e.cleanHeader = function (t, e) {
      return delete t["content-type"], delete t["content-length"], delete t["transfer-encoding"], delete t.host, e && delete t.cookie, t
    }
  }, function (t, e) {
  }])
});
//# sourceMappingURL=av-min.js.map
