(function (e) {
  function t(t) {
    for (
      var r, a, u = t[0], i = t[1], s = t[2], f = 0, d = [];
      f < u.length;
      f++
    )
      (a = u[f]),
        Object.prototype.hasOwnProperty.call(o, a) && o[a] && d.push(o[a][0]),
        (o[a] = 0);
    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    l && l(t);
    while (d.length) d.shift()();
    return c.push.apply(c, s || []), n();
  }
  function n() {
    for (var e, t = 0; t < c.length; t++) {
      for (var n = c[t], r = !0, a = 1; a < n.length; a++) {
        var u = n[a];
        0 !== o[u] && (r = !1);
      }
      r && (c.splice(t--, 1), (e = i((i.s = n[0]))));
    }
    return e;
  }
  var r = {},
    a = { app: 0 },
    o = { app: 0 },
    c = [];
  function u(e) {
    return (
      i.p +
      "static/js/" +
      ({}[e] || e) +
      "." +
      {
        "chunk-0b50dfd4": "de28a5ab",
        "chunk-5ba270e4": "47f63842",
        "chunk-5530adbb": "c100cedc",
        "chunk-8e42b204": "6dbb2f0f",
        "chunk-9d355972": "1c2a6fe3",
        "chunk-5fad64be": "1ced8b6a",
        "chunk-6391baa2": "87d864ee",
        "chunk-e5e09d44": "ac940c69",
      }[e] +
      ".js"
    );
  }
  function i(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.e = function (e) {
    var t = [],
      n = {
        "chunk-0b50dfd4": 1,
        "chunk-5ba270e4": 1,
        "chunk-5530adbb": 1,
        "chunk-8e42b204": 1,
        "chunk-9d355972": 1,
        "chunk-5fad64be": 1,
        "chunk-6391baa2": 1,
        "chunk-e5e09d44": 1,
      };
    a[e]
      ? t.push(a[e])
      : 0 !== a[e] &&
        n[e] &&
        t.push(
          (a[e] = new Promise(function (t, n) {
            for (
              var r =
                  "static/css/" +
                  ({}[e] || e) +
                  "." +
                  {
                    "chunk-0b50dfd4": "23519fa1",
                    "chunk-5ba270e4": "849ebfbb",
                    "chunk-5530adbb": "e935173d",
                    "chunk-8e42b204": "760aa829",
                    "chunk-9d355972": "b68b5759",
                    "chunk-5fad64be": "4af9c8db",
                    "chunk-6391baa2": "f03f8135",
                    "chunk-e5e09d44": "d54f7dde",
                  }[e] +
                  ".css",
                o = i.p + r,
                c = document.getElementsByTagName("link"),
                u = 0;
              u < c.length;
              u++
            ) {
              var s = c[u],
                f = s.getAttribute("data-href") || s.getAttribute("href");
              if ("stylesheet" === s.rel && (f === r || f === o)) return t();
            }
            var d = document.getElementsByTagName("style");
            for (u = 0; u < d.length; u++) {
              (s = d[u]), (f = s.getAttribute("data-href"));
              if (f === r || f === o) return t();
            }
            var l = document.createElement("link");
            (l.rel = "stylesheet"),
              (l.type = "text/css"),
              (l.onload = t),
              (l.onerror = function (t) {
                var r = (t && t.target && t.target.src) || o,
                  c = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + r + ")"
                  );
                (c.code = "CSS_CHUNK_LOAD_FAILED"),
                  (c.request = r),
                  delete a[e],
                  l.parentNode.removeChild(l),
                  n(c);
              }),
              (l.href = o);
            var p = document.getElementsByTagName("head")[0];
            p.appendChild(l);
          }).then(function () {
            a[e] = 0;
          }))
        );
    var r = o[e];
    if (0 !== r)
      if (r) t.push(r[2]);
      else {
        var c = new Promise(function (t, n) {
          r = o[e] = [t, n];
        });
        t.push((r[2] = c));
        var s,
          f = document.createElement("script");
        (f.charset = "utf-8"),
          (f.timeout = 120),
          i.nc && f.setAttribute("nonce", i.nc),
          (f.src = u(e));
        var d = new Error();
        s = function (t) {
          (f.onerror = f.onload = null), clearTimeout(l);
          var n = o[e];
          if (0 !== n) {
            if (n) {
              var r = t && ("load" === t.type ? "missing" : t.type),
                a = t && t.target && t.target.src;
              (d.message =
                "Loading chunk " + e + " failed.\n(" + r + ": " + a + ")"),
                (d.name = "ChunkLoadError"),
                (d.type = r),
                (d.request = a),
                n[1](d);
            }
            o[e] = void 0;
          }
        };
        var l = setTimeout(function () {
          s({ type: "timeout", target: f });
        }, 12e4);
        (f.onerror = f.onload = s), document.head.appendChild(f);
      }
    return Promise.all(t);
  }),
    (i.m = e),
    (i.c = r),
    (i.d = function (e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          i.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = ""),
    (i.oe = function (e) {
      throw (console.error(e), e);
    });
  var s = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    f = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var d = 0; d < s.length; d++) t(s[d]);
  var l = f;
  c.push([0, "chunk-vendors"]), n();
})({
  0: function (e, t, n) {
    e.exports = n("56d7");
  },
  "2f36": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return a;
    });
    var r = n("89e3"),
      a = function (e) {
        r["a"].fail(e);
      };
  },
  "365c": function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return f;
    }),
      n.d(t, "d", function () {
        return d;
      }),
      n.d(t, "f", function () {
        return l;
      }),
      n.d(t, "h", function () {
        return p;
      }),
      n.d(t, "e", function () {
        return h;
      }),
      n.d(t, "b", function () {
        return b;
      }),
      n.d(t, "a", function () {
        return m;
      }),
      n.d(t, "g", function () {
        return g;
      });
    var r = n("4ff3"),
      a = n.n(r),
      o = n("430a"),
      c = n("2f36"),
      u = a.a.create({
        timeout: 2e5,
        baseURL: "",
      });
    (o["default"].prototype.$http = u),
      u.interceptors.request.use(
        function (e) {
          return (
            (e.headers["Authorization"] = sessionStorage.getItem("token")), e
          );
        },
        function (e) {
          return Promise.resolve(e);
        }
      ),
      u.interceptors.response.use(
        function (e) {
          var t = e.data;
          return 401 === t.code
            ? (Object(c["a"])("身份信息已过期，请重登录系统"),
              Promise.reject(e.data))
            : Promise.resolve(e.data);
        },
        function (e) {
          if (e.response)
            switch (e.response.status) {
              case 401:
                Object(c["a"])("用户没有访问权限");
                break;
              case 404:
                Object(c["a"])("网络请求不存在");
                break;
              case 400:
                Object(c["a"])("请求错误(400)’");
                break;
              case 403:
                Object(c["a"])("拒绝访问(403)");
                break;
              case 408:
                Object(c["a"])("请求超时(408)");
                break;
              case 500:
                Object(c["a"])("服务器错误(500)");
                break;
              case 501:
                Object(c["a"])("服务未实现(501)");
                break;
              case 502:
                Object(c["a"])("网络错误(502)");
                break;
              case 503:
                Object(c["a"])("服务不可用(503)");
                break;
              case 504:
                Object(c["a"])("网络超时(504)");
                break;
              case 505:
                Object(c["a"])("HTTP版本不受支持(505)");
                break;
              default:
                Object(c["a"])(e.response.data.message),
                  Object(c["a"])("连接出错(".concat(e.response.status, ")"));
            }
          else Object(c["a"])("连接出错(".concat(e.msg, ")"));
          return Promise.reject(e);
        }
      );
    var i = {
        get: function (e, t) {
          return u({ method: "get", url: "".concat(e), params: t });
        },
        getTime: function (e, t) {
          var n = "time=" + new Date().getTime();
          for (var r in t) n += "&" + r + "=" + t[r];
          return u({ method: "get", url: "".concat(e, "?").concat(n) });
        },
        download: function (e) {
          return u({ method: "get", url: "".concat(e), responseType: "blob" });
        },
        post: function (e, t) {
          return u({
            method: "post",
            url: "".concat(e),
            data: t,
            headers: { "Content-Type": "application/json" },
          });
        },
        post2: function (e, t) {
          return u({
            method: "post",
            url: "".concat(e),
            data: t,
            transformRequest: [
              function (e) {
                var t = "";
                for (var n in e)
                  t +=
                    encodeURIComponent(n) +
                    "=" +
                    encodeURIComponent(e[n]) +
                    "&";
                return t;
              },
            ],
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          });
        },
        put: function (e, t) {
          return u({
            method: "put",
            url: "".concat(e),
            data: t,
            headers: { "Content-Type": "application/json" },
          });
        },
        delete: function (e) {
          return u({ method: "delete", url: "".concat(e) });
        },
      },
      s = i;
    function f(e) {
      return {
        code: 200,
        token: "asdasda",
        name: "abc",
        "sid": "11111111"
      }
    }
    function d(e) {
      var t = "client/passBar/getPassBarList";
      function gen_random_n(n) {
        if (window.passBarList !== undefined) {
            return window.passBarList
        }
        const cvt_data = (d) => {
          // get the timezone offset
          let timezone_offset_in_hour = Math.round(d.getTimezoneOffset() / 60);
          const date = new Date(d);
          date.setHours(date.getHours() - timezone_offset_in_hour);
          const dstr = date.toISOString();
          const ds = dstr.split('T');
          const p2 = ds[1].split(':');
          const time = p2[0] + ":" + p2[1];
          return ds[0] + " " + time;
        }
        let template = (a,b,c,d,e) => {
          return {
            "updateTime" : null,
              "id" : "1112312087312340",
              "studentAccount" : "12012011",
              "validStart" : a,
              "updateBy" : null,
              "approveId" : 112313144040114123,
              "barStatus" : d,
              "studentName" : "张家豪",
              "createTime" : b,
              "applyId" : 112314123123434123,
              "validEnd" : c,
              "status" : e,
              "createBy" : "30000106"
          }
        }
        let ret = {
          code: 200,
          msg: "成功！",
          data: []
        }

        let ld1 = new Date();
        let ld2 = new Date(ld1);
        let ld1d = ld1.getDate();
        let ld1h = ld1.getHours();
        let ld2d = ld1d;
        let ld2h = ld1h;
        if (ld1h < 9) {
          ld1d -= 1;
          ld1h = 22;
          ld2h = 12;
        } else if (ld1h < 21) {
          ld1h = 9;
          ld2h = 23;
        } else {
          ld1h = 17;
          ld2h = 9;
          ld2d += 1;
        }
        ld1.setDate(ld1d);
        ld1.setHours(ld1h, 0, 0);
        ld2.setDate(ld2d);
        ld2.setHours(ld2h, 0, 0);
        ret.data.push(template(cvt_data(ld1), cvt_data(ld1), cvt_data(ld2), "1", "1"));

        for (let j = 1; j < n; j++) {
            let d1 = new Date();
            d1.setMonth(d1.getMonth() - j);
            const data_var = Math.floor((Math.random() - 0.5) * 20);
            d1.setDate(d1.getDate() + data_var);
            d1.setHours(9, 0, 0);
            let d2 = new Date(d1);
            d2.setHours(20, 0, 0);
            ret.data.push(template(cvt_data(d1), cvt_data(d1), cvt_data(d2), "0", "0"));
        }

        return ret;
      }
      const data = gen_random_n(4);
      window.passBarList = data;
      return data;
    }
    function l(e) {
      var t = "/client/applyInfo/commitApplyInfo";
      return s.post(t, e);
    }
    function p(e) {
      var t = "/client/applyInfo/getStudentInfo";
      return {
        "code": 200,
        "msg": "成功！",
        "data": {
          "name": "张家豪",
          "account": "12012011",
          "studyAcademy": "树仁书院",
          "bookAcademyId": "1500102011",
          "bookAcademy": "20级11班",
          "tel": "12345678901",
          "studyAcademyId": "150000",
        }
      }
    }
    function h(e) {
      var t = "/client/approveInfoRecord/getMyApproveInfoRecord";
      let ret = {
        "code": 200,
        "msg": "成功！",
        "data": []
      }
      if (window.passBarList === undefined) {
        d(e);
      }
      const template = (a,b,c) => {
        return {
          "account" : "12012011",
            "leaveStart" : a,
            "academy" : "树仁书院20级11班",
            "leaveEnd" : b,
            "province" : "广东省",
            "bookAcademyId" : "1500102011",
            "gooutType" : "离校-其他事项",
            "tel" : "12345678901",
            "approveTime" : c,
            "city" : "深圳市",
            "areaId" : "440305",
            "name" : "张家豪",
            "approveRecordList" : [
          {
            "updateTime" : null,
            "id" : "1123123141415153",
            "studentAccount" : null,
            "approveTime" : c,
            "updateBy" : null,
            "approveId" : null,
            "approveComment" : null,
            "academy" : null,
            "studentName" : null,
            "createTime" : null,
            "adminAccount" : null,
            "adminName" : "王建国",
            "approveStatus" : "1",
            "number" : 1,
            "studyAcademyId" : null,
            "bookAcademyId" : null,
            "status" : null,
            "createBy" : null
          }
        ],
          "destination" : "广东省深圳市南山区",
          "id" : "114124125415132556",
          "promiseUrl" : null,
          "studyAcademyId" : "150000",
          "approveStatus" : "1",
          "bookAcademy" : "20级11班",
          "area" : "南山区",
          "reason" : "购置必需品",
          "studyAcademy" : "树仁书院",
          "fileUrl" : null,
          "applyId" : "11241451515651342",
          "address" : "宝能城"
        }
      }
      if (e.property1 !== "1" && e.property1 !== 1) {
        return ret;
      }
      const passBarList = window.passBarList.data;
        for (let i = 0; i < passBarList.length; i++) {
            const data = passBarList[i];
            const d1 = data.validStart;
            const d2 = data.validEnd;
            const d3 = data.createTime;
            ret.data.push(template(d1, d2, d3));
        }
        return ret;
    }
    function b(e) {
      var t = "/client/approveInfoRecord/detail/".concat(e);

    }
    function m(e) {
      var t = "/client/approveInfoRecord/cancel/".concat(e);
      return s.get(t);
    }
    function g(e) {
      var t = "/client/applyInfo/reCommit";
      return s.post(t, e);
    }
  },
  "56d7": function (e, t, n) {
    "use strict";
    n.r(t);
    n("25ba"), n("5f1c"), n("6ba0"), n("b47f");
    var r = n("430a"),
      a = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { attrs: { id: "app" } }, [n("router-view")], 1);
      },
      o = [],
      c = n("bde3"),
      u = n("365c"),
      i = (n("ac67"), n("1bc7"), n("32ea"), n("a450"), n("541d")),
      s = (n("8dee"), n("7736"));
    function f(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function d(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? f(Object(n), !0).forEach(function (t) {
              Object(i["a"])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : f(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    r["default"].use(s["a"]);
    var l = new s["a"].Store({
        state: { token: sessionStorage.getItem("token") },
        mutations: {
          SET_TOKEN: function (e, t) {
            (e.token = t),
              sessionStorage.setItem("token", t),
              window.location.replace("/");
          },
        },
        actions: {
          casLogin: function (e, t) {
            var n = e.commit,
              r = d({}, t),
              a = r.ticket,
              o = r.url;
            return new Promise(function (e, t) {
              r = u["c"]({})
              return 200 == r.code
                  ? (e(r),
                      n("SET_TOKEN", r.token),
                      sessionStorage.setItem(
                          "userInfo",
                          JSON.stringify({ name: r.name, sid: r.sid })
                      ))
                  : (t(r), Object(c["g"])(), Object(c["b"])());
            });
          },
        },
        getters: {},
      }),
      p = {
        data: function () {
          return { title: "首页" };
        },
        watch: {
          $route: {
            handler: function () {
              this.title = this.$router.history.current.meta.title;
            },
          },
        },
        created: function () {
          this.handleCasLogin();
        },
        methods: {
          handleCasLogin: function () {
            var e = Object(c["e"])("ticket"),
              t = sessionStorage.getItem("token");
            "string" !== typeof t && "string" !== typeof e && Object(c["a"])(),
              "string" !== typeof t &&
                ("string" == typeof e
                  ? this.handeTicketVerification(
                      e,
                      "https://cxsq.sustech.edu.cn/"
                    )
                  : this.handeTicketVerification(
                        e,
                        "https://cxsq.sustech.edu.cn/"
                    ));
          },
          handeTicketVerification: function (e, t) {
            var n = { ticket: e, url: t };
            this.$store.dispatch("casLogin", n);
          },
        },
      },
      h = p,
      b = (n("7c55"), n("cba8")),
      m = Object(b["a"])(h, a, o, !1, null, null, null),
      g = m.exports,
      v = n("ac56"),
      k = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { attrs: { id: "view" } }, [n("router-view")], 1);
      },
      O = [],
      w = {
        data: function () {
          return { lang: "zh" };
        },
        methods: {
          langBtn: function () {
            "zh" == this.lang
              ? ((this.lang = "en"), (this.$i18n.locale = "en"))
              : ((this.lang = "zh"), (this.$i18n.locale = "zh"));
          },
        },
      },
      y = w,
      j = Object(b["a"])(y, k, O, !1, null, "1e35a6ec", null),
      D = j.exports;
    r["default"].use(v["a"]);
    var P = new v["a"]({
        routes: [
          {
            path: "/workOrder",
            name: "/WorkOrder",
            component: function () {
              return n.e("chunk-6391baa2").then(n.bind(null, "7751"));
            },
            meta: { title: "发起工单" },
          },
          {
            path: "/workOrderDetails",
            name: "/WorkOrderDetails",
            component: function () {
              return Promise.all([
                n.e("chunk-5ba270e4"),
                n.e("chunk-5530adbb"),
                n.e("chunk-9d355972"),
              ]).then(n.bind(null, "70bc"));
            },
            meta: { title: "工单详情" },
          },
          {
            path: "/workOrderEidt",
            name: "/WorkOrderEidt",
            component: function () {
              return Promise.all([
                n.e("chunk-5ba270e4"),
                n.e("chunk-5530adbb"),
                n.e("chunk-8e42b204"),
              ]).then(n.bind(null, "c686"));
            },
            meta: { title: "工单编辑" },
          },
          {
            path: "/lineCode",
            name: "/LineCode",
            component: function () {
              return n.e("chunk-e5e09d44").then(n.bind(null, "c0af"));
            },
            meta: { title: "通行条码" },
          },
          {
            path: "/",
            name: "Index",
            component: D,
            children: [
              {
                path: "/",
                name: "Home",
                component: function () {
                  return n.e("chunk-0b50dfd4").then(n.bind(null, "77b8"));
                },
                meta: { title: "出校申请", icon: "el-icon-s-home", affix: !0 },
              },
              {
                path: "dashboard",
                name: "Dashboard",
                component: function () {
                  return Promise.all([
                    n.e("chunk-5ba270e4"),
                    n.e("chunk-5fad64be"),
                  ]).then(n.bind(null, "17cf"));
                },
                meta: { title: "工单", icon: "el-icon-s-home", affix: !0 },
              },
            ],
          },
        ],
      }),
      S = n("2233"),
      I = (n("0896"), n("c200")),
      T = n("799d"),
      E = n("e312");
    r["default"].use(I["a"]);
    var x = { zh: T, en: E },
      C = new I["a"]({ locale: "zh", messages: x }),
      _ = C,
      L = n("bd28"),
      N = n("e82f"),
      A = n("4429"),
      M = n("815d"),
      $ = n("5aea"),
      R = n("87fd"),
      z = n("6635"),
      q = n("9cbc"),
      B = n("515a"),
      H = n("d05f"),
      J = n("ef72"),
      U = n("c8d3"),
      F = L["a"]([
        $["a"],
        R["a"],
        z["a"],
        q["a"],
        B["a"],
        H["a"],
        J["a"],
        U["a"],
        N["a"],
        A["a"],
        M["a"],
      ]),
      K = n("2f36");
    r["default"].use(v["a"]),
      P.beforeEach(function (e, t, n) {
        if (null != e.name) {
          var r = l.state.token;
          "string" == typeof r && n();
        } else Object(K["a"])("404");
      });
    var W = P,
      V = n("cb8b"),
      Y = n("89e3"),
      G = {
        notify: function (e, t) {
          return Object(V["a"])({
            type: e || "success",
            message: t || "通知内容",
          });
        },
        loading: function (e, t, n) {
          return Y["a"].loading({
            message: e || "加载中...",
            forbidClick: t || !0,
            duration: n || 0,
          });
        },
        clearLoading: function () {
          return Y["a"].clear();
        },
      },
      Q = (n("5717"), n("aec5")),
      X = n.n(Q);
    n("b9e9");
    (r["default"].config.productionTip = !1),
      (r["default"].prototype.util = G),
      r["default"].use(S["a"]),
      r["default"].use(X.a),
      new r["default"]({
        routes: W,
        echarts: F,
        router: P,
        store: l,
        i18n: _,
        render: function (e) {
          return e(g);
        },
      }).$mount("#app");
  },
  5717: function (e, t, n) {},
  "71a3": function (e, t, n) {},
  "799d": function (e) {
    e.exports = JSON.parse('{"navbar":{"title":"中文"}}');
  },
  "7c55": function (e, t, n) {
    "use strict";
    n("71a3");
  },
  bde3: function (e, t, n) {
    "use strict";
    n.d(t, "e", function () {
      return a;
    }),
      n.d(t, "a", function () {
        return o;
      }),
      n.d(t, "b", function () {
        return c;
      }),
      n.d(t, "g", function () {
        return u;
      }),
      n.d(t, "i", function () {
        return i;
      }),
      n.d(t, "c", function () {
        return f;
      }),
      n.d(t, "f", function () {
        return s;
      }),
      n.d(t, "d", function () {
        return d;
      }),
      n.d(t, "h", function () {
        return l;
      });
    n("0c84"), n("c5cb"), n("372a"), n("1bc7"), n("fc02"), n("d91d"), n("4057");
    var r = function e(t) {
        return e.getItem(t);
      },
      a = function (e) {
        for (
          var t = window.location.search.substring(1), n = t.split("&"), r = 0;
          r < n.length;
          r++
        ) {
          var a = n[r].split("=");
          if (a[0] == e) return a[1];
        }
        return !1;
      },
      o = function () {
        // location.href = ""
        //   .concat("https://cas.sustech.edu.cn/cas/login", "?service=")
        //   .concat("https://cxsq.sustech.edu.cn/");
      },
      c = function () {
        // window.location.href = "".concat(
        //   "https://cas.sustech.edu.cn/cas/logout"
        // );
      },
      u = function () {
        r.removeItem("token"), r.removeItem("userInfo");
      },
      i = function (e) {
        var t = new Date(e).getFullYear(),
          n = new Date(e).getMonth() + 1,
          r = new Date(e).getDate(),
          a = new Date(e).getHours(),
          o = new Date(e).getMinutes();
        new Date(e).getSeconds();
        return (
          n < 10 && (n = "0" + n),
          r < 10 && (r = "0" + r),
          a < 10 && (a = "0" + a),
          o < 10 && (o = "0" + o),
          t + "-" + n + "-" + r + " " + a + ":" + o
        );
      },
      s = function (e) {
        var t = new Date(e).getFullYear(),
          n = new Date(e).getMonth() + 1,
          r = new Date(e).getDate(),
          a = new Date(e).getHours(),
          o = new Date(e).getMinutes();
        new Date(e).getSeconds();
        return (
          n < 10 && (n = "0" + n),
          r < 10 && (r = "0" + r),
          a < 10 && (a = "0" + a),
          o < 10 && (o = "0" + o),
          t + "-" + n + "-" + r
        );
      },
      f = function () {
        var e = new Date();
        return e;
      },
      d = function (e) {
        var t = new Date(e).getHours();
        return t;
      },
      l = function (e, t) {
        var n = new Date(e),
          r = new Date(t);
        return !(n > r);
      };
  },
  e312: function (e) {
    e.exports = JSON.parse('{"navbar":{"title":"英文"}}');
  },
});
