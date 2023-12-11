/* 
 * Copyright 2016 Google Inc. All Rights Reserved.
 * See ../LICENSES.txt for licenses of bundled libraries
 */
!function(t) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = t();
    else if ("function" == typeof define && define.amd)
        define([], t);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).app = t()
    }
}((function() {
    return function t(e, n, r) {
        function i(s, a) {
            if (!n[s]) {
                if (!e[s]) {
                    var u = "function" == typeof require && require;
                    if (!a && u)
                        return u(s, !0);
                    if (o)
                        return o(s, !0);
                    var l = new Error("Cannot find module '" + s + "'");
                    throw l.code = "MODULE_NOT_FOUND",
                    l
                }
                var c = n[s] = {
                    exports: {}
                };
                e[s][0].call(c.exports, (function(t) {
                    return i(e[s][1][t] || t)
                }
                ), c, c.exports, t, e, n, r)
            }
            return n[s].exports
        }
        for (var o = "function" == typeof require && require, s = 0; s < r.length; s++)
            i(r[s]);
        return i
    }({
        1: [function(t, e, n) {
            (function(t, n) {
                (function() {
                    /*!
 * async
 * https://github.com/caolan/async
 *
 * Copyright 2010-2014 Caolan McMahon
 * Released under the MIT license
 */
                    !function() {
                        var r, i, o = {};
                        function s(t) {
                            var e = !1;
                            return function() {
                                if (e)
                                    throw new Error("Callback was already called.");
                                e = !0,
                                t.apply(r, arguments)
                            }
                        }
                        null != (r = this) && (i = r.async),
                        o.noConflict = function() {
                            return r.async = i,
                            o
                        }
                        ;
                        var a = Object.prototype.toString
                          , u = Array.isArray || function(t) {
                            return "[object Array]" === a.call(t)
                        }
                          , l = function(t, e) {
                            if (t.forEach)
                                return t.forEach(e);
                            for (var n = 0; n < t.length; n += 1)
                                e(t[n], n, t)
                        }
                          , c = function(t, e) {
                            if (t.map)
                                return t.map(e);
                            var n = [];
                            return l(t, (function(t, r, i) {
                                n.push(e(t, r, i))
                            }
                            )),
                            n
                        }
                          , h = function(t) {
                            if (Object.keys)
                                return Object.keys(t);
                            var e = [];
                            for (var n in t)
                                t.hasOwnProperty(n) && e.push(n);
                            return e
                        };
                        void 0 !== t && t.nextTick ? (o.nextTick = t.nextTick,
                        o.setImmediate = void 0 !== n ? function(t) {
                            n(t)
                        }
                        : o.nextTick) : "function" == typeof n ? (o.nextTick = function(t) {
                            n(t)
                        }
                        ,
                        o.setImmediate = o.nextTick) : (o.nextTick = function(t) {
                            setTimeout(t, 0)
                        }
                        ,
                        o.setImmediate = o.nextTick),
                        o.each = function(t, e, n) {
                            if (n = n || function() {}
                            ,
                            !t.length)
                                return n();
                            var r = 0;
                            function i(e) {
                                e ? (n(e),
                                n = function() {}
                                ) : (r += 1) >= t.length && n()
                            }
                            l(t, (function(t) {
                                e(t, s(i))
                            }
                            ))
                        }
                        ,
                        o.forEach = o.each,
                        o.eachSeries = function(t, e, n) {
                            if (n = n || function() {}
                            ,
                            !t.length)
                                return n();
                            var r = 0
                              , i = function() {
                                e(t[r], (function(e) {
                                    e ? (n(e),
                                    n = function() {}
                                    ) : (r += 1) >= t.length ? n() : i()
                                }
                                ))
                            };
                            i()
                        }
                        ,
                        o.forEachSeries = o.eachSeries,
                        o.eachLimit = function(t, e, n, r) {
                            p(e).apply(null, [t, n, r])
                        }
                        ,
                        o.forEachLimit = o.eachLimit;
                        var p = function(t) {
                            return function(e, n, r) {
                                if (r = r || function() {}
                                ,
                                !e.length || t <= 0)
                                    return r();
                                var i = 0
                                  , o = 0
                                  , s = 0;
                                !function a() {
                                    if (i >= e.length)
                                        return r();
                                    for (; s < t && o < e.length; )
                                        s += 1,
                                        n(e[(o += 1) - 1], (function(t) {
                                            t ? (r(t),
                                            r = function() {}
                                            ) : (s -= 1,
                                            (i += 1) >= e.length ? r() : a())
                                        }
                                        ))
                                }()
                            }
                        }
                          , f = function(t) {
                            return function() {
                                var e = Array.prototype.slice.call(arguments);
                                return t.apply(null, [o.each].concat(e))
                            }
                        }
                          , d = function(t) {
                            return function() {
                                var e = Array.prototype.slice.call(arguments);
                                return t.apply(null, [o.eachSeries].concat(e))
                            }
                        }
                          , m = function(t, e, n, r) {
                            if (e = c(e, (function(t, e) {
                                return {
                                    index: e,
                                    value: t
                                }
                            }
                            )),
                            r) {
                                var i = [];
                                t(e, (function(t, e) {
                                    n(t.value, (function(n, r) {
                                        i[t.index] = r,
                                        e(n)
                                    }
                                    ))
                                }
                                ), (function(t) {
                                    r(t, i)
                                }
                                ))
                            } else
                                t(e, (function(t, e) {
                                    n(t.value, (function(t) {
                                        e(t)
                                    }
                                    ))
                                }
                                ))
                        };
                        o.map = f(m),
                        o.mapSeries = d(m),
                        o.mapLimit = function(t, e, n, r) {
                            return v(e)(t, n, r)
                        }
                        ;
                        var v = function(t) {
                            return function(t, e) {
                                return function() {
                                    var n = Array.prototype.slice.call(arguments);
                                    return e.apply(null, [p(t)].concat(n))
                                }
                            }(t, m)
                        };
                        o.reduce = function(t, e, n, r) {
                            o.eachSeries(t, (function(t, r) {
                                n(e, t, (function(t, n) {
                                    e = n,
                                    r(t)
                                }
                                ))
                            }
                            ), (function(t) {
                                r(t, e)
                            }
                            ))
                        }
                        ,
                        o.inject = o.reduce,
                        o.foldl = o.reduce,
                        o.reduceRight = function(t, e, n, r) {
                            var i = c(t, (function(t) {
                                return t
                            }
                            )).reverse();
                            o.reduce(i, e, n, r)
                        }
                        ,
                        o.foldr = o.reduceRight;
                        var y = function(t, e, n, r) {
                            var i = [];
                            t(e = c(e, (function(t, e) {
                                return {
                                    index: e,
                                    value: t
                                }
                            }
                            )), (function(t, e) {
                                n(t.value, (function(n) {
                                    n && i.push(t),
                                    e()
                                }
                                ))
                            }
                            ), (function(t) {
                                r(c(i.sort((function(t, e) {
                                    return t.index - e.index
                                }
                                )), (function(t) {
                                    return t.value
                                }
                                )))
                            }
                            ))
                        };
                        o.filter = f(y),
                        o.filterSeries = d(y),
                        o.select = o.filter,
                        o.selectSeries = o.filterSeries;
                        var g = function(t, e, n, r) {
                            var i = [];
                            t(e = c(e, (function(t, e) {
                                return {
                                    index: e,
                                    value: t
                                }
                            }
                            )), (function(t, e) {
                                n(t.value, (function(n) {
                                    n || i.push(t),
                                    e()
                                }
                                ))
                            }
                            ), (function(t) {
                                r(c(i.sort((function(t, e) {
                                    return t.index - e.index
                                }
                                )), (function(t) {
                                    return t.value
                                }
                                )))
                            }
                            ))
                        };
                        o.reject = f(g),
                        o.rejectSeries = d(g);
                        var _ = function(t, e, n, r) {
                            t(e, (function(t, e) {
                                n(t, (function(n) {
                                    n ? (r(t),
                                    r = function() {}
                                    ) : e()
                                }
                                ))
                            }
                            ), (function(t) {
                                r()
                            }
                            ))
                        };
                        o.detect = f(_),
                        o.detectSeries = d(_),
                        o.some = function(t, e, n) {
                            o.each(t, (function(t, r) {
                                e(t, (function(t) {
                                    t && (n(!0),
                                    n = function() {}
                                    ),
                                    r()
                                }
                                ))
                            }
                            ), (function(t) {
                                n(!1)
                            }
                            ))
                        }
                        ,
                        o.any = o.some,
                        o.every = function(t, e, n) {
                            o.each(t, (function(t, r) {
                                e(t, (function(t) {
                                    t || (n(!1),
                                    n = function() {}
                                    ),
                                    r()
                                }
                                ))
                            }
                            ), (function(t) {
                                n(!0)
                            }
                            ))
                        }
                        ,
                        o.all = o.every,
                        o.sortBy = function(t, e, n) {
                            o.map(t, (function(t, n) {
                                e(t, (function(e, r) {
                                    e ? n(e) : n(null, {
                                        value: t,
                                        criteria: r
                                    })
                                }
                                ))
                            }
                            ), (function(t, e) {
                                if (t)
                                    return n(t);
                                n(null, c(e.sort((function(t, e) {
                                    var n = t.criteria
                                      , r = e.criteria;
                                    return n < r ? -1 : n > r ? 1 : 0
                                }
                                )), (function(t) {
                                    return t.value
                                }
                                )))
                            }
                            ))
                        }
                        ,
                        o.auto = function(t, e) {
                            e = e || function() {}
                            ;
                            var n = h(t)
                              , r = n.length;
                            if (!r)
                                return e();
                            var i = {}
                              , s = []
                              , a = function(t) {
                                s.unshift(t)
                            }
                              , c = function() {
                                r--,
                                l(s.slice(0), (function(t) {
                                    t()
                                }
                                ))
                            };
                            a((function() {
                                if (!r) {
                                    var t = e;
                                    e = function() {}
                                    ,
                                    t(null, i)
                                }
                            }
                            )),
                            l(n, (function(n) {
                                var r = u(t[n]) ? t[n] : [t[n]]
                                  , p = function(t) {
                                    var r = Array.prototype.slice.call(arguments, 1);
                                    if (r.length <= 1 && (r = r[0]),
                                    t) {
                                        var s = {};
                                        l(h(i), (function(t) {
                                            s[t] = i[t]
                                        }
                                        )),
                                        s[n] = r,
                                        e(t, s),
                                        e = function() {}
                                    } else
                                        i[n] = r,
                                        o.setImmediate(c)
                                }
                                  , f = r.slice(0, Math.abs(r.length - 1)) || []
                                  , d = function() {
                                    return e = function(t, e) {
                                        return t && i.hasOwnProperty(e)
                                    }
                                    ,
                                    r = !0,
                                    ((t = f).reduce ? t.reduce(e, r) : (l(t, (function(t, n, i) {
                                        r = e(r, t, n, i)
                                    }
                                    )),
                                    r)) && !i.hasOwnProperty(n);
                                    var t, e, r
                                };
                                if (d())
                                    r[r.length - 1](p, i);
                                else {
                                    var m = function() {
                                        d() && (!function(t) {
                                            for (var e = 0; e < s.length; e += 1)
                                                if (s[e] === t)
                                                    return void s.splice(e, 1)
                                        }(m),
                                        r[r.length - 1](p, i))
                                    };
                                    a(m)
                                }
                            }
                            ))
                        }
                        ,
                        o.retry = function(t, e, n) {
                            var r = [];
                            "function" == typeof t && (n = e,
                            e = t,
                            t = 5),
                            t = parseInt(t, 10) || 5;
                            var i = function(i, s) {
                                for (var a = function(t, e) {
                                    return function(n) {
                                        t((function(t, r) {
                                            n(!t || e, {
                                                err: t,
                                                result: r
                                            })
                                        }
                                        ), s)
                                    }
                                }; t; )
                                    r.push(a(e, !(t -= 1)));
                                o.series(r, (function(t, e) {
                                    e = e[e.length - 1],
                                    (i || n)(e.err, e.result)
                                }
                                ))
                            };
                            return n ? i() : i
                        }
                        ,
                        o.waterfall = function(t, e) {
                            if (e = e || function() {}
                            ,
                            !u(t)) {
                                var n = new Error("First argument to waterfall must be an array of functions");
                                return e(n)
                            }
                            if (!t.length)
                                return e();
                            var r = function(t) {
                                return function(n) {
                                    if (n)
                                        e.apply(null, arguments),
                                        e = function() {}
                                        ;
                                    else {
                                        var i = Array.prototype.slice.call(arguments, 1)
                                          , s = t.next();
                                        s ? i.push(r(s)) : i.push(e),
                                        o.setImmediate((function() {
                                            t.apply(null, i)
                                        }
                                        ))
                                    }
                                }
                            };
                            r(o.iterator(t))()
                        }
                        ;
                        var b = function(t, e, n) {
                            if (n = n || function() {}
                            ,
                            u(e))
                                t.map(e, (function(t, e) {
                                    t && t((function(t) {
                                        var n = Array.prototype.slice.call(arguments, 1);
                                        n.length <= 1 && (n = n[0]),
                                        e.call(null, t, n)
                                    }
                                    ))
                                }
                                ), n);
                            else {
                                var r = {};
                                t.each(h(e), (function(t, n) {
                                    e[t]((function(e) {
                                        var i = Array.prototype.slice.call(arguments, 1);
                                        i.length <= 1 && (i = i[0]),
                                        r[t] = i,
                                        n(e)
                                    }
                                    ))
                                }
                                ), (function(t) {
                                    n(t, r)
                                }
                                ))
                            }
                        };
                        o.parallel = function(t, e) {
                            b({
                                map: o.map,
                                each: o.each
                            }, t, e)
                        }
                        ,
                        o.parallelLimit = function(t, e, n) {
                            b({
                                map: v(e),
                                each: p(e)
                            }, t, n)
                        }
                        ,
                        o.series = function(t, e) {
                            if (e = e || function() {}
                            ,
                            u(t))
                                o.mapSeries(t, (function(t, e) {
                                    t && t((function(t) {
                                        var n = Array.prototype.slice.call(arguments, 1);
                                        n.length <= 1 && (n = n[0]),
                                        e.call(null, t, n)
                                    }
                                    ))
                                }
                                ), e);
                            else {
                                var n = {};
                                o.eachSeries(h(t), (function(e, r) {
                                    t[e]((function(t) {
                                        var i = Array.prototype.slice.call(arguments, 1);
                                        i.length <= 1 && (i = i[0]),
                                        n[e] = i,
                                        r(t)
                                    }
                                    ))
                                }
                                ), (function(t) {
                                    e(t, n)
                                }
                                ))
                            }
                        }
                        ,
                        o.iterator = function(t) {
                            var e = function(n) {
                                var r = function() {
                                    return t.length && t[n].apply(null, arguments),
                                    r.next()
                                };
                                return r.next = function() {
                                    return n < t.length - 1 ? e(n + 1) : null
                                }
                                ,
                                r
                            };
                            return e(0)
                        }
                        ,
                        o.apply = function(t) {
                            var e = Array.prototype.slice.call(arguments, 1);
                            return function() {
                                return t.apply(null, e.concat(Array.prototype.slice.call(arguments)))
                            }
                        }
                        ;
                        var w = function(t, e, n, r) {
                            var i = [];
                            t(e, (function(t, e) {
                                n(t, (function(t, n) {
                                    i = i.concat(n || []),
                                    e(t)
                                }
                                ))
                            }
                            ), (function(t) {
                                r(t, i)
                            }
                            ))
                        };
                        o.concat = f(w),
                        o.concatSeries = d(w),
                        o.whilst = function(t, e, n) {
                            t() ? e((function(r) {
                                if (r)
                                    return n(r);
                                o.whilst(t, e, n)
                            }
                            )) : n()
                        }
                        ,
                        o.doWhilst = function(t, e, n) {
                            t((function(r) {
                                if (r)
                                    return n(r);
                                var i = Array.prototype.slice.call(arguments, 1);
                                e.apply(null, i) ? o.doWhilst(t, e, n) : n()
                            }
                            ))
                        }
                        ,
                        o.until = function(t, e, n) {
                            t() ? n() : e((function(r) {
                                if (r)
                                    return n(r);
                                o.until(t, e, n)
                            }
                            ))
                        }
                        ,
                        o.doUntil = function(t, e, n) {
                            t((function(r) {
                                if (r)
                                    return n(r);
                                var i = Array.prototype.slice.call(arguments, 1);
                                e.apply(null, i) ? n() : o.doUntil(t, e, n)
                            }
                            ))
                        }
                        ,
                        o.queue = function(t, e) {
                            function n(t, e, n, r) {
                                if (t.started || (t.started = !0),
                                u(e) || (e = [e]),
                                0 == e.length)
                                    return o.setImmediate((function() {
                                        t.drain && t.drain()
                                    }
                                    ));
                                l(e, (function(e) {
                                    var i = {
                                        data: e,
                                        callback: "function" == typeof r ? r : null
                                    };
                                    n ? t.tasks.unshift(i) : t.tasks.push(i),
                                    t.saturated && t.tasks.length === t.concurrency && t.saturated(),
                                    o.setImmediate(t.process)
                                }
                                ))
                            }
                            void 0 === e && (e = 1);
                            var r = 0
                              , i = {
                                tasks: [],
                                concurrency: e,
                                saturated: null,
                                empty: null,
                                drain: null,
                                started: !1,
                                paused: !1,
                                push: function(t, e) {
                                    n(i, t, !1, e)
                                },
                                kill: function() {
                                    i.drain = null,
                                    i.tasks = []
                                },
                                unshift: function(t, e) {
                                    n(i, t, !0, e)
                                },
                                process: function() {
                                    if (!i.paused && r < i.concurrency && i.tasks.length) {
                                        var e = i.tasks.shift();
                                        i.empty && 0 === i.tasks.length && i.empty(),
                                        r += 1;
                                        var n = s((function() {
                                            r -= 1,
                                            e.callback && e.callback.apply(e, arguments),
                                            i.drain && i.tasks.length + r === 0 && i.drain(),
                                            i.process()
                                        }
                                        ));
                                        t(e.data, n)
                                    }
                                },
                                length: function() {
                                    return i.tasks.length
                                },
                                running: function() {
                                    return r
                                },
                                idle: function() {
                                    return i.tasks.length + r === 0
                                },
                                pause: function() {
                                    !0 !== i.paused && (i.paused = !0,
                                    i.process())
                                },
                                resume: function() {
                                    !1 !== i.paused && (i.paused = !1,
                                    i.process())
                                }
                            };
                            return i
                        }
                        ,
                        o.priorityQueue = function(t, e) {
                            function n(t, e) {
                                return t.priority - e.priority
                            }
                            var r = o.queue(t, e);
                            return r.push = function(t, e, i) {
                                !function(t, e, r, i) {
                                    if (t.started || (t.started = !0),
                                    u(e) || (e = [e]),
                                    0 == e.length)
                                        return o.setImmediate((function() {
                                            t.drain && t.drain()
                                        }
                                        ));
                                    l(e, (function(e) {
                                        var s = {
                                            data: e,
                                            priority: r,
                                            callback: "function" == typeof i ? i : null
                                        };
                                        t.tasks.splice(function(t, e, n) {
                                            for (var r = -1, i = t.length - 1; r < i; ) {
                                                var o = r + (i - r + 1 >>> 1);
                                                n(e, t[o]) >= 0 ? r = o : i = o - 1
                                            }
                                            return r
                                        }(t.tasks, s, n) + 1, 0, s),
                                        t.saturated && t.tasks.length === t.concurrency && t.saturated(),
                                        o.setImmediate(t.process)
                                    }
                                    ))
                                }(r, t, e, i)
                            }
                            ,
                            delete r.unshift,
                            r
                        }
                        ,
                        o.cargo = function(t, e) {
                            var n = !1
                              , r = []
                              , i = {
                                tasks: r,
                                payload: e,
                                saturated: null,
                                empty: null,
                                drain: null,
                                drained: !0,
                                push: function(t, n) {
                                    u(t) || (t = [t]),
                                    l(t, (function(t) {
                                        r.push({
                                            data: t,
                                            callback: "function" == typeof n ? n : null
                                        }),
                                        i.drained = !1,
                                        i.saturated && r.length === e && i.saturated()
                                    }
                                    )),
                                    o.setImmediate(i.process)
                                },
                                process: function o() {
                                    if (!n) {
                                        if (0 === r.length)
                                            return i.drain && !i.drained && i.drain(),
                                            void (i.drained = !0);
                                        var s = "number" == typeof e ? r.splice(0, e) : r.splice(0, r.length)
                                          , a = c(s, (function(t) {
                                            return t.data
                                        }
                                        ));
                                        i.empty && i.empty(),
                                        n = !0,
                                        t(a, (function() {
                                            n = !1;
                                            var t = arguments;
                                            l(s, (function(e) {
                                                e.callback && e.callback.apply(null, t)
                                            }
                                            )),
                                            o()
                                        }
                                        ))
                                    }
                                },
                                length: function() {
                                    return r.length
                                },
                                running: function() {
                                    return n
                                }
                            };
                            return i
                        }
                        ;
                        var x = function(t) {
                            return function(e) {
                                var n = Array.prototype.slice.call(arguments, 1);
                                e.apply(null, n.concat([function(e) {
                                    var n = Array.prototype.slice.call(arguments, 1);
                                    "undefined" != typeof console && (e ? console.error && console.error(e) : console[t] && l(n, (function(e) {
                                        console[t](e)
                                    }
                                    )))
                                }
                                ]))
                            }
                        };
                        o.log = x("log"),
                        o.dir = x("dir"),
                        o.memoize = function(t, e) {
                            var n = {}
                              , r = {};
                            e = e || function(t) {
                                return t
                            }
                            ;
                            var i = function() {
                                var i = Array.prototype.slice.call(arguments)
                                  , s = i.pop()
                                  , a = e.apply(null, i);
                                a in n ? o.nextTick((function() {
                                    s.apply(null, n[a])
                                }
                                )) : a in r ? r[a].push(s) : (r[a] = [s],
                                t.apply(null, i.concat([function() {
                                    n[a] = arguments;
                                    var t = r[a];
                                    delete r[a];
                                    for (var e = 0, i = t.length; e < i; e++)
                                        t[e].apply(null, arguments)
                                }
                                ])))
                            };
                            return i.memo = n,
                            i.unmemoized = t,
                            i
                        }
                        ,
                        o.unmemoize = function(t) {
                            return function() {
                                return (t.unmemoized || t).apply(null, arguments)
                            }
                        }
                        ,
                        o.times = function(t, e, n) {
                            for (var r = [], i = 0; i < t; i++)
                                r.push(i);
                            return o.map(r, e, n)
                        }
                        ,
                        o.timesSeries = function(t, e, n) {
                            for (var r = [], i = 0; i < t; i++)
                                r.push(i);
                            return o.mapSeries(r, e, n)
                        }
                        ,
                        o.seq = function() {
                            var t = arguments;
                            return function() {
                                var e = this
                                  , n = Array.prototype.slice.call(arguments)
                                  , r = n.pop();
                                o.reduce(t, n, (function(t, n, r) {
                                    n.apply(e, t.concat([function() {
                                        var t = arguments[0]
                                          , e = Array.prototype.slice.call(arguments, 1);
                                        r(t, e)
                                    }
                                    ]))
                                }
                                ), (function(t, n) {
                                    r.apply(e, [t].concat(n))
                                }
                                ))
                            }
                        }
                        ,
                        o.compose = function() {
                            return o.seq.apply(null, Array.prototype.reverse.call(arguments))
                        }
                        ;
                        var E = function(t, e) {
                            var n = function() {
                                var n = this
                                  , r = Array.prototype.slice.call(arguments)
                                  , i = r.pop();
                                return t(e, (function(t, e) {
                                    t.apply(n, r.concat([e]))
                                }
                                ), i)
                            };
                            if (arguments.length > 2) {
                                var r = Array.prototype.slice.call(arguments, 2);
                                return n.apply(this, r)
                            }
                            return n
                        };
                        o.applyEach = f(E),
                        o.applyEachSeries = d(E),
                        o.forever = function(t, e) {
                            !function n(r) {
                                if (r) {
                                    if (e)
                                        return e(r);
                                    throw r
                                }
                                t(n)
                            }()
                        }
                        ,
                        void 0 !== e && e.exports ? e.exports = o : r.async = o
                    }()
                }
                ).call(this)
            }
            ).call(this, t("_process"), t("timers").setImmediate)
        }
        , {
            _process: 196,
            timers: 199
        }],
        2: [function(t, e, n) {
            /*!
  * Bowser - a browser detector
  * https://github.com/ded/bowser
  * MIT License | (c) Dustin Diaz 2014
  */
            !function(t, n) {
                void 0 !== e && e.exports ? e.exports.browser = n() : this.bowser = n()
            }(0, (function() {
                var t = !0;
                function e(e) {
                    function n(t) {
                        var n = e.match(t);
                        return n && n.length > 1 && n[1] || ""
                    }
                    var r, i = n(/(ipod|iphone|ipad)/i).toLowerCase(), o = !/like android/i.test(e) && /android/i.test(e), s = n(/version\/(\d+(\.\d+)?)/i), a = /tablet/i.test(e), u = !a && /[^-]mobi/i.test(e);
                    /opera|opr/i.test(e) ? r = {
                        name: "Opera",
                        opera: t,
                        version: s || n(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)
                    } : /windows phone/i.test(e) ? r = {
                        name: "Windows Phone",
                        windowsphone: t,
                        msie: t,
                        version: n(/iemobile\/(\d+(\.\d+)?)/i)
                    } : /msie|trident/i.test(e) ? r = {
                        name: "Internet Explorer",
                        msie: t,
                        version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
                    } : /chrome|crios|crmo/i.test(e) ? r = {
                        name: "Chrome",
                        chrome: t,
                        version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
                    } : i ? (r = {
                        name: "iphone" == i ? "iPhone" : "ipad" == i ? "iPad" : "iPod"
                    },
                    s && (r.version = s)) : /sailfish/i.test(e) ? r = {
                        name: "Sailfish",
                        sailfish: t,
                        version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
                    } : /seamonkey\//i.test(e) ? r = {
                        name: "SeaMonkey",
                        seamonkey: t,
                        version: n(/seamonkey\/(\d+(\.\d+)?)/i)
                    } : /firefox|iceweasel/i.test(e) ? (r = {
                        name: "Firefox",
                        firefox: t,
                        version: n(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)
                    },
                    /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(e) && (r.firefoxos = t)) : /silk/i.test(e) ? r = {
                        name: "Amazon Silk",
                        silk: t,
                        version: n(/silk\/(\d+(\.\d+)?)/i)
                    } : o ? r = {
                        name: "Android",
                        version: s
                    } : /phantom/i.test(e) ? r = {
                        name: "PhantomJS",
                        phantom: t,
                        version: n(/phantomjs\/(\d+(\.\d+)?)/i)
                    } : /blackberry|\bbb\d+/i.test(e) || /rim\stablet/i.test(e) ? r = {
                        name: "BlackBerry",
                        blackberry: t,
                        version: s || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
                    } : /(web|hpw)os/i.test(e) ? (r = {
                        name: "WebOS",
                        webos: t,
                        version: s || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
                    },
                    /touchpad\//i.test(e) && (r.touchpad = t)) : r = /bada/i.test(e) ? {
                        name: "Bada",
                        bada: t,
                        version: n(/dolfin\/(\d+(\.\d+)?)/i)
                    } : /tizen/i.test(e) ? {
                        name: "Tizen",
                        tizen: t,
                        version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || s
                    } : /safari/i.test(e) ? {
                        name: "Safari",
                        safari: t,
                        version: s
                    } : {},
                    /(apple)?webkit/i.test(e) ? (r.name = r.name || "Webkit",
                    r.webkit = t,
                    !r.version && s && (r.version = s)) : !r.opera && /gecko\//i.test(e) && (r.name = r.name || "Gecko",
                    r.gecko = t,
                    r.version = r.version || n(/gecko\/(\d+(\.\d+)?)/i)),
                    o || r.silk ? r.android = t : i && (r[i] = t,
                    r.ios = t);
                    var l = "";
                    i ? l = (l = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : o ? l = n(/android[ \/-](\d+(\.\d+)*)/i) : r.windowsphone ? l = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.webos ? l = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? l = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? l = n(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (l = n(/tizen[\/\s](\d+(\.\d+)*)/i)),
                    l && (r.osversion = l);
                    var c = l.split(".")[0];
                    return a || "ipad" == i || o && (3 == c || 4 == c && !u) || r.silk ? r.tablet = t : (u || "iphone" == i || "ipod" == i || o || r.blackberry || r.webos || r.bada) && (r.mobile = t),
                    r.msie && r.version >= 10 || r.chrome && r.version >= 20 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 ? r.a = t : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 ? r.c = t : r.x = t,
                    r
                }
                var n = e("undefined" != typeof navigator ? navigator.userAgent : "");
                return n._detect = e,
                n
            }
            ))
        }
        , {}],
        3: [function(t, e, n) {
            /*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
            var r = r || "undefined" != typeof navigator && navigator.msSaveOrOpenBlob && navigator.msSaveOrOpenBlob.bind(navigator) || function(t) {
                "use strict";
                if ("undefined" == typeof navigator || !/MSIE [1-9]\./.test(navigator.userAgent)) {
                    var e = t.document
                      , n = function() {
                        return t.URL || t.webkitURL || t
                    }
                      , r = e.createElementNS("http://www.w3.org/1999/xhtml", "a")
                      , i = "download"in r
                      , o = t.webkitRequestFileSystem
                      , s = t.requestFileSystem || o || t.mozRequestFileSystem
                      , a = function(e) {
                        (t.setImmediate || t.setTimeout)((function() {
                            throw e
                        }
                        ), 0)
                    }
                      , u = "application/octet-stream"
                      , l = 0
                      , c = function(e) {
                        var r = function() {
                            "string" == typeof e ? n().revokeObjectURL(e) : e.remove()
                        };
                        t.chrome ? r() : setTimeout(r, 500)
                    }
                      , h = function(t, e, n) {
                        for (var r = (e = [].concat(e)).length; r--; ) {
                            var i = t["on" + e[r]];
                            if ("function" == typeof i)
                                try {
                                    i.call(t, n || t)
                                } catch (t) {
                                    a(t)
                                }
                        }
                    }
                      , p = function(a, p) {
                        var f, d, m, v, y, g = this, _ = a.type, b = !1, w = function() {
                            h(g, "writestart progress write writeend".split(" "))
                        }, x = function() {
                            (!b && f || (f = n().createObjectURL(a)),
                            d) ? d.location.href = f : null == t.open(f, "_blank") && "undefined" != typeof safari && (t.location.href = f);
                            g.readyState = g.DONE,
                            w(),
                            c(f)
                        }, E = function(t) {
                            return function() {
                                if (g.readyState !== g.DONE)
                                    return t.apply(this, arguments)
                            }
                        }, M = {
                            create: !0,
                            exclusive: !1
                        };
                        if (g.readyState = g.INIT,
                        p || (p = "download"),
                        i)
                            return f = n().createObjectURL(a),
                            r.href = f,
                            r.download = p,
                            v = r,
                            (y = e.createEvent("MouseEvents")).initMouseEvent("click", !0, !1, t, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null),
                            v.dispatchEvent(y),
                            g.readyState = g.DONE,
                            w(),
                            void c(f);
                        t.chrome && _ && _ !== u && (m = a.slice || a.webkitSlice,
                        a = m.call(a, 0, a.size, u),
                        b = !0),
                        o && "download" !== p && (p += ".download"),
                        (_ === u || o) && (d = t),
                        s ? (l += a.size,
                        s(t.TEMPORARY, l, E((function(t) {
                            t.root.getDirectory("saved", M, E((function(t) {
                                var e = function() {
                                    t.getFile(p, M, E((function(t) {
                                        t.createWriter(E((function(e) {
                                            e.onwriteend = function(e) {
                                                d.location.href = t.toURL(),
                                                g.readyState = g.DONE,
                                                h(g, "writeend", e),
                                                c(t)
                                            }
                                            ,
                                            e.onerror = function() {
                                                var t = e.error;
                                                t.code !== t.ABORT_ERR && x()
                                            }
                                            ,
                                            "writestart progress write abort".split(" ").forEach((function(t) {
                                                e["on" + t] = g["on" + t]
                                            }
                                            )),
                                            e.write(a),
                                            g.abort = function() {
                                                e.abort(),
                                                g.readyState = g.DONE
                                            }
                                            ,
                                            g.readyState = g.WRITING
                                        }
                                        )), x)
                                    }
                                    )), x)
                                };
                                t.getFile(p, {
                                    create: !1
                                }, E((function(t) {
                                    t.remove(),
                                    e()
                                }
                                )), E((function(t) {
                                    t.code === t.NOT_FOUND_ERR ? e() : x()
                                }
                                )))
                            }
                            )), x)
                        }
                        )), x)) : x()
                    }
                      , f = p.prototype;
                    return f.abort = function() {
                        var t = this;
                        t.readyState = t.DONE,
                        h(t, "abort")
                    }
                    ,
                    f.readyState = f.INIT = 0,
                    f.WRITING = 1,
                    f.DONE = 2,
                    f.error = f.onwritestart = f.onprogress = f.onwrite = f.onabort = f.onerror = f.onwriteend = null,
                    function(t, e) {
                        return new p(t,e)
                    }
                }
            }("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
            void 0 !== e && e.exports && (e.exports = r)
        }
        , {}],
        4: [function(t, e, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.setMatrixArrayType = function(t) {
                n.ARRAY_TYPE = i = t
            }
            ,
            n.toRadian = function(t) {
                return t * s
            }
            ,
            n.equals = function(t, e) {
                return Math.abs(t - e) <= r * Math.max(1, Math.abs(t), Math.abs(e))
            }
            ,
            n.RANDOM = n.ARRAY_TYPE = n.EPSILON = void 0;
            var r = 1e-6;
            n.EPSILON = r;
            var i = "undefined" != typeof Float32Array ? Float32Array : Array;
            n.ARRAY_TYPE = i;
            var o = Math.random;
            n.RANDOM = o;
            var s = Math.PI / 180;
            Math.hypot || (Math.hypot = function() {
                for (var t = 0, e = arguments.length; e--; )
                    t += arguments[e] * arguments[e];
                return Math.sqrt(t)
            }
            )
        }
        , {}],
        5: [function(t, e, n) {
            "use strict";
            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.vec4 = n.vec3 = n.vec2 = n.quat2 = n.quat = n.mat4 = n.mat3 = n.mat2d = n.mat2 = n.glMatrix = void 0;
            var i = m(t("./common.js"));
            n.glMatrix = i;
            var o = m(t("./mat2.js"));
            n.mat2 = o;
            var s = m(t("./mat2d.js"));
            n.mat2d = s;
            var a = m(t("./mat3.js"));
            n.mat3 = a;
            var u = m(t("./mat4.js"));
            n.mat4 = u;
            var l = m(t("./quat.js"));
            n.quat = l;
            var c = m(t("./quat2.js"));
            n.quat2 = c;
            var h = m(t("./vec2.js"));
            n.vec2 = h;
            var p = m(t("./vec3.js"));
            n.vec3 = p;
            var f = m(t("./vec4.js"));
            function d() {
                if ("function" != typeof WeakMap)
                    return null;
                var t = new WeakMap;
                return d = function() {
                    return t
                }
                ,
                t
            }
            function m(t) {
                if (t && t.__esModule)
                    return t;
                if (null === t || "object" !== r(t) && "function" != typeof t)
                    return {
                        default: t
                    };
                var e = d();
                if (e && e.has(t))
                    return e.get(t);
                var n = {}
                  , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in t)
                    if (Object.prototype.hasOwnProperty.call(t, o)) {
                        var s = i ? Object.getOwnPropertyDescriptor(t, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : n[o] = t[o]
                    }
                return n.default = t,
                e && e.set(t, n),
                n
            }
            n.vec4 = f
        }
        , {
            "./common.js": 4,
            "./mat2.js": 6,
            "./mat2d.js": 7,
            "./mat3.js": 8,
            "./mat4.js": 9,
            "./quat.js": 10,
            "./quat2.js": 11,
            "./vec2.js": 12,
            "./vec3.js": 13,
            "./vec4.js": 14
        }],
        6: [function(t, e, n) {
            "use strict";
            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.create = function() {
                var t = new i.ARRAY_TYPE(4);
                i.ARRAY_TYPE != Float32Array && (t[1] = 0,
                t[2] = 0);
                return t[0] = 1,
                t[3] = 1,
                t
            }
            ,
            n.clone = function(t) {
                var e = new i.ARRAY_TYPE(4);
                return e[0] = t[0],
                e[1] = t[1],
                e[2] = t[2],
                e[3] = t[3],
                e
            }
            ,
            n.copy = function(t, e) {
                return t[0] = e[0],
                t[1] = e[1],
                t[2] = e[2],
                t[3] = e[3],
                t
            }
            ,
            n.identity = function(t) {
                return t[0] = 1,
                t[1] = 0,
                t[2] = 0,
                t[3] = 1,
                t
            }
            ,
            n.fromValues = function(t, e, n, r) {
                var o = new i.ARRAY_TYPE(4);
                return o[0] = t,
                o[1] = e,
                o[2] = n,
                o[3] = r,
                o
            }
            ,
            n.set = function(t, e, n, r, i) {
                return t[0] = e,
                t[1] = n,
                t[2] = r,
                t[3] = i,
                t
            }
            ,
            n.transpose = function(t, e) {
                if (t === e) {
                    var n = e[1];
                    t[1] = e[2],
                    t[2] = n
                } else
                    t[0] = e[0],
                    t[1] = e[2],
                    t[2] = e[1],
                    t[3] = e[3];
                return t
            }
            ,
            n.invert = function(t, e) {
                var n = e[0]
                  , r = e[1]
                  , i = e[2]
                  , o = e[3]
                  , s = n * o - i * r;
                if (!s)
                    return null;
                return s = 1 / s,
                t[0] = o * s,
                t[1] = -r * s,
                t[2] = -i * s,
                t[3] = n * s,
                t
            }
            ,
            n.adjoint = function(t, e) {
                var n = e[0];
                return t[0] = e[3],
                t[1] = -e[1],
                t[2] = -e[2],
                t[3] = n,
                t
            }
            ,
            n.determinant = function(t) {
                return t[0] * t[3] - t[2] * t[1]
            }
            ,
            n.multiply = s,
            n.rotate = function(t, e, n) {
                var r = e[0]
                  , i = e[1]
                  , o = e[2]
                  , s = e[3]
                  , a = Math.sin(n)
                  , u = Math.cos(n);
                return t[0] = r * u + o * a,
                t[1] = i * u + s * a,
                t[2] = r * -a + o * u,
                t[3] = i * -a + s * u,
                t
            }
            ,
            n.scale = function(t, e, n) {
                var r = e[0]
                  , i = e[1]
                  , o = e[2]
                  , s = e[3]
                  , a = n[0]
                  , u = n[1];
                return t[0] = r * a,
                t[1] = i * a,
                t[2] = o * u,
                t[3] = s * u,
                t
            }
            ,
            n.fromRotation = function(t, e) {
                var n = Math.sin(e)
                  , r = Math.cos(e);
                return t[0] = r,
                t[1] = n,
                t[2] = -n,
                t[3] = r,
                t
            }
            ,
            n.fromScaling = function(t, e) {
                return t[0] = e[0],
                t[1] = 0,
                t[2] = 0,
                t[3] = e[1],
                t
            }
            ,
            n.str = function(t) {
                return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
            }
            ,
            n.frob = function(t) {
                return Math.hypot(t[0], t[1], t[2], t[3])
            }
            ,
            n.LDU = function(t, e, n, r) {
                return t[2] = r[2] / r[0],
                n[0] = r[0],
                n[1] = r[1],
                n[3] = r[3] - t[2] * n[1],
                [t, e, n]
            }
            ,
            n.add = function(t, e, n) {
                return t[0] = e[0] + n[0],
                t[1] = e[1] + n[1],
                t[2] = e[2] + n[2],
                t[3] = e[3] + n[3],
                t
            }
            ,
            n.subtract = a,
            n.exactEquals = function(t, e) {
                return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3]
            }
            ,
            n.equals = function(t, e) {
                var n = t[0]
                  , r = t[1]
                  , o = t[2]
                  , s = t[3]
                  , a = e[0]
                  , u = e[1]
                  , l = e[2]
                  , c = e[3];
                return Math.abs(n - a) <= i.EPSILON * Math.max(1, Math.abs(n), Math.abs(a)) && Math.abs(r - u) <= i.EPSILON * Math.max(1, Math.abs(r), Math.abs(u)) && Math.abs(o - l) <= i.EPSILON * Math.max(1, Math.abs(o), Math.abs(l)) && Math.abs(s - c) <= i.EPSILON * Math.max(1, Math.abs(s), Math.abs(c))
            }
            ,
            n.multiplyScalar = function(t, e, n) {
                return t[0] = e[0] * n,
                t[1] = e[1] * n,
                t[2] = e[2] * n,
                t[3] = e[3] * n,
                t
            }
            ,
            n.multiplyScalarAndAdd = function(t, e, n, r) {
                return t[0] = e[0] + n[0] * r,
                t[1] = e[1] + n[1] * r,
                t[2] = e[2] + n[2] * r,
                t[3] = e[3] + n[3] * r,
                t
            }
            ,
            n.sub = n.mul = void 0;
            var i = function(t) {
                if (t && t.__esModule)
                    return t;
                if (null === t || "object" !== r(t) && "function" != typeof t)
                    return {
                        default: t
                    };
                var e = o();
                if (e && e.has(t))
                    return e.get(t);
                var n = {}
                  , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var s in t)
                    if (Object.prototype.hasOwnProperty.call(t, s)) {
                        var a = i ? Object.getOwnPropertyDescriptor(t, s) : null;
                        a && (a.get || a.set) ? Object.defineProperty(n, s, a) : n[s] = t[s]
                    }
                n.default = t,
                e && e.set(t, n);
                return n
            }(t("./common.js"));
            function o() {
                if ("function" != typeof WeakMap)
                    return null;
                var t = new WeakMap;
                return o = function() {
                    return t
                }
                ,
                t
            }
            function s(t, e, n) {
                var r = e[0]
                  , i = e[1]
                  , o = e[2]
                  , s = e[3]
                  , a = n[0]
                  , u = n[1]
                  , l = n[2]
                  , c = n[3];
                return t[0] = r * a + o * u,
                t[1] = i * a + s * u,
                t[2] = r * l + o * c,
                t[3] = i * l + s * c,
                t
            }
            function a(t, e, n) {
                return t[0] = e[0] - n[0],
                t[1] = e[1] - n[1],
                t[2] = e[2] - n[2],
                t[3] = e[3] - n[3],
                t
            }
            var u = s;
            n.mul = u;
            var l = a;
            n.sub = l
        }
        , {
            "./common.js": 4
        }],
        7: [function(t, e, n) {
            "use strict";
            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.create = function() {
                var t = new i.ARRAY_TYPE(6);
                i.ARRAY_TYPE != Float32Array && (t[1] = 0,
                t[2] = 0,
                t[4] = 0,
                t[5] = 0);
                return t[0] = 1,
                t[3] = 1,
                t
            }
            ,
            n.clone = function(t) {
                var e = new i.ARRAY_TYPE(6);
                return e[0] = t[0],
                e[1] = t[1],
                e[2] = t[2],
                e[3] = t[3],
                e[4] = t[4],
                e[5] = t[5],
                e
            }
            ,
            n.copy = function(t, e) {
                return t[0] = e[0],
                t[1] = e[1],
                t[2] = e[2],
                t[3] = e[3],
                t[4] = e[4],
                t[5] = e[5],
                t
            }
            ,
            n.identity = function(t) {
                return t[0] = 1,
                t[1] = 0,
                t[2] = 0,
                t[3] = 1,
                t[4] = 0,
                t[5] = 0,
                t
            }
            ,
            n.fromValues = function(t, e, n, r, o, s) {
                var a = new i.ARRAY_TYPE(6);
                return a[0] = t,
                a[1] = e,
                a[2] = n,
                a[3] = r,
                a[4] = o,
                a[5] = s,
                a
            }
            ,
            n.set = function(t, e, n, r, i, o, s) {
                return t[0] = e,
                t[1] = n,
                t[2] = r,
                t[3] = i,
                t[4] = o,
                t[5] = s,
                t
            }
            ,
            n.invert = function(t, e) {
                var n = e[0]
                  , r = e[1]
                  , i = e[2]
                  , o = e[3]
                  , s = e[4]
                  , a = e[5]
                  , u = n * o - r * i;
                if (!u)
                    return null;
                return u = 1 / u,
                t[0] = o * u,
                t[1] = -r * u,
                t[2] = -i * u,
                t[3] = n * u,
                t[4] = (i * a - o * s) * u,
                t[5] = (r * s - n * a) * u,
                t
            }
            ,
            n.determinant = function(t) {
                return t[0] * t[3] - t[1] * t[2]
            }
            ,
            n.multiply = s,
            n.rotate = function(t, e, n) {
                var r = e[0]
                  , i = e[1]
                  , o = e[2]
                  , s = e[3]
                  , a = e[4]
                  , u = e[5]
                  , l = Math.sin(n)
                  , c = Math.cos(n);
                return t[0] = r * c + o * l,
                t[1] = i * c + s * l,
                t[2] = r * -l + o * c,
                t[3] = i * -l + s * c,
                t[4] = a,
                t[5] = u,
                t
            }
            ,
            n.scale = function(t, e, n) {
                var r = e[0]
                  , i = e[1]
                  , o = e[2]
                  , s = e[3]
                  , a = e[4]
                  , u = e[5]
                  , l = n[0]
                  , c = n[1];
                return t[0] = r * l,
                t[1] = i * l,
                t[2] = o * c,
                t[3] = s * c,
                t[4] = a,
                t[5] = u,
                t
            }
            ,
            n.translate = function(t, e, n) {
                var r = e[0]
                  , i = e[1]
                  , o = e[2]
                  , s = e[3]
                  , a = e[4]
                  , u = e[5]
                  , l = n[0]
                  , c = n[1];
                return t[0] = r,
                t[1] = i,
                t[2] = o,
                t[3] = s,
                t[4] = r * l + o * c + a,
                t[5] = i * l + s * c + u,
                t
            }
            ,
            n.fromRotation = function(t, e) {
                var n = Math.sin(e)
                  , r = Math.cos(e);
                return t[0] = r,
                t[1] = n,
                t[2] = -n,
                t[3] = r,
                t[4] = 0,
                t[5] = 0,
                t
            }
            ,
            n.fromScaling = function(t, e) {
                return t[0] = e[0],
                t[1] = 0,
                t[2] = 0,
                t[3] = e[1],
                t[4] = 0,
                t[5] = 0,
                t
            }
            ,
            n.fromTranslation = function(t, e) {
                return t[0] = 1,
                t[1] = 0,
                t[2] = 0,
                t[3] = 1,
                t[4] = e[0],
                t[5] = e[1],
                t
            }
            ,
            n.str = function(t) {
                return "mat2d(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ")"
            }
            ,
            n.frob = function(t) {
                return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], 1)
            }
            ,
            n.add = function(t, e, n) {
                return t[0] = e[0] + n[0],
                t[1] = e[1] + n[1],
                t[2] = e[2] + n[2],
                t[3] = e[3] + n[3],
                t[4] = e[4] + n[4],
                t[5] = e[5] + n[5],
                t
            }
            ,
            n.subtract = a,
            n.multiplyScalar = function(t, e, n) {
                return t[0] = e[0] * n,
                t[1] = e[1] * n,
                t[2] = e[2] * n,
                t[3] = e[3] * n,
                t[4] = e[4] * n,
                t[5] = e[5] * n,
                t
            }
            ,
            n.multiplyScalarAndAdd = function(t, e, n, r) {
                return t[0] = e[0] + n[0] * r,
                t[1] = e[1] + n[1] * r,
                t[2] = e[2] + n[2] * r,
                t[3] = e[3] + n[3] * r,
                t[4] = e[4] + n[4] * r,
                t[5] = e[5] + n[5] * r,
                t
            }
            ,
            n.exactEquals = function(t, e) {
                return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5]
            }
            ,
            n.equals = function(t, e) {
                var n = t[0]
                  , r = t[1]
                  , o = t[2]
                  , s = t[3]
                  , a = t[4]
                  , u = t[5]
                  , l = e[0]
                  , c = e[1]
                  , h = e[2]
                  , p = e[3]
                  , f = e[4]
                  , d = e[5];
                return Math.abs(n - l) <= i.EPSILON * Math.max(1, Math.abs(n), Math.abs(l)) && Math.abs(r - c) <= i.EPSILON * Math.max(1, Math.abs(r), Math.abs(c)) && Math.abs(o - h) <= i.EPSILON * Math.max(1, Math.abs(o), Math.abs(h)) && Math.abs(s - p) <= i.EPSILON * Math.max(1, Math.abs(s), Math.abs(p)) && Math.abs(a - f) <= i.EPSILON * Math.max(1, Math.abs(a), Math.abs(f)) && Math.abs(u - d) <= i.EPSILON * Math.max(1, Math.abs(u), Math.abs(d))
            }
            ,
            n.sub = n.mul = void 0;
            var i = function(t) {
                if (t && t.__esModule)
                    return t;
                if (null === t || "object" !== r(t) && "function" != typeof t)
                    return {
                        default: t
                    };
                var e = o();
                if (e && e.has(t))
                    return e.get(t);
                var n = {}
                  , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var s in t)
                    if (Object.prototype.hasOwnProperty.call(t, s)) {
                        var a = i ? Object.getOwnPropertyDescriptor(t, s) : null;
                        a && (a.get || a.set) ? Object.defineProperty(n, s, a) : n[s] = t[s]
                    }
                n.default = t,
                e && e.set(t, n);
                return n
            }(t("./common.js"));
            function o() {
                if ("function" != typeof WeakMap)
                    return null;
                var t = new WeakMap;
                return o = function() {
                    return t
                }
                ,
                t
            }
            function s(t, e, n) {
                var r = e[0]
                  , i = e[1]
                  , o = e[2]
                  , s = e[3]
                  , a = e[4]
                  , u = e[5]
                  , l = n[0]
                  , c = n[1]
                  , h = n[2]
                  , p = n[3]
                  , f = n[4]
                  , d = n[5];
                return t[0] = r * l + o * c,
                t[1] = i * l + s * c,
                t[2] = r * h + o * p,
                t[3] = i * h + s * p,
                t[4] = r * f + o * d + a,
                t[5] = i * f + s * d + u,
                t
            }
            function a(t, e, n) {
                return t[0] = e[0] - n[0],
                t[1] = e[1] - n[1],
                t[2] = e[2] - n[2],
                t[3] = e[3] - n[3],
                t[4] = e[4] - n[4],
                t[5] = e[5] - n[5],
                t
            }
            var u = s;
            n.mul = u;
            var l = a;
            n.sub = l
        }
        , {
            "./common.js": 4
        }],
        8: [function(t, e, n) {
            "use strict";
            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.create = function() {
                var t = new i.ARRAY_TYPE(9);
                i.ARRAY_TYPE != Float32Array && (t[1] = 0,
                t[2] = 0,
                t[3] = 0,
                t[5] = 0,
                t[6] = 0,
                t[7] = 0);
                return t[0] = 1,
                t[4] = 1,
                t[8] = 1,
                t
            }
            ,
            n.fromMat4 = function(t, e) {
                return t[0] = e[0],
                t[1] = e[1],
                t[2] = e[2],
                t[3] = e[4],
                t[4] = e[5],
                t[5] = e[6],
                t[6] = e[8],
                t[7] = e[9],
                t[8] = e[10],
                t
            }
            ,
            n.clone = function(t) {
                var e = new i.ARRAY_TYPE(9);
                return e[0] = t[0],
                e[1] = t[1],
                e[2] = t[2],
                e[3] = t[3],
                e[4] = t[4],
                e[5] = t[5],
                e[6] = t[6],
                e[7] = t[7],
                e[8] = t[8],
                e
            }
            ,
            n.copy = function(t, e) {
                return t[0] = e[0],
                t[1] = e[1],
                t[2] = e[2],
                t[3] = e[3],
                t[4] = e[4],
                t[5] = e[5],
                t[6] = e[6],
                t[7] = e[7],
                t[8] = e[8],
                t
            }
            ,
            n.fromValues = function(t, e, n, r, o, s, a, u, l) {
                var c = new i.ARRAY_TYPE(9);
                return c[0] = t,
                c[1] = e,
                c[2] = n,
                c[3] = r,
                c[4] = o,
                c[5] = s,
                c[6] = a,
                c[7] = u,
                c[8] = l,
                c
            }
            ,
            n.set = function(t, e, n, r, i, o, s, a, u, l) {
                return t[0] = e,
                t[1] = n,
                t[2] = r,
                t[3] = i,
                t[4] = o,
                t[5] = s,
                t[6] = a,
                t[7] = u,
                t[8] = l,
                t
            }
            ,
            n.identity = function(t) {
                return t[0] = 1,
                t[1] = 0,
                t[2] = 0,
                t[3] = 0,
                t[4] = 1,
                t[5] = 0,
                t[6] = 0,
                t[7] = 0,
                t[8] = 1,
                t
            }
            ,
            n.transpose = function(t, e) {
                if (t === e) {
                    var n = e[1]
                      , r = e[2]
                      , i = e[5];
                    t[1] = e[3],
                    t[2] = e[6],
                    t[3] = n,
                    t[5] = e[7],
                    t[6] = r,
                    t[7] = i
                } else
                    t[0] = e[0],
                    t[1] = e[3],
                    t[2] = e[6],
                    t[3] = e[1],
                    t[4] = e[4],
                    t[5] = e[7],
                    t[6] = e[2],
                    t[7] = e[5],
                    t[8] = e[8];
                return t
            }
            ,
            n.invert = function(t, e) {
                var n = e[0]
                  , r = e[1]
                  , i = e[2]
                  , o = e[3]
                  , s = e[4]
                  , a = e[5]
                  , u = e[6]
                  , l = e[7]
                  , c = e[8]
                  , h = c * s - a * l
                  , p = -c * o + a * u
                  , f = l * o - s * u
                  , d = n * h + r * p + i * f;
                if (!d)
                    return null;
                return d = 1 / d,
                t[0] = h * d,
                t[1] = (-c * r + i * l) * d,
                t[2] = (a * r - i * s) * d,
                t[3] = p * d,
                t[4] = (c * n - i * u) * d,
                t[5] = (-a * n + i * o) * d,
                t[6] = f * d,
                t[7] = (-l * n + r * u) * d,
                t[8] = (s * n - r * o) * d,
                t
            }
            ,
            n.adjoint = function(t, e) {
                var n = e[0]
                  , r = e[1]
                  , i = e[2]
                  , o = e[3]
                  , s = e[4]
                  , a = e[5]
                  , u = e[6]
                  , l = e[7]
                  , c = e[8];
                return t[0] = s * c - a * l,
                t[1] = i * l - r * c,
                t[2] = r * a - i * s,
                t[3] = a * u - o * c,
                t[4] = n * c - i * u,
                t[5] = i * o - n * a,
                t[6] = o * l - s * u,
                t[7] = r * u - n * l,
                t[8] = n * s - r * o,
                t
            }
            ,
            n.determinant = function(t) {
                var e = t[0]
                  , n = t[1]
                  , r = t[2]
                  , i = t[3]
                  , o = t[4]
                  , s = t[5]
                  , a = t[6]
                  , u = t[7]
                  , l = t[8];
                return e * (l * o - s * u) + n * (-l * i + s * a) + r * (u * i - o * a)
            }
            ,
            n.multiply = s,
            n.translate = function(t, e, n) {
                var r = e[0]
                  , i = e[1]
                  , o = e[2]
                  , s = e[3]
                  , a = e[4]
                  , u = e[5]
                  , l = e[6]
                  , c = e[7]
                  , h = e[8]
                  , p = n[0]
                  , f = n[1];
                return t[0] = r,
                t[1] = i,
                t[2] = o,
                t[3] = s,
                t[4] = a,
                t[5] = u,
                t[6] = p * r + f * s + l,
                t[7] = p * i + f * a + c,
                t[8] = p * o + f * u + h,
                t
            }
            ,
            n.rotate = function(t, e, n) {
                var r = e[0]
                  , i = e[1]
                  , o = e[2]
                  , s = e[3]
                  , a = e[4]
                  , u = e[5]
                  , l = e[6]
                  , c = e[7]
                  , h = e[8]
                  , p = Math.sin(n)
                  , f = Math.cos(n);
                return t[0] = f * r + p * s,
                t[1] = f * i + p * a,
                t[2] = f * o + p * u,
                t[3] = f * s - p * r,
                t[4] = f * a - p * i,
                t[5] = f * u - p * o,
                t[6] = l,
                t[7] = c,
                t[8] = h,
                t
            }
            ,
            n.scale = function(t, e, n) {
                var r = n[0]
                  , i = n[1];
                return t[0] = r * e[0],
                t[1] = r * e[1],
                t[2] = r * e[2],
                t[3] = i * e[3],
                t[4] = i * e[4],
                t[5] = i * e[5],
                t[6] = e[6],
                t[7] = e[7],
                t[8] = e[8],
                t
            }
            ,
            n.fromTranslation = function(t, e) {
                return t[0] = 1,
                t[1] = 0,
                t[2] = 0,
                t[3] = 0,
                t[4] = 1,
                t[5] = 0,
                t[6] = e[0],
                t[7] = e[1],
                t[8] = 1,
                t
            }
            ,
            n.fromRotation = function(t, e) {
                var n = Math.sin(e)
                  , r = Math.cos(e);
                return t[0] = r,
                t[1] = n,
                t[2] = 0,
                t[3] = -n,
                t[4] = r,
                t[5] = 0,
                t[6] = 0,
                t[7] = 0,
                t[8] = 1,
                t
            }
            ,
            n.fromScaling = function(t, e) {
                return t[0] = e[0],
                t[1] = 0,
                t[2] = 0,
                t[3] = 0,
                t[4] = e[1],
                t[5] = 0,
                t[6] = 0,
                t[7] = 0,
                t[8] = 1,
                t
            }
            ,
            n.fromMat2d = function(t, e) {
                return t[0] = e[0],
                t[1] = e[1],
                t[2] = 0,
                t[3] = e[2],
                t[4] = e[3],
                t[5] = 0,
                t[6] = e[4],
                t[7] = e[5],
                t[8] = 1,
                t
            }
            ,
            n.fromQuat = function(t, e) {
                var n = e[0]
                  , r = e[1]
                  , i = e[2]
                  , o = e[3]
                  , s = n + n
                  , a = r + r
                  , u = i + i
                  , l = n * s
                  , c = r * s
                  , h = r * a
                  , p = i * s
                  , f = i * a
                  , d = i * u
                  , m = o * s
                  , v = o * a
                  , y = o * u;
                return t[0] = 1 - h - d,
                t[3] = c - y,
                t[6] = p + v,
                t[1] = c + y,
                t[4] = 1 - l - d,
                t[7] = f - m,
                t[2] = p - v,
                t[5] = f + m,
                t[8] = 1 - l - h,
                t
            }
            ,
            n.normalFromMat4 = function(t, e) {
                var n = e[0]
                  , r = e[1]
                  , i = e[2]
                  , o = e[3]
                  , s = e[4]
                  , a = e[5]
                  , u = e[6]
                  , l = e[7]
                  , c = e[8]
                  , h = e[9]
                  , p = e[10]
                  , f = e[11]
                  , d = e[12]
                  , m = e[13]
                  , v = e[14]
                  , y = e[15]
                  , g = n * a - r * s
                  , _ = n * u - i * s
                  , b = n * l - o * s
                  , w = r * u - i * a
                  , x = r * l - o * a
                  , E = i * l - o * u
                  , M = c * m - h * d
                  , S = c * v - p * d
                  , T = c * y - f * d
                  , C = h * v - p * m
                  , O = h * y - f * m
                  , P = p * y - f * v
                  , L = g * P - _ * O + b * C + w * T - x * S + E * M;
                if (!L)
                    return null;
                return L = 1 / L,
                t[0] = (a * P - u * O + l * C) * L,
                t[1] = (u * T - s * P - l * S) * L,
                t[2] = (s * O - a * T + l * M) * L,
                t[3] = (i * O - r * P - o * C) * L,
                t[4] = (n * P - i * T + o * S) * L,
                t[5] = (r * T - n * O - o * M) * L,
                t[6] = (m * E - v * x + y * w) * L,
                t[7] = (v * b - d * E - y * _) * L,
                t[8] = (d * x - m * b + y * g) * L,
                t
            }
            ,
            n.projection = function(t, e, n) {
                return t[0] = 2 / e,
                t[1] = 0,
                t[2] = 0,
                t[3] = 0,
                t[4] = -2 / n,
                t[5] = 0,
                t[6] = -1,
                t[7] = 1,
                t[8] = 1,
                t
            }
            ,
            n.str = function(t) {
                return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")"
            }
            ,
            n.frob = function(t) {
                return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8])
            }
            ,
            n.add = function(t, e, n) {
                return t[0] = e[0] + n[0],
                t[1] = e[1] + n[1],
                t[2] = e[2] + n[2],
                t[3] = e[3] + n[3],
                t[4] = e[4] + n[4],
                t[5] = e[5] + n[5],
                t[6] = e[6] + n[6],
                t[7] = e[7] + n[7],
                t[8] = e[8] + n[8],
                t
            }
            ,
            n.subtract = a,
            n.multiplyScalar = function(t, e, n) {
                return t[0] = e[0] * n,
                t[1] = e[1] * n,
                t[2] = e[2] * n,
                t[3] = e[3] * n,
                t[4] = e[4] * n,
                t[5] = e[5] * n,
                t[6] = e[6] * n,
                t[7] = e[7] * n,
                t[8] = e[8] * n,
                t
            }
            ,
            n.multiplyScalarAndAdd = function(t, e, n, r) {
                return t[0] = e[0] + n[0] * r,
                t[1] = e[1] + n[1] * r,
                t[2] = e[2] + n[2] * r,
                t[3] = e[3] + n[3] * r,
                t[4] = e[4] + n[4] * r,
                t[5] = e[5] + n[5] * r,
                t[6] = e[6] + n[6] * r,
                t[7] = e[7] + n[7] * r,
                t[8] = e[8] + n[8] * r,
                t
            }
            ,
            n.exactEquals = function(t, e) {
                return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8]
            }
            ,
            n.equals = function(t, e) {
                var n = t[0]
                  , r = t[1]
                  , o = t[2]
                  , s = t[3]
                  , a = t[4]
                  , u = t[5]
                  , l = t[6]
                  , c = t[7]
                  , h = t[8]
                  , p = e[0]
                  , f = e[1]
                  , d = e[2]
                  , m = e[3]
                  , v = e[4]
                  , y = e[5]
                  , g = e[6]
                  , _ = e[7]
                  , b = e[8];
                return Math.abs(n - p) <= i.EPSILON * Math.max(1, Math.abs(n), Math.abs(p)) && Math.abs(r - f) <= i.EPSILON * Math.max(1, Math.abs(r), Math.abs(f)) && Math.abs(o - d) <= i.EPSILON * Math.max(1, Math.abs(o), Math.abs(d)) && Math.abs(s - m) <= i.EPSILON * Math.max(1, Math.abs(s), Math.abs(m)) && Math.abs(a - v) <= i.EPSILON * Math.max(1, Math.abs(a), Math.abs(v)) && Math.abs(u - y) <= i.EPSILON * Math.max(1, Math.abs(u), Math.abs(y)) && Math.abs(l - g) <= i.EPSILON * Math.max(1, Math.abs(l), Math.abs(g)) && Math.abs(c - _) <= i.EPSILON * Math.max(1, Math.abs(c), Math.abs(_)) && Math.abs(h - b) <= i.EPSILON * Math.max(1, Math.abs(h), Math.abs(b))
            }
            ,
            n.sub = n.mul = void 0;
            var i = function(t) {
                if (t && t.__esModule)
                    return t;
                if (null === t || "object" !== r(t) && "function" != typeof t)
                    return {
                        default: t
                    };
                var e = o();
                if (e && e.has(t))
                    return e.get(t);
                var n = {}
                  , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var s in t)
                    if (Object.prototype.hasOwnProperty.call(t, s)) {
                        var a = i ? Object.getOwnPropertyDescriptor(t, s) : null;
                        a && (a.get || a.set) ? Object.defineProperty(n, s, a) : n[s] = t[s]
                    }
                n.default = t,
                e && e.set(t, n);
                return n
            }(t("./common.js"));
            function o() {
                if ("function" != typeof WeakMap)
                    return null;
                var t = new WeakMap;
                return o = function() {
                    return t
                }
                ,
                t
            }
            function s(t, e, n) {
                var r = e[0]
                  , i = e[1]
                  , o = e[2]
                  , s = e[3]
                  , a = e[4]
                  , u = e[5]
                  , l = e[6]
                  , c = e[7]
                  , h = e[8]
                  , p = n[0]
                  , f = n[1]
                  , d = n[2]
                  , m = n[3]
                  , v = n[4]
                  , y = n[5]
                  , g = n[6]
                  , _ = n[7]
                  , b = n[8];
                return t[0] = p * r + f * s + d * l,
                t[1] = p * i + f * a + d * c,
                t[2] = p * o + f * u + d * h,
                t[3] = m * r + v * s + y * l,
                t[4] = m * i + v * a + y * c,
                t[5] = m * o + v * u + y * h,
                t[6] = g * r + _ * s + b * l,
                t[7] = g * i + _ * a + b * c,
                t[8] = g * o + _ * u + b * h,
                t
            }
            function a(t, e, n) {
                return t[0] = e[0] - n[0],
                t[1] = e[1] - n[1],
                t[2] = e[2] - n[2],
                t[3] = e[3] - n[3],
                t[4] = e[4] - n[4],
                t[5] = e[5] - n[5],
                t[6] = e[6] - n[6],
                t[7] = e[7] - n[7],
                t[8] = e[8] - n[8],
                t
            }
            var u = s;
            n.mul = u;
            var l = a;
            n.sub = l
        }
        , {
            "./common.js": 4
        }],
        9: [function(t, e, n) {
            "use strict";
            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.create = function() {
                var t = new i.ARRAY_TYPE(16);
                i.ARRAY_TYPE != Float32Array && (t[1] = 0,
                t[2] = 0,
                t[3] = 0,
                t[4] = 0,
                t[6] = 0,
                t[7] = 0,
                t[8] = 0,
                t[9] = 0,
                t[11] = 0,
                t[12] = 0,
                t[13] = 0,
                t[14] = 0);
                return t[0] = 1,
                t[5] = 1,
                t[10] = 1,
                t[15] = 1,
                t
            }
            ,
            n.clone = function(t) {
                var e = new i.ARRAY_TYPE(16);
                return e[0] = t[0],
                e[1] = t[1],
                e[2] = t[2],
                e[3] = t[3],
                e[4] = t[4],
                e[5] = t[5],
                e[6] = t[6],
                e[7] = t[7],
                e[8] = t[8],
                e[9] = t[9],
                e[10] = t[10],
                e[11] = t[11],
                e[12] = t[12],
                e[13] = t[13],
                e[14] = t[14],
                e[15] = t[15],
                e
            }
            ,
            n.copy = function(t, e) {
                return t[0] = e[0],
                t[1] = e[1],
                t[2] = e[2],
                t[3] = e[3],
                t[4] = e[4],
                t[5] = e[5],
                t[6] = e[6],
                t[7] = e[7],
                t[8] = e[8],
                t[9] = e[9],
                t[10] = e[10],
                t[11] = e[11],
                t[12] = e[12],
                t[13] = e[13],
                t[14] = e[14],
                t[15] = e[15],
                t
            }
            ,
            n.fromValues = function(t, e, n, r, o, s, a, u, l, c, h, p, f, d, m, v) {
                var y = new i.ARRAY_TYPE(16);
                return y[0] = t,
                y[1] = e,
                y[2] = n,
                y[3] = r,
                y[4] = o,
                y[5] = s,
                y[6] = a,
                y[7] = u,
                y[8] = l,
                y[9] = c,
                y[10] = h,
                y[11] = p,
                y[12] = f,
                y[13] = d,
                y[14] = m,
                y[15] = v,
                y
            }
            ,
            n.set = function(t, e, n, r, i, o, s, a, u, l, c, h, p, f, d, m, v) {
                return t[0] = e,
                t[1] = n,
                t[2] = r,
                t[3] = i,
                t[4] = o,
                t[5] = s,
                t[6] = a,
                t[7] = u,
                t[8] = l,
                t[9] = c,
                t[10] = h,
                t[11] = p,
                t[12] = f,
                t[13] = d,
                t[14] = m,
                t[15] = v,
                t
            }
            ,
            n.identity = s,
            n.transpose = function(t, e) {
                if (t === e) {
                    var n = e[1]
                      , r = e[2]
                      , i = e[3]
                      , o = e[6]
                      , s = e[7]
                      , a = e[11];
                    t[1] = e[4],
                    t[2] = e[8],
                    t[3] = e[12],
                    t[4] = n,
                    t[6] = e[9],
                    t[7] = e[13],
                    t[8] = r,
                    t[9] = o,
                    t[11] = e[14],
                    t[12] = i,
                    t[13] = s,
                    t[14] = a
                } else
                    t[0] = e[0],
                    t[1] = e[4],
                    t[2] = e[8],
                    t[3] = e[12],
                    t[4] = e[1],
                    t[5] = e[5],
                    t[6] = e[9],
                    t[7] = e[13],
                    t[8] = e[2],
                    t[9] = e[6],
                    t[10] = e[10],
                    t[11] = e[14],
                    t[12] = e[3],
                    t[13] = e[7],
                    t[14] = e[11],
                    t[15] = e[15];
                return t
            }
            ,
            n.invert = function(t, e) {
                var n = e[0]
                  , r = e[1]
                  , i = e[2]
                  , o = e[3]
                  , s = e[4]
                  , a = e[5]
                  , u = e[6]
                  , l = e[7]
                  , c = e[8]
                  , h = e[9]
                  , p = e[10]
                  , f = e[11]
                  , d = e[12]
                  , m = e[13]
                  , v = e[14]
                  , y = e[15]
                  , g = n * a - r * s
                  , _ = n * u - i * s
                  , b = n * l - o * s
                  , w = r * u - i * a
                  , x = r * l - o * a
                  , E = i * l - o * u
                  , M = c * m - h * d
                  , S = c * v - p * d
                  , T = c * y - f * d
                  , C = h * v - p * m
                  , O = h * y - f * m
                  , P = p * y - f * v
                  , L = g * P - _ * O + b * C + w * T - x * S + E * M;
                if (!L)
                    return null;
                return L = 1 / L,
                t[0] = (a * P - u * O + l * C) * L,
                t[1] = (i * O - r * P - o * C) * L,
                t[2] = (m * E - v * x + y * w) * L,
                t[3] = (p * x - h * E - f * w) * L,
                t[4] = (u * T - s * P - l * S) * L,
                t[5] = (n * P - i * T + o * S) * L,
                t[6] = (v * b - d * E - y * _) * L,
                t[7] = (c * E - p * b + f * _) * L,
                t[8] = (s * O - a * T + l * M) * L,
                t[9] = (r * T - n * O - o * M) * L,
                t[10] = (d * x - m * b + y * g) * L,
                t[11] = (h * b - c * x - f * g) * L,
                t[12] = (a * S - s * C - u * M) * L,
                t[13] = (n * C - r * S + i * M) * L,
                t[14] = (m * _ - d * w - v * g) * L,
                t[15] = (c * w - h * _ + p * g) * L,
                t
            }
            ,
            n.adjoint = function(t, e) {
                var n = e[0]
                  , r = e[1]
                  , i = e[2]
                  , o = e[3]
                  , s = e[4]
                  , a = e[5]
                  , u = e[6]
                  , l = e[7]
                  , c = e[8]
                  , h = e[9]
                  , p = e[10]
                  , f = e[11]
                  , d = e[12]
                  , m = e[13]
                  , v = e[14]
                  , y = e[15];
                return t[0] = a * (p * y - f * v) - h * (u * y - l * v) + m * (u * f - l * p),
                t[1] = -(r * (p * y - f * v) - h * (i * y - o * v) + m * (i * f - o * p)),
                t[2] = r * (u * y - l * v) - a * (i * y - o * v) + m * (i * l - o * u),
                t[3] = -(r * (u * f - l * p) - a * (i * f - o * p) + h * (i * l - o * u)),
                t[4] = -(s * (p * y - f * v) - c * (u * y - l * v) + d * (u * f - l * p)),
                t[5] = n * (p * y - f * v) - c * (i * y - o * v) + d * (i * f - o * p),
                t[6] = -(n * (u * y - l * v) - s * (i * y - o * v) + d * (i * l - o * u)),
                t[7] = n * (u * f - l * p) - s * (i * f - o * p) + c * (i * l - o * u),
                t[8] = s * (h * y - f * m) - c * (a * y - l * m) + d * (a * f - l * h),
                t[9] = -(n * (h * y - f * m) - c * (r * y - o * m) + d * (r * f - o * h)),
                t[10] = n * (a * y - l * m) - s * (r * y - o * m) + d * (r * l - o * a),
                t[11] = -(n * (a * f - l * h) - s * (r * f - o * h) + c * (r * l - o * a)),
                t[12] = -(s * (h * v - p * m) - c * (a * v - u * m) + d * (a * p - u * h)),
                t[13] = n * (h * v - p * m) - c * (r * v - i * m) + d * (r * p - i * h),
                t[14] = -(n * (a * v - u * m) - s * (r * v - i * m) + d * (r * u - i * a)),
                t[15] = n * (a * p - u * h) - s * (r * p - i * h) + c * (r * u - i * a),
                t
            }
            ,
            n.determinant = function(t) {
                var e = t[0]
                  , n = t[1]
                  , r = t[2]
                  , i = t[3]
                  , o = t[4]
                  , s = t[5]
                  , a = t[6]
                  , u = t[7]
                  , l = t[8]
                  , c = t[9]
                  , h = t[10]
                  , p = t[11]
                  , f = t[12]
                  , d = t[13]
                  , m = t[14]
                  , v = t[15];
                return (e * s - n * o) * (h * v - p * m) - (e * a - r * o) * (c * v - p * d) + (e * u - i * o) * (c * m - h * d) + (n * a - r * s) * (l * v - p * f) - (n * u - i * s) * (l * m - h * f) + (r * u - i * a) * (l * d - c * f)
            }
            ,
            n.multiply = a,
            n.translate = function(t, e, n) {
                var r, i, o, s, a, u, l, c, h, p, f, d, m = n[0], v = n[1], y = n[2];
                e === t ? (t[12] = e[0] * m + e[4] * v + e[8] * y + e[12],
                t[13] = e[1] * m + e[5] * v + e[9] * y + e[13],
                t[14] = e[2] * m + e[6] * v + e[10] * y + e[14],
                t[15] = e[3] * m + e[7] * v + e[11] * y + e[15]) : (r = e[0],
                i = e[1],
                o = e[2],
                s = e[3],
                a = e[4],
                u = e[5],
                l = e[6],
                c = e[7],
                h = e[8],
                p = e[9],
                f = e[10],
                d = e[11],
                t[0] = r,
                t[1] = i,
                t[2] = o,
                t[3] = s,
                t[4] = a,
                t[5] = u,
                t[6] = l,
                t[7] = c,
                t[8] = h,
                t[9] = p,
                t[10] = f,
                t[11] = d,
                t[12] = r * m + a * v + h * y + e[12],
                t[13] = i * m + u * v + p * y + e[13],
                t[14] = o * m + l * v + f * y + e[14],
                t[15] = s * m + c * v + d * y + e[15]);
                return t
            }
            ,
            n.scale = function(t, e, n) {
                var r = n[0]
                  , i = n[1]
                  , o = n[2];
                return t[0] = e[0] * r,
                t[1] = e[1] * r,
                t[2] = e[2] * r,
                t[3] = e[3] * r,
                t[4] = e[4] * i,
                t[5] = e[5] * i,
                t[6] = e[6] * i,
                t[7] = e[7] * i,
                t[8] = e[8] * o,
                t[9] = e[9] * o,
                t[10] = e[10] * o,
                t[11] = e[11] * o,
                t[12] = e[12],
                t[13] = e[13],
                t[14] = e[14],
                t[15] = e[15],
                t
            }
            ,
            n.rotate = function(t, e, n, r) {
                var o, s, a, u, l, c, h, p, f, d, m, v, y, g, _, b, w, x, E, M, S, T, C, O, P = r[0], L = r[1], A = r[2], k = Math.hypot(P, L, A);
                if (k < i.EPSILON)
                    return null;
                P *= k = 1 / k,
                L *= k,
                A *= k,
                o = Math.sin(n),
                s = Math.cos(n),
                a = 1 - s,
                u = e[0],
                l = e[1],
                c = e[2],
                h = e[3],
                p = e[4],
                f = e[5],
                d = e[6],
                m = e[7],
                v = e[8],
                y = e[9],
                g = e[10],
                _ = e[11],
                b = P * P * a + s,
                w = L * P * a + A * o,
                x = A * P * a - L * o,
                E = P * L * a - A * o,
                M = L * L * a + s,
                S = A * L * a + P * o,
                T = P * A * a + L * o,
                C = L * A * a - P * o,
                O = A * A * a + s,
                t[0] = u * b + p * w + v * x,
                t[1] = l * b + f * w + y * x,
                t[2] = c * b + d * w + g * x,
                t[3] = h * b + m * w + _ * x,
                t[4] = u * E + p * M + v * S,
                t[5] = l * E + f * M + y * S,
                t[6] = c * E + d * M + g * S,
                t[7] = h * E + m * M + _ * S,
                t[8] = u * T + p * C + v * O,
                t[9] = l * T + f * C + y * O,
                t[10] = c * T + d * C + g * O,
                t[11] = h * T + m * C + _ * O,
                e !== t && (t[12] = e[12],
                t[13] = e[13],
                t[14] = e[14],
                t[15] = e[15]);
                return t
            }
            ,
            n.rotateX = function(t, e, n) {
                var r = Math.sin(n)
                  , i = Math.cos(n)
                  , o = e[4]
                  , s = e[5]
                  , a = e[6]
                  , u = e[7]
                  , l = e[8]
                  , c = e[9]
                  , h = e[10]
                  , p = e[11];
                e !== t && (t[0] = e[0],
                t[1] = e[1],
                t[2] = e[2],
                t[3] = e[3],
                t[12] = e[12],
                t[13] = e[13],
                t[14] = e[14],
                t[15] = e[15]);
                return t[4] = o * i + l * r,
                t[5] = s * i + c * r,
                t[6] = a * i + h * r,
                t[7] = u * i + p * r,
                t[8] = l * i - o * r,
                t[9] = c * i - s * r,
                t[10] = h * i - a * r,
                t[11] = p * i - u * r,
                t
            }
            ,
            n.rotateY = function(t, e, n) {
                var r = Math.sin(n)
                  , i = Math.cos(n)
                  , o = e[0]
                  , s = e[1]
                  , a = e[2]
                  , u = e[3]
                  , l = e[8]
                  , c = e[9]
                  , h = e[10]
                  , p = e[11];
                e !== t && (t[4] = e[4],
                t[5] = e[5],
                t[6] = e[6],
                t[7] = e[7],
                t[12] = e[12],
                t[13] = e[13],
                t[14] = e[14],
                t[15] = e[15]);
                return t[0] = o * i - l * r,
                t[1] = s * i - c * r,
                t[2] = a * i - h * r,
                t[3] = u * i - p * r,
                t[8] = o * r + l * i,
                t[9] = s * r + c * i,
                t[10] = a * r + h * i,
                t[11] = u * r + p * i,
                t
            }
            ,
            n.rotateZ = function(t, e, n) {
                var r = Math.sin(n)
                  , i = Math.cos(n)
                  , o = e[0]
                  , s = e[1]
                  , a = e[2]
                  , u = e[3]
                  , l = e[4]
                  , c = e[5]
                  , h = e[6]
                  , p = e[7];
                e !== t && (t[8] = e[8],
                t[9] = e[9],
                t[10] = e[10],
                t[11] = e[11],
                t[12] = e[12],
                t[13] = e[13],
                t[14] = e[14],
                t[15] = e[15]);
                return t[0] = o * i + l * r,
                t[1] = s * i + c * r,
                t[2] = a * i + h * r,
                t[3] = u * i + p * r,
                t[4] = l * i - o * r,
                t[5] = c * i - s * r,
                t[6] = h * i - a * r,
                t[7] = p * i - u * r,
                t
            }
            ,
            n.fromTranslation = function(t, e) {
                return t[0] = 1,
                t[1] = 0,
                t[2] = 0,
                t[3] = 0,
                t[4] = 0,
                t[5] = 1,
                t[6] = 0,
                t[7] = 0,
                t[8] = 0,
                t[9] = 0,
                t[10] = 1,
                t[11] = 0,
                t[12] = e[0],
                t[13] = e[1],
                t[14] = e[2],
                t[15] = 1,
                t
            }
            ,
            n.fromScaling = function(t, e) {
                return t[0] = e[0],
                t[1] = 0,
                t[2] = 0,
                t[3] = 0,
                t[4] = 0,
                t[5] = e[1],
                t[6] = 0,
                t[7] = 0,
                t[8] = 0,
                t[9] = 0,
                t[10] = e[2],
                t[11] = 0,
                t[12] = 0,
                t[13] = 0,
                t[14] = 0,
                t[15] = 1,
                t
            }
            ,
            n.fromRotation = function(t, e, n) {
                var r, o, s, a = n[0], u = n[1], l = n[2], c = Math.hypot(a, u, l);
                if (c < i.EPSILON)
                    return null;
                return a *= c = 1 / c,
                u *= c,
                l *= c,
                r = Math.sin(e),
                o = Math.cos(e),
                s = 1 - o,
                t[0] = a * a * s + o,
                t[1] = u * a * s + l * r,
                t[2] = l * a * s - u * r,
                t[3] = 0,
                t[4] = a * u * s - l * r,
                t[5] = u * u * s + o,
                t[6] = l * u * s + a * r,
                t[7] = 0,
                t[8] = a * l * s + u * r,
                t[9] = u * l * s - a * r,
                t[10] = l * l * s + o,
                t[11] = 0,
                t[12] = 0,
                t[13] = 0,
                t[14] = 0,
                t[15] = 1,
                t
            }
            ,
            n.fromXRotation = function(t, e) {
                var n = Math.sin(e)
                  , r = Math.cos(e);
                return t[0] = 1,
                t[1] = 0,
                t[2] = 0,
                t[3] = 0,
                t[4] = 0,
                t[5] = r,
                t[6] = n,
                t[7] = 0,
                t[8] = 0,
                t[9] = -n,
                t[10] = r,
                t[11] = 0,
                t[12] = 0,
                t[13] = 0,
                t[14] = 0,
                t[15] = 1,
                t
            }
            ,
            n.fromYRotation = function(t, e) {
                var n = Math.sin(e)
                  , r = Math.cos(e);
                return t[0] = r,
                t[1] = 0,
                t[2] = -n,
                t[3] = 0,
                t[4] = 0,
                t[5] = 1,
                t[6] = 0,
                t[7] = 0,
                t[8] = n,
                t[9] = 0,
                t[10] = r,
                t[11] = 0,
                t[12] = 0,
                t[13] = 0,
                t[14] = 0,
                t[15] = 1,
                t
            }
            ,
            n.fromZRotation = function(t, e) {
                var n = Math.sin(e)
                  , r = Math.cos(e);
                return t[0] = r,
                t[1] = n,
                t[2] = 0,
                t[3] = 0,
                t[4] = -n,
                t[5] = r,
                t[6] = 0,
                t[7] = 0,
                t[8] = 0,
                t[9] = 0,
                t[10] = 1,
                t[11] = 0,
                t[12] = 0,
                t[13] = 0,
                t[14] = 0,
                t[15] = 1,
                t
            }
            ,
            n.fromRotationTranslation = u,
            n.fromQuat2 = function(t, e) {
                var n = new i.ARRAY_TYPE(3)
                  , r = -e[0]
                  , o = -e[1]
                  , s = -e[2]
                  , a = e[3]
                  , l = e[4]
                  , c = e[5]
                  , h = e[6]
                  , p = e[7]
                  , f = r * r + o * o + s * s + a * a;
                f > 0 ? (n[0] = 2 * (l * a + p * r + c * s - h * o) / f,
                n[1] = 2 * (c * a + p * o + h * r - l * s) / f,
                n[2] = 2 * (h * a + p * s + l * o - c * r) / f) : (n[0] = 2 * (l * a + p * r + c * s - h * o),
                n[1] = 2 * (c * a + p * o + h * r - l * s),
                n[2] = 2 * (h * a + p * s + l * o - c * r));
                return u(t, e, n),
                t
            }
            ,
            n.getTranslation = function(t, e) {
                return t[0] = e[12],
                t[1] = e[13],
                t[2] = e[14],
                t
            }
            ,
            n.getScaling = l,
            n.getRotation = function(t, e) {
                var n = new i.ARRAY_TYPE(3);
                l(n, e);
                var r = 1 / n[0]
                  , o = 1 / n[1]
                  , s = 1 / n[2]
                  , a = e[0] * r
                  , u = e[1] * o
                  , c = e[2] * s
                  , h = e[4] * r
                  , p = e[5] * o
                  , f = e[6] * s
                  , d = e[8] * r
                  , m = e[9] * o
                  , v = e[10] * s
                  , y = a + p + v
                  , g = 0;
                y > 0 ? (g = 2 * Math.sqrt(y + 1),
                t[3] = .25 * g,
                t[0] = (f - m) / g,
                t[1] = (d - c) / g,
                t[2] = (u - h) / g) : a > p && a > v ? (g = 2 * Math.sqrt(1 + a - p - v),
                t[3] = (f - m) / g,
                t[0] = .25 * g,
                t[1] = (u + h) / g,
                t[2] = (d + c) / g) : p > v ? (g = 2 * Math.sqrt(1 + p - a - v),
                t[3] = (d - c) / g,
                t[0] = (u + h) / g,
                t[1] = .25 * g,
                t[2] = (f + m) / g) : (g = 2 * Math.sqrt(1 + v - a - p),
                t[3] = (u - h) / g,
                t[0] = (d + c) / g,
                t[1] = (f + m) / g,
                t[2] = .25 * g);
                return t
            }
            ,
            n.fromRotationTranslationScale = function(t, e, n, r) {
                var i = e[0]
                  , o = e[1]
                  , s = e[2]
                  , a = e[3]
                  , u = i + i
                  , l = o + o
                  , c = s + s
                  , h = i * u
                  , p = i * l
                  , f = i * c
                  , d = o * l
                  , m = o * c
                  , v = s * c
                  , y = a * u
                  , g = a * l
                  , _ = a * c
                  , b = r[0]
                  , w = r[1]
                  , x = r[2];
                return t[0] = (1 - (d + v)) * b,
                t[1] = (p + _) * b,
                t[2] = (f - g) * b,
                t[3] = 0,
                t[4] = (p - _) * w,
                t[5] = (1 - (h + v)) * w,
                t[6] = (m + y) * w,
                t[7] = 0,
                t[8] = (f + g) * x,
                t[9] = (m - y) * x,
                t[10] = (1 - (h + d)) * x,
                t[11] = 0,
                t[12] = n[0],
                t[13] = n[1],
                t[14] = n[2],
                t[15] = 1,
                t
            }
            ,
            n.fromRotationTranslationScaleOrigin = function(t, e, n, r, i) {
                var o = e[0]
                  , s = e[1]
                  , a = e[2]
                  , u = e[3]
                  , l = o + o
                  , c = s + s
                  , h = a + a
                  , p = o * l
                  , f = o * c
                  , d = o * h
                  , m = s * c
                  , v = s * h
                  , y = a * h
                  , g = u * l
                  , _ = u * c
                  , b = u * h
                  , w = r[0]
                  , x = r[1]
                  , E = r[2]
                  , M = i[0]
                  , S = i[1]
                  , T = i[2]
                  , C = (1 - (m + y)) * w
                  , O = (f + b) * w
                  , P = (d - _) * w
                  , L = (f - b) * x
                  , A = (1 - (p + y)) * x
                  , k = (v + g) * x
                  , D = (d + _) * E
                  , R = (v - g) * E
                  , I = (1 - (p + m)) * E;
                return t[0] = C,
                t[1] = O,
                t[2] = P,
                t[3] = 0,
                t[4] = L,
                t[5] = A,
                t[6] = k,
                t[7] = 0,
                t[8] = D,
                t[9] = R,
                t[10] = I,
                t[11] = 0,
                t[12] = n[0] + M - (C * M + L * S + D * T),
                t[13] = n[1] + S - (O * M + A * S + R * T),
                t[14] = n[2] + T - (P * M + k * S + I * T),
                t[15] = 1,
                t
            }
            ,
            n.fromQuat = function(t, e) {
                var n = e[0]
                  , r = e[1]
                  , i = e[2]
                  , o = e[3]
                  , s = n + n
                  , a = r + r
                  , u = i + i
                  , l = n * s
                  , c = r * s
                  , h = r * a
                  , p = i * s
                  , f = i * a
                  , d = i * u
                  , m = o * s
                  , v = o * a
                  , y = o * u;
                return t[0] = 1 - h - d,
                t[1] = c + y,
                t[2] = p - v,
                t[3] = 0,
                t[4] = c - y,
                t[5] = 1 - l - d,
                t[6] = f + m,
                t[7] = 0,
                t[8] = p + v,
                t[9] = f - m,
                t[10] = 1 - l - h,
                t[11] = 0,
                t[12] = 0,
                t[13] = 0,
                t[14] = 0,
                t[15] = 1,
                t
            }
            ,
            n.frustum = function(t, e, n, r, i, o, s) {
                var a = 1 / (n - e)
                  , u = 1 / (i - r)
                  , l = 1 / (o - s);
                return t[0] = 2 * o * a,
                t[1] = 0,
                t[2] = 0,
                t[3] = 0,
                t[4] = 0,
                t[5] = 2 * o * u,
                t[6] = 0,
                t[7] = 0,
                t[8] = (n + e) * a,
                t[9] = (i + r) * u,
                t[10] = (s + o) * l,
                t[11] = -1,
                t[12] = 0,
                t[13] = 0,
                t[14] = s * o * 2 * l,
                t[15] = 0,
                t
            }
            ,
            n.perspective = function(t, e, n, r, i) {
                var o, s = 1 / Math.tan(e / 2);
                t[0] = s / n,
                t[1] = 0,
                t[2] = 0,
                t[3] = 0,
                t[4] = 0,
                t[5] = s,
                t[6] = 0,
                t[7] = 0,
                t[8] = 0,
                t[9] = 0,
                t[11] = -1,
                t[12] = 0,
                t[13] = 0,
                t[15] = 0,
                null != i && i !== 1 / 0 ? (o = 1 / (r - i),
                t[10] = (i + r) * o,
                t[14] = 2 * i * r * o) : (t[10] = -1,
                t[14] = -2 * r);
                return t
            }
            ,
            n.perspectiveFromFieldOfView = function(t, e, n, r) {
                var i = Math.tan(e.upDegrees * Math.PI / 180)
                  , o = Math.tan(e.downDegrees * Math.PI / 180)
                  , s = Math.tan(e.leftDegrees * Math.PI / 180)
                  , a = Math.tan(e.rightDegrees * Math.PI / 180)
                  , u = 2 / (s + a)
                  , l = 2 / (i + o);
                return t[0] = u,
                t[1] = 0,
                t[2] = 0,
                t[3] = 0,
                t[4] = 0,
                t[5] = l,
                t[6] = 0,
                t[7] = 0,
                t[8] = -(s - a) * u * .5,
                t[9] = (i - o) * l * .5,
                t[10] = r / (n - r),
                t[11] = -1,
                t[12] = 0,
                t[13] = 0,
                t[14] = r * n / (n - r),
                t[15] = 0,
                t
            }
            ,
            n.ortho = function(t, e, n, r, i, o, s) {
                var a = 1 / (e - n)
                  , u = 1 / (r - i)
                  , l = 1 / (o - s);
                return t[0] = -2 * a,
                t[1] = 0,
                t[2] = 0,
                t[3] = 0,
                t[4] = 0,
                t[5] = -2 * u,
                t[6] = 0,
                t[7] = 0,
                t[8] = 0,
                t[9] = 0,
                t[10] = 2 * l,
                t[11] = 0,
                t[12] = (e + n) * a,
                t[13] = (i + r) * u,
                t[14] = (s + o) * l,
                t[15] = 1,
                t
            }
            ,
            n.lookAt = function(t, e, n, r) {
                var o, a, u, l, c, h, p, f, d, m, v = e[0], y = e[1], g = e[2], _ = r[0], b = r[1], w = r[2], x = n[0], E = n[1], M = n[2];
                if (Math.abs(v - x) < i.EPSILON && Math.abs(y - E) < i.EPSILON && Math.abs(g - M) < i.EPSILON)
                    return s(t);
                p = v - x,
                f = y - E,
                d = g - M,
                m = 1 / Math.hypot(p, f, d),
                o = b * (d *= m) - w * (f *= m),
                a = w * (p *= m) - _ * d,
                u = _ * f - b * p,
                (m = Math.hypot(o, a, u)) ? (o *= m = 1 / m,
                a *= m,
                u *= m) : (o = 0,
                a = 0,
                u = 0);
                l = f * u - d * a,
                c = d * o - p * u,
                h = p * a - f * o,
                (m = Math.hypot(l, c, h)) ? (l *= m = 1 / m,
                c *= m,
                h *= m) : (l = 0,
                c = 0,
                h = 0);
                return t[0] = o,
                t[1] = l,
                t[2] = p,
                t[3] = 0,
                t[4] = a,
                t[5] = c,
                t[6] = f,
                t[7] = 0,
                t[8] = u,
                t[9] = h,
                t[10] = d,
                t[11] = 0,
                t[12] = -(o * v + a * y + u * g),
                t[13] = -(l * v + c * y + h * g),
                t[14] = -(p * v + f * y + d * g),
                t[15] = 1,
                t
            }
            ,
            n.targetTo = function(t, e, n, r) {
                var i = e[0]
                  , o = e[1]
                  , s = e[2]
                  , a = r[0]
                  , u = r[1]
                  , l = r[2]
                  , c = i - n[0]
                  , h = o - n[1]
                  , p = s - n[2]
                  , f = c * c + h * h + p * p;
                f > 0 && (f = 1 / Math.sqrt(f),
                c *= f,
                h *= f,
                p *= f);
                var d = u * p - l * h
                  , m = l * c - a * p
                  , v = a * h - u * c;
                (f = d * d + m * m + v * v) > 0 && (f = 1 / Math.sqrt(f),
                d *= f,
                m *= f,
                v *= f);
                return t[0] = d,
                t[1] = m,
                t[2] = v,
                t[3] = 0,
                t[4] = h * v - p * m,
                t[5] = p * d - c * v,
                t[6] = c * m - h * d,
                t[7] = 0,
                t[8] = c,
                t[9] = h,
                t[10] = p,
                t[11] = 0,
                t[12] = i,
                t[13] = o,
                t[14] = s,
                t[15] = 1,
                t
            }
            ,
            n.str = function(t) {
                return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")"
            }
            ,
            n.frob = function(t) {
                return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
            }
            ,
            n.add = function(t, e, n) {
                return t[0] = e[0] + n[0],
                t[1] = e[1] + n[1],
                t[2] = e[2] + n[2],
                t[3] = e[3] + n[3],
                t[4] = e[4] + n[4],
                t[5] = e[5] + n[5],
                t[6] = e[6] + n[6],
                t[7] = e[7] + n[7],
                t[8] = e[8] + n[8],
                t[9] = e[9] + n[9],
                t[10] = e[10] + n[10],
                t[11] = e[11] + n[11],
                t[12] = e[12] + n[12],
                t[13] = e[13] + n[13],
                t[14] = e[14] + n[14],
                t[15] = e[15] + n[15],
                t
            }
            ,
            n.subtract = c,
            n.multiplyScalar = function(t, e, n) {
                return t[0] = e[0] * n,
                t[1] = e[1] * n,
                t[2] = e[2] * n,
                t[3] = e[3] * n,
                t[4] = e[4] * n,
                t[5] = e[5] * n,
                t[6] = e[6] * n,
                t[7] = e[7] * n,
                t[8] = e[8] * n,
                t[9] = e[9] * n,
                t[10] = e[10] * n,
                t[11] = e[11] * n,
                t[12] = e[12] * n,
                t[13] = e[13] * n,
                t[14] = e[14] * n,
                t[15] = e[15] * n,
                t
            }
            ,
            n.multiplyScalarAndAdd = function(t, e, n, r) {
                return t[0] = e[0] + n[0] * r,
                t[1] = e[1] + n[1] * r,
                t[2] = e[2] + n[2] * r,
                t[3] = e[3] + n[3] * r,
                t[4] = e[4] + n[4] * r,
                t[5] = e[5] + n[5] * r,
                t[6] = e[6] + n[6] * r,
                t[7] = e[7] + n[7] * r,
                t[8] = e[8] + n[8] * r,
                t[9] = e[9] + n[9] * r,
                t[10] = e[10] + n[10] * r,
                t[11] = e[11] + n[11] * r,
                t[12] = e[12] + n[12] * r,
                t[13] = e[13] + n[13] * r,
                t[14] = e[14] + n[14] * r,
                t[15] = e[15] + n[15] * r,
                t
            }
            ,
            n.exactEquals = function(t, e) {
                return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8] && t[9] === e[9] && t[10] === e[10] && t[11] === e[11] && t[12] === e[12] && t[13] === e[13] && t[14] === e[14] && t[15] === e[15]
            }
            ,
            n.equals = function(t, e) {
                var n = t[0]
                  , r = t[1]
                  , o = t[2]
                  , s = t[3]
                  , a = t[4]
                  , u = t[5]
                  , l = t[6]
                  , c = t[7]
                  , h = t[8]
                  , p = t[9]
                  , f = t[10]
                  , d = t[11]
                  , m = t[12]
                  , v = t[13]
                  , y = t[14]
                  , g = t[15]
                  , _ = e[0]
                  , b = e[1]
                  , w = e[2]
                  , x = e[3]
                  , E = e[4]
                  , M = e[5]
                  , S = e[6]
                  , T = e[7]
                  , C = e[8]
                  , O = e[9]
                  , P = e[10]
                  , L = e[11]
                  , A = e[12]
                  , k = e[13]
                  , D = e[14]
                  , R = e[15];
                return Math.abs(n - _) <= i.EPSILON * Math.max(1, Math.abs(n), Math.abs(_)) && Math.abs(r - b) <= i.EPSILON * Math.max(1, Math.abs(r), Math.abs(b)) && Math.abs(o - w) <= i.EPSILON * Math.max(1, Math.abs(o), Math.abs(w)) && Math.abs(s - x) <= i.EPSILON * Math.max(1, Math.abs(s), Math.abs(x)) && Math.abs(a - E) <= i.EPSILON * Math.max(1, Math.abs(a), Math.abs(E)) && Math.abs(u - M) <= i.EPSILON * Math.max(1, Math.abs(u), Math.abs(M)) && Math.abs(l - S) <= i.EPSILON * Math.max(1, Math.abs(l), Math.abs(S)) && Math.abs(c - T) <= i.EPSILON * Math.max(1, Math.abs(c), Math.abs(T)) && Math.abs(h - C) <= i.EPSILON * Math.max(1, Math.abs(h), Math.abs(C)) && Math.abs(p - O) <= i.EPSILON * Math.max(1, Math.abs(p), Math.abs(O)) && Math.abs(f - P) <= i.EPSILON * Math.max(1, Math.abs(f), Math.abs(P)) && Math.abs(d - L) <= i.EPSILON * Math.max(1, Math.abs(d), Math.abs(L)) && Math.abs(m - A) <= i.EPSILON * Math.max(1, Math.abs(m), Math.abs(A)) && Math.abs(v - k) <= i.EPSILON * Math.max(1, Math.abs(v), Math.abs(k)) && Math.abs(y - D) <= i.EPSILON * Math.max(1, Math.abs(y), Math.abs(D)) && Math.abs(g - R) <= i.EPSILON * Math.max(1, Math.abs(g), Math.abs(R))
            }
            ,
            n.sub = n.mul = void 0;
            var i = function(t) {
                if (t && t.__esModule)
                    return t;
                if (null === t || "object" !== r(t) && "function" != typeof t)
                    return {
                        default: t
                    };
                var e = o();
                if (e && e.has(t))
                    return e.get(t);
                var n = {}
                  , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var s in t)
                    if (Object.prototype.hasOwnProperty.call(t, s)) {
                        var a = i ? Object.getOwnPropertyDescriptor(t, s) : null;
                        a && (a.get || a.set) ? Object.defineProperty(n, s, a) : n[s] = t[s]
                    }
                n.default = t,
                e && e.set(t, n);
                return n
            }(t("./common.js"));
            function o() {
                if ("function" != typeof WeakMap)
                    return null;
                var t = new WeakMap;
                return o = function() {
                    return t
                }
                ,
                t
            }
            function s(t) {
                return t[0] = 1,
                t[1] = 0,
                t[2] = 0,
                t[3] = 0,
                t[4] = 0,
                t[5] = 1,
                t[6] = 0,
                t[7] = 0,
                t[8] = 0,
                t[9] = 0,
                t[10] = 1,
                t[11] = 0,
                t[12] = 0,
                t[13] = 0,
                t[14] = 0,
                t[15] = 1,
                t
            }
            function a(t, e, n) {
                var r = e[0]
                  , i = e[1]
                  , o = e[2]
                  , s = e[3]
                  , a = e[4]
                  , u = e[5]
                  , l = e[6]
                  , c = e[7]
                  , h = e[8]
                  , p = e[9]
                  , f = e[10]
                  , d = e[11]
                  , m = e[12]
                  , v = e[13]
                  , y = e[14]
                  , g = e[15]
                  , _ = n[0]
                  , b = n[1]
                  , w = n[2]
                  , x = n[3];
                return t[0] = _ * r + b * a + w * h + x * m,
                t[1] = _ * i + b * u + w * p + x * v,
                t[2] = _ * o + b * l + w * f + x * y,
                t[3] = _ * s + b * c + w * d + x * g,
                _ = n[4],
                b = n[5],
                w = n[6],
                x = n[7],
                t[4] = _ * r + b * a + w * h + x * m,
                t[5] = _ * i + b * u + w * p + x * v,
                t[6] = _ * o + b * l + w * f + x * y,
                t[7] = _ * s + b * c + w * d + x * g,
                _ = n[8],
                b = n[9],
                w = n[10],
                x = n[11],
                t[8] = _ * r + b * a + w * h + x * m,
                t[9] = _ * i + b * u + w * p + x * v,
                t[10] = _ * o + b * l + w * f + x * y,
                t[11] = _ * s + b * c + w * d + x * g,
                _ = n[12],
                b = n[13],
                w = n[14],
                x = n[15],
                t[12] = _ * r + b * a + w * h + x * m,
                t[13] = _ * i + b * u + w * p + x * v,
                t[14] = _ * o + b * l + w * f + x * y,
                t[15] = _ * s + b * c + w * d + x * g,
                t
            }
            function u(t, e, n) {
                var r = e[0]
                  , i = e[1]
                  , o = e[2]
                  , s = e[3]
                  , a = r + r
                  , u = i + i
                  , l = o + o
                  , c = r * a
                  , h = r * u
                  , p = r * l
                  , f = i * u
                  , d = i * l
                  , m = o * l
                  , v = s * a
                  , y = s * u
                  , g = s * l;
                return t[0] = 1 - (f + m),
                t[1] = h + g,
                t[2] = p - y,
                t[3] = 0,
                t[4] = h - g,
                t[5] = 1 - (c + m),
                t[6] = d + v,
                t[7] = 0,
                t[8] = p + y,
                t[9] = d - v,
                t[10] = 1 - (c + f),
                t[11] = 0,
                t[12] = n[0],
                t[13] = n[1],
                t[14] = n[2],
                t[15] = 1,
                t
            }
            function l(t, e) {
                var n = e[0]
                  , r = e[1]
                  , i = e[2]
                  , o = e[4]
                  , s = e[5]
                  , a = e[6]
                  , u = e[8]
                  , l = e[9]
                  , c = e[10];
                return t[0] = Math.hypot(n, r, i),
                t[1] = Math.hypot(o, s, a),
                t[2] = Math.hypot(u, l, c),
                t
            }
            function c(t, e, n) {
                return t[0] = e[0] - n[0],
                t[1] = e[1] - n[1],
                t[2] = e[2] - n[2],
                t[3] = e[3] - n[3],
                t[4] = e[4] - n[4],
                t[5] = e[5] - n[5],
                t[6] = e[6] - n[6],
                t[7] = e[7] - n[7],
                t[8] = e[8] - n[8],
                t[9] = e[9] - n[9],
                t[10] = e[10] - n[10],
                t[11] = e[11] - n[11],
                t[12] = e[12] - n[12],
                t[13] = e[13] - n[13],
                t[14] = e[14] - n[14],
                t[15] = e[15] - n[15],
                t
            }
            var h = a;
            n.mul = h;
            var p = c;
            n.sub = p
        }
        , {
            "./common.js": 4
        }],
        10: [function(t, e, n) {
            "use strict";
            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.create = c,
            n.identity = function(t) {
                return t[0] = 0,
                t[1] = 0,
                t[2] = 0,
                t[3] = 1,
                t
            }
            ,
            n.setAxisAngle = h,
            n.getAxisAngle = function(t, e) {
                var n = 2 * Math.acos(e[3])
                  , r = Math.sin(n / 2);
                r > i.EPSILON ? (t[0] = e[0] / r,
                t[1] = e[1] / r,
                t[2] = e[2] / r) : (t[0] = 1,
                t[1] = 0,
                t[2] = 0);
                return n
            }
            ,
            n.getAngle = function(t, e) {
                var n = M(t, e);
                return Math.acos(2 * n * n - 1)
            }
            ,
            n.multiply = p,
            n.rotateX = function(t, e, n) {
                n *= .5;
                var r = e[0]
                  , i = e[1]
                  , o = e[2]
                  , s = e[3]
                  , a = Math.sin(n)
                  , u = Math.cos(n);
                return t[0] = r * u + s * a,
                t[1] = i * u + o * a,
                t[2] = o * u - i * a,
                t[3] = s * u - r * a,
                t
            }
            ,
            n.rotateY = function(t, e, n) {
                n *= .5;
                var r = e[0]
                  , i = e[1]
                  , o = e[2]
                  , s = e[3]
                  , a = Math.sin(n)
                  , u = Math.cos(n);
                return t[0] = r * u - o * a,
                t[1] = i * u + s * a,
                t[2] = o * u + r * a,
                t[3] = s * u - i * a,
                t
            }
            ,
            n.rotateZ = function(t, e, n) {
                n *= .5;
                var r = e[0]
                  , i = e[1]
                  , o = e[2]
                  , s = e[3]
                  , a = Math.sin(n)
                  , u = Math.cos(n);
                return t[0] = r * u + i * a,
                t[1] = i * u - r * a,
                t[2] = o * u + s * a,
                t[3] = s * u - o * a,
                t
            }
            ,
            n.calculateW = function(t, e) {
                var n = e[0]
                  , r = e[1]
                  , i = e[2];
                return t[0] = n,
                t[1] = r,
                t[2] = i,
                t[3] = Math.sqrt(Math.abs(1 - n * n - r * r - i * i)),
                t
            }
            ,
            n.exp = f,
            n.ln = d,
            n.pow = function(t, e, n) {
                return d(t, e),
                E(t, t, n),
                f(t, t),
                t
            }
            ,
            n.slerp = m,
            n.random = function(t) {
                var e = i.RANDOM()
                  , n = i.RANDOM()
                  , r = i.RANDOM()
                  , o = Math.sqrt(1 - e)
                  , s = Math.sqrt(e);
                return t[0] = o * Math.sin(2 * Math.PI * n),
                t[1] = o * Math.cos(2 * Math.PI * n),
                t[2] = s * Math.sin(2 * Math.PI * r),
                t[3] = s * Math.cos(2 * Math.PI * r),
                t
            }
            ,
            n.invert = function(t, e) {
                var n = e[0]
                  , r = e[1]
                  , i = e[2]
                  , o = e[3]
                  , s = n * n + r * r + i * i + o * o
                  , a = s ? 1 / s : 0;
                return t[0] = -n * a,
                t[1] = -r * a,
                t[2] = -i * a,
                t[3] = o * a,
                t
            }
            ,
            n.conjugate = function(t, e) {
                return t[0] = -e[0],
                t[1] = -e[1],
                t[2] = -e[2],
                t[3] = e[3],
                t
            }
            ,
            n.fromMat3 = v,
            n.fromEuler = function(t, e, n, r) {
                var i = .5 * Math.PI / 180;
                e *= i,
                n *= i,
                r *= i;
                var o = Math.sin(e)
                  , s = Math.cos(e)
                  , a = Math.sin(n)
                  , u = Math.cos(n)
                  , l = Math.sin(r)
                  , c = Math.cos(r);
                return t[0] = o * u * c - s * a * l,
                t[1] = s * a * c + o * u * l,
                t[2] = s * u * l - o * a * c,
                t[3] = s * u * c + o * a * l,
                t
            }
            ,
            n.str = function(t) {
                return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
            }
            ,
            n.setAxes = n.sqlerp = n.rotationTo = n.equals = n.exactEquals = n.normalize = n.sqrLen = n.squaredLength = n.len = n.length = n.lerp = n.dot = n.scale = n.mul = n.add = n.set = n.copy = n.fromValues = n.clone = void 0;
            var i = l(t("./common.js"))
              , o = l(t("./mat3.js"))
              , s = l(t("./vec3.js"))
              , a = l(t("./vec4.js"));
            function u() {
                if ("function" != typeof WeakMap)
                    return null;
                var t = new WeakMap;
                return u = function() {
                    return t
                }
                ,
                t
            }
            function l(t) {
                if (t && t.__esModule)
                    return t;
                if (null === t || "object" !== r(t) && "function" != typeof t)
                    return {
                        default: t
                    };
                var e = u();
                if (e && e.has(t))
                    return e.get(t);
                var n = {}
                  , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in t)
                    if (Object.prototype.hasOwnProperty.call(t, o)) {
                        var s = i ? Object.getOwnPropertyDescriptor(t, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : n[o] = t[o]
                    }
                return n.default = t,
                e && e.set(t, n),
                n
            }
            function c() {
                var t = new i.ARRAY_TYPE(4);
                return i.ARRAY_TYPE != Float32Array && (t[0] = 0,
                t[1] = 0,
                t[2] = 0),
                t[3] = 1,
                t
            }
            function h(t, e, n) {
                n *= .5;
                var r = Math.sin(n);
                return t[0] = r * e[0],
                t[1] = r * e[1],
                t[2] = r * e[2],
                t[3] = Math.cos(n),
                t
            }
            function p(t, e, n) {
                var r = e[0]
                  , i = e[1]
                  , o = e[2]
                  , s = e[3]
                  , a = n[0]
                  , u = n[1]
                  , l = n[2]
                  , c = n[3];
                return t[0] = r * c + s * a + i * l - o * u,
                t[1] = i * c + s * u + o * a - r * l,
                t[2] = o * c + s * l + r * u - i * a,
                t[3] = s * c - r * a - i * u - o * l,
                t
            }
            function f(t, e) {
                var n = e[0]
                  , r = e[1]
                  , i = e[2]
                  , o = e[3]
                  , s = Math.sqrt(n * n + r * r + i * i)
                  , a = Math.exp(o)
                  , u = s > 0 ? a * Math.sin(s) / s : 0;
                return t[0] = n * u,
                t[1] = r * u,
                t[2] = i * u,
                t[3] = a * Math.cos(s),
                t
            }
            function d(t, e) {
                var n = e[0]
                  , r = e[1]
                  , i = e[2]
                  , o = e[3]
                  , s = Math.sqrt(n * n + r * r + i * i)
                  , a = s > 0 ? Math.atan2(s, o) / s : 0;
                return t[0] = n * a,
                t[1] = r * a,
                t[2] = i * a,
                t[3] = .5 * Math.log(n * n + r * r + i * i + o * o),
                t
            }
            function m(t, e, n, r) {
                var o, s, a, u, l, c = e[0], h = e[1], p = e[2], f = e[3], d = n[0], m = n[1], v = n[2], y = n[3];
                return (s = c * d + h * m + p * v + f * y) < 0 && (s = -s,
                d = -d,
                m = -m,
                v = -v,
                y = -y),
                1 - s > i.EPSILON ? (o = Math.acos(s),
                a = Math.sin(o),
                u = Math.sin((1 - r) * o) / a,
                l = Math.sin(r * o) / a) : (u = 1 - r,
                l = r),
                t[0] = u * c + l * d,
                t[1] = u * h + l * m,
                t[2] = u * p + l * v,
                t[3] = u * f + l * y,
                t
            }
            function v(t, e) {
                var n, r = e[0] + e[4] + e[8];
                if (r > 0)
                    n = Math.sqrt(r + 1),
                    t[3] = .5 * n,
                    n = .5 / n,
                    t[0] = (e[5] - e[7]) * n,
                    t[1] = (e[6] - e[2]) * n,
                    t[2] = (e[1] - e[3]) * n;
                else {
                    var i = 0;
                    e[4] > e[0] && (i = 1),
                    e[8] > e[3 * i + i] && (i = 2);
                    var o = (i + 1) % 3
                      , s = (i + 2) % 3;
                    n = Math.sqrt(e[3 * i + i] - e[3 * o + o] - e[3 * s + s] + 1),
                    t[i] = .5 * n,
                    n = .5 / n,
                    t[3] = (e[3 * o + s] - e[3 * s + o]) * n,
                    t[o] = (e[3 * o + i] + e[3 * i + o]) * n,
                    t[s] = (e[3 * s + i] + e[3 * i + s]) * n
                }
                return t
            }
            var y = a.clone;
            n.clone = y;
            var g = a.fromValues;
            n.fromValues = g;
            var _ = a.copy;
            n.copy = _;
            var b = a.set;
            n.set = b;
            var w = a.add;
            n.add = w;
            var x = p;
            n.mul = x;
            var E = a.scale;
            n.scale = E;
            var M = a.dot;
            n.dot = M;
            var S = a.lerp;
            n.lerp = S;
            var T = a.length;
            n.length = T;
            var C = T;
            n.len = C;
            var O = a.squaredLength;
            n.squaredLength = O;
            var P = O;
            n.sqrLen = P;
            var L = a.normalize;
            n.normalize = L;
            var A = a.exactEquals;
            n.exactEquals = A;
            var k = a.equals;
            n.equals = k;
            var D, R, I, N = (D = s.create(),
            R = s.fromValues(1, 0, 0),
            I = s.fromValues(0, 1, 0),
            function(t, e, n) {
                var r = s.dot(e, n);
                return r < -.999999 ? (s.cross(D, R, e),
                s.len(D) < 1e-6 && s.cross(D, I, e),
                s.normalize(D, D),
                h(t, D, Math.PI),
                t) : r > .999999 ? (t[0] = 0,
                t[1] = 0,
                t[2] = 0,
                t[3] = 1,
                t) : (s.cross(D, e, n),
                t[0] = D[0],
                t[1] = D[1],
                t[2] = D[2],
                t[3] = 1 + r,
                L(t, t))
            }
            );
            n.rotationTo = N;
            var j, z, H = (j = c(),
            z = c(),
            function(t, e, n, r, i, o) {
                return m(j, e, i, o),
                m(z, n, r, o),
                m(t, j, z, 2 * o * (1 - o)),
                t
            }
            );
            n.sqlerp = H;
            var F, B = (F = o.create(),
            function(t, e, n, r) {
                return F[0] = n[0],
                F[3] = n[1],
                F[6] = n[2],
                F[1] = r[0],
                F[4] = r[1],
                F[7] = r[2],
                F[2] = -e[0],
                F[5] = -e[1],
                F[8] = -e[2],
                L(t, v(t, F))
            }
            );
            n.setAxes = B
        }
        , {
            "./common.js": 4,
            "./mat3.js": 8,
            "./vec3.js": 13,
            "./vec4.js": 14
        }],
        11: [function(t, e, n) {
            "use strict";
            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.create = function() {
                var t = new i.ARRAY_TYPE(8);
                i.ARRAY_TYPE != Float32Array && (t[0] = 0,
                t[1] = 0,
                t[2] = 0,
                t[4] = 0,
                t[5] = 0,
                t[6] = 0,
                t[7] = 0);
                return t[3] = 1,
                t
            }
            ,
            n.clone = function(t) {
                var e = new i.ARRAY_TYPE(8);
                return e[0] = t[0],
                e[1] = t[1],
                e[2] = t[2],
                e[3] = t[3],
                e[4] = t[4],
                e[5] = t[5],
                e[6] = t[6],
                e[7] = t[7],
                e
            }
            ,
            n.fromValues = function(t, e, n, r, o, s, a, u) {
                var l = new i.ARRAY_TYPE(8);
                return l[0] = t,
                l[1] = e,
                l[2] = n,
                l[3] = r,
                l[4] = o,
                l[5] = s,
                l[6] = a,
                l[7] = u,
                l
            }
            ,
            n.fromRotationTranslationValues = function(t, e, n, r, o, s, a) {
                var u = new i.ARRAY_TYPE(8);
                u[0] = t,
                u[1] = e,
                u[2] = n,
                u[3] = r;
                var l = .5 * o
                  , c = .5 * s
                  , h = .5 * a;
                return u[4] = l * r + c * n - h * e,
                u[5] = c * r + h * t - l * n,
                u[6] = h * r + l * e - c * t,
                u[7] = -l * t - c * e - h * n,
                u
            }
            ,
            n.fromRotationTranslation = l,
            n.fromTranslation = function(t, e) {
                return t[0] = 0,
                t[1] = 0,
                t[2] = 0,
                t[3] = 1,
                t[4] = .5 * e[0],
                t[5] = .5 * e[1],
                t[6] = .5 * e[2],
                t[7] = 0,
                t
            }
            ,
            n.fromRotation = function(t, e) {
                return t[0] = e[0],
                t[1] = e[1],
                t[2] = e[2],
                t[3] = e[3],
                t[4] = 0,
                t[5] = 0,
                t[6] = 0,
                t[7] = 0,
                t
            }
            ,
            n.fromMat4 = function(t, e) {
                var n = o.create();
                s.getRotation(n, e);
                var r = new i.ARRAY_TYPE(3);
                return s.getTranslation(r, e),
                l(t, n, r),
                t
            }
            ,
            n.copy = c,
            n.identity = function(t) {
                return t[0] = 0,
                t[1] = 0,
                t[2] = 0,
                t[3] = 1,
                t[4] = 0,
                t[5] = 0,
                t[6] = 0,
                t[7] = 0,
                t
            }
            ,
            n.set = function(t, e, n, r, i, o, s, a, u) {
                return t[0] = e,
                t[1] = n,
                t[2] = r,
                t[3] = i,
                t[4] = o,
                t[5] = s,
                t[6] = a,
                t[7] = u,
                t
            }
            ,
            n.getDual = function(t, e) {
                return t[0] = e[4],
                t[1] = e[5],
                t[2] = e[6],
                t[3] = e[7],
                t
            }
            ,
            n.setDual = function(t, e) {
                return t[4] = e[0],
                t[5] = e[1],
                t[6] = e[2],
                t[7] = e[3],
                t
            }
            ,
            n.getTranslation = function(t, e) {
                var n = e[4]
                  , r = e[5]
                  , i = e[6]
                  , o = e[7]
                  , s = -e[0]
                  , a = -e[1]
                  , u = -e[2]
                  , l = e[3];
                return t[0] = 2 * (n * l + o * s + r * u - i * a),
                t[1] = 2 * (r * l + o * a + i * s - n * u),
                t[2] = 2 * (i * l + o * u + n * a - r * s),
                t
            }
            ,
            n.translate = function(t, e, n) {
                var r = e[0]
                  , i = e[1]
                  , o = e[2]
                  , s = e[3]
                  , a = .5 * n[0]
                  , u = .5 * n[1]
                  , l = .5 * n[2]
                  , c = e[4]
                  , h = e[5]
                  , p = e[6]
                  , f = e[7];
                return t[0] = r,
                t[1] = i,
                t[2] = o,
                t[3] = s,
                t[4] = s * a + i * l - o * u + c,
                t[5] = s * u + o * a - r * l + h,
                t[6] = s * l + r * u - i * a + p,
                t[7] = -r * a - i * u - o * l + f,
                t
            }
            ,
            n.rotateX = function(t, e, n) {
                var r = -e[0]
                  , i = -e[1]
                  , s = -e[2]
                  , a = e[3]
                  , u = e[4]
                  , l = e[5]
                  , c = e[6]
                  , h = e[7]
                  , p = u * a + h * r + l * s - c * i
                  , f = l * a + h * i + c * r - u * s
                  , d = c * a + h * s + u * i - l * r
                  , m = h * a - u * r - l * i - c * s;
                return o.rotateX(t, e, n),
                r = t[0],
                i = t[1],
                s = t[2],
                a = t[3],
                t[4] = p * a + m * r + f * s - d * i,
                t[5] = f * a + m * i + d * r - p * s,
                t[6] = d * a + m * s + p * i - f * r,
                t[7] = m * a - p * r - f * i - d * s,
                t
            }
            ,
            n.rotateY = function(t, e, n) {
                var r = -e[0]
                  , i = -e[1]
                  , s = -e[2]
                  , a = e[3]
                  , u = e[4]
                  , l = e[5]
                  , c = e[6]
                  , h = e[7]
                  , p = u * a + h * r + l * s - c * i
                  , f = l * a + h * i + c * r - u * s
                  , d = c * a + h * s + u * i - l * r
                  , m = h * a - u * r - l * i - c * s;
                return o.rotateY(t, e, n),
                r = t[0],
                i = t[1],
                s = t[2],
                a = t[3],
                t[4] = p * a + m * r + f * s - d * i,
                t[5] = f * a + m * i + d * r - p * s,
                t[6] = d * a + m * s + p * i - f * r,
                t[7] = m * a - p * r - f * i - d * s,
                t
            }
            ,
            n.rotateZ = function(t, e, n) {
                var r = -e[0]
                  , i = -e[1]
                  , s = -e[2]
                  , a = e[3]
                  , u = e[4]
                  , l = e[5]
                  , c = e[6]
                  , h = e[7]
                  , p = u * a + h * r + l * s - c * i
                  , f = l * a + h * i + c * r - u * s
                  , d = c * a + h * s + u * i - l * r
                  , m = h * a - u * r - l * i - c * s;
                return o.rotateZ(t, e, n),
                r = t[0],
                i = t[1],
                s = t[2],
                a = t[3],
                t[4] = p * a + m * r + f * s - d * i,
                t[5] = f * a + m * i + d * r - p * s,
                t[6] = d * a + m * s + p * i - f * r,
                t[7] = m * a - p * r - f * i - d * s,
                t
            }
            ,
            n.rotateByQuatAppend = function(t, e, n) {
                var r = n[0]
                  , i = n[1]
                  , o = n[2]
                  , s = n[3]
                  , a = e[0]
                  , u = e[1]
                  , l = e[2]
                  , c = e[3];
                return t[0] = a * s + c * r + u * o - l * i,
                t[1] = u * s + c * i + l * r - a * o,
                t[2] = l * s + c * o + a * i - u * r,
                t[3] = c * s - a * r - u * i - l * o,
                a = e[4],
                u = e[5],
                l = e[6],
                c = e[7],
                t[4] = a * s + c * r + u * o - l * i,
                t[5] = u * s + c * i + l * r - a * o,
                t[6] = l * s + c * o + a * i - u * r,
                t[7] = c * s - a * r - u * i - l * o,
                t
            }
            ,
            n.rotateByQuatPrepend = function(t, e, n) {
                var r = e[0]
                  , i = e[1]
                  , o = e[2]
                  , s = e[3]
                  , a = n[0]
                  , u = n[1]
                  , l = n[2]
                  , c = n[3];
                return t[0] = r * c + s * a + i * l - o * u,
                t[1] = i * c + s * u + o * a - r * l,
                t[2] = o * c + s * l + r * u - i * a,
                t[3] = s * c - r * a - i * u - o * l,
                a = n[4],
                u = n[5],
                l = n[6],
                c = n[7],
                t[4] = r * c + s * a + i * l - o * u,
                t[5] = i * c + s * u + o * a - r * l,
                t[6] = o * c + s * l + r * u - i * a,
                t[7] = s * c - r * a - i * u - o * l,
                t
            }
            ,
            n.rotateAroundAxis = function(t, e, n, r) {
                if (Math.abs(r) < i.EPSILON)
                    return c(t, e);
                var o = Math.hypot(n[0], n[1], n[2]);
                r *= .5;
                var s = Math.sin(r)
                  , a = s * n[0] / o
                  , u = s * n[1] / o
                  , l = s * n[2] / o
                  , h = Math.cos(r)
                  , p = e[0]
                  , f = e[1]
                  , d = e[2]
                  , m = e[3];
                t[0] = p * h + m * a + f * l - d * u,
                t[1] = f * h + m * u + d * a - p * l,
                t[2] = d * h + m * l + p * u - f * a,
                t[3] = m * h - p * a - f * u - d * l;
                var v = e[4]
                  , y = e[5]
                  , g = e[6]
                  , _ = e[7];
                return t[4] = v * h + _ * a + y * l - g * u,
                t[5] = y * h + _ * u + g * a - v * l,
                t[6] = g * h + _ * l + v * u - y * a,
                t[7] = _ * h - v * a - y * u - g * l,
                t
            }
            ,
            n.add = function(t, e, n) {
                return t[0] = e[0] + n[0],
                t[1] = e[1] + n[1],
                t[2] = e[2] + n[2],
                t[3] = e[3] + n[3],
                t[4] = e[4] + n[4],
                t[5] = e[5] + n[5],
                t[6] = e[6] + n[6],
                t[7] = e[7] + n[7],
                t
            }
            ,
            n.multiply = f,
            n.scale = function(t, e, n) {
                return t[0] = e[0] * n,
                t[1] = e[1] * n,
                t[2] = e[2] * n,
                t[3] = e[3] * n,
                t[4] = e[4] * n,
                t[5] = e[5] * n,
                t[6] = e[6] * n,
                t[7] = e[7] * n,
                t
            }
            ,
            n.lerp = function(t, e, n, r) {
                var i = 1 - r;
                m(e, n) < 0 && (r = -r);
                return t[0] = e[0] * i + n[0] * r,
                t[1] = e[1] * i + n[1] * r,
                t[2] = e[2] * i + n[2] * r,
                t[3] = e[3] * i + n[3] * r,
                t[4] = e[4] * i + n[4] * r,
                t[5] = e[5] * i + n[5] * r,
                t[6] = e[6] * i + n[6] * r,
                t[7] = e[7] * i + n[7] * r,
                t
            }
            ,
            n.invert = function(t, e) {
                var n = g(e);
                return t[0] = -e[0] / n,
                t[1] = -e[1] / n,
                t[2] = -e[2] / n,
                t[3] = e[3] / n,
                t[4] = -e[4] / n,
                t[5] = -e[5] / n,
                t[6] = -e[6] / n,
                t[7] = e[7] / n,
                t
            }
            ,
            n.conjugate = function(t, e) {
                return t[0] = -e[0],
                t[1] = -e[1],
                t[2] = -e[2],
                t[3] = e[3],
                t[4] = -e[4],
                t[5] = -e[5],
                t[6] = -e[6],
                t[7] = e[7],
                t
            }
            ,
            n.normalize = function(t, e) {
                var n = g(e);
                if (n > 0) {
                    n = Math.sqrt(n);
                    var r = e[0] / n
                      , i = e[1] / n
                      , o = e[2] / n
                      , s = e[3] / n
                      , a = e[4]
                      , u = e[5]
                      , l = e[6]
                      , c = e[7]
                      , h = r * a + i * u + o * l + s * c;
                    t[0] = r,
                    t[1] = i,
                    t[2] = o,
                    t[3] = s,
                    t[4] = (a - r * h) / n,
                    t[5] = (u - i * h) / n,
                    t[6] = (l - o * h) / n,
                    t[7] = (c - s * h) / n
                }
                return t
            }
            ,
            n.str = function(t) {
                return "quat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ")"
            }
            ,
            n.exactEquals = function(t, e) {
                return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7]
            }
            ,
            n.equals = function(t, e) {
                var n = t[0]
                  , r = t[1]
                  , o = t[2]
                  , s = t[3]
                  , a = t[4]
                  , u = t[5]
                  , l = t[6]
                  , c = t[7]
                  , h = e[0]
                  , p = e[1]
                  , f = e[2]
                  , d = e[3]
                  , m = e[4]
                  , v = e[5]
                  , y = e[6]
                  , g = e[7];
                return Math.abs(n - h) <= i.EPSILON * Math.max(1, Math.abs(n), Math.abs(h)) && Math.abs(r - p) <= i.EPSILON * Math.max(1, Math.abs(r), Math.abs(p)) && Math.abs(o - f) <= i.EPSILON * Math.max(1, Math.abs(o), Math.abs(f)) && Math.abs(s - d) <= i.EPSILON * Math.max(1, Math.abs(s), Math.abs(d)) && Math.abs(a - m) <= i.EPSILON * Math.max(1, Math.abs(a), Math.abs(m)) && Math.abs(u - v) <= i.EPSILON * Math.max(1, Math.abs(u), Math.abs(v)) && Math.abs(l - y) <= i.EPSILON * Math.max(1, Math.abs(l), Math.abs(y)) && Math.abs(c - g) <= i.EPSILON * Math.max(1, Math.abs(c), Math.abs(g))
            }
            ,
            n.sqrLen = n.squaredLength = n.len = n.length = n.dot = n.mul = n.setReal = n.getReal = void 0;
            var i = u(t("./common.js"))
              , o = u(t("./quat.js"))
              , s = u(t("./mat4.js"));
            function a() {
                if ("function" != typeof WeakMap)
                    return null;
                var t = new WeakMap;
                return a = function() {
                    return t
                }
                ,
                t
            }
            function u(t) {
                if (t && t.__esModule)
                    return t;
                if (null === t || "object" !== r(t) && "function" != typeof t)
                    return {
                        default: t
                    };
                var e = a();
                if (e && e.has(t))
                    return e.get(t);
                var n = {}
                  , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in t)
                    if (Object.prototype.hasOwnProperty.call(t, o)) {
                        var s = i ? Object.getOwnPropertyDescriptor(t, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : n[o] = t[o]
                    }
                return n.default = t,
                e && e.set(t, n),
                n
            }
            function l(t, e, n) {
                var r = .5 * n[0]
                  , i = .5 * n[1]
                  , o = .5 * n[2]
                  , s = e[0]
                  , a = e[1]
                  , u = e[2]
                  , l = e[3];
                return t[0] = s,
                t[1] = a,
                t[2] = u,
                t[3] = l,
                t[4] = r * l + i * u - o * a,
                t[5] = i * l + o * s - r * u,
                t[6] = o * l + r * a - i * s,
                t[7] = -r * s - i * a - o * u,
                t
            }
            function c(t, e) {
                return t[0] = e[0],
                t[1] = e[1],
                t[2] = e[2],
                t[3] = e[3],
                t[4] = e[4],
                t[5] = e[5],
                t[6] = e[6],
                t[7] = e[7],
                t
            }
            var h = o.copy;
            n.getReal = h;
            var p = o.copy;
            function f(t, e, n) {
                var r = e[0]
                  , i = e[1]
                  , o = e[2]
                  , s = e[3]
                  , a = n[4]
                  , u = n[5]
                  , l = n[6]
                  , c = n[7]
                  , h = e[4]
                  , p = e[5]
                  , f = e[6]
                  , d = e[7]
                  , m = n[0]
                  , v = n[1]
                  , y = n[2]
                  , g = n[3];
                return t[0] = r * g + s * m + i * y - o * v,
                t[1] = i * g + s * v + o * m - r * y,
                t[2] = o * g + s * y + r * v - i * m,
                t[3] = s * g - r * m - i * v - o * y,
                t[4] = r * c + s * a + i * l - o * u + h * g + d * m + p * y - f * v,
                t[5] = i * c + s * u + o * a - r * l + p * g + d * v + f * m - h * y,
                t[6] = o * c + s * l + r * u - i * a + f * g + d * y + h * v - p * m,
                t[7] = s * c - r * a - i * u - o * l + d * g - h * m - p * v - f * y,
                t
            }
            n.setReal = p;
            var d = f;
            n.mul = d;
            var m = o.dot;
            n.dot = m;
            var v = o.length;
            n.length = v;
            var y = v;
            n.len = y;
            var g = o.squaredLength;
            n.squaredLength = g;
            var _ = g;
            n.sqrLen = _
        }
        , {
            "./common.js": 4,
            "./mat4.js": 9,
            "./quat.js": 10
        }],
        12: [function(t, e, n) {
            "use strict";
            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.create = s,
            n.clone = function(t) {
                var e = new i.ARRAY_TYPE(2);
                return e[0] = t[0],
                e[1] = t[1],
                e
            }
            ,
            n.fromValues = function(t, e) {
                var n = new i.ARRAY_TYPE(2);
                return n[0] = t,
                n[1] = e,
                n
            }
            ,
            n.copy = function(t, e) {
                return t[0] = e[0],
                t[1] = e[1],
                t
            }
            ,
            n.set = function(t, e, n) {
                return t[0] = e,
                t[1] = n,
                t
            }
            ,
            n.add = function(t, e, n) {
                return t[0] = e[0] + n[0],
                t[1] = e[1] + n[1],
                t
            }
            ,
            n.subtract = a,
            n.multiply = u,
            n.divide = l,
            n.ceil = function(t, e) {
                return t[0] = Math.ceil(e[0]),
                t[1] = Math.ceil(e[1]),
                t
            }
            ,
            n.floor = function(t, e) {
                return t[0] = Math.floor(e[0]),
                t[1] = Math.floor(e[1]),
                t
            }
            ,
            n.min = function(t, e, n) {
                return t[0] = Math.min(e[0], n[0]),
                t[1] = Math.min(e[1], n[1]),
                t
            }
            ,
            n.max = function(t, e, n) {
                return t[0] = Math.max(e[0], n[0]),
                t[1] = Math.max(e[1], n[1]),
                t
            }
            ,
            n.round = function(t, e) {
                return t[0] = Math.round(e[0]),
                t[1] = Math.round(e[1]),
                t
            }
            ,
            n.scale = function(t, e, n) {
                return t[0] = e[0] * n,
                t[1] = e[1] * n,
                t
            }
            ,
            n.scaleAndAdd = function(t, e, n, r) {
                return t[0] = e[0] + n[0] * r,
                t[1] = e[1] + n[1] * r,
                t
            }
            ,
            n.distance = c,
            n.squaredDistance = h,
            n.length = p,
            n.squaredLength = f,
            n.negate = function(t, e) {
                return t[0] = -e[0],
                t[1] = -e[1],
                t
            }
            ,
            n.inverse = function(t, e) {
                return t[0] = 1 / e[0],
                t[1] = 1 / e[1],
                t
            }
            ,
            n.normalize = function(t, e) {
                var n = e[0]
                  , r = e[1]
                  , i = n * n + r * r;
                i > 0 && (i = 1 / Math.sqrt(i));
                return t[0] = e[0] * i,
                t[1] = e[1] * i,
                t
            }
            ,
            n.dot = function(t, e) {
                return t[0] * e[0] + t[1] * e[1]
            }
            ,
            n.cross = function(t, e, n) {
                var r = e[0] * n[1] - e[1] * n[0];
                return t[0] = t[1] = 0,
                t[2] = r,
                t
            }
            ,
            n.lerp = function(t, e, n, r) {
                var i = e[0]
                  , o = e[1];
                return t[0] = i + r * (n[0] - i),
                t[1] = o + r * (n[1] - o),
                t
            }
            ,
            n.random = function(t, e) {
                e = e || 1;
                var n = 2 * i.RANDOM() * Math.PI;
                return t[0] = Math.cos(n) * e,
                t[1] = Math.sin(n) * e,
                t
            }
            ,
            n.transformMat2 = function(t, e, n) {
                var r = e[0]
                  , i = e[1];
                return t[0] = n[0] * r + n[2] * i,
                t[1] = n[1] * r + n[3] * i,
                t
            }
            ,
            n.transformMat2d = function(t, e, n) {
                var r = e[0]
                  , i = e[1];
                return t[0] = n[0] * r + n[2] * i + n[4],
                t[1] = n[1] * r + n[3] * i + n[5],
                t
            }
            ,
            n.transformMat3 = function(t, e, n) {
                var r = e[0]
                  , i = e[1];
                return t[0] = n[0] * r + n[3] * i + n[6],
                t[1] = n[1] * r + n[4] * i + n[7],
                t
            }
            ,
            n.transformMat4 = function(t, e, n) {
                var r = e[0]
                  , i = e[1];
                return t[0] = n[0] * r + n[4] * i + n[12],
                t[1] = n[1] * r + n[5] * i + n[13],
                t
            }
            ,
            n.rotate = function(t, e, n, r) {
                var i = e[0] - n[0]
                  , o = e[1] - n[1]
                  , s = Math.sin(r)
                  , a = Math.cos(r);
                return t[0] = i * a - o * s + n[0],
                t[1] = i * s + o * a + n[1],
                t
            }
            ,
            n.angle = function(t, e) {
                var n = t[0]
                  , r = t[1]
                  , i = e[0]
                  , o = e[1]
                  , s = Math.sqrt(n * n + r * r) * Math.sqrt(i * i + o * o)
                  , a = s && (n * i + r * o) / s;
                return Math.acos(Math.min(Math.max(a, -1), 1))
            }
            ,
            n.zero = function(t) {
                return t[0] = 0,
                t[1] = 0,
                t
            }
            ,
            n.str = function(t) {
                return "vec2(" + t[0] + ", " + t[1] + ")"
            }
            ,
            n.exactEquals = function(t, e) {
                return t[0] === e[0] && t[1] === e[1]
            }
            ,
            n.equals = function(t, e) {
                var n = t[0]
                  , r = t[1]
                  , o = e[0]
                  , s = e[1];
                return Math.abs(n - o) <= i.EPSILON * Math.max(1, Math.abs(n), Math.abs(o)) && Math.abs(r - s) <= i.EPSILON * Math.max(1, Math.abs(r), Math.abs(s))
            }
            ,
            n.forEach = n.sqrLen = n.sqrDist = n.dist = n.div = n.mul = n.sub = n.len = void 0;
            var i = function(t) {
                if (t && t.__esModule)
                    return t;
                if (null === t || "object" !== r(t) && "function" != typeof t)
                    return {
                        default: t
                    };
                var e = o();
                if (e && e.has(t))
                    return e.get(t);
                var n = {}
                  , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var s in t)
                    if (Object.prototype.hasOwnProperty.call(t, s)) {
                        var a = i ? Object.getOwnPropertyDescriptor(t, s) : null;
                        a && (a.get || a.set) ? Object.defineProperty(n, s, a) : n[s] = t[s]
                    }
                n.default = t,
                e && e.set(t, n);
                return n
            }(t("./common.js"));
            function o() {
                if ("function" != typeof WeakMap)
                    return null;
                var t = new WeakMap;
                return o = function() {
                    return t
                }
                ,
                t
            }
            function s() {
                var t = new i.ARRAY_TYPE(2);
                return i.ARRAY_TYPE != Float32Array && (t[0] = 0,
                t[1] = 0),
                t
            }
            function a(t, e, n) {
                return t[0] = e[0] - n[0],
                t[1] = e[1] - n[1],
                t
            }
            function u(t, e, n) {
                return t[0] = e[0] * n[0],
                t[1] = e[1] * n[1],
                t
            }
            function l(t, e, n) {
                return t[0] = e[0] / n[0],
                t[1] = e[1] / n[1],
                t
            }
            function c(t, e) {
                var n = e[0] - t[0]
                  , r = e[1] - t[1];
                return Math.hypot(n, r)
            }
            function h(t, e) {
                var n = e[0] - t[0]
                  , r = e[1] - t[1];
                return n * n + r * r
            }
            function p(t) {
                var e = t[0]
                  , n = t[1];
                return Math.hypot(e, n)
            }
            function f(t) {
                var e = t[0]
                  , n = t[1];
                return e * e + n * n
            }
            var d = p;
            n.len = d;
            var m = a;
            n.sub = m;
            var v = u;
            n.mul = v;
            var y = l;
            n.div = y;
            var g = c;
            n.dist = g;
            var _ = h;
            n.sqrDist = _;
            var b = f;
            n.sqrLen = b;
            var w, x = (w = s(),
            function(t, e, n, r, i, o) {
                var s, a;
                for (e || (e = 2),
                n || (n = 0),
                a = r ? Math.min(r * e + n, t.length) : t.length,
                s = n; s < a; s += e)
                    w[0] = t[s],
                    w[1] = t[s + 1],
                    i(w, w, o),
                    t[s] = w[0],
                    t[s + 1] = w[1];
                return t
            }
            );
            n.forEach = x
        }
        , {
            "./common.js": 4
        }],
        13: [function(t, e, n) {
            "use strict";
            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.create = s,
            n.clone = function(t) {
                var e = new i.ARRAY_TYPE(3);
                return e[0] = t[0],
                e[1] = t[1],
                e[2] = t[2],
                e
            }
            ,
            n.length = a,
            n.fromValues = function(t, e, n) {
                var r = new i.ARRAY_TYPE(3);
                return r[0] = t,
                r[1] = e,
                r[2] = n,
                r
            }
            ,
            n.copy = function(t, e) {
                return t[0] = e[0],
                t[1] = e[1],
                t[2] = e[2],
                t
            }
            ,
            n.set = function(t, e, n, r) {
                return t[0] = e,
                t[1] = n,
                t[2] = r,
                t
            }
            ,
            n.add = function(t, e, n) {
                return t[0] = e[0] + n[0],
                t[1] = e[1] + n[1],
                t[2] = e[2] + n[2],
                t
            }
            ,
            n.subtract = u,
            n.multiply = l,
            n.divide = c,
            n.ceil = function(t, e) {
                return t[0] = Math.ceil(e[0]),
                t[1] = Math.ceil(e[1]),
                t[2] = Math.ceil(e[2]),
                t
            }
            ,
            n.floor = function(t, e) {
                return t[0] = Math.floor(e[0]),
                t[1] = Math.floor(e[1]),
                t[2] = Math.floor(e[2]),
                t
            }
            ,
            n.min = function(t, e, n) {
                return t[0] = Math.min(e[0], n[0]),
                t[1] = Math.min(e[1], n[1]),
                t[2] = Math.min(e[2], n[2]),
                t
            }
            ,
            n.max = function(t, e, n) {
                return t[0] = Math.max(e[0], n[0]),
                t[1] = Math.max(e[1], n[1]),
                t[2] = Math.max(e[2], n[2]),
                t
            }
            ,
            n.round = function(t, e) {
                return t[0] = Math.round(e[0]),
                t[1] = Math.round(e[1]),
                t[2] = Math.round(e[2]),
                t
            }
            ,
            n.scale = function(t, e, n) {
                return t[0] = e[0] * n,
                t[1] = e[1] * n,
                t[2] = e[2] * n,
                t
            }
            ,
            n.scaleAndAdd = function(t, e, n, r) {
                return t[0] = e[0] + n[0] * r,
                t[1] = e[1] + n[1] * r,
                t[2] = e[2] + n[2] * r,
                t
            }
            ,
            n.distance = h,
            n.squaredDistance = p,
            n.squaredLength = f,
            n.negate = function(t, e) {
                return t[0] = -e[0],
                t[1] = -e[1],
                t[2] = -e[2],
                t
            }
            ,
            n.inverse = function(t, e) {
                return t[0] = 1 / e[0],
                t[1] = 1 / e[1],
                t[2] = 1 / e[2],
                t
            }
            ,
            n.normalize = function(t, e) {
                var n = e[0]
                  , r = e[1]
                  , i = e[2]
                  , o = n * n + r * r + i * i;
                o > 0 && (o = 1 / Math.sqrt(o));
                return t[0] = e[0] * o,
                t[1] = e[1] * o,
                t[2] = e[2] * o,
                t
            }
            ,
            n.dot = d,
            n.cross = function(t, e, n) {
                var r = e[0]
                  , i = e[1]
                  , o = e[2]
                  , s = n[0]
                  , a = n[1]
                  , u = n[2];
                return t[0] = i * u - o * a,
                t[1] = o * s - r * u,
                t[2] = r * a - i * s,
                t
            }
            ,
            n.lerp = function(t, e, n, r) {
                var i = e[0]
                  , o = e[1]
                  , s = e[2];
                return t[0] = i + r * (n[0] - i),
                t[1] = o + r * (n[1] - o),
                t[2] = s + r * (n[2] - s),
                t
            }
            ,
            n.hermite = function(t, e, n, r, i, o) {
                var s = o * o
                  , a = s * (2 * o - 3) + 1
                  , u = s * (o - 2) + o
                  , l = s * (o - 1)
                  , c = s * (3 - 2 * o);
                return t[0] = e[0] * a + n[0] * u + r[0] * l + i[0] * c,
                t[1] = e[1] * a + n[1] * u + r[1] * l + i[1] * c,
                t[2] = e[2] * a + n[2] * u + r[2] * l + i[2] * c,
                t
            }
            ,
            n.bezier = function(t, e, n, r, i, o) {
                var s = 1 - o
                  , a = s * s
                  , u = o * o
                  , l = a * s
                  , c = 3 * o * a
                  , h = 3 * u * s
                  , p = u * o;
                return t[0] = e[0] * l + n[0] * c + r[0] * h + i[0] * p,
                t[1] = e[1] * l + n[1] * c + r[1] * h + i[1] * p,
                t[2] = e[2] * l + n[2] * c + r[2] * h + i[2] * p,
                t
            }
            ,
            n.random = function(t, e) {
                e = e || 1;
                var n = 2 * i.RANDOM() * Math.PI
                  , r = 2 * i.RANDOM() - 1
                  , o = Math.sqrt(1 - r * r) * e;
                return t[0] = Math.cos(n) * o,
                t[1] = Math.sin(n) * o,
                t[2] = r * e,
                t
            }
            ,
            n.transformMat4 = function(t, e, n) {
                var r = e[0]
                  , i = e[1]
                  , o = e[2]
                  , s = n[3] * r + n[7] * i + n[11] * o + n[15];
                return s = s || 1,
                t[0] = (n[0] * r + n[4] * i + n[8] * o + n[12]) / s,
                t[1] = (n[1] * r + n[5] * i + n[9] * o + n[13]) / s,
                t[2] = (n[2] * r + n[6] * i + n[10] * o + n[14]) / s,
                t
            }
            ,
            n.transformMat3 = function(t, e, n) {
                var r = e[0]
                  , i = e[1]
                  , o = e[2];
                return t[0] = r * n[0] + i * n[3] + o * n[6],
                t[1] = r * n[1] + i * n[4] + o * n[7],
                t[2] = r * n[2] + i * n[5] + o * n[8],
                t
            }
            ,
            n.transformQuat = function(t, e, n) {
                var r = n[0]
                  , i = n[1]
                  , o = n[2]
                  , s = n[3]
                  , a = e[0]
                  , u = e[1]
                  , l = e[2]
                  , c = i * l - o * u
                  , h = o * a - r * l
                  , p = r * u - i * a
                  , f = i * p - o * h
                  , d = o * c - r * p
                  , m = r * h - i * c
                  , v = 2 * s;
                return c *= v,
                h *= v,
                p *= v,
                f *= 2,
                d *= 2,
                m *= 2,
                t[0] = a + c + f,
                t[1] = u + h + d,
                t[2] = l + p + m,
                t
            }
            ,
            n.rotateX = function(t, e, n, r) {
                var i = []
                  , o = [];
                return i[0] = e[0] - n[0],
                i[1] = e[1] - n[1],
                i[2] = e[2] - n[2],
                o[0] = i[0],
                o[1] = i[1] * Math.cos(r) - i[2] * Math.sin(r),
                o[2] = i[1] * Math.sin(r) + i[2] * Math.cos(r),
                t[0] = o[0] + n[0],
                t[1] = o[1] + n[1],
                t[2] = o[2] + n[2],
                t
            }
            ,
            n.rotateY = function(t, e, n, r) {
                var i = []
                  , o = [];
                return i[0] = e[0] - n[0],
                i[1] = e[1] - n[1],
                i[2] = e[2] - n[2],
                o[0] = i[2] * Math.sin(r) + i[0] * Math.cos(r),
                o[1] = i[1],
                o[2] = i[2] * Math.cos(r) - i[0] * Math.sin(r),
                t[0] = o[0] + n[0],
                t[1] = o[1] + n[1],
                t[2] = o[2] + n[2],
                t
            }
            ,
            n.rotateZ = function(t, e, n, r) {
                var i = []
                  , o = [];
                return i[0] = e[0] - n[0],
                i[1] = e[1] - n[1],
                i[2] = e[2] - n[2],
                o[0] = i[0] * Math.cos(r) - i[1] * Math.sin(r),
                o[1] = i[0] * Math.sin(r) + i[1] * Math.cos(r),
                o[2] = i[2],
                t[0] = o[0] + n[0],
                t[1] = o[1] + n[1],
                t[2] = o[2] + n[2],
                t
            }
            ,
            n.angle = function(t, e) {
                var n = t[0]
                  , r = t[1]
                  , i = t[2]
                  , o = e[0]
                  , s = e[1]
                  , a = e[2]
                  , u = Math.sqrt(n * n + r * r + i * i)
                  , l = Math.sqrt(o * o + s * s + a * a)
                  , c = u * l
                  , h = c && d(t, e) / c;
                return Math.acos(Math.min(Math.max(h, -1), 1))
            }
            ,
            n.zero = function(t) {
                return t[0] = 0,
                t[1] = 0,
                t[2] = 0,
                t
            }
            ,
            n.str = function(t) {
                return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
            }
            ,
            n.exactEquals = function(t, e) {
                return t[0] === e[0] && t[1] === e[1] && t[2] === e[2]
            }
            ,
            n.equals = function(t, e) {
                var n = t[0]
                  , r = t[1]
                  , o = t[2]
                  , s = e[0]
                  , a = e[1]
                  , u = e[2];
                return Math.abs(n - s) <= i.EPSILON * Math.max(1, Math.abs(n), Math.abs(s)) && Math.abs(r - a) <= i.EPSILON * Math.max(1, Math.abs(r), Math.abs(a)) && Math.abs(o - u) <= i.EPSILON * Math.max(1, Math.abs(o), Math.abs(u))
            }
            ,
            n.forEach = n.sqrLen = n.len = n.sqrDist = n.dist = n.div = n.mul = n.sub = void 0;
            var i = function(t) {
                if (t && t.__esModule)
                    return t;
                if (null === t || "object" !== r(t) && "function" != typeof t)
                    return {
                        default: t
                    };
                var e = o();
                if (e && e.has(t))
                    return e.get(t);
                var n = {}
                  , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var s in t)
                    if (Object.prototype.hasOwnProperty.call(t, s)) {
                        var a = i ? Object.getOwnPropertyDescriptor(t, s) : null;
                        a && (a.get || a.set) ? Object.defineProperty(n, s, a) : n[s] = t[s]
                    }
                n.default = t,
                e && e.set(t, n);
                return n
            }(t("./common.js"));
            function o() {
                if ("function" != typeof WeakMap)
                    return null;
                var t = new WeakMap;
                return o = function() {
                    return t
                }
                ,
                t
            }
            function s() {
                var t = new i.ARRAY_TYPE(3);
                return i.ARRAY_TYPE != Float32Array && (t[0] = 0,
                t[1] = 0,
                t[2] = 0),
                t
            }
            function a(t) {
                var e = t[0]
                  , n = t[1]
                  , r = t[2];
                return Math.hypot(e, n, r)
            }
            function u(t, e, n) {
                return t[0] = e[0] - n[0],
                t[1] = e[1] - n[1],
                t[2] = e[2] - n[2],
                t
            }
            function l(t, e, n) {
                return t[0] = e[0] * n[0],
                t[1] = e[1] * n[1],
                t[2] = e[2] * n[2],
                t
            }
            function c(t, e, n) {
                return t[0] = e[0] / n[0],
                t[1] = e[1] / n[1],
                t[2] = e[2] / n[2],
                t
            }
            function h(t, e) {
                var n = e[0] - t[0]
                  , r = e[1] - t[1]
                  , i = e[2] - t[2];
                return Math.hypot(n, r, i)
            }
            function p(t, e) {
                var n = e[0] - t[0]
                  , r = e[1] - t[1]
                  , i = e[2] - t[2];
                return n * n + r * r + i * i
            }
            function f(t) {
                var e = t[0]
                  , n = t[1]
                  , r = t[2];
                return e * e + n * n + r * r
            }
            function d(t, e) {
                return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
            }
            var m = u;
            n.sub = m;
            var v = l;
            n.mul = v;
            var y = c;
            n.div = y;
            var g = h;
            n.dist = g;
            var _ = p;
            n.sqrDist = _;
            var b = a;
            n.len = b;
            var w = f;
            n.sqrLen = w;
            var x, E = (x = s(),
            function(t, e, n, r, i, o) {
                var s, a;
                for (e || (e = 3),
                n || (n = 0),
                a = r ? Math.min(r * e + n, t.length) : t.length,
                s = n; s < a; s += e)
                    x[0] = t[s],
                    x[1] = t[s + 1],
                    x[2] = t[s + 2],
                    i(x, x, o),
                    t[s] = x[0],
                    t[s + 1] = x[1],
                    t[s + 2] = x[2];
                return t
            }
            );
            n.forEach = E
        }
        , {
            "./common.js": 4
        }],
        14: [function(t, e, n) {
            "use strict";
            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.create = s,
            n.clone = function(t) {
                var e = new i.ARRAY_TYPE(4);
                return e[0] = t[0],
                e[1] = t[1],
                e[2] = t[2],
                e[3] = t[3],
                e
            }
            ,
            n.fromValues = function(t, e, n, r) {
                var o = new i.ARRAY_TYPE(4);
                return o[0] = t,
                o[1] = e,
                o[2] = n,
                o[3] = r,
                o
            }
            ,
            n.copy = function(t, e) {
                return t[0] = e[0],
                t[1] = e[1],
                t[2] = e[2],
                t[3] = e[3],
                t
            }
            ,
            n.set = function(t, e, n, r, i) {
                return t[0] = e,
                t[1] = n,
                t[2] = r,
                t[3] = i,
                t
            }
            ,
            n.add = function(t, e, n) {
                return t[0] = e[0] + n[0],
                t[1] = e[1] + n[1],
                t[2] = e[2] + n[2],
                t[3] = e[3] + n[3],
                t
            }
            ,
            n.subtract = a,
            n.multiply = u,
            n.divide = l,
            n.ceil = function(t, e) {
                return t[0] = Math.ceil(e[0]),
                t[1] = Math.ceil(e[1]),
                t[2] = Math.ceil(e[2]),
                t[3] = Math.ceil(e[3]),
                t
            }
            ,
            n.floor = function(t, e) {
                return t[0] = Math.floor(e[0]),
                t[1] = Math.floor(e[1]),
                t[2] = Math.floor(e[2]),
                t[3] = Math.floor(e[3]),
                t
            }
            ,
            n.min = function(t, e, n) {
                return t[0] = Math.min(e[0], n[0]),
                t[1] = Math.min(e[1], n[1]),
                t[2] = Math.min(e[2], n[2]),
                t[3] = Math.min(e[3], n[3]),
                t
            }
            ,
            n.max = function(t, e, n) {
                return t[0] = Math.max(e[0], n[0]),
                t[1] = Math.max(e[1], n[1]),
                t[2] = Math.max(e[2], n[2]),
                t[3] = Math.max(e[3], n[3]),
                t
            }
            ,
            n.round = function(t, e) {
                return t[0] = Math.round(e[0]),
                t[1] = Math.round(e[1]),
                t[2] = Math.round(e[2]),
                t[3] = Math.round(e[3]),
                t
            }
            ,
            n.scale = function(t, e, n) {
                return t[0] = e[0] * n,
                t[1] = e[1] * n,
                t[2] = e[2] * n,
                t[3] = e[3] * n,
                t
            }
            ,
            n.scaleAndAdd = function(t, e, n, r) {
                return t[0] = e[0] + n[0] * r,
                t[1] = e[1] + n[1] * r,
                t[2] = e[2] + n[2] * r,
                t[3] = e[3] + n[3] * r,
                t
            }
            ,
            n.distance = c,
            n.squaredDistance = h,
            n.length = p,
            n.squaredLength = f,
            n.negate = function(t, e) {
                return t[0] = -e[0],
                t[1] = -e[1],
                t[2] = -e[2],
                t[3] = -e[3],
                t
            }
            ,
            n.inverse = function(t, e) {
                return t[0] = 1 / e[0],
                t[1] = 1 / e[1],
                t[2] = 1 / e[2],
                t[3] = 1 / e[3],
                t
            }
            ,
            n.normalize = function(t, e) {
                var n = e[0]
                  , r = e[1]
                  , i = e[2]
                  , o = e[3]
                  , s = n * n + r * r + i * i + o * o;
                s > 0 && (s = 1 / Math.sqrt(s));
                return t[0] = n * s,
                t[1] = r * s,
                t[2] = i * s,
                t[3] = o * s,
                t
            }
            ,
            n.dot = function(t, e) {
                return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
            }
            ,
            n.cross = function(t, e, n, r) {
                var i = n[0] * r[1] - n[1] * r[0]
                  , o = n[0] * r[2] - n[2] * r[0]
                  , s = n[0] * r[3] - n[3] * r[0]
                  , a = n[1] * r[2] - n[2] * r[1]
                  , u = n[1] * r[3] - n[3] * r[1]
                  , l = n[2] * r[3] - n[3] * r[2]
                  , c = e[0]
                  , h = e[1]
                  , p = e[2]
                  , f = e[3];
                return t[0] = h * l - p * u + f * a,
                t[1] = -c * l + p * s - f * o,
                t[2] = c * u - h * s + f * i,
                t[3] = -c * a + h * o - p * i,
                t
            }
            ,
            n.lerp = function(t, e, n, r) {
                var i = e[0]
                  , o = e[1]
                  , s = e[2]
                  , a = e[3];
                return t[0] = i + r * (n[0] - i),
                t[1] = o + r * (n[1] - o),
                t[2] = s + r * (n[2] - s),
                t[3] = a + r * (n[3] - a),
                t
            }
            ,
            n.random = function(t, e) {
                var n, r, o, s, a, u;
                e = e || 1;
                do {
                    n = 2 * i.RANDOM() - 1,
                    r = 2 * i.RANDOM() - 1,
                    a = n * n + r * r
                } while (a >= 1);
                do {
                    o = 2 * i.RANDOM() - 1,
                    s = 2 * i.RANDOM() - 1,
                    u = o * o + s * s
                } while (u >= 1);
                var l = Math.sqrt((1 - a) / u);
                return t[0] = e * n,
                t[1] = e * r,
                t[2] = e * o * l,
                t[3] = e * s * l,
                t
            }
            ,
            n.transformMat4 = function(t, e, n) {
                var r = e[0]
                  , i = e[1]
                  , o = e[2]
                  , s = e[3];
                return t[0] = n[0] * r + n[4] * i + n[8] * o + n[12] * s,
                t[1] = n[1] * r + n[5] * i + n[9] * o + n[13] * s,
                t[2] = n[2] * r + n[6] * i + n[10] * o + n[14] * s,
                t[3] = n[3] * r + n[7] * i + n[11] * o + n[15] * s,
                t
            }
            ,
            n.transformQuat = function(t, e, n) {
                var r = e[0]
                  , i = e[1]
                  , o = e[2]
                  , s = n[0]
                  , a = n[1]
                  , u = n[2]
                  , l = n[3]
                  , c = l * r + a * o - u * i
                  , h = l * i + u * r - s * o
                  , p = l * o + s * i - a * r
                  , f = -s * r - a * i - u * o;
                return t[0] = c * l + f * -s + h * -u - p * -a,
                t[1] = h * l + f * -a + p * -s - c * -u,
                t[2] = p * l + f * -u + c * -a - h * -s,
                t[3] = e[3],
                t
            }
            ,
            n.zero = function(t) {
                return t[0] = 0,
                t[1] = 0,
                t[2] = 0,
                t[3] = 0,
                t
            }
            ,
            n.str = function(t) {
                return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
            }
            ,
            n.exactEquals = function(t, e) {
                return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3]
            }
            ,
            n.equals = function(t, e) {
                var n = t[0]
                  , r = t[1]
                  , o = t[2]
                  , s = t[3]
                  , a = e[0]
                  , u = e[1]
                  , l = e[2]
                  , c = e[3];
                return Math.abs(n - a) <= i.EPSILON * Math.max(1, Math.abs(n), Math.abs(a)) && Math.abs(r - u) <= i.EPSILON * Math.max(1, Math.abs(r), Math.abs(u)) && Math.abs(o - l) <= i.EPSILON * Math.max(1, Math.abs(o), Math.abs(l)) && Math.abs(s - c) <= i.EPSILON * Math.max(1, Math.abs(s), Math.abs(c))
            }
            ,
            n.forEach = n.sqrLen = n.len = n.sqrDist = n.dist = n.div = n.mul = n.sub = void 0;
            var i = function(t) {
                if (t && t.__esModule)
                    return t;
                if (null === t || "object" !== r(t) && "function" != typeof t)
                    return {
                        default: t
                    };
                var e = o();
                if (e && e.has(t))
                    return e.get(t);
                var n = {}
                  , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var s in t)
                    if (Object.prototype.hasOwnProperty.call(t, s)) {
                        var a = i ? Object.getOwnPropertyDescriptor(t, s) : null;
                        a && (a.get || a.set) ? Object.defineProperty(n, s, a) : n[s] = t[s]
                    }
                n.default = t,
                e && e.set(t, n);
                return n
            }(t("./common.js"));
            function o() {
                if ("function" != typeof WeakMap)
                    return null;
                var t = new WeakMap;
                return o = function() {
                    return t
                }
                ,
                t
            }
            function s() {
                var t = new i.ARRAY_TYPE(4);
                return i.ARRAY_TYPE != Float32Array && (t[0] = 0,
                t[1] = 0,
                t[2] = 0,
                t[3] = 0),
                t
            }
            function a(t, e, n) {
                return t[0] = e[0] - n[0],
                t[1] = e[1] - n[1],
                t[2] = e[2] - n[2],
                t[3] = e[3] - n[3],
                t
            }
            function u(t, e, n) {
                return t[0] = e[0] * n[0],
                t[1] = e[1] * n[1],
                t[2] = e[2] * n[2],
                t[3] = e[3] * n[3],
                t
            }
            function l(t, e, n) {
                return t[0] = e[0] / n[0],
                t[1] = e[1] / n[1],
                t[2] = e[2] / n[2],
                t[3] = e[3] / n[3],
                t
            }
            function c(t, e) {
                var n = e[0] - t[0]
                  , r = e[1] - t[1]
                  , i = e[2] - t[2]
                  , o = e[3] - t[3];
                return Math.hypot(n, r, i, o)
            }
            function h(t, e) {
                var n = e[0] - t[0]
                  , r = e[1] - t[1]
                  , i = e[2] - t[2]
                  , o = e[3] - t[3];
                return n * n + r * r + i * i + o * o
            }
            function p(t) {
                var e = t[0]
                  , n = t[1]
                  , r = t[2]
                  , i = t[3];
                return Math.hypot(e, n, r, i)
            }
            function f(t) {
                var e = t[0]
                  , n = t[1]
                  , r = t[2]
                  , i = t[3];
                return e * e + n * n + r * r + i * i
            }
            var d = a;
            n.sub = d;
            var m = u;
            n.mul = m;
            var v = l;
            n.div = v;
            var y = c;
            n.dist = y;
            var g = h;
            n.sqrDist = g;
            var _ = p;
            n.len = _;
            var b = f;
            n.sqrLen = b;
            var w, x = (w = s(),
            function(t, e, n, r, i, o) {
                var s, a;
                for (e || (e = 4),
                n || (n = 0),
                a = r ? Math.min(r * e + n, t.length) : t.length,
                s = n; s < a; s += e)
                    w[0] = t[s],
                    w[1] = t[s + 1],
                    w[2] = t[s + 2],
                    w[3] = t[s + 3],
                    i(w, w, o),
                    t[s] = w[0],
                    t[s + 1] = w[1],
                    t[s + 2] = w[2],
                    t[s + 3] = w[3];
                return t
            }
            );
            n.forEach = x
        }
        , {
            "./common.js": 4
        }],
        15: [function(t, e, n) {
            /*! Hammer.JS - v2.0.4 - 2014-09-28
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2014 Jorik Tangelder;
 * Licensed under the MIT license */
            !function(t, n, r, i) {
                "use strict";
                var o = ["", "webkit", "moz", "MS", "ms", "o"]
                  , s = n.createElement("div")
                  , a = "function"
                  , u = Math.round
                  , l = Math.abs
                  , c = Date.now;
                function h(t, e, n) {
                    return setTimeout(y(t, n), e)
                }
                function p(t, e, n) {
                    return !!Array.isArray(t) && (f(t, n[e], n),
                    !0)
                }
                function f(t, e, n) {
                    var r;
                    if (t)
                        if (t.forEach)
                            t.forEach(e, n);
                        else if (t.length !== i)
                            for (r = 0; r < t.length; )
                                e.call(n, t[r], r, t),
                                r++;
                        else
                            for (r in t)
                                t.hasOwnProperty(r) && e.call(n, t[r], r, t)
                }
                function d(t, e, n) {
                    for (var r = Object.keys(e), o = 0; o < r.length; )
                        (!n || n && t[r[o]] === i) && (t[r[o]] = e[r[o]]),
                        o++;
                    return t
                }
                function m(t, e) {
                    return d(t, e, !0)
                }
                function v(t, e, n) {
                    var r, i = e.prototype;
                    (r = t.prototype = Object.create(i)).constructor = t,
                    r._super = i,
                    n && d(r, n)
                }
                function y(t, e) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                }
                function g(t, e) {
                    return typeof t == a ? t.apply(e && e[0] || i, e) : t
                }
                function _(t, e) {
                    return t === i ? e : t
                }
                function b(t, e, n) {
                    f(M(e), (function(e) {
                        t.addEventListener(e, n, !1)
                    }
                    ))
                }
                function w(t, e, n) {
                    f(M(e), (function(e) {
                        t.removeEventListener(e, n, !1)
                    }
                    ))
                }
                function x(t, e) {
                    for (; t; ) {
                        if (t == e)
                            return !0;
                        t = t.parentNode
                    }
                    return !1
                }
                function E(t, e) {
                    return t.indexOf(e) > -1
                }
                function M(t) {
                    return t.trim().split(/\s+/g)
                }
                function S(t, e, n) {
                    if (t.indexOf && !n)
                        return t.indexOf(e);
                    for (var r = 0; r < t.length; ) {
                        if (n && t[r][n] == e || !n && t[r] === e)
                            return r;
                        r++
                    }
                    return -1
                }
                function T(t) {
                    return Array.prototype.slice.call(t, 0)
                }
                function C(t, e, n) {
                    for (var r = [], i = [], o = 0; o < t.length; ) {
                        var s = e ? t[o][e] : t[o];
                        S(i, s) < 0 && r.push(t[o]),
                        i[o] = s,
                        o++
                    }
                    return n && (r = e ? r.sort((function(t, n) {
                        return t[e] > n[e]
                    }
                    )) : r.sort()),
                    r
                }
                function O(t, e) {
                    for (var n, r, s = e[0].toUpperCase() + e.slice(1), a = 0; a < o.length; ) {
                        if ((r = (n = o[a]) ? n + s : e)in t)
                            return r;
                        a++
                    }
                    return i
                }
                var P = 1;
                function L(t) {
                    var e = t.ownerDocument;
                    return e.defaultView || e.parentWindow
                }
                var A = "ontouchstart"in t
                  , k = O(t, "PointerEvent") !== i
                  , D = A && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent)
                  , R = "touch"
                  , I = "mouse"
                  , N = 24
                  , j = ["x", "y"]
                  , z = ["clientX", "clientY"];
                function H(t, e) {
                    var n = this;
                    this.manager = t,
                    this.callback = e,
                    this.element = t.element,
                    this.target = t.options.inputTarget,
                    this.domHandler = function(e) {
                        g(t.options.enable, [t]) && n.handler(e)
                    }
                    ,
                    this.init()
                }
                function F(t, e, n) {
                    var r = n.pointers.length
                      , o = n.changedPointers.length
                      , s = 1 & e && r - o == 0
                      , a = 12 & e && r - o == 0;
                    n.isFirst = !!s,
                    n.isFinal = !!a,
                    s && (t.session = {}),
                    n.eventType = e,
                    function(t, e) {
                        var n = t.session
                          , r = e.pointers
                          , o = r.length;
                        n.firstInput || (n.firstInput = B(e));
                        o > 1 && !n.firstMultiple ? n.firstMultiple = B(e) : 1 === o && (n.firstMultiple = !1);
                        var s = n.firstInput
                          , a = n.firstMultiple
                          , u = a ? a.center : s.center
                          , h = e.center = V(r);
                        e.timeStamp = c(),
                        e.deltaTime = e.timeStamp - s.timeStamp,
                        e.angle = Y(u, h),
                        e.distance = W(u, h),
                        function(t, e) {
                            var n = e.center
                              , r = t.offsetDelta || {}
                              , i = t.prevDelta || {}
                              , o = t.prevInput || {};
                            1 !== e.eventType && 4 !== o.eventType || (i = t.prevDelta = {
                                x: o.deltaX || 0,
                                y: o.deltaY || 0
                            },
                            r = t.offsetDelta = {
                                x: n.x,
                                y: n.y
                            });
                            e.deltaX = i.x + (n.x - r.x),
                            e.deltaY = i.y + (n.y - r.y)
                        }(n, e),
                        e.offsetDirection = q(e.deltaX, e.deltaY),
                        e.scale = a ? (p = a.pointers,
                        f = r,
                        W(f[0], f[1], z) / W(p[0], p[1], z)) : 1,
                        e.rotation = a ? function(t, e) {
                            return Y(e[1], e[0], z) - Y(t[1], t[0], z)
                        }(a.pointers, r) : 0,
                        function(t, e) {
                            var n, r, o, s, a = t.lastInterval || e, u = e.timeStamp - a.timeStamp;
                            if (8 != e.eventType && (u > 25 || a.velocity === i)) {
                                var c = a.deltaX - e.deltaX
                                  , h = a.deltaY - e.deltaY
                                  , p = function(t, e, n) {
                                    return {
                                        x: e / t || 0,
                                        y: n / t || 0
                                    }
                                }(u, c, h);
                                r = p.x,
                                o = p.y,
                                n = l(p.x) > l(p.y) ? p.x : p.y,
                                s = q(c, h),
                                t.lastInterval = e
                            } else
                                n = a.velocity,
                                r = a.velocityX,
                                o = a.velocityY,
                                s = a.direction;
                            e.velocity = n,
                            e.velocityX = r,
                            e.velocityY = o,
                            e.direction = s
                        }(n, e);
                        var p, f;
                        var d = t.element;
                        x(e.srcEvent.target, d) && (d = e.srcEvent.target);
                        e.target = d
                    }(t, n),
                    t.emit("hammer.input", n),
                    t.recognize(n),
                    t.session.prevInput = n
                }
                function B(t) {
                    for (var e = [], n = 0; n < t.pointers.length; )
                        e[n] = {
                            clientX: u(t.pointers[n].clientX),
                            clientY: u(t.pointers[n].clientY)
                        },
                        n++;
                    return {
                        timeStamp: c(),
                        pointers: e,
                        center: V(e),
                        deltaX: t.deltaX,
                        deltaY: t.deltaY
                    }
                }
                function V(t) {
                    var e = t.length;
                    if (1 === e)
                        return {
                            x: u(t[0].clientX),
                            y: u(t[0].clientY)
                        };
                    for (var n = 0, r = 0, i = 0; i < e; )
                        n += t[i].clientX,
                        r += t[i].clientY,
                        i++;
                    return {
                        x: u(n / e),
                        y: u(r / e)
                    }
                }
                function q(t, e) {
                    return t === e ? 1 : l(t) >= l(e) ? t > 0 ? 2 : 4 : e > 0 ? 8 : 16
                }
                function W(t, e, n) {
                    n || (n = j);
                    var r = e[n[0]] - t[n[0]]
                      , i = e[n[1]] - t[n[1]];
                    return Math.sqrt(r * r + i * i)
                }
                function Y(t, e, n) {
                    n || (n = j);
                    var r = e[n[0]] - t[n[0]]
                      , i = e[n[1]] - t[n[1]];
                    return 180 * Math.atan2(i, r) / Math.PI
                }
                H.prototype = {
                    handler: function() {},
                    init: function() {
                        this.evEl && b(this.element, this.evEl, this.domHandler),
                        this.evTarget && b(this.target, this.evTarget, this.domHandler),
                        this.evWin && b(L(this.element), this.evWin, this.domHandler)
                    },
                    destroy: function() {
                        this.evEl && w(this.element, this.evEl, this.domHandler),
                        this.evTarget && w(this.target, this.evTarget, this.domHandler),
                        this.evWin && w(L(this.element), this.evWin, this.domHandler)
                    }
                };
                var X = {
                    mousedown: 1,
                    mousemove: 2,
                    mouseup: 4
                }
                  , U = "mousedown"
                  , G = "mousemove mouseup";
                function K() {
                    this.evEl = U,
                    this.evWin = G,
                    this.allow = !0,
                    this.pressed = !1,
                    H.apply(this, arguments)
                }
                v(K, H, {
                    handler: function(t) {
                        var e = X[t.type];
                        1 & e && 0 === t.button && (this.pressed = !0),
                        2 & e && 1 !== t.which && (e = 4),
                        this.pressed && this.allow && (4 & e && (this.pressed = !1),
                        this.callback(this.manager, e, {
                            pointers: [t],
                            changedPointers: [t],
                            pointerType: I,
                            srcEvent: t
                        }))
                    }
                });
                var $ = {
                    pointerdown: 1,
                    pointermove: 2,
                    pointerup: 4,
                    pointercancel: 8,
                    pointerout: 8
                }
                  , Z = {
                    2: R,
                    3: "pen",
                    4: I,
                    5: "kinect"
                }
                  , J = "pointerdown"
                  , Q = "pointermove pointerup pointercancel";
                function tt() {
                    this.evEl = J,
                    this.evWin = Q,
                    H.apply(this, arguments),
                    this.store = this.manager.session.pointerEvents = []
                }
                t.MSPointerEvent && (J = "MSPointerDown",
                Q = "MSPointerMove MSPointerUp MSPointerCancel"),
                v(tt, H, {
                    handler: function(t) {
                        var e = this.store
                          , n = !1
                          , r = t.type.toLowerCase().replace("ms", "")
                          , i = $[r]
                          , o = Z[t.pointerType] || t.pointerType
                          , s = o == R
                          , a = S(e, t.pointerId, "pointerId");
                        1 & i && (0 === t.button || s) ? a < 0 && (e.push(t),
                        a = e.length - 1) : 12 & i && (n = !0),
                        a < 0 || (e[a] = t,
                        this.callback(this.manager, i, {
                            pointers: e,
                            changedPointers: [t],
                            pointerType: o,
                            srcEvent: t
                        }),
                        n && e.splice(a, 1))
                    }
                });
                var et = {
                    touchstart: 1,
                    touchmove: 2,
                    touchend: 4,
                    touchcancel: 8
                }
                  , nt = "touchstart"
                  , rt = "touchstart touchmove touchend touchcancel";
                function it() {
                    this.evTarget = nt,
                    this.evWin = rt,
                    this.started = !1,
                    H.apply(this, arguments)
                }
                function ot(t, e) {
                    var n = T(t.touches)
                      , r = T(t.changedTouches);
                    return 12 & e && (n = C(n.concat(r), "identifier", !0)),
                    [n, r]
                }
                v(it, H, {
                    handler: function(t) {
                        var e = et[t.type];
                        if (1 === e && (this.started = !0),
                        this.started) {
                            var n = ot.call(this, t, e);
                            12 & e && n[0].length - n[1].length == 0 && (this.started = !1),
                            this.callback(this.manager, e, {
                                pointers: n[0],
                                changedPointers: n[1],
                                pointerType: R,
                                srcEvent: t
                            })
                        }
                    }
                });
                var st = {
                    touchstart: 1,
                    touchmove: 2,
                    touchend: 4,
                    touchcancel: 8
                }
                  , at = "touchstart touchmove touchend touchcancel";
                function ut() {
                    this.evTarget = at,
                    this.targetIds = {},
                    H.apply(this, arguments)
                }
                function lt(t, e) {
                    var n = T(t.touches)
                      , r = this.targetIds;
                    if (3 & e && 1 === n.length)
                        return r[n[0].identifier] = !0,
                        [n, n];
                    var i, o, s = T(t.changedTouches), a = [], u = this.target;
                    if (o = n.filter((function(t) {
                        return x(t.target, u)
                    }
                    )),
                    1 === e)
                        for (i = 0; i < o.length; )
                            r[o[i].identifier] = !0,
                            i++;
                    for (i = 0; i < s.length; )
                        r[s[i].identifier] && a.push(s[i]),
                        12 & e && delete r[s[i].identifier],
                        i++;
                    return a.length ? [C(o.concat(a), "identifier", !0), a] : void 0
                }
                function ct() {
                    H.apply(this, arguments);
                    var t = y(this.handler, this);
                    this.touch = new ut(this.manager,t),
                    this.mouse = new K(this.manager,t)
                }
                v(ut, H, {
                    handler: function(t) {
                        var e = st[t.type]
                          , n = lt.call(this, t, e);
                        n && this.callback(this.manager, e, {
                            pointers: n[0],
                            changedPointers: n[1],
                            pointerType: R,
                            srcEvent: t
                        })
                    }
                }),
                v(ct, H, {
                    handler: function(t, e, n) {
                        var r = n.pointerType == R
                          , i = n.pointerType == I;
                        if (r)
                            this.mouse.allow = !1;
                        else if (i && !this.mouse.allow)
                            return;
                        12 & e && (this.mouse.allow = !0),
                        this.callback(t, e, n)
                    },
                    destroy: function() {
                        this.touch.destroy(),
                        this.mouse.destroy()
                    }
                });
                var ht = O(s.style, "touchAction")
                  , pt = ht !== i
                  , ft = "compute"
                  , dt = "auto"
                  , mt = "manipulation"
                  , vt = "none"
                  , yt = "pan-x"
                  , gt = "pan-y";
                function _t(t, e) {
                    this.manager = t,
                    this.set(e)
                }
                _t.prototype = {
                    set: function(t) {
                        t == ft && (t = this.compute()),
                        pt && (this.manager.element.style[ht] = t),
                        this.actions = t.toLowerCase().trim()
                    },
                    update: function() {
                        this.set(this.manager.options.touchAction)
                    },
                    compute: function() {
                        var t = [];
                        return f(this.manager.recognizers, (function(e) {
                            g(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                        }
                        )),
                        function(t) {
                            if (E(t, vt))
                                return vt;
                            var e = E(t, yt)
                              , n = E(t, gt);
                            if (e && n)
                                return "pan-x pan-y";
                            if (e || n)
                                return e ? yt : gt;
                            if (E(t, mt))
                                return mt;
                            return dt
                        }(t.join(" "))
                    },
                    preventDefaults: function(t) {
                        if (!pt) {
                            var e = t.srcEvent
                              , n = t.offsetDirection;
                            if (!this.manager.session.prevented) {
                                var r = this.actions
                                  , i = E(r, vt)
                                  , o = E(r, gt)
                                  , s = E(r, yt);
                                return i || o && 6 & n || s && n & N ? this.preventSrc(e) : void 0
                            }
                            e.preventDefault()
                        }
                    },
                    preventSrc: function(t) {
                        this.manager.session.prevented = !0,
                        t.preventDefault()
                    }
                };
                var bt = 16
                  , wt = 32;
                function xt(t) {
                    this.id = P++,
                    this.manager = null,
                    this.options = m(t || {}, this.defaults),
                    this.options.enable = _(this.options.enable, !0),
                    this.state = 1,
                    this.simultaneous = {},
                    this.requireFail = []
                }
                function Et(t) {
                    return 16 == t ? "down" : 8 == t ? "up" : 2 == t ? "left" : 4 == t ? "right" : ""
                }
                function Mt(t, e) {
                    var n = e.manager;
                    return n ? n.get(t) : t
                }
                function St() {
                    xt.apply(this, arguments)
                }
                function Tt() {
                    St.apply(this, arguments),
                    this.pX = null,
                    this.pY = null
                }
                function Ct() {
                    St.apply(this, arguments)
                }
                function Ot() {
                    xt.apply(this, arguments),
                    this._timer = null,
                    this._input = null
                }
                function Pt() {
                    St.apply(this, arguments)
                }
                function Lt() {
                    St.apply(this, arguments)
                }
                function At() {
                    xt.apply(this, arguments),
                    this.pTime = !1,
                    this.pCenter = !1,
                    this._timer = null,
                    this._input = null,
                    this.count = 0
                }
                function kt(t, e) {
                    return (e = e || {}).recognizers = _(e.recognizers, kt.defaults.preset),
                    new Dt(t,e)
                }
                xt.prototype = {
                    defaults: {},
                    set: function(t) {
                        return d(this.options, t),
                        this.manager && this.manager.touchAction.update(),
                        this
                    },
                    recognizeWith: function(t) {
                        if (p(t, "recognizeWith", this))
                            return this;
                        var e = this.simultaneous;
                        return e[(t = Mt(t, this)).id] || (e[t.id] = t,
                        t.recognizeWith(this)),
                        this
                    },
                    dropRecognizeWith: function(t) {
                        return p(t, "dropRecognizeWith", this) || (t = Mt(t, this),
                        delete this.simultaneous[t.id]),
                        this
                    },
                    requireFailure: function(t) {
                        if (p(t, "requireFailure", this))
                            return this;
                        var e = this.requireFail;
                        return -1 === S(e, t = Mt(t, this)) && (e.push(t),
                        t.requireFailure(this)),
                        this
                    },
                    dropRequireFailure: function(t) {
                        if (p(t, "dropRequireFailure", this))
                            return this;
                        t = Mt(t, this);
                        var e = S(this.requireFail, t);
                        return e > -1 && this.requireFail.splice(e, 1),
                        this
                    },
                    hasRequireFailures: function() {
                        return this.requireFail.length > 0
                    },
                    canRecognizeWith: function(t) {
                        return !!this.simultaneous[t.id]
                    },
                    emit: function(t) {
                        var e = this
                          , n = this.state;
                        function r(r) {
                            e.manager.emit(e.options.event + (r ? function(t) {
                                if (t & bt)
                                    return "cancel";
                                if (8 & t)
                                    return "end";
                                if (4 & t)
                                    return "move";
                                if (2 & t)
                                    return "start";
                                return ""
                            }(n) : ""), t)
                        }
                        n < 8 && r(!0),
                        r(),
                        n >= 8 && r(!0)
                    },
                    tryEmit: function(t) {
                        if (this.canEmit())
                            return this.emit(t);
                        this.state = wt
                    },
                    canEmit: function() {
                        for (var t = 0; t < this.requireFail.length; ) {
                            if (!(33 & this.requireFail[t].state))
                                return !1;
                            t++
                        }
                        return !0
                    },
                    recognize: function(t) {
                        var e = d({}, t);
                        if (!g(this.options.enable, [this, e]))
                            return this.reset(),
                            void (this.state = wt);
                        56 & this.state && (this.state = 1),
                        this.state = this.process(e),
                        30 & this.state && this.tryEmit(e)
                    },
                    process: function(t) {},
                    getTouchAction: function() {},
                    reset: function() {}
                },
                v(St, xt, {
                    defaults: {
                        pointers: 1
                    },
                    attrTest: function(t) {
                        var e = this.options.pointers;
                        return 0 === e || t.pointers.length === e
                    },
                    process: function(t) {
                        var e = this.state
                          , n = t.eventType
                          , r = 6 & e
                          , i = this.attrTest(t);
                        return r && (8 & n || !i) ? e | bt : r || i ? 4 & n ? 8 | e : 2 & e ? 4 | e : 2 : wt
                    }
                }),
                v(Tt, St, {
                    defaults: {
                        event: "pan",
                        threshold: 10,
                        pointers: 1,
                        direction: 30
                    },
                    getTouchAction: function() {
                        var t = this.options.direction
                          , e = [];
                        return 6 & t && e.push(gt),
                        t & N && e.push(yt),
                        e
                    },
                    directionTest: function(t) {
                        var e = this.options
                          , n = !0
                          , r = t.distance
                          , i = t.direction
                          , o = t.deltaX
                          , s = t.deltaY;
                        return i & e.direction || (6 & e.direction ? (i = 0 === o ? 1 : o < 0 ? 2 : 4,
                        n = o != this.pX,
                        r = Math.abs(t.deltaX)) : (i = 0 === s ? 1 : s < 0 ? 8 : 16,
                        n = s != this.pY,
                        r = Math.abs(t.deltaY))),
                        t.direction = i,
                        n && r > e.threshold && i & e.direction
                    },
                    attrTest: function(t) {
                        return St.prototype.attrTest.call(this, t) && (2 & this.state || !(2 & this.state) && this.directionTest(t))
                    },
                    emit: function(t) {
                        this.pX = t.deltaX,
                        this.pY = t.deltaY;
                        var e = Et(t.direction);
                        e && this.manager.emit(this.options.event + e, t),
                        this._super.emit.call(this, t)
                    }
                }),
                v(Ct, St, {
                    defaults: {
                        event: "pinch",
                        threshold: 0,
                        pointers: 2
                    },
                    getTouchAction: function() {
                        return [vt]
                    },
                    attrTest: function(t) {
                        return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || 2 & this.state)
                    },
                    emit: function(t) {
                        if (this._super.emit.call(this, t),
                        1 !== t.scale) {
                            var e = t.scale < 1 ? "in" : "out";
                            this.manager.emit(this.options.event + e, t)
                        }
                    }
                }),
                v(Ot, xt, {
                    defaults: {
                        event: "press",
                        pointers: 1,
                        time: 500,
                        threshold: 5
                    },
                    getTouchAction: function() {
                        return [dt]
                    },
                    process: function(t) {
                        var e = this.options
                          , n = t.pointers.length === e.pointers
                          , r = t.distance < e.threshold
                          , i = t.deltaTime > e.time;
                        if (this._input = t,
                        !r || !n || 12 & t.eventType && !i)
                            this.reset();
                        else if (1 & t.eventType)
                            this.reset(),
                            this._timer = h((function() {
                                this.state = 8,
                                this.tryEmit()
                            }
                            ), e.time, this);
                        else if (4 & t.eventType)
                            return 8;
                        return wt
                    },
                    reset: function() {
                        clearTimeout(this._timer)
                    },
                    emit: function(t) {
                        8 === this.state && (t && 4 & t.eventType ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = c(),
                        this.manager.emit(this.options.event, this._input)))
                    }
                }),
                v(Pt, St, {
                    defaults: {
                        event: "rotate",
                        threshold: 0,
                        pointers: 2
                    },
                    getTouchAction: function() {
                        return [vt]
                    },
                    attrTest: function(t) {
                        return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || 2 & this.state)
                    }
                }),
                v(Lt, St, {
                    defaults: {
                        event: "swipe",
                        threshold: 10,
                        velocity: .65,
                        direction: 30,
                        pointers: 1
                    },
                    getTouchAction: function() {
                        return Tt.prototype.getTouchAction.call(this)
                    },
                    attrTest: function(t) {
                        var e, n = this.options.direction;
                        return 30 & n ? e = t.velocity : 6 & n ? e = t.velocityX : n & N && (e = t.velocityY),
                        this._super.attrTest.call(this, t) && n & t.direction && t.distance > this.options.threshold && l(e) > this.options.velocity && 4 & t.eventType
                    },
                    emit: function(t) {
                        var e = Et(t.direction);
                        e && this.manager.emit(this.options.event + e, t),
                        this.manager.emit(this.options.event, t)
                    }
                }),
                v(At, xt, {
                    defaults: {
                        event: "tap",
                        pointers: 1,
                        taps: 1,
                        interval: 300,
                        time: 250,
                        threshold: 2,
                        posThreshold: 10
                    },
                    getTouchAction: function() {
                        return [mt]
                    },
                    process: function(t) {
                        var e = this.options
                          , n = t.pointers.length === e.pointers
                          , r = t.distance < e.threshold
                          , i = t.deltaTime < e.time;
                        if (this.reset(),
                        1 & t.eventType && 0 === this.count)
                            return this.failTimeout();
                        if (r && i && n) {
                            if (4 != t.eventType)
                                return this.failTimeout();
                            var o = !this.pTime || t.timeStamp - this.pTime < e.interval
                              , s = !this.pCenter || W(this.pCenter, t.center) < e.posThreshold;
                            if (this.pTime = t.timeStamp,
                            this.pCenter = t.center,
                            s && o ? this.count += 1 : this.count = 1,
                            this._input = t,
                            0 === this.count % e.taps)
                                return this.hasRequireFailures() ? (this._timer = h((function() {
                                    this.state = 8,
                                    this.tryEmit()
                                }
                                ), e.interval, this),
                                2) : 8
                        }
                        return wt
                    },
                    failTimeout: function() {
                        return this._timer = h((function() {
                            this.state = wt
                        }
                        ), this.options.interval, this),
                        wt
                    },
                    reset: function() {
                        clearTimeout(this._timer)
                    },
                    emit: function() {
                        8 == this.state && (this._input.tapCount = this.count,
                        this.manager.emit(this.options.event, this._input))
                    }
                }),
                kt.VERSION = "2.0.4",
                kt.defaults = {
                    domEvents: !1,
                    touchAction: ft,
                    enable: !0,
                    inputTarget: null,
                    inputClass: null,
                    preset: [[Pt, {
                        enable: !1
                    }], [Ct, {
                        enable: !1
                    }, ["rotate"]], [Lt, {
                        direction: 6
                    }], [Tt, {
                        direction: 6
                    }, ["swipe"]], [At], [At, {
                        event: "doubletap",
                        taps: 2
                    }, ["tap"]], [Ot]],
                    cssProps: {
                        userSelect: "none",
                        touchSelect: "none",
                        touchCallout: "none",
                        contentZooming: "none",
                        userDrag: "none",
                        tapHighlightColor: "rgba(0,0,0,0)"
                    }
                };
                function Dt(t, e) {
                    var n;
                    e = e || {},
                    this.options = m(e, kt.defaults),
                    this.options.inputTarget = this.options.inputTarget || t,
                    this.handlers = {},
                    this.session = {},
                    this.recognizers = [],
                    this.element = t,
                    this.input = new ((n = this).options.inputClass || (k ? tt : D ? ut : A ? ct : K))(n,F),
                    this.touchAction = new _t(this,this.options.touchAction),
                    Rt(this, !0),
                    f(e.recognizers, (function(t) {
                        var e = this.add(new t[0](t[1]));
                        t[2] && e.recognizeWith(t[2]),
                        t[3] && e.requireFailure(t[3])
                    }
                    ), this)
                }
                function Rt(t, e) {
                    var n = t.element;
                    f(t.options.cssProps, (function(t, r) {
                        n.style[O(n.style, r)] = e ? t : ""
                    }
                    ))
                }
                Dt.prototype = {
                    set: function(t) {
                        return d(this.options, t),
                        t.touchAction && this.touchAction.update(),
                        t.inputTarget && (this.input.destroy(),
                        this.input.target = t.inputTarget,
                        this.input.init()),
                        this
                    },
                    stop: function(t) {
                        this.session.stopped = t ? 2 : 1
                    },
                    recognize: function(t) {
                        var e = this.session;
                        if (!e.stopped) {
                            var n;
                            this.touchAction.preventDefaults(t);
                            var r = this.recognizers
                              , i = e.curRecognizer;
                            (!i || i && 8 & i.state) && (i = e.curRecognizer = null);
                            for (var o = 0; o < r.length; )
                                n = r[o],
                                2 === e.stopped || i && n != i && !n.canRecognizeWith(i) ? n.reset() : n.recognize(t),
                                !i && 14 & n.state && (i = e.curRecognizer = n),
                                o++
                        }
                    },
                    get: function(t) {
                        if (t instanceof xt)
                            return t;
                        for (var e = this.recognizers, n = 0; n < e.length; n++)
                            if (e[n].options.event == t)
                                return e[n];
                        return null
                    },
                    add: function(t) {
                        if (p(t, "add", this))
                            return this;
                        var e = this.get(t.options.event);
                        return e && this.remove(e),
                        this.recognizers.push(t),
                        t.manager = this,
                        this.touchAction.update(),
                        t
                    },
                    remove: function(t) {
                        if (p(t, "remove", this))
                            return this;
                        var e = this.recognizers;
                        return t = this.get(t),
                        e.splice(S(e, t), 1),
                        this.touchAction.update(),
                        this
                    },
                    on: function(t, e) {
                        var n = this.handlers;
                        return f(M(t), (function(t) {
                            n[t] = n[t] || [],
                            n[t].push(e)
                        }
                        )),
                        this
                    },
                    off: function(t, e) {
                        var n = this.handlers;
                        return f(M(t), (function(t) {
                            e ? n[t].splice(S(n[t], e), 1) : delete n[t]
                        }
                        )),
                        this
                    },
                    emit: function(t, e) {
                        this.options.domEvents && function(t, e) {
                            var r = n.createEvent("Event");
                            r.initEvent(t, !0, !0),
                            r.gesture = e,
                            e.target.dispatchEvent(r)
                        }(t, e);
                        var r = this.handlers[t] && this.handlers[t].slice();
                        if (r && r.length) {
                            e.type = t,
                            e.preventDefault = function() {
                                e.srcEvent.preventDefault()
                            }
                            ;
                            for (var i = 0; i < r.length; )
                                r[i](e),
                                i++
                        }
                    },
                    destroy: function() {
                        this.element && Rt(this, !1),
                        this.handlers = {},
                        this.session = {},
                        this.input.destroy(),
                        this.element = null
                    }
                },
                d(kt, {
                    INPUT_START: 1,
                    INPUT_MOVE: 2,
                    INPUT_END: 4,
                    INPUT_CANCEL: 8,
                    STATE_POSSIBLE: 1,
                    STATE_BEGAN: 2,
                    STATE_CHANGED: 4,
                    STATE_ENDED: 8,
                    STATE_RECOGNIZED: 8,
                    STATE_CANCELLED: bt,
                    STATE_FAILED: wt,
                    DIRECTION_NONE: 1,
                    DIRECTION_LEFT: 2,
                    DIRECTION_RIGHT: 4,
                    DIRECTION_UP: 8,
                    DIRECTION_DOWN: 16,
                    DIRECTION_HORIZONTAL: 6,
                    DIRECTION_VERTICAL: N,
                    DIRECTION_ALL: 30,
                    Manager: Dt,
                    Input: H,
                    TouchAction: _t,
                    TouchInput: ut,
                    MouseInput: K,
                    PointerEventInput: tt,
                    TouchMouseInput: ct,
                    SingleTouchInput: it,
                    Recognizer: xt,
                    AttrRecognizer: St,
                    Tap: At,
                    Pan: Tt,
                    Swipe: Lt,
                    Pinch: Ct,
                    Rotate: Pt,
                    Press: Ot,
                    on: b,
                    off: w,
                    each: f,
                    merge: m,
                    extend: d,
                    inherit: v,
                    bindFn: y,
                    prefixed: O
                }),
                void 0 !== e && e.exports ? e.exports = kt : t.Hammer = kt
            }(window, document)
        }
        , {}],
        16: [function(t, e, n) {
            /*! WeakMap shim
 * (The MIT License)
 *
 * Copyright (c) 2012 Brandon Benvie <http://bbenvie.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the 'Software'), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included with all copies or
 * substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY  CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
            !function(t, r, i) {
                var o = Object.getOwnPropertyNames
                  , s = Object.defineProperty
                  , a = Function.prototype.toString
                  , u = Object.create
                  , l = Object.prototype.hasOwnProperty
                  , c = /^\n?function\s?(\w*)?_?\(/;
                function h(t, e, n) {
                    return "function" == typeof e && (e = p(n = e).replace(/_$/, "")),
                    s(t, e, {
                        configurable: !0,
                        writable: !0,
                        value: n
                    })
                }
                function p(t) {
                    return "function" != typeof t ? "" : "_name"in t ? t._name : "name"in t ? t.name : a.call(t).match(c)[1]
                }
                function f(t, e) {
                    return e._name = t,
                    e
                }
                var d = function() {
                    var t = {
                        value: {
                            writable: !0,
                            value: i
                        }
                    }
                      , e = u(null)
                      , n = function() {
                        var t = Math.random().toString(36).slice(2);
                        return t in e ? n() : e[t] = t
                    }
                      , r = n();
                    function a() {
                        var e = n()
                          , i = {};
                        this.unlock = function(n) {
                            var o = function(t) {
                                if (l.call(t, r))
                                    return t[r];
                                if (!Object.isExtensible(t))
                                    throw new TypeError("Object must be extensible");
                                var e = u(null);
                                return s(t, r, {
                                    value: e
                                }),
                                e
                            }(n);
                            if (l.call(o, e))
                                return o[e](i);
                            var a = u(null, t);
                            return s(o, e, {
                                value: function(t) {
                                    if (t === i)
                                        return a
                                }
                            }),
                            a
                        }
                    }
                    return h(Object, f("getOwnPropertyNames", (function(t) {
                        var e = o(t);
                        return l.call(t, r) && e.splice(e.indexOf(r), 1),
                        e
                    }
                    ))),
                    h(a.prototype, f("get", (function(t) {
                        return this.unlock(t).value
                    }
                    ))),
                    h(a.prototype, f("set", (function(t, e) {
                        this.unlock(t).value = e
                    }
                    ))),
                    a
                }()
                  , m = function(e) {
                    var n = function(t) {
                        if (null == t || "object" != typeof t && "function" != typeof t)
                            throw new TypeError("Invalid WeakMap key")
                    }
                      , o = function(t) {
                        var n = e.unlock(t).value;
                        if (!n)
                            throw new TypeError("WeakMap is not generic");
                        return n
                    };
                    function s(n) {
                        if (this === t || null == this || this === s.prototype)
                            return new s(n);
                        !function(t, n) {
                            var r = e.unlock(t);
                            if (r.value)
                                throw new TypeError("Object is already a WeakMap");
                            r.value = n
                        }(this, new d),
                        function(t, e) {
                            null !== e && "object" == typeof e && "function" == typeof e.forEach && e.forEach((function(n, r) {
                                n instanceof Array && 2 === n.length && u.call(t, e[r][0], e[r][1])
                            }
                            ))
                        }(this, n)
                    }
                    function a(t) {
                        n(t);
                        var e = o(this).get(t);
                        return e === r ? i : e
                    }
                    function u(t, e) {
                        n(t),
                        o(this).set(t, e === i ? r : e)
                    }
                    function l(t) {
                        return n(t),
                        o(this).get(t) !== i
                    }
                    function c() {
                        return o(this),
                        "[object WeakMap]"
                    }
                    a._name = "get",
                    u._name = "set",
                    l._name = "has",
                    c._name = "toString";
                    var m = ("" + Object).split("Object")
                      , v = f("toString", (function() {
                        return m[0] + p(this) + m[1]
                    }
                    ));
                    h(v, v);
                    var y = {
                        __proto__: []
                    }instanceof Array ? function(t) {
                        t.__proto__ = v
                    }
                    : function(t) {
                        h(t, v)
                    }
                    ;
                    return y(s),
                    [c, a, u, l, function(t) {
                        n(t);
                        var e = o(this)
                          , r = e.get(t) !== i;
                        return e.set(t, i),
                        r
                    }
                    ].forEach((function(t) {
                        h(s.prototype, t),
                        y(t)
                    }
                    )),
                    s
                }(new d)
                  , v = Object.create ? function() {
                    return Object.create(null)
                }
                : function() {
                    return {}
                }
                ;
                function y(t) {
                    var e = new m;
                    return t || (t = v),
                    function(n, r) {
                        return r || 2 === arguments.length ? e.set(n, r) : (r = e.get(n)) === i && (r = t(n),
                        e.set(n, r)),
                        r
                    }
                }
                void 0 !== e ? e.exports = m : void 0 !== n ? n.WeakMap = m : "WeakMap"in t || (t.WeakMap = m),
                m.createStorage = y,
                t.WeakMap && (t.WeakMap.createStorage = y)
            }(function() {
                return this
            }())
        }
        , {}],
        17: [function(t, e, n) {
            /*!
 * Knockout ES5 plugin - https://github.com/SteveSanderson/knockout-es5
 * Copyright (c) Steve Sanderson
 * MIT license
 */
            !function(r, i) {
                "use strict";
                var o, s, a, u;
                function l(t, e) {
                    if (!t || "object" != typeof t)
                        throw new Error("When calling ko.track, you must pass an object as the first parameter.");
                    var n = c(t, !0);
                    return (e = e || Object.getOwnPropertyNames(t)).forEach((function(e) {
                        if (!(e in n) && !1 !== Object.getOwnPropertyDescriptor(t, e).configurable) {
                            var r = t[e]
                              , i = Array.isArray(r)
                              , s = o.isObservable(r) ? r : i ? o.observableArray(r) : o.observable(r);
                            Object.defineProperty(t, e, {
                                configurable: !0,
                                enumerable: !0,
                                get: s,
                                set: o.isWriteableObservable(s) ? s : undefined
                            }),
                            n[e] = s,
                            i && function(t, e) {
                                var n = null;
                                t.computed((function() {
                                    n && (n.dispose(),
                                    n = null);
                                    var r = e();
                                    r instanceof Array && (n = function(t, e, n) {
                                        return function(t, e) {
                                            a || (a = u());
                                            var n = a.get(e);
                                            if (!n) {
                                                n = new t.subscribable,
                                                a.set(e, n);
                                                var r = {};
                                                !function(t, e, n) {
                                                    ["pop", "push", "reverse", "shift", "sort", "splice", "unshift"].forEach((function(r) {
                                                        var i = t[r];
                                                        t[r] = function() {
                                                            var t = i.apply(this, arguments);
                                                            return !0 !== n.pause && e.notifySubscribers(this),
                                                            t
                                                        }
                                                    }
                                                    ))
                                                }(e, n, r),
                                                function(t, e, n, r) {
                                                    ["remove", "removeAll", "destroy", "destroyAll", "replace"].forEach((function(i) {
                                                        Object.defineProperty(e, i, {
                                                            enumerable: !1,
                                                            value: function() {
                                                                var o;
                                                                r.pause = !0;
                                                                try {
                                                                    o = t.observableArray.fn[i].apply(t.observableArray(e), arguments)
                                                                } finally {
                                                                    r.pause = !1
                                                                }
                                                                return n.notifySubscribers(e),
                                                                o
                                                            }
                                                        })
                                                    }
                                                    ))
                                                }(t, e, n, r)
                                            }
                                            return n
                                        }(t, n).subscribe(e)
                                    }(t, e, r))
                                }
                                ))
                            }(o, s)
                        }
                    }
                    )),
                    t
                }
                function c(t, e) {
                    s || (s = u());
                    var n = s.get(t);
                    return !n && e && (n = {},
                    s.set(t, n)),
                    n
                }
                function h(t, e) {
                    if (s)
                        if (1 === arguments.length)
                            s.delete(t);
                        else {
                            var n = c(t, !1);
                            n && e.forEach((function(t) {
                                delete n[t]
                            }
                            ))
                        }
                }
                function p(t, e, n) {
                    var r = {
                        owner: t,
                        deferEvaluation: !0
                    };
                    if ("function" == typeof n)
                        r.read = n;
                    else {
                        if ("value"in n)
                            throw new Error('For ko.defineProperty, you must not specify a "value" for the property. You must provide a "get" function.');
                        if ("function" != typeof n.get)
                            throw new Error('For ko.defineProperty, the third parameter must be either an evaluator function, or an options object containing a function called "get".');
                        r.read = n.get,
                        r.write = n.set
                    }
                    return t[e] = this.computed(r),
                    l.call(this, t, [e]),
                    t
                }
                function f(t, e) {
                    if (!t || "object" != typeof t)
                        return null;
                    var n = c(t, !1);
                    return n && n[e] || null
                }
                function d(t, e) {
                    var n = f(t, e);
                    n && n.valueHasMutated()
                }
                function m(t) {
                    t.track = l,
                    t.untrack = h,
                    t.getObservable = f,
                    t.valueHasMutated = d,
                    t.defineProperty = p
                }
                !function() {
                    if ("object" == typeof n && "object" == typeof e) {
                        o = t("knockout");
                        var i = t("../lib/weakmap");
                        m(o),
                        u = function() {
                            return new i
                        }
                        ,
                        e.exports = o
                    } else
                        "ko"in r && (o = r.ko,
                        m(r.ko),
                        u = function() {
                            return new r.WeakMap
                        }
                        )
                }()
            }(this)
        }
        , {
            "../lib/weakmap": 16,
            knockout: 18
        }],
        18: [function(t, e, n) {
            /*!
 * Knockout JavaScript library v3.3.0
 * (c) Steven Sanderson - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
            !function(r) {
                var i = this || (0,
                eval)("this")
                  , o = i.document
                  , s = i.navigator
                  , a = i.jQuery
                  , u = i.JSON;
                !function(t, e) {
                    var n = void 0 !== t ? t : {};
                    n.exportSymbol = function(t, e) {
                        for (var r = t.split("."), i = n, o = 0; o < r.length - 1; o++)
                            i = i[r[o]];
                        i[r[r.length - 1]] = e
                    }
                    ,
                    n.exportProperty = function(t, e, n) {
                        t[e] = n
                    }
                    ,
                    n.version = "3.3.0",
                    n.exportSymbol("version", n.version),
                    n.utils = function() {
                        function t(t, e) {
                            for (var n in t)
                                t.hasOwnProperty(n) && e(n, t[n])
                        }
                        function e(t, e) {
                            if (e)
                                for (var n in e)
                                    e.hasOwnProperty(n) && (t[n] = e[n]);
                            return t
                        }
                        function l(t, e) {
                            return t.__proto__ = e,
                            t
                        }
                        var c = {
                            __proto__: []
                        }instanceof Array
                          , h = {}
                          , p = {};
                        h[s && /Firefox\/2/i.test(s.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"],
                        h.MouseEvents = ["click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "mouseenter", "mouseleave"],
                        t(h, (function(t, e) {
                            if (e.length)
                                for (var n = 0, r = e.length; n < r; n++)
                                    p[e[n]] = t
                        }
                        ));
                        var f = {
                            propertychange: !0
                        }
                          , d = o && function() {
                            for (var t = 3, e = o.createElement("div"), n = e.getElementsByTagName("i"); e.innerHTML = "\x3c!--[if gt IE " + ++t + "]><i></i><![endif]--\x3e",
                            n[0]; )
                                ;
                            return t > 4 ? t : r
                        }()
                          , m = /\S+/g;
                        function v(t, e, r, i) {
                            var o = t[e].match(m) || [];
                            n.utils.arrayForEach(r.match(m), (function(t) {
                                n.utils.addOrRemoveItem(o, t, i)
                            }
                            )),
                            t[e] = o.join(" ")
                        }
                        return {
                            fieldsIncludedWithJsonPost: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
                            arrayForEach: function(t, e) {
                                for (var n = 0, r = t.length; n < r; n++)
                                    e(t[n], n)
                            },
                            arrayIndexOf: function(t, e) {
                                if ("function" == typeof Array.prototype.indexOf)
                                    return Array.prototype.indexOf.call(t, e);
                                for (var n = 0, r = t.length; n < r; n++)
                                    if (t[n] === e)
                                        return n;
                                return -1
                            },
                            arrayFirst: function(t, e, n) {
                                for (var r = 0, i = t.length; r < i; r++)
                                    if (e.call(n, t[r], r))
                                        return t[r];
                                return null
                            },
                            arrayRemoveItem: function(t, e) {
                                var r = n.utils.arrayIndexOf(t, e);
                                r > 0 ? t.splice(r, 1) : 0 === r && t.shift()
                            },
                            arrayGetDistinctValues: function(t) {
                                for (var e = [], r = 0, i = (t = t || []).length; r < i; r++)
                                    n.utils.arrayIndexOf(e, t[r]) < 0 && e.push(t[r]);
                                return e
                            },
                            arrayMap: function(t, e) {
                                for (var n = [], r = 0, i = (t = t || []).length; r < i; r++)
                                    n.push(e(t[r], r));
                                return n
                            },
                            arrayFilter: function(t, e) {
                                for (var n = [], r = 0, i = (t = t || []).length; r < i; r++)
                                    e(t[r], r) && n.push(t[r]);
                                return n
                            },
                            arrayPushAll: function(t, e) {
                                if (e instanceof Array)
                                    t.push.apply(t, e);
                                else
                                    for (var n = 0, r = e.length; n < r; n++)
                                        t.push(e[n]);
                                return t
                            },
                            addOrRemoveItem: function(t, e, r) {
                                var i = n.utils.arrayIndexOf(n.utils.peekObservable(t), e);
                                i < 0 ? r && t.push(e) : r || t.splice(i, 1)
                            },
                            canSetPrototype: c,
                            extend: e,
                            setPrototypeOf: l,
                            setPrototypeOfOrExtend: c ? l : e,
                            objectForEach: t,
                            objectMap: function(t, e) {
                                if (!t)
                                    return t;
                                var n = {};
                                for (var r in t)
                                    t.hasOwnProperty(r) && (n[r] = e(t[r], r, t));
                                return n
                            },
                            emptyDomNode: function(t) {
                                for (; t.firstChild; )
                                    n.removeNode(t.firstChild)
                            },
                            moveCleanedNodesToContainerElement: function(t) {
                                for (var e = n.utils.makeArray(t), r = (e[0] && e[0].ownerDocument || o).createElement("div"), i = 0, s = e.length; i < s; i++)
                                    r.appendChild(n.cleanNode(e[i]));
                                return r
                            },
                            cloneNodes: function(t, e) {
                                for (var r = 0, i = t.length, o = []; r < i; r++) {
                                    var s = t[r].cloneNode(!0);
                                    o.push(e ? n.cleanNode(s) : s)
                                }
                                return o
                            },
                            setDomNodeChildren: function(t, e) {
                                if (n.utils.emptyDomNode(t),
                                e)
                                    for (var r = 0, i = e.length; r < i; r++)
                                        t.appendChild(e[r])
                            },
                            replaceDomNodes: function(t, e) {
                                var r = t.nodeType ? [t] : t;
                                if (r.length > 0) {
                                    for (var i = r[0], o = i.parentNode, s = 0, a = e.length; s < a; s++)
                                        o.insertBefore(e[s], i);
                                    for (s = 0,
                                    a = r.length; s < a; s++)
                                        n.removeNode(r[s])
                                }
                            },
                            fixUpContinuousNodeArray: function(t, e) {
                                if (t.length) {
                                    for (e = 8 === e.nodeType && e.parentNode || e; t.length && t[0].parentNode !== e; )
                                        t.splice(0, 1);
                                    if (t.length > 1) {
                                        var n = t[0]
                                          , r = t[t.length - 1];
                                        for (t.length = 0; n !== r; )
                                            if (t.push(n),
                                            !(n = n.nextSibling))
                                                return;
                                        t.push(r)
                                    }
                                }
                                return t
                            },
                            setOptionNodeSelectionState: function(t, e) {
                                d < 7 ? t.setAttribute("selected", e) : t.selected = e
                            },
                            stringTrim: function(t) {
                                return null === t || t === r ? "" : t.trim ? t.trim() : t.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                            },
                            stringStartsWith: function(t, e) {
                                return t = t || "",
                                !(e.length > t.length) && t.substring(0, e.length) === e
                            },
                            domNodeIsContainedBy: function(t, e) {
                                if (t === e)
                                    return !0;
                                if (11 === t.nodeType)
                                    return !1;
                                if (e.contains)
                                    return e.contains(3 === t.nodeType ? t.parentNode : t);
                                if (e.compareDocumentPosition)
                                    return 16 == (16 & e.compareDocumentPosition(t));
                                for (; t && t != e; )
                                    t = t.parentNode;
                                return !!t
                            },
                            domNodeIsAttachedToDocument: function(t) {
                                return n.utils.domNodeIsContainedBy(t, t.ownerDocument.documentElement)
                            },
                            anyDomNodeIsAttachedToDocument: function(t) {
                                return !!n.utils.arrayFirst(t, n.utils.domNodeIsAttachedToDocument)
                            },
                            tagNameLower: function(t) {
                                return t && t.tagName && t.tagName.toLowerCase()
                            },
                            registerEventHandler: function(t, e, r) {
                                var i = d && f[e];
                                if (!i && a)
                                    a(t).bind(e, r);
                                else if (i || "function" != typeof t.addEventListener) {
                                    if (void 0 === t.attachEvent)
                                        throw new Error("Browser doesn't support addEventListener or attachEvent");
                                    var o = function(e) {
                                        r.call(t, e)
                                    }
                                      , s = "on" + e;
                                    t.attachEvent(s, o),
                                    n.utils.domNodeDisposal.addDisposeCallback(t, (function() {
                                        t.detachEvent(s, o)
                                    }
                                    ))
                                } else
                                    t.addEventListener(e, r, !1)
                            },
                            triggerEvent: function(t, e) {
                                if (!t || !t.nodeType)
                                    throw new Error("element must be a DOM node when calling triggerEvent");
                                var r = function(t, e) {
                                    if ("input" !== n.utils.tagNameLower(t) || !t.type)
                                        return !1;
                                    if ("click" != e.toLowerCase())
                                        return !1;
                                    var r = t.type;
                                    return "checkbox" == r || "radio" == r
                                }(t, e);
                                if (a && !r)
                                    a(t).trigger(e);
                                else if ("function" == typeof o.createEvent) {
                                    if ("function" != typeof t.dispatchEvent)
                                        throw new Error("The supplied element doesn't support dispatchEvent");
                                    var s = p[e] || "HTMLEvents"
                                      , u = o.createEvent(s);
                                    u.initEvent(e, !0, !0, i, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, t),
                                    t.dispatchEvent(u)
                                } else if (r && t.click)
                                    t.click();
                                else {
                                    if (void 0 === t.fireEvent)
                                        throw new Error("Browser doesn't support triggering events");
                                    t.fireEvent("on" + e)
                                }
                            },
                            unwrapObservable: function(t) {
                                return n.isObservable(t) ? t() : t
                            },
                            peekObservable: function(t) {
                                return n.isObservable(t) ? t.peek() : t
                            },
                            toggleDomNodeCssClass: function(t, e, r) {
                                var i;
                                e && ("object" == typeof t.classList ? (i = t.classList[r ? "add" : "remove"],
                                n.utils.arrayForEach(e.match(m), (function(e) {
                                    i.call(t.classList, e)
                                }
                                ))) : "string" == typeof t.className.baseVal ? v(t.className, "baseVal", e, r) : v(t, "className", e, r))
                            },
                            setTextContent: function(t, e) {
                                var i = n.utils.unwrapObservable(e);
                                null !== i && i !== r || (i = "");
                                var o = n.virtualElements.firstChild(t);
                                !o || 3 != o.nodeType || n.virtualElements.nextSibling(o) ? n.virtualElements.setDomNodeChildren(t, [t.ownerDocument.createTextNode(i)]) : o.data = i,
                                n.utils.forceRefresh(t)
                            },
                            setElementName: function(t, e) {
                                if (t.name = e,
                                d <= 7)
                                    try {
                                        t.mergeAttributes(o.createElement("<input name='" + t.name + "'/>"), !1)
                                    } catch (t) {}
                            },
                            forceRefresh: function(t) {
                                if (d >= 9) {
                                    var e = 1 == t.nodeType ? t : t.parentNode;
                                    e.style && (e.style.zoom = e.style.zoom)
                                }
                            },
                            ensureSelectElementIsRenderedCorrectly: function(t) {
                                if (d) {
                                    var e = t.style.width;
                                    t.style.width = 0,
                                    t.style.width = e
                                }
                            },
                            range: function(t, e) {
                                t = n.utils.unwrapObservable(t),
                                e = n.utils.unwrapObservable(e);
                                for (var r = [], i = t; i <= e; i++)
                                    r.push(i);
                                return r
                            },
                            makeArray: function(t) {
                                for (var e = [], n = 0, r = t.length; n < r; n++)
                                    e.push(t[n]);
                                return e
                            },
                            isIe6: 6 === d,
                            isIe7: 7 === d,
                            ieVersion: d,
                            getFormFields: function(t, e) {
                                for (var r = n.utils.makeArray(t.getElementsByTagName("input")).concat(n.utils.makeArray(t.getElementsByTagName("textarea"))), i = "string" == typeof e ? function(t) {
                                    return t.name === e
                                }
                                : function(t) {
                                    return e.test(t.name)
                                }
                                , o = [], s = r.length - 1; s >= 0; s--)
                                    i(r[s]) && o.push(r[s]);
                                return o
                            },
                            parseJson: function(t) {
                                return "string" == typeof t && (t = n.utils.stringTrim(t)) ? u && u.parse ? u.parse(t) : new Function("return " + t)() : null
                            },
                            stringifyJson: function(t, e, r) {
                                if (!u || !u.stringify)
                                    throw new Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                                return u.stringify(n.utils.unwrapObservable(t), e, r)
                            },
                            postJson: function(e, r, i) {
                                var s = (i = i || {}).params || {}
                                  , a = i.includeFields || this.fieldsIncludedWithJsonPost
                                  , u = e;
                                if ("object" == typeof e && "form" === n.utils.tagNameLower(e)) {
                                    var l = e;
                                    u = l.action;
                                    for (var c = a.length - 1; c >= 0; c--)
                                        for (var h = n.utils.getFormFields(l, a[c]), p = h.length - 1; p >= 0; p--)
                                            s[h[p].name] = h[p].value
                                }
                                r = n.utils.unwrapObservable(r);
                                var f = o.createElement("form");
                                for (var d in f.style.display = "none",
                                f.action = u,
                                f.method = "post",
                                r) {
                                    var m = o.createElement("input");
                                    m.type = "hidden",
                                    m.name = d,
                                    m.value = n.utils.stringifyJson(n.utils.unwrapObservable(r[d])),
                                    f.appendChild(m)
                                }
                                t(s, (function(t, e) {
                                    var n = o.createElement("input");
                                    n.type = "hidden",
                                    n.name = t,
                                    n.value = e,
                                    f.appendChild(n)
                                }
                                )),
                                o.body.appendChild(f),
                                i.submitter ? i.submitter(f) : f.submit(),
                                setTimeout((function() {
                                    f.parentNode.removeChild(f)
                                }
                                ), 0)
                            }
                        }
                    }(),
                    n.exportSymbol("utils", n.utils),
                    n.exportSymbol("utils.arrayForEach", n.utils.arrayForEach),
                    n.exportSymbol("utils.arrayFirst", n.utils.arrayFirst),
                    n.exportSymbol("utils.arrayFilter", n.utils.arrayFilter),
                    n.exportSymbol("utils.arrayGetDistinctValues", n.utils.arrayGetDistinctValues),
                    n.exportSymbol("utils.arrayIndexOf", n.utils.arrayIndexOf),
                    n.exportSymbol("utils.arrayMap", n.utils.arrayMap),
                    n.exportSymbol("utils.arrayPushAll", n.utils.arrayPushAll),
                    n.exportSymbol("utils.arrayRemoveItem", n.utils.arrayRemoveItem),
                    n.exportSymbol("utils.extend", n.utils.extend),
                    n.exportSymbol("utils.fieldsIncludedWithJsonPost", n.utils.fieldsIncludedWithJsonPost),
                    n.exportSymbol("utils.getFormFields", n.utils.getFormFields),
                    n.exportSymbol("utils.peekObservable", n.utils.peekObservable),
                    n.exportSymbol("utils.postJson", n.utils.postJson),
                    n.exportSymbol("utils.parseJson", n.utils.parseJson),
                    n.exportSymbol("utils.registerEventHandler", n.utils.registerEventHandler),
                    n.exportSymbol("utils.stringifyJson", n.utils.stringifyJson),
                    n.exportSymbol("utils.range", n.utils.range),
                    n.exportSymbol("utils.toggleDomNodeCssClass", n.utils.toggleDomNodeCssClass),
                    n.exportSymbol("utils.triggerEvent", n.utils.triggerEvent),
                    n.exportSymbol("utils.unwrapObservable", n.utils.unwrapObservable),
                    n.exportSymbol("utils.objectForEach", n.utils.objectForEach),
                    n.exportSymbol("utils.addOrRemoveItem", n.utils.addOrRemoveItem),
                    n.exportSymbol("utils.setTextContent", n.utils.setTextContent),
                    n.exportSymbol("unwrap", n.utils.unwrapObservable),
                    Function.prototype.bind || (Function.prototype.bind = function(t) {
                        var e = this;
                        if (1 === arguments.length)
                            return function() {
                                return e.apply(t, arguments)
                            }
                            ;
                        var n = Array.prototype.slice.call(arguments, 1);
                        return function() {
                            var r = n.slice(0);
                            return r.push.apply(r, arguments),
                            e.apply(t, r)
                        }
                    }
                    ),
                    n.utils.domData = new function() {
                        var t = 0
                          , e = "__ko__" + (new Date).getTime()
                          , n = {};
                        function i(i, o) {
                            var s = i[e];
                            if (!s || "null" === s || !n[s]) {
                                if (!o)
                                    return r;
                                s = i[e] = "ko" + t++,
                                n[s] = {}
                            }
                            return n[s]
                        }
                        return {
                            get: function(t, e) {
                                var n = i(t, !1);
                                return n === r ? r : n[e]
                            },
                            set: function(t, e, n) {
                                n === r && i(t, !1) === r || (i(t, !0)[e] = n)
                            },
                            clear: function(t) {
                                var r = t[e];
                                return !!r && (delete n[r],
                                t[e] = null,
                                !0)
                            },
                            nextKey: function() {
                                return t++ + e
                            }
                        }
                    }
                    ,
                    n.exportSymbol("utils.domData", n.utils.domData),
                    n.exportSymbol("utils.domData.clear", n.utils.domData.clear),
                    n.utils.domNodeDisposal = new function() {
                        var t = n.utils.domData.nextKey()
                          , e = {
                            1: !0,
                            8: !0,
                            9: !0
                        }
                          , i = {
                            1: !0,
                            9: !0
                        };
                        function o(e, i) {
                            var o = n.utils.domData.get(e, t);
                            return o === r && i && (o = [],
                            n.utils.domData.set(e, t, o)),
                            o
                        }
                        function s(t) {
                            var e = o(t, !1);
                            if (e) {
                                e = e.slice(0);
                                for (var r = 0; r < e.length; r++)
                                    e[r](t)
                            }
                            n.utils.domData.clear(t),
                            n.utils.domNodeDisposal.cleanExternalData(t),
                            i[t.nodeType] && function(t) {
                                for (var e, n = t.firstChild; e = n; )
                                    n = e.nextSibling,
                                    8 === e.nodeType && s(e)
                            }(t)
                        }
                        return {
                            addDisposeCallback: function(t, e) {
                                if ("function" != typeof e)
                                    throw new Error("Callback must be a function");
                                o(t, !0).push(e)
                            },
                            removeDisposeCallback: function(e, i) {
                                var s = o(e, !1);
                                s && (n.utils.arrayRemoveItem(s, i),
                                0 == s.length && function(e) {
                                    n.utils.domData.set(e, t, r)
                                }(e))
                            },
                            cleanNode: function(t) {
                                if (e[t.nodeType] && (s(t),
                                i[t.nodeType])) {
                                    var r = [];
                                    n.utils.arrayPushAll(r, t.getElementsByTagName("*"));
                                    for (var o = 0, a = r.length; o < a; o++)
                                        s(r[o])
                                }
                                return t
                            },
                            removeNode: function(t) {
                                n.cleanNode(t),
                                t.parentNode && t.parentNode.removeChild(t)
                            },
                            cleanExternalData: function(t) {
                                a && "function" == typeof a.cleanData && a.cleanData([t])
                            }
                        }
                    }
                    ,
                    n.cleanNode = n.utils.domNodeDisposal.cleanNode,
                    n.removeNode = n.utils.domNodeDisposal.removeNode,
                    n.exportSymbol("cleanNode", n.cleanNode),
                    n.exportSymbol("removeNode", n.removeNode),
                    n.exportSymbol("utils.domNodeDisposal", n.utils.domNodeDisposal),
                    n.exportSymbol("utils.domNodeDisposal.addDisposeCallback", n.utils.domNodeDisposal.addDisposeCallback),
                    n.exportSymbol("utils.domNodeDisposal.removeDisposeCallback", n.utils.domNodeDisposal.removeDisposeCallback),
                    n.utils.parseHtmlFragment = function(t, e) {
                        return a ? function(t, e) {
                            if (a.parseHTML)
                                return a.parseHTML(t, e) || [];
                            var n = a.clean([t], e);
                            if (n && n[0]) {
                                for (var r = n[0]; r.parentNode && 11 !== r.parentNode.nodeType; )
                                    r = r.parentNode;
                                r.parentNode && r.parentNode.removeChild(r)
                            }
                            return n
                        }(t, e) : function(t, e) {
                            e || (e = o);
                            var r = e.parentWindow || e.defaultView || i
                              , s = n.utils.stringTrim(t).toLowerCase()
                              , a = e.createElement("div")
                              , u = s.match(/^<(thead|tbody|tfoot)/) && [1, "<table>", "</table>"] || !s.indexOf("<tr") && [2, "<table><tbody>", "</tbody></table>"] || (!s.indexOf("<td") || !s.indexOf("<th")) && [3, "<table><tbody><tr>", "</tr></tbody></table>"] || [0, "", ""]
                              , l = "ignored<div>" + u[1] + t + u[2] + "</div>";
                            for ("function" == typeof r.innerShiv ? a.appendChild(r.innerShiv(l)) : a.innerHTML = l; u[0]--; )
                                a = a.lastChild;
                            return n.utils.makeArray(a.lastChild.childNodes)
                        }(t, e)
                    }
                    ,
                    n.utils.setHtml = function(t, e) {
                        if (n.utils.emptyDomNode(t),
                        null !== (e = n.utils.unwrapObservable(e)) && e !== r)
                            if ("string" != typeof e && (e = e.toString()),
                            a)
                                a(t).html(e);
                            else
                                for (var i = n.utils.parseHtmlFragment(e, t.ownerDocument), o = 0; o < i.length; o++)
                                    t.appendChild(i[o])
                    }
                    ,
                    n.exportSymbol("utils.parseHtmlFragment", n.utils.parseHtmlFragment),
                    n.exportSymbol("utils.setHtml", n.utils.setHtml),
                    n.memoization = function() {
                        var t = {};
                        function e() {
                            return (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1)
                        }
                        function i(t, e) {
                            if (t)
                                if (8 == t.nodeType) {
                                    var r = n.memoization.parseMemoText(t.nodeValue);
                                    null != r && e.push({
                                        domNode: t,
                                        memoId: r
                                    })
                                } else if (1 == t.nodeType)
                                    for (var o = 0, s = t.childNodes, a = s.length; o < a; o++)
                                        i(s[o], e)
                        }
                        return {
                            memoize: function(n) {
                                if ("function" != typeof n)
                                    throw new Error("You can only pass a function to ko.memoization.memoize()");
                                var r = e() + e();
                                return t[r] = n,
                                "\x3c!--[ko_memo:" + r + "]--\x3e"
                            },
                            unmemoize: function(e, n) {
                                var i = t[e];
                                if (i === r)
                                    throw new Error("Couldn't find any memo with ID " + e + ". Perhaps it's already been unmemoized.");
                                try {
                                    return i.apply(null, n || []),
                                    !0
                                } finally {
                                    delete t[e]
                                }
                            },
                            unmemoizeDomNodeAndDescendants: function(t, e) {
                                var r = [];
                                i(t, r);
                                for (var o = 0, s = r.length; o < s; o++) {
                                    var a = r[o].domNode
                                      , u = [a];
                                    e && n.utils.arrayPushAll(u, e),
                                    n.memoization.unmemoize(r[o].memoId, u),
                                    a.nodeValue = "",
                                    a.parentNode && a.parentNode.removeChild(a)
                                }
                            },
                            parseMemoText: function(t) {
                                var e = t.match(/^\[ko_memo\:(.*?)\]$/);
                                return e ? e[1] : null
                            }
                        }
                    }(),
                    n.exportSymbol("memoization", n.memoization),
                    n.exportSymbol("memoization.memoize", n.memoization.memoize),
                    n.exportSymbol("memoization.unmemoize", n.memoization.unmemoize),
                    n.exportSymbol("memoization.parseMemoText", n.memoization.parseMemoText),
                    n.exportSymbol("memoization.unmemoizeDomNodeAndDescendants", n.memoization.unmemoizeDomNodeAndDescendants),
                    n.extenders = {
                        throttle: function(t, e) {
                            t.throttleEvaluation = e;
                            var r = null;
                            return n.dependentObservable({
                                read: t,
                                write: function(n) {
                                    clearTimeout(r),
                                    r = setTimeout((function() {
                                        t(n)
                                    }
                                    ), e)
                                }
                            })
                        },
                        rateLimit: function(t, e) {
                            var n, r, i;
                            "number" == typeof e ? n = e : (n = e.timeout,
                            r = e.method),
                            i = "notifyWhenChangesStop" == r ? p : h,
                            t.limit((function(t) {
                                return i(t, n)
                            }
                            ))
                        },
                        notify: function(t, e) {
                            t.equalityComparer = "always" == e ? null : c
                        }
                    };
                    var l = {
                        undefined: 1,
                        boolean: 1,
                        number: 1,
                        string: 1
                    };
                    function c(t, e) {
                        return !(null !== t && !(typeof t in l)) && t === e
                    }
                    function h(t, e) {
                        var n;
                        return function() {
                            n || (n = setTimeout((function() {
                                n = r,
                                t()
                            }
                            ), e))
                        }
                    }
                    function p(t, e) {
                        var n;
                        return function() {
                            clearTimeout(n),
                            n = setTimeout(t, e)
                        }
                    }
                    n.exportSymbol("extenders", n.extenders),
                    n.subscription = function(t, e, r) {
                        this._target = t,
                        this.callback = e,
                        this.disposeCallback = r,
                        this.isDisposed = !1,
                        n.exportProperty(this, "dispose", this.dispose)
                    }
                    ,
                    n.subscription.prototype.dispose = function() {
                        this.isDisposed = !0,
                        this.disposeCallback()
                    }
                    ,
                    n.subscribable = function() {
                        n.utils.setPrototypeOfOrExtend(this, n.subscribable.fn),
                        this._subscriptions = {},
                        this._versionNumber = 1
                    }
                    ;
                    var f = "change"
                      , d = {
                        subscribe: function(t, e, r) {
                            var i = this;
                            r = r || f;
                            var o = e ? t.bind(e) : t
                              , s = new n.subscription(i,o,(function() {
                                n.utils.arrayRemoveItem(i._subscriptions[r], s),
                                i.afterSubscriptionRemove && i.afterSubscriptionRemove(r)
                            }
                            ));
                            return i.beforeSubscriptionAdd && i.beforeSubscriptionAdd(r),
                            i._subscriptions[r] || (i._subscriptions[r] = []),
                            i._subscriptions[r].push(s),
                            s
                        },
                        notifySubscribers: function(t, e) {
                            if ((e = e || f) === f && this.updateVersion(),
                            this.hasSubscriptionsForEvent(e))
                                try {
                                    n.dependencyDetection.begin();
                                    for (var r, i = this._subscriptions[e].slice(0), o = 0; r = i[o]; ++o)
                                        r.isDisposed || r.callback(t)
                                } finally {
                                    n.dependencyDetection.end()
                                }
                        },
                        getVersion: function() {
                            return this._versionNumber
                        },
                        hasChanged: function(t) {
                            return this.getVersion() !== t
                        },
                        updateVersion: function() {
                            ++this._versionNumber
                        },
                        limit: function(t) {
                            var e, r, i, o = this, s = n.isObservable(o), a = "beforeChange";
                            o._origNotifySubscribers || (o._origNotifySubscribers = o.notifySubscribers,
                            o.notifySubscribers = function(t, e) {
                                e && e !== f ? e === a ? o._rateLimitedBeforeChange(t) : o._origNotifySubscribers(t, e) : o._rateLimitedChange(t)
                            }
                            );
                            var u = t((function() {
                                s && i === o && (i = o()),
                                e = !1,
                                o.isDifferent(r, i) && o._origNotifySubscribers(r = i)
                            }
                            ));
                            o._rateLimitedChange = function(t) {
                                e = !0,
                                i = t,
                                u()
                            }
                            ,
                            o._rateLimitedBeforeChange = function(t) {
                                e || (r = t,
                                o._origNotifySubscribers(t, a))
                            }
                        },
                        hasSubscriptionsForEvent: function(t) {
                            return this._subscriptions[t] && this._subscriptions[t].length
                        },
                        getSubscriptionsCount: function(t) {
                            if (t)
                                return this._subscriptions[t] && this._subscriptions[t].length || 0;
                            var e = 0;
                            return n.utils.objectForEach(this._subscriptions, (function(t, n) {
                                e += n.length
                            }
                            )),
                            e
                        },
                        isDifferent: function(t, e) {
                            return !this.equalityComparer || !this.equalityComparer(t, e)
                        },
                        extend: function(t) {
                            var e = this;
                            return t && n.utils.objectForEach(t, (function(t, r) {
                                var i = n.extenders[t];
                                "function" == typeof i && (e = i(e, r) || e)
                            }
                            )),
                            e
                        }
                    };
                    n.exportProperty(d, "subscribe", d.subscribe),
                    n.exportProperty(d, "extend", d.extend),
                    n.exportProperty(d, "getSubscriptionsCount", d.getSubscriptionsCount),
                    n.utils.canSetPrototype && n.utils.setPrototypeOf(d, Function.prototype),
                    n.subscribable.fn = d,
                    n.isSubscribable = function(t) {
                        return null != t && "function" == typeof t.subscribe && "function" == typeof t.notifySubscribers
                    }
                    ,
                    n.exportSymbol("subscribable", n.subscribable),
                    n.exportSymbol("isSubscribable", n.isSubscribable),
                    n.computedContext = n.dependencyDetection = function() {
                        var t, e = [], r = 0;
                        function i(n) {
                            e.push(t),
                            t = n
                        }
                        function o() {
                            t = e.pop()
                        }
                        return {
                            begin: i,
                            end: o,
                            registerDependency: function(e) {
                                if (t) {
                                    if (!n.isSubscribable(e))
                                        throw new Error("Only subscribable things can act as dependencies");
                                    t.callback(e, e._id || (e._id = ++r))
                                }
                            },
                            ignore: function(t, e, n) {
                                try {
                                    return i(),
                                    t.apply(e, n || [])
                                } finally {
                                    o()
                                }
                            },
                            getDependenciesCount: function() {
                                if (t)
                                    return t.computed.getDependenciesCount()
                            },
                            isInitial: function() {
                                if (t)
                                    return t.isInitial
                            }
                        }
                    }(),
                    n.exportSymbol("computedContext", n.computedContext),
                    n.exportSymbol("computedContext.getDependenciesCount", n.computedContext.getDependenciesCount),
                    n.exportSymbol("computedContext.isInitial", n.computedContext.isInitial),
                    n.exportSymbol("computedContext.isSleeping", n.computedContext.isSleeping),
                    n.exportSymbol("ignoreDependencies", n.ignoreDependencies = n.dependencyDetection.ignore),
                    n.observable = function(t) {
                        var e = t;
                        function r() {
                            return arguments.length > 0 ? (r.isDifferent(e, arguments[0]) && (r.valueWillMutate(),
                            e = arguments[0],
                            r._latestValue = e,
                            r.valueHasMutated()),
                            this) : (n.dependencyDetection.registerDependency(r),
                            e)
                        }
                        return n.subscribable.call(r),
                        n.utils.setPrototypeOfOrExtend(r, n.observable.fn),
                        r._latestValue = e,
                        r.peek = function() {
                            return e
                        }
                        ,
                        r.valueHasMutated = function() {
                            r.notifySubscribers(e)
                        }
                        ,
                        r.valueWillMutate = function() {
                            r.notifySubscribers(e, "beforeChange")
                        }
                        ,
                        n.exportProperty(r, "peek", r.peek),
                        n.exportProperty(r, "valueHasMutated", r.valueHasMutated),
                        n.exportProperty(r, "valueWillMutate", r.valueWillMutate),
                        r
                    }
                    ,
                    n.observable.fn = {
                        equalityComparer: c
                    };
                    var m = n.observable.protoProperty = "__ko_proto__";
                    n.observable.fn[m] = n.observable,
                    n.utils.canSetPrototype && n.utils.setPrototypeOf(n.observable.fn, n.subscribable.fn),
                    n.hasPrototype = function(t, e) {
                        return null !== t && t !== r && t[m] !== r && (t[m] === e || n.hasPrototype(t[m], e))
                    }
                    ,
                    n.isObservable = function(t) {
                        return n.hasPrototype(t, n.observable)
                    }
                    ,
                    n.isWriteableObservable = function(t) {
                        return "function" == typeof t && t[m] === n.observable || !("function" != typeof t || t[m] !== n.dependentObservable || !t.hasWriteFunction)
                    }
                    ,
                    n.exportSymbol("observable", n.observable),
                    n.exportSymbol("isObservable", n.isObservable),
                    n.exportSymbol("isWriteableObservable", n.isWriteableObservable),
                    n.exportSymbol("isWritableObservable", n.isWriteableObservable),
                    n.observableArray = function(t) {
                        if ("object" != typeof (t = t || []) || !("length"in t))
                            throw new Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
                        var e = n.observable(t);
                        return n.utils.setPrototypeOfOrExtend(e, n.observableArray.fn),
                        e.extend({
                            trackArrayChanges: !0
                        })
                    }
                    ,
                    n.observableArray.fn = {
                        remove: function(t) {
                            for (var e = this.peek(), r = [], i = "function" != typeof t || n.isObservable(t) ? function(e) {
                                return e === t
                            }
                            : t, o = 0; o < e.length; o++) {
                                var s = e[o];
                                i(s) && (0 === r.length && this.valueWillMutate(),
                                r.push(s),
                                e.splice(o, 1),
                                o--)
                            }
                            return r.length && this.valueHasMutated(),
                            r
                        },
                        removeAll: function(t) {
                            if (t === r) {
                                var e = this.peek()
                                  , i = e.slice(0);
                                return this.valueWillMutate(),
                                e.splice(0, e.length),
                                this.valueHasMutated(),
                                i
                            }
                            return t ? this.remove((function(e) {
                                return n.utils.arrayIndexOf(t, e) >= 0
                            }
                            )) : []
                        },
                        destroy: function(t) {
                            var e = this.peek()
                              , r = "function" != typeof t || n.isObservable(t) ? function(e) {
                                return e === t
                            }
                            : t;
                            this.valueWillMutate();
                            for (var i = e.length - 1; i >= 0; i--)
                                r(e[i]) && (e[i]._destroy = !0);
                            this.valueHasMutated()
                        },
                        destroyAll: function(t) {
                            return t === r ? this.destroy((function() {
                                return !0
                            }
                            )) : t ? this.destroy((function(e) {
                                return n.utils.arrayIndexOf(t, e) >= 0
                            }
                            )) : []
                        },
                        indexOf: function(t) {
                            var e = this();
                            return n.utils.arrayIndexOf(e, t)
                        },
                        replace: function(t, e) {
                            var n = this.indexOf(t);
                            n >= 0 && (this.valueWillMutate(),
                            this.peek()[n] = e,
                            this.valueHasMutated())
                        }
                    },
                    n.utils.arrayForEach(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], (function(t) {
                        n.observableArray.fn[t] = function() {
                            var e = this.peek();
                            this.valueWillMutate(),
                            this.cacheDiffForKnownOperation(e, t, arguments);
                            var n = e[t].apply(e, arguments);
                            return this.valueHasMutated(),
                            n
                        }
                    }
                    )),
                    n.utils.arrayForEach(["slice"], (function(t) {
                        n.observableArray.fn[t] = function() {
                            var e = this();
                            return e[t].apply(e, arguments)
                        }
                    }
                    )),
                    n.utils.canSetPrototype && n.utils.setPrototypeOf(n.observableArray.fn, n.observable.fn),
                    n.exportSymbol("observableArray", n.observableArray);
                    var v = "arrayChange";
                    n.extenders.trackArrayChanges = function(t) {
                        if (!t.cacheDiffForKnownOperation) {
                            var e, r = !1, i = null, o = 0, s = t.beforeSubscriptionAdd, a = t.afterSubscriptionRemove;
                            t.beforeSubscriptionAdd = function(a) {
                                s && s.call(t, a),
                                a === v && function() {
                                    if (!r) {
                                        r = !0;
                                        var s = t.notifySubscribers;
                                        t.notifySubscribers = function(t, e) {
                                            return e && e !== f || ++o,
                                            s.apply(this, arguments)
                                        }
                                        ;
                                        var a = [].concat(t.peek() || []);
                                        i = null,
                                        e = t.subscribe((function(e) {
                                            if (e = [].concat(e || []),
                                            t.hasSubscriptionsForEvent(v))
                                                var r = function(t, e) {
                                                    return (!i || o > 1) && (i = n.utils.compareArrays(t, e, {
                                                        sparse: !0
                                                    })),
                                                    i
                                                }(a, e);
                                            a = e,
                                            i = null,
                                            o = 0,
                                            r && r.length && t.notifySubscribers(r, v)
                                        }
                                        ))
                                    }
                                }()
                            }
                            ,
                            t.afterSubscriptionRemove = function(n) {
                                a && a.call(t, n),
                                n !== v || t.hasSubscriptionsForEvent(v) || (e.dispose(),
                                r = !1)
                            }
                            ,
                            t.cacheDiffForKnownOperation = function(t, e, s) {
                                if (r && !o) {
                                    var a = []
                                      , u = t.length
                                      , l = s.length
                                      , c = 0;
                                    switch (e) {
                                    case "push":
                                        c = u;
                                    case "unshift":
                                        for (var h = 0; h < l; h++)
                                            _("added", s[h], c + h);
                                        break;
                                    case "pop":
                                        c = u - 1;
                                    case "shift":
                                        u && _("deleted", t[c], c);
                                        break;
                                    case "splice":
                                        for (var p = Math.min(Math.max(0, s[0] < 0 ? u + s[0] : s[0]), u), f = 1 === l ? u : Math.min(p + (s[1] || 0), u), d = p + l - 2, m = Math.max(f, d), v = [], y = [], g = (h = p,
                                        2); h < m; ++h,
                                        ++g)
                                            h < f && y.push(_("deleted", t[h], h)),
                                            h < d && v.push(_("added", s[g], h));
                                        n.utils.findMovesInArrayComparison(y, v);
                                        break;
                                    default:
                                        return
                                    }
                                    i = a
                                }
                                function _(t, e, n) {
                                    return a[a.length] = {
                                        status: t,
                                        value: e,
                                        index: n
                                    }
                                }
                            }
                        }
                    }
                    ,
                    n.computed = n.dependentObservable = function(t, e, i) {
                        var o, s = !0, a = !1, u = !1, l = !1, c = t, h = !1, p = !1;
                        if (c && "object" == typeof c ? c = (i = c).read : (i = i || {},
                        c || (c = i.read)),
                        "function" != typeof c)
                            throw new Error("Pass a function that returns the value of the ko.computed");
                        function f(t, e, n) {
                            if (h && e === g)
                                throw Error("A 'pure' computed must not be called recursively");
                            C[t] = n,
                            n._order = O++,
                            n._version = e.getVersion()
                        }
                        function d() {
                            var t, e;
                            for (t in C)
                                if (C.hasOwnProperty(t) && (e = C[t])._target.hasChanged(e._version))
                                    return !0
                        }
                        function m() {
                            !p && C && n.utils.objectForEach(C, (function(t, e) {
                                e.dispose && e.dispose()
                            }
                            )),
                            C = null,
                            O = 0,
                            l = !0,
                            s = !1,
                            p = !1
                        }
                        function v() {
                            var t = g.throttleEvaluation;
                            t && t >= 0 ? (clearTimeout(P),
                            P = setTimeout((function() {
                                y(!0)
                            }
                            ), t)) : g._evalRateLimited ? g._evalRateLimited() : y(!0)
                        }
                        function y(t) {
                            if (!a && !l) {
                                if (S && S()) {
                                    if (!u)
                                        return void T()
                                } else
                                    u = !1;
                                a = !0;
                                try {
                                    var i = C
                                      , d = O
                                      , m = h ? r : !O;
                                    n.dependencyDetection.begin({
                                        callback: function(t, e) {
                                            l || (d && i[e] ? (f(e, t, i[e]),
                                            delete i[e],
                                            --d) : C[e] || f(e, t, p ? {
                                                _target: t
                                            } : t.subscribe(v)))
                                        },
                                        computed: g,
                                        isInitial: m
                                    }),
                                    C = {},
                                    O = 0;
                                    try {
                                        var y = e ? c.call(e) : c()
                                    } finally {
                                        n.dependencyDetection.end(),
                                        d && !p && n.utils.objectForEach(i, (function(t, e) {
                                            e.dispose && e.dispose()
                                        }
                                        )),
                                        s = !1
                                    }
                                    g.isDifferent(o, y) && (p || w(o, "beforeChange"),
                                    o = y,
                                    g._latestValue = o,
                                    p ? g.updateVersion() : t && w(o)),
                                    m && w(o, "awake")
                                } finally {
                                    a = !1
                                }
                                O || T()
                            }
                        }
                        function g() {
                            if (arguments.length > 0) {
                                if ("function" != typeof x)
                                    throw new Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                                return x.apply(e, arguments),
                                this
                            }
                            return n.dependencyDetection.registerDependency(g),
                            (s || p && d()) && y(),
                            o
                        }
                        function _() {
                            return (s && !O || p && d()) && y(),
                            o
                        }
                        function b() {
                            return s || O > 0
                        }
                        function w(t, e) {
                            g.notifySubscribers(t, e)
                        }
                        var x = i.write
                          , E = i.disposeWhenNodeIsRemoved || i.disposeWhenNodeIsRemoved || null
                          , M = i.disposeWhen || i.disposeWhen
                          , S = M
                          , T = m
                          , C = {}
                          , O = 0
                          , P = null;
                        e || (e = i.owner),
                        n.subscribable.call(g),
                        n.utils.setPrototypeOfOrExtend(g, n.dependentObservable.fn),
                        g.peek = _,
                        g.getDependenciesCount = function() {
                            return O
                        }
                        ,
                        g.hasWriteFunction = "function" == typeof x,
                        g.dispose = function() {
                            T()
                        }
                        ,
                        g.isActive = b;
                        var L = g.limit;
                        return g.limit = function(t) {
                            L.call(g, t),
                            g._evalRateLimited = function() {
                                g._rateLimitedBeforeChange(o),
                                s = !0,
                                g._rateLimitedChange(g)
                            }
                        }
                        ,
                        i.pure ? (h = !0,
                        p = !0,
                        g.beforeSubscriptionAdd = function(t) {
                            if (!l && p && "change" == t) {
                                if (p = !1,
                                s || d())
                                    C = null,
                                    O = 0,
                                    s = !0,
                                    y();
                                else {
                                    var e = [];
                                    n.utils.objectForEach(C, (function(t, n) {
                                        e[n._order] = t
                                    }
                                    )),
                                    n.utils.arrayForEach(e, (function(t, e) {
                                        var n = C[t]
                                          , r = n._target.subscribe(v);
                                        r._order = e,
                                        r._version = n._version,
                                        C[t] = r
                                    }
                                    ))
                                }
                                l || w(o, "awake")
                            }
                        }
                        ,
                        g.afterSubscriptionRemove = function(t) {
                            l || "change" != t || g.hasSubscriptionsForEvent("change") || (n.utils.objectForEach(C, (function(t, e) {
                                e.dispose && (C[t] = {
                                    _target: e._target,
                                    _order: e._order,
                                    _version: e._version
                                },
                                e.dispose())
                            }
                            )),
                            p = !0,
                            w(r, "asleep"))
                        }
                        ,
                        g._originalGetVersion = g.getVersion,
                        g.getVersion = function() {
                            return p && (s || d()) && y(),
                            g._originalGetVersion()
                        }
                        ) : i.deferEvaluation && (g.beforeSubscriptionAdd = function(t) {
                            "change" != t && "beforeChange" != t || _()
                        }
                        ),
                        n.exportProperty(g, "peek", g.peek),
                        n.exportProperty(g, "dispose", g.dispose),
                        n.exportProperty(g, "isActive", g.isActive),
                        n.exportProperty(g, "getDependenciesCount", g.getDependenciesCount),
                        E && (u = !0,
                        E.nodeType && (S = function() {
                            return !n.utils.domNodeIsAttachedToDocument(E) || M && M()
                        }
                        )),
                        p || i.deferEvaluation || y(),
                        E && b() && E.nodeType && (T = function() {
                            n.utils.domNodeDisposal.removeDisposeCallback(E, T),
                            m()
                        }
                        ,
                        n.utils.domNodeDisposal.addDisposeCallback(E, T)),
                        g
                    }
                    ,
                    n.isComputed = function(t) {
                        return n.hasPrototype(t, n.dependentObservable)
                    }
                    ;
                    var y, g, _, b = n.observable.protoProperty;
                    n.dependentObservable[b] = n.observable,
                    n.dependentObservable.fn = {
                        equalityComparer: c
                    },
                    n.dependentObservable.fn[b] = n.dependentObservable,
                    n.utils.canSetPrototype && n.utils.setPrototypeOf(n.dependentObservable.fn, n.subscribable.fn),
                    n.exportSymbol("dependentObservable", n.dependentObservable),
                    n.exportSymbol("computed", n.dependentObservable),
                    n.exportSymbol("isComputed", n.isComputed),
                    n.pureComputed = function(t, e) {
                        return "function" == typeof t ? n.computed(t, e, {
                            pure: !0
                        }) : ((t = n.utils.extend({}, t)).pure = !0,
                        n.computed(t, e))
                    }
                    ,
                    n.exportSymbol("pureComputed", n.pureComputed),
                    function() {
                        function t(n, i, o) {
                            if (o = o || new e,
                            "object" != typeof (n = i(n)) || null === n || n === r || n instanceof Date || n instanceof String || n instanceof Number || n instanceof Boolean)
                                return n;
                            var s = n instanceof Array ? [] : {};
                            return o.save(n, s),
                            function(t, e) {
                                if (t instanceof Array) {
                                    for (var n = 0; n < t.length; n++)
                                        e(n);
                                    "function" == typeof t.toJSON && e("toJSON")
                                } else
                                    for (var r in t)
                                        e(r)
                            }(n, (function(e) {
                                var a = i(n[e]);
                                switch (typeof a) {
                                case "boolean":
                                case "number":
                                case "string":
                                case "function":
                                    s[e] = a;
                                    break;
                                case "object":
                                case "undefined":
                                    var u = o.get(a);
                                    s[e] = u !== r ? u : t(a, i, o)
                                }
                            }
                            )),
                            s
                        }
                        function e() {
                            this.keys = [],
                            this.values = []
                        }
                        n.toJS = function(e) {
                            if (0 == arguments.length)
                                throw new Error("When calling ko.toJS, pass the object you want to convert.");
                            return t(e, (function(t) {
                                for (var e = 0; n.isObservable(t) && e < 10; e++)
                                    t = t();
                                return t
                            }
                            ))
                        }
                        ,
                        n.toJSON = function(t, e, r) {
                            var i = n.toJS(t);
                            return n.utils.stringifyJson(i, e, r)
                        }
                        ,
                        e.prototype = {
                            constructor: e,
                            save: function(t, e) {
                                var r = n.utils.arrayIndexOf(this.keys, t);
                                r >= 0 ? this.values[r] = e : (this.keys.push(t),
                                this.values.push(e))
                            },
                            get: function(t) {
                                var e = n.utils.arrayIndexOf(this.keys, t);
                                return e >= 0 ? this.values[e] : r
                            }
                        }
                    }(),
                    n.exportSymbol("toJS", n.toJS),
                    n.exportSymbol("toJSON", n.toJSON),
                    y = "__ko__hasDomDataOptionValue__",
                    n.selectExtensions = {
                        readValue: function(t) {
                            switch (n.utils.tagNameLower(t)) {
                            case "option":
                                return !0 === t[y] ? n.utils.domData.get(t, n.bindingHandlers.options.optionValueDomDataKey) : n.utils.ieVersion <= 7 ? t.getAttributeNode("value") && t.getAttributeNode("value").specified ? t.value : t.text : t.value;
                            case "select":
                                return t.selectedIndex >= 0 ? n.selectExtensions.readValue(t.options[t.selectedIndex]) : r;
                            default:
                                return t.value
                            }
                        },
                        writeValue: function(t, e, i) {
                            switch (n.utils.tagNameLower(t)) {
                            case "option":
                                switch (typeof e) {
                                case "string":
                                    n.utils.domData.set(t, n.bindingHandlers.options.optionValueDomDataKey, r),
                                    y in t && delete t[y],
                                    t.value = e;
                                    break;
                                default:
                                    n.utils.domData.set(t, n.bindingHandlers.options.optionValueDomDataKey, e),
                                    t[y] = !0,
                                    t.value = "number" == typeof e ? e : ""
                                }
                                break;
                            case "select":
                                "" !== e && null !== e || (e = r);
                                for (var o, s = -1, a = 0, u = t.options.length; a < u; ++a)
                                    if ((o = n.selectExtensions.readValue(t.options[a])) == e || "" == o && e === r) {
                                        s = a;
                                        break
                                    }
                                (i || s >= 0 || e === r && t.size > 1) && (t.selectedIndex = s);
                                break;
                            default:
                                null !== e && e !== r || (e = ""),
                                t.value = e
                            }
                        }
                    },
                    n.exportSymbol("selectExtensions", n.selectExtensions),
                    n.exportSymbol("selectExtensions.readValue", n.selectExtensions.readValue),
                    n.exportSymbol("selectExtensions.writeValue", n.selectExtensions.writeValue),
                    n.expressionRewriting = function() {
                        var t = ["true", "false", "null", "undefined"]
                          , e = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i
                          , r = RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]", "g")
                          , i = /[\])"'A-Za-z0-9_$]+$/
                          , o = {
                            in: 1,
                            return: 1,
                            typeof: 1
                        };
                        function s(t) {
                            var e = n.utils.stringTrim(t);
                            123 === e.charCodeAt(0) && (e = e.slice(1, -1));
                            var s, a = [], u = e.match(r), l = [], c = 0;
                            if (u) {
                                u.push(",");
                                for (var h, p = 0; h = u[p]; ++p) {
                                    var f = h.charCodeAt(0);
                                    if (44 === f) {
                                        if (c <= 0) {
                                            a.push(s && l.length ? {
                                                key: s,
                                                value: l.join("")
                                            } : {
                                                unknown: s || l.join("")
                                            }),
                                            s = c = 0,
                                            l = [];
                                            continue
                                        }
                                    } else if (58 === f) {
                                        if (!c && !s && 1 === l.length) {
                                            s = l.pop();
                                            continue
                                        }
                                    } else if (47 === f && p && h.length > 1) {
                                        var d = u[p - 1].match(i);
                                        d && !o[d[0]] && ((u = (e = e.substr(e.indexOf(h) + 1)).match(r)).push(","),
                                        p = -1,
                                        h = "/")
                                    } else
                                        40 === f || 123 === f || 91 === f ? ++c : 41 === f || 125 === f || 93 === f ? --c : s || l.length || 34 !== f && 39 !== f || (h = h.slice(1, -1));
                                    l.push(h)
                                }
                            }
                            return a
                        }
                        var a = {};
                        return {
                            bindingRewriteValidators: [],
                            twoWayBindings: a,
                            parseObjectLiteral: s,
                            preProcessBindings: function(r, i) {
                                function o(r, i) {
                                    var s, p;
                                    if (!h) {
                                        if ((p = n.getBindingHandler(r)) && p.preprocess && !(i = p.preprocess(i, r, o)))
                                            return;
                                        a[r] && (s = function(r) {
                                            if (n.utils.arrayIndexOf(t, r) >= 0)
                                                return !1;
                                            var i = r.match(e);
                                            return null !== i && (i[1] ? "Object(" + i[1] + ")" + i[2] : r)
                                        }(i)) && l.push("'" + r + "':function(_z){" + s + "=_z}")
                                    }
                                    c && (i = "function(){return " + i + " }"),
                                    u.push("'" + r + "':" + i)
                                }
                                var u = []
                                  , l = []
                                  , c = (i = i || {}).valueAccessors
                                  , h = i.bindingParams
                                  , p = "string" == typeof r ? s(r) : r;
                                return n.utils.arrayForEach(p, (function(t) {
                                    o(t.key || t.unknown, t.value)
                                }
                                )),
                                l.length && o("_ko_property_writers", "{" + l.join(",") + " }"),
                                u.join(",")
                            },
                            keyValueArrayContainsKey: function(t, e) {
                                for (var n = 0; n < t.length; n++)
                                    if (t[n].key == e)
                                        return !0;
                                return !1
                            },
                            writeValueToProperty: function(t, e, r, i, o) {
                                if (t && n.isObservable(t))
                                    !n.isWriteableObservable(t) || o && t.peek() === i || t(i);
                                else {
                                    var s = e.get("_ko_property_writers");
                                    s && s[r] && s[r](i)
                                }
                            }
                        }
                    }(),
                    n.exportSymbol("expressionRewriting", n.expressionRewriting),
                    n.exportSymbol("expressionRewriting.bindingRewriteValidators", n.expressionRewriting.bindingRewriteValidators),
                    n.exportSymbol("expressionRewriting.parseObjectLiteral", n.expressionRewriting.parseObjectLiteral),
                    n.exportSymbol("expressionRewriting.preProcessBindings", n.expressionRewriting.preProcessBindings),
                    n.exportSymbol("expressionRewriting._twoWayBindings", n.expressionRewriting.twoWayBindings),
                    n.exportSymbol("jsonExpressionRewriting", n.expressionRewriting),
                    n.exportSymbol("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", n.expressionRewriting.preProcessBindings),
                    function() {
                        var t = o && "\x3c!--test--\x3e" === o.createComment("test").text
                          , e = t ? /^<!--\s*ko(?:\s+([\s\S]+))?\s*-->$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/
                          , r = t ? /^<!--\s*\/ko\s*-->$/ : /^\s*\/ko\s*$/
                          , i = {
                            ul: !0,
                            ol: !0
                        };
                        function s(n) {
                            return 8 == n.nodeType && e.test(t ? n.text : n.nodeValue)
                        }
                        function a(e) {
                            return 8 == e.nodeType && r.test(t ? e.text : e.nodeValue)
                        }
                        function u(t, e) {
                            for (var n = t, r = 1, i = []; n = n.nextSibling; ) {
                                if (a(n) && 0 == --r)
                                    return i;
                                i.push(n),
                                s(n) && r++
                            }
                            if (!e)
                                throw new Error("Cannot find closing comment tag to match: " + t.nodeValue);
                            return null
                        }
                        function l(t, e) {
                            var n = u(t, e);
                            return n ? n.length > 0 ? n[n.length - 1].nextSibling : t.nextSibling : null
                        }
                        function c(t) {
                            var e = t.firstChild
                              , n = null;
                            if (e)
                                do {
                                    if (n)
                                        n.push(e);
                                    else if (s(e)) {
                                        var r = l(e, !0);
                                        r ? e = r : n = [e]
                                    } else
                                        a(e) && (n = [e])
                                } while (e = e.nextSibling);
                            return n
                        }
                        n.virtualElements = {
                            allowedBindings: {},
                            childNodes: function(t) {
                                return s(t) ? u(t) : t.childNodes
                            },
                            emptyNode: function(t) {
                                if (s(t))
                                    for (var e = n.virtualElements.childNodes(t), r = 0, i = e.length; r < i; r++)
                                        n.removeNode(e[r]);
                                else
                                    n.utils.emptyDomNode(t)
                            },
                            setDomNodeChildren: function(t, e) {
                                if (s(t)) {
                                    n.virtualElements.emptyNode(t);
                                    for (var r = t.nextSibling, i = 0, o = e.length; i < o; i++)
                                        r.parentNode.insertBefore(e[i], r)
                                } else
                                    n.utils.setDomNodeChildren(t, e)
                            },
                            prepend: function(t, e) {
                                s(t) ? t.parentNode.insertBefore(e, t.nextSibling) : t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e)
                            },
                            insertAfter: function(t, e, r) {
                                r ? s(t) ? t.parentNode.insertBefore(e, r.nextSibling) : r.nextSibling ? t.insertBefore(e, r.nextSibling) : t.appendChild(e) : n.virtualElements.prepend(t, e)
                            },
                            firstChild: function(t) {
                                return s(t) ? !t.nextSibling || a(t.nextSibling) ? null : t.nextSibling : t.firstChild
                            },
                            nextSibling: function(t) {
                                return s(t) && (t = l(t)),
                                t.nextSibling && a(t.nextSibling) ? null : t.nextSibling
                            },
                            hasBindingValue: s,
                            virtualNodeBindingValue: function(n) {
                                var r = (t ? n.text : n.nodeValue).match(e);
                                return r ? r[1] : null
                            },
                            normaliseVirtualElementDomStructure: function(t) {
                                if (i[n.utils.tagNameLower(t)]) {
                                    var e = t.firstChild;
                                    if (e)
                                        do {
                                            if (1 === e.nodeType) {
                                                var r = c(e);
                                                if (r)
                                                    for (var o = e.nextSibling, s = 0; s < r.length; s++)
                                                        o ? t.insertBefore(r[s], o) : t.appendChild(r[s])
                                            }
                                        } while (e = e.nextSibling)
                                }
                            }
                        }
                    }(),
                    n.exportSymbol("virtualElements", n.virtualElements),
                    n.exportSymbol("virtualElements.allowedBindings", n.virtualElements.allowedBindings),
                    n.exportSymbol("virtualElements.emptyNode", n.virtualElements.emptyNode),
                    n.exportSymbol("virtualElements.insertAfter", n.virtualElements.insertAfter),
                    n.exportSymbol("virtualElements.prepend", n.virtualElements.prepend),
                    n.exportSymbol("virtualElements.setDomNodeChildren", n.virtualElements.setDomNodeChildren),
                    g = "data-bind",
                    n.bindingProvider = function() {
                        this.bindingCache = {}
                    }
                    ,
                    n.utils.extend(n.bindingProvider.prototype, {
                        nodeHasBindings: function(t) {
                            switch (t.nodeType) {
                            case 1:
                                return null != t.getAttribute(g) || n.components.getComponentNameForNode(t);
                            case 8:
                                return n.virtualElements.hasBindingValue(t);
                            default:
                                return !1
                            }
                        },
                        getBindings: function(t, e) {
                            var r = this.getBindingsString(t, e)
                              , i = r ? this.parseBindingsString(r, e, t) : null;
                            return n.components.addBindingsForCustomElement(i, t, e, !1)
                        },
                        getBindingAccessors: function(t, e) {
                            var r = this.getBindingsString(t, e)
                              , i = r ? this.parseBindingsString(r, e, t, {
                                valueAccessors: !0
                            }) : null;
                            return n.components.addBindingsForCustomElement(i, t, e, !0)
                        },
                        getBindingsString: function(t, e) {
                            switch (t.nodeType) {
                            case 1:
                                return t.getAttribute(g);
                            case 8:
                                return n.virtualElements.virtualNodeBindingValue(t);
                            default:
                                return null
                            }
                        },
                        parseBindingsString: function(t, e, r, i) {
                            try {
                                return function(t, e, r) {
                                    var i = t + (r && r.valueAccessors || "");
                                    return e[i] || (e[i] = function(t, e) {
                                        var r = n.expressionRewriting.preProcessBindings(t, e);
                                        return new Function("$context","$element","with($context){with($data||{}){return{" + r + "}}}")
                                    }(t, r))
                                }(t, this.bindingCache, i)(e, r)
                            } catch (e) {
                                throw e.message = "Unable to parse bindings.\nBindings value: " + t + "\nMessage: " + e.message,
                                e
                            }
                        }
                    }),
                    n.bindingProvider.instance = new n.bindingProvider,
                    n.exportSymbol("bindingProvider", n.bindingProvider),
                    function() {
                        n.bindingHandlers = {};
                        var t = {
                            script: !0,
                            textarea: !0
                        };
                        function e(t) {
                            return function() {
                                return t
                            }
                        }
                        function o(t) {
                            return t()
                        }
                        function s(t) {
                            return n.utils.objectMap(n.dependencyDetection.ignore(t), (function(e, n) {
                                return function() {
                                    return t()[n]
                                }
                            }
                            ))
                        }
                        function u(t, e) {
                            return s(this.getBindings.bind(this, t, e))
                        }
                        function l(t, e, r) {
                            var i, o = n.virtualElements.firstChild(e), s = n.bindingProvider.instance, a = s.preprocessNode;
                            if (a) {
                                for (; i = o; )
                                    o = n.virtualElements.nextSibling(i),
                                    a.call(s, i);
                                o = n.virtualElements.firstChild(e)
                            }
                            for (; i = o; )
                                o = n.virtualElements.nextSibling(i),
                                c(t, i, r)
                        }
                        function c(e, r, i) {
                            var o = !0
                              , s = 1 === r.nodeType;
                            s && n.virtualElements.normaliseVirtualElementDomStructure(r),
                            (s && i || n.bindingProvider.instance.nodeHasBindings(r)) && (o = p(r, null, e, i).shouldBindDescendants),
                            o && !t[n.utils.tagNameLower(r)] && l(e, r, !s)
                        }
                        n.getBindingHandler = function(t) {
                            return n.bindingHandlers[t]
                        }
                        ,
                        n.bindingContext = function(t, e, i, o) {
                            var s, a = this, u = "function" == typeof t && !n.isObservable(t), l = n.dependentObservable((function() {
                                var r = u ? t() : t
                                  , s = n.utils.unwrapObservable(r);
                                return e ? (e._subscribable && e._subscribable(),
                                n.utils.extend(a, e),
                                l && (a._subscribable = l)) : (a.$parents = [],
                                a.$root = s,
                                a.ko = n),
                                a.$rawData = r,
                                a.$data = s,
                                i && (a[i] = s),
                                o && o(a, e, s),
                                a.$data
                            }
                            ), null, {
                                disposeWhen: function() {
                                    return s && !n.utils.anyDomNodeIsAttachedToDocument(s)
                                },
                                disposeWhenNodeIsRemoved: !0
                            });
                            l.isActive() && (a._subscribable = l,
                            l.equalityComparer = null,
                            s = [],
                            l._addNode = function(t) {
                                s.push(t),
                                n.utils.domNodeDisposal.addDisposeCallback(t, (function(t) {
                                    n.utils.arrayRemoveItem(s, t),
                                    s.length || (l.dispose(),
                                    a._subscribable = l = r)
                                }
                                ))
                            }
                            )
                        }
                        ,
                        n.bindingContext.prototype.createChildContext = function(t, e, r) {
                            return new n.bindingContext(t,this,e,(function(t, e) {
                                t.$parentContext = e,
                                t.$parent = e.$data,
                                t.$parents = (e.$parents || []).slice(0),
                                t.$parents.unshift(t.$parent),
                                r && r(t)
                            }
                            ))
                        }
                        ,
                        n.bindingContext.prototype.extend = function(t) {
                            return new n.bindingContext(this._subscribable || this.$data,this,null,(function(e, r) {
                                e.$rawData = r.$rawData,
                                n.utils.extend(e, "function" == typeof t ? t() : t)
                            }
                            ))
                        }
                        ;
                        var h = n.utils.domData.nextKey();
                        function p(t, e, i, s) {
                            var a, l, c = n.utils.domData.get(t, h);
                            if (!e) {
                                if (c)
                                    throw Error("You cannot apply bindings multiple times to the same element.");
                                n.utils.domData.set(t, h, !0)
                            }
                            if (!c && s && n.storedBindingContextForNode(t, i),
                            e && "function" != typeof e)
                                a = e;
                            else {
                                var p = n.bindingProvider.instance
                                  , f = p.getBindingAccessors || u
                                  , d = n.dependentObservable((function() {
                                    return (a = e ? e(i, t) : f.call(p, t, i)) && i._subscribable && i._subscribable(),
                                    a
                                }
                                ), null, {
                                    disposeWhenNodeIsRemoved: t
                                });
                                a && d.isActive() || (d = null)
                            }
                            if (a) {
                                var m = d ? function(t) {
                                    return function() {
                                        return o(d()[t])
                                    }
                                }
                                : function(t) {
                                    return a[t]
                                }
                                ;
                                function v() {
                                    return n.utils.objectMap(d ? d() : a, o)
                                }
                                v.get = function(t) {
                                    return a[t] && o(m(t))
                                }
                                ,
                                v.has = function(t) {
                                    return t in a
                                }
                                ;
                                var y = function(t) {
                                    var e = []
                                      , r = {}
                                      , i = [];
                                    return n.utils.objectForEach(t, (function o(s) {
                                        if (!r[s]) {
                                            var a = n.getBindingHandler(s);
                                            a && (a.after && (i.push(s),
                                            n.utils.arrayForEach(a.after, (function(e) {
                                                if (t[e]) {
                                                    if (-1 !== n.utils.arrayIndexOf(i, e))
                                                        throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + i.join(", "));
                                                    o(e)
                                                }
                                            }
                                            )),
                                            i.length--),
                                            e.push({
                                                key: s,
                                                handler: a
                                            })),
                                            r[s] = !0
                                        }
                                    }
                                    )),
                                    e
                                }(a);
                                n.utils.arrayForEach(y, (function(e) {
                                    var o = e.handler.init
                                      , s = e.handler.update
                                      , u = e.key;
                                    8 === t.nodeType && function(t) {
                                        if (!n.virtualElements.allowedBindings[t])
                                            throw new Error("The binding '" + t + "' cannot be used with virtual elements")
                                    }(u);
                                    try {
                                        "function" == typeof o && n.dependencyDetection.ignore((function() {
                                            var e = o(t, m(u), v, i.$data, i);
                                            if (e && e.controlsDescendantBindings) {
                                                if (l !== r)
                                                    throw new Error("Multiple bindings (" + l + " and " + u + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                                                l = u
                                            }
                                        }
                                        )),
                                        "function" == typeof s && n.dependentObservable((function() {
                                            s(t, m(u), v, i.$data, i)
                                        }
                                        ), null, {
                                            disposeWhenNodeIsRemoved: t
                                        })
                                    } catch (t) {
                                        throw t.message = 'Unable to process binding "' + u + ": " + a[u] + '"\nMessage: ' + t.message,
                                        t
                                    }
                                }
                                ))
                            }
                            return {
                                shouldBindDescendants: l === r
                            }
                        }
                        var f = n.utils.domData.nextKey();
                        function d(t) {
                            return t && t instanceof n.bindingContext ? t : new n.bindingContext(t)
                        }
                        n.storedBindingContextForNode = function(t, e) {
                            if (2 != arguments.length)
                                return n.utils.domData.get(t, f);
                            n.utils.domData.set(t, f, e),
                            e._subscribable && e._subscribable._addNode(t)
                        }
                        ,
                        n.applyBindingAccessorsToNode = function(t, e, r) {
                            return 1 === t.nodeType && n.virtualElements.normaliseVirtualElementDomStructure(t),
                            p(t, e, d(r), !0)
                        }
                        ,
                        n.applyBindingsToNode = function(t, r, i) {
                            var o = d(i);
                            return n.applyBindingAccessorsToNode(t, function(t, r, i) {
                                return "function" == typeof t ? s(t.bind(null, r, i)) : n.utils.objectMap(t, e)
                            }(r, o, t), o)
                        }
                        ,
                        n.applyBindingsToDescendants = function(t, e) {
                            1 !== e.nodeType && 8 !== e.nodeType || l(d(t), e, !0)
                        }
                        ,
                        n.applyBindings = function(t, e) {
                            if (!a && i.jQuery && (a = i.jQuery),
                            e && 1 !== e.nodeType && 8 !== e.nodeType)
                                throw new Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
                            e = e || i.document.body,
                            c(d(t), e, !0)
                        }
                        ,
                        n.contextFor = function(t) {
                            switch (t.nodeType) {
                            case 1:
                            case 8:
                                var e = n.storedBindingContextForNode(t);
                                if (e)
                                    return e;
                                if (t.parentNode)
                                    return n.contextFor(t.parentNode)
                            }
                            return r
                        }
                        ,
                        n.dataFor = function(t) {
                            var e = n.contextFor(t);
                            return e ? e.$data : r
                        }
                        ,
                        n.exportSymbol("bindingHandlers", n.bindingHandlers),
                        n.exportSymbol("applyBindings", n.applyBindings),
                        n.exportSymbol("applyBindingsToDescendants", n.applyBindingsToDescendants),
                        n.exportSymbol("applyBindingAccessorsToNode", n.applyBindingAccessorsToNode),
                        n.exportSymbol("applyBindingsToNode", n.applyBindingsToNode),
                        n.exportSymbol("contextFor", n.contextFor),
                        n.exportSymbol("dataFor", n.dataFor)
                    }(),
                    function(t) {
                        var e = {}
                          , r = {};
                        function i(e, n) {
                            return e.hasOwnProperty(n) ? e[n] : t
                        }
                        function o(e, r, i, s) {
                            s || (s = n.components.loaders.slice(0));
                            var a = s.shift();
                            if (a) {
                                var u = a[e];
                                if (u) {
                                    var l = !1;
                                    if (u.apply(a, r.concat((function(t) {
                                        l ? i(null) : null !== t ? i(t) : o(e, r, i, s)
                                    }
                                    ))) !== t && (l = !0,
                                    !a.suppressLoaderExceptions))
                                        throw new Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.")
                                } else
                                    o(e, r, i, s)
                            } else
                                i(null)
                        }
                        n.components = {
                            get: function(t, s) {
                                var a = i(r, t);
                                a ? a.isSynchronousComponent ? n.dependencyDetection.ignore((function() {
                                    s(a.definition)
                                }
                                )) : setTimeout((function() {
                                    s(a.definition)
                                }
                                ), 0) : function(t, s) {
                                    var a, u = i(e, t);
                                    u ? u.subscribe(s) : ((u = e[t] = new n.subscribable).subscribe(s),
                                    function(t, e) {
                                        o("getConfig", [t], (function(n) {
                                            n ? o("loadComponent", [t, n], (function(t) {
                                                e(t, n)
                                            }
                                            )) : e(null, null)
                                        }
                                        ))
                                    }(t, (function(n, i) {
                                        var o = !(!i || !i.synchronous);
                                        r[t] = {
                                            definition: n,
                                            isSynchronousComponent: o
                                        },
                                        delete e[t],
                                        a || o ? u.notifySubscribers(n) : setTimeout((function() {
                                            u.notifySubscribers(n)
                                        }
                                        ), 0)
                                    }
                                    )),
                                    a = !0)
                                }(t, s)
                            },
                            clearCachedDefinition: function(t) {
                                delete r[t]
                            },
                            _getFirstResultFromLoaders: o
                        },
                        n.components.loaders = [],
                        n.exportSymbol("components", n.components),
                        n.exportSymbol("components.get", n.components.get),
                        n.exportSymbol("components.clearCachedDefinition", n.components.clearCachedDefinition)
                    }(),
                    function(t) {
                        var r = {};
                        function s(t, e, n) {
                            if ("function" == typeof e)
                                n((function(t) {
                                    return new e(t)
                                }
                                ));
                            else if ("function" == typeof e.createViewModel)
                                n(e.createViewModel);
                            else if ("instance"in e) {
                                var r = e.instance;
                                n((function(t, e) {
                                    return r
                                }
                                ))
                            } else
                                "viewModel"in e ? s(t, e.viewModel, n) : t("Unknown viewModel value: " + e)
                        }
                        function a(t) {
                            switch (n.utils.tagNameLower(t)) {
                            case "script":
                                return n.utils.parseHtmlFragment(t.text);
                            case "textarea":
                                return n.utils.parseHtmlFragment(t.value);
                            case "template":
                                if (u(t.content))
                                    return n.utils.cloneNodes(t.content.childNodes)
                            }
                            return n.utils.cloneNodes(t.childNodes)
                        }
                        function u(t) {
                            return i.DocumentFragment ? t instanceof DocumentFragment : t && 11 === t.nodeType
                        }
                        function l(t, n, r) {
                            "string" == typeof n.require ? e || i.require ? (e || i.require)([n.require], r) : t("Uses require, but no AMD loader is present") : r(n)
                        }
                        function c(t) {
                            return function(e) {
                                throw new Error("Component '" + t + "': " + e)
                            }
                        }
                        n.components.register = function(t, e) {
                            if (!e)
                                throw new Error("Invalid configuration for " + t);
                            if (n.components.isRegistered(t))
                                throw new Error("Component " + t + " is already registered");
                            r[t] = e
                        }
                        ,
                        n.components.isRegistered = function(t) {
                            return t in r
                        }
                        ,
                        n.components.unregister = function(t) {
                            delete r[t],
                            n.components.clearCachedDefinition(t)
                        }
                        ,
                        n.components.defaultLoader = {
                            getConfig: function(t, e) {
                                e(r.hasOwnProperty(t) ? r[t] : null)
                            },
                            loadComponent: function(t, e, r) {
                                var i = c(t);
                                l(i, e, (function(e) {
                                    !function(t, e, r, i) {
                                        var o = {}
                                          , s = 2
                                          , a = function() {
                                            0 == --s && i(o)
                                        }
                                          , u = r.template
                                          , c = r.viewModel;
                                        u ? l(e, u, (function(e) {
                                            n.components._getFirstResultFromLoaders("loadTemplate", [t, e], (function(t) {
                                                o.template = t,
                                                a()
                                            }
                                            ))
                                        }
                                        )) : a(),
                                        c ? l(e, c, (function(e) {
                                            n.components._getFirstResultFromLoaders("loadViewModel", [t, e], (function(t) {
                                                o.createViewModel = t,
                                                a()
                                            }
                                            ))
                                        }
                                        )) : a()
                                    }(t, i, e, r)
                                }
                                ))
                            },
                            loadTemplate: function(t, e, r) {
                                !function(t, e, r) {
                                    if ("string" == typeof e)
                                        r(n.utils.parseHtmlFragment(e));
                                    else if (e instanceof Array)
                                        r(e);
                                    else if (u(e))
                                        r(n.utils.makeArray(e.childNodes));
                                    else if (e.element) {
                                        var s = e.element;
                                        if (c = s,
                                        i.HTMLElement ? c instanceof HTMLElement : c && c.tagName && 1 === c.nodeType)
                                            r(a(s));
                                        else if ("string" == typeof s) {
                                            var l = o.getElementById(s);
                                            l ? r(a(l)) : t("Cannot find element with ID " + s)
                                        } else
                                            t("Unknown element type: " + s)
                                    } else
                                        t("Unknown template value: " + e);
                                    var c
                                }(c(t), e, r)
                            },
                            loadViewModel: function(t, e, n) {
                                s(c(t), e, n)
                            }
                        },
                        n.exportSymbol("components.register", n.components.register),
                        n.exportSymbol("components.isRegistered", n.components.isRegistered),
                        n.exportSymbol("components.unregister", n.components.unregister),
                        n.exportSymbol("components.defaultLoader", n.components.defaultLoader),
                        n.components.loaders.push(n.components.defaultLoader),
                        n.components._allRegisteredComponents = r
                    }(),
                    function(t) {
                        n.components.getComponentNameForNode = function(t) {
                            var e = n.utils.tagNameLower(t);
                            return n.components.isRegistered(e) && e
                        }
                        ,
                        n.components.addBindingsForCustomElement = function(t, e, r, o) {
                            if (1 === e.nodeType) {
                                var s = n.components.getComponentNameForNode(e);
                                if (s) {
                                    if ((t = t || {}).component)
                                        throw new Error('Cannot use the "component" binding on a custom element matching a component');
                                    var a = {
                                        name: s,
                                        params: i(e, r)
                                    };
                                    t.component = o ? function() {
                                        return a
                                    }
                                    : a
                                }
                            }
                            return t
                        }
                        ;
                        var e, r = new n.bindingProvider;
                        function i(t, e) {
                            var i = t.getAttribute("params");
                            if (i) {
                                var o = r.parseBindingsString(i, e, t, {
                                    valueAccessors: !0,
                                    bindingParams: !0
                                })
                                  , s = n.utils.objectMap(o, (function(e, r) {
                                    return n.computed(e, null, {
                                        disposeWhenNodeIsRemoved: t
                                    })
                                }
                                ))
                                  , a = n.utils.objectMap(s, (function(e, r) {
                                    var i = e.peek();
                                    return e.isActive() ? n.computed({
                                        read: function() {
                                            return n.utils.unwrapObservable(e())
                                        },
                                        write: n.isWriteableObservable(i) && function(t) {
                                            e()(t)
                                        }
                                        ,
                                        disposeWhenNodeIsRemoved: t
                                    }) : i
                                }
                                ));
                                return a.hasOwnProperty("$raw") || (a.$raw = s),
                                a
                            }
                            return {
                                $raw: {}
                            }
                        }
                        n.utils.ieVersion < 9 && (n.components.register = (e = n.components.register,
                        function(t) {
                            return o.createElement(t),
                            e.apply(this, arguments)
                        }
                        ),
                        o.createDocumentFragment = function(t) {
                            return function() {
                                var e = t()
                                  , r = n.components._allRegisteredComponents;
                                for (var i in r)
                                    r.hasOwnProperty(i) && e.createElement(i);
                                return e
                            }
                        }(o.createDocumentFragment))
                    }(),
                    _ = 0,
                    n.bindingHandlers.component = {
                        init: function(t, e, r, i, o) {
                            var s, a, u = function() {
                                var t = s && s.dispose;
                                "function" == typeof t && t.call(s),
                                a = null
                            }, l = n.utils.makeArray(n.virtualElements.childNodes(t));
                            return n.utils.domNodeDisposal.addDisposeCallback(t, u),
                            n.computed((function() {
                                var r, i, c = n.utils.unwrapObservable(e());
                                if ("string" == typeof c ? r = c : (r = n.utils.unwrapObservable(c.name),
                                i = n.utils.unwrapObservable(c.params)),
                                !r)
                                    throw new Error("No component name specified");
                                var h = a = ++_;
                                n.components.get(r, (function(e) {
                                    if (a === h) {
                                        if (u(),
                                        !e)
                                            throw new Error("Unknown component '" + r + "'");
                                        !function(t, e, r) {
                                            var i = e.template;
                                            if (!i)
                                                throw new Error("Component '" + t + "' has no template");
                                            var o = n.utils.cloneNodes(i);
                                            n.virtualElements.setDomNodeChildren(r, o)
                                        }(r, e, t);
                                        var c = function(t, e, n, r) {
                                            var i = t.createViewModel;
                                            return i ? i.call(t, r, {
                                                element: e,
                                                templateNodes: n
                                            }) : r
                                        }(e, t, l, i)
                                          , p = o.createChildContext(c, void 0, (function(t) {
                                            t.$component = c,
                                            t.$componentTemplateNodes = l
                                        }
                                        ));
                                        s = c,
                                        n.applyBindingsToDescendants(p, t)
                                    }
                                }
                                ))
                            }
                            ), null, {
                                disposeWhenNodeIsRemoved: t
                            }),
                            {
                                controlsDescendantBindings: !0
                            }
                        }
                    },
                    n.virtualElements.allowedBindings.component = !0;
                    var w = {
                        class: "className",
                        for: "htmlFor"
                    };
                    n.bindingHandlers.attr = {
                        update: function(t, e, i) {
                            var o = n.utils.unwrapObservable(e()) || {};
                            n.utils.objectForEach(o, (function(e, i) {
                                var o = !1 === (i = n.utils.unwrapObservable(i)) || null === i || i === r;
                                o && t.removeAttribute(e),
                                n.utils.ieVersion <= 8 && e in w ? (e = w[e],
                                o ? t.removeAttribute(e) : t[e] = i) : o || t.setAttribute(e, i.toString()),
                                "name" === e && n.utils.setElementName(t, o ? "" : i.toString())
                            }
                            ))
                        }
                    },
                    n.bindingHandlers.checked = {
                        after: ["value", "attr"],
                        init: function(t, e, i) {
                            var o = n.pureComputed((function() {
                                return i.has("checkedValue") ? n.utils.unwrapObservable(i.get("checkedValue")) : i.has("value") ? n.utils.unwrapObservable(i.get("value")) : t.value
                            }
                            ));
                            function s() {
                                var r = t.checked
                                  , s = h ? o() : r;
                                if (!n.computedContext.isInitial() && (!u || r)) {
                                    var a = n.dependencyDetection.ignore(e);
                                    l ? c !== s ? (r && (n.utils.addOrRemoveItem(a, s, !0),
                                    n.utils.addOrRemoveItem(a, c, !1)),
                                    c = s) : n.utils.addOrRemoveItem(a, s, r) : n.expressionRewriting.writeValueToProperty(a, i, "checked", s, !0)
                                }
                            }
                            var a = "checkbox" == t.type
                              , u = "radio" == t.type;
                            if (a || u) {
                                var l = a && n.utils.unwrapObservable(e())instanceof Array
                                  , c = l ? o() : r
                                  , h = u || l;
                                u && !t.name && n.bindingHandlers.uniqueName.init(t, (function() {
                                    return !0
                                }
                                )),
                                n.computed(s, null, {
                                    disposeWhenNodeIsRemoved: t
                                }),
                                n.utils.registerEventHandler(t, "click", s),
                                n.computed((function() {
                                    var r = n.utils.unwrapObservable(e());
                                    t.checked = l ? n.utils.arrayIndexOf(r, o()) >= 0 : a ? r : o() === r
                                }
                                ), null, {
                                    disposeWhenNodeIsRemoved: t
                                })
                            }
                        }
                    },
                    n.expressionRewriting.twoWayBindings.checked = !0,
                    n.bindingHandlers.checkedValue = {
                        update: function(t, e) {
                            t.value = n.utils.unwrapObservable(e())
                        }
                    },
                    n.bindingHandlers.css = {
                        update: function(t, e) {
                            var r = n.utils.unwrapObservable(e());
                            null !== r && "object" == typeof r ? n.utils.objectForEach(r, (function(e, r) {
                                r = n.utils.unwrapObservable(r),
                                n.utils.toggleDomNodeCssClass(t, e, r)
                            }
                            )) : (r = String(r || ""),
                            n.utils.toggleDomNodeCssClass(t, t.__ko__cssValue, !1),
                            t.__ko__cssValue = r,
                            n.utils.toggleDomNodeCssClass(t, r, !0))
                        }
                    },
                    n.bindingHandlers.enable = {
                        update: function(t, e) {
                            var r = n.utils.unwrapObservable(e());
                            r && t.disabled ? t.removeAttribute("disabled") : r || t.disabled || (t.disabled = !0)
                        }
                    },
                    n.bindingHandlers.disable = {
                        update: function(t, e) {
                            n.bindingHandlers.enable.update(t, (function() {
                                return !n.utils.unwrapObservable(e())
                            }
                            ))
                        }
                    },
                    n.bindingHandlers.event = {
                        init: function(t, e, r, i, o) {
                            var s = e() || {};
                            n.utils.objectForEach(s, (function(s) {
                                "string" == typeof s && n.utils.registerEventHandler(t, s, (function(t) {
                                    var a, u = e()[s];
                                    if (u) {
                                        try {
                                            var l = n.utils.makeArray(arguments);
                                            i = o.$data,
                                            l.unshift(i),
                                            a = u.apply(i, l)
                                        } finally {
                                            !0 !== a && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
                                        }
                                        var c = !1 !== r.get(s + "Bubble");
                                        c || (t.cancelBubble = !0,
                                        t.stopPropagation && t.stopPropagation())
                                    }
                                }
                                ))
                            }
                            ))
                        }
                    },
                    n.bindingHandlers.foreach = {
                        makeTemplateValueAccessor: function(t) {
                            return function() {
                                var e = t()
                                  , r = n.utils.peekObservable(e);
                                return r && "number" != typeof r.length ? (n.utils.unwrapObservable(e),
                                {
                                    foreach: r.data,
                                    as: r.as,
                                    includeDestroyed: r.includeDestroyed,
                                    afterAdd: r.afterAdd,
                                    beforeRemove: r.beforeRemove,
                                    afterRender: r.afterRender,
                                    beforeMove: r.beforeMove,
                                    afterMove: r.afterMove,
                                    templateEngine: n.nativeTemplateEngine.instance
                                }) : {
                                    foreach: e,
                                    templateEngine: n.nativeTemplateEngine.instance
                                }
                            }
                        },
                        init: function(t, e, r, i, o) {
                            return n.bindingHandlers.template.init(t, n.bindingHandlers.foreach.makeTemplateValueAccessor(e))
                        },
                        update: function(t, e, r, i, o) {
                            return n.bindingHandlers.template.update(t, n.bindingHandlers.foreach.makeTemplateValueAccessor(e), r, i, o)
                        }
                    },
                    n.expressionRewriting.bindingRewriteValidators.foreach = !1,
                    n.virtualElements.allowedBindings.foreach = !0;
                    var x = "__ko_hasfocusLastValue";
                    function E(t, e, r, i) {
                        n.bindingHandlers[t] = {
                            init: function(t, o, s, a, u) {
                                var l, c;
                                return n.computed((function() {
                                    var s = n.utils.unwrapObservable(o())
                                      , a = !r != !s
                                      , h = !c;
                                    (h || e || a !== l) && (h && n.computedContext.getDependenciesCount() && (c = n.utils.cloneNodes(n.virtualElements.childNodes(t), !0)),
                                    a ? (h || n.virtualElements.setDomNodeChildren(t, n.utils.cloneNodes(c)),
                                    n.applyBindingsToDescendants(i ? i(u, s) : u, t)) : n.virtualElements.emptyNode(t),
                                    l = a)
                                }
                                ), null, {
                                    disposeWhenNodeIsRemoved: t
                                }),
                                {
                                    controlsDescendantBindings: !0
                                }
                            }
                        },
                        n.expressionRewriting.bindingRewriteValidators[t] = !1,
                        n.virtualElements.allowedBindings[t] = !0
                    }
                    n.bindingHandlers.hasfocus = {
                        init: function(t, e, r) {
                            var i = function(i) {
                                t.__ko_hasfocusUpdating = !0;
                                var o = t.ownerDocument;
                                if ("activeElement"in o) {
                                    var s;
                                    try {
                                        s = o.activeElement
                                    } catch (t) {
                                        s = o.body
                                    }
                                    i = s === t
                                }
                                var a = e();
                                n.expressionRewriting.writeValueToProperty(a, r, "hasfocus", i, !0),
                                t[x] = i,
                                t.__ko_hasfocusUpdating = !1
                            }
                              , o = i.bind(null, !0)
                              , s = i.bind(null, !1);
                            n.utils.registerEventHandler(t, "focus", o),
                            n.utils.registerEventHandler(t, "focusin", o),
                            n.utils.registerEventHandler(t, "blur", s),
                            n.utils.registerEventHandler(t, "focusout", s)
                        },
                        update: function(t, e) {
                            var r = !!n.utils.unwrapObservable(e());
                            t.__ko_hasfocusUpdating || t[x] === r || (r ? t.focus() : t.blur(),
                            n.dependencyDetection.ignore(n.utils.triggerEvent, null, [t, r ? "focusin" : "focusout"]))
                        }
                    },
                    n.expressionRewriting.twoWayBindings.hasfocus = !0,
                    n.bindingHandlers.hasFocus = n.bindingHandlers.hasfocus,
                    n.expressionRewriting.twoWayBindings.hasFocus = !0,
                    n.bindingHandlers.html = {
                        init: function() {
                            return {
                                controlsDescendantBindings: !0
                            }
                        },
                        update: function(t, e) {
                            n.utils.setHtml(t, e())
                        }
                    },
                    E("if"),
                    E("ifnot", !1, !0),
                    E("with", !0, !1, (function(t, e) {
                        return t.createChildContext(e)
                    }
                    ));
                    var M, S = {};
                    n.bindingHandlers.options = {
                        init: function(t) {
                            if ("select" !== n.utils.tagNameLower(t))
                                throw new Error("options binding applies only to SELECT elements");
                            for (; t.length > 0; )
                                t.remove(0);
                            return {
                                controlsDescendantBindings: !0
                            }
                        },
                        update: function(t, e, i) {
                            function o() {
                                return n.utils.arrayFilter(t.options, (function(t) {
                                    return t.selected
                                }
                                ))
                            }
                            var s, a, u = 0 == t.length, l = t.multiple, c = !u && l ? t.scrollTop : null, h = n.utils.unwrapObservable(e()), p = i.get("valueAllowUnset") && i.has("value"), f = i.get("optionsIncludeDestroyed"), d = {}, m = [];
                            function v(t, e, n) {
                                var r = typeof e;
                                return "function" == r ? e(t) : "string" == r ? t[e] : n
                            }
                            p || (l ? m = n.utils.arrayMap(o(), n.selectExtensions.readValue) : t.selectedIndex >= 0 && m.push(n.selectExtensions.readValue(t.options[t.selectedIndex]))),
                            h && (void 0 === h.length && (h = [h]),
                            a = n.utils.arrayFilter(h, (function(t) {
                                return f || t === r || null === t || !n.utils.unwrapObservable(t._destroy)
                            }
                            )),
                            i.has("optionsCaption") && null !== (s = n.utils.unwrapObservable(i.get("optionsCaption"))) && s !== r && a.unshift(S));
                            var y = !1;
                            function g(e, r) {
                                if (y && p)
                                    n.selectExtensions.writeValue(t, n.utils.unwrapObservable(i.get("value")), !0);
                                else if (m.length) {
                                    var o = n.utils.arrayIndexOf(m, n.selectExtensions.readValue(r[0])) >= 0;
                                    n.utils.setOptionNodeSelectionState(r[0], o),
                                    y && !o && n.dependencyDetection.ignore(n.utils.triggerEvent, null, [t, "change"])
                                }
                            }
                            d.beforeRemove = function(e) {
                                t.removeChild(e)
                            }
                            ;
                            var _ = g;
                            i.has("optionsAfterRender") && "function" == typeof i.get("optionsAfterRender") && (_ = function(t, e) {
                                g(0, e),
                                n.dependencyDetection.ignore(i.get("optionsAfterRender"), null, [e[0], t !== S ? t : r])
                            }
                            ),
                            n.utils.setDomNodeChildrenFromArrayMapping(t, a, (function(e, o, s) {
                                s.length && (m = !p && s[0].selected ? [n.selectExtensions.readValue(s[0])] : [],
                                y = !0);
                                var a = t.ownerDocument.createElement("option");
                                if (e === S)
                                    n.utils.setTextContent(a, i.get("optionsCaption")),
                                    n.selectExtensions.writeValue(a, r);
                                else {
                                    var u = v(e, i.get("optionsValue"), e);
                                    n.selectExtensions.writeValue(a, n.utils.unwrapObservable(u));
                                    var l = v(e, i.get("optionsText"), u);
                                    n.utils.setTextContent(a, l)
                                }
                                return [a]
                            }
                            ), d, _),
                            n.dependencyDetection.ignore((function() {
                                p ? n.selectExtensions.writeValue(t, n.utils.unwrapObservable(i.get("value")), !0) : (l ? m.length && o().length < m.length : m.length && t.selectedIndex >= 0 ? n.selectExtensions.readValue(t.options[t.selectedIndex]) !== m[0] : m.length || t.selectedIndex >= 0) && n.utils.triggerEvent(t, "change")
                            }
                            )),
                            n.utils.ensureSelectElementIsRenderedCorrectly(t),
                            c && Math.abs(c - t.scrollTop) > 20 && (t.scrollTop = c)
                        }
                    },
                    n.bindingHandlers.options.optionValueDomDataKey = n.utils.domData.nextKey(),
                    n.bindingHandlers.selectedOptions = {
                        after: ["options", "foreach"],
                        init: function(t, e, r) {
                            n.utils.registerEventHandler(t, "change", (function() {
                                var i = e()
                                  , o = [];
                                n.utils.arrayForEach(t.getElementsByTagName("option"), (function(t) {
                                    t.selected && o.push(n.selectExtensions.readValue(t))
                                }
                                )),
                                n.expressionRewriting.writeValueToProperty(i, r, "selectedOptions", o)
                            }
                            ))
                        },
                        update: function(t, e) {
                            if ("select" != n.utils.tagNameLower(t))
                                throw new Error("values binding applies only to SELECT elements");
                            var r = n.utils.unwrapObservable(e());
                            r && "number" == typeof r.length && n.utils.arrayForEach(t.getElementsByTagName("option"), (function(t) {
                                var e = n.utils.arrayIndexOf(r, n.selectExtensions.readValue(t)) >= 0;
                                n.utils.setOptionNodeSelectionState(t, e)
                            }
                            ))
                        }
                    },
                    n.expressionRewriting.twoWayBindings.selectedOptions = !0,
                    n.bindingHandlers.style = {
                        update: function(t, e) {
                            var i = n.utils.unwrapObservable(e() || {});
                            n.utils.objectForEach(i, (function(e, i) {
                                null !== (i = n.utils.unwrapObservable(i)) && i !== r && !1 !== i || (i = ""),
                                t.style[e] = i
                            }
                            ))
                        }
                    },
                    n.bindingHandlers.submit = {
                        init: function(t, e, r, i, o) {
                            if ("function" != typeof e())
                                throw new Error("The value for a submit binding must be a function");
                            n.utils.registerEventHandler(t, "submit", (function(n) {
                                var r, i = e();
                                try {
                                    r = i.call(o.$data, t)
                                } finally {
                                    !0 !== r && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
                                }
                            }
                            ))
                        }
                    },
                    n.bindingHandlers.text = {
                        init: function() {
                            return {
                                controlsDescendantBindings: !0
                            }
                        },
                        update: function(t, e) {
                            n.utils.setTextContent(t, e())
                        }
                    },
                    n.virtualElements.allowedBindings.text = !0,
                    function() {
                        if (i && i.navigator)
                            var t = function(t) {
                                if (t)
                                    return parseFloat(t[1])
                            }
                              , e = i.opera && i.opera.version && parseInt(i.opera.version())
                              , o = i.navigator.userAgent
                              , s = t(o.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i))
                              , a = t(o.match(/Firefox\/([^ ]*)/));
                        if (n.utils.ieVersion < 10)
                            var u = n.utils.domData.nextKey()
                              , l = n.utils.domData.nextKey()
                              , c = function(t) {
                                var e = this.activeElement
                                  , r = e && n.utils.domData.get(e, l);
                                r && r(t)
                            }
                              , h = function(t, e) {
                                var r = t.ownerDocument;
                                n.utils.domData.get(r, u) || (n.utils.domData.set(r, u, !0),
                                n.utils.registerEventHandler(r, "selectionchange", c)),
                                n.utils.domData.set(t, l, e)
                            };
                        n.bindingHandlers.textInput = {
                            init: function(t, i, o) {
                                var u, l, c = t.value, p = function(e) {
                                    clearTimeout(u),
                                    l = u = r;
                                    var s = t.value;
                                    c !== s && (e && (t._ko_textInputProcessedEvent = e.type),
                                    c = s,
                                    n.expressionRewriting.writeValueToProperty(i(), o, "textInput", s))
                                }, f = function(e) {
                                    if (!u) {
                                        l = t.value;
                                        var n = p.bind(t, {
                                            type: e.type
                                        });
                                        u = setTimeout(n, 4)
                                    }
                                }, d = function() {
                                    var e = n.utils.unwrapObservable(i());
                                    null !== e && e !== r || (e = ""),
                                    l === r || e !== l ? t.value !== e && (c = e,
                                    t.value = e) : setTimeout(d, 4)
                                }, m = function(e, r) {
                                    n.utils.registerEventHandler(t, e, r)
                                };
                                n.bindingHandlers.textInput._forceUpdateOn ? n.utils.arrayForEach(n.bindingHandlers.textInput._forceUpdateOn, (function(t) {
                                    "after" == t.slice(0, 5) ? m(t.slice(5), f) : m(t, p)
                                }
                                )) : n.utils.ieVersion < 10 ? (m("propertychange", (function(t) {
                                    "value" === t.propertyName && p(t)
                                }
                                )),
                                8 == n.utils.ieVersion && (m("keyup", p),
                                m("keydown", p)),
                                n.utils.ieVersion >= 8 && (h(t, p),
                                m("dragend", f))) : (m("input", p),
                                s < 5 && "textarea" === n.utils.tagNameLower(t) ? (m("keydown", f),
                                m("paste", f),
                                m("cut", f)) : e < 11 ? m("keydown", f) : a < 4 && (m("DOMAutoComplete", p),
                                m("dragdrop", p),
                                m("drop", p))),
                                m("change", p),
                                n.computed(d, null, {
                                    disposeWhenNodeIsRemoved: t
                                })
                            }
                        },
                        n.expressionRewriting.twoWayBindings.textInput = !0,
                        n.bindingHandlers.textinput = {
                            preprocess: function(t, e, n) {
                                n("textInput", t)
                            }
                        }
                    }(),
                    n.bindingHandlers.uniqueName = {
                        init: function(t, e) {
                            if (e()) {
                                var r = "ko_unique_" + ++n.bindingHandlers.uniqueName.currentIndex;
                                n.utils.setElementName(t, r)
                            }
                        }
                    },
                    n.bindingHandlers.uniqueName.currentIndex = 0,
                    n.bindingHandlers.value = {
                        after: ["options", "foreach"],
                        init: function(t, e, r) {
                            if ("input" != t.tagName.toLowerCase() || "checkbox" != t.type && "radio" != t.type) {
                                var i = ["change"]
                                  , o = r.get("valueUpdate")
                                  , s = !1
                                  , a = null;
                                o && ("string" == typeof o && (o = [o]),
                                n.utils.arrayPushAll(i, o),
                                i = n.utils.arrayGetDistinctValues(i));
                                var u = function() {
                                    a = null,
                                    s = !1;
                                    var i = e()
                                      , o = n.selectExtensions.readValue(t);
                                    n.expressionRewriting.writeValueToProperty(i, r, "value", o)
                                };
                                n.utils.ieVersion && "input" == t.tagName.toLowerCase() && "text" == t.type && "off" != t.autocomplete && (!t.form || "off" != t.form.autocomplete) && -1 == n.utils.arrayIndexOf(i, "propertychange") && (n.utils.registerEventHandler(t, "propertychange", (function() {
                                    s = !0
                                }
                                )),
                                n.utils.registerEventHandler(t, "focus", (function() {
                                    s = !1
                                }
                                )),
                                n.utils.registerEventHandler(t, "blur", (function() {
                                    s && u()
                                }
                                ))),
                                n.utils.arrayForEach(i, (function(e) {
                                    var r = u;
                                    n.utils.stringStartsWith(e, "after") && (r = function() {
                                        a = n.selectExtensions.readValue(t),
                                        setTimeout(u, 0)
                                    }
                                    ,
                                    e = e.substring("after".length)),
                                    n.utils.registerEventHandler(t, e, r)
                                }
                                ));
                                var l = function() {
                                    var i = n.utils.unwrapObservable(e())
                                      , o = n.selectExtensions.readValue(t);
                                    if (null === a || i !== a) {
                                        if (i !== o)
                                            if ("select" === n.utils.tagNameLower(t)) {
                                                var s = r.get("valueAllowUnset")
                                                  , u = function() {
                                                    n.selectExtensions.writeValue(t, i, s)
                                                };
                                                u(),
                                                s || i === n.selectExtensions.readValue(t) ? setTimeout(u, 0) : n.dependencyDetection.ignore(n.utils.triggerEvent, null, [t, "change"])
                                            } else
                                                n.selectExtensions.writeValue(t, i)
                                    } else
                                        setTimeout(l, 0)
                                };
                                n.computed(l, null, {
                                    disposeWhenNodeIsRemoved: t
                                })
                            } else
                                n.applyBindingAccessorsToNode(t, {
                                    checkedValue: e
                                })
                        },
                        update: function() {}
                    },
                    n.expressionRewriting.twoWayBindings.value = !0,
                    n.bindingHandlers.visible = {
                        update: function(t, e) {
                            var r = n.utils.unwrapObservable(e())
                              , i = !("none" == t.style.display);
                            r && !i ? t.style.display = "" : !r && i && (t.style.display = "none")
                        }
                    },
                    M = "click",
                    n.bindingHandlers[M] = {
                        init: function(t, e, r, i, o) {
                            return n.bindingHandlers.event.init.call(this, t, (function() {
                                var t = {};
                                return t[M] = e(),
                                t
                            }
                            ), r, i, o)
                        }
                    },
                    n.templateEngine = function() {}
                    ,
                    n.templateEngine.prototype.renderTemplateSource = function(t, e, n, r) {
                        throw new Error("Override renderTemplateSource")
                    }
                    ,
                    n.templateEngine.prototype.createJavaScriptEvaluatorBlock = function(t) {
                        throw new Error("Override createJavaScriptEvaluatorBlock")
                    }
                    ,
                    n.templateEngine.prototype.makeTemplateSource = function(t, e) {
                        if ("string" == typeof t) {
                            var r = (e = e || o).getElementById(t);
                            if (!r)
                                throw new Error("Cannot find template with ID " + t);
                            return new n.templateSources.domElement(r)
                        }
                        if (1 == t.nodeType || 8 == t.nodeType)
                            return new n.templateSources.anonymousTemplate(t);
                        throw new Error("Unknown template type: " + t)
                    }
                    ,
                    n.templateEngine.prototype.renderTemplate = function(t, e, n, r) {
                        var i = this.makeTemplateSource(t, r);
                        return this.renderTemplateSource(i, e, n, r)
                    }
                    ,
                    n.templateEngine.prototype.isTemplateRewritten = function(t, e) {
                        return !1 === this.allowTemplateRewriting || this.makeTemplateSource(t, e).data("isRewritten")
                    }
                    ,
                    n.templateEngine.prototype.rewriteTemplate = function(t, e, n) {
                        var r = this.makeTemplateSource(t, n)
                          , i = e(r.text());
                        r.text(i),
                        r.data("isRewritten", !0)
                    }
                    ,
                    n.exportSymbol("templateEngine", n.templateEngine),
                    n.templateRewriting = function() {
                        var t = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi
                          , e = /<!--\s*ko\b\s*([\s\S]*?)\s*-->/g;
                        function r(t, e, r, i) {
                            var o = n.expressionRewriting.parseObjectLiteral(t);
                            !function(t) {
                                for (var e = n.expressionRewriting.bindingRewriteValidators, r = 0; r < t.length; r++) {
                                    var i = t[r].key;
                                    if (e.hasOwnProperty(i)) {
                                        var o = e[i];
                                        if ("function" == typeof o) {
                                            var s = o(t[r].value);
                                            if (s)
                                                throw new Error(s)
                                        } else if (!o)
                                            throw new Error("This template engine does not support the '" + i + "' binding within its templates")
                                    }
                                }
                            }(o);
                            var s = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + n.expressionRewriting.preProcessBindings(o, {
                                valueAccessors: !0
                            }) + " } })()},'" + r.toLowerCase() + "')";
                            return i.createJavaScriptEvaluatorBlock(s) + e
                        }
                        return {
                            ensureTemplateIsRewritten: function(t, e, r) {
                                e.isTemplateRewritten(t, r) || e.rewriteTemplate(t, (function(t) {
                                    return n.templateRewriting.memoizeBindingAttributeSyntax(t, e)
                                }
                                ), r)
                            },
                            memoizeBindingAttributeSyntax: function(n, i) {
                                return n.replace(t, (function() {
                                    return r(arguments[4], arguments[1], arguments[2], i)
                                }
                                )).replace(e, (function() {
                                    return r(arguments[1], "\x3c!-- ko --\x3e", "#comment", i)
                                }
                                ))
                            },
                            applyMemoizedBindingsToNextSibling: function(t, e) {
                                return n.memoization.memoize((function(r, i) {
                                    var o = r.nextSibling;
                                    o && o.nodeName.toLowerCase() === e && n.applyBindingAccessorsToNode(o, t, i)
                                }
                                ))
                            }
                        }
                    }(),
                    n.exportSymbol("__tr_ambtns", n.templateRewriting.applyMemoizedBindingsToNextSibling),
                    function() {
                        n.templateSources = {},
                        n.templateSources.domElement = function(t) {
                            this.domElement = t
                        }
                        ,
                        n.templateSources.domElement.prototype.text = function() {
                            var t = n.utils.tagNameLower(this.domElement)
                              , e = "script" === t ? "text" : "textarea" === t ? "value" : "innerHTML";
                            if (0 == arguments.length)
                                return this.domElement[e];
                            var r = arguments[0];
                            "innerHTML" === e ? n.utils.setHtml(this.domElement, r) : this.domElement[e] = r
                        }
                        ;
                        var t = n.utils.domData.nextKey() + "_";
                        n.templateSources.domElement.prototype.data = function(e) {
                            if (1 === arguments.length)
                                return n.utils.domData.get(this.domElement, t + e);
                            n.utils.domData.set(this.domElement, t + e, arguments[1])
                        }
                        ;
                        var e = n.utils.domData.nextKey();
                        n.templateSources.anonymousTemplate = function(t) {
                            this.domElement = t
                        }
                        ,
                        n.templateSources.anonymousTemplate.prototype = new n.templateSources.domElement,
                        n.templateSources.anonymousTemplate.prototype.constructor = n.templateSources.anonymousTemplate,
                        n.templateSources.anonymousTemplate.prototype.text = function() {
                            if (0 == arguments.length) {
                                var t = n.utils.domData.get(this.domElement, e) || {};
                                return t.textData === r && t.containerData && (t.textData = t.containerData.innerHTML),
                                t.textData
                            }
                            var i = arguments[0];
                            n.utils.domData.set(this.domElement, e, {
                                textData: i
                            })
                        }
                        ,
                        n.templateSources.domElement.prototype.nodes = function() {
                            if (0 == arguments.length) {
                                var t = n.utils.domData.get(this.domElement, e) || {};
                                return t.containerData
                            }
                            var r = arguments[0];
                            n.utils.domData.set(this.domElement, e, {
                                containerData: r
                            })
                        }
                        ,
                        n.exportSymbol("templateSources", n.templateSources),
                        n.exportSymbol("templateSources.domElement", n.templateSources.domElement),
                        n.exportSymbol("templateSources.anonymousTemplate", n.templateSources.anonymousTemplate)
                    }(),
                    function() {
                        var t;
                        function e(t, e, r) {
                            for (var i, o = t, s = n.virtualElements.nextSibling(e); o && (i = o) !== s; )
                                r(i, o = n.virtualElements.nextSibling(i))
                        }
                        function i(t, r) {
                            if (t.length) {
                                var i = t[0]
                                  , o = t[t.length - 1]
                                  , s = i.parentNode
                                  , a = n.bindingProvider.instance
                                  , u = a.preprocessNode;
                                if (u) {
                                    if (e(i, o, (function(t, e) {
                                        var n = t.previousSibling
                                          , r = u.call(a, t);
                                        r && (t === i && (i = r[0] || e),
                                        t === o && (o = r[r.length - 1] || n))
                                    }
                                    )),
                                    t.length = 0,
                                    !i)
                                        return;
                                    i === o ? t.push(i) : (t.push(i, o),
                                    n.utils.fixUpContinuousNodeArray(t, s))
                                }
                                e(i, o, (function(t) {
                                    1 !== t.nodeType && 8 !== t.nodeType || n.applyBindings(r, t)
                                }
                                )),
                                e(i, o, (function(t) {
                                    1 !== t.nodeType && 8 !== t.nodeType || n.memoization.unmemoizeDomNodeAndDescendants(t, [r])
                                }
                                )),
                                n.utils.fixUpContinuousNodeArray(t, s)
                            }
                        }
                        function o(t) {
                            return t.nodeType ? t : t.length > 0 ? t[0] : null
                        }
                        function s(e, r, s, a, u) {
                            u = u || {};
                            var l = (e && o(e) || s || {}).ownerDocument
                              , c = u.templateEngine || t;
                            n.templateRewriting.ensureTemplateIsRewritten(s, c, l);
                            var h = c.renderTemplate(s, a, u, l);
                            if ("number" != typeof h.length || h.length > 0 && "number" != typeof h[0].nodeType)
                                throw new Error("Template engine must return an array of DOM nodes");
                            var p = !1;
                            switch (r) {
                            case "replaceChildren":
                                n.virtualElements.setDomNodeChildren(e, h),
                                p = !0;
                                break;
                            case "replaceNode":
                                n.utils.replaceDomNodes(e, h),
                                p = !0;
                                break;
                            case "ignoreTargetNode":
                                break;
                            default:
                                throw new Error("Unknown renderMode: " + r)
                            }
                            return p && (i(h, a),
                            u.afterRender && n.dependencyDetection.ignore(u.afterRender, null, [h, a.$data])),
                            h
                        }
                        function a(t, e, r) {
                            return n.isObservable(t) ? t() : "function" == typeof t ? t(e, r) : t
                        }
                        n.setTemplateEngine = function(e) {
                            if (e != r && !(e instanceof n.templateEngine))
                                throw new Error("templateEngine must inherit from ko.templateEngine");
                            t = e
                        }
                        ,
                        n.renderTemplate = function(e, i, u, l, c) {
                            if (((u = u || {}).templateEngine || t) == r)
                                throw new Error("Set a template engine before calling renderTemplate");
                            if (c = c || "replaceChildren",
                            l) {
                                var h = o(l)
                                  , p = h && "replaceNode" == c ? h.parentNode : h;
                                return n.dependentObservable((function() {
                                    var t = i && i instanceof n.bindingContext ? i : new n.bindingContext(n.utils.unwrapObservable(i))
                                      , r = a(e, t.$data, t)
                                      , p = s(l, c, r, t, u);
                                    "replaceNode" == c && (h = o(l = p))
                                }
                                ), null, {
                                    disposeWhen: function() {
                                        return !h || !n.utils.domNodeIsAttachedToDocument(h)
                                    },
                                    disposeWhenNodeIsRemoved: p
                                })
                            }
                            return n.memoization.memoize((function(t) {
                                n.renderTemplate(e, i, u, t, "replaceNode")
                            }
                            ))
                        }
                        ,
                        n.renderTemplateForEach = function(t, e, o, u, l) {
                            var c, h = function(e, n) {
                                return c = l.createChildContext(e, o.as, (function(t) {
                                    t.$index = n
                                }
                                )),
                                s(null, "ignoreTargetNode", a(t, e, c), c, o)
                            }, p = function(t, e, n) {
                                i(e, c),
                                o.afterRender && o.afterRender(e, t),
                                c = null
                            };
                            return n.dependentObservable((function() {
                                var t = n.utils.unwrapObservable(e) || [];
                                void 0 === t.length && (t = [t]);
                                var i = n.utils.arrayFilter(t, (function(t) {
                                    return o.includeDestroyed || t === r || null === t || !n.utils.unwrapObservable(t._destroy)
                                }
                                ));
                                n.dependencyDetection.ignore(n.utils.setDomNodeChildrenFromArrayMapping, null, [u, i, h, o, p])
                            }
                            ), null, {
                                disposeWhenNodeIsRemoved: u
                            })
                        }
                        ;
                        var u = n.utils.domData.nextKey();
                        n.bindingHandlers.template = {
                            init: function(t, e) {
                                var r = n.utils.unwrapObservable(e());
                                if ("string" == typeof r || r.name)
                                    n.virtualElements.emptyNode(t);
                                else if ("nodes"in r) {
                                    var i = r.nodes || [];
                                    if (n.isObservable(i))
                                        throw new Error('The "nodes" option must be a plain, non-observable array.');
                                    var o = n.utils.moveCleanedNodesToContainerElement(i);
                                    new n.templateSources.anonymousTemplate(t).nodes(o)
                                } else {
                                    var s = n.virtualElements.childNodes(t);
                                    o = n.utils.moveCleanedNodesToContainerElement(s),
                                    new n.templateSources.anonymousTemplate(t).nodes(o)
                                }
                                return {
                                    controlsDescendantBindings: !0
                                }
                            },
                            update: function(t, e, i, o, s) {
                                var a, l, c = e(), h = n.utils.unwrapObservable(c), p = !0, f = null;
                                if ("string" == typeof h ? (l = c,
                                h = {}) : (l = h.name,
                                "if"in h && (p = n.utils.unwrapObservable(h.if)),
                                p && "ifnot"in h && (p = !n.utils.unwrapObservable(h.ifnot)),
                                a = n.utils.unwrapObservable(h.data)),
                                "foreach"in h) {
                                    var d = p && h.foreach || [];
                                    f = n.renderTemplateForEach(l || t, d, h, t, s)
                                } else if (p) {
                                    var m = "data"in h ? s.createChildContext(a, h.as) : s;
                                    f = n.renderTemplate(l || t, m, h, t)
                                } else
                                    n.virtualElements.emptyNode(t);
                                !function(t, e) {
                                    var i = n.utils.domData.get(t, u);
                                    i && "function" == typeof i.dispose && i.dispose(),
                                    n.utils.domData.set(t, u, e && e.isActive() ? e : r)
                                }(t, f)
                            }
                        },
                        n.expressionRewriting.bindingRewriteValidators.template = function(t) {
                            var e = n.expressionRewriting.parseObjectLiteral(t);
                            return 1 == e.length && e[0].unknown || n.expressionRewriting.keyValueArrayContainsKey(e, "name") ? null : "This template engine does not support anonymous templates nested within its templates"
                        }
                        ,
                        n.virtualElements.allowedBindings.template = !0
                    }(),
                    n.exportSymbol("setTemplateEngine", n.setTemplateEngine),
                    n.exportSymbol("renderTemplate", n.renderTemplate),
                    n.utils.findMovesInArrayComparison = function(t, e, n) {
                        var r, i, o, s, a;
                        if (t.length && e.length)
                            for (r = i = 0; (!n || r < n) && (s = t[i]); ++i) {
                                for (o = 0; a = e[o]; ++o)
                                    if (s.value === a.value) {
                                        s.moved = a.index,
                                        a.moved = s.index,
                                        e.splice(o, 1),
                                        r = o = 0;
                                        break
                                    }
                                r += o
                            }
                    }
                    ,
                    n.utils.compareArrays = function() {
                        var t = "added"
                          , e = "deleted";
                        function r(t, e, r, i, o) {
                            var s, a, u, l, c, h = Math.min, p = Math.max, f = [], d = t.length, m = e.length, v = m - d || 1, y = d + m + 1;
                            for (s = 0; s <= d; s++)
                                for (l = u,
                                f.push(u = []),
                                c = h(m, s + v),
                                a = p(0, s - 1); a <= c; a++)
                                    if (a)
                                        if (s)
                                            if (t[s - 1] === e[a - 1])
                                                u[a] = l[a - 1];
                                            else {
                                                var g = l[a] || y
                                                  , _ = u[a - 1] || y;
                                                u[a] = h(g, _) + 1
                                            }
                                        else
                                            u[a] = a + 1;
                                    else
                                        u[a] = s + 1;
                            var b, w = [], x = [], E = [];
                            for (s = d,
                            a = m; s || a; )
                                b = f[s][a] - 1,
                                a && b === f[s][a - 1] ? x.push(w[w.length] = {
                                    status: r,
                                    value: e[--a],
                                    index: a
                                }) : s && b === f[s - 1][a] ? E.push(w[w.length] = {
                                    status: i,
                                    value: t[--s],
                                    index: s
                                }) : (--a,
                                --s,
                                o.sparse || w.push({
                                    status: "retained",
                                    value: e[a]
                                }));
                            return n.utils.findMovesInArrayComparison(x, E, 10 * d),
                            w.reverse()
                        }
                        return function(n, i, o) {
                            return o = "boolean" == typeof o ? {
                                dontLimitMoves: o
                            } : o || {},
                            i = i || [],
                            (n = n || []).length <= i.length ? r(n, i, t, e, o) : r(i, n, e, t, o)
                        }
                    }(),
                    n.exportSymbol("utils.compareArrays", n.utils.compareArrays),
                    function() {
                        function t(t, e, i, o, s) {
                            var a = []
                              , u = n.dependentObservable((function() {
                                var r = e(i, s, n.utils.fixUpContinuousNodeArray(a, t)) || [];
                                a.length > 0 && (n.utils.replaceDomNodes(a, r),
                                o && n.dependencyDetection.ignore(o, null, [i, r, s])),
                                a.length = 0,
                                n.utils.arrayPushAll(a, r)
                            }
                            ), null, {
                                disposeWhenNodeIsRemoved: t,
                                disposeWhen: function() {
                                    return !n.utils.anyDomNodeIsAttachedToDocument(a)
                                }
                            });
                            return {
                                mappedNodes: a,
                                dependentObservable: u.isActive() ? u : r
                            }
                        }
                        var e = n.utils.domData.nextKey();
                        n.utils.setDomNodeChildrenFromArrayMapping = function(i, o, s, a, u) {
                            o = o || [],
                            a = a || {};
                            var l, c = n.utils.domData.get(i, e) === r, h = n.utils.domData.get(i, e) || [], p = n.utils.arrayMap(h, (function(t) {
                                return t.arrayEntry
                            }
                            )), f = n.utils.compareArrays(p, o, a.dontLimitMoves), d = [], m = 0, v = 0, y = [], g = [], _ = [], b = [], w = [];
                            function x(t, e) {
                                l = h[e],
                                v !== e && (b[t] = l),
                                l.indexObservable(v++),
                                n.utils.fixUpContinuousNodeArray(l.mappedNodes, i),
                                d.push(l),
                                g.push(l)
                            }
                            function E(t, e) {
                                if (t)
                                    for (var r = 0, i = e.length; r < i; r++)
                                        e[r] && n.utils.arrayForEach(e[r].mappedNodes, (function(n) {
                                            t(n, r, e[r].arrayEntry)
                                        }
                                        ))
                            }
                            for (var M, S, T = 0; M = f[T]; T++)
                                switch (S = M.moved,
                                M.status) {
                                case "deleted":
                                    S === r && ((l = h[m]).dependentObservable && l.dependentObservable.dispose(),
                                    y.push.apply(y, n.utils.fixUpContinuousNodeArray(l.mappedNodes, i)),
                                    a.beforeRemove && (_[T] = l,
                                    g.push(l))),
                                    m++;
                                    break;
                                case "retained":
                                    x(T, m++);
                                    break;
                                case "added":
                                    S !== r ? x(T, S) : (l = {
                                        arrayEntry: M.value,
                                        indexObservable: n.observable(v++)
                                    },
                                    d.push(l),
                                    g.push(l),
                                    c || (w[T] = l))
                                }
                            E(a.beforeMove, b),
                            n.utils.arrayForEach(y, a.beforeRemove ? n.cleanNode : n.removeNode),
                            T = 0;
                            for (var C, O, P = n.virtualElements.firstChild(i); l = g[T]; T++) {
                                l.mappedNodes || n.utils.extend(l, t(i, s, l.arrayEntry, u, l.indexObservable));
                                for (var L = 0; O = l.mappedNodes[L]; P = O.nextSibling,
                                C = O,
                                L++)
                                    O !== P && n.virtualElements.insertAfter(i, O, C);
                                !l.initialized && u && (u(l.arrayEntry, l.mappedNodes, l.indexObservable),
                                l.initialized = !0)
                            }
                            E(a.beforeRemove, _),
                            E(a.afterMove, b),
                            E(a.afterAdd, w),
                            n.utils.domData.set(i, e, d)
                        }
                    }(),
                    n.exportSymbol("utils.setDomNodeChildrenFromArrayMapping", n.utils.setDomNodeChildrenFromArrayMapping),
                    n.nativeTemplateEngine = function() {
                        this.allowTemplateRewriting = !1
                    }
                    ,
                    n.nativeTemplateEngine.prototype = new n.templateEngine,
                    n.nativeTemplateEngine.prototype.constructor = n.nativeTemplateEngine,
                    n.nativeTemplateEngine.prototype.renderTemplateSource = function(t, e, r, i) {
                        var o = n.utils.ieVersion < 9 || !t.nodes ? null : t.nodes();
                        if (o)
                            return n.utils.makeArray(o.cloneNode(!0).childNodes);
                        var s = t.text();
                        return n.utils.parseHtmlFragment(s, i)
                    }
                    ,
                    n.nativeTemplateEngine.instance = new n.nativeTemplateEngine,
                    n.setTemplateEngine(n.nativeTemplateEngine.instance),
                    n.exportSymbol("nativeTemplateEngine", n.nativeTemplateEngine),
                    function() {
                        n.jqueryTmplTemplateEngine = function() {
                            var t = this.jQueryTmplVersion = function() {
                                if (!a || !a.tmpl)
                                    return 0;
                                try {
                                    if (a.tmpl.tag.tmpl.open.toString().indexOf("__") >= 0)
                                        return 2
                                } catch (t) {}
                                return 1
                            }();
                            this.renderTemplateSource = function(e, n, r, i) {
                                i = i || o,
                                r = r || {},
                                function() {
                                    if (t < 2)
                                        throw new Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.")
                                }();
                                var s = e.data("precompiled");
                                if (!s) {
                                    var u = e.text() || "";
                                    u = "{{ko_with $item.koBindingContext}}" + u + "{{/ko_with}}",
                                    s = a.template(null, u),
                                    e.data("precompiled", s)
                                }
                                var l = function(t, e, n) {
                                    return a.tmpl(t, e, n)
                                }(s, [n.$data], a.extend({
                                    koBindingContext: n
                                }, r.templateOptions));
                                return l.appendTo(i.createElement("div")),
                                a.fragments = {},
                                l
                            }
                            ,
                            this.createJavaScriptEvaluatorBlock = function(t) {
                                return "{{ko_code ((function() { return " + t + " })()) }}"
                            }
                            ,
                            this.addTemplate = function(t, e) {
                                o.write("<script type='text/html' id='" + t + "'>" + e + "<\/script>")
                            }
                            ,
                            t > 0 && (a.tmpl.tag.ko_code = {
                                open: "__.push($1 || '');"
                            },
                            a.tmpl.tag.ko_with = {
                                open: "with($1) {",
                                close: "} "
                            })
                        }
                        ,
                        n.jqueryTmplTemplateEngine.prototype = new n.templateEngine,
                        n.jqueryTmplTemplateEngine.prototype.constructor = n.jqueryTmplTemplateEngine;
                        var t = new n.jqueryTmplTemplateEngine;
                        t.jQueryTmplVersion > 0 && n.setTemplateEngine(t),
                        n.exportSymbol("jqueryTmplTemplateEngine", n.jqueryTmplTemplateEngine)
                    }()
                }("function" == typeof t && "object" == typeof n && "object" == typeof e ? e.exports || n : i.ko = {})
            }()
        }
        , {}],
        19: [function(t, e, n) {
            var r = t("../internal/baseDifference")
              , i = t("../internal/baseFlatten")
              , o = t("../lang/isArguments")
              , s = t("../lang/isArray");
            e.exports = function() {
                for (var t = -1, e = arguments.length; ++t < e; ) {
                    var n = arguments[t];
                    if (s(n) || o(n))
                        break
                }
                return r(n, i(arguments, !1, !0, ++t))
            }
        }
        , {
            "../internal/baseDifference": 39,
            "../internal/baseFlatten": 42,
            "../lang/isArguments": 83,
            "../lang/isArray": 84
        }],
        20: [function(t, e, n) {
            var r = t("../internal/baseCallback");
            e.exports = function(t, e, n) {
                var i = -1
                  , o = t ? t.length : 0;
                for (e = r(e, n, 3); ++i < o; )
                    if (e(t[i], i, t))
                        return i;
                return -1
            }
        }
        , {
            "../internal/baseCallback": 37
        }],
        21: [function(t, e, n) {
            var r = t("../internal/baseFlatten")
              , i = t("../internal/isIterateeCall");
            e.exports = function(t, e, n) {
                var o = t ? t.length : 0;
                return n && i(t, e, n) && (e = !1),
                o ? r(t, e) : []
            }
        }
        , {
            "../internal/baseFlatten": 42,
            "../internal/isIterateeCall": 71
        }],
        22: [function(t, e, n) {
            var r = t("../internal/arrayMap")
              , i = t("../internal/arrayMax")
              , o = t("../internal/baseProperty")
              , s = o("length");
            e.exports = function(t) {
                for (var e = -1, n = (t && t.length && i(r(t, s))) >>> 0, a = Array(n); ++e < n; )
                    a[e] = r(t, o(e));
                return a
            }
        }
        , {
            "../internal/arrayMap": 33,
            "../internal/arrayMax": 34,
            "../internal/baseProperty": 53
        }],
        23: [function(t, e, n) {
            var r = t("./unzip");
            e.exports = function() {
                for (var t = arguments.length, e = Array(t); t--; )
                    e[t] = arguments[t];
                return r(e)
            }
        }
        , {
            "./unzip": 22
        }],
        24: [function(t, e, n) {
            var r = t("../lang/isArray");
            e.exports = function(t, e) {
                var n = -1
                  , i = t ? t.length : 0
                  , o = {};
                for (!i || e || r(t[0]) || (e = []); ++n < i; ) {
                    var s = t[n];
                    e ? o[s] = e[n] : s && (o[s[0]] = s[1])
                }
                return o
            }
        }
        , {
            "../lang/isArray": 84
        }],
        25: [function(t, e, n) {
            e.exports = t("./includes")
        }
        , {
            "./includes": 28
        }],
        26: [function(t, e, n) {
            var r = t("../internal/baseCallback")
              , i = t("../internal/baseEach")
              , o = t("../internal/baseFind")
              , s = t("../array/findIndex")
              , a = t("../lang/isArray");
            e.exports = function(t, e, n) {
                if (a(t)) {
                    var u = s(t, e, n);
                    return u > -1 ? t[u] : void 0
                }
                return e = r(e, n, 3),
                o(t, e, i)
            }
        }
        , {
            "../array/findIndex": 20,
            "../internal/baseCallback": 37,
            "../internal/baseEach": 40,
            "../internal/baseFind": 41,
            "../lang/isArray": 84
        }],
        27: [function(t, e, n) {
            var r = t("../internal/createAggregator")
              , i = Object.prototype.hasOwnProperty
              , o = r((function(t, e, n) {
                i.call(t, n) ? t[n].push(e) : t[n] = [e]
            }
            ));
            e.exports = o
        }
        , {
            "../internal/createAggregator": 60
        }],
        28: [function(t, e, n) {
            var r = t("../internal/baseIndexOf")
              , i = t("../lang/isArray")
              , o = t("../internal/isLength")
              , s = t("../lang/isString")
              , a = t("../object/values")
              , u = Math.max;
            e.exports = function(t, e, n) {
                var l = t ? t.length : 0;
                return o(l) || (l = (t = a(t)).length),
                !!l && (n = "number" == typeof n ? n < 0 ? u(l + n, 0) : n || 0 : 0,
                "string" == typeof t || !i(t) && s(t) ? n < l && t.indexOf(e, n) > -1 : r(t, e, n) > -1)
            }
        }
        , {
            "../internal/baseIndexOf": 46,
            "../internal/isLength": 72,
            "../lang/isArray": 84,
            "../lang/isString": 89,
            "../object/values": 96
        }],
        29: [function(t, e, n) {
            var r = t("../internal/arrayMap")
              , i = t("../internal/baseCallback")
              , o = t("../internal/baseMap")
              , s = t("../lang/isArray");
            e.exports = function(t, e, n) {
                return (s(t) ? r : o)(t, e = i(e, n, 3))
            }
        }
        , {
            "../internal/arrayMap": 33,
            "../internal/baseCallback": 37,
            "../internal/baseMap": 50,
            "../lang/isArray": 84
        }],
        30: [function(t, e, n) {
            var r = t("../internal/baseProperty")
              , i = t("./map");
            e.exports = function(t, e) {
                return i(t, r(e))
            }
        }
        , {
            "../internal/baseProperty": 53,
            "./map": 29
        }],
        31: [function(t, e, n) {
            var r = t("../internal/isLength")
              , i = t("../object/keys");
            e.exports = function(t) {
                var e = t ? t.length : 0;
                return r(e) ? e : i(t).length
            }
        }
        , {
            "../internal/isLength": 72,
            "../object/keys": 93
        }],
        32: [function(t, e, n) {
            (function(n) {
                (function() {
                    var r = t("./cachePush")
                      , i = t("../lang/isNative")
                      , o = i(o = n.Set) && o
                      , s = i(s = Object.create) && s;
                    function a(t) {
                        var e = t ? t.length : 0;
                        for (this.data = {
                            hash: s(null),
                            set: new o
                        }; e--; )
                            this.push(t[e])
                    }
                    a.prototype.push = r,
                    e.exports = a
                }
                ).call(this)
            }
            ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {
            "../lang/isNative": 87,
            "./cachePush": 59
        }],
        33: [function(t, e, n) {
            e.exports = function(t, e) {
                for (var n = -1, r = t.length, i = Array(r); ++n < r; )
                    i[n] = e(t[n], n, t);
                return i
            }
        }
        , {}],
        34: [function(t, e, n) {
            var r = Number.NEGATIVE_INFINITY;
            e.exports = function(t) {
                for (var e = -1, n = t.length, i = r; ++e < n; ) {
                    var o = t[e];
                    o > i && (i = o)
                }
                return i
            }
        }
        , {}],
        35: [function(t, e, n) {
            var r = Object.prototype.hasOwnProperty;
            e.exports = function(t, e, n, i) {
                return void 0 !== t && r.call(i, n) ? t : e
            }
        }
        , {}],
        36: [function(t, e, n) {
            var r = t("./baseCopy")
              , i = t("../object/keys");
            e.exports = function(t, e, n) {
                var o = i(e);
                if (!n)
                    return r(e, t, o);
                for (var s = -1, a = o.length; ++s < a; ) {
                    var u = o[s]
                      , l = t[u]
                      , c = n(l, e[u], u, t, e);
                    ((c == c ? c !== l : l == l) || void 0 === l && !(u in t)) && (t[u] = c)
                }
                return t
            }
        }
        , {
            "../object/keys": 93,
            "./baseCopy": 38
        }],
        37: [function(t, e, n) {
            var r = t("./baseMatches")
              , i = t("./baseMatchesProperty")
              , o = t("./baseProperty")
              , s = t("./bindCallback")
              , a = t("../utility/identity")
              , u = t("./isBindable");
            e.exports = function(t, e, n) {
                var l = typeof t;
                return "function" == l ? void 0 !== e && u(t) ? s(t, e, n) : t : null == t ? a : "object" == l ? r(t) : void 0 === e ? o(t + "") : i(t + "", e)
            }
        }
        , {
            "../utility/identity": 104,
            "./baseMatches": 51,
            "./baseMatchesProperty": 52,
            "./baseProperty": 53,
            "./bindCallback": 57,
            "./isBindable": 69
        }],
        38: [function(t, e, n) {
            e.exports = function(t, e, n) {
                n || (n = e,
                e = {});
                for (var r = -1, i = n.length; ++r < i; ) {
                    var o = n[r];
                    e[o] = t[o]
                }
                return e
            }
        }
        , {}],
        39: [function(t, e, n) {
            var r = t("./baseIndexOf")
              , i = t("./cacheIndexOf")
              , o = t("./createCache");
            e.exports = function(t, e) {
                var n = t ? t.length : 0
                  , s = [];
                if (!n)
                    return s;
                var a = -1
                  , u = r
                  , l = !0
                  , c = l && e.length >= 200 && o(e)
                  , h = e.length;
                c && (u = i,
                l = !1,
                e = c);
                t: for (; ++a < n; ) {
                    var p = t[a];
                    if (l && p == p) {
                        for (var f = h; f--; )
                            if (e[f] === p)
                                continue t;
                        s.push(p)
                    } else
                        u(e, p) < 0 && s.push(p)
                }
                return s
            }
        }
        , {
            "./baseIndexOf": 46,
            "./cacheIndexOf": 58,
            "./createCache": 62
        }],
        40: [function(t, e, n) {
            var r = t("./baseForOwn")
              , i = t("./isLength")
              , o = t("./toObject");
            e.exports = function(t, e) {
                var n = t ? t.length : 0;
                if (!i(n))
                    return r(t, e);
                for (var s = -1, a = o(t); ++s < n && !1 !== e(a[s], s, a); )
                    ;
                return t
            }
        }
        , {
            "./baseForOwn": 45,
            "./isLength": 72,
            "./toObject": 82
        }],
        41: [function(t, e, n) {
            e.exports = function(t, e, n, r) {
                var i;
                return n(t, (function(t, n, o) {
                    if (e(t, n, o))
                        return i = r ? n : t,
                        !1
                }
                )),
                i
            }
        }
        , {}],
        42: [function(t, e, n) {
            var r = t("../lang/isArguments")
              , i = t("../lang/isArray")
              , o = t("./isLength")
              , s = t("./isObjectLike");
            e.exports = function t(e, n, a, u) {
                for (var l = (u || 0) - 1, c = e.length, h = -1, p = []; ++l < c; ) {
                    var f = e[l];
                    if (s(f) && o(f.length) && (i(f) || r(f))) {
                        n && (f = t(f, n, a));
                        var d = -1
                          , m = f.length;
                        for (p.length += m; ++d < m; )
                            p[++h] = f[d]
                    } else
                        a || (p[++h] = f)
                }
                return p
            }
        }
        , {
            "../lang/isArguments": 83,
            "../lang/isArray": 84,
            "./isLength": 72,
            "./isObjectLike": 73
        }],
        43: [function(t, e, n) {
            var r = t("./toObject");
            e.exports = function(t, e, n) {
                for (var i = -1, o = r(t), s = n(t), a = s.length; ++i < a; ) {
                    var u = s[i];
                    if (!1 === e(o[u], u, o))
                        break
                }
                return t
            }
        }
        , {
            "./toObject": 82
        }],
        44: [function(t, e, n) {
            var r = t("./baseFor")
              , i = t("../object/keysIn");
            e.exports = function(t, e) {
                return r(t, e, i)
            }
        }
        , {
            "../object/keysIn": 94,
            "./baseFor": 43
        }],
        45: [function(t, e, n) {
            var r = t("./baseFor")
              , i = t("../object/keys");
            e.exports = function(t, e) {
                return r(t, e, i)
            }
        }
        , {
            "../object/keys": 93,
            "./baseFor": 43
        }],
        46: [function(t, e, n) {
            var r = t("./indexOfNaN");
            e.exports = function(t, e, n) {
                if (e != e)
                    return r(t, n);
                for (var i = (n || 0) - 1, o = t.length; ++i < o; )
                    if (t[i] === e)
                        return i;
                return -1
            }
        }
        , {
            "./indexOfNaN": 68
        }],
        47: [function(t, e, n) {
            var r = t("./baseIsEqualDeep");
            e.exports = function t(e, n, i, o, s, a) {
                if (e === n)
                    return 0 !== e || 1 / e == 1 / n;
                var u = typeof e
                  , l = typeof n;
                return "function" != u && "object" != u && "function" != l && "object" != l || null == e || null == n ? e != e && n != n : r(e, n, t, i, o, s, a)
            }
        }
        , {
            "./baseIsEqualDeep": 48
        }],
        48: [function(t, e, n) {
            var r = t("./equalArrays")
              , i = t("./equalByTag")
              , o = t("./equalObjects")
              , s = t("../lang/isArray")
              , a = t("../lang/isTypedArray")
              , u = "[object Arguments]"
              , l = "[object Array]"
              , c = "[object Object]"
              , h = Object.prototype
              , p = h.hasOwnProperty
              , f = h.toString;
            e.exports = function(t, e, n, h, d, m, v) {
                var y = s(t)
                  , g = s(e)
                  , _ = l
                  , b = l;
                y || ((_ = f.call(t)) == u ? _ = c : _ != c && (y = a(t))),
                g || ((b = f.call(e)) == u ? b = c : b != c && (g = a(e)));
                var w = _ == c
                  , x = b == c
                  , E = _ == b;
                if (E && !y && !w)
                    return i(t, e, _);
                var M = w && p.call(t, "__wrapped__")
                  , S = x && p.call(e, "__wrapped__");
                if (M || S)
                    return n(M ? t.value() : t, S ? e.value() : e, h, d, m, v);
                if (!E)
                    return !1;
                m || (m = []),
                v || (v = []);
                for (var T = m.length; T--; )
                    if (m[T] == t)
                        return v[T] == e;
                m.push(t),
                v.push(e);
                var C = (y ? r : o)(t, e, n, h, d, m, v);
                return m.pop(),
                v.pop(),
                C
            }
        }
        , {
            "../lang/isArray": 84,
            "../lang/isTypedArray": 90,
            "./equalArrays": 63,
            "./equalByTag": 64,
            "./equalObjects": 65
        }],
        49: [function(t, e, n) {
            var r = t("./baseIsEqual")
              , i = Object.prototype.hasOwnProperty;
            e.exports = function(t, e, n, o, s) {
                var a = e.length;
                if (null == t)
                    return !a;
                for (var u = -1, l = !s; ++u < a; )
                    if (l && o[u] ? n[u] !== t[e[u]] : !i.call(t, e[u]))
                        return !1;
                for (u = -1; ++u < a; ) {
                    var c = e[u];
                    if (l && o[u])
                        var h = i.call(t, c);
                    else {
                        var p = t[c]
                          , f = n[u];
                        void 0 === (h = s ? s(p, f, c) : void 0) && (h = r(f, p, s, !0))
                    }
                    if (!h)
                        return !1
                }
                return !0
            }
        }
        , {
            "./baseIsEqual": 47
        }],
        50: [function(t, e, n) {
            var r = t("./baseEach");
            e.exports = function(t, e) {
                var n = [];
                return r(t, (function(t, r, i) {
                    n.push(e(t, r, i))
                }
                )),
                n
            }
        }
        , {
            "./baseEach": 40
        }],
        51: [function(t, e, n) {
            var r = t("./baseIsMatch")
              , i = t("./isStrictComparable")
              , o = t("../object/keys")
              , s = Object.prototype.hasOwnProperty;
            e.exports = function(t) {
                var e = o(t)
                  , n = e.length;
                if (1 == n) {
                    var a = e[0]
                      , u = t[a];
                    if (i(u))
                        return function(t) {
                            return null != t && t[a] === u && s.call(t, a)
                        }
                }
                for (var l = Array(n), c = Array(n); n--; )
                    u = t[e[n]],
                    l[n] = u,
                    c[n] = i(u);
                return function(t) {
                    return r(t, e, l, c)
                }
            }
        }
        , {
            "../object/keys": 93,
            "./baseIsMatch": 49,
            "./isStrictComparable": 74
        }],
        52: [function(t, e, n) {
            var r = t("./baseIsEqual")
              , i = t("./isStrictComparable");
            e.exports = function(t, e) {
                return i(e) ? function(n) {
                    return null != n && n[t] === e
                }
                : function(n) {
                    return null != n && r(e, n[t], null, !0)
                }
            }
        }
        , {
            "./baseIsEqual": 47,
            "./isStrictComparable": 74
        }],
        53: [function(t, e, n) {
            e.exports = function(t) {
                return function(e) {
                    return null == e ? void 0 : e[t]
                }
            }
        }
        , {}],
        54: [function(t, e, n) {
            var r = t("../utility/identity")
              , i = t("./metaMap")
              , o = i ? function(t, e) {
                return i.set(t, e),
                t
            }
            : r;
            e.exports = o
        }
        , {
            "../utility/identity": 104,
            "./metaMap": 75
        }],
        55: [function(t, e, n) {
            e.exports = function(t) {
                return "string" == typeof t ? t : null == t ? "" : t + ""
            }
        }
        , {}],
        56: [function(t, e, n) {
            e.exports = function(t, e) {
                for (var n = -1, r = e.length, i = Array(r); ++n < r; )
                    i[n] = t[e[n]];
                return i
            }
        }
        , {}],
        57: [function(t, e, n) {
            var r = t("../utility/identity");
            e.exports = function(t, e, n) {
                if ("function" != typeof t)
                    return r;
                if (void 0 === e)
                    return t;
                switch (n) {
                case 1:
                    return function(n) {
                        return t.call(e, n)
                    }
                    ;
                case 3:
                    return function(n, r, i) {
                        return t.call(e, n, r, i)
                    }
                    ;
                case 4:
                    return function(n, r, i, o) {
                        return t.call(e, n, r, i, o)
                    }
                    ;
                case 5:
                    return function(n, r, i, o, s) {
                        return t.call(e, n, r, i, o, s)
                    }
                }
                return function() {
                    return t.apply(e, arguments)
                }
            }
        }
        , {
            "../utility/identity": 104
        }],
        58: [function(t, e, n) {
            var r = t("../lang/isObject");
            e.exports = function(t, e) {
                var n = t.data;
                return ("string" == typeof e || r(e) ? n.set.has(e) : n.hash[e]) ? 0 : -1
            }
        }
        , {
            "../lang/isObject": 88
        }],
        59: [function(t, e, n) {
            var r = t("../lang/isObject");
            e.exports = function(t) {
                var e = this.data;
                "string" == typeof t || r(t) ? e.set.add(t) : e.hash[t] = !0
            }
        }
        , {
            "../lang/isObject": 88
        }],
        60: [function(t, e, n) {
            var r = t("./baseCallback")
              , i = t("./baseEach")
              , o = t("../lang/isArray");
            e.exports = function(t, e) {
                return function(n, s, a) {
                    var u = e ? e() : {};
                    if (s = r(s, a, 3),
                    o(n))
                        for (var l = -1, c = n.length; ++l < c; ) {
                            var h = n[l];
                            t(u, h, s(h, l, n), n)
                        }
                    else
                        i(n, (function(e, n, r) {
                            t(u, e, s(e, n, r), r)
                        }
                        ));
                    return u
                }
            }
        }
        , {
            "../lang/isArray": 84,
            "./baseCallback": 37,
            "./baseEach": 40
        }],
        61: [function(t, e, n) {
            var r = t("./bindCallback")
              , i = t("./isIterateeCall");
            e.exports = function(t) {
                return function() {
                    var e = arguments.length
                      , n = arguments[0];
                    if (e < 2 || null == n)
                        return n;
                    if (e > 3 && i(arguments[1], arguments[2], arguments[3]) && (e = 2),
                    e > 3 && "function" == typeof arguments[e - 2])
                        var o = r(arguments[--e - 1], arguments[e--], 5);
                    else
                        e > 2 && "function" == typeof arguments[e - 1] && (o = arguments[--e]);
                    for (var s = 0; ++s < e; ) {
                        var a = arguments[s];
                        a && t(n, a, o)
                    }
                    return n
                }
            }
        }
        , {
            "./bindCallback": 57,
            "./isIterateeCall": 71
        }],
        62: [function(t, e, n) {
            (function(n) {
                (function() {
                    var r = t("./SetCache")
                      , i = t("../utility/constant")
                      , o = t("../lang/isNative")
                      , s = o(s = n.Set) && s
                      , a = o(a = Object.create) && a
                      , u = a && s ? function(t) {
                        return new r(t)
                    }
                    : i(null);
                    e.exports = u
                }
                ).call(this)
            }
            ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {
            "../lang/isNative": 87,
            "../utility/constant": 103,
            "./SetCache": 32
        }],
        63: [function(t, e, n) {
            e.exports = function(t, e, n, r, i, o, s) {
                var a = -1
                  , u = t.length
                  , l = e.length
                  , c = !0;
                if (u != l && !(i && l > u))
                    return !1;
                for (; c && ++a < u; ) {
                    var h = t[a]
                      , p = e[a];
                    if (c = void 0,
                    r && (c = i ? r(p, h, a) : r(h, p, a)),
                    void 0 === c)
                        if (i)
                            for (var f = l; f-- && (p = e[f],
                            !(c = h && h === p || n(h, p, r, i, o, s))); )
                                ;
                        else
                            c = h && h === p || n(h, p, r, i, o, s)
                }
                return !!c
            }
        }
        , {}],
        64: [function(t, e, n) {
            e.exports = function(t, e, n) {
                switch (n) {
                case "[object Boolean]":
                case "[object Date]":
                    return +t == +e;
                case "[object Error]":
                    return t.name == e.name && t.message == e.message;
                case "[object Number]":
                    return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
                case "[object RegExp]":
                case "[object String]":
                    return t == e + ""
                }
                return !1
            }
        }
        , {}],
        65: [function(t, e, n) {
            var r = t("../object/keys")
              , i = Object.prototype.hasOwnProperty;
            e.exports = function(t, e, n, o, s, a, u) {
                var l = r(t)
                  , c = l.length;
                if (c != r(e).length && !s)
                    return !1;
                for (var h, p = -1; ++p < c; ) {
                    var f = l[p]
                      , d = i.call(e, f);
                    if (d) {
                        var m = t[f]
                          , v = e[f];
                        d = void 0,
                        o && (d = s ? o(v, m, f) : o(m, v, f)),
                        void 0 === d && (d = m && m === v || n(m, v, o, s, a, u))
                    }
                    if (!d)
                        return !1;
                    h || (h = "constructor" == f)
                }
                if (!h) {
                    var y = t.constructor
                      , g = e.constructor;
                    if (y != g && "constructor"in t && "constructor"in e && !("function" == typeof y && y instanceof y && "function" == typeof g && g instanceof g))
                        return !1
                }
                return !0
            }
        }
        , {
            "../object/keys": 93
        }],
        66: [function(t, e, n) {
            var r = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "`": "&#96;"
            };
            e.exports = function(t) {
                return r[t]
            }
        }
        , {}],
        67: [function(t, e, n) {
            var r = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "\u2028": "u2028",
                "\u2029": "u2029"
            };
            e.exports = function(t) {
                return "\\" + r[t]
            }
        }
        , {}],
        68: [function(t, e, n) {
            e.exports = function(t, e, n) {
                for (var r = t.length, i = n ? e || r : (e || 0) - 1; n ? i-- : ++i < r; ) {
                    var o = t[i];
                    if (o != o)
                        return i
                }
                return -1
            }
        }
        , {}],
        69: [function(t, e, n) {
            var r = t("./baseSetData")
              , i = t("../lang/isNative")
              , o = t("../support")
              , s = /^\s*function[ \n\r\t]+\w/
              , a = /\bthis\b/
              , u = Function.prototype.toString;
            e.exports = function(t) {
                var e = !(o.funcNames ? t.name : o.funcDecomp);
                if (!e) {
                    var n = u.call(t);
                    o.funcNames || (e = !s.test(n)),
                    e || (e = a.test(n) || i(t),
                    r(t, e))
                }
                return e
            }
        }
        , {
            "../lang/isNative": 87,
            "../support": 101,
            "./baseSetData": 54
        }],
        70: [function(t, e, n) {
            var r = Math.pow(2, 53) - 1;
            e.exports = function(t, e) {
                return e = null == e ? r : e,
                (t = +t) > -1 && t % 1 == 0 && t < e
            }
        }
        , {}],
        71: [function(t, e, n) {
            var r = t("./isIndex")
              , i = t("./isLength")
              , o = t("../lang/isObject");
            e.exports = function(t, e, n) {
                if (!o(n))
                    return !1;
                var s = typeof e;
                if ("number" == s)
                    var a = n.length
                      , u = i(a) && r(e, a);
                else
                    u = "string" == s && e in n;
                var l = n[e];
                return u && (t == t ? t === l : l != l)
            }
        }
        , {
            "../lang/isObject": 88,
            "./isIndex": 70,
            "./isLength": 72
        }],
        72: [function(t, e, n) {
            var r = Math.pow(2, 53) - 1;
            e.exports = function(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= r
            }
        }
        , {}],
        73: [function(t, e, n) {
            e.exports = function(t) {
                return t && "object" == typeof t || !1
            }
        }
        , {}],
        74: [function(t, e, n) {
            var r = t("../lang/isObject");
            e.exports = function(t) {
                return t == t && (0 === t ? 1 / t > 0 : !r(t))
            }
        }
        , {
            "../lang/isObject": 88
        }],
        75: [function(t, e, n) {
            (function(n) {
                (function() {
                    var r = t("../lang/isNative")(r = n.WeakMap) && r
                      , i = r && new r;
                    e.exports = i
                }
                ).call(this)
            }
            ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {
            "../lang/isNative": 87
        }],
        76: [function(t, e, n) {
            var r = t("./toObject");
            e.exports = function(t, e) {
                t = r(t);
                for (var n = -1, i = e.length, o = {}; ++n < i; ) {
                    var s = e[n];
                    s in t && (o[s] = t[s])
                }
                return o
            }
        }
        , {
            "./toObject": 82
        }],
        77: [function(t, e, n) {
            var r = t("./baseForIn");
            e.exports = function(t, e) {
                var n = {};
                return r(t, (function(t, r, i) {
                    e(t, r, i) && (n[r] = t)
                }
                )),
                n
            }
        }
        , {
            "./baseForIn": 44
        }],
        78: [function(t, e, n) {
            e.exports = /<%-([\s\S]+?)%>/g
        }
        , {}],
        79: [function(t, e, n) {
            e.exports = /<%([\s\S]+?)%>/g
        }
        , {}],
        80: [function(t, e, n) {
            e.exports = /<%=([\s\S]+?)%>/g
        }
        , {}],
        81: [function(t, e, n) {
            var r = t("../lang/isArguments")
              , i = t("../lang/isArray")
              , o = t("./isIndex")
              , s = t("./isLength")
              , a = t("../object/keysIn")
              , u = t("../support")
              , l = Object.prototype.hasOwnProperty;
            e.exports = function(t) {
                for (var e = a(t), n = e.length, c = n && t.length, h = c && s(c) && (i(t) || u.nonEnumArgs && r(t)), p = -1, f = []; ++p < n; ) {
                    var d = e[p];
                    (h && o(d, c) || l.call(t, d)) && f.push(d)
                }
                return f
            }
        }
        , {
            "../lang/isArguments": 83,
            "../lang/isArray": 84,
            "../object/keysIn": 94,
            "../support": 101,
            "./isIndex": 70,
            "./isLength": 72
        }],
        82: [function(t, e, n) {
            var r = t("../lang/isObject");
            e.exports = function(t) {
                return r(t) ? t : Object(t)
            }
        }
        , {
            "../lang/isObject": 88
        }],
        83: [function(t, e, n) {
            var r = t("../internal/isLength")
              , i = t("../internal/isObjectLike")
              , o = Object.prototype.toString;
            e.exports = function(t) {
                var e = i(t) ? t.length : void 0;
                return r(e) && "[object Arguments]" == o.call(t) || !1
            }
        }
        , {
            "../internal/isLength": 72,
            "../internal/isObjectLike": 73
        }],
        84: [function(t, e, n) {
            var r = t("../internal/isLength")
              , i = t("./isNative")
              , o = t("../internal/isObjectLike")
              , s = Object.prototype.toString
              , a = i(a = Array.isArray) && a
              , u = a || function(t) {
                return o(t) && r(t.length) && "[object Array]" == s.call(t) || !1
            }
            ;
            e.exports = u
        }
        , {
            "../internal/isLength": 72,
            "../internal/isObjectLike": 73,
            "./isNative": 87
        }],
        85: [function(t, e, n) {
            var r = t("../internal/baseIsEqual")
              , i = t("../internal/bindCallback")
              , o = t("../internal/isStrictComparable");
            e.exports = function(t, e, n, s) {
                if (!(n = "function" == typeof n && i(n, s, 3)) && o(t) && o(e))
                    return t === e;
                var a = n ? n(t, e) : void 0;
                return void 0 === a ? r(t, e, n) : !!a
            }
        }
        , {
            "../internal/baseIsEqual": 47,
            "../internal/bindCallback": 57,
            "../internal/isStrictComparable": 74
        }],
        86: [function(t, e, n) {
            var r = t("../internal/isObjectLike")
              , i = Object.prototype.toString;
            e.exports = function(t) {
                return r(t) && "string" == typeof t.message && "[object Error]" == i.call(t) || !1
            }
        }
        , {
            "../internal/isObjectLike": 73
        }],
        87: [function(t, e, n) {
            var r = t("../string/escapeRegExp")
              , i = t("../internal/isObjectLike")
              , o = /^\[object .+?Constructor\]$/
              , s = Object.prototype
              , a = Function.prototype.toString
              , u = s.toString
              , l = RegExp("^" + r(u).replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            e.exports = function(t) {
                return null != t && ("[object Function]" == u.call(t) ? l.test(a.call(t)) : i(t) && o.test(t) || !1)
            }
        }
        , {
            "../internal/isObjectLike": 73,
            "../string/escapeRegExp": 98
        }],
        88: [function(t, e, n) {
            e.exports = function(t) {
                var e = typeof t;
                return "function" == e || t && "object" == e || !1
            }
        }
        , {}],
        89: [function(t, e, n) {
            var r = t("../internal/isObjectLike")
              , i = Object.prototype.toString;
            e.exports = function(t) {
                return "string" == typeof t || r(t) && "[object String]" == i.call(t) || !1
            }
        }
        , {
            "../internal/isObjectLike": 73
        }],
        90: [function(t, e, n) {
            var r = t("../internal/isLength")
              , i = t("../internal/isObjectLike")
              , o = {};
            o["[object Float32Array]"] = o["[object Float64Array]"] = o["[object Int8Array]"] = o["[object Int16Array]"] = o["[object Int32Array]"] = o["[object Uint8Array]"] = o["[object Uint8ClampedArray]"] = o["[object Uint16Array]"] = o["[object Uint32Array]"] = !0,
            o["[object Arguments]"] = o["[object Array]"] = o["[object ArrayBuffer]"] = o["[object Boolean]"] = o["[object Date]"] = o["[object Error]"] = o["[object Function]"] = o["[object Map]"] = o["[object Number]"] = o["[object Object]"] = o["[object RegExp]"] = o["[object Set]"] = o["[object String]"] = o["[object WeakMap]"] = !1;
            var s = Object.prototype.toString;
            e.exports = function(t) {
                return i(t) && r(t.length) && o[s.call(t)] || !1
            }
        }
        , {
            "../internal/isLength": 72,
            "../internal/isObjectLike": 73
        }],
        91: [function(t, e, n) {
            var r = t("../internal/baseAssign")
              , i = t("../internal/createAssigner")(r);
            e.exports = i
        }
        , {
            "../internal/baseAssign": 36,
            "../internal/createAssigner": 61
        }],
        92: [function(t, e, n) {
            e.exports = t("./assign")
        }
        , {
            "./assign": 91
        }],
        93: [function(t, e, n) {
            var r = t("../internal/isLength")
              , i = t("../lang/isNative")
              , o = t("../lang/isObject")
              , s = t("../internal/shimKeys")
              , a = i(a = Object.keys) && a
              , u = a ? function(t) {
                if (t)
                    var e = t.constructor
                      , n = t.length;
                return "function" == typeof e && e.prototype === t || "function" != typeof t && n && r(n) ? s(t) : o(t) ? a(t) : []
            }
            : s;
            e.exports = u
        }
        , {
            "../internal/isLength": 72,
            "../internal/shimKeys": 81,
            "../lang/isNative": 87,
            "../lang/isObject": 88
        }],
        94: [function(t, e, n) {
            var r = t("../lang/isArguments")
              , i = t("../lang/isArray")
              , o = t("../internal/isIndex")
              , s = t("../internal/isLength")
              , a = t("../lang/isObject")
              , u = t("../support")
              , l = Object.prototype.hasOwnProperty;
            e.exports = function(t) {
                if (null == t)
                    return [];
                a(t) || (t = Object(t));
                var e = t.length;
                e = e && s(e) && (i(t) || u.nonEnumArgs && r(t)) && e || 0;
                for (var n = t.constructor, c = -1, h = "function" == typeof n && n.prototype === t, p = Array(e), f = e > 0; ++c < e; )
                    p[c] = c + "";
                for (var d in t)
                    f && o(d, e) || "constructor" == d && (h || !l.call(t, d)) || p.push(d);
                return p
            }
        }
        , {
            "../internal/isIndex": 70,
            "../internal/isLength": 72,
            "../lang/isArguments": 83,
            "../lang/isArray": 84,
            "../lang/isObject": 88,
            "../support": 101
        }],
        95: [function(t, e, n) {
            var r = t("../internal/baseFlatten")
              , i = t("../internal/bindCallback")
              , o = t("../internal/pickByArray")
              , s = t("../internal/pickByCallback");
            e.exports = function(t, e, n) {
                return null == t ? {} : "function" == typeof e ? s(t, i(e, n, 3)) : o(t, r(arguments, !1, !1, 1))
            }
        }
        , {
            "../internal/baseFlatten": 42,
            "../internal/bindCallback": 57,
            "../internal/pickByArray": 76,
            "../internal/pickByCallback": 77
        }],
        96: [function(t, e, n) {
            var r = t("../internal/baseValues")
              , i = t("./keys");
            e.exports = function(t) {
                return r(t, i(t))
            }
        }
        , {
            "../internal/baseValues": 56,
            "./keys": 93
        }],
        97: [function(t, e, n) {
            var r = t("../internal/baseToString")
              , i = t("../internal/escapeHtmlChar")
              , o = /[&<>"'`]/g
              , s = RegExp(o.source);
            e.exports = function(t) {
                return (t = r(t)) && s.test(t) ? t.replace(o, i) : t
            }
        }
        , {
            "../internal/baseToString": 55,
            "../internal/escapeHtmlChar": 66
        }],
        98: [function(t, e, n) {
            var r = t("../internal/baseToString")
              , i = /[.*+?^${}()|[\]\/\\]/g
              , o = RegExp(i.source);
            e.exports = function(t) {
                return (t = r(t)) && o.test(t) ? t.replace(i, "\\$&") : t
            }
        }
        , {
            "../internal/baseToString": 55
        }],
        99: [function(t, e, n) {
            var r = t("../internal/assignOwnDefaults")
              , i = t("../utility/attempt")
              , o = t("../internal/baseAssign")
              , s = t("../internal/baseToString")
              , a = t("../internal/baseValues")
              , u = t("../internal/escapeStringChar")
              , l = t("../lang/isError")
              , c = t("../internal/isIterateeCall")
              , h = t("../object/keys")
              , p = t("../internal/reInterpolate")
              , f = t("./templateSettings")
              , d = /\b__p \+= '';/g
              , m = /\b(__p \+=) '' \+/g
              , v = /(__e\(.*?\)|\b__t\)) \+\n'';/g
              , y = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g
              , g = /($^)/
              , _ = /['\n\r\u2028\u2029\\]/g;
            e.exports = function(t, e, n) {
                var b = f.imports._.templateSettings || f;
                n && c(t, e, n) && (e = n = null),
                t = s(t),
                e = o(o({}, n || e), b, r);
                var w, x, E = o(o({}, e.imports), b.imports, r), M = h(E), S = a(E, M), T = 0, C = e.interpolate || g, O = "__p += '", P = RegExp((e.escape || g).source + "|" + C.source + "|" + (C === p ? y : g).source + "|" + (e.evaluate || g).source + "|$", "g"), L = "sourceURL"in e ? "//# sourceURL=" + e.sourceURL + "\n" : "";
                t.replace(P, (function(e, n, r, i, o, s) {
                    return r || (r = i),
                    O += t.slice(T, s).replace(_, u),
                    n && (w = !0,
                    O += "' +\n__e(" + n + ") +\n'"),
                    o && (x = !0,
                    O += "';\n" + o + ";\n__p += '"),
                    r && (O += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                    T = s + e.length,
                    e
                }
                )),
                O += "';\n";
                var A = e.variable;
                A || (O = "with (obj) {\n" + O + "\n}\n"),
                O = (x ? O.replace(d, "") : O).replace(m, "$1").replace(v, "$1;"),
                O = "function(" + (A || "obj") + ") {\n" + (A ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (w ? ", __e = _.escape" : "") + (x ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + O + "return __p\n}";
                var k = i((function() {
                    return Function(M, L + "return " + O).apply(void 0, S)
                }
                ));
                if (k.source = O,
                l(k))
                    throw k;
                return k
            }
        }
        , {
            "../internal/assignOwnDefaults": 35,
            "../internal/baseAssign": 36,
            "../internal/baseToString": 55,
            "../internal/baseValues": 56,
            "../internal/escapeStringChar": 67,
            "../internal/isIterateeCall": 71,
            "../internal/reInterpolate": 80,
            "../lang/isError": 86,
            "../object/keys": 93,
            "../utility/attempt": 102,
            "./templateSettings": 100
        }],
        100: [function(t, e, n) {
            var r = t("./escape")
              , i = {
                escape: t("../internal/reEscape"),
                evaluate: t("../internal/reEvaluate"),
                interpolate: t("../internal/reInterpolate"),
                variable: "",
                imports: {
                    _: {
                        escape: r
                    }
                }
            };
            e.exports = i
        }
        , {
            "../internal/reEscape": 78,
            "../internal/reEvaluate": 79,
            "../internal/reInterpolate": 80,
            "./escape": 97
        }],
        101: [function(t, e, n) {
            (function(n) {
                (function() {
                    var r = t("./lang/isNative")
                      , i = /\bthis\b/
                      , o = Object.prototype
                      , s = (s = n.window) && s.document
                      , a = o.propertyIsEnumerable
                      , u = {};
                    !function(t) {
                        u.funcDecomp = !r(n.WinRTError) && i.test((function() {
                            return this
                        }
                        )),
                        u.funcNames = "string" == typeof Function.name;
                        try {
                            u.dom = 11 === s.createDocumentFragment().nodeType
                        } catch (t) {
                            u.dom = !1
                        }
                        try {
                            u.nonEnumArgs = !a.call(arguments, 1)
                        } catch (t) {
                            u.nonEnumArgs = !0
                        }
                    }(0, 0),
                    e.exports = u
                }
                ).call(this)
            }
            ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {
            "./lang/isNative": 87
        }],
        102: [function(t, e, n) {
            var r = t("../lang/isError");
            e.exports = function() {
                var t = arguments.length
                  , e = arguments[0];
                try {
                    for (var n = Array(t ? t - 1 : 0); --t > 0; )
                        n[t - 1] = arguments[t];
                    return e.apply(void 0, n)
                } catch (t) {
                    return r(t) ? t : new Error(t)
                }
            }
        }
        , {
            "../lang/isError": 86
        }],
        103: [function(t, e, n) {
            e.exports = function(t) {
                return function() {
                    return t
                }
            }
        }
        , {}],
        104: [function(t, e, n) {
            e.exports = function(t) {
                return t
            }
        }
        , {}],
        105: [function(t, e, n) {
            var r, i, o;
            r = this,
            i = "bowser",
            o = function() {
                var t = !0;
                function e(e) {
                    function n(t) {
                        var n = e.match(t);
                        return n && n.length > 1 && n[1] || ""
                    }
                    function r(t) {
                        var n = e.match(t);
                        return n && n.length > 1 && n[2] || ""
                    }
                    var i, s = n(/(ipod|iphone|ipad)/i).toLowerCase(), a = !/like android/i.test(e) && /android/i.test(e), u = /nexus\s*[0-6]\s*/i.test(e), l = !u && /nexus\s*[0-9]+/i.test(e), c = /CrOS/.test(e), h = /silk/i.test(e), p = /sailfish/i.test(e), f = /tizen/i.test(e), d = /(web|hpw)(o|0)s/i.test(e), m = /windows phone/i.test(e), v = (/SamsungBrowser/i.test(e),
                    !m && /windows/i.test(e)), y = !s && !h && /macintosh/i.test(e), g = !a && !p && !f && !d && /linux/i.test(e), _ = r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i), b = n(/version\/(\d+(\.\d+)?)/i), w = /tablet/i.test(e) && !/tablet pc/i.test(e), x = !w && /[^-]mobi/i.test(e), E = /xbox/i.test(e);
                    /opera/i.test(e) ? i = {
                        name: "Opera",
                        opera: t,
                        version: b || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
                    } : /opr\/|opios/i.test(e) ? i = {
                        name: "Opera",
                        opera: t,
                        version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || b
                    } : /SamsungBrowser/i.test(e) ? i = {
                        name: "Samsung Internet for Android",
                        samsungBrowser: t,
                        version: b || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
                    } : /Whale/i.test(e) ? i = {
                        name: "NAVER Whale browser",
                        whale: t,
                        version: n(/(?:whale)[\s\/](\d+(?:\.\d+)+)/i)
                    } : /MZBrowser/i.test(e) ? i = {
                        name: "MZ Browser",
                        mzbrowser: t,
                        version: n(/(?:MZBrowser)[\s\/](\d+(?:\.\d+)+)/i)
                    } : /coast/i.test(e) ? i = {
                        name: "Opera Coast",
                        coast: t,
                        version: b || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
                    } : /focus/i.test(e) ? i = {
                        name: "Focus",
                        focus: t,
                        version: n(/(?:focus)[\s\/](\d+(?:\.\d+)+)/i)
                    } : /yabrowser/i.test(e) ? i = {
                        name: "Yandex Browser",
                        yandexbrowser: t,
                        version: b || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
                    } : /ucbrowser/i.test(e) ? i = {
                        name: "UC Browser",
                        ucbrowser: t,
                        version: n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
                    } : /mxios/i.test(e) ? i = {
                        name: "Maxthon",
                        maxthon: t,
                        version: n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
                    } : /epiphany/i.test(e) ? i = {
                        name: "Epiphany",
                        epiphany: t,
                        version: n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
                    } : /puffin/i.test(e) ? i = {
                        name: "Puffin",
                        puffin: t,
                        version: n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
                    } : /sleipnir/i.test(e) ? i = {
                        name: "Sleipnir",
                        sleipnir: t,
                        version: n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
                    } : /k-meleon/i.test(e) ? i = {
                        name: "K-Meleon",
                        kMeleon: t,
                        version: n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
                    } : m ? (i = {
                        name: "Windows Phone",
                        osname: "Windows Phone",
                        windowsphone: t
                    },
                    _ ? (i.msedge = t,
                    i.version = _) : (i.msie = t,
                    i.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(e) ? i = {
                        name: "Internet Explorer",
                        msie: t,
                        version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
                    } : c ? i = {
                        name: "Chrome",
                        osname: "Chrome OS",
                        chromeos: t,
                        chromeBook: t,
                        chrome: t,
                        version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
                    } : /edg([ea]|ios)/i.test(e) ? i = {
                        name: "Microsoft Edge",
                        msedge: t,
                        version: _
                    } : /vivaldi/i.test(e) ? i = {
                        name: "Vivaldi",
                        vivaldi: t,
                        version: n(/vivaldi\/(\d+(\.\d+)?)/i) || b
                    } : p ? i = {
                        name: "Sailfish",
                        osname: "Sailfish OS",
                        sailfish: t,
                        version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
                    } : /seamonkey\//i.test(e) ? i = {
                        name: "SeaMonkey",
                        seamonkey: t,
                        version: n(/seamonkey\/(\d+(\.\d+)?)/i)
                    } : /firefox|iceweasel|fxios/i.test(e) ? (i = {
                        name: "Firefox",
                        firefox: t,
                        version: n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
                    },
                    /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(e) && (i.firefoxos = t,
                    i.osname = "Firefox OS")) : h ? i = {
                        name: "Amazon Silk",
                        silk: t,
                        version: n(/silk\/(\d+(\.\d+)?)/i)
                    } : /phantom/i.test(e) ? i = {
                        name: "PhantomJS",
                        phantom: t,
                        version: n(/phantomjs\/(\d+(\.\d+)?)/i)
                    } : /slimerjs/i.test(e) ? i = {
                        name: "SlimerJS",
                        slimer: t,
                        version: n(/slimerjs\/(\d+(\.\d+)?)/i)
                    } : /blackberry|\bbb\d+/i.test(e) || /rim\stablet/i.test(e) ? i = {
                        name: "BlackBerry",
                        osname: "BlackBerry OS",
                        blackberry: t,
                        version: b || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
                    } : d ? (i = {
                        name: "WebOS",
                        osname: "WebOS",
                        webos: t,
                        version: b || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
                    },
                    /touchpad\//i.test(e) && (i.touchpad = t)) : /bada/i.test(e) ? i = {
                        name: "Bada",
                        osname: "Bada",
                        bada: t,
                        version: n(/dolfin\/(\d+(\.\d+)?)/i)
                    } : f ? i = {
                        name: "Tizen",
                        osname: "Tizen",
                        tizen: t,
                        version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || b
                    } : /qupzilla/i.test(e) ? i = {
                        name: "QupZilla",
                        qupzilla: t,
                        version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || b
                    } : /chromium/i.test(e) ? i = {
                        name: "Chromium",
                        chromium: t,
                        version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || b
                    } : /chrome|crios|crmo/i.test(e) ? i = {
                        name: "Chrome",
                        chrome: t,
                        version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
                    } : a ? i = {
                        name: "Android",
                        version: b
                    } : /safari|applewebkit/i.test(e) ? (i = {
                        name: "Safari",
                        safari: t
                    },
                    b && (i.version = b)) : s ? (i = {
                        name: "iphone" == s ? "iPhone" : "ipad" == s ? "iPad" : "iPod"
                    },
                    b && (i.version = b)) : i = /googlebot/i.test(e) ? {
                        name: "Googlebot",
                        googlebot: t,
                        version: n(/googlebot\/(\d+(\.\d+))/i) || b
                    } : {
                        name: n(/^(.*)\/(.*) /),
                        version: r(/^(.*)\/(.*) /)
                    },
                    !i.msedge && /(apple)?webkit/i.test(e) ? (/(apple)?webkit\/537\.36/i.test(e) ? (i.name = i.name || "Blink",
                    i.blink = t) : (i.name = i.name || "Webkit",
                    i.webkit = t),
                    !i.version && b && (i.version = b)) : !i.opera && /gecko\//i.test(e) && (i.name = i.name || "Gecko",
                    i.gecko = t,
                    i.version = i.version || n(/gecko\/(\d+(\.\d+)?)/i)),
                    i.windowsphone || !a && !i.silk ? !i.windowsphone && s ? (i[s] = t,
                    i.ios = t,
                    i.osname = "iOS") : y ? (i.mac = t,
                    i.osname = "macOS") : E ? (i.xbox = t,
                    i.osname = "Xbox") : v ? (i.windows = t,
                    i.osname = "Windows") : g && (i.linux = t,
                    i.osname = "Linux") : (i.android = t,
                    i.osname = "Android");
                    var M = "";
                    i.windows ? M = function(t) {
                        switch (t) {
                        case "NT":
                            return "NT";
                        case "XP":
                            return "XP";
                        case "NT 5.0":
                            return "2000";
                        case "NT 5.1":
                            return "XP";
                        case "NT 5.2":
                            return "2003";
                        case "NT 6.0":
                            return "Vista";
                        case "NT 6.1":
                            return "7";
                        case "NT 6.2":
                            return "8";
                        case "NT 6.3":
                            return "8.1";
                        case "NT 10.0":
                            return "10";
                        default:
                            return
                        }
                    }(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : i.windowsphone ? M = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : i.mac ? M = (M = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : s ? M = (M = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? M = n(/android[ \/-](\d+(\.\d+)*)/i) : i.webos ? M = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : i.blackberry ? M = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : i.bada ? M = n(/bada\/(\d+(\.\d+)*)/i) : i.tizen && (M = n(/tizen[\/\s](\d+(\.\d+)*)/i)),
                    M && (i.osversion = M);
                    var S = !i.windows && M.split(".")[0];
                    return w || l || "ipad" == s || a && (3 == S || S >= 4 && !x) || i.silk ? i.tablet = t : (x || "iphone" == s || "ipod" == s || a || u || i.blackberry || i.webos || i.bada) && (i.mobile = t),
                    i.msedge || i.msie && i.version >= 10 || i.yandexbrowser && i.version >= 15 || i.vivaldi && i.version >= 1 || i.chrome && i.version >= 20 || i.samsungBrowser && i.version >= 4 || i.whale && 1 === o([i.version, "1.0"]) || i.mzbrowser && 1 === o([i.version, "6.0"]) || i.focus && 1 === o([i.version, "1.0"]) || i.firefox && i.version >= 20 || i.safari && i.version >= 6 || i.opera && i.version >= 10 || i.ios && i.osversion && i.osversion.split(".")[0] >= 6 || i.blackberry && i.version >= 10.1 || i.chromium && i.version >= 20 ? i.a = t : i.msie && i.version < 10 || i.chrome && i.version < 20 || i.firefox && i.version < 20 || i.safari && i.version < 6 || i.opera && i.version < 10 || i.ios && i.osversion && i.osversion.split(".")[0] < 6 || i.chromium && i.version < 20 ? i.c = t : i.x = t,
                    i
                }
                var n = e("undefined" != typeof navigator && navigator.userAgent || "");
                function r(t) {
                    return t.split(".").length
                }
                function i(t, e) {
                    var n, r = [];
                    if (Array.prototype.map)
                        return Array.prototype.map.call(t, e);
                    for (n = 0; n < t.length; n++)
                        r.push(e(t[n]));
                    return r
                }
                function o(t) {
                    for (var e = Math.max(r(t[0]), r(t[1])), n = i(t, (function(t) {
                        var n = e - r(t);
                        return i((t += new Array(n + 1).join(".0")).split("."), (function(t) {
                            return new Array(20 - t.length).join("0") + t
                        }
                        )).reverse()
                    }
                    )); --e >= 0; ) {
                        if (n[0][e] > n[1][e])
                            return 1;
                        if (n[0][e] !== n[1][e])
                            return -1;
                        if (0 === e)
                            return 0
                    }
                }
                function s(t, r, i) {
                    var s = n;
                    "string" == typeof r && (i = r,
                    r = void 0),
                    void 0 === r && (r = !1),
                    i && (s = e(i));
                    var a = "" + s.version;
                    for (var u in t)
                        if (t.hasOwnProperty(u) && s[u]) {
                            if ("string" != typeof t[u])
                                throw new Error("Browser version in the minVersion map should be a string: " + u + ": " + String(t));
                            return o([a, t[u]]) < 0
                        }
                    return r
                }
                return n.test = function(t) {
                    for (var e = 0; e < t.length; ++e) {
                        var r = t[e];
                        if ("string" == typeof r && r in n)
                            return !0
                    }
                    return !1
                }
                ,
                n.isUnsupportedBrowser = s,
                n.compareVersions = o,
                n.check = function(t, e, n) {
                    return !s(t, e, n)
                }
                ,
                n._detect = e,
                n.detect = e,
                n
            }
            ,
            void 0 !== e && e.exports ? e.exports = o() : r[i] = o()
        }
        , {}],
        106: [function(t, e, n) {
            "use strict";
            var r = t("minimal-event-emitter")
              , i = t("./util/positionAbsolutely")
              , o = t("./util/dom").setTransform
              , s = t("./util/clearOwnProperties");
            function a(t, e, n, r, i) {
                (i = i || {}).perspective = i.perspective || {},
                i.perspective.extraTransforms = null != i.perspective.extraTransforms ? i.perspective.extraTransforms : "",
                this._domElement = t,
                this._parentDomElement = e,
                this._view = n,
                this._coords = {},
                this._perspective = {},
                this.setPosition(r),
                this._parentDomElement.appendChild(this._domElement),
                this.setPerspective(i.perspective),
                this._visible = !0,
                this._position = {
                    x: 0,
                    y: 0
                }
            }
            r(a),
            a.prototype.destroy = function() {
                this._parentDomElement.removeChild(this._domElement),
                s(this)
            }
            ,
            a.prototype.domElement = function() {
                return this._domElement
            }
            ,
            a.prototype.position = function() {
                return this._coords
            }
            ,
            a.prototype.setPosition = function(t) {
                for (var e in t)
                    this._coords[e] = t[e];
                this._update()
            }
            ,
            a.prototype.perspective = function() {
                return this._perspective
            }
            ,
            a.prototype.setPerspective = function(t) {
                for (var e in t)
                    this._perspective[e] = t[e];
                this._update()
            }
            ,
            a.prototype.show = function() {
                this._visible || (this._visible = !0,
                this._update())
            }
            ,
            a.prototype.hide = function() {
                this._visible && (this._visible = !1,
                this._update())
            }
            ,
            a.prototype._update = function() {
                var t, e, n = this._domElement, r = this._coords, i = this._position, o = !1;
                if (this._visible) {
                    var s = this._view;
                    this._perspective.radius ? (o = !0,
                    this._setEmbeddedPosition(s, r)) : (s.coordinatesToScreen(r, i),
                    t = i.x,
                    e = i.y,
                    null != t && null != e && (o = !0,
                    this._setPosition(t, e)))
                }
                o ? (n.style.display = "block",
                n.style.position = "absolute") : (n.style.display = "none",
                n.style.position = "")
            }
            ,
            a.prototype._setEmbeddedPosition = function(t, e) {
                var n = t.coordinatesToPerspectiveTransform(e, this._perspective.radius, this._perspective.extraTransforms);
                o(this._domElement, n)
            }
            ,
            a.prototype._setPosition = function(t, e) {
                i(this._domElement, t, e, this._perspective.extraTransforms)
            }
            ,
            e.exports = a
        }
        , {
            "./util/clearOwnProperties": 167,
            "./util/dom": 176,
            "./util/positionAbsolutely": 187,
            "minimal-event-emitter": 195
        }],
        107: [function(t, e, n) {
            "use strict";
            var r = t("minimal-event-emitter")
              , i = t("./Hotspot")
              , o = t("./util/calcRect")
              , s = t("./util/positionAbsolutely")
              , a = t("./util/dom").setAbsolute
              , u = t("./util/dom").setOverflowHidden
              , l = t("./util/dom").setOverflowVisible
              , c = t("./util/dom").setNullSize
              , h = t("./util/dom").setPixelSize
              , p = t("./util/dom").setWithVendorPrefix("pointer-events")
              , f = t("./util/clearOwnProperties");
            function d(t, e, n, r, i) {
                i = i || {},
                this._parentDomElement = t,
                this._stage = e,
                this._view = n,
                this._renderLoop = r,
                this._hotspots = [],
                this._visible = !0,
                this._rect = i.rect,
                this._visibilityOrRectChanged = !0,
                this._stageWidth = null,
                this._stageHeight = null,
                this._tmpRect = {},
                this._hotspotContainerWrapper = document.createElement("div"),
                a(this._hotspotContainerWrapper),
                p(this._hotspotContainerWrapper, "none"),
                this._parentDomElement.appendChild(this._hotspotContainerWrapper),
                this._hotspotContainer = document.createElement("div"),
                a(this._hotspotContainer),
                p(this._hotspotContainer, "all"),
                this._hotspotContainerWrapper.appendChild(this._hotspotContainer),
                this._updateHandler = this._update.bind(this),
                this._renderLoop.addEventListener("afterRender", this._updateHandler)
            }
            r(d),
            d.prototype.destroy = function() {
                for (; this._hotspots.length; )
                    this.destroyHotspot(this._hotspots[0]);
                this._parentDomElement.removeChild(this._hotspotContainerWrapper),
                this._renderLoop.removeEventListener("afterRender", this._updateHandler),
                f(this)
            }
            ,
            d.prototype.domElement = function() {
                return this._hotspotContainer
            }
            ,
            d.prototype.setRect = function(t) {
                this._rect = t,
                this._visibilityOrRectChanged = !0
            }
            ,
            d.prototype.rect = function() {
                return this._rect
            }
            ,
            d.prototype.createHotspot = function(t, e, n) {
                e = e || {};
                var r = new i(t,this._hotspotContainer,this._view,e,n);
                return this._hotspots.push(r),
                r._update(),
                this.emit("hotspotsChange"),
                r
            }
            ,
            d.prototype.hasHotspot = function(t) {
                return this._hotspots.indexOf(t) >= 0
            }
            ,
            d.prototype.listHotspots = function() {
                return [].concat(this._hotspots)
            }
            ,
            d.prototype.destroyHotspot = function(t) {
                var e = this._hotspots.indexOf(t);
                if (e < 0)
                    throw new Error("No such hotspot");
                this._hotspots.splice(e, 1),
                t.destroy(),
                this.emit("hotspotsChange")
            }
            ,
            d.prototype.hide = function() {
                this._visible && (this._visible = !1,
                this._visibilityOrRectChanged = !0,
                this._update())
            }
            ,
            d.prototype.show = function() {
                this._visible || (this._visible = !0,
                this._visibilityOrRectChanged = !0,
                this._update())
            }
            ,
            d.prototype._update = function() {
                var t = this._hotspotContainerWrapper
                  , e = this._stage.width()
                  , n = this._stage.height()
                  , r = this._tmpRect;
                if (this._visibilityOrRectChanged || this._rect && (e !== this._stageWidth || n !== this._stageHeight)) {
                    var i = this._visible;
                    t.style.display = i ? "block" : "none",
                    i && (this._rect ? (o(e, n, this._rect, r),
                    s(t, e * r.x, n * r.y),
                    h(t, e * r.width, n * r.height),
                    u(t)) : (s(t, 0, 0),
                    c(t),
                    l(t))),
                    this._stageWidth = e,
                    this._stageHeight = n,
                    this._visibilityOrRectChanged = !1
                }
                for (var a = 0; a < this._hotspots.length; a++)
                    this._hotspots[a]._update()
            }
            ,
            e.exports = d
        }
        , {
            "./Hotspot": 106,
            "./util/calcRect": 163,
            "./util/clearOwnProperties": 167,
            "./util/dom": 176,
            "./util/positionAbsolutely": 187,
            "minimal-event-emitter": 195
        }],
        108: [function(t, e, n) {
            "use strict";
            var r = t("minimal-event-emitter")
              , i = t("./util/extend")
              , o = t("./util/clearOwnProperties");
            function s(t, e, n, r, i) {
                i = i || {};
                var o = this;
                this._source = t,
                this._geometry = e,
                this._view = n,
                this._textureStore = r,
                this._effects = i.effects || {},
                this._fixedLevelIndex = null,
                this._viewChangeHandler = function() {
                    o.emit("viewChange", o.view())
                }
                ,
                this._view.addEventListener("change", this._viewChangeHandler),
                this._textureStoreChangeHandler = function() {
                    o.emit("textureStoreChange", o.textureStore())
                }
                ,
                this._textureStore.addEventListener("textureLoad", this._textureStoreChangeHandler),
                this._textureStore.addEventListener("textureError", this._textureStoreChangeHandler),
                this._textureStore.addEventListener("textureInvalid", this._textureStoreChangeHandler)
            }
            r(s),
            s.prototype.destroy = function() {
                this._view.removeEventListener("change", this._viewChangeHandler),
                this._textureStore.removeEventListener("textureLoad", this._textureStoreChangeHandler),
                this._textureStore.removeEventListener("textureError", this._textureStoreChangeHandler),
                this._textureStore.removeEventListener("textureInvalid", this._textureStoreChangeHandler),
                o(this)
            }
            ,
            s.prototype.source = function() {
                return this._source
            }
            ,
            s.prototype.geometry = function() {
                return this._geometry
            }
            ,
            s.prototype.view = function() {
                return this._view
            }
            ,
            s.prototype.textureStore = function() {
                return this._textureStore
            }
            ,
            s.prototype.effects = function() {
                return this._effects
            }
            ,
            s.prototype.setEffects = function(t) {
                this._effects = t,
                this.emit("effectsChange", this._effects)
            }
            ,
            s.prototype.mergeEffects = function(t) {
                i(this._effects, t),
                this.emit("effectsChange", this._effects)
            }
            ,
            s.prototype.fixedLevel = function() {
                return this._fixedLevelIndex
            }
            ,
            s.prototype.setFixedLevel = function(t) {
                if (t !== this._fixedLevelIndex) {
                    if (null != t && (t >= this._geometry.levelList.length || t < 0))
                        throw new Error("Level index out of range: " + t);
                    this._fixedLevelIndex = t,
                    this.emit("fixedLevelChange", this._fixedLevelIndex)
                }
            }
            ,
            s.prototype._selectLevel = function() {
                return null != this._fixedLevelIndex ? this._geometry.levelList[this._fixedLevelIndex] : this._view.selectLevel(this._geometry.selectableLevelList)
            }
            ,
            s.prototype.visibleTiles = function(t) {
                var e = this._selectLevel();
                return this._geometry.visibleTiles(this._view, e, t)
            }
            ,
            s.prototype.pinLevel = function(t) {
                for (var e = this._geometry.levelList[t], n = this._geometry.levelTiles(e), r = 0; r < n.length; r++)
                    this._textureStore.pin(n[r])
            }
            ,
            s.prototype.unpinLevel = function(t) {
                for (var e = this._geometry.levelList[t], n = this._geometry.levelTiles(e), r = 0; r < n.length; r++)
                    this._textureStore.unpin(n[r])
            }
            ,
            s.prototype.pinFirstLevel = function() {
                return this.pinLevel(0)
            }
            ,
            s.prototype.unpinFirstLevel = function() {
                return this.unpinLevel(0)
            }
            ,
            e.exports = s
        }
        , {
            "./util/clearOwnProperties": 167,
            "./util/extend": 177,
            "minimal-event-emitter": 195
        }],
        109: [function(t, e, n) {
            "use strict";
            function r(t) {
                this.constructor.super_.apply(this, arguments),
                this.message = t
            }
            t("./util/inherits")(r, Error),
            e.exports = r
        }
        , {
            "./util/inherits": 180
        }],
        110: [function(t, e, n) {
            "use strict";
            var r = t("minimal-event-emitter")
              , i = t("./util/clearOwnProperties");
            function o(t) {
                var e = this;
                this._stage = t,
                this._running = !1,
                this._rendering = !1,
                this._requestHandle = null,
                this._boundLoop = this._loop.bind(this),
                this._renderInvalidHandler = function() {
                    e._rendering || e.renderOnNextFrame()
                }
                ,
                this._stage.addEventListener("renderInvalid", this._renderInvalidHandler)
            }
            r(o),
            o.prototype.destroy = function() {
                this.stop(),
                this._stage.removeEventListener("renderInvalid", this._renderInvalidHandler),
                i(this)
            }
            ,
            o.prototype.stage = function() {
                return this._stage
            }
            ,
            o.prototype.start = function() {
                this._running = !0,
                this.renderOnNextFrame()
            }
            ,
            o.prototype.stop = function() {
                this._requestHandle && (window.cancelAnimationFrame(this._requestHandle),
                this._requestHandle = null),
                this._running = !1
            }
            ,
            o.prototype.renderOnNextFrame = function() {
                this._running && !this._requestHandle && (this._requestHandle = window.requestAnimationFrame(this._boundLoop))
            }
            ,
            o.prototype._loop = function() {
                if (!this._running)
                    throw new Error("Render loop running while in stopped state");
                this._requestHandle = null,
                this._rendering = !0,
                this.emit("beforeRender"),
                this._rendering = !1,
                this._stage.render(),
                this.emit("afterRender")
            }
            ,
            e.exports = o
        }
        , {
            "./util/clearOwnProperties": 167,
            "minimal-event-emitter": 195
        }],
        111: [function(t, e, n) {
            "use strict";
            var r = t("./Layer")
              , i = t("./TextureStore")
              , o = t("./HotspotContainer")
              , s = t("minimal-event-emitter")
              , a = t("./util/now")
              , u = t("./util/noop")
              , l = t("./util/type")
              , c = t("./util/defaults")
              , h = t("./util/clearOwnProperties");
            function p(t, e) {
                this._viewer = t,
                this._view = e,
                this._layers = [],
                this._hotspotContainer = new o(t._controlContainer,t.stage(),this._view,t.renderLoop()),
                this._movement = null,
                this._movementStartTime = null,
                this._movementStep = null,
                this._movementParams = null,
                this._movementCallback = null,
                this._updateMovementHandler = this._updateMovement.bind(this),
                this._updateHotspotContainerHandler = this._updateHotspotContainer.bind(this),
                this._viewer.addEventListener("sceneChange", this._updateHotspotContainerHandler),
                this._viewChangeHandler = this.emit.bind(this, "viewChange"),
                this._view.addEventListener("change", this._viewChangeHandler),
                this._updateHotspotContainer()
            }
            s(p),
            p.prototype.destroy = function() {
                this._view.removeEventListener("change", this._viewChangeHandler),
                this._viewer.removeEventListener("sceneChange", this._updateHotspotContainerHandler),
                this._movement && this.stopMovement(),
                this._hotspotContainer.destroy(),
                this.destroyAllLayers(),
                h(this)
            }
            ,
            p.prototype.hotspotContainer = function() {
                return this._hotspotContainer
            }
            ,
            p.prototype.layer = function() {
                return this._layers[0]
            }
            ,
            p.prototype.listLayers = function() {
                return [].concat(this._layers)
            }
            ,
            p.prototype.view = function() {
                return this._view
            }
            ,
            p.prototype.viewer = function() {
                return this._viewer
            }
            ,
            p.prototype.visible = function() {
                return this._viewer.scene() === this
            }
            ,
            p.prototype.createLayer = function(t) {
                var e = (t = t || {}).textureStoreOpts || {}
                  , n = t.layerOpts || {}
                  , o = t.source
                  , s = t.geometry
                  , a = this._view
                  , u = this._viewer.stage()
                  , l = new i(o,u,e)
                  , c = new r(o,s,a,l,n);
                return this._layers.push(c),
                t.pinFirstLevel && c.pinFirstLevel(),
                this.emit("layerChange"),
                c
            }
            ,
            p.prototype.destroyLayer = function(t) {
                var e = this._layers.indexOf(t);
                if (e < 0)
                    throw new Error("No such layer in scene");
                this._layers.splice(e, 1),
                this.emit("layerChange"),
                t.textureStore().destroy(),
                t.destroy()
            }
            ,
            p.prototype.destroyAllLayers = function() {
                for (; this._layers.length > 0; )
                    this.destroyLayer(this._layers[0])
            }
            ,
            p.prototype.switchTo = function(t, e) {
                return this._viewer.switchScene(this, t, e)
            }
            ,
            p.prototype.lookTo = function(t, e, n) {
                var r = this;
                if (e = e || {},
                n = n || u,
                "object" !== l(t))
                    throw new Error("Target view parameters must be an object");
                var i = null != e.ease ? e.ease : function(t) {
                    return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                }
                  , o = null != e.controlsInterrupt && e.controlsInterrupt
                  , s = null != e.transitionDuration ? e.transitionDuration : 1e3
                  , a = null == e.shortest || e.shortest
                  , h = this._view
                  , p = h.parameters()
                  , f = {};
                c(f, t),
                c(f, p),
                a && h.normalizeToClosest && h.normalizeToClosest(f, f);
                var d = this._viewer.controls().enabled();
                o || this._viewer.controls().disable(),
                this.startMovement((function() {
                    var t = !1;
                    return function(e, n) {
                        if (n >= s && t)
                            return null;
                        var r = Math.min(n / s, 1);
                        for (var o in e) {
                            var a = p[o]
                              , u = f[o];
                            e[o] = a + i(r) * (u - a)
                        }
                        return t = n >= s,
                        e
                    }
                }
                ), (function() {
                    d && r._viewer.controls().enable(),
                    n()
                }
                ))
            }
            ,
            p.prototype.startMovement = function(t, e) {
                var n = this._viewer.renderLoop();
                this._movement && this.stopMovement();
                var r = t();
                if ("function" != typeof r)
                    throw new Error("Bad movement");
                this._movement = t,
                this._movementStep = r,
                this._movementStartTime = a(),
                this._movementParams = {},
                this._movementCallback = e,
                n.addEventListener("beforeRender", this._updateMovementHandler),
                n.renderOnNextFrame()
            }
            ,
            p.prototype.stopMovement = function() {
                var t = this._movementCallback
                  , e = this._viewer.renderLoop();
                this._movement && (this._movement = null,
                this._movementStep = null,
                this._movementStartTime = null,
                this._movementParams = null,
                this._movementCallback = null,
                e.removeEventListener("beforeRender", this._updateMovementHandler),
                t && t())
            }
            ,
            p.prototype.movement = function() {
                return this._movement
            }
            ,
            p.prototype._updateMovement = function() {
                if (!this._movement)
                    throw new Error("Should not call update");
                var t = this._viewer.renderLoop()
                  , e = this._view
                  , n = a() - this._movementStartTime
                  , r = this._movementStep
                  , i = this._movementParams;
                null == (i = r(i = e.parameters(i), n)) ? this.stopMovement() : (e.setParameters(i),
                t.renderOnNextFrame())
            }
            ,
            p.prototype._updateHotspotContainer = function() {
                this.visible() ? this._hotspotContainer.show() : this._hotspotContainer.hide()
            }
            ,
            e.exports = p
        }
        , {
            "./HotspotContainer": 107,
            "./Layer": 108,
            "./TextureStore": 112,
            "./util/clearOwnProperties": 167,
            "./util/defaults": 172,
            "./util/noop": 183,
            "./util/now": 184,
            "./util/type": 192,
            "minimal-event-emitter": 195
        }],
        112: [function(t, e, n) {
            "use strict";
            var r = t("./collections/Map")
              , i = t("./collections/Set")
              , o = t("./collections/LruSet")
              , s = t("minimal-event-emitter")
              , a = t("./util/defaults")
              , u = t("./util/retry")
              , l = t("./util/chain")
              , c = t("./util/inherits")
              , h = t("./util/clearOwnProperties")
              , p = "undefined" != typeof MARZIPANODEBUG && MARZIPANODEBUG.textureStore
              , f = 0
              , d = 1
              , m = 2
              , v = 3
              , y = {
                previouslyVisibleCacheSize: 512
            }
              , g = 0;
            function _() {}
            function b(t, e) {
                var n = this
                  , r = g++;
                n._id = r,
                n._store = t,
                n._tile = e,
                n._asset = null,
                n._texture = null,
                n._changeHandler = function() {
                    t.emit("textureInvalid", e)
                }
                ;
                var i = t.source()
                  , o = t.stage()
                  , s = i.loadAsset.bind(i)
                  , a = o.createTexture.bind(o)
                  , c = l(u(s), a);
                t.emit("textureStartLoad", e),
                p && console.log("loading", r, e),
                n._cancel = c(o, e, (function(i, o, s, a) {
                    if (n._cancel = null,
                    i)
                        return s && s.destroy(),
                        a && a.destroy(),
                        void (i instanceof _ ? (t.emit("textureCancel", e),
                        p && console.log("cancel", r, e)) : (t.emit("textureError", e, i),
                        p && console.log("error", r, e)));
                    n._texture = a,
                    s.isDynamic() ? (n._asset = s,
                    s.addEventListener("change", n._changeHandler)) : s.destroy(),
                    t.emit("textureLoad", e),
                    p && console.log("load", r, e)
                }
                ))
            }
            function w(t, e, n) {
                n = a(n || {}, y),
                this._source = t,
                this._stage = e,
                this._state = f,
                this._delimCount = 0,
                this._itemMap = new r,
                this._visible = new i,
                this._previouslyVisible = new o(n.previouslyVisibleCacheSize),
                this._pinMap = new r,
                this._newVisible = new i,
                this._noLongerVisible = [],
                this._visibleAgain = [],
                this._evicted = []
            }
            c(_, Error),
            b.prototype.asset = function() {
                return this._asset
            }
            ,
            b.prototype.texture = function() {
                return this._texture
            }
            ,
            b.prototype.destroy = function() {
                var t = this._id
                  , e = this._store
                  , n = this._tile
                  , r = this._asset
                  , i = this._texture
                  , o = this._cancel;
                o ? o(new _("Texture load cancelled")) : (r && (r.removeEventListener("change", this._changeHandler),
                r.destroy()),
                i && i.destroy(),
                e.emit("textureUnload", n),
                p && console.log("unload", t, n),
                h(this))
            }
            ,
            s(b),
            s(w),
            w.prototype.destroy = function() {
                this.clear(),
                h(this)
            }
            ,
            w.prototype.stage = function() {
                return this._stage
            }
            ,
            w.prototype.source = function() {
                return this._source
            }
            ,
            w.prototype.clear = function() {
                var t = this;
                t._evicted.length = 0,
                t._itemMap.forEach((function(e) {
                    t._evicted.push(e)
                }
                )),
                t._evicted.forEach((function(e) {
                    t._unloadTile(e)
                }
                )),
                t._itemMap.clear(),
                t._visible.clear(),
                t._previouslyVisible.clear(),
                t._pinMap.clear(),
                t._newVisible.clear(),
                t._noLongerVisible.length = 0,
                t._visibleAgain.length = 0,
                t._evicted.length = 0
            }
            ,
            w.prototype.clearNotPinned = function() {
                var t = this;
                t._evicted.length = 0,
                t._itemMap.forEach((function(e) {
                    t._pinMap.has(e) || t._evicted.push(e)
                }
                )),
                t._evicted.forEach((function(e) {
                    t._unloadTile(e)
                }
                )),
                t._visible.clear(),
                t._previouslyVisible.clear(),
                t._evicted.length = 0
            }
            ,
            w.prototype.startFrame = function() {
                if (this._state !== f && this._state !== d)
                    throw new Error("TextureStore: startFrame called out of sequence");
                this._state = d,
                this._delimCount++
            }
            ,
            w.prototype.markTile = function(t) {
                if (this._state !== d && this._state !== m)
                    throw new Error("TextureStore: markTile called out of sequence");
                this._state = m;
                var e = this._itemMap.get(t)
                  , n = e && e.texture()
                  , r = e && e.asset();
                n && r && n.refresh(t, r),
                this._newVisible.add(t)
            }
            ,
            w.prototype.endFrame = function() {
                if (this._state !== d && this._state !== m && this._state !== v)
                    throw new Error("TextureStore: endFrame called out of sequence");
                this._state = v,
                this._delimCount--,
                this._delimCount || (this._update(),
                this._state = f)
            }
            ,
            w.prototype._update = function() {
                var t = this;
                t._noLongerVisible.length = 0,
                t._visible.forEach((function(e) {
                    t._newVisible.has(e) || t._noLongerVisible.push(e)
                }
                )),
                t._visibleAgain.length = 0,
                t._newVisible.forEach((function(e) {
                    t._previouslyVisible.has(e) && t._visibleAgain.push(e)
                }
                )),
                t._visibleAgain.forEach((function(e) {
                    t._previouslyVisible.remove(e)
                }
                )),
                t._evicted.length = 0,
                t._noLongerVisible.forEach((function(e) {
                    var n = t._itemMap.get(e);
                    if (n && n.texture()) {
                        var r = t._previouslyVisible.add(e);
                        null != r && t._evicted.push(r)
                    } else
                        n && t._unloadTile(e)
                }
                )),
                t._evicted.forEach((function(e) {
                    t._pinMap.has(e) || t._unloadTile(e)
                }
                )),
                t._newVisible.forEach((function(e) {
                    t._itemMap.get(e) || t._loadTile(e)
                }
                ));
                var e = t._visible;
                t._visible = t._newVisible,
                t._newVisible = e,
                t._newVisible.clear(),
                t._noLongerVisible.length = 0,
                t._visibleAgain.length = 0,
                t._evicted.length = 0
            }
            ,
            w.prototype._loadTile = function(t) {
                if (this._itemMap.has(t))
                    throw new Error("TextureStore: loading texture already in cache");
                var e = new b(this,t);
                this._itemMap.set(t, e)
            }
            ,
            w.prototype._unloadTile = function(t) {
                var e = this._itemMap.del(t);
                if (!e)
                    throw new Error("TextureStore: unloading texture not in cache");
                e.destroy()
            }
            ,
            w.prototype.asset = function(t) {
                var e = this._itemMap.get(t);
                return e ? e.asset() : null
            }
            ,
            w.prototype.texture = function(t) {
                var e = this._itemMap.get(t);
                return e ? e.texture() : null
            }
            ,
            w.prototype.pin = function(t) {
                var e = (this._pinMap.get(t) || 0) + 1;
                return this._pinMap.set(t, e),
                this._itemMap.has(t) || this._loadTile(t),
                e
            }
            ,
            w.prototype.unpin = function(t) {
                var e = this._pinMap.get(t);
                if (!e)
                    throw new Error("TextureStore: unpin when not pinned");
                return --e > 0 ? this._pinMap.set(t, e) : (this._pinMap.del(t),
                this._visible.has(t) || this._previouslyVisible.has(t) || this._unloadTile(t)),
                e
            }
            ,
            w.prototype.query = function(t) {
                var e = this._itemMap.get(t)
                  , n = this._pinMap.get(t) || 0;
                return {
                    visible: this._visible.has(t),
                    previouslyVisible: this._previouslyVisible.has(t),
                    hasAsset: null != e && null != e.asset(),
                    hasTexture: null != e && null != e.texture(),
                    pinned: 0 !== n,
                    pinCount: n
                }
            }
            ,
            e.exports = w
        }
        , {
            "./collections/LruSet": 120,
            "./collections/Map": 121,
            "./collections/Set": 122,
            "./util/chain": 165,
            "./util/clearOwnProperties": 167,
            "./util/defaults": 172,
            "./util/inherits": 180,
            "./util/retry": 190,
            "minimal-event-emitter": 195
        }],
        113: [function(t, e, n) {
            "use strict";
            var r = t("./collections/Set");
            function i() {
                this._stack = [],
                this._visited = new r,
                this._vertices = null
            }
            i.prototype.search = function(t, e, n) {
                var r = this._stack
                  , i = this._visited
                  , o = this._vertices
                  , s = 0;
                for (this._clear(),
                r.push(e); r.length > 0; ) {
                    var a = r.pop();
                    if (!i.has(a) && t.intersects(a.vertices(o))) {
                        i.add(a);
                        for (var u = a.neighbors(), l = 0; l < u.length; l++)
                            r.push(u[l]);
                        n.push(a),
                        s++
                    }
                }
                return this._vertices = o,
                this._clear(),
                s
            }
            ,
            i.prototype._clear = function() {
                this._stack.length = 0,
                this._visited.clear()
            }
            ,
            e.exports = i
        }
        , {
            "./collections/Set": 122
        }],
        114: [function(t, e, n) {
            "use strict";
            var r = t("minimal-event-emitter")
              , i = t("./util/defaults")
              , o = t("./util/now")
              , s = {
                duration: 1 / 0
            };
            function a(t) {
                t = i(t || {}, s),
                this._duration = t.duration,
                this._startTime = null,
                this._handle = null,
                this._check = this._check.bind(this)
            }
            r(a),
            a.prototype.start = function() {
                this._startTime = o(),
                null == this._handle && this._duration < 1 / 0 && this._setup(this._duration)
            }
            ,
            a.prototype.started = function() {
                return null != this._startTime
            }
            ,
            a.prototype.stop = function() {
                this._startTime = null,
                null != this._handle && (clearTimeout(this._handle),
                this._handle = null)
            }
            ,
            a.prototype._setup = function(t) {
                this._handle = setTimeout(this._check, t)
            }
            ,
            a.prototype._teardown = function() {
                clearTimeout(this._handle),
                this._handle = null
            }
            ,
            a.prototype._check = function() {
                var t = o() - this._startTime
                  , e = this._duration - t;
                this._teardown(),
                e <= 0 ? (this.emit("timeout"),
                this._startTime = null) : e < 1 / 0 && this._setup(e)
            }
            ,
            a.prototype.duration = function() {
                return this._duration
            }
            ,
            a.prototype.setDuration = function(t) {
                this._duration = t,
                null != this._startTime && this._check()
            }
            ,
            e.exports = a
        }
        , {
            "./util/defaults": 172,
            "./util/now": 184,
            "minimal-event-emitter": 195
        }],
        115: [function(t, e, n) {
            "use strict";
            var r = t("minimal-event-emitter")
              , i = t("./RenderLoop")
              , o = t("./controls/Controls")
              , s = t("./Scene")
              , a = t("./Timer")
              , u = t("./stages/WebGl")
              , l = t("./controls/ControlCursor")
              , c = t("./controls/HammerGestures")
              , h = t("./controls/registerDefaultControls")
              , p = t("./renderers/registerDefaultRenderers")
              , f = t("./util/dom").setOverflowHidden
              , d = t("./util/dom").setAbsolute
              , m = t("./util/dom").setFullSize
              , v = t("./util/tween")
              , y = t("./util/noop")
              , g = t("./util/clearOwnProperties");
            function _(t, e) {
                e = e || {},
                this._domElement = t,
                f(t),
                this._stage = new u(e.stage),
                p(this._stage),
                this._domElement.appendChild(this._stage.domElement()),
                this._controlContainer = document.createElement("div"),
                d(this._controlContainer),
                m(this._controlContainer),
                t.appendChild(this._controlContainer),
                this._size = {},
                this.updateSize(),
                this._updateSizeListener = this.updateSize.bind(this),
                window.addEventListener("resize", this._updateSizeListener),
                this._renderLoop = new i(this._stage),
                this._controls = new o,
                this._controlMethods = h(this._controls, this._controlContainer, e.controls),
                this._controls.attach(this._renderLoop),
                this._hammerManagerTouch = c.get(this._controlContainer, "touch"),
                this._hammerManagerMouse = c.get(this._controlContainer, "mouse"),
                this._dragCursor = new l(this._controls,"mouseViewDrag",t,e.cursors && e.cursors.drag || {}),
                this._renderLoop.start(),
                this._scenes = [],
                this._currentScene = null,
                this._replacedScene = null,
                this._cancelCurrentTween = null,
                this._layerChangeHandler = this._updateSceneLayers.bind(this),
                this._viewChangeHandler = this.emit.bind(this, "viewChange"),
                this._idleTimer = new a,
                this._idleTimer.start(),
                this._resetIdleTimerHandler = this._resetIdleTimer.bind(this),
                this.addEventListener("viewChange", this._resetIdleTimerHandler),
                this._triggerIdleTimerHandler = this._triggerIdleTimer.bind(this),
                this._idleTimer.addEventListener("timeout", this._triggerIdleTimerHandler),
                this._stopMovementHandler = this.stopMovement.bind(this),
                this._controls.addEventListener("active", this._stopMovementHandler),
                this.addEventListener("sceneChange", this._stopMovementHandler),
                this._idleMovement = null
            }
            r(_),
            _.prototype.destroy = function() {
                for (var t in window.removeEventListener("resize", this._updateSizeListener),
                this._currentScene && this._removeSceneEventListeners(this._currentScene),
                this._replacedScene && this._removeSceneEventListeners(this._replacedScene),
                this._dragCursor.destroy(),
                this._controlMethods)
                    this._controlMethods[t].destroy();
                for (; this._scenes.length; )
                    this.destroyScene(this._scenes[0]);
                this._domElement.removeChild(this._stage.domElement()),
                this._stage.destroy(),
                this._renderLoop.destroy(),
                this._controls.destroy(),
                this._controls = null,
                this._cancelCurrentTween && this._cancelCurrentTween(),
                g(this)
            }
            ,
            _.prototype.updateSize = function() {
                var t = this._size;
                t.width = this._domElement.clientWidth,
                t.height = this._domElement.clientHeight,
                this._stage.setSize(t)
            }
            ,
            _.prototype.stage = function() {
                return this._stage
            }
            ,
            _.prototype.renderLoop = function() {
                return this._renderLoop
            }
            ,
            _.prototype.controls = function() {
                return this._controls
            }
            ,
            _.prototype.domElement = function() {
                return this._domElement
            }
            ,
            _.prototype.createScene = function(t) {
                t = t || {};
                var e = this.createEmptyScene({
                    view: t.view
                });
                return e.createLayer({
                    source: t.source,
                    geometry: t.geometry,
                    pinFirstLevel: t.pinFirstLevel,
                    textureStoreOpts: t.textureStoreOpts,
                    layerOpts: t.layerOpts
                }),
                e
            }
            ,
            _.prototype.createEmptyScene = function(t) {
                var e = new s(this,(t = t || {}).view);
                return this._scenes.push(e),
                e
            }
            ,
            _.prototype._updateSceneLayers = function() {
                var t, e, n = this._stage, r = this._currentScene, i = this._replacedScene, o = n.listLayers(), s = [];
                if (i && (s = s.concat(i.listLayers())),
                r && (s = s.concat(r.listLayers())),
                1 !== Math.abs(o.length - s.length))
                    throw new Error("Stage and scene out of sync");
                if (s.length < o.length)
                    for (t = 0; t < o.length; t++)
                        if (e = o[t],
                        s.indexOf(e) < 0) {
                            this._removeLayerFromStage(e);
                            break
                        }
                if (s.length > o.length)
                    for (t = 0; t < s.length; t++)
                        e = s[t],
                        o.indexOf(e) < 0 && this._addLayerToStage(e, t)
            }
            ,
            _.prototype._addLayerToStage = function(t, e) {
                t.pinFirstLevel(),
                this._stage.addLayer(t, e)
            }
            ,
            _.prototype._removeLayerFromStage = function(t) {
                this._stage.removeLayer(t),
                t.unpinFirstLevel(),
                t.textureStore().clearNotPinned()
            }
            ,
            _.prototype._addSceneEventListeners = function(t) {
                t.addEventListener("layerChange", this._layerChangeHandler),
                t.addEventListener("viewChange", this._viewChangeHandler)
            }
            ,
            _.prototype._removeSceneEventListeners = function(t) {
                t.removeEventListener("layerChange", this._layerChangeHandler),
                t.removeEventListener("viewChange", this._viewChangeHandler)
            }
            ,
            _.prototype.destroyScene = function(t) {
                var e, n, r = this._scenes.indexOf(t);
                if (r < 0)
                    throw new Error("No such scene in viewer");
                if (this._currentScene === t) {
                    for (this._removeSceneEventListeners(t),
                    n = t.listLayers(),
                    e = 0; e < n.length; e++)
                        this._removeLayerFromStage(n[e]);
                    this._cancelCurrentTween && (this._cancelCurrentTween(),
                    this._cancelCurrentTween = null),
                    this._currentScene = null,
                    this.emit("sceneChange")
                }
                if (this._replacedScene === t) {
                    for (this._removeSceneEventListeners(t),
                    n = t.listLayers(),
                    e = 0; e < n.length; e++)
                        this._removeLayerFromStage(n[e]);
                    this._replacedScene = null
                }
                this._scenes.splice(r, 1),
                t.destroy()
            }
            ,
            _.prototype.destroyAllScenes = function() {
                for (; this._scenes.length > 0; )
                    this.destroyScene(this._scenes[0])
            }
            ,
            _.prototype.hasScene = function(t) {
                return this._scenes.indexOf(t) >= 0
            }
            ,
            _.prototype.listScenes = function() {
                return [].concat(this._scenes)
            }
            ,
            _.prototype.scene = function() {
                return this._currentScene
            }
            ,
            _.prototype.view = function() {
                var t = this._currentScene;
                return t ? t.view() : null
            }
            ,
            _.prototype.lookTo = function(t, e, n) {
                var r = this._currentScene;
                r && r.lookTo(t, e, n)
            }
            ,
            _.prototype.startMovement = function(t, e) {
                var n = this._currentScene;
                n && n.startMovement(t, e)
            }
            ,
            _.prototype.stopMovement = function() {
                var t = this._currentScene;
                t && t.stopMovement()
            }
            ,
            _.prototype.movement = function() {
                var t = this._currentScene;
                if (t)
                    return t.movement()
            }
            ,
            _.prototype.setIdleMovement = function(t, e) {
                this._idleTimer.setDuration(t),
                this._idleMovement = e
            }
            ,
            _.prototype.breakIdleMovement = function() {
                this.stopMovement(),
                this._resetIdleTimer()
            }
            ,
            _.prototype._resetIdleTimer = function() {
                this._idleTimer.start()
            }
            ,
            _.prototype._triggerIdleTimer = function() {
                var t = this._idleMovement;
                t && this.startMovement(t)
            }
            ;
            function b(t, e, n) {
                e.listLayers().forEach((function(e) {
                    e.mergeEffects({
                        opacity: t
                    })
                }
                )),
                e._hotspotContainer.domElement().style.opacity = t
            }
            _.prototype.switchScene = function(t, e, n) {
                var r = this;
                e = e || {},
                n = n || y;
                var i = this._stage
                  , o = this._currentScene;
                if (o !== t) {
                    if (this._scenes.indexOf(t) < 0)
                        throw new Error("No such scene in viewer");
                    this._cancelCurrentTween && (this._cancelCurrentTween(),
                    this._cancelCurrentTween = null);
                    var s = o ? o.listLayers() : []
                      , a = t.listLayers()
                      , u = i.listLayers();
                    if (o && (u.length !== s.length || u.length > 1 && u[0] != s[0]))
                        throw new Error("Stage not in sync with viewer");
                    for (var l = null != e.transitionDuration ? e.transitionDuration : 1e3, c = null != e.transitionUpdate ? e.transitionUpdate : b, h = 0; h < a.length; h++)
                        this._addLayerToStage(a[h]);
                    this._cancelCurrentTween = v(l, (function(e) {
                        c(e, t, o)
                    }
                    ), (function() {
                        if (r._replacedScene) {
                            r._removeSceneEventListeners(r._replacedScene),
                            s = r._replacedScene.listLayers();
                            for (var t = 0; t < s.length; t++)
                                r._removeLayerFromStage(s[t]);
                            r._replacedScene = null
                        }
                        r._cancelCurrentTween = null,
                        n()
                    }
                    )),
                    this._currentScene = t,
                    this._replacedScene = o,
                    this.emit("sceneChange"),
                    this.emit("viewChange"),
                    this._addSceneEventListeners(t)
                } else
                    n()
            }
            ,
            e.exports = _
        }
        , {
            "./RenderLoop": 110,
            "./Scene": 111,
            "./Timer": 114,
            "./controls/ControlCursor": 127,
            "./controls/Controls": 128,
            "./controls/HammerGestures": 132,
            "./controls/registerDefaultControls": 138,
            "./renderers/registerDefaultRenderers": 152,
            "./stages/WebGl": 161,
            "./util/clearOwnProperties": 167,
            "./util/dom": 176,
            "./util/noop": 183,
            "./util/tween": 191,
            "minimal-event-emitter": 195
        }],
        116: [function(t, e, n) {
            "use strict";
            var r = t("./Static")
              , i = t("../util/inherits")
              , o = t("minimal-event-emitter")
              , s = t("../util/clearOwnProperties");
            function a(t) {
                this.constructor.super_.call(this, t),
                this._timestamp = 0
            }
            i(a, r),
            o(a),
            a.prototype.destroy = function() {
                s(this)
            }
            ,
            a.prototype.timestamp = function() {
                return this._timestamp
            }
            ,
            a.prototype.isDynamic = function() {
                return !0
            }
            ,
            a.prototype.markDirty = function() {
                this._timestamp++,
                this.emit("change")
            }
            ,
            e.exports = a
        }
        , {
            "../util/clearOwnProperties": 167,
            "../util/inherits": 180,
            "./Static": 117,
            "minimal-event-emitter": 195
        }],
        117: [function(t, e, n) {
            "use strict";
            var r = t("../util/global")
              , i = t("minimal-event-emitter")
              , o = t("../util/clearOwnProperties")
              , s = {
                HTMLImageElement: ["naturalWidth", "naturalHeight"],
                HTMLCanvasElement: ["width", "height"],
                ImageBitmap: ["width", "height"]
            };
            function a(t) {
                var e = !1;
                for (var n in s)
                    if (r[n] && t instanceof r[n]) {
                        e = !0,
                        this._widthProp = s[n][0],
                        this._heightProp = s[n][1];
                        break
                    }
                if (!e)
                    throw new Error("Unsupported pixel source");
                this._element = t
            }
            i(a),
            a.prototype.destroy = function() {
                o(this)
            }
            ,
            a.prototype.element = function() {
                return this._element
            }
            ,
            a.prototype.width = function() {
                return this._element[this._widthProp]
            }
            ,
            a.prototype.height = function() {
                return this._element[this._heightProp]
            }
            ,
            a.prototype.timestamp = function() {
                return 0
            }
            ,
            a.prototype.isDynamic = function() {
                return !1
            }
            ,
            e.exports = a
        }
        , {
            "../util/clearOwnProperties": 167,
            "../util/global": 178,
            "minimal-event-emitter": 195
        }],
        118: [function(t, e, n) {
            "use strict";
            var r = t("./util/defaults")
              , i = .01
              , o = {
                yawSpeed: .1,
                pitchSpeed: .1,
                fovSpeed: .1,
                yawAccel: i,
                pitchAccel: i,
                fovAccel: i,
                targetPitch: 0,
                targetFov: null
            };
            e.exports = function(t) {
                var e = (t = r(t || {}, o)).yawSpeed
                  , n = t.pitchSpeed
                  , i = t.fovSpeed
                  , s = t.yawAccel
                  , a = t.pitchAccel
                  , u = t.fovAccel
                  , l = t.targetPitch
                  , c = t.targetFov;
                return function() {
                    var t, r, o, h, p = 0, f = 0, d = 0, m = 0, v = 0, y = 0, g = 0;
                    return function(_, b) {
                        if (t = (b - p) / 1e3,
                        v = Math.min(f + t * s, e),
                        r = v * t,
                        _.yaw = _.yaw + r,
                        null != l && _.pitch !== l) {
                            var w = .5 * d * d / a;
                            y = Math.abs(l - _.pitch) > w ? Math.min(d + t * a, n) : Math.max(d - t * a, 0),
                            o = y * t,
                            l < _.pitch && (_.pitch = Math.max(l, _.pitch - o)),
                            l > _.pitch && (_.pitch = Math.min(l, _.pitch + o))
                        }
                        if (null != c && _.fov !== l) {
                            var x = .5 * m * m / u;
                            g = Math.abs(c - _.fov) > x ? Math.min(m + t * u, i) : Math.max(m - t * u, 0),
                            h = g * t,
                            c < _.fov && (_.fov = Math.max(c, _.fov - h)),
                            c > _.fov && (_.fov = Math.min(c, _.fov + h))
                        }
                        return p = b,
                        f = v,
                        d = y,
                        m = g,
                        _
                    }
                }
            }
        }
        , {
            "./util/defaults": 172
        }],
        119: [function(t, e, n) {
            "use strict";
            var r = t("../util/mod");
            function i(t) {
                if (!isFinite(t) || Math.floor(t) !== t || t < 0)
                    throw new Error("LruMap: invalid capacity");
                this._capacity = t,
                this._keys = new Array(this._capacity),
                this._values = new Array(this._capacity),
                this._start = 0,
                this._size = 0
            }
            i.prototype._index = function(t) {
                return r(this._start + t, this._capacity)
            }
            ,
            i.prototype.get = function(t) {
                for (var e = 0; e < this._size; e++) {
                    var n = this._keys[this._index(e)];
                    if (t.equals(n))
                        return this._values[this._index(e)]
                }
                return null
            }
            ,
            i.prototype.set = function(t, e) {
                if (0 === this._capacity)
                    return t;
                this.del(t);
                var n = this._size === this._capacity ? this._keys[this._index(0)] : null;
                return this._keys[this._index(this._size)] = t,
                this._values[this._index(this._size)] = e,
                this._size < this._capacity ? this._size++ : this._start = this._index(1),
                n
            }
            ,
            i.prototype.del = function(t) {
                for (var e = 0; e < this._size; e++)
                    if (t.equals(this._keys[this._index(e)])) {
                        for (var n = this._values[this._index(e)], r = e; r < this._size - 1; r++)
                            this._keys[this._index(r)] = this._keys[this._index(r + 1)],
                            this._values[this._index(r)] = this._values[this._index(r + 1)];
                        return this._size--,
                        n
                    }
                return null
            }
            ,
            i.prototype.has = function(t) {
                for (var e = 0; e < this._size; e++)
                    if (t.equals(this._keys[this._index(e)]))
                        return !0;
                return !1
            }
            ,
            i.prototype.size = function() {
                return this._size
            }
            ,
            i.prototype.clear = function() {
                this._keys.length = 0,
                this._values.length = 0,
                this._start = 0,
                this._size = 0
            }
            ,
            i.prototype.forEach = function(t) {
                for (var e = 0, n = 0; n < this._size; n++)
                    t(this._keys[this._index(n)], this._values[this._index(n)]),
                    e += 1;
                return e
            }
            ,
            e.exports = i
        }
        , {
            "../util/mod": 182
        }],
        120: [function(t, e, n) {
            "use strict";
            var r = t("../util/mod");
            function i(t) {
                if (!isFinite(t) || Math.floor(t) !== t || t < 0)
                    throw new Error("LruSet: invalid capacity");
                this._capacity = t,
                this._elements = new Array(this._capacity),
                this._start = 0,
                this._size = 0
            }
            i.prototype._index = function(t) {
                return r(this._start + t, this._capacity)
            }
            ,
            i.prototype.add = function(t) {
                if (0 === this._capacity)
                    return t;
                this.remove(t);
                var e = this._size === this._capacity ? this._elements[this._index(0)] : null;
                return this._elements[this._index(this._size)] = t,
                this._size < this._capacity ? this._size++ : this._start = this._index(1),
                e
            }
            ,
            i.prototype.remove = function(t) {
                for (var e = 0; e < this._size; e++) {
                    var n = this._elements[this._index(e)];
                    if (t.equals(n)) {
                        for (var r = e; r < this._size - 1; r++)
                            this._elements[this._index(r)] = this._elements[this._index(r + 1)];
                        return this._size--,
                        n
                    }
                }
                return null
            }
            ,
            i.prototype.has = function(t) {
                for (var e = 0; e < this._size; e++)
                    if (t.equals(this._elements[this._index(e)]))
                        return !0;
                return !1
            }
            ,
            i.prototype.size = function() {
                return this._size
            }
            ,
            i.prototype.clear = function() {
                this._elements.length = 0,
                this._start = 0,
                this._size = 0
            }
            ,
            i.prototype.forEach = function(t) {
                for (var e = 0, n = 0; n < this._size; n++)
                    t(this._elements[this._index(n)]),
                    e += 1;
                return e
            }
            ,
            e.exports = i
        }
        , {
            "../util/mod": 182
        }],
        121: [function(t, e, n) {
            "use strict";
            var r = t("../util/mod");
            function i(t) {
                if (null != t && (!isFinite(t) || Math.floor(t) !== t || t < 1))
                    throw new Error("Map: invalid capacity");
                this._capacity = t || 64,
                this._keyBuckets = [],
                this._valBuckets = [];
                for (var e = 0; e < this._capacity; e++)
                    this._keyBuckets.push([]),
                    this._valBuckets.push([]);
                this._size = 0
            }
            i.prototype.get = function(t) {
                for (var e = r(t.hash(), this._capacity), n = this._keyBuckets[e], i = 0; i < n.length; i++) {
                    var o = n[i];
                    if (t.equals(o))
                        return this._valBuckets[e][i]
                }
                return null
            }
            ,
            i.prototype.set = function(t, e) {
                for (var n = r(t.hash(), this._capacity), i = this._keyBuckets[n], o = this._valBuckets[n], s = 0; s < i.length; s++) {
                    var a = i[s];
                    if (t.equals(a)) {
                        var u = o[s];
                        return i[s] = t,
                        o[s] = e,
                        u
                    }
                }
                return i.push(t),
                o.push(e),
                this._size++,
                null
            }
            ,
            i.prototype.del = function(t) {
                for (var e = r(t.hash(), this._capacity), n = this._keyBuckets[e], i = this._valBuckets[e], o = 0; o < n.length; o++) {
                    var s = n[o];
                    if (t.equals(s)) {
                        for (var a = i[o], u = o; u < n.length - 1; u++)
                            n[u] = n[u + 1],
                            i[u] = i[u + 1];
                        return n.length = n.length - 1,
                        i.length = i.length - 1,
                        this._size--,
                        a
                    }
                }
                return null
            }
            ,
            i.prototype.has = function(t) {
                for (var e = r(t.hash(), this._capacity), n = this._keyBuckets[e], i = 0; i < n.length; i++) {
                    var o = n[i];
                    if (t.equals(o))
                        return !0
                }
                return !1
            }
            ,
            i.prototype.size = function() {
                return this._size
            }
            ,
            i.prototype.clear = function() {
                for (var t = 0; t < this._capacity; t++)
                    this._keyBuckets[t].length = 0,
                    this._valBuckets[t].length = 0;
                this._size = 0
            }
            ,
            i.prototype.forEach = function(t) {
                for (var e = 0, n = 0; n < this._capacity; n++)
                    for (var r = this._keyBuckets[n], i = this._valBuckets[n], o = 0; o < r.length; o++)
                        t(r[o], i[o]),
                        e += 1;
                return e
            }
            ,
            e.exports = i
        }
        , {
            "../util/mod": 182
        }],
        122: [function(t, e, n) {
            "use strict";
            var r = t("../util/mod");
            function i(t) {
                if (null != t && (!isFinite(t) || Math.floor(t) !== t || t < 1))
                    throw new Error("Set: invalid capacity");
                this._capacity = this._capacity || 64,
                this._buckets = [];
                for (var e = 0; e < this._capacity; e++)
                    this._buckets.push([]);
                this._size = 0
            }
            i.prototype.add = function(t) {
                for (var e = r(t.hash(), this._capacity), n = this._buckets[e], i = 0; i < n.length; i++) {
                    var o = n[i];
                    if (t.equals(o))
                        return n[i] = t,
                        o
                }
                return n.push(t),
                this._size++,
                null
            }
            ,
            i.prototype.remove = function(t) {
                for (var e = r(t.hash(), this._capacity), n = this._buckets[e], i = 0; i < n.length; i++) {
                    var o = n[i];
                    if (t.equals(o)) {
                        for (var s = i; s < n.length - 1; s++)
                            n[s] = n[s + 1];
                        return n.length = n.length - 1,
                        this._size--,
                        o
                    }
                }
                return null
            }
            ,
            i.prototype.has = function(t) {
                for (var e = r(t.hash(), this._capacity), n = this._buckets[e], i = 0; i < n.length; i++) {
                    var o = n[i];
                    if (t.equals(o))
                        return !0
                }
                return !1
            }
            ,
            i.prototype.size = function() {
                return this._size
            }
            ,
            i.prototype.clear = function() {
                for (var t = 0; t < this._capacity; t++)
                    this._buckets[t].length = 0;
                this._size = 0
            }
            ,
            i.prototype.forEach = function(t) {
                for (var e = 0, n = 0; n < this._capacity; n++)
                    for (var r = this._buckets[n], i = 0; i < r.length; i++)
                        t(r[i]),
                        e += 1;
                return e
            }
            ,
            e.exports = i
        }
        , {
            "../util/mod": 182
        }],
        123: [function(t, e, n) {
            "use strict";
            var r = t("./WorkQueue")
              , i = t("../util/mod");
            function o(t) {
                this._concurrency = t && t.concurrency || 1,
                this._paused = t && !!t.paused || !1,
                this._pool = [];
                for (var e = 0; e < this._concurrency; e++)
                    this._pool.push(new r(t));
                this._next = 0
            }
            o.prototype.length = function() {
                for (var t = 0, e = 0; e < this._pool.length; e++)
                    t += this._pool[e].length();
                return t
            }
            ,
            o.prototype.push = function(t, e) {
                var n = this._next
                  , r = this._pool[n].push(t, e);
                return this._next = i(this._next + 1, this._concurrency),
                r
            }
            ,
            o.prototype.pause = function() {
                if (!this._paused) {
                    this._paused = !0;
                    for (var t = 0; t < this._concurrency; t++)
                        this._pool[t].pause()
                }
            }
            ,
            o.prototype.resume = function() {
                if (this._paused) {
                    this._paused = !1;
                    for (var t = 0; t < this._concurrency; t++)
                        this._pool[t].resume()
                }
            }
            ,
            e.exports = o
        }
        , {
            "../util/mod": 182,
            "./WorkQueue": 124
        }],
        124: [function(t, e, n) {
            "use strict";
            var r = t("../util/now");
            function i(t, e) {
                this.fn = t,
                this.cb = e,
                this.cfn = null
            }
            function o(t) {
                this._queue = [],
                this._delay = t && t.delay || 0,
                this._paused = t && !!t.paused || !1,
                this._currentTask = null,
                this._lastFinished = null
            }
            o.prototype.length = function() {
                return this._queue.length
            }
            ,
            o.prototype.push = function(t, e) {
                var n = new i(t,e)
                  , r = this._cancel.bind(this, n);
                return this._queue.push(n),
                this._next(),
                r
            }
            ,
            o.prototype.pause = function() {
                this._paused || (this._paused = !0)
            }
            ,
            o.prototype.resume = function() {
                this._paused && (this._paused = !1,
                this._next())
            }
            ,
            o.prototype._start = function(t) {
                if (this._currentTask)
                    throw new Error("WorkQueue: called start while running task");
                this._currentTask = t;
                var e = this._finish.bind(this, t);
                if (t.cfn = t.fn(e),
                "function" != typeof t.cfn)
                    throw new Error("WorkQueue: function is not cancellable")
            }
            ,
            o.prototype._finish = function(t) {
                var e = Array.prototype.slice.call(arguments, 1);
                if (this._currentTask !== t)
                    throw new Error("WorkQueue: called finish on wrong task");
                t.cb.apply(null, e),
                this._currentTask = null,
                this._lastFinished = r(),
                this._next()
            }
            ,
            o.prototype._cancel = function(t) {
                var e = Array.prototype.slice.call(arguments, 1);
                if (this._currentTask === t)
                    t.cfn.apply(null, e);
                else {
                    var n = this._queue.indexOf(t);
                    n >= 0 && (this._queue.splice(n, 1),
                    t.cb.apply(null, e))
                }
            }
            ,
            o.prototype._next = function() {
                if (!this._paused && this._queue.length && !this._currentTask) {
                    if (null != this._lastFinished) {
                        var t = r() - this._lastFinished
                          , e = this._delay - t;
                        if (e > 0)
                            return void setTimeout(this._next.bind(this), e)
                    }
                    var n = this._queue.shift();
                    this._start(n)
                }
            }
            ,
            e.exports = o
        }
        , {
            "../util/now": 184
        }],
        125: [function(t, e, n) {
            "use strict";
            var r = t("gl-matrix").vec4
              , i = t("gl-matrix").mat4;
            function o(t, e, n) {
                var i, o, s, a, u, l, c;
                i = n,
                o = t,
                s = e.colorMatrix,
                a = o[0],
                u = o[1],
                l = o[2],
                c = o[3],
                i[0] = s[0] * a + s[1] * u + s[2] * l + s[3] * c,
                i[1] = s[4] * a + s[5] * u + s[6] * l + s[7] * c,
                i[2] = s[8] * a + s[9] * u + s[10] * l + s[11] * c,
                i[3] = s[12] * a + s[13] * u + s[14] * l + s[15] * c,
                r.add(n, n, e.colorOffset)
            }
            var s = r.create();
            e.exports = {
                identity: function(t) {
                    var e = t || {};
                    return e.colorOffset = e.colorOffset || r.create(),
                    e.colorMatrix = e.colorMatrix || i.create(),
                    e
                },
                applyToPixel: o,
                applyToImageData: function(t, e) {
                    for (var n = t.width, i = t.height, a = t.data, u = 0; u < n * i; u++)
                        r.set(s, a[4 * u + 0] / 255, a[4 * u + 1] / 255, a[4 * u + 2] / 255, a[4 * u + 3] / 255),
                        o(s, e, s),
                        a[4 * u + 0] = 255 * s[0],
                        a[4 * u + 1] = 255 * s[1],
                        a[4 * u + 2] = 255 * s[2],
                        a[4 * u + 3] = 255 * s[3]
                }
            }
        }
        , {
            "gl-matrix": 5
        }],
        126: [function(t, e, n) {
            "use strict";
            var r = t("minimal-event-emitter")
              , i = t("./Dynamics")
              , o = t("../util/now")
              , s = t("../util/clearOwnProperties");
            function a(t) {
                t = t || {},
                this._methods = [],
                this._parameters = ["x", "y", "axisScaledX", "axisScaledY", "zoom", "yaw", "pitch", "roll"],
                this._now = t.nowForTesting || o,
                this._composedOffsets = {},
                this._composeReturn = {
                    offsets: this._composedOffsets,
                    changing: null
                }
            }
            r(a),
            a.prototype.add = function(t) {
                if (!this.has(t)) {
                    var e = {};
                    this._parameters.forEach((function(t) {
                        e[t] = {
                            dynamics: new i,
                            time: null
                        }
                    }
                    ));
                    var n = this._updateDynamics.bind(this, e)
                      , r = {
                        instance: t,
                        dynamics: e,
                        parameterDynamicsHandler: n
                    };
                    t.addEventListener("parameterDynamics", n),
                    this._methods.push(r)
                }
            }
            ,
            a.prototype.remove = function(t) {
                var e = this._indexOfInstance(t);
                if (e >= 0) {
                    var n = this._methods.splice(e, 1)[0];
                    n.instance.removeEventListener("parameterDynamics", n.parameterDynamicsHandler)
                }
            }
            ,
            a.prototype.has = function(t) {
                return this._indexOfInstance(t) >= 0
            }
            ,
            a.prototype._indexOfInstance = function(t) {
                for (var e = 0; e < this._methods.length; e++)
                    if (this._methods[e].instance === t)
                        return e;
                return -1
            }
            ,
            a.prototype.list = function() {
                for (var t = [], e = 0; e < this._methods.length; e++)
                    t.push(this._methods[e].instance);
                return t
            }
            ,
            a.prototype._updateDynamics = function(t, e, n) {
                var r = t[e];
                if (!r)
                    throw new Error("Unknown control parameter " + e);
                var i = this._now();
                r.dynamics.update(n, (i - r.time) / 1e3),
                r.time = i,
                this.emit("change")
            }
            ,
            a.prototype._resetComposedOffsets = function() {
                for (var t = 0; t < this._parameters.length; t++)
                    this._composedOffsets[this._parameters[t]] = 0
            }
            ,
            a.prototype.offsets = function() {
                var t, e = !1, n = this._now();
                this._resetComposedOffsets();
                for (var r = 0; r < this._methods.length; r++)
                    for (var i = this._methods[r].dynamics, o = 0; o < this._parameters.length; o++) {
                        var s = i[t = this._parameters[o]]
                          , a = s.dynamics;
                        null != a.offset && (this._composedOffsets[t] += a.offset,
                        a.offset = null);
                        var u = (n - s.time) / 1e3
                          , l = a.offsetFromVelocity(u);
                        l && (this._composedOffsets[t] += l);
                        var c = a.velocityAfter(u);
                        a.velocity = c,
                        c && (e = !0),
                        s.time = n
                    }
                return this._composeReturn.changing = e,
                this._composeReturn
            }
            ,
            a.prototype.destroy = function() {
                for (var t = this.list(), e = 0; e < t.length; e++)
                    this.remove(t[e]);
                s(this)
            }
            ,
            e.exports = a
        }
        , {
            "../util/clearOwnProperties": 167,
            "../util/now": 184,
            "./Dynamics": 130,
            "minimal-event-emitter": 195
        }],
        127: [function(t, e, n) {
            "use strict";
            var r = t("../util/defaults")
              , i = t("../util/clearOwnProperties")
              , o = {
                active: "move",
                inactive: "default",
                disabled: "default"
            };
            function s(t, e, n, i) {
                i = r(i || {}, o),
                this._element = n,
                this._controls = t,
                this._id = e,
                this._attached = !1,
                this._setActiveCursor = this._setCursor.bind(this, i.active),
                this._setInactiveCursor = this._setCursor.bind(this, i.inactive),
                this._setDisabledCursor = this._setCursor.bind(this, i.disabled),
                this._setOriginalCursor = this._setCursor.bind(this, this._element.style.cursor),
                this._updateAttachmentHandler = this._updateAttachment.bind(this),
                t.addEventListener("methodEnabled", this._updateAttachmentHandler),
                t.addEventListener("methodDisabled", this._updateAttachmentHandler),
                t.addEventListener("enabled", this._updateAttachmentHandler),
                t.addEventListener("disabled", this._updateAttachmentHandler),
                this._updateAttachment()
            }
            s.prototype.destroy = function() {
                this._detachFromControlMethod(this._controls.method(this._id)),
                this._setOriginalCursor(),
                this._controls.removeEventListener("methodEnabled", this._updateAttachmentHandler),
                this._controls.removeEventListener("methodDisabled", this._updateAttachmentHandler),
                this._controls.removeEventListener("enabled", this._updateAttachmentHandler),
                this._controls.removeEventListener("disabled", this._updateAttachmentHandler),
                i(this)
            }
            ,
            s.prototype._updateAttachment = function() {
                var t = this._controls
                  , e = this._id;
                t.enabled() && t.method(e).enabled ? this._attachToControlMethod(t.method(e)) : this._detachFromControlMethod(t.method(e))
            }
            ,
            s.prototype._attachToControlMethod = function(t) {
                this._attached || (t.instance.addEventListener("active", this._setActiveCursor),
                t.instance.addEventListener("inactive", this._setInactiveCursor),
                t.active ? this._setActiveCursor() : this._setInactiveCursor(),
                this._attached = !0)
            }
            ,
            s.prototype._detachFromControlMethod = function(t) {
                this._attached && (t.instance.removeEventListener("active", this._setActiveCursor),
                t.instance.removeEventListener("inactive", this._setInactiveCursor),
                this._setDisabledCursor(),
                this._attached = !1)
            }
            ,
            s.prototype._setCursor = function(t) {
                this._element.style.cursor = t
            }
            ,
            e.exports = s
        }
        , {
            "../util/clearOwnProperties": 167,
            "../util/defaults": 172
        }],
        128: [function(t, e, n) {
            "use strict";
            var r = t("minimal-event-emitter")
              , i = t("./Composer")
              , o = t("../util/clearOwnProperties")
              , s = "undefined" != typeof MARZIPANODEBUG && MARZIPANODEBUG.controls;
            function a(t) {
                t = t || {},
                this._methods = {},
                this._methodGroups = {},
                this._composer = new i,
                this._enabled = !t || !t.enabled || !!t.enabled,
                this._activeCount = 0,
                this.updatedViews_ = [],
                this._attachedRenderLoop = null
            }
            r(a),
            a.prototype.destroy = function() {
                this.detach(),
                this._composer.destroy(),
                o(this)
            }
            ,
            a.prototype.methods = function() {
                var t = {};
                for (var e in this._methods)
                    t[e] = this._methods[e];
                return t
            }
            ,
            a.prototype.method = function(t) {
                return this._methods[t]
            }
            ,
            a.prototype.registerMethod = function(t, e, n) {
                if (this._methods[t])
                    throw new Error("Control method already registered with id " + t);
                this._methods[t] = {
                    instance: e,
                    enabled: !1,
                    active: !1,
                    activeHandler: this._handleActive.bind(this, t),
                    inactiveHandler: this._handleInactive.bind(this, t)
                },
                n && this.enableMethod(t, e)
            }
            ,
            a.prototype.unregisterMethod = function(t) {
                var e = this._methods[t];
                if (!e)
                    throw new Error("No control method registered with id " + t);
                e.enabled && this.disableMethod(t),
                delete this._methods[t]
            }
            ,
            a.prototype.enableMethod = function(t) {
                var e = this._methods[t];
                if (!e)
                    throw new Error("No control method registered with id " + t);
                e.enabled || (e.enabled = !0,
                e.active && this._incrementActiveCount(),
                this._listen(t),
                this._updateComposer(),
                this.emit("methodEnabled", t))
            }
            ,
            a.prototype.disableMethod = function(t) {
                var e = this._methods[t];
                if (!e)
                    throw new Error("No control method registered with id " + t);
                e.enabled && (e.enabled = !1,
                e.active && this._decrementActiveCount(),
                this._unlisten(t),
                this._updateComposer(),
                this.emit("methodDisabled", t))
            }
            ,
            a.prototype.addMethodGroup = function(t, e) {
                this._methodGroups[t] = e
            }
            ,
            a.prototype.removeMethodGroup = function(t) {
                delete this._methodGroups[t]
            }
            ,
            a.prototype.methodGroups = function() {
                var t = {};
                for (var e in this._methodGroups)
                    t[e] = this._methodGroups[e];
                return t
            }
            ,
            a.prototype.enableMethodGroup = function(t) {
                var e = this;
                e._methodGroups[t].forEach((function(t) {
                    e.enableMethod(t)
                }
                ))
            }
            ,
            a.prototype.disableMethodGroup = function(t) {
                var e = this;
                e._methodGroups[t].forEach((function(t) {
                    e.disableMethod(t)
                }
                ))
            }
            ,
            a.prototype.enabled = function() {
                return this._enabled
            }
            ,
            a.prototype.enable = function() {
                this._enabled || (this._enabled = !0,
                this._activeCount > 0 && this.emit("active"),
                this.emit("enabled"),
                this._updateComposer())
            }
            ,
            a.prototype.disable = function() {
                this._enabled && (this._enabled = !1,
                this._activeCount > 0 && this.emit("inactive"),
                this.emit("disabled"),
                this._updateComposer())
            }
            ,
            a.prototype.attach = function(t) {
                this._attachedRenderLoop && this.detach(),
                this._attachedRenderLoop = t,
                this._beforeRenderHandler = this._updateViewsWithControls.bind(this),
                this._changeHandler = t.renderOnNextFrame.bind(t),
                this._attachedRenderLoop.addEventListener("beforeRender", this._beforeRenderHandler),
                this._composer.addEventListener("change", this._changeHandler)
            }
            ,
            a.prototype.detach = function() {
                this._attachedRenderLoop && (this._attachedRenderLoop.removeEventListener("beforeRender", this._beforeRenderHandler),
                this._composer.removeEventListener("change", this._changeHandler),
                this._beforeRenderHandler = null,
                this._changeHandler = null,
                this._attachedRenderLoop = null)
            }
            ,
            a.prototype.attached = function() {
                return null != this._attachedRenderLoop
            }
            ,
            a.prototype._listen = function(t) {
                var e = this._methods[t];
                if (!e)
                    throw new Error("Bad method id");
                e.instance.addEventListener("active", e.activeHandler),
                e.instance.addEventListener("inactive", e.inactiveHandler)
            }
            ,
            a.prototype._unlisten = function(t) {
                var e = this._methods[t];
                if (!e)
                    throw new Error("Bad method id");
                e.instance.removeEventListener("active", e.activeHandler),
                e.instance.removeEventListener("inactive", e.inactiveHandler)
            }
            ,
            a.prototype._handleActive = function(t) {
                var e = this._methods[t];
                if (!e)
                    throw new Error("Bad method id");
                if (!e.enabled)
                    throw new Error("Should not receive event from disabled control method");
                e.active || (e.active = !0,
                this._incrementActiveCount())
            }
            ,
            a.prototype._handleInactive = function(t) {
                var e = this._methods[t];
                if (!e)
                    throw new Error("Bad method id");
                if (!e.enabled)
                    throw new Error("Should not receive event from disabled control method");
                e.active && (e.active = !1,
                this._decrementActiveCount())
            }
            ,
            a.prototype._incrementActiveCount = function() {
                this._activeCount++,
                s && this._checkActiveCount(),
                this._enabled && 1 === this._activeCount && this.emit("active")
            }
            ,
            a.prototype._decrementActiveCount = function() {
                this._activeCount--,
                s && this._checkActiveCount(),
                this._enabled && 0 === this._activeCount && this.emit("inactive")
            }
            ,
            a.prototype._checkActiveCount = function() {
                var t = 0;
                for (var e in this._methods) {
                    var n = this._methods[e];
                    n.enabled && n.active && t++
                }
                if (t != this._activeCount)
                    throw new Error("Bad control state")
            }
            ,
            a.prototype._updateComposer = function() {
                var t = this._composer;
                for (var e in this._methods) {
                    var n = this._methods[e]
                      , r = this._enabled && n.enabled;
                    r && !t.has(n.instance) && t.add(n.instance),
                    !r && t.has(n.instance) && t.remove(n.instance)
                }
            }
            ,
            a.prototype._updateViewsWithControls = function() {
                var t = this._composer.offsets();
                t.changing && this._attachedRenderLoop.renderOnNextFrame(),
                this.updatedViews_.length = 0;
                for (var e = this._attachedRenderLoop.stage().listLayers(), n = 0; n < e.length; n++) {
                    var r = e[n].view();
                    this.updatedViews_.indexOf(r) < 0 && (e[n].view().updateWithControlParameters(t.offsets),
                    this.updatedViews_.push(r))
                }
            }
            ,
            e.exports = a
        }
        , {
            "../util/clearOwnProperties": 167,
            "./Composer": 126,
            "minimal-event-emitter": 195
        }],
        129: [function(t, e, n) {
            "use strict";
            var r = t("minimal-event-emitter")
              , i = t("./Dynamics")
              , o = t("./HammerGestures")
              , s = t("../util/defaults")
              , a = t("./util").maxFriction
              , u = t("../util/clearOwnProperties")
              , l = {
                friction: 6,
                maxFrictionTime: .3,
                hammerEvent: "pan"
            }
              , c = "undefined" != typeof MARZIPANODEBUG && MARZIPANODEBUG.controls;
            function h(t, e, n) {
                if (this._element = t,
                this._opts = s(n || {}, l),
                this._startEvent = null,
                this._lastEvent = null,
                this._active = !1,
                this._dynamics = {
                    x: new i,
                    y: new i
                },
                this._hammer = o.get(t, e),
                this._hammer.on("hammer.input", this._handleHammerEvent.bind(this)),
                "pan" != this._opts.hammerEvent && "pinch" != this._opts.hammerEvent)
                    throw new Error(this._opts.hammerEvent + " is not a hammerEvent managed in DragControlMethod");
                this._hammer.on(this._opts.hammerEvent + "start", this._handleStart.bind(this)),
                this._hammer.on(this._opts.hammerEvent + "move", this._handleMove.bind(this)),
                this._hammer.on(this._opts.hammerEvent + "end", this._handleEnd.bind(this)),
                this._hammer.on(this._opts.hammerEvent + "cancel", this._handleEnd.bind(this))
            }
            r(h),
            h.prototype.destroy = function() {
                this._hammer.release(),
                u(this)
            }
            ,
            h.prototype._handleHammerEvent = function(t) {
                if (t.isFirst) {
                    if (c && this._active)
                        throw new Error("DragControlMethod active detected when already active");
                    this._active = !0,
                    this.emit("active")
                }
                if (t.isFinal) {
                    if (c && !this._active)
                        throw new Error("DragControlMethod inactive detected when already inactive");
                    this._active = !1,
                    this.emit("inactive")
                }
            }
            ,
            h.prototype._handleStart = function(t) {
                t.preventDefault(),
                this._startEvent = t
            }
            ,
            h.prototype._handleMove = function(t) {
                t.preventDefault(),
                this._startEvent && (this._updateDynamicsMove(t),
                this.emit("parameterDynamics", "axisScaledX", this._dynamics.x),
                this.emit("parameterDynamics", "axisScaledY", this._dynamics.y))
            }
            ,
            h.prototype._handleEnd = function(t) {
                t.preventDefault(),
                this._startEvent && (this._updateDynamicsRelease(t),
                this.emit("parameterDynamics", "axisScaledX", this._dynamics.x),
                this.emit("parameterDynamics", "axisScaledY", this._dynamics.y)),
                this._startEvent = !1,
                this._lastEvent = !1
            }
            ,
            h.prototype._updateDynamicsMove = function(t) {
                var e = t.deltaX
                  , n = t.deltaY
                  , r = this._lastEvent || this._startEvent;
                r && (e -= r.deltaX,
                n -= r.deltaY);
                var i = this._element.getBoundingClientRect();
                e /= i.right - i.left,
                n /= i.bottom - i.top,
                this._dynamics.x.reset(),
                this._dynamics.y.reset(),
                this._dynamics.x.offset = -e,
                this._dynamics.y.offset = -n,
                this._lastEvent = t
            }
            ;
            var p = [null, null];
            h.prototype._updateDynamicsRelease = function(t) {
                var e = this._element.getBoundingClientRect()
                  , n = e.right - e.left
                  , r = e.bottom - e.top
                  , i = 1e3 * t.velocityX / n
                  , o = 1e3 * t.velocityY / r;
                this._dynamics.x.reset(),
                this._dynamics.y.reset(),
                this._dynamics.x.velocity = i,
                this._dynamics.y.velocity = o,
                a(this._opts.friction, this._dynamics.x.velocity, this._dynamics.y.velocity, this._opts.maxFrictionTime, p),
                this._dynamics.x.friction = p[0],
                this._dynamics.y.friction = p[1]
            }
            ,
            e.exports = h
        }
        , {
            "../util/clearOwnProperties": 167,
            "../util/defaults": 172,
            "./Dynamics": 130,
            "./HammerGestures": 132,
            "./util": 139,
            "minimal-event-emitter": 195
        }],
        130: [function(t, e, n) {
            "use strict";
            function r() {
                this.velocity = null,
                this.friction = null,
                this.offset = null
            }
            r.equals = function(t, e) {
                return t.velocity === e.velocity && t.friction === e.friction && t.offset === e.offset
            }
            ,
            r.prototype.equals = function(t) {
                return r.equals(this, t)
            }
            ,
            r.prototype.update = function(t, e) {
                t.offset && (this.offset = this.offset || 0,
                this.offset += t.offset);
                var n = this.offsetFromVelocity(e);
                n && (this.offset = this.offset || 0,
                this.offset += n),
                this.velocity = t.velocity,
                this.friction = t.friction
            }
            ,
            r.prototype.reset = function() {
                this.velocity = null,
                this.friction = null,
                this.offset = null
            }
            ,
            r.prototype.velocityAfter = function(t) {
                return this.velocity ? this.friction ? function(t, e) {
                    if (t < 0)
                        return Math.min(0, t + e);
                    if (t > 0)
                        return Math.max(0, t - e);
                    return 0
                }(this.velocity, this.friction * t) : this.velocity : null
            }
            ,
            r.prototype.offsetFromVelocity = function(t) {
                t = Math.min(t, this.nullVelocityTime());
                var e = this.velocityAfter(t);
                return (this.velocity + e) / 2 * t
            }
            ,
            r.prototype.nullVelocityTime = function() {
                return null == this.velocity ? 0 : this.velocity && !this.friction ? 1 / 0 : Math.abs(this.velocity / this.friction)
            }
            ,
            e.exports = r
        }
        , {}],
        131: [function(t, e, n) {
            "use strict";
            var r = t("minimal-event-emitter")
              , i = t("./Dynamics")
              , o = t("../util/clearOwnProperties");
            function s(t, e, n, r) {
                if (!t)
                    throw new Error("ElementPressControlMethod: element must be defined");
                if (!e)
                    throw new Error("ElementPressControlMethod: parameter must be defined");
                if (!n)
                    throw new Error("ElementPressControlMethod: velocity must be defined");
                if (!r)
                    throw new Error("ElementPressControlMethod: friction must be defined");
                this._element = t,
                this._pressHandler = this._handlePress.bind(this),
                this._releaseHandler = this._handleRelease.bind(this),
                t.addEventListener("mousedown", this._pressHandler),
                t.addEventListener("mouseup", this._releaseHandler),
                t.addEventListener("mouseleave", this._releaseHandler),
                t.addEventListener("touchstart", this._pressHandler),
                t.addEventListener("touchmove", this._releaseHandler),
                t.addEventListener("touchend", this._releaseHandler),
                this._parameter = e,
                this._velocity = n,
                this._friction = r,
                this._dynamics = new i,
                this._pressing = !1
            }
            r(s),
            s.prototype.destroy = function() {
                this._element.removeEventListener("mousedown", this._pressHandler),
                this._element.removeEventListener("mouseup", this._releaseHandler),
                this._element.removeEventListener("mouseleave", this._releaseHandler),
                this._element.removeEventListener("touchstart", this._pressHandler),
                this._element.removeEventListener("touchmove", this._releaseHandler),
                this._element.removeEventListener("touchend", this._releaseHandler),
                o(this)
            }
            ,
            s.prototype._handlePress = function() {
                this._pressing = !0,
                this._dynamics.velocity = this._velocity,
                this._dynamics.friction = 0,
                this.emit("parameterDynamics", this._parameter, this._dynamics),
                this.emit("active")
            }
            ,
            s.prototype._handleRelease = function() {
                this._pressing && (this._dynamics.friction = this._friction,
                this.emit("parameterDynamics", this._parameter, this._dynamics),
                this.emit("inactive")),
                this._pressing = !1
            }
            ,
            e.exports = s
        }
        , {
            "../util/clearOwnProperties": 167,
            "./Dynamics": 130,
            "minimal-event-emitter": 195
        }],
        132: [function(t, e, n) {
            "use strict";
            var r = t("hammerjs")
              , i = 1
              , o = "MarzipanoHammerElementId";
            function s(t, e) {
                return t[o] || (t[o] = i++),
                e + t[o]
            }
            function a() {
                this._managers = {},
                this._refCount = {}
            }
            function u(t, e, n, r) {
                this._manager = e,
                this._element = n,
                this._type = r,
                this._hammerGestures = t,
                this._eventHandlers = []
            }
            a.prototype.get = function(t, e) {
                var n = s(t, e);
                return this._managers[n] || (this._managers[n] = this._createManager(t, e),
                this._refCount[n] = 0),
                this._refCount[n]++,
                new u(this,this._managers[n],t,e)
            }
            ,
            a.prototype._createManager = function(t, e) {
                var n = new r.Manager(t);
                return "mouse" === e ? n.add(new r.Pan({
                    direction: r.DIRECTION_ALL,
                    threshold: 0
                })) : "touch" !== e && "pen" !== e && "kinect" !== e || (n.add(new r.Pan({
                    direction: r.DIRECTION_ALL,
                    threshold: 20,
                    pointers: 1
                })),
                n.add(new r.Pinch)),
                n
            }
            ,
            a.prototype._releaseHandle = function(t, e) {
                var n = s(t, e);
                this._refCount[n] && (this._refCount[n]--,
                this._refCount[n] || (this._managers[n].destroy(),
                delete this._managers[n],
                delete this._refCount[n]))
            }
            ,
            u.prototype.on = function(t, e) {
                var n = this._type
                  , r = function(t) {
                    n === t.pointerType && e(t)
                };
                this._eventHandlers.push({
                    events: t,
                    handler: r
                }),
                this._manager.on(t, r)
            }
            ,
            u.prototype.release = function() {
                for (var t = 0; t < this._eventHandlers.length; t++) {
                    var e = this._eventHandlers[t];
                    this._manager.off(e.events, e.handler)
                }
                this._hammerGestures._releaseHandle(this._element, this._type),
                this._manager = null,
                this._element = null,
                this._type = null,
                this._hammerGestures = null
            }
            ,
            u.prototype.manager = function() {
                return this._manager
            }
            ,
            e.exports = new a
        }
        , {
            hammerjs: 15
        }],
        133: [function(t, e, n) {
            "use strict";
            var r = t("minimal-event-emitter")
              , i = t("./Dynamics")
              , o = t("../util/clearOwnProperties");
            function s(t, e, n, r, o) {
                if (!t)
                    throw new Error("KeyControlMethod: keyCode must be defined");
                if (!e)
                    throw new Error("KeyControlMethod: parameter must be defined");
                if (!n)
                    throw new Error("KeyControlMethod: velocity must be defined");
                if (!r)
                    throw new Error("KeyControlMethod: friction must be defined");
                o = o || document,
                this._keyCode = t,
                this._parameter = e,
                this._velocity = n,
                this._friction = r,
                this._element = o,
                this._keydownHandler = this._handlePress.bind(this),
                this._keyupHandler = this._handleRelease.bind(this),
                this._blurHandler = this._handleBlur.bind(this),
                this._element.addEventListener("keydown", this._keydownHandler),
                this._element.addEventListener("keyup", this._keyupHandler),
                window.addEventListener("blur", this._blurHandler),
                this._dynamics = new i,
                this._pressing = !1
            }
            r(s),
            s.prototype.destroy = function() {
                this._element.removeEventListener("keydown", this._keydownHandler),
                this._element.removeEventListener("keyup", this._keyupHandler),
                window.removeEventListener("blur", this._blurHandler),
                o(this)
            }
            ,
            s.prototype._handlePress = function(t) {
                t.keyCode === this._keyCode && (this._pressing = !0,
                this._dynamics.velocity = this._velocity,
                this._dynamics.friction = 0,
                this.emit("parameterDynamics", this._parameter, this._dynamics),
                this.emit("active"))
            }
            ,
            s.prototype._handleRelease = function(t) {
                t.keyCode === this._keyCode && (this._pressing && (this._dynamics.friction = this._friction,
                this.emit("parameterDynamics", this._parameter, this._dynamics),
                this.emit("inactive")),
                this._pressing = !1)
            }
            ,
            s.prototype._handleBlur = function() {
                this._dynamics.velocity = 0,
                this.emit("parameterDynamics", this._parameter, this._dynamics),
                this.emit("inactive"),
                this._pressing = !1
            }
            ,
            e.exports = s
        }
        , {
            "../util/clearOwnProperties": 167,
            "./Dynamics": 130,
            "minimal-event-emitter": 195
        }],
        134: [function(t, e, n) {
            "use strict";
            var r = t("minimal-event-emitter")
              , i = t("./Dynamics")
              , o = t("./HammerGestures")
              , s = t("../util/clearOwnProperties");
            function a(t, e, n) {
                this._hammer = o.get(t, e),
                this._lastEvent = null,
                this._active = !1,
                this._dynamics = new i,
                this._hammer.on("pinchstart", this._handleStart.bind(this)),
                this._hammer.on("pinch", this._handleEvent.bind(this)),
                this._hammer.on("pinchend", this._handleEnd.bind(this)),
                this._hammer.on("pinchcancel", this._handleEnd.bind(this))
            }
            r(a),
            a.prototype.destroy = function() {
                this._hammer.release(),
                s(this)
            }
            ,
            a.prototype._handleStart = function() {
                this._active || (this._active = !0,
                this.emit("active"))
            }
            ,
            a.prototype._handleEnd = function() {
                this._lastEvent = null,
                this._active && (this._active = !1,
                this.emit("inactive"))
            }
            ,
            a.prototype._handleEvent = function(t) {
                var e = t.scale;
                this._lastEvent && (e /= this._lastEvent.scale),
                this._dynamics.offset = -1 * (e - 1),
                this.emit("parameterDynamics", "zoom", this._dynamics),
                this._lastEvent = t
            }
            ,
            e.exports = a
        }
        , {
            "../util/clearOwnProperties": 167,
            "./Dynamics": 130,
            "./HammerGestures": 132,
            "minimal-event-emitter": 195
        }],
        135: [function(t, e, n) {
            "use strict";
            var r = t("minimal-event-emitter")
              , i = t("./Dynamics")
              , o = t("./HammerGestures")
              , s = t("../util/defaults")
              , a = t("./util").maxFriction
              , u = t("../util/clearOwnProperties")
              , l = {
                speed: 8,
                friction: 6,
                maxFrictionTime: .3
            };
            function c(t, e, n) {
                this._element = t,
                this._opts = s(n || {}, l),
                this._active = !1,
                this._hammer = o.get(t, e),
                this._dynamics = {
                    x: new i,
                    y: new i
                },
                this._hammer.on("panstart", this._handleStart.bind(this)),
                this._hammer.on("panmove", this._handleMove.bind(this)),
                this._hammer.on("panend", this._handleRelease.bind(this)),
                this._hammer.on("pancancel", this._handleRelease.bind(this))
            }
            r(c),
            c.prototype.destroy = function() {
                this._hammer.release(),
                u(this)
            }
            ,
            c.prototype._handleStart = function(t) {
                t.preventDefault(),
                this._active || (this._active = !0,
                this.emit("active"))
            }
            ,
            c.prototype._handleMove = function(t) {
                t.preventDefault(),
                this._updateDynamics(t, !1)
            }
            ,
            c.prototype._handleRelease = function(t) {
                t.preventDefault(),
                this._updateDynamics(t, !0),
                this._active && (this._active = !1,
                this.emit("inactive"))
            }
            ;
            var h = [null, null];
            c.prototype._updateDynamics = function(t, e) {
                var n = this._element.getBoundingClientRect()
                  , r = n.right - n.left
                  , i = n.bottom - n.top
                  , o = Math.max(r, i)
                  , s = t.deltaX / o * this._opts.speed
                  , u = t.deltaY / o * this._opts.speed;
                this._dynamics.x.reset(),
                this._dynamics.y.reset(),
                this._dynamics.x.velocity = s,
                this._dynamics.y.velocity = u,
                e && (a(this._opts.friction, this._dynamics.x.velocity, this._dynamics.y.velocity, this._opts.maxFrictionTime, h),
                this._dynamics.x.friction = h[0],
                this._dynamics.y.friction = h[1]),
                this.emit("parameterDynamics", "x", this._dynamics.x),
                this.emit("parameterDynamics", "y", this._dynamics.y)
            }
            ,
            e.exports = c
        }
        , {
            "../util/clearOwnProperties": 167,
            "../util/defaults": 172,
            "./Dynamics": 130,
            "./HammerGestures": 132,
            "./util": 139,
            "minimal-event-emitter": 195
        }],
        136: [function(t, e, n) {
            "use strict";
            var r = t("minimal-event-emitter")
              , i = t("./Dynamics")
              , o = t("../util/defaults")
              , s = t("../util/clearOwnProperties")
              , a = {
                frictionTime: .2,
                zoomDelta: .001
            };
            function u(t, e) {
                this._element = t,
                this._opts = o(e || {}, a),
                this._dynamics = new i,
                this._eventList = [];
                var n = this._opts.frictionTime ? this.withSmoothing : this.withoutSmoothing;
                this._wheelListener = n.bind(this),
                t.addEventListener("wheel", this._wheelListener)
            }
            function l(t) {
                var e = 1 == t.deltaMode ? 20 : 1;
                return t.deltaY * e
            }
            r(u),
            u.prototype.destroy = function() {
                this._element.removeEventListener("wheel", this._wheelListener),
                s(this)
            }
            ,
            u.prototype.withoutSmoothing = function(t) {
                this._dynamics.offset = l(t) * this._opts.zoomDelta,
                this.emit("parameterDynamics", "zoom", this._dynamics),
                t.preventDefault(),
                this.emit("active"),
                this.emit("inactive")
            }
            ,
            u.prototype.withSmoothing = function(t) {
                var e = t.timeStamp;
                for (this._eventList.push(t); this._eventList[0].timeStamp < e - 1e3 * this._opts.frictionTime; )
                    this._eventList.shift(0);
                for (var n = 0, r = 0; r < this._eventList.length; r++) {
                    n += l(this._eventList[r]) * this._opts.zoomDelta / this._opts.frictionTime
                }
                this._dynamics.velocity = n,
                this._dynamics.friction = Math.abs(n) / this._opts.frictionTime,
                this.emit("parameterDynamics", "zoom", this._dynamics),
                t.preventDefault(),
                this.emit("active"),
                this.emit("inactive")
            }
            ,
            e.exports = u
        }
        , {
            "../util/clearOwnProperties": 167,
            "../util/defaults": 172,
            "./Dynamics": 130,
            "minimal-event-emitter": 195
        }],
        137: [function(t, e, n) {
            "use strict";
            var r = t("minimal-event-emitter")
              , i = t("./Dynamics")
              , o = t("../util/clearOwnProperties");
            function s(t) {
                if (!t)
                    throw new Error("VelocityControlMethod: parameter must be defined");
                this._parameter = t,
                this._dynamics = new i
            }
            r(s),
            s.prototype.destroy = function() {
                o(this)
            }
            ,
            s.prototype.setVelocity = function(t) {
                this._dynamics.velocity = t,
                this.emit("parameterDynamics", this._parameter, this._dynamics)
            }
            ,
            s.prototype.setFriction = function(t) {
                this._dynamics.friction = t,
                this.emit("parameterDynamics", this._parameter, this._dynamics)
            }
            ,
            e.exports = s
        }
        , {
            "../util/clearOwnProperties": 167,
            "./Dynamics": 130,
            "minimal-event-emitter": 195
        }],
        138: [function(t, e, n) {
            "use strict";
            var r = t("../util/defaults")
              , i = t("./Drag")
              , o = t("./Qtvr")
              , s = t("./ScrollZoom")
              , a = t("./PinchZoom")
              , u = t("./Key")
              , l = {
                mouseViewMode: "drag",
                dragMode: "pan"
            };
            e.exports = function(t, e, n) {
                n = r(n || {}, l);
                var c = {
                    mouseViewDrag: new i(e,"mouse"),
                    mouseViewQtvr: new o(e,"mouse"),
                    leftArrowKey: new u(37,"x",-.7,3),
                    rightArrowKey: new u(39,"x",.7,3),
                    upArrowKey: new u(38,"y",-.7,3),
                    downArrowKey: new u(40,"y",.7,3),
                    plusKey: new u(107,"zoom",-.7,3),
                    minusKey: new u(109,"zoom",.7,3),
                    wKey: new u(87,"y",-.7,3),
                    aKey: new u(65,"x",-.7,3),
                    sKey: new u(83,"y",.7,3),
                    dKey: new u(68,"x",.7,3),
                    qKey: new u(81,"roll",.7,3),
                    eKey: new u(69,"roll",-.7,3)
                }
                  , h = ["scrollZoom", "touchView", "pinch"];
                !1 !== n.scrollZoom && (c.scrollZoom = new s(e));
                var p = {
                    arrowKeys: ["leftArrowKey", "rightArrowKey", "upArrowKey", "downArrowKey"],
                    plusMinusKeys: ["plusKey", "minusKey"],
                    wasdKeys: ["wKey", "aKey", "sKey", "dKey"],
                    qeKeys: ["qKey", "eKey"]
                };
                switch (n.dragMode) {
                case "pinch":
                    c.pinch = new i(e,"touch",{
                        hammerEvent: "pinch"
                    });
                    break;
                case "pan":
                    c.touchView = new i(e,"touch"),
                    c.pinch = new a(e,"touch");
                    break;
                default:
                    throw new Error("Unknown drag mode: " + n.dragMode)
                }
                switch (n.mouseViewMode) {
                case "drag":
                    h.push("mouseViewDrag");
                    break;
                case "qtvr":
                    h.push("mouseViewQtvr");
                    break;
                default:
                    throw new Error("Unknown mouse view mode: " + n.mouseViewMode)
                }
                for (var f in c) {
                    var d = c[f];
                    t.registerMethod(f, d),
                    h.indexOf(f) >= 0 && t.enableMethod(f)
                }
                for (var m in p) {
                    var v = p[m];
                    t.addMethodGroup(m, v)
                }
                return c
            }
        }
        , {
            "../util/defaults": 172,
            "./Drag": 129,
            "./Key": 133,
            "./PinchZoom": 134,
            "./Qtvr": 135,
            "./ScrollZoom": 136
        }],
        139: [function(t, e, n) {
            "use strict";
            function r(t, e, n, r) {
                var i = Math.atan(e / t);
                r[0] = n * Math.cos(i),
                r[1] = n * Math.sin(i)
            }
            e.exports = {
                maxFriction: function(t, e, n, i, o) {
                    var s = Math.sqrt(Math.pow(e, 2) + Math.pow(n, 2));
                    r(e, n, t = Math.max(t, s / i), o),
                    o[0] = Math.abs(o[0]),
                    o[1] = Math.abs(o[1])
                },
                changeVectorNorm: r
            }
        }
        , {}],
        140: [function(t, e, n) {
            "use strict";
            var r = t("../util/inherits")
              , i = t("../util/hash")
              , o = t("../TileSearcher")
              , s = t("../collections/LruMap")
              , a = t("./Level")
              , u = t("./common").makeLevelList
              , l = t("./common").makeSelectableLevelList
              , c = t("../util/clamp")
              , h = t("../util/cmp")
              , p = t("../util/type")
              , f = t("gl-matrix").vec3
              , d = t("gl-matrix").vec4
              , m = "fudlrb"
              , v = {
                f: {
                    x: 0,
                    y: 0
                },
                b: {
                    x: 0,
                    y: Math.PI
                },
                l: {
                    x: 0,
                    y: Math.PI / 2
                },
                r: {
                    x: 0,
                    y: -Math.PI / 2
                },
                u: {
                    x: Math.PI / 2,
                    y: 0
                },
                d: {
                    x: -Math.PI / 2,
                    y: 0
                }
            }
              , y = f.create();
            function g(t, e, n, r) {
                e && f.rotateZ(t, t, y, e),
                n && f.rotateX(t, t, y, n),
                r && f.rotateY(t, t, y, r)
            }
            for (var _ = {}, b = 0; b < m.length; b++) {
                var w = m[b]
                  , x = v[w]
                  , E = f.fromValues(0, 0, -1);
                g(E, 0, x.x, x.y),
                _[w] = E
            }
            var M = {
                f: ["l", "r", "u", "d"],
                b: ["r", "l", "u", "d"],
                l: ["b", "f", "u", "d"],
                r: ["f", "b", "u", "d"],
                u: ["l", "r", "b", "f"],
                d: ["l", "r", "f", "b"]
            }
              , S = [[0, 1], [1, 0], [0, -1], [-1, 0]];
            function T(t, e, n, r, i) {
                this.face = t,
                this.x = e,
                this.y = n,
                this.z = r,
                this._geometry = i,
                this._level = i.levelList[r]
            }
            function C(t) {
                if (this.constructor.super_.call(this, t),
                this._size = t.size,
                this._tileSize = t.tileSize,
                this._size % this._tileSize != 0)
                    throw new Error("Level size is not multiple of tile size: " + this._size + " " + this._tileSize)
            }
            function O(t) {
                if ("array" !== p(t))
                    throw new Error("Level list must be an array");
                this.levelList = u(t, C),
                this.selectableLevelList = l(this.levelList);
                for (var e = 1; e < this.levelList.length; e++)
                    this.levelList[e]._validateWithParentLevel(this.levelList[e - 1]);
                this._tileSearcher = new o(this),
                this._neighborsCache = new s(64),
                this._vec = d.create(),
                this._viewSize = {}
            }
            T.prototype.rotX = function() {
                return v[this.face].x
            }
            ,
            T.prototype.rotY = function() {
                return v[this.face].y
            }
            ,
            T.prototype.centerX = function() {
                return (this.x + .5) / this._level.numHorizontalTiles() - .5
            }
            ,
            T.prototype.centerY = function() {
                return .5 - (this.y + .5) / this._level.numVerticalTiles()
            }
            ,
            T.prototype.scaleX = function() {
                return 1 / this._level.numHorizontalTiles()
            }
            ,
            T.prototype.scaleY = function() {
                return 1 / this._level.numVerticalTiles()
            }
            ,
            T.prototype.vertices = function(t) {
                t || (t = [f.create(), f.create(), f.create(), f.create()]);
                var e = v[this.face];
                function n(t, n, r) {
                    f.set(t, n, r, -.5),
                    g(t, 0, e.x, e.y)
                }
                var r = this.centerX() - this.scaleX() / 2
                  , i = this.centerX() + this.scaleX() / 2
                  , o = this.centerY() - this.scaleY() / 2
                  , s = this.centerY() + this.scaleY() / 2;
                return n(t[0], r, s),
                n(t[1], i, s),
                n(t[2], i, o),
                n(t[3], r, o),
                t
            }
            ,
            T.prototype.parent = function() {
                if (0 === this.z)
                    return null;
                var t = this.face
                  , e = this.z
                  , n = this.x
                  , r = this.y
                  , i = this._geometry
                  , o = i.levelList[e]
                  , s = i.levelList[e - 1];
                return new T(t,Math.floor(n / o.numHorizontalTiles() * s.numHorizontalTiles()),Math.floor(r / o.numVerticalTiles() * s.numVerticalTiles()),e - 1,i)
            }
            ,
            T.prototype.children = function(t) {
                if (this.z === this._geometry.levelList.length - 1)
                    return null;
                var e = this.face
                  , n = this.z
                  , r = this.x
                  , i = this.y
                  , o = this._geometry
                  , s = o.levelList[n]
                  , a = o.levelList[n + 1]
                  , u = a.numHorizontalTiles() / s.numHorizontalTiles()
                  , l = a.numVerticalTiles() / s.numVerticalTiles();
                t = t || [];
                for (var c = 0; c < u; c++)
                    for (var h = 0; h < l; h++) {
                        var p = u * r + c
                          , f = l * i + h
                          , d = n + 1;
                        t.push(new T(e,p,f,d,o))
                    }
                return t
            }
            ,
            T.prototype.neighbors = function() {
                var t = this._geometry
                  , e = t._neighborsCache
                  , n = e.get(this);
                if (n)
                    return n;
                for (var r = t._vec, i = this.face, o = this.x, s = this.y, a = this.z, u = this._level, l = u.numHorizontalTiles(), h = u.numVerticalTiles(), p = [], d = 0; d < S.length; d++) {
                    var m = o + S[d][0]
                      , y = s + S[d][1]
                      , _ = a
                      , b = i;
                    if (m < 0 || m >= l || y < 0 || y >= h) {
                        var w, x = this.centerX(), E = this.centerY();
                        m < 0 ? (f.set(r, -.5, E, -.5),
                        b = M[i][0]) : m >= l ? (f.set(r, .5, E, -.5),
                        b = M[i][1]) : y < 0 ? (f.set(r, x, .5, -.5),
                        b = M[i][2]) : y >= h && (f.set(r, x, -.5, -.5),
                        b = M[i][3]),
                        g(r, 0, (w = v[i]).x, w.y),
                        g(r, 0, -(w = v[b]).x, -w.y),
                        m = c(Math.floor((.5 + r[0]) * l), 0, l - 1),
                        y = c(Math.floor((.5 - r[1]) * h), 0, h - 1)
                    }
                    p.push(new T(b,m,y,_,t))
                }
                return e.set(this, p),
                p
            }
            ,
            T.prototype.hash = function() {
                return i(m.indexOf(this.face), this.z, this.y, this.x)
            }
            ,
            T.prototype.equals = function(t) {
                return this._geometry === t._geometry && this.face === t.face && this.z === t.z && this.y === t.y && this.x === t.x
            }
            ,
            T.prototype.cmp = function(t) {
                return h(this.z, t.z) || h(m.indexOf(this.face), m.indexOf(t.face)) || h(this.y, t.y) || h(this.x, t.x)
            }
            ,
            T.prototype.str = function() {
                return "CubeTile(" + tile.face + ", " + tile.x + ", " + tile.y + ", " + tile.z + ")"
            }
            ,
            r(C, a),
            C.prototype.width = function() {
                return this._size
            }
            ,
            C.prototype.height = function() {
                return this._size
            }
            ,
            C.prototype.tileWidth = function() {
                return this._tileSize
            }
            ,
            C.prototype.tileHeight = function() {
                return this._tileSize
            }
            ,
            C.prototype._validateWithParentLevel = function(t) {
                var e = this.width()
                  , n = this.height()
                  , r = this.tileWidth()
                  , i = this.tileHeight()
                  , o = this.numHorizontalTiles()
                  , s = this.numVerticalTiles()
                  , a = t.width()
                  , u = t.height()
                  , l = t.tileWidth()
                  , c = t.tileHeight()
                  , h = t.numHorizontalTiles()
                  , p = t.numVerticalTiles();
                if (e % a != 0)
                    throw new Error("Level width must be multiple of parent level: " + e + " vs. " + a);
                if (n % u != 0)
                    throw new Error("Level height must be multiple of parent level: " + n + " vs. " + u);
                if (o % h != 0)
                    throw new Error("Number of horizontal tiles must be multiple of parent level: " + o + " (" + e + "/" + r + ") vs. " + h + " (" + a + "/" + l + ")");
                if (s % p != 0)
                    throw new Error("Number of vertical tiles must be multiple of parent level: " + s + " (" + n + "/" + i + ") vs. " + p + " (" + u + "/" + c + ")")
            }
            ,
            O.prototype.maxTileSize = function() {
                for (var t = 0, e = 0; e < this.levelList.length; e++) {
                    var n = this.levelList[e];
                    t = Math.max(t, n.tileWidth, n.tileHeight)
                }
                return t
            }
            ,
            O.prototype.levelTiles = function(t, e) {
                var n = this.levelList.indexOf(t)
                  , r = t.numHorizontalTiles() - 1
                  , i = t.numVerticalTiles() - 1;
                e = e || [];
                for (var o = 0; o < m.length; o++)
                    for (var s = m[o], a = 0; a <= r; a++)
                        for (var u = 0; u <= i; u++)
                            e.push(new T(s,a,u,n,this));
                return e
            }
            ,
            O.prototype._closestTile = function(t, e) {
                var n = this._vec;
                d.set(n, 0, 0, 1, 1),
                d.transformMat4(n, n, t.inverseProjection());
                var r = 1 / 0
                  , i = null;
                for (var o in _) {
                    var s = _[o]
                      , a = 1 - f.dot(s, n);
                    a < r && (r = a,
                    i = o)
                }
                for (var u = Math.max(Math.abs(n[0]), Math.abs(n[1]), Math.abs(n[2])) / .5, l = 0; l < 3; l++)
                    n[l] = n[l] / u;
                var h = v[i];
                g(n, 0, -h.x, -h.y);
                var p = this.levelList.indexOf(e)
                  , m = e.numHorizontalTiles()
                  , y = e.numVerticalTiles();
                return new T(i,c(Math.floor((.5 + n[0]) * m), 0, m - 1),c(Math.floor((.5 - n[1]) * y), 0, y - 1),p,this)
            }
            ,
            O.prototype.visibleTiles = function(t, e, n) {
                var r = this._viewSize
                  , i = this._tileSearcher;
                if (n = n || [],
                t.size(r),
                0 === r.width || 0 === r.height)
                    return n;
                var o = this._closestTile(t, e);
                if (!i.search(t, o, n))
                    throw new Error("Starting tile is not visible");
                return n
            }
            ,
            O.Tile = O.prototype.Tile = T,
            O.type = O.prototype.type = "cube",
            T.type = T.prototype.type = "cube",
            e.exports = O
        }
        , {
            "../TileSearcher": 113,
            "../collections/LruMap": 119,
            "../util/clamp": 166,
            "../util/cmp": 168,
            "../util/hash": 179,
            "../util/inherits": 180,
            "../util/type": 192,
            "./Level": 143,
            "./common": 144,
            "gl-matrix": 5
        }],
        141: [function(t, e, n) {
            "use strict";
            var r = t("../util/inherits")
              , i = t("../util/hash")
              , o = t("../util/cmp")
              , s = t("./common")
              , a = t("./Level")
              , u = t("../util/type");
            function l(t, e) {
                this.z = t,
                this._geometry = e,
                this._level = e.levelList[t]
            }
            function c(t) {
                this.constructor.super_.call(this, t),
                this._width = t.width
            }
            function h(t) {
                if ("array" !== u(t))
                    throw new Error("Level list must be an array");
                this.levelList = s.makeLevelList(t, c),
                this.selectableLevelList = s.makeSelectableLevelList(this.levelList)
            }
            l.prototype.rotX = function() {
                return 0
            }
            ,
            l.prototype.rotY = function() {
                return 0
            }
            ,
            l.prototype.centerX = function() {
                return .5
            }
            ,
            l.prototype.centerY = function() {
                return .5
            }
            ,
            l.prototype.scaleX = function() {
                return 1
            }
            ,
            l.prototype.scaleY = function() {
                return 1
            }
            ,
            l.prototype.parent = function() {
                return 0 === this.z ? null : new l(this.z - 1,this._geometry)
            }
            ,
            l.prototype.children = function(t) {
                return this.z === this._geometry.levelList.length - 1 ? null : ((t = t || []).push(new l(this.z + 1,this._geometry)),
                t)
            }
            ,
            l.prototype.neighbors = function() {
                return []
            }
            ,
            l.prototype.hash = function() {
                return i(this.z)
            }
            ,
            l.prototype.equals = function(t) {
                return this._geometry === t._geometry && this.z === t.z
            }
            ,
            l.prototype.cmp = function(t) {
                return o(this.z, t.z)
            }
            ,
            l.prototype.str = function() {
                return "EquirectTile(" + tile.z + ")"
            }
            ,
            r(c, a),
            c.prototype.width = function() {
                return this._width
            }
            ,
            c.prototype.height = function() {
                return this._width / 2
            }
            ,
            c.prototype.tileWidth = function() {
                return this._width
            }
            ,
            c.prototype.tileHeight = function() {
                return this._width / 2
            }
            ,
            h.prototype.maxTileSize = function() {
                for (var t = 0, e = 0; e < this.levelList.length; e++) {
                    var n = this.levelList[e];
                    t = Math.max(t, n.tileWidth, n.tileHeight)
                }
                return t
            }
            ,
            h.prototype.levelTiles = function(t, e) {
                var n = this.levelList.indexOf(t);
                return (e = e || []).push(new l(n,this)),
                e
            }
            ,
            h.prototype.visibleTiles = function(t, e, n) {
                var r = new l(this.levelList.indexOf(e),this);
                (n = n || []).length = 0,
                n.push(r)
            }
            ,
            h.Tile = h.prototype.Tile = l,
            h.type = h.prototype.type = "equirect",
            l.type = l.prototype.type = "equirect",
            e.exports = h
        }
        , {
            "../util/cmp": 168,
            "../util/hash": 179,
            "../util/inherits": 180,
            "../util/type": 192,
            "./Level": 143,
            "./common": 144
        }],
        142: [function(t, e, n) {
            "use strict";
            var r = t("../util/inherits")
              , i = t("../util/hash")
              , o = t("../TileSearcher")
              , s = t("../collections/LruMap")
              , a = t("./Level")
              , u = t("./common").makeLevelList
              , l = t("./common").makeSelectableLevelList
              , c = t("../util/clamp")
              , h = t("../util/mod")
              , p = t("../util/cmp")
              , f = t("../util/type")
              , d = t("gl-matrix").vec2
              , m = t("gl-matrix").vec4
              , v = [[0, 1], [1, 0], [0, -1], [-1, 0]];
            function y(t, e, n, r) {
                this.x = t,
                this.y = e,
                this.z = n,
                this._geometry = r,
                this._level = r.levelList[n]
            }
            function g(t) {
                this.constructor.super_.call(this, t),
                this._width = t.width,
                this._height = t.height,
                this._tileWidth = t.tileWidth,
                this._tileHeight = t.tileHeight
            }
            function _(t) {
                if ("array" !== f(t))
                    throw new Error("Level list must be an array");
                this.levelList = u(t, g),
                this.selectableLevelList = l(this.levelList);
                for (var e = 1; e < this.levelList.length; e++)
                    this.levelList[e]._validateWithParentLevel(this.levelList[e - 1]);
                this._tileSearcher = new o(this),
                this._neighborsCache = new s(64),
                this._vec = m.create(),
                this._viewSize = {}
            }
            y.prototype.rotX = function() {
                return 0
            }
            ,
            y.prototype.rotY = function() {
                return 0
            }
            ,
            y.prototype.centerX = function() {
                var t = this._level.width()
                  , e = this._level.tileWidth();
                return (this.x * e + .5 * this.width()) / t - .5
            }
            ,
            y.prototype.centerY = function() {
                var t = this._level.height()
                  , e = this._level.tileHeight();
                return .5 - (this.y * e + .5 * this.height()) / t
            }
            ,
            y.prototype.scaleX = function() {
                var t = this._level.width();
                return this.width() / t
            }
            ,
            y.prototype.scaleY = function() {
                var t = this._level.height();
                return this.height() / t
            }
            ,
            y.prototype.width = function() {
                var t = this._level.width()
                  , e = this._level.tileWidth();
                return this.x === this._level.numHorizontalTiles() - 1 && h(t, e) || e
            }
            ,
            y.prototype.height = function() {
                var t = this._level.height()
                  , e = this._level.tileHeight();
                return this.y === this._level.numVerticalTiles() - 1 && h(t, e) || e
            }
            ,
            y.prototype.levelWidth = function() {
                return this._level.width()
            }
            ,
            y.prototype.levelHeight = function() {
                return this._level.height()
            }
            ,
            y.prototype.vertices = function(t) {
                t || (t = [d.create(), d.create(), d.create(), d.create()]);
                var e = this.centerX() - this.scaleX() / 2
                  , n = this.centerX() + this.scaleX() / 2
                  , r = this.centerY() - this.scaleY() / 2
                  , i = this.centerY() + this.scaleY() / 2;
                return d.set(t[0], e, i),
                d.set(t[1], n, i),
                d.set(t[2], n, r),
                d.set(t[3], e, r),
                t
            }
            ,
            y.prototype.parent = function() {
                if (0 === this.z)
                    return null;
                var t = this._geometry
                  , e = this.z - 1;
                return new y(Math.floor(this.x / 2),Math.floor(this.y / 2),e,t)
            }
            ,
            y.prototype.children = function(t) {
                if (this.z === this._geometry.levelList.length - 1)
                    return null;
                var e = this._geometry
                  , n = this.z + 1;
                return (t = t || []).push(new y(2 * this.x,2 * this.y,n,e)),
                t.push(new y(2 * this.x,2 * this.y + 1,n,e)),
                t.push(new y(2 * this.x + 1,2 * this.y,n,e)),
                t.push(new y(2 * this.x + 1,2 * this.y + 1,n,e)),
                t
            }
            ,
            y.prototype.neighbors = function() {
                var t = this._geometry
                  , e = t._neighborsCache
                  , n = e.get(this);
                if (n)
                    return n;
                for (var r = this.x, i = this.y, o = this.z, s = this._level, a = s.numHorizontalTiles() - 1, u = s.numVerticalTiles() - 1, l = [], c = 0; c < v.length; c++) {
                    var h = r + v[c][0]
                      , p = i + v[c][1]
                      , f = o;
                    0 <= h && h <= a && 0 <= p && p <= u && l.push(new y(h,p,f,t))
                }
                return e.set(this, l),
                l
            }
            ,
            y.prototype.hash = function() {
                return i(this.z, this.y, this.x)
            }
            ,
            y.prototype.equals = function(t) {
                return this._geometry === t._geometry && this.z === t.z && this.y === t.y && this.x === t.x
            }
            ,
            y.prototype.cmp = function(t) {
                return p(this.z, t.z) || p(this.y, t.y) || p(this.x, t.x)
            }
            ,
            y.prototype.str = function() {
                return "FlatTile(" + tile.x + ", " + tile.y + ", " + tile.z + ")"
            }
            ,
            r(g, a),
            g.prototype.width = function() {
                return this._width
            }
            ,
            g.prototype.height = function() {
                return this._height
            }
            ,
            g.prototype.tileWidth = function() {
                return this._tileWidth
            }
            ,
            g.prototype.tileHeight = function() {
                return this._tileHeight
            }
            ,
            g.prototype._validateWithParentLevel = function(t) {
                var e = this.width()
                  , n = this.height()
                  , r = this.tileWidth()
                  , i = this.tileHeight()
                  , o = t.width()
                  , s = t.height()
                  , a = t.tileWidth()
                  , u = t.tileHeight();
                return e % o != 0 ? new Error("Level width must be multiple of parent level: " + e + " vs. " + o) : n % s != 0 ? new Error("Level height must be multiple of parent level: " + n + " vs. " + s) : r % a != 0 ? new Error("Level tile width must be multiple of parent level: " + r + " vs. " + a) : i % u != 0 ? new Error("Level tile height must be multiple of parent level: " + i + " vs. " + u) : void 0
            }
            ,
            _.prototype.maxTileSize = function() {
                for (var t = 0, e = 0; e < this.levelList.length; e++) {
                    var n = this.levelList[e];
                    t = Math.max(t, n.tileWidth, n.tileHeight)
                }
                return t
            }
            ,
            _.prototype.levelTiles = function(t, e) {
                var n = this.levelList.indexOf(t)
                  , r = t.numHorizontalTiles() - 1
                  , i = t.numVerticalTiles() - 1;
                e || (e = []);
                for (var o = 0; o <= r; o++)
                    for (var s = 0; s <= i; s++)
                        e.push(new y(o,s,n,this));
                return e
            }
            ,
            _.prototype._closestTile = function(t, e) {
                var n = this._vec;
                m.set(n, 0, 0, 1, 1),
                m.transformMat4(n, n, t.inverseProjection());
                var r = .5 + n[0]
                  , i = .5 - n[1]
                  , o = this.levelList.indexOf(e)
                  , s = e.width()
                  , a = e.height()
                  , u = e.tileWidth()
                  , l = e.tileHeight()
                  , h = e.numHorizontalTiles()
                  , p = e.numVerticalTiles();
                return new y(c(Math.floor(r * s / u), 0, h - 1),c(Math.floor(i * a / l), 0, p - 1),o,this)
            }
            ,
            _.prototype.visibleTiles = function(t, e, n) {
                var r = this._viewSize
                  , i = this._tileSearcher;
                if (n = n || [],
                t.size(r),
                0 === r.width || 0 === r.height)
                    return n;
                var o = this._closestTile(t, e);
                if (!i.search(t, o, n))
                    throw new Error("Starting tile is not visible");
                return n
            }
            ,
            _.Tile = _.prototype.Tile = y,
            _.type = _.prototype.type = "flat",
            y.type = y.prototype.type = "flat",
            e.exports = _
        }
        , {
            "../TileSearcher": 113,
            "../collections/LruMap": 119,
            "../util/clamp": 166,
            "../util/cmp": 168,
            "../util/hash": 179,
            "../util/inherits": 180,
            "../util/mod": 182,
            "../util/type": 192,
            "./Level": 143,
            "./common": 144,
            "gl-matrix": 5
        }],
        143: [function(t, e, n) {
            "use strict";
            function r(t) {
                this._fallbackOnly = !!t.fallbackOnly
            }
            r.prototype.numHorizontalTiles = function() {
                return Math.ceil(this.width() / this.tileWidth())
            }
            ,
            r.prototype.numVerticalTiles = function() {
                return Math.ceil(this.height() / this.tileHeight())
            }
            ,
            r.prototype.fallbackOnly = function() {
                return this._fallbackOnly
            }
            ,
            e.exports = r
        }
        , {}],
        144: [function(t, e, n) {
            "use strict";
            var r = t("../util/cmp");
            e.exports = {
                makeLevelList: function(t, e) {
                    for (var n = [], i = 0; i < t.length; i++)
                        n.push(new e(t[i]));
                    return n.sort((function(t, e) {
                        return r(t.width(), e.width())
                    }
                    )),
                    n
                },
                makeSelectableLevelList: function(t) {
                    for (var e = [], n = 0; n < t.length; n++)
                        t[n]._fallbackOnly || e.push(t[n]);
                    if (!e.length)
                        throw new Error("No selectable levels in list");
                    return e
                }
            }
        }
        , {
            "../util/cmp": 168
        }],
        145: [function(t, e, n) {
            "use strict";
            e.exports = {
                WebGlStage: t("./stages/WebGl"),
                WebGlCubeRenderer: t("./renderers/WebGlCube"),
                WebGlFlatRenderer: t("./renderers/WebGlFlat"),
                WebGlEquirectRenderer: t("./renderers/WebGlEquirect"),
                registerDefaultRenderers: t("./renderers/registerDefaultRenderers"),
                CubeGeometry: t("./geometries/Cube"),
                FlatGeometry: t("./geometries/Flat"),
                EquirectGeometry: t("./geometries/Equirect"),
                RectilinearView: t("./views/Rectilinear"),
                FlatView: t("./views/Flat"),
                ImageUrlSource: t("./sources/ImageUrl"),
                SingleAssetSource: t("./sources/SingleAsset"),
                StaticAsset: t("./assets/Static"),
                DynamicAsset: t("./assets/Dynamic"),
                TextureStore: t("./TextureStore"),
                Layer: t("./Layer"),
                RenderLoop: t("./RenderLoop"),
                KeyControlMethod: t("./controls/Key"),
                DragControlMethod: t("./controls/Drag"),
                QtvrControlMethod: t("./controls/Qtvr"),
                ScrollZoomControlMethod: t("./controls/ScrollZoom"),
                PinchZoomControlMethod: t("./controls/PinchZoom"),
                VelocityControlMethod: t("./controls/Velocity"),
                ElementPressControlMethod: t("./controls/ElementPress"),
                Controls: t("./controls/Controls"),
                Dynamics: t("./controls/Dynamics"),
                Viewer: t("./Viewer"),
                Scene: t("./Scene"),
                Hotspot: t("./Hotspot"),
                HotspotContainer: t("./HotspotContainer"),
                colorEffects: t("./colorEffects"),
                registerDefaultControls: t("./controls/registerDefaultControls"),
                autorotate: t("./autorotate"),
                util: {
                    async: t("./util/async"),
                    cancelize: t("./util/cancelize"),
                    chain: t("./util/chain"),
                    clamp: t("./util/clamp"),
                    clearOwnProperties: t("./util/clearOwnProperties"),
                    cmp: t("./util/cmp"),
                    compose: t("./util/compose"),
                    convertFov: t("./util/convertFov"),
                    decimal: t("./util/decimal"),
                    defaults: t("./util/defaults"),
                    defer: t("./util/defer"),
                    degToRad: t("./util/degToRad"),
                    delay: t("./util/delay"),
                    dom: t("./util/dom"),
                    extend: t("./util/extend"),
                    hash: t("./util/hash"),
                    inherits: t("./util/inherits"),
                    mod: t("./util/mod"),
                    noop: t("./util/noop"),
                    now: t("./util/now"),
                    once: t("./util/once"),
                    pixelRatio: t("./util/pixelRatio"),
                    radToDeg: t("./util/radToDeg"),
                    real: t("./util/real"),
                    retry: t("./util/retry"),
                    tween: t("./util/tween"),
                    type: t("./util/type")
                },
                dependencies: {
                    bowser: t("bowser"),
                    glMatrix: t("gl-matrix"),
                    eventEmitter: t("minimal-event-emitter"),
                    hammerjs: t("hammerjs")
                }
            }
        }
        , {
            "./Hotspot": 106,
            "./HotspotContainer": 107,
            "./Layer": 108,
            "./RenderLoop": 110,
            "./Scene": 111,
            "./TextureStore": 112,
            "./Viewer": 115,
            "./assets/Dynamic": 116,
            "./assets/Static": 117,
            "./autorotate": 118,
            "./colorEffects": 125,
            "./controls/Controls": 128,
            "./controls/Drag": 129,
            "./controls/Dynamics": 130,
            "./controls/ElementPress": 131,
            "./controls/Key": 133,
            "./controls/PinchZoom": 134,
            "./controls/Qtvr": 135,
            "./controls/ScrollZoom": 136,
            "./controls/Velocity": 137,
            "./controls/registerDefaultControls": 138,
            "./geometries/Cube": 140,
            "./geometries/Equirect": 141,
            "./geometries/Flat": 142,
            "./renderers/WebGlCube": 149,
            "./renderers/WebGlEquirect": 150,
            "./renderers/WebGlFlat": 151,
            "./renderers/registerDefaultRenderers": 152,
            "./sources/ImageUrl": 157,
            "./sources/SingleAsset": 158,
            "./stages/WebGl": 161,
            "./util/async": 162,
            "./util/cancelize": 164,
            "./util/chain": 165,
            "./util/clamp": 166,
            "./util/clearOwnProperties": 167,
            "./util/cmp": 168,
            "./util/compose": 169,
            "./util/convertFov": 170,
            "./util/decimal": 171,
            "./util/defaults": 172,
            "./util/defer": 173,
            "./util/degToRad": 174,
            "./util/delay": 175,
            "./util/dom": 176,
            "./util/extend": 177,
            "./util/hash": 179,
            "./util/inherits": 180,
            "./util/mod": 182,
            "./util/noop": 183,
            "./util/now": 184,
            "./util/once": 185,
            "./util/pixelRatio": 186,
            "./util/radToDeg": 188,
            "./util/real": 189,
            "./util/retry": 190,
            "./util/tween": 191,
            "./util/type": 192,
            "./views/Flat": 193,
            "./views/Rectilinear": 194,
            bowser: 105,
            "gl-matrix": 5,
            hammerjs: 15,
            "minimal-event-emitter": 195
        }],
        146: [function(t, e, n) {
            "use strict";
            var r = t("../assets/Static")
              , i = t("../NetworkError")
              , o = t("bowser")
              , s = t("../util/global")
              , a = t("../util/once")
              , u = !!s.createImageBitmap && !o.firefox
              , l = {
                imageOrientation: "flipY",
                premultiplyAlpha: "premultiply"
            };
            function c(t) {
                this._stage = t
            }
            c.prototype.loadImage = function(t, e, n) {
                var r = this
                  , i = new Image;
                i.crossOrigin = "anonymous";
                var o = e && e.x || 0
                  , s = e && e.y || 0
                  , u = e && e.width || 1
                  , l = e && e.height || 1;
                return n = a(n),
                i.onload = function() {
                    r._handleLoad(i, o, s, u, l, n)
                }
                ,
                i.onerror = function() {
                    r._handleError(t, n)
                }
                ,
                i.src = t,
                function() {
                    i.onload = i.onerror = null,
                    i.src = "",
                    n.apply(null, arguments)
                }
            }
            ,
            c.prototype._handleLoad = function(t, e, n, i, o, a) {
                if (0 !== e || 0 !== n || 1 !== i || 1 !== o)
                    if (e *= t.naturalWidth,
                    n *= t.naturalHeight,
                    i *= t.naturalWidth,
                    o *= t.naturalHeight,
                    u)
                        s.createImageBitmap(t, e, n, i, o, l).then((function(t) {
                            a(null, new r(t))
                        }
                        ));
                    else {
                        var c = document.createElement("canvas");
                        c.width = i,
                        c.height = o,
                        c.getContext("2d").drawImage(t, e, n, i, o, 0, 0, i, o),
                        a(null, new r(c))
                    }
                else
                    a(null, new r(t))
            }
            ,
            c.prototype._handleError = function(t, e) {
                e(new i("Network error: " + t))
            }
            ,
            e.exports = c
        }
        , {
            "../NetworkError": 109,
            "../assets/Static": 117,
            "../util/global": 178,
            "../util/once": 185,
            bowser: 105
        }],
        147: [function(t, e, n) {
            "use strict";
            var r = t("gl-matrix").mat4
              , i = t("gl-matrix").vec3
              , o = t("../util/clearOwnProperties")
              , s = t("./WebGlCommon")
              , a = s.createConstantBuffers
              , u = s.destroyConstantBuffers
              , l = s.createShaderProgram
              , c = s.destroyShaderProgram
              , h = s.enableAttributes
              , p = s.disableAttributes
              , f = s.setViewport
              , d = s.setupPixelEffectUniforms
              , m = s.setDepth
              , v = s.setTexture
              , y = t("../shaders/vertexNormal")
              , g = t("../shaders/fragmentNormal")
              , _ = [0, 1, 2, 0, 2, 3]
              , b = [-.5, -.5, 0, .5, -.5, 0, .5, .5, 0, -.5, .5, 0]
              , w = [0, 0, 1, 0, 1, 1, 0, 1]
              , x = ["aVertexPosition", "aTextureCoord"]
              , E = ["uDepth", "uOpacity", "uSampler", "uProjMatrix", "uViewportMatrix", "uColorOffset", "uColorMatrix"];
            function M(t) {
                this.gl = t,
                this.projMatrix = r.create(),
                this.viewportMatrix = r.create(),
                this.translateVector = i.create(),
                this.scaleVector = i.create(),
                this.constantBuffers = a(t, _, b, w),
                this.shaderProgram = l(t, y, g, x, E)
            }
            M.prototype.destroy = function() {
                u(this.gl, this.constantBuffers),
                c(this.gl, this.shaderProgram),
                o(this)
            }
            ,
            M.prototype.startLayer = function(t, e) {
                var n = this.gl
                  , r = this.shaderProgram
                  , i = this.constantBuffers
                  , o = this.viewportMatrix;
                n.useProgram(r),
                h(n, r),
                f(n, t, e, o),
                n.uniformMatrix4fv(r.uViewportMatrix, !1, o),
                n.bindBuffer(n.ARRAY_BUFFER, i.vertexPositions),
                n.vertexAttribPointer(r.aVertexPosition, 3, n.FLOAT, n.FALSE, 0, 0),
                n.bindBuffer(n.ARRAY_BUFFER, i.textureCoords),
                n.vertexAttribPointer(r.aTextureCoord, 2, n.FLOAT, n.FALSE, 0, 0),
                d(n, t.effects(), {
                    opacity: r.uOpacity,
                    colorOffset: r.uColorOffset,
                    colorMatrix: r.uColorMatrix
                })
            }
            ,
            M.prototype.endLayer = function(t, e) {
                var n = this.gl
                  , r = this.shaderProgram;
                p(n, r)
            }
            ,
            M.prototype.renderTile = function(t, e, n, i) {
                var o = this.gl
                  , s = this.shaderProgram
                  , a = this.constantBuffers
                  , u = this.projMatrix
                  , l = this.translateVector
                  , c = this.scaleVector;
                l[0] = t.centerX(),
                l[1] = t.centerY(),
                l[2] = -.5,
                c[0] = t.scaleX(),
                c[1] = t.scaleY(),
                c[2] = 1,
                r.copy(u, n.view().projection()),
                r.rotateX(u, u, t.rotX()),
                r.rotateY(u, u, t.rotY()),
                r.translate(u, u, l),
                r.scale(u, u, c),
                o.uniformMatrix4fv(s.uProjMatrix, !1, u),
                m(o, s, i, t.z),
                v(o, s, e),
                o.bindBuffer(o.ELEMENT_ARRAY_BUFFER, a.vertexIndices),
                o.drawElements(o.TRIANGLES, _.length, o.UNSIGNED_SHORT, 0)
            }
            ,
            e.exports = M
        }
        , {
            "../shaders/fragmentNormal": 154,
            "../shaders/vertexNormal": 156,
            "../util/clearOwnProperties": 167,
            "./WebGlCommon": 148,
            "gl-matrix": 5
        }],
        148: [function(t, e, n) {
            "use strict";
            var r = t("../util/clamp")
              , i = t("gl-matrix").vec4
              , o = t("gl-matrix").vec3
              , s = t("gl-matrix").mat4;
            function a(t, e, n) {
                var r = t.createShader(e);
                if (t.shaderSource(r, n),
                t.compileShader(r),
                !t.getShaderParameter(r, t.COMPILE_STATUS))
                    throw t.getShaderInfoLog(r);
                return r
            }
            function u(t, e, n, r) {
                var i = t.createBuffer();
                return t.bindBuffer(e, i),
                t.bufferData(e, r, n),
                i
            }
            var l = i.create()
              , c = s.create();
            s.identity(c);
            var h = o.create()
              , p = o.create();
            e.exports = {
                createShaderProgram: function(t, e, n, r, i) {
                    var o = a(t, t.VERTEX_SHADER, e)
                      , s = a(t, t.FRAGMENT_SHADER, n)
                      , u = t.createProgram();
                    if (t.attachShader(u, o),
                    t.attachShader(u, s),
                    t.linkProgram(u),
                    !t.getProgramParameter(u, t.LINK_STATUS))
                        throw t.getProgramInfoLog(u);
                    for (var l = 0; l < r.length; l++) {
                        var c = r[l];
                        if (u[c] = t.getAttribLocation(u, c),
                        -1 === u[c])
                            throw new Error("Shader program has no " + c + " attribute")
                    }
                    for (var h = 0; h < i.length; h++) {
                        var p = i[h];
                        if (u[p] = t.getUniformLocation(u, p),
                        -1 === u[p])
                            throw new Error("Shader program has no " + p + " uniform")
                    }
                    return u
                },
                destroyShaderProgram: function(t, e) {
                    for (var n = t.getAttachedShaders(e), r = 0; r < n.length; r++) {
                        var i = n[r];
                        t.detachShader(e, i),
                        t.deleteShader(i)
                    }
                    t.deleteProgram(e)
                },
                createConstantBuffers: function(t, e, n, r) {
                    return {
                        vertexIndices: u(t, t.ELEMENT_ARRAY_BUFFER, t.STATIC_DRAW, new Uint16Array(e)),
                        vertexPositions: u(t, t.ARRAY_BUFFER, t.STATIC_DRAW, new Float32Array(n)),
                        textureCoords: u(t, t.ARRAY_BUFFER, t.STATIC_DRAW, new Float32Array(r))
                    }
                },
                destroyConstantBuffers: function(t, e) {
                    t.deleteBuffer(e.vertexIndices),
                    t.deleteBuffer(e.vertexPositions),
                    t.deleteBuffer(e.textureCoords)
                },
                enableAttributes: function(t, e) {
                    for (var n = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), r = 0; r < n; r++)
                        t.enableVertexAttribArray(r)
                },
                disableAttributes: function(t, e) {
                    for (var n = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), r = 0; r < n; r++)
                        t.disableVertexAttribArray(r)
                },
                setTexture: function(t, e, n) {
                    t.activeTexture(t.TEXTURE0),
                    t.bindTexture(t.TEXTURE_2D, n._texture),
                    t.uniform1i(e.uSampler, 0)
                },
                setDepth: function(t, e, n, r) {
                    var i = (256 * (n + 1) - r) / 65536;
                    t.uniform1f(e.uDepth, i)
                },
                setViewport: function(t, e, n, i) {
                    if (0 === n.x && 1 === n.width && 0 === n.y && 1 === n.height)
                        return t.viewport(0, 0, t.drawingBufferWidth, t.drawingBufferHeight),
                        void s.identity(i);
                    var a = n.x
                      , u = r(a, 0, 1)
                      , l = u - a
                      , c = 1 - u
                      , f = r(n.width - l, 0, c)
                      , d = n.width - f
                      , m = 1 - n.height - n.y
                      , v = r(m, 0, 1)
                      , y = v - m
                      , g = 1 - v
                      , _ = r(n.height - y, 0, g)
                      , b = n.height - _;
                    o.set(p, n.width / f, n.height / _, 1),
                    o.set(h, (d - l) / f, (b - y) / _, 0),
                    s.identity(i),
                    s.translate(i, i, h),
                    s.scale(i, i, p),
                    t.viewport(t.drawingBufferWidth * u, t.drawingBufferHeight * v, t.drawingBufferWidth * f, t.drawingBufferHeight * _)
                },
                setupPixelEffectUniforms: function(t, e, n) {
                    var r = 1;
                    e && null != e.opacity && (r = e.opacity),
                    t.uniform1f(n.opacity, r);
                    var i = l;
                    e && e.colorOffset && (i = e.colorOffset),
                    t.uniform4fv(n.colorOffset, i);
                    var o = c;
                    e && e.colorMatrix && (o = e.colorMatrix),
                    t.uniformMatrix4fv(n.colorMatrix, !1, o)
                }
            }
        }
        , {
            "../util/clamp": 166,
            "gl-matrix": 5
        }],
        149: [function(t, e, n) {
            "use strict";
            var r = t("./WebGlBase");
            function i() {
                this.constructor.super_.apply(this, arguments)
            }
            t("../util/inherits")(i, r),
            e.exports = i
        }
        , {
            "../util/inherits": 180,
            "./WebGlBase": 147
        }],
        150: [function(t, e, n) {
            "use strict";
            var r = t("gl-matrix").mat4
              , i = t("../util/clearOwnProperties")
              , o = t("./WebGlCommon")
              , s = o.createConstantBuffers
              , a = o.destroyConstantBuffers
              , u = o.createShaderProgram
              , l = o.destroyShaderProgram
              , c = o.enableAttributes
              , h = o.disableAttributes
              , p = o.setViewport
              , f = o.setupPixelEffectUniforms
              , d = o.setDepth
              , m = o.setTexture
              , v = t("../shaders/vertexEquirect")
              , y = t("../shaders/fragmentEquirect")
              , g = [0, 1, 2, 0, 2, 3]
              , _ = [-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0]
              , b = [0, 0, 1, 0, 1, 1, 0, 1]
              , w = ["aVertexPosition"]
              , x = ["uDepth", "uOpacity", "uSampler", "uInvProjMatrix", "uViewportMatrix", "uColorOffset", "uColorMatrix", "uTextureX", "uTextureY", "uTextureWidth", "uTextureHeight"];
            function E(t) {
                this.gl = t,
                this.invProjMatrix = r.create(),
                this.viewportMatrix = r.create(),
                this.constantBuffers = s(t, g, _, b),
                this.shaderProgram = u(t, v, y, w, x)
            }
            E.prototype.destroy = function() {
                a(this.gl, this.constantBuffers),
                l(this.gl, this.shaderProgram),
                i(this)
            }
            ,
            E.prototype.startLayer = function(t, e) {
                var n = this.gl
                  , i = this.shaderProgram
                  , o = this.constantBuffers
                  , s = this.invProjMatrix
                  , a = this.viewportMatrix;
                n.useProgram(i),
                c(n, i),
                p(n, t, e, a),
                n.uniformMatrix4fv(i.uViewportMatrix, !1, a),
                n.bindBuffer(n.ARRAY_BUFFER, o.vertexPositions),
                n.vertexAttribPointer(i.aVertexPosition, 3, n.FLOAT, n.FALSE, 0, 0),
                n.bindBuffer(n.ARRAY_BUFFER, o.textureCoords),
                r.copy(s, t.view().projection()),
                r.invert(s, s),
                n.uniformMatrix4fv(i.uInvProjMatrix, !1, s);
                var u = t.effects().textureCrop || {}
                  , l = null != u.x ? u.x : 0
                  , h = null != u.y ? u.y : 0
                  , d = null != u.width ? u.width : 1
                  , m = null != u.height ? u.height : 1;
                n.uniform1f(i.uTextureX, l),
                n.uniform1f(i.uTextureY, h),
                n.uniform1f(i.uTextureWidth, d),
                n.uniform1f(i.uTextureHeight, m),
                f(n, t.effects(), {
                    opacity: i.uOpacity,
                    colorOffset: i.uColorOffset,
                    colorMatrix: i.uColorMatrix
                })
            }
            ,
            E.prototype.endLayer = function(t, e) {
                var n = this.gl
                  , r = this.shaderProgram;
                h(n, r)
            }
            ,
            E.prototype.renderTile = function(t, e, n, r) {
                var i = this.gl
                  , o = this.shaderProgram
                  , s = this.constantBuffers;
                d(i, o, r, t.z),
                m(i, o, e),
                i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, s.vertexIndices),
                i.drawElements(i.TRIANGLES, g.length, i.UNSIGNED_SHORT, 0)
            }
            ,
            e.exports = E
        }
        , {
            "../shaders/fragmentEquirect": 153,
            "../shaders/vertexEquirect": 155,
            "../util/clearOwnProperties": 167,
            "./WebGlCommon": 148,
            "gl-matrix": 5
        }],
        151: [function(t, e, n) {
            "use strict";
            var r = t("./WebGlBase");
            function i() {
                this.constructor.super_.apply(this, arguments)
            }
            t("../util/inherits")(i, r),
            e.exports = i
        }
        , {
            "../util/inherits": 180,
            "./WebGlBase": 147
        }],
        152: [function(t, e, n) {
            "use strict";
            var r = t("./WebGlCube")
              , i = t("./WebGlFlat")
              , o = t("./WebGlEquirect");
            e.exports = function(t) {
                switch (t.type) {
                case "webgl":
                    t.registerRenderer("flat", "flat", i),
                    t.registerRenderer("cube", "rectilinear", r),
                    t.registerRenderer("equirect", "rectilinear", o);
                    break;
                default:
                    throw new Error("Unknown stage type: " + t.type)
                }
            }
        }
        , {
            "./WebGlCube": 149,
            "./WebGlEquirect": 150,
            "./WebGlFlat": 151
        }],
        153: [function(t, e, n) {
            "use strict";
            e.exports = ["#ifdef GL_FRAGMENT_PRECISION_HIGH", "precision highp float;", "#else", "precision mediump float", "#endif", "uniform sampler2D uSampler;", "uniform float uOpacity;", "uniform float uTextureX;", "uniform float uTextureY;", "uniform float uTextureWidth;", "uniform float uTextureHeight;", "uniform vec4 uColorOffset;", "uniform mat4 uColorMatrix;", "varying vec4 vRay;", "const float PI = 3.14159265358979323846264;", "void main(void) {", "  float r = inversesqrt(vRay.x * vRay.x + vRay.y * vRay.y + vRay.z * vRay.z);", "  float phi  = acos(vRay.y * r);", "  float theta = atan(vRay.x, -1.0*vRay.z);", "  float s = 0.5 + 0.5 * theta / PI;", "  float t = 1.0 - phi / PI;", "  s = s * uTextureWidth + uTextureX;", "  t = t * uTextureHeight + uTextureY;", "  vec4 color = texture2D(uSampler, vec2(s, t)) * uColorMatrix + uColorOffset;", "  gl_FragColor = vec4(color.rgba * uOpacity);", "}"].join("\n")
        }
        , {}],
        154: [function(t, e, n) {
            "use strict";
            e.exports = ["#ifdef GL_FRAGMENT_PRECISION_HIGH", "precision highp float;", "#else", "precision mediump float;", "#endif", "uniform sampler2D uSampler;", "uniform float uOpacity;", "uniform vec4 uColorOffset;", "uniform mat4 uColorMatrix;", "varying vec2 vTextureCoord;", "void main(void) {", "  vec4 color = texture2D(uSampler, vTextureCoord) * uColorMatrix + uColorOffset;", "  gl_FragColor = vec4(color.rgba * uOpacity);", "}"].join("\n")
        }
        , {}],
        155: [function(t, e, n) {
            "use strict";
            e.exports = ["attribute vec3 aVertexPosition;", "uniform float uDepth;", "uniform mat4 uViewportMatrix;", "uniform mat4 uInvProjMatrix;", "varying vec4 vRay;", "void main(void) {", "  vRay = uInvProjMatrix * vec4(aVertexPosition.xy, 1.0, 1.0);", "  gl_Position = uViewportMatrix * vec4(aVertexPosition.xy, uDepth, 1.0);", "}"].join("\n")
        }
        , {}],
        156: [function(t, e, n) {
            "use strict";
            e.exports = ["attribute vec3 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform float uDepth;", "uniform mat4 uViewportMatrix;", "uniform mat4 uProjMatrix;", "varying vec2 vTextureCoord;", "void main(void) {", "  gl_Position = uViewportMatrix * uProjMatrix * vec4(aVertexPosition.xy, 0.0, 1.0);", "  gl_Position.z = uDepth * gl_Position.w;", "  vTextureCoord = aTextureCoord;", "}"].join("\n")
        }
        , {}],
        157: [function(t, e, n) {
            "use strict";
            var r = t("minimal-event-emitter")
              , i = t("../NetworkError")
              , o = t("../collections/WorkPool")
              , s = t("../util/chain")
              , a = t("../util/delay")
              , u = t("../util/now")
              , l = {
                x: "x",
                y: "y",
                z: "z",
                f: "face"
            };
            function c(t, e) {
                e = e || {},
                this._loadPool = new o({
                    concurrency: e.concurrency || 4
                }),
                this._retryDelay = e.retryDelay || 1e4,
                this._retryMap = {},
                this._sourceFromTile = t
            }
            function h(t) {
                return new RegExp("\\{(" + t + ")\\}","g")
            }
            r(c),
            c.prototype.loadAsset = function(t, e, n) {
                var r, o = this, l = this._retryDelay, c = this._retryMap, h = this._sourceFromTile(e), p = h.url, f = h.rect, d = t.loadImage.bind(t, p, f), m = c[p];
                if (null != m) {
                    var v = u() - m;
                    v < l ? r = l - v : (r = 0,
                    delete c[p])
                }
                var y = a.bind(null, r);
                return s(y, (function(t) {
                    return o._loadPool.push(d, (function(n, r) {
                        n ? (n instanceof i && (c[p] = u(),
                        o.emit("networkError", n, e)),
                        t(n, e)) : (delete c[p],
                        t(null, e, r))
                    }
                    ))
                }
                ))(n)
            }
            ,
            c.fromString = function(t, e) {
                var n = (e = e || {}) && e.cubeMapPreviewFaceOrder || "bdflru";
                return new c(e.cubeMapPreviewUrl ? function(t) {
                    return 0 === t.z ? function(t) {
                        var r = n.indexOf(t.face) / 6;
                        return {
                            url: e.cubeMapPreviewUrl,
                            rect: {
                                x: 0,
                                y: r,
                                width: 1,
                                height: 1 / 6
                            }
                        }
                    }(t) : r(t)
                }
                : r,e);
                function r(e) {
                    var n = t;
                    for (var r in l) {
                        var i = l[r]
                          , o = h(r)
                          , s = e.hasOwnProperty(i) ? e[i] : "";
                        n = n.replace(o, s)
                    }
                    return {
                        url: n
                    }
                }
            }
            ,
            e.exports = c
        }
        , {
            "../NetworkError": 109,
            "../collections/WorkPool": 123,
            "../util/chain": 165,
            "../util/delay": 175,
            "../util/now": 184,
            "minimal-event-emitter": 195
        }],
        158: [function(t, e, n) {
            "use strict";
            function r(t) {
                this._asset = t
            }
            r.prototype.asset = function() {
                return this._asset
            }
            ,
            r.prototype.loadAsset = function(t, e, n) {
                var r = this
                  , i = setTimeout((function() {
                    n(null, e, r._asset)
                }
                ), 0);
                return function() {
                    clearTimeout(i),
                    n.apply(null, arguments)
                }
            }
            ,
            e.exports = r
        }
        , {}],
        159: [function(t, e, n) {
            "use strict";
            function r() {
                this._renderers = {}
            }
            r.prototype.set = function(t, e, n) {
                this._renderers[t] || (this._renderers[t] = {}),
                this._renderers[t][e] = n
            }
            ,
            r.prototype.get = function(t, e) {
                return this._renderers[t] && this._renderers[t][e] || null
            }
            ,
            e.exports = r
        }
        , {}],
        160: [function(t, e, n) {
            "use strict";
            var r = t("minimal-event-emitter")
              , i = t("../collections/WorkQueue")
              , o = t("../util/calcRect")
              , s = t("../util/async")
              , a = t("../util/cancelize")
              , u = t("../util/clearOwnProperties")
              , l = t("./RendererRegistry");
            function c(t, e) {
                return t.cmp(e)
            }
            function h(t, e) {
                return -t.cmp(e)
            }
            function p(t) {
                this._progressive = !(!t || !t.progressive),
                this._layers = [],
                this._renderers = [],
                this._tilesToLoad = [],
                this._tilesToRender = [],
                this._tmpVisible = [],
                this._tmpChildren = [],
                this._width = 0,
                this._height = 0,
                this._tmpRect = {},
                this._tmpSize = {},
                this._createTextureWorkQueue = new i,
                this._emitRenderInvalid = this._emitRenderInvalid.bind(this),
                this._rendererRegistry = new l
            }
            r(p),
            p.prototype.destroy = function() {
                this.removeAllLayers(),
                u(this)
            }
            ,
            p.prototype.registerRenderer = function(t, e, n) {
                return this._rendererRegistry.set(t, e, n)
            }
            ,
            p.prototype.domElement = function() {
                throw new Error("Stage implementation must override domElement")
            }
            ,
            p.prototype.width = function() {
                return this._width
            }
            ,
            p.prototype.height = function() {
                return this._height
            }
            ,
            p.prototype.size = function(t) {
                return (t = t || {}).width = this._width,
                t.height = this._height,
                t
            }
            ,
            p.prototype.setSize = function(t) {
                this._width = t.width,
                this._height = t.height,
                this.setSizeForType(),
                this.emit("resize"),
                this._emitRenderInvalid()
            }
            ,
            p.prototype.setSizeForType = function(t) {
                throw new Error("Stage implementation must override setSizeForType")
            }
            ,
            p.prototype.loadImage = function() {
                throw new Error("Stage implementation must override loadImage")
            }
            ,
            p.prototype._emitRenderInvalid = function() {
                this.emit("renderInvalid")
            }
            ,
            p.prototype.validateLayer = function(t) {
                throw new Error("Stage implementation must override validateLayer")
            }
            ,
            p.prototype.listLayers = function() {
                return [].concat(this._layers)
            }
            ,
            p.prototype.hasLayer = function(t) {
                return this._layers.indexOf(t) >= 0
            }
            ,
            p.prototype.addLayer = function(t, e) {
                if (this._layers.indexOf(t) >= 0)
                    throw new Error("Layer already in stage");
                if (null == e && (e = this._layers.length),
                e < 0 || e > this._layers.length)
                    throw new Error("Invalid layer position");
                this.validateLayer(t);
                var n = t.geometry().type
                  , r = t.view().type
                  , i = this._rendererRegistry.get(n, r);
                if (!i)
                    throw new Error("No " + this.type + " renderer avaiable for " + n + " geometry and " + r + " view");
                var o = this.createRenderer(i);
                this._layers.splice(e, 0, t),
                this._renderers.splice(e, 0, o),
                t.addEventListener("viewChange", this._emitRenderInvalid),
                t.addEventListener("effectsChange", this._emitRenderInvalid),
                t.addEventListener("fixedLevelChange", this._emitRenderInvalid),
                t.addEventListener("textureStoreChange", this._emitRenderInvalid),
                this._emitRenderInvalid()
            }
            ,
            p.prototype.moveLayer = function(t, e) {
                var n = this._layers.indexOf(t);
                if (n < 0)
                    throw new Error("No such layer in stage");
                if (e < 0 || e >= this._layers.length)
                    throw new Error("Invalid layer position");
                t = this._layers.splice(n, 1)[0];
                var r = this._renderers.splice(n, 1)[0];
                this._layers.splice(e, 0, t),
                this._renderers.splice(e, 0, r),
                this._emitRenderInvalid()
            }
            ,
            p.prototype.removeLayer = function(t) {
                var e = this._layers.indexOf(t);
                if (e < 0)
                    throw new Error("No such layer in stage");
                var n = this._layers.splice(e, 1)[0]
                  , r = this._renderers.splice(e, 1)[0];
                this.destroyRenderer(r),
                n.removeEventListener("viewChange", this._emitRenderInvalid),
                n.removeEventListener("effectsChange", this._emitRenderInvalid),
                n.removeEventListener("fixedLevelChange", this._emitRenderInvalid),
                n.removeEventListener("textureStoreChange", this._emitRenderInvalid),
                this._emitRenderInvalid()
            }
            ,
            p.prototype.removeAllLayers = function() {
                for (; this._layers.length > 0; )
                    this.removeLayer(this._layers[0])
            }
            ,
            p.prototype.startFrame = function() {
                throw new Error("Stage implementation must override startFrame")
            }
            ,
            p.prototype.endFrame = function() {
                throw new Error("Stage implementation must override endFrame")
            }
            ,
            p.prototype.render = function() {
                var t, e, n, r = this._tilesToLoad, i = this._tilesToRender, s = !0, a = this._width, u = this._height, l = this._tmpRect, c = this._tmpSize;
                if (!(a <= 0 || u <= 0)) {
                    for (this.startFrame(),
                    t = 0; t < this._layers.length; t++)
                        this._layers[t].textureStore().startFrame();
                    for (t = 0; t < this._layers.length; t++) {
                        var h, p, f = this._layers[t], d = f.effects(), m = f.view(), v = f.textureStore(), y = this._renderers[t], g = this._layers.length - t;
                        if (o(a, u, d && d.rect, l),
                        !(l.width <= 0 || l.height <= 0)) {
                            for (c.width = l.width * this._width,
                            c.height = l.height * this._height,
                            m.setSize(c),
                            y.startLayer(f, l),
                            n = this._collectTiles(f, v),
                            e = 0; e < r.length; e++)
                                h = r[e],
                                v.markTile(h);
                            for (e = 0; e < i.length; e++)
                                h = i[e],
                                p = v.texture(h),
                                y.renderTile(h, p, f, g);
                            f.emit("renderComplete", n),
                            n || (s = !1),
                            y.endLayer(f, l)
                        }
                    }
                    for (t = 0; t < this._layers.length; t++)
                        this._layers[t].textureStore().endFrame();
                    this.endFrame(),
                    this.emit("renderComplete", s)
                }
            }
            ,
            p.prototype._collectTiles = function(t, e) {
                var n = this._tilesToLoad
                  , r = this._tilesToRender
                  , i = this._tmpVisible;
                n.length = 0,
                r.length = 0,
                i.length = 0,
                t.visibleTiles(i);
                for (var o = !0, s = 0; s < i.length; s++) {
                    var a, u = i[s];
                    this._collectTileToLoad(u),
                    e.texture(u) ? (a = !1,
                    this._collectTileToRender(u)) : (a = this._collectChildren(u, e),
                    o = !1),
                    this._collectParents(u, e, a)
                }
                return n.sort(c),
                r.sort(h),
                o
            }
            ,
            p.prototype._collectChildren = function(t, e) {
                var n = this._tmpChildren
                  , r = !0;
                do {
                    if (n.length = 0,
                    !t.children(n))
                        break;
                    r = !1;
                    for (var i = 0; i < n.length; i++)
                        t = n[i],
                        e.texture(t) ? (this._collectTileToLoad(t),
                        this._collectTileToRender(t)) : r = !0
                } while (r && 1 === n.length);
                return r
            }
            ,
            p.prototype._collectParents = function(t, e, n) {
                for (var r = this._progressive; (r || n) && null != (t = t.parent()); ) {
                    if (n)
                        if (e.texture(t))
                            this._collectTileToRender(t),
                            n = !1;
                        else if (!this._progressive)
                            continue;
                    this._collectTileToLoad(t) || (r = !1)
                }
                return n
            }
            ,
            p.prototype._collectTileToLoad = function(t) {
                return this._collectTileIntoList(t, this._tilesToLoad)
            }
            ,
            p.prototype._collectTileToRender = function(t) {
                return this._collectTileIntoList(t, this._tilesToRender)
            }
            ,
            p.prototype._collectTileIntoList = function(t, e) {
                for (var n = !1, r = 0; r < e.length; r++)
                    if (t.equals(e[r])) {
                        n = !0;
                        break
                    }
                return n || e.push(t),
                !n
            }
            ,
            p.prototype.createTexture = function(t, e, n) {
                var r = this;
                var i = a(s((function() {
                    return new r.TextureClass(r,t,e)
                }
                )));
                return this._createTextureWorkQueue.push(i, (function(r, i) {
                    n(r, t, e, i)
                }
                ))
            }
            ,
            e.exports = p
        }
        , {
            "../collections/WorkQueue": 124,
            "../util/async": 162,
            "../util/calcRect": 163,
            "../util/cancelize": 164,
            "../util/clearOwnProperties": 167,
            "./RendererRegistry": 159,
            "minimal-event-emitter": 195
        }],
        161: [function(t, e, n) {
            "use strict";
            var r = t("./Stage")
              , i = t("../loaders/HtmlImage")
              , o = t("bowser")
              , s = t("../util/inherits")
              , a = t("../util/pixelRatio")
              , u = t("../util/ispot")
              , l = t("../util/dom").setAbsolute
              , c = t("../util/dom").setFullSize
              , h = t("../util/clearOwnProperties")
              , p = o.chrome;
            function f(t) {
                t = t || {};
                var e = this;
                this.constructor.super_.call(this, t),
                this._generateMipmaps = null != t.generateMipmaps && t.generateMipmaps,
                this._loader = new i(this),
                this._domElement = document.createElement("canvas"),
                l(this._domElement),
                c(this._domElement),
                this._gl = function(t, e) {
                    var n = {
                        alpha: !0,
                        premultipliedAlpha: !0,
                        antialias: !(!e || !e.antialias),
                        preserveDrawingBuffer: !(!e || !e.preserveDrawingBuffer)
                    }
                      , r = t.getContext && (t.getContext("webgl", n) || t.getContext("experimental-webgl", n));
                    if (!r)
                        throw new Error("Could not get WebGL context");
                    return e.wrapContext && (r = e.wrapContext(r)),
                    r
                }(this._domElement, t),
                this._handleContextLoss = function() {
                    e.emit("webglcontextlost"),
                    e._gl = null
                }
                ,
                this._domElement.addEventListener("webglcontextlost", this._handleContextLoss),
                this._rendererInstances = []
            }
            function d(t, e, n) {
                this._stage = t,
                this._gl = t._gl,
                this._texture = null,
                this._timestamp = null,
                this._width = this._height = null,
                this.refresh(e, n)
            }
            s(f, r),
            f.prototype.destroy = function() {
                this._domElement.removeEventListener("webglcontextlost", this._handleContextLoss),
                this.constructor.super_.prototype.destroy.call(this)
            }
            ,
            f.prototype.domElement = function() {
                return this._domElement
            }
            ,
            f.prototype.webGlContext = function() {
                return this._gl
            }
            ,
            f.prototype.setSizeForType = function() {
                var t = a();
                this._domElement.width = t * this._width,
                this._domElement.height = t * this._height
            }
            ,
            f.prototype.loadImage = function(t, e, n) {
                return this._loader.loadImage(t, e, n)
            }
            ,
            f.prototype.maxTextureSize = function() {
                return this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE)
            }
            ,
            f.prototype.validateLayer = function(t) {
                var e = t.geometry().maxTileSize()
                  , n = this.maxTextureSize();
                if (e > n)
                    throw new Error("Layer has level with tile size larger than maximum texture size (" + e + " vs. " + n + ")")
            }
            ,
            f.prototype.createRenderer = function(t) {
                for (var e = this._rendererInstances, n = 0; n < e.length; n++)
                    if (e[n]instanceof t)
                        return e[n];
                var r = new t(this._gl);
                return e.push(r),
                r
            }
            ,
            f.prototype.destroyRenderer = function(t) {
                var e = this._rendererInstances;
                if (this._renderers.indexOf(t) < 0) {
                    t.destroy();
                    var n = e.indexOf(t);
                    n >= 0 && e.splice(n, 1)
                }
            }
            ,
            f.prototype.startFrame = function() {
                var t = this._gl;
                if (!t)
                    throw new Error("Bad WebGL context - maybe context was lost?");
                t.viewport(0, 0, t.drawingBufferWidth, t.drawingBufferHeight),
                t.clearColor(0, 0, 0, 0),
                t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT),
                t.enable(t.DEPTH_TEST),
                t.enable(t.BLEND),
                t.blendFunc(t.ONE, t.ONE_MINUS_SRC_ALPHA)
            }
            ,
            f.prototype.endFrame = function() {}
            ,
            f.prototype.takeSnapshot = function(t) {
                "object" == typeof t && null != t || (t = {});
                var e = t.quality;
                if (void 0 === e && (e = 75),
                "number" != typeof e || e < 0 || e > 100)
                    throw new Error("WebGLStage: Snapshot quality needs to be a number between 0 and 100");
                return this.render(),
                this._domElement.toDataURL("image/jpeg", e / 100)
            }
            ,
            f.type = f.prototype.type = "webgl",
            d.prototype.refresh = function(t, e) {
                var n, r = this._gl, i = this._stage, o = e.timestamp();
                if (o !== this._timestamp) {
                    var s = e.element()
                      , a = e.width()
                      , l = e.height();
                    if (a !== this._width || l !== this._height) {
                        var c = i.maxTextureSize();
                        if (a > c)
                            throw new Error("Texture width larger than max size (" + a + " vs. " + c + ")");
                        if (l > c)
                            throw new Error("Texture height larger than max size (" + l + " vs. " + c + ")");
                        this._texture && r.deleteTexture(n),
                        n = this._texture = r.createTexture(),
                        r.bindTexture(r.TEXTURE_2D, n),
                        r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, !0),
                        r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0),
                        r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, s)
                    } else
                        n = this._texture,
                        r.bindTexture(r.TEXTURE_2D, n),
                        r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, !0),
                        r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0),
                        s instanceof HTMLVideoElement && p ? r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, s) : r.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, r.RGBA, r.UNSIGNED_BYTE, s);
                    i._generateMipmaps && u(a) && u(l) ? (r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR),
                    r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR_MIPMAP_LINEAR),
                    r.generateMipmap(r.TEXTURE_2D)) : (r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR),
                    r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR)),
                    r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE),
                    r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE),
                    r.bindTexture(r.TEXTURE_2D, null),
                    this._timestamp = o,
                    this._width = a,
                    this._height = l
                }
            }
            ,
            d.prototype.destroy = function() {
                this._texture && this._gl.deleteTexture(this._texture),
                h(this)
            }
            ,
            f.TextureClass = f.prototype.TextureClass = d,
            e.exports = f
        }
        , {
            "../loaders/HtmlImage": 146,
            "../util/clearOwnProperties": 167,
            "../util/dom": 176,
            "../util/inherits": 180,
            "../util/ispot": 181,
            "../util/pixelRatio": 186,
            "./Stage": 160,
            bowser: 105
        }],
        162: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                return function(e) {
                    var n, r;
                    try {
                        r = t()
                    } catch (t) {
                        n = t
                    } finally {
                        n ? e(n) : e(null, r)
                    }
                }
            }
        }
        , {}],
        163: [function(t, e, n) {
            "use strict";
            e.exports = function(t, e, n, r) {
                var i, o, s, a;
                return r = r || {},
                i = null != n && null != n.absoluteWidth ? n.absoluteWidth / t : null != n && null != n.relativeWidth ? n.relativeWidth : 1,
                o = n && null != n.absoluteHeight ? n.absoluteHeight / e : null != n && null != n.relativeHeight ? n.relativeHeight : 1,
                s = null != n && null != n.absoluteX ? n.absoluteX / t : null != n && null != n.relativeX ? n.relativeX : 0,
                a = null != n && null != n.absoluteY ? n.absoluteY / e : null != n && null != n.relativeY ? n.relativeY : 0,
                r.x = s,
                r.y = a,
                r.width = i,
                r.height = o,
                r
            }
        }
        , {}],
        164: [function(t, e, n) {
            "use strict";
            var r = t("./once");
            e.exports = function(t) {
                return function() {
                    if (!arguments.length)
                        throw new Error("cancelized: expected at least one argument");
                    var e = Array.prototype.slice.call(arguments, 0)
                      , n = e[e.length - 1] = r(e[e.length - 1]);
                    function i() {
                        n.apply(null, arguments)
                    }
                    return t.apply(null, e),
                    i
                }
            }
        }
        , {
            "./once": 185
        }],
        165: [function(t, e, n) {
            "use strict";
            var r = t("./noop");
            e.exports = function() {
                var t = Array.prototype.slice.call(arguments, 0);
                return function() {
                    var e = t.slice(0)
                      , n = null
                      , i = null
                      , o = arguments.length ? Array.prototype.slice.call(arguments, 0, arguments.length - 1) : []
                      , s = arguments.length ? arguments[arguments.length - 1] : r;
                    function a() {
                        var t = arguments[0];
                        if (t)
                            return n = i = null,
                            void s.apply(null, arguments);
                        if (!e.length)
                            return n = i = null,
                            void s.apply(null, arguments);
                        var r = n = e.shift()
                          , o = Array.prototype.slice.call(arguments, 1);
                        o.push(a);
                        var u = n.apply(null, o);
                        if (r === n) {
                            if ("function" != typeof u)
                                throw new Error("chain: chaining on non-cancellable function");
                            i = u
                        }
                    }
                    function u() {
                        i && i.apply(null, arguments)
                    }
                    return o.unshift(null),
                    a.apply(null, o),
                    u
                }
            }
        }
        , {
            "./noop": 183
        }],
        166: [function(t, e, n) {
            "use strict";
            e.exports = function(t, e, n) {
                return Math.min(Math.max(t, e), n)
            }
        }
        , {}],
        167: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                for (var e in t)
                    t.hasOwnProperty(e) && (t[e] = void 0)
            }
        }
        , {}],
        168: [function(t, e, n) {
            "use strict";
            e.exports = function(t, e) {
                return t < e ? -1 : t > e ? 1 : 0
            }
        }
        , {}],
        169: [function(t, e, n) {
            "use strict";
            e.exports = function() {
                var t = arguments;
                return function(e) {
                    for (var n = e, r = 0; r < t.length; r++) {
                        n = t[r].call(null, n)
                    }
                    return n
                }
            }
        }
        , {}],
        170: [function(t, e, n) {
            "use strict";
            function r(t, e, n) {
                return 2 * Math.atan(n * Math.tan(t / 2) / e)
            }
            e.exports = {
                convert: r,
                htov: function(t, e, n) {
                    return r(t, e, n)
                },
                htod: function(t, e, n) {
                    return r(t, e, Math.sqrt(e * e + n * n))
                },
                vtoh: function(t, e, n) {
                    return r(t, n, e)
                },
                vtod: function(t, e, n) {
                    return r(t, n, Math.sqrt(e * e + n * n))
                },
                dtoh: function(t, e, n) {
                    return r(t, Math.sqrt(e * e + n * n), e)
                },
                dtov: function(t, e, n) {
                    return r(t, Math.sqrt(e * e + n * n), n)
                }
            }
        }
        , {}],
        171: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                return t.toPrecision(15)
            }
        }
        , {}],
        172: [function(t, e, n) {
            "use strict";
            e.exports = function(t, e) {
                for (var n in e)
                    n in t || (t[n] = e[n]);
                return t
            }
        }
        , {}],
        173: [function(t, e, n) {
            "use strict";
            e.exports = function(t, e) {
                setTimeout((function() {
                    e && e.length > 0 ? t.apply(null, e) : t()
                }
                ), 0)
            }
        }
        , {}],
        174: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                return t * Math.PI / 180
            }
        }
        , {}],
        175: [function(t, e, n) {
            "use strict";
            e.exports = function(t, e) {
                var n = null;
                return n = setTimeout((function() {
                    null != n && (n = null,
                    e(null))
                }
                ), t),
                function() {
                    null != n && (clearTimeout(n),
                    n = null,
                    e.apply(null, arguments))
                }
            }
        }
        , {}],
        176: [function(t, e, n) {
            "use strict";
            function r(t) {
                for (var e = document.documentElement.style, n = ["Moz", "Webkit", "Khtml", "O", "ms"], r = 0; r < n.length; r++) {
                    var i = n[r] + (t[0].toUpperCase() + t.slice(1));
                    if (i in e)
                        return i
                }
                return t
            }
            function i(t) {
                var e = r(t);
                return function(t, n) {
                    return t.style[e] = n
                }
            }
            var o = i("transform")
              , s = i("transformOrigin");
            e.exports = {
                prefixProperty: r,
                getWithVendorPrefix: function(t) {
                    var e = r(t);
                    return function(t) {
                        return t.style[e]
                    }
                },
                setWithVendorPrefix: i,
                setTransform: o,
                setTransformOrigin: s,
                setNullTransform: function(t) {
                    o(t, "translateZ(0)")
                },
                setNullTransformOrigin: function(t) {
                    s(t, "0 0 0")
                },
                setAbsolute: function(t) {
                    t.style.position = "absolute"
                },
                setPixelPosition: function(t, e, n) {
                    t.style.left = e + "px",
                    t.style.top = n + "px"
                },
                setPixelSize: function(t, e, n) {
                    t.style.width = e + "px",
                    t.style.height = n + "px"
                },
                setNullSize: function(t) {
                    t.style.width = t.style.height = 0
                },
                setFullSize: function(t) {
                    t.style.width = t.style.height = "100%"
                },
                setOverflowHidden: function(t) {
                    t.style.overflow = "hidden"
                },
                setOverflowVisible: function(t) {
                    t.style.overflow = "visible"
                },
                setNoPointerEvents: function(t) {
                    t.style.pointerEvents = "none"
                }
            }
        }
        , {}],
        177: [function(t, e, n) {
            "use strict";
            e.exports = function(t, e) {
                for (var n in e)
                    t[n] = e[n];
                return t
            }
        }
        , {}],
        178: [function(t, e, n) {
            (function(t) {
                (function() {
                    "use strict";
                    var n = "undefined" != typeof window ? window : "undefined" != typeof self ? self : void 0 !== t ? t : null;
                    e.exports = n
                }
                ).call(this)
            }
            ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {}],
        179: [function(t, e, n) {
            "use strict";
            e.exports = function() {
                for (var t = 0, e = 0; e < arguments.length; e++) {
                    var n = arguments[e];
                    t += n,
                    t += n << 10,
                    t ^= n >> 6
                }
                return t += t << 3,
                t ^= t >> 11,
                (t += t << 15) >= 0 ? t : -t
            }
        }
        , {}],
        180: [function(t, e, n) {
            "use strict";
            e.exports = function(t, e) {
                t.super_ = e;
                var n = function() {};
                n.prototype = e.prototype,
                t.prototype = new n,
                t.prototype.constructor = t
            }
        }
        , {}],
        181: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                return 0 == (t & t - 1)
            }
        }
        , {}],
        182: [function(t, e, n) {
            "use strict";
            e.exports = function(t, e) {
                return (+t % (e = +e) + e) % e
            }
        }
        , {}],
        183: [function(t, e, n) {
            "use strict";
            e.exports = function() {}
        }
        , {}],
        184: [function(t, e, n) {
            "use strict";
            e.exports = "undefined" != typeof performance && performance.now ? function() {
                return performance.now()
            }
            : function() {
                return Date.now()
            }
        }
        , {}],
        185: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                var e, n = !1;
                return function() {
                    return n || (n = !0,
                    e = t.apply(null, arguments)),
                    e
                }
            }
        }
        , {}],
        186: [function(t, e, n) {
            "use strict";
            e.exports = function() {
                if ("undefined" != typeof window) {
                    if (window.devicePixelRatio)
                        return window.devicePixelRatio;
                    var t = window.screen;
                    if (t && t.deviceXDPI && t.logicalXDPI)
                        return t.deviceXDPI / t.logicalXDPI;
                    if (t && t.systemXDPI && t.logicalXDPI)
                        return t.systemXDPI / t.logicalXDPI
                }
                return 1
            }
        }
        , {}],
        187: [function(t, e, n) {
            "use strict";
            var r = t("./dom").setTransform
              , i = t("./decimal");
            e.exports = function(t, e, n, o) {
                o = o || "";
                var s = "translateX(" + i(e) + "px) translateY(" + i(n) + "px) translateZ(0) " + o;
                r(t, s)
            }
        }
        , {
            "./decimal": 171,
            "./dom": 176
        }],
        188: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                return 180 * t / Math.PI
            }
        }
        , {}],
        189: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                return "number" == typeof t && isFinite(t)
            }
        }
        , {}],
        190: [function(t, e, n) {
            "use strict";
            var r = t("./noop");
            e.exports = function(t) {
                return function() {
                    var e = arguments.length ? Array.prototype.slice.call(arguments, 0, arguments.length - 1) : []
                      , n = arguments.length ? arguments[arguments.length - 1] : r
                      , i = null
                      , o = !1;
                    function s() {
                        var r = arguments[0];
                        !r || o ? n.apply(null, arguments) : i = t.apply(null, e)
                    }
                    return e.push(s),
                    s(!0),
                    function() {
                        o = !0,
                        i.apply(null, arguments)
                    }
                }
            }
        }
        , {
            "./noop": 183
        }],
        191: [function(t, e, n) {
            "use strict";
            var r = t("./now");
            e.exports = function(t, e, n) {
                var i = !1
                  , o = r();
                return e(0),
                requestAnimationFrame((function s() {
                    if (!i) {
                        var a = (r() - o) / t;
                        a < 1 ? (e(a),
                        requestAnimationFrame(s)) : (e(1),
                        n())
                    }
                }
                )),
                function() {
                    i = !0,
                    n.apply(null, arguments)
                }
            }
        }
        , {
            "./now": 184
        }],
        192: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                var e = typeof t;
                if ("object" === e) {
                    if (null === t)
                        return "null";
                    if ("[object Array]" === Object.prototype.toString.call(t))
                        return "array";
                    if ("[object RegExp]" === Object.prototype.toString.call(t))
                        return "regexp"
                }
                return e
            }
        }
        , {}],
        193: [function(t, e, n) {
            "use strict";
            var r = t("minimal-event-emitter")
              , i = t("gl-matrix").mat4
              , o = t("gl-matrix").vec4
              , s = t("../util/pixelRatio")
              , a = t("../util/real")
              , u = t("../util/clamp")
              , l = t("../util/clearOwnProperties")
              , c = [1, 0, 1, 0]
              , h = [-1, -1, 1, 1];
            function p(t, e) {
                if (!t || null == t.mediaAspectRatio)
                    throw new Error("mediaAspectRatio must be defined");
                this._x = t && null != t.x ? t.x : .5,
                this._y = t && null != t.y ? t.y : .5,
                this._zoom = t && null != t.zoom ? t.zoom : 1,
                this._mediaAspectRatio = t.mediaAspectRatio,
                this._width = t && null != t.width ? t.width : 0,
                this._height = t && null != t.height ? t.height : 0,
                this._limiter = e || null,
                this._projMatrix = i.create(),
                this._invProjMatrix = i.create(),
                this._frustum = [0, 0, 0, 0],
                this._projectionChanged = !0,
                this._params = {},
                this._vec = o.create(),
                this._update()
            }
            r(p),
            p.prototype.destroy = function() {
                l(this)
            }
            ,
            p.prototype.x = function() {
                return this._x
            }
            ,
            p.prototype.y = function() {
                return this._y
            }
            ,
            p.prototype.zoom = function() {
                return this._zoom
            }
            ,
            p.prototype.mediaAspectRatio = function() {
                return this._mediaAspectRatio
            }
            ,
            p.prototype.width = function() {
                return this._width
            }
            ,
            p.prototype.height = function() {
                return this._height
            }
            ,
            p.prototype.size = function(t) {
                return (t = t || {}).width = this._width,
                t.height = this._height,
                t
            }
            ,
            p.prototype.parameters = function(t) {
                return (t = t || {}).x = this._x,
                t.y = this._y,
                t.zoom = this._zoom,
                t.mediaAspectRatio = this._mediaAspectRatio,
                t
            }
            ,
            p.prototype.limiter = function() {
                return this._limiter
            }
            ,
            p.prototype.setX = function(t) {
                this._resetParams(),
                this._params.x = t,
                this._update(this._params)
            }
            ,
            p.prototype.setY = function(t) {
                this._resetParams(),
                this._params.y = t,
                this._update(this._params)
            }
            ,
            p.prototype.setZoom = function(t) {
                this._resetParams(),
                this._params.zoom = t,
                this._update(this._params)
            }
            ,
            p.prototype.offsetX = function(t) {
                this.setX(this._x + t)
            }
            ,
            p.prototype.offsetY = function(t) {
                this.setY(this._y + t)
            }
            ,
            p.prototype.offsetZoom = function(t) {
                this.setZoom(this._zoom + t)
            }
            ,
            p.prototype.setMediaAspectRatio = function(t) {
                this._resetParams(),
                this._params.mediaAspectRatio = t,
                this._update(this._params)
            }
            ,
            p.prototype.setSize = function(t) {
                this._resetParams(),
                this._params.width = t.width,
                this._params.height = t.height,
                this._update(this._params)
            }
            ,
            p.prototype.setParameters = function(t) {
                this._resetParams(),
                this._params.x = t.x,
                this._params.y = t.y,
                this._params.zoom = t.zoom,
                this._params.mediaAspectRatio = t.mediaAspectRatio,
                this._update(this._params)
            }
            ,
            p.prototype.setLimiter = function(t) {
                this._limiter = t || null,
                this._update()
            }
            ,
            p.prototype._resetParams = function() {
                var t = this._params;
                t.x = null,
                t.y = null,
                t.zoom = null,
                t.mediaAspectRatio = null,
                t.width = null,
                t.height = null
            }
            ,
            p.prototype._update = function(t) {
                null == t && (this._resetParams(),
                t = this._params);
                var e = this._x
                  , n = this._y
                  , r = this._zoom
                  , i = this._mediaAspectRatio
                  , o = this._width
                  , s = this._height;
                if (t.x = null != t.x ? t.x : e,
                t.y = null != t.y ? t.y : n,
                t.zoom = null != t.zoom ? t.zoom : r,
                t.mediaAspectRatio = null != t.mediaAspectRatio ? t.mediaAspectRatio : i,
                t.width = null != t.width ? t.width : o,
                t.height = null != t.height ? t.height : s,
                this._limiter && !(t = this._limiter(t)))
                    throw new Error("Bad view limiter");
                var l = t.x
                  , c = t.y
                  , h = t.zoom
                  , p = t.mediaAspectRatio
                  , f = t.width
                  , d = t.height;
                if (!(a(l) && a(c) && a(h) && a(p) && a(f) && a(d)))
                    throw new Error("Bad view - suspect a broken limiter");
                h = u(h, 1e-6, 1 / 0),
                this._x = l,
                this._y = c,
                this._zoom = h,
                this._mediaAspectRatio = p,
                this._width = f,
                this._height = d,
                l === e && c === n && h === r && p === i && f === o && d === s || (this._projectionChanged = !0,
                this.emit("change")),
                f === o && d === s || this.emit("resize")
            }
            ,
            p.prototype._zoomX = function() {
                return this._zoom
            }
            ,
            p.prototype._zoomY = function() {
                var t = this._mediaAspectRatio
                  , e = this._width / this._height
                  , n = this._zoom
                  , r = n * t / e;
                return isNaN(r) && (r = n),
                r
            }
            ,
            p.prototype.updateWithControlParameters = function(t) {
                var e = this.zoom()
                  , n = this._zoomX()
                  , r = this._zoomY();
                this.offsetX(t.axisScaledX * n + t.x * e),
                this.offsetY(t.axisScaledY * r + t.y * e),
                this.offsetZoom(t.zoom * e)
            }
            ,
            p.prototype._updateProjection = function() {
                var t = this._projMatrix
                  , e = this._invProjMatrix
                  , n = this._frustum;
                if (this._projectionChanged) {
                    var r = this._x
                      , o = this._y
                      , s = this._zoomX()
                      , a = this._zoomY()
                      , u = n[0] = .5 - o + .5 * a
                      , l = n[1] = r - .5 + .5 * s
                      , c = n[2] = .5 - o - .5 * a
                      , h = n[3] = r - .5 - .5 * s;
                    i.ortho(t, h, l, c, u, -1, 1),
                    i.invert(e, t),
                    this._projectionChanged = !1
                }
            }
            ,
            p.prototype.projection = function() {
                return this._updateProjection(),
                this._projMatrix
            }
            ,
            p.prototype.inverseProjection = function() {
                return this._updateProjection(),
                this._invProjMatrix
            }
            ,
            p.prototype.intersects = function(t) {
                this._updateProjection();
                for (var e = this._frustum, n = 0; n < e.length; n++) {
                    for (var r = e[n], i = c[n], o = h[n], s = !1, a = 0; a < t.length; a++) {
                        var u = t[a];
                        if (o < 0 && u[i] < r || o > 0 && u[i] > r) {
                            s = !0;
                            break
                        }
                    }
                    if (!s)
                        return !1
                }
                return !0
            }
            ,
            p.prototype.selectLevel = function(t) {
                for (var e = s() * this.width(), n = this._zoom, r = 0; r < t.length; r++) {
                    var i = t[r];
                    if (n * i.width() >= e)
                        return i
                }
                return t[t.length - 1]
            }
            ,
            p.prototype.coordinatesToScreen = function(t, e) {
                var n = this._vec;
                e || (e = {});
                var r = this._width
                  , i = this._height;
                if (r <= 0 || i <= 0)
                    return e.x = null,
                    e.y = null,
                    null;
                var s = t && null != t.x ? t.x : .5
                  , a = t && null != t.y ? t.y : .5;
                o.set(n, s - .5, .5 - a, -1, 1),
                o.transformMat4(n, n, this.projection());
                for (var u = 0; u < 3; u++)
                    n[u] /= n[3];
                return e.x = r * (n[0] + 1) / 2,
                e.y = i * (1 - n[1]) / 2,
                e
            }
            ,
            p.prototype.screenToCoordinates = function(t, e) {
                var n = this._vec;
                e || (e = {});
                var r = this._width
                  , i = this._height
                  , s = 2 * t.x / r - 1
                  , a = 1 - 2 * t.y / i;
                return o.set(n, s, a, 1, 1),
                o.transformMat4(n, n, this.inverseProjection()),
                e.x = .5 + n[0],
                e.y = .5 - n[1],
                e
            }
            ,
            p.limit = {
                x: function(t, e) {
                    return function(n) {
                        return n.x = u(n.x, t, e),
                        n
                    }
                },
                y: function(t, e) {
                    return function(n) {
                        return n.y = u(n.y, t, e),
                        n
                    }
                },
                zoom: function(t, e) {
                    return function(n) {
                        return n.zoom = u(n.zoom, t, e),
                        n
                    }
                },
                resolution: function(t) {
                    return function(e) {
                        if (e.width <= 0 || e.height <= 0)
                            return e;
                        var n = e.width
                          , r = s() * n / t;
                        return e.zoom = u(e.zoom, r, 1 / 0),
                        e
                    }
                },
                visibleX: function(t, e) {
                    return function(n) {
                        var r = e - t;
                        n.zoom > r && (n.zoom = r);
                        var i = t + .5 * n.zoom
                          , o = e - .5 * n.zoom;
                        return n.x = u(n.x, i, o),
                        n
                    }
                },
                visibleY: function(t, e) {
                    return function(n) {
                        if (n.width <= 0 || n.height <= 0)
                            return n;
                        var r = n.width / n.height / n.mediaAspectRatio
                          , i = (e - t) * r;
                        n.zoom > i && (n.zoom = i);
                        var o = t + .5 * n.zoom / r
                          , s = e - .5 * n.zoom / r;
                        return n.y = u(n.y, o, s),
                        n
                    }
                },
                letterbox: function() {
                    return function(t) {
                        if (t.width <= 0 || t.height <= 0)
                            return t;
                        var e, n, r, i, o = t.width / t.height, s = o / t.mediaAspectRatio;
                        return t.mediaAspectRatio >= o && (t.zoom = Math.min(t.zoom, 1)),
                        t.mediaAspectRatio <= o && (t.zoom = Math.min(t.zoom, s)),
                        t.zoom > 1 ? e = n = .5 : (e = 0 + .5 * t.zoom / 1,
                        n = 1 - .5 * t.zoom / 1),
                        t.zoom > s ? r = i = .5 : (r = 0 + .5 * t.zoom / s,
                        i = 1 - .5 * t.zoom / s),
                        t.x = u(t.x, e, n),
                        t.y = u(t.y, r, i),
                        t
                    }
                }
            },
            p.type = p.prototype.type = "flat",
            e.exports = p
        }
        , {
            "../util/clamp": 166,
            "../util/clearOwnProperties": 167,
            "../util/pixelRatio": 186,
            "../util/real": 189,
            "gl-matrix": 5,
            "minimal-event-emitter": 195
        }],
        194: [function(t, e, n) {
            "use strict";
            var r = t("minimal-event-emitter")
              , i = t("gl-matrix").mat4
              , o = t("gl-matrix").vec4
              , s = t("../util/pixelRatio")
              , a = t("../util/convertFov")
              , u = t("../util/mod")
              , l = t("../util/real")
              , c = t("../util/clamp")
              , h = t("../util/decimal")
              , p = t("../util/compose")
              , f = t("../util/clearOwnProperties")
              , d = Math.PI / 4
              , m = 1e-6;
            function v(t, e) {
                this._yaw = t && null != t.yaw ? t.yaw : 0,
                this._pitch = t && null != t.pitch ? t.pitch : 0,
                this._roll = t && null != t.roll ? t.roll : 0,
                this._fov = t && null != t.fov ? t.fov : d,
                this._width = t && null != t.width ? t.width : 0,
                this._height = t && null != t.height ? t.height : 0,
                this._projectionCenterX = t && null != t.projectionCenterX ? t.projectionCenterX : 0,
                this._projectionCenterY = t && null != t.projectionCenterY ? t.projectionCenterY : 0,
                this._limiter = e || null,
                this._projMatrix = i.create(),
                this._invProjMatrix = i.create(),
                this._frustum = [o.create(), o.create(), o.create(), o.create(), o.create()],
                this._projectionChanged = !0,
                this._params = {},
                this._fovs = {},
                this._tmpVec = o.create(),
                this._update()
            }
            r(v),
            v.prototype.destroy = function() {
                f(this)
            }
            ,
            v.prototype.yaw = function() {
                return this._yaw
            }
            ,
            v.prototype.pitch = function() {
                return this._pitch
            }
            ,
            v.prototype.roll = function() {
                return this._roll
            }
            ,
            v.prototype.projectionCenterX = function() {
                return this._projectionCenterX
            }
            ,
            v.prototype.projectionCenterY = function() {
                return this._projectionCenterY
            }
            ,
            v.prototype.fov = function() {
                return this._fov
            }
            ,
            v.prototype.width = function() {
                return this._width
            }
            ,
            v.prototype.height = function() {
                return this._height
            }
            ,
            v.prototype.size = function(t) {
                return (t = t || {}).width = this._width,
                t.height = this._height,
                t
            }
            ,
            v.prototype.parameters = function(t) {
                return (t = t || {}).yaw = this._yaw,
                t.pitch = this._pitch,
                t.roll = this._roll,
                t.fov = this._fov,
                t
            }
            ,
            v.prototype.limiter = function() {
                return this._limiter
            }
            ,
            v.prototype.setYaw = function(t) {
                this._resetParams(),
                this._params.yaw = t,
                this._update(this._params)
            }
            ,
            v.prototype.setPitch = function(t) {
                this._resetParams(),
                this._params.pitch = t,
                this._update(this._params)
            }
            ,
            v.prototype.setRoll = function(t) {
                this._resetParams(),
                this._params.roll = t,
                this._update(this._params)
            }
            ,
            v.prototype.setFov = function(t) {
                this._resetParams(),
                this._params.fov = t,
                this._update(this._params)
            }
            ,
            v.prototype.setProjectionCenterX = function(t) {
                this._resetParams(),
                this._params.projectionCenterX = t,
                this._update(this._params)
            }
            ,
            v.prototype.setProjectionCenterY = function(t) {
                this._resetParams(),
                this._params.projectionCenterY = t,
                this._update(this._params)
            }
            ,
            v.prototype.offsetYaw = function(t) {
                this.setYaw(this._yaw + t)
            }
            ,
            v.prototype.offsetPitch = function(t) {
                this.setPitch(this._pitch + t)
            }
            ,
            v.prototype.offsetRoll = function(t) {
                this.setRoll(this._roll + t)
            }
            ,
            v.prototype.offsetFov = function(t) {
                this.setFov(this._fov + t)
            }
            ,
            v.prototype.setSize = function(t) {
                this._resetParams(),
                this._params.width = t.width,
                this._params.height = t.height,
                this._update(this._params)
            }
            ,
            v.prototype.setParameters = function(t) {
                this._resetParams(),
                this._params.yaw = t.yaw,
                this._params.pitch = t.pitch,
                this._params.roll = t.roll,
                this._params.fov = t.fov,
                this._params.projectionCenterX = t.projectionCenterX,
                this._params.projectionCenterY = t.projectionCenterY,
                this._update(this._params)
            }
            ,
            v.prototype.setLimiter = function(t) {
                this._limiter = t || null,
                this._update()
            }
            ,
            v.prototype._resetParams = function() {
                var t = this._params;
                t.yaw = null,
                t.pitch = null,
                t.roll = null,
                t.fov = null,
                t.width = null,
                t.height = null
            }
            ,
            v.prototype._update = function(t) {
                null == t && (this._resetParams(),
                t = this._params);
                var e = this._yaw
                  , n = this._pitch
                  , r = this._roll
                  , i = this._fov
                  , o = this._projectionCenterX
                  , s = this._projectionCenterY
                  , a = this._width
                  , u = this._height;
                if (t.yaw = null != t.yaw ? t.yaw : e,
                t.pitch = null != t.pitch ? t.pitch : n,
                t.roll = null != t.roll ? t.roll : r,
                t.fov = null != t.fov ? t.fov : i,
                t.width = null != t.width ? t.width : a,
                t.height = null != t.height ? t.height : u,
                t.projectionCenterX = null != t.projectionCenterX ? t.projectionCenterX : o,
                t.projectionCenterY = null != t.projectionCenterY ? t.projectionCenterY : s,
                this._limiter && !(t = this._limiter(t)))
                    throw new Error("Bad view limiter");
                var c = (t = this._normalize(t)).yaw
                  , h = t.pitch
                  , p = t.roll
                  , f = t.fov
                  , d = t.width
                  , m = t.height
                  , v = t.projectionCenterX
                  , y = t.projectionCenterY;
                if (!(l(c) && l(h) && l(p) && l(f) && l(d) && l(m) && l(v) && l(y)))
                    throw new Error("Bad view - suspect a broken limiter");
                this._yaw = c,
                this._pitch = h,
                this._roll = p,
                this._fov = f,
                this._width = d,
                this._height = m,
                this._projectionCenterX = v,
                this._projectionCenterY = y,
                c === e && h === n && p === r && f === i && d === a && m === u && v === o && y === s || (this._projectionChanged = !0,
                this.emit("change")),
                d === a && m === u || this.emit("resize")
            }
            ,
            v.prototype._normalize = function(t) {
                this._normalizeCoordinates(t);
                var e = a.htov(Math.PI, t.width, t.height)
                  , n = isNaN(e) ? Math.PI : Math.min(Math.PI, e);
                return t.fov = c(t.fov, m, n - m),
                t
            }
            ,
            v.prototype._normalizeCoordinates = function(t) {
                return "yaw"in t && (t.yaw = u(t.yaw - Math.PI, -2 * Math.PI) + Math.PI),
                "pitch"in t && (t.pitch = u(t.pitch - Math.PI, -2 * Math.PI) + Math.PI),
                "roll"in t && (t.roll = u(t.roll - Math.PI, -2 * Math.PI) + Math.PI),
                t
            }
            ,
            v.prototype.normalizeToClosest = function(t, e) {
                var n = this._yaw
                  , r = this._pitch
                  , i = t.yaw
                  , o = t.pitch
                  , s = i - 2 * Math.PI
                  , a = i + 2 * Math.PI;
                Math.abs(s - n) < Math.abs(i - n) ? i = s : Math.abs(a - n) < Math.abs(i - n) && (i = a);
                var u = o - 2 * Math.PI
                  , l = o + 2 * Math.PI;
                return Math.abs(u - r) < Math.abs(o - r) ? o = u : Math.abs(u - r) < Math.abs(o - r) && (o = l),
                (e = e || {}).yaw = i,
                e.pitch = o,
                e
            }
            ,
            v.prototype.updateWithControlParameters = function(t) {
                var e = this._fov
                  , n = a.vtoh(e, this._width, this._height);
                isNaN(n) && (n = e),
                this.offsetYaw(t.axisScaledX * n + 2 * t.x * n + t.yaw),
                this.offsetPitch(t.axisScaledY * e + 2 * t.y * n + t.pitch),
                this.offsetRoll(-t.roll),
                this.offsetFov(t.zoom * e)
            }
            ,
            v.prototype._updateProjection = function() {
                var t = this._projMatrix
                  , e = this._invProjMatrix
                  , n = this._frustum;
                if (this._projectionChanged) {
                    var r = this._width
                      , o = this._height
                      , s = this._fov
                      , u = a.vtoh(s, r, o)
                      , l = r / o
                      , c = this._projectionCenterX
                      , h = this._projectionCenterY;
                    if (0 !== c || 0 !== h) {
                        var p = Math.atan(2 * c * Math.tan(u / 2))
                          , f = Math.atan(2 * h * Math.tan(s / 2))
                          , d = this._fovs;
                        d.leftDegrees = 180 * (u / 2 + p) / Math.PI,
                        d.rightDegrees = 180 * (u / 2 - p) / Math.PI,
                        d.upDegrees = 180 * (s / 2 + f) / Math.PI,
                        d.downDegrees = 180 * (s / 2 - f) / Math.PI,
                        i.perspectiveFromFieldOfView(t, d, -1, 1)
                    } else
                        i.perspective(t, s, l, -1, 1);
                    i.rotateZ(t, t, this._roll),
                    i.rotateX(t, t, this._pitch),
                    i.rotateY(t, t, this._yaw),
                    i.invert(e, t),
                    this._matrixToFrustum(t, n),
                    this._projectionChanged = !1
                }
            }
            ,
            v.prototype._matrixToFrustum = function(t, e) {
                o.set(e[0], t[3] + t[0], t[7] + t[4], t[11] + t[8], 0),
                o.set(e[1], t[3] - t[0], t[7] - t[4], t[11] - t[8], 0),
                o.set(e[2], t[3] + t[1], t[7] + t[5], t[11] + t[9], 0),
                o.set(e[3], t[3] - t[1], t[7] - t[5], t[11] - t[9], 0),
                o.set(e[4], t[3] + t[2], t[7] + t[6], t[11] + t[10], 0)
            }
            ,
            v.prototype.projection = function() {
                return this._updateProjection(),
                this._projMatrix
            }
            ,
            v.prototype.inverseProjection = function() {
                return this._updateProjection(),
                this._invProjMatrix
            }
            ,
            v.prototype.intersects = function(t) {
                this._updateProjection();
                for (var e = this._frustum, n = this._tmpVec, r = 0; r < e.length; r++) {
                    for (var i = e[r], s = !1, a = 0; a < t.length; a++) {
                        var u = t[a];
                        o.set(n, u[0], u[1], u[2], 0),
                        o.dot(i, n) >= 0 && (s = !0)
                    }
                    if (!s)
                        return !1
                }
                return !0
            }
            ,
            v.prototype.selectLevel = function(t) {
                for (var e = s() * this._height, n = Math.tan(.5 * this._fov), r = 0; r < t.length; r++) {
                    var i = t[r];
                    if (n * i.height() >= e)
                        return i
                }
                return t[t.length - 1]
            }
            ,
            v.prototype.coordinatesToScreen = function(t, e) {
                var n = this._tmpVec;
                e || (e = {});
                var r = this._width
                  , i = this._height;
                if (r <= 0 || i <= 0)
                    return e.x = null,
                    e.y = null,
                    null;
                var s = t.yaw
                  , a = t.pitch
                  , u = Math.sin(s) * Math.cos(a)
                  , l = -Math.sin(a)
                  , c = -Math.cos(s) * Math.cos(a);
                return o.set(n, u, l, c, 1),
                o.transformMat4(n, n, this.projection()),
                n[3] >= 0 ? (e.x = r * (n[0] / n[3] + 1) / 2,
                e.y = i * (1 - n[1] / n[3]) / 2,
                e) : (e.x = null,
                e.y = null,
                null)
            }
            ,
            v.prototype.screenToCoordinates = function(t, e) {
                var n = this._tmpVec;
                e || (e = {});
                var r = this._width
                  , i = this._height
                  , s = 2 * t.x / r - 1
                  , a = 1 - 2 * t.y / i;
                o.set(n, s, a, 1, 1),
                o.transformMat4(n, n, this.inverseProjection());
                var u = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
                return e.yaw = Math.atan2(n[0], -n[2]),
                e.pitch = Math.acos(n[1] / u) - Math.PI / 2,
                this._normalizeCoordinates(e),
                e
            }
            ,
            v.prototype.coordinatesToPerspectiveTransform = function(t, e, n) {
                n = n || "";
                var r = this._height
                  , i = this._width
                  , o = this._fov
                  , s = .5 * r / Math.tan(o / 2)
                  , a = "";
                return a += "translateX(" + h(i / 2) + "px) ",
                a += "translateY(" + h(r / 2) + "px) ",
                a += "translateX(-50%) translateY(-50%) ",
                a += "perspective(" + h(s) + "px) ",
                a += "translateZ(" + h(s) + "px) ",
                a += "rotateZ(" + h(-this._roll) + "rad) ",
                a += "rotateX(" + h(-this._pitch) + "rad) ",
                a += "rotateY(" + h(this._yaw) + "rad) ",
                a += "rotateY(" + h(-t.yaw) + "rad) ",
                a += "rotateX(" + h(t.pitch) + "rad) ",
                a += "translateZ(" + h(-e) + "px) ",
                a += n + " "
            }
            ,
            v.limit = {
                yaw: function(t, e) {
                    return function(n) {
                        return n.yaw = c(n.yaw, t, e),
                        n
                    }
                },
                pitch: function(t, e) {
                    return function(n) {
                        return n.pitch = c(n.pitch, t, e),
                        n
                    }
                },
                roll: function(t, e) {
                    return function(n) {
                        return n.roll = c(n.roll, t, e),
                        n
                    }
                },
                hfov: function(t, e) {
                    return function(n) {
                        var r = n.width
                          , i = n.height;
                        if (r > 0 && i > 0) {
                            var o = a.htov(t, r, i)
                              , s = a.htov(e, r, i);
                            n.fov = c(n.fov, o, s)
                        }
                        return n
                    }
                },
                vfov: function(t, e) {
                    return function(n) {
                        return n.fov = c(n.fov, t, e),
                        n
                    }
                },
                resolution: function(t) {
                    return function(e) {
                        var n = e.height;
                        if (n) {
                            var r = s() * n
                              , i = 2 * Math.atan(r / t);
                            e.fov = c(e.fov, i, 1 / 0)
                        }
                        return e
                    }
                },
                traditional: function(t, e, n) {
                    return n = null != n ? n : e,
                    p(v.limit.resolution(t), v.limit.vfov(0, e), v.limit.hfov(0, n), v.limit.pitch(-Math.PI / 2, Math.PI / 2))
                }
            },
            v.type = v.prototype.type = "rectilinear",
            e.exports = v
        }
        , {
            "../util/clamp": 166,
            "../util/clearOwnProperties": 167,
            "../util/compose": 169,
            "../util/convertFov": 170,
            "../util/decimal": 171,
            "../util/mod": 182,
            "../util/pixelRatio": 186,
            "../util/real": 189,
            "gl-matrix": 5,
            "minimal-event-emitter": 195
        }],
        195: [function(t, e, n) {
            "use strict";
            function r() {}
            r.prototype.addEventListener = function(t, e) {
                var n = this.__events = this.__events || {}
                  , r = n[t] = n[t] || [];
                r.indexOf(e) < 0 && r.push(e)
            }
            ,
            r.prototype.removeEventListener = function(t, e) {
                var n = (this.__events = this.__events || {})[t];
                if (n) {
                    var r = n.indexOf(e);
                    r >= 0 && n.splice(r, 1)
                }
            }
            ,
            r.prototype.emit = function(t, e) {
                var n = this.__events = this.__events || {}
                  , r = n[t]
                  , i = Array.prototype.slice.call(arguments, 1);
                if (r)
                    for (var o = 0; o < r.length; o++) {
                        var s = r[o];
                        s.apply(this, i)
                    }
            }
            ,
            e.exports = function(t) {
                for (var e in r.prototype)
                    r.prototype.hasOwnProperty(e) && (t.prototype[e] = r.prototype[e])
            }
        }
        , {}],
        196: [function(t, e, n) {
            var r, i, o = e.exports = {};
            function s() {
                throw new Error("setTimeout has not been defined")
            }
            function a() {
                throw new Error("clearTimeout has not been defined")
            }
            function u(t) {
                if (r === setTimeout)
                    return setTimeout(t, 0);
                if ((r === s || !r) && setTimeout)
                    return r = setTimeout,
                    setTimeout(t, 0);
                try {
                    return r(t, 0)
                } catch (e) {
                    try {
                        return r.call(null, t, 0)
                    } catch (e) {
                        return r.call(this, t, 0)
                    }
                }
            }
            !function() {
                try {
                    r = "function" == typeof setTimeout ? setTimeout : s
                } catch (t) {
                    r = s
                }
                try {
                    i = "function" == typeof clearTimeout ? clearTimeout : a
                } catch (t) {
                    i = a
                }
            }();
            var l, c = [], h = !1, p = -1;
            function f() {
                h && l && (h = !1,
                l.length ? c = l.concat(c) : p = -1,
                c.length && d())
            }
            function d() {
                if (!h) {
                    var t = u(f);
                    h = !0;
                    for (var e = c.length; e; ) {
                        for (l = c,
                        c = []; ++p < e; )
                            l && l[p].run();
                        p = -1,
                        e = c.length
                    }
                    l = null,
                    h = !1,
                    function(t) {
                        if (i === clearTimeout)
                            return clearTimeout(t);
                        if ((i === a || !i) && clearTimeout)
                            return i = clearTimeout,
                            clearTimeout(t);
                        try {
                            i(t)
                        } catch (e) {
                            try {
                                return i.call(null, t)
                            } catch (e) {
                                return i.call(this, t)
                            }
                        }
                    }(t)
                }
            }
            function m(t, e) {
                this.fun = t,
                this.array = e
            }
            function v() {}
            o.nextTick = function(t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++)
                        e[n - 1] = arguments[n];
                c.push(new m(t,e)),
                1 !== c.length || h || u(d)
            }
            ,
            m.prototype.run = function() {
                this.fun.apply(null, this.array)
            }
            ,
            o.title = "browser",
            o.browser = !0,
            o.env = {},
            o.argv = [],
            o.version = "",
            o.versions = {},
            o.on = v,
            o.addListener = v,
            o.once = v,
            o.off = v,
            o.removeListener = v,
            o.removeAllListeners = v,
            o.emit = v,
            o.prependListener = v,
            o.prependOnceListener = v,
            o.listeners = function(t) {
                return []
            }
            ,
            o.binding = function(t) {
                throw new Error("process.binding is not supported")
            }
            ,
            o.cwd = function() {
                return "/"
            }
            ,
            o.chdir = function(t) {
                throw new Error("process.chdir is not supported")
            }
            ,
            o.umask = function() {
                return 0
            }
        }
        , {}],
        197: [function(t, e, n) {
            (function(t, e) {
                (function() {
                    !function(e, n) {
                        "use strict";
                        if (!e.setImmediate) {
                            var r, i, o, s, a, u = 1, l = {}, c = !1, h = e.document, p = Object.getPrototypeOf && Object.getPrototypeOf(e);
                            p = p && p.setTimeout ? p : e,
                            "[object process]" === {}.toString.call(e.process) ? r = function() {
                                var e = f(arguments);
                                return t.nextTick(d(m, e)),
                                e
                            }
                            : !function() {
                                if (e.postMessage && !e.importScripts) {
                                    var t = !0
                                      , n = e.onmessage;
                                    return e.onmessage = function() {
                                        t = !1
                                    }
                                    ,
                                    e.postMessage("", "*"),
                                    e.onmessage = n,
                                    t
                                }
                            }() ? e.MessageChannel ? ((o = new MessageChannel).port1.onmessage = function(t) {
                                m(t.data)
                            }
                            ,
                            r = function() {
                                var t = f(arguments);
                                return o.port2.postMessage(t),
                                t
                            }
                            ) : h && "onreadystatechange"in h.createElement("script") ? (i = h.documentElement,
                            r = function() {
                                var t = f(arguments)
                                  , e = h.createElement("script");
                                return e.onreadystatechange = function() {
                                    m(t),
                                    e.onreadystatechange = null,
                                    i.removeChild(e),
                                    e = null
                                }
                                ,
                                i.appendChild(e),
                                t
                            }
                            ) : r = function() {
                                var t = f(arguments);
                                return setTimeout(d(m, t), 0),
                                t
                            }
                            : (s = "setImmediate$" + Math.random() + "$",
                            a = function(t) {
                                t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(s) && m(+t.data.slice(s.length))
                            }
                            ,
                            e.addEventListener ? e.addEventListener("message", a, !1) : e.attachEvent("onmessage", a),
                            r = function() {
                                var t = f(arguments);
                                return e.postMessage(s + t, "*"),
                                t
                            }
                            ),
                            p.setImmediate = r,
                            p.clearImmediate = v
                        }
                        function f(t) {
                            return l[u] = d.apply(n, t),
                            u++
                        }
                        function d(t) {
                            var e = [].slice.call(arguments, 1);
                            return function() {
                                "function" == typeof t ? t.apply(n, e) : new Function("" + t)()
                            }
                        }
                        function m(t) {
                            if (c)
                                setTimeout(d(m, t), 0);
                            else {
                                var e = l[t];
                                if (e) {
                                    c = !0;
                                    try {
                                        e()
                                    } finally {
                                        v(t),
                                        c = !1
                                    }
                                }
                            }
                        }
                        function v(t) {
                            delete l[t]
                        }
                    }(new Function("return this")())
                }
                ).call(this)
            }
            ).call(this, t("_process"), t("timers").clearImmediate)
        }
        , {
            _process: 196,
            timers: 199
        }],
        198: [function(t, e, n) {
            /**!
 * Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @license MIT
 */
            !function(t) {
                "use strict";
                void 0 !== e && void 0 !== e.exports ? e.exports = t() : window.Sortable = t()
            }((function() {
                "use strict";
                if ("undefined" == typeof window || !window.document)
                    return function() {
                        throw new Error("Sortable.js requires a window with a document")
                    }
                    ;
                var t, e, n, r, i, o, s, a, u, l, c, h, p, f, d, m, v, y, g, _, b, w = {}, x = /\s+/g, E = /left|right|inline/, M = "Sortable" + (new Date).getTime(), S = window, T = S.document, C = S.parseInt, O = S.setTimeout, P = S.jQuery || S.Zepto, L = S.Polymer, A = !1, k = "draggable"in T.createElement("div"), D = !navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i) && ((b = T.createElement("x")).style.cssText = "pointer-events:auto",
                "auto" === b.style.pointerEvents), R = !1, I = Math.abs, N = Math.min, j = [], z = [], H = rt((function(t, e, n) {
                    if (n && e.scroll) {
                        var r, i, o, s, c, h, p = n[M], f = e.scrollSensitivity, d = e.scrollSpeed, m = t.clientX, v = t.clientY, y = window.innerWidth, g = window.innerHeight;
                        if (u !== n && (a = e.scroll,
                        u = n,
                        l = e.scrollFn,
                        !0 === a)) {
                            a = n;
                            do {
                                if (a.offsetWidth < a.scrollWidth || a.offsetHeight < a.scrollHeight)
                                    break
                            } while (a = a.parentNode)
                        }
                        a && (r = a,
                        i = a.getBoundingClientRect(),
                        o = (I(i.right - m) <= f) - (I(i.left - m) <= f),
                        s = (I(i.bottom - v) <= f) - (I(i.top - v) <= f)),
                        o || s || (s = (g - v <= f) - (v <= f),
                        ((o = (y - m <= f) - (m <= f)) || s) && (r = S)),
                        w.vx === o && w.vy === s && w.el === r || (w.el = r,
                        w.vx = o,
                        w.vy = s,
                        clearInterval(w.pid),
                        r && (w.pid = setInterval((function() {
                            if (h = s ? s * d : 0,
                            c = o ? o * d : 0,
                            "function" == typeof l)
                                return l.call(p, c, h, t);
                            r === S ? S.scrollTo(S.pageXOffset + c, S.pageYOffset + h) : (r.scrollTop += h,
                            r.scrollLeft += c)
                        }
                        ), 24)))
                    }
                }
                ), 30), F = function(t) {
                    function e(t, e) {
                        return void 0 !== t && !0 !== t || (t = n.name),
                        "function" == typeof t ? t : function(n, r) {
                            var i = r.options.group.name;
                            return e ? t : t && (t.join ? t.indexOf(i) > -1 : i == t)
                        }
                    }
                    var n = {}
                      , r = t.group;
                    r && "object" == typeof r || (r = {
                        name: r
                    }),
                    n.name = r.name,
                    n.checkPull = e(r.pull, !0),
                    n.checkPut = e(r.put),
                    n.revertClone = r.revertClone,
                    t.group = n
                };
                try {
                    window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                        get: function() {
                            A = {
                                capture: !1,
                                passive: !1
                            }
                        }
                    }))
                } catch (t) {}
                function B(t, e) {
                    if (!t || !t.nodeType || 1 !== t.nodeType)
                        throw "Sortable: `el` must be HTMLElement, and not " + {}.toString.call(t);
                    this.el = t,
                    this.options = e = it({}, e),
                    t[M] = this;
                    var n = {
                        group: Math.random(),
                        sort: !0,
                        disabled: !1,
                        store: null,
                        handle: null,
                        scroll: !0,
                        scrollSensitivity: 30,
                        scrollSpeed: 10,
                        draggable: /[uo]l/i.test(t.nodeName) ? "li" : ">*",
                        ghostClass: "sortable-ghost",
                        chosenClass: "sortable-chosen",
                        dragClass: "sortable-drag",
                        ignore: "a, img",
                        filter: null,
                        preventOnFilter: !0,
                        animation: 0,
                        setData: function(t, e) {
                            t.setData("Text", e.textContent)
                        },
                        dropBubble: !1,
                        dragoverBubble: !1,
                        dataIdAttr: "data-id",
                        delay: 0,
                        forceFallback: !1,
                        fallbackClass: "sortable-fallback",
                        fallbackOnBody: !1,
                        fallbackTolerance: 0,
                        fallbackOffset: {
                            x: 0,
                            y: 0
                        },
                        supportPointer: !1 !== B.supportPointer
                    };
                    for (var r in n)
                        !(r in e) && (e[r] = n[r]);
                    for (var i in F(e),
                    this)
                        "_" === i.charAt(0) && "function" == typeof this[i] && (this[i] = this[i].bind(this));
                    this.nativeDraggable = !e.forceFallback && k,
                    Y(t, "mousedown", this._onTapStart),
                    Y(t, "touchstart", this._onTapStart),
                    e.supportPointer && Y(t, "pointerdown", this._onTapStart),
                    this.nativeDraggable && (Y(t, "dragover", this),
                    Y(t, "dragenter", this)),
                    z.push(this._onDragOver),
                    e.store && this.sort(e.store.get(this))
                }
                function V(e, n) {
                    "clone" !== e.lastPullMode && (n = !0),
                    r && r.state !== n && (G(r, "display", n ? "none" : ""),
                    n || r.state && (e.options.group.revertClone ? (i.insertBefore(r, o),
                    e._animate(t, r)) : i.insertBefore(r, t)),
                    r.state = n)
                }
                function q(t, e, n) {
                    if (t) {
                        n = n || T;
                        do {
                            if (">*" === e && t.parentNode === n || nt(t, e))
                                return t
                        } while (t = W(t))
                    }
                    return null
                }
                function W(t) {
                    var e = t.host;
                    return e && e.nodeType ? e : t.parentNode
                }
                function Y(t, e, n) {
                    t.addEventListener(e, n, A)
                }
                function X(t, e, n) {
                    t.removeEventListener(e, n, A)
                }
                function U(t, e, n) {
                    if (t)
                        if (t.classList)
                            t.classList[n ? "add" : "remove"](e);
                        else {
                            var r = (" " + t.className + " ").replace(x, " ").replace(" " + e + " ", " ");
                            t.className = (r + (n ? " " + e : "")).replace(x, " ")
                        }
                }
                function G(t, e, n) {
                    var r = t && t.style;
                    if (r) {
                        if (void 0 === n)
                            return T.defaultView && T.defaultView.getComputedStyle ? n = T.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle),
                            void 0 === e ? n : n[e];
                        e in r || (e = "-webkit-" + e),
                        r[e] = n + ("string" == typeof n ? "" : "px")
                    }
                }
                function K(t, e, n) {
                    if (t) {
                        var r = t.getElementsByTagName(e)
                          , i = 0
                          , o = r.length;
                        if (n)
                            for (; i < o; i++)
                                n(r[i], i);
                        return r
                    }
                    return []
                }
                function $(t, e, n, i, o, s, a, u) {
                    t = t || e[M];
                    var l = T.createEvent("Event")
                      , c = t.options
                      , h = "on" + n.charAt(0).toUpperCase() + n.substr(1);
                    l.initEvent(n, !0, !0),
                    l.to = o || e,
                    l.from = s || e,
                    l.item = i || e,
                    l.clone = r,
                    l.oldIndex = a,
                    l.newIndex = u,
                    e.dispatchEvent(l),
                    c[h] && c[h].call(t, l)
                }
                function Z(t, e, n, r, i, o, s, a) {
                    var u, l, c = t[M], h = c.options.onMove;
                    return (u = T.createEvent("Event")).initEvent("move", !0, !0),
                    u.to = e,
                    u.from = t,
                    u.dragged = n,
                    u.draggedRect = r,
                    u.related = i || e,
                    u.relatedRect = o || e.getBoundingClientRect(),
                    u.willInsertAfter = a,
                    t.dispatchEvent(u),
                    h && (l = h.call(c, u, s)),
                    l
                }
                function J(t) {
                    t.draggable = !1
                }
                function Q() {
                    R = !1
                }
                function tt(t) {
                    for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, r = 0; n--; )
                        r += e.charCodeAt(n);
                    return r.toString(36)
                }
                function et(t, e) {
                    var n = 0;
                    if (!t || !t.parentNode)
                        return -1;
                    for (; t && (t = t.previousElementSibling); )
                        "TEMPLATE" === t.nodeName.toUpperCase() || ">*" !== e && !nt(t, e) || n++;
                    return n
                }
                function nt(t, e) {
                    if (t) {
                        var n = (e = e.split(".")).shift().toUpperCase()
                          , r = new RegExp("\\s(" + e.join("|") + ")(?=\\s)","g");
                        return !("" !== n && t.nodeName.toUpperCase() != n || e.length && ((" " + t.className + " ").match(r) || []).length != e.length)
                    }
                    return !1
                }
                function rt(t, e) {
                    var n, r;
                    return function() {
                        void 0 === n && (n = arguments,
                        r = this,
                        O((function() {
                            1 === n.length ? t.call(r, n[0]) : t.apply(r, n),
                            n = void 0
                        }
                        ), e))
                    }
                }
                function it(t, e) {
                    if (t && e)
                        for (var n in e)
                            e.hasOwnProperty(n) && (t[n] = e[n]);
                    return t
                }
                function ot(t) {
                    return L && L.dom ? L.dom(t).cloneNode(!0) : P ? P(t).clone(!0)[0] : t.cloneNode(!0)
                }
                function st(t) {
                    return O(t, 0)
                }
                function at(t) {
                    return clearTimeout(t)
                }
                return B.prototype = {
                    constructor: B,
                    _onTapStart: function(e) {
                        var n, r = this, i = this.el, o = this.options, a = o.preventOnFilter, u = e.type, l = e.touches && e.touches[0], c = (l || e).target, h = e.target.shadowRoot && e.path && e.path[0] || c, p = o.filter;
                        if (function(t) {
                            var e = t.getElementsByTagName("input")
                              , n = e.length;
                            for (; n--; ) {
                                var r = e[n];
                                r.checked && j.push(r)
                            }
                        }(i),
                        !t && !(/mousedown|pointerdown/.test(u) && 0 !== e.button || o.disabled) && !h.isContentEditable && (c = q(c, o.draggable, i)) && s !== c) {
                            if (n = et(c, o.draggable),
                            "function" == typeof p) {
                                if (p.call(this, e, c, this))
                                    return $(r, h, "filter", c, i, i, n),
                                    void (a && e.preventDefault())
                            } else if (p && (p = p.split(",").some((function(t) {
                                if (t = q(h, t.trim(), i))
                                    return $(r, t, "filter", c, i, i, n),
                                    !0
                            }
                            ))))
                                return void (a && e.preventDefault());
                            o.handle && !q(h, o.handle, i) || this._prepareDragStart(e, l, c, n)
                        }
                    },
                    _prepareDragStart: function(n, r, a, u) {
                        var l, c = this, h = c.el, p = c.options, d = h.ownerDocument;
                        a && !t && a.parentNode === h && (y = n,
                        i = h,
                        e = (t = a).parentNode,
                        o = t.nextSibling,
                        s = a,
                        m = p.group,
                        f = u,
                        this._lastX = (r || n).clientX,
                        this._lastY = (r || n).clientY,
                        t.style["will-change"] = "all",
                        l = function() {
                            c._disableDelayedDrag(),
                            t.draggable = c.nativeDraggable,
                            U(t, p.chosenClass, !0),
                            c._triggerDragStart(n, r),
                            $(c, i, "choose", t, i, i, f)
                        }
                        ,
                        p.ignore.split(",").forEach((function(e) {
                            K(t, e.trim(), J)
                        }
                        )),
                        Y(d, "mouseup", c._onDrop),
                        Y(d, "touchend", c._onDrop),
                        Y(d, "touchcancel", c._onDrop),
                        Y(d, "selectstart", c),
                        p.supportPointer && Y(d, "pointercancel", c._onDrop),
                        p.delay ? (Y(d, "mouseup", c._disableDelayedDrag),
                        Y(d, "touchend", c._disableDelayedDrag),
                        Y(d, "touchcancel", c._disableDelayedDrag),
                        Y(d, "mousemove", c._disableDelayedDrag),
                        Y(d, "touchmove", c._disableDelayedDrag),
                        p.supportPointer && Y(d, "pointermove", c._disableDelayedDrag),
                        c._dragStartTimer = O(l, p.delay)) : l())
                    },
                    _disableDelayedDrag: function() {
                        var t = this.el.ownerDocument;
                        clearTimeout(this._dragStartTimer),
                        X(t, "mouseup", this._disableDelayedDrag),
                        X(t, "touchend", this._disableDelayedDrag),
                        X(t, "touchcancel", this._disableDelayedDrag),
                        X(t, "mousemove", this._disableDelayedDrag),
                        X(t, "touchmove", this._disableDelayedDrag),
                        X(t, "pointermove", this._disableDelayedDrag)
                    },
                    _triggerDragStart: function(e, n) {
                        (n = n || ("touch" == e.pointerType ? e : null)) ? (y = {
                            target: t,
                            clientX: n.clientX,
                            clientY: n.clientY
                        },
                        this._onDragStart(y, "touch")) : this.nativeDraggable ? (Y(t, "dragend", this),
                        Y(i, "dragstart", this._onDragStart)) : this._onDragStart(y, !0);
                        try {
                            T.selection ? st((function() {
                                T.selection.empty()
                            }
                            )) : window.getSelection().removeAllRanges()
                        } catch (t) {}
                    },
                    _dragStarted: function() {
                        if (i && t) {
                            var e = this.options;
                            U(t, e.ghostClass, !0),
                            U(t, e.dragClass, !1),
                            B.active = this,
                            $(this, i, "start", t, i, i, f)
                        } else
                            this._nulling()
                    },
                    _emulateDragOver: function() {
                        if (g) {
                            if (this._lastX === g.clientX && this._lastY === g.clientY)
                                return;
                            this._lastX = g.clientX,
                            this._lastY = g.clientY,
                            D || G(n, "display", "none");
                            var t = T.elementFromPoint(g.clientX, g.clientY)
                              , e = t
                              , r = z.length;
                            if (t && t.shadowRoot && (e = t = t.shadowRoot.elementFromPoint(g.clientX, g.clientY)),
                            e)
                                do {
                                    if (e[M]) {
                                        for (; r--; )
                                            z[r]({
                                                clientX: g.clientX,
                                                clientY: g.clientY,
                                                target: t,
                                                rootEl: e
                                            });
                                        break
                                    }
                                    t = e
                                } while (e = e.parentNode);
                            D || G(n, "display", "")
                        }
                    },
                    _onTouchMove: function(t) {
                        if (y) {
                            var e = this.options
                              , r = e.fallbackTolerance
                              , i = e.fallbackOffset
                              , o = t.touches ? t.touches[0] : t
                              , s = o.clientX - y.clientX + i.x
                              , a = o.clientY - y.clientY + i.y
                              , u = t.touches ? "translate3d(" + s + "px," + a + "px,0)" : "translate(" + s + "px," + a + "px)";
                            if (!B.active) {
                                if (r && N(I(o.clientX - this._lastX), I(o.clientY - this._lastY)) < r)
                                    return;
                                this._dragStarted()
                            }
                            this._appendGhost(),
                            _ = !0,
                            g = o,
                            G(n, "webkitTransform", u),
                            G(n, "mozTransform", u),
                            G(n, "msTransform", u),
                            G(n, "transform", u),
                            t.preventDefault()
                        }
                    },
                    _appendGhost: function() {
                        if (!n) {
                            var e, r = t.getBoundingClientRect(), o = G(t), s = this.options;
                            U(n = t.cloneNode(!0), s.ghostClass, !1),
                            U(n, s.fallbackClass, !0),
                            U(n, s.dragClass, !0),
                            G(n, "top", r.top - C(o.marginTop, 10)),
                            G(n, "left", r.left - C(o.marginLeft, 10)),
                            G(n, "width", r.width),
                            G(n, "height", r.height),
                            G(n, "opacity", "0.8"),
                            G(n, "position", "fixed"),
                            G(n, "zIndex", "100000"),
                            G(n, "pointerEvents", "none"),
                            s.fallbackOnBody && T.body.appendChild(n) || i.appendChild(n),
                            e = n.getBoundingClientRect(),
                            G(n, "width", 2 * r.width - e.width),
                            G(n, "height", 2 * r.height - e.height)
                        }
                    },
                    _onDragStart: function(e, n) {
                        var o = this
                          , s = e.dataTransfer
                          , a = o.options;
                        o._offUpEvents(),
                        m.checkPull(o, o, t, e) && ((r = ot(t)).draggable = !1,
                        r.style["will-change"] = "",
                        G(r, "display", "none"),
                        U(r, o.options.chosenClass, !1),
                        o._cloneId = st((function() {
                            i.insertBefore(r, t),
                            $(o, i, "clone", t)
                        }
                        ))),
                        U(t, a.dragClass, !0),
                        n ? ("touch" === n ? (Y(T, "touchmove", o._onTouchMove),
                        Y(T, "touchend", o._onDrop),
                        Y(T, "touchcancel", o._onDrop),
                        a.supportPointer && (Y(T, "pointermove", o._onTouchMove),
                        Y(T, "pointerup", o._onDrop))) : (Y(T, "mousemove", o._onTouchMove),
                        Y(T, "mouseup", o._onDrop)),
                        o._loopId = setInterval(o._emulateDragOver, 50)) : (s && (s.effectAllowed = "move",
                        a.setData && a.setData.call(o, s, t)),
                        Y(T, "drop", o),
                        o._dragStartId = st(o._dragStarted))
                    },
                    _onDragOver: function(s) {
                        var a, u, l, f, d = this.el, y = this.options, g = y.group, b = B.active, w = m === g, x = !1, S = y.sort;
                        if (void 0 !== s.preventDefault && (s.preventDefault(),
                        !y.dragoverBubble && s.stopPropagation()),
                        !t.animated && (_ = !0,
                        b && !y.disabled && (w ? S || (f = !i.contains(t)) : v === this || (b.lastPullMode = m.checkPull(this, b, t, s)) && g.checkPut(this, b, t, s)) && (void 0 === s.rootEl || s.rootEl === this.el))) {
                            if (H(s, y, this.el),
                            R)
                                return;
                            if (a = q(s.target, y.draggable, d),
                            u = t.getBoundingClientRect(),
                            v !== this && (v = this,
                            x = !0),
                            f)
                                return V(b, !0),
                                e = i,
                                void (r || o ? i.insertBefore(t, r || o) : S || i.appendChild(t));
                            if (0 === d.children.length || d.children[0] === n || d === s.target && function(t, e) {
                                var n = t.lastElementChild.getBoundingClientRect();
                                return e.clientY - (n.top + n.height) > 5 || e.clientX - (n.left + n.width) > 5
                            }(d, s)) {
                                if (0 !== d.children.length && d.children[0] !== n && d === s.target && (a = d.lastElementChild),
                                a) {
                                    if (a.animated)
                                        return;
                                    l = a.getBoundingClientRect()
                                }
                                V(b, w),
                                !1 !== Z(i, d, t, u, a, l, s) && (t.contains(d) || (d.appendChild(t),
                                e = d),
                                this._animate(u, t),
                                a && this._animate(l, a))
                            } else if (a && !a.animated && a !== t && void 0 !== a.parentNode[M]) {
                                c !== a && (c = a,
                                h = G(a),
                                p = G(a.parentNode));
                                var T = (l = a.getBoundingClientRect()).right - l.left
                                  , C = l.bottom - l.top
                                  , P = E.test(h.cssFloat + h.display) || "flex" == p.display && 0 === p["flex-direction"].indexOf("row")
                                  , L = a.offsetWidth > t.offsetWidth
                                  , A = a.offsetHeight > t.offsetHeight
                                  , k = (P ? (s.clientX - l.left) / T : (s.clientY - l.top) / C) > .5
                                  , D = a.nextElementSibling
                                  , I = !1;
                                if (P) {
                                    var N = t.offsetTop
                                      , j = a.offsetTop;
                                    I = N === j ? a.previousElementSibling === t && !L || k && L : a.previousElementSibling === t || t.previousElementSibling === a ? (s.clientY - l.top) / C > .5 : j > N
                                } else
                                    x || (I = D !== t && !A || k && A);
                                var z = Z(i, d, t, u, a, l, s, I);
                                !1 !== z && (1 !== z && -1 !== z || (I = 1 === z),
                                R = !0,
                                O(Q, 30),
                                V(b, w),
                                t.contains(d) || (I && !D ? d.appendChild(t) : a.parentNode.insertBefore(t, I ? D : a)),
                                e = t.parentNode,
                                this._animate(u, t),
                                this._animate(l, a))
                            }
                        }
                    },
                    _animate: function(t, e) {
                        var n = this.options.animation;
                        if (n) {
                            var r = e.getBoundingClientRect();
                            1 === t.nodeType && (t = t.getBoundingClientRect()),
                            G(e, "transition", "none"),
                            G(e, "transform", "translate3d(" + (t.left - r.left) + "px," + (t.top - r.top) + "px,0)"),
                            e.offsetWidth,
                            G(e, "transition", "all " + n + "ms"),
                            G(e, "transform", "translate3d(0,0,0)"),
                            clearTimeout(e.animated),
                            e.animated = O((function() {
                                G(e, "transition", ""),
                                G(e, "transform", ""),
                                e.animated = !1
                            }
                            ), n)
                        }
                    },
                    _offUpEvents: function() {
                        var t = this.el.ownerDocument;
                        X(T, "touchmove", this._onTouchMove),
                        X(T, "pointermove", this._onTouchMove),
                        X(t, "mouseup", this._onDrop),
                        X(t, "touchend", this._onDrop),
                        X(t, "pointerup", this._onDrop),
                        X(t, "touchcancel", this._onDrop),
                        X(t, "pointercancel", this._onDrop),
                        X(t, "selectstart", this)
                    },
                    _onDrop: function(s) {
                        var a = this.el
                          , u = this.options;
                        clearInterval(this._loopId),
                        clearInterval(w.pid),
                        clearTimeout(this._dragStartTimer),
                        at(this._cloneId),
                        at(this._dragStartId),
                        X(T, "mouseover", this),
                        X(T, "mousemove", this._onTouchMove),
                        this.nativeDraggable && (X(T, "drop", this),
                        X(a, "dragstart", this._onDragStart)),
                        this._offUpEvents(),
                        s && (_ && (s.preventDefault(),
                        !u.dropBubble && s.stopPropagation()),
                        n && n.parentNode && n.parentNode.removeChild(n),
                        i !== e && "clone" === B.active.lastPullMode || r && r.parentNode && r.parentNode.removeChild(r),
                        t && (this.nativeDraggable && X(t, "dragend", this),
                        J(t),
                        t.style["will-change"] = "",
                        U(t, this.options.ghostClass, !1),
                        U(t, this.options.chosenClass, !1),
                        $(this, i, "unchoose", t, e, i, f),
                        i !== e ? (d = et(t, u.draggable)) >= 0 && ($(null, e, "add", t, e, i, f, d),
                        $(this, i, "remove", t, e, i, f, d),
                        $(null, e, "sort", t, e, i, f, d),
                        $(this, i, "sort", t, e, i, f, d)) : t.nextSibling !== o && (d = et(t, u.draggable)) >= 0 && ($(this, i, "update", t, e, i, f, d),
                        $(this, i, "sort", t, e, i, f, d)),
                        B.active && (null != d && -1 !== d || (d = f),
                        $(this, i, "end", t, e, i, f, d),
                        this.save()))),
                        this._nulling()
                    },
                    _nulling: function() {
                        i = t = e = n = o = r = s = a = u = y = g = _ = d = c = h = v = m = B.active = null,
                        j.forEach((function(t) {
                            t.checked = !0
                        }
                        )),
                        j.length = 0
                    },
                    handleEvent: function(e) {
                        switch (e.type) {
                        case "drop":
                        case "dragend":
                            this._onDrop(e);
                            break;
                        case "dragover":
                        case "dragenter":
                            t && (this._onDragOver(e),
                            function(t) {
                                t.dataTransfer && (t.dataTransfer.dropEffect = "move");
                                t.preventDefault()
                            }(e));
                            break;
                        case "mouseover":
                            this._onDrop(e);
                            break;
                        case "selectstart":
                            e.preventDefault()
                        }
                    },
                    toArray: function() {
                        for (var t, e = [], n = this.el.children, r = 0, i = n.length, o = this.options; r < i; r++)
                            q(t = n[r], o.draggable, this.el) && e.push(t.getAttribute(o.dataIdAttr) || tt(t));
                        return e
                    },
                    sort: function(t) {
                        var e = {}
                          , n = this.el;
                        this.toArray().forEach((function(t, r) {
                            var i = n.children[r];
                            q(i, this.options.draggable, n) && (e[t] = i)
                        }
                        ), this),
                        t.forEach((function(t) {
                            e[t] && (n.removeChild(e[t]),
                            n.appendChild(e[t]))
                        }
                        ))
                    },
                    save: function() {
                        var t = this.options.store;
                        t && t.set(this)
                    },
                    closest: function(t, e) {
                        return q(t, e || this.options.draggable, this.el)
                    },
                    option: function(t, e) {
                        var n = this.options;
                        if (void 0 === e)
                            return n[t];
                        n[t] = e,
                        "group" === t && F(n)
                    },
                    destroy: function() {
                        var t = this.el;
                        t[M] = null,
                        X(t, "mousedown", this._onTapStart),
                        X(t, "touchstart", this._onTapStart),
                        X(t, "pointerdown", this._onTapStart),
                        this.nativeDraggable && (X(t, "dragover", this),
                        X(t, "dragenter", this)),
                        Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), (function(t) {
                            t.removeAttribute("draggable")
                        }
                        )),
                        z.splice(z.indexOf(this._onDragOver), 1),
                        this._onDrop(),
                        this.el = t = null
                    }
                },
                Y(T, "touchmove", (function(t) {
                    B.active && t.preventDefault()
                }
                )),
                B.utils = {
                    on: Y,
                    off: X,
                    css: G,
                    find: K,
                    is: function(t, e) {
                        return !!q(t, e, t)
                    },
                    extend: it,
                    throttle: rt,
                    closest: q,
                    toggleClass: U,
                    clone: ot,
                    index: et,
                    nextTick: st,
                    cancelNextTick: at
                },
                B.create = function(t, e) {
                    return new B(t,e)
                }
                ,
                B.version = "1.7.0",
                B
            }
            ))
        }
        , {}],
        199: [function(t, e, n) {
            (function(e, r) {
                (function() {
                    var i = t("process/browser.js").nextTick
                      , o = Function.prototype.apply
                      , s = Array.prototype.slice
                      , a = {}
                      , u = 0;
                    function l(t, e) {
                        this._id = t,
                        this._clearFn = e
                    }
                    n.setTimeout = function() {
                        return new l(o.call(setTimeout, window, arguments),clearTimeout)
                    }
                    ,
                    n.setInterval = function() {
                        return new l(o.call(setInterval, window, arguments),clearInterval)
                    }
                    ,
                    n.clearTimeout = n.clearInterval = function(t) {
                        t.close()
                    }
                    ,
                    l.prototype.unref = l.prototype.ref = function() {}
                    ,
                    l.prototype.close = function() {
                        this._clearFn.call(window, this._id)
                    }
                    ,
                    n.enroll = function(t, e) {
                        clearTimeout(t._idleTimeoutId),
                        t._idleTimeout = e
                    }
                    ,
                    n.unenroll = function(t) {
                        clearTimeout(t._idleTimeoutId),
                        t._idleTimeout = -1
                    }
                    ,
                    n._unrefActive = n.active = function(t) {
                        clearTimeout(t._idleTimeoutId);
                        var e = t._idleTimeout;
                        e >= 0 && (t._idleTimeoutId = setTimeout((function() {
                            t._onTimeout && t._onTimeout()
                        }
                        ), e))
                    }
                    ,
                    n.setImmediate = "function" == typeof e ? e : function(t) {
                        var e = u++
                          , r = !(arguments.length < 2) && s.call(arguments, 1);
                        return a[e] = !0,
                        i((function() {
                            a[e] && (r ? t.apply(null, r) : t.call(null),
                            n.clearImmediate(e))
                        }
                        )),
                        e
                    }
                    ,
                    n.clearImmediate = "function" == typeof r ? r : function(t) {
                        delete a[t]
                    }
                }
                ).call(this)
            }
            ).call(this, t("timers").setImmediate, t("timers").clearImmediate)
        }
        , {
            "process/browser.js": 196,
            timers: 199
        }],
        200: [function(t, e, n) {
            "use strict";
            var r = t("./util/eventEmitter")
              , i = t("knockout-es5");
            function o(t, e, n, r) {
                this.yaw = t,
                this.pitch = e,
                this.title = n,
                this.text = r,
                this.initialTitle = n,
                this.initialText = r,
                this.getObservable = function(t) {
                    return i.getObservable(this, t)
                }
                .bind(this),
                i.track(this)
            }
            r(o),
            o.prototype.setCoordinates = function(t) {
                this.yaw = t.yaw,
                this.pitch = t.pitch,
                this.emit("coordinatesChanged")
            }
            ,
            o.prototype.isUnchanged = function() {
                return this.title === this.initialTitle && this.text === this.initialText
            }
            ,
            o.prototype.toObject = function() {
                return {
                    yaw: this.yaw,
                    pitch: this.pitch,
                    title: this.title,
                    text: this.text
                }
            }
            ,
            e.exports = o
        }
        , {
            "./util/eventEmitter": 237,
            "knockout-es5": 17
        }],
        201: [function(t, e, n) {
            "use strict";
            var r = t("./util/eventEmitter")
              , i = t("knockout-es5");
            function o(t, e, n) {
                this.yaw = t,
                this.pitch = e,
                this.target = n,
                this.rotation = 0,
                i.track(this)
            }
            r(o),
            o.prototype.setCoordinates = function(t) {
                this.yaw = t.yaw,
                this.pitch = t.pitch,
                this.emit("coordinatesChanged")
            }
            ,
            o.prototype.offsetRotation = function(t) {
                this.rotation += t,
                this.emit("rotationChanged")
            }
            ,
            o.prototype.setTarget = function(t) {
                this.target = t,
                this.emit("targetChanged")
            }
            ,
            o.prototype.toObject = function() {
                return {
                    yaw: this.yaw,
                    pitch: this.pitch,
                    rotation: this.rotation,
                    target: this.target.uniqueId()
                }
            }
            ,
            o.prototype.hasValidTarget = function() {
                return this.target && !this.target.removed()
            }
            ,
            e.exports = o
        }
        , {
            "./util/eventEmitter": 237,
            "knockout-es5": 17
        }],
        202: [function(t, e, n) {
            "use strict";
            var r = t("knockout-es5");
            function i() {
                this.list = [],
                r.track(this)
            }
            function o(t, e) {
                this.html = t,
                this.level = e,
                this.time = Date.now(),
                this.notifying = !0,
                this.read = !1;
                var n = this;
                setTimeout((function() {
                    n.notifying = !1
                }
                ), 5e3),
                r.track(this)
            }
            i.prototype.push = function(t, e) {
                var n = new o(t,e);
                this.list.unshift(n)
            }
            ,
            i.prototype.all = function() {
                return this.list
            }
            ,
            i.prototype.notifying = function() {
                return this.list.filter((function(t) {
                    return t.notifying
                }
                ))
            }
            ,
            i.prototype.setAllNotNotifying = function() {
                this.list.forEach((function(t) {
                    t.notifying = !1
                }
                ))
            }
            ,
            i.prototype.setAllRead = function() {
                this.list.forEach((function(t) {
                    t.read = !0
                }
                ))
            }
            ,
            i.prototype.numNotRead = function() {
                return this.list.reduce((function(t, e) {
                    return e.read ? t : t + 1
                }
                ), 0)
            }
            ,
            o.prototype.isWarning = function() {
                return "warning" === this.level
            }
            ,
            e.exports = i
        }
        , {
            "knockout-es5": 17
        }],
        203: [function(t, e, n) {
            "use strict";
            var r = t("lodash/collection/find")
              , i = t("lodash/object/values")
              , o = t("./TileStore")
              , s = t("./processPanorama")
              , a = t("./processingState/ProcessingState")
              , u = t("./util/eventEmitter")
              , l = t("./oneShotEdit")
              , c = t("knockout-es5")
              , h = (t("./util/endianess"),
            t("./util/errorToObject"))
              , p = t("./util/slug");
            function f() {
                this.list = [],
                this.selected = null,
                this._processing = null,
                c.track(this)
            }
            function d(t, e, n, r, i, s) {
                this.panoramasList = t,
                this.type = e,
                this.name = n,
                this.fileData = r,
                this.width = i,
                this.height = s,
                this.processingState = new a("panorama",{
                    type: e,
                    name: n,
                    width: i,
                    height: s
                }),
                this.tileStore = new o,
                this.cubeMapPreview = null,
                this.faceSize = null,
                this.levels = null,
                this.cubeMapPreviewSize = null,
                this.settings = {
                    initialViewParameters: {
                        pitch: 0,
                        yaw: 0,
                        fov: Math.PI / 2
                    },
                    linkHotspots: [],
                    infoHotspots: []
                },
                c.track(this),
                c.track(this.settings.linkHotspots)
            }
            f.prototype.push = function(t, e, n, r, i) {
                var o = new d(this,t,e,n,r,i);
                this.list.push(o);
                var s = this;
                o.processingState.addEventListener("changed", (function() {
                    s.emit("changed")
                }
                )),
                this.emit("changed"),
                this._handleListChange(),
                this.selected || o.select()
            }
            ,
            f.prototype._handleListChange = function() {
                if (!this._processing) {
                    var t = r(this.list, (function(t) {
                        return t.processingState.isQueued()
                    }
                    ));
                    if (t) {
                        t.processingState.started();
                        var e = this
                          , n = s(t, (function(n) {
                            n && "cancelled" === n.message ? t.processingState.cancelled() : n ? (t.processingState.failed(h(n)),
                            e.emit("processingFailed", t)) : t.processingState.successful(),
                            e._processing = null,
                            e._handleListChange()
                        }
                        ));
                        this._processing = {
                            panorama: t,
                            cancel: n
                        }
                    }
                }
            }
            ,
            f.prototype._remove = function(t) {
                if ((t.processingState.isSuccessful() || t.processingState.isStarted()) && !window.confirm("Are you sure you want to remove this panorama?"))
                    return;
                var e = this.list.indexOf(t);
                e < 0 || (this.list.splice(e, 1),
                this._processing && this._processing.panorama === t && this._processing.cancel(),
                this.emit("changed"),
                this._handleListChange(),
                this.selected === t && (this.list.length > 0 ? this.list[0].select() : this.selected = null))
            }
            ,
            f.prototype._setSelected = function(t) {
                this.selected = t,
                this.emit("selectedPanoramaChanged", t)
            }
            ,
            u(f),
            u(d),
            d.prototype.addTile = function(t, e, n, r, i) {
                this.tileStore.put(t, e, n, r, i)
            }
            ,
            d.prototype.setCubeMapPreview = function(t) {
                if (this.cubeMapPreview)
                    throw new Error("CubeMapPreview already set");
                if (!this.cubeMapPreviewSize)
                    throw new Error("Cannot set CubeMapPreview on Panorama without cubeMapPreviewSize");
                this.cubeMapPreview = t
            }
            ,
            d.prototype.setLevels = function(t, e) {
                if (e = e || {},
                this.levels)
                    throw new Error("Levels already set");
                var n = t.slice();
                e.cubeMapPreviewSize && n.unshift({
                    tileSize: e.cubeMapPreviewSize,
                    size: e.cubeMapPreviewSize,
                    fallbackOnly: !0
                }),
                this.levels = n,
                this.cubeMapPreviewSize = e.cubeMapPreviewSize;
                var r = n[n.length - 1].size;
                this.faceSize = e.faceSize ? Math.min(e.faceSize, r) : r,
                this.emit("levelsSet", null)
            }
            ,
            d.prototype.edit = function() {
                var t = this.uniqueId()
                  , e = document.querySelector('[data-panorama-id="' + t + '"] .name');
                l(e)
            }
            ,
            d.prototype.remove = function(t, e) {
                this.panoramasList._remove(this),
                e.stopPropagation()
            }
            ,
            d.prototype.removed = function() {
                return this.panoramasList.list.indexOf(this) < 0
            }
            ,
            d.prototype.select = function() {
                this.panoramasList._setSelected(this)
            }
            ,
            d.prototype.isSelected = function() {
                return this.panoramasList.selected === this
            }
            ,
            d.prototype.uniqueId = function() {
                var t = this.panoramasList.list.indexOf(this);
                return t >= 0 ? t + "-" + p(this.name) : p(this.name)
            }
            ,
            d.prototype.files = function() {
                return "equirectangular" === this.type ? [this.fileData] : "cube" === this.type ? i(this.fileData) : void 0
            }
            ,
            d.prototype.addLinkHotspot = function(t) {
                this.settings.linkHotspots.push(t),
                this.emit("linkHotspotAdded", t)
            }
            ,
            d.prototype.removeLinkHotspot = function(t) {
                var e = this.settings.linkHotspots.indexOf(t);
                this.settings.linkHotspots.splice(e, 1),
                this.emit("linkHotspotRemoved", t)
            }
            ,
            d.prototype.addInfoHotspot = function(t) {
                this.settings.infoHotspots.push(t),
                this.emit("infoHotspotAdded", t)
            }
            ,
            d.prototype.removeInfoHotspot = function(t) {
                var e = this.settings.infoHotspots.indexOf(t);
                this.settings.infoHotspots.splice(e, 1),
                this.emit("infoHotspotRemoved", t)
            }
            ,
            e.exports = f
        }
        , {
            "./TileStore": 204,
            "./oneShotEdit": 215,
            "./processPanorama": 223,
            "./processingState/ProcessingState": 226,
            "./util/endianess": 235,
            "./util/errorToObject": 236,
            "./util/eventEmitter": 237,
            "./util/slug": 242,
            "knockout-es5": 17,
            "lodash/collection/find": 26,
            "lodash/object/values": 96
        }],
        204: [function(t, e, n) {
            "use strict";
            var r = t("async")
              , i = t("./util/delay");
            function o() {
                this._store = {}
            }
            t("./util/eventEmitter")(o),
            o.prototype.put = function(t, e, n, r, i) {
                if (this._store[t] || (this._store[t] = {}),
                this._store[t][e] || (this._store[t][e] = {}),
                this._store[t][e][n] || (this._store[t][e][n] = {}),
                this._store[t][e][n][r])
                    throw new Error("Tile already in store");
                this._store[t][e][n][r] = i,
                this.emit("tileAdded", t, e, n, r, i)
            }
            ,
            o.prototype.get = function(t, e, n, r) {
                return this._store[t] && this._store[t][e] && this._store[t][e][n] ? this._store[t][e][n][r] : null
            }
            ,
            o.prototype.forEach = function(t, e) {
                var n = this
                  , o = 0;
                r.eachSeries(Object.keys(n._store), (function(e, s) {
                    r.eachSeries(Object.keys(n._store[e]), (function(s, a) {
                        r.eachSeries(Object.keys(n._store[e][s]), (function(a, u) {
                            r.eachSeries(Object.keys(n._store[e][s][a]), (function(r, u) {
                                var l = n._store[e][s][a][r];
                                t(e, s, a, r, l, (function(t) {
                                    if (t)
                                        return u(t);
                                    o++,
                                    i(u)
                                }
                                ))
                            }
                            ), u)
                        }
                        ), a)
                    }
                    ), s)
                }
                ), (function(t) {
                    if (t)
                        return e(t);
                    e(null, o)
                }
                ))
            }
            ,
            e.exports = o
        }
        , {
            "./util/delay": 234,
            "./util/eventEmitter": 237,
            async: 1
        }],
        205: [function(t, e, n) {
            "use strict";
            if (t("./supported")) {
                var r = t("knockout-es5");
                t("./knockout/alignOnBlur"),
                t("./knockout/stopKeyPropagation"),
                t("./knockout/contenteditable");
                var i = t("./matchFilesToPanoramas")
                  , o = t("./oneShotEdit")
                  , s = t("./setFileDrop")
                  , a = t("./getArchive")
                  , u = t("./generateData")
                  , l = t("./getTemplate")
                  , c = t("./Panoramas")
                  , h = t("./panoramaView/Previewer")
                  , p = t("sortablejs")
                  , f = t("./workers")
                  , d = t("../tmp/version")
                  , m = t("./setFavicon")
                  , v = t("./ignoredFilesMessageHtml")
                  , y = t("./imageSizeLimits")
                  , g = t("./LinkHotspot")
                  , _ = t("./InfoHotspot")
                  , b = {
                    mouseViewMode: r.observable("drag"),
                    autorotateEnabled: r.observable(!0),
                    fullscreenButton: r.observable(!1),
                    viewControlButtons: r.observable(!1)
                }
                  , w = new c
                  , x = r.observable();
                s(window, W);
                var E = document.getElementById("selectFilesInput");
                [".more-files", "#startup .select"].forEach((function(t) {
                    document.querySelector(t).addEventListener("click", (function() {
                        return E.click(),
                        !1
                    }
                    ))
                }
                )),
                document.getElementById("selectFilesInput").addEventListener("change", (function() {
                    this.files && this.files.length > 0 && W(this.files),
                    this.value = null
                }
                ));
                var M = new h(document.getElementById("pano"),w);
                w.addEventListener("selectedPanoramaChanged", (function(t) {
                    M.preview(t),
                    U()
                }
                )),
                l("template", (function(t, e) {
                    if (t)
                        throw t;
                    x(e)
                }
                ));
                var S = r.computed((function() {
                    return w.list.every((function(t) {
                        return t.processingState.isEnded()
                    }
                    )) && w.list.length > 0
                }
                ))
                  , T = r.computed((function() {
                    return S() && w.list.filter((function(t) {
                        return t.processingState.isSuccessful()
                    }
                    )).length > 0
                }
                ))
                  , C = {
                    settings: !0,
                    panoramaList: !0
                };
                r.track(C);
                var O = null
                  , P = document.querySelector(".initial-view-hint");
                M._viewer.controls().addEventListener("active", U),
                new p(document.querySelector(".panorama-list"),{
                    ghostClass: "ghost",
                    handle: ".handle",
                    onSort: function(t) {
                        var e = w.list
                          , n = e.splice(t.oldIndex, 1)[0];
                        e.splice(t.newIndex, 0, n);
                        var r = e;
                        w.list = [],
                        t.item.parentElement && t.item.parentElement.removeChild(t.item),
                        w.list = r
                    }
                });
                var L = r.observable(null)
                  , A = r.observable(!0)
                  , k = r.computed((function() {
                    return w.list.length <= 0 && !A()
                }
                ))
                  , D = r.computed((function() {
                    return !!L()
                }
                ))
                  , R = r.computed((function() {
                    return k() || D() || A()
                }
                ))
                  , I = t("./Messages")
                  , N = t("./processingFailedMessageHtml")
                  , j = t("./processingCompleteMessageHtml")
                  , z = new I
                  , H = r.observable(!1)
                  , F = r.computed((function() {
                    return H() ? z.all() : z.notifying()
                }
                ));
                H.subscribe((function(t) {
                    t ? z.setAllRead() : z.setAllNotNotifying()
                }
                )),
                w.addEventListener("processingFailed", (function(t) {
                    z.push(N(t), "error")
                }
                )),
                T.subscribe((function(t) {
                    t && setTimeout((function() {
                        z.push(j(), "success")
                    }
                    ), 0)
                }
                ));
                var B = r.observable(!1)
                  , V = {
                    panoramas: w,
                    getPanoramasArchive: G,
                    readyToDownload: X,
                    projectName: "Project Title",
                    editProjectName: function() {
                        var t = document.querySelector(".project-name .input");
                        o(t)
                    },
                    settings: b,
                    accordionToggle: function(t) {
                        C[t] = !C[t]
                    },
                    accordionsOpen: C,
                    setInitialView: function() {
                        if (!Y()) {
                            var t = M.currentViewParams();
                            t && (w.selected.settings.initialViewParameters = t,
                            P.style.opacity = 1,
                            null != O && (clearTimeout(O),
                            O = null),
                            O = setTimeout(U, 3e3),
                            M.interruptAutorotate())
                        }
                    },
                    addLinkHotspot: function() {
                        if (!Y()) {
                            var t = M.currentViewParams()
                              , e = new g(t.yaw,t.pitch,null);
                            w.selected.addLinkHotspot(e),
                            U()
                        }
                    },
                    addInfoHotspot: function() {
                        if (!Y()) {
                            var t = M.currentViewParams()
                              , e = new _(t.yaw,t.pitch,"Title","Text");
                            w.selected.addInfoHotspot(e),
                            U()
                        }
                    },
                    zipProcessingState: L,
                    closeZipState: function() {
                        L(null)
                    },
                    cancelZip: function() {
                        console.log("TODO: cancel zip archive")
                    },
                    startupVisible: k,
                    downloadVisible: D,
                    shadeVisible: R,
                    previewVisible: function() {
                        return w.selected
                    },
                    introVisible: A,
                    hideIntro: function() {
                        A(!1)
                    },
                    messages: z,
                    messagesExpanded: H,
                    messagesVisible: F,
                    toggleMessagesExpanded: function() {
                        H(!H())
                    },
                    showMessages: function() {
                        return H(!0),
                        !0
                    },
                    closeMessages: function() {
                        return H(!1),
                        !1
                    },
                    previewedFailed: Y,
                    helpVisible: B,
                    toggleHelp: function() {
                        B(!B())
                    },
                    closeHelp: function() {
                        B(!1)
                    },
                    previewFailedMessage: function() {
                        return w.selected && w.selected.processingState.data.message
                    },
                    equirectangularSizeLimit: function() {
                        return y.equirectangularWidth + "x" + y.equirectangularWidth / 2 + "px"
                    },
                    cubeSizeLimit: function() {
                        return y.cubeFaceWidth + "x" + y.cubeFaceWidth + "px"
                    },
                    hotspots: M.hotspots
                };
                window.addEventListener("beforeunload", (function(t) {
                    if (w.list.length > 0) {
                        var e = "Your work is lost when you leave the application";
                        return (t || window.event).returnValue = e,
                        e
                    }
                }
                ));
                var q = r.computed((function() {
                    if (w.list.length <= 0)
                        return null;
                    var t = w.list.map((function(t) {
                        return t.processingState.isFailed() ? 1 : t.processingState.userProgress()
                    }
                    ));
                    return t.reduce((function(e, n) {
                        return e + n / t.length
                    }
                    ), 0)
                }
                ));
                q.subscribe(K),
                q.subscribe($),
                K(),
                $(),
                window.setFavicon = m,
                b.mouseViewMode.subscribe((function(t) {
                    "drag" === t ? M.setDragMode() : "qtvr" === t && M.setQtvrMode()
                }
                )),
                b.autorotateEnabled.subscribe((function(t) {
                    M.setAutorotate(t)
                }
                )),
                b.mouseViewMode.notifySubscribers(b.mouseViewMode()),
                b.autorotateEnabled.notifySubscribers(b.autorotateEnabled()),
                r.track(V),
                r.applyBindings(V),
                e.exports = {
                    version: d,
                    viewModel: V,
                    getPanoramasArchiveFromNotification: function(t) {
                        G()
                    }
                }
            }
            function W(t) {
                i(t, (function(t, e) {
                    function n(t) {
                        w.push(t.type, t.name, t.fileData, t.width, t.height)
                    }
                    e.equirectangulars.forEach(n),
                    e.cubes.forEach(n);
                    var r = v(e);
                    r && z.push(r, "warning")
                }
                ))
            }
            function Y() {
                return w.selected && w.selected.processingState.isFailed()
            }
            function X() {
                return T() && !!x
            }
            function U() {
                P.style.opacity = 0
            }
            function G() {
                if (X()) {
                    var t = w.list.filter((function(t) {
                        return t.processingState.isSuccessful()
                    }
                    ))
                      , e = u(t, V.projectName, r.toJS(b))
                      , n = a(e, t, x(), {
                        workerSource: f.zip
                    });
                    L(n)
                }
            }
            function K() {
                var t = "Marzipano Tool";
                null != q() && q() < 1 && (t = "(" + (100 * q()).toFixed(0) + "%) " + t);
                document.title = t
            }
            function $() {
                m(q())
            }
        }
        , {
            "../tmp/version": 245,
            "./InfoHotspot": 200,
            "./LinkHotspot": 201,
            "./Messages": 202,
            "./Panoramas": 203,
            "./generateData": 206,
            "./getArchive": 207,
            "./getTemplate": 208,
            "./ignoredFilesMessageHtml": 209,
            "./imageSizeLimits": 210,
            "./knockout/alignOnBlur": 211,
            "./knockout/contenteditable": 212,
            "./knockout/stopKeyPropagation": 213,
            "./matchFilesToPanoramas": 214,
            "./oneShotEdit": 215,
            "./panoramaView/Previewer": 217,
            "./processingCompleteMessageHtml": 224,
            "./processingFailedMessageHtml": 225,
            "./setFavicon": 230,
            "./setFileDrop": 231,
            "./supported": 232,
            "./workers": 243,
            "knockout-es5": 17,
            sortablejs: 198
        }],
        206: [function(t, e, n) {
            "use strict";
            e.exports = function(t, e, n) {
                return {
                    scenes: t.map((function(t) {
                        var e = t.settings.linkHotspots.filter((function(t) {
                            return t.hasValidTarget()
                        }
                        )).map((function(t) {
                            return t.toObject()
                        }
                        ))
                          , n = t.settings.infoHotspots.map((function(t) {
                            return t.toObject()
                        }
                        ));
                        return {
                            id: t.uniqueId(),
                            name: t.name,
                            levels: t.levels,
                            faceSize: t.faceSize,
                            initialViewParameters: t.settings.initialViewParameters,
                            linkHotspots: e,
                            infoHotspots: n
                        }
                    }
                    )),
                    name: e,
                    settings: n
                }
            }
        }
        , {}],
        207: [function(t, e, n) {
            "use strict";
            var r = t("async")
              , i = t("./zip/Zip")
              , o = t("./util/delay")
              , s = t("lodash/string/template")
              , a = t("./util/fileExt")
              , u = t("./util/fileNoExt")
              , l = t("filesaver.js")
              , c = t("./processingState/ProcessingState")
              , h = (t("./util/endianess"),
            t("./util/slug"));
            e.exports = function(t, e, n, p) {
                p = p || {};
                var f = new c("zip",{
                    panoramaNum: e.length
                }).started()
                  , d = new i({
                    workerSource: p.workerSource
                })
                  , m = f.addChild("add_data").started();
                !function(t, e) {
                    var n = JSON.stringify(t, null, 2)
                      , r = "var APP_DATA = " + (n = (n = n.replace(/\u2028/g, "\\u2028")).replace(/\u2029/g, "\\u2029")) + ";\n";
                    e.add(["app-files"], "data.js", r)
                }(t, d),
                m.successful({
                    tourData: t
                });
                var v = f.addChild("add_template_files").started();
                return function(t, e, n, i) {
                    if (!t)
                        throw new Error("Template files not loaded");
                    r.eachSeries(t, (function(t, r) {
                        var i = t.name
                          , l = t.data;
                        if ("tpl" === a(t.name)) {
                            try {
                                l = s(t.data)(e)
                            } catch (t) {
                                return void r(t)
                            }
                            i = u(t.name)
                        }
                        n.add([], i, l),
                        o(r)
                    }
                    ), i)
                }(n, t, d, (function(n) {
                    if (n)
                        throw n;
                    v.successful();
                    var i = f.addChild("add_tiles").started();
                    !function(t, e, n) {
                        var i = 0;
                        r.eachSeries(t, (function(t, n) {
                            var r = ["app-files", "tiles", t.uniqueId()];
                            t.cubeMapPreview && e.add(r, "preview.jpg", t.cubeMapPreview, {
                                binary: !0
                            }),
                            t.tileStore.forEach((function(t, n, o, s, a, u) {
                                var l = [t, n, o].map((function(t) {
                                    return t.toString(10)
                                }
                                ))
                                  , c = r.concat(l);
                                e.add(c, s.toString(10) + ".jpg", a, {
                                    binary: !0
                                }),
                                i++,
                                u()
                            }
                            ), n)
                        }
                        ), (function(t) {
                            if (t)
                                return n(t);
                            n(null, i)
                        }
                        ))
                    }(e, d, (function(e, n) {
                        if (e)
                            throw e;
                        i.successful({
                            tileNum: n
                        });
                        var r = f.addChild("generate_zip").started();
                        d.generate({
                            type: "uint8array"
                        }, (function(e, n) {
                            if (e)
                                throw e;
                            r.successful(),
                            d.destroy();
                            var i = f.addChild("create_blob").started()
                              , o = new Blob([n],{
                                type: "application/zip"
                            });
                            i.successful();
                            var s = f.addChild("save_blob").started()
                              , a = (h(t.name) || "marzipano-tour") + ".zip";
                            l(o, a),
                            s.successful(),
                            f.successful({
                                byteLength: n.byteLength
                            })
                        }
                        ))
                    }
                    ))
                }
                )),
                f
            }
        }
        , {
            "./processingState/ProcessingState": 226,
            "./util/delay": 234,
            "./util/endianess": 235,
            "./util/fileExt": 238,
            "./util/fileNoExt": 239,
            "./util/slug": 242,
            "./zip/Zip": 244,
            async: 1,
            "filesaver.js": 3,
            "lodash/string/template": 99
        }],
        208: [function(t, e, n) {
            "use strict";
            var r = t("async")
              , i = t("lodash/array/zip")
              , o = t("./util/loadFileXhr")
              , s = t("./util/fileExt")
              , a = t("../tmp/version");
            e.exports = function(t, e) {
                o(t + "/files.json?" + a, "json", (function(n, u) {
                    if (n)
                        return e(n);
                    var l = u.map((function(e) {
                        return t + "/" + e
                    }
                    ));
                    r.mapLimit(l, 5, (function(t, e) {
                        var n = "tpl" === s(t) ? "text" : "arraybuffer";
                        o(t + "?" + a, n, e)
                    }
                    ), (function(t, n) {
                        if (t)
                            return e(t);
                        var r = i(u, n).map((function(t) {
                            return {
                                name: t[0],
                                data: t[1]
                            }
                        }
                        ));
                        e(null, r)
                    }
                    ))
                }
                ))
            }
        }
        , {
            "../tmp/version": 245,
            "./util/fileExt": 238,
            "./util/loadFileXhr": 240,
            async: 1,
            "lodash/array/zip": 23
        }],
        209: [function(t, e, n) {
            "use strict";
            var r = t("lodash/collection/map")
              , i = t("lodash/array/flatten")
              , o = t("lodash/collection/pluck")
              , s = t("lodash/object/values")
              , a = t("./imageSizeLimits");
            e.exports = function(t) {
                var e = t.badCubes
                  , n = t.badFiles
                  , u = t.badSizedImages
                  , l = t.imagesWithoutSize
                  , c = t.equirectangularsOverLimit
                  , h = t.cubesOverLimit
                  , p = r(e, (function(t) {
                    return {
                        name: t.name,
                        width: t.width,
                        height: t.height,
                        files: s(t.fileData)
                    }
                }
                ))
                  , f = i(o(p, "files"))
                  , d = f.length + n.length + u.length + l.length + c.length + 6 * h.length
                  , m = "";
                if (m += "<p class='title'>" + d + " files ignored</p>",
                d <= 0)
                    return !1;
                var v = [e, n, u, l, c, h].filter((function(t) {
                    return t.length > 0
                }
                )).length > 1;
                return n.length > 0 && (m += "<details>",
                m += v ? "<summary>" + n.length + " not recognized as images</summary>" : "<summary>Files not recognized as images</summary>",
                m += "  <ul>",
                n.forEach((function(t) {
                    m += "  <li>" + t.name + "</li>"
                }
                )),
                m += "  </ul>",
                m += "</details>"),
                l.length > 0 && (m += "<details>",
                m += v ? "<summary>" + l.length + " images corrupted</summary>" : "<summary>Corrupted images</summary>",
                m += "  <ul>",
                l.forEach((function(t) {
                    m += "  <li>" + t.name + "</li>"
                }
                )),
                m += "  </ul>",
                m += "</details>"),
                u.length > 0 && (m += "<details>",
                m += v ? "<summary>" + u.length + " not 1:1 cube faces or 2:1 spheres</summary>" : "<summary>Images not 1:1 cube faces or 2:1 spheres</summary>",
                m += "  <ul>",
                u.forEach((function(t) {
                    m += "  <li>" + t.file.name + " (" + t.width + "x" + t.height + "px)</li>"
                }
                )),
                m += "  </ul>",
                m += "</details>"),
                f.length > 0 && (m += "<details>",
                m += v ? "<summary>" + f.length + " not matched to cubes</summary>" : "<summary>Files not matched to cubes</summary>",
                m += "  <ul>",
                p.forEach((function(t) {
                    m += "  <li>",
                    m += "    <b>" + t.name + " (" + t.width + "x" + t.height + ")</b>",
                    m += "    <ul>",
                    t.files.forEach((function(t) {
                        m += "    <li>" + t.file.name + "</li>"
                    }
                    )),
                    m += "    </ul>",
                    m += "  </li>"
                }
                )),
                m += "  </ul>",
                m += "</details>"),
                c.length > 0 && (m += "<details>",
                m += v ? "<summary>" + c.length + " spheres larger than the size limit</summary>" : "<summary>Spheres larger than the size limit</summary>",
                m += "<p>Maximum size is <b>" + a.equirectangularWidth + "x" + a.equirectangularWidth / 2 + "px</b></p>",
                m += "  <ul>",
                c.forEach((function(t) {
                    m += "  <li>" + t.name + " (" + t.width + "x" + t.height + "px)</li>"
                }
                )),
                m += "  </ul>",
                m += "</details>"),
                h.length > 0 && (m += "<details>",
                m += v ? "<summary>" + h.length + " cubes larger than the size limit</summary>" : "<summary>Cubes larger than the size limit</summary>",
                m += "<p>Maximum size is <b>" + a.cubeFaceWidth + "x" + a.cubeFaceWidth + "px</b></p>",
                m += "  <ul>",
                h.forEach((function(t) {
                    m += "  <li>" + t.name + " (" + t.width + "x" + t.height + "px)</li>"
                }
                )),
                m += "  </ul>",
                m += "</details>"),
                m
            }
        }
        , {
            "./imageSizeLimits": 210,
            "lodash/array/flatten": 21,
            "lodash/collection/map": 29,
            "lodash/collection/pluck": 30,
            "lodash/object/values": 96
        }],
        210: [function(t, e, n) {
            "use strict";
            e.exports = {
                equirectangularWidth: 23e3,
                cubeFaceWidth: 16e3
            }
        }
        , {}],
        211: [function(t, e, n) {
            "use strict";
            var r = t("knockout-es5");
            r.bindingHandlers.alignOnBlur = {
                update: function(t) {
                    r.applyBindingsToNode(t, {
                        event: {
                            blur: function() {
                                t.scrollLeft = 0,
                                t.scrollTop = 0
                            }
                        }
                    })
                }
            }
        }
        , {
            "knockout-es5": 17
        }],
        212: [function(t, e, n) {
            "use strict";
            var r = t("knockout-es5");
            r.bindingHandlers.contenteditable = {
                init: function(t, e, n) {
                    var i = e();
                    t.innerHTML = r.utils.unwrapObservable(i),
                    i.subscribe((function(e) {
                        t.innerHTML !== e && (t.innerHTML = e)
                    }
                    )),
                    t.addEventListener("keyup", (function() {
                        e()(t.innerHTML)
                    }
                    ))
                },
                update: function(t, e) {
                    var n = r.utils.unwrapObservable(e());
                    null == n && (n = "")
                }
            }
        }
        , {
            "knockout-es5": 17
        }],
        213: [function(t, e, n) {
            "use strict";
            var r = t("knockout-es5");
            r.bindingHandlers.stopKeyPropagation = {
                update: function(t) {
                    r.applyBindingsToNode(t, {
                        event: {
                            keydown: function(t, e) {
                                return e.stopPropagation(),
                                !0
                            }
                        }
                    })
                }
            }
        }
        , {
            "knockout-es5": 17
        }],
        214: [function(t, e, n) {
            "use strict";
            var r = t("async")
              , i = t("../../vendor/imgsize")
              , o = t("lodash/collection/groupBy")
              , s = t("lodash/collection/contains")
              , a = t("lodash/array/difference")
              , u = t("lodash/array/zipObject")
              , l = t("lodash/array/zip")
              , c = t("./util/fileExt")
              , h = t("./util/fileNoExt")
              , p = t("./imageSizeLimits")
              , f = ["tif", "tiff", "jpg", "jpeg"]
              , d = /^(.*)_([udfblr])\.[^\.]+$/i;
            function m(t) {
                return t.match(d)[1]
            }
            function v(t, e, n) {
                this.file = t,
                this.width = e,
                this.height = n
            }
            function y(t, e) {
                i.async(t, (function(t, n) {
                    e(null, t ? null : n)
                }
                ))
            }
            e.exports = function(t, e) {
                var n = o(t, (function(t) {
                    var e = c(t.name);
                    return s(f, e)
                }
                ))
                  , i = n[!0] || [];
                r.mapLimit(i, 3, y, (function(t, r) {
                    if (t)
                        return e(t);
                    var s = l(i, r)
                      , c = o(s, (function(t) {
                        return !!t[1]
                    }
                    ))
                      , f = c[!1] || []
                      , y = c[!0] || []
                      , g = f.map((function(t) {
                        return t[0]
                    }
                    ))
                      , _ = y.map((function(t) {
                        return new v(t[0],t[1].width,t[1].height)
                    }
                    ))
                      , b = o(_, (function(t) {
                        return d.test(t.file.name) && t.width === t.height
                    }
                    ))
                      , w = b[!0] || []
                      , x = b[!1] || []
                      , E = o(x, (function(t) {
                        return t.width === 2 * t.height
                    }
                    ))
                      , M = E[!1] || []
                      , S = (E[!0] || []).map((function(t) {
                        return {
                            type: "equirectangular",
                            name: h(t.file.name),
                            fileData: t,
                            width: t.width,
                            height: t.height
                        }
                    }
                    ))
                      , T = o(w, (function(t) {
                        return m(t.file.name) + "~" + t.width + "~" + t.height
                    }
                    ))
                      , C = Object.keys(T).map((function(t) {
                        var e = T[t]
                          , n = e.map((function(t) {
                            return t.file.name.match(d)[2].toLowerCase()
                        }
                        ))
                          , r = u(n, e);
                        return {
                            type: "cube",
                            name: m(e[0].file.name),
                            fileData: r,
                            width: e[0].width,
                            height: e[0].height
                        }
                    }
                    ))
                      , O = o(C, (function(t) {
                        if (6 !== Object.keys(t.fileData).length)
                            return !1;
                        var e = Object.keys(t.fileData);
                        return 0 === a(e, ["f", "b", "l", "r", "u", "d"]).length
                    }
                    ))
                      , P = o(S, (function(t) {
                        return t.width <= p.equirectangularWidth
                    }
                    ))
                      , L = P[!1] || []
                      , A = P[!0] || []
                      , k = o(O[!0] || [], (function(t) {
                        return t.width <= p.cubeFaceWidth
                    }
                    ))
                      , D = k[!1] || []
                      , R = k[!0] || [];
                    e(null, {
                        cubes: R,
                        equirectangulars: A,
                        badCubes: O[!1] || [],
                        badFiles: n[!1] || [],
                        imagesWithoutSize: g,
                        badSizedImages: M,
                        equirectangularsOverLimit: L,
                        cubesOverLimit: D
                    })
                }
                ))
            }
        }
        , {
            "../../vendor/imgsize": 246,
            "./imageSizeLimits": 210,
            "./util/fileExt": 238,
            "./util/fileNoExt": 239,
            async: 1,
            "lodash/array/difference": 19,
            "lodash/array/zip": 23,
            "lodash/array/zipObject": 24,
            "lodash/collection/contains": 25,
            "lodash/collection/groupBy": 27
        }],
        215: [function(t, e, n) {
            "use strict";
            function r() {
                this.setAttribute("disabled", "disabled"),
                this.removeEventListener("blur", r)
            }
            function i() {
                this.removeAttribute("disabled"),
                this.select()
            }
            e.exports = function(t) {
                i.apply(t),
                t.addEventListener("blur", r)
            }
        }
        , {}],
        216: [function(t, e, n) {
            "use strict";
            function r() {
                this.removeAttribute("contenteditable"),
                window.getSelection().removeAllRanges(),
                this.removeEventListener("blur", r)
            }
            function i() {
                this.setAttribute("contenteditable", !0);
                var t = document.createRange();
                t.selectNodeContents(this);
                var e = window.getSelection();
                e.removeAllRanges(),
                e.addRange(t),
                this.focus()
            }
            e.exports = function(t, e) {
                i.apply(t),
                t.addEventListener("blur", (function() {
                    r.apply(this),
                    e()
                }
                ))
            }
        }
        , {}],
        217: [function(t, e, n) {
            "use strict";
            var r = t("marzipano")
              , i = r.Viewer
              , o = r.CubeGeometry
              , s = r.RectilinearView
              , a = t("./TileStoreSource")
              , u = t("./PreviewerHotspots")
              , l = t("../util/eventEmitter")
              , c = [{
                tileSize: 512,
                size: 512
            }, {
                tileSize: 512,
                size: 1024
            }, {
                tileSize: 512,
                size: 2048
            }, {
                tileSize: 512,
                size: 4096
            }, {
                tileSize: 512,
                size: 8192
            }];
            function h(t, e) {
                this._viewer = new i(t),
                this._panorama = null,
                this._panoramaChangedHandler = this.updatePreview.bind(this),
                this.hotspots = new u(this)
            }
            l(h),
            h.prototype.preview = function(t) {
                if (setTimeout(this._viewer.updateSize.bind(this._viewer), 0),
                t && t === this._panorama) {
                    var e = t.settings.initialViewParameters;
                    e && this._viewer.lookTo(e, {
                        transitionDuration: 0
                    })
                } else {
                    var n = this._panorama
                      , r = t;
                    n && n.removeEventListener("levelsSet", this._panoramaChangedHandler),
                    this._panorama = r,
                    this._panoramaChangedHandler(),
                    r && r.addEventListener("levelsSet", this._panoramaChangedHandler)
                }
            }
            ,
            h.prototype.updatePreview = function() {
                var t = this._panorama;
                if (this._viewer.destroyAllScenes(),
                t) {
                    var e = t.levels || c
                      , n = new o(e)
                      , r = new a(t.tileStore)
                      , i = t.faceSize || e[e.length - 1].size
                      , u = s.limit.traditional(i, 120 * Math.PI / 180)
                      , l = new s(t.settings.initialViewParameters,u)
                      , h = this._viewer.createScene({
                        source: r,
                        geometry: n,
                        view: l
                    });
                    this.hotspots.useScene(h, t),
                    h.switchTo({
                        transitionDuration: 0
                    })
                }
            }
            ,
            h.prototype.currentViewParams = function() {
                var t = this._viewer.view();
                return t ? {
                    yaw: t.yaw(),
                    pitch: t.pitch(),
                    fov: t.fov()
                } : null
            }
            ,
            h.prototype.setDragMode = function() {
                this._viewer.controls().disableMethod("mouseViewQtvr"),
                this._viewer.controls().enableMethod("mouseViewDrag")
            }
            ,
            h.prototype.setQtvrMode = function() {
                this._viewer.controls().disableMethod("mouseViewDrag"),
                this._viewer.controls().enableMethod("mouseViewQtvr")
            }
            ,
            h.prototype.setAutorotate = function(t) {
                if (t) {
                    var e = r.autorotate({
                        yawSpeed: .1,
                        targetPitch: 0,
                        targetFov: Math.PI / 2
                    });
                    this._viewer.setIdleMovement(3e3, e),
                    this._viewer.startMovement(e)
                } else
                    this._viewer.setIdleMovement(1 / 0),
                    this._viewer.stopMovement()
            }
            ,
            h.prototype.interruptAutorotate = function() {
                this._viewer.breakIdleMovement()
            }
            ,
            e.exports = h
        }
        , {
            "../util/eventEmitter": 237,
            "./PreviewerHotspots": 218,
            "./TileStoreSource": 221,
            marzipano: 145
        }],
        218: [function(t, e, n) {
            "use strict";
            var r = t("knockout-es5")
              , i = t("./PreviewerLinkHotspot")
              , o = t("./PreviewerInfoHotspot");
            function s(t) {
                this.list = [],
                this._previewer = t,
                this._panorama = null,
                this._scene = null,
                this._hotspotChangeHandler = this._update.bind(this),
                r.track(this)
            }
            s.prototype.useScene = function(t, e) {
                this._panorama && (this._panorama.removeEventListener("linkHotspotAdded", this._hotspotChangeHandler),
                this._panorama.removeEventListener("linkHotspotRemoved", this._hotspotChangeHandler),
                this._panorama.removeEventListener("infoHotspotAdded", this._hotspotChangeHandler),
                this._panorama.removeEventListener("infoHotspotRemoved", this._hotspotChangeHandler)),
                this._panorama = e,
                this._scene = t,
                e.addEventListener("linkHotspotAdded", this._hotspotChangeHandler),
                e.addEventListener("linkHotspotRemoved", this._hotspotChangeHandler),
                e.addEventListener("infoHotspotAdded", this._hotspotChangeHandler),
                e.addEventListener("infoHotspotRemoved", this._hotspotChangeHandler),
                this._hotspotChangeHandler()
            }
            ,
            s.prototype._update = function() {
                var t = this;
                this._previewer.interruptAutorotate(),
                this.list.forEach((function(t) {
                    t.destroy()
                }
                ));
                var e = this._panorama.settings.linkHotspots.map((function(e) {
                    return new i(e,t._panorama,t._scene,t._previewer)
                }
                ))
                  , n = this._panorama.settings.infoHotspots.map((function(e) {
                    return new o(e,t._panorama,t._scene,t._previewer)
                }
                ));
                this.list = [].concat(e, n)
            }
            ,
            e.exports = s
        }
        , {
            "./PreviewerInfoHotspot": 219,
            "./PreviewerLinkHotspot": 220,
            "knockout-es5": 17
        }],
        219: [function(t, e, n) {
            "use strict";
            var r = t("knockout-es5")
              , i = t("../oneShotEditContentEditable");
            function o(t, e, n, i) {
                this._hotspot = t,
                this._panorama = e,
                this._scene = n,
                this._previewer = i,
                this._view = n.view(),
                this.left = null,
                this.top = null,
                this.visible = !1,
                this._updateTransform(),
                this._positionChangeHandler = this._updateTransform.bind(this),
                this._view.addEventListener("change", this._positionChangeHandler),
                this._hotspot.addEventListener("coordinatesChanged", this._positionChangeHandler),
                this.dragging = !1,
                this._mouseUpHandler = this._stopDrag.bind(this),
                window.addEventListener("mouseup", this._mouseUpHandler),
                this._mouseMoveHandler = this._drag.bind(this),
                window.addEventListener("mousemove", this._mouseMoveHandler),
                this.editingTitle = !1,
                this.editingText = !1,
                r.track(this)
            }
            o.prototype.destroy = function() {
                this._view.removeEventListener("change", this._positionChangeHandler),
                this._hotspot.removeEventListener("coordinatesChanged", this._positionChangeHandler),
                window.removeEventListener("mouseup", this._mouseUpHandler),
                window.removeEventListener("mousemove", this._mouseMoveHandler),
                this.left = null,
                this.top = null,
                this.visible = null,
                this.targetSelectorVisible = null
            }
            ,
            o.prototype._updateTransform = function() {
                var t = this._view.coordinatesToScreen({
                    yaw: this._hotspot.yaw,
                    pitch: this._hotspot.pitch
                });
                t ? (this.left = t.x + "px",
                this.top = t.y + "px",
                this.visible = !0) : this.visible = !1
            }
            ,
            o.prototype.editTitle = function() {
                var t = this;
                this.editingTitle = !0;
                var e = document.querySelector(".info-hotspot.editingTitle .title");
                i(e, (function() {
                    t.editingTitle = !1
                }
                ))
            }
            ,
            o.prototype.finishEditTitle = function() {
                this.editingTitle && document.querySelector(".info-hotspot.editingTitle .title").blur()
            }
            ,
            o.prototype.editText = function() {
                var t = this;
                this.editingText = !0;
                var e = document.querySelector(".info-hotspot.editingText .text");
                i(e, (function() {
                    t.editingText = !1
                }
                ))
            }
            ,
            o.prototype.finishEditText = function() {
                if (this.editingText)
                    return element = document.querySelector(".info-hotspot.editingText .text"),
                    void element.blur()
            }
            ,
            o.prototype.isUnchanged = function() {
                return this._hotspot.isUnchanged()
            }
            ,
            o.prototype.startDrag = function(t, e) {
                this._previewer.interruptAutorotate(),
                this.dragging = e
            }
            ,
            o.prototype.click = function() {
                this._hotspot.target && this._hotspot.target.select()
            }
            ,
            o.prototype.remove = function() {
                this._previewer.interruptAutorotate(),
                window.confirm("Delete this hotspot?") && this._panorama.removeInfoHotspot(this._hotspot)
            }
            ,
            o.prototype._stopDrag = function() {
                this.dragging = !1
            }
            ,
            o.prototype.interruptAutorotate = function() {
                return this._previewer.interruptAutorotate(),
                !0
            }
            ,
            o.prototype._drag = function(t) {
                if (this.dragging) {
                    this._previewer.interruptAutorotate();
                    var e = this._view.coordinatesToScreen({
                        yaw: this._hotspot.yaw,
                        pitch: this._hotspot.pitch
                    })
                      , n = t.clientX - this.dragging.clientX
                      , r = t.clientY - this.dragging.clientY;
                    e.x += n,
                    e.y += r;
                    var i = this._view.screenToCoordinates(e);
                    this._hotspot.setCoordinates(i),
                    this.dragging = t
                }
            }
            ,
            o.prototype.hotspotInstance = function() {
                return this._hotspot
            }
            ,
            o.prototype.hotspotType = function() {
                return "info"
            }
            ,
            e.exports = o
        }
        , {
            "../oneShotEditContentEditable": 216,
            "knockout-es5": 17
        }],
        220: [function(t, e, n) {
            "use strict";
            var r = t("knockout-es5");
            function i(t, e, n, i) {
                this._hotspot = t,
                this._panorama = e,
                this._scene = n,
                this._previewer = i,
                this._view = n.view(),
                this.left = null,
                this.top = null,
                this.visible = !1,
                this.targetSelectorVisible = !this._hotspot.hasValidTarget(),
                this._updateTransform(),
                this._positionChangeHandler = this._updateTransform.bind(this),
                this._view.addEventListener("change", this._positionChangeHandler),
                this._hotspot.addEventListener("coordinatesChanged", this._positionChangeHandler),
                this.dragging = !1,
                this._mouseUpHandler = this._stopDrag.bind(this),
                window.addEventListener("mouseup", this._mouseUpHandler),
                this._mouseMoveHandler = this._drag.bind(this),
                window.addEventListener("mousemove", this._mouseMoveHandler),
                r.track(this)
            }
            i.prototype.destroy = function() {
                this._view.removeEventListener("change", this._positionChangeHandler),
                this._hotspot.removeEventListener("coordinatesChanged", this._positionChangeHandler),
                window.removeEventListener("mouseup", this._mouseUpHandler),
                window.removeEventListener("mousemove", this._mouseMoveHandler),
                this.left = null,
                this.top = null,
                this.visible = null,
                this.targetSelectorVisible = null
            }
            ,
            i.prototype._updateTransform = function() {
                var t = this._view.coordinatesToScreen({
                    yaw: this._hotspot.yaw,
                    pitch: this._hotspot.pitch
                });
                t ? (this.left = t.x + "px",
                this.top = t.y + "px",
                this.visible = !0) : this.visible = !1
            }
            ,
            i.prototype.imageTransform = function() {
                return "rotate(" + this._hotspot.rotation + "rad)"
            }
            ,
            i.prototype.targetName = function() {
                return this._hotspot.hasValidTarget() && this._hotspot.target.name
            }
            ,
            i.prototype.startDrag = function(t, e) {
                this._previewer.interruptAutorotate(),
                this.dragging = e
            }
            ,
            i.prototype.goToTarget = function() {
                this._hotspot.target && this._hotspot.target.select()
            }
            ,
            i.prototype.remove = function() {
                this._previewer.interruptAutorotate(),
                window.confirm("Delete this hotspot?") && this._panorama.removeLinkHotspot(this._hotspot)
            }
            ,
            i.prototype.editTarget = function() {
                this._previewer.interruptAutorotate(),
                this.targetSelectorVisible = !this.targetSelectorVisible
            }
            ,
            i.prototype.closeTargetSelector = function() {
                this.targetSelectorVisible = !1
            }
            ,
            i.prototype.selectTarget = function(t) {
                this._hotspot.setTarget(t)
            }
            ,
            i.prototype.targetIs = function(t) {
                return this._hotspot.target === t
            }
            ,
            i.prototype.rotateRight = function() {
                this._previewer.interruptAutorotate(),
                this._hotspot.offsetRotation(Math.PI / 4)
            }
            ,
            i.prototype.rotateLeft = function() {
                this._previewer.interruptAutorotate(),
                this._hotspot.offsetRotation(-Math.PI / 4)
            }
            ,
            i.prototype._stopDrag = function() {
                this.dragging = !1
            }
            ,
            i.prototype.interruptAutorotate = function() {
                this._previewer.interruptAutorotate()
            }
            ,
            i.prototype._drag = function(t) {
                if (this.dragging) {
                    this._previewer.interruptAutorotate();
                    var e = this._view.coordinatesToScreen({
                        yaw: this._hotspot.yaw,
                        pitch: this._hotspot.pitch
                    })
                      , n = t.clientX - this.dragging.clientX
                      , r = t.clientY - this.dragging.clientY;
                    e.x += n,
                    e.y += r;
                    var i = this._view.screenToCoordinates(e);
                    this._hotspot.setCoordinates(i),
                    this.dragging = t
                }
            }
            ,
            i.prototype.hotspotType = function() {
                return "link"
            }
            ,
            e.exports = i
        }
        , {
            "knockout-es5": 17
        }],
        221: [function(t, e, n) {
            "use strict";
            var r = t("marzipano")
              , i = r.DynamicAsset
              , o = r.util.cancelize;
            function s(t) {
                this._tileStore = t
            }
            s.prototype.loadAsset = function(t, e, n) {
                var r = this;
                return o((function(t) {
                    var n = !1
                      , o = document.createElement("canvas");
                    o.width = e._level.tileWidth(),
                    o.height = e._level.tileHeight(),
                    function(t, e) {
                        var n = t.getContext("2d")
                          , r = function(t) {
                            var e = t._level;
                            if (1 == e.numHorizontalTiles() && 1 == e.numVerticalTiles())
                                return 112 + 16 * a.indexOf(t.face);
                            var n = 144 + t.x % 2 * 16 + t.y % 2 * 32;
                            return "u" !== t.face && "d" !== t.face || (n += 5),
                            n
                        }(e).toString(16)
                          , i = "#" + r + r + r;
                        n.fillStyle = i,
                        n.fillRect(0, 0, t.width, t.height)
                    }(o, e);
                    var s = new i(o);
                    r._tileStore.addEventListener("tileAdded", l),
                    l();
                    var u = s.destroy.bind(s);
                    function l() {
                        if (!n) {
                            var t = r._tileStore.get(e.z, e.face, e.y, e.x);
                            if (t) {
                                n = !0;
                                var i = new Blob([t],{
                                    type: "image/jpeg"
                                })
                                  , a = URL.createObjectURL(i)
                                  , u = document.createElement("img");
                                u.src = a,
                                u.onload = function() {
                                    URL.revokeObjectURL(a),
                                    o.getContext("2d").drawImage(u, 0, 0),
                                    s.markDirty()
                                }
                                ,
                                u.onerror = function() {
                                    throw new Error("Bad JPEG data for tile")
                                }
                            }
                        }
                    }
                    s.destroy = function() {
                        r._tileStore.removeEventListener("tileAdded", l),
                        u()
                    }
                    ,
                    setTimeout((function() {
                        t(null, e, s)
                    }
                    ), 0)
                }
                ))(n)
            }
            ,
            s.prototype.unload = function() {}
            ;
            var a = "bdflru";
            e.exports = s
        }
        , {
            marzipano: 145
        }],
        222: [function(t, e, n) {
            "use strict";
            var r = t("../processingState/ProcessingStateFromWebworker");
            e.exports = function(t, e, n, i, o) {
                (n = n || {}).equirectangularWorkerSource = n.equirectangularWorkerSource || "equirect.worker.js",
                n.cubeWorkerSource = n.cubeWorkerSource || "cube.worker.js";
                var s = null;
                if ("equirectangular" === t.type)
                    s = n.equirectangularWorkerSource;
                else {
                    if ("cube" !== t.type)
                        return void o(new Error("Unknown panorama type " + t.type));
                    s = n.cubeWorkerSource
                }
                var a = new Worker(s)
                  , u = new r(a,t.processingState);
                function l(t) {
                    var e = t.data;
                    if ("tile" === e.msg && i(e.tileArray, e.level, e.face, e.v, e.h),
                    "done" === e.msg) {
                        h();
                        var n = {
                            count: e.count,
                            cubeMapPreview: e.cubeMapPreviewArray
                        };
                        o(null, n)
                    }
                }
                function c(t) {
                    t.message || t.target !== a || (t = new Error("Failed to initialize WebWorker")),
                    h(),
                    o(t)
                }
                function h() {
                    u.destroy(),
                    a.removeEventListener("message", l),
                    a.removeEventListener("error", c),
                    a.terminate()
                }
                return a.addEventListener("message", l),
                a.addEventListener("error", c),
                a.postMessage({
                    fileData: t.fileData,
                    levels: e,
                    cubeMapPreviewSize: n.cubeMapPreviewSize,
                    cubeMapPreviewFaceOrder: n.cubeMapPreviewFaceOrder
                }),
                function() {
                    h(),
                    o(new Error("cancelled"))
                }
            }
        }
        , {
            "../processingState/ProcessingStateFromWebworker": 227
        }],
        223: [function(t, e, n) {
            "use strict";
            var r = t("./process/processEquirect")
              , i = t("lodash/lang/isEqual")
              , o = (t("../../vendor/imgsize"),
            t("./workers"))
              , s = t("./util/once");
            e.exports = function(t, e) {
                e = s(e);
                var n = null
                  , a = function(t) {
                    if ("cube" === t.type) {
                        if (t.width !== t.height)
                            return new Error("Invalid size for cube face image: " + t.width + "x" + t.height)
                    } else if ("equirectangular" === t.type && t.width !== 2 * t.height)
                        return new Error("Invalid size for equirectangular image: " + t.width + "x" + t.height);
                    return null
                }(t);
                if (a)
                    return e(a);
                var u = function(t, e) {
                    if ("cube" === t.type)
                        return e;
                    if ("equirectangular" === t.type)
                        return e / 4
                }(t, t.width)
                  , l = function(t) {
                    var e, n = 512, r = 1.25, i = [];
                    function o(t) {
                        return n * Math.pow(2, t)
                    }
                    for (e = 0; o(e) <= t; e++)
                        i.push({
                            tileSize: n,
                            size: o(e)
                        });
                    o(e - 1) * r < t && i.push({
                        tileSize: n,
                        size: o(e)
                    });
                    0 === i.length && i.push({
                        tileSize: n,
                        size: n
                    });
                    return i
                }(u);
                t.setLevels(l, {
                    cubeMapPreviewSize: 256,
                    faceSize: u
                });
                var c = {
                    cubeMapPreviewSize: 256,
                    cubeMapPreviewFaceOrder: "bdflru",
                    cubeWorkerSource: o.cube,
                    equirectangularWorkerSource: o.equirect
                };
                return n = r(t, l, c, (function(e, n, r, o, s) {
                    t.addTile(function(t, e) {
                        for (var n = 0; n < t.length; n++)
                            if (i(t[n], e))
                                return n;
                        return null
                    }(t.levels, n), r, o, s, e)
                }
                ), (function(n, r) {
                    if (n)
                        return e(n);
                    t.setCubeMapPreview(r.cubeMapPreview),
                    e()
                }
                )),
                function() {
                    n && n(),
                    e.apply(null, arguments)
                }
            }
        }
        , {
            "../../vendor/imgsize": 246,
            "./process/processEquirect": 222,
            "./util/once": 241,
            "./workers": 243,
            "lodash/lang/isEqual": 85
        }],
        224: [function(t, e, n) {
            "use strict";
            e.exports = function() {
                return "<p class='title'>Processing complete!</p>",
                "<p>You may now <a href='javascript:app.getPanoramasArchiveFromNotification()'>export</a> your application</p>",
                "<p class='title'>Processing complete!</p><p>You may now <a href='javascript:app.getPanoramasArchiveFromNotification()'>export</a> your application</p>"
            }
        }
        , {}],
        225: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                return "<p class='title'>Failed to process panorama " + t.name + "</p>"
            }
        }
        , {}],
        226: [function(t, e, n) {
            "use strict";
            var r = t("../util/eventEmitter")
              , i = t("../util/clock")
              , o = t("lodash/object/extend")
              , s = t("lodash/collection/size")
              , a = t("./processingStateUserMessage")
              , u = t("./processingStateUserProgress")
              , l = t("knockout-es5")
              , c = "queued"
              , h = "started"
              , p = "successful"
              , f = "failed"
              , d = "cancelled";
            function m(t, e) {
                if (!t)
                    throw new Error("ProcessingStateNode name is required");
                this.name = t,
                this.status = c,
                this.startTime = null,
                this.endTime = null,
                this.data = o({}, e),
                this._children = [],
                l.track(this),
                l.track(this.data)
            }
            m.prototype.started = function(t) {
                if (this.status !== c)
                    throw new Error("Trying to set started on status " + this.status);
                return this.status = h,
                this.startTime = i(),
                o(this.data, t),
                this.emit("statusChanged"),
                this.emit("changed"),
                this
            }
            ,
            m.prototype.updateData = function(t) {
                return o(this.data, t),
                this.emit("dataChanged"),
                this.emit("changed"),
                this
            }
            ,
            m.prototype.successful = function(t) {
                return this._setEnded(p, t)
            }
            ,
            m.prototype.failed = function(t) {
                return this._setEnded(f, t)
            }
            ,
            m.prototype.cancelled = function(t) {
                return this._setEnded(d, t)
            }
            ,
            m.prototype.isQueued = function() {
                return this.status === c
            }
            ,
            m.prototype.isStarted = function() {
                return this.status === h
            }
            ,
            m.prototype.isSuccessful = function() {
                return this.status === p
            }
            ,
            m.prototype.isFailed = function() {
                return this.status === f
            }
            ,
            m.prototype.isCancelled = function() {
                return this.status === d
            }
            ,
            m.prototype.isEnded = function() {
                return this.isSuccessful() || this.isFailed() || this.isCancelled()
            }
            ,
            m.prototype._setEnded = function(t, e) {
                if ("started" !== this.status)
                    throw new Error("Trying to set " + t + " on status " + this.status);
                return o(this.data, e),
                this.endTime = i(),
                this.status = t,
                this.emit("statusChanged"),
                this.emit("changed"),
                this
            }
            ,
            m.prototype.addChildNode = function(t) {
                this._children.push(t),
                this.emit("childAdded"),
                this.emit("changed");
                var e = this;
                return t.addEventListener("changed", (function() {
                    e.emit("childChanged"),
                    e.emit("changed")
                }
                )),
                t
            }
            ,
            m.prototype.addChild = function(t, e) {
                var n = new m(t,e);
                return this.addChildNode(n),
                n
            }
            ,
            m.prototype.time = function() {
                return this.endTime - this.startTime
            }
            ,
            m.prototype.getChildrenByStatus = function(t) {
                return this._children.filter((function(e) {
                    return e.status === t
                }
                ))
            }
            ,
            m.prototype.getChildByStatus = function(t) {
                var e = this.getChildrenByStatus(t);
                return e.length > 0 ? e[0] : null
            }
            ,
            m.prototype.getStartedBranch = function() {
                var t = []
                  , e = this;
                do {
                    e.isStarted() && (t.push(e),
                    e = e.getChildByStatus("started"))
                } while (e);
                return t
            }
            ,
            m.prototype.toString = function() {
                var t = this.name + ": " + this.status;
                return this.endTime && (t += " (" + this.time().toFixed(1) + "ms)"),
                s(this.data) > 0 && (t += " " + JSON.stringify(this.data)),
                t
            }
            ,
            m.prototype.toStringTree = function(t) {
                t = t || 0;
                for (var e = "", n = 0; n < t; n++)
                    e += " ";
                return e += this.toString(),
                e += "\n",
                this._children.forEach((function(n) {
                    e += n.toStringTree(t + 2)
                }
                )),
                e
            }
            ,
            m.prototype.userMessage = function() {
                return a(this)
            }
            ,
            m.prototype.userProgress = function() {
                return this._progress = this._progress || 0,
                this._progress = Math.max(this._progress, u(this)),
                this._progress
            }
            ,
            m.prototype.toObject = function() {
                return {
                    name: this.name,
                    status: this.status,
                    startTime: this.startTime,
                    endTime: this.endTime,
                    data: this.data,
                    children: this._children.map((function(t) {
                        return t.toObject()
                    }
                    ))
                }
            }
            ,
            r(m),
            e.exports = m
        }
        , {
            "../util/clock": 233,
            "../util/eventEmitter": 237,
            "./processingStateUserMessage": 228,
            "./processingStateUserProgress": 229,
            "knockout-es5": 17,
            "lodash/collection/size": 31,
            "lodash/object/extend": 92
        }],
        227: [function(t, e, n) {
            "use strict";
            var r = t("./ProcessingState");
            function i(t, e) {
                this._root = e,
                this._nodes = {},
                this._worker = t;
                var n = this;
                this._handleMessage = function(t) {
                    var e = t.data
                      , i = t.data.msg;
                    if ("processing_state_create" === i)
                        n._nodes[e.id] = new r(e.name,e.createData);
                    else if ("processing_state" === i)
                        n._nodes[e.id][e.method](e.data);
                    else if ("processing_state_add_child_node_to_root" === i) {
                        var o = n._nodes[e.childId];
                        n._root.addChildNode(o)
                    } else if ("processing_state_add_child_node" === i) {
                        var s = n._nodes[e.childId];
                        n._nodes[e.parentId].addChildNode(s)
                    }
                }
                ,
                this._worker.addEventListener("message", this._handleMessage)
            }
            i.prototype.destroy = function() {
                this._worker.removeEventListener("message", this._handleMessage)
            }
            ,
            e.exports = i
        }
        , {
            "./ProcessingState": 226
        }],
        228: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                var e = t.status;
                return "queued" === e ? "Queued for processing" : "successful" === e ? "Successfully processed" : "failed" === e ? "Processing failed" : "cancelled" === e ? "Cancelled" : "started" === e ? function(t) {
                    var e = t.getChildByStatus("started");
                    if (!e)
                        return "Starting processing";
                    if ("read_and_decode_file" === e.name)
                        return "Loading file";
                    if ("process_faces" === e.name) {
                        var n = "Face " + (e.data.processedFaces + 1) + "/6: "
                          , r = e.getChildByStatus("started");
                        if (!r)
                            return "";
                        var i = r.getChildByStatus("started");
                        return i ? ("read_and_decode_file" === i.name && (n += "loading file"),
                        "equirectangular_to_face" === i.name && (n += "converting to cube"),
                        "generate_preview" === i.name && (n += "generating preview"),
                        "process_levels" === i.name && (n += function(t) {
                            var e = t.getChildByStatus("started");
                            if (!e)
                                return "";
                            var n = e.data.level.size
                              , r = e.data.generatedTiles
                              , i = e.data.totalTiles;
                            return "level " + n + " (" + (r + 1) + "/" + i + " tiles)"
                        }(i)),
                        n) : ""
                    }
                    return ""
                }(t) : ""
            }
        }
        , {}],
        229: [function(t, e, n) {
            "use strict";
            function r(t) {
                return t.data.generatedTiles / t.data.totalTiles
            }
            e.exports = function(t) {
                var e = t.status
                  , n = t.data.type;
                if ("successful" === e)
                    return 1;
                if ("queued" === e || "cancelled" === e || "failed" === e)
                    return null;
                if ("started" === e) {
                    if ("cube" === n)
                        return function(t) {
                            var e = t.getChildByStatus("started");
                            if (!e)
                                return 0;
                            if ("process_faces" === e.name) {
                                var n = e.data.totalFaces
                                  , i = e.data.processedFaces
                                  , o = e.getChildByStatus("started");
                                return o ? (i + function(t) {
                                    var e = t.getChildByStatus("started");
                                    if (!e)
                                        return 0;
                                    if ("read_and_decode_file" === e.name)
                                        return 0;
                                    if ("generate_preview" === e.name)
                                        return 1 / 4;
                                    if ("process_levels" === e.name) {
                                        var n, i = e.data.levelList, o = e.data.totalLevels, s = e.data.processedLevels, a = [];
                                        for (n = 0; n < o; n++)
                                            a.push(i[n].size * i[n].size);
                                        var u = 0;
                                        for (n = 0; n < o; n++)
                                            u += a[n];
                                        var l = 0;
                                        for (n = 0; n < s; n++)
                                            l += a[n];
                                        var c = e.getChildByStatus("started");
                                        if (!c)
                                            return 1 / 4 + 3 / 4 * l / u;
                                        var h = a[s];
                                        return 1 / 4 + 3 / 4 * (l + r(c) * h) / u
                                    }
                                    return 0
                                }(o)) / n : i / n
                            }
                            return 0
                        }(t);
                    if ("equirectangular" === n)
                        return function(t) {
                            var e = t.getChildByStatus("started");
                            if (!e)
                                return 0;
                            if ("read_and_decode_file" === e.name)
                                return 0;
                            if ("process_faces" === e.name) {
                                var n = e.data.totalFaces
                                  , i = e.data.processedFaces
                                  , o = e.getChildByStatus("started");
                                return o ? (i + function(t) {
                                    var e = t.getChildByStatus("started");
                                    if (!e)
                                        return 0;
                                    if ("equirectangular_to_face" === e.name)
                                        return 0;
                                    if ("generate_preview" === e.name)
                                        return 1 / 4;
                                    if ("process_levels" === e.name) {
                                        var n, i = e.data.levelList, o = e.data.totalLevels, s = e.data.processedLevels, a = [];
                                        for (n = 0; n < o; n++)
                                            a.push(i[n].size * i[n].size);
                                        var u = 0;
                                        for (n = 0; n < o; n++)
                                            u += a[n];
                                        var l = 0;
                                        for (n = 0; n < s; n++)
                                            l += a[n];
                                        var c = e.getChildByStatus("started");
                                        if (!c)
                                            return 1 / 4 + 3 / 4 * l / u;
                                        var h = a[s];
                                        return 1 / 4 + 3 / 4 * (l + r(c) * h) / u
                                    }
                                    return 0
                                }(o)) / n : i / n
                            }
                            return 0
                        }(t)
                }
                return null
            }
        }
        , {}],
        230: [function(t, e, n) {
            "use strict";
            var r = document.querySelector('link[rel="icon"]')
              , i = r.getAttribute("href")
              , o = null
              , s = null
              , a = new Image;
            a.onload = function() {
                (o = document.createElement("canvas")).width = a.naturalWidth,
                o.height = a.naturalHeight;
                var t = o.getContext("2d");
                t.drawImage(a, 0, 0),
                s = t.getImageData(0, 0, o.width, o.height)
            }
            ,
            a.src = r.getAttribute("href");
            var u = document.createElement("canvas")
              , l = u.getContext("2d");
            e.exports = function(t) {
                s && (null != t && t < 1 ? function(t) {
                    var e = o.width
                      , n = o.height;
                    u.width = e,
                    u.height = n;
                    for (var i = l.getImageData(0, 0, e, n), a = Math.floor(n * (1 - t)), c = 0; c < n; c++)
                        for (var h = 0; h < e; h++) {
                            var p = 4 * (c * e + h)
                              , f = s.data[p]
                              , d = s.data[p + 1]
                              , m = s.data[p + 2]
                              , v = s.data[p + 3];
                            if (c < a) {
                                var y = .2126 * f + .7152 * d + .0722 * m;
                                i.data[p] = y,
                                i.data[p + 1] = y,
                                i.data[p + 2] = y,
                                i.data[p + 3] = v
                            } else
                                i.data[p] = f,
                                i.data[p + 1] = d,
                                i.data[p + 2] = m,
                                i.data[p + 3] = v
                        }
                    l.putImageData(i, 0, 0),
                    r.href = u.toDataURL()
                }(t) : r.href = i)
            }
        }
        , {}],
        231: [function(t, e, n) {
            "use strict";
            e.exports = function(t, e) {
                t.addEventListener("dragenter", (function(t) {
                    t.preventDefault()
                }
                )),
                t.addEventListener("dragleave", (function(t) {
                    t.preventDefault()
                }
                )),
                t.addEventListener("dragover", (function(t) {
                    t.preventDefault()
                }
                )),
                t.addEventListener("drop", (function(t) {
                    t.preventDefault();
                    var n = function(t) {
                        return t.dataTransfer && t.dataTransfer.files && t.dataTransfer.files && t.dataTransfer.files.length > 0 ? t.dataTransfer.files : null
                    }(t);
                    n && e(n)
                }
                ))
            }
        }
        , {}],
        232: [function(t, e, n) {
            "use strict";
            var r = t("bowser").browser
              , i = t("./util/endianess");
            function o() {
                var t = parseFloat(r.version);
                return r.chrome && t >= 40 || r.firefox && t >= 35
            }
            function s() {
                var t = document.createElement("canvas");
                return !!(t.getContext && (t.getContext("webgl") || t.getContext("experimental-webgl")))
            }
            function a() {
                return "LE" === i()
            }
            var u = o() && s() && a();
            u || (document.getElementById("unsupported").style.display = "block"),
            o() || (document.getElementById("unsupported-browser").style.display = "block"),
            o() && !s() && (document.getElementById("unsupported-webgl").style.display = "block"),
            o() && s() && !a() && (document.getElementById("unsupported-endianess").style.display = "block"),
            e.exports = u
        }
        , {
            "./util/endianess": 235,
            bowser: 2
        }],
        233: [function(t, e, n) {
            "use strict";
            var r = (window.performance && window.performance.now ? function() {
                return window.performance.now()
            }
            : null) || function() {
                return Date.now()
            }
            ;
            e.exports = r
        }
        , {}],
        234: [function(t, e, n) {
            (function(n) {
                (function() {
                    t("setimmediate"),
                    e.exports = n
                }
                ).call(this)
            }
            ).call(this, t("timers").setImmediate)
        }
        , {
            setimmediate: 197,
            timers: 199
        }],
        235: [function(t, e, n) {
            e.exports = function() {
                var t = new ArrayBuffer(4)
                  , e = new Uint32Array(t)
                  , n = new Uint8Array(t);
                if (e[0] = 3735928559,
                239 == n[0])
                    return "LE";
                if (222 == n[0])
                    return "BE";
                throw new Error("unknown endianness")
            }
        }
        , {}],
        236: [function(t, e, n) {
            "use strict";
            var r = t("lodash/object/pick");
            e.exports = function(t) {
                return r(t, ["message", "colno", "lineno", "filename"])
            }
        }
        , {
            "lodash/object/pick": 95
        }],
        237: [function(t, e, n) {
            "use strict";
            function r() {}
            r.prototype.addEventListener = function(t, e) {
                var n = this.__events = this.__events || {};
                (n[t] = n[t] || []).push(e)
            }
            ,
            r.prototype.removeEventListener = function(t, e) {
                var n = (this.__events = this.__events || {})[t];
                if (n) {
                    var r = n.indexOf(e);
                    r >= 0 && n.splice(r, 1)
                }
            }
            ,
            r.prototype.emit = function(t, e, n, r, i, o) {
                var s = (this.__events = this.__events || {})[t];
                if (s)
                    for (var a = 0; a < s.length; a++) {
                        s[a].call(this, e, n, r, i, o)
                    }
            }
            ,
            e.exports = function(t) {
                for (var e = Object.keys(r.prototype), n = 0; n < e.length; n++) {
                    var i = e[n];
                    t.prototype[i] = r.prototype[i]
                }
            }
        }
        , {}],
        238: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                var e = /\.([^\.]*)$/.exec(t);
                return e ? e[1].toLowerCase() : ""
            }
        }
        , {}],
        239: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                var e = /^(.*)\.[^\.]*$/.exec(t);
                return e ? e[1] : ""
            }
        }
        , {}],
        240: [function(t, e, n) {
            "use strict";
            e.exports = function(t, e, n) {
                var r = new XMLHttpRequest;
                r.open("GET", t, !0),
                r.responseType = e,
                r.onload = function() {
                    200 <= this.status && this.status < 300 ? n(null, this.response) : n(new Error("Error loading " + t + " via XHR"))
                }
                ,
                r.onerror = function(t) {
                    n(t)
                }
                ,
                r.send()
            }
        }
        , {}],
        241: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                var e, n = !1;
                return function() {
                    return n || (n = !0,
                    e = t.apply(null, arguments)),
                    e
                }
            }
        }
        , {}],
        242: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                return t.replace(/ /g, "-").replace(/[^A-Za-z0-9\-\_]/g, "").toLowerCase()
            }
        }
        , {}],
        243: [function(t, e, n) {
            e.exports = {
                zip: document.querySelector('script[type="x-worker-zip"]').src,
                cube: document.querySelector('script[type="x-worker-cube"]').src,
                equirect: document.querySelector('script[type="x-worker-equirect"]').src
            }
        }
        , {}],
        244: [function(t, e, n) {
            "use strict";
            function r(t) {
                (t = t || {}).workerSource = t.workerSource,
                this._worker = new Worker(t.workerSource)
            }
            r.prototype.add = function(t, e, n, r) {
                this._worker.postMessage({
                    cmd: "file",
                    folders: t,
                    name: e,
                    data: n,
                    opts: r
                })
            }
            ,
            r.prototype.generate = function(t, e) {
                this._worker.onmessage = function(t) {
                    var n = t.data.zipFile;
                    e(null, n)
                }
                ,
                this._worker.postMessage({
                    cmd: "generate",
                    opts: t
                })
            }
            ,
            r.prototype.destroy = function() {
                this._worker.terminate()
            }
            ,
            e.exports = r
        }
        , {}],
        245: [function(t, e, n) {
            e.exports = "5d83318"
        }
        , {}],
        246: [function(t, e, n) {
            (function(r) {
                (function() {
                    !function(t) {
                        "object" == typeof n && void 0 !== e ? e.exports = t() : ("undefined" != typeof window ? window : void 0 !== r ? r : "undefined" != typeof self ? self : this).imgsize = t()
                    }((function() {
                        return function e(n, r, i) {
                            function o(a, u) {
                                if (!r[a]) {
                                    if (!n[a]) {
                                        var l = "function" == typeof t && t;
                                        if (!u && l)
                                            return l(a, !0);
                                        if (s)
                                            return s(a, !0);
                                        var c = new Error("Cannot find module '" + a + "'");
                                        throw c.code = "MODULE_NOT_FOUND",
                                        c
                                    }
                                    var h = r[a] = {
                                        exports: {}
                                    };
                                    n[a][0].call(h.exports, (function(t) {
                                        var e = n[a][1][t];
                                        return o(e || t)
                                    }
                                    ), h, h.exports, e, n, r, i)
                                }
                                return r[a].exports
                            }
                            for (var s = "function" == typeof t && t, a = 0; a < i.length; a++)
                                o(i[a]);
                            return o
                        }({
                            1: [function(t, e) {
                                "use strict";
                                function n(t, e, n) {
                                    var r = i(t);
                                    r ? r(e(t), n) : n(new Error("Unsupported file type"))
                                }
                                var r = t("./src/reader")
                                  , i = t("./src/handler");
                                e.exports = {
                                    sync: function(t) {
                                        var e, i;
                                        if (n(t, r.sync, (function(t, n) {
                                            e = t,
                                            i = n
                                        }
                                        )),
                                        e)
                                            throw e;
                                        return i
                                    },
                                    async: function(t, e) {
                                        n(t, r.async, e)
                                    }
                                }
                            }
                            , {
                                "./src/handler": 2,
                                "./src/reader": 5
                            }],
                            2: [function(t, e) {
                                "use strict";
                                var n = t("./jpeg")
                                  , r = t("./tiff");
                                e.exports = function(t) {
                                    var e = t.type
                                      , i = function(t) {
                                        var e = /\.([^\.]*)$/.exec(t);
                                        return e ? e[1].toLowerCase() : ""
                                    }(t.name);
                                    return "image/jpeg" === e ? n : "image/tiff" === e ? r : "jpg" === i || "jpeg" === i ? n : "tif" === i || "tiff" === i ? r : null
                                }
                            }
                            , {
                                "./jpeg": 3,
                                "./tiff": 6
                            }],
                            3: [function(t, e) {
                                "use strict";
                                function n(t, e, i) {
                                    t(e, 4, (function(o, s) {
                                        if (o)
                                            i(o);
                                        else if (s.length < 2 || 255 !== s[0])
                                            i(new Error("Not a valid JPEG file"));
                                        else {
                                            var a = s[1];
                                            if (255 !== a)
                                                if (192 > a || a > 207 || 196 === a || 204 === a) {
                                                    if (1 === a || 216 === a || 217 === a || a >= 208 && 215 >= a)
                                                        return void n(t, e + 2, i);
                                                    if (s.length < 4)
                                                        return void i(new Error("Not a valid JPEG file"));
                                                    var u = r(s, 2);
                                                    n(t, e + 2 + u, i)
                                                } else
                                                    !function(t, e, n) {
                                                        t(e, 9, (function(t, e) {
                                                            if (t)
                                                                n(t);
                                                            else if (e.length < 9)
                                                                n(new Error("Not a valid JPEG file"));
                                                            else {
                                                                var i = {
                                                                    height: r(e, 5),
                                                                    width: r(e, 7)
                                                                };
                                                                n(null, i)
                                                            }
                                                        }
                                                        ))
                                                    }(t, e, i);
                                            else
                                                n(t, e + 1, i)
                                        }
                                    }
                                    ))
                                }
                                var r = t("./parse").be16;
                                e.exports = function(t, e) {
                                    n(t, 0, e)
                                }
                            }
                            , {
                                "./parse": 4
                            }],
                            4: [function(t, e) {
                                "use strict";
                                e.exports = {
                                    be16: function(t, e) {
                                        return (t[e] << 8) + t[e + 1]
                                    },
                                    le16: function(t, e) {
                                        return (t[e + 1] << 8) + t[e]
                                    },
                                    be32: function(t, e) {
                                        return (t[e] << 24) + (t[e + 1] << 16) + (t[e + 2] << 8) + t[e + 3]
                                    },
                                    le32: function(t, e) {
                                        return (t[e + 3] << 24) + (t[e + 2] << 16) + (t[e + 1] << 8) + t[e]
                                    }
                                }
                            }
                            , {}],
                            5: [function(t, e) {
                                "use strict";
                                e.exports = {
                                    sync: function(t) {
                                        return function(e, n, r) {
                                            var i, o, s = t.slice(e, e + n), a = new FileReaderSync;
                                            try {
                                                o = new Uint8Array(a.readAsArrayBuffer(s))
                                            } catch (t) {
                                                i = t
                                            } finally {
                                                r(i, i ? o : null)
                                            }
                                        }
                                    },
                                    async: function(t) {
                                        return function(e, n, r) {
                                            var i = t.slice(e, e + n)
                                              , o = new FileReader;
                                            o.addEventListener("error", (function() {
                                                r(o.error)
                                            }
                                            )),
                                            o.addEventListener("load", (function() {
                                                r(null, new Uint8Array(o.result))
                                            }
                                            )),
                                            o.readAsArrayBuffer(i)
                                        }
                                    }
                                }
                            }
                            , {}],
                            6: [function(t, e) {
                                "use strict";
                                function n(t, e, n) {
                                    var u = e[0]
                                      , l = e[1]
                                      , c = 77 === u
                                      , h = {
                                        short: c ? i : o,
                                        long: c ? a : s
                                    };
                                    if (73 !== u && 77 !== u || u !== l || 42 !== h.short(e, 2))
                                        n(new Error("Not a valid TIFF file"));
                                    else {
                                        var p = h.long(e, 4);
                                        r(t, h, p, 2, n)
                                    }
                                }
                                function r(t, e, n, i, o) {
                                    t(n, i, (function(s, a) {
                                        if (s)
                                            o(s);
                                        else if (a.length < i)
                                            o(new Error("Not a valid TIFF file"));
                                        else {
                                            var u = e.short(a, 0)
                                              , l = 2 + 12 * u;
                                            l > i ? r(t, e, n, l, o) : function(t, e, n, r, i) {
                                                for (var o = null, s = null, a = 0; n > a; a++) {
                                                    var u = 12 * a
                                                      , l = e.short(r, u)
                                                      , c = 3 === e.short(r, u + 2) ? e.short : e.long;
                                                    256 === l && (o = c(r, u + 8)),
                                                    257 === l && (s = c(r, u + 8))
                                                }
                                                if (null === o && null === s)
                                                    return void i(new Error("Not a valid TIFF file"));
                                                i(null, {
                                                    width: o,
                                                    height: s
                                                })
                                            }(0, e, u, a.subarray(2), o)
                                        }
                                    }
                                    ))
                                }
                                var i = t("./parse").be16
                                  , o = t("./parse").le16
                                  , s = t("./parse").le32
                                  , a = t("./parse").be32;
                                e.exports = function(t, e) {
                                    !function(t, e) {
                                        t(0, 8, (function(r, i) {
                                            return r ? void e(r) : i.length < 8 ? void e(new Error("Not a valid TIFF file")) : void n(t, i, e)
                                        }
                                        ))
                                    }(t, e)
                                }
                            }
                            , {
                                "./parse": 4
                            }]
                        }, {}, [1])(1)
                    }
                    ))
                }
                ).call(this)
            }
            ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {}]
    }, {}, [205])(205)
}
));
