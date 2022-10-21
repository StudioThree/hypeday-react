import D, { useState as Qe, useMemo as on, useEffect as Pt, createContext as Ms, useContext as Lc, useRef as yn, useCallback as $t, useLayoutEffect as yi } from "react";
import al, { createPortal as cl } from "react-dom";
const ul = "https://api.hype.day", ll = "https://apitest.hype.day";
let mr = "https://api.hype.day";
const Zn = new Headers({
  "Content-Type": "application/json"
});
function fl(n) {
  mr = n ? ll : ul;
}
function hl(n) {
  n ? Zn.set("Authorization", `Bearer ${n}`) : Zn.delete("Authorization");
}
function Gr(n) {
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
function dl({
  appId: n,
  projectId: e
}) {
  const t = {
    method: "GET",
    headers: Zn
  };
  return fetch(
    `${mr}/getProject?` + new URLSearchParams({
      appid: n,
      projectid: e
    }),
    t
  ).then(Gr);
}
function pl(n) {
  const e = "solana", t = {
    method: "POST",
    headers: Zn,
    body: JSON.stringify({ chain: e, ...n })
  };
  return fetch(`${mr}/addWallet`, t).then(Gr);
}
function gl(n) {
  const e = "solana", t = {
    method: "POST",
    headers: Zn,
    body: JSON.stringify({ chain: e, ...n })
  };
  return fetch(`${mr}/verifyWallet`, t).then(Gr);
}
function Uc({
  provider: n,
  appId: e,
  projectId: t,
  returnUrl: r
}) {
  const o = {
    method: "POST",
    headers: Zn,
    body: JSON.stringify({
      appId: e,
      projectId: t,
      returnUrl: r
    })
  };
  return fetch(
    `${mr}/${n === "twitter" ? "t" : "d"}GetUrlForApp`,
    o
  ).then(Gr);
}
function yl({
  appId: n,
  projectId: e,
  customField: t
}) {
  const r = {
    method: "POST",
    headers: Zn,
    body: JSON.stringify({
      appId: n,
      projectId: e,
      customField: t
    })
  };
  return fetch(`${mr}/validateForAppProject`, r).then(
    Gr
  );
}
function _s({
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
function wl({
  projectData: n,
  appId: e,
  hasUser: t
}) {
  var u, d, w, v;
  const [r, o] = Qe(!1), i = on(() => {
    var T, L;
    if (!((T = n == null ? void 0 : n.discord) != null && T.enabled) && !((L = n == null ? void 0 : n.discord2) != null && L.enabled))
      return [];
    const { discord: E, discord2: _ } = n, S = [];
    E != null && E.enabled && S.push(E), _ != null && _.enabled && S.push(_);
    const R = [];
    return S.forEach((P) => {
      var z;
      if (P.isServerRequired) {
        const U = /* @__PURE__ */ D.createElement(D.Fragment, null, "Join the", " ", /* @__PURE__ */ D.createElement("a", {
          href: P == null ? void 0 : P.serverLink,
          target: "_blank",
          rel: "noreferrer"
        }, /* @__PURE__ */ D.createElement("strong", null, P == null ? void 0 : P.serverDisplayName)), " ", "server on Discord", P.isShouldJoinBeforeRequired ? /* @__PURE__ */ D.createElement(D.Fragment, null, " ", "before", " ", /* @__PURE__ */ D.createElement("strong", null, new Date((P == null ? void 0 : P.shouldJoinBefore) || "").toLocaleString())) : null);
        R.push(U);
      }
      if (P.isRoleRequired) {
        const U = /* @__PURE__ */ D.createElement(D.Fragment, null, 'and have the "', (z = P == null ? void 0 : P.roleDisplayNames) == null ? void 0 : z.join(", "), '" role(s)');
        R.push(U);
      }
    }), R;
  }, [n]), c = async () => {
    if (!(!e || !t || !(n != null && n.id)))
      try {
        o(!0);
        const { url: E } = await Uc({
          provider: "discord",
          appId: e,
          projectId: n.id,
          returnUrl: window.location.href
        });
        window.location.assign(E);
      } catch (E) {
        console.error(E);
      } finally {
        o(!1);
      }
  };
  return !((u = n == null ? void 0 : n.discord) != null && u.enabled) && !((d = n == null ? void 0 : n.discord2) != null && d.enabled) ? null : /* @__PURE__ */ D.createElement(_s, {
    title: "Discord",
    onClick: c,
    info: i,
    rightText: (v = (w = n == null ? void 0 : n.userInfo) == null ? void 0 : w.discord) == null ? void 0 : v.username,
    buttonDisabled: !t,
    isLoading: r
  });
}
const ml = D.forwardRef(function({
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
function Aa({
  dateString: n,
  message: e
}) {
  const [t, r] = Qe(!1), [o, i] = Qe(0), [c, u] = Qe(0), [d, w] = Qe(0), [v, E] = Qe(0);
  return Pt(() => {
    const _ = new Date(n).getTime(), S = setInterval(() => {
      const R = new Date().getTime(), T = _ - R, L = Math.floor(T / (1e3 * 60 * 60 * 24)), P = Math.floor(
        T % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)
      ), z = Math.floor(T % (1e3 * 60 * 60) / (1e3 * 60)), U = Math.floor(T % (1e3 * 60) / 1e3);
      if (T <= 0) {
        clearInterval(S), r(!0), i(0), u(0), w(0), E(0);
        return;
      }
      i(L), u(P), w(z), E(U);
    }, 1e3);
    return () => clearInterval(S);
  }, [n]), !t && !o && !c && !d && !v ? /* @__PURE__ */ D.createElement("span", {
    style: { visibility: "hidden" }
  }, "Calculating..") : t ? /* @__PURE__ */ D.createElement(D.Fragment, null, e) : /* @__PURE__ */ D.createElement(D.Fragment, null, o > 0 && `${o} days, `, c > 0 && `${c} hours, `, d > 0 && `${d} minutes, `, v > 0 && `${v} seconds`);
}
function vo({
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
function bl({
  projectData: n
}) {
  var o, i, c, u, d, w, v, E, _, S, R, T;
  const [e, t] = Qe(), r = ((o = n == null ? void 0 : n.signupAccess) == null ? void 0 : o.isEndDateRequired) && ((i = n == null ? void 0 : n.signupAccess) == null ? void 0 : i.endDate) && new Date((c = n == null ? void 0 : n.signupAccess) == null ? void 0 : c.endDate).getTime() < Date.now();
  return Pt(() => {
    var L, P, z, U;
    (L = n == null ? void 0 : n.signupAccess) != null && L.isStartDateRequired && t(
      !!(((P = n == null ? void 0 : n.signupAccess) == null ? void 0 : P.isStartDateRequired) && ((z = n == null ? void 0 : n.signupAccess) == null ? void 0 : z.startDate) && new Date((U = n == null ? void 0 : n.signupAccess) == null ? void 0 : U.startDate).getTime() > Date.now())
    );
  }, [n]), Pt(() => {
    var L, P;
    if (e && ((L = n == null ? void 0 : n.signupAccess) == null ? void 0 : L.startDate)) {
      const z = setTimeout(
        () => t(!1),
        new Date((P = n == null ? void 0 : n.signupAccess) == null ? void 0 : P.startDate).getTime() - Date.now()
      );
      return () => clearTimeout(z);
    }
  }, [e, (u = n == null ? void 0 : n.signupAccess) == null ? void 0 : u.startDate]), r && ((d = n.signupAccess) == null ? void 0 : d.endDate) ? /* @__PURE__ */ D.createElement(vo, {
    title: "Registration is closed"
  }, "Registration is closed on", " ", (v = new Date((w = n.signupAccess) == null ? void 0 : w.endDate)) == null ? void 0 : v.toUTCString(), ". Thank you for your interest.") : e && ((E = n == null ? void 0 : n.signupAccess) == null ? void 0 : E.startDate) ? /* @__PURE__ */ D.createElement(vo, {
    title: "Registration starts in:"
  }, /* @__PURE__ */ D.createElement(Aa, {
    dateString: (_ = n == null ? void 0 : n.signupAccess) == null ? void 0 : _.startDate,
    message: "Registration is open."
  })) : !r && !e && ((S = n == null ? void 0 : n.signupAccess) == null ? void 0 : S.isEndDateRequired) && ((R = n == null ? void 0 : n.signupAccess) == null ? void 0 : R.endDate) ? /* @__PURE__ */ D.createElement(vo, {
    title: "Registration ends in:"
  }, /* @__PURE__ */ D.createElement(Aa, {
    dateString: (T = n == null ? void 0 : n.signupAccess) == null ? void 0 : T.endDate,
    message: "Registration is closed."
  })) : null;
}
function Al({
  projectData: n,
  appId: e,
  hasUser: t
}) {
  var u, d, w;
  const [r, o] = Qe(!1), i = on(() => {
    var _, S;
    if (!((_ = n == null ? void 0 : n.twitter) != null && _.enabled))
      return [];
    const { twitter: v } = n, E = [];
    if (v != null && v.isAccountCreatedRequired) {
      const R = /* @__PURE__ */ D.createElement(D.Fragment, null, "Have an account created before", " ", /* @__PURE__ */ D.createElement("strong", null, new Date((v == null ? void 0 : v.accountCreated) || "").toLocaleDateString()));
      E.push(R);
    }
    if (v != null && v.isFollowRequired) {
      const R = (S = v == null ? void 0 : v.follow) == null ? void 0 : S.split(","), T = /* @__PURE__ */ D.createElement(D.Fragment, null, "Follow these account(s):", /* @__PURE__ */ D.createElement("ul", null, R == null ? void 0 : R.map((L) => /* @__PURE__ */ D.createElement("li", {
        key: L
      }, /* @__PURE__ */ D.createElement("a", {
        href: `https://twitter.com/${L.trim()}`,
        target: "_blank",
        rel: "noreferrer"
      }, /* @__PURE__ */ D.createElement("strong", null, "@", L))))));
      E.push(T);
    }
    if (v != null && v.isMinFollowersRequired) {
      const R = /* @__PURE__ */ D.createElement(D.Fragment, null, "Have at least ", /* @__PURE__ */ D.createElement("b", null, v.minFollowers, " follower(s)"));
      E.push(R);
    }
    if (v != null && v.isRetweetRequired) {
      const R = /* @__PURE__ */ D.createElement(D.Fragment, null, "Retweet", " ", /* @__PURE__ */ D.createElement("a", {
        href: v.retweetUrl,
        target: "_blank",
        rel: "noreferrer"
      }, /* @__PURE__ */ D.createElement("strong", null, "this tweet")));
      E.push(R);
    }
    return E;
  }, [n]), c = async () => {
    if (!(!e || !t || !(n != null && n.id)))
      try {
        o(!0);
        const { url: v } = await Uc({
          provider: "twitter",
          appId: e,
          projectId: n.id,
          returnUrl: window.location.href
        });
        window.location.assign(v);
      } catch (v) {
        console.error(v);
      } finally {
        o(!1);
      }
  };
  return (u = n == null ? void 0 : n.twitter) != null && u.enabled ? /* @__PURE__ */ D.createElement(_s, {
    title: "Twitter",
    onClick: c,
    info: i,
    rightText: (w = (d = n == null ? void 0 : n.userInfo) == null ? void 0 : d.twitter) == null ? void 0 : w.username,
    buttonDisabled: !t,
    isLoading: r
  }) : null;
}
var cn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function vl(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function Li(n) {
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
var Ae = {}, Qr = {};
Qr.byteLength = Sl;
Qr.toByteArray = Bl;
Qr.fromByteArray = Cl;
var gn = [], Vt = [], El = typeof Uint8Array < "u" ? Uint8Array : Array, Eo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var or = 0, xl = Eo.length; or < xl; ++or)
  gn[or] = Eo[or], Vt[Eo.charCodeAt(or)] = or;
Vt["-".charCodeAt(0)] = 62;
Vt["_".charCodeAt(0)] = 63;
function Pc(n) {
  var e = n.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var t = n.indexOf("=");
  t === -1 && (t = e);
  var r = t === e ? 0 : 4 - t % 4;
  return [t, r];
}
function Sl(n) {
  var e = Pc(n), t = e[0], r = e[1];
  return (t + r) * 3 / 4 - r;
}
function Il(n, e, t) {
  return (e + t) * 3 / 4 - t;
}
function Bl(n) {
  var e, t = Pc(n), r = t[0], o = t[1], i = new El(Il(n, r, o)), c = 0, u = o > 0 ? r - 4 : r, d;
  for (d = 0; d < u; d += 4)
    e = Vt[n.charCodeAt(d)] << 18 | Vt[n.charCodeAt(d + 1)] << 12 | Vt[n.charCodeAt(d + 2)] << 6 | Vt[n.charCodeAt(d + 3)], i[c++] = e >> 16 & 255, i[c++] = e >> 8 & 255, i[c++] = e & 255;
  return o === 2 && (e = Vt[n.charCodeAt(d)] << 2 | Vt[n.charCodeAt(d + 1)] >> 4, i[c++] = e & 255), o === 1 && (e = Vt[n.charCodeAt(d)] << 10 | Vt[n.charCodeAt(d + 1)] << 4 | Vt[n.charCodeAt(d + 2)] >> 2, i[c++] = e >> 8 & 255, i[c++] = e & 255), i;
}
function Ml(n) {
  return gn[n >> 18 & 63] + gn[n >> 12 & 63] + gn[n >> 6 & 63] + gn[n & 63];
}
function _l(n, e, t) {
  for (var r, o = [], i = e; i < t; i += 3)
    r = (n[i] << 16 & 16711680) + (n[i + 1] << 8 & 65280) + (n[i + 2] & 255), o.push(Ml(r));
  return o.join("");
}
function Cl(n) {
  for (var e, t = n.length, r = t % 3, o = [], i = 16383, c = 0, u = t - r; c < u; c += i)
    o.push(_l(n, c, c + i > u ? u : c + i));
  return r === 1 ? (e = n[t - 1], o.push(
    gn[e >> 2] + gn[e << 4 & 63] + "=="
  )) : r === 2 && (e = (n[t - 2] << 8) + n[t - 1], o.push(
    gn[e >> 10] + gn[e >> 4 & 63] + gn[e << 2 & 63] + "="
  )), o.join("");
}
var Ui = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Ui.read = function(n, e, t, r, o) {
  var i, c, u = o * 8 - r - 1, d = (1 << u) - 1, w = d >> 1, v = -7, E = t ? o - 1 : 0, _ = t ? -1 : 1, S = n[e + E];
  for (E += _, i = S & (1 << -v) - 1, S >>= -v, v += u; v > 0; i = i * 256 + n[e + E], E += _, v -= 8)
    ;
  for (c = i & (1 << -v) - 1, i >>= -v, v += r; v > 0; c = c * 256 + n[e + E], E += _, v -= 8)
    ;
  if (i === 0)
    i = 1 - w;
  else {
    if (i === d)
      return c ? NaN : (S ? -1 : 1) * (1 / 0);
    c = c + Math.pow(2, r), i = i - w;
  }
  return (S ? -1 : 1) * c * Math.pow(2, i - r);
};
Ui.write = function(n, e, t, r, o, i) {
  var c, u, d, w = i * 8 - o - 1, v = (1 << w) - 1, E = v >> 1, _ = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, S = r ? 0 : i - 1, R = r ? 1 : -1, T = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (u = isNaN(e) ? 1 : 0, c = v) : (c = Math.floor(Math.log(e) / Math.LN2), e * (d = Math.pow(2, -c)) < 1 && (c--, d *= 2), c + E >= 1 ? e += _ / d : e += _ * Math.pow(2, 1 - E), e * d >= 2 && (c++, d /= 2), c + E >= v ? (u = 0, c = v) : c + E >= 1 ? (u = (e * d - 1) * Math.pow(2, o), c = c + E) : (u = e * Math.pow(2, E - 1) * Math.pow(2, o), c = 0)); o >= 8; n[t + S] = u & 255, S += R, u /= 256, o -= 8)
    ;
  for (c = c << o | u, w += o; w > 0; n[t + S] = c & 255, S += R, c /= 256, w -= 8)
    ;
  n[t + S - R] |= T * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(n) {
  const e = Qr, t = Ui, r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  n.Buffer = u, n.SlowBuffer = z, n.INSPECT_MAX_BYTES = 50;
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
      return E(f);
    }
    return d(f, s, a);
  }
  u.poolSize = 8192;
  function d(f, s, a) {
    if (typeof f == "string")
      return _(f, s);
    if (ArrayBuffer.isView(f))
      return R(f);
    if (f == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof f
      );
    if (je(f, ArrayBuffer) || f && je(f.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (je(f, SharedArrayBuffer) || f && je(f.buffer, SharedArrayBuffer)))
      return T(f, s, a);
    if (typeof f == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const p = f.valueOf && f.valueOf();
    if (p != null && p !== f)
      return u.from(p, s, a);
    const A = L(f);
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
  function E(f) {
    return w(f), c(f < 0 ? 0 : P(f) | 0);
  }
  u.allocUnsafe = function(f) {
    return E(f);
  }, u.allocUnsafeSlow = function(f) {
    return E(f);
  };
  function _(f, s) {
    if ((typeof s != "string" || s === "") && (s = "utf8"), !u.isEncoding(s))
      throw new TypeError("Unknown encoding: " + s);
    const a = U(f, s) | 0;
    let p = c(a);
    const A = p.write(f, s);
    return A !== a && (p = p.slice(0, A)), p;
  }
  function S(f) {
    const s = f.length < 0 ? 0 : P(f.length) | 0, a = c(s);
    for (let p = 0; p < s; p += 1)
      a[p] = f[p] & 255;
    return a;
  }
  function R(f) {
    if (je(f, Uint8Array)) {
      const s = new Uint8Array(f);
      return T(s.buffer, s.byteOffset, s.byteLength);
    }
    return S(f);
  }
  function T(f, s, a) {
    if (s < 0 || f.byteLength < s)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (f.byteLength < s + (a || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let p;
    return s === void 0 && a === void 0 ? p = new Uint8Array(f) : a === void 0 ? p = new Uint8Array(f, s) : p = new Uint8Array(f, s, a), Object.setPrototypeOf(p, u.prototype), p;
  }
  function L(f) {
    if (u.isBuffer(f)) {
      const s = P(f.length) | 0, a = c(s);
      return a.length === 0 || f.copy(a, 0, 0, s), a;
    }
    if (f.length !== void 0)
      return typeof f.length != "number" || ze(f.length) ? c(0) : S(f);
    if (f.type === "Buffer" && Array.isArray(f.data))
      return S(f.data);
  }
  function P(f) {
    if (f >= o)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
    return f | 0;
  }
  function z(f) {
    return +f != f && (f = 0), u.alloc(+f);
  }
  u.isBuffer = function(s) {
    return s != null && s._isBuffer === !0 && s !== u.prototype;
  }, u.compare = function(s, a) {
    if (je(s, Uint8Array) && (s = u.from(s, s.offset, s.byteLength)), je(a, Uint8Array) && (a = u.from(a, a.offset, a.byteLength)), !u.isBuffer(s) || !u.isBuffer(a))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (s === a)
      return 0;
    let p = s.length, A = a.length;
    for (let I = 0, N = Math.min(p, A); I < N; ++I)
      if (s[I] !== a[I]) {
        p = s[I], A = a[I];
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
    let I = 0;
    for (p = 0; p < s.length; ++p) {
      let N = s[p];
      if (je(N, Uint8Array))
        I + N.length > A.length ? (u.isBuffer(N) || (N = u.from(N)), N.copy(A, I)) : Uint8Array.prototype.set.call(
          A,
          N,
          I
        );
      else if (u.isBuffer(N))
        N.copy(A, I);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      I += N.length;
    }
    return A;
  };
  function U(f, s) {
    if (u.isBuffer(f))
      return f.length;
    if (ArrayBuffer.isView(f) || je(f, ArrayBuffer))
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
          return Fe(f).length;
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
            return p ? -1 : Fe(f).length;
          s = ("" + s).toLowerCase(), A = !0;
      }
  }
  u.byteLength = U;
  function F(f, s, a) {
    let p = !1;
    if ((s === void 0 || s < 0) && (s = 0), s > this.length || ((a === void 0 || a > this.length) && (a = this.length), a <= 0) || (a >>>= 0, s >>>= 0, a <= s))
      return "";
    for (f || (f = "utf8"); ; )
      switch (f) {
        case "hex":
          return O(this, s, a);
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
  function k(f, s, a) {
    const p = f[s];
    f[s] = f[a], f[a] = p;
  }
  u.prototype.swap16 = function() {
    const s = this.length;
    if (s % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let a = 0; a < s; a += 2)
      k(this, a, a + 1);
    return this;
  }, u.prototype.swap32 = function() {
    const s = this.length;
    if (s % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let a = 0; a < s; a += 4)
      k(this, a, a + 3), k(this, a + 1, a + 2);
    return this;
  }, u.prototype.swap64 = function() {
    const s = this.length;
    if (s % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let a = 0; a < s; a += 8)
      k(this, a, a + 7), k(this, a + 1, a + 6), k(this, a + 2, a + 5), k(this, a + 3, a + 4);
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
  }, r && (u.prototype[r] = u.prototype.inspect), u.prototype.compare = function(s, a, p, A, I) {
    if (je(s, Uint8Array) && (s = u.from(s, s.offset, s.byteLength)), !u.isBuffer(s))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof s
      );
    if (a === void 0 && (a = 0), p === void 0 && (p = s ? s.length : 0), A === void 0 && (A = 0), I === void 0 && (I = this.length), a < 0 || p > s.length || A < 0 || I > this.length)
      throw new RangeError("out of range index");
    if (A >= I && a >= p)
      return 0;
    if (A >= I)
      return -1;
    if (a >= p)
      return 1;
    if (a >>>= 0, p >>>= 0, A >>>= 0, I >>>= 0, this === s)
      return 0;
    let N = I - A, J = p - a;
    const ie = Math.min(N, J), ne = this.slice(A, I), ge = s.slice(a, p);
    for (let ee = 0; ee < ie; ++ee)
      if (ne[ee] !== ge[ee]) {
        N = ne[ee], J = ge[ee];
        break;
      }
    return N < J ? -1 : J < N ? 1 : 0;
  };
  function W(f, s, a, p, A) {
    if (f.length === 0)
      return -1;
    if (typeof a == "string" ? (p = a, a = 0) : a > 2147483647 ? a = 2147483647 : a < -2147483648 && (a = -2147483648), a = +a, ze(a) && (a = A ? 0 : f.length - 1), a < 0 && (a = f.length + a), a >= f.length) {
      if (A)
        return -1;
      a = f.length - 1;
    } else if (a < 0)
      if (A)
        a = 0;
      else
        return -1;
    if (typeof s == "string" && (s = u.from(s, p)), u.isBuffer(s))
      return s.length === 0 ? -1 : Q(f, s, a, p, A);
    if (typeof s == "number")
      return s = s & 255, typeof Uint8Array.prototype.indexOf == "function" ? A ? Uint8Array.prototype.indexOf.call(f, s, a) : Uint8Array.prototype.lastIndexOf.call(f, s, a) : Q(f, [s], a, p, A);
    throw new TypeError("val must be string, number or Buffer");
  }
  function Q(f, s, a, p, A) {
    let I = 1, N = f.length, J = s.length;
    if (p !== void 0 && (p = String(p).toLowerCase(), p === "ucs2" || p === "ucs-2" || p === "utf16le" || p === "utf-16le")) {
      if (f.length < 2 || s.length < 2)
        return -1;
      I = 2, N /= 2, J /= 2, a /= 2;
    }
    function ie(ge, ee) {
      return I === 1 ? ge[ee] : ge.readUInt16BE(ee * I);
    }
    let ne;
    if (A) {
      let ge = -1;
      for (ne = a; ne < N; ne++)
        if (ie(f, ne) === ie(s, ge === -1 ? 0 : ne - ge)) {
          if (ge === -1 && (ge = ne), ne - ge + 1 === J)
            return ge * I;
        } else
          ge !== -1 && (ne -= ne - ge), ge = -1;
    } else
      for (a + J > N && (a = N - J), ne = a; ne >= 0; ne--) {
        let ge = !0;
        for (let ee = 0; ee < J; ee++)
          if (ie(f, ne + ee) !== ie(s, ee)) {
            ge = !1;
            break;
          }
        if (ge)
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
  function j(f, s, a, p) {
    a = Number(a) || 0;
    const A = f.length - a;
    p ? (p = Number(p), p > A && (p = A)) : p = A;
    const I = s.length;
    p > I / 2 && (p = I / 2);
    let N;
    for (N = 0; N < p; ++N) {
      const J = parseInt(s.substr(N * 2, 2), 16);
      if (ze(J))
        return N;
      f[a + N] = J;
    }
    return N;
  }
  function pe(f, s, a, p) {
    return ke(Fe(s, f.length - a), f, a, p);
  }
  function Me(f, s, a, p) {
    return ke(qe(s), f, a, p);
  }
  function ye(f, s, a, p) {
    return ke(Ge(s), f, a, p);
  }
  function Be(f, s, a, p) {
    return ke(ir(s, f.length - a), f, a, p);
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
    const I = this.length - a;
    if ((p === void 0 || p > I) && (p = I), s.length > 0 && (p < 0 || a < 0) || a > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    A || (A = "utf8");
    let N = !1;
    for (; ; )
      switch (A) {
        case "hex":
          return j(this, s, a, p);
        case "utf8":
        case "utf-8":
          return pe(this, s, a, p);
        case "ascii":
        case "latin1":
        case "binary":
          return Me(this, s, a, p);
        case "base64":
          return ye(this, s, a, p);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Be(this, s, a, p);
        default:
          if (N)
            throw new TypeError("Unknown encoding: " + A);
          A = ("" + A).toLowerCase(), N = !0;
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
      const I = f[A];
      let N = null, J = I > 239 ? 4 : I > 223 ? 3 : I > 191 ? 2 : 1;
      if (A + J <= a) {
        let ie, ne, ge, ee;
        switch (J) {
          case 1:
            I < 128 && (N = I);
            break;
          case 2:
            ie = f[A + 1], (ie & 192) === 128 && (ee = (I & 31) << 6 | ie & 63, ee > 127 && (N = ee));
            break;
          case 3:
            ie = f[A + 1], ne = f[A + 2], (ie & 192) === 128 && (ne & 192) === 128 && (ee = (I & 15) << 12 | (ie & 63) << 6 | ne & 63, ee > 2047 && (ee < 55296 || ee > 57343) && (N = ee));
            break;
          case 4:
            ie = f[A + 1], ne = f[A + 2], ge = f[A + 3], (ie & 192) === 128 && (ne & 192) === 128 && (ge & 192) === 128 && (ee = (I & 15) << 18 | (ie & 63) << 12 | (ne & 63) << 6 | ge & 63, ee > 65535 && ee < 1114112 && (N = ee));
        }
      }
      N === null ? (N = 65533, J = 1) : N > 65535 && (N -= 65536, p.push(N >>> 10 & 1023 | 55296), N = 56320 | N & 1023), p.push(N), A += J;
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
  function O(f, s, a) {
    const p = f.length;
    (!s || s < 0) && (s = 0), (!a || a < 0 || a > p) && (a = p);
    let A = "";
    for (let I = s; I < a; ++I)
      A += Ye[f[I]];
    return A;
  }
  function C(f, s, a) {
    const p = f.slice(s, a);
    let A = "";
    for (let I = 0; I < p.length - 1; I += 2)
      A += String.fromCharCode(p[I] + p[I + 1] * 256);
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
    let A = this[s], I = 1, N = 0;
    for (; ++N < a && (I *= 256); )
      A += this[s + N] * I;
    return A;
  }, u.prototype.readUintBE = u.prototype.readUIntBE = function(s, a, p) {
    s = s >>> 0, a = a >>> 0, p || b(s, a, this.length);
    let A = this[s + --a], I = 1;
    for (; a > 0 && (I *= 256); )
      A += this[s + --a] * I;
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
    s = s >>> 0, He(s, "offset");
    const a = this[s], p = this[s + 7];
    (a === void 0 || p === void 0) && xe(s, this.length - 8);
    const A = a + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + this[++s] * 2 ** 24, I = this[++s] + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + p * 2 ** 24;
    return BigInt(A) + (BigInt(I) << BigInt(32));
  }), u.prototype.readBigUInt64BE = rt(function(s) {
    s = s >>> 0, He(s, "offset");
    const a = this[s], p = this[s + 7];
    (a === void 0 || p === void 0) && xe(s, this.length - 8);
    const A = a * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + this[++s], I = this[++s] * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + p;
    return (BigInt(A) << BigInt(32)) + BigInt(I);
  }), u.prototype.readIntLE = function(s, a, p) {
    s = s >>> 0, a = a >>> 0, p || b(s, a, this.length);
    let A = this[s], I = 1, N = 0;
    for (; ++N < a && (I *= 256); )
      A += this[s + N] * I;
    return I *= 128, A >= I && (A -= Math.pow(2, 8 * a)), A;
  }, u.prototype.readIntBE = function(s, a, p) {
    s = s >>> 0, a = a >>> 0, p || b(s, a, this.length);
    let A = a, I = 1, N = this[s + --A];
    for (; A > 0 && (I *= 256); )
      N += this[s + --A] * I;
    return I *= 128, N >= I && (N -= Math.pow(2, 8 * a)), N;
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
    s = s >>> 0, He(s, "offset");
    const a = this[s], p = this[s + 7];
    (a === void 0 || p === void 0) && xe(s, this.length - 8);
    const A = this[s + 4] + this[s + 5] * 2 ** 8 + this[s + 6] * 2 ** 16 + (p << 24);
    return (BigInt(A) << BigInt(32)) + BigInt(a + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + this[++s] * 2 ** 24);
  }), u.prototype.readBigInt64BE = rt(function(s) {
    s = s >>> 0, He(s, "offset");
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
  function h(f, s, a, p, A, I) {
    if (!u.isBuffer(f))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (s > A || s < I)
      throw new RangeError('"value" argument is out of bounds');
    if (a + p > f.length)
      throw new RangeError("Index out of range");
  }
  u.prototype.writeUintLE = u.prototype.writeUIntLE = function(s, a, p, A) {
    if (s = +s, a = a >>> 0, p = p >>> 0, !A) {
      const J = Math.pow(2, 8 * p) - 1;
      h(this, s, a, p, J, 0);
    }
    let I = 1, N = 0;
    for (this[a] = s & 255; ++N < p && (I *= 256); )
      this[a + N] = s / I & 255;
    return a + p;
  }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(s, a, p, A) {
    if (s = +s, a = a >>> 0, p = p >>> 0, !A) {
      const J = Math.pow(2, 8 * p) - 1;
      h(this, s, a, p, J, 0);
    }
    let I = p - 1, N = 1;
    for (this[a + I] = s & 255; --I >= 0 && (N *= 256); )
      this[a + I] = s / N & 255;
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
    let I = Number(s & BigInt(4294967295));
    f[a++] = I, I = I >> 8, f[a++] = I, I = I >> 8, f[a++] = I, I = I >> 8, f[a++] = I;
    let N = Number(s >> BigInt(32) & BigInt(4294967295));
    return f[a++] = N, N = N >> 8, f[a++] = N, N = N >> 8, f[a++] = N, N = N >> 8, f[a++] = N, a;
  }
  function q(f, s, a, p, A) {
    K(s, p, A, f, a, 7);
    let I = Number(s & BigInt(4294967295));
    f[a + 7] = I, I = I >> 8, f[a + 6] = I, I = I >> 8, f[a + 5] = I, I = I >> 8, f[a + 4] = I;
    let N = Number(s >> BigInt(32) & BigInt(4294967295));
    return f[a + 3] = N, N = N >> 8, f[a + 2] = N, N = N >> 8, f[a + 1] = N, N = N >> 8, f[a] = N, a + 8;
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
    let I = 0, N = 1, J = 0;
    for (this[a] = s & 255; ++I < p && (N *= 256); )
      s < 0 && J === 0 && this[a + I - 1] !== 0 && (J = 1), this[a + I] = (s / N >> 0) - J & 255;
    return a + p;
  }, u.prototype.writeIntBE = function(s, a, p, A) {
    if (s = +s, a = a >>> 0, !A) {
      const ie = Math.pow(2, 8 * p - 1);
      h(this, s, a, p, ie - 1, -ie);
    }
    let I = p - 1, N = 1, J = 0;
    for (this[a + I] = s & 255; --I >= 0 && (N *= 256); )
      s < 0 && J === 0 && this[a + I + 1] !== 0 && (J = 1), this[a + I] = (s / N >> 0) - J & 255;
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
  function Z(f, s, a, p, A, I) {
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
    const I = A - p;
    return this === s && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(a, p, A) : Uint8Array.prototype.set.call(
      s,
      this.subarray(p, A),
      a
    ), I;
  }, u.prototype.fill = function(s, a, p, A) {
    if (typeof s == "string") {
      if (typeof a == "string" ? (A = a, a = 0, p = this.length) : typeof p == "string" && (A = p, p = this.length), A !== void 0 && typeof A != "string")
        throw new TypeError("encoding must be a string");
      if (typeof A == "string" && !u.isEncoding(A))
        throw new TypeError("Unknown encoding: " + A);
      if (s.length === 1) {
        const N = s.charCodeAt(0);
        (A === "utf8" && N < 128 || A === "latin1") && (s = N);
      }
    } else
      typeof s == "number" ? s = s & 255 : typeof s == "boolean" && (s = Number(s));
    if (a < 0 || this.length < a || this.length < p)
      throw new RangeError("Out of range index");
    if (p <= a)
      return this;
    a = a >>> 0, p = p === void 0 ? this.length : p >>> 0, s || (s = 0);
    let I;
    if (typeof s == "number")
      for (I = a; I < p; ++I)
        this[I] = s;
    else {
      const N = u.isBuffer(s) ? s : u.from(s, A), J = N.length;
      if (J === 0)
        throw new TypeError('The value "' + s + '" is invalid for argument "value"');
      for (I = 0; I < p - a; ++I)
        this[I + a] = N[I % J];
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
    He(s, "offset"), (f[s] === void 0 || f[s + a] === void 0) && xe(s, f.length - (a + 1));
  }
  function K(f, s, a, p, A, I) {
    if (f > a || f < s) {
      const N = typeof s == "bigint" ? "n" : "";
      let J;
      throw I > 3 ? s === 0 || s === BigInt(0) ? J = `>= 0${N} and < 2${N} ** ${(I + 1) * 8}${N}` : J = `>= -(2${N} ** ${(I + 1) * 8 - 1}${N}) and < 2 ** ${(I + 1) * 8 - 1}${N}` : J = `>= ${s}${N} and <= ${a}${N}`, new $.ERR_OUT_OF_RANGE("value", J, f);
    }
    ve(p, A, I);
  }
  function He(f, s) {
    if (typeof f != "number")
      throw new $.ERR_INVALID_ARG_TYPE(s, "number", f);
  }
  function xe(f, s, a) {
    throw Math.floor(f) !== f ? (He(f, a), new $.ERR_OUT_OF_RANGE(a || "offset", "an integer", f)) : s < 0 ? new $.ERR_BUFFER_OUT_OF_BOUNDS() : new $.ERR_OUT_OF_RANGE(
      a || "offset",
      `>= ${a ? 1 : 0} and <= ${s}`,
      f
    );
  }
  const We = /[^+/0-9A-Za-z-_]/g;
  function rr(f) {
    if (f = f.split("=")[0], f = f.trim().replace(We, ""), f.length < 2)
      return "";
    for (; f.length % 4 !== 0; )
      f = f + "=";
    return f;
  }
  function Fe(f, s) {
    s = s || 1 / 0;
    let a;
    const p = f.length;
    let A = null;
    const I = [];
    for (let N = 0; N < p; ++N) {
      if (a = f.charCodeAt(N), a > 55295 && a < 57344) {
        if (!A) {
          if (a > 56319) {
            (s -= 3) > -1 && I.push(239, 191, 189);
            continue;
          } else if (N + 1 === p) {
            (s -= 3) > -1 && I.push(239, 191, 189);
            continue;
          }
          A = a;
          continue;
        }
        if (a < 56320) {
          (s -= 3) > -1 && I.push(239, 191, 189), A = a;
          continue;
        }
        a = (A - 55296 << 10 | a - 56320) + 65536;
      } else
        A && (s -= 3) > -1 && I.push(239, 191, 189);
      if (A = null, a < 128) {
        if ((s -= 1) < 0)
          break;
        I.push(a);
      } else if (a < 2048) {
        if ((s -= 2) < 0)
          break;
        I.push(
          a >> 6 | 192,
          a & 63 | 128
        );
      } else if (a < 65536) {
        if ((s -= 3) < 0)
          break;
        I.push(
          a >> 12 | 224,
          a >> 6 & 63 | 128,
          a & 63 | 128
        );
      } else if (a < 1114112) {
        if ((s -= 4) < 0)
          break;
        I.push(
          a >> 18 | 240,
          a >> 12 & 63 | 128,
          a >> 6 & 63 | 128,
          a & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return I;
  }
  function qe(f) {
    const s = [];
    for (let a = 0; a < f.length; ++a)
      s.push(f.charCodeAt(a) & 255);
    return s;
  }
  function ir(f, s) {
    let a, p, A;
    const I = [];
    for (let N = 0; N < f.length && !((s -= 2) < 0); ++N)
      a = f.charCodeAt(N), p = a >> 8, A = a % 256, I.push(A), I.push(p);
    return I;
  }
  function Ge(f) {
    return e.toByteArray(rr(f));
  }
  function ke(f, s, a, p) {
    let A;
    for (A = 0; A < p && !(A + a >= s.length || A >= f.length); ++A)
      s[A + a] = f[A];
    return A;
  }
  function je(f, s) {
    return f instanceof s || f != null && f.constructor != null && f.constructor.name != null && f.constructor.name === s.name;
  }
  function ze(f) {
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
function us(n) {
  if (!Number.isSafeInteger(n) || n < 0)
    throw new Error(`Wrong positive integer: ${n}`);
}
function Tl(n) {
  if (typeof n != "boolean")
    throw new Error(`Expected boolean, not ${n}`);
}
function Dc(n, ...e) {
  if (!(n instanceof Uint8Array))
    throw new TypeError("Expected Uint8Array");
  if (e.length > 0 && !e.includes(n.length))
    throw new TypeError(`Expected Uint8Array of length ${e}, not of length=${n.length}`);
}
function Rl(n) {
  if (typeof n != "function" || typeof n.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  us(n.outputLen), us(n.blockLen);
}
function Nl(n, e = !0) {
  if (n.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (e && n.finished)
    throw new Error("Hash#digest() has already been called");
}
function kl(n, e) {
  Dc(n);
  const t = e.outputLen;
  if (n.length < t)
    throw new Error(`digestInto() expects output buffer of length at least ${t}`);
}
const jt = {
  number: us,
  bool: Tl,
  bytes: Dc,
  hash: Rl,
  exists: Nl,
  output: kl
};
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Ol = (n) => new Uint32Array(n.buffer, n.byteOffset, Math.floor(n.byteLength / 4)), xo = (n) => new DataView(n.buffer, n.byteOffset, n.byteLength), hn = (n, e) => n << 32 - e | n >>> e, Ll = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!Ll)
  throw new Error("Non little-endian hardware is not supported");
Array.from({ length: 256 }, (n, e) => e.toString(16).padStart(2, "0"));
function Ul(n) {
  if (typeof n != "string")
    throw new TypeError(`utf8ToBytes expected string, got ${typeof n}`);
  return new TextEncoder().encode(n);
}
function qr(n) {
  if (typeof n == "string" && (n = Ul(n)), !(n instanceof Uint8Array))
    throw new TypeError(`Expected input type is Uint8Array (got ${typeof n})`);
  return n;
}
class Cs {
  clone() {
    return this._cloneInto();
  }
}
function jr(n) {
  const e = (r) => n().update(qr(r)).digest(), t = n();
  return e.outputLen = t.outputLen, e.blockLen = t.blockLen, e.create = () => n(), e;
}
function Pl(n) {
  const e = (r, o) => n(o).update(qr(r)).digest(), t = n({});
  return e.outputLen = t.outputLen, e.blockLen = t.blockLen, e.create = (r) => n(r), e;
}
function Dl(n, e, t, r) {
  if (typeof n.setBigUint64 == "function")
    return n.setBigUint64(e, t, r);
  const o = BigInt(32), i = BigInt(4294967295), c = Number(t >> o & i), u = Number(t & i), d = r ? 4 : 0, w = r ? 0 : 4;
  n.setUint32(e + d, c, r), n.setUint32(e + w, u, r);
}
class Fc extends Cs {
  constructor(e, t, r, o) {
    super(), this.blockLen = e, this.outputLen = t, this.padOffset = r, this.isLE = o, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = xo(this.buffer);
  }
  update(e) {
    jt.exists(this);
    const { view: t, buffer: r, blockLen: o } = this;
    e = qr(e);
    const i = e.length;
    for (let c = 0; c < i; ) {
      const u = Math.min(o - this.pos, i - c);
      if (u === o) {
        const d = xo(e);
        for (; o <= i - c; c += o)
          this.process(d, c);
        continue;
      }
      r.set(e.subarray(c, c + u), this.pos), this.pos += u, c += u, this.pos === o && (this.process(t, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    jt.exists(this), jt.output(e, this), this.finished = !0;
    const { buffer: t, view: r, blockLen: o, isLE: i } = this;
    let { pos: c } = this;
    t[c++] = 128, this.buffer.subarray(c).fill(0), this.padOffset > o - c && (this.process(r, 0), c = 0);
    for (let d = c; d < o; d++)
      t[d] = 0;
    Dl(r, o - 8, BigInt(this.length * 8), i), this.process(r, 0);
    const u = xo(e);
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
const ni = BigInt(2 ** 32 - 1), ls = BigInt(32);
function zc(n, e = !1) {
  return e ? { h: Number(n & ni), l: Number(n >> ls & ni) } : { h: Number(n >> ls & ni) | 0, l: Number(n & ni) | 0 };
}
function Fl(n, e = !1) {
  let t = new Uint32Array(n.length), r = new Uint32Array(n.length);
  for (let o = 0; o < n.length; o++) {
    const { h: i, l: c } = zc(n[o], e);
    [t[o], r[o]] = [i, c];
  }
  return [t, r];
}
const zl = (n, e) => BigInt(n >>> 0) << ls | BigInt(e >>> 0), Hl = (n, e, t) => n >>> t, Wl = (n, e, t) => n << 32 - t | e >>> t, Gl = (n, e, t) => n >>> t | e << 32 - t, Ql = (n, e, t) => n << 32 - t | e >>> t, ql = (n, e, t) => n << 64 - t | e >>> t - 32, jl = (n, e, t) => n >>> t - 32 | e << 64 - t, Yl = (n, e) => e, Kl = (n, e) => n, Vl = (n, e, t) => n << t | e >>> 32 - t, Zl = (n, e, t) => e << t | n >>> 32 - t, Xl = (n, e, t) => e << t - 32 | n >>> 64 - t, Jl = (n, e, t) => n << t - 32 | e >>> 64 - t;
function $l(n, e, t, r) {
  const o = (e >>> 0) + (r >>> 0);
  return { h: n + t + (o / 2 ** 32 | 0) | 0, l: o | 0 };
}
const ef = (n, e, t) => (n >>> 0) + (e >>> 0) + (t >>> 0), tf = (n, e, t, r) => e + t + r + (n / 2 ** 32 | 0) | 0, nf = (n, e, t, r) => (n >>> 0) + (e >>> 0) + (t >>> 0) + (r >>> 0), rf = (n, e, t, r, o) => e + t + r + o + (n / 2 ** 32 | 0) | 0, of = (n, e, t, r, o) => (n >>> 0) + (e >>> 0) + (t >>> 0) + (r >>> 0) + (o >>> 0), sf = (n, e, t, r, o, i) => e + t + r + o + i + (n / 2 ** 32 | 0) | 0, we = {
  fromBig: zc,
  split: Fl,
  toBig: zl,
  shrSH: Hl,
  shrSL: Wl,
  rotrSH: Gl,
  rotrSL: Ql,
  rotrBH: ql,
  rotrBL: jl,
  rotr32H: Yl,
  rotr32L: Kl,
  rotlSH: Vl,
  rotlSL: Zl,
  rotlBH: Xl,
  rotlBL: Jl,
  add: $l,
  add3L: ef,
  add3H: tf,
  add4L: nf,
  add4H: rf,
  add5H: sf,
  add5L: of
}, [af, cf] = we.split([
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
].map((n) => BigInt(n))), xn = new Uint32Array(80), Sn = new Uint32Array(80);
class Ts extends Fc {
  constructor() {
    super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
  }
  get() {
    const { Ah: e, Al: t, Bh: r, Bl: o, Ch: i, Cl: c, Dh: u, Dl: d, Eh: w, El: v, Fh: E, Fl: _, Gh: S, Gl: R, Hh: T, Hl: L } = this;
    return [e, t, r, o, i, c, u, d, w, v, E, _, S, R, T, L];
  }
  set(e, t, r, o, i, c, u, d, w, v, E, _, S, R, T, L) {
    this.Ah = e | 0, this.Al = t | 0, this.Bh = r | 0, this.Bl = o | 0, this.Ch = i | 0, this.Cl = c | 0, this.Dh = u | 0, this.Dl = d | 0, this.Eh = w | 0, this.El = v | 0, this.Fh = E | 0, this.Fl = _ | 0, this.Gh = S | 0, this.Gl = R | 0, this.Hh = T | 0, this.Hl = L | 0;
  }
  process(e, t) {
    for (let U = 0; U < 16; U++, t += 4)
      xn[U] = e.getUint32(t), Sn[U] = e.getUint32(t += 4);
    for (let U = 16; U < 80; U++) {
      const F = xn[U - 15] | 0, k = Sn[U - 15] | 0, W = we.rotrSH(F, k, 1) ^ we.rotrSH(F, k, 8) ^ we.shrSH(F, k, 7), Q = we.rotrSL(F, k, 1) ^ we.rotrSL(F, k, 8) ^ we.shrSL(F, k, 7), j = xn[U - 2] | 0, pe = Sn[U - 2] | 0, Me = we.rotrSH(j, pe, 19) ^ we.rotrBH(j, pe, 61) ^ we.shrSH(j, pe, 6), ye = we.rotrSL(j, pe, 19) ^ we.rotrBL(j, pe, 61) ^ we.shrSL(j, pe, 6), Be = we.add4L(Q, ye, Sn[U - 7], Sn[U - 16]), M = we.add4H(Be, W, Me, xn[U - 7], xn[U - 16]);
      xn[U] = M | 0, Sn[U] = Be | 0;
    }
    let { Ah: r, Al: o, Bh: i, Bl: c, Ch: u, Cl: d, Dh: w, Dl: v, Eh: E, El: _, Fh: S, Fl: R, Gh: T, Gl: L, Hh: P, Hl: z } = this;
    for (let U = 0; U < 80; U++) {
      const F = we.rotrSH(E, _, 14) ^ we.rotrSH(E, _, 18) ^ we.rotrBH(E, _, 41), k = we.rotrSL(E, _, 14) ^ we.rotrSL(E, _, 18) ^ we.rotrBL(E, _, 41), W = E & S ^ ~E & T, Q = _ & R ^ ~_ & L, j = we.add5L(z, k, Q, cf[U], Sn[U]), pe = we.add5H(j, P, F, W, af[U], xn[U]), Me = j | 0, ye = we.rotrSH(r, o, 28) ^ we.rotrBH(r, o, 34) ^ we.rotrBH(r, o, 39), Be = we.rotrSL(r, o, 28) ^ we.rotrBL(r, o, 34) ^ we.rotrBL(r, o, 39), M = r & i ^ r & u ^ i & u, l = o & c ^ o & d ^ c & d;
      P = T | 0, z = L | 0, T = S | 0, L = R | 0, S = E | 0, R = _ | 0, { h: E, l: _ } = we.add(w | 0, v | 0, pe | 0, Me | 0), w = u | 0, v = d | 0, u = i | 0, d = c | 0, i = r | 0, c = o | 0;
      const g = we.add3L(Me, Be, l);
      r = we.add3H(g, pe, ye, M), o = g | 0;
    }
    ({ h: r, l: o } = we.add(this.Ah | 0, this.Al | 0, r | 0, o | 0)), { h: i, l: c } = we.add(this.Bh | 0, this.Bl | 0, i | 0, c | 0), { h: u, l: d } = we.add(this.Ch | 0, this.Cl | 0, u | 0, d | 0), { h: w, l: v } = we.add(this.Dh | 0, this.Dl | 0, w | 0, v | 0), { h: E, l: _ } = we.add(this.Eh | 0, this.El | 0, E | 0, _ | 0), { h: S, l: R } = we.add(this.Fh | 0, this.Fl | 0, S | 0, R | 0), { h: T, l: L } = we.add(this.Gh | 0, this.Gl | 0, T | 0, L | 0), { h: P, l: z } = we.add(this.Hh | 0, this.Hl | 0, P | 0, z | 0), this.set(r, o, i, c, u, d, w, v, E, _, S, R, T, L, P, z);
  }
  roundClean() {
    xn.fill(0), Sn.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
class uf extends Ts {
  constructor() {
    super(), this.Ah = 573645204, this.Al = -64227540, this.Bh = -1621794909, this.Bl = -934517566, this.Ch = 596883563, this.Cl = 1867755857, this.Dh = -1774684391, this.Dl = 1497426621, this.Eh = -1775747358, this.El = -1467023389, this.Fh = -1101128155, this.Fl = 1401305490, this.Gh = 721525244, this.Gl = 746961066, this.Hh = 246885852, this.Hl = -2117784414, this.outputLen = 32;
  }
}
class lf extends Ts {
  constructor() {
    super(), this.Ah = -876896931, this.Al = -1056596264, this.Bh = 1654270250, this.Bl = 914150663, this.Ch = -1856437926, this.Cl = 812702999, this.Dh = 355462360, this.Dl = -150054599, this.Eh = 1731405415, this.El = -4191439, this.Fh = -1900787065, this.Fl = 1750603025, this.Gh = -619958771, this.Gl = 1694076839, this.Hh = 1203062813, this.Hl = -1090891868, this.outputLen = 48;
  }
}
const ff = jr(() => new Ts());
jr(() => new uf());
jr(() => new lf());
const hf = {}, Rs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hf
}, Symbol.toStringTag, { value: "Module" }));
/*! noble-ed25519 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
const Tt = BigInt(0), Ce = BigInt(1), lr = BigInt(2), va = BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"), Ve = Object.freeze({
  a: BigInt(-1),
  d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
  P: BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"),
  l: va,
  n: va,
  h: BigInt(8),
  Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
  Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960")
}), Hc = BigInt("0x10000000000000000000000000000000000000000000000000000000000000000"), Tr = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt("6853475219497561581579357271197624642482790079785650197046958215289687604742");
const df = BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235"), pf = BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578"), gf = BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838"), yf = BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952");
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
    const t = bf(e.map((r) => r.z));
    return e.map((r, o) => r.toAffine(t[o]));
  }
  static normalizeZ(e) {
    return this.toAffineBatch(e).map(this.fromAffine);
  }
  equals(e) {
    Ea(e);
    const { x: t, y: r, z: o } = this, { x: i, y: c, z: u } = e, d = Y(t * u), w = Y(i * o), v = Y(r * u), E = Y(c * o);
    return d === w && v === E;
  }
  negate() {
    return new Te(Y(-this.x), this.y, this.z, Y(-this.t));
  }
  double() {
    const { x: e, y: t, z: r } = this, { a: o } = Ve, i = Y(e * e), c = Y(t * t), u = Y(lr * Y(r * r)), d = Y(o * i), w = e + t, v = Y(Y(w * w) - i - c), E = d + c, _ = E - u, S = d - c, R = Y(v * _), T = Y(E * S), L = Y(v * S), P = Y(_ * E);
    return new Te(R, T, P, L);
  }
  add(e) {
    Ea(e);
    const { x: t, y: r, z: o, t: i } = this, { x: c, y: u, z: d, t: w } = e, v = Y((r - t) * (u + c)), E = Y((r + t) * (u - c)), _ = Y(E - v);
    if (_ === Tt)
      return this.double();
    const S = Y(o * lr * w), R = Y(i * lr * d), T = R + S, L = E + v, P = R - S, z = Y(T * _), U = Y(L * P), F = Y(T * P), k = Y(_ * L);
    return new Te(z, U, k, F);
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
    let o = t && fs.get(t);
    o || (o = this.precomputeWindow(r), t && r !== 1 && (o = Te.normalizeZ(o), fs.set(t, o)));
    let i = Te.ZERO, c = Te.ZERO;
    const u = 1 + 256 / r, d = 2 ** (r - 1), w = BigInt(2 ** r - 1), v = 2 ** r, E = BigInt(r);
    for (let _ = 0; _ < u; _++) {
      const S = _ * d;
      let R = Number(e & w);
      if (e >>= E, R > d && (R -= v, e += Ce), R === 0) {
        let T = o[S];
        _ % 2 && (T = T.negate()), c = c.add(T);
      } else {
        let T = o[S + Math.abs(R) - 1];
        R < 0 && (T = T.negate()), i = i.add(T);
      }
    }
    return Te.normalizeZ([i, c])[0];
  }
  multiply(e, t) {
    return this.wNAF(mi(e, Ve.l), t);
  }
  multiplyUnsafe(e) {
    let t = mi(e, Ve.l, !1);
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
  toAffine(e = Pi(this.z)) {
    const { x: t, y: r, z: o } = this, i = Y(t * e), c = Y(r * e);
    if (Y(o * e) !== Ce)
      throw new Error("invZ was invalid");
    return new et(i, c);
  }
  fromRistrettoBytes() {
    Io();
  }
  toRistrettoBytes() {
    Io();
  }
  fromRistrettoHash() {
    Io();
  }
}
Te.BASE = new Te(Ve.Gx, Ve.Gy, Ce, Y(Ve.Gx * Ve.Gy));
Te.ZERO = new Te(Tt, Ce, Ce, Tt);
function Ea(n) {
  if (!(n instanceof Te))
    throw new TypeError("ExtendedPoint expected");
}
function So(n) {
  if (!(n instanceof en))
    throw new TypeError("RistrettoPoint expected");
}
function Io() {
  throw new Error("Legacy method: switch to RistrettoPoint");
}
class en {
  constructor(e) {
    this.ep = e;
  }
  static calcElligatorRistrettoMap(e) {
    const { d: t } = Ve, r = Y(Tr * e * e), o = Y((r + Ce) * gf);
    let i = BigInt(-1);
    const c = Y((i - t * r) * Y(r + t));
    let { isValid: u, value: d } = ks(o, c), w = Y(d * e);
    _n(w) || (w = Y(-w)), u || (d = w), u || (i = r);
    const v = Y(i * (r - Ce) * yf - c), E = d * d, _ = Y((d + d) * c), S = Y(v * df), R = Y(Ce - E), T = Y(Ce + E);
    return new Te(Y(_ * T), Y(R * S), Y(S * T), Y(_ * R));
  }
  static hashToCurve(e) {
    e = Un(e, 64);
    const t = Bo(e.slice(0, 32)), r = this.calcElligatorRistrettoMap(t), o = Bo(e.slice(32, 64)), i = this.calcElligatorRistrettoMap(o);
    return new en(r.add(i));
  }
  static fromHex(e) {
    e = Un(e, 32);
    const { a: t, d: r } = Ve, o = "RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint", i = Bo(e);
    if (!vf(Or(i), e) || _n(i))
      throw new Error(o);
    const c = Y(i * i), u = Y(Ce + t * c), d = Y(Ce - t * c), w = Y(u * u), v = Y(d * d), E = Y(t * r * w - v), { isValid: _, value: S } = Sa(Y(E * v)), R = Y(S * d), T = Y(S * R * E);
    let L = Y((i + i) * R);
    _n(L) && (L = Y(-L));
    const P = Y(u * T), z = Y(L * P);
    if (!_ || _n(z) || P === Tt)
      throw new Error(o);
    return new en(new Te(L, P, Ce, z));
  }
  toRawBytes() {
    let { x: e, y: t, z: r, t: o } = this.ep;
    const i = Y(Y(r + t) * Y(r - t)), c = Y(e * t), u = Y(c * c), { value: d } = Sa(Y(i * u)), w = Y(d * i), v = Y(d * c), E = Y(w * v * o);
    let _;
    if (_n(o * E)) {
      let R = Y(t * Tr), T = Y(e * Tr);
      e = R, t = T, _ = Y(w * pf);
    } else
      _ = v;
    _n(e * E) && (t = Y(-t));
    let S = Y((r - t) * _);
    return _n(S) && (S = Y(-S)), Or(S);
  }
  toHex() {
    return Yr(this.toRawBytes());
  }
  toString() {
    return this.toHex();
  }
  equals(e) {
    So(e);
    const t = this.ep, r = e.ep, o = Y(t.x * r.y) === Y(t.y * r.x), i = Y(t.y * r.y) === Y(t.x * r.x);
    return o || i;
  }
  add(e) {
    return So(e), new en(this.ep.add(e.ep));
  }
  subtract(e) {
    return So(e), new en(this.ep.subtract(e.ep));
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
const fs = /* @__PURE__ */ new WeakMap();
class et {
  constructor(e, t) {
    this.x = e, this.y = t;
  }
  _setWindowSize(e) {
    this._WINDOW_SIZE = e, fs.delete(this);
  }
  static fromHex(e, t = !0) {
    const { d: r, P: o } = Ve;
    e = Un(e, 32);
    const i = e.slice();
    i[31] = e[31] & -129;
    const c = Kr(i);
    if (t && c >= o)
      throw new Error("Expected 0 < hex < P");
    if (!t && c >= Hc)
      throw new Error("Expected 0 < hex < 2**256");
    const u = Y(c * c), d = Y(u - Ce), w = Y(r * u + Ce);
    let { isValid: v, value: E } = ks(d, w);
    if (!v)
      throw new Error("Point.fromHex: invalid y coordinate");
    const _ = (E & Ce) === Ce;
    return (e[31] & 128) !== 0 !== _ && (E = Y(-E)), new et(E, c);
  }
  static async fromPrivateKey(e) {
    return (await qc(e)).point;
  }
  toRawBytes() {
    const e = Or(this.y);
    return e[31] |= this.x & Ce ? 128 : 0, e;
  }
  toHex() {
    return Yr(this.toRawBytes());
  }
  toX25519() {
    const { y: e } = this, t = Y((Ce + e) * Pi(Ce - e));
    return Or(t);
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
class kr {
  constructor(e, t) {
    this.r = e, this.s = t, this.assertValidity();
  }
  static fromHex(e) {
    const t = Un(e, 64), r = et.fromHex(t.slice(0, 32), !1), o = Kr(t.slice(32, 64));
    return new kr(r, o);
  }
  assertValidity() {
    const { r: e, s: t } = this;
    if (!(e instanceof et))
      throw new Error("Expected Point instance");
    return mi(t, Ve.l, !1), this;
  }
  toRawBytes() {
    const e = new Uint8Array(64);
    return e.set(this.r.toRawBytes()), e.set(Or(this.s), 32), e;
  }
  toHex() {
    return Yr(this.toRawBytes());
  }
}
function xa(...n) {
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
const wf = Array.from({ length: 256 }, (n, e) => e.toString(16).padStart(2, "0"));
function Yr(n) {
  if (!(n instanceof Uint8Array))
    throw new Error("Uint8Array expected");
  let e = "";
  for (let t = 0; t < n.length; t++)
    e += wf[n[t]];
  return e;
}
function Ns(n) {
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
function Wc(n) {
  const t = n.toString(16).padStart(64, "0");
  return Ns(t);
}
function Or(n) {
  return Wc(n).reverse();
}
function _n(n) {
  return (Y(n) & Ce) === Ce;
}
function Kr(n) {
  if (!(n instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  return BigInt("0x" + Yr(Uint8Array.from(n).reverse()));
}
const mf = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
function Bo(n) {
  return Y(Kr(n) & mf);
}
function Y(n, e = Ve.P) {
  const t = n % e;
  return t >= Tt ? t : e + t;
}
function Pi(n, e = Ve.P) {
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
function bf(n, e = Ve.P) {
  const t = new Array(n.length), r = n.reduce((i, c, u) => c === Tt ? i : (t[u] = i, Y(i * c, e)), Ce), o = Pi(r, e);
  return n.reduceRight((i, c, u) => c === Tt ? i : (t[u] = Y(i * t[u], e), Y(i * c, e)), o), t;
}
function dn(n, e) {
  const { P: t } = Ve;
  let r = n;
  for (; e-- > Tt; )
    r *= r, r %= t;
  return r;
}
function Af(n) {
  const { P: e } = Ve, t = BigInt(5), r = BigInt(10), o = BigInt(20), i = BigInt(40), c = BigInt(80), d = n * n % e * n % e, w = dn(d, lr) * d % e, v = dn(w, Ce) * n % e, E = dn(v, t) * v % e, _ = dn(E, r) * E % e, S = dn(_, o) * _ % e, R = dn(S, i) * S % e, T = dn(R, c) * R % e, L = dn(T, c) * R % e, P = dn(L, r) * E % e;
  return { pow_p_5_8: dn(P, lr) * n % e, b2: d };
}
function ks(n, e) {
  const t = Y(e * e * e), r = Y(t * t * e), o = Af(n * r).pow_p_5_8;
  let i = Y(n * t * o);
  const c = Y(e * i * i), u = i, d = Y(i * Tr), w = c === n, v = c === Y(-n), E = c === Y(-n * Tr);
  return w && (i = u), (v || E) && (i = d), _n(i) && (i = Y(-i)), { isValid: w || v, value: i };
}
function Sa(n) {
  return ks(Ce, n);
}
function wi(n) {
  return Y(Kr(n), Ve.l);
}
function vf(n, e) {
  if (n.length !== e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (n[t] !== e[t])
      return !1;
  return !0;
}
function Un(n, e) {
  const t = n instanceof Uint8Array ? Uint8Array.from(n) : Ns(n);
  if (typeof e == "number" && t.length !== e)
    throw new Error(`Expected ${e} bytes`);
  return t;
}
function mi(n, e, t = !0) {
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
function Ef(n) {
  return n[0] &= 248, n[31] &= 127, n[31] |= 64, n;
}
function Gc(n) {
  if (n = typeof n == "bigint" || typeof n == "number" ? Wc(mi(n, Hc)) : Un(n), n.length !== 32)
    throw new Error("Expected 32 bytes");
  return n;
}
function Qc(n) {
  const e = Ef(n.slice(0, 32)), t = n.slice(32, 64), r = wi(e), o = et.BASE.multiply(r), i = o.toRawBytes();
  return { head: e, prefix: t, scalar: r, point: o, pointBytes: i };
}
let Rr;
function bi(...n) {
  if (typeof Rr != "function")
    throw new Error("utils.sha512Sync must be set to use sync methods");
  return Rr(...n);
}
async function qc(n) {
  return Qc(await pr.sha512(Gc(n)));
}
function Os(n) {
  return Qc(bi(Gc(n)));
}
function xf(n) {
  return Os(n).pointBytes;
}
function Sf(n, e) {
  n = Un(n);
  const { prefix: t, scalar: r, pointBytes: o } = Os(e), i = wi(bi(t, n)), c = et.BASE.multiply(i), u = wi(bi(c.toRawBytes(), o, n)), d = Y(i + u * r, Ve.l);
  return new kr(c, d).toRawBytes();
}
function If(n, e, t) {
  e = Un(e), t instanceof et || (t = et.fromHex(t, !1));
  const { r, s: o } = n instanceof kr ? n.assertValidity() : kr.fromHex(n), i = Te.BASE.multiplyUnsafe(o);
  return { r, s: o, SB: i, pub: t, msg: e };
}
function Bf(n, e, t, r) {
  const o = wi(r), i = Te.fromAffine(n).multiplyUnsafe(o);
  return Te.fromAffine(e).add(i).subtract(t).multiplyUnsafe(Ve.h).equals(Te.ZERO);
}
function Mf(n, e, t) {
  const { r, SB: o, msg: i, pub: c } = If(n, e, t), u = bi(r.toRawBytes(), c.toRawBytes(), i);
  return Bf(c, r, o, u);
}
const jc = {
  getExtendedPublicKey: Os,
  getPublicKey: xf,
  sign: Sf,
  verify: Mf
};
et.BASE._setWindowSize(8);
const In = {
  node: Rs,
  web: typeof self == "object" && "crypto" in self ? self.crypto : void 0
}, pr = {
  bytesToHex: Yr,
  hexToBytes: Ns,
  concatBytes: xa,
  getExtendedPublicKey: qc,
  mod: Y,
  invert: Pi,
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
    if (n = Un(n), n.length < 40 || n.length > 1024)
      throw new Error("Expected 40-1024 bytes of private key as per FIPS 186");
    return Y(Kr(n), Ve.l - Ce) + Ce;
  },
  randomBytes: (n = 32) => {
    if (In.web)
      return In.web.getRandomValues(new Uint8Array(n));
    if (In.node) {
      const { randomBytes: e } = In.node;
      return new Uint8Array(e(n).buffer);
    } else
      throw new Error("The environment doesn't have randomBytes function");
  },
  randomPrivateKey: () => pr.randomBytes(32),
  sha512: async (...n) => {
    const e = xa(...n);
    if (In.web) {
      const t = await In.web.subtle.digest("SHA-512", e.buffer);
      return new Uint8Array(t);
    } else {
      if (In.node)
        return Uint8Array.from(In.node.createHash("sha512").update(e).digest());
      throw new Error("The environment doesn't have sha512 function");
    }
  },
  precompute(n = 8, e = et.BASE) {
    const t = e.equals(et.BASE) ? e : new et(e.x, e.y);
    return t._setWindowSize(n), t.multiply(lr), t;
  },
  sha512Sync: void 0
};
Object.defineProperties(pr, {
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
var Ls = { exports: {} };
const _f = /* @__PURE__ */ Li(Rs);
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
      typeof window < "u" && typeof window.Buffer < "u" ? c = window.Buffer : c = _f.Buffer;
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
      var x, O, C = 0;
      if (m === "be")
        for (y = l.length - 1, x = 0; y >= 0; y -= 3)
          O = l[y] | l[y - 1] << 8 | l[y - 2] << 16, this.words[x] |= O << C & 67108863, this.words[x + 1] = O >>> 26 - C & 67108863, C += 24, C >= 26 && (C -= 26, x++);
      else if (m === "le")
        for (y = 0, x = 0; y < l.length; y += 3)
          O = l[y] | l[y + 1] << 8 | l[y + 2] << 16, this.words[x] |= O << C & 67108863, this.words[x + 1] = O >>> 26 - C & 67108863, C += 24, C >= 26 && (C -= 26, x++);
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
      var x = 0, O = 0, C;
      if (m === "be")
        for (y = l.length - 1; y >= g; y -= 2)
          C = d(l, g, y) << x, this.words[O] |= C & 67108863, x >= 18 ? (x -= 18, O += 1, this.words[O] |= C >>> 26) : x += 8;
      else {
        var b = l.length - g;
        for (y = b % 2 === 0 ? g + 1 : g; y < l.length; y += 2)
          C = d(l, g, y) << x, this.words[O] |= C & 67108863, x >= 18 ? (x -= 18, O += 1, this.words[O] |= C >>> 26) : x += 8;
      }
      this._strip();
    };
    function w(M, l, g, m) {
      for (var y = 0, x = 0, O = Math.min(M.length, g), C = l; C < O; C++) {
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
      for (var O = l.length - m, C = O % y, b = Math.min(O, O - C) + m, h = 0, B = m; B < b; B += y)
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
        i.prototype[Symbol.for("nodejs.util.inspect.custom")] = E;
      } catch {
        i.prototype.inspect = E;
      }
    else
      i.prototype.inspect = E;
    function E() {
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
    ], S = [
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
    ], R = [
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
        for (var y = 0, x = 0, O = 0; O < this.length; O++) {
          var C = this.words[O], b = ((C << y | x) & 16777215).toString(16);
          x = C >>> 24 - y & 16777215, y += 2, y >= 26 && (y -= 26, O--), x !== 0 || O !== this.length - 1 ? m = _[6 - b.length] + b + m : m = b + m;
        }
        for (x !== 0 && (m = x.toString(16) + m); m.length % g !== 0; )
          m = "0" + m;
        return this.negative !== 0 && (m = "-" + m), m;
      }
      if (l === (l | 0) && l >= 2 && l <= 36) {
        var h = S[l], B = R[l];
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
      var O = T(l, x), C = g === "le" ? "LE" : "BE";
      return this["_toArrayLike" + C](O, y), O;
    }, i.prototype._toArrayLikeLE = function(l, g) {
      for (var m = 0, y = 0, x = 0, O = 0; x < this.length; x++) {
        var C = this.words[x] << O | y;
        l[m++] = C & 255, m < l.length && (l[m++] = C >> 8 & 255), m < l.length && (l[m++] = C >> 16 & 255), O === 6 ? (m < l.length && (l[m++] = C >> 24 & 255), y = 0, O = 0) : (y = C >>> 24, O += 2);
      }
      if (m < l.length)
        for (l[m++] = y; m < l.length; )
          l[m++] = 0;
    }, i.prototype._toArrayLikeBE = function(l, g) {
      for (var m = l.length - 1, y = 0, x = 0, O = 0; x < this.length; x++) {
        var C = this.words[x] << O | y;
        l[m--] = C & 255, m >= 0 && (l[m--] = C >> 8 & 255), m >= 0 && (l[m--] = C >> 16 & 255), O === 6 ? (m >= 0 && (l[m--] = C >> 24 & 255), y = 0, O = 0) : (y = C >>> 24, O += 2);
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
    function L(M) {
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
      for (var x = 0, O = 0; O < y.length; O++)
        g = (m.words[O] | 0) + (y.words[O] | 0) + x, this.words[O] = g & 67108863, x = g >>> 26;
      for (; x !== 0 && O < m.length; O++)
        g = (m.words[O] | 0) + x, this.words[O] = g & 67108863, x = g >>> 26;
      if (this.length = m.length, x !== 0)
        this.words[this.length] = x, this.length++;
      else if (m !== this)
        for (; O < m.length; O++)
          this.words[O] = m.words[O];
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
      for (var O = 0, C = 0; C < x.length; C++)
        g = (y.words[C] | 0) - (x.words[C] | 0) + O, O = g >> 26, this.words[C] = g & 67108863;
      for (; O !== 0 && C < y.length; C++)
        g = (y.words[C] | 0) + O, O = g >> 26, this.words[C] = g & 67108863;
      if (O === 0 && C < y.length && y !== this)
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
      var y = M.words[0] | 0, x = l.words[0] | 0, O = y * x, C = O & 67108863, b = O / 67108864 | 0;
      g.words[0] = C;
      for (var h = 1; h < m; h++) {
        for (var B = b >>> 26, q = b & 67108863, Z = Math.min(h, l.length - 1), V = Math.max(0, h - M.length + 1); V <= Z; V++) {
          var oe = h - V | 0;
          y = M.words[oe] | 0, x = l.words[V] | 0, O = y * x + q, B += O / 67108864 | 0, q = O & 67108863;
        }
        g.words[h] = q | 0, b = B | 0;
      }
      return b !== 0 ? g.words[h] = b | 0 : g.length--, g._strip();
    }
    var z = function(l, g, m) {
      var y = l.words, x = g.words, O = m.words, C = 0, b, h, B, q = y[0] | 0, Z = q & 8191, V = q >>> 13, oe = y[1] | 0, $ = oe & 8191, se = oe >>> 13, be = y[2] | 0, ve = be & 8191, K = be >>> 13, He = y[3] | 0, xe = He & 8191, We = He >>> 13, rr = y[4] | 0, Fe = rr & 8191, qe = rr >>> 13, ir = y[5] | 0, Ge = ir & 8191, ke = ir >>> 13, je = y[6] | 0, ze = je & 8191, Ye = je >>> 13, rt = y[7] | 0, Ke = rt & 8191, f = rt >>> 13, s = y[8] | 0, a = s & 8191, p = s >>> 13, A = y[9] | 0, I = A & 8191, N = A >>> 13, J = x[0] | 0, ie = J & 8191, ne = J >>> 13, ge = x[1] | 0, ee = ge & 8191, it = ge >>> 13, ha = x[2] | 0, ot = ha & 8191, st = ha >>> 13, da = x[3] | 0, at = da & 8191, ct = da >>> 13, pa = x[4] | 0, ut = pa & 8191, lt = pa >>> 13, ga = x[5] | 0, ft = ga & 8191, ht = ga >>> 13, ya = x[6] | 0, dt = ya & 8191, pt = ya >>> 13, wa = x[7] | 0, gt = wa & 8191, yt = wa >>> 13, ma = x[8] | 0, wt = ma & 8191, mt = ma >>> 13, ba = x[9] | 0, bt = ba & 8191, At = ba >>> 13;
      m.negative = l.negative ^ g.negative, m.length = 19, b = Math.imul(Z, ie), h = Math.imul(Z, ne), h = h + Math.imul(V, ie) | 0, B = Math.imul(V, ne);
      var to = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (to >>> 26) | 0, to &= 67108863, b = Math.imul($, ie), h = Math.imul($, ne), h = h + Math.imul(se, ie) | 0, B = Math.imul(se, ne), b = b + Math.imul(Z, ee) | 0, h = h + Math.imul(Z, it) | 0, h = h + Math.imul(V, ee) | 0, B = B + Math.imul(V, it) | 0;
      var no = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (no >>> 26) | 0, no &= 67108863, b = Math.imul(ve, ie), h = Math.imul(ve, ne), h = h + Math.imul(K, ie) | 0, B = Math.imul(K, ne), b = b + Math.imul($, ee) | 0, h = h + Math.imul($, it) | 0, h = h + Math.imul(se, ee) | 0, B = B + Math.imul(se, it) | 0, b = b + Math.imul(Z, ot) | 0, h = h + Math.imul(Z, st) | 0, h = h + Math.imul(V, ot) | 0, B = B + Math.imul(V, st) | 0;
      var ro = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (ro >>> 26) | 0, ro &= 67108863, b = Math.imul(xe, ie), h = Math.imul(xe, ne), h = h + Math.imul(We, ie) | 0, B = Math.imul(We, ne), b = b + Math.imul(ve, ee) | 0, h = h + Math.imul(ve, it) | 0, h = h + Math.imul(K, ee) | 0, B = B + Math.imul(K, it) | 0, b = b + Math.imul($, ot) | 0, h = h + Math.imul($, st) | 0, h = h + Math.imul(se, ot) | 0, B = B + Math.imul(se, st) | 0, b = b + Math.imul(Z, at) | 0, h = h + Math.imul(Z, ct) | 0, h = h + Math.imul(V, at) | 0, B = B + Math.imul(V, ct) | 0;
      var io = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (io >>> 26) | 0, io &= 67108863, b = Math.imul(Fe, ie), h = Math.imul(Fe, ne), h = h + Math.imul(qe, ie) | 0, B = Math.imul(qe, ne), b = b + Math.imul(xe, ee) | 0, h = h + Math.imul(xe, it) | 0, h = h + Math.imul(We, ee) | 0, B = B + Math.imul(We, it) | 0, b = b + Math.imul(ve, ot) | 0, h = h + Math.imul(ve, st) | 0, h = h + Math.imul(K, ot) | 0, B = B + Math.imul(K, st) | 0, b = b + Math.imul($, at) | 0, h = h + Math.imul($, ct) | 0, h = h + Math.imul(se, at) | 0, B = B + Math.imul(se, ct) | 0, b = b + Math.imul(Z, ut) | 0, h = h + Math.imul(Z, lt) | 0, h = h + Math.imul(V, ut) | 0, B = B + Math.imul(V, lt) | 0;
      var oo = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (oo >>> 26) | 0, oo &= 67108863, b = Math.imul(Ge, ie), h = Math.imul(Ge, ne), h = h + Math.imul(ke, ie) | 0, B = Math.imul(ke, ne), b = b + Math.imul(Fe, ee) | 0, h = h + Math.imul(Fe, it) | 0, h = h + Math.imul(qe, ee) | 0, B = B + Math.imul(qe, it) | 0, b = b + Math.imul(xe, ot) | 0, h = h + Math.imul(xe, st) | 0, h = h + Math.imul(We, ot) | 0, B = B + Math.imul(We, st) | 0, b = b + Math.imul(ve, at) | 0, h = h + Math.imul(ve, ct) | 0, h = h + Math.imul(K, at) | 0, B = B + Math.imul(K, ct) | 0, b = b + Math.imul($, ut) | 0, h = h + Math.imul($, lt) | 0, h = h + Math.imul(se, ut) | 0, B = B + Math.imul(se, lt) | 0, b = b + Math.imul(Z, ft) | 0, h = h + Math.imul(Z, ht) | 0, h = h + Math.imul(V, ft) | 0, B = B + Math.imul(V, ht) | 0;
      var so = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (so >>> 26) | 0, so &= 67108863, b = Math.imul(ze, ie), h = Math.imul(ze, ne), h = h + Math.imul(Ye, ie) | 0, B = Math.imul(Ye, ne), b = b + Math.imul(Ge, ee) | 0, h = h + Math.imul(Ge, it) | 0, h = h + Math.imul(ke, ee) | 0, B = B + Math.imul(ke, it) | 0, b = b + Math.imul(Fe, ot) | 0, h = h + Math.imul(Fe, st) | 0, h = h + Math.imul(qe, ot) | 0, B = B + Math.imul(qe, st) | 0, b = b + Math.imul(xe, at) | 0, h = h + Math.imul(xe, ct) | 0, h = h + Math.imul(We, at) | 0, B = B + Math.imul(We, ct) | 0, b = b + Math.imul(ve, ut) | 0, h = h + Math.imul(ve, lt) | 0, h = h + Math.imul(K, ut) | 0, B = B + Math.imul(K, lt) | 0, b = b + Math.imul($, ft) | 0, h = h + Math.imul($, ht) | 0, h = h + Math.imul(se, ft) | 0, B = B + Math.imul(se, ht) | 0, b = b + Math.imul(Z, dt) | 0, h = h + Math.imul(Z, pt) | 0, h = h + Math.imul(V, dt) | 0, B = B + Math.imul(V, pt) | 0;
      var ao = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (ao >>> 26) | 0, ao &= 67108863, b = Math.imul(Ke, ie), h = Math.imul(Ke, ne), h = h + Math.imul(f, ie) | 0, B = Math.imul(f, ne), b = b + Math.imul(ze, ee) | 0, h = h + Math.imul(ze, it) | 0, h = h + Math.imul(Ye, ee) | 0, B = B + Math.imul(Ye, it) | 0, b = b + Math.imul(Ge, ot) | 0, h = h + Math.imul(Ge, st) | 0, h = h + Math.imul(ke, ot) | 0, B = B + Math.imul(ke, st) | 0, b = b + Math.imul(Fe, at) | 0, h = h + Math.imul(Fe, ct) | 0, h = h + Math.imul(qe, at) | 0, B = B + Math.imul(qe, ct) | 0, b = b + Math.imul(xe, ut) | 0, h = h + Math.imul(xe, lt) | 0, h = h + Math.imul(We, ut) | 0, B = B + Math.imul(We, lt) | 0, b = b + Math.imul(ve, ft) | 0, h = h + Math.imul(ve, ht) | 0, h = h + Math.imul(K, ft) | 0, B = B + Math.imul(K, ht) | 0, b = b + Math.imul($, dt) | 0, h = h + Math.imul($, pt) | 0, h = h + Math.imul(se, dt) | 0, B = B + Math.imul(se, pt) | 0, b = b + Math.imul(Z, gt) | 0, h = h + Math.imul(Z, yt) | 0, h = h + Math.imul(V, gt) | 0, B = B + Math.imul(V, yt) | 0;
      var co = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (co >>> 26) | 0, co &= 67108863, b = Math.imul(a, ie), h = Math.imul(a, ne), h = h + Math.imul(p, ie) | 0, B = Math.imul(p, ne), b = b + Math.imul(Ke, ee) | 0, h = h + Math.imul(Ke, it) | 0, h = h + Math.imul(f, ee) | 0, B = B + Math.imul(f, it) | 0, b = b + Math.imul(ze, ot) | 0, h = h + Math.imul(ze, st) | 0, h = h + Math.imul(Ye, ot) | 0, B = B + Math.imul(Ye, st) | 0, b = b + Math.imul(Ge, at) | 0, h = h + Math.imul(Ge, ct) | 0, h = h + Math.imul(ke, at) | 0, B = B + Math.imul(ke, ct) | 0, b = b + Math.imul(Fe, ut) | 0, h = h + Math.imul(Fe, lt) | 0, h = h + Math.imul(qe, ut) | 0, B = B + Math.imul(qe, lt) | 0, b = b + Math.imul(xe, ft) | 0, h = h + Math.imul(xe, ht) | 0, h = h + Math.imul(We, ft) | 0, B = B + Math.imul(We, ht) | 0, b = b + Math.imul(ve, dt) | 0, h = h + Math.imul(ve, pt) | 0, h = h + Math.imul(K, dt) | 0, B = B + Math.imul(K, pt) | 0, b = b + Math.imul($, gt) | 0, h = h + Math.imul($, yt) | 0, h = h + Math.imul(se, gt) | 0, B = B + Math.imul(se, yt) | 0, b = b + Math.imul(Z, wt) | 0, h = h + Math.imul(Z, mt) | 0, h = h + Math.imul(V, wt) | 0, B = B + Math.imul(V, mt) | 0;
      var uo = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (uo >>> 26) | 0, uo &= 67108863, b = Math.imul(I, ie), h = Math.imul(I, ne), h = h + Math.imul(N, ie) | 0, B = Math.imul(N, ne), b = b + Math.imul(a, ee) | 0, h = h + Math.imul(a, it) | 0, h = h + Math.imul(p, ee) | 0, B = B + Math.imul(p, it) | 0, b = b + Math.imul(Ke, ot) | 0, h = h + Math.imul(Ke, st) | 0, h = h + Math.imul(f, ot) | 0, B = B + Math.imul(f, st) | 0, b = b + Math.imul(ze, at) | 0, h = h + Math.imul(ze, ct) | 0, h = h + Math.imul(Ye, at) | 0, B = B + Math.imul(Ye, ct) | 0, b = b + Math.imul(Ge, ut) | 0, h = h + Math.imul(Ge, lt) | 0, h = h + Math.imul(ke, ut) | 0, B = B + Math.imul(ke, lt) | 0, b = b + Math.imul(Fe, ft) | 0, h = h + Math.imul(Fe, ht) | 0, h = h + Math.imul(qe, ft) | 0, B = B + Math.imul(qe, ht) | 0, b = b + Math.imul(xe, dt) | 0, h = h + Math.imul(xe, pt) | 0, h = h + Math.imul(We, dt) | 0, B = B + Math.imul(We, pt) | 0, b = b + Math.imul(ve, gt) | 0, h = h + Math.imul(ve, yt) | 0, h = h + Math.imul(K, gt) | 0, B = B + Math.imul(K, yt) | 0, b = b + Math.imul($, wt) | 0, h = h + Math.imul($, mt) | 0, h = h + Math.imul(se, wt) | 0, B = B + Math.imul(se, mt) | 0, b = b + Math.imul(Z, bt) | 0, h = h + Math.imul(Z, At) | 0, h = h + Math.imul(V, bt) | 0, B = B + Math.imul(V, At) | 0;
      var lo = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (lo >>> 26) | 0, lo &= 67108863, b = Math.imul(I, ee), h = Math.imul(I, it), h = h + Math.imul(N, ee) | 0, B = Math.imul(N, it), b = b + Math.imul(a, ot) | 0, h = h + Math.imul(a, st) | 0, h = h + Math.imul(p, ot) | 0, B = B + Math.imul(p, st) | 0, b = b + Math.imul(Ke, at) | 0, h = h + Math.imul(Ke, ct) | 0, h = h + Math.imul(f, at) | 0, B = B + Math.imul(f, ct) | 0, b = b + Math.imul(ze, ut) | 0, h = h + Math.imul(ze, lt) | 0, h = h + Math.imul(Ye, ut) | 0, B = B + Math.imul(Ye, lt) | 0, b = b + Math.imul(Ge, ft) | 0, h = h + Math.imul(Ge, ht) | 0, h = h + Math.imul(ke, ft) | 0, B = B + Math.imul(ke, ht) | 0, b = b + Math.imul(Fe, dt) | 0, h = h + Math.imul(Fe, pt) | 0, h = h + Math.imul(qe, dt) | 0, B = B + Math.imul(qe, pt) | 0, b = b + Math.imul(xe, gt) | 0, h = h + Math.imul(xe, yt) | 0, h = h + Math.imul(We, gt) | 0, B = B + Math.imul(We, yt) | 0, b = b + Math.imul(ve, wt) | 0, h = h + Math.imul(ve, mt) | 0, h = h + Math.imul(K, wt) | 0, B = B + Math.imul(K, mt) | 0, b = b + Math.imul($, bt) | 0, h = h + Math.imul($, At) | 0, h = h + Math.imul(se, bt) | 0, B = B + Math.imul(se, At) | 0;
      var fo = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (fo >>> 26) | 0, fo &= 67108863, b = Math.imul(I, ot), h = Math.imul(I, st), h = h + Math.imul(N, ot) | 0, B = Math.imul(N, st), b = b + Math.imul(a, at) | 0, h = h + Math.imul(a, ct) | 0, h = h + Math.imul(p, at) | 0, B = B + Math.imul(p, ct) | 0, b = b + Math.imul(Ke, ut) | 0, h = h + Math.imul(Ke, lt) | 0, h = h + Math.imul(f, ut) | 0, B = B + Math.imul(f, lt) | 0, b = b + Math.imul(ze, ft) | 0, h = h + Math.imul(ze, ht) | 0, h = h + Math.imul(Ye, ft) | 0, B = B + Math.imul(Ye, ht) | 0, b = b + Math.imul(Ge, dt) | 0, h = h + Math.imul(Ge, pt) | 0, h = h + Math.imul(ke, dt) | 0, B = B + Math.imul(ke, pt) | 0, b = b + Math.imul(Fe, gt) | 0, h = h + Math.imul(Fe, yt) | 0, h = h + Math.imul(qe, gt) | 0, B = B + Math.imul(qe, yt) | 0, b = b + Math.imul(xe, wt) | 0, h = h + Math.imul(xe, mt) | 0, h = h + Math.imul(We, wt) | 0, B = B + Math.imul(We, mt) | 0, b = b + Math.imul(ve, bt) | 0, h = h + Math.imul(ve, At) | 0, h = h + Math.imul(K, bt) | 0, B = B + Math.imul(K, At) | 0;
      var ho = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (ho >>> 26) | 0, ho &= 67108863, b = Math.imul(I, at), h = Math.imul(I, ct), h = h + Math.imul(N, at) | 0, B = Math.imul(N, ct), b = b + Math.imul(a, ut) | 0, h = h + Math.imul(a, lt) | 0, h = h + Math.imul(p, ut) | 0, B = B + Math.imul(p, lt) | 0, b = b + Math.imul(Ke, ft) | 0, h = h + Math.imul(Ke, ht) | 0, h = h + Math.imul(f, ft) | 0, B = B + Math.imul(f, ht) | 0, b = b + Math.imul(ze, dt) | 0, h = h + Math.imul(ze, pt) | 0, h = h + Math.imul(Ye, dt) | 0, B = B + Math.imul(Ye, pt) | 0, b = b + Math.imul(Ge, gt) | 0, h = h + Math.imul(Ge, yt) | 0, h = h + Math.imul(ke, gt) | 0, B = B + Math.imul(ke, yt) | 0, b = b + Math.imul(Fe, wt) | 0, h = h + Math.imul(Fe, mt) | 0, h = h + Math.imul(qe, wt) | 0, B = B + Math.imul(qe, mt) | 0, b = b + Math.imul(xe, bt) | 0, h = h + Math.imul(xe, At) | 0, h = h + Math.imul(We, bt) | 0, B = B + Math.imul(We, At) | 0;
      var po = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (po >>> 26) | 0, po &= 67108863, b = Math.imul(I, ut), h = Math.imul(I, lt), h = h + Math.imul(N, ut) | 0, B = Math.imul(N, lt), b = b + Math.imul(a, ft) | 0, h = h + Math.imul(a, ht) | 0, h = h + Math.imul(p, ft) | 0, B = B + Math.imul(p, ht) | 0, b = b + Math.imul(Ke, dt) | 0, h = h + Math.imul(Ke, pt) | 0, h = h + Math.imul(f, dt) | 0, B = B + Math.imul(f, pt) | 0, b = b + Math.imul(ze, gt) | 0, h = h + Math.imul(ze, yt) | 0, h = h + Math.imul(Ye, gt) | 0, B = B + Math.imul(Ye, yt) | 0, b = b + Math.imul(Ge, wt) | 0, h = h + Math.imul(Ge, mt) | 0, h = h + Math.imul(ke, wt) | 0, B = B + Math.imul(ke, mt) | 0, b = b + Math.imul(Fe, bt) | 0, h = h + Math.imul(Fe, At) | 0, h = h + Math.imul(qe, bt) | 0, B = B + Math.imul(qe, At) | 0;
      var go = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (go >>> 26) | 0, go &= 67108863, b = Math.imul(I, ft), h = Math.imul(I, ht), h = h + Math.imul(N, ft) | 0, B = Math.imul(N, ht), b = b + Math.imul(a, dt) | 0, h = h + Math.imul(a, pt) | 0, h = h + Math.imul(p, dt) | 0, B = B + Math.imul(p, pt) | 0, b = b + Math.imul(Ke, gt) | 0, h = h + Math.imul(Ke, yt) | 0, h = h + Math.imul(f, gt) | 0, B = B + Math.imul(f, yt) | 0, b = b + Math.imul(ze, wt) | 0, h = h + Math.imul(ze, mt) | 0, h = h + Math.imul(Ye, wt) | 0, B = B + Math.imul(Ye, mt) | 0, b = b + Math.imul(Ge, bt) | 0, h = h + Math.imul(Ge, At) | 0, h = h + Math.imul(ke, bt) | 0, B = B + Math.imul(ke, At) | 0;
      var yo = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (yo >>> 26) | 0, yo &= 67108863, b = Math.imul(I, dt), h = Math.imul(I, pt), h = h + Math.imul(N, dt) | 0, B = Math.imul(N, pt), b = b + Math.imul(a, gt) | 0, h = h + Math.imul(a, yt) | 0, h = h + Math.imul(p, gt) | 0, B = B + Math.imul(p, yt) | 0, b = b + Math.imul(Ke, wt) | 0, h = h + Math.imul(Ke, mt) | 0, h = h + Math.imul(f, wt) | 0, B = B + Math.imul(f, mt) | 0, b = b + Math.imul(ze, bt) | 0, h = h + Math.imul(ze, At) | 0, h = h + Math.imul(Ye, bt) | 0, B = B + Math.imul(Ye, At) | 0;
      var wo = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (wo >>> 26) | 0, wo &= 67108863, b = Math.imul(I, gt), h = Math.imul(I, yt), h = h + Math.imul(N, gt) | 0, B = Math.imul(N, yt), b = b + Math.imul(a, wt) | 0, h = h + Math.imul(a, mt) | 0, h = h + Math.imul(p, wt) | 0, B = B + Math.imul(p, mt) | 0, b = b + Math.imul(Ke, bt) | 0, h = h + Math.imul(Ke, At) | 0, h = h + Math.imul(f, bt) | 0, B = B + Math.imul(f, At) | 0;
      var mo = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (mo >>> 26) | 0, mo &= 67108863, b = Math.imul(I, wt), h = Math.imul(I, mt), h = h + Math.imul(N, wt) | 0, B = Math.imul(N, mt), b = b + Math.imul(a, bt) | 0, h = h + Math.imul(a, At) | 0, h = h + Math.imul(p, bt) | 0, B = B + Math.imul(p, At) | 0;
      var bo = (C + b | 0) + ((h & 8191) << 13) | 0;
      C = (B + (h >>> 13) | 0) + (bo >>> 26) | 0, bo &= 67108863, b = Math.imul(I, bt), h = Math.imul(I, At), h = h + Math.imul(N, bt) | 0, B = Math.imul(N, At);
      var Ao = (C + b | 0) + ((h & 8191) << 13) | 0;
      return C = (B + (h >>> 13) | 0) + (Ao >>> 26) | 0, Ao &= 67108863, O[0] = to, O[1] = no, O[2] = ro, O[3] = io, O[4] = oo, O[5] = so, O[6] = ao, O[7] = co, O[8] = uo, O[9] = lo, O[10] = fo, O[11] = ho, O[12] = po, O[13] = go, O[14] = yo, O[15] = wo, O[16] = mo, O[17] = bo, O[18] = Ao, C !== 0 && (O[19] = C, m.length++), m;
    };
    Math.imul || (z = P);
    function U(M, l, g) {
      g.negative = l.negative ^ M.negative, g.length = M.length + l.length;
      for (var m = 0, y = 0, x = 0; x < g.length - 1; x++) {
        var O = y;
        y = 0;
        for (var C = m & 67108863, b = Math.min(x, l.length - 1), h = Math.max(0, x - M.length + 1); h <= b; h++) {
          var B = x - h, q = M.words[B] | 0, Z = l.words[h] | 0, V = q * Z, oe = V & 67108863;
          O = O + (V / 67108864 | 0) | 0, oe = oe + C | 0, C = oe & 67108863, O = O + (oe >>> 26) | 0, y += O >>> 26, O &= 67108863;
        }
        g.words[x] = C, m = O, O = y;
      }
      return m !== 0 ? g.words[x] = m : g.length--, g._strip();
    }
    function F(M, l, g) {
      return U(M, l, g);
    }
    i.prototype.mulTo = function(l, g) {
      var m, y = this.length + l.length;
      return this.length === 10 && l.length === 10 ? m = z(this, l, g) : y < 63 ? m = P(this, l, g) : y < 1024 ? m = U(this, l, g) : m = F(this, l, g), m;
    }, i.prototype.mul = function(l) {
      var g = new i(null);
      return g.words = new Array(this.length + l.length), this.mulTo(l, g);
    }, i.prototype.mulf = function(l) {
      var g = new i(null);
      return g.words = new Array(this.length + l.length), F(this, l, g);
    }, i.prototype.imul = function(l) {
      return this.clone().mulTo(l, this);
    }, i.prototype.imuln = function(l) {
      var g = l < 0;
      g && (l = -l), r(typeof l == "number"), r(l < 67108864);
      for (var m = 0, y = 0; y < this.length; y++) {
        var x = (this.words[y] | 0) * l, O = (x & 67108863) + (m & 67108863);
        m >>= 26, m += x / 67108864 | 0, m += O >>> 26, this.words[y] = O & 67108863;
      }
      return m !== 0 && (this.words[y] = m, this.length++), g ? this.ineg() : this;
    }, i.prototype.muln = function(l) {
      return this.clone().imuln(l);
    }, i.prototype.sqr = function() {
      return this.mul(this);
    }, i.prototype.isqr = function() {
      return this.imul(this.clone());
    }, i.prototype.pow = function(l) {
      var g = L(l);
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
        var O = 0;
        for (x = 0; x < this.length; x++) {
          var C = this.words[x] & y, b = (this.words[x] | 0) - C << g;
          this.words[x] = b | O, O = C >>> 26 - g;
        }
        O && (this.words[x] = O, this.length++);
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
      var x = l % 26, O = Math.min((l - x) / 26, this.length), C = 67108863 ^ 67108863 >>> x << x, b = m;
      if (y -= O, y = Math.max(0, y), b) {
        for (var h = 0; h < O; h++)
          b.words[h] = this.words[h];
        b.length = O;
      }
      if (O !== 0)
        if (this.length > O)
          for (this.length -= O, h = 0; h < this.length; h++)
            this.words[h] = this.words[h + O];
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
      var O, C = 0;
      for (x = 0; x < l.length; x++) {
        O = (this.words[x + m] | 0) + C;
        var b = (l.words[x] | 0) * g;
        O -= b & 67108863, C = (O >> 26) - (b / 67108864 | 0), this.words[x + m] = O & 67108863;
      }
      for (; x < this.length - m; x++)
        O = (this.words[x + m] | 0) + C, C = O >> 26, this.words[x + m] = O & 67108863;
      if (C === 0)
        return this._strip();
      for (r(C === -1), C = 0, x = 0; x < this.length; x++)
        O = -(this.words[x] | 0) + C, C = O >> 26, this.words[x] = O & 67108863;
      return this.negative = 1, this._strip();
    }, i.prototype._wordDiv = function(l, g) {
      var m = this.length - l.length, y = this.clone(), x = l, O = x.words[x.length - 1] | 0, C = this._countBits(O);
      m = 26 - C, m !== 0 && (x = x.ushln(m), y.iushln(m), O = x.words[x.length - 1] | 0);
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
        for (V = Math.min(V / O | 0, 67108863), y._ishlnsubmul(x, V, Z); y.negative !== 0; )
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
      var y, x, O;
      return this.negative !== 0 && l.negative === 0 ? (O = this.neg().divmod(l, g), g !== "mod" && (y = O.div.neg()), g !== "div" && (x = O.mod.neg(), m && x.negative !== 0 && x.iadd(l)), {
        div: y,
        mod: x
      }) : this.negative === 0 && l.negative !== 0 ? (O = this.divmod(l.neg(), g), g !== "mod" && (y = O.div.neg()), {
        div: y,
        mod: O.mod
      }) : (this.negative & l.negative) !== 0 ? (O = this.neg().divmod(l.neg(), g), g !== "div" && (x = O.mod.neg(), m && x.negative !== 0 && x.isub(l)), {
        div: O.div,
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
      var m = g.div.negative !== 0 ? g.mod.isub(l) : g.mod, y = l.ushrn(1), x = l.andln(1), O = m.cmp(y);
      return O < 0 || x === 1 && O === 0 ? g.div : g.div.negative !== 0 ? g.div.isubn(1) : g.div.iaddn(1);
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
      for (var y = new i(1), x = new i(0), O = new i(0), C = new i(1), b = 0; g.isEven() && m.isEven(); )
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
            (O.isOdd() || C.isOdd()) && (O.iadd(h), C.isub(B)), O.iushrn(1), C.iushrn(1);
        g.cmp(m) >= 0 ? (g.isub(m), y.isub(O), x.isub(C)) : (m.isub(g), O.isub(y), C.isub(x));
      }
      return {
        a: O,
        b: C,
        gcd: m.iushln(b)
      };
    }, i.prototype._invmp = function(l) {
      r(l.negative === 0), r(!l.isZero());
      var g = this, m = l.clone();
      g.negative !== 0 ? g = g.umod(l) : g = g.clone();
      for (var y = new i(1), x = new i(0), O = m.clone(); g.cmpn(1) > 0 && m.cmpn(1) > 0; ) {
        for (var C = 0, b = 1; (g.words[0] & b) === 0 && C < 26; ++C, b <<= 1)
          ;
        if (C > 0)
          for (g.iushrn(C); C-- > 0; )
            y.isOdd() && y.iadd(O), y.iushrn(1);
        for (var h = 0, B = 1; (m.words[0] & B) === 0 && h < 26; ++h, B <<= 1)
          ;
        if (h > 0)
          for (m.iushrn(h); h-- > 0; )
            x.isOdd() && x.iadd(O), x.iushrn(1);
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
          var O = g;
          g = m, m = O;
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
      for (var x = y, O = m; x !== 0 && O < this.length; O++) {
        var C = this.words[O] | 0;
        C += x, x = C >>> 26, C &= 67108863, this.words[O] = C;
      }
      return x !== 0 && (this.words[O] = x, this.length++), this;
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
      return new ye(l);
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
    var k = {
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
    function Q() {
      W.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    o(Q, W), Q.prototype.split = function(l, g) {
      for (var m = 4194303, y = Math.min(l.length, 9), x = 0; x < y; x++)
        g.words[x] = l.words[x];
      if (g.length = y, l.length <= 9) {
        l.words[0] = 0, l.length = 1;
        return;
      }
      var O = l.words[9];
      for (g.words[g.length++] = O & m, x = 10; x < l.length; x++) {
        var C = l.words[x] | 0;
        l.words[x - 10] = (C & m) << 4 | O >>> 22, O = C;
      }
      O >>>= 22, l.words[x - 10] = O, O === 0 && l.length > 10 ? l.length -= 10 : l.length -= 9;
    }, Q.prototype.imulK = function(l) {
      l.words[l.length] = 0, l.words[l.length + 1] = 0, l.length += 2;
      for (var g = 0, m = 0; m < l.length; m++) {
        var y = l.words[m] | 0;
        g += y * 977, l.words[m] = g & 67108863, g = y * 64 + (g / 67108864 | 0);
      }
      return l.words[l.length - 1] === 0 && (l.length--, l.words[l.length - 1] === 0 && l.length--), l;
    };
    function j() {
      W.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    o(j, W);
    function pe() {
      W.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    o(pe, W);
    function Me() {
      W.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    o(Me, W), Me.prototype.imulK = function(l) {
      for (var g = 0, m = 0; m < l.length; m++) {
        var y = (l.words[m] | 0) * 19 + g, x = y & 67108863;
        y >>>= 26, l.words[m] = x, g = y;
      }
      return g !== 0 && (l.words[l.length++] = g), l;
    }, i._prime = function(l) {
      if (k[l])
        return k[l];
      var g;
      if (l === "k256")
        g = new Q();
      else if (l === "p224")
        g = new j();
      else if (l === "p192")
        g = new pe();
      else if (l === "p25519")
        g = new Me();
      else
        throw new Error("Unknown prime " + l);
      return k[l] = g, g;
    };
    function ye(M) {
      if (typeof M == "string") {
        var l = i._prime(M);
        this.m = l.p, this.prime = l;
      } else
        r(M.gtn(1), "modulus must be greater than 1"), this.m = M, this.prime = null;
    }
    ye.prototype._verify1 = function(l) {
      r(l.negative === 0, "red works only with positives"), r(l.red, "red works only with red numbers");
    }, ye.prototype._verify2 = function(l, g) {
      r((l.negative | g.negative) === 0, "red works only with positives"), r(
        l.red && l.red === g.red,
        "red works only with red numbers"
      );
    }, ye.prototype.imod = function(l) {
      return this.prime ? this.prime.ireduce(l)._forceRed(this) : (v(l, l.umod(this.m)._forceRed(this)), l);
    }, ye.prototype.neg = function(l) {
      return l.isZero() ? l.clone() : this.m.sub(l)._forceRed(this);
    }, ye.prototype.add = function(l, g) {
      this._verify2(l, g);
      var m = l.add(g);
      return m.cmp(this.m) >= 0 && m.isub(this.m), m._forceRed(this);
    }, ye.prototype.iadd = function(l, g) {
      this._verify2(l, g);
      var m = l.iadd(g);
      return m.cmp(this.m) >= 0 && m.isub(this.m), m;
    }, ye.prototype.sub = function(l, g) {
      this._verify2(l, g);
      var m = l.sub(g);
      return m.cmpn(0) < 0 && m.iadd(this.m), m._forceRed(this);
    }, ye.prototype.isub = function(l, g) {
      this._verify2(l, g);
      var m = l.isub(g);
      return m.cmpn(0) < 0 && m.iadd(this.m), m;
    }, ye.prototype.shl = function(l, g) {
      return this._verify1(l), this.imod(l.ushln(g));
    }, ye.prototype.imul = function(l, g) {
      return this._verify2(l, g), this.imod(l.imul(g));
    }, ye.prototype.mul = function(l, g) {
      return this._verify2(l, g), this.imod(l.mul(g));
    }, ye.prototype.isqr = function(l) {
      return this.imul(l, l.clone());
    }, ye.prototype.sqr = function(l) {
      return this.mul(l, l);
    }, ye.prototype.sqrt = function(l) {
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
      var O = new i(1).toRed(this), C = O.redNeg(), b = this.m.subn(1).iushrn(1), h = this.m.bitLength();
      for (h = new i(2 * h * h).toRed(this); this.pow(h, b).cmp(C) !== 0; )
        h.redIAdd(C);
      for (var B = this.pow(h, y), q = this.pow(l, y.addn(1).iushrn(1)), Z = this.pow(l, y), V = x; Z.cmp(O) !== 0; ) {
        for (var oe = Z, $ = 0; oe.cmp(O) !== 0; $++)
          oe = oe.redSqr();
        r($ < V);
        var se = this.pow(B, new i(1).iushln(V - $ - 1));
        q = q.redMul(se), B = se.redSqr(), Z = Z.redMul(B), V = $;
      }
      return q;
    }, ye.prototype.invm = function(l) {
      var g = l._invmp(this.m);
      return g.negative !== 0 ? (g.negative = 0, this.imod(g).redNeg()) : this.imod(g);
    }, ye.prototype.pow = function(l, g) {
      if (g.isZero())
        return new i(1).toRed(this);
      if (g.cmpn(1) === 0)
        return l.clone();
      var m = 4, y = new Array(1 << m);
      y[0] = new i(1).toRed(this), y[1] = l;
      for (var x = 2; x < y.length; x++)
        y[x] = this.mul(y[x - 1], l);
      var O = y[0], C = 0, b = 0, h = g.bitLength() % 26;
      for (h === 0 && (h = 26), x = g.length - 1; x >= 0; x--) {
        for (var B = g.words[x], q = h - 1; q >= 0; q--) {
          var Z = B >> q & 1;
          if (O !== y[0] && (O = this.sqr(O)), Z === 0 && C === 0) {
            b = 0;
            continue;
          }
          C <<= 1, C |= Z, b++, !(b !== m && (x !== 0 || q !== 0)) && (O = this.mul(O, y[C]), b = 0, C = 0);
        }
        h = 26;
      }
      return O;
    }, ye.prototype.convertTo = function(l) {
      var g = l.umod(this.m);
      return g === l ? g.clone() : g;
    }, ye.prototype.convertFrom = function(l) {
      var g = l.clone();
      return g.red = null, g;
    }, i.mont = function(l) {
      return new Be(l);
    };
    function Be(M) {
      ye.call(this, M), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new i(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    o(Be, ye), Be.prototype.convertTo = function(l) {
      return this.imod(l.ushln(this.shift));
    }, Be.prototype.convertFrom = function(l) {
      var g = this.imod(l.mul(this.rinv));
      return g.red = null, g;
    }, Be.prototype.imul = function(l, g) {
      if (l.isZero() || g.isZero())
        return l.words[0] = 0, l.length = 1, l;
      var m = l.imul(g), y = m.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), x = m.isub(y).iushrn(this.shift), O = x;
      return x.cmp(this.m) >= 0 ? O = x.isub(this.m) : x.cmpn(0) < 0 && (O = x.iadd(this.m)), O._forceRed(this);
    }, Be.prototype.mul = function(l, g) {
      if (l.isZero() || g.isZero())
        return new i(0)._forceRed(this);
      var m = l.mul(g), y = m.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), x = m.isub(y).iushrn(this.shift), O = x;
      return x.cmp(this.m) >= 0 ? O = x.isub(this.m) : x.cmpn(0) < 0 && (O = x.iadd(this.m)), O._forceRed(this);
    }, Be.prototype.invm = function(l) {
      var g = this.imod(l._invmp(this.m).mul(this.r2));
      return g._forceRed(this);
    };
  })(n, cn);
})(Ls);
const Ia = Ls.exports;
var Lr = { exports: {} }, Us = {};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(n) {
  const e = Qr, t = Ui, r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  n.Buffer = u, n.SlowBuffer = z, n.INSPECT_MAX_BYTES = 50;
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
      return E(f);
    }
    return d(f, s, a);
  }
  u.poolSize = 8192;
  function d(f, s, a) {
    if (typeof f == "string")
      return _(f, s);
    if (ArrayBuffer.isView(f))
      return R(f);
    if (f == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof f
      );
    if (je(f, ArrayBuffer) || f && je(f.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (je(f, SharedArrayBuffer) || f && je(f.buffer, SharedArrayBuffer)))
      return T(f, s, a);
    if (typeof f == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const p = f.valueOf && f.valueOf();
    if (p != null && p !== f)
      return u.from(p, s, a);
    const A = L(f);
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
  function E(f) {
    return w(f), c(f < 0 ? 0 : P(f) | 0);
  }
  u.allocUnsafe = function(f) {
    return E(f);
  }, u.allocUnsafeSlow = function(f) {
    return E(f);
  };
  function _(f, s) {
    if ((typeof s != "string" || s === "") && (s = "utf8"), !u.isEncoding(s))
      throw new TypeError("Unknown encoding: " + s);
    const a = U(f, s) | 0;
    let p = c(a);
    const A = p.write(f, s);
    return A !== a && (p = p.slice(0, A)), p;
  }
  function S(f) {
    const s = f.length < 0 ? 0 : P(f.length) | 0, a = c(s);
    for (let p = 0; p < s; p += 1)
      a[p] = f[p] & 255;
    return a;
  }
  function R(f) {
    if (je(f, Uint8Array)) {
      const s = new Uint8Array(f);
      return T(s.buffer, s.byteOffset, s.byteLength);
    }
    return S(f);
  }
  function T(f, s, a) {
    if (s < 0 || f.byteLength < s)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (f.byteLength < s + (a || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let p;
    return s === void 0 && a === void 0 ? p = new Uint8Array(f) : a === void 0 ? p = new Uint8Array(f, s) : p = new Uint8Array(f, s, a), Object.setPrototypeOf(p, u.prototype), p;
  }
  function L(f) {
    if (u.isBuffer(f)) {
      const s = P(f.length) | 0, a = c(s);
      return a.length === 0 || f.copy(a, 0, 0, s), a;
    }
    if (f.length !== void 0)
      return typeof f.length != "number" || ze(f.length) ? c(0) : S(f);
    if (f.type === "Buffer" && Array.isArray(f.data))
      return S(f.data);
  }
  function P(f) {
    if (f >= o)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
    return f | 0;
  }
  function z(f) {
    return +f != f && (f = 0), u.alloc(+f);
  }
  u.isBuffer = function(s) {
    return s != null && s._isBuffer === !0 && s !== u.prototype;
  }, u.compare = function(s, a) {
    if (je(s, Uint8Array) && (s = u.from(s, s.offset, s.byteLength)), je(a, Uint8Array) && (a = u.from(a, a.offset, a.byteLength)), !u.isBuffer(s) || !u.isBuffer(a))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (s === a)
      return 0;
    let p = s.length, A = a.length;
    for (let I = 0, N = Math.min(p, A); I < N; ++I)
      if (s[I] !== a[I]) {
        p = s[I], A = a[I];
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
    let I = 0;
    for (p = 0; p < s.length; ++p) {
      let N = s[p];
      if (je(N, Uint8Array))
        I + N.length > A.length ? (u.isBuffer(N) || (N = u.from(N)), N.copy(A, I)) : Uint8Array.prototype.set.call(
          A,
          N,
          I
        );
      else if (u.isBuffer(N))
        N.copy(A, I);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      I += N.length;
    }
    return A;
  };
  function U(f, s) {
    if (u.isBuffer(f))
      return f.length;
    if (ArrayBuffer.isView(f) || je(f, ArrayBuffer))
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
          return Fe(f).length;
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
            return p ? -1 : Fe(f).length;
          s = ("" + s).toLowerCase(), A = !0;
      }
  }
  u.byteLength = U;
  function F(f, s, a) {
    let p = !1;
    if ((s === void 0 || s < 0) && (s = 0), s > this.length || ((a === void 0 || a > this.length) && (a = this.length), a <= 0) || (a >>>= 0, s >>>= 0, a <= s))
      return "";
    for (f || (f = "utf8"); ; )
      switch (f) {
        case "hex":
          return O(this, s, a);
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
  function k(f, s, a) {
    const p = f[s];
    f[s] = f[a], f[a] = p;
  }
  u.prototype.swap16 = function() {
    const s = this.length;
    if (s % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let a = 0; a < s; a += 2)
      k(this, a, a + 1);
    return this;
  }, u.prototype.swap32 = function() {
    const s = this.length;
    if (s % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let a = 0; a < s; a += 4)
      k(this, a, a + 3), k(this, a + 1, a + 2);
    return this;
  }, u.prototype.swap64 = function() {
    const s = this.length;
    if (s % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let a = 0; a < s; a += 8)
      k(this, a, a + 7), k(this, a + 1, a + 6), k(this, a + 2, a + 5), k(this, a + 3, a + 4);
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
  }, r && (u.prototype[r] = u.prototype.inspect), u.prototype.compare = function(s, a, p, A, I) {
    if (je(s, Uint8Array) && (s = u.from(s, s.offset, s.byteLength)), !u.isBuffer(s))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof s
      );
    if (a === void 0 && (a = 0), p === void 0 && (p = s ? s.length : 0), A === void 0 && (A = 0), I === void 0 && (I = this.length), a < 0 || p > s.length || A < 0 || I > this.length)
      throw new RangeError("out of range index");
    if (A >= I && a >= p)
      return 0;
    if (A >= I)
      return -1;
    if (a >= p)
      return 1;
    if (a >>>= 0, p >>>= 0, A >>>= 0, I >>>= 0, this === s)
      return 0;
    let N = I - A, J = p - a;
    const ie = Math.min(N, J), ne = this.slice(A, I), ge = s.slice(a, p);
    for (let ee = 0; ee < ie; ++ee)
      if (ne[ee] !== ge[ee]) {
        N = ne[ee], J = ge[ee];
        break;
      }
    return N < J ? -1 : J < N ? 1 : 0;
  };
  function W(f, s, a, p, A) {
    if (f.length === 0)
      return -1;
    if (typeof a == "string" ? (p = a, a = 0) : a > 2147483647 ? a = 2147483647 : a < -2147483648 && (a = -2147483648), a = +a, ze(a) && (a = A ? 0 : f.length - 1), a < 0 && (a = f.length + a), a >= f.length) {
      if (A)
        return -1;
      a = f.length - 1;
    } else if (a < 0)
      if (A)
        a = 0;
      else
        return -1;
    if (typeof s == "string" && (s = u.from(s, p)), u.isBuffer(s))
      return s.length === 0 ? -1 : Q(f, s, a, p, A);
    if (typeof s == "number")
      return s = s & 255, typeof Uint8Array.prototype.indexOf == "function" ? A ? Uint8Array.prototype.indexOf.call(f, s, a) : Uint8Array.prototype.lastIndexOf.call(f, s, a) : Q(f, [s], a, p, A);
    throw new TypeError("val must be string, number or Buffer");
  }
  function Q(f, s, a, p, A) {
    let I = 1, N = f.length, J = s.length;
    if (p !== void 0 && (p = String(p).toLowerCase(), p === "ucs2" || p === "ucs-2" || p === "utf16le" || p === "utf-16le")) {
      if (f.length < 2 || s.length < 2)
        return -1;
      I = 2, N /= 2, J /= 2, a /= 2;
    }
    function ie(ge, ee) {
      return I === 1 ? ge[ee] : ge.readUInt16BE(ee * I);
    }
    let ne;
    if (A) {
      let ge = -1;
      for (ne = a; ne < N; ne++)
        if (ie(f, ne) === ie(s, ge === -1 ? 0 : ne - ge)) {
          if (ge === -1 && (ge = ne), ne - ge + 1 === J)
            return ge * I;
        } else
          ge !== -1 && (ne -= ne - ge), ge = -1;
    } else
      for (a + J > N && (a = N - J), ne = a; ne >= 0; ne--) {
        let ge = !0;
        for (let ee = 0; ee < J; ee++)
          if (ie(f, ne + ee) !== ie(s, ee)) {
            ge = !1;
            break;
          }
        if (ge)
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
  function j(f, s, a, p) {
    a = Number(a) || 0;
    const A = f.length - a;
    p ? (p = Number(p), p > A && (p = A)) : p = A;
    const I = s.length;
    p > I / 2 && (p = I / 2);
    let N;
    for (N = 0; N < p; ++N) {
      const J = parseInt(s.substr(N * 2, 2), 16);
      if (ze(J))
        return N;
      f[a + N] = J;
    }
    return N;
  }
  function pe(f, s, a, p) {
    return ke(Fe(s, f.length - a), f, a, p);
  }
  function Me(f, s, a, p) {
    return ke(qe(s), f, a, p);
  }
  function ye(f, s, a, p) {
    return ke(Ge(s), f, a, p);
  }
  function Be(f, s, a, p) {
    return ke(ir(s, f.length - a), f, a, p);
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
    const I = this.length - a;
    if ((p === void 0 || p > I) && (p = I), s.length > 0 && (p < 0 || a < 0) || a > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    A || (A = "utf8");
    let N = !1;
    for (; ; )
      switch (A) {
        case "hex":
          return j(this, s, a, p);
        case "utf8":
        case "utf-8":
          return pe(this, s, a, p);
        case "ascii":
        case "latin1":
        case "binary":
          return Me(this, s, a, p);
        case "base64":
          return ye(this, s, a, p);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Be(this, s, a, p);
        default:
          if (N)
            throw new TypeError("Unknown encoding: " + A);
          A = ("" + A).toLowerCase(), N = !0;
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
      const I = f[A];
      let N = null, J = I > 239 ? 4 : I > 223 ? 3 : I > 191 ? 2 : 1;
      if (A + J <= a) {
        let ie, ne, ge, ee;
        switch (J) {
          case 1:
            I < 128 && (N = I);
            break;
          case 2:
            ie = f[A + 1], (ie & 192) === 128 && (ee = (I & 31) << 6 | ie & 63, ee > 127 && (N = ee));
            break;
          case 3:
            ie = f[A + 1], ne = f[A + 2], (ie & 192) === 128 && (ne & 192) === 128 && (ee = (I & 15) << 12 | (ie & 63) << 6 | ne & 63, ee > 2047 && (ee < 55296 || ee > 57343) && (N = ee));
            break;
          case 4:
            ie = f[A + 1], ne = f[A + 2], ge = f[A + 3], (ie & 192) === 128 && (ne & 192) === 128 && (ge & 192) === 128 && (ee = (I & 15) << 18 | (ie & 63) << 12 | (ne & 63) << 6 | ge & 63, ee > 65535 && ee < 1114112 && (N = ee));
        }
      }
      N === null ? (N = 65533, J = 1) : N > 65535 && (N -= 65536, p.push(N >>> 10 & 1023 | 55296), N = 56320 | N & 1023), p.push(N), A += J;
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
  function O(f, s, a) {
    const p = f.length;
    (!s || s < 0) && (s = 0), (!a || a < 0 || a > p) && (a = p);
    let A = "";
    for (let I = s; I < a; ++I)
      A += Ye[f[I]];
    return A;
  }
  function C(f, s, a) {
    const p = f.slice(s, a);
    let A = "";
    for (let I = 0; I < p.length - 1; I += 2)
      A += String.fromCharCode(p[I] + p[I + 1] * 256);
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
    let A = this[s], I = 1, N = 0;
    for (; ++N < a && (I *= 256); )
      A += this[s + N] * I;
    return A;
  }, u.prototype.readUintBE = u.prototype.readUIntBE = function(s, a, p) {
    s = s >>> 0, a = a >>> 0, p || b(s, a, this.length);
    let A = this[s + --a], I = 1;
    for (; a > 0 && (I *= 256); )
      A += this[s + --a] * I;
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
    s = s >>> 0, He(s, "offset");
    const a = this[s], p = this[s + 7];
    (a === void 0 || p === void 0) && xe(s, this.length - 8);
    const A = a + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + this[++s] * 2 ** 24, I = this[++s] + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + p * 2 ** 24;
    return BigInt(A) + (BigInt(I) << BigInt(32));
  }), u.prototype.readBigUInt64BE = rt(function(s) {
    s = s >>> 0, He(s, "offset");
    const a = this[s], p = this[s + 7];
    (a === void 0 || p === void 0) && xe(s, this.length - 8);
    const A = a * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + this[++s], I = this[++s] * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + p;
    return (BigInt(A) << BigInt(32)) + BigInt(I);
  }), u.prototype.readIntLE = function(s, a, p) {
    s = s >>> 0, a = a >>> 0, p || b(s, a, this.length);
    let A = this[s], I = 1, N = 0;
    for (; ++N < a && (I *= 256); )
      A += this[s + N] * I;
    return I *= 128, A >= I && (A -= Math.pow(2, 8 * a)), A;
  }, u.prototype.readIntBE = function(s, a, p) {
    s = s >>> 0, a = a >>> 0, p || b(s, a, this.length);
    let A = a, I = 1, N = this[s + --A];
    for (; A > 0 && (I *= 256); )
      N += this[s + --A] * I;
    return I *= 128, N >= I && (N -= Math.pow(2, 8 * a)), N;
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
    s = s >>> 0, He(s, "offset");
    const a = this[s], p = this[s + 7];
    (a === void 0 || p === void 0) && xe(s, this.length - 8);
    const A = this[s + 4] + this[s + 5] * 2 ** 8 + this[s + 6] * 2 ** 16 + (p << 24);
    return (BigInt(A) << BigInt(32)) + BigInt(a + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + this[++s] * 2 ** 24);
  }), u.prototype.readBigInt64BE = rt(function(s) {
    s = s >>> 0, He(s, "offset");
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
  function h(f, s, a, p, A, I) {
    if (!u.isBuffer(f))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (s > A || s < I)
      throw new RangeError('"value" argument is out of bounds');
    if (a + p > f.length)
      throw new RangeError("Index out of range");
  }
  u.prototype.writeUintLE = u.prototype.writeUIntLE = function(s, a, p, A) {
    if (s = +s, a = a >>> 0, p = p >>> 0, !A) {
      const J = Math.pow(2, 8 * p) - 1;
      h(this, s, a, p, J, 0);
    }
    let I = 1, N = 0;
    for (this[a] = s & 255; ++N < p && (I *= 256); )
      this[a + N] = s / I & 255;
    return a + p;
  }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(s, a, p, A) {
    if (s = +s, a = a >>> 0, p = p >>> 0, !A) {
      const J = Math.pow(2, 8 * p) - 1;
      h(this, s, a, p, J, 0);
    }
    let I = p - 1, N = 1;
    for (this[a + I] = s & 255; --I >= 0 && (N *= 256); )
      this[a + I] = s / N & 255;
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
    let I = Number(s & BigInt(4294967295));
    f[a++] = I, I = I >> 8, f[a++] = I, I = I >> 8, f[a++] = I, I = I >> 8, f[a++] = I;
    let N = Number(s >> BigInt(32) & BigInt(4294967295));
    return f[a++] = N, N = N >> 8, f[a++] = N, N = N >> 8, f[a++] = N, N = N >> 8, f[a++] = N, a;
  }
  function q(f, s, a, p, A) {
    K(s, p, A, f, a, 7);
    let I = Number(s & BigInt(4294967295));
    f[a + 7] = I, I = I >> 8, f[a + 6] = I, I = I >> 8, f[a + 5] = I, I = I >> 8, f[a + 4] = I;
    let N = Number(s >> BigInt(32) & BigInt(4294967295));
    return f[a + 3] = N, N = N >> 8, f[a + 2] = N, N = N >> 8, f[a + 1] = N, N = N >> 8, f[a] = N, a + 8;
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
    let I = 0, N = 1, J = 0;
    for (this[a] = s & 255; ++I < p && (N *= 256); )
      s < 0 && J === 0 && this[a + I - 1] !== 0 && (J = 1), this[a + I] = (s / N >> 0) - J & 255;
    return a + p;
  }, u.prototype.writeIntBE = function(s, a, p, A) {
    if (s = +s, a = a >>> 0, !A) {
      const ie = Math.pow(2, 8 * p - 1);
      h(this, s, a, p, ie - 1, -ie);
    }
    let I = p - 1, N = 1, J = 0;
    for (this[a + I] = s & 255; --I >= 0 && (N *= 256); )
      s < 0 && J === 0 && this[a + I + 1] !== 0 && (J = 1), this[a + I] = (s / N >> 0) - J & 255;
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
  function Z(f, s, a, p, A, I) {
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
    const I = A - p;
    return this === s && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(a, p, A) : Uint8Array.prototype.set.call(
      s,
      this.subarray(p, A),
      a
    ), I;
  }, u.prototype.fill = function(s, a, p, A) {
    if (typeof s == "string") {
      if (typeof a == "string" ? (A = a, a = 0, p = this.length) : typeof p == "string" && (A = p, p = this.length), A !== void 0 && typeof A != "string")
        throw new TypeError("encoding must be a string");
      if (typeof A == "string" && !u.isEncoding(A))
        throw new TypeError("Unknown encoding: " + A);
      if (s.length === 1) {
        const N = s.charCodeAt(0);
        (A === "utf8" && N < 128 || A === "latin1") && (s = N);
      }
    } else
      typeof s == "number" ? s = s & 255 : typeof s == "boolean" && (s = Number(s));
    if (a < 0 || this.length < a || this.length < p)
      throw new RangeError("Out of range index");
    if (p <= a)
      return this;
    a = a >>> 0, p = p === void 0 ? this.length : p >>> 0, s || (s = 0);
    let I;
    if (typeof s == "number")
      for (I = a; I < p; ++I)
        this[I] = s;
    else {
      const N = u.isBuffer(s) ? s : u.from(s, A), J = N.length;
      if (J === 0)
        throw new TypeError('The value "' + s + '" is invalid for argument "value"');
      for (I = 0; I < p - a; ++I)
        this[I + a] = N[I % J];
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
    He(s, "offset"), (f[s] === void 0 || f[s + a] === void 0) && xe(s, f.length - (a + 1));
  }
  function K(f, s, a, p, A, I) {
    if (f > a || f < s) {
      const N = typeof s == "bigint" ? "n" : "";
      let J;
      throw I > 3 ? s === 0 || s === BigInt(0) ? J = `>= 0${N} and < 2${N} ** ${(I + 1) * 8}${N}` : J = `>= -(2${N} ** ${(I + 1) * 8 - 1}${N}) and < 2 ** ${(I + 1) * 8 - 1}${N}` : J = `>= ${s}${N} and <= ${a}${N}`, new $.ERR_OUT_OF_RANGE("value", J, f);
    }
    ve(p, A, I);
  }
  function He(f, s) {
    if (typeof f != "number")
      throw new $.ERR_INVALID_ARG_TYPE(s, "number", f);
  }
  function xe(f, s, a) {
    throw Math.floor(f) !== f ? (He(f, a), new $.ERR_OUT_OF_RANGE(a || "offset", "an integer", f)) : s < 0 ? new $.ERR_BUFFER_OUT_OF_BOUNDS() : new $.ERR_OUT_OF_RANGE(
      a || "offset",
      `>= ${a ? 1 : 0} and <= ${s}`,
      f
    );
  }
  const We = /[^+/0-9A-Za-z-_]/g;
  function rr(f) {
    if (f = f.split("=")[0], f = f.trim().replace(We, ""), f.length < 2)
      return "";
    for (; f.length % 4 !== 0; )
      f = f + "=";
    return f;
  }
  function Fe(f, s) {
    s = s || 1 / 0;
    let a;
    const p = f.length;
    let A = null;
    const I = [];
    for (let N = 0; N < p; ++N) {
      if (a = f.charCodeAt(N), a > 55295 && a < 57344) {
        if (!A) {
          if (a > 56319) {
            (s -= 3) > -1 && I.push(239, 191, 189);
            continue;
          } else if (N + 1 === p) {
            (s -= 3) > -1 && I.push(239, 191, 189);
            continue;
          }
          A = a;
          continue;
        }
        if (a < 56320) {
          (s -= 3) > -1 && I.push(239, 191, 189), A = a;
          continue;
        }
        a = (A - 55296 << 10 | a - 56320) + 65536;
      } else
        A && (s -= 3) > -1 && I.push(239, 191, 189);
      if (A = null, a < 128) {
        if ((s -= 1) < 0)
          break;
        I.push(a);
      } else if (a < 2048) {
        if ((s -= 2) < 0)
          break;
        I.push(
          a >> 6 | 192,
          a & 63 | 128
        );
      } else if (a < 65536) {
        if ((s -= 3) < 0)
          break;
        I.push(
          a >> 12 | 224,
          a >> 6 & 63 | 128,
          a & 63 | 128
        );
      } else if (a < 1114112) {
        if ((s -= 4) < 0)
          break;
        I.push(
          a >> 18 | 240,
          a >> 12 & 63 | 128,
          a >> 6 & 63 | 128,
          a & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return I;
  }
  function qe(f) {
    const s = [];
    for (let a = 0; a < f.length; ++a)
      s.push(f.charCodeAt(a) & 255);
    return s;
  }
  function ir(f, s) {
    let a, p, A;
    const I = [];
    for (let N = 0; N < f.length && !((s -= 2) < 0); ++N)
      a = f.charCodeAt(N), p = a >> 8, A = a % 256, I.push(A), I.push(p);
    return I;
  }
  function Ge(f) {
    return e.toByteArray(rr(f));
  }
  function ke(f, s, a, p) {
    let A;
    for (A = 0; A < p && !(A + a >= s.length || A >= f.length); ++A)
      s[A + a] = f[A];
    return A;
  }
  function je(f, s) {
    return f instanceof s || f != null && f.constructor != null && f.constructor.name != null && f.constructor.name === s.name;
  }
  function ze(f) {
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
})(Us);
(function(n, e) {
  var t = Us, r = t.Buffer;
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
})(Lr, Lr.exports);
var ri = Lr.exports.Buffer;
function Cf(n) {
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
  function v(S) {
    if ((Array.isArray(S) || S instanceof Uint8Array) && (S = ri.from(S)), !ri.isBuffer(S))
      throw new TypeError("Expected Buffer");
    if (S.length === 0)
      return "";
    for (var R = 0, T = 0, L = 0, P = S.length; L !== P && S[L] === 0; )
      L++, R++;
    for (var z = (P - L) * w + 1 >>> 0, U = new Uint8Array(z); L !== P; ) {
      for (var F = S[L], k = 0, W = z - 1; (F !== 0 || k < T) && W !== -1; W--, k++)
        F += 256 * U[W] >>> 0, U[W] = F % c >>> 0, F = F / c >>> 0;
      if (F !== 0)
        throw new Error("Non-zero carry");
      T = k, L++;
    }
    for (var Q = z - T; Q !== z && U[Q] === 0; )
      Q++;
    for (var j = u.repeat(R); Q < z; ++Q)
      j += n.charAt(U[Q]);
    return j;
  }
  function E(S) {
    if (typeof S != "string")
      throw new TypeError("Expected String");
    if (S.length === 0)
      return ri.alloc(0);
    for (var R = 0, T = 0, L = 0; S[R] === u; )
      T++, R++;
    for (var P = (S.length - R) * d + 1 >>> 0, z = new Uint8Array(P); S[R]; ) {
      var U = e[S.charCodeAt(R)];
      if (U === 255)
        return;
      for (var F = 0, k = P - 1; (U !== 0 || F < L) && k !== -1; k--, F++)
        U += c * z[k] >>> 0, z[k] = U % 256 >>> 0, U = U / 256 >>> 0;
      if (U !== 0)
        throw new Error("Non-zero carry");
      L = F, R++;
    }
    for (var W = P - L; W !== P && z[W] === 0; )
      W++;
    var Q = ri.allocUnsafe(T + (P - W));
    Q.fill(0, 0, T);
    for (var j = T; W !== P; )
      Q[j++] = z[W++];
    return Q;
  }
  function _(S) {
    var R = E(S);
    if (R)
      return R;
    throw new Error("Non-base" + c + " character");
  }
  return {
    encode: v,
    decodeUnsafe: E,
    decode: _
  };
}
var Tf = Cf, Rf = Tf, Nf = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", Ct = Rf(Nf);
const kf = (n, e, t) => n & e ^ ~n & t, Of = (n, e, t) => n & e ^ n & t ^ e & t, Lf = new Uint32Array([
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
]), Bn = new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), Mn = new Uint32Array(64);
class Uf extends Fc {
  constructor() {
    super(64, 32, 8, !1), this.A = Bn[0] | 0, this.B = Bn[1] | 0, this.C = Bn[2] | 0, this.D = Bn[3] | 0, this.E = Bn[4] | 0, this.F = Bn[5] | 0, this.G = Bn[6] | 0, this.H = Bn[7] | 0;
  }
  get() {
    const { A: e, B: t, C: r, D: o, E: i, F: c, G: u, H: d } = this;
    return [e, t, r, o, i, c, u, d];
  }
  set(e, t, r, o, i, c, u, d) {
    this.A = e | 0, this.B = t | 0, this.C = r | 0, this.D = o | 0, this.E = i | 0, this.F = c | 0, this.G = u | 0, this.H = d | 0;
  }
  process(e, t) {
    for (let E = 0; E < 16; E++, t += 4)
      Mn[E] = e.getUint32(t, !1);
    for (let E = 16; E < 64; E++) {
      const _ = Mn[E - 15], S = Mn[E - 2], R = hn(_, 7) ^ hn(_, 18) ^ _ >>> 3, T = hn(S, 17) ^ hn(S, 19) ^ S >>> 10;
      Mn[E] = T + Mn[E - 7] + R + Mn[E - 16] | 0;
    }
    let { A: r, B: o, C: i, D: c, E: u, F: d, G: w, H: v } = this;
    for (let E = 0; E < 64; E++) {
      const _ = hn(u, 6) ^ hn(u, 11) ^ hn(u, 25), S = v + _ + kf(u, d, w) + Lf[E] + Mn[E] | 0, T = (hn(r, 2) ^ hn(r, 13) ^ hn(r, 22)) + Of(r, o, i) | 0;
      v = w, w = d, d = u, u = c + S | 0, c = i, i = o, o = r, r = S + T | 0;
    }
    r = r + this.A | 0, o = o + this.B | 0, i = i + this.C | 0, c = c + this.D | 0, u = u + this.E | 0, d = d + this.F | 0, w = w + this.G | 0, v = v + this.H | 0, this.set(r, o, i, c, u, d, w, v);
  }
  roundClean() {
    Mn.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const hs = jr(() => new Uf());
var _t = {}, ii = Lr.exports.Buffer;
function Pf(n) {
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
  function v(S) {
    if ((Array.isArray(S) || S instanceof Uint8Array) && (S = ii.from(S)), !ii.isBuffer(S))
      throw new TypeError("Expected Buffer");
    if (S.length === 0)
      return "";
    for (var R = 0, T = 0, L = 0, P = S.length; L !== P && S[L] === 0; )
      L++, R++;
    for (var z = (P - L) * w + 1 >>> 0, U = new Uint8Array(z); L !== P; ) {
      for (var F = S[L], k = 0, W = z - 1; (F !== 0 || k < T) && W !== -1; W--, k++)
        F += 256 * U[W] >>> 0, U[W] = F % c >>> 0, F = F / c >>> 0;
      if (F !== 0)
        throw new Error("Non-zero carry");
      T = k, L++;
    }
    for (var Q = z - T; Q !== z && U[Q] === 0; )
      Q++;
    for (var j = u.repeat(R); Q < z; ++Q)
      j += n.charAt(U[Q]);
    return j;
  }
  function E(S) {
    if (typeof S != "string")
      throw new TypeError("Expected String");
    if (S.length === 0)
      return ii.alloc(0);
    for (var R = 0, T = 0, L = 0; S[R] === u; )
      T++, R++;
    for (var P = (S.length - R) * d + 1 >>> 0, z = new Uint8Array(P); S[R]; ) {
      var U = e[S.charCodeAt(R)];
      if (U === 255)
        return;
      for (var F = 0, k = P - 1; (U !== 0 || F < L) && k !== -1; k--, F++)
        U += c * z[k] >>> 0, z[k] = U % 256 >>> 0, U = U / 256 >>> 0;
      if (U !== 0)
        throw new Error("Non-zero carry");
      L = F, R++;
    }
    for (var W = P - L; W !== P && z[W] === 0; )
      W++;
    var Q = ii.allocUnsafe(T + (P - W));
    Q.fill(0, 0, T);
    for (var j = T; W !== P; )
      Q[j++] = z[W++];
    return Q;
  }
  function _(S) {
    var R = E(S);
    if (R)
      return R;
    throw new Error("Non-base" + c + " character");
  }
  return {
    encode: v,
    decodeUnsafe: E,
    decode: _
  };
}
var Df = Pf, Ff = Df, zf = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", Hf = Ff(zf);
function An(n, e, t) {
  return e <= n && n <= t;
}
function Di(n) {
  if (n === void 0)
    return {};
  if (n === Object(n))
    return n;
  throw TypeError("Could not convert argument to dictionary");
}
function Wf(n) {
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
function Gf(n) {
  for (var e = "", t = 0; t < n.length; ++t) {
    var r = n[t];
    r <= 65535 ? e += String.fromCharCode(r) : (r -= 65536, e += String.fromCharCode(
      (r >> 10) + 55296,
      (r & 1023) + 56320
    ));
  }
  return e;
}
var Ai = -1;
function Ps(n) {
  this.tokens = [].slice.call(n);
}
Ps.prototype = {
  endOfStream: function() {
    return !this.tokens.length;
  },
  read: function() {
    return this.tokens.length ? this.tokens.shift() : Ai;
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
var gr = -1;
function Mo(n, e) {
  if (n)
    throw TypeError("Decoder error");
  return e || 65533;
}
var vi = "utf-8";
function Ei(n, e) {
  if (!(this instanceof Ei))
    return new Ei(n, e);
  if (n = n !== void 0 ? String(n).toLowerCase() : vi, n !== vi)
    throw new Error("Encoding not supported. Only utf-8 is supported");
  e = Di(e), this._streaming = !1, this._BOMseen = !1, this._decoder = null, this._fatal = Boolean(e.fatal), this._ignoreBOM = Boolean(e.ignoreBOM), Object.defineProperty(this, "encoding", { value: "utf-8" }), Object.defineProperty(this, "fatal", { value: this._fatal }), Object.defineProperty(this, "ignoreBOM", { value: this._ignoreBOM });
}
Ei.prototype = {
  decode: function(e, t) {
    var r;
    typeof e == "object" && e instanceof ArrayBuffer ? r = new Uint8Array(e) : typeof e == "object" && "buffer" in e && e.buffer instanceof ArrayBuffer ? r = new Uint8Array(
      e.buffer,
      e.byteOffset,
      e.byteLength
    ) : r = new Uint8Array(0), t = Di(t), this._streaming || (this._decoder = new Qf({ fatal: this._fatal }), this._BOMseen = !1), this._streaming = Boolean(t.stream);
    for (var o = new Ps(r), i = [], c; !o.endOfStream() && (c = this._decoder.handler(o, o.read()), c !== gr); )
      c !== null && (Array.isArray(c) ? i.push.apply(i, c) : i.push(c));
    if (!this._streaming) {
      do {
        if (c = this._decoder.handler(o, o.read()), c === gr)
          break;
        c !== null && (Array.isArray(c) ? i.push.apply(i, c) : i.push(c));
      } while (!o.endOfStream());
      this._decoder = null;
    }
    return i.length && ["utf-8"].indexOf(this.encoding) !== -1 && !this._ignoreBOM && !this._BOMseen && (i[0] === 65279 ? (this._BOMseen = !0, i.shift()) : this._BOMseen = !0), Gf(i);
  }
};
function xi(n, e) {
  if (!(this instanceof xi))
    return new xi(n, e);
  if (n = n !== void 0 ? String(n).toLowerCase() : vi, n !== vi)
    throw new Error("Encoding not supported. Only utf-8 is supported");
  e = Di(e), this._streaming = !1, this._encoder = null, this._options = { fatal: Boolean(e.fatal) }, Object.defineProperty(this, "encoding", { value: "utf-8" });
}
xi.prototype = {
  encode: function(e, t) {
    e = e ? String(e) : "", t = Di(t), this._streaming || (this._encoder = new qf(this._options)), this._streaming = Boolean(t.stream);
    for (var r = [], o = new Ps(Wf(e)), i; !o.endOfStream() && (i = this._encoder.handler(o, o.read()), i !== gr); )
      Array.isArray(i) ? r.push.apply(r, i) : r.push(i);
    if (!this._streaming) {
      for (; i = this._encoder.handler(o, o.read()), i !== gr; )
        Array.isArray(i) ? r.push.apply(r, i) : r.push(i);
      this._encoder = null;
    }
    return new Uint8Array(r);
  }
};
function Qf(n) {
  var e = n.fatal, t = 0, r = 0, o = 0, i = 128, c = 191;
  this.handler = function(u, d) {
    if (d === Ai && o !== 0)
      return o = 0, Mo(e);
    if (d === Ai)
      return gr;
    if (o === 0) {
      if (An(d, 0, 127))
        return d;
      if (An(d, 194, 223))
        o = 1, t = d - 192;
      else if (An(d, 224, 239))
        d === 224 && (i = 160), d === 237 && (c = 159), o = 2, t = d - 224;
      else if (An(d, 240, 244))
        d === 240 && (i = 144), d === 244 && (c = 143), o = 3, t = d - 240;
      else
        return Mo(e);
      return t = t << 6 * o, null;
    }
    if (!An(d, i, c))
      return t = o = r = 0, i = 128, c = 191, u.prepend(d), Mo(e);
    if (i = 128, c = 191, r += 1, t += d - 128 << 6 * (o - r), r !== o)
      return null;
    var w = t;
    return t = o = r = 0, w;
  };
}
function qf(n) {
  n.fatal, this.handler = function(e, t) {
    if (t === Ai)
      return gr;
    if (An(t, 0, 127))
      return t;
    var r, o;
    An(t, 128, 2047) ? (r = 1, o = 192) : An(t, 2048, 65535) ? (r = 2, o = 224) : An(t, 65536, 1114111) && (r = 3, o = 240);
    for (var i = [(t >> 6 * r) + o]; r > 0; ) {
      var c = t >> 6 * (r - 1);
      i.push(128 | c & 63), r -= 1;
    }
    return i;
  };
}
const jf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TextEncoder: xi,
  TextDecoder: Ei
}, Symbol.toStringTag, { value: "Module" })), Yf = /* @__PURE__ */ Li(jf);
var Kf = cn && cn.__createBinding || (Object.create ? function(n, e, t, r) {
  r === void 0 && (r = t), Object.defineProperty(n, r, { enumerable: !0, get: function() {
    return e[t];
  } });
} : function(n, e, t, r) {
  r === void 0 && (r = t), n[r] = e[t];
}), Vf = cn && cn.__setModuleDefault || (Object.create ? function(n, e) {
  Object.defineProperty(n, "default", { enumerable: !0, value: e });
} : function(n, e) {
  n.default = e;
}), wn = cn && cn.__decorate || function(n, e, t, r) {
  var o = arguments.length, i = o < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, t) : r, c;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(n, e, t, r);
  else
    for (var u = n.length - 1; u >= 0; u--)
      (c = n[u]) && (i = (o < 3 ? c(i) : o > 3 ? c(e, t, i) : c(e, t)) || i);
  return o > 3 && i && Object.defineProperty(e, t, i), i;
}, Zf = cn && cn.__importStar || function(n) {
  if (n && n.__esModule)
    return n;
  var e = {};
  if (n != null)
    for (var t in n)
      t !== "default" && Object.hasOwnProperty.call(n, t) && Kf(e, n, t);
  return Vf(e, n), e;
}, Yc = cn && cn.__importDefault || function(n) {
  return n && n.__esModule ? n : { default: n };
};
Object.defineProperty(_t, "__esModule", { value: !0 });
var Kc = _t.deserializeUnchecked = eu = _t.deserialize = $c = _t.serialize = _t.BinaryReader = _t.BinaryWriter = _t.BorshError = _t.baseDecode = _t.baseEncode = void 0;
const Rn = Yc(Ls.exports), Vc = Yc(Hf), Xf = Zf(Yf), Jf = typeof TextDecoder != "function" ? Xf.TextDecoder : TextDecoder, $f = new Jf("utf-8", { fatal: !0 });
function eh(n) {
  return typeof n == "string" && (n = Buffer.from(n, "utf8")), Vc.default.encode(Buffer.from(n));
}
_t.baseEncode = eh;
function th(n) {
  return Buffer.from(Vc.default.decode(n));
}
_t.baseDecode = th;
const _o = 1024;
class Dt extends Error {
  constructor(e) {
    super(e), this.fieldPath = [], this.originalMessage = e;
  }
  addToFieldPath(e) {
    this.fieldPath.splice(0, 0, e), this.message = this.originalMessage + ": " + this.fieldPath.join(".");
  }
}
_t.BorshError = Dt;
class Zc {
  constructor() {
    this.buf = Buffer.alloc(_o), this.length = 0;
  }
  maybeResize() {
    this.buf.length < 16 + this.length && (this.buf = Buffer.concat([this.buf, Buffer.alloc(_o)]));
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
    this.maybeResize(), this.writeBuffer(Buffer.from(new Rn.default(e).toArray("le", 8)));
  }
  writeU128(e) {
    this.maybeResize(), this.writeBuffer(Buffer.from(new Rn.default(e).toArray("le", 16)));
  }
  writeU256(e) {
    this.maybeResize(), this.writeBuffer(Buffer.from(new Rn.default(e).toArray("le", 32)));
  }
  writeU512(e) {
    this.maybeResize(), this.writeBuffer(Buffer.from(new Rn.default(e).toArray("le", 64)));
  }
  writeBuffer(e) {
    this.buf = Buffer.concat([
      Buffer.from(this.buf.subarray(0, this.length)),
      e,
      Buffer.alloc(_o)
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
_t.BinaryWriter = Zc;
function mn(n, e, t) {
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
    return new Rn.default(e, "le");
  }
  readU128() {
    const e = this.readBuffer(16);
    return new Rn.default(e, "le");
  }
  readU256() {
    const e = this.readBuffer(32);
    return new Rn.default(e, "le");
  }
  readU512() {
    const e = this.readBuffer(64);
    return new Rn.default(e, "le");
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
      return $f.decode(t);
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
wn([
  mn
], Yt.prototype, "readU8", null);
wn([
  mn
], Yt.prototype, "readU16", null);
wn([
  mn
], Yt.prototype, "readU32", null);
wn([
  mn
], Yt.prototype, "readU64", null);
wn([
  mn
], Yt.prototype, "readU128", null);
wn([
  mn
], Yt.prototype, "readU256", null);
wn([
  mn
], Yt.prototype, "readU512", null);
wn([
  mn
], Yt.prototype, "readString", null);
wn([
  mn
], Yt.prototype, "readFixedArray", null);
wn([
  mn
], Yt.prototype, "readArray", null);
_t.BinaryReader = Yt;
function Xc(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
function zn(n, e, t, r, o) {
  try {
    if (typeof r == "string")
      o[`write${Xc(r)}`](t);
    else if (r instanceof Array)
      if (typeof r[0] == "number") {
        if (t.length !== r[0])
          throw new Dt(`Expecting byte array of length ${r[0]}, but got ${t.length} bytes`);
        o.writeFixedArray(t);
      } else if (r.length === 2 && typeof r[1] == "number") {
        if (t.length !== r[1])
          throw new Dt(`Expecting byte array of length ${r[1]}, but got ${t.length} bytes`);
        for (let i = 0; i < r[1]; i++)
          zn(n, null, t[i], r[0], o);
      } else
        o.writeArray(t, (i) => {
          zn(n, e, i, r[0], o);
        });
    else if (r.kind !== void 0)
      switch (r.kind) {
        case "option": {
          t == null ? o.writeU8(0) : (o.writeU8(1), zn(n, e, t, r.type, o));
          break;
        }
        case "map": {
          o.writeU32(t.size), t.forEach((i, c) => {
            zn(n, e, c, r.key, o), zn(n, e, i, r.value, o);
          });
          break;
        }
        default:
          throw new Dt(`FieldType ${r} unrecognized`);
      }
    else
      Jc(n, t, o);
  } catch (i) {
    throw i instanceof Dt && i.addToFieldPath(e), i;
  }
}
function Jc(n, e, t) {
  if (typeof e.borshSerialize == "function") {
    e.borshSerialize(t);
    return;
  }
  const r = n.get(e.constructor);
  if (!r)
    throw new Dt(`Class ${e.constructor.name} is missing in schema`);
  if (r.kind === "struct")
    r.fields.map(([o, i]) => {
      zn(n, o, e[o], i, t);
    });
  else if (r.kind === "enum") {
    const o = e[r.field];
    for (let i = 0; i < r.values.length; ++i) {
      const [c, u] = r.values[i];
      if (c === o) {
        t.writeU8(i), zn(n, c, e[c], u, t);
        break;
      }
    }
  } else
    throw new Dt(`Unexpected schema kind: ${r.kind} for ${e.constructor.name}`);
}
function nh(n, e, t = Zc) {
  const r = new t();
  return Jc(n, e, r), r.toArray();
}
var $c = _t.serialize = nh;
function Hn(n, e, t, r) {
  try {
    if (typeof t == "string")
      return r[`read${Xc(t)}`]();
    if (t instanceof Array) {
      if (typeof t[0] == "number")
        return r.readFixedArray(t[0]);
      if (typeof t[1] == "number") {
        const o = [];
        for (let i = 0; i < t[1]; i++)
          o.push(Hn(n, null, t[0], r));
        return o;
      } else
        return r.readArray(() => Hn(n, e, t[0], r));
    }
    if (t.kind === "option")
      return r.readU8() ? Hn(n, e, t.type, r) : void 0;
    if (t.kind === "map") {
      let o = /* @__PURE__ */ new Map();
      const i = r.readU32();
      for (let c = 0; c < i; c++) {
        const u = Hn(n, e, t.key, r), d = Hn(n, e, t.value, r);
        o.set(u, d);
      }
      return o;
    }
    return Ds(n, t, r);
  } catch (o) {
    throw o instanceof Dt && o.addToFieldPath(e), o;
  }
}
function Ds(n, e, t) {
  if (typeof e.borshDeserialize == "function")
    return e.borshDeserialize(t);
  const r = n.get(e);
  if (!r)
    throw new Dt(`Class ${e.name} is missing in schema`);
  if (r.kind === "struct") {
    const o = {};
    for (const [i, c] of n.get(e).fields)
      o[i] = Hn(n, i, c, t);
    return new e(o);
  }
  if (r.kind === "enum") {
    const o = t.readU8();
    if (o >= r.values.length)
      throw new Dt(`Enum index: ${o} is out of range`);
    const [i, c] = r.values[o], u = Hn(n, i, c, t);
    return new e({ [i]: u });
  }
  throw new Dt(`Unexpected schema kind: ${r.kind} for ${e.constructor.name}`);
}
function rh(n, e, t, r = Yt) {
  const o = new r(t), i = Ds(n, e, o);
  if (o.offset < t.length)
    throw new Dt(`Unexpected ${t.length - o.offset} bytes after deserialized data`);
  return i;
}
var eu = _t.deserialize = rh;
function ih(n, e, t, r = Yt) {
  const o = new r(t);
  return Ds(n, e, o);
}
Kc = _t.deserializeUnchecked = ih;
var H = {};
Object.defineProperty(H, "__esModule", { value: !0 });
H.s16 = H.s8 = H.nu64be = H.u48be = H.u40be = H.u32be = H.u24be = H.u16be = Mt = H.nu64 = H.u48 = H.u40 = de = H.u32 = H.u24 = Zt = H.u16 = Ne = H.u8 = Gn = H.offset = H.greedy = H.Constant = H.UTF8 = H.CString = H.Blob = H.Boolean = H.BitField = H.BitStructure = H.VariantLayout = H.Union = H.UnionLayoutDiscriminator = H.UnionDiscriminator = H.Structure = H.Sequence = H.DoubleBE = H.Double = H.FloatBE = H.Float = H.NearInt64BE = H.NearInt64 = H.NearUInt64BE = H.NearUInt64 = H.IntBE = H.Int = H.UIntBE = H.UInt = H.OffsetLayout = H.GreedyCount = H.ExternalLayout = H.bindConstructorLayout = H.nameWithProperty = H.Layout = H.uint8ArrayToBuffer = H.checkUint8Array = void 0;
H.constant = H.utf8 = H.cstr = $e = H.blob = H.unionLayoutDiscriminator = H.union = Ft = H.seq = H.bits = ue = H.struct = H.f64be = H.f64 = H.f32be = H.f32 = H.ns64be = H.s48be = H.s40be = H.s32be = H.s24be = H.s16be = Qt = H.ns64 = H.s48 = H.s40 = H.s32 = H.s24 = void 0;
const Fs = Us;
function br(n) {
  if (!(n instanceof Uint8Array))
    throw new TypeError("b must be a Uint8Array");
}
H.checkUint8Array = br;
function Re(n) {
  return br(n), Fs.Buffer.from(n.buffer, n.byteOffset, n.length);
}
H.uint8ArrayToBuffer = Re;
class De {
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
H.Layout = De;
function zs(n, e) {
  return e.property ? n + "[" + e.property + "]" : n;
}
H.nameWithProperty = zs;
function oh(n, e) {
  if (typeof n != "function")
    throw new TypeError("Class must be constructor");
  if (Object.prototype.hasOwnProperty.call(n, "layout_"))
    throw new Error("Class is already bound to a layout");
  if (!(e && e instanceof De))
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
H.bindConstructorLayout = oh;
class zt extends De {
  isCount() {
    throw new Error("ExternalLayout is abstract");
  }
}
H.ExternalLayout = zt;
class tu extends zt {
  constructor(e = 1, t) {
    if (!Number.isInteger(e) || 0 >= e)
      throw new TypeError("elementSpan must be a (positive) integer");
    super(-1, t), this.elementSpan = e;
  }
  isCount() {
    return !0;
  }
  decode(e, t = 0) {
    br(e);
    const r = e.length - t;
    return Math.floor(r / this.elementSpan);
  }
  encode(e, t, r) {
    return 0;
  }
}
H.GreedyCount = tu;
class Hs extends zt {
  constructor(e, t = 0, r) {
    if (!(e instanceof De))
      throw new TypeError("layout must be a Layout");
    if (!Number.isInteger(t))
      throw new TypeError("offset must be integer or undefined");
    super(e.span, r || e.property), this.layout = e, this.offset = t;
  }
  isCount() {
    return this.layout instanceof tn || this.layout instanceof sn;
  }
  decode(e, t = 0) {
    return this.layout.decode(e, t + this.offset);
  }
  encode(e, t, r = 0) {
    return this.layout.encode(e, t, r + this.offset);
  }
}
H.OffsetLayout = Hs;
class tn extends De {
  constructor(e, t) {
    if (super(e, t), 6 < this.span)
      throw new RangeError("span must not exceed 6 bytes");
  }
  decode(e, t = 0) {
    return Re(e).readUIntLE(t, this.span);
  }
  encode(e, t, r = 0) {
    return Re(t).writeUIntLE(e, r, this.span), this.span;
  }
}
H.UInt = tn;
class sn extends De {
  constructor(e, t) {
    if (super(e, t), 6 < this.span)
      throw new RangeError("span must not exceed 6 bytes");
  }
  decode(e, t = 0) {
    return Re(e).readUIntBE(t, this.span);
  }
  encode(e, t, r = 0) {
    return Re(t).writeUIntBE(e, r, this.span), this.span;
  }
}
H.UIntBE = sn;
class $n extends De {
  constructor(e, t) {
    if (super(e, t), 6 < this.span)
      throw new RangeError("span must not exceed 6 bytes");
  }
  decode(e, t = 0) {
    return Re(e).readIntLE(t, this.span);
  }
  encode(e, t, r = 0) {
    return Re(t).writeIntLE(e, r, this.span), this.span;
  }
}
H.Int = $n;
class Ar extends De {
  constructor(e, t) {
    if (super(e, t), 6 < this.span)
      throw new RangeError("span must not exceed 6 bytes");
  }
  decode(e, t = 0) {
    return Re(e).readIntBE(t, this.span);
  }
  encode(e, t, r = 0) {
    return Re(t).writeIntBE(e, r, this.span), this.span;
  }
}
H.IntBE = Ar;
const ds = Math.pow(2, 32);
function Fi(n) {
  const e = Math.floor(n / ds), t = n - e * ds;
  return { hi32: e, lo32: t };
}
function zi(n, e) {
  return n * ds + e;
}
class nu extends De {
  constructor(e) {
    super(8, e);
  }
  decode(e, t = 0) {
    const r = Re(e), o = r.readUInt32LE(t), i = r.readUInt32LE(t + 4);
    return zi(i, o);
  }
  encode(e, t, r = 0) {
    const o = Fi(e), i = Re(t);
    return i.writeUInt32LE(o.lo32, r), i.writeUInt32LE(o.hi32, r + 4), 8;
  }
}
H.NearUInt64 = nu;
class ru extends De {
  constructor(e) {
    super(8, e);
  }
  decode(e, t = 0) {
    const r = Re(e), o = r.readUInt32BE(t), i = r.readUInt32BE(t + 4);
    return zi(o, i);
  }
  encode(e, t, r = 0) {
    const o = Fi(e), i = Re(t);
    return i.writeUInt32BE(o.hi32, r), i.writeUInt32BE(o.lo32, r + 4), 8;
  }
}
H.NearUInt64BE = ru;
class iu extends De {
  constructor(e) {
    super(8, e);
  }
  decode(e, t = 0) {
    const r = Re(e), o = r.readUInt32LE(t), i = r.readInt32LE(t + 4);
    return zi(i, o);
  }
  encode(e, t, r = 0) {
    const o = Fi(e), i = Re(t);
    return i.writeUInt32LE(o.lo32, r), i.writeInt32LE(o.hi32, r + 4), 8;
  }
}
H.NearInt64 = iu;
class ou extends De {
  constructor(e) {
    super(8, e);
  }
  decode(e, t = 0) {
    const r = Re(e), o = r.readInt32BE(t), i = r.readUInt32BE(t + 4);
    return zi(o, i);
  }
  encode(e, t, r = 0) {
    const o = Fi(e), i = Re(t);
    return i.writeInt32BE(o.hi32, r), i.writeUInt32BE(o.lo32, r + 4), 8;
  }
}
H.NearInt64BE = ou;
class su extends De {
  constructor(e) {
    super(4, e);
  }
  decode(e, t = 0) {
    return Re(e).readFloatLE(t);
  }
  encode(e, t, r = 0) {
    return Re(t).writeFloatLE(e, r), 4;
  }
}
H.Float = su;
class au extends De {
  constructor(e) {
    super(4, e);
  }
  decode(e, t = 0) {
    return Re(e).readFloatBE(t);
  }
  encode(e, t, r = 0) {
    return Re(t).writeFloatBE(e, r), 4;
  }
}
H.FloatBE = au;
class cu extends De {
  constructor(e) {
    super(8, e);
  }
  decode(e, t = 0) {
    return Re(e).readDoubleLE(t);
  }
  encode(e, t, r = 0) {
    return Re(t).writeDoubleLE(e, r), 8;
  }
}
H.Double = cu;
class uu extends De {
  constructor(e) {
    super(8, e);
  }
  decode(e, t = 0) {
    return Re(e).readDoubleBE(t);
  }
  encode(e, t, r = 0) {
    return Re(t).writeDoubleBE(e, r), 8;
  }
}
H.DoubleBE = uu;
class lu extends De {
  constructor(e, t, r) {
    if (!(e instanceof De))
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
H.Sequence = lu;
class fu extends De {
  constructor(e, t, r) {
    if (!(Array.isArray(e) && e.reduce((i, c) => i && c instanceof De, !0)))
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
    br(e);
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
H.Structure = fu;
class Ws {
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
H.UnionDiscriminator = Ws;
class Si extends Ws {
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
H.UnionLayoutDiscriminator = Si;
class Gs extends De {
  constructor(e, t, r) {
    let o;
    if (e instanceof tn || e instanceof sn)
      o = new Si(new Hs(e));
    else if (e instanceof zt && e.isCount())
      o = new Si(e);
    else if (e instanceof Ws)
      o = e;
    else
      throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
    if (t === void 0 && (t = null), !(t === null || t instanceof De))
      throw new TypeError("defaultLayout must be null or a Layout");
    if (t !== null) {
      if (0 > t.span)
        throw new Error("defaultLayout must have constant span");
      t.property === void 0 && (t = t.replicate("content"));
    }
    let i = -1;
    t && (i = t.span, 0 <= i && (e instanceof tn || e instanceof sn) && (i += o.layout.span)), super(i, r), this.discriminator = o, this.usesPrefixDiscriminator = e instanceof tn || e instanceof sn, this.defaultLayout = t, this.registry = {};
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
    const o = new hu(this, e, t, r);
    return this.registry[e] = o, o;
  }
  getVariant(e, t = 0) {
    let r;
    return e instanceof Uint8Array ? r = this.discriminator.decode(e, t) : r = e, this.registry[r];
  }
}
H.Union = Gs;
class hu extends De {
  constructor(e, t, r, o) {
    if (!(e instanceof Gs))
      throw new TypeError("union must be a Union");
    if (!Number.isInteger(t) || 0 > t)
      throw new TypeError("variant must be a (non-negative) integer");
    if (typeof r == "string" && o === void 0 && (o = r, r = null), r) {
      if (!(r instanceof De))
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
H.VariantLayout = hu;
function sr(n) {
  return 0 > n && (n += 4294967296), n;
}
class Qs extends De {
  constructor(e, t, r) {
    if (!(e instanceof tn || e instanceof sn))
      throw new TypeError("word must be a UInt or UIntBE layout");
    if (typeof t == "string" && r === void 0 && (r = t, t = !1), 4 < e.span)
      throw new RangeError("word cannot exceed 32 bits");
    super(e.span, r), this.word = e, this.msb = !!t, this.fields = [];
    let o = 0;
    this._packedSetValue = function(i) {
      return o = sr(i), this;
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
    const r = new qs(this, e, t);
    return this.fields.push(r), r;
  }
  addBoolean(e) {
    const t = new du(this, e);
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
H.BitStructure = Qs;
class qs {
  constructor(e, t, r) {
    if (!(e instanceof Qs))
      throw new TypeError("container must be a BitStructure");
    if (!Number.isInteger(t) || 0 >= t)
      throw new TypeError("bits must be positive integer");
    const o = 8 * e.span, i = e.fields.reduce((c, u) => c + u.bits, 0);
    if (t + i > o)
      throw new Error("bits too long for span remainder (" + (o - i) + " of " + o + " remain)");
    this.container = e, this.bits = t, this.valueMask = (1 << t) - 1, t === 32 && (this.valueMask = 4294967295), this.start = i, this.container.msb && (this.start = o - i - t), this.wordMask = sr(this.valueMask << this.start), this.property = r;
  }
  decode(e, t) {
    const r = this.container._packedGetValue();
    return sr(r & this.wordMask) >>> this.start;
  }
  encode(e) {
    if (typeof e != "number" || !Number.isInteger(e) || e !== sr(e & this.valueMask))
      throw new TypeError(zs("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
    const t = this.container._packedGetValue(), r = sr(e << this.start);
    this.container._packedSetValue(sr(t & ~this.wordMask) | r);
  }
}
H.BitField = qs;
class du extends qs {
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
H.Boolean = du;
class pu extends De {
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
    return 0 > r && (r = this.length.decode(e, t)), Re(e).slice(t, t + r);
  }
  encode(e, t, r) {
    let o = this.length;
    if (this.length instanceof zt && (o = e.length), !(e instanceof Uint8Array && o === e.length))
      throw new TypeError(zs("Blob.encode", this) + " requires (length " + o + ") Uint8Array as src");
    if (r + o > t.length)
      throw new RangeError("encoding overruns Uint8Array");
    const i = Re(e);
    return Re(t).write(i.toString("hex"), r, o, "hex"), this.length instanceof zt && this.length.encode(o, t, r), o;
  }
}
H.Blob = pu;
class gu extends De {
  constructor(e) {
    super(-1, e);
  }
  getSpan(e, t = 0) {
    br(e);
    let r = t;
    for (; r < e.length && e[r] !== 0; )
      r += 1;
    return 1 + r - t;
  }
  decode(e, t = 0) {
    const r = this.getSpan(e, t);
    return Re(e).slice(t, t + r - 1).toString("utf-8");
  }
  encode(e, t, r = 0) {
    typeof e != "string" && (e = String(e));
    const o = Fs.Buffer.from(e, "utf8"), i = o.length;
    if (r + i > t.length)
      throw new RangeError("encoding overruns Buffer");
    const c = Re(t);
    return o.copy(c, r), c[r + i] = 0, i + 1;
  }
}
H.CString = gu;
class yu extends De {
  constructor(e, t) {
    if (typeof e == "string" && t === void 0 && (t = e, e = void 0), e === void 0)
      e = -1;
    else if (!Number.isInteger(e))
      throw new TypeError("maxSpan must be an integer");
    super(-1, t), this.maxSpan = e;
  }
  getSpan(e, t = 0) {
    return br(e), e.length - t;
  }
  decode(e, t = 0) {
    const r = this.getSpan(e, t);
    if (0 <= this.maxSpan && this.maxSpan < r)
      throw new RangeError("text length exceeds maxSpan");
    return Re(e).slice(t, t + r).toString("utf-8");
  }
  encode(e, t, r = 0) {
    typeof e != "string" && (e = String(e));
    const o = Fs.Buffer.from(e, "utf8"), i = o.length;
    if (0 <= this.maxSpan && this.maxSpan < i)
      throw new RangeError("text length exceeds maxSpan");
    if (r + i > t.length)
      throw new RangeError("encoding overruns Buffer");
    return o.copy(Re(t), r), i;
  }
}
H.UTF8 = yu;
class wu extends De {
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
H.Constant = wu;
H.greedy = (n, e) => new tu(n, e);
var Gn = H.offset = (n, e, t) => new Hs(n, e, t), Ne = H.u8 = (n) => new tn(1, n), Zt = H.u16 = (n) => new tn(2, n);
H.u24 = (n) => new tn(3, n);
var de = H.u32 = (n) => new tn(4, n);
H.u40 = (n) => new tn(5, n);
H.u48 = (n) => new tn(6, n);
var Mt = H.nu64 = (n) => new nu(n);
H.u16be = (n) => new sn(2, n);
H.u24be = (n) => new sn(3, n);
H.u32be = (n) => new sn(4, n);
H.u40be = (n) => new sn(5, n);
H.u48be = (n) => new sn(6, n);
H.nu64be = (n) => new ru(n);
H.s8 = (n) => new $n(1, n);
H.s16 = (n) => new $n(2, n);
H.s24 = (n) => new $n(3, n);
H.s32 = (n) => new $n(4, n);
H.s40 = (n) => new $n(5, n);
H.s48 = (n) => new $n(6, n);
var Qt = H.ns64 = (n) => new iu(n);
H.s16be = (n) => new Ar(2, n);
H.s24be = (n) => new Ar(3, n);
H.s32be = (n) => new Ar(4, n);
H.s40be = (n) => new Ar(5, n);
H.s48be = (n) => new Ar(6, n);
H.ns64be = (n) => new ou(n);
H.f32 = (n) => new su(n);
H.f32be = (n) => new au(n);
H.f64 = (n) => new cu(n);
H.f64be = (n) => new uu(n);
var ue = H.struct = (n, e, t) => new fu(n, e, t);
H.bits = (n, e, t) => new Qs(n, e, t);
var Ft = H.seq = (n, e, t) => new lu(n, e, t);
H.union = (n, e, t) => new Gs(n, e, t);
H.unionLayoutDiscriminator = (n, e) => new Si(n, e);
var $e = H.blob = (n, e) => new pu(n, e);
H.cstr = (n) => new gu(n);
H.utf8 = (n, e) => new yu(n, e);
H.constant = (n, e) => new wu(n, e);
var Vr = {};
Object.defineProperty(Vr, "__esModule", { value: !0 });
function sh(n) {
  {
    const e = Buffer.from(n);
    e.reverse();
    const t = e.toString("hex");
    return t.length === 0 ? BigInt(0) : BigInt(`0x${t}`);
  }
}
var ah = Vr.toBigIntLE = sh;
function ch(n) {
  {
    const e = n.toString("hex");
    return e.length === 0 ? BigInt(0) : BigInt(`0x${e}`);
  }
}
Vr.toBigIntBE = ch;
function uh(n, e) {
  {
    const t = n.toString(16), r = Buffer.from(t.padStart(e * 2, "0").slice(0, e * 2), "hex");
    return r.reverse(), r;
  }
}
var lh = Vr.toBufferLE = uh;
function fh(n, e) {
  {
    const t = n.toString(16);
    return Buffer.from(t.padStart(e * 2, "0").slice(0, e * 2), "hex");
  }
}
Vr.toBufferBE = fh;
class hh extends TypeError {
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
function dh(n) {
  return Ln(n) && typeof n[Symbol.iterator] == "function";
}
function Ln(n) {
  return typeof n == "object" && n != null;
}
function un(n) {
  return typeof n == "string" ? JSON.stringify(n) : "" + n;
}
function ph(n) {
  const {
    done: e,
    value: t
  } = n.next();
  return e ? void 0 : t;
}
function gh(n, e, t, r) {
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
function* Ba(n, e, t, r) {
  dh(n) || (n = [n]);
  for (const o of n) {
    const i = gh(o, e, t, r);
    i && (yield i);
  }
}
function* js(n, e, t = {}) {
  const {
    path: r = [],
    branch: o = [n],
    coerce: i = !1,
    mask: c = !1
  } = t, u = {
    path: r,
    branch: o
  };
  if (i && (n = e.coercer(n, u), c && e.type !== "type" && Ln(e.schema) && Ln(n) && !Array.isArray(n)))
    for (const w in n)
      e.schema[w] === void 0 && delete n[w];
  let d = !0;
  for (const w of e.validator(n, u))
    d = !1, yield [w, void 0];
  for (let [w, v, E] of e.entries(n, u)) {
    const _ = js(v, E, {
      path: w === void 0 ? r : [...r, w],
      branch: w === void 0 ? o : [...o, v],
      coerce: i,
      mask: c
    });
    for (const S of _)
      S[0] ? (d = !1, yield [S[0], void 0]) : i && (v = S[1], w === void 0 ? n = v : n instanceof Map ? n.set(w, v) : n instanceof Set ? n.add(v) : Ln(n) && (n[w] = v));
  }
  if (d)
    for (const w of e.refiner(n, u))
      d = !1, yield [w, void 0];
  d && (yield [void 0, n]);
}
class bn {
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
      return Ba(v, w, this, d);
    } : this.validator = () => [], i ? this.refiner = (d, w) => {
      const v = i(d, w);
      return Ba(v, w, this, d);
    } : this.refiner = () => [];
  }
  assert(e) {
    return yh(e, this);
  }
  create(e) {
    return re(e, this);
  }
  is(e) {
    return mu(e, this);
  }
  mask(e) {
    return wh(e, this);
  }
  validate(e, t = {}) {
    return Zr(e, this, t);
  }
}
function yh(n, e) {
  const t = Zr(n, e);
  if (t[0])
    throw t[0];
}
function re(n, e) {
  const t = Zr(n, e, {
    coerce: !0
  });
  if (t[0])
    throw t[0];
  return t[1];
}
function wh(n, e) {
  const t = Zr(n, e, {
    coerce: !0,
    mask: !0
  });
  if (t[0])
    throw t[0];
  return t[1];
}
function mu(n, e) {
  return !Zr(n, e)[0];
}
function Zr(n, e, t = {}) {
  const r = js(n, e, t), o = ph(r);
  if (o[0])
    return [new hh(o[0], function* () {
      for (const c of r)
        c[0] && (yield c[0]);
    }), void 0];
  {
    const i = o[1];
    return [void 0, i];
  }
}
function er(n, e) {
  return new bn({
    type: n,
    schema: null,
    validator: e
  });
}
function mh() {
  return er("any", () => !0);
}
function ce(n) {
  return new bn({
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
function En() {
  return er("boolean", (n) => typeof n == "boolean");
}
function Ys(n) {
  return er("instance", (e) => e instanceof n || "Expected a `" + n.name + "` instance, but received: " + un(e));
}
function Je(n) {
  const e = un(n), t = typeof n;
  return new bn({
    type: "literal",
    schema: t === "string" || t === "number" || t === "boolean" ? n : null,
    validator(r) {
      return r === n || "Expected the literal `" + e + "`, but received: " + un(r);
    }
  });
}
function bh() {
  return er("never", () => !1);
}
function he(n) {
  return new bn({
    ...n,
    validator: (e, t) => e === null || n.validator(e, t),
    refiner: (e, t) => e === null || n.refiner(e, t)
  });
}
function G() {
  return er("number", (n) => typeof n == "number" && !isNaN(n) || "Expected a number, but received: " + un(n));
}
function Ee(n) {
  return new bn({
    ...n,
    validator: (e, t) => e === void 0 || n.validator(e, t),
    refiner: (e, t) => e === void 0 || n.refiner(e, t)
  });
}
function bu(n, e) {
  return new bn({
    type: "record",
    schema: null,
    *entries(t) {
      if (Ln(t))
        for (const r in t) {
          const o = t[r];
          yield [r, r, n], yield [r, o, e];
        }
    },
    validator(t) {
      return Ln(t) || "Expected an object, but received: " + un(t);
    }
  });
}
function te() {
  return er("string", (n) => typeof n == "string" || "Expected a string, but received: " + un(n));
}
function Ks(n) {
  const e = bh();
  return new bn({
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
  return new bn({
    type: "type",
    schema: n,
    *entries(t) {
      if (Ln(t))
        for (const r of e)
          yield [r, t[r], n[r]];
    },
    validator(t) {
      return Ln(t) || "Expected an object, but received: " + un(t);
    }
  });
}
function Wt(n) {
  const e = n.map((t) => t.type).join(" | ");
  return new bn({
    type: "union",
    schema: null,
    validator(t, r) {
      const o = [];
      for (const i of n) {
        const [...c] = js(t, i, r), [u] = c;
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
function Xr() {
  return er("unknown", () => !0);
}
function Jr(n, e, t) {
  return new bn({
    ...n,
    coercer: (r, o) => mu(r, e) ? n.coercer(t(r, o), o) : n.coercer(r, o)
  });
}
var Vs = {}, Hi = { exports: {} };
(function(n) {
  function e(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }
  n.exports = e, n.exports.__esModule = !0, n.exports.default = n.exports;
})(Hi);
var Co = { exports: {} }, Ma;
function Zs() {
  return Ma || (Ma = 1, function(n) {
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
  }(Co)), Co.exports;
}
var To = { exports: {} }, _a;
function Xs() {
  return _a || (_a = 1, function(n) {
    function e(t, r) {
      if (!(t instanceof r))
        throw new TypeError("Cannot call a class as a function");
    }
    n.exports = e, n.exports.__esModule = !0, n.exports.default = n.exports;
  }(To)), To.exports;
}
var Ro = { exports: {} }, No = { exports: {} }, Ca;
function Ah() {
  return Ca || (Ca = 1, function(n) {
    function e(t, r) {
      return n.exports = e = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, c) {
        return i.__proto__ = c, i;
      }, n.exports.__esModule = !0, n.exports.default = n.exports, e(t, r);
    }
    n.exports = e, n.exports.__esModule = !0, n.exports.default = n.exports;
  }(No)), No.exports;
}
var Ta;
function Js() {
  return Ta || (Ta = 1, function(n) {
    var e = Ah();
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
  }(Ro)), Ro.exports;
}
var ko = { exports: {} }, Oo = { exports: {} }, Ra;
function $s() {
  return Ra || (Ra = 1, function(n) {
    function e(t) {
      return n.exports = e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
        return typeof r;
      } : function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, n.exports.__esModule = !0, n.exports.default = n.exports, e(t);
    }
    n.exports = e, n.exports.__esModule = !0, n.exports.default = n.exports;
  }(Oo)), Oo.exports;
}
var Lo = { exports: {} }, Na;
function vh() {
  return Na || (Na = 1, function(n) {
    function e(t) {
      if (t === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }
    n.exports = e, n.exports.__esModule = !0, n.exports.default = n.exports;
  }(Lo)), Lo.exports;
}
var ka;
function ea() {
  return ka || (ka = 1, function(n) {
    var e = $s().default, t = vh();
    function r(o, i) {
      if (i && (e(i) === "object" || typeof i == "function"))
        return i;
      if (i !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return t(o);
    }
    n.exports = r, n.exports.__esModule = !0, n.exports.default = n.exports;
  }(ko)), ko.exports;
}
var Uo = { exports: {} }, Oa;
function ta() {
  return Oa || (Oa = 1, function(n) {
    function e(t) {
      return n.exports = e = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, n.exports.__esModule = !0, n.exports.default = n.exports, e(t);
    }
    n.exports = e, n.exports.__esModule = !0, n.exports.default = n.exports;
  }(Uo)), Uo.exports;
}
var Po = {}, Wi = { exports: {} };
(function(n) {
  var e = Object.prototype.hasOwnProperty, t = "~";
  function r() {
  }
  Object.create && (r.prototype = /* @__PURE__ */ Object.create(null), new r().__proto__ || (t = !1));
  function o(d, w, v) {
    this.fn = d, this.context = w, this.once = v || !1;
  }
  function i(d, w, v, E, _) {
    if (typeof v != "function")
      throw new TypeError("The listener must be a function");
    var S = new o(v, E || d, _), R = t ? t + w : w;
    return d._events[R] ? d._events[R].fn ? d._events[R] = [d._events[R], S] : d._events[R].push(S) : (d._events[R] = S, d._eventsCount++), d;
  }
  function c(d, w) {
    --d._eventsCount === 0 ? d._events = new r() : delete d._events[w];
  }
  function u() {
    this._events = new r(), this._eventsCount = 0;
  }
  u.prototype.eventNames = function() {
    var w = [], v, E;
    if (this._eventsCount === 0)
      return w;
    for (E in v = this._events)
      e.call(v, E) && w.push(t ? E.slice(1) : E);
    return Object.getOwnPropertySymbols ? w.concat(Object.getOwnPropertySymbols(v)) : w;
  }, u.prototype.listeners = function(w) {
    var v = t ? t + w : w, E = this._events[v];
    if (!E)
      return [];
    if (E.fn)
      return [E.fn];
    for (var _ = 0, S = E.length, R = new Array(S); _ < S; _++)
      R[_] = E[_].fn;
    return R;
  }, u.prototype.listenerCount = function(w) {
    var v = t ? t + w : w, E = this._events[v];
    return E ? E.fn ? 1 : E.length : 0;
  }, u.prototype.emit = function(w, v, E, _, S, R) {
    var T = t ? t + w : w;
    if (!this._events[T])
      return !1;
    var L = this._events[T], P = arguments.length, z, U;
    if (L.fn) {
      switch (L.once && this.removeListener(w, L.fn, void 0, !0), P) {
        case 1:
          return L.fn.call(L.context), !0;
        case 2:
          return L.fn.call(L.context, v), !0;
        case 3:
          return L.fn.call(L.context, v, E), !0;
        case 4:
          return L.fn.call(L.context, v, E, _), !0;
        case 5:
          return L.fn.call(L.context, v, E, _, S), !0;
        case 6:
          return L.fn.call(L.context, v, E, _, S, R), !0;
      }
      for (U = 1, z = new Array(P - 1); U < P; U++)
        z[U - 1] = arguments[U];
      L.fn.apply(L.context, z);
    } else {
      var F = L.length, k;
      for (U = 0; U < F; U++)
        switch (L[U].once && this.removeListener(w, L[U].fn, void 0, !0), P) {
          case 1:
            L[U].fn.call(L[U].context);
            break;
          case 2:
            L[U].fn.call(L[U].context, v);
            break;
          case 3:
            L[U].fn.call(L[U].context, v, E);
            break;
          case 4:
            L[U].fn.call(L[U].context, v, E, _);
            break;
          default:
            if (!z)
              for (k = 1, z = new Array(P - 1); k < P; k++)
                z[k - 1] = arguments[k];
            L[U].fn.apply(L[U].context, z);
        }
    }
    return !0;
  }, u.prototype.on = function(w, v, E) {
    return i(this, w, v, E, !1);
  }, u.prototype.once = function(w, v, E) {
    return i(this, w, v, E, !0);
  }, u.prototype.removeListener = function(w, v, E, _) {
    var S = t ? t + w : w;
    if (!this._events[S])
      return this;
    if (!v)
      return c(this, S), this;
    var R = this._events[S];
    if (R.fn)
      R.fn === v && (!_ || R.once) && (!E || R.context === E) && c(this, S);
    else {
      for (var T = 0, L = [], P = R.length; T < P; T++)
        (R[T].fn !== v || _ && !R[T].once || E && R[T].context !== E) && L.push(R[T]);
      L.length ? this._events[S] = L.length === 1 ? L[0] : L : c(this, S);
    }
    return this;
  }, u.prototype.removeAllListeners = function(w) {
    var v;
    return w ? (v = t ? t + w : w, this._events[v] && c(this, v)) : (this._events = new r(), this._eventsCount = 0), this;
  }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = t, u.EventEmitter = u, n.exports = u;
})(Wi);
const Eh = Wi.exports;
var La;
function xh() {
  return La || (La = 1, function(n) {
    var e = Hi.exports;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = E;
    var t = e(Xs()), r = e(Zs()), o = e(Js()), i = e(ea()), c = e(ta()), u = Wi.exports;
    function d(_) {
      var S = w();
      return function() {
        var T = (0, c.default)(_), L;
        if (S) {
          var P = (0, c.default)(this).constructor;
          L = Reflect.construct(T, arguments, P);
        } else
          L = T.apply(this, arguments);
        return (0, i.default)(this, L);
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
      (0, o.default)(R, _);
      var S = d(R);
      function R(T, L, P) {
        var z;
        return (0, t.default)(this, R), z = S.call(this), z.socket = new window.WebSocket(T, P), z.socket.onopen = function() {
          return z.emit("open");
        }, z.socket.onmessage = function(U) {
          return z.emit("message", U.data);
        }, z.socket.onerror = function(U) {
          return z.emit("error", U);
        }, z.socket.onclose = function(U) {
          z.emit("close", U.code, U.reason);
        }, z;
      }
      return (0, r.default)(R, [{
        key: "send",
        value: function(L, P, z) {
          var U = z || P;
          try {
            this.socket.send(L), U();
          } catch (F) {
            U(F);
          }
        }
      }, {
        key: "close",
        value: function(L, P) {
          this.socket.close(L, P);
        }
      }, {
        key: "addEventListener",
        value: function(L, P, z) {
          this.socket.addEventListener(L, P, z);
        }
      }]), R;
    }(u.EventEmitter);
    function E(_, S) {
      return new v(_, S);
    }
  }(Po)), Po;
}
var Do = {}, Fo = { exports: {} }, Ua;
function Sh() {
  return Ua || (Ua = 1, function(n) {
    var e = $s().default;
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
      function E(M, l, g, m) {
        var y = l && l.prototype instanceof R ? l : R, x = Object.create(y.prototype), O = new Me(m || []);
        return x._invoke = function(C, b, h) {
          var B = "suspendedStart";
          return function(q, Z) {
            if (B === "executing")
              throw new Error("Generator is already running");
            if (B === "completed") {
              if (q === "throw")
                throw Z;
              return Be();
            }
            for (h.method = q, h.arg = Z; ; ) {
              var V = h.delegate;
              if (V) {
                var oe = Q(V, h);
                if (oe) {
                  if (oe === S)
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
                if (B = h.done ? "completed" : "suspendedYield", $.arg === S)
                  continue;
                return {
                  value: $.arg,
                  done: h.done
                };
              }
              $.type === "throw" && (B = "completed", h.method = "throw", h.arg = $.arg);
            }
          };
        }(M, g, O), x;
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
      r.wrap = E;
      var S = {};
      function R() {
      }
      function T() {
      }
      function L() {
      }
      var P = {};
      v(P, u, function() {
        return this;
      });
      var z = Object.getPrototypeOf, U = z && z(z(ye([])));
      U && U !== o && i.call(U, u) && (P = U);
      var F = L.prototype = R.prototype = Object.create(P);
      function k(M) {
        ["next", "throw", "return"].forEach(function(l) {
          v(M, l, function(g) {
            return this._invoke(l, g);
          });
        });
      }
      function W(M, l) {
        function g(y, x, O, C) {
          var b = _(M[y], M, x);
          if (b.type !== "throw") {
            var h = b.arg, B = h.value;
            return B && e(B) == "object" && i.call(B, "__await") ? l.resolve(B.__await).then(function(q) {
              g("next", q, O, C);
            }, function(q) {
              g("throw", q, O, C);
            }) : l.resolve(B).then(function(q) {
              h.value = q, O(h);
            }, function(q) {
              return g("throw", q, O, C);
            });
          }
          C(b.arg);
        }
        var m;
        this._invoke = function(y, x) {
          function O() {
            return new l(function(C, b) {
              g(y, x, C, b);
            });
          }
          return m = m ? m.then(O, O) : O();
        };
      }
      function Q(M, l) {
        var g = M.iterator[l.method];
        if (g === void 0) {
          if (l.delegate = null, l.method === "throw") {
            if (M.iterator.return && (l.method = "return", l.arg = void 0, Q(M, l), l.method === "throw"))
              return S;
            l.method = "throw", l.arg = new TypeError("The iterator does not provide a 'throw' method");
          }
          return S;
        }
        var m = _(g, M.iterator, l.arg);
        if (m.type === "throw")
          return l.method = "throw", l.arg = m.arg, l.delegate = null, S;
        var y = m.arg;
        return y ? y.done ? (l[M.resultName] = y.value, l.next = M.nextLoc, l.method !== "return" && (l.method = "next", l.arg = void 0), l.delegate = null, S) : y : (l.method = "throw", l.arg = new TypeError("iterator result is not an object"), l.delegate = null, S);
      }
      function j(M) {
        var l = {
          tryLoc: M[0]
        };
        1 in M && (l.catchLoc = M[1]), 2 in M && (l.finallyLoc = M[2], l.afterLoc = M[3]), this.tryEntries.push(l);
      }
      function pe(M) {
        var l = M.completion || {};
        l.type = "normal", delete l.arg, M.completion = l;
      }
      function Me(M) {
        this.tryEntries = [{
          tryLoc: "root"
        }], M.forEach(j, this), this.reset(!0);
      }
      function ye(M) {
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
          next: Be
        };
      }
      function Be() {
        return {
          value: void 0,
          done: !0
        };
      }
      return T.prototype = L, v(F, "constructor", L), v(L, "constructor", T), T.displayName = v(L, w, "GeneratorFunction"), r.isGeneratorFunction = function(M) {
        var l = typeof M == "function" && M.constructor;
        return !!l && (l === T || (l.displayName || l.name) === "GeneratorFunction");
      }, r.mark = function(M) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(M, L) : (M.__proto__ = L, v(M, w, "GeneratorFunction")), M.prototype = Object.create(F), M;
      }, r.awrap = function(M) {
        return {
          __await: M
        };
      }, k(W.prototype), v(W.prototype, d, function() {
        return this;
      }), r.AsyncIterator = W, r.async = function(M, l, g, m, y) {
        y === void 0 && (y = Promise);
        var x = new W(E(M, l, g, m), y);
        return r.isGeneratorFunction(l) ? x : x.next().then(function(O) {
          return O.done ? O.value : x.next();
        });
      }, k(F), v(F, w, "Generator"), v(F, u, function() {
        return this;
      }), v(F, "toString", function() {
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
      }, r.values = ye, Me.prototype = {
        constructor: Me,
        reset: function(l) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(pe), !l)
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
            return O.type = "throw", O.arg = l, g.next = h, B && (g.method = "next", g.arg = void 0), !!B;
          }
          for (var y = this.tryEntries.length - 1; y >= 0; --y) {
            var x = this.tryEntries[y], O = x.completion;
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
          var O = x ? x.completion : {};
          return O.type = l, O.arg = g, x ? (this.method = "next", this.next = x.finallyLoc, S) : this.complete(O);
        },
        complete: function(l, g) {
          if (l.type === "throw")
            throw l.arg;
          return l.type === "break" || l.type === "continue" ? this.next = l.arg : l.type === "return" ? (this.rval = this.arg = l.arg, this.method = "return", this.next = "end") : l.type === "normal" && g && (this.next = g), S;
        },
        finish: function(l) {
          for (var g = this.tryEntries.length - 1; g >= 0; --g) {
            var m = this.tryEntries[g];
            if (m.finallyLoc === l)
              return this.complete(m.completion, m.afterLoc), pe(m), S;
          }
        },
        catch: function(l) {
          for (var g = this.tryEntries.length - 1; g >= 0; --g) {
            var m = this.tryEntries[g];
            if (m.tryLoc === l) {
              var y = m.completion;
              if (y.type === "throw") {
                var x = y.arg;
                pe(m);
              }
              return x;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function(l, g, m) {
          return this.delegate = {
            iterator: ye(l),
            resultName: g,
            nextLoc: m
          }, this.method === "next" && (this.arg = void 0), S;
        }
      }, r;
    }
    n.exports = t, n.exports.__esModule = !0, n.exports.default = n.exports;
  }(Fo)), Fo.exports;
}
var zo, Pa;
function Ih() {
  if (Pa)
    return zo;
  Pa = 1;
  var n = Sh()();
  zo = n;
  try {
    regeneratorRuntime = n;
  } catch {
    typeof globalThis == "object" ? globalThis.regeneratorRuntime = n : Function("r", "regeneratorRuntime = r")(n);
  }
  return zo;
}
var Ho = { exports: {} }, Da;
function Bh() {
  return Da || (Da = 1, function(n) {
    function e(r, o, i, c, u, d, w) {
      try {
        var v = r[d](w), E = v.value;
      } catch (_) {
        i(_);
        return;
      }
      v.done ? o(E) : Promise.resolve(E).then(c, u);
    }
    function t(r) {
      return function() {
        var o = this, i = arguments;
        return new Promise(function(c, u) {
          var d = r.apply(o, i);
          function w(E) {
            e(d, c, u, w, v, "next", E);
          }
          function v(E) {
            e(d, c, u, w, v, "throw", E);
          }
          w(void 0);
        });
      };
    }
    n.exports = t, n.exports.__esModule = !0, n.exports.default = n.exports;
  }(Ho)), Ho.exports;
}
var Fa;
function Mh() {
  return Fa || (Fa = 1, function(n) {
    var e = Hi.exports;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var t = e(Ih()), r = e(Bh()), o = e($s()), i = e(Xs()), c = e(Zs()), u = e(Js()), d = e(ea()), w = e(ta()), v = Wi.exports;
    function E(T) {
      var L = _();
      return function() {
        var z = (0, w.default)(T), U;
        if (L) {
          var F = (0, w.default)(this).constructor;
          U = Reflect.construct(z, arguments, F);
        } else
          U = z.apply(this, arguments);
        return (0, d.default)(this, U);
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
    var S = function(T, L) {
      var P = {};
      for (var z in T)
        Object.prototype.hasOwnProperty.call(T, z) && L.indexOf(z) < 0 && (P[z] = T[z]);
      if (T != null && typeof Object.getOwnPropertySymbols == "function")
        for (var U = 0, z = Object.getOwnPropertySymbols(T); U < z.length; U++)
          L.indexOf(z[U]) < 0 && Object.prototype.propertyIsEnumerable.call(T, z[U]) && (P[z[U]] = T[z[U]]);
      return P;
    }, R = /* @__PURE__ */ function(T) {
      (0, u.default)(P, T);
      var L = E(P);
      function P(z) {
        var U, F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "ws://localhost:8080", k = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, W = arguments.length > 3 ? arguments[3] : void 0;
        (0, i.default)(this, P);
        var Q = k.autoconnect, j = Q === void 0 ? !0 : Q, pe = k.reconnect, Me = pe === void 0 ? !0 : pe, ye = k.reconnect_interval, Be = ye === void 0 ? 1e3 : ye, M = k.max_reconnects, l = M === void 0 ? 5 : M, g = S(k, ["autoconnect", "reconnect", "reconnect_interval", "max_reconnects"]);
        return U = L.call(this), U.webSocketFactory = z, U.queue = {}, U.rpc_id = 0, U.address = F, U.autoconnect = j, U.ready = !1, U.reconnect = Me, U.reconnect_interval = Be, U.max_reconnects = l, U.rest_options = g, U.current_reconnects = 0, U.generate_request_id = W || function() {
          return ++U.rpc_id;
        }, U.autoconnect && U._connect(U.address, Object.assign({
          autoconnect: U.autoconnect,
          reconnect: U.reconnect,
          reconnect_interval: U.reconnect_interval,
          max_reconnects: U.max_reconnects
        }, U.rest_options)), U;
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
        value: function(U, F, k, W) {
          var Q = this;
          return !W && (0, o.default)(k) === "object" && (W = k, k = null), new Promise(function(j, pe) {
            if (!Q.ready)
              return pe(new Error("socket not ready"));
            var Me = Q.generate_request_id(U, F), ye = {
              jsonrpc: "2.0",
              method: U,
              params: F || null,
              id: Me
            };
            Q.socket.send(JSON.stringify(ye), W, function(Be) {
              if (Be)
                return pe(Be);
              Q.queue[Me] = {
                promise: [j, pe]
              }, k && (Q.queue[Me].timeout = setTimeout(function() {
                delete Q.queue[Me], pe(new Error("reply timeout"));
              }, k));
            });
          });
        }
      }, {
        key: "login",
        value: function() {
          var z = (0, r.default)(/* @__PURE__ */ t.default.mark(function F(k) {
            var W;
            return t.default.wrap(function(j) {
              for (; ; )
                switch (j.prev = j.next) {
                  case 0:
                    return j.next = 2, this.call("rpc.login", k);
                  case 2:
                    if (W = j.sent, W) {
                      j.next = 5;
                      break;
                    }
                    throw new Error("authentication failed");
                  case 5:
                    return j.abrupt("return", W);
                  case 6:
                  case "end":
                    return j.stop();
                }
            }, F, this);
          }));
          function U(F) {
            return z.apply(this, arguments);
          }
          return U;
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
          function U() {
            return z.apply(this, arguments);
          }
          return U;
        }()
      }, {
        key: "notify",
        value: function(U, F) {
          var k = this;
          return new Promise(function(W, Q) {
            if (!k.ready)
              return Q(new Error("socket not ready"));
            var j = {
              jsonrpc: "2.0",
              method: U,
              params: F || null
            };
            k.socket.send(JSON.stringify(j), function(pe) {
              if (pe)
                return Q(pe);
              W();
            });
          });
        }
      }, {
        key: "subscribe",
        value: function() {
          var z = (0, r.default)(/* @__PURE__ */ t.default.mark(function F(k) {
            var W;
            return t.default.wrap(function(j) {
              for (; ; )
                switch (j.prev = j.next) {
                  case 0:
                    return typeof k == "string" && (k = [k]), j.next = 3, this.call("rpc.on", k);
                  case 3:
                    if (W = j.sent, !(typeof k == "string" && W[k] !== "ok")) {
                      j.next = 6;
                      break;
                    }
                    throw new Error("Failed subscribing to an event '" + k + "' with: " + W[k]);
                  case 6:
                    return j.abrupt("return", W);
                  case 7:
                  case "end":
                    return j.stop();
                }
            }, F, this);
          }));
          function U(F) {
            return z.apply(this, arguments);
          }
          return U;
        }()
      }, {
        key: "unsubscribe",
        value: function() {
          var z = (0, r.default)(/* @__PURE__ */ t.default.mark(function F(k) {
            var W;
            return t.default.wrap(function(j) {
              for (; ; )
                switch (j.prev = j.next) {
                  case 0:
                    return typeof k == "string" && (k = [k]), j.next = 3, this.call("rpc.off", k);
                  case 3:
                    if (W = j.sent, !(typeof k == "string" && W[k] !== "ok")) {
                      j.next = 6;
                      break;
                    }
                    throw new Error("Failed unsubscribing from an event with: " + W);
                  case 6:
                    return j.abrupt("return", W);
                  case 7:
                  case "end":
                    return j.stop();
                }
            }, F, this);
          }));
          function U(F) {
            return z.apply(this, arguments);
          }
          return U;
        }()
      }, {
        key: "close",
        value: function(U, F) {
          this.socket.close(U || 1e3, F);
        }
      }, {
        key: "_connect",
        value: function(U, F) {
          var k = this;
          this.socket = this.webSocketFactory(U, F), this.socket.addEventListener("open", function() {
            k.ready = !0, k.emit("open"), k.current_reconnects = 0;
          }), this.socket.addEventListener("message", function(W) {
            var Q = W.data;
            Q instanceof ArrayBuffer && (Q = Buffer.from(Q).toString());
            try {
              Q = JSON.parse(Q);
            } catch {
              return;
            }
            if (Q.notification && k.listeners(Q.notification).length) {
              if (!Object.keys(Q.params).length)
                return k.emit(Q.notification);
              var j = [Q.notification];
              if (Q.params.constructor === Object)
                j.push(Q.params);
              else
                for (var pe = 0; pe < Q.params.length; pe++)
                  j.push(Q.params[pe]);
              return Promise.resolve().then(function() {
                k.emit.apply(k, j);
              });
            }
            if (!k.queue[Q.id])
              return Q.method && Q.params ? Promise.resolve().then(function() {
                k.emit(Q.method, Q.params);
              }) : void 0;
            "error" in Q == "result" in Q && k.queue[Q.id].promise[1](new Error('Server response malformed. Response must include either "result" or "error", but not both.')), k.queue[Q.id].timeout && clearTimeout(k.queue[Q.id].timeout), Q.error ? k.queue[Q.id].promise[1](Q.error) : k.queue[Q.id].promise[0](Q.result), delete k.queue[Q.id];
          }), this.socket.addEventListener("error", function(W) {
            return k.emit("error", W);
          }), this.socket.addEventListener("close", function(W) {
            var Q = W.code, j = W.reason;
            k.ready && setTimeout(function() {
              return k.emit("close", Q, j);
            }, 0), k.ready = !1, k.socket = void 0, Q !== 1e3 && (k.current_reconnects++, k.reconnect && (k.max_reconnects > k.current_reconnects || k.max_reconnects === 0) && setTimeout(function() {
              return k._connect(U, F);
            }, k.reconnect_interval));
          });
        }
      }]), P;
    }(v.EventEmitter);
    n.default = R;
  }(Do)), Do;
}
var tr = Hi.exports;
Object.defineProperty(Vs, "__esModule", {
  value: !0
});
var Au = Vs.Client = void 0, _h = tr(Zs()), Ch = tr(Xs()), Th = tr(Js()), Rh = tr(ea()), za = tr(ta()), Nh = tr(xh()), kh = tr(Mh());
function Oh(n) {
  var e = Lh();
  return function() {
    var r = (0, za.default)(n), o;
    if (e) {
      var i = (0, za.default)(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return (0, Rh.default)(this, o);
  };
}
function Lh() {
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
var Uh = /* @__PURE__ */ function(n) {
  (0, Th.default)(t, n);
  var e = Oh(t);
  function t() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ws://localhost:8080", o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = o.autoconnect, c = i === void 0 ? !0 : i, u = o.reconnect, d = u === void 0 ? !0 : u, w = o.reconnect_interval, v = w === void 0 ? 1e3 : w, E = o.max_reconnects, _ = E === void 0 ? 5 : E, S = arguments.length > 2 ? arguments[2] : void 0;
    return (0, Ch.default)(this, t), e.call(this, Nh.default, r, {
      autoconnect: c,
      reconnect: d,
      reconnect_interval: v,
      max_reconnects: _
    }, S);
  }
  return (0, _h.default)(t);
}(kh.default);
Au = Vs.Client = Uh;
var oi, Ph = new Uint8Array(16);
function vu() {
  if (!oi && (oi = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !oi))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return oi(Ph);
}
const Dh = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function Gi(n) {
  return typeof n == "string" && Dh.test(n);
}
var Bt = [];
for (var Wo = 0; Wo < 256; ++Wo)
  Bt.push((Wo + 256).toString(16).substr(1));
function Qi(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = (Bt[n[e + 0]] + Bt[n[e + 1]] + Bt[n[e + 2]] + Bt[n[e + 3]] + "-" + Bt[n[e + 4]] + Bt[n[e + 5]] + "-" + Bt[n[e + 6]] + Bt[n[e + 7]] + "-" + Bt[n[e + 8]] + Bt[n[e + 9]] + "-" + Bt[n[e + 10]] + Bt[n[e + 11]] + Bt[n[e + 12]] + Bt[n[e + 13]] + Bt[n[e + 14]] + Bt[n[e + 15]]).toLowerCase();
  if (!Gi(t))
    throw TypeError("Stringified UUID is invalid");
  return t;
}
var Ha, Go, Qo = 0, qo = 0;
function Fh(n, e, t) {
  var r = e && t || 0, o = e || new Array(16);
  n = n || {};
  var i = n.node || Ha, c = n.clockseq !== void 0 ? n.clockseq : Go;
  if (i == null || c == null) {
    var u = n.random || (n.rng || vu)();
    i == null && (i = Ha = [u[0] | 1, u[1], u[2], u[3], u[4], u[5]]), c == null && (c = Go = (u[6] << 8 | u[7]) & 16383);
  }
  var d = n.msecs !== void 0 ? n.msecs : Date.now(), w = n.nsecs !== void 0 ? n.nsecs : qo + 1, v = d - Qo + (w - qo) / 1e4;
  if (v < 0 && n.clockseq === void 0 && (c = c + 1 & 16383), (v < 0 || d > Qo) && n.nsecs === void 0 && (w = 0), w >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  Qo = d, qo = w, Go = c, d += 122192928e5;
  var E = ((d & 268435455) * 1e4 + w) % 4294967296;
  o[r++] = E >>> 24 & 255, o[r++] = E >>> 16 & 255, o[r++] = E >>> 8 & 255, o[r++] = E & 255;
  var _ = d / 4294967296 * 1e4 & 268435455;
  o[r++] = _ >>> 8 & 255, o[r++] = _ & 255, o[r++] = _ >>> 24 & 15 | 16, o[r++] = _ >>> 16 & 255, o[r++] = c >>> 8 | 128, o[r++] = c & 255;
  for (var S = 0; S < 6; ++S)
    o[r + S] = i[S];
  return e || Qi(o);
}
function Eu(n) {
  if (!Gi(n))
    throw TypeError("Invalid UUID");
  var e, t = new Uint8Array(16);
  return t[0] = (e = parseInt(n.slice(0, 8), 16)) >>> 24, t[1] = e >>> 16 & 255, t[2] = e >>> 8 & 255, t[3] = e & 255, t[4] = (e = parseInt(n.slice(9, 13), 16)) >>> 8, t[5] = e & 255, t[6] = (e = parseInt(n.slice(14, 18), 16)) >>> 8, t[7] = e & 255, t[8] = (e = parseInt(n.slice(19, 23), 16)) >>> 8, t[9] = e & 255, t[10] = (e = parseInt(n.slice(24, 36), 16)) / 1099511627776 & 255, t[11] = e / 4294967296 & 255, t[12] = e >>> 24 & 255, t[13] = e >>> 16 & 255, t[14] = e >>> 8 & 255, t[15] = e & 255, t;
}
function zh(n) {
  n = unescape(encodeURIComponent(n));
  for (var e = [], t = 0; t < n.length; ++t)
    e.push(n.charCodeAt(t));
  return e;
}
var Hh = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", Wh = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function xu(n, e, t) {
  function r(o, i, c, u) {
    if (typeof o == "string" && (o = zh(o)), typeof i == "string" && (i = Eu(i)), i.length !== 16)
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    var d = new Uint8Array(16 + o.length);
    if (d.set(i), d.set(o, i.length), d = t(d), d[6] = d[6] & 15 | e, d[8] = d[8] & 63 | 128, c) {
      u = u || 0;
      for (var w = 0; w < 16; ++w)
        c[u + w] = d[w];
      return c;
    }
    return Qi(d);
  }
  try {
    r.name = n;
  } catch {
  }
  return r.DNS = Hh, r.URL = Wh, r;
}
function Gh(n) {
  if (typeof n == "string") {
    var e = unescape(encodeURIComponent(n));
    n = new Uint8Array(e.length);
    for (var t = 0; t < e.length; ++t)
      n[t] = e.charCodeAt(t);
  }
  return Qh(qh(jh(n), n.length * 8));
}
function Qh(n) {
  for (var e = [], t = n.length * 32, r = "0123456789abcdef", o = 0; o < t; o += 8) {
    var i = n[o >> 5] >>> o % 32 & 255, c = parseInt(r.charAt(i >>> 4 & 15) + r.charAt(i & 15), 16);
    e.push(c);
  }
  return e;
}
function Su(n) {
  return (n + 64 >>> 9 << 4) + 14 + 1;
}
function qh(n, e) {
  n[e >> 5] |= 128 << e % 32, n[Su(e) - 1] = e;
  for (var t = 1732584193, r = -271733879, o = -1732584194, i = 271733878, c = 0; c < n.length; c += 16) {
    var u = t, d = r, w = o, v = i;
    t = Nt(t, r, o, i, n[c], 7, -680876936), i = Nt(i, t, r, o, n[c + 1], 12, -389564586), o = Nt(o, i, t, r, n[c + 2], 17, 606105819), r = Nt(r, o, i, t, n[c + 3], 22, -1044525330), t = Nt(t, r, o, i, n[c + 4], 7, -176418897), i = Nt(i, t, r, o, n[c + 5], 12, 1200080426), o = Nt(o, i, t, r, n[c + 6], 17, -1473231341), r = Nt(r, o, i, t, n[c + 7], 22, -45705983), t = Nt(t, r, o, i, n[c + 8], 7, 1770035416), i = Nt(i, t, r, o, n[c + 9], 12, -1958414417), o = Nt(o, i, t, r, n[c + 10], 17, -42063), r = Nt(r, o, i, t, n[c + 11], 22, -1990404162), t = Nt(t, r, o, i, n[c + 12], 7, 1804603682), i = Nt(i, t, r, o, n[c + 13], 12, -40341101), o = Nt(o, i, t, r, n[c + 14], 17, -1502002290), r = Nt(r, o, i, t, n[c + 15], 22, 1236535329), t = kt(t, r, o, i, n[c + 1], 5, -165796510), i = kt(i, t, r, o, n[c + 6], 9, -1069501632), o = kt(o, i, t, r, n[c + 11], 14, 643717713), r = kt(r, o, i, t, n[c], 20, -373897302), t = kt(t, r, o, i, n[c + 5], 5, -701558691), i = kt(i, t, r, o, n[c + 10], 9, 38016083), o = kt(o, i, t, r, n[c + 15], 14, -660478335), r = kt(r, o, i, t, n[c + 4], 20, -405537848), t = kt(t, r, o, i, n[c + 9], 5, 568446438), i = kt(i, t, r, o, n[c + 14], 9, -1019803690), o = kt(o, i, t, r, n[c + 3], 14, -187363961), r = kt(r, o, i, t, n[c + 8], 20, 1163531501), t = kt(t, r, o, i, n[c + 13], 5, -1444681467), i = kt(i, t, r, o, n[c + 2], 9, -51403784), o = kt(o, i, t, r, n[c + 7], 14, 1735328473), r = kt(r, o, i, t, n[c + 12], 20, -1926607734), t = Ot(t, r, o, i, n[c + 5], 4, -378558), i = Ot(i, t, r, o, n[c + 8], 11, -2022574463), o = Ot(o, i, t, r, n[c + 11], 16, 1839030562), r = Ot(r, o, i, t, n[c + 14], 23, -35309556), t = Ot(t, r, o, i, n[c + 1], 4, -1530992060), i = Ot(i, t, r, o, n[c + 4], 11, 1272893353), o = Ot(o, i, t, r, n[c + 7], 16, -155497632), r = Ot(r, o, i, t, n[c + 10], 23, -1094730640), t = Ot(t, r, o, i, n[c + 13], 4, 681279174), i = Ot(i, t, r, o, n[c], 11, -358537222), o = Ot(o, i, t, r, n[c + 3], 16, -722521979), r = Ot(r, o, i, t, n[c + 6], 23, 76029189), t = Ot(t, r, o, i, n[c + 9], 4, -640364487), i = Ot(i, t, r, o, n[c + 12], 11, -421815835), o = Ot(o, i, t, r, n[c + 15], 16, 530742520), r = Ot(r, o, i, t, n[c + 2], 23, -995338651), t = Lt(t, r, o, i, n[c], 6, -198630844), i = Lt(i, t, r, o, n[c + 7], 10, 1126891415), o = Lt(o, i, t, r, n[c + 14], 15, -1416354905), r = Lt(r, o, i, t, n[c + 5], 21, -57434055), t = Lt(t, r, o, i, n[c + 12], 6, 1700485571), i = Lt(i, t, r, o, n[c + 3], 10, -1894986606), o = Lt(o, i, t, r, n[c + 10], 15, -1051523), r = Lt(r, o, i, t, n[c + 1], 21, -2054922799), t = Lt(t, r, o, i, n[c + 8], 6, 1873313359), i = Lt(i, t, r, o, n[c + 15], 10, -30611744), o = Lt(o, i, t, r, n[c + 6], 15, -1560198380), r = Lt(r, o, i, t, n[c + 13], 21, 1309151649), t = Lt(t, r, o, i, n[c + 4], 6, -145523070), i = Lt(i, t, r, o, n[c + 11], 10, -1120210379), o = Lt(o, i, t, r, n[c + 2], 15, 718787259), r = Lt(r, o, i, t, n[c + 9], 21, -343485551), t = Nn(t, u), r = Nn(r, d), o = Nn(o, w), i = Nn(i, v);
  }
  return [t, r, o, i];
}
function jh(n) {
  if (n.length === 0)
    return [];
  for (var e = n.length * 8, t = new Uint32Array(Su(e)), r = 0; r < e; r += 8)
    t[r >> 5] |= (n[r / 8] & 255) << r % 32;
  return t;
}
function Nn(n, e) {
  var t = (n & 65535) + (e & 65535), r = (n >> 16) + (e >> 16) + (t >> 16);
  return r << 16 | t & 65535;
}
function Yh(n, e) {
  return n << e | n >>> 32 - e;
}
function qi(n, e, t, r, o, i) {
  return Nn(Yh(Nn(Nn(e, n), Nn(r, i)), o), t);
}
function Nt(n, e, t, r, o, i, c) {
  return qi(e & t | ~e & r, n, e, o, i, c);
}
function kt(n, e, t, r, o, i, c) {
  return qi(e & r | t & ~r, n, e, o, i, c);
}
function Ot(n, e, t, r, o, i, c) {
  return qi(e ^ t ^ r, n, e, o, i, c);
}
function Lt(n, e, t, r, o, i, c) {
  return qi(t ^ (e | ~r), n, e, o, i, c);
}
var Kh = xu("v3", 48, Gh);
const Vh = Kh;
function Zh(n, e, t) {
  n = n || {};
  var r = n.random || (n.rng || vu)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    t = t || 0;
    for (var o = 0; o < 16; ++o)
      e[t + o] = r[o];
    return e;
  }
  return Qi(r);
}
function Xh(n, e, t, r) {
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
function jo(n, e) {
  return n << e | n >>> 32 - e;
}
function Jh(n) {
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
  for (var E = 0; E < c; ++E) {
    for (var _ = new Uint32Array(80), S = 0; S < 16; ++S)
      _[S] = u[E][S];
    for (var R = 16; R < 80; ++R)
      _[R] = jo(_[R - 3] ^ _[R - 8] ^ _[R - 14] ^ _[R - 16], 1);
    for (var T = t[0], L = t[1], P = t[2], z = t[3], U = t[4], F = 0; F < 80; ++F) {
      var k = Math.floor(F / 20), W = jo(T, 5) + Xh(k, L, P, z) + U + e[k] + _[F] >>> 0;
      U = z, z = P, P = jo(L, 30) >>> 0, L = T, T = W;
    }
    t[0] = t[0] + T >>> 0, t[1] = t[1] + L >>> 0, t[2] = t[2] + P >>> 0, t[3] = t[3] + z >>> 0, t[4] = t[4] + U >>> 0;
  }
  return [t[0] >> 24 & 255, t[0] >> 16 & 255, t[0] >> 8 & 255, t[0] & 255, t[1] >> 24 & 255, t[1] >> 16 & 255, t[1] >> 8 & 255, t[1] & 255, t[2] >> 24 & 255, t[2] >> 16 & 255, t[2] >> 8 & 255, t[2] & 255, t[3] >> 24 & 255, t[3] >> 16 & 255, t[3] >> 8 & 255, t[3] & 255, t[4] >> 24 & 255, t[4] >> 16 & 255, t[4] >> 8 & 255, t[4] & 255];
}
var $h = xu("v5", 80, Jh);
const ed = $h, td = "00000000-0000-0000-0000-000000000000";
function nd(n) {
  if (!Gi(n))
    throw TypeError("Invalid UUID");
  return parseInt(n.substr(14, 1), 16);
}
const rd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  v1: Fh,
  v3: Vh,
  v4: Zh,
  v5: ed,
  NIL: td,
  version: nd,
  validate: Gi,
  stringify: Qi,
  parse: Eu
}, Symbol.toStringTag, { value: "Module" })), Iu = /* @__PURE__ */ Li(rd), id = Iu.v4, od = function(n, e, t, r) {
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
      return id();
    };
    i.id = c(i, r);
  } else
    o === 2 && t === null ? r.notificationIdNull && (i.id = null) : i.id = t;
  return i;
};
var sd = od;
const ad = Iu.v4, cd = sd, Ur = function(n, e) {
  if (!(this instanceof Ur))
    return new Ur(n, e);
  e || (e = {}), this.options = {
    reviver: typeof e.reviver < "u" ? e.reviver : null,
    replacer: typeof e.replacer < "u" ? e.replacer : null,
    generator: typeof e.generator < "u" ? e.generator : function() {
      return ad();
    },
    version: typeof e.version < "u" ? e.version : 2,
    notificationIdNull: typeof e.notificationIdNull == "boolean" ? e.notificationIdNull : !1
  }, this.callServer = n;
};
var ud = Ur;
Ur.prototype.request = function(n, e, t, r) {
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
      i = cd(n, e, t, {
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
Ur.prototype._parseResponse = function(n, e, t) {
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
const [Bu, Mu, _u] = [[], [], []], ld = BigInt(0), Sr = BigInt(1), fd = BigInt(2), hd = BigInt(7), dd = BigInt(256), pd = BigInt(113);
for (let n = 0, e = Sr, t = 1, r = 0; n < 24; n++) {
  [t, r] = [r, (2 * t + 3 * r) % 5], Bu.push(2 * (5 * r + t)), Mu.push((n + 1) * (n + 2) / 2 % 64);
  let o = ld;
  for (let i = 0; i < 7; i++)
    e = (e << Sr ^ (e >> hd) * pd) % dd, e & fd && (o ^= Sr << (Sr << BigInt(i)) - Sr);
  _u.push(o);
}
const [gd, yd] = we.split(_u, !0), Wa = (n, e, t) => t > 32 ? we.rotlBH(n, e, t) : we.rotlSH(n, e, t), Ga = (n, e, t) => t > 32 ? we.rotlBL(n, e, t) : we.rotlSL(n, e, t);
function wd(n, e = 24) {
  const t = new Uint32Array(10);
  for (let r = 24 - e; r < 24; r++) {
    for (let c = 0; c < 10; c++)
      t[c] = n[c] ^ n[c + 10] ^ n[c + 20] ^ n[c + 30] ^ n[c + 40];
    for (let c = 0; c < 10; c += 2) {
      const u = (c + 8) % 10, d = (c + 2) % 10, w = t[d], v = t[d + 1], E = Wa(w, v, 1) ^ t[u], _ = Ga(w, v, 1) ^ t[u + 1];
      for (let S = 0; S < 50; S += 10)
        n[c + S] ^= E, n[c + S + 1] ^= _;
    }
    let o = n[2], i = n[3];
    for (let c = 0; c < 24; c++) {
      const u = Mu[c], d = Wa(o, i, u), w = Ga(o, i, u), v = Bu[c];
      o = n[v], i = n[v + 1], n[v] = d, n[v + 1] = w;
    }
    for (let c = 0; c < 50; c += 10) {
      for (let u = 0; u < 10; u++)
        t[u] = n[c + u];
      for (let u = 0; u < 10; u++)
        n[c + u] ^= ~t[(u + 2) % 10] & t[(u + 4) % 10];
    }
    n[0] ^= gd[r], n[1] ^= yd[r];
  }
  t.fill(0);
}
class ji extends Cs {
  constructor(e, t, r, o = !1, i = 24) {
    if (super(), this.blockLen = e, this.suffix = t, this.outputLen = r, this.enableXOF = o, this.rounds = i, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, jt.number(r), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = Ol(this.state);
  }
  keccak() {
    wd(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(e) {
    jt.exists(this);
    const { blockLen: t, state: r } = this;
    e = qr(e);
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
    jt.exists(this, !1), jt.bytes(e), this.finish();
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
    return jt.number(e), this.xofInto(new Uint8Array(e));
  }
  digestInto(e) {
    if (jt.output(e, this), this.finished)
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
    return e || (e = new ji(t, r, o, c, i)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = i, e.suffix = r, e.outputLen = o, e.enableXOF = c, e.destroyed = this.destroyed, e;
  }
}
const Dn = (n, e, t) => jr(() => new ji(e, n, t));
Dn(6, 144, 224 / 8);
Dn(6, 136, 256 / 8);
Dn(6, 104, 384 / 8);
Dn(6, 72, 512 / 8);
Dn(1, 144, 224 / 8);
Dn(1, 136, 256 / 8);
Dn(1, 104, 384 / 8);
Dn(1, 72, 512 / 8);
const Cu = (n, e, t) => Pl((r = {}) => new ji(e, n, r.dkLen === void 0 ? t : r.dkLen, !0));
Cu(31, 168, 128 / 8);
Cu(31, 136, 256 / 8);
class Tu extends Cs {
  constructor(e, t) {
    super(), this.finished = !1, this.destroyed = !1, jt.hash(e);
    const r = qr(t);
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
    return jt.exists(this), this.iHash.update(e), this;
  }
  digestInto(e) {
    jt.exists(this), jt.bytes(e, this.outputLen), this.finished = !0, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
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
const Ru = (n, e, t) => new Tu(n, e).update(t).digest();
Ru.create = (n, e) => new Tu(n, e);
/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
const Ue = BigInt(0), Xe = BigInt(1), kn = BigInt(2), Nr = BigInt(3), md = BigInt(8), nt = Object.freeze({
  a: Ue,
  b: BigInt(7),
  P: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
  n: BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
  h: Xe,
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")
});
function Qa(n) {
  const { a: e, b: t } = nt, r = ae(n * n), o = ae(r * n);
  return ae(o + e * n + t);
}
const si = nt.a === Ue;
class bd extends Error {
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
    return new Pe(e.x, e.y, Xe);
  }
  static toAffineBatch(e) {
    const t = Sd(e.map((r) => r.z));
    return e.map((r, o) => r.toAffine(t[o]));
  }
  static normalizeZ(e) {
    return Pe.toAffineBatch(e).map(Pe.fromAffine);
  }
  equals(e) {
    if (!(e instanceof Pe))
      throw new TypeError("JacobianPoint expected");
    const { x: t, y: r, z: o } = this, { x: i, y: c, z: u } = e, d = ae(o * o), w = ae(u * u), v = ae(t * w), E = ae(i * d), _ = ae(ae(r * u) * w), S = ae(ae(c * o) * d);
    return v === E && _ === S;
  }
  negate() {
    return new Pe(this.x, ae(-this.y), this.z);
  }
  double() {
    const { x: e, y: t, z: r } = this, o = ae(e * e), i = ae(t * t), c = ae(i * i), u = e + i, d = ae(kn * (ae(u * u) - o - c)), w = ae(Nr * o), v = ae(w * w), E = ae(v - kn * d), _ = ae(w * (d - E) - md * c), S = ae(kn * t * r);
    return new Pe(E, _, S);
  }
  add(e) {
    if (!(e instanceof Pe))
      throw new TypeError("JacobianPoint expected");
    const { x: t, y: r, z: o } = this, { x: i, y: c, z: u } = e;
    if (i === Ue || c === Ue)
      return this;
    if (t === Ue || r === Ue)
      return e;
    const d = ae(o * o), w = ae(u * u), v = ae(t * w), E = ae(i * d), _ = ae(ae(r * u) * w), S = ae(ae(c * o) * d), R = ae(E - v), T = ae(S - _);
    if (R === Ue)
      return T === Ue ? this.double() : Pe.ZERO;
    const L = ae(R * R), P = ae(R * L), z = ae(v * L), U = ae(T * T - P - kn * z), F = ae(T * (z - U) - _ * P), k = ae(o * u * R);
    return new Pe(U, F, k);
  }
  subtract(e) {
    return this.add(e.negate());
  }
  multiplyUnsafe(e) {
    const t = Pe.ZERO;
    if (typeof e == "bigint" && e === Ue)
      return t;
    let r = Ka(e);
    if (r === Xe)
      return this;
    if (!si) {
      let E = t, _ = this;
      for (; r > Ue; )
        r & Xe && (E = E.add(_)), _ = _.double(), r >>= Xe;
      return E;
    }
    let { k1neg: o, k1: i, k2neg: c, k2: u } = Za(r), d = t, w = t, v = this;
    for (; i > Ue || u > Ue; )
      i & Xe && (d = d.add(v)), u & Xe && (w = w.add(v)), v = v.double(), i >>= Xe, u >>= Xe;
    return o && (d = d.negate()), c && (w = w.negate()), w = new Pe(ae(w.x * nt.beta), w.y, w.z), d.add(w);
  }
  precomputeWindow(e) {
    const t = si ? 128 / e + 1 : 256 / e + 1, r = [];
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
    !t && this.equals(Pe.BASE) && (t = It.BASE);
    const r = t && t._WINDOW_SIZE || 1;
    if (256 % r)
      throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");
    let o = t && ps.get(t);
    o || (o = this.precomputeWindow(r), t && r !== 1 && (o = Pe.normalizeZ(o), ps.set(t, o)));
    let i = Pe.ZERO, c = Pe.ZERO;
    const u = 1 + (si ? 128 / r : 256 / r), d = 2 ** (r - 1), w = BigInt(2 ** r - 1), v = 2 ** r, E = BigInt(r);
    for (let _ = 0; _ < u; _++) {
      const S = _ * d;
      let R = Number(e & w);
      if (e >>= E, R > d && (R -= v, e += Xe), R === 0) {
        let T = o[S];
        _ % 2 && (T = T.negate()), c = c.add(T);
      } else {
        let T = o[S + Math.abs(R) - 1];
        R < 0 && (T = T.negate()), i = i.add(T);
      }
    }
    return { p: i, f: c };
  }
  multiply(e, t) {
    let r = Ka(e), o, i;
    if (si) {
      const { k1neg: c, k1: u, k2neg: d, k2: w } = Za(r);
      let { p: v, f: E } = this.wNAF(u, t), { p: _, f: S } = this.wNAF(w, t);
      c && (v = v.negate()), d && (_ = _.negate()), _ = new Pe(ae(_.x * nt.beta), _.y, _.z), o = v.add(_), i = E.add(S);
    } else {
      const { p: c, f: u } = this.wNAF(r, t);
      o = c, i = u;
    }
    return Pe.normalizeZ([o, i])[0];
  }
  toAffine(e = Yi(this.z)) {
    const { x: t, y: r, z: o } = this, i = e, c = ae(i * i), u = ae(c * i), d = ae(t * c), w = ae(r * u);
    if (ae(o * i) !== Xe)
      throw new Error("invZ was invalid");
    return new It(d, w);
  }
}
Pe.BASE = new Pe(nt.Gx, nt.Gy, Xe);
Pe.ZERO = new Pe(Ue, Xe, Ue);
const ps = /* @__PURE__ */ new WeakMap();
class It {
  constructor(e, t) {
    this.x = e, this.y = t;
  }
  _setWindowSize(e) {
    this._WINDOW_SIZE = e, ps.delete(this);
  }
  hasEvenY() {
    return this.y % kn === Ue;
  }
  static fromCompressedHex(e) {
    const t = e.length === 32, r = jn(t ? e : e.subarray(1));
    if (!Ko(r))
      throw new Error("Point is not on curve");
    const o = Qa(r);
    let i = xd(o);
    const c = (i & Xe) === Xe;
    t ? c && (i = ae(-i)) : (e[0] & 1) === 1 !== c && (i = ae(-i));
    const u = new It(r, i);
    return u.assertValidity(), u;
  }
  static fromUncompressedHex(e) {
    const t = jn(e.subarray(1, 33)), r = jn(e.subarray(33, 65)), o = new It(t, r);
    return o.assertValidity(), o;
  }
  static fromHex(e) {
    const t = gs(e), r = t.length, o = t[0];
    if (r === 32 || r === 33 && (o === 2 || o === 3))
      return this.fromCompressedHex(t);
    if (r === 65 && o === 4)
      return this.fromUncompressedHex(t);
    throw new Error(`Point.fromHex: received invalid point. Expected 32-33 compressed bytes or 65 uncompressed bytes, not ${r}`);
  }
  static fromPrivateKey(e) {
    return It.BASE.multiply(ys(e));
  }
  static fromSignature(e, t, r) {
    e = gs(e);
    const o = Bd(e), { r: i, s: c } = Md(t);
    if (r !== 0 && r !== 1)
      throw new Error("Cannot recover signature: invalid recovery bit");
    const u = r & 1 ? "03" : "02", d = It.fromHex(u + fr(i)), { n: w } = nt, v = Yi(i, w), E = ae(-o * v, w), _ = ae(c * v, w), S = It.BASE.multiplyAndAddUnsafe(d, E, _);
    if (!S)
      throw new Error("Cannot recover signature: point at infinify");
    return S.assertValidity(), S;
  }
  toRawBytes(e = !1) {
    return qn(this.toHex(e));
  }
  toHex(e = !1) {
    const t = fr(this.x);
    return e ? `${this.hasEvenY() ? "02" : "03"}${t}` : `04${t}${fr(this.y)}`;
  }
  toHexX() {
    return this.toHex(!0).slice(2);
  }
  toRawX() {
    return this.toRawBytes(!0).slice(1);
  }
  assertValidity() {
    const e = "Point is not on elliptic curve", { x: t, y: r } = this;
    if (!Ko(t) || !Ko(r))
      throw new Error(e);
    const o = ae(r * r), i = Qa(t);
    if (ae(o - i) !== Ue)
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
    const o = Pe.fromAffine(this), i = t === Ue || t === Xe || this !== It.BASE ? o.multiplyUnsafe(t) : o.multiply(t), c = Pe.fromAffine(e).multiplyUnsafe(r), u = i.add(c);
    return u.equals(Pe.ZERO) ? void 0 : u.toAffine();
  }
}
It.BASE = new It(nt.Gx, nt.Gy);
It.ZERO = new It(Ue, Ue);
function qa(n) {
  return Number.parseInt(n[0], 16) >= 8 ? "00" + n : n;
}
function ja(n) {
  if (n.length < 2 || n[0] !== 2)
    throw new Error(`Invalid signature integer tag: ${yr(n)}`);
  const e = n[1], t = n.subarray(2, e + 2);
  if (!e || t.length !== e)
    throw new Error("Invalid signature integer: wrong length");
  if (t[0] === 0 && t[1] <= 127)
    throw new Error("Invalid signature integer: trailing length");
  return { data: jn(t), left: n.subarray(e + 2) };
}
function Ad(n) {
  if (n.length < 2 || n[0] != 48)
    throw new Error(`Invalid signature tag: ${yr(n)}`);
  if (n[1] !== n.length - 2)
    throw new Error("Invalid signature: incorrect length");
  const { data: e, left: t } = ja(n.subarray(2)), { data: r, left: o } = ja(t);
  if (o.length)
    throw new Error(`Invalid signature: left bytes after parsing: ${yr(o)}`);
  return { r: e, s: r };
}
class Qn {
  constructor(e, t) {
    this.r = e, this.s = t, this.assertValidity();
  }
  static fromCompact(e) {
    const t = e instanceof Uint8Array, r = "Signature.fromCompact";
    if (typeof e != "string" && !t)
      throw new TypeError(`${r}: Expected string or Uint8Array`);
    const o = t ? yr(e) : e;
    if (o.length !== 128)
      throw new Error(`${r}: Expected 64-byte hex`);
    return new Qn(Ii(o.slice(0, 64)), Ii(o.slice(64, 128)));
  }
  static fromDER(e) {
    const t = e instanceof Uint8Array;
    if (typeof e != "string" && !t)
      throw new TypeError("Signature.fromDER: Expected string or Uint8Array");
    const { r, s: o } = Ad(t ? e : qn(e));
    return new Qn(r, o);
  }
  static fromHex(e) {
    return this.fromDER(e);
  }
  assertValidity() {
    const { r: e, s: t } = this;
    if (!Bi(e))
      throw new Error("Invalid Signature: r must be 0 < r < n");
    if (!Bi(t))
      throw new Error("Invalid Signature: s must be 0 < s < n");
  }
  hasHighS() {
    const e = nt.n >> Xe;
    return this.s > e;
  }
  normalizeS() {
    return this.hasHighS() ? new Qn(this.r, nt.n - this.s) : this;
  }
  toDERRawBytes(e = !1) {
    return qn(this.toDERHex(e));
  }
  toDERHex(e = !1) {
    const t = qa(Br(this.s));
    if (e)
      return t;
    const r = qa(Br(this.r)), o = Br(r.length / 2), i = Br(t.length / 2);
    return `30${Br(r.length / 2 + t.length / 2 + 4)}02${o}${r}02${i}${t}`;
  }
  toRawBytes() {
    return this.toDERRawBytes();
  }
  toHex() {
    return this.toDERHex();
  }
  toCompactRawBytes() {
    return qn(this.toCompactHex());
  }
  toCompactHex() {
    return fr(this.r) + fr(this.s);
  }
}
function Ir(...n) {
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
const vd = Array.from({ length: 256 }, (n, e) => e.toString(16).padStart(2, "0"));
function yr(n) {
  if (!(n instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  let e = "";
  for (let t = 0; t < n.length; t++)
    e += vd[n[t]];
  return e;
}
const Ed = BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");
function fr(n) {
  if (typeof n != "bigint")
    throw new Error("Expected bigint");
  if (!(Ue <= n && n < Ed))
    throw new Error("Expected number < 2^256");
  return n.toString(16).padStart(64, "0");
}
function Ya(n) {
  const e = qn(fr(n));
  if (e.length !== 32)
    throw new Error("Error: expected 32 bytes");
  return e;
}
function Br(n) {
  const e = n.toString(16);
  return e.length & 1 ? `0${e}` : e;
}
function Ii(n) {
  if (typeof n != "string")
    throw new TypeError("hexToNumber: expected string, got " + typeof n);
  return BigInt(`0x${n}`);
}
function qn(n) {
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
function jn(n) {
  return Ii(yr(n));
}
function gs(n) {
  return n instanceof Uint8Array ? Uint8Array.from(n) : qn(n);
}
function Ka(n) {
  if (typeof n == "number" && Number.isSafeInteger(n) && n > 0)
    return BigInt(n);
  if (typeof n == "bigint" && Bi(n))
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
function xd(n) {
  const { P: e } = nt, t = BigInt(6), r = BigInt(11), o = BigInt(22), i = BigInt(23), c = BigInt(44), u = BigInt(88), d = n * n * n % e, w = d * d * n % e, v = Kt(w, Nr) * w % e, E = Kt(v, Nr) * w % e, _ = Kt(E, kn) * d % e, S = Kt(_, r) * _ % e, R = Kt(S, o) * S % e, T = Kt(R, c) * R % e, L = Kt(T, u) * T % e, P = Kt(L, c) * R % e, z = Kt(P, Nr) * w % e, U = Kt(z, i) * S % e, F = Kt(U, t) * d % e;
  return Kt(F, kn);
}
function Yi(n, e = nt.P) {
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
function Sd(n, e = nt.P) {
  const t = new Array(n.length), r = n.reduce((i, c, u) => c === Ue ? i : (t[u] = i, ae(i * c, e)), Xe), o = Yi(r, e);
  return n.reduceRight((i, c, u) => c === Ue ? i : (t[u] = ae(i * t[u], e), ae(i * c, e)), o), t;
}
const Va = (n, e) => (n + e / kn) / e, Id = {
  a1: BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
  b1: -Xe * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
  a2: BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
  b2: BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
  POW_2_128: BigInt("0x100000000000000000000000000000000")
};
function Za(n) {
  const { n: e } = nt, { a1: t, b1: r, a2: o, b2: i, POW_2_128: c } = Id, u = Va(i * n, e), d = Va(-r * n, e);
  let w = ae(n - u * t - d * o, e), v = ae(-u * r - d * i, e);
  const E = w > c, _ = v > c;
  if (E && (w = e - w), _ && (v = e - v), w > c || v > c)
    throw new Error("splitScalarEndo: Endomorphism failed, k=" + n);
  return { k1neg: E, k1: w, k2neg: _, k2: v };
}
function Bd(n) {
  const { n: e } = nt, r = n.length * 8 - 256;
  let o = jn(n);
  return r > 0 && (o = o >> BigInt(r)), o >= e && (o -= e), o;
}
let hr, Yo;
function Bi(n) {
  return Ue < n && n < nt.n;
}
function Ko(n) {
  return Ue < n && n < nt.P;
}
function ys(n) {
  let e;
  if (typeof n == "bigint")
    e = n;
  else if (typeof n == "number" && Number.isSafeInteger(n) && n > 0)
    e = BigInt(n);
  else if (typeof n == "string") {
    if (n.length !== 64)
      throw new Error("Expected 32 bytes of private key");
    e = Ii(n);
  } else if (n instanceof Uint8Array) {
    if (n.length !== 32)
      throw new Error("Expected 32 bytes of private key");
    e = jn(n);
  } else
    throw new TypeError("Expected valid private key");
  if (!Bi(e))
    throw new Error("Expected private key: 0 < key < n");
  return e;
}
function Md(n) {
  if (n instanceof Qn)
    return n.assertValidity(), n;
  try {
    return Qn.fromDER(n);
  } catch {
    return Qn.fromCompact(n);
  }
}
It.BASE._setWindowSize(8);
const Gt = {
  node: Rs,
  web: typeof self == "object" && "crypto" in self ? self.crypto : void 0
}, ai = {}, Wn = {
  bytesToHex: yr,
  hexToBytes: qn,
  concatBytes: Ir,
  mod: ae,
  invert: Yi,
  isValidPrivateKey(n) {
    try {
      return ys(n), !0;
    } catch {
      return !1;
    }
  },
  _bigintTo32Bytes: Ya,
  _normalizePrivateKey: ys,
  hashToPrivateKey: (n) => {
    if (n = gs(n), n.length < 40 || n.length > 1024)
      throw new Error("Expected 40-1024 bytes of private key as per FIPS 186");
    const e = ae(jn(n), nt.n - Xe) + Xe;
    return Ya(e);
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
  randomPrivateKey: () => Wn.hashToPrivateKey(Wn.randomBytes(40)),
  sha256: async (...n) => {
    if (Gt.web) {
      const e = await Gt.web.subtle.digest("SHA-256", Ir(...n));
      return new Uint8Array(e);
    } else if (Gt.node) {
      const { createHash: e } = Gt.node, t = e("sha256");
      return n.forEach((r) => t.update(r)), Uint8Array.from(t.digest());
    } else
      throw new Error("The environment doesn't have sha256 function");
  },
  hmacSha256: async (n, ...e) => {
    if (Gt.web) {
      const t = await Gt.web.subtle.importKey("raw", n, { name: "HMAC", hash: { name: "SHA-256" } }, !1, ["sign"]), r = Ir(...e), o = await Gt.web.subtle.sign("HMAC", t, r);
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
    let t = ai[n];
    if (t === void 0) {
      const r = await Wn.sha256(Uint8Array.from(n, (o) => o.charCodeAt(0)));
      t = Ir(r, r), ai[n] = t;
    }
    return Wn.sha256(t, ...e);
  },
  taggedHashSync: (n, ...e) => {
    if (typeof hr != "function")
      throw new bd("sha256Sync is undefined, you need to set it");
    let t = ai[n];
    if (t === void 0) {
      const r = hr(Uint8Array.from(n, (o) => o.charCodeAt(0)));
      t = Ir(r, r), ai[n] = t;
    }
    return hr(t, ...e);
  },
  precompute(n = 8, e = It.BASE) {
    const t = e === It.BASE ? e : new It(e.x, e.y);
    return t._setWindowSize(n), t.multiply(Nr), t;
  }
};
Object.defineProperties(Wn, {
  sha256Sync: {
    configurable: !1,
    get() {
      return hr;
    },
    set(n) {
      hr || (hr = n);
    }
  },
  hmacSha256Sync: {
    configurable: !1,
    get() {
      return Yo;
    },
    set(n) {
      Yo || (Yo = n);
    }
  }
});
pr.sha512Sync = (...n) => ff(pr.concatBytes(...n));
pr.randomPrivateKey;
function Xa(n) {
  try {
    return et.fromHex(
      n,
      !0
    ), !0;
  } catch {
    return !1;
  }
}
const _d = (n, e) => jc.sign(n, e.slice(0, 32)), Cd = jc.verify, $r = (n) => Ae.Buffer.isBuffer(n) ? n : n instanceof Uint8Array ? Ae.Buffer.from(n.buffer, n.byteOffset, n.byteLength) : Ae.Buffer.from(n);
class Td {
  constructor(e) {
    Object.assign(this, e);
  }
  encode() {
    return Ae.Buffer.from($c(hi, this));
  }
  static decode(e) {
    return eu(hi, this, e);
  }
  static decodeUnchecked(e) {
    return Kc(hi, this, e);
  }
}
const hi = /* @__PURE__ */ new Map(), Rd = 32, vn = 32;
function Nd(n) {
  return n._bn !== void 0;
}
let Ja = 1;
class le extends Td {
  constructor(e) {
    if (super({}), this._bn = void 0, Nd(e))
      this._bn = e._bn;
    else {
      if (typeof e == "string") {
        const t = Ct.decode(e);
        if (t.length != vn)
          throw new Error("Invalid public key input");
        this._bn = new Ia(t);
      } else
        this._bn = new Ia(e);
      if (this._bn.byteLength() > 32)
        throw new Error("Invalid public key input");
    }
  }
  static unique() {
    const e = new le(Ja);
    return Ja += 1, new le(e.toBuffer());
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
    if (e.length === vn)
      return e;
    const t = Ae.Buffer.alloc(32);
    return e.copy(t, 32 - e.length), t;
  }
  toString() {
    return this.toBase58();
  }
  static async createWithSeed(e, t, r) {
    const o = Ae.Buffer.concat([e.toBuffer(), Ae.Buffer.from(t), r.toBuffer()]), i = hs(o);
    return new le(i);
  }
  static createProgramAddressSync(e, t) {
    let r = Ae.Buffer.alloc(0);
    e.forEach(function(i) {
      if (i.length > Rd)
        throw new TypeError("Max seed length exceeded");
      r = Ae.Buffer.concat([r, $r(i)]);
    }), r = Ae.Buffer.concat([r, t.toBuffer(), Ae.Buffer.from("ProgramDerivedAddress")]);
    const o = hs(r);
    if (Xa(o))
      throw new Error("Invalid seeds, address must fall off the curve");
    return new le(o);
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
    const t = new le(e);
    return Xa(t.toBytes());
  }
}
le.default = new le("11111111111111111111111111111111");
hi.set(le, {
  kind: "struct",
  fields: [["_bn", "u256"]]
});
new le("BPFLoader1111111111111111111111111111111111");
const dr = 1280 - 40 - 8, Nu = 127, ws = 64;
class ku extends Error {
  constructor(e) {
    super(`Signature ${e} has expired: block height exceeded.`), this.signature = void 0, this.signature = e;
  }
}
Object.defineProperty(ku.prototype, "name", {
  value: "TransactionExpiredBlockheightExceededError"
});
class Ou extends Error {
  constructor(e, t) {
    super(`Transaction was not confirmed in ${t.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ${e} using the Solana Explorer or CLI tools.`), this.signature = void 0, this.signature = e;
  }
}
Object.defineProperty(Ou.prototype, "name", {
  value: "TransactionExpiredTimeoutError"
});
class Mi {
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
const Se = (n = "publicKey") => $e(32, n), ar = (n = "string") => {
  const e = ue([de("length"), de("lengthPadding"), $e(Gn(de(), -8), "chars")], n), t = e.decode.bind(e), r = e.encode.bind(e), o = e;
  return o.decode = (i, c) => t(i, c).chars.toString(), o.encode = (i, c, u) => {
    const d = {
      chars: Ae.Buffer.from(i, "utf8")
    };
    return r(d, c, u);
  }, o.alloc = (i) => de().span + de().span + Ae.Buffer.from(i, "utf8").length, o;
}, kd = (n = "authorized") => ue([Se("staker"), Se("withdrawer")], n), Od = (n = "lockup") => ue([Qt("unixTimestamp"), Qt("epoch"), Se("custodian")], n), Ld = (n = "voteInit") => ue([Se("nodePubkey"), Se("authorizedVoter"), Se("authorizedWithdrawer"), Ne("commission")], n), Ud = (n = "voteAuthorizeWithSeedArgs") => ue([de("voteAuthorizationType"), Se("currentAuthorityDerivedKeyOwnerPubkey"), ar("currentAuthorityDerivedKeySeed"), Se("newAuthorized")], n);
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
class Ki {
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
    return new Ki(t, r);
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
    const u = [...t.map(([d]) => new le(d)), ...r.map(([d]) => new le(d)), ...o.map(([d]) => new le(d)), ...i.map(([d]) => new le(d))];
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
        const u = new le(i), d = e.findIndex((w) => w.equals(u));
        d >= 0 && (vt(d < 256, "Max lookup table index exceeded"), r.push(d), o.push(u), this.keyMetaMap.delete(i));
      }
    return [r, o];
  }
}
class Pn {
  constructor(e) {
    this.header = void 0, this.accountKeys = void 0, this.recentBlockhash = void 0, this.instructions = void 0, this.indexToProgramIds = /* @__PURE__ */ new Map(), this.header = e.header, this.accountKeys = e.accountKeys.map((t) => new le(t)), this.recentBlockhash = e.recentBlockhash, this.instructions = e.instructions, this.instructions.forEach((t) => this.indexToProgramIds.set(t.programIdIndex, this.accountKeys[t.programIdIndex]));
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
    return new Mi(this.staticAccountKeys);
  }
  static compile(e) {
    const t = Ki.compile(e.instructions, e.payerKey), [r, o] = t.getMessageComponents(), c = new Mi(o).compileInstructions(e.instructions).map((u) => ({
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
    const r = this.instructions.map((E) => {
      const {
        accounts: _,
        programIdIndex: S
      } = E, R = Array.from(Ct.decode(E.data));
      let T = [];
      Jt(T, _.length);
      let L = [];
      return Jt(L, R.length), {
        programIdIndex: S,
        keyIndicesCount: Ae.Buffer.from(T),
        keyIndices: _,
        dataLength: Ae.Buffer.from(L),
        data: R
      };
    });
    let o = [];
    Jt(o, r.length);
    let i = Ae.Buffer.alloc(dr);
    Ae.Buffer.from(o).copy(i);
    let c = o.length;
    r.forEach((E) => {
      c += ue([Ne("programIdIndex"), $e(E.keyIndicesCount.length, "keyIndicesCount"), Ft(Ne("keyIndex"), E.keyIndices.length, "keyIndices"), $e(E.dataLength.length, "dataLength"), Ft(Ne("userdatum"), E.data.length, "data")]).encode(E, i, c);
    }), i = i.slice(0, c);
    const u = ue([$e(1, "numRequiredSignatures"), $e(1, "numReadonlySignedAccounts"), $e(1, "numReadonlyUnsignedAccounts"), $e(t.length, "keyCount"), Ft(Se("key"), e, "keys"), Se("recentBlockhash")]), d = {
      numRequiredSignatures: Ae.Buffer.from([this.header.numRequiredSignatures]),
      numReadonlySignedAccounts: Ae.Buffer.from([this.header.numReadonlySignedAccounts]),
      numReadonlyUnsignedAccounts: Ae.Buffer.from([this.header.numReadonlyUnsignedAccounts]),
      keyCount: Ae.Buffer.from(t),
      keys: this.accountKeys.map((E) => $r(E.toBytes())),
      recentBlockhash: Ct.decode(this.recentBlockhash)
    };
    let w = Ae.Buffer.alloc(2048);
    const v = u.encode(d, w);
    return i.copy(w, v), w.slice(0, v + i.length);
  }
  static from(e) {
    let t = [...e];
    const r = t.shift();
    if (r !== (r & Nu))
      throw new Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");
    const o = t.shift(), i = t.shift(), c = Xt(t);
    let u = [];
    for (let _ = 0; _ < c; _++) {
      const S = t.slice(0, vn);
      t = t.slice(vn), u.push(new le(Ae.Buffer.from(S)));
    }
    const d = t.slice(0, vn);
    t = t.slice(vn);
    const w = Xt(t);
    let v = [];
    for (let _ = 0; _ < w; _++) {
      const S = t.shift(), R = Xt(t), T = t.slice(0, R);
      t = t.slice(R);
      const L = Xt(t), P = t.slice(0, L), z = Ct.encode(Ae.Buffer.from(P));
      t = t.slice(L), v.push({
        programIdIndex: S,
        accounts: T,
        data: z
      });
    }
    const E = {
      header: {
        numRequiredSignatures: r,
        numReadonlySignedAccounts: o,
        numReadonlyUnsignedAccounts: i
      },
      recentBlockhash: Ct.encode(Ae.Buffer.from(d)),
      accountKeys: u,
      instructions: v
    };
    return new Pn(E);
  }
}
class _i {
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
    return new Mi(this.staticAccountKeys, t);
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
    const t = Ki.compile(e.instructions, e.payerKey), r = new Array(), o = {
      writable: new Array(),
      readonly: new Array()
    }, i = e.addressLookupTableAccounts || [];
    for (const v of i) {
      const E = t.extractTableLookup(v);
      if (E !== void 0) {
        const [_, {
          writable: S,
          readonly: R
        }] = E;
        r.push(_), o.writable.push(...S), o.readonly.push(...R);
      }
    }
    const [c, u] = t.getMessageComponents(), w = new Mi(u, o).compileInstructions(e.instructions);
    return new _i({
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
    const c = ue([Ne("prefix"), ue([Ne("numRequiredSignatures"), Ne("numReadonlySignedAccounts"), Ne("numReadonlyUnsignedAccounts")], "header"), $e(e.length, "staticAccountKeysLength"), Ft(Se(), this.staticAccountKeys.length, "staticAccountKeys"), Se("recentBlockhash"), $e(r.length, "instructionsLength"), $e(t.length, "serializedInstructions"), $e(i.length, "addressTableLookupsLength"), $e(o.length, "serializedAddressTableLookups")]), u = new Uint8Array(dr), d = 1 << 7, w = c.encode({
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
    const t = new Uint8Array(dr);
    for (const r of this.compiledInstructions) {
      const o = Array();
      Jt(o, r.accountKeyIndexes.length);
      const i = Array();
      Jt(i, r.data.length), e += ue([Ne("programIdIndex"), $e(o.length, "encodedAccountKeyIndexesLength"), Ft(Ne(), r.accountKeyIndexes.length, "accountKeyIndexes"), $e(i.length, "encodedDataLength"), $e(r.data.length, "data")]).encode({
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
    const t = new Uint8Array(dr);
    for (const r of this.addressTableLookups) {
      const o = Array();
      Jt(o, r.writableIndexes.length);
      const i = Array();
      Jt(i, r.readonlyIndexes.length), e += ue([Se("accountKey"), $e(o.length, "encodedWritableIndexesLength"), Ft(Ne(), r.writableIndexes.length, "writableIndexes"), $e(i.length, "encodedReadonlyIndexesLength"), Ft(Ne(), r.readonlyIndexes.length, "readonlyIndexes")]).encode({
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
    const r = t.shift(), o = r & Nu;
    vt(r !== o, "Expected versioned message but received legacy message");
    const i = o;
    vt(i === 0, `Expected versioned message with version 0 but found version ${i}`);
    const c = {
      numRequiredSignatures: t.shift(),
      numReadonlySignedAccounts: t.shift(),
      numReadonlyUnsignedAccounts: t.shift()
    }, u = [], d = Xt(t);
    for (let R = 0; R < d; R++)
      u.push(new le(t.splice(0, vn)));
    const w = Ct.encode(t.splice(0, vn)), v = Xt(t), E = [];
    for (let R = 0; R < v; R++) {
      const T = t.shift(), L = Xt(t), P = t.splice(0, L), z = Xt(t), U = new Uint8Array(t.splice(0, z));
      E.push({
        programIdIndex: T,
        accountKeyIndexes: P,
        data: U
      });
    }
    const _ = Xt(t), S = [];
    for (let R = 0; R < _; R++) {
      const T = new le(t.splice(0, vn)), L = Xt(t), P = t.splice(0, L), z = Xt(t), U = t.splice(0, z);
      S.push({
        accountKey: T,
        writableIndexes: P,
        readonlyIndexes: U
      });
    }
    return new _i({
      header: c,
      staticAccountKeys: u,
      recentBlockhash: w,
      compiledInstructions: E,
      addressTableLookups: S
    });
  }
}
let Cn;
(function(n) {
  n[n.BLOCKHEIGHT_EXCEEDED = 0] = "BLOCKHEIGHT_EXCEEDED", n[n.PROCESSED = 1] = "PROCESSED", n[n.TIMED_OUT = 2] = "TIMED_OUT";
})(Cn || (Cn = {}));
const Pd = Ae.Buffer.alloc(ws).fill(0);
class $a {
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
class Tn {
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
      "instructions" in t ? this.instructions = this.instructions.concat(t.instructions) : "data" in t && "programId" in t && "keys" in t ? this.instructions.push(t) : this.instructions.push(new $a(t));
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
      const L = T.programId.toString();
      o.includes(L) || o.push(L);
    }), o.forEach((T) => {
      i.push({
        pubkey: new le(T),
        isSigner: !1,
        isWritable: !1
      });
    });
    const c = [];
    i.forEach((T) => {
      const L = T.pubkey.toString(), P = c.findIndex((z) => z.pubkey.toString() === L);
      P > -1 ? (c[P].isWritable = c[P].isWritable || T.isWritable, c[P].isSigner = c[P].isSigner || T.isSigner) : c.push(T);
    }), c.sort(function(T, L) {
      return T.isSigner !== L.isSigner ? T.isSigner ? -1 : 1 : T.isWritable !== L.isWritable ? T.isWritable ? -1 : 1 : T.pubkey.toBase58().localeCompare(L.pubkey.toBase58());
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
      const L = c.findIndex((P) => P.pubkey.equals(T.publicKey));
      if (L > -1)
        c[L].isSigner || (c[L].isSigner = !0, console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."));
      else
        throw new Error(`unknown signer: ${T.publicKey.toString()}`);
    }
    let d = 0, w = 0, v = 0;
    const E = [], _ = [];
    c.forEach(({
      pubkey: T,
      isSigner: L,
      isWritable: P
    }) => {
      L ? (E.push(T.toString()), d += 1, P || (w += 1)) : (_.push(T.toString()), P || (v += 1));
    });
    const S = E.concat(_), R = t.map((T) => {
      const {
        data: L,
        programId: P
      } = T;
      return {
        programIdIndex: S.indexOf(P.toString()),
        accounts: T.keys.map((z) => S.indexOf(z.pubkey.toString())),
        data: Ct.encode(L)
      };
    });
    return R.forEach((T) => {
      vt(T.programIdIndex >= 0), T.accounts.forEach((L) => vt(L >= 0));
    }), new Pn({
      header: {
        numRequiredSignatures: d,
        numReadonlySignedAccounts: w,
        numReadonlyUnsignedAccounts: v
      },
      accountKeys: S,
      recentBlockhash: e,
      instructions: R
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
      const i = _d(r, o.secretKey);
      this._addSignature(o.publicKey, $r(i));
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
      } else if (!Cd(r, e, o.toBuffer()))
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
    }), e.copy(i, r.length + t.length * 64), vt(i.length <= dr, `Transaction too large: ${i.length} > ${dr}`), i;
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
      const c = t.slice(0, ws);
      t = t.slice(ws), o.push(Ct.encode(Ae.Buffer.from(c)));
    }
    return Tn.populate(Pn.from(t), o);
  }
  static populate(e, t = []) {
    const r = new Tn();
    return r.recentBlockhash = e.recentBlockhash, e.header.numRequiredSignatures > 0 && (r.feePayer = e.accountKeys[0]), t.forEach((o, i) => {
      const c = {
        signature: o == Ct.encode(Pd) ? null : Ct.decode(o),
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
      r.instructions.push(new $a({
        keys: i,
        programId: e.accountKeys[o.programIdIndex],
        data: Ct.decode(o.data)
      }));
    }), r._message = e, r._json = r.toJSON(), r;
  }
}
new le("SysvarC1ock11111111111111111111111111111111");
new le("SysvarEpochSchedu1e111111111111111111111111");
new le("Sysvar1nstructions1111111111111111111111111");
new le("SysvarRecentB1ockHashes11111111111111111111");
new le("SysvarRent111111111111111111111111111111111");
new le("SysvarRewards111111111111111111111111111111");
new le("SysvarS1otHashes111111111111111111111111111");
new le("SysvarS1otHistory11111111111111111111111111");
new le("SysvarStakeHistory1111111111111111111111111");
function di(n) {
  return new Promise((e) => setTimeout(e, n));
}
const Dd = Mt("lamportsPerSignature"), Lu = ue([de("version"), de("state"), Se("authorizedPubkey"), Se("nonce"), ue([Dd], "feeCalculator")]);
Lu.span;
class na {
  constructor(e) {
    this.authorizedPubkey = void 0, this.nonce = void 0, this.feeCalculator = void 0, this.authorizedPubkey = e.authorizedPubkey, this.nonce = e.nonce, this.feeCalculator = e.feeCalculator;
  }
  static fromAccountData(e) {
    const t = Lu.decode($r(e), 0);
    return new na({
      authorizedPubkey: new le(t.authorizedPubkey),
      nonce: new le(t.nonce).toString(),
      feeCalculator: t.feeCalculator
    });
  }
}
const Fd = (n) => {
  const e = n.decode.bind(n), t = n.encode.bind(n);
  return {
    decode: e,
    encode: t
  };
}, zd = (n) => (e) => {
  const t = $e(n, e), {
    encode: r,
    decode: o
  } = Fd(t), i = t;
  return i.decode = (c, u) => {
    const d = o(c, u);
    return ah(Ae.Buffer.from(d));
  }, i.encode = (c, u, d) => {
    const w = lh(c, n);
    return r(w, u, d);
  }, i;
}, wr = zd(8);
Object.freeze({
  Create: {
    index: 0,
    layout: ue([de("instruction"), Qt("lamports"), Qt("space"), Se("programId")])
  },
  Assign: {
    index: 1,
    layout: ue([de("instruction"), Se("programId")])
  },
  Transfer: {
    index: 2,
    layout: ue([de("instruction"), wr("lamports")])
  },
  CreateWithSeed: {
    index: 3,
    layout: ue([de("instruction"), Se("base"), ar("seed"), Qt("lamports"), Qt("space"), Se("programId")])
  },
  AdvanceNonceAccount: {
    index: 4,
    layout: ue([de("instruction")])
  },
  WithdrawNonceAccount: {
    index: 5,
    layout: ue([de("instruction"), Qt("lamports")])
  },
  InitializeNonceAccount: {
    index: 6,
    layout: ue([de("instruction"), Se("authorized")])
  },
  AuthorizeNonceAccount: {
    index: 7,
    layout: ue([de("instruction"), Se("authorized")])
  },
  Allocate: {
    index: 8,
    layout: ue([de("instruction"), Qt("space")])
  },
  AllocateWithSeed: {
    index: 9,
    layout: ue([de("instruction"), Se("base"), ar("seed"), Qt("space"), Se("programId")])
  },
  AssignWithSeed: {
    index: 10,
    layout: ue([de("instruction"), Se("base"), ar("seed"), Se("programId")])
  },
  TransferWithSeed: {
    index: 11,
    layout: ue([de("instruction"), wr("lamports"), ar("seed"), Se("programId")])
  },
  UpgradeNonceAccount: {
    index: 12,
    layout: ue([de("instruction")])
  }
});
new le("11111111111111111111111111111111");
new le("BPFLoader2111111111111111111111111111111111");
var Hd = Object.prototype.toString, Wd = Object.keys || function(n) {
  var e = [];
  for (var t in n)
    e.push(t);
  return e;
};
function Cr(n, e) {
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
        return Cr(n.toJSON(), e);
      if (d = Hd.call(n), d === "[object Array]") {
        for (o = "[", r = n.length - 1, t = 0; t < r; t++)
          o += Cr(n[t], !0) + ",";
        return r > -1 && (o += Cr(n[t], !0)), o + "]";
      } else if (d === "[object Object]") {
        for (i = Wd(n).sort(), r = i.length, o = "", t = 0; t < r; )
          c = i[t], u = Cr(n[c], !1), u !== void 0 && (o && (o += ","), o += JSON.stringify(c) + ":" + u), t++;
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
var Gd = function(n) {
  var e = Cr(n, !1);
  if (e !== void 0)
    return "" + e;
}, Qd = Gd;
const Mr = 32;
function Vo(n) {
  let e = 0;
  for (; n > 1; )
    n /= 2, e++;
  return e;
}
function qd(n) {
  return n === 0 ? 1 : (n--, n |= n >> 1, n |= n >> 2, n |= n >> 4, n |= n >> 8, n |= n >> 16, n |= n >> 32, n + 1);
}
class jd {
  constructor(e, t, r, o, i) {
    this.slotsPerEpoch = void 0, this.leaderScheduleSlotOffset = void 0, this.warmup = void 0, this.firstNormalEpoch = void 0, this.firstNormalSlot = void 0, this.slotsPerEpoch = e, this.leaderScheduleSlotOffset = t, this.warmup = r, this.firstNormalEpoch = o, this.firstNormalSlot = i;
  }
  getEpoch(e) {
    return this.getEpochAndSlotIndex(e)[0];
  }
  getEpochAndSlotIndex(e) {
    if (e < this.firstNormalSlot) {
      const t = Vo(qd(e + Mr + 1)) - Vo(Mr) - 1, r = this.getSlotsInEpoch(t), o = e - (r - Mr);
      return [t, o];
    } else {
      const t = e - this.firstNormalSlot, r = Math.floor(t / this.slotsPerEpoch), o = this.firstNormalEpoch + r, i = t % this.slotsPerEpoch;
      return [o, i];
    }
  }
  getFirstSlotInEpoch(e) {
    return e <= this.firstNormalEpoch ? (Math.pow(2, e) - 1) * Mr : (e - this.firstNormalEpoch) * this.slotsPerEpoch + this.firstNormalSlot;
  }
  getLastSlotInEpoch(e) {
    return this.getFirstSlotInEpoch(e) + this.getSlotsInEpoch(e) - 1;
  }
  getSlotsInEpoch(e) {
    return e < this.firstNormalEpoch ? Math.pow(2, e + Vo(Mr)) : this.slotsPerEpoch;
  }
}
class ec extends Error {
  constructor(e, t) {
    super(e), this.logs = void 0, this.logs = t;
  }
}
class fe extends Error {
  constructor({
    code: e,
    message: t,
    data: r
  }, o) {
    super(o != null ? `${o}: ${t}` : t), this.code = void 0, this.data = void 0, this.code = e, this.data = r, this.name = "SolanaJSONRPCError";
  }
}
var Yd = globalThis.fetch;
const Kd = 160, Vd = 64, Zd = Kd / Vd, Xd = 1e3 / Zd;
function Jd(n, e) {
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
const tc = 56;
class nc {
  constructor(e) {
    this.key = void 0, this.state = void 0, this.key = e.key, this.state = e.state;
  }
  isActive() {
    const e = BigInt("0xffffffffffffffff");
    return this.state.deactivationSlot === e;
  }
  static deserialize(e) {
    const t = Jd($d, e), r = e.length - tc;
    vt(r >= 0, "lookup table is invalid"), vt(r % 32 === 0, "lookup table is invalid");
    const o = r / 32, {
      addresses: i
    } = ue([Ft(Se(), o, "addresses")]).decode(e.slice(tc));
    return {
      deactivationSlot: t.deactivationSlot,
      lastExtendedSlot: t.lastExtendedSlot,
      lastExtendedSlotStartIndex: t.lastExtendedStartIndex,
      authority: t.authority.length !== 0 ? new le(t.authority[0]) : void 0,
      addresses: i.map((c) => new le(c))
    };
  }
}
const $d = {
  index: 1,
  layout: ue([
    de("typeIndex"),
    wr("deactivationSlot"),
    Mt("lastExtendedSlot"),
    Ne("lastExtendedStartIndex"),
    Ne(),
    Ft(Se(), Gn(Ne(), -1), "authority")
  ])
}, e0 = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i;
function t0(n) {
  const e = n.match(e0);
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
var Zo;
const xt = Jr(Ys(le), te(), (n) => new le(n)), Uu = Ks([te(), Je("base64")]), ra = Jr(Ys(Ae.Buffer), Uu, (n) => Ae.Buffer.from(n[0], "base64")), n0 = 30 * 1e3;
function r0(n) {
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
function Pu(n) {
  return Wt([X({
    jsonrpc: Je("2.0"),
    id: te(),
    result: n
  }), X({
    jsonrpc: Je("2.0"),
    id: te(),
    error: X({
      code: Xr(),
      message: te(),
      data: Ee(mh())
    })
  })]);
}
const i0 = Pu(Xr());
function _e(n) {
  return Jr(Pu(n), i0, (e) => "error" in e ? e : {
    ...e,
    result: re(e.result, n)
  });
}
function St(n) {
  return _e(X({
    context: X({
      slot: G()
    }),
    value: n
  }));
}
function Vi(n) {
  return X({
    context: X({
      slot: G()
    }),
    value: n
  });
}
function Xo(n, e) {
  return n === 0 ? new _i({
    header: e.header,
    staticAccountKeys: e.accountKeys.map((t) => new le(t)),
    recentBlockhash: e.recentBlockhash,
    compiledInstructions: e.instructions.map((t) => ({
      programIdIndex: t.programIdIndex,
      accountKeyIndexes: t.accounts,
      data: Ct.decode(t.data)
    })),
    addressTableLookups: e.addressTableLookups
  }) : new Pn(e);
}
const o0 = X({
  foundation: G(),
  foundationTerm: G(),
  initial: G(),
  taper: G(),
  terminal: G()
}), s0 = _e(ce(he(X({
  epoch: G(),
  effectiveSlot: G(),
  amount: G(),
  postBalance: G()
})))), a0 = X({
  epoch: G(),
  slotIndex: G(),
  slotsInEpoch: G(),
  absoluteSlot: G(),
  blockHeight: Ee(G()),
  transactionCount: Ee(G())
}), c0 = X({
  slotsPerEpoch: G(),
  leaderScheduleSlotOffset: G(),
  warmup: En(),
  firstNormalEpoch: G(),
  firstNormalSlot: G()
}), u0 = bu(te(), ce(G())), nr = he(Wt([X({}), te()])), l0 = X({
  err: nr
}), f0 = Je("receivedSignature"), h0 = X({
  "solana-core": te(),
  "feature-set": Ee(G())
}), rc = St(X({
  err: he(Wt([X({}), te()])),
  logs: he(ce(te())),
  accounts: Ee(he(ce(he(X({
    executable: En(),
    owner: te(),
    lamports: G(),
    data: ce(te()),
    rentEpoch: Ee(G())
  }))))),
  unitsConsumed: Ee(G()),
  returnData: Ee(he(X({
    programId: te(),
    data: Ks([te(), Je("base64")])
  })))
})), d0 = St(X({
  byIdentity: bu(te(), ce(G())),
  range: X({
    firstSlot: G(),
    lastSlot: G()
  })
}));
function p0(n, e, t, r, o) {
  const i = t || Yd;
  let c;
  return r && (c = async (d, w) => {
    const v = await new Promise((E, _) => {
      try {
        r(d, w, (S, R) => E([S, R]));
      } catch (S) {
        _(S);
      }
    });
    return await i(...v);
  }), new ud(async (d, w) => {
    const E = {
      method: "POST",
      body: d,
      agent: void 0,
      headers: Object.assign({
        "Content-Type": "application/json"
      }, e || {}, up)
    };
    try {
      let _ = 5, S, R = 500;
      for (; c ? S = await c(n, E) : S = await i(n, E), !(S.status !== 429 || o === !0 || (_ -= 1, _ === 0)); )
        console.log(`Server responded with ${S.status} ${S.statusText}.  Retrying after ${R}ms delay...`), await di(R), R *= 2;
      const T = await S.text();
      S.ok ? w(null, T) : w(new Error(`${S.status} ${S.statusText}: ${T}`));
    } catch (_) {
      _ instanceof Error && w(_);
    } finally {
    }
  }, {});
}
function g0(n) {
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
function y0(n) {
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
const w0 = _e(o0), m0 = _e(a0), b0 = _e(c0), A0 = _e(u0), v0 = _e(G()), E0 = St(X({
  total: G(),
  circulating: G(),
  nonCirculating: G(),
  nonCirculatingAccounts: ce(xt)
})), ms = X({
  amount: te(),
  uiAmount: he(G()),
  decimals: G(),
  uiAmountString: Ee(te())
}), x0 = St(ce(X({
  address: xt,
  amount: te(),
  uiAmount: he(G()),
  decimals: G(),
  uiAmountString: Ee(te())
}))), S0 = St(ce(X({
  pubkey: xt,
  account: X({
    executable: En(),
    owner: xt,
    lamports: G(),
    data: ra,
    rentEpoch: G()
  })
}))), bs = X({
  program: te(),
  parsed: Xr(),
  space: G()
}), I0 = St(ce(X({
  pubkey: xt,
  account: X({
    executable: En(),
    owner: xt,
    lamports: G(),
    data: bs,
    rentEpoch: G()
  })
}))), B0 = St(ce(X({
  lamports: G(),
  address: xt
}))), Pr = X({
  executable: En(),
  owner: xt,
  lamports: G(),
  data: ra,
  rentEpoch: G()
}), M0 = X({
  pubkey: xt,
  account: Pr
}), _0 = Jr(Wt([Ys(Ae.Buffer), bs]), Wt([Uu, bs]), (n) => Array.isArray(n) ? re(n, ra) : n), Du = X({
  executable: En(),
  owner: xt,
  lamports: G(),
  data: _0,
  rentEpoch: G()
}), C0 = X({
  pubkey: xt,
  account: Du
}), T0 = X({
  state: Wt([Je("active"), Je("inactive"), Je("activating"), Je("deactivating")]),
  active: G(),
  inactive: G()
}), R0 = _e(ce(X({
  signature: te(),
  slot: G(),
  err: nr,
  memo: he(te()),
  blockTime: Ee(he(G()))
}))), N0 = _e(ce(X({
  signature: te(),
  slot: G(),
  err: nr,
  memo: he(te()),
  blockTime: Ee(he(G()))
}))), k0 = X({
  subscription: G(),
  result: Vi(Pr)
}), O0 = X({
  pubkey: xt,
  account: Pr
}), L0 = X({
  subscription: G(),
  result: Vi(O0)
}), U0 = X({
  parent: G(),
  slot: G(),
  root: G()
}), P0 = X({
  subscription: G(),
  result: U0
}), D0 = Wt([X({
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
})]), F0 = X({
  subscription: G(),
  result: D0
}), z0 = X({
  subscription: G(),
  result: Vi(Wt([l0, f0]))
}), H0 = X({
  subscription: G(),
  result: G()
}), W0 = X({
  pubkey: te(),
  gossip: he(te()),
  tpu: he(te()),
  rpc: he(te()),
  version: he(te())
}), ic = X({
  votePubkey: te(),
  nodePubkey: te(),
  activatedStake: G(),
  epochVoteAccount: En(),
  epochCredits: ce(Ks([G(), G(), G()])),
  commission: G(),
  lastVote: G(),
  rootSlot: he(G())
}), G0 = _e(X({
  current: ce(ic),
  delinquent: ce(ic)
})), Q0 = Wt([Je("processed"), Je("confirmed"), Je("finalized")]), q0 = X({
  slot: G(),
  confirmations: he(G()),
  err: nr,
  confirmationStatus: Ee(Q0)
}), j0 = St(ce(he(q0))), Y0 = _e(G()), Fu = X({
  accountKey: xt,
  writableIndexes: ce(G()),
  readonlyIndexes: ce(G())
}), ia = X({
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
    addressTableLookups: Ee(ce(Fu))
  })
}), zu = X({
  parsed: Xr(),
  program: te(),
  programId: xt
}), Hu = X({
  accounts: ce(xt),
  data: te(),
  programId: xt
}), K0 = Wt([Hu, zu]), V0 = Wt([X({
  parsed: Xr(),
  program: te(),
  programId: te()
}), X({
  accounts: ce(te()),
  data: te(),
  programId: te()
})]), Wu = Jr(K0, V0, (n) => "accounts" in n ? re(n, Hu) : re(n, zu)), Z0 = X({
  signatures: ce(te()),
  message: X({
    accountKeys: ce(X({
      pubkey: xt,
      signer: En(),
      writable: En(),
      source: Ee(Wt([Je("transaction"), Je("lookupTable")]))
    })),
    instructions: ce(Wu),
    recentBlockhash: te(),
    addressTableLookups: Ee(he(ce(Fu)))
  })
}), Ci = X({
  accountIndex: G(),
  mint: te(),
  owner: Ee(te()),
  uiTokenAmount: ms
}), Gu = X({
  writable: ce(xt),
  readonly: ce(xt)
}), oa = X({
  err: nr,
  fee: G(),
  innerInstructions: Ee(he(ce(X({
    index: G(),
    instructions: ce(X({
      accounts: ce(G()),
      data: te(),
      programIdIndex: G()
    }))
  })))),
  preBalances: ce(G()),
  postBalances: ce(G()),
  logMessages: Ee(he(ce(te()))),
  preTokenBalances: Ee(he(ce(Ci))),
  postTokenBalances: Ee(he(ce(Ci))),
  loadedAddresses: Ee(Gu),
  computeUnitsConsumed: Ee(G())
}), X0 = X({
  err: nr,
  fee: G(),
  innerInstructions: Ee(he(ce(X({
    index: G(),
    instructions: ce(Wu)
  })))),
  preBalances: ce(G()),
  postBalances: ce(G()),
  logMessages: Ee(he(ce(te()))),
  preTokenBalances: Ee(he(ce(Ci))),
  postTokenBalances: Ee(he(ce(Ci))),
  loadedAddresses: Ee(Gu),
  computeUnitsConsumed: Ee(G())
}), sa = Wt([Je(0), Je("legacy")]), J0 = _e(he(X({
  blockhash: te(),
  previousBlockhash: te(),
  parentSlot: G(),
  transactions: ce(X({
    transaction: ia,
    meta: he(oa),
    version: Ee(sa)
  })),
  rewards: Ee(ce(X({
    pubkey: te(),
    lamports: G(),
    postBalance: he(G()),
    rewardType: he(te())
  }))),
  blockTime: he(G()),
  blockHeight: he(G())
}))), $0 = _e(he(X({
  blockhash: te(),
  previousBlockhash: te(),
  parentSlot: G(),
  transactions: ce(X({
    transaction: ia,
    meta: he(oa)
  })),
  rewards: Ee(ce(X({
    pubkey: te(),
    lamports: G(),
    postBalance: he(G()),
    rewardType: he(te())
  }))),
  blockTime: he(G())
}))), oc = _e(he(X({
  blockhash: te(),
  previousBlockhash: te(),
  parentSlot: G(),
  signatures: ce(te()),
  blockTime: he(G())
}))), Jo = _e(he(X({
  slot: G(),
  meta: oa,
  blockTime: Ee(he(G())),
  transaction: ia,
  version: Ee(sa)
}))), ci = _e(he(X({
  slot: G(),
  transaction: Z0,
  meta: he(X0),
  blockTime: Ee(he(G())),
  version: Ee(sa)
}))), ep = St(X({
  blockhash: te(),
  feeCalculator: X({
    lamportsPerSignature: G()
  })
})), tp = St(X({
  blockhash: te(),
  lastValidBlockHeight: G()
})), np = X({
  slot: G(),
  numTransactions: G(),
  numSlots: G(),
  samplePeriodSecs: G()
}), rp = _e(ce(np)), ip = St(he(X({
  feeCalculator: X({
    lamportsPerSignature: G()
  })
}))), op = _e(te()), sp = _e(te()), ap = X({
  err: nr,
  logs: ce(te()),
  signature: te()
}), cp = X({
  result: Vi(ap),
  subscription: G()
}), up = {
  "solana-client": `js/${(Zo = "0.0.0-development") !== null && Zo !== void 0 ? Zo : "UNKNOWN"}`
};
class lp {
  constructor(e, t) {
    this._commitment = void 0, this._confirmTransactionInitialTimeout = void 0, this._rpcEndpoint = void 0, this._rpcWsEndpoint = void 0, this._rpcClient = void 0, this._rpcRequest = void 0, this._rpcBatchRequest = void 0, this._rpcWebSocket = void 0, this._rpcWebSocketConnected = !1, this._rpcWebSocketHeartbeat = null, this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketGeneration = 0, this._disableBlockhashCaching = !1, this._pollingBlockhash = !1, this._blockhashInfo = {
      latestBlockhash: null,
      lastFetch: 0,
      transactionSignatures: [],
      simulatedSignatures: []
    }, this._nextClientSubscriptionId = 0, this._subscriptionDisposeFunctionsByClientSubscriptionId = {}, this._subscriptionCallbacksByServerSubscriptionId = {}, this._subscriptionsByHash = {}, this._subscriptionsAutoDisposedByRpc = /* @__PURE__ */ new Set();
    let r, o, i, c, u;
    t && typeof t == "string" ? this._commitment = t : t && (this._commitment = t.commitment, this._confirmTransactionInitialTimeout = t.confirmTransactionInitialTimeout, r = t.wsEndpoint, o = t.httpHeaders, i = t.fetch, c = t.fetchMiddleware, u = t.disableRetryOnRateLimit), this._rpcEndpoint = r0(e), this._rpcWsEndpoint = r || t0(e), this._rpcClient = p0(e, o, i, c, u), this._rpcRequest = g0(this._rpcClient), this._rpcBatchRequest = y0(this._rpcClient), this._rpcWebSocket = new Au(this._rpcWsEndpoint, {
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
    ), c = await this._rpcRequest("getBalance", i), u = re(c, St(G()));
    if ("error" in u)
      throw new fe(u.error, `failed to get balance for ${e.toBase58()}`);
    return u.result;
  }
  async getBalance(e, t) {
    return await this.getBalanceAndContext(e, t).then((r) => r.value).catch((r) => {
      throw new Error("failed to get balance of account " + e.toBase58() + ": " + r);
    });
  }
  async getBlockTime(e) {
    const t = await this._rpcRequest("getBlockTime", [e]), r = re(t, _e(he(G())));
    if ("error" in r)
      throw new fe(r.error, `failed to get block time for slot ${e}`);
    return r.result;
  }
  async getMinimumLedgerSlot() {
    const e = await this._rpcRequest("minimumLedgerSlot", []), t = re(e, _e(G()));
    if ("error" in t)
      throw new fe(t.error, "failed to get minimum ledger slot");
    return t.result;
  }
  async getFirstAvailableBlock() {
    const e = await this._rpcRequest("getFirstAvailableBlock", []), t = re(e, v0);
    if ("error" in t)
      throw new fe(t.error, "failed to get first available block");
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
    const r = await this._rpcRequest("getSupply", [t]), o = re(r, E0);
    if ("error" in o)
      throw new fe(o.error, "failed to get supply");
    return o.result;
  }
  async getTokenSupply(e, t) {
    const r = this._buildArgs([e.toBase58()], t), o = await this._rpcRequest("getTokenSupply", r), i = re(o, St(ms));
    if ("error" in i)
      throw new fe(i.error, "failed to get token supply");
    return i.result;
  }
  async getTokenAccountBalance(e, t) {
    const r = this._buildArgs([e.toBase58()], t), o = await this._rpcRequest("getTokenAccountBalance", r), i = re(o, St(ms));
    if ("error" in i)
      throw new fe(i.error, "failed to get token account balance");
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
    const u = this._buildArgs(c, o, "base64", i), d = await this._rpcRequest("getTokenAccountsByOwner", u), w = re(d, S0);
    if ("error" in w)
      throw new fe(w.error, `failed to get token accounts owned by account ${e.toBase58()}`);
    return w.result;
  }
  async getParsedTokenAccountsByOwner(e, t, r) {
    let o = [e.toBase58()];
    "mint" in t ? o.push({
      mint: t.mint.toBase58()
    }) : o.push({
      programId: t.programId.toBase58()
    });
    const i = this._buildArgs(o, r, "jsonParsed"), c = await this._rpcRequest("getTokenAccountsByOwner", i), u = re(c, I0);
    if ("error" in u)
      throw new fe(u.error, `failed to get token accounts owned by account ${e.toBase58()}`);
    return u.result;
  }
  async getLargestAccounts(e) {
    const t = {
      ...e,
      commitment: e && e.commitment || this.commitment
    }, r = t.filter || t.commitment ? [t] : [], o = await this._rpcRequest("getLargestAccounts", r), i = re(o, B0);
    if ("error" in i)
      throw new fe(i.error, "failed to get largest accounts");
    return i.result;
  }
  async getTokenLargestAccounts(e, t) {
    const r = this._buildArgs([e.toBase58()], t), o = await this._rpcRequest("getTokenLargestAccounts", r), i = re(o, x0);
    if ("error" in i)
      throw new fe(i.error, "failed to get token largest accounts");
    return i.result;
  }
  async getAccountInfoAndContext(e, t) {
    const {
      commitment: r,
      config: o
    } = tt(t), i = this._buildArgs([e.toBase58()], r, "base64", o), c = await this._rpcRequest("getAccountInfo", i), u = re(c, St(he(Pr)));
    if ("error" in u)
      throw new fe(u.error, `failed to get info about account ${e.toBase58()}`);
    return u.result;
  }
  async getParsedAccountInfo(e, t) {
    const {
      commitment: r,
      config: o
    } = tt(t), i = this._buildArgs([e.toBase58()], r, "jsonParsed", o), c = await this._rpcRequest("getAccountInfo", i), u = re(c, St(he(Du)));
    if ("error" in u)
      throw new fe(u.error, `failed to get info about account ${e.toBase58()}`);
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
    } = tt(t), i = e.map((w) => w.toBase58()), c = this._buildArgs([i], r, "base64", o), u = await this._rpcRequest("getMultipleAccounts", c), d = re(u, St(ce(he(Pr))));
    if ("error" in d)
      throw new fe(d.error, `failed to get info for accounts ${i}`);
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
    ), u = await this._rpcRequest("getStakeActivation", c), d = re(u, _e(T0));
    if ("error" in d)
      throw new fe(d.error, `failed to get Stake Activation ${e.toBase58()}`);
    return d.result;
  }
  async getProgramAccounts(e, t) {
    const {
      commitment: r,
      config: o
    } = tt(t), {
      encoding: i,
      ...c
    } = o || {}, u = this._buildArgs([e.toBase58()], r, i || "base64", c), d = await this._rpcRequest("getProgramAccounts", u), w = re(d, _e(ce(M0)));
    if ("error" in w)
      throw new fe(w.error, `failed to get accounts owned by program ${e.toBase58()}`);
    return w.result;
  }
  async getParsedProgramAccounts(e, t) {
    const {
      commitment: r,
      config: o
    } = tt(t), i = this._buildArgs([e.toBase58()], r, "jsonParsed", o), c = await this._rpcRequest("getProgramAccounts", i), u = re(c, _e(ce(C0)));
    if ("error" in u)
      throw new fe(u.error, `failed to get accounts owned by program ${e.toBase58()}`);
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
    const w = new Promise((_, S) => {
      try {
        u = this.onSignature(r, (R, T) => {
          u = void 0;
          const L = {
            context: T,
            value: R
          };
          d = !0, _({
            __type: Cn.PROCESSED,
            response: L
          });
        }, i);
      } catch (R) {
        S(R);
      }
    }), v = new Promise((_) => {
      if (typeof e == "string") {
        let S = this._confirmTransactionInitialTimeout || 6e4;
        switch (i) {
          case "processed":
          case "recent":
          case "single":
          case "confirmed":
          case "singleGossip": {
            S = this._confirmTransactionInitialTimeout || 30 * 1e3;
            break;
          }
        }
        c = setTimeout(() => _({
          __type: Cn.TIMED_OUT,
          timeoutMs: S
        }), S);
      } else {
        let S = e;
        const R = async () => {
          try {
            return await this.getBlockHeight(t);
          } catch {
            return -1;
          }
        };
        (async () => {
          let T = await R();
          if (!d) {
            for (; T <= S.lastValidBlockHeight; )
              if (await di(1e3), d || (T = await R(), d))
                return;
            _({
              __type: Cn.BLOCKHEIGHT_EXCEEDED
            });
          }
        })();
      }
    });
    let E;
    try {
      const _ = await Promise.race([w, v]);
      switch (_.__type) {
        case Cn.BLOCKHEIGHT_EXCEEDED:
          throw new ku(r);
        case Cn.PROCESSED:
          E = _.response;
          break;
        case Cn.TIMED_OUT:
          throw new Ou(r, _.timeoutMs / 1e3);
      }
    } finally {
      clearTimeout(c), u && this.removeSignatureListener(u);
    }
    return E;
  }
  async getClusterNodes() {
    const e = await this._rpcRequest("getClusterNodes", []), t = re(e, _e(ce(W0)));
    if ("error" in t)
      throw new fe(t.error, "failed to get cluster nodes");
    return t.result;
  }
  async getVoteAccounts(e) {
    const t = this._buildArgs([], e), r = await this._rpcRequest("getVoteAccounts", t), o = re(r, G0);
    if ("error" in o)
      throw new fe(o.error, "failed to get vote accounts");
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
      throw new fe(c.error, "failed to get slot");
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
      throw new fe(c.error, "failed to get slot leader");
    return c.result;
  }
  async getSlotLeaders(e, t) {
    const r = [e, t], o = await this._rpcRequest("getSlotLeaders", r), i = re(o, _e(ce(xt)));
    if ("error" in i)
      throw new fe(i.error, "failed to get slot leaders");
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
    const o = await this._rpcRequest("getSignatureStatuses", r), i = re(o, j0);
    if ("error" in i)
      throw new fe(i.error, "failed to get signature status");
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
      throw new fe(c.error, "failed to get transaction count");
    return c.result;
  }
  async getTotalSupply(e) {
    return (await this.getSupply({
      commitment: e,
      excludeNonCirculatingAccountsList: !0
    })).value.total;
  }
  async getInflationGovernor(e) {
    const t = this._buildArgs([], e), r = await this._rpcRequest("getInflationGovernor", t), o = re(r, w0);
    if ("error" in o)
      throw new fe(o.error, "failed to get inflation");
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
    ), u = await this._rpcRequest("getInflationReward", c), d = re(u, s0);
    if ("error" in d)
      throw new fe(d.error, "failed to get inflation reward");
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
    ), i = await this._rpcRequest("getEpochInfo", o), c = re(i, m0);
    if ("error" in c)
      throw new fe(c.error, "failed to get epoch info");
    return c.result;
  }
  async getEpochSchedule() {
    const e = await this._rpcRequest("getEpochSchedule", []), t = re(e, b0);
    if ("error" in t)
      throw new fe(t.error, "failed to get epoch schedule");
    const r = t.result;
    return new jd(r.slotsPerEpoch, r.leaderScheduleSlotOffset, r.warmup, r.firstNormalEpoch, r.firstNormalSlot);
  }
  async getLeaderSchedule() {
    const e = await this._rpcRequest("getLeaderSchedule", []), t = re(e, A0);
    if ("error" in t)
      throw new fe(t.error, "failed to get leader schedule");
    return t.result;
  }
  async getMinimumBalanceForRentExemption(e, t) {
    const r = this._buildArgs([e], t), o = await this._rpcRequest("getMinimumBalanceForRentExemption", r), i = re(o, Y0);
    return "error" in i ? (console.warn("Unable to fetch minimum balance for rent exemption"), 0) : i.result;
  }
  async getRecentBlockhashAndContext(e) {
    const t = this._buildArgs([], e), r = await this._rpcRequest("getRecentBlockhash", t), o = re(r, ep);
    if ("error" in o)
      throw new fe(o.error, "failed to get recent blockhash");
    return o.result;
  }
  async getRecentPerformanceSamples(e) {
    const t = await this._rpcRequest("getRecentPerformanceSamples", e ? [e] : []), r = re(t, rp);
    if ("error" in r)
      throw new fe(r.error, "failed to get recent performance samples");
    return r.result;
  }
  async getFeeCalculatorForBlockhash(e, t) {
    const r = this._buildArgs([e], t), o = await this._rpcRequest("getFeeCalculatorForBlockhash", r), i = re(o, ip);
    if ("error" in i)
      throw new fe(i.error, "failed to get fee calculator");
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
    const r = e.serialize().toString("base64"), o = this._buildArgs([r], t), i = await this._rpcRequest("getFeeForMessage", o), c = re(i, St(he(G())));
    if ("error" in c)
      throw new fe(c.error, "failed to get slot");
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
    ), i = await this._rpcRequest("getLatestBlockhash", o), c = re(i, tp);
    if ("error" in c)
      throw new fe(c.error, "failed to get latest blockhash");
    return c.result;
  }
  async getVersion() {
    const e = await this._rpcRequest("getVersion", []), t = re(e, _e(h0));
    if ("error" in t)
      throw new fe(t.error, "failed to get version");
    return t.result;
  }
  async getGenesisHash() {
    const e = await this._rpcRequest("getGenesisHash", []), t = re(e, _e(te()));
    if ("error" in t)
      throw new fe(t.error, "failed to get genesis hash");
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
    ), c = await this._rpcRequest("getBlock", i), u = re(c, J0);
    if ("error" in u)
      throw new fe(u.error, "failed to get confirmed block");
    const d = u.result;
    return d && {
      ...d,
      transactions: d.transactions.map(({
        transaction: w,
        meta: v,
        version: E
      }) => ({
        meta: v,
        transaction: {
          ...w,
          message: Xo(E, w.message)
        },
        version: E
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
      throw new fe(c.error, "failed to get block height information");
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
    const o = this._buildArgs([], r, "base64", t), i = await this._rpcRequest("getBlockProduction", o), c = re(i, d0);
    if ("error" in c)
      throw new fe(c.error, "failed to get block production information");
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
    ), c = await this._rpcRequest("getTransaction", i), u = re(c, Jo);
    if ("error" in u)
      throw new fe(u.error, "failed to get transaction");
    const d = u.result;
    return d && {
      ...d,
      transaction: {
        ...d.transaction,
        message: Xo(d.version, d.transaction.message)
      }
    };
  }
  async getParsedTransaction(e, t) {
    const {
      commitment: r,
      config: o
    } = tt(t), i = this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", o), c = await this._rpcRequest("getTransaction", i), u = re(c, ci);
    if ("error" in u)
      throw new fe(u.error, "failed to get transaction");
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
      const w = re(d, ci);
      if ("error" in w)
        throw new fe(w.error, "failed to get transactions");
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
      const w = re(d, Jo);
      if ("error" in w)
        throw new fe(w.error, "failed to get transactions");
      const v = w.result;
      return v && {
        ...v,
        transaction: {
          ...v.transaction,
          message: Xo(v.version, v.transaction.message)
        }
      };
    });
  }
  async getConfirmedBlock(e, t) {
    const r = this._buildArgsAtLeastConfirmed([e], t), o = await this._rpcRequest("getConfirmedBlock", r), i = re(o, $0);
    if ("error" in i)
      throw new fe(i.error, "failed to get confirmed block");
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
        transaction: Tn.populate(d.message, d.signatures)
      }))
    };
  }
  async getBlocks(e, t, r) {
    const o = this._buildArgsAtLeastConfirmed(t !== void 0 ? [e, t] : [e], r), i = await this._rpcRequest("getBlocks", o), c = re(i, _e(ce(G())));
    if ("error" in c)
      throw new fe(c.error, "failed to get blocks");
    return c.result;
  }
  async getBlockSignatures(e, t) {
    const r = this._buildArgsAtLeastConfirmed([e], t, void 0, {
      transactionDetails: "signatures",
      rewards: !1
    }), o = await this._rpcRequest("getBlock", r), i = re(o, oc);
    if ("error" in i)
      throw new fe(i.error, "failed to get block");
    const c = i.result;
    if (!c)
      throw new Error("Block " + e + " not found");
    return c;
  }
  async getConfirmedBlockSignatures(e, t) {
    const r = this._buildArgsAtLeastConfirmed([e], t, void 0, {
      transactionDetails: "signatures",
      rewards: !1
    }), o = await this._rpcRequest("getConfirmedBlock", r), i = re(o, oc);
    if ("error" in i)
      throw new fe(i.error, "failed to get confirmed block");
    const c = i.result;
    if (!c)
      throw new Error("Confirmed block " + e + " not found");
    return c;
  }
  async getConfirmedTransaction(e, t) {
    const r = this._buildArgsAtLeastConfirmed([e], t), o = await this._rpcRequest("getConfirmedTransaction", r), i = re(o, Jo);
    if ("error" in i)
      throw new fe(i.error, "failed to get transaction");
    const c = i.result;
    if (!c)
      return c;
    const u = new Pn(c.transaction.message), d = c.transaction.signatures;
    return {
      ...c,
      transaction: Tn.populate(u, d)
    };
  }
  async getParsedConfirmedTransaction(e, t) {
    const r = this._buildArgsAtLeastConfirmed([e], t, "jsonParsed"), o = await this._rpcRequest("getConfirmedTransaction", r), i = re(o, ci);
    if ("error" in i)
      throw new fe(i.error, "failed to get confirmed transaction");
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
      const u = re(c, ci);
      if ("error" in u)
        throw new fe(u.error, "failed to get confirmed transactions");
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
    const o = this._buildArgsAtLeastConfirmed([e.toBase58()], r, void 0, t), i = await this._rpcRequest("getConfirmedSignaturesForAddress2", o), c = re(i, R0);
    if ("error" in c)
      throw new fe(c.error, "failed to get confirmed signatures for address");
    return c.result;
  }
  async getSignaturesForAddress(e, t, r) {
    const o = this._buildArgsAtLeastConfirmed([e.toBase58()], r, void 0, t), i = await this._rpcRequest("getSignaturesForAddress", o), c = re(i, N0);
    if ("error" in c)
      throw new fe(c.error, "failed to get signatures for address");
    return c.result;
  }
  async getAddressLookupTable(e, t) {
    const {
      context: r,
      value: o
    } = await this.getAccountInfoAndContext(e, t);
    let i = null;
    return o !== null && (i = new nc({
      key: e,
      state: nc.deserialize(o.data)
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
    return o !== null && (i = na.fromAccountData(o.data)), {
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
    const r = await this._rpcRequest("requestAirdrop", [e.toBase58(), t]), o = re(r, op);
    if ("error" in o)
      throw new fe(o.error, `airdrop to ${e.toBase58()} failed`);
    return o.result;
  }
  async _blockhashWithExpiryBlockHeight(e) {
    if (!e) {
      for (; this._pollingBlockhash; )
        await di(100);
      const r = Date.now() - this._blockhashInfo.lastFetch >= n0;
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
        await di(Xd / 2);
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
    } = tt(e), o = this._buildArgs([], t, "base64", r), i = await this._rpcRequest("getStakeMinimumDelegation", o), c = re(i, St(G()));
    if ("error" in c)
      throw new fe(c.error, "failed to get stake minimum delegation");
    return c.result;
  }
  async simulateTransaction(e, t, r) {
    if ("message" in e) {
      const T = e.serialize(), L = Ae.Buffer.from(T).toString("base64");
      if (Array.isArray(t) || r !== void 0)
        throw new Error("Invalid arguments");
      const P = t || {};
      P.encoding = "base64", "commitment" in P || (P.commitment = this.commitment);
      const z = [L, P], U = await this._rpcRequest("simulateTransaction", z), F = re(U, rc);
      if ("error" in F)
        throw new Error("failed to simulate transaction: " + F.error.message);
      return F.result;
    }
    let o;
    if (e instanceof Tn) {
      let R = e;
      o = new Tn(), o.feePayer = R.feePayer, o.instructions = e.instructions, o.nonceInfo = R.nonceInfo, o.signatures = R.signatures;
    } else
      o = Tn.populate(e), o._message = o._json = void 0;
    if (t !== void 0 && !Array.isArray(t))
      throw new Error("Invalid arguments");
    const i = t;
    if (o.nonceInfo && i)
      o.sign(...i);
    else {
      let R = this._disableBlockhashCaching;
      for (; ; ) {
        const T = await this._blockhashWithExpiryBlockHeight(R);
        if (o.lastValidBlockHeight = T.lastValidBlockHeight, o.recentBlockhash = T.blockhash, !i)
          break;
        if (o.sign(...i), !o.signature)
          throw new Error("!signature");
        const L = o.signature.toString("base64");
        if (!this._blockhashInfo.simulatedSignatures.includes(L) && !this._blockhashInfo.transactionSignatures.includes(L)) {
          this._blockhashInfo.simulatedSignatures.push(L);
          break;
        } else
          R = !0;
      }
    }
    const c = o._compile(), u = c.serialize(), w = o._serialize(u).toString("base64"), v = {
      encoding: "base64",
      commitment: this.commitment
    };
    if (r) {
      const R = (Array.isArray(r) ? r : c.nonProgramIds()).map((T) => T.toBase58());
      v.accounts = {
        encoding: "base64",
        addresses: R
      };
    }
    i && (v.sigVerify = !0);
    const E = [w, v], _ = await this._rpcRequest("simulateTransaction", E), S = re(_, rc);
    if ("error" in S) {
      let R;
      if ("data" in S.error && (R = S.error.data.logs, R && Array.isArray(R))) {
        const T = `
    `, L = T + R.join(T);
        console.error(S.error.message, L);
      }
      throw new ec("failed to simulate transaction: " + S.error.message, R);
    }
    return S.result;
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
    const r = $r(e).toString("base64");
    return await this.sendEncodedTransaction(r, t);
  }
  async sendEncodedTransaction(e, t) {
    const r = {
      encoding: "base64"
    }, o = t && t.skipPreflight, i = t && t.preflightCommitment || this.commitment;
    t && t.maxRetries != null && (r.maxRetries = t.maxRetries), t && t.minContextSlot != null && (r.minContextSlot = t.minContextSlot), o && (r.skipPreflight = o), i && (r.preflightCommitment = i);
    const c = [e, r], u = await this._rpcRequest("sendTransaction", c), d = re(u, sp);
    if ("error" in d) {
      let w;
      throw "data" in d.error && (w = d.error.data.logs), new ec("failed to send transaction: " + d.error.message, w);
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
    } = re(e, k0);
    this._handleServerNotification(r, [t.value, t.context]);
  }
  _makeSubscription(e, t) {
    const r = this._nextClientSubscriptionId++, o = Qd([e.method, t]), i = this._subscriptionsByHash[o];
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
    } = re(e, L0);
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
    } = re(e, cp);
    this._handleServerNotification(r, [t.value, t.context]);
  }
  _wsOnSlotNotification(e) {
    const {
      result: t,
      subscription: r
    } = re(e, P0);
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
    } = re(e, F0);
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
    } = re(e, z0);
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
    } = re(e, H0);
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
    layout: ue([de("instruction"), wr("recentSlot"), Ne("bumpSeed")])
  },
  FreezeLookupTable: {
    index: 1,
    layout: ue([de("instruction")])
  },
  ExtendLookupTable: {
    index: 2,
    layout: ue([de("instruction"), wr(), Ft(Se(), Gn(de(), -8), "addresses")])
  },
  DeactivateLookupTable: {
    index: 3,
    layout: ue([de("instruction")])
  },
  CloseLookupTable: {
    index: 4,
    layout: ue([de("instruction")])
  }
});
new le("AddressLookupTab1e1111111111111111111111111");
Object.freeze({
  RequestUnits: {
    index: 0,
    layout: ue([Ne("instruction"), de("units"), de("additionalFee")])
  },
  RequestHeapFrame: {
    index: 1,
    layout: ue([Ne("instruction"), de("bytes")])
  },
  SetComputeUnitLimit: {
    index: 2,
    layout: ue([Ne("instruction"), de("units")])
  },
  SetComputeUnitPrice: {
    index: 3,
    layout: ue([Ne("instruction"), wr("microLamports")])
  }
});
new le("ComputeBudget111111111111111111111111111111");
ue([Ne("numSignatures"), Ne("padding"), Zt("signatureOffset"), Zt("signatureInstructionIndex"), Zt("publicKeyOffset"), Zt("publicKeyInstructionIndex"), Zt("messageDataOffset"), Zt("messageDataSize"), Zt("messageInstructionIndex")]);
new le("Ed25519SigVerify111111111111111111111111111");
Wn.hmacSha256Sync = (n, ...e) => {
  const t = Ru.create(hs, n);
  return e.forEach((r) => t.update(r)), t.digest();
};
Wn.isValidPrivateKey;
ue([Ne("numSignatures"), Zt("signatureOffset"), Ne("signatureInstructionIndex"), Zt("ethAddressOffset"), Ne("ethAddressInstructionIndex"), Zt("messageDataOffset"), Zt("messageDataSize"), Ne("messageInstructionIndex"), $e(20, "ethAddress"), $e(64, "signature"), Ne("recoveryId")]);
new le("KeccakSecp256k11111111111111111111111111111");
new le("StakeConfig11111111111111111111111111111111");
class sc {
  constructor(e, t, r) {
    this.unixTimestamp = void 0, this.epoch = void 0, this.custodian = void 0, this.unixTimestamp = e, this.epoch = t, this.custodian = r;
  }
}
sc.default = new sc(0, 0, le.default);
Object.freeze({
  Initialize: {
    index: 0,
    layout: ue([de("instruction"), kd(), Od()])
  },
  Authorize: {
    index: 1,
    layout: ue([de("instruction"), Se("newAuthorized"), de("stakeAuthorizationType")])
  },
  Delegate: {
    index: 2,
    layout: ue([de("instruction")])
  },
  Split: {
    index: 3,
    layout: ue([de("instruction"), Qt("lamports")])
  },
  Withdraw: {
    index: 4,
    layout: ue([de("instruction"), Qt("lamports")])
  },
  Deactivate: {
    index: 5,
    layout: ue([de("instruction")])
  },
  Merge: {
    index: 7,
    layout: ue([de("instruction")])
  },
  AuthorizeWithSeed: {
    index: 8,
    layout: ue([de("instruction"), Se("newAuthorized"), de("stakeAuthorizationType"), ar("authoritySeed"), Se("authorityOwner")])
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
new le("Stake11111111111111111111111111111111111111");
Object.freeze({
  InitializeAccount: {
    index: 0,
    layout: ue([de("instruction"), Ld()])
  },
  Authorize: {
    index: 1,
    layout: ue([de("instruction"), Se("newAuthorized"), de("voteAuthorizationType")])
  },
  Withdraw: {
    index: 3,
    layout: ue([de("instruction"), Qt("lamports")])
  },
  AuthorizeWithSeed: {
    index: 10,
    layout: ue([de("instruction"), Ud()])
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
new le("Vote111111111111111111111111111111111111111");
new le("Va1idator1nfo111111111111111111111111111111");
X({
  name: te(),
  website: Ee(te()),
  details: Ee(te()),
  keybaseUsername: Ee(te())
});
new le("Vote111111111111111111111111111111111111111");
ue([
  Se("nodePubkey"),
  Se("authorizedWithdrawer"),
  Ne("commission"),
  Mt(),
  Ft(ue([Mt("slot"), de("confirmationCount")]), Gn(de(), -8), "votes"),
  Ne("rootSlotValid"),
  Mt("rootSlot"),
  Mt(),
  Ft(ue([Mt("epoch"), Se("authorizedVoter")]), Gn(de(), -8), "authorizedVoters"),
  ue([Ft(ue([Se("authorizedPubkey"), Mt("epochOfLastAuthorizedSwitch"), Mt("targetEpoch")]), 32, "buf"), Mt("idx"), Ne("isEmpty")], "priorVoters"),
  Mt(),
  Ft(ue([Mt("epoch"), Mt("credits"), Mt("prevCredits")]), Gn(de(), -8), "epochCredits"),
  ue([Mt("slot"), Mt("timestamp")], "lastTimestamp")
]);
const ac = {
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
function fp(n, e) {
  const t = e === !1 ? "http" : "https";
  if (!n)
    return ac[t].devnet;
  const r = ac[t][n];
  if (!r)
    throw new Error(`Unknown ${t} cluster: ${n}`);
  return r;
}
const hp = Ms({}), dp = ({ children: n, endpoint: e, config: t = { commitment: "confirmed" } }) => {
  const r = on(() => new lp(e, t), [e, t]);
  return D.createElement(hp.Provider, { value: { connection: r } }, n);
};
class Rt extends Error {
  constructor(e, t) {
    super(e), this.error = t;
  }
}
class ei extends Rt {
  constructor() {
    super(...arguments), this.name = "WalletNotReadyError";
  }
}
class pp extends Rt {
  constructor() {
    super(...arguments), this.name = "WalletLoadError";
  }
}
class gp extends Rt {
  constructor() {
    super(...arguments), this.name = "WalletConfigError";
  }
}
class Dr extends Rt {
  constructor() {
    super(...arguments), this.name = "WalletConnectionError";
  }
}
class aa extends Rt {
  constructor() {
    super(...arguments), this.name = "WalletDisconnectedError";
  }
}
class Fr extends Rt {
  constructor() {
    super(...arguments), this.name = "WalletDisconnectionError";
  }
}
class ca extends Rt {
  constructor() {
    super(...arguments), this.name = "WalletAccountError";
  }
}
class zr extends Rt {
  constructor() {
    super(...arguments), this.name = "WalletPublicKeyError";
  }
}
class Et extends Rt {
  constructor() {
    super(...arguments), this.name = "WalletNotConnectedError";
  }
}
class cr extends Rt {
  constructor() {
    super(...arguments), this.name = "WalletSendTransactionError";
  }
}
class Zi extends Rt {
  constructor() {
    super(...arguments), this.name = "WalletSignMessageError";
  }
}
class Ht extends Rt {
  constructor() {
    super(...arguments), this.name = "WalletSignTransactionError";
  }
}
var Ie;
(function(n) {
  n.Installed = "Installed", n.NotDetected = "NotDetected", n.Loadable = "Loadable", n.Unsupported = "Unsupported";
})(Ie || (Ie = {}));
class yp extends Eh {
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
function Xi(n) {
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
class wp extends yp {
  async sendTransaction(e, t, r = {}) {
    let o = !0;
    try {
      if ("version" in e) {
        if (!this.supportedTransactionVersions)
          throw new cr("Sending versioned transactions isn't supported by this wallet");
        if (!this.supportedTransactionVersions.has(e.version))
          throw new cr(`Sending transaction version ${e.version} isn't supported by this wallet`);
        try {
          e = await this.signTransaction(e);
          const i = e.serialize();
          return await t.sendRawTransaction(i, r);
        } catch (i) {
          throw i instanceof Ht ? (o = !1, i) : new cr(i == null ? void 0 : i.message, i);
        }
      } else
        try {
          const { signers: i, ...c } = r;
          e = await this.prepareTransaction(e, t, c), i != null && i.length && e.partialSign(...i), e = await this.signTransaction(e);
          const u = e.serialize();
          return await t.sendRawTransaction(u, c);
        } catch (i) {
          throw i instanceof Ht ? (o = !1, i) : new cr(i == null ? void 0 : i.message, i);
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
class Ji extends wp {
}
var As;
(function(n) {
  n.Mainnet = "mainnet-beta", n.Testnet = "testnet", n.Devnet = "devnet";
})(As || (As = {}));
class cc extends Rt {
  constructor() {
    super(...arguments), this.name = "WalletNotSelectedError";
  }
}
const mp = [], $i = {
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
Object.defineProperty($i, "wallets", {
  get() {
    return console.error(pn("read", "wallets")), mp;
  }
});
Object.defineProperty($i, "wallet", {
  get() {
    return console.error(pn("read", "wallet")), null;
  }
});
Object.defineProperty($i, "publicKey", {
  get() {
    return console.error(pn("read", "publicKey")), null;
  }
});
function pn(n, e) {
  return `You have tried to  ${n} "${e}" on a WalletContext without providing one. Make sure to render a WalletProvider as an ancestor of the component that uses WalletContext`;
}
const Qu = Ms($i);
function qu() {
  return Lc(Qu);
}
function bp(n, e) {
  const t = Qe(() => {
    try {
      const i = localStorage.getItem(n);
      if (i)
        return JSON.parse(i);
    } catch (i) {
      typeof window < "u" && console.error(i);
    }
    return e;
  }), r = t[0], o = yn(!0);
  return Pt(() => {
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
const uc = {
  wallet: null,
  adapter: null,
  publicKey: null,
  connected: !1
}, Ap = ({ children: n, wallets: e, autoConnect: t = !1, onError: r, localStorageKey: o = "walletName" }) => {
  const [i, c] = bp(o, null), [{ wallet: u, adapter: d, publicKey: w, connected: v }, E] = Qe(uc), _ = (d == null ? void 0 : d.readyState) || Ie.Unsupported, [S, R] = Qe(!1), [T, L] = Qe(!1), P = yn(!1), z = yn(!1), U = yn(!1), [F, k] = Qe(() => e.map((g) => ({
    adapter: g,
    readyState: g.readyState
  })));
  Pt(() => {
    k((m) => e.map((y, x) => {
      const O = m[x];
      return O && O.adapter === y && O.readyState === y.readyState ? O : {
        adapter: y,
        readyState: y.readyState
      };
    }));
    function g(m) {
      k((y) => {
        const x = y.findIndex(({ adapter: C }) => C === this);
        if (x === -1)
          return y;
        const { adapter: O } = y[x];
        return [...y.slice(0, x), { adapter: O, readyState: m }, ...y.slice(x + 1)];
      });
    }
    return e.forEach((m) => m.on("readyStateChange", g, m)), () => e.forEach((m) => m.off("readyStateChange", g, m));
  }, [e]), Pt(() => {
    const g = i && F.find(({ adapter: m }) => m.name === i);
    E(g ? {
      wallet: g,
      adapter: g.adapter,
      connected: g.adapter.connected,
      publicKey: g.adapter.publicKey
    } : uc);
  }, [i, F]), Pt(() => {
    function g() {
      U.current = !0;
    }
    return window.addEventListener("beforeunload", g), () => window.removeEventListener("beforeunload", g);
  }, [U]);
  const W = $t(() => {
    !d || E((g) => ({ ...g, connected: d.connected, publicKey: d.publicKey }));
  }, [d]), Q = $t(() => {
    U.current || c(null);
  }, [U, c]), j = $t((g) => (U.current || (r || console.error)(g), g), [U, r]);
  Pt(() => {
    if (d)
      return d.on("connect", W), d.on("disconnect", Q), d.on("error", j), () => {
        d.off("connect", W), d.off("disconnect", Q), d.off("error", j);
      };
  }, [d, W, Q, j]), Pt(() => () => {
    d == null || d.disconnect();
  }, [d]), Pt(() => {
    P.current || v || !t || !d || !(_ === Ie.Installed || _ === Ie.Loadable) || async function() {
      P.current = !0, R(!0);
      try {
        await d.connect();
      } catch {
        c(null);
      } finally {
        R(!1), P.current = !1;
      }
    }();
  }, [P, v, t, d, _, c]);
  const pe = $t(async () => {
    if (!(P.current || z.current || v)) {
      if (!d)
        throw j(new cc());
      if (!(_ === Ie.Installed || _ === Ie.Loadable))
        throw c(null), typeof window < "u" && window.open(d.url, "_blank"), j(new ei());
      P.current = !0, R(!0);
      try {
        await d.connect();
      } catch (g) {
        throw c(null), g;
      } finally {
        R(!1), P.current = !1;
      }
    }
  }, [P, z, v, d, _, j, c]), Me = $t(async () => {
    if (!z.current) {
      if (!d)
        return c(null);
      z.current = !0, L(!0);
      try {
        await d.disconnect();
      } catch (g) {
        throw c(null), g;
      } finally {
        L(!1), z.current = !1;
      }
    }
  }, [z, d, c]), ye = $t(async (g, m, y) => {
    if (!d)
      throw j(new cc());
    if (!v)
      throw j(new Et());
    return await d.sendTransaction(g, m, y);
  }, [d, j, v]), Be = on(() => d && "signTransaction" in d ? async (g) => {
    if (!v)
      throw j(new Et());
    return await d.signTransaction(g);
  } : void 0, [d, j, v]), M = on(() => d && "signAllTransactions" in d ? async (g) => {
    if (!v)
      throw j(new Et());
    return await d.signAllTransactions(g);
  } : void 0, [d, j, v]), l = on(() => d && "signMessage" in d ? async (g) => {
    if (!v)
      throw j(new Et());
    return await d.signMessage(g);
  } : void 0, [d, j, v]);
  return D.createElement(Qu.Provider, { value: {
    autoConnect: t,
    wallets: F,
    wallet: u,
    publicKey: w,
    connected: v,
    connecting: S,
    disconnecting: T,
    select: c,
    connect: pe,
    disconnect: Me,
    sendTransaction: ye,
    signTransaction: Be,
    signAllTransactions: M,
    signMessage: l
  } }, n);
}, ju = {
  setVisible(n) {
    console.error(Yu("call", "setVisible"));
  },
  visible: !1
};
Object.defineProperty(ju, "visible", {
  get() {
    return console.error(Yu("read", "visible")), !1;
  }
});
function Yu(n, e) {
  return `You have tried to  ${n} "${e}" on a WalletModalContext without providing one. Make sure to render a WalletModalProvider as an ancestor of the component that uses WalletModalContext`;
}
const Ku = Ms(ju);
function Vu() {
  return Lc(Ku);
}
const vp = (n) => D.createElement(
  "button",
  { className: `wallet-adapter-button ${n.className || ""}`, disabled: n.disabled, style: n.style, onClick: n.onClick, tabIndex: n.tabIndex || 0, type: "button" },
  n.startIcon && D.createElement("i", { className: "wallet-adapter-button-start-icon" }, n.startIcon),
  n.children,
  n.endIcon && D.createElement("i", { className: "wallet-adapter-button-end-icon" }, n.endIcon)
), Ep = ({ wallet: n, ...e }) => n && D.createElement("img", { src: n.adapter.icon, alt: `${n.adapter.name} icon`, ...e }), lc = ({ id: n, children: e, expanded: t = !1 }) => {
  const r = yn(null), o = yn(!0), i = "height 250ms ease-out", c = () => {
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
  return yi(() => {
    t ? c() : u();
  }, [t]), yi(() => {
    const d = r.current;
    if (!d)
      return;
    function w() {
      !d || (d.style.overflow = t ? "initial" : "hidden", t && (d.style.height = "auto"));
    }
    function v(E) {
      d && E.target === d && E.propertyName === "height" && w();
    }
    return o.current && (w(), o.current = !1), d.addEventListener("transitionend", v), () => d.removeEventListener("transitionend", v);
  }, [t]), D.createElement("div", { className: "wallet-adapter-collapse", id: n, ref: r, role: "region", style: { height: 0, transition: o.current ? void 0 : i } }, e);
}, $o = ({ handleClick: n, tabIndex: e, wallet: t }) => D.createElement(
  "li",
  null,
  D.createElement(
    vp,
    { onClick: n, startIcon: D.createElement(Ep, { wallet: t }), tabIndex: e },
    t.adapter.name,
    t.readyState === Ie.Installed && D.createElement("span", null, "Detected")
  )
), xp = () => D.createElement(
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
), Sp = ({ className: n = "", container: e = "body" }) => {
  const t = yn(null), { wallets: r, select: o } = qu(), { setVisible: i } = Vu(), [c, u] = Qe(!1), [d, w] = Qe(!1), [v, E] = Qe(null), [_, S] = on(() => {
    const F = [], k = [], W = [];
    for (const Q of r)
      Q.readyState === Ie.NotDetected ? k.push(Q) : Q.readyState === Ie.Loadable ? W.push(Q) : Q.readyState === Ie.Installed && F.push(Q);
    return [F, [...W, ...k]];
  }, [r]), R = on(() => _.length ? _[0] : r.find((F) => F.adapter.name === "Torus") || r.find((F) => F.adapter.name === "Phantom") || r.find((F) => F.readyState === Ie.Loadable) || S[0], [_, r, S]), T = $t(() => {
    w(!1), setTimeout(() => i(!1), 150);
  }, [i]), L = $t((F) => {
    F.preventDefault(), T();
  }, [T]), P = $t((F, k) => {
    o(k), L(F);
  }, [o, L]), z = $t(() => u(!c), [c]), U = $t((F) => {
    const k = t.current;
    if (!k)
      return;
    const W = k.querySelectorAll("button"), Q = W[0], j = W[W.length - 1];
    F.shiftKey ? document.activeElement === Q && (j.focus(), F.preventDefault()) : document.activeElement === j && (Q.focus(), F.preventDefault());
  }, [t]);
  return yi(() => {
    const F = (W) => {
      W.key === "Escape" ? T() : W.key === "Tab" && U(W);
    }, { overflow: k } = window.getComputedStyle(document.body);
    return setTimeout(() => w(!0), 0), document.body.style.overflow = "hidden", window.addEventListener("keydown", F, !1), () => {
      document.body.style.overflow = k, window.removeEventListener("keydown", F, !1);
    };
  }, [T, U]), yi(() => E(document.querySelector(e)), [e]), v && cl(D.createElement(
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
          { onClick: L, className: "wallet-adapter-modal-button-close" },
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
            _.map((F) => D.createElement($o, { key: F.adapter.name, handleClick: (k) => P(k, F.adapter.name), wallet: F })),
            S.length ? D.createElement(lc, { expanded: c, id: "wallet-adapter-modal-collapse" }, S.map((F) => D.createElement($o, { key: F.adapter.name, handleClick: (k) => P(k, F.adapter.name), tabIndex: c ? 0 : -1, wallet: F }))) : null
          ),
          S.length ? D.createElement(
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
            D.createElement(xp, null),
            D.createElement("button", { type: "button", className: "wallet-adapter-modal-middle-button", onClick: (F) => P(F, R.adapter.name) }, "Get started")
          ),
          S.length ? D.createElement(
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
              lc,
              { expanded: c, id: "wallet-adapter-modal-collapse" },
              D.createElement("ul", { className: "wallet-adapter-modal-list" }, S.map((F) => D.createElement($o, { key: F.adapter.name, handleClick: (k) => P(k, F.adapter.name), tabIndex: c ? 0 : -1, wallet: F })))
            )
          ) : null
        )
      )
    ),
    D.createElement("div", { className: "wallet-adapter-modal-overlay", onMouseDown: L })
  ), v);
}, Ip = ({ children: n, ...e }) => {
  const [t, r] = Qe(!1);
  return D.createElement(
    Ku.Provider,
    { value: {
      visible: t,
      setVisible: r
    } },
    n,
    t && D.createElement(Sp, { ...e })
  );
}, Bp = "logger/5.7.0";
let fc = !1, hc = !1;
const pi = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
let dc = pi.default, es = null;
function Mp() {
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
const pc = Mp();
var vs;
(function(n) {
  n.DEBUG = "DEBUG", n.INFO = "INFO", n.WARNING = "WARNING", n.ERROR = "ERROR", n.OFF = "OFF";
})(vs || (vs = {}));
var nn;
(function(n) {
  n.UNKNOWN_ERROR = "UNKNOWN_ERROR", n.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", n.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", n.NETWORK_ERROR = "NETWORK_ERROR", n.SERVER_ERROR = "SERVER_ERROR", n.TIMEOUT = "TIMEOUT", n.BUFFER_OVERRUN = "BUFFER_OVERRUN", n.NUMERIC_FAULT = "NUMERIC_FAULT", n.MISSING_NEW = "MISSING_NEW", n.INVALID_ARGUMENT = "INVALID_ARGUMENT", n.MISSING_ARGUMENT = "MISSING_ARGUMENT", n.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", n.CALL_EXCEPTION = "CALL_EXCEPTION", n.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", n.NONCE_EXPIRED = "NONCE_EXPIRED", n.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", n.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", n.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", n.ACTION_REJECTED = "ACTION_REJECTED";
})(nn || (nn = {}));
const gc = "0123456789abcdef";
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
    pi[r] == null && this.throwArgumentError("invalid log level name", "logLevel", e), !(dc > pi[r]) && console.log.apply(console, t);
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
    if (hc)
      return this.makeError("censored error", t, {});
    t || (t = Ze.errors.UNKNOWN_ERROR), r || (r = {});
    const o = [];
    Object.keys(r).forEach((d) => {
      const w = r[d];
      try {
        if (w instanceof Uint8Array) {
          let v = "";
          for (let E = 0; E < w.length; E++)
            v += gc[w[E] >> 4], v += gc[w[E] & 15];
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
      case nn.NUMERIC_FAULT: {
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
      case nn.CALL_EXCEPTION:
      case nn.INSUFFICIENT_FUNDS:
      case nn.MISSING_NEW:
      case nn.NONCE_EXPIRED:
      case nn.REPLACEMENT_UNDERPRICED:
      case nn.TRANSACTION_REPLACED:
      case nn.UNPREDICTABLE_GAS_LIMIT:
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
    pc && this.throwError("platform missing String.prototype.normalize", Ze.errors.UNSUPPORTED_OPERATION, {
      operation: "String.prototype.normalize",
      form: pc
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
    return es || (es = new Ze(Bp)), es;
  }
  static setCensorship(e, t) {
    if (!e && t && this.globalLogger().throwError("cannot permanently disable censorship", Ze.errors.UNSUPPORTED_OPERATION, {
      operation: "setCensorship"
    }), fc) {
      if (!e)
        return;
      this.globalLogger().throwError("error censorship permanent", Ze.errors.UNSUPPORTED_OPERATION, {
        operation: "setCensorship"
      });
    }
    hc = !!e, fc = !!t;
  }
  static setLogLevel(e) {
    const t = pi[e.toLowerCase()];
    if (t == null) {
      Ze.globalLogger().warn("invalid log level - " + e);
      return;
    }
    dc = t;
  }
  static from(e) {
    return new Ze(e);
  }
}
Ze.errors = nn;
Ze.levels = vs;
const _p = "bytes/5.7.0", ts = new Ze(_p);
function Cp(n) {
  return !!n.toHexString;
}
function gi(n) {
  return n.slice || (n.slice = function() {
    const e = Array.prototype.slice.call(arguments);
    return gi(new Uint8Array(Array.prototype.slice.apply(n, e)));
  }), n;
}
function yc(n) {
  return typeof n == "number" && n == n && n % 1 === 0;
}
function Tp(n) {
  if (n == null)
    return !1;
  if (n.constructor === Uint8Array)
    return !0;
  if (typeof n == "string" || !yc(n.length) || n.length < 0)
    return !1;
  for (let e = 0; e < n.length; e++) {
    const t = n[e];
    if (!yc(t) || t < 0 || t >= 256)
      return !1;
  }
  return !0;
}
function wc(n, e) {
  if (e || (e = {}), typeof n == "number") {
    ts.checkSafeUint53(n, "invalid arrayify value");
    const t = [];
    for (; n; )
      t.unshift(n & 255), n = parseInt(String(n / 256));
    return t.length === 0 && t.push(0), gi(new Uint8Array(t));
  }
  if (e.allowMissingPrefix && typeof n == "string" && n.substring(0, 2) !== "0x" && (n = "0x" + n), Cp(n) && (n = n.toHexString()), Rp(n)) {
    let t = n.substring(2);
    t.length % 2 && (e.hexPad === "left" ? t = "0" + t : e.hexPad === "right" ? t += "0" : ts.throwArgumentError("hex data is odd-length", "value", n));
    const r = [];
    for (let o = 0; o < t.length; o += 2)
      r.push(parseInt(t.substring(o, o + 2), 16));
    return gi(new Uint8Array(r));
  }
  return Tp(n) ? gi(new Uint8Array(n)) : ts.throwArgumentError("invalid arrayify value", "value", n);
}
function Rp(n, e) {
  return !(typeof n != "string" || !n.match(/^0x[0-9A-Fa-f]*$/) || e && n.length !== 2 + 2 * e);
}
const Np = "properties/5.7.0";
globalThis && globalThis.__awaiter;
new Ze(Np);
function ui(n, e, t) {
  Object.defineProperty(n, e, {
    enumerable: !0,
    value: t,
    writable: !1
  });
}
class Zu {
  constructor(e) {
    ui(this, "alphabet", e), ui(this, "base", e.length), ui(this, "_alphabetMap", {}), ui(this, "_leader", e.charAt(0));
    for (let t = 0; t < e.length; t++)
      this._alphabetMap[e.charAt(t)] = t;
  }
  encode(e) {
    let t = wc(e);
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
    return wc(new Uint8Array(t.reverse()));
  }
}
new Zu("abcdefghijklmnopqrstuvwxyz234567");
const kp = new Zu("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
var Es = { exports: {} }, Xn = {}, Ti = { exports: {} }, ns = { exports: {} }, Oe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mc;
function Op() {
  if (mc)
    return Oe;
  mc = 1;
  var n = typeof Symbol == "function" && Symbol.for, e = n ? Symbol.for("react.element") : 60103, t = n ? Symbol.for("react.portal") : 60106, r = n ? Symbol.for("react.fragment") : 60107, o = n ? Symbol.for("react.strict_mode") : 60108, i = n ? Symbol.for("react.profiler") : 60114, c = n ? Symbol.for("react.provider") : 60109, u = n ? Symbol.for("react.context") : 60110, d = n ? Symbol.for("react.async_mode") : 60111, w = n ? Symbol.for("react.concurrent_mode") : 60111, v = n ? Symbol.for("react.forward_ref") : 60112, E = n ? Symbol.for("react.suspense") : 60113, _ = n ? Symbol.for("react.suspense_list") : 60120, S = n ? Symbol.for("react.memo") : 60115, R = n ? Symbol.for("react.lazy") : 60116, T = n ? Symbol.for("react.block") : 60121, L = n ? Symbol.for("react.fundamental") : 60117, P = n ? Symbol.for("react.responder") : 60118, z = n ? Symbol.for("react.scope") : 60119;
  function U(k) {
    if (typeof k == "object" && k !== null) {
      var W = k.$$typeof;
      switch (W) {
        case e:
          switch (k = k.type, k) {
            case d:
            case w:
            case r:
            case i:
            case o:
            case E:
              return k;
            default:
              switch (k = k && k.$$typeof, k) {
                case u:
                case v:
                case R:
                case S:
                case c:
                  return k;
                default:
                  return W;
              }
          }
        case t:
          return W;
      }
    }
  }
  function F(k) {
    return U(k) === w;
  }
  return Oe.AsyncMode = d, Oe.ConcurrentMode = w, Oe.ContextConsumer = u, Oe.ContextProvider = c, Oe.Element = e, Oe.ForwardRef = v, Oe.Fragment = r, Oe.Lazy = R, Oe.Memo = S, Oe.Portal = t, Oe.Profiler = i, Oe.StrictMode = o, Oe.Suspense = E, Oe.isAsyncMode = function(k) {
    return F(k) || U(k) === d;
  }, Oe.isConcurrentMode = F, Oe.isContextConsumer = function(k) {
    return U(k) === u;
  }, Oe.isContextProvider = function(k) {
    return U(k) === c;
  }, Oe.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === e;
  }, Oe.isForwardRef = function(k) {
    return U(k) === v;
  }, Oe.isFragment = function(k) {
    return U(k) === r;
  }, Oe.isLazy = function(k) {
    return U(k) === R;
  }, Oe.isMemo = function(k) {
    return U(k) === S;
  }, Oe.isPortal = function(k) {
    return U(k) === t;
  }, Oe.isProfiler = function(k) {
    return U(k) === i;
  }, Oe.isStrictMode = function(k) {
    return U(k) === o;
  }, Oe.isSuspense = function(k) {
    return U(k) === E;
  }, Oe.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === r || k === w || k === i || k === o || k === E || k === _ || typeof k == "object" && k !== null && (k.$$typeof === R || k.$$typeof === S || k.$$typeof === c || k.$$typeof === u || k.$$typeof === v || k.$$typeof === L || k.$$typeof === P || k.$$typeof === z || k.$$typeof === T);
  }, Oe.typeOf = U, Oe;
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
var bc;
function Lp() {
  return bc || (bc = 1, process.env.NODE_ENV !== "production" && function() {
    var n = typeof Symbol == "function" && Symbol.for, e = n ? Symbol.for("react.element") : 60103, t = n ? Symbol.for("react.portal") : 60106, r = n ? Symbol.for("react.fragment") : 60107, o = n ? Symbol.for("react.strict_mode") : 60108, i = n ? Symbol.for("react.profiler") : 60114, c = n ? Symbol.for("react.provider") : 60109, u = n ? Symbol.for("react.context") : 60110, d = n ? Symbol.for("react.async_mode") : 60111, w = n ? Symbol.for("react.concurrent_mode") : 60111, v = n ? Symbol.for("react.forward_ref") : 60112, E = n ? Symbol.for("react.suspense") : 60113, _ = n ? Symbol.for("react.suspense_list") : 60120, S = n ? Symbol.for("react.memo") : 60115, R = n ? Symbol.for("react.lazy") : 60116, T = n ? Symbol.for("react.block") : 60121, L = n ? Symbol.for("react.fundamental") : 60117, P = n ? Symbol.for("react.responder") : 60118, z = n ? Symbol.for("react.scope") : 60119;
    function U(K) {
      return typeof K == "string" || typeof K == "function" || K === r || K === w || K === i || K === o || K === E || K === _ || typeof K == "object" && K !== null && (K.$$typeof === R || K.$$typeof === S || K.$$typeof === c || K.$$typeof === u || K.$$typeof === v || K.$$typeof === L || K.$$typeof === P || K.$$typeof === z || K.$$typeof === T);
    }
    function F(K) {
      if (typeof K == "object" && K !== null) {
        var He = K.$$typeof;
        switch (He) {
          case e:
            var xe = K.type;
            switch (xe) {
              case d:
              case w:
              case r:
              case i:
              case o:
              case E:
                return xe;
              default:
                var We = xe && xe.$$typeof;
                switch (We) {
                  case u:
                  case v:
                  case R:
                  case S:
                  case c:
                    return We;
                  default:
                    return He;
                }
            }
          case t:
            return He;
        }
      }
    }
    var k = d, W = w, Q = u, j = c, pe = e, Me = v, ye = r, Be = R, M = S, l = t, g = i, m = o, y = E, x = !1;
    function O(K) {
      return x || (x = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), C(K) || F(K) === d;
    }
    function C(K) {
      return F(K) === w;
    }
    function b(K) {
      return F(K) === u;
    }
    function h(K) {
      return F(K) === c;
    }
    function B(K) {
      return typeof K == "object" && K !== null && K.$$typeof === e;
    }
    function q(K) {
      return F(K) === v;
    }
    function Z(K) {
      return F(K) === r;
    }
    function V(K) {
      return F(K) === R;
    }
    function oe(K) {
      return F(K) === S;
    }
    function $(K) {
      return F(K) === t;
    }
    function se(K) {
      return F(K) === i;
    }
    function be(K) {
      return F(K) === o;
    }
    function ve(K) {
      return F(K) === E;
    }
    Le.AsyncMode = k, Le.ConcurrentMode = W, Le.ContextConsumer = Q, Le.ContextProvider = j, Le.Element = pe, Le.ForwardRef = Me, Le.Fragment = ye, Le.Lazy = Be, Le.Memo = M, Le.Portal = l, Le.Profiler = g, Le.StrictMode = m, Le.Suspense = y, Le.isAsyncMode = O, Le.isConcurrentMode = C, Le.isContextConsumer = b, Le.isContextProvider = h, Le.isElement = B, Le.isForwardRef = q, Le.isFragment = Z, Le.isLazy = V, Le.isMemo = oe, Le.isPortal = $, Le.isProfiler = se, Le.isStrictMode = be, Le.isSuspense = ve, Le.isValidElementType = U, Le.typeOf = F;
  }()), Le;
}
var Ac;
function Xu() {
  return Ac || (Ac = 1, function(n) {
    process.env.NODE_ENV === "production" ? n.exports = Op() : n.exports = Lp();
  }(ns)), ns.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var rs, vc;
function Up() {
  if (vc)
    return rs;
  vc = 1;
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
  return rs = o() ? Object.assign : function(i, c) {
    for (var u, d = r(i), w, v = 1; v < arguments.length; v++) {
      u = Object(arguments[v]);
      for (var E in u)
        e.call(u, E) && (d[E] = u[E]);
      if (n) {
        w = n(u);
        for (var _ = 0; _ < w.length; _++)
          t.call(u, w[_]) && (d[w[_]] = u[w[_]]);
      }
    }
    return d;
  }, rs;
}
var is, Ec;
function ua() {
  if (Ec)
    return is;
  Ec = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return is = n, is;
}
var os, xc;
function Ju() {
  return xc || (xc = 1, os = Function.call.bind(Object.prototype.hasOwnProperty)), os;
}
var ss, Sc;
function Pp() {
  if (Sc)
    return ss;
  Sc = 1;
  var n = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = ua(), t = {}, r = Ju();
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
          var E;
          try {
            if (typeof i[v] != "function") {
              var _ = Error(
                (d || "React class") + ": " + u + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw _.name = "Invariant Violation", _;
            }
            E = i[v](c, v, d, u, null, e);
          } catch (R) {
            E = R;
          }
          if (E && !(E instanceof Error) && n(
            (d || "React class") + ": type specification of " + u + " `" + v + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof E + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), E instanceof Error && !(E.message in t)) {
            t[E.message] = !0;
            var S = w ? w() : "";
            n(
              "Failed " + u + " type: " + E.message + (S != null ? S : "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, ss = o, ss;
}
var as, Ic;
function Dp() {
  if (Ic)
    return as;
  Ic = 1;
  var n = Xu(), e = Up(), t = ua(), r = Ju(), o = Pp(), i = function() {
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
  return as = function(u, d) {
    var w = typeof Symbol == "function" && Symbol.iterator, v = "@@iterator";
    function E(C) {
      var b = C && (w && C[w] || C[v]);
      if (typeof b == "function")
        return b;
    }
    var _ = "<<anonymous>>", S = {
      array: P("array"),
      bigint: P("bigint"),
      bool: P("boolean"),
      func: P("function"),
      number: P("number"),
      object: P("object"),
      string: P("string"),
      symbol: P("symbol"),
      any: z(),
      arrayOf: U,
      element: F(),
      elementType: k(),
      instanceOf: W,
      node: Me(),
      objectOf: j,
      oneOf: Q,
      oneOfType: pe,
      shape: Be,
      exact: M
    };
    function R(C, b) {
      return C === b ? C !== 0 || 1 / C === 1 / b : C !== C && b !== b;
    }
    function T(C, b) {
      this.message = C, this.data = b && typeof b == "object" ? b : {}, this.stack = "";
    }
    T.prototype = Error.prototype;
    function L(C) {
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
            var He = $ + ":" + oe;
            !b[He] && h < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + be + "` prop on `" + $ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), b[He] = !0, h++);
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
      return L(b);
    }
    function z() {
      return L(c);
    }
    function U(C) {
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
      return L(b);
    }
    function F() {
      function C(b, h, B, q, Z) {
        var V = b[h];
        if (!u(V)) {
          var oe = m(V);
          return new T("Invalid " + q + " `" + Z + "` of type " + ("`" + oe + "` supplied to `" + B + "`, expected a single ReactElement."));
        }
        return null;
      }
      return L(C);
    }
    function k() {
      function C(b, h, B, q, Z) {
        var V = b[h];
        if (!n.isValidElementType(V)) {
          var oe = m(V);
          return new T("Invalid " + q + " `" + Z + "` of type " + ("`" + oe + "` supplied to `" + B + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return L(C);
    }
    function W(C) {
      function b(h, B, q, Z, V) {
        if (!(h[B] instanceof C)) {
          var oe = C.name || _, $ = O(h[B]);
          return new T("Invalid " + Z + " `" + V + "` of type " + ("`" + $ + "` supplied to `" + q + "`, expected ") + ("instance of `" + oe + "`."));
        }
        return null;
      }
      return L(b);
    }
    function Q(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), c;
      function b(h, B, q, Z, V) {
        for (var oe = h[B], $ = 0; $ < C.length; $++)
          if (R(oe, C[$]))
            return null;
        var se = JSON.stringify(C, function(ve, K) {
          var He = y(K);
          return He === "symbol" ? String(K) : K;
        });
        return new T("Invalid " + Z + " `" + V + "` of value `" + String(oe) + "` " + ("supplied to `" + q + "`, expected one of " + se + "."));
      }
      return L(b);
    }
    function j(C) {
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
      return L(b);
    }
    function pe(C) {
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
        var He = se.length > 0 ? ", expected one of type [" + se.join(", ") + "]" : "";
        return new T("Invalid " + oe + " `" + $ + "` supplied to " + ("`" + V + "`" + He + "."));
      }
      return L(B);
    }
    function Me() {
      function C(b, h, B, q, Z) {
        return l(b[h]) ? null : new T("Invalid " + q + " `" + Z + "` supplied to " + ("`" + B + "`, expected a ReactNode."));
      }
      return L(C);
    }
    function ye(C, b, h, B, q) {
      return new T(
        (C || "React class") + ": " + b + " type `" + h + "." + B + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + q + "`."
      );
    }
    function Be(C) {
      function b(h, B, q, Z, V) {
        var oe = h[B], $ = m(oe);
        if ($ !== "object")
          return new T("Invalid " + Z + " `" + V + "` of type `" + $ + "` " + ("supplied to `" + q + "`, expected `object`."));
        for (var se in C) {
          var be = C[se];
          if (typeof be != "function")
            return ye(q, Z, V, se, y(be));
          var ve = be(oe, se, q, Z, V + "." + se, t);
          if (ve)
            return ve;
        }
        return null;
      }
      return L(b);
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
            return ye(q, Z, V, be, y(ve));
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
      return L(b);
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
          var b = E(C);
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
    function O(C) {
      return !C.constructor || !C.constructor.name ? _ : C.constructor.name;
    }
    return S.checkPropTypes = o, S.resetWarningCache = o.resetWarningCache, S.PropTypes = S, S;
  }, as;
}
var cs, Bc;
function Fp() {
  if (Bc)
    return cs;
  Bc = 1;
  var n = ua();
  function e() {
  }
  function t() {
  }
  return t.resetWarningCache = e, cs = function() {
    function r(c, u, d, w, v, E) {
      if (E !== n) {
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
  }, cs;
}
if (process.env.NODE_ENV !== "production") {
  var zp = Xu(), Hp = !0;
  Ti.exports = Dp()(zp.isElement, Hp);
} else
  Ti.exports = Fp()();
var xs = { exports: {} }, ln = {}, Ri = { exports: {} };
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
  function i(E, _) {
    return _.getPropertyValue("overflow") !== "visible" || E.scrollWidth <= 0 && E.scrollHeight <= 0;
  }
  function c(E) {
    var _ = E.offsetWidth <= 0 && E.offsetHeight <= 0;
    if (_ && !E.innerHTML)
      return !0;
    try {
      var S = window.getComputedStyle(E), R = S.getPropertyValue("display");
      return _ ? R !== r && i(E, S) : R === t;
    } catch {
      return console.warn("Failed to inspect element style"), !1;
    }
  }
  function u(E) {
    for (var _ = E, S = E.getRootNode && E.getRootNode(); _ && _ !== document.body; ) {
      if (S && _ === S && (_ = S.host.parentNode), c(_))
        return !1;
      _ = _.parentNode;
    }
    return !0;
  }
  function d(E, _) {
    var S = E.nodeName.toLowerCase(), R = o.test(S) && !E.disabled || S === "a" && E.href || _;
    return R && u(E);
  }
  function w(E) {
    var _ = E.getAttribute("tabindex");
    _ === null && (_ = void 0);
    var S = isNaN(_);
    return (S || _ >= 0) && d(E, !S);
  }
  function v(E) {
    var _ = [].slice.call(E.querySelectorAll("*"), 0).reduce(function(S, R) {
      return S.concat(R.shadowRoot ? v(R.shadowRoot) : [R]);
    }, []);
    return _.filter(w);
  }
  n.exports = e.default;
})(Ri, Ri.exports);
Object.defineProperty(ln, "__esModule", {
  value: !0
});
ln.resetState = qp;
ln.log = jp;
ln.handleBlur = Hr;
ln.handleFocus = Wr;
ln.markForFocusLater = Yp;
ln.returnFocus = Kp;
ln.popWithoutFocus = Vp;
ln.setupScopedFocus = Zp;
ln.teardownScopedFocus = Xp;
var Wp = Ri.exports, Gp = Qp(Wp);
function Qp(n) {
  return n && n.__esModule ? n : { default: n };
}
var Jn = [], ur = null, Ss = !1;
function qp() {
  Jn = [];
}
function jp() {
  process.env.NODE_ENV !== "production" && (console.log("focusManager ----------"), Jn.forEach(function(n) {
    var e = n || {};
    console.log(e.nodeName, e.className, e.id);
  }), console.log("end focusManager ----------"));
}
function Hr() {
  Ss = !0;
}
function Wr() {
  if (Ss) {
    if (Ss = !1, !ur)
      return;
    setTimeout(function() {
      if (!ur.contains(document.activeElement)) {
        var n = (0, Gp.default)(ur)[0] || ur;
        n.focus();
      }
    }, 0);
  }
}
function Yp() {
  Jn.push(document.activeElement);
}
function Kp() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, e = null;
  try {
    Jn.length !== 0 && (e = Jn.pop(), e.focus({ preventScroll: n }));
    return;
  } catch {
    console.warn(["You tried to return focus to", e, "but it is not in the DOM anymore"].join(" "));
  }
}
function Vp() {
  Jn.length > 0 && Jn.pop();
}
function Zp(n) {
  ur = n, window.addEventListener ? (window.addEventListener("blur", Hr, !1), document.addEventListener("focus", Wr, !0)) : (window.attachEvent("onBlur", Hr), document.attachEvent("onFocus", Wr));
}
function Xp() {
  ur = null, window.addEventListener ? (window.removeEventListener("blur", Hr), document.removeEventListener("focus", Wr)) : (window.detachEvent("onBlur", Hr), document.detachEvent("onFocus", Wr));
}
var Is = { exports: {} };
(function(n, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = c;
  var t = Ri.exports, r = o(t);
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
    var v = void 0, E = d.shiftKey, _ = w[0], S = w[w.length - 1], R = i();
    if (u === R) {
      if (!E)
        return;
      v = S;
    }
    if (S === R && !E && (v = _), _ === R && E && (v = S), v) {
      d.preventDefault(), v.focus();
      return;
    }
    var T = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent), L = T != null && T[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;
    if (!!L) {
      var P = w.indexOf(R);
      if (P > -1 && (P += E ? -1 : 1), v = w[P], typeof v > "u") {
        d.preventDefault(), v = E ? S : _, v.focus();
        return;
      }
      d.preventDefault(), v.focus();
    }
  }
  n.exports = e.default;
})(Is, Is.exports);
var fn = {}, Jp = process.env.NODE_ENV !== "production", $u = function() {
};
if (Jp) {
  var $p = function(e, t) {
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
  $u = function(n, e, t) {
    var r = arguments.length;
    t = new Array(r > 2 ? r - 2 : 0);
    for (var o = 2; o < r; o++)
      t[o - 2] = arguments[o];
    if (e === void 0)
      throw new Error(
        "`warning(condition, format, ...args)` requires a warning message argument"
      );
    n || $p.apply(null, [e].concat(t));
  };
}
var eg = $u, an = {}, el = { exports: {} };
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
})(el);
Object.defineProperty(an, "__esModule", {
  value: !0
});
an.canUseDOM = an.SafeNodeList = an.SafeHTMLCollection = void 0;
var tg = el.exports, ng = rg(tg);
function rg(n) {
  return n && n.__esModule ? n : { default: n };
}
var eo = ng.default, ig = eo.canUseDOM ? window.HTMLElement : {};
an.SafeHTMLCollection = eo.canUseDOM ? window.HTMLCollection : {};
an.SafeNodeList = eo.canUseDOM ? window.NodeList : {};
an.canUseDOM = eo.canUseDOM;
an.default = ig;
Object.defineProperty(fn, "__esModule", {
  value: !0
});
fn.resetState = ug;
fn.log = lg;
fn.assertNodeList = tl;
fn.setElement = fg;
fn.validateElement = la;
fn.hide = hg;
fn.show = dg;
fn.documentNotReadyOrSSRTesting = pg;
var og = eg, sg = cg(og), ag = an;
function cg(n) {
  return n && n.__esModule ? n : { default: n };
}
var qt = null;
function ug() {
  qt && (qt.removeAttribute ? qt.removeAttribute("aria-hidden") : qt.length != null ? qt.forEach(function(n) {
    return n.removeAttribute("aria-hidden");
  }) : document.querySelectorAll(qt).forEach(function(n) {
    return n.removeAttribute("aria-hidden");
  })), qt = null;
}
function lg() {
  if (process.env.NODE_ENV !== "production") {
    var n = qt || {};
    console.log("ariaAppHider ----------"), console.log(n.nodeName, n.className, n.id), console.log("end ariaAppHider ----------");
  }
}
function tl(n, e) {
  if (!n || !n.length)
    throw new Error("react-modal: No elements were found for selector " + e + ".");
}
function fg(n) {
  var e = n;
  if (typeof e == "string" && ag.canUseDOM) {
    var t = document.querySelectorAll(e);
    tl(t, e), e = t;
  }
  return qt = e || qt, qt;
}
function la(n) {
  var e = n || qt;
  return e ? Array.isArray(e) || e instanceof HTMLCollection || e instanceof NodeList ? e : [e] : ((0, sg.default)(!1, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" ")), []);
}
function hg(n) {
  var e = !0, t = !1, r = void 0;
  try {
    for (var o = la(n)[Symbol.iterator](), i; !(e = (i = o.next()).done); e = !0) {
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
function dg(n) {
  var e = !0, t = !1, r = void 0;
  try {
    for (var o = la(n)[Symbol.iterator](), i; !(e = (i = o.next()).done); e = !0) {
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
function pg() {
  qt = null;
}
var vr = {};
Object.defineProperty(vr, "__esModule", {
  value: !0
});
vr.resetState = gg;
vr.log = yg;
var Yn = {}, Kn = {};
function Mc(n, e) {
  n.classList.remove(e);
}
function gg() {
  var n = document.getElementsByTagName("html")[0];
  for (var e in Yn)
    Mc(n, Yn[e]);
  var t = document.body;
  for (var r in Kn)
    Mc(t, Kn[r]);
  Yn = {}, Kn = {};
}
function yg() {
  if (process.env.NODE_ENV !== "production") {
    var n = document.getElementsByTagName("html")[0].className, e = `Show tracked classes:

`;
    e += "<html /> (" + n + `):
  `;
    for (var t in Yn)
      e += "  " + t + " " + Yn[t] + `
  `;
    n = document.body.className, e += `

doc.body (` + n + `):
  `;
    for (var r in Kn)
      e += "  " + r + " " + Kn[r] + `
  `;
    e += `
`, console.log(e);
  }
}
var wg = function(e, t) {
  return e[t] || (e[t] = 0), e[t] += 1, t;
}, mg = function(e, t) {
  return e[t] && (e[t] -= 1), t;
}, bg = function(e, t, r) {
  r.forEach(function(o) {
    wg(t, o), e.add(o);
  });
}, Ag = function(e, t, r) {
  r.forEach(function(o) {
    mg(t, o), t[o] === 0 && e.remove(o);
  });
};
vr.add = function(e, t) {
  return bg(e.classList, e.nodeName.toLowerCase() == "html" ? Yn : Kn, t.split(" "));
};
vr.remove = function(e, t) {
  return Ag(e.classList, e.nodeName.toLowerCase() == "html" ? Yn : Kn, t.split(" "));
};
var Er = {};
Object.defineProperty(Er, "__esModule", {
  value: !0
});
Er.log = Eg;
Er.resetState = xg;
function vg(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
var nl = function n() {
  var e = this;
  vg(this, n), this.register = function(t) {
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
}, Ni = new nl();
function Eg() {
  console.log("portalOpenInstances ----------"), console.log(Ni.openInstances.length), Ni.openInstances.forEach(function(n) {
    return console.log(n);
  }), console.log("end portalOpenInstances ----------");
}
function xg() {
  Ni = new nl();
}
Er.default = Ni;
var fa = {};
Object.defineProperty(fa, "__esModule", {
  value: !0
});
fa.resetState = Mg;
fa.log = _g;
var Sg = Er, Ig = Bg(Sg);
function Bg(n) {
  return n && n.__esModule ? n : { default: n };
}
var Ut = void 0, rn = void 0, Vn = [];
function Mg() {
  for (var n = [Ut, rn], e = 0; e < n.length; e++) {
    var t = n[e];
    !t || t.parentNode && t.parentNode.removeChild(t);
  }
  Ut = rn = null, Vn = [];
}
function _g() {
  console.log("bodyTrap ----------"), console.log(Vn.length);
  for (var n = [Ut, rn], e = 0; e < n.length; e++) {
    var t = n[e], r = t || {};
    console.log(r.nodeName, r.className, r.id);
  }
  console.log("edn bodyTrap ----------");
}
function _c() {
  if (Vn.length === 0) {
    process.env.NODE_ENV !== "production" && console.warn("React-Modal: Open instances > 0 expected");
    return;
  }
  Vn[Vn.length - 1].focusContent();
}
function Cg(n, e) {
  !Ut && !rn && (Ut = document.createElement("div"), Ut.setAttribute("data-react-modal-body-trap", ""), Ut.style.position = "absolute", Ut.style.opacity = "0", Ut.setAttribute("tabindex", "0"), Ut.addEventListener("focus", _c), rn = Ut.cloneNode(), rn.addEventListener("focus", _c)), Vn = e, Vn.length > 0 ? (document.body.firstChild !== Ut && document.body.insertBefore(Ut, document.body.firstChild), document.body.lastChild !== rn && document.body.appendChild(rn)) : (Ut.parentElement && Ut.parentElement.removeChild(Ut), rn.parentElement && rn.parentElement.removeChild(rn));
}
Ig.default.subscribe(Cg);
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
  }(), i = D, c = Ti.exports, u = k(c), d = ln, w = F(d), v = Is.exports, E = k(v), _ = fn, S = F(_), R = vr, T = F(R), L = an, P = k(L), z = Er, U = k(z);
  function F(l) {
    if (l && l.__esModule)
      return l;
    var g = {};
    if (l != null)
      for (var m in l)
        Object.prototype.hasOwnProperty.call(l, m) && (g[m] = l[m]);
    return g.default = l, g;
  }
  function k(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function W(l, g) {
    if (!(l instanceof g))
      throw new TypeError("Cannot call a class as a function");
  }
  function Q(l, g) {
    if (!l)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return g && (typeof g == "object" || typeof g == "function") ? g : l;
  }
  function j(l, g) {
    if (typeof g != "function" && g !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof g);
    l.prototype = Object.create(g && g.prototype, { constructor: { value: l, enumerable: !1, writable: !0, configurable: !0 } }), g && (Object.setPrototypeOf ? Object.setPrototypeOf(l, g) : l.__proto__ = g);
  }
  var pe = {
    overlay: "ReactModal__Overlay",
    content: "ReactModal__Content"
  }, Me = function(g) {
    return g.code === "Tab" || g.keyCode === 9;
  }, ye = function(g) {
    return g.code === "Escape" || g.keyCode === 27;
  }, Be = 0, M = function(l) {
    j(g, l);
    function g(m) {
      W(this, g);
      var y = Q(this, (g.__proto__ || Object.getPrototypeOf(g)).call(this, m));
      return y.setOverlayRef = function(x) {
        y.overlay = x, y.props.overlayRef && y.props.overlayRef(x);
      }, y.setContentRef = function(x) {
        y.content = x, y.props.contentRef && y.props.contentRef(x);
      }, y.afterClose = function() {
        var x = y.props, O = x.appElement, C = x.ariaHideApp, b = x.htmlOpenClassName, h = x.bodyOpenClassName, B = x.parentSelector, q = B && B().ownerDocument || document;
        h && T.remove(q.body, h), b && T.remove(q.getElementsByTagName("html")[0], b), C && Be > 0 && (Be -= 1, Be === 0 && S.show(O)), y.props.shouldFocusAfterRender && (y.props.shouldReturnFocusAfterClose ? (w.returnFocus(y.props.preventScroll), w.teardownScopedFocus()) : w.popWithoutFocus()), y.props.onAfterClose && y.props.onAfterClose(), U.default.deregister(y);
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
        Me(x) && (0, E.default)(y.content, x), y.props.shouldCloseOnEsc && ye(x) && (x.stopPropagation(), y.requestClose(x));
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
      }, y.buildClassName = function(x, O) {
        var C = (typeof O > "u" ? "undefined" : r(O)) === "object" ? O : {
          base: pe[x],
          afterOpen: pe[x] + "--after-open",
          beforeClose: pe[x] + "--before-close"
        }, b = C.base;
        return y.state.afterOpen && (b = b + " " + C.afterOpen), y.state.beforeClose && (b = b + " " + C.beforeClose), typeof O == "string" && O ? b + " " + O : b;
      }, y.attributesFromObject = function(x, O) {
        return Object.keys(O).reduce(function(C, b) {
          return C[x + "-" + b] = O[b], C;
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
        var y = this.props, x = y.appElement, O = y.ariaHideApp, C = y.htmlOpenClassName, b = y.bodyOpenClassName, h = y.parentSelector, B = h && h().ownerDocument || document;
        b && T.add(B.body, b), C && T.add(B.getElementsByTagName("html")[0], C), O && (Be += 1, S.hide(x)), U.default.register(this);
      }
    }, {
      key: "render",
      value: function() {
        var y = this.props, x = y.id, O = y.className, C = y.overlayClassName, b = y.defaultStyles, h = y.children, B = O ? {} : b.content, q = C ? {} : b.overlay;
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
          className: this.buildClassName("content", O),
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
    appElement: u.default.oneOfType([u.default.instanceOf(P.default), u.default.instanceOf(L.SafeHTMLCollection), u.default.instanceOf(L.SafeNodeList), u.default.arrayOf(u.default.instanceOf(P.default))]),
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
})(xs, xs.exports);
function rl() {
  var n = this.constructor.getDerivedStateFromProps(this.props, this.state);
  n != null && this.setState(n);
}
function il(n) {
  function e(t) {
    var r = this.constructor.getDerivedStateFromProps(n, t);
    return r != null ? r : null;
  }
  this.setState(e.bind(this));
}
function ol(n, e) {
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
rl.__suppressDeprecationWarning = !0;
il.__suppressDeprecationWarning = !0;
ol.__suppressDeprecationWarning = !0;
function Tg(n) {
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
  if (typeof n.getDerivedStateFromProps == "function" && (e.componentWillMount = rl, e.componentWillReceiveProps = il), typeof e.getSnapshotBeforeUpdate == "function") {
    if (typeof e.componentDidUpdate != "function")
      throw new Error(
        "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
      );
    e.componentWillUpdate = ol;
    var u = e.componentDidUpdate;
    e.componentDidUpdate = function(w, v, E) {
      var _ = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : E;
      u.call(this, w, v, _);
    };
  }
  return n;
}
const Rg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  polyfill: Tg
}, Symbol.toStringTag, { value: "Module" })), Ng = /* @__PURE__ */ Li(Rg);
Object.defineProperty(Xn, "__esModule", {
  value: !0
});
Xn.bodyOpenClassName = Xn.portalClassName = void 0;
var Cc = Object.assign || function(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e];
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
  }
  return n;
}, kg = function() {
  function n(e, t) {
    for (var r = 0; r < t.length; r++) {
      var o = t[r];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
    }
  }
  return function(e, t, r) {
    return t && n(e.prototype, t), r && n(e, r), e;
  };
}(), sl = D, ki = ti(sl), Og = al, Oi = ti(Og), Lg = Ti.exports, me = ti(Lg), Ug = xs.exports, Tc = ti(Ug), Pg = fn, Dg = zg(Pg), On = an, Rc = ti(On), Fg = Ng;
function zg(n) {
  if (n && n.__esModule)
    return n;
  var e = {};
  if (n != null)
    for (var t in n)
      Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
  return e.default = n, e;
}
function ti(n) {
  return n && n.__esModule ? n : { default: n };
}
function Hg(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Nc(n, e) {
  if (!n)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : n;
}
function Wg(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  n.prototype = Object.create(e && e.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(n, e) : n.__proto__ = e);
}
var Gg = Xn.portalClassName = "ReactModalPortal", Qg = Xn.bodyOpenClassName = "ReactModal__Body--open", Fn = On.canUseDOM && Oi.default.createPortal !== void 0, Bs = function(e) {
  return document.createElement(e);
}, kc = function() {
  return Fn ? Oi.default.createPortal : Oi.default.unstable_renderSubtreeIntoContainer;
};
function li(n) {
  return n();
}
var xr = function(n) {
  Wg(e, n);
  function e() {
    var t, r, o, i;
    Hg(this, e);
    for (var c = arguments.length, u = Array(c), d = 0; d < c; d++)
      u[d] = arguments[d];
    return i = (r = (o = Nc(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(u))), o), o.removePortal = function() {
      !Fn && Oi.default.unmountComponentAtNode(o.node);
      var w = li(o.props.parentSelector);
      w && w.contains(o.node) ? w.removeChild(o.node) : console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.');
    }, o.portalRef = function(w) {
      o.portal = w;
    }, o.renderPortal = function(w) {
      var v = kc(), E = v(o, ki.default.createElement(Tc.default, Cc({ defaultStyles: e.defaultStyles }, w)), o.node);
      o.portalRef(E);
    }, r), Nc(o, i);
  }
  return kg(e, [{
    key: "componentDidMount",
    value: function() {
      if (!!On.canUseDOM) {
        Fn || (this.node = Bs("div")), this.node.className = this.props.portalClassName;
        var r = li(this.props.parentSelector);
        r.appendChild(this.node), !Fn && this.renderPortal(this.props);
      }
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function(r) {
      var o = li(r.parentSelector), i = li(this.props.parentSelector);
      return { prevParent: o, nextParent: i };
    }
  }, {
    key: "componentDidUpdate",
    value: function(r, o, i) {
      if (!!On.canUseDOM) {
        var c = this.props, u = c.isOpen, d = c.portalClassName;
        r.portalClassName !== d && (this.node.className = d);
        var w = i.prevParent, v = i.nextParent;
        v !== w && (w.removeChild(this.node), v.appendChild(this.node)), !(!r.isOpen && !u) && !Fn && this.renderPortal(this.props);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      if (!(!On.canUseDOM || !this.node || !this.portal)) {
        var r = this.portal.state, o = Date.now(), i = r.isOpen && this.props.closeTimeoutMS && (r.closesAt || o + this.props.closeTimeoutMS);
        i ? (r.beforeClose || this.portal.closeWithTimeout(), setTimeout(this.removePortal, i - o)) : this.removePortal();
      }
    }
  }, {
    key: "render",
    value: function() {
      if (!On.canUseDOM || !Fn)
        return null;
      !this.node && Fn && (this.node = Bs("div"));
      var r = kc();
      return r(ki.default.createElement(Tc.default, Cc({
        ref: this.portalRef,
        defaultStyles: e.defaultStyles
      }, this.props)), this.node);
    }
  }], [{
    key: "setAppElement",
    value: function(r) {
      Dg.setElement(r);
    }
  }]), e;
}(sl.Component);
xr.propTypes = {
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
  appElement: me.default.oneOfType([me.default.instanceOf(Rc.default), me.default.instanceOf(On.SafeHTMLCollection), me.default.instanceOf(On.SafeNodeList), me.default.arrayOf(me.default.instanceOf(Rc.default))]),
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
xr.defaultProps = {
  isOpen: !1,
  portalClassName: Gg,
  bodyOpenClassName: Qg,
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
    return ki.default.createElement(
      "div",
      e,
      t
    );
  },
  contentElement: function(e, t) {
    return ki.default.createElement(
      "div",
      e,
      t
    );
  }
};
xr.defaultStyles = {
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
(0, Fg.polyfill)(xr);
process.env.NODE_ENV !== "production" && (xr.setCreateHTMLElement = function(n) {
  return Bs = n;
});
Xn.default = xr;
(function(n, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var t = Xn, r = o(t);
  function o(i) {
    return i && i.__esModule ? i : { default: i };
  }
  e.default = r.default, n.exports = e.default;
})(Es, Es.exports);
const qg = /* @__PURE__ */ vl(Es.exports), jg = "Glow";
class Yg extends Ji {
  constructor(e = {}) {
    if (super(), this.name = jg, this.url = "https://glow.app", this.icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAB4FBMVEUAAACjON6dNNyjONd7C+GIHNq1S+K9W+O3TeLAVOe6TuSJHtqcMdPBVeiuQt2kOdeRJc7AVeeyRd95COR9DeF7CuKWKtCaL9KoPdr78/789/7//f+zPt7u0Pi7ROG5SuK9TOT67/315PzVYfHAT+bx1Pry4PuiMNWmMdaqN9moM9fv2vqvOdvtzff15/ysN9mxO9yzRN/13/ysPdz46Py/SeTFVemPE+/EUOe5QeC3P+DJW+y9SOOfLtPZYvT46/2TGOu2R+GNEPKaI9/PXO7t1fjbZfWgLNfu0/jIV+rQX++ZKdCQIdSWIOGmN9iYJNvCVOjRVe/CTOaKE+eZKNSgKd2TIdnLV+yECfGfKdqKEO2dJ9ylL9iNHdr02/uHC/KjLdp+BfCcKdbKU+t7B+eUJs+dLNKTHeG+ROXUW/GLGeCFFd6PHN+JDfOuQd3JS+vNWu2EEeGOF+WiNtbOUe2BDOf02fuSGuWOFOuUJdPWXfGFDuvMT+yVHOWIF9vCSOiZJteACeyLHNV9C+N4A+x1A+mGGOPHUOmKHN2aLtKFEOWXHubarPLXju7CfevoxvffuPXQmu7QfuvnvfXJje3dnPHBauTOcOu4bfDjp/SqUOytStugNu6yXd6bKueVNOUmkAxzAAAAGXRSTlMAIxB+3D9C/WLfo2CcxcXf34TffL6cvc/vU7i1KQAAOkJJREFUeNrElMFuqlAQhivICpLehFofgb6ET1CjCwk7drZNwA0SFqYJ8Upq1Ke+/wwz9hwurtT2m5lT0933z+jDLRgMPN/3w3AEnoihkAt1l10PU3SHN+aP8EwEQeC6ru973sB5+GWgHY4gW5jk1LlNjSFruy13FLEz5KGP/p9X5Xg8jp8D1/cGDz+N44WjYd6cKRorAozBDgHUaIX1YV13lo8WdS5OgKfrrxwFDsL1fuogHH80bHrcG/MEUAbqv6PC37ROU3v/zI7mjYb/ofZd/TfUUeyVyQQ9Du5/C174tGxsEEFViX7znYEF++/0AlJF/MmbS+Dtb2C7QZmQvHA2R5uM3Ttm4ITDJWg6EVTwRwsNHwBaqQ0QgrpTEa28wQat9Bx/+5q77/Lo3ycD72nJWOpsL/4NTV4Q3evP2krrQ4rz7zCdog3gzxFg/Wg27/nqvxvyR5qyLCPUJIomUeDdT395tucAyL8p+EEAyt5MwOBwsN0TLmRgAn3lLG4e/yvswdmerctyIoUUwNi/i76eAA3Loxu8NKeWYr/fFwu8pyzPEUSW11mW1TX1IevY69/pFC36SSL2cbyJ2RyNR3kXe4H0eaShj8H7eLsrGOj2vxo8/AlTVeTN6ixPb1GcsgL6GUWAb0IGyJ8TYFbpCtghYEg9QYM2gVh4pbHtgS4fq9fF4wi6BIMb/fSJPRfbV7AXOILWXi8A+idM1gvrrwiSp1a2WpsY+hguiuCSP906tPkC+nFvcf1DtV8qpE+jQF5ZIAHaPqYvgwPkoU9vukosNlr4SPom6m/IR2hOAK8ym83KWWlx9ffAGen1f9tTG/IoNlcWSgbWFy8A/miTrVYM7AhIHk36SiTAEto96PfAuW79JP5Fj/IX/gafmIXtvpcS5TXNCupo3j2eD06ASKnnsNf1b7cxdWzxrlj2ZfTyEkWia9RMX+bxil+CEOpfNEszgcriE71g4P/J5sJ6sRbIXAIgPmhA8pEw8/m8fbYEJ2DKm/r29l+QgOhe5IpfAmf0j9SyaWkjisIwrS0I7bbgIn/AUDBlFm4Ds8hKs2lloouQILrLIiATGAQDycZf3ed85c4dTTX2Oefe+LF6znlndGv2eQKUh7XKNzQ8oE5BigD6mFvxlam7OTef6N+r99h4CrL1z3/P74JcX+xzTuVw5Xz0Mfj0ZauE/kblOQ9afDbKs5hzuKhnTQDXMgLg9kupezEPrqgLs7+SekojwFtKL3D/3F5xccBeL/+CuwWPwUcef8jyr/pBs25aeAT0LGX90A0A8nSoI8/+XZ71y6Fh/jTPuZun+Ef2Q7+vgjgDd2EfoJ//MYFvBB+4N5tbGv3Zeq++FFxzHPbPZbD7WjMQj74yZgIXF2NPQHoIuvrJHlrr79v+T+mckC/8KCfHB/pvFey3txv8Z7cz/BNNhok3DIB2edG3DNS1qtPBlbgbZTkuYwREwNefE/LJX+j3+5f95Fvo9uOmikspvZSjg17/4c8ERB//dgAqumoPICH6Qo2/URvy7gt/2z/rl97p34wFVZ5oz0ejOTUy/46+4f7hzSn0FPY9aEiUo4P9Af3ZZqbs078mAKlSAuItWC/VnwkYZm5XaZg+TT3d2ADUH338R7hLOaGf9m/OdIIfKTEMncDB/gTAJ8DlEah2NHQ3AKuV+HNgpfrBfRuxd0pB9DlywWQ+gVEbt4+nP20fzpL4Ty86wa89DMcHPv9BSkCFv16N1nU1NfsUACbg21/VMoM6oea4O2OpFAHcXf9m4owS2V8/9++r/dkplcw5r3N5+d4JfL0N/7DfaK1lCFWbaTWdTq+b9v6BCbB7j0A2gMd72OmXbD8Y0+g7XXt4GQBfPnVWnLnkgJO+WFiZPingTXny6b3//4S+uQdVNaua2D76Qpb/AHd62B4A9o++/6BkAoEFwNiz/zwA7i9Y9tW6p6dHFxBDcMjA2/8PfO74awJcn9PZPvqcYJXA3dj5Gzt3lw9CPgUgi0CuH/4uj77lfoB3gm8W3Rgwgbf+K/6xNdzfymH/0EiZfh4AXgDOkh4OaZnDMA2ADAS5fjlO+kFXHzJ/DUCkfzAoegPoLVoFi0WWAV6G39/8A5DvP6MKEKdoKrE6TwkAnYDKox+8OoCbMtt/sDcA/vYHe/cNlF5ONgM6ZnD0zxeA+cf+YdPVb/RMXybg/Bx/118Nawp9G8AL/449144/O/3JngCEvQ1AMH0aYw5N/er1aPvJX9rN5bWpIIzi+BYFFz7AqOSWLBTflSKloQsTEFcuBR+BVHBbQUEUpIviMjFtbSmllv6tnvkePTN37qRW6ZmZGxvr4nfmfN8MCQKfMTgxtQHk/Y/5dzl+uv/OzwR81QTgdcU1Go1evsR8SX6sV3Tg1bs0AYM7gzuYoG8KAOBBpAb4tpuehAXpu3ORBVPawLW0/DFzA4ZhQGoB8Q8SMB/wJQMSA2hlRAMCfFjkBz6m0TMB0JImAPjgN/wkAbr7c6CfJbvimwFYeHovMBWL4EzS/+gA2PEwftUyxnDYRwSUHvhvA7zQm4z+2SjI8GHASGT8YJcl9K/wIP8SDBB6237Meybtf1IAef1z88GukjciC84WDKidgGkBEN8cEANE/f686huGw2OAHuOZ4pMfCwEYRfjGj2kGhOeLpRdLA5HwswCCAdx/zATf4amPmHiPKSgVwZVaAJRcZ7b/y8vgDwnoiwVmgEzh9weebgCeFgDDpwVAlwX5/mMGiQGDgd0ATcr/2NsfJiWZ73bJTx/owKniCQA5PwbF64/zQ8M+ZA0Q8gpgAr5KBFgBln5Mp9ceIOjUm7CWVANRHADQewBmzYFI3Vvdbneh+wQO9Gr8qIKg4klwjfyEfx0eQ+M/CD/xYQCWByBYUGsBkDuA7dfhGWACVPQB9W9SfnNA+EGv4glICf3CAvAXYEAPSm1wBy6VOmC9/0F5BcAAzP6yBiDil6fBf/YAIAIrGGkPBD5FAzwARp8HgAbMzTXhgx0jqIfpiqrAe+HZUgdUC8guz1oHcFkCpAWYvAnOB3ywi4TYEwDt7Uy2xutrnU7rpqjVub+2Pt6YnKtyA1Sof0zgqwGYNID4EOBdPRggj5CENARNEbioXwA4PS3AyPlZA6p5SughwfcegCXa35mMO0Au6v7mxrm75GcFRB8CCL/guwGsfvK32712L8oAliYA4lGYBeADO0C6/8N8/xv52QSUHvtvCdgj+yHqbE6qmL92CfLyB37Cj/B3ia8WVJEJUyNwJnwFCDEAbP/N/OgBhQBYBr56DGTnx4j7UdQZb98dDOhAnACI/HEFOL2pCqtHWRdojMA14ce3PzwANQJ5/pmAsgHGji6I+O9P1m7+k9Ymv5t64F29A0BpACDlT9SrggniQ9wGahE4cfAdsNKzBZT4+4UA1LW/C/p/1+YEBtzLWsADVUMCJPqJqoopEHq/DpxMvgeCYACvQAJPlfe/HACM3a1C8o9SC7/LPSA5AS0BNXgoFEJV7wPpdfA0+P0b0OYPQModsJwAbv7/6eF2/FF48yWILSDBD8tf1AD2gUtxC9QEQJL/1YS/0P+oZv6dqfg3dOrjUHUmtY8CD/hn4wuw81NAp5gBMSBqg1eiAKyyA/AAsNtfKQAU8W83UxOb5DfiUbLgl1qg/HkPzM4AaLFytWVUtaPgFCvA+YGPscoEJOkfEr/IT/ycnha4iFx+jxYEAx6zBbAC8v1fxAgGtDGzCHgGLvEMcPE7cOC78v5XdIC1nyNhMgEyigngr6UWbHsPVEkFMACgjwxok32x5oCHAOcAz4Afwv/+g9KTf+iiAYfw763X6ZOf/En0JBHsDvxNar1KL4LpHUDwGQFhl4HpOUgicJ63IJXhvwZ/Af/wApi0GuC5u3zBYDRu2Ip+lT9Eam2kPZABqDfARagK0yKgFvBKGBw45S2ABqgF+ArsSPtPA/aeJ/SOxx+zzJPTX5O/zEL0qCoYUA8AJPz2jKvAE3BZ+U9GLcBEAwr4BQO2ai3PFP0pfsr7GTTTIL+U18IGSyA2oJscAAeawZIU0AA6oE3gjLcASPFX2QBKNwDyU779hjRNtMbtoBl8W15pURSC5kMw5a+wPAfsA0kXOMtbQJIAsH9X/iOcAFr9bHT/p/q/T1LQ+mkGzBZKYJGamUEGsCoXbwPeBa/mFQB8LOcf/k0BjDaiA+wYlKZg/EQc4D0wSwAF+pm4EUT3wQtJD/zCCgj4UHr9L+Sf8Vf84+DPU/BoxvlZAbUO+FTgRfInJsAjYFehT94DvqQJ8Bvw3wRgt8XtP07RgkfbWQ+o7/9TYcfS13oNQNflHij/ASY2wL4ErtV/Tk9NDP8Y6WmB6w9v5/7aZhWHccVLRUHw9kO80L6hBrUaFdu1IJIpFBWVjnlBNm84UFj7SyeSiSjiYMY1TROb1Rrb+a/6fO/n5OStlzmfc96TqKB8nvOc75t0fb/uugHCXxqwsgITlB8GLKQGyGeB2+kmcMX41QDAWw2o/wJEwzX+3/jjpgBdTwPgDjj9wgpdC4nKCNBt4D4yQB8C0gAI/od/9xNAfwq/gesWKkLQdwPK/cfmqwF+BiIDbsA9dBcUA74W0W8Bx03wHP8haNCX+CU/1LDl1pgRGRiGAWGBJUCO/0qRgNSAO+ibABug+MiAHgDAn9Pb4GufFviJAetJ8Ws0MCG8ykL8eMF0W+LdTchq4dJ8+V1Y+FV/4QDdBx9OA8APAcCANAEn7v/O6qCyO5/BhwfhREhcMldkoVVl/ya3q0ZxCGBAyY+L+c2BxbIKmAF3SgL8CEBUACQBmPJnwHUGrA9Wj1rOX6/woRRnRC4FFvoiKeGIWFANHp97wmuACehMD15e8bIYEVjIDKCvQ5spP+DVAZZwY62vf50jfAgU/H+rR8MHUUQk3pcpeey5ucfnm6gDVgLiLuDxx8KvZkFEIAy4UhoAAV62/1x5/EP08be1c/ry4VLKfxNW8PAJYbUhHmPVAzLC5wAUYHXA9z9LANAJfsUPwfSNEF+GcwPUAvsNKFx5BBw/7v8j/F7A0ahxSxVumCWtuWcff/wX+TxA/O5A3AMF/+zK4uLiAl2lAfRJ6Hbm31b+LAEYLDhQ//kPWzGBAwhBQ1Vh3ALlh2T0Ir4MLTT1MyGdgcCPMwB8SgBbIJpfCAfEgLskALkD51LVff6dMD/UPoIB72YhqGzcGk/25ujPx1/Ys/vhr/4T0eC3/OPiCNghyMvg3TCABH6W8tMw5fQhFH+Iq99Qfkv+aMnRQ5kL/40T7fHTT9OPRHb9dtiYyz8IMz+T8/678kMgn4XvKxMAJftPi+OHdpwfOgQ/6XD9nyWg+jf4o5f4h+PPzi833IHWgpVA49ftF3otA5KBLAH3sAHcAKLmBOh9cHVaI+eHmjv6sNQfg8bfS0BF17+pGvizUv4Twpde6jcgc+C3tARqAII+IpA6IF8GHrqyLQG4RgZcKwwA+rnVkn9g/KIxJ+Aq5h+jEjB/X2H6q6sqnJo2ibQ/x78wSgn4pQFFBnbjBKQF0Oj51TKQnIE71AAE4Bqkz0GeS7U6S0eV8psm9tTwVbMAqipQJJxVAR//sFT5T/aP6bdm5bfl5lFwzAIpA8oPxR3wrPJHAEoD9FPANrUB0Mdf/9qAVsJfEefQ+cmCwbpsoe8l1KgdVb7/9jqVpHb/+BV/au7p568rv2fgkyIB2H58CMglBsQZeOC2R7a3v6bhDQC+pcc/DZ7GDI2dvzIdMj+m6HCdmTENqWI1Sn76R+EVzdw8qTLjr754RQzgBMwbfzhwPSkBtv8YZ/MUBD8bcC++DcMBiA3Qh4Czp0ASnaYJHQl/YOGltcMlIDQZVaVKfD/qNf+sIu0fywPEkYB+o3TgQAJg9DQXCZ9nmQAzYBuKBMgRwLAEkPhXYMsDQPgdQ+sMQB/axPjjcFjNNCETg2besOL90vgrbx9iCThopEoOARng4v3HsqYGlA7AgIe3SVkCsodAcGHRAOA6LQdA8t9JHGh1we0maC8l8uCmtDQ6juZB4IfIgOfyEumHIBKAIfSsxVBUwdSAa6IIAMZlOMD0wh9//l15AXB1MAaCHxG4aQ+G4+Op/jF6BAZWHXMHGqeSACySBSaEYHFN+HMD7mcDwgHgk/ghQMxVnr77GPCg7/wdF3nQ+i7n36Srt0nXZPyPTVgfHbzCjbSCP4rgEqHzCcnLwJ4bcJYdCBVVoM4APgTpU5CrMiIBkzgAUxok+GDH2sPa6232oC8ng/56x+NCk18wptUajo5/zvvnZQY8NeDsRQbiEPwaCWDsMGCtPANhwJUsAcYfFjA6Llar4De1uoGP2SP+ngzVxmQwHu4JepCHBet7o8HxV9FFL+2gZPzQvvB7qQwH3vA/EWD4OABra2vGv5hEAAZYR1Cit88BKb/8Dnzo0G4AnVKDogTABKX/HtfHNKA/fj8eDMaj/lA1Go3Gg4Pjr37+hhT4ZgDRYxr/XFXIHdjVBOQG0H1gdgQehAHKzxZwAtAR4TKG7b+hFwGojcDFi3QEeoSf6PuP2QLT24UMXy3w+Pv+awnsn2DAshhAnwCNXSZCMIOfDLBOmJQAa4AC/EhAxn/o/O1Ou8LAmzbT03oI9ovE30PrPNl6WuWd49fzg90TMLsCQr9Xs+QRKBIAer0TrpU3QjJAdJWWd6+GBSKCvlwGoGLkSoa+wJGh8GNhD1gRAOd/GwMz7aaZN1HEDE3tPwegPgPLOf8aLxBlwBQ1gBNwRR24ui3faC/RCAMu1wQAvApu/LBkQvS9q9h/zICP/e+FBbVNJIHPY2b+6R5Y60BEIHZfBimNwDxLDJBWoIQfjcDCAFYZAMaFBRBeXCPuGMcuyBL0zi5DE1AG4BvwJyr4B3zjqD8Eb2QBcC3yIppRBNmAbWXHoFczoAxARfD5YFXt1jvcMi/1gLUlAQhFAj7AAH/gSw/N8vzrs7P79B/CVBPKCPxKd0HbfSxYhd8DYA5EDUAb3DwCl1j+FLhpzwNQNw63ROQDzd4WsW9R+Le8i2YeAOCHyu0Peub/ndmxYC0MKCKwFlqUmUcABoBd+DEUXgZagAh86Ogv+dtDghcLMHHBAtHHNQFI+YV+6vNPdA+iHwbucgBUFc8iAil/fgoEPz0Dt20CHxc74Am4JNJH4N2GvhiAA1DvwA3BReM4lXXQpGGNdL9R/g+ijfJ7mNQ6EtPw38puf/rY4HrHpZ+k4zSoAb/FCWAFf/HTcTJAxQmwCHAbGEt/xKAVARCV/O3B1iXtm8aDuUWgtz66eAd4lrDTOqODquHHc7NzgR8hYCOiDDbOiAPBHg6o0gSorl2UBOgRgLgPSvTC8BIIzELE7mfgyxB7AAEdF1ags6SJLhblx+4zPhbb/ah+SeeIUadUJS5EBH6RBET+g39NzsDMBFgAQI+pNSBNwBAGcABO1A3tmCZT36cNVGX7pYsqVuw87T6GKGue7Pj22CyfgOXCAjsHEoEn9QyclIAFws8NoI9wYFd8PgTY+HgQ/sgrwIkaaLswdwGDuscx/Abv/gZetI3qD8Q+pS8Kfn9car5zkjwCp+pPwJmpM2AGXNzkLsCMbl2gTuc6tACcrCHgIfZAV+Br21S84JXpOQCEX9KXN3/rm/YLth+jTnYjuA7+mRYY/mKSABPzwwFeoK4UAH8I/vSeBeBkLd0g5ugXt4GZigygBrLcQRfCEvQqo4/tBzxpn+CX/zICT+oRKFR+I8wNIHShNwNCN+gERADqNbFOYRs09B2odUA/hNA41fQ5FLufGhB9k5YhOIBFFYaUZ6CsARhn3ADmLwzASPvA8QOgch/ACZAANNsna8z7XvQM8wQAO/idniX4UIb/jPVMeP5gWdShJSwIWRncXVH8+gjUJwBL1yXwmN1+BKDZbLoNpR3DIM+lm7+B6dvPw/QK0ef4WdeMZ0cM7+Io8BQrIgL7HoAyA6xIgP9PQDQBOb/gd2m2ogQ2obbMWboB/lLaM9Kap85QRp+dfusatW/obYxUHgM1oJEa8NOpIgJRBMwALYKSgK5Z8F0XDSCIf6c7kXsA6Bkdrzwg+2v7G83JLAMYH9d5mucz8NdJSm+KtnFp07A2sDEz+igLePEIvJwYcIouT8BaGPBqHIHvv/cEcACC/zSaP5AHh3YCmq62v9FVPRioAdErbQML6FneNvPzaBj3OVuAMdU3L7afdUAGGH+YkBYGM+B68Bt+fQLAbwZsSRvkpA0i8PFmpztMDGjxJYo3bfOgnwbg/eiWF/xZx7hQ0TVPy9+zqnHbIqBrqU5SBDj+GKd4YBJ+/oXwVTaA6MEvBmCgD3TCT+pGCWDUFkYTSzN945HYMwNAThbU8efw2e7nj4pbw4hhWxyIWQiHgA1YFgNAjxIARQL0ThgJQP2LAACfZAFwdW9wCaAAKG2bkf1Nlof3s0Zx3CMt2gWGMv5i+5P8m/baoghBfQTezIpgODD9o+HbLAAia4E/ZUCXamBWAmACLfEGw4LRnBC/4bPOswPWLC3k/KqsZ3RC/wIvhg9ZNaw1YPes4WsEwoLFMzgBJE1AHgHgk7L9RzUcSwngAADWlnhDabAwDBhfQ+AKenlFuyzf/Y+KpqnJ8beuYXOC7/zt2QZUXgVB/9MFOgai9PtA1ACgO34YAH2XaagnQHMur0quPkQ0xnoEYv9d2fZ/hvGRbD8cyPsFPa8GRL8U3ARSGXvpgFZBLv8/Af+C8mMm9wFLgP0/0KIGCH83d2A9NcAy0G61gj0OQrMv/FCQJx5oqzjGJ2UtI/OekYGPazfD57W+CCxLAuQEYLK8CCxEDQD7j/z/gepFDehSAMKALzHTEtDiBRJm5EFccO2l6T+fROAzDFpMH5mYvrz7RQBIfYMPE06ognoXvIBTAAOsDJgFkQDQs3oegUv6Ew2z4B28Wg0U7ta0mjKhFg8+Alz04AIug5c3oeAvm0VBwu7aF+bEAMzaIvAyGwD8C6gDloDAx7QEkAW9qIGQFoF3MCBaJlwDEQADTlV68ZLy57LNLwPwjPLnx3/agCfkkza4m/CB8We5oAbsEi1t/wWWOHBGIpAmwALQI36rAdEF/Ttc8OLQSkAddf76uycA+x/4uGp3vwyApd/VbsZXEFyqMgKZAT8RPE0xgEKgRSASoAbo7osB0Qedf7A1Lgw4UQfgB75l4LzhY6mPv/PXBOBPys7tJ64qjOJVY+o16otaK6WFTlERtQwYLV7SWJSi9mKaEqMSY2PFxAhJDYmmCY0vjQmUFgpIGv9X13fba1/mUF3nMjNeHtZvr+/bew4zZ05n7zfUPpJgAHBUTQAA9g2A2g//ECNQ9AD84Q4BoH+zT607gHLYubcAvhGx/X19YPm/kRNQ++XNchTAYZgPBraLvBJaANspAAUA+oc8Af4roLD/Hey3AJCAu+yBjHq37lysekBjH3t9u9Dy6ke4p3Z98CF95hSsIPIIGIBNser+CeC9S7EWZBOEDIAiwDXsFsCXm0fZA0dqBu3L+/5zCSkAHf0/3BfrX+w2AxLAqwagfvuN3aVdseyCPQJQBK5LeRMggLAfBVADmCWAjhZY1MM9vfIBVfa7OyAXQGo/BO/Y7bSlrtkICAMTgxAoAUx5CwgxA5dsKsxXghoAQ2B/zviy0qkAMO6m47GVA2j8d9qvbhfIBhjD/6oR2PJBj4dWU+CA08cG4PZtBMAInM8jcMmaABPACoD8V4CqAPx0AgB8EhhX/wcjWJcSeLh/I9B2ALNf3Tb8nY1klEGILBBJmgePZAF4FwhwSgAMgQGIFui/gxkFcLFsgkcdQG573DcRwRiA2v/XrX+6L94BVDeLo38DwPQz/ykAdo6FwG0oCJzHFgnQErAm4CVAAvUc+AkBaAnQN7aSBB7IYN1KwGe/cv3TUf8QO6DK218OYBI7VtqtyIEA3rtd9QACYA0gARAB6CSAv+PE7+Bgkxc/YSXcJIAswreDCADyxj/sU+0CMJTyT/sh4SAAaJePVAmAywCM/3lNACcCJiD3f/UX7QDZj+B4EpAAWQeN0HWbfr4MAHrhQ+wPaAAIvqu2b3eNHwgABCwEB4oJYAWgBbAJQHFJgAAgAIB9yAPwSYw/fhjNALxVuBwPGhx6fSQAqBn/jgCw/ov7hVKeAEyzxiFYtBHwpSAAsAMsnIfePZ+KQNyzBByBfHIBCWAAZPcewJWwe20fWAcG4GtV2f6prvzTfwtA7E8yBrKJ+LwBcNsBuOqJkADcPpTG3xKAXQGcUAAjZpGO/RgnCW+Ct3j1uwHQ+m8ngMEAJjH+CiEYpCBMYVMSUEyDt6Hcv7QC1oBfGQUAlSZAFQFQAgmALITYAzzu6jpynyOxEuj2X8e/vQRG+9TWJCKgG62ThR1AEQmYUvtOQErAqiAmQlUA+O7PlIAvr8YvAToDfUkAYrgoBI5/Vg73fgj7GYAu+yUA+m8BjFgGJsM2/WevIwGT6Y3AwoIQWDD/DqA7ARfhHs4pDcSmLYQ8ADb8yXdwYCDu4zcTTZ3pZ/7pvqMBMgGSgawR1idsLIFeJADOPQIkwIVA3QMuQjQvIdBF4d1YCI0PlFKxklDdAQBXd/dvABT+W+1OZjVg403/bAUBYCI6wAISgF3l/knAAXzBACQCFAisE0AHAT9qAB3L/3r9f/AEcEbPhydDWQ8clIApBbBtABauLUBKwWUEmADYVwCeAGw1AawM70cJjB8gMvgnADSrX9rv/hsA1PiHjk+SgJ1om3tKwH4AUPO0XyyFDIB8aNsB+Md46h/Du3iHCXiICOAz/dtf4/+Njvybe78CMFCTpQrjLAdbCuOiqANwkQEAMAIOQBPgAZAdrulf9Pf/A/BAAUDff1b6by+A0j8vgZQ/GwRZCibC+Sk7Ff75xAFsGQAYN7EPFguBQ2JfE/AFe4CcywT0/x8A/9yLMChXfy0Be/9XNEDaD9nL7SoAZRTSamDqhALYM//UiiNgDRgAIyD+2QPgWa1/YwHAyS+K/jcAQwDQ2Dfntf0k1n81+kSwU/g/hd02YpAtAGgASGBGM0ACJ50AAMSXtwyAC97FNwCYTuHd0H8GsH4FAExE0LZ/Eujof/QPGASQE4CMgrrXScAATBYAVlZWFlayubBNgAKIDHyDDQhkj5LAPJgAzGIL8SmFhSABcPrj5f9m+neJ/ToAlK2EOO7MgO9WAX5ZfKL2D5UALnkCYN0Q6KeXmQB7MBgxDWAtHI5BgU8rGHcSgG8/o30TAYgq+1Az/ARwuAnAIs6LiiBqIS0D9mMdCPtQICCAVAL86pKNPzzrZntoNwDAprknB4ehe8yC6ccim+7XPfxtB3zffj3MAQxn7rFxl5eL+jDCSSBLQALANhgAmICrmoCLkQEyMApfcxowl7O+EQifPUgVQP/Mf+X/7e7xf18kZ0cwAY9BgBDUvQeAPXAlJgECUARG4JITAACzbwREt2j+Gyh9tvWUTwNhk5sT4bOJK1ECY5qAdvLDHwAPan+8YbwpUrCPuOf2Pfl8IAB9M0z/LIK6DQKAILiqBYAIQBeVgQkUzP8tdkFGnb6LBKwTAET7B+XflLm38FNCYMesLqpVL/5F1gF29kADEPYZAb84RgAYf5N/iUPk/kkA/0y64MAEBASe7l+hf89+2/1oH2rLP90pNSewt7iItEvgZefQZ/UQPXAD9nMA56ILtAlIkgiYxDalAK72y2kg3OuZu/dAyD/8WF/9MP9R/V0XwCL/xyCc5VESMLy4CN8CYbFYCSAU8Sp64N5NAqCsDbIJEMBVScCtIPDND5n/H6QAQOCEdUF3HxD4klkYg/8PLQBV/Pl7ad3tjw0Q1pMsA5uIgMVeQHj64yQNIiYBtgAZfQgR4ExQJuDHmAR/D/8/AMDXsI5DdQsqm8BsBoGjP4vn0N0rP1zvAJB//rWq/9q/D3yJYGdRA6BFQAQ4DAqqw9eB2zdvOgDaZxvkRIhZIH2DXwBcDQBqHwDkQ+14eatqAux4DkMeoyruXZHvPjT+Ofqmjukv818A0G6wtQi5ddusF0QJsAUIgN8WFi7D/+VzJgVAAiyBHxUAhC+xiX3oa0oIQLdujflKQEfa7OLsDyZ7+s91AOB3Pvlzye34w34NoMh/HYFhA5AlINci3wuvSAAuw6xavywQuBpSRQ2kBEBXDEBFwPxDm/F+aLZS9Q/GrqMC1H85/cvsb+IHAAavf2m/JiBNQCGkEOQCAJsEewjAb7/BrJnvigAB/GgA4B87ARQJuJJqYPZArV/h9/7Ki99F+Lv6P/PfyJoACGBzAhoFChVgV4MUwOWFc3kCCCDvglYC9vVtVdgnANMVqwFrAgdplwD40Q8r/3b51z3/txIoux4AJyDmmQMCmJcOIC0gEsAIdCQgKoAEKgTy71gDB+nBdQAI/wMXPzg6/LP+g8AHVQSG1HwhEoirQRPWAi+7dSCYd//QIABMQADABU07cF1HauCK6B/OA93avp4BUO+Mfzn8fPvf+C9/MosEpAag8aIERJYDzgEggArA6HsC5ueFQQ3gkpeABYA1AMG3CQwSgbETnAc6db8JAPx31L/5J4D2F7Owf6B7ENhdXI0aoGI6iFXQ8s2b6AAWgJ9//lnME4AsB2dAIAHgFEAAMvCZtAag+1kbHJqNkz1hBbADMP3038a/+c28LAAiQ+A6OYQA6E6ldsBV0E34dwDnfsY+D5UJIACMf7QABqCS18CDsg3SOp9uf84AtG/9Wf2dy1/aJwArgyX9RzuWgGBAZS0QBcAEmOa1CLgaJIDnpQIaAESQA0AblIsCCmBIdhxVCHZRAc0X/zn3t/5pnwBY/5SHYGlvFd5Xx3GulFpgb1n9MwHz2ByASv5UEE3gSQCA8hJoAwAedRuEX9mwk4OeL6QAcPFL/53tn+Xf/lwOtXRsaenY0CrMrzYBKFrgbxEAAHCxCvQieQ0ACFoAlMZCIxAXxmAWMgi26b6OALADDux+NN+Mfwtg2o5pOS19sCQENlYXJQBCYRxHHYC2BcpG/wAww2mAAH7EDVxMrICKwHX8S74jUvtGQU/2uGsdkA2g6f2mgf4ZfwKgLANLSydXxb0icK0yAEckADmAeSAY/Xl+dHQeGEAgpoEZAuDd+zgJmMZ0U5l/SC4NTr1lAKA5bFAg2GYHzH4pPgfQ7d9U268QLEF3hYDEQM84VGkOFP/RAuAeCEZFFoEVAgABA0D7SuB6IkBhVJ3A53xDEO5xThzuMwCsfyn+7sVPs/4hgHBPLQEB2qAZt14gT4sAWAVAmP7UPgDMWwAsAjPoAYMAMAFyPSdCQAKobgD4/FTeBeYm5Mws9BmA8meyu6/9Mv7Y2vy3CDQClKcgOgADwP4HBCKLwLmVmRn41xKAagDXr4v9H+ifGbgO4T+qIgACc1b+eHaP/r0B9Duq//jx3b29rQ3X1tbe7u7Jevw7tLS0tVqrXAWrfxDwBojxH5UT2yAQeAIA4CUCAIG4i4td0cIhAocPIQGACMhaYMojMJtvCADv/RwNsF+O/tnDexs769tzcz3ss3Ozs71eb67nmri7v7G1d9KHv5vAV0MNgHoKgHTw//jj5z/EvkkJlACePfQiAcBeBkCMi+xRCWgE/knLQe99OGy/92EA8G//FZd9Tx/eugfnFKzDf6vt/Y29k5n/r3yjNjoDsMUASP/D4dZ187dE8L+gNfBuDYD+FQAFACIAgPCJMSwHIwLY49QvCiCb/mB+Y108z85RcC8HznKarSns7M1U3gPBUh0BaYHWAbeXAcD9ewJGM/lEcE67gDVBAjAFgBh9NaQA2AX6fFPIVQB0j/6L/nd4C+aH5nDImbI60ANnIWHexzMI9jsB78ntIBSHI9gYGICjR+ZTAMy9A/jDMyAR0HkA8hpoAfBWPpWI4D5XQ2HfA8AGEPYPb2yrb84Vg4UE0D61ub/1VRIQrE1Pr2F7b2i1h83EKXBf/AcAcc8AsAewBgzAM4MT4IIfJMDkAIBgln3QNJsFIC0AZOw3hyhNQKeQAOy0nzHYyxHkXaBXd8AiAAEAR0wDo04AALwHPAUA3QF4DTsJMAP6tnhqBATEu6tv/tP4n76zTt+y6Qs9wEF3ymqgS5sbM04AhbAm29pmr0f/fBvMDugRGC2lBGYgJAD+HQAJ0L8BoMoQ3GMRRATuZP4BYHhjk0tlWlcNToBs3WIMtAzW9no9+JejLgB2gI/U8kfYmAFNgAFgAtoCaP2/FgCMgRSBL4dMd/u5/8M++LZYnMAc4SMvmxKoO0Iv2mGrcY/BltmXA7rbE/vw3xQAhNH34Q8IKkUQACwCLxx6rADQjP8b2AZk4AFmgqIN7Ga3voV996fmITzB5gFozBMC9v+AQLWwqgQ4A9QFAOno0zwToDpfAWAHoH1jADkDpuC+LYcmT42rn/X0ZwCzPzE0MTE3IeM/FAlQFHje0Q57B9dAi2CjVyyBdqIAIPP/EQBg8HE4BJ8Iw78n4Onk/y8HkI9/CEFgBlRlG+hH/mHf/NuwT5hvP+P1rGxFAyyrgHXQhSAAXNssGsAyAfj4W/0rAPq3ElhRAJcA4IkcQBMAOKI0AmRwIbUBZOCON4Bhs2+b7ZZ+tS4IojOoPAqMAHUgguXltbXltT3xHw1gYbnugBp/kXIoegCnAQB4XAG0/nlVX8o6EMSyEEIbCALb9n/079O+JgCGgwIeZnFoEeCZcTAKZp8xEM2lbYD2Z0AACHbYAOfNPwNgBFQMQERgRmQA8IuT1RTY3tFMKbiiDwiDf45GI3yg/8edTfiESWfAk21zeCHuxbofegox/Q+Pwsay6NpQrAD22gIQ53pAZQKg6AHvAsAjBuAvCwCcVffzAwA7vBUIAYdw3wiM3Jf/48G62mUGsFebw4nh50YRgQWguw6EwF40wOXlpgN+hD2pXg3PpB7wCACwA0QA2m+0GYiog9A9JTBhw+9Df5D/WS8FeXAIOLI2kFrhw7V/DgT24Z8NkAGAfScw+qluXAxFBM5bCTx66FB0AAIob2lH4ZUAyBisg8DsAxl+eJMAQAGAIEjATt4WsUwwAL6r/VxD2LpgrC4O7YFATyeAfAnkAXD/nz4sAfjl6efVP0qAARCTvKOHHZoCy4ApCNwZe+3OOBZEUuO5e7LgFv9SW4IslHxlyNWwusauh51b+QIIyZ8/cXQbHGL86d/cf4qdTcACQAD469hhBUD/TQN4G7uLCAKAzAnj98b66/q+CBkwhVUcAaKgwDYJ/xMegCHPPk5BQFh0MPAF0OL88sYkht8bAN8FswF4GTADBiBWgs8CwIuSgDoAF/hnvVJMgan/2oNTRz5GJ5QMBAKPerite0L+JNogACgFaM4QYPNz63/SF0AnNpZXNP91AXgEIgHsAZn/GQfwDOyLCKD5Rnsfx5v9Nx1AMHAMm9oJfUU0MUiKoc5BahMiWw9g/MM23aeaoLJLIJPivl4BRP1bDbgGJ+ApAHjMAOQVcKFw3+/DPvwrAgj+k4TVuhPA+4JeTYBloQeHPxBwGvAnZp/55+7SN4Dx5cibzD9nAI4/xCbAJsgEvAAAT5ctEPYvXKhuakf12QsoJfAxCIw7gQ4KEgI9kwMB6FP4rHoAdxzuf4T+1T6U/EM+/h0AoCwBTwDA46kCxkiAf9fq93lbU1EiIIj881/3lMAUvrTERtApLpZqyehDDEC9M/42/6t7jn8RAHOvJ9GgaVAWggDwCAFAN8bMfwqAePfd1Q8ElN1sDgQYgg6xIKAKQk8OH+0O+/SP26aGfwLIGgBkCEaRAUlAaoPwr8KXBrAQ1HmQADwAr1+wHoDh7wsBV98gvF0ikGXC7sgrbAQMQZc4TRICJV47hz/8H9li/MM/J0DzzgQwAkUCsAyAXkpzwI0bYzcUQPhPACimoNDwSDQChGBubuI/qiVA89Uew/+xtf9RWC/8Q3kDZAKcQMcyAHrG/EM3UAL0/7oCoP1Xcwb9AgEycdpuOfifQ8CVUgXAoEQK2uG39neO7lXW/4IAAwDVACDxLwSeUgBPGwD6B4BIAOwXt7QqYoB/r977ViobJ17xXkgEne5dRFCItln9kxz+Izs+9ysA5p/+KSTAFoOpBUCcBESPA0D4v3Ej9w8ZANinLAtWCYDAzz9YGWgIJlcflgJeLxgsdU77HH6Jf9b96wUQ/ZcJ4CwQ7wRsEoAeZQLgvwTA73O3CMCm1s5RD8EIPrrYe3gh2DujLgA+J9C+3yz0Zlv+HH8CSHXQtIB4M/juo4dUzzMBJQBIC6BVtIRwjif64riEIBCsdiLg+6LODEz0aF/Tj7WPDv8e3/wX/jkD0L7tQDA4AeiB3gXZA9S/SyqbAajFnqhh0CfQzgmpgxNThmCcDLpAdKqnMvueflQ/F38Hjz81ygAUk6D2wOiCat9LAHL/TuDVbhUTpJ2P4/MDCQFjcPCaqB1/iOGP9E+M3hTV/q3+sdF+XQFcCfN6kLSAaAK6ChAGuX8I7gv/ZwZBwFbd/rVGAAZD/y8D7r6w38OFwNY/pP47AuAI0iTAOUDWga4X473wjQrAoI+0d3EwCHbecgSYEYzBuNTzAf2gY/BpH5e+9VJw65/V32m/bYKoAGkBoccsAfks2DcCdQCwq/AwgACzQASIgc4JqwhCXQ3F2yJ96BXuZeL30Yd9UVf+OxoAFwJ5ACIBL4R/rAQ8AFAEIAHgLR2S3vfHzqZABGRgEExptDkJ0rslfyT/0Zwhs88CoP9y/EeTCKCzB6ICQi/pm+G2BACAovX3/c4Gorocompw3poAApsVjYFBSBgoeod5uLfoq32v/RoA819eAoFz3UzpzUC9DJRFwJNqnTUwFj0AcgD1dzrju/xJXUGIyjl5V2MABg4BFBSDgaAWoUmId8Y195j49veWkzgDlv1fpGlX/yKF4BNBcTGAq4AnMgCPpiag9rH1X/cA/EoC4fwYDiIIKaMWxta2/14/GACCUQCHWiMq+6kg/obw0N41Mb6Ggx2ge/4f1RM3fc0CYAs8f0krgHqxnAUusAQq/3Rv32tXBl2N8YwyOYlSUAaA4BQcBMWfSUrm4X4H7s15HoBknzMA4x8MrAxsHTRKAvU7QbbBKgEO4NVIwGlYeT99pUFPOGyHoi2KX86TbJvDW6gFhwAKygEkku30o7FmHu6PbG9cW7PBl4d2BoB7VVn/Mf66Q6j/rgDYKogRiGkgawF4058K4PTpVACNLAZymP8ztZTP7samQRAOLlhW2+HcRn5qe2dmbc3th+Lyf9kAIdqPAOR1UAJw/1wE5BEggJgFISQgAHgABgOA2AzkqP0bvuG9nc1xWASIVkfN+9btNZfaX+uYANv6H/UDmz31BAz6qyBbICPgABgBUdh/9fSZM6cVQJcMQRRDq2zy2MUnxu9uTqyOHDmqOjI1NbS5vbOxNbO0tLaG3aXu6V8BVAEY5QogtpgCcOqqgBnOgXkE6N8yEAkwCPxWd5fMXetcdtZPDnGpFc2HmP92BqB/dcwm4C8+yqbAUQaAHaCIwFhFIEsAAnD6YQDS/NAMPHY5+fnYmaX3sZXu12xbSwS0+xX51w7QOf6Q9/7Bw99cDGz1CPxn82DfaiBmAahugh/IaXhwDBwDB9/+6RJ23+AaEUjuVeHfnVf5p//mCmAQ4AJAX5d/EWMAuAYo9Jh3QVXZBdEDAOAs/Wdf7tSzZ8BEwyaOP3zL0Z0A+s8SMNA/lwCcAXyvA8DxtwDwbVCpR58TAFwK9Z1AGYGzdG9nEf+Bq1gu6iv3zvF3BAwACbD7037rn1MACRQtwOy31wLZAes+2DQBSLqg+T8r9ulf86/usctWSQccUsNnjtG9RP8Y7ScItK8EOPzWAJJ9NsBR+rfUKwH3zjVw9akAdsBGz3ApxBqIAIDAaU2Al746H/5gePgDVw1hCf0uhh0vfGua/xrd19N/W//4LrT45x9BiUDEK+H2T8I/AYh/FkBbBDealYC6x24IIJh3Bm4dDMDBGTQQuHX5h6ax5/4h3Boe9pv+d84DYO3N/uSBs8545UXArABoXwLw5KOHOvVIXgNsAgHgrEi8GwMxHgoCpBBn9WxP3L4hYOPHN0AQgOks/V8pghj/azH8Nv7zVgFOADIAFM2XCwDOAN16LACwC8osQAAQnGMXJdfHSaBJgvrFA31XCdDvgDAAX4n929jUv98U7vLlFf82+LwkYBT+1X6a97KCkIMfEM8nQGwsgK424ASgvAaQAQUgXfCsRiAYwDn8Hz+OAximiQAHfIvUvj8WUuc4sLnM/W0WgN8STMcf0gTo+AcB2iaK0RD9138LOLANtF2APUC64FlxDgZmH7ax47BzLSkF2MfRaBoyBmF/TbL/3m3VtaQFIRD2kYBRBCAEAhECq4IMwDz2wv9BDYBtQAi4f9YAS4BtQCnoNGAR8BywKzAK0JId2vH4tVBjoOYh/7XoZRJQ97wlmBYAirr4MlAqAP9ILPZEoB7/J9kAugm8DACpBIiADLIeYC7NOxkcnwYGmCxugkEO04V93XX0Re6e/oXAyoLZRwSg5I8UfOCr3teO/2H6P0BPpwio+f6vv/pKiCEYzsQEZDJz8MqTGaf/TF/F8GsAVOV9oc9FA4BgrBJ983nr/zwvAvwvAkxAMRNk9mUHgW6pZ2NCtfbRAGGfHYD+IQUwLxVg5rDTcoWBX5Mtxp/+H6rHog1eIIHTTQaIQDPQyQD1EF7xorFvAHzscdB/DWAeAEZBwPtbGwX6Z/t3vcsV4H8jwC4A+0bg1wzA8Fmal/NxmQs7ExAg6D//Vvx708i+IIAMAX8fp0oAlAY4eaVvumf8PQD0/38IeBfQUxYBIggI0PFh+m01zYciBCenxbnsMK8A6J8JYASgPAE5DrpX87V95P9/6d/izp+1kRiI4l4vKOvFdvBVKY642ebKI7AEXLm0K5HmvkUI3PeHe9LM5K2klTnsmPz0x06KwHt6M1pIsd3TXysCMcEiAGZqANCDEogOW/z8PHuoH4bh7W2I8g15S7ae/8nkw4CPsxgQjjdLwJlDofyT6H+o6q8/D0xrAPz+WY1AbIMX9A/6CcnxR3wMyuswFQ/5StAPRL95AF1ngxlg7LX0Vb4ZYPf/NQ78kgjIZYgAvGMkjfAZg8CDug8DAj9ggw1T9HXgYgDW+DoKagCYWBCwJAS93Hn0qfzxSv1guQ4ZeDFgASPAEJTkwmWXGUkcCPKB7qMhAQhFAKgfU1C91B2X2EP5Wv79cnEd7acD75oBjMQE1sB/ZMAMqCbA4/iVUwTypQ+YB2gEMgC/qnZA9dTP9ndVGaANGNGCIgVVihgwBKUJwHtsdIAWiAMHyJeN0ifYr6byR3Bl/FkGvAmyDBwnPGfSGYecIawCy4CHAZ4OKAcxAaI+dKAUDvHYOQ6UzssP7JaL23CP9i8CZoBlYKTdkPL3WQXEmTng4xbVez96YAaEhYP8ozkQYepDmOSMlYU//pmVW9xOiypgBhILjvSAHTE3oWTI8TEE0I8ZGDFpAQi3GU2ow9r3PP6badZsBOIA9BtHsq9QGoBRWGA5MCwFYUghIAtiwrwRvPdOIn/TUMPNdfCShQBjzoNYCHlH0L3qgRf5r/pdsVaAKTmAOig0+Vgfc+oPo+A3bvGVdFv2gawOaEJZD7waZcMigwxM4NkRzQEM2mClcNKQJ4mPG+Rjp/yvxq1pgVC3YC/7bDVgowWYZoHXGfGAPmAG+OJUOeyTjpB6KOdrdUfIvwdN91hJAT3IfYDoI2MwfzlMrwa64DPGBFEr/YHSgfcbtL670bTbLAVhJNAEpqFoCLXeCNKCyCy4jA/q3eLONG6tJogBrISUoidgS/uCUvGAPmQ2YIRNpxjjw+dq1/Hs78vStf32iZUwfUC84MM+8YF1gZXfD9hYEIqv8rDpO3d/8WUWOviwfRITFH677ENigzBTEjqJxySrVd/vOtcsvpll41zXtW3b9zAE/FAgXGb+4CgWpGmQNfPYuFI2oAe73a7rnGu+RPc/7NDmX/6EDAkAAAAASUVORK5CYII=", this.supportedTransactionVersions = null, this._readyState = typeof window > "u" || typeof document > "u" ? Ie.Unsupported : Ie.NotDetected, this._disconnected = () => {
      const t = this._wallet;
      t && (t.off("disconnect", this._disconnected), this._wallet = null, this._publicKey = null, this.emit("error", new aa()), this.emit("disconnect"));
    }, this._connecting = !1, this._wallet = null, this._publicKey = null, this._network = e.network || null, this._readyState !== Ie.Unsupported) {
      const t = (r) => {
        typeof r.data == "object" && r.data.__glow_loaded && (this._readyState !== Ie.Installed && (this._readyState = Ie.Installed, this.emit("readyStateChange", this._readyState)), window.removeEventListener("message", t));
      };
      window.addEventListener("message", t), Xi(() => {
        var r;
        return (r = window.glowSolana) != null && r.isGlow ? (window.removeEventListener("message", t), this._readyState !== Ie.Installed && (this._readyState = Ie.Installed, this.emit("readyStateChange", this._readyState)), !0) : !1;
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
      if (this._readyState !== Ie.Installed)
        throw new ei();
      this._connecting = !0;
      const e = window.glowSolana;
      try {
        await e.connect();
      } catch (r) {
        throw new Dr(r == null ? void 0 : r.message, r);
      }
      if (!e.publicKey)
        throw new ca();
      let t;
      try {
        t = new le(e.publicKey.toBytes());
      } catch (r) {
        throw new zr(r == null ? void 0 : r.message, r);
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
        this.emit("error", new Fr(t == null ? void 0 : t.message, t));
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
        throw i instanceof Rt ? i : new cr(i == null ? void 0 : i.message, i);
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
        throw new Zi(r == null ? void 0 : r.message, r);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
}
const Kg = "Phantom";
class Vg extends Ji {
  constructor(e = {}) {
    super(), this.name = Kg, this.url = "https://phantom.app", this.icon = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjM0IiB3aWR0aD0iMzQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iLjUiIHgyPSIuNSIgeTE9IjAiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM1MzRiYjEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1NTFiZjkiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9Ii41IiB4Mj0iLjUiIHkxPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii44MiIvPjwvbGluZWFyR3JhZGllbnQ+PGNpcmNsZSBjeD0iMTciIGN5PSIxNyIgZmlsbD0idXJsKCNhKSIgcj0iMTciLz48cGF0aCBkPSJtMjkuMTcwMiAxNy4yMDcxaC0yLjk5NjljMC02LjEwNzQtNC45NjgzLTExLjA1ODE3LTExLjA5NzUtMTEuMDU4MTctNi4wNTMyNSAwLTEwLjk3NDYzIDQuODI5NTctMTEuMDk1MDggMTAuODMyMzctLjEyNDYxIDYuMjA1IDUuNzE3NTIgMTEuNTkzMiAxMS45NDUzOCAxMS41OTMyaC43ODM0YzUuNDkwNiAwIDEyLjg0OTctNC4yODI5IDEzLjk5OTUtOS41MDEzLjIxMjMtLjk2MTktLjU1MDItMS44NjYxLTEuNTM4OC0xLjg2NjF6bS0xOC41NDc5LjI3MjFjMCAuODE2Ny0uNjcwMzggMS40ODQ3LTEuNDkwMDEgMS40ODQ3LS44MTk2NCAwLTEuNDg5OTgtLjY2ODMtMS40ODk5OC0xLjQ4NDd2LTIuNDAxOWMwLS44MTY3LjY3MDM0LTEuNDg0NyAxLjQ4OTk4LTEuNDg0Ny44MTk2MyAwIDEuNDkwMDEuNjY4IDEuNDkwMDEgMS40ODQ3em01LjE3MzggMGMwIC44MTY3LS42NzAzIDEuNDg0Ny0xLjQ4OTkgMS40ODQ3LS44MTk3IDAtMS40OS0uNjY4My0xLjQ5LTEuNDg0N3YtMi40MDE5YzAtLjgxNjcuNjcwNi0xLjQ4NDcgMS40OS0xLjQ4NDcuODE5NiAwIDEuNDg5OS42NjggMS40ODk5IDEuNDg0N3oiIGZpbGw9InVybCgjYikiLz48L3N2Zz4K", this.supportedTransactionVersions = null, this._readyState = typeof window > "u" || typeof document > "u" ? Ie.Unsupported : Ie.NotDetected, this._disconnected = () => {
      const t = this._wallet;
      t && (t.off("disconnect", this._disconnected), t.off("accountChanged", this._accountChanged), this._wallet = null, this._publicKey = null, this.emit("error", new aa()), this.emit("disconnect"));
    }, this._accountChanged = (t) => {
      const r = this._publicKey;
      if (!!r) {
        try {
          t = new le(t.toBytes());
        } catch (o) {
          this.emit("error", new zr(o == null ? void 0 : o.message, o));
          return;
        }
        r.equals(t) || (this._publicKey = t, this.emit("connect", t));
      }
    }, this._connecting = !1, this._wallet = null, this._publicKey = null, this._readyState !== Ie.Unsupported && Xi(() => {
      var t, r, o;
      return ((r = (t = window.phantom) == null ? void 0 : t.solana) == null ? void 0 : r.isPhantom) || ((o = window.solana) == null ? void 0 : o.isPhantom) ? (this._readyState = Ie.Installed, this.emit("readyStateChange", this._readyState), !0) : !1;
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
      if (this._readyState !== Ie.Installed)
        throw new ei();
      this._connecting = !0;
      const t = ((e = window.phantom) == null ? void 0 : e.solana) || window.solana;
      if (!t.isConnected)
        try {
          await t.connect();
        } catch (o) {
          throw new Dr(o == null ? void 0 : o.message, o);
        }
      if (!t.publicKey)
        throw new ca();
      let r;
      try {
        r = new le(t.publicKey.toBytes());
      } catch (o) {
        throw new zr(o == null ? void 0 : o.message, o);
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
        this.emit("error", new Fr(t == null ? void 0 : t.message, t));
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
        throw i instanceof Rt ? i : new cr(i == null ? void 0 : i.message, i);
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
        throw new Zi(r == null ? void 0 : r.message, r);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
}
var fi = Lr.exports.Buffer;
function Zg(n) {
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
  function v(S) {
    if ((Array.isArray(S) || S instanceof Uint8Array) && (S = fi.from(S)), !fi.isBuffer(S))
      throw new TypeError("Expected Buffer");
    if (S.length === 0)
      return "";
    for (var R = 0, T = 0, L = 0, P = S.length; L !== P && S[L] === 0; )
      L++, R++;
    for (var z = (P - L) * w + 1 >>> 0, U = new Uint8Array(z); L !== P; ) {
      for (var F = S[L], k = 0, W = z - 1; (F !== 0 || k < T) && W !== -1; W--, k++)
        F += 256 * U[W] >>> 0, U[W] = F % c >>> 0, F = F / c >>> 0;
      if (F !== 0)
        throw new Error("Non-zero carry");
      T = k, L++;
    }
    for (var Q = z - T; Q !== z && U[Q] === 0; )
      Q++;
    for (var j = u.repeat(R); Q < z; ++Q)
      j += n.charAt(U[Q]);
    return j;
  }
  function E(S) {
    if (typeof S != "string")
      throw new TypeError("Expected String");
    if (S.length === 0)
      return fi.alloc(0);
    for (var R = 0, T = 0, L = 0; S[R] === u; )
      T++, R++;
    for (var P = (S.length - R) * d + 1 >>> 0, z = new Uint8Array(P); S[R]; ) {
      var U = e[S.charCodeAt(R)];
      if (U === 255)
        return;
      for (var F = 0, k = P - 1; (U !== 0 || F < L) && k !== -1; k--, F++)
        U += c * z[k] >>> 0, z[k] = U % 256 >>> 0, U = U / 256 >>> 0;
      if (U !== 0)
        throw new Error("Non-zero carry");
      L = F, R++;
    }
    for (var W = P - L; W !== P && z[W] === 0; )
      W++;
    var Q = fi.allocUnsafe(T + (P - W));
    Q.fill(0, 0, T);
    for (var j = T; W !== P; )
      Q[j++] = z[W++];
    return Q;
  }
  function _(S) {
    var R = E(S);
    if (R)
      return R;
    throw new Error("Non-base" + c + " character");
  }
  return {
    encode: v,
    decodeUnsafe: E,
    decode: _
  };
}
var Xg = Zg, Jg = Xg, $g = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", _r = Jg($g);
const ey = "Slope";
class ty extends Ji {
  constructor(e = {}) {
    super(), this.name = ey, this.url = "https://slope.finance", this.icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iNjQiIGZpbGw9IiM2RTY2RkEiLz4KPHBhdGggZD0iTTI3Ljk0NzUgNTIuMTU5Nkw1MS45ODI2IDI4LjA1NzJMNzIuNjA5OCA3LjY1Mzg5QzczLjg3MzQgNi40MDQwMSA3Ni4wMTc4IDcuMjk5MSA3Ni4wMTc4IDkuMDc2NDJMNzYuMDE4NyA1Mi4xNTlMNTEuOTgzNiA3Ni4xMjY4TDI3Ljk0NzUgNTIuMTU5NloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8zNzk1XzI1NTQzKSIvPgo8cGF0aCBkPSJNMTAwLjA1MyA3NS45OTNMNzYuMDE4IDUxLjk1OEw1MS45ODI5IDc1Ljk5MzFMNTEuOTgyOSAxMTguOTI0QzUxLjk4MjkgMTIwLjcwMyA1NC4xMzEyIDEyMS41OTcgNTUuMzkzNyAxMjAuMzQzTDEwMC4wNTMgNzUuOTkzWiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzM3OTVfMjU1NDMpIi8+CjxwYXRoIGQ9Ik0yNy45NDcgNTIuMTYwMUg0NC42ODM5QzQ4LjcxNDcgNTIuMTYwMSA1MS45ODIyIDU1LjQyNzYgNTEuOTgyMiA1OS40NTgzVjc2LjEyNjlIMzUuMjQ1M0MzMS4yMTQ2IDc2LjEyNjkgMjcuOTQ3IDcyLjg1OTQgMjcuOTQ3IDY4LjgyODdWNTIuMTYwMVoiIGZpbGw9IiNGMUYwRkYiLz4KPHBhdGggZD0iTTc2LjAxNzggNTIuMTYwMUg5Mi43NTQ3Qzk2Ljc4NTUgNTIuMTYwMSAxMDAuMDUzIDU1LjQyNzYgMTAwLjA1MyA1OS40NTgzVjc2LjEyNjlIODMuMzE2MUM3OS4yODU0IDc2LjEyNjkgNzYuMDE3OCA3Mi44NTk0IDc2LjAxNzggNjguODI4N1Y1Mi4xNjAxWiIgZmlsbD0iI0YxRjBGRiIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzM3OTVfMjU1NDMiIHgxPSI1MS45ODMxIiB5MT0iNy4wNzE1NSIgeDI9IjUxLjk4MzEiIHkyPSI3Ni4xMjY4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNBOEFERkYiLz4KPHN0b3Agb2Zmc2V0PSIwLjY0ODU1NiIgc3RvcC1jb2xvcj0id2hpdGUiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzM3OTVfMjU1NDMiIHgxPSI3Ni4wMTgiIHkxPSI1MS45NTgiIHgyPSI3Ni4wMTgiIHkyPSIxMjAuOTI4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4yNjA3ODQiIHN0b3AtY29sb3I9IiNCNkJBRkYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRTRFMkZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==", this.supportedTransactionVersions = null, this._readyState = typeof window > "u" || typeof document > "u" ? Ie.Unsupported : Ie.NotDetected, this._connecting = !1, this._wallet = null, this._publicKey = null, this._readyState !== Ie.Unsupported && Xi(() => typeof window.Slope == "function" || window.slopeApp ? (this._readyState = Ie.Installed, this.emit("readyStateChange", this._readyState), !0) : !1);
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
      if (this._readyState !== Ie.Installed || typeof window.Slope != "function")
        throw new ei();
      this._connecting = !0;
      const e = new window.Slope();
      let t;
      try {
        ({ data: t } = await e.connect());
      } catch (o) {
        throw new Dr(o == null ? void 0 : o.message, o);
      }
      if (!t.publicKey)
        throw new ca();
      let r;
      try {
        r = new le(t.publicKey);
      } catch (o) {
        throw new zr(o == null ? void 0 : o.message, o);
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
          throw new Fr(r == null ? void 0 : r.message, r);
        }
        if (t !== "ok")
          throw new Fr(t);
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
        const r = _r.encode(e.serializeMessage()), { msg: o, data: i } = await t.signTransaction(r);
        if (!i.publicKey || !i.signature)
          throw new Ht(o);
        const c = new le(i.publicKey), u = _r.decode(i.signature);
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
        const o = e.map((w) => _r.encode(w.serializeMessage())), { msg: i, data: c } = await r.signAllTransactions(o), u = e.length;
        if (!c.publicKey || ((t = c.signatures) == null ? void 0 : t.length) !== u)
          throw new Ht(i);
        const d = new le(c.publicKey);
        for (let w = 0; w < u; w++)
          e[w].addSignature(d, _r.decode(c.signatures[w]));
        return e;
      } catch (o) {
        throw o instanceof Rt ? o : new Ht(o == null ? void 0 : o.message, o);
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
        return _r.decode(r.data.signature);
      } catch (r) {
        throw new Zi(r == null ? void 0 : r.message, r);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
}
const ny = "Solflare";
class ry extends Ji {
  constructor(e = {}) {
    super(), this.name = ny, this.url = "https://solflare.com", this.icon = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmMxMGIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYjNmMmUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI2LjQ3ODM1IiB4Mj0iMzQuOTEwNyIgeGxpbms6aHJlZj0iI2EiIHkxPSI3LjkyIiB5Mj0iMzMuNjU5MyIvPjxyYWRpYWxHcmFkaWVudCBpZD0iYyIgY3g9IjAiIGN5PSIwIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDQuOTkyMTg4MzIgMTIuMDYzODc5NjMgLTEyLjE4MTEzNjU1IDUuMDQwNzEwNzQgMjIuNTIwMiAyMC42MTgzKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHI9IjEiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggZD0ibTI1LjE3MDggNDcuOTEwNGMuNTI1IDAgLjk1MDcuNDIxLjk1MDcuOTQwM3MtLjQyNTcuOTQwMi0uOTUwNy45NDAyLS45NTA3LS40MjA5LS45NTA3LS45NDAyLjQyNTctLjk0MDMuOTUwNy0uOTQwM3ptLTEuMDMyOC00NC45MTU2NWMuNDY0Ni4wMzgzNi44Mzk4LjM5MDQuOTAyNy44NDY4MWwxLjEzMDcgOC4yMTU3NGMuMzc5OCAyLjcxNDMgMy42NTM1IDMuODkwNCA1LjY3NDMgMi4wNDU5bDExLjMyOTEtMTAuMzExNThjLjI3MzMtLjI0ODczLjY5ODktLjIzMTQ5Ljk1MDcuMDM4NTEuMjMwOS4yNDc3Mi4yMzc5LjYyNjk3LjAxNjEuODgyNzdsLTkuODc5MSAxMS4zOTU4Yy0xLjgxODcgMi4wOTQyLS40NzY4IDUuMzY0MyAyLjI5NTYgNS41OTc4bDguNzE2OC44NDAzYy40MzQxLjA0MTguNzUxNy40MjM0LjcwOTMuODUyNC0uMDM0OS4zNTM3LS4zMDc0LjYzOTUtLjY2MjguNjk0OWwtOS4xNTk0IDEuNDMwMmMtMi42NTkzLjM2MjUtMy44NjM2IDMuNTExNy0yLjEzMzkgNS41NTc2bDMuMjIgMy43OTYxYy4yNTk0LjMwNTguMjE4OC43NjE1LS4wOTA4IDEuMDE3OC0uMjYyMi4yMTcyLS42NDE5LjIyNTYtLjkxMzguMDIwM2wtMy45Njk0LTIuOTk3OGMtMi4xNDIxLTEuNjEwOS01LjIyOTctLjI0MTctNS40NTYxIDIuNDI0M2wtLjg3NDcgMTAuMzk3NmMtLjAzNjIuNDI5NS0uNDE3OC43NDg3LS44NTI1LjcxMy0uMzY5LS4wMzAzLS42NjcxLS4zMDk3LS43MTcxLS42NzIxbC0xLjM4NzEtMTAuMDQzN2MtLjM3MTctMi43MTQ0LTMuNjQ1NC0zLjg5MDQtNS42NzQzLTIuMDQ1OWwtMTIuMDUxOTUgMTAuOTc0Yy0uMjQ5NDcuMjI3MS0uNjM4MDkuMjExNC0uODY4LS4wMzUtLjIxMDk0LS4yMjYyLS4yMTczNS0uNTcyNC0uMDE0OTMtLjgwNmwxMC41MTgxOC0xMi4xMzg1YzEuODE4Ny0yLjA5NDIuNDg0OS01LjM2NDQtMi4yODc2LTUuNTk3OGwtOC43MTg3Mi0uODQwNWMtLjQzNDEzLS4wNDE4LS43NTE3Mi0uNDIzNS0uNzA5MzYtLjg1MjQuMDM0OTMtLjM1MzcuMzA3MzktLjYzOTQuNjYyNy0uNjk1bDkuMTUzMzgtMS40Mjk5YzIuNjU5NC0uMzYyNSAzLjg3MTgtMy41MTE3IDIuMTQyMS01LjU1NzZsLTIuMTkyLTIuNTg0MWMtLjMyMTctLjM3OTItLjI3MTMtLjk0NDMuMTEyNi0xLjI2MjEuMzI1My0uMjY5NC43OTYzLS4yNzk3IDEuMTMzNC0uMDI0OWwyLjY5MTggMi4wMzQ3YzIuMTQyMSAxLjYxMDkgNS4yMjk3LjI0MTcgNS40NTYxLTIuNDI0M2wuNzI0MS04LjU1OTk4Yy4wNDU3LS41NDA4LjUyNjUtLjk0MjU3IDEuMDczOS0uODk3Mzd6bS0yMy4xODczMyAyMC40Mzk2NWMuNTI1MDQgMCAuOTUwNjcuNDIxLjk1MDY3Ljk0MDNzLS40MjU2My45NDAzLS45NTA2Ny45NDAzYy0uNTI1MDQxIDAtLjk1MDY3LS40MjEtLjk1MDY3LS45NDAzcy40MjU2MjktLjk0MDMuOTUwNjctLjk0MDN6bTQ3LjY3OTczLS45NTQ3Yy41MjUgMCAuOTUwNy40MjEuOTUwNy45NDAzcy0uNDI1Ny45NDAyLS45NTA3Ljk0MDItLjk1MDctLjQyMDktLjk1MDctLjk0MDIuNDI1Ny0uOTQwMy45NTA3LS45NDAzem0tMjQuNjI5Ni0yMi40Nzk3Yy41MjUgMCAuOTUwNi40MjA5NzMuOTUwNi45NDAyNyAwIC41MTkzLS40MjU2Ljk0MDI3LS45NTA2Ljk0MDI3LS41MjUxIDAtLjk1MDctLjQyMDk3LS45NTA3LS45NDAyNyAwLS41MTkyOTcuNDI1Ni0uOTQwMjcuOTUwNy0uOTQwMjd6IiBmaWxsPSJ1cmwoI2IpIi8+PHBhdGggZD0ibTI0LjU3MSAzMi43NzkyYzQuOTU5NiAwIDguOTgwMi0zLjk3NjUgOC45ODAyLTguODgxOSAwLTQuOTA1My00LjAyMDYtOC44ODE5LTguOTgwMi04Ljg4MTlzLTguOTgwMiAzLjk3NjYtOC45ODAyIDguODgxOWMwIDQuOTA1NCA0LjAyMDYgOC44ODE5IDguOTgwMiA4Ljg4MTl6IiBmaWxsPSJ1cmwoI2MpIi8+PC9zdmc+", this.supportedTransactionVersions = /* @__PURE__ */ new Set(["legacy", 0]), this._readyState = typeof window > "u" || typeof document > "u" ? Ie.Unsupported : Ie.Loadable, this._disconnected = () => {
      const t = this._wallet;
      t && (t.off("disconnect", this._disconnected), this._wallet = null, this._publicKey = null, this.emit("error", new aa()), this.emit("disconnect"));
    }, this._connecting = !1, this._publicKey = null, this._wallet = null, this._config = e, this._readyState !== Ie.Unsupported && Xi(() => {
      var t;
      return ((t = window.solflare) == null ? void 0 : t.isSolflare) || window.SolflareApp ? (this._readyState = Ie.Installed, this.emit("readyStateChange", this._readyState), !0) : !1;
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
      if (this._readyState !== Ie.Loadable && this._readyState !== Ie.Installed)
        throw new ei();
      let e;
      try {
        e = (await import("./index.435b350a.js")).default;
      } catch (o) {
        throw new pp(o == null ? void 0 : o.message, o);
      }
      let t;
      try {
        t = new e({ network: this._config.network });
      } catch (o) {
        throw new gp(o == null ? void 0 : o.message, o);
      }
      if (this._connecting = !0, !t.connected)
        try {
          await t.connect();
        } catch (o) {
          throw new Dr(o == null ? void 0 : o.message, o);
        }
      if (!t.publicKey)
        throw new Dr();
      let r;
      try {
        r = new le(t.publicKey.toBytes());
      } catch (o) {
        throw new zr(o == null ? void 0 : o.message, o);
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
        this.emit("error", new Fr(t == null ? void 0 : t.message, t));
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
        throw new Zi(r == null ? void 0 : r.message, r);
      }
    } catch (t) {
      throw this.emit("error", t), t;
    }
  }
}
function iy({ children: n }) {
  const e = As.Mainnet, t = on(() => fp(e), [e]), r = on(
    () => [
      new Vg(),
      new Yg(),
      new ty(),
      new ry({ network: e })
    ],
    [e]
  );
  return /* @__PURE__ */ D.createElement(dp, {
    endpoint: t
  }, /* @__PURE__ */ D.createElement(Ap, {
    wallets: r,
    autoConnect: !0
  }, /* @__PURE__ */ D.createElement(Ip, null, n)));
}
function Oc(n) {
  return `${n.slice(0, 4)}...${n.slice(-4)}`;
}
const oy = {
  ethereum: "ETH",
  solana: "SOL",
  polygon: "MATIC",
  avalanche: "AVAX",
  flow: "FLOW"
};
function sy({
  projectData: n,
  appId: e,
  hasUser: t
}) {
  var F;
  const [r, o] = Qe(!1), [i, c] = Qe(!1), [u, d] = Qe(""), { setVisible: w } = Vu(), { connected: v, publicKey: E, signMessage: _, disconnect: S } = qu(), R = yn(!1), T = yn(!1), L = on(() => {
    var Q;
    if (!(n != null && n.wallet))
      return [];
    const { wallet: k } = n;
    d(
      (Q = n.userInfo) != null && Q.walletAddress ? Oc(n.userInfo.walletAddress) : ""
    );
    const W = [];
    if (k != null && k.isBalanceRequired) {
      const j = /* @__PURE__ */ D.createElement(D.Fragment, null, "Have at least", /* @__PURE__ */ D.createElement("strong", null, " " + k.balance + " " + oy[n.chain] + " "), "in your wallet");
      W.push(j);
    }
    if (k != null && k.isNftRequired) {
      const { nftCollection: j } = k, pe = /* @__PURE__ */ D.createElement(D.Fragment, null, "Hold an NFT from", " ", /* @__PURE__ */ D.createElement("strong", null, /* @__PURE__ */ D.createElement("a", {
        href: j == null ? void 0 : j.url,
        target: "_blank",
        rel: "noreferrer"
      }, j == null ? void 0 : j.name)));
      W.push(pe);
    }
    return W;
  }, [n]);
  Pt(() => {
    async function k() {
      var W;
      if (!(!T.current || ((W = n == null ? void 0 : n.userInfo) == null ? void 0 : W.walletAddress) || !v || !E || !_ || R.current))
        try {
          R.current = !0, o(!0);
          const Q = E.toBase58(), { nonce: j } = await pl({ appId: e, address: Q }), pe = new TextEncoder().encode(j), Me = kp.encode(await _(pe));
          await gl({
            address: Q,
            signature: Me,
            appId: e
          }), d(Oc(E.toString()));
        } catch (Q) {
          S(), Q.message !== "User rejected the request." && Q.name !== Et.name && console.error("error", Q);
        } finally {
          o(!1), R.current = !1, T.current = !1;
        }
    }
    k();
  }, [
    e,
    n,
    o,
    v,
    E,
    _,
    S
  ]);
  const P = () => {
    u || (w(!0), T.current = !0);
  }, z = () => {
    const k = Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1, Q = new URLSearchParams(window.location.search).get("phantomApp");
    if (k && !Q)
      return c(!0);
    P();
  }, U = async () => {
    try {
      const k = new URLSearchParams();
      k.append("phantomApp", "1"), k.append("ref", "hypeday");
      const W = "https://phantom.app/ul/browse/" + encodeURIComponent(window.location.href + "?" + k.toString());
      window.open(W, "_blank");
    } catch (k) {
      console.error(k);
    }
  };
  return ((F = n == null ? void 0 : n.wallet) == null ? void 0 : F.required) === !1 ? null : /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement(qg, {
    appElement: document.body,
    isOpen: i,
    onRequestClose: () => c(!1),
    contentLabel: "Open in Phantom Mobile App Modal",
    overlayClassName: "hypeday-modal-overlay",
    className: "hypeday-modal-content"
  }, /* @__PURE__ */ D.createElement("h3", {
    className: "hypeday-h3"
  }, "Open in Phantom Mobile App?"), /* @__PURE__ */ D.createElement("div", {
    className: "hypeday-modal-close",
    onClick: () => c(!1)
  }, "\xD7"), /* @__PURE__ */ D.createElement("button", {
    className: "hypeday-button hypeday-modal-button",
    onClick: U
  }, "Yes"), /* @__PURE__ */ D.createElement("button", {
    className: "hypeday-button hypeday-modal-button",
    onClick: () => {
      c(!1), P();
    }
  }, "Other ways to connect")), /* @__PURE__ */ D.createElement(_s, {
    title: "Wallet",
    onClick: z,
    info: L,
    isLoading: r,
    rightText: u,
    buttonDisabled: !t
  }));
}
function ay({
  projectData: n,
  appId: e,
  hasUser: t
}) {
  return /* @__PURE__ */ D.createElement(iy, null, /* @__PURE__ */ D.createElement(sy, {
    projectData: n,
    appId: e,
    hasUser: t
  }));
}
function cy({
  projectData: n,
  appId: e,
  hasUser: t,
  inputRef: r
}) {
  var _, S, R, T, L, P, z, U, F;
  const [o, i] = Qe(!1), [c, u] = Qe(""), [d, w] = Qe(!1);
  Pt(() => {
    var k;
    w(!!((k = n == null ? void 0 : n.userInfo) != null && k.registered));
  }, [n]);
  const v = async () => {
    var k;
    if (!(!e || !t || !(n != null && n.id) || d))
      try {
        u(""), i(!0);
        const { error: W } = await yl({
          appId: e,
          projectId: n.id,
          customField: ((k = r == null ? void 0 : r.current) == null ? void 0 : k.value) || ""
        });
        if (W)
          return console.error("Register error", W), u(W.message);
        w(!0);
      } catch (W) {
        console.error(W);
      } finally {
        i(!1);
      }
  }, E = o || !t || ((_ = n == null ? void 0 : n.discord) == null ? void 0 : _.enabled) && !((R = (S = n == null ? void 0 : n.userInfo) == null ? void 0 : S.discord) != null && R.username) || ((T = n == null ? void 0 : n.discord2) == null ? void 0 : T.enabled) && !((P = (L = n == null ? void 0 : n.userInfo) == null ? void 0 : L.discord) != null && P.username) || ((z = n == null ? void 0 : n.twitter) == null ? void 0 : z.enabled) && !((F = (U = n == null ? void 0 : n.userInfo) == null ? void 0 : U.twitter) != null && F.username);
  return /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("button", {
    className: "hypeday-register-button",
    onClick: v,
    disabled: E
  }, o && /* @__PURE__ */ D.createElement("div", {
    className: "hypeday-spinner hypeday-btn-spinner"
  }), /* @__PURE__ */ D.createElement("span", {
    style: { visibility: o ? "hidden" : "initial" }
  }, d ? "Registered! \u{1F389}" : "Register")), !!c && /* @__PURE__ */ D.createElement("span", {
    className: "hypeday-register-error"
  }, c));
}
function dy({
  appId: n,
  projectId: e,
  userToken: t,
  testing: r = !1
}) {
  const [o, i] = Qe(), [c, u] = Qe(!0), [d, w] = Qe(""), v = yn(null), E = $t(async () => {
    if (!e || !n) {
      console.error("HypeDayReact: projectId and appId props are required.");
      return;
    }
    u(!0), w(""), dl({ appId: n, projectId: e }).then((_) => i(_)).catch((_) => {
      console.error("HypeDayReact: Error fetching project data", _), w(
        _.message || "Something went wrong. Please check your connection."
      );
    }).finally(() => u(!1));
  }, [n, e]);
  return Pt(() => {
    hl(t);
  }, [t]), Pt(() => {
    fl(r);
  }, [r]), Pt(() => {
    E();
  }, [E]), c ? /* @__PURE__ */ D.createElement("div", {
    className: "hypeday-wrapper",
    style: { display: "flex", justifyContent: "center" }
  }, /* @__PURE__ */ D.createElement("div", {
    className: "hypeday-spinner"
  })) : d ? /* @__PURE__ */ D.createElement("div", {
    className: "hypeday-wrapper"
  }, /* @__PURE__ */ D.createElement("span", {
    className: "hypeday-error"
  }, d), /* @__PURE__ */ D.createElement("button", {
    className: "hypeday-button",
    onClick: E
  }, "Retry")) : /* @__PURE__ */ D.createElement("div", {
    className: "hypeday-wrapper"
  }, /* @__PURE__ */ D.createElement(bl, {
    projectData: o
  }), /* @__PURE__ */ D.createElement(ay, {
    projectData: o,
    appId: n,
    hasUser: !!t
  }), /* @__PURE__ */ D.createElement(Al, {
    projectData: o,
    appId: n,
    hasUser: !!t
  }), /* @__PURE__ */ D.createElement(wl, {
    projectData: o,
    appId: n,
    hasUser: !!t
  }), /* @__PURE__ */ D.createElement(ml, {
    projectData: o,
    ref: v
  }), /* @__PURE__ */ D.createElement(cy, {
    projectData: o,
    appId: n,
    hasUser: !!t,
    inputRef: v
  }), /* @__PURE__ */ D.createElement("div", {
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
    style: { textDecoration: "none" }
  }, "Hype.Day"))));
}
export {
  Eh as E,
  dy as H,
  le as P,
  Lr as s,
  Zh as v
};
