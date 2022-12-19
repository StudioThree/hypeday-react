import a, { createContext as Ht, useState as H, useEffect as Oe, useMemo as Fe, useContext as Dt, useCallback as De, useRef as yt, memo as an } from "react";
import sn from "react-dom";
const oe = "http://localhost:5001/hype-testing/us-central1", Q = new Headers({
  "Content-Type": "application/json"
});
function Qe(e) {
  e ? Q.set("Authorization", `Bearer ${e}`) : Q.delete("Authorization");
}
function ln(e) {
  e ? Q.set("X-Api-Key", e) : Q.delete("X-Api-Key");
}
function ae(e) {
  return e.text().then((t) => {
    var r;
    if (t === "OK")
      return t;
    const n = t && JSON.parse(t);
    if (!e.ok) {
      e.status === 401 && (localStorage == null || localStorage.removeItem("hypeUserToken"));
      const o = ((r = n == null ? void 0 : n.error) == null ? void 0 : r.message) || e.statusText;
      return console.error(o), Promise.reject(o);
    }
    return n;
  });
}
function cn({
  appId: e,
  projectId: t
}) {
  const n = {
    method: "GET",
    headers: Q
  };
  return fetch(
    `${oe}/getProject?` + new URLSearchParams({
      appid: e,
      projectid: t
    }),
    n
  ).then(ae);
}
function un(e) {
  const t = {
    method: "POST",
    headers: Q,
    body: JSON.stringify(e)
  };
  return fetch(`${oe}/login`, t).then(ae);
}
function fn(e) {
  const t = {
    method: "POST",
    headers: Q,
    body: JSON.stringify(e)
  };
  return fetch(`${oe}/verify`, t).then(ae);
}
function dn(e) {
  const t = {
    method: "POST",
    headers: Q,
    body: JSON.stringify(e)
  };
  return fetch(`${oe}/addWallet`, t).then(ae);
}
function pn(e) {
  const t = {
    method: "POST",
    headers: Q,
    body: JSON.stringify(e)
  };
  return fetch(`${oe}/verifyWallet`, t).then(ae);
}
function mn(e) {
  const t = {
    method: "POST",
    headers: Q,
    body: JSON.stringify(e)
  };
  return fetch(`${oe}/loginWithEmail`, t).then(
    ae
  );
}
function yn(e) {
  const t = {
    method: "POST",
    headers: Q,
    body: JSON.stringify(e)
  };
  return fetch(`${oe}/verifyEmail`, t).then(ae);
}
function hn(e) {
  const t = {
    method: "POST",
    headers: Q,
    body: JSON.stringify(e)
  };
  return fetch(`${oe}/addNewEmail`, t).then(ae);
}
function vn(e) {
  const t = {
    method: "POST",
    headers: Q,
    body: JSON.stringify(e)
  };
  return fetch(`${oe}/verifyNewEmail`, t).then(
    ae
  );
}
function Bt({
  provider: e,
  appId: t,
  projectId: n,
  returnUrl: r
}) {
  const o = {
    method: "POST",
    headers: Q,
    body: JSON.stringify({
      appId: t,
      projectId: n,
      returnUrl: r
    })
  };
  return fetch(
    `${oe}/${e === "twitter" ? "t" : "d"}GetUrlForApp`,
    o
  ).then(ae);
}
function bn({
  appId: e,
  projectId: t,
  customField: n
}) {
  const r = {
    method: "POST",
    headers: Q,
    body: JSON.stringify({
      appId: e,
      projectId: t,
      customField: n
    })
  };
  return fetch(`${oe}/validateForAppProject`, r).then(
    ae
  );
}
function it(e) {
  this.message = e;
}
it.prototype = new Error(), it.prototype.name = "InvalidCharacterError";
var Ot = typeof window < "u" && window.atob && window.atob.bind(window) || function(e) {
  var t = String(e).replace(/=+$/, "");
  if (t.length % 4 == 1)
    throw new it("'atob' failed: The string to be decoded is not correctly encoded.");
  for (var n, r, o = 0, l = 0, y = ""; r = t.charAt(l++); ~r && (n = o % 4 ? 64 * n + r : r, o++ % 4) ? y += String.fromCharCode(255 & n >> (-2 * o & 6)) : 0)
    r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);
  return y;
};
function En(e) {
  var t = e.replace(/-/g, "+").replace(/_/g, "/");
  switch (t.length % 4) {
    case 0:
      break;
    case 2:
      t += "==";
      break;
    case 3:
      t += "=";
      break;
    default:
      throw "Illegal base64url string!";
  }
  try {
    return function(n) {
      return decodeURIComponent(Ot(n).replace(/(.)/g, function(r, o) {
        var l = o.charCodeAt(0).toString(16).toUpperCase();
        return l.length < 2 && (l = "0" + l), "%" + l;
      }));
    }(t);
  } catch {
    return Ot(t);
  }
}
function Be(e) {
  this.message = e;
}
function gn(e, t) {
  if (typeof e != "string")
    throw new Be("Invalid token specified");
  var n = (t = t || {}).header === !0 ? 0 : 1;
  try {
    return JSON.parse(En(e.split(".")[n]));
  } catch (r) {
    throw new Be("Invalid token specified: " + r.message);
  }
}
Be.prototype = new Error(), Be.prototype.name = "InvalidTokenError";
function Tt(e) {
  return e ? `${e.slice(0, 4)}...${e.slice(-4)}` : "";
}
function st() {
  return Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1;
}
function Ne(e) {
  const t = "Something went wrong. Please try again later.";
  return typeof e == "string" ? e : e != null && e.message ? e.message : t;
}
var pe = /* @__PURE__ */ ((e) => (e.willOpen = "willOpen", e.alwaysOpen = "alwaysOpen", e.willClose = "willClose", e.closed = "closed", e))(pe || {});
const Yt = Ht(
  {}
);
function wn({
  children: e
}) {
  const [t, n] = H(), [r, o] = H(
    "alwaysOpen"
  ), [l, y] = H();
  Oe(() => {
    var m, c, h, u, O, _, T, C;
    const E = Date.now(), v = (m = t == null ? void 0 : t.signupAccess) != null && m.isStartDateRequired ? new Date((c = t == null ? void 0 : t.signupAccess) == null ? void 0 : c.startDate).getTime() : null, d = (h = t == null ? void 0 : t.signupAccess) != null && h.isEndDateRequired ? new Date((u = t == null ? void 0 : t.signupAccess) == null ? void 0 : u.endDate).getTime() : null;
    if (!v && !d) {
      o("alwaysOpen");
      return;
    }
    if (v && v > E) {
      o("willOpen"), y((O = t == null ? void 0 : t.signupAccess) == null ? void 0 : O.startDate);
      let w = setTimeout(() => {
        var P;
        o(
          d ? "willClose" : "alwaysOpen"
        ), y((P = t == null ? void 0 : t.signupAccess) == null ? void 0 : P.endDate), d && (w = setTimeout(() => {
          var p;
          o("closed"), y((p = t == null ? void 0 : t.signupAccess) == null ? void 0 : p.endDate);
        }, d - Date.now()));
      }, v - E);
      return () => clearTimeout(w);
    }
    if (v && v < E) {
      if (d) {
        o("willClose"), y((_ = t == null ? void 0 : t.signupAccess) == null ? void 0 : _.endDate);
        const w = setTimeout(() => {
          o("closed");
        }, d - E);
        return () => clearTimeout(w);
      }
      o("alwaysOpen");
      return;
    }
    if (d && d > E) {
      o("willClose"), y((T = t == null ? void 0 : t.signupAccess) == null ? void 0 : T.endDate);
      const w = setTimeout(() => {
        var P;
        o("closed"), y((P = t == null ? void 0 : t.signupAccess) == null ? void 0 : P.endDate);
      }, d - E);
      return () => clearTimeout(w);
    }
    if (d && d < E) {
      o("closed"), y((C = t == null ? void 0 : t.signupAccess) == null ? void 0 : C.endDate);
      return;
    }
  }, [t]);
  const i = Fe(
    () => ({
      status: r,
      dateString: l,
      setData: n
    }),
    [r, l, n]
  );
  return /* @__PURE__ */ a.createElement(Yt.Provider, {
    value: i
  }, e);
}
function ht() {
  return Dt(Yt);
}
const Vt = Ht({});
function On({
  children: e,
  userToken: t,
  apiKey: n,
  appId: r,
  projectId: o,
  logger: l
}) {
  const [y, i] = H(!t), [E, v] = H(), [d, m] = H(!0), [c, h] = H(""), [u, O] = H(), [_, T] = H(), [C, w] = H(), [P, p] = H(), { setData: V } = ht();
  Oe(() => {
    var me;
    if (!E)
      return;
    const { userInfo: A } = E;
    if (O(A == null ? void 0 : A.discord), T(A == null ? void 0 : A.twitter), w(A == null ? void 0 : A.email), t) {
      const ce = (me = gn(t).wallets) == null ? void 0 : me[E.chain];
      p(Tt(ce));
    } else
      A != null && A.walletAddress && p(Tt(A == null ? void 0 : A.walletAddress));
  }, [E, t]), Oe(() => {
    if (t && Qe(t), n) {
      ln(n);
      const A = localStorage == null ? void 0 : localStorage.getItem("hypeUserToken");
      A && (i(!1), Qe(A));
    }
  }, [t, n]);
  const X = De(async () => {
    m(!0), h(""), cn({ appId: r, projectId: o }).then((A) => {
      v(A), V(A);
    }).catch((A) => {
      l == null || l.error(
        "HypeDayReact: Error fetching project data",
        "hype01",
        A
      ), console.error("HypeDayReact: Error fetching project data", A), h(
        typeof A == "string" ? A : A.message || "Something went wrong. Please try again later."
      );
    }).finally(() => m(!1));
  }, [r, o, l, V]);
  Oe(() => {
    X();
  }, [X]);
  const le = De((A) => {
    i(!1), localStorage == null || localStorage.setItem("hypeUserToken", A), Qe(A);
  }, []), ee = Fe(
    () => ({
      discordData: u,
      twitterData: _,
      email: C,
      userToken: t,
      apiKey: n,
      project: E,
      isProjectLoading: d,
      projectError: c,
      shouldLogin: y,
      walletAddr: P,
      fetchProjectData: X,
      setDiscordData: O,
      setTwitterData: T,
      setEmail: w,
      setShouldLogin: i,
      setWalletAddr: p,
      setUserToken: le
    }),
    [
      u,
      _,
      C,
      t,
      n,
      E,
      d,
      c,
      y,
      P,
      X,
      p,
      le
    ]
  );
  return /* @__PURE__ */ a.createElement(Vt.Provider, {
    value: ee
  }, e);
}
function be() {
  return Dt(Vt);
}
function ne({ required: e }) {
  return e ? /* @__PURE__ */ a.createElement("span", {
    title: "Required"
  }, " *") : null;
}
function Ge({
  title: e,
  rightText: t,
  buttonDisabled: n = !1,
  onClick: r,
  info: o,
  isLoading: l = !1,
  showButton: y = !0,
  errorMessage: i,
  style: E
}) {
  return /* @__PURE__ */ a.createElement("section", {
    className: "hypeday-section",
    style: E
  }, /* @__PURE__ */ a.createElement("header", {
    className: "hypeday-section-header"
  }, /* @__PURE__ */ a.createElement("h3", {
    className: "hypeday-h3"
  }, e), y && /* @__PURE__ */ a.createElement("button", {
    className: "hypeday-button",
    onClick: r,
    disabled: l || n,
    title: n ? "Please login first" : void 0
  }, l && /* @__PURE__ */ a.createElement("div", {
    className: "hypeday-spinner hypeday-btn-spinner"
  }), /* @__PURE__ */ a.createElement("span", {
    style: { visibility: l ? "hidden" : "initial" }
  }, t || "Connect"))), !!i && /* @__PURE__ */ a.createElement("span", {
    className: "hypeday-error"
  }, i), o.map((v, d) => /* @__PURE__ */ a.createElement("span", {
    key: d,
    className: "hypeday-info"
  }, v)));
}
function Tn({
  projectData: e,
  appId: t,
  logger: n
}) {
  var m, c;
  const [r, o] = H(!1), [l, y] = H(""), { discordData: i, shouldLogin: E } = be(), v = Fe(() => {
    var T, C;
    if (!((T = e == null ? void 0 : e.discord) != null && T.enabled) && !((C = e == null ? void 0 : e.discord2) != null && C.enabled))
      return [];
    const { discord: h, discord2: u } = e, O = [];
    h != null && h.enabled && O.push(h), u != null && u.enabled && O.push(u);
    const _ = [];
    return O.forEach((w) => {
      var P;
      if (w.isServerRequired) {
        const p = /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("div", {
          className: "hypeday-req-list-item"
        }, /* @__PURE__ */ a.createElement("div", null, "Join the", " ", /* @__PURE__ */ a.createElement("a", {
          href: w == null ? void 0 : w.serverLink,
          target: "_blank",
          rel: "noreferrer"
        }, /* @__PURE__ */ a.createElement("strong", null, w == null ? void 0 : w.serverDisplayName)), " ", "server on Discord", /* @__PURE__ */ a.createElement(ne, {
          required: !(h != null && h.isServerOptional)
        })), /* @__PURE__ */ a.createElement("a", {
          className: "hypeday-button-gray hypeday-discord-req-action-button",
          href: (w == null ? void 0 : w.serverLink) || "/",
          target: "_blank",
          rel: "noreferrer"
        }, /* @__PURE__ */ a.createElement("span", null, "Join"))));
        _.push(p);
      }
      if (w.isShouldJoinBeforeRequired) {
        const p = /* @__PURE__ */ a.createElement(a.Fragment, null, "before", " ", /* @__PURE__ */ a.createElement("strong", null, new Date((w == null ? void 0 : w.shouldJoinBefore) || "").toLocaleDateString()), /* @__PURE__ */ a.createElement(ne, {
          required: !(h != null && h.isShouldJoinBeforeOptional)
        }));
        _.push(p);
      }
      if (w.isRoleRequired) {
        const p = /* @__PURE__ */ a.createElement(a.Fragment, null, 'and have the "', (P = w == null ? void 0 : w.roleDisplayNames) == null ? void 0 : P.join(", "), '" role(s)', /* @__PURE__ */ a.createElement(ne, {
          required: !(h != null && h.isRoleOptional)
        }));
        _.push(p);
      }
    }), _;
  }, [e]), d = async () => {
    if (!(!t || !(e != null && e.id)))
      try {
        o(!0);
        const { url: h } = await Bt({
          provider: "discord",
          appId: t,
          projectId: e.id,
          returnUrl: window.location.href
        });
        window.location.assign(h);
      } catch (h) {
        console.error(h), y(Ne(h)), n == null || n.error(
          "HypeDayReact: Error getting Discord oauth url",
          "hype05",
          h
        );
      } finally {
        o(!1);
      }
  };
  return !((m = e == null ? void 0 : e.discord) != null && m.enabled) && !((c = e == null ? void 0 : e.discord2) != null && c.enabled) ? null : /* @__PURE__ */ a.createElement(Ge, {
    title: "Discord",
    onClick: d,
    info: v,
    rightText: i == null ? void 0 : i.username,
    buttonDisabled: E,
    isLoading: r,
    errorMessage: l
  });
}
const Sn = a.forwardRef(function({
  projectData: t
}, n) {
  var o;
  if (!((o = t == null ? void 0 : t.customfield) != null && o.enabled))
    return null;
  const { customfield: r } = t;
  return /* @__PURE__ */ a.createElement("section", {
    className: "hypeday-section"
  }, /* @__PURE__ */ a.createElement("header", {
    className: "hypeday-section-header"
  }, /* @__PURE__ */ a.createElement("h3", {
    className: "hypeday-h3"
  }, "Open Response")), /* @__PURE__ */ a.createElement("span", {
    className: "hypeday-info"
  }, r.labels[0]), /* @__PURE__ */ a.createElement("input", {
    className: "hypeday-input",
    type: "text",
    placeholder: r.labels[0],
    ref: n
  }));
});
function St({
  dateString: e,
  message: t
}) {
  const [n, r] = H(!1), [o, l] = H(0), [y, i] = H(0), [E, v] = H(0), [d, m] = H(0);
  return Oe(() => {
    const c = new Date(e).getTime(), h = setInterval(() => {
      const u = new Date().getTime(), O = c - u, _ = Math.floor(O / (1e3 * 60 * 60 * 24)), T = Math.floor(
        O % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)
      ), C = Math.floor(O % (1e3 * 60 * 60) / (1e3 * 60)), w = Math.floor(O % (1e3 * 60) / 1e3);
      if (O <= 0) {
        clearInterval(h), r(!0), l(0), i(0), v(0), m(0);
        return;
      }
      l(_), i(T), v(C), m(w);
    }, 1e3);
    return () => clearInterval(h);
  }, [e]), !n && !o && !y && !E && !d ? /* @__PURE__ */ a.createElement("span", {
    style: { visibility: "hidden" }
  }, "Calculating..") : n ? /* @__PURE__ */ a.createElement(a.Fragment, null, t) : /* @__PURE__ */ a.createElement(a.Fragment, null, o > 0 && `${o} days, `, y > 0 && `${y} hours, `, E > 0 && `${E} minutes, `, d > 0 && `${d} seconds`);
}
function Ze({
  children: e,
  title: t
}) {
  return /* @__PURE__ */ a.createElement("section", {
    className: "hypeday-section"
  }, /* @__PURE__ */ a.createElement("header", {
    className: "hypeday-section-header"
  }, /* @__PURE__ */ a.createElement("h3", {
    className: "hypeday-h3"
  }, t)), /* @__PURE__ */ a.createElement("span", {
    className: "hypeday-info"
  }, e));
}
function Cn() {
  var n;
  const { status: e, dateString: t } = ht();
  return e === pe.closed ? /* @__PURE__ */ a.createElement(Ze, {
    title: "Registration is closed"
  }, "Registration is closed on", " ", (n = new Date(t)) == null ? void 0 : n.toUTCString(), ". Thank you for your interest.") : e === pe.willOpen ? /* @__PURE__ */ a.createElement(Ze, {
    title: "Registration starts in:"
  }, /* @__PURE__ */ a.createElement(St, {
    dateString: t,
    message: "Registration is open."
  })) : e === pe.willClose ? /* @__PURE__ */ a.createElement(Ze, {
    title: "Registration ends in:"
  }, /* @__PURE__ */ a.createElement(St, {
    dateString: t,
    message: "Registration is closed."
  })) : null;
}
var no = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _n(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Rn(e) {
  var t = e.default;
  if (typeof t == "function") {
    var n = function() {
      return t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var o = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var lt = { exports: {} }, z = { exports: {} }, J = z.exports = {}, fe, de;
function ct() {
  throw new Error("setTimeout has not been defined");
}
function ut() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? fe = setTimeout : fe = ct;
  } catch {
    fe = ct;
  }
  try {
    typeof clearTimeout == "function" ? de = clearTimeout : de = ut;
  } catch {
    de = ut;
  }
})();
function zt(e) {
  if (fe === setTimeout)
    return setTimeout(e, 0);
  if ((fe === ct || !fe) && setTimeout)
    return fe = setTimeout, setTimeout(e, 0);
  try {
    return fe(e, 0);
  } catch {
    try {
      return fe.call(null, e, 0);
    } catch {
      return fe.call(this, e, 0);
    }
  }
}
function Pn(e) {
  if (de === clearTimeout)
    return clearTimeout(e);
  if ((de === ut || !de) && clearTimeout)
    return de = clearTimeout, clearTimeout(e);
  try {
    return de(e);
  } catch {
    try {
      return de.call(null, e);
    } catch {
      return de.call(this, e);
    }
  }
}
var ye = [], Me = !1, we, He = -1;
function Mn() {
  !Me || !we || (Me = !1, we.length ? ye = we.concat(ye) : He = -1, ye.length && Jt());
}
function Jt() {
  if (!Me) {
    var e = zt(Mn);
    Me = !0;
    for (var t = ye.length; t; ) {
      for (we = ye, ye = []; ++He < t; )
        we && we[He].run();
      He = -1, t = ye.length;
    }
    we = null, Me = !1, Pn(e);
  }
}
J.nextTick = function(e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var n = 1; n < arguments.length; n++)
      t[n - 1] = arguments[n];
  ye.push(new Kt(e, t)), ye.length === 1 && !Me && zt(Jt);
};
function Kt(e, t) {
  this.fun = e, this.array = t;
}
Kt.prototype.run = function() {
  this.fun.apply(null, this.array);
};
J.title = "browser";
J.browser = !0;
J.env = {};
J.argv = [];
J.version = "";
J.versions = {};
function he() {
}
J.on = he;
J.addListener = he;
J.once = he;
J.off = he;
J.removeListener = he;
J.removeAllListeners = he;
J.emit = he;
J.prependListener = he;
J.prependOnceListener = he;
J.listeners = function(e) {
  return [];
};
J.binding = function(e) {
  throw new Error("process.binding is not supported");
};
J.cwd = function() {
  return "/";
};
J.chdir = function(e) {
  throw new Error("process.chdir is not supported");
};
J.umask = function() {
  return 0;
};
var _e = {}, Ye = { exports: {} }, je = { exports: {} }, D = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ct;
function Nn() {
  if (Ct)
    return D;
  Ct = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, l = e ? Symbol.for("react.profiler") : 60114, y = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, E = e ? Symbol.for("react.async_mode") : 60111, v = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, c = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, u = e ? Symbol.for("react.lazy") : 60116, O = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function w(p) {
    if (typeof p == "object" && p !== null) {
      var V = p.$$typeof;
      switch (V) {
        case t:
          switch (p = p.type, p) {
            case E:
            case v:
            case r:
            case l:
            case o:
            case m:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case i:
                case d:
                case u:
                case h:
                case y:
                  return p;
                default:
                  return V;
              }
          }
        case n:
          return V;
      }
    }
  }
  function P(p) {
    return w(p) === v;
  }
  return D.AsyncMode = E, D.ConcurrentMode = v, D.ContextConsumer = i, D.ContextProvider = y, D.Element = t, D.ForwardRef = d, D.Fragment = r, D.Lazy = u, D.Memo = h, D.Portal = n, D.Profiler = l, D.StrictMode = o, D.Suspense = m, D.isAsyncMode = function(p) {
    return P(p) || w(p) === E;
  }, D.isConcurrentMode = P, D.isContextConsumer = function(p) {
    return w(p) === i;
  }, D.isContextProvider = function(p) {
    return w(p) === y;
  }, D.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === t;
  }, D.isForwardRef = function(p) {
    return w(p) === d;
  }, D.isFragment = function(p) {
    return w(p) === r;
  }, D.isLazy = function(p) {
    return w(p) === u;
  }, D.isMemo = function(p) {
    return w(p) === h;
  }, D.isPortal = function(p) {
    return w(p) === n;
  }, D.isProfiler = function(p) {
    return w(p) === l;
  }, D.isStrictMode = function(p) {
    return w(p) === o;
  }, D.isSuspense = function(p) {
    return w(p) === m;
  }, D.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === v || p === l || p === o || p === m || p === c || typeof p == "object" && p !== null && (p.$$typeof === u || p.$$typeof === h || p.$$typeof === y || p.$$typeof === i || p.$$typeof === d || p.$$typeof === _ || p.$$typeof === T || p.$$typeof === C || p.$$typeof === O);
  }, D.typeOf = w, D;
}
var B = {}, _t;
function An() {
  return _t || (_t = 1, z.exports.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, l = e ? Symbol.for("react.profiler") : 60114, y = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, E = e ? Symbol.for("react.async_mode") : 60111, v = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, c = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, u = e ? Symbol.for("react.lazy") : 60116, O = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function w(g) {
      return typeof g == "string" || typeof g == "function" || g === r || g === v || g === l || g === o || g === m || g === c || typeof g == "object" && g !== null && (g.$$typeof === u || g.$$typeof === h || g.$$typeof === y || g.$$typeof === i || g.$$typeof === d || g.$$typeof === _ || g.$$typeof === T || g.$$typeof === C || g.$$typeof === O);
    }
    function P(g) {
      if (typeof g == "object" && g !== null) {
        var ue = g.$$typeof;
        switch (ue) {
          case t:
            var Ue = g.type;
            switch (Ue) {
              case E:
              case v:
              case r:
              case l:
              case o:
              case m:
                return Ue;
              default:
                var wt = Ue && Ue.$$typeof;
                switch (wt) {
                  case i:
                  case d:
                  case u:
                  case h:
                  case y:
                    return wt;
                  default:
                    return ue;
                }
            }
          case n:
            return ue;
        }
      }
    }
    var p = E, V = v, X = i, le = y, ee = t, A = d, me = r, ce = u, Ee = h, R = n, M = l, $ = o, s = m, S = !1;
    function K(g) {
      return S || (S = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), f(g) || P(g) === E;
    }
    function f(g) {
      return P(g) === v;
    }
    function b(g) {
      return P(g) === i;
    }
    function q(g) {
      return P(g) === y;
    }
    function x(g) {
      return typeof g == "object" && g !== null && g.$$typeof === t;
    }
    function N(g) {
      return P(g) === d;
    }
    function I(g) {
      return P(g) === r;
    }
    function L(g) {
      return P(g) === u;
    }
    function F(g) {
      return P(g) === h;
    }
    function U(g) {
      return P(g) === n;
    }
    function Y(g) {
      return P(g) === l;
    }
    function W(g) {
      return P(g) === o;
    }
    function Z(g) {
      return P(g) === m;
    }
    B.AsyncMode = p, B.ConcurrentMode = V, B.ContextConsumer = X, B.ContextProvider = le, B.Element = ee, B.ForwardRef = A, B.Fragment = me, B.Lazy = ce, B.Memo = Ee, B.Portal = R, B.Profiler = M, B.StrictMode = $, B.Suspense = s, B.isAsyncMode = K, B.isConcurrentMode = f, B.isContextConsumer = b, B.isContextProvider = q, B.isElement = x, B.isForwardRef = N, B.isFragment = I, B.isLazy = L, B.isMemo = F, B.isPortal = U, B.isProfiler = Y, B.isStrictMode = W, B.isSuspense = Z, B.isValidElementType = w, B.typeOf = P;
  }()), B;
}
var Rt;
function Gt() {
  return Rt || (Rt = 1, function(e) {
    z.exports.env.NODE_ENV === "production" ? e.exports = Nn() : e.exports = An();
  }(je)), je.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var et, Pt;
function xn() {
  if (Pt)
    return et;
  Pt = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(l) {
    if (l == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(l);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var l = new String("abc");
      if (l[5] = "de", Object.getOwnPropertyNames(l)[0] === "5")
        return !1;
      for (var y = {}, i = 0; i < 10; i++)
        y["_" + String.fromCharCode(i)] = i;
      var E = Object.getOwnPropertyNames(y).map(function(d) {
        return y[d];
      });
      if (E.join("") !== "0123456789")
        return !1;
      var v = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        v[d] = d;
      }), Object.keys(Object.assign({}, v)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return et = o() ? Object.assign : function(l, y) {
    for (var i, E = r(l), v, d = 1; d < arguments.length; d++) {
      i = Object(arguments[d]);
      for (var m in i)
        t.call(i, m) && (E[m] = i[m]);
      if (e) {
        v = e(i);
        for (var c = 0; c < v.length; c++)
          n.call(i, v[c]) && (E[v[c]] = i[v[c]]);
      }
    }
    return E;
  }, et;
}
var tt, Mt;
function vt() {
  if (Mt)
    return tt;
  Mt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return tt = e, tt;
}
var nt, Nt;
function Xt() {
  return Nt || (Nt = 1, nt = Function.call.bind(Object.prototype.hasOwnProperty)), nt;
}
var rt, At;
function kn() {
  if (At)
    return rt;
  At = 1;
  var e = function() {
  };
  if (z.exports.env.NODE_ENV !== "production") {
    var t = vt(), n = {}, r = Xt();
    e = function(l) {
      var y = "Warning: " + l;
      typeof console < "u" && console.error(y);
      try {
        throw new Error(y);
      } catch {
      }
    };
  }
  function o(l, y, i, E, v) {
    if (z.exports.env.NODE_ENV !== "production") {
      for (var d in l)
        if (r(l, d)) {
          var m;
          try {
            if (typeof l[d] != "function") {
              var c = Error(
                (E || "React class") + ": " + i + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw c.name = "Invariant Violation", c;
            }
            m = l[d](y, d, E, i, null, t);
          } catch (u) {
            m = u;
          }
          if (m && !(m instanceof Error) && e(
            (E || "React class") + ": type specification of " + i + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in n)) {
            n[m.message] = !0;
            var h = v ? v() : "";
            e(
              "Failed " + i + " type: " + m.message + (h != null ? h : "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    z.exports.env.NODE_ENV !== "production" && (n = {});
  }, rt = o, rt;
}
var ot, xt;
function qn() {
  if (xt)
    return ot;
  xt = 1;
  var e = Gt(), t = xn(), n = vt(), r = Xt(), o = kn(), l = function() {
  };
  z.exports.env.NODE_ENV !== "production" && (l = function(i) {
    var E = "Warning: " + i;
    typeof console < "u" && console.error(E);
    try {
      throw new Error(E);
    } catch {
    }
  });
  function y() {
    return null;
  }
  return ot = function(i, E) {
    var v = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function m(f) {
      var b = f && (v && f[v] || f[d]);
      if (typeof b == "function")
        return b;
    }
    var c = "<<anonymous>>", h = {
      array: T("array"),
      bigint: T("bigint"),
      bool: T("boolean"),
      func: T("function"),
      number: T("number"),
      object: T("object"),
      string: T("string"),
      symbol: T("symbol"),
      any: C(),
      arrayOf: w,
      element: P(),
      elementType: p(),
      instanceOf: V,
      node: A(),
      objectOf: le,
      oneOf: X,
      oneOfType: ee,
      shape: ce,
      exact: Ee
    };
    function u(f, b) {
      return f === b ? f !== 0 || 1 / f === 1 / b : f !== f && b !== b;
    }
    function O(f, b) {
      this.message = f, this.data = b && typeof b == "object" ? b : {}, this.stack = "";
    }
    O.prototype = Error.prototype;
    function _(f) {
      if (z.exports.env.NODE_ENV !== "production")
        var b = {}, q = 0;
      function x(I, L, F, U, Y, W, Z) {
        if (U = U || c, W = W || F, Z !== n) {
          if (E) {
            var g = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw g.name = "Invariant Violation", g;
          } else if (z.exports.env.NODE_ENV !== "production" && typeof console < "u") {
            var ue = U + ":" + F;
            !b[ue] && q < 3 && (l(
              "You are manually calling a React.PropTypes validation function for the `" + W + "` prop on `" + U + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), b[ue] = !0, q++);
          }
        }
        return L[F] == null ? I ? L[F] === null ? new O("The " + Y + " `" + W + "` is marked as required " + ("in `" + U + "`, but its value is `null`.")) : new O("The " + Y + " `" + W + "` is marked as required in " + ("`" + U + "`, but its value is `undefined`.")) : null : f(L, F, U, Y, W);
      }
      var N = x.bind(null, !1);
      return N.isRequired = x.bind(null, !0), N;
    }
    function T(f) {
      function b(q, x, N, I, L, F) {
        var U = q[x], Y = $(U);
        if (Y !== f) {
          var W = s(U);
          return new O(
            "Invalid " + I + " `" + L + "` of type " + ("`" + W + "` supplied to `" + N + "`, expected ") + ("`" + f + "`."),
            { expectedType: f }
          );
        }
        return null;
      }
      return _(b);
    }
    function C() {
      return _(y);
    }
    function w(f) {
      function b(q, x, N, I, L) {
        if (typeof f != "function")
          return new O("Property `" + L + "` of component `" + N + "` has invalid PropType notation inside arrayOf.");
        var F = q[x];
        if (!Array.isArray(F)) {
          var U = $(F);
          return new O("Invalid " + I + " `" + L + "` of type " + ("`" + U + "` supplied to `" + N + "`, expected an array."));
        }
        for (var Y = 0; Y < F.length; Y++) {
          var W = f(F, Y, N, I, L + "[" + Y + "]", n);
          if (W instanceof Error)
            return W;
        }
        return null;
      }
      return _(b);
    }
    function P() {
      function f(b, q, x, N, I) {
        var L = b[q];
        if (!i(L)) {
          var F = $(L);
          return new O("Invalid " + N + " `" + I + "` of type " + ("`" + F + "` supplied to `" + x + "`, expected a single ReactElement."));
        }
        return null;
      }
      return _(f);
    }
    function p() {
      function f(b, q, x, N, I) {
        var L = b[q];
        if (!e.isValidElementType(L)) {
          var F = $(L);
          return new O("Invalid " + N + " `" + I + "` of type " + ("`" + F + "` supplied to `" + x + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return _(f);
    }
    function V(f) {
      function b(q, x, N, I, L) {
        if (!(q[x] instanceof f)) {
          var F = f.name || c, U = K(q[x]);
          return new O("Invalid " + I + " `" + L + "` of type " + ("`" + U + "` supplied to `" + N + "`, expected ") + ("instance of `" + F + "`."));
        }
        return null;
      }
      return _(b);
    }
    function X(f) {
      if (!Array.isArray(f))
        return z.exports.env.NODE_ENV !== "production" && (arguments.length > 1 ? l(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : l("Invalid argument supplied to oneOf, expected an array.")), y;
      function b(q, x, N, I, L) {
        for (var F = q[x], U = 0; U < f.length; U++)
          if (u(F, f[U]))
            return null;
        var Y = JSON.stringify(f, function(Z, g) {
          var ue = s(g);
          return ue === "symbol" ? String(g) : g;
        });
        return new O("Invalid " + I + " `" + L + "` of value `" + String(F) + "` " + ("supplied to `" + N + "`, expected one of " + Y + "."));
      }
      return _(b);
    }
    function le(f) {
      function b(q, x, N, I, L) {
        if (typeof f != "function")
          return new O("Property `" + L + "` of component `" + N + "` has invalid PropType notation inside objectOf.");
        var F = q[x], U = $(F);
        if (U !== "object")
          return new O("Invalid " + I + " `" + L + "` of type " + ("`" + U + "` supplied to `" + N + "`, expected an object."));
        for (var Y in F)
          if (r(F, Y)) {
            var W = f(F, Y, N, I, L + "." + Y, n);
            if (W instanceof Error)
              return W;
          }
        return null;
      }
      return _(b);
    }
    function ee(f) {
      if (!Array.isArray(f))
        return z.exports.env.NODE_ENV !== "production" && l("Invalid argument supplied to oneOfType, expected an instance of array."), y;
      for (var b = 0; b < f.length; b++) {
        var q = f[b];
        if (typeof q != "function")
          return l(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + S(q) + " at index " + b + "."
          ), y;
      }
      function x(N, I, L, F, U) {
        for (var Y = [], W = 0; W < f.length; W++) {
          var Z = f[W], g = Z(N, I, L, F, U, n);
          if (g == null)
            return null;
          g.data && r(g.data, "expectedType") && Y.push(g.data.expectedType);
        }
        var ue = Y.length > 0 ? ", expected one of type [" + Y.join(", ") + "]" : "";
        return new O("Invalid " + F + " `" + U + "` supplied to " + ("`" + L + "`" + ue + "."));
      }
      return _(x);
    }
    function A() {
      function f(b, q, x, N, I) {
        return R(b[q]) ? null : new O("Invalid " + N + " `" + I + "` supplied to " + ("`" + x + "`, expected a ReactNode."));
      }
      return _(f);
    }
    function me(f, b, q, x, N) {
      return new O(
        (f || "React class") + ": " + b + " type `" + q + "." + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + N + "`."
      );
    }
    function ce(f) {
      function b(q, x, N, I, L) {
        var F = q[x], U = $(F);
        if (U !== "object")
          return new O("Invalid " + I + " `" + L + "` of type `" + U + "` " + ("supplied to `" + N + "`, expected `object`."));
        for (var Y in f) {
          var W = f[Y];
          if (typeof W != "function")
            return me(N, I, L, Y, s(W));
          var Z = W(F, Y, N, I, L + "." + Y, n);
          if (Z)
            return Z;
        }
        return null;
      }
      return _(b);
    }
    function Ee(f) {
      function b(q, x, N, I, L) {
        var F = q[x], U = $(F);
        if (U !== "object")
          return new O("Invalid " + I + " `" + L + "` of type `" + U + "` " + ("supplied to `" + N + "`, expected `object`."));
        var Y = t({}, q[x], f);
        for (var W in Y) {
          var Z = f[W];
          if (r(f, W) && typeof Z != "function")
            return me(N, I, L, W, s(Z));
          if (!Z)
            return new O(
              "Invalid " + I + " `" + L + "` key `" + W + "` supplied to `" + N + "`.\nBad object: " + JSON.stringify(q[x], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(f), null, "  ")
            );
          var g = Z(F, W, N, I, L + "." + W, n);
          if (g)
            return g;
        }
        return null;
      }
      return _(b);
    }
    function R(f) {
      switch (typeof f) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !f;
        case "object":
          if (Array.isArray(f))
            return f.every(R);
          if (f === null || i(f))
            return !0;
          var b = m(f);
          if (b) {
            var q = b.call(f), x;
            if (b !== f.entries) {
              for (; !(x = q.next()).done; )
                if (!R(x.value))
                  return !1;
            } else
              for (; !(x = q.next()).done; ) {
                var N = x.value;
                if (N && !R(N[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function M(f, b) {
      return f === "symbol" ? !0 : b ? b["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && b instanceof Symbol : !1;
    }
    function $(f) {
      var b = typeof f;
      return Array.isArray(f) ? "array" : f instanceof RegExp ? "object" : M(b, f) ? "symbol" : b;
    }
    function s(f) {
      if (typeof f > "u" || f === null)
        return "" + f;
      var b = $(f);
      if (b === "object") {
        if (f instanceof Date)
          return "date";
        if (f instanceof RegExp)
          return "regexp";
      }
      return b;
    }
    function S(f) {
      var b = s(f);
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
    function K(f) {
      return !f.constructor || !f.constructor.name ? c : f.constructor.name;
    }
    return h.checkPropTypes = o, h.resetWarningCache = o.resetWarningCache, h.PropTypes = h, h;
  }, ot;
}
var at, kt;
function Ln() {
  if (kt)
    return at;
  kt = 1;
  var e = vt();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, at = function() {
    function r(y, i, E, v, d, m) {
      if (m !== e) {
        var c = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw c.name = "Invariant Violation", c;
      }
    }
    r.isRequired = r;
    function o() {
      return r;
    }
    var l = {
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
      checkPropTypes: n,
      resetWarningCache: t
    };
    return l.PropTypes = l, l;
  }, at;
}
if (z.exports.env.NODE_ENV !== "production") {
  var Fn = Gt(), In = !0;
  Ye.exports = qn()(Fn.isElement, In);
} else
  Ye.exports = Ln()();
var ft = { exports: {} }, ie = {}, Ve = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = d;
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
  var n = "none", r = "contents", o = /input|select|textarea|button|object|iframe/;
  function l(m, c) {
    return c.getPropertyValue("overflow") !== "visible" || m.scrollWidth <= 0 && m.scrollHeight <= 0;
  }
  function y(m) {
    var c = m.offsetWidth <= 0 && m.offsetHeight <= 0;
    if (c && !m.innerHTML)
      return !0;
    try {
      var h = window.getComputedStyle(m), u = h.getPropertyValue("display");
      return c ? u !== r && l(m, h) : u === n;
    } catch {
      return console.warn("Failed to inspect element style"), !1;
    }
  }
  function i(m) {
    for (var c = m, h = m.getRootNode && m.getRootNode(); c && c !== document.body; ) {
      if (h && c === h && (c = h.host.parentNode), y(c))
        return !1;
      c = c.parentNode;
    }
    return !0;
  }
  function E(m, c) {
    var h = m.nodeName.toLowerCase(), u = o.test(h) && !m.disabled || h === "a" && m.href || c;
    return u && i(m);
  }
  function v(m) {
    var c = m.getAttribute("tabindex");
    c === null && (c = void 0);
    var h = isNaN(c);
    return (h || c >= 0) && E(m, !h);
  }
  function d(m) {
    var c = [].slice.call(m.querySelectorAll("*"), 0).reduce(function(h, u) {
      return h.concat(u.shadowRoot ? d(u.shadowRoot) : [u]);
    }, []);
    return c.filter(v);
  }
  e.exports = t.default;
})(Ve, Ve.exports);
Object.defineProperty(ie, "__esModule", {
  value: !0
});
ie.resetState = Hn;
ie.log = Dn;
ie.handleBlur = qe;
ie.handleFocus = Le;
ie.markForFocusLater = Bn;
ie.returnFocus = Yn;
ie.popWithoutFocus = Vn;
ie.setupScopedFocus = zn;
ie.teardownScopedFocus = Jn;
var Un = Ve.exports, Wn = $n(Un);
function $n(e) {
  return e && e.__esModule ? e : { default: e };
}
var Re = [], Pe = null, dt = !1;
function Hn() {
  Re = [];
}
function Dn() {
  z.exports.env.NODE_ENV !== "production" && (console.log("focusManager ----------"), Re.forEach(function(e) {
    var t = e || {};
    console.log(t.nodeName, t.className, t.id);
  }), console.log("end focusManager ----------"));
}
function qe() {
  dt = !0;
}
function Le() {
  if (dt) {
    if (dt = !1, !Pe)
      return;
    setTimeout(function() {
      if (!Pe.contains(document.activeElement)) {
        var e = (0, Wn.default)(Pe)[0] || Pe;
        e.focus();
      }
    }, 0);
  }
}
function Bn() {
  Re.push(document.activeElement);
}
function Yn() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, t = null;
  try {
    Re.length !== 0 && (t = Re.pop(), t.focus({ preventScroll: e }));
    return;
  } catch {
    console.warn(["You tried to return focus to", t, "but it is not in the DOM anymore"].join(" "));
  }
}
function Vn() {
  Re.length > 0 && Re.pop();
}
function zn(e) {
  Pe = e, window.addEventListener ? (window.addEventListener("blur", qe, !1), document.addEventListener("focus", Le, !0)) : (window.attachEvent("onBlur", qe), document.attachEvent("onFocus", Le));
}
function Jn() {
  Pe = null, window.addEventListener ? (window.removeEventListener("blur", qe), document.removeEventListener("focus", Le)) : (window.detachEvent("onBlur", qe), document.detachEvent("onFocus", Le));
}
var pt = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = y;
  var n = Ve.exports, r = o(n);
  function o(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function l() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    return i.activeElement.shadowRoot ? l(i.activeElement.shadowRoot) : i.activeElement;
  }
  function y(i, E) {
    var v = (0, r.default)(i);
    if (!v.length) {
      E.preventDefault();
      return;
    }
    var d = void 0, m = E.shiftKey, c = v[0], h = v[v.length - 1], u = l();
    if (i === u) {
      if (!m)
        return;
      d = h;
    }
    if (h === u && !m && (d = c), c === u && m && (d = h), d) {
      E.preventDefault(), d.focus();
      return;
    }
    var O = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent), _ = O != null && O[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;
    if (!!_) {
      var T = v.indexOf(u);
      if (T > -1 && (T += m ? -1 : 1), d = v[T], typeof d > "u") {
        E.preventDefault(), d = m ? h : c, d.focus();
        return;
      }
      E.preventDefault(), d.focus();
    }
  }
  e.exports = t.default;
})(pt, pt.exports);
var se = {}, Kn = z.exports.env.NODE_ENV !== "production", Qt = function() {
};
if (Kn) {
  var Gn = function(t, n) {
    var r = arguments.length;
    n = new Array(r > 1 ? r - 1 : 0);
    for (var o = 1; o < r; o++)
      n[o - 1] = arguments[o];
    var l = 0, y = "Warning: " + t.replace(/%s/g, function() {
      return n[l++];
    });
    typeof console < "u" && console.error(y);
    try {
      throw new Error(y);
    } catch {
    }
  };
  Qt = function(e, t, n) {
    var r = arguments.length;
    n = new Array(r > 2 ? r - 2 : 0);
    for (var o = 2; o < r; o++)
      n[o - 2] = arguments[o];
    if (t === void 0)
      throw new Error(
        "`warning(condition, format, ...args)` requires a warning message argument"
      );
    e || Gn.apply(null, [t].concat(n));
  };
}
var Xn = Qt, re = {}, Zt = { exports: {} };
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
(function(e) {
  (function() {
    var t = !!(typeof window < "u" && window.document && window.document.createElement), n = {
      canUseDOM: t,
      canUseWorkers: typeof Worker < "u",
      canUseEventListeners: t && !!(window.addEventListener || window.attachEvent),
      canUseViewport: t && !!window.screen
    };
    e.exports ? e.exports = n : window.ExecutionEnvironment = n;
  })();
})(Zt);
Object.defineProperty(re, "__esModule", {
  value: !0
});
re.canUseDOM = re.SafeNodeList = re.SafeHTMLCollection = void 0;
var Qn = Zt.exports, Zn = jn(Qn);
function jn(e) {
  return e && e.__esModule ? e : { default: e };
}
var Xe = Zn.default, er = Xe.canUseDOM ? window.HTMLElement : {};
re.SafeHTMLCollection = Xe.canUseDOM ? window.HTMLCollection : {};
re.SafeNodeList = Xe.canUseDOM ? window.NodeList : {};
re.canUseDOM = Xe.canUseDOM;
re.default = er;
Object.defineProperty(se, "__esModule", {
  value: !0
});
se.resetState = ar;
se.log = ir;
se.assertNodeList = jt;
se.setElement = sr;
se.validateElement = bt;
se.hide = lr;
se.show = cr;
se.documentNotReadyOrSSRTesting = ur;
var tr = Xn, nr = or(tr), rr = re;
function or(e) {
  return e && e.__esModule ? e : { default: e };
}
var j = null;
function ar() {
  j && (j.removeAttribute ? j.removeAttribute("aria-hidden") : j.length != null ? j.forEach(function(e) {
    return e.removeAttribute("aria-hidden");
  }) : document.querySelectorAll(j).forEach(function(e) {
    return e.removeAttribute("aria-hidden");
  })), j = null;
}
function ir() {
  if (z.exports.env.NODE_ENV !== "production") {
    var e = j || {};
    console.log("ariaAppHider ----------"), console.log(e.nodeName, e.className, e.id), console.log("end ariaAppHider ----------");
  }
}
function jt(e, t) {
  if (!e || !e.length)
    throw new Error("react-modal: No elements were found for selector " + t + ".");
}
function sr(e) {
  var t = e;
  if (typeof t == "string" && rr.canUseDOM) {
    var n = document.querySelectorAll(t);
    jt(n, t), t = n;
  }
  return j = t || j, j;
}
function bt(e) {
  var t = e || j;
  return t ? Array.isArray(t) || t instanceof HTMLCollection || t instanceof NodeList ? t : [t] : ((0, nr.default)(!1, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" ")), []);
}
function lr(e) {
  var t = !0, n = !1, r = void 0;
  try {
    for (var o = bt(e)[Symbol.iterator](), l; !(t = (l = o.next()).done); t = !0) {
      var y = l.value;
      y.setAttribute("aria-hidden", "true");
    }
  } catch (i) {
    n = !0, r = i;
  } finally {
    try {
      !t && o.return && o.return();
    } finally {
      if (n)
        throw r;
    }
  }
}
function cr(e) {
  var t = !0, n = !1, r = void 0;
  try {
    for (var o = bt(e)[Symbol.iterator](), l; !(t = (l = o.next()).done); t = !0) {
      var y = l.value;
      y.removeAttribute("aria-hidden");
    }
  } catch (i) {
    n = !0, r = i;
  } finally {
    try {
      !t && o.return && o.return();
    } finally {
      if (n)
        throw r;
    }
  }
}
function ur() {
  j = null;
}
var Ae = {};
Object.defineProperty(Ae, "__esModule", {
  value: !0
});
Ae.resetState = fr;
Ae.log = dr;
var Te = {}, Se = {};
function qt(e, t) {
  e.classList.remove(t);
}
function fr() {
  var e = document.getElementsByTagName("html")[0];
  for (var t in Te)
    qt(e, Te[t]);
  var n = document.body;
  for (var r in Se)
    qt(n, Se[r]);
  Te = {}, Se = {};
}
function dr() {
  if (z.exports.env.NODE_ENV !== "production") {
    var e = document.getElementsByTagName("html")[0].className, t = `Show tracked classes:

`;
    t += "<html /> (" + e + `):
  `;
    for (var n in Te)
      t += "  " + n + " " + Te[n] + `
  `;
    e = document.body.className, t += `

doc.body (` + e + `):
  `;
    for (var r in Se)
      t += "  " + r + " " + Se[r] + `
  `;
    t += `
`, console.log(t);
  }
}
var pr = function(t, n) {
  return t[n] || (t[n] = 0), t[n] += 1, n;
}, mr = function(t, n) {
  return t[n] && (t[n] -= 1), n;
}, yr = function(t, n, r) {
  r.forEach(function(o) {
    pr(n, o), t.add(o);
  });
}, hr = function(t, n, r) {
  r.forEach(function(o) {
    mr(n, o), n[o] === 0 && t.remove(o);
  });
};
Ae.add = function(t, n) {
  return yr(t.classList, t.nodeName.toLowerCase() == "html" ? Te : Se, n.split(" "));
};
Ae.remove = function(t, n) {
  return hr(t.classList, t.nodeName.toLowerCase() == "html" ? Te : Se, n.split(" "));
};
var xe = {};
Object.defineProperty(xe, "__esModule", {
  value: !0
});
xe.log = br;
xe.resetState = Er;
function vr(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
var en = function e() {
  var t = this;
  vr(this, e), this.register = function(n) {
    if (t.openInstances.indexOf(n) !== -1) {
      z.exports.env.NODE_ENV !== "production" && console.warn("React-Modal: Cannot register modal instance that's already open");
      return;
    }
    t.openInstances.push(n), t.emit("register");
  }, this.deregister = function(n) {
    var r = t.openInstances.indexOf(n);
    if (r === -1) {
      z.exports.env.NODE_ENV !== "production" && console.warn("React-Modal: Unable to deregister " + n + " as it was never registered");
      return;
    }
    t.openInstances.splice(r, 1), t.emit("deregister");
  }, this.subscribe = function(n) {
    t.subscribers.push(n);
  }, this.emit = function(n) {
    t.subscribers.forEach(function(r) {
      return r(
        n,
        t.openInstances.slice()
      );
    });
  }, this.openInstances = [], this.subscribers = [];
}, ze = new en();
function br() {
  console.log("portalOpenInstances ----------"), console.log(ze.openInstances.length), ze.openInstances.forEach(function(e) {
    return console.log(e);
  }), console.log("end portalOpenInstances ----------");
}
function Er() {
  ze = new en();
}
xe.default = ze;
var Et = {};
Object.defineProperty(Et, "__esModule", {
  value: !0
});
Et.resetState = Tr;
Et.log = Sr;
var gr = xe, wr = Or(gr);
function Or(e) {
  return e && e.__esModule ? e : { default: e };
}
var G = void 0, te = void 0, Ce = [];
function Tr() {
  for (var e = [G, te], t = 0; t < e.length; t++) {
    var n = e[t];
    !n || n.parentNode && n.parentNode.removeChild(n);
  }
  G = te = null, Ce = [];
}
function Sr() {
  console.log("bodyTrap ----------"), console.log(Ce.length);
  for (var e = [G, te], t = 0; t < e.length; t++) {
    var n = e[t], r = n || {};
    console.log(r.nodeName, r.className, r.id);
  }
  console.log("edn bodyTrap ----------");
}
function Lt() {
  if (Ce.length === 0) {
    z.exports.env.NODE_ENV !== "production" && console.warn("React-Modal: Open instances > 0 expected");
    return;
  }
  Ce[Ce.length - 1].focusContent();
}
function Cr(e, t) {
  !G && !te && (G = document.createElement("div"), G.setAttribute("data-react-modal-body-trap", ""), G.style.position = "absolute", G.style.opacity = "0", G.setAttribute("tabindex", "0"), G.addEventListener("focus", Lt), te = G.cloneNode(), te.addEventListener("focus", Lt)), Ce = t, Ce.length > 0 ? (document.body.firstChild !== G && document.body.insertBefore(G, document.body.firstChild), document.body.lastChild !== te && document.body.appendChild(te)) : (G.parentElement && G.parentElement.removeChild(G), te.parentElement && te.parentElement.removeChild(te));
}
wr.default.subscribe(Cr);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = Object.assign || function(R) {
    for (var M = 1; M < arguments.length; M++) {
      var $ = arguments[M];
      for (var s in $)
        Object.prototype.hasOwnProperty.call($, s) && (R[s] = $[s]);
    }
    return R;
  }, r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(R) {
    return typeof R;
  } : function(R) {
    return R && typeof Symbol == "function" && R.constructor === Symbol && R !== Symbol.prototype ? "symbol" : typeof R;
  }, o = function() {
    function R(M, $) {
      for (var s = 0; s < $.length; s++) {
        var S = $[s];
        S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(M, S.key, S);
      }
    }
    return function(M, $, s) {
      return $ && R(M.prototype, $), s && R(M, s), M;
    };
  }(), l = a, y = Ye.exports, i = p(y), E = ie, v = P(E), d = pt.exports, m = p(d), c = se, h = P(c), u = Ae, O = P(u), _ = re, T = p(_), C = xe, w = p(C);
  function P(R) {
    if (R && R.__esModule)
      return R;
    var M = {};
    if (R != null)
      for (var $ in R)
        Object.prototype.hasOwnProperty.call(R, $) && (M[$] = R[$]);
    return M.default = R, M;
  }
  function p(R) {
    return R && R.__esModule ? R : { default: R };
  }
  function V(R, M) {
    if (!(R instanceof M))
      throw new TypeError("Cannot call a class as a function");
  }
  function X(R, M) {
    if (!R)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return M && (typeof M == "object" || typeof M == "function") ? M : R;
  }
  function le(R, M) {
    if (typeof M != "function" && M !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof M);
    R.prototype = Object.create(M && M.prototype, { constructor: { value: R, enumerable: !1, writable: !0, configurable: !0 } }), M && (Object.setPrototypeOf ? Object.setPrototypeOf(R, M) : R.__proto__ = M);
  }
  var ee = {
    overlay: "ReactModal__Overlay",
    content: "ReactModal__Content"
  }, A = function(M) {
    return M.code === "Tab" || M.keyCode === 9;
  }, me = function(M) {
    return M.code === "Escape" || M.keyCode === 27;
  }, ce = 0, Ee = function(R) {
    le(M, R);
    function M($) {
      V(this, M);
      var s = X(this, (M.__proto__ || Object.getPrototypeOf(M)).call(this, $));
      return s.setOverlayRef = function(S) {
        s.overlay = S, s.props.overlayRef && s.props.overlayRef(S);
      }, s.setContentRef = function(S) {
        s.content = S, s.props.contentRef && s.props.contentRef(S);
      }, s.afterClose = function() {
        var S = s.props, K = S.appElement, f = S.ariaHideApp, b = S.htmlOpenClassName, q = S.bodyOpenClassName, x = S.parentSelector, N = x && x().ownerDocument || document;
        q && O.remove(N.body, q), b && O.remove(N.getElementsByTagName("html")[0], b), f && ce > 0 && (ce -= 1, ce === 0 && h.show(K)), s.props.shouldFocusAfterRender && (s.props.shouldReturnFocusAfterClose ? (v.returnFocus(s.props.preventScroll), v.teardownScopedFocus()) : v.popWithoutFocus()), s.props.onAfterClose && s.props.onAfterClose(), w.default.deregister(s);
      }, s.open = function() {
        s.beforeOpen(), s.state.afterOpen && s.state.beforeClose ? (clearTimeout(s.closeTimer), s.setState({ beforeClose: !1 })) : (s.props.shouldFocusAfterRender && (v.setupScopedFocus(s.node), v.markForFocusLater()), s.setState({ isOpen: !0 }, function() {
          s.openAnimationFrame = requestAnimationFrame(function() {
            s.setState({ afterOpen: !0 }), s.props.isOpen && s.props.onAfterOpen && s.props.onAfterOpen({
              overlayEl: s.overlay,
              contentEl: s.content
            });
          });
        }));
      }, s.close = function() {
        s.props.closeTimeoutMS > 0 ? s.closeWithTimeout() : s.closeWithoutTimeout();
      }, s.focusContent = function() {
        return s.content && !s.contentHasFocus() && s.content.focus({ preventScroll: !0 });
      }, s.closeWithTimeout = function() {
        var S = Date.now() + s.props.closeTimeoutMS;
        s.setState({ beforeClose: !0, closesAt: S }, function() {
          s.closeTimer = setTimeout(s.closeWithoutTimeout, s.state.closesAt - Date.now());
        });
      }, s.closeWithoutTimeout = function() {
        s.setState({
          beforeClose: !1,
          isOpen: !1,
          afterOpen: !1,
          closesAt: null
        }, s.afterClose);
      }, s.handleKeyDown = function(S) {
        A(S) && (0, m.default)(s.content, S), s.props.shouldCloseOnEsc && me(S) && (S.stopPropagation(), s.requestClose(S));
      }, s.handleOverlayOnClick = function(S) {
        s.shouldClose === null && (s.shouldClose = !0), s.shouldClose && s.props.shouldCloseOnOverlayClick && (s.ownerHandlesClose() ? s.requestClose(S) : s.focusContent()), s.shouldClose = null;
      }, s.handleContentOnMouseUp = function() {
        s.shouldClose = !1;
      }, s.handleOverlayOnMouseDown = function(S) {
        !s.props.shouldCloseOnOverlayClick && S.target == s.overlay && S.preventDefault();
      }, s.handleContentOnClick = function() {
        s.shouldClose = !1;
      }, s.handleContentOnMouseDown = function() {
        s.shouldClose = !1;
      }, s.requestClose = function(S) {
        return s.ownerHandlesClose() && s.props.onRequestClose(S);
      }, s.ownerHandlesClose = function() {
        return s.props.onRequestClose;
      }, s.shouldBeClosed = function() {
        return !s.state.isOpen && !s.state.beforeClose;
      }, s.contentHasFocus = function() {
        return document.activeElement === s.content || s.content.contains(document.activeElement);
      }, s.buildClassName = function(S, K) {
        var f = (typeof K > "u" ? "undefined" : r(K)) === "object" ? K : {
          base: ee[S],
          afterOpen: ee[S] + "--after-open",
          beforeClose: ee[S] + "--before-close"
        }, b = f.base;
        return s.state.afterOpen && (b = b + " " + f.afterOpen), s.state.beforeClose && (b = b + " " + f.beforeClose), typeof K == "string" && K ? b + " " + K : b;
      }, s.attributesFromObject = function(S, K) {
        return Object.keys(K).reduce(function(f, b) {
          return f[S + "-" + b] = K[b], f;
        }, {});
      }, s.state = {
        afterOpen: !1,
        beforeClose: !1
      }, s.shouldClose = null, s.moveFromContentToOverlay = null, s;
    }
    return o(M, [{
      key: "componentDidMount",
      value: function() {
        this.props.isOpen && this.open();
      }
    }, {
      key: "componentDidUpdate",
      value: function(s, S) {
        z.exports.env.NODE_ENV !== "production" && (s.bodyOpenClassName !== this.props.bodyOpenClassName && console.warn('React-Modal: "bodyOpenClassName" prop has been modified. This may cause unexpected behavior when multiple modals are open.'), s.htmlOpenClassName !== this.props.htmlOpenClassName && console.warn('React-Modal: "htmlOpenClassName" prop has been modified. This may cause unexpected behavior when multiple modals are open.')), this.props.isOpen && !s.isOpen ? this.open() : !this.props.isOpen && s.isOpen && this.close(), this.props.shouldFocusAfterRender && this.state.isOpen && !S.isOpen && this.focusContent();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.state.isOpen && this.afterClose(), clearTimeout(this.closeTimer), cancelAnimationFrame(this.openAnimationFrame);
      }
    }, {
      key: "beforeOpen",
      value: function() {
        var s = this.props, S = s.appElement, K = s.ariaHideApp, f = s.htmlOpenClassName, b = s.bodyOpenClassName, q = s.parentSelector, x = q && q().ownerDocument || document;
        b && O.add(x.body, b), f && O.add(x.getElementsByTagName("html")[0], f), K && (ce += 1, h.hide(S)), w.default.register(this);
      }
    }, {
      key: "render",
      value: function() {
        var s = this.props, S = s.id, K = s.className, f = s.overlayClassName, b = s.defaultStyles, q = s.children, x = K ? {} : b.content, N = f ? {} : b.overlay;
        if (this.shouldBeClosed())
          return null;
        var I = {
          ref: this.setOverlayRef,
          className: this.buildClassName("overlay", f),
          style: n({}, N, this.props.style.overlay),
          onClick: this.handleOverlayOnClick,
          onMouseDown: this.handleOverlayOnMouseDown
        }, L = n({
          id: S,
          ref: this.setContentRef,
          style: n({}, x, this.props.style.content),
          className: this.buildClassName("content", K),
          tabIndex: "-1",
          onKeyDown: this.handleKeyDown,
          onMouseDown: this.handleContentOnMouseDown,
          onMouseUp: this.handleContentOnMouseUp,
          onClick: this.handleContentOnClick,
          role: this.props.role,
          "aria-label": this.props.contentLabel
        }, this.attributesFromObject("aria", n({ modal: !0 }, this.props.aria)), this.attributesFromObject("data", this.props.data || {}), {
          "data-testid": this.props.testId
        }), F = this.props.contentElement(L, q);
        return this.props.overlayElement(I, F);
      }
    }]), M;
  }(l.Component);
  Ee.defaultProps = {
    style: {
      overlay: {},
      content: {}
    },
    defaultStyles: {}
  }, Ee.propTypes = {
    isOpen: i.default.bool.isRequired,
    defaultStyles: i.default.shape({
      content: i.default.object,
      overlay: i.default.object
    }),
    style: i.default.shape({
      content: i.default.object,
      overlay: i.default.object
    }),
    className: i.default.oneOfType([i.default.string, i.default.object]),
    overlayClassName: i.default.oneOfType([i.default.string, i.default.object]),
    parentSelector: i.default.func,
    bodyOpenClassName: i.default.string,
    htmlOpenClassName: i.default.string,
    ariaHideApp: i.default.bool,
    appElement: i.default.oneOfType([i.default.instanceOf(T.default), i.default.instanceOf(_.SafeHTMLCollection), i.default.instanceOf(_.SafeNodeList), i.default.arrayOf(i.default.instanceOf(T.default))]),
    onAfterOpen: i.default.func,
    onAfterClose: i.default.func,
    onRequestClose: i.default.func,
    closeTimeoutMS: i.default.number,
    shouldFocusAfterRender: i.default.bool,
    shouldCloseOnOverlayClick: i.default.bool,
    shouldReturnFocusAfterClose: i.default.bool,
    preventScroll: i.default.bool,
    role: i.default.string,
    contentLabel: i.default.string,
    aria: i.default.object,
    data: i.default.object,
    children: i.default.node,
    shouldCloseOnEsc: i.default.bool,
    overlayRef: i.default.func,
    contentRef: i.default.func,
    id: i.default.string,
    overlayElement: i.default.func,
    contentElement: i.default.func,
    testId: i.default.string
  }, t.default = Ee, e.exports = t.default;
})(ft, ft.exports);
function tn() {
  var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
  e != null && this.setState(e);
}
function nn(e) {
  function t(n) {
    var r = this.constructor.getDerivedStateFromProps(e, n);
    return r != null ? r : null;
  }
  this.setState(t.bind(this));
}
function rn(e, t) {
  try {
    var n = this.props, r = this.state;
    this.props = e, this.state = t, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      n,
      r
    );
  } finally {
    this.props = n, this.state = r;
  }
}
tn.__suppressDeprecationWarning = !0;
nn.__suppressDeprecationWarning = !0;
rn.__suppressDeprecationWarning = !0;
function _r(e) {
  var t = e.prototype;
  if (!t || !t.isReactComponent)
    throw new Error("Can only polyfill class components");
  if (typeof e.getDerivedStateFromProps != "function" && typeof t.getSnapshotBeforeUpdate != "function")
    return e;
  var n = null, r = null, o = null;
  if (typeof t.componentWillMount == "function" ? n = "componentWillMount" : typeof t.UNSAFE_componentWillMount == "function" && (n = "UNSAFE_componentWillMount"), typeof t.componentWillReceiveProps == "function" ? r = "componentWillReceiveProps" : typeof t.UNSAFE_componentWillReceiveProps == "function" && (r = "UNSAFE_componentWillReceiveProps"), typeof t.componentWillUpdate == "function" ? o = "componentWillUpdate" : typeof t.UNSAFE_componentWillUpdate == "function" && (o = "UNSAFE_componentWillUpdate"), n !== null || r !== null || o !== null) {
    var l = e.displayName || e.name, y = typeof e.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
    throw Error(
      `Unsafe legacy lifecycles will not be called for components using new component APIs.

` + l + " uses " + y + " but also contains the following legacy lifecycles:" + (n !== null ? `
  ` + n : "") + (r !== null ? `
  ` + r : "") + (o !== null ? `
  ` + o : "") + `

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`
    );
  }
  if (typeof e.getDerivedStateFromProps == "function" && (t.componentWillMount = tn, t.componentWillReceiveProps = nn), typeof t.getSnapshotBeforeUpdate == "function") {
    if (typeof t.componentDidUpdate != "function")
      throw new Error(
        "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
      );
    t.componentWillUpdate = rn;
    var i = t.componentDidUpdate;
    t.componentDidUpdate = function(v, d, m) {
      var c = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : m;
      i.call(this, v, d, c);
    };
  }
  return e;
}
const Rr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  polyfill: _r
}, Symbol.toStringTag, { value: "Module" })), Pr = /* @__PURE__ */ Rn(Rr);
Object.defineProperty(_e, "__esModule", {
  value: !0
});
_e.bodyOpenClassName = _e.portalClassName = void 0;
var Ft = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
  }
  return e;
}, Mr = function() {
  function e(t, n) {
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
    }
  }
  return function(t, n, r) {
    return n && e(t.prototype, n), r && e(t, r), t;
  };
}(), on = a, Je = Ie(on), Nr = sn, Ke = Ie(Nr), Ar = Ye.exports, k = Ie(Ar), xr = ft.exports, It = Ie(xr), kr = se, qr = Fr(kr), ve = re, Ut = Ie(ve), Lr = Pr;
function Fr(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
  return t.default = e, t;
}
function Ie(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ir(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Wt(e, t) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function Ur(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}
var Wr = _e.portalClassName = "ReactModalPortal", $r = _e.bodyOpenClassName = "ReactModal__Body--open", ge = ve.canUseDOM && Ke.default.createPortal !== void 0, mt = function(t) {
  return document.createElement(t);
}, $t = function() {
  return ge ? Ke.default.createPortal : Ke.default.unstable_renderSubtreeIntoContainer;
};
function We(e) {
  return e();
}
var ke = function(e) {
  Ur(t, e);
  function t() {
    var n, r, o, l;
    Ir(this, t);
    for (var y = arguments.length, i = Array(y), E = 0; E < y; E++)
      i[E] = arguments[E];
    return l = (r = (o = Wt(this, (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(n, [this].concat(i))), o), o.removePortal = function() {
      !ge && Ke.default.unmountComponentAtNode(o.node);
      var v = We(o.props.parentSelector);
      v && v.contains(o.node) ? v.removeChild(o.node) : console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.');
    }, o.portalRef = function(v) {
      o.portal = v;
    }, o.renderPortal = function(v) {
      var d = $t(), m = d(o, Je.default.createElement(It.default, Ft({ defaultStyles: t.defaultStyles }, v)), o.node);
      o.portalRef(m);
    }, r), Wt(o, l);
  }
  return Mr(t, [{
    key: "componentDidMount",
    value: function() {
      if (!!ve.canUseDOM) {
        ge || (this.node = mt("div")), this.node.className = this.props.portalClassName;
        var r = We(this.props.parentSelector);
        r.appendChild(this.node), !ge && this.renderPortal(this.props);
      }
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function(r) {
      var o = We(r.parentSelector), l = We(this.props.parentSelector);
      return { prevParent: o, nextParent: l };
    }
  }, {
    key: "componentDidUpdate",
    value: function(r, o, l) {
      if (!!ve.canUseDOM) {
        var y = this.props, i = y.isOpen, E = y.portalClassName;
        r.portalClassName !== E && (this.node.className = E);
        var v = l.prevParent, d = l.nextParent;
        d !== v && (v.removeChild(this.node), d.appendChild(this.node)), !(!r.isOpen && !i) && !ge && this.renderPortal(this.props);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      if (!(!ve.canUseDOM || !this.node || !this.portal)) {
        var r = this.portal.state, o = Date.now(), l = r.isOpen && this.props.closeTimeoutMS && (r.closesAt || o + this.props.closeTimeoutMS);
        l ? (r.beforeClose || this.portal.closeWithTimeout(), setTimeout(this.removePortal, l - o)) : this.removePortal();
      }
    }
  }, {
    key: "render",
    value: function() {
      if (!ve.canUseDOM || !ge)
        return null;
      !this.node && ge && (this.node = mt("div"));
      var r = $t();
      return r(Je.default.createElement(It.default, Ft({
        ref: this.portalRef,
        defaultStyles: t.defaultStyles
      }, this.props)), this.node);
    }
  }], [{
    key: "setAppElement",
    value: function(r) {
      qr.setElement(r);
    }
  }]), t;
}(on.Component);
ke.propTypes = {
  isOpen: k.default.bool.isRequired,
  style: k.default.shape({
    content: k.default.object,
    overlay: k.default.object
  }),
  portalClassName: k.default.string,
  bodyOpenClassName: k.default.string,
  htmlOpenClassName: k.default.string,
  className: k.default.oneOfType([k.default.string, k.default.shape({
    base: k.default.string.isRequired,
    afterOpen: k.default.string.isRequired,
    beforeClose: k.default.string.isRequired
  })]),
  overlayClassName: k.default.oneOfType([k.default.string, k.default.shape({
    base: k.default.string.isRequired,
    afterOpen: k.default.string.isRequired,
    beforeClose: k.default.string.isRequired
  })]),
  appElement: k.default.oneOfType([k.default.instanceOf(Ut.default), k.default.instanceOf(ve.SafeHTMLCollection), k.default.instanceOf(ve.SafeNodeList), k.default.arrayOf(k.default.instanceOf(Ut.default))]),
  onAfterOpen: k.default.func,
  onRequestClose: k.default.func,
  closeTimeoutMS: k.default.number,
  ariaHideApp: k.default.bool,
  shouldFocusAfterRender: k.default.bool,
  shouldCloseOnOverlayClick: k.default.bool,
  shouldReturnFocusAfterClose: k.default.bool,
  preventScroll: k.default.bool,
  parentSelector: k.default.func,
  aria: k.default.object,
  data: k.default.object,
  role: k.default.string,
  contentLabel: k.default.string,
  shouldCloseOnEsc: k.default.bool,
  overlayRef: k.default.func,
  contentRef: k.default.func,
  id: k.default.string,
  overlayElement: k.default.func,
  contentElement: k.default.func
};
ke.defaultProps = {
  isOpen: !1,
  portalClassName: Wr,
  bodyOpenClassName: $r,
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
  overlayElement: function(t, n) {
    return Je.default.createElement(
      "div",
      t,
      n
    );
  },
  contentElement: function(t, n) {
    return Je.default.createElement(
      "div",
      t,
      n
    );
  }
};
ke.defaultStyles = {
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
(0, Lr.polyfill)(ke);
z.exports.env.NODE_ENV !== "production" && (ke.setCreateHTMLElement = function(e) {
  return mt = e;
});
_e.default = ke;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = _e, r = o(n);
  function o(l) {
    return l && l.__esModule ? l : { default: l };
  }
  t.default = r.default, e.exports = t.default;
})(lt, lt.exports);
const Hr = /* @__PURE__ */ _n(lt.exports);
function gt({
  isOpen: e,
  onRequestClose: t,
  title: n,
  children: r
}) {
  return /* @__PURE__ */ a.createElement(Hr, {
    appElement: document.body,
    isOpen: e,
    onRequestClose: t,
    contentLabel: "Open in Phantom Mobile App Modal",
    overlayClassName: "hypeday-modal-overlay",
    className: "hypeday-modal-content"
  }, n && /* @__PURE__ */ a.createElement("h3", {
    className: "hypeday-h3"
  }, n), /* @__PURE__ */ a.createElement("div", {
    className: "hypeday-modal-close",
    onClick: t
  }, "\xD7"), r);
}
function Dr({
  projectData: e,
  appId: t,
  logger: n
}) {
  var h;
  const [r, o] = H(!1), [l, y] = H(!1), [i, E] = H(""), { twitterData: v, shouldLogin: d } = be(), m = Fe(() => {
    var _, T;
    if (!((_ = e == null ? void 0 : e.twitter) != null && _.enabled))
      return [];
    const { twitter: u } = e, O = [];
    if (u != null && u.isFollowRequired) {
      const C = (T = u == null ? void 0 : u.follow) == null ? void 0 : T.split(","), w = /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("ul", {
        className: "hypeday-req-list"
      }, C == null ? void 0 : C.map((P) => /* @__PURE__ */ a.createElement("li", {
        key: P,
        className: "hypeday-req-list-item"
      }, /* @__PURE__ */ a.createElement("span", null, "Follow ", /* @__PURE__ */ a.createElement("strong", null, "@", P), " on Twitter", /* @__PURE__ */ a.createElement(ne, {
        required: !u.isFollowOptional
      })), /* @__PURE__ */ a.createElement("a", {
        href: `https://twitter.com/${P.trim()}`,
        target: "_blank",
        rel: "noreferrer",
        className: "hypeday-button-gray"
      }, "Follow")))));
      O.push(w);
    }
    if (u != null && u.isRetweetRequired) {
      const C = /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("div", {
        className: "hypeday-req-list-item"
      }, /* @__PURE__ */ a.createElement("div", null, "Retweet", " ", /* @__PURE__ */ a.createElement("a", {
        href: u.retweetUrl,
        className: "hypeday-a-text-decoration-none",
        target: "_blank",
        rel: "noreferrer"
      }, /* @__PURE__ */ a.createElement("strong", null, "this")), " ", "on Twitter", /* @__PURE__ */ a.createElement(ne, {
        required: !u.isRetweetOptional
      })), /* @__PURE__ */ a.createElement("a", {
        href: u.retweetUrl,
        target: "_blank",
        rel: "noreferrer",
        className: "hypeday-button-gray"
      }, "Retweet")));
      O.push(C);
    }
    if (u != null && u.isLikeRequired) {
      const C = /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("div", {
        className: "hypeday-req-list-item"
      }, /* @__PURE__ */ a.createElement("div", null, "Like", " ", /* @__PURE__ */ a.createElement("a", {
        href: u.likeUrl,
        className: "hypeday-a-text-decoration-none",
        target: "_blank",
        rel: "noreferrer"
      }, /* @__PURE__ */ a.createElement("strong", null, "this")), " ", "on Twitter", /* @__PURE__ */ a.createElement(ne, {
        required: !u.isLikeOptional
      })), /* @__PURE__ */ a.createElement("a", {
        href: u.likeUrl,
        target: "_blank",
        rel: "noreferrer",
        className: "hypeday-button-gray"
      }, "Like")));
      O.push(C);
    }
    if (u != null && u.isAccountCreatedRequired) {
      const C = /* @__PURE__ */ a.createElement(a.Fragment, null, "Have an account created before", " ", /* @__PURE__ */ a.createElement("strong", null, new Date((u == null ? void 0 : u.accountCreated) || "").toLocaleDateString()), /* @__PURE__ */ a.createElement(ne, {
        required: !u.isAccountCreatedOptional
      }));
      O.push(C);
    }
    if (u != null && u.isMinFollowersRequired) {
      const C = /* @__PURE__ */ a.createElement(a.Fragment, null, "Have at least ", /* @__PURE__ */ a.createElement("b", null, u.minFollowers, " follower(s)"), /* @__PURE__ */ a.createElement(ne, {
        required: !u.isMinFollowersOptional
      }));
      O.push(C);
    }
    return O;
  }, [e]), c = async () => {
    if (!(!t || !(e != null && e.id)))
      try {
        o(!0);
        const { url: u } = await Bt({
          provider: "twitter",
          appId: t,
          projectId: e.id,
          returnUrl: window.location.href
        });
        st() && (window.open(u, "_blank"), window.open(u, "_blank")), window.location.assign(u);
      } catch (u) {
        console.error(u), E(Ne(u)), n == null || n.error(
          "HypeDayReact: Error getting Twitter oauth url",
          "hype04",
          u
        );
      } finally {
        o(!1);
      }
  };
  return (h = e == null ? void 0 : e.twitter) != null && h.enabled ? /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(gt, {
    isOpen: l,
    onRequestClose: () => y(!1)
  }, /* @__PURE__ */ a.createElement("p", {
    className: "hypeday-modal-p"
  }, "Next, you will be redirected to Twitter to complete the connection request. Please ignore the 'Open in the app' prompts and stay in the browser. Twitter app does not support establishing/authorizing connections in the app."), /* @__PURE__ */ a.createElement("button", {
    className: "hypeday-button hypeday-modal-button",
    onClick: () => {
      y(!1), c();
    }
  }, "Ok")), /* @__PURE__ */ a.createElement(Ge, {
    title: "Twitter",
    onClick: () => {
      if (st())
        return y(!0);
      c();
    },
    info: m,
    rightText: v == null ? void 0 : v.username,
    buttonDisabled: d,
    isLoading: r,
    errorMessage: i
  })) : null;
}
const $e = {
  ethereum: {
    chainId: "1",
    rpc: "https://rpc.builder0x69.io"
  },
  polygon: {
    chainId: "137",
    rpc: "https://polygon-rpc.com"
  },
  avalanche: {
    chainId: "43114",
    rpc: "https://api.avax.network/ext/bc/C/rpc"
  },
  klaytn: {
    chainId: "8217",
    rpc: "https://klaytn04.fandom.finance"
  }
};
function Br(e) {
  const [t, n] = H(!1), [r, o] = H(!1), l = yt("ethereum"), { shouldLogin: y, setUserToken: i, fetchProjectData: E } = be(), v = De(
    async (c = "ethereum") => {
      var h;
      try {
        n(!0);
        const [
          { default: u },
          { default: O },
          { default: _ },
          { Web3Provider: T }
        ] = await Promise.all([
          import("./index.d5921325.js").then((A) => A.i),
          import("./index.8826e032.js").then((A) => A.i),
          import("./index.3fb0da53.js").then((A) => A.i),
          import("./index.0e4aca51.js")
        ]), C = {
          walletconnect: {
            package: O,
            options: {
              rpc: {
                [$e[c].chainId]: $e[c].rpc
              }
            }
          },
          coinbasewallet: {
            package: _,
            options: {
              appName: "Hype.Day",
              rpc: $e[c].rpc,
              chainId: $e[c].chainId,
              darkMode: !1
            }
          }
        }, P = await new u({
          cacheProvider: !1,
          providerOptions: C
        }).connect(), V = new T(P).getSigner(), X = await V.getAddress(), { nonce: le } = await (y ? un({ appId: e, chain: c, address: X }) : dn({ appId: e, chain: c, address: X })), ee = await V.signMessage(le);
        if (y) {
          const { token: A } = await fn({
            appId: e,
            chain: c,
            address: X,
            signature: ee
          });
          i(A);
        } else
          await pn({
            address: X,
            signature: ee,
            chain: c,
            appId: e
          });
        E();
      } catch (u) {
        return u === "Modal closed by user" ? null : u instanceof Error && ([
          "User Rejected",
          "User closed modal",
          "MetaMask Personal Message Signature: User denied message signature.",
          "MetaMask Message Signature: User denied message signature.",
          "Modal closed by user",
          "User denied account authorization"
        ].includes((h = u.message) != null ? h : u) || u.message.includes("user rejected signing")) ? {
          error: new Error(
            "You need to accept signature request to connect your wallet."
          )
        } : (console.error(u), { error: u });
      } finally {
        n(!1);
      }
    },
    [e, y, i, E]
  );
  return {
    evmConnect: De(
      (c = "ethereum") => st() ? (l.current = c, o(!0)) : v(c),
      [v]
    ),
    evmLoading: t,
    evmElement: /* @__PURE__ */ a.createElement(gt, {
      isOpen: r,
      onRequestClose: () => o(!1)
    }, /* @__PURE__ */ a.createElement("p", {
      className: "hypeday-modal-p"
    }, "MetaMask mobile app users, please select WalletConnect in the next step. If it doesn't connect on your first try, please come back to this page and try connecting again. It sometimes takes couple tries to connect successfully."), /* @__PURE__ */ a.createElement("button", {
      className: "hypeday-button hypeday-modal-button",
      onClick: () => (o(!1), v(l.current))
    }, "Ok"))
  };
}
const Yr = {
  ethereum: "ETH",
  solana: "SOL",
  polygon: "MATIC",
  avalanche: "AVAX",
  flow: "FLOW"
};
function Vr({
  projectData: e,
  appId: t,
  logger: n
}) {
  var m;
  const [r, o] = H(""), { walletAddr: l } = be(), { evmConnect: y, evmLoading: i, evmElement: E } = Br(t), v = Fe(() => {
    var u, O, _;
    if (!(e != null && e.wallet))
      return [];
    const { wallet: c } = e, h = [];
    if (c != null && c.isBalanceRequired) {
      const T = /* @__PURE__ */ a.createElement(a.Fragment, null, "Have at least", /* @__PURE__ */ a.createElement("strong", null, " " + c.balance + " " + Yr[e.chain] + " "), "in your wallet", /* @__PURE__ */ a.createElement(ne, {
        required: !c.isBalanceOptional
      }));
      h.push(T);
    }
    if (c != null && c.isTokenRequired) {
      const T = /* @__PURE__ */ a.createElement(a.Fragment, null, "Have at least", " ", /* @__PURE__ */ a.createElement("strong", null, /* @__PURE__ */ a.createElement("a", {
        href: (u = c.token) == null ? void 0 : u.url,
        target: "_blank",
        rel: "noreferrer"
      }, (O = c.token) == null ? void 0 : O.balance, " ", (_ = c.token) == null ? void 0 : _.symbol)), " ", "in your wallet", /* @__PURE__ */ a.createElement(ne, {
        required: !c.isTokenOptional
      }));
      h.push(T);
    }
    if (c != null && c.isNftRequired) {
      const { nftCollection: T } = c, C = /* @__PURE__ */ a.createElement(a.Fragment, null, "Hold an NFT from", " ", /* @__PURE__ */ a.createElement("strong", null, /* @__PURE__ */ a.createElement("a", {
        href: T == null ? void 0 : T.url,
        target: "_blank",
        rel: "noreferrer"
      }, T == null ? void 0 : T.name)), /* @__PURE__ */ a.createElement(ne, {
        required: !c.isNftOptional
      }));
      h.push(C);
    }
    return h;
  }, [e]), d = async () => {
    o("");
    const c = await y(e.chain);
    c != null && c.error && (n == null || n.error(
      "HypeDayReact: Error connecting wallet",
      "hype02",
      c.error
    ), o(Ne(c.error))), n == null || n.info("HypeDayReact: Wallet connected", "hype03", {
      address: l,
      chain: e.chain
    });
  };
  return ((m = e == null ? void 0 : e.wallet) == null ? void 0 : m.required) === !1 ? null : /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(Ge, {
    title: "Wallet",
    onClick: d,
    info: v,
    isLoading: i,
    rightText: l,
    errorMessage: r
  }), E);
}
const zr = [
  "twitter01",
  "twitter02",
  "twitter03",
  "twitter06",
  "twitter10",
  "twitter20"
], Jr = ["discord01", "discord05", "discord08"], Kr = {
  [pe.willOpen]: "Registration opening soon",
  [pe.alwaysOpen]: "Register",
  [pe.willClose]: "Register",
  [pe.closed]: "Registration is closed"
};
function Gr({
  projectData: e,
  appId: t,
  inputRef: n,
  logger: r
}) {
  var C, w, P;
  const [o, l] = H(!1), [y, i] = H(""), [E, v] = H(!1), { status: d } = ht(), {
    twitterData: m,
    discordData: c,
    setTwitterData: h,
    setDiscordData: u,
    shouldLogin: O
  } = be();
  Oe(() => {
    var p;
    v(!!((p = e == null ? void 0 : e.userInfo) != null && p.registered));
  }, [e]);
  const _ = async () => {
    var p;
    if (!(!t || O || !(e != null && e.id) || E))
      try {
        i(""), l(!0);
        const { error: V } = await bn({
          appId: t,
          projectId: e.id,
          customField: ((p = n == null ? void 0 : n.current) == null ? void 0 : p.value) || ""
        });
        if (V)
          return console.error("Register error", V), r == null || r.error("HypeDayReact: Error registering user", "hype06", V), zr.includes(V.code) && h(void 0), Jr.includes(V.code) && u(void 0), i(V.message);
        v(!0), r == null || r.info("HypeDayReact: User registered", "hype07", {
          projectId: e == null ? void 0 : e.id,
          chain: e == null ? void 0 : e.chain
        });
      } catch (V) {
        console.error(V), r == null || r.error("HypeDayReact: Error registering user", "hype08", V), i(Ne(V));
      } finally {
        l(!1);
      }
  }, T = o || d === pe.closed || d === pe.willOpen || O || ((C = e == null ? void 0 : e.discord) == null ? void 0 : C.enabled) && !(c != null && c.username) || ((w = e == null ? void 0 : e.discord2) == null ? void 0 : w.enabled) && !(c != null && c.username) || ((P = e == null ? void 0 : e.twitter) == null ? void 0 : P.enabled) && !(m != null && m.username);
  return /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("button", {
    className: "hypeday-register-button",
    onClick: _,
    disabled: T
  }, o && /* @__PURE__ */ a.createElement("div", {
    className: "hypeday-spinner hypeday-btn-spinner"
  }), /* @__PURE__ */ a.createElement("span", {
    style: { visibility: o ? "hidden" : "initial" }
  }, E ? "Registered! \u{1F389}" : Kr[d])), !!y && /* @__PURE__ */ a.createElement("span", {
    className: "hypeday-register-error"
  }, y));
}
function Xr({
  projectData: e
}) {
  return /* @__PURE__ */ a.createElement("div", {
    style: {
      fontSize: "0.8em",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      paddingTop: 12
    }
  }, /* @__PURE__ */ a.createElement("span", null, /* @__PURE__ */ a.createElement("a", {
    href: "https://hype-day.notion.site/Terms-of-Service-fb34231cd00143fe891b7ea9136e74d3",
    target: "_blank",
    rel: "noreferrer",
    className: "hypeday-a-text-decoration-none"
  }, "ToS"), " ", "&", " ", /* @__PURE__ */ a.createElement("a", {
    href: "https://hype-day.notion.site/Privacy-Notice-c7e648566d564eb4831ef741768bec3b",
    target: "_blank",
    rel: "noreferrer",
    className: "hypeday-a-text-decoration-none"
  }, "Privacy Policy")), e != null && e.showLink ? /* @__PURE__ */ a.createElement("span", null, "Powered by", " ", /* @__PURE__ */ a.createElement("a", {
    href: "https://hype.day",
    target: "_blank",
    rel: "noreferrer",
    className: "hypeday-a-text-decoration-none"
  }, "Hype.Day")) : null);
}
function Qr({
  isOpen: e,
  onClose: t,
  setError: n,
  appId: r,
  logger: o
}) {
  const {
    email: l,
    setEmail: y,
    shouldLogin: i,
    fetchProjectData: E,
    setUserToken: v
  } = be(), [d, m] = H(!1), [c, h] = H("one"), u = yt(""), O = async (T) => {
    T.preventDefault();
    const C = T.currentTarget.email.value, w = T.currentTarget.emailPermission.checked;
    if (!!C) {
      if (l === C)
        return t();
      u.current = C;
      try {
        n(""), m(!0), await (i ? mn({ appId: r, email: C, emailPermission: w }) : hn({ appId: r, email: C, emailPermission: w })), o == null || o.info(
          "HypeDayReact: User requested email verification",
          "hype09",
          {
            email: C
          }
        ), h("two");
      } catch (P) {
        o == null || o.error(
          "HypeDayReact: Error requesting email verification",
          "hype10",
          { email: C }
        ), console.error(P), n(Ne(P));
      } finally {
        m(!1);
      }
    }
  }, _ = async (T) => {
    T.preventDefault();
    const C = T.currentTarget.otp.value;
    if (!!u.current)
      try {
        n(""), m(!0);
        const { token: w } = await (i ? yn({ appId: r, email: u.current, otp: C }) : vn({ appId: r, email: u.current, otp: C }));
        y(u.current), h("one"), t(), i && v(w), E(), o == null || o.info("HypeDayReact: User verified email address", "hype11", {
          email: u.current
        });
      } catch (w) {
        o == null || o.error("HypeDayReact: Error verifying email address", "hype12", {
          email: u.current
        }), console.error(w), n(Ne(w));
      } finally {
        m(!1);
      }
  };
  return /* @__PURE__ */ a.createElement(gt, {
    isOpen: e,
    onRequestClose: t,
    title: c === "one" ? "Enter Your Email Address" : "Enter Verification Code"
  }, /* @__PURE__ */ a.createElement("form", {
    onSubmit: c === "one" ? O : _
  }, c === "one" ? /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("input", {
    className: "hypeday-input",
    type: "email",
    name: "email",
    placeholder: "Your Email Address",
    disabled: d,
    defaultValue: l != null ? l : ""
  }), /* @__PURE__ */ a.createElement("div", {
    style: { marginTop: "16px" }
  }, /* @__PURE__ */ a.createElement("input", {
    type: "checkbox",
    id: "emailPermission",
    name: "emailPermission",
    defaultChecked: !0,
    disabled: d
  }), /* @__PURE__ */ a.createElement("label", {
    htmlFor: "emailPermission",
    className: "hypeday-info",
    style: { display: "inline-block", marginLeft: "8px" }
  }, "Send me high quality projects"))) : /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("p", null, "Please check your inbox and spam folder to verify your email address."), /* @__PURE__ */ a.createElement("input", {
    name: "otp",
    className: "hypeday-input",
    type: "input",
    pattern: "[0-9]{6}",
    maxLength: 6,
    placeholder: "6 Digit OTP Code",
    disabled: d
  })), /* @__PURE__ */ a.createElement("footer", {
    style: { display: "flex", flexDirection: "row" }
  }, /* @__PURE__ */ a.createElement("button", {
    type: "submit",
    className: "hypeday-button hypeday-modal-button",
    disabled: d,
    style: { display: "flex" }
  }, d && /* @__PURE__ */ a.createElement("div", {
    className: "hypeday-spinner hypeday-btn-spinner"
  }), /* @__PURE__ */ a.createElement("span", {
    style: { visibility: d ? "hidden" : "initial" }
  }, c === "one" ? "Request Verification Code" : "Verify")), /* @__PURE__ */ a.createElement("button", {
    className: "hypeday-button hypeday-modal-button hypeday-modal-button-gray",
    onClick: c === "one" ? t : () => h("one")
  }, c === "one" ? "Cancel" : "Go Back"))));
}
function Zr({
  projectData: e,
  appId: t,
  logger: n
}) {
  var E;
  const [r, o] = H(""), { email: l } = be(), [y, i] = H(!1);
  return (E = e == null ? void 0 : e.email) != null && E.isEmailRequired ? /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(Ge, {
    title: "Email",
    onClick: () => i(!0),
    style: { marginBottom: 0 },
    info: [],
    rightText: l || "Verify",
    errorMessage: r
  }), /* @__PURE__ */ a.createElement(Qr, {
    appId: t,
    isOpen: y,
    onClose: () => i(!1),
    setError: o,
    logger: n
  })) : null;
}
function jr({ appId: e, logger: t }) {
  const n = yt(null), { project: r, isProjectLoading: o, projectError: l, fetchProjectData: y } = be();
  return o ? /* @__PURE__ */ a.createElement("div", {
    className: "hypeday-wrapper",
    style: { display: "flex", justifyContent: "center" }
  }, /* @__PURE__ */ a.createElement("div", {
    className: "hypeday-spinner"
  })) : l || !r ? /* @__PURE__ */ a.createElement("div", {
    className: "hypeday-wrapper"
  }, /* @__PURE__ */ a.createElement("span", {
    className: "hypeday-error"
  }, l), /* @__PURE__ */ a.createElement("button", {
    className: "hypeday-button",
    onClick: y
  }, "Retry")) : /* @__PURE__ */ a.createElement("div", {
    className: "hypeday-wrapper"
  }, /* @__PURE__ */ a.createElement(Cn, null), /* @__PURE__ */ a.createElement(Vr, {
    projectData: r,
    appId: e,
    logger: t
  }), /* @__PURE__ */ a.createElement(Zr, {
    projectData: r,
    appId: e,
    logger: t
  }), /* @__PURE__ */ a.createElement(Dr, {
    projectData: r,
    appId: e,
    logger: t
  }), /* @__PURE__ */ a.createElement(Tn, {
    projectData: r,
    appId: e,
    logger: t
  }), /* @__PURE__ */ a.createElement(Sn, {
    projectData: r,
    ref: n
  }), /* @__PURE__ */ a.createElement(Gr, {
    projectData: r,
    appId: e,
    logger: t,
    inputRef: n
  }), /* @__PURE__ */ a.createElement(Xr, {
    projectData: r
  }));
}
const ro = an(function(t) {
  return Oe(() => {
    if (!t.projectId || !t.appId || typeof t.projectId != "string" || typeof t.appId != "string")
      throw new Error(
        "HypeDayReact: projectId and appId props are required and they must be strings."
      );
    if (!t.userToken && !t.apiKey)
      throw new Error(
        "HypeDayReact: You must provide a user token or an API key."
      );
    if (t.userToken && t.apiKey)
      throw new Error(
        "HypeDayReact: You can't provide both a user token and an API key."
      );
  }, [t.projectId, t.appId, t.userToken, t.apiKey]), /* @__PURE__ */ a.createElement(wn, null, /* @__PURE__ */ a.createElement(On, {
    ...t
  }, /* @__PURE__ */ a.createElement(jr, {
    ...t
  })));
});
export {
  ro as H,
  Rn as a,
  z as b,
  no as c,
  _n as g
};
