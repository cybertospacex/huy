(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[888], {
    7081: function(e, t, r) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
            return r(3510)
        }
        ])
    },
    7487: function(e, t, r) {
        "use strict";
        r.d(t, {
            Z: function() {
                return i
            }
        });
        var n = r(1527);
        r(787);
        let l = e=>{
            let {...t} = e;
            return (0,
            n.jsx)("h1", {
                style: {
                    fontSize: 35,
                    color: "white",
                    fontWeight: "bold"
                },
                children: "Eclipse"
            })
        }
        ;
        var i = l
    },
    9215: function(e, t, r) {
        "use strict";
        r.d(t, {
            Z: function() {
                return a
            }
        });
        var n = r(1527)
          , l = r(4603)
          , i = r.n(l);
        let o = e=>{
            let {children: t, href: r, ...l} = e;
            return (0,
            n.jsx)(i(), {
                href: r,
                ...l,
                className: "py-2.5 px-4 text-center rounded-full duration-150 ".concat((null == l ? void 0 : l.className) || ""),
                children: t
            })
        }
        ;
        var a = o
    },
    291: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getDomainLocale = function(e, t, r, n) {
            return !1
        }
        ,
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    4425: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var n = r(5321).Z
          , l = r(1322).Z
          , i = r(6687).Z
          , o = r(6239).Z
          , a = i(r(959))
          , s = l(r(1659))
          , c = r(5547)
          , u = r(8912)
          , d = r(8571);
        r(5404);
        var f = l(r(9425));
        let h = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };
        function p(e) {
            return void 0 !== e.default
        }
        function m(e) {
            return "number" == typeof e || void 0 === e ? e : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
        }
        function g(e, t, r, l, i, o, a) {
            if (!e || e["data-loaded-src"] === t)
                return;
            e["data-loaded-src"] = t;
            let s = "decode"in e ? e.decode() : Promise.resolve();
            s.catch(()=>{}
            ).then(()=>{
                if (e.parentNode) {
                    if ("blur" === r && o(!0),
                    null == l ? void 0 : l.current) {
                        let t = new Event("load");
                        Object.defineProperty(t, "target", {
                            writable: !1,
                            value: e
                        });
                        let r = !1
                          , i = !1;
                        l.current(n({}, t, {
                            nativeEvent: t,
                            currentTarget: e,
                            target: e,
                            isDefaultPrevented: ()=>r,
                            isPropagationStopped: ()=>i,
                            persist: ()=>{}
                            ,
                            preventDefault: ()=>{
                                r = !0,
                                t.preventDefault()
                            }
                            ,
                            stopPropagation: ()=>{
                                i = !0,
                                t.stopPropagation()
                            }
                        }))
                    }
                    (null == i ? void 0 : i.current) && i.current(e)
                }
            }
            )
        }
        let v = a.forwardRef((e,t)=>{
            var {imgAttributes: r, heightInt: l, widthInt: i, qualityInt: s, className: c, imgStyle: u, blurStyle: d, isLazy: f, fill: h, placeholder: p, loading: m, srcString: v, config: x, unoptimized: y, loader: b, onLoadRef: j, onLoadingCompleteRef: w, setBlurComplete: _, setShowAltText: C, onLoad: E, onError: N} = e
              , S = o(e, ["imgAttributes", "heightInt", "widthInt", "qualityInt", "className", "imgStyle", "blurStyle", "isLazy", "fill", "placeholder", "loading", "srcString", "config", "unoptimized", "loader", "onLoadRef", "onLoadingCompleteRef", "setBlurComplete", "setShowAltText", "onLoad", "onError"]);
            return m = f ? "lazy" : m,
            a.default.createElement(a.default.Fragment, null, a.default.createElement("img", Object.assign({}, S, r, {
                width: i,
                height: l,
                decoding: "async",
                "data-nimg": h ? "fill" : "1",
                className: c,
                loading: m,
                style: n({}, u, d),
                ref: a.useCallback(e=>{
                    t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)),
                    e && (N && (e.src = e.src),
                    e.complete && g(e, v, p, j, w, _, y))
                }
                , [v, p, j, w, _, N, y, t]),
                onLoad: e=>{
                    let t = e.currentTarget;
                    g(t, v, p, j, w, _, y)
                }
                ,
                onError: e=>{
                    C(!0),
                    "blur" === p && _(!0),
                    N && N(e)
                }
            })))
        }
        )
          , x = a.forwardRef((e,t)=>{
            let r, l;
            var i, {src: g, sizes: x, unoptimized: y=!1, priority: b=!1, loading: j, className: w, quality: _, width: C, height: E, fill: N, style: S, onLoad: k, onLoadingComplete: M, placeholder: z="empty", blurDataURL: P, layout: O, objectFit: L, objectPosition: R, lazyBoundary: I, lazyRoot: A} = e, B = o(e, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "fill", "style", "onLoad", "onLoadingComplete", "placeholder", "blurDataURL", "layout", "objectFit", "objectPosition", "lazyBoundary", "lazyRoot"]);
            let T = a.useContext(d.ImageConfigContext)
              , D = a.useMemo(()=>{
                let e = h || T || u.imageConfigDefault
                  , t = [...e.deviceSizes, ...e.imageSizes].sort((e,t)=>e - t)
                  , r = e.deviceSizes.sort((e,t)=>e - t);
                return n({}, e, {
                    allSizes: t,
                    deviceSizes: r
                })
            }
            , [T])
              , Z = B
              , F = Z.loader || f.default;
            delete Z.loader;
            let H = "__next_img_default"in F;
            if (H) {
                if ("custom" === D.loader)
                    throw Error('Image with src "'.concat(g, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")
            } else {
                let e = F;
                F = t=>{
                    let {config: r} = t
                      , n = o(t, ["config"]);
                    return e(n)
                }
            }
            if (O) {
                "fill" === O && (N = !0);
                let e = {
                    intrinsic: {
                        maxWidth: "100%",
                        height: "auto"
                    },
                    responsive: {
                        width: "100%",
                        height: "auto"
                    }
                }[O];
                e && (S = n({}, S, e));
                let t = {
                    responsive: "100vw",
                    fill: "100vw"
                }[O];
                t && !x && (x = t)
            }
            let V = ""
              , W = m(C)
              , U = m(E);
            if ("object" == typeof (i = g) && (p(i) || void 0 !== i.src)) {
                let e = p(g) ? g.default : g;
                if (!e.src)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));
                if (!e.height || !e.width)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));
                if (r = e.blurWidth,
                l = e.blurHeight,
                P = P || e.blurDataURL,
                V = e.src,
                !N) {
                    if (W || U) {
                        if (W && !U) {
                            let t = W / e.width;
                            U = Math.round(e.height * t)
                        } else if (!W && U) {
                            let t = U / e.height;
                            W = Math.round(e.width * t)
                        }
                    } else
                        W = e.width,
                        U = e.height
                }
            }
            let q = !b && ("lazy" === j || void 0 === j);
            ((g = "string" == typeof g ? g : V).startsWith("data:") || g.startsWith("blob:")) && (y = !0,
            q = !1),
            D.unoptimized && (y = !0),
            H && g.endsWith(".svg") && !D.dangerouslyAllowSVG && (y = !0);
            let[G,K] = a.useState(!1)
              , [J,X] = a.useState(!1)
              , Q = m(_)
              , $ = Object.assign(N ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: L,
                objectPosition: R
            } : {}, J ? {} : {
                color: "transparent"
            }, S)
              , Y = "blur" === z && P && !G ? {
                backgroundSize: $.objectFit || "cover",
                backgroundPosition: $.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: 'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({
                    widthInt: W,
                    heightInt: U,
                    blurWidth: r,
                    blurHeight: l,
                    blurDataURL: P
                }), '")')
            } : {}
              , ee = function(e) {
                let {config: t, src: r, unoptimized: n, width: l, quality: i, sizes: o, loader: a} = e;
                if (n)
                    return {
                        src: r,
                        srcSet: void 0,
                        sizes: void 0
                    };
                let {widths: s, kind: c} = function(e, t, r) {
                    let {deviceSizes: n, allSizes: l} = e;
                    if (r) {
                        let e = /(^|\s)(1?\d?\d)vw/g
                          , t = [];
                        for (let n; n = e.exec(r); n)
                            t.push(parseInt(n[2]));
                        if (t.length) {
                            let e = .01 * Math.min(...t);
                            return {
                                widths: l.filter(t=>t >= n[0] * e),
                                kind: "w"
                            }
                        }
                        return {
                            widths: l,
                            kind: "w"
                        }
                    }
                    if ("number" != typeof t)
                        return {
                            widths: n,
                            kind: "w"
                        };
                    let i = [...new Set([t, 2 * t].map(e=>l.find(t=>t >= e) || l[l.length - 1]))];
                    return {
                        widths: i,
                        kind: "x"
                    }
                }(t, l, o)
                  , u = s.length - 1;
                return {
                    sizes: o || "w" !== c ? o : "100vw",
                    srcSet: s.map((e,n)=>"".concat(a({
                        config: t,
                        src: r,
                        quality: i,
                        width: e
                    }), " ").concat("w" === c ? e : n + 1).concat(c)).join(", "),
                    src: a({
                        config: t,
                        src: r,
                        quality: i,
                        width: s[u]
                    })
                }
            }({
                config: D,
                src: g,
                unoptimized: y,
                width: W,
                quality: Q,
                sizes: x,
                loader: F
            })
              , et = g
              , er = {
                imageSrcSet: ee.srcSet,
                imageSizes: ee.sizes,
                crossOrigin: Z.crossOrigin
            }
              , en = a.useRef(k);
            a.useEffect(()=>{
                en.current = k
            }
            , [k]);
            let el = a.useRef(M);
            a.useEffect(()=>{
                el.current = M
            }
            , [M]);
            let ei = n({
                isLazy: q,
                imgAttributes: ee,
                heightInt: U,
                widthInt: W,
                qualityInt: Q,
                className: w,
                imgStyle: $,
                blurStyle: Y,
                loading: j,
                config: D,
                fill: N,
                unoptimized: y,
                placeholder: z,
                loader: F,
                srcString: et,
                onLoadRef: en,
                onLoadingCompleteRef: el,
                setBlurComplete: K,
                setShowAltText: X
            }, Z);
            return a.default.createElement(a.default.Fragment, null, a.default.createElement(v, Object.assign({}, ei, {
                ref: t
            })), b ? a.default.createElement(s.default, null, a.default.createElement("link", Object.assign({
                key: "__nimg-" + ee.src + ee.srcSet + ee.sizes,
                rel: "preload",
                as: "image",
                href: ee.srcSet ? void 0 : ee.src
            }, er))) : null)
        }
        );
        t.default = x,
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    264: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var n = r(1322).Z
          , l = r(6239).Z
          , i = n(r(959))
          , o = r(1984)
          , a = r(5014)
          , s = r(620)
          , c = r(3505)
          , u = r(2963)
          , d = r(3730)
          , f = r(291)
          , h = r(2938);
        let p = new Set;
        function m(e, t, r, n) {
            if (o.isLocalURL(t)) {
                if (!n.bypassPrefetchedCheck) {
                    let l = void 0 !== n.locale ? n.locale : "locale"in e ? e.locale : void 0
                      , i = t + "%" + r + "%" + l;
                    if (p.has(i))
                        return;
                    p.add(i)
                }
                Promise.resolve(e.prefetch(t, r, n)).catch(e=>{}
                )
            }
        }
        function g(e) {
            return "string" == typeof e ? e : a.formatUrl(e)
        }
        let v = i.default.forwardRef(function(e, t) {
            let r, n;
            let {href: a, as: p, children: v, prefetch: x, passHref: y, replace: b, shallow: j, scroll: w, locale: _, onClick: C, onMouseEnter: E, onTouchStart: N, legacyBehavior: S=!1} = e
              , k = l(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
            r = v,
            S && ("string" == typeof r || "number" == typeof r) && (r = i.default.createElement("a", null, r));
            let M = !1 !== x
              , z = i.default.useContext(c.RouterContext)
              , P = i.default.useContext(u.AppRouterContext)
              , O = null != z ? z : P
              , L = !z
              , {href: R, as: I} = i.default.useMemo(()=>{
                if (!z) {
                    let e = g(a);
                    return {
                        href: e,
                        as: p ? g(p) : e
                    }
                }
                let[e,t] = o.resolveHref(z, a, !0);
                return {
                    href: e,
                    as: p ? o.resolveHref(z, p) : t || e
                }
            }
            , [z, a, p])
              , A = i.default.useRef(R)
              , B = i.default.useRef(I);
            S && (n = i.default.Children.only(r));
            let T = S ? n && "object" == typeof n && n.ref : t
              , [D,Z,F] = d.useIntersection({
                rootMargin: "200px"
            })
              , H = i.default.useCallback(e=>{
                (B.current !== I || A.current !== R) && (F(),
                B.current = I,
                A.current = R),
                D(e),
                T && ("function" == typeof T ? T(e) : "object" == typeof T && (T.current = e))
            }
            , [I, T, R, F, D]);
            i.default.useEffect(()=>{
                O && Z && M && m(O, R, I, {
                    locale: _
                })
            }
            , [I, R, Z, _, M, null == z ? void 0 : z.locale, O]);
            let V = {
                ref: H,
                onClick(e) {
                    S || "function" != typeof C || C(e),
                    S && n.props && "function" == typeof n.props.onClick && n.props.onClick(e),
                    O && !e.defaultPrevented && function(e, t, r, n, l, a, s, c, u, d) {
                        let {nodeName: f} = e.currentTarget
                          , h = "A" === f.toUpperCase();
                        if (h && (function(e) {
                            let {target: t} = e.currentTarget;
                            return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                        }(e) || !o.isLocalURL(r)))
                            return;
                        e.preventDefault();
                        let p = ()=>{
                            "beforePopState"in t ? t[l ? "replace" : "push"](r, n, {
                                shallow: a,
                                locale: c,
                                scroll: s
                            }) : t[l ? "replace" : "push"](n || r, {
                                forceOptimisticNavigation: !d
                            })
                        }
                        ;
                        u ? i.default.startTransition(p) : p()
                    }(e, O, R, I, b, j, w, _, L, M)
                },
                onMouseEnter(e) {
                    S || "function" != typeof E || E(e),
                    S && n.props && "function" == typeof n.props.onMouseEnter && n.props.onMouseEnter(e),
                    O && (M || !L) && m(O, R, I, {
                        locale: _,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    })
                },
                onTouchStart(e) {
                    S || "function" != typeof N || N(e),
                    S && n.props && "function" == typeof n.props.onTouchStart && n.props.onTouchStart(e),
                    O && (M || !L) && m(O, R, I, {
                        locale: _,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    })
                }
            };
            if (!S || y || "a" === n.type && !("href"in n.props)) {
                let e = void 0 !== _ ? _ : null == z ? void 0 : z.locale
                  , t = (null == z ? void 0 : z.isLocaleDomain) && f.getDomainLocale(I, e, null == z ? void 0 : z.locales, null == z ? void 0 : z.domainLocales);
                V.href = t || h.addBasePath(s.addLocale(I, e, null == z ? void 0 : z.defaultLocale))
            }
            return S ? i.default.cloneElement(n, V) : i.default.createElement("a", Object.assign({}, k, V), r)
        });
        t.default = v,
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    3730: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useIntersection = function(e) {
            let {rootRef: t, rootMargin: r, disabled: s} = e
              , c = s || !i
              , [u,d] = n.useState(!1)
              , f = n.useRef(null)
              , h = n.useCallback(e=>{
                f.current = e
            }
            , []);
            n.useEffect(()=>{
                if (i) {
                    if (c || u)
                        return;
                    let e = f.current;
                    if (e && e.tagName) {
                        let n = function(e, t, r) {
                            let {id: n, observer: l, elements: i} = function(e) {
                                let t;
                                let r = {
                                    root: e.root || null,
                                    margin: e.rootMargin || ""
                                }
                                  , n = a.find(e=>e.root === r.root && e.margin === r.margin);
                                if (n && (t = o.get(n)))
                                    return t;
                                let l = new Map
                                  , i = new IntersectionObserver(e=>{
                                    e.forEach(e=>{
                                        let t = l.get(e.target)
                                          , r = e.isIntersecting || e.intersectionRatio > 0;
                                        t && r && t(r)
                                    }
                                    )
                                }
                                ,e);
                                return t = {
                                    id: r,
                                    observer: i,
                                    elements: l
                                },
                                a.push(r),
                                o.set(r, t),
                                t
                            }(r);
                            return i.set(e, t),
                            l.observe(e),
                            function() {
                                if (i.delete(e),
                                l.unobserve(e),
                                0 === i.size) {
                                    l.disconnect(),
                                    o.delete(n);
                                    let e = a.findIndex(e=>e.root === n.root && e.margin === n.margin);
                                    e > -1 && a.splice(e, 1)
                                }
                            }
                        }(e, e=>e && d(e), {
                            root: null == t ? void 0 : t.current,
                            rootMargin: r
                        });
                        return n
                    }
                } else if (!u) {
                    let e = l.requestIdleCallback(()=>d(!0));
                    return ()=>l.cancelIdleCallback(e)
                }
            }
            , [c, r, t, u, f.current]);
            let p = n.useCallback(()=>{
                d(!1)
            }
            , []);
            return [h, u, p]
        }
        ;
        var n = r(959)
          , l = r(6480);
        let i = "function" == typeof IntersectionObserver
          , o = new Map
          , a = [];
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    5547: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getImageBlurSvg = function(e) {
            let {widthInt: t, heightInt: r, blurWidth: n, blurHeight: l, blurDataURL: i} = e
              , o = n || t
              , a = l || r
              , s = i.startsWith("data:image/jpeg") ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%" : "";
            return o && a ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(o, " ").concat(a, "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n && l ? "1" : "20", "'/%3E").concat(s, "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i, "'/%3E%3C/svg%3E") : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(i, "'/%3E%3C/svg%3E")
        }
    },
    9425: function(e, t) {
        "use strict";
        function r(e) {
            let {config: t, src: r, width: n, quality: l} = e;
            return "".concat(t.path, "?url=").concat(encodeURIComponent(r), "&w=").concat(n, "&q=").concat(l || 75)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        r.__next_img_default = !0,
        t.default = r
    },
    3510: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            default: function() {
                return m
            }
        });
        var n = r(1527)
          , l = r(7559)
          , i = r.n(l);
        let o = ()=>(0,
        n.jsx)("footer", {
            className: "mt-20",
            children: (0,
            n.jsx)("div", {
                className: "custom-screen",
                children: (0,
                n.jsxs)("div", {
                    className: "mt-10 py-8 border-t border-gray-800 items-center justify-between sm:flex",
                    children: [(0,
                    n.jsx)("p", {
                        className: "text-gray-400 text-center",
                        children: "\xa9 2023 Inside Labs. All rights reserved."
                    }), (0,
                    n.jsxs)("div", {
                        className: "flex items-center justify-center gap-x-6 text-gray-500 mt-6 sm:mt-0",
                        children: [(0,
                        n.jsx)("a", {
                            href: "https://twitter.com/InsideLabsInc?t=dVl3FS-Kuhj6JNfL3z1HOg&s=08",
                            "aria-label": "social media",
                            children: (0,
                            n.jsxs)("svg", {
                                className: "w-6 h-6 hover:text-gray-200 duration-150",
                                fill: "none",
                                viewBox: "0 0 48 48",
                                children: [(0,
                                n.jsx)("g", {
                                    "clip-path": "url(#clip0_17_80)",
                                    children: (0,
                                    n.jsx)("path", {
                                        fill: "currentColor",
                                        d: "M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z"
                                    })
                                }), (0,
                                n.jsx)("defs", {
                                    children: (0,
                                    n.jsx)("clipPath", {
                                        id: "clip0_17_80",
                                        children: (0,
                                        n.jsx)("path", {
                                            fill: "currentColor",
                                            d: "M0 0h48v48H0z"
                                        })
                                    })
                                })]
                            })
                        }), (0,
                        n.jsx)("a", {
                            href: "https://www.linkedin.com/company/inside-labs/",
                            "aria-label": "social media",
                            children: (0,
                            n.jsxs)("svg", {
                                className: "w-6 h-6 hover:text-gray-200 duration-150",
                                fill: "none",
                                viewBox: "0 0 48 48",
                                children: [(0,
                                n.jsx)("g", {
                                    "clip-path": "url(#clip0_17_68)",
                                    children: (0,
                                    n.jsx)("path", {
                                        fill: "currentColor",
                                        d: "M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z"
                                    })
                                }), (0,
                                n.jsx)("defs", {
                                    children: (0,
                                    n.jsx)("clipPath", {
                                        id: "clip0_17_68",
                                        children: (0,
                                        n.jsx)("path", {
                                            fill: "currentColor",
                                            d: "M0 0h48v48H0z"
                                        })
                                    })
                                })]
                            })
                        })]
                    })]
                })
            })
        });
        var a = r(4603)
          , s = r.n(a)
          , c = r(959)
          , u = r(7487);
        let d = e=>{
            let {onClick: t, state: r, menuBtnEl: l} = e;
            return (0,
            n.jsxs)("div", {
                className: "flex items-center justify-between py-5 md:block",
                children: [(0,
                n.jsx)(s(), {
                    href: "/",
                    children: (0,
                    n.jsx)(u.Z, {})
                }), (0,
                n.jsx)("div", {
                    className: "md:hidden",
                    children: (0,
                    n.jsx)("button", {
                        role: "button",
                        "aria-label": "Open the menu",
                        ref: l || null,
                        className: "text-gray-400 hover:text-gray-50",
                        onClick: t,
                        children: r ? (0,
                        n.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-6 w-6",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            children: (0,
                            n.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                clipRule: "evenodd"
                            })
                        }) : (0,
                        n.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: 1.5,
                            stroke: "currentColor",
                            className: "w-6 h-6",
                            children: (0,
                            n.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            })
                        })
                    })
                })]
            })
        }
        ;
        var f = r(9215);
        let h = ()=>{
            let[e,t] = (0,
            c.useState)(!1)
              , r = (0,
            c.useRef)();
            return (0,
            c.useEffect)(()=>{
                document.onclick = e=>{
                    let n = e.target;
                    r.current.contains(n) || t(!1)
                }
            }
            , []),
            (0,
            n.jsxs)("header", {
                className: "relative",
                children: [(0,
                n.jsx)("div", {
                    className: "custom-screen md:hidden",
                    children: (0,
                    n.jsx)(d, {
                        menuBtnEl: r,
                        state: e,
                        onClick: ()=>t(!e)
                    })
                }), (0,
                n.jsx)("nav", {
                    className: "pb-5 md:text-sm md:static md:block ".concat(e ? "bg-gray-900 absolute z-20 top-0 inset-x-0 rounded-b-2xl shadow-xl md:bg-gray-900" : "hidden"),
                    children: (0,
                    n.jsxs)("div", {
                        className: "custom-screen items-center md:flex",
                        children: [(0,
                        n.jsx)(d, {
                            state: e,
                            onClick: ()=>t(!e)
                        }), (0,
                        n.jsxs)("div", {
                            className: "flex-1 items-center mt-8 text-gray-300 md:font-medium md:mt-0 md:flex ".concat(e ? "block" : "hidden", " "),
                            children: [(0,
                            n.jsx)("ul", {
                                className: "flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0",
                                children: [{
                                    name: "Features",
                                    href: "/#features"
                                }, {
                                    name: "Pricing",
                                    href: "/#pricing"
                                }, {
                                    name: "FAQs",
                                    href: "/#faqs"
                                }].map((e,t)=>(0,
                                n.jsx)("li", {
                                    className: "hover:text-gray-50",
                                    children: (0,
                                    n.jsx)(s(), {
                                        href: e.href,
                                        className: "block",
                                        children: e.name
                                    })
                                }, t))
                            }), (0,
                            n.jsx)("div", {
                                className: "gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0",
                                children: (0,
                                n.jsxs)(f.Z, {
                                    href: "/#pricing",
                                    className: "flex items-center justify-center gap-x-1 text-sm text-white font-medium custom-btn-bg border border-gray-500 active:bg-gray-900 md:inline-flex",
                                    children: ["Start now", (0,
                                    n.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 20 20",
                                        fill: "currentColor",
                                        className: "w-5 h-5",
                                        children: (0,
                                        n.jsx)("path", {
                                            fillRule: "evenodd",
                                            d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
                                            clipRule: "evenodd"
                                        })
                                    })]
                                })
                            })]
                        })]
                    })
                })]
            })
        }
          , p = e=>{
            let {children: t} = e;
            return (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsxs)(i(), {
                    children: [(0,
                    n.jsx)("title", {
                        children: "ECLIPSE"
                    }), (0,
                    n.jsx)("meta", {
                        name: "description",
                        content: "Gain control of your finances with Eclipse."
                    }), (0,
                    n.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    })]
                }), (0,
                n.jsx)(h, {}), (0,
                n.jsx)("main", {
                    children: t
                }), (0,
                n.jsx)(o, {})]
            })
        }
        ;
        function m(e) {
            let {Component: t, pageProps: r} = e;
            return (0,
            n.jsx)(p, {
                children: (0,
                n.jsx)(t, {
                    ...r
                })
            })
        }
        r(1511)
    },
    1511: function() {},
    7559: function(e, t, r) {
        e.exports = r(1659)
    },
    787: function(e, t, r) {
        e.exports = r(4425)
    },
    4603: function(e, t, r) {
        e.exports = r(264)
    }
}, function(e) {
    var t = function(t) {
        return e(e.s = t)
    };
    e.O(0, [774, 179], function() {
        return t(7081),
        t(2970)
    }),
    _N_E = e.O()
}
]);
