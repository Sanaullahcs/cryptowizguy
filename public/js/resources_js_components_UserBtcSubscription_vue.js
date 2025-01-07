"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_UserBtcSubscription_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UserBtcSubscription.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UserBtcSubscription.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../Layout.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './../../../assets/logo.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.css");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle.min.js */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_toastification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-toastification */ "./node_modules/vue-toastification/dist/index.mjs");
/* harmony import */ var html2pdf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html2pdf.js */ "./node_modules/html2pdf.js/dist/html2pdf.js");
/* harmony import */ var html2pdf_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html2pdf_js__WEBPACK_IMPORTED_MODULE_4__);
var _methods;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }







/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Home",
  components: {
    Layout: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../Layout.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    Logo: Object(function webpackMissingModule() { var e = new Error("Cannot find module './../../../assets/logo.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  data: function data() {
    var _ref;
    return _ref = {
      subscriptions: [],
      // Initialize subscriptions data property
      usersubscription: [],
      // Initialize usersubscription data property
      errorMessage: null,
      cancellationMessage: "",
      subscription_id: "",
      formattedDate: "",
      promocode: "",
      discount: "",
      user: null,
      first_name: null,
      last_name: null,
      email: null
    }, _defineProperty(_ref, "user", null), _defineProperty(_ref, "Logo", Object(function webpackMissingModule() { var e = new Error("Cannot find module './../../../assets/logo.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), _defineProperty(_ref, "regisitrationDiscount", null), _defineProperty(_ref, "subscriptiondiscount", null), _defineProperty(_ref, "useridSub", null), _ref;
  },
  mounted: function mounted() {
    this.getSubscriptionPlans();
    this.formatCurrentDate();
    var userData = localStorage.getItem("user");
    var user = JSON.parse(userData);
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.email = user.email;
    this.useridSub = user.id;
  },
  created: function created() {
    this.toast = (0,vue_toastification__WEBPACK_IMPORTED_MODULE_3__.useToast)();
  },
  methods: (_methods = {
    formatDate: function formatDate(timestamp) {
      var date = new Date(timestamp);
      var options = {
        day: "numeric",
        month: "short",
        year: "numeric"
      };
      return date.toLocaleDateString("en-US", options).toUpperCase();
    },
    generatePDF: function generatePDF() {
      var _this = this;
      var element = document.querySelector(".printReceipt");
      var elementsToHide = document.querySelectorAll("#on-print-none");
      elementsToHide.forEach(function (el) {
        el.style.display = "none";
      });
      var options = {
        margin: 10,
        filename: "Transaction_Receipt_".concat(this.getFormattedTimestamp(), ".pdf"),
        image: {
          type: "jpeg",
          quality: 0.98
        },
        html2canvas: {
          scale: 2
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait"
        }
      };
      this.is_export_in_progress = true;
      this.toast.info("Preparing the file");
      html2pdf_js__WEBPACK_IMPORTED_MODULE_4___default()().from(element).set(options).outputPdf().then(function () {
        setTimeout(function () {
          _this.toast.clear();
          _this.is_export_in_progress = false;
        }, 5000);
      }).save();
    },
    getFormattedTimestamp: function getFormattedTimestamp() {
      var now = new Date();
      var year = now.getFullYear();
      var month = "".concat(now.getMonth() + 1).padStart(2, "0");
      var day = "".concat(now.getDate()).padStart(2, "0");
      var hours = "".concat(now.getHours()).padStart(2, "0");
      var minutes = "".concat(now.getMinutes()).padStart(2, "0");
      var seconds = "".concat(now.getSeconds()).padStart(2, "0");
      return "".concat(year, "-").concat(month, "-").concat(day, "_").concat(hours, "-").concat(minutes, "-").concat(seconds);
    },
    exportFile: function exportFile() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var params, url, response, link, suggestedFilename, contentDisposition, filenameRegex, matches, _error$response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              params = {
                subscriptionName: _this2.getSubscriptionName(_this2.selectedPlan),
                subscriptionPrice: _this2.getSubscriptionPrice(_this2.selectedPlan),
                formattedDate: _this2.formattedDate,
                first_name: _this2.first_name,
                last_name: _this2.last_name,
                regisitrationDiscount: _this2.regisitrationDiscount,
                discount: _this2.discount,
                discountAmount: _this2.discountAmount,
                payableTotal: _this2.payableTotal
                // Add other parameters if needed
              };
              _this2.is_export_in_progress = true;
              _this2.toast.info("Preparing the file");
              url = "/api/receipt-export";
              _context.prev = 4;
              _context.next = 7;
              return axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(url, {
                params: params,
                responseType: "blob" // Response type is set to 'blob' for binary data
              });
            case 7:
              response = _context.sent;
              // Create a temporary link element
              link = document.createElement("a");
              link.href = URL.createObjectURL(new Blob([response.data]));

              // Extract filename from response headers if available
              suggestedFilename = "receipt.pdf";
              contentDisposition = response.headers["content-disposition"];
              if (contentDisposition) {
                filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                matches = filenameRegex.exec(contentDisposition);
                if (matches != null && matches[1]) {
                  suggestedFilename = matches[1].replace(/['"]/g, "");
                }
              }
              link.setAttribute("download", suggestedFilename);
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              _context.next = 22;
              break;
            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](4);
              _this2.toast.error(((_error$response = _context.t0.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || "An error occurred while downloading");
            case 22:
              _context.prev = 22;
              _this2.is_export_in_progress = false;
              return _context.finish(22);
            case 25:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[4, 19, 22, 25]]);
      }))();
    },
    formatCurrentDate: function formatCurrentDate() {
      var currentDate = new Date();
      var options = {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "numeric"
      };
      var formatted = currentDate.toLocaleDateString("en-US", options);
      this.formattedDate = formatted.replace(",", " at");
    },
    getSubscriptionPlans: function getSubscriptionPlans() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var user, response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              user = JSON.parse(localStorage.getItem("user"));
              _context2.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_5__["default"].get("/api/user-subscription-plan", {
                headers: {
                  Authorization: "Bearer ".concat(user.token) // Assuming user object has a token property
                },
                params: {
                  userId: user.id // Assuming user object has an id property
                }
              });
            case 4:
              response = _context2.sent;
              _this3.subscriptions = response.data.subscription.subscriptions;
              _this3.usersubscription = response.data.subscription.subscriptionsPlan;
              _this3.subscriptiondiscount = response.data.subscription.subscriptiondiscount;
              console.log("subscriptions", _this3.subscriptions);
              console.log("usersubscription", _this3.usersubscription);
              _context2.next = 16;
              break;
            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](0);
              console.error("Error getting subscription plans:", _context2.t0);
              _this3.errorMessage = "Error getting subscription plans";
            case 16:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 12]]);
      }))();
    }
  }, _defineProperty(_methods, "formatDate", function formatDate(dateString) {
    // Convert the string to a Date object
    var date = new Date(dateString);
    // Format the date as "Month Day, Year" (e.g., September 24, 2023)
    var formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    return formattedDate;
  }), _defineProperty(_methods, "cancelSubscription", function cancelSubscription() {
    var _this4 = this;
    var subscriptionId = JSON.parse(localStorage.getItem("plan_id")); // Replace with actual subscription ID
    var userId = this.useridSub;
    axios__WEBPACK_IMPORTED_MODULE_5__["default"].post("/api/cancel-subscription", {
      subscription_id: subscriptionId,
      user_id: userId
    }).then(function (response) {
      console.log(response.data);
      // Handle success response here
      _this4.$router.push("/subscription-plan"); // Replace '/dashboard' with your dashboard route
      localStorage.removeItem("plan_id");
      localStorage.removeItem("subscribed"); // Remove plan_id upon successful cancellation
      _this4.cancellationMessage = "Your subscription has been successfully canceled.";
      // For example, update the UI or show a success message
    })["catch"](function (error) {
      console.error(error.response.data);
      // Handle error response here
      _this4.cancellationMessage = "Failed to cancel the subscription. Please try again.";
      // For example, show an error message to the user
    });
  }), _defineProperty(_methods, "showReceiptModal", function showReceiptModal() {
    // Show the Bootstrap modal
    $("#myModalDiscount").modal("show");
  }), _defineProperty(_methods, "hideReceiptModal", function hideReceiptModal() {
    // Hide the Bootstrap modal
    $("#myModalDiscount").modal("hide");
  }), _defineProperty(_methods, "getPlan", function getPlan() {
    var _this5 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            axios__WEBPACK_IMPORTED_MODULE_5__["default"].get("/api/get-subscription-plans").then(function (response) {
              _this5.regisitrationDiscount = response.data.settings; // Store the retrieved coupons in the data property
              console.log("subscriptionplan", _this5.subscriptionplan);
            })["catch"](function (error) {
              console.error("Error getting coupons:", error);
              _this5.errorMessage = "Error getting coupons"; // Set an error message
            });
          case 1:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))();
  }), _methods)
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UserBtcSubscription.vue?vue&type=template&id=776049b0&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UserBtcSubscription.vue?vue&type=template&id=776049b0&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-776049b0"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "container pb-5 user-padd"
};
var _hoisted_2 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-12 col-sm-12 mw-wwh m-auto col-md-12 col-lg-12 header-sect pb-4"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "SUBSCRIPTION DETAILS PAGE")], -1 /* HOISTED */);
});
var _hoisted_3 = {
  "class": "row"
};
var _hoisted_4 = {
  "class": "col-md-6"
};
var _hoisted_5 = {
  "class": "card"
};
var _hoisted_6 = {
  "class": "card-body"
};
var _hoisted_7 = {
  "class": "row"
};
var _hoisted_8 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-md-6"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
    "class": "card-title"
  }, "Current Subscription Plan")], -1 /* HOISTED */);
});
var _hoisted_9 = {
  "class": "col-md-6 text-right"
};
var _hoisted_10 = {
  "class": "row pt-3 pb-2"
};
var _hoisted_11 = {
  "class": "col-md-6"
};
var _hoisted_12 = {
  "class": "col-md-6 text-right"
};
var _hoisted_13 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "card-text"
  }, " Next payment due date is seven days before subscription end date. ", -1 /* HOISTED */);
});
var _hoisted_14 = {
  "class": "row"
};
var _hoisted_15 = {
  "class": "col-md-6"
};
var _hoisted_16 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Start Date:", -1 /* HOISTED */);
});
var _hoisted_17 = {
  "class": "col-md-6 text-right"
};
var _hoisted_18 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "End Date:", -1 /* HOISTED */);
});
var _hoisted_19 = {
  "class": "col-md-6"
};
var _hoisted_20 = {
  "class": "card"
};
var _hoisted_21 = {
  "class": "card-body"
};
var _hoisted_22 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
    "class": "card-title"
  }, "Cancel Subscription Plan", -1 /* HOISTED */);
});
var _hoisted_23 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Subscriptions do not end mid-term.", -1 /* HOISTED */);
});
var _hoisted_24 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "pb-5"
  }, "There is no full refund or partial refund.", -1 /* HOISTED */);
});
var _hoisted_25 = {
  id: "myModalDiscount",
  "class": "modal fade",
  tabindex: "-1",
  role: "dialog",
  "aria-labelledby": "myModalLabel",
  "aria-hidden": "true"
};
var _hoisted_26 = {
  "class": "modal-dialog"
};
var _hoisted_27 = {
  "class": "modal-content printReceipt"
};
var _hoisted_28 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "modal-header"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "close",
    id: "on-print-none",
    "data-dismiss": "modal"
  }, " × "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
    "class": "modal-title text-center"
  }, "TRANSACTION RECEIPT")], -1 /* HOISTED */);
});
var _hoisted_29 = {
  "class": "container",
  id: "receiptContainer"
};
var _hoisted_30 = {
  "class": "row"
};
var _hoisted_31 = {
  "class": "col-md-12 col-xs-12 text-right"
};
var _hoisted_32 = {
  "class": "container"
};
var _hoisted_33 = {
  "class": "row"
};
var _hoisted_34 = {
  "class": "col-md-12 col-xs-12 text-center"
};
var _hoisted_35 = ["src"];
var _hoisted_36 = {
  "class": "col-md-12 col-xs-12 text-left",
  style: {
    "padding-top": "20px"
  }
};
var _hoisted_37 = {
  style: {
    "font-size": "22px",
    "font-weight": "bold",
    "padding-bottom": "6px"
  }
};
var _hoisted_38 = {
  style: {
    "padding-bottom": "6px"
  }
};
var _hoisted_39 = {
  "class": "pl-3"
};
var _hoisted_40 = {
  "class": "text-right"
};
var _hoisted_41 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Payment Method", -1 /* HOISTED */);
});
var _hoisted_42 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Card Type", -1 /* HOISTED */);
});
var _hoisted_43 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Transaction number", -1 /* HOISTED */);
});
var _hoisted_44 = {
  "class": "container"
};
var _hoisted_45 = {
  "class": "column-table"
};
var _hoisted_46 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "title-section"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Summary")], -1 /* HOISTED */);
});
var _hoisted_47 = {
  id: "recipt"
};
var _hoisted_48 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "Billed to", -1 /* HOISTED */);
});
var _hoisted_49 = {
  style: {
    "text-align": ""
  }
};
var _hoisted_50 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    style: {
      "text-align": ""
    }
  }, "Invoice number", -1 /* HOISTED */);
});
var _hoisted_51 = {
  style: {
    "text-align": "end"
  }
};
var _hoisted_52 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "Currency"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    style: {
      "text-align": "end"
    }
  }, "USD - US Dollar")])], -1 /* HOISTED */);
});
var _hoisted_53 = {
  id: "recipt",
  "class": "mt-3"
};
var _hoisted_54 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
    "class": "title-section"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    style: {
      "text-align": ""
    }
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    style: {
      "text-align": ""
    }
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    style: {
      "text-align": ""
    }
  })])], -1 /* HOISTED */);
});
var _hoisted_55 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* HOISTED */);
});
var _hoisted_56 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* HOISTED */);
});
var _hoisted_57 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* HOISTED */);
});
var _hoisted_58 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "Standard price", -1 /* HOISTED */);
});
var _hoisted_59 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* HOISTED */);
});
var _hoisted_60 = {
  key: 0
};
var _hoisted_61 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "Less discount", -1 /* HOISTED */);
});
var _hoisted_62 = {
  key: 1
};
var _hoisted_63 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "Less discount", -1 /* HOISTED */);
});
var _hoisted_64 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* HOISTED */);
});
var _hoisted_65 = {
  key: 2
};
var _hoisted_66 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "Equals amount due", -1 /* HOISTED */);
});
var _hoisted_67 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* HOISTED */);
});
var _hoisted_68 = {
  key: 3
};
var _hoisted_69 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "Less amount paid", -1 /* HOISTED */);
});
var _hoisted_70 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* HOISTED */);
});
var _hoisted_71 = {
  key: 4
};
var _hoisted_72 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "Equals amount due", -1 /* HOISTED */);
});
var _hoisted_73 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* HOISTED */);
});
var _hoisted_74 = {
  key: 5
};
var _hoisted_75 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "Less amount paid", -1 /* HOISTED */);
});
var _hoisted_76 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* HOISTED */);
});
var _hoisted_77 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "Equals balance due"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "$ 0.00")], -1 /* HOISTED */);
});
var _hoisted_78 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "container",
    style: {
      "display": "none"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "transaction-type"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    style: {
      "text-align": "center",
      "font-size": "18px",
      "font-weight": "300",
      "letter-spacing": "3"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TRANSACTION RECEIPT ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div\r\n                  style=\"\r\n                    text-align: center;\r\n                    font-size: 16px;\r\n                    font-weight: 500;\r\n                    letter-spacing: 1;\r\n                  \"\r\n                >\r\n                  Transaction Type\r\n                </div> ")])], -1 /* HOISTED */);
});
var _hoisted_79 = {
  "class": "container",
  style: {
    "display": "none"
  }
};
var _hoisted_80 = {
  "class": "column-table"
};
var _hoisted_81 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "title-section"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "RECIPIENT DETAILS")], -1 /* HOISTED */);
});
var _hoisted_82 = {
  id: "recipt"
};
var _hoisted_83 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "SUBSCRIPTION NAME"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    style: {
      "text-align": "center"
    }
  }, "STRIPE PRICE"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    style: {
      "text-align": "right"
    }
  }, "QUANTITY")])], -1 /* HOISTED */);
});
var _hoisted_84 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_85 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    style: {
      "text-align": "right"
    }
  }, "1", -1 /* HOISTED */);
});
var _hoisted_86 = {
  "class": "container",
  style: {
    "display": "none"
  }
};
var _hoisted_87 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "detail-receipt"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "title-section"
  }, "TRANSACTION DETAILS"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row",
    style: {
      "margin-top": "20px"
    }
  })], -1 /* HOISTED */);
});
var _hoisted_88 = {
  "class": "radio-cards"
};
var _hoisted_89 = {
  key: 0,
  "class": "inner-content border-buttom",
  style: {
    "display": "flex"
  }
};
var _hoisted_90 = {
  "class": "content-sect"
};
var _hoisted_91 = {
  "class": "value-text justify-content-left text-left pl-3 pb-0"
};
var _hoisted_92 = {
  "class": "capital-duration"
};
var _hoisted_93 = {
  "class": "price-month"
};
var _hoisted_94 = {
  key: 1,
  "class": "inner-content",
  style: {
    "display": "flex"
  }
};
var _hoisted_95 = {
  "class": "content-sect"
};
var _hoisted_96 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "value-text justify-content-left text-left pl-3 pb-0"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Payable Total")], -1 /* HOISTED */);
});
var _hoisted_97 = {
  "class": "price-month"
};
var _hoisted_98 = {
  key: 2,
  "class": "inner-content border-buttom"
};
var _hoisted_99 = {
  "class": "content-sect"
};
var _hoisted_100 = {
  "class": "value-text justify-content-left text-left pl-3 pb-0"
};
var _hoisted_101 = {
  "class": "capital-duration"
};
var _hoisted_102 = {
  "class": "price-month"
};
var _hoisted_103 = {
  key: 3,
  "class": "inner-content"
};
var _hoisted_104 = {
  "class": "content-sect"
};
var _hoisted_105 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "value-text justify-content-left text-left pl-3 pb-0"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Payable Total")], -1 /* HOISTED */);
});
var _hoisted_106 = {
  "class": "price-month"
};
var _hoisted_107 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "container",
    style: {
      "margin-top": "50px",
      "font-weight": "300"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-md-12",
    style: {
      "text-align": "center"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    style: {
      "font-size": "16px"
    }
  }, " The transaction shown on your receipt is correct at the time of downloading. ")])], -1 /* HOISTED */);
});
var _hoisted_108 = {
  "class": "modal-footer",
  id: "on-print-none"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;
  var _component_layout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("layout");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_layout, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
          return $options.showReceiptModal && $options.showReceiptModal.apply($options, arguments);
        }, ["prevent"])),
        "class": "btn btn-sm btn-primary",
        "data-toggle": "modal",
        "data-target": "#myModalDiscount"
      }, " View Invoice ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.subscriptions.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.usersubscription.duration), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, " $ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_this.subscriptions.stripe_price / 100).toFixed(2)), 1 /* TEXT */)])]), _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatDate($data.subscriptions.trial_ends_at)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatDate($data.subscriptions.ends_at)), 1 /* TEXT */)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [_hoisted_22, _hoisted_23, _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        "class": "btn bt-sm btn-primary mt-5",
        onClick: _cache[1] || (_cache[1] = function () {
          return $options.cancelSubscription && $options.cancelSubscription.apply($options, arguments);
        })
      }, "Cancel Subscription")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"row pt-2\">\r\n        <div class=\"col-md-12\">\r\n          <div v-if=\"cancellationMessage\" class=\"text-white w-100 p-2 bg-green w-50 text-center\">\r\n            {{ cancellationMessage }}\r\n          </div>\r\n        </div>\r\n      </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal content"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        method: "post",
        onSubmit: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
          return _ctx.SaveCoupon && _ctx.SaveCoupon.apply(_ctx, arguments);
        }, ["prevent"]))
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"col-md-6 col-xs-6\">Company LTD 2016</div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, " Date: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.formattedDate), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        href: "javascript:void()",
        onClick: _cache[2] || (_cache[2] = function () {
          return _ctx.$router.push('/');
        })
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: $data.Logo,
        alt: "logo",
        "class": "img-logo"
      }, null, 8 /* PROPS */, _hoisted_35)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, " Name: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.first_name) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.last_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, " (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.email) + ")", 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.subscriptions["card_brand"]) + " - **** **** " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.subscriptions["last4"]), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.subscriptions.type), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(":" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.subscriptions.invoice_number), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div style=\"padding-bottom: 6px\">\r\n                    Address: 9 Portland Gardens\r\n                  </div>\r\n                  <div>Post code: N4 1HU</div> ")])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [_hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.email), 1 /* TEXT */), _hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.subscriptions.id), 1 /* TEXT */)])]), _hoisted_52]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_53, [_hoisted_54, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatDate($data.subscriptions.created_at)) + " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatDate($data.subscriptions.ends_at)), 1 /* TEXT */), _hoisted_55, _hoisted_56, _hoisted_57]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_58, _hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " $ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_this.usersubscription.price), 1 /* TEXT */)]), $data.subscriptions.couponcode == '' && $data.subscriptions.registerdiscount ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_60, [_hoisted_61, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "(" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.subscriptiondiscount) + ") % off", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(($data.usersubscription.price / 100 * $data.subscriptiondiscount).toFixed(2)), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.subscriptions.couponcode != '' && $data.subscriptions.registerdiscount == null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_62, [_hoisted_63, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "(" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.subscriptiondiscount) + ") % off", 1 /* TEXT */), _hoisted_64])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.subscriptions.couponcode == '' && $data.subscriptions.registerdiscount ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_65, [_hoisted_66, _hoisted_67, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " $ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_this.usersubscription.price - $data.usersubscription.price / 100 * $data.subscriptiondiscount).toFixed(2)), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.subscriptions.couponcode == '' && $data.subscriptions.registerdiscount ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_68, [_hoisted_69, _hoisted_70, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " $ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_this.usersubscription.price - _this.usersubscription.price / 100 * _this.subscriptiondiscount).toFixed(2)), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.subscriptions.couponcode != '' && $data.subscriptions.registerdiscount == null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_71, [_hoisted_72, _hoisted_73, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_this.subscriptions.stripe_price / 100).toFixed(2)), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.subscriptions.couponcode != '' && $data.subscriptions.registerdiscount == null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_74, [_hoisted_75, _hoisted_76, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_this.subscriptions.stripe_price / 100).toFixed(2)), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_77])])])]), _hoisted_78, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_79, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_80, [_hoisted_81, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_82, [_hoisted_83, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.subscriptions.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_84, " $ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_this.usersubscription.price), 1 /* TEXT */), _hoisted_85])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_86, [_hoisted_87, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_88, [$data.subscriptions.couponcode == '' && $data.subscriptions.registerdiscount ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_89, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_90, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_91, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Registration Discount "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_92, " % (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.subscriptiondiscount) + ")", 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_93, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " $ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(($data.usersubscription.price / 100 * $data.subscriptiondiscount).toFixed(2)), 1 /* TEXT */)])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.subscriptions.couponcode == '' && $data.subscriptions.registerdiscount ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_94, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_95, [_hoisted_96, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_97, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " $ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_this.usersubscription.price - _this.usersubscription.price / 100 * _this.subscriptiondiscount).toFixed(2)), 1 /* TEXT */)])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" The part of HTML where you want to display discount information "), $data.subscriptions.couponcode != '' && $data.subscriptions.registerdiscount == null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_98, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_99, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_100, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Discount "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_101, " % (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.subscriptiondiscount) + ")", 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_102, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " $ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(($data.usersubscription.price / 100 * $data.subscriptiondiscount).toFixed(2)), 1 /* TEXT */)])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.subscriptions.couponcode != '' && $data.subscriptions.registerdiscount == null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_103, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_104, [_hoisted_105, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_106, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " $ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_this.subscriptions.stripe_price / 100).toFixed(2)), 1 /* TEXT */)])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), _hoisted_107], 32 /* HYDRATE_EVENTS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_108, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-sm btn-primary my-2 cursor-pointer",
        onClick: _cache[4] || (_cache[4] = function () {
          return $options.generatePDF && $options.generatePDF.apply($options, arguments);
        })
      }, " Download PDF ")])])])])])];
    }),
    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UserBtcSubscription.vue?vue&type=style&index=0&id=776049b0&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UserBtcSubscription.vue?vue&type=style&index=0&id=776049b0&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.user-padd[data-v-776049b0] {\r\n  padding-top: 300px !important;\n}\n.header-sect h2[data-v-776049b0] {\r\n  font-size: 40px;\r\n  font-weight: 600;\r\n  color: #000;\r\n  width: 100%;\n}\n.card[data-v-776049b0] {\r\n  border: 1px solid rgb(0 0 0 / 0%);\r\n  background: #cbe7f9;\r\n  border-radius: 16px;\n}\nh3[data-v-776049b0] {\r\n  font-weight: 700;\n}\n.card-title[data-v-776049b0] {\r\n  margin-bottom: 0.75rem;\r\n  font-size: 18px;\r\n  font-weight: 600;\n}\np[data-v-776049b0] {\r\n  margin-bottom: 0;\r\n  margin-bottom: 12px;\r\n  font-size: 16px;\r\n  color: #212529;\r\n  font-weight: 500;\n}\nh4[data-v-776049b0] {\r\n  font-weight: 600;\r\n  text-transform: capitalize;\r\n  font-size: 18px;\n}\n.bg-green[data-v-776049b0] {\r\n  background-color: rgb(17, 199, 231);\r\n  font-size: 18px;\n}\r\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UserBtcSubscription.vue?vue&type=style&index=1&id=776049b0&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UserBtcSubscription.vue?vue&type=style&index=1&id=776049b0&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n/* @import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap\"); */\n.bg-green[data-v-776049b0] {\r\n  background-color: #00b050;\n}\n.modal-header[data-v-776049b0] {\r\n  border: unset;\n}\n.title-section h3[data-v-776049b0] {\r\n  font-size: 20px;\r\n  font-weight: 500;\n}\n*[data-v-776049b0] {\r\n  font-family: \"Open Sans\", sans-serif;\n}\n.modal-content.printReceipt[data-v-776049b0] {\r\n  border: unset;\n}\r\n/* Your CSS styles for modal here */\n#receiptContainer[data-v-776049b0] {\r\n  font-family: \"Helvetica Neue\", Helvetica, \"Segoe UI\", Arial, sans-serif;\r\n  font-size: 13px;\n}\ntable#recipt[data-v-776049b0] {\r\n  font-size: 19px;\r\n  font-weight: 600;\n}\n.inner-content.title-section[data-v-776049b0] {\r\n  font-size: 18px;\r\n  border-bottom: 1px solid;\r\n  padding-top: 12px;\n}\n.title-section[data-v-776049b0] {\r\n  font-size: 18px;\r\n  border-bottom: 1px solid;\r\n  padding-top: 12px;\n}\nimg.img-logo[data-v-776049b0] {\r\n  width: 100%;\r\n  max-width: 112px;\n}\n#receiptContainer .container[data-v-776049b0] {\r\n  margin-top: 40px;\n}\n#receiptContainer .col-md-6[data-v-776049b0],\r\n#receiptContainer .col-xs-6[data-v-776049b0] {\r\n  width: 50%;\n}\n#receiptContainer .col-md-7[data-v-776049b0],\r\n#receiptContainer .col-xs-7[data-v-776049b0] {\r\n  width: 58.333333%;\n}\n.detail-receipt .title-section[data-v-776049b0] {\r\n  font-size: 20px;\r\n  border-bottom: 1px solid;\r\n  padding-top: 19px;\r\n  font-weight: 700;\r\n  padding-left: 11px;\n}\ntable#recipt td[data-v-776049b0] {\r\n  font-size: 13px;\r\n  padding: 7px;\n}\n#receiptContainer.col-md-5[data-v-776049b0],\r\n#receiptContainer.col-xs-5[data-v-776049b0] {\r\n  width: 41.666667%;\n}\n#receiptContainer .row[data-v-776049b0] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin-right: -15px;\r\n  margin-left: -15px;\n}\n#receiptContainer .text-right[data-v-776049b0] {\r\n  text-align: right;\n}\n#receiptContainer img[data-v-776049b0] {\r\n  width: 100px;\r\n  height: 120px;\n}\n#receiptContainer .title-section[data-v-776049b0] {\r\n  font-size: 16px;\r\n  letter-spacing: 1px;\r\n  border-bottom: 2px #666666 solid;\r\n  padding-bottom: 10px;\n}\n#receiptContainer table[data-v-776049b0] {\r\n  width: 100%;\r\n  margin-top: 20px;\n}\n#recipt td[data-v-776049b0] {\r\n  /* border: 1px solid #666666; */\r\n  border-collapse: collapse;\r\n  font-size: 16px;\n}\n#receiptContainer th[data-v-776049b0],\r\ntd[data-v-776049b0] {\r\n  padding: 1px;\n}\n#receiptContainer hr[data-v-776049b0] {\r\n  border-top: 1px solid #666666;\n}\ntable#recipt[data-v-776049b0] {\r\n  width: 100%;\n}\ntable#recipt td[data-v-776049b0] {\r\n  /* text-align: center !important; */\n}\n.time-date[data-v-776049b0] {\r\n  font-size: 20px;\n}\n.time-date[data-v-776049b0]:first-child {\r\n  font-weight: 300;\r\n  font-size: 18px;\n}\n.border-bottom[data-v-776049b0] {\r\n  border-bottom: 1px solid !important;\n}\n.modal-backdrop[data-v-776049b0] {\r\n  position: absolute !important;\n}\n@media (min-width: 576px) {\n.modal-backdrop[data-v-776049b0] {\r\n    position: absolute !important;\n}\n.modal-dialog[data-v-776049b0] {\r\n    max-width: 850px;\r\n    margin: 1.75rem auto;\n}\n}\n.btn-apply[data-v-776049b0] {\r\n  background-color: #e8e8e8 !important;\n}\n.input-group[data-v-776049b0] {\r\n  flex-wrap: initial !important;\n}\n.pt-35[data-v-776049b0] {\r\n  padding-top: 0.5rem;\r\n  display: block;\n}\n.capital-duration[data-v-776049b0] {\r\n  text-transform: capitalize;\r\n  font-size: 18px;\r\n  font-weight: 400;\n}\n.border-buttom[data-v-776049b0] {\r\n  border: 1px solid #8a8383;\r\n  border-left: none;\r\n  border-top: none;\r\n  border-right: none;\n}\n.inner-content[data-v-776049b0] {\r\n  /* display: flex; */\r\n  align-items: start;\r\n  width: 100%;\n}\n.btn-options button[data-v-776049b0] {\r\n  margin: 7px;\n}\n.value-text h2[data-v-776049b0] {\r\n  margin: 0;\n}\n.value-text h3[data-v-776049b0] {\r\n  margin: 6px 0;\r\n  font-weight: 700;\n}\n.price-month p[data-v-776049b0] {\r\n  color: black;\r\n  font-size: 18px;\n}\n.value-text h4[data-v-776049b0] {\r\n  font-size: 18px;\n}\n.subscription-info[data-v-776049b0] {\r\n  max-width: 600px;\r\n  margin: 0 auto;\n}\n.info-item[data-v-776049b0] {\r\n  margin-bottom: 15px;\n}\n.value-text p[data-v-776049b0] {\r\n  margin: 0;\r\n  color: black;\r\n  font-size: 22px;\r\n  font-weight: 500;\n}\nlabel.custom-radio input[data-v-776049b0] {\r\n  margin-top: 10px;\r\n  margin-right: 16px;\n}\n.content-sect[data-v-776049b0] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 97%;\n}\n.radio-btn-green[data-v-776049b0] {\r\n  width: 5%;\n}\n.radio-card[data-v-776049b0] {\r\n  border: 1px solid grey;\r\n  width: 100%;\r\n  margin: auto;\r\n  border-radius: 16px;\r\n  padding: 25px;\n}\nhtml[data-v-776049b0] {\r\n  height: 100%;\n}\np[data-v-776049b0] {\r\n  color: grey;\n}\n#heading[data-v-776049b0] {\r\n  text-transform: uppercase;\r\n  color: #673ab7;\r\n  font-weight: normal;\n}\n#msform[data-v-776049b0] {\r\n  text-align: center;\r\n  position: relative;\r\n  margin-top: 20px;\n}\n#msform fieldset[data-v-776049b0] {\r\n  background: white;\r\n  border: 0 none;\r\n  border-radius: 0.5rem;\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  margin: 0;\r\n  padding-bottom: 20px;\r\n  position: relative;\n}\n.form-card[data-v-776049b0] {\r\n  text-align: left;\n}\n#msform fieldset[data-v-776049b0]:not(:first-of-type) {\r\n  display: none;\n}\n#msform input[data-v-776049b0],\r\n#msform textarea[data-v-776049b0] {\r\n  padding: 8px 15px 8px 15px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 0px;\r\n  margin-bottom: 25px;\r\n  margin-top: 13px;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  font-family: montserrat;\r\n  color: #2c3e50;\r\n  background-color: #eceff1;\r\n  font-size: 16px;\r\n  letter-spacing: 1px;\n}\n#msform input[data-v-776049b0]:focus,\r\n#msform textarea[data-v-776049b0]:focus {\r\n  box-shadow: none !important;\r\n  border: 1px solid #673ab7;\r\n  outline-width: 0;\n}\ndiv#payment-section p[data-v-776049b0] {\r\n  text-align: justify;\r\n  margin-bottom: 12px;\r\n  font-size: 16px;\r\n  color: #212529;\r\n  font-weight: 500;\n}\n#msform .action-button[data-v-776049b0] {\r\n  /* width: 100px; */\r\n\r\n  /* padding: 10px 19px; */\r\n  margin-top: 10px;\r\n  float: right;\n}\n.btn[data-v-776049b0] {\r\n  display: inline-block;\r\n  font-weight: 400;\r\n  color: #212529;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  user-select: none;\r\n  background-color: transparent;\r\n  border: 1px solid transparent;\r\n  padding: 0.375rem 0.75rem;\r\n  font-size: 1rem;\r\n  line-height: 1.5;\r\n  border-radius: 0.25rem;\r\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\r\n    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.btn-primary[data-v-776049b0] {\r\n  color: #fff;\r\n  background-color: #007bff;\r\n  border-color: #007bff;\n}\n.btn-sm[data-v-776049b0],\r\n.btn-group-sm > .btn[data-v-776049b0] {\r\n  padding: 0.25rem 0.5rem;\r\n  font-size: 0.875rem;\r\n  line-height: 1.5;\r\n  border-radius: 0.2rem;\n}\n#msform .action-button[data-v-776049b0]:hover,\r\n#msform .action-button[data-v-776049b0]:focus {\r\n  background-color: #311b92;\n}\n#msform .action-button-previous[data-v-776049b0] {\r\n  font-weight: bold;\r\n  border: 0 none;\r\n  border-radius: 0px;\r\n  font-weight: bold;\r\n  color: white;\r\n  cursor: pointer;\r\n\r\n  float: left;\r\n  background: #616161;\r\n  /* margin-left: 7px; */\r\n  font-size: 13px;\r\n  font-weight: 500;\n}\n#msform .action-button-previous[data-v-776049b0]:hover,\r\n#msform .action-button-previous[data-v-776049b0]:focus {\r\n  background-color: #000000;\n}\r\n\r\n/*The background card*/\n.card[data-v-776049b0] {\r\n  z-index: 0;\r\n  border: none;\r\n  position: relative;\n}\r\n\r\n/*FieldSet headings*/\n.fs-title[data-v-776049b0] {\r\n  font-size: 25px;\r\n  color: #673ab7;\r\n  margin-bottom: 15px;\r\n  font-weight: normal;\r\n  text-align: left;\n}\n.purple-text[data-v-776049b0] {\r\n  color: #673ab7;\r\n  font-weight: normal;\n}\r\n\r\n/*Step Count*/\n.steps[data-v-776049b0] {\r\n  font-size: 25px;\r\n  color: gray;\r\n  margin-bottom: 10px;\r\n  font-weight: normal;\r\n  text-align: right;\n}\r\n\r\n/*Field names*/\n.fieldlabels[data-v-776049b0] {\r\n  color: gray;\r\n  text-align: left;\n}\r\n\r\n/*Icon progressbar*/\n#progressbar[data-v-776049b0] {\r\n  margin-bottom: 30px;\r\n  overflow: hidden;\r\n  color: lightgrey;\n}\n#progressbar .active[data-v-776049b0] {\r\n  color: #00b050;\n}\n#progressbar li[data-v-776049b0] {\r\n  list-style-type: none;\r\n  font-size: 15px;\r\n  width: 25%;\r\n  float: left;\r\n  position: relative;\r\n  font-weight: 400;\n}\r\n\r\n/*Icons in the ProgressBar*/\n#progressbar #account[data-v-776049b0]:before {\r\n  font-family: FontAwesome;\r\n  content: url(/images/deactive-tab.svg);\r\n  background: unset;\r\n  display: block;\r\n  position: absolute;\r\n  left: -13px;\r\n  top: 8px;\n}\n#progressbar .active[data-v-776049b0]:before {\r\n  font-family: FontAwesome;\r\n  content: url(/images/active-tab.svg) !important;\n}\n#progressbar li[data-v-776049b0]:before {\r\n  width: 50px;\r\n  height: 50px;\r\n  line-height: 45px;\r\n  display: block;\r\n  font-size: 20px;\r\n  color: #ffffff;\r\n  background: lightgray;\r\n  border-radius: 50%;\r\n  margin: 0 auto 10px auto;\r\n\r\n  padding: 2px;\n}\r\n\r\n/*ProgressBar connectors*/\n#progressbar li[data-v-776049b0]:after {\r\n  content: \"\";\r\n  width: 170%;\r\n  height: 2px;\r\n  background: lightgray;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 25px;\r\n\r\n  z-index: -1;\n}\r\n\r\n/*Color number of the step and the connector before it*/\nli#account strong.inner-list[data-v-776049b0] {\r\n  position: absolute;\r\n  top: 50px;\r\n  left: -8px;\n}\nli#personal strong[data-v-776049b0] {\r\n  position: absolute;\r\n  top: 50px;\r\n  left: 23%;\n}\nli#payment strong.inner-list[data-v-776049b0] {\r\n  position: absolute;\r\n  top: 50px;\r\n  right: -100px;\n}\nli#confirm[data-v-776049b0]::before {\r\n  content: url(/images/deactive-tab.svg);\r\n  background: unset !important;\r\n  position: absolute;\r\n  right: -110px;\r\n  top: 7px;\n}\nli#confirm strong.inner-list[data-v-776049b0] {\r\n  position: absolute;\r\n  top: 50px;\r\n  right: -110px;\n}\r\n\r\n/*Animated Progress Bar*/\n.progress[data-v-776049b0] {\r\n  height: 20px;\n}\n.progress-bar[data-v-776049b0] {\r\n  background-color: #00b050;\n}\r\n\r\n/*Fit image in bootstrap div*/\n.fit-image[data-v-776049b0] {\r\n  width: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\n}\r\n\r\n/* #progressbar li.active:before,\r\n#progressbar li.active:after {\r\n  background-color:#00B050;\r\n} */\nli#personal[data-v-776049b0]::before {\r\n  font-family: FontAwesome;\r\n  content: url(/images/deactive-tab.svg);\r\n  background: unset;\r\n  top: 9px;\r\n  position: absolute;\r\n  left: 23%;\n}\nul#progressbar[data-v-776049b0] {\r\n  height: 105px;\n}\nul#progressbar[data-v-776049b0] {\r\n  height: 105px;\n}\n.main-list[data-v-776049b0] {\r\n  border-bottom: 1px solid transparent !important;\n}\n.main-list[data-v-776049b0] {\r\n  border-bottom: 1px solid transparent;\n}\nli#payment[data-v-776049b0]::before {\r\n  font-family: FontAwesome;\r\n  content: url(/images/deactive-1-tab.svg) !important;\r\n  background: unset;\r\n  position: absolute;\r\n  top: 8px;\r\n  right: -100px;\n}\n.progress[data-v-776049b0] {\r\n  height: 20px;\n}\n.progress-bar[data-v-776049b0] {\r\n  background-color: #00b050;\n}\n.fit-image[data-v-776049b0] {\r\n  width: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\n}\n.outer-div[data-v-776049b0] {\r\n  border: 1px solid gray;\r\n  width: 100%;\r\n  max-width: 950px;\r\n  margin: auto;\r\n  margin-bottom: 100px;\r\n  margin-top: 50px;\r\n  border-radius: 30px;\n}\n.inner-div[data-v-776049b0] {\r\n  border: 1px solid gray;\r\n  width: 100%;\r\n  max-width: 780px;\r\n  margin: auto;\r\n  margin-bottom: 100px;\r\n  margin-top: 50px;\r\n  border-radius: 10px;\n}\n#payment-section h2[data-v-776049b0] {\r\n  font-weight: 800;\n}\nh2[data-v-776049b0],\r\n.h2[data-v-776049b0] {\r\n  font-size: 1.5rem;\n}\nh3[data-v-776049b0],\r\n.h3[data-v-776049b0] {\r\n  font-size: 1.5rem;\n}\nbody[data-v-776049b0] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-height: 100vh;\n}\n.radio[data-v-776049b0] {\r\n  margin: 0.5rem;\ninput[type=\"radio\"][data-v-776049b0] {\r\n    position: absolute;\r\n    opacity: 0;\n+ .radio-label[data-v-776049b0] {\n&[data-v-776049b0]:before {\r\n        content: \"\";\r\n        background: #f4f4f4;\r\n        border-radius: 100%;\r\n        border: 1px solid darken(#f4f4f4, 25%);\r\n        display: inline-block;\r\n        width: 1.4em;\r\n        height: 1.4em;\r\n        position: relative;\r\n        top: -0.2em;\r\n        margin-right: 1em;\r\n        vertical-align: top;\r\n        cursor: pointer;\r\n        text-align: center;\r\n        transition: all 250ms ease;\n}\n}\n&[data-v-776049b0]:checked {\n+ .radio-label[data-v-776049b0] {\n&[data-v-776049b0]:before {\r\n          background-color: #3197ee;\r\n          box-shadow: inset 0 0 0 4px #f4f4f4;\n}\n}\n}\n&[data-v-776049b0]:focus {\n+ .radio-label[data-v-776049b0] {\n&[data-v-776049b0]:before {\r\n          outline: none;\r\n          border-color: #3197ee;\n}\n}\n}\n&[data-v-776049b0]:disabled {\n+ .radio-label[data-v-776049b0] {\n&[data-v-776049b0]:before {\r\n          box-shadow: inset 0 0 0 4px #f4f4f4;\r\n          border-color: darken(#f4f4f4, 25%);\r\n          background: darken(#f4f4f4, 25%);\n}\n}\n}\n+ .radio-label[data-v-776049b0] {\n&[data-v-776049b0]:empty {\n&[data-v-776049b0]:before {\r\n          margin-right: 0;\n}\n}\n}\n}\n}\n@keyframes reveal-message-776049b0 {\nfrom {\r\n    opacity: 0;\n}\nto {\r\n    opacity: 1;\n}\n}\n.success[data-v-776049b0] {\r\n  color: green;\n}\n.success[data-v-776049b0]::before {\r\n  content: \"✓\";\r\n  background-color: #eff;\r\n  box-shadow: 0px 0px 12px 7px rgba(200, 255, 150, 0.8) inset;\r\n  border: 5px solid green;\n}\n@keyframes reveal-776049b0 {\n0% {\r\n    border: 5px solid transparent;\r\n    color: transparent;\r\n    box-shadow: 0px 0px 12px 7px rgba(255, 250, 250, 0.8) inset;\r\n    transform: rotate(1000deg);\n}\n25% {\r\n    border-top: 5px solid gray;\r\n    color: transparent;\r\n    box-shadow: 0px 0px 17px 10px rgba(255, 250, 250, 0.8) inset;\n}\n50% {\r\n    color: transparent;\r\n    box-shadow: 0px 0px 17px 10px rgba(200, 200, 200, 0.8) inset;\n}\n75% {\r\n    border-bottom: 5px solid gray;\r\n    color: gray;\r\n    box-shadow: 0px 0px 12px 7px rgba(200, 200, 200, 0.8) inset;\n}\n100% {\r\n    border: 5px solid gray;\r\n    box-shadow: 0px 0px 12px 7px rgba(200, 200, 200, 0.8) inset;\n}\n}\n.success-animation[data-v-776049b0] {\r\n  margin: 0px 6px 9px 40px;\n}\n.checkmark[data-v-776049b0] {\r\n  width: 100px;\r\n  height: 100px;\r\n  border-radius: 50%;\r\n  display: block;\r\n  stroke-width: 2;\r\n  stroke: #4bb71b;\r\n  stroke-miterlimit: 10;\r\n  box-shadow: inset 0px 0px 0px #4bb71b;\r\n  animation: fill-776049b0 0.4s ease-in-out 0.4s forwards,scale-776049b0 0.3s ease-in-out 0.9s both;\r\n  position: relative;\r\n  top: 5px;\r\n  right: 5px;\r\n  margin: 0 auto;\n}\n.checkmark__circle[data-v-776049b0] {\r\n  stroke-dasharray: 166;\r\n  stroke-dashoffset: 166;\r\n  stroke-width: 2;\r\n  stroke-miterlimit: 10;\r\n  stroke: #4bb71b;\r\n  fill: #fff;\r\n  animation: stroke-776049b0 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;\n}\n.checkmark__check[data-v-776049b0] {\r\n  transform-origin: 50% 50%;\r\n  stroke-dasharray: 48;\r\n  stroke-dashoffset: 48;\r\n  animation: stroke-776049b0 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;\n}\n@keyframes stroke-776049b0 {\n100% {\r\n    stroke-dashoffset: 0;\n}\n}\n@keyframes scale-776049b0 {\n0%,\r\n  100% {\r\n    transform: none;\n}\n50% {\r\n    transform: scale3d(1.1, 1.1, 1);\n}\n}\n@keyframes fill-776049b0 {\n100% {\r\n    box-shadow: inset 0px 0px 0px 30px #4bb71b;\n}\n}\n.modal-header[data-v-776049b0] {\r\n  display: block !important;\n}\n.form-control[data-v-776049b0] {\r\n  background-color: #4472c4 !important;\n}\n.hr_line[data-v-776049b0] {\r\n  margin-top: 10px !important;\r\n  margin-bottom: 10px !important;\r\n  border: 0 !important;\r\n  border-top: 2px solid rgb(0 0 0 / 38%) !important;\n}\n@media print {\nbutton#on-print-none[data-v-776049b0] {\r\n    display: none !important;\n}\ndiv#on-print-none[data-v-776049b0] {\r\n    display: none !important;\n}\n}\np[data-v-776049b0] {\r\n  color: #212529;\n}\ndiv#payment-section .bottom-text[data-v-776049b0] {\r\n  text-align: justify;\r\n  margin-bottom: 12px;\r\n  font-size: 16px;\r\n  color: #212529;\r\n  font-weight: 500;\r\n  padding-left: 17px;\n}\nspan.number[data-v-776049b0] {\r\n  display: flex;\r\n  position: absolute;\r\n  font-size: 16px;\r\n  color: #212529;\r\n  font-weight: 500;\n}\n.pointer-cursor[data-v-776049b0] {\r\n  cursor: pointer;\n}\r\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UserBtcSubscription.vue?vue&type=style&index=0&id=776049b0&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UserBtcSubscription.vue?vue&type=style&index=0&id=776049b0&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserBtcSubscription_vue_vue_type_style_index_0_id_776049b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserBtcSubscription.vue?vue&type=style&index=0&id=776049b0&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UserBtcSubscription.vue?vue&type=style&index=0&id=776049b0&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserBtcSubscription_vue_vue_type_style_index_0_id_776049b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserBtcSubscription_vue_vue_type_style_index_0_id_776049b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UserBtcSubscription.vue?vue&type=style&index=1&id=776049b0&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UserBtcSubscription.vue?vue&type=style&index=1&id=776049b0&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserBtcSubscription_vue_vue_type_style_index_1_id_776049b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserBtcSubscription.vue?vue&type=style&index=1&id=776049b0&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UserBtcSubscription.vue?vue&type=style&index=1&id=776049b0&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserBtcSubscription_vue_vue_type_style_index_1_id_776049b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserBtcSubscription_vue_vue_type_style_index_1_id_776049b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/UserBtcSubscription.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/UserBtcSubscription.vue ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserBtcSubscription_vue_vue_type_template_id_776049b0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserBtcSubscription.vue?vue&type=template&id=776049b0&scoped=true */ "./resources/js/components/UserBtcSubscription.vue?vue&type=template&id=776049b0&scoped=true");
/* harmony import */ var _UserBtcSubscription_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserBtcSubscription.vue?vue&type=script&lang=js */ "./resources/js/components/UserBtcSubscription.vue?vue&type=script&lang=js");
/* harmony import */ var _UserBtcSubscription_vue_vue_type_style_index_0_id_776049b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserBtcSubscription.vue?vue&type=style&index=0&id=776049b0&scoped=true&lang=css */ "./resources/js/components/UserBtcSubscription.vue?vue&type=style&index=0&id=776049b0&scoped=true&lang=css");
/* harmony import */ var _UserBtcSubscription_vue_vue_type_style_index_1_id_776049b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserBtcSubscription.vue?vue&type=style&index=1&id=776049b0&scoped=true&lang=css */ "./resources/js/components/UserBtcSubscription.vue?vue&type=style&index=1&id=776049b0&scoped=true&lang=css");
/* harmony import */ var D_xampp_htdocs_cryptowiz_new3_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;



