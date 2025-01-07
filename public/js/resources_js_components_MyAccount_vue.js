"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_MyAccount_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MyAccount.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MyAccount.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue */ "./resources/js/components/Layout.vue");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "About us",
  components: {
    Layout: _Layout_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  beforeUnmount: function beforeUnmount() {},
  created: function created() {},
  mounted: function mounted() {
    var _this = this;
    this.getUsers();
    var authToken = "Bearer " + localStorage.getItem("token"); // Replace with your storage method
    axios.get("/api/user", {
      headers: {
        Authorization: authToken
      }
    }).then(function (response) {
      _this.user = response.data;
    })["catch"](function (error) {
      console.error("Error fetching user data:", error);
    });
  },
  data: function data() {
    return {
      errors: {
        firstName: [],
        lastName: [],
        email: [],
        password: [],
        password_confirmation: [],
        fromemail: []
      },
      user: {
        id: null,
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: ""
        // other user properties
      },
      loading: false,
      successMessage: null,
      errorMessage: null
    };
  },
  watch: {},
  methods: {
    UpdateUserInfo: function UpdateUserInfo() {
      var _this2 = this;
      var authToken = "Bearer " + localStorage.getItem("token"); // Replace with your storage method
      // Check if passwords match before making the API request
      if (this.user.password !== this.user.password_confirmation) {
        this.passwordsDoNotMatch = true;
        return;
      }
      // Clear the error message if passwords match
      this.passwordsDoNotMatch = false;

      // Make the API request
      axios.put("/api/user/update", {
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        password: this.user.password,
        password_confirmation: this.user.password_confirmation
      }, {
        headers: {
          Authorization: authToken
        }
      }).then(function (response) {
        // Handle success, show a success message or redirect
        _this2.successMessage = "User Account updated Successfully.";
        _this2.user.password = ""; // Clear the password field
        _this2.user.password_confirmation = ""; // Clear the password confirmation field
        setTimeout(function () {
          _this2.successMessage = null;
        }, 3000);
      })["catch"](function (error) {
        // Handle error, show an error message or log the error
        console.error("Error updating user:", error);
        _this2.errorMessage = "The password field must be at least 8 characters";
        setTimeout(function () {
          _this2.errorMessage = null;
        }, 3000);
      });
    },
    getUsers: function getUsers() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response, _response$data$stats, total_users, active_subscriptions, total_subscriptions, total_revenue;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios.get("/api/get-users");
            case 3:
              response = _context.sent;
              if (response && response.data && response.data.stats) {
                _response$data$stats = response.data.stats, total_users = _response$data$stats.total_users, active_subscriptions = _response$data$stats.active_subscriptions, total_subscriptions = _response$data$stats.total_subscriptions, total_revenue = _response$data$stats.total_revenue;
                _this3.users = response.data.stats.users;
                _this3.stats = {
                  total_users: total_users,
                  active_subscriptions: active_subscriptions,
                  total_subscriptions: total_subscriptions,
                  total_revenue: total_revenue
                };

                // this.monthlyRevenueData = monthly_revenue;

                // this.renderChart();
              } else {
                console.error("Invalid response format");
                _this3.errorMessage = "Invalid response format";
              }
              _context.next = 11;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.error("Error getting data:", _context.t0);
              _this3.errorMessage = "Error getting data";
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 7]]);
      }))();
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MyAccount.vue?vue&type=template&id=14f426f4&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MyAccount.vue?vue&type=template&id=14f426f4&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-14f426f4"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "choose-sect pb-5"
};
var _hoisted_2 = {
  "class": "container"
};
var _hoisted_3 = {
  "class": "row"
};
var _hoisted_4 = {
  "class": "col-12 col-sm-12 col-md-12 col-lg-12 text-center"
};
var _hoisted_5 = {
  key: 0,
  "class": "text-white w-50 p-2 bg-green pb-2"
};
var _hoisted_6 = {
  key: 1,
  "class": "text-danger w-50 p-2 bg-white text-red pb-2"
};
var _hoisted_7 = {
  "class": "card col-lg-12"
};
var _hoisted_8 = {
  "class": ""
};
var _hoisted_9 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
    "class": "pt-2 pb-0"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Personal Information")], -1 /* HOISTED */);
});
var _hoisted_10 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", {
    "class": "hr_line"
  }, null, -1 /* HOISTED */);
});
var _hoisted_11 = {
  "class": "form-row"
};
var _hoisted_12 = {
  "class": "col-md-4 mb-3 text-left"
};
var _hoisted_13 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "validationTooltip01"
  }, "First name", -1 /* HOISTED */);
});
var _hoisted_14 = {
  "class": "col-md-4 mb-3 text-left"
};
var _hoisted_15 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "validationTooltip02"
  }, "Last name", -1 /* HOISTED */);
});
var _hoisted_16 = {
  "class": "col-md-4 mb-3 text-left"
};
var _hoisted_17 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "validationTooltipUsername"
  }, "Email", -1 /* HOISTED */);
});
var _hoisted_18 = {
  "class": "input-group"
};
var _hoisted_19 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row pb-2"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-md-12 ml-1"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "data-toggle": "modal",
    "class": "btn btn-sm btn-primary"
  }, " Update Account ")])], -1 /* HOISTED */);
});
var _hoisted_20 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
    "class": "pt-2 pb-0"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Change Password")], -1 /* HOISTED */);
});
var _hoisted_21 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", {
    "class": "hr_line"
  }, null, -1 /* HOISTED */);
});
var _hoisted_22 = {
  "class": "form-row"
};
var _hoisted_23 = {
  "class": "col-md-4 mb-3 text-left"
};
var _hoisted_24 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "validationTooltip03"
  }, "Password", -1 /* HOISTED */);
});
var _hoisted_25 = {
  "class": "col-md-4 mb-3 text-left"
};
var _hoisted_26 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "validationTooltip04"
  }, "Confirm Password", -1 /* HOISTED */);
});
var _hoisted_27 = {
  key: 0,
  "class": "text-danger"
};
var _hoisted_28 = {
  "class": "row pb-2"
};
var _hoisted_29 = {
  "class": "col-md-12 text-left pb-3"
};
var _hoisted_30 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_layout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("layout");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_layout, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [$data.successMessage ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.successMessage), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Error Message "), $data.errorMessage ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.errorMessage), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        "class": "needs-validation",
        novalidate: "",
        onSubmit: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
          return $options.UpdateUserInfo && $options.UpdateUserInfo.apply($options, arguments);
        }, ["prevent"]))
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control",
        id: "validationTooltip01",
        placeholder: "First name",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $data.user.first_name = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.user.first_name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control",
        id: "validationTooltip02",
        placeholder: "Last name",
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $data.user.last_name = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.user.last_name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control",
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $data.user.email = $event;
        }),
        placeholder: "Email",
        disabled: ""
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.user.email]])])]), _hoisted_19]), _hoisted_20, _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "password",
        "class": "form-control",
        id: "validationTooltip03",
        placeholder: "Password",
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return $data.user.password = $event;
        }),
        required: ""
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.user.password]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "password",
        "class": "form-control",
        id: "validationTooltip04",
        placeholder: "Confirm Password",
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
          return $data.user.password_confirmation = $event;
        }),
        required: ""
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.user.password_confirmation]]), _ctx.passwordsDoNotMatch ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_27, " Passwords do not match. ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-sm btn-primary",
        type: "submit",
        disabled: _ctx.passwordsDoNotMatch
      }, " Update Password ", 8 /* PROPS */, _hoisted_30)])])])])], 32 /* HYDRATE_EVENTS */)])])])])];
    }),
    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MyAccount.vue?vue&type=style&index=0&id=14f426f4&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MyAccount.vue?vue&type=style&index=0&id=14f426f4&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n/**\n * Fonts\n */\n/* @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap'); */\n.choose-sect[data-v-14f426f4] {\n    padding-top: 300px;\n}\n/* Chrome, Safari, Edge, Opera */\ninput[data-v-14f426f4]::-webkit-outer-spin-button,\ninput[data-v-14f426f4]::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\n/* Firefox */\ninput[type=\"number\"][data-v-14f426f4] {\n    -moz-appearance: textfield;\n}\n[data-v-14f426f4]::-moz-placeholder {\n    color: white !important;\n    opacity: 1;\n    /* Firefox */\n}\n[data-v-14f426f4]::placeholder {\n    color: white !important;\n    opacity: 1;\n    /* Firefox */\n}\n[data-v-14f426f4]::-ms-input-placeholder {\n    /* Edge 12-18 */\n    color: white !important;\n}\n[data-v-14f426f4]:-ms-input-placeholder {\n    /* Edge 19+ */\n    color: white !important;\n}\n\n/* Chrome, Safari, and Opera */\ninput[data-v-14f426f4]::-moz-placeholder {\n    color: white !important;\n}\ninput[data-v-14f426f4]::placeholder {\n    color: white !important;\n}\n\n/**\n * Article Block\n */\n.article-block[data-v-14f426f4] {\n    text-align: center;\n}\n.article-block .entry-content > p[data-v-14f426f4] {\n    color: #666;\n}\n\n/**\n * Tabs Container\n */\n.tabs-container[data-v-14f426f4] {\n    padding: 2rem;\n}\n\n/**\n * Tabs Block\n */\n.tabs-block[data-v-14f426f4] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n/**\n * Tabs\n */\n.tabs[data-v-14f426f4] {\n    display: flex;\n}\nsection p[data-v-14f426f4] {\n    font-size: 24px;\n    color: #000;\n    margin-bottom: 0;\n    font-weight: 400;\n    padding-bottom: 15px;\n    line-height: 37px;\n}\n.tabs > ul[data-v-14f426f4] {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    width: 15%;\n}\n.tabs > ul li[data-v-14f426f4] {\n    display: block;\n}\n.tabs > ul li[data-v-14f426f4]:not(:last-child) {\n    border-bottom: 1px solid #262626;\n}\n.tabs > ul li a[data-v-14f426f4],\n.tabs > ul li a[data-v-14f426f4]:visited {\n    display: flex;\n    border-bottom: none;\n    text-decoration: none;\n    background-color: #cae7f7;\n    color: black;\n    padding: 1rem 1.5rem;\n    transition: all 0.2s ease-in-out;\n    word-wrap: break-word;\n    cursor: pointer;\n}\n.tabs > ul li a[data-v-14f426f4]:hover,\n.tabs > ul li a[data-v-14f426f4]:focus,\n.tabs > ul li a[data-v-14f426f4]:active {\n    border-bottom: none;\n    outline: 0;\n}\n.tabs > ul li a.active[data-v-14f426f4] {\n    background-color: #000;\n    color: white;\n}\n.tabs > ul li a[data-v-14f426f4]:hover:not(.active) {\n    color: #0067b8;\n}\n.tabs > ul li a > span[data-v-14f426f4] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n}\n.tabs > ul li a > span.tab-label[data-v-14f426f4] {\n    display: none;\n}\n.tabs section[data-v-14f426f4] {\n    width: 85%;\n    background-color: #fff;\n    padding: 1rem;\n    display: none;\n    word-wrap: break-word;\n    border-bottom: 6px solid #0067b8;\n}\n.tabs section > *[data-v-14f426f4] {\n    opacity: 0;\n    transform: translateY(20px);\n    transition: opacity 0.2s, transform 0.2s;\n}\n.tabs section > *[data-v-14f426f4]:nth-child(1) {\n    transition-delay: 0.2s;\n}\n.tabs section > *[data-v-14f426f4]:nth-child(2) {\n    transition-delay: 0.3s;\n}\n.tabs section > *[data-v-14f426f4]:nth-child(3) {\n    transition-delay: 0.4s;\n}\n.tabs section > *[data-v-14f426f4]:nth-child(4) {\n    transition-delay: 0.5s;\n}\n.tabs section > *[data-v-14f426f4]:nth-child(5) {\n    transition-delay: 0.6s;\n}\n.tabs section > *[data-v-14f426f4]:nth-child(6) {\n    transition-delay: 0.7s;\n}\n.tabs section > *[data-v-14f426f4]:nth-child(7) {\n    transition-delay: 0.8s;\n}\n.tabs section > *[data-v-14f426f4]:nth-child(8) {\n    transition-delay: 0.9s;\n}\n.tabs section > *[data-v-14f426f4]:nth-child(9) {\n    transition-delay: 1s;\n}\n.tabs section > *[data-v-14f426f4]:nth-child(10) {\n    transition-delay: 1.1s;\n}\n.tabs section > *[data-v-14f426f4]:nth-child(11) {\n    transition-delay: 1.2s;\n}\n.tabs section > *[data-v-14f426f4]:nth-child(12) {\n    transition-delay: 1.3s;\n}\n.tabs section > *[data-v-14f426f4]:nth-child(13) {\n    transition-delay: 1.4s;\n}\n.tabs section > *[data-v-14f426f4]:nth-child(14) {\n    transition-delay: 1.5s;\n}\n.tabs section > *[data-v-14f426f4]:nth-child(15) {\n    transition-delay: 1.6s;\n}\n.tabs section > *[data-v-14f426f4]:nth-child(16) {\n    transition-delay: 1.7s;\n}\n.tabs section > *[data-v-14f426f4]:nth-child(17) {\n    transition-delay: 1.8s;\n}\n.tabs section > *[data-v-14f426f4]:nth-child(18) {\n    transition-delay: 1.9s;\n}\n.tabs section > *[data-v-14f426f4]:nth-child(19) {\n    transition-delay: 2s;\n}\n.tabs section > *[data-v-14f426f4]:nth-child(20) {\n    transition-delay: 2.1s;\n}\n.tabs section.active[data-v-14f426f4] {\n    display: block;\n}\n.tabs section.active-content > *[data-v-14f426f4] {\n    opacity: 1;\n    transform: translateY(0);\n}\n@media (min-width: 576px) {\n.tabs > ul[data-v-14f426f4] {\n        width: 150px;\n}\n.tabs > ul li a[data-v-14f426f4] {\n        flex-wrap: wrap;\n}\n.tabs > ul li a > span[data-v-14f426f4] {\n        width: 100%;\n}\n.tabs > ul li a > span.tab-label[data-v-14f426f4] {\n        width: 100%;\n        display: block;\n        margin-top: 0.2rem;\n}\n.tabs section[data-v-14f426f4] {\n        width: calc(100% - 150px);\n        padding: 0rem 1rem;\n}\n}\n@media (min-width: 768px) {\nbody[data-v-14f426f4] {\n        font-size: 1.125rem;\n}\n.tabs-container[data-v-14f426f4] {\n        padding: 4rem 4rem;\n}\n}\n@media (min-width: 992px) {\n.tabs[data-v-14f426f4] {\n        width: 1200px;\n}\n}\n.modal-header[data-v-14f426f4] {\n    display: block !important;\n}\n.form-control[data-v-14f426f4] {\n    background-color: #4472c4 !important;\n}\n.hr_line[data-v-14f426f4] {\n    margin-top: 10px !important;\n    margin-bottom: 10px !important;\n    border: 0 !important;\n    border-top: 2px solid rgb(0 0 0 / 38%) !important;\n}\n.bg-green[data-v-14f426f4] {\n    background-color: rgb(17, 199, 231);\n}\n.text-danger[data-v-14f426f4] {\n    color: #dc3545 !important;\n    font-size: 15px;\n}\n.text-white[data-v-14f426f4] {\n    font-size: 15px;\n}\n.user-text-black[data-v-14f426f4] {\n    color: black;\n    font-weight: 500;\n    font-size: 18px;\n}\n.user-number-black[data-v-14f426f4] {\n    color: black;\n    /* font-weight: 700; */\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MyAccount.vue?vue&type=style&index=0&id=14f426f4&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MyAccount.vue?vue&type=style&index=0&id=14f426f4&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyAccount_vue_vue_type_style_index_0_id_14f426f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MyAccount.vue?vue&type=style&index=0&id=14f426f4&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MyAccount.vue?vue&type=style&index=0&id=14f426f4&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyAccount_vue_vue_type_style_index_0_id_14f426f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyAccount_vue_vue_type_style_index_0_id_14f426f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/MyAccount.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/MyAccount.vue ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyAccount_vue_vue_type_template_id_14f426f4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyAccount.vue?vue&type=template&id=14f426f4&scoped=true */ "./resources/js/components/MyAccount.vue?vue&type=template&id=14f426f4&scoped=true");
/* harmony import */ var _MyAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyAccount.vue?vue&type=script&lang=js */ "./resources/js/components/MyAccount.vue?vue&type=script&lang=js");
/* harmony import */ var _MyAccount_vue_vue_type_style_index_0_id_14f426f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyAccount.vue?vue&type=style&index=0&id=14f426f4&scoped=true&lang=css */ "./resources/js/components/MyAccount.vue?vue&type=style&index=0&id=14f426f4&scoped=true&lang=css");
/* harmony import */ var E_wamp64_3_3_0_www_cryptowiz_new3_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,E_wamp64_3_3_0_www_cryptowiz_new3_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_MyAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MyAccount_vue_vue_type_template_id_14f426f4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-14f426f4"],['__file',"resources/js/components/MyAccount.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./resources/js/components/MyAccount.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/components/MyAccount.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MyAccount.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MyAccount.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/MyAccount.vue?vue&type=template&id=14f426f4&scoped=true":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/MyAccount.vue?vue&type=template&id=14f426f4&scoped=true ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyAccount_vue_vue_type_template_id_14f426f4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyAccount_vue_vue_type_template_id_14f426f4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MyAccount.vue?vue&type=template&id=14f426f4&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MyAccount.vue?vue&type=template&id=14f426f4&scoped=true");


/***/ }),

/***/ "./resources/js/components/MyAccount.vue?vue&type=style&index=0&id=14f426f4&scoped=true&lang=css":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/MyAccount.vue?vue&type=style&index=0&id=14f426f4&scoped=true&lang=css ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyAccount_vue_vue_type_style_index_0_id_14f426f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MyAccount.vue?vue&type=style&index=0&id=14f426f4&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MyAccount.vue?vue&type=style&index=0&id=14f426f4&scoped=true&lang=css");


/***/ })

}]);