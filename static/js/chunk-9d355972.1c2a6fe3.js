(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-9d355972"],
  {
    "288b": function (e, a, t) {
      "use strict";
      t("df06");
    },
    "70bc": function (e, a, t) {
      "use strict";
      t.r(a);
      var o = function () {
          var e = this,
            a = e.$createElement,
            t = e._self._c || a;
          return t(
            "div",
            [
              t("van-nav-bar", { attrs: { title: e.title } }),
              t("div", { staticClass: "userInfo mt46 pd20 bor-siz" }, [
                t(
                  "div",
                  { staticClass: "wp100" },
                  [
                    t(
                      "van-form",
                      [
                        t(
                          "van-cell",
                          { staticClass: "mb10 bdr-p5 box-sad" },
                          [
                            t("div", { staticClass: "fb" }, [e._v("身份信息")]),
                            t(
                              "van-cell-group",
                              { attrs: { inset: "" } },
                              [
                                t("van-field", {
                                  attrs: {
                                    name: "faultUserSid",
                                    label: "学号",
                                    placeholder: "学号",
                                    disabled: "",
                                  },
                                  model: {
                                    value: e.fromDialog.account,
                                    callback: function (a) {
                                      e.$set(e.fromDialog, "account", a);
                                    },
                                    expression: "fromDialog.account",
                                  },
                                }),
                                t("van-field", {
                                  attrs: {
                                    name: "faultUserTelNo",
                                    label: "姓名",
                                    placeholder: "姓名",
                                    disabled: "",
                                  },
                                  model: {
                                    value: e.fromDialog.name,
                                    callback: function (a) {
                                      e.$set(e.fromDialog, "name", a);
                                    },
                                    expression: "fromDialog.name",
                                  },
                                }),
                                t("van-field", {
                                  attrs: {
                                    name: "faultUserTelNodd",
                                    label: "院系/书院",
                                    placeholder: "院系/书院",
                                    disabled: "",
                                  },
                                  model: {
                                    value: e.fromDialog.faultUserTelNodd,
                                    callback: function (a) {
                                      e.$set(
                                        e.fromDialog,
                                        "faultUserTelNodd",
                                        a
                                      );
                                    },
                                    expression: "fromDialog.faultUserTelNodd",
                                  },
                                }),
                                t("van-field", {
                                  attrs: {
                                    name: "faultUserName",
                                    label: "手机号",
                                    placeholder: "手机号",
                                    disabled: "",
                                  },
                                  model: {
                                    value: e.fromDialog.tel,
                                    callback: function (a) {
                                      e.$set(e.fromDialog, "tel", a);
                                    },
                                    expression: "fromDialog.tel",
                                  },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        t("br"),
                        t(
                          "van-cell",
                          { staticClass: "mb10 bdr-p5 box-sad" },
                          [
                            t("div", { staticClass: "fb" }, [e._v("申请信息")]),
                            t(
                              "van-cell-group",
                              { attrs: { inset: "" } },
                              [
                                t("van-field", {
                                  attrs: {
                                    "is-link": "",
                                    readonly: "",
                                    name: "utSchool",
                                    label: "出校时间",
                                    placeholder: "点击选择出校时间",
                                    disabled: "",
                                  },
                                  on: {
                                    click: function (a) {
                                      e.outSchoolShow = !0;
                                    },
                                  },
                                  model: {
                                    value: e.fromDialog.leaveStart,
                                    callback: function (a) {
                                      e.$set(e.fromDialog, "leaveStart", a);
                                    },
                                    expression: "fromDialog.leaveStart",
                                  },
                                }),
                                t("van-field", {
                                  attrs: {
                                    "is-link": "",
                                    readonly: "",
                                    name: "retSchool",
                                    label: "返校时间",
                                    placeholder: "点击选择返校时间",
                                    disabled: "",
                                  },
                                  on: {
                                    click: function (a) {
                                      e.retSchoolShow = !0;
                                    },
                                  },
                                  model: {
                                    value: e.fromDialog.leaveEnd,
                                    callback: function (a) {
                                      e.$set(e.fromDialog, "leaveEnd", a);
                                    },
                                    expression: "fromDialog.leaveEnd",
                                  },
                                }),
                                t("van-field", {
                                  attrs: {
                                    "is-link": "",
                                    readonly: "",
                                    name: "picker",
                                    label: "出校类型",
                                    placeholder: "选择出校类型",
                                  },
                                  model: {
                                    value: e.fromDialog.gooutType,
                                    callback: function (a) {
                                      e.$set(e.fromDialog, "gooutType", a);
                                    },
                                    expression: "fromDialog.gooutType",
                                  },
                                }),
                                t("van-field", {
                                  attrs: {
                                    "is-link": "",
                                    readonly: "",
                                    name: "address",
                                    label: "目的地",
                                    placeholder: "点击选择目的地",
                                    disabled: "",
                                  },
                                  on: {
                                    click: function (a) {
                                      e.showArea = !0;
                                    },
                                  },
                                  model: {
                                    value: e.fromDialog.destination,
                                    callback: function (a) {
                                      e.$set(e.fromDialog, "destination", a);
                                    },
                                    expression: "fromDialog.destination",
                                  },
                                }),
                                t("van-field", {
                                  attrs: {
                                    rows: "1",
                                    autosize: "",
                                    label: "详细地址",
                                    type: "textarea",
                                    name: "faultUserTelNodd",
                                    placeholder: "请输入详细地址",
                                    disabled: "",
                                  },
                                  model: {
                                    value: e.fromDialog.address,
                                    callback: function (a) {
                                      e.$set(e.fromDialog, "address", a);
                                    },
                                    expression: "fromDialog.address",
                                  },
                                }),
                                t("van-field", {
                                  attrs: {
                                    name: "faultUserName",
                                    label: "出校理由",
                                    placeholder: "出校理由",
                                    type: "textarea",
                                    rows: "1",
                                    autosize: "",
                                    disabled: "",
                                  },
                                  model: {
                                    value: e.fromDialog.reason,
                                    callback: function (a) {
                                      e.$set(e.fromDialog, "reason", a);
                                    },
                                    expression: "fromDialog.reason",
                                  },
                                }),
                                "pdf" != e.promisePdf
                                  ? t("van-field", {
                                      attrs: {
                                        name: "uploader",
                                        label: "离校承诺书",
                                      },
                                      scopedSlots: e._u(
                                        [
                                          {
                                            key: "input",
                                            fn: function () {
                                              return [
                                                t("van-uploader", {
                                                  attrs: {
                                                    disabled: "",
                                                    deletable: !1,
                                                    "before-read":
                                                      e.handleBeforeRead,
                                                    accept: e.accept,
                                                    "max-count": e.numberInput,
                                                  },
                                                  model: {
                                                    value:
                                                      e.fromDialog.promiseUrl,
                                                    callback: function (a) {
                                                      e.$set(
                                                        e.fromDialog,
                                                        "promiseUrl",
                                                        a
                                                      );
                                                    },
                                                    expression:
                                                      "fromDialog.promiseUrl",
                                                  },
                                                }),
                                              ];
                                            },
                                            proxy: !0,
                                          },
                                        ],
                                        null,
                                        !1,
                                        1283610749
                                      ),
                                    })
                                  : e._e(),
                                t("van-field", {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: "pdf" == e.promisePdf,
                                      expression: "promisePdf == 'pdf'",
                                    },
                                  ],
                                  attrs: {
                                    name: "uploader",
                                    label: "离校承诺书",
                                  },
                                  scopedSlots: e._u([
                                    {
                                      key: "input",
                                      fn: function () {
                                        return [
                                          t(
                                            "van-button",
                                            {
                                              attrs: {
                                                size: "small",
                                                type: "primary",
                                              },
                                              on: {
                                                click: function (a) {
                                                  return e.handlepromise(
                                                    e.fromDialog.promiseUrl
                                                  );
                                                },
                                              },
                                            },
                                            [e._v("查看离校承诺书")]
                                          ),
                                        ];
                                      },
                                      proxy: !0,
                                    },
                                  ]),
                                }),
                                "pdf" != e.filePdf
                                  ? t("van-field", {
                                      attrs: {
                                        name: "uploader",
                                        label: "附件",
                                      },
                                      scopedSlots: e._u(
                                        [
                                          {
                                            key: "input",
                                            fn: function () {
                                              return [
                                                t("van-uploader", {
                                                  attrs: {
                                                    disabled: "",
                                                    deletable: !1,
                                                    "before-read":
                                                      e.handleBeforeRead,
                                                    accept: e.accept,
                                                    "max-count": e.numberInput,
                                                  },
                                                  model: {
                                                    value: e.fromDialog.fileUrl,
                                                    callback: function (a) {
                                                      e.$set(
                                                        e.fromDialog,
                                                        "fileUrl",
                                                        a
                                                      );
                                                    },
                                                    expression:
                                                      "fromDialog.fileUrl",
                                                  },
                                                }),
                                              ];
                                            },
                                            proxy: !0,
                                          },
                                        ],
                                        null,
                                        !1,
                                        1619045092
                                      ),
                                    })
                                  : e._e(),
                                t("van-field", {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: "pdf" == e.filePdf,
                                      expression: "filePdf == 'pdf'",
                                    },
                                  ],
                                  attrs: { name: "uploader", label: "附件" },
                                  scopedSlots: e._u([
                                    {
                                      key: "input",
                                      fn: function () {
                                        return [
                                          t(
                                            "van-button",
                                            {
                                              attrs: {
                                                size: "small",
                                                type: "primary",
                                              },
                                              on: {
                                                click: function (a) {
                                                  return e.handlefile(
                                                    e.fromDialog.fileUrl
                                                  );
                                                },
                                              },
                                            },
                                            [e._v("查看附件")]
                                          ),
                                        ];
                                      },
                                      proxy: !0,
                                    },
                                  ]),
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        t("br"),
                        t(
                          "div",
                          { staticClass: "mt5" },
                          [
                            t(
                              "van-cell",
                              { staticClass: "mb10 bdr-p5 box-sad" },
                              [
                                t("h4", { staticClass: "mb10" }, [
                                  e._v("审批记录"),
                                ]),
                                t(
                                  "van-row",
                                  [
                                    t(
                                      "van-col",
                                      { attrs: { span: "24" } },
                                      e._l(e.approveList, function (a) {
                                        return t(
                                          "ul",
                                          {
                                            key: a.id,
                                            staticClass:
                                              "mb5 pd20 box-siz spBor",
                                          },
                                          [
                                            t(
                                              "li",
                                              {
                                                staticClass:
                                                  "flex justify-between",
                                              },
                                              [
                                                t("h4", [
                                                  e._v(
                                                    "第" +
                                                      e._s(a.number) +
                                                      "轮审批"
                                                  ),
                                                ]),
                                                1 == a.approveStatus
                                                  ? t(
                                                      "span",
                                                      { staticClass: "theme" },
                                                      [e._v("同意")]
                                                    )
                                                  : e._e(),
                                                2 == a.approveStatus
                                                  ? t(
                                                      "span",
                                                      { staticClass: "red" },
                                                      [e._v("不同意")]
                                                    )
                                                  : e._e(),
                                                3 == a.approveStatus
                                                  ? t(
                                                      "span",
                                                      { staticClass: "red" },
                                                      [e._v("退回")]
                                                    )
                                                  : e._e(),
                                                4 == a.approveStatus
                                                  ? t(
                                                      "span",
                                                      { staticClass: "red" },
                                                      [e._v("撤销")]
                                                    )
                                                  : e._e(),
                                              ]
                                            ),
                                            t("li", { staticClass: "cr" }, [
                                              e._v(
                                                "审批人：" + e._s(a.adminName)
                                              ),
                                            ]),
                                            t("li", { staticClass: "cr" }, [
                                              e._v(
                                                "审批时间：" +
                                                  e._s(a.approveTime)
                                              ),
                                            ]),
                                            t("li", { staticClass: "cr" }, [
                                              e._v(
                                                "审批意见：" +
                                                  e._s(a.approveComment)
                                              ),
                                            ]),
                                          ]
                                        );
                                      }),
                                      0
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        t(
                          "div",
                          { staticStyle: { margin: "16px" } },
                          [
                            0 == e.showBtm
                              ? t(
                                  "van-button",
                                  {
                                    attrs: {
                                      round: "",
                                      block: "",
                                      type: "primary",
                                      "native-type": "submit",
                                    },
                                    on: { click: e.handleWithdraw },
                                  },
                                  [e._v("\n            撤回申请\n          ")]
                                )
                              : e._e(),
                            3 == e.showBtm || 4 == e.showBtm
                              ? t(
                                  "van-button",
                                  {
                                    attrs: {
                                      round: "",
                                      block: "",
                                      type: "primary",
                                      "native-type": "submit",
                                    },
                                    on: { click: e.handleAgain },
                                  },
                                  [e._v("\n            重新申请\n          ")]
                                )
                              : e._e(),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ]),
              t("van-overlay", { attrs: { show: e.show } }, [
                t(
                  "div",
                  { staticClass: "wrapper" },
                  [
                    t(
                      "van-loading",
                      { staticClass: "block", attrs: { size: "24px" } },
                      [e._v(e._s(e.tisp) + "...")]
                    ),
                  ],
                  1
                ),
              ]),
              t(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: e.pdfZJShow,
                      expression: "pdfZJShow",
                    },
                  ],
                  attrs: { id: "pdfZJ" },
                },
                [
                  t(
                    "div",
                    { staticClass: "close", on: { click: e.handleClose } },
                    [e._v("关闭")]
                  ),
                  t(
                    "div",
                    {
                      staticClass: "num1",
                      on: {
                        click: function (a) {
                          return e.handelPageSize("上一页");
                        },
                      },
                    },
                    [e._v("上一页")]
                  ),
                  t(
                    "div",
                    {
                      staticClass: "num2",
                      on: {
                        click: function (a) {
                          return e.handelPageSize("下一页");
                        },
                      },
                    },
                    [e._v("下一页")]
                  ),
                  t("pdf", {
                    ref: "pdf",
                    staticClass: "pdfDiv",
                    attrs: { src: e.pdfurl, page: e.pageNumber },
                  }),
                ],
                1
              ),
            ],
            1
          );
        },
        l = [],
        i = (t("a450"), t("365c")),
        s = t("5033"),
        r = t("81cb"),
        n = t("bde3"),
        d = t("b4dc"),
        c = t("89e3"),
        u = {
          components: { "van-nav-bar": s["a"], pdf: d["a"] },
          data: function () {
            return {
              show: !1,
              id: "",
              outSchoolShow: !1,
              retSchoolShow: !1,
              showArea: !1,
              title: "详情",
              accept: "image/*,.pdf",
              numberInput: 1,
              fromDialog: { faultUserTelNodd: "" },
              minDate: new Date(2020, 0, 1),
              maxDate: new Date(2025, 10, 1),
              currentDate: new Date(),
              areaList: r["a"],
              cityList: "440305",
              showBtm: 0,
              approveList: [],
              promisePdf: "",
              filePdf: "",
              pdfurl: "",
              numPages: null,
              pdfZJShow: !1,
              pageNumber: 1,
              tisp: "撤销申请中",
            };
          },
          created: function () {
            (this.showBtm = this.$route.query.type),
              (this.id = this.$route.query.id),
              this.getData(this.$route.query.id);
          },
          methods: {
            getNumPages: function (e) {
              var a = this;
              (this.tisp = "加载pdf"), (this.show = !0);
              var t = d["a"].createLoadingTask(e);
              t.promise
                .then(function (e) {
                  (a.numPages = e.numPages), (a.show = !1), (a.pdfZJShow = !0);
                })
                .catch(function (e) {
                  console.error("pdf 加载失败", e);
                });
            },
            handleWithdraw: function () {
              var e = this;
              (this.tisp = "撤销申请中"),
                (this.show = !0),
                Object(i["a"])(this.id).then(function (a) {
                  200 == a.code
                    ? ((e.show = !1),
                      e.util.notify("success", a.msg),
                      e.$router.push({ path: "/workOrder" }))
                    : ((e.show = !1), e.util.notify("danger", a.msg));
                });
            },
            handleAgain: function () {
              this.$router.push({
                path: "/workOrderEidt",
                query: { id: this.id },
              });
            },
            onConfirmOut: function (e) {
              var a = Object(n["i"])(e);
              (this.fromDialog.utSchool = a), (this.outSchoolShow = !1);
            },
            onConfirmRet: function (e) {
              var a = Object(n["i"])(e);
              (this.fromDialog.retSchool = a), (this.retSchoolShow = !1);
            },
            onConfirmCity: function (e) {
              console.log(e);
              var a = e.map(function (e) {
                  return e.name;
                }),
                t = a.join(",");
              (this.fromDialog.address = t), (this.showArea = !1);
            },
            handleBeforeRead: function (e) {
              return (
                "image/png" == e.type ||
                "image/jpeg" == e.type ||
                "application/pdf" == e.type ||
                "image/jpg" == e.type ||
                (this.util.notify("danger", "请上传jpg/png/pdf格式文件"), !1)
              );
            },
            getData: function (e) {
              var a = this;
              e = i["b"](e);
            ((a.fromDialog = e.data),
                (a.fromDialog.promiseUrl = e.data.promiseUrl
                    ? [{ url: e.data.promiseUrl }]
                    : []),
                (a.fromDialog.fileUrl = e.data.fileUrl
                    ? [{ url: e.data.fileUrl }]
                    : []),
                (a.fromDialog.faultUserTelNodd =
                    e.data.studyAcademy + "/" + e.data.bookAcademy),
                (a.fromDialog.destination =
                    e.data.province + "," + e.data.city + "," + e.data.area),
                (a.approveList = e.data.approveRecordList),
                (a.promisePdf =
                    e.data.promiseUrl.length > 0
                        ? e.data.promiseUrl[0].url.substr(
                            e.data.promiseUrl[0].url.lastIndexOf(".") + 1,
                            3
                        )
                        : []),
                (a.filePdf =
                    e.data.fileUrl.length > 0
                        ? e.data.fileUrl[0].url.substr(
                            e.data.fileUrl[0].url.lastIndexOf(".") + 1,
                            3
                        )
                        : []));
            },
            handlepromise: function (e) {
              (this.pdfurl = e[0].url), this.getNumPages(e[0].url);
            },
            handlefile: function (e) {
              (this.pdfurl = e[0].url), this.getNumPages(e[0].url);
            },
            handleClose: function () {
              (this.pageNumber = 1), (this.pdfZJShow = !1);
            },
            handelPageSize: function (e) {
              if ("上一页" == e) {
                if (1 == this.pageNumber)
                  return void Object(c["a"])("已经是第一页");
                this.pageNumber = this.pageNumber - 1;
              } else {
                if (this.numPages == this.pageNumber)
                  return void Object(c["a"])("已经最后一页");
                this.pageNumber = this.pageNumber + 1;
              }
            },
          },
        },
        f = u,
        p = (t("288b"), t("cba8")),
        m = Object(p["a"])(f, o, l, !1, null, "73717576", null);
      a["default"] = m.exports;
    },
    df06: function (e, a, t) {},
  },
]);
