import D, { useState as Pe, useMemo as tn, createContext as Ui, useEffect as Ft, useContext as Ts, useRef as wn, useCallback as $t, useLayoutEffect as wi } from "react";
import hl, { createPortal as dl } from "react-dom";
const pl = "https://api.hype.day", gl = "https://apitest.hype.day";
let br = "https://api.hype.day";
const Xn = new Headers({
  "Content-Type": "application/json"
});
function yl(n) {
  br = n ? gl : pl;
}
function wl(n) {
  n ? Xn.set("Authorization", `Bearer ${n}`) : Xn.delete("Authorization");
}
function jr(n) {
  return n.text().then((e) => {
    if (e === "OK")
      return e;
    const t = e && JSON.parse(e);
    if (!n.ok) {
      const r = t && t.message || n.statusText;
      return Promise.reject(r);
    }
    return t;
  });
}
function ml({
  appId: n,
  projectId: e
}) {
  const t = {
    method: "GET",
    headers: Xn
  };
  return fetch(
    `${br}/getProject?` + new URLSearchParams({
      appid: n,
      projectid: e
    }),
    t
  ).then(jr);
}
function bl(n) {
  const e = "solana", t = {
    method: "POST",
    headers: Xn,
    body: JSON.stringify({ chain: e, ...n })
  };
  return fetch(`${br}/addWallet`, t).then(jr);
}
function Al(n) {
  const e = "solana", t = {
    method: "POST",
    headers: Xn,
    body: JSON.stringify({ chain: e, ...n })
  };
  return fetch(`${br}/verifyWallet`, t).then(jr);
}
function Fc({
  provider: n,
  appId: e,
  projectId: t,
  returnUrl: r
}) {
  const o = {
    method: "POST",
    headers: Xn,
    body: JSON.stringify({
      appId: e,
      projectId: t,
      returnUrl: r
    })
  };
  return fetch(
    `${br}/${n === "twitter" ? "t" : "d"}GetUrlForApp`,
    o
  ).then(jr);
}
function vl({
  appId: n,
  projectId: e,
  customField: t
}) {
  const r = {
    method: "POST",
    headers: Xn,
    body: JSON.stringify({
      appId: n,
      projectId: e,
      customField: t
    })
  };
  return fetch(`${br}/validateForAppProject`, r).then(
    jr
  );
}
function Ns({
  title: n,
  rightText: e,
  buttonDisabled: t = !1,
  onClick: r,
  info: o,
  isLoading: i = !1,
  showButton: c = !0
}) {
  return /* @__PURE__ */ D.createElement("section", {
    className: "hypeday-section"
  }, /* @__PURE__ */ D.createElement("header", {
    className: "hypeday-section-header"
  }, /* @__PURE__ */ D.createElement("h3", {
    className: "hypeday-h3"
  }, n), c && /* @__PURE__ */ D.createElement("button", {
    className: "hypeday-button",
    onClick: r,
    disabled: i || t,
    title: t ? "Please login first" : void 0
  }, i && /* @__PURE__ */ D.createElement("div", {
    className: "hypeday-spinner hypeday-btn-spinner"
  }), /* @__PURE__ */ D.createElement("span", {
    style: { visibility: i ? "hidden" : "initial" }
  }, e || "Connect"))), o.map((u, d) => /* @__PURE__ */ D.createElement("span", {
    key: d,
    className: "hypeday-info"
  }, u)));
}
function El({
  projectData: n,
  appId: e,
  hasUser: t,
  logger: r
}) {
  var d, w, v, I;
  const [o, i] = Pe(!1), c = tn(() => {
    var U, P;
    if (!((U = n == null ? void 0 : n.discord) != null && U.enabled) && !((P = n == null ? void 0 : n.discord2) != null && P.enabled))
      return [];
    const { discord: _, discord2: E } = n, N = [];
    _ != null && _.enabled && N.push(_), E != null && E.enabled && N.push(E);
    const T = [];
    return N.forEach((F) => {
      var O;
      if (F.isServerRequired) {
        const z = /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("div", {
          className: "hypeday-req-list-item"
        }, /* @__PURE__ */ D.createElement("div", null, "Join the", " ", /* @__PURE__ */ D.createElement("a", {
          href: F == null ? void 0 : F.serverLink,
          target: "_blank",
          rel: "noreferrer"
        }, /* @__PURE__ */ D.createElement("strong", null, F == null ? void 0 : F.serverDisplayName)), " ", "server on Discord", F.isShouldJoinBeforeRequired ? /* @__PURE__ */ D.createElement(D.Fragment, null, " ", "before", " ", /* @__PURE__ */ D.createElement("strong", null, new Date(
          (F == null ? void 0 : F.shouldJoinBefore) || ""
        ).toLocaleDateString())) : null), /* @__PURE__ */ D.createElement("a", {
          className: "hypeday-button hypeday-button-gray hypeday-discord-req-action-button",
          href: (F == null ? void 0 : F.serverLink) || "/",
          target: "_blank",
          rel: "noreferrer"
        }, /* @__PURE__ */ D.createElement("span", null, "Join the ", /* @__PURE__ */ D.createElement("b", null, (F == null ? void 0 : F.serverDisplayName) || "test")))));
        T.push(z);
      }
      if (F.isRoleRequired) {
        const z = /* @__PURE__ */ D.createElement(D.Fragment, null, 'and have the "', (O = F == null ? void 0 : F.roleDisplayNames) == null ? void 0 : O.join(", "), '" role(s)');
        T.push(z);
      }
    }), T;
  }, [n]), u = async () => {
    if (!(!e || !t || !(n != null && n.id)))
      try {
        i(!0);
        const { url: _ } = await Fc({
          provider: "discord",
          appId: e,
          projectId: n.id,
          returnUrl: window.location.href
        });
        window.location.assign(_);
      } catch (_) {
        console.error(_), r == null || r.error(
          "HypeDayReact: Error getting Discord oauth url",
          "hype05",
          _
        );
      } finally {
        i(!1);
      }
  };
  return !((d = n == null ? void 0 : n.discord) != null && d.enabled) && !((w = n == null ? void 0 : n.discord2) != null && w.enabled) ? null : /* @__PURE__ */ D.createElement(Ns, {
    title: "Discord",
    onClick: u,
    info: c,
    rightText: (I = (v = n == null ? void 0 : n.userInfo) == null ? void 0 : v.discord) == null ? void 0 : I.username,
    buttonDisabled: !t,
    isLoading: o
  });
}
const xl = D.forwardRef(function({
  projectData: e
}, t) {
  var o;
  if (!((o = e == null ? void 0 : e.customfield) != null && o.enabled))
    return null;
  const { customfield: r } = e;
  return /* @__PURE__ */ D.createElement("section", {
    className: "hypeday-section"
  }, /* @__PURE__ */ D.createElement("header", {
    className: "hypeday-section-header"
  }, /* @__PURE__ */ D.createElement("h3", {
    className: "hypeday-h3"
  }, "Open Response")), /* @__PURE__ */ D.createElement("span", {
    className: "hypeday-info"
  }, r.labels[0]), /* @__PURE__ */ D.createElement("input", {
    className: "hypeday-input",
    type: "text",
    placeholder: r.labels[0],
    ref: t
  }));
});
var yn = /* @__PURE__ */ ((n) => (n.willOpen = "willOpen", n.alwaysOpen = "alwaysOpen", n.willClose = "willClose", n.closed = "closed", n))(yn || {});
const zc = Ui(
  {}
);
function Il({
  children: n
}) {
  const [e, t] = Pe(), [r, o] = Pe(
    "alwaysOpen"
  ), [i, c] = Pe();
  Ft(() => {
    var I, _, E, N, T, U, P, F;
    const d = Date.now(), w = (I = e == null ? void 0 : e.signupAccess) != null && I.isStartDateRequired ? new Date((_ = e == null ? void 0 : e.signupAccess) == null ? void 0 : _.startDate).getTime() : null, v = (E = e == null ? void 0 : e.signupAccess) != null && E.isEndDateRequired ? new Date((N = e == null ? void 0 : e.signupAccess) == null ? void 0 : N.endDate).getTime() : null;
    if (!w && !v) {
      o("alwaysOpen");
      return;
    }
    if (w && w > d) {
      o("willOpen"), c((T = e == null ? void 0 : e.signupAccess) == null ? void 0 : T.startDate);
      const O = setTimeout(() => {
        var z;
        o(
          v ? "willClose" : "alwaysOpen"
        ), c((z = e == null ? void 0 : e.signupAccess) == null ? void 0 : z.endDate);
      }, w - d);
      return () => clearTimeout(O);
    }
    if (w && w < d) {
      if (v) {
        o("willClose"), c((U = e == null ? void 0 : e.signupAccess) == null ? void 0 : U.endDate);
        const O = setTimeout(() => {
          o("closed");
        }, v - d);
        return () => clearTimeout(O);
      }
      o("alwaysOpen");
      return;
    }
    if (v && v > d) {
      o("willClose"), c((P = e == null ? void 0 : e.signupAccess) == null ? void 0 : P.endDate);
      const O = setTimeout(() => {
        var z;
        o("closed"), c((z = e == null ? void 0 : e.signupAccess) == null ? void 0 : z.endDate);
      }, v - d);
      return () => clearTimeout(O);
    }
    if (v && v < d) {
      o("closed"), c((F = e == null ? void 0 : e.signupAccess) == null ? void 0 : F.endDate);
      return;
    }
  }, [e]);
  const u = tn(
    () => ({
      status: r,
      dateString: i,
      setData: t
    }),
    [r, i, t]
  );
  return /* @__PURE__ */ D.createElement(zc.Provider, {
    value: u
  }, n);
}
function Rs() {
  return Ts(zc);
}
function Ia({
  dateString: n,
  message: e
}) {
  const [t, r] = Pe(!1), [o, i] = Pe(0), [c, u] = Pe(0), [d, w] = Pe(0), [v, I] = Pe(0);
  return Ft(() => {
    const _ = new Date(n).getTime(), E = setInterval(() => {
      const N = new Date().getTime(), T = _ - N, U = Math.floor(T / (1e3 * 60 * 60 * 24)), P = Math.floor(
        T % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)
      ), F = Math.floor(T % (1e3 * 60 * 60) / (1e3 * 60)), O = Math.floor(T % (1e3 * 60) / 1e3);
      if (T <= 0) {
        clearInterval(E), r(!0), i(0), u(0), w(0), I(0);
        return;
      }
      i(U), u(P), w(F), I(O);
    }, 1e3);
    return () => clearInterval(E);
  }, [n]), !t && !o && !c && !d && !v ? /* @__PURE__ */ D.createElement("span", {
    style: { visibility: "hidden" }
  }, "Calculating..") : t ? /* @__PURE__ */ D.createElement(D.Fragment, null, e) : /* @__PURE__ */ D.createElement(D.Fragment, null, o > 0 && `${o} days, `, c > 0 && `${c} hours, `, d > 0 && `${d} minutes, `, v > 0 && `${v} seconds`);
}
function xo({
  children: n,
  title: e
}) {
  return /* @__PURE__ */ D.createElement("section", {
    className: "hypeday-section"
  }, /* @__PURE__ */ D.createElement("header", {
    className: "hypeday-section-header"
  }, /* @__PURE__ */ D.createElement("h3", {
    className: "hypeday-h3"
  }, e)), /* @__PURE__ */ D.createElement("span", {
    className: "hypeday-info"
  }, n));
}
function Sl() {
  var t;
  const { status: n, dateString: e } = Rs();
  return n === yn.closed ? /* @__PURE__ */ D.createElement(xo, {
    title: "Registration is closed"
  }, "Registration is closed on", " ", (t = new Date(e)) == null ? void 0 : t.toUTCString(), ". Thank you for your interest.") : n === yn.willOpen ? /* @__PURE__ */ D.createElement(xo, {
    title: "Registration starts in:"
  }, /* @__PURE__ */ D.createElement(Ia, {
    dateString: e,
    message: "Registration is open."
  })) : n === yn.willClose ? /* @__PURE__ */ D.createElement(xo, {
    title: "Registration ends in:"
  }, /* @__PURE__ */ D.createElement(Ia, {
    dateString: e,
    message: "Registration is closed."
  })) : null;
}
function Sa(n) {
  return `${n.slice(0, 4)}...${n.slice(-4)}`;
}
function fs() {
  return Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1;
}
var cn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Bl(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function Di(n) {
  var e = n.default;
  if (typeof e == "function") {
    var t = function() {
      return e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(n).forEach(function(r) {
    var o = Object.getOwnPropertyDescriptor(n, r);
    Object.defineProperty(t, r, o.get ? o : {
      enumerable: !0,
      get: function() {
        return n[r];
      }
    });
  }), t;
}
var hs = { exports: {} }, Jn = {}, mi = { exports: {} }, Io = { exports: {} }, Oe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ba;
function Ml() {
  if (Ba)
    return Oe;
  Ba = 1;
  var n = typeof Symbol == "function" && Symbol.for, e = n ? Symbol.for("react.element") : 60103, t = n ? Symbol.for("react.portal") : 60106, r = n ? Symbol.for("react.fragment") : 60107, o = n ? Symbol.for("react.strict_mode") : 60108, i = n ? Symbol.for("react.profiler") : 60114, c = n ? Symbol.for("react.provider") : 60109, u = n ? Symbol.for("react.context") : 60110, d = n ? Symbol.for("react.async_mode") : 60111, w = n ? Symbol.for("react.concurrent_mode") : 60111, v = n ? Symbol.for("react.forward_ref") : 60112, I = n ? Symbol.for("react.suspense") : 60113, _ = n ? Symbol.for("react.suspense_list") : 60120, E = n ? Symbol.for("react.memo") : 60115, N = n ? Symbol.for("react.lazy") : 60116, T = n ? Symbol.for("react.block") : 60121, U = n ? Symbol.for("react.fundamental") : 60117, P = n ? Symbol.for("react.responder") : 60118, F = n ? Symbol.for("react.scope") : 60119;
  function O(L) {
    if (typeof L == "object" && L !== null) {
      var W = L.$$typeof;
      switch (W) {
        case e:
          switch (L = L.type, L) {
            case d:
            case w:
            case r:
            case i:
            case o:
            case I:
              return L;
            default:
              switch (L = L && L.$$typeof, L) {
                case u:
                case v:
                case N:
                case E:
                case c:
                  return L;
                default:
                  return W;
              }
          }
        case t:
          return W;
      }
    }
  }
  function z(L) {
    return O(L) === w;
  }
  return Oe.AsyncMode = d, Oe.ConcurrentMode = w, Oe.ContextConsumer = u, Oe.ContextProvider = c, Oe.Element = e, Oe.ForwardRef = v, Oe.Fragment = r, Oe.Lazy = N, Oe.Memo = E, Oe.Portal = t, Oe.Profiler = i, Oe.StrictMode = o, Oe.Suspense = I, Oe.isAsyncMode = function(L) {
    return z(L) || O(L) === d;
  }, Oe.isConcurrentMode = z, Oe.isContextConsumer = function(L) {
    return O(L) === u;
  }, Oe.isContextProvider = function(L) {
    return O(L) === c;
  }, Oe.isElement = function(L) {
    return typeof L == "object" && L !== null && L.$$typeof === e;
  }, Oe.isForwardRef = function(L) {
    return O(L) === v;
  }, Oe.isFragment = function(L) {
    return O(L) === r;
  }, Oe.isLazy = function(L) {
    return O(L) === N;
  }, Oe.isMemo = function(L) {
    return O(L) === E;
  }, Oe.isPortal = function(L) {
    return O(L) === t;
  }, Oe.isProfiler = function(L) {
    return O(L) === i;
  }, Oe.isStrictMode = function(L) {
    return O(L) === o;
  }, Oe.isSuspense = function(L) {
    return O(L) === I;
  }, Oe.isValidElementType = function(L) {
    return typeof L == "string" || typeof L == "function" || L === r || L === w || L === i || L === o || L === I || L === _ || typeof L == "object" && L !== null && (L.$$typeof === N || L.$$typeof === E || L.$$typeof === c || L.$$typeof === u || L.$$typeof === v || L.$$typeof === U || L.$$typeof === P || L.$$typeof === F || L.$$typeof === T);
  }, Oe.typeOf = O, Oe;
}
var Le = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ma;
function _l() {
  return Ma || (Ma = 1, process.env.NODE_ENV !== "production" && function() {
    var n = typeof Symbol == "function" && Symbol.for, e = n ? Symbol.for("react.element") : 60103, t = n ? Symbol.for("react.portal") : 60106, r = n ? Symbol.for("react.fragment") : 60107, o = n ? Symbol.for("react.strict_mode") : 60108, i = n ? Symbol.for("react.profiler") : 60114, c = n ? Symbol.for("react.provider") : 60109, u = n ? Symbol.for("react.context") : 60110, d = n ? Symbol.for("react.async_mode") : 60111, w = n ? Symbol.for("react.concurrent_mode") : 60111, v = n ? Symbol.for("react.forward_ref") : 60112, I = n ? Symbol.for("react.suspense") : 60113, _ = n ? Symbol.for("react.suspense_list") : 60120, E = n ? Symbol.for("react.memo") : 60115, N = n ? Symbol.for("react.lazy") : 60116, T = n ? Symbol.for("react.block") : 60121, U = n ? Symbol.for("react.fundamental") : 60117, P = n ? Symbol.for("react.responder") : 60118, F = n ? Symbol.for("react.scope") : 60119;
    function O(K) {
      return typeof K == "string" || typeof K == "function" || K === r || K === w || K === i || K === o || K === I || K === _ || typeof K == "object" && K !== null && (K.$$typeof === N || K.$$typeof === E || K.$$typeof === c || K.$$typeof === u || K.$$typeof === v || K.$$typeof === U || K.$$typeof === P || K.$$typeof === F || K.$$typeof === T);
    }
    function z(K) {
      if (typeof K == "object" && K !== null) {
        var We = K.$$typeof;
        switch (We) {
          case e:
            var xe = K.type;
            switch (xe) {
              case d:
              case w:
              case r:
              case i:
              case o:
              case I:
                return xe;
              default:
                var Ge = xe && xe.$$typeof;
                switch (Ge) {
                  case u:
                  case v:
                  case N:
                  case E:
                  case c:
                    return Ge;
                  default:
                    return We;
                }
            }
          case t:
            return We;
        }
      }
    }
    var L = d, W = w, j = u, Q = c, le = e, Se = v, ge = r, Me = N, M = E, l = t, g = i, m = o, y = I, x = !1;
    function k(K) {
      return x || (x = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), C(K) || z(K) === d;
    }
    function C(K) {
      return z(K) === w;
    }
    function b(K) {
      return z(K) === u;
    }
    function h(K) {
      return z(K) === c;
    }
    function B(K) {
      return typeof K == "object" && K !== null && K.$$typeof === e;
    }
    function q(K) {
      return z(K) === v;
    }
    function Z(K) {
      return z(K) === r;
    }
    function V(K) {
      return z(K) === N;
    }
    function oe(K) {
      return z(K) === E;
    }
    function $(K) {
      return z(K) === t;
    }
    function se(K) {
      return z(K) === i;
    }
    function be(K) {
      return z(K) === o;
    }
    function ve(K) {
      return z(K) === I;
    }
    Le.AsyncMode = L, Le.ConcurrentMode = W, Le.ContextConsumer = j, Le.ContextProvider = Q, Le.Element = le, Le.ForwardRef = Se, Le.Fragment = ge, Le.Lazy = Me, Le.Memo = M, Le.Portal = l, Le.Profiler = g, Le.StrictMode = m, Le.Suspense = y, Le.isAsyncMode = k, Le.isConcurrentMode = C, Le.isContextConsumer = b, Le.isContextProvider = h, Le.isElement = B, Le.isForwardRef = q, Le.isFragment = Z, Le.isLazy = V, Le.isMemo = oe, Le.isPortal = $, Le.isProfiler = se, Le.isStrictMode = be, Le.isSuspense = ve, Le.isValidElementType = O, Le.typeOf = z;
  }()), Le;
}
var _a;
function Hc() {
  return _a || (_a = 1, function(n) {
    process.env.NODE_ENV === "production" ? n.exports = Ml() : n.exports = _l();
  }(Io)), Io.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var So, Ca;
function Cl() {
  if (Ca)
    return So;
  Ca = 1;
  var n = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function r(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var c = {}, u = 0; u < 10; u++)
        c["_" + String.fromCharCode(u)] = u;
      var d = Object.getOwnPropertyNames(c).map(function(v) {
        return c[v];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var w = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(v) {
        w[v] = v;
      }), Object.keys(Object.assign({}, w)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return So = o() ? Object.assign : function(i, c) {
    for (var u, d = r(i), w, v = 1; v < arguments.length; v++) {
      u = Object(arguments[v]);
      for (var I in u)
        e.call(u, I) && (d[I] = u[I]);
      if (n) {
        w = n(u);
        for (var _ = 0; _ < w.length; _++)
          t.call(u, w[_]) && (d[w[_]] = u[w[_]]);
      }
    }
    return d;
  }, So;
}
var Bo, Ta;
function ks() {
  if (Ta)
    return Bo;
  Ta = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Bo = n, Bo;
}
var Mo, Na;
function Wc() {
  return Na || (Na = 1, Mo = Function.call.bind(Object.prototype.hasOwnProperty)), Mo;
}
var _o, Ra;
function Tl() {
  if (Ra)
    return _o;
  Ra = 1;
  var n = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = ks(), t = {}, r = Wc();
    n = function(i) {
      var c = "Warning: " + i;
      typeof console < "u" && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    };
  }
  function o(i, c, u, d, w) {
    if (process.env.NODE_ENV !== "production") {
      for (var v in i)
        if (r(i, v)) {
          var I;
          try {
            if (typeof i[v] != "function") {
              var _ = Error(
                (d || "React class") + ": " + u + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw _.name = "Invariant Violation", _;
            }
            I = i[v](c, v, d, u, null, e);
          } catch (N) {
            I = N;
          }
          if (I && !(I instanceof Error) && n(
            (d || "React class") + ": type specification of " + u + " `" + v + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof I + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), I instanceof Error && !(I.message in t)) {
            t[I.message] = !0;
            var E = w ? w() : "";
            n(
              "Failed " + u + " type: " + I.message + (E != null ? E : "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, _o = o, _o;
}
var Co, ka;
function Nl() {
  if (ka)
    return Co;
  ka = 1;
  var n = Hc(), e = Cl(), t = ks(), r = Wc(), o = Tl(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(u) {
    var d = "Warning: " + u;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function c() {
    return null;
  }
  return Co = function(u, d) {
    var w = typeof Symbol == "function" && Symbol.iterator, v = "@@iterator";
    function I(C) {
      var b = C && (w && C[w] || C[v]);
      if (typeof b == "function")
        return b;
    }
    var _ = "<<anonymous>>", E = {
      array: P("array"),
      bigint: P("bigint"),
      bool: P("boolean"),
      func: P("function"),
      number: P("number"),
      object: P("object"),
      string: P("string"),
      symbol: P("symbol"),
      any: F(),
      arrayOf: O,
      element: z(),
      elementType: L(),
      instanceOf: W,
      node: Se(),
      objectOf: Q,
      oneOf: j,
      oneOfType: le,
      shape: Me,
      exact: M
    };
    function N(C, b) {
      return C === b ? C !== 0 || 1 / C === 1 / b : C !== C && b !== b;
    }
    function T(C, b) {
      this.message = C, this.data = b && typeof b == "object" ? b : {}, this.stack = "";
    }
    T.prototype = Error.prototype;
    function U(C) {
      if (process.env.NODE_ENV !== "production")
        var b = {}, h = 0;
      function B(Z, V, oe, $, se, be, ve) {
        if ($ = $ || _, be = be || oe, ve !== t) {
          if (d) {
            var K = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw K.name = "Invariant Violation", K;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var We = $ + ":" + oe;
            !b[We] && h < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + be + "` prop on `" + $ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), b[We] = !0, h++);
          }
        }
        return V[oe] == null ? Z ? V[oe] === null ? new T("The " + se + " `" + be + "` is marked as required " + ("in `" + $ + "`, but its value is `null`.")) : new T("The " + se + " `" + be + "` is marked as required in " + ("`" + $ + "`, but its value is `undefined`.")) : null : C(V, oe, $, se, be);
      }
      var q = B.bind(null, !1);
      return q.isRequired = B.bind(null, !0), q;
    }
    function P(C) {
      function b(h, B, q, Z, V, oe) {
        var $ = h[B], se = m($);
        if (se !== C) {
          var be = y($);
          return new T(
            "Invalid " + Z + " `" + V + "` of type " + ("`" + be + "` supplied to `" + q + "`, expected ") + ("`" + C + "`."),
            { expectedType: C }
          );
        }
        return null;
      }
      return U(b);
    }
    function F() {
      return U(c);
    }
    function O(C) {
      function b(h, B, q, Z, V) {
        if (typeof C != "function")
          return new T("Property `" + V + "` of component `" + q + "` has invalid PropType notation inside arrayOf.");
        var oe = h[B];
        if (!Array.isArray(oe)) {
          var $ = m(oe);
          return new T("Invalid " + Z + " `" + V + "` of type " + ("`" + $ + "` supplied to `" + q + "`, expected an array."));
        }
        for (var se = 0; se < oe.length; se++) {
          var be = C(oe, se, q, Z, V + "[" + se + "]", t);
          if (be instanceof Error)
            return be;
        }
        return null;
      }
      return U(b);
    }
    function z() {
      function C(b, h, B, q, Z) {
        var V = b[h];
        if (!u(V)) {
          var oe = m(V);
          return new T("Invalid " + q + " `" + Z + "` of type " + ("`" + oe + "` supplied to `" + B + "`, expected a single ReactElement."));
        }
        return null;
      }
      return U(C);
    }
    function L() {
      function C(b, h, B, q, Z) {
        var V = b[h];
        if (!n.isValidElementType(V)) {
          var oe = m(V);
          return new T("Invalid " + q + " `" + Z + "` of type " + ("`" + oe + "` supplied to `" + B + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return U(C);
    }
    function W(C) {
      function b(h, B, q, Z, V) {
        if (!(h[B] instanceof C)) {
          var oe = C.name || _, $ = k(h[B]);
          return new T("Invalid " + Z + " `" + V + "` of type " + ("`" + $ + "` supplied to `" + q + "`, expected ") + ("instance of `" + oe + "`."));
        }
        return null;
      }
      return U(b);
    }
    function j(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), c;
      function b(h, B, q, Z, V) {
        for (var oe = h[B], $ = 0; $ < C.length; $++)
          if (N(oe, C[$]))
            return null;
        var se = JSON.stringify(C, function(ve, K) {
          var We = y(K);
          return We === "symbol" ? String(K) : K;
        });
        return new T("Invalid " + Z + " `" + V + "` of value `" + String(oe) + "` " + ("supplied to `" + q + "`, expected one of " + se + "."));
      }
      return U(b);
    }
    function Q(C) {
      function b(h, B, q, Z, V) {
        if (typeof C != "function")
          return new T("Property `" + V + "` of component `" + q + "` has invalid PropType notation inside objectOf.");
        var oe = h[B], $ = m(oe);
        if ($ !== "object")
          return new T("Invalid " + Z + " `" + V + "` of type " + ("`" + $ + "` supplied to `" + q + "`, expected an object."));
        for (var se in oe)
          if (r(oe, se)) {
            var be = C(oe, se, q, Z, V + "." + se, t);
            if (be instanceof Error)
              return be;
          }
        return null;
      }
      return U(b);
    }
    function le(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var b = 0; b < C.length; b++) {
        var h = C[b];
        if (typeof h != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + x(h) + " at index " + b + "."
          ), c;
      }
      function B(q, Z, V, oe, $) {
        for (var se = [], be = 0; be < C.length; be++) {
          var ve = C[be], K = ve(q, Z, V, oe, $, t);
          if (K == null)
            return null;
          K.data && r(K.data, "expectedType") && se.push(K.data.expectedType);
        }
        var We = se.length > 0 ? ", expected one of type [" + se.join(", ") + "]" : "";
        return new T("Invalid " + oe + " `" + $ + "` supplied to " + ("`" + V + "`" + We + "."));
      }
      return U(B);
    }
    function Se() {
      function C(b, h, B, q, Z) {
        return l(b[h]) ? null : new T("Invalid " + q + " `" + Z + "` supplied to " + ("`" + B + "`, expected a ReactNode."));
      }
      return U(C);
    }
    function ge(C, b, h, B, q) {
      return new T(
        (C || "React class") + ": " + b + " type `" + h + "." + B + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + q + "`."
      );
    }
    function Me(C) {
      function b(h, B, q, Z, V) {
        var oe = h[B], $ = m(oe);
        if ($ !== "object")
          return new T("Invalid " + Z + " `" + V + "` of type `" + $ + "` " + ("supplied to `" + q + "`, expected `object`."));
        for (var se in C) {
          var be = C[se];
          if (typeof be != "function")
            return ge(q, Z, V, se, y(be));
          var ve = be(oe, se, q, Z, V + "." + se, t);
          if (ve)
            return ve;
        }
        return null;
      }
      return U(b);
    }
    function M(C) {
      function b(h, B, q, Z, V) {
        var oe = h[B], $ = m(oe);
        if ($ !== "object")
          return new T("Invalid " + Z + " `" + V + "` of type `" + $ + "` " + ("supplied to `" + q + "`, expected `object`."));
        var se = e({}, h[B], C);
        for (var be in se) {
          var ve = C[be];
          if (r(C, be) && typeof ve != "function")
            return ge(q, Z, V, be, y(ve));
          if (!ve)
            return new T(
              "Invalid " + Z + " `" + V + "` key `" + be + "` supplied to `" + q + "`.\nBad object: " + JSON.stringify(h[B], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(C), null, "  ")
            );
          var K = ve(oe, be, q, Z, V + "." + be, t);
          if (K)
            return K;
        }
        return null;
      }
      return U(b);
    }
    function l(C) {
      switch (typeof C) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !C;
        case "object":
          if (Array.isArray(C))
            return C.every(l);
          if (C === null || u(C))
            return !0;
          var b = I(C);
          if (b) {
            var h = b.call(C), B;
            if (b !== C.entries) {
              for (; !(B = h.next()).done; )
                if (!l(B.value))
                  return !1;
            } else
              for (; !(B = h.next()).done; ) {
                var q = B.value;
                if (q && !l(q[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function g(C, b) {
      return C === "symbol" ? !0 : b ? b["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && b instanceof Symbol : !1;
    }
    function m(C) {
      var b = typeof C;
      return Array.isArray(C) ? "array" : C instanceof RegExp ? "object" : g(b, C) ? "symbol" : b;
    }
    function y(C) {
      if (typeof C > "u" || C === null)
        return "" + C;
      var b = m(C);
      if (b === "object") {
        if (C instanceof Date)
          return "date";
        if (C instanceof RegExp)
          return "regexp";
      }
      return b;
    }
    function x(C) {
      var b = y(C);
      switch (b) {
        case "array":
        case "object":
          return "an " + b;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + b;
        default:
          return b;
      }
    }
    function k(C) {
      return !C.constructor || !C.constructor.name ? _ : C.constructor.name;
    }
    return E.checkPropTypes = o, E.resetWarningCache = o.resetWarningCache, E.PropTypes = E, E;
  }, Co;
}
var To, Oa;
function Rl() {
  if (Oa)
    return To;
  Oa = 1;
  var n = ks();
  function e() {
  }
  function t() {
  }
  return t.resetWarningCache = e, To = function() {
    function r(c, u, d, w, v, I) {
      if (I !== n) {
        var _ = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw _.name = "Invariant Violation", _;
      }
    }
    r.isRequired = r;
    function o() {
      return r;
    }
    var i = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: o,
      element: r,
      elementType: r,
      instanceOf: o,
      node: r,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: t,
      resetWarningCache: e
    };
    return i.PropTypes = i, i;
  }, To;
}
if (process.env.NODE_ENV !== "production") {
  var kl = Hc(), Ol = !0;
  mi.exports = Nl()(kl.isElement, Ol);
} else
  mi.exports = Rl()();
var ds = { exports: {} }, ln = {}, bi = { exports: {} };
(function(n, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = v;
  /*!
   * Adapted from jQuery UI core
   *
   * http://jqueryui.com
   *
   * Copyright 2014 jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/category/ui-core/
   */
  var t = "none", r = "contents", o = /input|select|textarea|button|object|iframe/;
  function i(I, _) {
    return _.getPropertyValue("overflow") !== "visible" || I.scrollWidth <= 0 && I.scrollHeight <= 0;
  }
  function c(I) {
    var _ = I.offsetWidth <= 0 && I.offsetHeight <= 0;
    if (_ && !I.innerHTML)
      return !0;
    try {
      var E = window.getComputedStyle(I), N = E.getPropertyValue("display");
      return _ ? N !== r && i(I, E) : N === t;
    } catch {
      return console.warn("Failed to inspect element style"), !1;
    }
  }
  function u(I) {
    for (var _ = I, E = I.getRootNode && I.getRootNode(); _ && _ !== document.body; ) {
      if (E && _ === E && (_ = E.host.parentNode), c(_))
        return !1;
      _ = _.parentNode;
    }
    return !0;
  }
  function d(I, _) {
    var E = I.nodeName.toLowerCase(), N = o.test(E) && !I.disabled || E === "a" && I.href || _;
    return N && u(I);
  }
  function w(I) {
    var _ = I.getAttribute("tabindex");
    _ === null && (_ = void 0);
    var E = isNaN(_);
    return (E || _ >= 0) && d(I, !E);
  }
  function v(I) {
    var _ = [].slice.call(I.querySelectorAll("*"), 0).reduce(function(E, N) {
      return E.concat(N.shadowRoot ? v(N.shadowRoot) : [N]);
    }, []);
    return _.filter(w);
  }
  n.exports = e.default;
})(bi, bi.exports);
Object.defineProperty(ln, "__esModule", {
  value: !0
});
ln.resetState = Pl;
ln.log = Fl;
ln.handleBlur = Or;
ln.handleFocus = Lr;
ln.markForFocusLater = zl;
ln.returnFocus = Hl;
ln.popWithoutFocus = Wl;
ln.setupScopedFocus = Gl;
ln.teardownScopedFocus = jl;
var Ll = bi.exports, Ul = Dl(Ll);
function Dl(n) {
  return n && n.__esModule ? n : { default: n };
}
var $n = [], cr = null, ps = !1;
function Pl() {
  $n = [];
}
function Fl() {
  process.env.NODE_ENV !== "production" && (console.log("focusManager ----------"), $n.forEach(function(n) {
    var e = n || {};
    console.log(e.nodeName, e.className, e.id);
  }), console.log("end focusManager ----------"));
}
function Or() {
  ps = !0;
}
function Lr() {
  if (ps) {
    if (ps = !1, !cr)
      return;
    setTimeout(function() {
      if (!cr.contains(document.activeElement)) {
        var n = (0, Ul.default)(cr)[0] || cr;
        n.focus();
      }
    }, 0);
  }
}
function zl() {
  $n.push(document.activeElement);
}
function Hl() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, e = null;
  try {
    $n.length !== 0 && (e = $n.pop(), e.focus({ preventScroll: n }));
    return;
  } catch {
    console.warn(["You tried to return focus to", e, "but it is not in the DOM anymore"].join(" "));
  }
}
function Wl() {
  $n.length > 0 && $n.pop();
}
function Gl(n) {
  cr = n, window.addEventListener ? (window.addEventListener("blur", Or, !1), document.addEventListener("focus", Lr, !0)) : (window.attachEvent("onBlur", Or), document.attachEvent("onFocus", Lr));
}
function jl() {
  cr = null, window.addEventListener ? (window.removeEventListener("blur", Or), document.removeEventListener("focus", Lr)) : (window.detachEvent("onBlur", Or), document.detachEvent("onFocus", Lr));
}
var gs = { exports: {} };
(function(n, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = c;
  var t = bi.exports, r = o(t);
  function o(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function i() {
    var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    return u.activeElement.shadowRoot ? i(u.activeElement.shadowRoot) : u.activeElement;
  }
  function c(u, d) {
    var w = (0, r.default)(u);
    if (!w.length) {
      d.preventDefault();
      return;
    }
    var v = void 0, I = d.shiftKey, _ = w[0], E = w[w.length - 1], N = i();
    if (u === N) {
      if (!I)
        return;
      v = E;
    }
    if (E === N && !I && (v = _), _ === N && I && (v = E), v) {
      d.preventDefault(), v.focus();
      return;
    }
    var T = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent), U = T != null && T[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;
    if (!!U) {
      var P = w.indexOf(N);
      if (P > -1 && (P += I ? -1 : 1), v = w[P], typeof v > "u") {
        d.preventDefault(), v = I ? E : _, v.focus();
        return;
      }
      d.preventDefault(), v.focus();
    }
  }
  n.exports = e.default;
})(gs, gs.exports);
var fn = {}, Ql = process.env.NODE_ENV !== "production", Gc = function() {
};
if (Ql) {
  var ql = function(e, t) {
    var r = arguments.length;
    t = new Array(r > 1 ? r - 1 : 0);
    for (var o = 1; o < r; o++)
      t[o - 1] = arguments[o];
    var i = 0, c = "Warning: " + e.replace(/%s/g, function() {
      return t[i++];
    });
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  };
  Gc = function(n, e, t) {
    var r = arguments.length;
    t = new Array(r > 2 ? r - 2 : 0);
    for (var o = 2; o < r; o++)
      t[o - 2] = arguments[o];
    if (e === void 0)
      throw new Error(
        "`warning(condition, format, ...args)` requires a warning message argument"
      );
    n || ql.apply(null, [e].concat(t));
  };
}
var Yl = Gc, sn = {}, jc = { exports: {} };
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
(function(n) {
  (function() {
    var e = !!(typeof window < "u" && window.document && window.document.createElement), t = {
      canUseDOM: e,
      canUseWorkers: typeof Worker < "u",
      canUseEventListeners: e && !!(window.addEventListener || window.attachEvent),
      canUseViewport: e && !!window.screen
    };
    n.exports ? n.exports = t : window.ExecutionEnvironment = t;
  })();
})(jc);
Object.defineProperty(sn, "__esModule", {
  value: !0
});
sn.canUseDOM = sn.SafeNodeList = sn.SafeHTMLCollection = void 0;
var Kl = jc.exports, Vl = Zl(Kl);
function Zl(n) {
  return n && n.__esModule ? n : { default: n };
}
var Pi = Vl.default, Xl = Pi.canUseDOM ? window.HTMLElement : {};
sn.SafeHTMLCollection = Pi.canUseDOM ? window.HTMLCollection : {};
sn.SafeNodeList = Pi.canUseDOM ? window.NodeList : {};
sn.canUseDOM = Pi.canUseDOM;
sn.default = Xl;
Object.defineProperty(fn, "__esModule", {
  value: !0
});
fn.resetState = nf;
fn.log = rf;
fn.assertNodeList = Qc;
fn.setElement = of;
fn.validateElement = Os;
fn.hide = sf;
fn.show = af;
fn.documentNotReadyOrSSRTesting = cf;
var Jl = Yl, $l = tf(Jl), ef = sn;
function tf(n) {
  return n && n.__esModule ? n : { default: n };
}
var jt = null;
function nf() {
  jt && (jt.removeAttribute ? jt.removeAttribute("aria-hidden") : jt.length != null ? jt.forEach(function(n) {
    return n.removeAttribute("aria-hidden");
  }) : document.querySelectorAll(jt).forEach(function(n) {
    return n.removeAttribute("aria-hidden");
  })), jt = null;
}
function rf() {
  if (process.env.NODE_ENV !== "production") {
    var n = jt || {};
    console.log("ariaAppHider ----------"), console.log(n.nodeName, n.className, n.id), console.log("end ariaAppHider ----------");
  }
}
function Qc(n, e) {
  if (!n || !n.length)
    throw new Error("react-modal: No elements were found for selector " + e + ".");
}
function of(n) {
  var e = n;
  if (typeof e == "string" && ef.canUseDOM) {
    var t = document.querySelectorAll(e);
    Qc(t, e), e = t;
  }
  return jt = e || jt, jt;
}
function Os(n) {
  var e = n || jt;
  return e ? Array.isArray(e) || e instanceof HTMLCollection || e instanceof NodeList ? e : [e] : ((0, $l.default)(!1, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" ")), []);
}
function sf(n) {
  var e = !0, t = !1, r = void 0;
  try {
    for (var o = Os(n)[Symbol.iterator](), i; !(e = (i = o.next()).done); e = !0) {
      var c = i.value;
      c.setAttribute("aria-hidden", "true");
    }
  } catch (u) {
    t = !0, r = u;
  } finally {
    try {
      !e && o.return && o.return();
    } finally {
      if (t)
        throw r;
    }
  }
}
function af(n) {
  var e = !0, t = !1, r = void 0;
  try {
    for (var o = Os(n)[Symbol.iterator](), i; !(e = (i = o.next()).done); e = !0) {
      var c = i.value;
      c.removeAttribute("aria-hidden");
    }
  } catch (u) {
    t = !0, r = u;
  } finally {
    try {
      !e && o.return && o.return();
    } finally {
      if (t)
        throw r;
    }
  }
}
function cf() {
  jt = null;
}
var Ar = {};
Object.defineProperty(Ar, "__esModule", {
  value: !0
});
Ar.resetState = uf;
Ar.log = lf;
var jn = {}, Qn = {};
function La(n, e) {
  n.classList.remove(e);
}
function uf() {
  var n = document.getElementsByTagName("html")[0];
  for (var e in jn)
    La(n, jn[e]);
  var t = document.body;
  for (var r in Qn)
    La(t, Qn[r]);
  jn = {}, Qn = {};
}
function lf() {
  if (process.env.NODE_ENV !== "production") {
    var n = document.getElementsByTagName("html")[0].className, e = `Show tracked classes:

`;
    e += "<html /> (" + n + `):
  `;
    for (var t in jn)
      e += "  " + t + " " + jn[t] + `
  `;
    n = document.body.className, e += `

doc.body (` + n + `):
  `;
    for (var r in Qn)
      e += "  " + r + " " + Qn[r] + `
  `;
    e += `
`, console.log(e);
  }
}
var ff = function(e, t) {
  return e[t] || (e[t] = 0), e[t] += 1, t;
}, hf = function(e, t) {
  return e[t] && (e[t] -= 1), t;
}, df = function(e, t, r) {
  r.forEach(function(o) {
    ff(t, o), e.add(o);
  });
}, pf = function(e, t, r) {
  r.forEach(function(o) {
    hf(t, o), t[o] === 0 && e.remove(o);
  });
};
Ar.add = function(e, t) {
  return df(e.classList, e.nodeName.toLowerCase() == "html" ? jn : Qn, t.split(" "));
};
Ar.remove = function(e, t) {
  return pf(e.classList, e.nodeName.toLowerCase() == "html" ? jn : Qn, t.split(" "));
};
var vr = {};
Object.defineProperty(vr, "__esModule", {
  value: !0
});
vr.log = yf;
vr.resetState = wf;
function gf(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
var qc = function n() {
  var e = this;
  gf(this, n), this.register = function(t) {
    if (e.openInstances.indexOf(t) !== -1) {
      process.env.NODE_ENV !== "production" && console.warn("React-Modal: Cannot register modal instance that's already open");
      return;
    }
    e.openInstances.push(t), e.emit("register");
  }, this.deregister = function(t) {
    var r = e.openInstances.indexOf(t);
    if (r === -1) {
      process.env.NODE_ENV !== "production" && console.warn("React-Modal: Unable to deregister " + t + " as it was never registered");
      return;
    }
    e.openInstances.splice(r, 1), e.emit("deregister");
  }, this.subscribe = function(t) {
    e.subscribers.push(t);
  }, this.emit = function(t) {
    e.subscribers.forEach(function(r) {
      return r(
        t,
        e.openInstances.slice()
      );
    });
  }, this.openInstances = [], this.subscribers = [];
}, Ai = new qc();
function yf() {
  console.log("portalOpenInstances ----------"), console.log(Ai.openInstances.length), Ai.openInstances.forEach(function(n) {
    return console.log(n);
  }), console.log("end portalOpenInstances ----------");
}
function wf() {
  Ai = new qc();
}
vr.default = Ai;
var Ls = {};
Object.defineProperty(Ls, "__esModule", {
  value: !0
});
Ls.resetState = vf;
Ls.log = Ef;
var mf = vr, bf = Af(mf);
function Af(n) {
  return n && n.__esModule ? n : { default: n };
}
var Ut = void 0, rn = void 0, qn = [];
function vf() {
  for (var n = [Ut, rn], e = 0; e < n.length; e++) {
    var t = n[e];
    !t || t.parentNode && t.parentNode.removeChild(t);
  }
  Ut = rn = null, qn = [];
}
function Ef() {
  console.log("bodyTrap ----------"), console.log(qn.length);
  for (var n = [Ut, rn], e = 0; e < n.length; e++) {
    var t = n[e], r = t || {};
    console.log(r.nodeName, r.className, r.id);
  }
  console.log("edn bodyTrap ----------");
}
function Ua() {
  if (qn.length === 0) {
    process.env.NODE_ENV !== "production" && console.warn("React-Modal: Open instances > 0 expected");
    return;
  }
  qn[qn.length - 1].focusContent();
}
function xf(n, e) {
  !Ut && !rn && (Ut = document.createElement("div"), Ut.setAttribute("data-react-modal-body-trap", ""), Ut.style.position = "absolute", Ut.style.opacity = "0", Ut.setAttribute("tabindex", "0"), Ut.addEventListener("focus", Ua), rn = Ut.cloneNode(), rn.addEventListener("focus", Ua)), qn = e, qn.length > 0 ? (document.body.firstChild !== Ut && document.body.insertBefore(Ut, document.body.firstChild), document.body.lastChild !== rn && document.body.appendChild(rn)) : (Ut.parentElement && Ut.parentElement.removeChild(Ut), rn.parentElement && rn.parentElement.removeChild(rn));
}
bf.default.subscribe(xf);
(function(n, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var t = Object.assign || function(l) {
    for (var g = 1; g < arguments.length; g++) {
      var m = arguments[g];
      for (var y in m)
        Object.prototype.hasOwnProperty.call(m, y) && (l[y] = m[y]);
    }
    return l;
  }, r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
    return typeof l;
  } : function(l) {
    return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
  }, o = function() {
    function l(g, m) {
      for (var y = 0; y < m.length; y++) {
        var x = m[y];
        x.enumerable = x.enumerable || !1, x.configurable = !0, "value" in x && (x.writable = !0), Object.defineProperty(g, x.key, x);
      }
    }
    return function(g, m, y) {
      return m && l(g.prototype, m), y && l(g, y), g;
    };
  }(), i = D, c = mi.exports, u = L(c), d = ln, w = z(d), v = gs.exports, I = L(v), _ = fn, E = z(_), N = Ar, T = z(N), U = sn, P = L(U), F = vr, O = L(F);
  function z(l) {
    if (l && l.__esModule)
      return l;
    var g = {};
    if (l != null)
      for (var m in l)
        Object.prototype.hasOwnProperty.call(l, m) && (g[m] = l[m]);
    return g.default = l, g;
  }
  function L(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function W(l, g) {
    if (!(l instanceof g))
      throw new TypeError("Cannot call a class as a function");
  }
  function j(l, g) {
    if (!l)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return g && (typeof g == "object" || typeof g == "function") ? g : l;
  }
  function Q(l, g) {
    if (typeof g != "function" && g !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof g);
    l.prototype = Object.create(g && g.prototype, { constructor: { value: l, enumerable: !1, writable: !0, configurable: !0 } }), g && (Object.setPrototypeOf ? Object.setPrototypeOf(l, g) : l.__proto__ = g);
  }
  var le = {
    overlay: "ReactModal__Overlay",
    content: "ReactModal__Content"
  }, Se = function(g) {
    return g.code === "Tab" || g.keyCode === 9;
  }, ge = function(g) {
    return g.code === "Escape" || g.keyCode === 27;
  }, Me = 0, M = function(l) {
    Q(g, l);
    function g(m) {
      W(this, g);
      var y = j(this, (g.__proto__ || Object.getPrototypeOf(g)).call(this, m));
      return y.setOverlayRef = function(x) {
        y.overlay = x, y.props.overlayRef && y.props.overlayRef(x);
      }, y.setContentRef = function(x) {
        y.content = x, y.props.contentRef && y.props.contentRef(x);
      }, y.afterClose = function() {
        var x = y.props, k = x.appElement, C = x.ariaHideApp, b = x.htmlOpenClassName, h = x.bodyOpenClassName, B = x.parentSelector, q = B && B().ownerDocument || document;
        h && T.remove(q.body, h), b && T.remove(q.getElementsByTagName("html")[0], b), C && Me > 0 && (Me -= 1, Me === 0 && E.show(k)), y.props.shouldFocusAfterRender && (y.props.shouldReturnFocusAfterClose ? (w.returnFocus(y.props.preventScroll), w.teardownScopedFocus()) : w.popWithoutFocus()), y.props.onAfterClose && y.props.onAfterClose(), O.default.deregister(y);
      }, y.open = function() {
        y.beforeOpen(), y.state.afterOpen && y.state.beforeClose ? (clearTimeout(y.closeTimer), y.setState({ beforeClose: !1 })) : (y.props.shouldFocusAfterRender && (w.setupScopedFocus(y.node), w.markForFocusLater()), y.setState({ isOpen: !0 }, function() {
          y.openAnimationFrame = requestAnimationFrame(function() {
            y.setState({ afterOpen: !0 }), y.props.isOpen && y.props.onAfterOpen && y.props.onAfterOpen({
              overlayEl: y.overlay,
              contentEl: y.content
            });
          });
        }));
      }, y.close = function() {
        y.props.closeTimeoutMS > 0 ? y.closeWithTimeout() : y.closeWithoutTimeout();
      }, y.focusContent = function() {
        return y.content && !y.contentHasFocus() && y.content.focus({ preventScroll: !0 });
      }, y.closeWithTimeout = function() {
        var x = Date.now() + y.props.closeTimeoutMS;
        y.setState({ beforeClose: !0, closesAt: x }, function() {
          y.closeTimer = setTimeout(y.closeWithoutTimeout, y.state.closesAt - Date.now());
        });
      }, y.closeWithoutTimeout = function() {
        y.setState({
          beforeClose: !1,
          isOpen: !1,
          afterOpen: !1,
          closesAt: null
        }, y.afterClose);
      }, y.handleKeyDown = function(x) {
        Se(x) && (0, I.default)(y.content, x), y.props.shouldCloseOnEsc && ge(x) && (x.stopPropagation(), y.requestClose(x));
      }, y.handleOverlayOnClick = function(x) {
        y.shouldClose === null && (y.shouldClose = !0), y.shouldClose && y.props.shouldCloseOnOverlayClick && (y.ownerHandlesClose() ? y.requestClose(x) : y.focusContent()), y.shouldClose = null;
      }, y.handleContentOnMouseUp = function() {
        y.shouldClose = !1;
      }, y.handleOverlayOnMouseDown = function(x) {
        !y.props.shouldCloseOnOverlayClick && x.target == y.overlay && x.preventDefault();
      }, y.handleContentOnClick = function() {
        y.shouldClose = !1;
      }, y.handleContentOnMouseDown = function() {
        y.shouldClose = !1;
      }, y.requestClose = function(x) {
        return y.ownerHandlesClose() && y.props.onRequestClose(x);
      }, y.ownerHandlesClose = function() {
        return y.props.onRequestClose;
      }, y.shouldBeClosed = function() {
        return !y.state.isOpen && !y.state.beforeClose;
      }, y.contentHasFocus = function() {
        return document.activeElement === y.content || y.content.contains(document.activeElement);
      }, y.buildClassName = function(x, k) {
        var C = (typeof k > "u" ? "undefined" : r(k)) === "object" ? k : {
          base: le[x],
          afterOpen: le[x] + "--after-open",
          beforeClose: le[x] + "--before-close"
        }, b = C.base;
        return y.state.afterOpen && (b = b + " " + C.afterOpen), y.state.beforeClose && (b = b + " " + C.beforeClose), typeof k == "string" && k ? b + " " + k : b;
      }, y.attributesFromObject = function(x, k) {
        return Object.keys(k).reduce(function(C, b) {
          return C[x + "-" + b] = k[b], C;
        }, {});
      }, y.state = {
        afterOpen: !1,
        beforeClose: !1
      }, y.shouldClose = null, y.moveFromContentToOverlay = null, y;
    }
    return o(g, [{
      key: "componentDidMount",
      value: function() {
        this.props.isOpen && this.open();
      }
    }, {
      key: "componentDidUpdate",
      value: function(y, x) {
        process.env.NODE_ENV !== "production" && (y.bodyOpenClassName !== this.props.bodyOpenClassName && console.warn('React-Modal: "bodyOpenClassName" prop has been modified. This may cause unexpected behavior when multiple modals are open.'), y.htmlOpenClassName !== this.props.htmlOpenClassName && console.warn('React-Modal: "htmlOpenClassName" prop has been modified. This may cause unexpected behavior when multiple modals are open.')), this.props.isOpen && !y.isOpen ? this.open() : !this.props.isOpen && y.isOpen && this.close(), this.props.shouldFocusAfterRender && this.state.isOpen && !x.isOpen && this.focusContent();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.state.isOpen && this.afterClose(), clearTimeout(this.closeTimer), cancelAnimationFrame(this.openAnimationFrame);
      }
    }, {
      key: "beforeOpen",
      value: function() {
        var y = this.props, x = y.appElement, k = y.ariaHideApp, C = y.htmlOpenClassName, b = y.bodyOpenClassName, h = y.parentSelector, B = h && h().ownerDocument || document;
        b && T.add(B.body, b), C && T.add(B.getElementsByTagName("html")[0], C), k && (Me += 1, E.hide(x)), O.default.register(this);
      }
    }, {
      key: "render",
      value: function() {
        var y = this.props, x = y.id, k = y.className, C = y.overlayClassName, b = y.defaultStyles, h = y.children, B = k ? {} : b.content, q = C ? {} : b.overlay;
        if (this.shouldBeClosed())
          return null;
        var Z = {
          ref: this.setOverlayRef,
          className: this.buildClassName("overlay", C),
          style: t({}, q, this.props.style.overlay),
          onClick: this.handleOverlayOnClick,
          onMouseDown: this.handleOverlayOnMouseDown
        }, V = t({
          id: x,
          ref: this.setContentRef,
          style: t({}, B, this.props.style.content),
          className: this.buildClassName("content", k),
          tabIndex: "-1",
          onKeyDown: this.handleKeyDown,
          onMouseDown: this.handleContentOnMouseDown,
          onMouseUp: this.handleContentOnMouseUp,
          onClick: this.handleContentOnClick,
          role: this.props.role,
          "aria-label": this.props.contentLabel
        }, this.attributesFromObject("aria", t({ modal: !0 }, this.props.aria)), this.attributesFromObject("data", this.props.data || {}), {
          "data-testid": this.props.testId
        }), oe = this.props.contentElement(V, h);
        return this.props.overlayElement(Z, oe);
      }
    }]), g;
  }(i.Component);
  M.defaultProps = {
    style: {
      overlay: {},
      content: {}
    },
    defaultStyles: {}
  }, M.propTypes = {
    isOpen: u.default.bool.isRequired,
    defaultStyles: u.default.shape({
      content: u.default.object,
      overlay: u.default.object
    }),
    style: u.default.shape({
      content: u.default.object,
      overlay: u.default.object
    }),
    className: u.default.oneOfType([u.default.string, u.default.object]),
    overlayClassName: u.default.oneOfType([u.default.string, u.default.object]),
    parentSelector: u.default.func,
    bodyOpenClassName: u.default.string,
    htmlOpenClassName: u.default.string,
    ariaHideApp: u.default.bool,
    appElement: u.default.oneOfType([u.default.instanceOf(P.default), u.default.instanceOf(U.SafeHTMLCollection), u.default.instanceOf(U.SafeNodeList), u.default.arrayOf(u.default.instanceOf(P.default))]),
    onAfterOpen: u.default.func,
    onAfterClose: u.default.func,
    onRequestClose: u.default.func,
    closeTimeoutMS: u.default.number,
    shouldFocusAfterRender: u.default.bool,
    shouldCloseOnOverlayClick: u.default.bool,
    shouldReturnFocusAfterClose: u.default.bool,
    preventScroll: u.default.bool,
    role: u.default.string,
    contentLabel: u.default.string,
    aria: u.default.object,
    data: u.default.object,
    children: u.default.node,
    shouldCloseOnEsc: u.default.bool,
    overlayRef: u.default.func,
    contentRef: u.default.func,
    id: u.default.string,
    overlayElement: u.default.func,
    contentElement: u.default.func,
    testId: u.default.string
  }, e.default = M, n.exports = e.default;
})(ds, ds.exports);
function Yc() {
  var n = this.constructor.getDerivedStateFromProps(this.props, this.state);
  n != null && this.setState(n);
}
function Kc(n) {
  function e(t) {
    var r = this.constructor.getDerivedStateFromProps(n, t);
    return r != null ? r : null;
  }
  this.setState(e.bind(this));
}
function Vc(n, e) {
  try {
    var t = this.props, r = this.state;
    this.props = n, this.state = e, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      t,
      r
    );
  } finally {
    this.props = t, this.state = r;
  }
}
Yc.__suppressDeprecationWarning = !0;
Kc.__suppressDeprecationWarning = !0;
Vc.__suppressDeprecationWarning = !0;
function If(n) {
  var e = n.prototype;
  if (!e || !e.isReactComponent)
    throw new Error("Can only polyfill class components");
  if (typeof n.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function")
    return n;
  var t = null, r = null, o = null;
  if (typeof e.componentWillMount == "function" ? t = "componentWillMount" : typeof e.UNSAFE_componentWillMount == "function" && (t = "UNSAFE_componentWillMount"), typeof e.componentWillReceiveProps == "function" ? r = "componentWillReceiveProps" : typeof e.UNSAFE_componentWillReceiveProps == "function" && (r = "UNSAFE_componentWillReceiveProps"), typeof e.componentWillUpdate == "function" ? o = "componentWillUpdate" : typeof e.UNSAFE_componentWillUpdate == "function" && (o = "UNSAFE_componentWillUpdate"), t !== null || r !== null || o !== null) {
    var i = n.displayName || n.name, c = typeof n.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
    throw Error(
      `Unsafe legacy lifecycles will not be called for components using new component APIs.

` + i + " uses " + c + " but also contains the following legacy lifecycles:" + (t !== null ? `
  ` + t : "") + (r !== null ? `
  ` + r : "") + (o !== null ? `
  ` + o : "") + `

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`
    );
  }
  if (typeof n.getDerivedStateFromProps == "function" && (e.componentWillMount = Yc, e.componentWillReceiveProps = Kc), typeof e.getSnapshotBeforeUpdate == "function") {
    if (typeof e.componentDidUpdate != "function")
      throw new Error(
        "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
      );
    e.componentWillUpdate = Vc;
    var u = e.componentDidUpdate;
    e.componentDidUpdate = function(w, v, I) {
      var _ = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : I;
      u.call(this, w, v, _);
    };
  }
  return n;
}
const Sf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  polyfill: If
}, Symbol.toStringTag, { value: "Module" })), Bf = /* @__PURE__ */ Di(Sf);
Object.defineProperty(Jn, "__esModule", {
  value: !0
});
Jn.bodyOpenClassName = Jn.portalClassName = void 0;
var Da = Object.assign || function(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e];
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
  }
  return n;
}, Mf = function() {
  function n(e, t) {
    for (var r = 0; r < t.length; r++) {
      var o = t[r];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
    }
  }
  return function(e, t, r) {
    return t && n(e.prototype, t), r && n(e, r), e;
  };
}(), Zc = D, vi = Qr(Zc), _f = hl, Ei = Qr(_f), Cf = mi.exports, me = Qr(Cf), Tf = ds.exports, Pa = Qr(Tf), Nf = fn, Rf = Of(Nf), Rn = sn, Fa = Qr(Rn), kf = Bf;
function Of(n) {
  if (n && n.__esModule)
    return n;
  var e = {};
  if (n != null)
    for (var t in n)
      Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
  return e.default = n, e;
}
function Qr(n) {
  return n && n.__esModule ? n : { default: n };
}
function Lf(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function za(n, e) {
  if (!n)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : n;
}
function Uf(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  n.prototype = Object.create(e && e.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(n, e) : n.__proto__ = e);
}
var Df = Jn.portalClassName = "ReactModalPortal", Pf = Jn.bodyOpenClassName = "ReactModal__Body--open", zn = Rn.canUseDOM && Ei.default.createPortal !== void 0, ys = function(e) {
  return document.createElement(e);
}, Ha = function() {
  return zn ? Ei.default.createPortal : Ei.default.unstable_renderSubtreeIntoContainer;
};
function ri(n) {
  return n();
}
var Er = function(n) {
  Uf(e, n);
  function e() {
    var t, r, o, i;
    Lf(this, e);
    for (var c = arguments.length, u = Array(c), d = 0; d < c; d++)
      u[d] = arguments[d];
    return i = (r = (o = za(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(u))), o), o.removePortal = function() {
      !zn && Ei.default.unmountComponentAtNode(o.node);
      var w = ri(o.props.parentSelector);
      w && w.contains(o.node) ? w.removeChild(o.node) : console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.');
    }, o.portalRef = function(w) {
      o.portal = w;
    }, o.renderPortal = function(w) {
      var v = Ha(), I = v(o, vi.default.createElement(Pa.default, Da({ defaultStyles: e.defaultStyles }, w)), o.node);
      o.portalRef(I);
    }, r), za(o, i);
  }
  return Mf(e, [{
    key: "componentDidMount",
    value: function() {
      if (!!Rn.canUseDOM) {
        zn || (this.node = ys("div")), this.node.className = this.props.portalClassName;
        var r = ri(this.props.parentSelector);
        r.appendChild(this.node), !zn && this.renderPortal(this.props);
      }
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function(r) {
      var o = ri(r.parentSelector), i = ri(this.props.parentSelector);
      return { prevParent: o, nextParent: i };
    }
  }, {
    key: "componentDidUpdate",
    value: function(r, o, i) {
      if (!!Rn.canUseDOM) {
        var c = this.props, u = c.isOpen, d = c.portalClassName;
        r.portalClassName !== d && (this.node.className = d);
        var w = i.prevParent, v = i.nextParent;
        v !== w && (w.removeChild(this.node), v.appendChild(this.node)), !(!r.isOpen && !u) && !zn && this.renderPortal(this.props);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      if (!(!Rn.canUseDOM || !this.node || !this.portal)) {
        var r = this.portal.state, o = Date.now(), i = r.isOpen && this.props.closeTimeoutMS && (r.closesAt || o + this.props.closeTimeoutMS);
        i ? (r.beforeClose || this.portal.closeWithTimeout(), setTimeout(this.removePortal, i - o)) : this.removePortal();
      }
    }
  }, {
    key: "render",
    value: function() {
      if (!Rn.canUseDOM || !zn)
        return null;
      !this.node && zn && (this.node = ys("div"));
      var r = Ha();
      return r(vi.default.createElement(Pa.default, Da({
        ref: this.portalRef,
        defaultStyles: e.defaultStyles
      }, this.props)), this.node);
    }
  }], [{
    key: "setAppElement",
    value: function(r) {
      Rf.setElement(r);
    }
  }]), e;
}(Zc.Component);
Er.propTypes = {
  isOpen: me.default.bool.isRequired,
  style: me.default.shape({
    content: me.default.object,
    overlay: me.default.object
  }),
  portalClassName: me.default.string,
  bodyOpenClassName: me.default.string,
  htmlOpenClassName: me.default.string,
  className: me.default.oneOfType([me.default.string, me.default.shape({
    base: me.default.string.isRequired,
    afterOpen: me.default.string.isRequired,
    beforeClose: me.default.string.isRequired
  })]),
  overlayClassName: me.default.oneOfType([me.default.string, me.default.shape({
    base: me.default.string.isRequired,
    afterOpen: me.default.string.isRequired,
    beforeClose: me.default.string.isRequired
  })]),
  appElement: me.default.oneOfType([me.default.instanceOf(Fa.default), me.default.instanceOf(Rn.SafeHTMLCollection), me.default.instanceOf(Rn.SafeNodeList), me.default.arrayOf(me.default.instanceOf(Fa.default))]),
  onAfterOpen: me.default.func,
  onRequestClose: me.default.func,
  closeTimeoutMS: me.default.number,
  ariaHideApp: me.default.bool,
  shouldFocusAfterRender: me.default.bool,
  shouldCloseOnOverlayClick: me.default.bool,
  shouldReturnFocusAfterClose: me.default.bool,
  preventScroll: me.default.bool,
  parentSelector: me.default.func,
  aria: me.default.object,
  data: me.default.object,
  role: me.default.string,
  contentLabel: me.default.string,
  shouldCloseOnEsc: me.default.bool,
  overlayRef: me.default.func,
  contentRef: me.default.func,
  id: me.default.string,
  overlayElement: me.default.func,
  contentElement: me.default.func
};
Er.defaultProps = {
  isOpen: !1,
  portalClassName: Df,
  bodyOpenClassName: Pf,
  role: "dialog",
  ariaHideApp: !0,
  closeTimeoutMS: 0,
  shouldFocusAfterRender: !0,
  shouldCloseOnEsc: !0,
  shouldCloseOnOverlayClick: !0,
  shouldReturnFocusAfterClose: !0,
  preventScroll: !1,
  parentSelector: function() {
    return document.body;
  },
  overlayElement: function(e, t) {
    return vi.default.createElement(
      "div",
      e,
      t
    );
  },
  contentElement: function(e, t) {
    return vi.default.createElement(
      "div",
      e,
      t
    );
  }
};
Er.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px"
  }
};
(0, kf.polyfill)(Er);
process.env.NODE_ENV !== "production" && (Er.setCreateHTMLElement = function(n) {
  return ys = n;
});
Jn.default = Er;
(function(n, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var t = Jn, r = o(t);
  function o(i) {
    return i && i.__esModule ? i : { default: i };
  }
  e.default = r.default, n.exports = e.default;
})(hs, hs.exports);
const Ff = /* @__PURE__ */ Bl(hs.exports);
function Xc({
  isOpen: n,
  onRequestClose: e,
  title: t,
  children: r
}) {
  return /* @__PURE__ */ D.createElement(Ff, {
    appElement: document.body,
    isOpen: n,
    onRequestClose: e,
    contentLabel: "Open in Phantom Mobile App Modal",
    overlayClassName: "hypeday-modal-overlay",
    className: "hypeday-modal-content"
  }, t && /* @__PURE__ */ D.createElement("h3", {
    className: "hypeday-h3"
  }, t), /* @__PURE__ */ D.createElement("div", {
    className: "hypeday-modal-close",
    onClick: e
  }, "\xD7"), r);
}
function zf({
  projectData: n,
  appId: e,
  hasUser: t,
  logger: r
}) {
  var v, I, _;
  const [o, i] = Pe(!1), [c, u] = Pe(!1), d = tn(() => {
    var T, U;
    if (!((T = n == null ? void 0 : n.twitter) != null && T.enabled))
      return [];
    const { twitter: E } = n, N = [];
    if (E != null && E.isFollowRequired) {
      const P = (U = E == null ? void 0 : E.follow) == null ? void 0 : U.split(","), F = /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("ul", {
        className: "hypeday-req-list"
      }, P == null ? void 0 : P.map((O) => /* @__PURE__ */ D.createElement("li", {
        key: O,
        className: "hypeday-req-list-item"
      }, /* @__PURE__ */ D.createElement("span", null, "Follow ", /* @__PURE__ */ D.createElement("strong", null, "@", O), " on Twitter"), /* @__PURE__ */ D.createElement("a", {
        href: `https://twitter.com/${O.trim()}`,
        target: "_blank",
        rel: "noreferrer",
        className: "hypeday-button hypeday-button-gray"
      }, "Follow")))));
      N.push(F);
    }
    if (E != null && E.isRetweetRequired) {
      const P = /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("div", {
        className: "hypeday-req-list-item"
      }, /* @__PURE__ */ D.createElement("div", null, "Retweet", " ", /* @__PURE__ */ D.createElement("a", {
        href: E.retweetUrl,
        className: "hypeday-a-text-decoration-none",
        target: "_blank",
        rel: "noreferrer"
      }, /* @__PURE__ */ D.createElement("strong", null, "this")), " ", "on Twitter"), /* @__PURE__ */ D.createElement("a", {
        href: E.retweetUrl,
        target: "_blank",
        rel: "noreferrer",
        className: "hypeday-button hypeday-button-gray"
      }, "Retweet")));
      N.push(P);
    }
    if (E != null && E.isAccountCreatedRequired) {
      const P = /* @__PURE__ */ D.createElement(D.Fragment, null, "Have an account created before", " ", /* @__PURE__ */ D.createElement("strong", null, new Date((E == null ? void 0 : E.accountCreated) || "").toLocaleDateString()));
      N.push(P);
    }
    if (E != null && E.isMinFollowersRequired) {
      const P = /* @__PURE__ */ D.createElement(D.Fragment, null, "Have at least ", /* @__PURE__ */ D.createElement("b", null, E.minFollowers, " follower(s)"));
      N.push(P);
    }
    return N;
  }, [n]), w = async () => {
    if (!(!e || !t || !(n != null && n.id)))
      try {
        i(!0);
        const { url: E } = await Fc({
          provider: "twitter",
          appId: e,
          projectId: n.id,
          returnUrl: window.location.href
        });
        fs() && (window.open(E, "_blank"), window.open(E, "_blank")), window.location.assign(E);
      } catch (E) {
        console.error(E), r == null || r.error(
          "HypeDayReact: Error getting Twitter oauth url",
          "hype04",
          E
        );
      } finally {
        i(!1);
      }
  };
  return (v = n == null ? void 0 : n.twitter) != null && v.enabled ? /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement(Xc, {
    isOpen: c,
    onRequestClose: () => u(!1)
  }, /* @__PURE__ */ D.createElement("p", {
    className: "hypeday-modal-p"
  }, "Next, you will be redirected to Twitter to complete the connection request. Please ignore the 'Open in the app' prompts and stay in the browser. Twitter app does not support establishing/authorizing connections in the app."), /* @__PURE__ */ D.createElement("button", {
    className: "hypeday-button hypeday-modal-button",
    onClick: () => {
      u(!1), w();
    }
  }, "Ok")), /* @__PURE__ */ D.createElement(Ns, {
    title: "Twitter",
    onClick: () => {
      if (fs())
        return u(!0);
      w();
    },
    info: d,
    rightText: (_ = (I = n == null ? void 0 : n.userInfo) == null ? void 0 : I.twitter) == null ? void 0 : _.username,
    buttonDisabled: !t,
    isLoading: o
  })) : null;
}
var Ae = {}, qr = {};
qr.byteLength = Gf;
qr.toByteArray = Qf;
qr.fromByteArray = Kf;
var gn = [], Vt = [], Hf = typeof Uint8Array < "u" ? Uint8Array : Array, No = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var sr = 0, Wf = No.length; sr < Wf; ++sr)
  gn[sr] = No[sr], Vt[No.charCodeAt(sr)] = sr;
Vt["-".charCodeAt(0)] = 62;
Vt["_".charCodeAt(0)] = 63;
function Jc(n) {
  var e = n.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var t = n.indexOf("=");
  t === -1 && (t = e);
  var r = t === e ? 0 : 4 - t % 4;
  return [t, r];
}
function Gf(n) {
  var e = Jc(n), t = e[0], r = e[1];
  return (t + r) * 3 / 4 - r;
}
function jf(n, e, t) {
  return (e + t) * 3 / 4 - t;
}
function Qf(n) {
  var e, t = Jc(n), r = t[0], o = t[1], i = new Hf(jf(n, r, o)), c = 0, u = o > 0 ? r - 4 : r, d;
  for (d = 0; d < u; d += 4)
    e = Vt[n.charCodeAt(d)] << 18 | Vt[n.charCodeAt(d + 1)] << 12 | Vt[n.charCodeAt(d + 2)] << 6 | Vt[n.charCodeAt(d + 3)], i[c++] = e >> 16 & 255, i[c++] = e >> 8 & 255, i[c++] = e & 255;
  return o === 2 && (e = Vt[n.charCodeAt(d)] << 2 | Vt[n.charCodeAt(d + 1)] >> 4, i[c++] = e & 255), o === 1 && (e = Vt[n.charCodeAt(d)] << 10 | Vt[n.charCodeAt(d + 1)] << 4 | Vt[n.charCodeAt(d + 2)] >> 2, i[c++] = e >> 8 & 255, i[c++] = e & 255), i;
}
function qf(n) {
  return gn[n >> 18 & 63] + gn[n >> 12 & 63] + gn[n >> 6 & 63] + gn[n & 63];
}
function Yf(n, e, t) {
  for (var r, o = [], i = e; i < t; i += 3)
    r = (n[i] << 16 & 16711680) + (n[i + 1] << 8 & 65280) + (n[i + 2] & 255), o.push(qf(r));
  return o.join("");
}
function Kf(n) {
  for (var e, t = n.length, r = t % 3, o = [], i = 16383, c = 0, u = t - r; c < u; c += i)
    o.push(Yf(n, c, c + i > u ? u : c + i));
  return r === 1 ? (e = n[t - 1], o.push(
    gn[e >> 2] + gn[e << 4 & 63] + "=="
  )) : r === 2 && (e = (n[t - 2] << 8) + n[t - 1], o.push(
    gn[e >> 10] + gn[e >> 4 & 63] + gn[e << 2 & 63] + "="
  )), o.join("");
}
var Fi = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Fi.read = function(n, e, t, r, o) {
  var i, c, u = o * 8 - r - 1, d = (1 << u) - 1, w = d >> 1, v = -7, I = t ? o - 1 : 0, _ = t ? -1 : 1, E = n[e + I];
  for (I += _, i = E & (1 << -v) - 1, E >>= -v, v += u; v > 0; i = i * 256 + n[e + I], I += _, v -= 8)
    ;
  for (c = i & (1 << -v) - 1, i >>= -v, v += r; v > 0; c = c * 256 + n[e + I], I += _, v -= 8)
    ;
  if (i === 0)
    i = 1 - w;
  else {
    if (i === d)
      return c ? NaN : (E ? -1 : 1) * (1 / 0);
    c = c + Math.pow(2, r), i = i - w;
  }
  return (E ? -1 : 1) * c * Math.pow(2, i - r);
};
Fi.write = function(n, e, t, r, o, i) {
  var c, u, d, w = i * 8 - o - 1, v = (1 << w) - 1, I = v >> 1, _ = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, E = r ? 0 : i - 1, N = r ? 1 : -1, T = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (u = isNaN(e) ? 1 : 0, c = v) : (c = Math.floor(Math.log(e) / Math.LN2), e * (d = Math.pow(2, -c)) < 1 && (c--, d *= 2), c + I >= 1 ? e += _ / d : e += _ * Math.pow(2, 1 - I), e * d >= 2 && (c++, d /= 2), c + I >= v ? (u = 0, c = v) : c + I >= 1 ? (u = (e * d - 1) * Math.pow(2, o), c = c + I) : (u = e * Math.pow(2, I - 1) * Math.pow(2, o), c = 0)); o >= 8; n[t + E] = u & 255, E += N, u /= 256, o -= 8)
    ;
  for (c = c << o | u, w += o; w > 0; n[t + E] = c & 255, E += N, c /= 256, w -= 8)
    ;
  n[t + E - N] |= T * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(n) {
  const e = qr, t = Fi, r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  n.Buffer = u, n.SlowBuffer = F, n.INSPECT_MAX_BYTES = 50;
  const o = 2147483647;
  n.kMaxLength = o, u.TYPED_ARRAY_SUPPORT = i(), !u.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function i() {
    try {
      const f = new Uint8Array(1), s = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(s, Uint8Array.prototype), Object.setPrototypeOf(f, s), f.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(u.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (!!u.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(u.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (!!u.isBuffer(this))
        return this.byteOffset;
    }
  });
  function c(f) {
    if (f > o)
      throw new RangeError('The value "' + f + '" is invalid for option "size"');
    const s = new Uint8Array(f);
    return Object.setPrototypeOf(s, u.prototype), s;
  }
  function u(f, s, a) {
    if (typeof f == "number") {
      if (typeof s == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return I(f);
    }
    return d(f, s, a);
  }
  u.poolSize = 8192;
  function d(f, s, a) {
    if (typeof f == "string")
      return _(f, s);
    if (ArrayBuffer.isView(f))
      return N(f);
    if (f == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof f
      );
    if (qe(f, ArrayBuffer) || f && qe(f.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (qe(f, SharedArrayBuffer) || f && qe(f.buffer, SharedArrayBuffer)))
      return T(f, s, a);
    if (typeof f == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const p = f.valueOf && f.valueOf();
    if (p != null && p !== f)
      return u.from(p, s, a);
    const A = U(f);
    if (A)
      return A;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof f[Symbol.toPrimitive] == "function")
      return u.from(f[Symbol.toPrimitive]("string"), s, a);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof f
    );
  }
  u.from = function(f, s, a) {
    return d(f, s, a);
  }, Object.setPrototypeOf(u.prototype, Uint8Array.prototype), Object.setPrototypeOf(u, Uint8Array);
  function w(f) {
    if (typeof f != "number")
      throw new TypeError('"size" argument must be of type number');
    if (f < 0)
      throw new RangeError('The value "' + f + '" is invalid for option "size"');
  }
  function v(f, s, a) {
    return w(f), f <= 0 ? c(f) : s !== void 0 ? typeof a == "string" ? c(f).fill(s, a) : c(f).fill(s) : c(f);
  }
  u.alloc = function(f, s, a) {
    return v(f, s, a);
  };
  function I(f) {
    return w(f), c(f < 0 ? 0 : P(f) | 0);
  }
  u.allocUnsafe = function(f) {
    return I(f);
  }, u.allocUnsafeSlow = function(f) {
    return I(f);
  };
  function _(f, s) {
    if ((typeof s != "string" || s === "") && (s = "utf8"), !u.isEncoding(s))
      throw new TypeError("Unknown encoding: " + s);
    const a = O(f, s) | 0;
    let p = c(a);
    const A = p.write(f, s);
    return A !== a && (p = p.slice(0, A)), p;
  }
  function E(f) {
    const s = f.length < 0 ? 0 : P(f.length) | 0, a = c(s);
    for (let p = 0; p < s; p += 1)
      a[p] = f[p] & 255;
    return a;
  }
  function N(f) {
    if (qe(f, Uint8Array)) {
      const s = new Uint8Array(f);
      return T(s.buffer, s.byteOffset, s.byteLength);
    }
    return E(f);
  }
  function T(f, s, a) {
    if (s < 0 || f.byteLength < s)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (f.byteLength < s + (a || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let p;
    return s === void 0 && a === void 0 ? p = new Uint8Array(f) : a === void 0 ? p = new Uint8Array(f, s) : p = new Uint8Array(f, s, a), Object.setPrototypeOf(p, u.prototype), p;
  }
  function U(f) {
    if (u.isBuffer(f)) {
      const s = P(f.length) | 0, a = c(s);
      return a.length === 0 || f.copy(a, 0, 0, s), a;
    }
    if (f.length !== void 0)
      return typeof f.length != "number" || He(f.length) ? c(0) : E(f);
    if (f.type === "Buffer" && Array.isArray(f.data))
      return E(f.data);
  }
  function P(f) {
    if (f >= o)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
    return f | 0;
  }
  function F(f) {
    return +f != f && (f = 0), u.alloc(+f);
  }
  u.isBuffer = function(s) {
    return s != null && s._isBuffer === !0 && s !== u.prototype;
  }, u.compare = function(s, a) {
    if (qe(s, Uint8Array) && (s = u.from(s, s.offset, s.byteLength)), qe(a, Uint8Array) && (a = u.from(a, a.offset, a.byteLength)), !u.isBuffer(s) || !u.isBuffer(a))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (s === a)
      return 0;
    let p = s.length, A = a.length;
    for (let S = 0, R = Math.min(p, A); S < R; ++S)
      if (s[S] !== a[S]) {
        p = s[S], A = a[S];
        break;
      }
    return p < A ? -1 : A < p ? 1 : 0;
  }, u.isEncoding = function(s) {
    switch (String(s).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, u.concat = function(s, a) {
    if (!Array.isArray(s))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (s.length === 0)
      return u.alloc(0);
    let p;
    if (a === void 0)
      for (a = 0, p = 0; p < s.length; ++p)
        a += s[p].length;
    const A = u.allocUnsafe(a);
    let S = 0;
    for (p = 0; p < s.length; ++p) {
      let R = s[p];
      if (qe(R, Uint8Array))
        S + R.length > A.length ? (u.isBuffer(R) || (R = u.from(R)), R.copy(A, S)) : Uint8Array.prototype.set.call(
          A,
          R,
          S
        );
      else if (u.isBuffer(R))
        R.copy(A, S);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      S += R.length;
    }
    return A;
  };
  function O(f, s) {
    if (u.isBuffer(f))
      return f.length;
    if (ArrayBuffer.isView(f) || qe(f, ArrayBuffer))
      return f.byteLength;
    if (typeof f != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof f
      );
    const a = f.length, p = arguments.length > 2 && arguments[2] === !0;
    if (!p && a === 0)
      return 0;
    let A = !1;
    for (; ; )
      switch (s) {
        case "ascii":
        case "latin1":
        case "binary":
          return a;
        case "utf8":
        case "utf-8":
          return ze(f).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return a * 2;
        case "hex":
          return a >>> 1;
        case "base64":
          return je(f).length;
        default:
          if (A)
            return p ? -1 : ze(f).length;
          s = ("" + s).toLowerCase(), A = !0;
      }
  }
  u.byteLength = O;
  function z(f, s, a) {
    let p = !1;
    if ((s === void 0 || s < 0) && (s = 0), s > this.length || ((a === void 0 || a > this.length) && (a = this.length), a <= 0) || (a >>>= 0, s >>>= 0, a <= s))
      return "";
    for (f || (f = "utf8"); ; )
      switch (f) {
        case "hex":
          return k(this, s, a);
        case "utf8":
        case "utf-8":
          return l(this, s, a);
        case "ascii":
          return y(this, s, a);
        case "latin1":
        case "binary":
          return x(this, s, a);
        case "base64":
          return M(this, s, a);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return C(this, s, a);
        default:
          if (p)
            throw new TypeError("Unknown encoding: " + f);
          f = (f + "").toLowerCase(), p = !0;
      }
  }
  u.prototype._isBuffer = !0;
  function L(f, s, a) {
    const p = f[s];
    f[s] = f[a], f[a] = p;
  }
  u.prototype.swap16 = function() {
    const s = this.length;
    if (s % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let a = 0; a < s; a += 2)
      L(this, a, a + 1);
    return this;
  }, u.prototype.swap32 = function() {
    const s = this.length;
    if (s % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let a = 0; a < s; a += 4)
      L(this, a, a + 3), L(this, a + 1, a + 2);
    return this;
  }, u.prototype.swap64 = function() {
    const s = this.length;
    if (s % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let a = 0; a < s; a += 8)
      L(this, a, a + 7), L(this, a + 1, a + 6), L(this, a + 2, a + 5), L(this, a + 3, a + 4);
    return this;
  }, u.prototype.toString = function() {
    const s = this.length;
    return s === 0 ? "" : arguments.length === 0 ? l(this, 0, s) : z.apply(this, arguments);
  }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(s) {
    if (!u.isBuffer(s))
      throw new TypeError("Argument must be a Buffer");
    return this === s ? !0 : u.compare(this, s) === 0;
  }, u.prototype.inspect = function() {
    let s = "";
    const a = n.INSPECT_MAX_BYTES;
    return s = this.toString("hex", 0, a).replace(/(.{2})/g, "$1 ").trim(), this.length > a && (s += " ... "), "<Buffer " + s + ">";
  }, r && (u.prototype[r] = u.prototype.inspect), u.prototype.compare = function(s, a, p, A, S) {
    if (qe(s, Uint8Array) && (s = u.from(s, s.offset, s.byteLength)), !u.isBuffer(s))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof s
      );
    if (a === void 0 && (a = 0), p === void 0 && (p = s ? s.length : 0), A === void 0 && (A = 0), S === void 0 && (S = this.length), a < 0 || p > s.length || A < 0 || S > this.length)
      throw new RangeError("out of range index");
    if (A >= S && a >= p)
      return 0;
    if (A >= S)
      return -1;
    if (a >= p)
      return 1;
    if (a >>>= 0, p >>>= 0, A >>>= 0, S >>>= 0, this === s)
      return 0;
    let R = S - A, J = p - a;
    const ie = Math.min(R, J), ne = this.slice(A, S), ye = s.slice(a, p);
    for (let ee = 0; ee < ie; ++ee)
      if (ne[ee] !== ye[ee]) {
        R = ne[ee], J = ye[ee];
        break;
      }
    return R < J ? -1 : J < R ? 1 : 0;
  };
  function W(f, s, a, p, A) {
    if (f.length === 0)
      return -1;
    if (typeof a == "string" ? (p = a, a = 0) : a > 2147483647 ? a = 2147483647 : a < -2147483648 && (a = -2147483648), a = +a, He(a) && (a = A ? 0 : f.length - 1), a < 0 && (a = f.length + a), a >= f.length) {
      if (A)
        return -1;
      a = f.length - 1;
    } else if (a < 0)
      if (A)
        a = 0;
      else
        return -1;
    if (typeof s == "string" && (s = u.from(s, p)), u.isBuffer(s))
      return s.length === 0 ? -1 : j(f, s, a, p, A);
    if (typeof s == "number")
      return s = s & 255, typeof Uint8Array.prototype.indexOf == "function" ? A ? Uint8Array.prototype.indexOf.call(f, s, a) : Uint8Array.prototype.lastIndexOf.call(f, s, a) : j(f, [s], a, p, A);
    throw new TypeError("val must be string, number or Buffer");
  }
  function j(f, s, a, p, A) {
    let S = 1, R = f.length, J = s.length;
    if (p !== void 0 && (p = String(p).toLowerCase(), p === "ucs2" || p === "ucs-2" || p === "utf16le" || p === "utf-16le")) {
      if (f.length < 2 || s.length < 2)
        return -1;
      S = 2, R /= 2, J /= 2, a /= 2;
    }
    function ie(ye, ee) {
      return S === 1 ? ye[ee] : ye.readUInt16BE(ee * S);
    }
    let ne;
    if (A) {
      let ye = -1;
      for (ne = a; ne < R; ne++)
        if (ie(f, ne) === ie(s, ye === -1 ? 0 : ne - ye)) {
          if (ye === -1 && (ye = ne), ne - ye + 1 === J)
            return ye * S;
        } else
          ye !== -1 && (ne -= ne - ye), ye = -1;
    } else
      for (a + J > R && (a = R - J), ne = a; ne >= 0; ne--) {
        let ye = !0;
        for (let ee = 0; ee < J; ee++)
          if (ie(f, ne + ee) !== ie(s, ee)) {
            ye = !1;
            break;
          }
        if (ye)
          return ne;
      }
    return -1;
  }
  u.prototype.includes = function(s, a, p) {
    return this.indexOf(s, a, p) !== -1;
  }, u.prototype.indexOf = function(s, a, p) {
    return W(this, s, a, p, !0);
  }, u.prototype.lastIndexOf = function(s, a, p) {
    return W(this, s, a, p, !1);
  };
  function Q(f, s, a, p) {
    a = Number(a) || 0;
    const A = f.length - a;
    p ? (p = Number(p), p > A && (p = A)) : p = A;
    const S = s.length;
    p > S / 2 && (p = S / 2);
    let R;
    for (R = 0; R < p; ++R) {
      const J = parseInt(s.substr(R * 2, 2), 16);
      if (He(J))
        return R;
      f[a + R] = J;
    }
    return R;
  }
  function le(f, s, a, p) {
    return ke(ze(s, f.length - a), f, a, p);
  }
  function Se(f, s, a, p) {
    return ke(Qe(s), f, a, p);
  }
  function ge(f, s, a, p) {
    return ke(je(s), f, a, p);
  }
  function Me(f, s, a, p) {
    return ke(or(s, f.length - a), f, a, p);
  }
  u.prototype.write = function(s, a, p, A) {
    if (a === void 0)
      A = "utf8", p = this.length, a = 0;
    else if (p === void 0 && typeof a == "string")
      A = a, p = this.length, a = 0;
    else if (isFinite(a))
      a = a >>> 0, isFinite(p) ? (p = p >>> 0, A === void 0 && (A = "utf8")) : (A = p, p = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const S = this.length - a;
    if ((p === void 0 || p > S) && (p = S), s.length > 0 && (p < 0 || a < 0) || a > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    A || (A = "utf8");
    let R = !1;
    for (; ; )
      switch (A) {
        case "hex":
          return Q(this, s, a, p);
        case "utf8":
        case "utf-8":
          return le(this, s, a, p);
        case "ascii":
        case "latin1":
        case "binary":
          return Se(this, s, a, p);
        case "base64":
          return ge(this, s, a, p);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Me(this, s, a, p);
        default:
          if (R)
            throw new TypeError("Unknown encoding: " + A);
          A = ("" + A).toLowerCase(), R = !0;
      }
  }, u.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function M(f, s, a) {
    return s === 0 && a === f.length ? e.fromByteArray(f) : e.fromByteArray(f.slice(s, a));
  }
  function l(f, s, a) {
    a = Math.min(f.length, a);
    const p = [];
    let A = s;
    for (; A < a; ) {
      const S = f[A];
      let R = null, J = S > 239 ? 4 : S > 223 ? 3 : S > 191 ? 2 : 1;
      if (A + J <= a) {
        let ie, ne, ye, ee;
        switch (J) {
          case 1:
            S < 128 && (R = S);
            break;
          case 2:
            ie = f[A + 1], (ie & 192) === 128 && (ee = (S & 31) << 6 | ie & 63, ee > 127 && (R = ee));
            break;
          case 3:
            ie = f[A + 1], ne = f[A + 2], (ie & 192) === 128 && (ne & 192) === 128 && (ee = (S & 15) << 12 | (ie & 63) << 6 | ne & 63, ee > 2047 && (ee < 55296 || ee > 57343) && (R = ee));
            break;
          case 4:
            ie = f[A + 1], ne = f[A + 2], ye = f[A + 3], (ie & 192) === 128 && (ne & 192) === 128 && (ye & 192) === 128 && (ee = (S & 15) << 18 | (ie & 63) << 12 | (ne & 63) << 6 | ye & 63, ee > 65535 && ee < 1114112 && (R = ee));
        }
      }
      R === null ? (R = 65533, J = 1) : R > 65535 && (R -= 65536, p.push(R >>> 10 & 1023 | 55296), R = 56320 | R & 1023), p.push(R), A += J;
    }
    return m(p);
  }
  const g = 4096;
  function m(f) {
    const s = f.length;
    if (s <= g)
      return String.fromCharCode.apply(String, f);
    let a = "", p = 0;
    for (; p < s; )
      a += String.fromCharCode.apply(
        String,
        f.slice(p, p += g)
      );
    return a;
  }
  function y(f, s, a) {
    let p = "";
    a = Math.min(f.length, a);
    for (let A = s; A < a; ++A)
      p += String.fromCharCode(f[A] & 127);
    return p;
  }
  function x(f, s, a) {
    let p = "";
    a = Math.min(f.length, a);
    for (let A = s; A < a; ++A)
      p += String.fromCharCode(f[A]);
    return p;
  }
  function k(f, s, a) {
    const p = f.length;
    (!s || s < 0) && (s = 0), (!a || a < 0 || a > p) && (a = p);
    let A = "";
    for (let S = s; S < a; ++S)
      A += Ye[f[S]];
    return A;
  }
  function C(f, s, a) {
    const p = f.slice(s, a);
    let A = "";
    for (let S = 0; S < p.length - 1; S += 2)
      A += String.fromCharCode(p[S] + p[S + 1] * 256);
    return A;
  }
  u.prototype.slice = function(s, a) {
    const p = this.length;
    s = ~~s, a = a === void 0 ? p : ~~a, s < 0 ? (s += p, s < 0 && (s = 0)) : s > p && (s = p), a < 0 ? (a += p, a < 0 && (a = 0)) : a > p && (a = p), a < s && (a = s);
    const A = this.subarray(s, a);
    return Object.setPrototypeOf(A, u.prototype), A;
  };
  function b(f, s, a) {
    if (f % 1 !== 0 || f < 0)
      throw new RangeError("offset is not uint");
    if (f + s > a)
      throw new RangeError("Trying to access beyond buffer length");
  }
  u.prototype.readUintLE = u.prototype.readUIntLE = function(s, a, p) {
    s = s >>> 0, a = a >>> 0, p || b(s, a, this.length);
    let A = this[s], S = 1, R = 0;
    for (; ++R < a && (S *= 256); )
      A += this[s + R] * S;
    return A;
  }, u.prototype.readUintBE = u.prototype.readUIntBE = function(s, a, p) {
    s = s >>> 0, a = a >>> 0, p || b(s, a, this.length);
    let A = this[s + --a], S = 1;
    for (; a > 0 && (S *= 256); )
      A += this[s + --a] * S;
    return A;
  }, u.prototype.readUint8 = u.prototype.readUInt8 = function(s, a) {
    return s = s >>> 0, a || b(s, 1, this.length), this[s];
  }, u.prototype.readUint16LE = u.prototype.readUInt16LE = function(s, a) {
    return s = s >>> 0, a || b(s, 2, this.length), this[s] | this[s + 1] << 8;
  }, u.prototype.readUint16BE = u.prototype.readUInt16BE = function(s, a) {
    return s = s >>> 0, a || b(s, 2, this.length), this[s] << 8 | this[s + 1];
  }, u.prototype.readUint32LE = u.prototype.readUInt32LE = function(s, a) {
    return s = s >>> 0, a || b(s, 4, this.length), (this[s] | this[s + 1] << 8 | this[s + 2] << 16) + this[s + 3] * 16777216;
  }, u.prototype.readUint32BE = u.prototype.readUInt32BE = function(s, a) {
    return s = s >>> 0, a || b(s, 4, this.length), this[s] * 16777216 + (this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3]);
  }, u.prototype.readBigUInt64LE = rt(function(s) {
    s = s >>> 0, We(s, "offset");
    const a = this[s], p = this[s + 7];
    (a === void 0 || p === void 0) && xe(s, this.length - 8);
    const A = a + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + this[++s] * 2 ** 24, S = this[++s] + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + p * 2 ** 24;
    return BigInt(A) + (BigInt(S) << BigInt(32));
  }), u.prototype.readBigUInt64BE = rt(function(s) {
    s = s >>> 0, We(s, "offset");
    const a = this[s], p = this[s + 7];
    (a === void 0 || p === void 0) && xe(s, this.length - 8);
    const A = a * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + this[++s], S = this[++s] * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + p;
    return (BigInt(A) << BigInt(32)) + BigInt(S);
  }), u.prototype.readIntLE = function(s, a, p) {
    s = s >>> 0, a = a >>> 0, p || b(s, a, this.length);
    let A = this[s], S = 1, R = 0;
    for (; ++R < a && (S *= 256); )
      A += this[s + R] * S;
    return S *= 128, A >= S && (A -= Math.pow(2, 8 * a)), A;
  }, u.prototype.readIntBE = function(s, a, p) {
    s = s >>> 0, a = a >>> 0, p || b(s, a, this.length);
    let A = a, S = 1, R = this[s + --A];
    for (; A > 0 && (S *= 256); )
      R += this[s + --A] * S;
    return S *= 128, R >= S && (R -= Math.pow(2, 8 * a)), R;
  }, u.prototype.readInt8 = function(s, a) {
    return s = s >>> 0, a || b(s, 1, this.length), this[s] & 128 ? (255 - this[s] + 1) * -1 : this[s];
  }, u.prototype.readInt16LE = function(s, a) {
    s = s >>> 0, a || b(s, 2, this.length);
    const p = this[s] | this[s + 1] << 8;
    return p & 32768 ? p | 4294901760 : p;
  }, u.prototype.readInt16BE = function(s, a) {
    s = s >>> 0, a || b(s, 2, this.length);
    const p = this[s + 1] | this[s] << 8;
    return p & 32768 ? p | 4294901760 : p;
  }, u.prototype.readInt32LE = function(s, a) {
    return s = s >>> 0, a || b(s, 4, this.length), this[s] | this[s + 1] << 8 | this[s + 2] << 16 | this[s + 3] << 24;
  }, u.prototype.readInt32BE = function(s, a) {
    return s = s >>> 0, a || b(s, 4, this.length), this[s] << 24 | this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3];
  }, u.prototype.readBigInt64LE = rt(function(s) {
    s = s >>> 0, We(s, "offset");
    const a = this[s], p = this[s + 7];
    (a === void 0 || p === void 0) && xe(s, this.length - 8);
    const A = this[s + 4] + this[s + 5] * 2 ** 8 + this[s + 6] * 2 ** 16 + (p << 24);
    return (BigInt(A) << BigInt(32)) + BigInt(a + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + this[++s] * 2 ** 24);
  }), u.prototype.readBigInt64BE = rt(function(s) {
    s = s >>> 0, We(s, "offset");
    const a = this[s], p = this[s + 7];
    (a === void 0 || p === void 0) && xe(s, this.length - 8);
    const A = (a << 24) + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + this[++s];
    return (BigInt(A) << BigInt(32)) + BigInt(this[++s] * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + p);
  }), u.prototype.readFloatLE = function(s, a) {
    return s = s >>> 0, a || b(s, 4, this.length), t.read(this, s, !0, 23, 4);
  }, u.prototype.readFloatBE = function(s, a) {
    return s = s >>> 0, a || b(s, 4, this.length), t.read(this, s, !1, 23, 4);
  }, u.prototype.readDoubleLE = function(s, a) {
    return s = s >>> 0, a || b(s, 8, this.length), t.read(this, s, !0, 52, 8);
  }, u.prototype.readDoubleBE = function(s, a) {
    return s = s >>> 0, a || b(s, 8, this.length), t.read(this, s, !1, 52, 8);
  };
  function h(f, s, a, p, A, S) {
    if (!u.isBuffer(f))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (s > A || s < S)
      throw new RangeError('"value" argument is out of bounds');
    if (a + p > f.length)
      throw new RangeError("Index out of range");
  }
  u.prototype.writeUintLE = u.prototype.writeUIntLE = function(s, a, p, A) {
    if (s = +s, a = a >>> 0, p = p >>> 0, !A) {
      const J = Math.pow(2, 8 * p) - 1;
      h(this, s, a, p, J, 0);
    }
    let S = 1, R = 0;
    for (this[a] = s & 255; ++R < p && (S *= 256); )
      this[a + R] = s / S & 255;
    return a + p;
  }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(s, a, p, A) {
    if (s = +s, a = a >>> 0, p = p >>> 0, !A) {
      const J = Math.pow(2, 8 * p) - 1;
      h(this, s, a, p, J, 0);
    }
    let S = p - 1, R = 1;
    for (this[a + S] = s & 255; --S >= 0 && (R *= 256); )
      this[a + S] = s / R & 255;
    return a + p;
  }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(s, a, p) {
    return s = +s, a = a >>> 0, p || h(this, s, a, 1, 255, 0), this[a] = s & 255, a + 1;
  }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(s, a, p) {
    return s = +s, a = a >>> 0, p || h(this, s, a, 2, 65535, 0), this[a] = s & 255, this[a + 1] = s >>> 8, a + 2;
  }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(s, a, p) {
    return s = +s, a = a >>> 0, p || h(this, s, a, 2, 65535, 0), this[a] = s >>> 8, this[a + 1] = s & 255, a + 2;
  }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(s, a, p) {
    return s = +s, a = a >>> 0, p || h(this, s, a, 4, 4294967295, 0), this[a + 3] = s >>> 24, this[a + 2] = s >>> 16, this[a + 1] = s >>> 8, this[a] = s & 255, a + 4;
  }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(s, a, p) {
    return s = +s, a = a >>> 0, p || h(this, s, a, 4, 4294967295, 0), this[a] = s >>> 24, this[a + 1] = s >>> 16, this[a + 2] = s >>> 8, this[a + 3] = s & 255, a + 4;
  };
  function B(f, s, a, p, A) {
    K(s, p, A, f, a, 7);
    let S = Number(s & BigInt(4294967295));
    f[a++] = S, S = S >> 8, f[a++] = S, S = S >> 8, f[a++] = S, S = S >> 8, f[a++] = S;
    let R = Number(s >> BigInt(32) & BigInt(4294967295));
    return f[a++] = R, R = R >> 8, f[a++] = R, R = R >> 8, f[a++] = R, R = R >> 8, f[a++] = R, a;
  }
  function q(f, s, a, p, A) {
    K(s, p, A, f, a, 7);
    let S = Number(s & BigInt(4294967295));
    f[a + 7] = S, S = S >> 8, f[a + 6] = S, S = S >> 8, f[a + 5] = S, S = S >> 8, f[a + 4] = S;
    let R = Number(s >> BigInt(32) & BigInt(4294967295));
    return f[a + 3] = R, R = R >> 8, f[a + 2] = R, R = R >> 8, f[a + 1] = R, R = R >> 8, f[a] = R, a + 8;
  }
  u.prototype.writeBigUInt64LE = rt(function(s, a = 0) {
    return B(this, s, a, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeBigUInt64BE = rt(function(s, a = 0) {
    return q(this, s, a, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeIntLE = function(s, a, p, A) {
    if (s = +s, a = a >>> 0, !A) {
      const ie = Math.pow(2, 8 * p - 1);
      h(this, s, a, p, ie - 1, -ie);
    }
    let S = 0, R = 1, J = 0;
    for (this[a] = s & 255; ++S < p && (R *= 256); )
      s < 0 && J === 0 && this[a + S - 1] !== 0 && (J = 1), this[a + S] = (s / R >> 0) - J & 255;
    return a + p;
  }, u.prototype.writeIntBE = function(s, a, p, A) {
    if (s = +s, a = a >>> 0, !A) {
      const ie = Math.pow(2, 8 * p - 1);
      h(this, s, a, p, ie - 1, -ie);
    }
    let S = p - 1, R = 1, J = 0;
    for (this[a + S] = s & 255; --S >= 0 && (R *= 256); )
      s < 0 && J === 0 && this[a + S + 1] !== 0 && (J = 1), this[a + S] = (s / R >> 0) - J & 255;
    return a + p;
  }, u.prototype.writeInt8 = function(s, a, p) {
    return s = +s, a = a >>> 0, p || h(this, s, a, 1, 127, -128), s < 0 && (s = 255 + s + 1), this[a] = s & 255, a + 1;
  }, u.prototype.writeInt16LE = function(s, a, p) {
    return s = +s, a = a >>> 0, p || h(this, s, a, 2, 32767, -32768), this[a] = s & 255, this[a + 1] = s >>> 8, a + 2;
  }, u.prototype.writeInt16BE = function(s, a, p) {
    return s = +s, a = a >>> 0, p || h(this, s, a, 2, 32767, -32768), this[a] = s >>> 8, this[a + 1] = s & 255, a + 2;
  }, u.prototype.writeInt32LE = function(s, a, p) {
    return s = +s, a = a >>> 0, p || h(this, s, a, 4, 2147483647, -2147483648), this[a] = s & 255, this[a + 1] = s >>> 8, this[a + 2] = s >>> 16, this[a + 3] = s >>> 24, a + 4;
  }, u.prototype.writeInt32BE = function(s, a, p) {
    return s = +s, a = a >>> 0, p || h(this, s, a, 4, 2147483647, -2147483648), s < 0 && (s = 4294967295 + s + 1), this[a] = s >>> 24, this[a + 1] = s >>> 16, this[a + 2] = s >>> 8, this[a + 3] = s & 255, a + 4;
  }, u.prototype.writeBigInt64LE = rt(function(s, a = 0) {
    return B(this, s, a, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), u.prototype.writeBigInt64BE = rt(function(s, a = 0) {
    return q(this, s, a, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function Z(f, s, a, p, A, S) {
    if (a + p > f.length)
      throw new RangeError("Index out of range");
    if (a < 0)
      throw new RangeError("Index out of range");
  }
  function V(f, s, a, p, A) {
    return s = +s, a = a >>> 0, A || Z(f, s, a, 4), t.write(f, s, a, p, 23, 4), a + 4;
  }
  u.prototype.writeFloatLE = function(s, a, p) {
    return V(this, s, a, !0, p);
  }, u.prototype.writeFloatBE = function(s, a, p) {
    return V(this, s, a, !1, p);
  };
  function oe(f, s, a, p, A) {
    return s = +s, a = a >>> 0, A || Z(f, s, a, 8), t.write(f, s, a, p, 52, 8), a + 8;
  }
  u.prototype.writeDoubleLE = function(s, a, p) {
    return oe(this, s, a, !0, p);
  }, u.prototype.writeDoubleBE = function(s, a, p) {
    return oe(this, s, a, !1, p);
  }, u.prototype.copy = function(s, a, p, A) {
    if (!u.isBuffer(s))
      throw new TypeError("argument should be a Buffer");
    if (p || (p = 0), !A && A !== 0 && (A = this.length), a >= s.length && (a = s.length), a || (a = 0), A > 0 && A < p && (A = p), A === p || s.length === 0 || this.length === 0)
      return 0;
    if (a < 0)
      throw new RangeError("targetStart out of bounds");
    if (p < 0 || p >= this.length)
      throw new RangeError("Index out of range");
    if (A < 0)
      throw new RangeError("sourceEnd out of bounds");
    A > this.length && (A = this.length), s.length - a < A - p && (A = s.length - a + p);
    const S = A - p;
    return this === s && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(a, p, A) : Uint8Array.prototype.set.call(
      s,
      this.subarray(p, A),
      a
    ), S;
  }, u.prototype.fill = function(s, a, p, A) {
    if (typeof s == "string") {
      if (typeof a == "string" ? (A = a, a = 0, p = this.length) : typeof p == "string" && (A = p, p = this.length), A !== void 0 && typeof A != "string")
        throw new TypeError("encoding must be a string");
      if (typeof A == "string" && !u.isEncoding(A))
        throw new TypeError("Unknown encoding: " + A);
      if (s.length === 1) {
        const R = s.charCodeAt(0);
        (A === "utf8" && R < 128 || A === "latin1") && (s = R);
      }
    } else
      typeof s == "number" ? s = s & 255 : typeof s == "boolean" && (s = Number(s));
    if (a < 0 || this.length < a || this.length < p)
      throw new RangeError("Out of range index");
    if (p <= a)
      return this;
    a = a >>> 0, p = p === void 0 ? this.length : p >>> 0, s || (s = 0);
    let S;
    if (typeof s == "number")
      for (S = a; S < p; ++S)
        this[S] = s;
    else {
      const R = u.isBuffer(s) ? s : u.from(s, A), J = R.length;
      if (J === 0)
        throw new TypeError('The value "' + s + '" is invalid for argument "value"');
      for (S = 0; S < p - a; ++S)
        this[S + a] = R[S % J];
    }
    return this;
  };
  const $ = {};
  function se(f, s, a) {
    $[f] = class extends a {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: s.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${f}]`, this.stack, delete this.name;
      }
      get code() {
        return f;
      }
      set code(A) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: A,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${f}]: ${this.message}`;
      }
    };
  }
  se(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(f) {
      return f ? `${f} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), se(
    "ERR_INVALID_ARG_TYPE",
    function(f, s) {
      return `The "${f}" argument must be of type number. Received type ${typeof s}`;
    },
    TypeError
  ), se(
    "ERR_OUT_OF_RANGE",
    function(f, s, a) {
      let p = `The value of "${f}" is out of range.`, A = a;
      return Number.isInteger(a) && Math.abs(a) > 2 ** 32 ? A = be(String(a)) : typeof a == "bigint" && (A = String(a), (a > BigInt(2) ** BigInt(32) || a < -(BigInt(2) ** BigInt(32))) && (A = be(A)), A += "n"), p += ` It must be ${s}. Received ${A}`, p;
    },
    RangeError
  );
  function be(f) {
    let s = "", a = f.length;
    const p = f[0] === "-" ? 1 : 0;
    for (; a >= p + 4; a -= 3)
      s = `_${f.slice(a - 3, a)}${s}`;
    return `${f.slice(0, a)}${s}`;
  }
  function ve(f, s, a) {
    We(s, "offset"), (f[s] === void 0 || f[s + a] === void 0) && xe(s, f.length - (a + 1));
  }
  function K(f, s, a, p, A, S) {
    if (f > a || f < s) {
      const R = typeof s == "bigint" ? "n" : "";
      let J;
      throw S > 3 ? s === 0 || s === BigInt(0) ? J = `>= 0${R} and < 2${R} ** ${(S + 1) * 8}${R}` : J = `>= -(2${R} ** ${(S + 1) * 8 - 1}${R}) and < 2 ** ${(S + 1) * 8 - 1}${R}` : J = `>= ${s}${R} and <= ${a}${R}`, new $.ERR_OUT_OF_RANGE("value", J, f);
    }
    ve(p, A, S);
  }
  function We(f, s) {
    if (typeof f != "number")
      throw new $.ERR_INVALID_ARG_TYPE(s, "number", f);
  }
  function xe(f, s, a) {
    throw Math.floor(f) !== f ? (We(f, a), new $.ERR_OUT_OF_RANGE(a || "offset", "an integer", f)) : s < 0 ? new $.ERR_BUFFER_OUT_OF_BOUNDS() : new $.ERR_OUT_OF_RANGE(
      a || "offset",
      `>= ${a ? 1 : 0} and <= ${s}`,
      f
    );
  }
  const Ge = /[^+/0-9A-Za-z-_]/g;
  function ir(f) {
    if (f = f.split("=")[0], f = f.trim().replace(Ge, ""), f.length < 2)
      return "";
    for (; f.length % 4 !== 0; )
      f = f + "=";
    return f;
  }
  function ze(f, s) {
    s = s || 1 / 0;
    let a;
    const p = f.length;
    let A = null;
    const S = [];
    for (let R = 0; R < p; ++R) {
      if (a = f.charCodeAt(R), a > 55295 && a < 57344) {
        if (!A) {
          if (a > 56319) {
            (s -= 3) > -1 && S.push(239, 191, 189);
            continue;
          } else if (R + 1 === p) {
            (s -= 3) > -1 && S.push(239, 191, 189);
            continue;
          }
          A = a;
          continue;
        }
        if (a < 56320) {
          (s -= 3) > -1 && S.push(239, 191, 189), A = a;
          continue;
        }
        a = (A - 55296 << 10 | a - 56320) + 65536;
      } else
        A && (s -= 3) > -1 && S.push(239, 191, 189);
      if (A = null, a < 128) {
        if ((s -= 1) < 0)
          break;
        S.push(a);
      } else if (a < 2048) {
        if ((s -= 2) < 0)
          break;
        S.push(
          a >> 6 | 192,
          a & 63 | 128
        );
      } else if (a < 65536) {
        if ((s -= 3) < 0)
          break;
        S.push(
          a >> 12 | 224,
          a >> 6 & 63 | 128,
          a & 63 | 128
        );
      } else if (a < 1114112) {
        if ((s -= 4) < 0)
          break;
        S.push(
          a >> 18 | 240,
          a >> 12 & 63 | 128,
          a >> 6 & 63 | 128,
          a & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return S;
  }
  function Qe(f) {
    const s = [];
    for (let a = 0; a < f.length; ++a)
      s.push(f.charCodeAt(a) & 255);
    return s;
  }
  function or(f, s) {
    let a, p, A;
    const S = [];
    for (let R = 0; R < f.length && !((s -= 2) < 0); ++R)
      a = f.charCodeAt(R), p = a >> 8, A = a % 256, S.push(A), S.push(p);
    return S;
  }
  function je(f) {
    return e.toByteArray(ir(f));
  }
  function ke(f, s, a, p) {
    let A;
    for (A = 0; A < p && !(A + a >= s.length || A >= f.length); ++A)
      s[A + a] = f[A];
    return A;
  }
  function qe(f, s) {
    return f instanceof s || f != null && f.constructor != null && f.constructor.name != null && f.constructor.name === s.name;
  }
  function He(f) {
    return f !== f;
  }
  const Ye = function() {
    const f = "0123456789abcdef", s = new Array(256);
    for (let a = 0; a < 16; ++a) {
      const p = a * 16;
      for (let A = 0; A < 16; ++A)
        s[p + A] = f[a] + f[A];
    }
    return s;
  }();
  function rt(f) {
    return typeof BigInt > "u" ? Ke : f;
  }
  function Ke() {
    throw new Error("BigInt not supported");
  }
})(Ae);
function ws(n) {
  if (!Number.isSafeInteger(n) || n < 0)
    throw new Error(`Wrong positive integer: ${n}`);
}
function Vf(n) {
  if (typeof n != "boolean")
    throw new Error(`Expected boolean, not ${n}`);
}
function $c(n, ...e) {
  if (!(n instanceof Uint8Array))
    throw new TypeError("Expected Uint8Array");
  if (e.length > 0 && !e.includes(n.length))
    throw new TypeError(`Expected Uint8Array of length ${e}, not of length=${n.length}`);
}
function Zf(n) {
  if (typeof n != "function" || typeof n.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  ws(n.outputLen), ws(n.blockLen);
}
function Xf(n, e = !0) {
  if (n.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (e && n.finished)
    throw new Error("Hash#digest() has already been called");
}
function Jf(n, e) {
  $c(n);
  const t = e.outputLen;
  if (n.length < t)
    throw new Error(`digestInto() expects output buffer of length at least ${t}`);
}
const qt = {
  number: ws,
  bool: Vf,
  bytes: $c,
  hash: Zf,
  exists: Xf,
  output: Jf
};
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const $f = (n) => new Uint32Array(n.buffer, n.byteOffset, Math.floor(n.byteLength / 4)), Ro = (n) => new DataView(n.buffer, n.byteOffset, n.byteLength), hn = (n, e) => n << 32 - e | n >>> e, eh = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!eh)
  throw new Error("Non little-endian hardware is not supported");
Array.from({ length: 256 }, (n, e) => e.toString(16).padStart(2, "0"));
function th(n) {
  if (typeof n != "string")
    throw new TypeError(`utf8ToBytes expected string, got ${typeof n}`);
  return new TextEncoder().encode(n);
}
function Yr(n) {
  if (typeof n == "string" && (n = th(n)), !(n instanceof Uint8Array))
    throw new TypeError(`Expected input type is Uint8Array (got ${typeof n})`);
  return n;
}
class Us {
  clone() {
    return this._cloneInto();
  }
}
function Kr(n) {
  const e = (r) => n().update(Yr(r)).digest(), t = n();
  return e.outputLen = t.outputLen, e.blockLen = t.blockLen, e.create = () => n(), e;
}
function nh(n) {
  const e = (r, o) => n(o).update(Yr(r)).digest(), t = n({});
  return e.outputLen = t.outputLen, e.blockLen = t.blockLen, e.create = (r) => n(r), e;
}
function rh(n, e, t, r) {
  if (typeof n.setBigUint64 == "function")
    return n.setBigUint64(e, t, r);
  const o = BigInt(32), i = BigInt(4294967295), c = Number(t >> o & i), u = Number(t & i), d = r ? 4 : 0, w = r ? 0 : 4;
  n.setUint32(e + d, c, r), n.setUint32(e + w, u, r);
}
class eu extends Us {
  constructor(e, t, r, o) {
    super(), this.blockLen = e, this.outputLen = t, this.padOffset = r, this.isLE = o, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = Ro(this.buffer);
  }
  update(e) {
    qt.exists(this);
    const { view: t, buffer: r, blockLen: o } = this;
    e = Yr(e);
    const i = e.length;
    for (let c = 0; c < i; ) {
      const u = Math.min(o - this.pos, i - c);
      if (u === o) {
        const d = Ro(e);
        for (; o <= i - c; c += o)
          this.process(d, c);
        continue;
      }
      r.set(e.subarray(c, c + u), this.pos), this.pos += u, c += u, this.pos === o && (this.process(t, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    qt.exists(this), qt.output(e, this), this.finished = !0;
    const { buffer: t, view: r, blockLen: o, isLE: i } = this;
    let { pos: c } = this;
    t[c++] = 128, this.buffer.subarray(c).fill(0), this.padOffset > o - c && (this.process(r, 0), c = 0);
    for (let d = c; d < o; d++)
      t[d] = 0;
    rh(r, o - 8, BigInt(this.length * 8), i), this.process(r, 0);
    const u = Ro(e);
    this.get().forEach((d, w) => u.setUint32(4 * w, d, i));
  }
  digest() {
    const { buffer: e, outputLen: t } = this;
    this.digestInto(e);
    const r = e.slice(0, t);
    return this.destroy(), r;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: t, buffer: r, length: o, finished: i, destroyed: c, pos: u } = this;
    return e.length = o, e.pos = u, e.finished = i, e.destroyed = c, o % t && e.buffer.set(r), e;
  }
}
const ii = BigInt(2 ** 32 - 1), ms = BigInt(32);
function tu(n, e = !1) {
  return e ? { h: Number(n & ii), l: Number(n >> ms & ii) } : { h: Number(n >> ms & ii) | 0, l: Number(n & ii) | 0 };
}
function ih(n, e = !1) {
  let t = new Uint32Array(n.length), r = new Uint32Array(n.length);
  for (let o = 0; o < n.length; o++) {
    const { h: i, l: c } = tu(n[o], e);
    [t[o], r[o]] = [i, c];
  }
  return [t, r];
}
const oh = (n, e) => BigInt(n >>> 0) << ms | BigInt(e >>> 0), sh = (n, e, t) => n >>> t, ah = (n, e, t) => n << 32 - t | e >>> t, ch = (n, e, t) => n >>> t | e << 32 - t, uh = (n, e, t) => n << 32 - t | e >>> t, lh = (n, e, t) => n << 64 - t | e >>> t - 32, fh = (n, e, t) => n >>> t - 32 | e << 64 - t, hh = (n, e) => e, dh = (n, e) => n, ph = (n, e, t) => n << t | e >>> 32 - t, gh = (n, e, t) => e << t | n >>> 32 - t, yh = (n, e, t) => e << t - 32 | n >>> 64 - t, wh = (n, e, t) => n << t - 32 | e >>> 64 - t;
function mh(n, e, t, r) {
  const o = (e >>> 0) + (r >>> 0);
  return { h: n + t + (o / 2 ** 32 | 0) | 0, l: o | 0 };
}
const bh = (n, e, t) => (n >>> 0) + (e >>> 0) + (t >>> 0), Ah = (n, e, t, r) => e + t + r + (n / 2 ** 32 | 0) | 0, vh = (n, e, t, r) => (n >>> 0) + (e >>> 0) + (t >>> 0) + (r >>> 0), Eh = (n, e, t, r, o) => e + t + r + o + (n / 2 ** 32 | 0) | 0, xh = (n, e, t, r, o) => (n >>> 0) + (e >>> 0) + (t >>> 0) + (r >>> 0) + (o >>> 0), Ih = (n, e, t, r, o, i) => e + t + r + o + i + (n / 2 ** 32 | 0) | 0, we = {
  fromBig: tu,
  split: ih,
  toBig: oh,
  shrSH: sh,
  shrSL: ah,
  rotrSH: ch,
  rotrSL: uh,
  rotrBH: lh,
  rotrBL: fh,
  rotr32H: hh,
  rotr32L: dh,
  rotlSH: ph,
  rotlSL: gh,
  rotlBH: yh,
  rotlBL: wh,
  add: mh,
  add3L: bh,
  add3H: Ah,
  add4L: vh,
  add4H: Eh,
  add5H: Ih,
  add5L: xh
}, [Sh, Bh] = we.split([
  "0x428a2f98d728ae22",
  "0x7137449123ef65cd",
  "0xb5c0fbcfec4d3b2f",
  "0xe9b5dba58189dbbc",
  "0x3956c25bf348b538",
  "0x59f111f1b605d019",
  "0x923f82a4af194f9b",
  "0xab1c5ed5da6d8118",
  "0xd807aa98a3030242",
  "0x12835b0145706fbe",
  "0x243185be4ee4b28c",
  "0x550c7dc3d5ffb4e2",
  "0x72be5d74f27b896f",
  "0x80deb1fe3b1696b1",
  "0x9bdc06a725c71235",
  "0xc19bf174cf692694",
  "0xe49b69c19ef14ad2",
  "0xefbe4786384f25e3",
  "0x0fc19dc68b8cd5b5",
  "0x240ca1cc77ac9c65",
  "0x2de92c6f592b0275",
  "0x4a7484aa6ea6e483",
  "0x5cb0a9dcbd41fbd4",
  "0x76f988da831153b5",
  "0x983e5152ee66dfab",
  "0xa831c66d2db43210",
  "0xb00327c898fb213f",
  "0xbf597fc7beef0ee4",
  "0xc6e00bf33da88fc2",
  "0xd5a79147930aa725",
  "0x06ca6351e003826f",
  "0x142929670a0e6e70",
  "0x27b70a8546d22ffc",
  "0x2e1b21385c26c926",
  "0x4d2c6dfc5ac42aed",
  "0x53380d139d95b3df",
  "0x650a73548baf63de",
  "0x766a0abb3c77b2a8",
  "0x81c2c92e47edaee6",
  "0x92722c851482353b",
  "0xa2bfe8a14cf10364",
  "0xa81a664bbc423001",
  "0xc24b8b70d0f89791",
  "0xc76c51a30654be30",
  "0xd192e819d6ef5218",
  "0xd69906245565a910",
  "0xf40e35855771202a",
  "0x106aa07032bbd1b8",
  "0x19a4c116b8d2d0c8",
  "0x1e376c085141ab53",
  "0x2748774cdf8eeb99",
  "0x34b0bcb5e19b48a8",
  "0x391c0cb3c5c95a63",
  "0x4ed8aa4ae3418acb",
  "0x5b9cca4f7763e373",
  "0x682e6ff3d6b2b8a3",
  "0x748f82ee5defb2fc",
  "0x78a5636f43172f60",
  "0x84c87814a1f0ab72",
  "0x8cc702081a6439ec",
  "0x90befffa23631e28",
  "0xa4506cebde82bde9",
  "0xbef9a3f7b2c67915",
  "0xc67178f2e372532b",
  "0xca273eceea26619c",
  "0xd186b8c721c0c207",
  "0xeada7dd6cde0eb1e",
  "0xf57d4f7fee6ed178",
  "0x06f067aa72176fba",
  "0x0a637dc5a2c898a6",
  "0x113f9804bef90dae",
  "0x1b710b35131c471b",
  "0x28db77f523047d84",
  "0x32caab7b40c72493",
  "0x3c9ebe0a15c9bebc",
  "0x431d67c49c100d4c",
  "0x4cc5d4becb3e42b6",
  "0x597f299cfc657e2a",
  "0x5fcb6fab3ad6faec",
  "0x6c44198c4a475817"
].map((n) => BigInt(n))), In = new Uint32Array(80), Sn = new Uint32Array(80);
class Ds extends eu {
  constructor() {
    super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
  }
  get() {
    const { Ah: e, Al: t, Bh: r, Bl: o, Ch: i, Cl: c, Dh: u, Dl: d, Eh: w, El: v, Fh: I, Fl: _, Gh: E, Gl: N, Hh: T, Hl: U } = this;
    return [e, t, r, o, i, c, u, d, w, v, I, _, E, N, T, U];
  }
  set(e, t, r, o, i, c, u, d, w, v, I, _, E, N, T, U) {
    this.Ah = e | 0, this.Al = t | 0, this.Bh = r | 0, this.Bl = o | 0, this.Ch = i | 0, this.Cl = c | 0, this.Dh = u | 0, this.Dl = d | 0, this.Eh = w | 0, this.El = v | 0, this.Fh = I | 0, this.Fl = _ | 0, this.Gh = E | 0, this.Gl = N | 0, this.Hh = T | 0, this.Hl = U | 0;
  }
  process(e, t) {
    for (let O = 0; O < 16; O++, t += 4)
      In[O] = e.getUint32(t), Sn[O] = e.getUint32(t += 4);
    for (let O = 16; O < 80; O++) {
      const z = In[O - 15] | 0, L = Sn[O - 15] | 0, W = we.rotrSH(z, L, 1) ^ we.rotrSH(z, L, 8) ^ we.shrSH(z, L, 7), j = we.rotrSL(z, L, 1) ^ we.rotrSL(z, L, 8) ^ we.shrSL(z, L, 7), Q = In[O - 2] | 0, le = Sn[O - 2] | 0, Se = we.rotrSH(Q, le, 19) ^ we.rotrBH(Q, le, 61) ^ we.shrSH(Q, le, 6), ge = we.rotrSL(Q, le, 19) ^ we.rotrBL(Q, le, 61) ^ we.shrSL(Q, le, 6), Me = we.add4L(j, ge, Sn[O - 7], Sn[O - 16]), M = we.add4H(Me, W, Se, In[O - 7], In[O - 16]);
      In[O] = M | 0, Sn[O] = Me | 0;
    }
    let { Ah: r, Al: o, Bh: i, Bl: c, Ch: u, Cl: d, Dh: w, Dl: v, Eh: I, El: _, Fh: E, Fl: N, Gh: T, Gl: U, Hh: P, Hl: F } = this;
    for (let O = 0; O < 80; O++) {
      const z = we.rotrSH(I, _, 14) ^ we.rotrSH(I, _, 18) ^ we.rotrBH(I, _, 41), L = we.rotrSL(I, _, 14) ^ we.rotrSL(I, _, 18) ^ we.rotrBL(I, _, 41), W = I & E ^ ~I & T, j = _ & N ^ ~_ & U, Q = we.add5L(F, L, j, Bh[O], Sn[O]), le = we.add5H(Q, P, z, W, Sh[O], In[O]), Se = Q | 0, ge = we.rotrSH(r, o, 28) ^ we.rotrBH(r, o, 34) ^ we.rotrBH(r, o, 39), Me = we.rotrSL(r, o, 28) ^ we.rotrBL(r, o, 34) ^ we.rotrBL(r, o, 39), M = r & i ^ r & u ^ i & u, l = o & c ^ o & d ^ c & d;
      P = T | 0, F = U | 0, T = E | 0, U = N | 0, E = I | 0, N = _ | 0, { h: I, l: _ } = we.add(w | 0, v | 0, le | 0, Se | 0), w = u | 0, v = d | 0, u = i | 0, d = c | 0, i = r | 0, c = o | 0;
      const g = we.add3L(Se, Me, l);
      r = we.add3H(g, le, ge, M), o = g | 0;
    }
    ({ h: r, l: o } = we.add(this.Ah | 0, this.Al | 0, r | 0, o | 0)), { h: i, l: c } = we.add(this.Bh | 0, this.Bl | 0, i | 0, c | 0), { h: u, l: d } = we.add(this.Ch | 0, this.Cl | 0, u | 0, d | 0), { h: w, l: v } = we.add(this.Dh | 0, this.Dl | 0, w | 0, v | 0), { h: I, l: _ } = we.add(this.Eh | 0, this.El | 0, I | 0, _ | 0), { h: E, l: N } = we.add(this.Fh | 0, this.Fl | 0, E | 0, N | 0), { h: T, l: U } = we.add(this.Gh | 0, this.Gl | 0, T | 0, U | 0), { h: P, l: F } = we.add(this.Hh | 0, this.Hl | 0, P | 0, F | 0), this.set(r, o, i, c, u, d, w, v, I, _, E, N, T, U, P, F);
  }
  roundClean() {
    In.fill(0), Sn.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
class Mh extends Ds {
  constructor() {
    super(), this.Ah = 573645204, this.Al = -64227540, this.Bh = -1621794909, this.Bl = -934517566, this.Ch = 596883563, this.Cl = 1867755857, this.Dh = -1774684391, this.Dl = 1497426621, this.Eh = -1775747358, this.El = -1467023389, this.Fh = -1101128155, this.Fl = 1401305490, this.Gh = 721525244, this.Gl = 746961066, this.Hh = 246885852, this.Hl = -2117784414, this.outputLen = 32;
  }
}
class _h extends Ds {
  constructor() {
    super(), this.Ah = -876896931, this.Al = -1056596264, this.Bh = 1654270250, this.Bl = 914150663, this.Ch = -1856437926, this.Cl = 812702999, this.Dh = 355462360, this.Dl = -150054599, this.Eh = 1731405415, this.El = -4191439, this.Fh = -1900787065, this.Fl = 1750603025, this.Gh = -619958771, this.Gl = 1694076839, this.Hh = 1203062813, this.Hl = -1090891868, this.outputLen = 48;
  }
}
const Ch = Kr(() => new Ds());
Kr(() => new Mh());
Kr(() => new _h());
const Th = {}, Ps = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Th
}, Symbol.toStringTag, { value: "Module" }));
/*! noble-ed25519 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
const Tt = BigInt(0), Ce = BigInt(1), fr = BigInt(2), Wa = BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"), Ve = Object.freeze({
  a: BigInt(-1),
  d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
  P: BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"),
  l: Wa,
  n: Wa,
  h: BigInt(8),
  Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
  Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960")
}), nu = BigInt("0x10000000000000000000000000000000000000000000000000000000000000000"), Nr = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt("6853475219497561581579357271197624642482790079785650197046958215289687604742");
const Nh = BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235"), Rh = BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578"), kh = BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838"), Oh = BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952");
class Te {
  constructor(e, t, r, o) {
    this.x = e, this.y = t, this.z = r, this.t = o;
  }
  static fromAffine(e) {
    if (!(e instanceof et))
      throw new TypeError("ExtendedPoint#fromAffine: expected Point");
    return e.equals(et.ZERO) ? Te.ZERO : new Te(e.x, e.y, Ce, Y(e.x * e.y));
  }
  static toAffineBatch(e) {
    const t = Dh(e.map((r) => r.z));
    return e.map((r, o) => r.toAffine(t[o]));
  }
  static normalizeZ(e) {
    return this.toAffineBatch(e).map(this.fromAffine);
  }
  equals(e) {
    Ga(e);
    const { x: t, y: r, z: o } = this, { x: i, y: c, z: u } = e, d = Y(t * u), w = Y(i * o), v = Y(r * u), I = Y(c * o);
    return d === w && v === I;
  }
  negate() {
    return new Te(Y(-this.x), this.y, this.z, Y(-this.t));
  }
  double() {
    const { x: e, y: t, z: r } = this, { a: o } = Ve, i = Y(e * e), c = Y(t * t), u = Y(fr * Y(r * r)), d = Y(o * i), w = e + t, v = Y(Y(w * w) - i - c), I = d + c, _ = I - u, E = d - c, N = Y(v * _), T = Y(I * E), U = Y(v * E), P = Y(_ * I);
    return new Te(N, T, P, U);
  }
  add(e) {
    Ga(e);
    const { x: t, y: r, z: o, t: i } = this, { x: c, y: u, z: d, t: w } = e, v = Y((r - t) * (u + c)), I = Y((r + t) * (u - c)), _ = Y(I - v);
    if (_ === Tt)
      return this.double();
    const E = Y(o * fr * w), N = Y(i * fr * d), T = N + E, U = I + v, P = N - E, F = Y(T * _), O = Y(U * P), z = Y(T * P), L = Y(_ * U);
    return new Te(F, O, L, z);
  }
  subtract(e) {
    return this.add(e.negate());
  }
  precomputeWindow(e) {
    const t = 1 + 256 / e, r = [];
    let o = this, i = o;
    for (let c = 0; c < t; c++) {
      i = o, r.push(i);
      for (let u = 1; u < 2 ** (e - 1); u++)
        i = i.add(o), r.push(i);
      o = i.double();
    }
    return r;
  }
  wNAF(e, t) {
    !t && this.equals(Te.BASE) && (t = et.BASE);
    const r = t && t._WINDOW_SIZE || 1;
    if (256 % r)
      throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");
    let o = t && bs.get(t);
    o || (o = this.precomputeWindow(r), t && r !== 1 && (o = Te.normalizeZ(o), bs.set(t, o)));
    let i = Te.ZERO, c = Te.ZERO;
    const u = 1 + 256 / r, d = 2 ** (r - 1), w = BigInt(2 ** r - 1), v = 2 ** r, I = BigInt(r);
    for (let _ = 0; _ < u; _++) {
      const E = _ * d;
      let N = Number(e & w);
      if (e >>= I, N > d && (N -= v, e += Ce), N === 0) {
        let T = o[E];
        _ % 2 && (T = T.negate()), c = c.add(T);
      } else {
        let T = o[E + Math.abs(N) - 1];
        N < 0 && (T = T.negate()), i = i.add(T);
      }
    }
    return Te.normalizeZ([i, c])[0];
  }
  multiply(e, t) {
    return this.wNAF(Ii(e, Ve.l), t);
  }
  multiplyUnsafe(e) {
    let t = Ii(e, Ve.l, !1);
    const r = Te.BASE, o = Te.ZERO;
    if (t === Tt)
      return o;
    if (this.equals(o) || t === Ce)
      return this;
    if (this.equals(r))
      return this.wNAF(t);
    let i = o, c = this;
    for (; t > Tt; )
      t & Ce && (i = i.add(c)), c = c.double(), t >>= Ce;
    return i;
  }
  isSmallOrder() {
    return this.multiplyUnsafe(Ve.h).equals(Te.ZERO);
  }
  isTorsionFree() {
    return this.multiplyUnsafe(Ve.l).equals(Te.ZERO);
  }
  toAffine(e = zi(this.z)) {
    const { x: t, y: r, z: o } = this, i = Y(t * e), c = Y(r * e);
    if (Y(o * e) !== Ce)
      throw new Error("invZ was invalid");
    return new et(i, c);
  }
  fromRistrettoBytes() {
    Oo();
  }
  toRistrettoBytes() {
    Oo();
  }
  fromRistrettoHash() {
    Oo();
  }
}
Te.BASE = new Te(Ve.Gx, Ve.Gy, Ce, Y(Ve.Gx * Ve.Gy));
Te.ZERO = new Te(Tt, Ce, Ce, Tt);
function Ga(n) {
  if (!(n instanceof Te))
    throw new TypeError("ExtendedPoint expected");
}
function ko(n) {
  if (!(n instanceof en))
    throw new TypeError("RistrettoPoint expected");
}
function Oo() {
  throw new Error("Legacy method: switch to RistrettoPoint");
}
class en {
  constructor(e) {
    this.ep = e;
  }
  static calcElligatorRistrettoMap(e) {
    const { d: t } = Ve, r = Y(Nr * e * e), o = Y((r + Ce) * kh);
    let i = BigInt(-1);
    const c = Y((i - t * r) * Y(r + t));
    let { isValid: u, value: d } = zs(o, c), w = Y(d * e);
    Cn(w) || (w = Y(-w)), u || (d = w), u || (i = r);
    const v = Y(i * (r - Ce) * Oh - c), I = d * d, _ = Y((d + d) * c), E = Y(v * Nh), N = Y(Ce - I), T = Y(Ce + I);
    return new Te(Y(_ * T), Y(N * E), Y(E * T), Y(_ * N));
  }
  static hashToCurve(e) {
    e = Dn(e, 64);
    const t = Lo(e.slice(0, 32)), r = this.calcElligatorRistrettoMap(t), o = Lo(e.slice(32, 64)), i = this.calcElligatorRistrettoMap(o);
    return new en(r.add(i));
  }
  static fromHex(e) {
    e = Dn(e, 32);
    const { a: t, d: r } = Ve, o = "RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint", i = Lo(e);
    if (!Fh(Dr(i), e) || Cn(i))
      throw new Error(o);
    const c = Y(i * i), u = Y(Ce + t * c), d = Y(Ce - t * c), w = Y(u * u), v = Y(d * d), I = Y(t * r * w - v), { isValid: _, value: E } = Qa(Y(I * v)), N = Y(E * d), T = Y(E * N * I);
    let U = Y((i + i) * N);
    Cn(U) && (U = Y(-U));
    const P = Y(u * T), F = Y(U * P);
    if (!_ || Cn(F) || P === Tt)
      throw new Error(o);
    return new en(new Te(U, P, Ce, F));
  }
  toRawBytes() {
    let { x: e, y: t, z: r, t: o } = this.ep;
    const i = Y(Y(r + t) * Y(r - t)), c = Y(e * t), u = Y(c * c), { value: d } = Qa(Y(i * u)), w = Y(d * i), v = Y(d * c), I = Y(w * v * o);
    let _;
    if (Cn(o * I)) {
      let N = Y(t * Nr), T = Y(e * Nr);
      e = N, t = T, _ = Y(w * Rh);
    } else
      _ = v;
    Cn(e * I) && (t = Y(-t));
    let E = Y((r - t) * _);
    return Cn(E) && (E = Y(-E)), Dr(E);
  }
  toHex() {
    return Vr(this.toRawBytes());
  }
  toString() {
    return this.toHex();
  }
  equals(e) {
    ko(e);
    const t = this.ep, r = e.ep, o = Y(t.x * r.y) === Y(t.y * r.x), i = Y(t.y * r.y) === Y(t.x * r.x);
    return o || i;
  }
  add(e) {
    return ko(e), new en(this.ep.add(e.ep));
  }
  subtract(e) {
    return ko(e), new en(this.ep.subtract(e.ep));
  }
  multiply(e) {
    return new en(this.ep.multiply(e));
  }
  multiplyUnsafe(e) {
    return new en(this.ep.multiplyUnsafe(e));
  }
}
en.BASE = new en(Te.BASE);
en.ZERO = new en(Te.ZERO);
const bs = /* @__PURE__ */ new WeakMap();
class et {
  constructor(e, t) {
    this.x = e, this.y = t;
  }
  _setWindowSize(e) {
    this._WINDOW_SIZE = e, bs.delete(this);
  }
  static fromHex(e, t = !0) {
    const { d: r, P: o } = Ve;
    e = Dn(e, 32);
    const i = e.slice();
    i[31] = e[31] & -129;
    const c = Zr(i);
    if (t && c >= o)
      throw new Error("Expected 0 < hex < P");
    if (!t && c >= nu)
      throw new Error("Expected 0 < hex < 2**256");
    const u = Y(c * c), d = Y(u - Ce), w = Y(r * u + Ce);
    let { isValid: v, value: I } = zs(d, w);
    if (!v)
      throw new Error("Point.fromHex: invalid y coordinate");
    const _ = (I & Ce) === Ce;
    return (e[31] & 128) !== 0 !== _ && (I = Y(-I)), new et(I, c);
  }
  static async fromPrivateKey(e) {
    return (await su(e)).point;
  }
  toRawBytes() {
    const e = Dr(this.y);
    return e[31] |= this.x & Ce ? 128 : 0, e;
  }
  toHex() {
    return Vr(this.toRawBytes());
  }
  toX25519() {
    const { y: e } = this, t = Y((Ce + e) * zi(Ce - e));
    return Dr(t);
  }
  isTorsionFree() {
    return Te.fromAffine(this).isTorsionFree();
  }
  equals(e) {
    return this.x === e.x && this.y === e.y;
  }
  negate() {
    return new et(Y(-this.x), this.y);
  }
  add(e) {
    return Te.fromAffine(this).add(Te.fromAffine(e)).toAffine();
  }
  subtract(e) {
    return this.add(e.negate());
  }
  multiply(e) {
    return Te.fromAffine(this).multiply(e, this).toAffine();
  }
}
et.BASE = new et(Ve.Gx, Ve.Gy);
et.ZERO = new et(Tt, Ce);
class Ur {
  constructor(e, t) {
    this.r = e, this.s = t, this.assertValidity();
  }
  static fromHex(e) {
    const t = Dn(e, 64), r = et.fromHex(t.slice(0, 32), !1), o = Zr(t.slice(32, 64));
    return new Ur(r, o);
  }
  assertValidity() {
    const { r: e, s: t } = this;
    if (!(e instanceof et))
      throw new Error("Expected Point instance");
    return Ii(t, Ve.l, !1), this;
  }
  toRawBytes() {
    const e = new Uint8Array(64);
    return e.set(this.r.toRawBytes()), e.set(Dr(this.s), 32), e;
  }
  toHex() {
    return Vr(this.toRawBytes());
  }
}
function ja(...n) {
  if (!n.every((r) => r instanceof Uint8Array))
    throw new Error("Expected Uint8Array list");
  if (n.length === 1)
    return n[0];
  const e = n.reduce((r, o) => r + o.length, 0), t = new Uint8Array(e);
  for (let r = 0, o = 0; r < n.length; r++) {
    const i = n[r];
    t.set(i, o), o += i.length;
  }
  return t;
}
const Lh = Array.from({ length: 256 }, (n, e) => e.toString(16).padStart(2, "0"));
function Vr(n) {
  if (!(n instanceof Uint8Array))
    throw new Error("Uint8Array expected");
  let e = "";
  for (let t = 0; t < n.length; t++)
    e += Lh[n[t]];
  return e;
}
function Fs(n) {
  if (typeof n != "string")
    throw new TypeError("hexToBytes: expected string, got " + typeof n);
  if (n.length % 2)
    throw new Error("hexToBytes: received invalid unpadded hex");
  const e = new Uint8Array(n.length / 2);
  for (let t = 0; t < e.length; t++) {
    const r = t * 2, o = n.slice(r, r + 2), i = Number.parseInt(o, 16);
    if (Number.isNaN(i) || i < 0)
      throw new Error("Invalid byte sequence");
    e[t] = i;
  }
  return e;
}
function ru(n) {
  const t = n.toString(16).padStart(64, "0");
  return Fs(t);
}
function Dr(n) {
  return ru(n).reverse();
}
function Cn(n) {
  return (Y(n) & Ce) === Ce;
}
function Zr(n) {
  if (!(n instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  return BigInt("0x" + Vr(Uint8Array.from(n).reverse()));
}
const Uh = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
function Lo(n) {
  return Y(Zr(n) & Uh);
}
function Y(n, e = Ve.P) {
  const t = n % e;
  return t >= Tt ? t : e + t;
}
function zi(n, e = Ve.P) {
  if (n === Tt || e <= Tt)
    throw new Error(`invert: expected positive integers, got n=${n} mod=${e}`);
  let t = Y(n, e), r = e, o = Tt, i = Ce;
  for (; t !== Tt; ) {
    const u = r / t, d = r % t, w = o - i * u;
    r = t, t = d, o = i, i = w;
  }
  if (r !== Ce)
    throw new Error("invert: does not exist");
  return Y(o, e);
}
function Dh(n, e = Ve.P) {
  const t = new Array(n.length), r = n.reduce((i, c, u) => c === Tt ? i : (t[u] = i, Y(i * c, e)), Ce), o = zi(r, e);
  return n.reduceRight((i, c, u) => c === Tt ? i : (t[u] = Y(i * t[u], e), Y(i * c, e)), o), t;
}
function dn(n, e) {
  const { P: t } = Ve;
  let r = n;
  for (; e-- > Tt; )
    r *= r, r %= t;
  return r;
}
function Ph(n) {
  const { P: e } = Ve, t = BigInt(5), r = BigInt(10), o = BigInt(20), i = BigInt(40), c = BigInt(80), d = n * n % e * n % e, w = dn(d, fr) * d % e, v = dn(w, Ce) * n % e, I = dn(v, t) * v % e, _ = dn(I, r) * I % e, E = dn(_, o) * _ % e, N = dn(E, i) * E % e, T = dn(N, c) * N % e, U = dn(T, c) * N % e, P = dn(U, r) * I % e;
  return { pow_p_5_8: dn(P, fr) * n % e, b2: d };
}
function zs(n, e) {
  const t = Y(e * e * e), r = Y(t * t * e), o = Ph(n * r).pow_p_5_8;
  let i = Y(n * t * o);
  const c = Y(e * i * i), u = i, d = Y(i * Nr), w = c === n, v = c === Y(-n), I = c === Y(-n * Nr);
  return w && (i = u), (v || I) && (i = d), Cn(i) && (i = Y(-i)), { isValid: w || v, value: i };
}
function Qa(n) {
  return zs(Ce, n);
}
function xi(n) {
  return Y(Zr(n), Ve.l);
}
function Fh(n, e) {
  if (n.length !== e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (n[t] !== e[t])
      return !1;
  return !0;
}
function Dn(n, e) {
  const t = n instanceof Uint8Array ? Uint8Array.from(n) : Fs(n);
  if (typeof e == "number" && t.length !== e)
    throw new Error(`Expected ${e} bytes`);
  return t;
}
function Ii(n, e, t = !0) {
  if (!e)
    throw new TypeError("Specify max value");
  if (typeof n == "number" && Number.isSafeInteger(n) && (n = BigInt(n)), typeof n == "bigint" && n < e) {
    if (t) {
      if (Tt < n)
        return n;
    } else if (Tt <= n)
      return n;
  }
  throw new TypeError("Expected valid scalar: 0 < scalar < max");
}
function zh(n) {
  return n[0] &= 248, n[31] &= 127, n[31] |= 64, n;
}
function iu(n) {
  if (n = typeof n == "bigint" || typeof n == "number" ? ru(Ii(n, nu)) : Dn(n), n.length !== 32)
    throw new Error("Expected 32 bytes");
  return n;
}
function ou(n) {
  const e = zh(n.slice(0, 32)), t = n.slice(32, 64), r = xi(e), o = et.BASE.multiply(r), i = o.toRawBytes();
  return { head: e, prefix: t, scalar: r, point: o, pointBytes: i };
}
let Rr;
function Si(...n) {
  if (typeof Rr != "function")
    throw new Error("utils.sha512Sync must be set to use sync methods");
  return Rr(...n);
}
async function su(n) {
  return ou(await gr.sha512(iu(n)));
}
function Hs(n) {
  return ou(Si(iu(n)));
}
function Hh(n) {
  return Hs(n).pointBytes;
}
function Wh(n, e) {
  n = Dn(n);
  const { prefix: t, scalar: r, pointBytes: o } = Hs(e), i = xi(Si(t, n)), c = et.BASE.multiply(i), u = xi(Si(c.toRawBytes(), o, n)), d = Y(i + u * r, Ve.l);
  return new Ur(c, d).toRawBytes();
}
function Gh(n, e, t) {
  e = Dn(e), t instanceof et || (t = et.fromHex(t, !1));
  const { r, s: o } = n instanceof Ur ? n.assertValidity() : Ur.fromHex(n), i = Te.BASE.multiplyUnsafe(o);
  return { r, s: o, SB: i, pub: t, msg: e };
}
function jh(n, e, t, r) {
  const o = xi(r), i = Te.fromAffine(n).multiplyUnsafe(o);
  return Te.fromAffine(e).add(i).subtract(t).multiplyUnsafe(Ve.h).equals(Te.ZERO);
}
function Qh(n, e, t) {
  const { r, SB: o, msg: i, pub: c } = Gh(n, e, t), u = Si(r.toRawBytes(), c.toRawBytes(), i);
  return jh(c, r, o, u);
}
const au = {
  getExtendedPublicKey: Hs,
  getPublicKey: Hh,
  sign: Wh,
  verify: Qh
};
et.BASE._setWindowSize(8);
const Bn = {
  node: Ps,
  web: typeof self == "object" && "crypto" in self ? self.crypto : void 0
}, gr = {
  bytesToHex: Vr,
  hexToBytes: Fs,
  concatBytes: ja,
  getExtendedPublicKey: su,
  mod: Y,
  invert: zi,
  TORSION_SUBGROUP: [
    "0100000000000000000000000000000000000000000000000000000000000000",
    "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac037a",
    "0000000000000000000000000000000000000000000000000000000000000080",
    "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc05",
    "ecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f",
    "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc85",
    "0000000000000000000000000000000000000000000000000000000000000000",
    "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac03fa"
  ],
  hashToPrivateScalar: (n) => {
    if (n = Dn(n), n.length < 40 || n.length > 1024)
      throw new Error("Expected 40-1024 bytes of private key as per FIPS 186");
    return Y(Zr(n), Ve.l - Ce) + Ce;
  },
  randomBytes: (n = 32) => {
    if (Bn.web)
      return Bn.web.getRandomValues(new Uint8Array(n));
    if (Bn.node) {
      const { randomBytes: e } = Bn.node;
      return new Uint8Array(e(n).buffer);
    } else
      throw new Error("The environment doesn't have randomBytes function");
  },
  randomPrivateKey: () => gr.randomBytes(32),
  sha512: async (...n) => {
    const e = ja(...n);
    if (Bn.web) {
      const t = await Bn.web.subtle.digest("SHA-512", e.buffer);
      return new Uint8Array(t);
    } else {
      if (Bn.node)
        return Uint8Array.from(Bn.node.createHash("sha512").update(e).digest());
      throw new Error("The environment doesn't have sha512 function");
    }
  },
  precompute(n = 8, e = et.BASE) {
    const t = e.equals(et.BASE) ? e : new et(e.x, e.y);
    return t._setWindowSize(n), t.multiply(fr), t;
  },
  sha512Sync: void 0
};
Object.defineProperties(gr, {
  sha512Sync: {
    configurable: !1,
    get() {
      return Rr;
    },
    set(n) {
      Rr || (Rr = n);
    }
  }
});
var Ws = { exports: {} };
const qh = /* @__PURE__ */ Di(Ps);
(function(n) {
  (function(e, t) {
    function r(M, l) {
      if (!M)
        throw new Error(l || "Assertion failed");
    }
    function o(M, l) {
      M.super_ = l;
      var g = function() {
      };
      g.prototype = l.prototype, M.prototype = new g(), M.prototype.constructor = M;
    }
    function i(M, l, g) {
      if (i.isBN(M))
        return M;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, M !== null && ((l === "le" || l === "be") && (g = l, l = 10), this._init(M || 0, l || 10, g || "be"));
    }
    typeof e == "object" ? e.exports = i : t.BN = i, i.BN = i, i.wordSize = 26;
    var c;
    try {
      typeof window < "u" && typeof window.Buffer < "u" ? c = window.Buffer : c = qh.Buffer;
    } catch {
    }
    i.isBN = function(l) {
      return l instanceof i ? !0 : l !== null && typeof l == "object" && l.constructor.wordSize === i.wordSize && Array.isArray(l.words);
    }, i.max = function(l, g) {
      return l.cmp(g) > 0 ? l : g;
    }, i.min = function(l, g) {
      return l.cmp(g) < 0 ? l : g;
    }, i.prototype._init = function(l, g, m) {
      if (typeof l == "number")
        return this._initNumber(l, g, m);
      if (typeof l == "object")
        return this._initArray(l, g, m);
      g === "hex" && (g = 16), r(g === (g | 0) && g >= 2 && g <= 36), l = l.toString().replace(/\s+/g, "");
      var y = 0;
      l[0] === "-" && (y++, this.negative = 1), y < l.length && (g === 16 ? this._parseHex(l, y, m) : (this._parseBase(l, g, y), m === "le" && this._initArray(this.toArray(), g, m)));
    }, i.prototype._initNumber = function(l, g, m) {
      l < 0 && (this.negative = 1, l = -l), l < 67108864 ? (this.words = [l & 67108863], this.length = 1) : l < 4503599627370496 ? (this.words = [
        l & 67108863,
        l / 67108864 & 67108863
      ], this.length = 2) : (r(l < 9007199254740992), this.words = [
        l & 67108863,
        l / 67108864 & 67108863,
        1
      ], this.length = 3), m === "le" && this._initArray(this.toArray(), g, m);
    }, i.prototype._initArray = function(l, g, m) {
      if (r(typeof l.length == "number"), l.length <= 0)
        return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(l.length / 3), this.words = new Array(this.length);
      for (var y = 0; y < this.length; y++)
        this.words[y] = 0;
      var x, k, C = 0;
      if (m === "be")
        for (y = l.length - 1, x = 0; y >= 0; y -= 3)
          k = l[y] | l[y - 1] << 8 | l[y - 2] << 16, this.words[x] |= k << C & 67108863, this.words[x + 1] = k >>> 26 - C & 67108863, C += 24, C >= 26 && (C -= 26, x++);
      else if (m === "le")
        for (y = 0, x = 0; y < l.length; y += 3)
          k = l[y] | l[y + 1] << 8 | l[y + 2] << 16, this.words[x] |= k << C & 67108863, this.words[x + 1] = k >>> 26 - C & 67108863, C += 24, C >= 26 && (C -= 26, x++);
      return this._strip();
    };
    function u(M, l) {
      var g = M.charCodeAt(l);
      if (g >= 48 && g <= 57)
        return g - 48;
      if (g >= 65 && g <= 70)
        return g - 55;
      if (g >= 97 && g <= 102)
        return g - 87;
      r(!1, "Invalid character in " + M);
    }
    function d(M, l, g) {
      var m = u(M, g);
      return g - 1 >= l && (m |= u(M, g - 1) << 4), m;
    }
    i.prototype._parseHex = function(l, g, m) {
      this.length = Math.ceil((l.length - g) / 6), this.words = new Array(this.length);
      for (var y = 0; y < this.length; y++)
        this.words[y] = 0;
      var x = 0, k = 0, C;
      if (m === "be")
        for (y = l.length - 1; y >= g; y -= 2)
          C = d(l, g, y) << x, this.words[k] |= C & 67108863, x >= 18 ? (x -= 18, k += 1, this.words[k] |= C >>> 26) : x += 8;
      else {
        var b = l.length - g;
        for (y = b % 2 === 0 ? g + 1 : g; y < l.length; y += 2)
          C = d(l, g, y) << x, this.words[k] |= C & 67108863, x >= 18 ? (x -= 18, k += 1, this.words[k] |= C >>> 26) : x += 8;
      }
      this._strip();
    };
    function w(M, l, g, m) {
      for (var y = 0, x = 0, k = Math.min(M.length, g), C = l; C < k; C++) {
        var b = M.charCodeAt(C) - 48;
        y *= m, b >= 49 ? x = b - 49 + 10 : b >= 17 ? x = b - 17 + 10 : x = b, r(b >= 0 && x < m, "Invalid character"), y += x;
      }
      return y;
    }
    i.prototype._parseBase = function(l, g, m) {
      this.words = [0], this.length = 1;
      for (var y = 0, x = 1; x <= 67108863; x *= g)
        y++;
      y--, x = x / g | 0;
      for (var k = l.length - m, C = k % y, b = Math.min(k, k - C) + m, h = 0, B = m; B < b; B += y)
        h = w(l, B, B + y, g), this.imuln(x), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h);
      if (C !== 0) {
        var q = 1;
        for (h = w(l, B, l.length, g), B = 0; B < C; B++)
          q *= g;
        this.imuln(q), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h);
      }
      this._strip();
    }, i.prototype.copy = function(l) {
      l.words = new Array(this.length);
      for (var g = 0; g < this.length; g++)
        l.words[g] = this.words[g];
      l.length = this.length, l.negative = this.negative, l.red = this.red;
    };
    function v(M, l) {
      M.words = l.words, M.length = l.length, M.negative = l.negative, M.red = l.red;
    }
    if (i.prototype._move = function(l) {
      v(l, this);
    }, i.prototype.clone = function() {
      var l = new i(null);
      return this.copy(l), l;
    }, i.prototype._expand = function(l) {
      for (; this.length < l; )
        this.words[this.length++] = 0;
      return this;
    }, i.prototype._strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0; )
        this.length--;
      return this._normSign();
    }, i.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, typeof Symbol < "u" && typeof Symbol.for == "function")
      try {
        i.prototype[Symbol.for("nodejs.util.inspect.custom")] = I;
      } catch {
        i.prototype.inspect = I;
      }
    else
      i.prototype.inspect = I;
    function I() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }
    var _ = [
      "",
      "0",
      "00",
      "000",
      "0000",
      "00000",
      "000000",
      "0000000",
      "00000000",
      "000000000",
      "0000000000",
      "00000000000",
      "000000000000",
      "0000000000000",
      "00000000000000",
      "000000000000000",
      "0000000000000000",
      "00000000000000000",
      "000000000000000000",
      "0000000000000000000",
      "00000000000000000000",
      "000000000000000000000",
      "0000000000000000000000",
      "00000000000000000000000",
      "000000000000000000000000",
      "0000000000000000000000000"
    ], E = [
      0,
      0,
      25,
      16,
      12,
      11,
      10,
      9,
      8,
      8,
      7,
      7,
      7,
      7,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5
    ], N = [
      0,
      0,
      33554432,
      43046721,
      16777216,
      48828125,
      60466176,
      40353607,
      16777216,
      43046721,
      1e7,
      19487171,
      35831808,
      62748517,
      7529536,
      11390625,
      16777216,
      24137569,
      34012224,
      47045881,
      64e6,
      4084101,
      5153632,
      6436343,
      7962624,
      9765625,
      11881376,
      14348907,
      17210368,
      20511149,
      243e5,
      28629151,
      33554432,
      39135393,
      45435424,
      52521875,
      60466176
    ];
    i.prototype.toString = function(l, g) {
      l = l || 10, g = g | 0 || 1;
      var m;
      if (l === 16 || l === "hex") {
        m = "";
        for (var y = 0, x = 0, k = 0; k < this.length; k++) {
          var C = this.words[k], b = ((C << y | x) & 16777215).toString(16);
          x = C >>> 24 - y & 16777215, y += 2, y >= 26 && (y -= 26, k--), x !== 0 || k !== this.length - 1 ? m = _[6 - b.length] + b + m : m = b + m;
        }
        for (x !== 0 && (m = x.toString(16) + m); m.length % g !== 0; )
          m = "0" + m;
        return this.negative !== 0 && (m = "-" + m), m;
      }
      if (l === (l | 0) && l >= 2 && l <= 36) {
        var h = E[l], B = N[l];
        m = "";
        var q = this.clone();
        for (q.negative = 0; !q.isZero(); ) {
          var Z = q.modrn(B).toString(l);
          q = q.idivn(B), q.isZero() ? m = Z + m : m = _[h - Z.length] + Z + m;
        }
        for (this.isZero() && (m = "0" + m); m.length % g !== 0; )
          m = "0" + m;
        return this.negative !== 0 && (m = "-" + m), m;
      }
      r(!1, "Base should be between 2 and 36");
    }, i.prototype.toNumber = function() {
      var l = this.words[0];
      return this.length === 2 ? l += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? l += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -l : l;
    }, i.prototype.toJSON = function() {
      return this.toString(16, 2);
    }, c && (i.prototype.toBuffer = function(l, g) {
      return this.toArrayLike(c, l, g);
    }), i.prototype.toArray = function(l, g) {
      return this.toArrayLike(Array, l, g);
    };
    var T = function(l, g) {
      return l.allocUnsafe ? l.allocUnsafe(g) : new l(g);
    };
    i.prototype.toArrayLike = function(l, g, m) {
      this._strip();
      var y = this.byteLength(), x = m || Math.max(1, y);
      r(y <= x, "byte array longer than desired length"), r(x > 0, "Requested array length <= 0");
      var k = T(l, x), C = g === "le" ? "LE" : "BE";
      return this["_toArrayLike" + C](k, y), k;
    }, i.prototype._toArrayLikeLE = function(l, g) {
      for (var m = 0, y = 0, x = 0, k = 0; x < this.length; x++) {
        var C = this.words[x] << k | y;
        l[m++] = C & 255, m < l.length && (l[m++] = C >> 8 & 255), m < l.length && (l[m++] = C >> 16 & 255), k === 6 ? (m < l.length && (l[m++] = C >> 24 & 255), y = 0, k = 0) : (y = C >>> 24, k += 2);
      }
      if (m < l.length)
        for (l[m++] = y; m < l.length; )
          l[m++] = 0;
    }, i.prototype._toArrayLikeBE = function(l, g) {
      for (var m = l.length - 1, y = 0, x = 0, k = 0; x < this.length; x++) {
        var C = this.words[x] << k | y;
        l[m--] = C & 255, m >= 0 && (l[m--] = C >> 8 & 255), m >= 0 && (l[m--] = C >> 16 & 255), k === 6 ? (m >= 0 && (l[m--] = C >> 24 & 255), y = 0, k = 0) : (y = C >>> 24, k += 2);
      }
      if (m >= 0)
        for (l[m--] = y; m >= 0; )
          l[m--] = 0;
    }, Math.clz32 ? i.prototype._countBits = function(l) {
      return 32 - Math.clz32(l);
    } : i.prototype._countBits = function(l) {
      var g = l, m = 0;
      return g >= 4096 && (m += 13, g >>>= 13), g >= 64 && (m += 7, g >>>= 7), g >= 8 && (m += 4, g >>>= 4), g >= 2 && (m += 2, g >>>= 2), m + g;
    }, i.prototype._zeroBits = function(l) {
      if (l === 0)
        return 26;
      var g = l, m = 0;
      return (g & 8191) === 0 && (m += 13, g >>>= 13), (g & 127) === 0 && (m += 7, g >>>= 7), (g & 15) === 0 && (m += 4, g >>>= 4), (g & 3) === 0 && (m += 2, g >>>= 2), (g & 1) === 0 && m++, m;
    }, i.prototype.bitLength = function() {
      var l = this.words[this.length - 1], g = this._countBits(l);
      return (this.length - 1) * 26 + g;
    };
    function U(M) {
      for (var l = new Array(M.bitLength()), g = 0; g < l.length; g++) {
        var m = g / 26 | 0, y = g % 26;
        l[g] = M.words[m] >>> y & 1;
      }
      return l;
    }
    i.prototype.zeroBits = function() {
      if (this.isZero())
        return 0;
      for (var l = 0, g = 0; g < this.length; g++) {
        var m = this._zeroBits(this.words[g]);
        if (l += m, m !== 26)
          break;
      }
      return l;
    }, i.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, i.prototype.toTwos = function(l) {
      return this.negative !== 0 ? this.abs().inotn(l).iaddn(1) : this.clone();
    }, i.prototype.fromTwos = function(l) {
      return this.testn(l - 1) ? this.notn(l).iaddn(1).ineg() : this.clone();
    }, i.prototype.isNeg = function() {
      return this.negative !== 0;
    }, i.prototype.neg = function() {
      return this.clone().ineg();
    }, i.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, i.prototype.iuor = function(l) {
      for (; this.length < l.length; )
        this.words[this.length++] = 0;
      for (var g = 0; g < l.length; g++)
        this.words[g] = this.words[g] | l.words[g];
      return this._strip();
    }, i.prototype.ior = function(l) {
      return r((this.negative | l.negative) === 0), this.iuor(l);
    }, i.prototype.or = function(l) {
      return this.length > l.length ? this.clone().ior(l) : l.clone().ior(this);
    }, i.prototype.uor = function(l) {
      return this.length > l.length ? this.clone().iuor(l) : l.clone().iuor(this);
    }, i.prototype.iuand = function(l) {
      var g;
      this.length > l.length ? g = l : g = this;
      for (var m = 0; m < g.length; m++)
        this.words[m] = this.words[m] & l.words[m];
      return this.length = g.length, this._strip();
    }, i.prototype.iand = function(l) {
      return r((this.negative | l.negative) === 0), this.iuand(l);
    }, i.prototype.and = function(l) {
      return this.length > l.length ? this.clone().iand(l) : l.clone().iand(this);
    }, i.prototype.uand = function(l) {
      return this.length > l.length ? this.clone().iuand(l) : l.clone().iuand(this);
    }, i.prototype.iuxor = function(l) {
      var g, m;
      this.length > l.length ? (g = this, m = l) : (g = l, m = this);
      for (var y = 0; y < m.length; y++)
        this.words[y] = g.words[y] ^ m.words[y];
      if (this !== g)
        for (; y < g.length; y++)
          this.words[y] = g.words[y];
      return this.length = g.length, this._strip();
    }, i.prototype.ixor = function(l) {
      return r((this.negative | l.negative) === 0), this.iuxor(l);
    }, i.prototype.xor = function(l) {
      return this.length > l.length ? this.clone().ixor(l) : l.clone().ixor(this);
    }, i.prototype.uxor = function(l) {
      return this.length > l.length ? this.clone().iuxor(l) : l.clone().iuxor(this);
    }, i.prototype.inotn = function(l) {
      r(typeof l == "number" && l >= 0);
      var g = Math.ceil(l / 26) | 0, m = l % 26;
      this._expand(g), m > 0 && g--;
      for (var y = 0; y < g; y++)
        this.words[y] = ~this.words[y] & 67108863;
      return m > 0 && (this.words[y] = ~this.words[y] & 67108863 >> 26 - m), this._strip();
    }, i.prototype.notn = function(l) {
      return this.clone().inotn(l);
    }, i.prototype.setn = function(l, g) {
      r(typeof l == "number" && l >= 0);
      var m = l / 26 | 0, y = l % 26;
      return this._expand(m + 1), g ? this.words[m] = this.words[m] | 1 << y : this.words[m] = this.words[m] & ~(1 << y), this._strip();
    }, i.prototype.iadd = function(l) {
      var g;
      if (this.negative !== 0 && l.negative === 0)
        return this.negative = 0, g = this.isub(l), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && l.negative !== 0)
        return l.negative = 0, g = this.isub(l), l.negative = 1, g._normSign();
      var m, y;
      this.length > l.length ? (m = this, y = l) : (m = l, y = this);
      for (var x = 0, k = 0; k < y.length; k++)
        g = (m.words[k] | 0) + (y.words[k] | 0) + x, this.words[k] = g & 67108863, x = g >>> 26;
      for (; x !== 0 && k < m.length; k++)
        g = (m.words[k] | 0) + x, this.words[k] = g & 67108863, x = g >>> 26;
      if (this.length = m.length, x !== 0)
        this.words[this.length] = x, this.length++;
      else if (m !== this)
        for (; k < m.length; k++)
          this.words[k] = m.words[k];
      return this;
    }, i.prototype.add = function(l) {
      var g;
      return l.negative !== 0 && this.negative === 0 ? (l.negative = 0, g = this.sub(l), l.negative ^= 1, g) : l.negative === 0 && this.negative !== 0 ? (this.negative = 0, g = l.sub(this), this.negative = 1, g) : this.length > l.length ? this.clone().iadd(l) : l.clone().iadd(this);
    }, i.prototype.isub = function(l) {
      if (l.negative !== 0) {
        l.negative = 0;
        var g = this.iadd(l);
        return l.negative = 1, g._normSign();
      } else if (this.negative !== 0)
        return this.negative = 0, this.iadd(l), this.negative = 1, this._normSign();
      var m = this.cmp(l);
      if (m === 0)
        return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var y, x;
      m > 0 ? (y = this, x = l) : (y = l, x = this);
      for (var k = 0, C = 0; C < x.length; C++)
        g = (y.words[C] | 0) - (x.words[C] | 0) + k, k = g >> 26, this.words[C] = g & 67108863;
      for (; k !== 0 && C < y.length; C++)
        g = (y.words[C] | 0) + k, k = g >> 26, this.words[C] = g & 67108863;
      if (k === 0 && C < y.length && y !== this)
        for (; C < y.length; C++)
          this.words[C] = y.words[C];
      return this.length = Math.max(this.length, C), y !== this && (this.negative = 1), this._strip();
    }, i.prototype.sub = function(l) {
      return this.clone().isub(l);
    };
    function P(M, l, g) {
      g.negative = l.negative ^ M.negative;
      var m = M.length + l.length | 0;
      g.length = m, m = m - 1 | 0;
      var y = M.words[0] | 0, x = l.words[0] | 0, k = y * x, C = k & 67108863, b = k / 67108864 | 0;
      g.words[0] = C;
      for (var h = 1; h < m; h++) {
        for (var B = b >>> 26, q = b & 67108863, Z = Math.min(h, l.length - 1), V = Math.max(0, h - M.length + 1); V <= Z; V++) {
          var oe = h - V | 0;
          y = M.words[oe] | 0, x = l.words[V] | 0, k = y * x + q, B += k / 67108864 | 0, q = k & 67108863;
        }
        g.words[h] = q | 0, b = B | 0;
      }
      return b !== 0 ? g.words[h] = b | 0 : g.length--, g._strip();
    }
    var F = function(l, g, m) {
      var y = l.words, x = g.words, k = m.words, C = 0, b, h, B, q = y[0] | 0, Z = q & 8191, V = q >>> 13, oe = y[1] | 0, $ = oe & 8191, se = oe >>> 13, be = y[2] | 0, ve = be & 8191, K = be >>> 13, We = y[3] | 0, xe = We & 8191, Ge = We >>> 13, ir = y[4] | 0, ze = ir & 8191, Qe = ir >>> 13, or = y[5] | 0, je = or & 8191, ke = or >>> 13, qe = y[6] | 0, He = qe & 8191, Ye = qe >>> 13, rt = y[7] | 0, Ke = rt & 8191, f = rt >>> 13, s = y[8] | 0, a = s & 8191, p = s >>> 13, A = y[9] | 0, S = A & 8191, R = A >>> 13, J = x[0] | 0, ie = J & 8191, ne = J >>> 13, ye = x[1] | 0, ee = ye & 8191, it = ye >>> 13, ya = x[2] | 0, ot = ya & 8191, st = ya >>> 13, wa = x[3] | 0, at = wa & 8191, ct = wa >>> 13, ma = x[4] | 0, ut = ma & 8191, lt = ma >>> 13, ba = x[5] | 0, ft = ba & 8191, ht = ba >>> 13, Aa = x[6] | 0, dt = Aa & 8191, pt = Aa >>> 13, va = x[7] | 0, gt = va & 8191, yt = va >>> 13, Ea = x[8] | 0, wt = Ea & 8191, mt = Ea >>> 13, xa = x[9] | 0, bt = xa & 8191, At = xa >>> 13;
      m.negative = l.negative ^ g.negative, m.length = 19, b = Math.imul(Z, ie), h = Math.imul(Z, ne), h = h + Math.imul(V, ie) | 0, B = Math.imul(V, ne);
      var ro = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (ro >>> 26) | 0, ro &= 67108863, b = Math.imul($, ie), h = Math.imul($, ne), h = h + Math.imul(se, ie) | 0, B = Math.imul(se, ne), b = b + Math.imul(Z, ee) | 0, h = h + Math.imul(Z, it) | 0, h = h + Math.imul(V, ee) | 0, B = B + Math.imul(V, it) | 0;
      var io = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (io >>> 26) | 0, io &= 67108863, b = Math.imul(ve, ie), h = Math.imul(ve, ne), h = h + Math.imul(K, ie) | 0, B = Math.imul(K, ne), b = b + Math.imul($, ee) | 0, h = h + Math.imul($, it) | 0, h = h + Math.imul(se, ee) | 0, B = B + Math.imul(se, it) | 0, b = b + Math.imul(Z, ot) | 0, h = h + Math.imul(Z, st) | 0, h = h + Math.imul(V, ot) | 0, B = B + Math.imul(V, st) | 0;
      var oo = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (oo >>> 26) | 0, oo &= 67108863, b = Math.imul(xe, ie), h = Math.imul(xe, ne), h = h + Math.imul(Ge, ie) | 0, B = Math.imul(Ge, ne), b = b + Math.imul(ve, ee) | 0, h = h + Math.imul(ve, it) | 0, h = h + Math.imul(K, ee) | 0, B = B + Math.imul(K, it) | 0, b = b + Math.imul($, ot) | 0, h = h + Math.imul($, st) | 0, h = h + Math.imul(se, ot) | 0, B = B + Math.imul(se, st) | 0, b = b + Math.imul(Z, at) | 0, h = h + Math.imul(Z, ct) | 0, h = h + Math.imul(V, at) | 0, B = B + Math.imul(V, ct) | 0;
      var so = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (so >>> 26) | 0, so &= 67108863, b = Math.imul(ze, ie), h = Math.imul(ze, ne), h = h + Math.imul(Qe, ie) | 0, B = Math.imul(Qe, ne), b = b + Math.imul(xe, ee) | 0, h = h + Math.imul(xe, it) | 0, h = h + Math.imul(Ge, ee) | 0, B = B + Math.imul(Ge, it) | 0, b = b + Math.imul(ve, ot) | 0, h = h + Math.imul(ve, st) | 0, h = h + Math.imul(K, ot) | 0, B = B + Math.imul(K, st) | 0, b = b + Math.imul($, at) | 0, h = h + Math.imul($, ct) | 0, h = h + Math.imul(se, at) | 0, B = B + Math.imul(se, ct) | 0, b = b + Math.imul(Z, ut) | 0, h = h + Math.imul(Z, lt) | 0, h = h + Math.imul(V, ut) | 0, B = B + Math.imul(V, lt) | 0;
      var ao = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (ao >>> 26) | 0, ao &= 67108863, b = Math.imul(je, ie), h = Math.imul(je, ne), h = h + Math.imul(ke, ie) | 0, B = Math.imul(ke, ne), b = b + Math.imul(ze, ee) | 0, h = h + Math.imul(ze, it) | 0, h = h + Math.imul(Qe, ee) | 0, B = B + Math.imul(Qe, it) | 0, b = b + Math.imul(xe, ot) | 0, h = h + Math.imul(xe, st) | 0, h = h + Math.imul(Ge, ot) | 0, B = B + Math.imul(Ge, st) | 0, b = b + Math.imul(ve, at) | 0, h = h + Math.imul(ve, ct) | 0, h = h + Math.imul(K, at) | 0, B = B + Math.imul(K, ct) | 0, b = b + Math.imul($, ut) | 0, h = h + Math.imul($, lt) | 0, h = h + Math.imul(se, ut) | 0, B = B + Math.imul(se, lt) | 0, b = b + Math.imul(Z, ft) | 0, h = h + Math.imul(Z, ht) | 0, h = h + Math.imul(V, ft) | 0, B = B + Math.imul(V, ht) | 0;
      var co = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (co >>> 26) | 0, co &= 67108863, b = Math.imul(He, ie), h = Math.imul(He, ne), h = h + Math.imul(Ye, ie) | 0, B = Math.imul(Ye, ne), b = b + Math.imul(je, ee) | 0, h = h + Math.imul(je, it) | 0, h = h + Math.imul(ke, ee) | 0, B = B + Math.imul(ke, it) | 0, b = b + Math.imul(ze, ot) | 0, h = h + Math.imul(ze, st) | 0, h = h + Math.imul(Qe, ot) | 0, B = B + Math.imul(Qe, st) | 0, b = b + Math.imul(xe, at) | 0, h = h + Math.imul(xe, ct) | 0, h = h + Math.imul(Ge, at) | 0, B = B + Math.imul(Ge, ct) | 0, b = b + Math.imul(ve, ut) | 0, h = h + Math.imul(ve, lt) | 0, h = h + Math.imul(K, ut) | 0, B = B + Math.imul(K, lt) | 0, b = b + Math.imul($, ft) | 0, h = h + Math.imul($, ht) | 0, h = h + Math.imul(se, ft) | 0, B = B + Math.imul(se, ht) | 0, b = b + Math.imul(Z, dt) | 0, h = h + Math.imul(Z, pt) | 0, h = h + Math.imul(V, dt) | 0, B = B + Math.imul(V, pt) | 0;
      var uo = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (uo >>> 26) | 0, uo &= 67108863, b = Math.imul(Ke, ie), h = Math.imul(Ke, ne), h = h + Math.imul(f, ie) | 0, B = Math.imul(f, ne), b = b + Math.imul(He, ee) | 0, h = h + Math.imul(He, it) | 0, h = h + Math.imul(Ye, ee) | 0, B = B + Math.imul(Ye, it) | 0, b = b + Math.imul(je, ot) | 0, h = h + Math.imul(je, st) | 0, h = h + Math.imul(ke, ot) | 0, B = B + Math.imul(ke, st) | 0, b = b + Math.imul(ze, at) | 0, h = h + Math.imul(ze, ct) | 0, h = h + Math.imul(Qe, at) | 0, B = B + Math.imul(Qe, ct) | 0, b = b + Math.imul(xe, ut) | 0, h = h + Math.imul(xe, lt) | 0, h = h + Math.imul(Ge, ut) | 0, B = B + Math.imul(Ge, lt) | 0, b = b + Math.imul(ve, ft) | 0, h = h + Math.imul(ve, ht) | 0, h = h + Math.imul(K, ft) | 0, B = B + Math.imul(K, ht) | 0, b = b + Math.imul($, dt) | 0, h = h + Math.imul($, pt) | 0, h = h + Math.imul(se, dt) | 0, B = B + Math.imul(se, pt) | 0, b = b + Math.imul(Z, gt) | 0, h = h + Math.imul(Z, yt) | 0, h = h + Math.imul(V, gt) | 0, B = B + Math.imul(V, yt) | 0;
      var lo = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (lo >>> 26) | 0, lo &= 67108863, b = Math.imul(a, ie), h = Math.imul(a, ne), h = h + Math.imul(p, ie) | 0, B = Math.imul(p, ne), b = b + Math.imul(Ke, ee) | 0, h = h + Math.imul(Ke, it) | 0, h = h + Math.imul(f, ee) | 0, B = B + Math.imul(f, it) | 0, b = b + Math.imul(He, ot) | 0, h = h + Math.imul(He, st) | 0, h = h + Math.imul(Ye, ot) | 0, B = B + Math.imul(Ye, st) | 0, b = b + Math.imul(je, at) | 0, h = h + Math.imul(je, ct) | 0, h = h + Math.imul(ke, at) | 0, B = B + Math.imul(ke, ct) | 0, b = b + Math.imul(ze, ut) | 0, h = h + Math.imul(ze, lt) | 0, h = h + Math.imul(Qe, ut) | 0, B = B + Math.imul(Qe, lt) | 0, b = b + Math.imul(xe, ft) | 0, h = h + Math.imul(xe, ht) | 0, h = h + Math.imul(Ge, ft) | 0, B = B + Math.imul(Ge, ht) | 0, b = b + Math.imul(ve, dt) | 0, h = h + Math.imul(ve, pt) | 0, h = h + Math.imul(K, dt) | 0, B = B + Math.imul(K, pt) | 0, b = b + Math.imul($, gt) | 0, h = h + Math.imul($, yt) | 0, h = h + Math.imul(se, gt) | 0, B = B + Math.imul(se, yt) | 0, b = b + Math.imul(Z, wt) | 0, h = h + Math.imul(Z, mt) | 0, h = h + Math.imul(V, wt) | 0, B = B + Math.imul(V, mt) | 0;
      var fo = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (fo >>> 26) | 0, fo &= 67108863, b = Math.imul(S, ie), h = Math.imul(S, ne), h = h + Math.imul(R, ie) | 0, B = Math.imul(R, ne), b = b + Math.imul(a, ee) | 0, h = h + Math.imul(a, it) | 0, h = h + Math.imul(p, ee) | 0, B = B + Math.imul(p, it) | 0, b = b + Math.imul(Ke, ot) | 0, h = h + Math.imul(Ke, st) | 0, h = h + Math.imul(f, ot) | 0, B = B + Math.imul(f, st) | 0, b = b + Math.imul(He, at) | 0, h = h + Math.imul(He, ct) | 0, h = h + Math.imul(Ye, at) | 0, B = B + Math.imul(Ye, ct) | 0, b = b + Math.imul(je, ut) | 0, h = h + Math.imul(je, lt) | 0, h = h + Math.imul(ke, ut) | 0, B = B + Math.imul(ke, lt) | 0, b = b + Math.imul(ze, ft) | 0, h = h + Math.imul(ze, ht) | 0, h = h + Math.imul(Qe, ft) | 0, B = B + Math.imul(Qe, ht) | 0, b = b + Math.imul(xe, dt) | 0, h = h + Math.imul(xe, pt) | 0, h = h + Math.imul(Ge, dt) | 0, B = B + Math.imul(Ge, pt) | 0, b = b + Math.imul(ve, gt) | 0, h = h + Math.imul(ve, yt) | 0, h = h + Math.imul(K, gt) | 0, B = B + Math.imul(K, yt) | 0, b = b + Math.imul($, wt) | 0, h = h + Math.imul($, mt) | 0, h = h + Math.imul(se, wt) | 0, B = B + Math.imul(se, mt) | 0, b = b + Math.imul(Z, bt) | 0, h = h + Math.imul(Z, At) | 0, h = h + Math.imul(V, bt) | 0, B = B + Math.imul(V, At) | 0;
      var ho = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (ho >>> 26) | 0, ho &= 67108863, b = Math.imul(S, ee), h = Math.imul(S, it), h = h + Math.imul(R, ee) | 0, B = Math.imul(R, it), b = b + Math.imul(a, ot) | 0, h = h + Math.imul(a, st) | 0, h = h + Math.imul(p, ot) | 0, B = B + Math.imul(p, st) | 0, b = b + Math.imul(Ke, at) | 0, h = h + Math.imul(Ke, ct) | 0, h = h + Math.imul(f, at) | 0, B = B + Math.imul(f, ct) | 0, b = b + Math.imul(He, ut) | 0, h = h + Math.imul(He, lt) | 0, h = h + Math.imul(Ye, ut) | 0, B = B + Math.imul(Ye, lt) | 0, b = b + Math.imul(je, ft) | 0, h = h + Math.imul(je, ht) | 0, h = h + Math.imul(ke, ft) | 0, B = B + Math.imul(ke, ht) | 0, b = b + Math.imul(ze, dt) | 0, h = h + Math.imul(ze, pt) | 0, h = h + Math.imul(Qe, dt) | 0, B = B + Math.imul(Qe, pt) | 0, b = b + Math.imul(xe, gt) | 0, h = h + Math.imul(xe, yt) | 0, h = h + Math.imul(Ge, gt) | 0, B = B + Math.imul(Ge, yt) | 0, b = b + Math.imul(ve, wt) | 0, h = h + Math.imul(ve, mt) | 0, h = h + Math.imul(K, wt) | 0, B = B + Math.imul(K, mt) | 0, b = b + Math.imul($, bt) | 0, h = h + Math.imul($, At) | 0, h = h + Math.imul(se, bt) | 0, B = B + Math.imul(se, At) | 0;
      var po = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (po >>> 26) | 0, po &= 67108863, b = Math.imul(S, ot), h = Math.imul(S, st), h = h + Math.imul(R, ot) | 0, B = Math.imul(R, st), b = b + Math.imul(a, at) | 0, h = h + Math.imul(a, ct) | 0, h = h + Math.imul(p, at) | 0, B = B + Math.imul(p, ct) | 0, b = b + Math.imul(Ke, ut) | 0, h = h + Math.imul(Ke, lt) | 0, h = h + Math.imul(f, ut) | 0, B = B + Math.imul(f, lt) | 0, b = b + Math.imul(He, ft) | 0, h = h + Math.imul(He, ht) | 0, h = h + Math.imul(Ye, ft) | 0, B = B + Math.imul(Ye, ht) | 0, b = b + Math.imul(je, dt) | 0, h = h + Math.imul(je, pt) | 0, h = h + Math.imul(ke, dt) | 0, B = B + Math.imul(ke, pt) | 0, b = b + Math.imul(ze, gt) | 0, h = h + Math.imul(ze, yt) | 0, h = h + Math.imul(Qe, gt) | 0, B = B + Math.imul(Qe, yt) | 0, b = b + Math.imul(xe, wt) | 0, h = h + Math.imul(xe, mt) | 0, h = h + Math.imul(Ge, wt) | 0, B = B + Math.imul(Ge, mt) | 0, b = b + Math.imul(ve, bt) | 0, h = h + Math.imul(ve, At) | 0, h = h + Math.imul(K, bt) | 0, B = B + Math.imul(K, At) | 0;
      var go = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (go >>> 26) | 0, go &= 67108863, b = Math.imul(S, at), h = Math.imul(S, ct), h = h + Math.imul(R, at) | 0, B = Math.imul(R, ct), b = b + Math.imul(a, ut) | 0, h = h + Math.imul(a, lt) | 0, h = h + Math.imul(p, ut) | 0, B = B + Math.imul(p, lt) | 0, b = b + Math.imul(Ke, ft) | 0, h = h + Math.imul(Ke, ht) | 0, h = h + Math.imul(f, ft) | 0, B = B + Math.imul(f, ht) | 0, b = b + Math.imul(He, dt) | 0, h = h + Math.imul(He, pt) | 0, h = h + Math.imul(Ye, dt) | 0, B = B + Math.imul(Ye, pt) | 0, b = b + Math.imul(je, gt) | 0, h = h + Math.imul(je, yt) | 0, h = h + Math.imul(ke, gt) | 0, B = B + Math.imul(ke, yt) | 0, b = b + Math.imul(ze, wt) | 0, h = h + Math.imul(ze, mt) | 0, h = h + Math.imul(Qe, wt) | 0, B = B + Math.imul(Qe, mt) | 0, b = b + Math.imul(xe, bt) | 0, h = h + Math.imul(xe, At) | 0, h = h + Math.imul(Ge, bt) | 0, B = B + Math.imul(Ge, At) | 0;
      var yo = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (yo >>> 26) | 0, yo &= 67108863, b = Math.imul(S, ut), h = Math.imul(S, lt), h = h + Math.imul(R, ut) | 0, B = Math.imul(R, lt), b = b + Math.imul(a, ft) | 0, h = h + Math.imul(a, ht) | 0, h = h + Math.imul(p, ft) | 0, B = B + Math.imul(p, ht) | 0, b = b + Math.imul(Ke, dt) | 0, h = h + Math.imul(Ke, pt) | 0, h = h + Math.imul(f, dt) | 0, B = B + Math.imul(f, pt) | 0, b = b + Math.imul(He, gt) | 0, h = h + Math.imul(He, yt) | 0, h = h + Math.imul(Ye, gt) | 0, B = B + Math.imul(Ye, yt) | 0, b = b + Math.imul(je, wt) | 0, h = h + Math.imul(je, mt) | 0, h = h + Math.imul(ke, wt) | 0, B = B + Math.imul(ke, mt) | 0, b = b + Math.imul(ze, bt) | 0, h = h + Math.imul(ze, At) | 0, h = h + Math.imul(Qe, bt) | 0, B = B + Math.imul(Qe, At) | 0;
      var wo = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (wo >>> 26) | 0, wo &= 67108863, b = Math.imul(S, ft), h = Math.imul(S, ht), h = h + Math.imul(R, ft) | 0, B = Math.imul(R, ht), b = b + Math.imul(a, dt) | 0, h = h + Math.imul(a, pt) | 0, h = h + Math.imul(p, dt) | 0, B = B + Math.imul(p, pt) | 0, b = b + Math.imul(Ke, gt) | 0, h = h + Math.imul(Ke, yt) | 0, h = h + Math.imul(f, gt) | 0, B = B + Math.imul(f, yt) | 0, b = b + Math.imul(He, wt) | 0, h = h + Math.imul(He, mt) | 0, h = h + Math.imul(Ye, wt) | 0, B = B + Math.imul(Ye, mt) | 0, b = b + Math.imul(je, bt) | 0, h = h + Math.imul(je, At) | 0, h = h + Math.imul(ke, bt) | 0, B = B + Math.imul(ke, At) | 0;
      var mo = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (mo >>> 26) | 0, mo &= 67108863, b = Math.imul(S, dt), h = Math.imul(S, pt), h = h + Math.imul(R, dt) | 0, B = Math.imul(R, pt), b = b + Math.imul(a, gt) | 0, h = h + Math.imul(a, yt) | 0, h = h + Math.imul(p, gt) | 0, B = B + Math.imul(p, yt) | 0, b = b + Math.imul(Ke, wt) | 0, h = h + Math.imul(Ke, mt) | 0, h = h + Math.imul(f, wt) | 0, B = B + Math.imul(f, mt) | 0, b = b + Math.imul(He, bt) | 0, h = h + Math.imul(He, At) | 0, h = h + Math.imul(Ye, bt) | 0, B = B + Math.imul(Ye, At) | 0;
      var bo = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (bo >>> 26) | 0, bo &= 67108863, b = Math.imul(S, gt), h = Math.imul(S, yt), h = h + Math.imul(R, gt) | 0, B = Math.imul(R, yt), b = b + Math.imul(a, wt) | 0, h = h + Math.imul(a, mt) | 0, h = h + Math.imul(p, wt) | 0, B = B + Math.imul(p, mt) | 0, b = b + Math.imul(Ke, bt) | 0, h = h + Math.imul(Ke, At) | 0, h = h + Math.imul(f, bt) | 0, B = B + Math.imul(f, At) | 0;
      var Ao = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (Ao >>> 26) | 0, Ao &= 67108863, b = Math.imul(S, wt), h = Math.imul(S, mt), h = h + Math.imul(R, wt) | 0, B = Math.imul(R, mt), b = b + Math.imul(a, bt) | 0, h = h + Math.imul(a, At) | 0, h = h + Math.imul(p, bt) | 0, B = B + Math.imul(p, At) | 0;
      var vo = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (vo >>> 26) | 0, vo &= 67108863, b = Math.imul(S, bt), h = Math.imul(S, At), h = h + Math.imul(R, bt) | 0, B = Math.imul(R, At);
      var Eo = (C + b | 0) + ((h & 8191) << 13) | 0;
      return C = (B + (h >>> 13) | 0) + (Eo >>> 26) | 0, Eo &= 67108863, k[0] = ro, k[1] = io, k[2] = oo, k[3] = so, k[4] = ao, k[5] = co, k[6] = uo, k[7] = lo, k[8] = fo, k[9] = ho, k[10] = po, k[11] = go, k[12] = yo, k[13] = wo, k[14] = mo, k[15] = bo, k[16] = Ao, k[17] = vo, k[18] = Eo, C !== 0 && (k[19] = C, m.length++), m;
    };
    Math.imul || (F = P);
    function O(M, l, g) {
      g.negative = l.negative ^ M.negative, g.length = M.length + l.length;
      for (var m = 0, y = 0, x = 0; x < g.length - 1; x++) {
        var k = y;
        y = 0;
        for (var C = m & 67108863, b = Math.min(x, l.length - 1), h = Math.max(0, x - M.length + 1); h <= b; h++) {
          var B = x - h, q = M.words[B] | 0, Z = l.words[h] | 0, V = q * Z, oe = V & 67108863;
          k = k + (V / 67108864 | 0) | 0, oe = oe + C | 0, C = oe & 67108863, k = k + (oe >>> 26) | 0, y += k >>> 26, k &= 67108863;
        }
        g.words[x] = C, m = k, k = y;
      }
      return m !== 0 ? g.words[x] = m : g.length--, g._strip();
    }
    function z(M, l, g) {
      return O(M, l, g);
    }
    i.prototype.mulTo = function(l, g) {
      var m, y = this.length + l.length;
      return this.length === 10 && l.length === 10 ? m = F(this, l, g) : y < 63 ? m = P(this, l, g) : y < 1024 ? m = O(this, l, g) : m = z(this, l, g), m;
    }, i.prototype.mul = function(l) {
      var g = new i(null);
      return g.words = new Array(this.length + l.length), this.mulTo(l, g);
    }, i.prototype.mulf = function(l) {
      var g = new i(null);
      return g.words = new Array(this.length + l.length), z(this, l, g);
    }, i.prototype.imul = function(l) {
      return this.clone().mulTo(l, this);
    }, i.prototype.imuln = function(l) {
      var g = l < 0;
      g && (l = -l), r(typeof l == "number"), r(l < 67108864);
      for (var m = 0, y = 0; y < this.length; y++) {
        var x = (this.words[y] | 0) * l, k = (x & 67108863) + (m & 67108863);
        m >>= 26, m += x / 67108864 | 0, m += k >>> 26, this.words[y] = k & 67108863;
      }
      return m !== 0 && (this.words[y] = m, this.length++), g ? this.ineg() : this;
    }, i.prototype.muln = function(l) {
      return this.clone().imuln(l);
    }, i.prototype.sqr = function() {
      return this.mul(this);
    }, i.prototype.isqr = function() {
      return this.imul(this.clone());
    }, i.prototype.pow = function(l) {
      var g = U(l);
      if (g.length === 0)
        return new i(1);
      for (var m = this, y = 0; y < g.length && g[y] === 0; y++, m = m.sqr())
        ;
      if (++y < g.length)
        for (var x = m.sqr(); y < g.length; y++, x = x.sqr())
          g[y] !== 0 && (m = m.mul(x));
      return m;
    }, i.prototype.iushln = function(l) {
      r(typeof l == "number" && l >= 0);
      var g = l % 26, m = (l - g) / 26, y = 67108863 >>> 26 - g << 26 - g, x;
      if (g !== 0) {
        var k = 0;
        for (x = 0; x < this.length; x++) {
          var C = this.words[x] & y, b = (this.words[x] | 0) - C << g;
          this.words[x] = b | k, k = C >>> 26 - g;
        }
        k && (this.words[x] = k, this.length++);
      }
      if (m !== 0) {
        for (x = this.length - 1; x >= 0; x--)
          this.words[x + m] = this.words[x];
        for (x = 0; x < m; x++)
          this.words[x] = 0;
        this.length += m;
      }
      return this._strip();
    }, i.prototype.ishln = function(l) {
      return r(this.negative === 0), this.iushln(l);
    }, i.prototype.iushrn = function(l, g, m) {
      r(typeof l == "number" && l >= 0);
      var y;
      g ? y = (g - g % 26) / 26 : y = 0;
      var x = l % 26, k = Math.min((l - x) / 26, this.length), C = 67108863 ^ 67108863 >>> x << x, b = m;
      if (y -= k, y = Math.max(0, y), b) {
        for (var h = 0; h < k; h++)
          b.words[h] = this.words[h];
        b.length = k;
      }
      if (k !== 0)
        if (this.length > k)
          for (this.length -= k, h = 0; h < this.length; h++)
            this.words[h] = this.words[h + k];
        else
          this.words[0] = 0, this.length = 1;
      var B = 0;
      for (h = this.length - 1; h >= 0 && (B !== 0 || h >= y); h--) {
        var q = this.words[h] | 0;
        this.words[h] = B << 26 - x | q >>> x, B = q & C;
      }
      return b && B !== 0 && (b.words[b.length++] = B), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
    }, i.prototype.ishrn = function(l, g, m) {
      return r(this.negative === 0), this.iushrn(l, g, m);
    }, i.prototype.shln = function(l) {
      return this.clone().ishln(l);
    }, i.prototype.ushln = function(l) {
      return this.clone().iushln(l);
    }, i.prototype.shrn = function(l) {
      return this.clone().ishrn(l);
    }, i.prototype.ushrn = function(l) {
      return this.clone().iushrn(l);
    }, i.prototype.testn = function(l) {
      r(typeof l == "number" && l >= 0);
      var g = l % 26, m = (l - g) / 26, y = 1 << g;
      if (this.length <= m)
        return !1;
      var x = this.words[m];
      return !!(x & y);
    }, i.prototype.imaskn = function(l) {
      r(typeof l == "number" && l >= 0);
      var g = l % 26, m = (l - g) / 26;
      if (r(this.negative === 0, "imaskn works only with positive numbers"), this.length <= m)
        return this;
      if (g !== 0 && m++, this.length = Math.min(m, this.length), g !== 0) {
        var y = 67108863 ^ 67108863 >>> g << g;
        this.words[this.length - 1] &= y;
      }
      return this._strip();
    }, i.prototype.maskn = function(l) {
      return this.clone().imaskn(l);
    }, i.prototype.iaddn = function(l) {
      return r(typeof l == "number"), r(l < 67108864), l < 0 ? this.isubn(-l) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= l ? (this.words[0] = l - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(l), this.negative = 1, this) : this._iaddn(l);
    }, i.prototype._iaddn = function(l) {
      this.words[0] += l;
      for (var g = 0; g < this.length && this.words[g] >= 67108864; g++)
        this.words[g] -= 67108864, g === this.length - 1 ? this.words[g + 1] = 1 : this.words[g + 1]++;
      return this.length = Math.max(this.length, g + 1), this;
    }, i.prototype.isubn = function(l) {
      if (r(typeof l == "number"), r(l < 67108864), l < 0)
        return this.iaddn(-l);
      if (this.negative !== 0)
        return this.negative = 0, this.iaddn(l), this.negative = 1, this;
      if (this.words[0] -= l, this.length === 1 && this.words[0] < 0)
        this.words[0] = -this.words[0], this.negative = 1;
      else
        for (var g = 0; g < this.length && this.words[g] < 0; g++)
          this.words[g] += 67108864, this.words[g + 1] -= 1;
      return this._strip();
    }, i.prototype.addn = function(l) {
      return this.clone().iaddn(l);
    }, i.prototype.subn = function(l) {
      return this.clone().isubn(l);
    }, i.prototype.iabs = function() {
      return this.negative = 0, this;
    }, i.prototype.abs = function() {
      return this.clone().iabs();
    }, i.prototype._ishlnsubmul = function(l, g, m) {
      var y = l.length + m, x;
      this._expand(y);
      var k, C = 0;
      for (x = 0; x < l.length; x++) {
        k = (this.words[x + m] | 0) + C;
        var b = (l.words[x] | 0) * g;
        k -= b & 67108863, C = (k >> 26) - (b / 67108864 | 0), this.words[x + m] = k & 67108863;
      }
      for (; x < this.length - m; x++)
        k = (this.words[x + m] | 0) + C, C = k >> 26, this.words[x + m] = k & 67108863;
      if (C === 0)
        return this._strip();
      for (r(C === -1), C = 0, x = 0; x < this.length; x++)
        k = -(this.words[x] | 0) + C, C = k >> 26, this.words[x] = k & 67108863;
      return this.negative = 1, this._strip();
    }, i.prototype._wordDiv = function(l, g) {
      var m = this.length - l.length, y = this.clone(), x = l, k = x.words[x.length - 1] | 0, C = this._countBits(k);
      m = 26 - C, m !== 0 && (x = x.ushln(m), y.iushln(m), k = x.words[x.length - 1] | 0);
      var b = y.length - x.length, h;
      if (g !== "mod") {
        h = new i(null), h.length = b + 1, h.words = new Array(h.length);
        for (var B = 0; B < h.length; B++)
          h.words[B] = 0;
      }
      var q = y.clone()._ishlnsubmul(x, 1, b);
      q.negative === 0 && (y = q, h && (h.words[b] = 1));
      for (var Z = b - 1; Z >= 0; Z--) {
        var V = (y.words[x.length + Z] | 0) * 67108864 + (y.words[x.length + Z - 1] | 0);
        for (V = Math.min(V / k | 0, 67108863), y._ishlnsubmul(x, V, Z); y.negative !== 0; )
          V--, y.negative = 0, y._ishlnsubmul(x, 1, Z), y.isZero() || (y.negative ^= 1);
        h && (h.words[Z] = V);
      }
      return h && h._strip(), y._strip(), g !== "div" && m !== 0 && y.iushrn(m), {
        div: h || null,
        mod: y
      };
    }, i.prototype.divmod = function(l, g, m) {
      if (r(!l.isZero()), this.isZero())
        return {
          div: new i(0),
          mod: new i(0)
        };
      var y, x, k;
      return this.negative !== 0 && l.negative === 0 ? (k = this.neg().divmod(l, g), g !== "mod" && (y = k.div.neg()), g !== "div" && (x = k.mod.neg(), m && x.negative !== 0 && x.iadd(l)), {
        div: y,
        mod: x
      }) : this.negative === 0 && l.negative !== 0 ? (k = this.divmod(l.neg(), g), g !== "mod" && (y = k.div.neg()), {
        div: y,
        mod: k.mod
      }) : (this.negative & l.negative) !== 0 ? (k = this.neg().divmod(l.neg(), g), g !== "div" && (x = k.mod.neg(), m && x.negative !== 0 && x.isub(l)), {
        div: k.div,
        mod: x
      }) : l.length > this.length || this.cmp(l) < 0 ? {
        div: new i(0),
        mod: this
      } : l.length === 1 ? g === "div" ? {
        div: this.divn(l.words[0]),
        mod: null
      } : g === "mod" ? {
        div: null,
        mod: new i(this.modrn(l.words[0]))
      } : {
        div: this.divn(l.words[0]),
        mod: new i(this.modrn(l.words[0]))
      } : this._wordDiv(l, g);
    }, i.prototype.div = function(l) {
      return this.divmod(l, "div", !1).div;
    }, i.prototype.mod = function(l) {
      return this.divmod(l, "mod", !1).mod;
    }, i.prototype.umod = function(l) {
      return this.divmod(l, "mod", !0).mod;
    }, i.prototype.divRound = function(l) {
      var g = this.divmod(l);
      if (g.mod.isZero())
        return g.div;
      var m = g.div.negative !== 0 ? g.mod.isub(l) : g.mod, y = l.ushrn(1), x = l.andln(1), k = m.cmp(y);
      return k < 0 || x === 1 && k === 0 ? g.div : g.div.negative !== 0 ? g.div.isubn(1) : g.div.iaddn(1);
    }, i.prototype.modrn = function(l) {
      var g = l < 0;
      g && (l = -l), r(l <= 67108863);
      for (var m = (1 << 26) % l, y = 0, x = this.length - 1; x >= 0; x--)
        y = (m * y + (this.words[x] | 0)) % l;
      return g ? -y : y;
    }, i.prototype.modn = function(l) {
      return this.modrn(l);
    }, i.prototype.idivn = function(l) {
      var g = l < 0;
      g && (l = -l), r(l <= 67108863);
      for (var m = 0, y = this.length - 1; y >= 0; y--) {
        var x = (this.words[y] | 0) + m * 67108864;
        this.words[y] = x / l | 0, m = x % l;
      }
      return this._strip(), g ? this.ineg() : this;
    }, i.prototype.divn = function(l) {
      return this.clone().idivn(l);
    }, i.prototype.egcd = function(l) {
      r(l.negative === 0), r(!l.isZero());
      var g = this, m = l.clone();
      g.negative !== 0 ? g = g.umod(l) : g = g.clone();
      for (var y = new i(1), x = new i(0), k = new i(0), C = new i(1), b = 0; g.isEven() && m.isEven(); )
        g.iushrn(1), m.iushrn(1), ++b;
      for (var h = m.clone(), B = g.clone(); !g.isZero(); ) {
        for (var q = 0, Z = 1; (g.words[0] & Z) === 0 && q < 26; ++q, Z <<= 1)
          ;
        if (q > 0)
          for (g.iushrn(q); q-- > 0; )
            (y.isOdd() || x.isOdd()) && (y.iadd(h), x.isub(B)), y.iushrn(1), x.iushrn(1);
        for (var V = 0, oe = 1; (m.words[0] & oe) === 0 && V < 26; ++V, oe <<= 1)
          ;
        if (V > 0)
          for (m.iushrn(V); V-- > 0; )
            (k.isOdd() || C.isOdd()) && (k.iadd(h), C.isub(B)), k.iushrn(1), C.iushrn(1);
        g.cmp(m) >= 0 ? (g.isub(m), y.isub(k), x.isub(C)) : (m.isub(g), k.isub(y), C.isub(x));
      }
      return {
        a: k,
        b: C,
        gcd: m.iushln(b)
      };
    }, i.prototype._invmp = function(l) {
      r(l.negative === 0), r(!l.isZero());
      var g = this, m = l.clone();
      g.negative !== 0 ? g = g.umod(l) : g = g.clone();
      for (var y = new i(1), x = new i(0), k = m.clone(); g.cmpn(1) > 0 && m.cmpn(1) > 0; ) {
        for (var C = 0, b = 1; (g.words[0] & b) === 0 && C < 26; ++C, b <<= 1)
          ;
        if (C > 0)
          for (g.iushrn(C); C-- > 0; )
            y.isOdd() && y.iadd(k), y.iushrn(1);
        for (var h = 0, B = 1; (m.words[0] & B) === 0 && h < 26; ++h, B <<= 1)
          ;
        if (h > 0)
          for (m.iushrn(h); h-- > 0; )
            x.isOdd() && x.iadd(k), x.iushrn(1);
        g.cmp(m) >= 0 ? (g.isub(m), y.isub(x)) : (m.isub(g), x.isub(y));
      }
      var q;
      return g.cmpn(1) === 0 ? q = y : q = x, q.cmpn(0) < 0 && q.iadd(l), q;
    }, i.prototype.gcd = function(l) {
      if (this.isZero())
        return l.abs();
      if (l.isZero())
        return this.abs();
      var g = this.clone(), m = l.clone();
      g.negative = 0, m.negative = 0;
      for (var y = 0; g.isEven() && m.isEven(); y++)
        g.iushrn(1), m.iushrn(1);
      do {
        for (; g.isEven(); )
          g.iushrn(1);
        for (; m.isEven(); )
          m.iushrn(1);
        var x = g.cmp(m);
        if (x < 0) {
          var k = g;
          g = m, m = k;
        } else if (x === 0 || m.cmpn(1) === 0)
          break;
        g.isub(m);
      } while (!0);
      return m.iushln(y);
    }, i.prototype.invm = function(l) {
      return this.egcd(l).a.umod(l);
    }, i.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, i.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, i.prototype.andln = function(l) {
      return this.words[0] & l;
    }, i.prototype.bincn = function(l) {
      r(typeof l == "number");
      var g = l % 26, m = (l - g) / 26, y = 1 << g;
      if (this.length <= m)
        return this._expand(m + 1), this.words[m] |= y, this;
      for (var x = y, k = m; x !== 0 && k < this.length; k++) {
        var C = this.words[k] | 0;
        C += x, x = C >>> 26, C &= 67108863, this.words[k] = C;
      }
      return x !== 0 && (this.words[k] = x, this.length++), this;
    }, i.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, i.prototype.cmpn = function(l) {
      var g = l < 0;
      if (this.negative !== 0 && !g)
        return -1;
      if (this.negative === 0 && g)
        return 1;
      this._strip();
      var m;
      if (this.length > 1)
        m = 1;
      else {
        g && (l = -l), r(l <= 67108863, "Number is too big");
        var y = this.words[0] | 0;
        m = y === l ? 0 : y < l ? -1 : 1;
      }
      return this.negative !== 0 ? -m | 0 : m;
    }, i.prototype.cmp = function(l) {
      if (this.negative !== 0 && l.negative === 0)
        return -1;
      if (this.negative === 0 && l.negative !== 0)
        return 1;
      var g = this.ucmp(l);
      return this.negative !== 0 ? -g | 0 : g;
    }, i.prototype.ucmp = function(l) {
      if (this.length > l.length)
        return 1;
      if (this.length < l.length)
        return -1;
      for (var g = 0, m = this.length - 1; m >= 0; m--) {
        var y = this.words[m] | 0, x = l.words[m] | 0;
        if (y !== x) {
          y < x ? g = -1 : y > x && (g = 1);
          break;
        }
      }
      return g;
    }, i.prototype.gtn = function(l) {
      return this.cmpn(l) === 1;
    }, i.prototype.gt = function(l) {
      return this.cmp(l) === 1;
    }, i.prototype.gten = function(l) {
      return this.cmpn(l) >= 0;
    }, i.prototype.gte = function(l) {
      return this.cmp(l) >= 0;
    }, i.prototype.ltn = function(l) {
      return this.cmpn(l) === -1;
    }, i.prototype.lt = function(l) {
      return this.cmp(l) === -1;
    }, i.prototype.lten = function(l) {
      return this.cmpn(l) <= 0;
    }, i.prototype.lte = function(l) {
      return this.cmp(l) <= 0;
    }, i.prototype.eqn = function(l) {
      return this.cmpn(l) === 0;
    }, i.prototype.eq = function(l) {
      return this.cmp(l) === 0;
    }, i.red = function(l) {
      return new ge(l);
    }, i.prototype.toRed = function(l) {
      return r(!this.red, "Already a number in reduction context"), r(this.negative === 0, "red works only with positives"), l.convertTo(this)._forceRed(l);
    }, i.prototype.fromRed = function() {
      return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, i.prototype._forceRed = function(l) {
      return this.red = l, this;
    }, i.prototype.forceRed = function(l) {
      return r(!this.red, "Already a number in reduction context"), this._forceRed(l);
    }, i.prototype.redAdd = function(l) {
      return r(this.red, "redAdd works only with red numbers"), this.red.add(this, l);
    }, i.prototype.redIAdd = function(l) {
      return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, l);
    }, i.prototype.redSub = function(l) {
      return r(this.red, "redSub works only with red numbers"), this.red.sub(this, l);
    }, i.prototype.redISub = function(l) {
      return r(this.red, "redISub works only with red numbers"), this.red.isub(this, l);
    }, i.prototype.redShl = function(l) {
      return r(this.red, "redShl works only with red numbers"), this.red.shl(this, l);
    }, i.prototype.redMul = function(l) {
      return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, l), this.red.mul(this, l);
    }, i.prototype.redIMul = function(l) {
      return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, l), this.red.imul(this, l);
    }, i.prototype.redSqr = function() {
      return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, i.prototype.redISqr = function() {
      return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, i.prototype.redSqrt = function() {
      return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, i.prototype.redInvm = function() {
      return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, i.prototype.redNeg = function() {
      return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, i.prototype.redPow = function(l) {
      return r(this.red && !l.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, l);
    };
    var L = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };
    function W(M, l) {
      this.name = M, this.p = new i(l, 16), this.n = this.p.bitLength(), this.k = new i(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    W.prototype._tmp = function() {
      var l = new i(null);
      return l.words = new Array(Math.ceil(this.n / 13)), l;
    }, W.prototype.ireduce = function(l) {
      var g = l, m;
      do
        this.split(g, this.tmp), g = this.imulK(g), g = g.iadd(this.tmp), m = g.bitLength();
      while (m > this.n);
      var y = m < this.n ? -1 : g.ucmp(this.p);
      return y === 0 ? (g.words[0] = 0, g.length = 1) : y > 0 ? g.isub(this.p) : g.strip !== void 0 ? g.strip() : g._strip(), g;
    }, W.prototype.split = function(l, g) {
      l.iushrn(this.n, 0, g);
    }, W.prototype.imulK = function(l) {
      return l.imul(this.k);
    };
    function j() {
      W.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    o(j, W), j.prototype.split = function(l, g) {
      for (var m = 4194303, y = Math.min(l.length, 9), x = 0; x < y; x++)
        g.words[x] = l.words[x];
      if (g.length = y, l.length <= 9) {
        l.words[0] = 0, l.length = 1;
        return;
      }
      var k = l.words[9];
      for (g.words[g.length++] = k & m, x = 10; x < l.length; x++) {
        var C = l.words[x] | 0;
        l.words[x - 10] = (C & m) << 4 | k >>> 22, k = C;
      }
      k >>>= 22, l.words[x - 10] = k, k === 0 && l.length > 10 ? l.length -= 10 : l.length -= 9;
    }, j.prototype.imulK = function(l) {
      l.words[l.length] = 0, l.words[l.length + 1] = 0, l.length += 2;
      for (var g = 0, m = 0; m < l.length; m++) {
        var y = l.words[m] | 0;
        g += y * 977, l.words[m] = g & 67108863, g = y * 64 + (g / 67108864 | 0);
      }
      return l.words[l.length - 1] === 0 && (l.length--, l.words[l.length - 1] === 0 && l.length--), l;
    };
    function Q() {
      W.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    o(Q, W);
    function le() {
      W.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    o(le, W);
    function Se() {
      W.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    o(Se, W), Se.prototype.imulK = function(l) {
      for (var g = 0, m = 0; m < l.length; m++) {
        var y = (l.words[m] | 0) * 19 + g, x = y & 67108863;
        y >>>= 26, l.words[m] = x, g = y;
      }
      return g !== 0 && (l.words[l.length++] = g), l;
    }, i._prime = function(l) {
      if (L[l])
        return L[l];
      var g;
      if (l === "k256")
        g = new j();
      else if (l === "p224")
        g = new Q();
      else if (l === "p192")
        g = new le();
      else if (l === "p25519")
        g = new Se();
      else
        throw new Error("Unknown prime " + l);
      return L[l] = g, g;
    };
    function ge(M) {
      if (typeof M == "string") {
        var l = i._prime(M);
        this.m = l.p, this.prime = l;
      } else
        r(M.gtn(1), "modulus must be greater than 1"), this.m = M, this.prime = null;
    }
    ge.prototype._verify1 = function(l) {
      r(l.negative === 0, "red works only with positives"), r(l.red, "red works only with red numbers");
    }, ge.prototype._verify2 = function(l, g) {
      r((l.negative | g.negative) === 0, "red works only with positives"), r(
        l.red && l.red === g.red,
        "red works only with red numbers"
      );
    }, ge.prototype.imod = function(l) {
      return this.prime ? this.prime.ireduce(l)._forceRed(this) : (v(l, l.umod(this.m)._forceRed(this)), l);
    }, ge.prototype.neg = function(l) {
      return l.isZero() ? l.clone() : this.m.sub(l)._forceRed(this);
    }, ge.prototype.add = function(l, g) {
      this._verify2(l, g);
      var m = l.add(g);
      return m.cmp(this.m) >= 0 && m.isub(this.m), m._forceRed(this);
    }, ge.prototype.iadd = function(l, g) {
      this._verify2(l, g);
      var m = l.iadd(g);
      return m.cmp(this.m) >= 0 && m.isub(this.m), m;
    }, ge.prototype.sub = function(l, g) {
      this._verify2(l, g);
      var m = l.sub(g);
      return m.cmpn(0) < 0 && m.iadd(this.m), m._forceRed(this);
    }, ge.prototype.isub = function(l, g) {
      this._verify2(l, g);
      var m = l.isub(g);
      return m.cmpn(0) < 0 && m.iadd(this.m), m;
    }, ge.prototype.shl = function(l, g) {
      return this._verify1(l), this.imod(l.ushln(g));
    }, ge.prototype.imul = function(l, g) {
      return this._verify2(l, g), this.imod(l.imul(g));
    }, ge.prototype.mul = function(l, g) {
      return this._verify2(l, g), this.imod(l.mul(g));
    }, ge.prototype.isqr = function(l) {
      return this.imul(l, l.clone());
    }, ge.prototype.sqr = function(l) {
      return this.mul(l, l);
    }, ge.prototype.sqrt = function(l) {
      if (l.isZero())
        return l.clone();
      var g = this.m.andln(3);
      if (r(g % 2 === 1), g === 3) {
        var m = this.m.add(new i(1)).iushrn(2);
        return this.pow(l, m);
      }
      for (var y = this.m.subn(1), x = 0; !y.isZero() && y.andln(1) === 0; )
        x++, y.iushrn(1);
      r(!y.isZero());
      var k = new i(1).toRed(this), C = k.redNeg(), b = this.m.subn(1).iushrn(1), h = this.m.bitLength();
      for (h = new i(2 * h * h).toRed(this); this.pow(h, b).cmp(C) !== 0; )
        h.redIAdd(C);
      for (var B = this.pow(h, y), q = this.pow(l, y.addn(1).iushrn(1)), Z = this.pow(l, y), V = x; Z.cmp(k) !== 0; ) {
        for (var oe = Z, $ = 0; oe.cmp(k) !== 0; $++)
          oe = oe.redSqr();
        r($ < V);
        var se = this.pow(B, new i(1).iushln(V - $ - 1));
        q = q.redMul(se), B = se.redSqr(), Z = Z.redMul(B), V = $;
      }
      return q;
    }, ge.prototype.invm = function(l) {
      var g = l._invmp(this.m);
      return g.negative !== 0 ? (g.negative = 0, this.imod(g).redNeg()) : this.imod(g);
    }, ge.prototype.pow = function(l, g) {
      if (g.isZero())
        return new i(1).toRed(this);
      if (g.cmpn(1) === 0)
        return l.clone();
      var m = 4, y = new Array(1 << m);
      y[0] = new i(1).toRed(this), y[1] = l;
      for (var x = 2; x < y.length; x++)
        y[x] = this.mul(y[x - 1], l);
      var k = y[0], C = 0, b = 0, h = g.bitLength() % 26;
      for (h === 0 && (h = 26), x = g.length - 1; x >= 0; x--) {
        for (var B = g.words[x], q = h - 1; q >= 0; q--) {
          var Z = B >> q & 1;
          if (k !== y[0] && (k = this.sqr(k)), Z === 0 && C === 0) {
            b = 0;
            continue;
          }
          C <<= 1, C |= Z, b++, !(b !== m && (x !== 0 || q !== 0)) && (k = this.mul(k, y[C]), b = 0, C = 0);
        }
        h = 26;
      }
      return k;
    }, ge.prototype.convertTo = function(l) {
      var g = l.umod(this.m);
      return g === l ? g.clone() : g;
    }, ge.prototype.convertFrom = function(l) {
      var g = l.clone();
      return g.red = null, g;
    }, i.mont = function(l) {
      return new Me(l);
    };
    function Me(M) {
      ge.call(this, M), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new i(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    o(Me, ge), Me.prototype.convertTo = function(l) {
      return this.imod(l.ushln(this.shift));
    }, Me.prototype.convertFrom = function(l) {
      var g = this.imod(l.mul(this.rinv));
      return g.red = null, g;
    }, Me.prototype.imul = function(l, g) {
      if (l.isZero() || g.isZero())
        return l.words[0] = 0, l.length = 1, l;
      var m = l.imul(g), y = m.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), x = m.isub(y).iushrn(this.shift), k = x;
      return x.cmp(this.m) >= 0 ? k = x.isub(this.m) : x.cmpn(0) < 0 && (k = x.iadd(this.m)), k._forceRed(this);
    }, Me.prototype.mul = function(l, g) {
      if (l.isZero() || g.isZero())
        return new i(0)._forceRed(this);
      var m = l.mul(g), y = m.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), x = m.isub(y).iushrn(this.shift), k = x;
      return x.cmp(this.m) >= 0 ? k = x.isub(this.m) : x.cmpn(0) < 0 && (k = x.iadd(this.m)), k._forceRed(this);
    }, Me.prototype.invm = function(l) {
      var g = this.imod(l._invmp(this.m).mul(this.r2));
      return g._forceRed(this);
    };
  })(n, cn);
})(Ws);
const qa = Ws.exports;
var Pr = { exports: {} }, Gs = {};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(n) {
  const e = qr, t = Fi, r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  n.Buffer = u, n.SlowBuffer = F, n.INSPECT_MAX_BYTES = 50;
  const o = 2147483647;
  n.kMaxLength = o, u.TYPED_ARRAY_SUPPORT = i(), !u.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function i() {
    try {
      const f = new Uint8Array(1), s = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(s, Uint8Array.prototype), Object.setPrototypeOf(f, s), f.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(u.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (!!u.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(u.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (!!u.isBuffer(this))
        return this.byteOffset;
    }
  });
  function c(f) {
    if (f > o)
      throw new RangeError('The value "' + f + '" is invalid for option "size"');
    const s = new Uint8Array(f);
    return Object.setPrototypeOf(s, u.prototype), s;
  }
  function u(f, s, a) {
    if (typeof f == "number") {
      if (typeof s == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return I(f);
    }
    return d(f, s, a);
  }
  u.poolSize = 8192;
  function d(f, s, a) {
    if (typeof f == "string")
      return _(f, s);
    if (ArrayBuffer.isView(f))
      return N(f);
    if (f == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof f
      );
    if (qe(f, ArrayBuffer) || f && qe(f.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (qe(f, SharedArrayBuffer) || f && qe(f.buffer, SharedArrayBuffer)))
      return T(f, s, a);
    if (typeof f == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const p = f.valueOf && f.valueOf();
    if (p != null && p !== f)
      return u.from(p, s, a);
    const A = U(f);
    if (A)
      return A;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof f[Symbol.toPrimitive] == "function")
      return u.from(f[Symbol.toPrimitive]("string"), s, a);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof f
    );
  }
  u.from = function(f, s, a) {
    return d(f, s, a);
  }, Object.setPrototypeOf(u.prototype, Uint8Array.prototype), Object.setPrototypeOf(u, Uint8Array);
  function w(f) {
    if (typeof f != "number")
      throw new TypeError('"size" argument must be of type number');
    if (f < 0)
      throw new RangeError('The value "' + f + '" is invalid for option "size"');
  }
  function v(f, s, a) {
    return w(f), f <= 0 ? c(f) : s !== void 0 ? typeof a == "string" ? c(f).fill(s, a) : c(f).fill(s) : c(f);
  }
  u.alloc = function(f, s, a) {
    return v(f, s, a);
  };
  function I(f) {
    return w(f), c(f < 0 ? 0 : P(f) | 0);
  }
  u.allocUnsafe = function(f) {
    return I(f);
  }, u.allocUnsafeSlow = function(f) {
    return I(f);
  };
  function _(f, s) {
    if ((typeof s != "string" || s === "") && (s = "utf8"), !u.isEncoding(s))
      throw new TypeError("Unknown encoding: " + s);
    const a = O(f, s) | 0;
    let p = c(a);
    const A = p.write(f, s);
    return A !== a && (p = p.slice(0, A)), p;
  }
  function E(f) {
    const s = f.length < 0 ? 0 : P(f.length) | 0, a = c(s);
    for (let p = 0; p < s; p += 1)
      a[p] = f[p] & 255;
    return a;
  }
  function N(f) {
    if (qe(f, Uint8Array)) {
      const s = new Uint8Array(f);
      return T(s.buffer, s.byteOffset, s.byteLength);
    }
    return E(f);
  }
  function T(f, s, a) {
    if (s < 0 || f.byteLength < s)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (f.byteLength < s + (a || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let p;
    return s === void 0 && a === void 0 ? p = new Uint8Array(f) : a === void 0 ? p = new Uint8Array(f, s) : p = new Uint8Array(f, s, a), Object.setPrototypeOf(p, u.prototype), p;
  }
  function U(f) {
    if (u.isBuffer(f)) {
      const s = P(f.length) | 0, a = c(s);
      return a.length === 0 || f.copy(a, 0, 0, s), a;
    }
    if (f.length !== void 0)
      return typeof f.length != "number" || He(f.length) ? c(0) : E(f);
    if (f.type === "Buffer" && Array.isArray(f.data))
      return E(f.data);
  }
  function P(f) {
    if (f >= o)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
    return f | 0;
  }
  function F(f) {
    return +f != f && (f = 0), u.alloc(+f);
  }
  u.isBuffer = function(s) {
    return s != null && s._isBuffer === !0 && s !== u.prototype;
  }, u.compare = function(s, a) {
    if (qe(s, Uint8Array) && (s = u.from(s, s.offset, s.byteLength)), qe(a, Uint8Array) && (a = u.from(a, a.offset, a.byteLength)), !u.isBuffer(s) || !u.isBuffer(a))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (s === a)
      return 0;
    let p = s.length, A = a.length;
    for (let S = 0, R = Math.min(p, A); S < R; ++S)
      if (s[S] !== a[S]) {
        p = s[S], A = a[S];
        break;
      }
    return p < A ? -1 : A < p ? 1 : 0;
  }, u.isEncoding = function(s) {
    switch (String(s).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, u.concat = function(s, a) {
    if (!Array.isArray(s))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (s.length === 0)
      return u.alloc(0);
    let p;
    if (a === void 0)
      for (a = 0, p = 0; p < s.length; ++p)
        a += s[p].length;
    const A = u.allocUnsafe(a);
    let S = 0;
    for (p = 0; p < s.length; ++p) {
      let R = s[p];
      if (qe(R, Uint8Array))
        S + R.length > A.length ? (u.isBuffer(R) || (R = u.from(R)), R.copy(A, S)) : Uint8Array.prototype.set.call(
          A,
          R,
          S
        );
      else if (u.isBuffer(R))
        R.copy(A, S);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      S += R.length;
    }
    return A;
  };
  function O(f, s) {
    if (u.isBuffer(f))
      return f.length;
    if (ArrayBuffer.isView(f) || qe(f, ArrayBuffer))
      return f.byteLength;
    if (typeof f != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof f
      );
    const a = f.length, p = arguments.length > 2 && arguments[2] === !0;
    if (!p && a === 0)
      return 0;
    let A = !1;
    for (; ; )
      switch (s) {
        case "ascii":
        case "latin1":
        case "binary":
          return a;
        case "utf8":
        case "utf-8":
          return ze(f).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return a * 2;
        case "hex":
          return a >>> 1;
        case "base64":
          return je(f).length;
        default:
          if (A)
            return p ? -1 : ze(f).length;
          s = ("" + s).toLowerCase(), A = !0;
      }
  }
  u.byteLength = O;
  function z(f, s, a) {
    let p = !1;
    if ((s === void 0 || s < 0) && (s = 0), s > this.length || ((a === void 0 || a > this.length) && (a = this.length), a <= 0) || (a >>>= 0, s >>>= 0, a <= s))
      return "";
    for (f || (f = "utf8"); ; )
      switch (f) {
        case "hex":
          return k(this, s, a);
        case "utf8":
        case "utf-8":
          return l(this, s, a);
        case "ascii":
          return y(this, s, a);
        case "latin1":
        case "binary":
          return x(this, s, a);
        case "base64":
          return M(this, s, a);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return C(this, s, a);
        default:
          if (p)
            throw new TypeError("Unknown encoding: " + f);
          f = (f + "").toLowerCase(), p = !0;
      }
  }
  u.prototype._isBuffer = !0;
  function L(f, s, a) {
    const p = f[s];
    f[s] = f[a], f[a] = p;
  }
  u.prototype.swap16 = function() {
    const s = this.length;
    if (s % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let a = 0; a < s; a += 2)
      L(this, a, a + 1);
    return this;
  }, u.prototype.swap32 = function() {
    const s = this.length;
    if (s % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let a = 0; a < s; a += 4)
      L(this, a, a + 3), L(this, a + 1, a + 2);
    return this;
  }, u.prototype.swap64 = function() {
    const s = this.length;
    if (s % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let a = 0; a < s; a += 8)
      L(this, a, a + 7), L(this, a + 1, a + 6), L(this, a + 2, a + 5), L(this, a + 3, a + 4);
    return this;
  }, u.prototype.toString = function() {
    const s = this.length;
    return s === 0 ? "" : arguments.length === 0 ? l(this, 0, s) : z.apply(this, arguments);
  }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(s) {
    if (!u.isBuffer(s))
      throw new TypeError("Argument must be a Buffer");
    return this === s ? !0 : u.compare(this, s) === 0;
  }, u.prototype.inspect = function() {
    let s = "";
    const a = n.INSPECT_MAX_BYTES;
    return s = this.toString("hex", 0, a).replace(/(.{2})/g, "$1 ").trim(), this.length > a && (s += " ... "), "<Buffer " + s + ">";
  }, r && (u.prototype[r] = u.prototype.inspect), u.prototype.compare = function(s, a, p, A, S) {
    if (qe(s, Uint8Array) && (s = u.from(s, s.offset, s.byteLength)), !u.isBuffer(s))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof s
      );
    if (a === void 0 && (a = 0), p === void 0 && (p = s ? s.length : 0), A === void 0 && (A = 0), S === void 0 && (S = this.length), a < 0 || p > s.length || A < 0 || S > this.length)
      throw new RangeError("out of range index");
    if (A >= S && a >= p)
      return 0;
    if (A >= S)
      return -1;
    if (a >= p)
      return 1;
    if (a >>>= 0, p >>>= 0, A >>>= 0, S >>>= 0, this === s)
      return 0;
    let R = S - A, J = p - a;
    const ie = Math.min(R, J), ne = this.slice(A, S), ye = s.slice(a, p);
    for (let ee = 0; ee < ie; ++ee)
      if (ne[ee] !== ye[ee]) {
        R = ne[ee], J = ye[ee];
        break;
      }
    return R < J ? -1 : J < R ? 1 : 0;
  };
  function W(f, s, a, p, A) {
    if (f.length === 0)
      return -1;
    if (typeof a == "string" ? (p = a, a = 0) : a > 2147483647 ? a = 2147483647 : a < -2147483648 && (a = -2147483648), a = +a, He(a) && (a = A ? 0 : f.length - 1), a < 0 && (a = f.length + a), a >= f.length) {
      if (A)
        return -1;
      a = f.length - 1;
    } else if (a < 0)
      if (A)
        a = 0;
      else
        return -1;
    if (typeof s == "string" && (s = u.from(s, p)), u.isBuffer(s))
      return s.length === 0 ? -1 : j(f, s, a, p, A);
    if (typeof s == "number")
      return s = s & 255, typeof Uint8Array.prototype.indexOf == "function" ? A ? Uint8Array.prototype.indexOf.call(f, s, a) : Uint8Array.prototype.lastIndexOf.call(f, s, a) : j(f, [s], a, p, A);
    throw new TypeError("val must be string, number or Buffer");
  }
  function j(f, s, a, p, A) {
    let S = 1, R = f.length, J = s.length;
    if (p !== void 0 && (p = String(p).toLowerCase(), p === "ucs2" || p === "ucs-2" || p === "utf16le" || p === "utf-16le")) {
      if (f.length < 2 || s.length < 2)
        return -1;
      S = 2, R /= 2, J /= 2, a /= 2;
    }
    function ie(ye, ee) {
      return S === 1 ? ye[ee] : ye.readUInt16BE(ee * S);
    }
    let ne;
    if (A) {
      let ye = -1;
      for (ne = a; ne < R; ne++)
        if (ie(f, ne) === ie(s, ye === -1 ? 0 : ne - ye)) {
          if (ye === -1 && (ye = ne), ne - ye + 1 === J)
            return ye * S;
        } else
          ye !== -1 && (ne -= ne - ye), ye = -1;
    } else
      for (a + J > R && (a = R - J), ne = a; ne >= 0; ne--) {
        let ye = !0;
        for (let ee = 0; ee < J; ee++)
          if (ie(f, ne + ee) !== ie(s, ee)) {
            ye = !1;
            break;
          }
        if (ye)
          return ne;
      }
    return -1;
  }
  u.prototype.includes = function(s, a, p) {
    return this.indexOf(s, a, p) !== -1;
  }, u.prototype.indexOf = function(s, a, p) {
    return W(this, s, a, p, !0);
  }, u.prototype.lastIndexOf = function(s, a, p) {
    return W(this, s, a, p, !1);
  };
  function Q(f, s, a, p) {
    a = Number(a) || 0;
    const A = f.length - a;
    p ? (p = Number(p), p > A && (p = A)) : p = A;
    const S = s.length;
    p > S / 2 && (p = S / 2);
    let R;
    for (R = 0; R < p; ++R) {
      const J = parseInt(s.substr(R * 2, 2), 16);
      if (He(J))
        return R;
      f[a + R] = J;
    }
    return R;
  }
  function le(f, s, a, p) {
    return ke(ze(s, f.length - a), f, a, p);
  }
  function Se(f, s, a, p) {
    return ke(Qe(s), f, a, p);
  }
  function ge(f, s, a, p) {
    return ke(je(s), f, a, p);
  }
  function Me(f, s, a, p) {
    return ke(or(s, f.length - a), f, a, p);
  }
  u.prototype.write = function(s, a, p, A) {
    if (a === void 0)
      A = "utf8", p = this.length, a = 0;
    else if (p === void 0 && typeof a == "string")
      A = a, p = this.length, a = 0;
    else if (isFinite(a))
      a = a >>> 0, isFinite(p) ? (p = p >>> 0, A === void 0 && (A = "utf8")) : (A = p, p = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const S = this.length - a;
    if ((p === void 0 || p > S) && (p = S), s.length > 0 && (p < 0 || a < 0) || a > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    A || (A = "utf8");
    let R = !1;
    for (; ; )
      switch (A) {
        case "hex":
          return Q(this, s, a, p);
        case "utf8":
        case "utf-8":
          return le(this, s, a, p);
        case "ascii":
        case "latin1":
        case "binary":
          return Se(this, s, a, p);
        case "base64":
          return ge(this, s, a, p);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Me(this, s, a, p);
        default:
          if (R)
            throw new TypeError("Unknown encoding: " + A);
          A = ("" + A).toLowerCase(), R = !0;
      }
  }, u.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function M(f, s, a) {
    return s === 0 && a === f.length ? e.fromByteArray(f) : e.fromByteArray(f.slice(s, a));
  }
  function l(f, s, a) {
    a = Math.min(f.length, a);
    const p = [];
    let A = s;
    for (; A < a; ) {
      const S = f[A];
      let R = null, J = S > 239 ? 4 : S > 223 ? 3 : S > 191 ? 2 : 1;
      if (A + J <= a) {
        let ie, ne, ye, ee;
        switch (J) {
          case 1:
            S < 128 && (R = S);
            break;
          case 2:
            ie = f[A + 1], (ie & 192) === 128 && (ee = (S & 31) << 6 | ie & 63, ee > 127 && (R = ee));
            break;
          case 3:
            ie = f[A + 1], ne = f[A + 2], (ie & 192) === 128 && (ne & 192) === 128 && (ee = (S & 15) << 12 | (ie & 63) << 6 | ne & 63, ee > 2047 && (ee < 55296 || ee > 57343) && (R = ee));
            break;
          case 4:
            ie = f[A + 1], ne = f[A + 2], ye = f[A + 3], (ie & 192) === 128 && (ne & 192) === 128 && (ye & 192) === 128 && (ee = (S & 15) << 18 | (ie & 63) << 12 | (ne & 63) << 6 | ye & 63, ee > 65535 && ee < 1114112 && (R = ee));
        }
      }
      R === null ? (R = 65533, J = 1) : R > 65535 && (R -= 65536, p.push(R >>> 10 & 1023 | 55296), R = 56320 | R & 1023), p.push(R), A += J;
    }
    return m(p);
  }
  const g = 4096;
  function m(f) {
    const s = f.length;
    if (s <= g)
      return String.fromCharCode.apply(String, f);
    let a = "", p = 0;
    for (; p < s; )
      a += String.fromCharCode.apply(
        String,
        f.slice(p, p += g)
      );
    return a;
  }
  function y(f, s, a) {
    let p = "";
    a = Math.min(f.length, a);
    for (let A = s; A < a; ++A)
      p += String.fromCharCode(f[A] & 127);
    return p;
  }
  function x(f, s, a) {
    let p = "";
    a = Math.min(f.length, a);
    for (let A = s; A < a; ++A)
      p += String.fromCharCode(f[A]);
    return p;
  }
  function k(f, s, a) {
    const p = f.length;
    (!s || s < 0) && (s = 0), (!a || a < 0 || a > p) && (a = p);
    let A = "";
    for (let S = s; S < a; ++S)
      A += Ye[f[S]];
    return A;
  }
  function C(f, s, a) {
    const p = f.slice(s, a);
    let A = "";
    for (let S = 0; S < p.length - 1; S += 2)
      A += String.fromCharCode(p[S] + p[S + 1] * 256);
    return A;
  }
  u.prototype.slice = function(s, a) {
    const p = this.length;
    s = ~~s, a = a === void 0 ? p : ~~a, s < 0 ? (s += p, s < 0 && (s = 0)) : s > p && (s = p), a < 0 ? (a += p, a < 0 && (a = 0)) : a > p && (a = p), a < s && (a = s);
    const A = this.subarray(s, a);
    return Object.setPrototypeOf(A, u.prototype), A;
  };
  function b(f, s, a) {
    if (f % 1 !== 0 || f < 0)
      throw new RangeError("offset is not uint");
    if (f + s > a)
      throw new RangeError("Trying to access beyond buffer length");
  }
  u.prototype.readUintLE = u.prototype.readUIntLE = function(s, a, p) {
    s = s >>> 0, a = a >>> 0, p || b(s, a, this.length);
    let A = this[s], S = 1, R = 0;
    for (; ++R < a && (S *= 256); )
      A += this[s + R] * S;
    return A;
  }, u.prototype.readUintBE = u.prototype.readUIntBE = function(s, a, p) {
    s = s >>> 0, a = a >>> 0, p || b(s, a, this.length);
    let A = this[s + --a], S = 1;
    for (; a > 0 && (S *= 256); )
      A += this[s + --a] * S;
    return A;
  }, u.prototype.readUint8 = u.prototype.readUInt8 = function(s, a) {
    return s = s >>> 0, a || b(s, 1, this.length), this[s];
  }, u.prototype.readUint16LE = u.prototype.readUInt16LE = function(s, a) {
    return s = s >>> 0, a || b(s, 2, this.length), this[s] | this[s + 1] << 8;
  }, u.prototype.readUint16BE = u.prototype.readUInt16BE = function(s, a) {
    return s = s >>> 0, a || b(s, 2, this.length), this[s] << 8 | this[s + 1];
  }, u.prototype.readUint32LE = u.prototype.readUInt32LE = function(s, a) {
    return s = s >>> 0, a || b(s, 4, this.length), (this[s] | this[s + 1] << 8 | this[s + 2] << 16) + this[s + 3] * 16777216;
  }, u.prototype.readUint32BE = u.prototype.readUInt32BE = function(s, a) {
    return s = s >>> 0, a || b(s, 4, this.length), this[s] * 16777216 + (this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3]);
  }, u.prototype.readBigUInt64LE = rt(function(s) {
    s = s >>> 0, We(s, "offset");
    const a = this[s], p = this[s + 7];
    (a === void 0 || p === void 0) && xe(s, this.length - 8);
    const A = a + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + this[++s] * 2 ** 24, S = this[++s] + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + p * 2 ** 24;
    return BigInt(A) + (BigInt(S) << BigInt(32));
  }), u.prototype.readBigUInt64BE = rt(function(s) {
    s = s >>> 0, We(s, "offset");
    const a = this[s], p = this[s + 7];
    (a === void 0 || p === void 0) && xe(s, this.length - 8);
    const A = a * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + this[++s], S = this[++s] * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + p;
    return (BigInt(A) << BigInt(32)) + BigInt(S);
  }), u.prototype.readIntLE = function(s, a, p) {
    s = s >>> 0, a = a >>> 0, p || b(s, a, this.length);
    let A = this[s], S = 1, R = 0;
    for (; ++R < a && (S *= 256); )
      A += this[s + R] * S;
    return S *= 128, A >= S && (A -= Math.pow(2, 8 * a)), A;
  }, u.prototype.readIntBE = function(s, a, p) {
    s = s >>> 0, a = a >>> 0, p || b(s, a, this.length);
    let A = a, S = 1, R = this[s + --A];
    for (; A > 0 && (S *= 256); )
      R += this[s + --A] * S;
    return S *= 128, R >= S && (R -= Math.pow(2, 8 * a)), R;
  }, u.prototype.readInt8 = function(s, a) {
    return s = s >>> 0, a || b(s, 1, this.length), this[s] & 128 ? (255 - this[s] + 1) * -1 : this[s];
  }, u.prototype.readInt16LE = function(s, a) {
    s = s >>> 0, a || b(s, 2, this.length);
    const p = this[s] | this[s + 1] << 8;
    return p & 32768 ? p | 4294901760 : p;
  }, u.prototype.readInt16BE = function(s, a) {
    s = s >>> 0, a || b(s, 2, this.length);
    const p = this[s + 1] | this[s] << 8;
    return p & 32768 ? p | 4294901760 : p;
  }, u.prototype.readInt32LE = function(s, a) {
    return s = s >>> 0, a || b(s, 4, this.length), this[s] | this[s + 1] << 8 | this[s + 2] << 16 | this[s + 3] << 24;
  }, u.prototype.readInt32BE = function(s, a) {
    return s = s >>> 0, a || b(s, 4, this.length), this[s] << 24 | this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3];
  }, u.prototype.readBigInt64LE = rt(function(s) {
    s = s >>> 0, We(s, "offset");
    const a = this[s], p = this[s + 7];
    (a === void 0 || p === void 0) && xe(s, this.length - 8);
    const A = this[s + 4] + this[s + 5] * 2 ** 8 + this[s + 6] * 2 ** 16 + (p << 24);
    return (BigInt(A) << BigInt(32)) + BigInt(a + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + this[++s] * 2 ** 24);
  }), u.prototype.readBigInt64BE = rt(function(s) {
    s = s >>> 0, We(s, "offset");
    const a = this[s], p = this[s + 7];
    (a === void 0 || p === void 0) && xe(s, this.length - 8);
    const A = (a << 24) + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + this[++s];
    return (BigInt(A) << BigInt(32)) + BigInt(this[++s] * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + p);
  }), u.prototype.readFloatLE = function(s, a) {
    return s = s >>> 0, a || b(s, 4, this.length), t.read(this, s, !0, 23, 4);
  }, u.prototype.readFloatBE = function(s, a) {
    return s = s >>> 0, a || b(s, 4, this.length), t.read(this, s, !1, 23, 4);
  }, u.prototype.readDoubleLE = function(s, a) {
    return s = s >>> 0, a || b(s, 8, this.length), t.read(this, s, !0, 52, 8);
  }, u.prototype.readDoubleBE = function(s, a) {
    return s = s >>> 0, a || b(s, 8, this.length), t.read(this, s, !1, 52, 8);
  };
  function h(f, s, a, p, A, S) {
    if (!u.isBuffer(f))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (s > A || s < S)
      throw new RangeError('"value" argument is out of bounds');
    if (a + p > f.length)
      throw new RangeError("Index out of range");
  }
  u.prototype.writeUintLE = u.prototype.writeUIntLE = function(s, a, p, A) {
    if (s = +s, a = a >>> 0, p = p >>> 0, !A) {
      const J = Math.pow(2, 8 * p) - 1;
      h(this, s, a, p, J, 0);
    }
    let S = 1, R = 0;
    for (this[a] = s & 255; ++R < p && (S *= 256); )
      this[a + R] = s / S & 255;
    return a + p;
  }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(s, a, p, A) {
    if (s = +s, a = a >>> 0, p = p >>> 0, !A) {
      const J = Math.pow(2, 8 * p) - 1;
      h(this, s, a, p, J, 0);
    }
    let S = p - 1, R = 1;
    for (this[a + S] = s & 255; --S >= 0 && (R *= 256); )
      this[a + S] = s / R & 255;
    return a + p;
  }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(s, a, p) {
    return s = +s, a = a >>> 0, p || h(this, s, a, 1, 255, 0), this[a] = s & 255, a + 1;
  }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(s, a, p) {
    return s = +s, a = a >>> 0, p || h(this, s, a, 2, 65535, 0), this[a] = s & 255, this[a + 1] = s >>> 8, a + 2;
  }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(s, a, p) {
    return s = +s, a = a >>> 0, p || h(this, s, a, 2, 65535, 0), this[a] = s >>> 8, this[a + 1] = s & 255, a + 2;
  }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(s, a, p) {
    return s = +s, a = a >>> 0, p || h(this, s, a, 4, 4294967295, 0), this[a + 3] = s >>> 24, this[a + 2] = s >>> 16, this[a + 1] = s >>> 8, this[a] = s & 255, a + 4;
  }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(s, a, p) {
    return s = +s, a = a >>> 0, p || h(this, s, a, 4, 4294967295, 0), this[a] = s >>> 24, this[a + 1] = s >>> 16, this[a + 2] = s >>> 8, this[a + 3] = s & 255, a + 4;
  };
  function B(f, s, a, p, A) {
    K(s, p, A, f, a, 7);
    let S = Number(s & BigInt(4294967295));
    f[a++] = S, S = S >> 8, f[a++] = S, S = S >> 8, f[a++] = S, S = S >> 8, f[a++] = S;
    let R = Number(s >> BigInt(32) & BigInt(4294967295));
    return f[a++] = R, R = R >> 8, f[a++] = R, R = R >> 8, f[a++] = R, R = R >> 8, f[a++] = R, a;
  }
  function q(f, s, a, p, A) {
    K(s, p, A, f, a, 7);
    let S = Number(s & BigInt(4294967295));
    f[a + 7] = S, S = S >> 8, f[a + 6] = S, S = S >> 8, f[a + 5] = S, S = S >> 8, f[a + 4] = S;
    let R = Number(s >> BigInt(32) & BigInt(4294967295));
    return f[a + 3] = R, R = R >> 8, f[a + 2] = R, R = R >> 8, f[a + 1] = R, R = R >> 8, f[a] = R, a + 8;
  }
  u.prototype.writeBigUInt64LE = rt(function(s, a = 0) {
    return B(this, s, a, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeBigUInt64BE = rt(function(s, a = 0) {
    return q(this, s, a, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeIntLE = function(s, a, p, A) {
    if (s = +s, a = a >>> 0, !A) {
      const ie = Math.pow(2, 8 * p - 1);
      h(this, s, a, p, ie - 1, -ie);
    }
    let S = 0, R = 1, J = 0;
    for (this[a] = s & 255; ++S < p && (R *= 256); )
      s < 0 && J === 0 && this[a + S - 1] !== 0 && (J = 1), this[a + S] = (s / R >> 0) - J & 255;
    return a + p;
  }, u.prototype.writeIntBE = function(s, a, p, A) {
    if (s = +s, a = a >>> 0, !A) {
      const ie = Math.pow(2, 8 * p - 1);
      h(this, s, a, p, ie - 1, -ie);
    }
    let S = p - 1, R = 1, J = 0;
    for (this[a + S] = s & 255; --S >= 0 && (R *= 256); )
      s < 0 && J === 0 && this[a + S + 1] !== 0 && (J = 1), this[a + S] = (s / R >> 0) - J & 255;
    return a + p;
  }, u.prototype.writeInt8 = function(s, a, p) {
    return s = +s, a = a >>> 0, p || h(this, s, a, 1, 127, -128), s < 0 && (s = 255 + s + 1), this[a] = s & 255, a + 1;
  }, u.prototype.writeInt16LE = function(s, a, p) {
    return s = +s, a = a >>> 0, p || h(this, s, a, 2, 32767, -32768), this[a] = s & 255, this[a + 1] = s >>> 8, a + 2;
  }, u.prototype.writeInt16BE = function(s, a, p) {
    return s = +s, a = a >>> 0, p || h(this, s, a, 2, 32767, -32768), this[a] = s >>> 8, this[a + 1] = s & 255, a + 2;
  }, u.prototype.writeInt32LE = function(s, a, p) {
    return s = +s, a = a >>> 0, p || h(this, s, a, 4, 2147483647, -2147483648), this[a] = s & 255, this[a + 1] = s >>> 8, this[a + 2] = s >>> 16, this[a + 3] = s >>> 24, a + 4;
  }, u.prototype.writeInt32BE = function(s, a, p) {
    return s = +s, a = a >>> 0, p || h(this, s, a, 4, 2147483647, -2147483648), s < 0 && (s = 4294967295 + s + 1), this[a] = s >>> 24, this[a + 1] = s >>> 16, this[a + 2] = s >>> 8, this[a + 3] = s & 255, a + 4;
  }, u.prototype.writeBigInt64LE = rt(function(s, a = 0) {
    return B(this, s, a, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), u.prototype.writeBigInt64BE = rt(function(s, a = 0) {
    return q(this, s, a, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function Z(f, s, a, p, A, S) {
    if (a + p > f.length)
      throw new RangeError("Index out of range");
    if (a < 0)
      throw new RangeError("Index out of range");
  }
  function V(f, s, a, p, A) {
    return s = +s, a = a >>> 0, A || Z(f, s, a, 4), t.write(f, s, a, p, 23, 4), a + 4;
  }
  u.prototype.writeFloatLE = function(s, a, p) {
    return V(this, s, a, !0, p);
  }, u.prototype.writeFloatBE = function(s, a, p) {
    return V(this, s, a, !1, p);
  };
  function oe(f, s, a, p, A) {
    return s = +s, a = a >>> 0, A || Z(f, s, a, 8), t.write(f, s, a, p, 52, 8), a + 8;
  }
  u.prototype.writeDoubleLE = function(s, a, p) {
    return oe(this, s, a, !0, p);
  }, u.prototype.writeDoubleBE = function(s, a, p) {
    return oe(this, s, a, !1, p);
  }, u.prototype.copy = function(s, a, p, A) {
    if (!u.isBuffer(s))
      throw new TypeError("argument should be a Buffer");
    if (p || (p = 0), !A && A !== 0 && (A = this.length), a >= s.length && (a = s.length), a || (a = 0), A > 0 && A < p && (A = p), A === p || s.length === 0 || this.length === 0)
      return 0;
    if (a < 0)
      throw new RangeError("targetStart out of bounds");
    if (p < 0 || p >= this.length)
      throw new RangeError("Index out of range");
    if (A < 0)
      throw new RangeError("sourceEnd out of bounds");
    A > this.length && (A = this.length), s.length - a < A - p && (A = s.length - a + p);
    const S = A - p;
    return this === s && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(a, p, A) : Uint8Array.prototype.set.call(
      s,
      this.subarray(p, A),
      a
    ), S;
  }, u.prototype.fill = function(s, a, p, A) {
    if (typeof s == "string") {
      if (typeof a == "string" ? (A = a, a = 0, p = this.length) : typeof p == "string" && (A = p, p = this.length), A !== void 0 && typeof A != "string")
        throw new TypeError("encoding must be a string");
      if (typeof A == "string" && !u.isEncoding(A))
        throw new TypeError("Unknown encoding: " + A);
      if (s.length === 1) {
        const R = s.charCodeAt(0);
        (A === "utf8" && R < 128 || A === "latin1") && (s = R);
      }
    } else
      typeof s == "number" ? s = s & 255 : typeof s == "boolean" && (s = Number(s));
    if (a < 0 || this.length < a || this.length < p)
      throw new RangeError("Out of range index");
    if (p <= a)
      return this;
    a = a >>> 0, p = p === void 0 ? this.length : p >>> 0, s || (s = 0);
    let S;
    if (typeof s == "number")
      for (S = a; S < p; ++S)
        this[S] = s;
    else {
      const R = u.isBuffer(s) ? s : u.from(s, A), J = R.length;
      if (J === 0)
        throw new TypeError('The value "' + s + '" is invalid for argument "value"');
      for (S = 0; S < p - a; ++S)
        this[S + a] = R[S % J];
    }
    return this;
  };
  const $ = {};
  function se(f, s, a) {
    $[f] = class extends a {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: s.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${f}]`, this.stack, delete this.name;
      }
      get code() {
        return f;
      }
      set code(A) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: A,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${f}]: ${this.message}`;
      }
    };
  }
  se(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(f) {
      return f ? `${f} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), se(
    "ERR_INVALID_ARG_TYPE",
    function(f, s) {
      return `The "${f}" argument must be of type number. Received type ${typeof s}`;
    },
    TypeError
  ), se(
    "ERR_OUT_OF_RANGE",
    function(f, s, a) {
      let p = `The value of "${f}" is out of range.`, A = a;
      return Number.isInteger(a) && Math.abs(a) > 2 ** 32 ? A = be(String(a)) : typeof a == "bigint" && (A = String(a), (a > BigInt(2) ** BigInt(32) || a < -(BigInt(2) ** BigInt(32))) && (A = be(A)), A += "n"), p += ` It must be ${s}. Received ${A}`, p;
    },
    RangeError
  );
  function be(f) {
    let s = "", a = f.length;
    const p = f[0] === "-" ? 1 : 0;
    for (; a >= p + 4; a -= 3)
      s = `_${f.slice(a - 3, a)}${s}`;
    return `${f.slice(0, a)}${s}`;
  }
  function ve(f, s, a) {
    We(s, "offset"), (f[s] === void 0 || f[s + a] === void 0) && xe(s, f.length - (a + 1));
  }
  function K(f, s, a, p, A, S) {
    if (f > a || f < s) {
      const R = typeof s == "bigint" ? "n" : "";
      let J;
      throw S > 3 ? s === 0 || s === BigInt(0) ? J = `>= 0${R} and < 2${R} ** ${(S + 1) * 8}${R}` : J = `>= -(2${R} ** ${(S + 1) * 8 - 1}${R}) and < 2 ** ${(S + 1) * 8 - 1}${R}` : J = `>= ${s}${R} and <= ${a}${R}`, new $.ERR_OUT_OF_RANGE("value", J, f);
    }
    ve(p, A, S);
  }
  function We(f, s) {
    if (typeof f != "number")
      throw new $.ERR_INVALID_ARG_TYPE(s, "number", f);
  }
  function xe(f, s, a) {
    throw Math.floor(f) !== f ? (We(f, a), new $.ERR_OUT_OF_RANGE(a || "offset", "an integer", f)) : s < 0 ? new $.ERR_BUFFER_OUT_OF_BOUNDS() : new $.ERR_OUT_OF_RANGE(
      a || "offset",
      `>= ${a ? 1 : 0} and <= ${s}`,
      f
    );
  }
  const Ge = /[^+/0-9A-Za-z-_]/g;
  function ir(f) {
    if (f = f.split("=")[0], f = f.trim().replace(Ge, ""), f.length < 2)
      return "";
    for (; f.length % 4 !== 0; )
      f = f + "=";
    return f;
  }
  function ze(f, s) {
    s = s || 1 / 0;
    let a;
    const p = f.length;
    let A = null;
    const S = [];
    for (let R = 0; R < p; ++R) {
      if (a = f.charCodeAt(R), a > 55295 && a < 57344) {
        if (!A) {
          if (a > 56319) {
            (s -= 3) > -1 && S.push(239, 191, 189);
            continue;
          } else if (R + 1 === p) {
            (s -= 3) > -1 && S.push(239, 191, 189);
            continue;
          }
          A = a;
          continue;
        }
        if (a < 56320) {
          (s -= 3) > -1 && S.push(239, 191, 189), A = a;
          continue;
        }
        a = (A - 55296 << 10 | a - 56320) + 65536;
      } else
        A && (s -= 3) > -1 && S.push(239, 191, 189);
      if (A = null, a < 128) {
        if ((s -= 1) < 0)
          break;
        S.push(a);
      } else if (a < 2048) {
        if ((s -= 2) < 0)
          break;
        S.push(
          a >> 6 | 192,
          a & 63 | 128
        );
      } else if (a < 65536) {
        if ((s -= 3) < 0)
          break;
        S.push(
          a >> 12 | 224,
          a >> 6 & 63 | 128,
          a & 63 | 128
        );
      } else if (a < 1114112) {
        if ((s -= 4) < 0)
          break;
        S.push(
          a >> 18 | 240,
          a >> 12 & 63 | 128,
          a >> 6 & 63 | 128,
          a & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return S;
  }
  function Qe(f) {
    const s = [];
    for (let a = 0; a < f.length; ++a)
      s.push(f.charCodeAt(a) & 255);
    return s;
  }
  function or(f, s) {
    let a, p, A;
    const S = [];
    for (let R = 0; R < f.length && !((s -= 2) < 0); ++R)
      a = f.charCodeAt(R), p = a >> 8, A = a % 256, S.push(A), S.push(p);
    return S;
  }
  function je(f) {
    return e.toByteArray(ir(f));
  }
  function ke(f, s, a, p) {
    let A;
    for (A = 0; A < p && !(A + a >= s.length || A >= f.length); ++A)
      s[A + a] = f[A];
    return A;
  }
  function qe(f, s) {
    return f instanceof s || f != null && f.constructor != null && f.constructor.name != null && f.constructor.name === s.name;
  }
  function He(f) {
    return f !== f;
  }
  const Ye = function() {
    const f = "0123456789abcdef", s = new Array(256);
    for (let a = 0; a < 16; ++a) {
      const p = a * 16;
      for (let A = 0; A < 16; ++A)
        s[p + A] = f[a] + f[A];
    }
    return s;
  }();
  function rt(f) {
    return typeof BigInt > "u" ? Ke : f;
  }
  function Ke() {
    throw new Error("BigInt not supported");
  }
})(Gs);
(function(n, e) {
  var t = Gs, r = t.Buffer;
  function o(c, u) {
    for (var d in c)
      u[d] = c[d];
  }
  r.from && r.alloc && r.allocUnsafe && r.allocUnsafeSlow ? n.exports = t : (o(t, e), e.Buffer = i);
  function i(c, u, d) {
    return r(c, u, d);
  }
  o(r, i), i.from = function(c, u, d) {
    if (typeof c == "number")
      throw new TypeError("Argument must not be a number");
    return r(c, u, d);
  }, i.alloc = function(c, u, d) {
    if (typeof c != "number")
      throw new TypeError("Argument must be a number");
    var w = r(c);
    return u !== void 0 ? typeof d == "string" ? w.fill(u, d) : w.fill(u) : w.fill(0), w;
  }, i.allocUnsafe = function(c) {
    if (typeof c != "number")
      throw new TypeError("Argument must be a number");
    return r(c);
  }, i.allocUnsafeSlow = function(c) {
    if (typeof c != "number")
      throw new TypeError("Argument must be a number");
    return t.SlowBuffer(c);
  };
})(Pr, Pr.exports);
var oi = Pr.exports.Buffer;
function Yh(n) {
  if (n.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var e = new Uint8Array(256), t = 0; t < e.length; t++)
    e[t] = 255;
  for (var r = 0; r < n.length; r++) {
    var o = n.charAt(r), i = o.charCodeAt(0);
    if (e[i] !== 255)
      throw new TypeError(o + " is ambiguous");
    e[i] = r;
  }
  var c = n.length, u = n.charAt(0), d = Math.log(c) / Math.log(256), w = Math.log(256) / Math.log(c);
  function v(E) {
    if ((Array.isArray(E) || E instanceof Uint8Array) && (E = oi.from(E)), !oi.isBuffer(E))
      throw new TypeError("Expected Buffer");
    if (E.length === 0)
      return "";
    for (var N = 0, T = 0, U = 0, P = E.length; U !== P && E[U] === 0; )
      U++, N++;
    for (var F = (P - U) * w + 1 >>> 0, O = new Uint8Array(F); U !== P; ) {
      for (var z = E[U], L = 0, W = F - 1; (z !== 0 || L < T) && W !== -1; W--, L++)
        z += 256 * O[W] >>> 0, O[W] = z % c >>> 0, z = z / c >>> 0;
      if (z !== 0)
        throw new Error("Non-zero carry");
      T = L, U++;
    }
    for (var j = F - T; j !== F && O[j] === 0; )
      j++;
    for (var Q = u.repeat(N); j < F; ++j)
      Q += n.charAt(O[j]);
    return Q;
  }
  function I(E) {
    if (typeof E != "string")
      throw new TypeError("Expected String");
    if (E.length === 0)
      return oi.alloc(0);
    for (var N = 0, T = 0, U = 0; E[N] === u; )
      T++, N++;
    for (var P = (E.length - N) * d + 1 >>> 0, F = new Uint8Array(P); E[N]; ) {
      var O = e[E.charCodeAt(N)];
      if (O === 255)
        return;
      for (var z = 0, L = P - 1; (O !== 0 || z < U) && L !== -1; L--, z++)
        O += c * F[L] >>> 0, F[L] = O % 256 >>> 0, O = O / 256 >>> 0;
      if (O !== 0)
        throw new Error("Non-zero carry");
      U = z, N++;
    }
    for (var W = P - U; W !== P && F[W] === 0; )
      W++;
    var j = oi.allocUnsafe(T + (P - W));
    j.fill(0, 0, T);
    for (var Q = T; W !== P; )
      j[Q++] = F[W++];
    return j;
  }
  function _(E) {
    var N = I(E);
    if (N)
      return N;
    throw new Error("Non-base" + c + " character");
  }
  return {
    encode: v,
    decodeUnsafe: I,
    decode: _
  };
}
var Kh = Yh, Vh = Kh, Zh = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", Ct = Vh(Zh);
const Xh = (n, e, t) => n & e ^ ~n & t, Jh = (n, e, t) => n & e ^ n & t ^ e & t, $h = new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]), Mn = new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), _n = new Uint32Array(64);
class ed extends eu {
  constructor() {
    super(64, 32, 8, !1), this.A = Mn[0] | 0, this.B = Mn[1] | 0, this.C = Mn[2] | 0, this.D = Mn[3] | 0, this.E = Mn[4] | 0, this.F = Mn[5] | 0, this.G = Mn[6] | 0, this.H = Mn[7] | 0;
  }
  get() {
    const { A: e, B: t, C: r, D: o, E: i, F: c, G: u, H: d } = this;
    return [e, t, r, o, i, c, u, d];
  }
  set(e, t, r, o, i, c, u, d) {
    this.A = e | 0, this.B = t | 0, this.C = r | 0, this.D = o | 0, this.E = i | 0, this.F = c | 0, this.G = u | 0, this.H = d | 0;
  }
  process(e, t) {
    for (let I = 0; I < 16; I++, t += 4)
      _n[I] = e.getUint32(t, !1);
    for (let I = 16; I < 64; I++) {
      const _ = _n[I - 15], E = _n[I - 2], N = hn(_, 7) ^ hn(_, 18) ^ _ >>> 3, T = hn(E, 17) ^ hn(E, 19) ^ E >>> 10;
      _n[I] = T + _n[I - 7] + N + _n[I - 16] | 0;
    }
    let { A: r, B: o, C: i, D: c, E: u, F: d, G: w, H: v } = this;
    for (let I = 0; I < 64; I++) {
      const _ = hn(u, 6) ^ hn(u, 11) ^ hn(u, 25), E = v + _ + Xh(u, d, w) + $h[I] + _n[I] | 0, T = (hn(r, 2) ^ hn(r, 13) ^ hn(r, 22)) + Jh(r, o, i) | 0;
      v = w, w = d, d = u, u = c + E | 0, c = i, i = o, o = r, r = E + T | 0;
    }
    r = r + this.A | 0, o = o + this.B | 0, i = i + this.C | 0, c = c + this.D | 0, u = u + this.E | 0, d = d + this.F | 0, w = w + this.G | 0, v = v + this.H | 0, this.set(r, o, i, c, u, d, w, v);
  }
  roundClean() {
    _n.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const As = Kr(() => new ed());
var _t = {}, si = Pr.exports.Buffer;
function td(n) {
  if (n.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var e = new Uint8Array(256), t = 0; t < e.length; t++)
    e[t] = 255;
  for (var r = 0; r < n.length; r++) {
    var o = n.charAt(r), i = o.charCodeAt(0);
    if (e[i] !== 255)
      throw new TypeError(o + " is ambiguous");
    e[i] = r;
  }
  var c = n.length, u = n.charAt(0), d = Math.log(c) / Math.log(256), w = Math.log(256) / Math.log(c);
  function v(E) {
    if ((Array.isArray(E) || E instanceof Uint8Array) && (E = si.from(E)), !si.isBuffer(E))
      throw new TypeError("Expected Buffer");
    if (E.length === 0)
      return "";
    for (var N = 0, T = 0, U = 0, P = E.length; U !== P && E[U] === 0; )
      U++, N++;
    for (var F = (P - U) * w + 1 >>> 0, O = new Uint8Array(F); U !== P; ) {
      for (var z = E[U], L = 0, W = F - 1; (z !== 0 || L < T) && W !== -1; W--, L++)
        z += 256 * O[W] >>> 0, O[W] = z % c >>> 0, z = z / c >>> 0;
      if (z !== 0)
        throw new Error("Non-zero carry");
      T = L, U++;
    }
    for (var j = F - T; j !== F && O[j] === 0; )
      j++;
    for (var Q = u.repeat(N); j < F; ++j)
      Q += n.charAt(O[j]);
    return Q;
  }
  function I(E) {
    if (typeof E != "string")
      throw new TypeError("Expected String");
    if (E.length === 0)
      return si.alloc(0);
    for (var N = 0, T = 0, U = 0; E[N] === u; )
      T++, N++;
    for (var P = (E.length - N) * d + 1 >>> 0, F = new Uint8Array(P); E[N]; ) {
      var O = e[E.charCodeAt(N)];
      if (O === 255)
        return;
      for (var z = 0, L = P - 1; (O !== 0 || z < U) && L !== -1; L--, z++)
        O += c * F[L] >>> 0, F[L] = O % 256 >>> 0, O = O / 256 >>> 0;
      if (O !== 0)
        throw new Error("Non-zero carry");
      U = z, N++;
    }
    for (var W = P - U; W !== P && F[W] === 0; )
      W++;
    var j = si.allocUnsafe(T + (P - W));
    j.fill(0, 0, T);
    for (var Q = T; W !== P; )
      j[Q++] = F[W++];
    return j;
  }
  function _(E) {
    var N = I(E);
    if (N)
      return N;
    throw new Error("Non-base" + c + " character");
  }
  return {
    encode: v,
    decodeUnsafe: I,
    decode: _
  };
}
var nd = td, rd = nd, id = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", od = rd(id);
function vn(n, e, t) {
  return e <= n && n <= t;
}
function Hi(n) {
  if (n === void 0)
    return {};
  if (n === Object(n))
    return n;
  throw TypeError("Could not convert argument to dictionary");
}
function sd(n) {
  for (var e = String(n), t = e.length, r = 0, o = []; r < t; ) {
    var i = e.charCodeAt(r);
    if (i < 55296 || i > 57343)
      o.push(i);
    else if (56320 <= i && i <= 57343)
      o.push(65533);
    else if (55296 <= i && i <= 56319)
      if (r === t - 1)
        o.push(65533);
      else {
        var c = n.charCodeAt(r + 1);
        if (56320 <= c && c <= 57343) {
          var u = i & 1023, d = c & 1023;
          o.push(65536 + (u << 10) + d), r += 1;
        } else
          o.push(65533);
      }
    r += 1;
  }
  return o;
}
function ad(n) {
  for (var e = "", t = 0; t < n.length; ++t) {
    var r = n[t];
    r <= 65535 ? e += String.fromCharCode(r) : (r -= 65536, e += String.fromCharCode(
      (r >> 10) + 55296,
      (r & 1023) + 56320
    ));
  }
  return e;
}
var Bi = -1;
function js(n) {
  this.tokens = [].slice.call(n);
}
js.prototype = {
  endOfStream: function() {
    return !this.tokens.length;
  },
  read: function() {
    return this.tokens.length ? this.tokens.shift() : Bi;
  },
  prepend: function(n) {
    if (Array.isArray(n))
      for (var e = n; e.length; )
        this.tokens.unshift(e.pop());
    else
      this.tokens.unshift(n);
  },
  push: function(n) {
    if (Array.isArray(n))
      for (var e = n; e.length; )
        this.tokens.push(e.shift());
    else
      this.tokens.push(n);
  }
};
var yr = -1;
function Uo(n, e) {
  if (n)
    throw TypeError("Decoder error");
  return e || 65533;
}
var Mi = "utf-8";
function _i(n, e) {
  if (!(this instanceof _i))
    return new _i(n, e);
  if (n = n !== void 0 ? String(n).toLowerCase() : Mi, n !== Mi)
    throw new Error("Encoding not supported. Only utf-8 is supported");
  e = Hi(e), this._streaming = !1, this._BOMseen = !1, this._decoder = null, this._fatal = Boolean(e.fatal), this._ignoreBOM = Boolean(e.ignoreBOM), Object.defineProperty(this, "encoding", { value: "utf-8" }), Object.defineProperty(this, "fatal", { value: this._fatal }), Object.defineProperty(this, "ignoreBOM", { value: this._ignoreBOM });
}
_i.prototype = {
  decode: function(e, t) {
    var r;
    typeof e == "object" && e instanceof ArrayBuffer ? r = new Uint8Array(e) : typeof e == "object" && "buffer" in e && e.buffer instanceof ArrayBuffer ? r = new Uint8Array(
      e.buffer,
      e.byteOffset,
      e.byteLength
    ) : r = new Uint8Array(0), t = Hi(t), this._streaming || (this._decoder = new cd({ fatal: this._fatal }), this._BOMseen = !1), this._streaming = Boolean(t.stream);
    for (var o = new js(r), i = [], c; !o.endOfStream() && (c = this._decoder.handler(o, o.read()), c !== yr); )
      c !== null && (Array.isArray(c) ? i.push.apply(i, c) : i.push(c));
    if (!this._streaming) {
      do {
        if (c = this._decoder.handler(o, o.read()), c === yr)
          break;
        c !== null && (Array.isArray(c) ? i.push.apply(i, c) : i.push(c));
      } while (!o.endOfStream());
      this._decoder = null;
    }
    return i.length && ["utf-8"].indexOf(this.encoding) !== -1 && !this._ignoreBOM && !this._BOMseen && (i[0] === 65279 ? (this._BOMseen = !0, i.shift()) : this._BOMseen = !0), ad(i);
  }
};
function Ci(n, e) {
  if (!(this instanceof Ci))
    return new Ci(n, e);
  if (n = n !== void 0 ? String(n).toLowerCase() : Mi, n !== Mi)
    throw new Error("Encoding not supported. Only utf-8 is supported");
  e = Hi(e), this._streaming = !1, this._encoder = null, this._options = { fatal: Boolean(e.fatal) }, Object.defineProperty(this, "encoding", { value: "utf-8" });
}
Ci.prototype = {
  encode: function(e, t) {
    e = e ? String(e) : "", t = Hi(t), this._streaming || (this._encoder = new ud(this._options)), this._streaming = Boolean(t.stream);
    for (var r = [], o = new js(sd(e)), i; !o.endOfStream() && (i = this._encoder.handler(o, o.read()), i !== yr); )
      Array.isArray(i) ? r.push.apply(r, i) : r.push(i);
    if (!this._streaming) {
      for (; i = this._encoder.handler(o, o.read()), i !== yr; )
        Array.isArray(i) ? r.push.apply(r, i) : r.push(i);
      this._encoder = null;
    }
    return new Uint8Array(r);
  }
};
function cd(n) {
  var e = n.fatal, t = 0, r = 0, o = 0, i = 128, c = 191;
  this.handler = function(u, d) {
    if (d === Bi && o !== 0)
      return o = 0, Uo(e);
    if (d === Bi)
      return yr;
    if (o === 0) {
      if (vn(d, 0, 127))
        return d;
      if (vn(d, 194, 223))
        o = 1, t = d - 192;
      else if (vn(d, 224, 239))
        d === 224 && (i = 160), d === 237 && (c = 159), o = 2, t = d - 224;
      else if (vn(d, 240, 244))
        d === 240 && (i = 144), d === 244 && (c = 143), o = 3, t = d - 240;
      else
        return Uo(e);
      return t = t << 6 * o, null;
    }
    if (!vn(d, i, c))
      return t = o = r = 0, i = 128, c = 191, u.prepend(d), Uo(e);
    if (i = 128, c = 191, r += 1, t += d - 128 << 6 * (o - r), r !== o)
      return null;
    var w = t;
    return t = o = r = 0, w;
  };
}
function ud(n) {
  n.fatal, this.handler = function(e, t) {
    if (t === Bi)
      return yr;
    if (vn(t, 0, 127))
      return t;
    var r, o;
    vn(t, 128, 2047) ? (r = 1, o = 192) : vn(t, 2048, 65535) ? (r = 2, o = 224) : vn(t, 65536, 1114111) && (r = 3, o = 240);
    for (var i = [(t >> 6 * r) + o]; r > 0; ) {
      var c = t >> 6 * (r - 1);
      i.push(128 | c & 63), r -= 1;
    }
    return i;
  };
}
const ld = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TextEncoder: Ci,
  TextDecoder: _i
}, Symbol.toStringTag, { value: "Module" })), fd = /* @__PURE__ */ Di(ld);
var hd = cn && cn.__createBinding || (Object.create ? function(n, e, t, r) {
  r === void 0 && (r = t), Object.defineProperty(n, r, { enumerable: !0, get: function() {
    return e[t];
  } });
} : function(n, e, t, r) {
  r === void 0 && (r = t), n[r] = e[t];
}), dd = cn && cn.__setModuleDefault || (Object.create ? function(n, e) {
  Object.defineProperty(n, "default", { enumerable: !0, value: e });
} : function(n, e) {
  n.default = e;
}), mn = cn && cn.__decorate || function(n, e, t, r) {
  var o = arguments.length, i = o < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, t) : r, c;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(n, e, t, r);
  else
    for (var u = n.length - 1; u >= 0; u--)
      (c = n[u]) && (i = (o < 3 ? c(i) : o > 3 ? c(e, t, i) : c(e, t)) || i);
  return o > 3 && i && Object.defineProperty(e, t, i), i;
}, pd = cn && cn.__importStar || function(n) {
  if (n && n.__esModule)
    return n;
  var e = {};
  if (n != null)
    for (var t in n)
      t !== "default" && Object.hasOwnProperty.call(n, t) && hd(e, n, t);
  return dd(e, n), e;
}, cu = cn && cn.__importDefault || function(n) {
  return n && n.__esModule ? n : { default: n };
};
Object.defineProperty(_t, "__esModule", { value: !0 });
var uu = _t.deserializeUnchecked = gu = _t.deserialize = pu = _t.serialize = _t.BinaryReader = _t.BinaryWriter = _t.BorshError = _t.baseDecode = _t.baseEncode = void 0;
const kn = cu(Ws.exports), lu = cu(od), gd = pd(fd), yd = typeof TextDecoder != "function" ? gd.TextDecoder : TextDecoder, wd = new yd("utf-8", { fatal: !0 });
function md(n) {
  return typeof n == "string" && (n = Buffer.from(n, "utf8")), lu.default.encode(Buffer.from(n));
}
_t.baseEncode = md;
function bd(n) {
  return Buffer.from(lu.default.decode(n));
}
_t.baseDecode = bd;
const Do = 1024;
class Dt extends Error {
  constructor(e) {
    super(e), this.fieldPath = [], this.originalMessage = e;
  }
  addToFieldPath(e) {
    this.fieldPath.splice(0, 0, e), this.message = this.originalMessage + ": " + this.fieldPath.join(".");
  }
}
_t.BorshError = Dt;
class fu {
  constructor() {
    this.buf = Buffer.alloc(Do), this.length = 0;
  }
  maybeResize() {
    this.buf.length < 16 + this.length && (this.buf = Buffer.concat([this.buf, Buffer.alloc(Do)]));
  }
  writeU8(e) {
    this.maybeResize(), this.buf.writeUInt8(e, this.length), this.length += 1;
  }
  writeU16(e) {
    this.maybeResize(), this.buf.writeUInt16LE(e, this.length), this.length += 2;
  }
  writeU32(e) {
    this.maybeResize(), this.buf.writeUInt32LE(e, this.length), this.length += 4;
  }
  writeU64(e) {
    this.maybeResize(), this.writeBuffer(Buffer.from(new kn.default(e).toArray("le", 8)));
  }
  writeU128(e) {
    this.maybeResize(), this.writeBuffer(Buffer.from(new kn.default(e).toArray("le", 16)));
  }
  writeU256(e) {
    this.maybeResize(), this.writeBuffer(Buffer.from(new kn.default(e).toArray("le", 32)));
  }
  writeU512(e) {
    this.maybeResize(), this.writeBuffer(Buffer.from(new kn.default(e).toArray("le", 64)));
  }
  writeBuffer(e) {
    this.buf = Buffer.concat([
      Buffer.from(this.buf.subarray(0, this.length)),
      e,
      Buffer.alloc(Do)
    ]), this.length += e.length;
  }
  writeString(e) {
    this.maybeResize();
    const t = Buffer.from(e, "utf8");
    this.writeU32(t.length), this.writeBuffer(t);
  }
  writeFixedArray(e) {
    this.writeBuffer(Buffer.from(e));
  }
  writeArray(e, t) {
    this.maybeResize(), this.writeU32(e.length);
    for (const r of e)
      this.maybeResize(), t(r);
  }
  toArray() {
    return this.buf.subarray(0, this.length);
  }
}
_t.BinaryWriter = fu;
function bn(n, e, t) {
  const r = t.value;
  t.value = function(...o) {
    try {
      return r.apply(this, o);
    } catch (i) {
      if (i instanceof RangeError) {
        const c = i.code;
        if (["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(c) >= 0)
          throw new Dt("Reached the end of buffer when deserializing");
      }
      throw i;
    }
  };
}
class Yt {
  constructor(e) {
    this.buf = e, this.offset = 0;
  }
  readU8() {
    const e = this.buf.readUInt8(this.offset);
    return this.offset += 1, e;
  }
  readU16() {
    const e = this.buf.readUInt16LE(this.offset);
    return this.offset += 2, e;
  }
  readU32() {
    const e = this.buf.readUInt32LE(this.offset);
    return this.offset += 4, e;
  }
  readU64() {
    const e = this.readBuffer(8);
    return new kn.default(e, "le");
  }
  readU128() {
    const e = this.readBuffer(16);
    return new kn.default(e, "le");
  }
  readU256() {
    const e = this.readBuffer(32);
    return new kn.default(e, "le");
  }
  readU512() {
    const e = this.readBuffer(64);
    return new kn.default(e, "le");
  }
  readBuffer(e) {
    if (this.offset + e > this.buf.length)
      throw new Dt(`Expected buffer length ${e} isn't within bounds`);
    const t = this.buf.slice(this.offset, this.offset + e);
    return this.offset += e, t;
  }
  readString() {
    const e = this.readU32(), t = this.readBuffer(e);
    try {
      return wd.decode(t);
    } catch (r) {
      throw new Dt(`Error decoding UTF-8 string: ${r}`);
    }
  }
  readFixedArray(e) {
    return new Uint8Array(this.readBuffer(e));
  }
  readArray(e) {
    const t = this.readU32(), r = Array();
    for (let o = 0; o < t; ++o)
      r.push(e());
    return r;
  }
}
mn([
  bn
], Yt.prototype, "readU8", null);
mn([
  bn
], Yt.prototype, "readU16", null);
mn([
  bn
], Yt.prototype, "readU32", null);
mn([
  bn
], Yt.prototype, "readU64", null);
mn([
  bn
], Yt.prototype, "readU128", null);
mn([
  bn
], Yt.prototype, "readU256", null);
mn([
  bn
], Yt.prototype, "readU512", null);
mn([
  bn
], Yt.prototype, "readString", null);
mn([
  bn
], Yt.prototype, "readFixedArray", null);
mn([
  bn
], Yt.prototype, "readArray", null);
_t.BinaryReader = Yt;
function hu(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
function Hn(n, e, t, r, o) {
  try {
    if (typeof r == "string")
      o[`write${hu(r)}`](t);
    else if (r instanceof Array)
      if (typeof r[0] == "number") {
        if (t.length !== r[0])
          throw new Dt(`Expecting byte array of length ${r[0]}, but got ${t.length} bytes`);
        o.writeFixedArray(t);
      } else if (r.length === 2 && typeof r[1] == "number") {
        if (t.length !== r[1])
          throw new Dt(`Expecting byte array of length ${r[1]}, but got ${t.length} bytes`);
        for (let i = 0; i < r[1]; i++)
          Hn(n, null, t[i], r[0], o);
      } else
        o.writeArray(t, (i) => {
          Hn(n, e, i, r[0], o);
        });
    else if (r.kind !== void 0)
      switch (r.kind) {
        case "option": {
          t == null ? o.writeU8(0) : (o.writeU8(1), Hn(n, e, t, r.type, o));
          break;
        }
        case "map": {
          o.writeU32(t.size), t.forEach((i, c) => {
            Hn(n, e, c, r.key, o), Hn(n, e, i, r.value, o);
          });
          break;
        }
        default:
          throw new Dt(`FieldType ${r} unrecognized`);
      }
    else
      du(n, t, o);
  } catch (i) {
    throw i instanceof Dt && i.addToFieldPath(e), i;
  }
}
function du(n, e, t) {
  if (typeof e.borshSerialize == "function") {
    e.borshSerialize(t);
    return;
  }
  const r = n.get(e.constructor);
  if (!r)
    throw new Dt(`Class ${e.constructor.name} is missing in schema`);
  if (r.kind === "struct")
    r.fields.map(([o, i]) => {
      Hn(n, o, e[o], i, t);
    });
  else if (r.kind === "enum") {
    const o = e[r.field];
    for (let i = 0; i < r.values.length; ++i) {
      const [c, u] = r.values[i];
      if (c === o) {
        t.writeU8(i), Hn(n, c, e[c], u, t);
        break;
      }
    }
  } else
    throw new Dt(`Unexpected schema kind: ${r.kind} for ${e.constructor.name}`);
}
function Ad(n, e, t = fu) {
  const r = new t();
  return du(n, e, r), r.toArray();
}
var pu = _t.serialize = Ad;
function Wn(n, e, t, r) {
  try {
    if (typeof t == "string")
      return r[`read${hu(t)}`]();
    if (t instanceof Array) {
      if (typeof t[0] == "number")
        return r.readFixedArray(t[0]);
      if (typeof t[1] == "number") {
        const o = [];
        for (let i = 0; i < t[1]; i++)
          o.push(Wn(n, null, t[0], r));
        return o;
      } else
        return r.readArray(() => Wn(n, e, t[0], r));
    }
    if (t.kind === "option")
      return r.readU8() ? Wn(n, e, t.type, r) : void 0;
    if (t.kind === "map") {
      let o = /* @__PURE__ */ new Map();
      const i = r.readU32();
      for (let c = 0; c < i; c++) {
        const u = Wn(n, e, t.key, r), d = Wn(n, e, t.value, r);
        o.set(u, d);
      }
      return o;
    }
    return Qs(n, t, r);
  } catch (o) {
    throw o instanceof Dt && o.addToFieldPath(e), o;
  }
}
function Qs(n, e, t) {
  if (typeof e.borshDeserialize == "function")
    return e.borshDeserialize(t);
  const r = n.get(e);
  if (!r)
    throw new Dt(`Class ${e.name} is missing in schema`);
  if (r.kind === "struct") {
    const o = {};
    for (const [i, c] of n.get(e).fields)
      o[i] = Wn(n, i, c, t);
    return new e(o);
  }
  if (r.kind === "enum") {
    const o = t.readU8();
    if (o >= r.values.length)
      throw new Dt(`Enum index: ${o} is out of range`);
    const [i, c] = r.values[o], u = Wn(n, i, c, t);
    return new e({ [i]: u });
  }
  throw new Dt(`Unexpected schema kind: ${r.kind} for ${e.constructor.name}`);
}
function vd(n, e, t, r = Yt) {
  const o = new r(t), i = Qs(n, e, o);
  if (o.offset < t.length)
    throw new Dt(`Unexpected ${t.length - o.offset} bytes after deserialized data`);
  return i;
}
var gu = _t.deserialize = vd;
function Ed(n, e, t, r = Yt) {
  const o = new r(t);
  return Qs(n, e, o);
}
uu = _t.deserializeUnchecked = Ed;
var H = {};
Object.defineProperty(H, "__esModule", { value: !0 });
H.s16 = H.s8 = H.nu64be = H.u48be = H.u40be = H.u32be = H.u24be = H.u16be = Mt = H.nu64 = H.u48 = H.u40 = pe = H.u32 = H.u24 = Zt = H.u16 = Re = H.u8 = Yn = H.offset = H.greedy = H.Constant = H.UTF8 = H.CString = H.Blob = H.Boolean = H.BitField = H.BitStructure = H.VariantLayout = H.Union = H.UnionLayoutDiscriminator = H.UnionDiscriminator = H.Structure = H.Sequence = H.DoubleBE = H.Double = H.FloatBE = H.Float = H.NearInt64BE = H.NearInt64 = H.NearUInt64BE = H.NearUInt64 = H.IntBE = H.Int = H.UIntBE = H.UInt = H.OffsetLayout = H.GreedyCount = H.ExternalLayout = H.bindConstructorLayout = H.nameWithProperty = H.Layout = H.uint8ArrayToBuffer = H.checkUint8Array = void 0;
H.constant = H.utf8 = H.cstr = $e = H.blob = H.unionLayoutDiscriminator = H.union = Pt = H.seq = H.bits = ue = H.struct = H.f64be = H.f64 = H.f32be = H.f32 = H.ns64be = H.s48be = H.s40be = H.s32be = H.s24be = H.s16be = Qt = H.ns64 = H.s48 = H.s40 = H.s32 = H.s24 = void 0;
const qs = Gs;
function xr(n) {
  if (!(n instanceof Uint8Array))
    throw new TypeError("b must be a Uint8Array");
}
H.checkUint8Array = xr;
function Ne(n) {
  return xr(n), qs.Buffer.from(n.buffer, n.byteOffset, n.length);
}
H.uint8ArrayToBuffer = Ne;
class Fe {
  constructor(e, t) {
    if (!Number.isInteger(e))
      throw new TypeError("span must be an integer");
    this.span = e, this.property = t;
  }
  makeDestinationObject() {
    return {};
  }
  getSpan(e, t) {
    if (0 > this.span)
      throw new RangeError("indeterminate span");
    return this.span;
  }
  replicate(e) {
    const t = Object.create(this.constructor.prototype);
    return Object.assign(t, this), t.property = e, t;
  }
  fromArray(e) {
  }
}
H.Layout = Fe;
function Ys(n, e) {
  return e.property ? n + "[" + e.property + "]" : n;
}
H.nameWithProperty = Ys;
function xd(n, e) {
  if (typeof n != "function")
    throw new TypeError("Class must be constructor");
  if (Object.prototype.hasOwnProperty.call(n, "layout_"))
    throw new Error("Class is already bound to a layout");
  if (!(e && e instanceof Fe))
    throw new TypeError("layout must be a Layout");
  if (Object.prototype.hasOwnProperty.call(e, "boundConstructor_"))
    throw new Error("layout is already bound to a constructor");
  n.layout_ = e, e.boundConstructor_ = n, e.makeDestinationObject = () => new n(), Object.defineProperty(n.prototype, "encode", {
    value(t, r) {
      return e.encode(this, t, r);
    },
    writable: !0
  }), Object.defineProperty(n, "decode", {
    value(t, r) {
      return e.decode(t, r);
    },
    writable: !0
  });
}
H.bindConstructorLayout = xd;
class zt extends Fe {
  isCount() {
    throw new Error("ExternalLayout is abstract");
  }
}
H.ExternalLayout = zt;
class yu extends zt {
  constructor(e = 1, t) {
    if (!Number.isInteger(e) || 0 >= e)
      throw new TypeError("elementSpan must be a (positive) integer");
    super(-1, t), this.elementSpan = e;
  }
  isCount() {
    return !0;
  }
  decode(e, t = 0) {
    xr(e);
    const r = e.length - t;
    return Math.floor(r / this.elementSpan);
  }
  encode(e, t, r) {
    return 0;
  }
}
H.GreedyCount = yu;
class Ks extends zt {
  constructor(e, t = 0, r) {
    if (!(e instanceof Fe))
      throw new TypeError("layout must be a Layout");
    if (!Number.isInteger(t))
      throw new TypeError("offset must be integer or undefined");
    super(e.span, r || e.property), this.layout = e, this.offset = t;
  }
  isCount() {
    return this.layout instanceof nn || this.layout instanceof an;
  }
  decode(e, t = 0) {
    return this.layout.decode(e, t + this.offset);
  }
  encode(e, t, r = 0) {
    return this.layout.encode(e, t, r + this.offset);
  }
}
H.OffsetLayout = Ks;
class nn extends Fe {
  constructor(e, t) {
    if (super(e, t), 6 < this.span)
      throw new RangeError("span must not exceed 6 bytes");
  }
  decode(e, t = 0) {
    return Ne(e).readUIntLE(t, this.span);
  }
  encode(e, t, r = 0) {
    return Ne(t).writeUIntLE(e, r, this.span), this.span;
  }
}
H.UInt = nn;
class an extends Fe {
  constructor(e, t) {
    if (super(e, t), 6 < this.span)
      throw new RangeError("span must not exceed 6 bytes");
  }
  decode(e, t = 0) {
    return Ne(e).readUIntBE(t, this.span);
  }
  encode(e, t, r = 0) {
    return Ne(t).writeUIntBE(e, r, this.span), this.span;
  }
}
H.UIntBE = an;
class er extends Fe {
  constructor(e, t) {
    if (super(e, t), 6 < this.span)
      throw new RangeError("span must not exceed 6 bytes");
  }
  decode(e, t = 0) {
    return Ne(e).readIntLE(t, this.span);
  }
  encode(e, t, r = 0) {
    return Ne(t).writeIntLE(e, r, this.span), this.span;
  }
}
H.Int = er;
class Ir extends Fe {
  constructor(e, t) {
    if (super(e, t), 6 < this.span)
      throw new RangeError("span must not exceed 6 bytes");
  }
  decode(e, t = 0) {
    return Ne(e).readIntBE(t, this.span);
  }
  encode(e, t, r = 0) {
    return Ne(t).writeIntBE(e, r, this.span), this.span;
  }
}
H.IntBE = Ir;
const vs = Math.pow(2, 32);
function Wi(n) {
  const e = Math.floor(n / vs), t = n - e * vs;
  return { hi32: e, lo32: t };
}
function Gi(n, e) {
  return n * vs + e;
}
class wu extends Fe {
  constructor(e) {
    super(8, e);
  }
  decode(e, t = 0) {
    const r = Ne(e), o = r.readUInt32LE(t), i = r.readUInt32LE(t + 4);
    return Gi(i, o);
  }
  encode(e, t, r = 0) {
    const o = Wi(e), i = Ne(t);
    return i.writeUInt32LE(o.lo32, r), i.writeUInt32LE(o.hi32, r + 4), 8;
  }
}
H.NearUInt64 = wu;
class mu extends Fe {
  constructor(e) {
    super(8, e);
  }
  decode(e, t = 0) {
    const r = Ne(e), o = r.readUInt32BE(t), i = r.readUInt32BE(t + 4);
    return Gi(o, i);
  }
  encode(e, t, r = 0) {
    const o = Wi(e), i = Ne(t);
    return i.writeUInt32BE(o.hi32, r), i.writeUInt32BE(o.lo32, r + 4), 8;
  }
}
H.NearUInt64BE = mu;
class bu extends Fe {
  constructor(e) {
    super(8, e);
  }
  decode(e, t = 0) {
    const r = Ne(e), o = r.readUInt32LE(t), i = r.readInt32LE(t + 4);
    return Gi(i, o);
  }
  encode(e, t, r = 0) {
    const o = Wi(e), i = Ne(t);
    return i.writeUInt32LE(o.lo32, r), i.writeInt32LE(o.hi32, r + 4), 8;
  }
}
H.NearInt64 = bu;
class Au extends Fe {
  constructor(e) {
    super(8, e);
  }
  decode(e, t = 0) {
    const r = Ne(e), o = r.readInt32BE(t), i = r.readUInt32BE(t + 4);
    return Gi(o, i);
  }
  encode(e, t, r = 0) {
    const o = Wi(e), i = Ne(t);
    return i.writeInt32BE(o.hi32, r), i.writeUInt32BE(o.lo32, r + 4), 8;
  }
}
H.NearInt64BE = Au;
class vu extends Fe {
  constructor(e) {
    super(4, e);
  }
  decode(e, t = 0) {
    return Ne(e).readFloatLE(t);
  }
  encode(e, t, r = 0) {
    return Ne(t).writeFloatLE(e, r), 4;
  }
}
H.Float = vu;
class Eu extends Fe {
  constructor(e) {
    super(4, e);
  }
  decode(e, t = 0) {
    return Ne(e).readFloatBE(t);
  }
  encode(e, t, r = 0) {
    return Ne(t).writeFloatBE(e, r), 4;
  }
}
H.FloatBE = Eu;
class xu extends Fe {
  constructor(e) {
    super(8, e);
  }
  decode(e, t = 0) {
    return Ne(e).readDoubleLE(t);
  }
  encode(e, t, r = 0) {
    return Ne(t).writeDoubleLE(e, r), 8;
  }
}
H.Double = xu;
class Iu extends Fe {
  constructor(e) {
    super(8, e);
  }
  decode(e, t = 0) {
    return Ne(e).readDoubleBE(t);
  }
  encode(e, t, r = 0) {
    return Ne(t).writeDoubleBE(e, r), 8;
  }
}
H.DoubleBE = Iu;
class Su extends Fe {
  constructor(e, t, r) {
    if (!(e instanceof Fe))
      throw new TypeError("elementLayout must be a Layout");
    if (!(t instanceof zt && t.isCount() || Number.isInteger(t) && 0 <= t))
      throw new TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");
    let o = -1;
    !(t instanceof zt) && 0 < e.span && (o = t * e.span), super(o, r), this.elementLayout = e, this.count = t;
  }
  getSpan(e, t = 0) {
    if (0 <= this.span)
      return this.span;
    let r = 0, o = this.count;
    if (o instanceof zt && (o = o.decode(e, t)), 0 < this.elementLayout.span)
      r = o * this.elementLayout.span;
    else {
      let i = 0;
      for (; i < o; )
        r += this.elementLayout.getSpan(e, t + r), ++i;
    }
    return r;
  }
  decode(e, t = 0) {
    const r = [];
    let o = 0, i = this.count;
    for (i instanceof zt && (i = i.decode(e, t)); o < i; )
      r.push(this.elementLayout.decode(e, t)), t += this.elementLayout.getSpan(e, t), o += 1;
    return r;
  }
  encode(e, t, r = 0) {
    const o = this.elementLayout, i = e.reduce((c, u) => c + o.encode(u, t, r + c), 0);
    return this.count instanceof zt && this.count.encode(e.length, t, r), i;
  }
}
H.Sequence = Su;
class Bu extends Fe {
  constructor(e, t, r) {
    if (!(Array.isArray(e) && e.reduce((i, c) => i && c instanceof Fe, !0)))
      throw new TypeError("fields must be array of Layout instances");
    typeof t == "boolean" && r === void 0 && (r = t, t = void 0);
    for (const i of e)
      if (0 > i.span && i.property === void 0)
        throw new Error("fields cannot contain unnamed variable-length layout");
    let o = -1;
    try {
      o = e.reduce((i, c) => i + c.getSpan(), 0);
    } catch {
    }
    super(o, t), this.fields = e, this.decodePrefixes = !!r;
  }
  getSpan(e, t = 0) {
    if (0 <= this.span)
      return this.span;
    let r = 0;
    try {
      r = this.fields.reduce((o, i) => {
        const c = i.getSpan(e, t);
        return t += c, o + c;
      }, 0);
    } catch {
      throw new RangeError("indeterminate span");
    }
    return r;
  }
  decode(e, t = 0) {
    xr(e);
    const r = this.makeDestinationObject();
    for (const o of this.fields)
      if (o.property !== void 0 && (r[o.property] = o.decode(e, t)), t += o.getSpan(e, t), this.decodePrefixes && e.length === t)
        break;
    return r;
  }
  encode(e, t, r = 0) {
    const o = r;
    let i = 0, c = 0;
    for (const u of this.fields) {
      let d = u.span;
      if (c = 0 < d ? d : 0, u.property !== void 0) {
        const w = e[u.property];
        w !== void 0 && (c = u.encode(w, t, r), 0 > d && (d = u.getSpan(t, r)));
      }
      i = r, r += d;
    }
    return i + c - o;
  }
  fromArray(e) {
    const t = this.makeDestinationObject();
    for (const r of this.fields)
      r.property !== void 0 && 0 < e.length && (t[r.property] = e.shift());
    return t;
  }
  layoutFor(e) {
    if (typeof e != "string")
      throw new TypeError("property must be string");
    for (const t of this.fields)
      if (t.property === e)
        return t;
  }
  offsetOf(e) {
    if (typeof e != "string")
      throw new TypeError("property must be string");
    let t = 0;
    for (const r of this.fields) {
      if (r.property === e)
        return t;
      0 > r.span ? t = -1 : 0 <= t && (t += r.span);
    }
  }
}
H.Structure = Bu;
class Vs {
  constructor(e) {
    this.property = e;
  }
  decode(e, t) {
    throw new Error("UnionDiscriminator is abstract");
  }
  encode(e, t, r) {
    throw new Error("UnionDiscriminator is abstract");
  }
}
H.UnionDiscriminator = Vs;
class Ti extends Vs {
  constructor(e, t) {
    if (!(e instanceof zt && e.isCount()))
      throw new TypeError("layout must be an unsigned integer ExternalLayout");
    super(t || e.property || "variant"), this.layout = e;
  }
  decode(e, t) {
    return this.layout.decode(e, t);
  }
  encode(e, t, r) {
    return this.layout.encode(e, t, r);
  }
}
H.UnionLayoutDiscriminator = Ti;
class Zs extends Fe {
  constructor(e, t, r) {
    let o;
    if (e instanceof nn || e instanceof an)
      o = new Ti(new Ks(e));
    else if (e instanceof zt && e.isCount())
      o = new Ti(e);
    else if (e instanceof Vs)
      o = e;
    else
      throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
    if (t === void 0 && (t = null), !(t === null || t instanceof Fe))
      throw new TypeError("defaultLayout must be null or a Layout");
    if (t !== null) {
      if (0 > t.span)
        throw new Error("defaultLayout must have constant span");
      t.property === void 0 && (t = t.replicate("content"));
    }
    let i = -1;
    t && (i = t.span, 0 <= i && (e instanceof nn || e instanceof an) && (i += o.layout.span)), super(i, r), this.discriminator = o, this.usesPrefixDiscriminator = e instanceof nn || e instanceof an, this.defaultLayout = t, this.registry = {};
    let c = this.defaultGetSourceVariant.bind(this);
    this.getSourceVariant = function(u) {
      return c(u);
    }, this.configGetSourceVariant = function(u) {
      c = u.bind(this);
    };
  }
  getSpan(e, t = 0) {
    if (0 <= this.span)
      return this.span;
    const r = this.getVariant(e, t);
    if (!r)
      throw new Error("unable to determine span for unrecognized variant");
    return r.getSpan(e, t);
  }
  defaultGetSourceVariant(e) {
    if (Object.prototype.hasOwnProperty.call(e, this.discriminator.property)) {
      if (this.defaultLayout && this.defaultLayout.property && Object.prototype.hasOwnProperty.call(e, this.defaultLayout.property))
        return;
      const t = this.registry[e[this.discriminator.property]];
      if (t && (!t.layout || t.property && Object.prototype.hasOwnProperty.call(e, t.property)))
        return t;
    } else
      for (const t in this.registry) {
        const r = this.registry[t];
        if (r.property && Object.prototype.hasOwnProperty.call(e, r.property))
          return r;
      }
    throw new Error("unable to infer src variant");
  }
  decode(e, t = 0) {
    let r;
    const o = this.discriminator, i = o.decode(e, t), c = this.registry[i];
    if (c === void 0) {
      const u = this.defaultLayout;
      let d = 0;
      this.usesPrefixDiscriminator && (d = o.layout.span), r = this.makeDestinationObject(), r[o.property] = i, r[u.property] = u.decode(e, t + d);
    } else
      r = c.decode(e, t);
    return r;
  }
  encode(e, t, r = 0) {
    const o = this.getSourceVariant(e);
    if (o === void 0) {
      const i = this.discriminator, c = this.defaultLayout;
      let u = 0;
      return this.usesPrefixDiscriminator && (u = i.layout.span), i.encode(e[i.property], t, r), u + c.encode(e[c.property], t, r + u);
    }
    return o.encode(e, t, r);
  }
  addVariant(e, t, r) {
    const o = new Mu(this, e, t, r);
    return this.registry[e] = o, o;
  }
  getVariant(e, t = 0) {
    let r;
    return e instanceof Uint8Array ? r = this.discriminator.decode(e, t) : r = e, this.registry[r];
  }
}
H.Union = Zs;
class Mu extends Fe {
  constructor(e, t, r, o) {
    if (!(e instanceof Zs))
      throw new TypeError("union must be a Union");
    if (!Number.isInteger(t) || 0 > t)
      throw new TypeError("variant must be a (non-negative) integer");
    if (typeof r == "string" && o === void 0 && (o = r, r = null), r) {
      if (!(r instanceof Fe))
        throw new TypeError("layout must be a Layout");
      if (e.defaultLayout !== null && 0 <= r.span && r.span > e.defaultLayout.span)
        throw new Error("variant span exceeds span of containing union");
      if (typeof o != "string")
        throw new TypeError("variant must have a String property");
    }
    let i = e.span;
    0 > e.span && (i = r ? r.span : 0, 0 <= i && e.usesPrefixDiscriminator && (i += e.discriminator.layout.span)), super(i, o), this.union = e, this.variant = t, this.layout = r || null;
  }
  getSpan(e, t = 0) {
    if (0 <= this.span)
      return this.span;
    let r = 0;
    this.union.usesPrefixDiscriminator && (r = this.union.discriminator.layout.span);
    let o = 0;
    return this.layout && (o = this.layout.getSpan(e, t + r)), r + o;
  }
  decode(e, t = 0) {
    const r = this.makeDestinationObject();
    if (this !== this.union.getVariant(e, t))
      throw new Error("variant mismatch");
    let o = 0;
    return this.union.usesPrefixDiscriminator && (o = this.union.discriminator.layout.span), this.layout ? r[this.property] = this.layout.decode(e, t + o) : this.property ? r[this.property] = !0 : this.union.usesPrefixDiscriminator && (r[this.union.discriminator.property] = this.variant), r;
  }
  encode(e, t, r = 0) {
    let o = 0;
    if (this.union.usesPrefixDiscriminator && (o = this.union.discriminator.layout.span), this.layout && !Object.prototype.hasOwnProperty.call(e, this.property))
      throw new TypeError("variant lacks property " + this.property);
    this.union.discriminator.encode(this.variant, t, r);
    let i = o;
    if (this.layout && (this.layout.encode(e[this.property], t, r + o), i += this.layout.getSpan(t, r + o), 0 <= this.union.span && i > this.union.span))
      throw new Error("encoded variant overruns containing union");
    return i;
  }
  fromArray(e) {
    if (this.layout)
      return this.layout.fromArray(e);
  }
}
H.VariantLayout = Mu;
function ar(n) {
  return 0 > n && (n += 4294967296), n;
}
class Xs extends Fe {
  constructor(e, t, r) {
    if (!(e instanceof nn || e instanceof an))
      throw new TypeError("word must be a UInt or UIntBE layout");
    if (typeof t == "string" && r === void 0 && (r = t, t = !1), 4 < e.span)
      throw new RangeError("word cannot exceed 32 bits");
    super(e.span, r), this.word = e, this.msb = !!t, this.fields = [];
    let o = 0;
    this._packedSetValue = function(i) {
      return o = ar(i), this;
    }, this._packedGetValue = function() {
      return o;
    };
  }
  decode(e, t = 0) {
    const r = this.makeDestinationObject(), o = this.word.decode(e, t);
    this._packedSetValue(o);
    for (const i of this.fields)
      i.property !== void 0 && (r[i.property] = i.decode(e));
    return r;
  }
  encode(e, t, r = 0) {
    const o = this.word.decode(t, r);
    this._packedSetValue(o);
    for (const i of this.fields)
      if (i.property !== void 0) {
        const c = e[i.property];
        c !== void 0 && i.encode(c);
      }
    return this.word.encode(this._packedGetValue(), t, r);
  }
  addField(e, t) {
    const r = new Js(this, e, t);
    return this.fields.push(r), r;
  }
  addBoolean(e) {
    const t = new _u(this, e);
    return this.fields.push(t), t;
  }
  fieldFor(e) {
    if (typeof e != "string")
      throw new TypeError("property must be string");
    for (const t of this.fields)
      if (t.property === e)
        return t;
  }
}
H.BitStructure = Xs;
class Js {
  constructor(e, t, r) {
    if (!(e instanceof Xs))
      throw new TypeError("container must be a BitStructure");
    if (!Number.isInteger(t) || 0 >= t)
      throw new TypeError("bits must be positive integer");
    const o = 8 * e.span, i = e.fields.reduce((c, u) => c + u.bits, 0);
    if (t + i > o)
      throw new Error("bits too long for span remainder (" + (o - i) + " of " + o + " remain)");
    this.container = e, this.bits = t, this.valueMask = (1 << t) - 1, t === 32 && (this.valueMask = 4294967295), this.start = i, this.container.msb && (this.start = o - i - t), this.wordMask = ar(this.valueMask << this.start), this.property = r;
  }
  decode(e, t) {
    const r = this.container._packedGetValue();
    return ar(r & this.wordMask) >>> this.start;
  }
  encode(e) {
    if (typeof e != "number" || !Number.isInteger(e) || e !== ar(e & this.valueMask))
      throw new TypeError(Ys("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
    const t = this.container._packedGetValue(), r = ar(e << this.start);
    this.container._packedSetValue(ar(t & ~this.wordMask) | r);
  }
}
H.BitField = Js;
class _u extends Js {
  constructor(e, t) {
    super(e, 1, t);
  }
  decode(e, t) {
    return !!super.decode(e, t);
  }
  encode(e) {
    typeof e == "boolean" && (e = +e), super.encode(e);
  }
}
H.Boolean = _u;
class Cu extends Fe {
  constructor(e, t) {
    if (!(e instanceof zt && e.isCount() || Number.isInteger(e) && 0 <= e))
      throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout");
    let r = -1;
    e instanceof zt || (r = e), super(r, t), this.length = e;
  }
  getSpan(e, t) {
    let r = this.span;
    return 0 > r && (r = this.length.decode(e, t)), r;
  }
  decode(e, t = 0) {
    let r = this.span;
    return 0 > r && (r = this.length.decode(e, t)), Ne(e).slice(t, t + r);
  }
  encode(e, t, r) {
    let o = this.length;
    if (this.length instanceof zt && (o = e.length), !(e instanceof Uint8Array && o === e.length))
      throw new TypeError(Ys("Blob.encode", this) + " requires (length " + o + ") Uint8Array as src");
    if (r + o > t.length)
      throw new RangeError("encoding overruns Uint8Array");
    const i = Ne(e);
    return Ne(t).write(i.toString("hex"), r, o, "hex"), this.length instanceof zt && this.length.encode(o, t, r), o;
  }
}
H.Blob = Cu;
class Tu extends Fe {
  constructor(e) {
    super(-1, e);
  }
  getSpan(e, t = 0) {
    xr(e);
    let r = t;
    for (; r < e.length && e[r] !== 0; )
      r += 1;
    return 1 + r - t;
  }
  decode(e, t = 0) {
    const r = this.getSpan(e, t);
    return Ne(e).slice(t, t + r - 1).toString("utf-8");
  }
  encode(e, t, r = 0) {
    typeof e != "string" && (e = String(e));
    const o = qs.Buffer.from(e, "utf8"), i = o.length;
    if (r + i > t.length)
      throw new RangeError("encoding overruns Buffer");
    const c = Ne(t);
    return o.copy(c, r), c[r + i] = 0, i + 1;
  }
}
H.CString = Tu;
class Nu extends Fe {
  constructor(e, t) {
    if (typeof e == "string" && t === void 0 && (t = e, e = void 0), e === void 0)
      e = -1;
    else if (!Number.isInteger(e))
      throw new TypeError("maxSpan must be an integer");
    super(-1, t), this.maxSpan = e;
  }
  getSpan(e, t = 0) {
    return xr(e), e.length - t;
  }
  decode(e, t = 0) {
    const r = this.getSpan(e, t);
    if (0 <= this.maxSpan && this.maxSpan < r)
      throw new RangeError("text length exceeds maxSpan");
    return Ne(e).slice(t, t + r).toString("utf-8");
  }
  encode(e, t, r = 0) {
    typeof e != "string" && (e = String(e));
    const o = qs.Buffer.from(e, "utf8"), i = o.length;
    if (0 <= this.maxSpan && this.maxSpan < i)
      throw new RangeError("text length exceeds maxSpan");
    if (r + i > t.length)
      throw new RangeError("encoding overruns Buffer");
    return o.copy(Ne(t), r), i;
  }
}
H.UTF8 = Nu;
class Ru extends Fe {
  constructor(e, t) {
    super(0, t), this.value = e;
  }
  decode(e, t) {
    return this.value;
  }
  encode(e, t, r) {
    return 0;
  }
}
H.Constant = Ru;
H.greedy = (n, e) => new yu(n, e);
var Yn = H.offset = (n, e, t) => new Ks(n, e, t), Re = H.u8 = (n) => new nn(1, n), Zt = H.u16 = (n) => new nn(2, n);
H.u24 = (n) => new nn(3, n);
var pe = H.u32 = (n) => new nn(4, n);
H.u40 = (n) => new nn(5, n);
H.u48 = (n) => new nn(6, n);
var Mt = H.nu64 = (n) => new wu(n);
H.u16be = (n) => new an(2, n);
H.u24be = (n) => new an(3, n);
H.u32be = (n) => new an(4, n);
H.u40be = (n) => new an(5, n);
H.u48be = (n) => new an(6, n);
H.nu64be = (n) => new mu(n);
H.s8 = (n) => new er(1, n);
H.s16 = (n) => new er(2, n);
H.s24 = (n) => new er(3, n);
H.s32 = (n) => new er(4, n);
H.s40 = (n) => new er(5, n);
H.s48 = (n) => new er(6, n);
var Qt = H.ns64 = (n) => new bu(n);
H.s16be = (n) => new Ir(2, n);
H.s24be = (n) => new Ir(3, n);
H.s32be = (n) => new Ir(4, n);
H.s40be = (n) => new Ir(5, n);
H.s48be = (n) => new Ir(6, n);
H.ns64be = (n) => new Au(n);
H.f32 = (n) => new vu(n);
H.f32be = (n) => new Eu(n);
H.f64 = (n) => new xu(n);
H.f64be = (n) => new Iu(n);
var ue = H.struct = (n, e, t) => new Bu(n, e, t);
H.bits = (n, e, t) => new Xs(n, e, t);
var Pt = H.seq = (n, e, t) => new Su(n, e, t);
H.union = (n, e, t) => new Zs(n, e, t);
H.unionLayoutDiscriminator = (n, e) => new Ti(n, e);
var $e = H.blob = (n, e) => new Cu(n, e);
H.cstr = (n) => new Tu(n);
H.utf8 = (n, e) => new Nu(n, e);
H.constant = (n, e) => new Ru(n, e);
var Xr = {};
Object.defineProperty(Xr, "__esModule", { value: !0 });
function Id(n) {
  {
    const e = Buffer.from(n);
    e.reverse();
    const t = e.toString("hex");
    return t.length === 0 ? BigInt(0) : BigInt(`0x${t}`);
  }
}
var Sd = Xr.toBigIntLE = Id;
function Bd(n) {
  {
    const e = n.toString("hex");
    return e.length === 0 ? BigInt(0) : BigInt(`0x${e}`);
  }
}
Xr.toBigIntBE = Bd;
function Md(n, e) {
  {
    const t = n.toString(16), r = Buffer.from(t.padStart(e * 2, "0").slice(0, e * 2), "hex");
    return r.reverse(), r;
  }
}
var _d = Xr.toBufferLE = Md;
function Cd(n, e) {
  {
    const t = n.toString(16);
    return Buffer.from(t.padStart(e * 2, "0").slice(0, e * 2), "hex");
  }
}
Xr.toBufferBE = Cd;
class Td extends TypeError {
  constructor(e, t) {
    let r;
    const {
      message: o,
      ...i
    } = e, {
      path: c
    } = e, u = c.length === 0 ? o : "At path: " + c.join(".") + " -- " + o;
    super(u), Object.assign(this, i), this.name = this.constructor.name, this.failures = () => {
      var d;
      return (d = r) != null ? d : r = [e, ...t()];
    };
  }
}
function Nd(n) {
  return Un(n) && typeof n[Symbol.iterator] == "function";
}
function Un(n) {
  return typeof n == "object" && n != null;
}
function un(n) {
  return typeof n == "string" ? JSON.stringify(n) : "" + n;
}
function Rd(n) {
  const {
    done: e,
    value: t
  } = n.next();
  return e ? void 0 : t;
}
function kd(n, e, t, r) {
  if (n === !0)
    return;
  n === !1 ? n = {} : typeof n == "string" && (n = {
    message: n
  });
  const {
    path: o,
    branch: i
  } = e, {
    type: c
  } = t, {
    refinement: u,
    message: d = "Expected a value of type `" + c + "`" + (u ? " with refinement `" + u + "`" : "") + ", but received: `" + un(r) + "`"
  } = n;
  return {
    value: r,
    type: c,
    refinement: u,
    key: o[o.length - 1],
    path: o,
    branch: i,
    ...n,
    message: d
  };
}
function* Ya(n, e, t, r) {
  Nd(n) || (n = [n]);
  for (const o of n) {
    const i = kd(o, e, t, r);
    i && (yield i);
  }
}
function* $s(n, e, t = {}) {
  const {
    path: r = [],
    branch: o = [n],
    coerce: i = !1,
    mask: c = !1
  } = t, u = {
    path: r,
    branch: o
  };
  if (i && (n = e.coercer(n, u), c && e.type !== "type" && Un(e.schema) && Un(n) && !Array.isArray(n)))
    for (const w in n)
      e.schema[w] === void 0 && delete n[w];
  let d = !0;
  for (const w of e.validator(n, u))
    d = !1, yield [w, void 0];
  for (let [w, v, I] of e.entries(n, u)) {
    const _ = $s(v, I, {
      path: w === void 0 ? r : [...r, w],
      branch: w === void 0 ? o : [...o, v],
      coerce: i,
      mask: c
    });
    for (const E of _)
      E[0] ? (d = !1, yield [E[0], void 0]) : i && (v = E[1], w === void 0 ? n = v : n instanceof Map ? n.set(w, v) : n instanceof Set ? n.add(v) : Un(n) && (n[w] = v));
  }
  if (d)
    for (const w of e.refiner(n, u))
      d = !1, yield [w, void 0];
  d && (yield [void 0, n]);
}
class An {
  constructor(e) {
    const {
      type: t,
      schema: r,
      validator: o,
      refiner: i,
      coercer: c = (d) => d,
      entries: u = function* () {
      }
    } = e;
    this.type = t, this.schema = r, this.entries = u, this.coercer = c, o ? this.validator = (d, w) => {
      const v = o(d, w);
      return Ya(v, w, this, d);
    } : this.validator = () => [], i ? this.refiner = (d, w) => {
      const v = i(d, w);
      return Ya(v, w, this, d);
    } : this.refiner = () => [];
  }
  assert(e) {
    return Od(e, this);
  }
  create(e) {
    return re(e, this);
  }
  is(e) {
    return ku(e, this);
  }
  mask(e) {
    return Ld(e, this);
  }
  validate(e, t = {}) {
    return Jr(e, this, t);
  }
}
function Od(n, e) {
  const t = Jr(n, e);
  if (t[0])
    throw t[0];
}
function re(n, e) {
  const t = Jr(n, e, {
    coerce: !0
  });
  if (t[0])
    throw t[0];
  return t[1];
}
function Ld(n, e) {
  const t = Jr(n, e, {
    coerce: !0,
    mask: !0
  });
  if (t[0])
    throw t[0];
  return t[1];
}
function ku(n, e) {
  return !Jr(n, e)[0];
}
function Jr(n, e, t = {}) {
  const r = $s(n, e, t), o = Rd(r);
  if (o[0])
    return [new Td(o[0], function* () {
      for (const c of r)
        c[0] && (yield c[0]);
    }), void 0];
  {
    const i = o[1];
    return [void 0, i];
  }
}
function tr(n, e) {
  return new An({
    type: n,
    schema: null,
    validator: e
  });
}
function Ud() {
  return tr("any", () => !0);
}
function ce(n) {
  return new An({
    type: "array",
    schema: n,
    *entries(e) {
      if (n && Array.isArray(e))
        for (const [t, r] of e.entries())
          yield [t, r, n];
    },
    coercer(e) {
      return Array.isArray(e) ? e.slice() : e;
    },
    validator(e) {
      return Array.isArray(e) || "Expected an array value, but received: " + un(e);
    }
  });
}
function xn() {
  return tr("boolean", (n) => typeof n == "boolean");
}
function ea(n) {
  return tr("instance", (e) => e instanceof n || "Expected a `" + n.name + "` instance, but received: " + un(e));
}
function Je(n) {
  const e = un(n), t = typeof n;
  return new An({
    type: "literal",
    schema: t === "string" || t === "number" || t === "boolean" ? n : null,
    validator(r) {
      return r === n || "Expected the literal `" + e + "`, but received: " + un(r);
    }
  });
}
function Dd() {
  return tr("never", () => !1);
}
function de(n) {
  return new An({
    ...n,
    validator: (e, t) => e === null || n.validator(e, t),
    refiner: (e, t) => e === null || n.refiner(e, t)
  });
}
function G() {
  return tr("number", (n) => typeof n == "number" && !isNaN(n) || "Expected a number, but received: " + un(n));
}
function Ee(n) {
  return new An({
    ...n,
    validator: (e, t) => e === void 0 || n.validator(e, t),
    refiner: (e, t) => e === void 0 || n.refiner(e, t)
  });
}
function Ou(n, e) {
  return new An({
    type: "record",
    schema: null,
    *entries(t) {
      if (Un(t))
        for (const r in t) {
          const o = t[r];
          yield [r, r, n], yield [r, o, e];
        }
    },
    validator(t) {
      return Un(t) || "Expected an object, but received: " + un(t);
    }
  });
}
function te() {
  return tr("string", (n) => typeof n == "string" || "Expected a string, but received: " + un(n));
}
function ta(n) {
  const e = Dd();
  return new An({
    type: "tuple",
    schema: null,
    *entries(t) {
      if (Array.isArray(t)) {
        const r = Math.max(n.length, t.length);
        for (let o = 0; o < r; o++)
          yield [o, t[o], n[o] || e];
      }
    },
    validator(t) {
      return Array.isArray(t) || "Expected an array, but received: " + un(t);
    }
  });
}
function X(n) {
  const e = Object.keys(n);
  return new An({
    type: "type",
    schema: n,
    *entries(t) {
      if (Un(t))
        for (const r of e)
          yield [r, t[r], n[r]];
    },
    validator(t) {
      return Un(t) || "Expected an object, but received: " + un(t);
    }
  });
}
function Wt(n) {
  const e = n.map((t) => t.type).join(" | ");
  return new An({
    type: "union",
    schema: null,
    validator(t, r) {
      const o = [];
      for (const i of n) {
        const [...c] = $s(t, i, r), [u] = c;
        if (u[0])
          for (const [d] of c)
            d && o.push(d);
        else
          return [];
      }
      return ["Expected the value to satisfy a union of `" + e + "`, but received: " + un(t), ...o];
    }
  });
}
function $r() {
  return tr("unknown", () => !0);
}
function ei(n, e, t) {
  return new An({
    ...n,
    coercer: (r, o) => ku(r, e) ? n.coercer(t(r, o), o) : n.coercer(r, o)
  });
}
var na = {}, ji = { exports: {} };
(function(n) {
  function e(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }
  n.exports = e, n.exports.__esModule = !0, n.exports.default = n.exports;
})(ji);
var Po = { exports: {} }, Ka;
function ra() {
  return Ka || (Ka = 1, function(n) {
    function e(r, o) {
      for (var i = 0; i < o.length; i++) {
        var c = o[i];
        c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(r, c.key, c);
      }
    }
    function t(r, o, i) {
      return o && e(r.prototype, o), i && e(r, i), Object.defineProperty(r, "prototype", {
        writable: !1
      }), r;
    }
    n.exports = t, n.exports.__esModule = !0, n.exports.default = n.exports;
  }(Po)), Po.exports;
}
var Fo = { exports: {} }, Va;
function ia() {
  return Va || (Va = 1, function(n) {
    function e(t, r) {
      if (!(t instanceof r))
        throw new TypeError("Cannot call a class as a function");
    }
    n.exports = e, n.exports.__esModule = !0, n.exports.default = n.exports;
  }(Fo)), Fo.exports;
}
var zo = { exports: {} }, Ho = { exports: {} }, Za;
function Pd() {
  return Za || (Za = 1, function(n) {
    function e(t, r) {
      return n.exports = e = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, c) {
        return i.__proto__ = c, i;
      }, n.exports.__esModule = !0, n.exports.default = n.exports, e(t, r);
    }
    n.exports = e, n.exports.__esModule = !0, n.exports.default = n.exports;
  }(Ho)), Ho.exports;
}
var Xa;
function oa() {
  return Xa || (Xa = 1, function(n) {
    var e = Pd();
    function t(r, o) {
      if (typeof o != "function" && o !== null)
        throw new TypeError("Super expression must either be null or a function");
      r.prototype = Object.create(o && o.prototype, {
        constructor: {
          value: r,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(r, "prototype", {
        writable: !1
      }), o && e(r, o);
    }
    n.exports = t, n.exports.__esModule = !0, n.exports.default = n.exports;
  }(zo)), zo.exports;
}
var Wo = { exports: {} }, Go = { exports: {} }, Ja;
function sa() {
  return Ja || (Ja = 1, function(n) {
    function e(t) {
      return n.exports = e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
        return typeof r;
      } : function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, n.exports.__esModule = !0, n.exports.default = n.exports, e(t);
    }
    n.exports = e, n.exports.__esModule = !0, n.exports.default = n.exports;
  }(Go)), Go.exports;
}
var jo = { exports: {} }, $a;
function Fd() {
  return $a || ($a = 1, function(n) {
    function e(t) {
      if (t === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }
    n.exports = e, n.exports.__esModule = !0, n.exports.default = n.exports;
  }(jo)), jo.exports;
}
var ec;
function aa() {
  return ec || (ec = 1, function(n) {
    var e = sa().default, t = Fd();
    function r(o, i) {
      if (i && (e(i) === "object" || typeof i == "function"))
        return i;
      if (i !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return t(o);
    }
    n.exports = r, n.exports.__esModule = !0, n.exports.default = n.exports;
  }(Wo)), Wo.exports;
}
var Qo = { exports: {} }, tc;
function ca() {
  return tc || (tc = 1, function(n) {
    function e(t) {
      return n.exports = e = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, n.exports.__esModule = !0, n.exports.default = n.exports, e(t);
    }
    n.exports = e, n.exports.__esModule = !0, n.exports.default = n.exports;
  }(Qo)), Qo.exports;
}
var qo = {}, Qi = { exports: {} };
(function(n) {
  var e = Object.prototype.hasOwnProperty, t = "~";
  function r() {
  }
  Object.create && (r.prototype = /* @__PURE__ */ Object.create(null), new r().__proto__ || (t = !1));
  function o(d, w, v) {
    this.fn = d, this.context = w, this.once = v || !1;
  }
  function i(d, w, v, I, _) {
    if (typeof v != "function")
      throw new TypeError("The listener must be a function");
    var E = new o(v, I || d, _), N = t ? t + w : w;
    return d._events[N] ? d._events[N].fn ? d._events[N] = [d._events[N], E] : d._events[N].push(E) : (d._events[N] = E, d._eventsCount++), d;
  }
  function c(d, w) {
    --d._eventsCount === 0 ? d._events = new r() : delete d._events[w];
  }
  function u() {
    this._events = new r(), this._eventsCount = 0;
  }
  u.prototype.eventNames = function() {
    var w = [], v, I;
    if (this._eventsCount === 0)
      return w;
    for (I in v = this._events)
      e.call(v, I) && w.push(t ? I.slice(1) : I);
    return Object.getOwnPropertySymbols ? w.concat(Object.getOwnPropertySymbols(v)) : w;
  }, u.prototype.listeners = function(w) {
    var v = t ? t + w : w, I = this._events[v];
    if (!I)
      return [];
    if (I.fn)
      return [I.fn];
    for (var _ = 0, E = I.length, N = new Array(E); _ < E; _++)
      N[_] = I[_].fn;
    return N;
  }, u.prototype.listenerCount = function(w) {
    var v = t ? t + w : w, I = this._events[v];
    return I ? I.fn ? 1 : I.length : 0;
  }, u.prototype.emit = function(w, v, I, _, E, N) {
    var T = t ? t + w : w;
    if (!this._events[T])
      return !1;
    var U = this._events[T], P = arguments.length, F, O;
    if (U.fn) {
      switch (U.once && this.removeListener(w, U.fn, void 0, !0), P) {
        case 1:
          return U.fn.call(U.context), !0;
        case 2:
          return U.fn.call(U.context, v), !0;
        case 3:
          return U.fn.call(U.context, v, I), !0;
        case 4:
          return U.fn.call(U.context, v, I, _), !0;
        case 5:
          return U.fn.call(U.context, v, I, _, E), !0;
        case 6:
          return U.fn.call(U.context, v, I, _, E, N), !0;
      }
      for (O = 1, F = new Array(P - 1); O < P; O++)
        F[O - 1] = arguments[O];
      U.fn.apply(U.context, F);
    } else {
      var z = U.length, L;
      for (O = 0; O < z; O++)
        switch (U[O].once && this.removeListener(w, U[O].fn, void 0, !0), P) {
          case 1:
            U[O].fn.call(U[O].context);
            break;
          case 2:
            U[O].fn.call(U[O].context, v);
            break;
          case 3:
            U[O].fn.call(U[O].context, v, I);
            break;
          case 4:
            U[O].fn.call(U[O].context, v, I, _);
            break;
          default:
            if (!F)
              for (L = 1, F = new Array(P - 1); L < P; L++)
                F[L - 1] = arguments[L];
            U[O].fn.apply(U[O].context, F);
        }
    }
    return !0;
  }, u.prototype.on = function(w, v, I) {
    return i(this, w, v, I, !1);
  }, u.prototype.once = function(w, v, I) {
    return i(this, w, v, I, !0);
  }, u.prototype.removeListener = function(w, v, I, _) {
    var E = t ? t + w : w;
    if (!this._events[E])
      return this;
    if (!v)
      return c(this, E), this;
    var N = this._events[E];
    if (N.fn)
      N.fn === v && (!_ || N.once) && (!I || N.context === I) && c(this, E);
    else {
      for (var T = 0, U = [], P = N.length; T < P; T++)
        (N[T].fn !== v || _ && !N[T].once || I && N[T].context !== I) && U.push(N[T]);
      U.length ? this._events[E] = U.length === 1 ? U[0] : U : c(this, E);
    }
    return this;
  }, u.prototype.removeAllListeners = function(w) {
    var v;
    return w ? (v = t ? t + w : w, this._events[v] && c(this, v)) : (this._events = new r(), this._eventsCount = 0), this;
  }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = t, u.EventEmitter = u, n.exports = u;
})(Qi);
const zd = Qi.exports;
var nc;
function Hd() {
  return nc || (nc = 1, function(n) {
    var e = ji.exports;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = I;
    var t = e(ia()), r = e(ra()), o = e(oa()), i = e(aa()), c = e(ca()), u = Qi.exports;
    function d(_) {
      var E = w();
      return function() {
        var T = (0, c.default)(_), U;
        if (E) {
          var P = (0, c.default)(this).constructor;
          U = Reflect.construct(T, arguments, P);
        } else
          U = T.apply(this, arguments);
        return (0, i.default)(this, U);
      };
    }
    function w() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    var v = /* @__PURE__ */ function(_) {
      (0, o.default)(N, _);
      var E = d(N);
      function N(T, U, P) {
        var F;
        return (0, t.default)(this, N), F = E.call(this), F.socket = new window.WebSocket(T, P), F.socket.onopen = function() {
          return F.emit("open");
        }, F.socket.onmessage = function(O) {
          return F.emit("message", O.data);
        }, F.socket.onerror = function(O) {
          return F.emit("error", O);
        }, F.socket.onclose = function(O) {
          F.emit("close", O.code, O.reason);
        }, F;
      }
      return (0, r.default)(N, [{
        key: "send",
        value: function(U, P, F) {
          var O = F || P;
          try {
            this.socket.send(U), O();
          } catch (z) {
            O(z);
          }
        }
      }, {
        key: "close",
        value: function(U, P) {
          this.socket.close(U, P);
        }
      }, {
        key: "addEventListener",
        value: function(U, P, F) {
          this.socket.addEventListener(U, P, F);
        }
      }]), N;
    }(u.EventEmitter);
    function I(_, E) {
      return new v(_, E);
    }
  }(qo)), qo;
}
var Yo = {}, Ko = { exports: {} }, rc;
function Wd() {
  return rc || (rc = 1, function(n) {
    var e = sa().default;
    function t() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
      n.exports = t = function() {
        return r;
      }, n.exports.__esModule = !0, n.exports.default = n.exports;
      var r = {}, o = Object.prototype, i = o.hasOwnProperty, c = typeof Symbol == "function" ? Symbol : {}, u = c.iterator || "@@iterator", d = c.asyncIterator || "@@asyncIterator", w = c.toStringTag || "@@toStringTag";
      function v(M, l, g) {
        return Object.defineProperty(M, l, {
          value: g,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }), M[l];
      }
      try {
        v({}, "");
      } catch {
        v = function(g, m, y) {
          return g[m] = y;
        };
      }
      function I(M, l, g, m) {
        var y = l && l.prototype instanceof N ? l : N, x = Object.create(y.prototype), k = new Se(m || []);
        return x._invoke = function(C, b, h) {
          var B = "suspendedStart";
          return function(q, Z) {
            if (B === "executing")
              throw new Error("Generator is already running");
            if (B === "completed") {
              if (q === "throw")
                throw Z;
              return Me();
            }
            for (h.method = q, h.arg = Z; ; ) {
              var V = h.delegate;
              if (V) {
                var oe = j(V, h);
                if (oe) {
                  if (oe === E)
                    continue;
                  return oe;
                }
              }
              if (h.method === "next")
                h.sent = h._sent = h.arg;
              else if (h.method === "throw") {
                if (B === "suspendedStart")
                  throw B = "completed", h.arg;
                h.dispatchException(h.arg);
              } else
                h.method === "return" && h.abrupt("return", h.arg);
              B = "executing";
              var $ = _(C, b, h);
              if ($.type === "normal") {
                if (B = h.done ? "completed" : "suspendedYield", $.arg === E)
                  continue;
                return {
                  value: $.arg,
                  done: h.done
                };
              }
              $.type === "throw" && (B = "completed", h.method = "throw", h.arg = $.arg);
            }
          };
        }(M, g, k), x;
      }
      function _(M, l, g) {
        try {
          return {
            type: "normal",
            arg: M.call(l, g)
          };
        } catch (m) {
          return {
            type: "throw",
            arg: m
          };
        }
      }
      r.wrap = I;
      var E = {};
      function N() {
      }
      function T() {
      }
      function U() {
      }
      var P = {};
      v(P, u, function() {
        return this;
      });
      var F = Object.getPrototypeOf, O = F && F(F(ge([])));
      O && O !== o && i.call(O, u) && (P = O);
      var z = U.prototype = N.prototype = Object.create(P);
      function L(M) {
        ["next", "throw", "return"].forEach(function(l) {
          v(M, l, function(g) {
            return this._invoke(l, g);
          });
        });
      }
      function W(M, l) {
        function g(y, x, k, C) {
          var b = _(M[y], M, x);
          if (b.type !== "throw") {
            var h = b.arg, B = h.value;
            return B && e(B) == "object" && i.call(B, "__await") ? l.resolve(B.__await).then(function(q) {
              g("next", q, k, C);
            }, function(q) {
              g("throw", q, k, C);
            }) : l.resolve(B).then(function(q) {
              h.value = q, k(h);
            }, function(q) {
              return g("throw", q, k, C);
            });
          }
          C(b.arg);
        }
        var m;
        this._invoke = function(y, x) {
          function k() {
            return new l(function(C, b) {
              g(y, x, C, b);
            });
          }
          return m = m ? m.then(k, k) : k();
        };
      }
      function j(M, l) {
        var g = M.iterator[l.method];
        if (g === void 0) {
          if (l.delegate = null, l.method === "throw") {
            if (M.iterator.return && (l.method = "return", l.arg = void 0, j(M, l), l.method === "throw"))
              return E;
            l.method = "throw", l.arg = new TypeError("The iterator does not provide a 'throw' method");
          }
          return E;
        }
        var m = _(g, M.iterator, l.arg);
        if (m.type === "throw")
          return l.method = "throw", l.arg = m.arg, l.delegate = null, E;
        var y = m.arg;
        return y ? y.done ? (l[M.resultName] = y.value, l.next = M.nextLoc, l.method !== "return" && (l.method = "next", l.arg = void 0), l.delegate = null, E) : y : (l.method = "throw", l.arg = new TypeError("iterator result is not an object"), l.delegate = null, E);
      }
      function Q(M) {
        var l = {
          tryLoc: M[0]
        };
        1 in M && (l.catchLoc = M[1]), 2 in M && (l.finallyLoc = M[2], l.afterLoc = M[3]), this.tryEntries.push(l);
      }
      function le(M) {
        var l = M.completion || {};
        l.type = "normal", delete l.arg, M.completion = l;
      }
      function Se(M) {
        this.tryEntries = [{
          tryLoc: "root"
        }], M.forEach(Q, this), this.reset(!0);
      }
      function ge(M) {
        if (M) {
          var l = M[u];
          if (l)
            return l.call(M);
          if (typeof M.next == "function")
            return M;
          if (!isNaN(M.length)) {
            var g = -1, m = function y() {
              for (; ++g < M.length; )
                if (i.call(M, g))
                  return y.value = M[g], y.done = !1, y;
              return y.value = void 0, y.done = !0, y;
            };
            return m.next = m;
          }
        }
        return {
          next: Me
        };
      }
      function Me() {
        return {
          value: void 0,
          done: !0
        };
      }
      return T.prototype = U, v(z, "constructor", U), v(U, "constructor", T), T.displayName = v(U, w, "GeneratorFunction"), r.isGeneratorFunction = function(M) {
        var l = typeof M == "function" && M.constructor;
        return !!l && (l === T || (l.displayName || l.name) === "GeneratorFunction");
      }, r.mark = function(M) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(M, U) : (M.__proto__ = U, v(M, w, "GeneratorFunction")), M.prototype = Object.create(z), M;
      }, r.awrap = function(M) {
        return {
          __await: M
        };
      }, L(W.prototype), v(W.prototype, d, function() {
        return this;
      }), r.AsyncIterator = W, r.async = function(M, l, g, m, y) {
        y === void 0 && (y = Promise);
        var x = new W(I(M, l, g, m), y);
        return r.isGeneratorFunction(l) ? x : x.next().then(function(k) {
          return k.done ? k.value : x.next();
        });
      }, L(z), v(z, w, "Generator"), v(z, u, function() {
        return this;
      }), v(z, "toString", function() {
        return "[object Generator]";
      }), r.keys = function(M) {
        var l = [];
        for (var g in M)
          l.push(g);
        return l.reverse(), function m() {
          for (; l.length; ) {
            var y = l.pop();
            if (y in M)
              return m.value = y, m.done = !1, m;
          }
          return m.done = !0, m;
        };
      }, r.values = ge, Se.prototype = {
        constructor: Se,
        reset: function(l) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(le), !l)
            for (var g in this)
              g.charAt(0) === "t" && i.call(this, g) && !isNaN(+g.slice(1)) && (this[g] = void 0);
        },
        stop: function() {
          this.done = !0;
          var l = this.tryEntries[0].completion;
          if (l.type === "throw")
            throw l.arg;
          return this.rval;
        },
        dispatchException: function(l) {
          if (this.done)
            throw l;
          var g = this;
          function m(h, B) {
            return k.type = "throw", k.arg = l, g.next = h, B && (g.method = "next", g.arg = void 0), !!B;
          }
          for (var y = this.tryEntries.length - 1; y >= 0; --y) {
            var x = this.tryEntries[y], k = x.completion;
            if (x.tryLoc === "root")
              return m("end");
            if (x.tryLoc <= this.prev) {
              var C = i.call(x, "catchLoc"), b = i.call(x, "finallyLoc");
              if (C && b) {
                if (this.prev < x.catchLoc)
                  return m(x.catchLoc, !0);
                if (this.prev < x.finallyLoc)
                  return m(x.finallyLoc);
              } else if (C) {
                if (this.prev < x.catchLoc)
                  return m(x.catchLoc, !0);
              } else {
                if (!b)
                  throw new Error("try statement without catch or finally");
                if (this.prev < x.finallyLoc)
                  return m(x.finallyLoc);
              }
            }
          }
        },
        abrupt: function(l, g) {
          for (var m = this.tryEntries.length - 1; m >= 0; --m) {
            var y = this.tryEntries[m];
            if (y.tryLoc <= this.prev && i.call(y, "finallyLoc") && this.prev < y.finallyLoc) {
              var x = y;
              break;
            }
          }
          x && (l === "break" || l === "continue") && x.tryLoc <= g && g <= x.finallyLoc && (x = null);
          var k = x ? x.completion : {};
          return k.type = l, k.arg = g, x ? (this.method = "next", this.next = x.finallyLoc, E) : this.complete(k);
        },
        complete: function(l, g) {
          if (l.type === "throw")
            throw l.arg;
          return l.type === "break" || l.type === "continue" ? this.next = l.arg : l.type === "return" ? (this.rval = this.arg = l.arg, this.method = "return", this.next = "end") : l.type === "normal" && g && (this.next = g), E;
        },
        finish: function(l) {
          for (var g = this.tryEntries.length - 1; g >= 0; --g) {
            var m = this.tryEntries[g];
            if (m.finallyLoc === l)
              return this.complete(m.completion, m.afterLoc), le(m), E;
          }
        },
        catch: function(l) {
          for (var g = this.tryEntries.length - 1; g >= 0; --g) {
            var m = this.tryEntries[g];
            if (m.tryLoc === l) {
              var y = m.completion;
              if (y.type === "throw") {
                var x = y.arg;
                le(m);
              }
              return x;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function(l, g, m) {
          return this.delegate = {
            iterator: ge(l),
            resultName: g,
            nextLoc: m
          }, this.method === "next" && (this.arg = void 0), E;
        }
      }, r;
    }
    n.exports = t, n.exports.__esModule = !0, n.exports.default = n.exports;
  }(Ko)), Ko.exports;
}
var Vo, ic;
function Gd() {
  if (ic)
    return Vo;
  ic = 1;
  var n = Wd()();
  Vo = n;
  try {
    regeneratorRuntime = n;
  } catch {
    typeof globalThis == "object" ? globalThis.regeneratorRuntime = n : Function("r", "regeneratorRuntime = r")(n);
  }
  return Vo;
}
var Zo = { exports: {} }, oc;
function jd() {
  return oc || (oc = 1, function(n) {
    function e(r, o, i, c, u, d, w) {
      try {
        var v = r[d](w), I = v.value;
      } catch (_) {
        i(_);
        return;
      }
      v.done ? o(I) : Promise.resolve(I).then(c, u);
    }
    function t(r) {
      return function() {
        var o = this, i = arguments;
        return new Promise(function(c, u) {
          var d = r.apply(o, i);
          function w(I) {
            e(d, c, u, w, v, "next", I);
          }
          function v(I) {
            e(d, c, u, w, v, "throw", I);
          }
          w(void 0);
        });
      };
    }
    n.exports = t, n.exports.__esModule = !0, n.exports.default = n.exports;
  }(Zo)), Zo.exports;
}
var sc;
function Qd() {
  return sc || (sc = 1, function(n) {
    var e = ji.exports;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var t = e(Gd()), r = e(jd()), o = e(sa()), i = e(ia()), c = e(ra()), u = e(oa()), d = e(aa()), w = e(ca()), v = Qi.exports;
    function I(T) {
      var U = _();
      return function() {
        var F = (0, w.default)(T), O;
        if (U) {
          var z = (0, w.default)(this).constructor;
          O = Reflect.construct(F, arguments, z);
        } else
          O = F.apply(this, arguments);
        return (0, d.default)(this, O);
      };
    }
    function _() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    var E = function(T, U) {
      var P = {};
      for (var F in T)
        Object.prototype.hasOwnProperty.call(T, F) && U.indexOf(F) < 0 && (P[F] = T[F]);
      if (T != null && typeof Object.getOwnPropertySymbols == "function")
        for (var O = 0, F = Object.getOwnPropertySymbols(T); O < F.length; O++)
          U.indexOf(F[O]) < 0 && Object.prototype.propertyIsEnumerable.call(T, F[O]) && (P[F[O]] = T[F[O]]);
      return P;
    }, N = /* @__PURE__ */ function(T) {
      (0, u.default)(P, T);
      var U = I(P);
      function P(F) {
        var O, z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "ws://localhost:8080", L = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, W = arguments.length > 3 ? arguments[3] : void 0;
        (0, i.default)(this, P);
        var j = L.autoconnect, Q = j === void 0 ? !0 : j, le = L.reconnect, Se = le === void 0 ? !0 : le, ge = L.reconnect_interval, Me = ge === void 0 ? 1e3 : ge, M = L.max_reconnects, l = M === void 0 ? 5 : M, g = E(L, ["autoconnect", "reconnect", "reconnect_interval", "max_reconnects"]);
        return O = U.call(this), O.webSocketFactory = F, O.queue = {}, O.rpc_id = 0, O.address = z, O.autoconnect = Q, O.ready = !1, O.reconnect = Se, O.reconnect_interval = Me, O.max_reconnects = l, O.rest_options = g, O.current_reconnects = 0, O.generate_request_id = W || function() {
          return ++O.rpc_id;
        }, O.autoconnect && O._connect(O.address, Object.assign({
          autoconnect: O.autoconnect,
          reconnect: O.reconnect,
          reconnect_interval: O.reconnect_interval,
          max_reconnects: O.max_reconnects
        }, O.rest_options)), O;
      }
      return (0, c.default)(P, [{
        key: "connect",
        value: function() {
          this.socket || this._connect(this.address, Object.assign({
            autoconnect: this.autoconnect,
            reconnect: this.reconnect,
            reconnect_interval: this.reconnect_interval,
            max_reconnects: this.max_reconnects
          }, this.rest_options));
        }
      }, {
        key: "call",
        value: function(O, z, L, W) {
          var j = this;
          return !W && (0, o.default)(L) === "object" && (W = L, L = null), new Promise(function(Q, le) {
            if (!j.ready)
              return le(new Error("socket not ready"));
            var Se = j.generate_request_id(O, z), ge = {
              jsonrpc: "2.0",
              method: O,
              params: z || null,
              id: Se
            };
            j.socket.send(JSON.stringify(ge), W, function(Me) {
              if (Me)
                return le(Me);
              j.queue[Se] = {
                promise: [Q, le]
              }, L && (j.queue[Se].timeout = setTimeout(function() {
                delete j.queue[Se], le(new Error("reply timeout"));
              }, L));
            });
          });
        }
      }, {
        key: "login",
        value: function() {
          var F = (0, r.default)(/* @__PURE__ */ t.default.mark(function z(L) {
            var W;
            return t.default.wrap(function(Q) {
              for (; ; )
                switch (Q.prev = Q.next) {
                  case 0:
                    return Q.next = 2, this.call("rpc.login", L);
                  case 2:
                    if (W = Q.sent, W) {
                      Q.next = 5;
                      break;
                    }
                    throw new Error("authentication failed");
                  case 5:
                    return Q.abrupt("return", W);
                  case 6:
                  case "end":
                    return Q.stop();
                }
            }, z, this);
          }));
          function O(z) {
            return F.apply(this, arguments);
          }
          return O;
        }()
      }, {
        key: "listMethods",
        value: function() {
          var F = (0, r.default)(/* @__PURE__ */ t.default.mark(function z() {
            return t.default.wrap(function(W) {
              for (; ; )
                switch (W.prev = W.next) {
                  case 0:
                    return W.next = 2, this.call("__listMethods");
                  case 2:
                    return W.abrupt("return", W.sent);
                  case 3:
                  case "end":
                    return W.stop();
                }
            }, z, this);
          }));
          function O() {
            return F.apply(this, arguments);
          }
          return O;
        }()
      }, {
        key: "notify",
        value: function(O, z) {
          var L = this;
          return new Promise(function(W, j) {
            if (!L.ready)
              return j(new Error("socket not ready"));
            var Q = {
              jsonrpc: "2.0",
              method: O,
              params: z || null
            };
            L.socket.send(JSON.stringify(Q), function(le) {
              if (le)
                return j(le);
              W();
            });
          });
        }
      }, {
        key: "subscribe",
        value: function() {
          var F = (0, r.default)(/* @__PURE__ */ t.default.mark(function z(L) {
            var W;
            return t.default.wrap(function(Q) {
              for (; ; )
                switch (Q.prev = Q.next) {
                  case 0:
                    return typeof L == "string" && (L = [L]), Q.next = 3, this.call("rpc.on", L);
                  case 3:
                    if (W = Q.sent, !(typeof L == "string" && W[L] !== "ok")) {
                      Q.next = 6;
                      break;
                    }
                    throw new Error("Failed subscribing to an event '" + L + "' with: " + W[L]);
                  case 6:
                    return Q.abrupt("return", W);
                  case 7:
                  case "end":
                    return Q.stop();
                }
            }, z, this);
          }));
          function O(z) {
            return F.apply(this, arguments);
          }
          return O;
        }()
      }, {
        key: "unsubscribe",
        value: function() {
          var F = (0, r.default)(/* @__PURE__ */ t.default.mark(function z(L) {
            var W;
            return t.default.wrap(function(Q) {
              for (; ; )
                switch (Q.prev = Q.next) {
                  case 0:
                    return typeof L == "string" && (L = [L]), Q.next = 3, this.call("rpc.off", L);
                  case 3:
                    if (W = Q.sent, !(typeof L == "string" && W[L] !== "ok")) {
                      Q.next = 6;
                      break;
                    }
                    throw new Error("Failed unsubscribing from an event with: " + W);
                  case 6:
                    return Q.abrupt("return", W);
                  case 7:
                  case "end":
                    return Q.stop();
                }
            }, z, this);
          }));
          function O(z) {
            return F.apply(this, arguments);
          }
          return O;
        }()
      }, {
        key: "close",
        value: function(O, z) {
          this.socket.close(O || 1e3, z);
        }
      }, {
        key: "_connect",
        value: function(O, z) {
          var L = this;
          this.socket = this.webSocketFactory(O, z), this.socket.addEventListener("open", function() {
            L.ready = !0, L.emit("open"), L.current_reconnects = 0;
          }), this.socket.addEventListener("message", function(W) {
            var j = W.data;
            j instanceof ArrayBuffer && (j = Buffer.from(j).toString());
            try {
              j = JSON.parse(j);
            } catch {
              return;
            }
            if (j.notification && L.listeners(j.notification).length) {
              if (!Object.keys(j.params).length)
                return L.emit(j.notification);
              var Q = [j.notification];
              if (j.params.constructor === Object)
                Q.push(j.params);
              else
                for (var le = 0; le < j.params.length; le++)
                  Q.push(j.params[le]);
              return Promise.resolve().then(function() {
                L.emit.apply(L, Q);
              });
            }
            if (!L.queue[j.id])
              return j.method && j.params ? Promise.resolve().then(function() {
                L.emit(j.method, j.params);
              }) : void 0;
            "error" in j == "result" in j && L.queue[j.id].promise[1](new Error('Server response malformed. Response must include either "result" or "error", but not both.')), L.queue[j.id].timeout && clearTimeout(L.queue[j.id].timeout), j.error ? L.queue[j.id].promise[1](j.error) : L.queue[j.id].promise[0](j.result), delete L.queue[j.id];
          }), this.socket.addEventListener("error", function(W) {
            return L.emit("error", W);
          }), this.socket.addEventListener("close", function(W) {
            var j = W.code, Q = W.reason;
            L.ready && setTimeout(function() {
              return L.emit("close", j, Q);
            }, 0), L.ready = !1, L.socket = void 0, j !== 1e3 && (L.current_reconnects++, L.reconnect && (L.max_reconnects > L.current_reconnects || L.max_reconnects === 0) && setTimeout(function() {
              return L._connect(O, z);
            }, L.reconnect_interval));
          });
        }
      }]), P;
    }(v.EventEmitter);
    n.default = N;
  }(Yo)), Yo;
}
var nr = ji.exports;
Object.defineProperty(na, "__esModule", {
  value: !0
});
var Lu = na.Client = void 0, qd = nr(ra()), Yd = nr(ia()), Kd = nr(oa()), Vd = nr(aa()), ac = nr(ca()), Zd = nr(Hd()), Xd = nr(Qd());
function Jd(n) {
  var e = $d();
  return function() {
    var r = (0, ac.default)(n), o;
    if (e) {
      var i = (0, ac.default)(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return (0, Vd.default)(this, o);
  };
}
function $d() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var e0 = /* @__PURE__ */ function(n) {
  (0, Kd.default)(t, n);
  var e = Jd(t);
  function t() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ws://localhost:8080", o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = o.autoconnect, c = i === void 0 ? !0 : i, u = o.reconnect, d = u === void 0 ? !0 : u, w = o.reconnect_interval, v = w === void 0 ? 1e3 : w, I = o.max_reconnects, _ = I === void 0 ? 5 : I, E = arguments.length > 2 ? arguments[2] : void 0;
    return (0, Yd.default)(this, t), e.call(this, Zd.default, r, {
      autoconnect: c,
      reconnect: d,
      reconnect_interval: v,
      max_reconnects: _
    }, E);
  }
  return (0, qd.default)(t);
}(Xd.default);
Lu = na.Client = e0;
var ai, t0 = new Uint8Array(16);
function Uu() {
  if (!ai && (ai = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !ai))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return ai(t0);
}
const n0 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function qi(n) {
  return typeof n == "string" && n0.test(n);
}
var Bt = [];
for (var Xo = 0; Xo < 256; ++Xo)
  Bt.push((Xo + 256).toString(16).substr(1));
function Yi(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = (Bt[n[e + 0]] + Bt[n[e + 1]] + Bt[n[e + 2]] + Bt[n[e + 3]] + "-" + Bt[n[e + 4]] + Bt[n[e + 5]] + "-" + Bt[n[e + 6]] + Bt[n[e + 7]] + "-" + Bt[n[e + 8]] + Bt[n[e + 9]] + "-" + Bt[n[e + 10]] + Bt[n[e + 11]] + Bt[n[e + 12]] + Bt[n[e + 13]] + Bt[n[e + 14]] + Bt[n[e + 15]]).toLowerCase();
  if (!qi(t))
    throw TypeError("Stringified UUID is invalid");
  return t;
}
var cc, Jo, $o = 0, es = 0;
function r0(n, e, t) {
  var r = e && t || 0, o = e || new Array(16);
  n = n || {};
  var i = n.node || cc, c = n.clockseq !== void 0 ? n.clockseq : Jo;
  if (i == null || c == null) {
    var u = n.random || (n.rng || Uu)();
    i == null && (i = cc = [u[0] | 1, u[1], u[2], u[3], u[4], u[5]]), c == null && (c = Jo = (u[6] << 8 | u[7]) & 16383);
  }
  var d = n.msecs !== void 0 ? n.msecs : Date.now(), w = n.nsecs !== void 0 ? n.nsecs : es + 1, v = d - $o + (w - es) / 1e4;
  if (v < 0 && n.clockseq === void 0 && (c = c + 1 & 16383), (v < 0 || d > $o) && n.nsecs === void 0 && (w = 0), w >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  $o = d, es = w, Jo = c, d += 122192928e5;
  var I = ((d & 268435455) * 1e4 + w) % 4294967296;
  o[r++] = I >>> 24 & 255, o[r++] = I >>> 16 & 255, o[r++] = I >>> 8 & 255, o[r++] = I & 255;
  var _ = d / 4294967296 * 1e4 & 268435455;
  o[r++] = _ >>> 8 & 255, o[r++] = _ & 255, o[r++] = _ >>> 24 & 15 | 16, o[r++] = _ >>> 16 & 255, o[r++] = c >>> 8 | 128, o[r++] = c & 255;
  for (var E = 0; E < 6; ++E)
    o[r + E] = i[E];
  return e || Yi(o);
}
function Du(n) {
  if (!qi(n))
    throw TypeError("Invalid UUID");
  var e, t = new Uint8Array(16);
  return t[0] = (e = parseInt(n.slice(0, 8), 16)) >>> 24, t[1] = e >>> 16 & 255, t[2] = e >>> 8 & 255, t[3] = e & 255, t[4] = (e = parseInt(n.slice(9, 13), 16)) >>> 8, t[5] = e & 255, t[6] = (e = parseInt(n.slice(14, 18), 16)) >>> 8, t[7] = e & 255, t[8] = (e = parseInt(n.slice(19, 23), 16)) >>> 8, t[9] = e & 255, t[10] = (e = parseInt(n.slice(24, 36), 16)) / 1099511627776 & 255, t[11] = e / 4294967296 & 255, t[12] = e >>> 24 & 255, t[13] = e >>> 16 & 255, t[14] = e >>> 8 & 255, t[15] = e & 255, t;
}
function i0(n) {
  n = unescape(encodeURIComponent(n));
  for (var e = [], t = 0; t < n.length; ++t)
    e.push(n.charCodeAt(t));
  return e;
}
var o0 = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", s0 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function Pu(n, e, t) {
  function r(o, i, c, u) {
    if (typeof o == "string" && (o = i0(o)), typeof i == "string" && (i = Du(i)), i.length !== 16)
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    var d = new Uint8Array(16 + o.length);
    if (d.set(i), d.set(o, i.length), d = t(d), d[6] = d[6] & 15 | e, d[8] = d[8] & 63 | 128, c) {
      u = u || 0;
      for (var w = 0; w < 16; ++w)
        c[u + w] = d[w];
      return c;
    }
    return Yi(d);
  }
  try {
    r.name = n;
  } catch {
  }
  return r.DNS = o0, r.URL = s0, r;
}
function a0(n) {
  if (typeof n == "string") {
    var e = unescape(encodeURIComponent(n));
    n = new Uint8Array(e.length);
    for (var t = 0; t < e.length; ++t)
      n[t] = e.charCodeAt(t);
  }
  return c0(u0(l0(n), n.length * 8));
}
function c0(n) {
  for (var e = [], t = n.length * 32, r = "0123456789abcdef", o = 0; o < t; o += 8) {
    var i = n[o >> 5] >>> o % 32 & 255, c = parseInt(r.charAt(i >>> 4 & 15) + r.charAt(i & 15), 16);
    e.push(c);
  }
  return e;
}
function Fu(n) {
  return (n + 64 >>> 9 << 4) + 14 + 1;
}
function u0(n, e) {
  n[e >> 5] |= 128 << e % 32, n[Fu(e) - 1] = e;
  for (var t = 1732584193, r = -271733879, o = -1732584194, i = 271733878, c = 0; c < n.length; c += 16) {
    var u = t, d = r, w = o, v = i;
    t = Rt(t, r, o, i, n[c], 7, -680876936), i = Rt(i, t, r, o, n[c + 1], 12, -389564586), o = Rt(o, i, t, r, n[c + 2], 17, 606105819), r = Rt(r, o, i, t, n[c + 3], 22, -1044525330), t = Rt(t, r, o, i, n[c + 4], 7, -176418897), i = Rt(i, t, r, o, n[c + 5], 12, 1200080426), o = Rt(o, i, t, r, n[c + 6], 17, -1473231341), r = Rt(r, o, i, t, n[c + 7], 22, -45705983), t = Rt(t, r, o, i, n[c + 8], 7, 1770035416), i = Rt(i, t, r, o, n[c + 9], 12, -1958414417), o = Rt(o, i, t, r, n[c + 10], 17, -42063), r = Rt(r, o, i, t, n[c + 11], 22, -1990404162), t = Rt(t, r, o, i, n[c + 12], 7, 1804603682), i = Rt(i, t, r, o, n[c + 13], 12, -40341101), o = Rt(o, i, t, r, n[c + 14], 17, -1502002290), r = Rt(r, o, i, t, n[c + 15], 22, 1236535329), t = kt(t, r, o, i, n[c + 1], 5, -165796510), i = kt(i, t, r, o, n[c + 6], 9, -1069501632), o = kt(o, i, t, r, n[c + 11], 14, 643717713), r = kt(r, o, i, t, n[c], 20, -373897302), t = kt(t, r, o, i, n[c + 5], 5, -701558691), i = kt(i, t, r, o, n[c + 10], 9, 38016083), o = kt(o, i, t, r, n[c + 15], 14, -660478335), r = kt(r, o, i, t, n[c + 4], 20, -405537848), t = kt(t, r, o, i, n[c + 9], 5, 568446438), i = kt(i, t, r, o, n[c + 14], 9, -1019803690), o = kt(o, i, t, r, n[c + 3], 14, -187363961), r = kt(r, o, i, t, n[c + 8], 20, 1163531501), t = kt(t, r, o, i, n[c + 13], 5, -1444681467), i = kt(i, t, r, o, n[c + 2], 9, -51403784), o = kt(o, i, t, r, n[c + 7], 14, 1735328473), r = kt(r, o, i, t, n[c + 12], 20, -1926607734), t = Ot(t, r, o, i, n[c + 5], 4, -378558), i = Ot(i, t, r, o, n[c + 8], 11, -2022574463), o = Ot(o, i, t, r, n[c + 11], 16, 1839030562), r = Ot(r, o, i, t, n[c + 14], 23, -35309556), t = Ot(t, r, o, i, n[c + 1], 4, -1530992060), i = Ot(i, t, r, o, n[c + 4], 11, 1272893353), o = Ot(o, i, t, r, n[c + 7], 16, -155497632), r = Ot(r, o, i, t, n[c + 10], 23, -1094730640), t = Ot(t, r, o, i, n[c + 13], 4, 681279174), i = Ot(i, t, r, o, n[c], 11, -358537222), o = Ot(o, i, t, r, n[c + 3], 16, -722521979), r = Ot(r, o, i, t, n[c + 6], 23, 76029189), t = Ot(t, r, o, i, n[c + 9], 4, -640364487), i = Ot(i, t, r, o, n[c + 12], 11, -421815835), o = Ot(o, i, t, r, n[c + 15], 16, 530742520), r = Ot(r, o, i, t, n[c + 2], 23, -995338651), t = Lt(t, r, o, i, n[c], 6, -198630844), i = Lt(i, t, r, o, n[c + 7], 10, 1126891415), o = Lt(o, i, t, r, n[c + 14], 15, -1416354905), r = Lt(r, o, i, t, n[c + 5], 21, -57434055), t = Lt(t, r, o, i, n[c + 12], 6, 1700485571), i = Lt(i, t, r, o, n[c + 3], 10, -1894986606), o = Lt(o, i, t, r, n[c + 10], 15, -1051523), r = Lt(r, o, i, t, n[c + 1], 21, -2054922799), t = Lt(t, r, o, i, n[c + 8], 6, 1873313359), i = Lt(i, t, r, o, n[c + 15], 10, -30611744), o = Lt(o, i, t, r, n[c + 6], 15, -1560198380), r = Lt(r, o, i, t, n[c + 13], 21, 1309151649), t = Lt(t, r, o, i, n[c + 4], 6, -145523070), i = Lt(i, t, r, o, n[c + 11], 10, -1120210379), o = Lt(o, i, t, r, n[c + 2], 15, 718787259), r = Lt(r, o, i, t, n[c + 9], 21, -343485551), t = On(t, u), r = On(r, d), o = On(o, w), i = On(i, v);
  }
  return [t, r, o, i];
}
function l0(n) {
  if (n.length === 0)
    return [];
  for (var e = n.length * 8, t = new Uint32Array(Fu(e)), r = 0; r < e; r += 8)
    t[r >> 5] |= (n[r / 8] & 255) << r % 32;
  return t;
}
function On(n, e) {
  var t = (n & 65535) + (e & 65535), r = (n >> 16) + (e >> 16) + (t >> 16);
  return r << 16 | t & 65535;
}
function f0(n, e) {
  return n << e | n >>> 32 - e;
}
function Ki(n, e, t, r, o, i) {
  return On(f0(On(On(e, n), On(r, i)), o), t);
}
function Rt(n, e, t, r, o, i, c) {
  return Ki(e & t | ~e & r, n, e, o, i, c);
}
function kt(n, e, t, r, o, i, c) {
  return Ki(e & r | t & ~r, n, e, o, i, c);
}
function Ot(n, e, t, r, o, i, c) {
  return Ki(e ^ t ^ r, n, e, o, i, c);
}
function Lt(n, e, t, r, o, i, c) {
  return Ki(t ^ (e | ~r), n, e, o, i, c);
}
var h0 = Pu("v3", 48, a0);
const d0 = h0;
function p0(n, e, t) {
  n = n || {};
  var r = n.random || (n.rng || Uu)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    t = t || 0;
    for (var o = 0; o < 16; ++o)
      e[t + o] = r[o];
    return e;
  }
  return Yi(r);
}
function g0(n, e, t, r) {
  switch (n) {
    case 0:
      return e & t ^ ~e & r;
    case 1:
      return e ^ t ^ r;
    case 2:
      return e & t ^ e & r ^ t & r;
    case 3:
      return e ^ t ^ r;
  }
}
function ts(n, e) {
  return n << e | n >>> 32 - e;
}
function y0(n) {
  var e = [1518500249, 1859775393, 2400959708, 3395469782], t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof n == "string") {
    var r = unescape(encodeURIComponent(n));
    n = [];
    for (var o = 0; o < r.length; ++o)
      n.push(r.charCodeAt(o));
  } else
    Array.isArray(n) || (n = Array.prototype.slice.call(n));
  n.push(128);
  for (var i = n.length / 4 + 2, c = Math.ceil(i / 16), u = new Array(c), d = 0; d < c; ++d) {
    for (var w = new Uint32Array(16), v = 0; v < 16; ++v)
      w[v] = n[d * 64 + v * 4] << 24 | n[d * 64 + v * 4 + 1] << 16 | n[d * 64 + v * 4 + 2] << 8 | n[d * 64 + v * 4 + 3];
    u[d] = w;
  }
  u[c - 1][14] = (n.length - 1) * 8 / Math.pow(2, 32), u[c - 1][14] = Math.floor(u[c - 1][14]), u[c - 1][15] = (n.length - 1) * 8 & 4294967295;
  for (var I = 0; I < c; ++I) {
    for (var _ = new Uint32Array(80), E = 0; E < 16; ++E)
      _[E] = u[I][E];
    for (var N = 16; N < 80; ++N)
      _[N] = ts(_[N - 3] ^ _[N - 8] ^ _[N - 14] ^ _[N - 16], 1);
    for (var T = t[0], U = t[1], P = t[2], F = t[3], O = t[4], z = 0; z < 80; ++z) {
      var L = Math.floor(z / 20), W = ts(T, 5) + g0(L, U, P, F) + O + e[L] + _[z] >>> 0;
      O = F, F = P, P = ts(U, 30) >>> 0, U = T, T = W;
    }
    t[0] = t[0] + T >>> 0, t[1] = t[1] + U >>> 0, t[2] = t[2] + P >>> 0, t[3] = t[3] + F >>> 0, t[4] = t[4] + O >>> 0;
  }
  return [t[0] >> 24 & 255, t[0] >> 16 & 255, t[0] >> 8 & 255, t[0] & 255, t[1] >> 24 & 255, t[1] >> 16 & 255, t[1] >> 8 & 255, t[1] & 255, t[2] >> 24 & 255, t[2] >> 16 & 255, t[2] >> 8 & 255, t[2] & 255, t[3] >> 24 & 255, t[3] >> 16 & 255, t[3] >> 8 & 255, t[3] & 255, t[4] >> 24 & 255, t[4] >> 16 & 255, t[4] >> 8 & 255, t[4] & 255];
}
var w0 = Pu("v5", 80, y0);
const m0 = w0, b0 = "00000000-0000-0000-0000-000000000000";
function A0(n) {
  if (!qi(n))
    throw TypeError("Invalid UUID");
  return parseInt(n.substr(14, 1), 16);
}
const v0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  v1: r0,
  v3: d0,
  v4: p0,
  v5: m0,
  NIL: b0,
  version: A0,
  validate: qi,
  stringify: Yi,
  parse: Du
}, Symbol.toStringTag, { value: "Module" })), zu = /* @__PURE__ */ Di(v0), E0 = zu.v4, x0 = function(n, e, t, r) {
  if (typeof n != "string")
    throw new TypeError(n + " must be a string");
  r = r || {};
  const o = typeof r.version == "number" ? r.version : 2;
  if (o !== 1 && o !== 2)
    throw new TypeError(o + " must be 1 or 2");
  const i = {
    method: n
  };
  if (o === 2 && (i.jsonrpc = "2.0"), e) {
    if (typeof e != "object" && !Array.isArray(e))
      throw new TypeError(e + " must be an object, array or omitted");
    i.params = e;
  }
  if (typeof t > "u") {
    const c = typeof r.generator == "function" ? r.generator : function() {
      return E0();
    };
    i.id = c(i, r);
  } else
    o === 2 && t === null ? r.notificationIdNull && (i.id = null) : i.id = t;
  return i;
};
var I0 = x0;
const S0 = zu.v4, B0 = I0, Fr = function(n, e) {
  if (!(this instanceof Fr))
    return new Fr(n, e);
  e || (e = {}), this.options = {
    reviver: typeof e.reviver < "u" ? e.reviver : null,
    replacer: typeof e.replacer < "u" ? e.replacer : null,
    generator: typeof e.generator < "u" ? e.generator : function() {
      return S0();
    },
    version: typeof e.version < "u" ? e.version : 2,
    notificationIdNull: typeof e.notificationIdNull == "boolean" ? e.notificationIdNull : !1
  }, this.callServer = n;
};
var M0 = Fr;
Fr.prototype.request = function(n, e, t, r) {
  const o = this;
  let i = null;
  const c = Array.isArray(n) && typeof e == "function";
  if (this.options.version === 1 && c)
    throw new TypeError("JSON-RPC 1.0 does not support batching");
  if (c || !c && n && typeof n == "object" && typeof e == "function")
    r = e, i = n;
  else {
    typeof t == "function" && (r = t, t = void 0);
    const w = typeof r == "function";
    try {
      i = B0(n, e, t, {
        generator: this.options.generator,
        version: this.options.version,
        notificationIdNull: this.options.notificationIdNull
      });
    } catch (v) {
      if (w)
        return r(v);
      throw v;
    }
    if (!w)
      return i;
  }
  let d;
  try {
    d = JSON.stringify(i, this.options.replacer);
  } catch (w) {
    return r(w);
  }
  return this.callServer(d, function(w, v) {
    o._parseResponse(w, v, r);
  }), i;
};
Fr.prototype._parseResponse = function(n, e, t) {
  if (n) {
    t(n);
    return;
  }
  if (!e)
    return t();
  let r;
  try {
    r = JSON.parse(e, this.options.reviver);
  } catch (o) {
    return t(o);
  }
  if (t.length === 3)
    if (Array.isArray(r)) {
      const o = function(c) {
        return typeof c.error < "u";
      }, i = function(c) {
        return !o(c);
      };
      return t(null, r.filter(o), r.filter(i));
    } else
      return t(null, r.error, r.result);
  t(null, r);
};
const [Hu, Wu, Gu] = [[], [], []], _0 = BigInt(0), Sr = BigInt(1), C0 = BigInt(2), T0 = BigInt(7), N0 = BigInt(256), R0 = BigInt(113);
for (let n = 0, e = Sr, t = 1, r = 0; n < 24; n++) {
  [t, r] = [r, (2 * t + 3 * r) % 5], Hu.push(2 * (5 * r + t)), Wu.push((n + 1) * (n + 2) / 2 % 64);
  let o = _0;
  for (let i = 0; i < 7; i++)
    e = (e << Sr ^ (e >> T0) * R0) % N0, e & C0 && (o ^= Sr << (Sr << BigInt(i)) - Sr);
  Gu.push(o);
}
const [k0, O0] = we.split(Gu, !0), uc = (n, e, t) => t > 32 ? we.rotlBH(n, e, t) : we.rotlSH(n, e, t), lc = (n, e, t) => t > 32 ? we.rotlBL(n, e, t) : we.rotlSL(n, e, t);
function L0(n, e = 24) {
  const t = new Uint32Array(10);
  for (let r = 24 - e; r < 24; r++) {
    for (let c = 0; c < 10; c++)
      t[c] = n[c] ^ n[c + 10] ^ n[c + 20] ^ n[c + 30] ^ n[c + 40];
    for (let c = 0; c < 10; c += 2) {
      const u = (c + 8) % 10, d = (c + 2) % 10, w = t[d], v = t[d + 1], I = uc(w, v, 1) ^ t[u], _ = lc(w, v, 1) ^ t[u + 1];
      for (let E = 0; E < 50; E += 10)
        n[c + E] ^= I, n[c + E + 1] ^= _;
    }
    let o = n[2], i = n[3];
    for (let c = 0; c < 24; c++) {
      const u = Wu[c], d = uc(o, i, u), w = lc(o, i, u), v = Hu[c];
      o = n[v], i = n[v + 1], n[v] = d, n[v + 1] = w;
    }
    for (let c = 0; c < 50; c += 10) {
      for (let u = 0; u < 10; u++)
        t[u] = n[c + u];
      for (let u = 0; u < 10; u++)
        n[c + u] ^= ~t[(u + 2) % 10] & t[(u + 4) % 10];
    }
    n[0] ^= k0[r], n[1] ^= O0[r];
  }
  t.fill(0);
}
class Vi extends Us {
  constructor(e, t, r, o = !1, i = 24) {
    if (super(), this.blockLen = e, this.suffix = t, this.outputLen = r, this.enableXOF = o, this.rounds = i, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, qt.number(r), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = $f(this.state);
  }
  keccak() {
    L0(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(e) {
    qt.exists(this);
    const { blockLen: t, state: r } = this;
    e = Yr(e);
    const o = e.length;
    for (let i = 0; i < o; ) {
      const c = Math.min(t - this.pos, o - i);
      for (let u = 0; u < c; u++)
        r[this.pos++] ^= e[i++];
      this.pos === t && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: e, suffix: t, pos: r, blockLen: o } = this;
    e[r] ^= t, (t & 128) !== 0 && r === o - 1 && this.keccak(), e[o - 1] ^= 128, this.keccak();
  }
  writeInto(e) {
    qt.exists(this, !1), qt.bytes(e), this.finish();
    const t = this.state, { blockLen: r } = this;
    for (let o = 0, i = e.length; o < i; ) {
      this.posOut >= r && this.keccak();
      const c = Math.min(r - this.posOut, i - o);
      e.set(t.subarray(this.posOut, this.posOut + c), o), this.posOut += c, o += c;
    }
    return e;
  }
  xofInto(e) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(e);
  }
  xof(e) {
    return qt.number(e), this.xofInto(new Uint8Array(e));
  }
  digestInto(e) {
    if (qt.output(e, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(e), this.destroy(), e;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(e) {
    const { blockLen: t, suffix: r, outputLen: o, rounds: i, enableXOF: c } = this;
    return e || (e = new Vi(t, r, o, c, i)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = i, e.suffix = r, e.outputLen = o, e.enableXOF = c, e.destroyed = this.destroyed, e;
  }
}
const Fn = (n, e, t) => Kr(() => new Vi(e, n, t));
Fn(6, 144, 224 / 8);
Fn(6, 136, 256 / 8);
Fn(6, 104, 384 / 8);
Fn(6, 72, 512 / 8);
Fn(1, 144, 224 / 8);
Fn(1, 136, 256 / 8);
Fn(1, 104, 384 / 8);
Fn(1, 72, 512 / 8);
const ju = (n, e, t) => nh((r = {}) => new Vi(e, n, r.dkLen === void 0 ? t : r.dkLen, !0));
ju(31, 168, 128 / 8);
ju(31, 136, 256 / 8);
class Qu extends Us {
  constructor(e, t) {
    super(), this.finished = !1, this.destroyed = !1, qt.hash(e);
    const r = Yr(t);
    if (this.iHash = e.create(), typeof this.iHash.update != "function")
      throw new TypeError("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const o = this.blockLen, i = new Uint8Array(o);
    i.set(r.length > o ? e.create().update(r).digest() : r);
    for (let c = 0; c < i.length; c++)
      i[c] ^= 54;
    this.iHash.update(i), this.oHash = e.create();
    for (let c = 0; c < i.length; c++)
      i[c] ^= 106;
    this.oHash.update(i), i.fill(0);
  }
  update(e) {
    return qt.exists(this), this.iHash.update(e), this;
  }
  digestInto(e) {
    qt.exists(this), qt.bytes(e, this.outputLen), this.finished = !0, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
  }
  digest() {
    const e = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(e), e;
  }
  _cloneInto(e) {
    e || (e = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: t, iHash: r, finished: o, destroyed: i, blockLen: c, outputLen: u } = this;
    return e = e, e.finished = o, e.destroyed = i, e.blockLen = c, e.outputLen = u, e.oHash = t._cloneInto(e.oHash), e.iHash = r._cloneInto(e.iHash), e;
  }
  destroy() {
    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
  }
}
const qu = (n, e, t) => new Qu(n, e).update(t).digest();
qu.create = (n, e) => new Qu(n, e);
/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
const Ue = BigInt(0), Xe = BigInt(1), Ln = BigInt(2), kr = BigInt(3), U0 = BigInt(8), nt = Object.freeze({
  a: Ue,
  b: BigInt(7),
  P: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
  n: BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
  h: Xe,
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")
});
function fc(n) {
  const { a: e, b: t } = nt, r = ae(n * n), o = ae(r * n);
  return ae(o + e * n + t);
}
const ci = nt.a === Ue;
class D0 extends Error {
  constructor(e) {
    super(e);
  }
}
class De {
  constructor(e, t, r) {
    this.x = e, this.y = t, this.z = r;
  }
  static fromAffine(e) {
    if (!(e instanceof St))
      throw new TypeError("JacobianPoint#fromAffine: expected Point");
    return new De(e.x, e.y, Xe);
  }
  static toAffineBatch(e) {
    const t = W0(e.map((r) => r.z));
    return e.map((r, o) => r.toAffine(t[o]));
  }
  static normalizeZ(e) {
    return De.toAffineBatch(e).map(De.fromAffine);
  }
  equals(e) {
    if (!(e instanceof De))
      throw new TypeError("JacobianPoint expected");
    const { x: t, y: r, z: o } = this, { x: i, y: c, z: u } = e, d = ae(o * o), w = ae(u * u), v = ae(t * w), I = ae(i * d), _ = ae(ae(r * u) * w), E = ae(ae(c * o) * d);
    return v === I && _ === E;
  }
  negate() {
    return new De(this.x, ae(-this.y), this.z);
  }
  double() {
    const { x: e, y: t, z: r } = this, o = ae(e * e), i = ae(t * t), c = ae(i * i), u = e + i, d = ae(Ln * (ae(u * u) - o - c)), w = ae(kr * o), v = ae(w * w), I = ae(v - Ln * d), _ = ae(w * (d - I) - U0 * c), E = ae(Ln * t * r);
    return new De(I, _, E);
  }
  add(e) {
    if (!(e instanceof De))
      throw new TypeError("JacobianPoint expected");
    const { x: t, y: r, z: o } = this, { x: i, y: c, z: u } = e;
    if (i === Ue || c === Ue)
      return this;
    if (t === Ue || r === Ue)
      return e;
    const d = ae(o * o), w = ae(u * u), v = ae(t * w), I = ae(i * d), _ = ae(ae(r * u) * w), E = ae(ae(c * o) * d), N = ae(I - v), T = ae(E - _);
    if (N === Ue)
      return T === Ue ? this.double() : De.ZERO;
    const U = ae(N * N), P = ae(N * U), F = ae(v * U), O = ae(T * T - P - Ln * F), z = ae(T * (F - O) - _ * P), L = ae(o * u * N);
    return new De(O, z, L);
  }
  subtract(e) {
    return this.add(e.negate());
  }
  multiplyUnsafe(e) {
    const t = De.ZERO;
    if (typeof e == "bigint" && e === Ue)
      return t;
    let r = gc(e);
    if (r === Xe)
      return this;
    if (!ci) {
      let I = t, _ = this;
      for (; r > Ue; )
        r & Xe && (I = I.add(_)), _ = _.double(), r >>= Xe;
      return I;
    }
    let { k1neg: o, k1: i, k2neg: c, k2: u } = wc(r), d = t, w = t, v = this;
    for (; i > Ue || u > Ue; )
      i & Xe && (d = d.add(v)), u & Xe && (w = w.add(v)), v = v.double(), i >>= Xe, u >>= Xe;
    return o && (d = d.negate()), c && (w = w.negate()), w = new De(ae(w.x * nt.beta), w.y, w.z), d.add(w);
  }
  precomputeWindow(e) {
    const t = ci ? 128 / e + 1 : 256 / e + 1, r = [];
    let o = this, i = o;
    for (let c = 0; c < t; c++) {
      i = o, r.push(i);
      for (let u = 1; u < 2 ** (e - 1); u++)
        i = i.add(o), r.push(i);
      o = i.double();
    }
    return r;
  }
  wNAF(e, t) {
    !t && this.equals(De.BASE) && (t = St.BASE);
    const r = t && t._WINDOW_SIZE || 1;
    if (256 % r)
      throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");
    let o = t && Es.get(t);
    o || (o = this.precomputeWindow(r), t && r !== 1 && (o = De.normalizeZ(o), Es.set(t, o)));
    let i = De.ZERO, c = De.ZERO;
    const u = 1 + (ci ? 128 / r : 256 / r), d = 2 ** (r - 1), w = BigInt(2 ** r - 1), v = 2 ** r, I = BigInt(r);
    for (let _ = 0; _ < u; _++) {
      const E = _ * d;
      let N = Number(e & w);
      if (e >>= I, N > d && (N -= v, e += Xe), N === 0) {
        let T = o[E];
        _ % 2 && (T = T.negate()), c = c.add(T);
      } else {
        let T = o[E + Math.abs(N) - 1];
        N < 0 && (T = T.negate()), i = i.add(T);
      }
    }
    return { p: i, f: c };
  }
  multiply(e, t) {
    let r = gc(e), o, i;
    if (ci) {
      const { k1neg: c, k1: u, k2neg: d, k2: w } = wc(r);
      let { p: v, f: I } = this.wNAF(u, t), { p: _, f: E } = this.wNAF(w, t);
      c && (v = v.negate()), d && (_ = _.negate()), _ = new De(ae(_.x * nt.beta), _.y, _.z), o = v.add(_), i = I.add(E);
    } else {
      const { p: c, f: u } = this.wNAF(r, t);
      o = c, i = u;
    }
    return De.normalizeZ([o, i])[0];
  }
  toAffine(e = Zi(this.z)) {
    const { x: t, y: r, z: o } = this, i = e, c = ae(i * i), u = ae(c * i), d = ae(t * c), w = ae(r * u);
    if (ae(o * i) !== Xe)
      throw new Error("invZ was invalid");
    return new St(d, w);
  }
}
De.BASE = new De(nt.Gx, nt.Gy, Xe);
De.ZERO = new De(Ue, Xe, Ue);
const Es = /* @__PURE__ */ new WeakMap();
class St {
  constructor(e, t) {
    this.x = e, this.y = t;
  }
  _setWindowSize(e) {
    this._WINDOW_SIZE = e, Es.delete(this);
  }
  hasEvenY() {
    return this.y % Ln === Ue;
  }
  static fromCompressedHex(e) {
    const t = e.length === 32, r = Zn(t ? e : e.subarray(1));
    if (!rs(r))
      throw new Error("Point is not on curve");
    const o = fc(r);
    let i = H0(o);
    const c = (i & Xe) === Xe;
    t ? c && (i = ae(-i)) : (e[0] & 1) === 1 !== c && (i = ae(-i));
    const u = new St(r, i);
    return u.assertValidity(), u;
  }
  static fromUncompressedHex(e) {
    const t = Zn(e.subarray(1, 33)), r = Zn(e.subarray(33, 65)), o = new St(t, r);
    return o.assertValidity(), o;
  }
  static fromHex(e) {
    const t = xs(e), r = t.length, o = t[0];
    if (r === 32 || r === 33 && (o === 2 || o === 3))
      return this.fromCompressedHex(t);
    if (r === 65 && o === 4)
      return this.fromUncompressedHex(t);
    throw new Error(`Point.fromHex: received invalid point. Expected 32-33 compressed bytes or 65 uncompressed bytes, not ${r}`);
  }
  static fromPrivateKey(e) {
    return St.BASE.multiply(Is(e));
  }
  static fromSignature(e, t, r) {
    e = xs(e);
    const o = j0(e), { r: i, s: c } = Q0(t);
    if (r !== 0 && r !== 1)
      throw new Error("Cannot recover signature: invalid recovery bit");
    const u = r & 1 ? "03" : "02", d = St.fromHex(u + hr(i)), { n: w } = nt, v = Zi(i, w), I = ae(-o * v, w), _ = ae(c * v, w), E = St.BASE.multiplyAndAddUnsafe(d, I, _);
    if (!E)
      throw new Error("Cannot recover signature: point at infinify");
    return E.assertValidity(), E;
  }
  toRawBytes(e = !1) {
    return Vn(this.toHex(e));
  }
  toHex(e = !1) {
    const t = hr(this.x);
    return e ? `${this.hasEvenY() ? "02" : "03"}${t}` : `04${t}${hr(this.y)}`;
  }
  toHexX() {
    return this.toHex(!0).slice(2);
  }
  toRawX() {
    return this.toRawBytes(!0).slice(1);
  }
  assertValidity() {
    const e = "Point is not on elliptic curve", { x: t, y: r } = this;
    if (!rs(t) || !rs(r))
      throw new Error(e);
    const o = ae(r * r), i = fc(t);
    if (ae(o - i) !== Ue)
      throw new Error(e);
  }
  equals(e) {
    return this.x === e.x && this.y === e.y;
  }
  negate() {
    return new St(this.x, ae(-this.y));
  }
  double() {
    return De.fromAffine(this).double().toAffine();
  }
  add(e) {
    return De.fromAffine(this).add(De.fromAffine(e)).toAffine();
  }
  subtract(e) {
    return this.add(e.negate());
  }
  multiply(e) {
    return De.fromAffine(this).multiply(e, this).toAffine();
  }
  multiplyAndAddUnsafe(e, t, r) {
    const o = De.fromAffine(this), i = t === Ue || t === Xe || this !== St.BASE ? o.multiplyUnsafe(t) : o.multiply(t), c = De.fromAffine(e).multiplyUnsafe(r), u = i.add(c);
    return u.equals(De.ZERO) ? void 0 : u.toAffine();
  }
}
St.BASE = new St(nt.Gx, nt.Gy);
St.ZERO = new St(Ue, Ue);
function hc(n) {
  return Number.parseInt(n[0], 16) >= 8 ? "00" + n : n;
}
function dc(n) {
  if (n.length < 2 || n[0] !== 2)
    throw new Error(`Invalid signature integer tag: ${wr(n)}`);
  const e = n[1], t = n.subarray(2, e + 2);
  if (!e || t.length !== e)
    throw new Error("Invalid signature integer: wrong length");
  if (t[0] === 0 && t[1] <= 127)
    throw new Error("Invalid signature integer: trailing length");
  return { data: Zn(t), left: n.subarray(e + 2) };
}
function P0(n) {
  if (n.length < 2 || n[0] != 48)
    throw new Error(`Invalid signature tag: ${wr(n)}`);
  if (n[1] !== n.length - 2)
    throw new Error("Invalid signature: incorrect length");
  const { data: e, left: t } = dc(n.subarray(2)), { data: r, left: o } = dc(t);
  if (o.length)
    throw new Error(`Invalid signature: left bytes after parsing: ${wr(o)}`);
  return { r: e, s: r };
}
class Kn {
  constructor(e, t) {
    this.r = e, this.s = t, this.assertValidity();
  }
  static fromCompact(e) {
    const t = e instanceof Uint8Array, r = "Signature.fromCompact";
    if (typeof e != "string" && !t)
      throw new TypeError(`${r}: Expected string or Uint8Array`);
    const o = t ? wr(e) : e;
    if (o.length !== 128)
      throw new Error(`${r}: Expected 64-byte hex`);
    return new Kn(Ni(o.slice(0, 64)), Ni(o.slice(64, 128)));
  }
  static fromDER(e) {
    const t = e instanceof Uint8Array;
    if (typeof e != "string" && !t)
      throw new TypeError("Signature.fromDER: Expected string or Uint8Array");
    const { r, s: o } = P0(t ? e : Vn(e));
    return new Kn(r, o);
  }
  static fromHex(e) {
    return this.fromDER(e);
  }
  assertValidity() {
    const { r: e, s: t } = this;
    if (!Ri(e))
      throw new Error("Invalid Signature: r must be 0 < r < n");
    if (!Ri(t))
      throw new Error("Invalid Signature: s must be 0 < s < n");
  }
  hasHighS() {
    const e = nt.n >> Xe;
    return this.s > e;
  }
  normalizeS() {
    return this.hasHighS() ? new Kn(this.r, nt.n - this.s) : this;
  }
  toDERRawBytes(e = !1) {
    return Vn(this.toDERHex(e));
  }
  toDERHex(e = !1) {
    const t = hc(Mr(this.s));
    if (e)
      return t;
    const r = hc(Mr(this.r)), o = Mr(r.length / 2), i = Mr(t.length / 2);
    return `30${Mr(r.length / 2 + t.length / 2 + 4)}02${o}${r}02${i}${t}`;
  }
  toRawBytes() {
    return this.toDERRawBytes();
  }
  toHex() {
    return this.toDERHex();
  }
  toCompactRawBytes() {
    return Vn(this.toCompactHex());
  }
  toCompactHex() {
    return hr(this.r) + hr(this.s);
  }
}
function Br(...n) {
  if (!n.every((r) => r instanceof Uint8Array))
    throw new Error("Uint8Array list expected");
  if (n.length === 1)
    return n[0];
  const e = n.reduce((r, o) => r + o.length, 0), t = new Uint8Array(e);
  for (let r = 0, o = 0; r < n.length; r++) {
    const i = n[r];
    t.set(i, o), o += i.length;
  }
  return t;
}
const F0 = Array.from({ length: 256 }, (n, e) => e.toString(16).padStart(2, "0"));
function wr(n) {
  if (!(n instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  let e = "";
  for (let t = 0; t < n.length; t++)
    e += F0[n[t]];
  return e;
}
const z0 = BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");
function hr(n) {
  if (typeof n != "bigint")
    throw new Error("Expected bigint");
  if (!(Ue <= n && n < z0))
    throw new Error("Expected number < 2^256");
  return n.toString(16).padStart(64, "0");
}
function pc(n) {
  const e = Vn(hr(n));
  if (e.length !== 32)
    throw new Error("Error: expected 32 bytes");
  return e;
}
function Mr(n) {
  const e = n.toString(16);
  return e.length & 1 ? `0${e}` : e;
}
function Ni(n) {
  if (typeof n != "string")
    throw new TypeError("hexToNumber: expected string, got " + typeof n);
  return BigInt(`0x${n}`);
}
function Vn(n) {
  if (typeof n != "string")
    throw new TypeError("hexToBytes: expected string, got " + typeof n);
  if (n.length % 2)
    throw new Error("hexToBytes: received invalid unpadded hex" + n.length);
  const e = new Uint8Array(n.length / 2);
  for (let t = 0; t < e.length; t++) {
    const r = t * 2, o = n.slice(r, r + 2), i = Number.parseInt(o, 16);
    if (Number.isNaN(i) || i < 0)
      throw new Error("Invalid byte sequence");
    e[t] = i;
  }
  return e;
}
function Zn(n) {
  return Ni(wr(n));
}
function xs(n) {
  return n instanceof Uint8Array ? Uint8Array.from(n) : Vn(n);
}
function gc(n) {
  if (typeof n == "number" && Number.isSafeInteger(n) && n > 0)
    return BigInt(n);
  if (typeof n == "bigint" && Ri(n))
    return n;
  throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n");
}
function ae(n, e = nt.P) {
  const t = n % e;
  return t >= Ue ? t : e + t;
}
function Kt(n, e) {
  const { P: t } = nt;
  let r = n;
  for (; e-- > Ue; )
    r *= r, r %= t;
  return r;
}
function H0(n) {
  const { P: e } = nt, t = BigInt(6), r = BigInt(11), o = BigInt(22), i = BigInt(23), c = BigInt(44), u = BigInt(88), d = n * n * n % e, w = d * d * n % e, v = Kt(w, kr) * w % e, I = Kt(v, kr) * w % e, _ = Kt(I, Ln) * d % e, E = Kt(_, r) * _ % e, N = Kt(E, o) * E % e, T = Kt(N, c) * N % e, U = Kt(T, u) * T % e, P = Kt(U, c) * N % e, F = Kt(P, kr) * w % e, O = Kt(F, i) * E % e, z = Kt(O, t) * d % e;
  return Kt(z, Ln);
}
function Zi(n, e = nt.P) {
  if (n === Ue || e <= Ue)
    throw new Error(`invert: expected positive integers, got n=${n} mod=${e}`);
  let t = ae(n, e), r = e, o = Ue, i = Xe;
  for (; t !== Ue; ) {
    const u = r / t, d = r % t, w = o - i * u;
    r = t, t = d, o = i, i = w;
  }
  if (r !== Xe)
    throw new Error("invert: does not exist");
  return ae(o, e);
}
function W0(n, e = nt.P) {
  const t = new Array(n.length), r = n.reduce((i, c, u) => c === Ue ? i : (t[u] = i, ae(i * c, e)), Xe), o = Zi(r, e);
  return n.reduceRight((i, c, u) => c === Ue ? i : (t[u] = ae(i * t[u], e), ae(i * c, e)), o), t;
}
const yc = (n, e) => (n + e / Ln) / e, G0 = {
  a1: BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
  b1: -Xe * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
  a2: BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
  b2: BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
  POW_2_128: BigInt("0x100000000000000000000000000000000")
};
function wc(n) {
  const { n: e } = nt, { a1: t, b1: r, a2: o, b2: i, POW_2_128: c } = G0, u = yc(i * n, e), d = yc(-r * n, e);
  let w = ae(n - u * t - d * o, e), v = ae(-u * r - d * i, e);
  const I = w > c, _ = v > c;
  if (I && (w = e - w), _ && (v = e - v), w > c || v > c)
    throw new Error("splitScalarEndo: Endomorphism failed, k=" + n);
  return { k1neg: I, k1: w, k2neg: _, k2: v };
}
function j0(n) {
  const { n: e } = nt, r = n.length * 8 - 256;
  let o = Zn(n);
  return r > 0 && (o = o >> BigInt(r)), o >= e && (o -= e), o;
}
let dr, ns;
function Ri(n) {
  return Ue < n && n < nt.n;
}
function rs(n) {
  return Ue < n && n < nt.P;
}
function Is(n) {
  let e;
  if (typeof n == "bigint")
    e = n;
  else if (typeof n == "number" && Number.isSafeInteger(n) && n > 0)
    e = BigInt(n);
  else if (typeof n == "string") {
    if (n.length !== 64)
      throw new Error("Expected 32 bytes of private key");
    e = Ni(n);
  } else if (n instanceof Uint8Array) {
    if (n.length !== 32)
      throw new Error("Expected 32 bytes of private key");
    e = Zn(n);
  } else
    throw new TypeError("Expected valid private key");
  if (!Ri(e))
    throw new Error("Expected private key: 0 < key < n");
  return e;
}
function Q0(n) {
  if (n instanceof Kn)
    return n.assertValidity(), n;
  try {
    return Kn.fromDER(n);
  } catch {
    return Kn.fromCompact(n);
  }
}
St.BASE._setWindowSize(8);
const Gt = {
  node: Ps,
  web: typeof self == "object" && "crypto" in self ? self.crypto : void 0
}, ui = {}, Gn = {
  bytesToHex: wr,
  hexToBytes: Vn,
  concatBytes: Br,
  mod: ae,
  invert: Zi,
  isValidPrivateKey(n) {
    try {
      return Is(n), !0;
    } catch {
      return !1;
    }
  },
  _bigintTo32Bytes: pc,
  _normalizePrivateKey: Is,
  hashToPrivateKey: (n) => {
    if (n = xs(n), n.length < 40 || n.length > 1024)
      throw new Error("Expected 40-1024 bytes of private key as per FIPS 186");
    const e = ae(Zn(n), nt.n - Xe) + Xe;
    return pc(e);
  },
  randomBytes: (n = 32) => {
    if (Gt.web)
      return Gt.web.getRandomValues(new Uint8Array(n));
    if (Gt.node) {
      const { randomBytes: e } = Gt.node;
      return Uint8Array.from(e(n));
    } else
      throw new Error("The environment doesn't have randomBytes function");
  },
  randomPrivateKey: () => Gn.hashToPrivateKey(Gn.randomBytes(40)),
  sha256: async (...n) => {
    if (Gt.web) {
      const e = await Gt.web.subtle.digest("SHA-256", Br(...n));
      return new Uint8Array(e);
    } else if (Gt.node) {
      const { createHash: e } = Gt.node, t = e("sha256");
      return n.forEach((r) => t.update(r)), Uint8Array.from(t.digest());
    } else
      throw new Error("The environment doesn't have sha256 function");
  },
  hmacSha256: async (n, ...e) => {
    if (Gt.web) {
      const t = await Gt.web.subtle.importKey("raw", n, { name: "HMAC", hash: { name: "SHA-256" } }, !1, ["sign"]), r = Br(...e), o = await Gt.web.subtle.sign("HMAC", t, r);
      return new Uint8Array(o);
    } else if (Gt.node) {
      const { createHmac: t } = Gt.node, r = t("sha256", n);
      return e.forEach((o) => r.update(o)), Uint8Array.from(r.digest());
    } else
      throw new Error("The environment doesn't have hmac-sha256 function");
  },
  sha256Sync: void 0,
  hmacSha256Sync: void 0,
  taggedHash: async (n, ...e) => {
    let t = ui[n];
    if (t === void 0) {
      const r = await Gn.sha256(Uint8Array.from(n, (o) => o.charCodeAt(0)));
      t = Br(r, r), ui[n] = t;
    }
    return Gn.sha256(t, ...e);
  },
  taggedHashSync: (n, ...e) => {
    if (typeof dr != "function")
      throw new D0("sha256Sync is undefined, you need to set it");
    let t = ui[n];
    if (t === void 0) {
      const r = dr(Uint8Array.from(n, (o) => o.charCodeAt(0)));
      t = Br(r, r), ui[n] = t;
    }
    return dr(t, ...e);
  },
  precompute(n = 8, e = St.BASE) {
    const t = e === St.BASE ? e : new St(e.x, e.y);
    return t._setWindowSize(n), t.multiply(kr), t;
  }
};
Object.defineProperties(Gn, {
  sha256Sync: {
    configurable: !1,
    get() {
      return dr;
    },
    set(n) {
      dr || (dr = n);
    }
  },
  hmacSha256Sync: {
    configurable: !1,
    get() {
      return ns;
    },
    set(n) {
      ns || (ns = n);
    }
  }
});
gr.sha512Sync = (...n) => Ch(gr.concatBytes(...n));
gr.randomPrivateKey;
function mc(n) {
  try {
    return et.fromHex(
      n,
      !0
    ), !0;
  } catch {
    return !1;
  }
}
const q0 = (n, e) => au.sign(n, e.slice(0, 32)), Y0 = au.verify, ti = (n) => Ae.Buffer.isBuffer(n) ? n : n instanceof Uint8Array ? Ae.Buffer.from(n.buffer, n.byteOffset, n.byteLength) : Ae.Buffer.from(n);
class K0 {
  constructor(e) {
    Object.assign(this, e);
  }
  encode() {
    return Ae.Buffer.from(pu(di, this));
  }
  static decode(e) {
    return gu(di, this, e);
  }
  static decodeUnchecked(e) {
    return uu(di, this, e);
  }
}
const di = /* @__PURE__ */ new Map(), V0 = 32, En = 32;
function Z0(n) {
  return n._bn !== void 0;
}
let bc = 1;
class fe extends K0 {
  constructor(e) {
    if (super({}), this._bn = void 0, Z0(e))
      this._bn = e._bn;
    else {
      if (typeof e == "string") {
        const t = Ct.decode(e);
        if (t.length != En)
          throw new Error("Invalid public key input");
        this._bn = new qa(t);
      } else
        this._bn = new qa(e);
      if (this._bn.byteLength() > 32)
        throw new Error("Invalid public key input");
    }
  }
  static unique() {
    const e = new fe(bc);
    return bc += 1, new fe(e.toBuffer());
  }
  equals(e) {
    return this._bn.eq(e._bn);
  }
  toBase58() {
    return Ct.encode(this.toBytes());
  }
  toJSON() {
    return this.toBase58();
  }
  toBytes() {
    return this.toBuffer();
  }
  toBuffer() {
    const e = this._bn.toArrayLike(Ae.Buffer);
    if (e.length === En)
      return e;
    const t = Ae.Buffer.alloc(32);
    return e.copy(t, 32 - e.length), t;
  }
  toString() {
    return this.toBase58();
  }
  static async createWithSeed(e, t, r) {
    const o = Ae.Buffer.concat([e.toBuffer(), Ae.Buffer.from(t), r.toBuffer()]), i = As(o);
    return new fe(i);
  }
  static createProgramAddressSync(e, t) {
    let r = Ae.Buffer.alloc(0);
    e.forEach(function(i) {
      if (i.length > V0)
        throw new TypeError("Max seed length exceeded");
      r = Ae.Buffer.concat([r, ti(i)]);
    }), r = Ae.Buffer.concat([r, t.toBuffer(), Ae.Buffer.from("ProgramDerivedAddress")]);
    const o = As(r);
    if (mc(o))
      throw new Error("Invalid seeds, address must fall off the curve");
    return new fe(o);
  }
  static async createProgramAddress(e, t) {
    return this.createProgramAddressSync(e, t);
  }
  static findProgramAddressSync(e, t) {
    let r = 255, o;
    for (; r != 0; ) {
      try {
        const i = e.concat(Ae.Buffer.from([r]));
        o = this.createProgramAddressSync(i, t);
      } catch (i) {
        if (i instanceof TypeError)
          throw i;
        r--;
        continue;
      }
      return [o, r];
    }
    throw new Error("Unable to find a viable program address nonce");
  }
  static async findProgramAddress(e, t) {
    return this.findProgramAddressSync(e, t);
  }
  static isOnCurve(e) {
    const t = new fe(e);
    return mc(t.toBytes());
  }
}
fe.default = new fe("11111111111111111111111111111111");
di.set(fe, {
  kind: "struct",
  fields: [["_bn", "u256"]]
});
new fe("BPFLoader1111111111111111111111111111111111");
const pr = 1280 - 40 - 8, Yu = 127, Ss = 64;
class Ku extends Error {
  constructor(e) {
    super(`Signature ${e} has expired: block height exceeded.`), this.signature = void 0, this.signature = e;
  }
}
Object.defineProperty(Ku.prototype, "name", {
  value: "TransactionExpiredBlockheightExceededError"
});
class Vu extends Error {
  constructor(e, t) {
    super(`Transaction was not confirmed in ${t.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ${e} using the Solana Explorer or CLI tools.`), this.signature = void 0, this.signature = e;
  }
}
Object.defineProperty(Vu.prototype, "name", {
  value: "TransactionExpiredTimeoutError"
});
class ki {
  constructor(e, t) {
    this.staticAccountKeys = void 0, this.accountKeysFromLookups = void 0, this.staticAccountKeys = e, this.accountKeysFromLookups = t;
  }
  keySegments() {
    const e = [this.staticAccountKeys];
    return this.accountKeysFromLookups && (e.push(this.accountKeysFromLookups.writable), e.push(this.accountKeysFromLookups.readonly)), e;
  }
  get(e) {
    for (const t of this.keySegments()) {
      if (e < t.length)
        return t[e];
      e -= t.length;
    }
  }
  get length() {
    return this.keySegments().flat().length;
  }
  compileInstructions(e) {
    if (this.length > 255 + 1)
      throw new Error("Account index overflow encountered during compilation");
    const r = /* @__PURE__ */ new Map();
    this.keySegments().flat().forEach((i, c) => {
      r.set(i.toBase58(), c);
    });
    const o = (i) => {
      const c = r.get(i.toBase58());
      if (c === void 0)
        throw new Error("Encountered an unknown instruction account key during compilation");
      return c;
    };
    return e.map((i) => ({
      programIdIndex: o(i.programId),
      accountKeyIndexes: i.keys.map((c) => o(c.pubkey)),
      data: i.data
    }));
  }
}
const Ie = (n = "publicKey") => $e(32, n), ur = (n = "string") => {
  const e = ue([pe("length"), pe("lengthPadding"), $e(Yn(pe(), -8), "chars")], n), t = e.decode.bind(e), r = e.encode.bind(e), o = e;
  return o.decode = (i, c) => t(i, c).chars.toString(), o.encode = (i, c, u) => {
    const d = {
      chars: Ae.Buffer.from(i, "utf8")
    };
    return r(d, c, u);
  }, o.alloc = (i) => pe().span + pe().span + Ae.Buffer.from(i, "utf8").length, o;
}, X0 = (n = "authorized") => ue([Ie("staker"), Ie("withdrawer")], n), J0 = (n = "lockup") => ue([Qt("unixTimestamp"), Qt("epoch"), Ie("custodian")], n), $0 = (n = "voteInit") => ue([Ie("nodePubkey"), Ie("authorizedVoter"), Ie("authorizedWithdrawer"), Re("commission")], n), ep = (n = "voteAuthorizeWithSeedArgs") => ue([pe("voteAuthorizationType"), Ie("currentAuthorityDerivedKeyOwnerPubkey"), ur("currentAuthorityDerivedKeySeed"), Ie("newAuthorized")], n);
function Xt(n) {
  let e = 0, t = 0;
  for (; ; ) {
    let r = n.shift();
    if (e |= (r & 127) << t * 7, t += 1, (r & 128) === 0)
      break;
  }
  return e;
}
function Jt(n, e) {
  let t = e;
  for (; ; ) {
    let r = t & 127;
    if (t >>= 7, t == 0) {
      n.push(r);
      break;
    } else
      r |= 128, n.push(r);
  }
}
function vt(n, e) {
  if (!n)
    throw new Error(e || "Assertion failed");
}
class Xi {
  constructor(e, t) {
    this.payer = void 0, this.keyMetaMap = void 0, this.payer = e, this.keyMetaMap = t;
  }
  static compile(e, t) {
    const r = /* @__PURE__ */ new Map(), o = (c) => {
      const u = c.toBase58();
      let d = r.get(u);
      return d === void 0 && (d = {
        isSigner: !1,
        isWritable: !1,
        isInvoked: !1
      }, r.set(u, d)), d;
    }, i = o(t);
    i.isSigner = !0, i.isWritable = !0;
    for (const c of e) {
      o(c.programId).isInvoked = !0;
      for (const u of c.keys) {
        const d = o(u.pubkey);
        d.isSigner || (d.isSigner = u.isSigner), d.isWritable || (d.isWritable = u.isWritable);
      }
    }
    return new Xi(t, r);
  }
  getMessageComponents() {
    const e = [...this.keyMetaMap.entries()];
    vt(e.length <= 256, "Max static account keys length exceeded");
    const t = e.filter(([, d]) => d.isSigner && d.isWritable), r = e.filter(([, d]) => d.isSigner && !d.isWritable), o = e.filter(([, d]) => !d.isSigner && d.isWritable), i = e.filter(([, d]) => !d.isSigner && !d.isWritable), c = {
      numRequiredSignatures: t.length + r.length,
      numReadonlySignedAccounts: r.length,
      numReadonlyUnsignedAccounts: i.length
    };
    {
      vt(t.length > 0, "Expected at least one writable signer key");
      const [d] = t[0];
      vt(d === this.payer.toBase58(), "Expected first writable signer key to be the fee payer");
    }
    const u = [...t.map(([d]) => new fe(d)), ...r.map(([d]) => new fe(d)), ...o.map(([d]) => new fe(d)), ...i.map(([d]) => new fe(d))];
    return [c, u];
  }
  extractTableLookup(e) {
    const [t, r] = this.drainKeysFoundInLookupTable(e.state.addresses, (c) => !c.isSigner && !c.isInvoked && c.isWritable), [o, i] = this.drainKeysFoundInLookupTable(e.state.addresses, (c) => !c.isSigner && !c.isInvoked && !c.isWritable);
    if (!(t.length === 0 && o.length === 0))
      return [{
        accountKey: e.key,
        writableIndexes: t,
        readonlyIndexes: o
      }, {
        writable: r,
        readonly: i
      }];
  }
  drainKeysFoundInLookupTable(e, t) {
    const r = new Array(), o = new Array();
    for (const [i, c] of this.keyMetaMap.entries())
      if (t(c)) {
        const u = new fe(i), d = e.findIndex((w) => w.equals(u));
        d >= 0 && (vt(d < 256, "Max lookup table index exceeded"), r.push(d), o.push(u), this.keyMetaMap.delete(i));
      }
    return [r, o];
  }
}
class Pn {
  constructor(e) {
    this.header = void 0, this.accountKeys = void 0, this.recentBlockhash = void 0, this.instructions = void 0, this.indexToProgramIds = /* @__PURE__ */ new Map(), this.header = e.header, this.accountKeys = e.accountKeys.map((t) => new fe(t)), this.recentBlockhash = e.recentBlockhash, this.instructions = e.instructions, this.instructions.forEach((t) => this.indexToProgramIds.set(t.programIdIndex, this.accountKeys[t.programIdIndex]));
  }
  get version() {
    return "legacy";
  }
  get staticAccountKeys() {
    return this.accountKeys;
  }
  get compiledInstructions() {
    return this.instructions.map((e) => ({
      programIdIndex: e.programIdIndex,
      accountKeyIndexes: e.accounts,
      data: Ct.decode(e.data)
    }));
  }
  get addressTableLookups() {
    return [];
  }
  getAccountKeys() {
    return new ki(this.staticAccountKeys);
  }
  static compile(e) {
    const t = Xi.compile(e.instructions, e.payerKey), [r, o] = t.getMessageComponents(), c = new ki(o).compileInstructions(e.instructions).map((u) => ({
      programIdIndex: u.programIdIndex,
      accounts: u.accountKeyIndexes,
      data: Ct.encode(u.data)
    }));
    return new Pn({
      header: r,
      accountKeys: o,
      recentBlockhash: e.recentBlockhash,
      instructions: c
    });
  }
  isAccountSigner(e) {
    return e < this.header.numRequiredSignatures;
  }
  isAccountWritable(e) {
    const t = this.header.numRequiredSignatures;
    if (e >= this.header.numRequiredSignatures) {
      const r = e - t, i = this.accountKeys.length - t - this.header.numReadonlyUnsignedAccounts;
      return r < i;
    } else {
      const r = t - this.header.numReadonlySignedAccounts;
      return e < r;
    }
  }
  isProgramId(e) {
    return this.indexToProgramIds.has(e);
  }
  programIds() {
    return [...this.indexToProgramIds.values()];
  }
  nonProgramIds() {
    return this.accountKeys.filter((e, t) => !this.isProgramId(t));
  }
  serialize() {
    const e = this.accountKeys.length;
    let t = [];
    Jt(t, e);
    const r = this.instructions.map((I) => {
      const {
        accounts: _,
        programIdIndex: E
      } = I, N = Array.from(Ct.decode(I.data));
      let T = [];
      Jt(T, _.length);
      let U = [];
      return Jt(U, N.length), {
        programIdIndex: E,
        keyIndicesCount: Ae.Buffer.from(T),
        keyIndices: _,
        dataLength: Ae.Buffer.from(U),
        data: N
      };
    });
    let o = [];
    Jt(o, r.length);
    let i = Ae.Buffer.alloc(pr);
    Ae.Buffer.from(o).copy(i);
    let c = o.length;
    r.forEach((I) => {
      c += ue([Re("programIdIndex"), $e(I.keyIndicesCount.length, "keyIndicesCount"), Pt(Re("keyIndex"), I.keyIndices.length, "keyIndices"), $e(I.dataLength.length, "dataLength"), Pt(Re("userdatum"), I.data.length, "data")]).encode(I, i, c);
    }), i = i.slice(0, c);
    const u = ue([$e(1, "numRequiredSignatures"), $e(1, "numReadonlySignedAccounts"), $e(1, "numReadonlyUnsignedAccounts"), $e(t.length, "keyCount"), Pt(Ie("key"), e, "keys"), Ie("recentBlockhash")]), d = {
      numRequiredSignatures: Ae.Buffer.from([this.header.numRequiredSignatures]),
      numReadonlySignedAccounts: Ae.Buffer.from([this.header.numReadonlySignedAccounts]),
      numReadonlyUnsignedAccounts: Ae.Buffer.from([this.header.numReadonlyUnsignedAccounts]),
      keyCount: Ae.Buffer.from(t),
      keys: this.accountKeys.map((I) => ti(I.toBytes())),
      recentBlockhash: Ct.decode(this.recentBlockhash)
    };
    let w = Ae.Buffer.alloc(2048);
    const v = u.encode(d, w);
    return i.copy(w, v), w.slice(0, v + i.length);
  }
  static from(e) {
    let t = [...e];
    const r = t.shift();
    if (r !== (r & Yu))
      throw new Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");
    const o = t.shift(), i = t.shift(), c = Xt(t);
    let u = [];
    for (let _ = 0; _ < c; _++) {
      const E = t.slice(0, En);
      t = t.slice(En), u.push(new fe(Ae.Buffer.from(E)));
    }
    const d = t.slice(0, En);
    t = t.slice(En);
    const w = Xt(t);
    let v = [];
    for (let _ = 0; _ < w; _++) {
      const E = t.shift(), N = Xt(t), T = t.slice(0, N);
      t = t.slice(N);
      const U = Xt(t), P = t.slice(0, U), F = Ct.encode(Ae.Buffer.from(P));
      t = t.slice(U), v.push({
        programIdIndex: E,
        accounts: T,
        data: F
      });
    }
    const I = {
      header: {
        numRequiredSignatures: r,
        numReadonlySignedAccounts: o,
        numReadonlyUnsignedAccounts: i
      },
      recentBlockhash: Ct.encode(Ae.Buffer.from(d)),
      accountKeys: u,
      instructions: v
    };
    return new Pn(I);
  }
}
class Oi {
  constructor(e) {
    this.header = void 0, this.staticAccountKeys = void 0, this.recentBlockhash = void 0, this.compiledInstructions = void 0, this.addressTableLookups = void 0, this.header = e.header, this.staticAccountKeys = e.staticAccountKeys, this.recentBlockhash = e.recentBlockhash, this.compiledInstructions = e.compiledInstructions, this.addressTableLookups = e.addressTableLookups;
  }
  get version() {
    return 0;
  }
  get numAccountKeysFromLookups() {
    let e = 0;
    for (const t of this.addressTableLookups)
      e += t.readonlyIndexes.length + t.writableIndexes.length;
    return e;
  }
  getAccountKeys(e) {
    let t;
    if (e && "accountKeysFromLookups" in e && e.accountKeysFromLookups) {
      if (this.numAccountKeysFromLookups != e.accountKeysFromLookups.writable.length + e.accountKeysFromLookups.readonly.length)
        throw new Error("Failed to get account keys because of a mismatch in the number of account keys from lookups");
      t = e.accountKeysFromLookups;
    } else if (e && "addressLookupTableAccounts" in e && e.addressLookupTableAccounts)
      t = this.resolveAddressTableLookups(e.addressLookupTableAccounts);
    else if (this.addressTableLookups.length > 0)
      throw new Error("Failed to get account keys because address table lookups were not resolved");
    return new ki(this.staticAccountKeys, t);
  }
  isAccountSigner(e) {
    return e < this.header.numRequiredSignatures;
  }
  isAccountWritable(e) {
    const t = this.header.numRequiredSignatures, r = this.staticAccountKeys.length;
    if (e >= r) {
      const o = e - r, i = this.addressTableLookups.reduce((c, u) => c + u.writableIndexes.length, 0);
      return o < i;
    } else if (e >= this.header.numRequiredSignatures) {
      const o = e - t, c = r - t - this.header.numReadonlyUnsignedAccounts;
      return o < c;
    } else {
      const o = t - this.header.numReadonlySignedAccounts;
      return e < o;
    }
  }
  resolveAddressTableLookups(e) {
    const t = {
      writable: [],
      readonly: []
    };
    for (const r of this.addressTableLookups) {
      const o = e.find((i) => i.key.equals(r.accountKey));
      if (!o)
        throw new Error(`Failed to find address lookup table account for table key ${r.accountKey.toBase58()}`);
      for (const i of r.writableIndexes)
        if (i < o.state.addresses.length)
          t.writable.push(o.state.addresses[i]);
        else
          throw new Error(`Failed to find address for index ${i} in address lookup table ${r.accountKey.toBase58()}`);
      for (const i of r.readonlyIndexes)
        if (i < o.state.addresses.length)
          t.readonly.push(o.state.addresses[i]);
        else
          throw new Error(`Failed to find address for index ${i} in address lookup table ${r.accountKey.toBase58()}`);
    }
    return t;
  }
  static compile(e) {
    const t = Xi.compile(e.instructions, e.payerKey), r = new Array(), o = {
      writable: new Array(),
      readonly: new Array()
    }, i = e.addressLookupTableAccounts || [];
    for (const v of i) {
      const I = t.extractTableLookup(v);
      if (I !== void 0) {
        const [_, {
          writable: E,
          readonly: N
        }] = I;
        r.push(_), o.writable.push(...E), o.readonly.push(...N);
      }
    }
    const [c, u] = t.getMessageComponents(), w = new ki(u, o).compileInstructions(e.instructions);
    return new Oi({
      header: c,
      staticAccountKeys: u,
      recentBlockhash: e.recentBlockhash,
      compiledInstructions: w,
      addressTableLookups: r
    });
  }
  serialize() {
    const e = Array();
    Jt(e, this.staticAccountKeys.length);
    const t = this.serializeInstructions(), r = Array();
    Jt(r, this.compiledInstructions.length);
    const o = this.serializeAddressTableLookups(), i = Array();
    Jt(i, this.addressTableLookups.length);
    const c = ue([Re("prefix"), ue([Re("numRequiredSignatures"), Re("numReadonlySignedAccounts"), Re("numReadonlyUnsignedAccounts")], "header"), $e(e.length, "staticAccountKeysLength"), Pt(Ie(), this.staticAccountKeys.length, "staticAccountKeys"), Ie("recentBlockhash"), $e(r.length, "instructionsLength"), $e(t.length, "serializedInstructions"), $e(i.length, "addressTableLookupsLength"), $e(o.length, "serializedAddressTableLookups")]), u = new Uint8Array(pr), d = 1 << 7, w = c.encode({
      prefix: d,
      header: this.header,
      staticAccountKeysLength: new Uint8Array(e),
      staticAccountKeys: this.staticAccountKeys.map((v) => v.toBytes()),
      recentBlockhash: Ct.decode(this.recentBlockhash),
      instructionsLength: new Uint8Array(r),
      serializedInstructions: t,
      addressTableLookupsLength: new Uint8Array(i),
      serializedAddressTableLookups: o
    }, u);
    return u.slice(0, w);
  }
  serializeInstructions() {
    let e = 0;
    const t = new Uint8Array(pr);
    for (const r of this.compiledInstructions) {
      const o = Array();
      Jt(o, r.accountKeyIndexes.length);
      const i = Array();
      Jt(i, r.data.length), e += ue([Re("programIdIndex"), $e(o.length, "encodedAccountKeyIndexesLength"), Pt(Re(), r.accountKeyIndexes.length, "accountKeyIndexes"), $e(i.length, "encodedDataLength"), $e(r.data.length, "data")]).encode({
        programIdIndex: r.programIdIndex,
        encodedAccountKeyIndexesLength: new Uint8Array(o),
        accountKeyIndexes: r.accountKeyIndexes,
        encodedDataLength: new Uint8Array(i),
        data: r.data
      }, t, e);
    }
    return t.slice(0, e);
  }
  serializeAddressTableLookups() {
    let e = 0;
    const t = new Uint8Array(pr);
    for (const r of this.addressTableLookups) {
      const o = Array();
      Jt(o, r.writableIndexes.length);
      const i = Array();
      Jt(i, r.readonlyIndexes.length), e += ue([Ie("accountKey"), $e(o.length, "encodedWritableIndexesLength"), Pt(Re(), r.writableIndexes.length, "writableIndexes"), $e(i.length, "encodedReadonlyIndexesLength"), Pt(Re(), r.readonlyIndexes.length, "readonlyIndexes")]).encode({
        accountKey: r.accountKey.toBytes(),
        encodedWritableIndexesLength: new Uint8Array(o),
        writableIndexes: r.writableIndexes,
        encodedReadonlyIndexesLength: new Uint8Array(i),
        readonlyIndexes: r.readonlyIndexes
      }, t, e);
    }
    return t.slice(0, e);
  }
  static deserialize(e) {
    let t = [...e];
    const r = t.shift(), o = r & Yu;
    vt(r !== o, "Expected versioned message but received legacy message");
    const i = o;
    vt(i === 0, `Expected versioned message with version 0 but found version ${i}`);
    const c = {
      numRequiredSignatures: t.shift(),
      numReadonlySignedAccounts: t.shift(),
      numReadonlyUnsignedAccounts: t.shift()
    }, u = [], d = Xt(t);
    for (let N = 0; N < d; N++)
      u.push(new fe(t.splice(0, En)));
    const w = Ct.encode(t.splice(0, En)), v = Xt(t), I = [];
    for (let N = 0; N < v; N++) {
      const T = t.shift(), U = Xt(t), P = t.splice(0, U), F = Xt(t), O = new Uint8Array(t.splice(0, F));
      I.push({
        programIdIndex: T,
        accountKeyIndexes: P,
        data: O
      });
    }
    const _ = Xt(t), E = [];
    for (let N = 0; N < _; N++) {
      const T = new fe(t.splice(0, En)), U = Xt(t), P = t.splice(0, U), F = Xt(t), O = t.splice(0, F);
      E.push({
        accountKey: T,
        writableIndexes: P,
        readonlyIndexes: O
      });
    }
    return new Oi({
      header: c,
      staticAccountKeys: u,
      recentBlockhash: w,
      compiledInstructions: I,
      addressTableLookups: E
    });
  }
}
let Tn;
(function(n) {
  n[n.BLOCKHEIGHT_EXCEEDED = 0] = "BLOCKHEIGHT_EXCEEDED", n[n.PROCESSED = 1] = "PROCESSED", n[n.TIMED_OUT = 2] = "TIMED_OUT";
})(Tn || (Tn = {}));
const tp = Ae.Buffer.alloc(Ss).fill(0);
class Ac {
  constructor(e) {
    this.keys = void 0, this.programId = void 0, this.data = Ae.Buffer.alloc(0), this.programId = e.programId, this.keys = e.keys, e.data && (this.data = e.data);
  }
  toJSON() {
    return {
      keys: this.keys.map(({
        pubkey: e,
        isSigner: t,
        isWritable: r
      }) => ({
        pubkey: e.toJSON(),
        isSigner: t,
        isWritable: r
      })),
      programId: this.programId.toJSON(),
      data: [...this.data]
    };
  }
}
class Nn {
  get signature() {
    return this.signatures.length > 0 ? this.signatures[0].signature : null;
  }
  constructor(e) {
    if (this.signatures = [], this.feePayer = void 0, this.instructions = [], this.recentBlockhash = void 0, this.lastValidBlockHeight = void 0, this.nonceInfo = void 0, this._message = void 0, this._json = void 0, !!e)
      if (e.feePayer && (this.feePayer = e.feePayer), e.signatures && (this.signatures = e.signatures), Object.prototype.hasOwnProperty.call(e, "lastValidBlockHeight")) {
        const {
          blockhash: t,
          lastValidBlockHeight: r
        } = e;
        this.recentBlockhash = t, this.lastValidBlockHeight = r;
      } else {
        const {
          recentBlockhash: t,
          nonceInfo: r
        } = e;
        r && (this.nonceInfo = r), this.recentBlockhash = t;
      }
  }
  toJSON() {
    return {
      recentBlockhash: this.recentBlockhash || null,
      feePayer: this.feePayer ? this.feePayer.toJSON() : null,
      nonceInfo: this.nonceInfo ? {
        nonce: this.nonceInfo.nonce,
        nonceInstruction: this.nonceInfo.nonceInstruction.toJSON()
      } : null,
      instructions: this.instructions.map((e) => e.toJSON()),
      signers: this.signatures.map(({
        publicKey: e
      }) => e.toJSON())
    };
  }
  add(...e) {
    if (e.length === 0)
      throw new Error("No instructions");
    return e.forEach((t) => {
      "instructions" in t ? this.instructions = this.instructions.concat(t.instructions) : "data" in t && "programId" in t && "keys" in t ? this.instructions.push(t) : this.instructions.push(new Ac(t));
    }), this;
  }
  compileMessage() {
    if (this._message && JSON.stringify(this.toJSON()) === JSON.stringify(this._json))
      return this._message;
    let e, t;
    if (this.nonceInfo ? (e = this.nonceInfo.nonce, this.instructions[0] != this.nonceInfo.nonceInstruction ? t = [this.nonceInfo.nonceInstruction, ...this.instructions] : t = this.instructions) : (e = this.recentBlockhash, t = this.instructions), !e)
      throw new Error("Transaction recentBlockhash required");
    t.length < 1 && console.warn("No instructions provided");
    let r;
    if (this.feePayer)
      r = this.feePayer;
    else if (this.signatures.length > 0 && this.signatures[0].publicKey)
      r = this.signatures[0].publicKey;
    else
      throw new Error("Transaction fee payer required");
    for (let T = 0; T < t.length; T++)
      if (t[T].programId === void 0)
        throw new Error(`Transaction instruction index ${T} has undefined program id`);
    const o = [], i = [];
    t.forEach((T) => {
      T.keys.forEach((P) => {
        i.push({
          ...P
        });
      });
      const U = T.programId.toString();
      o.includes(U) || o.push(U);
    }), o.forEach((T) => {
      i.push({
        pubkey: new fe(T),
        isSigner: !1,
        isWritable: !1
      });
    });
    const c = [];
    i.forEach((T) => {
      const U = T.pubkey.toString(), P = c.findIndex((F) => F.pubkey.toString() === U);
      P > -1 ? (c[P].isWritable = c[P].isWritable || T.isWritable, c[P].isSigner = c[P].isSigner || T.isSigner) : c.push(T);
    }), c.sort(function(T, U) {
      return T.isSigner !== U.isSigner ? T.isSigner ? -1 : 1 : T.isWritable !== U.isWritable ? T.isWritable ? -1 : 1 : T.pubkey.toBase58().localeCompare(U.pubkey.toBase58());
    });
    const u = c.findIndex((T) => T.pubkey.equals(r));
    if (u > -1) {
      const [T] = c.splice(u, 1);
      T.isSigner = !0, T.isWritable = !0, c.unshift(T);
    } else
      c.unshift({
        pubkey: r,
        isSigner: !0,
        isWritable: !0
      });
    for (const T of this.signatures) {
      const U = c.findIndex((P) => P.pubkey.equals(T.publicKey));
      if (U > -1)
        c[U].isSigner || (c[U].isSigner = !0, console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."));
      else
        throw new Error(`unknown signer: ${T.publicKey.toString()}`);
    }
    let d = 0, w = 0, v = 0;
    const I = [], _ = [];
    c.forEach(({
      pubkey: T,
      isSigner: U,
      isWritable: P
    }) => {
      U ? (I.push(T.toString()), d += 1, P || (w += 1)) : (_.push(T.toString()), P || (v += 1));
    });
    const E = I.concat(_), N = t.map((T) => {
      const {
        data: U,
        programId: P
      } = T;
      return {
        programIdIndex: E.indexOf(P.toString()),
        accounts: T.keys.map((F) => E.indexOf(F.pubkey.toString())),
        data: Ct.encode(U)
      };
    });
    return N.forEach((T) => {
      vt(T.programIdIndex >= 0), T.accounts.forEach((U) => vt(U >= 0));
    }), new Pn({
      header: {
        numRequiredSignatures: d,
        numReadonlySignedAccounts: w,
        numReadonlyUnsignedAccounts: v
      },
      accountKeys: E,
      recentBlockhash: e,
      instructions: N
    });
  }
  _compile() {
    const e = this.compileMessage(), t = e.accountKeys.slice(0, e.header.numRequiredSignatures);
    return this.signatures.length === t.length && this.signatures.every((o, i) => t[i].equals(o.publicKey)) || (this.signatures = t.map((r) => ({
      signature: null,
      publicKey: r
    }))), e;
  }
  serializeMessage() {
    return this._compile().serialize();
  }
  async getEstimatedFee(e) {
    return (await e.getFeeForMessage(this.compileMessage())).value;
  }
  setSigners(...e) {
    if (e.length === 0)
      throw new Error("No signers");
    const t = /* @__PURE__ */ new Set();
    this.signatures = e.filter((r) => {
      const o = r.toString();
      return t.has(o) ? !1 : (t.add(o), !0);
    }).map((r) => ({
      signature: null,
      publicKey: r
    }));
  }
  sign(...e) {
    if (e.length === 0)
      throw new Error("No signers");
    const t = /* @__PURE__ */ new Set(), r = [];
    for (const i of e) {
      const c = i.publicKey.toString();
      t.has(c) || (t.add(c), r.push(i));
    }
    this.signatures = r.map((i) => ({
      signature: null,
      publicKey: i.publicKey
    }));
    const o = this._compile();
    this._partialSign(o, ...r);
  }
  partialSign(...e) {
    if (e.length === 0)
      throw new Error("No signers");
    const t = /* @__PURE__ */ new Set(), r = [];
    for (const i of e) {
      const c = i.publicKey.toString();
      t.has(c) || (t.add(c), r.push(i));
    }
    const o = this._compile();
    this._partialSign(o, ...r);
  }
  _partialSign(e, ...t) {
    const r = e.serialize();
    t.forEach((o) => {
      const i = q0(r, o.secretKey);
      this._addSignature(o.publicKey, ti(i));
    });
  }
  addSignature(e, t) {
    this._compile(), this._addSignature(e, t);
  }
  _addSignature(e, t) {
    vt(t.length === 64);
    const r = this.signatures.findIndex((o) => e.equals(o.publicKey));
    if (r < 0)
      throw new Error(`unknown signer: ${e.toString()}`);
    this.signatures[r].signature = Ae.Buffer.from(t);
  }
  verifySignatures() {
    return this._verifySignatures(this.serializeMessage(), !0);
  }
  _verifySignatures(e, t) {
    for (const {
      signature: r,
      publicKey: o
    } of this.signatures)
      if (r === null) {
        if (t)
          return !1;
      } else if (!Y0(r, e, o.toBuffer()))
        return !1;
    return !0;
  }
  serialize(e) {
    const {
      requireAllSignatures: t,
      verifySignatures: r
    } = Object.assign({
      requireAllSignatures: !0,
      verifySignatures: !0
    }, e), o = this.serializeMessage();
    if (r && !this._verifySignatures(o, t))
      throw new Error("Signature verification failed");
    return this._serialize(o);
  }
  _serialize(e) {
    const {
      signatures: t
    } = this, r = [];
    Jt(r, t.length);
    const o = r.length + t.length * 64 + e.length, i = Ae.Buffer.alloc(o);
    return vt(t.length < 256), Ae.Buffer.from(r).copy(i, 0), t.forEach(({
      signature: c
    }, u) => {
      c !== null && (vt(c.length === 64, "signature has invalid length"), Ae.Buffer.from(c).copy(i, r.length + u * 64));
    }), e.copy(i, r.length + t.length * 64), vt(i.length <= pr, `Transaction too large: ${i.length} > ${pr}`), i;
  }
  get keys() {
    return vt(this.instructions.length === 1), this.instructions[0].keys.map((e) => e.pubkey);
  }
  get programId() {
    return vt(this.instructions.length === 1), this.instructions[0].programId;
  }
  get data() {
    return vt(this.instructions.length === 1), this.instructions[0].data;
  }
  static from(e) {
    let t = [...e];
    const r = Xt(t);
    let o = [];
    for (let i = 0; i < r; i++) {
      const c = t.slice(0, Ss);
      t = t.slice(Ss), o.push(Ct.encode(Ae.Buffer.from(c)));
    }
    return Nn.populate(Pn.from(t), o);
  }
  static populate(e, t = []) {
    const r = new Nn();
    return r.recentBlockhash = e.recentBlockhash, e.header.numRequiredSignatures > 0 && (r.feePayer = e.accountKeys[0]), t.forEach((o, i) => {
      const c = {
        signature: o == Ct.encode(tp) ? null : Ct.decode(o),
        publicKey: e.accountKeys[i]
      };
      r.signatures.push(c);
    }), e.instructions.forEach((o) => {
      const i = o.accounts.map((c) => {
        const u = e.accountKeys[c];
        return {
          pubkey: u,
          isSigner: r.signatures.some((d) => d.publicKey.toString() === u.toString()) || e.isAccountSigner(c),
          isWritable: e.isAccountWritable(c)
        };
      });
      r.instructions.push(new Ac({
        keys: i,
        programId: e.accountKeys[o.programIdIndex],
        data: Ct.decode(o.data)
      }));
    }), r._message = e, r._json = r.toJSON(), r;
  }
}
new fe("SysvarC1ock11111111111111111111111111111111");
new fe("SysvarEpochSchedu1e111111111111111111111111");
new fe("Sysvar1nstructions1111111111111111111111111");
new fe("SysvarRecentB1ockHashes11111111111111111111");
new fe("SysvarRent111111111111111111111111111111111");
new fe("SysvarRewards111111111111111111111111111111");
new fe("SysvarS1otHashes111111111111111111111111111");
new fe("SysvarS1otHistory11111111111111111111111111");
new fe("SysvarStakeHistory1111111111111111111111111");
function pi(n) {
  return new Promise((e) => setTimeout(e, n));
}
const np = Mt("lamportsPerSignature"), Zu = ue([pe("version"), pe("state"), Ie("authorizedPubkey"), Ie("nonce"), ue([np], "feeCalculator")]);
Zu.span;
class ua {
  constructor(e) {
    this.authorizedPubkey = void 0, this.nonce = void 0, this.feeCalculator = void 0, this.authorizedPubkey = e.authorizedPubkey, this.nonce = e.nonce, this.feeCalculator = e.feeCalculator;
  }
  static fromAccountData(e) {
    const t = Zu.decode(ti(e), 0);
    return new ua({
      authorizedPubkey: new fe(t.authorizedPubkey),
      nonce: new fe(t.nonce).toString(),
      feeCalculator: t.feeCalculator
    });
  }
}
const rp = (n) => {
  const e = n.decode.bind(n), t = n.encode.bind(n);
  return {
    decode: e,
    encode: t
  };
}, ip = (n) => (e) => {
  const t = $e(n, e), {
    encode: r,
    decode: o
  } = rp(t), i = t;
  return i.decode = (c, u) => {
    const d = o(c, u);
    return Sd(Ae.Buffer.from(d));
  }, i.encode = (c, u, d) => {
    const w = _d(c, n);
    return r(w, u, d);
  }, i;
}, mr = ip(8);
Object.freeze({
  Create: {
    index: 0,
    layout: ue([pe("instruction"), Qt("lamports"), Qt("space"), Ie("programId")])
  },
  Assign: {
    index: 1,
    layout: ue([pe("instruction"), Ie("programId")])
  },
  Transfer: {
    index: 2,
    layout: ue([pe("instruction"), mr("lamports")])
  },
  CreateWithSeed: {
    index: 3,
    layout: ue([pe("instruction"), Ie("base"), ur("seed"), Qt("lamports"), Qt("space"), Ie("programId")])
  },
  AdvanceNonceAccount: {
    index: 4,
    layout: ue([pe("instruction")])
  },
  WithdrawNonceAccount: {
    index: 5,
    layout: ue([pe("instruction"), Qt("lamports")])
  },
  InitializeNonceAccount: {
    index: 6,
    layout: ue([pe("instruction"), Ie("authorized")])
  },
  AuthorizeNonceAccount: {
    index: 7,
    layout: ue([pe("instruction"), Ie("authorized")])
  },
  Allocate: {
    index: 8,
    layout: ue([pe("instruction"), Qt("space")])
  },
  AllocateWithSeed: {
    index: 9,
    layout: ue([pe("instruction"), Ie("base"), ur("seed"), Qt("space"), Ie("programId")])
  },
  AssignWithSeed: {
    index: 10,
    layout: ue([pe("instruction"), Ie("base"), ur("seed"), Ie("programId")])
  },
  TransferWithSeed: {
    index: 11,
    layout: ue([pe("instruction"), mr("lamports"), ur("seed"), Ie("programId")])
  },
  UpgradeNonceAccount: {
    index: 12,
    layout: ue([pe("instruction")])
  }
});
new fe("11111111111111111111111111111111");
new fe("BPFLoader2111111111111111111111111111111111");
var op = Object.prototype.toString, sp = Object.keys || function(n) {
  var e = [];
  for (var t in n)
    e.push(t);
  return e;
};
function Tr(n, e) {
  var t, r, o, i, c, u, d;
  if (n === !0)
    return "true";
  if (n === !1)
    return "false";
  switch (typeof n) {
    case "object":
      if (n === null)
        return null;
      if (n.toJSON && typeof n.toJSON == "function")
        return Tr(n.toJSON(), e);
      if (d = op.call(n), d === "[object Array]") {
        for (o = "[", r = n.length - 1, t = 0; t < r; t++)
          o += Tr(n[t], !0) + ",";
        return r > -1 && (o += Tr(n[t], !0)), o + "]";
      } else if (d === "[object Object]") {
        for (i = sp(n).sort(), r = i.length, o = "", t = 0; t < r; )
          c = i[t], u = Tr(n[c], !1), u !== void 0 && (o && (o += ","), o += JSON.stringify(c) + ":" + u), t++;
        return "{" + o + "}";
      } else
        return JSON.stringify(n);
    case "function":
    case "undefined":
      return e ? null : void 0;
    case "string":
      return JSON.stringify(n);
    default:
      return isFinite(n) ? n : null;
  }
}
var ap = function(n) {
  var e = Tr(n, !1);
  if (e !== void 0)
    return "" + e;
}, cp = ap;
const _r = 32;
function is(n) {
  let e = 0;
  for (; n > 1; )
    n /= 2, e++;
  return e;
}
function up(n) {
  return n === 0 ? 1 : (n--, n |= n >> 1, n |= n >> 2, n |= n >> 4, n |= n >> 8, n |= n >> 16, n |= n >> 32, n + 1);
}
class lp {
  constructor(e, t, r, o, i) {
    this.slotsPerEpoch = void 0, this.leaderScheduleSlotOffset = void 0, this.warmup = void 0, this.firstNormalEpoch = void 0, this.firstNormalSlot = void 0, this.slotsPerEpoch = e, this.leaderScheduleSlotOffset = t, this.warmup = r, this.firstNormalEpoch = o, this.firstNormalSlot = i;
  }
  getEpoch(e) {
    return this.getEpochAndSlotIndex(e)[0];
  }
  getEpochAndSlotIndex(e) {
    if (e < this.firstNormalSlot) {
      const t = is(up(e + _r + 1)) - is(_r) - 1, r = this.getSlotsInEpoch(t), o = e - (r - _r);
      return [t, o];
    } else {
      const t = e - this.firstNormalSlot, r = Math.floor(t / this.slotsPerEpoch), o = this.firstNormalEpoch + r, i = t % this.slotsPerEpoch;
      return [o, i];
    }
  }
  getFirstSlotInEpoch(e) {
    return e <= this.firstNormalEpoch ? (Math.pow(2, e) - 1) * _r : (e - this.firstNormalEpoch) * this.slotsPerEpoch + this.firstNormalSlot;
  }
  getLastSlotInEpoch(e) {
    return this.getFirstSlotInEpoch(e) + this.getSlotsInEpoch(e) - 1;
  }
  getSlotsInEpoch(e) {
    return e < this.firstNormalEpoch ? Math.pow(2, e + is(_r)) : this.slotsPerEpoch;
  }
}
class vc extends Error {
  constructor(e, t) {
    super(e), this.logs = void 0, this.logs = t;
  }
}
class he extends Error {
  constructor({
    code: e,
    message: t,
    data: r
  }, o) {
    super(o != null ? `${o}: ${t}` : t), this.code = void 0, this.data = void 0, this.code = e, this.data = r, this.name = "SolanaJSONRPCError";
  }
}
var fp = globalThis.fetch;
const hp = 160, dp = 64, pp = hp / dp, gp = 1e3 / pp;
function yp(n, e) {
  let t;
  try {
    t = n.layout.decode(e);
  } catch (r) {
    throw new Error("invalid instruction; " + r);
  }
  if (t.typeIndex !== n.index)
    throw new Error(`invalid account data; account type mismatch ${t.typeIndex} != ${n.index}`);
  return t;
}
const Ec = 56;
class xc {
  constructor(e) {
    this.key = void 0, this.state = void 0, this.key = e.key, this.state = e.state;
  }
  isActive() {
    const e = BigInt("0xffffffffffffffff");
    return this.state.deactivationSlot === e;
  }
  static deserialize(e) {
    const t = yp(wp, e), r = e.length - Ec;
    vt(r >= 0, "lookup table is invalid"), vt(r % 32 === 0, "lookup table is invalid");
    const o = r / 32, {
      addresses: i
    } = ue([Pt(Ie(), o, "addresses")]).decode(e.slice(Ec));
    return {
      deactivationSlot: t.deactivationSlot,
      lastExtendedSlot: t.lastExtendedSlot,
      lastExtendedSlotStartIndex: t.lastExtendedStartIndex,
      authority: t.authority.length !== 0 ? new fe(t.authority[0]) : void 0,
      addresses: i.map((c) => new fe(c))
    };
  }
}
const wp = {
  index: 1,
  layout: ue([
    pe("typeIndex"),
    mr("deactivationSlot"),
    Mt("lastExtendedSlot"),
    Re("lastExtendedStartIndex"),
    Re(),
    Pt(Ie(), Yn(Re(), -1), "authority")
  ])
}, mp = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i;
function bp(n) {
  const e = n.match(mp);
  if (e == null)
    throw TypeError(`Failed to validate endpoint URL \`${n}\``);
  const [
    t,
    r,
    o,
    i
  ] = e, c = n.startsWith("https:") ? "wss:" : "ws:", u = o == null ? null : parseInt(o.slice(1), 10), d = u == null ? "" : `:${u + 1}`;
  return `${c}//${r}${d}${i}`;
}
var os;
const xt = ei(ea(fe), te(), (n) => new fe(n)), Xu = ta([te(), Je("base64")]), la = ei(ea(Ae.Buffer), Xu, (n) => Ae.Buffer.from(n[0], "base64")), Ap = 30 * 1e3;
function vp(n) {
  if (/^https?:/.test(n) === !1)
    throw new TypeError("Endpoint URL must start with `http:` or `https:`.");
  return n;
}
function tt(n) {
  let e, t;
  if (typeof n == "string")
    e = n;
  else if (n) {
    const {
      commitment: r,
      ...o
    } = n;
    e = r, t = o;
  }
  return {
    commitment: e,
    config: t
  };
}
function Ju(n) {
  return Wt([X({
    jsonrpc: Je("2.0"),
    id: te(),
    result: n
  }), X({
    jsonrpc: Je("2.0"),
    id: te(),
    error: X({
      code: $r(),
      message: te(),
      data: Ee(Ud())
    })
  })]);
}
const Ep = Ju($r());
function _e(n) {
  return ei(Ju(n), Ep, (e) => "error" in e ? e : {
    ...e,
    result: re(e.result, n)
  });
}
function It(n) {
  return _e(X({
    context: X({
      slot: G()
    }),
    value: n
  }));
}
function Ji(n) {
  return X({
    context: X({
      slot: G()
    }),
    value: n
  });
}
function ss(n, e) {
  return n === 0 ? new Oi({
    header: e.header,
    staticAccountKeys: e.accountKeys.map((t) => new fe(t)),
    recentBlockhash: e.recentBlockhash,
    compiledInstructions: e.instructions.map((t) => ({
      programIdIndex: t.programIdIndex,
      accountKeyIndexes: t.accounts,
      data: Ct.decode(t.data)
    })),
    addressTableLookups: e.addressTableLookups
  }) : new Pn(e);
}
const xp = X({
  foundation: G(),
  foundationTerm: G(),
  initial: G(),
  taper: G(),
  terminal: G()
}), Ip = _e(ce(de(X({
  epoch: G(),
  effectiveSlot: G(),
  amount: G(),
  postBalance: G()
})))), Sp = X({
  epoch: G(),
  slotIndex: G(),
  slotsInEpoch: G(),
  absoluteSlot: G(),
  blockHeight: Ee(G()),
  transactionCount: Ee(G())
}), Bp = X({
  slotsPerEpoch: G(),
  leaderScheduleSlotOffset: G(),
  warmup: xn(),
  firstNormalEpoch: G(),
  firstNormalSlot: G()
}), Mp = Ou(te(), ce(G())), rr = de(Wt([X({}), te()])), _p = X({
  err: rr
}), Cp = Je("receivedSignature"), Tp = X({
  "solana-core": te(),
  "feature-set": Ee(G())
}), Ic = It(X({
  err: de(Wt([X({}), te()])),
  logs: de(ce(te())),
  accounts: Ee(de(ce(de(X({
    executable: xn(),
    owner: te(),
    lamports: G(),
    data: ce(te()),
    rentEpoch: Ee(G())
  }))))),
  unitsConsumed: Ee(G()),
  returnData: Ee(de(X({
    programId: te(),
    data: ta([te(), Je("base64")])
  })))
})), Np = It(X({
  byIdentity: Ou(te(), ce(G())),
  range: X({
    firstSlot: G(),
    lastSlot: G()
  })
}));
function Rp(n, e, t, r, o) {
  const i = t || fp;
  let c;
  return r && (c = async (d, w) => {
    const v = await new Promise((I, _) => {
      try {
        r(d, w, (E, N) => I([E, N]));
      } catch (E) {
        _(E);
      }
    });
    return await i(...v);
  }), new M0(async (d, w) => {
    const I = {
      method: "POST",
      body: d,
      agent: void 0,
      headers: Object.assign({
        "Content-Type": "application/json"
      }, e || {}, Mg)
    };
    try {
      let _ = 5, E, N = 500;
      for (; c ? E = await c(n, I) : E = await i(n, I), !(E.status !== 429 || o === !0 || (_ -= 1, _ === 0)); )
        console.log(`Server responded with ${E.status} ${E.statusText}.  Retrying after ${N}ms delay...`), await pi(N), N *= 2;
      const T = await E.text();
      E.ok ? w(null, T) : w(new Error(`${E.status} ${E.statusText}: ${T}`));
    } catch (_) {
      _ instanceof Error && w(_);
    } finally {
    }
  }, {});
}
function kp(n) {
  return (e, t) => new Promise((r, o) => {
    n.request(e, t, (i, c) => {
      if (i) {
        o(i);
        return;
      }
      r(c);
    });
  });
}
function Op(n) {
  return (e) => new Promise((t, r) => {
    e.length === 0 && t([]);
    const o = e.map((i) => n.request(i.methodName, i.args));
    n.request(o, (i, c) => {
      if (i) {
        r(i);
        return;
      }
      t(c);
    });
  });
}
const Lp = _e(xp), Up = _e(Sp), Dp = _e(Bp), Pp = _e(Mp), Fp = _e(G()), zp = It(X({
  total: G(),
  circulating: G(),
  nonCirculating: G(),
  nonCirculatingAccounts: ce(xt)
})), Bs = X({
  amount: te(),
  uiAmount: de(G()),
  decimals: G(),
  uiAmountString: Ee(te())
}), Hp = It(ce(X({
  address: xt,
  amount: te(),
  uiAmount: de(G()),
  decimals: G(),
  uiAmountString: Ee(te())
}))), Wp = It(ce(X({
  pubkey: xt,
  account: X({
    executable: xn(),
    owner: xt,
    lamports: G(),
    data: la,
    rentEpoch: G()
  })
}))), Ms = X({
  program: te(),
  parsed: $r(),
  space: G()
}), Gp = It(ce(X({
  pubkey: xt,
  account: X({
    executable: xn(),
    owner: xt,
    lamports: G(),
    data: Ms,
    rentEpoch: G()
  })
}))), jp = It(ce(X({
  lamports: G(),
  address: xt
}))), zr = X({
  executable: xn(),
  owner: xt,
  lamports: G(),
  data: la,
  rentEpoch: G()
}), Qp = X({
  pubkey: xt,
  account: zr
}), qp = ei(Wt([ea(Ae.Buffer), Ms]), Wt([Xu, Ms]), (n) => Array.isArray(n) ? re(n, la) : n), $u = X({
  executable: xn(),
  owner: xt,
  lamports: G(),
  data: qp,
  rentEpoch: G()
}), Yp = X({
  pubkey: xt,
  account: $u
}), Kp = X({
  state: Wt([Je("active"), Je("inactive"), Je("activating"), Je("deactivating")]),
  active: G(),
  inactive: G()
}), Vp = _e(ce(X({
  signature: te(),
  slot: G(),
  err: rr,
  memo: de(te()),
  blockTime: Ee(de(G()))
}))), Zp = _e(ce(X({
  signature: te(),
  slot: G(),
  err: rr,
  memo: de(te()),
  blockTime: Ee(de(G()))
}))), Xp = X({
  subscription: G(),
  result: Ji(zr)
}), Jp = X({
  pubkey: xt,
  account: zr
}), $p = X({
  subscription: G(),
  result: Ji(Jp)
}), eg = X({
  parent: G(),
  slot: G(),
  root: G()
}), tg = X({
  subscription: G(),
  result: eg
}), ng = Wt([X({
  type: Wt([Je("firstShredReceived"), Je("completed"), Je("optimisticConfirmation"), Je("root")]),
  slot: G(),
  timestamp: G()
}), X({
  type: Je("createdBank"),
  parent: G(),
  slot: G(),
  timestamp: G()
}), X({
  type: Je("frozen"),
  slot: G(),
  timestamp: G(),
  stats: X({
    numTransactionEntries: G(),
    numSuccessfulTransactions: G(),
    numFailedTransactions: G(),
    maxTransactionsPerEntry: G()
  })
}), X({
  type: Je("dead"),
  slot: G(),
  timestamp: G(),
  err: te()
})]), rg = X({
  subscription: G(),
  result: ng
}), ig = X({
  subscription: G(),
  result: Ji(Wt([_p, Cp]))
}), og = X({
  subscription: G(),
  result: G()
}), sg = X({
  pubkey: te(),
  gossip: de(te()),
  tpu: de(te()),
  rpc: de(te()),
  version: de(te())
}), Sc = X({
  votePubkey: te(),
  nodePubkey: te(),
  activatedStake: G(),
  epochVoteAccount: xn(),
  epochCredits: ce(ta([G(), G(), G()])),
  commission: G(),
  lastVote: G(),
  rootSlot: de(G())
}), ag = _e(X({
  current: ce(Sc),
  delinquent: ce(Sc)
})), cg = Wt([Je("processed"), Je("confirmed"), Je("finalized")]), ug = X({
  slot: G(),
  confirmations: de(G()),
  err: rr,
  confirmationStatus: Ee(cg)
}), lg = It(ce(de(ug))), fg = _e(G()), el = X({
  accountKey: xt,
  writableIndexes: ce(G()),
  readonlyIndexes: ce(G())
}), fa = X({
  signatures: ce(te()),
  message: X({
    accountKeys: ce(te()),
    header: X({
      numRequiredSignatures: G(),
      numReadonlySignedAccounts: G(),
      numReadonlyUnsignedAccounts: G()
    }),
    instructions: ce(X({
      accounts: ce(G()),
      data: te(),
      programIdIndex: G()
    })),
    recentBlockhash: te(),
    addressTableLookups: Ee(ce(el))
  })
}), tl = X({
  parsed: $r(),
  program: te(),
  programId: xt
}), nl = X({
  accounts: ce(xt),
  data: te(),
  programId: xt
}), hg = Wt([nl, tl]), dg = Wt([X({
  parsed: $r(),
  program: te(),
  programId: te()
}), X({
  accounts: ce(te()),
  data: te(),
  programId: te()
})]), rl = ei(hg, dg, (n) => "accounts" in n ? re(n, nl) : re(n, tl)), pg = X({
  signatures: ce(te()),
  message: X({
    accountKeys: ce(X({
      pubkey: xt,
      signer: xn(),
      writable: xn(),
      source: Ee(Wt([Je("transaction"), Je("lookupTable")]))
    })),
    instructions: ce(rl),
    recentBlockhash: te(),
    addressTableLookups: Ee(de(ce(el)))
  })
}), Li = X({
  accountIndex: G(),
  mint: te(),
  owner: Ee(te()),
  uiTokenAmount: Bs
}), il = X({
  writable: ce(xt),
  readonly: ce(xt)
}), ha = X({
  err: rr,
  fee: G(),
  innerInstructions: Ee(de(ce(X({
    index: G(),
    instructions: ce(X({
      accounts: ce(G()),
      data: te(),
      programIdIndex: G()
    }))
  })))),
  preBalances: ce(G()),
  postBalances: ce(G()),
  logMessages: Ee(de(ce(te()))),
  preTokenBalances: Ee(de(ce(Li))),
  postTokenBalances: Ee(de(ce(Li))),
  loadedAddresses: Ee(il),
  computeUnitsConsumed: Ee(G())
}), gg = X({
  err: rr,
  fee: G(),
  innerInstructions: Ee(de(ce(X({
    index: G(),
    instructions: ce(rl)
  })))),
  preBalances: ce(G()),
  postBalances: ce(G()),
  logMessages: Ee(de(ce(te()))),
  preTokenBalances: Ee(de(ce(Li))),
  postTokenBalances: Ee(de(ce(Li))),
  loadedAddresses: Ee(il),
  computeUnitsConsumed: Ee(G())
}), da = Wt([Je(0), Je("legacy")]), yg = _e(de(X({
  blockhash: te(),
  previousBlockhash: te(),
  parentSlot: G(),
  transactions: ce(X({
    transaction: fa,
    meta: de(ha),
    version: Ee(da)
  })),
  rewards: Ee(ce(X({
    pubkey: te(),
    lamports: G(),
    postBalance: de(G()),
    rewardType: de(te())
  }))),
  blockTime: de(G()),
  blockHeight: de(G())
}))), wg = _e(de(X({
  blockhash: te(),
  previousBlockhash: te(),
  parentSlot: G(),
  transactions: ce(X({
    transaction: fa,
    meta: de(ha)
  })),
  rewards: Ee(ce(X({
    pubkey: te(),
    lamports: G(),
    postBalance: de(G()),
    rewardType: de(te())
  }))),
  blockTime: de(G())
}))), Bc = _e(de(X({
  blockhash: te(),
  previousBlockhash: te(),
  parentSlot: G(),
  signatures: ce(te()),
  blockTime: de(G())
}))), as = _e(de(X({
  slot: G(),
  meta: ha,
  blockTime: Ee(de(G())),
  transaction: fa,
  version: Ee(da)
}))), li = _e(de(X({
  slot: G(),
  transaction: pg,
  meta: de(gg),
  blockTime: Ee(de(G())),
  version: Ee(da)
}))), mg = It(X({
  blockhash: te(),
  feeCalculator: X({
    lamportsPerSignature: G()
  })
})), bg = It(X({
  blockhash: te(),
  lastValidBlockHeight: G()
})), Ag = X({
  slot: G(),
  numTransactions: G(),
  numSlots: G(),
  samplePeriodSecs: G()
}), vg = _e(ce(Ag)), Eg = It(de(X({
  feeCalculator: X({
    lamportsPerSignature: G()
  })
}))), xg = _e(te()), Ig = _e(te()), Sg = X({
  err: rr,
  logs: ce(te()),
  signature: te()
}), Bg = X({
  result: Ji(Sg),
  subscription: G()
}), Mg = {
  "solana-client": `js/${(os = "0.0.0-development") !== null && os !== void 0 ? os : "UNKNOWN"}`
};
class _g {
  constructor(e, t) {
    this._commitment = void 0, this._confirmTransactionInitialTimeout = void 0, this._rpcEndpoint = void 0, this._rpcWsEndpoint = void 0, this._rpcClient = void 0, this._rpcRequest = void 0, this._rpcBatchRequest = void 0, this._rpcWebSocket = void 0, this._rpcWebSocketConnected = !1, this._rpcWebSocketHeartbeat = null, this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketGeneration = 0, this._disableBlockhashCaching = !1, this._pollingBlockhash = !1, this._blockhashInfo = {
      latestBlockhash: null,
      lastFetch: 0,
      transactionSignatures: [],
      simulatedSignatures: []
    }, this._nextClientSubscriptionId = 0, this._subscriptionDisposeFunctionsByClientSubscriptionId = {}, this._subscriptionCallbacksByServerSubscriptionId = {}, this._subscriptionsByHash = {}, this._subscriptionsAutoDisposedByRpc = /* @__PURE__ */ new Set();
    let r, o, i, c, u;
    t && typeof t == "string" ? this._commitment = t : t && (this._commitment = t.commitment, this._confirmTransactionInitialTimeout = t.confirmTransactionInitialTimeout, r = t.wsEndpoint, o = t.httpHeaders, i = t.fetch, c = t.fetchMiddleware, u = t.disableRetryOnRateLimit), this._rpcEndpoint = vp(e), this._rpcWsEndpoint = r || bp(e), this._rpcClient = Rp(e, o, i, c, u), this._rpcRequest = kp(this._rpcClient), this._rpcBatchRequest = Op(this._rpcClient), this._rpcWebSocket = new Lu(this._rpcWsEndpoint, {
      autoconnect: !1,
      max_reconnects: 1 / 0
    }), this._rpcWebSocket.on("open", this._wsOnOpen.bind(this)), this._rpcWebSocket.on("error", this._wsOnError.bind(this)), this._rpcWebSocket.on("close", this._wsOnClose.bind(this)), this._rpcWebSocket.on("accountNotification", this._wsOnAccountNotification.bind(this)), this._rpcWebSocket.on("programNotification", this._wsOnProgramAccountNotification.bind(this)), this._rpcWebSocket.on("slotNotification", this._wsOnSlotNotification.bind(this)), this._rpcWebSocket.on("slotsUpdatesNotification", this._wsOnSlotUpdatesNotification.bind(this)), this._rpcWebSocket.on("signatureNotification", this._wsOnSignatureNotification.bind(this)), this._rpcWebSocket.on("rootNotification", this._wsOnRootNotification.bind(this)), this._rpcWebSocket.on("logsNotification", this._wsOnLogsNotification.bind(this));
  }
  get commitment() {
    return this._commitment;
  }
  get rpcEndpoint() {
    return this._rpcEndpoint;
  }
  async getBalanceAndContext(e, t) {
    const {
      commitment: r,
      config: o
    } = tt(t), i = this._buildArgs(
      [e.toBase58()],
      r,
      void 0,
      o
    ), c = await this._rpcRequest("getBalance", i), u = re(c, It(G()));
    if ("error" in u)
      throw new he(u.error, `failed to get balance for ${e.toBase58()}`);
    return u.result;
  }
  async getBalance(e, t) {
    return await this.getBalanceAndContext(e, t).then((r) => r.value).catch((r) => {
      throw new Error("failed to get balance of account " + e.toBase58() + ": " + r);
    });
  }
  async getBlockTime(e) {
    const t = await this._rpcRequest("getBlockTime", [e]), r = re(t, _e(de(G())));
    if ("error" in r)
      throw new he(r.error, `failed to get block time for slot ${e}`);
    return r.result;
  }
  async getMinimumLedgerSlot() {
    const e = await this._rpcRequest("minimumLedgerSlot", []), t = re(e, _e(G()));
    if ("error" in t)
      throw new he(t.error, "failed to get minimum ledger slot");
    return t.result;
  }
  async getFirstAvailableBlock() {
    const e = await this._rpcRequest("getFirstAvailableBlock", []), t = re(e, Fp);
    if ("error" in t)
      throw new he(t.error, "failed to get first available block");
    return t.result;
  }
  async getSupply(e) {
    let t = {};
    typeof e == "string" ? t = {
      commitment: e
    } : e ? t = {
      ...e,
      commitment: e && e.commitment || this.commitment
    } : t = {
      commitment: this.commitment
    };
    const r = await this._rpcRequest("getSupply", [t]), o = re(r, zp);
    if ("error" in o)
      throw new he(o.error, "failed to get supply");
    return o.result;
  }
  async getTokenSupply(e, t) {
    const r = this._buildArgs([e.toBase58()], t), o = await this._rpcRequest("getTokenSupply", r), i = re(o, It(Bs));
    if ("error" in i)
      throw new he(i.error, "failed to get token supply");
    return i.result;
  }
  async getTokenAccountBalance(e, t) {
    const r = this._buildArgs([e.toBase58()], t), o = await this._rpcRequest("getTokenAccountBalance", r), i = re(o, It(Bs));
    if ("error" in i)
      throw new he(i.error, "failed to get token account balance");
    return i.result;
  }
  async getTokenAccountsByOwner(e, t, r) {
    const {
      commitment: o,
      config: i
    } = tt(r);
    let c = [e.toBase58()];
    "mint" in t ? c.push({
      mint: t.mint.toBase58()
    }) : c.push({
      programId: t.programId.toBase58()
    });
    const u = this._buildArgs(c, o, "base64", i), d = await this._rpcRequest("getTokenAccountsByOwner", u), w = re(d, Wp);
    if ("error" in w)
      throw new he(w.error, `failed to get token accounts owned by account ${e.toBase58()}`);
    return w.result;
  }
  async getParsedTokenAccountsByOwner(e, t, r) {
    let o = [e.toBase58()];
    "mint" in t ? o.push({
      mint: t.mint.toBase58()
    }) : o.push({
      programId: t.programId.toBase58()
    });
    const i = this._buildArgs(o, r, "jsonParsed"), c = await this._rpcRequest("getTokenAccountsByOwner", i), u = re(c, Gp);
    if ("error" in u)
      throw new he(u.error, `failed to get token accounts owned by account ${e.toBase58()}`);
    return u.result;
  }
  async getLargestAccounts(e) {
    const t = {
      ...e,
      commitment: e && e.commitment || this.commitment
    }, r = t.filter || t.commitment ? [t] : [], o = await this._rpcRequest("getLargestAccounts", r), i = re(o, jp);
    if ("error" in i)
      throw new he(i.error, "failed to get largest accounts");
    return i.result;
  }
  async getTokenLargestAccounts(e, t) {
    const r = this._buildArgs([e.toBase58()], t), o = await this._rpcRequest("getTokenLargestAccounts", r), i = re(o, Hp);
    if ("error" in i)
      throw new he(i.error, "failed to get token largest accounts");
    return i.result;
  }
  async getAccountInfoAndContext(e, t) {
    const {
      commitment: r,
      config: o
    } = tt(t), i = this._buildArgs([e.toBase58()], r, "base64", o), c = await this._rpcRequest("getAccountInfo", i), u = re(c, It(de(zr)));
    if ("error" in u)
      throw new he(u.error, `failed to get info about account ${e.toBase58()}`);
    return u.result;
  }
  async getParsedAccountInfo(e, t) {
    const {
      commitment: r,
      config: o
    } = tt(t), i = this._buildArgs([e.toBase58()], r, "jsonParsed", o), c = await this._rpcRequest("getAccountInfo", i), u = re(c, It(de($u)));
    if ("error" in u)
      throw new he(u.error, `failed to get info about account ${e.toBase58()}`);
    return u.result;
  }
  async getAccountInfo(e, t) {
    try {
      return (await this.getAccountInfoAndContext(e, t)).value;
    } catch (r) {
      throw new Error("failed to get info about account " + e.toBase58() + ": " + r);
    }
  }
  async getMultipleAccountsInfoAndContext(e, t) {
    const {
      commitment: r,
      config: o
    } = tt(t), i = e.map((w) => w.toBase58()), c = this._buildArgs([i], r, "base64", o), u = await this._rpcRequest("getMultipleAccounts", c), d = re(u, It(ce(de(zr))));
    if ("error" in d)
      throw new he(d.error, `failed to get info for accounts ${i}`);
    return d.result;
  }
  async getMultipleAccountsInfo(e, t) {
    return (await this.getMultipleAccountsInfoAndContext(e, t)).value;
  }
  async getStakeActivation(e, t, r) {
    const {
      commitment: o,
      config: i
    } = tt(t), c = this._buildArgs(
      [e.toBase58()],
      o,
      void 0,
      {
        ...i,
        epoch: r != null ? r : i == null ? void 0 : i.epoch
      }
    ), u = await this._rpcRequest("getStakeActivation", c), d = re(u, _e(Kp));
    if ("error" in d)
      throw new he(d.error, `failed to get Stake Activation ${e.toBase58()}`);
    return d.result;
  }
  async getProgramAccounts(e, t) {
    const {
      commitment: r,
      config: o
    } = tt(t), {
      encoding: i,
      ...c
    } = o || {}, u = this._buildArgs([e.toBase58()], r, i || "base64", c), d = await this._rpcRequest("getProgramAccounts", u), w = re(d, _e(ce(Qp)));
    if ("error" in w)
      throw new he(w.error, `failed to get accounts owned by program ${e.toBase58()}`);
    return w.result;
  }
  async getParsedProgramAccounts(e, t) {
    const {
      commitment: r,
      config: o
    } = tt(t), i = this._buildArgs([e.toBase58()], r, "jsonParsed", o), c = await this._rpcRequest("getProgramAccounts", i), u = re(c, _e(ce(Yp)));
    if ("error" in u)
      throw new he(u.error, `failed to get accounts owned by program ${e.toBase58()}`);
    return u.result;
  }
  async confirmTransaction(e, t) {
    let r;
    typeof e == "string" ? r = e : r = e.signature;
    let o;
    try {
      o = Ct.decode(r);
    } catch {
      throw new Error("signature must be base58 encoded: " + r);
    }
    vt(o.length === 64, "signature has invalid length");
    const i = t || this.commitment;
    let c, u, d = !1;
    const w = new Promise((_, E) => {
      try {
        u = this.onSignature(r, (N, T) => {
          u = void 0;
          const U = {
            context: T,
            value: N
          };
          d = !0, _({
            __type: Tn.PROCESSED,
            response: U
          });
        }, i);
      } catch (N) {
        E(N);
      }
    }), v = new Promise((_) => {
      if (typeof e == "string") {
        let E = this._confirmTransactionInitialTimeout || 6e4;
        switch (i) {
          case "processed":
          case "recent":
          case "single":
          case "confirmed":
          case "singleGossip": {
            E = this._confirmTransactionInitialTimeout || 30 * 1e3;
            break;
          }
        }
        c = setTimeout(() => _({
          __type: Tn.TIMED_OUT,
          timeoutMs: E
        }), E);
      } else {
        let E = e;
        const N = async () => {
          try {
            return await this.getBlockHeight(t);
          } catch {
            return -1;
          }
        };
        (async () => {
          let T = await N();
          if (!d) {
            for (; T <= E.lastValidBlockHeight; )
              if (await pi(1e3), d || (T = await N(), d))
                return;
            _({
              __type: Tn.BLOCKHEIGHT_EXCEEDED
            });
          }
        })();
      }
    });
    let I;
    try {
      const _ = await Promise.race([w, v]);
      switch (_.__type) {
        case Tn.BLOCKHEIGHT_EXCEEDED:
          throw new Ku(r);
        case Tn.PROCESSED:
          I = _.response;
          break;
        case Tn.TIMED_OUT:
          throw new Vu(r, _.timeoutMs / 1e3);
      }
    } finally {
      clearTimeout(c), u && this.removeSignatureListener(u);
    }
    return I;
  }
  async getClusterNodes() {
    const e = await this._rpcRequest("getClusterNodes", []), t = re(e, _e(ce(sg)));
    if ("error" in t)
      throw new he(t.error, "failed to get cluster nodes");
    return t.result;
  }
  async getVoteAccounts(e) {
    const t = this._buildArgs([], e), r = await this._rpcRequest("getVoteAccounts", t), o = re(r, ag);
    if ("error" in o)
      throw new he(o.error, "failed to get vote accounts");
    return o.result;
  }
  async getSlot(e) {
    const {
      commitment: t,
      config: r
    } = tt(e), o = this._buildArgs(
      [],
      t,
      void 0,
      r
    ), i = await this._rpcRequest("getSlot", o), c = re(i, _e(G()));
    if ("error" in c)
      throw new he(c.error, "failed to get slot");
    return c.result;
  }
  async getSlotLeader(e) {
    const {
      commitment: t,
      config: r
    } = tt(e), o = this._buildArgs(
      [],
      t,
      void 0,
      r
    ), i = await this._rpcRequest("getSlotLeader", o), c = re(i, _e(te()));
    if ("error" in c)
      throw new he(c.error, "failed to get slot leader");
    return c.result;
  }
  async getSlotLeaders(e, t) {
    const r = [e, t], o = await this._rpcRequest("getSlotLeaders", r), i = re(o, _e(ce(xt)));
    if ("error" in i)
      throw new he(i.error, "failed to get slot leaders");
    return i.result;
  }
  async getSignatureStatus(e, t) {
    const {
      context: r,
      value: o
    } = await this.getSignatureStatuses([e], t);
    vt(o.length === 1);
    const i = o[0];
    return {
      context: r,
      value: i
    };
  }
  async getSignatureStatuses(e, t) {
    const r = [e];
    t && r.push(t);
    const o = await this._rpcRequest("getSignatureStatuses", r), i = re(o, lg);
    if ("error" in i)
      throw new he(i.error, "failed to get signature status");
    return i.result;
  }
  async getTransactionCount(e) {
    const {
      commitment: t,
      config: r
    } = tt(e), o = this._buildArgs(
      [],
      t,
      void 0,
      r
    ), i = await this._rpcRequest("getTransactionCount", o), c = re(i, _e(G()));
    if ("error" in c)
      throw new he(c.error, "failed to get transaction count");
    return c.result;
  }
  async getTotalSupply(e) {
    return (await this.getSupply({
      commitment: e,
      excludeNonCirculatingAccountsList: !0
    })).value.total;
  }
  async getInflationGovernor(e) {
    const t = this._buildArgs([], e), r = await this._rpcRequest("getInflationGovernor", t), o = re(r, Lp);
    if ("error" in o)
      throw new he(o.error, "failed to get inflation");
    return o.result;
  }
  async getInflationReward(e, t, r) {
    const {
      commitment: o,
      config: i
    } = tt(r), c = this._buildArgs(
      [e.map((w) => w.toBase58())],
      o,
      void 0,
      {
        ...i,
        epoch: t != null ? t : i == null ? void 0 : i.epoch
      }
    ), u = await this._rpcRequest("getInflationReward", c), d = re(u, Ip);
    if ("error" in d)
      throw new he(d.error, "failed to get inflation reward");
    return d.result;
  }
  async getEpochInfo(e) {
    const {
      commitment: t,
      config: r
    } = tt(e), o = this._buildArgs(
      [],
      t,
      void 0,
      r
    ), i = await this._rpcRequest("getEpochInfo", o), c = re(i, Up);
    if ("error" in c)
      throw new he(c.error, "failed to get epoch info");
    return c.result;
  }
  async getEpochSchedule() {
    const e = await this._rpcRequest("getEpochSchedule", []), t = re(e, Dp);
    if ("error" in t)
      throw new he(t.error, "failed to get epoch schedule");
    const r = t.result;
    return new lp(r.slotsPerEpoch, r.leaderScheduleSlotOffset, r.warmup, r.firstNormalEpoch, r.firstNormalSlot);
  }
  async getLeaderSchedule() {
    const e = await this._rpcRequest("getLeaderSchedule", []), t = re(e, Pp);
    if ("error" in t)
      throw new he(t.error, "failed to get leader schedule");
    return t.result;
  }
  async getMinimumBalanceForRentExemption(e, t) {
    const r = this._buildArgs([e], t), o = await this._rpcRequest("getMinimumBalanceForRentExemption", r), i = re(o, fg);
    return "error" in i ? (console.warn("Unable to fetch minimum balance for rent exemption"), 0) : i.result;
  }
  async getRecentBlockhashAndContext(e) {
    const t = this._buildArgs([], e), r = await this._rpcRequest("getRecentBlockhash", t), o = re(r, mg);
    if ("error" in o)
      throw new he(o.error, "failed to get recent blockhash");
    return o.result;
  }
  async getRecentPerformanceSamples(e) {
    const t = await this._rpcRequest("getRecentPerformanceSamples", e ? [e] : []), r = re(t, vg);
    if ("error" in r)
      throw new he(r.error, "failed to get recent performance samples");
    return r.result;
  }
  async getFeeCalculatorForBlockhash(e, t) {
    const r = this._buildArgs([e], t), o = await this._rpcRequest("getFeeCalculatorForBlockhash", r), i = re(o, Eg);
    if ("error" in i)
      throw new he(i.error, "failed to get fee calculator");
    const {
      context: c,
      value: u
    } = i.result;
    return {
      context: c,
      value: u !== null ? u.feeCalculator : null
    };
  }
  async getFeeForMessage(e, t) {
    const r = e.serialize().toString("base64"), o = this._buildArgs([r], t), i = await this._rpcRequest("getFeeForMessage", o), c = re(i, It(de(G())));
    if ("error" in c)
      throw new he(c.error, "failed to get slot");
    if (c.result === null)
      throw new Error("invalid blockhash");
    return c.result;
  }
  async getRecentBlockhash(e) {
    try {
      return (await this.getRecentBlockhashAndContext(e)).value;
    } catch (t) {
      throw new Error("failed to get recent blockhash: " + t);
    }
  }
  async getLatestBlockhash(e) {
    try {
      return (await this.getLatestBlockhashAndContext(e)).value;
    } catch (t) {
      throw new Error("failed to get recent blockhash: " + t);
    }
  }
  async getLatestBlockhashAndContext(e) {
    const {
      commitment: t,
      config: r
    } = tt(e), o = this._buildArgs(
      [],
      t,
      void 0,
      r
    ), i = await this._rpcRequest("getLatestBlockhash", o), c = re(i, bg);
    if ("error" in c)
      throw new he(c.error, "failed to get latest blockhash");
    return c.result;
  }
  async getVersion() {
    const e = await this._rpcRequest("getVersion", []), t = re(e, _e(Tp));
    if ("error" in t)
      throw new he(t.error, "failed to get version");
    return t.result;
  }
  async getGenesisHash() {
    const e = await this._rpcRequest("getGenesisHash", []), t = re(e, _e(te()));
    if ("error" in t)
      throw new he(t.error, "failed to get genesis hash");
    return t.result;
  }
  async getBlock(e, t) {
    const {
      commitment: r,
      config: o
    } = tt(t), i = this._buildArgsAtLeastConfirmed(
      [e],
      r,
      void 0,
      o
    ), c = await this._rpcRequest("getBlock", i), u = re(c, yg);
    if ("error" in u)
      throw new he(u.error, "failed to get confirmed block");
    const d = u.result;
    return d && {
      ...d,
      transactions: d.transactions.map(({
        transaction: w,
        meta: v,
        version: I
      }) => ({
        meta: v,
        transaction: {
          ...w,
          message: ss(I, w.message)
        },
        version: I
      }))
    };
  }
  async getBlockHeight(e) {
    const {
      commitment: t,
      config: r
    } = tt(e), o = this._buildArgs(
      [],
      t,
      void 0,
      r
    ), i = await this._rpcRequest("getBlockHeight", o), c = re(i, _e(G()));
    if ("error" in c)
      throw new he(c.error, "failed to get block height information");
    return c.result;
  }
  async getBlockProduction(e) {
    let t, r;
    if (typeof e == "string")
      r = e;
    else if (e) {
      const {
        commitment: u,
        ...d
      } = e;
      r = u, t = d;
    }
    const o = this._buildArgs([], r, "base64", t), i = await this._rpcRequest("getBlockProduction", o), c = re(i, Np);
    if ("error" in c)
      throw new he(c.error, "failed to get block production information");
    return c.result;
  }
  async getTransaction(e, t) {
    const {
      commitment: r,
      config: o
    } = tt(t), i = this._buildArgsAtLeastConfirmed(
      [e],
      r,
      void 0,
      o
    ), c = await this._rpcRequest("getTransaction", i), u = re(c, as);
    if ("error" in u)
      throw new he(u.error, "failed to get transaction");
    const d = u.result;
    return d && {
      ...d,
      transaction: {
        ...d.transaction,
        message: ss(d.version, d.transaction.message)
      }
    };
  }
  async getParsedTransaction(e, t) {
    const {
      commitment: r,
      config: o
    } = tt(t), i = this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", o), c = await this._rpcRequest("getTransaction", i), u = re(c, li);
    if ("error" in u)
      throw new he(u.error, "failed to get transaction");
    return u.result;
  }
  async getParsedTransactions(e, t) {
    const {
      commitment: r,
      config: o
    } = tt(t), i = e.map((d) => {
      const w = this._buildArgsAtLeastConfirmed([d], r, "jsonParsed", o);
      return {
        methodName: "getTransaction",
        args: w
      };
    });
    return (await this._rpcBatchRequest(i)).map((d) => {
      const w = re(d, li);
      if ("error" in w)
        throw new he(w.error, "failed to get transactions");
      return w.result;
    });
  }
  async getTransactions(e, t) {
    const {
      commitment: r,
      config: o
    } = tt(t), i = e.map((d) => {
      const w = this._buildArgsAtLeastConfirmed(
        [d],
        r,
        void 0,
        o
      );
      return {
        methodName: "getTransaction",
        args: w
      };
    });
    return (await this._rpcBatchRequest(i)).map((d) => {
      const w = re(d, as);
      if ("error" in w)
        throw new he(w.error, "failed to get transactions");
      const v = w.result;
      return v && {
        ...v,
        transaction: {
          ...v.transaction,
          message: ss(v.version, v.transaction.message)
        }
      };
    });
  }
  async getConfirmedBlock(e, t) {
    const r = this._buildArgsAtLeastConfirmed([e], t), o = await this._rpcRequest("getConfirmedBlock", r), i = re(o, wg);
    if ("error" in i)
      throw new he(i.error, "failed to get confirmed block");
    const c = i.result;
    if (!c)
      throw new Error("Confirmed block " + e + " not found");
    const u = {
      ...c,
      transactions: c.transactions.map(({
        transaction: d,
        meta: w
      }) => {
        const v = new Pn(d.message);
        return {
          meta: w,
          transaction: {
            ...d,
            message: v
          }
        };
      })
    };
    return {
      ...u,
      transactions: u.transactions.map(({
        transaction: d,
        meta: w
      }) => ({
        meta: w,
        transaction: Nn.populate(d.message, d.signatures)
      }))
    };
  }
  async getBlocks(e, t, r) {
    const o = this._buildArgsAtLeastConfirmed(t !== void 0 ? [e, t] : [e], r), i = await this._rpcRequest("getBlocks", o), c = re(i, _e(ce(G())));
    if ("error" in c)
      throw new he(c.error, "failed to get blocks");
    return c.result;
  }
  async getBlockSignatures(e, t) {
    const r = this._buildArgsAtLeastConfirmed([e], t, void 0, {
      transactionDetails: "signatures",
      rewards: !1
    }), o = await this._rpcRequest("getBlock", r), i = re(o, Bc);
    if ("error" in i)
      throw new he(i.error, "failed to get block");
    const c = i.result;
    if (!c)
      throw new Error("Block " + e + " not found");
    return c;
  }
  async getConfirmedBlockSignatures(e, t) {
    const r = this._buildArgsAtLeastConfirmed([e], t, void 0, {
      transactionDetails: "signatures",
      rewards: !1
    }), o = await this._rpcRequest("getConfirmedBlock", r), i = re(o, Bc);
    if ("error" in i)
      throw new he(i.error, "failed to get confirmed block");
    const c = i.result;
    if (!c)
      throw new Error("Confirmed block " + e + " not found");
    return c;
  }
  async getConfirmedTransaction(e, t) {
    const r = this._buildArgsAtLeastConfirmed([e], t), o = await this._rpcRequest("getConfirmedTransaction", r), i = re(o, as);
    if ("error" in i)
      throw new he(i.error, "failed to get transaction");
    const c = i.result;
    if (!c)
      return c;
    const u = new Pn(c.transaction.message), d = c.transaction.signatures;
    return {
      ...c,
      transaction: Nn.populate(u, d)
    };
  }
  async getParsedConfirmedTransaction(e, t) {
    const r = this._buildArgsAtLeastConfirmed([e], t, "jsonParsed"), o = await this._rpcRequest("getConfirmedTransaction", r), i = re(o, li);
    if ("error" in i)
      throw new he(i.error, "failed to get confirmed transaction");
    return i.result;
  }
  async getParsedConfirmedTransactions(e, t) {
    const r = e.map((c) => {
      const u = this._buildArgsAtLeastConfirmed([c], t, "jsonParsed");
      return {
        methodName: "getConfirmedTransaction",
        args: u
      };
    });
    return (await this._rpcBatchRequest(r)).map((c) => {
      const u = re(c, li);
      if ("error" in u)
        throw new he(u.error, "failed to get confirmed transactions");
      return u.result;
    });
  }
  async getConfirmedSignaturesForAddress(e, t, r) {
    let o = {}, i = await this.getFirstAvailableBlock();
    for (; !("until" in o) && (t--, !(t <= 0 || t < i)); )
      try {
        const d = await this.getConfirmedBlockSignatures(t, "finalized");
        d.signatures.length > 0 && (o.until = d.signatures[d.signatures.length - 1].toString());
      } catch (d) {
        if (d instanceof Error && d.message.includes("skipped"))
          continue;
        throw d;
      }
    let c = await this.getSlot("finalized");
    for (; !("before" in o) && (r++, !(r > c)); )
      try {
        const d = await this.getConfirmedBlockSignatures(r);
        d.signatures.length > 0 && (o.before = d.signatures[d.signatures.length - 1].toString());
      } catch (d) {
        if (d instanceof Error && d.message.includes("skipped"))
          continue;
        throw d;
      }
    return (await this.getConfirmedSignaturesForAddress2(e, o)).map((d) => d.signature);
  }
  async getConfirmedSignaturesForAddress2(e, t, r) {
    const o = this._buildArgsAtLeastConfirmed([e.toBase58()], r, void 0, t), i = await this._rpcRequest("getConfirmedSignaturesForAddress2", o), c = re(i, Vp);
    if ("error" in c)
      throw new he(c.error, "failed to get confirmed signatures for address");
    return c.result;
  }
  async getSignaturesForAddress(e, t, r) {
    const o = this._buildArgsAtLeastConfirmed([e.toBase58()], r, void 0, t), i = await this._rpcRequest("getSignaturesForAddress", o), c = re(i, Zp);
    if ("error" in c)
      throw new he(c.error, "failed to get signatures for address");
    return c.result;
  }
  async getAddressLookupTable(e, t) {
    const {
      context: r,
      value: o
    } = await this.getAccountInfoAndContext(e, t);
    let i = null;
    return o !== null && (i = new xc({
      key: e,
      state: xc.deserialize(o.data)
    })), {
      context: r,
      value: i
    };
  }
  async getNonceAndContext(e, t) {
    const {
      context: r,
      value: o
    } = await this.getAccountInfoAndContext(e, t);
    let i = null;
    return o !== null && (i = ua.fromAccountData(o.data)), {
      context: r,
      value: i
    };
  }
  async getNonce(e, t) {
    return await this.getNonceAndContext(e, t).then((r) => r.value).catch((r) => {
      throw new Error("failed to get nonce for account " + e.toBase58() + ": " + r);
    });
  }
  async requestAirdrop(e, t) {
    const r = await this._rpcRequest("requestAirdrop", [e.toBase58(), t]), o = re(r, xg);
    if ("error" in o)
      throw new he(o.error, `airdrop to ${e.toBase58()} failed`);
    return o.result;
  }
  async _blockhashWithExpiryBlockHeight(e) {
    if (!e) {
      for (; this._pollingBlockhash; )
        await pi(100);
      const r = Date.now() - this._blockhashInfo.lastFetch >= Ap;
      if (this._blockhashInfo.latestBlockhash !== null && !r)
        return this._blockhashInfo.latestBlockhash;
    }
    return await this._pollNewBlockhash();
  }
  async _pollNewBlockhash() {
    this._pollingBlockhash = !0;
    try {
      const e = Date.now(), t = this._blockhashInfo.latestBlockhash, r = t ? t.blockhash : null;
      for (let o = 0; o < 50; o++) {
        const i = await this.getLatestBlockhash("finalized");
        if (r !== i.blockhash)
          return this._blockhashInfo = {
            latestBlockhash: i,
            lastFetch: Date.now(),
            transactionSignatures: [],
            simulatedSignatures: []
          }, i;
        await pi(gp / 2);
      }
      throw new Error(`Unable to obtain a new blockhash after ${Date.now() - e}ms`);
    } finally {
      this._pollingBlockhash = !1;
    }
  }
  async getStakeMinimumDelegation(e) {
    const {
      commitment: t,
      config: r
    } = tt(e), o = this._buildArgs([], t, "base64", r), i = await this._rpcRequest("getStakeMinimumDelegation", o), c = re(i, It(G()));
    if ("error" in c)
      throw new he(c.error, "failed to get stake minimum delegation");
    return c.result;
  }
  async simulateTransaction(e, t, r) {
    if ("message" in e) {
      const T = e.serialize(), U = Ae.Buffer.from(T).toString("base64");
      if (Array.isArray(t) || r !== void 0)
        throw new Error("Invalid arguments");
      const P = t || {};
      P.encoding = "base64", "commitment" in P || (P.commitment = this.commitment);
      const F = [U, P], O = await this._rpcRequest("simulateTransaction", F), z = re(O, Ic);
      if ("error" in z)
        throw new Error("failed to simulate transaction: " + z.error.message);
      return z.result;
    }
    let o;
    if (e instanceof Nn) {
      let N = e;
      o = new Nn(), o.feePayer = N.feePayer, o.instructions = e.instructions, o.nonceInfo = N.nonceInfo, o.signatures = N.signatures;
    } else
      o = Nn.populate(e), o._message = o._json = void 0;
    if (t !== void 0 && !Array.isArray(t))
      throw new Error("Invalid arguments");
    const i = t;
    if (o.nonceInfo && i)
      o.sign(...i);
    else {
      let N = this._disableBlockhashCaching;
      for (; ; ) {
        const T = await this._blockhashWithExpiryBlockHeight(N);
        if (o.lastValidBlockHeight = T.lastValidBlockHeight, o.recentBlockhash = T.blockhash, !i)
          break;
        if (o.sign(...i), !o.signature)
          throw new Error("!signature");
        const U = o.signature.toString("base64");
        if (!this._blockhashInfo.simulatedSignatures.includes(U) && !this._blockhashInfo.transactionSignatures.includes(U)) {
          this._blockhashInfo.simulatedSignatures.push(U);
          break;
        } else
          N = !0;
      }
    }
    const c = o._compile(), u = c.serialize(), w = o._serialize(u).toString("base64"), v = {
      encoding: "base64",
      commitment: this.commitment
    };
    if (r) {
      const N = (Array.isArray(r) ? r : c.nonProgramIds()).map((T) => T.toBase58());
      v.accounts = {
        encoding: "base64",
        addresses: N
      };
    }
    i && (v.sigVerify = !0);
    const I = [w, v], _ = await this._rpcRequest("simulateTransaction", I), E = re(_, Ic);
    if ("error" in E) {
      let N;
      if ("data" in E.error && (N = E.error.data.logs, N && Array.isArray(N))) {
        const T = `
    `, U = T + N.join(T);
        console.error(E.error.message, U);
      }
      throw new vc("failed to simulate transaction: " + E.error.message, N);
    }
    return E.result;
  }
  async sendTransaction(e, t, r) {
    if ("version" in e) {
      if (t && Array.isArray(t))
        throw new Error("Invalid arguments");
      const c = e.serialize();
      return await this.sendRawTransaction(c, r);
    }
    if (t === void 0 || !Array.isArray(t))
      throw new Error("Invalid arguments");
    const o = t;
    if (e.nonceInfo)
      e.sign(...o);
    else {
      let c = this._disableBlockhashCaching;
      for (; ; ) {
        const u = await this._blockhashWithExpiryBlockHeight(c);
        if (e.lastValidBlockHeight = u.lastValidBlockHeight, e.recentBlockhash = u.blockhash, e.sign(...o), !e.signature)
          throw new Error("!signature");
        const d = e.signature.toString("base64");
        if (this._blockhashInfo.transactionSignatures.includes(d))
          c = !0;
        else {
          this._blockhashInfo.transactionSignatures.push(d);
          break;
        }
      }
    }
    const i = e.serialize();
    return await this.sendRawTransaction(i, r);
  }
  async sendRawTransaction(e, t) {
    const r = ti(e).toString("base64");
    return await this.sendEncodedTransaction(r, t);
  }
  async sendEncodedTransaction(e, t) {
    const r = {
      encoding: "base64"
    }, o = t && t.skipPreflight, i = t && t.preflightCommitment || this.commitment;
    t && t.maxRetries != null && (r.maxRetries = t.maxRetries), t && t.minContextSlot != null && (r.minContextSlot = t.minContextSlot), o && (r.skipPreflight = o), i && (r.preflightCommitment = i);
    const c = [e, r], u = await this._rpcRequest("sendTransaction", c), d = re(u, Ig);
    if ("error" in d) {
      let w;
      throw "data" in d.error && (w = d.error.data.logs), new vc("failed to send transaction: " + d.error.message, w);
    }
    return d.result;
  }
  _wsOnOpen() {
    this._rpcWebSocketConnected = !0, this._rpcWebSocketHeartbeat = setInterval(() => {
      this._rpcWebSocket.notify("ping").catch(() => {
      });
    }, 5e3), this._updateSubscriptions();
  }
  _wsOnError(e) {
    this._rpcWebSocketConnected = !1, console.error("ws error:", e.message);
  }
  _wsOnClose(e) {
    if (this._rpcWebSocketConnected = !1, this._rpcWebSocketGeneration++, this._rpcWebSocketIdleTimeout && (clearTimeout(this._rpcWebSocketIdleTimeout), this._rpcWebSocketIdleTimeout = null), this._rpcWebSocketHeartbeat && (clearInterval(this._rpcWebSocketHeartbeat), this._rpcWebSocketHeartbeat = null), e === 1e3) {
      this._updateSubscriptions();
      return;
    }
    this._subscriptionCallbacksByServerSubscriptionId = {}, Object.entries(this._subscriptionsByHash).forEach(([t, r]) => {
      this._subscriptionsByHash[t] = {
        ...r,
        state: "pending"
      };
    });
  }
  async _updateSubscriptions() {
    if (Object.keys(this._subscriptionsByHash).length === 0) {
      this._rpcWebSocketConnected && (this._rpcWebSocketConnected = !1, this._rpcWebSocketIdleTimeout = setTimeout(() => {
        this._rpcWebSocketIdleTimeout = null;
        try {
          this._rpcWebSocket.close();
        } catch (r) {
          r instanceof Error && console.log(`Error when closing socket connection: ${r.message}`);
        }
      }, 500));
      return;
    }
    if (this._rpcWebSocketIdleTimeout !== null && (clearTimeout(this._rpcWebSocketIdleTimeout), this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketConnected = !0), !this._rpcWebSocketConnected) {
      this._rpcWebSocket.connect();
      return;
    }
    const e = this._rpcWebSocketGeneration, t = () => e === this._rpcWebSocketGeneration;
    await Promise.all(
      Object.keys(this._subscriptionsByHash).map(async (r) => {
        const o = this._subscriptionsByHash[r];
        if (o !== void 0)
          switch (o.state) {
            case "pending":
            case "unsubscribed":
              if (o.callbacks.size === 0) {
                delete this._subscriptionsByHash[r], o.state === "unsubscribed" && delete this._subscriptionCallbacksByServerSubscriptionId[o.serverSubscriptionId], await this._updateSubscriptions();
                return;
              }
              await (async () => {
                const {
                  args: i,
                  method: c
                } = o;
                try {
                  this._subscriptionsByHash[r] = {
                    ...o,
                    state: "subscribing"
                  };
                  const u = await this._rpcWebSocket.call(c, i);
                  this._subscriptionsByHash[r] = {
                    ...o,
                    serverSubscriptionId: u,
                    state: "subscribed"
                  }, this._subscriptionCallbacksByServerSubscriptionId[u] = o.callbacks, await this._updateSubscriptions();
                } catch (u) {
                  if (u instanceof Error && console.error(`${c} error for argument`, i, u.message), !t())
                    return;
                  this._subscriptionsByHash[r] = {
                    ...o,
                    state: "pending"
                  }, await this._updateSubscriptions();
                }
              })();
              break;
            case "subscribed":
              o.callbacks.size === 0 && await (async () => {
                const {
                  serverSubscriptionId: i,
                  unsubscribeMethod: c
                } = o;
                if (this._subscriptionsAutoDisposedByRpc.has(i))
                  this._subscriptionsAutoDisposedByRpc.delete(i);
                else {
                  this._subscriptionsByHash[r] = {
                    ...o,
                    state: "unsubscribing"
                  };
                  try {
                    await this._rpcWebSocket.call(c, [i]);
                  } catch (u) {
                    if (u instanceof Error && console.error(`${c} error:`, u.message), !t())
                      return;
                    this._subscriptionsByHash[r] = {
                      ...o,
                      state: "subscribed"
                    }, await this._updateSubscriptions();
                    return;
                  }
                }
                this._subscriptionsByHash[r] = {
                  ...o,
                  state: "unsubscribed"
                }, await this._updateSubscriptions();
              })();
              break;
          }
      })
    );
  }
  _handleServerNotification(e, t) {
    const r = this._subscriptionCallbacksByServerSubscriptionId[e];
    r !== void 0 && r.forEach((o) => {
      try {
        o(
          ...t
        );
      } catch (i) {
        console.error(i);
      }
    });
  }
  _wsOnAccountNotification(e) {
    const {
      result: t,
      subscription: r
    } = re(e, Xp);
    this._handleServerNotification(r, [t.value, t.context]);
  }
  _makeSubscription(e, t) {
    const r = this._nextClientSubscriptionId++, o = cp([e.method, t]), i = this._subscriptionsByHash[o];
    return i === void 0 ? this._subscriptionsByHash[o] = {
      ...e,
      args: t,
      callbacks: /* @__PURE__ */ new Set([e.callback]),
      state: "pending"
    } : i.callbacks.add(e.callback), this._subscriptionDisposeFunctionsByClientSubscriptionId[r] = async () => {
      delete this._subscriptionDisposeFunctionsByClientSubscriptionId[r];
      const c = this._subscriptionsByHash[o];
      vt(c !== void 0, `Could not find a \`Subscription\` when tearing down client subscription #${r}`), c.callbacks.delete(e.callback), await this._updateSubscriptions();
    }, this._updateSubscriptions(), r;
  }
  onAccountChange(e, t, r) {
    const o = this._buildArgs(
      [e.toBase58()],
      r || this._commitment || "finalized",
      "base64"
    );
    return this._makeSubscription({
      callback: t,
      method: "accountSubscribe",
      unsubscribeMethod: "accountUnsubscribe"
    }, o);
  }
  async removeAccountChangeListener(e) {
    await this._unsubscribeClientSubscription(e, "account change");
  }
  _wsOnProgramAccountNotification(e) {
    const {
      result: t,
      subscription: r
    } = re(e, $p);
    this._handleServerNotification(r, [{
      accountId: t.value.pubkey,
      accountInfo: t.value.account
    }, t.context]);
  }
  onProgramAccountChange(e, t, r, o) {
    const i = this._buildArgs(
      [e.toBase58()],
      r || this._commitment || "finalized",
      "base64",
      o ? {
        filters: o
      } : void 0
    );
    return this._makeSubscription({
      callback: t,
      method: "programSubscribe",
      unsubscribeMethod: "programUnsubscribe"
    }, i);
  }
  async removeProgramAccountChangeListener(e) {
    await this._unsubscribeClientSubscription(e, "program account change");
  }
  onLogs(e, t, r) {
    const o = this._buildArgs(
      [typeof e == "object" ? {
        mentions: [e.toString()]
      } : e],
      r || this._commitment || "finalized"
    );
    return this._makeSubscription({
      callback: t,
      method: "logsSubscribe",
      unsubscribeMethod: "logsUnsubscribe"
    }, o);
  }
  async removeOnLogsListener(e) {
    await this._unsubscribeClientSubscription(e, "logs");
  }
  _wsOnLogsNotification(e) {
    const {
      result: t,
      subscription: r
    } = re(e, Bg);
    this._handleServerNotification(r, [t.value, t.context]);
  }
  _wsOnSlotNotification(e) {
    const {
      result: t,
      subscription: r
    } = re(e, tg);
    this._handleServerNotification(r, [t]);
  }
  onSlotChange(e) {
    return this._makeSubscription(
      {
        callback: e,
        method: "slotSubscribe",
        unsubscribeMethod: "slotUnsubscribe"
      },
      []
    );
  }
  async removeSlotChangeListener(e) {
    await this._unsubscribeClientSubscription(e, "slot change");
  }
  _wsOnSlotUpdatesNotification(e) {
    const {
      result: t,
      subscription: r
    } = re(e, rg);
    this._handleServerNotification(r, [t]);
  }
  onSlotUpdate(e) {
    return this._makeSubscription(
      {
        callback: e,
        method: "slotsUpdatesSubscribe",
        unsubscribeMethod: "slotsUpdatesUnsubscribe"
      },
      []
    );
  }
  async removeSlotUpdateListener(e) {
    await this._unsubscribeClientSubscription(e, "slot update");
  }
  async _unsubscribeClientSubscription(e, t) {
    const r = this._subscriptionDisposeFunctionsByClientSubscriptionId[e];
    r ? await r() : console.warn(`Ignored unsubscribe request because an active subscription with id \`${e}\` for '${t}' events could not be found.`);
  }
  _buildArgs(e, t, r, o) {
    const i = t || this._commitment;
    if (i || r || o) {
      let c = {};
      r && (c.encoding = r), i && (c.commitment = i), o && (c = Object.assign(c, o)), e.push(c);
    }
    return e;
  }
  _buildArgsAtLeastConfirmed(e, t, r, o) {
    const i = t || this._commitment;
    if (i && !["confirmed", "finalized"].includes(i))
      throw new Error("Using Connection with default commitment: `" + this._commitment + "`, but method requires at least `confirmed`");
    return this._buildArgs(e, t, r, o);
  }
  _wsOnSignatureNotification(e) {
    const {
      result: t,
      subscription: r
    } = re(e, ig);
    t.value !== "receivedSignature" && this._subscriptionsAutoDisposedByRpc.add(r), this._handleServerNotification(r, t.value === "receivedSignature" ? [{
      type: "received"
    }, t.context] : [{
      type: "status",
      result: t.value
    }, t.context]);
  }
  onSignature(e, t, r) {
    const o = this._buildArgs(
      [e],
      r || this._commitment || "finalized"
    ), i = this._makeSubscription({
      callback: (c, u) => {
        if (c.type === "status") {
          t(c.result, u);
          try {
            this.removeSignatureListener(i);
          } catch {
          }
        }
      },
      method: "signatureSubscribe",
      unsubscribeMethod: "signatureUnsubscribe"
    }, o);
    return i;
  }
  onSignatureWithOptions(e, t, r) {
    const {
      commitment: o,
      ...i
    } = {
      ...r,
      commitment: r && r.commitment || this._commitment || "finalized"
    }, c = this._buildArgs(
      [e],
      o,
      void 0,
      i
    ), u = this._makeSubscription({
      callback: (d, w) => {
        t(d, w);
        try {
          this.removeSignatureListener(u);
        } catch {
        }
      },
      method: "signatureSubscribe",
      unsubscribeMethod: "signatureUnsubscribe"
    }, c);
    return u;
  }
  async removeSignatureListener(e) {
    await this._unsubscribeClientSubscription(e, "signature result");
  }
  _wsOnRootNotification(e) {
    const {
      result: t,
      subscription: r
    } = re(e, og);
    this._handleServerNotification(r, [t]);
  }
  onRootChange(e) {
    return this._makeSubscription(
      {
        callback: e,
        method: "rootSubscribe",
        unsubscribeMethod: "rootUnsubscribe"
      },
      []
    );
  }
  async removeRootChangeListener(e) {
    await this._unsubscribeClientSubscription(e, "root change");
  }
}
Object.freeze({
  CreateLookupTable: {
    index: 0,
    layout: ue([pe("instruction"), mr("recentSlot"), Re("bumpSeed")])
  },
  FreezeLookupTable: {
    index: 1,
    layout: ue([pe("instruction")])
  },
  ExtendLookupTable: {
    index: 2,
    layout: ue([pe("instruction"), mr(), Pt(Ie(), Yn(pe(), -8), "addresses")])
  },
  DeactivateLookupTable: {
    index: 3,
    layout: ue([pe("instruction")])
  },
  CloseLookupTable: {
    index: 4,
    layout: ue([pe("instruction")])
  }
});
new fe("AddressLookupTab1e1111111111111111111111111");
Object.freeze({
  RequestUnits: {
    index: 0,
    layout: ue([Re("instruction"), pe("units"), pe("additionalFee")])
  },
  RequestHeapFrame: {
    index: 1,
    layout: ue([Re("instruction"), pe("bytes")])
  },
  SetComputeUnitLimit: {
    index: 2,
    layout: ue([Re("instruction"), pe("units")])
  },
  SetComputeUnitPrice: {
    index: 3,
    layout: ue([Re("instruction"), mr("microLamports")])
  }
});
new fe("ComputeBudget111111111111111111111111111111");
ue([Re("numSignatures"), Re("padding"), Zt("signatureOffset"), Zt("signatureInstructionIndex"), Zt("publicKeyOffset"), Zt("publicKeyInstructionIndex"), Zt("messageDataOffset"), Zt("messageDataSize"), Zt("messageInstructionIndex")]);
new fe("Ed25519SigVerify111111111111111111111111111");
Gn.hmacSha256Sync = (n, ...e) => {
  const t = qu.create(As, n);
  return e.forEach((r) => t.update(r)), t.digest();
};
Gn.isValidPrivateKey;
ue([Re("numSignatures"), Zt("signatureOffset"), Re("signatureInstructionIndex"), Zt("ethAddressOffset"), Re("ethAddressInstructionIndex"), Zt("messageDataOffset"), Zt("messageDataSize"), Re("messageInstructionIndex"), $e(20, "ethAddress"), $e(64, "signature"), Re("recoveryId")]);
new fe("KeccakSecp256k11111111111111111111111111111");
new fe("StakeConfig11111111111111111111111111111111");
class Mc {
  constructor(e, t, r) {
    this.unixTimestamp = void 0, this.epoch = void 0, this.custodian = void 0, this.unixTimestamp = e, this.epoch = t, this.custodian = r;
  }
}
Mc.default = new Mc(0, 0, fe.default);
Object.freeze({
  Initialize: {
    index: 0,
    layout: ue([pe("instruction"), X0(), J0()])
  },
  Authorize: {
    index: 1,
    layout: ue([pe("instruction"), Ie("newAuthorized"), pe("stakeAuthorizationType")])
  },
  Delegate: {
    index: 2,
    layout: ue([pe("instruction")])
  },
  Split: {
    index: 3,
    layout: ue([pe("instruction"), Qt("lamports")])
  },
  Withdraw: {
    index: 4,
    layout: ue([pe("instruction"), Qt("lamports")])
  },
  Deactivate: {
    index: 5,
    layout: ue([pe("instruction")])
  },
  Merge: {
    index: 7,
    layout: ue([pe("instruction")])
  },
  AuthorizeWithSeed: {
    index: 8,
    layout: ue([pe("instruction"), Ie("newAuthorized"), pe("stakeAuthorizationType"), ur("authoritySeed"), Ie("authorityOwner")])
  }
});
Object.freeze({
  Staker: {
    index: 0
  },
  Withdrawer: {
    index: 1
  }
});
new fe("Stake11111111111111111111111111111111111111");
Object.freeze({
  InitializeAccount: {
    index: 0,
    layout: ue([pe("instruction"), $0()])
  },
  Authorize: {
    index: 1,
    layout: ue([pe("instruction"), Ie("newAuthorized"), pe("voteAuthorizationType")])
  },
  Withdraw: {
    index: 3,
    layout: ue([pe("instruction"), Qt("lamports")])
  },
  AuthorizeWithSeed: {
    index: 10,
    layout: ue([pe("instruction"), ep()])
  }
});
Object.freeze({
  Voter: {
    index: 0
  },
  Withdrawer: {
    index: 1
  }
});
new fe("Vote111111111111111111111111111111111111111");
new fe("Va1idator1nfo111111111111111111111111111111");
X({
  name: te(),
  website: Ee(te()),
  details: Ee(te()),
  keybaseUsername: Ee(te())
});
new fe("Vote111111111111111111111111111111111111111");
ue([
  Ie("nodePubkey"),
  Ie("authorizedWithdrawer"),
  Re("commission"),
  Mt(),
  Pt(ue([Mt("slot"), pe("confirmationCount")]), Yn(pe(), -8), "votes"),
  Re("rootSlotValid"),
  Mt("rootSlot"),
  Mt(),
  Pt(ue([Mt("epoch"), Ie("authorizedVoter")]), Yn(pe(), -8), "authorizedVoters"),
  ue([Pt(ue([Ie("authorizedPubkey"), Mt("epochOfLastAuthorizedSwitch"), Mt("targetEpoch")]), 32, "buf"), Mt("idx"), Re("isEmpty")], "priorVoters"),
  Mt(),
  Pt(ue([Mt("epoch"), Mt("credits"), Mt("prevCredits")]), Yn(pe(), -8), "epochCredits"),
  ue([Mt("slot"), Mt("timestamp")], "lastTimestamp")
]);
const _c = {
  http: {
    devnet: "http://api.devnet.solana.com",
    testnet: "http://api.testnet.solana.com",
    "mainnet-beta": "http://api.mainnet-beta.solana.com/"
  },
  https: {
    devnet: "https://api.devnet.solana.com",
    testnet: "https://api.testnet.solana.com",
    "mainnet-beta": "https://api.mainnet-beta.solana.com/"
  }
};
function Cg(n, e) {
  const t = e === !1 ? "http" : "https";
  if (!n)
    return _c[t].devnet;
  const r = _c[t][n];
  if (!r)
    throw new Error(`Unknown ${t} cluster: ${n}`);
  return r;
}
const Tg = Ui({}), Ng = ({ children: n, endpoint: e, config: t = { commitment: "confirmed" } }) => {
  const r = tn(() => new _g(e, t), [e, t]);
  return D.createElement(Tg.Provider, { value: { connection: r } }, n);
};
class Nt extends Error {
  constructor(e, t) {
    super(e), this.error = t;
  }
}
class ni extends Nt {
  constructor() {
    super(...arguments), this.name = "WalletNotReadyError";
  }
}
class Rg extends Nt {
  constructor() {
    super(...arguments), this.name = "WalletLoadError";
  }
}
class kg extends Nt {
  constructor() {
    super(...arguments), this.name = "WalletConfigError";
  }
}
class Hr extends Nt {
  constructor() {
    super(...arguments), this.name = "WalletConnectionError";
  }
}
class pa extends Nt {
  constructor() {
    super(...arguments), this.name = "WalletDisconnectedError";
  }
}
class Wr extends Nt {
  constructor() {
    super(...arguments), this.name = "WalletDisconnectionError";
  }
}
class ga extends Nt {
  constructor() {
    super(...arguments), this.name = "WalletAccountError";
  }
}
class Gr extends Nt {
  constructor() {
    super(...arguments), this.name = "WalletPublicKeyError";
  }
}
class Et extends Nt {
  constructor() {
    super(...arguments), this.name = "WalletNotConnectedError";
  }
}
class lr extends Nt {
  constructor() {
    super(...arguments), this.name = "WalletSendTransactionError";
  }
}
class $i extends Nt {
  constructor() {
    super(...arguments), this.name = "WalletSignMessageError";
  }
}
class Ht extends Nt {
  constructor() {
    super(...arguments), this.name = "WalletSignTransactionError";
  }
}
var Be;
(function(n) {
  n.Installed = "Installed", n.NotDetected = "NotDetected", n.Loadable = "Loadable", n.Unsupported = "Unsupported";
})(Be || (Be = {}));
class Og extends zd {
  get connected() {
    return !!this.publicKey;
  }
  async prepareTransaction(e, t, r = {}) {
    const o = this.publicKey;
    if (!o)
      throw new Et();
    return e.feePayer = e.feePayer || o, e.recentBlockhash = e.recentBlockhash || (await t.getLatestBlockhash({
      commitment: r.preflightCommitment,
      minContextSlot: r.minContextSlot
    })).blockhash, e;
  }
}
function eo(n) {
  if (typeof window > "u" || typeof document > "u")
    return;
  const e = [];
  function t() {
    if (n())
      for (const i of e)
        i();
  }
  const r = setInterval(t, 1e3);
  e.push(() => clearInterval(r)), document.readyState === "loading" && (document.addEventListener("DOMContentLoaded", t, { once: !0 }), e.push(() => document.removeEventListener("DOMContentLoaded", t))), document.readyState !== "complete" && (window.addEventListener("load", t, { once: !0 }), e.push(() => window.removeEventListener("load", t))), t();
}
class Lg extends Og {
  async sendTransaction(e, t, r = {}) {
    let o = !0;
    try {
      if ("version" in e) {
        if (!this.supportedTransactionVersions)
          throw new lr("Sending versioned transactions isn't supported by this wallet");
        if (!this.supportedTransactionVersions.has(e.version))
          throw new lr(`Sending transaction version ${e.version} isn't supported by this wallet`);
        try {
          e = await this.signTransaction(e);
          const i = e.serialize();
          return await t.sendRawTransaction(i, r);
        } catch (i) {
          throw i instanceof Ht ? (o = !1, i) : new lr(i == null ? void 0 : i.message, i);
        }
      } else
        try {
          const { signers: i, ...c } = r;
          e = await this.prepareTransaction(e, t, c), i != null && i.length && e.partialSign(...i), e = await this.signTransaction(e);
          const u = e.serialize();
          return await t.sendRawTransaction(u, c);
        } catch (i) {
          throw i instanceof Ht ? (o = !1, i) : new lr(i == null ? void 0 : i.message, i);
        }
    } catch (i) {
      throw o && this.emit("error", i), i;
    }
  }
  async signAllTransactions(e) {
    for (const r of e)
      if ("version" in r) {
        if (!this.supportedTransactionVersions)
          throw new Ht("Signing versioned transactions isn't supported by this wallet");
        if (!this.supportedTransactionVersions.has(r.version))
          throw new Ht(`Signing transaction version ${r.version} isn't supported by this wallet`);
      }
    const t = [];
    for (const r of e)
      t.push(await this.signTransaction(r));
    return t;
  }
}
class to extends Lg {
}
var _s;
(function(n) {
  n.Mainnet = "mainnet-beta", n.Testnet = "testnet", n.Devnet = "devnet";
})(_s || (_s = {}));
class Cc extends Nt {
  constructor() {
    super(...arguments), this.name = "WalletNotSelectedError";
  }
}
const Ug = [], no = {
  autoConnect: !1,
  connecting: !1,
  connected: !1,
  disconnecting: !1,
  select(n) {
    console.error(pn("get", "select"));
  },
  connect() {
    return Promise.reject(console.error(pn("get", "connect")));
  },
  disconnect() {
    return Promise.reject(console.error(pn("get", "disconnect")));
  },
  sendTransaction(n, e, t) {
    return Promise.reject(console.error(pn("get", "sendTransaction")));
  },
  signTransaction(n) {
    return Promise.reject(console.error(pn("get", "signTransaction")));
  },
  signAllTransactions(n) {
    return Promise.reject(console.error(pn("get", "signAllTransactions")));
  },
  signMessage(n) {
    return Promise.reject(console.error(pn("get", "signMessage")));
  }
};
Object.defineProperty(no, "wallets", {
  get() {
    return console.error(pn("read", "wallets")), Ug;
  }
});
Object.defineProperty(no, "wallet", {
  get() {
    return console.error(pn("read", "wallet")), null;
  }
});
Object.defineProperty(no, "publicKey", {
  get() {
    return console.error(pn("read", "publicKey")), null;
  }
});
function pn(n, e) {
  return `You have tried to  ${n} "${e}" on a WalletContext without providing one. Make sure to render a WalletProvider as an ancestor of the component that uses WalletContext`;
}
const ol = Ui(no);
function sl() {
  return Ts(ol);
}
function Dg(n, e) {
  const t = Pe(() => {
    try {
      const i = localStorage.getItem(n);
      if (i)
        return JSON.parse(i);
    } catch (i) {
      typeof window < "u" && console.error(i);
    }
    return e;
  }), r = t[0], o = wn(!0);
  return Ft(() => {
    if (o.current) {
      o.current = !1;
      return;
    }
    try {
      r === null ? localStorage.removeItem(n) : localStorage.setItem(n, JSON.stringify(r));
    } catch (i) {
      typeof window < "u" && console.error(i);
    }
  }, [r, n]), t;
}
const Tc = {
  wallet: null,
  adapter: null,
  publicKey: null,
  connected: !1
}, Pg = ({ children: n, wallets: e, autoConnect: t = !1, onError: r, localStorageKey: o = "walletName" }) => {
  const [i, c] = Dg(o, null), [{ wallet: u, adapter: d, publicKey: w, connected: v }, I] = Pe(Tc), _ = (d == null ? void 0 : d.readyState) || Be.Unsupported, [E, N] = Pe(!1), [T, U] = Pe(!1), P = wn(!1), F = wn(!1), O = wn(!1), [z, L] = Pe(() => e.map((g) => ({
    adapter: g,
    readyState: g.readyState
  })));
  Ft(() => {
    L((m) => e.map((y, x) => {
      const k = m[x];
      return k && k.adapter === y && k.readyState === y.readyState ? k : {
        adapter: y,
        readyState: y.readyState
      };
    }));
    function g(m) {
      L((y) => {
        const x = y.findIndex(({ adapter: C }) => C === this);
        if (x === -1)
          return y;
        const { adapter: k } = y[x];
        return [...y.slice(0, x), { adapter: k, readyState: m }, ...y.slice(x + 1)];
      });
    }
    return e.forEach((m) => m.on("readyStateChange", g, m)), () => e.forEach((m) => m.off("readyStateChange", g, m));
  }, [e]), Ft(() => {
    const g = i && z.find(({ adapter: m }) => m.name === i);
    I(g ? {
      wallet: g,
      adapter: g.adapter,
      connected: g.adapter.connected,
      publicKey: g.adapter.publicKey
    } : Tc);
  }, [i, z]), Ft(() => {
    function g() {
      O.current = !0;
    }
    return window.addEventListener("beforeunload", g), () => window.removeEventListener("beforeunload", g);
  }, [O]);
  const W = $t(() => {
    !d || I((g) => ({ ...g, connected: d.connected, publicKey: d.publicKey }));
  }, [d]), j = $t(() => {
    O.current || c(null);
  }, [O, c]), Q = $t((g) => (O.current || (r || console.error)(g), g), [O, r]);
  Ft(() => {
    if (d)
      return d.on("connect", W), d.on("disconnect", j), d.on("error", Q), () => {
        d.off("connect", W), d.off("disconnect", j), d.off("error", Q);
      };
  }, [d, W, j, Q]), Ft(() => () => {
    d == null || d.disconnect();
  }, [d]), Ft(() => {
    P.current || v || !t || !d || !(_ === Be.Installed || _ === Be.Loadable) || async function() {
      P.current = !0, N(!0);
      try {
        await d.connect();
      } catch {
        c(null);
      } finally {
        N(!1), P.current = !1;
      }
    }();
  }, [P, v, t, d, _, c]);
  const le = $t(async () => {
    if (!(P.current || F.current || v)) {
      if (!d)
        throw Q(new Cc());
      if (!(_ === Be.Installed || _ === Be.Loadable))
        throw c(null), typeof window < "u" && window.open(d.url, "_blank"), Q(new ni());
      P.current = !0, N(!0);
      try {
        await d.connect();
      } catch (g) {
        throw c(null), g;
      } finally {
        N(!1), P.current = !1;
      }
    }
  }, [P, F, v, d, _, Q, c]), Se = $t(async () => {
    if (!F.current) {
      if (!d)
        return c(null);
      F.current = !0, U(!0);
      try {
        await d.disconnect();
      } catch (g) {
        throw c(null), g;
      } finally {
        U(!1), F.current = !1;
      }
    }
  }, [F, d, c]), ge = $t(async (g, m, y) => {
    if (!d)
      throw Q(new Cc());
    if (!v)
      throw Q(new Et());
    return await d.sendTransaction(g, m, y);
  }, [d, Q, v]), Me = tn(() => d && "signTransaction" in d ? async (g) => {
    if (!v)
      throw Q(new Et());
    return await d.signTransaction(g);
  } : void 0, [d, Q, v]), M = tn(() => d && "signAllTransactions" in d ? async (g) => {
    if (!v)
      throw Q(new Et());
    return await d.signAllTransactions(g);
  } : void 0, [d, Q, v]), l = tn(() => d && "signMessage" in d ? async (g) => {
    if (!v)
      throw Q(new Et());
    return await d.signMessage(g);
  } : void 0, [d, Q, v]);
  return D.createElement(ol.Provider, { value: {
    autoConnect: t,
    wallets: z,
    wallet: u,
    publicKey: w,
    connected: v,
    connecting: E,
    disconnecting: T,
    select: c,
    connect: le,
    disconnect: Se,
    sendTransaction: ge,
    signTransaction: Me,
    signAllTransactions: M,
    signMessage: l
  } }, n);
}, al = {
  setVisible(n) {
    console.error(cl("call", "setVisible"));
  },
  visible: !1
};
Object.defineProperty(al, "visible", {
  get() {
    return console.error(cl("read", "visible")), !1;
  }
});
function cl(n, e) {
  return `You have tried to  ${n} "${e}" on a WalletModalContext without providing one. Make sure to render a WalletModalProvider as an ancestor of the component that uses WalletModalContext`;
}
const ul = Ui(al);
function ll() {
  return Ts(ul);
}
const Fg = (n) => D.createElement(
  "button",
  { className: `wallet-adapter-button ${n.className || ""}`, disabled: n.disabled, style: n.style, onClick: n.onClick, tabIndex: n.tabIndex || 0, type: "button" },
  n.startIcon && D.createElement("i", { className: "wallet-adapter-button-start-icon" }, n.startIcon),
  n.children,
  n.endIcon && D.createElement("i", { className: "wallet-adapter-button-end-icon" }, n.endIcon)
), zg = ({ wallet: n, ...e }) => n && D.createElement("img", { src: n.adapter.icon, alt: `${n.adapter.name} icon`, ...e }), Nc = ({ id: n, children: e, expanded: t = !1 }) => {
  const r = wn(null), o = wn(!0), i = "height 250ms ease-out", c = () => {
    const d = r.current;
    !d || requestAnimationFrame(() => {
      d.style.height = d.scrollHeight + "px";
    });
  }, u = () => {
    const d = r.current;
    !d || requestAnimationFrame(() => {
      d.style.height = d.offsetHeight + "px", d.style.overflow = "hidden", requestAnimationFrame(() => {
        d.style.height = "0";
      });
    });
  };
  return wi(() => {
    t ? c() : u();
  }, [t]), wi(() => {
    const d = r.current;
    if (!d)
      return;
    function w() {
      !d || (d.style.overflow = t ? "initial" : "hidden", t && (d.style.height = "auto"));
    }
    function v(I) {
      d && I.target === d && I.propertyName === "height" && w();
    }
    return o.current && (w(), o.current = !1), d.addEventListener("transitionend", v), () => d.removeEventListener("transitionend", v);
  }, [t]), D.createElement("div", { className: "wallet-adapter-collapse", id: n, ref: r, role: "region", style: { height: 0, transition: o.current ? void 0 : i } }, e);
}, cs = ({ handleClick: n, tabIndex: e, wallet: t }) => D.createElement(
  "li",
  null,
  D.createElement(
    Fg,
    { onClick: n, startIcon: D.createElement(zg, { wallet: t }), tabIndex: e },
    t.adapter.name,
    t.readyState === Be.Installed && D.createElement("span", null, "Detected")
  )
), Hg = () => D.createElement(
  "svg",
  { width: "97", height: "96", viewBox: "0 0 97 96", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
  D.createElement("circle", { cx: "48.5", cy: "48", r: "48", fill: "url(#paint0_linear_880_5115)", fillOpacity: "0.1" }),
  D.createElement("circle", { cx: "48.5", cy: "48", r: "47", stroke: "url(#paint1_linear_880_5115)", strokeOpacity: "0.4", strokeWidth: "2" }),
  D.createElement(
    "g",
    { clipPath: "url(#clip0_880_5115)" },
    D.createElement("path", { d: "M65.5769 28.1523H31.4231C27.6057 28.1523 24.5 31.258 24.5 35.0754V60.9215C24.5 64.7389 27.6057 67.8446 31.4231 67.8446H65.5769C69.3943 67.8446 72.5 64.7389 72.5 60.9215V35.0754C72.5 31.258 69.3943 28.1523 65.5769 28.1523ZM69.7308 52.1523H59.5769C57.2865 52.1523 55.4231 50.289 55.4231 47.9985C55.4231 45.708 57.2864 43.8446 59.5769 43.8446H69.7308V52.1523ZM69.7308 41.0754H59.5769C55.7595 41.0754 52.6539 44.1811 52.6539 47.9985C52.6539 51.8159 55.7595 54.9215 59.5769 54.9215H69.7308V60.9215C69.7308 63.2119 67.8674 65.0754 65.5769 65.0754H31.4231C29.1327 65.0754 27.2692 63.212 27.2692 60.9215V35.0754C27.2692 32.785 29.1326 30.9215 31.4231 30.9215H65.5769C67.8673 30.9215 69.7308 32.7849 69.7308 35.0754V41.0754Z", fill: "url(#paint2_linear_880_5115)" }),
    D.createElement("path", { d: "M61.4231 46.6172H59.577C58.8123 46.6172 58.1924 47.2371 58.1924 48.0018C58.1924 48.7665 58.8123 49.3863 59.577 49.3863H61.4231C62.1878 49.3863 62.8077 48.7664 62.8077 48.0018C62.8077 47.2371 62.1878 46.6172 61.4231 46.6172Z", fill: "url(#paint3_linear_880_5115)" })
  ),
  D.createElement(
    "defs",
    null,
    D.createElement(
      "linearGradient",
      { id: "paint0_linear_880_5115", x1: "3.41664", y1: "98.0933", x2: "103.05", y2: "8.42498", gradientUnits: "userSpaceOnUse" },
      D.createElement("stop", { stopColor: "#9945FF" }),
      D.createElement("stop", { offset: "0.14", stopColor: "#8A53F4" }),
      D.createElement("stop", { offset: "0.42", stopColor: "#6377D6" }),
      D.createElement("stop", { offset: "0.79", stopColor: "#24B0A7" }),
      D.createElement("stop", { offset: "0.99", stopColor: "#00D18C" }),
      D.createElement("stop", { offset: "1", stopColor: "#00D18C" })
    ),
    D.createElement(
      "linearGradient",
      { id: "paint1_linear_880_5115", x1: "3.41664", y1: "98.0933", x2: "103.05", y2: "8.42498", gradientUnits: "userSpaceOnUse" },
      D.createElement("stop", { stopColor: "#9945FF" }),
      D.createElement("stop", { offset: "0.14", stopColor: "#8A53F4" }),
      D.createElement("stop", { offset: "0.42", stopColor: "#6377D6" }),
      D.createElement("stop", { offset: "0.79", stopColor: "#24B0A7" }),
      D.createElement("stop", { offset: "0.99", stopColor: "#00D18C" }),
      D.createElement("stop", { offset: "1", stopColor: "#00D18C" })
    ),
    D.createElement(
      "linearGradient",
      { id: "paint2_linear_880_5115", x1: "25.9583", y1: "68.7101", x2: "67.2337", y2: "23.7879", gradientUnits: "userSpaceOnUse" },
      D.createElement("stop", { stopColor: "#9945FF" }),
      D.createElement("stop", { offset: "0.14", stopColor: "#8A53F4" }),
      D.createElement("stop", { offset: "0.42", stopColor: "#6377D6" }),
      D.createElement("stop", { offset: "0.79", stopColor: "#24B0A7" }),
      D.createElement("stop", { offset: "0.99", stopColor: "#00D18C" }),
      D.createElement("stop", { offset: "1", stopColor: "#00D18C" })
    ),
    D.createElement(
      "linearGradient",
      { id: "paint3_linear_880_5115", x1: "58.3326", y1: "49.4467", x2: "61.0002", y2: "45.4453", gradientUnits: "userSpaceOnUse" },
      D.createElement("stop", { stopColor: "#9945FF" }),
      D.createElement("stop", { offset: "0.14", stopColor: "#8A53F4" }),
      D.createElement("stop", { offset: "0.42", stopColor: "#6377D6" }),
      D.createElement("stop", { offset: "0.79", stopColor: "#24B0A7" }),
      D.createElement("stop", { offset: "0.99", stopColor: "#00D18C" }),
      D.createElement("stop", { offset: "1", stopColor: "#00D18C" })
    ),
    D.createElement(
      "clipPath",
      { id: "clip0_880_5115" },
      D.createElement("rect", { width: "48", height: "48", fill: "white", transform: "translate(24.5 24)" })
    )
  )
), Wg = ({ className: n = "", container: e = "body" }) => {
  const t = wn(null), { wallets: r, select: o } = sl(), { setVisible: i } = ll(), [c, u] = Pe(!1), [d, w] = Pe(!1), [v, I] = Pe(null), [_, E] = tn(() => {
    const z = [], L = [], W = [];
    for (const j of r)
      j.readyState === Be.NotDetected ? L.push(j) : j.readyState === Be.Loadable ? W.push(j) : j.readyState === Be.Installed && z.push(j);
    return [z, [...W, ...L]];
  }, [r]), N = tn(() => _.length ? _[0] : r.find((z) => z.adapter.name === "Torus") || r.find((z) => z.adapter.name === "Phantom") || r.find((z) => z.readyState === Be.Loadable) || E[0], [_, r, E]), T = $t(() => {
    w(!1), setTimeout(() => i(!1), 150);
  }, [i]), U = $t((z) => {
    z.preventDefault(), T();
  }, [T]), P = $t((z, L) => {
    o(L), U(z);
  }, [o, U]), F = $t(() => u(!c), [c]), O = $t((z) => {
    const L = t.current;
    if (!L)
      return;
    const W = L.querySelectorAll("button"), j = W[0], Q = W[W.length - 1];
    z.shiftKey ? document.activeElement === j && (Q.focus(), z.preventDefault()) : document.activeElement === Q && (j.focus(), z.preventDefault());
  }, [t]);
  return wi(() => {
    const z = (W) => {
      W.key === "Escape" ? T() : W.key === "Tab" && O(W);
    }, { overflow: L } = window.getComputedStyle(document.body);
    return setTimeout(() => w(!0), 0), document.body.style.overflow = "hidden", window.addEventListener("keydown", z, !1), () => {
      document.body.style.overflow = L, window.removeEventListener("keydown", z, !1);
    };
  }, [T, O]), wi(() => I(document.querySelector(e)), [e]), v && dl(D.createElement(
    "div",
    { "aria-labelledby": "wallet-adapter-modal-title", "aria-modal": "true", className: `wallet-adapter-modal ${d && "wallet-adapter-modal-fade-in"} ${n}`, ref: t, role: "dialog" },
    D.createElement(
      "div",
      { className: "wallet-adapter-modal-container" },
      D.createElement(
        "div",
        { className: "wallet-adapter-modal-wrapper" },
        D.createElement(
          "button",
          { onClick: U, className: "wallet-adapter-modal-button-close" },
          D.createElement(
            "svg",
            { width: "14", height: "14" },
            D.createElement("path", { d: "M14 12.461 8.3 6.772l5.234-5.233L12.006 0 6.772 5.234 1.54 0 0 1.539l5.234 5.233L0 12.006l1.539 1.528L6.772 8.3l5.69 5.7L14 12.461z" })
          )
        ),
        _.length ? D.createElement(
          D.Fragment,
          null,
          D.createElement("h1", { className: "wallet-adapter-modal-title" }, "Connect a wallet on Solana to continue"),
          D.createElement(
            "ul",
            { className: "wallet-adapter-modal-list" },
            _.map((z) => D.createElement(cs, { key: z.adapter.name, handleClick: (L) => P(L, z.adapter.name), wallet: z })),
            E.length ? D.createElement(Nc, { expanded: c, id: "wallet-adapter-modal-collapse" }, E.map((z) => D.createElement(cs, { key: z.adapter.name, handleClick: (L) => P(L, z.adapter.name), tabIndex: c ? 0 : -1, wallet: z }))) : null
          ),
          E.length ? D.createElement(
            "button",
            { className: "wallet-adapter-modal-list-more", onClick: F, tabIndex: 0 },
            D.createElement(
              "span",
              null,
              c ? "Less " : "More ",
              "options"
            ),
            D.createElement(
              "svg",
              { width: "13", height: "7", viewBox: "0 0 13 7", xmlns: "http://www.w3.org/2000/svg", className: `${c ? "wallet-adapter-modal-list-more-icon-rotate" : ""}` },
              D.createElement("path", { d: "M0.71418 1.626L5.83323 6.26188C5.91574 6.33657 6.0181 6.39652 6.13327 6.43762C6.24844 6.47872 6.37371 6.5 6.50048 6.5C6.62725 6.5 6.75252 6.47872 6.8677 6.43762C6.98287 6.39652 7.08523 6.33657 7.16774 6.26188L12.2868 1.626C12.7753 1.1835 12.3703 0.5 11.6195 0.5H1.37997C0.629216 0.5 0.224175 1.1835 0.71418 1.626Z" })
            )
          ) : null
        ) : D.createElement(
          D.Fragment,
          null,
          D.createElement("h1", { className: "wallet-adapter-modal-title" }, "You'll need a wallet on Solana to continue"),
          D.createElement(
            "div",
            { className: "wallet-adapter-modal-middle" },
            D.createElement(Hg, null),
            D.createElement("button", { type: "button", className: "wallet-adapter-modal-middle-button", onClick: (z) => P(z, N.adapter.name) }, "Get started")
          ),
          E.length ? D.createElement(
            D.Fragment,
            null,
            D.createElement(
              "button",
              { className: "wallet-adapter-modal-list-more", onClick: F, tabIndex: 0 },
              D.createElement(
                "span",
                null,
                c ? "Hide " : "Already have a wallet? View ",
                "options"
              ),
              D.createElement(
                "svg",
                { width: "13", height: "7", viewBox: "0 0 13 7", xmlns: "http://www.w3.org/2000/svg", className: `${c ? "wallet-adapter-modal-list-more-icon-rotate" : ""}` },
                D.createElement("path", { d: "M0.71418 1.626L5.83323 6.26188C5.91574 6.33657 6.0181 6.39652 6.13327 6.43762C6.24844 6.47872 6.37371 6.5 6.50048 6.5C6.62725 6.5 6.75252 6.47872 6.8677 6.43762C6.98287 6.39652 7.08523 6.33657 7.16774 6.26188L12.2868 1.626C12.7753 1.1835 12.3703 0.5 11.6195 0.5H1.37997C0.629216 0.5 0.224175 1.1835 0.71418 1.626Z" })
              )
            ),
            D.createElement(
              Nc,
              { expanded: c, id: "wallet-adapter-modal-collapse" },
              D.createElement("ul", { className: "wallet-adapter-modal-list" }, E.map((z) => D.createElement(cs, { key: z.adapter.name, handleClick: (L) => P(L, z.adapter.name), tabIndex: c ? 0 : -1, wallet: z })))
            )
          ) : null
        )
      )
    ),
    D.createElement("div", { className: "wallet-adapter-modal-overlay", onMouseDown: U })
  ), v);
}, Gg = ({ children: n, ...e }) => {
  const [t, r] = Pe(!1);
  return D.createElement(
    ul.Provider,
    { value: {
      visible: t,
      setVisible: r
    } },
    n,
    t && D.createElement(Wg, { ...e })
  );
}, jg = "logger/5.7.0";
let Rc = !1, kc = !1;
const gi = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
let Oc = gi.default, us = null;
function Qg() {
  try {
    const n = [];
    if (["NFD", "NFC", "NFKD", "NFKC"].forEach((e) => {
      try {
        if ("test".normalize(e) !== "test")
          throw new Error("bad normalize");
      } catch {
        n.push(e);
      }
    }), n.length)
      throw new Error("missing " + n.join(", "));
    if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769))
      throw new Error("broken implementation");
  } catch (n) {
    return n.message;
  }
  return null;
}
const Lc = Qg();
var Cs;
(function(n) {
  n.DEBUG = "DEBUG", n.INFO = "INFO", n.WARNING = "WARNING", n.ERROR = "ERROR", n.OFF = "OFF";
})(Cs || (Cs = {}));
var on;
(function(n) {
  n.UNKNOWN_ERROR = "UNKNOWN_ERROR", n.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", n.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", n.NETWORK_ERROR = "NETWORK_ERROR", n.SERVER_ERROR = "SERVER_ERROR", n.TIMEOUT = "TIMEOUT", n.BUFFER_OVERRUN = "BUFFER_OVERRUN", n.NUMERIC_FAULT = "NUMERIC_FAULT", n.MISSING_NEW = "MISSING_NEW", n.INVALID_ARGUMENT = "INVALID_ARGUMENT", n.MISSING_ARGUMENT = "MISSING_ARGUMENT", n.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", n.CALL_EXCEPTION = "CALL_EXCEPTION", n.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", n.NONCE_EXPIRED = "NONCE_EXPIRED", n.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", n.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", n.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", n.ACTION_REJECTED = "ACTION_REJECTED";
})(on || (on = {}));
const Uc = "0123456789abcdef";
class Ze {
  constructor(e) {
    Object.defineProperty(this, "version", {
      enumerable: !0,
      value: e,
      writable: !1
    });
  }
  _log(e, t) {
    const r = e.toLowerCase();
    gi[r] == null && this.throwArgumentError("invalid log level name", "logLevel", e), !(Oc > gi[r]) && console.log.apply(console, t);
  }
  debug(...e) {
    this._log(Ze.levels.DEBUG, e);
  }
  info(...e) {
    this._log(Ze.levels.INFO, e);
  }
  warn(...e) {
    this._log(Ze.levels.WARNING, e);
  }
  makeError(e, t, r) {
    if (kc)
      return this.makeError("censored error", t, {});
    t || (t = Ze.errors.UNKNOWN_ERROR), r || (r = {});
    const o = [];
    Object.keys(r).forEach((d) => {
      const w = r[d];
      try {
        if (w instanceof Uint8Array) {
          let v = "";
          for (let I = 0; I < w.length; I++)
            v += Uc[w[I] >> 4], v += Uc[w[I] & 15];
          o.push(d + "=Uint8Array(0x" + v + ")");
        } else
          o.push(d + "=" + JSON.stringify(w));
      } catch {
        o.push(d + "=" + JSON.stringify(r[d].toString()));
      }
    }), o.push(`code=${t}`), o.push(`version=${this.version}`);
    const i = e;
    let c = "";
    switch (t) {
      case on.NUMERIC_FAULT: {
        c = "NUMERIC_FAULT";
        const d = e;
        switch (d) {
          case "overflow":
          case "underflow":
          case "division-by-zero":
            c += "-" + d;
            break;
          case "negative-power":
          case "negative-width":
            c += "-unsupported";
            break;
          case "unbound-bitwise-result":
            c += "-unbound-result";
            break;
        }
        break;
      }
      case on.CALL_EXCEPTION:
      case on.INSUFFICIENT_FUNDS:
      case on.MISSING_NEW:
      case on.NONCE_EXPIRED:
      case on.REPLACEMENT_UNDERPRICED:
      case on.TRANSACTION_REPLACED:
      case on.UNPREDICTABLE_GAS_LIMIT:
        c = t;
        break;
    }
    c && (e += " [ See: https://links.ethers.org/v5-errors-" + c + " ]"), o.length && (e += " (" + o.join(", ") + ")");
    const u = new Error(e);
    return u.reason = i, u.code = t, Object.keys(r).forEach(function(d) {
      u[d] = r[d];
    }), u;
  }
  throwError(e, t, r) {
    throw this.makeError(e, t, r);
  }
  throwArgumentError(e, t, r) {
    return this.throwError(e, Ze.errors.INVALID_ARGUMENT, {
      argument: t,
      value: r
    });
  }
  assert(e, t, r, o) {
    e || this.throwError(t, r, o);
  }
  assertArgument(e, t, r, o) {
    e || this.throwArgumentError(t, r, o);
  }
  checkNormalize(e) {
    Lc && this.throwError("platform missing String.prototype.normalize", Ze.errors.UNSUPPORTED_OPERATION, {
      operation: "String.prototype.normalize",
      form: Lc
    });
  }
  checkSafeUint53(e, t) {
    typeof e == "number" && (t == null && (t = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(t, Ze.errors.NUMERIC_FAULT, {
      operation: "checkSafeInteger",
      fault: "out-of-safe-range",
      value: e
    }), e % 1 && this.throwError(t, Ze.errors.NUMERIC_FAULT, {
      operation: "checkSafeInteger",
      fault: "non-integer",
      value: e
    }));
  }
  checkArgumentCount(e, t, r) {
    r ? r = ": " + r : r = "", e < t && this.throwError("missing argument" + r, Ze.errors.MISSING_ARGUMENT, {
      count: e,
      expectedCount: t
    }), e > t && this.throwError("too many arguments" + r, Ze.errors.UNEXPECTED_ARGUMENT, {
      count: e,
      expectedCount: t
    });
  }
  checkNew(e, t) {
    (e === Object || e == null) && this.throwError("missing new", Ze.errors.MISSING_NEW, { name: t.name });
  }
  checkAbstract(e, t) {
    e === t ? this.throwError("cannot instantiate abstract class " + JSON.stringify(t.name) + " directly; use a sub-class", Ze.errors.UNSUPPORTED_OPERATION, { name: e.name, operation: "new" }) : (e === Object || e == null) && this.throwError("missing new", Ze.errors.MISSING_NEW, { name: t.name });
  }
  static globalLogger() {
    return us || (us = new Ze(jg)), us;
  }
  static setCensorship(e, t) {
    if (!e && t && this.globalLogger().throwError("cannot permanently disable censorship", Ze.errors.UNSUPPORTED_OPERATION, {
      operation: "setCensorship"
    }), Rc) {
      if (!e)
        return;
      this.globalLogger().throwError("error censorship permanent", Ze.errors.UNSUPPORTED_OPERATION, {
        operation: "setCensorship"
      });
    }
    kc = !!e, Rc = !!t;
  }
  static setLogLevel(e) {
    const t = gi[e.toLowerCase()];
    if (t == null) {
      Ze.globalLogger().warn("invalid log level - " + e);
      return;
    }
    Oc = t;
  }
  static from(e) {
    return new Ze(e);
  }
}
Ze.errors = on;
Ze.levels = Cs;
const qg = "bytes/5.7.0", ls = new Ze(qg);
function Yg(n) {
  return !!n.toHexString;
}
function yi(n) {
  return n.slice || (n.slice = function() {
    const e = Array.prototype.slice.call(arguments);
    return yi(new Uint8Array(Array.prototype.slice.apply(n, e)));
  }), n;
}
function Dc(n) {
  return typeof n == "number" && n == n && n % 1 === 0;
}
function Kg(n) {
  if (n == null)
    return !1;
  if (n.constructor === Uint8Array)
    return !0;
  if (typeof n == "string" || !Dc(n.length) || n.length < 0)
    return !1;
  for (let e = 0; e < n.length; e++) {
    const t = n[e];
    if (!Dc(t) || t < 0 || t >= 256)
      return !1;
  }
  return !0;
}
function Pc(n, e) {
  if (e || (e = {}), typeof n == "number") {
    ls.checkSafeUint53(n, "invalid arrayify value");
    const t = [];
    for (; n; )
      t.unshift(n & 255), n = parseInt(String(n / 256));
    return t.length === 0 && t.push(0), yi(new Uint8Array(t));
  }
  if (e.allowMissingPrefix && typeof n == "string" && n.substring(0, 2) !== "0x" && (n = "0x" + n), Yg(n) && (n = n.toHexString()), Vg(n)) {
    let t = n.substring(2);
    t.length % 2 && (e.hexPad === "left" ? t = "0" + t : e.hexPad === "right" ? t += "0" : ls.throwArgumentError("hex data is odd-length", "value", n));
    const r = [];
    for (let o = 0; o < t.length; o += 2)
      r.push(parseInt(t.substring(o, o + 2), 16));
    return yi(new Uint8Array(r));
  }
  return Kg(n) ? yi(new Uint8Array(n)) : ls.throwArgumentError("invalid arrayify value", "value", n);
}
function Vg(n, e) {
  return !(typeof n != "string" || !n.match(/^0x[0-9A-Fa-f]*$/) || e && n.length !== 2 + 2 * e);
}
const Zg = "properties/5.7.0";
globalThis && globalThis.__awaiter;
new Ze(Zg);
function fi(n, e, t) {
  Object.defineProperty(n, e, {
    enumerable: !0,
    value: t,
    writable: !1
  });
}
class fl {
  constructor(e) {
    fi(this, "alphabet", e), fi(this, "base", e.length), fi(this, "_alphabetMap", {}), fi(this, "_leader", e.charAt(0));
    for (let t = 0; t < e.length; t++)
      this._alphabetMap[e.charAt(t)] = t;
  }
  encode(e) {
    let t = Pc(e);
    if (t.length === 0)
      return "";
    let r = [0];
    for (let i = 0; i < t.length; ++i) {
      let c = t[i];
      for (let u = 0; u < r.length; ++u)
        c += r[u] << 8, r[u] = c % this.base, c = c / this.base | 0;
      for (; c > 0; )
        r.push(c % this.base), c = c / this.base | 0;
    }
    let o = "";
    for (let i = 0; t[i] === 0 && i < t.length - 1; ++i)
      o += this._leader;
    for (let i = r.length - 1; i >= 0; --i)
      o += this.alphabet[r[i]];
    return o;
  }
  decode(e) {
    if (typeof e != "string")
      throw new TypeError("Expected String");
    let t = [];
    if (e.length === 0)
      return new Uint8Array(t);
    t.push(0);
    for (let r = 0; r < e.length; r++) {
      let o = this._alphabetMap[e[r]];
      if (o === void 0)
        throw new Error("Non-base" + this.base + " character");
      let i = o;
      for (let c = 0; c < t.length; ++c)
        i += t[c] * this.base, t[c] = i & 255, i >>= 8;
      for (; i > 0; )
        t.push(i & 255), i >>= 8;
    }
    for (let r = 0; e[r] === this._leader && r < e.length - 1; ++r)
      t.push(0);
    return Pc(new Uint8Array(t.reverse()));
  }
}
new fl("abcdefghijklmnopqrstuvwxyz234567");
const Xg = new fl("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"), Jg = "Glow";
class $g extends to {
  constructor(e = {}) {
    if (super(), this.name = Jg, this.url = "https://glow.app", this.icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAB4FBMVEUAAACjON6dNNyjONd7C+GIHNq1S+K9W+O3TeLAVOe6TuSJHtqcMdPBVeiuQt2kOdeRJc7AVeeyRd95COR9DeF7CuKWKtCaL9KoPdr78/789/7//f+zPt7u0Pi7ROG5SuK9TOT67/315PzVYfHAT+bx1Pry4PuiMNWmMdaqN9moM9fv2vqvOdvtzff15/ysN9mxO9yzRN/13/ysPdz46Py/SeTFVemPE+/EUOe5QeC3P+DJW+y9SOOfLtPZYvT46/2TGOu2R+GNEPKaI9/PXO7t1fjbZfWgLNfu0/jIV+rQX++ZKdCQIdSWIOGmN9iYJNvCVOjRVe/CTOaKE+eZKNSgKd2TIdnLV+yECfGfKdqKEO2dJ9ylL9iNHdr02/uHC/KjLdp+BfCcKdbKU+t7B+eUJs+dLNKTHeG+ROXUW/GLGeCFFd6PHN+JDfOuQd3JS+vNWu2EEeGOF+WiNtbOUe2BDOf02fuSGuWOFOuUJdPWXfGFDuvMT+yVHOWIF9vCSOiZJteACeyLHNV9C+N4A+x1A+mGGOPHUOmKHN2aLtKFEOWXHubarPLXju7CfevoxvffuPXQmu7QfuvnvfXJje3dnPHBauTOcOu4bfDjp/SqUOytStugNu6yXd6bKueVNOUmkAxzAAAAGXRSTlMAIxB+3D9C/WLfo2CcxcXf34TffL6cvc/vU7i1KQAAOkJJREFUeNrElMFuqlAQhivICpLehFofgb6ET1CjCwk7drZNwA0SFqYJ8Upq1Ke+/wwz9hwurtT2m5lT0933z+jDLRgMPN/3w3AEnoihkAt1l10PU3SHN+aP8EwEQeC6ru973sB5+GWgHY4gW5jk1LlNjSFruy13FLEz5KGP/p9X5Xg8jp8D1/cGDz+N44WjYd6cKRorAozBDgHUaIX1YV13lo8WdS5OgKfrrxwFDsL1fuogHH80bHrcG/MEUAbqv6PC37ROU3v/zI7mjYb/ofZd/TfUUeyVyQQ9Du5/C174tGxsEEFViX7znYEF++/0AlJF/MmbS+Dtb2C7QZmQvHA2R5uM3Ttm4ITDJWg6EVTwRwsNHwBaqQ0QgrpTEa28wQat9Bx/+5q77/Lo3ycD72nJWOpsL/4NTV4Q3evP2krrQ4rz7zCdog3gzxFg/Wg27/nqvxvyR5qyLCPUJIomUeDdT395tucAyL8p+EEAyt5MwOBwsN0TLmRgAn3lLG4e/yvswdmerctyIoUUwNi/i76eAA3Loxu8NKeWYr/fFwu8pyzPEUSW11mW1TX1IevY69/pFC36SSL2cbyJ2RyNR3kXe4H0eaShj8H7eLsrGOj2vxo8/AlTVeTN6ixPb1GcsgL6GUWAb0IGyJ8TYFbpCtghYEg9QYM2gVh4pbHtgS4fq9fF4wi6BIMb/fSJPRfbV7AXOILWXi8A+idM1gvrrwiSp1a2WpsY+hguiuCSP906tPkC+nFvcf1DtV8qpE+jQF5ZIAHaPqYvgwPkoU9vukosNlr4SPom6m/IR2hOAK8ym83KWWlx9ffAGen1f9tTG/IoNlcWSgbWFy8A/miTrVYM7AhIHk36SiTAEto96PfAuW79JP5Fj/IX/gafmIXtvpcS5TXNCupo3j2eD06ASKnnsNf1b7cxdWzxrlj2ZfTyEkWia9RMX+bxil+CEOpfNEszgcriE71g4P/J5sJ6sRbIXAIgPmhA8pEw8/m8fbYEJ2DKm/r29l+QgOhe5IpfAmf0j9SyaWkjisIwrS0I7bbgIn/AUDBlFm4Ds8hKs2lloouQILrLIiATGAQDycZf3ed85c4dTTX2Oefe+LF6znlndGv2eQKUh7XKNzQ8oE5BigD6mFvxlam7OTef6N+r99h4CrL1z3/P74JcX+xzTuVw5Xz0Mfj0ZauE/kblOQ9afDbKs5hzuKhnTQDXMgLg9kupezEPrqgLs7+SekojwFtKL3D/3F5xccBeL/+CuwWPwUcef8jyr/pBs25aeAT0LGX90A0A8nSoI8/+XZ71y6Fh/jTPuZun+Ef2Q7+vgjgDd2EfoJ//MYFvBB+4N5tbGv3Zeq++FFxzHPbPZbD7WjMQj74yZgIXF2NPQHoIuvrJHlrr79v+T+mckC/8KCfHB/pvFey3txv8Z7cz/BNNhok3DIB2edG3DNS1qtPBlbgbZTkuYwREwNefE/LJX+j3+5f95Fvo9uOmikspvZSjg17/4c8ERB//dgAqumoPICH6Qo2/URvy7gt/2z/rl97p34wFVZ5oz0ejOTUy/46+4f7hzSn0FPY9aEiUo4P9Af3ZZqbs078mAKlSAuItWC/VnwkYZm5XaZg+TT3d2ADUH338R7hLOaGf9m/OdIIfKTEMncDB/gTAJ8DlEah2NHQ3AKuV+HNgpfrBfRuxd0pB9DlywWQ+gVEbt4+nP20fzpL4Ty86wa89DMcHPv9BSkCFv16N1nU1NfsUACbg21/VMoM6oea4O2OpFAHcXf9m4owS2V8/9++r/dkplcw5r3N5+d4JfL0N/7DfaK1lCFWbaTWdTq+b9v6BCbB7j0A2gMd72OmXbD8Y0+g7XXt4GQBfPnVWnLnkgJO+WFiZPingTXny6b3//4S+uQdVNaua2D76Qpb/AHd62B4A9o++/6BkAoEFwNiz/zwA7i9Y9tW6p6dHFxBDcMjA2/8PfO74awJcn9PZPvqcYJXA3dj5Gzt3lw9CPgUgi0CuH/4uj77lfoB3gm8W3Rgwgbf+K/6xNdzfymH/0EiZfh4AXgDOkh4OaZnDMA2ADAS5fjlO+kFXHzJ/DUCkfzAoegPoLVoFi0WWAV6G39/8A5DvP6MKEKdoKrE6TwkAnYDKox+8OoCbMtt/sDcA/vYHe/cNlF5ONgM6ZnD0zxeA+cf+YdPVb/RMXybg/Bx/118Nawp9G8AL/449144/O/3JngCEvQ1AMH0aYw5N/er1aPvJX9rN5bWpIIzi+BYFFz7AqOSWLBTflSKloQsTEFcuBR+BVHBbQUEUpIviMjFtbSmllv6tnvkePTN37qRW6ZmZGxvr4nfmfN8MCQKfMTgxtQHk/Y/5dzl+uv/OzwR81QTgdcU1Go1evsR8SX6sV3Tg1bs0AYM7gzuYoG8KAOBBpAb4tpuehAXpu3ORBVPawLW0/DFzA4ZhQGoB8Q8SMB/wJQMSA2hlRAMCfFjkBz6m0TMB0JImAPjgN/wkAbr7c6CfJbvimwFYeHovMBWL4EzS/+gA2PEwftUyxnDYRwSUHvhvA7zQm4z+2SjI8GHASGT8YJcl9K/wIP8SDBB6237Meybtf1IAef1z88GukjciC84WDKidgGkBEN8cEANE/f686huGw2OAHuOZ4pMfCwEYRfjGj2kGhOeLpRdLA5HwswCCAdx/zATf4amPmHiPKSgVwZVaAJRcZ7b/y8vgDwnoiwVmgEzh9weebgCeFgDDpwVAlwX5/mMGiQGDgd0ATcr/2NsfJiWZ73bJTx/owKniCQA5PwbF64/zQ8M+ZA0Q8gpgAr5KBFgBln5Mp9ceIOjUm7CWVANRHADQewBmzYFI3Vvdbneh+wQO9Gr8qIKg4klwjfyEfx0eQ+M/CD/xYQCWByBYUGsBkDuA7dfhGWACVPQB9W9SfnNA+EGv4glICf3CAvAXYEAPSm1wBy6VOmC9/0F5BcAAzP6yBiDil6fBf/YAIAIrGGkPBD5FAzwARp8HgAbMzTXhgx0jqIfpiqrAe+HZUgdUC8guz1oHcFkCpAWYvAnOB3ywi4TYEwDt7Uy2xutrnU7rpqjVub+2Pt6YnKtyA1Sof0zgqwGYNID4EOBdPRggj5CENARNEbioXwA4PS3AyPlZA6p5SughwfcegCXa35mMO0Au6v7mxrm75GcFRB8CCL/guwGsfvK32712L8oAliYA4lGYBeADO0C6/8N8/xv52QSUHvtvCdgj+yHqbE6qmL92CfLyB37Cj/B3ia8WVJEJUyNwJnwFCDEAbP/N/OgBhQBYBr56DGTnx4j7UdQZb98dDOhAnACI/HEFOL2pCqtHWRdojMA14ce3PzwANQJ5/pmAsgHGji6I+O9P1m7+k9Ymv5t64F29A0BpACDlT9SrggniQ9wGahE4cfAdsNKzBZT4+4UA1LW/C/p/1+YEBtzLWsADVUMCJPqJqoopEHq/DpxMvgeCYACvQAJPlfe/HACM3a1C8o9SC7/LPSA5AS0BNXgoFEJV7wPpdfA0+P0b0OYPQModsJwAbv7/6eF2/FF48yWILSDBD8tf1AD2gUtxC9QEQJL/1YS/0P+oZv6dqfg3dOrjUHUmtY8CD/hn4wuw81NAp5gBMSBqg1eiAKyyA/AAsNtfKQAU8W83UxOb5DfiUbLgl1qg/HkPzM4AaLFytWVUtaPgFCvA+YGPscoEJOkfEr/IT/ycnha4iFx+jxYEAx6zBbAC8v1fxAgGtDGzCHgGLvEMcPE7cOC78v5XdIC1nyNhMgEyigngr6UWbHsPVEkFMACgjwxok32x5oCHAOcAz4Afwv/+g9KTf+iiAYfw763X6ZOf/En0JBHsDvxNar1KL4LpHUDwGQFhl4HpOUgicJ63IJXhvwZ/Af/wApi0GuC5u3zBYDRu2Ip+lT9Eam2kPZABqDfARagK0yKgFvBKGBw45S2ABqgF+ArsSPtPA/aeJ/SOxx+zzJPTX5O/zEL0qCoYUA8AJPz2jKvAE3BZ+U9GLcBEAwr4BQO2ai3PFP0pfsr7GTTTIL+U18IGSyA2oJscAAeawZIU0AA6oE3gjLcASPFX2QBKNwDyU779hjRNtMbtoBl8W15pURSC5kMw5a+wPAfsA0kXOMtbQJIAsH9X/iOcAFr9bHT/p/q/T1LQ+mkGzBZKYJGamUEGsCoXbwPeBa/mFQB8LOcf/k0BjDaiA+wYlKZg/EQc4D0wSwAF+pm4EUT3wQtJD/zCCgj4UHr9L+Sf8Vf84+DPU/BoxvlZAbUO+FTgRfInJsAjYFehT94DvqQJ8Bvw3wRgt8XtP07RgkfbWQ+o7/9TYcfS13oNQNflHij/ASY2wL4ErtV/Tk9NDP8Y6WmB6w9v5/7aZhWHccVLRUHw9kO80L6hBrUaFdu1IJIpFBWVjnlBNm84UFj7SyeSiSjiYMY1TROb1Rrb+a/6fO/n5OStlzmfc96TqKB8nvOc75t0fb/uugHCXxqwsgITlB8GLKQGyGeB2+kmcMX41QDAWw2o/wJEwzX+3/jjpgBdTwPgDjj9wgpdC4nKCNBt4D4yQB8C0gAI/od/9xNAfwq/gesWKkLQdwPK/cfmqwF+BiIDbsA9dBcUA74W0W8Bx03wHP8haNCX+CU/1LDl1pgRGRiGAWGBJUCO/0qRgNSAO+ibABug+MiAHgDAn9Pb4GufFviJAetJ8Ws0MCG8ykL8eMF0W+LdTchq4dJ8+V1Y+FV/4QDdBx9OA8APAcCANAEn7v/O6qCyO5/BhwfhREhcMldkoVVl/ya3q0ZxCGBAyY+L+c2BxbIKmAF3SgL8CEBUACQBmPJnwHUGrA9Wj1rOX6/woRRnRC4FFvoiKeGIWFANHp97wmuACehMD15e8bIYEVjIDKCvQ5spP+DVAZZwY62vf50jfAgU/H+rR8MHUUQk3pcpeey5ucfnm6gDVgLiLuDxx8KvZkFEIAy4UhoAAV62/1x5/EP08be1c/ry4VLKfxNW8PAJYbUhHmPVAzLC5wAUYHXA9z9LANAJfsUPwfSNEF+GcwPUAvsNKFx5BBw/7v8j/F7A0ahxSxVumCWtuWcff/wX+TxA/O5A3AMF/+zK4uLiAl2lAfRJ6Hbm31b+LAEYLDhQ//kPWzGBAwhBQ1Vh3ALlh2T0Ir4MLTT1MyGdgcCPMwB8SgBbIJpfCAfEgLskALkD51LVff6dMD/UPoIB72YhqGzcGk/25ujPx1/Ys/vhr/4T0eC3/OPiCNghyMvg3TCABH6W8tMw5fQhFH+Iq99Qfkv+aMnRQ5kL/40T7fHTT9OPRHb9dtiYyz8IMz+T8/678kMgn4XvKxMAJftPi+OHdpwfOgQ/6XD9nyWg+jf4o5f4h+PPzi833IHWgpVA49ftF3otA5KBLAH3sAHcAKLmBOh9cHVaI+eHmjv6sNQfg8bfS0BF17+pGvizUv4Twpde6jcgc+C3tARqAII+IpA6IF8GHrqyLQG4RgZcKwwA+rnVkn9g/KIxJ+Aq5h+jEjB/X2H6q6sqnJo2ibQ/x78wSgn4pQFFBnbjBKQF0Oj51TKQnIE71AAE4Bqkz0GeS7U6S0eV8psm9tTwVbMAqipQJJxVAR//sFT5T/aP6bdm5bfl5lFwzAIpA8oPxR3wrPJHAEoD9FPANrUB0Mdf/9qAVsJfEefQ+cmCwbpsoe8l1KgdVb7/9jqVpHb/+BV/au7p568rv2fgkyIB2H58CMglBsQZeOC2R7a3v6bhDQC+pcc/DZ7GDI2dvzIdMj+m6HCdmTENqWI1Sn76R+EVzdw8qTLjr754RQzgBMwbfzhwPSkBtv8YZ/MUBD8bcC++DcMBiA3Qh4Czp0ASnaYJHQl/YOGltcMlIDQZVaVKfD/qNf+sIu0fywPEkYB+o3TgQAJg9DQXCZ9nmQAzYBuKBMgRwLAEkPhXYMsDQPgdQ+sMQB/axPjjcFjNNCETg2besOL90vgrbx9iCThopEoOARng4v3HsqYGlA7AgIe3SVkCsodAcGHRAOA6LQdA8t9JHGh1we0maC8l8uCmtDQ6juZB4IfIgOfyEumHIBKAIfSsxVBUwdSAa6IIAMZlOMD0wh9//l15AXB1MAaCHxG4aQ+G4+Op/jF6BAZWHXMHGqeSACySBSaEYHFN+HMD7mcDwgHgk/ghQMxVnr77GPCg7/wdF3nQ+i7n36Srt0nXZPyPTVgfHbzCjbSCP4rgEqHzCcnLwJ4bcJYdCBVVoM4APgTpU5CrMiIBkzgAUxok+GDH2sPa6232oC8ng/56x+NCk18wptUajo5/zvvnZQY8NeDsRQbiEPwaCWDsMGCtPANhwJUsAcYfFjA6Llar4De1uoGP2SP+ngzVxmQwHu4JepCHBet7o8HxV9FFL+2gZPzQvvB7qQwH3vA/EWD4OABra2vGv5hEAAZYR1Cit88BKb/8Dnzo0G4AnVKDogTABKX/HtfHNKA/fj8eDMaj/lA1Go3Gg4Pjr37+hhT4ZgDRYxr/XFXIHdjVBOQG0H1gdgQehAHKzxZwAtAR4TKG7b+hFwGojcDFi3QEeoSf6PuP2QLT24UMXy3w+Pv+awnsn2DAshhAnwCNXSZCMIOfDLBOmJQAa4AC/EhAxn/o/O1Ou8LAmzbT03oI9ovE30PrPNl6WuWd49fzg90TMLsCQr9Xs+QRKBIAer0TrpU3QjJAdJWWd6+GBSKCvlwGoGLkSoa+wJGh8GNhD1gRAOd/GwMz7aaZN1HEDE3tPwegPgPLOf8aLxBlwBQ1gBNwRR24ui3faC/RCAMu1wQAvApu/LBkQvS9q9h/zICP/e+FBbVNJIHPY2b+6R5Y60BEIHZfBimNwDxLDJBWoIQfjcDCAFYZAMaFBRBeXCPuGMcuyBL0zi5DE1AG4BvwJyr4B3zjqD8Eb2QBcC3yIppRBNmAbWXHoFczoAxARfD5YFXt1jvcMi/1gLUlAQhFAj7AAH/gSw/N8vzrs7P79B/CVBPKCPxKd0HbfSxYhd8DYA5EDUAb3DwCl1j+FLhpzwNQNw63ROQDzd4WsW9R+Le8i2YeAOCHyu0Peub/ndmxYC0MKCKwFlqUmUcABoBd+DEUXgZagAh86Ogv+dtDghcLMHHBAtHHNQFI+YV+6vNPdA+iHwbucgBUFc8iAil/fgoEPz0Dt20CHxc74Am4JNJH4N2GvhiAA1DvwA3BReM4lXXQpGGNdL9R/g+ijfJ7mNQ6EtPw38puf/rY4HrHpZ+k4zSoAb/FCWAFf/HTcTJAxQmwCHAbGEt/xKAVARCV/O3B1iXtm8aDuUWgtz66eAd4lrDTOqODquHHc7NzgR8hYCOiDDbOiAPBHg6o0gSorl2UBOgRgLgPSvTC8BIIzELE7mfgyxB7AAEdF1ags6SJLhblx+4zPhbb/ah+SeeIUadUJS5EBH6RBET+g39NzsDMBFgAQI+pNSBNwBAGcABO1A3tmCZT36cNVGX7pYsqVuw87T6GKGue7Pj22CyfgOXCAjsHEoEn9QyclIAFws8NoI9wYFd8PgTY+HgQ/sgrwIkaaLswdwGDuscx/Abv/gZetI3qD8Q+pS8Kfn9car5zkjwCp+pPwJmpM2AGXNzkLsCMbl2gTuc6tACcrCHgIfZAV+Br21S84JXpOQCEX9KXN3/rm/YLth+jTnYjuA7+mRYY/mKSABPzwwFeoK4UAH8I/vSeBeBkLd0g5ugXt4GZigygBrLcQRfCEvQqo4/tBzxpn+CX/zICT+oRKFR+I8wNIHShNwNCN+gERADqNbFOYRs09B2odUA/hNA41fQ5FLufGhB9k5YhOIBFFYaUZ6CsARhn3ADmLwzASPvA8QOgch/ACZAANNsna8z7XvQM8wQAO/idniX4UIb/jPVMeP5gWdShJSwIWRncXVH8+gjUJwBL1yXwmN1+BKDZbLoNpR3DIM+lm7+B6dvPw/QK0ef4WdeMZ0cM7+Io8BQrIgL7HoAyA6xIgP9PQDQBOb/gd2m2ogQ2obbMWboB/lLaM9Kap85QRp+dfusatW/obYxUHgM1oJEa8NOpIgJRBMwALYKSgK5Z8F0XDSCIf6c7kXsA6Bkdrzwg+2v7G83JLAMYH9d5mucz8NdJSm+KtnFp07A2sDEz+igLePEIvJwYcIouT8BaGPBqHIHvv/cEcACC/zSaP5AHh3YCmq62v9FVPRioAdErbQML6FneNvPzaBj3OVuAMdU3L7afdUAGGH+YkBYGM+B68Bt+fQLAbwZsSRvkpA0i8PFmpztMDGjxJYo3bfOgnwbg/eiWF/xZx7hQ0TVPy9+zqnHbIqBrqU5SBDj+GKd4YBJ+/oXwVTaA6MEvBmCgD3TCT+pGCWDUFkYTSzN945HYMwNAThbU8efw2e7nj4pbw4hhWxyIWQiHgA1YFgNAjxIARQL0ThgJQP2LAACfZAFwdW9wCaAAKG2bkf1Nlof3s0Zx3CMt2gWGMv5i+5P8m/baoghBfQTezIpgODD9o+HbLAAia4E/ZUCXamBWAmACLfEGw4LRnBC/4bPOswPWLC3k/KqsZ3RC/wIvhg9ZNaw1YPes4WsEwoLFMzgBJE1AHgHgk7L9RzUcSwngAADWlnhDabAwDBhfQ+AKenlFuyzf/Y+KpqnJ8beuYXOC7/zt2QZUXgVB/9MFOgai9PtA1ACgO34YAH2XaagnQHMur0quPkQ0xnoEYv9d2fZ/hvGRbD8cyPsFPa8GRL8U3ARSGXvpgFZBLv8/Af+C8mMm9wFLgP0/0KIGCH83d2A9NcAy0G61gj0OQrMv/FCQJx5oqzjGJ2UtI/OekYGPazfD57W+CCxLAuQEYLK8CCxEDQD7j/z/gepFDehSAMKALzHTEtDiBRJm5EFccO2l6T+fROAzDFpMH5mYvrz7RQBIfYMPE06ognoXvIBTAAOsDJgFkQDQs3oegUv6Ew2z4B28Wg0U7ta0mjKhFg8+Alz04AIug5c3oeAvm0VBwu7aF+bEAMzaIvAyGwD8C6gDloDAx7QEkAW9qIGQFoF3MCBaJlwDEQADTlV68ZLy57LNLwPwjPLnx3/agCfkkza4m/CB8We5oAbsEi1t/wWWOHBGIpAmwALQI36rAdEF/Ttc8OLQSkAddf76uycA+x/4uGp3vwyApd/VbsZXEFyqMgKZAT8RPE0xgEKgRSASoAbo7osB0Qedf7A1Lgw4UQfgB75l4LzhY6mPv/PXBOBPys7tJ64qjOJVY+o16otaK6WFTlERtQwYLV7SWJSi9mKaEqMSY2PFxAhJDYmmCY0vjQmUFgpIGv9X13fba1/mUF3nMjNeHtZvr+/bew4zZ05n7zfUPpJgAHBUTQAA9g2A2g//ECNQ9AD84Q4BoH+zT607gHLYubcAvhGx/X19YPm/kRNQ++XNchTAYZgPBraLvBJaANspAAUA+oc8Af4roLD/Hey3AJCAu+yBjHq37lysekBjH3t9u9Dy6ke4p3Z98CF95hSsIPIIGIBNser+CeC9S7EWZBOEDIAiwDXsFsCXm0fZA0dqBu3L+/5zCSkAHf0/3BfrX+w2AxLAqwagfvuN3aVdseyCPQJQBK5LeRMggLAfBVADmCWAjhZY1MM9vfIBVfa7OyAXQGo/BO/Y7bSlrtkICAMTgxAoAUx5CwgxA5dsKsxXghoAQ2B/zviy0qkAMO6m47GVA2j8d9qvbhfIBhjD/6oR2PJBj4dWU+CA08cG4PZtBMAInM8jcMmaABPACoD8V4CqAPx0AgB8EhhX/wcjWJcSeLh/I9B2ALNf3Tb8nY1klEGILBBJmgePZAF4FwhwSgAMgQGIFui/gxkFcLFsgkcdQG573DcRwRiA2v/XrX+6L94BVDeLo38DwPQz/ykAdo6FwG0oCJzHFgnQErAm4CVAAvUc+AkBaAnQN7aSBB7IYN1KwGe/cv3TUf8QO6DK218OYBI7VtqtyIEA3rtd9QACYA0gARAB6CSAv+PE7+Bgkxc/YSXcJIAswreDCADyxj/sU+0CMJTyT/sh4SAAaJePVAmAywCM/3lNACcCJiD3f/UX7QDZj+B4EpAAWQeN0HWbfr4MAHrhQ+wPaAAIvqu2b3eNHwgABCwEB4oJYAWgBbAJQHFJgAAgAIB9yAPwSYw/fhjNALxVuBwPGhx6fSQAqBn/jgCw/ov7hVKeAEyzxiFYtBHwpSAAsAMsnIfePZ+KQNyzBByBfHIBCWAAZPcewJWwe20fWAcG4GtV2f6prvzTfwtA7E8yBrKJ+LwBcNsBuOqJkADcPpTG3xKAXQGcUAAjZpGO/RgnCW+Ct3j1uwHQ+m8ngMEAJjH+CiEYpCBMYVMSUEyDt6Hcv7QC1oBfGQUAlSZAFQFQAgmALITYAzzu6jpynyOxEuj2X8e/vQRG+9TWJCKgG62ThR1AEQmYUvtOQErAqiAmQlUA+O7PlIAvr8YvAToDfUkAYrgoBI5/Vg73fgj7GYAu+yUA+m8BjFgGJsM2/WevIwGT6Y3AwoIQWDD/DqA7ARfhHs4pDcSmLYQ8ADb8yXdwYCDu4zcTTZ3pZ/7pvqMBMgGSgawR1idsLIFeJADOPQIkwIVA3QMuQjQvIdBF4d1YCI0PlFKxklDdAQBXd/dvABT+W+1OZjVg403/bAUBYCI6wAISgF3l/knAAXzBACQCFAisE0AHAT9qAB3L/3r9f/AEcEbPhydDWQ8clIApBbBtABauLUBKwWUEmADYVwCeAGw1AawM70cJjB8gMvgnADSrX9rv/hsA1PiHjk+SgJ1om3tKwH4AUPO0XyyFDIB8aNsB+Md46h/Du3iHCXiICOAz/dtf4/+Njvybe78CMFCTpQrjLAdbCuOiqANwkQEAMAIOQBPgAZAdrulf9Pf/A/BAAUDff1b6by+A0j8vgZQ/GwRZCibC+Sk7Ff75xAFsGQAYN7EPFguBQ2JfE/AFe4CcywT0/x8A/9yLMChXfy0Be/9XNEDaD9nL7SoAZRTSamDqhALYM//UiiNgDRgAIyD+2QPgWa1/YwHAyS+K/jcAQwDQ2Dfntf0k1n81+kSwU/g/hd02YpAtAGgASGBGM0ACJ50AAMSXtwyAC97FNwCYTuHd0H8GsH4FAExE0LZ/Eujof/QPGASQE4CMgrrXScAATBYAVlZWFlayubBNgAKIDHyDDQhkj5LAPJgAzGIL8SmFhSABcPrj5f9m+neJ/ToAlK2EOO7MgO9WAX5ZfKL2D5UALnkCYN0Q6KeXmQB7MBgxDWAtHI5BgU8rGHcSgG8/o30TAYgq+1Az/ARwuAnAIs6LiiBqIS0D9mMdCPtQICCAVAL86pKNPzzrZntoNwDAprknB4ehe8yC6ccim+7XPfxtB3zffj3MAQxn7rFxl5eL+jDCSSBLQALANhgAmICrmoCLkQEyMApfcxowl7O+EQifPUgVQP/Mf+X/7e7xf18kZ0cwAY9BgBDUvQeAPXAlJgECUARG4JITAACzbwREt2j+Gyh9tvWUTwNhk5sT4bOJK1ECY5qAdvLDHwAPan+8YbwpUrCPuOf2Pfl8IAB9M0z/LIK6DQKAILiqBYAIQBeVgQkUzP8tdkFGnb6LBKwTAET7B+XflLm38FNCYMesLqpVL/5F1gF29kADEPYZAb84RgAYf5N/iUPk/kkA/0y64MAEBASe7l+hf89+2/1oH2rLP90pNSewt7iItEvgZefQZ/UQPXAD9nMA56ILtAlIkgiYxDalAK72y2kg3OuZu/dAyD/8WF/9MP9R/V0XwCL/xyCc5VESMLy4CN8CYbFYCSAU8Sp64N5NAqCsDbIJEMBVScCtIPDND5n/H6QAQOCEdUF3HxD4klkYg/8PLQBV/Pl7ad3tjw0Q1pMsA5uIgMVeQHj64yQNIiYBtgAZfQgR4ExQJuDHmAR/D/8/AMDXsI5DdQsqm8BsBoGjP4vn0N0rP1zvAJB//rWq/9q/D3yJYGdRA6BFQAQ4DAqqw9eB2zdvOgDaZxvkRIhZIH2DXwBcDQBqHwDkQ+14eatqAux4DkMeoyruXZHvPjT+Ofqmjukv818A0G6wtQi5ddusF0QJsAUIgN8WFi7D/+VzJgVAAiyBHxUAhC+xiX3oa0oIQLdujflKQEfa7OLsDyZ7+s91AOB3Pvlzye34w34NoMh/HYFhA5AlINci3wuvSAAuw6xavywQuBpSRQ2kBEBXDEBFwPxDm/F+aLZS9Q/GrqMC1H85/cvsb+IHAAavf2m/JiBNQCGkEOQCAJsEewjAb7/BrJnvigAB/GgA4B87ARQJuJJqYPZArV/h9/7Ki99F+Lv6P/PfyJoACGBzAhoFChVgV4MUwOWFc3kCCCDvglYC9vVtVdgnANMVqwFrAgdplwD40Q8r/3b51z3/txIoux4AJyDmmQMCmJcOIC0gEsAIdCQgKoAEKgTy71gDB+nBdQAI/wMXPzg6/LP+g8AHVQSG1HwhEoirQRPWAi+7dSCYd//QIABMQADABU07cF1HauCK6B/OA93avp4BUO+Mfzn8fPvf+C9/MosEpAag8aIERJYDzgEggArA6HsC5ueFQQ3gkpeABYA1AMG3CQwSgbETnAc6db8JAPx31L/5J4D2F7Owf6B7ENhdXI0aoGI6iFXQ8s2b6AAWgJ9//lnME4AsB2dAIAHgFEAAMvCZtAag+1kbHJqNkz1hBbADMP3038a/+c28LAAiQ+A6OYQA6E6ldsBV0E34dwDnfsY+D5UJIACMf7QABqCS18CDsg3SOp9uf84AtG/9Wf2dy1/aJwArgyX9RzuWgGBAZS0QBcAEmOa1CLgaJIDnpQIaAESQA0AblIsCCmBIdhxVCHZRAc0X/zn3t/5pnwBY/5SHYGlvFd5Xx3GulFpgb1n9MwHz2ByASv5UEE3gSQCA8hJoAwAedRuEX9mwk4OeL6QAcPFL/53tn+Xf/lwOtXRsaenY0CrMrzYBKFrgbxEAAHCxCvQieQ0ACFoAlMZCIxAXxmAWMgi26b6OALADDux+NN+Mfwtg2o5pOS19sCQENlYXJQBCYRxHHYC2BcpG/wAww2mAAH7EDVxMrICKwHX8S74jUvtGQU/2uGsdkA2g6f2mgf4ZfwKgLANLSydXxb0icK0yAEckADmAeSAY/Xl+dHQeGEAgpoEZAuDd+zgJmMZ0U5l/SC4NTr1lAKA5bFAg2GYHzH4pPgfQ7d9U268QLEF3hYDEQM84VGkOFP/RAuAeCEZFFoEVAgABA0D7SuB6IkBhVJ3A53xDEO5xThzuMwCsfyn+7sVPs/4hgHBPLQEB2qAZt14gT4sAWAVAmP7UPgDMWwAsAjPoAYMAMAFyPSdCQAKobgD4/FTeBeYm5Mws9BmA8meyu6/9Mv7Y2vy3CDQClKcgOgADwP4HBCKLwLmVmRn41xKAagDXr4v9H+ifGbgO4T+qIgACc1b+eHaP/r0B9Duq//jx3b29rQ3X1tbe7u7Jevw7tLS0tVqrXAWrfxDwBojxH5UT2yAQeAIA4CUCAIG4i4td0cIhAocPIQGACMhaYMojMJtvCADv/RwNsF+O/tnDexs769tzcz3ss3Ozs71eb67nmri7v7G1d9KHv5vAV0MNgHoKgHTw//jj5z/EvkkJlACePfQiAcBeBkCMi+xRCWgE/knLQe99OGy/92EA8G//FZd9Tx/eugfnFKzDf6vt/Y29k5n/r3yjNjoDsMUASP/D4dZ187dE8L+gNfBuDYD+FQAFACIAgPCJMSwHIwLY49QvCiCb/mB+Y108z85RcC8HznKarSns7M1U3gPBUh0BaYHWAbeXAcD9ewJGM/lEcE67gDVBAjAFgBh9NaQA2AX6fFPIVQB0j/6L/nd4C+aH5nDImbI60ANnIWHexzMI9jsB78ntIBSHI9gYGICjR+ZTAMy9A/jDMyAR0HkA8hpoAfBWPpWI4D5XQ2HfA8AGEPYPb2yrb84Vg4UE0D61ub/1VRIQrE1Pr2F7b2i1h83EKXBf/AcAcc8AsAewBgzAM4MT4IIfJMDkAIBgln3QNJsFIC0AZOw3hyhNQKeQAOy0nzHYyxHkXaBXd8AiAAEAR0wDo04AALwHPAUA3QF4DTsJMAP6tnhqBATEu6tv/tP4n76zTt+y6Qs9wEF3ymqgS5sbM04AhbAm29pmr0f/fBvMDugRGC2lBGYgJAD+HQAJ0L8BoMoQ3GMRRATuZP4BYHhjk0tlWlcNToBs3WIMtAzW9no9+JejLgB2gI/U8kfYmAFNgAFgAtoCaP2/FgCMgRSBL4dMd/u5/8M++LZYnMAc4SMvmxKoO0Iv2mGrcY/BltmXA7rbE/vw3xQAhNH34Q8IKkUQACwCLxx6rADQjP8b2AZk4AFmgqIN7Ga3voV996fmITzB5gFozBMC9v+AQLWwqgQ4A9QFAOno0zwToDpfAWAHoH1jADkDpuC+LYcmT42rn/X0ZwCzPzE0MTE3IeM/FAlQFHje0Q57B9dAi2CjVyyBdqIAIPP/EQBg8HE4BJ8Iw78n4Onk/y8HkI9/CEFgBlRlG+hH/mHf/NuwT5hvP+P1rGxFAyyrgHXQhSAAXNssGsAyAfj4W/0rAPq3ElhRAJcA4IkcQBMAOKI0AmRwIbUBZOCON4Bhs2+b7ZZ+tS4IojOoPAqMAHUgguXltbXltT3xHw1gYbnugBp/kXIoegCnAQB4XAG0/nlVX8o6EMSyEEIbCALb9n/079O+JgCGgwIeZnFoEeCZcTAKZp8xEM2lbYD2Z0AACHbYAOfNPwNgBFQMQERgRmQA8IuT1RTY3tFMKbiiDwiDf45GI3yg/8edTfiESWfAk21zeCHuxbofegox/Q+Pwsay6NpQrAD22gIQ53pAZQKg6AHvAsAjBuAvCwCcVffzAwA7vBUIAYdw3wiM3Jf/48G62mUGsFebw4nh50YRgQWguw6EwF40wOXlpgN+hD2pXg3PpB7wCACwA0QA2m+0GYiog9A9JTBhw+9Df5D/WS8FeXAIOLI2kFrhw7V/DgT24Z8NkAGAfScw+qluXAxFBM5bCTx66FB0AAIob2lH4ZUAyBisg8DsAxl+eJMAQAGAIEjATt4WsUwwAL6r/VxD2LpgrC4O7YFATyeAfAnkAXD/nz4sAfjl6efVP0qAARCTvKOHHZoCy4ApCNwZe+3OOBZEUuO5e7LgFv9SW4IslHxlyNWwusauh51b+QIIyZ8/cXQbHGL86d/cf4qdTcACQAD469hhBUD/TQN4G7uLCAKAzAnj98b66/q+CBkwhVUcAaKgwDYJ/xMegCHPPk5BQFh0MPAF0OL88sYkht8bAN8FswF4GTADBiBWgs8CwIuSgDoAF/hnvVJMgan/2oNTRz5GJ5QMBAKPerite0L+JNogACgFaM4QYPNz63/SF0AnNpZXNP91AXgEIgHsAZn/GQfwDOyLCKD5Rnsfx5v9Nx1AMHAMm9oJfUU0MUiKoc5BahMiWw9g/MM23aeaoLJLIJPivl4BRP1bDbgGJ+ApAHjMAOQVcKFw3+/DPvwrAgj+k4TVuhPA+4JeTYBloQeHPxBwGvAnZp/55+7SN4Dx5cibzD9nAI4/xCbAJsgEvAAAT5ctEPYvXKhuakf12QsoJfAxCIw7gQ4KEgI9kwMB6FP4rHoAdxzuf4T+1T6U/EM+/h0AoCwBTwDA46kCxkiAf9fq93lbU1EiIIj881/3lMAUvrTERtApLpZqyehDDEC9M/42/6t7jn8RAHOvJ9GgaVAWggDwCAFAN8bMfwqAePfd1Q8ElN1sDgQYgg6xIKAKQk8OH+0O+/SP26aGfwLIGgBkCEaRAUlAaoPwr8KXBrAQ1HmQADwAr1+wHoDh7wsBV98gvF0ikGXC7sgrbAQMQZc4TRICJV47hz/8H9li/MM/J0DzzgQwAkUCsAyAXkpzwI0bYzcUQPhPACimoNDwSDQChGBubuI/qiVA89Uew/+xtf9RWC/8Q3kDZAKcQMcyAHrG/EM3UAL0/7oCoP1Xcwb9AgEycdpuOfifQ8CVUgXAoEQK2uG39neO7lXW/4IAAwDVACDxLwSeUgBPGwD6B4BIAOwXt7QqYoB/r977ViobJ17xXkgEne5dRFCItln9kxz+Izs+9ysA5p/+KSTAFoOpBUCcBESPA0D4v3Ej9w8ZANinLAtWCYDAzz9YGWgIJlcflgJeLxgsdU77HH6Jf9b96wUQ/ZcJ4CwQ7wRsEoAeZQLgvwTA73O3CMCm1s5RD8EIPrrYe3gh2DujLgA+J9C+3yz0Zlv+HH8CSHXQtIB4M/juo4dUzzMBJQBIC6BVtIRwjif64riEIBCsdiLg+6LODEz0aF/Tj7WPDv8e3/wX/jkD0L7tQDA4AeiB3gXZA9S/SyqbAajFnqhh0CfQzgmpgxNThmCcDLpAdKqnMvueflQ/F38Hjz81ygAUk6D2wOiCat9LAHL/TuDVbhUTpJ2P4/MDCQFjcPCaqB1/iOGP9E+M3hTV/q3+sdF+XQFcCfN6kLSAaAK6ChAGuX8I7gv/ZwZBwFbd/rVGAAZD/y8D7r6w38OFwNY/pP47AuAI0iTAOUDWga4X473wjQrAoI+0d3EwCHbecgSYEYzBuNTzAf2gY/BpH5e+9VJw65/V32m/bYKoAGkBoccsAfks2DcCdQCwq/AwgACzQASIgc4JqwhCXQ3F2yJ96BXuZeL30Yd9UVf+OxoAFwJ5ACIBL4R/rAQ8AFAEIAHgLR2S3vfHzqZABGRgEExptDkJ0rslfyT/0Zwhs88CoP9y/EeTCKCzB6ICQi/pm+G2BACAovX3/c4Gorocompw3poAApsVjYFBSBgoeod5uLfoq32v/RoA819eAoFz3UzpzUC9DJRFwJNqnTUwFj0AcgD1dzrju/xJXUGIyjl5V2MABg4BFBSDgaAWoUmId8Y195j49veWkzgDlv1fpGlX/yKF4BNBcTGAq4AnMgCPpiag9rH1X/cA/EoC4fwYDiIIKaMWxta2/14/GACCUQCHWiMq+6kg/obw0N41Mb6Ggx2ge/4f1RM3fc0CYAs8f0krgHqxnAUusAQq/3Rv32tXBl2N8YwyOYlSUAaA4BQcBMWfSUrm4X4H7s15HoBknzMA4x8MrAxsHTRKAvU7QbbBKgEO4NVIwGlYeT99pUFPOGyHoi2KX86TbJvDW6gFhwAKygEkku30o7FmHu6PbG9cW7PBl4d2BoB7VVn/Mf66Q6j/rgDYKogRiGkgawF4058K4PTpVACNLAZymP8ztZTP7samQRAOLlhW2+HcRn5qe2dmbc3th+Lyf9kAIdqPAOR1UAJw/1wE5BEggJgFISQgAHgABgOA2AzkqP0bvuG9nc1xWASIVkfN+9btNZfaX+uYANv6H/UDmz31BAz6qyBbICPgABgBUdh/9fSZM6cVQJcMQRRDq2zy2MUnxu9uTqyOHDmqOjI1NbS5vbOxNbO0tLaG3aXu6V8BVAEY5QogtpgCcOqqgBnOgXkE6N8yEAkwCPxWd5fMXetcdtZPDnGpFc2HmP92BqB/dcwm4C8+yqbAUQaAHaCIwFhFIEsAAnD6YQDS/NAMPHY5+fnYmaX3sZXu12xbSwS0+xX51w7QOf6Q9/7Bw99cDGz1CPxn82DfaiBmAahugh/IaXhwDBwDB9/+6RJ23+AaEUjuVeHfnVf5p//mCmAQ4AJAX5d/EWMAuAYo9Jh3QVXZBdEDAOAs/Wdf7tSzZ8BEwyaOP3zL0Z0A+s8SMNA/lwCcAXyvA8DxtwDwbVCpR58TAFwK9Z1AGYGzdG9nEf+Bq1gu6iv3zvF3BAwACbD7037rn1MACRQtwOy31wLZAes+2DQBSLqg+T8r9ulf86/usctWSQccUsNnjtG9RP8Y7ScItK8EOPzWAJJ9NsBR+rfUKwH3zjVw9akAdsBGz3ApxBqIAIDAaU2Al746H/5gePgDVw1hCf0uhh0vfGua/xrd19N/W//4LrT45x9BiUDEK+H2T8I/AYh/FkBbBDealYC6x24IIJh3Bm4dDMDBGTQQuHX5h6ax5/4h3Boe9pv+d84DYO3N/uSBs8545UXArABoXwLw5KOHOvVIXgNsAgHgrEi8GwMxHgoCpBBn9WxP3L4hYOPHN0AQgOks/V8pghj/azH8Nv7zVgFOADIAFM2XCwDOAN16LACwC8osQAAQnGMXJdfHSaBJgvrFA31XCdDvgDAAX4n929jUv98U7vLlFf82+LwkYBT+1X6a97KCkIMfEM8nQGwsgK424ASgvAaQAQUgXfCsRiAYwDn8Hz+OAximiQAHfIvUvj8WUuc4sLnM/W0WgN8STMcf0gTo+AcB2iaK0RD9138LOLANtF2APUC64FlxDgZmH7ax47BzLSkF2MfRaBoyBmF/TbL/3m3VtaQFIRD2kYBRBCAEAhECq4IMwDz2wv9BDYBtQAi4f9YAS4BtQCnoNGAR8BywKzAK0JId2vH4tVBjoOYh/7XoZRJQ97wlmBYAirr4MlAqAP9ILPZEoB7/J9kAugm8DACpBIiADLIeYC7NOxkcnwYGmCxugkEO04V93XX0Re6e/oXAyoLZRwSg5I8UfOCr3teO/2H6P0BPpwio+f6vv/pKiCEYzsQEZDJz8MqTGaf/TF/F8GsAVOV9oc9FA4BgrBJ983nr/zwvAvwvAkxAMRNk9mUHgW6pZ2NCtfbRAGGfHYD+IQUwLxVg5rDTcoWBX5Mtxp/+H6rHog1eIIHTTQaIQDPQyQD1EF7xorFvAHzscdB/DWAeAEZBwPtbGwX6Z/t3vcsV4H8jwC4A+0bg1wzA8Fmal/NxmQs7ExAg6D//Vvx708i+IIAMAX8fp0oAlAY4eaVvumf8PQD0/38IeBfQUxYBIggI0PFh+m01zYciBCenxbnsMK8A6J8JYASgPAE5DrpX87V95P9/6d/izp+1kRiI4l4vKOvFdvBVKY642ebKI7AEXLm0K5HmvkUI3PeHe9LM5K2klTnsmPz0x06KwHt6M1pIsd3TXysCMcEiAGZqANCDEogOW/z8PHuoH4bh7W2I8g15S7ae/8nkw4CPsxgQjjdLwJlDofyT6H+o6q8/D0xrAPz+WY1AbIMX9A/6CcnxR3wMyuswFQ/5StAPRL95AF1ngxlg7LX0Vb4ZYPf/NQ78kgjIZYgAvGMkjfAZg8CDug8DAj9ggw1T9HXgYgDW+DoKagCYWBCwJAS93Hn0qfzxSv1guQ4ZeDFgASPAEJTkwmWXGUkcCPKB7qMhAQhFAKgfU1C91B2X2EP5Wv79cnEd7acD75oBjMQE1sB/ZMAMqCbA4/iVUwTypQ+YB2gEMgC/qnZA9dTP9ndVGaANGNGCIgVVihgwBKUJwHtsdIAWiAMHyJeN0ifYr6byR3Bl/FkGvAmyDBwnPGfSGYecIawCy4CHAZ4OKAcxAaI+dKAUDvHYOQ6UzssP7JaL23CP9i8CZoBlYKTdkPL3WQXEmTng4xbVez96YAaEhYP8ozkQYepDmOSMlYU//pmVW9xOiypgBhILjvSAHTE3oWTI8TEE0I8ZGDFpAQi3GU2ow9r3PP6badZsBOIA9BtHsq9QGoBRWGA5MCwFYUghIAtiwrwRvPdOIn/TUMPNdfCShQBjzoNYCHlH0L3qgRf5r/pdsVaAKTmAOig0+Vgfc+oPo+A3bvGVdFv2gawOaEJZD7waZcMigwxM4NkRzQEM2mClcNKQJ4mPG+Rjp/yvxq1pgVC3YC/7bDVgowWYZoHXGfGAPmAG+OJUOeyTjpB6KOdrdUfIvwdN91hJAT3IfYDoI2MwfzlMrwa64DPGBFEr/YHSgfcbtL670bTbLAVhJNAEpqFoCLXeCNKCyCy4jA/q3eLONG6tJogBrISUoidgS/uCUvGAPmQ2YIRNpxjjw+dq1/Hs78vStf32iZUwfUC84MM+8YF1gZXfD9hYEIqv8rDpO3d/8WUWOviwfRITFH677ENigzBTEjqJxySrVd/vOtcsvpll41zXtW3b9zAE/FAgXGb+4CgWpGmQNfPYuFI2oAe73a7rnGu+RPc/7NDmX/6EDAkAAAAASUVORK5CYII=", this.supportedTransactionVersions = null, this._readyState = typeof window > "u" || typeof document > "u" ? Be.Unsupported : Be.NotDetected, this._disconnected = () => {
      const t = this._wallet;
      t && (t.off("disconnect", this._disconnected), this._wallet = null, this._publicKey = null, this.emit("error", new pa()), this.emit("disconnect"));
    }, this._connecting = !1, this._wallet = null, this._publicKey = null, this._network = e.network || null, this._readyState !== Be.Unsupported) {
      const t = (r) => {
        typeof r.data == "object" && r.data.__glow_loaded && (this._readyState !== Be.Installed && (this._readyState = Be.Installed, this.emit("readyStateChange", this._readyState)), window.removeEventListener("message", t));
      };
      window.addEventListener("message", t), eo(() => {
        var r;
        return (r = window.glowSolana) != null && r.isGlow ? (window.removeEventListener("message", t), this._readyState !== Be.Installed && (this._readyState = Be.Installed, this.emit("readyStateChange", this._readyState)), !0) : !1;
      });
    }
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get connected() {
    var e;
    return !!((e = this._wallet) != null && e.isConnected);
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== Be.Installed)
        throw new ni();
      this._connecting = !0;
      const e = window.glowSolana;
      try {
        await e.connect();
      } catch (r) {
        throw new Hr(r == null ? void 0 : r.message, r);
      }
      if (!e.publicKey)
        throw new ga();
      let t;
      try {
        t = new fe(e.publicKey.toBytes());
      } catch (r) {
        throw new Gr(r == null ? void 0 : r.message, r);
      }
      e.on("disconnect", this._disconnected), this._wallet = e, this._publicKey = t, this.emit("connect", t);
    } catch (e) {
      throw this.emit("error", e), e;
    } finally {
      this._connecting = !1;
    }
  }
  async disconnect() {
    const e = this._wallet;
    if (e) {
      e.off("disconnect", this._disconnected), this._wallet = null, this._publicKey = null;
      try {
        await e.disconnect();
      } catch (t) {
        this.emit("error", new Wr(t == null ? void 0 : t.message, t));
      }
    }
    this.emit("disconnect");
  }
  async sendTransaction(e, t, r = {}) {
    try {
      const o = this._wallet;
      if (!o)
        throw new Et();
      try {
        const { signers: i, ...c } = r;
        e = await this.prepareTransaction(e, t, c), i != null && i.length && e.partialSign(...i), c.preflightCommitment = c.preflightCommitment || t.commitment;
        const { signature: u } = await o.signAndSendTransaction(e, {
          ...c,
          network: this._network
        });
        return u;
      } catch (i) {
        throw i instanceof Nt ? i : new lr(i == null ? void 0 : i.message, i);
      }
    } catch (o) {
      throw this.emit("error", o), o;
    }
  }
  async signTransaction(e) {
    try {
      const t = this._wallet;
      if (!t)
        throw new Et();
      try {
        return await t.signTransaction(e, this._network) || e;
      } catch (r) {
        throw new Ht(r == null ? void 0 : r.message, r);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
  async signAllTransactions(e) {
    try {
      const t = this._wallet;
      if (!t)
        throw new Et();
      try {
        return await t.signAllTransactions(e, this._network) || e;
      } catch (r) {
        throw new Ht(r == null ? void 0 : r.message, r);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
  async signMessage(e) {
    try {
      const t = this._wallet;
      if (!t)
        throw new Et();
      try {
        const { signature: r } = await t.signMessage(e);
        return r;
      } catch (r) {
        throw new $i(r == null ? void 0 : r.message, r);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
}
const ey = "Phantom";
class ty extends to {
  constructor(e = {}) {
    super(), this.name = ey, this.url = "https://phantom.app", this.icon = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjM0IiB3aWR0aD0iMzQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iLjUiIHgyPSIuNSIgeTE9IjAiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM1MzRiYjEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1NTFiZjkiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9Ii41IiB4Mj0iLjUiIHkxPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii44MiIvPjwvbGluZWFyR3JhZGllbnQ+PGNpcmNsZSBjeD0iMTciIGN5PSIxNyIgZmlsbD0idXJsKCNhKSIgcj0iMTciLz48cGF0aCBkPSJtMjkuMTcwMiAxNy4yMDcxaC0yLjk5NjljMC02LjEwNzQtNC45NjgzLTExLjA1ODE3LTExLjA5NzUtMTEuMDU4MTctNi4wNTMyNSAwLTEwLjk3NDYzIDQuODI5NTctMTEuMDk1MDggMTAuODMyMzctLjEyNDYxIDYuMjA1IDUuNzE3NTIgMTEuNTkzMiAxMS45NDUzOCAxMS41OTMyaC43ODM0YzUuNDkwNiAwIDEyLjg0OTctNC4yODI5IDEzLjk5OTUtOS41MDEzLjIxMjMtLjk2MTktLjU1MDItMS44NjYxLTEuNTM4OC0xLjg2NjF6bS0xOC41NDc5LjI3MjFjMCAuODE2Ny0uNjcwMzggMS40ODQ3LTEuNDkwMDEgMS40ODQ3LS44MTk2NCAwLTEuNDg5OTgtLjY2ODMtMS40ODk5OC0xLjQ4NDd2LTIuNDAxOWMwLS44MTY3LjY3MDM0LTEuNDg0NyAxLjQ4OTk4LTEuNDg0Ny44MTk2MyAwIDEuNDkwMDEuNjY4IDEuNDkwMDEgMS40ODQ3em01LjE3MzggMGMwIC44MTY3LS42NzAzIDEuNDg0Ny0xLjQ4OTkgMS40ODQ3LS44MTk3IDAtMS40OS0uNjY4My0xLjQ5LTEuNDg0N3YtMi40MDE5YzAtLjgxNjcuNjcwNi0xLjQ4NDcgMS40OS0xLjQ4NDcuODE5NiAwIDEuNDg5OS42NjggMS40ODk5IDEuNDg0N3oiIGZpbGw9InVybCgjYikiLz48L3N2Zz4K", this.supportedTransactionVersions = null, this._readyState = typeof window > "u" || typeof document > "u" ? Be.Unsupported : Be.NotDetected, this._disconnected = () => {
      const t = this._wallet;
      t && (t.off("disconnect", this._disconnected), t.off("accountChanged", this._accountChanged), this._wallet = null, this._publicKey = null, this.emit("error", new pa()), this.emit("disconnect"));
    }, this._accountChanged = (t) => {
      const r = this._publicKey;
      if (!!r) {
        try {
          t = new fe(t.toBytes());
        } catch (o) {
          this.emit("error", new Gr(o == null ? void 0 : o.message, o));
          return;
        }
        r.equals(t) || (this._publicKey = t, this.emit("connect", t));
      }
    }, this._connecting = !1, this._wallet = null, this._publicKey = null, this._readyState !== Be.Unsupported && eo(() => {
      var t, r, o;
      return ((r = (t = window.phantom) == null ? void 0 : t.solana) == null ? void 0 : r.isPhantom) || ((o = window.solana) == null ? void 0 : o.isPhantom) ? (this._readyState = Be.Installed, this.emit("readyStateChange", this._readyState), !0) : !1;
    });
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get connected() {
    var e;
    return !!((e = this._wallet) != null && e.isConnected);
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    var e;
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== Be.Installed)
        throw new ni();
      this._connecting = !0;
      const t = ((e = window.phantom) == null ? void 0 : e.solana) || window.solana;
      if (!t.isConnected)
        try {
          await t.connect();
        } catch (o) {
          throw new Hr(o == null ? void 0 : o.message, o);
        }
      if (!t.publicKey)
        throw new ga();
      let r;
      try {
        r = new fe(t.publicKey.toBytes());
      } catch (o) {
        throw new Gr(o == null ? void 0 : o.message, o);
      }
      t.on("disconnect", this._disconnected), t.on("accountChanged", this._accountChanged), this._wallet = t, this._publicKey = r, this.emit("connect", r);
    } catch (t) {
      throw this.emit("error", t), t;
    } finally {
      this._connecting = !1;
    }
  }
  async disconnect() {
    const e = this._wallet;
    if (e) {
      e.off("disconnect", this._disconnected), e.off("accountChanged", this._accountChanged), this._wallet = null, this._publicKey = null;
      try {
        await e.disconnect();
      } catch (t) {
        this.emit("error", new Wr(t == null ? void 0 : t.message, t));
      }
    }
    this.emit("disconnect");
  }
  async sendTransaction(e, t, r = {}) {
    try {
      const o = this._wallet;
      if (!o)
        throw new Et();
      try {
        const { signers: i, ...c } = r;
        e = await this.prepareTransaction(e, t, c), i != null && i.length && e.partialSign(...i), c.preflightCommitment = c.preflightCommitment || t.commitment;
        const { signature: u } = await o.signAndSendTransaction(e, c);
        return u;
      } catch (i) {
        throw i instanceof Nt ? i : new lr(i == null ? void 0 : i.message, i);
      }
    } catch (o) {
      throw this.emit("error", o), o;
    }
  }
  async signTransaction(e) {
    try {
      const t = this._wallet;
      if (!t)
        throw new Et();
      try {
        return await t.signTransaction(e) || e;
      } catch (r) {
        throw new Ht(r == null ? void 0 : r.message, r);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
  async signAllTransactions(e) {
    try {
      const t = this._wallet;
      if (!t)
        throw new Et();
      try {
        return await t.signAllTransactions(e) || e;
      } catch (r) {
        throw new Ht(r == null ? void 0 : r.message, r);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
  async signMessage(e) {
    try {
      const t = this._wallet;
      if (!t)
        throw new Et();
      try {
        const { signature: r } = await t.signMessage(e);
        return r;
      } catch (r) {
        throw new $i(r == null ? void 0 : r.message, r);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
}
var hi = Pr.exports.Buffer;
function ny(n) {
  if (n.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var e = new Uint8Array(256), t = 0; t < e.length; t++)
    e[t] = 255;
  for (var r = 0; r < n.length; r++) {
    var o = n.charAt(r), i = o.charCodeAt(0);
    if (e[i] !== 255)
      throw new TypeError(o + " is ambiguous");
    e[i] = r;
  }
  var c = n.length, u = n.charAt(0), d = Math.log(c) / Math.log(256), w = Math.log(256) / Math.log(c);
  function v(E) {
    if ((Array.isArray(E) || E instanceof Uint8Array) && (E = hi.from(E)), !hi.isBuffer(E))
      throw new TypeError("Expected Buffer");
    if (E.length === 0)
      return "";
    for (var N = 0, T = 0, U = 0, P = E.length; U !== P && E[U] === 0; )
      U++, N++;
    for (var F = (P - U) * w + 1 >>> 0, O = new Uint8Array(F); U !== P; ) {
      for (var z = E[U], L = 0, W = F - 1; (z !== 0 || L < T) && W !== -1; W--, L++)
        z += 256 * O[W] >>> 0, O[W] = z % c >>> 0, z = z / c >>> 0;
      if (z !== 0)
        throw new Error("Non-zero carry");
      T = L, U++;
    }
    for (var j = F - T; j !== F && O[j] === 0; )
      j++;
    for (var Q = u.repeat(N); j < F; ++j)
      Q += n.charAt(O[j]);
    return Q;
  }
  function I(E) {
    if (typeof E != "string")
      throw new TypeError("Expected String");
    if (E.length === 0)
      return hi.alloc(0);
    for (var N = 0, T = 0, U = 0; E[N] === u; )
      T++, N++;
    for (var P = (E.length - N) * d + 1 >>> 0, F = new Uint8Array(P); E[N]; ) {
      var O = e[E.charCodeAt(N)];
      if (O === 255)
        return;
      for (var z = 0, L = P - 1; (O !== 0 || z < U) && L !== -1; L--, z++)
        O += c * F[L] >>> 0, F[L] = O % 256 >>> 0, O = O / 256 >>> 0;
      if (O !== 0)
        throw new Error("Non-zero carry");
      U = z, N++;
    }
    for (var W = P - U; W !== P && F[W] === 0; )
      W++;
    var j = hi.allocUnsafe(T + (P - W));
    j.fill(0, 0, T);
    for (var Q = T; W !== P; )
      j[Q++] = F[W++];
    return j;
  }
  function _(E) {
    var N = I(E);
    if (N)
      return N;
    throw new Error("Non-base" + c + " character");
  }
  return {
    encode: v,
    decodeUnsafe: I,
    decode: _
  };
}
var ry = ny, iy = ry, oy = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", Cr = iy(oy);
const sy = "Slope";
class ay extends to {
  constructor(e = {}) {
    super(), this.name = sy, this.url = "https://slope.finance", this.icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iNjQiIGZpbGw9IiM2RTY2RkEiLz4KPHBhdGggZD0iTTI3Ljk0NzUgNTIuMTU5Nkw1MS45ODI2IDI4LjA1NzJMNzIuNjA5OCA3LjY1Mzg5QzczLjg3MzQgNi40MDQwMSA3Ni4wMTc4IDcuMjk5MSA3Ni4wMTc4IDkuMDc2NDJMNzYuMDE4NyA1Mi4xNTlMNTEuOTgzNiA3Ni4xMjY4TDI3Ljk0NzUgNTIuMTU5NloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8zNzk1XzI1NTQzKSIvPgo8cGF0aCBkPSJNMTAwLjA1MyA3NS45OTNMNzYuMDE4IDUxLjk1OEw1MS45ODI5IDc1Ljk5MzFMNTEuOTgyOSAxMTguOTI0QzUxLjk4MjkgMTIwLjcwMyA1NC4xMzEyIDEyMS41OTcgNTUuMzkzNyAxMjAuMzQzTDEwMC4wNTMgNzUuOTkzWiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzM3OTVfMjU1NDMpIi8+CjxwYXRoIGQ9Ik0yNy45NDcgNTIuMTYwMUg0NC42ODM5QzQ4LjcxNDcgNTIuMTYwMSA1MS45ODIyIDU1LjQyNzYgNTEuOTgyMiA1OS40NTgzVjc2LjEyNjlIMzUuMjQ1M0MzMS4yMTQ2IDc2LjEyNjkgMjcuOTQ3IDcyLjg1OTQgMjcuOTQ3IDY4LjgyODdWNTIuMTYwMVoiIGZpbGw9IiNGMUYwRkYiLz4KPHBhdGggZD0iTTc2LjAxNzggNTIuMTYwMUg5Mi43NTQ3Qzk2Ljc4NTUgNTIuMTYwMSAxMDAuMDUzIDU1LjQyNzYgMTAwLjA1MyA1OS40NTgzVjc2LjEyNjlIODMuMzE2MUM3OS4yODU0IDc2LjEyNjkgNzYuMDE3OCA3Mi44NTk0IDc2LjAxNzggNjguODI4N1Y1Mi4xNjAxWiIgZmlsbD0iI0YxRjBGRiIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzM3OTVfMjU1NDMiIHgxPSI1MS45ODMxIiB5MT0iNy4wNzE1NSIgeDI9IjUxLjk4MzEiIHkyPSI3Ni4xMjY4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNBOEFERkYiLz4KPHN0b3Agb2Zmc2V0PSIwLjY0ODU1NiIgc3RvcC1jb2xvcj0id2hpdGUiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzM3OTVfMjU1NDMiIHgxPSI3Ni4wMTgiIHkxPSI1MS45NTgiIHgyPSI3Ni4wMTgiIHkyPSIxMjAuOTI4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4yNjA3ODQiIHN0b3AtY29sb3I9IiNCNkJBRkYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRTRFMkZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==", this.supportedTransactionVersions = null, this._readyState = typeof window > "u" || typeof document > "u" ? Be.Unsupported : Be.NotDetected, this._connecting = !1, this._wallet = null, this._publicKey = null, this._readyState !== Be.Unsupported && eo(() => typeof window.Slope == "function" || window.slopeApp ? (this._readyState = Be.Installed, this.emit("readyStateChange", this._readyState), !0) : !1);
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== Be.Installed || typeof window.Slope != "function")
        throw new ni();
      this._connecting = !0;
      const e = new window.Slope();
      let t;
      try {
        ({ data: t } = await e.connect());
      } catch (o) {
        throw new Hr(o == null ? void 0 : o.message, o);
      }
      if (!t.publicKey)
        throw new ga();
      let r;
      try {
        r = new fe(t.publicKey);
      } catch (o) {
        throw new Gr(o == null ? void 0 : o.message, o);
      }
      this._wallet = e, this._publicKey = r, this.emit("connect", r);
    } catch (e) {
      throw this.emit("error", e), e;
    } finally {
      this._connecting = !1;
    }
  }
  async disconnect() {
    const e = this._wallet;
    if (e) {
      this._wallet = null, this._publicKey = null;
      try {
        let t;
        try {
          ({ msg: t } = await e.disconnect());
        } catch (r) {
          throw new Wr(r == null ? void 0 : r.message, r);
        }
        if (t !== "ok")
          throw new Wr(t);
      } catch (t) {
        this.emit("error", t);
      }
    }
    this.emit("disconnect");
  }
  async signTransaction(e) {
    try {
      const t = this._wallet;
      if (!t)
        throw new Et();
      try {
        const r = Cr.encode(e.serializeMessage()), { msg: o, data: i } = await t.signTransaction(r);
        if (!i.publicKey || !i.signature)
          throw new Ht(o);
        const c = new fe(i.publicKey), u = Cr.decode(i.signature);
        return e.addSignature(c, u), e;
      } catch (r) {
        throw r instanceof Nt ? r : new Ht(r == null ? void 0 : r.message, r);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
  async signAllTransactions(e) {
    var t;
    try {
      const r = this._wallet;
      if (!r)
        throw new Et();
      try {
        const o = e.map((w) => Cr.encode(w.serializeMessage())), { msg: i, data: c } = await r.signAllTransactions(o), u = e.length;
        if (!c.publicKey || ((t = c.signatures) == null ? void 0 : t.length) !== u)
          throw new Ht(i);
        const d = new fe(c.publicKey);
        for (let w = 0; w < u; w++)
          e[w].addSignature(d, Cr.decode(c.signatures[w]));
        return e;
      } catch (o) {
        throw o instanceof Nt ? o : new Ht(o == null ? void 0 : o.message, o);
      }
    } catch (r) {
      throw this.emit("error", r), r;
    }
  }
  async signMessage(e) {
    try {
      const t = this._wallet;
      if (!t)
        throw new Et();
      try {
        const r = await t.signMessage(e);
        return Cr.decode(r.data.signature);
      } catch (r) {
        throw new $i(r == null ? void 0 : r.message, r);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
}
const cy = "Solflare";
class uy extends to {
  constructor(e = {}) {
    super(), this.name = cy, this.url = "https://solflare.com", this.icon = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmMxMGIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYjNmMmUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI2LjQ3ODM1IiB4Mj0iMzQuOTEwNyIgeGxpbms6aHJlZj0iI2EiIHkxPSI3LjkyIiB5Mj0iMzMuNjU5MyIvPjxyYWRpYWxHcmFkaWVudCBpZD0iYyIgY3g9IjAiIGN5PSIwIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDQuOTkyMTg4MzIgMTIuMDYzODc5NjMgLTEyLjE4MTEzNjU1IDUuMDQwNzEwNzQgMjIuNTIwMiAyMC42MTgzKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHI9IjEiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggZD0ibTI1LjE3MDggNDcuOTEwNGMuNTI1IDAgLjk1MDcuNDIxLjk1MDcuOTQwM3MtLjQyNTcuOTQwMi0uOTUwNy45NDAyLS45NTA3LS40MjA5LS45NTA3LS45NDAyLjQyNTctLjk0MDMuOTUwNy0uOTQwM3ptLTEuMDMyOC00NC45MTU2NWMuNDY0Ni4wMzgzNi44Mzk4LjM5MDQuOTAyNy44NDY4MWwxLjEzMDcgOC4yMTU3NGMuMzc5OCAyLjcxNDMgMy42NTM1IDMuODkwNCA1LjY3NDMgMi4wNDU5bDExLjMyOTEtMTAuMzExNThjLjI3MzMtLjI0ODczLjY5ODktLjIzMTQ5Ljk1MDcuMDM4NTEuMjMwOS4yNDc3Mi4yMzc5LjYyNjk3LjAxNjEuODgyNzdsLTkuODc5MSAxMS4zOTU4Yy0xLjgxODcgMi4wOTQyLS40NzY4IDUuMzY0MyAyLjI5NTYgNS41OTc4bDguNzE2OC44NDAzYy40MzQxLjA0MTguNzUxNy40MjM0LjcwOTMuODUyNC0uMDM0OS4zNTM3LS4zMDc0LjYzOTUtLjY2MjguNjk0OWwtOS4xNTk0IDEuNDMwMmMtMi42NTkzLjM2MjUtMy44NjM2IDMuNTExNy0yLjEzMzkgNS41NTc2bDMuMjIgMy43OTYxYy4yNTk0LjMwNTguMjE4OC43NjE1LS4wOTA4IDEuMDE3OC0uMjYyMi4yMTcyLS42NDE5LjIyNTYtLjkxMzguMDIwM2wtMy45Njk0LTIuOTk3OGMtMi4xNDIxLTEuNjEwOS01LjIyOTctLjI0MTctNS40NTYxIDIuNDI0M2wtLjg3NDcgMTAuMzk3NmMtLjAzNjIuNDI5NS0uNDE3OC43NDg3LS44NTI1LjcxMy0uMzY5LS4wMzAzLS42NjcxLS4zMDk3LS43MTcxLS42NzIxbC0xLjM4NzEtMTAuMDQzN2MtLjM3MTctMi43MTQ0LTMuNjQ1NC0zLjg5MDQtNS42NzQzLTIuMDQ1OWwtMTIuMDUxOTUgMTAuOTc0Yy0uMjQ5NDcuMjI3MS0uNjM4MDkuMjExNC0uODY4LS4wMzUtLjIxMDk0LS4yMjYyLS4yMTczNS0uNTcyNC0uMDE0OTMtLjgwNmwxMC41MTgxOC0xMi4xMzg1YzEuODE4Ny0yLjA5NDIuNDg0OS01LjM2NDQtMi4yODc2LTUuNTk3OGwtOC43MTg3Mi0uODQwNWMtLjQzNDEzLS4wNDE4LS43NTE3Mi0uNDIzNS0uNzA5MzYtLjg1MjQuMDM0OTMtLjM1MzcuMzA3MzktLjYzOTQuNjYyNy0uNjk1bDkuMTUzMzgtMS40Mjk5YzIuNjU5NC0uMzYyNSAzLjg3MTgtMy41MTE3IDIuMTQyMS01LjU1NzZsLTIuMTkyLTIuNTg0MWMtLjMyMTctLjM3OTItLjI3MTMtLjk0NDMuMTEyNi0xLjI2MjEuMzI1My0uMjY5NC43OTYzLS4yNzk3IDEuMTMzNC0uMDI0OWwyLjY5MTggMi4wMzQ3YzIuMTQyMSAxLjYxMDkgNS4yMjk3LjI0MTcgNS40NTYxLTIuNDI0M2wuNzI0MS04LjU1OTk4Yy4wNDU3LS41NDA4LjUyNjUtLjk0MjU3IDEuMDczOS0uODk3Mzd6bS0yMy4xODczMyAyMC40Mzk2NWMuNTI1MDQgMCAuOTUwNjcuNDIxLjk1MDY3Ljk0MDNzLS40MjU2My45NDAzLS45NTA2Ny45NDAzYy0uNTI1MDQxIDAtLjk1MDY3LS40MjEtLjk1MDY3LS45NDAzcy40MjU2MjktLjk0MDMuOTUwNjctLjk0MDN6bTQ3LjY3OTczLS45NTQ3Yy41MjUgMCAuOTUwNy40MjEuOTUwNy45NDAzcy0uNDI1Ny45NDAyLS45NTA3Ljk0MDItLjk1MDctLjQyMDktLjk1MDctLjk0MDIuNDI1Ny0uOTQwMy45NTA3LS45NDAzem0tMjQuNjI5Ni0yMi40Nzk3Yy41MjUgMCAuOTUwNi40MjA5NzMuOTUwNi45NDAyNyAwIC41MTkzLS40MjU2Ljk0MDI3LS45NTA2Ljk0MDI3LS41MjUxIDAtLjk1MDctLjQyMDk3LS45NTA3LS45NDAyNyAwLS41MTkyOTcuNDI1Ni0uOTQwMjcuOTUwNy0uOTQwMjd6IiBmaWxsPSJ1cmwoI2IpIi8+PHBhdGggZD0ibTI0LjU3MSAzMi43NzkyYzQuOTU5NiAwIDguOTgwMi0zLjk3NjUgOC45ODAyLTguODgxOSAwLTQuOTA1My00LjAyMDYtOC44ODE5LTguOTgwMi04Ljg4MTlzLTguOTgwMiAzLjk3NjYtOC45ODAyIDguODgxOWMwIDQuOTA1NCA0LjAyMDYgOC44ODE5IDguOTgwMiA4Ljg4MTl6IiBmaWxsPSJ1cmwoI2MpIi8+PC9zdmc+", this.supportedTransactionVersions = /* @__PURE__ */ new Set(["legacy", 0]), this._readyState = typeof window > "u" || typeof document > "u" ? Be.Unsupported : Be.Loadable, this._disconnected = () => {
      const t = this._wallet;
      t && (t.off("disconnect", this._disconnected), this._wallet = null, this._publicKey = null, this.emit("error", new pa()), this.emit("disconnect"));
    }, this._connecting = !1, this._publicKey = null, this._wallet = null, this._config = e, this._readyState !== Be.Unsupported && eo(() => {
      var t;
      return ((t = window.solflare) == null ? void 0 : t.isSolflare) || window.SolflareApp ? (this._readyState = Be.Installed, this.emit("readyStateChange", this._readyState), !0) : !1;
    });
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get connected() {
    var e;
    return !!((e = this._wallet) != null && e.connected);
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== Be.Loadable && this._readyState !== Be.Installed)
        throw new ni();
      let e;
      try {
        e = (await import("./index.0e3a05f6.js")).default;
      } catch (o) {
        throw new Rg(o == null ? void 0 : o.message, o);
      }
      let t;
      try {
        t = new e({ network: this._config.network });
      } catch (o) {
        throw new kg(o == null ? void 0 : o.message, o);
      }
      if (this._connecting = !0, !t.connected)
        try {
          await t.connect();
        } catch (o) {
          throw new Hr(o == null ? void 0 : o.message, o);
        }
      if (!t.publicKey)
        throw new Hr();
      let r;
      try {
        r = new fe(t.publicKey.toBytes());
      } catch (o) {
        throw new Gr(o == null ? void 0 : o.message, o);
      }
      t.on("disconnect", this._disconnected), this._wallet = t, this._publicKey = r, this.emit("connect", r);
    } catch (e) {
      throw this.emit("error", e), e;
    } finally {
      this._connecting = !1;
    }
  }
  async disconnect() {
    const e = this._wallet;
    if (e) {
      e.off("disconnect", this._disconnected), this._wallet = null, this._publicKey = null;
      try {
        await e.disconnect();
      } catch (t) {
        this.emit("error", new Wr(t == null ? void 0 : t.message, t));
      }
    }
    this.emit("disconnect");
  }
  async signTransaction(e) {
    try {
      const t = this._wallet;
      if (!t)
        throw new Et();
      try {
        return await t.signTransaction(e) || e;
      } catch (r) {
        throw new Ht(r == null ? void 0 : r.message, r);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
  async signAllTransactions(e) {
    try {
      const t = this._wallet;
      if (!t)
        throw new Et();
      try {
        return await t.signAllTransactions(e) || e;
      } catch (r) {
        throw new Ht(r == null ? void 0 : r.message, r);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
  async signMessage(e) {
    try {
      const t = this._wallet;
      if (!t)
        throw new Et();
      try {
        return await t.signMessage(e, "utf8");
      } catch (r) {
        throw new $i(r == null ? void 0 : r.message, r);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
}
function ly({ children: n }) {
  const e = _s.Mainnet, t = tn(() => Cg(e), [e]), r = tn(
    () => [
      new ty(),
      new $g(),
      new ay(),
      new uy({ network: e })
    ],
    [e]
  );
  return /* @__PURE__ */ D.createElement(Ng, {
    endpoint: t
  }, /* @__PURE__ */ D.createElement(Pg, {
    wallets: r,
    autoConnect: !0
  }, /* @__PURE__ */ D.createElement(Gg, null, n)));
}
const fy = {
  ethereum: "ETH",
  solana: "SOL",
  polygon: "MATIC",
  avalanche: "AVAX",
  flow: "FLOW"
};
function hy({ projectData: n, appId: e, hasUser: t, logger: r }) {
  var L;
  const [o, i] = Pe(!1), [c, u] = Pe(!1), [d, w] = Pe(""), { setVisible: v } = ll(), { connected: I, publicKey: _, signMessage: E, disconnect: N } = sl(), T = wn(!1), U = wn(!1), P = tn(() => {
    var Q;
    if (!(n != null && n.wallet))
      return [];
    const { wallet: W } = n;
    w(
      (Q = n.userInfo) != null && Q.walletAddress ? Sa(n.userInfo.walletAddress) : ""
    );
    const j = [];
    if (W != null && W.isBalanceRequired) {
      const le = /* @__PURE__ */ D.createElement(D.Fragment, null, "Have at least", /* @__PURE__ */ D.createElement("strong", null, " " + W.balance + " " + fy[n.chain] + " "), "in your wallet");
      j.push(le);
    }
    if (W != null && W.isNftRequired) {
      const { nftCollection: le } = W, Se = /* @__PURE__ */ D.createElement(D.Fragment, null, "Hold an NFT from", " ", /* @__PURE__ */ D.createElement("strong", null, /* @__PURE__ */ D.createElement("a", {
        href: le == null ? void 0 : le.url,
        target: "_blank",
        rel: "noreferrer"
      }, le == null ? void 0 : le.name)));
      j.push(Se);
    }
    return j;
  }, [n]);
  Ft(() => {
    async function W() {
      var j;
      if (!(!U.current || ((j = n == null ? void 0 : n.userInfo) == null ? void 0 : j.walletAddress) || !I || !_ || !E || T.current))
        try {
          T.current = !0, i(!0);
          const Q = _.toBase58(), { nonce: le } = await bl({ appId: e, address: Q }), Se = new TextEncoder().encode(le), ge = Xg.encode(await E(Se));
          await Al({
            address: Q,
            signature: ge,
            appId: e
          }), w(Sa(_.toString())), r == null || r.info("HypeDayReact: Wallet connected", "hype03", {
            address: _.toString(),
            projectId: n == null ? void 0 : n.id,
            chain: n == null ? void 0 : n.chain
          });
        } catch (Q) {
          N(), Q.message !== "User rejected the request." && Q.name !== Et.name && (console.error("error", Q), r == null || r.error("HypeDayReact: Error connecting wallet", "hype02", Q));
        } finally {
          i(!1), T.current = !1, U.current = !1;
        }
    }
    W();
  }, [
    r,
    e,
    n,
    i,
    I,
    _,
    E,
    N
  ]);
  const F = () => {
    d || (v(!0), U.current = !0);
  }, O = () => {
    const j = new URLSearchParams(window.location.search).get("phantomApp");
    if (fs() && !j)
      return u(!0);
    F();
  }, z = async () => {
    try {
      const W = new URLSearchParams();
      W.append("phantomApp", "1"), W.append("ref", "hypeday");
      const j = "https://phantom.app/ul/browse/" + encodeURIComponent(window.location.href + "?" + W.toString());
      window.open(j, "_blank");
    } catch (W) {
      console.error(W);
    }
  };
  return ((L = n == null ? void 0 : n.wallet) == null ? void 0 : L.required) === !1 ? null : /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement(Xc, {
    isOpen: c,
    onRequestClose: () => u(!1),
    title: "Open in Phantom Mobile App?"
  }, /* @__PURE__ */ D.createElement("button", {
    className: "hypeday-button hypeday-modal-button",
    onClick: z
  }, "Yes"), /* @__PURE__ */ D.createElement("button", {
    className: "hypeday-button hypeday-modal-button",
    onClick: () => {
      u(!1), F();
    }
  }, "Other ways to connect")), /* @__PURE__ */ D.createElement(Ns, {
    title: "Wallet",
    onClick: O,
    info: P,
    isLoading: o,
    rightText: d,
    buttonDisabled: !t
  }));
}
function dy({
  projectData: n,
  appId: e,
  hasUser: t,
  logger: r
}) {
  return /* @__PURE__ */ D.createElement(ly, null, /* @__PURE__ */ D.createElement(hy, {
    projectData: n,
    appId: e,
    hasUser: t,
    logger: r
  }));
}
const py = {
  [yn.willOpen]: "Registration opening soon",
  [yn.alwaysOpen]: "Register",
  [yn.willClose]: "Register",
  [yn.closed]: "Registration is closed"
};
function gy({
  projectData: n,
  appId: e,
  hasUser: t,
  inputRef: r,
  logger: o
}) {
  var N, T, U, P, F, O, z, L, W;
  const [i, c] = Pe(!1), [u, d] = Pe(""), [w, v] = Pe(!1), { status: I } = Rs();
  Ft(() => {
    var j;
    v(!!((j = n == null ? void 0 : n.userInfo) != null && j.registered));
  }, [n]);
  const _ = async () => {
    var j;
    if (!(!e || !t || !(n != null && n.id) || w))
      try {
        d(""), c(!0);
        const { error: Q } = await vl({
          appId: e,
          projectId: n.id,
          customField: ((j = r == null ? void 0 : r.current) == null ? void 0 : j.value) || ""
        });
        if (Q)
          return console.error("Register error", Q), o == null || o.error("HypeDayReact: Error registering user", "hype06", Q), d(Q.message);
        v(!0), o == null || o.info("HypeDayReact: User registered", "hype07", {
          projectId: n == null ? void 0 : n.id,
          chain: n == null ? void 0 : n.chain
        });
      } catch (Q) {
        console.error(Q), o == null || o.error("HypeDayReact: Error registering user", "hype08", Q);
      } finally {
        c(!1);
      }
  }, E = i || I === yn.closed || I === yn.willOpen || !t || ((N = n == null ? void 0 : n.discord) == null ? void 0 : N.enabled) && !((U = (T = n == null ? void 0 : n.userInfo) == null ? void 0 : T.discord) != null && U.username) || ((P = n == null ? void 0 : n.discord2) == null ? void 0 : P.enabled) && !((O = (F = n == null ? void 0 : n.userInfo) == null ? void 0 : F.discord) != null && O.username) || ((z = n == null ? void 0 : n.twitter) == null ? void 0 : z.enabled) && !((W = (L = n == null ? void 0 : n.userInfo) == null ? void 0 : L.twitter) != null && W.username);
  return /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("button", {
    className: "hypeday-register-button",
    onClick: _,
    disabled: E
  }, i && /* @__PURE__ */ D.createElement("div", {
    className: "hypeday-spinner hypeday-btn-spinner"
  }), /* @__PURE__ */ D.createElement("span", {
    style: { visibility: i ? "hidden" : "initial" }
  }, w ? "Registered! \u{1F389}" : py[I])), !!u && /* @__PURE__ */ D.createElement("span", {
    className: "hypeday-register-error"
  }, u));
}
function yy({
  projectData: n
}) {
  return n != null && n.showLink ? /* @__PURE__ */ D.createElement("div", {
    style: {
      fontSize: "0.8em",
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      paddingTop: 12
    }
  }, /* @__PURE__ */ D.createElement("span", null, "Powered by", " ", /* @__PURE__ */ D.createElement("a", {
    href: "https://hype.day",
    target: "_blank",
    rel: "noreferrer",
    className: "hypeday-a-text-decoration-none"
  }, "Hype.Day"))) : null;
}
function wy({
  appId: n,
  projectId: e,
  userToken: t,
  testing: r = !1,
  logger: o
}) {
  const [i, c] = Pe(), [u, d] = Pe(!0), [w, v] = Pe(""), I = wn(null), { setData: _ } = Rs(), E = $t(async () => {
    if (!e || !n) {
      console.error("HypeDayReact: projectId and appId props are required.");
      return;
    }
    d(!0), v(""), ml({ appId: n, projectId: e }).then((N) => {
      c(N), _(N);
    }).catch((N) => {
      o == null || o.error(
        "HypeDayReact: Error fetching project data",
        "hype01",
        N
      ), console.error("HypeDayReact: Error fetching project data", N), v(
        N.message || "Something went wrong. Please check your connection."
      );
    }).finally(() => d(!1));
  }, [n, _, e, o]);
  return Ft(() => {
    wl(t);
  }, [t]), Ft(() => {
    yl(r);
  }, [r]), Ft(() => {
    E();
  }, [E]), u ? /* @__PURE__ */ D.createElement("div", {
    className: "hypeday-wrapper",
    style: { display: "flex", justifyContent: "center" }
  }, /* @__PURE__ */ D.createElement("div", {
    className: "hypeday-spinner"
  })) : w ? /* @__PURE__ */ D.createElement("div", {
    className: "hypeday-wrapper"
  }, /* @__PURE__ */ D.createElement("span", {
    className: "hypeday-error"
  }, w), /* @__PURE__ */ D.createElement("button", {
    className: "hypeday-button",
    onClick: E
  }, "Retry")) : /* @__PURE__ */ D.createElement("div", {
    className: "hypeday-wrapper"
  }, /* @__PURE__ */ D.createElement(Sl, null), /* @__PURE__ */ D.createElement(dy, {
    projectData: i,
    appId: n,
    hasUser: !!t,
    logger: o
  }), /* @__PURE__ */ D.createElement(zf, {
    projectData: i,
    appId: n,
    hasUser: !!t,
    logger: o
  }), /* @__PURE__ */ D.createElement(El, {
    projectData: i,
    appId: n,
    hasUser: !!t,
    logger: o
  }), /* @__PURE__ */ D.createElement(xl, {
    projectData: i,
    ref: I
  }), /* @__PURE__ */ D.createElement(gy, {
    projectData: i,
    appId: n,
    hasUser: !!t,
    logger: o,
    inputRef: I
  }), /* @__PURE__ */ D.createElement(yy, {
    projectData: i
  }));
}
function Ey(n) {
  return /* @__PURE__ */ D.createElement(Il, null, /* @__PURE__ */ D.createElement(wy, {
    ...n
  }));
}
export {
  zd as E,
  fe as P,
  Ey as W,
  Pr as s,
  p0 as v
};
