import O, { useState as Ft, useMemo as Xe, useEffect as Ne, createContext as Fs, useContext as _a, useRef as fr, useCallback as Ye, useLayoutEffect as qn } from "react";
import { createPortal as Wc } from "react-dom";
const Kc = "https://api.hype.day", qc = "https://apitest.hype.day";
let tn = "https://api.hype.day";
const Ur = new Headers({
  "Content-Type": "application/json"
});
function Yc(r) {
  tn = r ? qc : Kc;
}
function jc(r) {
  r ? Ur.set("Authorization", `Bearer ${r}`) : Ur.delete("Authorization");
}
function xn(r) {
  return r.text().then((t) => {
    if (t === "OK")
      return t;
    const e = t && JSON.parse(t);
    if (!r.ok) {
      const n = e && e.message || r.statusText;
      return Promise.reject(n);
    }
    return e;
  });
}
function Vc({
  appId: r,
  projectId: t
}) {
  const e = {
    method: "GET",
    headers: Ur
  };
  return fetch(
    `${tn}/getProject?` + new URLSearchParams({
      appid: r,
      projectid: t
    }),
    e
  ).then(xn);
}
function Zc(r) {
  const t = "solana", e = {
    method: "POST",
    headers: Ur,
    body: JSON.stringify({ chain: t, ...r })
  };
  return fetch(`${tn}/addWallet`, e).then(xn);
}
function Xc(r) {
  const t = "solana", e = {
    method: "POST",
    headers: Ur,
    body: JSON.stringify({ chain: t, ...r })
  };
  return fetch(`${tn}/verifyWallet`, e).then(xn);
}
function ka({
  provider: r,
  appId: t,
  projectId: e,
  returnUrl: n
}) {
  const s = {
    method: "POST",
    headers: Ur,
    body: JSON.stringify({
      appId: t,
      projectId: e,
      returnUrl: n
    })
  };
  return fetch(
    `${tn}/${r === "twitter" ? "t" : "d"}GetUrlForApp`,
    s
  ).then(xn);
}
function Jc({
  appId: r,
  projectId: t,
  customField: e
}) {
  const n = {
    method: "POST",
    headers: Ur,
    body: JSON.stringify({
      appId: r,
      projectId: t,
      customField: e
    })
  };
  return fetch(`${tn}/validateForAppProject`, n).then(
    xn
  );
}
function Ds({
  title: r,
  rightText: t,
  buttonDisabled: e = !1,
  onClick: n,
  info: s,
  isLoading: i = !1,
  showButton: c = !0
}) {
  return /* @__PURE__ */ O.createElement("section", {
    className: "hypeday-section"
  }, /* @__PURE__ */ O.createElement("header", {
    className: "hypeday-section-header"
  }, /* @__PURE__ */ O.createElement("h3", {
    className: "hypeday-h3"
  }, r), c && /* @__PURE__ */ O.createElement("button", {
    className: "hypeday-button",
    onClick: n,
    disabled: i || e,
    title: e ? "Please login first" : void 0
  }, i && /* @__PURE__ */ O.createElement("div", {
    className: "hypeday-spinner hypeday-btn-spinner"
  }), /* @__PURE__ */ O.createElement("span", {
    style: { visibility: i ? "hidden" : "initial" }
  }, t || "Connect"))), s.map((u, p) => /* @__PURE__ */ O.createElement("span", {
    key: p,
    className: "hypeday-info"
  }, u)));
}
function $c({
  projectData: r,
  appId: t,
  hasUser: e
}) {
  var u, p, m, A;
  const [n, s] = Ft(!1), i = Xe(() => {
    var k, R;
    if (!((k = r == null ? void 0 : r.discord) != null && k.enabled) && !((R = r == null ? void 0 : r.discord2) != null && R.enabled))
      return [];
    const { discord: S, discord2: T } = r, I = [];
    S != null && S.enabled && I.push(S), T != null && T.enabled && I.push(T);
    const C = [];
    return I.forEach((U) => {
      var D;
      if (U.isServerRequired) {
        const L = /* @__PURE__ */ O.createElement(O.Fragment, null, "Join the", " ", /* @__PURE__ */ O.createElement("a", {
          href: U == null ? void 0 : U.serverLink,
          target: "_blank",
          rel: "noreferrer"
        }, /* @__PURE__ */ O.createElement("strong", null, U == null ? void 0 : U.serverDisplayName)), " ", "server on Discord", U.isShouldJoinBeforeRequired ? /* @__PURE__ */ O.createElement(O.Fragment, null, " ", "before", " ", /* @__PURE__ */ O.createElement("strong", null, new Date((U == null ? void 0 : U.shouldJoinBefore) || "").toLocaleString())) : null);
        C.push(L);
      }
      if (U.isRoleRequired) {
        const L = /* @__PURE__ */ O.createElement(O.Fragment, null, 'and have the "', (D = U == null ? void 0 : U.roleDisplayNames) == null ? void 0 : D.join(", "), '" role(s)');
        C.push(L);
      }
    }), C;
  }, [r]), c = async () => {
    if (!(!t || !e || !(r != null && r.id)))
      try {
        s(!0);
        const { url: S } = await ka({
          provider: "discord",
          appId: t,
          projectId: r.id,
          returnUrl: window.location.href
        });
        window.location.assign(S);
      } catch (S) {
        console.error(S);
      } finally {
        s(!1);
      }
  };
  return !((u = r == null ? void 0 : r.discord) != null && u.enabled) && !((p = r == null ? void 0 : r.discord2) != null && p.enabled) ? null : /* @__PURE__ */ O.createElement(Ds, {
    title: "Discord",
    onClick: c,
    info: i,
    rightText: (A = (m = r == null ? void 0 : r.userInfo) == null ? void 0 : m.discord) == null ? void 0 : A.username,
    buttonDisabled: !e,
    isLoading: n
  });
}
const tu = O.forwardRef(function({
  projectData: t
}, e) {
  var s;
  if (!((s = t == null ? void 0 : t.customfield) != null && s.enabled))
    return null;
  const { customfield: n } = t;
  return /* @__PURE__ */ O.createElement("section", {
    className: "hypeday-section"
  }, /* @__PURE__ */ O.createElement("header", {
    className: "hypeday-section-header"
  }, /* @__PURE__ */ O.createElement("h3", {
    className: "hypeday-h3"
  }, "Open Response")), /* @__PURE__ */ O.createElement("span", {
    className: "hypeday-info"
  }, n.labels[0]), /* @__PURE__ */ O.createElement("input", {
    className: "hypeday-input",
    type: "text",
    placeholder: n.labels[0],
    ref: e
  }));
});
function ko({
  dateString: r,
  message: t
}) {
  const [e, n] = Ft(!1), [s, i] = Ft(0), [c, u] = Ft(0), [p, m] = Ft(0), [A, S] = Ft(0);
  return Ne(() => {
    const T = new Date(r).getTime(), I = setInterval(() => {
      const C = new Date().getTime(), k = T - C, R = Math.floor(k / (1e3 * 60 * 60 * 24)), U = Math.floor(
        k % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)
      ), D = Math.floor(k % (1e3 * 60 * 60) / (1e3 * 60)), L = Math.floor(k % (1e3 * 60) / 1e3);
      if (k <= 0) {
        clearInterval(I), n(!0), i(0), u(0), m(0), S(0);
        return;
      }
      i(R), u(U), m(D), S(L);
    }, 1e3);
    return () => clearInterval(I);
  }, [r]), !e && !s && !c && !p && !A ? /* @__PURE__ */ O.createElement("span", {
    style: { visibility: "hidden" }
  }, "Calculating..") : e ? /* @__PURE__ */ O.createElement(O.Fragment, null, t) : /* @__PURE__ */ O.createElement(O.Fragment, null, s > 0 && `${s} days, `, c > 0 && `${c} hours, `, p > 0 && `${p} minutes, `, A > 0 && `${A} seconds`);
}
function Qi({
  children: r,
  title: t
}) {
  return /* @__PURE__ */ O.createElement("section", {
    className: "hypeday-section"
  }, /* @__PURE__ */ O.createElement("header", {
    className: "hypeday-section-header"
  }, /* @__PURE__ */ O.createElement("h3", {
    className: "hypeday-h3"
  }, t)), /* @__PURE__ */ O.createElement("span", {
    className: "hypeday-info"
  }, r));
}
function eu({
  projectData: r
}) {
  var s, i, c, u, p, m, A, S, T, I, C, k;
  const [t, e] = Ft(), n = ((s = r == null ? void 0 : r.signupAccess) == null ? void 0 : s.isEndDateRequired) && ((i = r == null ? void 0 : r.signupAccess) == null ? void 0 : i.endDate) && new Date((c = r == null ? void 0 : r.signupAccess) == null ? void 0 : c.endDate).getTime() < Date.now();
  return Ne(() => {
    var R, U, D, L;
    (R = r == null ? void 0 : r.signupAccess) != null && R.isStartDateRequired && e(
      !!(((U = r == null ? void 0 : r.signupAccess) == null ? void 0 : U.isStartDateRequired) && ((D = r == null ? void 0 : r.signupAccess) == null ? void 0 : D.startDate) && new Date((L = r == null ? void 0 : r.signupAccess) == null ? void 0 : L.startDate).getTime() > Date.now())
    );
  }, [r]), Ne(() => {
    var R, U;
    if (t && ((R = r == null ? void 0 : r.signupAccess) == null ? void 0 : R.startDate)) {
      const D = setTimeout(
        () => e(!1),
        new Date((U = r == null ? void 0 : r.signupAccess) == null ? void 0 : U.startDate).getTime() - Date.now()
      );
      return () => clearTimeout(D);
    }
  }, [t, (u = r == null ? void 0 : r.signupAccess) == null ? void 0 : u.startDate]), n && ((p = r.signupAccess) == null ? void 0 : p.endDate) ? /* @__PURE__ */ O.createElement(Qi, {
    title: "Registration is closed"
  }, "Registration is closed on", " ", (A = new Date((m = r.signupAccess) == null ? void 0 : m.endDate)) == null ? void 0 : A.toUTCString(), ". Thank you for your interest.") : t && ((S = r == null ? void 0 : r.signupAccess) == null ? void 0 : S.startDate) ? /* @__PURE__ */ O.createElement(Qi, {
    title: "Registration starts in:"
  }, /* @__PURE__ */ O.createElement(ko, {
    dateString: (T = r == null ? void 0 : r.signupAccess) == null ? void 0 : T.startDate,
    message: "Registration is open."
  })) : !n && !t && ((I = r == null ? void 0 : r.signupAccess) == null ? void 0 : I.isEndDateRequired) && ((C = r == null ? void 0 : r.signupAccess) == null ? void 0 : C.endDate) ? /* @__PURE__ */ O.createElement(Qi, {
    title: "Registration ends in:"
  }, /* @__PURE__ */ O.createElement(ko, {
    dateString: (k = r == null ? void 0 : r.signupAccess) == null ? void 0 : k.endDate,
    message: "Registration is closed."
  })) : null;
}
function ru({
  projectData: r,
  appId: t,
  hasUser: e
}) {
  var u, p, m;
  const [n, s] = Ft(!1), i = Xe(() => {
    var T, I;
    if (!((T = r == null ? void 0 : r.twitter) != null && T.enabled))
      return [];
    const { twitter: A } = r, S = [];
    if (A != null && A.isAccountCreatedRequired) {
      const C = /* @__PURE__ */ O.createElement(O.Fragment, null, "Have an account created before", " ", /* @__PURE__ */ O.createElement("strong", null, new Date((A == null ? void 0 : A.accountCreated) || "").toLocaleDateString()));
      S.push(C);
    }
    if (A != null && A.isFollowRequired) {
      const C = (I = A == null ? void 0 : A.follow) == null ? void 0 : I.split(","), k = /* @__PURE__ */ O.createElement(O.Fragment, null, "Follow these account(s):", /* @__PURE__ */ O.createElement("ul", null, C == null ? void 0 : C.map((R) => /* @__PURE__ */ O.createElement("li", {
        key: R
      }, /* @__PURE__ */ O.createElement("a", {
        href: `https://twitter.com/${R.trim()}`,
        target: "_blank",
        rel: "noreferrer"
      }, /* @__PURE__ */ O.createElement("strong", null, "@", R))))));
      S.push(k);
    }
    if (A != null && A.isMinFollowersRequired) {
      const C = /* @__PURE__ */ O.createElement(O.Fragment, null, "Have at least ", /* @__PURE__ */ O.createElement("b", null, A.minFollowers, " follower(s)"));
      S.push(C);
    }
    if (A != null && A.isRetweetRequired) {
      const C = /* @__PURE__ */ O.createElement(O.Fragment, null, "Retweet", " ", /* @__PURE__ */ O.createElement("a", {
        href: A.retweetUrl,
        target: "_blank",
        rel: "noreferrer"
      }, /* @__PURE__ */ O.createElement("strong", null, "this tweet")));
      S.push(C);
    }
    return S;
  }, [r]), c = async () => {
    if (!(!t || !e || !(r != null && r.id)))
      try {
        s(!0);
        const { url: A } = await ka({
          provider: "twitter",
          appId: t,
          projectId: r.id,
          returnUrl: window.location.href
        });
        window.location.assign(A);
      } catch (A) {
        console.error(A);
      } finally {
        s(!1);
      }
  };
  return (u = r == null ? void 0 : r.twitter) != null && u.enabled ? /* @__PURE__ */ O.createElement(Ds, {
    title: "Twitter",
    onClick: c,
    info: i,
    rightText: (m = (p = r == null ? void 0 : r.userInfo) == null ? void 0 : p.twitter) == null ? void 0 : m.username,
    buttonDisabled: !e,
    isLoading: n
  }) : null;
}
var $e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ps(r) {
  var t = r.default;
  if (typeof t == "function") {
    var e = function() {
      return t.apply(this, arguments);
    };
    e.prototype = t.prototype;
  } else
    e = {};
  return Object.defineProperty(e, "__esModule", { value: !0 }), Object.keys(r).forEach(function(n) {
    var s = Object.getOwnPropertyDescriptor(r, n);
    Object.defineProperty(e, n, s.get ? s : {
      enumerable: !0,
      get: function() {
        return r[n];
      }
    });
  }), e;
}
var pt = {}, En = {};
En.byteLength = su;
En.toByteArray = au;
En.fromByteArray = fu;
var ir = [], Qe = [], nu = typeof Uint8Array < "u" ? Uint8Array : Array, Wi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Gr = 0, iu = Wi.length; Gr < iu; ++Gr)
  ir[Gr] = Wi[Gr], Qe[Wi.charCodeAt(Gr)] = Gr;
Qe["-".charCodeAt(0)] = 62;
Qe["_".charCodeAt(0)] = 63;
function Ta(r) {
  var t = r.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var e = r.indexOf("=");
  e === -1 && (e = t);
  var n = e === t ? 0 : 4 - e % 4;
  return [e, n];
}
function su(r) {
  var t = Ta(r), e = t[0], n = t[1];
  return (e + n) * 3 / 4 - n;
}
function ou(r, t, e) {
  return (t + e) * 3 / 4 - e;
}
function au(r) {
  var t, e = Ta(r), n = e[0], s = e[1], i = new nu(ou(r, n, s)), c = 0, u = s > 0 ? n - 4 : n, p;
  for (p = 0; p < u; p += 4)
    t = Qe[r.charCodeAt(p)] << 18 | Qe[r.charCodeAt(p + 1)] << 12 | Qe[r.charCodeAt(p + 2)] << 6 | Qe[r.charCodeAt(p + 3)], i[c++] = t >> 16 & 255, i[c++] = t >> 8 & 255, i[c++] = t & 255;
  return s === 2 && (t = Qe[r.charCodeAt(p)] << 2 | Qe[r.charCodeAt(p + 1)] >> 4, i[c++] = t & 255), s === 1 && (t = Qe[r.charCodeAt(p)] << 10 | Qe[r.charCodeAt(p + 1)] << 4 | Qe[r.charCodeAt(p + 2)] >> 2, i[c++] = t >> 8 & 255, i[c++] = t & 255), i;
}
function cu(r) {
  return ir[r >> 18 & 63] + ir[r >> 12 & 63] + ir[r >> 6 & 63] + ir[r & 63];
}
function uu(r, t, e) {
  for (var n, s = [], i = t; i < e; i += 3)
    n = (r[i] << 16 & 16711680) + (r[i + 1] << 8 & 65280) + (r[i + 2] & 255), s.push(cu(n));
  return s.join("");
}
function fu(r) {
  for (var t, e = r.length, n = e % 3, s = [], i = 16383, c = 0, u = e - n; c < u; c += i)
    s.push(uu(r, c, c + i > u ? u : c + i));
  return n === 1 ? (t = r[e - 1], s.push(
    ir[t >> 2] + ir[t << 4 & 63] + "=="
  )) : n === 2 && (t = (r[e - 2] << 8) + r[e - 1], s.push(
    ir[t >> 10] + ir[t >> 4 & 63] + ir[t << 2 & 63] + "="
  )), s.join("");
}
var oi = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
oi.read = function(r, t, e, n, s) {
  var i, c, u = s * 8 - n - 1, p = (1 << u) - 1, m = p >> 1, A = -7, S = e ? s - 1 : 0, T = e ? -1 : 1, I = r[t + S];
  for (S += T, i = I & (1 << -A) - 1, I >>= -A, A += u; A > 0; i = i * 256 + r[t + S], S += T, A -= 8)
    ;
  for (c = i & (1 << -A) - 1, i >>= -A, A += n; A > 0; c = c * 256 + r[t + S], S += T, A -= 8)
    ;
  if (i === 0)
    i = 1 - m;
  else {
    if (i === p)
      return c ? NaN : (I ? -1 : 1) * (1 / 0);
    c = c + Math.pow(2, n), i = i - m;
  }
  return (I ? -1 : 1) * c * Math.pow(2, i - n);
};
oi.write = function(r, t, e, n, s, i) {
  var c, u, p, m = i * 8 - s - 1, A = (1 << m) - 1, S = A >> 1, T = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, I = n ? 0 : i - 1, C = n ? 1 : -1, k = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (u = isNaN(t) ? 1 : 0, c = A) : (c = Math.floor(Math.log(t) / Math.LN2), t * (p = Math.pow(2, -c)) < 1 && (c--, p *= 2), c + S >= 1 ? t += T / p : t += T * Math.pow(2, 1 - S), t * p >= 2 && (c++, p /= 2), c + S >= A ? (u = 0, c = A) : c + S >= 1 ? (u = (t * p - 1) * Math.pow(2, s), c = c + S) : (u = t * Math.pow(2, S - 1) * Math.pow(2, s), c = 0)); s >= 8; r[e + I] = u & 255, I += C, u /= 256, s -= 8)
    ;
  for (c = c << s | u, m += s; m > 0; r[e + I] = c & 255, I += C, c /= 256, m -= 8)
    ;
  r[e + I - C] |= k * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(r) {
  const t = En, e = oi, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  r.Buffer = u, r.SlowBuffer = D, r.INSPECT_MAX_BYTES = 50;
  const s = 2147483647;
  r.kMaxLength = s, u.TYPED_ARRAY_SUPPORT = i(), !u.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function i() {
    try {
      const l = new Uint8Array(1), o = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(o, Uint8Array.prototype), Object.setPrototypeOf(l, o), l.foo() === 42;
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
  function c(l) {
    if (l > s)
      throw new RangeError('The value "' + l + '" is invalid for option "size"');
    const o = new Uint8Array(l);
    return Object.setPrototypeOf(o, u.prototype), o;
  }
  function u(l, o, a) {
    if (typeof l == "number") {
      if (typeof o == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return S(l);
    }
    return p(l, o, a);
  }
  u.poolSize = 8192;
  function p(l, o, a) {
    if (typeof l == "string")
      return T(l, o);
    if (ArrayBuffer.isView(l))
      return C(l);
    if (l == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof l
      );
    if (Ht(l, ArrayBuffer) || l && Ht(l.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Ht(l, SharedArrayBuffer) || l && Ht(l.buffer, SharedArrayBuffer)))
      return k(l, o, a);
    if (typeof l == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const h = l.valueOf && l.valueOf();
    if (h != null && h !== l)
      return u.from(h, o, a);
    const w = R(l);
    if (w)
      return w;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof l[Symbol.toPrimitive] == "function")
      return u.from(l[Symbol.toPrimitive]("string"), o, a);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof l
    );
  }
  u.from = function(l, o, a) {
    return p(l, o, a);
  }, Object.setPrototypeOf(u.prototype, Uint8Array.prototype), Object.setPrototypeOf(u, Uint8Array);
  function m(l) {
    if (typeof l != "number")
      throw new TypeError('"size" argument must be of type number');
    if (l < 0)
      throw new RangeError('The value "' + l + '" is invalid for option "size"');
  }
  function A(l, o, a) {
    return m(l), l <= 0 ? c(l) : o !== void 0 ? typeof a == "string" ? c(l).fill(o, a) : c(l).fill(o) : c(l);
  }
  u.alloc = function(l, o, a) {
    return A(l, o, a);
  };
  function S(l) {
    return m(l), c(l < 0 ? 0 : U(l) | 0);
  }
  u.allocUnsafe = function(l) {
    return S(l);
  }, u.allocUnsafeSlow = function(l) {
    return S(l);
  };
  function T(l, o) {
    if ((typeof o != "string" || o === "") && (o = "utf8"), !u.isEncoding(o))
      throw new TypeError("Unknown encoding: " + o);
    const a = L(l, o) | 0;
    let h = c(a);
    const w = h.write(l, o);
    return w !== a && (h = h.slice(0, w)), h;
  }
  function I(l) {
    const o = l.length < 0 ? 0 : U(l.length) | 0, a = c(o);
    for (let h = 0; h < o; h += 1)
      a[h] = l[h] & 255;
    return a;
  }
  function C(l) {
    if (Ht(l, Uint8Array)) {
      const o = new Uint8Array(l);
      return k(o.buffer, o.byteOffset, o.byteLength);
    }
    return I(l);
  }
  function k(l, o, a) {
    if (o < 0 || l.byteLength < o)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (l.byteLength < o + (a || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let h;
    return o === void 0 && a === void 0 ? h = new Uint8Array(l) : a === void 0 ? h = new Uint8Array(l, o) : h = new Uint8Array(l, o, a), Object.setPrototypeOf(h, u.prototype), h;
  }
  function R(l) {
    if (u.isBuffer(l)) {
      const o = U(l.length) | 0, a = c(o);
      return a.length === 0 || l.copy(a, 0, 0, o), a;
    }
    if (l.length !== void 0)
      return typeof l.length != "number" || Ct(l.length) ? c(0) : I(l);
    if (l.type === "Buffer" && Array.isArray(l.data))
      return I(l.data);
  }
  function U(l) {
    if (l >= s)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
    return l | 0;
  }
  function D(l) {
    return +l != l && (l = 0), u.alloc(+l);
  }
  u.isBuffer = function(o) {
    return o != null && o._isBuffer === !0 && o !== u.prototype;
  }, u.compare = function(o, a) {
    if (Ht(o, Uint8Array) && (o = u.from(o, o.offset, o.byteLength)), Ht(a, Uint8Array) && (a = u.from(a, a.offset, a.byteLength)), !u.isBuffer(o) || !u.isBuffer(a))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (o === a)
      return 0;
    let h = o.length, w = a.length;
    for (let b = 0, _ = Math.min(h, w); b < _; ++b)
      if (o[b] !== a[b]) {
        h = o[b], w = a[b];
        break;
      }
    return h < w ? -1 : w < h ? 1 : 0;
  }, u.isEncoding = function(o) {
    switch (String(o).toLowerCase()) {
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
  }, u.concat = function(o, a) {
    if (!Array.isArray(o))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (o.length === 0)
      return u.alloc(0);
    let h;
    if (a === void 0)
      for (a = 0, h = 0; h < o.length; ++h)
        a += o[h].length;
    const w = u.allocUnsafe(a);
    let b = 0;
    for (h = 0; h < o.length; ++h) {
      let _ = o[h];
      if (Ht(_, Uint8Array))
        b + _.length > w.length ? (u.isBuffer(_) || (_ = u.from(_)), _.copy(w, b)) : Uint8Array.prototype.set.call(
          w,
          _,
          b
        );
      else if (u.isBuffer(_))
        _.copy(w, b);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      b += _.length;
    }
    return w;
  };
  function L(l, o) {
    if (u.isBuffer(l))
      return l.length;
    if (ArrayBuffer.isView(l) || Ht(l, ArrayBuffer))
      return l.byteLength;
    if (typeof l != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof l
      );
    const a = l.length, h = arguments.length > 2 && arguments[2] === !0;
    if (!h && a === 0)
      return 0;
    let w = !1;
    for (; ; )
      switch (o) {
        case "ascii":
        case "latin1":
        case "binary":
          return a;
        case "utf8":
        case "utf-8":
          return Tt(l).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return a * 2;
        case "hex":
          return a >>> 1;
        case "base64":
          return Ot(l).length;
        default:
          if (w)
            return h ? -1 : Tt(l).length;
          o = ("" + o).toLowerCase(), w = !0;
      }
  }
  u.byteLength = L;
  function H(l, o, a) {
    let h = !1;
    if ((o === void 0 || o < 0) && (o = 0), o > this.length || ((a === void 0 || a > this.length) && (a = this.length), a <= 0) || (a >>>= 0, o >>>= 0, a <= o))
      return "";
    for (l || (l = "utf8"); ; )
      switch (l) {
        case "hex":
          return N(this, o, a);
        case "utf8":
        case "utf-8":
          return f(this, o, a);
        case "ascii":
          return E(this, o, a);
        case "latin1":
        case "binary":
          return B(this, o, a);
        case "base64":
          return v(this, o, a);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return F(this, o, a);
        default:
          if (h)
            throw new TypeError("Unknown encoding: " + l);
          l = (l + "").toLowerCase(), h = !0;
      }
  }
  u.prototype._isBuffer = !0;
  function P(l, o, a) {
    const h = l[o];
    l[o] = l[a], l[a] = h;
  }
  u.prototype.swap16 = function() {
    const o = this.length;
    if (o % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let a = 0; a < o; a += 2)
      P(this, a, a + 1);
    return this;
  }, u.prototype.swap32 = function() {
    const o = this.length;
    if (o % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let a = 0; a < o; a += 4)
      P(this, a, a + 3), P(this, a + 1, a + 2);
    return this;
  }, u.prototype.swap64 = function() {
    const o = this.length;
    if (o % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let a = 0; a < o; a += 8)
      P(this, a, a + 7), P(this, a + 1, a + 6), P(this, a + 2, a + 5), P(this, a + 3, a + 4);
    return this;
  }, u.prototype.toString = function() {
    const o = this.length;
    return o === 0 ? "" : arguments.length === 0 ? f(this, 0, o) : H.apply(this, arguments);
  }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(o) {
    if (!u.isBuffer(o))
      throw new TypeError("Argument must be a Buffer");
    return this === o ? !0 : u.compare(this, o) === 0;
  }, u.prototype.inspect = function() {
    let o = "";
    const a = r.INSPECT_MAX_BYTES;
    return o = this.toString("hex", 0, a).replace(/(.{2})/g, "$1 ").trim(), this.length > a && (o += " ... "), "<Buffer " + o + ">";
  }, n && (u.prototype[n] = u.prototype.inspect), u.prototype.compare = function(o, a, h, w, b) {
    if (Ht(o, Uint8Array) && (o = u.from(o, o.offset, o.byteLength)), !u.isBuffer(o))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof o
      );
    if (a === void 0 && (a = 0), h === void 0 && (h = o ? o.length : 0), w === void 0 && (w = 0), b === void 0 && (b = this.length), a < 0 || h > o.length || w < 0 || b > this.length)
      throw new RangeError("out of range index");
    if (w >= b && a >= h)
      return 0;
    if (w >= b)
      return -1;
    if (a >= h)
      return 1;
    if (a >>>= 0, h >>>= 0, w >>>= 0, b >>>= 0, this === o)
      return 0;
    let _ = b - w, j = h - a;
    const $ = Math.min(_, j), X = this.slice(w, b), ft = o.slice(a, h);
    for (let V = 0; V < $; ++V)
      if (X[V] !== ft[V]) {
        _ = X[V], j = ft[V];
        break;
      }
    return _ < j ? -1 : j < _ ? 1 : 0;
  };
  function Q(l, o, a, h, w) {
    if (l.length === 0)
      return -1;
    if (typeof a == "string" ? (h = a, a = 0) : a > 2147483647 ? a = 2147483647 : a < -2147483648 && (a = -2147483648), a = +a, Ct(a) && (a = w ? 0 : l.length - 1), a < 0 && (a = l.length + a), a >= l.length) {
      if (w)
        return -1;
      a = l.length - 1;
    } else if (a < 0)
      if (w)
        a = 0;
      else
        return -1;
    if (typeof o == "string" && (o = u.from(o, h)), u.isBuffer(o))
      return o.length === 0 ? -1 : W(l, o, a, h, w);
    if (typeof o == "number")
      return o = o & 255, typeof Uint8Array.prototype.indexOf == "function" ? w ? Uint8Array.prototype.indexOf.call(l, o, a) : Uint8Array.prototype.lastIndexOf.call(l, o, a) : W(l, [o], a, h, w);
    throw new TypeError("val must be string, number or Buffer");
  }
  function W(l, o, a, h, w) {
    let b = 1, _ = l.length, j = o.length;
    if (h !== void 0 && (h = String(h).toLowerCase(), h === "ucs2" || h === "ucs-2" || h === "utf16le" || h === "utf-16le")) {
      if (l.length < 2 || o.length < 2)
        return -1;
      b = 2, _ /= 2, j /= 2, a /= 2;
    }
    function $(ft, V) {
      return b === 1 ? ft[V] : ft.readUInt16BE(V * b);
    }
    let X;
    if (w) {
      let ft = -1;
      for (X = a; X < _; X++)
        if ($(l, X) === $(o, ft === -1 ? 0 : X - ft)) {
          if (ft === -1 && (ft = X), X - ft + 1 === j)
            return ft * b;
        } else
          ft !== -1 && (X -= X - ft), ft = -1;
    } else
      for (a + j > _ && (a = _ - j), X = a; X >= 0; X--) {
        let ft = !0;
        for (let V = 0; V < j; V++)
          if ($(l, X + V) !== $(o, V)) {
            ft = !1;
            break;
          }
        if (ft)
          return X;
      }
    return -1;
  }
  u.prototype.includes = function(o, a, h) {
    return this.indexOf(o, a, h) !== -1;
  }, u.prototype.indexOf = function(o, a, h) {
    return Q(this, o, a, h, !0);
  }, u.prototype.lastIndexOf = function(o, a, h) {
    return Q(this, o, a, h, !1);
  };
  function Y(l, o, a, h) {
    a = Number(a) || 0;
    const w = l.length - a;
    h ? (h = Number(h), h > w && (h = w)) : h = w;
    const b = o.length;
    h > b / 2 && (h = b / 2);
    let _;
    for (_ = 0; _ < h; ++_) {
      const j = parseInt(o.substr(_ * 2, 2), 16);
      if (Ct(j))
        return _;
      l[a + _] = j;
    }
    return _;
  }
  function wt(l, o, a, h) {
    return St(Tt(o, l.length - a), l, a, h);
  }
  function Nt(l, o, a, h) {
    return St(zt(o), l, a, h);
  }
  function dt(l, o, a, h) {
    return St(Ot(o), l, a, h);
  }
  function Rt(l, o, a, h) {
    return St(Hr(o, l.length - a), l, a, h);
  }
  u.prototype.write = function(o, a, h, w) {
    if (a === void 0)
      w = "utf8", h = this.length, a = 0;
    else if (h === void 0 && typeof a == "string")
      w = a, h = this.length, a = 0;
    else if (isFinite(a))
      a = a >>> 0, isFinite(h) ? (h = h >>> 0, w === void 0 && (w = "utf8")) : (w = h, h = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const b = this.length - a;
    if ((h === void 0 || h > b) && (h = b), o.length > 0 && (h < 0 || a < 0) || a > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    w || (w = "utf8");
    let _ = !1;
    for (; ; )
      switch (w) {
        case "hex":
          return Y(this, o, a, h);
        case "utf8":
        case "utf-8":
          return wt(this, o, a, h);
        case "ascii":
        case "latin1":
        case "binary":
          return Nt(this, o, a, h);
        case "base64":
          return dt(this, o, a, h);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Rt(this, o, a, h);
        default:
          if (_)
            throw new TypeError("Unknown encoding: " + w);
          w = ("" + w).toLowerCase(), _ = !0;
      }
  }, u.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function v(l, o, a) {
    return o === 0 && a === l.length ? t.fromByteArray(l) : t.fromByteArray(l.slice(o, a));
  }
  function f(l, o, a) {
    a = Math.min(l.length, a);
    const h = [];
    let w = o;
    for (; w < a; ) {
      const b = l[w];
      let _ = null, j = b > 239 ? 4 : b > 223 ? 3 : b > 191 ? 2 : 1;
      if (w + j <= a) {
        let $, X, ft, V;
        switch (j) {
          case 1:
            b < 128 && (_ = b);
            break;
          case 2:
            $ = l[w + 1], ($ & 192) === 128 && (V = (b & 31) << 6 | $ & 63, V > 127 && (_ = V));
            break;
          case 3:
            $ = l[w + 1], X = l[w + 2], ($ & 192) === 128 && (X & 192) === 128 && (V = (b & 15) << 12 | ($ & 63) << 6 | X & 63, V > 2047 && (V < 55296 || V > 57343) && (_ = V));
            break;
          case 4:
            $ = l[w + 1], X = l[w + 2], ft = l[w + 3], ($ & 192) === 128 && (X & 192) === 128 && (ft & 192) === 128 && (V = (b & 15) << 18 | ($ & 63) << 12 | (X & 63) << 6 | ft & 63, V > 65535 && V < 1114112 && (_ = V));
        }
      }
      _ === null ? (_ = 65533, j = 1) : _ > 65535 && (_ -= 65536, h.push(_ >>> 10 & 1023 | 55296), _ = 56320 | _ & 1023), h.push(_), w += j;
    }
    return y(h);
  }
  const g = 4096;
  function y(l) {
    const o = l.length;
    if (o <= g)
      return String.fromCharCode.apply(String, l);
    let a = "", h = 0;
    for (; h < o; )
      a += String.fromCharCode.apply(
        String,
        l.slice(h, h += g)
      );
    return a;
  }
  function E(l, o, a) {
    let h = "";
    a = Math.min(l.length, a);
    for (let w = o; w < a; ++w)
      h += String.fromCharCode(l[w] & 127);
    return h;
  }
  function B(l, o, a) {
    let h = "";
    a = Math.min(l.length, a);
    for (let w = o; w < a; ++w)
      h += String.fromCharCode(l[w]);
    return h;
  }
  function N(l, o, a) {
    const h = l.length;
    (!o || o < 0) && (o = 0), (!a || a < 0 || a > h) && (a = h);
    let w = "";
    for (let b = o; b < a; ++b)
      w += Gt[l[b]];
    return w;
  }
  function F(l, o, a) {
    const h = l.slice(o, a);
    let w = "";
    for (let b = 0; b < h.length - 1; b += 2)
      w += String.fromCharCode(h[b] + h[b + 1] * 256);
    return w;
  }
  u.prototype.slice = function(o, a) {
    const h = this.length;
    o = ~~o, a = a === void 0 ? h : ~~a, o < 0 ? (o += h, o < 0 && (o = 0)) : o > h && (o = h), a < 0 ? (a += h, a < 0 && (a = 0)) : a > h && (a = h), a < o && (a = o);
    const w = this.subarray(o, a);
    return Object.setPrototypeOf(w, u.prototype), w;
  };
  function x(l, o, a) {
    if (l % 1 !== 0 || l < 0)
      throw new RangeError("offset is not uint");
    if (l + o > a)
      throw new RangeError("Trying to access beyond buffer length");
  }
  u.prototype.readUintLE = u.prototype.readUIntLE = function(o, a, h) {
    o = o >>> 0, a = a >>> 0, h || x(o, a, this.length);
    let w = this[o], b = 1, _ = 0;
    for (; ++_ < a && (b *= 256); )
      w += this[o + _] * b;
    return w;
  }, u.prototype.readUintBE = u.prototype.readUIntBE = function(o, a, h) {
    o = o >>> 0, a = a >>> 0, h || x(o, a, this.length);
    let w = this[o + --a], b = 1;
    for (; a > 0 && (b *= 256); )
      w += this[o + --a] * b;
    return w;
  }, u.prototype.readUint8 = u.prototype.readUInt8 = function(o, a) {
    return o = o >>> 0, a || x(o, 1, this.length), this[o];
  }, u.prototype.readUint16LE = u.prototype.readUInt16LE = function(o, a) {
    return o = o >>> 0, a || x(o, 2, this.length), this[o] | this[o + 1] << 8;
  }, u.prototype.readUint16BE = u.prototype.readUInt16BE = function(o, a) {
    return o = o >>> 0, a || x(o, 2, this.length), this[o] << 8 | this[o + 1];
  }, u.prototype.readUint32LE = u.prototype.readUInt32LE = function(o, a) {
    return o = o >>> 0, a || x(o, 4, this.length), (this[o] | this[o + 1] << 8 | this[o + 2] << 16) + this[o + 3] * 16777216;
  }, u.prototype.readUint32BE = u.prototype.readUInt32BE = function(o, a) {
    return o = o >>> 0, a || x(o, 4, this.length), this[o] * 16777216 + (this[o + 1] << 16 | this[o + 2] << 8 | this[o + 3]);
  }, u.prototype.readBigUInt64LE = Jt(function(o) {
    o = o >>> 0, Me(o, "offset");
    const a = this[o], h = this[o + 7];
    (a === void 0 || h === void 0) && xt(o, this.length - 8);
    const w = a + this[++o] * 2 ** 8 + this[++o] * 2 ** 16 + this[++o] * 2 ** 24, b = this[++o] + this[++o] * 2 ** 8 + this[++o] * 2 ** 16 + h * 2 ** 24;
    return BigInt(w) + (BigInt(b) << BigInt(32));
  }), u.prototype.readBigUInt64BE = Jt(function(o) {
    o = o >>> 0, Me(o, "offset");
    const a = this[o], h = this[o + 7];
    (a === void 0 || h === void 0) && xt(o, this.length - 8);
    const w = a * 2 ** 24 + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + this[++o], b = this[++o] * 2 ** 24 + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + h;
    return (BigInt(w) << BigInt(32)) + BigInt(b);
  }), u.prototype.readIntLE = function(o, a, h) {
    o = o >>> 0, a = a >>> 0, h || x(o, a, this.length);
    let w = this[o], b = 1, _ = 0;
    for (; ++_ < a && (b *= 256); )
      w += this[o + _] * b;
    return b *= 128, w >= b && (w -= Math.pow(2, 8 * a)), w;
  }, u.prototype.readIntBE = function(o, a, h) {
    o = o >>> 0, a = a >>> 0, h || x(o, a, this.length);
    let w = a, b = 1, _ = this[o + --w];
    for (; w > 0 && (b *= 256); )
      _ += this[o + --w] * b;
    return b *= 128, _ >= b && (_ -= Math.pow(2, 8 * a)), _;
  }, u.prototype.readInt8 = function(o, a) {
    return o = o >>> 0, a || x(o, 1, this.length), this[o] & 128 ? (255 - this[o] + 1) * -1 : this[o];
  }, u.prototype.readInt16LE = function(o, a) {
    o = o >>> 0, a || x(o, 2, this.length);
    const h = this[o] | this[o + 1] << 8;
    return h & 32768 ? h | 4294901760 : h;
  }, u.prototype.readInt16BE = function(o, a) {
    o = o >>> 0, a || x(o, 2, this.length);
    const h = this[o + 1] | this[o] << 8;
    return h & 32768 ? h | 4294901760 : h;
  }, u.prototype.readInt32LE = function(o, a) {
    return o = o >>> 0, a || x(o, 4, this.length), this[o] | this[o + 1] << 8 | this[o + 2] << 16 | this[o + 3] << 24;
  }, u.prototype.readInt32BE = function(o, a) {
    return o = o >>> 0, a || x(o, 4, this.length), this[o] << 24 | this[o + 1] << 16 | this[o + 2] << 8 | this[o + 3];
  }, u.prototype.readBigInt64LE = Jt(function(o) {
    o = o >>> 0, Me(o, "offset");
    const a = this[o], h = this[o + 7];
    (a === void 0 || h === void 0) && xt(o, this.length - 8);
    const w = this[o + 4] + this[o + 5] * 2 ** 8 + this[o + 6] * 2 ** 16 + (h << 24);
    return (BigInt(w) << BigInt(32)) + BigInt(a + this[++o] * 2 ** 8 + this[++o] * 2 ** 16 + this[++o] * 2 ** 24);
  }), u.prototype.readBigInt64BE = Jt(function(o) {
    o = o >>> 0, Me(o, "offset");
    const a = this[o], h = this[o + 7];
    (a === void 0 || h === void 0) && xt(o, this.length - 8);
    const w = (a << 24) + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + this[++o];
    return (BigInt(w) << BigInt(32)) + BigInt(this[++o] * 2 ** 24 + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + h);
  }), u.prototype.readFloatLE = function(o, a) {
    return o = o >>> 0, a || x(o, 4, this.length), e.read(this, o, !0, 23, 4);
  }, u.prototype.readFloatBE = function(o, a) {
    return o = o >>> 0, a || x(o, 4, this.length), e.read(this, o, !1, 23, 4);
  }, u.prototype.readDoubleLE = function(o, a) {
    return o = o >>> 0, a || x(o, 8, this.length), e.read(this, o, !0, 52, 8);
  }, u.prototype.readDoubleBE = function(o, a) {
    return o = o >>> 0, a || x(o, 8, this.length), e.read(this, o, !1, 52, 8);
  };
  function d(l, o, a, h, w, b) {
    if (!u.isBuffer(l))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (o > w || o < b)
      throw new RangeError('"value" argument is out of bounds');
    if (a + h > l.length)
      throw new RangeError("Index out of range");
  }
  u.prototype.writeUintLE = u.prototype.writeUIntLE = function(o, a, h, w) {
    if (o = +o, a = a >>> 0, h = h >>> 0, !w) {
      const j = Math.pow(2, 8 * h) - 1;
      d(this, o, a, h, j, 0);
    }
    let b = 1, _ = 0;
    for (this[a] = o & 255; ++_ < h && (b *= 256); )
      this[a + _] = o / b & 255;
    return a + h;
  }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(o, a, h, w) {
    if (o = +o, a = a >>> 0, h = h >>> 0, !w) {
      const j = Math.pow(2, 8 * h) - 1;
      d(this, o, a, h, j, 0);
    }
    let b = h - 1, _ = 1;
    for (this[a + b] = o & 255; --b >= 0 && (_ *= 256); )
      this[a + b] = o / _ & 255;
    return a + h;
  }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(o, a, h) {
    return o = +o, a = a >>> 0, h || d(this, o, a, 1, 255, 0), this[a] = o & 255, a + 1;
  }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(o, a, h) {
    return o = +o, a = a >>> 0, h || d(this, o, a, 2, 65535, 0), this[a] = o & 255, this[a + 1] = o >>> 8, a + 2;
  }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(o, a, h) {
    return o = +o, a = a >>> 0, h || d(this, o, a, 2, 65535, 0), this[a] = o >>> 8, this[a + 1] = o & 255, a + 2;
  }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(o, a, h) {
    return o = +o, a = a >>> 0, h || d(this, o, a, 4, 4294967295, 0), this[a + 3] = o >>> 24, this[a + 2] = o >>> 16, this[a + 1] = o >>> 8, this[a] = o & 255, a + 4;
  }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(o, a, h) {
    return o = +o, a = a >>> 0, h || d(this, o, a, 4, 4294967295, 0), this[a] = o >>> 24, this[a + 1] = o >>> 16, this[a + 2] = o >>> 8, this[a + 3] = o & 255, a + 4;
  };
  function M(l, o, a, h, w) {
    Ut(o, h, w, l, a, 7);
    let b = Number(o & BigInt(4294967295));
    l[a++] = b, b = b >> 8, l[a++] = b, b = b >> 8, l[a++] = b, b = b >> 8, l[a++] = b;
    let _ = Number(o >> BigInt(32) & BigInt(4294967295));
    return l[a++] = _, _ = _ >> 8, l[a++] = _, _ = _ >> 8, l[a++] = _, _ = _ >> 8, l[a++] = _, a;
  }
  function tt(l, o, a, h, w) {
    Ut(o, h, w, l, a, 7);
    let b = Number(o & BigInt(4294967295));
    l[a + 7] = b, b = b >> 8, l[a + 6] = b, b = b >> 8, l[a + 5] = b, b = b >> 8, l[a + 4] = b;
    let _ = Number(o >> BigInt(32) & BigInt(4294967295));
    return l[a + 3] = _, _ = _ >> 8, l[a + 2] = _, _ = _ >> 8, l[a + 1] = _, _ = _ >> 8, l[a] = _, a + 8;
  }
  u.prototype.writeBigUInt64LE = Jt(function(o, a = 0) {
    return M(this, o, a, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeBigUInt64BE = Jt(function(o, a = 0) {
    return tt(this, o, a, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeIntLE = function(o, a, h, w) {
    if (o = +o, a = a >>> 0, !w) {
      const $ = Math.pow(2, 8 * h - 1);
      d(this, o, a, h, $ - 1, -$);
    }
    let b = 0, _ = 1, j = 0;
    for (this[a] = o & 255; ++b < h && (_ *= 256); )
      o < 0 && j === 0 && this[a + b - 1] !== 0 && (j = 1), this[a + b] = (o / _ >> 0) - j & 255;
    return a + h;
  }, u.prototype.writeIntBE = function(o, a, h, w) {
    if (o = +o, a = a >>> 0, !w) {
      const $ = Math.pow(2, 8 * h - 1);
      d(this, o, a, h, $ - 1, -$);
    }
    let b = h - 1, _ = 1, j = 0;
    for (this[a + b] = o & 255; --b >= 0 && (_ *= 256); )
      o < 0 && j === 0 && this[a + b + 1] !== 0 && (j = 1), this[a + b] = (o / _ >> 0) - j & 255;
    return a + h;
  }, u.prototype.writeInt8 = function(o, a, h) {
    return o = +o, a = a >>> 0, h || d(this, o, a, 1, 127, -128), o < 0 && (o = 255 + o + 1), this[a] = o & 255, a + 1;
  }, u.prototype.writeInt16LE = function(o, a, h) {
    return o = +o, a = a >>> 0, h || d(this, o, a, 2, 32767, -32768), this[a] = o & 255, this[a + 1] = o >>> 8, a + 2;
  }, u.prototype.writeInt16BE = function(o, a, h) {
    return o = +o, a = a >>> 0, h || d(this, o, a, 2, 32767, -32768), this[a] = o >>> 8, this[a + 1] = o & 255, a + 2;
  }, u.prototype.writeInt32LE = function(o, a, h) {
    return o = +o, a = a >>> 0, h || d(this, o, a, 4, 2147483647, -2147483648), this[a] = o & 255, this[a + 1] = o >>> 8, this[a + 2] = o >>> 16, this[a + 3] = o >>> 24, a + 4;
  }, u.prototype.writeInt32BE = function(o, a, h) {
    return o = +o, a = a >>> 0, h || d(this, o, a, 4, 2147483647, -2147483648), o < 0 && (o = 4294967295 + o + 1), this[a] = o >>> 24, this[a + 1] = o >>> 16, this[a + 2] = o >>> 8, this[a + 3] = o & 255, a + 4;
  }, u.prototype.writeBigInt64LE = Jt(function(o, a = 0) {
    return M(this, o, a, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), u.prototype.writeBigInt64BE = Jt(function(o, a = 0) {
    return tt(this, o, a, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function it(l, o, a, h, w, b) {
    if (a + h > l.length)
      throw new RangeError("Index out of range");
    if (a < 0)
      throw new RangeError("Index out of range");
  }
  function at(l, o, a, h, w) {
    return o = +o, a = a >>> 0, w || it(l, o, a, 4), e.write(l, o, a, h, 23, 4), a + 4;
  }
  u.prototype.writeFloatLE = function(o, a, h) {
    return at(this, o, a, !0, h);
  }, u.prototype.writeFloatBE = function(o, a, h) {
    return at(this, o, a, !1, h);
  };
  function Lt(l, o, a, h, w) {
    return o = +o, a = a >>> 0, w || it(l, o, a, 8), e.write(l, o, a, h, 52, 8), a + 8;
  }
  u.prototype.writeDoubleLE = function(o, a, h) {
    return Lt(this, o, a, !0, h);
  }, u.prototype.writeDoubleBE = function(o, a, h) {
    return Lt(this, o, a, !1, h);
  }, u.prototype.copy = function(o, a, h, w) {
    if (!u.isBuffer(o))
      throw new TypeError("argument should be a Buffer");
    if (h || (h = 0), !w && w !== 0 && (w = this.length), a >= o.length && (a = o.length), a || (a = 0), w > 0 && w < h && (w = h), w === h || o.length === 0 || this.length === 0)
      return 0;
    if (a < 0)
      throw new RangeError("targetStart out of bounds");
    if (h < 0 || h >= this.length)
      throw new RangeError("Index out of range");
    if (w < 0)
      throw new RangeError("sourceEnd out of bounds");
    w > this.length && (w = this.length), o.length - a < w - h && (w = o.length - a + h);
    const b = w - h;
    return this === o && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(a, h, w) : Uint8Array.prototype.set.call(
      o,
      this.subarray(h, w),
      a
    ), b;
  }, u.prototype.fill = function(o, a, h, w) {
    if (typeof o == "string") {
      if (typeof a == "string" ? (w = a, a = 0, h = this.length) : typeof h == "string" && (w = h, h = this.length), w !== void 0 && typeof w != "string")
        throw new TypeError("encoding must be a string");
      if (typeof w == "string" && !u.isEncoding(w))
        throw new TypeError("Unknown encoding: " + w);
      if (o.length === 1) {
        const _ = o.charCodeAt(0);
        (w === "utf8" && _ < 128 || w === "latin1") && (o = _);
      }
    } else
      typeof o == "number" ? o = o & 255 : typeof o == "boolean" && (o = Number(o));
    if (a < 0 || this.length < a || this.length < h)
      throw new RangeError("Out of range index");
    if (h <= a)
      return this;
    a = a >>> 0, h = h === void 0 ? this.length : h >>> 0, o || (o = 0);
    let b;
    if (typeof o == "number")
      for (b = a; b < h; ++b)
        this[b] = o;
    else {
      const _ = u.isBuffer(o) ? o : u.from(o, w), j = _.length;
      if (j === 0)
        throw new TypeError('The value "' + o + '" is invalid for argument "value"');
      for (b = 0; b < h - a; ++b)
        this[b + a] = _[b % j];
    }
    return this;
  };
  const lt = {};
  function Bt(l, o, a) {
    lt[l] = class extends a {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: o.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${l}]`, this.stack, delete this.name;
      }
      get code() {
        return l;
      }
      set code(w) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: w,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${l}]: ${this.message}`;
      }
    };
  }
  Bt(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(l) {
      return l ? `${l} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), Bt(
    "ERR_INVALID_ARG_TYPE",
    function(l, o) {
      return `The "${l}" argument must be of type number. Received type ${typeof o}`;
    },
    TypeError
  ), Bt(
    "ERR_OUT_OF_RANGE",
    function(l, o, a) {
      let h = `The value of "${l}" is out of range.`, w = a;
      return Number.isInteger(a) && Math.abs(a) > 2 ** 32 ? w = hr(String(a)) : typeof a == "bigint" && (w = String(a), (a > BigInt(2) ** BigInt(32) || a < -(BigInt(2) ** BigInt(32))) && (w = hr(w)), w += "n"), h += ` It must be ${o}. Received ${w}`, h;
    },
    RangeError
  );
  function hr(l) {
    let o = "", a = l.length;
    const h = l[0] === "-" ? 1 : 0;
    for (; a >= h + 4; a -= 3)
      o = `_${l.slice(a - 3, a)}${o}`;
    return `${l.slice(0, a)}${o}`;
  }
  function Dt(l, o, a) {
    Me(o, "offset"), (l[o] === void 0 || l[o + a] === void 0) && xt(o, l.length - (a + 1));
  }
  function Ut(l, o, a, h, w, b) {
    if (l > a || l < o) {
      const _ = typeof o == "bigint" ? "n" : "";
      let j;
      throw b > 3 ? o === 0 || o === BigInt(0) ? j = `>= 0${_} and < 2${_} ** ${(b + 1) * 8}${_}` : j = `>= -(2${_} ** ${(b + 1) * 8 - 1}${_}) and < 2 ** ${(b + 1) * 8 - 1}${_}` : j = `>= ${o}${_} and <= ${a}${_}`, new lt.ERR_OUT_OF_RANGE("value", j, l);
    }
    Dt(h, w, b);
  }
  function Me(l, o) {
    if (typeof l != "number")
      throw new lt.ERR_INVALID_ARG_TYPE(o, "number", l);
  }
  function xt(l, o, a) {
    throw Math.floor(l) !== l ? (Me(l, a), new lt.ERR_OUT_OF_RANGE(a || "offset", "an integer", l)) : o < 0 ? new lt.ERR_BUFFER_OUT_OF_BOUNDS() : new lt.ERR_OUT_OF_RANGE(
      a || "offset",
      `>= ${a ? 1 : 0} and <= ${o}`,
      l
    );
  }
  const Pt = /[^+/0-9A-Za-z-_]/g;
  function zr(l) {
    if (l = l.split("=")[0], l = l.trim().replace(Pt, ""), l.length < 2)
      return "";
    for (; l.length % 4 !== 0; )
      l = l + "=";
    return l;
  }
  function Tt(l, o) {
    o = o || 1 / 0;
    let a;
    const h = l.length;
    let w = null;
    const b = [];
    for (let _ = 0; _ < h; ++_) {
      if (a = l.charCodeAt(_), a > 55295 && a < 57344) {
        if (!w) {
          if (a > 56319) {
            (o -= 3) > -1 && b.push(239, 191, 189);
            continue;
          } else if (_ + 1 === h) {
            (o -= 3) > -1 && b.push(239, 191, 189);
            continue;
          }
          w = a;
          continue;
        }
        if (a < 56320) {
          (o -= 3) > -1 && b.push(239, 191, 189), w = a;
          continue;
        }
        a = (w - 55296 << 10 | a - 56320) + 65536;
      } else
        w && (o -= 3) > -1 && b.push(239, 191, 189);
      if (w = null, a < 128) {
        if ((o -= 1) < 0)
          break;
        b.push(a);
      } else if (a < 2048) {
        if ((o -= 2) < 0)
          break;
        b.push(
          a >> 6 | 192,
          a & 63 | 128
        );
      } else if (a < 65536) {
        if ((o -= 3) < 0)
          break;
        b.push(
          a >> 12 | 224,
          a >> 6 & 63 | 128,
          a & 63 | 128
        );
      } else if (a < 1114112) {
        if ((o -= 4) < 0)
          break;
        b.push(
          a >> 18 | 240,
          a >> 12 & 63 | 128,
          a >> 6 & 63 | 128,
          a & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return b;
  }
  function zt(l) {
    const o = [];
    for (let a = 0; a < l.length; ++a)
      o.push(l.charCodeAt(a) & 255);
    return o;
  }
  function Hr(l, o) {
    let a, h, w;
    const b = [];
    for (let _ = 0; _ < l.length && !((o -= 2) < 0); ++_)
      a = l.charCodeAt(_), h = a >> 8, w = a % 256, b.push(w), b.push(h);
    return b;
  }
  function Ot(l) {
    return t.toByteArray(zr(l));
  }
  function St(l, o, a, h) {
    let w;
    for (w = 0; w < h && !(w + a >= o.length || w >= l.length); ++w)
      o[w + a] = l[w];
    return w;
  }
  function Ht(l, o) {
    return l instanceof o || l != null && l.constructor != null && l.constructor.name != null && l.constructor.name === o.name;
  }
  function Ct(l) {
    return l !== l;
  }
  const Gt = function() {
    const l = "0123456789abcdef", o = new Array(256);
    for (let a = 0; a < 16; ++a) {
      const h = a * 16;
      for (let w = 0; w < 16; ++w)
        o[h + w] = l[a] + l[w];
    }
    return o;
  }();
  function Jt(l) {
    return typeof BigInt > "u" ? Qt : l;
  }
  function Qt() {
    throw new Error("BigInt not supported");
  }
})(pt);
function Bs(r) {
  if (!Number.isSafeInteger(r) || r < 0)
    throw new Error(`Wrong positive integer: ${r}`);
}
function lu(r) {
  if (typeof r != "boolean")
    throw new Error(`Expected boolean, not ${r}`);
}
function Ca(r, ...t) {
  if (!(r instanceof Uint8Array))
    throw new TypeError("Expected Uint8Array");
  if (t.length > 0 && !t.includes(r.length))
    throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${r.length}`);
}
function hu(r) {
  if (typeof r != "function" || typeof r.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  Bs(r.outputLen), Bs(r.blockLen);
}
function du(r, t = !0) {
  if (r.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && r.finished)
    throw new Error("Hash#digest() has already been called");
}
function pu(r, t) {
  Ca(r);
  const e = t.outputLen;
  if (r.length < e)
    throw new Error(`digestInto() expects output buffer of length at least ${e}`);
}
const ze = {
  number: Bs,
  bool: lu,
  bytes: Ca,
  hash: hu,
  exists: du,
  output: pu
};
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const gu = (r) => new Uint32Array(r.buffer, r.byteOffset, Math.floor(r.byteLength / 4)), Ki = (r) => new DataView(r.buffer, r.byteOffset, r.byteLength), er = (r, t) => r << 32 - t | r >>> t, wu = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!wu)
  throw new Error("Non little-endian hardware is not supported");
Array.from({ length: 256 }, (r, t) => t.toString(16).padStart(2, "0"));
function yu(r) {
  if (typeof r != "string")
    throw new TypeError(`utf8ToBytes expected string, got ${typeof r}`);
  return new TextEncoder().encode(r);
}
function vn(r) {
  if (typeof r == "string" && (r = yu(r)), !(r instanceof Uint8Array))
    throw new TypeError(`Expected input type is Uint8Array (got ${typeof r})`);
  return r;
}
class zs {
  clone() {
    return this._cloneInto();
  }
}
function Bn(r) {
  const t = (n) => r().update(vn(n)).digest(), e = r();
  return t.outputLen = e.outputLen, t.blockLen = e.blockLen, t.create = () => r(), t;
}
function mu(r) {
  const t = (n, s) => r(s).update(vn(n)).digest(), e = r({});
  return t.outputLen = e.outputLen, t.blockLen = e.blockLen, t.create = (n) => r(n), t;
}
function Au(r, t, e, n) {
  if (typeof r.setBigUint64 == "function")
    return r.setBigUint64(t, e, n);
  const s = BigInt(32), i = BigInt(4294967295), c = Number(e >> s & i), u = Number(e & i), p = n ? 4 : 0, m = n ? 0 : 4;
  r.setUint32(t + p, c, n), r.setUint32(t + m, u, n);
}
class Na extends zs {
  constructor(t, e, n, s) {
    super(), this.blockLen = t, this.outputLen = e, this.padOffset = n, this.isLE = s, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = Ki(this.buffer);
  }
  update(t) {
    ze.exists(this);
    const { view: e, buffer: n, blockLen: s } = this;
    t = vn(t);
    const i = t.length;
    for (let c = 0; c < i; ) {
      const u = Math.min(s - this.pos, i - c);
      if (u === s) {
        const p = Ki(t);
        for (; s <= i - c; c += s)
          this.process(p, c);
        continue;
      }
      n.set(t.subarray(c, c + u), this.pos), this.pos += u, c += u, this.pos === s && (this.process(e, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    ze.exists(this), ze.output(t, this), this.finished = !0;
    const { buffer: e, view: n, blockLen: s, isLE: i } = this;
    let { pos: c } = this;
    e[c++] = 128, this.buffer.subarray(c).fill(0), this.padOffset > s - c && (this.process(n, 0), c = 0);
    for (let p = c; p < s; p++)
      e[p] = 0;
    Au(n, s - 8, BigInt(this.length * 8), i), this.process(n, 0);
    const u = Ki(t);
    this.get().forEach((p, m) => u.setUint32(4 * m, p, i));
  }
  digest() {
    const { buffer: t, outputLen: e } = this;
    this.digestInto(t);
    const n = t.slice(0, e);
    return this.destroy(), n;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: e, buffer: n, length: s, finished: i, destroyed: c, pos: u } = this;
    return t.length = s, t.pos = u, t.finished = i, t.destroyed = c, s % e && t.buffer.set(n), t;
  }
}
const Rn = BigInt(2 ** 32 - 1), Is = BigInt(32);
function Ra(r, t = !1) {
  return t ? { h: Number(r & Rn), l: Number(r >> Is & Rn) } : { h: Number(r >> Is & Rn) | 0, l: Number(r & Rn) | 0 };
}
function bu(r, t = !1) {
  let e = new Uint32Array(r.length), n = new Uint32Array(r.length);
  for (let s = 0; s < r.length; s++) {
    const { h: i, l: c } = Ra(r[s], t);
    [e[s], n[s]] = [i, c];
  }
  return [e, n];
}
const xu = (r, t) => BigInt(r >>> 0) << Is | BigInt(t >>> 0), Eu = (r, t, e) => r >>> e, vu = (r, t, e) => r << 32 - e | t >>> e, Bu = (r, t, e) => r >>> e | t << 32 - e, Iu = (r, t, e) => r << 32 - e | t >>> e, Su = (r, t, e) => r << 64 - e | t >>> e - 32, Mu = (r, t, e) => r >>> e - 32 | t << 64 - e, _u = (r, t) => t, ku = (r, t) => r, Tu = (r, t, e) => r << e | t >>> 32 - e, Cu = (r, t, e) => t << e | r >>> 32 - e, Nu = (r, t, e) => t << e - 32 | r >>> 64 - e, Ru = (r, t, e) => r << e - 32 | t >>> 64 - e;
function Lu(r, t, e, n) {
  const s = (t >>> 0) + (n >>> 0);
  return { h: r + e + (s / 2 ** 32 | 0) | 0, l: s | 0 };
}
const Uu = (r, t, e) => (r >>> 0) + (t >>> 0) + (e >>> 0), Ou = (r, t, e, n) => t + e + n + (r / 2 ** 32 | 0) | 0, Fu = (r, t, e, n) => (r >>> 0) + (t >>> 0) + (e >>> 0) + (n >>> 0), Du = (r, t, e, n, s) => t + e + n + s + (r / 2 ** 32 | 0) | 0, Pu = (r, t, e, n, s) => (r >>> 0) + (t >>> 0) + (e >>> 0) + (n >>> 0) + (s >>> 0), zu = (r, t, e, n, s, i) => t + e + n + s + i + (r / 2 ** 32 | 0) | 0, ht = {
  fromBig: Ra,
  split: bu,
  toBig: xu,
  shrSH: Eu,
  shrSL: vu,
  rotrSH: Bu,
  rotrSL: Iu,
  rotrBH: Su,
  rotrBL: Mu,
  rotr32H: _u,
  rotr32L: ku,
  rotlSH: Tu,
  rotlSL: Cu,
  rotlBH: Nu,
  rotlBL: Ru,
  add: Lu,
  add3L: Uu,
  add3H: Ou,
  add4L: Fu,
  add4H: Du,
  add5H: zu,
  add5L: Pu
}, [Hu, Gu] = ht.split([
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
].map((r) => BigInt(r))), dr = new Uint32Array(80), pr = new Uint32Array(80);
class Hs extends Na {
  constructor() {
    super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
  }
  get() {
    const { Ah: t, Al: e, Bh: n, Bl: s, Ch: i, Cl: c, Dh: u, Dl: p, Eh: m, El: A, Fh: S, Fl: T, Gh: I, Gl: C, Hh: k, Hl: R } = this;
    return [t, e, n, s, i, c, u, p, m, A, S, T, I, C, k, R];
  }
  set(t, e, n, s, i, c, u, p, m, A, S, T, I, C, k, R) {
    this.Ah = t | 0, this.Al = e | 0, this.Bh = n | 0, this.Bl = s | 0, this.Ch = i | 0, this.Cl = c | 0, this.Dh = u | 0, this.Dl = p | 0, this.Eh = m | 0, this.El = A | 0, this.Fh = S | 0, this.Fl = T | 0, this.Gh = I | 0, this.Gl = C | 0, this.Hh = k | 0, this.Hl = R | 0;
  }
  process(t, e) {
    for (let L = 0; L < 16; L++, e += 4)
      dr[L] = t.getUint32(e), pr[L] = t.getUint32(e += 4);
    for (let L = 16; L < 80; L++) {
      const H = dr[L - 15] | 0, P = pr[L - 15] | 0, Q = ht.rotrSH(H, P, 1) ^ ht.rotrSH(H, P, 8) ^ ht.shrSH(H, P, 7), W = ht.rotrSL(H, P, 1) ^ ht.rotrSL(H, P, 8) ^ ht.shrSL(H, P, 7), Y = dr[L - 2] | 0, wt = pr[L - 2] | 0, Nt = ht.rotrSH(Y, wt, 19) ^ ht.rotrBH(Y, wt, 61) ^ ht.shrSH(Y, wt, 6), dt = ht.rotrSL(Y, wt, 19) ^ ht.rotrBL(Y, wt, 61) ^ ht.shrSL(Y, wt, 6), Rt = ht.add4L(W, dt, pr[L - 7], pr[L - 16]), v = ht.add4H(Rt, Q, Nt, dr[L - 7], dr[L - 16]);
      dr[L] = v | 0, pr[L] = Rt | 0;
    }
    let { Ah: n, Al: s, Bh: i, Bl: c, Ch: u, Cl: p, Dh: m, Dl: A, Eh: S, El: T, Fh: I, Fl: C, Gh: k, Gl: R, Hh: U, Hl: D } = this;
    for (let L = 0; L < 80; L++) {
      const H = ht.rotrSH(S, T, 14) ^ ht.rotrSH(S, T, 18) ^ ht.rotrBH(S, T, 41), P = ht.rotrSL(S, T, 14) ^ ht.rotrSL(S, T, 18) ^ ht.rotrBL(S, T, 41), Q = S & I ^ ~S & k, W = T & C ^ ~T & R, Y = ht.add5L(D, P, W, Gu[L], pr[L]), wt = ht.add5H(Y, U, H, Q, Hu[L], dr[L]), Nt = Y | 0, dt = ht.rotrSH(n, s, 28) ^ ht.rotrBH(n, s, 34) ^ ht.rotrBH(n, s, 39), Rt = ht.rotrSL(n, s, 28) ^ ht.rotrBL(n, s, 34) ^ ht.rotrBL(n, s, 39), v = n & i ^ n & u ^ i & u, f = s & c ^ s & p ^ c & p;
      U = k | 0, D = R | 0, k = I | 0, R = C | 0, I = S | 0, C = T | 0, { h: S, l: T } = ht.add(m | 0, A | 0, wt | 0, Nt | 0), m = u | 0, A = p | 0, u = i | 0, p = c | 0, i = n | 0, c = s | 0;
      const g = ht.add3L(Nt, Rt, f);
      n = ht.add3H(g, wt, dt, v), s = g | 0;
    }
    ({ h: n, l: s } = ht.add(this.Ah | 0, this.Al | 0, n | 0, s | 0)), { h: i, l: c } = ht.add(this.Bh | 0, this.Bl | 0, i | 0, c | 0), { h: u, l: p } = ht.add(this.Ch | 0, this.Cl | 0, u | 0, p | 0), { h: m, l: A } = ht.add(this.Dh | 0, this.Dl | 0, m | 0, A | 0), { h: S, l: T } = ht.add(this.Eh | 0, this.El | 0, S | 0, T | 0), { h: I, l: C } = ht.add(this.Fh | 0, this.Fl | 0, I | 0, C | 0), { h: k, l: R } = ht.add(this.Gh | 0, this.Gl | 0, k | 0, R | 0), { h: U, l: D } = ht.add(this.Hh | 0, this.Hl | 0, U | 0, D | 0), this.set(n, s, i, c, u, p, m, A, S, T, I, C, k, R, U, D);
  }
  roundClean() {
    dr.fill(0), pr.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
class Qu extends Hs {
  constructor() {
    super(), this.Ah = 573645204, this.Al = -64227540, this.Bh = -1621794909, this.Bl = -934517566, this.Ch = 596883563, this.Cl = 1867755857, this.Dh = -1774684391, this.Dl = 1497426621, this.Eh = -1775747358, this.El = -1467023389, this.Fh = -1101128155, this.Fl = 1401305490, this.Gh = 721525244, this.Gl = 746961066, this.Hh = 246885852, this.Hl = -2117784414, this.outputLen = 32;
  }
}
class Wu extends Hs {
  constructor() {
    super(), this.Ah = -876896931, this.Al = -1056596264, this.Bh = 1654270250, this.Bl = 914150663, this.Ch = -1856437926, this.Cl = 812702999, this.Dh = 355462360, this.Dl = -150054599, this.Eh = 1731405415, this.El = -4191439, this.Fh = -1900787065, this.Fl = 1750603025, this.Gh = -619958771, this.Gl = 1694076839, this.Hh = 1203062813, this.Hl = -1090891868, this.outputLen = 48;
  }
}
const Ku = Bn(() => new Hs());
Bn(() => new Qu());
Bn(() => new Wu());
const qu = {}, Gs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qu
}, Symbol.toStringTag, { value: "Module" }));
/*! noble-ed25519 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
const Ie = BigInt(0), bt = BigInt(1), qr = BigInt(2), To = BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"), Wt = Object.freeze({
  a: BigInt(-1),
  d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
  P: BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"),
  l: To,
  n: To,
  h: BigInt(8),
  Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
  Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960")
}), La = BigInt("0x10000000000000000000000000000000000000000000000000000000000000000"), fn = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt("6853475219497561581579357271197624642482790079785650197046958215289687604742");
const Yu = BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235"), ju = BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578"), Vu = BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838"), Zu = BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952");
class Et {
  constructor(t, e, n, s) {
    this.x = t, this.y = e, this.z = n, this.t = s;
  }
  static fromAffine(t) {
    if (!(t instanceof Vt))
      throw new TypeError("ExtendedPoint#fromAffine: expected Point");
    return t.equals(Vt.ZERO) ? Et.ZERO : new Et(t.x, t.y, bt, K(t.x * t.y));
  }
  static toAffineBatch(t) {
    const e = $u(t.map((n) => n.z));
    return t.map((n, s) => n.toAffine(e[s]));
  }
  static normalizeZ(t) {
    return this.toAffineBatch(t).map(this.fromAffine);
  }
  equals(t) {
    Co(t);
    const { x: e, y: n, z: s } = this, { x: i, y: c, z: u } = t, p = K(e * u), m = K(i * s), A = K(n * u), S = K(c * s);
    return p === m && A === S;
  }
  negate() {
    return new Et(K(-this.x), this.y, this.z, K(-this.t));
  }
  double() {
    const { x: t, y: e, z: n } = this, { a: s } = Wt, i = K(t * t), c = K(e * e), u = K(qr * K(n * n)), p = K(s * i), m = t + e, A = K(K(m * m) - i - c), S = p + c, T = S - u, I = p - c, C = K(A * T), k = K(S * I), R = K(A * I), U = K(T * S);
    return new Et(C, k, U, R);
  }
  add(t) {
    Co(t);
    const { x: e, y: n, z: s, t: i } = this, { x: c, y: u, z: p, t: m } = t, A = K((n - e) * (u + c)), S = K((n + e) * (u - c)), T = K(S - A);
    if (T === Ie)
      return this.double();
    const I = K(s * qr * m), C = K(i * qr * p), k = C + I, R = S + A, U = C - I, D = K(k * T), L = K(R * U), H = K(k * U), P = K(T * R);
    return new Et(D, L, P, H);
  }
  subtract(t) {
    return this.add(t.negate());
  }
  precomputeWindow(t) {
    const e = 1 + 256 / t, n = [];
    let s = this, i = s;
    for (let c = 0; c < e; c++) {
      i = s, n.push(i);
      for (let u = 1; u < 2 ** (t - 1); u++)
        i = i.add(s), n.push(i);
      s = i.double();
    }
    return n;
  }
  wNAF(t, e) {
    !e && this.equals(Et.BASE) && (e = Vt.BASE);
    const n = e && e._WINDOW_SIZE || 1;
    if (256 % n)
      throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");
    let s = e && Ss.get(e);
    s || (s = this.precomputeWindow(n), e && n !== 1 && (s = Et.normalizeZ(s), Ss.set(e, s)));
    let i = Et.ZERO, c = Et.ZERO;
    const u = 1 + 256 / n, p = 2 ** (n - 1), m = BigInt(2 ** n - 1), A = 2 ** n, S = BigInt(n);
    for (let T = 0; T < u; T++) {
      const I = T * p;
      let C = Number(t & m);
      if (t >>= S, C > p && (C -= A, t += bt), C === 0) {
        let k = s[I];
        T % 2 && (k = k.negate()), c = c.add(k);
      } else {
        let k = s[I + Math.abs(C) - 1];
        C < 0 && (k = k.negate()), i = i.add(k);
      }
    }
    return Et.normalizeZ([i, c])[0];
  }
  multiply(t, e) {
    return this.wNAF(jn(t, Wt.l), e);
  }
  multiplyUnsafe(t) {
    let e = jn(t, Wt.l, !1);
    const n = Et.BASE, s = Et.ZERO;
    if (e === Ie)
      return s;
    if (this.equals(s) || e === bt)
      return this;
    if (this.equals(n))
      return this.wNAF(e);
    let i = s, c = this;
    for (; e > Ie; )
      e & bt && (i = i.add(c)), c = c.double(), e >>= bt;
    return i;
  }
  isSmallOrder() {
    return this.multiplyUnsafe(Wt.h).equals(Et.ZERO);
  }
  isTorsionFree() {
    return this.multiplyUnsafe(Wt.l).equals(Et.ZERO);
  }
  toAffine(t = ai(this.z)) {
    const { x: e, y: n, z: s } = this, i = K(e * t), c = K(n * t);
    if (K(s * t) !== bt)
      throw new Error("invZ was invalid");
    return new Vt(i, c);
  }
  fromRistrettoBytes() {
    Yi();
  }
  toRistrettoBytes() {
    Yi();
  }
  fromRistrettoHash() {
    Yi();
  }
}
Et.BASE = new Et(Wt.Gx, Wt.Gy, bt, K(Wt.Gx * Wt.Gy));
Et.ZERO = new Et(Ie, bt, bt, Ie);
function Co(r) {
  if (!(r instanceof Et))
    throw new TypeError("ExtendedPoint expected");
}
function qi(r) {
  if (!(r instanceof je))
    throw new TypeError("RistrettoPoint expected");
}
function Yi() {
  throw new Error("Legacy method: switch to RistrettoPoint");
}
class je {
  constructor(t) {
    this.ep = t;
  }
  static calcElligatorRistrettoMap(t) {
    const { d: e } = Wt, n = K(fn * t * t), s = K((n + bt) * Vu);
    let i = BigInt(-1);
    const c = K((i - e * n) * K(n + e));
    let { isValid: u, value: p } = Ws(s, c), m = K(p * t);
    mr(m) || (m = K(-m)), u || (p = m), u || (i = n);
    const A = K(i * (n - bt) * Zu - c), S = p * p, T = K((p + p) * c), I = K(A * Yu), C = K(bt - S), k = K(bt + S);
    return new Et(K(T * k), K(C * I), K(I * k), K(T * C));
  }
  static hashToCurve(t) {
    t = Ir(t, 64);
    const e = ji(t.slice(0, 32)), n = this.calcElligatorRistrettoMap(e), s = ji(t.slice(32, 64)), i = this.calcElligatorRistrettoMap(s);
    return new je(n.add(i));
  }
  static fromHex(t) {
    t = Ir(t, 32);
    const { a: e, d: n } = Wt, s = "RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint", i = ji(t);
    if (!ef(pn(i), t) || mr(i))
      throw new Error(s);
    const c = K(i * i), u = K(bt + e * c), p = K(bt - e * c), m = K(u * u), A = K(p * p), S = K(e * n * m - A), { isValid: T, value: I } = Ro(K(S * A)), C = K(I * p), k = K(I * C * S);
    let R = K((i + i) * C);
    mr(R) && (R = K(-R));
    const U = K(u * k), D = K(R * U);
    if (!T || mr(D) || U === Ie)
      throw new Error(s);
    return new je(new Et(R, U, bt, D));
  }
  toRawBytes() {
    let { x: t, y: e, z: n, t: s } = this.ep;
    const i = K(K(n + e) * K(n - e)), c = K(t * e), u = K(c * c), { value: p } = Ro(K(i * u)), m = K(p * i), A = K(p * c), S = K(m * A * s);
    let T;
    if (mr(s * S)) {
      let C = K(e * fn), k = K(t * fn);
      t = C, e = k, T = K(m * ju);
    } else
      T = A;
    mr(t * S) && (e = K(-e));
    let I = K((n - e) * T);
    return mr(I) && (I = K(-I)), pn(I);
  }
  toHex() {
    return In(this.toRawBytes());
  }
  toString() {
    return this.toHex();
  }
  equals(t) {
    qi(t);
    const e = this.ep, n = t.ep, s = K(e.x * n.y) === K(e.y * n.x), i = K(e.y * n.y) === K(e.x * n.x);
    return s || i;
  }
  add(t) {
    return qi(t), new je(this.ep.add(t.ep));
  }
  subtract(t) {
    return qi(t), new je(this.ep.subtract(t.ep));
  }
  multiply(t) {
    return new je(this.ep.multiply(t));
  }
  multiplyUnsafe(t) {
    return new je(this.ep.multiplyUnsafe(t));
  }
}
je.BASE = new je(Et.BASE);
je.ZERO = new je(Et.ZERO);
const Ss = /* @__PURE__ */ new WeakMap();
class Vt {
  constructor(t, e) {
    this.x = t, this.y = e;
  }
  _setWindowSize(t) {
    this._WINDOW_SIZE = t, Ss.delete(this);
  }
  static fromHex(t, e = !0) {
    const { d: n, P: s } = Wt;
    t = Ir(t, 32);
    const i = t.slice();
    i[31] = t[31] & -129;
    const c = Sn(i);
    if (e && c >= s)
      throw new Error("Expected 0 < hex < P");
    if (!e && c >= La)
      throw new Error("Expected 0 < hex < 2**256");
    const u = K(c * c), p = K(u - bt), m = K(n * u + bt);
    let { isValid: A, value: S } = Ws(p, m);
    if (!A)
      throw new Error("Point.fromHex: invalid y coordinate");
    const T = (S & bt) === bt;
    return (t[31] & 128) !== 0 !== T && (S = K(-S)), new Vt(S, c);
  }
  static async fromPrivateKey(t) {
    return (await Da(t)).point;
  }
  toRawBytes() {
    const t = pn(this.y);
    return t[31] |= this.x & bt ? 128 : 0, t;
  }
  toHex() {
    return In(this.toRawBytes());
  }
  toX25519() {
    const { y: t } = this, e = K((bt + t) * ai(bt - t));
    return pn(e);
  }
  isTorsionFree() {
    return Et.fromAffine(this).isTorsionFree();
  }
  equals(t) {
    return this.x === t.x && this.y === t.y;
  }
  negate() {
    return new Vt(K(-this.x), this.y);
  }
  add(t) {
    return Et.fromAffine(this).add(Et.fromAffine(t)).toAffine();
  }
  subtract(t) {
    return this.add(t.negate());
  }
  multiply(t) {
    return Et.fromAffine(this).multiply(t, this).toAffine();
  }
}
Vt.BASE = new Vt(Wt.Gx, Wt.Gy);
Vt.ZERO = new Vt(Ie, bt);
class dn {
  constructor(t, e) {
    this.r = t, this.s = e, this.assertValidity();
  }
  static fromHex(t) {
    const e = Ir(t, 64), n = Vt.fromHex(e.slice(0, 32), !1), s = Sn(e.slice(32, 64));
    return new dn(n, s);
  }
  assertValidity() {
    const { r: t, s: e } = this;
    if (!(t instanceof Vt))
      throw new Error("Expected Point instance");
    return jn(e, Wt.l, !1), this;
  }
  toRawBytes() {
    const t = new Uint8Array(64);
    return t.set(this.r.toRawBytes()), t.set(pn(this.s), 32), t;
  }
  toHex() {
    return In(this.toRawBytes());
  }
}
function No(...r) {
  if (!r.every((n) => n instanceof Uint8Array))
    throw new Error("Expected Uint8Array list");
  if (r.length === 1)
    return r[0];
  const t = r.reduce((n, s) => n + s.length, 0), e = new Uint8Array(t);
  for (let n = 0, s = 0; n < r.length; n++) {
    const i = r[n];
    e.set(i, s), s += i.length;
  }
  return e;
}
const Xu = Array.from({ length: 256 }, (r, t) => t.toString(16).padStart(2, "0"));
function In(r) {
  if (!(r instanceof Uint8Array))
    throw new Error("Uint8Array expected");
  let t = "";
  for (let e = 0; e < r.length; e++)
    t += Xu[r[e]];
  return t;
}
function Qs(r) {
  if (typeof r != "string")
    throw new TypeError("hexToBytes: expected string, got " + typeof r);
  if (r.length % 2)
    throw new Error("hexToBytes: received invalid unpadded hex");
  const t = new Uint8Array(r.length / 2);
  for (let e = 0; e < t.length; e++) {
    const n = e * 2, s = r.slice(n, n + 2), i = Number.parseInt(s, 16);
    if (Number.isNaN(i) || i < 0)
      throw new Error("Invalid byte sequence");
    t[e] = i;
  }
  return t;
}
function Ua(r) {
  const e = r.toString(16).padStart(64, "0");
  return Qs(e);
}
function pn(r) {
  return Ua(r).reverse();
}
function mr(r) {
  return (K(r) & bt) === bt;
}
function Sn(r) {
  if (!(r instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  return BigInt("0x" + In(Uint8Array.from(r).reverse()));
}
const Ju = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
function ji(r) {
  return K(Sn(r) & Ju);
}
function K(r, t = Wt.P) {
  const e = r % t;
  return e >= Ie ? e : t + e;
}
function ai(r, t = Wt.P) {
  if (r === Ie || t <= Ie)
    throw new Error(`invert: expected positive integers, got n=${r} mod=${t}`);
  let e = K(r, t), n = t, s = Ie, i = bt;
  for (; e !== Ie; ) {
    const u = n / e, p = n % e, m = s - i * u;
    n = e, e = p, s = i, i = m;
  }
  if (n !== bt)
    throw new Error("invert: does not exist");
  return K(s, t);
}
function $u(r, t = Wt.P) {
  const e = new Array(r.length), n = r.reduce((i, c, u) => c === Ie ? i : (e[u] = i, K(i * c, t)), bt), s = ai(n, t);
  return r.reduceRight((i, c, u) => c === Ie ? i : (e[u] = K(i * e[u], t), K(i * c, t)), s), e;
}
function rr(r, t) {
  const { P: e } = Wt;
  let n = r;
  for (; t-- > Ie; )
    n *= n, n %= e;
  return n;
}
function tf(r) {
  const { P: t } = Wt, e = BigInt(5), n = BigInt(10), s = BigInt(20), i = BigInt(40), c = BigInt(80), p = r * r % t * r % t, m = rr(p, qr) * p % t, A = rr(m, bt) * r % t, S = rr(A, e) * A % t, T = rr(S, n) * S % t, I = rr(T, s) * T % t, C = rr(I, i) * I % t, k = rr(C, c) * C % t, R = rr(k, c) * C % t, U = rr(R, n) * S % t;
  return { pow_p_5_8: rr(U, qr) * r % t, b2: p };
}
function Ws(r, t) {
  const e = K(t * t * t), n = K(e * e * t), s = tf(r * n).pow_p_5_8;
  let i = K(r * e * s);
  const c = K(t * i * i), u = i, p = K(i * fn), m = c === r, A = c === K(-r), S = c === K(-r * fn);
  return m && (i = u), (A || S) && (i = p), mr(i) && (i = K(-i)), { isValid: m || A, value: i };
}
function Ro(r) {
  return Ws(bt, r);
}
function Yn(r) {
  return K(Sn(r), Wt.l);
}
function ef(r, t) {
  if (r.length !== t.length)
    return !1;
  for (let e = 0; e < r.length; e++)
    if (r[e] !== t[e])
      return !1;
  return !0;
}
function Ir(r, t) {
  const e = r instanceof Uint8Array ? Uint8Array.from(r) : Qs(r);
  if (typeof t == "number" && e.length !== t)
    throw new Error(`Expected ${t} bytes`);
  return e;
}
function jn(r, t, e = !0) {
  if (!t)
    throw new TypeError("Specify max value");
  if (typeof r == "number" && Number.isSafeInteger(r) && (r = BigInt(r)), typeof r == "bigint" && r < t) {
    if (e) {
      if (Ie < r)
        return r;
    } else if (Ie <= r)
      return r;
  }
  throw new TypeError("Expected valid scalar: 0 < scalar < max");
}
function rf(r) {
  return r[0] &= 248, r[31] &= 127, r[31] |= 64, r;
}
function Oa(r) {
  if (r = typeof r == "bigint" || typeof r == "number" ? Ua(jn(r, La)) : Ir(r), r.length !== 32)
    throw new Error("Expected 32 bytes");
  return r;
}
function Fa(r) {
  const t = rf(r.slice(0, 32)), e = r.slice(32, 64), n = Yn(t), s = Vt.BASE.multiply(n), i = s.toRawBytes();
  return { head: t, prefix: e, scalar: n, point: s, pointBytes: i };
}
let ln;
function Vn(...r) {
  if (typeof ln != "function")
    throw new Error("utils.sha512Sync must be set to use sync methods");
  return ln(...r);
}
async function Da(r) {
  return Fa(await Zr.sha512(Oa(r)));
}
function Ks(r) {
  return Fa(Vn(Oa(r)));
}
function nf(r) {
  return Ks(r).pointBytes;
}
function sf(r, t) {
  r = Ir(r);
  const { prefix: e, scalar: n, pointBytes: s } = Ks(t), i = Yn(Vn(e, r)), c = Vt.BASE.multiply(i), u = Yn(Vn(c.toRawBytes(), s, r)), p = K(i + u * n, Wt.l);
  return new dn(c, p).toRawBytes();
}
function of(r, t, e) {
  t = Ir(t), e instanceof Vt || (e = Vt.fromHex(e, !1));
  const { r: n, s } = r instanceof dn ? r.assertValidity() : dn.fromHex(r), i = Et.BASE.multiplyUnsafe(s);
  return { r: n, s, SB: i, pub: e, msg: t };
}
function af(r, t, e, n) {
  const s = Yn(n), i = Et.fromAffine(r).multiplyUnsafe(s);
  return Et.fromAffine(t).add(i).subtract(e).multiplyUnsafe(Wt.h).equals(Et.ZERO);
}
function cf(r, t, e) {
  const { r: n, SB: s, msg: i, pub: c } = of(r, t, e), u = Vn(n.toRawBytes(), c.toRawBytes(), i);
  return af(c, n, s, u);
}
const Pa = {
  getExtendedPublicKey: Ks,
  getPublicKey: nf,
  sign: sf,
  verify: cf
};
Vt.BASE._setWindowSize(8);
const gr = {
  node: Gs,
  web: typeof self == "object" && "crypto" in self ? self.crypto : void 0
}, Zr = {
  bytesToHex: In,
  hexToBytes: Qs,
  concatBytes: No,
  getExtendedPublicKey: Da,
  mod: K,
  invert: ai,
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
  hashToPrivateScalar: (r) => {
    if (r = Ir(r), r.length < 40 || r.length > 1024)
      throw new Error("Expected 40-1024 bytes of private key as per FIPS 186");
    return K(Sn(r), Wt.l - bt) + bt;
  },
  randomBytes: (r = 32) => {
    if (gr.web)
      return gr.web.getRandomValues(new Uint8Array(r));
    if (gr.node) {
      const { randomBytes: t } = gr.node;
      return new Uint8Array(t(r).buffer);
    } else
      throw new Error("The environment doesn't have randomBytes function");
  },
  randomPrivateKey: () => Zr.randomBytes(32),
  sha512: async (...r) => {
    const t = No(...r);
    if (gr.web) {
      const e = await gr.web.subtle.digest("SHA-512", t.buffer);
      return new Uint8Array(e);
    } else {
      if (gr.node)
        return Uint8Array.from(gr.node.createHash("sha512").update(t).digest());
      throw new Error("The environment doesn't have sha512 function");
    }
  },
  precompute(r = 8, t = Vt.BASE) {
    const e = t.equals(Vt.BASE) ? t : new Vt(t.x, t.y);
    return e._setWindowSize(r), e.multiply(qr), e;
  },
  sha512Sync: void 0
};
Object.defineProperties(Zr, {
  sha512Sync: {
    configurable: !1,
    get() {
      return ln;
    },
    set(r) {
      ln || (ln = r);
    }
  }
});
var qs = { exports: {} };
const uf = /* @__PURE__ */ Ps(Gs);
(function(r) {
  (function(t, e) {
    function n(v, f) {
      if (!v)
        throw new Error(f || "Assertion failed");
    }
    function s(v, f) {
      v.super_ = f;
      var g = function() {
      };
      g.prototype = f.prototype, v.prototype = new g(), v.prototype.constructor = v;
    }
    function i(v, f, g) {
      if (i.isBN(v))
        return v;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, v !== null && ((f === "le" || f === "be") && (g = f, f = 10), this._init(v || 0, f || 10, g || "be"));
    }
    typeof t == "object" ? t.exports = i : e.BN = i, i.BN = i, i.wordSize = 26;
    var c;
    try {
      typeof window < "u" && typeof window.Buffer < "u" ? c = window.Buffer : c = uf.Buffer;
    } catch {
    }
    i.isBN = function(f) {
      return f instanceof i ? !0 : f !== null && typeof f == "object" && f.constructor.wordSize === i.wordSize && Array.isArray(f.words);
    }, i.max = function(f, g) {
      return f.cmp(g) > 0 ? f : g;
    }, i.min = function(f, g) {
      return f.cmp(g) < 0 ? f : g;
    }, i.prototype._init = function(f, g, y) {
      if (typeof f == "number")
        return this._initNumber(f, g, y);
      if (typeof f == "object")
        return this._initArray(f, g, y);
      g === "hex" && (g = 16), n(g === (g | 0) && g >= 2 && g <= 36), f = f.toString().replace(/\s+/g, "");
      var E = 0;
      f[0] === "-" && (E++, this.negative = 1), E < f.length && (g === 16 ? this._parseHex(f, E, y) : (this._parseBase(f, g, E), y === "le" && this._initArray(this.toArray(), g, y)));
    }, i.prototype._initNumber = function(f, g, y) {
      f < 0 && (this.negative = 1, f = -f), f < 67108864 ? (this.words = [f & 67108863], this.length = 1) : f < 4503599627370496 ? (this.words = [
        f & 67108863,
        f / 67108864 & 67108863
      ], this.length = 2) : (n(f < 9007199254740992), this.words = [
        f & 67108863,
        f / 67108864 & 67108863,
        1
      ], this.length = 3), y === "le" && this._initArray(this.toArray(), g, y);
    }, i.prototype._initArray = function(f, g, y) {
      if (n(typeof f.length == "number"), f.length <= 0)
        return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(f.length / 3), this.words = new Array(this.length);
      for (var E = 0; E < this.length; E++)
        this.words[E] = 0;
      var B, N, F = 0;
      if (y === "be")
        for (E = f.length - 1, B = 0; E >= 0; E -= 3)
          N = f[E] | f[E - 1] << 8 | f[E - 2] << 16, this.words[B] |= N << F & 67108863, this.words[B + 1] = N >>> 26 - F & 67108863, F += 24, F >= 26 && (F -= 26, B++);
      else if (y === "le")
        for (E = 0, B = 0; E < f.length; E += 3)
          N = f[E] | f[E + 1] << 8 | f[E + 2] << 16, this.words[B] |= N << F & 67108863, this.words[B + 1] = N >>> 26 - F & 67108863, F += 24, F >= 26 && (F -= 26, B++);
      return this._strip();
    };
    function u(v, f) {
      var g = v.charCodeAt(f);
      if (g >= 48 && g <= 57)
        return g - 48;
      if (g >= 65 && g <= 70)
        return g - 55;
      if (g >= 97 && g <= 102)
        return g - 87;
      n(!1, "Invalid character in " + v);
    }
    function p(v, f, g) {
      var y = u(v, g);
      return g - 1 >= f && (y |= u(v, g - 1) << 4), y;
    }
    i.prototype._parseHex = function(f, g, y) {
      this.length = Math.ceil((f.length - g) / 6), this.words = new Array(this.length);
      for (var E = 0; E < this.length; E++)
        this.words[E] = 0;
      var B = 0, N = 0, F;
      if (y === "be")
        for (E = f.length - 1; E >= g; E -= 2)
          F = p(f, g, E) << B, this.words[N] |= F & 67108863, B >= 18 ? (B -= 18, N += 1, this.words[N] |= F >>> 26) : B += 8;
      else {
        var x = f.length - g;
        for (E = x % 2 === 0 ? g + 1 : g; E < f.length; E += 2)
          F = p(f, g, E) << B, this.words[N] |= F & 67108863, B >= 18 ? (B -= 18, N += 1, this.words[N] |= F >>> 26) : B += 8;
      }
      this._strip();
    };
    function m(v, f, g, y) {
      for (var E = 0, B = 0, N = Math.min(v.length, g), F = f; F < N; F++) {
        var x = v.charCodeAt(F) - 48;
        E *= y, x >= 49 ? B = x - 49 + 10 : x >= 17 ? B = x - 17 + 10 : B = x, n(x >= 0 && B < y, "Invalid character"), E += B;
      }
      return E;
    }
    i.prototype._parseBase = function(f, g, y) {
      this.words = [0], this.length = 1;
      for (var E = 0, B = 1; B <= 67108863; B *= g)
        E++;
      E--, B = B / g | 0;
      for (var N = f.length - y, F = N % E, x = Math.min(N, N - F) + y, d = 0, M = y; M < x; M += E)
        d = m(f, M, M + E, g), this.imuln(B), this.words[0] + d < 67108864 ? this.words[0] += d : this._iaddn(d);
      if (F !== 0) {
        var tt = 1;
        for (d = m(f, M, f.length, g), M = 0; M < F; M++)
          tt *= g;
        this.imuln(tt), this.words[0] + d < 67108864 ? this.words[0] += d : this._iaddn(d);
      }
      this._strip();
    }, i.prototype.copy = function(f) {
      f.words = new Array(this.length);
      for (var g = 0; g < this.length; g++)
        f.words[g] = this.words[g];
      f.length = this.length, f.negative = this.negative, f.red = this.red;
    };
    function A(v, f) {
      v.words = f.words, v.length = f.length, v.negative = f.negative, v.red = f.red;
    }
    if (i.prototype._move = function(f) {
      A(f, this);
    }, i.prototype.clone = function() {
      var f = new i(null);
      return this.copy(f), f;
    }, i.prototype._expand = function(f) {
      for (; this.length < f; )
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
        i.prototype[Symbol.for("nodejs.util.inspect.custom")] = S;
      } catch {
        i.prototype.inspect = S;
      }
    else
      i.prototype.inspect = S;
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
    ], I = [
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
    ], C = [
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
    i.prototype.toString = function(f, g) {
      f = f || 10, g = g | 0 || 1;
      var y;
      if (f === 16 || f === "hex") {
        y = "";
        for (var E = 0, B = 0, N = 0; N < this.length; N++) {
          var F = this.words[N], x = ((F << E | B) & 16777215).toString(16);
          B = F >>> 24 - E & 16777215, E += 2, E >= 26 && (E -= 26, N--), B !== 0 || N !== this.length - 1 ? y = T[6 - x.length] + x + y : y = x + y;
        }
        for (B !== 0 && (y = B.toString(16) + y); y.length % g !== 0; )
          y = "0" + y;
        return this.negative !== 0 && (y = "-" + y), y;
      }
      if (f === (f | 0) && f >= 2 && f <= 36) {
        var d = I[f], M = C[f];
        y = "";
        var tt = this.clone();
        for (tt.negative = 0; !tt.isZero(); ) {
          var it = tt.modrn(M).toString(f);
          tt = tt.idivn(M), tt.isZero() ? y = it + y : y = T[d - it.length] + it + y;
        }
        for (this.isZero() && (y = "0" + y); y.length % g !== 0; )
          y = "0" + y;
        return this.negative !== 0 && (y = "-" + y), y;
      }
      n(!1, "Base should be between 2 and 36");
    }, i.prototype.toNumber = function() {
      var f = this.words[0];
      return this.length === 2 ? f += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? f += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -f : f;
    }, i.prototype.toJSON = function() {
      return this.toString(16, 2);
    }, c && (i.prototype.toBuffer = function(f, g) {
      return this.toArrayLike(c, f, g);
    }), i.prototype.toArray = function(f, g) {
      return this.toArrayLike(Array, f, g);
    };
    var k = function(f, g) {
      return f.allocUnsafe ? f.allocUnsafe(g) : new f(g);
    };
    i.prototype.toArrayLike = function(f, g, y) {
      this._strip();
      var E = this.byteLength(), B = y || Math.max(1, E);
      n(E <= B, "byte array longer than desired length"), n(B > 0, "Requested array length <= 0");
      var N = k(f, B), F = g === "le" ? "LE" : "BE";
      return this["_toArrayLike" + F](N, E), N;
    }, i.prototype._toArrayLikeLE = function(f, g) {
      for (var y = 0, E = 0, B = 0, N = 0; B < this.length; B++) {
        var F = this.words[B] << N | E;
        f[y++] = F & 255, y < f.length && (f[y++] = F >> 8 & 255), y < f.length && (f[y++] = F >> 16 & 255), N === 6 ? (y < f.length && (f[y++] = F >> 24 & 255), E = 0, N = 0) : (E = F >>> 24, N += 2);
      }
      if (y < f.length)
        for (f[y++] = E; y < f.length; )
          f[y++] = 0;
    }, i.prototype._toArrayLikeBE = function(f, g) {
      for (var y = f.length - 1, E = 0, B = 0, N = 0; B < this.length; B++) {
        var F = this.words[B] << N | E;
        f[y--] = F & 255, y >= 0 && (f[y--] = F >> 8 & 255), y >= 0 && (f[y--] = F >> 16 & 255), N === 6 ? (y >= 0 && (f[y--] = F >> 24 & 255), E = 0, N = 0) : (E = F >>> 24, N += 2);
      }
      if (y >= 0)
        for (f[y--] = E; y >= 0; )
          f[y--] = 0;
    }, Math.clz32 ? i.prototype._countBits = function(f) {
      return 32 - Math.clz32(f);
    } : i.prototype._countBits = function(f) {
      var g = f, y = 0;
      return g >= 4096 && (y += 13, g >>>= 13), g >= 64 && (y += 7, g >>>= 7), g >= 8 && (y += 4, g >>>= 4), g >= 2 && (y += 2, g >>>= 2), y + g;
    }, i.prototype._zeroBits = function(f) {
      if (f === 0)
        return 26;
      var g = f, y = 0;
      return (g & 8191) === 0 && (y += 13, g >>>= 13), (g & 127) === 0 && (y += 7, g >>>= 7), (g & 15) === 0 && (y += 4, g >>>= 4), (g & 3) === 0 && (y += 2, g >>>= 2), (g & 1) === 0 && y++, y;
    }, i.prototype.bitLength = function() {
      var f = this.words[this.length - 1], g = this._countBits(f);
      return (this.length - 1) * 26 + g;
    };
    function R(v) {
      for (var f = new Array(v.bitLength()), g = 0; g < f.length; g++) {
        var y = g / 26 | 0, E = g % 26;
        f[g] = v.words[y] >>> E & 1;
      }
      return f;
    }
    i.prototype.zeroBits = function() {
      if (this.isZero())
        return 0;
      for (var f = 0, g = 0; g < this.length; g++) {
        var y = this._zeroBits(this.words[g]);
        if (f += y, y !== 26)
          break;
      }
      return f;
    }, i.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, i.prototype.toTwos = function(f) {
      return this.negative !== 0 ? this.abs().inotn(f).iaddn(1) : this.clone();
    }, i.prototype.fromTwos = function(f) {
      return this.testn(f - 1) ? this.notn(f).iaddn(1).ineg() : this.clone();
    }, i.prototype.isNeg = function() {
      return this.negative !== 0;
    }, i.prototype.neg = function() {
      return this.clone().ineg();
    }, i.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, i.prototype.iuor = function(f) {
      for (; this.length < f.length; )
        this.words[this.length++] = 0;
      for (var g = 0; g < f.length; g++)
        this.words[g] = this.words[g] | f.words[g];
      return this._strip();
    }, i.prototype.ior = function(f) {
      return n((this.negative | f.negative) === 0), this.iuor(f);
    }, i.prototype.or = function(f) {
      return this.length > f.length ? this.clone().ior(f) : f.clone().ior(this);
    }, i.prototype.uor = function(f) {
      return this.length > f.length ? this.clone().iuor(f) : f.clone().iuor(this);
    }, i.prototype.iuand = function(f) {
      var g;
      this.length > f.length ? g = f : g = this;
      for (var y = 0; y < g.length; y++)
        this.words[y] = this.words[y] & f.words[y];
      return this.length = g.length, this._strip();
    }, i.prototype.iand = function(f) {
      return n((this.negative | f.negative) === 0), this.iuand(f);
    }, i.prototype.and = function(f) {
      return this.length > f.length ? this.clone().iand(f) : f.clone().iand(this);
    }, i.prototype.uand = function(f) {
      return this.length > f.length ? this.clone().iuand(f) : f.clone().iuand(this);
    }, i.prototype.iuxor = function(f) {
      var g, y;
      this.length > f.length ? (g = this, y = f) : (g = f, y = this);
      for (var E = 0; E < y.length; E++)
        this.words[E] = g.words[E] ^ y.words[E];
      if (this !== g)
        for (; E < g.length; E++)
          this.words[E] = g.words[E];
      return this.length = g.length, this._strip();
    }, i.prototype.ixor = function(f) {
      return n((this.negative | f.negative) === 0), this.iuxor(f);
    }, i.prototype.xor = function(f) {
      return this.length > f.length ? this.clone().ixor(f) : f.clone().ixor(this);
    }, i.prototype.uxor = function(f) {
      return this.length > f.length ? this.clone().iuxor(f) : f.clone().iuxor(this);
    }, i.prototype.inotn = function(f) {
      n(typeof f == "number" && f >= 0);
      var g = Math.ceil(f / 26) | 0, y = f % 26;
      this._expand(g), y > 0 && g--;
      for (var E = 0; E < g; E++)
        this.words[E] = ~this.words[E] & 67108863;
      return y > 0 && (this.words[E] = ~this.words[E] & 67108863 >> 26 - y), this._strip();
    }, i.prototype.notn = function(f) {
      return this.clone().inotn(f);
    }, i.prototype.setn = function(f, g) {
      n(typeof f == "number" && f >= 0);
      var y = f / 26 | 0, E = f % 26;
      return this._expand(y + 1), g ? this.words[y] = this.words[y] | 1 << E : this.words[y] = this.words[y] & ~(1 << E), this._strip();
    }, i.prototype.iadd = function(f) {
      var g;
      if (this.negative !== 0 && f.negative === 0)
        return this.negative = 0, g = this.isub(f), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && f.negative !== 0)
        return f.negative = 0, g = this.isub(f), f.negative = 1, g._normSign();
      var y, E;
      this.length > f.length ? (y = this, E = f) : (y = f, E = this);
      for (var B = 0, N = 0; N < E.length; N++)
        g = (y.words[N] | 0) + (E.words[N] | 0) + B, this.words[N] = g & 67108863, B = g >>> 26;
      for (; B !== 0 && N < y.length; N++)
        g = (y.words[N] | 0) + B, this.words[N] = g & 67108863, B = g >>> 26;
      if (this.length = y.length, B !== 0)
        this.words[this.length] = B, this.length++;
      else if (y !== this)
        for (; N < y.length; N++)
          this.words[N] = y.words[N];
      return this;
    }, i.prototype.add = function(f) {
      var g;
      return f.negative !== 0 && this.negative === 0 ? (f.negative = 0, g = this.sub(f), f.negative ^= 1, g) : f.negative === 0 && this.negative !== 0 ? (this.negative = 0, g = f.sub(this), this.negative = 1, g) : this.length > f.length ? this.clone().iadd(f) : f.clone().iadd(this);
    }, i.prototype.isub = function(f) {
      if (f.negative !== 0) {
        f.negative = 0;
        var g = this.iadd(f);
        return f.negative = 1, g._normSign();
      } else if (this.negative !== 0)
        return this.negative = 0, this.iadd(f), this.negative = 1, this._normSign();
      var y = this.cmp(f);
      if (y === 0)
        return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var E, B;
      y > 0 ? (E = this, B = f) : (E = f, B = this);
      for (var N = 0, F = 0; F < B.length; F++)
        g = (E.words[F] | 0) - (B.words[F] | 0) + N, N = g >> 26, this.words[F] = g & 67108863;
      for (; N !== 0 && F < E.length; F++)
        g = (E.words[F] | 0) + N, N = g >> 26, this.words[F] = g & 67108863;
      if (N === 0 && F < E.length && E !== this)
        for (; F < E.length; F++)
          this.words[F] = E.words[F];
      return this.length = Math.max(this.length, F), E !== this && (this.negative = 1), this._strip();
    }, i.prototype.sub = function(f) {
      return this.clone().isub(f);
    };
    function U(v, f, g) {
      g.negative = f.negative ^ v.negative;
      var y = v.length + f.length | 0;
      g.length = y, y = y - 1 | 0;
      var E = v.words[0] | 0, B = f.words[0] | 0, N = E * B, F = N & 67108863, x = N / 67108864 | 0;
      g.words[0] = F;
      for (var d = 1; d < y; d++) {
        for (var M = x >>> 26, tt = x & 67108863, it = Math.min(d, f.length - 1), at = Math.max(0, d - v.length + 1); at <= it; at++) {
          var Lt = d - at | 0;
          E = v.words[Lt] | 0, B = f.words[at] | 0, N = E * B + tt, M += N / 67108864 | 0, tt = N & 67108863;
        }
        g.words[d] = tt | 0, x = M | 0;
      }
      return x !== 0 ? g.words[d] = x | 0 : g.length--, g._strip();
    }
    var D = function(f, g, y) {
      var E = f.words, B = g.words, N = y.words, F = 0, x, d, M, tt = E[0] | 0, it = tt & 8191, at = tt >>> 13, Lt = E[1] | 0, lt = Lt & 8191, Bt = Lt >>> 13, hr = E[2] | 0, Dt = hr & 8191, Ut = hr >>> 13, Me = E[3] | 0, xt = Me & 8191, Pt = Me >>> 13, zr = E[4] | 0, Tt = zr & 8191, zt = zr >>> 13, Hr = E[5] | 0, Ot = Hr & 8191, St = Hr >>> 13, Ht = E[6] | 0, Ct = Ht & 8191, Gt = Ht >>> 13, Jt = E[7] | 0, Qt = Jt & 8191, l = Jt >>> 13, o = E[8] | 0, a = o & 8191, h = o >>> 13, w = E[9] | 0, b = w & 8191, _ = w >>> 13, j = B[0] | 0, $ = j & 8191, X = j >>> 13, ft = B[1] | 0, V = ft & 8191, $t = ft >>> 13, xo = B[2] | 0, te = xo & 8191, ee = xo >>> 13, Eo = B[3] | 0, re = Eo & 8191, ne = Eo >>> 13, vo = B[4] | 0, ie = vo & 8191, se = vo >>> 13, Bo = B[5] | 0, oe = Bo & 8191, ae = Bo >>> 13, Io = B[6] | 0, ce = Io & 8191, ue = Io >>> 13, So = B[7] | 0, fe = So & 8191, le = So >>> 13, Mo = B[8] | 0, he = Mo & 8191, de = Mo >>> 13, _o = B[9] | 0, pe = _o & 8191, ge = _o >>> 13;
      y.negative = f.negative ^ g.negative, y.length = 19, x = Math.imul(it, $), d = Math.imul(it, X), d = d + Math.imul(at, $) | 0, M = Math.imul(at, X);
      var Bi = (F + x | 0) + ((d & 8191) << 13) | 0;
      F = (M + (d >>> 13) | 0) + (Bi >>> 26) | 0, Bi &= 67108863, x = Math.imul(lt, $), d = Math.imul(lt, X), d = d + Math.imul(Bt, $) | 0, M = Math.imul(Bt, X), x = x + Math.imul(it, V) | 0, d = d + Math.imul(it, $t) | 0, d = d + Math.imul(at, V) | 0, M = M + Math.imul(at, $t) | 0;
      var Ii = (F + x | 0) + ((d & 8191) << 13) | 0;
      F = (M + (d >>> 13) | 0) + (Ii >>> 26) | 0, Ii &= 67108863, x = Math.imul(Dt, $), d = Math.imul(Dt, X), d = d + Math.imul(Ut, $) | 0, M = Math.imul(Ut, X), x = x + Math.imul(lt, V) | 0, d = d + Math.imul(lt, $t) | 0, d = d + Math.imul(Bt, V) | 0, M = M + Math.imul(Bt, $t) | 0, x = x + Math.imul(it, te) | 0, d = d + Math.imul(it, ee) | 0, d = d + Math.imul(at, te) | 0, M = M + Math.imul(at, ee) | 0;
      var Si = (F + x | 0) + ((d & 8191) << 13) | 0;
      F = (M + (d >>> 13) | 0) + (Si >>> 26) | 0, Si &= 67108863, x = Math.imul(xt, $), d = Math.imul(xt, X), d = d + Math.imul(Pt, $) | 0, M = Math.imul(Pt, X), x = x + Math.imul(Dt, V) | 0, d = d + Math.imul(Dt, $t) | 0, d = d + Math.imul(Ut, V) | 0, M = M + Math.imul(Ut, $t) | 0, x = x + Math.imul(lt, te) | 0, d = d + Math.imul(lt, ee) | 0, d = d + Math.imul(Bt, te) | 0, M = M + Math.imul(Bt, ee) | 0, x = x + Math.imul(it, re) | 0, d = d + Math.imul(it, ne) | 0, d = d + Math.imul(at, re) | 0, M = M + Math.imul(at, ne) | 0;
      var Mi = (F + x | 0) + ((d & 8191) << 13) | 0;
      F = (M + (d >>> 13) | 0) + (Mi >>> 26) | 0, Mi &= 67108863, x = Math.imul(Tt, $), d = Math.imul(Tt, X), d = d + Math.imul(zt, $) | 0, M = Math.imul(zt, X), x = x + Math.imul(xt, V) | 0, d = d + Math.imul(xt, $t) | 0, d = d + Math.imul(Pt, V) | 0, M = M + Math.imul(Pt, $t) | 0, x = x + Math.imul(Dt, te) | 0, d = d + Math.imul(Dt, ee) | 0, d = d + Math.imul(Ut, te) | 0, M = M + Math.imul(Ut, ee) | 0, x = x + Math.imul(lt, re) | 0, d = d + Math.imul(lt, ne) | 0, d = d + Math.imul(Bt, re) | 0, M = M + Math.imul(Bt, ne) | 0, x = x + Math.imul(it, ie) | 0, d = d + Math.imul(it, se) | 0, d = d + Math.imul(at, ie) | 0, M = M + Math.imul(at, se) | 0;
      var _i = (F + x | 0) + ((d & 8191) << 13) | 0;
      F = (M + (d >>> 13) | 0) + (_i >>> 26) | 0, _i &= 67108863, x = Math.imul(Ot, $), d = Math.imul(Ot, X), d = d + Math.imul(St, $) | 0, M = Math.imul(St, X), x = x + Math.imul(Tt, V) | 0, d = d + Math.imul(Tt, $t) | 0, d = d + Math.imul(zt, V) | 0, M = M + Math.imul(zt, $t) | 0, x = x + Math.imul(xt, te) | 0, d = d + Math.imul(xt, ee) | 0, d = d + Math.imul(Pt, te) | 0, M = M + Math.imul(Pt, ee) | 0, x = x + Math.imul(Dt, re) | 0, d = d + Math.imul(Dt, ne) | 0, d = d + Math.imul(Ut, re) | 0, M = M + Math.imul(Ut, ne) | 0, x = x + Math.imul(lt, ie) | 0, d = d + Math.imul(lt, se) | 0, d = d + Math.imul(Bt, ie) | 0, M = M + Math.imul(Bt, se) | 0, x = x + Math.imul(it, oe) | 0, d = d + Math.imul(it, ae) | 0, d = d + Math.imul(at, oe) | 0, M = M + Math.imul(at, ae) | 0;
      var ki = (F + x | 0) + ((d & 8191) << 13) | 0;
      F = (M + (d >>> 13) | 0) + (ki >>> 26) | 0, ki &= 67108863, x = Math.imul(Ct, $), d = Math.imul(Ct, X), d = d + Math.imul(Gt, $) | 0, M = Math.imul(Gt, X), x = x + Math.imul(Ot, V) | 0, d = d + Math.imul(Ot, $t) | 0, d = d + Math.imul(St, V) | 0, M = M + Math.imul(St, $t) | 0, x = x + Math.imul(Tt, te) | 0, d = d + Math.imul(Tt, ee) | 0, d = d + Math.imul(zt, te) | 0, M = M + Math.imul(zt, ee) | 0, x = x + Math.imul(xt, re) | 0, d = d + Math.imul(xt, ne) | 0, d = d + Math.imul(Pt, re) | 0, M = M + Math.imul(Pt, ne) | 0, x = x + Math.imul(Dt, ie) | 0, d = d + Math.imul(Dt, se) | 0, d = d + Math.imul(Ut, ie) | 0, M = M + Math.imul(Ut, se) | 0, x = x + Math.imul(lt, oe) | 0, d = d + Math.imul(lt, ae) | 0, d = d + Math.imul(Bt, oe) | 0, M = M + Math.imul(Bt, ae) | 0, x = x + Math.imul(it, ce) | 0, d = d + Math.imul(it, ue) | 0, d = d + Math.imul(at, ce) | 0, M = M + Math.imul(at, ue) | 0;
      var Ti = (F + x | 0) + ((d & 8191) << 13) | 0;
      F = (M + (d >>> 13) | 0) + (Ti >>> 26) | 0, Ti &= 67108863, x = Math.imul(Qt, $), d = Math.imul(Qt, X), d = d + Math.imul(l, $) | 0, M = Math.imul(l, X), x = x + Math.imul(Ct, V) | 0, d = d + Math.imul(Ct, $t) | 0, d = d + Math.imul(Gt, V) | 0, M = M + Math.imul(Gt, $t) | 0, x = x + Math.imul(Ot, te) | 0, d = d + Math.imul(Ot, ee) | 0, d = d + Math.imul(St, te) | 0, M = M + Math.imul(St, ee) | 0, x = x + Math.imul(Tt, re) | 0, d = d + Math.imul(Tt, ne) | 0, d = d + Math.imul(zt, re) | 0, M = M + Math.imul(zt, ne) | 0, x = x + Math.imul(xt, ie) | 0, d = d + Math.imul(xt, se) | 0, d = d + Math.imul(Pt, ie) | 0, M = M + Math.imul(Pt, se) | 0, x = x + Math.imul(Dt, oe) | 0, d = d + Math.imul(Dt, ae) | 0, d = d + Math.imul(Ut, oe) | 0, M = M + Math.imul(Ut, ae) | 0, x = x + Math.imul(lt, ce) | 0, d = d + Math.imul(lt, ue) | 0, d = d + Math.imul(Bt, ce) | 0, M = M + Math.imul(Bt, ue) | 0, x = x + Math.imul(it, fe) | 0, d = d + Math.imul(it, le) | 0, d = d + Math.imul(at, fe) | 0, M = M + Math.imul(at, le) | 0;
      var Ci = (F + x | 0) + ((d & 8191) << 13) | 0;
      F = (M + (d >>> 13) | 0) + (Ci >>> 26) | 0, Ci &= 67108863, x = Math.imul(a, $), d = Math.imul(a, X), d = d + Math.imul(h, $) | 0, M = Math.imul(h, X), x = x + Math.imul(Qt, V) | 0, d = d + Math.imul(Qt, $t) | 0, d = d + Math.imul(l, V) | 0, M = M + Math.imul(l, $t) | 0, x = x + Math.imul(Ct, te) | 0, d = d + Math.imul(Ct, ee) | 0, d = d + Math.imul(Gt, te) | 0, M = M + Math.imul(Gt, ee) | 0, x = x + Math.imul(Ot, re) | 0, d = d + Math.imul(Ot, ne) | 0, d = d + Math.imul(St, re) | 0, M = M + Math.imul(St, ne) | 0, x = x + Math.imul(Tt, ie) | 0, d = d + Math.imul(Tt, se) | 0, d = d + Math.imul(zt, ie) | 0, M = M + Math.imul(zt, se) | 0, x = x + Math.imul(xt, oe) | 0, d = d + Math.imul(xt, ae) | 0, d = d + Math.imul(Pt, oe) | 0, M = M + Math.imul(Pt, ae) | 0, x = x + Math.imul(Dt, ce) | 0, d = d + Math.imul(Dt, ue) | 0, d = d + Math.imul(Ut, ce) | 0, M = M + Math.imul(Ut, ue) | 0, x = x + Math.imul(lt, fe) | 0, d = d + Math.imul(lt, le) | 0, d = d + Math.imul(Bt, fe) | 0, M = M + Math.imul(Bt, le) | 0, x = x + Math.imul(it, he) | 0, d = d + Math.imul(it, de) | 0, d = d + Math.imul(at, he) | 0, M = M + Math.imul(at, de) | 0;
      var Ni = (F + x | 0) + ((d & 8191) << 13) | 0;
      F = (M + (d >>> 13) | 0) + (Ni >>> 26) | 0, Ni &= 67108863, x = Math.imul(b, $), d = Math.imul(b, X), d = d + Math.imul(_, $) | 0, M = Math.imul(_, X), x = x + Math.imul(a, V) | 0, d = d + Math.imul(a, $t) | 0, d = d + Math.imul(h, V) | 0, M = M + Math.imul(h, $t) | 0, x = x + Math.imul(Qt, te) | 0, d = d + Math.imul(Qt, ee) | 0, d = d + Math.imul(l, te) | 0, M = M + Math.imul(l, ee) | 0, x = x + Math.imul(Ct, re) | 0, d = d + Math.imul(Ct, ne) | 0, d = d + Math.imul(Gt, re) | 0, M = M + Math.imul(Gt, ne) | 0, x = x + Math.imul(Ot, ie) | 0, d = d + Math.imul(Ot, se) | 0, d = d + Math.imul(St, ie) | 0, M = M + Math.imul(St, se) | 0, x = x + Math.imul(Tt, oe) | 0, d = d + Math.imul(Tt, ae) | 0, d = d + Math.imul(zt, oe) | 0, M = M + Math.imul(zt, ae) | 0, x = x + Math.imul(xt, ce) | 0, d = d + Math.imul(xt, ue) | 0, d = d + Math.imul(Pt, ce) | 0, M = M + Math.imul(Pt, ue) | 0, x = x + Math.imul(Dt, fe) | 0, d = d + Math.imul(Dt, le) | 0, d = d + Math.imul(Ut, fe) | 0, M = M + Math.imul(Ut, le) | 0, x = x + Math.imul(lt, he) | 0, d = d + Math.imul(lt, de) | 0, d = d + Math.imul(Bt, he) | 0, M = M + Math.imul(Bt, de) | 0, x = x + Math.imul(it, pe) | 0, d = d + Math.imul(it, ge) | 0, d = d + Math.imul(at, pe) | 0, M = M + Math.imul(at, ge) | 0;
      var Ri = (F + x | 0) + ((d & 8191) << 13) | 0;
      F = (M + (d >>> 13) | 0) + (Ri >>> 26) | 0, Ri &= 67108863, x = Math.imul(b, V), d = Math.imul(b, $t), d = d + Math.imul(_, V) | 0, M = Math.imul(_, $t), x = x + Math.imul(a, te) | 0, d = d + Math.imul(a, ee) | 0, d = d + Math.imul(h, te) | 0, M = M + Math.imul(h, ee) | 0, x = x + Math.imul(Qt, re) | 0, d = d + Math.imul(Qt, ne) | 0, d = d + Math.imul(l, re) | 0, M = M + Math.imul(l, ne) | 0, x = x + Math.imul(Ct, ie) | 0, d = d + Math.imul(Ct, se) | 0, d = d + Math.imul(Gt, ie) | 0, M = M + Math.imul(Gt, se) | 0, x = x + Math.imul(Ot, oe) | 0, d = d + Math.imul(Ot, ae) | 0, d = d + Math.imul(St, oe) | 0, M = M + Math.imul(St, ae) | 0, x = x + Math.imul(Tt, ce) | 0, d = d + Math.imul(Tt, ue) | 0, d = d + Math.imul(zt, ce) | 0, M = M + Math.imul(zt, ue) | 0, x = x + Math.imul(xt, fe) | 0, d = d + Math.imul(xt, le) | 0, d = d + Math.imul(Pt, fe) | 0, M = M + Math.imul(Pt, le) | 0, x = x + Math.imul(Dt, he) | 0, d = d + Math.imul(Dt, de) | 0, d = d + Math.imul(Ut, he) | 0, M = M + Math.imul(Ut, de) | 0, x = x + Math.imul(lt, pe) | 0, d = d + Math.imul(lt, ge) | 0, d = d + Math.imul(Bt, pe) | 0, M = M + Math.imul(Bt, ge) | 0;
      var Li = (F + x | 0) + ((d & 8191) << 13) | 0;
      F = (M + (d >>> 13) | 0) + (Li >>> 26) | 0, Li &= 67108863, x = Math.imul(b, te), d = Math.imul(b, ee), d = d + Math.imul(_, te) | 0, M = Math.imul(_, ee), x = x + Math.imul(a, re) | 0, d = d + Math.imul(a, ne) | 0, d = d + Math.imul(h, re) | 0, M = M + Math.imul(h, ne) | 0, x = x + Math.imul(Qt, ie) | 0, d = d + Math.imul(Qt, se) | 0, d = d + Math.imul(l, ie) | 0, M = M + Math.imul(l, se) | 0, x = x + Math.imul(Ct, oe) | 0, d = d + Math.imul(Ct, ae) | 0, d = d + Math.imul(Gt, oe) | 0, M = M + Math.imul(Gt, ae) | 0, x = x + Math.imul(Ot, ce) | 0, d = d + Math.imul(Ot, ue) | 0, d = d + Math.imul(St, ce) | 0, M = M + Math.imul(St, ue) | 0, x = x + Math.imul(Tt, fe) | 0, d = d + Math.imul(Tt, le) | 0, d = d + Math.imul(zt, fe) | 0, M = M + Math.imul(zt, le) | 0, x = x + Math.imul(xt, he) | 0, d = d + Math.imul(xt, de) | 0, d = d + Math.imul(Pt, he) | 0, M = M + Math.imul(Pt, de) | 0, x = x + Math.imul(Dt, pe) | 0, d = d + Math.imul(Dt, ge) | 0, d = d + Math.imul(Ut, pe) | 0, M = M + Math.imul(Ut, ge) | 0;
      var Ui = (F + x | 0) + ((d & 8191) << 13) | 0;
      F = (M + (d >>> 13) | 0) + (Ui >>> 26) | 0, Ui &= 67108863, x = Math.imul(b, re), d = Math.imul(b, ne), d = d + Math.imul(_, re) | 0, M = Math.imul(_, ne), x = x + Math.imul(a, ie) | 0, d = d + Math.imul(a, se) | 0, d = d + Math.imul(h, ie) | 0, M = M + Math.imul(h, se) | 0, x = x + Math.imul(Qt, oe) | 0, d = d + Math.imul(Qt, ae) | 0, d = d + Math.imul(l, oe) | 0, M = M + Math.imul(l, ae) | 0, x = x + Math.imul(Ct, ce) | 0, d = d + Math.imul(Ct, ue) | 0, d = d + Math.imul(Gt, ce) | 0, M = M + Math.imul(Gt, ue) | 0, x = x + Math.imul(Ot, fe) | 0, d = d + Math.imul(Ot, le) | 0, d = d + Math.imul(St, fe) | 0, M = M + Math.imul(St, le) | 0, x = x + Math.imul(Tt, he) | 0, d = d + Math.imul(Tt, de) | 0, d = d + Math.imul(zt, he) | 0, M = M + Math.imul(zt, de) | 0, x = x + Math.imul(xt, pe) | 0, d = d + Math.imul(xt, ge) | 0, d = d + Math.imul(Pt, pe) | 0, M = M + Math.imul(Pt, ge) | 0;
      var Oi = (F + x | 0) + ((d & 8191) << 13) | 0;
      F = (M + (d >>> 13) | 0) + (Oi >>> 26) | 0, Oi &= 67108863, x = Math.imul(b, ie), d = Math.imul(b, se), d = d + Math.imul(_, ie) | 0, M = Math.imul(_, se), x = x + Math.imul(a, oe) | 0, d = d + Math.imul(a, ae) | 0, d = d + Math.imul(h, oe) | 0, M = M + Math.imul(h, ae) | 0, x = x + Math.imul(Qt, ce) | 0, d = d + Math.imul(Qt, ue) | 0, d = d + Math.imul(l, ce) | 0, M = M + Math.imul(l, ue) | 0, x = x + Math.imul(Ct, fe) | 0, d = d + Math.imul(Ct, le) | 0, d = d + Math.imul(Gt, fe) | 0, M = M + Math.imul(Gt, le) | 0, x = x + Math.imul(Ot, he) | 0, d = d + Math.imul(Ot, de) | 0, d = d + Math.imul(St, he) | 0, M = M + Math.imul(St, de) | 0, x = x + Math.imul(Tt, pe) | 0, d = d + Math.imul(Tt, ge) | 0, d = d + Math.imul(zt, pe) | 0, M = M + Math.imul(zt, ge) | 0;
      var Fi = (F + x | 0) + ((d & 8191) << 13) | 0;
      F = (M + (d >>> 13) | 0) + (Fi >>> 26) | 0, Fi &= 67108863, x = Math.imul(b, oe), d = Math.imul(b, ae), d = d + Math.imul(_, oe) | 0, M = Math.imul(_, ae), x = x + Math.imul(a, ce) | 0, d = d + Math.imul(a, ue) | 0, d = d + Math.imul(h, ce) | 0, M = M + Math.imul(h, ue) | 0, x = x + Math.imul(Qt, fe) | 0, d = d + Math.imul(Qt, le) | 0, d = d + Math.imul(l, fe) | 0, M = M + Math.imul(l, le) | 0, x = x + Math.imul(Ct, he) | 0, d = d + Math.imul(Ct, de) | 0, d = d + Math.imul(Gt, he) | 0, M = M + Math.imul(Gt, de) | 0, x = x + Math.imul(Ot, pe) | 0, d = d + Math.imul(Ot, ge) | 0, d = d + Math.imul(St, pe) | 0, M = M + Math.imul(St, ge) | 0;
      var Di = (F + x | 0) + ((d & 8191) << 13) | 0;
      F = (M + (d >>> 13) | 0) + (Di >>> 26) | 0, Di &= 67108863, x = Math.imul(b, ce), d = Math.imul(b, ue), d = d + Math.imul(_, ce) | 0, M = Math.imul(_, ue), x = x + Math.imul(a, fe) | 0, d = d + Math.imul(a, le) | 0, d = d + Math.imul(h, fe) | 0, M = M + Math.imul(h, le) | 0, x = x + Math.imul(Qt, he) | 0, d = d + Math.imul(Qt, de) | 0, d = d + Math.imul(l, he) | 0, M = M + Math.imul(l, de) | 0, x = x + Math.imul(Ct, pe) | 0, d = d + Math.imul(Ct, ge) | 0, d = d + Math.imul(Gt, pe) | 0, M = M + Math.imul(Gt, ge) | 0;
      var Pi = (F + x | 0) + ((d & 8191) << 13) | 0;
      F = (M + (d >>> 13) | 0) + (Pi >>> 26) | 0, Pi &= 67108863, x = Math.imul(b, fe), d = Math.imul(b, le), d = d + Math.imul(_, fe) | 0, M = Math.imul(_, le), x = x + Math.imul(a, he) | 0, d = d + Math.imul(a, de) | 0, d = d + Math.imul(h, he) | 0, M = M + Math.imul(h, de) | 0, x = x + Math.imul(Qt, pe) | 0, d = d + Math.imul(Qt, ge) | 0, d = d + Math.imul(l, pe) | 0, M = M + Math.imul(l, ge) | 0;
      var zi = (F + x | 0) + ((d & 8191) << 13) | 0;
      F = (M + (d >>> 13) | 0) + (zi >>> 26) | 0, zi &= 67108863, x = Math.imul(b, he), d = Math.imul(b, de), d = d + Math.imul(_, he) | 0, M = Math.imul(_, de), x = x + Math.imul(a, pe) | 0, d = d + Math.imul(a, ge) | 0, d = d + Math.imul(h, pe) | 0, M = M + Math.imul(h, ge) | 0;
      var Hi = (F + x | 0) + ((d & 8191) << 13) | 0;
      F = (M + (d >>> 13) | 0) + (Hi >>> 26) | 0, Hi &= 67108863, x = Math.imul(b, pe), d = Math.imul(b, ge), d = d + Math.imul(_, pe) | 0, M = Math.imul(_, ge);
      var Gi = (F + x | 0) + ((d & 8191) << 13) | 0;
      return F = (M + (d >>> 13) | 0) + (Gi >>> 26) | 0, Gi &= 67108863, N[0] = Bi, N[1] = Ii, N[2] = Si, N[3] = Mi, N[4] = _i, N[5] = ki, N[6] = Ti, N[7] = Ci, N[8] = Ni, N[9] = Ri, N[10] = Li, N[11] = Ui, N[12] = Oi, N[13] = Fi, N[14] = Di, N[15] = Pi, N[16] = zi, N[17] = Hi, N[18] = Gi, F !== 0 && (N[19] = F, y.length++), y;
    };
    Math.imul || (D = U);
    function L(v, f, g) {
      g.negative = f.negative ^ v.negative, g.length = v.length + f.length;
      for (var y = 0, E = 0, B = 0; B < g.length - 1; B++) {
        var N = E;
        E = 0;
        for (var F = y & 67108863, x = Math.min(B, f.length - 1), d = Math.max(0, B - v.length + 1); d <= x; d++) {
          var M = B - d, tt = v.words[M] | 0, it = f.words[d] | 0, at = tt * it, Lt = at & 67108863;
          N = N + (at / 67108864 | 0) | 0, Lt = Lt + F | 0, F = Lt & 67108863, N = N + (Lt >>> 26) | 0, E += N >>> 26, N &= 67108863;
        }
        g.words[B] = F, y = N, N = E;
      }
      return y !== 0 ? g.words[B] = y : g.length--, g._strip();
    }
    function H(v, f, g) {
      return L(v, f, g);
    }
    i.prototype.mulTo = function(f, g) {
      var y, E = this.length + f.length;
      return this.length === 10 && f.length === 10 ? y = D(this, f, g) : E < 63 ? y = U(this, f, g) : E < 1024 ? y = L(this, f, g) : y = H(this, f, g), y;
    }, i.prototype.mul = function(f) {
      var g = new i(null);
      return g.words = new Array(this.length + f.length), this.mulTo(f, g);
    }, i.prototype.mulf = function(f) {
      var g = new i(null);
      return g.words = new Array(this.length + f.length), H(this, f, g);
    }, i.prototype.imul = function(f) {
      return this.clone().mulTo(f, this);
    }, i.prototype.imuln = function(f) {
      var g = f < 0;
      g && (f = -f), n(typeof f == "number"), n(f < 67108864);
      for (var y = 0, E = 0; E < this.length; E++) {
        var B = (this.words[E] | 0) * f, N = (B & 67108863) + (y & 67108863);
        y >>= 26, y += B / 67108864 | 0, y += N >>> 26, this.words[E] = N & 67108863;
      }
      return y !== 0 && (this.words[E] = y, this.length++), g ? this.ineg() : this;
    }, i.prototype.muln = function(f) {
      return this.clone().imuln(f);
    }, i.prototype.sqr = function() {
      return this.mul(this);
    }, i.prototype.isqr = function() {
      return this.imul(this.clone());
    }, i.prototype.pow = function(f) {
      var g = R(f);
      if (g.length === 0)
        return new i(1);
      for (var y = this, E = 0; E < g.length && g[E] === 0; E++, y = y.sqr())
        ;
      if (++E < g.length)
        for (var B = y.sqr(); E < g.length; E++, B = B.sqr())
          g[E] !== 0 && (y = y.mul(B));
      return y;
    }, i.prototype.iushln = function(f) {
      n(typeof f == "number" && f >= 0);
      var g = f % 26, y = (f - g) / 26, E = 67108863 >>> 26 - g << 26 - g, B;
      if (g !== 0) {
        var N = 0;
        for (B = 0; B < this.length; B++) {
          var F = this.words[B] & E, x = (this.words[B] | 0) - F << g;
          this.words[B] = x | N, N = F >>> 26 - g;
        }
        N && (this.words[B] = N, this.length++);
      }
      if (y !== 0) {
        for (B = this.length - 1; B >= 0; B--)
          this.words[B + y] = this.words[B];
        for (B = 0; B < y; B++)
          this.words[B] = 0;
        this.length += y;
      }
      return this._strip();
    }, i.prototype.ishln = function(f) {
      return n(this.negative === 0), this.iushln(f);
    }, i.prototype.iushrn = function(f, g, y) {
      n(typeof f == "number" && f >= 0);
      var E;
      g ? E = (g - g % 26) / 26 : E = 0;
      var B = f % 26, N = Math.min((f - B) / 26, this.length), F = 67108863 ^ 67108863 >>> B << B, x = y;
      if (E -= N, E = Math.max(0, E), x) {
        for (var d = 0; d < N; d++)
          x.words[d] = this.words[d];
        x.length = N;
      }
      if (N !== 0)
        if (this.length > N)
          for (this.length -= N, d = 0; d < this.length; d++)
            this.words[d] = this.words[d + N];
        else
          this.words[0] = 0, this.length = 1;
      var M = 0;
      for (d = this.length - 1; d >= 0 && (M !== 0 || d >= E); d--) {
        var tt = this.words[d] | 0;
        this.words[d] = M << 26 - B | tt >>> B, M = tt & F;
      }
      return x && M !== 0 && (x.words[x.length++] = M), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
    }, i.prototype.ishrn = function(f, g, y) {
      return n(this.negative === 0), this.iushrn(f, g, y);
    }, i.prototype.shln = function(f) {
      return this.clone().ishln(f);
    }, i.prototype.ushln = function(f) {
      return this.clone().iushln(f);
    }, i.prototype.shrn = function(f) {
      return this.clone().ishrn(f);
    }, i.prototype.ushrn = function(f) {
      return this.clone().iushrn(f);
    }, i.prototype.testn = function(f) {
      n(typeof f == "number" && f >= 0);
      var g = f % 26, y = (f - g) / 26, E = 1 << g;
      if (this.length <= y)
        return !1;
      var B = this.words[y];
      return !!(B & E);
    }, i.prototype.imaskn = function(f) {
      n(typeof f == "number" && f >= 0);
      var g = f % 26, y = (f - g) / 26;
      if (n(this.negative === 0, "imaskn works only with positive numbers"), this.length <= y)
        return this;
      if (g !== 0 && y++, this.length = Math.min(y, this.length), g !== 0) {
        var E = 67108863 ^ 67108863 >>> g << g;
        this.words[this.length - 1] &= E;
      }
      return this._strip();
    }, i.prototype.maskn = function(f) {
      return this.clone().imaskn(f);
    }, i.prototype.iaddn = function(f) {
      return n(typeof f == "number"), n(f < 67108864), f < 0 ? this.isubn(-f) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= f ? (this.words[0] = f - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(f), this.negative = 1, this) : this._iaddn(f);
    }, i.prototype._iaddn = function(f) {
      this.words[0] += f;
      for (var g = 0; g < this.length && this.words[g] >= 67108864; g++)
        this.words[g] -= 67108864, g === this.length - 1 ? this.words[g + 1] = 1 : this.words[g + 1]++;
      return this.length = Math.max(this.length, g + 1), this;
    }, i.prototype.isubn = function(f) {
      if (n(typeof f == "number"), n(f < 67108864), f < 0)
        return this.iaddn(-f);
      if (this.negative !== 0)
        return this.negative = 0, this.iaddn(f), this.negative = 1, this;
      if (this.words[0] -= f, this.length === 1 && this.words[0] < 0)
        this.words[0] = -this.words[0], this.negative = 1;
      else
        for (var g = 0; g < this.length && this.words[g] < 0; g++)
          this.words[g] += 67108864, this.words[g + 1] -= 1;
      return this._strip();
    }, i.prototype.addn = function(f) {
      return this.clone().iaddn(f);
    }, i.prototype.subn = function(f) {
      return this.clone().isubn(f);
    }, i.prototype.iabs = function() {
      return this.negative = 0, this;
    }, i.prototype.abs = function() {
      return this.clone().iabs();
    }, i.prototype._ishlnsubmul = function(f, g, y) {
      var E = f.length + y, B;
      this._expand(E);
      var N, F = 0;
      for (B = 0; B < f.length; B++) {
        N = (this.words[B + y] | 0) + F;
        var x = (f.words[B] | 0) * g;
        N -= x & 67108863, F = (N >> 26) - (x / 67108864 | 0), this.words[B + y] = N & 67108863;
      }
      for (; B < this.length - y; B++)
        N = (this.words[B + y] | 0) + F, F = N >> 26, this.words[B + y] = N & 67108863;
      if (F === 0)
        return this._strip();
      for (n(F === -1), F = 0, B = 0; B < this.length; B++)
        N = -(this.words[B] | 0) + F, F = N >> 26, this.words[B] = N & 67108863;
      return this.negative = 1, this._strip();
    }, i.prototype._wordDiv = function(f, g) {
      var y = this.length - f.length, E = this.clone(), B = f, N = B.words[B.length - 1] | 0, F = this._countBits(N);
      y = 26 - F, y !== 0 && (B = B.ushln(y), E.iushln(y), N = B.words[B.length - 1] | 0);
      var x = E.length - B.length, d;
      if (g !== "mod") {
        d = new i(null), d.length = x + 1, d.words = new Array(d.length);
        for (var M = 0; M < d.length; M++)
          d.words[M] = 0;
      }
      var tt = E.clone()._ishlnsubmul(B, 1, x);
      tt.negative === 0 && (E = tt, d && (d.words[x] = 1));
      for (var it = x - 1; it >= 0; it--) {
        var at = (E.words[B.length + it] | 0) * 67108864 + (E.words[B.length + it - 1] | 0);
        for (at = Math.min(at / N | 0, 67108863), E._ishlnsubmul(B, at, it); E.negative !== 0; )
          at--, E.negative = 0, E._ishlnsubmul(B, 1, it), E.isZero() || (E.negative ^= 1);
        d && (d.words[it] = at);
      }
      return d && d._strip(), E._strip(), g !== "div" && y !== 0 && E.iushrn(y), {
        div: d || null,
        mod: E
      };
    }, i.prototype.divmod = function(f, g, y) {
      if (n(!f.isZero()), this.isZero())
        return {
          div: new i(0),
          mod: new i(0)
        };
      var E, B, N;
      return this.negative !== 0 && f.negative === 0 ? (N = this.neg().divmod(f, g), g !== "mod" && (E = N.div.neg()), g !== "div" && (B = N.mod.neg(), y && B.negative !== 0 && B.iadd(f)), {
        div: E,
        mod: B
      }) : this.negative === 0 && f.negative !== 0 ? (N = this.divmod(f.neg(), g), g !== "mod" && (E = N.div.neg()), {
        div: E,
        mod: N.mod
      }) : (this.negative & f.negative) !== 0 ? (N = this.neg().divmod(f.neg(), g), g !== "div" && (B = N.mod.neg(), y && B.negative !== 0 && B.isub(f)), {
        div: N.div,
        mod: B
      }) : f.length > this.length || this.cmp(f) < 0 ? {
        div: new i(0),
        mod: this
      } : f.length === 1 ? g === "div" ? {
        div: this.divn(f.words[0]),
        mod: null
      } : g === "mod" ? {
        div: null,
        mod: new i(this.modrn(f.words[0]))
      } : {
        div: this.divn(f.words[0]),
        mod: new i(this.modrn(f.words[0]))
      } : this._wordDiv(f, g);
    }, i.prototype.div = function(f) {
      return this.divmod(f, "div", !1).div;
    }, i.prototype.mod = function(f) {
      return this.divmod(f, "mod", !1).mod;
    }, i.prototype.umod = function(f) {
      return this.divmod(f, "mod", !0).mod;
    }, i.prototype.divRound = function(f) {
      var g = this.divmod(f);
      if (g.mod.isZero())
        return g.div;
      var y = g.div.negative !== 0 ? g.mod.isub(f) : g.mod, E = f.ushrn(1), B = f.andln(1), N = y.cmp(E);
      return N < 0 || B === 1 && N === 0 ? g.div : g.div.negative !== 0 ? g.div.isubn(1) : g.div.iaddn(1);
    }, i.prototype.modrn = function(f) {
      var g = f < 0;
      g && (f = -f), n(f <= 67108863);
      for (var y = (1 << 26) % f, E = 0, B = this.length - 1; B >= 0; B--)
        E = (y * E + (this.words[B] | 0)) % f;
      return g ? -E : E;
    }, i.prototype.modn = function(f) {
      return this.modrn(f);
    }, i.prototype.idivn = function(f) {
      var g = f < 0;
      g && (f = -f), n(f <= 67108863);
      for (var y = 0, E = this.length - 1; E >= 0; E--) {
        var B = (this.words[E] | 0) + y * 67108864;
        this.words[E] = B / f | 0, y = B % f;
      }
      return this._strip(), g ? this.ineg() : this;
    }, i.prototype.divn = function(f) {
      return this.clone().idivn(f);
    }, i.prototype.egcd = function(f) {
      n(f.negative === 0), n(!f.isZero());
      var g = this, y = f.clone();
      g.negative !== 0 ? g = g.umod(f) : g = g.clone();
      for (var E = new i(1), B = new i(0), N = new i(0), F = new i(1), x = 0; g.isEven() && y.isEven(); )
        g.iushrn(1), y.iushrn(1), ++x;
      for (var d = y.clone(), M = g.clone(); !g.isZero(); ) {
        for (var tt = 0, it = 1; (g.words[0] & it) === 0 && tt < 26; ++tt, it <<= 1)
          ;
        if (tt > 0)
          for (g.iushrn(tt); tt-- > 0; )
            (E.isOdd() || B.isOdd()) && (E.iadd(d), B.isub(M)), E.iushrn(1), B.iushrn(1);
        for (var at = 0, Lt = 1; (y.words[0] & Lt) === 0 && at < 26; ++at, Lt <<= 1)
          ;
        if (at > 0)
          for (y.iushrn(at); at-- > 0; )
            (N.isOdd() || F.isOdd()) && (N.iadd(d), F.isub(M)), N.iushrn(1), F.iushrn(1);
        g.cmp(y) >= 0 ? (g.isub(y), E.isub(N), B.isub(F)) : (y.isub(g), N.isub(E), F.isub(B));
      }
      return {
        a: N,
        b: F,
        gcd: y.iushln(x)
      };
    }, i.prototype._invmp = function(f) {
      n(f.negative === 0), n(!f.isZero());
      var g = this, y = f.clone();
      g.negative !== 0 ? g = g.umod(f) : g = g.clone();
      for (var E = new i(1), B = new i(0), N = y.clone(); g.cmpn(1) > 0 && y.cmpn(1) > 0; ) {
        for (var F = 0, x = 1; (g.words[0] & x) === 0 && F < 26; ++F, x <<= 1)
          ;
        if (F > 0)
          for (g.iushrn(F); F-- > 0; )
            E.isOdd() && E.iadd(N), E.iushrn(1);
        for (var d = 0, M = 1; (y.words[0] & M) === 0 && d < 26; ++d, M <<= 1)
          ;
        if (d > 0)
          for (y.iushrn(d); d-- > 0; )
            B.isOdd() && B.iadd(N), B.iushrn(1);
        g.cmp(y) >= 0 ? (g.isub(y), E.isub(B)) : (y.isub(g), B.isub(E));
      }
      var tt;
      return g.cmpn(1) === 0 ? tt = E : tt = B, tt.cmpn(0) < 0 && tt.iadd(f), tt;
    }, i.prototype.gcd = function(f) {
      if (this.isZero())
        return f.abs();
      if (f.isZero())
        return this.abs();
      var g = this.clone(), y = f.clone();
      g.negative = 0, y.negative = 0;
      for (var E = 0; g.isEven() && y.isEven(); E++)
        g.iushrn(1), y.iushrn(1);
      do {
        for (; g.isEven(); )
          g.iushrn(1);
        for (; y.isEven(); )
          y.iushrn(1);
        var B = g.cmp(y);
        if (B < 0) {
          var N = g;
          g = y, y = N;
        } else if (B === 0 || y.cmpn(1) === 0)
          break;
        g.isub(y);
      } while (!0);
      return y.iushln(E);
    }, i.prototype.invm = function(f) {
      return this.egcd(f).a.umod(f);
    }, i.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, i.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, i.prototype.andln = function(f) {
      return this.words[0] & f;
    }, i.prototype.bincn = function(f) {
      n(typeof f == "number");
      var g = f % 26, y = (f - g) / 26, E = 1 << g;
      if (this.length <= y)
        return this._expand(y + 1), this.words[y] |= E, this;
      for (var B = E, N = y; B !== 0 && N < this.length; N++) {
        var F = this.words[N] | 0;
        F += B, B = F >>> 26, F &= 67108863, this.words[N] = F;
      }
      return B !== 0 && (this.words[N] = B, this.length++), this;
    }, i.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, i.prototype.cmpn = function(f) {
      var g = f < 0;
      if (this.negative !== 0 && !g)
        return -1;
      if (this.negative === 0 && g)
        return 1;
      this._strip();
      var y;
      if (this.length > 1)
        y = 1;
      else {
        g && (f = -f), n(f <= 67108863, "Number is too big");
        var E = this.words[0] | 0;
        y = E === f ? 0 : E < f ? -1 : 1;
      }
      return this.negative !== 0 ? -y | 0 : y;
    }, i.prototype.cmp = function(f) {
      if (this.negative !== 0 && f.negative === 0)
        return -1;
      if (this.negative === 0 && f.negative !== 0)
        return 1;
      var g = this.ucmp(f);
      return this.negative !== 0 ? -g | 0 : g;
    }, i.prototype.ucmp = function(f) {
      if (this.length > f.length)
        return 1;
      if (this.length < f.length)
        return -1;
      for (var g = 0, y = this.length - 1; y >= 0; y--) {
        var E = this.words[y] | 0, B = f.words[y] | 0;
        if (E !== B) {
          E < B ? g = -1 : E > B && (g = 1);
          break;
        }
      }
      return g;
    }, i.prototype.gtn = function(f) {
      return this.cmpn(f) === 1;
    }, i.prototype.gt = function(f) {
      return this.cmp(f) === 1;
    }, i.prototype.gten = function(f) {
      return this.cmpn(f) >= 0;
    }, i.prototype.gte = function(f) {
      return this.cmp(f) >= 0;
    }, i.prototype.ltn = function(f) {
      return this.cmpn(f) === -1;
    }, i.prototype.lt = function(f) {
      return this.cmp(f) === -1;
    }, i.prototype.lten = function(f) {
      return this.cmpn(f) <= 0;
    }, i.prototype.lte = function(f) {
      return this.cmp(f) <= 0;
    }, i.prototype.eqn = function(f) {
      return this.cmpn(f) === 0;
    }, i.prototype.eq = function(f) {
      return this.cmp(f) === 0;
    }, i.red = function(f) {
      return new dt(f);
    }, i.prototype.toRed = function(f) {
      return n(!this.red, "Already a number in reduction context"), n(this.negative === 0, "red works only with positives"), f.convertTo(this)._forceRed(f);
    }, i.prototype.fromRed = function() {
      return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, i.prototype._forceRed = function(f) {
      return this.red = f, this;
    }, i.prototype.forceRed = function(f) {
      return n(!this.red, "Already a number in reduction context"), this._forceRed(f);
    }, i.prototype.redAdd = function(f) {
      return n(this.red, "redAdd works only with red numbers"), this.red.add(this, f);
    }, i.prototype.redIAdd = function(f) {
      return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, f);
    }, i.prototype.redSub = function(f) {
      return n(this.red, "redSub works only with red numbers"), this.red.sub(this, f);
    }, i.prototype.redISub = function(f) {
      return n(this.red, "redISub works only with red numbers"), this.red.isub(this, f);
    }, i.prototype.redShl = function(f) {
      return n(this.red, "redShl works only with red numbers"), this.red.shl(this, f);
    }, i.prototype.redMul = function(f) {
      return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, f), this.red.mul(this, f);
    }, i.prototype.redIMul = function(f) {
      return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, f), this.red.imul(this, f);
    }, i.prototype.redSqr = function() {
      return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, i.prototype.redISqr = function() {
      return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, i.prototype.redSqrt = function() {
      return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, i.prototype.redInvm = function() {
      return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, i.prototype.redNeg = function() {
      return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, i.prototype.redPow = function(f) {
      return n(this.red && !f.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, f);
    };
    var P = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };
    function Q(v, f) {
      this.name = v, this.p = new i(f, 16), this.n = this.p.bitLength(), this.k = new i(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    Q.prototype._tmp = function() {
      var f = new i(null);
      return f.words = new Array(Math.ceil(this.n / 13)), f;
    }, Q.prototype.ireduce = function(f) {
      var g = f, y;
      do
        this.split(g, this.tmp), g = this.imulK(g), g = g.iadd(this.tmp), y = g.bitLength();
      while (y > this.n);
      var E = y < this.n ? -1 : g.ucmp(this.p);
      return E === 0 ? (g.words[0] = 0, g.length = 1) : E > 0 ? g.isub(this.p) : g.strip !== void 0 ? g.strip() : g._strip(), g;
    }, Q.prototype.split = function(f, g) {
      f.iushrn(this.n, 0, g);
    }, Q.prototype.imulK = function(f) {
      return f.imul(this.k);
    };
    function W() {
      Q.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    s(W, Q), W.prototype.split = function(f, g) {
      for (var y = 4194303, E = Math.min(f.length, 9), B = 0; B < E; B++)
        g.words[B] = f.words[B];
      if (g.length = E, f.length <= 9) {
        f.words[0] = 0, f.length = 1;
        return;
      }
      var N = f.words[9];
      for (g.words[g.length++] = N & y, B = 10; B < f.length; B++) {
        var F = f.words[B] | 0;
        f.words[B - 10] = (F & y) << 4 | N >>> 22, N = F;
      }
      N >>>= 22, f.words[B - 10] = N, N === 0 && f.length > 10 ? f.length -= 10 : f.length -= 9;
    }, W.prototype.imulK = function(f) {
      f.words[f.length] = 0, f.words[f.length + 1] = 0, f.length += 2;
      for (var g = 0, y = 0; y < f.length; y++) {
        var E = f.words[y] | 0;
        g += E * 977, f.words[y] = g & 67108863, g = E * 64 + (g / 67108864 | 0);
      }
      return f.words[f.length - 1] === 0 && (f.length--, f.words[f.length - 1] === 0 && f.length--), f;
    };
    function Y() {
      Q.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    s(Y, Q);
    function wt() {
      Q.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    s(wt, Q);
    function Nt() {
      Q.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    s(Nt, Q), Nt.prototype.imulK = function(f) {
      for (var g = 0, y = 0; y < f.length; y++) {
        var E = (f.words[y] | 0) * 19 + g, B = E & 67108863;
        E >>>= 26, f.words[y] = B, g = E;
      }
      return g !== 0 && (f.words[f.length++] = g), f;
    }, i._prime = function(f) {
      if (P[f])
        return P[f];
      var g;
      if (f === "k256")
        g = new W();
      else if (f === "p224")
        g = new Y();
      else if (f === "p192")
        g = new wt();
      else if (f === "p25519")
        g = new Nt();
      else
        throw new Error("Unknown prime " + f);
      return P[f] = g, g;
    };
    function dt(v) {
      if (typeof v == "string") {
        var f = i._prime(v);
        this.m = f.p, this.prime = f;
      } else
        n(v.gtn(1), "modulus must be greater than 1"), this.m = v, this.prime = null;
    }
    dt.prototype._verify1 = function(f) {
      n(f.negative === 0, "red works only with positives"), n(f.red, "red works only with red numbers");
    }, dt.prototype._verify2 = function(f, g) {
      n((f.negative | g.negative) === 0, "red works only with positives"), n(
        f.red && f.red === g.red,
        "red works only with red numbers"
      );
    }, dt.prototype.imod = function(f) {
      return this.prime ? this.prime.ireduce(f)._forceRed(this) : (A(f, f.umod(this.m)._forceRed(this)), f);
    }, dt.prototype.neg = function(f) {
      return f.isZero() ? f.clone() : this.m.sub(f)._forceRed(this);
    }, dt.prototype.add = function(f, g) {
      this._verify2(f, g);
      var y = f.add(g);
      return y.cmp(this.m) >= 0 && y.isub(this.m), y._forceRed(this);
    }, dt.prototype.iadd = function(f, g) {
      this._verify2(f, g);
      var y = f.iadd(g);
      return y.cmp(this.m) >= 0 && y.isub(this.m), y;
    }, dt.prototype.sub = function(f, g) {
      this._verify2(f, g);
      var y = f.sub(g);
      return y.cmpn(0) < 0 && y.iadd(this.m), y._forceRed(this);
    }, dt.prototype.isub = function(f, g) {
      this._verify2(f, g);
      var y = f.isub(g);
      return y.cmpn(0) < 0 && y.iadd(this.m), y;
    }, dt.prototype.shl = function(f, g) {
      return this._verify1(f), this.imod(f.ushln(g));
    }, dt.prototype.imul = function(f, g) {
      return this._verify2(f, g), this.imod(f.imul(g));
    }, dt.prototype.mul = function(f, g) {
      return this._verify2(f, g), this.imod(f.mul(g));
    }, dt.prototype.isqr = function(f) {
      return this.imul(f, f.clone());
    }, dt.prototype.sqr = function(f) {
      return this.mul(f, f);
    }, dt.prototype.sqrt = function(f) {
      if (f.isZero())
        return f.clone();
      var g = this.m.andln(3);
      if (n(g % 2 === 1), g === 3) {
        var y = this.m.add(new i(1)).iushrn(2);
        return this.pow(f, y);
      }
      for (var E = this.m.subn(1), B = 0; !E.isZero() && E.andln(1) === 0; )
        B++, E.iushrn(1);
      n(!E.isZero());
      var N = new i(1).toRed(this), F = N.redNeg(), x = this.m.subn(1).iushrn(1), d = this.m.bitLength();
      for (d = new i(2 * d * d).toRed(this); this.pow(d, x).cmp(F) !== 0; )
        d.redIAdd(F);
      for (var M = this.pow(d, E), tt = this.pow(f, E.addn(1).iushrn(1)), it = this.pow(f, E), at = B; it.cmp(N) !== 0; ) {
        for (var Lt = it, lt = 0; Lt.cmp(N) !== 0; lt++)
          Lt = Lt.redSqr();
        n(lt < at);
        var Bt = this.pow(M, new i(1).iushln(at - lt - 1));
        tt = tt.redMul(Bt), M = Bt.redSqr(), it = it.redMul(M), at = lt;
      }
      return tt;
    }, dt.prototype.invm = function(f) {
      var g = f._invmp(this.m);
      return g.negative !== 0 ? (g.negative = 0, this.imod(g).redNeg()) : this.imod(g);
    }, dt.prototype.pow = function(f, g) {
      if (g.isZero())
        return new i(1).toRed(this);
      if (g.cmpn(1) === 0)
        return f.clone();
      var y = 4, E = new Array(1 << y);
      E[0] = new i(1).toRed(this), E[1] = f;
      for (var B = 2; B < E.length; B++)
        E[B] = this.mul(E[B - 1], f);
      var N = E[0], F = 0, x = 0, d = g.bitLength() % 26;
      for (d === 0 && (d = 26), B = g.length - 1; B >= 0; B--) {
        for (var M = g.words[B], tt = d - 1; tt >= 0; tt--) {
          var it = M >> tt & 1;
          if (N !== E[0] && (N = this.sqr(N)), it === 0 && F === 0) {
            x = 0;
            continue;
          }
          F <<= 1, F |= it, x++, !(x !== y && (B !== 0 || tt !== 0)) && (N = this.mul(N, E[F]), x = 0, F = 0);
        }
        d = 26;
      }
      return N;
    }, dt.prototype.convertTo = function(f) {
      var g = f.umod(this.m);
      return g === f ? g.clone() : g;
    }, dt.prototype.convertFrom = function(f) {
      var g = f.clone();
      return g.red = null, g;
    }, i.mont = function(f) {
      return new Rt(f);
    };
    function Rt(v) {
      dt.call(this, v), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new i(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    s(Rt, dt), Rt.prototype.convertTo = function(f) {
      return this.imod(f.ushln(this.shift));
    }, Rt.prototype.convertFrom = function(f) {
      var g = this.imod(f.mul(this.rinv));
      return g.red = null, g;
    }, Rt.prototype.imul = function(f, g) {
      if (f.isZero() || g.isZero())
        return f.words[0] = 0, f.length = 1, f;
      var y = f.imul(g), E = y.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), B = y.isub(E).iushrn(this.shift), N = B;
      return B.cmp(this.m) >= 0 ? N = B.isub(this.m) : B.cmpn(0) < 0 && (N = B.iadd(this.m)), N._forceRed(this);
    }, Rt.prototype.mul = function(f, g) {
      if (f.isZero() || g.isZero())
        return new i(0)._forceRed(this);
      var y = f.mul(g), E = y.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), B = y.isub(E).iushrn(this.shift), N = B;
      return B.cmp(this.m) >= 0 ? N = B.isub(this.m) : B.cmpn(0) < 0 && (N = B.iadd(this.m)), N._forceRed(this);
    }, Rt.prototype.invm = function(f) {
      var g = this.imod(f._invmp(this.m).mul(this.r2));
      return g._forceRed(this);
    };
  })(r, $e);
})(qs);
const Lo = qs.exports;
var gn = { exports: {} }, Ys = {};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(r) {
  const t = En, e = oi, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  r.Buffer = u, r.SlowBuffer = D, r.INSPECT_MAX_BYTES = 50;
  const s = 2147483647;
  r.kMaxLength = s, u.TYPED_ARRAY_SUPPORT = i(), !u.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function i() {
    try {
      const l = new Uint8Array(1), o = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(o, Uint8Array.prototype), Object.setPrototypeOf(l, o), l.foo() === 42;
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
  function c(l) {
    if (l > s)
      throw new RangeError('The value "' + l + '" is invalid for option "size"');
    const o = new Uint8Array(l);
    return Object.setPrototypeOf(o, u.prototype), o;
  }
  function u(l, o, a) {
    if (typeof l == "number") {
      if (typeof o == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return S(l);
    }
    return p(l, o, a);
  }
  u.poolSize = 8192;
  function p(l, o, a) {
    if (typeof l == "string")
      return T(l, o);
    if (ArrayBuffer.isView(l))
      return C(l);
    if (l == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof l
      );
    if (Ht(l, ArrayBuffer) || l && Ht(l.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Ht(l, SharedArrayBuffer) || l && Ht(l.buffer, SharedArrayBuffer)))
      return k(l, o, a);
    if (typeof l == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const h = l.valueOf && l.valueOf();
    if (h != null && h !== l)
      return u.from(h, o, a);
    const w = R(l);
    if (w)
      return w;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof l[Symbol.toPrimitive] == "function")
      return u.from(l[Symbol.toPrimitive]("string"), o, a);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof l
    );
  }
  u.from = function(l, o, a) {
    return p(l, o, a);
  }, Object.setPrototypeOf(u.prototype, Uint8Array.prototype), Object.setPrototypeOf(u, Uint8Array);
  function m(l) {
    if (typeof l != "number")
      throw new TypeError('"size" argument must be of type number');
    if (l < 0)
      throw new RangeError('The value "' + l + '" is invalid for option "size"');
  }
  function A(l, o, a) {
    return m(l), l <= 0 ? c(l) : o !== void 0 ? typeof a == "string" ? c(l).fill(o, a) : c(l).fill(o) : c(l);
  }
  u.alloc = function(l, o, a) {
    return A(l, o, a);
  };
  function S(l) {
    return m(l), c(l < 0 ? 0 : U(l) | 0);
  }
  u.allocUnsafe = function(l) {
    return S(l);
  }, u.allocUnsafeSlow = function(l) {
    return S(l);
  };
  function T(l, o) {
    if ((typeof o != "string" || o === "") && (o = "utf8"), !u.isEncoding(o))
      throw new TypeError("Unknown encoding: " + o);
    const a = L(l, o) | 0;
    let h = c(a);
    const w = h.write(l, o);
    return w !== a && (h = h.slice(0, w)), h;
  }
  function I(l) {
    const o = l.length < 0 ? 0 : U(l.length) | 0, a = c(o);
    for (let h = 0; h < o; h += 1)
      a[h] = l[h] & 255;
    return a;
  }
  function C(l) {
    if (Ht(l, Uint8Array)) {
      const o = new Uint8Array(l);
      return k(o.buffer, o.byteOffset, o.byteLength);
    }
    return I(l);
  }
  function k(l, o, a) {
    if (o < 0 || l.byteLength < o)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (l.byteLength < o + (a || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let h;
    return o === void 0 && a === void 0 ? h = new Uint8Array(l) : a === void 0 ? h = new Uint8Array(l, o) : h = new Uint8Array(l, o, a), Object.setPrototypeOf(h, u.prototype), h;
  }
  function R(l) {
    if (u.isBuffer(l)) {
      const o = U(l.length) | 0, a = c(o);
      return a.length === 0 || l.copy(a, 0, 0, o), a;
    }
    if (l.length !== void 0)
      return typeof l.length != "number" || Ct(l.length) ? c(0) : I(l);
    if (l.type === "Buffer" && Array.isArray(l.data))
      return I(l.data);
  }
  function U(l) {
    if (l >= s)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
    return l | 0;
  }
  function D(l) {
    return +l != l && (l = 0), u.alloc(+l);
  }
  u.isBuffer = function(o) {
    return o != null && o._isBuffer === !0 && o !== u.prototype;
  }, u.compare = function(o, a) {
    if (Ht(o, Uint8Array) && (o = u.from(o, o.offset, o.byteLength)), Ht(a, Uint8Array) && (a = u.from(a, a.offset, a.byteLength)), !u.isBuffer(o) || !u.isBuffer(a))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (o === a)
      return 0;
    let h = o.length, w = a.length;
    for (let b = 0, _ = Math.min(h, w); b < _; ++b)
      if (o[b] !== a[b]) {
        h = o[b], w = a[b];
        break;
      }
    return h < w ? -1 : w < h ? 1 : 0;
  }, u.isEncoding = function(o) {
    switch (String(o).toLowerCase()) {
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
  }, u.concat = function(o, a) {
    if (!Array.isArray(o))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (o.length === 0)
      return u.alloc(0);
    let h;
    if (a === void 0)
      for (a = 0, h = 0; h < o.length; ++h)
        a += o[h].length;
    const w = u.allocUnsafe(a);
    let b = 0;
    for (h = 0; h < o.length; ++h) {
      let _ = o[h];
      if (Ht(_, Uint8Array))
        b + _.length > w.length ? (u.isBuffer(_) || (_ = u.from(_)), _.copy(w, b)) : Uint8Array.prototype.set.call(
          w,
          _,
          b
        );
      else if (u.isBuffer(_))
        _.copy(w, b);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      b += _.length;
    }
    return w;
  };
  function L(l, o) {
    if (u.isBuffer(l))
      return l.length;
    if (ArrayBuffer.isView(l) || Ht(l, ArrayBuffer))
      return l.byteLength;
    if (typeof l != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof l
      );
    const a = l.length, h = arguments.length > 2 && arguments[2] === !0;
    if (!h && a === 0)
      return 0;
    let w = !1;
    for (; ; )
      switch (o) {
        case "ascii":
        case "latin1":
        case "binary":
          return a;
        case "utf8":
        case "utf-8":
          return Tt(l).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return a * 2;
        case "hex":
          return a >>> 1;
        case "base64":
          return Ot(l).length;
        default:
          if (w)
            return h ? -1 : Tt(l).length;
          o = ("" + o).toLowerCase(), w = !0;
      }
  }
  u.byteLength = L;
  function H(l, o, a) {
    let h = !1;
    if ((o === void 0 || o < 0) && (o = 0), o > this.length || ((a === void 0 || a > this.length) && (a = this.length), a <= 0) || (a >>>= 0, o >>>= 0, a <= o))
      return "";
    for (l || (l = "utf8"); ; )
      switch (l) {
        case "hex":
          return N(this, o, a);
        case "utf8":
        case "utf-8":
          return f(this, o, a);
        case "ascii":
          return E(this, o, a);
        case "latin1":
        case "binary":
          return B(this, o, a);
        case "base64":
          return v(this, o, a);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return F(this, o, a);
        default:
          if (h)
            throw new TypeError("Unknown encoding: " + l);
          l = (l + "").toLowerCase(), h = !0;
      }
  }
  u.prototype._isBuffer = !0;
  function P(l, o, a) {
    const h = l[o];
    l[o] = l[a], l[a] = h;
  }
  u.prototype.swap16 = function() {
    const o = this.length;
    if (o % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let a = 0; a < o; a += 2)
      P(this, a, a + 1);
    return this;
  }, u.prototype.swap32 = function() {
    const o = this.length;
    if (o % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let a = 0; a < o; a += 4)
      P(this, a, a + 3), P(this, a + 1, a + 2);
    return this;
  }, u.prototype.swap64 = function() {
    const o = this.length;
    if (o % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let a = 0; a < o; a += 8)
      P(this, a, a + 7), P(this, a + 1, a + 6), P(this, a + 2, a + 5), P(this, a + 3, a + 4);
    return this;
  }, u.prototype.toString = function() {
    const o = this.length;
    return o === 0 ? "" : arguments.length === 0 ? f(this, 0, o) : H.apply(this, arguments);
  }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(o) {
    if (!u.isBuffer(o))
      throw new TypeError("Argument must be a Buffer");
    return this === o ? !0 : u.compare(this, o) === 0;
  }, u.prototype.inspect = function() {
    let o = "";
    const a = r.INSPECT_MAX_BYTES;
    return o = this.toString("hex", 0, a).replace(/(.{2})/g, "$1 ").trim(), this.length > a && (o += " ... "), "<Buffer " + o + ">";
  }, n && (u.prototype[n] = u.prototype.inspect), u.prototype.compare = function(o, a, h, w, b) {
    if (Ht(o, Uint8Array) && (o = u.from(o, o.offset, o.byteLength)), !u.isBuffer(o))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof o
      );
    if (a === void 0 && (a = 0), h === void 0 && (h = o ? o.length : 0), w === void 0 && (w = 0), b === void 0 && (b = this.length), a < 0 || h > o.length || w < 0 || b > this.length)
      throw new RangeError("out of range index");
    if (w >= b && a >= h)
      return 0;
    if (w >= b)
      return -1;
    if (a >= h)
      return 1;
    if (a >>>= 0, h >>>= 0, w >>>= 0, b >>>= 0, this === o)
      return 0;
    let _ = b - w, j = h - a;
    const $ = Math.min(_, j), X = this.slice(w, b), ft = o.slice(a, h);
    for (let V = 0; V < $; ++V)
      if (X[V] !== ft[V]) {
        _ = X[V], j = ft[V];
        break;
      }
    return _ < j ? -1 : j < _ ? 1 : 0;
  };
  function Q(l, o, a, h, w) {
    if (l.length === 0)
      return -1;
    if (typeof a == "string" ? (h = a, a = 0) : a > 2147483647 ? a = 2147483647 : a < -2147483648 && (a = -2147483648), a = +a, Ct(a) && (a = w ? 0 : l.length - 1), a < 0 && (a = l.length + a), a >= l.length) {
      if (w)
        return -1;
      a = l.length - 1;
    } else if (a < 0)
      if (w)
        a = 0;
      else
        return -1;
    if (typeof o == "string" && (o = u.from(o, h)), u.isBuffer(o))
      return o.length === 0 ? -1 : W(l, o, a, h, w);
    if (typeof o == "number")
      return o = o & 255, typeof Uint8Array.prototype.indexOf == "function" ? w ? Uint8Array.prototype.indexOf.call(l, o, a) : Uint8Array.prototype.lastIndexOf.call(l, o, a) : W(l, [o], a, h, w);
    throw new TypeError("val must be string, number or Buffer");
  }
  function W(l, o, a, h, w) {
    let b = 1, _ = l.length, j = o.length;
    if (h !== void 0 && (h = String(h).toLowerCase(), h === "ucs2" || h === "ucs-2" || h === "utf16le" || h === "utf-16le")) {
      if (l.length < 2 || o.length < 2)
        return -1;
      b = 2, _ /= 2, j /= 2, a /= 2;
    }
    function $(ft, V) {
      return b === 1 ? ft[V] : ft.readUInt16BE(V * b);
    }
    let X;
    if (w) {
      let ft = -1;
      for (X = a; X < _; X++)
        if ($(l, X) === $(o, ft === -1 ? 0 : X - ft)) {
          if (ft === -1 && (ft = X), X - ft + 1 === j)
            return ft * b;
        } else
          ft !== -1 && (X -= X - ft), ft = -1;
    } else
      for (a + j > _ && (a = _ - j), X = a; X >= 0; X--) {
        let ft = !0;
        for (let V = 0; V < j; V++)
          if ($(l, X + V) !== $(o, V)) {
            ft = !1;
            break;
          }
        if (ft)
          return X;
      }
    return -1;
  }
  u.prototype.includes = function(o, a, h) {
    return this.indexOf(o, a, h) !== -1;
  }, u.prototype.indexOf = function(o, a, h) {
    return Q(this, o, a, h, !0);
  }, u.prototype.lastIndexOf = function(o, a, h) {
    return Q(this, o, a, h, !1);
  };
  function Y(l, o, a, h) {
    a = Number(a) || 0;
    const w = l.length - a;
    h ? (h = Number(h), h > w && (h = w)) : h = w;
    const b = o.length;
    h > b / 2 && (h = b / 2);
    let _;
    for (_ = 0; _ < h; ++_) {
      const j = parseInt(o.substr(_ * 2, 2), 16);
      if (Ct(j))
        return _;
      l[a + _] = j;
    }
    return _;
  }
  function wt(l, o, a, h) {
    return St(Tt(o, l.length - a), l, a, h);
  }
  function Nt(l, o, a, h) {
    return St(zt(o), l, a, h);
  }
  function dt(l, o, a, h) {
    return St(Ot(o), l, a, h);
  }
  function Rt(l, o, a, h) {
    return St(Hr(o, l.length - a), l, a, h);
  }
  u.prototype.write = function(o, a, h, w) {
    if (a === void 0)
      w = "utf8", h = this.length, a = 0;
    else if (h === void 0 && typeof a == "string")
      w = a, h = this.length, a = 0;
    else if (isFinite(a))
      a = a >>> 0, isFinite(h) ? (h = h >>> 0, w === void 0 && (w = "utf8")) : (w = h, h = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const b = this.length - a;
    if ((h === void 0 || h > b) && (h = b), o.length > 0 && (h < 0 || a < 0) || a > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    w || (w = "utf8");
    let _ = !1;
    for (; ; )
      switch (w) {
        case "hex":
          return Y(this, o, a, h);
        case "utf8":
        case "utf-8":
          return wt(this, o, a, h);
        case "ascii":
        case "latin1":
        case "binary":
          return Nt(this, o, a, h);
        case "base64":
          return dt(this, o, a, h);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Rt(this, o, a, h);
        default:
          if (_)
            throw new TypeError("Unknown encoding: " + w);
          w = ("" + w).toLowerCase(), _ = !0;
      }
  }, u.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function v(l, o, a) {
    return o === 0 && a === l.length ? t.fromByteArray(l) : t.fromByteArray(l.slice(o, a));
  }
  function f(l, o, a) {
    a = Math.min(l.length, a);
    const h = [];
    let w = o;
    for (; w < a; ) {
      const b = l[w];
      let _ = null, j = b > 239 ? 4 : b > 223 ? 3 : b > 191 ? 2 : 1;
      if (w + j <= a) {
        let $, X, ft, V;
        switch (j) {
          case 1:
            b < 128 && (_ = b);
            break;
          case 2:
            $ = l[w + 1], ($ & 192) === 128 && (V = (b & 31) << 6 | $ & 63, V > 127 && (_ = V));
            break;
          case 3:
            $ = l[w + 1], X = l[w + 2], ($ & 192) === 128 && (X & 192) === 128 && (V = (b & 15) << 12 | ($ & 63) << 6 | X & 63, V > 2047 && (V < 55296 || V > 57343) && (_ = V));
            break;
          case 4:
            $ = l[w + 1], X = l[w + 2], ft = l[w + 3], ($ & 192) === 128 && (X & 192) === 128 && (ft & 192) === 128 && (V = (b & 15) << 18 | ($ & 63) << 12 | (X & 63) << 6 | ft & 63, V > 65535 && V < 1114112 && (_ = V));
        }
      }
      _ === null ? (_ = 65533, j = 1) : _ > 65535 && (_ -= 65536, h.push(_ >>> 10 & 1023 | 55296), _ = 56320 | _ & 1023), h.push(_), w += j;
    }
    return y(h);
  }
  const g = 4096;
  function y(l) {
    const o = l.length;
    if (o <= g)
      return String.fromCharCode.apply(String, l);
    let a = "", h = 0;
    for (; h < o; )
      a += String.fromCharCode.apply(
        String,
        l.slice(h, h += g)
      );
    return a;
  }
  function E(l, o, a) {
    let h = "";
    a = Math.min(l.length, a);
    for (let w = o; w < a; ++w)
      h += String.fromCharCode(l[w] & 127);
    return h;
  }
  function B(l, o, a) {
    let h = "";
    a = Math.min(l.length, a);
    for (let w = o; w < a; ++w)
      h += String.fromCharCode(l[w]);
    return h;
  }
  function N(l, o, a) {
    const h = l.length;
    (!o || o < 0) && (o = 0), (!a || a < 0 || a > h) && (a = h);
    let w = "";
    for (let b = o; b < a; ++b)
      w += Gt[l[b]];
    return w;
  }
  function F(l, o, a) {
    const h = l.slice(o, a);
    let w = "";
    for (let b = 0; b < h.length - 1; b += 2)
      w += String.fromCharCode(h[b] + h[b + 1] * 256);
    return w;
  }
  u.prototype.slice = function(o, a) {
    const h = this.length;
    o = ~~o, a = a === void 0 ? h : ~~a, o < 0 ? (o += h, o < 0 && (o = 0)) : o > h && (o = h), a < 0 ? (a += h, a < 0 && (a = 0)) : a > h && (a = h), a < o && (a = o);
    const w = this.subarray(o, a);
    return Object.setPrototypeOf(w, u.prototype), w;
  };
  function x(l, o, a) {
    if (l % 1 !== 0 || l < 0)
      throw new RangeError("offset is not uint");
    if (l + o > a)
      throw new RangeError("Trying to access beyond buffer length");
  }
  u.prototype.readUintLE = u.prototype.readUIntLE = function(o, a, h) {
    o = o >>> 0, a = a >>> 0, h || x(o, a, this.length);
    let w = this[o], b = 1, _ = 0;
    for (; ++_ < a && (b *= 256); )
      w += this[o + _] * b;
    return w;
  }, u.prototype.readUintBE = u.prototype.readUIntBE = function(o, a, h) {
    o = o >>> 0, a = a >>> 0, h || x(o, a, this.length);
    let w = this[o + --a], b = 1;
    for (; a > 0 && (b *= 256); )
      w += this[o + --a] * b;
    return w;
  }, u.prototype.readUint8 = u.prototype.readUInt8 = function(o, a) {
    return o = o >>> 0, a || x(o, 1, this.length), this[o];
  }, u.prototype.readUint16LE = u.prototype.readUInt16LE = function(o, a) {
    return o = o >>> 0, a || x(o, 2, this.length), this[o] | this[o + 1] << 8;
  }, u.prototype.readUint16BE = u.prototype.readUInt16BE = function(o, a) {
    return o = o >>> 0, a || x(o, 2, this.length), this[o] << 8 | this[o + 1];
  }, u.prototype.readUint32LE = u.prototype.readUInt32LE = function(o, a) {
    return o = o >>> 0, a || x(o, 4, this.length), (this[o] | this[o + 1] << 8 | this[o + 2] << 16) + this[o + 3] * 16777216;
  }, u.prototype.readUint32BE = u.prototype.readUInt32BE = function(o, a) {
    return o = o >>> 0, a || x(o, 4, this.length), this[o] * 16777216 + (this[o + 1] << 16 | this[o + 2] << 8 | this[o + 3]);
  }, u.prototype.readBigUInt64LE = Jt(function(o) {
    o = o >>> 0, Me(o, "offset");
    const a = this[o], h = this[o + 7];
    (a === void 0 || h === void 0) && xt(o, this.length - 8);
    const w = a + this[++o] * 2 ** 8 + this[++o] * 2 ** 16 + this[++o] * 2 ** 24, b = this[++o] + this[++o] * 2 ** 8 + this[++o] * 2 ** 16 + h * 2 ** 24;
    return BigInt(w) + (BigInt(b) << BigInt(32));
  }), u.prototype.readBigUInt64BE = Jt(function(o) {
    o = o >>> 0, Me(o, "offset");
    const a = this[o], h = this[o + 7];
    (a === void 0 || h === void 0) && xt(o, this.length - 8);
    const w = a * 2 ** 24 + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + this[++o], b = this[++o] * 2 ** 24 + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + h;
    return (BigInt(w) << BigInt(32)) + BigInt(b);
  }), u.prototype.readIntLE = function(o, a, h) {
    o = o >>> 0, a = a >>> 0, h || x(o, a, this.length);
    let w = this[o], b = 1, _ = 0;
    for (; ++_ < a && (b *= 256); )
      w += this[o + _] * b;
    return b *= 128, w >= b && (w -= Math.pow(2, 8 * a)), w;
  }, u.prototype.readIntBE = function(o, a, h) {
    o = o >>> 0, a = a >>> 0, h || x(o, a, this.length);
    let w = a, b = 1, _ = this[o + --w];
    for (; w > 0 && (b *= 256); )
      _ += this[o + --w] * b;
    return b *= 128, _ >= b && (_ -= Math.pow(2, 8 * a)), _;
  }, u.prototype.readInt8 = function(o, a) {
    return o = o >>> 0, a || x(o, 1, this.length), this[o] & 128 ? (255 - this[o] + 1) * -1 : this[o];
  }, u.prototype.readInt16LE = function(o, a) {
    o = o >>> 0, a || x(o, 2, this.length);
    const h = this[o] | this[o + 1] << 8;
    return h & 32768 ? h | 4294901760 : h;
  }, u.prototype.readInt16BE = function(o, a) {
    o = o >>> 0, a || x(o, 2, this.length);
    const h = this[o + 1] | this[o] << 8;
    return h & 32768 ? h | 4294901760 : h;
  }, u.prototype.readInt32LE = function(o, a) {
    return o = o >>> 0, a || x(o, 4, this.length), this[o] | this[o + 1] << 8 | this[o + 2] << 16 | this[o + 3] << 24;
  }, u.prototype.readInt32BE = function(o, a) {
    return o = o >>> 0, a || x(o, 4, this.length), this[o] << 24 | this[o + 1] << 16 | this[o + 2] << 8 | this[o + 3];
  }, u.prototype.readBigInt64LE = Jt(function(o) {
    o = o >>> 0, Me(o, "offset");
    const a = this[o], h = this[o + 7];
    (a === void 0 || h === void 0) && xt(o, this.length - 8);
    const w = this[o + 4] + this[o + 5] * 2 ** 8 + this[o + 6] * 2 ** 16 + (h << 24);
    return (BigInt(w) << BigInt(32)) + BigInt(a + this[++o] * 2 ** 8 + this[++o] * 2 ** 16 + this[++o] * 2 ** 24);
  }), u.prototype.readBigInt64BE = Jt(function(o) {
    o = o >>> 0, Me(o, "offset");
    const a = this[o], h = this[o + 7];
    (a === void 0 || h === void 0) && xt(o, this.length - 8);
    const w = (a << 24) + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + this[++o];
    return (BigInt(w) << BigInt(32)) + BigInt(this[++o] * 2 ** 24 + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + h);
  }), u.prototype.readFloatLE = function(o, a) {
    return o = o >>> 0, a || x(o, 4, this.length), e.read(this, o, !0, 23, 4);
  }, u.prototype.readFloatBE = function(o, a) {
    return o = o >>> 0, a || x(o, 4, this.length), e.read(this, o, !1, 23, 4);
  }, u.prototype.readDoubleLE = function(o, a) {
    return o = o >>> 0, a || x(o, 8, this.length), e.read(this, o, !0, 52, 8);
  }, u.prototype.readDoubleBE = function(o, a) {
    return o = o >>> 0, a || x(o, 8, this.length), e.read(this, o, !1, 52, 8);
  };
  function d(l, o, a, h, w, b) {
    if (!u.isBuffer(l))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (o > w || o < b)
      throw new RangeError('"value" argument is out of bounds');
    if (a + h > l.length)
      throw new RangeError("Index out of range");
  }
  u.prototype.writeUintLE = u.prototype.writeUIntLE = function(o, a, h, w) {
    if (o = +o, a = a >>> 0, h = h >>> 0, !w) {
      const j = Math.pow(2, 8 * h) - 1;
      d(this, o, a, h, j, 0);
    }
    let b = 1, _ = 0;
    for (this[a] = o & 255; ++_ < h && (b *= 256); )
      this[a + _] = o / b & 255;
    return a + h;
  }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(o, a, h, w) {
    if (o = +o, a = a >>> 0, h = h >>> 0, !w) {
      const j = Math.pow(2, 8 * h) - 1;
      d(this, o, a, h, j, 0);
    }
    let b = h - 1, _ = 1;
    for (this[a + b] = o & 255; --b >= 0 && (_ *= 256); )
      this[a + b] = o / _ & 255;
    return a + h;
  }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(o, a, h) {
    return o = +o, a = a >>> 0, h || d(this, o, a, 1, 255, 0), this[a] = o & 255, a + 1;
  }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(o, a, h) {
    return o = +o, a = a >>> 0, h || d(this, o, a, 2, 65535, 0), this[a] = o & 255, this[a + 1] = o >>> 8, a + 2;
  }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(o, a, h) {
    return o = +o, a = a >>> 0, h || d(this, o, a, 2, 65535, 0), this[a] = o >>> 8, this[a + 1] = o & 255, a + 2;
  }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(o, a, h) {
    return o = +o, a = a >>> 0, h || d(this, o, a, 4, 4294967295, 0), this[a + 3] = o >>> 24, this[a + 2] = o >>> 16, this[a + 1] = o >>> 8, this[a] = o & 255, a + 4;
  }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(o, a, h) {
    return o = +o, a = a >>> 0, h || d(this, o, a, 4, 4294967295, 0), this[a] = o >>> 24, this[a + 1] = o >>> 16, this[a + 2] = o >>> 8, this[a + 3] = o & 255, a + 4;
  };
  function M(l, o, a, h, w) {
    Ut(o, h, w, l, a, 7);
    let b = Number(o & BigInt(4294967295));
    l[a++] = b, b = b >> 8, l[a++] = b, b = b >> 8, l[a++] = b, b = b >> 8, l[a++] = b;
    let _ = Number(o >> BigInt(32) & BigInt(4294967295));
    return l[a++] = _, _ = _ >> 8, l[a++] = _, _ = _ >> 8, l[a++] = _, _ = _ >> 8, l[a++] = _, a;
  }
  function tt(l, o, a, h, w) {
    Ut(o, h, w, l, a, 7);
    let b = Number(o & BigInt(4294967295));
    l[a + 7] = b, b = b >> 8, l[a + 6] = b, b = b >> 8, l[a + 5] = b, b = b >> 8, l[a + 4] = b;
    let _ = Number(o >> BigInt(32) & BigInt(4294967295));
    return l[a + 3] = _, _ = _ >> 8, l[a + 2] = _, _ = _ >> 8, l[a + 1] = _, _ = _ >> 8, l[a] = _, a + 8;
  }
  u.prototype.writeBigUInt64LE = Jt(function(o, a = 0) {
    return M(this, o, a, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeBigUInt64BE = Jt(function(o, a = 0) {
    return tt(this, o, a, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeIntLE = function(o, a, h, w) {
    if (o = +o, a = a >>> 0, !w) {
      const $ = Math.pow(2, 8 * h - 1);
      d(this, o, a, h, $ - 1, -$);
    }
    let b = 0, _ = 1, j = 0;
    for (this[a] = o & 255; ++b < h && (_ *= 256); )
      o < 0 && j === 0 && this[a + b - 1] !== 0 && (j = 1), this[a + b] = (o / _ >> 0) - j & 255;
    return a + h;
  }, u.prototype.writeIntBE = function(o, a, h, w) {
    if (o = +o, a = a >>> 0, !w) {
      const $ = Math.pow(2, 8 * h - 1);
      d(this, o, a, h, $ - 1, -$);
    }
    let b = h - 1, _ = 1, j = 0;
    for (this[a + b] = o & 255; --b >= 0 && (_ *= 256); )
      o < 0 && j === 0 && this[a + b + 1] !== 0 && (j = 1), this[a + b] = (o / _ >> 0) - j & 255;
    return a + h;
  }, u.prototype.writeInt8 = function(o, a, h) {
    return o = +o, a = a >>> 0, h || d(this, o, a, 1, 127, -128), o < 0 && (o = 255 + o + 1), this[a] = o & 255, a + 1;
  }, u.prototype.writeInt16LE = function(o, a, h) {
    return o = +o, a = a >>> 0, h || d(this, o, a, 2, 32767, -32768), this[a] = o & 255, this[a + 1] = o >>> 8, a + 2;
  }, u.prototype.writeInt16BE = function(o, a, h) {
    return o = +o, a = a >>> 0, h || d(this, o, a, 2, 32767, -32768), this[a] = o >>> 8, this[a + 1] = o & 255, a + 2;
  }, u.prototype.writeInt32LE = function(o, a, h) {
    return o = +o, a = a >>> 0, h || d(this, o, a, 4, 2147483647, -2147483648), this[a] = o & 255, this[a + 1] = o >>> 8, this[a + 2] = o >>> 16, this[a + 3] = o >>> 24, a + 4;
  }, u.prototype.writeInt32BE = function(o, a, h) {
    return o = +o, a = a >>> 0, h || d(this, o, a, 4, 2147483647, -2147483648), o < 0 && (o = 4294967295 + o + 1), this[a] = o >>> 24, this[a + 1] = o >>> 16, this[a + 2] = o >>> 8, this[a + 3] = o & 255, a + 4;
  }, u.prototype.writeBigInt64LE = Jt(function(o, a = 0) {
    return M(this, o, a, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), u.prototype.writeBigInt64BE = Jt(function(o, a = 0) {
    return tt(this, o, a, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function it(l, o, a, h, w, b) {
    if (a + h > l.length)
      throw new RangeError("Index out of range");
    if (a < 0)
      throw new RangeError("Index out of range");
  }
  function at(l, o, a, h, w) {
    return o = +o, a = a >>> 0, w || it(l, o, a, 4), e.write(l, o, a, h, 23, 4), a + 4;
  }
  u.prototype.writeFloatLE = function(o, a, h) {
    return at(this, o, a, !0, h);
  }, u.prototype.writeFloatBE = function(o, a, h) {
    return at(this, o, a, !1, h);
  };
  function Lt(l, o, a, h, w) {
    return o = +o, a = a >>> 0, w || it(l, o, a, 8), e.write(l, o, a, h, 52, 8), a + 8;
  }
  u.prototype.writeDoubleLE = function(o, a, h) {
    return Lt(this, o, a, !0, h);
  }, u.prototype.writeDoubleBE = function(o, a, h) {
    return Lt(this, o, a, !1, h);
  }, u.prototype.copy = function(o, a, h, w) {
    if (!u.isBuffer(o))
      throw new TypeError("argument should be a Buffer");
    if (h || (h = 0), !w && w !== 0 && (w = this.length), a >= o.length && (a = o.length), a || (a = 0), w > 0 && w < h && (w = h), w === h || o.length === 0 || this.length === 0)
      return 0;
    if (a < 0)
      throw new RangeError("targetStart out of bounds");
    if (h < 0 || h >= this.length)
      throw new RangeError("Index out of range");
    if (w < 0)
      throw new RangeError("sourceEnd out of bounds");
    w > this.length && (w = this.length), o.length - a < w - h && (w = o.length - a + h);
    const b = w - h;
    return this === o && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(a, h, w) : Uint8Array.prototype.set.call(
      o,
      this.subarray(h, w),
      a
    ), b;
  }, u.prototype.fill = function(o, a, h, w) {
    if (typeof o == "string") {
      if (typeof a == "string" ? (w = a, a = 0, h = this.length) : typeof h == "string" && (w = h, h = this.length), w !== void 0 && typeof w != "string")
        throw new TypeError("encoding must be a string");
      if (typeof w == "string" && !u.isEncoding(w))
        throw new TypeError("Unknown encoding: " + w);
      if (o.length === 1) {
        const _ = o.charCodeAt(0);
        (w === "utf8" && _ < 128 || w === "latin1") && (o = _);
      }
    } else
      typeof o == "number" ? o = o & 255 : typeof o == "boolean" && (o = Number(o));
    if (a < 0 || this.length < a || this.length < h)
      throw new RangeError("Out of range index");
    if (h <= a)
      return this;
    a = a >>> 0, h = h === void 0 ? this.length : h >>> 0, o || (o = 0);
    let b;
    if (typeof o == "number")
      for (b = a; b < h; ++b)
        this[b] = o;
    else {
      const _ = u.isBuffer(o) ? o : u.from(o, w), j = _.length;
      if (j === 0)
        throw new TypeError('The value "' + o + '" is invalid for argument "value"');
      for (b = 0; b < h - a; ++b)
        this[b + a] = _[b % j];
    }
    return this;
  };
  const lt = {};
  function Bt(l, o, a) {
    lt[l] = class extends a {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: o.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${l}]`, this.stack, delete this.name;
      }
      get code() {
        return l;
      }
      set code(w) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: w,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${l}]: ${this.message}`;
      }
    };
  }
  Bt(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(l) {
      return l ? `${l} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), Bt(
    "ERR_INVALID_ARG_TYPE",
    function(l, o) {
      return `The "${l}" argument must be of type number. Received type ${typeof o}`;
    },
    TypeError
  ), Bt(
    "ERR_OUT_OF_RANGE",
    function(l, o, a) {
      let h = `The value of "${l}" is out of range.`, w = a;
      return Number.isInteger(a) && Math.abs(a) > 2 ** 32 ? w = hr(String(a)) : typeof a == "bigint" && (w = String(a), (a > BigInt(2) ** BigInt(32) || a < -(BigInt(2) ** BigInt(32))) && (w = hr(w)), w += "n"), h += ` It must be ${o}. Received ${w}`, h;
    },
    RangeError
  );
  function hr(l) {
    let o = "", a = l.length;
    const h = l[0] === "-" ? 1 : 0;
    for (; a >= h + 4; a -= 3)
      o = `_${l.slice(a - 3, a)}${o}`;
    return `${l.slice(0, a)}${o}`;
  }
  function Dt(l, o, a) {
    Me(o, "offset"), (l[o] === void 0 || l[o + a] === void 0) && xt(o, l.length - (a + 1));
  }
  function Ut(l, o, a, h, w, b) {
    if (l > a || l < o) {
      const _ = typeof o == "bigint" ? "n" : "";
      let j;
      throw b > 3 ? o === 0 || o === BigInt(0) ? j = `>= 0${_} and < 2${_} ** ${(b + 1) * 8}${_}` : j = `>= -(2${_} ** ${(b + 1) * 8 - 1}${_}) and < 2 ** ${(b + 1) * 8 - 1}${_}` : j = `>= ${o}${_} and <= ${a}${_}`, new lt.ERR_OUT_OF_RANGE("value", j, l);
    }
    Dt(h, w, b);
  }
  function Me(l, o) {
    if (typeof l != "number")
      throw new lt.ERR_INVALID_ARG_TYPE(o, "number", l);
  }
  function xt(l, o, a) {
    throw Math.floor(l) !== l ? (Me(l, a), new lt.ERR_OUT_OF_RANGE(a || "offset", "an integer", l)) : o < 0 ? new lt.ERR_BUFFER_OUT_OF_BOUNDS() : new lt.ERR_OUT_OF_RANGE(
      a || "offset",
      `>= ${a ? 1 : 0} and <= ${o}`,
      l
    );
  }
  const Pt = /[^+/0-9A-Za-z-_]/g;
  function zr(l) {
    if (l = l.split("=")[0], l = l.trim().replace(Pt, ""), l.length < 2)
      return "";
    for (; l.length % 4 !== 0; )
      l = l + "=";
    return l;
  }
  function Tt(l, o) {
    o = o || 1 / 0;
    let a;
    const h = l.length;
    let w = null;
    const b = [];
    for (let _ = 0; _ < h; ++_) {
      if (a = l.charCodeAt(_), a > 55295 && a < 57344) {
        if (!w) {
          if (a > 56319) {
            (o -= 3) > -1 && b.push(239, 191, 189);
            continue;
          } else if (_ + 1 === h) {
            (o -= 3) > -1 && b.push(239, 191, 189);
            continue;
          }
          w = a;
          continue;
        }
        if (a < 56320) {
          (o -= 3) > -1 && b.push(239, 191, 189), w = a;
          continue;
        }
        a = (w - 55296 << 10 | a - 56320) + 65536;
      } else
        w && (o -= 3) > -1 && b.push(239, 191, 189);
      if (w = null, a < 128) {
        if ((o -= 1) < 0)
          break;
        b.push(a);
      } else if (a < 2048) {
        if ((o -= 2) < 0)
          break;
        b.push(
          a >> 6 | 192,
          a & 63 | 128
        );
      } else if (a < 65536) {
        if ((o -= 3) < 0)
          break;
        b.push(
          a >> 12 | 224,
          a >> 6 & 63 | 128,
          a & 63 | 128
        );
      } else if (a < 1114112) {
        if ((o -= 4) < 0)
          break;
        b.push(
          a >> 18 | 240,
          a >> 12 & 63 | 128,
          a >> 6 & 63 | 128,
          a & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return b;
  }
  function zt(l) {
    const o = [];
    for (let a = 0; a < l.length; ++a)
      o.push(l.charCodeAt(a) & 255);
    return o;
  }
  function Hr(l, o) {
    let a, h, w;
    const b = [];
    for (let _ = 0; _ < l.length && !((o -= 2) < 0); ++_)
      a = l.charCodeAt(_), h = a >> 8, w = a % 256, b.push(w), b.push(h);
    return b;
  }
  function Ot(l) {
    return t.toByteArray(zr(l));
  }
  function St(l, o, a, h) {
    let w;
    for (w = 0; w < h && !(w + a >= o.length || w >= l.length); ++w)
      o[w + a] = l[w];
    return w;
  }
  function Ht(l, o) {
    return l instanceof o || l != null && l.constructor != null && l.constructor.name != null && l.constructor.name === o.name;
  }
  function Ct(l) {
    return l !== l;
  }
  const Gt = function() {
    const l = "0123456789abcdef", o = new Array(256);
    for (let a = 0; a < 16; ++a) {
      const h = a * 16;
      for (let w = 0; w < 16; ++w)
        o[h + w] = l[a] + l[w];
    }
    return o;
  }();
  function Jt(l) {
    return typeof BigInt > "u" ? Qt : l;
  }
  function Qt() {
    throw new Error("BigInt not supported");
  }
})(Ys);
(function(r, t) {
  var e = Ys, n = e.Buffer;
  function s(c, u) {
    for (var p in c)
      u[p] = c[p];
  }
  n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? r.exports = e : (s(e, t), t.Buffer = i);
  function i(c, u, p) {
    return n(c, u, p);
  }
  s(n, i), i.from = function(c, u, p) {
    if (typeof c == "number")
      throw new TypeError("Argument must not be a number");
    return n(c, u, p);
  }, i.alloc = function(c, u, p) {
    if (typeof c != "number")
      throw new TypeError("Argument must be a number");
    var m = n(c);
    return u !== void 0 ? typeof p == "string" ? m.fill(u, p) : m.fill(u) : m.fill(0), m;
  }, i.allocUnsafe = function(c) {
    if (typeof c != "number")
      throw new TypeError("Argument must be a number");
    return n(c);
  }, i.allocUnsafeSlow = function(c) {
    if (typeof c != "number")
      throw new TypeError("Argument must be a number");
    return e.SlowBuffer(c);
  };
})(gn, gn.exports);
var Ln = gn.exports.Buffer;
function ff(r) {
  if (r.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), e = 0; e < t.length; e++)
    t[e] = 255;
  for (var n = 0; n < r.length; n++) {
    var s = r.charAt(n), i = s.charCodeAt(0);
    if (t[i] !== 255)
      throw new TypeError(s + " is ambiguous");
    t[i] = n;
  }
  var c = r.length, u = r.charAt(0), p = Math.log(c) / Math.log(256), m = Math.log(256) / Math.log(c);
  function A(I) {
    if ((Array.isArray(I) || I instanceof Uint8Array) && (I = Ln.from(I)), !Ln.isBuffer(I))
      throw new TypeError("Expected Buffer");
    if (I.length === 0)
      return "";
    for (var C = 0, k = 0, R = 0, U = I.length; R !== U && I[R] === 0; )
      R++, C++;
    for (var D = (U - R) * m + 1 >>> 0, L = new Uint8Array(D); R !== U; ) {
      for (var H = I[R], P = 0, Q = D - 1; (H !== 0 || P < k) && Q !== -1; Q--, P++)
        H += 256 * L[Q] >>> 0, L[Q] = H % c >>> 0, H = H / c >>> 0;
      if (H !== 0)
        throw new Error("Non-zero carry");
      k = P, R++;
    }
    for (var W = D - k; W !== D && L[W] === 0; )
      W++;
    for (var Y = u.repeat(C); W < D; ++W)
      Y += r.charAt(L[W]);
    return Y;
  }
  function S(I) {
    if (typeof I != "string")
      throw new TypeError("Expected String");
    if (I.length === 0)
      return Ln.alloc(0);
    for (var C = 0, k = 0, R = 0; I[C] === u; )
      k++, C++;
    for (var U = (I.length - C) * p + 1 >>> 0, D = new Uint8Array(U); I[C]; ) {
      var L = t[I.charCodeAt(C)];
      if (L === 255)
        return;
      for (var H = 0, P = U - 1; (L !== 0 || H < R) && P !== -1; P--, H++)
        L += c * D[P] >>> 0, D[P] = L % 256 >>> 0, L = L / 256 >>> 0;
      if (L !== 0)
        throw new Error("Non-zero carry");
      R = H, C++;
    }
    for (var Q = U - R; Q !== U && D[Q] === 0; )
      Q++;
    var W = Ln.allocUnsafe(k + (U - Q));
    W.fill(0, 0, k);
    for (var Y = k; Q !== U; )
      W[Y++] = D[Q++];
    return W;
  }
  function T(I) {
    var C = S(I);
    if (C)
      return C;
    throw new Error("Non-base" + c + " character");
  }
  return {
    encode: A,
    decodeUnsafe: S,
    decode: T
  };
}
var lf = ff, hf = lf, df = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", Be = hf(df);
const pf = (r, t, e) => r & t ^ ~r & e, gf = (r, t, e) => r & t ^ r & e ^ t & e, wf = new Uint32Array([
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
]), wr = new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), yr = new Uint32Array(64);
class yf extends Na {
  constructor() {
    super(64, 32, 8, !1), this.A = wr[0] | 0, this.B = wr[1] | 0, this.C = wr[2] | 0, this.D = wr[3] | 0, this.E = wr[4] | 0, this.F = wr[5] | 0, this.G = wr[6] | 0, this.H = wr[7] | 0;
  }
  get() {
    const { A: t, B: e, C: n, D: s, E: i, F: c, G: u, H: p } = this;
    return [t, e, n, s, i, c, u, p];
  }
  set(t, e, n, s, i, c, u, p) {
    this.A = t | 0, this.B = e | 0, this.C = n | 0, this.D = s | 0, this.E = i | 0, this.F = c | 0, this.G = u | 0, this.H = p | 0;
  }
  process(t, e) {
    for (let S = 0; S < 16; S++, e += 4)
      yr[S] = t.getUint32(e, !1);
    for (let S = 16; S < 64; S++) {
      const T = yr[S - 15], I = yr[S - 2], C = er(T, 7) ^ er(T, 18) ^ T >>> 3, k = er(I, 17) ^ er(I, 19) ^ I >>> 10;
      yr[S] = k + yr[S - 7] + C + yr[S - 16] | 0;
    }
    let { A: n, B: s, C: i, D: c, E: u, F: p, G: m, H: A } = this;
    for (let S = 0; S < 64; S++) {
      const T = er(u, 6) ^ er(u, 11) ^ er(u, 25), I = A + T + pf(u, p, m) + wf[S] + yr[S] | 0, k = (er(n, 2) ^ er(n, 13) ^ er(n, 22)) + gf(n, s, i) | 0;
      A = m, m = p, p = u, u = c + I | 0, c = i, i = s, s = n, n = I + k | 0;
    }
    n = n + this.A | 0, s = s + this.B | 0, i = i + this.C | 0, c = c + this.D | 0, u = u + this.E | 0, p = p + this.F | 0, m = m + this.G | 0, A = A + this.H | 0, this.set(n, s, i, c, u, p, m, A);
  }
  roundClean() {
    yr.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const Ms = Bn(() => new yf());
var ve = {}, Un = gn.exports.Buffer;
function mf(r) {
  if (r.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), e = 0; e < t.length; e++)
    t[e] = 255;
  for (var n = 0; n < r.length; n++) {
    var s = r.charAt(n), i = s.charCodeAt(0);
    if (t[i] !== 255)
      throw new TypeError(s + " is ambiguous");
    t[i] = n;
  }
  var c = r.length, u = r.charAt(0), p = Math.log(c) / Math.log(256), m = Math.log(256) / Math.log(c);
  function A(I) {
    if ((Array.isArray(I) || I instanceof Uint8Array) && (I = Un.from(I)), !Un.isBuffer(I))
      throw new TypeError("Expected Buffer");
    if (I.length === 0)
      return "";
    for (var C = 0, k = 0, R = 0, U = I.length; R !== U && I[R] === 0; )
      R++, C++;
    for (var D = (U - R) * m + 1 >>> 0, L = new Uint8Array(D); R !== U; ) {
      for (var H = I[R], P = 0, Q = D - 1; (H !== 0 || P < k) && Q !== -1; Q--, P++)
        H += 256 * L[Q] >>> 0, L[Q] = H % c >>> 0, H = H / c >>> 0;
      if (H !== 0)
        throw new Error("Non-zero carry");
      k = P, R++;
    }
    for (var W = D - k; W !== D && L[W] === 0; )
      W++;
    for (var Y = u.repeat(C); W < D; ++W)
      Y += r.charAt(L[W]);
    return Y;
  }
  function S(I) {
    if (typeof I != "string")
      throw new TypeError("Expected String");
    if (I.length === 0)
      return Un.alloc(0);
    for (var C = 0, k = 0, R = 0; I[C] === u; )
      k++, C++;
    for (var U = (I.length - C) * p + 1 >>> 0, D = new Uint8Array(U); I[C]; ) {
      var L = t[I.charCodeAt(C)];
      if (L === 255)
        return;
      for (var H = 0, P = U - 1; (L !== 0 || H < R) && P !== -1; P--, H++)
        L += c * D[P] >>> 0, D[P] = L % 256 >>> 0, L = L / 256 >>> 0;
      if (L !== 0)
        throw new Error("Non-zero carry");
      R = H, C++;
    }
    for (var Q = U - R; Q !== U && D[Q] === 0; )
      Q++;
    var W = Un.allocUnsafe(k + (U - Q));
    W.fill(0, 0, k);
    for (var Y = k; Q !== U; )
      W[Y++] = D[Q++];
    return W;
  }
  function T(I) {
    var C = S(I);
    if (C)
      return C;
    throw new Error("Non-base" + c + " character");
  }
  return {
    encode: A,
    decodeUnsafe: S,
    decode: T
  };
}
var Af = mf, bf = Af, xf = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", Ef = bf(xf);
function cr(r, t, e) {
  return t <= r && r <= e;
}
function ci(r) {
  if (r === void 0)
    return {};
  if (r === Object(r))
    return r;
  throw TypeError("Could not convert argument to dictionary");
}
function vf(r) {
  for (var t = String(r), e = t.length, n = 0, s = []; n < e; ) {
    var i = t.charCodeAt(n);
    if (i < 55296 || i > 57343)
      s.push(i);
    else if (56320 <= i && i <= 57343)
      s.push(65533);
    else if (55296 <= i && i <= 56319)
      if (n === e - 1)
        s.push(65533);
      else {
        var c = r.charCodeAt(n + 1);
        if (56320 <= c && c <= 57343) {
          var u = i & 1023, p = c & 1023;
          s.push(65536 + (u << 10) + p), n += 1;
        } else
          s.push(65533);
      }
    n += 1;
  }
  return s;
}
function Bf(r) {
  for (var t = "", e = 0; e < r.length; ++e) {
    var n = r[e];
    n <= 65535 ? t += String.fromCharCode(n) : (n -= 65536, t += String.fromCharCode(
      (n >> 10) + 55296,
      (n & 1023) + 56320
    ));
  }
  return t;
}
var Zn = -1;
function js(r) {
  this.tokens = [].slice.call(r);
}
js.prototype = {
  endOfStream: function() {
    return !this.tokens.length;
  },
  read: function() {
    return this.tokens.length ? this.tokens.shift() : Zn;
  },
  prepend: function(r) {
    if (Array.isArray(r))
      for (var t = r; t.length; )
        this.tokens.unshift(t.pop());
    else
      this.tokens.unshift(r);
  },
  push: function(r) {
    if (Array.isArray(r))
      for (var t = r; t.length; )
        this.tokens.push(t.shift());
    else
      this.tokens.push(r);
  }
};
var Xr = -1;
function Vi(r, t) {
  if (r)
    throw TypeError("Decoder error");
  return t || 65533;
}
var Xn = "utf-8";
function Jn(r, t) {
  if (!(this instanceof Jn))
    return new Jn(r, t);
  if (r = r !== void 0 ? String(r).toLowerCase() : Xn, r !== Xn)
    throw new Error("Encoding not supported. Only utf-8 is supported");
  t = ci(t), this._streaming = !1, this._BOMseen = !1, this._decoder = null, this._fatal = Boolean(t.fatal), this._ignoreBOM = Boolean(t.ignoreBOM), Object.defineProperty(this, "encoding", { value: "utf-8" }), Object.defineProperty(this, "fatal", { value: this._fatal }), Object.defineProperty(this, "ignoreBOM", { value: this._ignoreBOM });
}
Jn.prototype = {
  decode: function(t, e) {
    var n;
    typeof t == "object" && t instanceof ArrayBuffer ? n = new Uint8Array(t) : typeof t == "object" && "buffer" in t && t.buffer instanceof ArrayBuffer ? n = new Uint8Array(
      t.buffer,
      t.byteOffset,
      t.byteLength
    ) : n = new Uint8Array(0), e = ci(e), this._streaming || (this._decoder = new If({ fatal: this._fatal }), this._BOMseen = !1), this._streaming = Boolean(e.stream);
    for (var s = new js(n), i = [], c; !s.endOfStream() && (c = this._decoder.handler(s, s.read()), c !== Xr); )
      c !== null && (Array.isArray(c) ? i.push.apply(i, c) : i.push(c));
    if (!this._streaming) {
      do {
        if (c = this._decoder.handler(s, s.read()), c === Xr)
          break;
        c !== null && (Array.isArray(c) ? i.push.apply(i, c) : i.push(c));
      } while (!s.endOfStream());
      this._decoder = null;
    }
    return i.length && ["utf-8"].indexOf(this.encoding) !== -1 && !this._ignoreBOM && !this._BOMseen && (i[0] === 65279 ? (this._BOMseen = !0, i.shift()) : this._BOMseen = !0), Bf(i);
  }
};
function $n(r, t) {
  if (!(this instanceof $n))
    return new $n(r, t);
  if (r = r !== void 0 ? String(r).toLowerCase() : Xn, r !== Xn)
    throw new Error("Encoding not supported. Only utf-8 is supported");
  t = ci(t), this._streaming = !1, this._encoder = null, this._options = { fatal: Boolean(t.fatal) }, Object.defineProperty(this, "encoding", { value: "utf-8" });
}
$n.prototype = {
  encode: function(t, e) {
    t = t ? String(t) : "", e = ci(e), this._streaming || (this._encoder = new Sf(this._options)), this._streaming = Boolean(e.stream);
    for (var n = [], s = new js(vf(t)), i; !s.endOfStream() && (i = this._encoder.handler(s, s.read()), i !== Xr); )
      Array.isArray(i) ? n.push.apply(n, i) : n.push(i);
    if (!this._streaming) {
      for (; i = this._encoder.handler(s, s.read()), i !== Xr; )
        Array.isArray(i) ? n.push.apply(n, i) : n.push(i);
      this._encoder = null;
    }
    return new Uint8Array(n);
  }
};
function If(r) {
  var t = r.fatal, e = 0, n = 0, s = 0, i = 128, c = 191;
  this.handler = function(u, p) {
    if (p === Zn && s !== 0)
      return s = 0, Vi(t);
    if (p === Zn)
      return Xr;
    if (s === 0) {
      if (cr(p, 0, 127))
        return p;
      if (cr(p, 194, 223))
        s = 1, e = p - 192;
      else if (cr(p, 224, 239))
        p === 224 && (i = 160), p === 237 && (c = 159), s = 2, e = p - 224;
      else if (cr(p, 240, 244))
        p === 240 && (i = 144), p === 244 && (c = 143), s = 3, e = p - 240;
      else
        return Vi(t);
      return e = e << 6 * s, null;
    }
    if (!cr(p, i, c))
      return e = s = n = 0, i = 128, c = 191, u.prepend(p), Vi(t);
    if (i = 128, c = 191, n += 1, e += p - 128 << 6 * (s - n), n !== s)
      return null;
    var m = e;
    return e = s = n = 0, m;
  };
}
function Sf(r) {
  r.fatal, this.handler = function(t, e) {
    if (e === Zn)
      return Xr;
    if (cr(e, 0, 127))
      return e;
    var n, s;
    cr(e, 128, 2047) ? (n = 1, s = 192) : cr(e, 2048, 65535) ? (n = 2, s = 224) : cr(e, 65536, 1114111) && (n = 3, s = 240);
    for (var i = [(e >> 6 * n) + s]; n > 0; ) {
      var c = e >> 6 * (n - 1);
      i.push(128 | c & 63), n -= 1;
    }
    return i;
  };
}
const Mf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TextEncoder: $n,
  TextDecoder: Jn
}, Symbol.toStringTag, { value: "Module" })), _f = /* @__PURE__ */ Ps(Mf);
var kf = $e && $e.__createBinding || (Object.create ? function(r, t, e, n) {
  n === void 0 && (n = e), Object.defineProperty(r, n, { enumerable: !0, get: function() {
    return t[e];
  } });
} : function(r, t, e, n) {
  n === void 0 && (n = e), r[n] = t[e];
}), Tf = $e && $e.__setModuleDefault || (Object.create ? function(r, t) {
  Object.defineProperty(r, "default", { enumerable: !0, value: t });
} : function(r, t) {
  r.default = t;
}), sr = $e && $e.__decorate || function(r, t, e, n) {
  var s = arguments.length, i = s < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, e) : n, c;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(r, t, e, n);
  else
    for (var u = r.length - 1; u >= 0; u--)
      (c = r[u]) && (i = (s < 3 ? c(i) : s > 3 ? c(t, e, i) : c(t, e)) || i);
  return s > 3 && i && Object.defineProperty(t, e, i), i;
}, Cf = $e && $e.__importStar || function(r) {
  if (r && r.__esModule)
    return r;
  var t = {};
  if (r != null)
    for (var e in r)
      e !== "default" && Object.hasOwnProperty.call(r, e) && kf(t, r, e);
  return Tf(t, r), t;
}, za = $e && $e.__importDefault || function(r) {
  return r && r.__esModule ? r : { default: r };
};
Object.defineProperty(ve, "__esModule", { value: !0 });
var Ha = ve.deserializeUnchecked = Ya = ve.deserialize = qa = ve.serialize = ve.BinaryReader = ve.BinaryWriter = ve.BorshError = ve.baseDecode = ve.baseEncode = void 0;
const xr = za(qs.exports), Ga = za(Ef), Nf = Cf(_f), Rf = typeof TextDecoder != "function" ? Nf.TextDecoder : TextDecoder, Lf = new Rf("utf-8", { fatal: !0 });
function Uf(r) {
  return typeof r == "string" && (r = Buffer.from(r, "utf8")), Ga.default.encode(Buffer.from(r));
}
ve.baseEncode = Uf;
function Of(r) {
  return Buffer.from(Ga.default.decode(r));
}
ve.baseDecode = Of;
const Zi = 1024;
class Re extends Error {
  constructor(t) {
    super(t), this.fieldPath = [], this.originalMessage = t;
  }
  addToFieldPath(t) {
    this.fieldPath.splice(0, 0, t), this.message = this.originalMessage + ": " + this.fieldPath.join(".");
  }
}
ve.BorshError = Re;
class Qa {
  constructor() {
    this.buf = Buffer.alloc(Zi), this.length = 0;
  }
  maybeResize() {
    this.buf.length < 16 + this.length && (this.buf = Buffer.concat([this.buf, Buffer.alloc(Zi)]));
  }
  writeU8(t) {
    this.maybeResize(), this.buf.writeUInt8(t, this.length), this.length += 1;
  }
  writeU16(t) {
    this.maybeResize(), this.buf.writeUInt16LE(t, this.length), this.length += 2;
  }
  writeU32(t) {
    this.maybeResize(), this.buf.writeUInt32LE(t, this.length), this.length += 4;
  }
  writeU64(t) {
    this.maybeResize(), this.writeBuffer(Buffer.from(new xr.default(t).toArray("le", 8)));
  }
  writeU128(t) {
    this.maybeResize(), this.writeBuffer(Buffer.from(new xr.default(t).toArray("le", 16)));
  }
  writeU256(t) {
    this.maybeResize(), this.writeBuffer(Buffer.from(new xr.default(t).toArray("le", 32)));
  }
  writeU512(t) {
    this.maybeResize(), this.writeBuffer(Buffer.from(new xr.default(t).toArray("le", 64)));
  }
  writeBuffer(t) {
    this.buf = Buffer.concat([
      Buffer.from(this.buf.subarray(0, this.length)),
      t,
      Buffer.alloc(Zi)
    ]), this.length += t.length;
  }
  writeString(t) {
    this.maybeResize();
    const e = Buffer.from(t, "utf8");
    this.writeU32(e.length), this.writeBuffer(e);
  }
  writeFixedArray(t) {
    this.writeBuffer(Buffer.from(t));
  }
  writeArray(t, e) {
    this.maybeResize(), this.writeU32(t.length);
    for (const n of t)
      this.maybeResize(), e(n);
  }
  toArray() {
    return this.buf.subarray(0, this.length);
  }
}
ve.BinaryWriter = Qa;
function or(r, t, e) {
  const n = e.value;
  e.value = function(...s) {
    try {
      return n.apply(this, s);
    } catch (i) {
      if (i instanceof RangeError) {
        const c = i.code;
        if (["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(c) >= 0)
          throw new Re("Reached the end of buffer when deserializing");
      }
      throw i;
    }
  };
}
class He {
  constructor(t) {
    this.buf = t, this.offset = 0;
  }
  readU8() {
    const t = this.buf.readUInt8(this.offset);
    return this.offset += 1, t;
  }
  readU16() {
    const t = this.buf.readUInt16LE(this.offset);
    return this.offset += 2, t;
  }
  readU32() {
    const t = this.buf.readUInt32LE(this.offset);
    return this.offset += 4, t;
  }
  readU64() {
    const t = this.readBuffer(8);
    return new xr.default(t, "le");
  }
  readU128() {
    const t = this.readBuffer(16);
    return new xr.default(t, "le");
  }
  readU256() {
    const t = this.readBuffer(32);
    return new xr.default(t, "le");
  }
  readU512() {
    const t = this.readBuffer(64);
    return new xr.default(t, "le");
  }
  readBuffer(t) {
    if (this.offset + t > this.buf.length)
      throw new Re(`Expected buffer length ${t} isn't within bounds`);
    const e = this.buf.slice(this.offset, this.offset + t);
    return this.offset += t, e;
  }
  readString() {
    const t = this.readU32(), e = this.readBuffer(t);
    try {
      return Lf.decode(e);
    } catch (n) {
      throw new Re(`Error decoding UTF-8 string: ${n}`);
    }
  }
  readFixedArray(t) {
    return new Uint8Array(this.readBuffer(t));
  }
  readArray(t) {
    const e = this.readU32(), n = Array();
    for (let s = 0; s < e; ++s)
      n.push(t());
    return n;
  }
}
sr([
  or
], He.prototype, "readU8", null);
sr([
  or
], He.prototype, "readU16", null);
sr([
  or
], He.prototype, "readU32", null);
sr([
  or
], He.prototype, "readU64", null);
sr([
  or
], He.prototype, "readU128", null);
sr([
  or
], He.prototype, "readU256", null);
sr([
  or
], He.prototype, "readU512", null);
sr([
  or
], He.prototype, "readString", null);
sr([
  or
], He.prototype, "readFixedArray", null);
sr([
  or
], He.prototype, "readArray", null);
ve.BinaryReader = He;
function Wa(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
function _r(r, t, e, n, s) {
  try {
    if (typeof n == "string")
      s[`write${Wa(n)}`](e);
    else if (n instanceof Array)
      if (typeof n[0] == "number") {
        if (e.length !== n[0])
          throw new Re(`Expecting byte array of length ${n[0]}, but got ${e.length} bytes`);
        s.writeFixedArray(e);
      } else if (n.length === 2 && typeof n[1] == "number") {
        if (e.length !== n[1])
          throw new Re(`Expecting byte array of length ${n[1]}, but got ${e.length} bytes`);
        for (let i = 0; i < n[1]; i++)
          _r(r, null, e[i], n[0], s);
      } else
        s.writeArray(e, (i) => {
          _r(r, t, i, n[0], s);
        });
    else if (n.kind !== void 0)
      switch (n.kind) {
        case "option": {
          e == null ? s.writeU8(0) : (s.writeU8(1), _r(r, t, e, n.type, s));
          break;
        }
        case "map": {
          s.writeU32(e.size), e.forEach((i, c) => {
            _r(r, t, c, n.key, s), _r(r, t, i, n.value, s);
          });
          break;
        }
        default:
          throw new Re(`FieldType ${n} unrecognized`);
      }
    else
      Ka(r, e, s);
  } catch (i) {
    throw i instanceof Re && i.addToFieldPath(t), i;
  }
}
function Ka(r, t, e) {
  if (typeof t.borshSerialize == "function") {
    t.borshSerialize(e);
    return;
  }
  const n = r.get(t.constructor);
  if (!n)
    throw new Re(`Class ${t.constructor.name} is missing in schema`);
  if (n.kind === "struct")
    n.fields.map(([s, i]) => {
      _r(r, s, t[s], i, e);
    });
  else if (n.kind === "enum") {
    const s = t[n.field];
    for (let i = 0; i < n.values.length; ++i) {
      const [c, u] = n.values[i];
      if (c === s) {
        e.writeU8(i), _r(r, c, t[c], u, e);
        break;
      }
    }
  } else
    throw new Re(`Unexpected schema kind: ${n.kind} for ${t.constructor.name}`);
}
function Ff(r, t, e = Qa) {
  const n = new e();
  return Ka(r, t, n), n.toArray();
}
var qa = ve.serialize = Ff;
function kr(r, t, e, n) {
  try {
    if (typeof e == "string")
      return n[`read${Wa(e)}`]();
    if (e instanceof Array) {
      if (typeof e[0] == "number")
        return n.readFixedArray(e[0]);
      if (typeof e[1] == "number") {
        const s = [];
        for (let i = 0; i < e[1]; i++)
          s.push(kr(r, null, e[0], n));
        return s;
      } else
        return n.readArray(() => kr(r, t, e[0], n));
    }
    if (e.kind === "option")
      return n.readU8() ? kr(r, t, e.type, n) : void 0;
    if (e.kind === "map") {
      let s = /* @__PURE__ */ new Map();
      const i = n.readU32();
      for (let c = 0; c < i; c++) {
        const u = kr(r, t, e.key, n), p = kr(r, t, e.value, n);
        s.set(u, p);
      }
      return s;
    }
    return Vs(r, e, n);
  } catch (s) {
    throw s instanceof Re && s.addToFieldPath(t), s;
  }
}
function Vs(r, t, e) {
  if (typeof t.borshDeserialize == "function")
    return t.borshDeserialize(e);
  const n = r.get(t);
  if (!n)
    throw new Re(`Class ${t.name} is missing in schema`);
  if (n.kind === "struct") {
    const s = {};
    for (const [i, c] of r.get(t).fields)
      s[i] = kr(r, i, c, e);
    return new t(s);
  }
  if (n.kind === "enum") {
    const s = e.readU8();
    if (s >= n.values.length)
      throw new Re(`Enum index: ${s} is out of range`);
    const [i, c] = n.values[s], u = kr(r, i, c, e);
    return new t({ [i]: u });
  }
  throw new Re(`Unexpected schema kind: ${n.kind} for ${t.constructor.name}`);
}
function Df(r, t, e, n = He) {
  const s = new n(e), i = Vs(r, t, s);
  if (s.offset < e.length)
    throw new Re(`Unexpected ${e.length - s.offset} bytes after deserialized data`);
  return i;
}
var Ya = ve.deserialize = Df;
function Pf(r, t, e, n = He) {
  const s = new n(e);
  return Vs(r, t, s);
}
Ha = ve.deserializeUnchecked = Pf;
var z = {};
Object.defineProperty(z, "__esModule", { value: !0 });
z.s16 = z.s8 = z.nu64be = z.u48be = z.u40be = z.u32be = z.u24be = z.u16be = Ee = z.nu64 = z.u48 = z.u40 = ut = z.u32 = z.u24 = We = z.u16 = It = z.u8 = Cr = z.offset = z.greedy = z.Constant = z.UTF8 = z.CString = z.Blob = z.Boolean = z.BitField = z.BitStructure = z.VariantLayout = z.Union = z.UnionLayoutDiscriminator = z.UnionDiscriminator = z.Structure = z.Sequence = z.DoubleBE = z.Double = z.FloatBE = z.Float = z.NearInt64BE = z.NearInt64 = z.NearUInt64BE = z.NearUInt64 = z.IntBE = z.Int = z.UIntBE = z.UInt = z.OffsetLayout = z.GreedyCount = z.ExternalLayout = z.bindConstructorLayout = z.nameWithProperty = z.Layout = z.uint8ArrayToBuffer = z.checkUint8Array = void 0;
z.constant = z.utf8 = z.cstr = jt = z.blob = z.unionLayoutDiscriminator = z.union = Le = z.seq = z.bits = nt = z.struct = z.f64be = z.f64 = z.f32be = z.f32 = z.ns64be = z.s48be = z.s40be = z.s32be = z.s24be = z.s16be = Pe = z.ns64 = z.s48 = z.s40 = z.s32 = z.s24 = void 0;
const Zs = Ys;
function en(r) {
  if (!(r instanceof Uint8Array))
    throw new TypeError("b must be a Uint8Array");
}
z.checkUint8Array = en;
function vt(r) {
  return en(r), Zs.Buffer.from(r.buffer, r.byteOffset, r.length);
}
z.uint8ArrayToBuffer = vt;
class kt {
  constructor(t, e) {
    if (!Number.isInteger(t))
      throw new TypeError("span must be an integer");
    this.span = t, this.property = e;
  }
  makeDestinationObject() {
    return {};
  }
  getSpan(t, e) {
    if (0 > this.span)
      throw new RangeError("indeterminate span");
    return this.span;
  }
  replicate(t) {
    const e = Object.create(this.constructor.prototype);
    return Object.assign(e, this), e.property = t, e;
  }
  fromArray(t) {
  }
}
z.Layout = kt;
function Xs(r, t) {
  return t.property ? r + "[" + t.property + "]" : r;
}
z.nameWithProperty = Xs;
function zf(r, t) {
  if (typeof r != "function")
    throw new TypeError("Class must be constructor");
  if (Object.prototype.hasOwnProperty.call(r, "layout_"))
    throw new Error("Class is already bound to a layout");
  if (!(t && t instanceof kt))
    throw new TypeError("layout must be a Layout");
  if (Object.prototype.hasOwnProperty.call(t, "boundConstructor_"))
    throw new Error("layout is already bound to a constructor");
  r.layout_ = t, t.boundConstructor_ = r, t.makeDestinationObject = () => new r(), Object.defineProperty(r.prototype, "encode", {
    value(e, n) {
      return t.encode(this, e, n);
    },
    writable: !0
  }), Object.defineProperty(r, "decode", {
    value(e, n) {
      return t.decode(e, n);
    },
    writable: !0
  });
}
z.bindConstructorLayout = zf;
class Ue extends kt {
  isCount() {
    throw new Error("ExternalLayout is abstract");
  }
}
z.ExternalLayout = Ue;
class ja extends Ue {
  constructor(t = 1, e) {
    if (!Number.isInteger(t) || 0 >= t)
      throw new TypeError("elementSpan must be a (positive) integer");
    super(-1, e), this.elementSpan = t;
  }
  isCount() {
    return !0;
  }
  decode(t, e = 0) {
    en(t);
    const n = t.length - e;
    return Math.floor(n / this.elementSpan);
  }
  encode(t, e, n) {
    return 0;
  }
}
z.GreedyCount = ja;
class Js extends Ue {
  constructor(t, e = 0, n) {
    if (!(t instanceof kt))
      throw new TypeError("layout must be a Layout");
    if (!Number.isInteger(e))
      throw new TypeError("offset must be integer or undefined");
    super(t.span, n || t.property), this.layout = t, this.offset = e;
  }
  isCount() {
    return this.layout instanceof Ve || this.layout instanceof Je;
  }
  decode(t, e = 0) {
    return this.layout.decode(t, e + this.offset);
  }
  encode(t, e, n = 0) {
    return this.layout.encode(t, e, n + this.offset);
  }
}
z.OffsetLayout = Js;
class Ve extends kt {
  constructor(t, e) {
    if (super(t, e), 6 < this.span)
      throw new RangeError("span must not exceed 6 bytes");
  }
  decode(t, e = 0) {
    return vt(t).readUIntLE(e, this.span);
  }
  encode(t, e, n = 0) {
    return vt(e).writeUIntLE(t, n, this.span), this.span;
  }
}
z.UInt = Ve;
class Je extends kt {
  constructor(t, e) {
    if (super(t, e), 6 < this.span)
      throw new RangeError("span must not exceed 6 bytes");
  }
  decode(t, e = 0) {
    return vt(t).readUIntBE(e, this.span);
  }
  encode(t, e, n = 0) {
    return vt(e).writeUIntBE(t, n, this.span), this.span;
  }
}
z.UIntBE = Je;
class Or extends kt {
  constructor(t, e) {
    if (super(t, e), 6 < this.span)
      throw new RangeError("span must not exceed 6 bytes");
  }
  decode(t, e = 0) {
    return vt(t).readIntLE(e, this.span);
  }
  encode(t, e, n = 0) {
    return vt(e).writeIntLE(t, n, this.span), this.span;
  }
}
z.Int = Or;
class rn extends kt {
  constructor(t, e) {
    if (super(t, e), 6 < this.span)
      throw new RangeError("span must not exceed 6 bytes");
  }
  decode(t, e = 0) {
    return vt(t).readIntBE(e, this.span);
  }
  encode(t, e, n = 0) {
    return vt(e).writeIntBE(t, n, this.span), this.span;
  }
}
z.IntBE = rn;
const _s = Math.pow(2, 32);
function ui(r) {
  const t = Math.floor(r / _s), e = r - t * _s;
  return { hi32: t, lo32: e };
}
function fi(r, t) {
  return r * _s + t;
}
class Va extends kt {
  constructor(t) {
    super(8, t);
  }
  decode(t, e = 0) {
    const n = vt(t), s = n.readUInt32LE(e), i = n.readUInt32LE(e + 4);
    return fi(i, s);
  }
  encode(t, e, n = 0) {
    const s = ui(t), i = vt(e);
    return i.writeUInt32LE(s.lo32, n), i.writeUInt32LE(s.hi32, n + 4), 8;
  }
}
z.NearUInt64 = Va;
class Za extends kt {
  constructor(t) {
    super(8, t);
  }
  decode(t, e = 0) {
    const n = vt(t), s = n.readUInt32BE(e), i = n.readUInt32BE(e + 4);
    return fi(s, i);
  }
  encode(t, e, n = 0) {
    const s = ui(t), i = vt(e);
    return i.writeUInt32BE(s.hi32, n), i.writeUInt32BE(s.lo32, n + 4), 8;
  }
}
z.NearUInt64BE = Za;
class Xa extends kt {
  constructor(t) {
    super(8, t);
  }
  decode(t, e = 0) {
    const n = vt(t), s = n.readUInt32LE(e), i = n.readInt32LE(e + 4);
    return fi(i, s);
  }
  encode(t, e, n = 0) {
    const s = ui(t), i = vt(e);
    return i.writeUInt32LE(s.lo32, n), i.writeInt32LE(s.hi32, n + 4), 8;
  }
}
z.NearInt64 = Xa;
class Ja extends kt {
  constructor(t) {
    super(8, t);
  }
  decode(t, e = 0) {
    const n = vt(t), s = n.readInt32BE(e), i = n.readUInt32BE(e + 4);
    return fi(s, i);
  }
  encode(t, e, n = 0) {
    const s = ui(t), i = vt(e);
    return i.writeInt32BE(s.hi32, n), i.writeUInt32BE(s.lo32, n + 4), 8;
  }
}
z.NearInt64BE = Ja;
class $a extends kt {
  constructor(t) {
    super(4, t);
  }
  decode(t, e = 0) {
    return vt(t).readFloatLE(e);
  }
  encode(t, e, n = 0) {
    return vt(e).writeFloatLE(t, n), 4;
  }
}
z.Float = $a;
class tc extends kt {
  constructor(t) {
    super(4, t);
  }
  decode(t, e = 0) {
    return vt(t).readFloatBE(e);
  }
  encode(t, e, n = 0) {
    return vt(e).writeFloatBE(t, n), 4;
  }
}
z.FloatBE = tc;
class ec extends kt {
  constructor(t) {
    super(8, t);
  }
  decode(t, e = 0) {
    return vt(t).readDoubleLE(e);
  }
  encode(t, e, n = 0) {
    return vt(e).writeDoubleLE(t, n), 8;
  }
}
z.Double = ec;
class rc extends kt {
  constructor(t) {
    super(8, t);
  }
  decode(t, e = 0) {
    return vt(t).readDoubleBE(e);
  }
  encode(t, e, n = 0) {
    return vt(e).writeDoubleBE(t, n), 8;
  }
}
z.DoubleBE = rc;
class nc extends kt {
  constructor(t, e, n) {
    if (!(t instanceof kt))
      throw new TypeError("elementLayout must be a Layout");
    if (!(e instanceof Ue && e.isCount() || Number.isInteger(e) && 0 <= e))
      throw new TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");
    let s = -1;
    !(e instanceof Ue) && 0 < t.span && (s = e * t.span), super(s, n), this.elementLayout = t, this.count = e;
  }
  getSpan(t, e = 0) {
    if (0 <= this.span)
      return this.span;
    let n = 0, s = this.count;
    if (s instanceof Ue && (s = s.decode(t, e)), 0 < this.elementLayout.span)
      n = s * this.elementLayout.span;
    else {
      let i = 0;
      for (; i < s; )
        n += this.elementLayout.getSpan(t, e + n), ++i;
    }
    return n;
  }
  decode(t, e = 0) {
    const n = [];
    let s = 0, i = this.count;
    for (i instanceof Ue && (i = i.decode(t, e)); s < i; )
      n.push(this.elementLayout.decode(t, e)), e += this.elementLayout.getSpan(t, e), s += 1;
    return n;
  }
  encode(t, e, n = 0) {
    const s = this.elementLayout, i = t.reduce((c, u) => c + s.encode(u, e, n + c), 0);
    return this.count instanceof Ue && this.count.encode(t.length, e, n), i;
  }
}
z.Sequence = nc;
class ic extends kt {
  constructor(t, e, n) {
    if (!(Array.isArray(t) && t.reduce((i, c) => i && c instanceof kt, !0)))
      throw new TypeError("fields must be array of Layout instances");
    typeof e == "boolean" && n === void 0 && (n = e, e = void 0);
    for (const i of t)
      if (0 > i.span && i.property === void 0)
        throw new Error("fields cannot contain unnamed variable-length layout");
    let s = -1;
    try {
      s = t.reduce((i, c) => i + c.getSpan(), 0);
    } catch {
    }
    super(s, e), this.fields = t, this.decodePrefixes = !!n;
  }
  getSpan(t, e = 0) {
    if (0 <= this.span)
      return this.span;
    let n = 0;
    try {
      n = this.fields.reduce((s, i) => {
        const c = i.getSpan(t, e);
        return e += c, s + c;
      }, 0);
    } catch {
      throw new RangeError("indeterminate span");
    }
    return n;
  }
  decode(t, e = 0) {
    en(t);
    const n = this.makeDestinationObject();
    for (const s of this.fields)
      if (s.property !== void 0 && (n[s.property] = s.decode(t, e)), e += s.getSpan(t, e), this.decodePrefixes && t.length === e)
        break;
    return n;
  }
  encode(t, e, n = 0) {
    const s = n;
    let i = 0, c = 0;
    for (const u of this.fields) {
      let p = u.span;
      if (c = 0 < p ? p : 0, u.property !== void 0) {
        const m = t[u.property];
        m !== void 0 && (c = u.encode(m, e, n), 0 > p && (p = u.getSpan(e, n)));
      }
      i = n, n += p;
    }
    return i + c - s;
  }
  fromArray(t) {
    const e = this.makeDestinationObject();
    for (const n of this.fields)
      n.property !== void 0 && 0 < t.length && (e[n.property] = t.shift());
    return e;
  }
  layoutFor(t) {
    if (typeof t != "string")
      throw new TypeError("property must be string");
    for (const e of this.fields)
      if (e.property === t)
        return e;
  }
  offsetOf(t) {
    if (typeof t != "string")
      throw new TypeError("property must be string");
    let e = 0;
    for (const n of this.fields) {
      if (n.property === t)
        return e;
      0 > n.span ? e = -1 : 0 <= e && (e += n.span);
    }
  }
}
z.Structure = ic;
class $s {
  constructor(t) {
    this.property = t;
  }
  decode(t, e) {
    throw new Error("UnionDiscriminator is abstract");
  }
  encode(t, e, n) {
    throw new Error("UnionDiscriminator is abstract");
  }
}
z.UnionDiscriminator = $s;
class ti extends $s {
  constructor(t, e) {
    if (!(t instanceof Ue && t.isCount()))
      throw new TypeError("layout must be an unsigned integer ExternalLayout");
    super(e || t.property || "variant"), this.layout = t;
  }
  decode(t, e) {
    return this.layout.decode(t, e);
  }
  encode(t, e, n) {
    return this.layout.encode(t, e, n);
  }
}
z.UnionLayoutDiscriminator = ti;
class to extends kt {
  constructor(t, e, n) {
    let s;
    if (t instanceof Ve || t instanceof Je)
      s = new ti(new Js(t));
    else if (t instanceof Ue && t.isCount())
      s = new ti(t);
    else if (t instanceof $s)
      s = t;
    else
      throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
    if (e === void 0 && (e = null), !(e === null || e instanceof kt))
      throw new TypeError("defaultLayout must be null or a Layout");
    if (e !== null) {
      if (0 > e.span)
        throw new Error("defaultLayout must have constant span");
      e.property === void 0 && (e = e.replicate("content"));
    }
    let i = -1;
    e && (i = e.span, 0 <= i && (t instanceof Ve || t instanceof Je) && (i += s.layout.span)), super(i, n), this.discriminator = s, this.usesPrefixDiscriminator = t instanceof Ve || t instanceof Je, this.defaultLayout = e, this.registry = {};
    let c = this.defaultGetSourceVariant.bind(this);
    this.getSourceVariant = function(u) {
      return c(u);
    }, this.configGetSourceVariant = function(u) {
      c = u.bind(this);
    };
  }
  getSpan(t, e = 0) {
    if (0 <= this.span)
      return this.span;
    const n = this.getVariant(t, e);
    if (!n)
      throw new Error("unable to determine span for unrecognized variant");
    return n.getSpan(t, e);
  }
  defaultGetSourceVariant(t) {
    if (Object.prototype.hasOwnProperty.call(t, this.discriminator.property)) {
      if (this.defaultLayout && this.defaultLayout.property && Object.prototype.hasOwnProperty.call(t, this.defaultLayout.property))
        return;
      const e = this.registry[t[this.discriminator.property]];
      if (e && (!e.layout || e.property && Object.prototype.hasOwnProperty.call(t, e.property)))
        return e;
    } else
      for (const e in this.registry) {
        const n = this.registry[e];
        if (n.property && Object.prototype.hasOwnProperty.call(t, n.property))
          return n;
      }
    throw new Error("unable to infer src variant");
  }
  decode(t, e = 0) {
    let n;
    const s = this.discriminator, i = s.decode(t, e), c = this.registry[i];
    if (c === void 0) {
      const u = this.defaultLayout;
      let p = 0;
      this.usesPrefixDiscriminator && (p = s.layout.span), n = this.makeDestinationObject(), n[s.property] = i, n[u.property] = u.decode(t, e + p);
    } else
      n = c.decode(t, e);
    return n;
  }
  encode(t, e, n = 0) {
    const s = this.getSourceVariant(t);
    if (s === void 0) {
      const i = this.discriminator, c = this.defaultLayout;
      let u = 0;
      return this.usesPrefixDiscriminator && (u = i.layout.span), i.encode(t[i.property], e, n), u + c.encode(t[c.property], e, n + u);
    }
    return s.encode(t, e, n);
  }
  addVariant(t, e, n) {
    const s = new sc(this, t, e, n);
    return this.registry[t] = s, s;
  }
  getVariant(t, e = 0) {
    let n;
    return t instanceof Uint8Array ? n = this.discriminator.decode(t, e) : n = t, this.registry[n];
  }
}
z.Union = to;
class sc extends kt {
  constructor(t, e, n, s) {
    if (!(t instanceof to))
      throw new TypeError("union must be a Union");
    if (!Number.isInteger(e) || 0 > e)
      throw new TypeError("variant must be a (non-negative) integer");
    if (typeof n == "string" && s === void 0 && (s = n, n = null), n) {
      if (!(n instanceof kt))
        throw new TypeError("layout must be a Layout");
      if (t.defaultLayout !== null && 0 <= n.span && n.span > t.defaultLayout.span)
        throw new Error("variant span exceeds span of containing union");
      if (typeof s != "string")
        throw new TypeError("variant must have a String property");
    }
    let i = t.span;
    0 > t.span && (i = n ? n.span : 0, 0 <= i && t.usesPrefixDiscriminator && (i += t.discriminator.layout.span)), super(i, s), this.union = t, this.variant = e, this.layout = n || null;
  }
  getSpan(t, e = 0) {
    if (0 <= this.span)
      return this.span;
    let n = 0;
    this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span);
    let s = 0;
    return this.layout && (s = this.layout.getSpan(t, e + n)), n + s;
  }
  decode(t, e = 0) {
    const n = this.makeDestinationObject();
    if (this !== this.union.getVariant(t, e))
      throw new Error("variant mismatch");
    let s = 0;
    return this.union.usesPrefixDiscriminator && (s = this.union.discriminator.layout.span), this.layout ? n[this.property] = this.layout.decode(t, e + s) : this.property ? n[this.property] = !0 : this.union.usesPrefixDiscriminator && (n[this.union.discriminator.property] = this.variant), n;
  }
  encode(t, e, n = 0) {
    let s = 0;
    if (this.union.usesPrefixDiscriminator && (s = this.union.discriminator.layout.span), this.layout && !Object.prototype.hasOwnProperty.call(t, this.property))
      throw new TypeError("variant lacks property " + this.property);
    this.union.discriminator.encode(this.variant, e, n);
    let i = s;
    if (this.layout && (this.layout.encode(t[this.property], e, n + s), i += this.layout.getSpan(e, n + s), 0 <= this.union.span && i > this.union.span))
      throw new Error("encoded variant overruns containing union");
    return i;
  }
  fromArray(t) {
    if (this.layout)
      return this.layout.fromArray(t);
  }
}
z.VariantLayout = sc;
function Qr(r) {
  return 0 > r && (r += 4294967296), r;
}
class eo extends kt {
  constructor(t, e, n) {
    if (!(t instanceof Ve || t instanceof Je))
      throw new TypeError("word must be a UInt or UIntBE layout");
    if (typeof e == "string" && n === void 0 && (n = e, e = !1), 4 < t.span)
      throw new RangeError("word cannot exceed 32 bits");
    super(t.span, n), this.word = t, this.msb = !!e, this.fields = [];
    let s = 0;
    this._packedSetValue = function(i) {
      return s = Qr(i), this;
    }, this._packedGetValue = function() {
      return s;
    };
  }
  decode(t, e = 0) {
    const n = this.makeDestinationObject(), s = this.word.decode(t, e);
    this._packedSetValue(s);
    for (const i of this.fields)
      i.property !== void 0 && (n[i.property] = i.decode(t));
    return n;
  }
  encode(t, e, n = 0) {
    const s = this.word.decode(e, n);
    this._packedSetValue(s);
    for (const i of this.fields)
      if (i.property !== void 0) {
        const c = t[i.property];
        c !== void 0 && i.encode(c);
      }
    return this.word.encode(this._packedGetValue(), e, n);
  }
  addField(t, e) {
    const n = new ro(this, t, e);
    return this.fields.push(n), n;
  }
  addBoolean(t) {
    const e = new oc(this, t);
    return this.fields.push(e), e;
  }
  fieldFor(t) {
    if (typeof t != "string")
      throw new TypeError("property must be string");
    for (const e of this.fields)
      if (e.property === t)
        return e;
  }
}
z.BitStructure = eo;
class ro {
  constructor(t, e, n) {
    if (!(t instanceof eo))
      throw new TypeError("container must be a BitStructure");
    if (!Number.isInteger(e) || 0 >= e)
      throw new TypeError("bits must be positive integer");
    const s = 8 * t.span, i = t.fields.reduce((c, u) => c + u.bits, 0);
    if (e + i > s)
      throw new Error("bits too long for span remainder (" + (s - i) + " of " + s + " remain)");
    this.container = t, this.bits = e, this.valueMask = (1 << e) - 1, e === 32 && (this.valueMask = 4294967295), this.start = i, this.container.msb && (this.start = s - i - e), this.wordMask = Qr(this.valueMask << this.start), this.property = n;
  }
  decode(t, e) {
    const n = this.container._packedGetValue();
    return Qr(n & this.wordMask) >>> this.start;
  }
  encode(t) {
    if (typeof t != "number" || !Number.isInteger(t) || t !== Qr(t & this.valueMask))
      throw new TypeError(Xs("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
    const e = this.container._packedGetValue(), n = Qr(t << this.start);
    this.container._packedSetValue(Qr(e & ~this.wordMask) | n);
  }
}
z.BitField = ro;
class oc extends ro {
  constructor(t, e) {
    super(t, 1, e);
  }
  decode(t, e) {
    return !!super.decode(t, e);
  }
  encode(t) {
    typeof t == "boolean" && (t = +t), super.encode(t);
  }
}
z.Boolean = oc;
class ac extends kt {
  constructor(t, e) {
    if (!(t instanceof Ue && t.isCount() || Number.isInteger(t) && 0 <= t))
      throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout");
    let n = -1;
    t instanceof Ue || (n = t), super(n, e), this.length = t;
  }
  getSpan(t, e) {
    let n = this.span;
    return 0 > n && (n = this.length.decode(t, e)), n;
  }
  decode(t, e = 0) {
    let n = this.span;
    return 0 > n && (n = this.length.decode(t, e)), vt(t).slice(e, e + n);
  }
  encode(t, e, n) {
    let s = this.length;
    if (this.length instanceof Ue && (s = t.length), !(t instanceof Uint8Array && s === t.length))
      throw new TypeError(Xs("Blob.encode", this) + " requires (length " + s + ") Uint8Array as src");
    if (n + s > e.length)
      throw new RangeError("encoding overruns Uint8Array");
    const i = vt(t);
    return vt(e).write(i.toString("hex"), n, s, "hex"), this.length instanceof Ue && this.length.encode(s, e, n), s;
  }
}
z.Blob = ac;
class cc extends kt {
  constructor(t) {
    super(-1, t);
  }
  getSpan(t, e = 0) {
    en(t);
    let n = e;
    for (; n < t.length && t[n] !== 0; )
      n += 1;
    return 1 + n - e;
  }
  decode(t, e = 0) {
    const n = this.getSpan(t, e);
    return vt(t).slice(e, e + n - 1).toString("utf-8");
  }
  encode(t, e, n = 0) {
    typeof t != "string" && (t = String(t));
    const s = Zs.Buffer.from(t, "utf8"), i = s.length;
    if (n + i > e.length)
      throw new RangeError("encoding overruns Buffer");
    const c = vt(e);
    return s.copy(c, n), c[n + i] = 0, i + 1;
  }
}
z.CString = cc;
class uc extends kt {
  constructor(t, e) {
    if (typeof t == "string" && e === void 0 && (e = t, t = void 0), t === void 0)
      t = -1;
    else if (!Number.isInteger(t))
      throw new TypeError("maxSpan must be an integer");
    super(-1, e), this.maxSpan = t;
  }
  getSpan(t, e = 0) {
    return en(t), t.length - e;
  }
  decode(t, e = 0) {
    const n = this.getSpan(t, e);
    if (0 <= this.maxSpan && this.maxSpan < n)
      throw new RangeError("text length exceeds maxSpan");
    return vt(t).slice(e, e + n).toString("utf-8");
  }
  encode(t, e, n = 0) {
    typeof t != "string" && (t = String(t));
    const s = Zs.Buffer.from(t, "utf8"), i = s.length;
    if (0 <= this.maxSpan && this.maxSpan < i)
      throw new RangeError("text length exceeds maxSpan");
    if (n + i > e.length)
      throw new RangeError("encoding overruns Buffer");
    return s.copy(vt(e), n), i;
  }
}
z.UTF8 = uc;
class fc extends kt {
  constructor(t, e) {
    super(0, e), this.value = t;
  }
  decode(t, e) {
    return this.value;
  }
  encode(t, e, n) {
    return 0;
  }
}
z.Constant = fc;
z.greedy = (r, t) => new ja(r, t);
var Cr = z.offset = (r, t, e) => new Js(r, t, e), It = z.u8 = (r) => new Ve(1, r), We = z.u16 = (r) => new Ve(2, r);
z.u24 = (r) => new Ve(3, r);
var ut = z.u32 = (r) => new Ve(4, r);
z.u40 = (r) => new Ve(5, r);
z.u48 = (r) => new Ve(6, r);
var Ee = z.nu64 = (r) => new Va(r);
z.u16be = (r) => new Je(2, r);
z.u24be = (r) => new Je(3, r);
z.u32be = (r) => new Je(4, r);
z.u40be = (r) => new Je(5, r);
z.u48be = (r) => new Je(6, r);
z.nu64be = (r) => new Za(r);
z.s8 = (r) => new Or(1, r);
z.s16 = (r) => new Or(2, r);
z.s24 = (r) => new Or(3, r);
z.s32 = (r) => new Or(4, r);
z.s40 = (r) => new Or(5, r);
z.s48 = (r) => new Or(6, r);
var Pe = z.ns64 = (r) => new Xa(r);
z.s16be = (r) => new rn(2, r);
z.s24be = (r) => new rn(3, r);
z.s32be = (r) => new rn(4, r);
z.s40be = (r) => new rn(5, r);
z.s48be = (r) => new rn(6, r);
z.ns64be = (r) => new Ja(r);
z.f32 = (r) => new $a(r);
z.f32be = (r) => new tc(r);
z.f64 = (r) => new ec(r);
z.f64be = (r) => new rc(r);
var nt = z.struct = (r, t, e) => new ic(r, t, e);
z.bits = (r, t, e) => new eo(r, t, e);
var Le = z.seq = (r, t, e) => new nc(r, t, e);
z.union = (r, t, e) => new to(r, t, e);
z.unionLayoutDiscriminator = (r, t) => new ti(r, t);
var jt = z.blob = (r, t) => new ac(r, t);
z.cstr = (r) => new cc(r);
z.utf8 = (r, t) => new uc(r, t);
z.constant = (r, t) => new fc(r, t);
var Mn = {};
Object.defineProperty(Mn, "__esModule", { value: !0 });
function Hf(r) {
  {
    const t = Buffer.from(r);
    t.reverse();
    const e = t.toString("hex");
    return e.length === 0 ? BigInt(0) : BigInt(`0x${e}`);
  }
}
var Gf = Mn.toBigIntLE = Hf;
function Qf(r) {
  {
    const t = r.toString("hex");
    return t.length === 0 ? BigInt(0) : BigInt(`0x${t}`);
  }
}
Mn.toBigIntBE = Qf;
function Wf(r, t) {
  {
    const e = r.toString(16), n = Buffer.from(e.padStart(t * 2, "0").slice(0, t * 2), "hex");
    return n.reverse(), n;
  }
}
var Kf = Mn.toBufferLE = Wf;
function qf(r, t) {
  {
    const e = r.toString(16);
    return Buffer.from(e.padStart(t * 2, "0").slice(0, t * 2), "hex");
  }
}
Mn.toBufferBE = qf;
class Yf extends TypeError {
  constructor(t, e) {
    let n;
    const {
      message: s,
      ...i
    } = t, {
      path: c
    } = t, u = c.length === 0 ? s : "At path: " + c.join(".") + " -- " + s;
    super(u), Object.assign(this, i), this.name = this.constructor.name, this.failures = () => {
      var p;
      return (p = n) != null ? p : n = [t, ...e()];
    };
  }
}
function jf(r) {
  return Br(r) && typeof r[Symbol.iterator] == "function";
}
function Br(r) {
  return typeof r == "object" && r != null;
}
function tr(r) {
  return typeof r == "string" ? JSON.stringify(r) : "" + r;
}
function Vf(r) {
  const {
    done: t,
    value: e
  } = r.next();
  return t ? void 0 : e;
}
function Zf(r, t, e, n) {
  if (r === !0)
    return;
  r === !1 ? r = {} : typeof r == "string" && (r = {
    message: r
  });
  const {
    path: s,
    branch: i
  } = t, {
    type: c
  } = e, {
    refinement: u,
    message: p = "Expected a value of type `" + c + "`" + (u ? " with refinement `" + u + "`" : "") + ", but received: `" + tr(n) + "`"
  } = r;
  return {
    value: n,
    type: c,
    refinement: u,
    key: s[s.length - 1],
    path: s,
    branch: i,
    ...r,
    message: p
  };
}
function* Uo(r, t, e, n) {
  jf(r) || (r = [r]);
  for (const s of r) {
    const i = Zf(s, t, e, n);
    i && (yield i);
  }
}
function* no(r, t, e = {}) {
  const {
    path: n = [],
    branch: s = [r],
    coerce: i = !1,
    mask: c = !1
  } = e, u = {
    path: n,
    branch: s
  };
  if (i && (r = t.coercer(r, u), c && t.type !== "type" && Br(t.schema) && Br(r) && !Array.isArray(r)))
    for (const m in r)
      t.schema[m] === void 0 && delete r[m];
  let p = !0;
  for (const m of t.validator(r, u))
    p = !1, yield [m, void 0];
  for (let [m, A, S] of t.entries(r, u)) {
    const T = no(A, S, {
      path: m === void 0 ? n : [...n, m],
      branch: m === void 0 ? s : [...s, A],
      coerce: i,
      mask: c
    });
    for (const I of T)
      I[0] ? (p = !1, yield [I[0], void 0]) : i && (A = I[1], m === void 0 ? r = A : r instanceof Map ? r.set(m, A) : r instanceof Set ? r.add(A) : Br(r) && (r[m] = A));
  }
  if (p)
    for (const m of t.refiner(r, u))
      p = !1, yield [m, void 0];
  p && (yield [void 0, r]);
}
class ar {
  constructor(t) {
    const {
      type: e,
      schema: n,
      validator: s,
      refiner: i,
      coercer: c = (p) => p,
      entries: u = function* () {
      }
    } = t;
    this.type = e, this.schema = n, this.entries = u, this.coercer = c, s ? this.validator = (p, m) => {
      const A = s(p, m);
      return Uo(A, m, this, p);
    } : this.validator = () => [], i ? this.refiner = (p, m) => {
      const A = i(p, m);
      return Uo(A, m, this, p);
    } : this.refiner = () => [];
  }
  assert(t) {
    return Xf(t, this);
  }
  create(t) {
    return J(t, this);
  }
  is(t) {
    return lc(t, this);
  }
  mask(t) {
    return Jf(t, this);
  }
  validate(t, e = {}) {
    return _n(t, this, e);
  }
}
function Xf(r, t) {
  const e = _n(r, t);
  if (e[0])
    throw e[0];
}
function J(r, t) {
  const e = _n(r, t, {
    coerce: !0
  });
  if (e[0])
    throw e[0];
  return e[1];
}
function Jf(r, t) {
  const e = _n(r, t, {
    coerce: !0,
    mask: !0
  });
  if (e[0])
    throw e[0];
  return e[1];
}
function lc(r, t) {
  return !_n(r, t)[0];
}
function _n(r, t, e = {}) {
  const n = no(r, t, e), s = Vf(n);
  if (s[0])
    return [new Yf(s[0], function* () {
      for (const c of n)
        c[0] && (yield c[0]);
    }), void 0];
  {
    const i = s[1];
    return [void 0, i];
  }
}
function Fr(r, t) {
  return new ar({
    type: r,
    schema: null,
    validator: t
  });
}
function $f() {
  return Fr("any", () => !0);
}
function rt(r) {
  return new ar({
    type: "array",
    schema: r,
    *entries(t) {
      if (r && Array.isArray(t))
        for (const [e, n] of t.entries())
          yield [e, n, r];
    },
    coercer(t) {
      return Array.isArray(t) ? t.slice() : t;
    },
    validator(t) {
      return Array.isArray(t) || "Expected an array value, but received: " + tr(t);
    }
  });
}
function lr() {
  return Fr("boolean", (r) => typeof r == "boolean");
}
function io(r) {
  return Fr("instance", (t) => t instanceof r || "Expected a `" + r.name + "` instance, but received: " + tr(t));
}
function Yt(r) {
  const t = tr(r), e = typeof r;
  return new ar({
    type: "literal",
    schema: e === "string" || e === "number" || e === "boolean" ? r : null,
    validator(n) {
      return n === r || "Expected the literal `" + t + "`, but received: " + tr(n);
    }
  });
}
function tl() {
  return Fr("never", () => !1);
}
function ct(r) {
  return new ar({
    ...r,
    validator: (t, e) => t === null || r.validator(t, e),
    refiner: (t, e) => t === null || r.refiner(t, e)
  });
}
function G() {
  return Fr("number", (r) => typeof r == "number" && !isNaN(r) || "Expected a number, but received: " + tr(r));
}
function gt(r) {
  return new ar({
    ...r,
    validator: (t, e) => t === void 0 || r.validator(t, e),
    refiner: (t, e) => t === void 0 || r.refiner(t, e)
  });
}
function hc(r, t) {
  return new ar({
    type: "record",
    schema: null,
    *entries(e) {
      if (Br(e))
        for (const n in e) {
          const s = e[n];
          yield [n, n, r], yield [n, s, t];
        }
    },
    validator(e) {
      return Br(e) || "Expected an object, but received: " + tr(e);
    }
  });
}
function Z() {
  return Fr("string", (r) => typeof r == "string" || "Expected a string, but received: " + tr(r));
}
function so(r) {
  const t = tl();
  return new ar({
    type: "tuple",
    schema: null,
    *entries(e) {
      if (Array.isArray(e)) {
        const n = Math.max(r.length, e.length);
        for (let s = 0; s < n; s++)
          yield [s, e[s], r[s] || t];
      }
    },
    validator(e) {
      return Array.isArray(e) || "Expected an array, but received: " + tr(e);
    }
  });
}
function q(r) {
  const t = Object.keys(r);
  return new ar({
    type: "type",
    schema: r,
    *entries(e) {
      if (Br(e))
        for (const n of t)
          yield [n, e[n], r[n]];
    },
    validator(e) {
      return Br(e) || "Expected an object, but received: " + tr(e);
    }
  });
}
function Fe(r) {
  const t = r.map((e) => e.type).join(" | ");
  return new ar({
    type: "union",
    schema: null,
    validator(e, n) {
      const s = [];
      for (const i of r) {
        const [...c] = no(e, i, n), [u] = c;
        if (u[0])
          for (const [p] of c)
            p && s.push(p);
        else
          return [];
      }
      return ["Expected the value to satisfy a union of `" + t + "`, but received: " + tr(e), ...s];
    }
  });
}
function kn() {
  return Fr("unknown", () => !0);
}
function Tn(r, t, e) {
  return new ar({
    ...r,
    coercer: (n, s) => lc(n, t) ? r.coercer(e(n, s), s) : r.coercer(n, s)
  });
}
var oo = {}, li = { exports: {} };
(function(r) {
  function t(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  r.exports = t, r.exports.__esModule = !0, r.exports.default = r.exports;
})(li);
var Xi = { exports: {} }, Oo;
function ao() {
  return Oo || (Oo = 1, function(r) {
    function t(n, s) {
      for (var i = 0; i < s.length; i++) {
        var c = s[i];
        c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(n, c.key, c);
      }
    }
    function e(n, s, i) {
      return s && t(n.prototype, s), i && t(n, i), Object.defineProperty(n, "prototype", {
        writable: !1
      }), n;
    }
    r.exports = e, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(Xi)), Xi.exports;
}
var Ji = { exports: {} }, Fo;
function co() {
  return Fo || (Fo = 1, function(r) {
    function t(e, n) {
      if (!(e instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    r.exports = t, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(Ji)), Ji.exports;
}
var $i = { exports: {} }, ts = { exports: {} }, Do;
function el() {
  return Do || (Do = 1, function(r) {
    function t(e, n) {
      return r.exports = t = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, c) {
        return i.__proto__ = c, i;
      }, r.exports.__esModule = !0, r.exports.default = r.exports, t(e, n);
    }
    r.exports = t, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(ts)), ts.exports;
}
var Po;
function uo() {
  return Po || (Po = 1, function(r) {
    var t = el();
    function e(n, s) {
      if (typeof s != "function" && s !== null)
        throw new TypeError("Super expression must either be null or a function");
      n.prototype = Object.create(s && s.prototype, {
        constructor: {
          value: n,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(n, "prototype", {
        writable: !1
      }), s && t(n, s);
    }
    r.exports = e, r.exports.__esModule = !0, r.exports.default = r.exports;
  }($i)), $i.exports;
}
var es = { exports: {} }, rs = { exports: {} }, zo;
function fo() {
  return zo || (zo = 1, function(r) {
    function t(e) {
      return r.exports = t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
        return typeof n;
      } : function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
      }, r.exports.__esModule = !0, r.exports.default = r.exports, t(e);
    }
    r.exports = t, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(rs)), rs.exports;
}
var ns = { exports: {} }, Ho;
function rl() {
  return Ho || (Ho = 1, function(r) {
    function t(e) {
      if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    r.exports = t, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(ns)), ns.exports;
}
var Go;
function lo() {
  return Go || (Go = 1, function(r) {
    var t = fo().default, e = rl();
    function n(s, i) {
      if (i && (t(i) === "object" || typeof i == "function"))
        return i;
      if (i !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return e(s);
    }
    r.exports = n, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(es)), es.exports;
}
var is = { exports: {} }, Qo;
function ho() {
  return Qo || (Qo = 1, function(r) {
    function t(e) {
      return r.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(s) {
        return s.__proto__ || Object.getPrototypeOf(s);
      }, r.exports.__esModule = !0, r.exports.default = r.exports, t(e);
    }
    r.exports = t, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(is)), is.exports;
}
var ss = {}, hi = { exports: {} };
(function(r) {
  var t = Object.prototype.hasOwnProperty, e = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (e = !1));
  function s(p, m, A) {
    this.fn = p, this.context = m, this.once = A || !1;
  }
  function i(p, m, A, S, T) {
    if (typeof A != "function")
      throw new TypeError("The listener must be a function");
    var I = new s(A, S || p, T), C = e ? e + m : m;
    return p._events[C] ? p._events[C].fn ? p._events[C] = [p._events[C], I] : p._events[C].push(I) : (p._events[C] = I, p._eventsCount++), p;
  }
  function c(p, m) {
    --p._eventsCount === 0 ? p._events = new n() : delete p._events[m];
  }
  function u() {
    this._events = new n(), this._eventsCount = 0;
  }
  u.prototype.eventNames = function() {
    var m = [], A, S;
    if (this._eventsCount === 0)
      return m;
    for (S in A = this._events)
      t.call(A, S) && m.push(e ? S.slice(1) : S);
    return Object.getOwnPropertySymbols ? m.concat(Object.getOwnPropertySymbols(A)) : m;
  }, u.prototype.listeners = function(m) {
    var A = e ? e + m : m, S = this._events[A];
    if (!S)
      return [];
    if (S.fn)
      return [S.fn];
    for (var T = 0, I = S.length, C = new Array(I); T < I; T++)
      C[T] = S[T].fn;
    return C;
  }, u.prototype.listenerCount = function(m) {
    var A = e ? e + m : m, S = this._events[A];
    return S ? S.fn ? 1 : S.length : 0;
  }, u.prototype.emit = function(m, A, S, T, I, C) {
    var k = e ? e + m : m;
    if (!this._events[k])
      return !1;
    var R = this._events[k], U = arguments.length, D, L;
    if (R.fn) {
      switch (R.once && this.removeListener(m, R.fn, void 0, !0), U) {
        case 1:
          return R.fn.call(R.context), !0;
        case 2:
          return R.fn.call(R.context, A), !0;
        case 3:
          return R.fn.call(R.context, A, S), !0;
        case 4:
          return R.fn.call(R.context, A, S, T), !0;
        case 5:
          return R.fn.call(R.context, A, S, T, I), !0;
        case 6:
          return R.fn.call(R.context, A, S, T, I, C), !0;
      }
      for (L = 1, D = new Array(U - 1); L < U; L++)
        D[L - 1] = arguments[L];
      R.fn.apply(R.context, D);
    } else {
      var H = R.length, P;
      for (L = 0; L < H; L++)
        switch (R[L].once && this.removeListener(m, R[L].fn, void 0, !0), U) {
          case 1:
            R[L].fn.call(R[L].context);
            break;
          case 2:
            R[L].fn.call(R[L].context, A);
            break;
          case 3:
            R[L].fn.call(R[L].context, A, S);
            break;
          case 4:
            R[L].fn.call(R[L].context, A, S, T);
            break;
          default:
            if (!D)
              for (P = 1, D = new Array(U - 1); P < U; P++)
                D[P - 1] = arguments[P];
            R[L].fn.apply(R[L].context, D);
        }
    }
    return !0;
  }, u.prototype.on = function(m, A, S) {
    return i(this, m, A, S, !1);
  }, u.prototype.once = function(m, A, S) {
    return i(this, m, A, S, !0);
  }, u.prototype.removeListener = function(m, A, S, T) {
    var I = e ? e + m : m;
    if (!this._events[I])
      return this;
    if (!A)
      return c(this, I), this;
    var C = this._events[I];
    if (C.fn)
      C.fn === A && (!T || C.once) && (!S || C.context === S) && c(this, I);
    else {
      for (var k = 0, R = [], U = C.length; k < U; k++)
        (C[k].fn !== A || T && !C[k].once || S && C[k].context !== S) && R.push(C[k]);
      R.length ? this._events[I] = R.length === 1 ? R[0] : R : c(this, I);
    }
    return this;
  }, u.prototype.removeAllListeners = function(m) {
    var A;
    return m ? (A = e ? e + m : m, this._events[A] && c(this, A)) : (this._events = new n(), this._eventsCount = 0), this;
  }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = e, u.EventEmitter = u, r.exports = u;
})(hi);
const nl = hi.exports;
var Wo;
function il() {
  return Wo || (Wo = 1, function(r) {
    var t = li.exports;
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), r.default = S;
    var e = t(co()), n = t(ao()), s = t(uo()), i = t(lo()), c = t(ho()), u = hi.exports;
    function p(T) {
      var I = m();
      return function() {
        var k = (0, c.default)(T), R;
        if (I) {
          var U = (0, c.default)(this).constructor;
          R = Reflect.construct(k, arguments, U);
        } else
          R = k.apply(this, arguments);
        return (0, i.default)(this, R);
      };
    }
    function m() {
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
    var A = /* @__PURE__ */ function(T) {
      (0, s.default)(C, T);
      var I = p(C);
      function C(k, R, U) {
        var D;
        return (0, e.default)(this, C), D = I.call(this), D.socket = new window.WebSocket(k, U), D.socket.onopen = function() {
          return D.emit("open");
        }, D.socket.onmessage = function(L) {
          return D.emit("message", L.data);
        }, D.socket.onerror = function(L) {
          return D.emit("error", L);
        }, D.socket.onclose = function(L) {
          D.emit("close", L.code, L.reason);
        }, D;
      }
      return (0, n.default)(C, [{
        key: "send",
        value: function(R, U, D) {
          var L = D || U;
          try {
            this.socket.send(R), L();
          } catch (H) {
            L(H);
          }
        }
      }, {
        key: "close",
        value: function(R, U) {
          this.socket.close(R, U);
        }
      }, {
        key: "addEventListener",
        value: function(R, U, D) {
          this.socket.addEventListener(R, U, D);
        }
      }]), C;
    }(u.EventEmitter);
    function S(T, I) {
      return new A(T, I);
    }
  }(ss)), ss;
}
var os = {}, as = { exports: {} }, Ko;
function sl() {
  return Ko || (Ko = 1, function(r) {
    var t = fo().default;
    function e() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
      r.exports = e = function() {
        return n;
      }, r.exports.__esModule = !0, r.exports.default = r.exports;
      var n = {}, s = Object.prototype, i = s.hasOwnProperty, c = typeof Symbol == "function" ? Symbol : {}, u = c.iterator || "@@iterator", p = c.asyncIterator || "@@asyncIterator", m = c.toStringTag || "@@toStringTag";
      function A(v, f, g) {
        return Object.defineProperty(v, f, {
          value: g,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }), v[f];
      }
      try {
        A({}, "");
      } catch {
        A = function(g, y, E) {
          return g[y] = E;
        };
      }
      function S(v, f, g, y) {
        var E = f && f.prototype instanceof C ? f : C, B = Object.create(E.prototype), N = new Nt(y || []);
        return B._invoke = function(F, x, d) {
          var M = "suspendedStart";
          return function(tt, it) {
            if (M === "executing")
              throw new Error("Generator is already running");
            if (M === "completed") {
              if (tt === "throw")
                throw it;
              return Rt();
            }
            for (d.method = tt, d.arg = it; ; ) {
              var at = d.delegate;
              if (at) {
                var Lt = W(at, d);
                if (Lt) {
                  if (Lt === I)
                    continue;
                  return Lt;
                }
              }
              if (d.method === "next")
                d.sent = d._sent = d.arg;
              else if (d.method === "throw") {
                if (M === "suspendedStart")
                  throw M = "completed", d.arg;
                d.dispatchException(d.arg);
              } else
                d.method === "return" && d.abrupt("return", d.arg);
              M = "executing";
              var lt = T(F, x, d);
              if (lt.type === "normal") {
                if (M = d.done ? "completed" : "suspendedYield", lt.arg === I)
                  continue;
                return {
                  value: lt.arg,
                  done: d.done
                };
              }
              lt.type === "throw" && (M = "completed", d.method = "throw", d.arg = lt.arg);
            }
          };
        }(v, g, N), B;
      }
      function T(v, f, g) {
        try {
          return {
            type: "normal",
            arg: v.call(f, g)
          };
        } catch (y) {
          return {
            type: "throw",
            arg: y
          };
        }
      }
      n.wrap = S;
      var I = {};
      function C() {
      }
      function k() {
      }
      function R() {
      }
      var U = {};
      A(U, u, function() {
        return this;
      });
      var D = Object.getPrototypeOf, L = D && D(D(dt([])));
      L && L !== s && i.call(L, u) && (U = L);
      var H = R.prototype = C.prototype = Object.create(U);
      function P(v) {
        ["next", "throw", "return"].forEach(function(f) {
          A(v, f, function(g) {
            return this._invoke(f, g);
          });
        });
      }
      function Q(v, f) {
        function g(E, B, N, F) {
          var x = T(v[E], v, B);
          if (x.type !== "throw") {
            var d = x.arg, M = d.value;
            return M && t(M) == "object" && i.call(M, "__await") ? f.resolve(M.__await).then(function(tt) {
              g("next", tt, N, F);
            }, function(tt) {
              g("throw", tt, N, F);
            }) : f.resolve(M).then(function(tt) {
              d.value = tt, N(d);
            }, function(tt) {
              return g("throw", tt, N, F);
            });
          }
          F(x.arg);
        }
        var y;
        this._invoke = function(E, B) {
          function N() {
            return new f(function(F, x) {
              g(E, B, F, x);
            });
          }
          return y = y ? y.then(N, N) : N();
        };
      }
      function W(v, f) {
        var g = v.iterator[f.method];
        if (g === void 0) {
          if (f.delegate = null, f.method === "throw") {
            if (v.iterator.return && (f.method = "return", f.arg = void 0, W(v, f), f.method === "throw"))
              return I;
            f.method = "throw", f.arg = new TypeError("The iterator does not provide a 'throw' method");
          }
          return I;
        }
        var y = T(g, v.iterator, f.arg);
        if (y.type === "throw")
          return f.method = "throw", f.arg = y.arg, f.delegate = null, I;
        var E = y.arg;
        return E ? E.done ? (f[v.resultName] = E.value, f.next = v.nextLoc, f.method !== "return" && (f.method = "next", f.arg = void 0), f.delegate = null, I) : E : (f.method = "throw", f.arg = new TypeError("iterator result is not an object"), f.delegate = null, I);
      }
      function Y(v) {
        var f = {
          tryLoc: v[0]
        };
        1 in v && (f.catchLoc = v[1]), 2 in v && (f.finallyLoc = v[2], f.afterLoc = v[3]), this.tryEntries.push(f);
      }
      function wt(v) {
        var f = v.completion || {};
        f.type = "normal", delete f.arg, v.completion = f;
      }
      function Nt(v) {
        this.tryEntries = [{
          tryLoc: "root"
        }], v.forEach(Y, this), this.reset(!0);
      }
      function dt(v) {
        if (v) {
          var f = v[u];
          if (f)
            return f.call(v);
          if (typeof v.next == "function")
            return v;
          if (!isNaN(v.length)) {
            var g = -1, y = function E() {
              for (; ++g < v.length; )
                if (i.call(v, g))
                  return E.value = v[g], E.done = !1, E;
              return E.value = void 0, E.done = !0, E;
            };
            return y.next = y;
          }
        }
        return {
          next: Rt
        };
      }
      function Rt() {
        return {
          value: void 0,
          done: !0
        };
      }
      return k.prototype = R, A(H, "constructor", R), A(R, "constructor", k), k.displayName = A(R, m, "GeneratorFunction"), n.isGeneratorFunction = function(v) {
        var f = typeof v == "function" && v.constructor;
        return !!f && (f === k || (f.displayName || f.name) === "GeneratorFunction");
      }, n.mark = function(v) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(v, R) : (v.__proto__ = R, A(v, m, "GeneratorFunction")), v.prototype = Object.create(H), v;
      }, n.awrap = function(v) {
        return {
          __await: v
        };
      }, P(Q.prototype), A(Q.prototype, p, function() {
        return this;
      }), n.AsyncIterator = Q, n.async = function(v, f, g, y, E) {
        E === void 0 && (E = Promise);
        var B = new Q(S(v, f, g, y), E);
        return n.isGeneratorFunction(f) ? B : B.next().then(function(N) {
          return N.done ? N.value : B.next();
        });
      }, P(H), A(H, m, "Generator"), A(H, u, function() {
        return this;
      }), A(H, "toString", function() {
        return "[object Generator]";
      }), n.keys = function(v) {
        var f = [];
        for (var g in v)
          f.push(g);
        return f.reverse(), function y() {
          for (; f.length; ) {
            var E = f.pop();
            if (E in v)
              return y.value = E, y.done = !1, y;
          }
          return y.done = !0, y;
        };
      }, n.values = dt, Nt.prototype = {
        constructor: Nt,
        reset: function(f) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(wt), !f)
            for (var g in this)
              g.charAt(0) === "t" && i.call(this, g) && !isNaN(+g.slice(1)) && (this[g] = void 0);
        },
        stop: function() {
          this.done = !0;
          var f = this.tryEntries[0].completion;
          if (f.type === "throw")
            throw f.arg;
          return this.rval;
        },
        dispatchException: function(f) {
          if (this.done)
            throw f;
          var g = this;
          function y(d, M) {
            return N.type = "throw", N.arg = f, g.next = d, M && (g.method = "next", g.arg = void 0), !!M;
          }
          for (var E = this.tryEntries.length - 1; E >= 0; --E) {
            var B = this.tryEntries[E], N = B.completion;
            if (B.tryLoc === "root")
              return y("end");
            if (B.tryLoc <= this.prev) {
              var F = i.call(B, "catchLoc"), x = i.call(B, "finallyLoc");
              if (F && x) {
                if (this.prev < B.catchLoc)
                  return y(B.catchLoc, !0);
                if (this.prev < B.finallyLoc)
                  return y(B.finallyLoc);
              } else if (F) {
                if (this.prev < B.catchLoc)
                  return y(B.catchLoc, !0);
              } else {
                if (!x)
                  throw new Error("try statement without catch or finally");
                if (this.prev < B.finallyLoc)
                  return y(B.finallyLoc);
              }
            }
          }
        },
        abrupt: function(f, g) {
          for (var y = this.tryEntries.length - 1; y >= 0; --y) {
            var E = this.tryEntries[y];
            if (E.tryLoc <= this.prev && i.call(E, "finallyLoc") && this.prev < E.finallyLoc) {
              var B = E;
              break;
            }
          }
          B && (f === "break" || f === "continue") && B.tryLoc <= g && g <= B.finallyLoc && (B = null);
          var N = B ? B.completion : {};
          return N.type = f, N.arg = g, B ? (this.method = "next", this.next = B.finallyLoc, I) : this.complete(N);
        },
        complete: function(f, g) {
          if (f.type === "throw")
            throw f.arg;
          return f.type === "break" || f.type === "continue" ? this.next = f.arg : f.type === "return" ? (this.rval = this.arg = f.arg, this.method = "return", this.next = "end") : f.type === "normal" && g && (this.next = g), I;
        },
        finish: function(f) {
          for (var g = this.tryEntries.length - 1; g >= 0; --g) {
            var y = this.tryEntries[g];
            if (y.finallyLoc === f)
              return this.complete(y.completion, y.afterLoc), wt(y), I;
          }
        },
        catch: function(f) {
          for (var g = this.tryEntries.length - 1; g >= 0; --g) {
            var y = this.tryEntries[g];
            if (y.tryLoc === f) {
              var E = y.completion;
              if (E.type === "throw") {
                var B = E.arg;
                wt(y);
              }
              return B;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function(f, g, y) {
          return this.delegate = {
            iterator: dt(f),
            resultName: g,
            nextLoc: y
          }, this.method === "next" && (this.arg = void 0), I;
        }
      }, n;
    }
    r.exports = e, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(as)), as.exports;
}
var cs, qo;
function ol() {
  if (qo)
    return cs;
  qo = 1;
  var r = sl()();
  cs = r;
  try {
    regeneratorRuntime = r;
  } catch {
    typeof globalThis == "object" ? globalThis.regeneratorRuntime = r : Function("r", "regeneratorRuntime = r")(r);
  }
  return cs;
}
var us = { exports: {} }, Yo;
function al() {
  return Yo || (Yo = 1, function(r) {
    function t(n, s, i, c, u, p, m) {
      try {
        var A = n[p](m), S = A.value;
      } catch (T) {
        i(T);
        return;
      }
      A.done ? s(S) : Promise.resolve(S).then(c, u);
    }
    function e(n) {
      return function() {
        var s = this, i = arguments;
        return new Promise(function(c, u) {
          var p = n.apply(s, i);
          function m(S) {
            t(p, c, u, m, A, "next", S);
          }
          function A(S) {
            t(p, c, u, m, A, "throw", S);
          }
          m(void 0);
        });
      };
    }
    r.exports = e, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(us)), us.exports;
}
var jo;
function cl() {
  return jo || (jo = 1, function(r) {
    var t = li.exports;
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), r.default = void 0;
    var e = t(ol()), n = t(al()), s = t(fo()), i = t(co()), c = t(ao()), u = t(uo()), p = t(lo()), m = t(ho()), A = hi.exports;
    function S(k) {
      var R = T();
      return function() {
        var D = (0, m.default)(k), L;
        if (R) {
          var H = (0, m.default)(this).constructor;
          L = Reflect.construct(D, arguments, H);
        } else
          L = D.apply(this, arguments);
        return (0, p.default)(this, L);
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
    var I = function(k, R) {
      var U = {};
      for (var D in k)
        Object.prototype.hasOwnProperty.call(k, D) && R.indexOf(D) < 0 && (U[D] = k[D]);
      if (k != null && typeof Object.getOwnPropertySymbols == "function")
        for (var L = 0, D = Object.getOwnPropertySymbols(k); L < D.length; L++)
          R.indexOf(D[L]) < 0 && Object.prototype.propertyIsEnumerable.call(k, D[L]) && (U[D[L]] = k[D[L]]);
      return U;
    }, C = /* @__PURE__ */ function(k) {
      (0, u.default)(U, k);
      var R = S(U);
      function U(D) {
        var L, H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "ws://localhost:8080", P = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, Q = arguments.length > 3 ? arguments[3] : void 0;
        (0, i.default)(this, U);
        var W = P.autoconnect, Y = W === void 0 ? !0 : W, wt = P.reconnect, Nt = wt === void 0 ? !0 : wt, dt = P.reconnect_interval, Rt = dt === void 0 ? 1e3 : dt, v = P.max_reconnects, f = v === void 0 ? 5 : v, g = I(P, ["autoconnect", "reconnect", "reconnect_interval", "max_reconnects"]);
        return L = R.call(this), L.webSocketFactory = D, L.queue = {}, L.rpc_id = 0, L.address = H, L.autoconnect = Y, L.ready = !1, L.reconnect = Nt, L.reconnect_interval = Rt, L.max_reconnects = f, L.rest_options = g, L.current_reconnects = 0, L.generate_request_id = Q || function() {
          return ++L.rpc_id;
        }, L.autoconnect && L._connect(L.address, Object.assign({
          autoconnect: L.autoconnect,
          reconnect: L.reconnect,
          reconnect_interval: L.reconnect_interval,
          max_reconnects: L.max_reconnects
        }, L.rest_options)), L;
      }
      return (0, c.default)(U, [{
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
        value: function(L, H, P, Q) {
          var W = this;
          return !Q && (0, s.default)(P) === "object" && (Q = P, P = null), new Promise(function(Y, wt) {
            if (!W.ready)
              return wt(new Error("socket not ready"));
            var Nt = W.generate_request_id(L, H), dt = {
              jsonrpc: "2.0",
              method: L,
              params: H || null,
              id: Nt
            };
            W.socket.send(JSON.stringify(dt), Q, function(Rt) {
              if (Rt)
                return wt(Rt);
              W.queue[Nt] = {
                promise: [Y, wt]
              }, P && (W.queue[Nt].timeout = setTimeout(function() {
                delete W.queue[Nt], wt(new Error("reply timeout"));
              }, P));
            });
          });
        }
      }, {
        key: "login",
        value: function() {
          var D = (0, n.default)(/* @__PURE__ */ e.default.mark(function H(P) {
            var Q;
            return e.default.wrap(function(Y) {
              for (; ; )
                switch (Y.prev = Y.next) {
                  case 0:
                    return Y.next = 2, this.call("rpc.login", P);
                  case 2:
                    if (Q = Y.sent, Q) {
                      Y.next = 5;
                      break;
                    }
                    throw new Error("authentication failed");
                  case 5:
                    return Y.abrupt("return", Q);
                  case 6:
                  case "end":
                    return Y.stop();
                }
            }, H, this);
          }));
          function L(H) {
            return D.apply(this, arguments);
          }
          return L;
        }()
      }, {
        key: "listMethods",
        value: function() {
          var D = (0, n.default)(/* @__PURE__ */ e.default.mark(function H() {
            return e.default.wrap(function(Q) {
              for (; ; )
                switch (Q.prev = Q.next) {
                  case 0:
                    return Q.next = 2, this.call("__listMethods");
                  case 2:
                    return Q.abrupt("return", Q.sent);
                  case 3:
                  case "end":
                    return Q.stop();
                }
            }, H, this);
          }));
          function L() {
            return D.apply(this, arguments);
          }
          return L;
        }()
      }, {
        key: "notify",
        value: function(L, H) {
          var P = this;
          return new Promise(function(Q, W) {
            if (!P.ready)
              return W(new Error("socket not ready"));
            var Y = {
              jsonrpc: "2.0",
              method: L,
              params: H || null
            };
            P.socket.send(JSON.stringify(Y), function(wt) {
              if (wt)
                return W(wt);
              Q();
            });
          });
        }
      }, {
        key: "subscribe",
        value: function() {
          var D = (0, n.default)(/* @__PURE__ */ e.default.mark(function H(P) {
            var Q;
            return e.default.wrap(function(Y) {
              for (; ; )
                switch (Y.prev = Y.next) {
                  case 0:
                    return typeof P == "string" && (P = [P]), Y.next = 3, this.call("rpc.on", P);
                  case 3:
                    if (Q = Y.sent, !(typeof P == "string" && Q[P] !== "ok")) {
                      Y.next = 6;
                      break;
                    }
                    throw new Error("Failed subscribing to an event '" + P + "' with: " + Q[P]);
                  case 6:
                    return Y.abrupt("return", Q);
                  case 7:
                  case "end":
                    return Y.stop();
                }
            }, H, this);
          }));
          function L(H) {
            return D.apply(this, arguments);
          }
          return L;
        }()
      }, {
        key: "unsubscribe",
        value: function() {
          var D = (0, n.default)(/* @__PURE__ */ e.default.mark(function H(P) {
            var Q;
            return e.default.wrap(function(Y) {
              for (; ; )
                switch (Y.prev = Y.next) {
                  case 0:
                    return typeof P == "string" && (P = [P]), Y.next = 3, this.call("rpc.off", P);
                  case 3:
                    if (Q = Y.sent, !(typeof P == "string" && Q[P] !== "ok")) {
                      Y.next = 6;
                      break;
                    }
                    throw new Error("Failed unsubscribing from an event with: " + Q);
                  case 6:
                    return Y.abrupt("return", Q);
                  case 7:
                  case "end":
                    return Y.stop();
                }
            }, H, this);
          }));
          function L(H) {
            return D.apply(this, arguments);
          }
          return L;
        }()
      }, {
        key: "close",
        value: function(L, H) {
          this.socket.close(L || 1e3, H);
        }
      }, {
        key: "_connect",
        value: function(L, H) {
          var P = this;
          this.socket = this.webSocketFactory(L, H), this.socket.addEventListener("open", function() {
            P.ready = !0, P.emit("open"), P.current_reconnects = 0;
          }), this.socket.addEventListener("message", function(Q) {
            var W = Q.data;
            W instanceof ArrayBuffer && (W = Buffer.from(W).toString());
            try {
              W = JSON.parse(W);
            } catch {
              return;
            }
            if (W.notification && P.listeners(W.notification).length) {
              if (!Object.keys(W.params).length)
                return P.emit(W.notification);
              var Y = [W.notification];
              if (W.params.constructor === Object)
                Y.push(W.params);
              else
                for (var wt = 0; wt < W.params.length; wt++)
                  Y.push(W.params[wt]);
              return Promise.resolve().then(function() {
                P.emit.apply(P, Y);
              });
            }
            if (!P.queue[W.id])
              return W.method && W.params ? Promise.resolve().then(function() {
                P.emit(W.method, W.params);
              }) : void 0;
            "error" in W == "result" in W && P.queue[W.id].promise[1](new Error('Server response malformed. Response must include either "result" or "error", but not both.')), P.queue[W.id].timeout && clearTimeout(P.queue[W.id].timeout), W.error ? P.queue[W.id].promise[1](W.error) : P.queue[W.id].promise[0](W.result), delete P.queue[W.id];
          }), this.socket.addEventListener("error", function(Q) {
            return P.emit("error", Q);
          }), this.socket.addEventListener("close", function(Q) {
            var W = Q.code, Y = Q.reason;
            P.ready && setTimeout(function() {
              return P.emit("close", W, Y);
            }, 0), P.ready = !1, P.socket = void 0, W !== 1e3 && (P.current_reconnects++, P.reconnect && (P.max_reconnects > P.current_reconnects || P.max_reconnects === 0) && setTimeout(function() {
              return P._connect(L, H);
            }, P.reconnect_interval));
          });
        }
      }]), U;
    }(A.EventEmitter);
    r.default = C;
  }(os)), os;
}
var Dr = li.exports;
Object.defineProperty(oo, "__esModule", {
  value: !0
});
var dc = oo.Client = void 0, ul = Dr(ao()), fl = Dr(co()), ll = Dr(uo()), hl = Dr(lo()), Vo = Dr(ho()), dl = Dr(il()), pl = Dr(cl());
function gl(r) {
  var t = wl();
  return function() {
    var n = (0, Vo.default)(r), s;
    if (t) {
      var i = (0, Vo.default)(this).constructor;
      s = Reflect.construct(n, arguments, i);
    } else
      s = n.apply(this, arguments);
    return (0, hl.default)(this, s);
  };
}
function wl() {
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
var yl = /* @__PURE__ */ function(r) {
  (0, ll.default)(e, r);
  var t = gl(e);
  function e() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ws://localhost:8080", s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = s.autoconnect, c = i === void 0 ? !0 : i, u = s.reconnect, p = u === void 0 ? !0 : u, m = s.reconnect_interval, A = m === void 0 ? 1e3 : m, S = s.max_reconnects, T = S === void 0 ? 5 : S, I = arguments.length > 2 ? arguments[2] : void 0;
    return (0, fl.default)(this, e), t.call(this, dl.default, n, {
      autoconnect: c,
      reconnect: p,
      reconnect_interval: A,
      max_reconnects: T
    }, I);
  }
  return (0, ul.default)(e);
}(pl.default);
dc = oo.Client = yl;
var On, ml = new Uint8Array(16);
function pc() {
  if (!On && (On = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !On))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return On(ml);
}
const Al = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function di(r) {
  return typeof r == "string" && Al.test(r);
}
var xe = [];
for (var fs = 0; fs < 256; ++fs)
  xe.push((fs + 256).toString(16).substr(1));
function pi(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, e = (xe[r[t + 0]] + xe[r[t + 1]] + xe[r[t + 2]] + xe[r[t + 3]] + "-" + xe[r[t + 4]] + xe[r[t + 5]] + "-" + xe[r[t + 6]] + xe[r[t + 7]] + "-" + xe[r[t + 8]] + xe[r[t + 9]] + "-" + xe[r[t + 10]] + xe[r[t + 11]] + xe[r[t + 12]] + xe[r[t + 13]] + xe[r[t + 14]] + xe[r[t + 15]]).toLowerCase();
  if (!di(e))
    throw TypeError("Stringified UUID is invalid");
  return e;
}
var Zo, ls, hs = 0, ds = 0;
function bl(r, t, e) {
  var n = t && e || 0, s = t || new Array(16);
  r = r || {};
  var i = r.node || Zo, c = r.clockseq !== void 0 ? r.clockseq : ls;
  if (i == null || c == null) {
    var u = r.random || (r.rng || pc)();
    i == null && (i = Zo = [u[0] | 1, u[1], u[2], u[3], u[4], u[5]]), c == null && (c = ls = (u[6] << 8 | u[7]) & 16383);
  }
  var p = r.msecs !== void 0 ? r.msecs : Date.now(), m = r.nsecs !== void 0 ? r.nsecs : ds + 1, A = p - hs + (m - ds) / 1e4;
  if (A < 0 && r.clockseq === void 0 && (c = c + 1 & 16383), (A < 0 || p > hs) && r.nsecs === void 0 && (m = 0), m >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  hs = p, ds = m, ls = c, p += 122192928e5;
  var S = ((p & 268435455) * 1e4 + m) % 4294967296;
  s[n++] = S >>> 24 & 255, s[n++] = S >>> 16 & 255, s[n++] = S >>> 8 & 255, s[n++] = S & 255;
  var T = p / 4294967296 * 1e4 & 268435455;
  s[n++] = T >>> 8 & 255, s[n++] = T & 255, s[n++] = T >>> 24 & 15 | 16, s[n++] = T >>> 16 & 255, s[n++] = c >>> 8 | 128, s[n++] = c & 255;
  for (var I = 0; I < 6; ++I)
    s[n + I] = i[I];
  return t || pi(s);
}
function gc(r) {
  if (!di(r))
    throw TypeError("Invalid UUID");
  var t, e = new Uint8Array(16);
  return e[0] = (t = parseInt(r.slice(0, 8), 16)) >>> 24, e[1] = t >>> 16 & 255, e[2] = t >>> 8 & 255, e[3] = t & 255, e[4] = (t = parseInt(r.slice(9, 13), 16)) >>> 8, e[5] = t & 255, e[6] = (t = parseInt(r.slice(14, 18), 16)) >>> 8, e[7] = t & 255, e[8] = (t = parseInt(r.slice(19, 23), 16)) >>> 8, e[9] = t & 255, e[10] = (t = parseInt(r.slice(24, 36), 16)) / 1099511627776 & 255, e[11] = t / 4294967296 & 255, e[12] = t >>> 24 & 255, e[13] = t >>> 16 & 255, e[14] = t >>> 8 & 255, e[15] = t & 255, e;
}
function xl(r) {
  r = unescape(encodeURIComponent(r));
  for (var t = [], e = 0; e < r.length; ++e)
    t.push(r.charCodeAt(e));
  return t;
}
var El = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", vl = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function wc(r, t, e) {
  function n(s, i, c, u) {
    if (typeof s == "string" && (s = xl(s)), typeof i == "string" && (i = gc(i)), i.length !== 16)
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    var p = new Uint8Array(16 + s.length);
    if (p.set(i), p.set(s, i.length), p = e(p), p[6] = p[6] & 15 | t, p[8] = p[8] & 63 | 128, c) {
      u = u || 0;
      for (var m = 0; m < 16; ++m)
        c[u + m] = p[m];
      return c;
    }
    return pi(p);
  }
  try {
    n.name = r;
  } catch {
  }
  return n.DNS = El, n.URL = vl, n;
}
function Bl(r) {
  if (typeof r == "string") {
    var t = unescape(encodeURIComponent(r));
    r = new Uint8Array(t.length);
    for (var e = 0; e < t.length; ++e)
      r[e] = t.charCodeAt(e);
  }
  return Il(Sl(Ml(r), r.length * 8));
}
function Il(r) {
  for (var t = [], e = r.length * 32, n = "0123456789abcdef", s = 0; s < e; s += 8) {
    var i = r[s >> 5] >>> s % 32 & 255, c = parseInt(n.charAt(i >>> 4 & 15) + n.charAt(i & 15), 16);
    t.push(c);
  }
  return t;
}
function yc(r) {
  return (r + 64 >>> 9 << 4) + 14 + 1;
}
function Sl(r, t) {
  r[t >> 5] |= 128 << t % 32, r[yc(t) - 1] = t;
  for (var e = 1732584193, n = -271733879, s = -1732584194, i = 271733878, c = 0; c < r.length; c += 16) {
    var u = e, p = n, m = s, A = i;
    e = _e(e, n, s, i, r[c], 7, -680876936), i = _e(i, e, n, s, r[c + 1], 12, -389564586), s = _e(s, i, e, n, r[c + 2], 17, 606105819), n = _e(n, s, i, e, r[c + 3], 22, -1044525330), e = _e(e, n, s, i, r[c + 4], 7, -176418897), i = _e(i, e, n, s, r[c + 5], 12, 1200080426), s = _e(s, i, e, n, r[c + 6], 17, -1473231341), n = _e(n, s, i, e, r[c + 7], 22, -45705983), e = _e(e, n, s, i, r[c + 8], 7, 1770035416), i = _e(i, e, n, s, r[c + 9], 12, -1958414417), s = _e(s, i, e, n, r[c + 10], 17, -42063), n = _e(n, s, i, e, r[c + 11], 22, -1990404162), e = _e(e, n, s, i, r[c + 12], 7, 1804603682), i = _e(i, e, n, s, r[c + 13], 12, -40341101), s = _e(s, i, e, n, r[c + 14], 17, -1502002290), n = _e(n, s, i, e, r[c + 15], 22, 1236535329), e = ke(e, n, s, i, r[c + 1], 5, -165796510), i = ke(i, e, n, s, r[c + 6], 9, -1069501632), s = ke(s, i, e, n, r[c + 11], 14, 643717713), n = ke(n, s, i, e, r[c], 20, -373897302), e = ke(e, n, s, i, r[c + 5], 5, -701558691), i = ke(i, e, n, s, r[c + 10], 9, 38016083), s = ke(s, i, e, n, r[c + 15], 14, -660478335), n = ke(n, s, i, e, r[c + 4], 20, -405537848), e = ke(e, n, s, i, r[c + 9], 5, 568446438), i = ke(i, e, n, s, r[c + 14], 9, -1019803690), s = ke(s, i, e, n, r[c + 3], 14, -187363961), n = ke(n, s, i, e, r[c + 8], 20, 1163531501), e = ke(e, n, s, i, r[c + 13], 5, -1444681467), i = ke(i, e, n, s, r[c + 2], 9, -51403784), s = ke(s, i, e, n, r[c + 7], 14, 1735328473), n = ke(n, s, i, e, r[c + 12], 20, -1926607734), e = Te(e, n, s, i, r[c + 5], 4, -378558), i = Te(i, e, n, s, r[c + 8], 11, -2022574463), s = Te(s, i, e, n, r[c + 11], 16, 1839030562), n = Te(n, s, i, e, r[c + 14], 23, -35309556), e = Te(e, n, s, i, r[c + 1], 4, -1530992060), i = Te(i, e, n, s, r[c + 4], 11, 1272893353), s = Te(s, i, e, n, r[c + 7], 16, -155497632), n = Te(n, s, i, e, r[c + 10], 23, -1094730640), e = Te(e, n, s, i, r[c + 13], 4, 681279174), i = Te(i, e, n, s, r[c], 11, -358537222), s = Te(s, i, e, n, r[c + 3], 16, -722521979), n = Te(n, s, i, e, r[c + 6], 23, 76029189), e = Te(e, n, s, i, r[c + 9], 4, -640364487), i = Te(i, e, n, s, r[c + 12], 11, -421815835), s = Te(s, i, e, n, r[c + 15], 16, 530742520), n = Te(n, s, i, e, r[c + 2], 23, -995338651), e = Ce(e, n, s, i, r[c], 6, -198630844), i = Ce(i, e, n, s, r[c + 7], 10, 1126891415), s = Ce(s, i, e, n, r[c + 14], 15, -1416354905), n = Ce(n, s, i, e, r[c + 5], 21, -57434055), e = Ce(e, n, s, i, r[c + 12], 6, 1700485571), i = Ce(i, e, n, s, r[c + 3], 10, -1894986606), s = Ce(s, i, e, n, r[c + 10], 15, -1051523), n = Ce(n, s, i, e, r[c + 1], 21, -2054922799), e = Ce(e, n, s, i, r[c + 8], 6, 1873313359), i = Ce(i, e, n, s, r[c + 15], 10, -30611744), s = Ce(s, i, e, n, r[c + 6], 15, -1560198380), n = Ce(n, s, i, e, r[c + 13], 21, 1309151649), e = Ce(e, n, s, i, r[c + 4], 6, -145523070), i = Ce(i, e, n, s, r[c + 11], 10, -1120210379), s = Ce(s, i, e, n, r[c + 2], 15, 718787259), n = Ce(n, s, i, e, r[c + 9], 21, -343485551), e = Er(e, u), n = Er(n, p), s = Er(s, m), i = Er(i, A);
  }
  return [e, n, s, i];
}
function Ml(r) {
  if (r.length === 0)
    return [];
  for (var t = r.length * 8, e = new Uint32Array(yc(t)), n = 0; n < t; n += 8)
    e[n >> 5] |= (r[n / 8] & 255) << n % 32;
  return e;
}
function Er(r, t) {
  var e = (r & 65535) + (t & 65535), n = (r >> 16) + (t >> 16) + (e >> 16);
  return n << 16 | e & 65535;
}
function _l(r, t) {
  return r << t | r >>> 32 - t;
}
function gi(r, t, e, n, s, i) {
  return Er(_l(Er(Er(t, r), Er(n, i)), s), e);
}
function _e(r, t, e, n, s, i, c) {
  return gi(t & e | ~t & n, r, t, s, i, c);
}
function ke(r, t, e, n, s, i, c) {
  return gi(t & n | e & ~n, r, t, s, i, c);
}
function Te(r, t, e, n, s, i, c) {
  return gi(t ^ e ^ n, r, t, s, i, c);
}
function Ce(r, t, e, n, s, i, c) {
  return gi(e ^ (t | ~n), r, t, s, i, c);
}
var kl = wc("v3", 48, Bl);
const Tl = kl;
function Cl(r, t, e) {
  r = r || {};
  var n = r.random || (r.rng || pc)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t) {
    e = e || 0;
    for (var s = 0; s < 16; ++s)
      t[e + s] = n[s];
    return t;
  }
  return pi(n);
}
function Nl(r, t, e, n) {
  switch (r) {
    case 0:
      return t & e ^ ~t & n;
    case 1:
      return t ^ e ^ n;
    case 2:
      return t & e ^ t & n ^ e & n;
    case 3:
      return t ^ e ^ n;
  }
}
function ps(r, t) {
  return r << t | r >>> 32 - t;
}
function Rl(r) {
  var t = [1518500249, 1859775393, 2400959708, 3395469782], e = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof r == "string") {
    var n = unescape(encodeURIComponent(r));
    r = [];
    for (var s = 0; s < n.length; ++s)
      r.push(n.charCodeAt(s));
  } else
    Array.isArray(r) || (r = Array.prototype.slice.call(r));
  r.push(128);
  for (var i = r.length / 4 + 2, c = Math.ceil(i / 16), u = new Array(c), p = 0; p < c; ++p) {
    for (var m = new Uint32Array(16), A = 0; A < 16; ++A)
      m[A] = r[p * 64 + A * 4] << 24 | r[p * 64 + A * 4 + 1] << 16 | r[p * 64 + A * 4 + 2] << 8 | r[p * 64 + A * 4 + 3];
    u[p] = m;
  }
  u[c - 1][14] = (r.length - 1) * 8 / Math.pow(2, 32), u[c - 1][14] = Math.floor(u[c - 1][14]), u[c - 1][15] = (r.length - 1) * 8 & 4294967295;
  for (var S = 0; S < c; ++S) {
    for (var T = new Uint32Array(80), I = 0; I < 16; ++I)
      T[I] = u[S][I];
    for (var C = 16; C < 80; ++C)
      T[C] = ps(T[C - 3] ^ T[C - 8] ^ T[C - 14] ^ T[C - 16], 1);
    for (var k = e[0], R = e[1], U = e[2], D = e[3], L = e[4], H = 0; H < 80; ++H) {
      var P = Math.floor(H / 20), Q = ps(k, 5) + Nl(P, R, U, D) + L + t[P] + T[H] >>> 0;
      L = D, D = U, U = ps(R, 30) >>> 0, R = k, k = Q;
    }
    e[0] = e[0] + k >>> 0, e[1] = e[1] + R >>> 0, e[2] = e[2] + U >>> 0, e[3] = e[3] + D >>> 0, e[4] = e[4] + L >>> 0;
  }
  return [e[0] >> 24 & 255, e[0] >> 16 & 255, e[0] >> 8 & 255, e[0] & 255, e[1] >> 24 & 255, e[1] >> 16 & 255, e[1] >> 8 & 255, e[1] & 255, e[2] >> 24 & 255, e[2] >> 16 & 255, e[2] >> 8 & 255, e[2] & 255, e[3] >> 24 & 255, e[3] >> 16 & 255, e[3] >> 8 & 255, e[3] & 255, e[4] >> 24 & 255, e[4] >> 16 & 255, e[4] >> 8 & 255, e[4] & 255];
}
var Ll = wc("v5", 80, Rl);
const Ul = Ll, Ol = "00000000-0000-0000-0000-000000000000";
function Fl(r) {
  if (!di(r))
    throw TypeError("Invalid UUID");
  return parseInt(r.substr(14, 1), 16);
}
const Dl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  v1: bl,
  v3: Tl,
  v4: Cl,
  v5: Ul,
  NIL: Ol,
  version: Fl,
  validate: di,
  stringify: pi,
  parse: gc
}, Symbol.toStringTag, { value: "Module" })), mc = /* @__PURE__ */ Ps(Dl), Pl = mc.v4, zl = function(r, t, e, n) {
  if (typeof r != "string")
    throw new TypeError(r + " must be a string");
  n = n || {};
  const s = typeof n.version == "number" ? n.version : 2;
  if (s !== 1 && s !== 2)
    throw new TypeError(s + " must be 1 or 2");
  const i = {
    method: r
  };
  if (s === 2 && (i.jsonrpc = "2.0"), t) {
    if (typeof t != "object" && !Array.isArray(t))
      throw new TypeError(t + " must be an object, array or omitted");
    i.params = t;
  }
  if (typeof e > "u") {
    const c = typeof n.generator == "function" ? n.generator : function() {
      return Pl();
    };
    i.id = c(i, n);
  } else
    s === 2 && e === null ? n.notificationIdNull && (i.id = null) : i.id = e;
  return i;
};
var Hl = zl;
const Gl = mc.v4, Ql = Hl, wn = function(r, t) {
  if (!(this instanceof wn))
    return new wn(r, t);
  t || (t = {}), this.options = {
    reviver: typeof t.reviver < "u" ? t.reviver : null,
    replacer: typeof t.replacer < "u" ? t.replacer : null,
    generator: typeof t.generator < "u" ? t.generator : function() {
      return Gl();
    },
    version: typeof t.version < "u" ? t.version : 2,
    notificationIdNull: typeof t.notificationIdNull == "boolean" ? t.notificationIdNull : !1
  }, this.callServer = r;
};
var Wl = wn;
wn.prototype.request = function(r, t, e, n) {
  const s = this;
  let i = null;
  const c = Array.isArray(r) && typeof t == "function";
  if (this.options.version === 1 && c)
    throw new TypeError("JSON-RPC 1.0 does not support batching");
  if (c || !c && r && typeof r == "object" && typeof t == "function")
    n = t, i = r;
  else {
    typeof e == "function" && (n = e, e = void 0);
    const m = typeof n == "function";
    try {
      i = Ql(r, t, e, {
        generator: this.options.generator,
        version: this.options.version,
        notificationIdNull: this.options.notificationIdNull
      });
    } catch (A) {
      if (m)
        return n(A);
      throw A;
    }
    if (!m)
      return i;
  }
  let p;
  try {
    p = JSON.stringify(i, this.options.replacer);
  } catch (m) {
    return n(m);
  }
  return this.callServer(p, function(m, A) {
    s._parseResponse(m, A, n);
  }), i;
};
wn.prototype._parseResponse = function(r, t, e) {
  if (r) {
    e(r);
    return;
  }
  if (!t)
    return e();
  let n;
  try {
    n = JSON.parse(t, this.options.reviver);
  } catch (s) {
    return e(s);
  }
  if (e.length === 3)
    if (Array.isArray(n)) {
      const s = function(c) {
        return typeof c.error < "u";
      }, i = function(c) {
        return !s(c);
      };
      return e(null, n.filter(s), n.filter(i));
    } else
      return e(null, n.error, n.result);
  e(null, n);
};
const [Ac, bc, xc] = [[], [], []], Kl = BigInt(0), nn = BigInt(1), ql = BigInt(2), Yl = BigInt(7), jl = BigInt(256), Vl = BigInt(113);
for (let r = 0, t = nn, e = 1, n = 0; r < 24; r++) {
  [e, n] = [n, (2 * e + 3 * n) % 5], Ac.push(2 * (5 * n + e)), bc.push((r + 1) * (r + 2) / 2 % 64);
  let s = Kl;
  for (let i = 0; i < 7; i++)
    t = (t << nn ^ (t >> Yl) * Vl) % jl, t & ql && (s ^= nn << (nn << BigInt(i)) - nn);
  xc.push(s);
}
const [Zl, Xl] = ht.split(xc, !0), Xo = (r, t, e) => e > 32 ? ht.rotlBH(r, t, e) : ht.rotlSH(r, t, e), Jo = (r, t, e) => e > 32 ? ht.rotlBL(r, t, e) : ht.rotlSL(r, t, e);
function Jl(r, t = 24) {
  const e = new Uint32Array(10);
  for (let n = 24 - t; n < 24; n++) {
    for (let c = 0; c < 10; c++)
      e[c] = r[c] ^ r[c + 10] ^ r[c + 20] ^ r[c + 30] ^ r[c + 40];
    for (let c = 0; c < 10; c += 2) {
      const u = (c + 8) % 10, p = (c + 2) % 10, m = e[p], A = e[p + 1], S = Xo(m, A, 1) ^ e[u], T = Jo(m, A, 1) ^ e[u + 1];
      for (let I = 0; I < 50; I += 10)
        r[c + I] ^= S, r[c + I + 1] ^= T;
    }
    let s = r[2], i = r[3];
    for (let c = 0; c < 24; c++) {
      const u = bc[c], p = Xo(s, i, u), m = Jo(s, i, u), A = Ac[c];
      s = r[A], i = r[A + 1], r[A] = p, r[A + 1] = m;
    }
    for (let c = 0; c < 50; c += 10) {
      for (let u = 0; u < 10; u++)
        e[u] = r[c + u];
      for (let u = 0; u < 10; u++)
        r[c + u] ^= ~e[(u + 2) % 10] & e[(u + 4) % 10];
    }
    r[0] ^= Zl[n], r[1] ^= Xl[n];
  }
  e.fill(0);
}
class wi extends zs {
  constructor(t, e, n, s = !1, i = 24) {
    if (super(), this.blockLen = t, this.suffix = e, this.outputLen = n, this.enableXOF = s, this.rounds = i, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, ze.number(n), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = gu(this.state);
  }
  keccak() {
    Jl(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(t) {
    ze.exists(this);
    const { blockLen: e, state: n } = this;
    t = vn(t);
    const s = t.length;
    for (let i = 0; i < s; ) {
      const c = Math.min(e - this.pos, s - i);
      for (let u = 0; u < c; u++)
        n[this.pos++] ^= t[i++];
      this.pos === e && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: t, suffix: e, pos: n, blockLen: s } = this;
    t[n] ^= e, (e & 128) !== 0 && n === s - 1 && this.keccak(), t[s - 1] ^= 128, this.keccak();
  }
  writeInto(t) {
    ze.exists(this, !1), ze.bytes(t), this.finish();
    const e = this.state, { blockLen: n } = this;
    for (let s = 0, i = t.length; s < i; ) {
      this.posOut >= n && this.keccak();
      const c = Math.min(n - this.posOut, i - s);
      t.set(e.subarray(this.posOut, this.posOut + c), s), this.posOut += c, s += c;
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(t);
  }
  xof(t) {
    return ze.number(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if (ze.output(t, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(t), this.destroy(), t;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(t) {
    const { blockLen: e, suffix: n, outputLen: s, rounds: i, enableXOF: c } = this;
    return t || (t = new wi(e, n, s, c, i)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = i, t.suffix = n, t.outputLen = s, t.enableXOF = c, t.destroyed = this.destroyed, t;
  }
}
const Mr = (r, t, e) => Bn(() => new wi(t, r, e));
Mr(6, 144, 224 / 8);
Mr(6, 136, 256 / 8);
Mr(6, 104, 384 / 8);
Mr(6, 72, 512 / 8);
Mr(1, 144, 224 / 8);
Mr(1, 136, 256 / 8);
Mr(1, 104, 384 / 8);
Mr(1, 72, 512 / 8);
const Ec = (r, t, e) => mu((n = {}) => new wi(t, r, n.dkLen === void 0 ? e : n.dkLen, !0));
Ec(31, 168, 128 / 8);
Ec(31, 136, 256 / 8);
class vc extends zs {
  constructor(t, e) {
    super(), this.finished = !1, this.destroyed = !1, ze.hash(t);
    const n = vn(e);
    if (this.iHash = t.create(), typeof this.iHash.update != "function")
      throw new TypeError("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const s = this.blockLen, i = new Uint8Array(s);
    i.set(n.length > s ? t.create().update(n).digest() : n);
    for (let c = 0; c < i.length; c++)
      i[c] ^= 54;
    this.iHash.update(i), this.oHash = t.create();
    for (let c = 0; c < i.length; c++)
      i[c] ^= 106;
    this.oHash.update(i), i.fill(0);
  }
  update(t) {
    return ze.exists(this), this.iHash.update(t), this;
  }
  digestInto(t) {
    ze.exists(this), ze.bytes(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy();
  }
  digest() {
    const t = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(t), t;
  }
  _cloneInto(t) {
    t || (t = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: e, iHash: n, finished: s, destroyed: i, blockLen: c, outputLen: u } = this;
    return t = t, t.finished = s, t.destroyed = i, t.blockLen = c, t.outputLen = u, t.oHash = e._cloneInto(t.oHash), t.iHash = n._cloneInto(t.iHash), t;
  }
  destroy() {
    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
  }
}
const Bc = (r, t, e) => new vc(r, t).update(e).digest();
Bc.create = (r, t) => new vc(r, t);
/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
const Mt = BigInt(0), qt = BigInt(1), vr = BigInt(2), hn = BigInt(3), $l = BigInt(8), Xt = Object.freeze({
  a: Mt,
  b: BigInt(7),
  P: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
  n: BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
  h: qt,
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")
});
function $o(r) {
  const { a: t, b: e } = Xt, n = et(r * r), s = et(n * r);
  return et(s + t * r + e);
}
const Fn = Xt.a === Mt;
class th extends Error {
  constructor(t) {
    super(t);
  }
}
class _t {
  constructor(t, e, n) {
    this.x = t, this.y = e, this.z = n;
  }
  static fromAffine(t) {
    if (!(t instanceof be))
      throw new TypeError("JacobianPoint#fromAffine: expected Point");
    return new _t(t.x, t.y, qt);
  }
  static toAffineBatch(t) {
    const e = sh(t.map((n) => n.z));
    return t.map((n, s) => n.toAffine(e[s]));
  }
  static normalizeZ(t) {
    return _t.toAffineBatch(t).map(_t.fromAffine);
  }
  equals(t) {
    if (!(t instanceof _t))
      throw new TypeError("JacobianPoint expected");
    const { x: e, y: n, z: s } = this, { x: i, y: c, z: u } = t, p = et(s * s), m = et(u * u), A = et(e * m), S = et(i * p), T = et(et(n * u) * m), I = et(et(c * s) * p);
    return A === S && T === I;
  }
  negate() {
    return new _t(this.x, et(-this.y), this.z);
  }
  double() {
    const { x: t, y: e, z: n } = this, s = et(t * t), i = et(e * e), c = et(i * i), u = t + i, p = et(vr * (et(u * u) - s - c)), m = et(hn * s), A = et(m * m), S = et(A - vr * p), T = et(m * (p - S) - $l * c), I = et(vr * e * n);
    return new _t(S, T, I);
  }
  add(t) {
    if (!(t instanceof _t))
      throw new TypeError("JacobianPoint expected");
    const { x: e, y: n, z: s } = this, { x: i, y: c, z: u } = t;
    if (i === Mt || c === Mt)
      return this;
    if (e === Mt || n === Mt)
      return t;
    const p = et(s * s), m = et(u * u), A = et(e * m), S = et(i * p), T = et(et(n * u) * m), I = et(et(c * s) * p), C = et(S - A), k = et(I - T);
    if (C === Mt)
      return k === Mt ? this.double() : _t.ZERO;
    const R = et(C * C), U = et(C * R), D = et(A * R), L = et(k * k - U - vr * D), H = et(k * (D - L) - T * U), P = et(s * u * C);
    return new _t(L, H, P);
  }
  subtract(t) {
    return this.add(t.negate());
  }
  multiplyUnsafe(t) {
    const e = _t.ZERO;
    if (typeof t == "bigint" && t === Mt)
      return e;
    let n = na(t);
    if (n === qt)
      return this;
    if (!Fn) {
      let S = e, T = this;
      for (; n > Mt; )
        n & qt && (S = S.add(T)), T = T.double(), n >>= qt;
      return S;
    }
    let { k1neg: s, k1: i, k2neg: c, k2: u } = sa(n), p = e, m = e, A = this;
    for (; i > Mt || u > Mt; )
      i & qt && (p = p.add(A)), u & qt && (m = m.add(A)), A = A.double(), i >>= qt, u >>= qt;
    return s && (p = p.negate()), c && (m = m.negate()), m = new _t(et(m.x * Xt.beta), m.y, m.z), p.add(m);
  }
  precomputeWindow(t) {
    const e = Fn ? 128 / t + 1 : 256 / t + 1, n = [];
    let s = this, i = s;
    for (let c = 0; c < e; c++) {
      i = s, n.push(i);
      for (let u = 1; u < 2 ** (t - 1); u++)
        i = i.add(s), n.push(i);
      s = i.double();
    }
    return n;
  }
  wNAF(t, e) {
    !e && this.equals(_t.BASE) && (e = be.BASE);
    const n = e && e._WINDOW_SIZE || 1;
    if (256 % n)
      throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");
    let s = e && ks.get(e);
    s || (s = this.precomputeWindow(n), e && n !== 1 && (s = _t.normalizeZ(s), ks.set(e, s)));
    let i = _t.ZERO, c = _t.ZERO;
    const u = 1 + (Fn ? 128 / n : 256 / n), p = 2 ** (n - 1), m = BigInt(2 ** n - 1), A = 2 ** n, S = BigInt(n);
    for (let T = 0; T < u; T++) {
      const I = T * p;
      let C = Number(t & m);
      if (t >>= S, C > p && (C -= A, t += qt), C === 0) {
        let k = s[I];
        T % 2 && (k = k.negate()), c = c.add(k);
      } else {
        let k = s[I + Math.abs(C) - 1];
        C < 0 && (k = k.negate()), i = i.add(k);
      }
    }
    return { p: i, f: c };
  }
  multiply(t, e) {
    let n = na(t), s, i;
    if (Fn) {
      const { k1neg: c, k1: u, k2neg: p, k2: m } = sa(n);
      let { p: A, f: S } = this.wNAF(u, e), { p: T, f: I } = this.wNAF(m, e);
      c && (A = A.negate()), p && (T = T.negate()), T = new _t(et(T.x * Xt.beta), T.y, T.z), s = A.add(T), i = S.add(I);
    } else {
      const { p: c, f: u } = this.wNAF(n, e);
      s = c, i = u;
    }
    return _t.normalizeZ([s, i])[0];
  }
  toAffine(t = yi(this.z)) {
    const { x: e, y: n, z: s } = this, i = t, c = et(i * i), u = et(c * i), p = et(e * c), m = et(n * u);
    if (et(s * i) !== qt)
      throw new Error("invZ was invalid");
    return new be(p, m);
  }
}
_t.BASE = new _t(Xt.Gx, Xt.Gy, qt);
_t.ZERO = new _t(Mt, qt, Mt);
const ks = /* @__PURE__ */ new WeakMap();
class be {
  constructor(t, e) {
    this.x = t, this.y = e;
  }
  _setWindowSize(t) {
    this._WINDOW_SIZE = t, ks.delete(this);
  }
  hasEvenY() {
    return this.y % vr === Mt;
  }
  static fromCompressedHex(t) {
    const e = t.length === 32, n = Lr(e ? t : t.subarray(1));
    if (!ws(n))
      throw new Error("Point is not on curve");
    const s = $o(n);
    let i = ih(s);
    const c = (i & qt) === qt;
    e ? c && (i = et(-i)) : (t[0] & 1) === 1 !== c && (i = et(-i));
    const u = new be(n, i);
    return u.assertValidity(), u;
  }
  static fromUncompressedHex(t) {
    const e = Lr(t.subarray(1, 33)), n = Lr(t.subarray(33, 65)), s = new be(e, n);
    return s.assertValidity(), s;
  }
  static fromHex(t) {
    const e = Ts(t), n = e.length, s = e[0];
    if (n === 32 || n === 33 && (s === 2 || s === 3))
      return this.fromCompressedHex(e);
    if (n === 65 && s === 4)
      return this.fromUncompressedHex(e);
    throw new Error(`Point.fromHex: received invalid point. Expected 32-33 compressed bytes or 65 uncompressed bytes, not ${n}`);
  }
  static fromPrivateKey(t) {
    return be.BASE.multiply(Cs(t));
  }
  static fromSignature(t, e, n) {
    t = Ts(t);
    const s = ah(t), { r: i, s: c } = ch(e);
    if (n !== 0 && n !== 1)
      throw new Error("Cannot recover signature: invalid recovery bit");
    const u = n & 1 ? "03" : "02", p = be.fromHex(u + Yr(i)), { n: m } = Xt, A = yi(i, m), S = et(-s * A, m), T = et(c * A, m), I = be.BASE.multiplyAndAddUnsafe(p, S, T);
    if (!I)
      throw new Error("Cannot recover signature: point at infinify");
    return I.assertValidity(), I;
  }
  toRawBytes(t = !1) {
    return Rr(this.toHex(t));
  }
  toHex(t = !1) {
    const e = Yr(this.x);
    return t ? `${this.hasEvenY() ? "02" : "03"}${e}` : `04${e}${Yr(this.y)}`;
  }
  toHexX() {
    return this.toHex(!0).slice(2);
  }
  toRawX() {
    return this.toRawBytes(!0).slice(1);
  }
  assertValidity() {
    const t = "Point is not on elliptic curve", { x: e, y: n } = this;
    if (!ws(e) || !ws(n))
      throw new Error(t);
    const s = et(n * n), i = $o(e);
    if (et(s - i) !== Mt)
      throw new Error(t);
  }
  equals(t) {
    return this.x === t.x && this.y === t.y;
  }
  negate() {
    return new be(this.x, et(-this.y));
  }
  double() {
    return _t.fromAffine(this).double().toAffine();
  }
  add(t) {
    return _t.fromAffine(this).add(_t.fromAffine(t)).toAffine();
  }
  subtract(t) {
    return this.add(t.negate());
  }
  multiply(t) {
    return _t.fromAffine(this).multiply(t, this).toAffine();
  }
  multiplyAndAddUnsafe(t, e, n) {
    const s = _t.fromAffine(this), i = e === Mt || e === qt || this !== be.BASE ? s.multiplyUnsafe(e) : s.multiply(e), c = _t.fromAffine(t).multiplyUnsafe(n), u = i.add(c);
    return u.equals(_t.ZERO) ? void 0 : u.toAffine();
  }
}
be.BASE = new be(Xt.Gx, Xt.Gy);
be.ZERO = new be(Mt, Mt);
function ta(r) {
  return Number.parseInt(r[0], 16) >= 8 ? "00" + r : r;
}
function ea(r) {
  if (r.length < 2 || r[0] !== 2)
    throw new Error(`Invalid signature integer tag: ${Jr(r)}`);
  const t = r[1], e = r.subarray(2, t + 2);
  if (!t || e.length !== t)
    throw new Error("Invalid signature integer: wrong length");
  if (e[0] === 0 && e[1] <= 127)
    throw new Error("Invalid signature integer: trailing length");
  return { data: Lr(e), left: r.subarray(t + 2) };
}
function eh(r) {
  if (r.length < 2 || r[0] != 48)
    throw new Error(`Invalid signature tag: ${Jr(r)}`);
  if (r[1] !== r.length - 2)
    throw new Error("Invalid signature: incorrect length");
  const { data: t, left: e } = ea(r.subarray(2)), { data: n, left: s } = ea(e);
  if (s.length)
    throw new Error(`Invalid signature: left bytes after parsing: ${Jr(s)}`);
  return { r: t, s: n };
}
class Nr {
  constructor(t, e) {
    this.r = t, this.s = e, this.assertValidity();
  }
  static fromCompact(t) {
    const e = t instanceof Uint8Array, n = "Signature.fromCompact";
    if (typeof t != "string" && !e)
      throw new TypeError(`${n}: Expected string or Uint8Array`);
    const s = e ? Jr(t) : t;
    if (s.length !== 128)
      throw new Error(`${n}: Expected 64-byte hex`);
    return new Nr(ei(s.slice(0, 64)), ei(s.slice(64, 128)));
  }
  static fromDER(t) {
    const e = t instanceof Uint8Array;
    if (typeof t != "string" && !e)
      throw new TypeError("Signature.fromDER: Expected string or Uint8Array");
    const { r: n, s } = eh(e ? t : Rr(t));
    return new Nr(n, s);
  }
  static fromHex(t) {
    return this.fromDER(t);
  }
  assertValidity() {
    const { r: t, s: e } = this;
    if (!ri(t))
      throw new Error("Invalid Signature: r must be 0 < r < n");
    if (!ri(e))
      throw new Error("Invalid Signature: s must be 0 < s < n");
  }
  hasHighS() {
    const t = Xt.n >> qt;
    return this.s > t;
  }
  normalizeS() {
    return this.hasHighS() ? new Nr(this.r, Xt.n - this.s) : this;
  }
  toDERRawBytes(t = !1) {
    return Rr(this.toDERHex(t));
  }
  toDERHex(t = !1) {
    const e = ta(on(this.s));
    if (t)
      return e;
    const n = ta(on(this.r)), s = on(n.length / 2), i = on(e.length / 2);
    return `30${on(n.length / 2 + e.length / 2 + 4)}02${s}${n}02${i}${e}`;
  }
  toRawBytes() {
    return this.toDERRawBytes();
  }
  toHex() {
    return this.toDERHex();
  }
  toCompactRawBytes() {
    return Rr(this.toCompactHex());
  }
  toCompactHex() {
    return Yr(this.r) + Yr(this.s);
  }
}
function sn(...r) {
  if (!r.every((n) => n instanceof Uint8Array))
    throw new Error("Uint8Array list expected");
  if (r.length === 1)
    return r[0];
  const t = r.reduce((n, s) => n + s.length, 0), e = new Uint8Array(t);
  for (let n = 0, s = 0; n < r.length; n++) {
    const i = r[n];
    e.set(i, s), s += i.length;
  }
  return e;
}
const rh = Array.from({ length: 256 }, (r, t) => t.toString(16).padStart(2, "0"));
function Jr(r) {
  if (!(r instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  let t = "";
  for (let e = 0; e < r.length; e++)
    t += rh[r[e]];
  return t;
}
const nh = BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");
function Yr(r) {
  if (typeof r != "bigint")
    throw new Error("Expected bigint");
  if (!(Mt <= r && r < nh))
    throw new Error("Expected number < 2^256");
  return r.toString(16).padStart(64, "0");
}
function ra(r) {
  const t = Rr(Yr(r));
  if (t.length !== 32)
    throw new Error("Error: expected 32 bytes");
  return t;
}
function on(r) {
  const t = r.toString(16);
  return t.length & 1 ? `0${t}` : t;
}
function ei(r) {
  if (typeof r != "string")
    throw new TypeError("hexToNumber: expected string, got " + typeof r);
  return BigInt(`0x${r}`);
}
function Rr(r) {
  if (typeof r != "string")
    throw new TypeError("hexToBytes: expected string, got " + typeof r);
  if (r.length % 2)
    throw new Error("hexToBytes: received invalid unpadded hex" + r.length);
  const t = new Uint8Array(r.length / 2);
  for (let e = 0; e < t.length; e++) {
    const n = e * 2, s = r.slice(n, n + 2), i = Number.parseInt(s, 16);
    if (Number.isNaN(i) || i < 0)
      throw new Error("Invalid byte sequence");
    t[e] = i;
  }
  return t;
}
function Lr(r) {
  return ei(Jr(r));
}
function Ts(r) {
  return r instanceof Uint8Array ? Uint8Array.from(r) : Rr(r);
}
function na(r) {
  if (typeof r == "number" && Number.isSafeInteger(r) && r > 0)
    return BigInt(r);
  if (typeof r == "bigint" && ri(r))
    return r;
  throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n");
}
function et(r, t = Xt.P) {
  const e = r % t;
  return e >= Mt ? e : t + e;
}
function Ge(r, t) {
  const { P: e } = Xt;
  let n = r;
  for (; t-- > Mt; )
    n *= n, n %= e;
  return n;
}
function ih(r) {
  const { P: t } = Xt, e = BigInt(6), n = BigInt(11), s = BigInt(22), i = BigInt(23), c = BigInt(44), u = BigInt(88), p = r * r * r % t, m = p * p * r % t, A = Ge(m, hn) * m % t, S = Ge(A, hn) * m % t, T = Ge(S, vr) * p % t, I = Ge(T, n) * T % t, C = Ge(I, s) * I % t, k = Ge(C, c) * C % t, R = Ge(k, u) * k % t, U = Ge(R, c) * C % t, D = Ge(U, hn) * m % t, L = Ge(D, i) * I % t, H = Ge(L, e) * p % t;
  return Ge(H, vr);
}
function yi(r, t = Xt.P) {
  if (r === Mt || t <= Mt)
    throw new Error(`invert: expected positive integers, got n=${r} mod=${t}`);
  let e = et(r, t), n = t, s = Mt, i = qt;
  for (; e !== Mt; ) {
    const u = n / e, p = n % e, m = s - i * u;
    n = e, e = p, s = i, i = m;
  }
  if (n !== qt)
    throw new Error("invert: does not exist");
  return et(s, t);
}
function sh(r, t = Xt.P) {
  const e = new Array(r.length), n = r.reduce((i, c, u) => c === Mt ? i : (e[u] = i, et(i * c, t)), qt), s = yi(n, t);
  return r.reduceRight((i, c, u) => c === Mt ? i : (e[u] = et(i * e[u], t), et(i * c, t)), s), e;
}
const ia = (r, t) => (r + t / vr) / t, oh = {
  a1: BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
  b1: -qt * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
  a2: BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
  b2: BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
  POW_2_128: BigInt("0x100000000000000000000000000000000")
};
function sa(r) {
  const { n: t } = Xt, { a1: e, b1: n, a2: s, b2: i, POW_2_128: c } = oh, u = ia(i * r, t), p = ia(-n * r, t);
  let m = et(r - u * e - p * s, t), A = et(-u * n - p * i, t);
  const S = m > c, T = A > c;
  if (S && (m = t - m), T && (A = t - A), m > c || A > c)
    throw new Error("splitScalarEndo: Endomorphism failed, k=" + r);
  return { k1neg: S, k1: m, k2neg: T, k2: A };
}
function ah(r) {
  const { n: t } = Xt, n = r.length * 8 - 256;
  let s = Lr(r);
  return n > 0 && (s = s >> BigInt(n)), s >= t && (s -= t), s;
}
let jr, gs;
function ri(r) {
  return Mt < r && r < Xt.n;
}
function ws(r) {
  return Mt < r && r < Xt.P;
}
function Cs(r) {
  let t;
  if (typeof r == "bigint")
    t = r;
  else if (typeof r == "number" && Number.isSafeInteger(r) && r > 0)
    t = BigInt(r);
  else if (typeof r == "string") {
    if (r.length !== 64)
      throw new Error("Expected 32 bytes of private key");
    t = ei(r);
  } else if (r instanceof Uint8Array) {
    if (r.length !== 32)
      throw new Error("Expected 32 bytes of private key");
    t = Lr(r);
  } else
    throw new TypeError("Expected valid private key");
  if (!ri(t))
    throw new Error("Expected private key: 0 < key < n");
  return t;
}
function ch(r) {
  if (r instanceof Nr)
    return r.assertValidity(), r;
  try {
    return Nr.fromDER(r);
  } catch {
    return Nr.fromCompact(r);
  }
}
be.BASE._setWindowSize(8);
const De = {
  node: Gs,
  web: typeof self == "object" && "crypto" in self ? self.crypto : void 0
}, Dn = {}, Tr = {
  bytesToHex: Jr,
  hexToBytes: Rr,
  concatBytes: sn,
  mod: et,
  invert: yi,
  isValidPrivateKey(r) {
    try {
      return Cs(r), !0;
    } catch {
      return !1;
    }
  },
  _bigintTo32Bytes: ra,
  _normalizePrivateKey: Cs,
  hashToPrivateKey: (r) => {
    if (r = Ts(r), r.length < 40 || r.length > 1024)
      throw new Error("Expected 40-1024 bytes of private key as per FIPS 186");
    const t = et(Lr(r), Xt.n - qt) + qt;
    return ra(t);
  },
  randomBytes: (r = 32) => {
    if (De.web)
      return De.web.getRandomValues(new Uint8Array(r));
    if (De.node) {
      const { randomBytes: t } = De.node;
      return Uint8Array.from(t(r));
    } else
      throw new Error("The environment doesn't have randomBytes function");
  },
  randomPrivateKey: () => Tr.hashToPrivateKey(Tr.randomBytes(40)),
  sha256: async (...r) => {
    if (De.web) {
      const t = await De.web.subtle.digest("SHA-256", sn(...r));
      return new Uint8Array(t);
    } else if (De.node) {
      const { createHash: t } = De.node, e = t("sha256");
      return r.forEach((n) => e.update(n)), Uint8Array.from(e.digest());
    } else
      throw new Error("The environment doesn't have sha256 function");
  },
  hmacSha256: async (r, ...t) => {
    if (De.web) {
      const e = await De.web.subtle.importKey("raw", r, { name: "HMAC", hash: { name: "SHA-256" } }, !1, ["sign"]), n = sn(...t), s = await De.web.subtle.sign("HMAC", e, n);
      return new Uint8Array(s);
    } else if (De.node) {
      const { createHmac: e } = De.node, n = e("sha256", r);
      return t.forEach((s) => n.update(s)), Uint8Array.from(n.digest());
    } else
      throw new Error("The environment doesn't have hmac-sha256 function");
  },
  sha256Sync: void 0,
  hmacSha256Sync: void 0,
  taggedHash: async (r, ...t) => {
    let e = Dn[r];
    if (e === void 0) {
      const n = await Tr.sha256(Uint8Array.from(r, (s) => s.charCodeAt(0)));
      e = sn(n, n), Dn[r] = e;
    }
    return Tr.sha256(e, ...t);
  },
  taggedHashSync: (r, ...t) => {
    if (typeof jr != "function")
      throw new th("sha256Sync is undefined, you need to set it");
    let e = Dn[r];
    if (e === void 0) {
      const n = jr(Uint8Array.from(r, (s) => s.charCodeAt(0)));
      e = sn(n, n), Dn[r] = e;
    }
    return jr(e, ...t);
  },
  precompute(r = 8, t = be.BASE) {
    const e = t === be.BASE ? t : new be(t.x, t.y);
    return e._setWindowSize(r), e.multiply(hn), e;
  }
};
Object.defineProperties(Tr, {
  sha256Sync: {
    configurable: !1,
    get() {
      return jr;
    },
    set(r) {
      jr || (jr = r);
    }
  },
  hmacSha256Sync: {
    configurable: !1,
    get() {
      return gs;
    },
    set(r) {
      gs || (gs = r);
    }
  }
});
Zr.sha512Sync = (...r) => Ku(Zr.concatBytes(...r));
Zr.randomPrivateKey;
function oa(r) {
  try {
    return Vt.fromHex(
      r,
      !0
    ), !0;
  } catch {
    return !1;
  }
}
const uh = (r, t) => Pa.sign(r, t.slice(0, 32)), fh = Pa.verify, Cn = (r) => pt.Buffer.isBuffer(r) ? r : r instanceof Uint8Array ? pt.Buffer.from(r.buffer, r.byteOffset, r.byteLength) : pt.Buffer.from(r);
class lh {
  constructor(t) {
    Object.assign(this, t);
  }
  encode() {
    return pt.Buffer.from(qa(Gn, this));
  }
  static decode(t) {
    return Ya(Gn, this, t);
  }
  static decodeUnchecked(t) {
    return Ha(Gn, this, t);
  }
}
const Gn = /* @__PURE__ */ new Map(), hh = 32, ur = 32;
function dh(r) {
  return r._bn !== void 0;
}
let aa = 1;
class st extends lh {
  constructor(t) {
    if (super({}), this._bn = void 0, dh(t))
      this._bn = t._bn;
    else {
      if (typeof t == "string") {
        const e = Be.decode(t);
        if (e.length != ur)
          throw new Error("Invalid public key input");
        this._bn = new Lo(e);
      } else
        this._bn = new Lo(t);
      if (this._bn.byteLength() > 32)
        throw new Error("Invalid public key input");
    }
  }
  static unique() {
    const t = new st(aa);
    return aa += 1, new st(t.toBuffer());
  }
  equals(t) {
    return this._bn.eq(t._bn);
  }
  toBase58() {
    return Be.encode(this.toBytes());
  }
  toJSON() {
    return this.toBase58();
  }
  toBytes() {
    return this.toBuffer();
  }
  toBuffer() {
    const t = this._bn.toArrayLike(pt.Buffer);
    if (t.length === ur)
      return t;
    const e = pt.Buffer.alloc(32);
    return t.copy(e, 32 - t.length), e;
  }
  toString() {
    return this.toBase58();
  }
  static async createWithSeed(t, e, n) {
    const s = pt.Buffer.concat([t.toBuffer(), pt.Buffer.from(e), n.toBuffer()]), i = Ms(s);
    return new st(i);
  }
  static createProgramAddressSync(t, e) {
    let n = pt.Buffer.alloc(0);
    t.forEach(function(i) {
      if (i.length > hh)
        throw new TypeError("Max seed length exceeded");
      n = pt.Buffer.concat([n, Cn(i)]);
    }), n = pt.Buffer.concat([n, e.toBuffer(), pt.Buffer.from("ProgramDerivedAddress")]);
    const s = Ms(n);
    if (oa(s))
      throw new Error("Invalid seeds, address must fall off the curve");
    return new st(s);
  }
  static async createProgramAddress(t, e) {
    return this.createProgramAddressSync(t, e);
  }
  static findProgramAddressSync(t, e) {
    let n = 255, s;
    for (; n != 0; ) {
      try {
        const i = t.concat(pt.Buffer.from([n]));
        s = this.createProgramAddressSync(i, e);
      } catch (i) {
        if (i instanceof TypeError)
          throw i;
        n--;
        continue;
      }
      return [s, n];
    }
    throw new Error("Unable to find a viable program address nonce");
  }
  static async findProgramAddress(t, e) {
    return this.findProgramAddressSync(t, e);
  }
  static isOnCurve(t) {
    const e = new st(t);
    return oa(e.toBytes());
  }
}
st.default = new st("11111111111111111111111111111111");
Gn.set(st, {
  kind: "struct",
  fields: [["_bn", "u256"]]
});
new st("BPFLoader1111111111111111111111111111111111");
const Vr = 1280 - 40 - 8, Ic = 127, Ns = 64;
class Sc extends Error {
  constructor(t) {
    super(`Signature ${t} has expired: block height exceeded.`), this.signature = void 0, this.signature = t;
  }
}
Object.defineProperty(Sc.prototype, "name", {
  value: "TransactionExpiredBlockheightExceededError"
});
class Mc extends Error {
  constructor(t, e) {
    super(`Transaction was not confirmed in ${e.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ${t} using the Solana Explorer or CLI tools.`), this.signature = void 0, this.signature = t;
  }
}
Object.defineProperty(Mc.prototype, "name", {
  value: "TransactionExpiredTimeoutError"
});
class ni {
  constructor(t, e) {
    this.staticAccountKeys = void 0, this.accountKeysFromLookups = void 0, this.staticAccountKeys = t, this.accountKeysFromLookups = e;
  }
  keySegments() {
    const t = [this.staticAccountKeys];
    return this.accountKeysFromLookups && (t.push(this.accountKeysFromLookups.writable), t.push(this.accountKeysFromLookups.readonly)), t;
  }
  get(t) {
    for (const e of this.keySegments()) {
      if (t < e.length)
        return e[t];
      t -= e.length;
    }
  }
  get length() {
    return this.keySegments().flat().length;
  }
  compileInstructions(t) {
    if (this.length > 255 + 1)
      throw new Error("Account index overflow encountered during compilation");
    const n = /* @__PURE__ */ new Map();
    this.keySegments().flat().forEach((i, c) => {
      n.set(i.toBase58(), c);
    });
    const s = (i) => {
      const c = n.get(i.toBase58());
      if (c === void 0)
        throw new Error("Encountered an unknown instruction account key during compilation");
      return c;
    };
    return t.map((i) => ({
      programIdIndex: s(i.programId),
      accountKeyIndexes: i.keys.map((c) => s(c.pubkey)),
      data: i.data
    }));
  }
}
const yt = (r = "publicKey") => jt(32, r), Wr = (r = "string") => {
  const t = nt([ut("length"), ut("lengthPadding"), jt(Cr(ut(), -8), "chars")], r), e = t.decode.bind(t), n = t.encode.bind(t), s = t;
  return s.decode = (i, c) => e(i, c).chars.toString(), s.encode = (i, c, u) => {
    const p = {
      chars: pt.Buffer.from(i, "utf8")
    };
    return n(p, c, u);
  }, s.alloc = (i) => ut().span + ut().span + pt.Buffer.from(i, "utf8").length, s;
}, ph = (r = "authorized") => nt([yt("staker"), yt("withdrawer")], r), gh = (r = "lockup") => nt([Pe("unixTimestamp"), Pe("epoch"), yt("custodian")], r), wh = (r = "voteInit") => nt([yt("nodePubkey"), yt("authorizedVoter"), yt("authorizedWithdrawer"), It("commission")], r), yh = (r = "voteAuthorizeWithSeedArgs") => nt([ut("voteAuthorizationType"), yt("currentAuthorityDerivedKeyOwnerPubkey"), Wr("currentAuthorityDerivedKeySeed"), yt("newAuthorized")], r);
function Ke(r) {
  let t = 0, e = 0;
  for (; ; ) {
    let n = r.shift();
    if (t |= (n & 127) << e * 7, e += 1, (n & 128) === 0)
      break;
  }
  return t;
}
function qe(r, t) {
  let e = t;
  for (; ; ) {
    let n = e & 127;
    if (e >>= 7, e == 0) {
      r.push(n);
      break;
    } else
      n |= 128, r.push(n);
  }
}
function we(r, t) {
  if (!r)
    throw new Error(t || "Assertion failed");
}
class mi {
  constructor(t, e) {
    this.payer = void 0, this.keyMetaMap = void 0, this.payer = t, this.keyMetaMap = e;
  }
  static compile(t, e) {
    const n = /* @__PURE__ */ new Map(), s = (c) => {
      const u = c.toBase58();
      let p = n.get(u);
      return p === void 0 && (p = {
        isSigner: !1,
        isWritable: !1,
        isInvoked: !1
      }, n.set(u, p)), p;
    }, i = s(e);
    i.isSigner = !0, i.isWritable = !0;
    for (const c of t) {
      s(c.programId).isInvoked = !0;
      for (const u of c.keys) {
        const p = s(u.pubkey);
        p.isSigner || (p.isSigner = u.isSigner), p.isWritable || (p.isWritable = u.isWritable);
      }
    }
    return new mi(e, n);
  }
  getMessageComponents() {
    const t = [...this.keyMetaMap.entries()];
    we(t.length <= 256, "Max static account keys length exceeded");
    const e = t.filter(([, p]) => p.isSigner && p.isWritable), n = t.filter(([, p]) => p.isSigner && !p.isWritable), s = t.filter(([, p]) => !p.isSigner && p.isWritable), i = t.filter(([, p]) => !p.isSigner && !p.isWritable), c = {
      numRequiredSignatures: e.length + n.length,
      numReadonlySignedAccounts: n.length,
      numReadonlyUnsignedAccounts: i.length
    };
    {
      we(e.length > 0, "Expected at least one writable signer key");
      const [p] = e[0];
      we(p === this.payer.toBase58(), "Expected first writable signer key to be the fee payer");
    }
    const u = [...e.map(([p]) => new st(p)), ...n.map(([p]) => new st(p)), ...s.map(([p]) => new st(p)), ...i.map(([p]) => new st(p))];
    return [c, u];
  }
  extractTableLookup(t) {
    const [e, n] = this.drainKeysFoundInLookupTable(t.state.addresses, (c) => !c.isSigner && !c.isInvoked && c.isWritable), [s, i] = this.drainKeysFoundInLookupTable(t.state.addresses, (c) => !c.isSigner && !c.isInvoked && !c.isWritable);
    if (!(e.length === 0 && s.length === 0))
      return [{
        accountKey: t.key,
        writableIndexes: e,
        readonlyIndexes: s
      }, {
        writable: n,
        readonly: i
      }];
  }
  drainKeysFoundInLookupTable(t, e) {
    const n = new Array(), s = new Array();
    for (const [i, c] of this.keyMetaMap.entries())
      if (e(c)) {
        const u = new st(i), p = t.findIndex((m) => m.equals(u));
        p >= 0 && (we(p < 256, "Max lookup table index exceeded"), n.push(p), s.push(u), this.keyMetaMap.delete(i));
      }
    return [n, s];
  }
}
class Sr {
  constructor(t) {
    this.header = void 0, this.accountKeys = void 0, this.recentBlockhash = void 0, this.instructions = void 0, this.indexToProgramIds = /* @__PURE__ */ new Map(), this.header = t.header, this.accountKeys = t.accountKeys.map((e) => new st(e)), this.recentBlockhash = t.recentBlockhash, this.instructions = t.instructions, this.instructions.forEach((e) => this.indexToProgramIds.set(e.programIdIndex, this.accountKeys[e.programIdIndex]));
  }
  get version() {
    return "legacy";
  }
  get staticAccountKeys() {
    return this.accountKeys;
  }
  get compiledInstructions() {
    return this.instructions.map((t) => ({
      programIdIndex: t.programIdIndex,
      accountKeyIndexes: t.accounts,
      data: Be.decode(t.data)
    }));
  }
  get addressTableLookups() {
    return [];
  }
  getAccountKeys() {
    return new ni(this.staticAccountKeys);
  }
  static compile(t) {
    const e = mi.compile(t.instructions, t.payerKey), [n, s] = e.getMessageComponents(), c = new ni(s).compileInstructions(t.instructions).map((u) => ({
      programIdIndex: u.programIdIndex,
      accounts: u.accountKeyIndexes,
      data: Be.encode(u.data)
    }));
    return new Sr({
      header: n,
      accountKeys: s,
      recentBlockhash: t.recentBlockhash,
      instructions: c
    });
  }
  isAccountSigner(t) {
    return t < this.header.numRequiredSignatures;
  }
  isAccountWritable(t) {
    const e = this.header.numRequiredSignatures;
    if (t >= this.header.numRequiredSignatures) {
      const n = t - e, i = this.accountKeys.length - e - this.header.numReadonlyUnsignedAccounts;
      return n < i;
    } else {
      const n = e - this.header.numReadonlySignedAccounts;
      return t < n;
    }
  }
  isProgramId(t) {
    return this.indexToProgramIds.has(t);
  }
  programIds() {
    return [...this.indexToProgramIds.values()];
  }
  nonProgramIds() {
    return this.accountKeys.filter((t, e) => !this.isProgramId(e));
  }
  serialize() {
    const t = this.accountKeys.length;
    let e = [];
    qe(e, t);
    const n = this.instructions.map((S) => {
      const {
        accounts: T,
        programIdIndex: I
      } = S, C = Array.from(Be.decode(S.data));
      let k = [];
      qe(k, T.length);
      let R = [];
      return qe(R, C.length), {
        programIdIndex: I,
        keyIndicesCount: pt.Buffer.from(k),
        keyIndices: T,
        dataLength: pt.Buffer.from(R),
        data: C
      };
    });
    let s = [];
    qe(s, n.length);
    let i = pt.Buffer.alloc(Vr);
    pt.Buffer.from(s).copy(i);
    let c = s.length;
    n.forEach((S) => {
      c += nt([It("programIdIndex"), jt(S.keyIndicesCount.length, "keyIndicesCount"), Le(It("keyIndex"), S.keyIndices.length, "keyIndices"), jt(S.dataLength.length, "dataLength"), Le(It("userdatum"), S.data.length, "data")]).encode(S, i, c);
    }), i = i.slice(0, c);
    const u = nt([jt(1, "numRequiredSignatures"), jt(1, "numReadonlySignedAccounts"), jt(1, "numReadonlyUnsignedAccounts"), jt(e.length, "keyCount"), Le(yt("key"), t, "keys"), yt("recentBlockhash")]), p = {
      numRequiredSignatures: pt.Buffer.from([this.header.numRequiredSignatures]),
      numReadonlySignedAccounts: pt.Buffer.from([this.header.numReadonlySignedAccounts]),
      numReadonlyUnsignedAccounts: pt.Buffer.from([this.header.numReadonlyUnsignedAccounts]),
      keyCount: pt.Buffer.from(e),
      keys: this.accountKeys.map((S) => Cn(S.toBytes())),
      recentBlockhash: Be.decode(this.recentBlockhash)
    };
    let m = pt.Buffer.alloc(2048);
    const A = u.encode(p, m);
    return i.copy(m, A), m.slice(0, A + i.length);
  }
  static from(t) {
    let e = [...t];
    const n = e.shift();
    if (n !== (n & Ic))
      throw new Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");
    const s = e.shift(), i = e.shift(), c = Ke(e);
    let u = [];
    for (let T = 0; T < c; T++) {
      const I = e.slice(0, ur);
      e = e.slice(ur), u.push(new st(pt.Buffer.from(I)));
    }
    const p = e.slice(0, ur);
    e = e.slice(ur);
    const m = Ke(e);
    let A = [];
    for (let T = 0; T < m; T++) {
      const I = e.shift(), C = Ke(e), k = e.slice(0, C);
      e = e.slice(C);
      const R = Ke(e), U = e.slice(0, R), D = Be.encode(pt.Buffer.from(U));
      e = e.slice(R), A.push({
        programIdIndex: I,
        accounts: k,
        data: D
      });
    }
    const S = {
      header: {
        numRequiredSignatures: n,
        numReadonlySignedAccounts: s,
        numReadonlyUnsignedAccounts: i
      },
      recentBlockhash: Be.encode(pt.Buffer.from(p)),
      accountKeys: u,
      instructions: A
    };
    return new Sr(S);
  }
}
class ii {
  constructor(t) {
    this.header = void 0, this.staticAccountKeys = void 0, this.recentBlockhash = void 0, this.compiledInstructions = void 0, this.addressTableLookups = void 0, this.header = t.header, this.staticAccountKeys = t.staticAccountKeys, this.recentBlockhash = t.recentBlockhash, this.compiledInstructions = t.compiledInstructions, this.addressTableLookups = t.addressTableLookups;
  }
  get version() {
    return 0;
  }
  get numAccountKeysFromLookups() {
    let t = 0;
    for (const e of this.addressTableLookups)
      t += e.readonlyIndexes.length + e.writableIndexes.length;
    return t;
  }
  getAccountKeys(t) {
    let e;
    if (t && "accountKeysFromLookups" in t && t.accountKeysFromLookups) {
      if (this.numAccountKeysFromLookups != t.accountKeysFromLookups.writable.length + t.accountKeysFromLookups.readonly.length)
        throw new Error("Failed to get account keys because of a mismatch in the number of account keys from lookups");
      e = t.accountKeysFromLookups;
    } else if (t && "addressLookupTableAccounts" in t && t.addressLookupTableAccounts)
      e = this.resolveAddressTableLookups(t.addressLookupTableAccounts);
    else if (this.addressTableLookups.length > 0)
      throw new Error("Failed to get account keys because address table lookups were not resolved");
    return new ni(this.staticAccountKeys, e);
  }
  isAccountSigner(t) {
    return t < this.header.numRequiredSignatures;
  }
  isAccountWritable(t) {
    const e = this.header.numRequiredSignatures, n = this.staticAccountKeys.length;
    if (t >= n) {
      const s = t - n, i = this.addressTableLookups.reduce((c, u) => c + u.writableIndexes.length, 0);
      return s < i;
    } else if (t >= this.header.numRequiredSignatures) {
      const s = t - e, c = n - e - this.header.numReadonlyUnsignedAccounts;
      return s < c;
    } else {
      const s = e - this.header.numReadonlySignedAccounts;
      return t < s;
    }
  }
  resolveAddressTableLookups(t) {
    const e = {
      writable: [],
      readonly: []
    };
    for (const n of this.addressTableLookups) {
      const s = t.find((i) => i.key.equals(n.accountKey));
      if (!s)
        throw new Error(`Failed to find address lookup table account for table key ${n.accountKey.toBase58()}`);
      for (const i of n.writableIndexes)
        if (i < s.state.addresses.length)
          e.writable.push(s.state.addresses[i]);
        else
          throw new Error(`Failed to find address for index ${i} in address lookup table ${n.accountKey.toBase58()}`);
      for (const i of n.readonlyIndexes)
        if (i < s.state.addresses.length)
          e.readonly.push(s.state.addresses[i]);
        else
          throw new Error(`Failed to find address for index ${i} in address lookup table ${n.accountKey.toBase58()}`);
    }
    return e;
  }
  static compile(t) {
    const e = mi.compile(t.instructions, t.payerKey), n = new Array(), s = {
      writable: new Array(),
      readonly: new Array()
    }, i = t.addressLookupTableAccounts || [];
    for (const A of i) {
      const S = e.extractTableLookup(A);
      if (S !== void 0) {
        const [T, {
          writable: I,
          readonly: C
        }] = S;
        n.push(T), s.writable.push(...I), s.readonly.push(...C);
      }
    }
    const [c, u] = e.getMessageComponents(), m = new ni(u, s).compileInstructions(t.instructions);
    return new ii({
      header: c,
      staticAccountKeys: u,
      recentBlockhash: t.recentBlockhash,
      compiledInstructions: m,
      addressTableLookups: n
    });
  }
  serialize() {
    const t = Array();
    qe(t, this.staticAccountKeys.length);
    const e = this.serializeInstructions(), n = Array();
    qe(n, this.compiledInstructions.length);
    const s = this.serializeAddressTableLookups(), i = Array();
    qe(i, this.addressTableLookups.length);
    const c = nt([It("prefix"), nt([It("numRequiredSignatures"), It("numReadonlySignedAccounts"), It("numReadonlyUnsignedAccounts")], "header"), jt(t.length, "staticAccountKeysLength"), Le(yt(), this.staticAccountKeys.length, "staticAccountKeys"), yt("recentBlockhash"), jt(n.length, "instructionsLength"), jt(e.length, "serializedInstructions"), jt(i.length, "addressTableLookupsLength"), jt(s.length, "serializedAddressTableLookups")]), u = new Uint8Array(Vr), p = 1 << 7, m = c.encode({
      prefix: p,
      header: this.header,
      staticAccountKeysLength: new Uint8Array(t),
      staticAccountKeys: this.staticAccountKeys.map((A) => A.toBytes()),
      recentBlockhash: Be.decode(this.recentBlockhash),
      instructionsLength: new Uint8Array(n),
      serializedInstructions: e,
      addressTableLookupsLength: new Uint8Array(i),
      serializedAddressTableLookups: s
    }, u);
    return u.slice(0, m);
  }
  serializeInstructions() {
    let t = 0;
    const e = new Uint8Array(Vr);
    for (const n of this.compiledInstructions) {
      const s = Array();
      qe(s, n.accountKeyIndexes.length);
      const i = Array();
      qe(i, n.data.length), t += nt([It("programIdIndex"), jt(s.length, "encodedAccountKeyIndexesLength"), Le(It(), n.accountKeyIndexes.length, "accountKeyIndexes"), jt(i.length, "encodedDataLength"), jt(n.data.length, "data")]).encode({
        programIdIndex: n.programIdIndex,
        encodedAccountKeyIndexesLength: new Uint8Array(s),
        accountKeyIndexes: n.accountKeyIndexes,
        encodedDataLength: new Uint8Array(i),
        data: n.data
      }, e, t);
    }
    return e.slice(0, t);
  }
  serializeAddressTableLookups() {
    let t = 0;
    const e = new Uint8Array(Vr);
    for (const n of this.addressTableLookups) {
      const s = Array();
      qe(s, n.writableIndexes.length);
      const i = Array();
      qe(i, n.readonlyIndexes.length), t += nt([yt("accountKey"), jt(s.length, "encodedWritableIndexesLength"), Le(It(), n.writableIndexes.length, "writableIndexes"), jt(i.length, "encodedReadonlyIndexesLength"), Le(It(), n.readonlyIndexes.length, "readonlyIndexes")]).encode({
        accountKey: n.accountKey.toBytes(),
        encodedWritableIndexesLength: new Uint8Array(s),
        writableIndexes: n.writableIndexes,
        encodedReadonlyIndexesLength: new Uint8Array(i),
        readonlyIndexes: n.readonlyIndexes
      }, e, t);
    }
    return e.slice(0, t);
  }
  static deserialize(t) {
    let e = [...t];
    const n = e.shift(), s = n & Ic;
    we(n !== s, "Expected versioned message but received legacy message");
    const i = s;
    we(i === 0, `Expected versioned message with version 0 but found version ${i}`);
    const c = {
      numRequiredSignatures: e.shift(),
      numReadonlySignedAccounts: e.shift(),
      numReadonlyUnsignedAccounts: e.shift()
    }, u = [], p = Ke(e);
    for (let C = 0; C < p; C++)
      u.push(new st(e.splice(0, ur)));
    const m = Be.encode(e.splice(0, ur)), A = Ke(e), S = [];
    for (let C = 0; C < A; C++) {
      const k = e.shift(), R = Ke(e), U = e.splice(0, R), D = Ke(e), L = new Uint8Array(e.splice(0, D));
      S.push({
        programIdIndex: k,
        accountKeyIndexes: U,
        data: L
      });
    }
    const T = Ke(e), I = [];
    for (let C = 0; C < T; C++) {
      const k = new st(e.splice(0, ur)), R = Ke(e), U = e.splice(0, R), D = Ke(e), L = e.splice(0, D);
      I.push({
        accountKey: k,
        writableIndexes: U,
        readonlyIndexes: L
      });
    }
    return new ii({
      header: c,
      staticAccountKeys: u,
      recentBlockhash: m,
      compiledInstructions: S,
      addressTableLookups: I
    });
  }
}
let Ar;
(function(r) {
  r[r.BLOCKHEIGHT_EXCEEDED = 0] = "BLOCKHEIGHT_EXCEEDED", r[r.PROCESSED = 1] = "PROCESSED", r[r.TIMED_OUT = 2] = "TIMED_OUT";
})(Ar || (Ar = {}));
const mh = pt.Buffer.alloc(Ns).fill(0);
class ca {
  constructor(t) {
    this.keys = void 0, this.programId = void 0, this.data = pt.Buffer.alloc(0), this.programId = t.programId, this.keys = t.keys, t.data && (this.data = t.data);
  }
  toJSON() {
    return {
      keys: this.keys.map(({
        pubkey: t,
        isSigner: e,
        isWritable: n
      }) => ({
        pubkey: t.toJSON(),
        isSigner: e,
        isWritable: n
      })),
      programId: this.programId.toJSON(),
      data: [...this.data]
    };
  }
}
class br {
  get signature() {
    return this.signatures.length > 0 ? this.signatures[0].signature : null;
  }
  constructor(t) {
    if (this.signatures = [], this.feePayer = void 0, this.instructions = [], this.recentBlockhash = void 0, this.lastValidBlockHeight = void 0, this.nonceInfo = void 0, this._message = void 0, this._json = void 0, !!t)
      if (t.feePayer && (this.feePayer = t.feePayer), t.signatures && (this.signatures = t.signatures), Object.prototype.hasOwnProperty.call(t, "lastValidBlockHeight")) {
        const {
          blockhash: e,
          lastValidBlockHeight: n
        } = t;
        this.recentBlockhash = e, this.lastValidBlockHeight = n;
      } else {
        const {
          recentBlockhash: e,
          nonceInfo: n
        } = t;
        n && (this.nonceInfo = n), this.recentBlockhash = e;
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
      instructions: this.instructions.map((t) => t.toJSON()),
      signers: this.signatures.map(({
        publicKey: t
      }) => t.toJSON())
    };
  }
  add(...t) {
    if (t.length === 0)
      throw new Error("No instructions");
    return t.forEach((e) => {
      "instructions" in e ? this.instructions = this.instructions.concat(e.instructions) : "data" in e && "programId" in e && "keys" in e ? this.instructions.push(e) : this.instructions.push(new ca(e));
    }), this;
  }
  compileMessage() {
    if (this._message && JSON.stringify(this.toJSON()) === JSON.stringify(this._json))
      return this._message;
    let t, e;
    if (this.nonceInfo ? (t = this.nonceInfo.nonce, this.instructions[0] != this.nonceInfo.nonceInstruction ? e = [this.nonceInfo.nonceInstruction, ...this.instructions] : e = this.instructions) : (t = this.recentBlockhash, e = this.instructions), !t)
      throw new Error("Transaction recentBlockhash required");
    e.length < 1 && console.warn("No instructions provided");
    let n;
    if (this.feePayer)
      n = this.feePayer;
    else if (this.signatures.length > 0 && this.signatures[0].publicKey)
      n = this.signatures[0].publicKey;
    else
      throw new Error("Transaction fee payer required");
    for (let k = 0; k < e.length; k++)
      if (e[k].programId === void 0)
        throw new Error(`Transaction instruction index ${k} has undefined program id`);
    const s = [], i = [];
    e.forEach((k) => {
      k.keys.forEach((U) => {
        i.push({
          ...U
        });
      });
      const R = k.programId.toString();
      s.includes(R) || s.push(R);
    }), s.forEach((k) => {
      i.push({
        pubkey: new st(k),
        isSigner: !1,
        isWritable: !1
      });
    });
    const c = [];
    i.forEach((k) => {
      const R = k.pubkey.toString(), U = c.findIndex((D) => D.pubkey.toString() === R);
      U > -1 ? (c[U].isWritable = c[U].isWritable || k.isWritable, c[U].isSigner = c[U].isSigner || k.isSigner) : c.push(k);
    }), c.sort(function(k, R) {
      return k.isSigner !== R.isSigner ? k.isSigner ? -1 : 1 : k.isWritable !== R.isWritable ? k.isWritable ? -1 : 1 : k.pubkey.toBase58().localeCompare(R.pubkey.toBase58());
    });
    const u = c.findIndex((k) => k.pubkey.equals(n));
    if (u > -1) {
      const [k] = c.splice(u, 1);
      k.isSigner = !0, k.isWritable = !0, c.unshift(k);
    } else
      c.unshift({
        pubkey: n,
        isSigner: !0,
        isWritable: !0
      });
    for (const k of this.signatures) {
      const R = c.findIndex((U) => U.pubkey.equals(k.publicKey));
      if (R > -1)
        c[R].isSigner || (c[R].isSigner = !0, console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."));
      else
        throw new Error(`unknown signer: ${k.publicKey.toString()}`);
    }
    let p = 0, m = 0, A = 0;
    const S = [], T = [];
    c.forEach(({
      pubkey: k,
      isSigner: R,
      isWritable: U
    }) => {
      R ? (S.push(k.toString()), p += 1, U || (m += 1)) : (T.push(k.toString()), U || (A += 1));
    });
    const I = S.concat(T), C = e.map((k) => {
      const {
        data: R,
        programId: U
      } = k;
      return {
        programIdIndex: I.indexOf(U.toString()),
        accounts: k.keys.map((D) => I.indexOf(D.pubkey.toString())),
        data: Be.encode(R)
      };
    });
    return C.forEach((k) => {
      we(k.programIdIndex >= 0), k.accounts.forEach((R) => we(R >= 0));
    }), new Sr({
      header: {
        numRequiredSignatures: p,
        numReadonlySignedAccounts: m,
        numReadonlyUnsignedAccounts: A
      },
      accountKeys: I,
      recentBlockhash: t,
      instructions: C
    });
  }
  _compile() {
    const t = this.compileMessage(), e = t.accountKeys.slice(0, t.header.numRequiredSignatures);
    return this.signatures.length === e.length && this.signatures.every((s, i) => e[i].equals(s.publicKey)) || (this.signatures = e.map((n) => ({
      signature: null,
      publicKey: n
    }))), t;
  }
  serializeMessage() {
    return this._compile().serialize();
  }
  async getEstimatedFee(t) {
    return (await t.getFeeForMessage(this.compileMessage())).value;
  }
  setSigners(...t) {
    if (t.length === 0)
      throw new Error("No signers");
    const e = /* @__PURE__ */ new Set();
    this.signatures = t.filter((n) => {
      const s = n.toString();
      return e.has(s) ? !1 : (e.add(s), !0);
    }).map((n) => ({
      signature: null,
      publicKey: n
    }));
  }
  sign(...t) {
    if (t.length === 0)
      throw new Error("No signers");
    const e = /* @__PURE__ */ new Set(), n = [];
    for (const i of t) {
      const c = i.publicKey.toString();
      e.has(c) || (e.add(c), n.push(i));
    }
    this.signatures = n.map((i) => ({
      signature: null,
      publicKey: i.publicKey
    }));
    const s = this._compile();
    this._partialSign(s, ...n);
  }
  partialSign(...t) {
    if (t.length === 0)
      throw new Error("No signers");
    const e = /* @__PURE__ */ new Set(), n = [];
    for (const i of t) {
      const c = i.publicKey.toString();
      e.has(c) || (e.add(c), n.push(i));
    }
    const s = this._compile();
    this._partialSign(s, ...n);
  }
  _partialSign(t, ...e) {
    const n = t.serialize();
    e.forEach((s) => {
      const i = uh(n, s.secretKey);
      this._addSignature(s.publicKey, Cn(i));
    });
  }
  addSignature(t, e) {
    this._compile(), this._addSignature(t, e);
  }
  _addSignature(t, e) {
    we(e.length === 64);
    const n = this.signatures.findIndex((s) => t.equals(s.publicKey));
    if (n < 0)
      throw new Error(`unknown signer: ${t.toString()}`);
    this.signatures[n].signature = pt.Buffer.from(e);
  }
  verifySignatures() {
    return this._verifySignatures(this.serializeMessage(), !0);
  }
  _verifySignatures(t, e) {
    for (const {
      signature: n,
      publicKey: s
    } of this.signatures)
      if (n === null) {
        if (e)
          return !1;
      } else if (!fh(n, t, s.toBuffer()))
        return !1;
    return !0;
  }
  serialize(t) {
    const {
      requireAllSignatures: e,
      verifySignatures: n
    } = Object.assign({
      requireAllSignatures: !0,
      verifySignatures: !0
    }, t), s = this.serializeMessage();
    if (n && !this._verifySignatures(s, e))
      throw new Error("Signature verification failed");
    return this._serialize(s);
  }
  _serialize(t) {
    const {
      signatures: e
    } = this, n = [];
    qe(n, e.length);
    const s = n.length + e.length * 64 + t.length, i = pt.Buffer.alloc(s);
    return we(e.length < 256), pt.Buffer.from(n).copy(i, 0), e.forEach(({
      signature: c
    }, u) => {
      c !== null && (we(c.length === 64, "signature has invalid length"), pt.Buffer.from(c).copy(i, n.length + u * 64));
    }), t.copy(i, n.length + e.length * 64), we(i.length <= Vr, `Transaction too large: ${i.length} > ${Vr}`), i;
  }
  get keys() {
    return we(this.instructions.length === 1), this.instructions[0].keys.map((t) => t.pubkey);
  }
  get programId() {
    return we(this.instructions.length === 1), this.instructions[0].programId;
  }
  get data() {
    return we(this.instructions.length === 1), this.instructions[0].data;
  }
  static from(t) {
    let e = [...t];
    const n = Ke(e);
    let s = [];
    for (let i = 0; i < n; i++) {
      const c = e.slice(0, Ns);
      e = e.slice(Ns), s.push(Be.encode(pt.Buffer.from(c)));
    }
    return br.populate(Sr.from(e), s);
  }
  static populate(t, e = []) {
    const n = new br();
    return n.recentBlockhash = t.recentBlockhash, t.header.numRequiredSignatures > 0 && (n.feePayer = t.accountKeys[0]), e.forEach((s, i) => {
      const c = {
        signature: s == Be.encode(mh) ? null : Be.decode(s),
        publicKey: t.accountKeys[i]
      };
      n.signatures.push(c);
    }), t.instructions.forEach((s) => {
      const i = s.accounts.map((c) => {
        const u = t.accountKeys[c];
        return {
          pubkey: u,
          isSigner: n.signatures.some((p) => p.publicKey.toString() === u.toString()) || t.isAccountSigner(c),
          isWritable: t.isAccountWritable(c)
        };
      });
      n.instructions.push(new ca({
        keys: i,
        programId: t.accountKeys[s.programIdIndex],
        data: Be.decode(s.data)
      }));
    }), n._message = t, n._json = n.toJSON(), n;
  }
}
new st("SysvarC1ock11111111111111111111111111111111");
new st("SysvarEpochSchedu1e111111111111111111111111");
new st("Sysvar1nstructions1111111111111111111111111");
new st("SysvarRecentB1ockHashes11111111111111111111");
new st("SysvarRent111111111111111111111111111111111");
new st("SysvarRewards111111111111111111111111111111");
new st("SysvarS1otHashes111111111111111111111111111");
new st("SysvarS1otHistory11111111111111111111111111");
new st("SysvarStakeHistory1111111111111111111111111");
function Qn(r) {
  return new Promise((t) => setTimeout(t, r));
}
const Ah = Ee("lamportsPerSignature"), _c = nt([ut("version"), ut("state"), yt("authorizedPubkey"), yt("nonce"), nt([Ah], "feeCalculator")]);
_c.span;
class po {
  constructor(t) {
    this.authorizedPubkey = void 0, this.nonce = void 0, this.feeCalculator = void 0, this.authorizedPubkey = t.authorizedPubkey, this.nonce = t.nonce, this.feeCalculator = t.feeCalculator;
  }
  static fromAccountData(t) {
    const e = _c.decode(Cn(t), 0);
    return new po({
      authorizedPubkey: new st(e.authorizedPubkey),
      nonce: new st(e.nonce).toString(),
      feeCalculator: e.feeCalculator
    });
  }
}
const bh = (r) => {
  const t = r.decode.bind(r), e = r.encode.bind(r);
  return {
    decode: t,
    encode: e
  };
}, xh = (r) => (t) => {
  const e = jt(r, t), {
    encode: n,
    decode: s
  } = bh(e), i = e;
  return i.decode = (c, u) => {
    const p = s(c, u);
    return Gf(pt.Buffer.from(p));
  }, i.encode = (c, u, p) => {
    const m = Kf(c, r);
    return n(m, u, p);
  }, i;
}, $r = xh(8);
Object.freeze({
  Create: {
    index: 0,
    layout: nt([ut("instruction"), Pe("lamports"), Pe("space"), yt("programId")])
  },
  Assign: {
    index: 1,
    layout: nt([ut("instruction"), yt("programId")])
  },
  Transfer: {
    index: 2,
    layout: nt([ut("instruction"), $r("lamports")])
  },
  CreateWithSeed: {
    index: 3,
    layout: nt([ut("instruction"), yt("base"), Wr("seed"), Pe("lamports"), Pe("space"), yt("programId")])
  },
  AdvanceNonceAccount: {
    index: 4,
    layout: nt([ut("instruction")])
  },
  WithdrawNonceAccount: {
    index: 5,
    layout: nt([ut("instruction"), Pe("lamports")])
  },
  InitializeNonceAccount: {
    index: 6,
    layout: nt([ut("instruction"), yt("authorized")])
  },
  AuthorizeNonceAccount: {
    index: 7,
    layout: nt([ut("instruction"), yt("authorized")])
  },
  Allocate: {
    index: 8,
    layout: nt([ut("instruction"), Pe("space")])
  },
  AllocateWithSeed: {
    index: 9,
    layout: nt([ut("instruction"), yt("base"), Wr("seed"), Pe("space"), yt("programId")])
  },
  AssignWithSeed: {
    index: 10,
    layout: nt([ut("instruction"), yt("base"), Wr("seed"), yt("programId")])
  },
  TransferWithSeed: {
    index: 11,
    layout: nt([ut("instruction"), $r("lamports"), Wr("seed"), yt("programId")])
  },
  UpgradeNonceAccount: {
    index: 12,
    layout: nt([ut("instruction")])
  }
});
new st("11111111111111111111111111111111");
new st("BPFLoader2111111111111111111111111111111111");
var Eh = Object.prototype.toString, vh = Object.keys || function(r) {
  var t = [];
  for (var e in r)
    t.push(e);
  return t;
};
function un(r, t) {
  var e, n, s, i, c, u, p;
  if (r === !0)
    return "true";
  if (r === !1)
    return "false";
  switch (typeof r) {
    case "object":
      if (r === null)
        return null;
      if (r.toJSON && typeof r.toJSON == "function")
        return un(r.toJSON(), t);
      if (p = Eh.call(r), p === "[object Array]") {
        for (s = "[", n = r.length - 1, e = 0; e < n; e++)
          s += un(r[e], !0) + ",";
        return n > -1 && (s += un(r[e], !0)), s + "]";
      } else if (p === "[object Object]") {
        for (i = vh(r).sort(), n = i.length, s = "", e = 0; e < n; )
          c = i[e], u = un(r[c], !1), u !== void 0 && (s && (s += ","), s += JSON.stringify(c) + ":" + u), e++;
        return "{" + s + "}";
      } else
        return JSON.stringify(r);
    case "function":
    case "undefined":
      return t ? null : void 0;
    case "string":
      return JSON.stringify(r);
    default:
      return isFinite(r) ? r : null;
  }
}
var Bh = function(r) {
  var t = un(r, !1);
  if (t !== void 0)
    return "" + t;
}, Ih = Bh;
const an = 32;
function ys(r) {
  let t = 0;
  for (; r > 1; )
    r /= 2, t++;
  return t;
}
function Sh(r) {
  return r === 0 ? 1 : (r--, r |= r >> 1, r |= r >> 2, r |= r >> 4, r |= r >> 8, r |= r >> 16, r |= r >> 32, r + 1);
}
class Mh {
  constructor(t, e, n, s, i) {
    this.slotsPerEpoch = void 0, this.leaderScheduleSlotOffset = void 0, this.warmup = void 0, this.firstNormalEpoch = void 0, this.firstNormalSlot = void 0, this.slotsPerEpoch = t, this.leaderScheduleSlotOffset = e, this.warmup = n, this.firstNormalEpoch = s, this.firstNormalSlot = i;
  }
  getEpoch(t) {
    return this.getEpochAndSlotIndex(t)[0];
  }
  getEpochAndSlotIndex(t) {
    if (t < this.firstNormalSlot) {
      const e = ys(Sh(t + an + 1)) - ys(an) - 1, n = this.getSlotsInEpoch(e), s = t - (n - an);
      return [e, s];
    } else {
      const e = t - this.firstNormalSlot, n = Math.floor(e / this.slotsPerEpoch), s = this.firstNormalEpoch + n, i = e % this.slotsPerEpoch;
      return [s, i];
    }
  }
  getFirstSlotInEpoch(t) {
    return t <= this.firstNormalEpoch ? (Math.pow(2, t) - 1) * an : (t - this.firstNormalEpoch) * this.slotsPerEpoch + this.firstNormalSlot;
  }
  getLastSlotInEpoch(t) {
    return this.getFirstSlotInEpoch(t) + this.getSlotsInEpoch(t) - 1;
  }
  getSlotsInEpoch(t) {
    return t < this.firstNormalEpoch ? Math.pow(2, t + ys(an)) : this.slotsPerEpoch;
  }
}
class ua extends Error {
  constructor(t, e) {
    super(t), this.logs = void 0, this.logs = e;
  }
}
class ot extends Error {
  constructor({
    code: t,
    message: e,
    data: n
  }, s) {
    super(s != null ? `${s}: ${e}` : e), this.code = void 0, this.data = void 0, this.code = t, this.data = n, this.name = "SolanaJSONRPCError";
  }
}
var _h = globalThis.fetch;
const kh = 160, Th = 64, Ch = kh / Th, Nh = 1e3 / Ch;
function Rh(r, t) {
  let e;
  try {
    e = r.layout.decode(t);
  } catch (n) {
    throw new Error("invalid instruction; " + n);
  }
  if (e.typeIndex !== r.index)
    throw new Error(`invalid account data; account type mismatch ${e.typeIndex} != ${r.index}`);
  return e;
}
const fa = 56;
class la {
  constructor(t) {
    this.key = void 0, this.state = void 0, this.key = t.key, this.state = t.state;
  }
  isActive() {
    const t = BigInt("0xffffffffffffffff");
    return this.state.deactivationSlot === t;
  }
  static deserialize(t) {
    const e = Rh(Lh, t), n = t.length - fa;
    we(n >= 0, "lookup table is invalid"), we(n % 32 === 0, "lookup table is invalid");
    const s = n / 32, {
      addresses: i
    } = nt([Le(yt(), s, "addresses")]).decode(t.slice(fa));
    return {
      deactivationSlot: e.deactivationSlot,
      lastExtendedSlot: e.lastExtendedSlot,
      lastExtendedSlotStartIndex: e.lastExtendedStartIndex,
      authority: e.authority.length !== 0 ? new st(e.authority[0]) : void 0,
      addresses: i.map((c) => new st(c))
    };
  }
}
const Lh = {
  index: 1,
  layout: nt([
    ut("typeIndex"),
    $r("deactivationSlot"),
    Ee("lastExtendedSlot"),
    It("lastExtendedStartIndex"),
    It(),
    Le(yt(), Cr(It(), -1), "authority")
  ])
}, Uh = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i;
function Oh(r) {
  const t = r.match(Uh);
  if (t == null)
    throw TypeError(`Failed to validate endpoint URL \`${r}\``);
  const [
    e,
    n,
    s,
    i
  ] = t, c = r.startsWith("https:") ? "wss:" : "ws:", u = s == null ? null : parseInt(s.slice(1), 10), p = u == null ? "" : `:${u + 1}`;
  return `${c}//${n}${p}${i}`;
}
var ms;
const me = Tn(io(st), Z(), (r) => new st(r)), kc = so([Z(), Yt("base64")]), go = Tn(io(pt.Buffer), kc, (r) => pt.Buffer.from(r[0], "base64")), Fh = 30 * 1e3;
function Dh(r) {
  if (/^https?:/.test(r) === !1)
    throw new TypeError("Endpoint URL must start with `http:` or `https:`.");
  return r;
}
function Zt(r) {
  let t, e;
  if (typeof r == "string")
    t = r;
  else if (r) {
    const {
      commitment: n,
      ...s
    } = r;
    t = n, e = s;
  }
  return {
    commitment: t,
    config: e
  };
}
function Tc(r) {
  return Fe([q({
    jsonrpc: Yt("2.0"),
    id: Z(),
    result: r
  }), q({
    jsonrpc: Yt("2.0"),
    id: Z(),
    error: q({
      code: kn(),
      message: Z(),
      data: gt($f())
    })
  })]);
}
const Ph = Tc(kn());
function At(r) {
  return Tn(Tc(r), Ph, (t) => "error" in t ? t : {
    ...t,
    result: J(t.result, r)
  });
}
function Ae(r) {
  return At(q({
    context: q({
      slot: G()
    }),
    value: r
  }));
}
function Ai(r) {
  return q({
    context: q({
      slot: G()
    }),
    value: r
  });
}
function As(r, t) {
  return r === 0 ? new ii({
    header: t.header,
    staticAccountKeys: t.accountKeys.map((e) => new st(e)),
    recentBlockhash: t.recentBlockhash,
    compiledInstructions: t.instructions.map((e) => ({
      programIdIndex: e.programIdIndex,
      accountKeyIndexes: e.accounts,
      data: Be.decode(e.data)
    })),
    addressTableLookups: t.addressTableLookups
  }) : new Sr(t);
}
const zh = q({
  foundation: G(),
  foundationTerm: G(),
  initial: G(),
  taper: G(),
  terminal: G()
}), Hh = At(rt(ct(q({
  epoch: G(),
  effectiveSlot: G(),
  amount: G(),
  postBalance: G()
})))), Gh = q({
  epoch: G(),
  slotIndex: G(),
  slotsInEpoch: G(),
  absoluteSlot: G(),
  blockHeight: gt(G()),
  transactionCount: gt(G())
}), Qh = q({
  slotsPerEpoch: G(),
  leaderScheduleSlotOffset: G(),
  warmup: lr(),
  firstNormalEpoch: G(),
  firstNormalSlot: G()
}), Wh = hc(Z(), rt(G())), Pr = ct(Fe([q({}), Z()])), Kh = q({
  err: Pr
}), qh = Yt("receivedSignature"), Yh = q({
  "solana-core": Z(),
  "feature-set": gt(G())
}), ha = Ae(q({
  err: ct(Fe([q({}), Z()])),
  logs: ct(rt(Z())),
  accounts: gt(ct(rt(ct(q({
    executable: lr(),
    owner: Z(),
    lamports: G(),
    data: rt(Z()),
    rentEpoch: gt(G())
  }))))),
  unitsConsumed: gt(G()),
  returnData: gt(ct(q({
    programId: Z(),
    data: so([Z(), Yt("base64")])
  })))
})), jh = Ae(q({
  byIdentity: hc(Z(), rt(G())),
  range: q({
    firstSlot: G(),
    lastSlot: G()
  })
}));
function Vh(r, t, e, n, s) {
  const i = e || _h;
  let c;
  return n && (c = async (p, m) => {
    const A = await new Promise((S, T) => {
      try {
        n(p, m, (I, C) => S([I, C]));
      } catch (I) {
        T(I);
      }
    });
    return await i(...A);
  }), new Wl(async (p, m) => {
    const S = {
      method: "POST",
      body: p,
      agent: void 0,
      headers: Object.assign({
        "Content-Type": "application/json"
      }, t || {}, W0)
    };
    try {
      let T = 5, I, C = 500;
      for (; c ? I = await c(r, S) : I = await i(r, S), !(I.status !== 429 || s === !0 || (T -= 1, T === 0)); )
        console.log(`Server responded with ${I.status} ${I.statusText}.  Retrying after ${C}ms delay...`), await Qn(C), C *= 2;
      const k = await I.text();
      I.ok ? m(null, k) : m(new Error(`${I.status} ${I.statusText}: ${k}`));
    } catch (T) {
      T instanceof Error && m(T);
    } finally {
    }
  }, {});
}
function Zh(r) {
  return (t, e) => new Promise((n, s) => {
    r.request(t, e, (i, c) => {
      if (i) {
        s(i);
        return;
      }
      n(c);
    });
  });
}
function Xh(r) {
  return (t) => new Promise((e, n) => {
    t.length === 0 && e([]);
    const s = t.map((i) => r.request(i.methodName, i.args));
    r.request(s, (i, c) => {
      if (i) {
        n(i);
        return;
      }
      e(c);
    });
  });
}
const Jh = At(zh), $h = At(Gh), t0 = At(Qh), e0 = At(Wh), r0 = At(G()), n0 = Ae(q({
  total: G(),
  circulating: G(),
  nonCirculating: G(),
  nonCirculatingAccounts: rt(me)
})), Rs = q({
  amount: Z(),
  uiAmount: ct(G()),
  decimals: G(),
  uiAmountString: gt(Z())
}), i0 = Ae(rt(q({
  address: me,
  amount: Z(),
  uiAmount: ct(G()),
  decimals: G(),
  uiAmountString: gt(Z())
}))), s0 = Ae(rt(q({
  pubkey: me,
  account: q({
    executable: lr(),
    owner: me,
    lamports: G(),
    data: go,
    rentEpoch: G()
  })
}))), Ls = q({
  program: Z(),
  parsed: kn(),
  space: G()
}), o0 = Ae(rt(q({
  pubkey: me,
  account: q({
    executable: lr(),
    owner: me,
    lamports: G(),
    data: Ls,
    rentEpoch: G()
  })
}))), a0 = Ae(rt(q({
  lamports: G(),
  address: me
}))), yn = q({
  executable: lr(),
  owner: me,
  lamports: G(),
  data: go,
  rentEpoch: G()
}), c0 = q({
  pubkey: me,
  account: yn
}), u0 = Tn(Fe([io(pt.Buffer), Ls]), Fe([kc, Ls]), (r) => Array.isArray(r) ? J(r, go) : r), Cc = q({
  executable: lr(),
  owner: me,
  lamports: G(),
  data: u0,
  rentEpoch: G()
}), f0 = q({
  pubkey: me,
  account: Cc
}), l0 = q({
  state: Fe([Yt("active"), Yt("inactive"), Yt("activating"), Yt("deactivating")]),
  active: G(),
  inactive: G()
}), h0 = At(rt(q({
  signature: Z(),
  slot: G(),
  err: Pr,
  memo: ct(Z()),
  blockTime: gt(ct(G()))
}))), d0 = At(rt(q({
  signature: Z(),
  slot: G(),
  err: Pr,
  memo: ct(Z()),
  blockTime: gt(ct(G()))
}))), p0 = q({
  subscription: G(),
  result: Ai(yn)
}), g0 = q({
  pubkey: me,
  account: yn
}), w0 = q({
  subscription: G(),
  result: Ai(g0)
}), y0 = q({
  parent: G(),
  slot: G(),
  root: G()
}), m0 = q({
  subscription: G(),
  result: y0
}), A0 = Fe([q({
  type: Fe([Yt("firstShredReceived"), Yt("completed"), Yt("optimisticConfirmation"), Yt("root")]),
  slot: G(),
  timestamp: G()
}), q({
  type: Yt("createdBank"),
  parent: G(),
  slot: G(),
  timestamp: G()
}), q({
  type: Yt("frozen"),
  slot: G(),
  timestamp: G(),
  stats: q({
    numTransactionEntries: G(),
    numSuccessfulTransactions: G(),
    numFailedTransactions: G(),
    maxTransactionsPerEntry: G()
  })
}), q({
  type: Yt("dead"),
  slot: G(),
  timestamp: G(),
  err: Z()
})]), b0 = q({
  subscription: G(),
  result: A0
}), x0 = q({
  subscription: G(),
  result: Ai(Fe([Kh, qh]))
}), E0 = q({
  subscription: G(),
  result: G()
}), v0 = q({
  pubkey: Z(),
  gossip: ct(Z()),
  tpu: ct(Z()),
  rpc: ct(Z()),
  version: ct(Z())
}), da = q({
  votePubkey: Z(),
  nodePubkey: Z(),
  activatedStake: G(),
  epochVoteAccount: lr(),
  epochCredits: rt(so([G(), G(), G()])),
  commission: G(),
  lastVote: G(),
  rootSlot: ct(G())
}), B0 = At(q({
  current: rt(da),
  delinquent: rt(da)
})), I0 = Fe([Yt("processed"), Yt("confirmed"), Yt("finalized")]), S0 = q({
  slot: G(),
  confirmations: ct(G()),
  err: Pr,
  confirmationStatus: gt(I0)
}), M0 = Ae(rt(ct(S0))), _0 = At(G()), Nc = q({
  accountKey: me,
  writableIndexes: rt(G()),
  readonlyIndexes: rt(G())
}), wo = q({
  signatures: rt(Z()),
  message: q({
    accountKeys: rt(Z()),
    header: q({
      numRequiredSignatures: G(),
      numReadonlySignedAccounts: G(),
      numReadonlyUnsignedAccounts: G()
    }),
    instructions: rt(q({
      accounts: rt(G()),
      data: Z(),
      programIdIndex: G()
    })),
    recentBlockhash: Z(),
    addressTableLookups: gt(rt(Nc))
  })
}), Rc = q({
  parsed: kn(),
  program: Z(),
  programId: me
}), Lc = q({
  accounts: rt(me),
  data: Z(),
  programId: me
}), k0 = Fe([Lc, Rc]), T0 = Fe([q({
  parsed: kn(),
  program: Z(),
  programId: Z()
}), q({
  accounts: rt(Z()),
  data: Z(),
  programId: Z()
})]), Uc = Tn(k0, T0, (r) => "accounts" in r ? J(r, Lc) : J(r, Rc)), C0 = q({
  signatures: rt(Z()),
  message: q({
    accountKeys: rt(q({
      pubkey: me,
      signer: lr(),
      writable: lr(),
      source: gt(Fe([Yt("transaction"), Yt("lookupTable")]))
    })),
    instructions: rt(Uc),
    recentBlockhash: Z(),
    addressTableLookups: gt(ct(rt(Nc)))
  })
}), si = q({
  accountIndex: G(),
  mint: Z(),
  owner: gt(Z()),
  uiTokenAmount: Rs
}), Oc = q({
  writable: rt(me),
  readonly: rt(me)
}), yo = q({
  err: Pr,
  fee: G(),
  innerInstructions: gt(ct(rt(q({
    index: G(),
    instructions: rt(q({
      accounts: rt(G()),
      data: Z(),
      programIdIndex: G()
    }))
  })))),
  preBalances: rt(G()),
  postBalances: rt(G()),
  logMessages: gt(ct(rt(Z()))),
  preTokenBalances: gt(ct(rt(si))),
  postTokenBalances: gt(ct(rt(si))),
  loadedAddresses: gt(Oc),
  computeUnitsConsumed: gt(G())
}), N0 = q({
  err: Pr,
  fee: G(),
  innerInstructions: gt(ct(rt(q({
    index: G(),
    instructions: rt(Uc)
  })))),
  preBalances: rt(G()),
  postBalances: rt(G()),
  logMessages: gt(ct(rt(Z()))),
  preTokenBalances: gt(ct(rt(si))),
  postTokenBalances: gt(ct(rt(si))),
  loadedAddresses: gt(Oc),
  computeUnitsConsumed: gt(G())
}), mo = Fe([Yt(0), Yt("legacy")]), R0 = At(ct(q({
  blockhash: Z(),
  previousBlockhash: Z(),
  parentSlot: G(),
  transactions: rt(q({
    transaction: wo,
    meta: ct(yo),
    version: gt(mo)
  })),
  rewards: gt(rt(q({
    pubkey: Z(),
    lamports: G(),
    postBalance: ct(G()),
    rewardType: ct(Z())
  }))),
  blockTime: ct(G()),
  blockHeight: ct(G())
}))), L0 = At(ct(q({
  blockhash: Z(),
  previousBlockhash: Z(),
  parentSlot: G(),
  transactions: rt(q({
    transaction: wo,
    meta: ct(yo)
  })),
  rewards: gt(rt(q({
    pubkey: Z(),
    lamports: G(),
    postBalance: ct(G()),
    rewardType: ct(Z())
  }))),
  blockTime: ct(G())
}))), pa = At(ct(q({
  blockhash: Z(),
  previousBlockhash: Z(),
  parentSlot: G(),
  signatures: rt(Z()),
  blockTime: ct(G())
}))), bs = At(ct(q({
  slot: G(),
  meta: yo,
  blockTime: gt(ct(G())),
  transaction: wo,
  version: gt(mo)
}))), Pn = At(ct(q({
  slot: G(),
  transaction: C0,
  meta: ct(N0),
  blockTime: gt(ct(G())),
  version: gt(mo)
}))), U0 = Ae(q({
  blockhash: Z(),
  feeCalculator: q({
    lamportsPerSignature: G()
  })
})), O0 = Ae(q({
  blockhash: Z(),
  lastValidBlockHeight: G()
})), F0 = q({
  slot: G(),
  numTransactions: G(),
  numSlots: G(),
  samplePeriodSecs: G()
}), D0 = At(rt(F0)), P0 = Ae(ct(q({
  feeCalculator: q({
    lamportsPerSignature: G()
  })
}))), z0 = At(Z()), H0 = At(Z()), G0 = q({
  err: Pr,
  logs: rt(Z()),
  signature: Z()
}), Q0 = q({
  result: Ai(G0),
  subscription: G()
}), W0 = {
  "solana-client": `js/${(ms = "0.0.0-development") !== null && ms !== void 0 ? ms : "UNKNOWN"}`
};
class K0 {
  constructor(t, e) {
    this._commitment = void 0, this._confirmTransactionInitialTimeout = void 0, this._rpcEndpoint = void 0, this._rpcWsEndpoint = void 0, this._rpcClient = void 0, this._rpcRequest = void 0, this._rpcBatchRequest = void 0, this._rpcWebSocket = void 0, this._rpcWebSocketConnected = !1, this._rpcWebSocketHeartbeat = null, this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketGeneration = 0, this._disableBlockhashCaching = !1, this._pollingBlockhash = !1, this._blockhashInfo = {
      latestBlockhash: null,
      lastFetch: 0,
      transactionSignatures: [],
      simulatedSignatures: []
    }, this._nextClientSubscriptionId = 0, this._subscriptionDisposeFunctionsByClientSubscriptionId = {}, this._subscriptionCallbacksByServerSubscriptionId = {}, this._subscriptionsByHash = {}, this._subscriptionsAutoDisposedByRpc = /* @__PURE__ */ new Set();
    let n, s, i, c, u;
    e && typeof e == "string" ? this._commitment = e : e && (this._commitment = e.commitment, this._confirmTransactionInitialTimeout = e.confirmTransactionInitialTimeout, n = e.wsEndpoint, s = e.httpHeaders, i = e.fetch, c = e.fetchMiddleware, u = e.disableRetryOnRateLimit), this._rpcEndpoint = Dh(t), this._rpcWsEndpoint = n || Oh(t), this._rpcClient = Vh(t, s, i, c, u), this._rpcRequest = Zh(this._rpcClient), this._rpcBatchRequest = Xh(this._rpcClient), this._rpcWebSocket = new dc(this._rpcWsEndpoint, {
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
  async getBalanceAndContext(t, e) {
    const {
      commitment: n,
      config: s
    } = Zt(e), i = this._buildArgs(
      [t.toBase58()],
      n,
      void 0,
      s
    ), c = await this._rpcRequest("getBalance", i), u = J(c, Ae(G()));
    if ("error" in u)
      throw new ot(u.error, `failed to get balance for ${t.toBase58()}`);
    return u.result;
  }
  async getBalance(t, e) {
    return await this.getBalanceAndContext(t, e).then((n) => n.value).catch((n) => {
      throw new Error("failed to get balance of account " + t.toBase58() + ": " + n);
    });
  }
  async getBlockTime(t) {
    const e = await this._rpcRequest("getBlockTime", [t]), n = J(e, At(ct(G())));
    if ("error" in n)
      throw new ot(n.error, `failed to get block time for slot ${t}`);
    return n.result;
  }
  async getMinimumLedgerSlot() {
    const t = await this._rpcRequest("minimumLedgerSlot", []), e = J(t, At(G()));
    if ("error" in e)
      throw new ot(e.error, "failed to get minimum ledger slot");
    return e.result;
  }
  async getFirstAvailableBlock() {
    const t = await this._rpcRequest("getFirstAvailableBlock", []), e = J(t, r0);
    if ("error" in e)
      throw new ot(e.error, "failed to get first available block");
    return e.result;
  }
  async getSupply(t) {
    let e = {};
    typeof t == "string" ? e = {
      commitment: t
    } : t ? e = {
      ...t,
      commitment: t && t.commitment || this.commitment
    } : e = {
      commitment: this.commitment
    };
    const n = await this._rpcRequest("getSupply", [e]), s = J(n, n0);
    if ("error" in s)
      throw new ot(s.error, "failed to get supply");
    return s.result;
  }
  async getTokenSupply(t, e) {
    const n = this._buildArgs([t.toBase58()], e), s = await this._rpcRequest("getTokenSupply", n), i = J(s, Ae(Rs));
    if ("error" in i)
      throw new ot(i.error, "failed to get token supply");
    return i.result;
  }
  async getTokenAccountBalance(t, e) {
    const n = this._buildArgs([t.toBase58()], e), s = await this._rpcRequest("getTokenAccountBalance", n), i = J(s, Ae(Rs));
    if ("error" in i)
      throw new ot(i.error, "failed to get token account balance");
    return i.result;
  }
  async getTokenAccountsByOwner(t, e, n) {
    const {
      commitment: s,
      config: i
    } = Zt(n);
    let c = [t.toBase58()];
    "mint" in e ? c.push({
      mint: e.mint.toBase58()
    }) : c.push({
      programId: e.programId.toBase58()
    });
    const u = this._buildArgs(c, s, "base64", i), p = await this._rpcRequest("getTokenAccountsByOwner", u), m = J(p, s0);
    if ("error" in m)
      throw new ot(m.error, `failed to get token accounts owned by account ${t.toBase58()}`);
    return m.result;
  }
  async getParsedTokenAccountsByOwner(t, e, n) {
    let s = [t.toBase58()];
    "mint" in e ? s.push({
      mint: e.mint.toBase58()
    }) : s.push({
      programId: e.programId.toBase58()
    });
    const i = this._buildArgs(s, n, "jsonParsed"), c = await this._rpcRequest("getTokenAccountsByOwner", i), u = J(c, o0);
    if ("error" in u)
      throw new ot(u.error, `failed to get token accounts owned by account ${t.toBase58()}`);
    return u.result;
  }
  async getLargestAccounts(t) {
    const e = {
      ...t,
      commitment: t && t.commitment || this.commitment
    }, n = e.filter || e.commitment ? [e] : [], s = await this._rpcRequest("getLargestAccounts", n), i = J(s, a0);
    if ("error" in i)
      throw new ot(i.error, "failed to get largest accounts");
    return i.result;
  }
  async getTokenLargestAccounts(t, e) {
    const n = this._buildArgs([t.toBase58()], e), s = await this._rpcRequest("getTokenLargestAccounts", n), i = J(s, i0);
    if ("error" in i)
      throw new ot(i.error, "failed to get token largest accounts");
    return i.result;
  }
  async getAccountInfoAndContext(t, e) {
    const {
      commitment: n,
      config: s
    } = Zt(e), i = this._buildArgs([t.toBase58()], n, "base64", s), c = await this._rpcRequest("getAccountInfo", i), u = J(c, Ae(ct(yn)));
    if ("error" in u)
      throw new ot(u.error, `failed to get info about account ${t.toBase58()}`);
    return u.result;
  }
  async getParsedAccountInfo(t, e) {
    const {
      commitment: n,
      config: s
    } = Zt(e), i = this._buildArgs([t.toBase58()], n, "jsonParsed", s), c = await this._rpcRequest("getAccountInfo", i), u = J(c, Ae(ct(Cc)));
    if ("error" in u)
      throw new ot(u.error, `failed to get info about account ${t.toBase58()}`);
    return u.result;
  }
  async getAccountInfo(t, e) {
    try {
      return (await this.getAccountInfoAndContext(t, e)).value;
    } catch (n) {
      throw new Error("failed to get info about account " + t.toBase58() + ": " + n);
    }
  }
  async getMultipleAccountsInfoAndContext(t, e) {
    const {
      commitment: n,
      config: s
    } = Zt(e), i = t.map((m) => m.toBase58()), c = this._buildArgs([i], n, "base64", s), u = await this._rpcRequest("getMultipleAccounts", c), p = J(u, Ae(rt(ct(yn))));
    if ("error" in p)
      throw new ot(p.error, `failed to get info for accounts ${i}`);
    return p.result;
  }
  async getMultipleAccountsInfo(t, e) {
    return (await this.getMultipleAccountsInfoAndContext(t, e)).value;
  }
  async getStakeActivation(t, e, n) {
    const {
      commitment: s,
      config: i
    } = Zt(e), c = this._buildArgs(
      [t.toBase58()],
      s,
      void 0,
      {
        ...i,
        epoch: n != null ? n : i == null ? void 0 : i.epoch
      }
    ), u = await this._rpcRequest("getStakeActivation", c), p = J(u, At(l0));
    if ("error" in p)
      throw new ot(p.error, `failed to get Stake Activation ${t.toBase58()}`);
    return p.result;
  }
  async getProgramAccounts(t, e) {
    const {
      commitment: n,
      config: s
    } = Zt(e), {
      encoding: i,
      ...c
    } = s || {}, u = this._buildArgs([t.toBase58()], n, i || "base64", c), p = await this._rpcRequest("getProgramAccounts", u), m = J(p, At(rt(c0)));
    if ("error" in m)
      throw new ot(m.error, `failed to get accounts owned by program ${t.toBase58()}`);
    return m.result;
  }
  async getParsedProgramAccounts(t, e) {
    const {
      commitment: n,
      config: s
    } = Zt(e), i = this._buildArgs([t.toBase58()], n, "jsonParsed", s), c = await this._rpcRequest("getProgramAccounts", i), u = J(c, At(rt(f0)));
    if ("error" in u)
      throw new ot(u.error, `failed to get accounts owned by program ${t.toBase58()}`);
    return u.result;
  }
  async confirmTransaction(t, e) {
    let n;
    typeof t == "string" ? n = t : n = t.signature;
    let s;
    try {
      s = Be.decode(n);
    } catch {
      throw new Error("signature must be base58 encoded: " + n);
    }
    we(s.length === 64, "signature has invalid length");
    const i = e || this.commitment;
    let c, u, p = !1;
    const m = new Promise((T, I) => {
      try {
        u = this.onSignature(n, (C, k) => {
          u = void 0;
          const R = {
            context: k,
            value: C
          };
          p = !0, T({
            __type: Ar.PROCESSED,
            response: R
          });
        }, i);
      } catch (C) {
        I(C);
      }
    }), A = new Promise((T) => {
      if (typeof t == "string") {
        let I = this._confirmTransactionInitialTimeout || 6e4;
        switch (i) {
          case "processed":
          case "recent":
          case "single":
          case "confirmed":
          case "singleGossip": {
            I = this._confirmTransactionInitialTimeout || 30 * 1e3;
            break;
          }
        }
        c = setTimeout(() => T({
          __type: Ar.TIMED_OUT,
          timeoutMs: I
        }), I);
      } else {
        let I = t;
        const C = async () => {
          try {
            return await this.getBlockHeight(e);
          } catch {
            return -1;
          }
        };
        (async () => {
          let k = await C();
          if (!p) {
            for (; k <= I.lastValidBlockHeight; )
              if (await Qn(1e3), p || (k = await C(), p))
                return;
            T({
              __type: Ar.BLOCKHEIGHT_EXCEEDED
            });
          }
        })();
      }
    });
    let S;
    try {
      const T = await Promise.race([m, A]);
      switch (T.__type) {
        case Ar.BLOCKHEIGHT_EXCEEDED:
          throw new Sc(n);
        case Ar.PROCESSED:
          S = T.response;
          break;
        case Ar.TIMED_OUT:
          throw new Mc(n, T.timeoutMs / 1e3);
      }
    } finally {
      clearTimeout(c), u && this.removeSignatureListener(u);
    }
    return S;
  }
  async getClusterNodes() {
    const t = await this._rpcRequest("getClusterNodes", []), e = J(t, At(rt(v0)));
    if ("error" in e)
      throw new ot(e.error, "failed to get cluster nodes");
    return e.result;
  }
  async getVoteAccounts(t) {
    const e = this._buildArgs([], t), n = await this._rpcRequest("getVoteAccounts", e), s = J(n, B0);
    if ("error" in s)
      throw new ot(s.error, "failed to get vote accounts");
    return s.result;
  }
  async getSlot(t) {
    const {
      commitment: e,
      config: n
    } = Zt(t), s = this._buildArgs(
      [],
      e,
      void 0,
      n
    ), i = await this._rpcRequest("getSlot", s), c = J(i, At(G()));
    if ("error" in c)
      throw new ot(c.error, "failed to get slot");
    return c.result;
  }
  async getSlotLeader(t) {
    const {
      commitment: e,
      config: n
    } = Zt(t), s = this._buildArgs(
      [],
      e,
      void 0,
      n
    ), i = await this._rpcRequest("getSlotLeader", s), c = J(i, At(Z()));
    if ("error" in c)
      throw new ot(c.error, "failed to get slot leader");
    return c.result;
  }
  async getSlotLeaders(t, e) {
    const n = [t, e], s = await this._rpcRequest("getSlotLeaders", n), i = J(s, At(rt(me)));
    if ("error" in i)
      throw new ot(i.error, "failed to get slot leaders");
    return i.result;
  }
  async getSignatureStatus(t, e) {
    const {
      context: n,
      value: s
    } = await this.getSignatureStatuses([t], e);
    we(s.length === 1);
    const i = s[0];
    return {
      context: n,
      value: i
    };
  }
  async getSignatureStatuses(t, e) {
    const n = [t];
    e && n.push(e);
    const s = await this._rpcRequest("getSignatureStatuses", n), i = J(s, M0);
    if ("error" in i)
      throw new ot(i.error, "failed to get signature status");
    return i.result;
  }
  async getTransactionCount(t) {
    const {
      commitment: e,
      config: n
    } = Zt(t), s = this._buildArgs(
      [],
      e,
      void 0,
      n
    ), i = await this._rpcRequest("getTransactionCount", s), c = J(i, At(G()));
    if ("error" in c)
      throw new ot(c.error, "failed to get transaction count");
    return c.result;
  }
  async getTotalSupply(t) {
    return (await this.getSupply({
      commitment: t,
      excludeNonCirculatingAccountsList: !0
    })).value.total;
  }
  async getInflationGovernor(t) {
    const e = this._buildArgs([], t), n = await this._rpcRequest("getInflationGovernor", e), s = J(n, Jh);
    if ("error" in s)
      throw new ot(s.error, "failed to get inflation");
    return s.result;
  }
  async getInflationReward(t, e, n) {
    const {
      commitment: s,
      config: i
    } = Zt(n), c = this._buildArgs(
      [t.map((m) => m.toBase58())],
      s,
      void 0,
      {
        ...i,
        epoch: e != null ? e : i == null ? void 0 : i.epoch
      }
    ), u = await this._rpcRequest("getInflationReward", c), p = J(u, Hh);
    if ("error" in p)
      throw new ot(p.error, "failed to get inflation reward");
    return p.result;
  }
  async getEpochInfo(t) {
    const {
      commitment: e,
      config: n
    } = Zt(t), s = this._buildArgs(
      [],
      e,
      void 0,
      n
    ), i = await this._rpcRequest("getEpochInfo", s), c = J(i, $h);
    if ("error" in c)
      throw new ot(c.error, "failed to get epoch info");
    return c.result;
  }
  async getEpochSchedule() {
    const t = await this._rpcRequest("getEpochSchedule", []), e = J(t, t0);
    if ("error" in e)
      throw new ot(e.error, "failed to get epoch schedule");
    const n = e.result;
    return new Mh(n.slotsPerEpoch, n.leaderScheduleSlotOffset, n.warmup, n.firstNormalEpoch, n.firstNormalSlot);
  }
  async getLeaderSchedule() {
    const t = await this._rpcRequest("getLeaderSchedule", []), e = J(t, e0);
    if ("error" in e)
      throw new ot(e.error, "failed to get leader schedule");
    return e.result;
  }
  async getMinimumBalanceForRentExemption(t, e) {
    const n = this._buildArgs([t], e), s = await this._rpcRequest("getMinimumBalanceForRentExemption", n), i = J(s, _0);
    return "error" in i ? (console.warn("Unable to fetch minimum balance for rent exemption"), 0) : i.result;
  }
  async getRecentBlockhashAndContext(t) {
    const e = this._buildArgs([], t), n = await this._rpcRequest("getRecentBlockhash", e), s = J(n, U0);
    if ("error" in s)
      throw new ot(s.error, "failed to get recent blockhash");
    return s.result;
  }
  async getRecentPerformanceSamples(t) {
    const e = await this._rpcRequest("getRecentPerformanceSamples", t ? [t] : []), n = J(e, D0);
    if ("error" in n)
      throw new ot(n.error, "failed to get recent performance samples");
    return n.result;
  }
  async getFeeCalculatorForBlockhash(t, e) {
    const n = this._buildArgs([t], e), s = await this._rpcRequest("getFeeCalculatorForBlockhash", n), i = J(s, P0);
    if ("error" in i)
      throw new ot(i.error, "failed to get fee calculator");
    const {
      context: c,
      value: u
    } = i.result;
    return {
      context: c,
      value: u !== null ? u.feeCalculator : null
    };
  }
  async getFeeForMessage(t, e) {
    const n = t.serialize().toString("base64"), s = this._buildArgs([n], e), i = await this._rpcRequest("getFeeForMessage", s), c = J(i, Ae(ct(G())));
    if ("error" in c)
      throw new ot(c.error, "failed to get slot");
    if (c.result === null)
      throw new Error("invalid blockhash");
    return c.result;
  }
  async getRecentBlockhash(t) {
    try {
      return (await this.getRecentBlockhashAndContext(t)).value;
    } catch (e) {
      throw new Error("failed to get recent blockhash: " + e);
    }
  }
  async getLatestBlockhash(t) {
    try {
      return (await this.getLatestBlockhashAndContext(t)).value;
    } catch (e) {
      throw new Error("failed to get recent blockhash: " + e);
    }
  }
  async getLatestBlockhashAndContext(t) {
    const {
      commitment: e,
      config: n
    } = Zt(t), s = this._buildArgs(
      [],
      e,
      void 0,
      n
    ), i = await this._rpcRequest("getLatestBlockhash", s), c = J(i, O0);
    if ("error" in c)
      throw new ot(c.error, "failed to get latest blockhash");
    return c.result;
  }
  async getVersion() {
    const t = await this._rpcRequest("getVersion", []), e = J(t, At(Yh));
    if ("error" in e)
      throw new ot(e.error, "failed to get version");
    return e.result;
  }
  async getGenesisHash() {
    const t = await this._rpcRequest("getGenesisHash", []), e = J(t, At(Z()));
    if ("error" in e)
      throw new ot(e.error, "failed to get genesis hash");
    return e.result;
  }
  async getBlock(t, e) {
    const {
      commitment: n,
      config: s
    } = Zt(e), i = this._buildArgsAtLeastConfirmed(
      [t],
      n,
      void 0,
      s
    ), c = await this._rpcRequest("getBlock", i), u = J(c, R0);
    if ("error" in u)
      throw new ot(u.error, "failed to get confirmed block");
    const p = u.result;
    return p && {
      ...p,
      transactions: p.transactions.map(({
        transaction: m,
        meta: A,
        version: S
      }) => ({
        meta: A,
        transaction: {
          ...m,
          message: As(S, m.message)
        },
        version: S
      }))
    };
  }
  async getBlockHeight(t) {
    const {
      commitment: e,
      config: n
    } = Zt(t), s = this._buildArgs(
      [],
      e,
      void 0,
      n
    ), i = await this._rpcRequest("getBlockHeight", s), c = J(i, At(G()));
    if ("error" in c)
      throw new ot(c.error, "failed to get block height information");
    return c.result;
  }
  async getBlockProduction(t) {
    let e, n;
    if (typeof t == "string")
      n = t;
    else if (t) {
      const {
        commitment: u,
        ...p
      } = t;
      n = u, e = p;
    }
    const s = this._buildArgs([], n, "base64", e), i = await this._rpcRequest("getBlockProduction", s), c = J(i, jh);
    if ("error" in c)
      throw new ot(c.error, "failed to get block production information");
    return c.result;
  }
  async getTransaction(t, e) {
    const {
      commitment: n,
      config: s
    } = Zt(e), i = this._buildArgsAtLeastConfirmed(
      [t],
      n,
      void 0,
      s
    ), c = await this._rpcRequest("getTransaction", i), u = J(c, bs);
    if ("error" in u)
      throw new ot(u.error, "failed to get transaction");
    const p = u.result;
    return p && {
      ...p,
      transaction: {
        ...p.transaction,
        message: As(p.version, p.transaction.message)
      }
    };
  }
  async getParsedTransaction(t, e) {
    const {
      commitment: n,
      config: s
    } = Zt(e), i = this._buildArgsAtLeastConfirmed([t], n, "jsonParsed", s), c = await this._rpcRequest("getTransaction", i), u = J(c, Pn);
    if ("error" in u)
      throw new ot(u.error, "failed to get transaction");
    return u.result;
  }
  async getParsedTransactions(t, e) {
    const {
      commitment: n,
      config: s
    } = Zt(e), i = t.map((p) => {
      const m = this._buildArgsAtLeastConfirmed([p], n, "jsonParsed", s);
      return {
        methodName: "getTransaction",
        args: m
      };
    });
    return (await this._rpcBatchRequest(i)).map((p) => {
      const m = J(p, Pn);
      if ("error" in m)
        throw new ot(m.error, "failed to get transactions");
      return m.result;
    });
  }
  async getTransactions(t, e) {
    const {
      commitment: n,
      config: s
    } = Zt(e), i = t.map((p) => {
      const m = this._buildArgsAtLeastConfirmed(
        [p],
        n,
        void 0,
        s
      );
      return {
        methodName: "getTransaction",
        args: m
      };
    });
    return (await this._rpcBatchRequest(i)).map((p) => {
      const m = J(p, bs);
      if ("error" in m)
        throw new ot(m.error, "failed to get transactions");
      const A = m.result;
      return A && {
        ...A,
        transaction: {
          ...A.transaction,
          message: As(A.version, A.transaction.message)
        }
      };
    });
  }
  async getConfirmedBlock(t, e) {
    const n = this._buildArgsAtLeastConfirmed([t], e), s = await this._rpcRequest("getConfirmedBlock", n), i = J(s, L0);
    if ("error" in i)
      throw new ot(i.error, "failed to get confirmed block");
    const c = i.result;
    if (!c)
      throw new Error("Confirmed block " + t + " not found");
    const u = {
      ...c,
      transactions: c.transactions.map(({
        transaction: p,
        meta: m
      }) => {
        const A = new Sr(p.message);
        return {
          meta: m,
          transaction: {
            ...p,
            message: A
          }
        };
      })
    };
    return {
      ...u,
      transactions: u.transactions.map(({
        transaction: p,
        meta: m
      }) => ({
        meta: m,
        transaction: br.populate(p.message, p.signatures)
      }))
    };
  }
  async getBlocks(t, e, n) {
    const s = this._buildArgsAtLeastConfirmed(e !== void 0 ? [t, e] : [t], n), i = await this._rpcRequest("getBlocks", s), c = J(i, At(rt(G())));
    if ("error" in c)
      throw new ot(c.error, "failed to get blocks");
    return c.result;
  }
  async getBlockSignatures(t, e) {
    const n = this._buildArgsAtLeastConfirmed([t], e, void 0, {
      transactionDetails: "signatures",
      rewards: !1
    }), s = await this._rpcRequest("getBlock", n), i = J(s, pa);
    if ("error" in i)
      throw new ot(i.error, "failed to get block");
    const c = i.result;
    if (!c)
      throw new Error("Block " + t + " not found");
    return c;
  }
  async getConfirmedBlockSignatures(t, e) {
    const n = this._buildArgsAtLeastConfirmed([t], e, void 0, {
      transactionDetails: "signatures",
      rewards: !1
    }), s = await this._rpcRequest("getConfirmedBlock", n), i = J(s, pa);
    if ("error" in i)
      throw new ot(i.error, "failed to get confirmed block");
    const c = i.result;
    if (!c)
      throw new Error("Confirmed block " + t + " not found");
    return c;
  }
  async getConfirmedTransaction(t, e) {
    const n = this._buildArgsAtLeastConfirmed([t], e), s = await this._rpcRequest("getConfirmedTransaction", n), i = J(s, bs);
    if ("error" in i)
      throw new ot(i.error, "failed to get transaction");
    const c = i.result;
    if (!c)
      return c;
    const u = new Sr(c.transaction.message), p = c.transaction.signatures;
    return {
      ...c,
      transaction: br.populate(u, p)
    };
  }
  async getParsedConfirmedTransaction(t, e) {
    const n = this._buildArgsAtLeastConfirmed([t], e, "jsonParsed"), s = await this._rpcRequest("getConfirmedTransaction", n), i = J(s, Pn);
    if ("error" in i)
      throw new ot(i.error, "failed to get confirmed transaction");
    return i.result;
  }
  async getParsedConfirmedTransactions(t, e) {
    const n = t.map((c) => {
      const u = this._buildArgsAtLeastConfirmed([c], e, "jsonParsed");
      return {
        methodName: "getConfirmedTransaction",
        args: u
      };
    });
    return (await this._rpcBatchRequest(n)).map((c) => {
      const u = J(c, Pn);
      if ("error" in u)
        throw new ot(u.error, "failed to get confirmed transactions");
      return u.result;
    });
  }
  async getConfirmedSignaturesForAddress(t, e, n) {
    let s = {}, i = await this.getFirstAvailableBlock();
    for (; !("until" in s) && (e--, !(e <= 0 || e < i)); )
      try {
        const p = await this.getConfirmedBlockSignatures(e, "finalized");
        p.signatures.length > 0 && (s.until = p.signatures[p.signatures.length - 1].toString());
      } catch (p) {
        if (p instanceof Error && p.message.includes("skipped"))
          continue;
        throw p;
      }
    let c = await this.getSlot("finalized");
    for (; !("before" in s) && (n++, !(n > c)); )
      try {
        const p = await this.getConfirmedBlockSignatures(n);
        p.signatures.length > 0 && (s.before = p.signatures[p.signatures.length - 1].toString());
      } catch (p) {
        if (p instanceof Error && p.message.includes("skipped"))
          continue;
        throw p;
      }
    return (await this.getConfirmedSignaturesForAddress2(t, s)).map((p) => p.signature);
  }
  async getConfirmedSignaturesForAddress2(t, e, n) {
    const s = this._buildArgsAtLeastConfirmed([t.toBase58()], n, void 0, e), i = await this._rpcRequest("getConfirmedSignaturesForAddress2", s), c = J(i, h0);
    if ("error" in c)
      throw new ot(c.error, "failed to get confirmed signatures for address");
    return c.result;
  }
  async getSignaturesForAddress(t, e, n) {
    const s = this._buildArgsAtLeastConfirmed([t.toBase58()], n, void 0, e), i = await this._rpcRequest("getSignaturesForAddress", s), c = J(i, d0);
    if ("error" in c)
      throw new ot(c.error, "failed to get signatures for address");
    return c.result;
  }
  async getAddressLookupTable(t, e) {
    const {
      context: n,
      value: s
    } = await this.getAccountInfoAndContext(t, e);
    let i = null;
    return s !== null && (i = new la({
      key: t,
      state: la.deserialize(s.data)
    })), {
      context: n,
      value: i
    };
  }
  async getNonceAndContext(t, e) {
    const {
      context: n,
      value: s
    } = await this.getAccountInfoAndContext(t, e);
    let i = null;
    return s !== null && (i = po.fromAccountData(s.data)), {
      context: n,
      value: i
    };
  }
  async getNonce(t, e) {
    return await this.getNonceAndContext(t, e).then((n) => n.value).catch((n) => {
      throw new Error("failed to get nonce for account " + t.toBase58() + ": " + n);
    });
  }
  async requestAirdrop(t, e) {
    const n = await this._rpcRequest("requestAirdrop", [t.toBase58(), e]), s = J(n, z0);
    if ("error" in s)
      throw new ot(s.error, `airdrop to ${t.toBase58()} failed`);
    return s.result;
  }
  async _blockhashWithExpiryBlockHeight(t) {
    if (!t) {
      for (; this._pollingBlockhash; )
        await Qn(100);
      const n = Date.now() - this._blockhashInfo.lastFetch >= Fh;
      if (this._blockhashInfo.latestBlockhash !== null && !n)
        return this._blockhashInfo.latestBlockhash;
    }
    return await this._pollNewBlockhash();
  }
  async _pollNewBlockhash() {
    this._pollingBlockhash = !0;
    try {
      const t = Date.now(), e = this._blockhashInfo.latestBlockhash, n = e ? e.blockhash : null;
      for (let s = 0; s < 50; s++) {
        const i = await this.getLatestBlockhash("finalized");
        if (n !== i.blockhash)
          return this._blockhashInfo = {
            latestBlockhash: i,
            lastFetch: Date.now(),
            transactionSignatures: [],
            simulatedSignatures: []
          }, i;
        await Qn(Nh / 2);
      }
      throw new Error(`Unable to obtain a new blockhash after ${Date.now() - t}ms`);
    } finally {
      this._pollingBlockhash = !1;
    }
  }
  async getStakeMinimumDelegation(t) {
    const {
      commitment: e,
      config: n
    } = Zt(t), s = this._buildArgs([], e, "base64", n), i = await this._rpcRequest("getStakeMinimumDelegation", s), c = J(i, Ae(G()));
    if ("error" in c)
      throw new ot(c.error, "failed to get stake minimum delegation");
    return c.result;
  }
  async simulateTransaction(t, e, n) {
    if ("message" in t) {
      const k = t.serialize(), R = pt.Buffer.from(k).toString("base64");
      if (Array.isArray(e) || n !== void 0)
        throw new Error("Invalid arguments");
      const U = e || {};
      U.encoding = "base64", "commitment" in U || (U.commitment = this.commitment);
      const D = [R, U], L = await this._rpcRequest("simulateTransaction", D), H = J(L, ha);
      if ("error" in H)
        throw new Error("failed to simulate transaction: " + H.error.message);
      return H.result;
    }
    let s;
    if (t instanceof br) {
      let C = t;
      s = new br(), s.feePayer = C.feePayer, s.instructions = t.instructions, s.nonceInfo = C.nonceInfo, s.signatures = C.signatures;
    } else
      s = br.populate(t), s._message = s._json = void 0;
    if (e !== void 0 && !Array.isArray(e))
      throw new Error("Invalid arguments");
    const i = e;
    if (s.nonceInfo && i)
      s.sign(...i);
    else {
      let C = this._disableBlockhashCaching;
      for (; ; ) {
        const k = await this._blockhashWithExpiryBlockHeight(C);
        if (s.lastValidBlockHeight = k.lastValidBlockHeight, s.recentBlockhash = k.blockhash, !i)
          break;
        if (s.sign(...i), !s.signature)
          throw new Error("!signature");
        const R = s.signature.toString("base64");
        if (!this._blockhashInfo.simulatedSignatures.includes(R) && !this._blockhashInfo.transactionSignatures.includes(R)) {
          this._blockhashInfo.simulatedSignatures.push(R);
          break;
        } else
          C = !0;
      }
    }
    const c = s._compile(), u = c.serialize(), m = s._serialize(u).toString("base64"), A = {
      encoding: "base64",
      commitment: this.commitment
    };
    if (n) {
      const C = (Array.isArray(n) ? n : c.nonProgramIds()).map((k) => k.toBase58());
      A.accounts = {
        encoding: "base64",
        addresses: C
      };
    }
    i && (A.sigVerify = !0);
    const S = [m, A], T = await this._rpcRequest("simulateTransaction", S), I = J(T, ha);
    if ("error" in I) {
      let C;
      if ("data" in I.error && (C = I.error.data.logs, C && Array.isArray(C))) {
        const k = `
    `, R = k + C.join(k);
        console.error(I.error.message, R);
      }
      throw new ua("failed to simulate transaction: " + I.error.message, C);
    }
    return I.result;
  }
  async sendTransaction(t, e, n) {
    if ("version" in t) {
      if (e && Array.isArray(e))
        throw new Error("Invalid arguments");
      const c = t.serialize();
      return await this.sendRawTransaction(c, n);
    }
    if (e === void 0 || !Array.isArray(e))
      throw new Error("Invalid arguments");
    const s = e;
    if (t.nonceInfo)
      t.sign(...s);
    else {
      let c = this._disableBlockhashCaching;
      for (; ; ) {
        const u = await this._blockhashWithExpiryBlockHeight(c);
        if (t.lastValidBlockHeight = u.lastValidBlockHeight, t.recentBlockhash = u.blockhash, t.sign(...s), !t.signature)
          throw new Error("!signature");
        const p = t.signature.toString("base64");
        if (this._blockhashInfo.transactionSignatures.includes(p))
          c = !0;
        else {
          this._blockhashInfo.transactionSignatures.push(p);
          break;
        }
      }
    }
    const i = t.serialize();
    return await this.sendRawTransaction(i, n);
  }
  async sendRawTransaction(t, e) {
    const n = Cn(t).toString("base64");
    return await this.sendEncodedTransaction(n, e);
  }
  async sendEncodedTransaction(t, e) {
    const n = {
      encoding: "base64"
    }, s = e && e.skipPreflight, i = e && e.preflightCommitment || this.commitment;
    e && e.maxRetries != null && (n.maxRetries = e.maxRetries), e && e.minContextSlot != null && (n.minContextSlot = e.minContextSlot), s && (n.skipPreflight = s), i && (n.preflightCommitment = i);
    const c = [t, n], u = await this._rpcRequest("sendTransaction", c), p = J(u, H0);
    if ("error" in p) {
      let m;
      throw "data" in p.error && (m = p.error.data.logs), new ua("failed to send transaction: " + p.error.message, m);
    }
    return p.result;
  }
  _wsOnOpen() {
    this._rpcWebSocketConnected = !0, this._rpcWebSocketHeartbeat = setInterval(() => {
      this._rpcWebSocket.notify("ping").catch(() => {
      });
    }, 5e3), this._updateSubscriptions();
  }
  _wsOnError(t) {
    this._rpcWebSocketConnected = !1, console.error("ws error:", t.message);
  }
  _wsOnClose(t) {
    if (this._rpcWebSocketConnected = !1, this._rpcWebSocketGeneration++, this._rpcWebSocketIdleTimeout && (clearTimeout(this._rpcWebSocketIdleTimeout), this._rpcWebSocketIdleTimeout = null), this._rpcWebSocketHeartbeat && (clearInterval(this._rpcWebSocketHeartbeat), this._rpcWebSocketHeartbeat = null), t === 1e3) {
      this._updateSubscriptions();
      return;
    }
    this._subscriptionCallbacksByServerSubscriptionId = {}, Object.entries(this._subscriptionsByHash).forEach(([e, n]) => {
      this._subscriptionsByHash[e] = {
        ...n,
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
        } catch (n) {
          n instanceof Error && console.log(`Error when closing socket connection: ${n.message}`);
        }
      }, 500));
      return;
    }
    if (this._rpcWebSocketIdleTimeout !== null && (clearTimeout(this._rpcWebSocketIdleTimeout), this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketConnected = !0), !this._rpcWebSocketConnected) {
      this._rpcWebSocket.connect();
      return;
    }
    const t = this._rpcWebSocketGeneration, e = () => t === this._rpcWebSocketGeneration;
    await Promise.all(
      Object.keys(this._subscriptionsByHash).map(async (n) => {
        const s = this._subscriptionsByHash[n];
        if (s !== void 0)
          switch (s.state) {
            case "pending":
            case "unsubscribed":
              if (s.callbacks.size === 0) {
                delete this._subscriptionsByHash[n], s.state === "unsubscribed" && delete this._subscriptionCallbacksByServerSubscriptionId[s.serverSubscriptionId], await this._updateSubscriptions();
                return;
              }
              await (async () => {
                const {
                  args: i,
                  method: c
                } = s;
                try {
                  this._subscriptionsByHash[n] = {
                    ...s,
                    state: "subscribing"
                  };
                  const u = await this._rpcWebSocket.call(c, i);
                  this._subscriptionsByHash[n] = {
                    ...s,
                    serverSubscriptionId: u,
                    state: "subscribed"
                  }, this._subscriptionCallbacksByServerSubscriptionId[u] = s.callbacks, await this._updateSubscriptions();
                } catch (u) {
                  if (u instanceof Error && console.error(`${c} error for argument`, i, u.message), !e())
                    return;
                  this._subscriptionsByHash[n] = {
                    ...s,
                    state: "pending"
                  }, await this._updateSubscriptions();
                }
              })();
              break;
            case "subscribed":
              s.callbacks.size === 0 && await (async () => {
                const {
                  serverSubscriptionId: i,
                  unsubscribeMethod: c
                } = s;
                if (this._subscriptionsAutoDisposedByRpc.has(i))
                  this._subscriptionsAutoDisposedByRpc.delete(i);
                else {
                  this._subscriptionsByHash[n] = {
                    ...s,
                    state: "unsubscribing"
                  };
                  try {
                    await this._rpcWebSocket.call(c, [i]);
                  } catch (u) {
                    if (u instanceof Error && console.error(`${c} error:`, u.message), !e())
                      return;
                    this._subscriptionsByHash[n] = {
                      ...s,
                      state: "subscribed"
                    }, await this._updateSubscriptions();
                    return;
                  }
                }
                this._subscriptionsByHash[n] = {
                  ...s,
                  state: "unsubscribed"
                }, await this._updateSubscriptions();
              })();
              break;
          }
      })
    );
  }
  _handleServerNotification(t, e) {
    const n = this._subscriptionCallbacksByServerSubscriptionId[t];
    n !== void 0 && n.forEach((s) => {
      try {
        s(
          ...e
        );
      } catch (i) {
        console.error(i);
      }
    });
  }
  _wsOnAccountNotification(t) {
    const {
      result: e,
      subscription: n
    } = J(t, p0);
    this._handleServerNotification(n, [e.value, e.context]);
  }
  _makeSubscription(t, e) {
    const n = this._nextClientSubscriptionId++, s = Ih([t.method, e]), i = this._subscriptionsByHash[s];
    return i === void 0 ? this._subscriptionsByHash[s] = {
      ...t,
      args: e,
      callbacks: /* @__PURE__ */ new Set([t.callback]),
      state: "pending"
    } : i.callbacks.add(t.callback), this._subscriptionDisposeFunctionsByClientSubscriptionId[n] = async () => {
      delete this._subscriptionDisposeFunctionsByClientSubscriptionId[n];
      const c = this._subscriptionsByHash[s];
      we(c !== void 0, `Could not find a \`Subscription\` when tearing down client subscription #${n}`), c.callbacks.delete(t.callback), await this._updateSubscriptions();
    }, this._updateSubscriptions(), n;
  }
  onAccountChange(t, e, n) {
    const s = this._buildArgs(
      [t.toBase58()],
      n || this._commitment || "finalized",
      "base64"
    );
    return this._makeSubscription({
      callback: e,
      method: "accountSubscribe",
      unsubscribeMethod: "accountUnsubscribe"
    }, s);
  }
  async removeAccountChangeListener(t) {
    await this._unsubscribeClientSubscription(t, "account change");
  }
  _wsOnProgramAccountNotification(t) {
    const {
      result: e,
      subscription: n
    } = J(t, w0);
    this._handleServerNotification(n, [{
      accountId: e.value.pubkey,
      accountInfo: e.value.account
    }, e.context]);
  }
  onProgramAccountChange(t, e, n, s) {
    const i = this._buildArgs(
      [t.toBase58()],
      n || this._commitment || "finalized",
      "base64",
      s ? {
        filters: s
      } : void 0
    );
    return this._makeSubscription({
      callback: e,
      method: "programSubscribe",
      unsubscribeMethod: "programUnsubscribe"
    }, i);
  }
  async removeProgramAccountChangeListener(t) {
    await this._unsubscribeClientSubscription(t, "program account change");
  }
  onLogs(t, e, n) {
    const s = this._buildArgs(
      [typeof t == "object" ? {
        mentions: [t.toString()]
      } : t],
      n || this._commitment || "finalized"
    );
    return this._makeSubscription({
      callback: e,
      method: "logsSubscribe",
      unsubscribeMethod: "logsUnsubscribe"
    }, s);
  }
  async removeOnLogsListener(t) {
    await this._unsubscribeClientSubscription(t, "logs");
  }
  _wsOnLogsNotification(t) {
    const {
      result: e,
      subscription: n
    } = J(t, Q0);
    this._handleServerNotification(n, [e.value, e.context]);
  }
  _wsOnSlotNotification(t) {
    const {
      result: e,
      subscription: n
    } = J(t, m0);
    this._handleServerNotification(n, [e]);
  }
  onSlotChange(t) {
    return this._makeSubscription(
      {
        callback: t,
        method: "slotSubscribe",
        unsubscribeMethod: "slotUnsubscribe"
      },
      []
    );
  }
  async removeSlotChangeListener(t) {
    await this._unsubscribeClientSubscription(t, "slot change");
  }
  _wsOnSlotUpdatesNotification(t) {
    const {
      result: e,
      subscription: n
    } = J(t, b0);
    this._handleServerNotification(n, [e]);
  }
  onSlotUpdate(t) {
    return this._makeSubscription(
      {
        callback: t,
        method: "slotsUpdatesSubscribe",
        unsubscribeMethod: "slotsUpdatesUnsubscribe"
      },
      []
    );
  }
  async removeSlotUpdateListener(t) {
    await this._unsubscribeClientSubscription(t, "slot update");
  }
  async _unsubscribeClientSubscription(t, e) {
    const n = this._subscriptionDisposeFunctionsByClientSubscriptionId[t];
    n ? await n() : console.warn(`Ignored unsubscribe request because an active subscription with id \`${t}\` for '${e}' events could not be found.`);
  }
  _buildArgs(t, e, n, s) {
    const i = e || this._commitment;
    if (i || n || s) {
      let c = {};
      n && (c.encoding = n), i && (c.commitment = i), s && (c = Object.assign(c, s)), t.push(c);
    }
    return t;
  }
  _buildArgsAtLeastConfirmed(t, e, n, s) {
    const i = e || this._commitment;
    if (i && !["confirmed", "finalized"].includes(i))
      throw new Error("Using Connection with default commitment: `" + this._commitment + "`, but method requires at least `confirmed`");
    return this._buildArgs(t, e, n, s);
  }
  _wsOnSignatureNotification(t) {
    const {
      result: e,
      subscription: n
    } = J(t, x0);
    e.value !== "receivedSignature" && this._subscriptionsAutoDisposedByRpc.add(n), this._handleServerNotification(n, e.value === "receivedSignature" ? [{
      type: "received"
    }, e.context] : [{
      type: "status",
      result: e.value
    }, e.context]);
  }
  onSignature(t, e, n) {
    const s = this._buildArgs(
      [t],
      n || this._commitment || "finalized"
    ), i = this._makeSubscription({
      callback: (c, u) => {
        if (c.type === "status") {
          e(c.result, u);
          try {
            this.removeSignatureListener(i);
          } catch {
          }
        }
      },
      method: "signatureSubscribe",
      unsubscribeMethod: "signatureUnsubscribe"
    }, s);
    return i;
  }
  onSignatureWithOptions(t, e, n) {
    const {
      commitment: s,
      ...i
    } = {
      ...n,
      commitment: n && n.commitment || this._commitment || "finalized"
    }, c = this._buildArgs(
      [t],
      s,
      void 0,
      i
    ), u = this._makeSubscription({
      callback: (p, m) => {
        e(p, m);
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
  async removeSignatureListener(t) {
    await this._unsubscribeClientSubscription(t, "signature result");
  }
  _wsOnRootNotification(t) {
    const {
      result: e,
      subscription: n
    } = J(t, E0);
    this._handleServerNotification(n, [e]);
  }
  onRootChange(t) {
    return this._makeSubscription(
      {
        callback: t,
        method: "rootSubscribe",
        unsubscribeMethod: "rootUnsubscribe"
      },
      []
    );
  }
  async removeRootChangeListener(t) {
    await this._unsubscribeClientSubscription(t, "root change");
  }
}
Object.freeze({
  CreateLookupTable: {
    index: 0,
    layout: nt([ut("instruction"), $r("recentSlot"), It("bumpSeed")])
  },
  FreezeLookupTable: {
    index: 1,
    layout: nt([ut("instruction")])
  },
  ExtendLookupTable: {
    index: 2,
    layout: nt([ut("instruction"), $r(), Le(yt(), Cr(ut(), -8), "addresses")])
  },
  DeactivateLookupTable: {
    index: 3,
    layout: nt([ut("instruction")])
  },
  CloseLookupTable: {
    index: 4,
    layout: nt([ut("instruction")])
  }
});
new st("AddressLookupTab1e1111111111111111111111111");
Object.freeze({
  RequestUnits: {
    index: 0,
    layout: nt([It("instruction"), ut("units"), ut("additionalFee")])
  },
  RequestHeapFrame: {
    index: 1,
    layout: nt([It("instruction"), ut("bytes")])
  },
  SetComputeUnitLimit: {
    index: 2,
    layout: nt([It("instruction"), ut("units")])
  },
  SetComputeUnitPrice: {
    index: 3,
    layout: nt([It("instruction"), $r("microLamports")])
  }
});
new st("ComputeBudget111111111111111111111111111111");
nt([It("numSignatures"), It("padding"), We("signatureOffset"), We("signatureInstructionIndex"), We("publicKeyOffset"), We("publicKeyInstructionIndex"), We("messageDataOffset"), We("messageDataSize"), We("messageInstructionIndex")]);
new st("Ed25519SigVerify111111111111111111111111111");
Tr.hmacSha256Sync = (r, ...t) => {
  const e = Bc.create(Ms, r);
  return t.forEach((n) => e.update(n)), e.digest();
};
Tr.isValidPrivateKey;
nt([It("numSignatures"), We("signatureOffset"), It("signatureInstructionIndex"), We("ethAddressOffset"), It("ethAddressInstructionIndex"), We("messageDataOffset"), We("messageDataSize"), It("messageInstructionIndex"), jt(20, "ethAddress"), jt(64, "signature"), It("recoveryId")]);
new st("KeccakSecp256k11111111111111111111111111111");
new st("StakeConfig11111111111111111111111111111111");
class ga {
  constructor(t, e, n) {
    this.unixTimestamp = void 0, this.epoch = void 0, this.custodian = void 0, this.unixTimestamp = t, this.epoch = e, this.custodian = n;
  }
}
ga.default = new ga(0, 0, st.default);
Object.freeze({
  Initialize: {
    index: 0,
    layout: nt([ut("instruction"), ph(), gh()])
  },
  Authorize: {
    index: 1,
    layout: nt([ut("instruction"), yt("newAuthorized"), ut("stakeAuthorizationType")])
  },
  Delegate: {
    index: 2,
    layout: nt([ut("instruction")])
  },
  Split: {
    index: 3,
    layout: nt([ut("instruction"), Pe("lamports")])
  },
  Withdraw: {
    index: 4,
    layout: nt([ut("instruction"), Pe("lamports")])
  },
  Deactivate: {
    index: 5,
    layout: nt([ut("instruction")])
  },
  Merge: {
    index: 7,
    layout: nt([ut("instruction")])
  },
  AuthorizeWithSeed: {
    index: 8,
    layout: nt([ut("instruction"), yt("newAuthorized"), ut("stakeAuthorizationType"), Wr("authoritySeed"), yt("authorityOwner")])
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
new st("Stake11111111111111111111111111111111111111");
Object.freeze({
  InitializeAccount: {
    index: 0,
    layout: nt([ut("instruction"), wh()])
  },
  Authorize: {
    index: 1,
    layout: nt([ut("instruction"), yt("newAuthorized"), ut("voteAuthorizationType")])
  },
  Withdraw: {
    index: 3,
    layout: nt([ut("instruction"), Pe("lamports")])
  },
  AuthorizeWithSeed: {
    index: 10,
    layout: nt([ut("instruction"), yh()])
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
new st("Vote111111111111111111111111111111111111111");
new st("Va1idator1nfo111111111111111111111111111111");
q({
  name: Z(),
  website: gt(Z()),
  details: gt(Z()),
  keybaseUsername: gt(Z())
});
new st("Vote111111111111111111111111111111111111111");
nt([
  yt("nodePubkey"),
  yt("authorizedWithdrawer"),
  It("commission"),
  Ee(),
  Le(nt([Ee("slot"), ut("confirmationCount")]), Cr(ut(), -8), "votes"),
  It("rootSlotValid"),
  Ee("rootSlot"),
  Ee(),
  Le(nt([Ee("epoch"), yt("authorizedVoter")]), Cr(ut(), -8), "authorizedVoters"),
  nt([Le(nt([yt("authorizedPubkey"), Ee("epochOfLastAuthorizedSwitch"), Ee("targetEpoch")]), 32, "buf"), Ee("idx"), It("isEmpty")], "priorVoters"),
  Ee(),
  Le(nt([Ee("epoch"), Ee("credits"), Ee("prevCredits")]), Cr(ut(), -8), "epochCredits"),
  nt([Ee("slot"), Ee("timestamp")], "lastTimestamp")
]);
const wa = {
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
function q0(r, t) {
  const e = t === !1 ? "http" : "https";
  if (!r)
    return wa[e].devnet;
  const n = wa[e][r];
  if (!n)
    throw new Error(`Unknown ${e} cluster: ${r}`);
  return n;
}
const Y0 = Fs({}), j0 = ({ children: r, endpoint: t, config: e = { commitment: "confirmed" } }) => {
  const n = Xe(() => new K0(t, e), [t, e]);
  return O.createElement(Y0.Provider, { value: { connection: n } }, r);
};
class Se extends Error {
  constructor(t, e) {
    super(t), this.error = e;
  }
}
class Nn extends Se {
  constructor() {
    super(...arguments), this.name = "WalletNotReadyError";
  }
}
class V0 extends Se {
  constructor() {
    super(...arguments), this.name = "WalletLoadError";
  }
}
class Z0 extends Se {
  constructor() {
    super(...arguments), this.name = "WalletConfigError";
  }
}
class mn extends Se {
  constructor() {
    super(...arguments), this.name = "WalletConnectionError";
  }
}
class Ao extends Se {
  constructor() {
    super(...arguments), this.name = "WalletDisconnectedError";
  }
}
class An extends Se {
  constructor() {
    super(...arguments), this.name = "WalletDisconnectionError";
  }
}
class bo extends Se {
  constructor() {
    super(...arguments), this.name = "WalletAccountError";
  }
}
class bn extends Se {
  constructor() {
    super(...arguments), this.name = "WalletPublicKeyError";
  }
}
class ye extends Se {
  constructor() {
    super(...arguments), this.name = "WalletNotConnectedError";
  }
}
class Kr extends Se {
  constructor() {
    super(...arguments), this.name = "WalletSendTransactionError";
  }
}
class bi extends Se {
  constructor() {
    super(...arguments), this.name = "WalletSignMessageError";
  }
}
class Oe extends Se {
  constructor() {
    super(...arguments), this.name = "WalletSignTransactionError";
  }
}
var mt;
(function(r) {
  r.Installed = "Installed", r.NotDetected = "NotDetected", r.Loadable = "Loadable", r.Unsupported = "Unsupported";
})(mt || (mt = {}));
class X0 extends nl {
  get connected() {
    return !!this.publicKey;
  }
  async prepareTransaction(t, e, n = {}) {
    const s = this.publicKey;
    if (!s)
      throw new ye();
    return t.feePayer = t.feePayer || s, t.recentBlockhash = t.recentBlockhash || (await e.getLatestBlockhash({
      commitment: n.preflightCommitment,
      minContextSlot: n.minContextSlot
    })).blockhash, t;
  }
}
function xi(r) {
  if (typeof window > "u" || typeof document > "u")
    return;
  const t = [];
  function e() {
    if (r())
      for (const i of t)
        i();
  }
  const n = setInterval(e, 1e3);
  t.push(() => clearInterval(n)), document.readyState === "loading" && (document.addEventListener("DOMContentLoaded", e, { once: !0 }), t.push(() => document.removeEventListener("DOMContentLoaded", e))), document.readyState !== "complete" && (window.addEventListener("load", e, { once: !0 }), t.push(() => window.removeEventListener("load", e))), e();
}
class J0 extends X0 {
  async sendTransaction(t, e, n = {}) {
    let s = !0;
    try {
      if ("version" in t) {
        if (!this.supportedTransactionVersions)
          throw new Kr("Sending versioned transactions isn't supported by this wallet");
        if (!this.supportedTransactionVersions.has(t.version))
          throw new Kr(`Sending transaction version ${t.version} isn't supported by this wallet`);
        try {
          t = await this.signTransaction(t);
          const i = t.serialize();
          return await e.sendRawTransaction(i, n);
        } catch (i) {
          throw i instanceof Oe ? (s = !1, i) : new Kr(i == null ? void 0 : i.message, i);
        }
      } else
        try {
          const { signers: i, ...c } = n;
          t = await this.prepareTransaction(t, e, c), i != null && i.length && t.partialSign(...i), t = await this.signTransaction(t);
          const u = t.serialize();
          return await e.sendRawTransaction(u, c);
        } catch (i) {
          throw i instanceof Oe ? (s = !1, i) : new Kr(i == null ? void 0 : i.message, i);
        }
    } catch (i) {
      throw s && this.emit("error", i), i;
    }
  }
  async signAllTransactions(t) {
    for (const n of t)
      if ("version" in n) {
        if (!this.supportedTransactionVersions)
          throw new Oe("Signing versioned transactions isn't supported by this wallet");
        if (!this.supportedTransactionVersions.has(n.version))
          throw new Oe(`Signing transaction version ${n.version} isn't supported by this wallet`);
      }
    const e = [];
    for (const n of t)
      e.push(await this.signTransaction(n));
    return e;
  }
}
class Ei extends J0 {
}
var Us;
(function(r) {
  r.Mainnet = "mainnet-beta", r.Testnet = "testnet", r.Devnet = "devnet";
})(Us || (Us = {}));
class ya extends Se {
  constructor() {
    super(...arguments), this.name = "WalletNotSelectedError";
  }
}
const $0 = [], vi = {
  autoConnect: !1,
  connecting: !1,
  connected: !1,
  disconnecting: !1,
  select(r) {
    console.error(nr("get", "select"));
  },
  connect() {
    return Promise.reject(console.error(nr("get", "connect")));
  },
  disconnect() {
    return Promise.reject(console.error(nr("get", "disconnect")));
  },
  sendTransaction(r, t, e) {
    return Promise.reject(console.error(nr("get", "sendTransaction")));
  },
  signTransaction(r) {
    return Promise.reject(console.error(nr("get", "signTransaction")));
  },
  signAllTransactions(r) {
    return Promise.reject(console.error(nr("get", "signAllTransactions")));
  },
  signMessage(r) {
    return Promise.reject(console.error(nr("get", "signMessage")));
  }
};
Object.defineProperty(vi, "wallets", {
  get() {
    return console.error(nr("read", "wallets")), $0;
  }
});
Object.defineProperty(vi, "wallet", {
  get() {
    return console.error(nr("read", "wallet")), null;
  }
});
Object.defineProperty(vi, "publicKey", {
  get() {
    return console.error(nr("read", "publicKey")), null;
  }
});
function nr(r, t) {
  return `You have tried to  ${r} "${t}" on a WalletContext without providing one. Make sure to render a WalletProvider as an ancestor of the component that uses WalletContext`;
}
const Fc = Fs(vi);
function Dc() {
  return _a(Fc);
}
function td(r, t) {
  const e = Ft(() => {
    try {
      const i = localStorage.getItem(r);
      if (i)
        return JSON.parse(i);
    } catch (i) {
      typeof window < "u" && console.error(i);
    }
    return t;
  }), n = e[0], s = fr(!0);
  return Ne(() => {
    if (s.current) {
      s.current = !1;
      return;
    }
    try {
      n === null ? localStorage.removeItem(r) : localStorage.setItem(r, JSON.stringify(n));
    } catch (i) {
      typeof window < "u" && console.error(i);
    }
  }, [n, r]), e;
}
const ma = {
  wallet: null,
  adapter: null,
  publicKey: null,
  connected: !1
}, ed = ({ children: r, wallets: t, autoConnect: e = !1, onError: n, localStorageKey: s = "walletName" }) => {
  const [i, c] = td(s, null), [{ wallet: u, adapter: p, publicKey: m, connected: A }, S] = Ft(ma), T = (p == null ? void 0 : p.readyState) || mt.Unsupported, [I, C] = Ft(!1), [k, R] = Ft(!1), U = fr(!1), D = fr(!1), L = fr(!1), [H, P] = Ft(() => t.map((g) => ({
    adapter: g,
    readyState: g.readyState
  })));
  Ne(() => {
    P((y) => t.map((E, B) => {
      const N = y[B];
      return N && N.adapter === E && N.readyState === E.readyState ? N : {
        adapter: E,
        readyState: E.readyState
      };
    }));
    function g(y) {
      P((E) => {
        const B = E.findIndex(({ adapter: F }) => F === this);
        if (B === -1)
          return E;
        const { adapter: N } = E[B];
        return [...E.slice(0, B), { adapter: N, readyState: y }, ...E.slice(B + 1)];
      });
    }
    return t.forEach((y) => y.on("readyStateChange", g, y)), () => t.forEach((y) => y.off("readyStateChange", g, y));
  }, [t]), Ne(() => {
    const g = i && H.find(({ adapter: y }) => y.name === i);
    S(g ? {
      wallet: g,
      adapter: g.adapter,
      connected: g.adapter.connected,
      publicKey: g.adapter.publicKey
    } : ma);
  }, [i, H]), Ne(() => {
    function g() {
      L.current = !0;
    }
    return window.addEventListener("beforeunload", g), () => window.removeEventListener("beforeunload", g);
  }, [L]);
  const Q = Ye(() => {
    !p || S((g) => ({ ...g, connected: p.connected, publicKey: p.publicKey }));
  }, [p]), W = Ye(() => {
    L.current || c(null);
  }, [L, c]), Y = Ye((g) => (L.current || (n || console.error)(g), g), [L, n]);
  Ne(() => {
    if (p)
      return p.on("connect", Q), p.on("disconnect", W), p.on("error", Y), () => {
        p.off("connect", Q), p.off("disconnect", W), p.off("error", Y);
      };
  }, [p, Q, W, Y]), Ne(() => () => {
    p == null || p.disconnect();
  }, [p]), Ne(() => {
    U.current || A || !e || !p || !(T === mt.Installed || T === mt.Loadable) || async function() {
      U.current = !0, C(!0);
      try {
        await p.connect();
      } catch {
        c(null);
      } finally {
        C(!1), U.current = !1;
      }
    }();
  }, [U, A, e, p, T, c]);
  const wt = Ye(async () => {
    if (!(U.current || D.current || A)) {
      if (!p)
        throw Y(new ya());
      if (!(T === mt.Installed || T === mt.Loadable))
        throw c(null), typeof window < "u" && window.open(p.url, "_blank"), Y(new Nn());
      U.current = !0, C(!0);
      try {
        await p.connect();
      } catch (g) {
        throw c(null), g;
      } finally {
        C(!1), U.current = !1;
      }
    }
  }, [U, D, A, p, T, Y, c]), Nt = Ye(async () => {
    if (!D.current) {
      if (!p)
        return c(null);
      D.current = !0, R(!0);
      try {
        await p.disconnect();
      } catch (g) {
        throw c(null), g;
      } finally {
        R(!1), D.current = !1;
      }
    }
  }, [D, p, c]), dt = Ye(async (g, y, E) => {
    if (!p)
      throw Y(new ya());
    if (!A)
      throw Y(new ye());
    return await p.sendTransaction(g, y, E);
  }, [p, Y, A]), Rt = Xe(() => p && "signTransaction" in p ? async (g) => {
    if (!A)
      throw Y(new ye());
    return await p.signTransaction(g);
  } : void 0, [p, Y, A]), v = Xe(() => p && "signAllTransactions" in p ? async (g) => {
    if (!A)
      throw Y(new ye());
    return await p.signAllTransactions(g);
  } : void 0, [p, Y, A]), f = Xe(() => p && "signMessage" in p ? async (g) => {
    if (!A)
      throw Y(new ye());
    return await p.signMessage(g);
  } : void 0, [p, Y, A]);
  return O.createElement(Fc.Provider, { value: {
    autoConnect: e,
    wallets: H,
    wallet: u,
    publicKey: m,
    connected: A,
    connecting: I,
    disconnecting: k,
    select: c,
    connect: wt,
    disconnect: Nt,
    sendTransaction: dt,
    signTransaction: Rt,
    signAllTransactions: v,
    signMessage: f
  } }, r);
}, Pc = {
  setVisible(r) {
    console.error(zc("call", "setVisible"));
  },
  visible: !1
};
Object.defineProperty(Pc, "visible", {
  get() {
    return console.error(zc("read", "visible")), !1;
  }
});
function zc(r, t) {
  return `You have tried to  ${r} "${t}" on a WalletModalContext without providing one. Make sure to render a WalletModalProvider as an ancestor of the component that uses WalletModalContext`;
}
const Hc = Fs(Pc);
function Gc() {
  return _a(Hc);
}
const rd = (r) => O.createElement(
  "button",
  { className: `wallet-adapter-button ${r.className || ""}`, disabled: r.disabled, style: r.style, onClick: r.onClick, tabIndex: r.tabIndex || 0, type: "button" },
  r.startIcon && O.createElement("i", { className: "wallet-adapter-button-start-icon" }, r.startIcon),
  r.children,
  r.endIcon && O.createElement("i", { className: "wallet-adapter-button-end-icon" }, r.endIcon)
), nd = ({ wallet: r, ...t }) => r && O.createElement("img", { src: r.adapter.icon, alt: `${r.adapter.name} icon`, ...t }), Aa = ({ id: r, children: t, expanded: e = !1 }) => {
  const n = fr(null), s = fr(!0), i = "height 250ms ease-out", c = () => {
    const p = n.current;
    !p || requestAnimationFrame(() => {
      p.style.height = p.scrollHeight + "px";
    });
  }, u = () => {
    const p = n.current;
    !p || requestAnimationFrame(() => {
      p.style.height = p.offsetHeight + "px", p.style.overflow = "hidden", requestAnimationFrame(() => {
        p.style.height = "0";
      });
    });
  };
  return qn(() => {
    e ? c() : u();
  }, [e]), qn(() => {
    const p = n.current;
    if (!p)
      return;
    function m() {
      !p || (p.style.overflow = e ? "initial" : "hidden", e && (p.style.height = "auto"));
    }
    function A(S) {
      p && S.target === p && S.propertyName === "height" && m();
    }
    return s.current && (m(), s.current = !1), p.addEventListener("transitionend", A), () => p.removeEventListener("transitionend", A);
  }, [e]), O.createElement("div", { className: "wallet-adapter-collapse", id: r, ref: n, role: "region", style: { height: 0, transition: s.current ? void 0 : i } }, t);
}, xs = ({ handleClick: r, tabIndex: t, wallet: e }) => O.createElement(
  "li",
  null,
  O.createElement(
    rd,
    { onClick: r, startIcon: O.createElement(nd, { wallet: e }), tabIndex: t },
    e.adapter.name,
    e.readyState === mt.Installed && O.createElement("span", null, "Detected")
  )
), id = () => O.createElement(
  "svg",
  { width: "97", height: "96", viewBox: "0 0 97 96", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
  O.createElement("circle", { cx: "48.5", cy: "48", r: "48", fill: "url(#paint0_linear_880_5115)", fillOpacity: "0.1" }),
  O.createElement("circle", { cx: "48.5", cy: "48", r: "47", stroke: "url(#paint1_linear_880_5115)", strokeOpacity: "0.4", strokeWidth: "2" }),
  O.createElement(
    "g",
    { clipPath: "url(#clip0_880_5115)" },
    O.createElement("path", { d: "M65.5769 28.1523H31.4231C27.6057 28.1523 24.5 31.258 24.5 35.0754V60.9215C24.5 64.7389 27.6057 67.8446 31.4231 67.8446H65.5769C69.3943 67.8446 72.5 64.7389 72.5 60.9215V35.0754C72.5 31.258 69.3943 28.1523 65.5769 28.1523ZM69.7308 52.1523H59.5769C57.2865 52.1523 55.4231 50.289 55.4231 47.9985C55.4231 45.708 57.2864 43.8446 59.5769 43.8446H69.7308V52.1523ZM69.7308 41.0754H59.5769C55.7595 41.0754 52.6539 44.1811 52.6539 47.9985C52.6539 51.8159 55.7595 54.9215 59.5769 54.9215H69.7308V60.9215C69.7308 63.2119 67.8674 65.0754 65.5769 65.0754H31.4231C29.1327 65.0754 27.2692 63.212 27.2692 60.9215V35.0754C27.2692 32.785 29.1326 30.9215 31.4231 30.9215H65.5769C67.8673 30.9215 69.7308 32.7849 69.7308 35.0754V41.0754Z", fill: "url(#paint2_linear_880_5115)" }),
    O.createElement("path", { d: "M61.4231 46.6172H59.577C58.8123 46.6172 58.1924 47.2371 58.1924 48.0018C58.1924 48.7665 58.8123 49.3863 59.577 49.3863H61.4231C62.1878 49.3863 62.8077 48.7664 62.8077 48.0018C62.8077 47.2371 62.1878 46.6172 61.4231 46.6172Z", fill: "url(#paint3_linear_880_5115)" })
  ),
  O.createElement(
    "defs",
    null,
    O.createElement(
      "linearGradient",
      { id: "paint0_linear_880_5115", x1: "3.41664", y1: "98.0933", x2: "103.05", y2: "8.42498", gradientUnits: "userSpaceOnUse" },
      O.createElement("stop", { stopColor: "#9945FF" }),
      O.createElement("stop", { offset: "0.14", stopColor: "#8A53F4" }),
      O.createElement("stop", { offset: "0.42", stopColor: "#6377D6" }),
      O.createElement("stop", { offset: "0.79", stopColor: "#24B0A7" }),
      O.createElement("stop", { offset: "0.99", stopColor: "#00D18C" }),
      O.createElement("stop", { offset: "1", stopColor: "#00D18C" })
    ),
    O.createElement(
      "linearGradient",
      { id: "paint1_linear_880_5115", x1: "3.41664", y1: "98.0933", x2: "103.05", y2: "8.42498", gradientUnits: "userSpaceOnUse" },
      O.createElement("stop", { stopColor: "#9945FF" }),
      O.createElement("stop", { offset: "0.14", stopColor: "#8A53F4" }),
      O.createElement("stop", { offset: "0.42", stopColor: "#6377D6" }),
      O.createElement("stop", { offset: "0.79", stopColor: "#24B0A7" }),
      O.createElement("stop", { offset: "0.99", stopColor: "#00D18C" }),
      O.createElement("stop", { offset: "1", stopColor: "#00D18C" })
    ),
    O.createElement(
      "linearGradient",
      { id: "paint2_linear_880_5115", x1: "25.9583", y1: "68.7101", x2: "67.2337", y2: "23.7879", gradientUnits: "userSpaceOnUse" },
      O.createElement("stop", { stopColor: "#9945FF" }),
      O.createElement("stop", { offset: "0.14", stopColor: "#8A53F4" }),
      O.createElement("stop", { offset: "0.42", stopColor: "#6377D6" }),
      O.createElement("stop", { offset: "0.79", stopColor: "#24B0A7" }),
      O.createElement("stop", { offset: "0.99", stopColor: "#00D18C" }),
      O.createElement("stop", { offset: "1", stopColor: "#00D18C" })
    ),
    O.createElement(
      "linearGradient",
      { id: "paint3_linear_880_5115", x1: "58.3326", y1: "49.4467", x2: "61.0002", y2: "45.4453", gradientUnits: "userSpaceOnUse" },
      O.createElement("stop", { stopColor: "#9945FF" }),
      O.createElement("stop", { offset: "0.14", stopColor: "#8A53F4" }),
      O.createElement("stop", { offset: "0.42", stopColor: "#6377D6" }),
      O.createElement("stop", { offset: "0.79", stopColor: "#24B0A7" }),
      O.createElement("stop", { offset: "0.99", stopColor: "#00D18C" }),
      O.createElement("stop", { offset: "1", stopColor: "#00D18C" })
    ),
    O.createElement(
      "clipPath",
      { id: "clip0_880_5115" },
      O.createElement("rect", { width: "48", height: "48", fill: "white", transform: "translate(24.5 24)" })
    )
  )
), sd = ({ className: r = "", container: t = "body" }) => {
  const e = fr(null), { wallets: n, select: s } = Dc(), { setVisible: i } = Gc(), [c, u] = Ft(!1), [p, m] = Ft(!1), [A, S] = Ft(null), [T, I] = Xe(() => {
    const H = [], P = [], Q = [];
    for (const W of n)
      W.readyState === mt.NotDetected ? P.push(W) : W.readyState === mt.Loadable ? Q.push(W) : W.readyState === mt.Installed && H.push(W);
    return [H, [...Q, ...P]];
  }, [n]), C = Xe(() => T.length ? T[0] : n.find((H) => H.adapter.name === "Torus") || n.find((H) => H.adapter.name === "Phantom") || n.find((H) => H.readyState === mt.Loadable) || I[0], [T, n, I]), k = Ye(() => {
    m(!1), setTimeout(() => i(!1), 150);
  }, [i]), R = Ye((H) => {
    H.preventDefault(), k();
  }, [k]), U = Ye((H, P) => {
    s(P), R(H);
  }, [s, R]), D = Ye(() => u(!c), [c]), L = Ye((H) => {
    const P = e.current;
    if (!P)
      return;
    const Q = P.querySelectorAll("button"), W = Q[0], Y = Q[Q.length - 1];
    H.shiftKey ? document.activeElement === W && (Y.focus(), H.preventDefault()) : document.activeElement === Y && (W.focus(), H.preventDefault());
  }, [e]);
  return qn(() => {
    const H = (Q) => {
      Q.key === "Escape" ? k() : Q.key === "Tab" && L(Q);
    }, { overflow: P } = window.getComputedStyle(document.body);
    return setTimeout(() => m(!0), 0), document.body.style.overflow = "hidden", window.addEventListener("keydown", H, !1), () => {
      document.body.style.overflow = P, window.removeEventListener("keydown", H, !1);
    };
  }, [k, L]), qn(() => S(document.querySelector(t)), [t]), A && Wc(O.createElement(
    "div",
    { "aria-labelledby": "wallet-adapter-modal-title", "aria-modal": "true", className: `wallet-adapter-modal ${p && "wallet-adapter-modal-fade-in"} ${r}`, ref: e, role: "dialog" },
    O.createElement(
      "div",
      { className: "wallet-adapter-modal-container" },
      O.createElement(
        "div",
        { className: "wallet-adapter-modal-wrapper" },
        O.createElement(
          "button",
          { onClick: R, className: "wallet-adapter-modal-button-close" },
          O.createElement(
            "svg",
            { width: "14", height: "14" },
            O.createElement("path", { d: "M14 12.461 8.3 6.772l5.234-5.233L12.006 0 6.772 5.234 1.54 0 0 1.539l5.234 5.233L0 12.006l1.539 1.528L6.772 8.3l5.69 5.7L14 12.461z" })
          )
        ),
        T.length ? O.createElement(
          O.Fragment,
          null,
          O.createElement("h1", { className: "wallet-adapter-modal-title" }, "Connect a wallet on Solana to continue"),
          O.createElement(
            "ul",
            { className: "wallet-adapter-modal-list" },
            T.map((H) => O.createElement(xs, { key: H.adapter.name, handleClick: (P) => U(P, H.adapter.name), wallet: H })),
            I.length ? O.createElement(Aa, { expanded: c, id: "wallet-adapter-modal-collapse" }, I.map((H) => O.createElement(xs, { key: H.adapter.name, handleClick: (P) => U(P, H.adapter.name), tabIndex: c ? 0 : -1, wallet: H }))) : null
          ),
          I.length ? O.createElement(
            "button",
            { className: "wallet-adapter-modal-list-more", onClick: D, tabIndex: 0 },
            O.createElement(
              "span",
              null,
              c ? "Less " : "More ",
              "options"
            ),
            O.createElement(
              "svg",
              { width: "13", height: "7", viewBox: "0 0 13 7", xmlns: "http://www.w3.org/2000/svg", className: `${c ? "wallet-adapter-modal-list-more-icon-rotate" : ""}` },
              O.createElement("path", { d: "M0.71418 1.626L5.83323 6.26188C5.91574 6.33657 6.0181 6.39652 6.13327 6.43762C6.24844 6.47872 6.37371 6.5 6.50048 6.5C6.62725 6.5 6.75252 6.47872 6.8677 6.43762C6.98287 6.39652 7.08523 6.33657 7.16774 6.26188L12.2868 1.626C12.7753 1.1835 12.3703 0.5 11.6195 0.5H1.37997C0.629216 0.5 0.224175 1.1835 0.71418 1.626Z" })
            )
          ) : null
        ) : O.createElement(
          O.Fragment,
          null,
          O.createElement("h1", { className: "wallet-adapter-modal-title" }, "You'll need a wallet on Solana to continue"),
          O.createElement(
            "div",
            { className: "wallet-adapter-modal-middle" },
            O.createElement(id, null),
            O.createElement("button", { type: "button", className: "wallet-adapter-modal-middle-button", onClick: (H) => U(H, C.adapter.name) }, "Get started")
          ),
          I.length ? O.createElement(
            O.Fragment,
            null,
            O.createElement(
              "button",
              { className: "wallet-adapter-modal-list-more", onClick: D, tabIndex: 0 },
              O.createElement(
                "span",
                null,
                c ? "Hide " : "Already have a wallet? View ",
                "options"
              ),
              O.createElement(
                "svg",
                { width: "13", height: "7", viewBox: "0 0 13 7", xmlns: "http://www.w3.org/2000/svg", className: `${c ? "wallet-adapter-modal-list-more-icon-rotate" : ""}` },
                O.createElement("path", { d: "M0.71418 1.626L5.83323 6.26188C5.91574 6.33657 6.0181 6.39652 6.13327 6.43762C6.24844 6.47872 6.37371 6.5 6.50048 6.5C6.62725 6.5 6.75252 6.47872 6.8677 6.43762C6.98287 6.39652 7.08523 6.33657 7.16774 6.26188L12.2868 1.626C12.7753 1.1835 12.3703 0.5 11.6195 0.5H1.37997C0.629216 0.5 0.224175 1.1835 0.71418 1.626Z" })
              )
            ),
            O.createElement(
              Aa,
              { expanded: c, id: "wallet-adapter-modal-collapse" },
              O.createElement("ul", { className: "wallet-adapter-modal-list" }, I.map((H) => O.createElement(xs, { key: H.adapter.name, handleClick: (P) => U(P, H.adapter.name), tabIndex: c ? 0 : -1, wallet: H })))
            )
          ) : null
        )
      )
    ),
    O.createElement("div", { className: "wallet-adapter-modal-overlay", onMouseDown: R })
  ), A);
}, od = ({ children: r, ...t }) => {
  const [e, n] = Ft(!1);
  return O.createElement(
    Hc.Provider,
    { value: {
      visible: e,
      setVisible: n
    } },
    r,
    e && O.createElement(sd, { ...t })
  );
}, ad = "logger/5.7.0";
let ba = !1, xa = !1;
const Wn = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
let Ea = Wn.default, Es = null;
function cd() {
  try {
    const r = [];
    if (["NFD", "NFC", "NFKD", "NFKC"].forEach((t) => {
      try {
        if ("test".normalize(t) !== "test")
          throw new Error("bad normalize");
      } catch {
        r.push(t);
      }
    }), r.length)
      throw new Error("missing " + r.join(", "));
    if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769))
      throw new Error("broken implementation");
  } catch (r) {
    return r.message;
  }
  return null;
}
const va = cd();
var Os;
(function(r) {
  r.DEBUG = "DEBUG", r.INFO = "INFO", r.WARNING = "WARNING", r.ERROR = "ERROR", r.OFF = "OFF";
})(Os || (Os = {}));
var Ze;
(function(r) {
  r.UNKNOWN_ERROR = "UNKNOWN_ERROR", r.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", r.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", r.NETWORK_ERROR = "NETWORK_ERROR", r.SERVER_ERROR = "SERVER_ERROR", r.TIMEOUT = "TIMEOUT", r.BUFFER_OVERRUN = "BUFFER_OVERRUN", r.NUMERIC_FAULT = "NUMERIC_FAULT", r.MISSING_NEW = "MISSING_NEW", r.INVALID_ARGUMENT = "INVALID_ARGUMENT", r.MISSING_ARGUMENT = "MISSING_ARGUMENT", r.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", r.CALL_EXCEPTION = "CALL_EXCEPTION", r.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", r.NONCE_EXPIRED = "NONCE_EXPIRED", r.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", r.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", r.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", r.ACTION_REJECTED = "ACTION_REJECTED";
})(Ze || (Ze = {}));
const Ba = "0123456789abcdef";
class Kt {
  constructor(t) {
    Object.defineProperty(this, "version", {
      enumerable: !0,
      value: t,
      writable: !1
    });
  }
  _log(t, e) {
    const n = t.toLowerCase();
    Wn[n] == null && this.throwArgumentError("invalid log level name", "logLevel", t), !(Ea > Wn[n]) && console.log.apply(console, e);
  }
  debug(...t) {
    this._log(Kt.levels.DEBUG, t);
  }
  info(...t) {
    this._log(Kt.levels.INFO, t);
  }
  warn(...t) {
    this._log(Kt.levels.WARNING, t);
  }
  makeError(t, e, n) {
    if (xa)
      return this.makeError("censored error", e, {});
    e || (e = Kt.errors.UNKNOWN_ERROR), n || (n = {});
    const s = [];
    Object.keys(n).forEach((p) => {
      const m = n[p];
      try {
        if (m instanceof Uint8Array) {
          let A = "";
          for (let S = 0; S < m.length; S++)
            A += Ba[m[S] >> 4], A += Ba[m[S] & 15];
          s.push(p + "=Uint8Array(0x" + A + ")");
        } else
          s.push(p + "=" + JSON.stringify(m));
      } catch {
        s.push(p + "=" + JSON.stringify(n[p].toString()));
      }
    }), s.push(`code=${e}`), s.push(`version=${this.version}`);
    const i = t;
    let c = "";
    switch (e) {
      case Ze.NUMERIC_FAULT: {
        c = "NUMERIC_FAULT";
        const p = t;
        switch (p) {
          case "overflow":
          case "underflow":
          case "division-by-zero":
            c += "-" + p;
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
      case Ze.CALL_EXCEPTION:
      case Ze.INSUFFICIENT_FUNDS:
      case Ze.MISSING_NEW:
      case Ze.NONCE_EXPIRED:
      case Ze.REPLACEMENT_UNDERPRICED:
      case Ze.TRANSACTION_REPLACED:
      case Ze.UNPREDICTABLE_GAS_LIMIT:
        c = e;
        break;
    }
    c && (t += " [ See: https://links.ethers.org/v5-errors-" + c + " ]"), s.length && (t += " (" + s.join(", ") + ")");
    const u = new Error(t);
    return u.reason = i, u.code = e, Object.keys(n).forEach(function(p) {
      u[p] = n[p];
    }), u;
  }
  throwError(t, e, n) {
    throw this.makeError(t, e, n);
  }
  throwArgumentError(t, e, n) {
    return this.throwError(t, Kt.errors.INVALID_ARGUMENT, {
      argument: e,
      value: n
    });
  }
  assert(t, e, n, s) {
    t || this.throwError(e, n, s);
  }
  assertArgument(t, e, n, s) {
    t || this.throwArgumentError(e, n, s);
  }
  checkNormalize(t) {
    va && this.throwError("platform missing String.prototype.normalize", Kt.errors.UNSUPPORTED_OPERATION, {
      operation: "String.prototype.normalize",
      form: va
    });
  }
  checkSafeUint53(t, e) {
    typeof t == "number" && (e == null && (e = "value not safe"), (t < 0 || t >= 9007199254740991) && this.throwError(e, Kt.errors.NUMERIC_FAULT, {
      operation: "checkSafeInteger",
      fault: "out-of-safe-range",
      value: t
    }), t % 1 && this.throwError(e, Kt.errors.NUMERIC_FAULT, {
      operation: "checkSafeInteger",
      fault: "non-integer",
      value: t
    }));
  }
  checkArgumentCount(t, e, n) {
    n ? n = ": " + n : n = "", t < e && this.throwError("missing argument" + n, Kt.errors.MISSING_ARGUMENT, {
      count: t,
      expectedCount: e
    }), t > e && this.throwError("too many arguments" + n, Kt.errors.UNEXPECTED_ARGUMENT, {
      count: t,
      expectedCount: e
    });
  }
  checkNew(t, e) {
    (t === Object || t == null) && this.throwError("missing new", Kt.errors.MISSING_NEW, { name: e.name });
  }
  checkAbstract(t, e) {
    t === e ? this.throwError("cannot instantiate abstract class " + JSON.stringify(e.name) + " directly; use a sub-class", Kt.errors.UNSUPPORTED_OPERATION, { name: t.name, operation: "new" }) : (t === Object || t == null) && this.throwError("missing new", Kt.errors.MISSING_NEW, { name: e.name });
  }
  static globalLogger() {
    return Es || (Es = new Kt(ad)), Es;
  }
  static setCensorship(t, e) {
    if (!t && e && this.globalLogger().throwError("cannot permanently disable censorship", Kt.errors.UNSUPPORTED_OPERATION, {
      operation: "setCensorship"
    }), ba) {
      if (!t)
        return;
      this.globalLogger().throwError("error censorship permanent", Kt.errors.UNSUPPORTED_OPERATION, {
        operation: "setCensorship"
      });
    }
    xa = !!t, ba = !!e;
  }
  static setLogLevel(t) {
    const e = Wn[t.toLowerCase()];
    if (e == null) {
      Kt.globalLogger().warn("invalid log level - " + t);
      return;
    }
    Ea = e;
  }
  static from(t) {
    return new Kt(t);
  }
}
Kt.errors = Ze;
Kt.levels = Os;
const ud = "bytes/5.7.0", vs = new Kt(ud);
function fd(r) {
  return !!r.toHexString;
}
function Kn(r) {
  return r.slice || (r.slice = function() {
    const t = Array.prototype.slice.call(arguments);
    return Kn(new Uint8Array(Array.prototype.slice.apply(r, t)));
  }), r;
}
function Ia(r) {
  return typeof r == "number" && r == r && r % 1 === 0;
}
function ld(r) {
  if (r == null)
    return !1;
  if (r.constructor === Uint8Array)
    return !0;
  if (typeof r == "string" || !Ia(r.length) || r.length < 0)
    return !1;
  for (let t = 0; t < r.length; t++) {
    const e = r[t];
    if (!Ia(e) || e < 0 || e >= 256)
      return !1;
  }
  return !0;
}
function Sa(r, t) {
  if (t || (t = {}), typeof r == "number") {
    vs.checkSafeUint53(r, "invalid arrayify value");
    const e = [];
    for (; r; )
      e.unshift(r & 255), r = parseInt(String(r / 256));
    return e.length === 0 && e.push(0), Kn(new Uint8Array(e));
  }
  if (t.allowMissingPrefix && typeof r == "string" && r.substring(0, 2) !== "0x" && (r = "0x" + r), fd(r) && (r = r.toHexString()), hd(r)) {
    let e = r.substring(2);
    e.length % 2 && (t.hexPad === "left" ? e = "0" + e : t.hexPad === "right" ? e += "0" : vs.throwArgumentError("hex data is odd-length", "value", r));
    const n = [];
    for (let s = 0; s < e.length; s += 2)
      n.push(parseInt(e.substring(s, s + 2), 16));
    return Kn(new Uint8Array(n));
  }
  return ld(r) ? Kn(new Uint8Array(r)) : vs.throwArgumentError("invalid arrayify value", "value", r);
}
function hd(r, t) {
  return !(typeof r != "string" || !r.match(/^0x[0-9A-Fa-f]*$/) || t && r.length !== 2 + 2 * t);
}
const dd = "properties/5.7.0";
globalThis && globalThis.__awaiter;
new Kt(dd);
function zn(r, t, e) {
  Object.defineProperty(r, t, {
    enumerable: !0,
    value: e,
    writable: !1
  });
}
class Qc {
  constructor(t) {
    zn(this, "alphabet", t), zn(this, "base", t.length), zn(this, "_alphabetMap", {}), zn(this, "_leader", t.charAt(0));
    for (let e = 0; e < t.length; e++)
      this._alphabetMap[t.charAt(e)] = e;
  }
  encode(t) {
    let e = Sa(t);
    if (e.length === 0)
      return "";
    let n = [0];
    for (let i = 0; i < e.length; ++i) {
      let c = e[i];
      for (let u = 0; u < n.length; ++u)
        c += n[u] << 8, n[u] = c % this.base, c = c / this.base | 0;
      for (; c > 0; )
        n.push(c % this.base), c = c / this.base | 0;
    }
    let s = "";
    for (let i = 0; e[i] === 0 && i < e.length - 1; ++i)
      s += this._leader;
    for (let i = n.length - 1; i >= 0; --i)
      s += this.alphabet[n[i]];
    return s;
  }
  decode(t) {
    if (typeof t != "string")
      throw new TypeError("Expected String");
    let e = [];
    if (t.length === 0)
      return new Uint8Array(e);
    e.push(0);
    for (let n = 0; n < t.length; n++) {
      let s = this._alphabetMap[t[n]];
      if (s === void 0)
        throw new Error("Non-base" + this.base + " character");
      let i = s;
      for (let c = 0; c < e.length; ++c)
        i += e[c] * this.base, e[c] = i & 255, i >>= 8;
      for (; i > 0; )
        e.push(i & 255), i >>= 8;
    }
    for (let n = 0; t[n] === this._leader && n < t.length - 1; ++n)
      e.push(0);
    return Sa(new Uint8Array(e.reverse()));
  }
}
new Qc("abcdefghijklmnopqrstuvwxyz234567");
const pd = new Qc("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"), gd = "Glow";
class wd extends Ei {
  constructor(t = {}) {
    if (super(), this.name = gd, this.url = "https://glow.app", this.icon = "data:image/png;base64,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", this.supportedTransactionVersions = null, this._readyState = typeof window > "u" || typeof document > "u" ? mt.Unsupported : mt.NotDetected, this._disconnected = () => {
      const e = this._wallet;
      e && (e.off("disconnect", this._disconnected), this._wallet = null, this._publicKey = null, this.emit("error", new Ao()), this.emit("disconnect"));
    }, this._connecting = !1, this._wallet = null, this._publicKey = null, this._network = t.network || null, this._readyState !== mt.Unsupported) {
      const e = (n) => {
        typeof n.data == "object" && n.data.__glow_loaded && (this._readyState !== mt.Installed && (this._readyState = mt.Installed, this.emit("readyStateChange", this._readyState)), window.removeEventListener("message", e));
      };
      window.addEventListener("message", e), xi(() => {
        var n;
        return (n = window.glowSolana) != null && n.isGlow ? (window.removeEventListener("message", e), this._readyState !== mt.Installed && (this._readyState = mt.Installed, this.emit("readyStateChange", this._readyState)), !0) : !1;
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
    var t;
    return !!((t = this._wallet) != null && t.isConnected);
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== mt.Installed)
        throw new Nn();
      this._connecting = !0;
      const t = window.glowSolana;
      try {
        await t.connect();
      } catch (n) {
        throw new mn(n == null ? void 0 : n.message, n);
      }
      if (!t.publicKey)
        throw new bo();
      let e;
      try {
        e = new st(t.publicKey.toBytes());
      } catch (n) {
        throw new bn(n == null ? void 0 : n.message, n);
      }
      t.on("disconnect", this._disconnected), this._wallet = t, this._publicKey = e, this.emit("connect", e);
    } catch (t) {
      throw this.emit("error", t), t;
    } finally {
      this._connecting = !1;
    }
  }
  async disconnect() {
    const t = this._wallet;
    if (t) {
      t.off("disconnect", this._disconnected), this._wallet = null, this._publicKey = null;
      try {
        await t.disconnect();
      } catch (e) {
        this.emit("error", new An(e == null ? void 0 : e.message, e));
      }
    }
    this.emit("disconnect");
  }
  async sendTransaction(t, e, n = {}) {
    try {
      const s = this._wallet;
      if (!s)
        throw new ye();
      try {
        const { signers: i, ...c } = n;
        t = await this.prepareTransaction(t, e, c), i != null && i.length && t.partialSign(...i), c.preflightCommitment = c.preflightCommitment || e.commitment;
        const { signature: u } = await s.signAndSendTransaction(t, {
          ...c,
          network: this._network
        });
        return u;
      } catch (i) {
        throw i instanceof Se ? i : new Kr(i == null ? void 0 : i.message, i);
      }
    } catch (s) {
      throw this.emit("error", s), s;
    }
  }
  async signTransaction(t) {
    try {
      const e = this._wallet;
      if (!e)
        throw new ye();
      try {
        return await e.signTransaction(t, this._network) || t;
      } catch (n) {
        throw new Oe(n == null ? void 0 : n.message, n);
      }
    } catch (e) {
      throw this.emit("error", e), e;
    }
  }
  async signAllTransactions(t) {
    try {
      const e = this._wallet;
      if (!e)
        throw new ye();
      try {
        return await e.signAllTransactions(t, this._network) || t;
      } catch (n) {
        throw new Oe(n == null ? void 0 : n.message, n);
      }
    } catch (e) {
      throw this.emit("error", e), e;
    }
  }
  async signMessage(t) {
    try {
      const e = this._wallet;
      if (!e)
        throw new ye();
      try {
        const { signature: n } = await e.signMessage(t);
        return n;
      } catch (n) {
        throw new bi(n == null ? void 0 : n.message, n);
      }
    } catch (e) {
      throw this.emit("error", e), e;
    }
  }
}
const yd = "Phantom";
class md extends Ei {
  constructor(t = {}) {
    super(), this.name = yd, this.url = "https://phantom.app", this.icon = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjM0IiB3aWR0aD0iMzQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iLjUiIHgyPSIuNSIgeTE9IjAiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM1MzRiYjEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1NTFiZjkiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9Ii41IiB4Mj0iLjUiIHkxPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii44MiIvPjwvbGluZWFyR3JhZGllbnQ+PGNpcmNsZSBjeD0iMTciIGN5PSIxNyIgZmlsbD0idXJsKCNhKSIgcj0iMTciLz48cGF0aCBkPSJtMjkuMTcwMiAxNy4yMDcxaC0yLjk5NjljMC02LjEwNzQtNC45NjgzLTExLjA1ODE3LTExLjA5NzUtMTEuMDU4MTctNi4wNTMyNSAwLTEwLjk3NDYzIDQuODI5NTctMTEuMDk1MDggMTAuODMyMzctLjEyNDYxIDYuMjA1IDUuNzE3NTIgMTEuNTkzMiAxMS45NDUzOCAxMS41OTMyaC43ODM0YzUuNDkwNiAwIDEyLjg0OTctNC4yODI5IDEzLjk5OTUtOS41MDEzLjIxMjMtLjk2MTktLjU1MDItMS44NjYxLTEuNTM4OC0xLjg2NjF6bS0xOC41NDc5LjI3MjFjMCAuODE2Ny0uNjcwMzggMS40ODQ3LTEuNDkwMDEgMS40ODQ3LS44MTk2NCAwLTEuNDg5OTgtLjY2ODMtMS40ODk5OC0xLjQ4NDd2LTIuNDAxOWMwLS44MTY3LjY3MDM0LTEuNDg0NyAxLjQ4OTk4LTEuNDg0Ny44MTk2MyAwIDEuNDkwMDEuNjY4IDEuNDkwMDEgMS40ODQ3em01LjE3MzggMGMwIC44MTY3LS42NzAzIDEuNDg0Ny0xLjQ4OTkgMS40ODQ3LS44MTk3IDAtMS40OS0uNjY4My0xLjQ5LTEuNDg0N3YtMi40MDE5YzAtLjgxNjcuNjcwNi0xLjQ4NDcgMS40OS0xLjQ4NDcuODE5NiAwIDEuNDg5OS42NjggMS40ODk5IDEuNDg0N3oiIGZpbGw9InVybCgjYikiLz48L3N2Zz4K", this.supportedTransactionVersions = null, this._readyState = typeof window > "u" || typeof document > "u" ? mt.Unsupported : mt.NotDetected, this._disconnected = () => {
      const e = this._wallet;
      e && (e.off("disconnect", this._disconnected), e.off("accountChanged", this._accountChanged), this._wallet = null, this._publicKey = null, this.emit("error", new Ao()), this.emit("disconnect"));
    }, this._accountChanged = (e) => {
      const n = this._publicKey;
      if (!!n) {
        try {
          e = new st(e.toBytes());
        } catch (s) {
          this.emit("error", new bn(s == null ? void 0 : s.message, s));
          return;
        }
        n.equals(e) || (this._publicKey = e, this.emit("connect", e));
      }
    }, this._connecting = !1, this._wallet = null, this._publicKey = null, this._readyState !== mt.Unsupported && xi(() => {
      var e, n, s;
      return ((n = (e = window.phantom) == null ? void 0 : e.solana) == null ? void 0 : n.isPhantom) || ((s = window.solana) == null ? void 0 : s.isPhantom) ? (this._readyState = mt.Installed, this.emit("readyStateChange", this._readyState), !0) : !1;
    });
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get connected() {
    var t;
    return !!((t = this._wallet) != null && t.isConnected);
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    var t;
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== mt.Installed)
        throw new Nn();
      this._connecting = !0;
      const e = ((t = window.phantom) == null ? void 0 : t.solana) || window.solana;
      if (!e.isConnected)
        try {
          await e.connect();
        } catch (s) {
          throw new mn(s == null ? void 0 : s.message, s);
        }
      if (!e.publicKey)
        throw new bo();
      let n;
      try {
        n = new st(e.publicKey.toBytes());
      } catch (s) {
        throw new bn(s == null ? void 0 : s.message, s);
      }
      e.on("disconnect", this._disconnected), e.on("accountChanged", this._accountChanged), this._wallet = e, this._publicKey = n, this.emit("connect", n);
    } catch (e) {
      throw this.emit("error", e), e;
    } finally {
      this._connecting = !1;
    }
  }
  async disconnect() {
    const t = this._wallet;
    if (t) {
      t.off("disconnect", this._disconnected), t.off("accountChanged", this._accountChanged), this._wallet = null, this._publicKey = null;
      try {
        await t.disconnect();
      } catch (e) {
        this.emit("error", new An(e == null ? void 0 : e.message, e));
      }
    }
    this.emit("disconnect");
  }
  async sendTransaction(t, e, n = {}) {
    try {
      const s = this._wallet;
      if (!s)
        throw new ye();
      try {
        const { signers: i, ...c } = n;
        t = await this.prepareTransaction(t, e, c), i != null && i.length && t.partialSign(...i), c.preflightCommitment = c.preflightCommitment || e.commitment;
        const { signature: u } = await s.signAndSendTransaction(t, c);
        return u;
      } catch (i) {
        throw i instanceof Se ? i : new Kr(i == null ? void 0 : i.message, i);
      }
    } catch (s) {
      throw this.emit("error", s), s;
    }
  }
  async signTransaction(t) {
    try {
      const e = this._wallet;
      if (!e)
        throw new ye();
      try {
        return await e.signTransaction(t) || t;
      } catch (n) {
        throw new Oe(n == null ? void 0 : n.message, n);
      }
    } catch (e) {
      throw this.emit("error", e), e;
    }
  }
  async signAllTransactions(t) {
    try {
      const e = this._wallet;
      if (!e)
        throw new ye();
      try {
        return await e.signAllTransactions(t) || t;
      } catch (n) {
        throw new Oe(n == null ? void 0 : n.message, n);
      }
    } catch (e) {
      throw this.emit("error", e), e;
    }
  }
  async signMessage(t) {
    try {
      const e = this._wallet;
      if (!e)
        throw new ye();
      try {
        const { signature: n } = await e.signMessage(t);
        return n;
      } catch (n) {
        throw new bi(n == null ? void 0 : n.message, n);
      }
    } catch (e) {
      throw this.emit("error", e), e;
    }
  }
}
var Hn = gn.exports.Buffer;
function Ad(r) {
  if (r.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), e = 0; e < t.length; e++)
    t[e] = 255;
  for (var n = 0; n < r.length; n++) {
    var s = r.charAt(n), i = s.charCodeAt(0);
    if (t[i] !== 255)
      throw new TypeError(s + " is ambiguous");
    t[i] = n;
  }
  var c = r.length, u = r.charAt(0), p = Math.log(c) / Math.log(256), m = Math.log(256) / Math.log(c);
  function A(I) {
    if ((Array.isArray(I) || I instanceof Uint8Array) && (I = Hn.from(I)), !Hn.isBuffer(I))
      throw new TypeError("Expected Buffer");
    if (I.length === 0)
      return "";
    for (var C = 0, k = 0, R = 0, U = I.length; R !== U && I[R] === 0; )
      R++, C++;
    for (var D = (U - R) * m + 1 >>> 0, L = new Uint8Array(D); R !== U; ) {
      for (var H = I[R], P = 0, Q = D - 1; (H !== 0 || P < k) && Q !== -1; Q--, P++)
        H += 256 * L[Q] >>> 0, L[Q] = H % c >>> 0, H = H / c >>> 0;
      if (H !== 0)
        throw new Error("Non-zero carry");
      k = P, R++;
    }
    for (var W = D - k; W !== D && L[W] === 0; )
      W++;
    for (var Y = u.repeat(C); W < D; ++W)
      Y += r.charAt(L[W]);
    return Y;
  }
  function S(I) {
    if (typeof I != "string")
      throw new TypeError("Expected String");
    if (I.length === 0)
      return Hn.alloc(0);
    for (var C = 0, k = 0, R = 0; I[C] === u; )
      k++, C++;
    for (var U = (I.length - C) * p + 1 >>> 0, D = new Uint8Array(U); I[C]; ) {
      var L = t[I.charCodeAt(C)];
      if (L === 255)
        return;
      for (var H = 0, P = U - 1; (L !== 0 || H < R) && P !== -1; P--, H++)
        L += c * D[P] >>> 0, D[P] = L % 256 >>> 0, L = L / 256 >>> 0;
      if (L !== 0)
        throw new Error("Non-zero carry");
      R = H, C++;
    }
    for (var Q = U - R; Q !== U && D[Q] === 0; )
      Q++;
    var W = Hn.allocUnsafe(k + (U - Q));
    W.fill(0, 0, k);
    for (var Y = k; Q !== U; )
      W[Y++] = D[Q++];
    return W;
  }
  function T(I) {
    var C = S(I);
    if (C)
      return C;
    throw new Error("Non-base" + c + " character");
  }
  return {
    encode: A,
    decodeUnsafe: S,
    decode: T
  };
}
var bd = Ad, xd = bd, Ed = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", cn = xd(Ed);
const vd = "Slope";
class Bd extends Ei {
  constructor(t = {}) {
    super(), this.name = vd, this.url = "https://slope.finance", this.icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iNjQiIGZpbGw9IiM2RTY2RkEiLz4KPHBhdGggZD0iTTI3Ljk0NzUgNTIuMTU5Nkw1MS45ODI2IDI4LjA1NzJMNzIuNjA5OCA3LjY1Mzg5QzczLjg3MzQgNi40MDQwMSA3Ni4wMTc4IDcuMjk5MSA3Ni4wMTc4IDkuMDc2NDJMNzYuMDE4NyA1Mi4xNTlMNTEuOTgzNiA3Ni4xMjY4TDI3Ljk0NzUgNTIuMTU5NloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8zNzk1XzI1NTQzKSIvPgo8cGF0aCBkPSJNMTAwLjA1MyA3NS45OTNMNzYuMDE4IDUxLjk1OEw1MS45ODI5IDc1Ljk5MzFMNTEuOTgyOSAxMTguOTI0QzUxLjk4MjkgMTIwLjcwMyA1NC4xMzEyIDEyMS41OTcgNTUuMzkzNyAxMjAuMzQzTDEwMC4wNTMgNzUuOTkzWiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzM3OTVfMjU1NDMpIi8+CjxwYXRoIGQ9Ik0yNy45NDcgNTIuMTYwMUg0NC42ODM5QzQ4LjcxNDcgNTIuMTYwMSA1MS45ODIyIDU1LjQyNzYgNTEuOTgyMiA1OS40NTgzVjc2LjEyNjlIMzUuMjQ1M0MzMS4yMTQ2IDc2LjEyNjkgMjcuOTQ3IDcyLjg1OTQgMjcuOTQ3IDY4LjgyODdWNTIuMTYwMVoiIGZpbGw9IiNGMUYwRkYiLz4KPHBhdGggZD0iTTc2LjAxNzggNTIuMTYwMUg5Mi43NTQ3Qzk2Ljc4NTUgNTIuMTYwMSAxMDAuMDUzIDU1LjQyNzYgMTAwLjA1MyA1OS40NTgzVjc2LjEyNjlIODMuMzE2MUM3OS4yODU0IDc2LjEyNjkgNzYuMDE3OCA3Mi44NTk0IDc2LjAxNzggNjguODI4N1Y1Mi4xNjAxWiIgZmlsbD0iI0YxRjBGRiIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzM3OTVfMjU1NDMiIHgxPSI1MS45ODMxIiB5MT0iNy4wNzE1NSIgeDI9IjUxLjk4MzEiIHkyPSI3Ni4xMjY4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNBOEFERkYiLz4KPHN0b3Agb2Zmc2V0PSIwLjY0ODU1NiIgc3RvcC1jb2xvcj0id2hpdGUiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzM3OTVfMjU1NDMiIHgxPSI3Ni4wMTgiIHkxPSI1MS45NTgiIHgyPSI3Ni4wMTgiIHkyPSIxMjAuOTI4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4yNjA3ODQiIHN0b3AtY29sb3I9IiNCNkJBRkYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRTRFMkZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==", this.supportedTransactionVersions = null, this._readyState = typeof window > "u" || typeof document > "u" ? mt.Unsupported : mt.NotDetected, this._connecting = !1, this._wallet = null, this._publicKey = null, this._readyState !== mt.Unsupported && xi(() => typeof window.Slope == "function" || window.slopeApp ? (this._readyState = mt.Installed, this.emit("readyStateChange", this._readyState), !0) : !1);
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
      if (this._readyState !== mt.Installed || typeof window.Slope != "function")
        throw new Nn();
      this._connecting = !0;
      const t = new window.Slope();
      let e;
      try {
        ({ data: e } = await t.connect());
      } catch (s) {
        throw new mn(s == null ? void 0 : s.message, s);
      }
      if (!e.publicKey)
        throw new bo();
      let n;
      try {
        n = new st(e.publicKey);
      } catch (s) {
        throw new bn(s == null ? void 0 : s.message, s);
      }
      this._wallet = t, this._publicKey = n, this.emit("connect", n);
    } catch (t) {
      throw this.emit("error", t), t;
    } finally {
      this._connecting = !1;
    }
  }
  async disconnect() {
    const t = this._wallet;
    if (t) {
      this._wallet = null, this._publicKey = null;
      try {
        let e;
        try {
          ({ msg: e } = await t.disconnect());
        } catch (n) {
          throw new An(n == null ? void 0 : n.message, n);
        }
        if (e !== "ok")
          throw new An(e);
      } catch (e) {
        this.emit("error", e);
      }
    }
    this.emit("disconnect");
  }
  async signTransaction(t) {
    try {
      const e = this._wallet;
      if (!e)
        throw new ye();
      try {
        const n = cn.encode(t.serializeMessage()), { msg: s, data: i } = await e.signTransaction(n);
        if (!i.publicKey || !i.signature)
          throw new Oe(s);
        const c = new st(i.publicKey), u = cn.decode(i.signature);
        return t.addSignature(c, u), t;
      } catch (n) {
        throw n instanceof Se ? n : new Oe(n == null ? void 0 : n.message, n);
      }
    } catch (e) {
      throw this.emit("error", e), e;
    }
  }
  async signAllTransactions(t) {
    var e;
    try {
      const n = this._wallet;
      if (!n)
        throw new ye();
      try {
        const s = t.map((m) => cn.encode(m.serializeMessage())), { msg: i, data: c } = await n.signAllTransactions(s), u = t.length;
        if (!c.publicKey || ((e = c.signatures) == null ? void 0 : e.length) !== u)
          throw new Oe(i);
        const p = new st(c.publicKey);
        for (let m = 0; m < u; m++)
          t[m].addSignature(p, cn.decode(c.signatures[m]));
        return t;
      } catch (s) {
        throw s instanceof Se ? s : new Oe(s == null ? void 0 : s.message, s);
      }
    } catch (n) {
      throw this.emit("error", n), n;
    }
  }
  async signMessage(t) {
    try {
      const e = this._wallet;
      if (!e)
        throw new ye();
      try {
        const n = await e.signMessage(t);
        return cn.decode(n.data.signature);
      } catch (n) {
        throw new bi(n == null ? void 0 : n.message, n);
      }
    } catch (e) {
      throw this.emit("error", e), e;
    }
  }
}
const Id = "Solflare";
class Sd extends Ei {
  constructor(t = {}) {
    super(), this.name = Id, this.url = "https://solflare.com", this.icon = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmMxMGIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYjNmMmUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI2LjQ3ODM1IiB4Mj0iMzQuOTEwNyIgeGxpbms6aHJlZj0iI2EiIHkxPSI3LjkyIiB5Mj0iMzMuNjU5MyIvPjxyYWRpYWxHcmFkaWVudCBpZD0iYyIgY3g9IjAiIGN5PSIwIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDQuOTkyMTg4MzIgMTIuMDYzODc5NjMgLTEyLjE4MTEzNjU1IDUuMDQwNzEwNzQgMjIuNTIwMiAyMC42MTgzKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHI9IjEiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggZD0ibTI1LjE3MDggNDcuOTEwNGMuNTI1IDAgLjk1MDcuNDIxLjk1MDcuOTQwM3MtLjQyNTcuOTQwMi0uOTUwNy45NDAyLS45NTA3LS40MjA5LS45NTA3LS45NDAyLjQyNTctLjk0MDMuOTUwNy0uOTQwM3ptLTEuMDMyOC00NC45MTU2NWMuNDY0Ni4wMzgzNi44Mzk4LjM5MDQuOTAyNy44NDY4MWwxLjEzMDcgOC4yMTU3NGMuMzc5OCAyLjcxNDMgMy42NTM1IDMuODkwNCA1LjY3NDMgMi4wNDU5bDExLjMyOTEtMTAuMzExNThjLjI3MzMtLjI0ODczLjY5ODktLjIzMTQ5Ljk1MDcuMDM4NTEuMjMwOS4yNDc3Mi4yMzc5LjYyNjk3LjAxNjEuODgyNzdsLTkuODc5MSAxMS4zOTU4Yy0xLjgxODcgMi4wOTQyLS40NzY4IDUuMzY0MyAyLjI5NTYgNS41OTc4bDguNzE2OC44NDAzYy40MzQxLjA0MTguNzUxNy40MjM0LjcwOTMuODUyNC0uMDM0OS4zNTM3LS4zMDc0LjYzOTUtLjY2MjguNjk0OWwtOS4xNTk0IDEuNDMwMmMtMi42NTkzLjM2MjUtMy44NjM2IDMuNTExNy0yLjEzMzkgNS41NTc2bDMuMjIgMy43OTYxYy4yNTk0LjMwNTguMjE4OC43NjE1LS4wOTA4IDEuMDE3OC0uMjYyMi4yMTcyLS42NDE5LjIyNTYtLjkxMzguMDIwM2wtMy45Njk0LTIuOTk3OGMtMi4xNDIxLTEuNjEwOS01LjIyOTctLjI0MTctNS40NTYxIDIuNDI0M2wtLjg3NDcgMTAuMzk3NmMtLjAzNjIuNDI5NS0uNDE3OC43NDg3LS44NTI1LjcxMy0uMzY5LS4wMzAzLS42NjcxLS4zMDk3LS43MTcxLS42NzIxbC0xLjM4NzEtMTAuMDQzN2MtLjM3MTctMi43MTQ0LTMuNjQ1NC0zLjg5MDQtNS42NzQzLTIuMDQ1OWwtMTIuMDUxOTUgMTAuOTc0Yy0uMjQ5NDcuMjI3MS0uNjM4MDkuMjExNC0uODY4LS4wMzUtLjIxMDk0LS4yMjYyLS4yMTczNS0uNTcyNC0uMDE0OTMtLjgwNmwxMC41MTgxOC0xMi4xMzg1YzEuODE4Ny0yLjA5NDIuNDg0OS01LjM2NDQtMi4yODc2LTUuNTk3OGwtOC43MTg3Mi0uODQwNWMtLjQzNDEzLS4wNDE4LS43NTE3Mi0uNDIzNS0uNzA5MzYtLjg1MjQuMDM0OTMtLjM1MzcuMzA3MzktLjYzOTQuNjYyNy0uNjk1bDkuMTUzMzgtMS40Mjk5YzIuNjU5NC0uMzYyNSAzLjg3MTgtMy41MTE3IDIuMTQyMS01LjU1NzZsLTIuMTkyLTIuNTg0MWMtLjMyMTctLjM3OTItLjI3MTMtLjk0NDMuMTEyNi0xLjI2MjEuMzI1My0uMjY5NC43OTYzLS4yNzk3IDEuMTMzNC0uMDI0OWwyLjY5MTggMi4wMzQ3YzIuMTQyMSAxLjYxMDkgNS4yMjk3LjI0MTcgNS40NTYxLTIuNDI0M2wuNzI0MS04LjU1OTk4Yy4wNDU3LS41NDA4LjUyNjUtLjk0MjU3IDEuMDczOS0uODk3Mzd6bS0yMy4xODczMyAyMC40Mzk2NWMuNTI1MDQgMCAuOTUwNjcuNDIxLjk1MDY3Ljk0MDNzLS40MjU2My45NDAzLS45NTA2Ny45NDAzYy0uNTI1MDQxIDAtLjk1MDY3LS40MjEtLjk1MDY3LS45NDAzcy40MjU2MjktLjk0MDMuOTUwNjctLjk0MDN6bTQ3LjY3OTczLS45NTQ3Yy41MjUgMCAuOTUwNy40MjEuOTUwNy45NDAzcy0uNDI1Ny45NDAyLS45NTA3Ljk0MDItLjk1MDctLjQyMDktLjk1MDctLjk0MDIuNDI1Ny0uOTQwMy45NTA3LS45NDAzem0tMjQuNjI5Ni0yMi40Nzk3Yy41MjUgMCAuOTUwNi40MjA5NzMuOTUwNi45NDAyNyAwIC41MTkzLS40MjU2Ljk0MDI3LS45NTA2Ljk0MDI3LS41MjUxIDAtLjk1MDctLjQyMDk3LS45NTA3LS45NDAyNyAwLS41MTkyOTcuNDI1Ni0uOTQwMjcuOTUwNy0uOTQwMjd6IiBmaWxsPSJ1cmwoI2IpIi8+PHBhdGggZD0ibTI0LjU3MSAzMi43NzkyYzQuOTU5NiAwIDguOTgwMi0zLjk3NjUgOC45ODAyLTguODgxOSAwLTQuOTA1My00LjAyMDYtOC44ODE5LTguOTgwMi04Ljg4MTlzLTguOTgwMiAzLjk3NjYtOC45ODAyIDguODgxOWMwIDQuOTA1NCA0LjAyMDYgOC44ODE5IDguOTgwMiA4Ljg4MTl6IiBmaWxsPSJ1cmwoI2MpIi8+PC9zdmc+", this.supportedTransactionVersions = /* @__PURE__ */ new Set(["legacy", 0]), this._readyState = typeof window > "u" || typeof document > "u" ? mt.Unsupported : mt.Loadable, this._disconnected = () => {
      const e = this._wallet;
      e && (e.off("disconnect", this._disconnected), this._wallet = null, this._publicKey = null, this.emit("error", new Ao()), this.emit("disconnect"));
    }, this._connecting = !1, this._publicKey = null, this._wallet = null, this._config = t, this._readyState !== mt.Unsupported && xi(() => {
      var e;
      return ((e = window.solflare) == null ? void 0 : e.isSolflare) || window.SolflareApp ? (this._readyState = mt.Installed, this.emit("readyStateChange", this._readyState), !0) : !1;
    });
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get connected() {
    var t;
    return !!((t = this._wallet) != null && t.connected);
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== mt.Loadable && this._readyState !== mt.Installed)
        throw new Nn();
      let t;
      try {
        t = (await import("./index.7baa1add.js")).default;
      } catch (s) {
        throw new V0(s == null ? void 0 : s.message, s);
      }
      let e;
      try {
        e = new t({ network: this._config.network });
      } catch (s) {
        throw new Z0(s == null ? void 0 : s.message, s);
      }
      if (this._connecting = !0, !e.connected)
        try {
          await e.connect();
        } catch (s) {
          throw new mn(s == null ? void 0 : s.message, s);
        }
      if (!e.publicKey)
        throw new mn();
      let n;
      try {
        n = new st(e.publicKey.toBytes());
      } catch (s) {
        throw new bn(s == null ? void 0 : s.message, s);
      }
      e.on("disconnect", this._disconnected), this._wallet = e, this._publicKey = n, this.emit("connect", n);
    } catch (t) {
      throw this.emit("error", t), t;
    } finally {
      this._connecting = !1;
    }
  }
  async disconnect() {
    const t = this._wallet;
    if (t) {
      t.off("disconnect", this._disconnected), this._wallet = null, this._publicKey = null;
      try {
        await t.disconnect();
      } catch (e) {
        this.emit("error", new An(e == null ? void 0 : e.message, e));
      }
    }
    this.emit("disconnect");
  }
  async signTransaction(t) {
    try {
      const e = this._wallet;
      if (!e)
        throw new ye();
      try {
        return await e.signTransaction(t) || t;
      } catch (n) {
        throw new Oe(n == null ? void 0 : n.message, n);
      }
    } catch (e) {
      throw this.emit("error", e), e;
    }
  }
  async signAllTransactions(t) {
    try {
      const e = this._wallet;
      if (!e)
        throw new ye();
      try {
        return await e.signAllTransactions(t) || t;
      } catch (n) {
        throw new Oe(n == null ? void 0 : n.message, n);
      }
    } catch (e) {
      throw this.emit("error", e), e;
    }
  }
  async signMessage(t) {
    try {
      const e = this._wallet;
      if (!e)
        throw new ye();
      try {
        return await e.signMessage(t, "utf8");
      } catch (n) {
        throw new bi(n == null ? void 0 : n.message, n);
      }
    } catch (e) {
      throw this.emit("error", e), e;
    }
  }
}
function Md({ children: r }) {
  const t = Us.Mainnet, e = Xe(() => q0(t), [t]), n = Xe(
    () => [
      new md(),
      new wd(),
      new Bd(),
      new Sd({ network: t })
    ],
    [t]
  );
  return /* @__PURE__ */ O.createElement(j0, {
    endpoint: e
  }, /* @__PURE__ */ O.createElement(ed, {
    wallets: n,
    autoConnect: !0
  }, /* @__PURE__ */ O.createElement(od, null, r)));
}
function Ma(r) {
  return `${r.slice(0, 4)}...${r.slice(-4)}`;
}
const _d = {
  ethereum: "ETH",
  solana: "SOL",
  polygon: "MATIC",
  avalanche: "AVAX",
  flow: "FLOW"
};
function kd({
  projectData: r,
  appId: t,
  hasUser: e
}) {
  var C;
  const [n, s] = Ft(!1), [i, c] = Ft(""), { setVisible: u } = Gc(), { connected: p, publicKey: m, signMessage: A, disconnect: S } = Dc(), T = fr(!1), I = Xe(() => {
    var U;
    if (!(r != null && r.wallet))
      return [];
    const { wallet: k } = r;
    c(
      (U = r.userInfo) != null && U.walletAddress ? Ma(r.userInfo.walletAddress) : ""
    );
    const R = [];
    if (k != null && k.isBalanceRequired) {
      const D = /* @__PURE__ */ O.createElement(O.Fragment, null, "Have at least", /* @__PURE__ */ O.createElement("strong", null, " " + k.balance + " " + _d[r.chain] + " "), "in your wallet");
      R.push(D);
    }
    if (k != null && k.isNftRequired) {
      const { nftCollection: D } = k, L = /* @__PURE__ */ O.createElement(O.Fragment, null, "Hold an NFT from", " ", /* @__PURE__ */ O.createElement("strong", null, /* @__PURE__ */ O.createElement("a", {
        href: D == null ? void 0 : D.url,
        target: "_blank",
        rel: "noreferrer"
      }, D == null ? void 0 : D.name)));
      R.push(L);
    }
    return R;
  }, [r]);
  return Ne(() => {
    async function k() {
      if (!(!p || !m || !A || T.current))
        try {
          T.current = !0, s(!0);
          const R = m.toBase58(), { nonce: U } = await Zc({ appId: t, address: R }), D = new TextEncoder().encode(U), L = pd.encode(await A(D));
          await Xc({
            address: R,
            signature: L,
            appId: t
          }), c(Ma(m.toString()));
        } catch (R) {
          S(), R.message !== "User rejected the request." && R.name !== ye.name && console.error("error", R);
        } finally {
          s(!1), T.current = !1;
        }
    }
    k();
  }, [t, s, p, m, A, S]), ((C = r == null ? void 0 : r.wallet) == null ? void 0 : C.required) === !1 ? null : /* @__PURE__ */ O.createElement(Ds, {
    title: "Wallet",
    onClick: () => {
      i || u(!0);
    },
    info: I,
    isLoading: n,
    rightText: i,
    buttonDisabled: !e
  });
}
function Td({
  projectData: r,
  appId: t,
  hasUser: e
}) {
  return /* @__PURE__ */ O.createElement(Md, null, /* @__PURE__ */ O.createElement(kd, {
    projectData: r,
    appId: t,
    hasUser: e
  }));
}
function Cd({
  projectData: r,
  appId: t,
  hasUser: e,
  inputRef: n
}) {
  var T, I, C, k, R, U, D, L, H;
  const [s, i] = Ft(!1), [c, u] = Ft(""), [p, m] = Ft(!1);
  Ne(() => {
    var P;
    m(!!((P = r == null ? void 0 : r.userInfo) != null && P.registered));
  }, [r]);
  const A = async () => {
    var P;
    if (!(!t || !e || !(r != null && r.id) || p))
      try {
        u(""), i(!0);
        const { error: Q } = await Jc({
          appId: t,
          projectId: r.id,
          customField: ((P = n == null ? void 0 : n.current) == null ? void 0 : P.value) || ""
        });
        if (Q)
          return console.error("Register error", Q), u(Q.message);
        m(!0);
      } catch (Q) {
        console.error(Q);
      } finally {
        i(!1);
      }
  }, S = s || !e || ((T = r == null ? void 0 : r.discord) == null ? void 0 : T.enabled) && !((C = (I = r == null ? void 0 : r.userInfo) == null ? void 0 : I.discord) != null && C.username) || ((k = r == null ? void 0 : r.discord2) == null ? void 0 : k.enabled) && !((U = (R = r == null ? void 0 : r.userInfo) == null ? void 0 : R.discord) != null && U.username) || ((D = r == null ? void 0 : r.twitter) == null ? void 0 : D.enabled) && !((H = (L = r == null ? void 0 : r.userInfo) == null ? void 0 : L.twitter) != null && H.username);
  return /* @__PURE__ */ O.createElement(O.Fragment, null, /* @__PURE__ */ O.createElement("button", {
    className: "hypeday-register-button",
    onClick: A,
    disabled: S
  }, s && /* @__PURE__ */ O.createElement("div", {
    className: "hypeday-spinner hypeday-btn-spinner"
  }), /* @__PURE__ */ O.createElement("span", {
    style: { visibility: s ? "hidden" : "initial" }
  }, p ? "Registered! \u{1F389}" : "Register")), !!c && /* @__PURE__ */ O.createElement("span", {
    className: "hypeday-register-error"
  }, c));
}
function Od({
  appId: r,
  projectId: t,
  userToken: e,
  testing: n = !1
}) {
  const [s, i] = Ft(), [c, u] = Ft(!0), [p, m] = Ft(""), A = fr(null), S = Ye(async () => {
    if (!t || !r) {
      console.error("HypeDayReact: projectId and appId props are required.");
      return;
    }
    u(!0), m(""), Vc({ appId: r, projectId: t }).then((T) => i(T)).catch((T) => {
      console.error("HypeDayReact: Error fetching project data", T), m(
        T.message || "Something went wrong. Please check your connection."
      );
    }).finally(() => u(!1));
  }, [r, t]);
  return Ne(() => {
    jc(e);
  }, [e]), Ne(() => {
    Yc(n);
  }, [n]), Ne(() => {
    S();
  }, [S]), c ? /* @__PURE__ */ O.createElement("div", {
    className: "hypeday-wrapper",
    style: { display: "flex", justifyContent: "center" }
  }, /* @__PURE__ */ O.createElement("div", {
    className: "hypeday-spinner"
  })) : p ? /* @__PURE__ */ O.createElement("div", {
    className: "hypeday-wrapper"
  }, /* @__PURE__ */ O.createElement("span", {
    className: "hypeday-error"
  }, p), /* @__PURE__ */ O.createElement("button", {
    className: "hypeday-button",
    onClick: S
  }, "Retry")) : /* @__PURE__ */ O.createElement("div", {
    className: "hypeday-wrapper"
  }, /* @__PURE__ */ O.createElement(eu, {
    projectData: s
  }), /* @__PURE__ */ O.createElement(Td, {
    projectData: s,
    appId: r,
    hasUser: !!e
  }), /* @__PURE__ */ O.createElement(ru, {
    projectData: s,
    appId: r,
    hasUser: !!e
  }), /* @__PURE__ */ O.createElement($c, {
    projectData: s,
    appId: r,
    hasUser: !!e
  }), /* @__PURE__ */ O.createElement(tu, {
    projectData: s,
    ref: A
  }), /* @__PURE__ */ O.createElement(Cd, {
    projectData: s,
    appId: r,
    hasUser: !!e,
    inputRef: A
  }), /* @__PURE__ */ O.createElement("div", {
    style: {
      fontSize: "0.8em",
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      paddingTop: 12
    }
  }, /* @__PURE__ */ O.createElement("span", null, "Powered by", " ", /* @__PURE__ */ O.createElement("a", {
    href: "https://hype.day",
    target: "_blank",
    rel: "noreferrer",
    style: { textDecoration: "none" }
  }, "Hype.Day"))));
}
export {
  nl as E,
  Od as H,
  st as P,
  gn as s,
  Cl as v
};
