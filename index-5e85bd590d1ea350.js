(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {
    5246: function(e, t, s) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return s(7760)
        }
        ])
    },
    6854: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return r
            }
        });
        var a = s(1527);
        let n = e=>{
            let {children: t, ...s} = e;
            return (0,
            a.jsx)("button", {
                role: "button",
                ...s,
                className: "".concat(s.className || "", " px-4 py-2.5 font-medium text-sm text-center duration-150"),
                children: t
            })
        }
        ;
        var r = n
    },
    7760: function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, {
            default: function() {
                return A
            }
        });
        var a = s(1527);
        let n = e=>{
            let {children: t, ...s} = e;
            return (0,
            a.jsxs)("div", {
                ...s,
                className: "relative ".concat(s.className || ""),
                children: [(0,
                a.jsx)("div", {
                    className: "absolute m-auto blur-[160px] ".concat(s.wrapperClassName || ""),
                    style: {
                        background: "linear-gradient(180deg, #7C3AED 0%, rgba(152, 103, 240, 0.984375) 0.01%, rgba(237, 78, 80, 0.2) 100%)"
                    }
                }), (0,
                a.jsx)("div", {
                    className: "relative",
                    children: t
                })]
            })
        }
        ;
        var r = s(787)
          , l = s.n(r)
          , i = s(9215)
          , o = {
            src: "/_next/static/media/bg-pattern.5aa07776.webp",
            height: 1358,
            width: 2880,
            blurDataURL: "data:image/webp;base64,UklGRmgAAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAAAAIICwsHAgAEDxwlJRsPBAQPGyUlHA8EAAIHCwsIAgAAVlA4ICAAAABwAQCdASoIAAQAAkA4JZQCdAFAAAD++HybY9wDxwAAAA==",
            blurWidth: 8,
            blurHeight: 4
        }
          , c = s(959);
        let d = e=>"function" == typeof e
          , u = {
            any: 0,
            all: 1
        }
          , x = e=>{
            let {children: t, className: s, isInviewState: {trueState: a="", falseState: n=""}} = e
              , r = (0,
            c.useRef)(null)
              , l = function(e, {root: t, margin: s, amount: a, once: n=!1}={}) {
                let[r,l] = (0,
                c.useState)(!1);
                return (0,
                c.useEffect)(()=>{
                    if (!e.current || n && r)
                        return;
                    let i = ()=>(l(!0),
                    n ? void 0 : ()=>l(!1))
                      , o = {
                        root: t && t.current || void 0,
                        margin: s,
                        amount: "some" === a ? "any" : a
                    };
                    return function(e, t, {root: s, margin: a, amount: n="any"}={}) {
                        var r, l, i;
                        if ("undefined" == typeof IntersectionObserver)
                            return ()=>{}
                            ;
                        let o = ("string" == typeof (r = e) ? l ? (null !== (i = l[r]) && void 0 !== i || (l[r] = document.querySelectorAll(r)),
                        r = l[r]) : r = document.querySelectorAll(r) : r instanceof Element && (r = [r]),
                        Array.from(r || []))
                          , c = new WeakMap
                          , x = e=>{
                            e.forEach(e=>{
                                let s = c.get(e.target);
                                if (e.isIntersecting !== Boolean(s)) {
                                    if (e.isIntersecting) {
                                        let s = t(e);
                                        d(s) ? c.set(e.target, s) : p.unobserve(e.target)
                                    } else
                                        s && (s(e),
                                        c.delete(e.target))
                                }
                            }
                            )
                        }
                          , p = new IntersectionObserver(x,{
                            root: s,
                            rootMargin: a,
                            threshold: "number" == typeof n ? n : u[n]
                        });
                        return o.forEach(e=>p.observe(e)),
                        ()=>p.disconnect()
                    }(e.current, i, o)
                }
                , [t, e, s, n]),
                r
            }(r, {
                once: !0
            });
            return (0,
            c.cloneElement)(t, {
                ref: r,
                className: "".concat(t.props.className || "", " ").concat(s || "", " ").concat(l ? a : n)
            })
        }
          , p = ()=>(0,
        a.jsx)("section", {
            children: (0,
            a.jsx)(n, {
                wrapperClassName: "max-w-xs h-[13rem] top-12 inset-0",
                children: (0,
                a.jsxs)("div", {
                    className: "custom-screen py-28 relative",
                    children: [(0,
                    a.jsx)(x, {
                        className: "duration-1000 delay-300",
                        isInviewState: {
                            trueState: "opacity-1",
                            falseState: "opacity-0 translate-y-6"
                        },
                        children: (0,
                        a.jsxs)("div", {
                            className: "relative z-10",
                            children: [(0,
                            a.jsxs)("div", {
                                className: "max-w-xl mx-auto text-center",
                                children: [(0,
                                a.jsx)("h2", {
                                    className: "text-gray-50 text-3xl font-semibold sm:text-4xl",
                                    children: "Build a head start to your finances"
                                }), (0,
                                a.jsx)("p", {
                                    className: "mt-5 text-gray-300",
                                    children: "Eclipse is the perfect answer! Our platform enables you to create wealth, manage your expenses, stay up to date with the latest financial news, and get ready for upcoming tax season."
                                })]
                            }), (0,
                            a.jsx)("div", {
                                className: "mt-5 flex justify-center font-medium text-sm",
                                children: (0,
                                a.jsxs)(i.Z, {
                                    href: "/#pricing",
                                    className: "flex items-center text-white bg-purple-600 hover:bg-purple-500 active:bg-purple-700 ",
                                    children: ["Start now", (0,
                                    a.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 20 20",
                                        fill: "currentColor",
                                        className: "w-5 h-5",
                                        children: (0,
                                        a.jsx)("path", {
                                            fillRule: "evenodd",
                                            d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
                                            clipRule: "evenodd"
                                        })
                                    })]
                                })
                            })]
                        })
                    }), (0,
                    a.jsx)(l(), {
                        src: o,
                        className: "w-full h-full object-cover m-auto absolute inset-0 pointer-events-none",
                        alt: "Background pattern"
                    })]
                })
            })
        })
          , m = e=>{
            let {children: t, ...s} = e;
            return (0,
            a.jsx)("section", {
                ...s,
                className: "py-16 lg:py-24 ".concat(s.className || ""),
                children: t
            })
        }
          , h = [{
            q: "What is automated expense tracking?",
            a: "Automated expense tracking is a feature that allows you to track your expenses automatically with a single click. It is a great way to keep track of your spending and make sure you are not overspending."
        }, {
            q: "What kind of investment opportunities does Eclipse provide?",
            a: "Eclipse provides you with the best investment opportunities in Mutual Funds and FDs."
        }, {
            q: "What is Eclipse News?",
            a: "Eclipse news is a platform where you can get the latest financial news and market trends."
        }, {
            q: "What is the advance tax calculator?",
            a: "The advance tax calculator is a tool that helps you calculate your tax liability in advance. It is a great way to make sure you are not paying more tax than you need to."
        }, {
            q: "What is Eclipse Education(for users)?",
            a: "Eclipse Education is a platform where you can learn about financial literacy and get tips on how to manage your finances better."
        }, {
            q: "What is Eclipse Education(for writers)?",
            a: "Eclipse invites writers/bloggers/influencers to showcase their work on our platform and help us increasing the financial literacy of our users."
        }]
          , g = ()=>(0,
        a.jsx)(m, {
            id: "faqs",
            children: (0,
            a.jsxs)("div", {
                className: "custom-screen text-gray-300",
                children: [(0,
                a.jsxs)("div", {
                    className: "max-w-xl text-center xl:mx-auto",
                    children: [(0,
                    a.jsx)("h2", {
                        className: "text-gray-50 text-3xl font-extrabold sm:text-4xl",
                        children: "Everything you need to know"
                    }), (0,
                    a.jsx)("p", {
                        className: "mt-3",
                        children: "Here are the most questions people always ask about."
                    })]
                }), (0,
                a.jsx)("div", {
                    className: "mt-12",
                    children: (0,
                    a.jsx)(x, {
                        className: "duration-1000 delay-300",
                        isInviewState: {
                            trueState: "opacity-1",
                            falseState: "opacity-0 translate-y-12"
                        },
                        children: (0,
                        a.jsx)("ul", {
                            className: "space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3",
                            children: h.map((e,t)=>(0,
                            a.jsxs)("li", {
                                className: "space-y-3",
                                children: [(0,
                                a.jsx)("summary", {
                                    className: "flex items-center justify-between font-semibold text-gray-100",
                                    children: e.q
                                }), (0,
                                a.jsx)("p", {
                                    dangerouslySetInnerHTML: {
                                        __html: e.a
                                    },
                                    className: "leading-relaxed"
                                })]
                            }, t))
                        })
                    })
                })]
            })
        })
          , w = ()=>{
            let e = [{
                icon: (0,
                a.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    className: "w-6 h-6",
                    children: (0,
                    a.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    })
                }),
                title: "Automated Expense Tracking",
                desc: "Eclipse automatically tracks your expenses and provides a monthly report, in just a single click."
            }, {
                icon: (0,
                a.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    className: "w-6 h-6",
                    children: (0,
                    a.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    })
                }),
                title: "Investment Opportunities",
                desc: "Eclipse provides you with the best investment opportunities in Mutual Funds and FDs."
            }, {
                icon: (0,
                a.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    className: "w-6 h-6",
                    children: (0,
                    a.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    })
                }),
                title: "Latest Financial News",
                desc: "Eclipse provides you with the latest financial news and market trends."
            }, {
                icon: (0,
                a.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    className: "w-6 h-6",
                    children: (0,
                    a.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    })
                }),
                title: "Advance Tax Calculator",
                desc: "Take the guesswork out of your tax calculations with  advanced tax calculator"
            }, {
                icon: (0,
                a.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    className: "w-6 h-6",
                    children: (0,
                    a.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    })
                }),
                title: "Eclipse Education (For Users)",
                desc: "Eclipse Education is a fintech blogging platform for users to learn about finance and investments."
            }, {
                icon: (0,
                a.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    className: "w-6 h-6",
                    children: (0,
                    a.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    })
                }),
                title: "Eclipse Education (For Writers)",
                desc: "A fintech blogging platform for writers to showcase their work in finance and investments."
            }];
            return (0,
            a.jsx)(m, {
                children: (0,
                a.jsxs)("div", {
                    id: "features",
                    className: "custom-screen text-gray-300",
                    children: [(0,
                    a.jsx)(x, {
                        className: "duration-1000 delay-300",
                        isInviewState: {
                            trueState: "opacity-1",
                            falseState: "opacity-0 translate-y-6"
                        },
                        children: (0,
                        a.jsxs)("div", {
                            className: "max-w-xl mx-auto text-center",
                            children: [(0,
                            a.jsx)("h2", {
                                className: "text-gray-50 text-3xl font-semibold sm:text-4xl",
                                children: "Start growing your wealth with Eclipse"
                            }), (0,
                            a.jsx)("p", {
                                className: "mt-3",
                                children: "All-in-one personal finance app that simplifies investment opportunities, expense tracking, and financial news for users.."
                            })]
                        })
                    }), (0,
                    a.jsx)(x, {
                        className: "duration-1000 delay-500",
                        isInviewState: {
                            trueState: "opacity-1",
                            falseState: "opacity-0"
                        },
                        children: (0,
                        a.jsx)("div", {
                            className: "relative mt-12",
                            children: (0,
                            a.jsx)("ul", {
                                className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
                                children: e.map((e,t)=>(0,
                                a.jsxs)("li", {
                                    className: "space-y-3 p-4 rounded-xl border border-gray-800",
                                    style: {
                                        background: "radial-gradient(157.73% 157.73% at 50% -29.9%, rgba(203, 213, 225, 0.16) 0%, rgba(203, 213, 225, 0) 100%)"
                                    },
                                    children: [(0,
                                    a.jsx)("div", {
                                        className: "w-12 h-12 flex items-center justify-center bg-gray-700 rounded-lg text-gray-50",
                                        children: e.icon
                                    }), (0,
                                    a.jsx)("h3", {
                                        className: "text-lg text-gray-50 font-semibold",
                                        children: e.title
                                    }), (0,
                                    a.jsx)("p", {
                                        children: e.desc
                                    })]
                                }, t))
                            })
                        })
                    })]
                })
            })
        }
        ;
        var f = {
            src: "/_next/static/media/readme1.f23860ab.png",
            height: 1080,
            width: 1920,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42mOI9Z4Z5z0nxn1eX9uWSV1bkwMWpgWuLInbzZAcsCDGZ0qwU/esKbtWLD6UHDotLWhZfcYJhrTgRbaWkRY2rjLM9uIMDkqaHNbmIZ2FJxkKYjY5W4V72XqlFeUVVJeam1j5+qQsaLnA0FpwPMA22FlEzDktxD7Z29nJKzmpaMeM6wB8MTCUB3eznAAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 5
        };
        let y = ()=>(0,
        a.jsx)("section", {
            children: (0,
            a.jsx)("div", {
                className: "custom-screen py-28",
                children: (0,
                a.jsx)(x, {
                    className: "duration-1000 delay-300",
                    isInviewState: {
                        trueState: "opacity-1",
                        falseState: "opacity-0"
                    },
                    children: (0,
                    a.jsxs)("div", {
                        children: [(0,
                        a.jsxs)("div", {
                            className: "space-y-5 max-w-3xl mx-auto text-center",
                            children: [(0,
                            a.jsx)("h1", {
                                className: "text-4xl bg-clip-text text-transparent bg-gradient-to-r font-extrabold mx-auto sm:text-6xl",
                                style: {
                                    backgroundImage: "linear-gradient(179.1deg, #FFFFFF 0.77%, rgba(255, 255, 255, 0) 182.09%)"
                                },
                                children: "All-in-one Finance App you always wanted"
                            }), (0,
                            a.jsx)("p", {
                                className: "max-w-xl mx-auto text-gray-300",
                                children: "Gain control of your finances with our all-in-one finance app. Track your spending, find investment opportunities, and learn."
                            }), (0,
                            a.jsx)("div", {
                                className: "flex justify-center font-medium text-sm",
                                children: (0,
                                a.jsxs)(i.Z, {
                                    href: "/#pricing",
                                    className: "flex items-center text-white bg-purple-600 hover:bg-purple-500 active:bg-purple-700 ",
                                    children: ["Get Started", (0,
                                    a.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 20 20",
                                        fill: "currentColor",
                                        className: "w-5 h-5",
                                        children: (0,
                                        a.jsx)("path", {
                                            fillRule: "evenodd",
                                            d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
                                            clipRule: "evenodd"
                                        })
                                    })]
                                })
                            })]
                        }), (0,
                        a.jsx)(n, {
                            className: "mt-16 sm:mt-28",
                            wrapperClassName: "max-w-3xl h-[250px] top-12 inset-0 sm:h-[300px] lg:h-[650px]",
                            children: (0,
                            a.jsx)(l(), {
                                src: f,
                                className: "shadow-lg rounded-2xl",
                                alt: "Mailgo"
                            })
                        })]
                    })
                })
            })
        });
        var v = s(6854);
        let j = ()=>(0,
        a.jsxs)(m, {
            id: "pricing",
            className: "custom-screen",
            children: [(0,
            a.jsx)("div", {
                className: "relative max-w-xl mx-auto text-center",
                children: (0,
                a.jsx)("h2", {
                    className: "text-gray-50 text-3xl font-semibold sm:text-4xl",
                    children: "Find a plan to power your finances"
                })
            }), (0,
            a.jsx)(x, {
                className: "duration-1000 delay-300",
                isInviewState: {
                    trueState: "opacity-1",
                    falseState: "opacity-0"
                },
                children: (0,
                a.jsx)("div", {
                    className: "mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3",
                    children: [{
                        name: "Starter",
                        desc: "Ideal for growing finance",
                        price: 12,
                        isMostPop: !1,
                        features: ["Automated Expense Tracking(Detail Analysis)", "Family Expense Tracking(4 Users Only)", "Latest Fintechnology News", "Investment Opportunities (Can invest)", "Advance Tax Calculator"]
                    }, {
                        name: "Basic plan",
                        desc: "For individuals",
                        price: 0,
                        isMostPop: !0,
                        features: ["Automated Expense Tracking", "Family Expense Tracking(2 Users Only)", "Latest Fintechnology News", "Investment Opportunities (Only showcase)", "Advance Tax Calculator"]
                    }, {
                        name: "Pro",
                        desc: "Built for financially savvy",
                        price: 32,
                        isMostPop: !1,
                        features: ["Automated Expense Tracking(Detail Analysis)", "Family Expense Tracking(6 Users Only)", "Latest Fintechnology News", "Personalized Investment Opportunities", "Tax calculation and Tax saving schemes"]
                    }].map((e,t)=>(0,
                    a.jsxs)("div", {
                        className: "relative flex-1 flex items-stretch flex-col rounded-xl border border-gray-800 mt-6 sm:mt-0 ".concat(e.isMostPop ? "border border-purple-500" : ""),
                        style: {
                            backgroundImage: e.isMostPop ? "radial-gradient(130.39% 130.39% at 51.31% -0.71%, #1F2937 0%, rgba(31, 41, 55, 0) 100%)" : ""
                        },
                        children: [(0,
                        a.jsxs)("div", {
                            className: "p-8 space-y-4 border-b border-gray-800 text-center",
                            children: [(0,
                            a.jsx)("span", {
                                className: "text-purple-600 font-medium",
                                children: e.name
                            }), (0,
                            a.jsxs)("div", {
                                className: "text-gray-50 text-3xl font-semibold",
                                children: ["$", e.price, " ", (0,
                                a.jsx)("span", {
                                    className: "text-xl text-gray-400 font-normal",
                                    children: "/mo"
                                })]
                            }), (0,
                            a.jsx)("p", {
                                className: "text-gray-400",
                                children: e.desc
                            })]
                        }), (0,
                        a.jsxs)("div", {
                            className: "p-8",
                            children: [(0,
                            a.jsx)("ul", {
                                className: "space-y-3",
                                children: e.features.map((e,t)=>(0,
                                a.jsxs)("li", {
                                    className: "flex items-center gap-5 text-gray-300",
                                    children: [(0,
                                    a.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-5 w-5 text-indigo-600",
                                        viewBox: "0 0 20 20",
                                        fill: "currentColor",
                                        children: (0,
                                        a.jsx)("path", {
                                            "fill-rule": "evenodd",
                                            d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                            "clip-rule": "evenodd"
                                        })
                                    }), e]
                                }, t))
                            }), (0,
                            a.jsx)("div", {
                                className: "pt-8",
                                children: 1 == t ? (0,
                                a.jsx)(v.Z, {
                                    onClick: ()=>window.open("https://drive.google.com/uc?export=download&id=143uXyJ-9MZCFVKqsEFYm7LPEafvfZhep"),
                                    className: "w-full rounded-full text-white ring-offset-2 focus:ring ".concat(e.isMostPop ? "bg-purple-600 hover:bg-purple-500 focus:bg-purple-700 ring-purple-600" : "bg-gray-800 hover:bg-gray-700 ring-gray-800"),
                                    children: "Download Now!"
                                }) : (0,
                                a.jsx)(v.Z, {
                                    className: "w-full rounded-full text-white ring-offset-2 focus:ring ".concat(e.isMostPop ? "bg-purple-600 hover:bg-purple-500 focus:bg-purple-700 ring-purple-600" : "bg-gray-800 hover:bg-gray-700 ring-gray-800"),
                                    children: "Coming Soon!"
                                })
                            })]
                        })]
                    }, t))
                })
            })]
        });
        function A() {
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(y, {}), (0,
                a.jsx)(w, {}), (0,
                a.jsx)(p, {}), (0,
                a.jsx)(j, {}), (0,
                a.jsx)(g, {})]
            })
        }
    }
}, function(e) {
    e.O(0, [774, 888, 179], function() {
        return e(e.s = 5246)
    }),
    _N_E = e.O()
}
]);
