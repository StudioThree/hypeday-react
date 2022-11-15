import D, { createContext as Gr, useState as _e, useMemo as Yt, useContext as Fi, useEffect as Dt, useRef as mn, useCallback as en, useLayoutEffect as bi } from "react";
import Al, { createPortal as vl } from "react-dom";
const qr = "https://api.hype.day", Xn = new Headers({
  "Content-Type": "application/json"
});
function El(n) {
  n ? Xn.set("Authorization", `Bearer ${n}`) : Xn.delete("Authorization");
}
function Qr(n) {
  return n.text().then((e) => {
    var r;
    if (e === "OK")
      return e;
    const t = e && JSON.parse(e);
    if (!n.ok) {
      const i = ((r = t == null ? void 0 : t.error) == null ? void 0 : r.message) || n.statusText;
      return console.error(i), Promise.reject(i);
    }
    return t;
  });
}
function xl({
  appId: n,
  projectId: e
}) {
  const t = {
    method: "GET",
    headers: Xn
  };
  return fetch(
    `${qr}/getProject?` + new URLSearchParams({
      appid: n,
      projectid: e
    }),
    t
  ).then(Qr);
}
function Sl(n) {
  const e = "solana", t = {
    method: "POST",
    headers: Xn,
    body: JSON.stringify({ chain: e, ...n })
  };
  return fetch(`${qr}/addWallet`, t).then(Qr);
}
function Il(n) {
  const e = "solana", t = {
    method: "POST",
    headers: Xn,
    body: JSON.stringify({ chain: e, ...n })
  };
  return fetch(`${qr}/verifyWallet`, t).then(Qr);
}
function qc({
  provider: n,
  appId: e,
  projectId: t,
  returnUrl: r
}) {
  const i = {
    method: "POST",
    headers: Xn,
    body: JSON.stringify({
      appId: e,
      projectId: t,
      returnUrl: r
    })
  };
  return fetch(
    `${qr}/${n === "twitter" ? "t" : "d"}GetUrlForApp`,
    i
  ).then(Qr);
}
function Bl({
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
  return fetch(`${qr}/validateForAppProject`, r).then(
    Qr
  );
}
const Qc = Gr({});
function Ml({ children: n }) {
  const [e, t] = _e(), [r, i] = _e(), o = Yt(
    () => ({
      discordData: e,
      twitterData: r,
      setDiscordData: t,
      setTwitterData: i
    }),
    [e, t, r, i]
  );
  return /* @__PURE__ */ D.createElement(Qc.Provider, {
    value: o
  }, n);
}
function zi() {
  return Fi(Qc);
}
function Mo(n) {
  return n ? `${n.slice(0, 4)}...${n.slice(-4)}` : "";
}
function ys() {
  return Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1;
}
function Yc(n) {
  const e = "Something went wrong. Please try again later.";
  return typeof n == "string" ? n : n != null && n.message ? n.message : e;
}
function sn({ required: n }) {
  return n ? /* @__PURE__ */ D.createElement("span", {
    title: "Required"
  }, " *") : null;
}
function Us({
  title: n,
  rightText: e,
  buttonDisabled: t = !1,
  onClick: r,
  info: i,
  isLoading: o = !1,
  showButton: c = !0,
  errorMessage: u
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
    disabled: o || t,
    title: t ? "Please login first" : void 0
  }, o && /* @__PURE__ */ D.createElement("div", {
    className: "hypeday-spinner hypeday-btn-spinner"
  }), /* @__PURE__ */ D.createElement("span", {
    style: { visibility: o ? "hidden" : "initial" }
  }, e || "Connect"))), !!u && /* @__PURE__ */ D.createElement("span", {
    className: "hypeday-error"
  }, u), i.map((d, w) => /* @__PURE__ */ D.createElement("span", {
    key: w,
    className: "hypeday-info"
  }, d)));
}
function _l({
  projectData: n,
  appId: e,
  hasUser: t,
  logger: r
}) {
  var S, T;
  const [i, o] = _e(!1), [c, u] = _e(""), { discordData: d } = zi(), w = Yt(() => {
    var P, z;
    if (!((P = n == null ? void 0 : n.discord) != null && P.enabled) && !((z = n == null ? void 0 : n.discord2) != null && z.enabled))
      return [];
    const { discord: E, discord2: _ } = n, C = [];
    E != null && E.enabled && C.push(E), _ != null && _.enabled && C.push(_);
    const U = [];
    return C.forEach((N) => {
      var F;
      if (N.isServerRequired) {
        const O = /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("div", {
          className: "hypeday-req-list-item"
        }, /* @__PURE__ */ D.createElement("div", null, "Join the", " ", /* @__PURE__ */ D.createElement("a", {
          href: N == null ? void 0 : N.serverLink,
          target: "_blank",
          rel: "noreferrer"
        }, /* @__PURE__ */ D.createElement("strong", null, N == null ? void 0 : N.serverDisplayName)), " ", "server on Discord", /* @__PURE__ */ D.createElement(sn, {
          required: !(E != null && E.isServerOptional)
        })), /* @__PURE__ */ D.createElement("a", {
          className: "hypeday-button-gray hypeday-discord-req-action-button",
          href: (N == null ? void 0 : N.serverLink) || "/",
          target: "_blank",
          rel: "noreferrer"
        }, /* @__PURE__ */ D.createElement("span", null, "Join"))));
        U.push(O);
      }
      if (N.isShouldJoinBeforeRequired) {
        const O = /* @__PURE__ */ D.createElement(D.Fragment, null, "before", " ", /* @__PURE__ */ D.createElement("strong", null, new Date((N == null ? void 0 : N.shouldJoinBefore) || "").toLocaleDateString()), /* @__PURE__ */ D.createElement(sn, {
          required: !(E != null && E.isShouldJoinBeforeOptional)
        }));
        U.push(O);
      }
      if (N.isRoleRequired) {
        const O = /* @__PURE__ */ D.createElement(D.Fragment, null, 'and have the "', (F = N == null ? void 0 : N.roleDisplayNames) == null ? void 0 : F.join(", "), '" role(s)', /* @__PURE__ */ D.createElement(sn, {
          required: !(E != null && E.isRoleOptional)
        }));
        U.push(O);
      }
    }), U;
  }, [n]), v = async () => {
    if (!(!e || !t || !(n != null && n.id)))
      try {
        o(!0);
        const { url: E } = await qc({
          provider: "discord",
          appId: e,
          projectId: n.id,
          returnUrl: window.location.href
        });
        window.location.assign(E);
      } catch (E) {
        console.error(E), u(Yc(E)), r == null || r.error(
          "HypeDayReact: Error getting Discord oauth url",
          "hype05",
          E
        );
      } finally {
        o(!1);
      }
  };
  return !((S = n == null ? void 0 : n.discord) != null && S.enabled) && !((T = n == null ? void 0 : n.discord2) != null && T.enabled) ? null : /* @__PURE__ */ D.createElement(Us, {
    title: "Discord",
    onClick: v,
    info: w,
    rightText: d == null ? void 0 : d.username,
    buttonDisabled: !t,
    isLoading: i,
    errorMessage: c
  });
}
const Cl = D.forwardRef(function({
  projectData: e
}, t) {
  var i;
  if (!((i = e == null ? void 0 : e.customfield) != null && i.enabled))
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
var wn = /* @__PURE__ */ ((n) => (n.willOpen = "willOpen", n.alwaysOpen = "alwaysOpen", n.willClose = "willClose", n.closed = "closed", n))(wn || {});
const Kc = Gr(
  {}
);
function Tl({
  children: n
}) {
  const [e, t] = _e(), [r, i] = _e(
    "alwaysOpen"
  ), [o, c] = _e();
  Dt(() => {
    var S, T, E, _, C, U, P, z;
    const d = Date.now(), w = (S = e == null ? void 0 : e.signupAccess) != null && S.isStartDateRequired ? new Date((T = e == null ? void 0 : e.signupAccess) == null ? void 0 : T.startDate).getTime() : null, v = (E = e == null ? void 0 : e.signupAccess) != null && E.isEndDateRequired ? new Date((_ = e == null ? void 0 : e.signupAccess) == null ? void 0 : _.endDate).getTime() : null;
    if (!w && !v) {
      i("alwaysOpen");
      return;
    }
    if (w && w > d) {
      i("willOpen"), c((C = e == null ? void 0 : e.signupAccess) == null ? void 0 : C.startDate);
      const N = setTimeout(() => {
        var F;
        i(
          v ? "willClose" : "alwaysOpen"
        ), c((F = e == null ? void 0 : e.signupAccess) == null ? void 0 : F.endDate);
      }, w - d);
      return () => clearTimeout(N);
    }
    if (w && w < d) {
      if (v) {
        i("willClose"), c((U = e == null ? void 0 : e.signupAccess) == null ? void 0 : U.endDate);
        const N = setTimeout(() => {
          i("closed");
        }, v - d);
        return () => clearTimeout(N);
      }
      i("alwaysOpen");
      return;
    }
    if (v && v > d) {
      i("willClose"), c((P = e == null ? void 0 : e.signupAccess) == null ? void 0 : P.endDate);
      const N = setTimeout(() => {
        var F;
        i("closed"), c((F = e == null ? void 0 : e.signupAccess) == null ? void 0 : F.endDate);
      }, v - d);
      return () => clearTimeout(N);
    }
    if (v && v < d) {
      i("closed"), c((z = e == null ? void 0 : e.signupAccess) == null ? void 0 : z.endDate);
      return;
    }
  }, [e]);
  const u = Yt(
    () => ({
      status: r,
      dateString: o,
      setData: t
    }),
    [r, o, t]
  );
  return /* @__PURE__ */ D.createElement(Kc.Provider, {
    value: u
  }, n);
}
function Ds() {
  return Fi(Kc);
}
function Ca({
  dateString: n,
  message: e
}) {
  const [t, r] = _e(!1), [i, o] = _e(0), [c, u] = _e(0), [d, w] = _e(0), [v, S] = _e(0);
  return Dt(() => {
    const T = new Date(n).getTime(), E = setInterval(() => {
      const _ = new Date().getTime(), C = T - _, U = Math.floor(C / (1e3 * 60 * 60 * 24)), P = Math.floor(
        C % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)
      ), z = Math.floor(C % (1e3 * 60 * 60) / (1e3 * 60)), N = Math.floor(C % (1e3 * 60) / 1e3);
      if (C <= 0) {
        clearInterval(E), r(!0), o(0), u(0), w(0), S(0);
        return;
      }
      o(U), u(P), w(z), S(N);
    }, 1e3);
    return () => clearInterval(E);
  }, [n]), !t && !i && !c && !d && !v ? /* @__PURE__ */ D.createElement("span", {
    style: { visibility: "hidden" }
  }, "Calculating..") : t ? /* @__PURE__ */ D.createElement(D.Fragment, null, e) : /* @__PURE__ */ D.createElement(D.Fragment, null, i > 0 && `${i} days, `, c > 0 && `${c} hours, `, d > 0 && `${d} minutes, `, v > 0 && `${v} seconds`);
}
function _o({
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
function Rl() {
  var t;
  const { status: n, dateString: e } = Ds();
  return n === wn.closed ? /* @__PURE__ */ D.createElement(_o, {
    title: "Registration is closed"
  }, "Registration is closed on", " ", (t = new Date(e)) == null ? void 0 : t.toUTCString(), ". Thank you for your interest.") : n === wn.willOpen ? /* @__PURE__ */ D.createElement(_o, {
    title: "Registration starts in:"
  }, /* @__PURE__ */ D.createElement(Ca, {
    dateString: e,
    message: "Registration is open."
  })) : n === wn.willClose ? /* @__PURE__ */ D.createElement(_o, {
    title: "Registration ends in:"
  }, /* @__PURE__ */ D.createElement(Ca, {
    dateString: e,
    message: "Registration is closed."
  })) : null;
}
var un = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function kl(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function Hi(n) {
  var e = n.default;
  if (typeof e == "function") {
    var t = function() {
      return e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(n).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(n, r);
    Object.defineProperty(t, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return n[r];
      }
    });
  }), t;
}
var ws = { exports: {} }, $n = {}, Ai = { exports: {} }, Co = { exports: {} }, Le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ta;
function Nl() {
  if (Ta)
    return Le;
  Ta = 1;
  var n = typeof Symbol == "function" && Symbol.for, e = n ? Symbol.for("react.element") : 60103, t = n ? Symbol.for("react.portal") : 60106, r = n ? Symbol.for("react.fragment") : 60107, i = n ? Symbol.for("react.strict_mode") : 60108, o = n ? Symbol.for("react.profiler") : 60114, c = n ? Symbol.for("react.provider") : 60109, u = n ? Symbol.for("react.context") : 60110, d = n ? Symbol.for("react.async_mode") : 60111, w = n ? Symbol.for("react.concurrent_mode") : 60111, v = n ? Symbol.for("react.forward_ref") : 60112, S = n ? Symbol.for("react.suspense") : 60113, T = n ? Symbol.for("react.suspense_list") : 60120, E = n ? Symbol.for("react.memo") : 60115, _ = n ? Symbol.for("react.lazy") : 60116, C = n ? Symbol.for("react.block") : 60121, U = n ? Symbol.for("react.fundamental") : 60117, P = n ? Symbol.for("react.responder") : 60118, z = n ? Symbol.for("react.scope") : 60119;
  function N(O) {
    if (typeof O == "object" && O !== null) {
      var W = O.$$typeof;
      switch (W) {
        case e:
          switch (O = O.type, O) {
            case d:
            case w:
            case r:
            case o:
            case i:
            case S:
              return O;
            default:
              switch (O = O && O.$$typeof, O) {
                case u:
                case v:
                case _:
                case E:
                case c:
                  return O;
                default:
                  return W;
              }
          }
        case t:
          return W;
      }
    }
  }
  function F(O) {
    return N(O) === w;
  }
  return Le.AsyncMode = d, Le.ConcurrentMode = w, Le.ContextConsumer = u, Le.ContextProvider = c, Le.Element = e, Le.ForwardRef = v, Le.Fragment = r, Le.Lazy = _, Le.Memo = E, Le.Portal = t, Le.Profiler = o, Le.StrictMode = i, Le.Suspense = S, Le.isAsyncMode = function(O) {
    return F(O) || N(O) === d;
  }, Le.isConcurrentMode = F, Le.isContextConsumer = function(O) {
    return N(O) === u;
  }, Le.isContextProvider = function(O) {
    return N(O) === c;
  }, Le.isElement = function(O) {
    return typeof O == "object" && O !== null && O.$$typeof === e;
  }, Le.isForwardRef = function(O) {
    return N(O) === v;
  }, Le.isFragment = function(O) {
    return N(O) === r;
  }, Le.isLazy = function(O) {
    return N(O) === _;
  }, Le.isMemo = function(O) {
    return N(O) === E;
  }, Le.isPortal = function(O) {
    return N(O) === t;
  }, Le.isProfiler = function(O) {
    return N(O) === o;
  }, Le.isStrictMode = function(O) {
    return N(O) === i;
  }, Le.isSuspense = function(O) {
    return N(O) === S;
  }, Le.isValidElementType = function(O) {
    return typeof O == "string" || typeof O == "function" || O === r || O === w || O === o || O === i || O === S || O === T || typeof O == "object" && O !== null && (O.$$typeof === _ || O.$$typeof === E || O.$$typeof === c || O.$$typeof === u || O.$$typeof === v || O.$$typeof === U || O.$$typeof === P || O.$$typeof === z || O.$$typeof === C);
  }, Le.typeOf = N, Le;
}
var Ue = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ra;
function Ol() {
  return Ra || (Ra = 1, process.env.NODE_ENV !== "production" && function() {
    var n = typeof Symbol == "function" && Symbol.for, e = n ? Symbol.for("react.element") : 60103, t = n ? Symbol.for("react.portal") : 60106, r = n ? Symbol.for("react.fragment") : 60107, i = n ? Symbol.for("react.strict_mode") : 60108, o = n ? Symbol.for("react.profiler") : 60114, c = n ? Symbol.for("react.provider") : 60109, u = n ? Symbol.for("react.context") : 60110, d = n ? Symbol.for("react.async_mode") : 60111, w = n ? Symbol.for("react.concurrent_mode") : 60111, v = n ? Symbol.for("react.forward_ref") : 60112, S = n ? Symbol.for("react.suspense") : 60113, T = n ? Symbol.for("react.suspense_list") : 60120, E = n ? Symbol.for("react.memo") : 60115, _ = n ? Symbol.for("react.lazy") : 60116, C = n ? Symbol.for("react.block") : 60121, U = n ? Symbol.for("react.fundamental") : 60117, P = n ? Symbol.for("react.responder") : 60118, z = n ? Symbol.for("react.scope") : 60119;
    function N(K) {
      return typeof K == "string" || typeof K == "function" || K === r || K === w || K === o || K === i || K === S || K === T || typeof K == "object" && K !== null && (K.$$typeof === _ || K.$$typeof === E || K.$$typeof === c || K.$$typeof === u || K.$$typeof === v || K.$$typeof === U || K.$$typeof === P || K.$$typeof === z || K.$$typeof === C);
    }
    function F(K) {
      if (typeof K == "object" && K !== null) {
        var We = K.$$typeof;
        switch (We) {
          case e:
            var Ie = K.type;
            switch (Ie) {
              case d:
              case w:
              case r:
              case o:
              case i:
              case S:
                return Ie;
              default:
                var je = Ie && Ie.$$typeof;
                switch (je) {
                  case u:
                  case v:
                  case _:
                  case E:
                  case c:
                    return je;
                  default:
                    return We;
                }
            }
          case t:
            return We;
        }
      }
    }
    var O = d, W = w, G = u, q = c, le = e, be = v, pe = r, ve = _, I = E, l = t, p = o, m = i, y = S, x = !1;
    function L(K) {
      return x || (x = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), R(K) || F(K) === d;
    }
    function R(K) {
      return F(K) === w;
    }
    function b(K) {
      return F(K) === u;
    }
    function h(K) {
      return F(K) === c;
    }
    function M(K) {
      return typeof K == "object" && K !== null && K.$$typeof === e;
    }
    function Q(K) {
      return F(K) === v;
    }
    function Z(K) {
      return F(K) === r;
    }
    function V(K) {
      return F(K) === _;
    }
    function oe(K) {
      return F(K) === E;
    }
    function $(K) {
      return F(K) === t;
    }
    function se(K) {
      return F(K) === o;
    }
    function Ae(K) {
      return F(K) === i;
    }
    function xe(K) {
      return F(K) === S;
    }
    Ue.AsyncMode = O, Ue.ConcurrentMode = W, Ue.ContextConsumer = G, Ue.ContextProvider = q, Ue.Element = le, Ue.ForwardRef = be, Ue.Fragment = pe, Ue.Lazy = ve, Ue.Memo = I, Ue.Portal = l, Ue.Profiler = p, Ue.StrictMode = m, Ue.Suspense = y, Ue.isAsyncMode = L, Ue.isConcurrentMode = R, Ue.isContextConsumer = b, Ue.isContextProvider = h, Ue.isElement = M, Ue.isForwardRef = Q, Ue.isFragment = Z, Ue.isLazy = V, Ue.isMemo = oe, Ue.isPortal = $, Ue.isProfiler = se, Ue.isStrictMode = Ae, Ue.isSuspense = xe, Ue.isValidElementType = N, Ue.typeOf = F;
  }()), Ue;
}
var ka;
function Vc() {
  return ka || (ka = 1, function(n) {
    process.env.NODE_ENV === "production" ? n.exports = Nl() : n.exports = Ol();
  }(Co)), Co.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var To, Na;
function Ll() {
  if (Na)
    return To;
  Na = 1;
  var n = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function r(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
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
  return To = i() ? Object.assign : function(o, c) {
    for (var u, d = r(o), w, v = 1; v < arguments.length; v++) {
      u = Object(arguments[v]);
      for (var S in u)
        e.call(u, S) && (d[S] = u[S]);
      if (n) {
        w = n(u);
        for (var T = 0; T < w.length; T++)
          t.call(u, w[T]) && (d[w[T]] = u[w[T]]);
      }
    }
    return d;
  }, To;
}
var Ro, Oa;
function Ps() {
  if (Oa)
    return Ro;
  Oa = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ro = n, Ro;
}
var ko, La;
function Zc() {
  return La || (La = 1, ko = Function.call.bind(Object.prototype.hasOwnProperty)), ko;
}
var No, Ua;
function Ul() {
  if (Ua)
    return No;
  Ua = 1;
  var n = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = Ps(), t = {}, r = Zc();
    n = function(o) {
      var c = "Warning: " + o;
      typeof console < "u" && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    };
  }
  function i(o, c, u, d, w) {
    if (process.env.NODE_ENV !== "production") {
      for (var v in o)
        if (r(o, v)) {
          var S;
          try {
            if (typeof o[v] != "function") {
              var T = Error(
                (d || "React class") + ": " + u + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw T.name = "Invariant Violation", T;
            }
            S = o[v](c, v, d, u, null, e);
          } catch (_) {
            S = _;
          }
          if (S && !(S instanceof Error) && n(
            (d || "React class") + ": type specification of " + u + " `" + v + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof S + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), S instanceof Error && !(S.message in t)) {
            t[S.message] = !0;
            var E = w ? w() : "";
            n(
              "Failed " + u + " type: " + S.message + (E != null ? E : "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, No = i, No;
}
var Oo, Da;
function Dl() {
  if (Da)
    return Oo;
  Da = 1;
  var n = Vc(), e = Ll(), t = Ps(), r = Zc(), i = Ul(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(u) {
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
  return Oo = function(u, d) {
    var w = typeof Symbol == "function" && Symbol.iterator, v = "@@iterator";
    function S(R) {
      var b = R && (w && R[w] || R[v]);
      if (typeof b == "function")
        return b;
    }
    var T = "<<anonymous>>", E = {
      array: P("array"),
      bigint: P("bigint"),
      bool: P("boolean"),
      func: P("function"),
      number: P("number"),
      object: P("object"),
      string: P("string"),
      symbol: P("symbol"),
      any: z(),
      arrayOf: N,
      element: F(),
      elementType: O(),
      instanceOf: W,
      node: be(),
      objectOf: q,
      oneOf: G,
      oneOfType: le,
      shape: ve,
      exact: I
    };
    function _(R, b) {
      return R === b ? R !== 0 || 1 / R === 1 / b : R !== R && b !== b;
    }
    function C(R, b) {
      this.message = R, this.data = b && typeof b == "object" ? b : {}, this.stack = "";
    }
    C.prototype = Error.prototype;
    function U(R) {
      if (process.env.NODE_ENV !== "production")
        var b = {}, h = 0;
      function M(Z, V, oe, $, se, Ae, xe) {
        if ($ = $ || T, Ae = Ae || oe, xe !== t) {
          if (d) {
            var K = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw K.name = "Invariant Violation", K;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var We = $ + ":" + oe;
            !b[We] && h < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + Ae + "` prop on `" + $ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), b[We] = !0, h++);
          }
        }
        return V[oe] == null ? Z ? V[oe] === null ? new C("The " + se + " `" + Ae + "` is marked as required " + ("in `" + $ + "`, but its value is `null`.")) : new C("The " + se + " `" + Ae + "` is marked as required in " + ("`" + $ + "`, but its value is `undefined`.")) : null : R(V, oe, $, se, Ae);
      }
      var Q = M.bind(null, !1);
      return Q.isRequired = M.bind(null, !0), Q;
    }
    function P(R) {
      function b(h, M, Q, Z, V, oe) {
        var $ = h[M], se = m($);
        if (se !== R) {
          var Ae = y($);
          return new C(
            "Invalid " + Z + " `" + V + "` of type " + ("`" + Ae + "` supplied to `" + Q + "`, expected ") + ("`" + R + "`."),
            { expectedType: R }
          );
        }
        return null;
      }
      return U(b);
    }
    function z() {
      return U(c);
    }
    function N(R) {
      function b(h, M, Q, Z, V) {
        if (typeof R != "function")
          return new C("Property `" + V + "` of component `" + Q + "` has invalid PropType notation inside arrayOf.");
        var oe = h[M];
        if (!Array.isArray(oe)) {
          var $ = m(oe);
          return new C("Invalid " + Z + " `" + V + "` of type " + ("`" + $ + "` supplied to `" + Q + "`, expected an array."));
        }
        for (var se = 0; se < oe.length; se++) {
          var Ae = R(oe, se, Q, Z, V + "[" + se + "]", t);
          if (Ae instanceof Error)
            return Ae;
        }
        return null;
      }
      return U(b);
    }
    function F() {
      function R(b, h, M, Q, Z) {
        var V = b[h];
        if (!u(V)) {
          var oe = m(V);
          return new C("Invalid " + Q + " `" + Z + "` of type " + ("`" + oe + "` supplied to `" + M + "`, expected a single ReactElement."));
        }
        return null;
      }
      return U(R);
    }
    function O() {
      function R(b, h, M, Q, Z) {
        var V = b[h];
        if (!n.isValidElementType(V)) {
          var oe = m(V);
          return new C("Invalid " + Q + " `" + Z + "` of type " + ("`" + oe + "` supplied to `" + M + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return U(R);
    }
    function W(R) {
      function b(h, M, Q, Z, V) {
        if (!(h[M] instanceof R)) {
          var oe = R.name || T, $ = L(h[M]);
          return new C("Invalid " + Z + " `" + V + "` of type " + ("`" + $ + "` supplied to `" + Q + "`, expected ") + ("instance of `" + oe + "`."));
        }
        return null;
      }
      return U(b);
    }
    function G(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), c;
      function b(h, M, Q, Z, V) {
        for (var oe = h[M], $ = 0; $ < R.length; $++)
          if (_(oe, R[$]))
            return null;
        var se = JSON.stringify(R, function(xe, K) {
          var We = y(K);
          return We === "symbol" ? String(K) : K;
        });
        return new C("Invalid " + Z + " `" + V + "` of value `" + String(oe) + "` " + ("supplied to `" + Q + "`, expected one of " + se + "."));
      }
      return U(b);
    }
    function q(R) {
      function b(h, M, Q, Z, V) {
        if (typeof R != "function")
          return new C("Property `" + V + "` of component `" + Q + "` has invalid PropType notation inside objectOf.");
        var oe = h[M], $ = m(oe);
        if ($ !== "object")
          return new C("Invalid " + Z + " `" + V + "` of type " + ("`" + $ + "` supplied to `" + Q + "`, expected an object."));
        for (var se in oe)
          if (r(oe, se)) {
            var Ae = R(oe, se, Q, Z, V + "." + se, t);
            if (Ae instanceof Error)
              return Ae;
          }
        return null;
      }
      return U(b);
    }
    function le(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var b = 0; b < R.length; b++) {
        var h = R[b];
        if (typeof h != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + x(h) + " at index " + b + "."
          ), c;
      }
      function M(Q, Z, V, oe, $) {
        for (var se = [], Ae = 0; Ae < R.length; Ae++) {
          var xe = R[Ae], K = xe(Q, Z, V, oe, $, t);
          if (K == null)
            return null;
          K.data && r(K.data, "expectedType") && se.push(K.data.expectedType);
        }
        var We = se.length > 0 ? ", expected one of type [" + se.join(", ") + "]" : "";
        return new C("Invalid " + oe + " `" + $ + "` supplied to " + ("`" + V + "`" + We + "."));
      }
      return U(M);
    }
    function be() {
      function R(b, h, M, Q, Z) {
        return l(b[h]) ? null : new C("Invalid " + Q + " `" + Z + "` supplied to " + ("`" + M + "`, expected a ReactNode."));
      }
      return U(R);
    }
    function pe(R, b, h, M, Q) {
      return new C(
        (R || "React class") + ": " + b + " type `" + h + "." + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Q + "`."
      );
    }
    function ve(R) {
      function b(h, M, Q, Z, V) {
        var oe = h[M], $ = m(oe);
        if ($ !== "object")
          return new C("Invalid " + Z + " `" + V + "` of type `" + $ + "` " + ("supplied to `" + Q + "`, expected `object`."));
        for (var se in R) {
          var Ae = R[se];
          if (typeof Ae != "function")
            return pe(Q, Z, V, se, y(Ae));
          var xe = Ae(oe, se, Q, Z, V + "." + se, t);
          if (xe)
            return xe;
        }
        return null;
      }
      return U(b);
    }
    function I(R) {
      function b(h, M, Q, Z, V) {
        var oe = h[M], $ = m(oe);
        if ($ !== "object")
          return new C("Invalid " + Z + " `" + V + "` of type `" + $ + "` " + ("supplied to `" + Q + "`, expected `object`."));
        var se = e({}, h[M], R);
        for (var Ae in se) {
          var xe = R[Ae];
          if (r(R, Ae) && typeof xe != "function")
            return pe(Q, Z, V, Ae, y(xe));
          if (!xe)
            return new C(
              "Invalid " + Z + " `" + V + "` key `" + Ae + "` supplied to `" + Q + "`.\nBad object: " + JSON.stringify(h[M], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(R), null, "  ")
            );
          var K = xe(oe, Ae, Q, Z, V + "." + Ae, t);
          if (K)
            return K;
        }
        return null;
      }
      return U(b);
    }
    function l(R) {
      switch (typeof R) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !R;
        case "object":
          if (Array.isArray(R))
            return R.every(l);
          if (R === null || u(R))
            return !0;
          var b = S(R);
          if (b) {
            var h = b.call(R), M;
            if (b !== R.entries) {
              for (; !(M = h.next()).done; )
                if (!l(M.value))
                  return !1;
            } else
              for (; !(M = h.next()).done; ) {
                var Q = M.value;
                if (Q && !l(Q[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function p(R, b) {
      return R === "symbol" ? !0 : b ? b["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && b instanceof Symbol : !1;
    }
    function m(R) {
      var b = typeof R;
      return Array.isArray(R) ? "array" : R instanceof RegExp ? "object" : p(b, R) ? "symbol" : b;
    }
    function y(R) {
      if (typeof R > "u" || R === null)
        return "" + R;
      var b = m(R);
      if (b === "object") {
        if (R instanceof Date)
          return "date";
        if (R instanceof RegExp)
          return "regexp";
      }
      return b;
    }
    function x(R) {
      var b = y(R);
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
    function L(R) {
      return !R.constructor || !R.constructor.name ? T : R.constructor.name;
    }
    return E.checkPropTypes = i, E.resetWarningCache = i.resetWarningCache, E.PropTypes = E, E;
  }, Oo;
}
var Lo, Pa;
function Pl() {
  if (Pa)
    return Lo;
  Pa = 1;
  var n = Ps();
  function e() {
  }
  function t() {
  }
  return t.resetWarningCache = e, Lo = function() {
    function r(c, u, d, w, v, S) {
      if (S !== n) {
        var T = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw T.name = "Invariant Violation", T;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var o = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: t,
      resetWarningCache: e
    };
    return o.PropTypes = o, o;
  }, Lo;
}
if (process.env.NODE_ENV !== "production") {
  var Fl = Vc(), zl = !0;
  Ai.exports = Dl()(Fl.isElement, zl);
} else
  Ai.exports = Pl()();
var ms = { exports: {} }, fn = {}, vi = { exports: {} };
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
  var t = "none", r = "contents", i = /input|select|textarea|button|object|iframe/;
  function o(S, T) {
    return T.getPropertyValue("overflow") !== "visible" || S.scrollWidth <= 0 && S.scrollHeight <= 0;
  }
  function c(S) {
    var T = S.offsetWidth <= 0 && S.offsetHeight <= 0;
    if (T && !S.innerHTML)
      return !0;
    try {
      var E = window.getComputedStyle(S), _ = E.getPropertyValue("display");
      return T ? _ !== r && o(S, E) : _ === t;
    } catch {
      return console.warn("Failed to inspect element style"), !1;
    }
  }
  function u(S) {
    for (var T = S, E = S.getRootNode && S.getRootNode(); T && T !== document.body; ) {
      if (E && T === E && (T = E.host.parentNode), c(T))
        return !1;
      T = T.parentNode;
    }
    return !0;
  }
  function d(S, T) {
    var E = S.nodeName.toLowerCase(), _ = i.test(E) && !S.disabled || E === "a" && S.href || T;
    return _ && u(S);
  }
  function w(S) {
    var T = S.getAttribute("tabindex");
    T === null && (T = void 0);
    var E = isNaN(T);
    return (E || T >= 0) && d(S, !E);
  }
  function v(S) {
    var T = [].slice.call(S.querySelectorAll("*"), 0).reduce(function(E, _) {
      return E.concat(_.shadowRoot ? v(_.shadowRoot) : [_]);
    }, []);
    return T.filter(w);
  }
  n.exports = e.default;
})(vi, vi.exports);
Object.defineProperty(fn, "__esModule", {
  value: !0
});
fn.resetState = Gl;
fn.log = ql;
fn.handleBlur = Or;
fn.handleFocus = Lr;
fn.markForFocusLater = Ql;
fn.returnFocus = Yl;
fn.popWithoutFocus = Kl;
fn.setupScopedFocus = Vl;
fn.teardownScopedFocus = Zl;
var Hl = vi.exports, Wl = jl(Hl);
function jl(n) {
  return n && n.__esModule ? n : { default: n };
}
var er = [], ur = null, bs = !1;
function Gl() {
  er = [];
}
function ql() {
  process.env.NODE_ENV !== "production" && (console.log("focusManager ----------"), er.forEach(function(n) {
    var e = n || {};
    console.log(e.nodeName, e.className, e.id);
  }), console.log("end focusManager ----------"));
}
function Or() {
  bs = !0;
}
function Lr() {
  if (bs) {
    if (bs = !1, !ur)
      return;
    setTimeout(function() {
      if (!ur.contains(document.activeElement)) {
        var n = (0, Wl.default)(ur)[0] || ur;
        n.focus();
      }
    }, 0);
  }
}
function Ql() {
  er.push(document.activeElement);
}
function Yl() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, e = null;
  try {
    er.length !== 0 && (e = er.pop(), e.focus({ preventScroll: n }));
    return;
  } catch {
    console.warn(["You tried to return focus to", e, "but it is not in the DOM anymore"].join(" "));
  }
}
function Kl() {
  er.length > 0 && er.pop();
}
function Vl(n) {
  ur = n, window.addEventListener ? (window.addEventListener("blur", Or, !1), document.addEventListener("focus", Lr, !0)) : (window.attachEvent("onBlur", Or), document.attachEvent("onFocus", Lr));
}
function Zl() {
  ur = null, window.addEventListener ? (window.removeEventListener("blur", Or), document.removeEventListener("focus", Lr)) : (window.detachEvent("onBlur", Or), document.detachEvent("onFocus", Lr));
}
var As = { exports: {} };
(function(n, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = c;
  var t = vi.exports, r = i(t);
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function o() {
    var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    return u.activeElement.shadowRoot ? o(u.activeElement.shadowRoot) : u.activeElement;
  }
  function c(u, d) {
    var w = (0, r.default)(u);
    if (!w.length) {
      d.preventDefault();
      return;
    }
    var v = void 0, S = d.shiftKey, T = w[0], E = w[w.length - 1], _ = o();
    if (u === _) {
      if (!S)
        return;
      v = E;
    }
    if (E === _ && !S && (v = T), T === _ && S && (v = E), v) {
      d.preventDefault(), v.focus();
      return;
    }
    var C = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent), U = C != null && C[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;
    if (!!U) {
      var P = w.indexOf(_);
      if (P > -1 && (P += S ? -1 : 1), v = w[P], typeof v > "u") {
        d.preventDefault(), v = S ? E : T, v.focus();
        return;
      }
      d.preventDefault(), v.focus();
    }
  }
  n.exports = e.default;
})(As, As.exports);
var hn = {}, Jl = process.env.NODE_ENV !== "production", Jc = function() {
};
if (Jl) {
  var Xl = function(e, t) {
    var r = arguments.length;
    t = new Array(r > 1 ? r - 1 : 0);
    for (var i = 1; i < r; i++)
      t[i - 1] = arguments[i];
    var o = 0, c = "Warning: " + e.replace(/%s/g, function() {
      return t[o++];
    });
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  };
  Jc = function(n, e, t) {
    var r = arguments.length;
    t = new Array(r > 2 ? r - 2 : 0);
    for (var i = 2; i < r; i++)
      t[i - 2] = arguments[i];
    if (e === void 0)
      throw new Error(
        "`warning(condition, format, ...args)` requires a warning message argument"
      );
    n || Xl.apply(null, [e].concat(t));
  };
}
var $l = Jc, an = {}, Xc = { exports: {} };
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
})(Xc);
Object.defineProperty(an, "__esModule", {
  value: !0
});
an.canUseDOM = an.SafeNodeList = an.SafeHTMLCollection = void 0;
var ef = Xc.exports, tf = nf(ef);
function nf(n) {
  return n && n.__esModule ? n : { default: n };
}
var Wi = tf.default, rf = Wi.canUseDOM ? window.HTMLElement : {};
an.SafeHTMLCollection = Wi.canUseDOM ? window.HTMLCollection : {};
an.SafeNodeList = Wi.canUseDOM ? window.NodeList : {};
an.canUseDOM = Wi.canUseDOM;
an.default = rf;
Object.defineProperty(hn, "__esModule", {
  value: !0
});
hn.resetState = uf;
hn.log = lf;
hn.assertNodeList = $c;
hn.setElement = ff;
hn.validateElement = Fs;
hn.hide = hf;
hn.show = df;
hn.documentNotReadyOrSSRTesting = pf;
var of = $l, sf = cf(of), af = an;
function cf(n) {
  return n && n.__esModule ? n : { default: n };
}
var Gt = null;
function uf() {
  Gt && (Gt.removeAttribute ? Gt.removeAttribute("aria-hidden") : Gt.length != null ? Gt.forEach(function(n) {
    return n.removeAttribute("aria-hidden");
  }) : document.querySelectorAll(Gt).forEach(function(n) {
    return n.removeAttribute("aria-hidden");
  })), Gt = null;
}
function lf() {
  if (process.env.NODE_ENV !== "production") {
    var n = Gt || {};
    console.log("ariaAppHider ----------"), console.log(n.nodeName, n.className, n.id), console.log("end ariaAppHider ----------");
  }
}
function $c(n, e) {
  if (!n || !n.length)
    throw new Error("react-modal: No elements were found for selector " + e + ".");
}
function ff(n) {
  var e = n;
  if (typeof e == "string" && af.canUseDOM) {
    var t = document.querySelectorAll(e);
    $c(t, e), e = t;
  }
  return Gt = e || Gt, Gt;
}
function Fs(n) {
  var e = n || Gt;
  return e ? Array.isArray(e) || e instanceof HTMLCollection || e instanceof NodeList ? e : [e] : ((0, sf.default)(!1, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" ")), []);
}
function hf(n) {
  var e = !0, t = !1, r = void 0;
  try {
    for (var i = Fs(n)[Symbol.iterator](), o; !(e = (o = i.next()).done); e = !0) {
      var c = o.value;
      c.setAttribute("aria-hidden", "true");
    }
  } catch (u) {
    t = !0, r = u;
  } finally {
    try {
      !e && i.return && i.return();
    } finally {
      if (t)
        throw r;
    }
  }
}
function df(n) {
  var e = !0, t = !1, r = void 0;
  try {
    for (var i = Fs(n)[Symbol.iterator](), o; !(e = (o = i.next()).done); e = !0) {
      var c = o.value;
      c.removeAttribute("aria-hidden");
    }
  } catch (u) {
    t = !0, r = u;
  } finally {
    try {
      !e && i.return && i.return();
    } finally {
      if (t)
        throw r;
    }
  }
}
function pf() {
  Gt = null;
}
var Ar = {};
Object.defineProperty(Ar, "__esModule", {
  value: !0
});
Ar.resetState = gf;
Ar.log = yf;
var qn = {}, Qn = {};
function Fa(n, e) {
  n.classList.remove(e);
}
function gf() {
  var n = document.getElementsByTagName("html")[0];
  for (var e in qn)
    Fa(n, qn[e]);
  var t = document.body;
  for (var r in Qn)
    Fa(t, Qn[r]);
  qn = {}, Qn = {};
}
function yf() {
  if (process.env.NODE_ENV !== "production") {
    var n = document.getElementsByTagName("html")[0].className, e = `Show tracked classes:

`;
    e += "<html /> (" + n + `):
  `;
    for (var t in qn)
      e += "  " + t + " " + qn[t] + `
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
var wf = function(e, t) {
  return e[t] || (e[t] = 0), e[t] += 1, t;
}, mf = function(e, t) {
  return e[t] && (e[t] -= 1), t;
}, bf = function(e, t, r) {
  r.forEach(function(i) {
    wf(t, i), e.add(i);
  });
}, Af = function(e, t, r) {
  r.forEach(function(i) {
    mf(t, i), t[i] === 0 && e.remove(i);
  });
};
Ar.add = function(e, t) {
  return bf(e.classList, e.nodeName.toLowerCase() == "html" ? qn : Qn, t.split(" "));
};
Ar.remove = function(e, t) {
  return Af(e.classList, e.nodeName.toLowerCase() == "html" ? qn : Qn, t.split(" "));
};
var vr = {};
Object.defineProperty(vr, "__esModule", {
  value: !0
});
vr.log = Ef;
vr.resetState = xf;
function vf(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
var eu = function n() {
  var e = this;
  vf(this, n), this.register = function(t) {
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
}, Ei = new eu();
function Ef() {
  console.log("portalOpenInstances ----------"), console.log(Ei.openInstances.length), Ei.openInstances.forEach(function(n) {
    return console.log(n);
  }), console.log("end portalOpenInstances ----------");
}
function xf() {
  Ei = new eu();
}
vr.default = Ei;
var zs = {};
Object.defineProperty(zs, "__esModule", {
  value: !0
});
zs.resetState = Mf;
zs.log = _f;
var Sf = vr, If = Bf(Sf);
function Bf(n) {
  return n && n.__esModule ? n : { default: n };
}
var Ut = void 0, rn = void 0, Yn = [];
function Mf() {
  for (var n = [Ut, rn], e = 0; e < n.length; e++) {
    var t = n[e];
    !t || t.parentNode && t.parentNode.removeChild(t);
  }
  Ut = rn = null, Yn = [];
}
function _f() {
  console.log("bodyTrap ----------"), console.log(Yn.length);
  for (var n = [Ut, rn], e = 0; e < n.length; e++) {
    var t = n[e], r = t || {};
    console.log(r.nodeName, r.className, r.id);
  }
  console.log("edn bodyTrap ----------");
}
function za() {
  if (Yn.length === 0) {
    process.env.NODE_ENV !== "production" && console.warn("React-Modal: Open instances > 0 expected");
    return;
  }
  Yn[Yn.length - 1].focusContent();
}
function Cf(n, e) {
  !Ut && !rn && (Ut = document.createElement("div"), Ut.setAttribute("data-react-modal-body-trap", ""), Ut.style.position = "absolute", Ut.style.opacity = "0", Ut.setAttribute("tabindex", "0"), Ut.addEventListener("focus", za), rn = Ut.cloneNode(), rn.addEventListener("focus", za)), Yn = e, Yn.length > 0 ? (document.body.firstChild !== Ut && document.body.insertBefore(Ut, document.body.firstChild), document.body.lastChild !== rn && document.body.appendChild(rn)) : (Ut.parentElement && Ut.parentElement.removeChild(Ut), rn.parentElement && rn.parentElement.removeChild(rn));
}
If.default.subscribe(Cf);
(function(n, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var t = Object.assign || function(l) {
    for (var p = 1; p < arguments.length; p++) {
      var m = arguments[p];
      for (var y in m)
        Object.prototype.hasOwnProperty.call(m, y) && (l[y] = m[y]);
    }
    return l;
  }, r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
    return typeof l;
  } : function(l) {
    return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
  }, i = function() {
    function l(p, m) {
      for (var y = 0; y < m.length; y++) {
        var x = m[y];
        x.enumerable = x.enumerable || !1, x.configurable = !0, "value" in x && (x.writable = !0), Object.defineProperty(p, x.key, x);
      }
    }
    return function(p, m, y) {
      return m && l(p.prototype, m), y && l(p, y), p;
    };
  }(), o = D, c = Ai.exports, u = O(c), d = fn, w = F(d), v = As.exports, S = O(v), T = hn, E = F(T), _ = Ar, C = F(_), U = an, P = O(U), z = vr, N = O(z);
  function F(l) {
    if (l && l.__esModule)
      return l;
    var p = {};
    if (l != null)
      for (var m in l)
        Object.prototype.hasOwnProperty.call(l, m) && (p[m] = l[m]);
    return p.default = l, p;
  }
  function O(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function W(l, p) {
    if (!(l instanceof p))
      throw new TypeError("Cannot call a class as a function");
  }
  function G(l, p) {
    if (!l)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return p && (typeof p == "object" || typeof p == "function") ? p : l;
  }
  function q(l, p) {
    if (typeof p != "function" && p !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof p);
    l.prototype = Object.create(p && p.prototype, { constructor: { value: l, enumerable: !1, writable: !0, configurable: !0 } }), p && (Object.setPrototypeOf ? Object.setPrototypeOf(l, p) : l.__proto__ = p);
  }
  var le = {
    overlay: "ReactModal__Overlay",
    content: "ReactModal__Content"
  }, be = function(p) {
    return p.code === "Tab" || p.keyCode === 9;
  }, pe = function(p) {
    return p.code === "Escape" || p.keyCode === 27;
  }, ve = 0, I = function(l) {
    q(p, l);
    function p(m) {
      W(this, p);
      var y = G(this, (p.__proto__ || Object.getPrototypeOf(p)).call(this, m));
      return y.setOverlayRef = function(x) {
        y.overlay = x, y.props.overlayRef && y.props.overlayRef(x);
      }, y.setContentRef = function(x) {
        y.content = x, y.props.contentRef && y.props.contentRef(x);
      }, y.afterClose = function() {
        var x = y.props, L = x.appElement, R = x.ariaHideApp, b = x.htmlOpenClassName, h = x.bodyOpenClassName, M = x.parentSelector, Q = M && M().ownerDocument || document;
        h && C.remove(Q.body, h), b && C.remove(Q.getElementsByTagName("html")[0], b), R && ve > 0 && (ve -= 1, ve === 0 && E.show(L)), y.props.shouldFocusAfterRender && (y.props.shouldReturnFocusAfterClose ? (w.returnFocus(y.props.preventScroll), w.teardownScopedFocus()) : w.popWithoutFocus()), y.props.onAfterClose && y.props.onAfterClose(), N.default.deregister(y);
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
        be(x) && (0, S.default)(y.content, x), y.props.shouldCloseOnEsc && pe(x) && (x.stopPropagation(), y.requestClose(x));
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
      }, y.buildClassName = function(x, L) {
        var R = (typeof L > "u" ? "undefined" : r(L)) === "object" ? L : {
          base: le[x],
          afterOpen: le[x] + "--after-open",
          beforeClose: le[x] + "--before-close"
        }, b = R.base;
        return y.state.afterOpen && (b = b + " " + R.afterOpen), y.state.beforeClose && (b = b + " " + R.beforeClose), typeof L == "string" && L ? b + " " + L : b;
      }, y.attributesFromObject = function(x, L) {
        return Object.keys(L).reduce(function(R, b) {
          return R[x + "-" + b] = L[b], R;
        }, {});
      }, y.state = {
        afterOpen: !1,
        beforeClose: !1
      }, y.shouldClose = null, y.moveFromContentToOverlay = null, y;
    }
    return i(p, [{
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
        var y = this.props, x = y.appElement, L = y.ariaHideApp, R = y.htmlOpenClassName, b = y.bodyOpenClassName, h = y.parentSelector, M = h && h().ownerDocument || document;
        b && C.add(M.body, b), R && C.add(M.getElementsByTagName("html")[0], R), L && (ve += 1, E.hide(x)), N.default.register(this);
      }
    }, {
      key: "render",
      value: function() {
        var y = this.props, x = y.id, L = y.className, R = y.overlayClassName, b = y.defaultStyles, h = y.children, M = L ? {} : b.content, Q = R ? {} : b.overlay;
        if (this.shouldBeClosed())
          return null;
        var Z = {
          ref: this.setOverlayRef,
          className: this.buildClassName("overlay", R),
          style: t({}, Q, this.props.style.overlay),
          onClick: this.handleOverlayOnClick,
          onMouseDown: this.handleOverlayOnMouseDown
        }, V = t({
          id: x,
          ref: this.setContentRef,
          style: t({}, M, this.props.style.content),
          className: this.buildClassName("content", L),
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
    }]), p;
  }(o.Component);
  I.defaultProps = {
    style: {
      overlay: {},
      content: {}
    },
    defaultStyles: {}
  }, I.propTypes = {
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
  }, e.default = I, n.exports = e.default;
})(ms, ms.exports);
function tu() {
  var n = this.constructor.getDerivedStateFromProps(this.props, this.state);
  n != null && this.setState(n);
}
function nu(n) {
  function e(t) {
    var r = this.constructor.getDerivedStateFromProps(n, t);
    return r != null ? r : null;
  }
  this.setState(e.bind(this));
}
function ru(n, e) {
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
tu.__suppressDeprecationWarning = !0;
nu.__suppressDeprecationWarning = !0;
ru.__suppressDeprecationWarning = !0;
function Tf(n) {
  var e = n.prototype;
  if (!e || !e.isReactComponent)
    throw new Error("Can only polyfill class components");
  if (typeof n.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function")
    return n;
  var t = null, r = null, i = null;
  if (typeof e.componentWillMount == "function" ? t = "componentWillMount" : typeof e.UNSAFE_componentWillMount == "function" && (t = "UNSAFE_componentWillMount"), typeof e.componentWillReceiveProps == "function" ? r = "componentWillReceiveProps" : typeof e.UNSAFE_componentWillReceiveProps == "function" && (r = "UNSAFE_componentWillReceiveProps"), typeof e.componentWillUpdate == "function" ? i = "componentWillUpdate" : typeof e.UNSAFE_componentWillUpdate == "function" && (i = "UNSAFE_componentWillUpdate"), t !== null || r !== null || i !== null) {
    var o = n.displayName || n.name, c = typeof n.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
    throw Error(
      `Unsafe legacy lifecycles will not be called for components using new component APIs.

` + o + " uses " + c + " but also contains the following legacy lifecycles:" + (t !== null ? `
  ` + t : "") + (r !== null ? `
  ` + r : "") + (i !== null ? `
  ` + i : "") + `

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`
    );
  }
  if (typeof n.getDerivedStateFromProps == "function" && (e.componentWillMount = tu, e.componentWillReceiveProps = nu), typeof e.getSnapshotBeforeUpdate == "function") {
    if (typeof e.componentDidUpdate != "function")
      throw new Error(
        "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
      );
    e.componentWillUpdate = ru;
    var u = e.componentDidUpdate;
    e.componentDidUpdate = function(w, v, S) {
      var T = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : S;
      u.call(this, w, v, T);
    };
  }
  return n;
}
const Rf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  polyfill: Tf
}, Symbol.toStringTag, { value: "Module" })), kf = /* @__PURE__ */ Hi(Rf);
Object.defineProperty($n, "__esModule", {
  value: !0
});
$n.bodyOpenClassName = $n.portalClassName = void 0;
var Ha = Object.assign || function(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e];
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
  }
  return n;
}, Nf = function() {
  function n(e, t) {
    for (var r = 0; r < t.length; r++) {
      var i = t[r];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }
  return function(e, t, r) {
    return t && n(e.prototype, t), r && n(e, r), e;
  };
}(), iu = D, xi = Yr(iu), Of = Al, Si = Yr(Of), Lf = Ai.exports, me = Yr(Lf), Uf = ms.exports, Wa = Yr(Uf), Df = hn, Pf = zf(Df), Nn = an, ja = Yr(Nn), Ff = kf;
function zf(n) {
  if (n && n.__esModule)
    return n;
  var e = {};
  if (n != null)
    for (var t in n)
      Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
  return e.default = n, e;
}
function Yr(n) {
  return n && n.__esModule ? n : { default: n };
}
function Hf(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ga(n, e) {
  if (!n)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : n;
}
function Wf(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  n.prototype = Object.create(e && e.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(n, e) : n.__proto__ = e);
}
var jf = $n.portalClassName = "ReactModalPortal", Gf = $n.bodyOpenClassName = "ReactModal__Body--open", Hn = Nn.canUseDOM && Si.default.createPortal !== void 0, vs = function(e) {
  return document.createElement(e);
}, qa = function() {
  return Hn ? Si.default.createPortal : Si.default.unstable_renderSubtreeIntoContainer;
};
function oi(n) {
  return n();
}
var Er = function(n) {
  Wf(e, n);
  function e() {
    var t, r, i, o;
    Hf(this, e);
    for (var c = arguments.length, u = Array(c), d = 0; d < c; d++)
      u[d] = arguments[d];
    return o = (r = (i = Ga(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(u))), i), i.removePortal = function() {
      !Hn && Si.default.unmountComponentAtNode(i.node);
      var w = oi(i.props.parentSelector);
      w && w.contains(i.node) ? w.removeChild(i.node) : console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.');
    }, i.portalRef = function(w) {
      i.portal = w;
    }, i.renderPortal = function(w) {
      var v = qa(), S = v(i, xi.default.createElement(Wa.default, Ha({ defaultStyles: e.defaultStyles }, w)), i.node);
      i.portalRef(S);
    }, r), Ga(i, o);
  }
  return Nf(e, [{
    key: "componentDidMount",
    value: function() {
      if (!!Nn.canUseDOM) {
        Hn || (this.node = vs("div")), this.node.className = this.props.portalClassName;
        var r = oi(this.props.parentSelector);
        r.appendChild(this.node), !Hn && this.renderPortal(this.props);
      }
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function(r) {
      var i = oi(r.parentSelector), o = oi(this.props.parentSelector);
      return { prevParent: i, nextParent: o };
    }
  }, {
    key: "componentDidUpdate",
    value: function(r, i, o) {
      if (!!Nn.canUseDOM) {
        var c = this.props, u = c.isOpen, d = c.portalClassName;
        r.portalClassName !== d && (this.node.className = d);
        var w = o.prevParent, v = o.nextParent;
        v !== w && (w.removeChild(this.node), v.appendChild(this.node)), !(!r.isOpen && !u) && !Hn && this.renderPortal(this.props);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      if (!(!Nn.canUseDOM || !this.node || !this.portal)) {
        var r = this.portal.state, i = Date.now(), o = r.isOpen && this.props.closeTimeoutMS && (r.closesAt || i + this.props.closeTimeoutMS);
        o ? (r.beforeClose || this.portal.closeWithTimeout(), setTimeout(this.removePortal, o - i)) : this.removePortal();
      }
    }
  }, {
    key: "render",
    value: function() {
      if (!Nn.canUseDOM || !Hn)
        return null;
      !this.node && Hn && (this.node = vs("div"));
      var r = qa();
      return r(xi.default.createElement(Wa.default, Ha({
        ref: this.portalRef,
        defaultStyles: e.defaultStyles
      }, this.props)), this.node);
    }
  }], [{
    key: "setAppElement",
    value: function(r) {
      Pf.setElement(r);
    }
  }]), e;
}(iu.Component);
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
  appElement: me.default.oneOfType([me.default.instanceOf(ja.default), me.default.instanceOf(Nn.SafeHTMLCollection), me.default.instanceOf(Nn.SafeNodeList), me.default.arrayOf(me.default.instanceOf(ja.default))]),
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
  portalClassName: jf,
  bodyOpenClassName: Gf,
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
    return xi.default.createElement(
      "div",
      e,
      t
    );
  },
  contentElement: function(e, t) {
    return xi.default.createElement(
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
(0, Ff.polyfill)(Er);
process.env.NODE_ENV !== "production" && (Er.setCreateHTMLElement = function(n) {
  return vs = n;
});
$n.default = Er;
(function(n, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var t = $n, r = i(t);
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  e.default = r.default, n.exports = e.default;
})(ws, ws.exports);
const qf = /* @__PURE__ */ kl(ws.exports);
function ou({
  isOpen: n,
  onRequestClose: e,
  title: t,
  children: r
}) {
  return /* @__PURE__ */ D.createElement(qf, {
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
function Qf({
  projectData: n,
  appId: e,
  hasUser: t,
  logger: r
}) {
  var E;
  const [i, o] = _e(!1), [c, u] = _e(!1), [d, w] = _e(""), { twitterData: v } = zi(), S = Yt(() => {
    var U, P;
    if (!((U = n == null ? void 0 : n.twitter) != null && U.enabled))
      return [];
    const { twitter: _ } = n, C = [];
    if (_ != null && _.isFollowRequired) {
      const z = (P = _ == null ? void 0 : _.follow) == null ? void 0 : P.split(","), N = /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("ul", {
        className: "hypeday-req-list"
      }, z == null ? void 0 : z.map((F) => /* @__PURE__ */ D.createElement("li", {
        key: F,
        className: "hypeday-req-list-item"
      }, /* @__PURE__ */ D.createElement("span", null, "Follow ", /* @__PURE__ */ D.createElement("strong", null, "@", F), " on Twitter", /* @__PURE__ */ D.createElement(sn, {
        required: !_.isFollowOptional
      })), /* @__PURE__ */ D.createElement("a", {
        href: `https://twitter.com/${F.trim()}`,
        target: "_blank",
        rel: "noreferrer",
        className: "hypeday-button-gray"
      }, "Follow")))));
      C.push(N);
    }
    if (_ != null && _.isRetweetRequired) {
      const z = /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("div", {
        className: "hypeday-req-list-item"
      }, /* @__PURE__ */ D.createElement("div", null, "Retweet", " ", /* @__PURE__ */ D.createElement("a", {
        href: _.retweetUrl,
        className: "hypeday-a-text-decoration-none",
        target: "_blank",
        rel: "noreferrer"
      }, /* @__PURE__ */ D.createElement("strong", null, "this")), " ", "on Twitter", /* @__PURE__ */ D.createElement(sn, {
        required: !_.isRetweetOptional
      })), /* @__PURE__ */ D.createElement("a", {
        href: _.retweetUrl,
        target: "_blank",
        rel: "noreferrer",
        className: "hypeday-button-gray"
      }, "Retweet")));
      C.push(z);
    }
    if (_ != null && _.isLikeRequired) {
      const z = /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("div", {
        className: "hypeday-req-list-item"
      }, /* @__PURE__ */ D.createElement("div", null, "Like", " ", /* @__PURE__ */ D.createElement("a", {
        href: _.likeUrl,
        className: "hypeday-a-text-decoration-none",
        target: "_blank",
        rel: "noreferrer"
      }, /* @__PURE__ */ D.createElement("strong", null, "this")), " ", "on Twitter", /* @__PURE__ */ D.createElement(sn, {
        required: !_.isLikeOptional
      })), /* @__PURE__ */ D.createElement("a", {
        href: _.likeUrl,
        target: "_blank",
        rel: "noreferrer",
        className: "hypeday-button-gray"
      }, "Like")));
      C.push(z);
    }
    if (_ != null && _.isAccountCreatedRequired) {
      const z = /* @__PURE__ */ D.createElement(D.Fragment, null, "Have an account created before", " ", /* @__PURE__ */ D.createElement("strong", null, new Date((_ == null ? void 0 : _.accountCreated) || "").toLocaleDateString()), /* @__PURE__ */ D.createElement(sn, {
        required: !_.isAccountCreatedOptional
      }));
      C.push(z);
    }
    if (_ != null && _.isMinFollowersRequired) {
      const z = /* @__PURE__ */ D.createElement(D.Fragment, null, "Have at least ", /* @__PURE__ */ D.createElement("b", null, _.minFollowers, " follower(s)"), /* @__PURE__ */ D.createElement(sn, {
        required: !_.isMinFollowersOptional
      }));
      C.push(z);
    }
    return C;
  }, [n]), T = async () => {
    if (!(!e || !t || !(n != null && n.id)))
      try {
        o(!0);
        const { url: _ } = await qc({
          provider: "twitter",
          appId: e,
          projectId: n.id,
          returnUrl: window.location.href
        });
        ys() && (window.open(_, "_blank"), window.open(_, "_blank")), window.location.assign(_);
      } catch (_) {
        console.error(_), w(Yc(_)), r == null || r.error(
          "HypeDayReact: Error getting Twitter oauth url",
          "hype04",
          _
        );
      } finally {
        o(!1);
      }
  };
  return (E = n == null ? void 0 : n.twitter) != null && E.enabled ? /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement(ou, {
    isOpen: c,
    onRequestClose: () => u(!1)
  }, /* @__PURE__ */ D.createElement("p", {
    className: "hypeday-modal-p"
  }, "Next, you will be redirected to Twitter to complete the connection request. Please ignore the 'Open in the app' prompts and stay in the browser. Twitter app does not support establishing/authorizing connections in the app."), /* @__PURE__ */ D.createElement("button", {
    className: "hypeday-button hypeday-modal-button",
    onClick: () => {
      u(!1), T();
    }
  }, "Ok")), /* @__PURE__ */ D.createElement(Us, {
    title: "Twitter",
    onClick: () => {
      if (ys())
        return u(!0);
      T();
    },
    info: S,
    rightText: v == null ? void 0 : v.username,
    buttonDisabled: !t,
    isLoading: i,
    errorMessage: d
  })) : null;
}
var Ee = {}, Kr = {};
Kr.byteLength = Vf;
Kr.toByteArray = Jf;
Kr.fromByteArray = eh;
var yn = [], Zt = [], Yf = typeof Uint8Array < "u" ? Uint8Array : Array, Uo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var ar = 0, Kf = Uo.length; ar < Kf; ++ar)
  yn[ar] = Uo[ar], Zt[Uo.charCodeAt(ar)] = ar;
Zt["-".charCodeAt(0)] = 62;
Zt["_".charCodeAt(0)] = 63;
function su(n) {
  var e = n.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var t = n.indexOf("=");
  t === -1 && (t = e);
  var r = t === e ? 0 : 4 - t % 4;
  return [t, r];
}
function Vf(n) {
  var e = su(n), t = e[0], r = e[1];
  return (t + r) * 3 / 4 - r;
}
function Zf(n, e, t) {
  return (e + t) * 3 / 4 - t;
}
function Jf(n) {
  var e, t = su(n), r = t[0], i = t[1], o = new Yf(Zf(n, r, i)), c = 0, u = i > 0 ? r - 4 : r, d;
  for (d = 0; d < u; d += 4)
    e = Zt[n.charCodeAt(d)] << 18 | Zt[n.charCodeAt(d + 1)] << 12 | Zt[n.charCodeAt(d + 2)] << 6 | Zt[n.charCodeAt(d + 3)], o[c++] = e >> 16 & 255, o[c++] = e >> 8 & 255, o[c++] = e & 255;
  return i === 2 && (e = Zt[n.charCodeAt(d)] << 2 | Zt[n.charCodeAt(d + 1)] >> 4, o[c++] = e & 255), i === 1 && (e = Zt[n.charCodeAt(d)] << 10 | Zt[n.charCodeAt(d + 1)] << 4 | Zt[n.charCodeAt(d + 2)] >> 2, o[c++] = e >> 8 & 255, o[c++] = e & 255), o;
}
function Xf(n) {
  return yn[n >> 18 & 63] + yn[n >> 12 & 63] + yn[n >> 6 & 63] + yn[n & 63];
}
function $f(n, e, t) {
  for (var r, i = [], o = e; o < t; o += 3)
    r = (n[o] << 16 & 16711680) + (n[o + 1] << 8 & 65280) + (n[o + 2] & 255), i.push(Xf(r));
  return i.join("");
}
function eh(n) {
  for (var e, t = n.length, r = t % 3, i = [], o = 16383, c = 0, u = t - r; c < u; c += o)
    i.push($f(n, c, c + o > u ? u : c + o));
  return r === 1 ? (e = n[t - 1], i.push(
    yn[e >> 2] + yn[e << 4 & 63] + "=="
  )) : r === 2 && (e = (n[t - 2] << 8) + n[t - 1], i.push(
    yn[e >> 10] + yn[e >> 4 & 63] + yn[e << 2 & 63] + "="
  )), i.join("");
}
var ji = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
ji.read = function(n, e, t, r, i) {
  var o, c, u = i * 8 - r - 1, d = (1 << u) - 1, w = d >> 1, v = -7, S = t ? i - 1 : 0, T = t ? -1 : 1, E = n[e + S];
  for (S += T, o = E & (1 << -v) - 1, E >>= -v, v += u; v > 0; o = o * 256 + n[e + S], S += T, v -= 8)
    ;
  for (c = o & (1 << -v) - 1, o >>= -v, v += r; v > 0; c = c * 256 + n[e + S], S += T, v -= 8)
    ;
  if (o === 0)
    o = 1 - w;
  else {
    if (o === d)
      return c ? NaN : (E ? -1 : 1) * (1 / 0);
    c = c + Math.pow(2, r), o = o - w;
  }
  return (E ? -1 : 1) * c * Math.pow(2, o - r);
};
ji.write = function(n, e, t, r, i, o) {
  var c, u, d, w = o * 8 - i - 1, v = (1 << w) - 1, S = v >> 1, T = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, E = r ? 0 : o - 1, _ = r ? 1 : -1, C = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (u = isNaN(e) ? 1 : 0, c = v) : (c = Math.floor(Math.log(e) / Math.LN2), e * (d = Math.pow(2, -c)) < 1 && (c--, d *= 2), c + S >= 1 ? e += T / d : e += T * Math.pow(2, 1 - S), e * d >= 2 && (c++, d /= 2), c + S >= v ? (u = 0, c = v) : c + S >= 1 ? (u = (e * d - 1) * Math.pow(2, i), c = c + S) : (u = e * Math.pow(2, S - 1) * Math.pow(2, i), c = 0)); i >= 8; n[t + E] = u & 255, E += _, u /= 256, i -= 8)
    ;
  for (c = c << i | u, w += i; w > 0; n[t + E] = c & 255, E += _, c /= 256, w -= 8)
    ;
  n[t + E - _] |= C * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(n) {
  const e = Kr, t = ji, r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  n.Buffer = u, n.SlowBuffer = z, n.INSPECT_MAX_BYTES = 50;
  const i = 2147483647;
  n.kMaxLength = i, u.TYPED_ARRAY_SUPPORT = o(), !u.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function o() {
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
    if (f > i)
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
      return S(f);
    }
    return d(f, s, a);
  }
  u.poolSize = 8192;
  function d(f, s, a) {
    if (typeof f == "string")
      return T(f, s);
    if (ArrayBuffer.isView(f))
      return _(f);
    if (f == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof f
      );
    if (Qe(f, ArrayBuffer) || f && Qe(f.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Qe(f, SharedArrayBuffer) || f && Qe(f.buffer, SharedArrayBuffer)))
      return C(f, s, a);
    if (typeof f == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const g = f.valueOf && f.valueOf();
    if (g != null && g !== f)
      return u.from(g, s, a);
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
  function S(f) {
    return w(f), c(f < 0 ? 0 : P(f) | 0);
  }
  u.allocUnsafe = function(f) {
    return S(f);
  }, u.allocUnsafeSlow = function(f) {
    return S(f);
  };
  function T(f, s) {
    if ((typeof s != "string" || s === "") && (s = "utf8"), !u.isEncoding(s))
      throw new TypeError("Unknown encoding: " + s);
    const a = N(f, s) | 0;
    let g = c(a);
    const A = g.write(f, s);
    return A !== a && (g = g.slice(0, A)), g;
  }
  function E(f) {
    const s = f.length < 0 ? 0 : P(f.length) | 0, a = c(s);
    for (let g = 0; g < s; g += 1)
      a[g] = f[g] & 255;
    return a;
  }
  function _(f) {
    if (Qe(f, Uint8Array)) {
      const s = new Uint8Array(f);
      return C(s.buffer, s.byteOffset, s.byteLength);
    }
    return E(f);
  }
  function C(f, s, a) {
    if (s < 0 || f.byteLength < s)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (f.byteLength < s + (a || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let g;
    return s === void 0 && a === void 0 ? g = new Uint8Array(f) : a === void 0 ? g = new Uint8Array(f, s) : g = new Uint8Array(f, s, a), Object.setPrototypeOf(g, u.prototype), g;
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
    if (f >= i)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return f | 0;
  }
  function z(f) {
    return +f != f && (f = 0), u.alloc(+f);
  }
  u.isBuffer = function(s) {
    return s != null && s._isBuffer === !0 && s !== u.prototype;
  }, u.compare = function(s, a) {
    if (Qe(s, Uint8Array) && (s = u.from(s, s.offset, s.byteLength)), Qe(a, Uint8Array) && (a = u.from(a, a.offset, a.byteLength)), !u.isBuffer(s) || !u.isBuffer(a))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (s === a)
      return 0;
    let g = s.length, A = a.length;
    for (let B = 0, k = Math.min(g, A); B < k; ++B)
      if (s[B] !== a[B]) {
        g = s[B], A = a[B];
        break;
      }
    return g < A ? -1 : A < g ? 1 : 0;
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
    let g;
    if (a === void 0)
      for (a = 0, g = 0; g < s.length; ++g)
        a += s[g].length;
    const A = u.allocUnsafe(a);
    let B = 0;
    for (g = 0; g < s.length; ++g) {
      let k = s[g];
      if (Qe(k, Uint8Array))
        B + k.length > A.length ? (u.isBuffer(k) || (k = u.from(k)), k.copy(A, B)) : Uint8Array.prototype.set.call(
          A,
          k,
          B
        );
      else if (u.isBuffer(k))
        k.copy(A, B);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      B += k.length;
    }
    return A;
  };
  function N(f, s) {
    if (u.isBuffer(f))
      return f.length;
    if (ArrayBuffer.isView(f) || Qe(f, ArrayBuffer))
      return f.byteLength;
    if (typeof f != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof f
      );
    const a = f.length, g = arguments.length > 2 && arguments[2] === !0;
    if (!g && a === 0)
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
          return Ge(f).length;
        default:
          if (A)
            return g ? -1 : ze(f).length;
          s = ("" + s).toLowerCase(), A = !0;
      }
  }
  u.byteLength = N;
  function F(f, s, a) {
    let g = !1;
    if ((s === void 0 || s < 0) && (s = 0), s > this.length || ((a === void 0 || a > this.length) && (a = this.length), a <= 0) || (a >>>= 0, s >>>= 0, a <= s))
      return "";
    for (f || (f = "utf8"); ; )
      switch (f) {
        case "hex":
          return L(this, s, a);
        case "utf8":
        case "utf-8":
          return l(this, s, a);
        case "ascii":
          return y(this, s, a);
        case "latin1":
        case "binary":
          return x(this, s, a);
        case "base64":
          return I(this, s, a);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return R(this, s, a);
        default:
          if (g)
            throw new TypeError("Unknown encoding: " + f);
          f = (f + "").toLowerCase(), g = !0;
      }
  }
  u.prototype._isBuffer = !0;
  function O(f, s, a) {
    const g = f[s];
    f[s] = f[a], f[a] = g;
  }
  u.prototype.swap16 = function() {
    const s = this.length;
    if (s % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let a = 0; a < s; a += 2)
      O(this, a, a + 1);
    return this;
  }, u.prototype.swap32 = function() {
    const s = this.length;
    if (s % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let a = 0; a < s; a += 4)
      O(this, a, a + 3), O(this, a + 1, a + 2);
    return this;
  }, u.prototype.swap64 = function() {
    const s = this.length;
    if (s % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let a = 0; a < s; a += 8)
      O(this, a, a + 7), O(this, a + 1, a + 6), O(this, a + 2, a + 5), O(this, a + 3, a + 4);
    return this;
  }, u.prototype.toString = function() {
    const s = this.length;
    return s === 0 ? "" : arguments.length === 0 ? l(this, 0, s) : F.apply(this, arguments);
  }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(s) {
    if (!u.isBuffer(s))
      throw new TypeError("Argument must be a Buffer");
    return this === s ? !0 : u.compare(this, s) === 0;
  }, u.prototype.inspect = function() {
    let s = "";
    const a = n.INSPECT_MAX_BYTES;
    return s = this.toString("hex", 0, a).replace(/(.{2})/g, "$1 ").trim(), this.length > a && (s += " ... "), "<Buffer " + s + ">";
  }, r && (u.prototype[r] = u.prototype.inspect), u.prototype.compare = function(s, a, g, A, B) {
    if (Qe(s, Uint8Array) && (s = u.from(s, s.offset, s.byteLength)), !u.isBuffer(s))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof s
      );
    if (a === void 0 && (a = 0), g === void 0 && (g = s ? s.length : 0), A === void 0 && (A = 0), B === void 0 && (B = this.length), a < 0 || g > s.length || A < 0 || B > this.length)
      throw new RangeError("out of range index");
    if (A >= B && a >= g)
      return 0;
    if (A >= B)
      return -1;
    if (a >= g)
      return 1;
    if (a >>>= 0, g >>>= 0, A >>>= 0, B >>>= 0, this === s)
      return 0;
    let k = B - A, X = g - a;
    const ie = Math.min(k, X), ne = this.slice(A, B), ye = s.slice(a, g);
    for (let ee = 0; ee < ie; ++ee)
      if (ne[ee] !== ye[ee]) {
        k = ne[ee], X = ye[ee];
        break;
      }
    return k < X ? -1 : X < k ? 1 : 0;
  };
  function W(f, s, a, g, A) {
    if (f.length === 0)
      return -1;
    if (typeof a == "string" ? (g = a, a = 0) : a > 2147483647 ? a = 2147483647 : a < -2147483648 && (a = -2147483648), a = +a, He(a) && (a = A ? 0 : f.length - 1), a < 0 && (a = f.length + a), a >= f.length) {
      if (A)
        return -1;
      a = f.length - 1;
    } else if (a < 0)
      if (A)
        a = 0;
      else
        return -1;
    if (typeof s == "string" && (s = u.from(s, g)), u.isBuffer(s))
      return s.length === 0 ? -1 : G(f, s, a, g, A);
    if (typeof s == "number")
      return s = s & 255, typeof Uint8Array.prototype.indexOf == "function" ? A ? Uint8Array.prototype.indexOf.call(f, s, a) : Uint8Array.prototype.lastIndexOf.call(f, s, a) : G(f, [s], a, g, A);
    throw new TypeError("val must be string, number or Buffer");
  }
  function G(f, s, a, g, A) {
    let B = 1, k = f.length, X = s.length;
    if (g !== void 0 && (g = String(g).toLowerCase(), g === "ucs2" || g === "ucs-2" || g === "utf16le" || g === "utf-16le")) {
      if (f.length < 2 || s.length < 2)
        return -1;
      B = 2, k /= 2, X /= 2, a /= 2;
    }
    function ie(ye, ee) {
      return B === 1 ? ye[ee] : ye.readUInt16BE(ee * B);
    }
    let ne;
    if (A) {
      let ye = -1;
      for (ne = a; ne < k; ne++)
        if (ie(f, ne) === ie(s, ye === -1 ? 0 : ne - ye)) {
          if (ye === -1 && (ye = ne), ne - ye + 1 === X)
            return ye * B;
        } else
          ye !== -1 && (ne -= ne - ye), ye = -1;
    } else
      for (a + X > k && (a = k - X), ne = a; ne >= 0; ne--) {
        let ye = !0;
        for (let ee = 0; ee < X; ee++)
          if (ie(f, ne + ee) !== ie(s, ee)) {
            ye = !1;
            break;
          }
        if (ye)
          return ne;
      }
    return -1;
  }
  u.prototype.includes = function(s, a, g) {
    return this.indexOf(s, a, g) !== -1;
  }, u.prototype.indexOf = function(s, a, g) {
    return W(this, s, a, g, !0);
  }, u.prototype.lastIndexOf = function(s, a, g) {
    return W(this, s, a, g, !1);
  };
  function q(f, s, a, g) {
    a = Number(a) || 0;
    const A = f.length - a;
    g ? (g = Number(g), g > A && (g = A)) : g = A;
    const B = s.length;
    g > B / 2 && (g = B / 2);
    let k;
    for (k = 0; k < g; ++k) {
      const X = parseInt(s.substr(k * 2, 2), 16);
      if (He(X))
        return k;
      f[a + k] = X;
    }
    return k;
  }
  function le(f, s, a, g) {
    return Oe(ze(s, f.length - a), f, a, g);
  }
  function be(f, s, a, g) {
    return Oe(qe(s), f, a, g);
  }
  function pe(f, s, a, g) {
    return Oe(Ge(s), f, a, g);
  }
  function ve(f, s, a, g) {
    return Oe(sr(s, f.length - a), f, a, g);
  }
  u.prototype.write = function(s, a, g, A) {
    if (a === void 0)
      A = "utf8", g = this.length, a = 0;
    else if (g === void 0 && typeof a == "string")
      A = a, g = this.length, a = 0;
    else if (isFinite(a))
      a = a >>> 0, isFinite(g) ? (g = g >>> 0, A === void 0 && (A = "utf8")) : (A = g, g = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const B = this.length - a;
    if ((g === void 0 || g > B) && (g = B), s.length > 0 && (g < 0 || a < 0) || a > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    A || (A = "utf8");
    let k = !1;
    for (; ; )
      switch (A) {
        case "hex":
          return q(this, s, a, g);
        case "utf8":
        case "utf-8":
          return le(this, s, a, g);
        case "ascii":
        case "latin1":
        case "binary":
          return be(this, s, a, g);
        case "base64":
          return pe(this, s, a, g);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ve(this, s, a, g);
        default:
          if (k)
            throw new TypeError("Unknown encoding: " + A);
          A = ("" + A).toLowerCase(), k = !0;
      }
  }, u.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function I(f, s, a) {
    return s === 0 && a === f.length ? e.fromByteArray(f) : e.fromByteArray(f.slice(s, a));
  }
  function l(f, s, a) {
    a = Math.min(f.length, a);
    const g = [];
    let A = s;
    for (; A < a; ) {
      const B = f[A];
      let k = null, X = B > 239 ? 4 : B > 223 ? 3 : B > 191 ? 2 : 1;
      if (A + X <= a) {
        let ie, ne, ye, ee;
        switch (X) {
          case 1:
            B < 128 && (k = B);
            break;
          case 2:
            ie = f[A + 1], (ie & 192) === 128 && (ee = (B & 31) << 6 | ie & 63, ee > 127 && (k = ee));
            break;
          case 3:
            ie = f[A + 1], ne = f[A + 2], (ie & 192) === 128 && (ne & 192) === 128 && (ee = (B & 15) << 12 | (ie & 63) << 6 | ne & 63, ee > 2047 && (ee < 55296 || ee > 57343) && (k = ee));
            break;
          case 4:
            ie = f[A + 1], ne = f[A + 2], ye = f[A + 3], (ie & 192) === 128 && (ne & 192) === 128 && (ye & 192) === 128 && (ee = (B & 15) << 18 | (ie & 63) << 12 | (ne & 63) << 6 | ye & 63, ee > 65535 && ee < 1114112 && (k = ee));
        }
      }
      k === null ? (k = 65533, X = 1) : k > 65535 && (k -= 65536, g.push(k >>> 10 & 1023 | 55296), k = 56320 | k & 1023), g.push(k), A += X;
    }
    return m(g);
  }
  const p = 4096;
  function m(f) {
    const s = f.length;
    if (s <= p)
      return String.fromCharCode.apply(String, f);
    let a = "", g = 0;
    for (; g < s; )
      a += String.fromCharCode.apply(
        String,
        f.slice(g, g += p)
      );
    return a;
  }
  function y(f, s, a) {
    let g = "";
    a = Math.min(f.length, a);
    for (let A = s; A < a; ++A)
      g += String.fromCharCode(f[A] & 127);
    return g;
  }
  function x(f, s, a) {
    let g = "";
    a = Math.min(f.length, a);
    for (let A = s; A < a; ++A)
      g += String.fromCharCode(f[A]);
    return g;
  }
  function L(f, s, a) {
    const g = f.length;
    (!s || s < 0) && (s = 0), (!a || a < 0 || a > g) && (a = g);
    let A = "";
    for (let B = s; B < a; ++B)
      A += Ye[f[B]];
    return A;
  }
  function R(f, s, a) {
    const g = f.slice(s, a);
    let A = "";
    for (let B = 0; B < g.length - 1; B += 2)
      A += String.fromCharCode(g[B] + g[B + 1] * 256);
    return A;
  }
  u.prototype.slice = function(s, a) {
    const g = this.length;
    s = ~~s, a = a === void 0 ? g : ~~a, s < 0 ? (s += g, s < 0 && (s = 0)) : s > g && (s = g), a < 0 ? (a += g, a < 0 && (a = 0)) : a > g && (a = g), a < s && (a = s);
    const A = this.subarray(s, a);
    return Object.setPrototypeOf(A, u.prototype), A;
  };
  function b(f, s, a) {
    if (f % 1 !== 0 || f < 0)
      throw new RangeError("offset is not uint");
    if (f + s > a)
      throw new RangeError("Trying to access beyond buffer length");
  }
  u.prototype.readUintLE = u.prototype.readUIntLE = function(s, a, g) {
    s = s >>> 0, a = a >>> 0, g || b(s, a, this.length);
    let A = this[s], B = 1, k = 0;
    for (; ++k < a && (B *= 256); )
      A += this[s + k] * B;
    return A;
  }, u.prototype.readUintBE = u.prototype.readUIntBE = function(s, a, g) {
    s = s >>> 0, a = a >>> 0, g || b(s, a, this.length);
    let A = this[s + --a], B = 1;
    for (; a > 0 && (B *= 256); )
      A += this[s + --a] * B;
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
    const a = this[s], g = this[s + 7];
    (a === void 0 || g === void 0) && Ie(s, this.length - 8);
    const A = a + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + this[++s] * 2 ** 24, B = this[++s] + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + g * 2 ** 24;
    return BigInt(A) + (BigInt(B) << BigInt(32));
  }), u.prototype.readBigUInt64BE = rt(function(s) {
    s = s >>> 0, We(s, "offset");
    const a = this[s], g = this[s + 7];
    (a === void 0 || g === void 0) && Ie(s, this.length - 8);
    const A = a * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + this[++s], B = this[++s] * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + g;
    return (BigInt(A) << BigInt(32)) + BigInt(B);
  }), u.prototype.readIntLE = function(s, a, g) {
    s = s >>> 0, a = a >>> 0, g || b(s, a, this.length);
    let A = this[s], B = 1, k = 0;
    for (; ++k < a && (B *= 256); )
      A += this[s + k] * B;
    return B *= 128, A >= B && (A -= Math.pow(2, 8 * a)), A;
  }, u.prototype.readIntBE = function(s, a, g) {
    s = s >>> 0, a = a >>> 0, g || b(s, a, this.length);
    let A = a, B = 1, k = this[s + --A];
    for (; A > 0 && (B *= 256); )
      k += this[s + --A] * B;
    return B *= 128, k >= B && (k -= Math.pow(2, 8 * a)), k;
  }, u.prototype.readInt8 = function(s, a) {
    return s = s >>> 0, a || b(s, 1, this.length), this[s] & 128 ? (255 - this[s] + 1) * -1 : this[s];
  }, u.prototype.readInt16LE = function(s, a) {
    s = s >>> 0, a || b(s, 2, this.length);
    const g = this[s] | this[s + 1] << 8;
    return g & 32768 ? g | 4294901760 : g;
  }, u.prototype.readInt16BE = function(s, a) {
    s = s >>> 0, a || b(s, 2, this.length);
    const g = this[s + 1] | this[s] << 8;
    return g & 32768 ? g | 4294901760 : g;
  }, u.prototype.readInt32LE = function(s, a) {
    return s = s >>> 0, a || b(s, 4, this.length), this[s] | this[s + 1] << 8 | this[s + 2] << 16 | this[s + 3] << 24;
  }, u.prototype.readInt32BE = function(s, a) {
    return s = s >>> 0, a || b(s, 4, this.length), this[s] << 24 | this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3];
  }, u.prototype.readBigInt64LE = rt(function(s) {
    s = s >>> 0, We(s, "offset");
    const a = this[s], g = this[s + 7];
    (a === void 0 || g === void 0) && Ie(s, this.length - 8);
    const A = this[s + 4] + this[s + 5] * 2 ** 8 + this[s + 6] * 2 ** 16 + (g << 24);
    return (BigInt(A) << BigInt(32)) + BigInt(a + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + this[++s] * 2 ** 24);
  }), u.prototype.readBigInt64BE = rt(function(s) {
    s = s >>> 0, We(s, "offset");
    const a = this[s], g = this[s + 7];
    (a === void 0 || g === void 0) && Ie(s, this.length - 8);
    const A = (a << 24) + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + this[++s];
    return (BigInt(A) << BigInt(32)) + BigInt(this[++s] * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + g);
  }), u.prototype.readFloatLE = function(s, a) {
    return s = s >>> 0, a || b(s, 4, this.length), t.read(this, s, !0, 23, 4);
  }, u.prototype.readFloatBE = function(s, a) {
    return s = s >>> 0, a || b(s, 4, this.length), t.read(this, s, !1, 23, 4);
  }, u.prototype.readDoubleLE = function(s, a) {
    return s = s >>> 0, a || b(s, 8, this.length), t.read(this, s, !0, 52, 8);
  }, u.prototype.readDoubleBE = function(s, a) {
    return s = s >>> 0, a || b(s, 8, this.length), t.read(this, s, !1, 52, 8);
  };
  function h(f, s, a, g, A, B) {
    if (!u.isBuffer(f))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (s > A || s < B)
      throw new RangeError('"value" argument is out of bounds');
    if (a + g > f.length)
      throw new RangeError("Index out of range");
  }
  u.prototype.writeUintLE = u.prototype.writeUIntLE = function(s, a, g, A) {
    if (s = +s, a = a >>> 0, g = g >>> 0, !A) {
      const X = Math.pow(2, 8 * g) - 1;
      h(this, s, a, g, X, 0);
    }
    let B = 1, k = 0;
    for (this[a] = s & 255; ++k < g && (B *= 256); )
      this[a + k] = s / B & 255;
    return a + g;
  }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(s, a, g, A) {
    if (s = +s, a = a >>> 0, g = g >>> 0, !A) {
      const X = Math.pow(2, 8 * g) - 1;
      h(this, s, a, g, X, 0);
    }
    let B = g - 1, k = 1;
    for (this[a + B] = s & 255; --B >= 0 && (k *= 256); )
      this[a + B] = s / k & 255;
    return a + g;
  }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(s, a, g) {
    return s = +s, a = a >>> 0, g || h(this, s, a, 1, 255, 0), this[a] = s & 255, a + 1;
  }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || h(this, s, a, 2, 65535, 0), this[a] = s & 255, this[a + 1] = s >>> 8, a + 2;
  }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || h(this, s, a, 2, 65535, 0), this[a] = s >>> 8, this[a + 1] = s & 255, a + 2;
  }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || h(this, s, a, 4, 4294967295, 0), this[a + 3] = s >>> 24, this[a + 2] = s >>> 16, this[a + 1] = s >>> 8, this[a] = s & 255, a + 4;
  }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || h(this, s, a, 4, 4294967295, 0), this[a] = s >>> 24, this[a + 1] = s >>> 16, this[a + 2] = s >>> 8, this[a + 3] = s & 255, a + 4;
  };
  function M(f, s, a, g, A) {
    K(s, g, A, f, a, 7);
    let B = Number(s & BigInt(4294967295));
    f[a++] = B, B = B >> 8, f[a++] = B, B = B >> 8, f[a++] = B, B = B >> 8, f[a++] = B;
    let k = Number(s >> BigInt(32) & BigInt(4294967295));
    return f[a++] = k, k = k >> 8, f[a++] = k, k = k >> 8, f[a++] = k, k = k >> 8, f[a++] = k, a;
  }
  function Q(f, s, a, g, A) {
    K(s, g, A, f, a, 7);
    let B = Number(s & BigInt(4294967295));
    f[a + 7] = B, B = B >> 8, f[a + 6] = B, B = B >> 8, f[a + 5] = B, B = B >> 8, f[a + 4] = B;
    let k = Number(s >> BigInt(32) & BigInt(4294967295));
    return f[a + 3] = k, k = k >> 8, f[a + 2] = k, k = k >> 8, f[a + 1] = k, k = k >> 8, f[a] = k, a + 8;
  }
  u.prototype.writeBigUInt64LE = rt(function(s, a = 0) {
    return M(this, s, a, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeBigUInt64BE = rt(function(s, a = 0) {
    return Q(this, s, a, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeIntLE = function(s, a, g, A) {
    if (s = +s, a = a >>> 0, !A) {
      const ie = Math.pow(2, 8 * g - 1);
      h(this, s, a, g, ie - 1, -ie);
    }
    let B = 0, k = 1, X = 0;
    for (this[a] = s & 255; ++B < g && (k *= 256); )
      s < 0 && X === 0 && this[a + B - 1] !== 0 && (X = 1), this[a + B] = (s / k >> 0) - X & 255;
    return a + g;
  }, u.prototype.writeIntBE = function(s, a, g, A) {
    if (s = +s, a = a >>> 0, !A) {
      const ie = Math.pow(2, 8 * g - 1);
      h(this, s, a, g, ie - 1, -ie);
    }
    let B = g - 1, k = 1, X = 0;
    for (this[a + B] = s & 255; --B >= 0 && (k *= 256); )
      s < 0 && X === 0 && this[a + B + 1] !== 0 && (X = 1), this[a + B] = (s / k >> 0) - X & 255;
    return a + g;
  }, u.prototype.writeInt8 = function(s, a, g) {
    return s = +s, a = a >>> 0, g || h(this, s, a, 1, 127, -128), s < 0 && (s = 255 + s + 1), this[a] = s & 255, a + 1;
  }, u.prototype.writeInt16LE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || h(this, s, a, 2, 32767, -32768), this[a] = s & 255, this[a + 1] = s >>> 8, a + 2;
  }, u.prototype.writeInt16BE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || h(this, s, a, 2, 32767, -32768), this[a] = s >>> 8, this[a + 1] = s & 255, a + 2;
  }, u.prototype.writeInt32LE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || h(this, s, a, 4, 2147483647, -2147483648), this[a] = s & 255, this[a + 1] = s >>> 8, this[a + 2] = s >>> 16, this[a + 3] = s >>> 24, a + 4;
  }, u.prototype.writeInt32BE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || h(this, s, a, 4, 2147483647, -2147483648), s < 0 && (s = 4294967295 + s + 1), this[a] = s >>> 24, this[a + 1] = s >>> 16, this[a + 2] = s >>> 8, this[a + 3] = s & 255, a + 4;
  }, u.prototype.writeBigInt64LE = rt(function(s, a = 0) {
    return M(this, s, a, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), u.prototype.writeBigInt64BE = rt(function(s, a = 0) {
    return Q(this, s, a, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function Z(f, s, a, g, A, B) {
    if (a + g > f.length)
      throw new RangeError("Index out of range");
    if (a < 0)
      throw new RangeError("Index out of range");
  }
  function V(f, s, a, g, A) {
    return s = +s, a = a >>> 0, A || Z(f, s, a, 4), t.write(f, s, a, g, 23, 4), a + 4;
  }
  u.prototype.writeFloatLE = function(s, a, g) {
    return V(this, s, a, !0, g);
  }, u.prototype.writeFloatBE = function(s, a, g) {
    return V(this, s, a, !1, g);
  };
  function oe(f, s, a, g, A) {
    return s = +s, a = a >>> 0, A || Z(f, s, a, 8), t.write(f, s, a, g, 52, 8), a + 8;
  }
  u.prototype.writeDoubleLE = function(s, a, g) {
    return oe(this, s, a, !0, g);
  }, u.prototype.writeDoubleBE = function(s, a, g) {
    return oe(this, s, a, !1, g);
  }, u.prototype.copy = function(s, a, g, A) {
    if (!u.isBuffer(s))
      throw new TypeError("argument should be a Buffer");
    if (g || (g = 0), !A && A !== 0 && (A = this.length), a >= s.length && (a = s.length), a || (a = 0), A > 0 && A < g && (A = g), A === g || s.length === 0 || this.length === 0)
      return 0;
    if (a < 0)
      throw new RangeError("targetStart out of bounds");
    if (g < 0 || g >= this.length)
      throw new RangeError("Index out of range");
    if (A < 0)
      throw new RangeError("sourceEnd out of bounds");
    A > this.length && (A = this.length), s.length - a < A - g && (A = s.length - a + g);
    const B = A - g;
    return this === s && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(a, g, A) : Uint8Array.prototype.set.call(
      s,
      this.subarray(g, A),
      a
    ), B;
  }, u.prototype.fill = function(s, a, g, A) {
    if (typeof s == "string") {
      if (typeof a == "string" ? (A = a, a = 0, g = this.length) : typeof g == "string" && (A = g, g = this.length), A !== void 0 && typeof A != "string")
        throw new TypeError("encoding must be a string");
      if (typeof A == "string" && !u.isEncoding(A))
        throw new TypeError("Unknown encoding: " + A);
      if (s.length === 1) {
        const k = s.charCodeAt(0);
        (A === "utf8" && k < 128 || A === "latin1") && (s = k);
      }
    } else
      typeof s == "number" ? s = s & 255 : typeof s == "boolean" && (s = Number(s));
    if (a < 0 || this.length < a || this.length < g)
      throw new RangeError("Out of range index");
    if (g <= a)
      return this;
    a = a >>> 0, g = g === void 0 ? this.length : g >>> 0, s || (s = 0);
    let B;
    if (typeof s == "number")
      for (B = a; B < g; ++B)
        this[B] = s;
    else {
      const k = u.isBuffer(s) ? s : u.from(s, A), X = k.length;
      if (X === 0)
        throw new TypeError('The value "' + s + '" is invalid for argument "value"');
      for (B = 0; B < g - a; ++B)
        this[B + a] = k[B % X];
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
      let g = `The value of "${f}" is out of range.`, A = a;
      return Number.isInteger(a) && Math.abs(a) > 2 ** 32 ? A = Ae(String(a)) : typeof a == "bigint" && (A = String(a), (a > BigInt(2) ** BigInt(32) || a < -(BigInt(2) ** BigInt(32))) && (A = Ae(A)), A += "n"), g += ` It must be ${s}. Received ${A}`, g;
    },
    RangeError
  );
  function Ae(f) {
    let s = "", a = f.length;
    const g = f[0] === "-" ? 1 : 0;
    for (; a >= g + 4; a -= 3)
      s = `_${f.slice(a - 3, a)}${s}`;
    return `${f.slice(0, a)}${s}`;
  }
  function xe(f, s, a) {
    We(s, "offset"), (f[s] === void 0 || f[s + a] === void 0) && Ie(s, f.length - (a + 1));
  }
  function K(f, s, a, g, A, B) {
    if (f > a || f < s) {
      const k = typeof s == "bigint" ? "n" : "";
      let X;
      throw B > 3 ? s === 0 || s === BigInt(0) ? X = `>= 0${k} and < 2${k} ** ${(B + 1) * 8}${k}` : X = `>= -(2${k} ** ${(B + 1) * 8 - 1}${k}) and < 2 ** ${(B + 1) * 8 - 1}${k}` : X = `>= ${s}${k} and <= ${a}${k}`, new $.ERR_OUT_OF_RANGE("value", X, f);
    }
    xe(g, A, B);
  }
  function We(f, s) {
    if (typeof f != "number")
      throw new $.ERR_INVALID_ARG_TYPE(s, "number", f);
  }
  function Ie(f, s, a) {
    throw Math.floor(f) !== f ? (We(f, a), new $.ERR_OUT_OF_RANGE(a || "offset", "an integer", f)) : s < 0 ? new $.ERR_BUFFER_OUT_OF_BOUNDS() : new $.ERR_OUT_OF_RANGE(
      a || "offset",
      `>= ${a ? 1 : 0} and <= ${s}`,
      f
    );
  }
  const je = /[^+/0-9A-Za-z-_]/g;
  function or(f) {
    if (f = f.split("=")[0], f = f.trim().replace(je, ""), f.length < 2)
      return "";
    for (; f.length % 4 !== 0; )
      f = f + "=";
    return f;
  }
  function ze(f, s) {
    s = s || 1 / 0;
    let a;
    const g = f.length;
    let A = null;
    const B = [];
    for (let k = 0; k < g; ++k) {
      if (a = f.charCodeAt(k), a > 55295 && a < 57344) {
        if (!A) {
          if (a > 56319) {
            (s -= 3) > -1 && B.push(239, 191, 189);
            continue;
          } else if (k + 1 === g) {
            (s -= 3) > -1 && B.push(239, 191, 189);
            continue;
          }
          A = a;
          continue;
        }
        if (a < 56320) {
          (s -= 3) > -1 && B.push(239, 191, 189), A = a;
          continue;
        }
        a = (A - 55296 << 10 | a - 56320) + 65536;
      } else
        A && (s -= 3) > -1 && B.push(239, 191, 189);
      if (A = null, a < 128) {
        if ((s -= 1) < 0)
          break;
        B.push(a);
      } else if (a < 2048) {
        if ((s -= 2) < 0)
          break;
        B.push(
          a >> 6 | 192,
          a & 63 | 128
        );
      } else if (a < 65536) {
        if ((s -= 3) < 0)
          break;
        B.push(
          a >> 12 | 224,
          a >> 6 & 63 | 128,
          a & 63 | 128
        );
      } else if (a < 1114112) {
        if ((s -= 4) < 0)
          break;
        B.push(
          a >> 18 | 240,
          a >> 12 & 63 | 128,
          a >> 6 & 63 | 128,
          a & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return B;
  }
  function qe(f) {
    const s = [];
    for (let a = 0; a < f.length; ++a)
      s.push(f.charCodeAt(a) & 255);
    return s;
  }
  function sr(f, s) {
    let a, g, A;
    const B = [];
    for (let k = 0; k < f.length && !((s -= 2) < 0); ++k)
      a = f.charCodeAt(k), g = a >> 8, A = a % 256, B.push(A), B.push(g);
    return B;
  }
  function Ge(f) {
    return e.toByteArray(or(f));
  }
  function Oe(f, s, a, g) {
    let A;
    for (A = 0; A < g && !(A + a >= s.length || A >= f.length); ++A)
      s[A + a] = f[A];
    return A;
  }
  function Qe(f, s) {
    return f instanceof s || f != null && f.constructor != null && f.constructor.name != null && f.constructor.name === s.name;
  }
  function He(f) {
    return f !== f;
  }
  const Ye = function() {
    const f = "0123456789abcdef", s = new Array(256);
    for (let a = 0; a < 16; ++a) {
      const g = a * 16;
      for (let A = 0; A < 16; ++A)
        s[g + A] = f[a] + f[A];
    }
    return s;
  }();
  function rt(f) {
    return typeof BigInt > "u" ? Ke : f;
  }
  function Ke() {
    throw new Error("BigInt not supported");
  }
})(Ee);
function Es(n) {
  if (!Number.isSafeInteger(n) || n < 0)
    throw new Error(`Wrong positive integer: ${n}`);
}
function th(n) {
  if (typeof n != "boolean")
    throw new Error(`Expected boolean, not ${n}`);
}
function au(n, ...e) {
  if (!(n instanceof Uint8Array))
    throw new TypeError("Expected Uint8Array");
  if (e.length > 0 && !e.includes(n.length))
    throw new TypeError(`Expected Uint8Array of length ${e}, not of length=${n.length}`);
}
function nh(n) {
  if (typeof n != "function" || typeof n.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  Es(n.outputLen), Es(n.blockLen);
}
function rh(n, e = !0) {
  if (n.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (e && n.finished)
    throw new Error("Hash#digest() has already been called");
}
function ih(n, e) {
  au(n);
  const t = e.outputLen;
  if (n.length < t)
    throw new Error(`digestInto() expects output buffer of length at least ${t}`);
}
const Qt = {
  number: Es,
  bool: th,
  bytes: au,
  hash: nh,
  exists: rh,
  output: ih
};
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const oh = (n) => new Uint32Array(n.buffer, n.byteOffset, Math.floor(n.byteLength / 4)), Do = (n) => new DataView(n.buffer, n.byteOffset, n.byteLength), dn = (n, e) => n << 32 - e | n >>> e, sh = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!sh)
  throw new Error("Non little-endian hardware is not supported");
Array.from({ length: 256 }, (n, e) => e.toString(16).padStart(2, "0"));
function ah(n) {
  if (typeof n != "string")
    throw new TypeError(`utf8ToBytes expected string, got ${typeof n}`);
  return new TextEncoder().encode(n);
}
function Vr(n) {
  if (typeof n == "string" && (n = ah(n)), !(n instanceof Uint8Array))
    throw new TypeError(`Expected input type is Uint8Array (got ${typeof n})`);
  return n;
}
class Hs {
  clone() {
    return this._cloneInto();
  }
}
function Zr(n) {
  const e = (r) => n().update(Vr(r)).digest(), t = n();
  return e.outputLen = t.outputLen, e.blockLen = t.blockLen, e.create = () => n(), e;
}
function ch(n) {
  const e = (r, i) => n(i).update(Vr(r)).digest(), t = n({});
  return e.outputLen = t.outputLen, e.blockLen = t.blockLen, e.create = (r) => n(r), e;
}
function uh(n, e, t, r) {
  if (typeof n.setBigUint64 == "function")
    return n.setBigUint64(e, t, r);
  const i = BigInt(32), o = BigInt(4294967295), c = Number(t >> i & o), u = Number(t & o), d = r ? 4 : 0, w = r ? 0 : 4;
  n.setUint32(e + d, c, r), n.setUint32(e + w, u, r);
}
class cu extends Hs {
  constructor(e, t, r, i) {
    super(), this.blockLen = e, this.outputLen = t, this.padOffset = r, this.isLE = i, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = Do(this.buffer);
  }
  update(e) {
    Qt.exists(this);
    const { view: t, buffer: r, blockLen: i } = this;
    e = Vr(e);
    const o = e.length;
    for (let c = 0; c < o; ) {
      const u = Math.min(i - this.pos, o - c);
      if (u === i) {
        const d = Do(e);
        for (; i <= o - c; c += i)
          this.process(d, c);
        continue;
      }
      r.set(e.subarray(c, c + u), this.pos), this.pos += u, c += u, this.pos === i && (this.process(t, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    Qt.exists(this), Qt.output(e, this), this.finished = !0;
    const { buffer: t, view: r, blockLen: i, isLE: o } = this;
    let { pos: c } = this;
    t[c++] = 128, this.buffer.subarray(c).fill(0), this.padOffset > i - c && (this.process(r, 0), c = 0);
    for (let d = c; d < i; d++)
      t[d] = 0;
    uh(r, i - 8, BigInt(this.length * 8), o), this.process(r, 0);
    const u = Do(e);
    this.get().forEach((d, w) => u.setUint32(4 * w, d, o));
  }
  digest() {
    const { buffer: e, outputLen: t } = this;
    this.digestInto(e);
    const r = e.slice(0, t);
    return this.destroy(), r;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: t, buffer: r, length: i, finished: o, destroyed: c, pos: u } = this;
    return e.length = i, e.pos = u, e.finished = o, e.destroyed = c, i % t && e.buffer.set(r), e;
  }
}
const si = BigInt(2 ** 32 - 1), xs = BigInt(32);
function uu(n, e = !1) {
  return e ? { h: Number(n & si), l: Number(n >> xs & si) } : { h: Number(n >> xs & si) | 0, l: Number(n & si) | 0 };
}
function lh(n, e = !1) {
  let t = new Uint32Array(n.length), r = new Uint32Array(n.length);
  for (let i = 0; i < n.length; i++) {
    const { h: o, l: c } = uu(n[i], e);
    [t[i], r[i]] = [o, c];
  }
  return [t, r];
}
const fh = (n, e) => BigInt(n >>> 0) << xs | BigInt(e >>> 0), hh = (n, e, t) => n >>> t, dh = (n, e, t) => n << 32 - t | e >>> t, ph = (n, e, t) => n >>> t | e << 32 - t, gh = (n, e, t) => n << 32 - t | e >>> t, yh = (n, e, t) => n << 64 - t | e >>> t - 32, wh = (n, e, t) => n >>> t - 32 | e << 64 - t, mh = (n, e) => e, bh = (n, e) => n, Ah = (n, e, t) => n << t | e >>> 32 - t, vh = (n, e, t) => e << t | n >>> 32 - t, Eh = (n, e, t) => e << t - 32 | n >>> 64 - t, xh = (n, e, t) => n << t - 32 | e >>> 64 - t;
function Sh(n, e, t, r) {
  const i = (e >>> 0) + (r >>> 0);
  return { h: n + t + (i / 2 ** 32 | 0) | 0, l: i | 0 };
}
const Ih = (n, e, t) => (n >>> 0) + (e >>> 0) + (t >>> 0), Bh = (n, e, t, r) => e + t + r + (n / 2 ** 32 | 0) | 0, Mh = (n, e, t, r) => (n >>> 0) + (e >>> 0) + (t >>> 0) + (r >>> 0), _h = (n, e, t, r, i) => e + t + r + i + (n / 2 ** 32 | 0) | 0, Ch = (n, e, t, r, i) => (n >>> 0) + (e >>> 0) + (t >>> 0) + (r >>> 0) + (i >>> 0), Th = (n, e, t, r, i, o) => e + t + r + i + o + (n / 2 ** 32 | 0) | 0, we = {
  fromBig: uu,
  split: lh,
  toBig: fh,
  shrSH: hh,
  shrSL: dh,
  rotrSH: ph,
  rotrSL: gh,
  rotrBH: yh,
  rotrBL: wh,
  rotr32H: mh,
  rotr32L: bh,
  rotlSH: Ah,
  rotlSL: vh,
  rotlBH: Eh,
  rotlBL: xh,
  add: Sh,
  add3L: Ih,
  add3H: Bh,
  add4L: Mh,
  add4H: _h,
  add5H: Th,
  add5L: Ch
}, [Rh, kh] = we.split([
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
].map((n) => BigInt(n))), In = new Uint32Array(80), Bn = new Uint32Array(80);
class Ws extends cu {
  constructor() {
    super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
  }
  get() {
    const { Ah: e, Al: t, Bh: r, Bl: i, Ch: o, Cl: c, Dh: u, Dl: d, Eh: w, El: v, Fh: S, Fl: T, Gh: E, Gl: _, Hh: C, Hl: U } = this;
    return [e, t, r, i, o, c, u, d, w, v, S, T, E, _, C, U];
  }
  set(e, t, r, i, o, c, u, d, w, v, S, T, E, _, C, U) {
    this.Ah = e | 0, this.Al = t | 0, this.Bh = r | 0, this.Bl = i | 0, this.Ch = o | 0, this.Cl = c | 0, this.Dh = u | 0, this.Dl = d | 0, this.Eh = w | 0, this.El = v | 0, this.Fh = S | 0, this.Fl = T | 0, this.Gh = E | 0, this.Gl = _ | 0, this.Hh = C | 0, this.Hl = U | 0;
  }
  process(e, t) {
    for (let N = 0; N < 16; N++, t += 4)
      In[N] = e.getUint32(t), Bn[N] = e.getUint32(t += 4);
    for (let N = 16; N < 80; N++) {
      const F = In[N - 15] | 0, O = Bn[N - 15] | 0, W = we.rotrSH(F, O, 1) ^ we.rotrSH(F, O, 8) ^ we.shrSH(F, O, 7), G = we.rotrSL(F, O, 1) ^ we.rotrSL(F, O, 8) ^ we.shrSL(F, O, 7), q = In[N - 2] | 0, le = Bn[N - 2] | 0, be = we.rotrSH(q, le, 19) ^ we.rotrBH(q, le, 61) ^ we.shrSH(q, le, 6), pe = we.rotrSL(q, le, 19) ^ we.rotrBL(q, le, 61) ^ we.shrSL(q, le, 6), ve = we.add4L(G, pe, Bn[N - 7], Bn[N - 16]), I = we.add4H(ve, W, be, In[N - 7], In[N - 16]);
      In[N] = I | 0, Bn[N] = ve | 0;
    }
    let { Ah: r, Al: i, Bh: o, Bl: c, Ch: u, Cl: d, Dh: w, Dl: v, Eh: S, El: T, Fh: E, Fl: _, Gh: C, Gl: U, Hh: P, Hl: z } = this;
    for (let N = 0; N < 80; N++) {
      const F = we.rotrSH(S, T, 14) ^ we.rotrSH(S, T, 18) ^ we.rotrBH(S, T, 41), O = we.rotrSL(S, T, 14) ^ we.rotrSL(S, T, 18) ^ we.rotrBL(S, T, 41), W = S & E ^ ~S & C, G = T & _ ^ ~T & U, q = we.add5L(z, O, G, kh[N], Bn[N]), le = we.add5H(q, P, F, W, Rh[N], In[N]), be = q | 0, pe = we.rotrSH(r, i, 28) ^ we.rotrBH(r, i, 34) ^ we.rotrBH(r, i, 39), ve = we.rotrSL(r, i, 28) ^ we.rotrBL(r, i, 34) ^ we.rotrBL(r, i, 39), I = r & o ^ r & u ^ o & u, l = i & c ^ i & d ^ c & d;
      P = C | 0, z = U | 0, C = E | 0, U = _ | 0, E = S | 0, _ = T | 0, { h: S, l: T } = we.add(w | 0, v | 0, le | 0, be | 0), w = u | 0, v = d | 0, u = o | 0, d = c | 0, o = r | 0, c = i | 0;
      const p = we.add3L(be, ve, l);
      r = we.add3H(p, le, pe, I), i = p | 0;
    }
    ({ h: r, l: i } = we.add(this.Ah | 0, this.Al | 0, r | 0, i | 0)), { h: o, l: c } = we.add(this.Bh | 0, this.Bl | 0, o | 0, c | 0), { h: u, l: d } = we.add(this.Ch | 0, this.Cl | 0, u | 0, d | 0), { h: w, l: v } = we.add(this.Dh | 0, this.Dl | 0, w | 0, v | 0), { h: S, l: T } = we.add(this.Eh | 0, this.El | 0, S | 0, T | 0), { h: E, l: _ } = we.add(this.Fh | 0, this.Fl | 0, E | 0, _ | 0), { h: C, l: U } = we.add(this.Gh | 0, this.Gl | 0, C | 0, U | 0), { h: P, l: z } = we.add(this.Hh | 0, this.Hl | 0, P | 0, z | 0), this.set(r, i, o, c, u, d, w, v, S, T, E, _, C, U, P, z);
  }
  roundClean() {
    In.fill(0), Bn.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
class Nh extends Ws {
  constructor() {
    super(), this.Ah = 573645204, this.Al = -64227540, this.Bh = -1621794909, this.Bl = -934517566, this.Ch = 596883563, this.Cl = 1867755857, this.Dh = -1774684391, this.Dl = 1497426621, this.Eh = -1775747358, this.El = -1467023389, this.Fh = -1101128155, this.Fl = 1401305490, this.Gh = 721525244, this.Gl = 746961066, this.Hh = 246885852, this.Hl = -2117784414, this.outputLen = 32;
  }
}
class Oh extends Ws {
  constructor() {
    super(), this.Ah = -876896931, this.Al = -1056596264, this.Bh = 1654270250, this.Bl = 914150663, this.Ch = -1856437926, this.Cl = 812702999, this.Dh = 355462360, this.Dl = -150054599, this.Eh = 1731405415, this.El = -4191439, this.Fh = -1900787065, this.Fl = 1750603025, this.Gh = -619958771, this.Gl = 1694076839, this.Hh = 1203062813, this.Hl = -1090891868, this.outputLen = 48;
  }
}
const Lh = Zr(() => new Ws());
Zr(() => new Nh());
Zr(() => new Oh());
const Uh = {}, js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Uh
}, Symbol.toStringTag, { value: "Module" }));
/*! noble-ed25519 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
const Tt = BigInt(0), Te = BigInt(1), hr = BigInt(2), Qa = BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"), Ve = Object.freeze({
  a: BigInt(-1),
  d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
  P: BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"),
  l: Qa,
  n: Qa,
  h: BigInt(8),
  Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
  Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960")
}), lu = BigInt("0x10000000000000000000000000000000000000000000000000000000000000000"), Rr = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt("6853475219497561581579357271197624642482790079785650197046958215289687604742");
const Dh = BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235"), Ph = BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578"), Fh = BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838"), zh = BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952");
class Re {
  constructor(e, t, r, i) {
    this.x = e, this.y = t, this.z = r, this.t = i;
  }
  static fromAffine(e) {
    if (!(e instanceof et))
      throw new TypeError("ExtendedPoint#fromAffine: expected Point");
    return e.equals(et.ZERO) ? Re.ZERO : new Re(e.x, e.y, Te, Y(e.x * e.y));
  }
  static toAffineBatch(e) {
    const t = jh(e.map((r) => r.z));
    return e.map((r, i) => r.toAffine(t[i]));
  }
  static normalizeZ(e) {
    return this.toAffineBatch(e).map(this.fromAffine);
  }
  equals(e) {
    Ya(e);
    const { x: t, y: r, z: i } = this, { x: o, y: c, z: u } = e, d = Y(t * u), w = Y(o * i), v = Y(r * u), S = Y(c * i);
    return d === w && v === S;
  }
  negate() {
    return new Re(Y(-this.x), this.y, this.z, Y(-this.t));
  }
  double() {
    const { x: e, y: t, z: r } = this, { a: i } = Ve, o = Y(e * e), c = Y(t * t), u = Y(hr * Y(r * r)), d = Y(i * o), w = e + t, v = Y(Y(w * w) - o - c), S = d + c, T = S - u, E = d - c, _ = Y(v * T), C = Y(S * E), U = Y(v * E), P = Y(T * S);
    return new Re(_, C, P, U);
  }
  add(e) {
    Ya(e);
    const { x: t, y: r, z: i, t: o } = this, { x: c, y: u, z: d, t: w } = e, v = Y((r - t) * (u + c)), S = Y((r + t) * (u - c)), T = Y(S - v);
    if (T === Tt)
      return this.double();
    const E = Y(i * hr * w), _ = Y(o * hr * d), C = _ + E, U = S + v, P = _ - E, z = Y(C * T), N = Y(U * P), F = Y(C * P), O = Y(T * U);
    return new Re(z, N, O, F);
  }
  subtract(e) {
    return this.add(e.negate());
  }
  precomputeWindow(e) {
    const t = 1 + 256 / e, r = [];
    let i = this, o = i;
    for (let c = 0; c < t; c++) {
      o = i, r.push(o);
      for (let u = 1; u < 2 ** (e - 1); u++)
        o = o.add(i), r.push(o);
      i = o.double();
    }
    return r;
  }
  wNAF(e, t) {
    !t && this.equals(Re.BASE) && (t = et.BASE);
    const r = t && t._WINDOW_SIZE || 1;
    if (256 % r)
      throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");
    let i = t && Ss.get(t);
    i || (i = this.precomputeWindow(r), t && r !== 1 && (i = Re.normalizeZ(i), Ss.set(t, i)));
    let o = Re.ZERO, c = Re.ZERO;
    const u = 1 + 256 / r, d = 2 ** (r - 1), w = BigInt(2 ** r - 1), v = 2 ** r, S = BigInt(r);
    for (let T = 0; T < u; T++) {
      const E = T * d;
      let _ = Number(e & w);
      if (e >>= S, _ > d && (_ -= v, e += Te), _ === 0) {
        let C = i[E];
        T % 2 && (C = C.negate()), c = c.add(C);
      } else {
        let C = i[E + Math.abs(_) - 1];
        _ < 0 && (C = C.negate()), o = o.add(C);
      }
    }
    return Re.normalizeZ([o, c])[0];
  }
  multiply(e, t) {
    return this.wNAF(Bi(e, Ve.l), t);
  }
  multiplyUnsafe(e) {
    let t = Bi(e, Ve.l, !1);
    const r = Re.BASE, i = Re.ZERO;
    if (t === Tt)
      return i;
    if (this.equals(i) || t === Te)
      return this;
    if (this.equals(r))
      return this.wNAF(t);
    let o = i, c = this;
    for (; t > Tt; )
      t & Te && (o = o.add(c)), c = c.double(), t >>= Te;
    return o;
  }
  isSmallOrder() {
    return this.multiplyUnsafe(Ve.h).equals(Re.ZERO);
  }
  isTorsionFree() {
    return this.multiplyUnsafe(Ve.l).equals(Re.ZERO);
  }
  toAffine(e = Gi(this.z)) {
    const { x: t, y: r, z: i } = this, o = Y(t * e), c = Y(r * e);
    if (Y(i * e) !== Te)
      throw new Error("invZ was invalid");
    return new et(o, c);
  }
  fromRistrettoBytes() {
    Fo();
  }
  toRistrettoBytes() {
    Fo();
  }
  fromRistrettoHash() {
    Fo();
  }
}
Re.BASE = new Re(Ve.Gx, Ve.Gy, Te, Y(Ve.Gx * Ve.Gy));
Re.ZERO = new Re(Tt, Te, Te, Tt);
function Ya(n) {
  if (!(n instanceof Re))
    throw new TypeError("ExtendedPoint expected");
}
function Po(n) {
  if (!(n instanceof tn))
    throw new TypeError("RistrettoPoint expected");
}
function Fo() {
  throw new Error("Legacy method: switch to RistrettoPoint");
}
class tn {
  constructor(e) {
    this.ep = e;
  }
  static calcElligatorRistrettoMap(e) {
    const { d: t } = Ve, r = Y(Rr * e * e), i = Y((r + Te) * Fh);
    let o = BigInt(-1);
    const c = Y((o - t * r) * Y(r + t));
    let { isValid: u, value: d } = qs(i, c), w = Y(d * e);
    Tn(w) || (w = Y(-w)), u || (d = w), u || (o = r);
    const v = Y(o * (r - Te) * zh - c), S = d * d, T = Y((d + d) * c), E = Y(v * Dh), _ = Y(Te - S), C = Y(Te + S);
    return new Re(Y(T * C), Y(_ * E), Y(E * C), Y(T * _));
  }
  static hashToCurve(e) {
    e = Pn(e, 64);
    const t = zo(e.slice(0, 32)), r = this.calcElligatorRistrettoMap(t), i = zo(e.slice(32, 64)), o = this.calcElligatorRistrettoMap(i);
    return new tn(r.add(o));
  }
  static fromHex(e) {
    e = Pn(e, 32);
    const { a: t, d: r } = Ve, i = "RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint", o = zo(e);
    if (!qh(Dr(o), e) || Tn(o))
      throw new Error(i);
    const c = Y(o * o), u = Y(Te + t * c), d = Y(Te - t * c), w = Y(u * u), v = Y(d * d), S = Y(t * r * w - v), { isValid: T, value: E } = Va(Y(S * v)), _ = Y(E * d), C = Y(E * _ * S);
    let U = Y((o + o) * _);
    Tn(U) && (U = Y(-U));
    const P = Y(u * C), z = Y(U * P);
    if (!T || Tn(z) || P === Tt)
      throw new Error(i);
    return new tn(new Re(U, P, Te, z));
  }
  toRawBytes() {
    let { x: e, y: t, z: r, t: i } = this.ep;
    const o = Y(Y(r + t) * Y(r - t)), c = Y(e * t), u = Y(c * c), { value: d } = Va(Y(o * u)), w = Y(d * o), v = Y(d * c), S = Y(w * v * i);
    let T;
    if (Tn(i * S)) {
      let _ = Y(t * Rr), C = Y(e * Rr);
      e = _, t = C, T = Y(w * Ph);
    } else
      T = v;
    Tn(e * S) && (t = Y(-t));
    let E = Y((r - t) * T);
    return Tn(E) && (E = Y(-E)), Dr(E);
  }
  toHex() {
    return Jr(this.toRawBytes());
  }
  toString() {
    return this.toHex();
  }
  equals(e) {
    Po(e);
    const t = this.ep, r = e.ep, i = Y(t.x * r.y) === Y(t.y * r.x), o = Y(t.y * r.y) === Y(t.x * r.x);
    return i || o;
  }
  add(e) {
    return Po(e), new tn(this.ep.add(e.ep));
  }
  subtract(e) {
    return Po(e), new tn(this.ep.subtract(e.ep));
  }
  multiply(e) {
    return new tn(this.ep.multiply(e));
  }
  multiplyUnsafe(e) {
    return new tn(this.ep.multiplyUnsafe(e));
  }
}
tn.BASE = new tn(Re.BASE);
tn.ZERO = new tn(Re.ZERO);
const Ss = /* @__PURE__ */ new WeakMap();
class et {
  constructor(e, t) {
    this.x = e, this.y = t;
  }
  _setWindowSize(e) {
    this._WINDOW_SIZE = e, Ss.delete(this);
  }
  static fromHex(e, t = !0) {
    const { d: r, P: i } = Ve;
    e = Pn(e, 32);
    const o = e.slice();
    o[31] = e[31] & -129;
    const c = Xr(o);
    if (t && c >= i)
      throw new Error("Expected 0 < hex < P");
    if (!t && c >= lu)
      throw new Error("Expected 0 < hex < 2**256");
    const u = Y(c * c), d = Y(u - Te), w = Y(r * u + Te);
    let { isValid: v, value: S } = qs(d, w);
    if (!v)
      throw new Error("Point.fromHex: invalid y coordinate");
    const T = (S & Te) === Te;
    return (e[31] & 128) !== 0 !== T && (S = Y(-S)), new et(S, c);
  }
  static async fromPrivateKey(e) {
    return (await pu(e)).point;
  }
  toRawBytes() {
    const e = Dr(this.y);
    return e[31] |= this.x & Te ? 128 : 0, e;
  }
  toHex() {
    return Jr(this.toRawBytes());
  }
  toX25519() {
    const { y: e } = this, t = Y((Te + e) * Gi(Te - e));
    return Dr(t);
  }
  isTorsionFree() {
    return Re.fromAffine(this).isTorsionFree();
  }
  equals(e) {
    return this.x === e.x && this.y === e.y;
  }
  negate() {
    return new et(Y(-this.x), this.y);
  }
  add(e) {
    return Re.fromAffine(this).add(Re.fromAffine(e)).toAffine();
  }
  subtract(e) {
    return this.add(e.negate());
  }
  multiply(e) {
    return Re.fromAffine(this).multiply(e, this).toAffine();
  }
}
et.BASE = new et(Ve.Gx, Ve.Gy);
et.ZERO = new et(Tt, Te);
class Ur {
  constructor(e, t) {
    this.r = e, this.s = t, this.assertValidity();
  }
  static fromHex(e) {
    const t = Pn(e, 64), r = et.fromHex(t.slice(0, 32), !1), i = Xr(t.slice(32, 64));
    return new Ur(r, i);
  }
  assertValidity() {
    const { r: e, s: t } = this;
    if (!(e instanceof et))
      throw new Error("Expected Point instance");
    return Bi(t, Ve.l, !1), this;
  }
  toRawBytes() {
    const e = new Uint8Array(64);
    return e.set(this.r.toRawBytes()), e.set(Dr(this.s), 32), e;
  }
  toHex() {
    return Jr(this.toRawBytes());
  }
}
function Ka(...n) {
  if (!n.every((r) => r instanceof Uint8Array))
    throw new Error("Expected Uint8Array list");
  if (n.length === 1)
    return n[0];
  const e = n.reduce((r, i) => r + i.length, 0), t = new Uint8Array(e);
  for (let r = 0, i = 0; r < n.length; r++) {
    const o = n[r];
    t.set(o, i), i += o.length;
  }
  return t;
}
const Hh = Array.from({ length: 256 }, (n, e) => e.toString(16).padStart(2, "0"));
function Jr(n) {
  if (!(n instanceof Uint8Array))
    throw new Error("Uint8Array expected");
  let e = "";
  for (let t = 0; t < n.length; t++)
    e += Hh[n[t]];
  return e;
}
function Gs(n) {
  if (typeof n != "string")
    throw new TypeError("hexToBytes: expected string, got " + typeof n);
  if (n.length % 2)
    throw new Error("hexToBytes: received invalid unpadded hex");
  const e = new Uint8Array(n.length / 2);
  for (let t = 0; t < e.length; t++) {
    const r = t * 2, i = n.slice(r, r + 2), o = Number.parseInt(i, 16);
    if (Number.isNaN(o) || o < 0)
      throw new Error("Invalid byte sequence");
    e[t] = o;
  }
  return e;
}
function fu(n) {
  const t = n.toString(16).padStart(64, "0");
  return Gs(t);
}
function Dr(n) {
  return fu(n).reverse();
}
function Tn(n) {
  return (Y(n) & Te) === Te;
}
function Xr(n) {
  if (!(n instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  return BigInt("0x" + Jr(Uint8Array.from(n).reverse()));
}
const Wh = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
function zo(n) {
  return Y(Xr(n) & Wh);
}
function Y(n, e = Ve.P) {
  const t = n % e;
  return t >= Tt ? t : e + t;
}
function Gi(n, e = Ve.P) {
  if (n === Tt || e <= Tt)
    throw new Error(`invert: expected positive integers, got n=${n} mod=${e}`);
  let t = Y(n, e), r = e, i = Tt, o = Te;
  for (; t !== Tt; ) {
    const u = r / t, d = r % t, w = i - o * u;
    r = t, t = d, i = o, o = w;
  }
  if (r !== Te)
    throw new Error("invert: does not exist");
  return Y(i, e);
}
function jh(n, e = Ve.P) {
  const t = new Array(n.length), r = n.reduce((o, c, u) => c === Tt ? o : (t[u] = o, Y(o * c, e)), Te), i = Gi(r, e);
  return n.reduceRight((o, c, u) => c === Tt ? o : (t[u] = Y(o * t[u], e), Y(o * c, e)), i), t;
}
function pn(n, e) {
  const { P: t } = Ve;
  let r = n;
  for (; e-- > Tt; )
    r *= r, r %= t;
  return r;
}
function Gh(n) {
  const { P: e } = Ve, t = BigInt(5), r = BigInt(10), i = BigInt(20), o = BigInt(40), c = BigInt(80), d = n * n % e * n % e, w = pn(d, hr) * d % e, v = pn(w, Te) * n % e, S = pn(v, t) * v % e, T = pn(S, r) * S % e, E = pn(T, i) * T % e, _ = pn(E, o) * E % e, C = pn(_, c) * _ % e, U = pn(C, c) * _ % e, P = pn(U, r) * S % e;
  return { pow_p_5_8: pn(P, hr) * n % e, b2: d };
}
function qs(n, e) {
  const t = Y(e * e * e), r = Y(t * t * e), i = Gh(n * r).pow_p_5_8;
  let o = Y(n * t * i);
  const c = Y(e * o * o), u = o, d = Y(o * Rr), w = c === n, v = c === Y(-n), S = c === Y(-n * Rr);
  return w && (o = u), (v || S) && (o = d), Tn(o) && (o = Y(-o)), { isValid: w || v, value: o };
}
function Va(n) {
  return qs(Te, n);
}
function Ii(n) {
  return Y(Xr(n), Ve.l);
}
function qh(n, e) {
  if (n.length !== e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (n[t] !== e[t])
      return !1;
  return !0;
}
function Pn(n, e) {
  const t = n instanceof Uint8Array ? Uint8Array.from(n) : Gs(n);
  if (typeof e == "number" && t.length !== e)
    throw new Error(`Expected ${e} bytes`);
  return t;
}
function Bi(n, e, t = !0) {
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
function Qh(n) {
  return n[0] &= 248, n[31] &= 127, n[31] |= 64, n;
}
function hu(n) {
  if (n = typeof n == "bigint" || typeof n == "number" ? fu(Bi(n, lu)) : Pn(n), n.length !== 32)
    throw new Error("Expected 32 bytes");
  return n;
}
function du(n) {
  const e = Qh(n.slice(0, 32)), t = n.slice(32, 64), r = Ii(e), i = et.BASE.multiply(r), o = i.toRawBytes();
  return { head: e, prefix: t, scalar: r, point: i, pointBytes: o };
}
let kr;
function Mi(...n) {
  if (typeof kr != "function")
    throw new Error("utils.sha512Sync must be set to use sync methods");
  return kr(...n);
}
async function pu(n) {
  return du(await yr.sha512(hu(n)));
}
function Qs(n) {
  return du(Mi(hu(n)));
}
function Yh(n) {
  return Qs(n).pointBytes;
}
function Kh(n, e) {
  n = Pn(n);
  const { prefix: t, scalar: r, pointBytes: i } = Qs(e), o = Ii(Mi(t, n)), c = et.BASE.multiply(o), u = Ii(Mi(c.toRawBytes(), i, n)), d = Y(o + u * r, Ve.l);
  return new Ur(c, d).toRawBytes();
}
function Vh(n, e, t) {
  e = Pn(e), t instanceof et || (t = et.fromHex(t, !1));
  const { r, s: i } = n instanceof Ur ? n.assertValidity() : Ur.fromHex(n), o = Re.BASE.multiplyUnsafe(i);
  return { r, s: i, SB: o, pub: t, msg: e };
}
function Zh(n, e, t, r) {
  const i = Ii(r), o = Re.fromAffine(n).multiplyUnsafe(i);
  return Re.fromAffine(e).add(o).subtract(t).multiplyUnsafe(Ve.h).equals(Re.ZERO);
}
function Jh(n, e, t) {
  const { r, SB: i, msg: o, pub: c } = Vh(n, e, t), u = Mi(r.toRawBytes(), c.toRawBytes(), o);
  return Zh(c, r, i, u);
}
const gu = {
  getExtendedPublicKey: Qs,
  getPublicKey: Yh,
  sign: Kh,
  verify: Jh
};
et.BASE._setWindowSize(8);
const Mn = {
  node: js,
  web: typeof self == "object" && "crypto" in self ? self.crypto : void 0
}, yr = {
  bytesToHex: Jr,
  hexToBytes: Gs,
  concatBytes: Ka,
  getExtendedPublicKey: pu,
  mod: Y,
  invert: Gi,
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
    if (n = Pn(n), n.length < 40 || n.length > 1024)
      throw new Error("Expected 40-1024 bytes of private key as per FIPS 186");
    return Y(Xr(n), Ve.l - Te) + Te;
  },
  randomBytes: (n = 32) => {
    if (Mn.web)
      return Mn.web.getRandomValues(new Uint8Array(n));
    if (Mn.node) {
      const { randomBytes: e } = Mn.node;
      return new Uint8Array(e(n).buffer);
    } else
      throw new Error("The environment doesn't have randomBytes function");
  },
  randomPrivateKey: () => yr.randomBytes(32),
  sha512: async (...n) => {
    const e = Ka(...n);
    if (Mn.web) {
      const t = await Mn.web.subtle.digest("SHA-512", e.buffer);
      return new Uint8Array(t);
    } else {
      if (Mn.node)
        return Uint8Array.from(Mn.node.createHash("sha512").update(e).digest());
      throw new Error("The environment doesn't have sha512 function");
    }
  },
  precompute(n = 8, e = et.BASE) {
    const t = e.equals(et.BASE) ? e : new et(e.x, e.y);
    return t._setWindowSize(n), t.multiply(hr), t;
  },
  sha512Sync: void 0
};
Object.defineProperties(yr, {
  sha512Sync: {
    configurable: !1,
    get() {
      return kr;
    },
    set(n) {
      kr || (kr = n);
    }
  }
});
var Ys = { exports: {} };
const Xh = /* @__PURE__ */ Hi(js);
(function(n) {
  (function(e, t) {
    function r(I, l) {
      if (!I)
        throw new Error(l || "Assertion failed");
    }
    function i(I, l) {
      I.super_ = l;
      var p = function() {
      };
      p.prototype = l.prototype, I.prototype = new p(), I.prototype.constructor = I;
    }
    function o(I, l, p) {
      if (o.isBN(I))
        return I;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, I !== null && ((l === "le" || l === "be") && (p = l, l = 10), this._init(I || 0, l || 10, p || "be"));
    }
    typeof e == "object" ? e.exports = o : t.BN = o, o.BN = o, o.wordSize = 26;
    var c;
    try {
      typeof window < "u" && typeof window.Buffer < "u" ? c = window.Buffer : c = Xh.Buffer;
    } catch {
    }
    o.isBN = function(l) {
      return l instanceof o ? !0 : l !== null && typeof l == "object" && l.constructor.wordSize === o.wordSize && Array.isArray(l.words);
    }, o.max = function(l, p) {
      return l.cmp(p) > 0 ? l : p;
    }, o.min = function(l, p) {
      return l.cmp(p) < 0 ? l : p;
    }, o.prototype._init = function(l, p, m) {
      if (typeof l == "number")
        return this._initNumber(l, p, m);
      if (typeof l == "object")
        return this._initArray(l, p, m);
      p === "hex" && (p = 16), r(p === (p | 0) && p >= 2 && p <= 36), l = l.toString().replace(/\s+/g, "");
      var y = 0;
      l[0] === "-" && (y++, this.negative = 1), y < l.length && (p === 16 ? this._parseHex(l, y, m) : (this._parseBase(l, p, y), m === "le" && this._initArray(this.toArray(), p, m)));
    }, o.prototype._initNumber = function(l, p, m) {
      l < 0 && (this.negative = 1, l = -l), l < 67108864 ? (this.words = [l & 67108863], this.length = 1) : l < 4503599627370496 ? (this.words = [
        l & 67108863,
        l / 67108864 & 67108863
      ], this.length = 2) : (r(l < 9007199254740992), this.words = [
        l & 67108863,
        l / 67108864 & 67108863,
        1
      ], this.length = 3), m === "le" && this._initArray(this.toArray(), p, m);
    }, o.prototype._initArray = function(l, p, m) {
      if (r(typeof l.length == "number"), l.length <= 0)
        return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(l.length / 3), this.words = new Array(this.length);
      for (var y = 0; y < this.length; y++)
        this.words[y] = 0;
      var x, L, R = 0;
      if (m === "be")
        for (y = l.length - 1, x = 0; y >= 0; y -= 3)
          L = l[y] | l[y - 1] << 8 | l[y - 2] << 16, this.words[x] |= L << R & 67108863, this.words[x + 1] = L >>> 26 - R & 67108863, R += 24, R >= 26 && (R -= 26, x++);
      else if (m === "le")
        for (y = 0, x = 0; y < l.length; y += 3)
          L = l[y] | l[y + 1] << 8 | l[y + 2] << 16, this.words[x] |= L << R & 67108863, this.words[x + 1] = L >>> 26 - R & 67108863, R += 24, R >= 26 && (R -= 26, x++);
      return this._strip();
    };
    function u(I, l) {
      var p = I.charCodeAt(l);
      if (p >= 48 && p <= 57)
        return p - 48;
      if (p >= 65 && p <= 70)
        return p - 55;
      if (p >= 97 && p <= 102)
        return p - 87;
      r(!1, "Invalid character in " + I);
    }
    function d(I, l, p) {
      var m = u(I, p);
      return p - 1 >= l && (m |= u(I, p - 1) << 4), m;
    }
    o.prototype._parseHex = function(l, p, m) {
      this.length = Math.ceil((l.length - p) / 6), this.words = new Array(this.length);
      for (var y = 0; y < this.length; y++)
        this.words[y] = 0;
      var x = 0, L = 0, R;
      if (m === "be")
        for (y = l.length - 1; y >= p; y -= 2)
          R = d(l, p, y) << x, this.words[L] |= R & 67108863, x >= 18 ? (x -= 18, L += 1, this.words[L] |= R >>> 26) : x += 8;
      else {
        var b = l.length - p;
        for (y = b % 2 === 0 ? p + 1 : p; y < l.length; y += 2)
          R = d(l, p, y) << x, this.words[L] |= R & 67108863, x >= 18 ? (x -= 18, L += 1, this.words[L] |= R >>> 26) : x += 8;
      }
      this._strip();
    };
    function w(I, l, p, m) {
      for (var y = 0, x = 0, L = Math.min(I.length, p), R = l; R < L; R++) {
        var b = I.charCodeAt(R) - 48;
        y *= m, b >= 49 ? x = b - 49 + 10 : b >= 17 ? x = b - 17 + 10 : x = b, r(b >= 0 && x < m, "Invalid character"), y += x;
      }
      return y;
    }
    o.prototype._parseBase = function(l, p, m) {
      this.words = [0], this.length = 1;
      for (var y = 0, x = 1; x <= 67108863; x *= p)
        y++;
      y--, x = x / p | 0;
      for (var L = l.length - m, R = L % y, b = Math.min(L, L - R) + m, h = 0, M = m; M < b; M += y)
        h = w(l, M, M + y, p), this.imuln(x), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h);
      if (R !== 0) {
        var Q = 1;
        for (h = w(l, M, l.length, p), M = 0; M < R; M++)
          Q *= p;
        this.imuln(Q), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h);
      }
      this._strip();
    }, o.prototype.copy = function(l) {
      l.words = new Array(this.length);
      for (var p = 0; p < this.length; p++)
        l.words[p] = this.words[p];
      l.length = this.length, l.negative = this.negative, l.red = this.red;
    };
    function v(I, l) {
      I.words = l.words, I.length = l.length, I.negative = l.negative, I.red = l.red;
    }
    if (o.prototype._move = function(l) {
      v(l, this);
    }, o.prototype.clone = function() {
      var l = new o(null);
      return this.copy(l), l;
    }, o.prototype._expand = function(l) {
      for (; this.length < l; )
        this.words[this.length++] = 0;
      return this;
    }, o.prototype._strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0; )
        this.length--;
      return this._normSign();
    }, o.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, typeof Symbol < "u" && typeof Symbol.for == "function")
      try {
        o.prototype[Symbol.for("nodejs.util.inspect.custom")] = S;
      } catch {
        o.prototype.inspect = S;
      }
    else
      o.prototype.inspect = S;
    function S() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }
    var T = [
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
    ], _ = [
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
    o.prototype.toString = function(l, p) {
      l = l || 10, p = p | 0 || 1;
      var m;
      if (l === 16 || l === "hex") {
        m = "";
        for (var y = 0, x = 0, L = 0; L < this.length; L++) {
          var R = this.words[L], b = ((R << y | x) & 16777215).toString(16);
          x = R >>> 24 - y & 16777215, y += 2, y >= 26 && (y -= 26, L--), x !== 0 || L !== this.length - 1 ? m = T[6 - b.length] + b + m : m = b + m;
        }
        for (x !== 0 && (m = x.toString(16) + m); m.length % p !== 0; )
          m = "0" + m;
        return this.negative !== 0 && (m = "-" + m), m;
      }
      if (l === (l | 0) && l >= 2 && l <= 36) {
        var h = E[l], M = _[l];
        m = "";
        var Q = this.clone();
        for (Q.negative = 0; !Q.isZero(); ) {
          var Z = Q.modrn(M).toString(l);
          Q = Q.idivn(M), Q.isZero() ? m = Z + m : m = T[h - Z.length] + Z + m;
        }
        for (this.isZero() && (m = "0" + m); m.length % p !== 0; )
          m = "0" + m;
        return this.negative !== 0 && (m = "-" + m), m;
      }
      r(!1, "Base should be between 2 and 36");
    }, o.prototype.toNumber = function() {
      var l = this.words[0];
      return this.length === 2 ? l += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? l += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -l : l;
    }, o.prototype.toJSON = function() {
      return this.toString(16, 2);
    }, c && (o.prototype.toBuffer = function(l, p) {
      return this.toArrayLike(c, l, p);
    }), o.prototype.toArray = function(l, p) {
      return this.toArrayLike(Array, l, p);
    };
    var C = function(l, p) {
      return l.allocUnsafe ? l.allocUnsafe(p) : new l(p);
    };
    o.prototype.toArrayLike = function(l, p, m) {
      this._strip();
      var y = this.byteLength(), x = m || Math.max(1, y);
      r(y <= x, "byte array longer than desired length"), r(x > 0, "Requested array length <= 0");
      var L = C(l, x), R = p === "le" ? "LE" : "BE";
      return this["_toArrayLike" + R](L, y), L;
    }, o.prototype._toArrayLikeLE = function(l, p) {
      for (var m = 0, y = 0, x = 0, L = 0; x < this.length; x++) {
        var R = this.words[x] << L | y;
        l[m++] = R & 255, m < l.length && (l[m++] = R >> 8 & 255), m < l.length && (l[m++] = R >> 16 & 255), L === 6 ? (m < l.length && (l[m++] = R >> 24 & 255), y = 0, L = 0) : (y = R >>> 24, L += 2);
      }
      if (m < l.length)
        for (l[m++] = y; m < l.length; )
          l[m++] = 0;
    }, o.prototype._toArrayLikeBE = function(l, p) {
      for (var m = l.length - 1, y = 0, x = 0, L = 0; x < this.length; x++) {
        var R = this.words[x] << L | y;
        l[m--] = R & 255, m >= 0 && (l[m--] = R >> 8 & 255), m >= 0 && (l[m--] = R >> 16 & 255), L === 6 ? (m >= 0 && (l[m--] = R >> 24 & 255), y = 0, L = 0) : (y = R >>> 24, L += 2);
      }
      if (m >= 0)
        for (l[m--] = y; m >= 0; )
          l[m--] = 0;
    }, Math.clz32 ? o.prototype._countBits = function(l) {
      return 32 - Math.clz32(l);
    } : o.prototype._countBits = function(l) {
      var p = l, m = 0;
      return p >= 4096 && (m += 13, p >>>= 13), p >= 64 && (m += 7, p >>>= 7), p >= 8 && (m += 4, p >>>= 4), p >= 2 && (m += 2, p >>>= 2), m + p;
    }, o.prototype._zeroBits = function(l) {
      if (l === 0)
        return 26;
      var p = l, m = 0;
      return (p & 8191) === 0 && (m += 13, p >>>= 13), (p & 127) === 0 && (m += 7, p >>>= 7), (p & 15) === 0 && (m += 4, p >>>= 4), (p & 3) === 0 && (m += 2, p >>>= 2), (p & 1) === 0 && m++, m;
    }, o.prototype.bitLength = function() {
      var l = this.words[this.length - 1], p = this._countBits(l);
      return (this.length - 1) * 26 + p;
    };
    function U(I) {
      for (var l = new Array(I.bitLength()), p = 0; p < l.length; p++) {
        var m = p / 26 | 0, y = p % 26;
        l[p] = I.words[m] >>> y & 1;
      }
      return l;
    }
    o.prototype.zeroBits = function() {
      if (this.isZero())
        return 0;
      for (var l = 0, p = 0; p < this.length; p++) {
        var m = this._zeroBits(this.words[p]);
        if (l += m, m !== 26)
          break;
      }
      return l;
    }, o.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, o.prototype.toTwos = function(l) {
      return this.negative !== 0 ? this.abs().inotn(l).iaddn(1) : this.clone();
    }, o.prototype.fromTwos = function(l) {
      return this.testn(l - 1) ? this.notn(l).iaddn(1).ineg() : this.clone();
    }, o.prototype.isNeg = function() {
      return this.negative !== 0;
    }, o.prototype.neg = function() {
      return this.clone().ineg();
    }, o.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, o.prototype.iuor = function(l) {
      for (; this.length < l.length; )
        this.words[this.length++] = 0;
      for (var p = 0; p < l.length; p++)
        this.words[p] = this.words[p] | l.words[p];
      return this._strip();
    }, o.prototype.ior = function(l) {
      return r((this.negative | l.negative) === 0), this.iuor(l);
    }, o.prototype.or = function(l) {
      return this.length > l.length ? this.clone().ior(l) : l.clone().ior(this);
    }, o.prototype.uor = function(l) {
      return this.length > l.length ? this.clone().iuor(l) : l.clone().iuor(this);
    }, o.prototype.iuand = function(l) {
      var p;
      this.length > l.length ? p = l : p = this;
      for (var m = 0; m < p.length; m++)
        this.words[m] = this.words[m] & l.words[m];
      return this.length = p.length, this._strip();
    }, o.prototype.iand = function(l) {
      return r((this.negative | l.negative) === 0), this.iuand(l);
    }, o.prototype.and = function(l) {
      return this.length > l.length ? this.clone().iand(l) : l.clone().iand(this);
    }, o.prototype.uand = function(l) {
      return this.length > l.length ? this.clone().iuand(l) : l.clone().iuand(this);
    }, o.prototype.iuxor = function(l) {
      var p, m;
      this.length > l.length ? (p = this, m = l) : (p = l, m = this);
      for (var y = 0; y < m.length; y++)
        this.words[y] = p.words[y] ^ m.words[y];
      if (this !== p)
        for (; y < p.length; y++)
          this.words[y] = p.words[y];
      return this.length = p.length, this._strip();
    }, o.prototype.ixor = function(l) {
      return r((this.negative | l.negative) === 0), this.iuxor(l);
    }, o.prototype.xor = function(l) {
      return this.length > l.length ? this.clone().ixor(l) : l.clone().ixor(this);
    }, o.prototype.uxor = function(l) {
      return this.length > l.length ? this.clone().iuxor(l) : l.clone().iuxor(this);
    }, o.prototype.inotn = function(l) {
      r(typeof l == "number" && l >= 0);
      var p = Math.ceil(l / 26) | 0, m = l % 26;
      this._expand(p), m > 0 && p--;
      for (var y = 0; y < p; y++)
        this.words[y] = ~this.words[y] & 67108863;
      return m > 0 && (this.words[y] = ~this.words[y] & 67108863 >> 26 - m), this._strip();
    }, o.prototype.notn = function(l) {
      return this.clone().inotn(l);
    }, o.prototype.setn = function(l, p) {
      r(typeof l == "number" && l >= 0);
      var m = l / 26 | 0, y = l % 26;
      return this._expand(m + 1), p ? this.words[m] = this.words[m] | 1 << y : this.words[m] = this.words[m] & ~(1 << y), this._strip();
    }, o.prototype.iadd = function(l) {
      var p;
      if (this.negative !== 0 && l.negative === 0)
        return this.negative = 0, p = this.isub(l), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && l.negative !== 0)
        return l.negative = 0, p = this.isub(l), l.negative = 1, p._normSign();
      var m, y;
      this.length > l.length ? (m = this, y = l) : (m = l, y = this);
      for (var x = 0, L = 0; L < y.length; L++)
        p = (m.words[L] | 0) + (y.words[L] | 0) + x, this.words[L] = p & 67108863, x = p >>> 26;
      for (; x !== 0 && L < m.length; L++)
        p = (m.words[L] | 0) + x, this.words[L] = p & 67108863, x = p >>> 26;
      if (this.length = m.length, x !== 0)
        this.words[this.length] = x, this.length++;
      else if (m !== this)
        for (; L < m.length; L++)
          this.words[L] = m.words[L];
      return this;
    }, o.prototype.add = function(l) {
      var p;
      return l.negative !== 0 && this.negative === 0 ? (l.negative = 0, p = this.sub(l), l.negative ^= 1, p) : l.negative === 0 && this.negative !== 0 ? (this.negative = 0, p = l.sub(this), this.negative = 1, p) : this.length > l.length ? this.clone().iadd(l) : l.clone().iadd(this);
    }, o.prototype.isub = function(l) {
      if (l.negative !== 0) {
        l.negative = 0;
        var p = this.iadd(l);
        return l.negative = 1, p._normSign();
      } else if (this.negative !== 0)
        return this.negative = 0, this.iadd(l), this.negative = 1, this._normSign();
      var m = this.cmp(l);
      if (m === 0)
        return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var y, x;
      m > 0 ? (y = this, x = l) : (y = l, x = this);
      for (var L = 0, R = 0; R < x.length; R++)
        p = (y.words[R] | 0) - (x.words[R] | 0) + L, L = p >> 26, this.words[R] = p & 67108863;
      for (; L !== 0 && R < y.length; R++)
        p = (y.words[R] | 0) + L, L = p >> 26, this.words[R] = p & 67108863;
      if (L === 0 && R < y.length && y !== this)
        for (; R < y.length; R++)
          this.words[R] = y.words[R];
      return this.length = Math.max(this.length, R), y !== this && (this.negative = 1), this._strip();
    }, o.prototype.sub = function(l) {
      return this.clone().isub(l);
    };
    function P(I, l, p) {
      p.negative = l.negative ^ I.negative;
      var m = I.length + l.length | 0;
      p.length = m, m = m - 1 | 0;
      var y = I.words[0] | 0, x = l.words[0] | 0, L = y * x, R = L & 67108863, b = L / 67108864 | 0;
      p.words[0] = R;
      for (var h = 1; h < m; h++) {
        for (var M = b >>> 26, Q = b & 67108863, Z = Math.min(h, l.length - 1), V = Math.max(0, h - I.length + 1); V <= Z; V++) {
          var oe = h - V | 0;
          y = I.words[oe] | 0, x = l.words[V] | 0, L = y * x + Q, M += L / 67108864 | 0, Q = L & 67108863;
        }
        p.words[h] = Q | 0, b = M | 0;
      }
      return b !== 0 ? p.words[h] = b | 0 : p.length--, p._strip();
    }
    var z = function(l, p, m) {
      var y = l.words, x = p.words, L = m.words, R = 0, b, h, M, Q = y[0] | 0, Z = Q & 8191, V = Q >>> 13, oe = y[1] | 0, $ = oe & 8191, se = oe >>> 13, Ae = y[2] | 0, xe = Ae & 8191, K = Ae >>> 13, We = y[3] | 0, Ie = We & 8191, je = We >>> 13, or = y[4] | 0, ze = or & 8191, qe = or >>> 13, sr = y[5] | 0, Ge = sr & 8191, Oe = sr >>> 13, Qe = y[6] | 0, He = Qe & 8191, Ye = Qe >>> 13, rt = y[7] | 0, Ke = rt & 8191, f = rt >>> 13, s = y[8] | 0, a = s & 8191, g = s >>> 13, A = y[9] | 0, B = A & 8191, k = A >>> 13, X = x[0] | 0, ie = X & 8191, ne = X >>> 13, ye = x[1] | 0, ee = ye & 8191, it = ye >>> 13, va = x[2] | 0, ot = va & 8191, st = va >>> 13, Ea = x[3] | 0, at = Ea & 8191, ct = Ea >>> 13, xa = x[4] | 0, ut = xa & 8191, lt = xa >>> 13, Sa = x[5] | 0, ft = Sa & 8191, ht = Sa >>> 13, Ia = x[6] | 0, dt = Ia & 8191, pt = Ia >>> 13, Ba = x[7] | 0, gt = Ba & 8191, yt = Ba >>> 13, Ma = x[8] | 0, wt = Ma & 8191, mt = Ma >>> 13, _a = x[9] | 0, bt = _a & 8191, At = _a >>> 13;
      m.negative = l.negative ^ p.negative, m.length = 19, b = Math.imul(Z, ie), h = Math.imul(Z, ne), h = h + Math.imul(V, ie) | 0, M = Math.imul(V, ne);
      var ao = (R + b | 0) + ((h & 8191) << 13) | 0;
      R = (M + (h >>> 13) | 0) + (ao >>> 26) | 0, ao &= 67108863, b = Math.imul($, ie), h = Math.imul($, ne), h = h + Math.imul(se, ie) | 0, M = Math.imul(se, ne), b = b + Math.imul(Z, ee) | 0, h = h + Math.imul(Z, it) | 0, h = h + Math.imul(V, ee) | 0, M = M + Math.imul(V, it) | 0;
      var co = (R + b | 0) + ((h & 8191) << 13) | 0;
      R = (M + (h >>> 13) | 0) + (co >>> 26) | 0, co &= 67108863, b = Math.imul(xe, ie), h = Math.imul(xe, ne), h = h + Math.imul(K, ie) | 0, M = Math.imul(K, ne), b = b + Math.imul($, ee) | 0, h = h + Math.imul($, it) | 0, h = h + Math.imul(se, ee) | 0, M = M + Math.imul(se, it) | 0, b = b + Math.imul(Z, ot) | 0, h = h + Math.imul(Z, st) | 0, h = h + Math.imul(V, ot) | 0, M = M + Math.imul(V, st) | 0;
      var uo = (R + b | 0) + ((h & 8191) << 13) | 0;
      R = (M + (h >>> 13) | 0) + (uo >>> 26) | 0, uo &= 67108863, b = Math.imul(Ie, ie), h = Math.imul(Ie, ne), h = h + Math.imul(je, ie) | 0, M = Math.imul(je, ne), b = b + Math.imul(xe, ee) | 0, h = h + Math.imul(xe, it) | 0, h = h + Math.imul(K, ee) | 0, M = M + Math.imul(K, it) | 0, b = b + Math.imul($, ot) | 0, h = h + Math.imul($, st) | 0, h = h + Math.imul(se, ot) | 0, M = M + Math.imul(se, st) | 0, b = b + Math.imul(Z, at) | 0, h = h + Math.imul(Z, ct) | 0, h = h + Math.imul(V, at) | 0, M = M + Math.imul(V, ct) | 0;
      var lo = (R + b | 0) + ((h & 8191) << 13) | 0;
      R = (M + (h >>> 13) | 0) + (lo >>> 26) | 0, lo &= 67108863, b = Math.imul(ze, ie), h = Math.imul(ze, ne), h = h + Math.imul(qe, ie) | 0, M = Math.imul(qe, ne), b = b + Math.imul(Ie, ee) | 0, h = h + Math.imul(Ie, it) | 0, h = h + Math.imul(je, ee) | 0, M = M + Math.imul(je, it) | 0, b = b + Math.imul(xe, ot) | 0, h = h + Math.imul(xe, st) | 0, h = h + Math.imul(K, ot) | 0, M = M + Math.imul(K, st) | 0, b = b + Math.imul($, at) | 0, h = h + Math.imul($, ct) | 0, h = h + Math.imul(se, at) | 0, M = M + Math.imul(se, ct) | 0, b = b + Math.imul(Z, ut) | 0, h = h + Math.imul(Z, lt) | 0, h = h + Math.imul(V, ut) | 0, M = M + Math.imul(V, lt) | 0;
      var fo = (R + b | 0) + ((h & 8191) << 13) | 0;
      R = (M + (h >>> 13) | 0) + (fo >>> 26) | 0, fo &= 67108863, b = Math.imul(Ge, ie), h = Math.imul(Ge, ne), h = h + Math.imul(Oe, ie) | 0, M = Math.imul(Oe, ne), b = b + Math.imul(ze, ee) | 0, h = h + Math.imul(ze, it) | 0, h = h + Math.imul(qe, ee) | 0, M = M + Math.imul(qe, it) | 0, b = b + Math.imul(Ie, ot) | 0, h = h + Math.imul(Ie, st) | 0, h = h + Math.imul(je, ot) | 0, M = M + Math.imul(je, st) | 0, b = b + Math.imul(xe, at) | 0, h = h + Math.imul(xe, ct) | 0, h = h + Math.imul(K, at) | 0, M = M + Math.imul(K, ct) | 0, b = b + Math.imul($, ut) | 0, h = h + Math.imul($, lt) | 0, h = h + Math.imul(se, ut) | 0, M = M + Math.imul(se, lt) | 0, b = b + Math.imul(Z, ft) | 0, h = h + Math.imul(Z, ht) | 0, h = h + Math.imul(V, ft) | 0, M = M + Math.imul(V, ht) | 0;
      var ho = (R + b | 0) + ((h & 8191) << 13) | 0;
      R = (M + (h >>> 13) | 0) + (ho >>> 26) | 0, ho &= 67108863, b = Math.imul(He, ie), h = Math.imul(He, ne), h = h + Math.imul(Ye, ie) | 0, M = Math.imul(Ye, ne), b = b + Math.imul(Ge, ee) | 0, h = h + Math.imul(Ge, it) | 0, h = h + Math.imul(Oe, ee) | 0, M = M + Math.imul(Oe, it) | 0, b = b + Math.imul(ze, ot) | 0, h = h + Math.imul(ze, st) | 0, h = h + Math.imul(qe, ot) | 0, M = M + Math.imul(qe, st) | 0, b = b + Math.imul(Ie, at) | 0, h = h + Math.imul(Ie, ct) | 0, h = h + Math.imul(je, at) | 0, M = M + Math.imul(je, ct) | 0, b = b + Math.imul(xe, ut) | 0, h = h + Math.imul(xe, lt) | 0, h = h + Math.imul(K, ut) | 0, M = M + Math.imul(K, lt) | 0, b = b + Math.imul($, ft) | 0, h = h + Math.imul($, ht) | 0, h = h + Math.imul(se, ft) | 0, M = M + Math.imul(se, ht) | 0, b = b + Math.imul(Z, dt) | 0, h = h + Math.imul(Z, pt) | 0, h = h + Math.imul(V, dt) | 0, M = M + Math.imul(V, pt) | 0;
      var po = (R + b | 0) + ((h & 8191) << 13) | 0;
      R = (M + (h >>> 13) | 0) + (po >>> 26) | 0, po &= 67108863, b = Math.imul(Ke, ie), h = Math.imul(Ke, ne), h = h + Math.imul(f, ie) | 0, M = Math.imul(f, ne), b = b + Math.imul(He, ee) | 0, h = h + Math.imul(He, it) | 0, h = h + Math.imul(Ye, ee) | 0, M = M + Math.imul(Ye, it) | 0, b = b + Math.imul(Ge, ot) | 0, h = h + Math.imul(Ge, st) | 0, h = h + Math.imul(Oe, ot) | 0, M = M + Math.imul(Oe, st) | 0, b = b + Math.imul(ze, at) | 0, h = h + Math.imul(ze, ct) | 0, h = h + Math.imul(qe, at) | 0, M = M + Math.imul(qe, ct) | 0, b = b + Math.imul(Ie, ut) | 0, h = h + Math.imul(Ie, lt) | 0, h = h + Math.imul(je, ut) | 0, M = M + Math.imul(je, lt) | 0, b = b + Math.imul(xe, ft) | 0, h = h + Math.imul(xe, ht) | 0, h = h + Math.imul(K, ft) | 0, M = M + Math.imul(K, ht) | 0, b = b + Math.imul($, dt) | 0, h = h + Math.imul($, pt) | 0, h = h + Math.imul(se, dt) | 0, M = M + Math.imul(se, pt) | 0, b = b + Math.imul(Z, gt) | 0, h = h + Math.imul(Z, yt) | 0, h = h + Math.imul(V, gt) | 0, M = M + Math.imul(V, yt) | 0;
      var go = (R + b | 0) + ((h & 8191) << 13) | 0;
      R = (M + (h >>> 13) | 0) + (go >>> 26) | 0, go &= 67108863, b = Math.imul(a, ie), h = Math.imul(a, ne), h = h + Math.imul(g, ie) | 0, M = Math.imul(g, ne), b = b + Math.imul(Ke, ee) | 0, h = h + Math.imul(Ke, it) | 0, h = h + Math.imul(f, ee) | 0, M = M + Math.imul(f, it) | 0, b = b + Math.imul(He, ot) | 0, h = h + Math.imul(He, st) | 0, h = h + Math.imul(Ye, ot) | 0, M = M + Math.imul(Ye, st) | 0, b = b + Math.imul(Ge, at) | 0, h = h + Math.imul(Ge, ct) | 0, h = h + Math.imul(Oe, at) | 0, M = M + Math.imul(Oe, ct) | 0, b = b + Math.imul(ze, ut) | 0, h = h + Math.imul(ze, lt) | 0, h = h + Math.imul(qe, ut) | 0, M = M + Math.imul(qe, lt) | 0, b = b + Math.imul(Ie, ft) | 0, h = h + Math.imul(Ie, ht) | 0, h = h + Math.imul(je, ft) | 0, M = M + Math.imul(je, ht) | 0, b = b + Math.imul(xe, dt) | 0, h = h + Math.imul(xe, pt) | 0, h = h + Math.imul(K, dt) | 0, M = M + Math.imul(K, pt) | 0, b = b + Math.imul($, gt) | 0, h = h + Math.imul($, yt) | 0, h = h + Math.imul(se, gt) | 0, M = M + Math.imul(se, yt) | 0, b = b + Math.imul(Z, wt) | 0, h = h + Math.imul(Z, mt) | 0, h = h + Math.imul(V, wt) | 0, M = M + Math.imul(V, mt) | 0;
      var yo = (R + b | 0) + ((h & 8191) << 13) | 0;
      R = (M + (h >>> 13) | 0) + (yo >>> 26) | 0, yo &= 67108863, b = Math.imul(B, ie), h = Math.imul(B, ne), h = h + Math.imul(k, ie) | 0, M = Math.imul(k, ne), b = b + Math.imul(a, ee) | 0, h = h + Math.imul(a, it) | 0, h = h + Math.imul(g, ee) | 0, M = M + Math.imul(g, it) | 0, b = b + Math.imul(Ke, ot) | 0, h = h + Math.imul(Ke, st) | 0, h = h + Math.imul(f, ot) | 0, M = M + Math.imul(f, st) | 0, b = b + Math.imul(He, at) | 0, h = h + Math.imul(He, ct) | 0, h = h + Math.imul(Ye, at) | 0, M = M + Math.imul(Ye, ct) | 0, b = b + Math.imul(Ge, ut) | 0, h = h + Math.imul(Ge, lt) | 0, h = h + Math.imul(Oe, ut) | 0, M = M + Math.imul(Oe, lt) | 0, b = b + Math.imul(ze, ft) | 0, h = h + Math.imul(ze, ht) | 0, h = h + Math.imul(qe, ft) | 0, M = M + Math.imul(qe, ht) | 0, b = b + Math.imul(Ie, dt) | 0, h = h + Math.imul(Ie, pt) | 0, h = h + Math.imul(je, dt) | 0, M = M + Math.imul(je, pt) | 0, b = b + Math.imul(xe, gt) | 0, h = h + Math.imul(xe, yt) | 0, h = h + Math.imul(K, gt) | 0, M = M + Math.imul(K, yt) | 0, b = b + Math.imul($, wt) | 0, h = h + Math.imul($, mt) | 0, h = h + Math.imul(se, wt) | 0, M = M + Math.imul(se, mt) | 0, b = b + Math.imul(Z, bt) | 0, h = h + Math.imul(Z, At) | 0, h = h + Math.imul(V, bt) | 0, M = M + Math.imul(V, At) | 0;
      var wo = (R + b | 0) + ((h & 8191) << 13) | 0;
      R = (M + (h >>> 13) | 0) + (wo >>> 26) | 0, wo &= 67108863, b = Math.imul(B, ee), h = Math.imul(B, it), h = h + Math.imul(k, ee) | 0, M = Math.imul(k, it), b = b + Math.imul(a, ot) | 0, h = h + Math.imul(a, st) | 0, h = h + Math.imul(g, ot) | 0, M = M + Math.imul(g, st) | 0, b = b + Math.imul(Ke, at) | 0, h = h + Math.imul(Ke, ct) | 0, h = h + Math.imul(f, at) | 0, M = M + Math.imul(f, ct) | 0, b = b + Math.imul(He, ut) | 0, h = h + Math.imul(He, lt) | 0, h = h + Math.imul(Ye, ut) | 0, M = M + Math.imul(Ye, lt) | 0, b = b + Math.imul(Ge, ft) | 0, h = h + Math.imul(Ge, ht) | 0, h = h + Math.imul(Oe, ft) | 0, M = M + Math.imul(Oe, ht) | 0, b = b + Math.imul(ze, dt) | 0, h = h + Math.imul(ze, pt) | 0, h = h + Math.imul(qe, dt) | 0, M = M + Math.imul(qe, pt) | 0, b = b + Math.imul(Ie, gt) | 0, h = h + Math.imul(Ie, yt) | 0, h = h + Math.imul(je, gt) | 0, M = M + Math.imul(je, yt) | 0, b = b + Math.imul(xe, wt) | 0, h = h + Math.imul(xe, mt) | 0, h = h + Math.imul(K, wt) | 0, M = M + Math.imul(K, mt) | 0, b = b + Math.imul($, bt) | 0, h = h + Math.imul($, At) | 0, h = h + Math.imul(se, bt) | 0, M = M + Math.imul(se, At) | 0;
      var mo = (R + b | 0) + ((h & 8191) << 13) | 0;
      R = (M + (h >>> 13) | 0) + (mo >>> 26) | 0, mo &= 67108863, b = Math.imul(B, ot), h = Math.imul(B, st), h = h + Math.imul(k, ot) | 0, M = Math.imul(k, st), b = b + Math.imul(a, at) | 0, h = h + Math.imul(a, ct) | 0, h = h + Math.imul(g, at) | 0, M = M + Math.imul(g, ct) | 0, b = b + Math.imul(Ke, ut) | 0, h = h + Math.imul(Ke, lt) | 0, h = h + Math.imul(f, ut) | 0, M = M + Math.imul(f, lt) | 0, b = b + Math.imul(He, ft) | 0, h = h + Math.imul(He, ht) | 0, h = h + Math.imul(Ye, ft) | 0, M = M + Math.imul(Ye, ht) | 0, b = b + Math.imul(Ge, dt) | 0, h = h + Math.imul(Ge, pt) | 0, h = h + Math.imul(Oe, dt) | 0, M = M + Math.imul(Oe, pt) | 0, b = b + Math.imul(ze, gt) | 0, h = h + Math.imul(ze, yt) | 0, h = h + Math.imul(qe, gt) | 0, M = M + Math.imul(qe, yt) | 0, b = b + Math.imul(Ie, wt) | 0, h = h + Math.imul(Ie, mt) | 0, h = h + Math.imul(je, wt) | 0, M = M + Math.imul(je, mt) | 0, b = b + Math.imul(xe, bt) | 0, h = h + Math.imul(xe, At) | 0, h = h + Math.imul(K, bt) | 0, M = M + Math.imul(K, At) | 0;
      var bo = (R + b | 0) + ((h & 8191) << 13) | 0;
      R = (M + (h >>> 13) | 0) + (bo >>> 26) | 0, bo &= 67108863, b = Math.imul(B, at), h = Math.imul(B, ct), h = h + Math.imul(k, at) | 0, M = Math.imul(k, ct), b = b + Math.imul(a, ut) | 0, h = h + Math.imul(a, lt) | 0, h = h + Math.imul(g, ut) | 0, M = M + Math.imul(g, lt) | 0, b = b + Math.imul(Ke, ft) | 0, h = h + Math.imul(Ke, ht) | 0, h = h + Math.imul(f, ft) | 0, M = M + Math.imul(f, ht) | 0, b = b + Math.imul(He, dt) | 0, h = h + Math.imul(He, pt) | 0, h = h + Math.imul(Ye, dt) | 0, M = M + Math.imul(Ye, pt) | 0, b = b + Math.imul(Ge, gt) | 0, h = h + Math.imul(Ge, yt) | 0, h = h + Math.imul(Oe, gt) | 0, M = M + Math.imul(Oe, yt) | 0, b = b + Math.imul(ze, wt) | 0, h = h + Math.imul(ze, mt) | 0, h = h + Math.imul(qe, wt) | 0, M = M + Math.imul(qe, mt) | 0, b = b + Math.imul(Ie, bt) | 0, h = h + Math.imul(Ie, At) | 0, h = h + Math.imul(je, bt) | 0, M = M + Math.imul(je, At) | 0;
      var Ao = (R + b | 0) + ((h & 8191) << 13) | 0;
      R = (M + (h >>> 13) | 0) + (Ao >>> 26) | 0, Ao &= 67108863, b = Math.imul(B, ut), h = Math.imul(B, lt), h = h + Math.imul(k, ut) | 0, M = Math.imul(k, lt), b = b + Math.imul(a, ft) | 0, h = h + Math.imul(a, ht) | 0, h = h + Math.imul(g, ft) | 0, M = M + Math.imul(g, ht) | 0, b = b + Math.imul(Ke, dt) | 0, h = h + Math.imul(Ke, pt) | 0, h = h + Math.imul(f, dt) | 0, M = M + Math.imul(f, pt) | 0, b = b + Math.imul(He, gt) | 0, h = h + Math.imul(He, yt) | 0, h = h + Math.imul(Ye, gt) | 0, M = M + Math.imul(Ye, yt) | 0, b = b + Math.imul(Ge, wt) | 0, h = h + Math.imul(Ge, mt) | 0, h = h + Math.imul(Oe, wt) | 0, M = M + Math.imul(Oe, mt) | 0, b = b + Math.imul(ze, bt) | 0, h = h + Math.imul(ze, At) | 0, h = h + Math.imul(qe, bt) | 0, M = M + Math.imul(qe, At) | 0;
      var vo = (R + b | 0) + ((h & 8191) << 13) | 0;
      R = (M + (h >>> 13) | 0) + (vo >>> 26) | 0, vo &= 67108863, b = Math.imul(B, ft), h = Math.imul(B, ht), h = h + Math.imul(k, ft) | 0, M = Math.imul(k, ht), b = b + Math.imul(a, dt) | 0, h = h + Math.imul(a, pt) | 0, h = h + Math.imul(g, dt) | 0, M = M + Math.imul(g, pt) | 0, b = b + Math.imul(Ke, gt) | 0, h = h + Math.imul(Ke, yt) | 0, h = h + Math.imul(f, gt) | 0, M = M + Math.imul(f, yt) | 0, b = b + Math.imul(He, wt) | 0, h = h + Math.imul(He, mt) | 0, h = h + Math.imul(Ye, wt) | 0, M = M + Math.imul(Ye, mt) | 0, b = b + Math.imul(Ge, bt) | 0, h = h + Math.imul(Ge, At) | 0, h = h + Math.imul(Oe, bt) | 0, M = M + Math.imul(Oe, At) | 0;
      var Eo = (R + b | 0) + ((h & 8191) << 13) | 0;
      R = (M + (h >>> 13) | 0) + (Eo >>> 26) | 0, Eo &= 67108863, b = Math.imul(B, dt), h = Math.imul(B, pt), h = h + Math.imul(k, dt) | 0, M = Math.imul(k, pt), b = b + Math.imul(a, gt) | 0, h = h + Math.imul(a, yt) | 0, h = h + Math.imul(g, gt) | 0, M = M + Math.imul(g, yt) | 0, b = b + Math.imul(Ke, wt) | 0, h = h + Math.imul(Ke, mt) | 0, h = h + Math.imul(f, wt) | 0, M = M + Math.imul(f, mt) | 0, b = b + Math.imul(He, bt) | 0, h = h + Math.imul(He, At) | 0, h = h + Math.imul(Ye, bt) | 0, M = M + Math.imul(Ye, At) | 0;
      var xo = (R + b | 0) + ((h & 8191) << 13) | 0;
      R = (M + (h >>> 13) | 0) + (xo >>> 26) | 0, xo &= 67108863, b = Math.imul(B, gt), h = Math.imul(B, yt), h = h + Math.imul(k, gt) | 0, M = Math.imul(k, yt), b = b + Math.imul(a, wt) | 0, h = h + Math.imul(a, mt) | 0, h = h + Math.imul(g, wt) | 0, M = M + Math.imul(g, mt) | 0, b = b + Math.imul(Ke, bt) | 0, h = h + Math.imul(Ke, At) | 0, h = h + Math.imul(f, bt) | 0, M = M + Math.imul(f, At) | 0;
      var So = (R + b | 0) + ((h & 8191) << 13) | 0;
      R = (M + (h >>> 13) | 0) + (So >>> 26) | 0, So &= 67108863, b = Math.imul(B, wt), h = Math.imul(B, mt), h = h + Math.imul(k, wt) | 0, M = Math.imul(k, mt), b = b + Math.imul(a, bt) | 0, h = h + Math.imul(a, At) | 0, h = h + Math.imul(g, bt) | 0, M = M + Math.imul(g, At) | 0;
      var Io = (R + b | 0) + ((h & 8191) << 13) | 0;
      R = (M + (h >>> 13) | 0) + (Io >>> 26) | 0, Io &= 67108863, b = Math.imul(B, bt), h = Math.imul(B, At), h = h + Math.imul(k, bt) | 0, M = Math.imul(k, At);
      var Bo = (R + b | 0) + ((h & 8191) << 13) | 0;
      return R = (M + (h >>> 13) | 0) + (Bo >>> 26) | 0, Bo &= 67108863, L[0] = ao, L[1] = co, L[2] = uo, L[3] = lo, L[4] = fo, L[5] = ho, L[6] = po, L[7] = go, L[8] = yo, L[9] = wo, L[10] = mo, L[11] = bo, L[12] = Ao, L[13] = vo, L[14] = Eo, L[15] = xo, L[16] = So, L[17] = Io, L[18] = Bo, R !== 0 && (L[19] = R, m.length++), m;
    };
    Math.imul || (z = P);
    function N(I, l, p) {
      p.negative = l.negative ^ I.negative, p.length = I.length + l.length;
      for (var m = 0, y = 0, x = 0; x < p.length - 1; x++) {
        var L = y;
        y = 0;
        for (var R = m & 67108863, b = Math.min(x, l.length - 1), h = Math.max(0, x - I.length + 1); h <= b; h++) {
          var M = x - h, Q = I.words[M] | 0, Z = l.words[h] | 0, V = Q * Z, oe = V & 67108863;
          L = L + (V / 67108864 | 0) | 0, oe = oe + R | 0, R = oe & 67108863, L = L + (oe >>> 26) | 0, y += L >>> 26, L &= 67108863;
        }
        p.words[x] = R, m = L, L = y;
      }
      return m !== 0 ? p.words[x] = m : p.length--, p._strip();
    }
    function F(I, l, p) {
      return N(I, l, p);
    }
    o.prototype.mulTo = function(l, p) {
      var m, y = this.length + l.length;
      return this.length === 10 && l.length === 10 ? m = z(this, l, p) : y < 63 ? m = P(this, l, p) : y < 1024 ? m = N(this, l, p) : m = F(this, l, p), m;
    }, o.prototype.mul = function(l) {
      var p = new o(null);
      return p.words = new Array(this.length + l.length), this.mulTo(l, p);
    }, o.prototype.mulf = function(l) {
      var p = new o(null);
      return p.words = new Array(this.length + l.length), F(this, l, p);
    }, o.prototype.imul = function(l) {
      return this.clone().mulTo(l, this);
    }, o.prototype.imuln = function(l) {
      var p = l < 0;
      p && (l = -l), r(typeof l == "number"), r(l < 67108864);
      for (var m = 0, y = 0; y < this.length; y++) {
        var x = (this.words[y] | 0) * l, L = (x & 67108863) + (m & 67108863);
        m >>= 26, m += x / 67108864 | 0, m += L >>> 26, this.words[y] = L & 67108863;
      }
      return m !== 0 && (this.words[y] = m, this.length++), p ? this.ineg() : this;
    }, o.prototype.muln = function(l) {
      return this.clone().imuln(l);
    }, o.prototype.sqr = function() {
      return this.mul(this);
    }, o.prototype.isqr = function() {
      return this.imul(this.clone());
    }, o.prototype.pow = function(l) {
      var p = U(l);
      if (p.length === 0)
        return new o(1);
      for (var m = this, y = 0; y < p.length && p[y] === 0; y++, m = m.sqr())
        ;
      if (++y < p.length)
        for (var x = m.sqr(); y < p.length; y++, x = x.sqr())
          p[y] !== 0 && (m = m.mul(x));
      return m;
    }, o.prototype.iushln = function(l) {
      r(typeof l == "number" && l >= 0);
      var p = l % 26, m = (l - p) / 26, y = 67108863 >>> 26 - p << 26 - p, x;
      if (p !== 0) {
        var L = 0;
        for (x = 0; x < this.length; x++) {
          var R = this.words[x] & y, b = (this.words[x] | 0) - R << p;
          this.words[x] = b | L, L = R >>> 26 - p;
        }
        L && (this.words[x] = L, this.length++);
      }
      if (m !== 0) {
        for (x = this.length - 1; x >= 0; x--)
          this.words[x + m] = this.words[x];
        for (x = 0; x < m; x++)
          this.words[x] = 0;
        this.length += m;
      }
      return this._strip();
    }, o.prototype.ishln = function(l) {
      return r(this.negative === 0), this.iushln(l);
    }, o.prototype.iushrn = function(l, p, m) {
      r(typeof l == "number" && l >= 0);
      var y;
      p ? y = (p - p % 26) / 26 : y = 0;
      var x = l % 26, L = Math.min((l - x) / 26, this.length), R = 67108863 ^ 67108863 >>> x << x, b = m;
      if (y -= L, y = Math.max(0, y), b) {
        for (var h = 0; h < L; h++)
          b.words[h] = this.words[h];
        b.length = L;
      }
      if (L !== 0)
        if (this.length > L)
          for (this.length -= L, h = 0; h < this.length; h++)
            this.words[h] = this.words[h + L];
        else
          this.words[0] = 0, this.length = 1;
      var M = 0;
      for (h = this.length - 1; h >= 0 && (M !== 0 || h >= y); h--) {
        var Q = this.words[h] | 0;
        this.words[h] = M << 26 - x | Q >>> x, M = Q & R;
      }
      return b && M !== 0 && (b.words[b.length++] = M), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
    }, o.prototype.ishrn = function(l, p, m) {
      return r(this.negative === 0), this.iushrn(l, p, m);
    }, o.prototype.shln = function(l) {
      return this.clone().ishln(l);
    }, o.prototype.ushln = function(l) {
      return this.clone().iushln(l);
    }, o.prototype.shrn = function(l) {
      return this.clone().ishrn(l);
    }, o.prototype.ushrn = function(l) {
      return this.clone().iushrn(l);
    }, o.prototype.testn = function(l) {
      r(typeof l == "number" && l >= 0);
      var p = l % 26, m = (l - p) / 26, y = 1 << p;
      if (this.length <= m)
        return !1;
      var x = this.words[m];
      return !!(x & y);
    }, o.prototype.imaskn = function(l) {
      r(typeof l == "number" && l >= 0);
      var p = l % 26, m = (l - p) / 26;
      if (r(this.negative === 0, "imaskn works only with positive numbers"), this.length <= m)
        return this;
      if (p !== 0 && m++, this.length = Math.min(m, this.length), p !== 0) {
        var y = 67108863 ^ 67108863 >>> p << p;
        this.words[this.length - 1] &= y;
      }
      return this._strip();
    }, o.prototype.maskn = function(l) {
      return this.clone().imaskn(l);
    }, o.prototype.iaddn = function(l) {
      return r(typeof l == "number"), r(l < 67108864), l < 0 ? this.isubn(-l) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= l ? (this.words[0] = l - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(l), this.negative = 1, this) : this._iaddn(l);
    }, o.prototype._iaddn = function(l) {
      this.words[0] += l;
      for (var p = 0; p < this.length && this.words[p] >= 67108864; p++)
        this.words[p] -= 67108864, p === this.length - 1 ? this.words[p + 1] = 1 : this.words[p + 1]++;
      return this.length = Math.max(this.length, p + 1), this;
    }, o.prototype.isubn = function(l) {
      if (r(typeof l == "number"), r(l < 67108864), l < 0)
        return this.iaddn(-l);
      if (this.negative !== 0)
        return this.negative = 0, this.iaddn(l), this.negative = 1, this;
      if (this.words[0] -= l, this.length === 1 && this.words[0] < 0)
        this.words[0] = -this.words[0], this.negative = 1;
      else
        for (var p = 0; p < this.length && this.words[p] < 0; p++)
          this.words[p] += 67108864, this.words[p + 1] -= 1;
      return this._strip();
    }, o.prototype.addn = function(l) {
      return this.clone().iaddn(l);
    }, o.prototype.subn = function(l) {
      return this.clone().isubn(l);
    }, o.prototype.iabs = function() {
      return this.negative = 0, this;
    }, o.prototype.abs = function() {
      return this.clone().iabs();
    }, o.prototype._ishlnsubmul = function(l, p, m) {
      var y = l.length + m, x;
      this._expand(y);
      var L, R = 0;
      for (x = 0; x < l.length; x++) {
        L = (this.words[x + m] | 0) + R;
        var b = (l.words[x] | 0) * p;
        L -= b & 67108863, R = (L >> 26) - (b / 67108864 | 0), this.words[x + m] = L & 67108863;
      }
      for (; x < this.length - m; x++)
        L = (this.words[x + m] | 0) + R, R = L >> 26, this.words[x + m] = L & 67108863;
      if (R === 0)
        return this._strip();
      for (r(R === -1), R = 0, x = 0; x < this.length; x++)
        L = -(this.words[x] | 0) + R, R = L >> 26, this.words[x] = L & 67108863;
      return this.negative = 1, this._strip();
    }, o.prototype._wordDiv = function(l, p) {
      var m = this.length - l.length, y = this.clone(), x = l, L = x.words[x.length - 1] | 0, R = this._countBits(L);
      m = 26 - R, m !== 0 && (x = x.ushln(m), y.iushln(m), L = x.words[x.length - 1] | 0);
      var b = y.length - x.length, h;
      if (p !== "mod") {
        h = new o(null), h.length = b + 1, h.words = new Array(h.length);
        for (var M = 0; M < h.length; M++)
          h.words[M] = 0;
      }
      var Q = y.clone()._ishlnsubmul(x, 1, b);
      Q.negative === 0 && (y = Q, h && (h.words[b] = 1));
      for (var Z = b - 1; Z >= 0; Z--) {
        var V = (y.words[x.length + Z] | 0) * 67108864 + (y.words[x.length + Z - 1] | 0);
        for (V = Math.min(V / L | 0, 67108863), y._ishlnsubmul(x, V, Z); y.negative !== 0; )
          V--, y.negative = 0, y._ishlnsubmul(x, 1, Z), y.isZero() || (y.negative ^= 1);
        h && (h.words[Z] = V);
      }
      return h && h._strip(), y._strip(), p !== "div" && m !== 0 && y.iushrn(m), {
        div: h || null,
        mod: y
      };
    }, o.prototype.divmod = function(l, p, m) {
      if (r(!l.isZero()), this.isZero())
        return {
          div: new o(0),
          mod: new o(0)
        };
      var y, x, L;
      return this.negative !== 0 && l.negative === 0 ? (L = this.neg().divmod(l, p), p !== "mod" && (y = L.div.neg()), p !== "div" && (x = L.mod.neg(), m && x.negative !== 0 && x.iadd(l)), {
        div: y,
        mod: x
      }) : this.negative === 0 && l.negative !== 0 ? (L = this.divmod(l.neg(), p), p !== "mod" && (y = L.div.neg()), {
        div: y,
        mod: L.mod
      }) : (this.negative & l.negative) !== 0 ? (L = this.neg().divmod(l.neg(), p), p !== "div" && (x = L.mod.neg(), m && x.negative !== 0 && x.isub(l)), {
        div: L.div,
        mod: x
      }) : l.length > this.length || this.cmp(l) < 0 ? {
        div: new o(0),
        mod: this
      } : l.length === 1 ? p === "div" ? {
        div: this.divn(l.words[0]),
        mod: null
      } : p === "mod" ? {
        div: null,
        mod: new o(this.modrn(l.words[0]))
      } : {
        div: this.divn(l.words[0]),
        mod: new o(this.modrn(l.words[0]))
      } : this._wordDiv(l, p);
    }, o.prototype.div = function(l) {
      return this.divmod(l, "div", !1).div;
    }, o.prototype.mod = function(l) {
      return this.divmod(l, "mod", !1).mod;
    }, o.prototype.umod = function(l) {
      return this.divmod(l, "mod", !0).mod;
    }, o.prototype.divRound = function(l) {
      var p = this.divmod(l);
      if (p.mod.isZero())
        return p.div;
      var m = p.div.negative !== 0 ? p.mod.isub(l) : p.mod, y = l.ushrn(1), x = l.andln(1), L = m.cmp(y);
      return L < 0 || x === 1 && L === 0 ? p.div : p.div.negative !== 0 ? p.div.isubn(1) : p.div.iaddn(1);
    }, o.prototype.modrn = function(l) {
      var p = l < 0;
      p && (l = -l), r(l <= 67108863);
      for (var m = (1 << 26) % l, y = 0, x = this.length - 1; x >= 0; x--)
        y = (m * y + (this.words[x] | 0)) % l;
      return p ? -y : y;
    }, o.prototype.modn = function(l) {
      return this.modrn(l);
    }, o.prototype.idivn = function(l) {
      var p = l < 0;
      p && (l = -l), r(l <= 67108863);
      for (var m = 0, y = this.length - 1; y >= 0; y--) {
        var x = (this.words[y] | 0) + m * 67108864;
        this.words[y] = x / l | 0, m = x % l;
      }
      return this._strip(), p ? this.ineg() : this;
    }, o.prototype.divn = function(l) {
      return this.clone().idivn(l);
    }, o.prototype.egcd = function(l) {
      r(l.negative === 0), r(!l.isZero());
      var p = this, m = l.clone();
      p.negative !== 0 ? p = p.umod(l) : p = p.clone();
      for (var y = new o(1), x = new o(0), L = new o(0), R = new o(1), b = 0; p.isEven() && m.isEven(); )
        p.iushrn(1), m.iushrn(1), ++b;
      for (var h = m.clone(), M = p.clone(); !p.isZero(); ) {
        for (var Q = 0, Z = 1; (p.words[0] & Z) === 0 && Q < 26; ++Q, Z <<= 1)
          ;
        if (Q > 0)
          for (p.iushrn(Q); Q-- > 0; )
            (y.isOdd() || x.isOdd()) && (y.iadd(h), x.isub(M)), y.iushrn(1), x.iushrn(1);
        for (var V = 0, oe = 1; (m.words[0] & oe) === 0 && V < 26; ++V, oe <<= 1)
          ;
        if (V > 0)
          for (m.iushrn(V); V-- > 0; )
            (L.isOdd() || R.isOdd()) && (L.iadd(h), R.isub(M)), L.iushrn(1), R.iushrn(1);
        p.cmp(m) >= 0 ? (p.isub(m), y.isub(L), x.isub(R)) : (m.isub(p), L.isub(y), R.isub(x));
      }
      return {
        a: L,
        b: R,
        gcd: m.iushln(b)
      };
    }, o.prototype._invmp = function(l) {
      r(l.negative === 0), r(!l.isZero());
      var p = this, m = l.clone();
      p.negative !== 0 ? p = p.umod(l) : p = p.clone();
      for (var y = new o(1), x = new o(0), L = m.clone(); p.cmpn(1) > 0 && m.cmpn(1) > 0; ) {
        for (var R = 0, b = 1; (p.words[0] & b) === 0 && R < 26; ++R, b <<= 1)
          ;
        if (R > 0)
          for (p.iushrn(R); R-- > 0; )
            y.isOdd() && y.iadd(L), y.iushrn(1);
        for (var h = 0, M = 1; (m.words[0] & M) === 0 && h < 26; ++h, M <<= 1)
          ;
        if (h > 0)
          for (m.iushrn(h); h-- > 0; )
            x.isOdd() && x.iadd(L), x.iushrn(1);
        p.cmp(m) >= 0 ? (p.isub(m), y.isub(x)) : (m.isub(p), x.isub(y));
      }
      var Q;
      return p.cmpn(1) === 0 ? Q = y : Q = x, Q.cmpn(0) < 0 && Q.iadd(l), Q;
    }, o.prototype.gcd = function(l) {
      if (this.isZero())
        return l.abs();
      if (l.isZero())
        return this.abs();
      var p = this.clone(), m = l.clone();
      p.negative = 0, m.negative = 0;
      for (var y = 0; p.isEven() && m.isEven(); y++)
        p.iushrn(1), m.iushrn(1);
      do {
        for (; p.isEven(); )
          p.iushrn(1);
        for (; m.isEven(); )
          m.iushrn(1);
        var x = p.cmp(m);
        if (x < 0) {
          var L = p;
          p = m, m = L;
        } else if (x === 0 || m.cmpn(1) === 0)
          break;
        p.isub(m);
      } while (!0);
      return m.iushln(y);
    }, o.prototype.invm = function(l) {
      return this.egcd(l).a.umod(l);
    }, o.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, o.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, o.prototype.andln = function(l) {
      return this.words[0] & l;
    }, o.prototype.bincn = function(l) {
      r(typeof l == "number");
      var p = l % 26, m = (l - p) / 26, y = 1 << p;
      if (this.length <= m)
        return this._expand(m + 1), this.words[m] |= y, this;
      for (var x = y, L = m; x !== 0 && L < this.length; L++) {
        var R = this.words[L] | 0;
        R += x, x = R >>> 26, R &= 67108863, this.words[L] = R;
      }
      return x !== 0 && (this.words[L] = x, this.length++), this;
    }, o.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, o.prototype.cmpn = function(l) {
      var p = l < 0;
      if (this.negative !== 0 && !p)
        return -1;
      if (this.negative === 0 && p)
        return 1;
      this._strip();
      var m;
      if (this.length > 1)
        m = 1;
      else {
        p && (l = -l), r(l <= 67108863, "Number is too big");
        var y = this.words[0] | 0;
        m = y === l ? 0 : y < l ? -1 : 1;
      }
      return this.negative !== 0 ? -m | 0 : m;
    }, o.prototype.cmp = function(l) {
      if (this.negative !== 0 && l.negative === 0)
        return -1;
      if (this.negative === 0 && l.negative !== 0)
        return 1;
      var p = this.ucmp(l);
      return this.negative !== 0 ? -p | 0 : p;
    }, o.prototype.ucmp = function(l) {
      if (this.length > l.length)
        return 1;
      if (this.length < l.length)
        return -1;
      for (var p = 0, m = this.length - 1; m >= 0; m--) {
        var y = this.words[m] | 0, x = l.words[m] | 0;
        if (y !== x) {
          y < x ? p = -1 : y > x && (p = 1);
          break;
        }
      }
      return p;
    }, o.prototype.gtn = function(l) {
      return this.cmpn(l) === 1;
    }, o.prototype.gt = function(l) {
      return this.cmp(l) === 1;
    }, o.prototype.gten = function(l) {
      return this.cmpn(l) >= 0;
    }, o.prototype.gte = function(l) {
      return this.cmp(l) >= 0;
    }, o.prototype.ltn = function(l) {
      return this.cmpn(l) === -1;
    }, o.prototype.lt = function(l) {
      return this.cmp(l) === -1;
    }, o.prototype.lten = function(l) {
      return this.cmpn(l) <= 0;
    }, o.prototype.lte = function(l) {
      return this.cmp(l) <= 0;
    }, o.prototype.eqn = function(l) {
      return this.cmpn(l) === 0;
    }, o.prototype.eq = function(l) {
      return this.cmp(l) === 0;
    }, o.red = function(l) {
      return new pe(l);
    }, o.prototype.toRed = function(l) {
      return r(!this.red, "Already a number in reduction context"), r(this.negative === 0, "red works only with positives"), l.convertTo(this)._forceRed(l);
    }, o.prototype.fromRed = function() {
      return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, o.prototype._forceRed = function(l) {
      return this.red = l, this;
    }, o.prototype.forceRed = function(l) {
      return r(!this.red, "Already a number in reduction context"), this._forceRed(l);
    }, o.prototype.redAdd = function(l) {
      return r(this.red, "redAdd works only with red numbers"), this.red.add(this, l);
    }, o.prototype.redIAdd = function(l) {
      return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, l);
    }, o.prototype.redSub = function(l) {
      return r(this.red, "redSub works only with red numbers"), this.red.sub(this, l);
    }, o.prototype.redISub = function(l) {
      return r(this.red, "redISub works only with red numbers"), this.red.isub(this, l);
    }, o.prototype.redShl = function(l) {
      return r(this.red, "redShl works only with red numbers"), this.red.shl(this, l);
    }, o.prototype.redMul = function(l) {
      return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, l), this.red.mul(this, l);
    }, o.prototype.redIMul = function(l) {
      return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, l), this.red.imul(this, l);
    }, o.prototype.redSqr = function() {
      return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, o.prototype.redISqr = function() {
      return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, o.prototype.redSqrt = function() {
      return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, o.prototype.redInvm = function() {
      return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, o.prototype.redNeg = function() {
      return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, o.prototype.redPow = function(l) {
      return r(this.red && !l.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, l);
    };
    var O = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };
    function W(I, l) {
      this.name = I, this.p = new o(l, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    W.prototype._tmp = function() {
      var l = new o(null);
      return l.words = new Array(Math.ceil(this.n / 13)), l;
    }, W.prototype.ireduce = function(l) {
      var p = l, m;
      do
        this.split(p, this.tmp), p = this.imulK(p), p = p.iadd(this.tmp), m = p.bitLength();
      while (m > this.n);
      var y = m < this.n ? -1 : p.ucmp(this.p);
      return y === 0 ? (p.words[0] = 0, p.length = 1) : y > 0 ? p.isub(this.p) : p.strip !== void 0 ? p.strip() : p._strip(), p;
    }, W.prototype.split = function(l, p) {
      l.iushrn(this.n, 0, p);
    }, W.prototype.imulK = function(l) {
      return l.imul(this.k);
    };
    function G() {
      W.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    i(G, W), G.prototype.split = function(l, p) {
      for (var m = 4194303, y = Math.min(l.length, 9), x = 0; x < y; x++)
        p.words[x] = l.words[x];
      if (p.length = y, l.length <= 9) {
        l.words[0] = 0, l.length = 1;
        return;
      }
      var L = l.words[9];
      for (p.words[p.length++] = L & m, x = 10; x < l.length; x++) {
        var R = l.words[x] | 0;
        l.words[x - 10] = (R & m) << 4 | L >>> 22, L = R;
      }
      L >>>= 22, l.words[x - 10] = L, L === 0 && l.length > 10 ? l.length -= 10 : l.length -= 9;
    }, G.prototype.imulK = function(l) {
      l.words[l.length] = 0, l.words[l.length + 1] = 0, l.length += 2;
      for (var p = 0, m = 0; m < l.length; m++) {
        var y = l.words[m] | 0;
        p += y * 977, l.words[m] = p & 67108863, p = y * 64 + (p / 67108864 | 0);
      }
      return l.words[l.length - 1] === 0 && (l.length--, l.words[l.length - 1] === 0 && l.length--), l;
    };
    function q() {
      W.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    i(q, W);
    function le() {
      W.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    i(le, W);
    function be() {
      W.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    i(be, W), be.prototype.imulK = function(l) {
      for (var p = 0, m = 0; m < l.length; m++) {
        var y = (l.words[m] | 0) * 19 + p, x = y & 67108863;
        y >>>= 26, l.words[m] = x, p = y;
      }
      return p !== 0 && (l.words[l.length++] = p), l;
    }, o._prime = function(l) {
      if (O[l])
        return O[l];
      var p;
      if (l === "k256")
        p = new G();
      else if (l === "p224")
        p = new q();
      else if (l === "p192")
        p = new le();
      else if (l === "p25519")
        p = new be();
      else
        throw new Error("Unknown prime " + l);
      return O[l] = p, p;
    };
    function pe(I) {
      if (typeof I == "string") {
        var l = o._prime(I);
        this.m = l.p, this.prime = l;
      } else
        r(I.gtn(1), "modulus must be greater than 1"), this.m = I, this.prime = null;
    }
    pe.prototype._verify1 = function(l) {
      r(l.negative === 0, "red works only with positives"), r(l.red, "red works only with red numbers");
    }, pe.prototype._verify2 = function(l, p) {
      r((l.negative | p.negative) === 0, "red works only with positives"), r(
        l.red && l.red === p.red,
        "red works only with red numbers"
      );
    }, pe.prototype.imod = function(l) {
      return this.prime ? this.prime.ireduce(l)._forceRed(this) : (v(l, l.umod(this.m)._forceRed(this)), l);
    }, pe.prototype.neg = function(l) {
      return l.isZero() ? l.clone() : this.m.sub(l)._forceRed(this);
    }, pe.prototype.add = function(l, p) {
      this._verify2(l, p);
      var m = l.add(p);
      return m.cmp(this.m) >= 0 && m.isub(this.m), m._forceRed(this);
    }, pe.prototype.iadd = function(l, p) {
      this._verify2(l, p);
      var m = l.iadd(p);
      return m.cmp(this.m) >= 0 && m.isub(this.m), m;
    }, pe.prototype.sub = function(l, p) {
      this._verify2(l, p);
      var m = l.sub(p);
      return m.cmpn(0) < 0 && m.iadd(this.m), m._forceRed(this);
    }, pe.prototype.isub = function(l, p) {
      this._verify2(l, p);
      var m = l.isub(p);
      return m.cmpn(0) < 0 && m.iadd(this.m), m;
    }, pe.prototype.shl = function(l, p) {
      return this._verify1(l), this.imod(l.ushln(p));
    }, pe.prototype.imul = function(l, p) {
      return this._verify2(l, p), this.imod(l.imul(p));
    }, pe.prototype.mul = function(l, p) {
      return this._verify2(l, p), this.imod(l.mul(p));
    }, pe.prototype.isqr = function(l) {
      return this.imul(l, l.clone());
    }, pe.prototype.sqr = function(l) {
      return this.mul(l, l);
    }, pe.prototype.sqrt = function(l) {
      if (l.isZero())
        return l.clone();
      var p = this.m.andln(3);
      if (r(p % 2 === 1), p === 3) {
        var m = this.m.add(new o(1)).iushrn(2);
        return this.pow(l, m);
      }
      for (var y = this.m.subn(1), x = 0; !y.isZero() && y.andln(1) === 0; )
        x++, y.iushrn(1);
      r(!y.isZero());
      var L = new o(1).toRed(this), R = L.redNeg(), b = this.m.subn(1).iushrn(1), h = this.m.bitLength();
      for (h = new o(2 * h * h).toRed(this); this.pow(h, b).cmp(R) !== 0; )
        h.redIAdd(R);
      for (var M = this.pow(h, y), Q = this.pow(l, y.addn(1).iushrn(1)), Z = this.pow(l, y), V = x; Z.cmp(L) !== 0; ) {
        for (var oe = Z, $ = 0; oe.cmp(L) !== 0; $++)
          oe = oe.redSqr();
        r($ < V);
        var se = this.pow(M, new o(1).iushln(V - $ - 1));
        Q = Q.redMul(se), M = se.redSqr(), Z = Z.redMul(M), V = $;
      }
      return Q;
    }, pe.prototype.invm = function(l) {
      var p = l._invmp(this.m);
      return p.negative !== 0 ? (p.negative = 0, this.imod(p).redNeg()) : this.imod(p);
    }, pe.prototype.pow = function(l, p) {
      if (p.isZero())
        return new o(1).toRed(this);
      if (p.cmpn(1) === 0)
        return l.clone();
      var m = 4, y = new Array(1 << m);
      y[0] = new o(1).toRed(this), y[1] = l;
      for (var x = 2; x < y.length; x++)
        y[x] = this.mul(y[x - 1], l);
      var L = y[0], R = 0, b = 0, h = p.bitLength() % 26;
      for (h === 0 && (h = 26), x = p.length - 1; x >= 0; x--) {
        for (var M = p.words[x], Q = h - 1; Q >= 0; Q--) {
          var Z = M >> Q & 1;
          if (L !== y[0] && (L = this.sqr(L)), Z === 0 && R === 0) {
            b = 0;
            continue;
          }
          R <<= 1, R |= Z, b++, !(b !== m && (x !== 0 || Q !== 0)) && (L = this.mul(L, y[R]), b = 0, R = 0);
        }
        h = 26;
      }
      return L;
    }, pe.prototype.convertTo = function(l) {
      var p = l.umod(this.m);
      return p === l ? p.clone() : p;
    }, pe.prototype.convertFrom = function(l) {
      var p = l.clone();
      return p.red = null, p;
    }, o.mont = function(l) {
      return new ve(l);
    };
    function ve(I) {
      pe.call(this, I), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    i(ve, pe), ve.prototype.convertTo = function(l) {
      return this.imod(l.ushln(this.shift));
    }, ve.prototype.convertFrom = function(l) {
      var p = this.imod(l.mul(this.rinv));
      return p.red = null, p;
    }, ve.prototype.imul = function(l, p) {
      if (l.isZero() || p.isZero())
        return l.words[0] = 0, l.length = 1, l;
      var m = l.imul(p), y = m.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), x = m.isub(y).iushrn(this.shift), L = x;
      return x.cmp(this.m) >= 0 ? L = x.isub(this.m) : x.cmpn(0) < 0 && (L = x.iadd(this.m)), L._forceRed(this);
    }, ve.prototype.mul = function(l, p) {
      if (l.isZero() || p.isZero())
        return new o(0)._forceRed(this);
      var m = l.mul(p), y = m.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), x = m.isub(y).iushrn(this.shift), L = x;
      return x.cmp(this.m) >= 0 ? L = x.isub(this.m) : x.cmpn(0) < 0 && (L = x.iadd(this.m)), L._forceRed(this);
    }, ve.prototype.invm = function(l) {
      var p = this.imod(l._invmp(this.m).mul(this.r2));
      return p._forceRed(this);
    };
  })(n, un);
})(Ys);
const Za = Ys.exports;
var Pr = { exports: {} }, Ks = {};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(n) {
  const e = Kr, t = ji, r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  n.Buffer = u, n.SlowBuffer = z, n.INSPECT_MAX_BYTES = 50;
  const i = 2147483647;
  n.kMaxLength = i, u.TYPED_ARRAY_SUPPORT = o(), !u.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function o() {
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
    if (f > i)
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
      return S(f);
    }
    return d(f, s, a);
  }
  u.poolSize = 8192;
  function d(f, s, a) {
    if (typeof f == "string")
      return T(f, s);
    if (ArrayBuffer.isView(f))
      return _(f);
    if (f == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof f
      );
    if (Qe(f, ArrayBuffer) || f && Qe(f.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Qe(f, SharedArrayBuffer) || f && Qe(f.buffer, SharedArrayBuffer)))
      return C(f, s, a);
    if (typeof f == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const g = f.valueOf && f.valueOf();
    if (g != null && g !== f)
      return u.from(g, s, a);
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
  function S(f) {
    return w(f), c(f < 0 ? 0 : P(f) | 0);
  }
  u.allocUnsafe = function(f) {
    return S(f);
  }, u.allocUnsafeSlow = function(f) {
    return S(f);
  };
  function T(f, s) {
    if ((typeof s != "string" || s === "") && (s = "utf8"), !u.isEncoding(s))
      throw new TypeError("Unknown encoding: " + s);
    const a = N(f, s) | 0;
    let g = c(a);
    const A = g.write(f, s);
    return A !== a && (g = g.slice(0, A)), g;
  }
  function E(f) {
    const s = f.length < 0 ? 0 : P(f.length) | 0, a = c(s);
    for (let g = 0; g < s; g += 1)
      a[g] = f[g] & 255;
    return a;
  }
  function _(f) {
    if (Qe(f, Uint8Array)) {
      const s = new Uint8Array(f);
      return C(s.buffer, s.byteOffset, s.byteLength);
    }
    return E(f);
  }
  function C(f, s, a) {
    if (s < 0 || f.byteLength < s)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (f.byteLength < s + (a || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let g;
    return s === void 0 && a === void 0 ? g = new Uint8Array(f) : a === void 0 ? g = new Uint8Array(f, s) : g = new Uint8Array(f, s, a), Object.setPrototypeOf(g, u.prototype), g;
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
    if (f >= i)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return f | 0;
  }
  function z(f) {
    return +f != f && (f = 0), u.alloc(+f);
  }
  u.isBuffer = function(s) {
    return s != null && s._isBuffer === !0 && s !== u.prototype;
  }, u.compare = function(s, a) {
    if (Qe(s, Uint8Array) && (s = u.from(s, s.offset, s.byteLength)), Qe(a, Uint8Array) && (a = u.from(a, a.offset, a.byteLength)), !u.isBuffer(s) || !u.isBuffer(a))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (s === a)
      return 0;
    let g = s.length, A = a.length;
    for (let B = 0, k = Math.min(g, A); B < k; ++B)
      if (s[B] !== a[B]) {
        g = s[B], A = a[B];
        break;
      }
    return g < A ? -1 : A < g ? 1 : 0;
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
    let g;
    if (a === void 0)
      for (a = 0, g = 0; g < s.length; ++g)
        a += s[g].length;
    const A = u.allocUnsafe(a);
    let B = 0;
    for (g = 0; g < s.length; ++g) {
      let k = s[g];
      if (Qe(k, Uint8Array))
        B + k.length > A.length ? (u.isBuffer(k) || (k = u.from(k)), k.copy(A, B)) : Uint8Array.prototype.set.call(
          A,
          k,
          B
        );
      else if (u.isBuffer(k))
        k.copy(A, B);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      B += k.length;
    }
    return A;
  };
  function N(f, s) {
    if (u.isBuffer(f))
      return f.length;
    if (ArrayBuffer.isView(f) || Qe(f, ArrayBuffer))
      return f.byteLength;
    if (typeof f != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof f
      );
    const a = f.length, g = arguments.length > 2 && arguments[2] === !0;
    if (!g && a === 0)
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
          return Ge(f).length;
        default:
          if (A)
            return g ? -1 : ze(f).length;
          s = ("" + s).toLowerCase(), A = !0;
      }
  }
  u.byteLength = N;
  function F(f, s, a) {
    let g = !1;
    if ((s === void 0 || s < 0) && (s = 0), s > this.length || ((a === void 0 || a > this.length) && (a = this.length), a <= 0) || (a >>>= 0, s >>>= 0, a <= s))
      return "";
    for (f || (f = "utf8"); ; )
      switch (f) {
        case "hex":
          return L(this, s, a);
        case "utf8":
        case "utf-8":
          return l(this, s, a);
        case "ascii":
          return y(this, s, a);
        case "latin1":
        case "binary":
          return x(this, s, a);
        case "base64":
          return I(this, s, a);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return R(this, s, a);
        default:
          if (g)
            throw new TypeError("Unknown encoding: " + f);
          f = (f + "").toLowerCase(), g = !0;
      }
  }
  u.prototype._isBuffer = !0;
  function O(f, s, a) {
    const g = f[s];
    f[s] = f[a], f[a] = g;
  }
  u.prototype.swap16 = function() {
    const s = this.length;
    if (s % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let a = 0; a < s; a += 2)
      O(this, a, a + 1);
    return this;
  }, u.prototype.swap32 = function() {
    const s = this.length;
    if (s % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let a = 0; a < s; a += 4)
      O(this, a, a + 3), O(this, a + 1, a + 2);
    return this;
  }, u.prototype.swap64 = function() {
    const s = this.length;
    if (s % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let a = 0; a < s; a += 8)
      O(this, a, a + 7), O(this, a + 1, a + 6), O(this, a + 2, a + 5), O(this, a + 3, a + 4);
    return this;
  }, u.prototype.toString = function() {
    const s = this.length;
    return s === 0 ? "" : arguments.length === 0 ? l(this, 0, s) : F.apply(this, arguments);
  }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(s) {
    if (!u.isBuffer(s))
      throw new TypeError("Argument must be a Buffer");
    return this === s ? !0 : u.compare(this, s) === 0;
  }, u.prototype.inspect = function() {
    let s = "";
    const a = n.INSPECT_MAX_BYTES;
    return s = this.toString("hex", 0, a).replace(/(.{2})/g, "$1 ").trim(), this.length > a && (s += " ... "), "<Buffer " + s + ">";
  }, r && (u.prototype[r] = u.prototype.inspect), u.prototype.compare = function(s, a, g, A, B) {
    if (Qe(s, Uint8Array) && (s = u.from(s, s.offset, s.byteLength)), !u.isBuffer(s))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof s
      );
    if (a === void 0 && (a = 0), g === void 0 && (g = s ? s.length : 0), A === void 0 && (A = 0), B === void 0 && (B = this.length), a < 0 || g > s.length || A < 0 || B > this.length)
      throw new RangeError("out of range index");
    if (A >= B && a >= g)
      return 0;
    if (A >= B)
      return -1;
    if (a >= g)
      return 1;
    if (a >>>= 0, g >>>= 0, A >>>= 0, B >>>= 0, this === s)
      return 0;
    let k = B - A, X = g - a;
    const ie = Math.min(k, X), ne = this.slice(A, B), ye = s.slice(a, g);
    for (let ee = 0; ee < ie; ++ee)
      if (ne[ee] !== ye[ee]) {
        k = ne[ee], X = ye[ee];
        break;
      }
    return k < X ? -1 : X < k ? 1 : 0;
  };
  function W(f, s, a, g, A) {
    if (f.length === 0)
      return -1;
    if (typeof a == "string" ? (g = a, a = 0) : a > 2147483647 ? a = 2147483647 : a < -2147483648 && (a = -2147483648), a = +a, He(a) && (a = A ? 0 : f.length - 1), a < 0 && (a = f.length + a), a >= f.length) {
      if (A)
        return -1;
      a = f.length - 1;
    } else if (a < 0)
      if (A)
        a = 0;
      else
        return -1;
    if (typeof s == "string" && (s = u.from(s, g)), u.isBuffer(s))
      return s.length === 0 ? -1 : G(f, s, a, g, A);
    if (typeof s == "number")
      return s = s & 255, typeof Uint8Array.prototype.indexOf == "function" ? A ? Uint8Array.prototype.indexOf.call(f, s, a) : Uint8Array.prototype.lastIndexOf.call(f, s, a) : G(f, [s], a, g, A);
    throw new TypeError("val must be string, number or Buffer");
  }
  function G(f, s, a, g, A) {
    let B = 1, k = f.length, X = s.length;
    if (g !== void 0 && (g = String(g).toLowerCase(), g === "ucs2" || g === "ucs-2" || g === "utf16le" || g === "utf-16le")) {
      if (f.length < 2 || s.length < 2)
        return -1;
      B = 2, k /= 2, X /= 2, a /= 2;
    }
    function ie(ye, ee) {
      return B === 1 ? ye[ee] : ye.readUInt16BE(ee * B);
    }
    let ne;
    if (A) {
      let ye = -1;
      for (ne = a; ne < k; ne++)
        if (ie(f, ne) === ie(s, ye === -1 ? 0 : ne - ye)) {
          if (ye === -1 && (ye = ne), ne - ye + 1 === X)
            return ye * B;
        } else
          ye !== -1 && (ne -= ne - ye), ye = -1;
    } else
      for (a + X > k && (a = k - X), ne = a; ne >= 0; ne--) {
        let ye = !0;
        for (let ee = 0; ee < X; ee++)
          if (ie(f, ne + ee) !== ie(s, ee)) {
            ye = !1;
            break;
          }
        if (ye)
          return ne;
      }
    return -1;
  }
  u.prototype.includes = function(s, a, g) {
    return this.indexOf(s, a, g) !== -1;
  }, u.prototype.indexOf = function(s, a, g) {
    return W(this, s, a, g, !0);
  }, u.prototype.lastIndexOf = function(s, a, g) {
    return W(this, s, a, g, !1);
  };
  function q(f, s, a, g) {
    a = Number(a) || 0;
    const A = f.length - a;
    g ? (g = Number(g), g > A && (g = A)) : g = A;
    const B = s.length;
    g > B / 2 && (g = B / 2);
    let k;
    for (k = 0; k < g; ++k) {
      const X = parseInt(s.substr(k * 2, 2), 16);
      if (He(X))
        return k;
      f[a + k] = X;
    }
    return k;
  }
  function le(f, s, a, g) {
    return Oe(ze(s, f.length - a), f, a, g);
  }
  function be(f, s, a, g) {
    return Oe(qe(s), f, a, g);
  }
  function pe(f, s, a, g) {
    return Oe(Ge(s), f, a, g);
  }
  function ve(f, s, a, g) {
    return Oe(sr(s, f.length - a), f, a, g);
  }
  u.prototype.write = function(s, a, g, A) {
    if (a === void 0)
      A = "utf8", g = this.length, a = 0;
    else if (g === void 0 && typeof a == "string")
      A = a, g = this.length, a = 0;
    else if (isFinite(a))
      a = a >>> 0, isFinite(g) ? (g = g >>> 0, A === void 0 && (A = "utf8")) : (A = g, g = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const B = this.length - a;
    if ((g === void 0 || g > B) && (g = B), s.length > 0 && (g < 0 || a < 0) || a > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    A || (A = "utf8");
    let k = !1;
    for (; ; )
      switch (A) {
        case "hex":
          return q(this, s, a, g);
        case "utf8":
        case "utf-8":
          return le(this, s, a, g);
        case "ascii":
        case "latin1":
        case "binary":
          return be(this, s, a, g);
        case "base64":
          return pe(this, s, a, g);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ve(this, s, a, g);
        default:
          if (k)
            throw new TypeError("Unknown encoding: " + A);
          A = ("" + A).toLowerCase(), k = !0;
      }
  }, u.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function I(f, s, a) {
    return s === 0 && a === f.length ? e.fromByteArray(f) : e.fromByteArray(f.slice(s, a));
  }
  function l(f, s, a) {
    a = Math.min(f.length, a);
    const g = [];
    let A = s;
    for (; A < a; ) {
      const B = f[A];
      let k = null, X = B > 239 ? 4 : B > 223 ? 3 : B > 191 ? 2 : 1;
      if (A + X <= a) {
        let ie, ne, ye, ee;
        switch (X) {
          case 1:
            B < 128 && (k = B);
            break;
          case 2:
            ie = f[A + 1], (ie & 192) === 128 && (ee = (B & 31) << 6 | ie & 63, ee > 127 && (k = ee));
            break;
          case 3:
            ie = f[A + 1], ne = f[A + 2], (ie & 192) === 128 && (ne & 192) === 128 && (ee = (B & 15) << 12 | (ie & 63) << 6 | ne & 63, ee > 2047 && (ee < 55296 || ee > 57343) && (k = ee));
            break;
          case 4:
            ie = f[A + 1], ne = f[A + 2], ye = f[A + 3], (ie & 192) === 128 && (ne & 192) === 128 && (ye & 192) === 128 && (ee = (B & 15) << 18 | (ie & 63) << 12 | (ne & 63) << 6 | ye & 63, ee > 65535 && ee < 1114112 && (k = ee));
        }
      }
      k === null ? (k = 65533, X = 1) : k > 65535 && (k -= 65536, g.push(k >>> 10 & 1023 | 55296), k = 56320 | k & 1023), g.push(k), A += X;
    }
    return m(g);
  }
  const p = 4096;
  function m(f) {
    const s = f.length;
    if (s <= p)
      return String.fromCharCode.apply(String, f);
    let a = "", g = 0;
    for (; g < s; )
      a += String.fromCharCode.apply(
        String,
        f.slice(g, g += p)
      );
    return a;
  }
  function y(f, s, a) {
    let g = "";
    a = Math.min(f.length, a);
    for (let A = s; A < a; ++A)
      g += String.fromCharCode(f[A] & 127);
    return g;
  }
  function x(f, s, a) {
    let g = "";
    a = Math.min(f.length, a);
    for (let A = s; A < a; ++A)
      g += String.fromCharCode(f[A]);
    return g;
  }
  function L(f, s, a) {
    const g = f.length;
    (!s || s < 0) && (s = 0), (!a || a < 0 || a > g) && (a = g);
    let A = "";
    for (let B = s; B < a; ++B)
      A += Ye[f[B]];
    return A;
  }
  function R(f, s, a) {
    const g = f.slice(s, a);
    let A = "";
    for (let B = 0; B < g.length - 1; B += 2)
      A += String.fromCharCode(g[B] + g[B + 1] * 256);
    return A;
  }
  u.prototype.slice = function(s, a) {
    const g = this.length;
    s = ~~s, a = a === void 0 ? g : ~~a, s < 0 ? (s += g, s < 0 && (s = 0)) : s > g && (s = g), a < 0 ? (a += g, a < 0 && (a = 0)) : a > g && (a = g), a < s && (a = s);
    const A = this.subarray(s, a);
    return Object.setPrototypeOf(A, u.prototype), A;
  };
  function b(f, s, a) {
    if (f % 1 !== 0 || f < 0)
      throw new RangeError("offset is not uint");
    if (f + s > a)
      throw new RangeError("Trying to access beyond buffer length");
  }
  u.prototype.readUintLE = u.prototype.readUIntLE = function(s, a, g) {
    s = s >>> 0, a = a >>> 0, g || b(s, a, this.length);
    let A = this[s], B = 1, k = 0;
    for (; ++k < a && (B *= 256); )
      A += this[s + k] * B;
    return A;
  }, u.prototype.readUintBE = u.prototype.readUIntBE = function(s, a, g) {
    s = s >>> 0, a = a >>> 0, g || b(s, a, this.length);
    let A = this[s + --a], B = 1;
    for (; a > 0 && (B *= 256); )
      A += this[s + --a] * B;
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
    const a = this[s], g = this[s + 7];
    (a === void 0 || g === void 0) && Ie(s, this.length - 8);
    const A = a + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + this[++s] * 2 ** 24, B = this[++s] + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + g * 2 ** 24;
    return BigInt(A) + (BigInt(B) << BigInt(32));
  }), u.prototype.readBigUInt64BE = rt(function(s) {
    s = s >>> 0, We(s, "offset");
    const a = this[s], g = this[s + 7];
    (a === void 0 || g === void 0) && Ie(s, this.length - 8);
    const A = a * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + this[++s], B = this[++s] * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + g;
    return (BigInt(A) << BigInt(32)) + BigInt(B);
  }), u.prototype.readIntLE = function(s, a, g) {
    s = s >>> 0, a = a >>> 0, g || b(s, a, this.length);
    let A = this[s], B = 1, k = 0;
    for (; ++k < a && (B *= 256); )
      A += this[s + k] * B;
    return B *= 128, A >= B && (A -= Math.pow(2, 8 * a)), A;
  }, u.prototype.readIntBE = function(s, a, g) {
    s = s >>> 0, a = a >>> 0, g || b(s, a, this.length);
    let A = a, B = 1, k = this[s + --A];
    for (; A > 0 && (B *= 256); )
      k += this[s + --A] * B;
    return B *= 128, k >= B && (k -= Math.pow(2, 8 * a)), k;
  }, u.prototype.readInt8 = function(s, a) {
    return s = s >>> 0, a || b(s, 1, this.length), this[s] & 128 ? (255 - this[s] + 1) * -1 : this[s];
  }, u.prototype.readInt16LE = function(s, a) {
    s = s >>> 0, a || b(s, 2, this.length);
    const g = this[s] | this[s + 1] << 8;
    return g & 32768 ? g | 4294901760 : g;
  }, u.prototype.readInt16BE = function(s, a) {
    s = s >>> 0, a || b(s, 2, this.length);
    const g = this[s + 1] | this[s] << 8;
    return g & 32768 ? g | 4294901760 : g;
  }, u.prototype.readInt32LE = function(s, a) {
    return s = s >>> 0, a || b(s, 4, this.length), this[s] | this[s + 1] << 8 | this[s + 2] << 16 | this[s + 3] << 24;
  }, u.prototype.readInt32BE = function(s, a) {
    return s = s >>> 0, a || b(s, 4, this.length), this[s] << 24 | this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3];
  }, u.prototype.readBigInt64LE = rt(function(s) {
    s = s >>> 0, We(s, "offset");
    const a = this[s], g = this[s + 7];
    (a === void 0 || g === void 0) && Ie(s, this.length - 8);
    const A = this[s + 4] + this[s + 5] * 2 ** 8 + this[s + 6] * 2 ** 16 + (g << 24);
    return (BigInt(A) << BigInt(32)) + BigInt(a + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + this[++s] * 2 ** 24);
  }), u.prototype.readBigInt64BE = rt(function(s) {
    s = s >>> 0, We(s, "offset");
    const a = this[s], g = this[s + 7];
    (a === void 0 || g === void 0) && Ie(s, this.length - 8);
    const A = (a << 24) + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + this[++s];
    return (BigInt(A) << BigInt(32)) + BigInt(this[++s] * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + g);
  }), u.prototype.readFloatLE = function(s, a) {
    return s = s >>> 0, a || b(s, 4, this.length), t.read(this, s, !0, 23, 4);
  }, u.prototype.readFloatBE = function(s, a) {
    return s = s >>> 0, a || b(s, 4, this.length), t.read(this, s, !1, 23, 4);
  }, u.prototype.readDoubleLE = function(s, a) {
    return s = s >>> 0, a || b(s, 8, this.length), t.read(this, s, !0, 52, 8);
  }, u.prototype.readDoubleBE = function(s, a) {
    return s = s >>> 0, a || b(s, 8, this.length), t.read(this, s, !1, 52, 8);
  };
  function h(f, s, a, g, A, B) {
    if (!u.isBuffer(f))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (s > A || s < B)
      throw new RangeError('"value" argument is out of bounds');
    if (a + g > f.length)
      throw new RangeError("Index out of range");
  }
  u.prototype.writeUintLE = u.prototype.writeUIntLE = function(s, a, g, A) {
    if (s = +s, a = a >>> 0, g = g >>> 0, !A) {
      const X = Math.pow(2, 8 * g) - 1;
      h(this, s, a, g, X, 0);
    }
    let B = 1, k = 0;
    for (this[a] = s & 255; ++k < g && (B *= 256); )
      this[a + k] = s / B & 255;
    return a + g;
  }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(s, a, g, A) {
    if (s = +s, a = a >>> 0, g = g >>> 0, !A) {
      const X = Math.pow(2, 8 * g) - 1;
      h(this, s, a, g, X, 0);
    }
    let B = g - 1, k = 1;
    for (this[a + B] = s & 255; --B >= 0 && (k *= 256); )
      this[a + B] = s / k & 255;
    return a + g;
  }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(s, a, g) {
    return s = +s, a = a >>> 0, g || h(this, s, a, 1, 255, 0), this[a] = s & 255, a + 1;
  }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || h(this, s, a, 2, 65535, 0), this[a] = s & 255, this[a + 1] = s >>> 8, a + 2;
  }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || h(this, s, a, 2, 65535, 0), this[a] = s >>> 8, this[a + 1] = s & 255, a + 2;
  }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || h(this, s, a, 4, 4294967295, 0), this[a + 3] = s >>> 24, this[a + 2] = s >>> 16, this[a + 1] = s >>> 8, this[a] = s & 255, a + 4;
  }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || h(this, s, a, 4, 4294967295, 0), this[a] = s >>> 24, this[a + 1] = s >>> 16, this[a + 2] = s >>> 8, this[a + 3] = s & 255, a + 4;
  };
  function M(f, s, a, g, A) {
    K(s, g, A, f, a, 7);
    let B = Number(s & BigInt(4294967295));
    f[a++] = B, B = B >> 8, f[a++] = B, B = B >> 8, f[a++] = B, B = B >> 8, f[a++] = B;
    let k = Number(s >> BigInt(32) & BigInt(4294967295));
    return f[a++] = k, k = k >> 8, f[a++] = k, k = k >> 8, f[a++] = k, k = k >> 8, f[a++] = k, a;
  }
  function Q(f, s, a, g, A) {
    K(s, g, A, f, a, 7);
    let B = Number(s & BigInt(4294967295));
    f[a + 7] = B, B = B >> 8, f[a + 6] = B, B = B >> 8, f[a + 5] = B, B = B >> 8, f[a + 4] = B;
    let k = Number(s >> BigInt(32) & BigInt(4294967295));
    return f[a + 3] = k, k = k >> 8, f[a + 2] = k, k = k >> 8, f[a + 1] = k, k = k >> 8, f[a] = k, a + 8;
  }
  u.prototype.writeBigUInt64LE = rt(function(s, a = 0) {
    return M(this, s, a, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeBigUInt64BE = rt(function(s, a = 0) {
    return Q(this, s, a, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeIntLE = function(s, a, g, A) {
    if (s = +s, a = a >>> 0, !A) {
      const ie = Math.pow(2, 8 * g - 1);
      h(this, s, a, g, ie - 1, -ie);
    }
    let B = 0, k = 1, X = 0;
    for (this[a] = s & 255; ++B < g && (k *= 256); )
      s < 0 && X === 0 && this[a + B - 1] !== 0 && (X = 1), this[a + B] = (s / k >> 0) - X & 255;
    return a + g;
  }, u.prototype.writeIntBE = function(s, a, g, A) {
    if (s = +s, a = a >>> 0, !A) {
      const ie = Math.pow(2, 8 * g - 1);
      h(this, s, a, g, ie - 1, -ie);
    }
    let B = g - 1, k = 1, X = 0;
    for (this[a + B] = s & 255; --B >= 0 && (k *= 256); )
      s < 0 && X === 0 && this[a + B + 1] !== 0 && (X = 1), this[a + B] = (s / k >> 0) - X & 255;
    return a + g;
  }, u.prototype.writeInt8 = function(s, a, g) {
    return s = +s, a = a >>> 0, g || h(this, s, a, 1, 127, -128), s < 0 && (s = 255 + s + 1), this[a] = s & 255, a + 1;
  }, u.prototype.writeInt16LE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || h(this, s, a, 2, 32767, -32768), this[a] = s & 255, this[a + 1] = s >>> 8, a + 2;
  }, u.prototype.writeInt16BE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || h(this, s, a, 2, 32767, -32768), this[a] = s >>> 8, this[a + 1] = s & 255, a + 2;
  }, u.prototype.writeInt32LE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || h(this, s, a, 4, 2147483647, -2147483648), this[a] = s & 255, this[a + 1] = s >>> 8, this[a + 2] = s >>> 16, this[a + 3] = s >>> 24, a + 4;
  }, u.prototype.writeInt32BE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || h(this, s, a, 4, 2147483647, -2147483648), s < 0 && (s = 4294967295 + s + 1), this[a] = s >>> 24, this[a + 1] = s >>> 16, this[a + 2] = s >>> 8, this[a + 3] = s & 255, a + 4;
  }, u.prototype.writeBigInt64LE = rt(function(s, a = 0) {
    return M(this, s, a, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), u.prototype.writeBigInt64BE = rt(function(s, a = 0) {
    return Q(this, s, a, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function Z(f, s, a, g, A, B) {
    if (a + g > f.length)
      throw new RangeError("Index out of range");
    if (a < 0)
      throw new RangeError("Index out of range");
  }
  function V(f, s, a, g, A) {
    return s = +s, a = a >>> 0, A || Z(f, s, a, 4), t.write(f, s, a, g, 23, 4), a + 4;
  }
  u.prototype.writeFloatLE = function(s, a, g) {
    return V(this, s, a, !0, g);
  }, u.prototype.writeFloatBE = function(s, a, g) {
    return V(this, s, a, !1, g);
  };
  function oe(f, s, a, g, A) {
    return s = +s, a = a >>> 0, A || Z(f, s, a, 8), t.write(f, s, a, g, 52, 8), a + 8;
  }
  u.prototype.writeDoubleLE = function(s, a, g) {
    return oe(this, s, a, !0, g);
  }, u.prototype.writeDoubleBE = function(s, a, g) {
    return oe(this, s, a, !1, g);
  }, u.prototype.copy = function(s, a, g, A) {
    if (!u.isBuffer(s))
      throw new TypeError("argument should be a Buffer");
    if (g || (g = 0), !A && A !== 0 && (A = this.length), a >= s.length && (a = s.length), a || (a = 0), A > 0 && A < g && (A = g), A === g || s.length === 0 || this.length === 0)
      return 0;
    if (a < 0)
      throw new RangeError("targetStart out of bounds");
    if (g < 0 || g >= this.length)
      throw new RangeError("Index out of range");
    if (A < 0)
      throw new RangeError("sourceEnd out of bounds");
    A > this.length && (A = this.length), s.length - a < A - g && (A = s.length - a + g);
    const B = A - g;
    return this === s && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(a, g, A) : Uint8Array.prototype.set.call(
      s,
      this.subarray(g, A),
      a
    ), B;
  }, u.prototype.fill = function(s, a, g, A) {
    if (typeof s == "string") {
      if (typeof a == "string" ? (A = a, a = 0, g = this.length) : typeof g == "string" && (A = g, g = this.length), A !== void 0 && typeof A != "string")
        throw new TypeError("encoding must be a string");
      if (typeof A == "string" && !u.isEncoding(A))
        throw new TypeError("Unknown encoding: " + A);
      if (s.length === 1) {
        const k = s.charCodeAt(0);
        (A === "utf8" && k < 128 || A === "latin1") && (s = k);
      }
    } else
      typeof s == "number" ? s = s & 255 : typeof s == "boolean" && (s = Number(s));
    if (a < 0 || this.length < a || this.length < g)
      throw new RangeError("Out of range index");
    if (g <= a)
      return this;
    a = a >>> 0, g = g === void 0 ? this.length : g >>> 0, s || (s = 0);
    let B;
    if (typeof s == "number")
      for (B = a; B < g; ++B)
        this[B] = s;
    else {
      const k = u.isBuffer(s) ? s : u.from(s, A), X = k.length;
      if (X === 0)
        throw new TypeError('The value "' + s + '" is invalid for argument "value"');
      for (B = 0; B < g - a; ++B)
        this[B + a] = k[B % X];
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
      let g = `The value of "${f}" is out of range.`, A = a;
      return Number.isInteger(a) && Math.abs(a) > 2 ** 32 ? A = Ae(String(a)) : typeof a == "bigint" && (A = String(a), (a > BigInt(2) ** BigInt(32) || a < -(BigInt(2) ** BigInt(32))) && (A = Ae(A)), A += "n"), g += ` It must be ${s}. Received ${A}`, g;
    },
    RangeError
  );
  function Ae(f) {
    let s = "", a = f.length;
    const g = f[0] === "-" ? 1 : 0;
    for (; a >= g + 4; a -= 3)
      s = `_${f.slice(a - 3, a)}${s}`;
    return `${f.slice(0, a)}${s}`;
  }
  function xe(f, s, a) {
    We(s, "offset"), (f[s] === void 0 || f[s + a] === void 0) && Ie(s, f.length - (a + 1));
  }
  function K(f, s, a, g, A, B) {
    if (f > a || f < s) {
      const k = typeof s == "bigint" ? "n" : "";
      let X;
      throw B > 3 ? s === 0 || s === BigInt(0) ? X = `>= 0${k} and < 2${k} ** ${(B + 1) * 8}${k}` : X = `>= -(2${k} ** ${(B + 1) * 8 - 1}${k}) and < 2 ** ${(B + 1) * 8 - 1}${k}` : X = `>= ${s}${k} and <= ${a}${k}`, new $.ERR_OUT_OF_RANGE("value", X, f);
    }
    xe(g, A, B);
  }
  function We(f, s) {
    if (typeof f != "number")
      throw new $.ERR_INVALID_ARG_TYPE(s, "number", f);
  }
  function Ie(f, s, a) {
    throw Math.floor(f) !== f ? (We(f, a), new $.ERR_OUT_OF_RANGE(a || "offset", "an integer", f)) : s < 0 ? new $.ERR_BUFFER_OUT_OF_BOUNDS() : new $.ERR_OUT_OF_RANGE(
      a || "offset",
      `>= ${a ? 1 : 0} and <= ${s}`,
      f
    );
  }
  const je = /[^+/0-9A-Za-z-_]/g;
  function or(f) {
    if (f = f.split("=")[0], f = f.trim().replace(je, ""), f.length < 2)
      return "";
    for (; f.length % 4 !== 0; )
      f = f + "=";
    return f;
  }
  function ze(f, s) {
    s = s || 1 / 0;
    let a;
    const g = f.length;
    let A = null;
    const B = [];
    for (let k = 0; k < g; ++k) {
      if (a = f.charCodeAt(k), a > 55295 && a < 57344) {
        if (!A) {
          if (a > 56319) {
            (s -= 3) > -1 && B.push(239, 191, 189);
            continue;
          } else if (k + 1 === g) {
            (s -= 3) > -1 && B.push(239, 191, 189);
            continue;
          }
          A = a;
          continue;
        }
        if (a < 56320) {
          (s -= 3) > -1 && B.push(239, 191, 189), A = a;
          continue;
        }
        a = (A - 55296 << 10 | a - 56320) + 65536;
      } else
        A && (s -= 3) > -1 && B.push(239, 191, 189);
      if (A = null, a < 128) {
        if ((s -= 1) < 0)
          break;
        B.push(a);
      } else if (a < 2048) {
        if ((s -= 2) < 0)
          break;
        B.push(
          a >> 6 | 192,
          a & 63 | 128
        );
      } else if (a < 65536) {
        if ((s -= 3) < 0)
          break;
        B.push(
          a >> 12 | 224,
          a >> 6 & 63 | 128,
          a & 63 | 128
        );
      } else if (a < 1114112) {
        if ((s -= 4) < 0)
          break;
        B.push(
          a >> 18 | 240,
          a >> 12 & 63 | 128,
          a >> 6 & 63 | 128,
          a & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return B;
  }
  function qe(f) {
    const s = [];
    for (let a = 0; a < f.length; ++a)
      s.push(f.charCodeAt(a) & 255);
    return s;
  }
  function sr(f, s) {
    let a, g, A;
    const B = [];
    for (let k = 0; k < f.length && !((s -= 2) < 0); ++k)
      a = f.charCodeAt(k), g = a >> 8, A = a % 256, B.push(A), B.push(g);
    return B;
  }
  function Ge(f) {
    return e.toByteArray(or(f));
  }
  function Oe(f, s, a, g) {
    let A;
    for (A = 0; A < g && !(A + a >= s.length || A >= f.length); ++A)
      s[A + a] = f[A];
    return A;
  }
  function Qe(f, s) {
    return f instanceof s || f != null && f.constructor != null && f.constructor.name != null && f.constructor.name === s.name;
  }
  function He(f) {
    return f !== f;
  }
  const Ye = function() {
    const f = "0123456789abcdef", s = new Array(256);
    for (let a = 0; a < 16; ++a) {
      const g = a * 16;
      for (let A = 0; A < 16; ++A)
        s[g + A] = f[a] + f[A];
    }
    return s;
  }();
  function rt(f) {
    return typeof BigInt > "u" ? Ke : f;
  }
  function Ke() {
    throw new Error("BigInt not supported");
  }
})(Ks);
(function(n, e) {
  var t = Ks, r = t.Buffer;
  function i(c, u) {
    for (var d in c)
      u[d] = c[d];
  }
  r.from && r.alloc && r.allocUnsafe && r.allocUnsafeSlow ? n.exports = t : (i(t, e), e.Buffer = o);
  function o(c, u, d) {
    return r(c, u, d);
  }
  i(r, o), o.from = function(c, u, d) {
    if (typeof c == "number")
      throw new TypeError("Argument must not be a number");
    return r(c, u, d);
  }, o.alloc = function(c, u, d) {
    if (typeof c != "number")
      throw new TypeError("Argument must be a number");
    var w = r(c);
    return u !== void 0 ? typeof d == "string" ? w.fill(u, d) : w.fill(u) : w.fill(0), w;
  }, o.allocUnsafe = function(c) {
    if (typeof c != "number")
      throw new TypeError("Argument must be a number");
    return r(c);
  }, o.allocUnsafeSlow = function(c) {
    if (typeof c != "number")
      throw new TypeError("Argument must be a number");
    return t.SlowBuffer(c);
  };
})(Pr, Pr.exports);
var ai = Pr.exports.Buffer;
function $h(n) {
  if (n.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var e = new Uint8Array(256), t = 0; t < e.length; t++)
    e[t] = 255;
  for (var r = 0; r < n.length; r++) {
    var i = n.charAt(r), o = i.charCodeAt(0);
    if (e[o] !== 255)
      throw new TypeError(i + " is ambiguous");
    e[o] = r;
  }
  var c = n.length, u = n.charAt(0), d = Math.log(c) / Math.log(256), w = Math.log(256) / Math.log(c);
  function v(E) {
    if ((Array.isArray(E) || E instanceof Uint8Array) && (E = ai.from(E)), !ai.isBuffer(E))
      throw new TypeError("Expected Buffer");
    if (E.length === 0)
      return "";
    for (var _ = 0, C = 0, U = 0, P = E.length; U !== P && E[U] === 0; )
      U++, _++;
    for (var z = (P - U) * w + 1 >>> 0, N = new Uint8Array(z); U !== P; ) {
      for (var F = E[U], O = 0, W = z - 1; (F !== 0 || O < C) && W !== -1; W--, O++)
        F += 256 * N[W] >>> 0, N[W] = F % c >>> 0, F = F / c >>> 0;
      if (F !== 0)
        throw new Error("Non-zero carry");
      C = O, U++;
    }
    for (var G = z - C; G !== z && N[G] === 0; )
      G++;
    for (var q = u.repeat(_); G < z; ++G)
      q += n.charAt(N[G]);
    return q;
  }
  function S(E) {
    if (typeof E != "string")
      throw new TypeError("Expected String");
    if (E.length === 0)
      return ai.alloc(0);
    for (var _ = 0, C = 0, U = 0; E[_] === u; )
      C++, _++;
    for (var P = (E.length - _) * d + 1 >>> 0, z = new Uint8Array(P); E[_]; ) {
      var N = e[E.charCodeAt(_)];
      if (N === 255)
        return;
      for (var F = 0, O = P - 1; (N !== 0 || F < U) && O !== -1; O--, F++)
        N += c * z[O] >>> 0, z[O] = N % 256 >>> 0, N = N / 256 >>> 0;
      if (N !== 0)
        throw new Error("Non-zero carry");
      U = F, _++;
    }
    for (var W = P - U; W !== P && z[W] === 0; )
      W++;
    var G = ai.allocUnsafe(C + (P - W));
    G.fill(0, 0, C);
    for (var q = C; W !== P; )
      G[q++] = z[W++];
    return G;
  }
  function T(E) {
    var _ = S(E);
    if (_)
      return _;
    throw new Error("Non-base" + c + " character");
  }
  return {
    encode: v,
    decodeUnsafe: S,
    decode: T
  };
}
var ed = $h, td = ed, nd = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", Ct = td(nd);
const rd = (n, e, t) => n & e ^ ~n & t, id = (n, e, t) => n & e ^ n & t ^ e & t, od = new Uint32Array([
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
]), _n = new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), Cn = new Uint32Array(64);
class sd extends cu {
  constructor() {
    super(64, 32, 8, !1), this.A = _n[0] | 0, this.B = _n[1] | 0, this.C = _n[2] | 0, this.D = _n[3] | 0, this.E = _n[4] | 0, this.F = _n[5] | 0, this.G = _n[6] | 0, this.H = _n[7] | 0;
  }
  get() {
    const { A: e, B: t, C: r, D: i, E: o, F: c, G: u, H: d } = this;
    return [e, t, r, i, o, c, u, d];
  }
  set(e, t, r, i, o, c, u, d) {
    this.A = e | 0, this.B = t | 0, this.C = r | 0, this.D = i | 0, this.E = o | 0, this.F = c | 0, this.G = u | 0, this.H = d | 0;
  }
  process(e, t) {
    for (let S = 0; S < 16; S++, t += 4)
      Cn[S] = e.getUint32(t, !1);
    for (let S = 16; S < 64; S++) {
      const T = Cn[S - 15], E = Cn[S - 2], _ = dn(T, 7) ^ dn(T, 18) ^ T >>> 3, C = dn(E, 17) ^ dn(E, 19) ^ E >>> 10;
      Cn[S] = C + Cn[S - 7] + _ + Cn[S - 16] | 0;
    }
    let { A: r, B: i, C: o, D: c, E: u, F: d, G: w, H: v } = this;
    for (let S = 0; S < 64; S++) {
      const T = dn(u, 6) ^ dn(u, 11) ^ dn(u, 25), E = v + T + rd(u, d, w) + od[S] + Cn[S] | 0, C = (dn(r, 2) ^ dn(r, 13) ^ dn(r, 22)) + id(r, i, o) | 0;
      v = w, w = d, d = u, u = c + E | 0, c = o, o = i, i = r, r = E + C | 0;
    }
    r = r + this.A | 0, i = i + this.B | 0, o = o + this.C | 0, c = c + this.D | 0, u = u + this.E | 0, d = d + this.F | 0, w = w + this.G | 0, v = v + this.H | 0, this.set(r, i, o, c, u, d, w, v);
  }
  roundClean() {
    Cn.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const Is = Zr(() => new sd());
var _t = {}, ci = Pr.exports.Buffer;
function ad(n) {
  if (n.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var e = new Uint8Array(256), t = 0; t < e.length; t++)
    e[t] = 255;
  for (var r = 0; r < n.length; r++) {
    var i = n.charAt(r), o = i.charCodeAt(0);
    if (e[o] !== 255)
      throw new TypeError(i + " is ambiguous");
    e[o] = r;
  }
  var c = n.length, u = n.charAt(0), d = Math.log(c) / Math.log(256), w = Math.log(256) / Math.log(c);
  function v(E) {
    if ((Array.isArray(E) || E instanceof Uint8Array) && (E = ci.from(E)), !ci.isBuffer(E))
      throw new TypeError("Expected Buffer");
    if (E.length === 0)
      return "";
    for (var _ = 0, C = 0, U = 0, P = E.length; U !== P && E[U] === 0; )
      U++, _++;
    for (var z = (P - U) * w + 1 >>> 0, N = new Uint8Array(z); U !== P; ) {
      for (var F = E[U], O = 0, W = z - 1; (F !== 0 || O < C) && W !== -1; W--, O++)
        F += 256 * N[W] >>> 0, N[W] = F % c >>> 0, F = F / c >>> 0;
      if (F !== 0)
        throw new Error("Non-zero carry");
      C = O, U++;
    }
    for (var G = z - C; G !== z && N[G] === 0; )
      G++;
    for (var q = u.repeat(_); G < z; ++G)
      q += n.charAt(N[G]);
    return q;
  }
  function S(E) {
    if (typeof E != "string")
      throw new TypeError("Expected String");
    if (E.length === 0)
      return ci.alloc(0);
    for (var _ = 0, C = 0, U = 0; E[_] === u; )
      C++, _++;
    for (var P = (E.length - _) * d + 1 >>> 0, z = new Uint8Array(P); E[_]; ) {
      var N = e[E.charCodeAt(_)];
      if (N === 255)
        return;
      for (var F = 0, O = P - 1; (N !== 0 || F < U) && O !== -1; O--, F++)
        N += c * z[O] >>> 0, z[O] = N % 256 >>> 0, N = N / 256 >>> 0;
      if (N !== 0)
        throw new Error("Non-zero carry");
      U = F, _++;
    }
    for (var W = P - U; W !== P && z[W] === 0; )
      W++;
    var G = ci.allocUnsafe(C + (P - W));
    G.fill(0, 0, C);
    for (var q = C; W !== P; )
      G[q++] = z[W++];
    return G;
  }
  function T(E) {
    var _ = S(E);
    if (_)
      return _;
    throw new Error("Non-base" + c + " character");
  }
  return {
    encode: v,
    decodeUnsafe: S,
    decode: T
  };
}
var cd = ad, ud = cd, ld = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", fd = ud(ld);
function En(n, e, t) {
  return e <= n && n <= t;
}
function qi(n) {
  if (n === void 0)
    return {};
  if (n === Object(n))
    return n;
  throw TypeError("Could not convert argument to dictionary");
}
function hd(n) {
  for (var e = String(n), t = e.length, r = 0, i = []; r < t; ) {
    var o = e.charCodeAt(r);
    if (o < 55296 || o > 57343)
      i.push(o);
    else if (56320 <= o && o <= 57343)
      i.push(65533);
    else if (55296 <= o && o <= 56319)
      if (r === t - 1)
        i.push(65533);
      else {
        var c = n.charCodeAt(r + 1);
        if (56320 <= c && c <= 57343) {
          var u = o & 1023, d = c & 1023;
          i.push(65536 + (u << 10) + d), r += 1;
        } else
          i.push(65533);
      }
    r += 1;
  }
  return i;
}
function dd(n) {
  for (var e = "", t = 0; t < n.length; ++t) {
    var r = n[t];
    r <= 65535 ? e += String.fromCharCode(r) : (r -= 65536, e += String.fromCharCode(
      (r >> 10) + 55296,
      (r & 1023) + 56320
    ));
  }
  return e;
}
var _i = -1;
function Vs(n) {
  this.tokens = [].slice.call(n);
}
Vs.prototype = {
  endOfStream: function() {
    return !this.tokens.length;
  },
  read: function() {
    return this.tokens.length ? this.tokens.shift() : _i;
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
var wr = -1;
function Ho(n, e) {
  if (n)
    throw TypeError("Decoder error");
  return e || 65533;
}
var Ci = "utf-8";
function Ti(n, e) {
  if (!(this instanceof Ti))
    return new Ti(n, e);
  if (n = n !== void 0 ? String(n).toLowerCase() : Ci, n !== Ci)
    throw new Error("Encoding not supported. Only utf-8 is supported");
  e = qi(e), this._streaming = !1, this._BOMseen = !1, this._decoder = null, this._fatal = Boolean(e.fatal), this._ignoreBOM = Boolean(e.ignoreBOM), Object.defineProperty(this, "encoding", { value: "utf-8" }), Object.defineProperty(this, "fatal", { value: this._fatal }), Object.defineProperty(this, "ignoreBOM", { value: this._ignoreBOM });
}
Ti.prototype = {
  decode: function(e, t) {
    var r;
    typeof e == "object" && e instanceof ArrayBuffer ? r = new Uint8Array(e) : typeof e == "object" && "buffer" in e && e.buffer instanceof ArrayBuffer ? r = new Uint8Array(
      e.buffer,
      e.byteOffset,
      e.byteLength
    ) : r = new Uint8Array(0), t = qi(t), this._streaming || (this._decoder = new pd({ fatal: this._fatal }), this._BOMseen = !1), this._streaming = Boolean(t.stream);
    for (var i = new Vs(r), o = [], c; !i.endOfStream() && (c = this._decoder.handler(i, i.read()), c !== wr); )
      c !== null && (Array.isArray(c) ? o.push.apply(o, c) : o.push(c));
    if (!this._streaming) {
      do {
        if (c = this._decoder.handler(i, i.read()), c === wr)
          break;
        c !== null && (Array.isArray(c) ? o.push.apply(o, c) : o.push(c));
      } while (!i.endOfStream());
      this._decoder = null;
    }
    return o.length && ["utf-8"].indexOf(this.encoding) !== -1 && !this._ignoreBOM && !this._BOMseen && (o[0] === 65279 ? (this._BOMseen = !0, o.shift()) : this._BOMseen = !0), dd(o);
  }
};
function Ri(n, e) {
  if (!(this instanceof Ri))
    return new Ri(n, e);
  if (n = n !== void 0 ? String(n).toLowerCase() : Ci, n !== Ci)
    throw new Error("Encoding not supported. Only utf-8 is supported");
  e = qi(e), this._streaming = !1, this._encoder = null, this._options = { fatal: Boolean(e.fatal) }, Object.defineProperty(this, "encoding", { value: "utf-8" });
}
Ri.prototype = {
  encode: function(e, t) {
    e = e ? String(e) : "", t = qi(t), this._streaming || (this._encoder = new gd(this._options)), this._streaming = Boolean(t.stream);
    for (var r = [], i = new Vs(hd(e)), o; !i.endOfStream() && (o = this._encoder.handler(i, i.read()), o !== wr); )
      Array.isArray(o) ? r.push.apply(r, o) : r.push(o);
    if (!this._streaming) {
      for (; o = this._encoder.handler(i, i.read()), o !== wr; )
        Array.isArray(o) ? r.push.apply(r, o) : r.push(o);
      this._encoder = null;
    }
    return new Uint8Array(r);
  }
};
function pd(n) {
  var e = n.fatal, t = 0, r = 0, i = 0, o = 128, c = 191;
  this.handler = function(u, d) {
    if (d === _i && i !== 0)
      return i = 0, Ho(e);
    if (d === _i)
      return wr;
    if (i === 0) {
      if (En(d, 0, 127))
        return d;
      if (En(d, 194, 223))
        i = 1, t = d - 192;
      else if (En(d, 224, 239))
        d === 224 && (o = 160), d === 237 && (c = 159), i = 2, t = d - 224;
      else if (En(d, 240, 244))
        d === 240 && (o = 144), d === 244 && (c = 143), i = 3, t = d - 240;
      else
        return Ho(e);
      return t = t << 6 * i, null;
    }
    if (!En(d, o, c))
      return t = i = r = 0, o = 128, c = 191, u.prepend(d), Ho(e);
    if (o = 128, c = 191, r += 1, t += d - 128 << 6 * (i - r), r !== i)
      return null;
    var w = t;
    return t = i = r = 0, w;
  };
}
function gd(n) {
  n.fatal, this.handler = function(e, t) {
    if (t === _i)
      return wr;
    if (En(t, 0, 127))
      return t;
    var r, i;
    En(t, 128, 2047) ? (r = 1, i = 192) : En(t, 2048, 65535) ? (r = 2, i = 224) : En(t, 65536, 1114111) && (r = 3, i = 240);
    for (var o = [(t >> 6 * r) + i]; r > 0; ) {
      var c = t >> 6 * (r - 1);
      o.push(128 | c & 63), r -= 1;
    }
    return o;
  };
}
const yd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TextEncoder: Ri,
  TextDecoder: Ti
}, Symbol.toStringTag, { value: "Module" })), wd = /* @__PURE__ */ Hi(yd);
var md = un && un.__createBinding || (Object.create ? function(n, e, t, r) {
  r === void 0 && (r = t), Object.defineProperty(n, r, { enumerable: !0, get: function() {
    return e[t];
  } });
} : function(n, e, t, r) {
  r === void 0 && (r = t), n[r] = e[t];
}), bd = un && un.__setModuleDefault || (Object.create ? function(n, e) {
  Object.defineProperty(n, "default", { enumerable: !0, value: e });
} : function(n, e) {
  n.default = e;
}), bn = un && un.__decorate || function(n, e, t, r) {
  var i = arguments.length, o = i < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, t) : r, c;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, r);
  else
    for (var u = n.length - 1; u >= 0; u--)
      (c = n[u]) && (o = (i < 3 ? c(o) : i > 3 ? c(e, t, o) : c(e, t)) || o);
  return i > 3 && o && Object.defineProperty(e, t, o), o;
}, Ad = un && un.__importStar || function(n) {
  if (n && n.__esModule)
    return n;
  var e = {};
  if (n != null)
    for (var t in n)
      t !== "default" && Object.hasOwnProperty.call(n, t) && md(e, n, t);
  return bd(e, n), e;
}, yu = un && un.__importDefault || function(n) {
  return n && n.__esModule ? n : { default: n };
};
Object.defineProperty(_t, "__esModule", { value: !0 });
var wu = _t.deserializeUnchecked = xu = _t.deserialize = Eu = _t.serialize = _t.BinaryReader = _t.BinaryWriter = _t.BorshError = _t.baseDecode = _t.baseEncode = void 0;
const On = yu(Ys.exports), mu = yu(fd), vd = Ad(wd), Ed = typeof TextDecoder != "function" ? vd.TextDecoder : TextDecoder, xd = new Ed("utf-8", { fatal: !0 });
function Sd(n) {
  return typeof n == "string" && (n = Buffer.from(n, "utf8")), mu.default.encode(Buffer.from(n));
}
_t.baseEncode = Sd;
function Id(n) {
  return Buffer.from(mu.default.decode(n));
}
_t.baseDecode = Id;
const Wo = 1024;
class Pt extends Error {
  constructor(e) {
    super(e), this.fieldPath = [], this.originalMessage = e;
  }
  addToFieldPath(e) {
    this.fieldPath.splice(0, 0, e), this.message = this.originalMessage + ": " + this.fieldPath.join(".");
  }
}
_t.BorshError = Pt;
class bu {
  constructor() {
    this.buf = Buffer.alloc(Wo), this.length = 0;
  }
  maybeResize() {
    this.buf.length < 16 + this.length && (this.buf = Buffer.concat([this.buf, Buffer.alloc(Wo)]));
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
    this.maybeResize(), this.writeBuffer(Buffer.from(new On.default(e).toArray("le", 8)));
  }
  writeU128(e) {
    this.maybeResize(), this.writeBuffer(Buffer.from(new On.default(e).toArray("le", 16)));
  }
  writeU256(e) {
    this.maybeResize(), this.writeBuffer(Buffer.from(new On.default(e).toArray("le", 32)));
  }
  writeU512(e) {
    this.maybeResize(), this.writeBuffer(Buffer.from(new On.default(e).toArray("le", 64)));
  }
  writeBuffer(e) {
    this.buf = Buffer.concat([
      Buffer.from(this.buf.subarray(0, this.length)),
      e,
      Buffer.alloc(Wo)
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
_t.BinaryWriter = bu;
function An(n, e, t) {
  const r = t.value;
  t.value = function(...i) {
    try {
      return r.apply(this, i);
    } catch (o) {
      if (o instanceof RangeError) {
        const c = o.code;
        if (["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(c) >= 0)
          throw new Pt("Reached the end of buffer when deserializing");
      }
      throw o;
    }
  };
}
class Kt {
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
    return new On.default(e, "le");
  }
  readU128() {
    const e = this.readBuffer(16);
    return new On.default(e, "le");
  }
  readU256() {
    const e = this.readBuffer(32);
    return new On.default(e, "le");
  }
  readU512() {
    const e = this.readBuffer(64);
    return new On.default(e, "le");
  }
  readBuffer(e) {
    if (this.offset + e > this.buf.length)
      throw new Pt(`Expected buffer length ${e} isn't within bounds`);
    const t = this.buf.slice(this.offset, this.offset + e);
    return this.offset += e, t;
  }
  readString() {
    const e = this.readU32(), t = this.readBuffer(e);
    try {
      return xd.decode(t);
    } catch (r) {
      throw new Pt(`Error decoding UTF-8 string: ${r}`);
    }
  }
  readFixedArray(e) {
    return new Uint8Array(this.readBuffer(e));
  }
  readArray(e) {
    const t = this.readU32(), r = Array();
    for (let i = 0; i < t; ++i)
      r.push(e());
    return r;
  }
}
bn([
  An
], Kt.prototype, "readU8", null);
bn([
  An
], Kt.prototype, "readU16", null);
bn([
  An
], Kt.prototype, "readU32", null);
bn([
  An
], Kt.prototype, "readU64", null);
bn([
  An
], Kt.prototype, "readU128", null);
bn([
  An
], Kt.prototype, "readU256", null);
bn([
  An
], Kt.prototype, "readU512", null);
bn([
  An
], Kt.prototype, "readString", null);
bn([
  An
], Kt.prototype, "readFixedArray", null);
bn([
  An
], Kt.prototype, "readArray", null);
_t.BinaryReader = Kt;
function Au(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
function Wn(n, e, t, r, i) {
  try {
    if (typeof r == "string")
      i[`write${Au(r)}`](t);
    else if (r instanceof Array)
      if (typeof r[0] == "number") {
        if (t.length !== r[0])
          throw new Pt(`Expecting byte array of length ${r[0]}, but got ${t.length} bytes`);
        i.writeFixedArray(t);
      } else if (r.length === 2 && typeof r[1] == "number") {
        if (t.length !== r[1])
          throw new Pt(`Expecting byte array of length ${r[1]}, but got ${t.length} bytes`);
        for (let o = 0; o < r[1]; o++)
          Wn(n, null, t[o], r[0], i);
      } else
        i.writeArray(t, (o) => {
          Wn(n, e, o, r[0], i);
        });
    else if (r.kind !== void 0)
      switch (r.kind) {
        case "option": {
          t == null ? i.writeU8(0) : (i.writeU8(1), Wn(n, e, t, r.type, i));
          break;
        }
        case "map": {
          i.writeU32(t.size), t.forEach((o, c) => {
            Wn(n, e, c, r.key, i), Wn(n, e, o, r.value, i);
          });
          break;
        }
        default:
          throw new Pt(`FieldType ${r} unrecognized`);
      }
    else
      vu(n, t, i);
  } catch (o) {
    throw o instanceof Pt && o.addToFieldPath(e), o;
  }
}
function vu(n, e, t) {
  if (typeof e.borshSerialize == "function") {
    e.borshSerialize(t);
    return;
  }
  const r = n.get(e.constructor);
  if (!r)
    throw new Pt(`Class ${e.constructor.name} is missing in schema`);
  if (r.kind === "struct")
    r.fields.map(([i, o]) => {
      Wn(n, i, e[i], o, t);
    });
  else if (r.kind === "enum") {
    const i = e[r.field];
    for (let o = 0; o < r.values.length; ++o) {
      const [c, u] = r.values[o];
      if (c === i) {
        t.writeU8(o), Wn(n, c, e[c], u, t);
        break;
      }
    }
  } else
    throw new Pt(`Unexpected schema kind: ${r.kind} for ${e.constructor.name}`);
}
function Bd(n, e, t = bu) {
  const r = new t();
  return vu(n, e, r), r.toArray();
}
var Eu = _t.serialize = Bd;
function jn(n, e, t, r) {
  try {
    if (typeof t == "string")
      return r[`read${Au(t)}`]();
    if (t instanceof Array) {
      if (typeof t[0] == "number")
        return r.readFixedArray(t[0]);
      if (typeof t[1] == "number") {
        const i = [];
        for (let o = 0; o < t[1]; o++)
          i.push(jn(n, null, t[0], r));
        return i;
      } else
        return r.readArray(() => jn(n, e, t[0], r));
    }
    if (t.kind === "option")
      return r.readU8() ? jn(n, e, t.type, r) : void 0;
    if (t.kind === "map") {
      let i = /* @__PURE__ */ new Map();
      const o = r.readU32();
      for (let c = 0; c < o; c++) {
        const u = jn(n, e, t.key, r), d = jn(n, e, t.value, r);
        i.set(u, d);
      }
      return i;
    }
    return Zs(n, t, r);
  } catch (i) {
    throw i instanceof Pt && i.addToFieldPath(e), i;
  }
}
function Zs(n, e, t) {
  if (typeof e.borshDeserialize == "function")
    return e.borshDeserialize(t);
  const r = n.get(e);
  if (!r)
    throw new Pt(`Class ${e.name} is missing in schema`);
  if (r.kind === "struct") {
    const i = {};
    for (const [o, c] of n.get(e).fields)
      i[o] = jn(n, o, c, t);
    return new e(i);
  }
  if (r.kind === "enum") {
    const i = t.readU8();
    if (i >= r.values.length)
      throw new Pt(`Enum index: ${i} is out of range`);
    const [o, c] = r.values[i], u = jn(n, o, c, t);
    return new e({ [o]: u });
  }
  throw new Pt(`Unexpected schema kind: ${r.kind} for ${e.constructor.name}`);
}
function Md(n, e, t, r = Kt) {
  const i = new r(t), o = Zs(n, e, i);
  if (i.offset < t.length)
    throw new Pt(`Unexpected ${t.length - i.offset} bytes after deserialized data`);
  return o;
}
var xu = _t.deserialize = Md;
function _d(n, e, t, r = Kt) {
  const i = new r(t);
  return Zs(n, e, i);
}
wu = _t.deserializeUnchecked = _d;
var H = {};
Object.defineProperty(H, "__esModule", { value: !0 });
H.s16 = H.s8 = H.nu64be = H.u48be = H.u40be = H.u32be = H.u24be = H.u16be = Mt = H.nu64 = H.u48 = H.u40 = ge = H.u32 = H.u24 = Jt = H.u16 = Ne = H.u8 = Kn = H.offset = H.greedy = H.Constant = H.UTF8 = H.CString = H.Blob = H.Boolean = H.BitField = H.BitStructure = H.VariantLayout = H.Union = H.UnionLayoutDiscriminator = H.UnionDiscriminator = H.Structure = H.Sequence = H.DoubleBE = H.Double = H.FloatBE = H.Float = H.NearInt64BE = H.NearInt64 = H.NearUInt64BE = H.NearUInt64 = H.IntBE = H.Int = H.UIntBE = H.UInt = H.OffsetLayout = H.GreedyCount = H.ExternalLayout = H.bindConstructorLayout = H.nameWithProperty = H.Layout = H.uint8ArrayToBuffer = H.checkUint8Array = void 0;
H.constant = H.utf8 = H.cstr = $e = H.blob = H.unionLayoutDiscriminator = H.union = Ft = H.seq = H.bits = ue = H.struct = H.f64be = H.f64 = H.f32be = H.f32 = H.ns64be = H.s48be = H.s40be = H.s32be = H.s24be = H.s16be = qt = H.ns64 = H.s48 = H.s40 = H.s32 = H.s24 = void 0;
const Js = Ks;
function xr(n) {
  if (!(n instanceof Uint8Array))
    throw new TypeError("b must be a Uint8Array");
}
H.checkUint8Array = xr;
function ke(n) {
  return xr(n), Js.Buffer.from(n.buffer, n.byteOffset, n.length);
}
H.uint8ArrayToBuffer = ke;
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
function Xs(n, e) {
  return e.property ? n + "[" + e.property + "]" : n;
}
H.nameWithProperty = Xs;
function Cd(n, e) {
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
H.bindConstructorLayout = Cd;
class zt extends Fe {
  isCount() {
    throw new Error("ExternalLayout is abstract");
  }
}
H.ExternalLayout = zt;
class Su extends zt {
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
H.GreedyCount = Su;
class $s extends zt {
  constructor(e, t = 0, r) {
    if (!(e instanceof Fe))
      throw new TypeError("layout must be a Layout");
    if (!Number.isInteger(t))
      throw new TypeError("offset must be integer or undefined");
    super(e.span, r || e.property), this.layout = e, this.offset = t;
  }
  isCount() {
    return this.layout instanceof nn || this.layout instanceof cn;
  }
  decode(e, t = 0) {
    return this.layout.decode(e, t + this.offset);
  }
  encode(e, t, r = 0) {
    return this.layout.encode(e, t, r + this.offset);
  }
}
H.OffsetLayout = $s;
class nn extends Fe {
  constructor(e, t) {
    if (super(e, t), 6 < this.span)
      throw new RangeError("span must not exceed 6 bytes");
  }
  decode(e, t = 0) {
    return ke(e).readUIntLE(t, this.span);
  }
  encode(e, t, r = 0) {
    return ke(t).writeUIntLE(e, r, this.span), this.span;
  }
}
H.UInt = nn;
class cn extends Fe {
  constructor(e, t) {
    if (super(e, t), 6 < this.span)
      throw new RangeError("span must not exceed 6 bytes");
  }
  decode(e, t = 0) {
    return ke(e).readUIntBE(t, this.span);
  }
  encode(e, t, r = 0) {
    return ke(t).writeUIntBE(e, r, this.span), this.span;
  }
}
H.UIntBE = cn;
class tr extends Fe {
  constructor(e, t) {
    if (super(e, t), 6 < this.span)
      throw new RangeError("span must not exceed 6 bytes");
  }
  decode(e, t = 0) {
    return ke(e).readIntLE(t, this.span);
  }
  encode(e, t, r = 0) {
    return ke(t).writeIntLE(e, r, this.span), this.span;
  }
}
H.Int = tr;
class Sr extends Fe {
  constructor(e, t) {
    if (super(e, t), 6 < this.span)
      throw new RangeError("span must not exceed 6 bytes");
  }
  decode(e, t = 0) {
    return ke(e).readIntBE(t, this.span);
  }
  encode(e, t, r = 0) {
    return ke(t).writeIntBE(e, r, this.span), this.span;
  }
}
H.IntBE = Sr;
const Bs = Math.pow(2, 32);
function Qi(n) {
  const e = Math.floor(n / Bs), t = n - e * Bs;
  return { hi32: e, lo32: t };
}
function Yi(n, e) {
  return n * Bs + e;
}
class Iu extends Fe {
  constructor(e) {
    super(8, e);
  }
  decode(e, t = 0) {
    const r = ke(e), i = r.readUInt32LE(t), o = r.readUInt32LE(t + 4);
    return Yi(o, i);
  }
  encode(e, t, r = 0) {
    const i = Qi(e), o = ke(t);
    return o.writeUInt32LE(i.lo32, r), o.writeUInt32LE(i.hi32, r + 4), 8;
  }
}
H.NearUInt64 = Iu;
class Bu extends Fe {
  constructor(e) {
    super(8, e);
  }
  decode(e, t = 0) {
    const r = ke(e), i = r.readUInt32BE(t), o = r.readUInt32BE(t + 4);
    return Yi(i, o);
  }
  encode(e, t, r = 0) {
    const i = Qi(e), o = ke(t);
    return o.writeUInt32BE(i.hi32, r), o.writeUInt32BE(i.lo32, r + 4), 8;
  }
}
H.NearUInt64BE = Bu;
class Mu extends Fe {
  constructor(e) {
    super(8, e);
  }
  decode(e, t = 0) {
    const r = ke(e), i = r.readUInt32LE(t), o = r.readInt32LE(t + 4);
    return Yi(o, i);
  }
  encode(e, t, r = 0) {
    const i = Qi(e), o = ke(t);
    return o.writeUInt32LE(i.lo32, r), o.writeInt32LE(i.hi32, r + 4), 8;
  }
}
H.NearInt64 = Mu;
class _u extends Fe {
  constructor(e) {
    super(8, e);
  }
  decode(e, t = 0) {
    const r = ke(e), i = r.readInt32BE(t), o = r.readUInt32BE(t + 4);
    return Yi(i, o);
  }
  encode(e, t, r = 0) {
    const i = Qi(e), o = ke(t);
    return o.writeInt32BE(i.hi32, r), o.writeUInt32BE(i.lo32, r + 4), 8;
  }
}
H.NearInt64BE = _u;
class Cu extends Fe {
  constructor(e) {
    super(4, e);
  }
  decode(e, t = 0) {
    return ke(e).readFloatLE(t);
  }
  encode(e, t, r = 0) {
    return ke(t).writeFloatLE(e, r), 4;
  }
}
H.Float = Cu;
class Tu extends Fe {
  constructor(e) {
    super(4, e);
  }
  decode(e, t = 0) {
    return ke(e).readFloatBE(t);
  }
  encode(e, t, r = 0) {
    return ke(t).writeFloatBE(e, r), 4;
  }
}
H.FloatBE = Tu;
class Ru extends Fe {
  constructor(e) {
    super(8, e);
  }
  decode(e, t = 0) {
    return ke(e).readDoubleLE(t);
  }
  encode(e, t, r = 0) {
    return ke(t).writeDoubleLE(e, r), 8;
  }
}
H.Double = Ru;
class ku extends Fe {
  constructor(e) {
    super(8, e);
  }
  decode(e, t = 0) {
    return ke(e).readDoubleBE(t);
  }
  encode(e, t, r = 0) {
    return ke(t).writeDoubleBE(e, r), 8;
  }
}
H.DoubleBE = ku;
class Nu extends Fe {
  constructor(e, t, r) {
    if (!(e instanceof Fe))
      throw new TypeError("elementLayout must be a Layout");
    if (!(t instanceof zt && t.isCount() || Number.isInteger(t) && 0 <= t))
      throw new TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");
    let i = -1;
    !(t instanceof zt) && 0 < e.span && (i = t * e.span), super(i, r), this.elementLayout = e, this.count = t;
  }
  getSpan(e, t = 0) {
    if (0 <= this.span)
      return this.span;
    let r = 0, i = this.count;
    if (i instanceof zt && (i = i.decode(e, t)), 0 < this.elementLayout.span)
      r = i * this.elementLayout.span;
    else {
      let o = 0;
      for (; o < i; )
        r += this.elementLayout.getSpan(e, t + r), ++o;
    }
    return r;
  }
  decode(e, t = 0) {
    const r = [];
    let i = 0, o = this.count;
    for (o instanceof zt && (o = o.decode(e, t)); i < o; )
      r.push(this.elementLayout.decode(e, t)), t += this.elementLayout.getSpan(e, t), i += 1;
    return r;
  }
  encode(e, t, r = 0) {
    const i = this.elementLayout, o = e.reduce((c, u) => c + i.encode(u, t, r + c), 0);
    return this.count instanceof zt && this.count.encode(e.length, t, r), o;
  }
}
H.Sequence = Nu;
class Ou extends Fe {
  constructor(e, t, r) {
    if (!(Array.isArray(e) && e.reduce((o, c) => o && c instanceof Fe, !0)))
      throw new TypeError("fields must be array of Layout instances");
    typeof t == "boolean" && r === void 0 && (r = t, t = void 0);
    for (const o of e)
      if (0 > o.span && o.property === void 0)
        throw new Error("fields cannot contain unnamed variable-length layout");
    let i = -1;
    try {
      i = e.reduce((o, c) => o + c.getSpan(), 0);
    } catch {
    }
    super(i, t), this.fields = e, this.decodePrefixes = !!r;
  }
  getSpan(e, t = 0) {
    if (0 <= this.span)
      return this.span;
    let r = 0;
    try {
      r = this.fields.reduce((i, o) => {
        const c = o.getSpan(e, t);
        return t += c, i + c;
      }, 0);
    } catch {
      throw new RangeError("indeterminate span");
    }
    return r;
  }
  decode(e, t = 0) {
    xr(e);
    const r = this.makeDestinationObject();
    for (const i of this.fields)
      if (i.property !== void 0 && (r[i.property] = i.decode(e, t)), t += i.getSpan(e, t), this.decodePrefixes && e.length === t)
        break;
    return r;
  }
  encode(e, t, r = 0) {
    const i = r;
    let o = 0, c = 0;
    for (const u of this.fields) {
      let d = u.span;
      if (c = 0 < d ? d : 0, u.property !== void 0) {
        const w = e[u.property];
        w !== void 0 && (c = u.encode(w, t, r), 0 > d && (d = u.getSpan(t, r)));
      }
      o = r, r += d;
    }
    return o + c - i;
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
H.Structure = Ou;
class ea {
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
H.UnionDiscriminator = ea;
class ki extends ea {
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
H.UnionLayoutDiscriminator = ki;
class ta extends Fe {
  constructor(e, t, r) {
    let i;
    if (e instanceof nn || e instanceof cn)
      i = new ki(new $s(e));
    else if (e instanceof zt && e.isCount())
      i = new ki(e);
    else if (e instanceof ea)
      i = e;
    else
      throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
    if (t === void 0 && (t = null), !(t === null || t instanceof Fe))
      throw new TypeError("defaultLayout must be null or a Layout");
    if (t !== null) {
      if (0 > t.span)
        throw new Error("defaultLayout must have constant span");
      t.property === void 0 && (t = t.replicate("content"));
    }
    let o = -1;
    t && (o = t.span, 0 <= o && (e instanceof nn || e instanceof cn) && (o += i.layout.span)), super(o, r), this.discriminator = i, this.usesPrefixDiscriminator = e instanceof nn || e instanceof cn, this.defaultLayout = t, this.registry = {};
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
    const i = this.discriminator, o = i.decode(e, t), c = this.registry[o];
    if (c === void 0) {
      const u = this.defaultLayout;
      let d = 0;
      this.usesPrefixDiscriminator && (d = i.layout.span), r = this.makeDestinationObject(), r[i.property] = o, r[u.property] = u.decode(e, t + d);
    } else
      r = c.decode(e, t);
    return r;
  }
  encode(e, t, r = 0) {
    const i = this.getSourceVariant(e);
    if (i === void 0) {
      const o = this.discriminator, c = this.defaultLayout;
      let u = 0;
      return this.usesPrefixDiscriminator && (u = o.layout.span), o.encode(e[o.property], t, r), u + c.encode(e[c.property], t, r + u);
    }
    return i.encode(e, t, r);
  }
  addVariant(e, t, r) {
    const i = new Lu(this, e, t, r);
    return this.registry[e] = i, i;
  }
  getVariant(e, t = 0) {
    let r;
    return e instanceof Uint8Array ? r = this.discriminator.decode(e, t) : r = e, this.registry[r];
  }
}
H.Union = ta;
class Lu extends Fe {
  constructor(e, t, r, i) {
    if (!(e instanceof ta))
      throw new TypeError("union must be a Union");
    if (!Number.isInteger(t) || 0 > t)
      throw new TypeError("variant must be a (non-negative) integer");
    if (typeof r == "string" && i === void 0 && (i = r, r = null), r) {
      if (!(r instanceof Fe))
        throw new TypeError("layout must be a Layout");
      if (e.defaultLayout !== null && 0 <= r.span && r.span > e.defaultLayout.span)
        throw new Error("variant span exceeds span of containing union");
      if (typeof i != "string")
        throw new TypeError("variant must have a String property");
    }
    let o = e.span;
    0 > e.span && (o = r ? r.span : 0, 0 <= o && e.usesPrefixDiscriminator && (o += e.discriminator.layout.span)), super(o, i), this.union = e, this.variant = t, this.layout = r || null;
  }
  getSpan(e, t = 0) {
    if (0 <= this.span)
      return this.span;
    let r = 0;
    this.union.usesPrefixDiscriminator && (r = this.union.discriminator.layout.span);
    let i = 0;
    return this.layout && (i = this.layout.getSpan(e, t + r)), r + i;
  }
  decode(e, t = 0) {
    const r = this.makeDestinationObject();
    if (this !== this.union.getVariant(e, t))
      throw new Error("variant mismatch");
    let i = 0;
    return this.union.usesPrefixDiscriminator && (i = this.union.discriminator.layout.span), this.layout ? r[this.property] = this.layout.decode(e, t + i) : this.property ? r[this.property] = !0 : this.union.usesPrefixDiscriminator && (r[this.union.discriminator.property] = this.variant), r;
  }
  encode(e, t, r = 0) {
    let i = 0;
    if (this.union.usesPrefixDiscriminator && (i = this.union.discriminator.layout.span), this.layout && !Object.prototype.hasOwnProperty.call(e, this.property))
      throw new TypeError("variant lacks property " + this.property);
    this.union.discriminator.encode(this.variant, t, r);
    let o = i;
    if (this.layout && (this.layout.encode(e[this.property], t, r + i), o += this.layout.getSpan(t, r + i), 0 <= this.union.span && o > this.union.span))
      throw new Error("encoded variant overruns containing union");
    return o;
  }
  fromArray(e) {
    if (this.layout)
      return this.layout.fromArray(e);
  }
}
H.VariantLayout = Lu;
function cr(n) {
  return 0 > n && (n += 4294967296), n;
}
class na extends Fe {
  constructor(e, t, r) {
    if (!(e instanceof nn || e instanceof cn))
      throw new TypeError("word must be a UInt or UIntBE layout");
    if (typeof t == "string" && r === void 0 && (r = t, t = !1), 4 < e.span)
      throw new RangeError("word cannot exceed 32 bits");
    super(e.span, r), this.word = e, this.msb = !!t, this.fields = [];
    let i = 0;
    this._packedSetValue = function(o) {
      return i = cr(o), this;
    }, this._packedGetValue = function() {
      return i;
    };
  }
  decode(e, t = 0) {
    const r = this.makeDestinationObject(), i = this.word.decode(e, t);
    this._packedSetValue(i);
    for (const o of this.fields)
      o.property !== void 0 && (r[o.property] = o.decode(e));
    return r;
  }
  encode(e, t, r = 0) {
    const i = this.word.decode(t, r);
    this._packedSetValue(i);
    for (const o of this.fields)
      if (o.property !== void 0) {
        const c = e[o.property];
        c !== void 0 && o.encode(c);
      }
    return this.word.encode(this._packedGetValue(), t, r);
  }
  addField(e, t) {
    const r = new ra(this, e, t);
    return this.fields.push(r), r;
  }
  addBoolean(e) {
    const t = new Uu(this, e);
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
H.BitStructure = na;
class ra {
  constructor(e, t, r) {
    if (!(e instanceof na))
      throw new TypeError("container must be a BitStructure");
    if (!Number.isInteger(t) || 0 >= t)
      throw new TypeError("bits must be positive integer");
    const i = 8 * e.span, o = e.fields.reduce((c, u) => c + u.bits, 0);
    if (t + o > i)
      throw new Error("bits too long for span remainder (" + (i - o) + " of " + i + " remain)");
    this.container = e, this.bits = t, this.valueMask = (1 << t) - 1, t === 32 && (this.valueMask = 4294967295), this.start = o, this.container.msb && (this.start = i - o - t), this.wordMask = cr(this.valueMask << this.start), this.property = r;
  }
  decode(e, t) {
    const r = this.container._packedGetValue();
    return cr(r & this.wordMask) >>> this.start;
  }
  encode(e) {
    if (typeof e != "number" || !Number.isInteger(e) || e !== cr(e & this.valueMask))
      throw new TypeError(Xs("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
    const t = this.container._packedGetValue(), r = cr(e << this.start);
    this.container._packedSetValue(cr(t & ~this.wordMask) | r);
  }
}
H.BitField = ra;
class Uu extends ra {
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
H.Boolean = Uu;
class Du extends Fe {
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
    return 0 > r && (r = this.length.decode(e, t)), ke(e).slice(t, t + r);
  }
  encode(e, t, r) {
    let i = this.length;
    if (this.length instanceof zt && (i = e.length), !(e instanceof Uint8Array && i === e.length))
      throw new TypeError(Xs("Blob.encode", this) + " requires (length " + i + ") Uint8Array as src");
    if (r + i > t.length)
      throw new RangeError("encoding overruns Uint8Array");
    const o = ke(e);
    return ke(t).write(o.toString("hex"), r, i, "hex"), this.length instanceof zt && this.length.encode(i, t, r), i;
  }
}
H.Blob = Du;
class Pu extends Fe {
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
    return ke(e).slice(t, t + r - 1).toString("utf-8");
  }
  encode(e, t, r = 0) {
    typeof e != "string" && (e = String(e));
    const i = Js.Buffer.from(e, "utf8"), o = i.length;
    if (r + o > t.length)
      throw new RangeError("encoding overruns Buffer");
    const c = ke(t);
    return i.copy(c, r), c[r + o] = 0, o + 1;
  }
}
H.CString = Pu;
class Fu extends Fe {
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
    return ke(e).slice(t, t + r).toString("utf-8");
  }
  encode(e, t, r = 0) {
    typeof e != "string" && (e = String(e));
    const i = Js.Buffer.from(e, "utf8"), o = i.length;
    if (0 <= this.maxSpan && this.maxSpan < o)
      throw new RangeError("text length exceeds maxSpan");
    if (r + o > t.length)
      throw new RangeError("encoding overruns Buffer");
    return i.copy(ke(t), r), o;
  }
}
H.UTF8 = Fu;
class zu extends Fe {
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
H.Constant = zu;
H.greedy = (n, e) => new Su(n, e);
var Kn = H.offset = (n, e, t) => new $s(n, e, t), Ne = H.u8 = (n) => new nn(1, n), Jt = H.u16 = (n) => new nn(2, n);
H.u24 = (n) => new nn(3, n);
var ge = H.u32 = (n) => new nn(4, n);
H.u40 = (n) => new nn(5, n);
H.u48 = (n) => new nn(6, n);
var Mt = H.nu64 = (n) => new Iu(n);
H.u16be = (n) => new cn(2, n);
H.u24be = (n) => new cn(3, n);
H.u32be = (n) => new cn(4, n);
H.u40be = (n) => new cn(5, n);
H.u48be = (n) => new cn(6, n);
H.nu64be = (n) => new Bu(n);
H.s8 = (n) => new tr(1, n);
H.s16 = (n) => new tr(2, n);
H.s24 = (n) => new tr(3, n);
H.s32 = (n) => new tr(4, n);
H.s40 = (n) => new tr(5, n);
H.s48 = (n) => new tr(6, n);
var qt = H.ns64 = (n) => new Mu(n);
H.s16be = (n) => new Sr(2, n);
H.s24be = (n) => new Sr(3, n);
H.s32be = (n) => new Sr(4, n);
H.s40be = (n) => new Sr(5, n);
H.s48be = (n) => new Sr(6, n);
H.ns64be = (n) => new _u(n);
H.f32 = (n) => new Cu(n);
H.f32be = (n) => new Tu(n);
H.f64 = (n) => new Ru(n);
H.f64be = (n) => new ku(n);
var ue = H.struct = (n, e, t) => new Ou(n, e, t);
H.bits = (n, e, t) => new na(n, e, t);
var Ft = H.seq = (n, e, t) => new Nu(n, e, t);
H.union = (n, e, t) => new ta(n, e, t);
H.unionLayoutDiscriminator = (n, e) => new ki(n, e);
var $e = H.blob = (n, e) => new Du(n, e);
H.cstr = (n) => new Pu(n);
H.utf8 = (n, e) => new Fu(n, e);
H.constant = (n, e) => new zu(n, e);
var $r = {};
Object.defineProperty($r, "__esModule", { value: !0 });
function Td(n) {
  {
    const e = Buffer.from(n);
    e.reverse();
    const t = e.toString("hex");
    return t.length === 0 ? BigInt(0) : BigInt(`0x${t}`);
  }
}
var Rd = $r.toBigIntLE = Td;
function kd(n) {
  {
    const e = n.toString("hex");
    return e.length === 0 ? BigInt(0) : BigInt(`0x${e}`);
  }
}
$r.toBigIntBE = kd;
function Nd(n, e) {
  {
    const t = n.toString(16), r = Buffer.from(t.padStart(e * 2, "0").slice(0, e * 2), "hex");
    return r.reverse(), r;
  }
}
var Od = $r.toBufferLE = Nd;
function Ld(n, e) {
  {
    const t = n.toString(16);
    return Buffer.from(t.padStart(e * 2, "0").slice(0, e * 2), "hex");
  }
}
$r.toBufferBE = Ld;
class Ud extends TypeError {
  constructor(e, t) {
    let r;
    const {
      message: i,
      ...o
    } = e, {
      path: c
    } = e, u = c.length === 0 ? i : "At path: " + c.join(".") + " -- " + i;
    super(u), Object.assign(this, o), this.name = this.constructor.name, this.failures = () => {
      var d;
      return (d = r) != null ? d : r = [e, ...t()];
    };
  }
}
function Dd(n) {
  return Dn(n) && typeof n[Symbol.iterator] == "function";
}
function Dn(n) {
  return typeof n == "object" && n != null;
}
function ln(n) {
  return typeof n == "string" ? JSON.stringify(n) : "" + n;
}
function Pd(n) {
  const {
    done: e,
    value: t
  } = n.next();
  return e ? void 0 : t;
}
function Fd(n, e, t, r) {
  if (n === !0)
    return;
  n === !1 ? n = {} : typeof n == "string" && (n = {
    message: n
  });
  const {
    path: i,
    branch: o
  } = e, {
    type: c
  } = t, {
    refinement: u,
    message: d = "Expected a value of type `" + c + "`" + (u ? " with refinement `" + u + "`" : "") + ", but received: `" + ln(r) + "`"
  } = n;
  return {
    value: r,
    type: c,
    refinement: u,
    key: i[i.length - 1],
    path: i,
    branch: o,
    ...n,
    message: d
  };
}
function* Ja(n, e, t, r) {
  Dd(n) || (n = [n]);
  for (const i of n) {
    const o = Fd(i, e, t, r);
    o && (yield o);
  }
}
function* ia(n, e, t = {}) {
  const {
    path: r = [],
    branch: i = [n],
    coerce: o = !1,
    mask: c = !1
  } = t, u = {
    path: r,
    branch: i
  };
  if (o && (n = e.coercer(n, u), c && e.type !== "type" && Dn(e.schema) && Dn(n) && !Array.isArray(n)))
    for (const w in n)
      e.schema[w] === void 0 && delete n[w];
  let d = !0;
  for (const w of e.validator(n, u))
    d = !1, yield [w, void 0];
  for (let [w, v, S] of e.entries(n, u)) {
    const T = ia(v, S, {
      path: w === void 0 ? r : [...r, w],
      branch: w === void 0 ? i : [...i, v],
      coerce: o,
      mask: c
    });
    for (const E of T)
      E[0] ? (d = !1, yield [E[0], void 0]) : o && (v = E[1], w === void 0 ? n = v : n instanceof Map ? n.set(w, v) : n instanceof Set ? n.add(v) : Dn(n) && (n[w] = v));
  }
  if (d)
    for (const w of e.refiner(n, u))
      d = !1, yield [w, void 0];
  d && (yield [void 0, n]);
}
class vn {
  constructor(e) {
    const {
      type: t,
      schema: r,
      validator: i,
      refiner: o,
      coercer: c = (d) => d,
      entries: u = function* () {
      }
    } = e;
    this.type = t, this.schema = r, this.entries = u, this.coercer = c, i ? this.validator = (d, w) => {
      const v = i(d, w);
      return Ja(v, w, this, d);
    } : this.validator = () => [], o ? this.refiner = (d, w) => {
      const v = o(d, w);
      return Ja(v, w, this, d);
    } : this.refiner = () => [];
  }
  assert(e) {
    return zd(e, this);
  }
  create(e) {
    return re(e, this);
  }
  is(e) {
    return Hu(e, this);
  }
  mask(e) {
    return Hd(e, this);
  }
  validate(e, t = {}) {
    return ei(e, this, t);
  }
}
function zd(n, e) {
  const t = ei(n, e);
  if (t[0])
    throw t[0];
}
function re(n, e) {
  const t = ei(n, e, {
    coerce: !0
  });
  if (t[0])
    throw t[0];
  return t[1];
}
function Hd(n, e) {
  const t = ei(n, e, {
    coerce: !0,
    mask: !0
  });
  if (t[0])
    throw t[0];
  return t[1];
}
function Hu(n, e) {
  return !ei(n, e)[0];
}
function ei(n, e, t = {}) {
  const r = ia(n, e, t), i = Pd(r);
  if (i[0])
    return [new Ud(i[0], function* () {
      for (const c of r)
        c[0] && (yield c[0]);
    }), void 0];
  {
    const o = i[1];
    return [void 0, o];
  }
}
function nr(n, e) {
  return new vn({
    type: n,
    schema: null,
    validator: e
  });
}
function Wd() {
  return nr("any", () => !0);
}
function ce(n) {
  return new vn({
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
      return Array.isArray(e) || "Expected an array value, but received: " + ln(e);
    }
  });
}
function Sn() {
  return nr("boolean", (n) => typeof n == "boolean");
}
function oa(n) {
  return nr("instance", (e) => e instanceof n || "Expected a `" + n.name + "` instance, but received: " + ln(e));
}
function Xe(n) {
  const e = ln(n), t = typeof n;
  return new vn({
    type: "literal",
    schema: t === "string" || t === "number" || t === "boolean" ? n : null,
    validator(r) {
      return r === n || "Expected the literal `" + e + "`, but received: " + ln(r);
    }
  });
}
function jd() {
  return nr("never", () => !1);
}
function de(n) {
  return new vn({
    ...n,
    validator: (e, t) => e === null || n.validator(e, t),
    refiner: (e, t) => e === null || n.refiner(e, t)
  });
}
function j() {
  return nr("number", (n) => typeof n == "number" && !isNaN(n) || "Expected a number, but received: " + ln(n));
}
function Se(n) {
  return new vn({
    ...n,
    validator: (e, t) => e === void 0 || n.validator(e, t),
    refiner: (e, t) => e === void 0 || n.refiner(e, t)
  });
}
function Wu(n, e) {
  return new vn({
    type: "record",
    schema: null,
    *entries(t) {
      if (Dn(t))
        for (const r in t) {
          const i = t[r];
          yield [r, r, n], yield [r, i, e];
        }
    },
    validator(t) {
      return Dn(t) || "Expected an object, but received: " + ln(t);
    }
  });
}
function te() {
  return nr("string", (n) => typeof n == "string" || "Expected a string, but received: " + ln(n));
}
function sa(n) {
  const e = jd();
  return new vn({
    type: "tuple",
    schema: null,
    *entries(t) {
      if (Array.isArray(t)) {
        const r = Math.max(n.length, t.length);
        for (let i = 0; i < r; i++)
          yield [i, t[i], n[i] || e];
      }
    },
    validator(t) {
      return Array.isArray(t) || "Expected an array, but received: " + ln(t);
    }
  });
}
function J(n) {
  const e = Object.keys(n);
  return new vn({
    type: "type",
    schema: n,
    *entries(t) {
      if (Dn(t))
        for (const r of e)
          yield [r, t[r], n[r]];
    },
    validator(t) {
      return Dn(t) || "Expected an object, but received: " + ln(t);
    }
  });
}
function Wt(n) {
  const e = n.map((t) => t.type).join(" | ");
  return new vn({
    type: "union",
    schema: null,
    validator(t, r) {
      const i = [];
      for (const o of n) {
        const [...c] = ia(t, o, r), [u] = c;
        if (u[0])
          for (const [d] of c)
            d && i.push(d);
        else
          return [];
      }
      return ["Expected the value to satisfy a union of `" + e + "`, but received: " + ln(t), ...i];
    }
  });
}
function ti() {
  return nr("unknown", () => !0);
}
function ni(n, e, t) {
  return new vn({
    ...n,
    coercer: (r, i) => Hu(r, e) ? n.coercer(t(r, i), i) : n.coercer(r, i)
  });
}
var aa = {}, Ki = { exports: {} };
(function(n) {
  function e(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }
  n.exports = e, n.exports.__esModule = !0, n.exports.default = n.exports;
})(Ki);
var jo = { exports: {} }, Xa;
function ca() {
  return Xa || (Xa = 1, function(n) {
    function e(r, i) {
      for (var o = 0; o < i.length; o++) {
        var c = i[o];
        c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(r, c.key, c);
      }
    }
    function t(r, i, o) {
      return i && e(r.prototype, i), o && e(r, o), Object.defineProperty(r, "prototype", {
        writable: !1
      }), r;
    }
    n.exports = t, n.exports.__esModule = !0, n.exports.default = n.exports;
  }(jo)), jo.exports;
}
var Go = { exports: {} }, $a;
function ua() {
  return $a || ($a = 1, function(n) {
    function e(t, r) {
      if (!(t instanceof r))
        throw new TypeError("Cannot call a class as a function");
    }
    n.exports = e, n.exports.__esModule = !0, n.exports.default = n.exports;
  }(Go)), Go.exports;
}
var qo = { exports: {} }, Qo = { exports: {} }, ec;
function Gd() {
  return ec || (ec = 1, function(n) {
    function e(t, r) {
      return n.exports = e = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, c) {
        return o.__proto__ = c, o;
      }, n.exports.__esModule = !0, n.exports.default = n.exports, e(t, r);
    }
    n.exports = e, n.exports.__esModule = !0, n.exports.default = n.exports;
  }(Qo)), Qo.exports;
}
var tc;
function la() {
  return tc || (tc = 1, function(n) {
    var e = Gd();
    function t(r, i) {
      if (typeof i != "function" && i !== null)
        throw new TypeError("Super expression must either be null or a function");
      r.prototype = Object.create(i && i.prototype, {
        constructor: {
          value: r,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(r, "prototype", {
        writable: !1
      }), i && e(r, i);
    }
    n.exports = t, n.exports.__esModule = !0, n.exports.default = n.exports;
  }(qo)), qo.exports;
}
var Yo = { exports: {} }, Ko = { exports: {} }, nc;
function fa() {
  return nc || (nc = 1, function(n) {
    function e(t) {
      return n.exports = e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
        return typeof r;
      } : function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, n.exports.__esModule = !0, n.exports.default = n.exports, e(t);
    }
    n.exports = e, n.exports.__esModule = !0, n.exports.default = n.exports;
  }(Ko)), Ko.exports;
}
var Vo = { exports: {} }, rc;
function qd() {
  return rc || (rc = 1, function(n) {
    function e(t) {
      if (t === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }
    n.exports = e, n.exports.__esModule = !0, n.exports.default = n.exports;
  }(Vo)), Vo.exports;
}
var ic;
function ha() {
  return ic || (ic = 1, function(n) {
    var e = fa().default, t = qd();
    function r(i, o) {
      if (o && (e(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return t(i);
    }
    n.exports = r, n.exports.__esModule = !0, n.exports.default = n.exports;
  }(Yo)), Yo.exports;
}
var Zo = { exports: {} }, oc;
function da() {
  return oc || (oc = 1, function(n) {
    function e(t) {
      return n.exports = e = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(i) {
        return i.__proto__ || Object.getPrototypeOf(i);
      }, n.exports.__esModule = !0, n.exports.default = n.exports, e(t);
    }
    n.exports = e, n.exports.__esModule = !0, n.exports.default = n.exports;
  }(Zo)), Zo.exports;
}
var Jo = {}, Vi = { exports: {} };
(function(n) {
  var e = Object.prototype.hasOwnProperty, t = "~";
  function r() {
  }
  Object.create && (r.prototype = /* @__PURE__ */ Object.create(null), new r().__proto__ || (t = !1));
  function i(d, w, v) {
    this.fn = d, this.context = w, this.once = v || !1;
  }
  function o(d, w, v, S, T) {
    if (typeof v != "function")
      throw new TypeError("The listener must be a function");
    var E = new i(v, S || d, T), _ = t ? t + w : w;
    return d._events[_] ? d._events[_].fn ? d._events[_] = [d._events[_], E] : d._events[_].push(E) : (d._events[_] = E, d._eventsCount++), d;
  }
  function c(d, w) {
    --d._eventsCount === 0 ? d._events = new r() : delete d._events[w];
  }
  function u() {
    this._events = new r(), this._eventsCount = 0;
  }
  u.prototype.eventNames = function() {
    var w = [], v, S;
    if (this._eventsCount === 0)
      return w;
    for (S in v = this._events)
      e.call(v, S) && w.push(t ? S.slice(1) : S);
    return Object.getOwnPropertySymbols ? w.concat(Object.getOwnPropertySymbols(v)) : w;
  }, u.prototype.listeners = function(w) {
    var v = t ? t + w : w, S = this._events[v];
    if (!S)
      return [];
    if (S.fn)
      return [S.fn];
    for (var T = 0, E = S.length, _ = new Array(E); T < E; T++)
      _[T] = S[T].fn;
    return _;
  }, u.prototype.listenerCount = function(w) {
    var v = t ? t + w : w, S = this._events[v];
    return S ? S.fn ? 1 : S.length : 0;
  }, u.prototype.emit = function(w, v, S, T, E, _) {
    var C = t ? t + w : w;
    if (!this._events[C])
      return !1;
    var U = this._events[C], P = arguments.length, z, N;
    if (U.fn) {
      switch (U.once && this.removeListener(w, U.fn, void 0, !0), P) {
        case 1:
          return U.fn.call(U.context), !0;
        case 2:
          return U.fn.call(U.context, v), !0;
        case 3:
          return U.fn.call(U.context, v, S), !0;
        case 4:
          return U.fn.call(U.context, v, S, T), !0;
        case 5:
          return U.fn.call(U.context, v, S, T, E), !0;
        case 6:
          return U.fn.call(U.context, v, S, T, E, _), !0;
      }
      for (N = 1, z = new Array(P - 1); N < P; N++)
        z[N - 1] = arguments[N];
      U.fn.apply(U.context, z);
    } else {
      var F = U.length, O;
      for (N = 0; N < F; N++)
        switch (U[N].once && this.removeListener(w, U[N].fn, void 0, !0), P) {
          case 1:
            U[N].fn.call(U[N].context);
            break;
          case 2:
            U[N].fn.call(U[N].context, v);
            break;
          case 3:
            U[N].fn.call(U[N].context, v, S);
            break;
          case 4:
            U[N].fn.call(U[N].context, v, S, T);
            break;
          default:
            if (!z)
              for (O = 1, z = new Array(P - 1); O < P; O++)
                z[O - 1] = arguments[O];
            U[N].fn.apply(U[N].context, z);
        }
    }
    return !0;
  }, u.prototype.on = function(w, v, S) {
    return o(this, w, v, S, !1);
  }, u.prototype.once = function(w, v, S) {
    return o(this, w, v, S, !0);
  }, u.prototype.removeListener = function(w, v, S, T) {
    var E = t ? t + w : w;
    if (!this._events[E])
      return this;
    if (!v)
      return c(this, E), this;
    var _ = this._events[E];
    if (_.fn)
      _.fn === v && (!T || _.once) && (!S || _.context === S) && c(this, E);
    else {
      for (var C = 0, U = [], P = _.length; C < P; C++)
        (_[C].fn !== v || T && !_[C].once || S && _[C].context !== S) && U.push(_[C]);
      U.length ? this._events[E] = U.length === 1 ? U[0] : U : c(this, E);
    }
    return this;
  }, u.prototype.removeAllListeners = function(w) {
    var v;
    return w ? (v = t ? t + w : w, this._events[v] && c(this, v)) : (this._events = new r(), this._eventsCount = 0), this;
  }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = t, u.EventEmitter = u, n.exports = u;
})(Vi);
const Qd = Vi.exports;
var sc;
function Yd() {
  return sc || (sc = 1, function(n) {
    var e = Ki.exports;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = S;
    var t = e(ua()), r = e(ca()), i = e(la()), o = e(ha()), c = e(da()), u = Vi.exports;
    function d(T) {
      var E = w();
      return function() {
        var C = (0, c.default)(T), U;
        if (E) {
          var P = (0, c.default)(this).constructor;
          U = Reflect.construct(C, arguments, P);
        } else
          U = C.apply(this, arguments);
        return (0, o.default)(this, U);
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
    var v = /* @__PURE__ */ function(T) {
      (0, i.default)(_, T);
      var E = d(_);
      function _(C, U, P) {
        var z;
        return (0, t.default)(this, _), z = E.call(this), z.socket = new window.WebSocket(C, P), z.socket.onopen = function() {
          return z.emit("open");
        }, z.socket.onmessage = function(N) {
          return z.emit("message", N.data);
        }, z.socket.onerror = function(N) {
          return z.emit("error", N);
        }, z.socket.onclose = function(N) {
          z.emit("close", N.code, N.reason);
        }, z;
      }
      return (0, r.default)(_, [{
        key: "send",
        value: function(U, P, z) {
          var N = z || P;
          try {
            this.socket.send(U), N();
          } catch (F) {
            N(F);
          }
        }
      }, {
        key: "close",
        value: function(U, P) {
          this.socket.close(U, P);
        }
      }, {
        key: "addEventListener",
        value: function(U, P, z) {
          this.socket.addEventListener(U, P, z);
        }
      }]), _;
    }(u.EventEmitter);
    function S(T, E) {
      return new v(T, E);
    }
  }(Jo)), Jo;
}
var Xo = {}, $o = { exports: {} }, ac;
function Kd() {
  return ac || (ac = 1, function(n) {
    var e = fa().default;
    function t() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
      n.exports = t = function() {
        return r;
      }, n.exports.__esModule = !0, n.exports.default = n.exports;
      var r = {}, i = Object.prototype, o = i.hasOwnProperty, c = typeof Symbol == "function" ? Symbol : {}, u = c.iterator || "@@iterator", d = c.asyncIterator || "@@asyncIterator", w = c.toStringTag || "@@toStringTag";
      function v(I, l, p) {
        return Object.defineProperty(I, l, {
          value: p,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }), I[l];
      }
      try {
        v({}, "");
      } catch {
        v = function(p, m, y) {
          return p[m] = y;
        };
      }
      function S(I, l, p, m) {
        var y = l && l.prototype instanceof _ ? l : _, x = Object.create(y.prototype), L = new be(m || []);
        return x._invoke = function(R, b, h) {
          var M = "suspendedStart";
          return function(Q, Z) {
            if (M === "executing")
              throw new Error("Generator is already running");
            if (M === "completed") {
              if (Q === "throw")
                throw Z;
              return ve();
            }
            for (h.method = Q, h.arg = Z; ; ) {
              var V = h.delegate;
              if (V) {
                var oe = G(V, h);
                if (oe) {
                  if (oe === E)
                    continue;
                  return oe;
                }
              }
              if (h.method === "next")
                h.sent = h._sent = h.arg;
              else if (h.method === "throw") {
                if (M === "suspendedStart")
                  throw M = "completed", h.arg;
                h.dispatchException(h.arg);
              } else
                h.method === "return" && h.abrupt("return", h.arg);
              M = "executing";
              var $ = T(R, b, h);
              if ($.type === "normal") {
                if (M = h.done ? "completed" : "suspendedYield", $.arg === E)
                  continue;
                return {
                  value: $.arg,
                  done: h.done
                };
              }
              $.type === "throw" && (M = "completed", h.method = "throw", h.arg = $.arg);
            }
          };
        }(I, p, L), x;
      }
      function T(I, l, p) {
        try {
          return {
            type: "normal",
            arg: I.call(l, p)
          };
        } catch (m) {
          return {
            type: "throw",
            arg: m
          };
        }
      }
      r.wrap = S;
      var E = {};
      function _() {
      }
      function C() {
      }
      function U() {
      }
      var P = {};
      v(P, u, function() {
        return this;
      });
      var z = Object.getPrototypeOf, N = z && z(z(pe([])));
      N && N !== i && o.call(N, u) && (P = N);
      var F = U.prototype = _.prototype = Object.create(P);
      function O(I) {
        ["next", "throw", "return"].forEach(function(l) {
          v(I, l, function(p) {
            return this._invoke(l, p);
          });
        });
      }
      function W(I, l) {
        function p(y, x, L, R) {
          var b = T(I[y], I, x);
          if (b.type !== "throw") {
            var h = b.arg, M = h.value;
            return M && e(M) == "object" && o.call(M, "__await") ? l.resolve(M.__await).then(function(Q) {
              p("next", Q, L, R);
            }, function(Q) {
              p("throw", Q, L, R);
            }) : l.resolve(M).then(function(Q) {
              h.value = Q, L(h);
            }, function(Q) {
              return p("throw", Q, L, R);
            });
          }
          R(b.arg);
        }
        var m;
        this._invoke = function(y, x) {
          function L() {
            return new l(function(R, b) {
              p(y, x, R, b);
            });
          }
          return m = m ? m.then(L, L) : L();
        };
      }
      function G(I, l) {
        var p = I.iterator[l.method];
        if (p === void 0) {
          if (l.delegate = null, l.method === "throw") {
            if (I.iterator.return && (l.method = "return", l.arg = void 0, G(I, l), l.method === "throw"))
              return E;
            l.method = "throw", l.arg = new TypeError("The iterator does not provide a 'throw' method");
          }
          return E;
        }
        var m = T(p, I.iterator, l.arg);
        if (m.type === "throw")
          return l.method = "throw", l.arg = m.arg, l.delegate = null, E;
        var y = m.arg;
        return y ? y.done ? (l[I.resultName] = y.value, l.next = I.nextLoc, l.method !== "return" && (l.method = "next", l.arg = void 0), l.delegate = null, E) : y : (l.method = "throw", l.arg = new TypeError("iterator result is not an object"), l.delegate = null, E);
      }
      function q(I) {
        var l = {
          tryLoc: I[0]
        };
        1 in I && (l.catchLoc = I[1]), 2 in I && (l.finallyLoc = I[2], l.afterLoc = I[3]), this.tryEntries.push(l);
      }
      function le(I) {
        var l = I.completion || {};
        l.type = "normal", delete l.arg, I.completion = l;
      }
      function be(I) {
        this.tryEntries = [{
          tryLoc: "root"
        }], I.forEach(q, this), this.reset(!0);
      }
      function pe(I) {
        if (I) {
          var l = I[u];
          if (l)
            return l.call(I);
          if (typeof I.next == "function")
            return I;
          if (!isNaN(I.length)) {
            var p = -1, m = function y() {
              for (; ++p < I.length; )
                if (o.call(I, p))
                  return y.value = I[p], y.done = !1, y;
              return y.value = void 0, y.done = !0, y;
            };
            return m.next = m;
          }
        }
        return {
          next: ve
        };
      }
      function ve() {
        return {
          value: void 0,
          done: !0
        };
      }
      return C.prototype = U, v(F, "constructor", U), v(U, "constructor", C), C.displayName = v(U, w, "GeneratorFunction"), r.isGeneratorFunction = function(I) {
        var l = typeof I == "function" && I.constructor;
        return !!l && (l === C || (l.displayName || l.name) === "GeneratorFunction");
      }, r.mark = function(I) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(I, U) : (I.__proto__ = U, v(I, w, "GeneratorFunction")), I.prototype = Object.create(F), I;
      }, r.awrap = function(I) {
        return {
          __await: I
        };
      }, O(W.prototype), v(W.prototype, d, function() {
        return this;
      }), r.AsyncIterator = W, r.async = function(I, l, p, m, y) {
        y === void 0 && (y = Promise);
        var x = new W(S(I, l, p, m), y);
        return r.isGeneratorFunction(l) ? x : x.next().then(function(L) {
          return L.done ? L.value : x.next();
        });
      }, O(F), v(F, w, "Generator"), v(F, u, function() {
        return this;
      }), v(F, "toString", function() {
        return "[object Generator]";
      }), r.keys = function(I) {
        var l = [];
        for (var p in I)
          l.push(p);
        return l.reverse(), function m() {
          for (; l.length; ) {
            var y = l.pop();
            if (y in I)
              return m.value = y, m.done = !1, m;
          }
          return m.done = !0, m;
        };
      }, r.values = pe, be.prototype = {
        constructor: be,
        reset: function(l) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(le), !l)
            for (var p in this)
              p.charAt(0) === "t" && o.call(this, p) && !isNaN(+p.slice(1)) && (this[p] = void 0);
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
          var p = this;
          function m(h, M) {
            return L.type = "throw", L.arg = l, p.next = h, M && (p.method = "next", p.arg = void 0), !!M;
          }
          for (var y = this.tryEntries.length - 1; y >= 0; --y) {
            var x = this.tryEntries[y], L = x.completion;
            if (x.tryLoc === "root")
              return m("end");
            if (x.tryLoc <= this.prev) {
              var R = o.call(x, "catchLoc"), b = o.call(x, "finallyLoc");
              if (R && b) {
                if (this.prev < x.catchLoc)
                  return m(x.catchLoc, !0);
                if (this.prev < x.finallyLoc)
                  return m(x.finallyLoc);
              } else if (R) {
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
        abrupt: function(l, p) {
          for (var m = this.tryEntries.length - 1; m >= 0; --m) {
            var y = this.tryEntries[m];
            if (y.tryLoc <= this.prev && o.call(y, "finallyLoc") && this.prev < y.finallyLoc) {
              var x = y;
              break;
            }
          }
          x && (l === "break" || l === "continue") && x.tryLoc <= p && p <= x.finallyLoc && (x = null);
          var L = x ? x.completion : {};
          return L.type = l, L.arg = p, x ? (this.method = "next", this.next = x.finallyLoc, E) : this.complete(L);
        },
        complete: function(l, p) {
          if (l.type === "throw")
            throw l.arg;
          return l.type === "break" || l.type === "continue" ? this.next = l.arg : l.type === "return" ? (this.rval = this.arg = l.arg, this.method = "return", this.next = "end") : l.type === "normal" && p && (this.next = p), E;
        },
        finish: function(l) {
          for (var p = this.tryEntries.length - 1; p >= 0; --p) {
            var m = this.tryEntries[p];
            if (m.finallyLoc === l)
              return this.complete(m.completion, m.afterLoc), le(m), E;
          }
        },
        catch: function(l) {
          for (var p = this.tryEntries.length - 1; p >= 0; --p) {
            var m = this.tryEntries[p];
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
        delegateYield: function(l, p, m) {
          return this.delegate = {
            iterator: pe(l),
            resultName: p,
            nextLoc: m
          }, this.method === "next" && (this.arg = void 0), E;
        }
      }, r;
    }
    n.exports = t, n.exports.__esModule = !0, n.exports.default = n.exports;
  }($o)), $o.exports;
}
var es, cc;
function Vd() {
  if (cc)
    return es;
  cc = 1;
  var n = Kd()();
  es = n;
  try {
    regeneratorRuntime = n;
  } catch {
    typeof globalThis == "object" ? globalThis.regeneratorRuntime = n : Function("r", "regeneratorRuntime = r")(n);
  }
  return es;
}
var ts = { exports: {} }, uc;
function Zd() {
  return uc || (uc = 1, function(n) {
    function e(r, i, o, c, u, d, w) {
      try {
        var v = r[d](w), S = v.value;
      } catch (T) {
        o(T);
        return;
      }
      v.done ? i(S) : Promise.resolve(S).then(c, u);
    }
    function t(r) {
      return function() {
        var i = this, o = arguments;
        return new Promise(function(c, u) {
          var d = r.apply(i, o);
          function w(S) {
            e(d, c, u, w, v, "next", S);
          }
          function v(S) {
            e(d, c, u, w, v, "throw", S);
          }
          w(void 0);
        });
      };
    }
    n.exports = t, n.exports.__esModule = !0, n.exports.default = n.exports;
  }(ts)), ts.exports;
}
var lc;
function Jd() {
  return lc || (lc = 1, function(n) {
    var e = Ki.exports;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var t = e(Vd()), r = e(Zd()), i = e(fa()), o = e(ua()), c = e(ca()), u = e(la()), d = e(ha()), w = e(da()), v = Vi.exports;
    function S(C) {
      var U = T();
      return function() {
        var z = (0, w.default)(C), N;
        if (U) {
          var F = (0, w.default)(this).constructor;
          N = Reflect.construct(z, arguments, F);
        } else
          N = z.apply(this, arguments);
        return (0, d.default)(this, N);
      };
    }
    function T() {
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
    var E = function(C, U) {
      var P = {};
      for (var z in C)
        Object.prototype.hasOwnProperty.call(C, z) && U.indexOf(z) < 0 && (P[z] = C[z]);
      if (C != null && typeof Object.getOwnPropertySymbols == "function")
        for (var N = 0, z = Object.getOwnPropertySymbols(C); N < z.length; N++)
          U.indexOf(z[N]) < 0 && Object.prototype.propertyIsEnumerable.call(C, z[N]) && (P[z[N]] = C[z[N]]);
      return P;
    }, _ = /* @__PURE__ */ function(C) {
      (0, u.default)(P, C);
      var U = S(P);
      function P(z) {
        var N, F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "ws://localhost:8080", O = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, W = arguments.length > 3 ? arguments[3] : void 0;
        (0, o.default)(this, P);
        var G = O.autoconnect, q = G === void 0 ? !0 : G, le = O.reconnect, be = le === void 0 ? !0 : le, pe = O.reconnect_interval, ve = pe === void 0 ? 1e3 : pe, I = O.max_reconnects, l = I === void 0 ? 5 : I, p = E(O, ["autoconnect", "reconnect", "reconnect_interval", "max_reconnects"]);
        return N = U.call(this), N.webSocketFactory = z, N.queue = {}, N.rpc_id = 0, N.address = F, N.autoconnect = q, N.ready = !1, N.reconnect = be, N.reconnect_interval = ve, N.max_reconnects = l, N.rest_options = p, N.current_reconnects = 0, N.generate_request_id = W || function() {
          return ++N.rpc_id;
        }, N.autoconnect && N._connect(N.address, Object.assign({
          autoconnect: N.autoconnect,
          reconnect: N.reconnect,
          reconnect_interval: N.reconnect_interval,
          max_reconnects: N.max_reconnects
        }, N.rest_options)), N;
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
        value: function(N, F, O, W) {
          var G = this;
          return !W && (0, i.default)(O) === "object" && (W = O, O = null), new Promise(function(q, le) {
            if (!G.ready)
              return le(new Error("socket not ready"));
            var be = G.generate_request_id(N, F), pe = {
              jsonrpc: "2.0",
              method: N,
              params: F || null,
              id: be
            };
            G.socket.send(JSON.stringify(pe), W, function(ve) {
              if (ve)
                return le(ve);
              G.queue[be] = {
                promise: [q, le]
              }, O && (G.queue[be].timeout = setTimeout(function() {
                delete G.queue[be], le(new Error("reply timeout"));
              }, O));
            });
          });
        }
      }, {
        key: "login",
        value: function() {
          var z = (0, r.default)(/* @__PURE__ */ t.default.mark(function F(O) {
            var W;
            return t.default.wrap(function(q) {
              for (; ; )
                switch (q.prev = q.next) {
                  case 0:
                    return q.next = 2, this.call("rpc.login", O);
                  case 2:
                    if (W = q.sent, W) {
                      q.next = 5;
                      break;
                    }
                    throw new Error("authentication failed");
                  case 5:
                    return q.abrupt("return", W);
                  case 6:
                  case "end":
                    return q.stop();
                }
            }, F, this);
          }));
          function N(F) {
            return z.apply(this, arguments);
          }
          return N;
        }()
      }, {
        key: "listMethods",
        value: function() {
          var z = (0, r.default)(/* @__PURE__ */ t.default.mark(function F() {
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
            }, F, this);
          }));
          function N() {
            return z.apply(this, arguments);
          }
          return N;
        }()
      }, {
        key: "notify",
        value: function(N, F) {
          var O = this;
          return new Promise(function(W, G) {
            if (!O.ready)
              return G(new Error("socket not ready"));
            var q = {
              jsonrpc: "2.0",
              method: N,
              params: F || null
            };
            O.socket.send(JSON.stringify(q), function(le) {
              if (le)
                return G(le);
              W();
            });
          });
        }
      }, {
        key: "subscribe",
        value: function() {
          var z = (0, r.default)(/* @__PURE__ */ t.default.mark(function F(O) {
            var W;
            return t.default.wrap(function(q) {
              for (; ; )
                switch (q.prev = q.next) {
                  case 0:
                    return typeof O == "string" && (O = [O]), q.next = 3, this.call("rpc.on", O);
                  case 3:
                    if (W = q.sent, !(typeof O == "string" && W[O] !== "ok")) {
                      q.next = 6;
                      break;
                    }
                    throw new Error("Failed subscribing to an event '" + O + "' with: " + W[O]);
                  case 6:
                    return q.abrupt("return", W);
                  case 7:
                  case "end":
                    return q.stop();
                }
            }, F, this);
          }));
          function N(F) {
            return z.apply(this, arguments);
          }
          return N;
        }()
      }, {
        key: "unsubscribe",
        value: function() {
          var z = (0, r.default)(/* @__PURE__ */ t.default.mark(function F(O) {
            var W;
            return t.default.wrap(function(q) {
              for (; ; )
                switch (q.prev = q.next) {
                  case 0:
                    return typeof O == "string" && (O = [O]), q.next = 3, this.call("rpc.off", O);
                  case 3:
                    if (W = q.sent, !(typeof O == "string" && W[O] !== "ok")) {
                      q.next = 6;
                      break;
                    }
                    throw new Error("Failed unsubscribing from an event with: " + W);
                  case 6:
                    return q.abrupt("return", W);
                  case 7:
                  case "end":
                    return q.stop();
                }
            }, F, this);
          }));
          function N(F) {
            return z.apply(this, arguments);
          }
          return N;
        }()
      }, {
        key: "close",
        value: function(N, F) {
          this.socket.close(N || 1e3, F);
        }
      }, {
        key: "_connect",
        value: function(N, F) {
          var O = this;
          this.socket = this.webSocketFactory(N, F), this.socket.addEventListener("open", function() {
            O.ready = !0, O.emit("open"), O.current_reconnects = 0;
          }), this.socket.addEventListener("message", function(W) {
            var G = W.data;
            G instanceof ArrayBuffer && (G = Buffer.from(G).toString());
            try {
              G = JSON.parse(G);
            } catch {
              return;
            }
            if (G.notification && O.listeners(G.notification).length) {
              if (!Object.keys(G.params).length)
                return O.emit(G.notification);
              var q = [G.notification];
              if (G.params.constructor === Object)
                q.push(G.params);
              else
                for (var le = 0; le < G.params.length; le++)
                  q.push(G.params[le]);
              return Promise.resolve().then(function() {
                O.emit.apply(O, q);
              });
            }
            if (!O.queue[G.id])
              return G.method && G.params ? Promise.resolve().then(function() {
                O.emit(G.method, G.params);
              }) : void 0;
            "error" in G == "result" in G && O.queue[G.id].promise[1](new Error('Server response malformed. Response must include either "result" or "error", but not both.')), O.queue[G.id].timeout && clearTimeout(O.queue[G.id].timeout), G.error ? O.queue[G.id].promise[1](G.error) : O.queue[G.id].promise[0](G.result), delete O.queue[G.id];
          }), this.socket.addEventListener("error", function(W) {
            return O.emit("error", W);
          }), this.socket.addEventListener("close", function(W) {
            var G = W.code, q = W.reason;
            O.ready && setTimeout(function() {
              return O.emit("close", G, q);
            }, 0), O.ready = !1, O.socket = void 0, G !== 1e3 && (O.current_reconnects++, O.reconnect && (O.max_reconnects > O.current_reconnects || O.max_reconnects === 0) && setTimeout(function() {
              return O._connect(N, F);
            }, O.reconnect_interval));
          });
        }
      }]), P;
    }(v.EventEmitter);
    n.default = _;
  }(Xo)), Xo;
}
var rr = Ki.exports;
Object.defineProperty(aa, "__esModule", {
  value: !0
});
var ju = aa.Client = void 0, Xd = rr(ca()), $d = rr(ua()), e0 = rr(la()), t0 = rr(ha()), fc = rr(da()), n0 = rr(Yd()), r0 = rr(Jd());
function i0(n) {
  var e = o0();
  return function() {
    var r = (0, fc.default)(n), i;
    if (e) {
      var o = (0, fc.default)(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else
      i = r.apply(this, arguments);
    return (0, t0.default)(this, i);
  };
}
function o0() {
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
var s0 = /* @__PURE__ */ function(n) {
  (0, e0.default)(t, n);
  var e = i0(t);
  function t() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ws://localhost:8080", i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = i.autoconnect, c = o === void 0 ? !0 : o, u = i.reconnect, d = u === void 0 ? !0 : u, w = i.reconnect_interval, v = w === void 0 ? 1e3 : w, S = i.max_reconnects, T = S === void 0 ? 5 : S, E = arguments.length > 2 ? arguments[2] : void 0;
    return (0, $d.default)(this, t), e.call(this, n0.default, r, {
      autoconnect: c,
      reconnect: d,
      reconnect_interval: v,
      max_reconnects: T
    }, E);
  }
  return (0, Xd.default)(t);
}(r0.default);
ju = aa.Client = s0;
var ui, a0 = new Uint8Array(16);
function Gu() {
  if (!ui && (ui = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !ui))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return ui(a0);
}
const c0 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function Zi(n) {
  return typeof n == "string" && c0.test(n);
}
var Bt = [];
for (var ns = 0; ns < 256; ++ns)
  Bt.push((ns + 256).toString(16).substr(1));
function Ji(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = (Bt[n[e + 0]] + Bt[n[e + 1]] + Bt[n[e + 2]] + Bt[n[e + 3]] + "-" + Bt[n[e + 4]] + Bt[n[e + 5]] + "-" + Bt[n[e + 6]] + Bt[n[e + 7]] + "-" + Bt[n[e + 8]] + Bt[n[e + 9]] + "-" + Bt[n[e + 10]] + Bt[n[e + 11]] + Bt[n[e + 12]] + Bt[n[e + 13]] + Bt[n[e + 14]] + Bt[n[e + 15]]).toLowerCase();
  if (!Zi(t))
    throw TypeError("Stringified UUID is invalid");
  return t;
}
var hc, rs, is = 0, os = 0;
function u0(n, e, t) {
  var r = e && t || 0, i = e || new Array(16);
  n = n || {};
  var o = n.node || hc, c = n.clockseq !== void 0 ? n.clockseq : rs;
  if (o == null || c == null) {
    var u = n.random || (n.rng || Gu)();
    o == null && (o = hc = [u[0] | 1, u[1], u[2], u[3], u[4], u[5]]), c == null && (c = rs = (u[6] << 8 | u[7]) & 16383);
  }
  var d = n.msecs !== void 0 ? n.msecs : Date.now(), w = n.nsecs !== void 0 ? n.nsecs : os + 1, v = d - is + (w - os) / 1e4;
  if (v < 0 && n.clockseq === void 0 && (c = c + 1 & 16383), (v < 0 || d > is) && n.nsecs === void 0 && (w = 0), w >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  is = d, os = w, rs = c, d += 122192928e5;
  var S = ((d & 268435455) * 1e4 + w) % 4294967296;
  i[r++] = S >>> 24 & 255, i[r++] = S >>> 16 & 255, i[r++] = S >>> 8 & 255, i[r++] = S & 255;
  var T = d / 4294967296 * 1e4 & 268435455;
  i[r++] = T >>> 8 & 255, i[r++] = T & 255, i[r++] = T >>> 24 & 15 | 16, i[r++] = T >>> 16 & 255, i[r++] = c >>> 8 | 128, i[r++] = c & 255;
  for (var E = 0; E < 6; ++E)
    i[r + E] = o[E];
  return e || Ji(i);
}
function qu(n) {
  if (!Zi(n))
    throw TypeError("Invalid UUID");
  var e, t = new Uint8Array(16);
  return t[0] = (e = parseInt(n.slice(0, 8), 16)) >>> 24, t[1] = e >>> 16 & 255, t[2] = e >>> 8 & 255, t[3] = e & 255, t[4] = (e = parseInt(n.slice(9, 13), 16)) >>> 8, t[5] = e & 255, t[6] = (e = parseInt(n.slice(14, 18), 16)) >>> 8, t[7] = e & 255, t[8] = (e = parseInt(n.slice(19, 23), 16)) >>> 8, t[9] = e & 255, t[10] = (e = parseInt(n.slice(24, 36), 16)) / 1099511627776 & 255, t[11] = e / 4294967296 & 255, t[12] = e >>> 24 & 255, t[13] = e >>> 16 & 255, t[14] = e >>> 8 & 255, t[15] = e & 255, t;
}
function l0(n) {
  n = unescape(encodeURIComponent(n));
  for (var e = [], t = 0; t < n.length; ++t)
    e.push(n.charCodeAt(t));
  return e;
}
var f0 = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", h0 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function Qu(n, e, t) {
  function r(i, o, c, u) {
    if (typeof i == "string" && (i = l0(i)), typeof o == "string" && (o = qu(o)), o.length !== 16)
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    var d = new Uint8Array(16 + i.length);
    if (d.set(o), d.set(i, o.length), d = t(d), d[6] = d[6] & 15 | e, d[8] = d[8] & 63 | 128, c) {
      u = u || 0;
      for (var w = 0; w < 16; ++w)
        c[u + w] = d[w];
      return c;
    }
    return Ji(d);
  }
  try {
    r.name = n;
  } catch {
  }
  return r.DNS = f0, r.URL = h0, r;
}
function d0(n) {
  if (typeof n == "string") {
    var e = unescape(encodeURIComponent(n));
    n = new Uint8Array(e.length);
    for (var t = 0; t < e.length; ++t)
      n[t] = e.charCodeAt(t);
  }
  return p0(g0(y0(n), n.length * 8));
}
function p0(n) {
  for (var e = [], t = n.length * 32, r = "0123456789abcdef", i = 0; i < t; i += 8) {
    var o = n[i >> 5] >>> i % 32 & 255, c = parseInt(r.charAt(o >>> 4 & 15) + r.charAt(o & 15), 16);
    e.push(c);
  }
  return e;
}
function Yu(n) {
  return (n + 64 >>> 9 << 4) + 14 + 1;
}
function g0(n, e) {
  n[e >> 5] |= 128 << e % 32, n[Yu(e) - 1] = e;
  for (var t = 1732584193, r = -271733879, i = -1732584194, o = 271733878, c = 0; c < n.length; c += 16) {
    var u = t, d = r, w = i, v = o;
    t = kt(t, r, i, o, n[c], 7, -680876936), o = kt(o, t, r, i, n[c + 1], 12, -389564586), i = kt(i, o, t, r, n[c + 2], 17, 606105819), r = kt(r, i, o, t, n[c + 3], 22, -1044525330), t = kt(t, r, i, o, n[c + 4], 7, -176418897), o = kt(o, t, r, i, n[c + 5], 12, 1200080426), i = kt(i, o, t, r, n[c + 6], 17, -1473231341), r = kt(r, i, o, t, n[c + 7], 22, -45705983), t = kt(t, r, i, o, n[c + 8], 7, 1770035416), o = kt(o, t, r, i, n[c + 9], 12, -1958414417), i = kt(i, o, t, r, n[c + 10], 17, -42063), r = kt(r, i, o, t, n[c + 11], 22, -1990404162), t = kt(t, r, i, o, n[c + 12], 7, 1804603682), o = kt(o, t, r, i, n[c + 13], 12, -40341101), i = kt(i, o, t, r, n[c + 14], 17, -1502002290), r = kt(r, i, o, t, n[c + 15], 22, 1236535329), t = Nt(t, r, i, o, n[c + 1], 5, -165796510), o = Nt(o, t, r, i, n[c + 6], 9, -1069501632), i = Nt(i, o, t, r, n[c + 11], 14, 643717713), r = Nt(r, i, o, t, n[c], 20, -373897302), t = Nt(t, r, i, o, n[c + 5], 5, -701558691), o = Nt(o, t, r, i, n[c + 10], 9, 38016083), i = Nt(i, o, t, r, n[c + 15], 14, -660478335), r = Nt(r, i, o, t, n[c + 4], 20, -405537848), t = Nt(t, r, i, o, n[c + 9], 5, 568446438), o = Nt(o, t, r, i, n[c + 14], 9, -1019803690), i = Nt(i, o, t, r, n[c + 3], 14, -187363961), r = Nt(r, i, o, t, n[c + 8], 20, 1163531501), t = Nt(t, r, i, o, n[c + 13], 5, -1444681467), o = Nt(o, t, r, i, n[c + 2], 9, -51403784), i = Nt(i, o, t, r, n[c + 7], 14, 1735328473), r = Nt(r, i, o, t, n[c + 12], 20, -1926607734), t = Ot(t, r, i, o, n[c + 5], 4, -378558), o = Ot(o, t, r, i, n[c + 8], 11, -2022574463), i = Ot(i, o, t, r, n[c + 11], 16, 1839030562), r = Ot(r, i, o, t, n[c + 14], 23, -35309556), t = Ot(t, r, i, o, n[c + 1], 4, -1530992060), o = Ot(o, t, r, i, n[c + 4], 11, 1272893353), i = Ot(i, o, t, r, n[c + 7], 16, -155497632), r = Ot(r, i, o, t, n[c + 10], 23, -1094730640), t = Ot(t, r, i, o, n[c + 13], 4, 681279174), o = Ot(o, t, r, i, n[c], 11, -358537222), i = Ot(i, o, t, r, n[c + 3], 16, -722521979), r = Ot(r, i, o, t, n[c + 6], 23, 76029189), t = Ot(t, r, i, o, n[c + 9], 4, -640364487), o = Ot(o, t, r, i, n[c + 12], 11, -421815835), i = Ot(i, o, t, r, n[c + 15], 16, 530742520), r = Ot(r, i, o, t, n[c + 2], 23, -995338651), t = Lt(t, r, i, o, n[c], 6, -198630844), o = Lt(o, t, r, i, n[c + 7], 10, 1126891415), i = Lt(i, o, t, r, n[c + 14], 15, -1416354905), r = Lt(r, i, o, t, n[c + 5], 21, -57434055), t = Lt(t, r, i, o, n[c + 12], 6, 1700485571), o = Lt(o, t, r, i, n[c + 3], 10, -1894986606), i = Lt(i, o, t, r, n[c + 10], 15, -1051523), r = Lt(r, i, o, t, n[c + 1], 21, -2054922799), t = Lt(t, r, i, o, n[c + 8], 6, 1873313359), o = Lt(o, t, r, i, n[c + 15], 10, -30611744), i = Lt(i, o, t, r, n[c + 6], 15, -1560198380), r = Lt(r, i, o, t, n[c + 13], 21, 1309151649), t = Lt(t, r, i, o, n[c + 4], 6, -145523070), o = Lt(o, t, r, i, n[c + 11], 10, -1120210379), i = Lt(i, o, t, r, n[c + 2], 15, 718787259), r = Lt(r, i, o, t, n[c + 9], 21, -343485551), t = Ln(t, u), r = Ln(r, d), i = Ln(i, w), o = Ln(o, v);
  }
  return [t, r, i, o];
}
function y0(n) {
  if (n.length === 0)
    return [];
  for (var e = n.length * 8, t = new Uint32Array(Yu(e)), r = 0; r < e; r += 8)
    t[r >> 5] |= (n[r / 8] & 255) << r % 32;
  return t;
}
function Ln(n, e) {
  var t = (n & 65535) + (e & 65535), r = (n >> 16) + (e >> 16) + (t >> 16);
  return r << 16 | t & 65535;
}
function w0(n, e) {
  return n << e | n >>> 32 - e;
}
function Xi(n, e, t, r, i, o) {
  return Ln(w0(Ln(Ln(e, n), Ln(r, o)), i), t);
}
function kt(n, e, t, r, i, o, c) {
  return Xi(e & t | ~e & r, n, e, i, o, c);
}
function Nt(n, e, t, r, i, o, c) {
  return Xi(e & r | t & ~r, n, e, i, o, c);
}
function Ot(n, e, t, r, i, o, c) {
  return Xi(e ^ t ^ r, n, e, i, o, c);
}
function Lt(n, e, t, r, i, o, c) {
  return Xi(t ^ (e | ~r), n, e, i, o, c);
}
var m0 = Qu("v3", 48, d0);
const b0 = m0;
function A0(n, e, t) {
  n = n || {};
  var r = n.random || (n.rng || Gu)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    t = t || 0;
    for (var i = 0; i < 16; ++i)
      e[t + i] = r[i];
    return e;
  }
  return Ji(r);
}
function v0(n, e, t, r) {
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
function ss(n, e) {
  return n << e | n >>> 32 - e;
}
function E0(n) {
  var e = [1518500249, 1859775393, 2400959708, 3395469782], t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof n == "string") {
    var r = unescape(encodeURIComponent(n));
    n = [];
    for (var i = 0; i < r.length; ++i)
      n.push(r.charCodeAt(i));
  } else
    Array.isArray(n) || (n = Array.prototype.slice.call(n));
  n.push(128);
  for (var o = n.length / 4 + 2, c = Math.ceil(o / 16), u = new Array(c), d = 0; d < c; ++d) {
    for (var w = new Uint32Array(16), v = 0; v < 16; ++v)
      w[v] = n[d * 64 + v * 4] << 24 | n[d * 64 + v * 4 + 1] << 16 | n[d * 64 + v * 4 + 2] << 8 | n[d * 64 + v * 4 + 3];
    u[d] = w;
  }
  u[c - 1][14] = (n.length - 1) * 8 / Math.pow(2, 32), u[c - 1][14] = Math.floor(u[c - 1][14]), u[c - 1][15] = (n.length - 1) * 8 & 4294967295;
  for (var S = 0; S < c; ++S) {
    for (var T = new Uint32Array(80), E = 0; E < 16; ++E)
      T[E] = u[S][E];
    for (var _ = 16; _ < 80; ++_)
      T[_] = ss(T[_ - 3] ^ T[_ - 8] ^ T[_ - 14] ^ T[_ - 16], 1);
    for (var C = t[0], U = t[1], P = t[2], z = t[3], N = t[4], F = 0; F < 80; ++F) {
      var O = Math.floor(F / 20), W = ss(C, 5) + v0(O, U, P, z) + N + e[O] + T[F] >>> 0;
      N = z, z = P, P = ss(U, 30) >>> 0, U = C, C = W;
    }
    t[0] = t[0] + C >>> 0, t[1] = t[1] + U >>> 0, t[2] = t[2] + P >>> 0, t[3] = t[3] + z >>> 0, t[4] = t[4] + N >>> 0;
  }
  return [t[0] >> 24 & 255, t[0] >> 16 & 255, t[0] >> 8 & 255, t[0] & 255, t[1] >> 24 & 255, t[1] >> 16 & 255, t[1] >> 8 & 255, t[1] & 255, t[2] >> 24 & 255, t[2] >> 16 & 255, t[2] >> 8 & 255, t[2] & 255, t[3] >> 24 & 255, t[3] >> 16 & 255, t[3] >> 8 & 255, t[3] & 255, t[4] >> 24 & 255, t[4] >> 16 & 255, t[4] >> 8 & 255, t[4] & 255];
}
var x0 = Qu("v5", 80, E0);
const S0 = x0, I0 = "00000000-0000-0000-0000-000000000000";
function B0(n) {
  if (!Zi(n))
    throw TypeError("Invalid UUID");
  return parseInt(n.substr(14, 1), 16);
}
const M0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  v1: u0,
  v3: b0,
  v4: A0,
  v5: S0,
  NIL: I0,
  version: B0,
  validate: Zi,
  stringify: Ji,
  parse: qu
}, Symbol.toStringTag, { value: "Module" })), Ku = /* @__PURE__ */ Hi(M0), _0 = Ku.v4, C0 = function(n, e, t, r) {
  if (typeof n != "string")
    throw new TypeError(n + " must be a string");
  r = r || {};
  const i = typeof r.version == "number" ? r.version : 2;
  if (i !== 1 && i !== 2)
    throw new TypeError(i + " must be 1 or 2");
  const o = {
    method: n
  };
  if (i === 2 && (o.jsonrpc = "2.0"), e) {
    if (typeof e != "object" && !Array.isArray(e))
      throw new TypeError(e + " must be an object, array or omitted");
    o.params = e;
  }
  if (typeof t > "u") {
    const c = typeof r.generator == "function" ? r.generator : function() {
      return _0();
    };
    o.id = c(o, r);
  } else
    i === 2 && t === null ? r.notificationIdNull && (o.id = null) : o.id = t;
  return o;
};
var T0 = C0;
const R0 = Ku.v4, k0 = T0, Fr = function(n, e) {
  if (!(this instanceof Fr))
    return new Fr(n, e);
  e || (e = {}), this.options = {
    reviver: typeof e.reviver < "u" ? e.reviver : null,
    replacer: typeof e.replacer < "u" ? e.replacer : null,
    generator: typeof e.generator < "u" ? e.generator : function() {
      return R0();
    },
    version: typeof e.version < "u" ? e.version : 2,
    notificationIdNull: typeof e.notificationIdNull == "boolean" ? e.notificationIdNull : !1
  }, this.callServer = n;
};
var N0 = Fr;
Fr.prototype.request = function(n, e, t, r) {
  const i = this;
  let o = null;
  const c = Array.isArray(n) && typeof e == "function";
  if (this.options.version === 1 && c)
    throw new TypeError("JSON-RPC 1.0 does not support batching");
  if (c || !c && n && typeof n == "object" && typeof e == "function")
    r = e, o = n;
  else {
    typeof t == "function" && (r = t, t = void 0);
    const w = typeof r == "function";
    try {
      o = k0(n, e, t, {
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
      return o;
  }
  let d;
  try {
    d = JSON.stringify(o, this.options.replacer);
  } catch (w) {
    return r(w);
  }
  return this.callServer(d, function(w, v) {
    i._parseResponse(w, v, r);
  }), o;
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
  } catch (i) {
    return t(i);
  }
  if (t.length === 3)
    if (Array.isArray(r)) {
      const i = function(c) {
        return typeof c.error < "u";
      }, o = function(c) {
        return !i(c);
      };
      return t(null, r.filter(i), r.filter(o));
    } else
      return t(null, r.error, r.result);
  t(null, r);
};
const [Vu, Zu, Ju] = [[], [], []], O0 = BigInt(0), Ir = BigInt(1), L0 = BigInt(2), U0 = BigInt(7), D0 = BigInt(256), P0 = BigInt(113);
for (let n = 0, e = Ir, t = 1, r = 0; n < 24; n++) {
  [t, r] = [r, (2 * t + 3 * r) % 5], Vu.push(2 * (5 * r + t)), Zu.push((n + 1) * (n + 2) / 2 % 64);
  let i = O0;
  for (let o = 0; o < 7; o++)
    e = (e << Ir ^ (e >> U0) * P0) % D0, e & L0 && (i ^= Ir << (Ir << BigInt(o)) - Ir);
  Ju.push(i);
}
const [F0, z0] = we.split(Ju, !0), dc = (n, e, t) => t > 32 ? we.rotlBH(n, e, t) : we.rotlSH(n, e, t), pc = (n, e, t) => t > 32 ? we.rotlBL(n, e, t) : we.rotlSL(n, e, t);
function H0(n, e = 24) {
  const t = new Uint32Array(10);
  for (let r = 24 - e; r < 24; r++) {
    for (let c = 0; c < 10; c++)
      t[c] = n[c] ^ n[c + 10] ^ n[c + 20] ^ n[c + 30] ^ n[c + 40];
    for (let c = 0; c < 10; c += 2) {
      const u = (c + 8) % 10, d = (c + 2) % 10, w = t[d], v = t[d + 1], S = dc(w, v, 1) ^ t[u], T = pc(w, v, 1) ^ t[u + 1];
      for (let E = 0; E < 50; E += 10)
        n[c + E] ^= S, n[c + E + 1] ^= T;
    }
    let i = n[2], o = n[3];
    for (let c = 0; c < 24; c++) {
      const u = Zu[c], d = dc(i, o, u), w = pc(i, o, u), v = Vu[c];
      i = n[v], o = n[v + 1], n[v] = d, n[v + 1] = w;
    }
    for (let c = 0; c < 50; c += 10) {
      for (let u = 0; u < 10; u++)
        t[u] = n[c + u];
      for (let u = 0; u < 10; u++)
        n[c + u] ^= ~t[(u + 2) % 10] & t[(u + 4) % 10];
    }
    n[0] ^= F0[r], n[1] ^= z0[r];
  }
  t.fill(0);
}
class $i extends Hs {
  constructor(e, t, r, i = !1, o = 24) {
    if (super(), this.blockLen = e, this.suffix = t, this.outputLen = r, this.enableXOF = i, this.rounds = o, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, Qt.number(r), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = oh(this.state);
  }
  keccak() {
    H0(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(e) {
    Qt.exists(this);
    const { blockLen: t, state: r } = this;
    e = Vr(e);
    const i = e.length;
    for (let o = 0; o < i; ) {
      const c = Math.min(t - this.pos, i - o);
      for (let u = 0; u < c; u++)
        r[this.pos++] ^= e[o++];
      this.pos === t && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: e, suffix: t, pos: r, blockLen: i } = this;
    e[r] ^= t, (t & 128) !== 0 && r === i - 1 && this.keccak(), e[i - 1] ^= 128, this.keccak();
  }
  writeInto(e) {
    Qt.exists(this, !1), Qt.bytes(e), this.finish();
    const t = this.state, { blockLen: r } = this;
    for (let i = 0, o = e.length; i < o; ) {
      this.posOut >= r && this.keccak();
      const c = Math.min(r - this.posOut, o - i);
      e.set(t.subarray(this.posOut, this.posOut + c), i), this.posOut += c, i += c;
    }
    return e;
  }
  xofInto(e) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(e);
  }
  xof(e) {
    return Qt.number(e), this.xofInto(new Uint8Array(e));
  }
  digestInto(e) {
    if (Qt.output(e, this), this.finished)
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
    const { blockLen: t, suffix: r, outputLen: i, rounds: o, enableXOF: c } = this;
    return e || (e = new $i(t, r, i, c, o)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = o, e.suffix = r, e.outputLen = i, e.enableXOF = c, e.destroyed = this.destroyed, e;
  }
}
const zn = (n, e, t) => Zr(() => new $i(e, n, t));
zn(6, 144, 224 / 8);
zn(6, 136, 256 / 8);
zn(6, 104, 384 / 8);
zn(6, 72, 512 / 8);
zn(1, 144, 224 / 8);
zn(1, 136, 256 / 8);
zn(1, 104, 384 / 8);
zn(1, 72, 512 / 8);
const Xu = (n, e, t) => ch((r = {}) => new $i(e, n, r.dkLen === void 0 ? t : r.dkLen, !0));
Xu(31, 168, 128 / 8);
Xu(31, 136, 256 / 8);
class $u extends Hs {
  constructor(e, t) {
    super(), this.finished = !1, this.destroyed = !1, Qt.hash(e);
    const r = Vr(t);
    if (this.iHash = e.create(), typeof this.iHash.update != "function")
      throw new TypeError("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const i = this.blockLen, o = new Uint8Array(i);
    o.set(r.length > i ? e.create().update(r).digest() : r);
    for (let c = 0; c < o.length; c++)
      o[c] ^= 54;
    this.iHash.update(o), this.oHash = e.create();
    for (let c = 0; c < o.length; c++)
      o[c] ^= 106;
    this.oHash.update(o), o.fill(0);
  }
  update(e) {
    return Qt.exists(this), this.iHash.update(e), this;
  }
  digestInto(e) {
    Qt.exists(this), Qt.bytes(e, this.outputLen), this.finished = !0, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
  }
  digest() {
    const e = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(e), e;
  }
  _cloneInto(e) {
    e || (e = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: t, iHash: r, finished: i, destroyed: o, blockLen: c, outputLen: u } = this;
    return e = e, e.finished = i, e.destroyed = o, e.blockLen = c, e.outputLen = u, e.oHash = t._cloneInto(e.oHash), e.iHash = r._cloneInto(e.iHash), e;
  }
  destroy() {
    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
  }
}
const el = (n, e, t) => new $u(n, e).update(t).digest();
el.create = (n, e) => new $u(n, e);
/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
const De = BigInt(0), Je = BigInt(1), Un = BigInt(2), Nr = BigInt(3), W0 = BigInt(8), nt = Object.freeze({
  a: De,
  b: BigInt(7),
  P: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
  n: BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
  h: Je,
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")
});
function gc(n) {
  const { a: e, b: t } = nt, r = ae(n * n), i = ae(r * n);
  return ae(i + e * n + t);
}
const li = nt.a === De;
class j0 extends Error {
  constructor(e) {
    super(e);
  }
}
class Pe {
  constructor(e, t, r) {
    this.x = e, this.y = t, this.z = r;
  }
  static fromAffine(e) {
    if (!(e instanceof It))
      throw new TypeError("JacobianPoint#fromAffine: expected Point");
    return new Pe(e.x, e.y, Je);
  }
  static toAffineBatch(e) {
    const t = K0(e.map((r) => r.z));
    return e.map((r, i) => r.toAffine(t[i]));
  }
  static normalizeZ(e) {
    return Pe.toAffineBatch(e).map(Pe.fromAffine);
  }
  equals(e) {
    if (!(e instanceof Pe))
      throw new TypeError("JacobianPoint expected");
    const { x: t, y: r, z: i } = this, { x: o, y: c, z: u } = e, d = ae(i * i), w = ae(u * u), v = ae(t * w), S = ae(o * d), T = ae(ae(r * u) * w), E = ae(ae(c * i) * d);
    return v === S && T === E;
  }
  negate() {
    return new Pe(this.x, ae(-this.y), this.z);
  }
  double() {
    const { x: e, y: t, z: r } = this, i = ae(e * e), o = ae(t * t), c = ae(o * o), u = e + o, d = ae(Un * (ae(u * u) - i - c)), w = ae(Nr * i), v = ae(w * w), S = ae(v - Un * d), T = ae(w * (d - S) - W0 * c), E = ae(Un * t * r);
    return new Pe(S, T, E);
  }
  add(e) {
    if (!(e instanceof Pe))
      throw new TypeError("JacobianPoint expected");
    const { x: t, y: r, z: i } = this, { x: o, y: c, z: u } = e;
    if (o === De || c === De)
      return this;
    if (t === De || r === De)
      return e;
    const d = ae(i * i), w = ae(u * u), v = ae(t * w), S = ae(o * d), T = ae(ae(r * u) * w), E = ae(ae(c * i) * d), _ = ae(S - v), C = ae(E - T);
    if (_ === De)
      return C === De ? this.double() : Pe.ZERO;
    const U = ae(_ * _), P = ae(_ * U), z = ae(v * U), N = ae(C * C - P - Un * z), F = ae(C * (z - N) - T * P), O = ae(i * u * _);
    return new Pe(N, F, O);
  }
  subtract(e) {
    return this.add(e.negate());
  }
  multiplyUnsafe(e) {
    const t = Pe.ZERO;
    if (typeof e == "bigint" && e === De)
      return t;
    let r = bc(e);
    if (r === Je)
      return this;
    if (!li) {
      let S = t, T = this;
      for (; r > De; )
        r & Je && (S = S.add(T)), T = T.double(), r >>= Je;
      return S;
    }
    let { k1neg: i, k1: o, k2neg: c, k2: u } = vc(r), d = t, w = t, v = this;
    for (; o > De || u > De; )
      o & Je && (d = d.add(v)), u & Je && (w = w.add(v)), v = v.double(), o >>= Je, u >>= Je;
    return i && (d = d.negate()), c && (w = w.negate()), w = new Pe(ae(w.x * nt.beta), w.y, w.z), d.add(w);
  }
  precomputeWindow(e) {
    const t = li ? 128 / e + 1 : 256 / e + 1, r = [];
    let i = this, o = i;
    for (let c = 0; c < t; c++) {
      o = i, r.push(o);
      for (let u = 1; u < 2 ** (e - 1); u++)
        o = o.add(i), r.push(o);
      i = o.double();
    }
    return r;
  }
  wNAF(e, t) {
    !t && this.equals(Pe.BASE) && (t = It.BASE);
    const r = t && t._WINDOW_SIZE || 1;
    if (256 % r)
      throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");
    let i = t && Ms.get(t);
    i || (i = this.precomputeWindow(r), t && r !== 1 && (i = Pe.normalizeZ(i), Ms.set(t, i)));
    let o = Pe.ZERO, c = Pe.ZERO;
    const u = 1 + (li ? 128 / r : 256 / r), d = 2 ** (r - 1), w = BigInt(2 ** r - 1), v = 2 ** r, S = BigInt(r);
    for (let T = 0; T < u; T++) {
      const E = T * d;
      let _ = Number(e & w);
      if (e >>= S, _ > d && (_ -= v, e += Je), _ === 0) {
        let C = i[E];
        T % 2 && (C = C.negate()), c = c.add(C);
      } else {
        let C = i[E + Math.abs(_) - 1];
        _ < 0 && (C = C.negate()), o = o.add(C);
      }
    }
    return { p: o, f: c };
  }
  multiply(e, t) {
    let r = bc(e), i, o;
    if (li) {
      const { k1neg: c, k1: u, k2neg: d, k2: w } = vc(r);
      let { p: v, f: S } = this.wNAF(u, t), { p: T, f: E } = this.wNAF(w, t);
      c && (v = v.negate()), d && (T = T.negate()), T = new Pe(ae(T.x * nt.beta), T.y, T.z), i = v.add(T), o = S.add(E);
    } else {
      const { p: c, f: u } = this.wNAF(r, t);
      i = c, o = u;
    }
    return Pe.normalizeZ([i, o])[0];
  }
  toAffine(e = eo(this.z)) {
    const { x: t, y: r, z: i } = this, o = e, c = ae(o * o), u = ae(c * o), d = ae(t * c), w = ae(r * u);
    if (ae(i * o) !== Je)
      throw new Error("invZ was invalid");
    return new It(d, w);
  }
}
Pe.BASE = new Pe(nt.Gx, nt.Gy, Je);
Pe.ZERO = new Pe(De, Je, De);
const Ms = /* @__PURE__ */ new WeakMap();
class It {
  constructor(e, t) {
    this.x = e, this.y = t;
  }
  _setWindowSize(e) {
    this._WINDOW_SIZE = e, Ms.delete(this);
  }
  hasEvenY() {
    return this.y % Un === De;
  }
  static fromCompressedHex(e) {
    const t = e.length === 32, r = Jn(t ? e : e.subarray(1));
    if (!cs(r))
      throw new Error("Point is not on curve");
    const i = gc(r);
    let o = Y0(i);
    const c = (o & Je) === Je;
    t ? c && (o = ae(-o)) : (e[0] & 1) === 1 !== c && (o = ae(-o));
    const u = new It(r, o);
    return u.assertValidity(), u;
  }
  static fromUncompressedHex(e) {
    const t = Jn(e.subarray(1, 33)), r = Jn(e.subarray(33, 65)), i = new It(t, r);
    return i.assertValidity(), i;
  }
  static fromHex(e) {
    const t = _s(e), r = t.length, i = t[0];
    if (r === 32 || r === 33 && (i === 2 || i === 3))
      return this.fromCompressedHex(t);
    if (r === 65 && i === 4)
      return this.fromUncompressedHex(t);
    throw new Error(`Point.fromHex: received invalid point. Expected 32-33 compressed bytes or 65 uncompressed bytes, not ${r}`);
  }
  static fromPrivateKey(e) {
    return It.BASE.multiply(Cs(e));
  }
  static fromSignature(e, t, r) {
    e = _s(e);
    const i = Z0(e), { r: o, s: c } = J0(t);
    if (r !== 0 && r !== 1)
      throw new Error("Cannot recover signature: invalid recovery bit");
    const u = r & 1 ? "03" : "02", d = It.fromHex(u + dr(o)), { n: w } = nt, v = eo(o, w), S = ae(-i * v, w), T = ae(c * v, w), E = It.BASE.multiplyAndAddUnsafe(d, S, T);
    if (!E)
      throw new Error("Cannot recover signature: point at infinify");
    return E.assertValidity(), E;
  }
  toRawBytes(e = !1) {
    return Zn(this.toHex(e));
  }
  toHex(e = !1) {
    const t = dr(this.x);
    return e ? `${this.hasEvenY() ? "02" : "03"}${t}` : `04${t}${dr(this.y)}`;
  }
  toHexX() {
    return this.toHex(!0).slice(2);
  }
  toRawX() {
    return this.toRawBytes(!0).slice(1);
  }
  assertValidity() {
    const e = "Point is not on elliptic curve", { x: t, y: r } = this;
    if (!cs(t) || !cs(r))
      throw new Error(e);
    const i = ae(r * r), o = gc(t);
    if (ae(i - o) !== De)
      throw new Error(e);
  }
  equals(e) {
    return this.x === e.x && this.y === e.y;
  }
  negate() {
    return new It(this.x, ae(-this.y));
  }
  double() {
    return Pe.fromAffine(this).double().toAffine();
  }
  add(e) {
    return Pe.fromAffine(this).add(Pe.fromAffine(e)).toAffine();
  }
  subtract(e) {
    return this.add(e.negate());
  }
  multiply(e) {
    return Pe.fromAffine(this).multiply(e, this).toAffine();
  }
  multiplyAndAddUnsafe(e, t, r) {
    const i = Pe.fromAffine(this), o = t === De || t === Je || this !== It.BASE ? i.multiplyUnsafe(t) : i.multiply(t), c = Pe.fromAffine(e).multiplyUnsafe(r), u = o.add(c);
    return u.equals(Pe.ZERO) ? void 0 : u.toAffine();
  }
}
It.BASE = new It(nt.Gx, nt.Gy);
It.ZERO = new It(De, De);
function yc(n) {
  return Number.parseInt(n[0], 16) >= 8 ? "00" + n : n;
}
function wc(n) {
  if (n.length < 2 || n[0] !== 2)
    throw new Error(`Invalid signature integer tag: ${mr(n)}`);
  const e = n[1], t = n.subarray(2, e + 2);
  if (!e || t.length !== e)
    throw new Error("Invalid signature integer: wrong length");
  if (t[0] === 0 && t[1] <= 127)
    throw new Error("Invalid signature integer: trailing length");
  return { data: Jn(t), left: n.subarray(e + 2) };
}
function G0(n) {
  if (n.length < 2 || n[0] != 48)
    throw new Error(`Invalid signature tag: ${mr(n)}`);
  if (n[1] !== n.length - 2)
    throw new Error("Invalid signature: incorrect length");
  const { data: e, left: t } = wc(n.subarray(2)), { data: r, left: i } = wc(t);
  if (i.length)
    throw new Error(`Invalid signature: left bytes after parsing: ${mr(i)}`);
  return { r: e, s: r };
}
class Vn {
  constructor(e, t) {
    this.r = e, this.s = t, this.assertValidity();
  }
  static fromCompact(e) {
    const t = e instanceof Uint8Array, r = "Signature.fromCompact";
    if (typeof e != "string" && !t)
      throw new TypeError(`${r}: Expected string or Uint8Array`);
    const i = t ? mr(e) : e;
    if (i.length !== 128)
      throw new Error(`${r}: Expected 64-byte hex`);
    return new Vn(Ni(i.slice(0, 64)), Ni(i.slice(64, 128)));
  }
  static fromDER(e) {
    const t = e instanceof Uint8Array;
    if (typeof e != "string" && !t)
      throw new TypeError("Signature.fromDER: Expected string or Uint8Array");
    const { r, s: i } = G0(t ? e : Zn(e));
    return new Vn(r, i);
  }
  static fromHex(e) {
    return this.fromDER(e);
  }
  assertValidity() {
    const { r: e, s: t } = this;
    if (!Oi(e))
      throw new Error("Invalid Signature: r must be 0 < r < n");
    if (!Oi(t))
      throw new Error("Invalid Signature: s must be 0 < s < n");
  }
  hasHighS() {
    const e = nt.n >> Je;
    return this.s > e;
  }
  normalizeS() {
    return this.hasHighS() ? new Vn(this.r, nt.n - this.s) : this;
  }
  toDERRawBytes(e = !1) {
    return Zn(this.toDERHex(e));
  }
  toDERHex(e = !1) {
    const t = yc(Mr(this.s));
    if (e)
      return t;
    const r = yc(Mr(this.r)), i = Mr(r.length / 2), o = Mr(t.length / 2);
    return `30${Mr(r.length / 2 + t.length / 2 + 4)}02${i}${r}02${o}${t}`;
  }
  toRawBytes() {
    return this.toDERRawBytes();
  }
  toHex() {
    return this.toDERHex();
  }
  toCompactRawBytes() {
    return Zn(this.toCompactHex());
  }
  toCompactHex() {
    return dr(this.r) + dr(this.s);
  }
}
function Br(...n) {
  if (!n.every((r) => r instanceof Uint8Array))
    throw new Error("Uint8Array list expected");
  if (n.length === 1)
    return n[0];
  const e = n.reduce((r, i) => r + i.length, 0), t = new Uint8Array(e);
  for (let r = 0, i = 0; r < n.length; r++) {
    const o = n[r];
    t.set(o, i), i += o.length;
  }
  return t;
}
const q0 = Array.from({ length: 256 }, (n, e) => e.toString(16).padStart(2, "0"));
function mr(n) {
  if (!(n instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  let e = "";
  for (let t = 0; t < n.length; t++)
    e += q0[n[t]];
  return e;
}
const Q0 = BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");
function dr(n) {
  if (typeof n != "bigint")
    throw new Error("Expected bigint");
  if (!(De <= n && n < Q0))
    throw new Error("Expected number < 2^256");
  return n.toString(16).padStart(64, "0");
}
function mc(n) {
  const e = Zn(dr(n));
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
function Zn(n) {
  if (typeof n != "string")
    throw new TypeError("hexToBytes: expected string, got " + typeof n);
  if (n.length % 2)
    throw new Error("hexToBytes: received invalid unpadded hex" + n.length);
  const e = new Uint8Array(n.length / 2);
  for (let t = 0; t < e.length; t++) {
    const r = t * 2, i = n.slice(r, r + 2), o = Number.parseInt(i, 16);
    if (Number.isNaN(o) || o < 0)
      throw new Error("Invalid byte sequence");
    e[t] = o;
  }
  return e;
}
function Jn(n) {
  return Ni(mr(n));
}
function _s(n) {
  return n instanceof Uint8Array ? Uint8Array.from(n) : Zn(n);
}
function bc(n) {
  if (typeof n == "number" && Number.isSafeInteger(n) && n > 0)
    return BigInt(n);
  if (typeof n == "bigint" && Oi(n))
    return n;
  throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n");
}
function ae(n, e = nt.P) {
  const t = n % e;
  return t >= De ? t : e + t;
}
function Vt(n, e) {
  const { P: t } = nt;
  let r = n;
  for (; e-- > De; )
    r *= r, r %= t;
  return r;
}
function Y0(n) {
  const { P: e } = nt, t = BigInt(6), r = BigInt(11), i = BigInt(22), o = BigInt(23), c = BigInt(44), u = BigInt(88), d = n * n * n % e, w = d * d * n % e, v = Vt(w, Nr) * w % e, S = Vt(v, Nr) * w % e, T = Vt(S, Un) * d % e, E = Vt(T, r) * T % e, _ = Vt(E, i) * E % e, C = Vt(_, c) * _ % e, U = Vt(C, u) * C % e, P = Vt(U, c) * _ % e, z = Vt(P, Nr) * w % e, N = Vt(z, o) * E % e, F = Vt(N, t) * d % e;
  return Vt(F, Un);
}
function eo(n, e = nt.P) {
  if (n === De || e <= De)
    throw new Error(`invert: expected positive integers, got n=${n} mod=${e}`);
  let t = ae(n, e), r = e, i = De, o = Je;
  for (; t !== De; ) {
    const u = r / t, d = r % t, w = i - o * u;
    r = t, t = d, i = o, o = w;
  }
  if (r !== Je)
    throw new Error("invert: does not exist");
  return ae(i, e);
}
function K0(n, e = nt.P) {
  const t = new Array(n.length), r = n.reduce((o, c, u) => c === De ? o : (t[u] = o, ae(o * c, e)), Je), i = eo(r, e);
  return n.reduceRight((o, c, u) => c === De ? o : (t[u] = ae(o * t[u], e), ae(o * c, e)), i), t;
}
const Ac = (n, e) => (n + e / Un) / e, V0 = {
  a1: BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
  b1: -Je * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
  a2: BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
  b2: BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
  POW_2_128: BigInt("0x100000000000000000000000000000000")
};
function vc(n) {
  const { n: e } = nt, { a1: t, b1: r, a2: i, b2: o, POW_2_128: c } = V0, u = Ac(o * n, e), d = Ac(-r * n, e);
  let w = ae(n - u * t - d * i, e), v = ae(-u * r - d * o, e);
  const S = w > c, T = v > c;
  if (S && (w = e - w), T && (v = e - v), w > c || v > c)
    throw new Error("splitScalarEndo: Endomorphism failed, k=" + n);
  return { k1neg: S, k1: w, k2neg: T, k2: v };
}
function Z0(n) {
  const { n: e } = nt, r = n.length * 8 - 256;
  let i = Jn(n);
  return r > 0 && (i = i >> BigInt(r)), i >= e && (i -= e), i;
}
let pr, as;
function Oi(n) {
  return De < n && n < nt.n;
}
function cs(n) {
  return De < n && n < nt.P;
}
function Cs(n) {
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
    e = Jn(n);
  } else
    throw new TypeError("Expected valid private key");
  if (!Oi(e))
    throw new Error("Expected private key: 0 < key < n");
  return e;
}
function J0(n) {
  if (n instanceof Vn)
    return n.assertValidity(), n;
  try {
    return Vn.fromDER(n);
  } catch {
    return Vn.fromCompact(n);
  }
}
It.BASE._setWindowSize(8);
const jt = {
  node: js,
  web: typeof self == "object" && "crypto" in self ? self.crypto : void 0
}, fi = {}, Gn = {
  bytesToHex: mr,
  hexToBytes: Zn,
  concatBytes: Br,
  mod: ae,
  invert: eo,
  isValidPrivateKey(n) {
    try {
      return Cs(n), !0;
    } catch {
      return !1;
    }
  },
  _bigintTo32Bytes: mc,
  _normalizePrivateKey: Cs,
  hashToPrivateKey: (n) => {
    if (n = _s(n), n.length < 40 || n.length > 1024)
      throw new Error("Expected 40-1024 bytes of private key as per FIPS 186");
    const e = ae(Jn(n), nt.n - Je) + Je;
    return mc(e);
  },
  randomBytes: (n = 32) => {
    if (jt.web)
      return jt.web.getRandomValues(new Uint8Array(n));
    if (jt.node) {
      const { randomBytes: e } = jt.node;
      return Uint8Array.from(e(n));
    } else
      throw new Error("The environment doesn't have randomBytes function");
  },
  randomPrivateKey: () => Gn.hashToPrivateKey(Gn.randomBytes(40)),
  sha256: async (...n) => {
    if (jt.web) {
      const e = await jt.web.subtle.digest("SHA-256", Br(...n));
      return new Uint8Array(e);
    } else if (jt.node) {
      const { createHash: e } = jt.node, t = e("sha256");
      return n.forEach((r) => t.update(r)), Uint8Array.from(t.digest());
    } else
      throw new Error("The environment doesn't have sha256 function");
  },
  hmacSha256: async (n, ...e) => {
    if (jt.web) {
      const t = await jt.web.subtle.importKey("raw", n, { name: "HMAC", hash: { name: "SHA-256" } }, !1, ["sign"]), r = Br(...e), i = await jt.web.subtle.sign("HMAC", t, r);
      return new Uint8Array(i);
    } else if (jt.node) {
      const { createHmac: t } = jt.node, r = t("sha256", n);
      return e.forEach((i) => r.update(i)), Uint8Array.from(r.digest());
    } else
      throw new Error("The environment doesn't have hmac-sha256 function");
  },
  sha256Sync: void 0,
  hmacSha256Sync: void 0,
  taggedHash: async (n, ...e) => {
    let t = fi[n];
    if (t === void 0) {
      const r = await Gn.sha256(Uint8Array.from(n, (i) => i.charCodeAt(0)));
      t = Br(r, r), fi[n] = t;
    }
    return Gn.sha256(t, ...e);
  },
  taggedHashSync: (n, ...e) => {
    if (typeof pr != "function")
      throw new j0("sha256Sync is undefined, you need to set it");
    let t = fi[n];
    if (t === void 0) {
      const r = pr(Uint8Array.from(n, (i) => i.charCodeAt(0)));
      t = Br(r, r), fi[n] = t;
    }
    return pr(t, ...e);
  },
  precompute(n = 8, e = It.BASE) {
    const t = e === It.BASE ? e : new It(e.x, e.y);
    return t._setWindowSize(n), t.multiply(Nr), t;
  }
};
Object.defineProperties(Gn, {
  sha256Sync: {
    configurable: !1,
    get() {
      return pr;
    },
    set(n) {
      pr || (pr = n);
    }
  },
  hmacSha256Sync: {
    configurable: !1,
    get() {
      return as;
    },
    set(n) {
      as || (as = n);
    }
  }
});
yr.sha512Sync = (...n) => Lh(yr.concatBytes(...n));
yr.randomPrivateKey;
function Ec(n) {
  try {
    return et.fromHex(
      n,
      !0
    ), !0;
  } catch {
    return !1;
  }
}
const X0 = (n, e) => gu.sign(n, e.slice(0, 32)), $0 = gu.verify, ri = (n) => Ee.Buffer.isBuffer(n) ? n : n instanceof Uint8Array ? Ee.Buffer.from(n.buffer, n.byteOffset, n.byteLength) : Ee.Buffer.from(n);
class ep {
  constructor(e) {
    Object.assign(this, e);
  }
  encode() {
    return Ee.Buffer.from(Eu(gi, this));
  }
  static decode(e) {
    return xu(gi, this, e);
  }
  static decodeUnchecked(e) {
    return wu(gi, this, e);
  }
}
const gi = /* @__PURE__ */ new Map(), tp = 32, xn = 32;
function np(n) {
  return n._bn !== void 0;
}
let xc = 1;
class fe extends ep {
  constructor(e) {
    if (super({}), this._bn = void 0, np(e))
      this._bn = e._bn;
    else {
      if (typeof e == "string") {
        const t = Ct.decode(e);
        if (t.length != xn)
          throw new Error("Invalid public key input");
        this._bn = new Za(t);
      } else
        this._bn = new Za(e);
      if (this._bn.byteLength() > 32)
        throw new Error("Invalid public key input");
    }
  }
  static unique() {
    const e = new fe(xc);
    return xc += 1, new fe(e.toBuffer());
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
    const e = this._bn.toArrayLike(Ee.Buffer);
    if (e.length === xn)
      return e;
    const t = Ee.Buffer.alloc(32);
    return e.copy(t, 32 - e.length), t;
  }
  toString() {
    return this.toBase58();
  }
  static async createWithSeed(e, t, r) {
    const i = Ee.Buffer.concat([e.toBuffer(), Ee.Buffer.from(t), r.toBuffer()]), o = Is(i);
    return new fe(o);
  }
  static createProgramAddressSync(e, t) {
    let r = Ee.Buffer.alloc(0);
    e.forEach(function(o) {
      if (o.length > tp)
        throw new TypeError("Max seed length exceeded");
      r = Ee.Buffer.concat([r, ri(o)]);
    }), r = Ee.Buffer.concat([r, t.toBuffer(), Ee.Buffer.from("ProgramDerivedAddress")]);
    const i = Is(r);
    if (Ec(i))
      throw new Error("Invalid seeds, address must fall off the curve");
    return new fe(i);
  }
  static async createProgramAddress(e, t) {
    return this.createProgramAddressSync(e, t);
  }
  static findProgramAddressSync(e, t) {
    let r = 255, i;
    for (; r != 0; ) {
      try {
        const o = e.concat(Ee.Buffer.from([r]));
        i = this.createProgramAddressSync(o, t);
      } catch (o) {
        if (o instanceof TypeError)
          throw o;
        r--;
        continue;
      }
      return [i, r];
    }
    throw new Error("Unable to find a viable program address nonce");
  }
  static async findProgramAddress(e, t) {
    return this.findProgramAddressSync(e, t);
  }
  static isOnCurve(e) {
    const t = new fe(e);
    return Ec(t.toBytes());
  }
}
fe.default = new fe("11111111111111111111111111111111");
gi.set(fe, {
  kind: "struct",
  fields: [["_bn", "u256"]]
});
new fe("BPFLoader1111111111111111111111111111111111");
const gr = 1280 - 40 - 8, tl = 127, Ts = 64;
class nl extends Error {
  constructor(e) {
    super(`Signature ${e} has expired: block height exceeded.`), this.signature = void 0, this.signature = e;
  }
}
Object.defineProperty(nl.prototype, "name", {
  value: "TransactionExpiredBlockheightExceededError"
});
class rl extends Error {
  constructor(e, t) {
    super(`Transaction was not confirmed in ${t.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ${e} using the Solana Explorer or CLI tools.`), this.signature = void 0, this.signature = e;
  }
}
Object.defineProperty(rl.prototype, "name", {
  value: "TransactionExpiredTimeoutError"
});
class Li {
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
    this.keySegments().flat().forEach((o, c) => {
      r.set(o.toBase58(), c);
    });
    const i = (o) => {
      const c = r.get(o.toBase58());
      if (c === void 0)
        throw new Error("Encountered an unknown instruction account key during compilation");
      return c;
    };
    return e.map((o) => ({
      programIdIndex: i(o.programId),
      accountKeyIndexes: o.keys.map((c) => i(c.pubkey)),
      data: o.data
    }));
  }
}
const Be = (n = "publicKey") => $e(32, n), lr = (n = "string") => {
  const e = ue([ge("length"), ge("lengthPadding"), $e(Kn(ge(), -8), "chars")], n), t = e.decode.bind(e), r = e.encode.bind(e), i = e;
  return i.decode = (o, c) => t(o, c).chars.toString(), i.encode = (o, c, u) => {
    const d = {
      chars: Ee.Buffer.from(o, "utf8")
    };
    return r(d, c, u);
  }, i.alloc = (o) => ge().span + ge().span + Ee.Buffer.from(o, "utf8").length, i;
}, rp = (n = "authorized") => ue([Be("staker"), Be("withdrawer")], n), ip = (n = "lockup") => ue([qt("unixTimestamp"), qt("epoch"), Be("custodian")], n), op = (n = "voteInit") => ue([Be("nodePubkey"), Be("authorizedVoter"), Be("authorizedWithdrawer"), Ne("commission")], n), sp = (n = "voteAuthorizeWithSeedArgs") => ue([ge("voteAuthorizationType"), Be("currentAuthorityDerivedKeyOwnerPubkey"), lr("currentAuthorityDerivedKeySeed"), Be("newAuthorized")], n);
function Xt(n) {
  let e = 0, t = 0;
  for (; ; ) {
    let r = n.shift();
    if (e |= (r & 127) << t * 7, t += 1, (r & 128) === 0)
      break;
  }
  return e;
}
function $t(n, e) {
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
class to {
  constructor(e, t) {
    this.payer = void 0, this.keyMetaMap = void 0, this.payer = e, this.keyMetaMap = t;
  }
  static compile(e, t) {
    const r = /* @__PURE__ */ new Map(), i = (c) => {
      const u = c.toBase58();
      let d = r.get(u);
      return d === void 0 && (d = {
        isSigner: !1,
        isWritable: !1,
        isInvoked: !1
      }, r.set(u, d)), d;
    }, o = i(t);
    o.isSigner = !0, o.isWritable = !0;
    for (const c of e) {
      i(c.programId).isInvoked = !0;
      for (const u of c.keys) {
        const d = i(u.pubkey);
        d.isSigner || (d.isSigner = u.isSigner), d.isWritable || (d.isWritable = u.isWritable);
      }
    }
    return new to(t, r);
  }
  getMessageComponents() {
    const e = [...this.keyMetaMap.entries()];
    vt(e.length <= 256, "Max static account keys length exceeded");
    const t = e.filter(([, d]) => d.isSigner && d.isWritable), r = e.filter(([, d]) => d.isSigner && !d.isWritable), i = e.filter(([, d]) => !d.isSigner && d.isWritable), o = e.filter(([, d]) => !d.isSigner && !d.isWritable), c = {
      numRequiredSignatures: t.length + r.length,
      numReadonlySignedAccounts: r.length,
      numReadonlyUnsignedAccounts: o.length
    };
    {
      vt(t.length > 0, "Expected at least one writable signer key");
      const [d] = t[0];
      vt(d === this.payer.toBase58(), "Expected first writable signer key to be the fee payer");
    }
    const u = [...t.map(([d]) => new fe(d)), ...r.map(([d]) => new fe(d)), ...i.map(([d]) => new fe(d)), ...o.map(([d]) => new fe(d))];
    return [c, u];
  }
  extractTableLookup(e) {
    const [t, r] = this.drainKeysFoundInLookupTable(e.state.addresses, (c) => !c.isSigner && !c.isInvoked && c.isWritable), [i, o] = this.drainKeysFoundInLookupTable(e.state.addresses, (c) => !c.isSigner && !c.isInvoked && !c.isWritable);
    if (!(t.length === 0 && i.length === 0))
      return [{
        accountKey: e.key,
        writableIndexes: t,
        readonlyIndexes: i
      }, {
        writable: r,
        readonly: o
      }];
  }
  drainKeysFoundInLookupTable(e, t) {
    const r = new Array(), i = new Array();
    for (const [o, c] of this.keyMetaMap.entries())
      if (t(c)) {
        const u = new fe(o), d = e.findIndex((w) => w.equals(u));
        d >= 0 && (vt(d < 256, "Max lookup table index exceeded"), r.push(d), i.push(u), this.keyMetaMap.delete(o));
      }
    return [r, i];
  }
}
class Fn {
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
    return new Li(this.staticAccountKeys);
  }
  static compile(e) {
    const t = to.compile(e.instructions, e.payerKey), [r, i] = t.getMessageComponents(), c = new Li(i).compileInstructions(e.instructions).map((u) => ({
      programIdIndex: u.programIdIndex,
      accounts: u.accountKeyIndexes,
      data: Ct.encode(u.data)
    }));
    return new Fn({
      header: r,
      accountKeys: i,
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
      const r = e - t, o = this.accountKeys.length - t - this.header.numReadonlyUnsignedAccounts;
      return r < o;
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
    $t(t, e);
    const r = this.instructions.map((S) => {
      const {
        accounts: T,
        programIdIndex: E
      } = S, _ = Array.from(Ct.decode(S.data));
      let C = [];
      $t(C, T.length);
      let U = [];
      return $t(U, _.length), {
        programIdIndex: E,
        keyIndicesCount: Ee.Buffer.from(C),
        keyIndices: T,
        dataLength: Ee.Buffer.from(U),
        data: _
      };
    });
    let i = [];
    $t(i, r.length);
    let o = Ee.Buffer.alloc(gr);
    Ee.Buffer.from(i).copy(o);
    let c = i.length;
    r.forEach((S) => {
      c += ue([Ne("programIdIndex"), $e(S.keyIndicesCount.length, "keyIndicesCount"), Ft(Ne("keyIndex"), S.keyIndices.length, "keyIndices"), $e(S.dataLength.length, "dataLength"), Ft(Ne("userdatum"), S.data.length, "data")]).encode(S, o, c);
    }), o = o.slice(0, c);
    const u = ue([$e(1, "numRequiredSignatures"), $e(1, "numReadonlySignedAccounts"), $e(1, "numReadonlyUnsignedAccounts"), $e(t.length, "keyCount"), Ft(Be("key"), e, "keys"), Be("recentBlockhash")]), d = {
      numRequiredSignatures: Ee.Buffer.from([this.header.numRequiredSignatures]),
      numReadonlySignedAccounts: Ee.Buffer.from([this.header.numReadonlySignedAccounts]),
      numReadonlyUnsignedAccounts: Ee.Buffer.from([this.header.numReadonlyUnsignedAccounts]),
      keyCount: Ee.Buffer.from(t),
      keys: this.accountKeys.map((S) => ri(S.toBytes())),
      recentBlockhash: Ct.decode(this.recentBlockhash)
    };
    let w = Ee.Buffer.alloc(2048);
    const v = u.encode(d, w);
    return o.copy(w, v), w.slice(0, v + o.length);
  }
  static from(e) {
    let t = [...e];
    const r = t.shift();
    if (r !== (r & tl))
      throw new Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");
    const i = t.shift(), o = t.shift(), c = Xt(t);
    let u = [];
    for (let T = 0; T < c; T++) {
      const E = t.slice(0, xn);
      t = t.slice(xn), u.push(new fe(Ee.Buffer.from(E)));
    }
    const d = t.slice(0, xn);
    t = t.slice(xn);
    const w = Xt(t);
    let v = [];
    for (let T = 0; T < w; T++) {
      const E = t.shift(), _ = Xt(t), C = t.slice(0, _);
      t = t.slice(_);
      const U = Xt(t), P = t.slice(0, U), z = Ct.encode(Ee.Buffer.from(P));
      t = t.slice(U), v.push({
        programIdIndex: E,
        accounts: C,
        data: z
      });
    }
    const S = {
      header: {
        numRequiredSignatures: r,
        numReadonlySignedAccounts: i,
        numReadonlyUnsignedAccounts: o
      },
      recentBlockhash: Ct.encode(Ee.Buffer.from(d)),
      accountKeys: u,
      instructions: v
    };
    return new Fn(S);
  }
}
class Ui {
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
    return new Li(this.staticAccountKeys, t);
  }
  isAccountSigner(e) {
    return e < this.header.numRequiredSignatures;
  }
  isAccountWritable(e) {
    const t = this.header.numRequiredSignatures, r = this.staticAccountKeys.length;
    if (e >= r) {
      const i = e - r, o = this.addressTableLookups.reduce((c, u) => c + u.writableIndexes.length, 0);
      return i < o;
    } else if (e >= this.header.numRequiredSignatures) {
      const i = e - t, c = r - t - this.header.numReadonlyUnsignedAccounts;
      return i < c;
    } else {
      const i = t - this.header.numReadonlySignedAccounts;
      return e < i;
    }
  }
  resolveAddressTableLookups(e) {
    const t = {
      writable: [],
      readonly: []
    };
    for (const r of this.addressTableLookups) {
      const i = e.find((o) => o.key.equals(r.accountKey));
      if (!i)
        throw new Error(`Failed to find address lookup table account for table key ${r.accountKey.toBase58()}`);
      for (const o of r.writableIndexes)
        if (o < i.state.addresses.length)
          t.writable.push(i.state.addresses[o]);
        else
          throw new Error(`Failed to find address for index ${o} in address lookup table ${r.accountKey.toBase58()}`);
      for (const o of r.readonlyIndexes)
        if (o < i.state.addresses.length)
          t.readonly.push(i.state.addresses[o]);
        else
          throw new Error(`Failed to find address for index ${o} in address lookup table ${r.accountKey.toBase58()}`);
    }
    return t;
  }
  static compile(e) {
    const t = to.compile(e.instructions, e.payerKey), r = new Array(), i = {
      writable: new Array(),
      readonly: new Array()
    }, o = e.addressLookupTableAccounts || [];
    for (const v of o) {
      const S = t.extractTableLookup(v);
      if (S !== void 0) {
        const [T, {
          writable: E,
          readonly: _
        }] = S;
        r.push(T), i.writable.push(...E), i.readonly.push(..._);
      }
    }
    const [c, u] = t.getMessageComponents(), w = new Li(u, i).compileInstructions(e.instructions);
    return new Ui({
      header: c,
      staticAccountKeys: u,
      recentBlockhash: e.recentBlockhash,
      compiledInstructions: w,
      addressTableLookups: r
    });
  }
  serialize() {
    const e = Array();
    $t(e, this.staticAccountKeys.length);
    const t = this.serializeInstructions(), r = Array();
    $t(r, this.compiledInstructions.length);
    const i = this.serializeAddressTableLookups(), o = Array();
    $t(o, this.addressTableLookups.length);
    const c = ue([Ne("prefix"), ue([Ne("numRequiredSignatures"), Ne("numReadonlySignedAccounts"), Ne("numReadonlyUnsignedAccounts")], "header"), $e(e.length, "staticAccountKeysLength"), Ft(Be(), this.staticAccountKeys.length, "staticAccountKeys"), Be("recentBlockhash"), $e(r.length, "instructionsLength"), $e(t.length, "serializedInstructions"), $e(o.length, "addressTableLookupsLength"), $e(i.length, "serializedAddressTableLookups")]), u = new Uint8Array(gr), d = 1 << 7, w = c.encode({
      prefix: d,
      header: this.header,
      staticAccountKeysLength: new Uint8Array(e),
      staticAccountKeys: this.staticAccountKeys.map((v) => v.toBytes()),
      recentBlockhash: Ct.decode(this.recentBlockhash),
      instructionsLength: new Uint8Array(r),
      serializedInstructions: t,
      addressTableLookupsLength: new Uint8Array(o),
      serializedAddressTableLookups: i
    }, u);
    return u.slice(0, w);
  }
  serializeInstructions() {
    let e = 0;
    const t = new Uint8Array(gr);
    for (const r of this.compiledInstructions) {
      const i = Array();
      $t(i, r.accountKeyIndexes.length);
      const o = Array();
      $t(o, r.data.length), e += ue([Ne("programIdIndex"), $e(i.length, "encodedAccountKeyIndexesLength"), Ft(Ne(), r.accountKeyIndexes.length, "accountKeyIndexes"), $e(o.length, "encodedDataLength"), $e(r.data.length, "data")]).encode({
        programIdIndex: r.programIdIndex,
        encodedAccountKeyIndexesLength: new Uint8Array(i),
        accountKeyIndexes: r.accountKeyIndexes,
        encodedDataLength: new Uint8Array(o),
        data: r.data
      }, t, e);
    }
    return t.slice(0, e);
  }
  serializeAddressTableLookups() {
    let e = 0;
    const t = new Uint8Array(gr);
    for (const r of this.addressTableLookups) {
      const i = Array();
      $t(i, r.writableIndexes.length);
      const o = Array();
      $t(o, r.readonlyIndexes.length), e += ue([Be("accountKey"), $e(i.length, "encodedWritableIndexesLength"), Ft(Ne(), r.writableIndexes.length, "writableIndexes"), $e(o.length, "encodedReadonlyIndexesLength"), Ft(Ne(), r.readonlyIndexes.length, "readonlyIndexes")]).encode({
        accountKey: r.accountKey.toBytes(),
        encodedWritableIndexesLength: new Uint8Array(i),
        writableIndexes: r.writableIndexes,
        encodedReadonlyIndexesLength: new Uint8Array(o),
        readonlyIndexes: r.readonlyIndexes
      }, t, e);
    }
    return t.slice(0, e);
  }
  static deserialize(e) {
    let t = [...e];
    const r = t.shift(), i = r & tl;
    vt(r !== i, "Expected versioned message but received legacy message");
    const o = i;
    vt(o === 0, `Expected versioned message with version 0 but found version ${o}`);
    const c = {
      numRequiredSignatures: t.shift(),
      numReadonlySignedAccounts: t.shift(),
      numReadonlyUnsignedAccounts: t.shift()
    }, u = [], d = Xt(t);
    for (let _ = 0; _ < d; _++)
      u.push(new fe(t.splice(0, xn)));
    const w = Ct.encode(t.splice(0, xn)), v = Xt(t), S = [];
    for (let _ = 0; _ < v; _++) {
      const C = t.shift(), U = Xt(t), P = t.splice(0, U), z = Xt(t), N = new Uint8Array(t.splice(0, z));
      S.push({
        programIdIndex: C,
        accountKeyIndexes: P,
        data: N
      });
    }
    const T = Xt(t), E = [];
    for (let _ = 0; _ < T; _++) {
      const C = new fe(t.splice(0, xn)), U = Xt(t), P = t.splice(0, U), z = Xt(t), N = t.splice(0, z);
      E.push({
        accountKey: C,
        writableIndexes: P,
        readonlyIndexes: N
      });
    }
    return new Ui({
      header: c,
      staticAccountKeys: u,
      recentBlockhash: w,
      compiledInstructions: S,
      addressTableLookups: E
    });
  }
}
let Rn;
(function(n) {
  n[n.BLOCKHEIGHT_EXCEEDED = 0] = "BLOCKHEIGHT_EXCEEDED", n[n.PROCESSED = 1] = "PROCESSED", n[n.TIMED_OUT = 2] = "TIMED_OUT";
})(Rn || (Rn = {}));
const ap = Ee.Buffer.alloc(Ts).fill(0);
class Sc {
  constructor(e) {
    this.keys = void 0, this.programId = void 0, this.data = Ee.Buffer.alloc(0), this.programId = e.programId, this.keys = e.keys, e.data && (this.data = e.data);
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
class kn {
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
      "instructions" in t ? this.instructions = this.instructions.concat(t.instructions) : "data" in t && "programId" in t && "keys" in t ? this.instructions.push(t) : this.instructions.push(new Sc(t));
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
    for (let C = 0; C < t.length; C++)
      if (t[C].programId === void 0)
        throw new Error(`Transaction instruction index ${C} has undefined program id`);
    const i = [], o = [];
    t.forEach((C) => {
      C.keys.forEach((P) => {
        o.push({
          ...P
        });
      });
      const U = C.programId.toString();
      i.includes(U) || i.push(U);
    }), i.forEach((C) => {
      o.push({
        pubkey: new fe(C),
        isSigner: !1,
        isWritable: !1
      });
    });
    const c = [];
    o.forEach((C) => {
      const U = C.pubkey.toString(), P = c.findIndex((z) => z.pubkey.toString() === U);
      P > -1 ? (c[P].isWritable = c[P].isWritable || C.isWritable, c[P].isSigner = c[P].isSigner || C.isSigner) : c.push(C);
    }), c.sort(function(C, U) {
      return C.isSigner !== U.isSigner ? C.isSigner ? -1 : 1 : C.isWritable !== U.isWritable ? C.isWritable ? -1 : 1 : C.pubkey.toBase58().localeCompare(U.pubkey.toBase58());
    });
    const u = c.findIndex((C) => C.pubkey.equals(r));
    if (u > -1) {
      const [C] = c.splice(u, 1);
      C.isSigner = !0, C.isWritable = !0, c.unshift(C);
    } else
      c.unshift({
        pubkey: r,
        isSigner: !0,
        isWritable: !0
      });
    for (const C of this.signatures) {
      const U = c.findIndex((P) => P.pubkey.equals(C.publicKey));
      if (U > -1)
        c[U].isSigner || (c[U].isSigner = !0, console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."));
      else
        throw new Error(`unknown signer: ${C.publicKey.toString()}`);
    }
    let d = 0, w = 0, v = 0;
    const S = [], T = [];
    c.forEach(({
      pubkey: C,
      isSigner: U,
      isWritable: P
    }) => {
      U ? (S.push(C.toString()), d += 1, P || (w += 1)) : (T.push(C.toString()), P || (v += 1));
    });
    const E = S.concat(T), _ = t.map((C) => {
      const {
        data: U,
        programId: P
      } = C;
      return {
        programIdIndex: E.indexOf(P.toString()),
        accounts: C.keys.map((z) => E.indexOf(z.pubkey.toString())),
        data: Ct.encode(U)
      };
    });
    return _.forEach((C) => {
      vt(C.programIdIndex >= 0), C.accounts.forEach((U) => vt(U >= 0));
    }), new Fn({
      header: {
        numRequiredSignatures: d,
        numReadonlySignedAccounts: w,
        numReadonlyUnsignedAccounts: v
      },
      accountKeys: E,
      recentBlockhash: e,
      instructions: _
    });
  }
  _compile() {
    const e = this.compileMessage(), t = e.accountKeys.slice(0, e.header.numRequiredSignatures);
    return this.signatures.length === t.length && this.signatures.every((i, o) => t[o].equals(i.publicKey)) || (this.signatures = t.map((r) => ({
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
      const i = r.toString();
      return t.has(i) ? !1 : (t.add(i), !0);
    }).map((r) => ({
      signature: null,
      publicKey: r
    }));
  }
  sign(...e) {
    if (e.length === 0)
      throw new Error("No signers");
    const t = /* @__PURE__ */ new Set(), r = [];
    for (const o of e) {
      const c = o.publicKey.toString();
      t.has(c) || (t.add(c), r.push(o));
    }
    this.signatures = r.map((o) => ({
      signature: null,
      publicKey: o.publicKey
    }));
    const i = this._compile();
    this._partialSign(i, ...r);
  }
  partialSign(...e) {
    if (e.length === 0)
      throw new Error("No signers");
    const t = /* @__PURE__ */ new Set(), r = [];
    for (const o of e) {
      const c = o.publicKey.toString();
      t.has(c) || (t.add(c), r.push(o));
    }
    const i = this._compile();
    this._partialSign(i, ...r);
  }
  _partialSign(e, ...t) {
    const r = e.serialize();
    t.forEach((i) => {
      const o = X0(r, i.secretKey);
      this._addSignature(i.publicKey, ri(o));
    });
  }
  addSignature(e, t) {
    this._compile(), this._addSignature(e, t);
  }
  _addSignature(e, t) {
    vt(t.length === 64);
    const r = this.signatures.findIndex((i) => e.equals(i.publicKey));
    if (r < 0)
      throw new Error(`unknown signer: ${e.toString()}`);
    this.signatures[r].signature = Ee.Buffer.from(t);
  }
  verifySignatures() {
    return this._verifySignatures(this.serializeMessage(), !0);
  }
  _verifySignatures(e, t) {
    for (const {
      signature: r,
      publicKey: i
    } of this.signatures)
      if (r === null) {
        if (t)
          return !1;
      } else if (!$0(r, e, i.toBuffer()))
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
    }, e), i = this.serializeMessage();
    if (r && !this._verifySignatures(i, t))
      throw new Error("Signature verification failed");
    return this._serialize(i);
  }
  _serialize(e) {
    const {
      signatures: t
    } = this, r = [];
    $t(r, t.length);
    const i = r.length + t.length * 64 + e.length, o = Ee.Buffer.alloc(i);
    return vt(t.length < 256), Ee.Buffer.from(r).copy(o, 0), t.forEach(({
      signature: c
    }, u) => {
      c !== null && (vt(c.length === 64, "signature has invalid length"), Ee.Buffer.from(c).copy(o, r.length + u * 64));
    }), e.copy(o, r.length + t.length * 64), vt(o.length <= gr, `Transaction too large: ${o.length} > ${gr}`), o;
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
    let i = [];
    for (let o = 0; o < r; o++) {
      const c = t.slice(0, Ts);
      t = t.slice(Ts), i.push(Ct.encode(Ee.Buffer.from(c)));
    }
    return kn.populate(Fn.from(t), i);
  }
  static populate(e, t = []) {
    const r = new kn();
    return r.recentBlockhash = e.recentBlockhash, e.header.numRequiredSignatures > 0 && (r.feePayer = e.accountKeys[0]), t.forEach((i, o) => {
      const c = {
        signature: i == Ct.encode(ap) ? null : Ct.decode(i),
        publicKey: e.accountKeys[o]
      };
      r.signatures.push(c);
    }), e.instructions.forEach((i) => {
      const o = i.accounts.map((c) => {
        const u = e.accountKeys[c];
        return {
          pubkey: u,
          isSigner: r.signatures.some((d) => d.publicKey.toString() === u.toString()) || e.isAccountSigner(c),
          isWritable: e.isAccountWritable(c)
        };
      });
      r.instructions.push(new Sc({
        keys: o,
        programId: e.accountKeys[i.programIdIndex],
        data: Ct.decode(i.data)
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
function yi(n) {
  return new Promise((e) => setTimeout(e, n));
}
const cp = Mt("lamportsPerSignature"), il = ue([ge("version"), ge("state"), Be("authorizedPubkey"), Be("nonce"), ue([cp], "feeCalculator")]);
il.span;
class pa {
  constructor(e) {
    this.authorizedPubkey = void 0, this.nonce = void 0, this.feeCalculator = void 0, this.authorizedPubkey = e.authorizedPubkey, this.nonce = e.nonce, this.feeCalculator = e.feeCalculator;
  }
  static fromAccountData(e) {
    const t = il.decode(ri(e), 0);
    return new pa({
      authorizedPubkey: new fe(t.authorizedPubkey),
      nonce: new fe(t.nonce).toString(),
      feeCalculator: t.feeCalculator
    });
  }
}
const up = (n) => {
  const e = n.decode.bind(n), t = n.encode.bind(n);
  return {
    decode: e,
    encode: t
  };
}, lp = (n) => (e) => {
  const t = $e(n, e), {
    encode: r,
    decode: i
  } = up(t), o = t;
  return o.decode = (c, u) => {
    const d = i(c, u);
    return Rd(Ee.Buffer.from(d));
  }, o.encode = (c, u, d) => {
    const w = Od(c, n);
    return r(w, u, d);
  }, o;
}, br = lp(8);
Object.freeze({
  Create: {
    index: 0,
    layout: ue([ge("instruction"), qt("lamports"), qt("space"), Be("programId")])
  },
  Assign: {
    index: 1,
    layout: ue([ge("instruction"), Be("programId")])
  },
  Transfer: {
    index: 2,
    layout: ue([ge("instruction"), br("lamports")])
  },
  CreateWithSeed: {
    index: 3,
    layout: ue([ge("instruction"), Be("base"), lr("seed"), qt("lamports"), qt("space"), Be("programId")])
  },
  AdvanceNonceAccount: {
    index: 4,
    layout: ue([ge("instruction")])
  },
  WithdrawNonceAccount: {
    index: 5,
    layout: ue([ge("instruction"), qt("lamports")])
  },
  InitializeNonceAccount: {
    index: 6,
    layout: ue([ge("instruction"), Be("authorized")])
  },
  AuthorizeNonceAccount: {
    index: 7,
    layout: ue([ge("instruction"), Be("authorized")])
  },
  Allocate: {
    index: 8,
    layout: ue([ge("instruction"), qt("space")])
  },
  AllocateWithSeed: {
    index: 9,
    layout: ue([ge("instruction"), Be("base"), lr("seed"), qt("space"), Be("programId")])
  },
  AssignWithSeed: {
    index: 10,
    layout: ue([ge("instruction"), Be("base"), lr("seed"), Be("programId")])
  },
  TransferWithSeed: {
    index: 11,
    layout: ue([ge("instruction"), br("lamports"), lr("seed"), Be("programId")])
  },
  UpgradeNonceAccount: {
    index: 12,
    layout: ue([ge("instruction")])
  }
});
new fe("11111111111111111111111111111111");
new fe("BPFLoader2111111111111111111111111111111111");
var fp = Object.prototype.toString, hp = Object.keys || function(n) {
  var e = [];
  for (var t in n)
    e.push(t);
  return e;
};
function Tr(n, e) {
  var t, r, i, o, c, u, d;
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
      if (d = fp.call(n), d === "[object Array]") {
        for (i = "[", r = n.length - 1, t = 0; t < r; t++)
          i += Tr(n[t], !0) + ",";
        return r > -1 && (i += Tr(n[t], !0)), i + "]";
      } else if (d === "[object Object]") {
        for (o = hp(n).sort(), r = o.length, i = "", t = 0; t < r; )
          c = o[t], u = Tr(n[c], !1), u !== void 0 && (i && (i += ","), i += JSON.stringify(c) + ":" + u), t++;
        return "{" + i + "}";
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
var dp = function(n) {
  var e = Tr(n, !1);
  if (e !== void 0)
    return "" + e;
}, pp = dp;
const _r = 32;
function us(n) {
  let e = 0;
  for (; n > 1; )
    n /= 2, e++;
  return e;
}
function gp(n) {
  return n === 0 ? 1 : (n--, n |= n >> 1, n |= n >> 2, n |= n >> 4, n |= n >> 8, n |= n >> 16, n |= n >> 32, n + 1);
}
class yp {
  constructor(e, t, r, i, o) {
    this.slotsPerEpoch = void 0, this.leaderScheduleSlotOffset = void 0, this.warmup = void 0, this.firstNormalEpoch = void 0, this.firstNormalSlot = void 0, this.slotsPerEpoch = e, this.leaderScheduleSlotOffset = t, this.warmup = r, this.firstNormalEpoch = i, this.firstNormalSlot = o;
  }
  getEpoch(e) {
    return this.getEpochAndSlotIndex(e)[0];
  }
  getEpochAndSlotIndex(e) {
    if (e < this.firstNormalSlot) {
      const t = us(gp(e + _r + 1)) - us(_r) - 1, r = this.getSlotsInEpoch(t), i = e - (r - _r);
      return [t, i];
    } else {
      const t = e - this.firstNormalSlot, r = Math.floor(t / this.slotsPerEpoch), i = this.firstNormalEpoch + r, o = t % this.slotsPerEpoch;
      return [i, o];
    }
  }
  getFirstSlotInEpoch(e) {
    return e <= this.firstNormalEpoch ? (Math.pow(2, e) - 1) * _r : (e - this.firstNormalEpoch) * this.slotsPerEpoch + this.firstNormalSlot;
  }
  getLastSlotInEpoch(e) {
    return this.getFirstSlotInEpoch(e) + this.getSlotsInEpoch(e) - 1;
  }
  getSlotsInEpoch(e) {
    return e < this.firstNormalEpoch ? Math.pow(2, e + us(_r)) : this.slotsPerEpoch;
  }
}
class Ic extends Error {
  constructor(e, t) {
    super(e), this.logs = void 0, this.logs = t;
  }
}
class he extends Error {
  constructor({
    code: e,
    message: t,
    data: r
  }, i) {
    super(i != null ? `${i}: ${t}` : t), this.code = void 0, this.data = void 0, this.code = e, this.data = r, this.name = "SolanaJSONRPCError";
  }
}
var wp = globalThis.fetch;
const mp = 160, bp = 64, Ap = mp / bp, vp = 1e3 / Ap;
function Ep(n, e) {
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
const Bc = 56;
class Mc {
  constructor(e) {
    this.key = void 0, this.state = void 0, this.key = e.key, this.state = e.state;
  }
  isActive() {
    const e = BigInt("0xffffffffffffffff");
    return this.state.deactivationSlot === e;
  }
  static deserialize(e) {
    const t = Ep(xp, e), r = e.length - Bc;
    vt(r >= 0, "lookup table is invalid"), vt(r % 32 === 0, "lookup table is invalid");
    const i = r / 32, {
      addresses: o
    } = ue([Ft(Be(), i, "addresses")]).decode(e.slice(Bc));
    return {
      deactivationSlot: t.deactivationSlot,
      lastExtendedSlot: t.lastExtendedSlot,
      lastExtendedSlotStartIndex: t.lastExtendedStartIndex,
      authority: t.authority.length !== 0 ? new fe(t.authority[0]) : void 0,
      addresses: o.map((c) => new fe(c))
    };
  }
}
const xp = {
  index: 1,
  layout: ue([
    ge("typeIndex"),
    br("deactivationSlot"),
    Mt("lastExtendedSlot"),
    Ne("lastExtendedStartIndex"),
    Ne(),
    Ft(Be(), Kn(Ne(), -1), "authority")
  ])
}, Sp = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i;
function Ip(n) {
  const e = n.match(Sp);
  if (e == null)
    throw TypeError(`Failed to validate endpoint URL \`${n}\``);
  const [
    t,
    r,
    i,
    o
  ] = e, c = n.startsWith("https:") ? "wss:" : "ws:", u = i == null ? null : parseInt(i.slice(1), 10), d = u == null ? "" : `:${u + 1}`;
  return `${c}//${r}${d}${o}`;
}
var ls;
const xt = ni(oa(fe), te(), (n) => new fe(n)), ol = sa([te(), Xe("base64")]), ga = ni(oa(Ee.Buffer), ol, (n) => Ee.Buffer.from(n[0], "base64")), Bp = 30 * 1e3;
function Mp(n) {
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
      ...i
    } = n;
    e = r, t = i;
  }
  return {
    commitment: e,
    config: t
  };
}
function sl(n) {
  return Wt([J({
    jsonrpc: Xe("2.0"),
    id: te(),
    result: n
  }), J({
    jsonrpc: Xe("2.0"),
    id: te(),
    error: J({
      code: ti(),
      message: te(),
      data: Se(Wd())
    })
  })]);
}
const _p = sl(ti());
function Ce(n) {
  return ni(sl(n), _p, (e) => "error" in e ? e : {
    ...e,
    result: re(e.result, n)
  });
}
function St(n) {
  return Ce(J({
    context: J({
      slot: j()
    }),
    value: n
  }));
}
function no(n) {
  return J({
    context: J({
      slot: j()
    }),
    value: n
  });
}
function fs(n, e) {
  return n === 0 ? new Ui({
    header: e.header,
    staticAccountKeys: e.accountKeys.map((t) => new fe(t)),
    recentBlockhash: e.recentBlockhash,
    compiledInstructions: e.instructions.map((t) => ({
      programIdIndex: t.programIdIndex,
      accountKeyIndexes: t.accounts,
      data: Ct.decode(t.data)
    })),
    addressTableLookups: e.addressTableLookups
  }) : new Fn(e);
}
const Cp = J({
  foundation: j(),
  foundationTerm: j(),
  initial: j(),
  taper: j(),
  terminal: j()
}), Tp = Ce(ce(de(J({
  epoch: j(),
  effectiveSlot: j(),
  amount: j(),
  postBalance: j()
})))), Rp = J({
  epoch: j(),
  slotIndex: j(),
  slotsInEpoch: j(),
  absoluteSlot: j(),
  blockHeight: Se(j()),
  transactionCount: Se(j())
}), kp = J({
  slotsPerEpoch: j(),
  leaderScheduleSlotOffset: j(),
  warmup: Sn(),
  firstNormalEpoch: j(),
  firstNormalSlot: j()
}), Np = Wu(te(), ce(j())), ir = de(Wt([J({}), te()])), Op = J({
  err: ir
}), Lp = Xe("receivedSignature"), Up = J({
  "solana-core": te(),
  "feature-set": Se(j())
}), _c = St(J({
  err: de(Wt([J({}), te()])),
  logs: de(ce(te())),
  accounts: Se(de(ce(de(J({
    executable: Sn(),
    owner: te(),
    lamports: j(),
    data: ce(te()),
    rentEpoch: Se(j())
  }))))),
  unitsConsumed: Se(j()),
  returnData: Se(de(J({
    programId: te(),
    data: sa([te(), Xe("base64")])
  })))
})), Dp = St(J({
  byIdentity: Wu(te(), ce(j())),
  range: J({
    firstSlot: j(),
    lastSlot: j()
  })
}));
function Pp(n, e, t, r, i) {
  const o = t || wp;
  let c;
  return r && (c = async (d, w) => {
    const v = await new Promise((S, T) => {
      try {
        r(d, w, (E, _) => S([E, _]));
      } catch (E) {
        T(E);
      }
    });
    return await o(...v);
  }), new N0(async (d, w) => {
    const S = {
      method: "POST",
      body: d,
      agent: void 0,
      headers: Object.assign({
        "Content-Type": "application/json"
      }, e || {}, Ng)
    };
    try {
      let T = 5, E, _ = 500;
      for (; c ? E = await c(n, S) : E = await o(n, S), !(E.status !== 429 || i === !0 || (T -= 1, T === 0)); )
        console.log(`Server responded with ${E.status} ${E.statusText}.  Retrying after ${_}ms delay...`), await yi(_), _ *= 2;
      const C = await E.text();
      E.ok ? w(null, C) : w(new Error(`${E.status} ${E.statusText}: ${C}`));
    } catch (T) {
      T instanceof Error && w(T);
    } finally {
    }
  }, {});
}
function Fp(n) {
  return (e, t) => new Promise((r, i) => {
    n.request(e, t, (o, c) => {
      if (o) {
        i(o);
        return;
      }
      r(c);
    });
  });
}
function zp(n) {
  return (e) => new Promise((t, r) => {
    e.length === 0 && t([]);
    const i = e.map((o) => n.request(o.methodName, o.args));
    n.request(i, (o, c) => {
      if (o) {
        r(o);
        return;
      }
      t(c);
    });
  });
}
const Hp = Ce(Cp), Wp = Ce(Rp), jp = Ce(kp), Gp = Ce(Np), qp = Ce(j()), Qp = St(J({
  total: j(),
  circulating: j(),
  nonCirculating: j(),
  nonCirculatingAccounts: ce(xt)
})), Rs = J({
  amount: te(),
  uiAmount: de(j()),
  decimals: j(),
  uiAmountString: Se(te())
}), Yp = St(ce(J({
  address: xt,
  amount: te(),
  uiAmount: de(j()),
  decimals: j(),
  uiAmountString: Se(te())
}))), Kp = St(ce(J({
  pubkey: xt,
  account: J({
    executable: Sn(),
    owner: xt,
    lamports: j(),
    data: ga,
    rentEpoch: j()
  })
}))), ks = J({
  program: te(),
  parsed: ti(),
  space: j()
}), Vp = St(ce(J({
  pubkey: xt,
  account: J({
    executable: Sn(),
    owner: xt,
    lamports: j(),
    data: ks,
    rentEpoch: j()
  })
}))), Zp = St(ce(J({
  lamports: j(),
  address: xt
}))), zr = J({
  executable: Sn(),
  owner: xt,
  lamports: j(),
  data: ga,
  rentEpoch: j()
}), Jp = J({
  pubkey: xt,
  account: zr
}), Xp = ni(Wt([oa(Ee.Buffer), ks]), Wt([ol, ks]), (n) => Array.isArray(n) ? re(n, ga) : n), al = J({
  executable: Sn(),
  owner: xt,
  lamports: j(),
  data: Xp,
  rentEpoch: j()
}), $p = J({
  pubkey: xt,
  account: al
}), eg = J({
  state: Wt([Xe("active"), Xe("inactive"), Xe("activating"), Xe("deactivating")]),
  active: j(),
  inactive: j()
}), tg = Ce(ce(J({
  signature: te(),
  slot: j(),
  err: ir,
  memo: de(te()),
  blockTime: Se(de(j()))
}))), ng = Ce(ce(J({
  signature: te(),
  slot: j(),
  err: ir,
  memo: de(te()),
  blockTime: Se(de(j()))
}))), rg = J({
  subscription: j(),
  result: no(zr)
}), ig = J({
  pubkey: xt,
  account: zr
}), og = J({
  subscription: j(),
  result: no(ig)
}), sg = J({
  parent: j(),
  slot: j(),
  root: j()
}), ag = J({
  subscription: j(),
  result: sg
}), cg = Wt([J({
  type: Wt([Xe("firstShredReceived"), Xe("completed"), Xe("optimisticConfirmation"), Xe("root")]),
  slot: j(),
  timestamp: j()
}), J({
  type: Xe("createdBank"),
  parent: j(),
  slot: j(),
  timestamp: j()
}), J({
  type: Xe("frozen"),
  slot: j(),
  timestamp: j(),
  stats: J({
    numTransactionEntries: j(),
    numSuccessfulTransactions: j(),
    numFailedTransactions: j(),
    maxTransactionsPerEntry: j()
  })
}), J({
  type: Xe("dead"),
  slot: j(),
  timestamp: j(),
  err: te()
})]), ug = J({
  subscription: j(),
  result: cg
}), lg = J({
  subscription: j(),
  result: no(Wt([Op, Lp]))
}), fg = J({
  subscription: j(),
  result: j()
}), hg = J({
  pubkey: te(),
  gossip: de(te()),
  tpu: de(te()),
  rpc: de(te()),
  version: de(te())
}), Cc = J({
  votePubkey: te(),
  nodePubkey: te(),
  activatedStake: j(),
  epochVoteAccount: Sn(),
  epochCredits: ce(sa([j(), j(), j()])),
  commission: j(),
  lastVote: j(),
  rootSlot: de(j())
}), dg = Ce(J({
  current: ce(Cc),
  delinquent: ce(Cc)
})), pg = Wt([Xe("processed"), Xe("confirmed"), Xe("finalized")]), gg = J({
  slot: j(),
  confirmations: de(j()),
  err: ir,
  confirmationStatus: Se(pg)
}), yg = St(ce(de(gg))), wg = Ce(j()), cl = J({
  accountKey: xt,
  writableIndexes: ce(j()),
  readonlyIndexes: ce(j())
}), ya = J({
  signatures: ce(te()),
  message: J({
    accountKeys: ce(te()),
    header: J({
      numRequiredSignatures: j(),
      numReadonlySignedAccounts: j(),
      numReadonlyUnsignedAccounts: j()
    }),
    instructions: ce(J({
      accounts: ce(j()),
      data: te(),
      programIdIndex: j()
    })),
    recentBlockhash: te(),
    addressTableLookups: Se(ce(cl))
  })
}), ul = J({
  parsed: ti(),
  program: te(),
  programId: xt
}), ll = J({
  accounts: ce(xt),
  data: te(),
  programId: xt
}), mg = Wt([ll, ul]), bg = Wt([J({
  parsed: ti(),
  program: te(),
  programId: te()
}), J({
  accounts: ce(te()),
  data: te(),
  programId: te()
})]), fl = ni(mg, bg, (n) => "accounts" in n ? re(n, ll) : re(n, ul)), Ag = J({
  signatures: ce(te()),
  message: J({
    accountKeys: ce(J({
      pubkey: xt,
      signer: Sn(),
      writable: Sn(),
      source: Se(Wt([Xe("transaction"), Xe("lookupTable")]))
    })),
    instructions: ce(fl),
    recentBlockhash: te(),
    addressTableLookups: Se(de(ce(cl)))
  })
}), Di = J({
  accountIndex: j(),
  mint: te(),
  owner: Se(te()),
  uiTokenAmount: Rs
}), hl = J({
  writable: ce(xt),
  readonly: ce(xt)
}), wa = J({
  err: ir,
  fee: j(),
  innerInstructions: Se(de(ce(J({
    index: j(),
    instructions: ce(J({
      accounts: ce(j()),
      data: te(),
      programIdIndex: j()
    }))
  })))),
  preBalances: ce(j()),
  postBalances: ce(j()),
  logMessages: Se(de(ce(te()))),
  preTokenBalances: Se(de(ce(Di))),
  postTokenBalances: Se(de(ce(Di))),
  loadedAddresses: Se(hl),
  computeUnitsConsumed: Se(j())
}), vg = J({
  err: ir,
  fee: j(),
  innerInstructions: Se(de(ce(J({
    index: j(),
    instructions: ce(fl)
  })))),
  preBalances: ce(j()),
  postBalances: ce(j()),
  logMessages: Se(de(ce(te()))),
  preTokenBalances: Se(de(ce(Di))),
  postTokenBalances: Se(de(ce(Di))),
  loadedAddresses: Se(hl),
  computeUnitsConsumed: Se(j())
}), ma = Wt([Xe(0), Xe("legacy")]), Eg = Ce(de(J({
  blockhash: te(),
  previousBlockhash: te(),
  parentSlot: j(),
  transactions: ce(J({
    transaction: ya,
    meta: de(wa),
    version: Se(ma)
  })),
  rewards: Se(ce(J({
    pubkey: te(),
    lamports: j(),
    postBalance: de(j()),
    rewardType: de(te())
  }))),
  blockTime: de(j()),
  blockHeight: de(j())
}))), xg = Ce(de(J({
  blockhash: te(),
  previousBlockhash: te(),
  parentSlot: j(),
  transactions: ce(J({
    transaction: ya,
    meta: de(wa)
  })),
  rewards: Se(ce(J({
    pubkey: te(),
    lamports: j(),
    postBalance: de(j()),
    rewardType: de(te())
  }))),
  blockTime: de(j())
}))), Tc = Ce(de(J({
  blockhash: te(),
  previousBlockhash: te(),
  parentSlot: j(),
  signatures: ce(te()),
  blockTime: de(j())
}))), hs = Ce(de(J({
  slot: j(),
  meta: wa,
  blockTime: Se(de(j())),
  transaction: ya,
  version: Se(ma)
}))), hi = Ce(de(J({
  slot: j(),
  transaction: Ag,
  meta: de(vg),
  blockTime: Se(de(j())),
  version: Se(ma)
}))), Sg = St(J({
  blockhash: te(),
  feeCalculator: J({
    lamportsPerSignature: j()
  })
})), Ig = St(J({
  blockhash: te(),
  lastValidBlockHeight: j()
})), Bg = J({
  slot: j(),
  numTransactions: j(),
  numSlots: j(),
  samplePeriodSecs: j()
}), Mg = Ce(ce(Bg)), _g = St(de(J({
  feeCalculator: J({
    lamportsPerSignature: j()
  })
}))), Cg = Ce(te()), Tg = Ce(te()), Rg = J({
  err: ir,
  logs: ce(te()),
  signature: te()
}), kg = J({
  result: no(Rg),
  subscription: j()
}), Ng = {
  "solana-client": `js/${(ls = "0.0.0-development") !== null && ls !== void 0 ? ls : "UNKNOWN"}`
};
class Og {
  constructor(e, t) {
    this._commitment = void 0, this._confirmTransactionInitialTimeout = void 0, this._rpcEndpoint = void 0, this._rpcWsEndpoint = void 0, this._rpcClient = void 0, this._rpcRequest = void 0, this._rpcBatchRequest = void 0, this._rpcWebSocket = void 0, this._rpcWebSocketConnected = !1, this._rpcWebSocketHeartbeat = null, this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketGeneration = 0, this._disableBlockhashCaching = !1, this._pollingBlockhash = !1, this._blockhashInfo = {
      latestBlockhash: null,
      lastFetch: 0,
      transactionSignatures: [],
      simulatedSignatures: []
    }, this._nextClientSubscriptionId = 0, this._subscriptionDisposeFunctionsByClientSubscriptionId = {}, this._subscriptionCallbacksByServerSubscriptionId = {}, this._subscriptionsByHash = {}, this._subscriptionsAutoDisposedByRpc = /* @__PURE__ */ new Set();
    let r, i, o, c, u;
    t && typeof t == "string" ? this._commitment = t : t && (this._commitment = t.commitment, this._confirmTransactionInitialTimeout = t.confirmTransactionInitialTimeout, r = t.wsEndpoint, i = t.httpHeaders, o = t.fetch, c = t.fetchMiddleware, u = t.disableRetryOnRateLimit), this._rpcEndpoint = Mp(e), this._rpcWsEndpoint = r || Ip(e), this._rpcClient = Pp(e, i, o, c, u), this._rpcRequest = Fp(this._rpcClient), this._rpcBatchRequest = zp(this._rpcClient), this._rpcWebSocket = new ju(this._rpcWsEndpoint, {
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
      config: i
    } = tt(t), o = this._buildArgs(
      [e.toBase58()],
      r,
      void 0,
      i
    ), c = await this._rpcRequest("getBalance", o), u = re(c, St(j()));
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
    const t = await this._rpcRequest("getBlockTime", [e]), r = re(t, Ce(de(j())));
    if ("error" in r)
      throw new he(r.error, `failed to get block time for slot ${e}`);
    return r.result;
  }
  async getMinimumLedgerSlot() {
    const e = await this._rpcRequest("minimumLedgerSlot", []), t = re(e, Ce(j()));
    if ("error" in t)
      throw new he(t.error, "failed to get minimum ledger slot");
    return t.result;
  }
  async getFirstAvailableBlock() {
    const e = await this._rpcRequest("getFirstAvailableBlock", []), t = re(e, qp);
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
    const r = await this._rpcRequest("getSupply", [t]), i = re(r, Qp);
    if ("error" in i)
      throw new he(i.error, "failed to get supply");
    return i.result;
  }
  async getTokenSupply(e, t) {
    const r = this._buildArgs([e.toBase58()], t), i = await this._rpcRequest("getTokenSupply", r), o = re(i, St(Rs));
    if ("error" in o)
      throw new he(o.error, "failed to get token supply");
    return o.result;
  }
  async getTokenAccountBalance(e, t) {
    const r = this._buildArgs([e.toBase58()], t), i = await this._rpcRequest("getTokenAccountBalance", r), o = re(i, St(Rs));
    if ("error" in o)
      throw new he(o.error, "failed to get token account balance");
    return o.result;
  }
  async getTokenAccountsByOwner(e, t, r) {
    const {
      commitment: i,
      config: o
    } = tt(r);
    let c = [e.toBase58()];
    "mint" in t ? c.push({
      mint: t.mint.toBase58()
    }) : c.push({
      programId: t.programId.toBase58()
    });
    const u = this._buildArgs(c, i, "base64", o), d = await this._rpcRequest("getTokenAccountsByOwner", u), w = re(d, Kp);
    if ("error" in w)
      throw new he(w.error, `failed to get token accounts owned by account ${e.toBase58()}`);
    return w.result;
  }
  async getParsedTokenAccountsByOwner(e, t, r) {
    let i = [e.toBase58()];
    "mint" in t ? i.push({
      mint: t.mint.toBase58()
    }) : i.push({
      programId: t.programId.toBase58()
    });
    const o = this._buildArgs(i, r, "jsonParsed"), c = await this._rpcRequest("getTokenAccountsByOwner", o), u = re(c, Vp);
    if ("error" in u)
      throw new he(u.error, `failed to get token accounts owned by account ${e.toBase58()}`);
    return u.result;
  }
  async getLargestAccounts(e) {
    const t = {
      ...e,
      commitment: e && e.commitment || this.commitment
    }, r = t.filter || t.commitment ? [t] : [], i = await this._rpcRequest("getLargestAccounts", r), o = re(i, Zp);
    if ("error" in o)
      throw new he(o.error, "failed to get largest accounts");
    return o.result;
  }
  async getTokenLargestAccounts(e, t) {
    const r = this._buildArgs([e.toBase58()], t), i = await this._rpcRequest("getTokenLargestAccounts", r), o = re(i, Yp);
    if ("error" in o)
      throw new he(o.error, "failed to get token largest accounts");
    return o.result;
  }
  async getAccountInfoAndContext(e, t) {
    const {
      commitment: r,
      config: i
    } = tt(t), o = this._buildArgs([e.toBase58()], r, "base64", i), c = await this._rpcRequest("getAccountInfo", o), u = re(c, St(de(zr)));
    if ("error" in u)
      throw new he(u.error, `failed to get info about account ${e.toBase58()}`);
    return u.result;
  }
  async getParsedAccountInfo(e, t) {
    const {
      commitment: r,
      config: i
    } = tt(t), o = this._buildArgs([e.toBase58()], r, "jsonParsed", i), c = await this._rpcRequest("getAccountInfo", o), u = re(c, St(de(al)));
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
      config: i
    } = tt(t), o = e.map((w) => w.toBase58()), c = this._buildArgs([o], r, "base64", i), u = await this._rpcRequest("getMultipleAccounts", c), d = re(u, St(ce(de(zr))));
    if ("error" in d)
      throw new he(d.error, `failed to get info for accounts ${o}`);
    return d.result;
  }
  async getMultipleAccountsInfo(e, t) {
    return (await this.getMultipleAccountsInfoAndContext(e, t)).value;
  }
  async getStakeActivation(e, t, r) {
    const {
      commitment: i,
      config: o
    } = tt(t), c = this._buildArgs(
      [e.toBase58()],
      i,
      void 0,
      {
        ...o,
        epoch: r != null ? r : o == null ? void 0 : o.epoch
      }
    ), u = await this._rpcRequest("getStakeActivation", c), d = re(u, Ce(eg));
    if ("error" in d)
      throw new he(d.error, `failed to get Stake Activation ${e.toBase58()}`);
    return d.result;
  }
  async getProgramAccounts(e, t) {
    const {
      commitment: r,
      config: i
    } = tt(t), {
      encoding: o,
      ...c
    } = i || {}, u = this._buildArgs([e.toBase58()], r, o || "base64", c), d = await this._rpcRequest("getProgramAccounts", u), w = re(d, Ce(ce(Jp)));
    if ("error" in w)
      throw new he(w.error, `failed to get accounts owned by program ${e.toBase58()}`);
    return w.result;
  }
  async getParsedProgramAccounts(e, t) {
    const {
      commitment: r,
      config: i
    } = tt(t), o = this._buildArgs([e.toBase58()], r, "jsonParsed", i), c = await this._rpcRequest("getProgramAccounts", o), u = re(c, Ce(ce($p)));
    if ("error" in u)
      throw new he(u.error, `failed to get accounts owned by program ${e.toBase58()}`);
    return u.result;
  }
  async confirmTransaction(e, t) {
    let r;
    typeof e == "string" ? r = e : r = e.signature;
    let i;
    try {
      i = Ct.decode(r);
    } catch {
      throw new Error("signature must be base58 encoded: " + r);
    }
    vt(i.length === 64, "signature has invalid length");
    const o = t || this.commitment;
    let c, u, d = !1;
    const w = new Promise((T, E) => {
      try {
        u = this.onSignature(r, (_, C) => {
          u = void 0;
          const U = {
            context: C,
            value: _
          };
          d = !0, T({
            __type: Rn.PROCESSED,
            response: U
          });
        }, o);
      } catch (_) {
        E(_);
      }
    }), v = new Promise((T) => {
      if (typeof e == "string") {
        let E = this._confirmTransactionInitialTimeout || 6e4;
        switch (o) {
          case "processed":
          case "recent":
          case "single":
          case "confirmed":
          case "singleGossip": {
            E = this._confirmTransactionInitialTimeout || 30 * 1e3;
            break;
          }
        }
        c = setTimeout(() => T({
          __type: Rn.TIMED_OUT,
          timeoutMs: E
        }), E);
      } else {
        let E = e;
        const _ = async () => {
          try {
            return await this.getBlockHeight(t);
          } catch {
            return -1;
          }
        };
        (async () => {
          let C = await _();
          if (!d) {
            for (; C <= E.lastValidBlockHeight; )
              if (await yi(1e3), d || (C = await _(), d))
                return;
            T({
              __type: Rn.BLOCKHEIGHT_EXCEEDED
            });
          }
        })();
      }
    });
    let S;
    try {
      const T = await Promise.race([w, v]);
      switch (T.__type) {
        case Rn.BLOCKHEIGHT_EXCEEDED:
          throw new nl(r);
        case Rn.PROCESSED:
          S = T.response;
          break;
        case Rn.TIMED_OUT:
          throw new rl(r, T.timeoutMs / 1e3);
      }
    } finally {
      clearTimeout(c), u && this.removeSignatureListener(u);
    }
    return S;
  }
  async getClusterNodes() {
    const e = await this._rpcRequest("getClusterNodes", []), t = re(e, Ce(ce(hg)));
    if ("error" in t)
      throw new he(t.error, "failed to get cluster nodes");
    return t.result;
  }
  async getVoteAccounts(e) {
    const t = this._buildArgs([], e), r = await this._rpcRequest("getVoteAccounts", t), i = re(r, dg);
    if ("error" in i)
      throw new he(i.error, "failed to get vote accounts");
    return i.result;
  }
  async getSlot(e) {
    const {
      commitment: t,
      config: r
    } = tt(e), i = this._buildArgs(
      [],
      t,
      void 0,
      r
    ), o = await this._rpcRequest("getSlot", i), c = re(o, Ce(j()));
    if ("error" in c)
      throw new he(c.error, "failed to get slot");
    return c.result;
  }
  async getSlotLeader(e) {
    const {
      commitment: t,
      config: r
    } = tt(e), i = this._buildArgs(
      [],
      t,
      void 0,
      r
    ), o = await this._rpcRequest("getSlotLeader", i), c = re(o, Ce(te()));
    if ("error" in c)
      throw new he(c.error, "failed to get slot leader");
    return c.result;
  }
  async getSlotLeaders(e, t) {
    const r = [e, t], i = await this._rpcRequest("getSlotLeaders", r), o = re(i, Ce(ce(xt)));
    if ("error" in o)
      throw new he(o.error, "failed to get slot leaders");
    return o.result;
  }
  async getSignatureStatus(e, t) {
    const {
      context: r,
      value: i
    } = await this.getSignatureStatuses([e], t);
    vt(i.length === 1);
    const o = i[0];
    return {
      context: r,
      value: o
    };
  }
  async getSignatureStatuses(e, t) {
    const r = [e];
    t && r.push(t);
    const i = await this._rpcRequest("getSignatureStatuses", r), o = re(i, yg);
    if ("error" in o)
      throw new he(o.error, "failed to get signature status");
    return o.result;
  }
  async getTransactionCount(e) {
    const {
      commitment: t,
      config: r
    } = tt(e), i = this._buildArgs(
      [],
      t,
      void 0,
      r
    ), o = await this._rpcRequest("getTransactionCount", i), c = re(o, Ce(j()));
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
    const t = this._buildArgs([], e), r = await this._rpcRequest("getInflationGovernor", t), i = re(r, Hp);
    if ("error" in i)
      throw new he(i.error, "failed to get inflation");
    return i.result;
  }
  async getInflationReward(e, t, r) {
    const {
      commitment: i,
      config: o
    } = tt(r), c = this._buildArgs(
      [e.map((w) => w.toBase58())],
      i,
      void 0,
      {
        ...o,
        epoch: t != null ? t : o == null ? void 0 : o.epoch
      }
    ), u = await this._rpcRequest("getInflationReward", c), d = re(u, Tp);
    if ("error" in d)
      throw new he(d.error, "failed to get inflation reward");
    return d.result;
  }
  async getEpochInfo(e) {
    const {
      commitment: t,
      config: r
    } = tt(e), i = this._buildArgs(
      [],
      t,
      void 0,
      r
    ), o = await this._rpcRequest("getEpochInfo", i), c = re(o, Wp);
    if ("error" in c)
      throw new he(c.error, "failed to get epoch info");
    return c.result;
  }
  async getEpochSchedule() {
    const e = await this._rpcRequest("getEpochSchedule", []), t = re(e, jp);
    if ("error" in t)
      throw new he(t.error, "failed to get epoch schedule");
    const r = t.result;
    return new yp(r.slotsPerEpoch, r.leaderScheduleSlotOffset, r.warmup, r.firstNormalEpoch, r.firstNormalSlot);
  }
  async getLeaderSchedule() {
    const e = await this._rpcRequest("getLeaderSchedule", []), t = re(e, Gp);
    if ("error" in t)
      throw new he(t.error, "failed to get leader schedule");
    return t.result;
  }
  async getMinimumBalanceForRentExemption(e, t) {
    const r = this._buildArgs([e], t), i = await this._rpcRequest("getMinimumBalanceForRentExemption", r), o = re(i, wg);
    return "error" in o ? (console.warn("Unable to fetch minimum balance for rent exemption"), 0) : o.result;
  }
  async getRecentBlockhashAndContext(e) {
    const t = this._buildArgs([], e), r = await this._rpcRequest("getRecentBlockhash", t), i = re(r, Sg);
    if ("error" in i)
      throw new he(i.error, "failed to get recent blockhash");
    return i.result;
  }
  async getRecentPerformanceSamples(e) {
    const t = await this._rpcRequest("getRecentPerformanceSamples", e ? [e] : []), r = re(t, Mg);
    if ("error" in r)
      throw new he(r.error, "failed to get recent performance samples");
    return r.result;
  }
  async getFeeCalculatorForBlockhash(e, t) {
    const r = this._buildArgs([e], t), i = await this._rpcRequest("getFeeCalculatorForBlockhash", r), o = re(i, _g);
    if ("error" in o)
      throw new he(o.error, "failed to get fee calculator");
    const {
      context: c,
      value: u
    } = o.result;
    return {
      context: c,
      value: u !== null ? u.feeCalculator : null
    };
  }
  async getFeeForMessage(e, t) {
    const r = e.serialize().toString("base64"), i = this._buildArgs([r], t), o = await this._rpcRequest("getFeeForMessage", i), c = re(o, St(de(j())));
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
    } = tt(e), i = this._buildArgs(
      [],
      t,
      void 0,
      r
    ), o = await this._rpcRequest("getLatestBlockhash", i), c = re(o, Ig);
    if ("error" in c)
      throw new he(c.error, "failed to get latest blockhash");
    return c.result;
  }
  async getVersion() {
    const e = await this._rpcRequest("getVersion", []), t = re(e, Ce(Up));
    if ("error" in t)
      throw new he(t.error, "failed to get version");
    return t.result;
  }
  async getGenesisHash() {
    const e = await this._rpcRequest("getGenesisHash", []), t = re(e, Ce(te()));
    if ("error" in t)
      throw new he(t.error, "failed to get genesis hash");
    return t.result;
  }
  async getBlock(e, t) {
    const {
      commitment: r,
      config: i
    } = tt(t), o = this._buildArgsAtLeastConfirmed(
      [e],
      r,
      void 0,
      i
    ), c = await this._rpcRequest("getBlock", o), u = re(c, Eg);
    if ("error" in u)
      throw new he(u.error, "failed to get confirmed block");
    const d = u.result;
    return d && {
      ...d,
      transactions: d.transactions.map(({
        transaction: w,
        meta: v,
        version: S
      }) => ({
        meta: v,
        transaction: {
          ...w,
          message: fs(S, w.message)
        },
        version: S
      }))
    };
  }
  async getBlockHeight(e) {
    const {
      commitment: t,
      config: r
    } = tt(e), i = this._buildArgs(
      [],
      t,
      void 0,
      r
    ), o = await this._rpcRequest("getBlockHeight", i), c = re(o, Ce(j()));
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
    const i = this._buildArgs([], r, "base64", t), o = await this._rpcRequest("getBlockProduction", i), c = re(o, Dp);
    if ("error" in c)
      throw new he(c.error, "failed to get block production information");
    return c.result;
  }
  async getTransaction(e, t) {
    const {
      commitment: r,
      config: i
    } = tt(t), o = this._buildArgsAtLeastConfirmed(
      [e],
      r,
      void 0,
      i
    ), c = await this._rpcRequest("getTransaction", o), u = re(c, hs);
    if ("error" in u)
      throw new he(u.error, "failed to get transaction");
    const d = u.result;
    return d && {
      ...d,
      transaction: {
        ...d.transaction,
        message: fs(d.version, d.transaction.message)
      }
    };
  }
  async getParsedTransaction(e, t) {
    const {
      commitment: r,
      config: i
    } = tt(t), o = this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", i), c = await this._rpcRequest("getTransaction", o), u = re(c, hi);
    if ("error" in u)
      throw new he(u.error, "failed to get transaction");
    return u.result;
  }
  async getParsedTransactions(e, t) {
    const {
      commitment: r,
      config: i
    } = tt(t), o = e.map((d) => {
      const w = this._buildArgsAtLeastConfirmed([d], r, "jsonParsed", i);
      return {
        methodName: "getTransaction",
        args: w
      };
    });
    return (await this._rpcBatchRequest(o)).map((d) => {
      const w = re(d, hi);
      if ("error" in w)
        throw new he(w.error, "failed to get transactions");
      return w.result;
    });
  }
  async getTransactions(e, t) {
    const {
      commitment: r,
      config: i
    } = tt(t), o = e.map((d) => {
      const w = this._buildArgsAtLeastConfirmed(
        [d],
        r,
        void 0,
        i
      );
      return {
        methodName: "getTransaction",
        args: w
      };
    });
    return (await this._rpcBatchRequest(o)).map((d) => {
      const w = re(d, hs);
      if ("error" in w)
        throw new he(w.error, "failed to get transactions");
      const v = w.result;
      return v && {
        ...v,
        transaction: {
          ...v.transaction,
          message: fs(v.version, v.transaction.message)
        }
      };
    });
  }
  async getConfirmedBlock(e, t) {
    const r = this._buildArgsAtLeastConfirmed([e], t), i = await this._rpcRequest("getConfirmedBlock", r), o = re(i, xg);
    if ("error" in o)
      throw new he(o.error, "failed to get confirmed block");
    const c = o.result;
    if (!c)
      throw new Error("Confirmed block " + e + " not found");
    const u = {
      ...c,
      transactions: c.transactions.map(({
        transaction: d,
        meta: w
      }) => {
        const v = new Fn(d.message);
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
        transaction: kn.populate(d.message, d.signatures)
      }))
    };
  }
  async getBlocks(e, t, r) {
    const i = this._buildArgsAtLeastConfirmed(t !== void 0 ? [e, t] : [e], r), o = await this._rpcRequest("getBlocks", i), c = re(o, Ce(ce(j())));
    if ("error" in c)
      throw new he(c.error, "failed to get blocks");
    return c.result;
  }
  async getBlockSignatures(e, t) {
    const r = this._buildArgsAtLeastConfirmed([e], t, void 0, {
      transactionDetails: "signatures",
      rewards: !1
    }), i = await this._rpcRequest("getBlock", r), o = re(i, Tc);
    if ("error" in o)
      throw new he(o.error, "failed to get block");
    const c = o.result;
    if (!c)
      throw new Error("Block " + e + " not found");
    return c;
  }
  async getConfirmedBlockSignatures(e, t) {
    const r = this._buildArgsAtLeastConfirmed([e], t, void 0, {
      transactionDetails: "signatures",
      rewards: !1
    }), i = await this._rpcRequest("getConfirmedBlock", r), o = re(i, Tc);
    if ("error" in o)
      throw new he(o.error, "failed to get confirmed block");
    const c = o.result;
    if (!c)
      throw new Error("Confirmed block " + e + " not found");
    return c;
  }
  async getConfirmedTransaction(e, t) {
    const r = this._buildArgsAtLeastConfirmed([e], t), i = await this._rpcRequest("getConfirmedTransaction", r), o = re(i, hs);
    if ("error" in o)
      throw new he(o.error, "failed to get transaction");
    const c = o.result;
    if (!c)
      return c;
    const u = new Fn(c.transaction.message), d = c.transaction.signatures;
    return {
      ...c,
      transaction: kn.populate(u, d)
    };
  }
  async getParsedConfirmedTransaction(e, t) {
    const r = this._buildArgsAtLeastConfirmed([e], t, "jsonParsed"), i = await this._rpcRequest("getConfirmedTransaction", r), o = re(i, hi);
    if ("error" in o)
      throw new he(o.error, "failed to get confirmed transaction");
    return o.result;
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
      const u = re(c, hi);
      if ("error" in u)
        throw new he(u.error, "failed to get confirmed transactions");
      return u.result;
    });
  }
  async getConfirmedSignaturesForAddress(e, t, r) {
    let i = {}, o = await this.getFirstAvailableBlock();
    for (; !("until" in i) && (t--, !(t <= 0 || t < o)); )
      try {
        const d = await this.getConfirmedBlockSignatures(t, "finalized");
        d.signatures.length > 0 && (i.until = d.signatures[d.signatures.length - 1].toString());
      } catch (d) {
        if (d instanceof Error && d.message.includes("skipped"))
          continue;
        throw d;
      }
    let c = await this.getSlot("finalized");
    for (; !("before" in i) && (r++, !(r > c)); )
      try {
        const d = await this.getConfirmedBlockSignatures(r);
        d.signatures.length > 0 && (i.before = d.signatures[d.signatures.length - 1].toString());
      } catch (d) {
        if (d instanceof Error && d.message.includes("skipped"))
          continue;
        throw d;
      }
    return (await this.getConfirmedSignaturesForAddress2(e, i)).map((d) => d.signature);
  }
  async getConfirmedSignaturesForAddress2(e, t, r) {
    const i = this._buildArgsAtLeastConfirmed([e.toBase58()], r, void 0, t), o = await this._rpcRequest("getConfirmedSignaturesForAddress2", i), c = re(o, tg);
    if ("error" in c)
      throw new he(c.error, "failed to get confirmed signatures for address");
    return c.result;
  }
  async getSignaturesForAddress(e, t, r) {
    const i = this._buildArgsAtLeastConfirmed([e.toBase58()], r, void 0, t), o = await this._rpcRequest("getSignaturesForAddress", i), c = re(o, ng);
    if ("error" in c)
      throw new he(c.error, "failed to get signatures for address");
    return c.result;
  }
  async getAddressLookupTable(e, t) {
    const {
      context: r,
      value: i
    } = await this.getAccountInfoAndContext(e, t);
    let o = null;
    return i !== null && (o = new Mc({
      key: e,
      state: Mc.deserialize(i.data)
    })), {
      context: r,
      value: o
    };
  }
  async getNonceAndContext(e, t) {
    const {
      context: r,
      value: i
    } = await this.getAccountInfoAndContext(e, t);
    let o = null;
    return i !== null && (o = pa.fromAccountData(i.data)), {
      context: r,
      value: o
    };
  }
  async getNonce(e, t) {
    return await this.getNonceAndContext(e, t).then((r) => r.value).catch((r) => {
      throw new Error("failed to get nonce for account " + e.toBase58() + ": " + r);
    });
  }
  async requestAirdrop(e, t) {
    const r = await this._rpcRequest("requestAirdrop", [e.toBase58(), t]), i = re(r, Cg);
    if ("error" in i)
      throw new he(i.error, `airdrop to ${e.toBase58()} failed`);
    return i.result;
  }
  async _blockhashWithExpiryBlockHeight(e) {
    if (!e) {
      for (; this._pollingBlockhash; )
        await yi(100);
      const r = Date.now() - this._blockhashInfo.lastFetch >= Bp;
      if (this._blockhashInfo.latestBlockhash !== null && !r)
        return this._blockhashInfo.latestBlockhash;
    }
    return await this._pollNewBlockhash();
  }
  async _pollNewBlockhash() {
    this._pollingBlockhash = !0;
    try {
      const e = Date.now(), t = this._blockhashInfo.latestBlockhash, r = t ? t.blockhash : null;
      for (let i = 0; i < 50; i++) {
        const o = await this.getLatestBlockhash("finalized");
        if (r !== o.blockhash)
          return this._blockhashInfo = {
            latestBlockhash: o,
            lastFetch: Date.now(),
            transactionSignatures: [],
            simulatedSignatures: []
          }, o;
        await yi(vp / 2);
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
    } = tt(e), i = this._buildArgs([], t, "base64", r), o = await this._rpcRequest("getStakeMinimumDelegation", i), c = re(o, St(j()));
    if ("error" in c)
      throw new he(c.error, "failed to get stake minimum delegation");
    return c.result;
  }
  async simulateTransaction(e, t, r) {
    if ("message" in e) {
      const C = e.serialize(), U = Ee.Buffer.from(C).toString("base64");
      if (Array.isArray(t) || r !== void 0)
        throw new Error("Invalid arguments");
      const P = t || {};
      P.encoding = "base64", "commitment" in P || (P.commitment = this.commitment);
      const z = [U, P], N = await this._rpcRequest("simulateTransaction", z), F = re(N, _c);
      if ("error" in F)
        throw new Error("failed to simulate transaction: " + F.error.message);
      return F.result;
    }
    let i;
    if (e instanceof kn) {
      let _ = e;
      i = new kn(), i.feePayer = _.feePayer, i.instructions = e.instructions, i.nonceInfo = _.nonceInfo, i.signatures = _.signatures;
    } else
      i = kn.populate(e), i._message = i._json = void 0;
    if (t !== void 0 && !Array.isArray(t))
      throw new Error("Invalid arguments");
    const o = t;
    if (i.nonceInfo && o)
      i.sign(...o);
    else {
      let _ = this._disableBlockhashCaching;
      for (; ; ) {
        const C = await this._blockhashWithExpiryBlockHeight(_);
        if (i.lastValidBlockHeight = C.lastValidBlockHeight, i.recentBlockhash = C.blockhash, !o)
          break;
        if (i.sign(...o), !i.signature)
          throw new Error("!signature");
        const U = i.signature.toString("base64");
        if (!this._blockhashInfo.simulatedSignatures.includes(U) && !this._blockhashInfo.transactionSignatures.includes(U)) {
          this._blockhashInfo.simulatedSignatures.push(U);
          break;
        } else
          _ = !0;
      }
    }
    const c = i._compile(), u = c.serialize(), w = i._serialize(u).toString("base64"), v = {
      encoding: "base64",
      commitment: this.commitment
    };
    if (r) {
      const _ = (Array.isArray(r) ? r : c.nonProgramIds()).map((C) => C.toBase58());
      v.accounts = {
        encoding: "base64",
        addresses: _
      };
    }
    o && (v.sigVerify = !0);
    const S = [w, v], T = await this._rpcRequest("simulateTransaction", S), E = re(T, _c);
    if ("error" in E) {
      let _;
      if ("data" in E.error && (_ = E.error.data.logs, _ && Array.isArray(_))) {
        const C = `
    `, U = C + _.join(C);
        console.error(E.error.message, U);
      }
      throw new Ic("failed to simulate transaction: " + E.error.message, _);
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
    const i = t;
    if (e.nonceInfo)
      e.sign(...i);
    else {
      let c = this._disableBlockhashCaching;
      for (; ; ) {
        const u = await this._blockhashWithExpiryBlockHeight(c);
        if (e.lastValidBlockHeight = u.lastValidBlockHeight, e.recentBlockhash = u.blockhash, e.sign(...i), !e.signature)
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
    const o = e.serialize();
    return await this.sendRawTransaction(o, r);
  }
  async sendRawTransaction(e, t) {
    const r = ri(e).toString("base64");
    return await this.sendEncodedTransaction(r, t);
  }
  async sendEncodedTransaction(e, t) {
    const r = {
      encoding: "base64"
    }, i = t && t.skipPreflight, o = t && t.preflightCommitment || this.commitment;
    t && t.maxRetries != null && (r.maxRetries = t.maxRetries), t && t.minContextSlot != null && (r.minContextSlot = t.minContextSlot), i && (r.skipPreflight = i), o && (r.preflightCommitment = o);
    const c = [e, r], u = await this._rpcRequest("sendTransaction", c), d = re(u, Tg);
    if ("error" in d) {
      let w;
      throw "data" in d.error && (w = d.error.data.logs), new Ic("failed to send transaction: " + d.error.message, w);
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
        const i = this._subscriptionsByHash[r];
        if (i !== void 0)
          switch (i.state) {
            case "pending":
            case "unsubscribed":
              if (i.callbacks.size === 0) {
                delete this._subscriptionsByHash[r], i.state === "unsubscribed" && delete this._subscriptionCallbacksByServerSubscriptionId[i.serverSubscriptionId], await this._updateSubscriptions();
                return;
              }
              await (async () => {
                const {
                  args: o,
                  method: c
                } = i;
                try {
                  this._subscriptionsByHash[r] = {
                    ...i,
                    state: "subscribing"
                  };
                  const u = await this._rpcWebSocket.call(c, o);
                  this._subscriptionsByHash[r] = {
                    ...i,
                    serverSubscriptionId: u,
                    state: "subscribed"
                  }, this._subscriptionCallbacksByServerSubscriptionId[u] = i.callbacks, await this._updateSubscriptions();
                } catch (u) {
                  if (u instanceof Error && console.error(`${c} error for argument`, o, u.message), !t())
                    return;
                  this._subscriptionsByHash[r] = {
                    ...i,
                    state: "pending"
                  }, await this._updateSubscriptions();
                }
              })();
              break;
            case "subscribed":
              i.callbacks.size === 0 && await (async () => {
                const {
                  serverSubscriptionId: o,
                  unsubscribeMethod: c
                } = i;
                if (this._subscriptionsAutoDisposedByRpc.has(o))
                  this._subscriptionsAutoDisposedByRpc.delete(o);
                else {
                  this._subscriptionsByHash[r] = {
                    ...i,
                    state: "unsubscribing"
                  };
                  try {
                    await this._rpcWebSocket.call(c, [o]);
                  } catch (u) {
                    if (u instanceof Error && console.error(`${c} error:`, u.message), !t())
                      return;
                    this._subscriptionsByHash[r] = {
                      ...i,
                      state: "subscribed"
                    }, await this._updateSubscriptions();
                    return;
                  }
                }
                this._subscriptionsByHash[r] = {
                  ...i,
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
    r !== void 0 && r.forEach((i) => {
      try {
        i(
          ...t
        );
      } catch (o) {
        console.error(o);
      }
    });
  }
  _wsOnAccountNotification(e) {
    const {
      result: t,
      subscription: r
    } = re(e, rg);
    this._handleServerNotification(r, [t.value, t.context]);
  }
  _makeSubscription(e, t) {
    const r = this._nextClientSubscriptionId++, i = pp([e.method, t]), o = this._subscriptionsByHash[i];
    return o === void 0 ? this._subscriptionsByHash[i] = {
      ...e,
      args: t,
      callbacks: /* @__PURE__ */ new Set([e.callback]),
      state: "pending"
    } : o.callbacks.add(e.callback), this._subscriptionDisposeFunctionsByClientSubscriptionId[r] = async () => {
      delete this._subscriptionDisposeFunctionsByClientSubscriptionId[r];
      const c = this._subscriptionsByHash[i];
      vt(c !== void 0, `Could not find a \`Subscription\` when tearing down client subscription #${r}`), c.callbacks.delete(e.callback), await this._updateSubscriptions();
    }, this._updateSubscriptions(), r;
  }
  onAccountChange(e, t, r) {
    const i = this._buildArgs(
      [e.toBase58()],
      r || this._commitment || "finalized",
      "base64"
    );
    return this._makeSubscription({
      callback: t,
      method: "accountSubscribe",
      unsubscribeMethod: "accountUnsubscribe"
    }, i);
  }
  async removeAccountChangeListener(e) {
    await this._unsubscribeClientSubscription(e, "account change");
  }
  _wsOnProgramAccountNotification(e) {
    const {
      result: t,
      subscription: r
    } = re(e, og);
    this._handleServerNotification(r, [{
      accountId: t.value.pubkey,
      accountInfo: t.value.account
    }, t.context]);
  }
  onProgramAccountChange(e, t, r, i) {
    const o = this._buildArgs(
      [e.toBase58()],
      r || this._commitment || "finalized",
      "base64",
      i ? {
        filters: i
      } : void 0
    );
    return this._makeSubscription({
      callback: t,
      method: "programSubscribe",
      unsubscribeMethod: "programUnsubscribe"
    }, o);
  }
  async removeProgramAccountChangeListener(e) {
    await this._unsubscribeClientSubscription(e, "program account change");
  }
  onLogs(e, t, r) {
    const i = this._buildArgs(
      [typeof e == "object" ? {
        mentions: [e.toString()]
      } : e],
      r || this._commitment || "finalized"
    );
    return this._makeSubscription({
      callback: t,
      method: "logsSubscribe",
      unsubscribeMethod: "logsUnsubscribe"
    }, i);
  }
  async removeOnLogsListener(e) {
    await this._unsubscribeClientSubscription(e, "logs");
  }
  _wsOnLogsNotification(e) {
    const {
      result: t,
      subscription: r
    } = re(e, kg);
    this._handleServerNotification(r, [t.value, t.context]);
  }
  _wsOnSlotNotification(e) {
    const {
      result: t,
      subscription: r
    } = re(e, ag);
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
    } = re(e, ug);
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
  _buildArgs(e, t, r, i) {
    const o = t || this._commitment;
    if (o || r || i) {
      let c = {};
      r && (c.encoding = r), o && (c.commitment = o), i && (c = Object.assign(c, i)), e.push(c);
    }
    return e;
  }
  _buildArgsAtLeastConfirmed(e, t, r, i) {
    const o = t || this._commitment;
    if (o && !["confirmed", "finalized"].includes(o))
      throw new Error("Using Connection with default commitment: `" + this._commitment + "`, but method requires at least `confirmed`");
    return this._buildArgs(e, t, r, i);
  }
  _wsOnSignatureNotification(e) {
    const {
      result: t,
      subscription: r
    } = re(e, lg);
    t.value !== "receivedSignature" && this._subscriptionsAutoDisposedByRpc.add(r), this._handleServerNotification(r, t.value === "receivedSignature" ? [{
      type: "received"
    }, t.context] : [{
      type: "status",
      result: t.value
    }, t.context]);
  }
  onSignature(e, t, r) {
    const i = this._buildArgs(
      [e],
      r || this._commitment || "finalized"
    ), o = this._makeSubscription({
      callback: (c, u) => {
        if (c.type === "status") {
          t(c.result, u);
          try {
            this.removeSignatureListener(o);
          } catch {
          }
        }
      },
      method: "signatureSubscribe",
      unsubscribeMethod: "signatureUnsubscribe"
    }, i);
    return o;
  }
  onSignatureWithOptions(e, t, r) {
    const {
      commitment: i,
      ...o
    } = {
      ...r,
      commitment: r && r.commitment || this._commitment || "finalized"
    }, c = this._buildArgs(
      [e],
      i,
      void 0,
      o
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
    } = re(e, fg);
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
    layout: ue([ge("instruction"), br("recentSlot"), Ne("bumpSeed")])
  },
  FreezeLookupTable: {
    index: 1,
    layout: ue([ge("instruction")])
  },
  ExtendLookupTable: {
    index: 2,
    layout: ue([ge("instruction"), br(), Ft(Be(), Kn(ge(), -8), "addresses")])
  },
  DeactivateLookupTable: {
    index: 3,
    layout: ue([ge("instruction")])
  },
  CloseLookupTable: {
    index: 4,
    layout: ue([ge("instruction")])
  }
});
new fe("AddressLookupTab1e1111111111111111111111111");
Object.freeze({
  RequestUnits: {
    index: 0,
    layout: ue([Ne("instruction"), ge("units"), ge("additionalFee")])
  },
  RequestHeapFrame: {
    index: 1,
    layout: ue([Ne("instruction"), ge("bytes")])
  },
  SetComputeUnitLimit: {
    index: 2,
    layout: ue([Ne("instruction"), ge("units")])
  },
  SetComputeUnitPrice: {
    index: 3,
    layout: ue([Ne("instruction"), br("microLamports")])
  }
});
new fe("ComputeBudget111111111111111111111111111111");
ue([Ne("numSignatures"), Ne("padding"), Jt("signatureOffset"), Jt("signatureInstructionIndex"), Jt("publicKeyOffset"), Jt("publicKeyInstructionIndex"), Jt("messageDataOffset"), Jt("messageDataSize"), Jt("messageInstructionIndex")]);
new fe("Ed25519SigVerify111111111111111111111111111");
Gn.hmacSha256Sync = (n, ...e) => {
  const t = el.create(Is, n);
  return e.forEach((r) => t.update(r)), t.digest();
};
Gn.isValidPrivateKey;
ue([Ne("numSignatures"), Jt("signatureOffset"), Ne("signatureInstructionIndex"), Jt("ethAddressOffset"), Ne("ethAddressInstructionIndex"), Jt("messageDataOffset"), Jt("messageDataSize"), Ne("messageInstructionIndex"), $e(20, "ethAddress"), $e(64, "signature"), Ne("recoveryId")]);
new fe("KeccakSecp256k11111111111111111111111111111");
new fe("StakeConfig11111111111111111111111111111111");
class Rc {
  constructor(e, t, r) {
    this.unixTimestamp = void 0, this.epoch = void 0, this.custodian = void 0, this.unixTimestamp = e, this.epoch = t, this.custodian = r;
  }
}
Rc.default = new Rc(0, 0, fe.default);
Object.freeze({
  Initialize: {
    index: 0,
    layout: ue([ge("instruction"), rp(), ip()])
  },
  Authorize: {
    index: 1,
    layout: ue([ge("instruction"), Be("newAuthorized"), ge("stakeAuthorizationType")])
  },
  Delegate: {
    index: 2,
    layout: ue([ge("instruction")])
  },
  Split: {
    index: 3,
    layout: ue([ge("instruction"), qt("lamports")])
  },
  Withdraw: {
    index: 4,
    layout: ue([ge("instruction"), qt("lamports")])
  },
  Deactivate: {
    index: 5,
    layout: ue([ge("instruction")])
  },
  Merge: {
    index: 7,
    layout: ue([ge("instruction")])
  },
  AuthorizeWithSeed: {
    index: 8,
    layout: ue([ge("instruction"), Be("newAuthorized"), ge("stakeAuthorizationType"), lr("authoritySeed"), Be("authorityOwner")])
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
    layout: ue([ge("instruction"), op()])
  },
  Authorize: {
    index: 1,
    layout: ue([ge("instruction"), Be("newAuthorized"), ge("voteAuthorizationType")])
  },
  Withdraw: {
    index: 3,
    layout: ue([ge("instruction"), qt("lamports")])
  },
  AuthorizeWithSeed: {
    index: 10,
    layout: ue([ge("instruction"), sp()])
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
J({
  name: te(),
  website: Se(te()),
  details: Se(te()),
  keybaseUsername: Se(te())
});
new fe("Vote111111111111111111111111111111111111111");
ue([
  Be("nodePubkey"),
  Be("authorizedWithdrawer"),
  Ne("commission"),
  Mt(),
  Ft(ue([Mt("slot"), ge("confirmationCount")]), Kn(ge(), -8), "votes"),
  Ne("rootSlotValid"),
  Mt("rootSlot"),
  Mt(),
  Ft(ue([Mt("epoch"), Be("authorizedVoter")]), Kn(ge(), -8), "authorizedVoters"),
  ue([Ft(ue([Be("authorizedPubkey"), Mt("epochOfLastAuthorizedSwitch"), Mt("targetEpoch")]), 32, "buf"), Mt("idx"), Ne("isEmpty")], "priorVoters"),
  Mt(),
  Ft(ue([Mt("epoch"), Mt("credits"), Mt("prevCredits")]), Kn(ge(), -8), "epochCredits"),
  ue([Mt("slot"), Mt("timestamp")], "lastTimestamp")
]);
const kc = {
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
function Lg(n, e) {
  const t = e === !1 ? "http" : "https";
  if (!n)
    return kc[t].devnet;
  const r = kc[t][n];
  if (!r)
    throw new Error(`Unknown ${t} cluster: ${n}`);
  return r;
}
const Ug = Gr({}), Dg = ({ children: n, endpoint: e, config: t = { commitment: "confirmed" } }) => {
  const r = Yt(() => new Og(e, t), [e, t]);
  return D.createElement(Ug.Provider, { value: { connection: r } }, n);
};
class Rt extends Error {
  constructor(e, t) {
    super(e), this.error = t;
  }
}
class ii extends Rt {
  constructor() {
    super(...arguments), this.name = "WalletNotReadyError";
  }
}
class Pg extends Rt {
  constructor() {
    super(...arguments), this.name = "WalletLoadError";
  }
}
class Fg extends Rt {
  constructor() {
    super(...arguments), this.name = "WalletConfigError";
  }
}
class Hr extends Rt {
  constructor() {
    super(...arguments), this.name = "WalletConnectionError";
  }
}
class ba extends Rt {
  constructor() {
    super(...arguments), this.name = "WalletDisconnectedError";
  }
}
class Wr extends Rt {
  constructor() {
    super(...arguments), this.name = "WalletDisconnectionError";
  }
}
class Aa extends Rt {
  constructor() {
    super(...arguments), this.name = "WalletAccountError";
  }
}
class jr extends Rt {
  constructor() {
    super(...arguments), this.name = "WalletPublicKeyError";
  }
}
class Et extends Rt {
  constructor() {
    super(...arguments), this.name = "WalletNotConnectedError";
  }
}
class fr extends Rt {
  constructor() {
    super(...arguments), this.name = "WalletSendTransactionError";
  }
}
class ro extends Rt {
  constructor() {
    super(...arguments), this.name = "WalletSignMessageError";
  }
}
class Ht extends Rt {
  constructor() {
    super(...arguments), this.name = "WalletSignTransactionError";
  }
}
var Me;
(function(n) {
  n.Installed = "Installed", n.NotDetected = "NotDetected", n.Loadable = "Loadable", n.Unsupported = "Unsupported";
})(Me || (Me = {}));
class zg extends Qd {
  get connected() {
    return !!this.publicKey;
  }
  async prepareTransaction(e, t, r = {}) {
    const i = this.publicKey;
    if (!i)
      throw new Et();
    return e.feePayer = e.feePayer || i, e.recentBlockhash = e.recentBlockhash || (await t.getLatestBlockhash({
      commitment: r.preflightCommitment,
      minContextSlot: r.minContextSlot
    })).blockhash, e;
  }
}
function io(n) {
  if (typeof window > "u" || typeof document > "u")
    return;
  const e = [];
  function t() {
    if (n())
      for (const o of e)
        o();
  }
  const r = setInterval(t, 1e3);
  e.push(() => clearInterval(r)), document.readyState === "loading" && (document.addEventListener("DOMContentLoaded", t, { once: !0 }), e.push(() => document.removeEventListener("DOMContentLoaded", t))), document.readyState !== "complete" && (window.addEventListener("load", t, { once: !0 }), e.push(() => window.removeEventListener("load", t))), t();
}
class Hg extends zg {
  async sendTransaction(e, t, r = {}) {
    let i = !0;
    try {
      if ("version" in e) {
        if (!this.supportedTransactionVersions)
          throw new fr("Sending versioned transactions isn't supported by this wallet");
        if (!this.supportedTransactionVersions.has(e.version))
          throw new fr(`Sending transaction version ${e.version} isn't supported by this wallet`);
        try {
          e = await this.signTransaction(e);
          const o = e.serialize();
          return await t.sendRawTransaction(o, r);
        } catch (o) {
          throw o instanceof Ht ? (i = !1, o) : new fr(o == null ? void 0 : o.message, o);
        }
      } else
        try {
          const { signers: o, ...c } = r;
          e = await this.prepareTransaction(e, t, c), o != null && o.length && e.partialSign(...o), e = await this.signTransaction(e);
          const u = e.serialize();
          return await t.sendRawTransaction(u, c);
        } catch (o) {
          throw o instanceof Ht ? (i = !1, o) : new fr(o == null ? void 0 : o.message, o);
        }
    } catch (o) {
      throw i && this.emit("error", o), o;
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
class oo extends Hg {
}
var Ns;
(function(n) {
  n.Mainnet = "mainnet-beta", n.Testnet = "testnet", n.Devnet = "devnet";
})(Ns || (Ns = {}));
class Nc extends Rt {
  constructor() {
    super(...arguments), this.name = "WalletNotSelectedError";
  }
}
const Wg = [], so = {
  autoConnect: !1,
  connecting: !1,
  connected: !1,
  disconnecting: !1,
  select(n) {
    console.error(gn("get", "select"));
  },
  connect() {
    return Promise.reject(console.error(gn("get", "connect")));
  },
  disconnect() {
    return Promise.reject(console.error(gn("get", "disconnect")));
  },
  sendTransaction(n, e, t) {
    return Promise.reject(console.error(gn("get", "sendTransaction")));
  },
  signTransaction(n) {
    return Promise.reject(console.error(gn("get", "signTransaction")));
  },
  signAllTransactions(n) {
    return Promise.reject(console.error(gn("get", "signAllTransactions")));
  },
  signMessage(n) {
    return Promise.reject(console.error(gn("get", "signMessage")));
  }
};
Object.defineProperty(so, "wallets", {
  get() {
    return console.error(gn("read", "wallets")), Wg;
  }
});
Object.defineProperty(so, "wallet", {
  get() {
    return console.error(gn("read", "wallet")), null;
  }
});
Object.defineProperty(so, "publicKey", {
  get() {
    return console.error(gn("read", "publicKey")), null;
  }
});
function gn(n, e) {
  return `You have tried to  ${n} "${e}" on a WalletContext without providing one. Make sure to render a WalletProvider as an ancestor of the component that uses WalletContext`;
}
const dl = Gr(so);
function pl() {
  return Fi(dl);
}
function jg(n, e) {
  const t = _e(() => {
    try {
      const o = localStorage.getItem(n);
      if (o)
        return JSON.parse(o);
    } catch (o) {
      typeof window < "u" && console.error(o);
    }
    return e;
  }), r = t[0], i = mn(!0);
  return Dt(() => {
    if (i.current) {
      i.current = !1;
      return;
    }
    try {
      r === null ? localStorage.removeItem(n) : localStorage.setItem(n, JSON.stringify(r));
    } catch (o) {
      typeof window < "u" && console.error(o);
    }
  }, [r, n]), t;
}
const Oc = {
  wallet: null,
  adapter: null,
  publicKey: null,
  connected: !1
}, Gg = ({ children: n, wallets: e, autoConnect: t = !1, onError: r, localStorageKey: i = "walletName" }) => {
  const [o, c] = jg(i, null), [{ wallet: u, adapter: d, publicKey: w, connected: v }, S] = _e(Oc), T = (d == null ? void 0 : d.readyState) || Me.Unsupported, [E, _] = _e(!1), [C, U] = _e(!1), P = mn(!1), z = mn(!1), N = mn(!1), [F, O] = _e(() => e.map((p) => ({
    adapter: p,
    readyState: p.readyState
  })));
  Dt(() => {
    O((m) => e.map((y, x) => {
      const L = m[x];
      return L && L.adapter === y && L.readyState === y.readyState ? L : {
        adapter: y,
        readyState: y.readyState
      };
    }));
    function p(m) {
      O((y) => {
        const x = y.findIndex(({ adapter: R }) => R === this);
        if (x === -1)
          return y;
        const { adapter: L } = y[x];
        return [...y.slice(0, x), { adapter: L, readyState: m }, ...y.slice(x + 1)];
      });
    }
    return e.forEach((m) => m.on("readyStateChange", p, m)), () => e.forEach((m) => m.off("readyStateChange", p, m));
  }, [e]), Dt(() => {
    const p = o && F.find(({ adapter: m }) => m.name === o);
    S(p ? {
      wallet: p,
      adapter: p.adapter,
      connected: p.adapter.connected,
      publicKey: p.adapter.publicKey
    } : Oc);
  }, [o, F]), Dt(() => {
    function p() {
      N.current = !0;
    }
    return window.addEventListener("beforeunload", p), () => window.removeEventListener("beforeunload", p);
  }, [N]);
  const W = en(() => {
    !d || S((p) => ({ ...p, connected: d.connected, publicKey: d.publicKey }));
  }, [d]), G = en(() => {
    N.current || c(null);
  }, [N, c]), q = en((p) => (N.current || (r || console.error)(p), p), [N, r]);
  Dt(() => {
    if (d)
      return d.on("connect", W), d.on("disconnect", G), d.on("error", q), () => {
        d.off("connect", W), d.off("disconnect", G), d.off("error", q);
      };
  }, [d, W, G, q]), Dt(() => () => {
    d == null || d.disconnect();
  }, [d]), Dt(() => {
    P.current || v || !t || !d || !(T === Me.Installed || T === Me.Loadable) || async function() {
      P.current = !0, _(!0);
      try {
        await d.connect();
      } catch {
        c(null);
      } finally {
        _(!1), P.current = !1;
      }
    }();
  }, [P, v, t, d, T, c]);
  const le = en(async () => {
    if (!(P.current || z.current || v)) {
      if (!d)
        throw q(new Nc());
      if (!(T === Me.Installed || T === Me.Loadable))
        throw c(null), typeof window < "u" && window.open(d.url, "_blank"), q(new ii());
      P.current = !0, _(!0);
      try {
        await d.connect();
      } catch (p) {
        throw c(null), p;
      } finally {
        _(!1), P.current = !1;
      }
    }
  }, [P, z, v, d, T, q, c]), be = en(async () => {
    if (!z.current) {
      if (!d)
        return c(null);
      z.current = !0, U(!0);
      try {
        await d.disconnect();
      } catch (p) {
        throw c(null), p;
      } finally {
        U(!1), z.current = !1;
      }
    }
  }, [z, d, c]), pe = en(async (p, m, y) => {
    if (!d)
      throw q(new Nc());
    if (!v)
      throw q(new Et());
    return await d.sendTransaction(p, m, y);
  }, [d, q, v]), ve = Yt(() => d && "signTransaction" in d ? async (p) => {
    if (!v)
      throw q(new Et());
    return await d.signTransaction(p);
  } : void 0, [d, q, v]), I = Yt(() => d && "signAllTransactions" in d ? async (p) => {
    if (!v)
      throw q(new Et());
    return await d.signAllTransactions(p);
  } : void 0, [d, q, v]), l = Yt(() => d && "signMessage" in d ? async (p) => {
    if (!v)
      throw q(new Et());
    return await d.signMessage(p);
  } : void 0, [d, q, v]);
  return D.createElement(dl.Provider, { value: {
    autoConnect: t,
    wallets: F,
    wallet: u,
    publicKey: w,
    connected: v,
    connecting: E,
    disconnecting: C,
    select: c,
    connect: le,
    disconnect: be,
    sendTransaction: pe,
    signTransaction: ve,
    signAllTransactions: I,
    signMessage: l
  } }, n);
}, gl = {
  setVisible(n) {
    console.error(yl("call", "setVisible"));
  },
  visible: !1
};
Object.defineProperty(gl, "visible", {
  get() {
    return console.error(yl("read", "visible")), !1;
  }
});
function yl(n, e) {
  return `You have tried to  ${n} "${e}" on a WalletModalContext without providing one. Make sure to render a WalletModalProvider as an ancestor of the component that uses WalletModalContext`;
}
const wl = Gr(gl);
function ml() {
  return Fi(wl);
}
const qg = (n) => D.createElement(
  "button",
  { className: `wallet-adapter-button ${n.className || ""}`, disabled: n.disabled, style: n.style, onClick: n.onClick, tabIndex: n.tabIndex || 0, type: "button" },
  n.startIcon && D.createElement("i", { className: "wallet-adapter-button-start-icon" }, n.startIcon),
  n.children,
  n.endIcon && D.createElement("i", { className: "wallet-adapter-button-end-icon" }, n.endIcon)
), Qg = ({ wallet: n, ...e }) => n && D.createElement("img", { src: n.adapter.icon, alt: `${n.adapter.name} icon`, ...e }), Lc = ({ id: n, children: e, expanded: t = !1 }) => {
  const r = mn(null), i = mn(!0), o = "height 250ms ease-out", c = () => {
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
  return bi(() => {
    t ? c() : u();
  }, [t]), bi(() => {
    const d = r.current;
    if (!d)
      return;
    function w() {
      !d || (d.style.overflow = t ? "initial" : "hidden", t && (d.style.height = "auto"));
    }
    function v(S) {
      d && S.target === d && S.propertyName === "height" && w();
    }
    return i.current && (w(), i.current = !1), d.addEventListener("transitionend", v), () => d.removeEventListener("transitionend", v);
  }, [t]), D.createElement("div", { className: "wallet-adapter-collapse", id: n, ref: r, role: "region", style: { height: 0, transition: i.current ? void 0 : o } }, e);
}, ds = ({ handleClick: n, tabIndex: e, wallet: t }) => D.createElement(
  "li",
  null,
  D.createElement(
    qg,
    { onClick: n, startIcon: D.createElement(Qg, { wallet: t }), tabIndex: e },
    t.adapter.name,
    t.readyState === Me.Installed && D.createElement("span", null, "Detected")
  )
), Yg = () => D.createElement(
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
), Kg = ({ className: n = "", container: e = "body" }) => {
  const t = mn(null), { wallets: r, select: i } = pl(), { setVisible: o } = ml(), [c, u] = _e(!1), [d, w] = _e(!1), [v, S] = _e(null), [T, E] = Yt(() => {
    const F = [], O = [], W = [];
    for (const G of r)
      G.readyState === Me.NotDetected ? O.push(G) : G.readyState === Me.Loadable ? W.push(G) : G.readyState === Me.Installed && F.push(G);
    return [F, [...W, ...O]];
  }, [r]), _ = Yt(() => T.length ? T[0] : r.find((F) => F.adapter.name === "Torus") || r.find((F) => F.adapter.name === "Phantom") || r.find((F) => F.readyState === Me.Loadable) || E[0], [T, r, E]), C = en(() => {
    w(!1), setTimeout(() => o(!1), 150);
  }, [o]), U = en((F) => {
    F.preventDefault(), C();
  }, [C]), P = en((F, O) => {
    i(O), U(F);
  }, [i, U]), z = en(() => u(!c), [c]), N = en((F) => {
    const O = t.current;
    if (!O)
      return;
    const W = O.querySelectorAll("button"), G = W[0], q = W[W.length - 1];
    F.shiftKey ? document.activeElement === G && (q.focus(), F.preventDefault()) : document.activeElement === q && (G.focus(), F.preventDefault());
  }, [t]);
  return bi(() => {
    const F = (W) => {
      W.key === "Escape" ? C() : W.key === "Tab" && N(W);
    }, { overflow: O } = window.getComputedStyle(document.body);
    return setTimeout(() => w(!0), 0), document.body.style.overflow = "hidden", window.addEventListener("keydown", F, !1), () => {
      document.body.style.overflow = O, window.removeEventListener("keydown", F, !1);
    };
  }, [C, N]), bi(() => S(document.querySelector(e)), [e]), v && vl(D.createElement(
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
        T.length ? D.createElement(
          D.Fragment,
          null,
          D.createElement("h1", { className: "wallet-adapter-modal-title" }, "Connect a wallet on Solana to continue"),
          D.createElement(
            "ul",
            { className: "wallet-adapter-modal-list" },
            T.map((F) => D.createElement(ds, { key: F.adapter.name, handleClick: (O) => P(O, F.adapter.name), wallet: F })),
            E.length ? D.createElement(Lc, { expanded: c, id: "wallet-adapter-modal-collapse" }, E.map((F) => D.createElement(ds, { key: F.adapter.name, handleClick: (O) => P(O, F.adapter.name), tabIndex: c ? 0 : -1, wallet: F }))) : null
          ),
          E.length ? D.createElement(
            "button",
            { className: "wallet-adapter-modal-list-more", onClick: z, tabIndex: 0 },
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
            D.createElement(Yg, null),
            D.createElement("button", { type: "button", className: "wallet-adapter-modal-middle-button", onClick: (F) => P(F, _.adapter.name) }, "Get started")
          ),
          E.length ? D.createElement(
            D.Fragment,
            null,
            D.createElement(
              "button",
              { className: "wallet-adapter-modal-list-more", onClick: z, tabIndex: 0 },
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
              Lc,
              { expanded: c, id: "wallet-adapter-modal-collapse" },
              D.createElement("ul", { className: "wallet-adapter-modal-list" }, E.map((F) => D.createElement(ds, { key: F.adapter.name, handleClick: (O) => P(O, F.adapter.name), tabIndex: c ? 0 : -1, wallet: F })))
            )
          ) : null
        )
      )
    ),
    D.createElement("div", { className: "wallet-adapter-modal-overlay", onMouseDown: U })
  ), v);
}, Vg = ({ children: n, ...e }) => {
  const [t, r] = _e(!1);
  return D.createElement(
    wl.Provider,
    { value: {
      visible: t,
      setVisible: r
    } },
    n,
    t && D.createElement(Kg, { ...e })
  );
}, Zg = "logger/5.7.0";
let Uc = !1, Dc = !1;
const wi = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
let Pc = wi.default, ps = null;
function Jg() {
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
const Fc = Jg();
var Os;
(function(n) {
  n.DEBUG = "DEBUG", n.INFO = "INFO", n.WARNING = "WARNING", n.ERROR = "ERROR", n.OFF = "OFF";
})(Os || (Os = {}));
var on;
(function(n) {
  n.UNKNOWN_ERROR = "UNKNOWN_ERROR", n.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", n.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", n.NETWORK_ERROR = "NETWORK_ERROR", n.SERVER_ERROR = "SERVER_ERROR", n.TIMEOUT = "TIMEOUT", n.BUFFER_OVERRUN = "BUFFER_OVERRUN", n.NUMERIC_FAULT = "NUMERIC_FAULT", n.MISSING_NEW = "MISSING_NEW", n.INVALID_ARGUMENT = "INVALID_ARGUMENT", n.MISSING_ARGUMENT = "MISSING_ARGUMENT", n.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", n.CALL_EXCEPTION = "CALL_EXCEPTION", n.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", n.NONCE_EXPIRED = "NONCE_EXPIRED", n.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", n.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", n.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", n.ACTION_REJECTED = "ACTION_REJECTED";
})(on || (on = {}));
const zc = "0123456789abcdef";
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
    wi[r] == null && this.throwArgumentError("invalid log level name", "logLevel", e), !(Pc > wi[r]) && console.log.apply(console, t);
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
    if (Dc)
      return this.makeError("censored error", t, {});
    t || (t = Ze.errors.UNKNOWN_ERROR), r || (r = {});
    const i = [];
    Object.keys(r).forEach((d) => {
      const w = r[d];
      try {
        if (w instanceof Uint8Array) {
          let v = "";
          for (let S = 0; S < w.length; S++)
            v += zc[w[S] >> 4], v += zc[w[S] & 15];
          i.push(d + "=Uint8Array(0x" + v + ")");
        } else
          i.push(d + "=" + JSON.stringify(w));
      } catch {
        i.push(d + "=" + JSON.stringify(r[d].toString()));
      }
    }), i.push(`code=${t}`), i.push(`version=${this.version}`);
    const o = e;
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
    c && (e += " [ See: https://links.ethers.org/v5-errors-" + c + " ]"), i.length && (e += " (" + i.join(", ") + ")");
    const u = new Error(e);
    return u.reason = o, u.code = t, Object.keys(r).forEach(function(d) {
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
  assert(e, t, r, i) {
    e || this.throwError(t, r, i);
  }
  assertArgument(e, t, r, i) {
    e || this.throwArgumentError(t, r, i);
  }
  checkNormalize(e) {
    Fc && this.throwError("platform missing String.prototype.normalize", Ze.errors.UNSUPPORTED_OPERATION, {
      operation: "String.prototype.normalize",
      form: Fc
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
    return ps || (ps = new Ze(Zg)), ps;
  }
  static setCensorship(e, t) {
    if (!e && t && this.globalLogger().throwError("cannot permanently disable censorship", Ze.errors.UNSUPPORTED_OPERATION, {
      operation: "setCensorship"
    }), Uc) {
      if (!e)
        return;
      this.globalLogger().throwError("error censorship permanent", Ze.errors.UNSUPPORTED_OPERATION, {
        operation: "setCensorship"
      });
    }
    Dc = !!e, Uc = !!t;
  }
  static setLogLevel(e) {
    const t = wi[e.toLowerCase()];
    if (t == null) {
      Ze.globalLogger().warn("invalid log level - " + e);
      return;
    }
    Pc = t;
  }
  static from(e) {
    return new Ze(e);
  }
}
Ze.errors = on;
Ze.levels = Os;
const Xg = "bytes/5.7.0", gs = new Ze(Xg);
function $g(n) {
  return !!n.toHexString;
}
function mi(n) {
  return n.slice || (n.slice = function() {
    const e = Array.prototype.slice.call(arguments);
    return mi(new Uint8Array(Array.prototype.slice.apply(n, e)));
  }), n;
}
function Hc(n) {
  return typeof n == "number" && n == n && n % 1 === 0;
}
function ey(n) {
  if (n == null)
    return !1;
  if (n.constructor === Uint8Array)
    return !0;
  if (typeof n == "string" || !Hc(n.length) || n.length < 0)
    return !1;
  for (let e = 0; e < n.length; e++) {
    const t = n[e];
    if (!Hc(t) || t < 0 || t >= 256)
      return !1;
  }
  return !0;
}
function Wc(n, e) {
  if (e || (e = {}), typeof n == "number") {
    gs.checkSafeUint53(n, "invalid arrayify value");
    const t = [];
    for (; n; )
      t.unshift(n & 255), n = parseInt(String(n / 256));
    return t.length === 0 && t.push(0), mi(new Uint8Array(t));
  }
  if (e.allowMissingPrefix && typeof n == "string" && n.substring(0, 2) !== "0x" && (n = "0x" + n), $g(n) && (n = n.toHexString()), ty(n)) {
    let t = n.substring(2);
    t.length % 2 && (e.hexPad === "left" ? t = "0" + t : e.hexPad === "right" ? t += "0" : gs.throwArgumentError("hex data is odd-length", "value", n));
    const r = [];
    for (let i = 0; i < t.length; i += 2)
      r.push(parseInt(t.substring(i, i + 2), 16));
    return mi(new Uint8Array(r));
  }
  return ey(n) ? mi(new Uint8Array(n)) : gs.throwArgumentError("invalid arrayify value", "value", n);
}
function ty(n, e) {
  return !(typeof n != "string" || !n.match(/^0x[0-9A-Fa-f]*$/) || e && n.length !== 2 + 2 * e);
}
const ny = "properties/5.7.0";
globalThis && globalThis.__awaiter;
new Ze(ny);
function di(n, e, t) {
  Object.defineProperty(n, e, {
    enumerable: !0,
    value: t,
    writable: !1
  });
}
class bl {
  constructor(e) {
    di(this, "alphabet", e), di(this, "base", e.length), di(this, "_alphabetMap", {}), di(this, "_leader", e.charAt(0));
    for (let t = 0; t < e.length; t++)
      this._alphabetMap[e.charAt(t)] = t;
  }
  encode(e) {
    let t = Wc(e);
    if (t.length === 0)
      return "";
    let r = [0];
    for (let o = 0; o < t.length; ++o) {
      let c = t[o];
      for (let u = 0; u < r.length; ++u)
        c += r[u] << 8, r[u] = c % this.base, c = c / this.base | 0;
      for (; c > 0; )
        r.push(c % this.base), c = c / this.base | 0;
    }
    let i = "";
    for (let o = 0; t[o] === 0 && o < t.length - 1; ++o)
      i += this._leader;
    for (let o = r.length - 1; o >= 0; --o)
      i += this.alphabet[r[o]];
    return i;
  }
  decode(e) {
    if (typeof e != "string")
      throw new TypeError("Expected String");
    let t = [];
    if (e.length === 0)
      return new Uint8Array(t);
    t.push(0);
    for (let r = 0; r < e.length; r++) {
      let i = this._alphabetMap[e[r]];
      if (i === void 0)
        throw new Error("Non-base" + this.base + " character");
      let o = i;
      for (let c = 0; c < t.length; ++c)
        o += t[c] * this.base, t[c] = o & 255, o >>= 8;
      for (; o > 0; )
        t.push(o & 255), o >>= 8;
    }
    for (let r = 0; e[r] === this._leader && r < e.length - 1; ++r)
      t.push(0);
    return Wc(new Uint8Array(t.reverse()));
  }
}
new bl("abcdefghijklmnopqrstuvwxyz234567");
const ry = new bl("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"), iy = "Glow";
class oy extends oo {
  constructor(e = {}) {
    if (super(), this.name = iy, this.url = "https://glow.app", this.icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAB4FBMVEUAAACjON6dNNyjONd7C+GIHNq1S+K9W+O3TeLAVOe6TuSJHtqcMdPBVeiuQt2kOdeRJc7AVeeyRd95COR9DeF7CuKWKtCaL9KoPdr78/789/7//f+zPt7u0Pi7ROG5SuK9TOT67/315PzVYfHAT+bx1Pry4PuiMNWmMdaqN9moM9fv2vqvOdvtzff15/ysN9mxO9yzRN/13/ysPdz46Py/SeTFVemPE+/EUOe5QeC3P+DJW+y9SOOfLtPZYvT46/2TGOu2R+GNEPKaI9/PXO7t1fjbZfWgLNfu0/jIV+rQX++ZKdCQIdSWIOGmN9iYJNvCVOjRVe/CTOaKE+eZKNSgKd2TIdnLV+yECfGfKdqKEO2dJ9ylL9iNHdr02/uHC/KjLdp+BfCcKdbKU+t7B+eUJs+dLNKTHeG+ROXUW/GLGeCFFd6PHN+JDfOuQd3JS+vNWu2EEeGOF+WiNtbOUe2BDOf02fuSGuWOFOuUJdPWXfGFDuvMT+yVHOWIF9vCSOiZJteACeyLHNV9C+N4A+x1A+mGGOPHUOmKHN2aLtKFEOWXHubarPLXju7CfevoxvffuPXQmu7QfuvnvfXJje3dnPHBauTOcOu4bfDjp/SqUOytStugNu6yXd6bKueVNOUmkAxzAAAAGXRSTlMAIxB+3D9C/WLfo2CcxcXf34TffL6cvc/vU7i1KQAAOkJJREFUeNrElMFuqlAQhivICpLehFofgb6ET1CjCwk7drZNwA0SFqYJ8Upq1Ke+/wwz9hwurtT2m5lT0933z+jDLRgMPN/3w3AEnoihkAt1l10PU3SHN+aP8EwEQeC6ru973sB5+GWgHY4gW5jk1LlNjSFruy13FLEz5KGP/p9X5Xg8jp8D1/cGDz+N44WjYd6cKRorAozBDgHUaIX1YV13lo8WdS5OgKfrrxwFDsL1fuogHH80bHrcG/MEUAbqv6PC37ROU3v/zI7mjYb/ofZd/TfUUeyVyQQ9Du5/C174tGxsEEFViX7znYEF++/0AlJF/MmbS+Dtb2C7QZmQvHA2R5uM3Ttm4ITDJWg6EVTwRwsNHwBaqQ0QgrpTEa28wQat9Bx/+5q77/Lo3ycD72nJWOpsL/4NTV4Q3evP2krrQ4rz7zCdog3gzxFg/Wg27/nqvxvyR5qyLCPUJIomUeDdT395tucAyL8p+EEAyt5MwOBwsN0TLmRgAn3lLG4e/yvswdmerctyIoUUwNi/i76eAA3Loxu8NKeWYr/fFwu8pyzPEUSW11mW1TX1IevY69/pFC36SSL2cbyJ2RyNR3kXe4H0eaShj8H7eLsrGOj2vxo8/AlTVeTN6ixPb1GcsgL6GUWAb0IGyJ8TYFbpCtghYEg9QYM2gVh4pbHtgS4fq9fF4wi6BIMb/fSJPRfbV7AXOILWXi8A+idM1gvrrwiSp1a2WpsY+hguiuCSP906tPkC+nFvcf1DtV8qpE+jQF5ZIAHaPqYvgwPkoU9vukosNlr4SPom6m/IR2hOAK8ym83KWWlx9ffAGen1f9tTG/IoNlcWSgbWFy8A/miTrVYM7AhIHk36SiTAEto96PfAuW79JP5Fj/IX/gafmIXtvpcS5TXNCupo3j2eD06ASKnnsNf1b7cxdWzxrlj2ZfTyEkWia9RMX+bxil+CEOpfNEszgcriE71g4P/J5sJ6sRbIXAIgPmhA8pEw8/m8fbYEJ2DKm/r29l+QgOhe5IpfAmf0j9SyaWkjisIwrS0I7bbgIn/AUDBlFm4Ds8hKs2lloouQILrLIiATGAQDycZf3ed85c4dTTX2Oefe+LF6znlndGv2eQKUh7XKNzQ8oE5BigD6mFvxlam7OTef6N+r99h4CrL1z3/P74JcX+xzTuVw5Xz0Mfj0ZauE/kblOQ9afDbKs5hzuKhnTQDXMgLg9kupezEPrqgLs7+SekojwFtKL3D/3F5xccBeL/+CuwWPwUcef8jyr/pBs25aeAT0LGX90A0A8nSoI8/+XZ71y6Fh/jTPuZun+Ef2Q7+vgjgDd2EfoJ//MYFvBB+4N5tbGv3Zeq++FFxzHPbPZbD7WjMQj74yZgIXF2NPQHoIuvrJHlrr79v+T+mckC/8KCfHB/pvFey3txv8Z7cz/BNNhok3DIB2edG3DNS1qtPBlbgbZTkuYwREwNefE/LJX+j3+5f95Fvo9uOmikspvZSjg17/4c8ERB//dgAqumoPICH6Qo2/URvy7gt/2z/rl97p34wFVZ5oz0ejOTUy/46+4f7hzSn0FPY9aEiUo4P9Af3ZZqbs078mAKlSAuItWC/VnwkYZm5XaZg+TT3d2ADUH338R7hLOaGf9m/OdIIfKTEMncDB/gTAJ8DlEah2NHQ3AKuV+HNgpfrBfRuxd0pB9DlywWQ+gVEbt4+nP20fzpL4Ty86wa89DMcHPv9BSkCFv16N1nU1NfsUACbg21/VMoM6oea4O2OpFAHcXf9m4owS2V8/9++r/dkplcw5r3N5+d4JfL0N/7DfaK1lCFWbaTWdTq+b9v6BCbB7j0A2gMd72OmXbD8Y0+g7XXt4GQBfPnVWnLnkgJO+WFiZPingTXny6b3//4S+uQdVNaua2D76Qpb/AHd62B4A9o++/6BkAoEFwNiz/zwA7i9Y9tW6p6dHFxBDcMjA2/8PfO74awJcn9PZPvqcYJXA3dj5Gzt3lw9CPgUgi0CuH/4uj77lfoB3gm8W3Rgwgbf+K/6xNdzfymH/0EiZfh4AXgDOkh4OaZnDMA2ADAS5fjlO+kFXHzJ/DUCkfzAoegPoLVoFi0WWAV6G39/8A5DvP6MKEKdoKrE6TwkAnYDKox+8OoCbMtt/sDcA/vYHe/cNlF5ONgM6ZnD0zxeA+cf+YdPVb/RMXybg/Bx/118Nawp9G8AL/449144/O/3JngCEvQ1AMH0aYw5N/er1aPvJX9rN5bWpIIzi+BYFFz7AqOSWLBTflSKloQsTEFcuBR+BVHBbQUEUpIviMjFtbSmllv6tnvkePTN37qRW6ZmZGxvr4nfmfN8MCQKfMTgxtQHk/Y/5dzl+uv/OzwR81QTgdcU1Go1evsR8SX6sV3Tg1bs0AYM7gzuYoG8KAOBBpAb4tpuehAXpu3ORBVPawLW0/DFzA4ZhQGoB8Q8SMB/wJQMSA2hlRAMCfFjkBz6m0TMB0JImAPjgN/wkAbr7c6CfJbvimwFYeHovMBWL4EzS/+gA2PEwftUyxnDYRwSUHvhvA7zQm4z+2SjI8GHASGT8YJcl9K/wIP8SDBB6237Meybtf1IAef1z88GukjciC84WDKidgGkBEN8cEANE/f686huGw2OAHuOZ4pMfCwEYRfjGj2kGhOeLpRdLA5HwswCCAdx/zATf4amPmHiPKSgVwZVaAJRcZ7b/y8vgDwnoiwVmgEzh9weebgCeFgDDpwVAlwX5/mMGiQGDgd0ATcr/2NsfJiWZ73bJTx/owKniCQA5PwbF64/zQ8M+ZA0Q8gpgAr5KBFgBln5Mp9ceIOjUm7CWVANRHADQewBmzYFI3Vvdbneh+wQO9Gr8qIKg4klwjfyEfx0eQ+M/CD/xYQCWByBYUGsBkDuA7dfhGWACVPQB9W9SfnNA+EGv4glICf3CAvAXYEAPSm1wBy6VOmC9/0F5BcAAzP6yBiDil6fBf/YAIAIrGGkPBD5FAzwARp8HgAbMzTXhgx0jqIfpiqrAe+HZUgdUC8guz1oHcFkCpAWYvAnOB3ywi4TYEwDt7Uy2xutrnU7rpqjVub+2Pt6YnKtyA1Sof0zgqwGYNID4EOBdPRggj5CENARNEbioXwA4PS3AyPlZA6p5SughwfcegCXa35mMO0Au6v7mxrm75GcFRB8CCL/guwGsfvK32712L8oAliYA4lGYBeADO0C6/8N8/xv52QSUHvtvCdgj+yHqbE6qmL92CfLyB37Cj/B3ia8WVJEJUyNwJnwFCDEAbP/N/OgBhQBYBr56DGTnx4j7UdQZb98dDOhAnACI/HEFOL2pCqtHWRdojMA14ce3PzwANQJ5/pmAsgHGji6I+O9P1m7+k9Ymv5t64F29A0BpACDlT9SrggniQ9wGahE4cfAdsNKzBZT4+4UA1LW/C/p/1+YEBtzLWsADVUMCJPqJqoopEHq/DpxMvgeCYACvQAJPlfe/HACM3a1C8o9SC7/LPSA5AS0BNXgoFEJV7wPpdfA0+P0b0OYPQModsJwAbv7/6eF2/FF48yWILSDBD8tf1AD2gUtxC9QEQJL/1YS/0P+oZv6dqfg3dOrjUHUmtY8CD/hn4wuw81NAp5gBMSBqg1eiAKyyA/AAsNtfKQAU8W83UxOb5DfiUbLgl1qg/HkPzM4AaLFytWVUtaPgFCvA+YGPscoEJOkfEr/IT/ycnha4iFx+jxYEAx6zBbAC8v1fxAgGtDGzCHgGLvEMcPE7cOC78v5XdIC1nyNhMgEyigngr6UWbHsPVEkFMACgjwxok32x5oCHAOcAz4Afwv/+g9KTf+iiAYfw763X6ZOf/En0JBHsDvxNar1KL4LpHUDwGQFhl4HpOUgicJ63IJXhvwZ/Af/wApi0GuC5u3zBYDRu2Ip+lT9Eam2kPZABqDfARagK0yKgFvBKGBw45S2ABqgF+ArsSPtPA/aeJ/SOxx+zzJPTX5O/zEL0qCoYUA8AJPz2jKvAE3BZ+U9GLcBEAwr4BQO2ai3PFP0pfsr7GTTTIL+U18IGSyA2oJscAAeawZIU0AA6oE3gjLcASPFX2QBKNwDyU779hjRNtMbtoBl8W15pURSC5kMw5a+wPAfsA0kXOMtbQJIAsH9X/iOcAFr9bHT/p/q/T1LQ+mkGzBZKYJGamUEGsCoXbwPeBa/mFQB8LOcf/k0BjDaiA+wYlKZg/EQc4D0wSwAF+pm4EUT3wQtJD/zCCgj4UHr9L+Sf8Vf84+DPU/BoxvlZAbUO+FTgRfInJsAjYFehT94DvqQJ8Bvw3wRgt8XtP07RgkfbWQ+o7/9TYcfS13oNQNflHij/ASY2wL4ErtV/Tk9NDP8Y6WmB6w9v5/7aZhWHccVLRUHw9kO80L6hBrUaFdu1IJIpFBWVjnlBNm84UFj7SyeSiSjiYMY1TROb1Rrb+a/6fO/n5OStlzmfc96TqKB8nvOc75t0fb/uugHCXxqwsgITlB8GLKQGyGeB2+kmcMX41QDAWw2o/wJEwzX+3/jjpgBdTwPgDjj9wgpdC4nKCNBt4D4yQB8C0gAI/od/9xNAfwq/gesWKkLQdwPK/cfmqwF+BiIDbsA9dBcUA74W0W8Bx03wHP8haNCX+CU/1LDl1pgRGRiGAWGBJUCO/0qRgNSAO+ibABug+MiAHgDAn9Pb4GufFviJAetJ8Ws0MCG8ykL8eMF0W+LdTchq4dJ8+V1Y+FV/4QDdBx9OA8APAcCANAEn7v/O6qCyO5/BhwfhREhcMldkoVVl/ya3q0ZxCGBAyY+L+c2BxbIKmAF3SgL8CEBUACQBmPJnwHUGrA9Wj1rOX6/woRRnRC4FFvoiKeGIWFANHp97wmuACehMD15e8bIYEVjIDKCvQ5spP+DVAZZwY62vf50jfAgU/H+rR8MHUUQk3pcpeey5ucfnm6gDVgLiLuDxx8KvZkFEIAy4UhoAAV62/1x5/EP08be1c/ry4VLKfxNW8PAJYbUhHmPVAzLC5wAUYHXA9z9LANAJfsUPwfSNEF+GcwPUAvsNKFx5BBw/7v8j/F7A0ahxSxVumCWtuWcff/wX+TxA/O5A3AMF/+zK4uLiAl2lAfRJ6Hbm31b+LAEYLDhQ//kPWzGBAwhBQ1Vh3ALlh2T0Ir4MLTT1MyGdgcCPMwB8SgBbIJpfCAfEgLskALkD51LVff6dMD/UPoIB72YhqGzcGk/25ujPx1/Ys/vhr/4T0eC3/OPiCNghyMvg3TCABH6W8tMw5fQhFH+Iq99Qfkv+aMnRQ5kL/40T7fHTT9OPRHb9dtiYyz8IMz+T8/678kMgn4XvKxMAJftPi+OHdpwfOgQ/6XD9nyWg+jf4o5f4h+PPzi833IHWgpVA49ftF3otA5KBLAH3sAHcAKLmBOh9cHVaI+eHmjv6sNQfg8bfS0BF17+pGvizUv4Twpde6jcgc+C3tARqAII+IpA6IF8GHrqyLQG4RgZcKwwA+rnVkn9g/KIxJ+Aq5h+jEjB/X2H6q6sqnJo2ibQ/x78wSgn4pQFFBnbjBKQF0Oj51TKQnIE71AAE4Bqkz0GeS7U6S0eV8psm9tTwVbMAqipQJJxVAR//sFT5T/aP6bdm5bfl5lFwzAIpA8oPxR3wrPJHAEoD9FPANrUB0Mdf/9qAVsJfEefQ+cmCwbpsoe8l1KgdVb7/9jqVpHb/+BV/au7p568rv2fgkyIB2H58CMglBsQZeOC2R7a3v6bhDQC+pcc/DZ7GDI2dvzIdMj+m6HCdmTENqWI1Sn76R+EVzdw8qTLjr754RQzgBMwbfzhwPSkBtv8YZ/MUBD8bcC++DcMBiA3Qh4Czp0ASnaYJHQl/YOGltcMlIDQZVaVKfD/qNf+sIu0fywPEkYB+o3TgQAJg9DQXCZ9nmQAzYBuKBMgRwLAEkPhXYMsDQPgdQ+sMQB/axPjjcFjNNCETg2besOL90vgrbx9iCThopEoOARng4v3HsqYGlA7AgIe3SVkCsodAcGHRAOA6LQdA8t9JHGh1we0maC8l8uCmtDQ6juZB4IfIgOfyEumHIBKAIfSsxVBUwdSAa6IIAMZlOMD0wh9//l15AXB1MAaCHxG4aQ+G4+Op/jF6BAZWHXMHGqeSACySBSaEYHFN+HMD7mcDwgHgk/ghQMxVnr77GPCg7/wdF3nQ+i7n36Srt0nXZPyPTVgfHbzCjbSCP4rgEqHzCcnLwJ4bcJYdCBVVoM4APgTpU5CrMiIBkzgAUxok+GDH2sPa6232oC8ng/56x+NCk18wptUajo5/zvvnZQY8NeDsRQbiEPwaCWDsMGCtPANhwJUsAcYfFjA6Llar4De1uoGP2SP+ngzVxmQwHu4JepCHBet7o8HxV9FFL+2gZPzQvvB7qQwH3vA/EWD4OABra2vGv5hEAAZYR1Cit88BKb/8Dnzo0G4AnVKDogTABKX/HtfHNKA/fj8eDMaj/lA1Go3Gg4Pjr37+hhT4ZgDRYxr/XFXIHdjVBOQG0H1gdgQehAHKzxZwAtAR4TKG7b+hFwGojcDFi3QEeoSf6PuP2QLT24UMXy3w+Pv+awnsn2DAshhAnwCNXSZCMIOfDLBOmJQAa4AC/EhAxn/o/O1Ou8LAmzbT03oI9ovE30PrPNl6WuWd49fzg90TMLsCQr9Xs+QRKBIAer0TrpU3QjJAdJWWd6+GBSKCvlwGoGLkSoa+wJGh8GNhD1gRAOd/GwMz7aaZN1HEDE3tPwegPgPLOf8aLxBlwBQ1gBNwRR24ui3faC/RCAMu1wQAvApu/LBkQvS9q9h/zICP/e+FBbVNJIHPY2b+6R5Y60BEIHZfBimNwDxLDJBWoIQfjcDCAFYZAMaFBRBeXCPuGMcuyBL0zi5DE1AG4BvwJyr4B3zjqD8Eb2QBcC3yIppRBNmAbWXHoFczoAxARfD5YFXt1jvcMi/1gLUlAQhFAj7AAH/gSw/N8vzrs7P79B/CVBPKCPxKd0HbfSxYhd8DYA5EDUAb3DwCl1j+FLhpzwNQNw63ROQDzd4WsW9R+Le8i2YeAOCHyu0Peub/ndmxYC0MKCKwFlqUmUcABoBd+DEUXgZagAh86Ogv+dtDghcLMHHBAtHHNQFI+YV+6vNPdA+iHwbucgBUFc8iAil/fgoEPz0Dt20CHxc74Am4JNJH4N2GvhiAA1DvwA3BReM4lXXQpGGNdL9R/g+ijfJ7mNQ6EtPw38puf/rY4HrHpZ+k4zSoAb/FCWAFf/HTcTJAxQmwCHAbGEt/xKAVARCV/O3B1iXtm8aDuUWgtz66eAd4lrDTOqODquHHc7NzgR8hYCOiDDbOiAPBHg6o0gSorl2UBOgRgLgPSvTC8BIIzELE7mfgyxB7AAEdF1ags6SJLhblx+4zPhbb/ah+SeeIUadUJS5EBH6RBET+g39NzsDMBFgAQI+pNSBNwBAGcABO1A3tmCZT36cNVGX7pYsqVuw87T6GKGue7Pj22CyfgOXCAjsHEoEn9QyclIAFws8NoI9wYFd8PgTY+HgQ/sgrwIkaaLswdwGDuscx/Abv/gZetI3qD8Q+pS8Kfn9car5zkjwCp+pPwJmpM2AGXNzkLsCMbl2gTuc6tACcrCHgIfZAV+Br21S84JXpOQCEX9KXN3/rm/YLth+jTnYjuA7+mRYY/mKSABPzwwFeoK4UAH8I/vSeBeBkLd0g5ugXt4GZigygBrLcQRfCEvQqo4/tBzxpn+CX/zICT+oRKFR+I8wNIHShNwNCN+gERADqNbFOYRs09B2odUA/hNA41fQ5FLufGhB9k5YhOIBFFYaUZ6CsARhn3ADmLwzASPvA8QOgch/ACZAANNsna8z7XvQM8wQAO/idniX4UIb/jPVMeP5gWdShJSwIWRncXVH8+gjUJwBL1yXwmN1+BKDZbLoNpR3DIM+lm7+B6dvPw/QK0ef4WdeMZ0cM7+Io8BQrIgL7HoAyA6xIgP9PQDQBOb/gd2m2ogQ2obbMWboB/lLaM9Kap85QRp+dfusatW/obYxUHgM1oJEa8NOpIgJRBMwALYKSgK5Z8F0XDSCIf6c7kXsA6Bkdrzwg+2v7G83JLAMYH9d5mucz8NdJSm+KtnFp07A2sDEz+igLePEIvJwYcIouT8BaGPBqHIHvv/cEcACC/zSaP5AHh3YCmq62v9FVPRioAdErbQML6FneNvPzaBj3OVuAMdU3L7afdUAGGH+YkBYGM+B68Bt+fQLAbwZsSRvkpA0i8PFmpztMDGjxJYo3bfOgnwbg/eiWF/xZx7hQ0TVPy9+zqnHbIqBrqU5SBDj+GKd4YBJ+/oXwVTaA6MEvBmCgD3TCT+pGCWDUFkYTSzN945HYMwNAThbU8efw2e7nj4pbw4hhWxyIWQiHgA1YFgNAjxIARQL0ThgJQP2LAACfZAFwdW9wCaAAKG2bkf1Nlof3s0Zx3CMt2gWGMv5i+5P8m/baoghBfQTezIpgODD9o+HbLAAia4E/ZUCXamBWAmACLfEGw4LRnBC/4bPOswPWLC3k/KqsZ3RC/wIvhg9ZNaw1YPes4WsEwoLFMzgBJE1AHgHgk7L9RzUcSwngAADWlnhDabAwDBhfQ+AKenlFuyzf/Y+KpqnJ8beuYXOC7/zt2QZUXgVB/9MFOgai9PtA1ACgO34YAH2XaagnQHMur0quPkQ0xnoEYv9d2fZ/hvGRbD8cyPsFPa8GRL8U3ARSGXvpgFZBLv8/Af+C8mMm9wFLgP0/0KIGCH83d2A9NcAy0G61gj0OQrMv/FCQJx5oqzjGJ2UtI/OekYGPazfD57W+CCxLAuQEYLK8CCxEDQD7j/z/gepFDehSAMKALzHTEtDiBRJm5EFccO2l6T+fROAzDFpMH5mYvrz7RQBIfYMPE06ognoXvIBTAAOsDJgFkQDQs3oegUv6Ew2z4B28Wg0U7ta0mjKhFg8+Alz04AIug5c3oeAvm0VBwu7aF+bEAMzaIvAyGwD8C6gDloDAx7QEkAW9qIGQFoF3MCBaJlwDEQADTlV68ZLy57LNLwPwjPLnx3/agCfkkza4m/CB8We5oAbsEi1t/wWWOHBGIpAmwALQI36rAdEF/Ttc8OLQSkAddf76uycA+x/4uGp3vwyApd/VbsZXEFyqMgKZAT8RPE0xgEKgRSASoAbo7osB0Qedf7A1Lgw4UQfgB75l4LzhY6mPv/PXBOBPys7tJ64qjOJVY+o16otaK6WFTlERtQwYLV7SWJSi9mKaEqMSY2PFxAhJDYmmCY0vjQmUFgpIGv9X13fba1/mUF3nMjNeHtZvr+/bew4zZ05n7zfUPpJgAHBUTQAA9g2A2g//ECNQ9AD84Q4BoH+zT607gHLYubcAvhGx/X19YPm/kRNQ++XNchTAYZgPBraLvBJaANspAAUA+oc8Af4roLD/Hey3AJCAu+yBjHq37lysekBjH3t9u9Dy6ke4p3Z98CF95hSsIPIIGIBNser+CeC9S7EWZBOEDIAiwDXsFsCXm0fZA0dqBu3L+/5zCSkAHf0/3BfrX+w2AxLAqwagfvuN3aVdseyCPQJQBK5LeRMggLAfBVADmCWAjhZY1MM9vfIBVfa7OyAXQGo/BO/Y7bSlrtkICAMTgxAoAUx5CwgxA5dsKsxXghoAQ2B/zviy0qkAMO6m47GVA2j8d9qvbhfIBhjD/6oR2PJBj4dWU+CA08cG4PZtBMAInM8jcMmaABPACoD8V4CqAPx0AgB8EhhX/wcjWJcSeLh/I9B2ALNf3Tb8nY1klEGILBBJmgePZAF4FwhwSgAMgQGIFui/gxkFcLFsgkcdQG573DcRwRiA2v/XrX+6L94BVDeLo38DwPQz/ykAdo6FwG0oCJzHFgnQErAm4CVAAvUc+AkBaAnQN7aSBB7IYN1KwGe/cv3TUf8QO6DK218OYBI7VtqtyIEA3rtd9QACYA0gARAB6CSAv+PE7+Bgkxc/YSXcJIAswreDCADyxj/sU+0CMJTyT/sh4SAAaJePVAmAywCM/3lNACcCJiD3f/UX7QDZj+B4EpAAWQeN0HWbfr4MAHrhQ+wPaAAIvqu2b3eNHwgABCwEB4oJYAWgBbAJQHFJgAAgAIB9yAPwSYw/fhjNALxVuBwPGhx6fSQAqBn/jgCw/ov7hVKeAEyzxiFYtBHwpSAAsAMsnIfePZ+KQNyzBByBfHIBCWAAZPcewJWwe20fWAcG4GtV2f6prvzTfwtA7E8yBrKJ+LwBcNsBuOqJkADcPpTG3xKAXQGcUAAjZpGO/RgnCW+Ct3j1uwHQ+m8ngMEAJjH+CiEYpCBMYVMSUEyDt6Hcv7QC1oBfGQUAlSZAFQFQAgmALITYAzzu6jpynyOxEuj2X8e/vQRG+9TWJCKgG62ThR1AEQmYUvtOQErAqiAmQlUA+O7PlIAvr8YvAToDfUkAYrgoBI5/Vg73fgj7GYAu+yUA+m8BjFgGJsM2/WevIwGT6Y3AwoIQWDD/DqA7ARfhHs4pDcSmLYQ8ADb8yXdwYCDu4zcTTZ3pZ/7pvqMBMgGSgawR1idsLIFeJADOPQIkwIVA3QMuQjQvIdBF4d1YCI0PlFKxklDdAQBXd/dvABT+W+1OZjVg403/bAUBYCI6wAISgF3l/knAAXzBACQCFAisE0AHAT9qAB3L/3r9f/AEcEbPhydDWQ8clIApBbBtABauLUBKwWUEmADYVwCeAGw1AawM70cJjB8gMvgnADSrX9rv/hsA1PiHjk+SgJ1om3tKwH4AUPO0XyyFDIB8aNsB+Md46h/Du3iHCXiICOAz/dtf4/+Njvybe78CMFCTpQrjLAdbCuOiqANwkQEAMAIOQBPgAZAdrulf9Pf/A/BAAUDff1b6by+A0j8vgZQ/GwRZCibC+Sk7Ff75xAFsGQAYN7EPFguBQ2JfE/AFe4CcywT0/x8A/9yLMChXfy0Be/9XNEDaD9nL7SoAZRTSamDqhALYM//UiiNgDRgAIyD+2QPgWa1/YwHAyS+K/jcAQwDQ2Dfntf0k1n81+kSwU/g/hd02YpAtAGgASGBGM0ACJ50AAMSXtwyAC97FNwCYTuHd0H8GsH4FAExE0LZ/Eujof/QPGASQE4CMgrrXScAATBYAVlZWFlayubBNgAKIDHyDDQhkj5LAPJgAzGIL8SmFhSABcPrj5f9m+neJ/ToAlK2EOO7MgO9WAX5ZfKL2D5UALnkCYN0Q6KeXmQB7MBgxDWAtHI5BgU8rGHcSgG8/o30TAYgq+1Az/ARwuAnAIs6LiiBqIS0D9mMdCPtQICCAVAL86pKNPzzrZntoNwDAprknB4ehe8yC6ccim+7XPfxtB3zffj3MAQxn7rFxl5eL+jDCSSBLQALANhgAmICrmoCLkQEyMApfcxowl7O+EQifPUgVQP/Mf+X/7e7xf18kZ0cwAY9BgBDUvQeAPXAlJgECUARG4JITAACzbwREt2j+Gyh9tvWUTwNhk5sT4bOJK1ECY5qAdvLDHwAPan+8YbwpUrCPuOf2Pfl8IAB9M0z/LIK6DQKAILiqBYAIQBeVgQkUzP8tdkFGnb6LBKwTAET7B+XflLm38FNCYMesLqpVL/5F1gF29kADEPYZAb84RgAYf5N/iUPk/kkA/0y64MAEBASe7l+hf89+2/1oH2rLP90pNSewt7iItEvgZefQZ/UQPXAD9nMA56ILtAlIkgiYxDalAK72y2kg3OuZu/dAyD/8WF/9MP9R/V0XwCL/xyCc5VESMLy4CN8CYbFYCSAU8Sp64N5NAqCsDbIJEMBVScCtIPDND5n/H6QAQOCEdUF3HxD4klkYg/8PLQBV/Pl7ad3tjw0Q1pMsA5uIgMVeQHj64yQNIiYBtgAZfQgR4ExQJuDHmAR/D/8/AMDXsI5DdQsqm8BsBoGjP4vn0N0rP1zvAJB//rWq/9q/D3yJYGdRA6BFQAQ4DAqqw9eB2zdvOgDaZxvkRIhZIH2DXwBcDQBqHwDkQ+14eatqAux4DkMeoyruXZHvPjT+Ofqmjukv818A0G6wtQi5ddusF0QJsAUIgN8WFi7D/+VzJgVAAiyBHxUAhC+xiX3oa0oIQLdujflKQEfa7OLsDyZ7+s91AOB3Pvlzye34w34NoMh/HYFhA5AlINci3wuvSAAuw6xavywQuBpSRQ2kBEBXDEBFwPxDm/F+aLZS9Q/GrqMC1H85/cvsb+IHAAavf2m/JiBNQCGkEOQCAJsEewjAb7/BrJnvigAB/GgA4B87ARQJuJJqYPZArV/h9/7Ki99F+Lv6P/PfyJoACGBzAhoFChVgV4MUwOWFc3kCCCDvglYC9vVtVdgnANMVqwFrAgdplwD40Q8r/3b51z3/txIoux4AJyDmmQMCmJcOIC0gEsAIdCQgKoAEKgTy71gDB+nBdQAI/wMXPzg6/LP+g8AHVQSG1HwhEoirQRPWAi+7dSCYd//QIABMQADABU07cF1HauCK6B/OA93avp4BUO+Mfzn8fPvf+C9/MosEpAag8aIERJYDzgEggArA6HsC5ueFQQ3gkpeABYA1AMG3CQwSgbETnAc6db8JAPx31L/5J4D2F7Owf6B7ENhdXI0aoGI6iFXQ8s2b6AAWgJ9//lnME4AsB2dAIAHgFEAAMvCZtAag+1kbHJqNkz1hBbADMP3038a/+c28LAAiQ+A6OYQA6E6ldsBV0E34dwDnfsY+D5UJIACMf7QABqCS18CDsg3SOp9uf84AtG/9Wf2dy1/aJwArgyX9RzuWgGBAZS0QBcAEmOa1CLgaJIDnpQIaAESQA0AblIsCCmBIdhxVCHZRAc0X/zn3t/5pnwBY/5SHYGlvFd5Xx3GulFpgb1n9MwHz2ByASv5UEE3gSQCA8hJoAwAedRuEX9mwk4OeL6QAcPFL/53tn+Xf/lwOtXRsaenY0CrMrzYBKFrgbxEAAHCxCvQieQ0ACFoAlMZCIxAXxmAWMgi26b6OALADDux+NN+Mfwtg2o5pOS19sCQENlYXJQBCYRxHHYC2BcpG/wAww2mAAH7EDVxMrICKwHX8S74jUvtGQU/2uGsdkA2g6f2mgf4ZfwKgLANLSydXxb0icK0yAEckADmAeSAY/Xl+dHQeGEAgpoEZAuDd+zgJmMZ0U5l/SC4NTr1lAKA5bFAg2GYHzH4pPgfQ7d9U268QLEF3hYDEQM84VGkOFP/RAuAeCEZFFoEVAgABA0D7SuB6IkBhVJ3A53xDEO5xThzuMwCsfyn+7sVPs/4hgHBPLQEB2qAZt14gT4sAWAVAmP7UPgDMWwAsAjPoAYMAMAFyPSdCQAKobgD4/FTeBeYm5Mws9BmA8meyu6/9Mv7Y2vy3CDQClKcgOgADwP4HBCKLwLmVmRn41xKAagDXr4v9H+ifGbgO4T+qIgACc1b+eHaP/r0B9Duq//jx3b29rQ3X1tbe7u7Jevw7tLS0tVqrXAWrfxDwBojxH5UT2yAQeAIA4CUCAIG4i4td0cIhAocPIQGACMhaYMojMJtvCADv/RwNsF+O/tnDexs769tzcz3ss3Ozs71eb67nmri7v7G1d9KHv5vAV0MNgHoKgHTw//jj5z/EvkkJlACePfQiAcBeBkCMi+xRCWgE/knLQe99OGy/92EA8G//FZd9Tx/eugfnFKzDf6vt/Y29k5n/r3yjNjoDsMUASP/D4dZ187dE8L+gNfBuDYD+FQAFACIAgPCJMSwHIwLY49QvCiCb/mB+Y108z85RcC8HznKarSns7M1U3gPBUh0BaYHWAbeXAcD9ewJGM/lEcE67gDVBAjAFgBh9NaQA2AX6fFPIVQB0j/6L/nd4C+aH5nDImbI60ANnIWHexzMI9jsB78ntIBSHI9gYGICjR+ZTAMy9A/jDMyAR0HkA8hpoAfBWPpWI4D5XQ2HfA8AGEPYPb2yrb84Vg4UE0D61ub/1VRIQrE1Pr2F7b2i1h83EKXBf/AcAcc8AsAewBgzAM4MT4IIfJMDkAIBgln3QNJsFIC0AZOw3hyhNQKeQAOy0nzHYyxHkXaBXd8AiAAEAR0wDo04AALwHPAUA3QF4DTsJMAP6tnhqBATEu6tv/tP4n76zTt+y6Qs9wEF3ymqgS5sbM04AhbAm29pmr0f/fBvMDugRGC2lBGYgJAD+HQAJ0L8BoMoQ3GMRRATuZP4BYHhjk0tlWlcNToBs3WIMtAzW9no9+JejLgB2gI/U8kfYmAFNgAFgAtoCaP2/FgCMgRSBL4dMd/u5/8M++LZYnMAc4SMvmxKoO0Iv2mGrcY/BltmXA7rbE/vw3xQAhNH34Q8IKkUQACwCLxx6rADQjP8b2AZk4AFmgqIN7Ga3voV996fmITzB5gFozBMC9v+AQLWwqgQ4A9QFAOno0zwToDpfAWAHoH1jADkDpuC+LYcmT42rn/X0ZwCzPzE0MTE3IeM/FAlQFHje0Q57B9dAi2CjVyyBdqIAIPP/EQBg8HE4BJ8Iw78n4Onk/y8HkI9/CEFgBlRlG+hH/mHf/NuwT5hvP+P1rGxFAyyrgHXQhSAAXNssGsAyAfj4W/0rAPq3ElhRAJcA4IkcQBMAOKI0AmRwIbUBZOCON4Bhs2+b7ZZ+tS4IojOoPAqMAHUgguXltbXltT3xHw1gYbnugBp/kXIoegCnAQB4XAG0/nlVX8o6EMSyEEIbCALb9n/079O+JgCGgwIeZnFoEeCZcTAKZp8xEM2lbYD2Z0AACHbYAOfNPwNgBFQMQERgRmQA8IuT1RTY3tFMKbiiDwiDf45GI3yg/8edTfiESWfAk21zeCHuxbofegox/Q+Pwsay6NpQrAD22gIQ53pAZQKg6AHvAsAjBuAvCwCcVffzAwA7vBUIAYdw3wiM3Jf/48G62mUGsFebw4nh50YRgQWguw6EwF40wOXlpgN+hD2pXg3PpB7wCACwA0QA2m+0GYiog9A9JTBhw+9Df5D/WS8FeXAIOLI2kFrhw7V/DgT24Z8NkAGAfScw+qluXAxFBM5bCTx66FB0AAIob2lH4ZUAyBisg8DsAxl+eJMAQAGAIEjATt4WsUwwAL6r/VxD2LpgrC4O7YFATyeAfAnkAXD/nz4sAfjl6efVP0qAARCTvKOHHZoCy4ApCNwZe+3OOBZEUuO5e7LgFv9SW4IslHxlyNWwusauh51b+QIIyZ8/cXQbHGL86d/cf4qdTcACQAD469hhBUD/TQN4G7uLCAKAzAnj98b66/q+CBkwhVUcAaKgwDYJ/xMegCHPPk5BQFh0MPAF0OL88sYkht8bAN8FswF4GTADBiBWgs8CwIuSgDoAF/hnvVJMgan/2oNTRz5GJ5QMBAKPerite0L+JNogACgFaM4QYPNz63/SF0AnNpZXNP91AXgEIgHsAZn/GQfwDOyLCKD5Rnsfx5v9Nx1AMHAMm9oJfUU0MUiKoc5BahMiWw9g/MM23aeaoLJLIJPivl4BRP1bDbgGJ+ApAHjMAOQVcKFw3+/DPvwrAgj+k4TVuhPA+4JeTYBloQeHPxBwGvAnZp/55+7SN4Dx5cibzD9nAI4/xCbAJsgEvAAAT5ctEPYvXKhuakf12QsoJfAxCIw7gQ4KEgI9kwMB6FP4rHoAdxzuf4T+1T6U/EM+/h0AoCwBTwDA46kCxkiAf9fq93lbU1EiIIj881/3lMAUvrTERtApLpZqyehDDEC9M/42/6t7jn8RAHOvJ9GgaVAWggDwCAFAN8bMfwqAePfd1Q8ElN1sDgQYgg6xIKAKQk8OH+0O+/SP26aGfwLIGgBkCEaRAUlAaoPwr8KXBrAQ1HmQADwAr1+wHoDh7wsBV98gvF0ikGXC7sgrbAQMQZc4TRICJV47hz/8H9li/MM/J0DzzgQwAkUCsAyAXkpzwI0bYzcUQPhPACimoNDwSDQChGBubuI/qiVA89Uew/+xtf9RWC/8Q3kDZAKcQMcyAHrG/EM3UAL0/7oCoP1Xcwb9AgEycdpuOfifQ8CVUgXAoEQK2uG39neO7lXW/4IAAwDVACDxLwSeUgBPGwD6B4BIAOwXt7QqYoB/r977ViobJ17xXkgEne5dRFCItln9kxz+Izs+9ysA5p/+KSTAFoOpBUCcBESPA0D4v3Ej9w8ZANinLAtWCYDAzz9YGWgIJlcflgJeLxgsdU77HH6Jf9b96wUQ/ZcJ4CwQ7wRsEoAeZQLgvwTA73O3CMCm1s5RD8EIPrrYe3gh2DujLgA+J9C+3yz0Zlv+HH8CSHXQtIB4M/juo4dUzzMBJQBIC6BVtIRwjif64riEIBCsdiLg+6LODEz0aF/Tj7WPDv8e3/wX/jkD0L7tQDA4AeiB3gXZA9S/SyqbAajFnqhh0CfQzgmpgxNThmCcDLpAdKqnMvueflQ/F38Hjz81ygAUk6D2wOiCat9LAHL/TuDVbhUTpJ2P4/MDCQFjcPCaqB1/iOGP9E+M3hTV/q3+sdF+XQFcCfN6kLSAaAK6ChAGuX8I7gv/ZwZBwFbd/rVGAAZD/y8D7r6w38OFwNY/pP47AuAI0iTAOUDWga4X473wjQrAoI+0d3EwCHbecgSYEYzBuNTzAf2gY/BpH5e+9VJw65/V32m/bYKoAGkBoccsAfks2DcCdQCwq/AwgACzQASIgc4JqwhCXQ3F2yJ96BXuZeL30Yd9UVf+OxoAFwJ5ACIBL4R/rAQ8AFAEIAHgLR2S3vfHzqZABGRgEExptDkJ0rslfyT/0Zwhs88CoP9y/EeTCKCzB6ICQi/pm+G2BACAovX3/c4Gorocompw3poAApsVjYFBSBgoeod5uLfoq32v/RoA819eAoFz3UzpzUC9DJRFwJNqnTUwFj0AcgD1dzrju/xJXUGIyjl5V2MABg4BFBSDgaAWoUmId8Y195j49veWkzgDlv1fpGlX/yKF4BNBcTGAq4AnMgCPpiag9rH1X/cA/EoC4fwYDiIIKaMWxta2/14/GACCUQCHWiMq+6kg/obw0N41Mb6Ggx2ge/4f1RM3fc0CYAs8f0krgHqxnAUusAQq/3Rv32tXBl2N8YwyOYlSUAaA4BQcBMWfSUrm4X4H7s15HoBknzMA4x8MrAxsHTRKAvU7QbbBKgEO4NVIwGlYeT99pUFPOGyHoi2KX86TbJvDW6gFhwAKygEkku30o7FmHu6PbG9cW7PBl4d2BoB7VVn/Mf66Q6j/rgDYKogRiGkgawF4058K4PTpVACNLAZymP8ztZTP7samQRAOLlhW2+HcRn5qe2dmbc3th+Lyf9kAIdqPAOR1UAJw/1wE5BEggJgFISQgAHgABgOA2AzkqP0bvuG9nc1xWASIVkfN+9btNZfaX+uYANv6H/UDmz31BAz6qyBbICPgABgBUdh/9fSZM6cVQJcMQRRDq2zy2MUnxu9uTqyOHDmqOjI1NbS5vbOxNbO0tLaG3aXu6V8BVAEY5QogtpgCcOqqgBnOgXkE6N8yEAkwCPxWd5fMXetcdtZPDnGpFc2HmP92BqB/dcwm4C8+yqbAUQaAHaCIwFhFIEsAAnD6YQDS/NAMPHY5+fnYmaX3sZXu12xbSwS0+xX51w7QOf6Q9/7Bw99cDGz1CPxn82DfaiBmAahugh/IaXhwDBwDB9/+6RJ23+AaEUjuVeHfnVf5p//mCmAQ4AJAX5d/EWMAuAYo9Jh3QVXZBdEDAOAs/Wdf7tSzZ8BEwyaOP3zL0Z0A+s8SMNA/lwCcAXyvA8DxtwDwbVCpR58TAFwK9Z1AGYGzdG9nEf+Bq1gu6iv3zvF3BAwACbD7037rn1MACRQtwOy31wLZAes+2DQBSLqg+T8r9ulf86/usctWSQccUsNnjtG9RP8Y7ScItK8EOPzWAJJ9NsBR+rfUKwH3zjVw9akAdsBGz3ApxBqIAIDAaU2Al746H/5gePgDVw1hCf0uhh0vfGua/xrd19N/W//4LrT45x9BiUDEK+H2T8I/AYh/FkBbBDealYC6x24IIJh3Bm4dDMDBGTQQuHX5h6ax5/4h3Boe9pv+d84DYO3N/uSBs8545UXArABoXwLw5KOHOvVIXgNsAgHgrEi8GwMxHgoCpBBn9WxP3L4hYOPHN0AQgOks/V8pghj/azH8Nv7zVgFOADIAFM2XCwDOAN16LACwC8osQAAQnGMXJdfHSaBJgvrFA31XCdDvgDAAX4n929jUv98U7vLlFf82+LwkYBT+1X6a97KCkIMfEM8nQGwsgK424ASgvAaQAQUgXfCsRiAYwDn8Hz+OAximiQAHfIvUvj8WUuc4sLnM/W0WgN8STMcf0gTo+AcB2iaK0RD9138LOLANtF2APUC64FlxDgZmH7ax47BzLSkF2MfRaBoyBmF/TbL/3m3VtaQFIRD2kYBRBCAEAhECq4IMwDz2wv9BDYBtQAi4f9YAS4BtQCnoNGAR8BywKzAK0JId2vH4tVBjoOYh/7XoZRJQ97wlmBYAirr4MlAqAP9ILPZEoB7/J9kAugm8DACpBIiADLIeYC7NOxkcnwYGmCxugkEO04V93XX0Re6e/oXAyoLZRwSg5I8UfOCr3teO/2H6P0BPpwio+f6vv/pKiCEYzsQEZDJz8MqTGaf/TF/F8GsAVOV9oc9FA4BgrBJ983nr/zwvAvwvAkxAMRNk9mUHgW6pZ2NCtfbRAGGfHYD+IQUwLxVg5rDTcoWBX5Mtxp/+H6rHog1eIIHTTQaIQDPQyQD1EF7xorFvAHzscdB/DWAeAEZBwPtbGwX6Z/t3vcsV4H8jwC4A+0bg1wzA8Fmal/NxmQs7ExAg6D//Vvx708i+IIAMAX8fp0oAlAY4eaVvumf8PQD0/38IeBfQUxYBIggI0PFh+m01zYciBCenxbnsMK8A6J8JYASgPAE5DrpX87V95P9/6d/izp+1kRiI4l4vKOvFdvBVKY642ebKI7AEXLm0K5HmvkUI3PeHe9LM5K2klTnsmPz0x06KwHt6M1pIsd3TXysCMcEiAGZqANCDEogOW/z8PHuoH4bh7W2I8g15S7ae/8nkw4CPsxgQjjdLwJlDofyT6H+o6q8/D0xrAPz+WY1AbIMX9A/6CcnxR3wMyuswFQ/5StAPRL95AF1ngxlg7LX0Vb4ZYPf/NQ78kgjIZYgAvGMkjfAZg8CDug8DAj9ggw1T9HXgYgDW+DoKagCYWBCwJAS93Hn0qfzxSv1guQ4ZeDFgASPAEJTkwmWXGUkcCPKB7qMhAQhFAKgfU1C91B2X2EP5Wv79cnEd7acD75oBjMQE1sB/ZMAMqCbA4/iVUwTypQ+YB2gEMgC/qnZA9dTP9ndVGaANGNGCIgVVihgwBKUJwHtsdIAWiAMHyJeN0ifYr6byR3Bl/FkGvAmyDBwnPGfSGYecIawCy4CHAZ4OKAcxAaI+dKAUDvHYOQ6UzssP7JaL23CP9i8CZoBlYKTdkPL3WQXEmTng4xbVez96YAaEhYP8ozkQYepDmOSMlYU//pmVW9xOiypgBhILjvSAHTE3oWTI8TEE0I8ZGDFpAQi3GU2ow9r3PP6badZsBOIA9BtHsq9QGoBRWGA5MCwFYUghIAtiwrwRvPdOIn/TUMPNdfCShQBjzoNYCHlH0L3qgRf5r/pdsVaAKTmAOig0+Vgfc+oPo+A3bvGVdFv2gawOaEJZD7waZcMigwxM4NkRzQEM2mClcNKQJ4mPG+Rjp/yvxq1pgVC3YC/7bDVgowWYZoHXGfGAPmAG+OJUOeyTjpB6KOdrdUfIvwdN91hJAT3IfYDoI2MwfzlMrwa64DPGBFEr/YHSgfcbtL670bTbLAVhJNAEpqFoCLXeCNKCyCy4jA/q3eLONG6tJogBrISUoidgS/uCUvGAPmQ2YIRNpxjjw+dq1/Hs78vStf32iZUwfUC84MM+8YF1gZXfD9hYEIqv8rDpO3d/8WUWOviwfRITFH677ENigzBTEjqJxySrVd/vOtcsvpll41zXtW3b9zAE/FAgXGb+4CgWpGmQNfPYuFI2oAe73a7rnGu+RPc/7NDmX/6EDAkAAAAASUVORK5CYII=", this.supportedTransactionVersions = null, this._readyState = typeof window > "u" || typeof document > "u" ? Me.Unsupported : Me.NotDetected, this._disconnected = () => {
      const t = this._wallet;
      t && (t.off("disconnect", this._disconnected), this._wallet = null, this._publicKey = null, this.emit("error", new ba()), this.emit("disconnect"));
    }, this._connecting = !1, this._wallet = null, this._publicKey = null, this._network = e.network || null, this._readyState !== Me.Unsupported) {
      const t = (r) => {
        typeof r.data == "object" && r.data.__glow_loaded && (this._readyState !== Me.Installed && (this._readyState = Me.Installed, this.emit("readyStateChange", this._readyState)), window.removeEventListener("message", t));
      };
      window.addEventListener("message", t), io(() => {
        var r;
        return (r = window.glowSolana) != null && r.isGlow ? (window.removeEventListener("message", t), this._readyState !== Me.Installed && (this._readyState = Me.Installed, this.emit("readyStateChange", this._readyState)), !0) : !1;
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
      if (this._readyState !== Me.Installed)
        throw new ii();
      this._connecting = !0;
      const e = window.glowSolana;
      try {
        await e.connect();
      } catch (r) {
        throw new Hr(r == null ? void 0 : r.message, r);
      }
      if (!e.publicKey)
        throw new Aa();
      let t;
      try {
        t = new fe(e.publicKey.toBytes());
      } catch (r) {
        throw new jr(r == null ? void 0 : r.message, r);
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
      const i = this._wallet;
      if (!i)
        throw new Et();
      try {
        const { signers: o, ...c } = r;
        e = await this.prepareTransaction(e, t, c), o != null && o.length && e.partialSign(...o), c.preflightCommitment = c.preflightCommitment || t.commitment;
        const { signature: u } = await i.signAndSendTransaction(e, {
          ...c,
          network: this._network
        });
        return u;
      } catch (o) {
        throw o instanceof Rt ? o : new fr(o == null ? void 0 : o.message, o);
      }
    } catch (i) {
      throw this.emit("error", i), i;
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
        throw new ro(r == null ? void 0 : r.message, r);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
}
const sy = "Phantom";
class ay extends oo {
  constructor(e = {}) {
    super(), this.name = sy, this.url = "https://phantom.app", this.icon = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjM0IiB3aWR0aD0iMzQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iLjUiIHgyPSIuNSIgeTE9IjAiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM1MzRiYjEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1NTFiZjkiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9Ii41IiB4Mj0iLjUiIHkxPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii44MiIvPjwvbGluZWFyR3JhZGllbnQ+PGNpcmNsZSBjeD0iMTciIGN5PSIxNyIgZmlsbD0idXJsKCNhKSIgcj0iMTciLz48cGF0aCBkPSJtMjkuMTcwMiAxNy4yMDcxaC0yLjk5NjljMC02LjEwNzQtNC45NjgzLTExLjA1ODE3LTExLjA5NzUtMTEuMDU4MTctNi4wNTMyNSAwLTEwLjk3NDYzIDQuODI5NTctMTEuMDk1MDggMTAuODMyMzctLjEyNDYxIDYuMjA1IDUuNzE3NTIgMTEuNTkzMiAxMS45NDUzOCAxMS41OTMyaC43ODM0YzUuNDkwNiAwIDEyLjg0OTctNC4yODI5IDEzLjk5OTUtOS41MDEzLjIxMjMtLjk2MTktLjU1MDItMS44NjYxLTEuNTM4OC0xLjg2NjF6bS0xOC41NDc5LjI3MjFjMCAuODE2Ny0uNjcwMzggMS40ODQ3LTEuNDkwMDEgMS40ODQ3LS44MTk2NCAwLTEuNDg5OTgtLjY2ODMtMS40ODk5OC0xLjQ4NDd2LTIuNDAxOWMwLS44MTY3LjY3MDM0LTEuNDg0NyAxLjQ4OTk4LTEuNDg0Ny44MTk2MyAwIDEuNDkwMDEuNjY4IDEuNDkwMDEgMS40ODQ3em01LjE3MzggMGMwIC44MTY3LS42NzAzIDEuNDg0Ny0xLjQ4OTkgMS40ODQ3LS44MTk3IDAtMS40OS0uNjY4My0xLjQ5LTEuNDg0N3YtMi40MDE5YzAtLjgxNjcuNjcwNi0xLjQ4NDcgMS40OS0xLjQ4NDcuODE5NiAwIDEuNDg5OS42NjggMS40ODk5IDEuNDg0N3oiIGZpbGw9InVybCgjYikiLz48L3N2Zz4K", this.supportedTransactionVersions = null, this._readyState = typeof window > "u" || typeof document > "u" ? Me.Unsupported : Me.NotDetected, this._disconnected = () => {
      const t = this._wallet;
      t && (t.off("disconnect", this._disconnected), t.off("accountChanged", this._accountChanged), this._wallet = null, this._publicKey = null, this.emit("error", new ba()), this.emit("disconnect"));
    }, this._accountChanged = (t) => {
      const r = this._publicKey;
      if (!!r) {
        try {
          t = new fe(t.toBytes());
        } catch (i) {
          this.emit("error", new jr(i == null ? void 0 : i.message, i));
          return;
        }
        r.equals(t) || (this._publicKey = t, this.emit("connect", t));
      }
    }, this._connecting = !1, this._wallet = null, this._publicKey = null, this._readyState !== Me.Unsupported && io(() => {
      var t, r, i;
      return ((r = (t = window.phantom) == null ? void 0 : t.solana) == null ? void 0 : r.isPhantom) || ((i = window.solana) == null ? void 0 : i.isPhantom) ? (this._readyState = Me.Installed, this.emit("readyStateChange", this._readyState), !0) : !1;
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
      if (this._readyState !== Me.Installed)
        throw new ii();
      this._connecting = !0;
      const t = ((e = window.phantom) == null ? void 0 : e.solana) || window.solana;
      if (!t.isConnected)
        try {
          await t.connect();
        } catch (i) {
          throw new Hr(i == null ? void 0 : i.message, i);
        }
      if (!t.publicKey)
        throw new Aa();
      let r;
      try {
        r = new fe(t.publicKey.toBytes());
      } catch (i) {
        throw new jr(i == null ? void 0 : i.message, i);
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
      const i = this._wallet;
      if (!i)
        throw new Et();
      try {
        const { signers: o, ...c } = r;
        e = await this.prepareTransaction(e, t, c), o != null && o.length && e.partialSign(...o), c.preflightCommitment = c.preflightCommitment || t.commitment;
        const { signature: u } = await i.signAndSendTransaction(e, c);
        return u;
      } catch (o) {
        throw o instanceof Rt ? o : new fr(o == null ? void 0 : o.message, o);
      }
    } catch (i) {
      throw this.emit("error", i), i;
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
        throw new ro(r == null ? void 0 : r.message, r);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
}
var pi = Pr.exports.Buffer;
function cy(n) {
  if (n.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var e = new Uint8Array(256), t = 0; t < e.length; t++)
    e[t] = 255;
  for (var r = 0; r < n.length; r++) {
    var i = n.charAt(r), o = i.charCodeAt(0);
    if (e[o] !== 255)
      throw new TypeError(i + " is ambiguous");
    e[o] = r;
  }
  var c = n.length, u = n.charAt(0), d = Math.log(c) / Math.log(256), w = Math.log(256) / Math.log(c);
  function v(E) {
    if ((Array.isArray(E) || E instanceof Uint8Array) && (E = pi.from(E)), !pi.isBuffer(E))
      throw new TypeError("Expected Buffer");
    if (E.length === 0)
      return "";
    for (var _ = 0, C = 0, U = 0, P = E.length; U !== P && E[U] === 0; )
      U++, _++;
    for (var z = (P - U) * w + 1 >>> 0, N = new Uint8Array(z); U !== P; ) {
      for (var F = E[U], O = 0, W = z - 1; (F !== 0 || O < C) && W !== -1; W--, O++)
        F += 256 * N[W] >>> 0, N[W] = F % c >>> 0, F = F / c >>> 0;
      if (F !== 0)
        throw new Error("Non-zero carry");
      C = O, U++;
    }
    for (var G = z - C; G !== z && N[G] === 0; )
      G++;
    for (var q = u.repeat(_); G < z; ++G)
      q += n.charAt(N[G]);
    return q;
  }
  function S(E) {
    if (typeof E != "string")
      throw new TypeError("Expected String");
    if (E.length === 0)
      return pi.alloc(0);
    for (var _ = 0, C = 0, U = 0; E[_] === u; )
      C++, _++;
    for (var P = (E.length - _) * d + 1 >>> 0, z = new Uint8Array(P); E[_]; ) {
      var N = e[E.charCodeAt(_)];
      if (N === 255)
        return;
      for (var F = 0, O = P - 1; (N !== 0 || F < U) && O !== -1; O--, F++)
        N += c * z[O] >>> 0, z[O] = N % 256 >>> 0, N = N / 256 >>> 0;
      if (N !== 0)
        throw new Error("Non-zero carry");
      U = F, _++;
    }
    for (var W = P - U; W !== P && z[W] === 0; )
      W++;
    var G = pi.allocUnsafe(C + (P - W));
    G.fill(0, 0, C);
    for (var q = C; W !== P; )
      G[q++] = z[W++];
    return G;
  }
  function T(E) {
    var _ = S(E);
    if (_)
      return _;
    throw new Error("Non-base" + c + " character");
  }
  return {
    encode: v,
    decodeUnsafe: S,
    decode: T
  };
}
var uy = cy, ly = uy, fy = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", Cr = ly(fy);
const hy = "Slope";
class dy extends oo {
  constructor(e = {}) {
    super(), this.name = hy, this.url = "https://slope.finance", this.icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iNjQiIGZpbGw9IiM2RTY2RkEiLz4KPHBhdGggZD0iTTI3Ljk0NzUgNTIuMTU5Nkw1MS45ODI2IDI4LjA1NzJMNzIuNjA5OCA3LjY1Mzg5QzczLjg3MzQgNi40MDQwMSA3Ni4wMTc4IDcuMjk5MSA3Ni4wMTc4IDkuMDc2NDJMNzYuMDE4NyA1Mi4xNTlMNTEuOTgzNiA3Ni4xMjY4TDI3Ljk0NzUgNTIuMTU5NloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8zNzk1XzI1NTQzKSIvPgo8cGF0aCBkPSJNMTAwLjA1MyA3NS45OTNMNzYuMDE4IDUxLjk1OEw1MS45ODI5IDc1Ljk5MzFMNTEuOTgyOSAxMTguOTI0QzUxLjk4MjkgMTIwLjcwMyA1NC4xMzEyIDEyMS41OTcgNTUuMzkzNyAxMjAuMzQzTDEwMC4wNTMgNzUuOTkzWiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzM3OTVfMjU1NDMpIi8+CjxwYXRoIGQ9Ik0yNy45NDcgNTIuMTYwMUg0NC42ODM5QzQ4LjcxNDcgNTIuMTYwMSA1MS45ODIyIDU1LjQyNzYgNTEuOTgyMiA1OS40NTgzVjc2LjEyNjlIMzUuMjQ1M0MzMS4yMTQ2IDc2LjEyNjkgMjcuOTQ3IDcyLjg1OTQgMjcuOTQ3IDY4LjgyODdWNTIuMTYwMVoiIGZpbGw9IiNGMUYwRkYiLz4KPHBhdGggZD0iTTc2LjAxNzggNTIuMTYwMUg5Mi43NTQ3Qzk2Ljc4NTUgNTIuMTYwMSAxMDAuMDUzIDU1LjQyNzYgMTAwLjA1MyA1OS40NTgzVjc2LjEyNjlIODMuMzE2MUM3OS4yODU0IDc2LjEyNjkgNzYuMDE3OCA3Mi44NTk0IDc2LjAxNzggNjguODI4N1Y1Mi4xNjAxWiIgZmlsbD0iI0YxRjBGRiIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzM3OTVfMjU1NDMiIHgxPSI1MS45ODMxIiB5MT0iNy4wNzE1NSIgeDI9IjUxLjk4MzEiIHkyPSI3Ni4xMjY4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNBOEFERkYiLz4KPHN0b3Agb2Zmc2V0PSIwLjY0ODU1NiIgc3RvcC1jb2xvcj0id2hpdGUiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzM3OTVfMjU1NDMiIHgxPSI3Ni4wMTgiIHkxPSI1MS45NTgiIHgyPSI3Ni4wMTgiIHkyPSIxMjAuOTI4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4yNjA3ODQiIHN0b3AtY29sb3I9IiNCNkJBRkYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRTRFMkZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==", this.supportedTransactionVersions = null, this._readyState = typeof window > "u" || typeof document > "u" ? Me.Unsupported : Me.NotDetected, this._connecting = !1, this._wallet = null, this._publicKey = null, this._readyState !== Me.Unsupported && io(() => typeof window.Slope == "function" || window.slopeApp ? (this._readyState = Me.Installed, this.emit("readyStateChange", this._readyState), !0) : !1);
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
      if (this._readyState !== Me.Installed || typeof window.Slope != "function")
        throw new ii();
      this._connecting = !0;
      const e = new window.Slope();
      let t;
      try {
        ({ data: t } = await e.connect());
      } catch (i) {
        throw new Hr(i == null ? void 0 : i.message, i);
      }
      if (!t.publicKey)
        throw new Aa();
      let r;
      try {
        r = new fe(t.publicKey);
      } catch (i) {
        throw new jr(i == null ? void 0 : i.message, i);
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
        const r = Cr.encode(e.serializeMessage()), { msg: i, data: o } = await t.signTransaction(r);
        if (!o.publicKey || !o.signature)
          throw new Ht(i);
        const c = new fe(o.publicKey), u = Cr.decode(o.signature);
        return e.addSignature(c, u), e;
      } catch (r) {
        throw r instanceof Rt ? r : new Ht(r == null ? void 0 : r.message, r);
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
        const i = e.map((w) => Cr.encode(w.serializeMessage())), { msg: o, data: c } = await r.signAllTransactions(i), u = e.length;
        if (!c.publicKey || ((t = c.signatures) == null ? void 0 : t.length) !== u)
          throw new Ht(o);
        const d = new fe(c.publicKey);
        for (let w = 0; w < u; w++)
          e[w].addSignature(d, Cr.decode(c.signatures[w]));
        return e;
      } catch (i) {
        throw i instanceof Rt ? i : new Ht(i == null ? void 0 : i.message, i);
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
        throw new ro(r == null ? void 0 : r.message, r);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
}
const py = "Solflare";
class gy extends oo {
  constructor(e = {}) {
    super(), this.name = py, this.url = "https://solflare.com", this.icon = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmMxMGIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYjNmMmUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI2LjQ3ODM1IiB4Mj0iMzQuOTEwNyIgeGxpbms6aHJlZj0iI2EiIHkxPSI3LjkyIiB5Mj0iMzMuNjU5MyIvPjxyYWRpYWxHcmFkaWVudCBpZD0iYyIgY3g9IjAiIGN5PSIwIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDQuOTkyMTg4MzIgMTIuMDYzODc5NjMgLTEyLjE4MTEzNjU1IDUuMDQwNzEwNzQgMjIuNTIwMiAyMC42MTgzKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHI9IjEiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggZD0ibTI1LjE3MDggNDcuOTEwNGMuNTI1IDAgLjk1MDcuNDIxLjk1MDcuOTQwM3MtLjQyNTcuOTQwMi0uOTUwNy45NDAyLS45NTA3LS40MjA5LS45NTA3LS45NDAyLjQyNTctLjk0MDMuOTUwNy0uOTQwM3ptLTEuMDMyOC00NC45MTU2NWMuNDY0Ni4wMzgzNi44Mzk4LjM5MDQuOTAyNy44NDY4MWwxLjEzMDcgOC4yMTU3NGMuMzc5OCAyLjcxNDMgMy42NTM1IDMuODkwNCA1LjY3NDMgMi4wNDU5bDExLjMyOTEtMTAuMzExNThjLjI3MzMtLjI0ODczLjY5ODktLjIzMTQ5Ljk1MDcuMDM4NTEuMjMwOS4yNDc3Mi4yMzc5LjYyNjk3LjAxNjEuODgyNzdsLTkuODc5MSAxMS4zOTU4Yy0xLjgxODcgMi4wOTQyLS40NzY4IDUuMzY0MyAyLjI5NTYgNS41OTc4bDguNzE2OC44NDAzYy40MzQxLjA0MTguNzUxNy40MjM0LjcwOTMuODUyNC0uMDM0OS4zNTM3LS4zMDc0LjYzOTUtLjY2MjguNjk0OWwtOS4xNTk0IDEuNDMwMmMtMi42NTkzLjM2MjUtMy44NjM2IDMuNTExNy0yLjEzMzkgNS41NTc2bDMuMjIgMy43OTYxYy4yNTk0LjMwNTguMjE4OC43NjE1LS4wOTA4IDEuMDE3OC0uMjYyMi4yMTcyLS42NDE5LjIyNTYtLjkxMzguMDIwM2wtMy45Njk0LTIuOTk3OGMtMi4xNDIxLTEuNjEwOS01LjIyOTctLjI0MTctNS40NTYxIDIuNDI0M2wtLjg3NDcgMTAuMzk3NmMtLjAzNjIuNDI5NS0uNDE3OC43NDg3LS44NTI1LjcxMy0uMzY5LS4wMzAzLS42NjcxLS4zMDk3LS43MTcxLS42NzIxbC0xLjM4NzEtMTAuMDQzN2MtLjM3MTctMi43MTQ0LTMuNjQ1NC0zLjg5MDQtNS42NzQzLTIuMDQ1OWwtMTIuMDUxOTUgMTAuOTc0Yy0uMjQ5NDcuMjI3MS0uNjM4MDkuMjExNC0uODY4LS4wMzUtLjIxMDk0LS4yMjYyLS4yMTczNS0uNTcyNC0uMDE0OTMtLjgwNmwxMC41MTgxOC0xMi4xMzg1YzEuODE4Ny0yLjA5NDIuNDg0OS01LjM2NDQtMi4yODc2LTUuNTk3OGwtOC43MTg3Mi0uODQwNWMtLjQzNDEzLS4wNDE4LS43NTE3Mi0uNDIzNS0uNzA5MzYtLjg1MjQuMDM0OTMtLjM1MzcuMzA3MzktLjYzOTQuNjYyNy0uNjk1bDkuMTUzMzgtMS40Mjk5YzIuNjU5NC0uMzYyNSAzLjg3MTgtMy41MTE3IDIuMTQyMS01LjU1NzZsLTIuMTkyLTIuNTg0MWMtLjMyMTctLjM3OTItLjI3MTMtLjk0NDMuMTEyNi0xLjI2MjEuMzI1My0uMjY5NC43OTYzLS4yNzk3IDEuMTMzNC0uMDI0OWwyLjY5MTggMi4wMzQ3YzIuMTQyMSAxLjYxMDkgNS4yMjk3LjI0MTcgNS40NTYxLTIuNDI0M2wuNzI0MS04LjU1OTk4Yy4wNDU3LS41NDA4LjUyNjUtLjk0MjU3IDEuMDczOS0uODk3Mzd6bS0yMy4xODczMyAyMC40Mzk2NWMuNTI1MDQgMCAuOTUwNjcuNDIxLjk1MDY3Ljk0MDNzLS40MjU2My45NDAzLS45NTA2Ny45NDAzYy0uNTI1MDQxIDAtLjk1MDY3LS40MjEtLjk1MDY3LS45NDAzcy40MjU2MjktLjk0MDMuOTUwNjctLjk0MDN6bTQ3LjY3OTczLS45NTQ3Yy41MjUgMCAuOTUwNy40MjEuOTUwNy45NDAzcy0uNDI1Ny45NDAyLS45NTA3Ljk0MDItLjk1MDctLjQyMDktLjk1MDctLjk0MDIuNDI1Ny0uOTQwMy45NTA3LS45NDAzem0tMjQuNjI5Ni0yMi40Nzk3Yy41MjUgMCAuOTUwNi40MjA5NzMuOTUwNi45NDAyNyAwIC41MTkzLS40MjU2Ljk0MDI3LS45NTA2Ljk0MDI3LS41MjUxIDAtLjk1MDctLjQyMDk3LS45NTA3LS45NDAyNyAwLS41MTkyOTcuNDI1Ni0uOTQwMjcuOTUwNy0uOTQwMjd6IiBmaWxsPSJ1cmwoI2IpIi8+PHBhdGggZD0ibTI0LjU3MSAzMi43NzkyYzQuOTU5NiAwIDguOTgwMi0zLjk3NjUgOC45ODAyLTguODgxOSAwLTQuOTA1My00LjAyMDYtOC44ODE5LTguOTgwMi04Ljg4MTlzLTguOTgwMiAzLjk3NjYtOC45ODAyIDguODgxOWMwIDQuOTA1NCA0LjAyMDYgOC44ODE5IDguOTgwMiA4Ljg4MTl6IiBmaWxsPSJ1cmwoI2MpIi8+PC9zdmc+", this.supportedTransactionVersions = /* @__PURE__ */ new Set(["legacy", 0]), this._readyState = typeof window > "u" || typeof document > "u" ? Me.Unsupported : Me.Loadable, this._disconnected = () => {
      const t = this._wallet;
      t && (t.off("disconnect", this._disconnected), this._wallet = null, this._publicKey = null, this.emit("error", new ba()), this.emit("disconnect"));
    }, this._connecting = !1, this._publicKey = null, this._wallet = null, this._config = e, this._readyState !== Me.Unsupported && io(() => {
      var t;
      return ((t = window.solflare) == null ? void 0 : t.isSolflare) || window.SolflareApp ? (this._readyState = Me.Installed, this.emit("readyStateChange", this._readyState), !0) : !1;
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
      if (this._readyState !== Me.Loadable && this._readyState !== Me.Installed)
        throw new ii();
      let e;
      try {
        e = (await import("./index.4e53b68b.js")).default;
      } catch (i) {
        throw new Pg(i == null ? void 0 : i.message, i);
      }
      let t;
      try {
        t = new e({ network: this._config.network });
      } catch (i) {
        throw new Fg(i == null ? void 0 : i.message, i);
      }
      if (this._connecting = !0, !t.connected)
        try {
          await t.connect();
        } catch (i) {
          throw new Hr(i == null ? void 0 : i.message, i);
        }
      if (!t.publicKey)
        throw new Hr();
      let r;
      try {
        r = new fe(t.publicKey.toBytes());
      } catch (i) {
        throw new jr(i == null ? void 0 : i.message, i);
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
        throw new ro(r == null ? void 0 : r.message, r);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
}
function yy({ children: n }) {
  const e = Ns.Mainnet, t = Yt(() => Lg(e), [e]), r = Yt(
    () => [
      new ay(),
      new oy(),
      new dy(),
      new gy({ network: e })
    ],
    [e]
  );
  return /* @__PURE__ */ D.createElement(Dg, {
    endpoint: t
  }, /* @__PURE__ */ D.createElement(Gg, {
    wallets: r,
    autoConnect: !0
  }, /* @__PURE__ */ D.createElement(Vg, null, n)));
}
function Ls(n) {
  this.message = n;
}
Ls.prototype = new Error(), Ls.prototype.name = "InvalidCharacterError";
var jc = typeof window < "u" && window.atob && window.atob.bind(window) || function(n) {
  var e = String(n).replace(/=+$/, "");
  if (e.length % 4 == 1)
    throw new Ls("'atob' failed: The string to be decoded is not correctly encoded.");
  for (var t, r, i = 0, o = 0, c = ""; r = e.charAt(o++); ~r && (t = i % 4 ? 64 * t + r : r, i++ % 4) ? c += String.fromCharCode(255 & t >> (-2 * i & 6)) : 0)
    r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);
  return c;
};
function wy(n) {
  var e = n.replace(/-/g, "+").replace(/_/g, "/");
  switch (e.length % 4) {
    case 0:
      break;
    case 2:
      e += "==";
      break;
    case 3:
      e += "=";
      break;
    default:
      throw "Illegal base64url string!";
  }
  try {
    return function(t) {
      return decodeURIComponent(jc(t).replace(/(.)/g, function(r, i) {
        var o = i.charCodeAt(0).toString(16).toUpperCase();
        return o.length < 2 && (o = "0" + o), "%" + o;
      }));
    }(e);
  } catch {
    return jc(e);
  }
}
function Pi(n) {
  this.message = n;
}
function Gc(n, e) {
  if (typeof n != "string")
    throw new Pi("Invalid token specified");
  var t = (e = e || {}).header === !0 ? 0 : 1;
  try {
    return JSON.parse(wy(n.split(".")[t]));
  } catch (r) {
    throw new Pi("Invalid token specified: " + r.message);
  }
}
Pi.prototype = new Error(), Pi.prototype.name = "InvalidTokenError";
function my(n, e) {
  var i;
  const [t, r] = _e(
    (i = Gc(n).wallets) == null ? void 0 : i[e]
  );
  return Dt(() => {
    var o;
    n || r(void 0), r((o = Gc(n).wallets) == null ? void 0 : o[e]);
  }, [n, e]), t;
}
const by = {
  ethereum: "ETH",
  solana: "SOL",
  polygon: "MATIC",
  avalanche: "AVAX",
  flow: "FLOW"
};
function Ay({
  projectData: n,
  appId: e,
  hasUser: t,
  token: r,
  logger: i
}) {
  var G;
  const [o, c] = _e(!1), [u, d] = _e(!1), [w, v] = _e(""), { setVisible: S } = ml(), { connected: T, publicKey: E, signMessage: _, disconnect: C } = pl(), U = mn(!1), P = mn(!1), z = my(r, n.chain);
  Dt(() => {
    v(Mo(z));
  }, [z]);
  const N = Yt(() => {
    var be, pe, ve, I, l;
    if (!(n != null && n.wallet))
      return [];
    const { wallet: q } = n;
    !z && ((be = n.userInfo) == null ? void 0 : be.walletAddress) && v(Mo((pe = n.userInfo) == null ? void 0 : pe.walletAddress));
    const le = [];
    if (q != null && q.isBalanceRequired) {
      const p = /* @__PURE__ */ D.createElement(D.Fragment, null, "Have at least", /* @__PURE__ */ D.createElement("strong", null, " " + q.balance + " " + by[n.chain] + " "), "in your wallet", /* @__PURE__ */ D.createElement(sn, {
        required: !q.isBalanceOptional
      }));
      le.push(p);
    }
    if (q != null && q.isTokenRequired) {
      const p = /* @__PURE__ */ D.createElement(D.Fragment, null, "Have at least", " ", /* @__PURE__ */ D.createElement("strong", null, /* @__PURE__ */ D.createElement("a", {
        href: (ve = q.token) == null ? void 0 : ve.url,
        target: "_blank",
        rel: "noreferrer"
      }, (I = q.token) == null ? void 0 : I.balance, " ", (l = q.token) == null ? void 0 : l.symbol)), " ", "in your wallet", /* @__PURE__ */ D.createElement(sn, {
        required: !q.isTokenOptional
      }));
      le.push(p);
    }
    if (q != null && q.isNftRequired) {
      const { nftCollection: p } = q, m = /* @__PURE__ */ D.createElement(D.Fragment, null, "Hold an NFT from", " ", /* @__PURE__ */ D.createElement("strong", null, /* @__PURE__ */ D.createElement("a", {
        href: p == null ? void 0 : p.url,
        target: "_blank",
        rel: "noreferrer"
      }, p == null ? void 0 : p.name)), /* @__PURE__ */ D.createElement(sn, {
        required: !q.isNftOptional
      }));
      le.push(m);
    }
    return le;
  }, [n, z]);
  Dt(() => {
    async function q() {
      var le;
      if (!(!P.current || ((le = n == null ? void 0 : n.userInfo) == null ? void 0 : le.walletAddress) || !T || !E || !_ || U.current))
        try {
          U.current = !0, c(!0);
          const be = E.toBase58(), { nonce: pe } = await Sl({ appId: e, address: be }), ve = new TextEncoder().encode(pe), I = ry.encode(await _(ve));
          await Il({
            address: be,
            signature: I,
            appId: e
          }), v(Mo(E.toString())), i == null || i.info("HypeDayReact: Wallet connected", "hype03", {
            address: E.toString(),
            projectId: n == null ? void 0 : n.id,
            chain: n == null ? void 0 : n.chain
          });
        } catch (be) {
          C(), be.message !== "User rejected the request." && be.name !== Et.name && (console.error("error", be), i == null || i.error("HypeDayReact: Error connecting wallet", "hype02", be));
        } finally {
          c(!1), U.current = !1, P.current = !1;
        }
    }
    q();
  }, [
    i,
    e,
    n,
    c,
    T,
    E,
    _,
    C
  ]);
  const F = () => {
    w || (S(!0), P.current = !0);
  }, O = () => {
    const le = new URLSearchParams(window.location.search).get("phantomApp");
    if (ys() && !le)
      return d(!0);
    F();
  }, W = async () => {
    try {
      const q = new URLSearchParams();
      q.append("phantomApp", "1"), q.append("ref", "hypeday");
      const le = "https://phantom.app/ul/browse/" + encodeURIComponent(window.location.href + "?" + q.toString());
      window.open(le, "_blank");
    } catch (q) {
      console.error(q);
    }
  };
  return ((G = n == null ? void 0 : n.wallet) == null ? void 0 : G.required) === !1 ? null : /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement(ou, {
    isOpen: u,
    onRequestClose: () => d(!1),
    title: "Open in Phantom Mobile App?"
  }, /* @__PURE__ */ D.createElement("button", {
    className: "hypeday-button hypeday-modal-button",
    onClick: W
  }, "Yes"), /* @__PURE__ */ D.createElement("button", {
    className: "hypeday-button hypeday-modal-button",
    onClick: () => {
      d(!1), F();
    }
  }, "Other ways to connect")), /* @__PURE__ */ D.createElement(Us, {
    title: "Wallet",
    onClick: O,
    info: N,
    isLoading: o,
    rightText: w,
    buttonDisabled: !t
  }));
}
function vy({
  projectData: n,
  appId: e,
  hasUser: t,
  token: r,
  logger: i
}) {
  return /* @__PURE__ */ D.createElement(yy, null, /* @__PURE__ */ D.createElement(Ay, {
    projectData: n,
    appId: e,
    hasUser: t,
    token: r,
    logger: i
  }));
}
const Ey = [
  "twitter01",
  "twitter02",
  "twitter03",
  "twitter06",
  "twitter10",
  "twitter20"
], xy = ["discord01", "discord05", "discord08"], Sy = {
  [wn.willOpen]: "Registration opening soon",
  [wn.alwaysOpen]: "Register",
  [wn.willClose]: "Register",
  [wn.closed]: "Registration is closed"
};
function Iy({
  projectData: n,
  appId: e,
  hasUser: t,
  inputRef: r,
  logger: i
}) {
  var z, N, F;
  const [o, c] = _e(!1), [u, d] = _e(""), [w, v] = _e(!1), { status: S } = Ds(), { twitterData: T, discordData: E, setTwitterData: _, setDiscordData: C } = zi();
  Dt(() => {
    var O;
    v(!!((O = n == null ? void 0 : n.userInfo) != null && O.registered));
  }, [n]);
  const U = async () => {
    var O;
    if (!(!e || !t || !(n != null && n.id) || w))
      try {
        d(""), c(!0);
        const { error: W } = await Bl({
          appId: e,
          projectId: n.id,
          customField: ((O = r == null ? void 0 : r.current) == null ? void 0 : O.value) || ""
        });
        if (W)
          return console.error("Register error", W), i == null || i.error("HypeDayReact: Error registering user", "hype06", W), Ey.includes(W.code) && _(void 0), xy.includes(W.code) && C(void 0), d(W.message);
        v(!0), i == null || i.info("HypeDayReact: User registered", "hype07", {
          projectId: n == null ? void 0 : n.id,
          chain: n == null ? void 0 : n.chain
        });
      } catch (W) {
        console.error(W), i == null || i.error("HypeDayReact: Error registering user", "hype08", W);
      } finally {
        c(!1);
      }
  }, P = o || S === wn.closed || S === wn.willOpen || !t || ((z = n == null ? void 0 : n.discord) == null ? void 0 : z.enabled) && !(E != null && E.username) || ((N = n == null ? void 0 : n.discord2) == null ? void 0 : N.enabled) && !(E != null && E.username) || ((F = n == null ? void 0 : n.twitter) == null ? void 0 : F.enabled) && !(T != null && T.username);
  return /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("button", {
    className: "hypeday-register-button",
    onClick: U,
    disabled: P
  }, o && /* @__PURE__ */ D.createElement("div", {
    className: "hypeday-spinner hypeday-btn-spinner"
  }), /* @__PURE__ */ D.createElement("span", {
    style: { visibility: o ? "hidden" : "initial" }
  }, w ? "Registered! \u{1F389}" : Sy[S])), !!u && /* @__PURE__ */ D.createElement("span", {
    className: "hypeday-register-error"
  }, u));
}
function By({
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
function My({
  appId: n,
  projectId: e,
  userToken: t,
  logger: r
}) {
  const [i, o] = _e(), [c, u] = _e(!0), [d, w] = _e(""), v = mn(null), { setData: S } = Ds(), { setDiscordData: T, setTwitterData: E } = zi(), _ = en(async () => {
    if (!e || !n) {
      console.error("HypeDayReact: projectId and appId props are required.");
      return;
    }
    u(!0), w(""), xl({ appId: n, projectId: e }).then((C) => {
      var U, P;
      o(C), S(C), T((U = C.userInfo) == null ? void 0 : U.discord), E((P = C.userInfo) == null ? void 0 : P.twitter);
    }).catch((C) => {
      r == null || r.error(
        "HypeDayReact: Error fetching project data",
        "hype01",
        C
      ), console.error("HypeDayReact: Error fetching project data", C), w(
        typeof C == "string" ? C : C.message || "Something went wrong. Please try again later."
      );
    }).finally(() => u(!1));
  }, [n, S, T, E, e, r]);
  return Dt(() => {
    El(t);
  }, [t]), Dt(() => {
    _();
  }, [_]), c ? /* @__PURE__ */ D.createElement("div", {
    className: "hypeday-wrapper",
    style: { display: "flex", justifyContent: "center" }
  }, /* @__PURE__ */ D.createElement("div", {
    className: "hypeday-spinner"
  })) : d || !i ? /* @__PURE__ */ D.createElement("div", {
    className: "hypeday-wrapper"
  }, /* @__PURE__ */ D.createElement("span", {
    className: "hypeday-error"
  }, d), /* @__PURE__ */ D.createElement("button", {
    className: "hypeday-button",
    onClick: _
  }, "Retry")) : /* @__PURE__ */ D.createElement("div", {
    className: "hypeday-wrapper"
  }, /* @__PURE__ */ D.createElement(Rl, null), /* @__PURE__ */ D.createElement(vy, {
    projectData: i,
    appId: n,
    hasUser: !!t,
    token: t,
    logger: r
  }), /* @__PURE__ */ D.createElement(Qf, {
    projectData: i,
    appId: n,
    hasUser: !!t,
    logger: r
  }), /* @__PURE__ */ D.createElement(_l, {
    projectData: i,
    appId: n,
    hasUser: !!t,
    logger: r
  }), /* @__PURE__ */ D.createElement(Cl, {
    projectData: i,
    ref: v
  }), /* @__PURE__ */ D.createElement(Iy, {
    projectData: i,
    appId: n,
    hasUser: !!t,
    logger: r,
    inputRef: v
  }), /* @__PURE__ */ D.createElement(By, {
    projectData: i
  }));
}
function ky(n) {
  return /* @__PURE__ */ D.createElement(Ml, null, /* @__PURE__ */ D.createElement(Tl, null, /* @__PURE__ */ D.createElement(My, {
    ...n
  })));
}
export {
  Qd as E,
  fe as P,
  ky as W,
  Pr as s,
  A0 as v
};
