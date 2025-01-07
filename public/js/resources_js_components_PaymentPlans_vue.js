"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_PaymentPlans_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PaymentPlans.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PaymentPlans.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../assets/logo.png */ "./resources/assets/logo.png");
/* harmony import */ var _Layout_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue */ "./resources/js/components/Layout.vue");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.css");
/* harmony import */ var _vue_stripe_vue_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue-stripe/vue-stripe */ "./node_modules/@vue-stripe/vue-stripe/dist/index.js");
/* harmony import */ var _SubscriptionStripe_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SubscriptionStripe.vue */ "./resources/js/components/SubscriptionStripe.vue");
/* harmony import */ var _SubscriptionPaypal_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SubscriptionPaypal.vue */ "./resources/js/components/SubscriptionPaypal.vue");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle.min.js */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue_toastification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-toastification */ "./node_modules/vue-toastification/dist/index.mjs");
/* harmony import */ var html2pdf_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! html2pdf.js */ "./node_modules/html2pdf.js/dist/html2pdf.js");
/* harmony import */ var html2pdf_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(html2pdf_js__WEBPACK_IMPORTED_MODULE_8__);
var _methods;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }









/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var _ref;
    return _ref = {
      publishableKey: "pk_test_51O9rjwHgAJ2a2cU6bxBBpmh3z11jZqTj0hkroRh2bA1eEsO89vzM0jBuxtE8E4aw20wf8XqJG5mFAA2S0gyUYlg600bekqVISk",
      loading: false,
      lineItems: [{
        price: "some-price-id",
        // The id of the recurring price you created in your Stripe dashboard
        quantity: 1
      }],
      // successURL: "http://dev.cryptowizguy.com",
      // cancelURL: "http://dev.cryptowizguy.com",
      successURL: "https://test.cryptowizguy.com",
      cancelURL: "https://test.cryptowizguy.com",
      // successURL: "http://127.0.0.1:8000/",
      // cancelURL: "http://127.0.0.1:8000/",
      currentStep: 0,
      steps: 4,
      progressBarWidth: "0%",
      selectedPayment: null,
      selectedPaymentComponent: null,
      subscriptionplan: [],
      successMessage: null,
      errorMessage: null,
      selectedPlan: null,
      regisitrationDiscount: null,
      showRecipetModal: false,
      lastsubscriptiondata: []
    }, _defineProperty(_ref, "subscriptionplan", []), _defineProperty(_ref, "promocode", ""), _defineProperty(_ref, "discount", ""), _defineProperty(_ref, "user", null), _defineProperty(_ref, "first_name", null), _defineProperty(_ref, "email", null), _defineProperty(_ref, "last_name", null), _defineProperty(_ref, "user", null), _defineProperty(_ref, "Logo", _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__["default"]), _defineProperty(_ref, "formattedDate", ""), _ref;
  },
  components: {
    Layout: _Layout_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    StripeCheckout: _vue_stripe_vue_stripe__WEBPACK_IMPORTED_MODULE_3__.StripeCheckout,
    SubscriptionStripe: _SubscriptionStripe_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    PayPalButton: _SubscriptionPaypal_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    Logo: _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    progressBarWidth: function progressBarWidth() {
      return "".concat((this.currentStep + 1) / this.steps * 100, "%");
    },
    payableTotal: function payableTotal() {
      var subscriptionPrice = this.getSubscriptionPrice(this.selectedPlan);
      var totalAfterDiscount = 0;
      if (this.discount && this.discountAmount !== 0) {
        var registrationDiscount = subscriptionPrice / 100 * this.regisitrationDiscount;
        totalAfterDiscount = subscriptionPrice - this.discountAmount;
        console.log("if subscriptionPrice", subscriptionPrice);
        console.log("if registrationDiscount", registrationDiscount);
        console.log("if this.discountAmount", this.discountAmount);
        console.log("if totalAfterDiscount", totalAfterDiscount);
      } else {
        totalAfterDiscount = subscriptionPrice - subscriptionPrice / 100 * this.regisitrationDiscount;
        console.log("else subscriptionPrice", subscriptionPrice);
        console.log("else subscriptionPrice", this.regisitrationDiscount);
        console.log("else totalAfterDiscount", totalAfterDiscount);
      }
      return totalAfterDiscount.toFixed(2);
    },
    // Compute the discount amount
    discountAmount: function discountAmount() {
      if (this.discount) {
        var subscriptionPrice = this.getSubscriptionPrice(this.selectedPlan);
        var registrationDiscount = subscriptionPrice / 100 * this.regisitrationDiscount;
        console.log("discountAmount registrationDiscount", registrationDiscount);
        console.log("discountAmount registrationDiscount", this.regisitrationDiscount);
        console.log("discountAmount subscriptionPrice", this.subscriptionPrice);
        return (subscriptionPrice / 100 * this.discount).toFixed(2);
      }
      return 0;
    }
  },
  created: function created() {
    this.toast = (0,vue_toastification__WEBPACK_IMPORTED_MODULE_7__.useToast)();
    this.formatCurrentDate();
    this.getPlan();
  },
  mounted: function mounted() {},
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
    // Show the Bootstrap modal
    checkSelection: function checkSelection() {
      // Check if a plan has been selected
      return this.selectedPlan !== null;
    },
    formattedMonthlyPrice: function formattedMonthlyPrice(price, duration) {
      // Your formatted monthly price logic here
    },
    getSubscriptionName: function getSubscriptionName(selectedId) {
      var selectedSubscription = this.subscriptionplan.find(function (subscription) {
        return subscription.id === selectedId;
      });
      return selectedSubscription ? selectedSubscription.name : "";
    },
    getSubscriptionPrice: function getSubscriptionPrice(selectedId) {
      var selectedSubscription = this.subscriptionplan.find(function (subscription) {
        return subscription.id === selectedId;
      });
      return selectedSubscription ? selectedSubscription.price : "";
    },
    getSubscriptionDuration: function getSubscriptionDuration(selectedId) {
      var selectedSubscription = this.subscriptionplan.find(function (subscription) {
        return subscription.id === selectedId;
      });
      return selectedSubscription ? selectedSubscription.duration : "";
    }
  }, _defineProperty(_methods, "formattedMonthlyPrice", function formattedMonthlyPrice(price, duration) {
    var monthlyPrice = price;
    if (duration === "yearly") {
      monthlyPrice /= 12; // Divide by 12 for yearly
    } else if (duration === "quarterly") {
      monthlyPrice /= 3; // Divide by 3 for quarterly
    } else {
      monthlyPrice /= 12; // Divide by 3 for quarterly
    }
    return monthlyPrice.toFixed(2);
  }), _defineProperty(_methods, "getMonthlyPrice", function getMonthlyPrice() {
    if (this.subscription.duration === "yearly") {
      return (this.subscription.price / 12).toFixed(2);
    } else if (this.subscription.duration === "quarterly") {
      return (this.subscription.price / 3).toFixed(2);
    }
    // Add additional conditions for other durations if needed
    return this.subscription.price;
  }), _defineProperty(_methods, "selectPayment", function selectPayment(payment) {
    if (this.currentStep < this.steps - 1) {
      this.currentStep++;
    }
    this.selectedPayment = payment;
    // Set the component based on the selected payment method
    if (payment === "Stripe") {
      this.selectedPaymentComponent = "SubscriptionStripe";
    } else if (payment === "PayPal") {
      this.selectedPaymentComponent = "PayPalButton";
    }
  }), _defineProperty(_methods, "loadIntent", function loadIntent() {
    axios.get("/api/get-stripe-intent").then(function (response) {
      var _response$data;
      this.intentToken = (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.token;
    }.bind(this));
  }), _defineProperty(_methods, "loadPlanDetail", function loadPlanDetail(id) {
    this.isLoading = true;
    document.body.style.overflow = "hidden";
    axios.get("/api/v1/plan/" + id).then(function (response) {
      this.planDetail = response.data;
      this.isLoading = false;
      document.body.style.overflow = "visible";
    }.bind(this));
  }), _defineProperty(_methods, "checkSubscription", function checkSubscription() {
    var _this = this;
    axios({
      method: "GET",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + localStorage.userToken,
        "X-Requested-With": "XMLHttpRequest"
      },
      url: "api/v1/user/subscription"
    }).then(function (res) {
      _this.isSubscribed = res.data.subscription;
      _this.isLoading = false;
      document.body.style.overflow = "visible";
    })["catch"](function (error) {
      if (error.response) {
        _this.isSubscribed = false;
      } else {
        _this.isSubscribed = false;
      }
      _this.isLoading = false;
      document.body.style.overflow = "visible";
    });
  }), _defineProperty(_methods, "loadPaymentMethods", function loadPaymentMethods() {
    this.paymentMethodsLoadStatus = 1;
    axios.get("/api/v1/user/payment-methods").then(function (response) {
      this.paymentMethods = response.data;
      this.paymentMethodsLoadStatus = 2;
    }.bind(this));
    // this.isLoading = false;
    document.body.style.overflow = "hidden";
  }), _defineProperty(_methods, "configureStripe", function configureStripe() {
    this.stripe = Stripe("sk_test_51O9rjwHgAJ2a2cU6LHAf6OCLQECdubOAEQdG8Md8hmIvRKkuVfLHbcrKvAG6KGHGARaeJ09zk25mkgZPQWhfY96y00w2MY0SB8");
    this.elements = this.stripe.elements();
    this.card = this.elements.create("payment");
    this.card.mount("#card-element");
  }), _defineProperty(_methods, "nextStep", function nextStep() {
    localStorage.setItem("plan_id", this.selectedPlan);
    if (this.currentStep < this.steps - 1) {
      if (this.checkSelection()) {
        console.log("next step inser side");
        this.currentStep++; // Assuming currentStep controls the form steps
      }
    }
  }), _defineProperty(_methods, "includeStripe", function includeStripe(URL, callback) {
    var documentTag = document,
      tag = "script",
      object = documentTag.createElement(tag),
      scriptTag = documentTag.getElementsByTagName(tag)[0];
    object.src = "//" + URL;
    if (callback) {
      object.addEventListener("load", function (e) {
        callback(null, e);
      }, false);
    }
    scriptTag.parentNode.insertBefore(object, scriptTag);
  }), _defineProperty(_methods, "previousStep", function previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }), _defineProperty(_methods, "submit", function submit() {
    // You will be redirected to Stripe's secure checkout page
    this.$refs.checkoutRef.redirectToCheckout();
  }), _defineProperty(_methods, "getPaymentIntentNew", function getPaymentIntentNew(data) {
    var _this2 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios.get("/api/get-intent");
          case 3:
            response = _context.sent;
            console.log(response.data);
            console.log(_this2.payableTotal);
            // this.includeStripe('js.stripe.com/v3/', function () {
            //     this.configureStripe();
            // }.bind(this));
            // this.loadIntent();
            // this.selectedPlan = this.$route.query.plan;
            // this.loadPlanDetail(this.selectedPlan);
            // this.loadPaymentMethods();
            // this.checkSubscription();

            // Handle the response data as needed
            _context.next = 11;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.error("Error getting data:", _context.t0);
            // Handle the error
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 8]]);
    }))();
  }), _defineProperty(_methods, "getPlan", function getPlan() {
    var _this3 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            axios.get("/api/get-subscription-plans").then(function (response) {
              _this3.subscriptionplan = response.data.subscription; // Store the retrieved coupons in the data property
              _this3.regisitrationDiscount = response.data.settings; // Store the retrieved coupons in the data property
              console.log("subscriptionplan", _this3.subscriptionplan);
            })["catch"](function (error) {
              console.error("Error getting coupons:", error);
              _this3.errorMessage = "Error getting coupons"; // Set an error message
            });
          case 1:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  }), _methods)
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PaymentPlans.vue?vue&type=template&id=20cfddef&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PaymentPlans.vue?vue&type=template&id=20cfddef&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-20cfddef"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "container-fluid pb-5"
};
var _hoisted_2 = {
  "class": ""
};
var _hoisted_3 = {
  "class": "card br-10 mw-550 m-auto border"
};
var _hoisted_4 = {
  "class": "card-body p-4"
};
var _hoisted_5 = {
  id: "msform"
};
var _hoisted_6 = {
  key: 0
};
var _hoisted_7 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "form-card pl-1"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
    "class": "font-weight-bolder"
  }, " Choose a Payment Plan ")], -1 /* HOISTED */);
});
var _hoisted_8 = {
  "class": "row p-3"
};
var _hoisted_9 = {
  "class": "radio-card"
};
var _hoisted_10 = {
  "class": "inner-content",
  style: {
    "display": "flex"
  }
};
var _hoisted_11 = {
  "class": "radio-btn-green"
};
var _hoisted_12 = ["for"];
var _hoisted_13 = {
  "class": "content-sect pointer-cursor"
};
var _hoisted_14 = ["for"];
var _hoisted_15 = {
  key: 0
};
var _hoisted_16 = {
  "class": "capital-duration"
};
var _hoisted_17 = {
  "class": "price-month"
};
var _hoisted_18 = {
  "class": "col-11 col-sm-9 col-md-7 col-lg-6 col-xl-12 p-0 mt-3 mb-2",
  id: "payment-section"
};
var _hoisted_19 = {
  "class": "bottom-text"
};
var _hoisted_20 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "number"
  }, "1. ", -1 /* HOISTED */);
});
var _hoisted_21 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "bottom-text"
  }, " The Standard rate will automatically be charged on the day after the expiration date, unless user unsubscribes before the expiration date/time. ", -1 /* HOISTED */);
});
var _hoisted_22 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "number"
  }, "2. ", -1 /* HOISTED */);
});
var _hoisted_23 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "bottom-text"
  }, " A one week free trial period is part of every initial subscription, and can be canceled within 7 days. Charges will take place on the eighth day. ", -1 /* HOISTED */);
});
var _hoisted_24 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "number"
  }, "3. ", -1 /* HOISTED */);
});
var _hoisted_25 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "bottom-text"
  }, " No full or partial refunds given after 7 day free trial. ", -1 /* HOISTED */);
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_layout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("layout");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_layout, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" progressbar "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" fieldsets "), $data.currentStep === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("fieldset", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.subscriptionplan, function (subscription, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: index,
          "class": "col-11 col-sm-9 col-md-7 col-lg-6 col-xl-12 p-0 mt-3 mb-2"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" You may want to uncomment this input if you're planning to use it "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <input type=\"radio\" :id=\"'subscription_' + subscription.id\" name=\"radio\" :value=\"subscription.id\" v-model=\"selectedPlan\" /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
          "class": "custom-radio pointer-cursor",
          "for": 'subscription_' + subscription.id
        }, null, 8 /* PROPS */, _hoisted_12)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
          "for": 'subscription_' + subscription.id,
          "class": "value-text justify-content-left text-left pl-3 pb-0"
        }, [subscription.best_value == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h2", _hoisted_15, " (BEST VALUE) ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(subscription.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Payable "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Make sure subscription.duration is defined in your subscription object "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(subscription.duration), 1 /* TEXT */)])], 8 /* PROPS */, _hoisted_14), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Make sure formattedMonthlyPrice is correctly defined in your methods "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " $" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formattedMonthlyPrice(subscription.price, subscription.duration)) + "/mo ", 1 /* TEXT */)])])])])]);
      }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        href: "",
        onClick: _cache[0] || (_cache[0] = function () {
          return _ctx.$router.push('/terms-and-conditions');
        })
      }, "see Terms and conditions")]), _hoisted_20, _hoisted_21, _hoisted_22, _hoisted_23, _hoisted_24, _hoisted_25])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])])];
    }),
    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PaymentPlans.vue?vue&type=style&index=0&id=20cfddef&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PaymentPlans.vue?vue&type=style&index=0&id=20cfddef&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n/* @import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap\"); */\n.bg-green[data-v-20cfddef] {\n    background-color: #00b050;\n}\n.modal-header[data-v-20cfddef] {\n    border: unset;\n}\n.title-section h3[data-v-20cfddef] {\n    font-size: 20px;\n    font-weight: 500;\n}\n*[data-v-20cfddef] {\n    font-family: \"Open Sans\", sans-serif;\n}\n.modal-content.printReceipt[data-v-20cfddef] {\n    border: unset;\n}\n/* Your CSS styles for modal here */\n#receiptContainer[data-v-20cfddef] {\n    font-family: \"Helvetica Neue\", Helvetica, \"Segoe UI\", Arial, sans-serif;\n    font-size: 13px;\n}\ntable#recipt[data-v-20cfddef] {\n    font-size: 19px;\n    font-weight: 600;\n}\n.inner-content.title-section[data-v-20cfddef] {\n    font-size: 18px;\n    border-bottom: 1px solid;\n    padding-top: 12px;\n}\n.title-section[data-v-20cfddef] {\n    font-size: 18px;\n    border-bottom: 1px solid;\n    padding-top: 12px;\n}\nimg.img-logo[data-v-20cfddef] {\n    width: 100%;\n    max-width: 112px;\n}\n#receiptContainer .container[data-v-20cfddef] {\n    margin-top: 40px;\n}\n#receiptContainer .col-md-6[data-v-20cfddef],\n#receiptContainer .col-xs-6[data-v-20cfddef] {\n    width: 50%;\n}\n#receiptContainer .col-md-7[data-v-20cfddef],\n#receiptContainer .col-xs-7[data-v-20cfddef] {\n    width: 58.333333%;\n}\n.detail-receipt .title-section[data-v-20cfddef] {\n    font-size: 20px;\n    border-bottom: 1px solid;\n    padding-top: 19px;\n    font-weight: 700;\n    padding-left: 11px;\n}\ntable#recipt td[data-v-20cfddef] {\n    font-size: 13px;\n    padding: 7px;\n}\n#receiptContainer.col-md-5[data-v-20cfddef],\n#receiptContainer.col-xs-5[data-v-20cfddef] {\n    width: 41.666667%;\n}\n#receiptContainer .row[data-v-20cfddef] {\n    display: flex;\n    flex-wrap: wrap;\n    margin-right: -15px;\n    margin-left: -15px;\n}\n#receiptContainer .text-right[data-v-20cfddef] {\n    text-align: right;\n}\n#receiptContainer img[data-v-20cfddef] {\n    width: 100px;\n    height: 120px;\n}\n#receiptContainer .title-section[data-v-20cfddef] {\n    font-size: 16px;\n    letter-spacing: 1px;\n    border-bottom: 2px #666666 solid;\n    padding-bottom: 10px;\n}\n#receiptContainer table[data-v-20cfddef] {\n    width: 100%;\n    margin-top: 20px;\n}\n#recipt td[data-v-20cfddef] {\n    /* border: 1px solid #666666; */\n    border-collapse: collapse;\n    font-size: 16px;\n}\n#receiptContainer th[data-v-20cfddef],\ntd[data-v-20cfddef] {\n    padding: 1px;\n}\n#receiptContainer hr[data-v-20cfddef] {\n    border-top: 1px solid #666666;\n}\ntable#recipt[data-v-20cfddef] {\n    width: 100%;\n}\ntable#recipt td[data-v-20cfddef] {\n    /* text-align: center !important; */\n}\n.time-date[data-v-20cfddef] {\n    font-size: 20px;\n}\n.time-date[data-v-20cfddef]:first-child {\n    font-weight: 300;\n    font-size: 18px;\n}\n.border-bottom[data-v-20cfddef] {\n    border-bottom: 1px solid !important;\n}\n.modal-backdrop[data-v-20cfddef] {\n    position: absolute !important;\n}\n@media (min-width: 576px) {\n.modal-backdrop[data-v-20cfddef] {\n        position: absolute !important;\n}\n.modal-dialog[data-v-20cfddef] {\n        max-width: 850px;\n        margin: 1.75rem auto;\n}\n}\n.btn-apply[data-v-20cfddef] {\n    background-color: #e8e8e8 !important;\n}\n.input-group[data-v-20cfddef] {\n    flex-wrap: initial !important;\n}\n.pt-35[data-v-20cfddef] {\n    padding-top: 0.5rem;\n    display: block;\n}\n.capital-duration[data-v-20cfddef] {\n    text-transform: capitalize;\n    font-size: 18px;\n    font-weight: 400;\n}\n.border-buttom[data-v-20cfddef] {\n    border: 1px solid #8a8383;\n    border-left: none;\n    border-top: none;\n    border-right: none;\n}\n.inner-content[data-v-20cfddef] {\n    /* display: flex; */\n    align-items: start;\n    width: 100%;\n}\n.btn-options button[data-v-20cfddef] {\n    margin: 7px;\n}\n.value-text h2[data-v-20cfddef] {\n    margin: 0;\n}\n.value-text h3[data-v-20cfddef] {\n    font-weight: 700;\n}\n.price-month p[data-v-20cfddef] {\n    color: black;\n    font-size: 18px;\n}\n.value-text h4[data-v-20cfddef] {\n    font-size: 18px;\n}\n.subscription-info[data-v-20cfddef] {\n    max-width: 600px;\n    margin: 0 auto;\n}\n.info-item[data-v-20cfddef] {\n    margin-bottom: 15px;\n}\n.value-text p[data-v-20cfddef] {\n    margin: 0;\n    color: black;\n    font-size: 22px;\n    font-weight: 500;\n}\nlabel.custom-radio input[data-v-20cfddef] {\n    margin-top: 10px;\n    margin-right: 16px;\n}\n.content-sect[data-v-20cfddef] {\n    display: flex;\n    justify-content: space-between;\n    width: 97%;\n}\n.radio-btn-green[data-v-20cfddef] {\n    width: 5%;\n}\n.radio-card[data-v-20cfddef] {\n    border: 1px solid grey;\n    width: 100%;\n    margin: auto;\n    border-radius: 16px;\n    padding: 25px;\n}\nhtml[data-v-20cfddef] {\n    height: 100%;\n}\np[data-v-20cfddef] {\n    color: grey;\n}\n#heading[data-v-20cfddef] {\n    text-transform: uppercase;\n    color: #673ab7;\n    font-weight: normal;\n}\n#msform[data-v-20cfddef] {\n    text-align: center;\n    position: relative;\n    margin-top: 20px;\n}\n#msform fieldset[data-v-20cfddef] {\n    background: white;\n    border: 0 none;\n    border-radius: 0.5rem;\n    box-sizing: border-box;\n    width: 100%;\n    margin: 0;\n    padding-bottom: 20px;\n    position: relative;\n}\n.form-card[data-v-20cfddef] {\n    text-align: left;\n}\n#msform fieldset[data-v-20cfddef]:not(:first-of-type) {\n    display: none;\n}\n#msform input[data-v-20cfddef],\n#msform textarea[data-v-20cfddef] {\n    padding: 8px 15px 8px 15px;\n    border: 1px solid #ccc;\n    border-radius: 0px;\n    margin-bottom: 25px;\n    margin-top: 13px;\n    width: 100%;\n    box-sizing: border-box;\n    font-family: montserrat;\n    color: #2c3e50;\n    background-color: #eceff1;\n    font-size: 16px;\n    letter-spacing: 1px;\n}\n#msform input[data-v-20cfddef]:focus,\n#msform textarea[data-v-20cfddef]:focus {\n    box-shadow: none !important;\n    border: 1px solid #673ab7;\n    outline-width: 0;\n}\ndiv#payment-section p[data-v-20cfddef] {\n    text-align: justify;\n    margin-bottom: 12px;\n    font-size: 16px;\n    color: #212529;\n    font-weight: 500;\n}\n#msform .action-button[data-v-20cfddef] {\n    /* width: 100px; */\n\n    /* padding: 10px 19px; */\n    margin-top: 10px;\n    float: right;\n}\n.btn[data-v-20cfddef] {\n    display: inline-block;\n    font-weight: 400;\n    color: #212529;\n    text-align: center;\n    vertical-align: middle;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n    background-color: transparent;\n    border: 1px solid transparent;\n    padding: 0.375rem 0.75rem;\n    font-size: 1rem;\n    line-height: 1.5;\n    border-radius: 0.25rem;\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.btn-primary[data-v-20cfddef] {\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff;\n}\n.btn-sm[data-v-20cfddef],\n.btn-group-sm > .btn[data-v-20cfddef] {\n    padding: 0.25rem 0.5rem;\n    font-size: 0.875rem;\n    line-height: 1.5;\n    border-radius: 0.2rem;\n}\n#msform .action-button[data-v-20cfddef]:hover,\n#msform .action-button[data-v-20cfddef]:focus {\n    background-color: #311b92;\n}\n#msform .action-button-previous[data-v-20cfddef] {\n    font-weight: bold;\n    border: 0 none;\n    border-radius: 0px;\n    font-weight: bold;\n    color: white;\n    cursor: pointer;\n\n    float: left;\n    background: #616161;\n    /* margin-left: 7px; */\n    font-size: 13px;\n    font-weight: 500;\n}\n#msform .action-button-previous[data-v-20cfddef]:hover,\n#msform .action-button-previous[data-v-20cfddef]:focus {\n    background-color: #000000;\n}\n\n/*The background card*/\n.card[data-v-20cfddef] {\n    z-index: 0;\n    border: none;\n    position: relative;\n}\n\n/*FieldSet headings*/\n.fs-title[data-v-20cfddef] {\n    font-size: 25px;\n    color: #673ab7;\n    margin-bottom: 15px;\n    font-weight: normal;\n    text-align: left;\n}\n.purple-text[data-v-20cfddef] {\n    color: #673ab7;\n    font-weight: normal;\n}\n\n/*Step Count*/\n.steps[data-v-20cfddef] {\n    font-size: 25px;\n    color: gray;\n    margin-bottom: 10px;\n    font-weight: normal;\n    text-align: right;\n}\n\n/*Field names*/\n.fieldlabels[data-v-20cfddef] {\n    color: gray;\n    text-align: left;\n}\n\n/*Icon progressbar*/\n#progressbar[data-v-20cfddef] {\n    margin-bottom: 30px;\n    overflow: hidden;\n    color: lightgrey;\n}\n#progressbar .active[data-v-20cfddef] {\n    color: #00b050;\n}\n#progressbar li[data-v-20cfddef] {\n    list-style-type: none;\n    font-size: 15px;\n    width: 25%;\n    float: left;\n    position: relative;\n    font-weight: 400;\n}\n\n/*Icons in the ProgressBar*/\n#progressbar #account[data-v-20cfddef]:before {\n    font-family: FontAwesome;\n    content: url(/images/deactive-tab.svg);\n    background: unset;\n    display: block;\n    position: absolute;\n    left: -13px;\n    top: 8px;\n}\n#progressbar .active[data-v-20cfddef]:before {\n    font-family: FontAwesome;\n    content: url(/images/active-tab.svg) !important;\n}\n#progressbar li[data-v-20cfddef]:before {\n    width: 50px;\n    height: 50px;\n    line-height: 45px;\n    display: block;\n    font-size: 20px;\n    color: #ffffff;\n    background: lightgray;\n    border-radius: 50%;\n    margin: 0 auto 10px auto;\n\n    padding: 2px;\n}\n\n/*ProgressBar connectors*/\n#progressbar li[data-v-20cfddef]:after {\n    content: \"\";\n    width: 170%;\n    height: 2px;\n    background: lightgray;\n    position: absolute;\n    left: 0;\n    top: 25px;\n\n    z-index: -1;\n}\n\n/*Color number of the step and the connector before it*/\nli#account strong.inner-list[data-v-20cfddef] {\n    position: absolute;\n    top: 50px;\n    left: -8px;\n}\nli#personal strong[data-v-20cfddef] {\n    position: absolute;\n    top: 50px;\n    left: 23%;\n}\nli#payment strong.inner-list[data-v-20cfddef] {\n    position: absolute;\n    top: 50px;\n    right: -100px;\n}\nli#confirm[data-v-20cfddef]::before {\n    content: url(/images/deactive-tab.svg);\n    background: unset !important;\n    position: absolute;\n    right: -110px;\n    top: 7px;\n}\nli#confirm strong.inner-list[data-v-20cfddef] {\n    position: absolute;\n    top: 50px;\n    right: -110px;\n}\n\n/*Animated Progress Bar*/\n.progress[data-v-20cfddef] {\n    height: 20px;\n}\n.progress-bar[data-v-20cfddef] {\n    background-color: #00b050;\n}\n\n/*Fit image in bootstrap div*/\n.fit-image[data-v-20cfddef] {\n    width: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n\n/* #progressbar li.active:before,\n#progressbar li.active:after {\n  background-color:#00B050;\n} */\nli#personal[data-v-20cfddef]::before {\n    font-family: FontAwesome;\n    content: url(/images/deactive-tab.svg);\n    background: unset;\n    top: 9px;\n    position: absolute;\n    left: 23%;\n}\nul#progressbar[data-v-20cfddef] {\n    height: 105px;\n}\nul#progressbar[data-v-20cfddef] {\n    height: 105px;\n}\n.main-list[data-v-20cfddef] {\n    border-bottom: 1px solid transparent !important;\n}\n.main-list[data-v-20cfddef] {\n    border-bottom: 1px solid transparent;\n}\nli#payment[data-v-20cfddef]::before {\n    font-family: FontAwesome;\n    content: url(/images/deactive-1-tab.svg) !important;\n    background: unset;\n    position: absolute;\n    top: 8px;\n    right: -100px;\n}\n.progress[data-v-20cfddef] {\n    height: 20px;\n}\n.progress-bar[data-v-20cfddef] {\n    background-color: #00b050;\n}\n.fit-image[data-v-20cfddef] {\n    width: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n.outer-div[data-v-20cfddef] {\n    border: 1px solid gray;\n    width: 100%;\n    max-width: 950px;\n    margin: auto;\n    margin-bottom: 100px;\n    margin-top: 50px;\n    border-radius: 30px;\n}\n.inner-div[data-v-20cfddef] {\n    border: 1px solid gray;\n    width: 100%;\n    max-width: 780px;\n    margin: auto;\n    margin-bottom: 100px;\n    margin-top: 50px;\n    border-radius: 10px;\n}\n#payment-section h2[data-v-20cfddef] {\n    font-weight: 800;\n}\nh2[data-v-20cfddef],\n.h2[data-v-20cfddef] {\n    font-size: 1.5rem;\n}\nh3[data-v-20cfddef],\n.h3[data-v-20cfddef] {\n    font-size: 1.5rem;\n}\nbody[data-v-20cfddef] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-height: 100vh;\n}\n.radio[data-v-20cfddef] {\n    margin: 0.5rem;\ninput[type=\"radio\"][data-v-20cfddef] {\n        position: absolute;\n        opacity: 0;\n+ .radio-label[data-v-20cfddef] {\n&[data-v-20cfddef]:before {\n                content: \"\";\n                background: #f4f4f4;\n                border-radius: 100%;\n                border: 1px solid darken(#f4f4f4, 25%);\n                display: inline-block;\n                width: 1.4em;\n                height: 1.4em;\n                position: relative;\n                top: -0.2em;\n                margin-right: 1em;\n                vertical-align: top;\n                cursor: pointer;\n                text-align: center;\n                transition: all 250ms ease;\n}\n}\n&[data-v-20cfddef]:checked {\n+ .radio-label[data-v-20cfddef] {\n&[data-v-20cfddef]:before {\n                    background-color: #3197ee;\n                    box-shadow: inset 0 0 0 4px #f4f4f4;\n}\n}\n}\n&[data-v-20cfddef]:focus {\n+ .radio-label[data-v-20cfddef] {\n&[data-v-20cfddef]:before {\n                    outline: none;\n                    border-color: #3197ee;\n}\n}\n}\n&[data-v-20cfddef]:disabled {\n+ .radio-label[data-v-20cfddef] {\n&[data-v-20cfddef]:before {\n                    box-shadow: inset 0 0 0 4px #f4f4f4;\n                    border-color: darken(#f4f4f4, 25%);\n                    background: darken(#f4f4f4, 25%);\n}\n}\n}\n+ .radio-label[data-v-20cfddef] {\n&[data-v-20cfddef]:empty {\n&[data-v-20cfddef]:before {\n                    margin-right: 0;\n}\n}\n}\n}\n}\n@keyframes reveal-message-20cfddef {\nfrom {\n        opacity: 0;\n}\nto {\n        opacity: 1;\n}\n}\n.success[data-v-20cfddef] {\n    color: green;\n}\n.success[data-v-20cfddef]::before {\n    content: \"✓\";\n    background-color: #eff;\n    box-shadow: 0px 0px 12px 7px rgba(200, 255, 150, 0.8) inset;\n    border: 5px solid green;\n}\n@keyframes reveal-20cfddef {\n0% {\n        border: 5px solid transparent;\n        color: transparent;\n        box-shadow: 0px 0px 12px 7px rgba(255, 250, 250, 0.8) inset;\n        transform: rotate(1000deg);\n}\n25% {\n        border-top: 5px solid gray;\n        color: transparent;\n        box-shadow: 0px 0px 17px 10px rgba(255, 250, 250, 0.8) inset;\n}\n50% {\n        color: transparent;\n        box-shadow: 0px 0px 17px 10px rgba(200, 200, 200, 0.8) inset;\n}\n75% {\n        border-bottom: 5px solid gray;\n        color: gray;\n        box-shadow: 0px 0px 12px 7px rgba(200, 200, 200, 0.8) inset;\n}\n100% {\n        border: 5px solid gray;\n        box-shadow: 0px 0px 12px 7px rgba(200, 200, 200, 0.8) inset;\n}\n}\n.success-animation[data-v-20cfddef] {\n    margin: 0px 6px 9px 40px;\n}\n.checkmark[data-v-20cfddef] {\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    display: block;\n    stroke-width: 2;\n    stroke: #4bb71b;\n    stroke-miterlimit: 10;\n    box-shadow: inset 0px 0px 0px #4bb71b;\n    animation: fill-20cfddef 0.4s ease-in-out 0.4s forwards,scale-20cfddef 0.3s ease-in-out 0.9s both;\n    position: relative;\n    top: 5px;\n    right: 5px;\n    margin: 0 auto;\n}\n.checkmark__circle[data-v-20cfddef] {\n    stroke-dasharray: 166;\n    stroke-dashoffset: 166;\n    stroke-width: 2;\n    stroke-miterlimit: 10;\n    stroke: #4bb71b;\n    fill: #fff;\n    animation: stroke-20cfddef 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;\n}\n.checkmark__check[data-v-20cfddef] {\n    transform-origin: 50% 50%;\n    stroke-dasharray: 48;\n    stroke-dashoffset: 48;\n    animation: stroke-20cfddef 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;\n}\n@keyframes stroke-20cfddef {\n100% {\n        stroke-dashoffset: 0;\n}\n}\n@keyframes scale-20cfddef {\n0%,\n    100% {\n        transform: none;\n}\n50% {\n        transform: scale3d(1.1, 1.1, 1);\n}\n}\n@keyframes fill-20cfddef {\n100% {\n        box-shadow: inset 0px 0px 0px 30px #4bb71b;\n}\n}\n.modal-header[data-v-20cfddef] {\n    display: block !important;\n}\n.form-control[data-v-20cfddef] {\n    background-color: #4472c4 !important;\n}\n.hr_line[data-v-20cfddef] {\n    margin-top: 10px !important;\n    margin-bottom: 10px !important;\n    border: 0 !important;\n    border-top: 2px solid rgb(0 0 0 / 38%) !important;\n}\n@media print {\nbutton#on-print-none[data-v-20cfddef] {\n        display: none !important;\n}\ndiv#on-print-none[data-v-20cfddef] {\n        display: none !important;\n}\n}\np[data-v-20cfddef] {\n    color: #212529;\n}\ndiv#payment-section .bottom-text[data-v-20cfddef] {\n    text-align: justify;\n    margin-bottom: 12px;\n    font-size: 16px;\n    color: #212529;\n    font-weight: 500;\n    padding-left: 17px;\n}\nspan.number[data-v-20cfddef] {\n    display: flex;\n    position: absolute;\n    font-size: 16px;\n    color: #212529;\n    font-weight: 500;\n}\n.pointer-cursor[data-v-20cfddef] {\n    cursor: pointer;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PaymentPlans.vue?vue&type=style&index=0&id=20cfddef&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PaymentPlans.vue?vue&type=style&index=0&id=20cfddef&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PaymentPlans_vue_vue_type_style_index_0_id_20cfddef_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PaymentPlans.vue?vue&type=style&index=0&id=20cfddef&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PaymentPlans.vue?vue&type=style&index=0&id=20cfddef&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PaymentPlans_vue_vue_type_style_index_0_id_20cfddef_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PaymentPlans_vue_vue_type_style_index_0_id_20cfddef_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/PaymentPlans.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/PaymentPlans.vue ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PaymentPlans_vue_vue_type_template_id_20cfddef_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaymentPlans.vue?vue&type=template&id=20cfddef&scoped=true */ "./resources/js/components/PaymentPlans.vue?vue&type=template&id=20cfddef&scoped=true");
/* harmony import */ var _PaymentPlans_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaymentPlans.vue?vue&type=script&lang=js */ "./resources/js/components/PaymentPlans.vue?vue&type=script&lang=js");
/* harmony import */ var _PaymentPlans_vue_vue_type_style_index_0_id_20cfddef_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PaymentPlans.vue?vue&type=style&index=0&id=20cfddef&scoped=true&lang=css */ "./resources/js/components/PaymentPlans.vue?vue&type=style&index=0&id=20cfddef&scoped=true&lang=css");
/* harmony import */ var E_wamp64_3_3_0_www_cryptowiz_new3_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,E_wamp64_3_3_0_www_cryptowiz_new3_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_PaymentPlans_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PaymentPlans_vue_vue_type_template_id_20cfddef_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-20cfddef"],['__file',"resources/js/components/PaymentPlans.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./resources/js/components/PaymentPlans.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/components/PaymentPlans.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PaymentPlans_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PaymentPlans_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PaymentPlans.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PaymentPlans.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/PaymentPlans.vue?vue&type=template&id=20cfddef&scoped=true":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/PaymentPlans.vue?vue&type=template&id=20cfddef&scoped=true ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PaymentPlans_vue_vue_type_template_id_20cfddef_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PaymentPlans_vue_vue_type_template_id_20cfddef_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PaymentPlans.vue?vue&type=template&id=20cfddef&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PaymentPlans.vue?vue&type=template&id=20cfddef&scoped=true");


/***/ }),

/***/ "./resources/js/components/PaymentPlans.vue?vue&type=style&index=0&id=20cfddef&scoped=true&lang=css":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/PaymentPlans.vue?vue&type=style&index=0&id=20cfddef&scoped=true&lang=css ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PaymentPlans_vue_vue_type_style_index_0_id_20cfddef_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PaymentPlans.vue?vue&type=style&index=0&id=20cfddef&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PaymentPlans.vue?vue&type=style&index=0&id=20cfddef&scoped=true&lang=css");


/***/ })

}]);