const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_cryptowiz_new3_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_UserBtcSubscription_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_UserBtcSubscription_vue_vue_type_template_id_776049b0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-776049b0"],['__file',"resources/js/components/UserBtcSubscription.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./resources/js/components/UserBtcSubscription.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/UserBtcSubscription.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserBtcSubscription_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserBtcSubscription_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserBtcSubscription.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UserBtcSubscription.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/UserBtcSubscription.vue?vue&type=template&id=776049b0&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/UserBtcSubscription.vue?vue&type=template&id=776049b0&scoped=true ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserBtcSubscription_vue_vue_type_template_id_776049b0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserBtcSubscription_vue_vue_type_template_id_776049b0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserBtcSubscription.vue?vue&type=template&id=776049b0&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UserBtcSubscription.vue?vue&type=template&id=776049b0&scoped=true");


/***/ }),

/***/ "./resources/js/components/UserBtcSubscription.vue?vue&type=style&index=0&id=776049b0&scoped=true&lang=css":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/UserBtcSubscription.vue?vue&type=style&index=0&id=776049b0&scoped=true&lang=css ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserBtcSubscription_vue_vue_type_style_index_0_id_776049b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserBtcSubscription.vue?vue&type=style&index=0&id=776049b0&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UserBtcSubscription.vue?vue&type=style&index=0&id=776049b0&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/UserBtcSubscription.vue?vue&type=style&index=1&id=776049b0&scoped=true&lang=css":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/UserBtcSubscription.vue?vue&type=style&index=1&id=776049b0&scoped=true&lang=css ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserBtcSubscription_vue_vue_type_style_index_1_id_776049b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserBtcSubscription.vue?vue&type=style&index=1&id=776049b0&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UserBtcSubscription.vue?vue&type=style&index=1&id=776049b0&scoped=true&lang=css");


/***/ })

}]);