import { B as x } from "./bn.417b6381.js";
import { a as Qn, h as he } from "./hash.dd367759.js";
import "./index.0b70358b.js";
import "react";
import "react-dom";
const Yn = "logger/5.7.0";
let ur = !1, hr = !1;
const ot = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
let dr = ot.default, Bt = null;
function Wn() {
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
const gr = Wn();
var Wt;
(function(n) {
  n.DEBUG = "DEBUG", n.INFO = "INFO", n.WARNING = "WARNING", n.ERROR = "ERROR", n.OFF = "OFF";
})(Wt || (Wt = {}));
var le;
(function(n) {
  n.UNKNOWN_ERROR = "UNKNOWN_ERROR", n.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", n.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", n.NETWORK_ERROR = "NETWORK_ERROR", n.SERVER_ERROR = "SERVER_ERROR", n.TIMEOUT = "TIMEOUT", n.BUFFER_OVERRUN = "BUFFER_OVERRUN", n.NUMERIC_FAULT = "NUMERIC_FAULT", n.MISSING_NEW = "MISSING_NEW", n.INVALID_ARGUMENT = "INVALID_ARGUMENT", n.MISSING_ARGUMENT = "MISSING_ARGUMENT", n.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", n.CALL_EXCEPTION = "CALL_EXCEPTION", n.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", n.NONCE_EXPIRED = "NONCE_EXPIRED", n.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", n.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", n.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", n.ACTION_REJECTED = "ACTION_REJECTED";
})(le || (le = {}));
const pr = "0123456789abcdef";
class h {
  constructor(e) {
    Object.defineProperty(this, "version", {
      enumerable: !0,
      value: e,
      writable: !1
    });
  }
  _log(e, t) {
    const r = e.toLowerCase();
    ot[r] == null && this.throwArgumentError("invalid log level name", "logLevel", e), !(dr > ot[r]) && console.log.apply(console, t);
  }
  debug(...e) {
    this._log(h.levels.DEBUG, e);
  }
  info(...e) {
    this._log(h.levels.INFO, e);
  }
  warn(...e) {
    this._log(h.levels.WARNING, e);
  }
  makeError(e, t, r) {
    if (hr)
      return this.makeError("censored error", t, {});
    t || (t = h.errors.UNKNOWN_ERROR), r || (r = {});
    const i = [];
    Object.keys(r).forEach((c) => {
      const l = r[c];
      try {
        if (l instanceof Uint8Array) {
          let f = "";
          for (let u = 0; u < l.length; u++)
            f += pr[l[u] >> 4], f += pr[l[u] & 15];
          i.push(c + "=Uint8Array(0x" + f + ")");
        } else
          i.push(c + "=" + JSON.stringify(l));
      } catch {
        i.push(c + "=" + JSON.stringify(r[c].toString()));
      }
    }), i.push(`code=${t}`), i.push(`version=${this.version}`);
    const s = e;
    let o = "";
    switch (t) {
      case le.NUMERIC_FAULT: {
        o = "NUMERIC_FAULT";
        const c = e;
        switch (c) {
          case "overflow":
          case "underflow":
          case "division-by-zero":
            o += "-" + c;
            break;
          case "negative-power":
          case "negative-width":
            o += "-unsupported";
            break;
          case "unbound-bitwise-result":
            o += "-unbound-result";
            break;
        }
        break;
      }
      case le.CALL_EXCEPTION:
      case le.INSUFFICIENT_FUNDS:
      case le.MISSING_NEW:
      case le.NONCE_EXPIRED:
      case le.REPLACEMENT_UNDERPRICED:
      case le.TRANSACTION_REPLACED:
      case le.UNPREDICTABLE_GAS_LIMIT:
        o = t;
        break;
    }
    o && (e += " [ See: https://links.ethers.org/v5-errors-" + o + " ]"), i.length && (e += " (" + i.join(", ") + ")");
    const a = new Error(e);
    return a.reason = s, a.code = t, Object.keys(r).forEach(function(c) {
      a[c] = r[c];
    }), a;
  }
  throwError(e, t, r) {
    throw this.makeError(e, t, r);
  }
  throwArgumentError(e, t, r) {
    return this.throwError(e, h.errors.INVALID_ARGUMENT, {
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
    gr && this.throwError("platform missing String.prototype.normalize", h.errors.UNSUPPORTED_OPERATION, {
      operation: "String.prototype.normalize",
      form: gr
    });
  }
  checkSafeUint53(e, t) {
    typeof e == "number" && (t == null && (t = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(t, h.errors.NUMERIC_FAULT, {
      operation: "checkSafeInteger",
      fault: "out-of-safe-range",
      value: e
    }), e % 1 && this.throwError(t, h.errors.NUMERIC_FAULT, {
      operation: "checkSafeInteger",
      fault: "non-integer",
      value: e
    }));
  }
  checkArgumentCount(e, t, r) {
    r ? r = ": " + r : r = "", e < t && this.throwError("missing argument" + r, h.errors.MISSING_ARGUMENT, {
      count: e,
      expectedCount: t
    }), e > t && this.throwError("too many arguments" + r, h.errors.UNEXPECTED_ARGUMENT, {
      count: e,
      expectedCount: t
    });
  }
  checkNew(e, t) {
    (e === Object || e == null) && this.throwError("missing new", h.errors.MISSING_NEW, { name: t.name });
  }
  checkAbstract(e, t) {
    e === t ? this.throwError("cannot instantiate abstract class " + JSON.stringify(t.name) + " directly; use a sub-class", h.errors.UNSUPPORTED_OPERATION, { name: e.name, operation: "new" }) : (e === Object || e == null) && this.throwError("missing new", h.errors.MISSING_NEW, { name: t.name });
  }
  static globalLogger() {
    return Bt || (Bt = new h(Yn)), Bt;
  }
  static setCensorship(e, t) {
    if (!e && t && this.globalLogger().throwError("cannot permanently disable censorship", h.errors.UNSUPPORTED_OPERATION, {
      operation: "setCensorship"
    }), ur) {
      if (!e)
        return;
      this.globalLogger().throwError("error censorship permanent", h.errors.UNSUPPORTED_OPERATION, {
        operation: "setCensorship"
      });
    }
    hr = !!e, ur = !!t;
  }
  static setLogLevel(e) {
    const t = ot[e.toLowerCase()];
    if (t == null) {
      h.globalLogger().warn("invalid log level - " + e);
      return;
    }
    dr = t;
  }
  static from(e) {
    return new h(e);
  }
}
h.errors = le;
h.levels = Wt;
const Xn = "bytes/5.7.0", O = new h(Xn);
function fn(n) {
  return !!n.toHexString;
}
function Ue(n) {
  return n.slice || (n.slice = function() {
    const e = Array.prototype.slice.call(arguments);
    return Ue(new Uint8Array(Array.prototype.slice.apply(n, e)));
  }), n;
}
function tr(n) {
  return S(n) && !(n.length % 2) || bt(n);
}
function mr(n) {
  return typeof n == "number" && n == n && n % 1 === 0;
}
function bt(n) {
  if (n == null)
    return !1;
  if (n.constructor === Uint8Array)
    return !0;
  if (typeof n == "string" || !mr(n.length) || n.length < 0)
    return !1;
  for (let e = 0; e < n.length; e++) {
    const t = n[e];
    if (!mr(t) || t < 0 || t >= 256)
      return !1;
  }
  return !0;
}
function P(n, e) {
  if (e || (e = {}), typeof n == "number") {
    O.checkSafeUint53(n, "invalid arrayify value");
    const t = [];
    for (; n; )
      t.unshift(n & 255), n = parseInt(String(n / 256));
    return t.length === 0 && t.push(0), Ue(new Uint8Array(t));
  }
  if (e.allowMissingPrefix && typeof n == "string" && n.substring(0, 2) !== "0x" && (n = "0x" + n), fn(n) && (n = n.toHexString()), S(n)) {
    let t = n.substring(2);
    t.length % 2 && (e.hexPad === "left" ? t = "0" + t : e.hexPad === "right" ? t += "0" : O.throwArgumentError("hex data is odd-length", "value", n));
    const r = [];
    for (let i = 0; i < t.length; i += 2)
      r.push(parseInt(t.substring(i, i + 2), 16));
    return Ue(new Uint8Array(r));
  }
  return bt(n) ? Ue(new Uint8Array(n)) : O.throwArgumentError("invalid arrayify value", "value", n);
}
function _e(n) {
  const e = n.map((i) => P(i)), t = e.reduce((i, s) => i + s.length, 0), r = new Uint8Array(t);
  return e.reduce((i, s) => (r.set(s, i), i + s.length), 0), Ue(r);
}
function Me(n) {
  let e = P(n);
  if (e.length === 0)
    return e;
  let t = 0;
  for (; t < e.length && e[t] === 0; )
    t++;
  return t && (e = e.slice(t)), e;
}
function Vn(n, e) {
  n = P(n), n.length > e && O.throwArgumentError("value out of range", "value", arguments[0]);
  const t = new Uint8Array(e);
  return t.set(n, e - n.length), Ue(t);
}
function S(n, e) {
  return !(typeof n != "string" || !n.match(/^0x[0-9A-Fa-f]*$/) || e && n.length !== 2 + 2 * e);
}
const Ot = "0123456789abcdef";
function N(n, e) {
  if (e || (e = {}), typeof n == "number") {
    O.checkSafeUint53(n, "invalid hexlify value");
    let t = "";
    for (; n; )
      t = Ot[n & 15] + t, n = Math.floor(n / 16);
    return t.length ? (t.length % 2 && (t = "0" + t), "0x" + t) : "0x00";
  }
  if (typeof n == "bigint")
    return n = n.toString(16), n.length % 2 ? "0x0" + n : "0x" + n;
  if (e.allowMissingPrefix && typeof n == "string" && n.substring(0, 2) !== "0x" && (n = "0x" + n), fn(n))
    return n.toHexString();
  if (S(n))
    return n.length % 2 && (e.hexPad === "left" ? n = "0x0" + n.substring(2) : e.hexPad === "right" ? n += "0" : O.throwArgumentError("hex data is odd-length", "value", n)), n.toLowerCase();
  if (bt(n)) {
    let t = "0x";
    for (let r = 0; r < n.length; r++) {
      let i = n[r];
      t += Ot[(i & 240) >> 4] + Ot[i & 15];
    }
    return t;
  }
  return O.throwArgumentError("invalid hexlify value", "value", n);
}
function Re(n) {
  if (typeof n != "string")
    n = N(n);
  else if (!S(n) || n.length % 2)
    return null;
  return (n.length - 2) / 2;
}
function K(n, e, t) {
  return typeof n != "string" ? n = N(n) : (!S(n) || n.length % 2) && O.throwArgumentError("invalid hexData", "value", n), e = 2 + 2 * e, t != null ? "0x" + n.substring(e, 2 + 2 * t) : "0x" + n.substring(e);
}
function Z(n) {
  let e = "0x";
  return n.forEach((t) => {
    e += N(t).substring(2);
  }), e;
}
function Et(n) {
  const e = Zn(N(n, { hexPad: "left" }));
  return e === "0x" ? "0x0" : e;
}
function Zn(n) {
  typeof n != "string" && (n = N(n)), S(n) || O.throwArgumentError("invalid hex string", "value", n), n = n.substring(2);
  let e = 0;
  for (; e < n.length && n[e] === "0"; )
    e++;
  return "0x" + n.substring(e);
}
function D(n, e) {
  for (typeof n != "string" ? n = N(n) : S(n) || O.throwArgumentError("invalid hex string", "value", n), n.length > 2 * e + 2 && O.throwArgumentError("value out of range", "value", arguments[1]); n.length < 2 * e + 2; )
    n = "0x0" + n.substring(2);
  return n;
}
function kt(n) {
  const e = {
    r: "0x",
    s: "0x",
    _vs: "0x",
    recoveryParam: 0,
    v: 0,
    yParityAndS: "0x",
    compact: "0x"
  };
  if (tr(n)) {
    let t = P(n);
    t.length === 64 ? (e.v = 27 + (t[32] >> 7), t[32] &= 127, e.r = N(t.slice(0, 32)), e.s = N(t.slice(32, 64))) : t.length === 65 ? (e.r = N(t.slice(0, 32)), e.s = N(t.slice(32, 64)), e.v = t[64]) : O.throwArgumentError("invalid signature string", "signature", n), e.v < 27 && (e.v === 0 || e.v === 1 ? e.v += 27 : O.throwArgumentError("signature invalid v byte", "signature", n)), e.recoveryParam = 1 - e.v % 2, e.recoveryParam && (t[32] |= 128), e._vs = N(t.slice(32, 64));
  } else {
    if (e.r = n.r, e.s = n.s, e.v = n.v, e.recoveryParam = n.recoveryParam, e._vs = n._vs, e._vs != null) {
      const i = Vn(P(e._vs), 32);
      e._vs = N(i);
      const s = i[0] >= 128 ? 1 : 0;
      e.recoveryParam == null ? e.recoveryParam = s : e.recoveryParam !== s && O.throwArgumentError("signature recoveryParam mismatch _vs", "signature", n), i[0] &= 127;
      const o = N(i);
      e.s == null ? e.s = o : e.s !== o && O.throwArgumentError("signature v mismatch _vs", "signature", n);
    }
    if (e.recoveryParam == null)
      e.v == null ? O.throwArgumentError("signature missing v and recoveryParam", "signature", n) : e.v === 0 || e.v === 1 ? e.recoveryParam = e.v : e.recoveryParam = 1 - e.v % 2;
    else if (e.v == null)
      e.v = 27 + e.recoveryParam;
    else {
      const i = e.v === 0 || e.v === 1 ? e.v : 1 - e.v % 2;
      e.recoveryParam !== i && O.throwArgumentError("signature recoveryParam mismatch v", "signature", n);
    }
    e.r == null || !S(e.r) ? O.throwArgumentError("signature missing or invalid r", "signature", n) : e.r = D(e.r, 32), e.s == null || !S(e.s) ? O.throwArgumentError("signature missing or invalid s", "signature", n) : e.s = D(e.s, 32);
    const t = P(e.s);
    t[0] >= 128 && O.throwArgumentError("signature s out of range", "signature", n), e.recoveryParam && (t[0] |= 128);
    const r = N(t);
    e._vs && (S(e._vs) || O.throwArgumentError("signature invalid _vs", "signature", n), e._vs = D(e._vs, 32)), e._vs == null ? e._vs = r : e._vs !== r && O.throwArgumentError("signature _vs mismatch v and s", "signature", n);
  }
  return e.yParityAndS = e._vs, e.compact = e.r + e.yParityAndS.substring(2), e;
}
const $n = "bignumber/5.7.0";
var dt = x.BN;
const pe = new h($n), Ut = {}, Ar = 9007199254740991;
let vr = !1;
class w {
  constructor(e, t) {
    e !== Ut && pe.throwError("cannot call constructor directly; use BigNumber.from", h.errors.UNSUPPORTED_OPERATION, {
      operation: "new (BigNumber)"
    }), this._hex = t, this._isBigNumber = !0, Object.freeze(this);
  }
  fromTwos(e) {
    return Q(R(this).fromTwos(e));
  }
  toTwos(e) {
    return Q(R(this).toTwos(e));
  }
  abs() {
    return this._hex[0] === "-" ? w.from(this._hex.substring(1)) : this;
  }
  add(e) {
    return Q(R(this).add(R(e)));
  }
  sub(e) {
    return Q(R(this).sub(R(e)));
  }
  div(e) {
    return w.from(e).isZero() && ee("division-by-zero", "div"), Q(R(this).div(R(e)));
  }
  mul(e) {
    return Q(R(this).mul(R(e)));
  }
  mod(e) {
    const t = R(e);
    return t.isNeg() && ee("division-by-zero", "mod"), Q(R(this).umod(t));
  }
  pow(e) {
    const t = R(e);
    return t.isNeg() && ee("negative-power", "pow"), Q(R(this).pow(t));
  }
  and(e) {
    const t = R(e);
    return (this.isNegative() || t.isNeg()) && ee("unbound-bitwise-result", "and"), Q(R(this).and(t));
  }
  or(e) {
    const t = R(e);
    return (this.isNegative() || t.isNeg()) && ee("unbound-bitwise-result", "or"), Q(R(this).or(t));
  }
  xor(e) {
    const t = R(e);
    return (this.isNegative() || t.isNeg()) && ee("unbound-bitwise-result", "xor"), Q(R(this).xor(t));
  }
  mask(e) {
    return (this.isNegative() || e < 0) && ee("negative-width", "mask"), Q(R(this).maskn(e));
  }
  shl(e) {
    return (this.isNegative() || e < 0) && ee("negative-width", "shl"), Q(R(this).shln(e));
  }
  shr(e) {
    return (this.isNegative() || e < 0) && ee("negative-width", "shr"), Q(R(this).shrn(e));
  }
  eq(e) {
    return R(this).eq(R(e));
  }
  lt(e) {
    return R(this).lt(R(e));
  }
  lte(e) {
    return R(this).lte(R(e));
  }
  gt(e) {
    return R(this).gt(R(e));
  }
  gte(e) {
    return R(this).gte(R(e));
  }
  isNegative() {
    return this._hex[0] === "-";
  }
  isZero() {
    return R(this).isZero();
  }
  toNumber() {
    try {
      return R(this).toNumber();
    } catch {
      ee("overflow", "toNumber", this.toString());
    }
    return null;
  }
  toBigInt() {
    try {
      return BigInt(this.toString());
    } catch {
    }
    return pe.throwError("this platform does not support BigInt", h.errors.UNSUPPORTED_OPERATION, {
      value: this.toString()
    });
  }
  toString() {
    return arguments.length > 0 && (arguments[0] === 10 ? vr || (vr = !0, pe.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : arguments[0] === 16 ? pe.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", h.errors.UNEXPECTED_ARGUMENT, {}) : pe.throwError("BigNumber.toString does not accept parameters", h.errors.UNEXPECTED_ARGUMENT, {})), R(this).toString(10);
  }
  toHexString() {
    return this._hex;
  }
  toJSON(e) {
    return { type: "BigNumber", hex: this.toHexString() };
  }
  static from(e) {
    if (e instanceof w)
      return e;
    if (typeof e == "string")
      return e.match(/^-?0x[0-9a-f]+$/i) ? new w(Ut, We(e)) : e.match(/^-?[0-9]+$/) ? new w(Ut, We(new dt(e))) : pe.throwArgumentError("invalid BigNumber string", "value", e);
    if (typeof e == "number")
      return e % 1 && ee("underflow", "BigNumber.from", e), (e >= Ar || e <= -Ar) && ee("overflow", "BigNumber.from", e), w.from(String(e));
    const t = e;
    if (typeof t == "bigint")
      return w.from(t.toString());
    if (bt(t))
      return w.from(N(t));
    if (t)
      if (t.toHexString) {
        const r = t.toHexString();
        if (typeof r == "string")
          return w.from(r);
      } else {
        let r = t._hex;
        if (r == null && t.type === "BigNumber" && (r = t.hex), typeof r == "string" && (S(r) || r[0] === "-" && S(r.substring(1))))
          return w.from(r);
      }
    return pe.throwArgumentError("invalid BigNumber value", "value", e);
  }
  static isBigNumber(e) {
    return !!(e && e._isBigNumber);
  }
}
function We(n) {
  if (typeof n != "string")
    return We(n.toString(16));
  if (n[0] === "-")
    return n = n.substring(1), n[0] === "-" && pe.throwArgumentError("invalid hex", "value", n), n = We(n), n === "0x00" ? n : "-" + n;
  if (n.substring(0, 2) !== "0x" && (n = "0x" + n), n === "0x")
    return "0x00";
  for (n.length % 2 && (n = "0x0" + n.substring(2)); n.length > 4 && n.substring(0, 4) === "0x00"; )
    n = "0x" + n.substring(4);
  return n;
}
function Q(n) {
  return w.from(We(n));
}
function R(n) {
  const e = w.from(n).toHexString();
  return e[0] === "-" ? new dt("-" + e.substring(3), 16) : new dt(e.substring(2), 16);
}
function ee(n, e, t) {
  const r = { fault: n, operation: e };
  return t != null && (r.value = t), pe.throwError(n, h.errors.NUMERIC_FAULT, r);
}
function ei(n) {
  return new dt(n, 36).toString(16);
}
const ti = "properties/5.7.0";
var ri = globalThis && globalThis.__awaiter || function(n, e, t, r) {
  function i(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function a(f) {
      try {
        l(r.next(f));
      } catch (u) {
        o(u);
      }
    }
    function c(f) {
      try {
        l(r.throw(f));
      } catch (u) {
        o(u);
      }
    }
    function l(f) {
      f.done ? s(f.value) : i(f.value).then(a, c);
    }
    l((r = r.apply(n, e || [])).next());
  });
};
const gt = new h(ti);
function y(n, e, t) {
  Object.defineProperty(n, e, {
    enumerable: !0,
    value: t,
    writable: !1
  });
}
function Ee(n, e) {
  for (let t = 0; t < 32; t++) {
    if (n[e])
      return n[e];
    if (!n.prototype || typeof n.prototype != "object")
      break;
    n = Object.getPrototypeOf(n.prototype).constructor;
  }
  return null;
}
function q(n) {
  return ri(this, void 0, void 0, function* () {
    const e = Object.keys(n).map((r) => {
      const i = n[r];
      return Promise.resolve(i).then((s) => ({ key: r, value: s }));
    });
    return (yield Promise.all(e)).reduce((r, i) => (r[i.key] = i.value, r), {});
  });
}
function ni(n, e) {
  (!n || typeof n != "object") && gt.throwArgumentError("invalid object", "object", n), Object.keys(n).forEach((t) => {
    e[t] || gt.throwArgumentError("invalid object key - " + t, "transaction:" + t, n);
  });
}
function F(n) {
  const e = {};
  for (const t in n)
    e[t] = n[t];
  return e;
}
const ii = { bigint: !0, boolean: !0, function: !0, number: !0, string: !0 };
function un(n) {
  if (n == null || ii[typeof n])
    return !0;
  if (Array.isArray(n) || typeof n == "object") {
    if (!Object.isFrozen(n))
      return !1;
    const e = Object.keys(n);
    for (let t = 0; t < e.length; t++) {
      let r = null;
      try {
        r = n[e[t]];
      } catch {
        continue;
      }
      if (!un(r))
        return !1;
    }
    return !0;
  }
  return gt.throwArgumentError(`Cannot deepCopy ${typeof n}`, "object", n);
}
function si(n) {
  if (un(n))
    return n;
  if (Array.isArray(n))
    return Object.freeze(n.map((e) => te(e)));
  if (typeof n == "object") {
    const e = {};
    for (const t in n) {
      const r = n[t];
      r !== void 0 && y(e, t, te(r));
    }
    return e;
  }
  return gt.throwArgumentError(`Cannot deepCopy ${typeof n}`, "object", n);
}
function te(n) {
  return si(n);
}
class oi {
  constructor(e) {
    for (const t in e)
      this[t] = te(e[t]);
  }
}
const ai = "abstract-provider/5.7.0";
var ci = globalThis && globalThis.__awaiter || function(n, e, t, r) {
  function i(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function a(f) {
      try {
        l(r.next(f));
      } catch (u) {
        o(u);
      }
    }
    function c(f) {
      try {
        l(r.throw(f));
      } catch (u) {
        o(u);
      }
    }
    function l(f) {
      f.done ? s(f.value) : i(f.value).then(a, c);
    }
    l((r = r.apply(n, e || [])).next());
  });
};
const li = new h(ai);
class fi extends oi {
  static isForkEvent(e) {
    return !!(e && e._isForkEvent);
  }
}
class Nt {
  constructor() {
    li.checkAbstract(new.target, Nt), y(this, "_isProvider", !0);
  }
  getFeeData() {
    return ci(this, void 0, void 0, function* () {
      const { block: e, gasPrice: t } = yield q({
        block: this.getBlock("latest"),
        gasPrice: this.getGasPrice().catch((o) => null)
      });
      let r = null, i = null, s = null;
      return e && e.baseFeePerGas && (r = e.baseFeePerGas, s = w.from("1500000000"), i = e.baseFeePerGas.mul(2).add(s)), { lastBaseFeePerGas: r, maxFeePerGas: i, maxPriorityFeePerGas: s, gasPrice: t };
    });
  }
  addListener(e, t) {
    return this.on(e, t);
  }
  removeListener(e, t) {
    return this.off(e, t);
  }
  static isProvider(e) {
    return !!(e && e._isProvider);
  }
}
const ui = "networks/5.7.1", wr = new h(ui);
function hi(n) {
  return n && typeof n.renetwork == "function";
}
function Ae(n) {
  const e = function(t, r) {
    r == null && (r = {});
    const i = [];
    if (t.InfuraProvider && r.infura !== "-")
      try {
        i.push(new t.InfuraProvider(n, r.infura));
      } catch {
      }
    if (t.EtherscanProvider && r.etherscan !== "-")
      try {
        i.push(new t.EtherscanProvider(n, r.etherscan));
      } catch {
      }
    if (t.AlchemyProvider && r.alchemy !== "-")
      try {
        i.push(new t.AlchemyProvider(n, r.alchemy));
      } catch {
      }
    if (t.PocketProvider && r.pocket !== "-") {
      const s = ["goerli", "ropsten", "rinkeby", "sepolia"];
      try {
        const o = new t.PocketProvider(n, r.pocket);
        o.network && s.indexOf(o.network.name) === -1 && i.push(o);
      } catch {
      }
    }
    if (t.CloudflareProvider && r.cloudflare !== "-")
      try {
        i.push(new t.CloudflareProvider(n));
      } catch {
      }
    if (t.AnkrProvider && r.ankr !== "-")
      try {
        const s = ["ropsten"], o = new t.AnkrProvider(n, r.ankr);
        o.network && s.indexOf(o.network.name) === -1 && i.push(o);
      } catch {
      }
    if (i.length === 0)
      return null;
    if (t.FallbackProvider) {
      let s = 1;
      return r.quorum != null ? s = r.quorum : n === "homestead" && (s = 2), new t.FallbackProvider(i, s);
    }
    return i[0];
  };
  return e.renetwork = function(t) {
    return Ae(t);
  }, e;
}
function pt(n, e) {
  const t = function(r, i) {
    return r.JsonRpcProvider ? new r.JsonRpcProvider(n, e) : null;
  };
  return t.renetwork = function(r) {
    return pt(n, r);
  }, t;
}
const yr = {
  chainId: 1,
  ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
  name: "homestead",
  _defaultProvider: Ae("homestead")
}, br = {
  chainId: 3,
  ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
  name: "ropsten",
  _defaultProvider: Ae("ropsten")
}, Er = {
  chainId: 63,
  name: "classicMordor",
  _defaultProvider: pt("https://www.ethercluster.com/mordor", "classicMordor")
}, $e = {
  unspecified: { chainId: 0, name: "unspecified" },
  homestead: yr,
  mainnet: yr,
  morden: { chainId: 2, name: "morden" },
  ropsten: br,
  testnet: br,
  rinkeby: {
    chainId: 4,
    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    name: "rinkeby",
    _defaultProvider: Ae("rinkeby")
  },
  kovan: {
    chainId: 42,
    name: "kovan",
    _defaultProvider: Ae("kovan")
  },
  goerli: {
    chainId: 5,
    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    name: "goerli",
    _defaultProvider: Ae("goerli")
  },
  kintsugi: { chainId: 1337702, name: "kintsugi" },
  sepolia: {
    chainId: 11155111,
    name: "sepolia",
    _defaultProvider: Ae("sepolia")
  },
  classic: {
    chainId: 61,
    name: "classic",
    _defaultProvider: pt("https://www.ethercluster.com/etc", "classic")
  },
  classicMorden: { chainId: 62, name: "classicMorden" },
  classicMordor: Er,
  classicTestnet: Er,
  classicKotti: {
    chainId: 6,
    name: "classicKotti",
    _defaultProvider: pt("https://www.ethercluster.com/kotti", "classicKotti")
  },
  xdai: { chainId: 100, name: "xdai" },
  matic: {
    chainId: 137,
    name: "matic",
    _defaultProvider: Ae("matic")
  },
  maticmum: { chainId: 80001, name: "maticmum" },
  optimism: {
    chainId: 10,
    name: "optimism",
    _defaultProvider: Ae("optimism")
  },
  "optimism-kovan": { chainId: 69, name: "optimism-kovan" },
  "optimism-goerli": { chainId: 420, name: "optimism-goerli" },
  arbitrum: { chainId: 42161, name: "arbitrum" },
  "arbitrum-rinkeby": { chainId: 421611, name: "arbitrum-rinkeby" },
  "arbitrum-goerli": { chainId: 421613, name: "arbitrum-goerli" },
  bnb: { chainId: 56, name: "bnb" },
  bnbt: { chainId: 97, name: "bnbt" }
};
function hn(n) {
  if (n == null)
    return null;
  if (typeof n == "number") {
    for (const r in $e) {
      const i = $e[r];
      if (i.chainId === n)
        return {
          name: i.name,
          chainId: i.chainId,
          ensAddress: i.ensAddress || null,
          _defaultProvider: i._defaultProvider || null
        };
    }
    return {
      chainId: n,
      name: "unknown"
    };
  }
  if (typeof n == "string") {
    const r = $e[n];
    return r == null ? null : {
      name: r.name,
      chainId: r.chainId,
      ensAddress: r.ensAddress,
      _defaultProvider: r._defaultProvider || null
    };
  }
  const e = $e[n.name];
  if (!e)
    return typeof n.chainId != "number" && wr.throwArgumentError("invalid network chainId", "network", n), n;
  n.chainId !== 0 && n.chainId !== e.chainId && wr.throwArgumentError("network chainId mismatch", "network", n);
  let t = n._defaultProvider || null;
  return t == null && e._defaultProvider && (hi(e._defaultProvider) ? t = e._defaultProvider.renetwork(n) : t = e._defaultProvider), {
    name: n.name,
    chainId: e.chainId,
    ensAddress: n.ensAddress || e.ensAddress || null,
    _defaultProvider: t
  };
}
function dn(n) {
  n = atob(n);
  const e = [];
  for (let t = 0; t < n.length; t++)
    e.push(n.charCodeAt(t));
  return P(e);
}
function gn(n) {
  n = P(n);
  let e = "";
  for (let t = 0; t < n.length; t++)
    e += String.fromCharCode(n[t]);
  return btoa(e);
}
class pn {
  constructor(e) {
    y(this, "alphabet", e), y(this, "base", e.length), y(this, "_alphabetMap", {}), y(this, "_leader", e.charAt(0));
    for (let t = 0; t < e.length; t++)
      this._alphabetMap[e.charAt(t)] = t;
  }
  encode(e) {
    let t = P(e);
    if (t.length === 0)
      return "";
    let r = [0];
    for (let s = 0; s < t.length; ++s) {
      let o = t[s];
      for (let a = 0; a < r.length; ++a)
        o += r[a] << 8, r[a] = o % this.base, o = o / this.base | 0;
      for (; o > 0; )
        r.push(o % this.base), o = o / this.base | 0;
    }
    let i = "";
    for (let s = 0; t[s] === 0 && s < t.length - 1; ++s)
      i += this._leader;
    for (let s = r.length - 1; s >= 0; --s)
      i += this.alphabet[r[s]];
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
      let s = i;
      for (let o = 0; o < t.length; ++o)
        s += t[o] * this.base, t[o] = s & 255, s >>= 8;
      for (; s > 0; )
        t.push(s & 255), s >>= 8;
    }
    for (let r = 0; e[r] === this._leader && r < e.length - 1; ++r)
      t.push(0);
    return P(new Uint8Array(t.reverse()));
  }
}
new pn("abcdefghijklmnopqrstuvwxyz234567");
const Xt = new pn("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"), di = "0x0000000000000000000000000000000000000000", gi = /* @__PURE__ */ w.from(0), pi = "0x0000000000000000000000000000000000000000000000000000000000000000";
function G(n) {
  return "0x" + Qn.keccak_256(P(n));
}
const mi = "strings/5.7.0", mn = new h(mi);
var Xe;
(function(n) {
  n.current = "", n.NFC = "NFC", n.NFD = "NFD", n.NFKC = "NFKC", n.NFKD = "NFKD";
})(Xe || (Xe = {}));
var X;
(function(n) {
  n.UNEXPECTED_CONTINUE = "unexpected continuation byte", n.BAD_PREFIX = "bad codepoint prefix", n.OVERRUN = "string overrun", n.MISSING_CONTINUE = "missing continuation byte", n.OUT_OF_RANGE = "out of UTF-8 range", n.UTF16_SURROGATE = "UTF-16 surrogate", n.OVERLONG = "overlong representation";
})(X || (X = {}));
function Ai(n, e, t, r, i) {
  return mn.throwArgumentError(`invalid codepoint at offset ${e}; ${n}`, "bytes", t);
}
function An(n, e, t, r, i) {
  if (n === X.BAD_PREFIX || n === X.UNEXPECTED_CONTINUE) {
    let s = 0;
    for (let o = e + 1; o < t.length && t[o] >> 6 === 2; o++)
      s++;
    return s;
  }
  return n === X.OVERRUN ? t.length - e - 1 : 0;
}
function vi(n, e, t, r, i) {
  return n === X.OVERLONG ? (r.push(i), 0) : (r.push(65533), An(n, e, t));
}
const wi = Object.freeze({
  error: Ai,
  ignore: An,
  replace: vi
});
function vn(n, e) {
  e == null && (e = wi.error), n = P(n);
  const t = [];
  let r = 0;
  for (; r < n.length; ) {
    const i = n[r++];
    if (i >> 7 === 0) {
      t.push(i);
      continue;
    }
    let s = null, o = null;
    if ((i & 224) === 192)
      s = 1, o = 127;
    else if ((i & 240) === 224)
      s = 2, o = 2047;
    else if ((i & 248) === 240)
      s = 3, o = 65535;
    else {
      (i & 192) === 128 ? r += e(X.UNEXPECTED_CONTINUE, r - 1, n, t) : r += e(X.BAD_PREFIX, r - 1, n, t);
      continue;
    }
    if (r - 1 + s >= n.length) {
      r += e(X.OVERRUN, r - 1, n, t);
      continue;
    }
    let a = i & (1 << 8 - s - 1) - 1;
    for (let c = 0; c < s; c++) {
      let l = n[r];
      if ((l & 192) != 128) {
        r += e(X.MISSING_CONTINUE, r, n, t), a = null;
        break;
      }
      a = a << 6 | l & 63, r++;
    }
    if (a !== null) {
      if (a > 1114111) {
        r += e(X.OUT_OF_RANGE, r - 1 - s, n, t, a);
        continue;
      }
      if (a >= 55296 && a <= 57343) {
        r += e(X.UTF16_SURROGATE, r - 1 - s, n, t, a);
        continue;
      }
      if (a <= o) {
        r += e(X.OVERLONG, r - 1 - s, n, t, a);
        continue;
      }
      t.push(a);
    }
  }
  return t;
}
function ve(n, e = Xe.current) {
  e != Xe.current && (mn.checkNormalize(), n = n.normalize(e));
  let t = [];
  for (let r = 0; r < n.length; r++) {
    const i = n.charCodeAt(r);
    if (i < 128)
      t.push(i);
    else if (i < 2048)
      t.push(i >> 6 | 192), t.push(i & 63 | 128);
    else if ((i & 64512) == 55296) {
      r++;
      const s = n.charCodeAt(r);
      if (r >= n.length || (s & 64512) !== 56320)
        throw new Error("invalid utf-8 string");
      const o = 65536 + ((i & 1023) << 10) + (s & 1023);
      t.push(o >> 18 | 240), t.push(o >> 12 & 63 | 128), t.push(o >> 6 & 63 | 128), t.push(o & 63 | 128);
    } else
      t.push(i >> 12 | 224), t.push(i >> 6 & 63 | 128), t.push(i & 63 | 128);
  }
  return P(t);
}
function yi(n) {
  return n.map((e) => e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10 & 1023) + 55296, (e & 1023) + 56320))).join("");
}
function xt(n, e) {
  return yi(vn(n, e));
}
function bi(n, e = Xe.current) {
  return vn(ve(n, e));
}
function wn(n) {
  return G(ve(n));
}
const yn = "hash/5.7.0";
function bn(n, e) {
  e == null && (e = 1);
  const t = [], r = t.forEach, i = function(s, o) {
    r.call(s, function(a) {
      o > 0 && Array.isArray(a) ? i(a, o - 1) : t.push(a);
    });
  };
  return i(n, e), t;
}
function Ei(n) {
  const e = {};
  for (let t = 0; t < n.length; t++) {
    const r = n[t];
    e[r[0]] = r[1];
  }
  return e;
}
function ki(n) {
  let e = 0;
  function t() {
    return n[e++] << 8 | n[e++];
  }
  let r = t(), i = 1, s = [0, 1];
  for (let _ = 1; _ < r; _++)
    s.push(i += t());
  let o = t(), a = e;
  e += o;
  let c = 0, l = 0;
  function f() {
    return c == 0 && (l = l << 8 | n[e++], c = 8), l >> --c & 1;
  }
  const u = 31, p = Math.pow(2, u), d = p >>> 1, g = d >> 1, m = p - 1;
  let E = 0;
  for (let _ = 0; _ < u; _++)
    E = E << 1 | f();
  let A = [], b = 0, T = p;
  for (; ; ) {
    let _ = Math.floor(((E - b + 1) * i - 1) / T), M = 0, Pe = r;
    for (; Pe - M > 1; ) {
      let Ct = M + Pe >>> 1;
      _ < s[Ct] ? Pe = Ct : M = Ct;
    }
    if (M == 0)
      break;
    A.push(M);
    let se = b + Math.floor(T * s[M] / i), Y = b + Math.floor(T * s[M + 1] / i) - 1;
    for (; ((se ^ Y) & d) == 0; )
      E = E << 1 & m | f(), se = se << 1 & m, Y = Y << 1 & m | 1;
    for (; se & ~Y & g; )
      E = E & d | E << 1 & m >>> 1 | f(), se = se << 1 ^ d, Y = (Y ^ d) << 1 | d | 1;
    b = se, T = 1 + Y - se;
  }
  let C = r - 4;
  return A.map((_) => {
    switch (_ - C) {
      case 3:
        return C + 65792 + (n[a++] << 16 | n[a++] << 8 | n[a++]);
      case 2:
        return C + 256 + (n[a++] << 8 | n[a++]);
      case 1:
        return C + n[a++];
      default:
        return _ - 1;
    }
  });
}
function Ni(n) {
  let e = 0;
  return () => n[e++];
}
function xi(n) {
  return Ni(ki(n));
}
function Pi(n) {
  return n & 1 ? ~n >> 1 : n >> 1;
}
function Ii(n, e) {
  let t = Array(n);
  for (let r = 0; r < n; r++)
    t[r] = 1 + e();
  return t;
}
function kr(n, e) {
  let t = Array(n);
  for (let r = 0, i = -1; r < n; r++)
    t[r] = i += 1 + e();
  return t;
}
function _i(n, e) {
  let t = Array(n);
  for (let r = 0, i = 0; r < n; r++)
    t[r] = i += Pi(e());
  return t;
}
function mt(n, e) {
  let t = kr(n(), n), r = n(), i = kr(r, n), s = Ii(r, n);
  for (let o = 0; o < r; o++)
    for (let a = 0; a < s[o]; a++)
      t.push(i[o] + a);
  return e ? t.map((o) => e[o]) : t;
}
function Ri(n) {
  let e = [];
  for (; ; ) {
    let t = n();
    if (t == 0)
      break;
    e.push(Ti(t, n));
  }
  for (; ; ) {
    let t = n() - 1;
    if (t < 0)
      break;
    e.push(Ci(t, n));
  }
  return Ei(bn(e));
}
function Si(n) {
  let e = [];
  for (; ; ) {
    let t = n();
    if (t == 0)
      break;
    e.push(t);
  }
  return e;
}
function En(n, e, t) {
  let r = Array(n).fill(void 0).map(() => []);
  for (let i = 0; i < e; i++)
    _i(n, t).forEach((s, o) => r[o].push(s));
  return r;
}
function Ti(n, e) {
  let t = 1 + e(), r = e(), i = Si(e), s = En(i.length, 1 + n, e);
  return bn(s.map((o, a) => {
    const c = o[0], l = o.slice(1);
    return Array(i[a]).fill(void 0).map((f, u) => {
      let p = u * r;
      return [c + u * t, l.map((d) => d + p)];
    });
  }));
}
function Ci(n, e) {
  let t = 1 + e();
  return En(t, 1 + n, e).map((i) => [i[0], i.slice(1)]);
}
function Bi(n) {
  let e = mt(n).sort((r, i) => r - i);
  return t();
  function t() {
    let r = [];
    for (; ; ) {
      let l = mt(n, e);
      if (l.length == 0)
        break;
      r.push({ set: new Set(l), node: t() });
    }
    r.sort((l, f) => f.set.size - l.set.size);
    let i = n(), s = i % 3;
    i = i / 3 | 0;
    let o = !!(i & 1);
    i >>= 1;
    let a = i == 1, c = i == 2;
    return { branches: r, valid: s, fe0f: o, save: a, check: c };
  }
}
function Oi() {
  return xi(dn("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"));
}
const Pt = Oi(), Ui = new Set(mt(Pt)), Di = new Set(mt(Pt)), Mi = Ri(Pt), Fi = Bi(Pt), Nr = 45, xr = 95;
function kn(n) {
  return bi(n);
}
function Li(n) {
  return n.filter((e) => e != 65039);
}
function Nn(n) {
  for (let e of n.split(".")) {
    let t = kn(e);
    try {
      for (let r = t.lastIndexOf(xr) - 1; r >= 0; r--)
        if (t[r] !== xr)
          throw new Error("underscore only allowed at start");
      if (t.length >= 4 && t.every((r) => r < 128) && t[2] === Nr && t[3] === Nr)
        throw new Error("invalid label extension");
    } catch (r) {
      throw new Error(`Invalid label "${e}": ${r.message}`);
    }
  }
  return n;
}
function qi(n) {
  return Nn(Gi(n, Li));
}
function Gi(n, e) {
  let t = kn(n).reverse(), r = [];
  for (; t.length; ) {
    let i = ji(t);
    if (i) {
      r.push(...e(i));
      continue;
    }
    let s = t.pop();
    if (Ui.has(s)) {
      r.push(s);
      continue;
    }
    if (Di.has(s))
      continue;
    let o = Mi[s];
    if (o) {
      r.push(...o);
      continue;
    }
    throw new Error(`Disallowed codepoint: 0x${s.toString(16).toUpperCase()}`);
  }
  return Nn(Hi(String.fromCodePoint(...r)));
}
function Hi(n) {
  return n.normalize("NFC");
}
function ji(n, e) {
  var t;
  let r = Fi, i, s, o = [], a = n.length;
  for (e && (e.length = 0); a; ) {
    let c = n[--a];
    if (r = (t = r.branches.find((l) => l.set.has(c))) === null || t === void 0 ? void 0 : t.node, !r)
      break;
    if (r.save)
      s = c;
    else if (r.check && c === s)
      break;
    o.push(c), r.fe0f && (o.push(65039), a > 0 && n[a - 1] == 65039 && a--), r.valid && (i = o.slice(), r.valid == 2 && i.splice(1, 1), e && e.push(...n.slice(a).reverse()), n.length = a);
  }
  return i;
}
const zi = new h(yn), xn = new Uint8Array(32);
xn.fill(0);
function Pr(n) {
  if (n.length === 0)
    throw new Error("invalid ENS name; empty component");
  return n;
}
function Pn(n) {
  const e = ve(qi(n)), t = [];
  if (n.length === 0)
    return t;
  let r = 0;
  for (let i = 0; i < e.length; i++)
    e[i] === 46 && (t.push(Pr(e.slice(r, i))), r = i + 1);
  if (r >= e.length)
    throw new Error("invalid ENS name; empty component");
  return t.push(Pr(e.slice(r))), t;
}
function at(n) {
  typeof n != "string" && zi.throwArgumentError("invalid ENS name; not a string", "name", n);
  let e = xn;
  const t = Pn(n);
  for (; t.length; )
    e = G(_e([e, G(t.pop())]));
  return N(e);
}
function Ji(n) {
  return N(_e(Pn(n).map((e) => {
    if (e.length > 63)
      throw new Error("invalid DNS encoded entry; length exceeds 63 bytes");
    const t = new Uint8Array(e.length + 1);
    return t.set(e, 1), t[0] = t.length - 1, t;
  }))) + "00";
}
const Ki = "rlp/5.7.0", de = new h(Ki);
function Ir(n) {
  const e = [];
  for (; n; )
    e.unshift(n & 255), n >>= 8;
  return e;
}
function _r(n, e, t) {
  let r = 0;
  for (let i = 0; i < t; i++)
    r = r * 256 + n[e + i];
  return r;
}
function In(n) {
  if (Array.isArray(n)) {
    let r = [];
    if (n.forEach(function(s) {
      r = r.concat(In(s));
    }), r.length <= 55)
      return r.unshift(192 + r.length), r;
    const i = Ir(r.length);
    return i.unshift(247 + i.length), i.concat(r);
  }
  tr(n) || de.throwArgumentError("RLP object must be BytesLike", "object", n);
  const e = Array.prototype.slice.call(P(n));
  if (e.length === 1 && e[0] <= 127)
    return e;
  if (e.length <= 55)
    return e.unshift(128 + e.length), e;
  const t = Ir(e.length);
  return t.unshift(183 + t.length), t.concat(e);
}
function It(n) {
  return N(In(n));
}
function Rr(n, e, t, r) {
  const i = [];
  for (; t < e + 1 + r; ) {
    const s = _n(n, t);
    i.push(s.result), t += s.consumed, t > e + 1 + r && de.throwError("child data too short", h.errors.BUFFER_OVERRUN, {});
  }
  return { consumed: 1 + r, result: i };
}
function _n(n, e) {
  if (n.length === 0 && de.throwError("data too short", h.errors.BUFFER_OVERRUN, {}), n[e] >= 248) {
    const t = n[e] - 247;
    e + 1 + t > n.length && de.throwError("data short segment too short", h.errors.BUFFER_OVERRUN, {});
    const r = _r(n, e + 1, t);
    return e + 1 + t + r > n.length && de.throwError("data long segment too short", h.errors.BUFFER_OVERRUN, {}), Rr(n, e, e + 1 + t, t + r);
  } else if (n[e] >= 192) {
    const t = n[e] - 192;
    return e + 1 + t > n.length && de.throwError("data array too short", h.errors.BUFFER_OVERRUN, {}), Rr(n, e, e + 1, t);
  } else if (n[e] >= 184) {
    const t = n[e] - 183;
    e + 1 + t > n.length && de.throwError("data array too short", h.errors.BUFFER_OVERRUN, {});
    const r = _r(n, e + 1, t);
    e + 1 + t + r > n.length && de.throwError("data array too short", h.errors.BUFFER_OVERRUN, {});
    const i = N(n.slice(e + 1 + t, e + 1 + t + r));
    return { consumed: 1 + t + r, result: i };
  } else if (n[e] >= 128) {
    const t = n[e] - 128;
    e + 1 + t > n.length && de.throwError("data too short", h.errors.BUFFER_OVERRUN, {});
    const r = N(n.slice(e + 1, e + 1 + t));
    return { consumed: 1 + t, result: r };
  }
  return { consumed: 1, result: N(n[e]) };
}
function rr(n) {
  const e = P(n), t = _n(e, 0);
  return t.consumed !== e.length && de.throwArgumentError("invalid rlp data", "data", n), t.result;
}
const Qi = "address/5.7.0", Ce = new h(Qi);
function Sr(n) {
  S(n, 20) || Ce.throwArgumentError("invalid address", "address", n), n = n.toLowerCase();
  const e = n.substring(2).split(""), t = new Uint8Array(40);
  for (let i = 0; i < 40; i++)
    t[i] = e[i].charCodeAt(0);
  const r = P(G(t));
  for (let i = 0; i < 40; i += 2)
    r[i >> 1] >> 4 >= 8 && (e[i] = e[i].toUpperCase()), (r[i >> 1] & 15) >= 8 && (e[i + 1] = e[i + 1].toUpperCase());
  return "0x" + e.join("");
}
const Yi = 9007199254740991;
function Wi(n) {
  return Math.log10 ? Math.log10(n) : Math.log(n) / Math.LN10;
}
const nr = {};
for (let n = 0; n < 10; n++)
  nr[String(n)] = String(n);
for (let n = 0; n < 26; n++)
  nr[String.fromCharCode(65 + n)] = String(10 + n);
const Tr = Math.floor(Wi(Yi));
function Xi(n) {
  n = n.toUpperCase(), n = n.substring(4) + n.substring(0, 2) + "00";
  let e = n.split("").map((r) => nr[r]).join("");
  for (; e.length >= Tr; ) {
    let r = e.substring(0, Tr);
    e = parseInt(r, 10) % 97 + e.substring(r.length);
  }
  let t = String(98 - parseInt(e, 10) % 97);
  for (; t.length < 2; )
    t = "0" + t;
  return t;
}
function ue(n) {
  let e = null;
  if (typeof n != "string" && Ce.throwArgumentError("invalid address", "address", n), n.match(/^(0x)?[0-9a-fA-F]{40}$/))
    n.substring(0, 2) !== "0x" && (n = "0x" + n), e = Sr(n), n.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && e !== n && Ce.throwArgumentError("bad address checksum", "address", n);
  else if (n.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    for (n.substring(2, 4) !== Xi(n) && Ce.throwArgumentError("bad icap checksum", "address", n), e = ei(n.substring(4)); e.length < 40; )
      e = "0" + e;
    e = Sr("0x" + e);
  } else
    Ce.throwArgumentError("invalid address", "address", n);
  return e;
}
function Vi(n) {
  let e = null;
  try {
    e = ue(n.from);
  } catch {
    Ce.throwArgumentError("missing from address", "transaction", n);
  }
  const t = Me(P(w.from(n.nonce).toHexString()));
  return ue(K(G(It([e, t])), 12));
}
var Zi = globalThis && globalThis.__awaiter || function(n, e, t, r) {
  function i(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function a(f) {
      try {
        l(r.next(f));
      } catch (u) {
        o(u);
      }
    }
    function c(f) {
      try {
        l(r.throw(f));
      } catch (u) {
        o(u);
      }
    }
    function l(f) {
      f.done ? s(f.value) : i(f.value).then(a, c);
    }
    l((r = r.apply(n, e || [])).next());
  });
};
const B = new h(yn), Rn = new Uint8Array(32);
Rn.fill(0);
const $i = w.from(-1), Sn = w.from(0), Tn = w.from(1), es = w.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
function ts(n) {
  const e = P(n), t = e.length % 32;
  return t ? Z([e, Rn.slice(t)]) : N(e);
}
const rs = D(Tn.toHexString(), 32), ns = D(Sn.toHexString(), 32), Cr = {
  name: "string",
  version: "string",
  chainId: "uint256",
  verifyingContract: "address",
  salt: "bytes32"
}, Dt = [
  "name",
  "version",
  "chainId",
  "verifyingContract",
  "salt"
];
function Br(n) {
  return function(e) {
    return typeof e != "string" && B.throwArgumentError(`invalid domain value for ${JSON.stringify(n)}`, `domain.${n}`, e), e;
  };
}
const is = {
  name: Br("name"),
  version: Br("version"),
  chainId: function(n) {
    try {
      return w.from(n).toString();
    } catch {
    }
    return B.throwArgumentError('invalid domain value for "chainId"', "domain.chainId", n);
  },
  verifyingContract: function(n) {
    try {
      return ue(n).toLowerCase();
    } catch {
    }
    return B.throwArgumentError('invalid domain value "verifyingContract"', "domain.verifyingContract", n);
  },
  salt: function(n) {
    try {
      const e = P(n);
      if (e.length !== 32)
        throw new Error("bad length");
      return N(e);
    } catch {
    }
    return B.throwArgumentError('invalid domain value "salt"', "domain.salt", n);
  }
};
function Mt(n) {
  {
    const e = n.match(/^(u?)int(\d*)$/);
    if (e) {
      const t = e[1] === "", r = parseInt(e[2] || "256");
      (r % 8 !== 0 || r > 256 || e[2] && e[2] !== String(r)) && B.throwArgumentError("invalid numeric width", "type", n);
      const i = es.mask(t ? r - 1 : r), s = t ? i.add(Tn).mul($i) : Sn;
      return function(o) {
        const a = w.from(o);
        return (a.lt(s) || a.gt(i)) && B.throwArgumentError(`value out-of-bounds for ${n}`, "value", o), D(a.toTwos(256).toHexString(), 32);
      };
    }
  }
  {
    const e = n.match(/^bytes(\d+)$/);
    if (e) {
      const t = parseInt(e[1]);
      return (t === 0 || t > 32 || e[1] !== String(t)) && B.throwArgumentError("invalid bytes width", "type", n), function(r) {
        return P(r).length !== t && B.throwArgumentError(`invalid length for ${n}`, "value", r), ts(r);
      };
    }
  }
  switch (n) {
    case "address":
      return function(e) {
        return D(ue(e), 32);
      };
    case "bool":
      return function(e) {
        return e ? rs : ns;
      };
    case "bytes":
      return function(e) {
        return G(e);
      };
    case "string":
      return function(e) {
        return wn(e);
      };
  }
  return null;
}
function Or(n, e) {
  return `${n}(${e.map(({ name: t, type: r }) => r + " " + t).join(",")})`;
}
class W {
  constructor(e) {
    y(this, "types", Object.freeze(te(e))), y(this, "_encoderCache", {}), y(this, "_types", {});
    const t = {}, r = {}, i = {};
    Object.keys(e).forEach((a) => {
      t[a] = {}, r[a] = [], i[a] = {};
    });
    for (const a in e) {
      const c = {};
      e[a].forEach((l) => {
        c[l.name] && B.throwArgumentError(`duplicate variable name ${JSON.stringify(l.name)} in ${JSON.stringify(a)}`, "types", e), c[l.name] = !0;
        const f = l.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
        f === a && B.throwArgumentError(`circular type reference to ${JSON.stringify(f)}`, "types", e), !Mt(f) && (r[f] || B.throwArgumentError(`unknown type ${JSON.stringify(f)}`, "types", e), r[f].push(a), t[a][f] = !0);
      });
    }
    const s = Object.keys(r).filter((a) => r[a].length === 0);
    s.length === 0 ? B.throwArgumentError("missing primary type", "types", e) : s.length > 1 && B.throwArgumentError(`ambiguous primary types or unused types: ${s.map((a) => JSON.stringify(a)).join(", ")}`, "types", e), y(this, "primaryType", s[0]);
    function o(a, c) {
      c[a] && B.throwArgumentError(`circular type reference to ${JSON.stringify(a)}`, "types", e), c[a] = !0, Object.keys(t[a]).forEach((l) => {
        !r[l] || (o(l, c), Object.keys(c).forEach((f) => {
          i[f][l] = !0;
        }));
      }), delete c[a];
    }
    o(this.primaryType, {});
    for (const a in i) {
      const c = Object.keys(i[a]);
      c.sort(), this._types[a] = Or(a, e[a]) + c.map((l) => Or(l, e[l])).join("");
    }
  }
  getEncoder(e) {
    let t = this._encoderCache[e];
    return t || (t = this._encoderCache[e] = this._getEncoder(e)), t;
  }
  _getEncoder(e) {
    {
      const i = Mt(e);
      if (i)
        return i;
    }
    const t = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
    if (t) {
      const i = t[1], s = this.getEncoder(i), o = parseInt(t[3]);
      return (a) => {
        o >= 0 && a.length !== o && B.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", a);
        let c = a.map(s);
        return this._types[i] && (c = c.map(G)), G(Z(c));
      };
    }
    const r = this.types[e];
    if (r) {
      const i = wn(this._types[e]);
      return (s) => {
        const o = r.map(({ name: a, type: c }) => {
          const l = this.getEncoder(c)(s[a]);
          return this._types[c] ? G(l) : l;
        });
        return o.unshift(i), Z(o);
      };
    }
    return B.throwArgumentError(`unknown type: ${e}`, "type", e);
  }
  encodeType(e) {
    const t = this._types[e];
    return t || B.throwArgumentError(`unknown type: ${JSON.stringify(e)}`, "name", e), t;
  }
  encodeData(e, t) {
    return this.getEncoder(e)(t);
  }
  hashStruct(e, t) {
    return G(this.encodeData(e, t));
  }
  encode(e) {
    return this.encodeData(this.primaryType, e);
  }
  hash(e) {
    return this.hashStruct(this.primaryType, e);
  }
  _visit(e, t, r) {
    if (Mt(e))
      return r(e, t);
    const i = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
    if (i) {
      const o = i[1], a = parseInt(i[3]);
      return a >= 0 && t.length !== a && B.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", t), t.map((c) => this._visit(o, c, r));
    }
    const s = this.types[e];
    return s ? s.reduce((o, { name: a, type: c }) => (o[a] = this._visit(c, t[a], r), o), {}) : B.throwArgumentError(`unknown type: ${e}`, "type", e);
  }
  visit(e, t) {
    return this._visit(this.primaryType, e, t);
  }
  static from(e) {
    return new W(e);
  }
  static getPrimaryType(e) {
    return W.from(e).primaryType;
  }
  static hashStruct(e, t, r) {
    return W.from(t).hashStruct(e, r);
  }
  static hashDomain(e) {
    const t = [];
    for (const r in e) {
      const i = Cr[r];
      i || B.throwArgumentError(`invalid typed-data domain key: ${JSON.stringify(r)}`, "domain", e), t.push({ name: r, type: i });
    }
    return t.sort((r, i) => Dt.indexOf(r.name) - Dt.indexOf(i.name)), W.hashStruct("EIP712Domain", { EIP712Domain: t }, e);
  }
  static encode(e, t, r) {
    return Z([
      "0x1901",
      W.hashDomain(e),
      W.from(t).hash(r)
    ]);
  }
  static hash(e, t, r) {
    return G(W.encode(e, t, r));
  }
  static resolveNames(e, t, r, i) {
    return Zi(this, void 0, void 0, function* () {
      e = F(e);
      const s = {};
      e.verifyingContract && !S(e.verifyingContract, 20) && (s[e.verifyingContract] = "0x");
      const o = W.from(t);
      o.visit(r, (a, c) => (a === "address" && !S(c, 20) && (s[c] = "0x"), c));
      for (const a in s)
        s[a] = yield i(a);
      return e.verifyingContract && s[e.verifyingContract] && (e.verifyingContract = s[e.verifyingContract]), r = o.visit(r, (a, c) => a === "address" && s[c] ? s[c] : c), { domain: e, value: r };
    });
  }
  static getPayload(e, t, r) {
    W.hashDomain(e);
    const i = {}, s = [];
    Dt.forEach((c) => {
      const l = e[c];
      l != null && (i[c] = is[c](l), s.push({ name: c, type: Cr[c] }));
    });
    const o = W.from(t), a = F(t);
    return a.EIP712Domain ? B.throwArgumentError("types must not contain EIP712Domain type", "types.EIP712Domain", t) : a.EIP712Domain = s, o.encode(r), {
      types: a,
      domain: i,
      primaryType: o.primaryType,
      message: o.visit(r, (c, l) => {
        if (c.match(/^bytes(\d*)/))
          return N(P(l));
        if (c.match(/^u?int/))
          return w.from(l).toString();
        switch (c) {
          case "address":
            return l.toLowerCase();
          case "bool":
            return !!l;
          case "string":
            return typeof l != "string" && B.throwArgumentError("invalid string", "value", l), l;
        }
        return B.throwArgumentError("unsupported type", "type", c);
      })
    };
  }
}
const ss = "sha2/5.7.0";
new h(ss);
function Ur(n) {
  return "0x" + he.sha256().update(P(n)).digest("hex");
}
const os = "web/5.7.1";
var as = globalThis && globalThis.__awaiter || function(n, e, t, r) {
  function i(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function a(f) {
      try {
        l(r.next(f));
      } catch (u) {
        o(u);
      }
    }
    function c(f) {
      try {
        l(r.throw(f));
      } catch (u) {
        o(u);
      }
    }
    function l(f) {
      f.done ? s(f.value) : i(f.value).then(a, c);
    }
    l((r = r.apply(n, e || [])).next());
  });
};
function cs(n, e) {
  return as(this, void 0, void 0, function* () {
    e == null && (e = {});
    const t = {
      method: e.method || "GET",
      headers: e.headers || {},
      body: e.body || void 0
    };
    if (e.skipFetchSetup !== !0 && (t.mode = "cors", t.cache = "no-cache", t.credentials = "same-origin", t.redirect = "follow", t.referrer = "client"), e.fetchOptions != null) {
      const o = e.fetchOptions;
      o.mode && (t.mode = o.mode), o.cache && (t.cache = o.cache), o.credentials && (t.credentials = o.credentials), o.redirect && (t.redirect = o.redirect), o.referrer && (t.referrer = o.referrer);
    }
    const r = yield fetch(n, t), i = yield r.arrayBuffer(), s = {};
    return r.headers.forEach ? r.headers.forEach((o, a) => {
      s[a.toLowerCase()] = o;
    }) : r.headers.keys().forEach((o) => {
      s[o.toLowerCase()] = r.headers.get(o);
    }), {
      headers: s,
      statusCode: r.status,
      statusMessage: r.statusText,
      body: P(new Uint8Array(i))
    };
  });
}
var ls = globalThis && globalThis.__awaiter || function(n, e, t, r) {
  function i(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function a(f) {
      try {
        l(r.next(f));
      } catch (u) {
        o(u);
      }
    }
    function c(f) {
      try {
        l(r.throw(f));
      } catch (u) {
        o(u);
      }
    }
    function l(f) {
      f.done ? s(f.value) : i(f.value).then(a, c);
    }
    l((r = r.apply(n, e || [])).next());
  });
};
const ce = new h(os);
function Dr(n) {
  return new Promise((e) => {
    setTimeout(e, n);
  });
}
function ye(n, e) {
  if (n == null)
    return null;
  if (typeof n == "string")
    return n;
  if (tr(n)) {
    if (e && (e.split("/")[0] === "text" || e.split(";")[0].trim() === "application/json"))
      try {
        return xt(n);
      } catch {
      }
    return N(n);
  }
  return n;
}
function fs(n) {
  return ve(n.replace(/%([0-9a-f][0-9a-f])/gi, (e, t) => String.fromCharCode(parseInt(t, 16))));
}
function us(n, e, t) {
  const r = typeof n == "object" && n.throttleLimit != null ? n.throttleLimit : 12;
  ce.assertArgument(r > 0 && r % 1 === 0, "invalid connection throttle limit", "connection.throttleLimit", r);
  const i = typeof n == "object" ? n.throttleCallback : null, s = typeof n == "object" && typeof n.throttleSlotInterval == "number" ? n.throttleSlotInterval : 100;
  ce.assertArgument(s > 0 && s % 1 === 0, "invalid connection throttle slot interval", "connection.throttleSlotInterval", s);
  const o = typeof n == "object" ? !!n.errorPassThrough : !1, a = {};
  let c = null;
  const l = {
    method: "GET"
  };
  let f = !1, u = 2 * 60 * 1e3;
  if (typeof n == "string")
    c = n;
  else if (typeof n == "object") {
    if ((n == null || n.url == null) && ce.throwArgumentError("missing URL", "connection.url", n), c = n.url, typeof n.timeout == "number" && n.timeout > 0 && (u = n.timeout), n.headers)
      for (const A in n.headers)
        a[A.toLowerCase()] = { key: A, value: String(n.headers[A]) }, ["if-none-match", "if-modified-since"].indexOf(A.toLowerCase()) >= 0 && (f = !0);
    if (l.allowGzip = !!n.allowGzip, n.user != null && n.password != null) {
      c.substring(0, 6) !== "https:" && n.allowInsecureAuthentication !== !0 && ce.throwError("basic authentication requires a secure https url", h.errors.INVALID_ARGUMENT, { argument: "url", url: c, user: n.user, password: "[REDACTED]" });
      const A = n.user + ":" + n.password;
      a.authorization = {
        key: "Authorization",
        value: "Basic " + gn(ve(A))
      };
    }
    n.skipFetchSetup != null && (l.skipFetchSetup = !!n.skipFetchSetup), n.fetchOptions != null && (l.fetchOptions = F(n.fetchOptions));
  }
  const p = new RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"), d = c ? c.match(p) : null;
  if (d)
    try {
      const A = {
        statusCode: 200,
        statusMessage: "OK",
        headers: { "content-type": d[1] || "text/plain" },
        body: d[2] ? dn(d[3]) : fs(d[3])
      };
      let b = A.body;
      return t && (b = t(A.body, A)), Promise.resolve(b);
    } catch (A) {
      ce.throwError("processing response error", h.errors.SERVER_ERROR, {
        body: ye(d[1], d[2]),
        error: A,
        requestBody: null,
        requestMethod: "GET",
        url: c
      });
    }
  e && (l.method = "POST", l.body = e, a["content-type"] == null && (a["content-type"] = { key: "Content-Type", value: "application/octet-stream" }), a["content-length"] == null && (a["content-length"] = { key: "Content-Length", value: String(e.length) }));
  const g = {};
  Object.keys(a).forEach((A) => {
    const b = a[A];
    g[b.key] = b.value;
  }), l.headers = g;
  const m = function() {
    let A = null;
    return { promise: new Promise(function(C, _) {
      u && (A = setTimeout(() => {
        A != null && (A = null, _(ce.makeError("timeout", h.errors.TIMEOUT, {
          requestBody: ye(l.body, g["content-type"]),
          requestMethod: l.method,
          timeout: u,
          url: c
        })));
      }, u));
    }), cancel: function() {
      A != null && (clearTimeout(A), A = null);
    } };
  }(), E = function() {
    return ls(this, void 0, void 0, function* () {
      for (let A = 0; A < r; A++) {
        let b = null;
        try {
          if (b = yield cs(c, l), A < r) {
            if (b.statusCode === 301 || b.statusCode === 302) {
              const C = b.headers.location || "";
              if (l.method === "GET" && C.match(/^https:/)) {
                c = b.headers.location;
                continue;
              }
            } else if (b.statusCode === 429) {
              let C = !0;
              if (i && (C = yield i(A, c)), C) {
                let _ = 0;
                const M = b.headers["retry-after"];
                typeof M == "string" && M.match(/^[1-9][0-9]*$/) ? _ = parseInt(M) * 1e3 : _ = s * parseInt(String(Math.random() * Math.pow(2, A))), yield Dr(_);
                continue;
              }
            }
          }
        } catch (C) {
          b = C.response, b == null && (m.cancel(), ce.throwError("missing response", h.errors.SERVER_ERROR, {
            requestBody: ye(l.body, g["content-type"]),
            requestMethod: l.method,
            serverError: C,
            url: c
          }));
        }
        let T = b.body;
        if (f && b.statusCode === 304 ? T = null : !o && (b.statusCode < 200 || b.statusCode >= 300) && (m.cancel(), ce.throwError("bad response", h.errors.SERVER_ERROR, {
          status: b.statusCode,
          headers: b.headers,
          body: ye(T, b.headers ? b.headers["content-type"] : null),
          requestBody: ye(l.body, g["content-type"]),
          requestMethod: l.method,
          url: c
        })), t)
          try {
            const C = yield t(T, b);
            return m.cancel(), C;
          } catch (C) {
            if (C.throttleRetry && A < r) {
              let _ = !0;
              if (i && (_ = yield i(A, c)), _) {
                const M = s * parseInt(String(Math.random() * Math.pow(2, A)));
                yield Dr(M);
                continue;
              }
            }
            m.cancel(), ce.throwError("processing response error", h.errors.SERVER_ERROR, {
              body: ye(T, b.headers ? b.headers["content-type"] : null),
              error: C,
              requestBody: ye(l.body, g["content-type"]),
              requestMethod: l.method,
              url: c
            });
          }
        return m.cancel(), T;
      }
      return ce.throwError("failed response", h.errors.SERVER_ERROR, {
        requestBody: ye(l.body, g["content-type"]),
        requestMethod: l.method,
        url: c
      });
    });
  }();
  return Promise.race([m.promise, E]);
}
function Ze(n, e, t) {
  let r = (s, o) => {
    let a = null;
    if (s != null)
      try {
        a = JSON.parse(xt(s));
      } catch (c) {
        ce.throwError("invalid JSON", h.errors.SERVER_ERROR, {
          body: s,
          error: c
        });
      }
    return t && (a = t(a, o)), a;
  }, i = null;
  if (e != null) {
    i = ve(e);
    const s = typeof n == "string" ? { url: n } : F(n);
    s.headers ? Object.keys(s.headers).filter((a) => a.toLowerCase() === "content-type").length !== 0 || (s.headers = F(s.headers), s.headers["content-type"] = "application/json") : s.headers = { "content-type": "application/json" }, n = s;
  }
  return us(n, i, r);
}
function Be(n, e) {
  return e || (e = {}), e = F(e), e.floor == null && (e.floor = 0), e.ceiling == null && (e.ceiling = 1e4), e.interval == null && (e.interval = 250), new Promise(function(t, r) {
    let i = null, s = !1;
    const o = () => s ? !1 : (s = !0, i && clearTimeout(i), !0);
    e.timeout && (i = setTimeout(() => {
      o() && r(new Error("timeout"));
    }, e.timeout));
    const a = e.retryLimit;
    let c = 0;
    function l() {
      return n().then(function(f) {
        if (f !== void 0)
          o() && t(f);
        else if (e.oncePoll)
          e.oncePoll.once("poll", l);
        else if (e.onceBlock)
          e.onceBlock.once("block", l);
        else if (!s) {
          if (c++, c > a) {
            o() && r(new Error("retry limit reached"));
            return;
          }
          let u = e.interval * parseInt(String(Math.random() * Math.pow(2, c)));
          u < e.floor && (u = e.floor), u > e.ceiling && (u = e.ceiling), setTimeout(l, u);
        }
        return null;
      }, function(f) {
        o() && r(f);
      });
    }
    l();
  });
}
var At = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", Vt = {};
for (var et = 0; et < At.length; et++) {
  var Ft = At.charAt(et);
  if (Vt[Ft] !== void 0)
    throw new TypeError(Ft + " is ambiguous");
  Vt[Ft] = et;
}
function De(n) {
  var e = n >> 25;
  return (n & 33554431) << 5 ^ -(e >> 0 & 1) & 996825010 ^ -(e >> 1 & 1) & 642813549 ^ -(e >> 2 & 1) & 513874426 ^ -(e >> 3 & 1) & 1027748829 ^ -(e >> 4 & 1) & 705979059;
}
function Cn(n) {
  for (var e = 1, t = 0; t < n.length; ++t) {
    var r = n.charCodeAt(t);
    if (r < 33 || r > 126)
      return "Invalid prefix (" + n + ")";
    e = De(e) ^ r >> 5;
  }
  for (e = De(e), t = 0; t < n.length; ++t) {
    var i = n.charCodeAt(t);
    e = De(e) ^ i & 31;
  }
  return e;
}
function hs(n, e, t) {
  if (t = t || 90, n.length + 7 + e.length > t)
    throw new TypeError("Exceeds length limit");
  n = n.toLowerCase();
  var r = Cn(n);
  if (typeof r == "string")
    throw new Error(r);
  for (var i = n + "1", s = 0; s < e.length; ++s) {
    var o = e[s];
    if (o >> 5 !== 0)
      throw new Error("Non 5-bit word");
    r = De(r) ^ o, i += At.charAt(o);
  }
  for (s = 0; s < 6; ++s)
    r = De(r);
  for (r ^= 1, s = 0; s < 6; ++s) {
    var a = r >> (5 - s) * 5 & 31;
    i += At.charAt(a);
  }
  return i;
}
function Bn(n, e) {
  if (e = e || 90, n.length < 8)
    return n + " too short";
  if (n.length > e)
    return "Exceeds length limit";
  var t = n.toLowerCase(), r = n.toUpperCase();
  if (n !== t && n !== r)
    return "Mixed-case string " + n;
  n = t;
  var i = n.lastIndexOf("1");
  if (i === -1)
    return "No separator character for " + n;
  if (i === 0)
    return "Missing prefix for " + n;
  var s = n.slice(0, i), o = n.slice(i + 1);
  if (o.length < 6)
    return "Data too short";
  var a = Cn(s);
  if (typeof a == "string")
    return a;
  for (var c = [], l = 0; l < o.length; ++l) {
    var f = o.charAt(l), u = Vt[f];
    if (u === void 0)
      return "Unknown character " + f;
    a = De(a) ^ u, !(l + 6 >= o.length) && c.push(u);
  }
  return a !== 1 ? "Invalid checksum for " + n : { prefix: s, words: c };
}
function ds() {
  var n = Bn.apply(null, arguments);
  if (typeof n == "object")
    return n;
}
function gs(n) {
  var e = Bn.apply(null, arguments);
  if (typeof e == "object")
    return e;
  throw new Error(e);
}
function _t(n, e, t, r) {
  for (var i = 0, s = 0, o = (1 << t) - 1, a = [], c = 0; c < n.length; ++c)
    for (i = i << e | n[c], s += e; s >= t; )
      s -= t, a.push(i >> s & o);
  if (r)
    s > 0 && a.push(i << t - s & o);
  else {
    if (s >= e)
      return "Excess padding";
    if (i << t - s & o)
      return "Non-zero padding";
  }
  return a;
}
function ps(n) {
  var e = _t(n, 8, 5, !0);
  if (Array.isArray(e))
    return e;
}
function ms(n) {
  var e = _t(n, 8, 5, !0);
  if (Array.isArray(e))
    return e;
  throw new Error(e);
}
function As(n) {
  var e = _t(n, 5, 8, !1);
  if (Array.isArray(e))
    return e;
}
function vs(n) {
  var e = _t(n, 5, 8, !1);
  if (Array.isArray(e))
    return e;
  throw new Error(e);
}
var ws = {
  decodeUnsafe: ds,
  decode: gs,
  encode: hs,
  toWordsUnsafe: ps,
  toWords: ms,
  fromWordsUnsafe: As,
  fromWords: vs
};
const Mr = ws, J = "providers/5.7.2";
function Le(n, e, t) {
  return t = {
    path: e,
    exports: {},
    require: function(r, i) {
      return ys(r, i == null ? t.path : i);
    }
  }, n(t, t.exports), t.exports;
}
function ys() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var ir = On;
function On(n, e) {
  if (!n)
    throw new Error(e || "Assertion failed");
}
On.equal = function(e, t, r) {
  if (e != t)
    throw new Error(r || "Assertion failed: " + e + " != " + t);
};
var fe = Le(function(n, e) {
  var t = e;
  function r(o, a) {
    if (Array.isArray(o))
      return o.slice();
    if (!o)
      return [];
    var c = [];
    if (typeof o != "string") {
      for (var l = 0; l < o.length; l++)
        c[l] = o[l] | 0;
      return c;
    }
    if (a === "hex") {
      o = o.replace(/[^a-z0-9]+/ig, ""), o.length % 2 !== 0 && (o = "0" + o);
      for (var l = 0; l < o.length; l += 2)
        c.push(parseInt(o[l] + o[l + 1], 16));
    } else
      for (var l = 0; l < o.length; l++) {
        var f = o.charCodeAt(l), u = f >> 8, p = f & 255;
        u ? c.push(u, p) : c.push(p);
      }
    return c;
  }
  t.toArray = r;
  function i(o) {
    return o.length === 1 ? "0" + o : o;
  }
  t.zero2 = i;
  function s(o) {
    for (var a = "", c = 0; c < o.length; c++)
      a += i(o[c].toString(16));
    return a;
  }
  t.toHex = s, t.encode = function(a, c) {
    return c === "hex" ? s(a) : a;
  };
}), $ = Le(function(n, e) {
  var t = e;
  t.assert = ir, t.toArray = fe.toArray, t.zero2 = fe.zero2, t.toHex = fe.toHex, t.encode = fe.encode;
  function r(c, l, f) {
    var u = new Array(Math.max(c.bitLength(), f) + 1);
    u.fill(0);
    for (var p = 1 << l + 1, d = c.clone(), g = 0; g < u.length; g++) {
      var m, E = d.andln(p - 1);
      d.isOdd() ? (E > (p >> 1) - 1 ? m = (p >> 1) - E : m = E, d.isubn(m)) : m = 0, u[g] = m, d.iushrn(1);
    }
    return u;
  }
  t.getNAF = r;
  function i(c, l) {
    var f = [
      [],
      []
    ];
    c = c.clone(), l = l.clone();
    for (var u = 0, p = 0, d; c.cmpn(-u) > 0 || l.cmpn(-p) > 0; ) {
      var g = c.andln(3) + u & 3, m = l.andln(3) + p & 3;
      g === 3 && (g = -1), m === 3 && (m = -1);
      var E;
      (g & 1) === 0 ? E = 0 : (d = c.andln(7) + u & 7, (d === 3 || d === 5) && m === 2 ? E = -g : E = g), f[0].push(E);
      var A;
      (m & 1) === 0 ? A = 0 : (d = l.andln(7) + p & 7, (d === 3 || d === 5) && g === 2 ? A = -m : A = m), f[1].push(A), 2 * u === E + 1 && (u = 1 - u), 2 * p === A + 1 && (p = 1 - p), c.iushrn(1), l.iushrn(1);
    }
    return f;
  }
  t.getJSF = i;
  function s(c, l, f) {
    var u = "_" + l;
    c.prototype[l] = function() {
      return this[u] !== void 0 ? this[u] : this[u] = f.call(this);
    };
  }
  t.cachedProperty = s;
  function o(c) {
    return typeof c == "string" ? t.toArray(c, "hex") : c;
  }
  t.parseBytes = o;
  function a(c) {
    return new x(c, "hex", "le");
  }
  t.intFromLE = a;
}), vt = $.getNAF, bs = $.getJSF, wt = $.assert;
function Ne(n, e) {
  this.type = n, this.p = new x(e.p, 16), this.red = e.prime ? x.red(e.prime) : x.mont(this.p), this.zero = new x(0).toRed(this.red), this.one = new x(1).toRed(this.red), this.two = new x(2).toRed(this.red), this.n = e.n && new x(e.n, 16), this.g = e.g && this.pointFromJSON(e.g, e.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
  var t = this.n && this.p.div(this.n);
  !t || t.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red));
}
var Se = Ne;
Ne.prototype.point = function() {
  throw new Error("Not implemented");
};
Ne.prototype.validate = function() {
  throw new Error("Not implemented");
};
Ne.prototype._fixedNafMul = function(e, t) {
  wt(e.precomputed);
  var r = e._getDoubles(), i = vt(t, 1, this._bitLength), s = (1 << r.step + 1) - (r.step % 2 === 0 ? 2 : 1);
  s /= 3;
  var o = [], a, c;
  for (a = 0; a < i.length; a += r.step) {
    c = 0;
    for (var l = a + r.step - 1; l >= a; l--)
      c = (c << 1) + i[l];
    o.push(c);
  }
  for (var f = this.jpoint(null, null, null), u = this.jpoint(null, null, null), p = s; p > 0; p--) {
    for (a = 0; a < o.length; a++)
      c = o[a], c === p ? u = u.mixedAdd(r.points[a]) : c === -p && (u = u.mixedAdd(r.points[a].neg()));
    f = f.add(u);
  }
  return f.toP();
};
Ne.prototype._wnafMul = function(e, t) {
  var r = 4, i = e._getNAFPoints(r);
  r = i.wnd;
  for (var s = i.points, o = vt(t, r, this._bitLength), a = this.jpoint(null, null, null), c = o.length - 1; c >= 0; c--) {
    for (var l = 0; c >= 0 && o[c] === 0; c--)
      l++;
    if (c >= 0 && l++, a = a.dblp(l), c < 0)
      break;
    var f = o[c];
    wt(f !== 0), e.type === "affine" ? f > 0 ? a = a.mixedAdd(s[f - 1 >> 1]) : a = a.mixedAdd(s[-f - 1 >> 1].neg()) : f > 0 ? a = a.add(s[f - 1 >> 1]) : a = a.add(s[-f - 1 >> 1].neg());
  }
  return e.type === "affine" ? a.toP() : a;
};
Ne.prototype._wnafMulAdd = function(e, t, r, i, s) {
  var o = this._wnafT1, a = this._wnafT2, c = this._wnafT3, l = 0, f, u, p;
  for (f = 0; f < i; f++) {
    p = t[f];
    var d = p._getNAFPoints(e);
    o[f] = d.wnd, a[f] = d.points;
  }
  for (f = i - 1; f >= 1; f -= 2) {
    var g = f - 1, m = f;
    if (o[g] !== 1 || o[m] !== 1) {
      c[g] = vt(r[g], o[g], this._bitLength), c[m] = vt(r[m], o[m], this._bitLength), l = Math.max(c[g].length, l), l = Math.max(c[m].length, l);
      continue;
    }
    var E = [
      t[g],
      null,
      null,
      t[m]
    ];
    t[g].y.cmp(t[m].y) === 0 ? (E[1] = t[g].add(t[m]), E[2] = t[g].toJ().mixedAdd(t[m].neg())) : t[g].y.cmp(t[m].y.redNeg()) === 0 ? (E[1] = t[g].toJ().mixedAdd(t[m]), E[2] = t[g].add(t[m].neg())) : (E[1] = t[g].toJ().mixedAdd(t[m]), E[2] = t[g].toJ().mixedAdd(t[m].neg()));
    var A = [
      -3,
      -1,
      -5,
      -7,
      0,
      7,
      5,
      1,
      3
    ], b = bs(r[g], r[m]);
    for (l = Math.max(b[0].length, l), c[g] = new Array(l), c[m] = new Array(l), u = 0; u < l; u++) {
      var T = b[0][u] | 0, C = b[1][u] | 0;
      c[g][u] = A[(T + 1) * 3 + (C + 1)], c[m][u] = 0, a[g] = E;
    }
  }
  var _ = this.jpoint(null, null, null), M = this._wnafT4;
  for (f = l; f >= 0; f--) {
    for (var Pe = 0; f >= 0; ) {
      var se = !0;
      for (u = 0; u < i; u++)
        M[u] = c[u][f] | 0, M[u] !== 0 && (se = !1);
      if (!se)
        break;
      Pe++, f--;
    }
    if (f >= 0 && Pe++, _ = _.dblp(Pe), f < 0)
      break;
    for (u = 0; u < i; u++) {
      var Y = M[u];
      Y !== 0 && (Y > 0 ? p = a[u][Y - 1 >> 1] : Y < 0 && (p = a[u][-Y - 1 >> 1].neg()), p.type === "affine" ? _ = _.mixedAdd(p) : _ = _.add(p));
    }
  }
  for (f = 0; f < i; f++)
    a[f] = null;
  return s ? _ : _.toP();
};
function ne(n, e) {
  this.curve = n, this.type = e, this.precomputed = null;
}
Ne.BasePoint = ne;
ne.prototype.eq = function() {
  throw new Error("Not implemented");
};
ne.prototype.validate = function() {
  return this.curve.validate(this);
};
Ne.prototype.decodePoint = function(e, t) {
  e = $.toArray(e, t);
  var r = this.p.byteLength();
  if ((e[0] === 4 || e[0] === 6 || e[0] === 7) && e.length - 1 === 2 * r) {
    e[0] === 6 ? wt(e[e.length - 1] % 2 === 0) : e[0] === 7 && wt(e[e.length - 1] % 2 === 1);
    var i = this.point(
      e.slice(1, 1 + r),
      e.slice(1 + r, 1 + 2 * r)
    );
    return i;
  } else if ((e[0] === 2 || e[0] === 3) && e.length - 1 === r)
    return this.pointFromX(e.slice(1, 1 + r), e[0] === 3);
  throw new Error("Unknown point format");
};
ne.prototype.encodeCompressed = function(e) {
  return this.encode(e, !0);
};
ne.prototype._encode = function(e) {
  var t = this.curve.p.byteLength(), r = this.getX().toArray("be", t);
  return e ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", t));
};
ne.prototype.encode = function(e, t) {
  return $.encode(this._encode(t), e);
};
ne.prototype.precompute = function(e) {
  if (this.precomputed)
    return this;
  var t = {
    doubles: null,
    naf: null,
    beta: null
  };
  return t.naf = this._getNAFPoints(8), t.doubles = this._getDoubles(4, e), t.beta = this._getBeta(), this.precomputed = t, this;
};
ne.prototype._hasDoubles = function(e) {
  if (!this.precomputed)
    return !1;
  var t = this.precomputed.doubles;
  return t ? t.points.length >= Math.ceil((e.bitLength() + 1) / t.step) : !1;
};
ne.prototype._getDoubles = function(e, t) {
  if (this.precomputed && this.precomputed.doubles)
    return this.precomputed.doubles;
  for (var r = [this], i = this, s = 0; s < t; s += e) {
    for (var o = 0; o < e; o++)
      i = i.dbl();
    r.push(i);
  }
  return {
    step: e,
    points: r
  };
};
ne.prototype._getNAFPoints = function(e) {
  if (this.precomputed && this.precomputed.naf)
    return this.precomputed.naf;
  for (var t = [this], r = (1 << e) - 1, i = r === 1 ? null : this.dbl(), s = 1; s < r; s++)
    t[s] = t[s - 1].add(i);
  return {
    wnd: e,
    points: t
  };
};
ne.prototype._getBeta = function() {
  return null;
};
ne.prototype.dblp = function(e) {
  for (var t = this, r = 0; r < e; r++)
    t = t.dbl();
  return t;
};
var sr = Le(function(n) {
  typeof Object.create == "function" ? n.exports = function(t, r) {
    r && (t.super_ = r, t.prototype = Object.create(r.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }));
  } : n.exports = function(t, r) {
    if (r) {
      t.super_ = r;
      var i = function() {
      };
      i.prototype = r.prototype, t.prototype = new i(), t.prototype.constructor = t;
    }
  };
}), Es = $.assert;
function ie(n) {
  Se.call(this, "short", n), this.a = new x(n.a, 16).toRed(this.red), this.b = new x(n.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = this.a.fromRed().cmpn(0) === 0, this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0, this.endo = this._getEndomorphism(n), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4);
}
sr(ie, Se);
var ks = ie;
ie.prototype._getEndomorphism = function(e) {
  if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
    var t, r;
    if (e.beta)
      t = new x(e.beta, 16).toRed(this.red);
    else {
      var i = this._getEndoRoots(this.p);
      t = i[0].cmp(i[1]) < 0 ? i[0] : i[1], t = t.toRed(this.red);
    }
    if (e.lambda)
      r = new x(e.lambda, 16);
    else {
      var s = this._getEndoRoots(this.n);
      this.g.mul(s[0]).x.cmp(this.g.x.redMul(t)) === 0 ? r = s[0] : (r = s[1], Es(this.g.mul(r).x.cmp(this.g.x.redMul(t)) === 0));
    }
    var o;
    return e.basis ? o = e.basis.map(function(a) {
      return {
        a: new x(a.a, 16),
        b: new x(a.b, 16)
      };
    }) : o = this._getEndoBasis(r), {
      beta: t,
      lambda: r,
      basis: o
    };
  }
};
ie.prototype._getEndoRoots = function(e) {
  var t = e === this.p ? this.red : x.mont(e), r = new x(2).toRed(t).redInvm(), i = r.redNeg(), s = new x(3).toRed(t).redNeg().redSqrt().redMul(r), o = i.redAdd(s).fromRed(), a = i.redSub(s).fromRed();
  return [o, a];
};
ie.prototype._getEndoBasis = function(e) {
  for (var t = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), r = e, i = this.n.clone(), s = new x(1), o = new x(0), a = new x(0), c = new x(1), l, f, u, p, d, g, m, E = 0, A, b; r.cmpn(0) !== 0; ) {
    var T = i.div(r);
    A = i.sub(T.mul(r)), b = a.sub(T.mul(s));
    var C = c.sub(T.mul(o));
    if (!u && A.cmp(t) < 0)
      l = m.neg(), f = s, u = A.neg(), p = b;
    else if (u && ++E === 2)
      break;
    m = A, i = r, r = A, a = s, s = b, c = o, o = C;
  }
  d = A.neg(), g = b;
  var _ = u.sqr().add(p.sqr()), M = d.sqr().add(g.sqr());
  return M.cmp(_) >= 0 && (d = l, g = f), u.negative && (u = u.neg(), p = p.neg()), d.negative && (d = d.neg(), g = g.neg()), [
    { a: u, b: p },
    { a: d, b: g }
  ];
};
ie.prototype._endoSplit = function(e) {
  var t = this.endo.basis, r = t[0], i = t[1], s = i.b.mul(e).divRound(this.n), o = r.b.neg().mul(e).divRound(this.n), a = s.mul(r.a), c = o.mul(i.a), l = s.mul(r.b), f = o.mul(i.b), u = e.sub(a).sub(c), p = l.add(f).neg();
  return { k1: u, k2: p };
};
ie.prototype.pointFromX = function(e, t) {
  e = new x(e, 16), e.red || (e = e.toRed(this.red));
  var r = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b), i = r.redSqrt();
  if (i.redSqr().redSub(r).cmp(this.zero) !== 0)
    throw new Error("invalid point");
  var s = i.fromRed().isOdd();
  return (t && !s || !t && s) && (i = i.redNeg()), this.point(e, i);
};
ie.prototype.validate = function(e) {
  if (e.inf)
    return !0;
  var t = e.x, r = e.y, i = this.a.redMul(t), s = t.redSqr().redMul(t).redIAdd(i).redIAdd(this.b);
  return r.redSqr().redISub(s).cmpn(0) === 0;
};
ie.prototype._endoWnafMulAdd = function(e, t, r) {
  for (var i = this._endoWnafT1, s = this._endoWnafT2, o = 0; o < e.length; o++) {
    var a = this._endoSplit(t[o]), c = e[o], l = c._getBeta();
    a.k1.negative && (a.k1.ineg(), c = c.neg(!0)), a.k2.negative && (a.k2.ineg(), l = l.neg(!0)), i[o * 2] = c, i[o * 2 + 1] = l, s[o * 2] = a.k1, s[o * 2 + 1] = a.k2;
  }
  for (var f = this._wnafMulAdd(1, i, s, o * 2, r), u = 0; u < o * 2; u++)
    i[u] = null, s[u] = null;
  return f;
};
function L(n, e, t, r) {
  Se.BasePoint.call(this, n, "affine"), e === null && t === null ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new x(e, 16), this.y = new x(t, 16), r && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1);
}
sr(L, Se.BasePoint);
ie.prototype.point = function(e, t, r) {
  return new L(this, e, t, r);
};
ie.prototype.pointFromJSON = function(e, t) {
  return L.fromJSON(this, e, t);
};
L.prototype._getBeta = function() {
  if (!!this.curve.endo) {
    var e = this.precomputed;
    if (e && e.beta)
      return e.beta;
    var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
    if (e) {
      var r = this.curve, i = function(s) {
        return r.point(s.x.redMul(r.endo.beta), s.y);
      };
      e.beta = t, t.precomputed = {
        beta: null,
        naf: e.naf && {
          wnd: e.naf.wnd,
          points: e.naf.points.map(i)
        },
        doubles: e.doubles && {
          step: e.doubles.step,
          points: e.doubles.points.map(i)
        }
      };
    }
    return t;
  }
};
L.prototype.toJSON = function() {
  return this.precomputed ? [this.x, this.y, this.precomputed && {
    doubles: this.precomputed.doubles && {
      step: this.precomputed.doubles.step,
      points: this.precomputed.doubles.points.slice(1)
    },
    naf: this.precomputed.naf && {
      wnd: this.precomputed.naf.wnd,
      points: this.precomputed.naf.points.slice(1)
    }
  }] : [this.x, this.y];
};
L.fromJSON = function(e, t, r) {
  typeof t == "string" && (t = JSON.parse(t));
  var i = e.point(t[0], t[1], r);
  if (!t[2])
    return i;
  function s(a) {
    return e.point(a[0], a[1], r);
  }
  var o = t[2];
  return i.precomputed = {
    beta: null,
    doubles: o.doubles && {
      step: o.doubles.step,
      points: [i].concat(o.doubles.points.map(s))
    },
    naf: o.naf && {
      wnd: o.naf.wnd,
      points: [i].concat(o.naf.points.map(s))
    }
  }, i;
};
L.prototype.inspect = function() {
  return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
};
L.prototype.isInfinity = function() {
  return this.inf;
};
L.prototype.add = function(e) {
  if (this.inf)
    return e;
  if (e.inf)
    return this;
  if (this.eq(e))
    return this.dbl();
  if (this.neg().eq(e))
    return this.curve.point(null, null);
  if (this.x.cmp(e.x) === 0)
    return this.curve.point(null, null);
  var t = this.y.redSub(e.y);
  t.cmpn(0) !== 0 && (t = t.redMul(this.x.redSub(e.x).redInvm()));
  var r = t.redSqr().redISub(this.x).redISub(e.x), i = t.redMul(this.x.redSub(r)).redISub(this.y);
  return this.curve.point(r, i);
};
L.prototype.dbl = function() {
  if (this.inf)
    return this;
  var e = this.y.redAdd(this.y);
  if (e.cmpn(0) === 0)
    return this.curve.point(null, null);
  var t = this.curve.a, r = this.x.redSqr(), i = e.redInvm(), s = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(i), o = s.redSqr().redISub(this.x.redAdd(this.x)), a = s.redMul(this.x.redSub(o)).redISub(this.y);
  return this.curve.point(o, a);
};
L.prototype.getX = function() {
  return this.x.fromRed();
};
L.prototype.getY = function() {
  return this.y.fromRed();
};
L.prototype.mul = function(e) {
  return e = new x(e, 16), this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e);
};
L.prototype.mulAdd = function(e, t, r) {
  var i = [this, t], s = [e, r];
  return this.curve.endo ? this.curve._endoWnafMulAdd(i, s) : this.curve._wnafMulAdd(1, i, s, 2);
};
L.prototype.jmulAdd = function(e, t, r) {
  var i = [this, t], s = [e, r];
  return this.curve.endo ? this.curve._endoWnafMulAdd(i, s, !0) : this.curve._wnafMulAdd(1, i, s, 2, !0);
};
L.prototype.eq = function(e) {
  return this === e || this.inf === e.inf && (this.inf || this.x.cmp(e.x) === 0 && this.y.cmp(e.y) === 0);
};
L.prototype.neg = function(e) {
  if (this.inf)
    return this;
  var t = this.curve.point(this.x, this.y.redNeg());
  if (e && this.precomputed) {
    var r = this.precomputed, i = function(s) {
      return s.neg();
    };
    t.precomputed = {
      naf: r.naf && {
        wnd: r.naf.wnd,
        points: r.naf.points.map(i)
      },
      doubles: r.doubles && {
        step: r.doubles.step,
        points: r.doubles.points.map(i)
      }
    };
  }
  return t;
};
L.prototype.toJ = function() {
  if (this.inf)
    return this.curve.jpoint(null, null, null);
  var e = this.curve.jpoint(this.x, this.y, this.curve.one);
  return e;
};
function H(n, e, t, r) {
  Se.BasePoint.call(this, n, "jacobian"), e === null && t === null && r === null ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new x(0)) : (this.x = new x(e, 16), this.y = new x(t, 16), this.z = new x(r, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
}
sr(H, Se.BasePoint);
ie.prototype.jpoint = function(e, t, r) {
  return new H(this, e, t, r);
};
H.prototype.toP = function() {
  if (this.isInfinity())
    return this.curve.point(null, null);
  var e = this.z.redInvm(), t = e.redSqr(), r = this.x.redMul(t), i = this.y.redMul(t).redMul(e);
  return this.curve.point(r, i);
};
H.prototype.neg = function() {
  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
};
H.prototype.add = function(e) {
  if (this.isInfinity())
    return e;
  if (e.isInfinity())
    return this;
  var t = e.z.redSqr(), r = this.z.redSqr(), i = this.x.redMul(t), s = e.x.redMul(r), o = this.y.redMul(t.redMul(e.z)), a = e.y.redMul(r.redMul(this.z)), c = i.redSub(s), l = o.redSub(a);
  if (c.cmpn(0) === 0)
    return l.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var f = c.redSqr(), u = f.redMul(c), p = i.redMul(f), d = l.redSqr().redIAdd(u).redISub(p).redISub(p), g = l.redMul(p.redISub(d)).redISub(o.redMul(u)), m = this.z.redMul(e.z).redMul(c);
  return this.curve.jpoint(d, g, m);
};
H.prototype.mixedAdd = function(e) {
  if (this.isInfinity())
    return e.toJ();
  if (e.isInfinity())
    return this;
  var t = this.z.redSqr(), r = this.x, i = e.x.redMul(t), s = this.y, o = e.y.redMul(t).redMul(this.z), a = r.redSub(i), c = s.redSub(o);
  if (a.cmpn(0) === 0)
    return c.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var l = a.redSqr(), f = l.redMul(a), u = r.redMul(l), p = c.redSqr().redIAdd(f).redISub(u).redISub(u), d = c.redMul(u.redISub(p)).redISub(s.redMul(f)), g = this.z.redMul(a);
  return this.curve.jpoint(p, d, g);
};
H.prototype.dblp = function(e) {
  if (e === 0)
    return this;
  if (this.isInfinity())
    return this;
  if (!e)
    return this.dbl();
  var t;
  if (this.curve.zeroA || this.curve.threeA) {
    var r = this;
    for (t = 0; t < e; t++)
      r = r.dbl();
    return r;
  }
  var i = this.curve.a, s = this.curve.tinv, o = this.x, a = this.y, c = this.z, l = c.redSqr().redSqr(), f = a.redAdd(a);
  for (t = 0; t < e; t++) {
    var u = o.redSqr(), p = f.redSqr(), d = p.redSqr(), g = u.redAdd(u).redIAdd(u).redIAdd(i.redMul(l)), m = o.redMul(p), E = g.redSqr().redISub(m.redAdd(m)), A = m.redISub(E), b = g.redMul(A);
    b = b.redIAdd(b).redISub(d);
    var T = f.redMul(c);
    t + 1 < e && (l = l.redMul(d)), o = E, c = T, f = b;
  }
  return this.curve.jpoint(o, f.redMul(s), c);
};
H.prototype.dbl = function() {
  return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
};
H.prototype._zeroDbl = function() {
  var e, t, r;
  if (this.zOne) {
    var i = this.x.redSqr(), s = this.y.redSqr(), o = s.redSqr(), a = this.x.redAdd(s).redSqr().redISub(i).redISub(o);
    a = a.redIAdd(a);
    var c = i.redAdd(i).redIAdd(i), l = c.redSqr().redISub(a).redISub(a), f = o.redIAdd(o);
    f = f.redIAdd(f), f = f.redIAdd(f), e = l, t = c.redMul(a.redISub(l)).redISub(f), r = this.y.redAdd(this.y);
  } else {
    var u = this.x.redSqr(), p = this.y.redSqr(), d = p.redSqr(), g = this.x.redAdd(p).redSqr().redISub(u).redISub(d);
    g = g.redIAdd(g);
    var m = u.redAdd(u).redIAdd(u), E = m.redSqr(), A = d.redIAdd(d);
    A = A.redIAdd(A), A = A.redIAdd(A), e = E.redISub(g).redISub(g), t = m.redMul(g.redISub(e)).redISub(A), r = this.y.redMul(this.z), r = r.redIAdd(r);
  }
  return this.curve.jpoint(e, t, r);
};
H.prototype._threeDbl = function() {
  var e, t, r;
  if (this.zOne) {
    var i = this.x.redSqr(), s = this.y.redSqr(), o = s.redSqr(), a = this.x.redAdd(s).redSqr().redISub(i).redISub(o);
    a = a.redIAdd(a);
    var c = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a), l = c.redSqr().redISub(a).redISub(a);
    e = l;
    var f = o.redIAdd(o);
    f = f.redIAdd(f), f = f.redIAdd(f), t = c.redMul(a.redISub(l)).redISub(f), r = this.y.redAdd(this.y);
  } else {
    var u = this.z.redSqr(), p = this.y.redSqr(), d = this.x.redMul(p), g = this.x.redSub(u).redMul(this.x.redAdd(u));
    g = g.redAdd(g).redIAdd(g);
    var m = d.redIAdd(d);
    m = m.redIAdd(m);
    var E = m.redAdd(m);
    e = g.redSqr().redISub(E), r = this.y.redAdd(this.z).redSqr().redISub(p).redISub(u);
    var A = p.redSqr();
    A = A.redIAdd(A), A = A.redIAdd(A), A = A.redIAdd(A), t = g.redMul(m.redISub(e)).redISub(A);
  }
  return this.curve.jpoint(e, t, r);
};
H.prototype._dbl = function() {
  var e = this.curve.a, t = this.x, r = this.y, i = this.z, s = i.redSqr().redSqr(), o = t.redSqr(), a = r.redSqr(), c = o.redAdd(o).redIAdd(o).redIAdd(e.redMul(s)), l = t.redAdd(t);
  l = l.redIAdd(l);
  var f = l.redMul(a), u = c.redSqr().redISub(f.redAdd(f)), p = f.redISub(u), d = a.redSqr();
  d = d.redIAdd(d), d = d.redIAdd(d), d = d.redIAdd(d);
  var g = c.redMul(p).redISub(d), m = r.redAdd(r).redMul(i);
  return this.curve.jpoint(u, g, m);
};
H.prototype.trpl = function() {
  if (!this.curve.zeroA)
    return this.dbl().add(this);
  var e = this.x.redSqr(), t = this.y.redSqr(), r = this.z.redSqr(), i = t.redSqr(), s = e.redAdd(e).redIAdd(e), o = s.redSqr(), a = this.x.redAdd(t).redSqr().redISub(e).redISub(i);
  a = a.redIAdd(a), a = a.redAdd(a).redIAdd(a), a = a.redISub(o);
  var c = a.redSqr(), l = i.redIAdd(i);
  l = l.redIAdd(l), l = l.redIAdd(l), l = l.redIAdd(l);
  var f = s.redIAdd(a).redSqr().redISub(o).redISub(c).redISub(l), u = t.redMul(f);
  u = u.redIAdd(u), u = u.redIAdd(u);
  var p = this.x.redMul(c).redISub(u);
  p = p.redIAdd(p), p = p.redIAdd(p);
  var d = this.y.redMul(f.redMul(l.redISub(f)).redISub(a.redMul(c)));
  d = d.redIAdd(d), d = d.redIAdd(d), d = d.redIAdd(d);
  var g = this.z.redAdd(a).redSqr().redISub(r).redISub(c);
  return this.curve.jpoint(p, d, g);
};
H.prototype.mul = function(e, t) {
  return e = new x(e, t), this.curve._wnafMul(this, e);
};
H.prototype.eq = function(e) {
  if (e.type === "affine")
    return this.eq(e.toJ());
  if (this === e)
    return !0;
  var t = this.z.redSqr(), r = e.z.redSqr();
  if (this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0) !== 0)
    return !1;
  var i = t.redMul(this.z), s = r.redMul(e.z);
  return this.y.redMul(s).redISub(e.y.redMul(i)).cmpn(0) === 0;
};
H.prototype.eqXToP = function(e) {
  var t = this.z.redSqr(), r = e.toRed(this.curve.red).redMul(t);
  if (this.x.cmp(r) === 0)
    return !0;
  for (var i = e.clone(), s = this.curve.redN.redMul(t); ; ) {
    if (i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0)
      return !1;
    if (r.redIAdd(s), this.x.cmp(r) === 0)
      return !0;
  }
};
H.prototype.inspect = function() {
  return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
};
H.prototype.isInfinity = function() {
  return this.z.cmpn(0) === 0;
};
var ct = Le(function(n, e) {
  var t = e;
  t.base = Se, t.short = ks, t.mont = null, t.edwards = null;
}), lt = Le(function(n, e) {
  var t = e, r = $.assert;
  function i(a) {
    a.type === "short" ? this.curve = new ct.short(a) : a.type === "edwards" ? this.curve = new ct.edwards(a) : this.curve = new ct.mont(a), this.g = this.curve.g, this.n = this.curve.n, this.hash = a.hash, r(this.g.validate(), "Invalid curve"), r(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
  }
  t.PresetCurve = i;
  function s(a, c) {
    Object.defineProperty(t, a, {
      configurable: !0,
      enumerable: !0,
      get: function() {
        var l = new i(c);
        return Object.defineProperty(t, a, {
          configurable: !0,
          enumerable: !0,
          value: l
        }), l;
      }
    });
  }
  s("p192", {
    type: "short",
    prime: "p192",
    p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
    a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
    b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
    n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
    hash: he.sha256,
    gRed: !1,
    g: [
      "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
      "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"
    ]
  }), s("p224", {
    type: "short",
    prime: "p224",
    p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
    a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
    b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
    n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
    hash: he.sha256,
    gRed: !1,
    g: [
      "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
      "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"
    ]
  }), s("p256", {
    type: "short",
    prime: null,
    p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
    a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
    b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
    n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
    hash: he.sha256,
    gRed: !1,
    g: [
      "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
      "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"
    ]
  }), s("p384", {
    type: "short",
    prime: null,
    p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
    a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
    b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
    n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
    hash: he.sha384,
    gRed: !1,
    g: [
      "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
      "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"
    ]
  }), s("p521", {
    type: "short",
    prime: null,
    p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
    a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
    b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
    n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
    hash: he.sha512,
    gRed: !1,
    g: [
      "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
      "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"
    ]
  }), s("curve25519", {
    type: "mont",
    prime: "p25519",
    p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
    a: "76d06",
    b: "1",
    n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
    hash: he.sha256,
    gRed: !1,
    g: [
      "9"
    ]
  }), s("ed25519", {
    type: "edwards",
    prime: "p25519",
    p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
    a: "-1",
    c: "1",
    d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
    n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
    hash: he.sha256,
    gRed: !1,
    g: [
      "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
      "6666666666666666666666666666666666666666666666666666666666666658"
    ]
  });
  var o;
  try {
    o = null.crash();
  } catch {
    o = void 0;
  }
  s("secp256k1", {
    type: "short",
    prime: "k256",
    p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
    a: "0",
    b: "7",
    n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
    h: "1",
    hash: he.sha256,
    beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
    lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
    basis: [
      {
        a: "3086d221a7d46bcde86c90e49284eb15",
        b: "-e4437ed6010e88286f547fa90abfe4c3"
      },
      {
        a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
        b: "3086d221a7d46bcde86c90e49284eb15"
      }
    ],
    gRed: !1,
    g: [
      "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
      "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
      o
    ]
  });
});
function ke(n) {
  if (!(this instanceof ke))
    return new ke(n);
  this.hash = n.hash, this.predResist = !!n.predResist, this.outLen = this.hash.outSize, this.minEntropy = n.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
  var e = fe.toArray(n.entropy, n.entropyEnc || "hex"), t = fe.toArray(n.nonce, n.nonceEnc || "hex"), r = fe.toArray(n.pers, n.persEnc || "hex");
  ir(
    e.length >= this.minEntropy / 8,
    "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
  ), this._init(e, t, r);
}
var Un = ke;
ke.prototype._init = function(e, t, r) {
  var i = e.concat(t).concat(r);
  this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
  for (var s = 0; s < this.V.length; s++)
    this.K[s] = 0, this.V[s] = 1;
  this._update(i), this._reseed = 1, this.reseedInterval = 281474976710656;
};
ke.prototype._hmac = function() {
  return new he.hmac(this.hash, this.K);
};
ke.prototype._update = function(e) {
  var t = this._hmac().update(this.V).update([0]);
  e && (t = t.update(e)), this.K = t.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest());
};
ke.prototype.reseed = function(e, t, r, i) {
  typeof t != "string" && (i = r, r = t, t = null), e = fe.toArray(e, t), r = fe.toArray(r, i), ir(
    e.length >= this.minEntropy / 8,
    "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
  ), this._update(e.concat(r || [])), this._reseed = 1;
};
ke.prototype.generate = function(e, t, r, i) {
  if (this._reseed > this.reseedInterval)
    throw new Error("Reseed is required");
  typeof t != "string" && (i = r, r = t, t = null), r && (r = fe.toArray(r, i || "hex"), this._update(r));
  for (var s = []; s.length < e; )
    this.V = this._hmac().update(this.V).digest(), s = s.concat(this.V);
  var o = s.slice(0, e);
  return this._update(r), this._reseed++, fe.encode(o, t);
};
var Zt = $.assert;
function z(n, e) {
  this.ec = n, this.priv = null, this.pub = null, e.priv && this._importPrivate(e.priv, e.privEnc), e.pub && this._importPublic(e.pub, e.pubEnc);
}
var or = z;
z.fromPublic = function(e, t, r) {
  return t instanceof z ? t : new z(e, {
    pub: t,
    pubEnc: r
  });
};
z.fromPrivate = function(e, t, r) {
  return t instanceof z ? t : new z(e, {
    priv: t,
    privEnc: r
  });
};
z.prototype.validate = function() {
  var e = this.getPublic();
  return e.isInfinity() ? { result: !1, reason: "Invalid public key" } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? { result: !0, reason: null } : { result: !1, reason: "Public key * N != O" } : { result: !1, reason: "Public key is not a point" };
};
z.prototype.getPublic = function(e, t) {
  return typeof e == "string" && (t = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), t ? this.pub.encode(t, e) : this.pub;
};
z.prototype.getPrivate = function(e) {
  return e === "hex" ? this.priv.toString(16, 2) : this.priv;
};
z.prototype._importPrivate = function(e, t) {
  this.priv = new x(e, t || 16), this.priv = this.priv.umod(this.ec.curve.n);
};
z.prototype._importPublic = function(e, t) {
  if (e.x || e.y) {
    this.ec.curve.type === "mont" ? Zt(e.x, "Need x coordinate") : (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") && Zt(e.x && e.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(e.x, e.y);
    return;
  }
  this.pub = this.ec.curve.decodePoint(e, t);
};
z.prototype.derive = function(e) {
  return e.validate() || Zt(e.validate(), "public point not validated"), e.mul(this.priv).getX();
};
z.prototype.sign = function(e, t, r) {
  return this.ec.sign(e, this, t, r);
};
z.prototype.verify = function(e, t) {
  return this.ec.verify(e, t, this);
};
z.prototype.inspect = function() {
  return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
};
var Ns = $.assert;
function Rt(n, e) {
  if (n instanceof Rt)
    return n;
  this._importDER(n, e) || (Ns(n.r && n.s, "Signature without r or s"), this.r = new x(n.r, 16), this.s = new x(n.s, 16), n.recoveryParam === void 0 ? this.recoveryParam = null : this.recoveryParam = n.recoveryParam);
}
var St = Rt;
function xs() {
  this.place = 0;
}
function Lt(n, e) {
  var t = n[e.place++];
  if (!(t & 128))
    return t;
  var r = t & 15;
  if (r === 0 || r > 4)
    return !1;
  for (var i = 0, s = 0, o = e.place; s < r; s++, o++)
    i <<= 8, i |= n[o], i >>>= 0;
  return i <= 127 ? !1 : (e.place = o, i);
}
function Fr(n) {
  for (var e = 0, t = n.length - 1; !n[e] && !(n[e + 1] & 128) && e < t; )
    e++;
  return e === 0 ? n : n.slice(e);
}
Rt.prototype._importDER = function(e, t) {
  e = $.toArray(e, t);
  var r = new xs();
  if (e[r.place++] !== 48)
    return !1;
  var i = Lt(e, r);
  if (i === !1 || i + r.place !== e.length || e[r.place++] !== 2)
    return !1;
  var s = Lt(e, r);
  if (s === !1)
    return !1;
  var o = e.slice(r.place, s + r.place);
  if (r.place += s, e[r.place++] !== 2)
    return !1;
  var a = Lt(e, r);
  if (a === !1 || e.length !== a + r.place)
    return !1;
  var c = e.slice(r.place, a + r.place);
  if (o[0] === 0)
    if (o[1] & 128)
      o = o.slice(1);
    else
      return !1;
  if (c[0] === 0)
    if (c[1] & 128)
      c = c.slice(1);
    else
      return !1;
  return this.r = new x(o), this.s = new x(c), this.recoveryParam = null, !0;
};
function qt(n, e) {
  if (e < 128) {
    n.push(e);
    return;
  }
  var t = 1 + (Math.log(e) / Math.LN2 >>> 3);
  for (n.push(t | 128); --t; )
    n.push(e >>> (t << 3) & 255);
  n.push(e);
}
Rt.prototype.toDER = function(e) {
  var t = this.r.toArray(), r = this.s.toArray();
  for (t[0] & 128 && (t = [0].concat(t)), r[0] & 128 && (r = [0].concat(r)), t = Fr(t), r = Fr(r); !r[0] && !(r[1] & 128); )
    r = r.slice(1);
  var i = [2];
  qt(i, t.length), i = i.concat(t), i.push(2), qt(i, r.length);
  var s = i.concat(r), o = [48];
  return qt(o, s.length), o = o.concat(s), $.encode(o, e);
};
var Ps = function() {
  throw new Error("unsupported");
}, Dn = $.assert;
function re(n) {
  if (!(this instanceof re))
    return new re(n);
  typeof n == "string" && (Dn(
    Object.prototype.hasOwnProperty.call(lt, n),
    "Unknown curve " + n
  ), n = lt[n]), n instanceof lt.PresetCurve && (n = { curve: n }), this.curve = n.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = n.curve.g, this.g.precompute(n.curve.n.bitLength() + 1), this.hash = n.hash || n.curve.hash;
}
var Is = re;
re.prototype.keyPair = function(e) {
  return new or(this, e);
};
re.prototype.keyFromPrivate = function(e, t) {
  return or.fromPrivate(this, e, t);
};
re.prototype.keyFromPublic = function(e, t) {
  return or.fromPublic(this, e, t);
};
re.prototype.genKeyPair = function(e) {
  e || (e = {});
  for (var t = new Un({
    hash: this.hash,
    pers: e.pers,
    persEnc: e.persEnc || "utf8",
    entropy: e.entropy || Ps(this.hash.hmacStrength),
    entropyEnc: e.entropy && e.entropyEnc || "utf8",
    nonce: this.n.toArray()
  }), r = this.n.byteLength(), i = this.n.sub(new x(2)); ; ) {
    var s = new x(t.generate(r));
    if (!(s.cmp(i) > 0))
      return s.iaddn(1), this.keyFromPrivate(s);
  }
};
re.prototype._truncateToN = function(e, t) {
  var r = e.byteLength() * 8 - this.n.bitLength();
  return r > 0 && (e = e.ushrn(r)), !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e;
};
re.prototype.sign = function(e, t, r, i) {
  typeof r == "object" && (i = r, r = null), i || (i = {}), t = this.keyFromPrivate(t, r), e = this._truncateToN(new x(e, 16));
  for (var s = this.n.byteLength(), o = t.getPrivate().toArray("be", s), a = e.toArray("be", s), c = new Un({
    hash: this.hash,
    entropy: o,
    nonce: a,
    pers: i.pers,
    persEnc: i.persEnc || "utf8"
  }), l = this.n.sub(new x(1)), f = 0; ; f++) {
    var u = i.k ? i.k(f) : new x(c.generate(this.n.byteLength()));
    if (u = this._truncateToN(u, !0), !(u.cmpn(1) <= 0 || u.cmp(l) >= 0)) {
      var p = this.g.mul(u);
      if (!p.isInfinity()) {
        var d = p.getX(), g = d.umod(this.n);
        if (g.cmpn(0) !== 0) {
          var m = u.invm(this.n).mul(g.mul(t.getPrivate()).iadd(e));
          if (m = m.umod(this.n), m.cmpn(0) !== 0) {
            var E = (p.getY().isOdd() ? 1 : 0) | (d.cmp(g) !== 0 ? 2 : 0);
            return i.canonical && m.cmp(this.nh) > 0 && (m = this.n.sub(m), E ^= 1), new St({ r: g, s: m, recoveryParam: E });
          }
        }
      }
    }
  }
};
re.prototype.verify = function(e, t, r, i) {
  e = this._truncateToN(new x(e, 16)), r = this.keyFromPublic(r, i), t = new St(t, "hex");
  var s = t.r, o = t.s;
  if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0 || o.cmpn(1) < 0 || o.cmp(this.n) >= 0)
    return !1;
  var a = o.invm(this.n), c = a.mul(e).umod(this.n), l = a.mul(s).umod(this.n), f;
  return this.curve._maxwellTrick ? (f = this.g.jmulAdd(c, r.getPublic(), l), f.isInfinity() ? !1 : f.eqXToP(s)) : (f = this.g.mulAdd(c, r.getPublic(), l), f.isInfinity() ? !1 : f.getX().umod(this.n).cmp(s) === 0);
};
re.prototype.recoverPubKey = function(n, e, t, r) {
  Dn((3 & t) === t, "The recovery param is more than two bits"), e = new St(e, r);
  var i = this.n, s = new x(n), o = e.r, a = e.s, c = t & 1, l = t >> 1;
  if (o.cmp(this.curve.p.umod(this.curve.n)) >= 0 && l)
    throw new Error("Unable to find sencond key candinate");
  l ? o = this.curve.pointFromX(o.add(this.curve.n), c) : o = this.curve.pointFromX(o, c);
  var f = e.r.invm(i), u = i.sub(s).mul(f).umod(i), p = a.mul(f).umod(i);
  return this.g.mulAdd(u, o, p);
};
re.prototype.getKeyRecoveryParam = function(n, e, t, r) {
  if (e = new St(e, r), e.recoveryParam !== null)
    return e.recoveryParam;
  for (var i = 0; i < 4; i++) {
    var s;
    try {
      s = this.recoverPubKey(n, e, i);
    } catch {
      continue;
    }
    if (s.eq(t))
      return i;
  }
  throw new Error("Unable to find valid recovery factor");
};
var _s = Le(function(n, e) {
  var t = e;
  t.version = "6.5.4", t.utils = $, t.rand = function() {
    throw new Error("unsupported");
  }, t.curve = ct, t.curves = lt, t.ec = Is, t.eddsa = null;
}), Rs = _s.ec;
const Ss = "signing-key/5.7.0", $t = new h(Ss);
let Gt = null;
function ge() {
  return Gt || (Gt = new Rs("secp256k1")), Gt;
}
class Ts {
  constructor(e) {
    y(this, "curve", "secp256k1"), y(this, "privateKey", N(e)), Re(this.privateKey) !== 32 && $t.throwArgumentError("invalid private key", "privateKey", "[[ REDACTED ]]");
    const t = ge().keyFromPrivate(P(this.privateKey));
    y(this, "publicKey", "0x" + t.getPublic(!1, "hex")), y(this, "compressedPublicKey", "0x" + t.getPublic(!0, "hex")), y(this, "_isSigningKey", !0);
  }
  _addPoint(e) {
    const t = ge().keyFromPublic(P(this.publicKey)), r = ge().keyFromPublic(P(e));
    return "0x" + t.pub.add(r.pub).encodeCompressed("hex");
  }
  signDigest(e) {
    const t = ge().keyFromPrivate(P(this.privateKey)), r = P(e);
    r.length !== 32 && $t.throwArgumentError("bad digest length", "digest", e);
    const i = t.sign(r, { canonical: !0 });
    return kt({
      recoveryParam: i.recoveryParam,
      r: D("0x" + i.r.toString(16), 32),
      s: D("0x" + i.s.toString(16), 32)
    });
  }
  computeSharedSecret(e) {
    const t = ge().keyFromPrivate(P(this.privateKey)), r = ge().keyFromPublic(P(Mn(e)));
    return D("0x" + t.derive(r.getPublic()).toString(16), 32);
  }
  static isSigningKey(e) {
    return !!(e && e._isSigningKey);
  }
}
function Cs(n, e) {
  const t = kt(e), r = { r: P(t.r), s: P(t.s) };
  return "0x" + ge().recoverPubKey(P(n), r, t.recoveryParam).encode("hex", !1);
}
function Mn(n, e) {
  const t = P(n);
  if (t.length === 32) {
    const r = new Ts(t);
    return e ? "0x" + ge().keyFromPrivate(t).getPublic(!0, "hex") : r.publicKey;
  } else {
    if (t.length === 33)
      return e ? N(t) : "0x" + ge().keyFromPublic(t).getPublic(!1, "hex");
    if (t.length === 65)
      return e ? "0x" + ge().keyFromPublic(t).getPublic(!0, "hex") : N(t);
  }
  return $t.throwArgumentError("invalid public or private key", "key", "[REDACTED]");
}
const Bs = "transactions/5.7.0", we = new h(Bs);
var Lr;
(function(n) {
  n[n.legacy = 0] = "legacy", n[n.eip2930 = 1] = "eip2930", n[n.eip1559 = 2] = "eip1559";
})(Lr || (Lr = {}));
function ar(n) {
  return n === "0x" ? null : ue(n);
}
function j(n) {
  return n === "0x" ? gi : w.from(n);
}
function Os(n) {
  const e = Mn(n);
  return ue(K(G(K(e, 1)), 12));
}
function Fn(n, e) {
  return Os(Cs(P(n), e));
}
function V(n, e) {
  const t = Me(w.from(n).toHexString());
  return t.length > 32 && we.throwArgumentError("invalid length for " + e, "transaction:" + e, n), t;
}
function Ht(n, e) {
  return {
    address: ue(n),
    storageKeys: (e || []).map((t, r) => (Re(t) !== 32 && we.throwArgumentError("invalid access list storageKey", `accessList[${n}:${r}]`, t), t.toLowerCase()))
  };
}
function qe(n) {
  if (Array.isArray(n))
    return n.map((t, r) => Array.isArray(t) ? (t.length > 2 && we.throwArgumentError("access list expected to be [ address, storageKeys[] ]", `value[${r}]`, t), Ht(t[0], t[1])) : Ht(t.address, t.storageKeys));
  const e = Object.keys(n).map((t) => {
    const r = n[t].reduce((i, s) => (i[s] = !0, i), {});
    return Ht(t, Object.keys(r).sort());
  });
  return e.sort((t, r) => t.address.localeCompare(r.address)), e;
}
function Ln(n) {
  return qe(n).map((e) => [e.address, e.storageKeys]);
}
function Us(n, e) {
  if (n.gasPrice != null) {
    const r = w.from(n.gasPrice), i = w.from(n.maxFeePerGas || 0);
    r.eq(i) || we.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas", "tx", {
      gasPrice: r,
      maxFeePerGas: i
    });
  }
  const t = [
    V(n.chainId || 0, "chainId"),
    V(n.nonce || 0, "nonce"),
    V(n.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
    V(n.maxFeePerGas || 0, "maxFeePerGas"),
    V(n.gasLimit || 0, "gasLimit"),
    n.to != null ? ue(n.to) : "0x",
    V(n.value || 0, "value"),
    n.data || "0x",
    Ln(n.accessList || [])
  ];
  if (e) {
    const r = kt(e);
    t.push(V(r.recoveryParam, "recoveryParam")), t.push(Me(r.r)), t.push(Me(r.s));
  }
  return Z(["0x02", It(t)]);
}
function Ds(n, e) {
  const t = [
    V(n.chainId || 0, "chainId"),
    V(n.nonce || 0, "nonce"),
    V(n.gasPrice || 0, "gasPrice"),
    V(n.gasLimit || 0, "gasLimit"),
    n.to != null ? ue(n.to) : "0x",
    V(n.value || 0, "value"),
    n.data || "0x",
    Ln(n.accessList || [])
  ];
  if (e) {
    const r = kt(e);
    t.push(V(r.recoveryParam, "recoveryParam")), t.push(Me(r.r)), t.push(Me(r.s));
  }
  return Z(["0x01", It(t)]);
}
function qn(n, e, t) {
  try {
    const r = j(e[0]).toNumber();
    if (r !== 0 && r !== 1)
      throw new Error("bad recid");
    n.v = r;
  } catch {
    we.throwArgumentError("invalid v for transaction type: 1", "v", e[0]);
  }
  n.r = D(e[1], 32), n.s = D(e[2], 32);
  try {
    const r = G(t(n));
    n.from = Fn(r, { r: n.r, s: n.s, recoveryParam: n.v });
  } catch {
  }
}
function Ms(n) {
  const e = rr(n.slice(1));
  e.length !== 9 && e.length !== 12 && we.throwArgumentError("invalid component count for transaction type: 2", "payload", N(n));
  const t = j(e[2]), r = j(e[3]), i = {
    type: 2,
    chainId: j(e[0]).toNumber(),
    nonce: j(e[1]).toNumber(),
    maxPriorityFeePerGas: t,
    maxFeePerGas: r,
    gasPrice: null,
    gasLimit: j(e[4]),
    to: ar(e[5]),
    value: j(e[6]),
    data: e[7],
    accessList: qe(e[8])
  };
  return e.length === 9 || (i.hash = G(n), qn(i, e.slice(9), Us)), i;
}
function Fs(n) {
  const e = rr(n.slice(1));
  e.length !== 8 && e.length !== 11 && we.throwArgumentError("invalid component count for transaction type: 1", "payload", N(n));
  const t = {
    type: 1,
    chainId: j(e[0]).toNumber(),
    nonce: j(e[1]).toNumber(),
    gasPrice: j(e[2]),
    gasLimit: j(e[3]),
    to: ar(e[4]),
    value: j(e[5]),
    data: e[6],
    accessList: qe(e[7])
  };
  return e.length === 8 || (t.hash = G(n), qn(t, e.slice(8), Ds)), t;
}
function Ls(n) {
  const e = rr(n);
  e.length !== 9 && e.length !== 6 && we.throwArgumentError("invalid raw transaction", "rawTransaction", n);
  const t = {
    nonce: j(e[0]).toNumber(),
    gasPrice: j(e[1]),
    gasLimit: j(e[2]),
    to: ar(e[3]),
    value: j(e[4]),
    data: e[5],
    chainId: 0
  };
  if (e.length === 6)
    return t;
  try {
    t.v = w.from(e[6]).toNumber();
  } catch {
    return t;
  }
  if (t.r = D(e[7], 32), t.s = D(e[8], 32), w.from(t.r).isZero() && w.from(t.s).isZero())
    t.chainId = t.v, t.v = 0;
  else {
    t.chainId = Math.floor((t.v - 35) / 2), t.chainId < 0 && (t.chainId = 0);
    let r = t.v - 27;
    const i = e.slice(0, 6);
    t.chainId !== 0 && (i.push(N(t.chainId)), i.push("0x"), i.push("0x"), r -= t.chainId * 2 + 8);
    const s = G(It(i));
    try {
      t.from = Fn(s, { r: N(t.r), s: N(t.s), recoveryParam: r });
    } catch {
    }
    t.hash = G(n);
  }
  return t.type = null, t;
}
function qs(n) {
  const e = P(n);
  if (e[0] > 127)
    return Ls(e);
  switch (e[0]) {
    case 1:
      return Fs(e);
    case 2:
      return Ms(e);
  }
  return we.throwError(`unsupported transaction type: ${e[0]}`, h.errors.UNSUPPORTED_OPERATION, {
    operation: "parseTransaction",
    transactionType: e[0]
  });
}
const Ge = new h(J);
class v {
  constructor() {
    this.formats = this.getDefaultFormats();
  }
  getDefaultFormats() {
    const e = {}, t = this.address.bind(this), r = this.bigNumber.bind(this), i = this.blockTag.bind(this), s = this.data.bind(this), o = this.hash.bind(this), a = this.hex.bind(this), c = this.number.bind(this), l = this.type.bind(this), f = (u) => this.data(u, !0);
    return e.transaction = {
      hash: o,
      type: l,
      accessList: v.allowNull(this.accessList.bind(this), null),
      blockHash: v.allowNull(o, null),
      blockNumber: v.allowNull(c, null),
      transactionIndex: v.allowNull(c, null),
      confirmations: v.allowNull(c, null),
      from: t,
      gasPrice: v.allowNull(r),
      maxPriorityFeePerGas: v.allowNull(r),
      maxFeePerGas: v.allowNull(r),
      gasLimit: r,
      to: v.allowNull(t, null),
      value: r,
      nonce: c,
      data: s,
      r: v.allowNull(this.uint256),
      s: v.allowNull(this.uint256),
      v: v.allowNull(c),
      creates: v.allowNull(t, null),
      raw: v.allowNull(s)
    }, e.transactionRequest = {
      from: v.allowNull(t),
      nonce: v.allowNull(c),
      gasLimit: v.allowNull(r),
      gasPrice: v.allowNull(r),
      maxPriorityFeePerGas: v.allowNull(r),
      maxFeePerGas: v.allowNull(r),
      to: v.allowNull(t),
      value: v.allowNull(r),
      data: v.allowNull(f),
      type: v.allowNull(c),
      accessList: v.allowNull(this.accessList.bind(this), null)
    }, e.receiptLog = {
      transactionIndex: c,
      blockNumber: c,
      transactionHash: o,
      address: t,
      topics: v.arrayOf(o),
      data: s,
      logIndex: c,
      blockHash: o
    }, e.receipt = {
      to: v.allowNull(this.address, null),
      from: v.allowNull(this.address, null),
      contractAddress: v.allowNull(t, null),
      transactionIndex: c,
      root: v.allowNull(a),
      gasUsed: r,
      logsBloom: v.allowNull(s),
      blockHash: o,
      transactionHash: o,
      logs: v.arrayOf(this.receiptLog.bind(this)),
      blockNumber: c,
      confirmations: v.allowNull(c, null),
      cumulativeGasUsed: r,
      effectiveGasPrice: v.allowNull(r),
      status: v.allowNull(c),
      type: l
    }, e.block = {
      hash: v.allowNull(o),
      parentHash: o,
      number: c,
      timestamp: c,
      nonce: v.allowNull(a),
      difficulty: this.difficulty.bind(this),
      gasLimit: r,
      gasUsed: r,
      miner: v.allowNull(t),
      extraData: s,
      transactions: v.allowNull(v.arrayOf(o)),
      baseFeePerGas: v.allowNull(r)
    }, e.blockWithTransactions = F(e.block), e.blockWithTransactions.transactions = v.allowNull(v.arrayOf(this.transactionResponse.bind(this))), e.filter = {
      fromBlock: v.allowNull(i, void 0),
      toBlock: v.allowNull(i, void 0),
      blockHash: v.allowNull(o, void 0),
      address: v.allowNull(t, void 0),
      topics: v.allowNull(this.topics.bind(this), void 0)
    }, e.filterLog = {
      blockNumber: v.allowNull(c),
      blockHash: v.allowNull(o),
      transactionIndex: c,
      removed: v.allowNull(this.boolean.bind(this)),
      address: t,
      data: v.allowFalsish(s, "0x"),
      topics: v.arrayOf(o),
      transactionHash: o,
      logIndex: c
    }, e;
  }
  accessList(e) {
    return qe(e || []);
  }
  number(e) {
    return e === "0x" ? 0 : w.from(e).toNumber();
  }
  type(e) {
    return e === "0x" || e == null ? 0 : w.from(e).toNumber();
  }
  bigNumber(e) {
    return w.from(e);
  }
  boolean(e) {
    if (typeof e == "boolean")
      return e;
    if (typeof e == "string") {
      if (e = e.toLowerCase(), e === "true")
        return !0;
      if (e === "false")
        return !1;
    }
    throw new Error("invalid boolean - " + e);
  }
  hex(e, t) {
    return typeof e == "string" && (!t && e.substring(0, 2) !== "0x" && (e = "0x" + e), S(e)) ? e.toLowerCase() : Ge.throwArgumentError("invalid hash", "value", e);
  }
  data(e, t) {
    const r = this.hex(e, t);
    if (r.length % 2 !== 0)
      throw new Error("invalid data; odd-length - " + e);
    return r;
  }
  address(e) {
    return ue(e);
  }
  callAddress(e) {
    if (!S(e, 32))
      return null;
    const t = ue(K(e, 12));
    return t === di ? null : t;
  }
  contractAddress(e) {
    return Vi(e);
  }
  blockTag(e) {
    if (e == null)
      return "latest";
    if (e === "earliest")
      return "0x0";
    switch (e) {
      case "earliest":
        return "0x0";
      case "latest":
      case "pending":
      case "safe":
      case "finalized":
        return e;
    }
    if (typeof e == "number" || S(e))
      return Et(e);
    throw new Error("invalid blockTag");
  }
  hash(e, t) {
    const r = this.hex(e, t);
    return Re(r) !== 32 ? Ge.throwArgumentError("invalid hash", "value", e) : r;
  }
  difficulty(e) {
    if (e == null)
      return null;
    const t = w.from(e);
    try {
      return t.toNumber();
    } catch {
    }
    return null;
  }
  uint256(e) {
    if (!S(e))
      throw new Error("invalid uint256");
    return D(e, 32);
  }
  _block(e, t) {
    e.author != null && e.miner == null && (e.miner = e.author);
    const r = e._difficulty != null ? e._difficulty : e.difficulty, i = v.check(t, e);
    return i._difficulty = r == null ? null : w.from(r), i;
  }
  block(e) {
    return this._block(e, this.formats.block);
  }
  blockWithTransactions(e) {
    return this._block(e, this.formats.blockWithTransactions);
  }
  transactionRequest(e) {
    return v.check(this.formats.transactionRequest, e);
  }
  transactionResponse(e) {
    e.gas != null && e.gasLimit == null && (e.gasLimit = e.gas), e.to && w.from(e.to).isZero() && (e.to = "0x0000000000000000000000000000000000000000"), e.input != null && e.data == null && (e.data = e.input), e.to == null && e.creates == null && (e.creates = this.contractAddress(e)), (e.type === 1 || e.type === 2) && e.accessList == null && (e.accessList = []);
    const t = v.check(this.formats.transaction, e);
    if (e.chainId != null) {
      let r = e.chainId;
      S(r) && (r = w.from(r).toNumber()), t.chainId = r;
    } else {
      let r = e.networkId;
      r == null && t.v == null && (r = e.chainId), S(r) && (r = w.from(r).toNumber()), typeof r != "number" && t.v != null && (r = (t.v - 35) / 2, r < 0 && (r = 0), r = parseInt(r)), typeof r != "number" && (r = 0), t.chainId = r;
    }
    return t.blockHash && t.blockHash.replace(/0/g, "") === "x" && (t.blockHash = null), t;
  }
  transaction(e) {
    return qs(e);
  }
  receiptLog(e) {
    return v.check(this.formats.receiptLog, e);
  }
  receipt(e) {
    const t = v.check(this.formats.receipt, e);
    if (t.root != null)
      if (t.root.length <= 4) {
        const r = w.from(t.root).toNumber();
        r === 0 || r === 1 ? (t.status != null && t.status !== r && Ge.throwArgumentError("alt-root-status/status mismatch", "value", { root: t.root, status: t.status }), t.status = r, delete t.root) : Ge.throwArgumentError("invalid alt-root-status", "value.root", t.root);
      } else
        t.root.length !== 66 && Ge.throwArgumentError("invalid root hash", "value.root", t.root);
    return t.status != null && (t.byzantium = !0), t;
  }
  topics(e) {
    return Array.isArray(e) ? e.map((t) => this.topics(t)) : e != null ? this.hash(e, !0) : null;
  }
  filter(e) {
    return v.check(this.formats.filter, e);
  }
  filterLog(e) {
    return v.check(this.formats.filterLog, e);
  }
  static check(e, t) {
    const r = {};
    for (const i in e)
      try {
        const s = e[i](t[i]);
        s !== void 0 && (r[i] = s);
      } catch (s) {
        throw s.checkKey = i, s.checkValue = t[i], s;
      }
    return r;
  }
  static allowNull(e, t) {
    return function(r) {
      return r == null ? t : e(r);
    };
  }
  static allowFalsish(e, t) {
    return function(r) {
      return r ? e(r) : t;
    };
  }
  static arrayOf(e) {
    return function(t) {
      if (!Array.isArray(t))
        throw new Error("not an array");
      const r = [];
      return t.forEach(function(i) {
        r.push(e(i));
      }), r;
    };
  }
}
function Gs(n) {
  return n && typeof n.isCommunityResource == "function";
}
function qr(n) {
  return Gs(n) && n.isCommunityResource();
}
let Gr = !1;
function Tt() {
  Gr || (Gr = !0, console.log("========= NOTICE ========="), console.log("Request-Rate Exceeded  (this message will not be repeated)"), console.log(""), console.log("The default API keys for each service are provided as a highly-throttled,"), console.log("community resource for low-traffic projects and early prototyping."), console.log(""), console.log("While your application will continue to function, we highly recommended"), console.log("signing up for your own API keys to improve performance, increase your"), console.log("request rate/limit and enable other perks, such as metrics and advanced APIs."), console.log(""), console.log("For more details: https://docs.ethers.io/api-keys/"), console.log("=========================="));
}
var k = globalThis && globalThis.__awaiter || function(n, e, t, r) {
  function i(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function a(f) {
      try {
        l(r.next(f));
      } catch (u) {
        o(u);
      }
    }
    function c(f) {
      try {
        l(r.throw(f));
      } catch (u) {
        o(u);
      }
    }
    function l(f) {
      f.done ? s(f.value) : i(f.value).then(a, c);
    }
    l((r = r.apply(n, e || [])).next());
  });
};
const I = new h(J), Hs = 10;
function Hr(n) {
  return n == null ? "null" : (Re(n) !== 32 && I.throwArgumentError("invalid topic", "topic", n), n.toLowerCase());
}
function jr(n) {
  for (n = n.slice(); n.length > 0 && n[n.length - 1] == null; )
    n.pop();
  return n.map((e) => {
    if (Array.isArray(e)) {
      const t = {};
      e.forEach((i) => {
        t[Hr(i)] = !0;
      });
      const r = Object.keys(t);
      return r.sort(), r.join("|");
    } else
      return Hr(e);
  }).join("&");
}
function js(n) {
  return n === "" ? [] : n.split(/&/g).map((e) => {
    if (e === "")
      return [];
    const t = e.split("|").map((r) => r === "null" ? null : r);
    return t.length === 1 ? t[0] : t;
  });
}
function Te(n) {
  if (typeof n == "string") {
    if (n = n.toLowerCase(), Re(n) === 32)
      return "tx:" + n;
    if (n.indexOf(":") === -1)
      return n;
  } else {
    if (Array.isArray(n))
      return "filter:*:" + jr(n);
    if (fi.isForkEvent(n))
      throw I.warn("not implemented"), new Error("not implemented");
    if (n && typeof n == "object")
      return "filter:" + (n.address || "*") + ":" + jr(n.topics || []);
  }
  throw new Error("invalid event - " + n);
}
function He() {
  return new Date().getTime();
}
function zr(n) {
  return new Promise((e) => {
    setTimeout(e, n);
  });
}
const zs = ["block", "network", "pending", "poll"];
class Js {
  constructor(e, t, r) {
    y(this, "tag", e), y(this, "listener", t), y(this, "once", r), this._lastBlockNumber = -2, this._inflight = !1;
  }
  get event() {
    switch (this.type) {
      case "tx":
        return this.hash;
      case "filter":
        return this.filter;
    }
    return this.tag;
  }
  get type() {
    return this.tag.split(":")[0];
  }
  get hash() {
    const e = this.tag.split(":");
    return e[0] !== "tx" ? null : e[1];
  }
  get filter() {
    const e = this.tag.split(":");
    if (e[0] !== "filter")
      return null;
    const t = e[1], r = js(e[2]), i = {};
    return r.length > 0 && (i.topics = r), t && t !== "*" && (i.address = t), i;
  }
  pollable() {
    return this.tag.indexOf(":") >= 0 || zs.indexOf(this.tag) >= 0;
  }
}
const Ks = {
  0: { symbol: "btc", p2pkh: 0, p2sh: 5, prefix: "bc" },
  2: { symbol: "ltc", p2pkh: 48, p2sh: 50, prefix: "ltc" },
  3: { symbol: "doge", p2pkh: 30, p2sh: 22 },
  60: { symbol: "eth", ilk: "eth" },
  61: { symbol: "etc", ilk: "eth" },
  700: { symbol: "xdai", ilk: "eth" }
};
function jt(n) {
  return D(w.from(n).toHexString(), 32);
}
function Jr(n) {
  return Xt.encode(_e([n, K(Ur(Ur(n)), 0, 4)]));
}
const Gn = new RegExp("^(ipfs)://(.*)$", "i"), Kr = [
  new RegExp("^(https)://(.*)$", "i"),
  new RegExp("^(data):(.*)$", "i"),
  Gn,
  new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")
];
function ft(n, e) {
  try {
    return xt(Ve(n, e));
  } catch {
  }
  return null;
}
function Ve(n, e) {
  if (n === "0x")
    return null;
  const t = w.from(K(n, e, e + 32)).toNumber(), r = w.from(K(n, t, t + 32)).toNumber();
  return K(n, t + 32, t + 32 + r);
}
function zt(n) {
  return n.match(/^ipfs:\/\/ipfs\//i) ? n = n.substring(12) : n.match(/^ipfs:\/\//i) ? n = n.substring(7) : I.throwArgumentError("unsupported IPFS format", "link", n), `https://gateway.ipfs.io/ipfs/${n}`;
}
function Qr(n) {
  const e = P(n);
  if (e.length > 32)
    throw new Error("internal; should not happen");
  const t = new Uint8Array(32);
  return t.set(e, 32 - e.length), t;
}
function Qs(n) {
  if (n.length % 32 === 0)
    return n;
  const e = new Uint8Array(Math.ceil(n.length / 32) * 32);
  return e.set(n), e;
}
function Hn(n) {
  const e = [];
  let t = 0;
  for (let r = 0; r < n.length; r++)
    e.push(null), t += 32;
  for (let r = 0; r < n.length; r++) {
    const i = P(n[r]);
    e[r] = Qr(t), e.push(Qr(i.length)), e.push(Qs(i)), t += 32 + Math.ceil(i.length / 32) * 32;
  }
  return Z(e);
}
class Yr {
  constructor(e, t, r, i) {
    y(this, "provider", e), y(this, "name", r), y(this, "address", e.formatter.address(t)), y(this, "_resolvedAddress", i);
  }
  supportsWildcard() {
    return this._supportsEip2544 || (this._supportsEip2544 = this.provider.call({
      to: this.address,
      data: "0x01ffc9a79061b92300000000000000000000000000000000000000000000000000000000"
    }).then((e) => w.from(e).eq(1)).catch((e) => {
      if (e.code === h.errors.CALL_EXCEPTION)
        return !1;
      throw this._supportsEip2544 = null, e;
    })), this._supportsEip2544;
  }
  _fetch(e, t) {
    return k(this, void 0, void 0, function* () {
      const r = {
        to: this.address,
        ccipReadEnabled: !0,
        data: Z([e, at(this.name), t || "0x"])
      };
      let i = !1;
      (yield this.supportsWildcard()) && (i = !0, r.data = Z(["0x9061b923", Hn([Ji(this.name), r.data])]));
      try {
        let s = yield this.provider.call(r);
        return P(s).length % 32 === 4 && I.throwError("resolver threw error", h.errors.CALL_EXCEPTION, {
          transaction: r,
          data: s
        }), i && (s = Ve(s, 0)), s;
      } catch (s) {
        if (s.code === h.errors.CALL_EXCEPTION)
          return null;
        throw s;
      }
    });
  }
  _fetchBytes(e, t) {
    return k(this, void 0, void 0, function* () {
      const r = yield this._fetch(e, t);
      return r != null ? Ve(r, 0) : null;
    });
  }
  _getAddress(e, t) {
    const r = Ks[String(e)];
    if (r == null && I.throwError(`unsupported coin type: ${e}`, h.errors.UNSUPPORTED_OPERATION, {
      operation: `getAddress(${e})`
    }), r.ilk === "eth")
      return this.provider.formatter.address(t);
    const i = P(t);
    if (r.p2pkh != null) {
      const s = t.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);
      if (s) {
        const o = parseInt(s[1], 16);
        if (s[2].length === o * 2 && o >= 1 && o <= 75)
          return Jr(_e([[r.p2pkh], "0x" + s[2]]));
      }
    }
    if (r.p2sh != null) {
      const s = t.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);
      if (s) {
        const o = parseInt(s[1], 16);
        if (s[2].length === o * 2 && o >= 1 && o <= 75)
          return Jr(_e([[r.p2sh], "0x" + s[2]]));
      }
    }
    if (r.prefix != null) {
      const s = i[1];
      let o = i[0];
      if (o === 0 ? s !== 20 && s !== 32 && (o = -1) : o = -1, o >= 0 && i.length === 2 + s && s >= 1 && s <= 75) {
        const a = Mr.toWords(i.slice(2));
        return a.unshift(o), Mr.encode(r.prefix, a);
      }
    }
    return null;
  }
  getAddress(e) {
    return k(this, void 0, void 0, function* () {
      if (e == null && (e = 60), e === 60)
        try {
          const i = yield this._fetch("0x3b3b57de");
          return i === "0x" || i === pi ? null : this.provider.formatter.callAddress(i);
        } catch (i) {
          if (i.code === h.errors.CALL_EXCEPTION)
            return null;
          throw i;
        }
      const t = yield this._fetchBytes("0xf1cb7e06", jt(e));
      if (t == null || t === "0x")
        return null;
      const r = this._getAddress(e, t);
      return r == null && I.throwError("invalid or unsupported coin data", h.errors.UNSUPPORTED_OPERATION, {
        operation: `getAddress(${e})`,
        coinType: e,
        data: t
      }), r;
    });
  }
  getAvatar() {
    return k(this, void 0, void 0, function* () {
      const e = [{ type: "name", content: this.name }];
      try {
        const t = yield this.getText("avatar");
        if (t == null)
          return null;
        for (let r = 0; r < Kr.length; r++) {
          const i = t.match(Kr[r]);
          if (i == null)
            continue;
          const s = i[1].toLowerCase();
          switch (s) {
            case "https":
              return e.push({ type: "url", content: t }), { linkage: e, url: t };
            case "data":
              return e.push({ type: "data", content: t }), { linkage: e, url: t };
            case "ipfs":
              return e.push({ type: "ipfs", content: t }), { linkage: e, url: zt(t) };
            case "erc721":
            case "erc1155": {
              const o = s === "erc721" ? "0xc87b56dd" : "0x0e89341c";
              e.push({ type: s, content: t });
              const a = this._resolvedAddress || (yield this.getAddress()), c = (i[2] || "").split("/");
              if (c.length !== 2)
                return null;
              const l = yield this.provider.formatter.address(c[0]), f = D(w.from(c[1]).toHexString(), 32);
              if (s === "erc721") {
                const m = this.provider.formatter.callAddress(yield this.provider.call({
                  to: l,
                  data: Z(["0x6352211e", f])
                }));
                if (a !== m)
                  return null;
                e.push({ type: "owner", content: m });
              } else if (s === "erc1155") {
                const m = w.from(yield this.provider.call({
                  to: l,
                  data: Z(["0x00fdd58e", D(a, 32), f])
                }));
                if (m.isZero())
                  return null;
                e.push({ type: "balance", content: m.toString() });
              }
              const u = {
                to: this.provider.formatter.address(c[0]),
                data: Z([o, f])
              };
              let p = ft(yield this.provider.call(u), 0);
              if (p == null)
                return null;
              e.push({ type: "metadata-url-base", content: p }), s === "erc1155" && (p = p.replace("{id}", f.substring(2)), e.push({ type: "metadata-url-expanded", content: p })), p.match(/^ipfs:/i) && (p = zt(p)), e.push({ type: "metadata-url", content: p });
              const d = yield Ze(p);
              if (!d)
                return null;
              e.push({ type: "metadata", content: JSON.stringify(d) });
              let g = d.image;
              if (typeof g != "string")
                return null;
              if (!g.match(/^(https:\/\/|data:)/i)) {
                if (g.match(Gn) == null)
                  return null;
                e.push({ type: "url-ipfs", content: g }), g = zt(g);
              }
              return e.push({ type: "url", content: g }), { linkage: e, url: g };
            }
          }
        }
      } catch {
      }
      return null;
    });
  }
  getContentHash() {
    return k(this, void 0, void 0, function* () {
      const e = yield this._fetchBytes("0xbc1c58d1");
      if (e == null || e === "0x")
        return null;
      const t = e.match(/^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
      if (t) {
        const o = parseInt(t[3], 16);
        if (t[4].length === o * 2)
          return "ipfs://" + Xt.encode("0x" + t[1]);
      }
      const r = e.match(/^0xe5010172(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
      if (r) {
        const o = parseInt(r[3], 16);
        if (r[4].length === o * 2)
          return "ipns://" + Xt.encode("0x" + r[1]);
      }
      const i = e.match(/^0xe40101fa011b20([0-9a-f]*)$/);
      if (i && i[1].length === 32 * 2)
        return "bzz://" + i[1];
      const s = e.match(/^0x90b2c605([0-9a-f]*)$/);
      if (s && s[1].length === 34 * 2) {
        const o = { "=": "", "+": "-", "/": "_" }, a = gn("0x" + s[1]).replace(/[=+\/]/g, (c) => o[c]);
        return "sia://" + a;
      }
      return I.throwError("invalid or unsupported content hash data", h.errors.UNSUPPORTED_OPERATION, {
        operation: "getContentHash()",
        data: e
      });
    });
  }
  getText(e) {
    return k(this, void 0, void 0, function* () {
      let t = ve(e);
      t = _e([jt(64), jt(t.length), t]), t.length % 32 !== 0 && (t = _e([t, D("0x", 32 - e.length % 32)]));
      const r = yield this._fetchBytes("0x59d1d43c", N(t));
      return r == null || r === "0x" ? null : xt(r);
    });
  }
}
let Jt = null, Ys = 1;
class cr extends Nt {
  constructor(e) {
    if (super(), this._events = [], this._emitted = { block: -2 }, this.disableCcipRead = !1, this.formatter = new.target.getFormatter(), y(this, "anyNetwork", e === "any"), this.anyNetwork && (e = this.detectNetwork()), e instanceof Promise)
      this._networkPromise = e, e.catch((t) => {
      }), this._ready().catch((t) => {
      });
    else {
      const t = Ee(new.target, "getNetwork")(e);
      t ? (y(this, "_network", t), this.emit("network", t, null)) : I.throwArgumentError("invalid network", "network", e);
    }
    this._maxInternalBlockNumber = -1024, this._lastBlockNumber = -2, this._maxFilterBlockRange = 10, this._pollingInterval = 4e3, this._fastQueryDate = 0;
  }
  _ready() {
    return k(this, void 0, void 0, function* () {
      if (this._network == null) {
        let e = null;
        if (this._networkPromise)
          try {
            e = yield this._networkPromise;
          } catch {
          }
        e == null && (e = yield this.detectNetwork()), e || I.throwError("no network detected", h.errors.UNKNOWN_ERROR, {}), this._network == null && (this.anyNetwork ? this._network = e : y(this, "_network", e), this.emit("network", e, null));
      }
      return this._network;
    });
  }
  get ready() {
    return Be(() => this._ready().then((e) => e, (e) => {
      if (!(e.code === h.errors.NETWORK_ERROR && e.event === "noNetwork"))
        throw e;
    }));
  }
  static getFormatter() {
    return Jt == null && (Jt = new v()), Jt;
  }
  static getNetwork(e) {
    return hn(e == null ? "homestead" : e);
  }
  ccipReadFetch(e, t, r) {
    return k(this, void 0, void 0, function* () {
      if (this.disableCcipRead || r.length === 0)
        return null;
      const i = e.to.toLowerCase(), s = t.toLowerCase(), o = [];
      for (let a = 0; a < r.length; a++) {
        const c = r[a], l = c.replace("{sender}", i).replace("{data}", s), f = c.indexOf("{data}") >= 0 ? null : JSON.stringify({ data: s, sender: i }), u = yield Ze({ url: l, errorPassThrough: !0 }, f, (d, g) => (d.status = g.statusCode, d));
        if (u.data)
          return u.data;
        const p = u.message || "unknown error";
        if (u.status >= 400 && u.status < 500)
          return I.throwError(`response not found during CCIP fetch: ${p}`, h.errors.SERVER_ERROR, { url: c, errorMessage: p });
        o.push(p);
      }
      return I.throwError(`error encountered during CCIP fetch: ${o.map((a) => JSON.stringify(a)).join(", ")}`, h.errors.SERVER_ERROR, {
        urls: r,
        errorMessages: o
      });
    });
  }
  _getInternalBlockNumber(e) {
    return k(this, void 0, void 0, function* () {
      if (yield this._ready(), e > 0)
        for (; this._internalBlockNumber; ) {
          const i = this._internalBlockNumber;
          try {
            const s = yield i;
            if (He() - s.respTime <= e)
              return s.blockNumber;
            break;
          } catch {
            if (this._internalBlockNumber === i)
              break;
          }
        }
      const t = He(), r = q({
        blockNumber: this.perform("getBlockNumber", {}),
        networkError: this.getNetwork().then((i) => null, (i) => i)
      }).then(({ blockNumber: i, networkError: s }) => {
        if (s)
          throw this._internalBlockNumber === r && (this._internalBlockNumber = null), s;
        const o = He();
        return i = w.from(i).toNumber(), i < this._maxInternalBlockNumber && (i = this._maxInternalBlockNumber), this._maxInternalBlockNumber = i, this._setFastBlockNumber(i), { blockNumber: i, reqTime: t, respTime: o };
      });
      return this._internalBlockNumber = r, r.catch((i) => {
        this._internalBlockNumber === r && (this._internalBlockNumber = null);
      }), (yield r).blockNumber;
    });
  }
  poll() {
    return k(this, void 0, void 0, function* () {
      const e = Ys++, t = [];
      let r = null;
      try {
        r = yield this._getInternalBlockNumber(100 + this.pollingInterval / 2);
      } catch (i) {
        this.emit("error", i);
        return;
      }
      if (this._setFastBlockNumber(r), this.emit("poll", e, r), r === this._lastBlockNumber) {
        this.emit("didPoll", e);
        return;
      }
      if (this._emitted.block === -2 && (this._emitted.block = r - 1), Math.abs(this._emitted.block - r) > 1e3)
        I.warn(`network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${r})`), this.emit("error", I.makeError("network block skew detected", h.errors.NETWORK_ERROR, {
          blockNumber: r,
          event: "blockSkew",
          previousBlockNumber: this._emitted.block
        })), this.emit("block", r);
      else
        for (let i = this._emitted.block + 1; i <= r; i++)
          this.emit("block", i);
      this._emitted.block !== r && (this._emitted.block = r, Object.keys(this._emitted).forEach((i) => {
        if (i === "block")
          return;
        const s = this._emitted[i];
        s !== "pending" && r - s > 12 && delete this._emitted[i];
      })), this._lastBlockNumber === -2 && (this._lastBlockNumber = r - 1), this._events.forEach((i) => {
        switch (i.type) {
          case "tx": {
            const s = i.hash;
            let o = this.getTransactionReceipt(s).then((a) => (!a || a.blockNumber == null || (this._emitted["t:" + s] = a.blockNumber, this.emit(s, a)), null)).catch((a) => {
              this.emit("error", a);
            });
            t.push(o);
            break;
          }
          case "filter": {
            if (!i._inflight) {
              i._inflight = !0, i._lastBlockNumber === -2 && (i._lastBlockNumber = r - 1);
              const s = i.filter;
              s.fromBlock = i._lastBlockNumber + 1, s.toBlock = r;
              const o = s.toBlock - this._maxFilterBlockRange;
              o > s.fromBlock && (s.fromBlock = o), s.fromBlock < 0 && (s.fromBlock = 0);
              const a = this.getLogs(s).then((c) => {
                i._inflight = !1, c.length !== 0 && c.forEach((l) => {
                  l.blockNumber > i._lastBlockNumber && (i._lastBlockNumber = l.blockNumber), this._emitted["b:" + l.blockHash] = l.blockNumber, this._emitted["t:" + l.transactionHash] = l.blockNumber, this.emit(s, l);
                });
              }).catch((c) => {
                this.emit("error", c), i._inflight = !1;
              });
              t.push(a);
            }
            break;
          }
        }
      }), this._lastBlockNumber = r, Promise.all(t).then(() => {
        this.emit("didPoll", e);
      }).catch((i) => {
        this.emit("error", i);
      });
    });
  }
  resetEventsBlock(e) {
    this._lastBlockNumber = e - 1, this.polling && this.poll();
  }
  get network() {
    return this._network;
  }
  detectNetwork() {
    return k(this, void 0, void 0, function* () {
      return I.throwError("provider does not support network detection", h.errors.UNSUPPORTED_OPERATION, {
        operation: "provider.detectNetwork"
      });
    });
  }
  getNetwork() {
    return k(this, void 0, void 0, function* () {
      const e = yield this._ready(), t = yield this.detectNetwork();
      if (e.chainId !== t.chainId) {
        if (this.anyNetwork)
          return this._network = t, this._lastBlockNumber = -2, this._fastBlockNumber = null, this._fastBlockNumberPromise = null, this._fastQueryDate = 0, this._emitted.block = -2, this._maxInternalBlockNumber = -1024, this._internalBlockNumber = null, this.emit("network", t, e), yield zr(0), this._network;
        const r = I.makeError("underlying network changed", h.errors.NETWORK_ERROR, {
          event: "changed",
          network: e,
          detectedNetwork: t
        });
        throw this.emit("error", r), r;
      }
      return e;
    });
  }
  get blockNumber() {
    return this._getInternalBlockNumber(100 + this.pollingInterval / 2).then((e) => {
      this._setFastBlockNumber(e);
    }, (e) => {
    }), this._fastBlockNumber != null ? this._fastBlockNumber : -1;
  }
  get polling() {
    return this._poller != null;
  }
  set polling(e) {
    e && !this._poller ? (this._poller = setInterval(() => {
      this.poll();
    }, this.pollingInterval), this._bootstrapPoll || (this._bootstrapPoll = setTimeout(() => {
      this.poll(), this._bootstrapPoll = setTimeout(() => {
        this._poller || this.poll(), this._bootstrapPoll = null;
      }, this.pollingInterval);
    }, 0))) : !e && this._poller && (clearInterval(this._poller), this._poller = null);
  }
  get pollingInterval() {
    return this._pollingInterval;
  }
  set pollingInterval(e) {
    if (typeof e != "number" || e <= 0 || parseInt(String(e)) != e)
      throw new Error("invalid polling interval");
    this._pollingInterval = e, this._poller && (clearInterval(this._poller), this._poller = setInterval(() => {
      this.poll();
    }, this._pollingInterval));
  }
  _getFastBlockNumber() {
    const e = He();
    return e - this._fastQueryDate > 2 * this._pollingInterval && (this._fastQueryDate = e, this._fastBlockNumberPromise = this.getBlockNumber().then((t) => ((this._fastBlockNumber == null || t > this._fastBlockNumber) && (this._fastBlockNumber = t), this._fastBlockNumber))), this._fastBlockNumberPromise;
  }
  _setFastBlockNumber(e) {
    this._fastBlockNumber != null && e < this._fastBlockNumber || (this._fastQueryDate = He(), (this._fastBlockNumber == null || e > this._fastBlockNumber) && (this._fastBlockNumber = e, this._fastBlockNumberPromise = Promise.resolve(e)));
  }
  waitForTransaction(e, t, r) {
    return k(this, void 0, void 0, function* () {
      return this._waitForTransaction(e, t == null ? 1 : t, r || 0, null);
    });
  }
  _waitForTransaction(e, t, r, i) {
    return k(this, void 0, void 0, function* () {
      const s = yield this.getTransactionReceipt(e);
      return (s ? s.confirmations : 0) >= t ? s : new Promise((o, a) => {
        const c = [];
        let l = !1;
        const f = function() {
          return l ? !0 : (l = !0, c.forEach((p) => {
            p();
          }), !1);
        }, u = (p) => {
          p.confirmations < t || f() || o(p);
        };
        if (this.on(e, u), c.push(() => {
          this.removeListener(e, u);
        }), i) {
          let p = i.startBlock, d = null;
          const g = (m) => k(this, void 0, void 0, function* () {
            l || (yield zr(1e3), this.getTransactionCount(i.from).then((E) => k(this, void 0, void 0, function* () {
              if (!l) {
                if (E <= i.nonce)
                  p = m;
                else {
                  {
                    const A = yield this.getTransaction(e);
                    if (A && A.blockNumber != null)
                      return;
                  }
                  for (d == null && (d = p - 3, d < i.startBlock && (d = i.startBlock)); d <= m; ) {
                    if (l)
                      return;
                    const A = yield this.getBlockWithTransactions(d);
                    for (let b = 0; b < A.transactions.length; b++) {
                      const T = A.transactions[b];
                      if (T.hash === e)
                        return;
                      if (T.from === i.from && T.nonce === i.nonce) {
                        if (l)
                          return;
                        const C = yield this.waitForTransaction(T.hash, t);
                        if (f())
                          return;
                        let _ = "replaced";
                        T.data === i.data && T.to === i.to && T.value.eq(i.value) ? _ = "repriced" : T.data === "0x" && T.from === T.to && T.value.isZero() && (_ = "cancelled"), a(I.makeError("transaction was replaced", h.errors.TRANSACTION_REPLACED, {
                          cancelled: _ === "replaced" || _ === "cancelled",
                          reason: _,
                          replacement: this._wrapTransaction(T),
                          hash: e,
                          receipt: C
                        }));
                        return;
                      }
                    }
                    d++;
                  }
                }
                l || this.once("block", g);
              }
            }), (E) => {
              l || this.once("block", g);
            }));
          });
          if (l)
            return;
          this.once("block", g), c.push(() => {
            this.removeListener("block", g);
          });
        }
        if (typeof r == "number" && r > 0) {
          const p = setTimeout(() => {
            f() || a(I.makeError("timeout exceeded", h.errors.TIMEOUT, { timeout: r }));
          }, r);
          p.unref && p.unref(), c.push(() => {
            clearTimeout(p);
          });
        }
      });
    });
  }
  getBlockNumber() {
    return k(this, void 0, void 0, function* () {
      return this._getInternalBlockNumber(0);
    });
  }
  getGasPrice() {
    return k(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const e = yield this.perform("getGasPrice", {});
      try {
        return w.from(e);
      } catch (t) {
        return I.throwError("bad result from backend", h.errors.SERVER_ERROR, {
          method: "getGasPrice",
          result: e,
          error: t
        });
      }
    });
  }
  getBalance(e, t) {
    return k(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const r = yield q({
        address: this._getAddress(e),
        blockTag: this._getBlockTag(t)
      }), i = yield this.perform("getBalance", r);
      try {
        return w.from(i);
      } catch (s) {
        return I.throwError("bad result from backend", h.errors.SERVER_ERROR, {
          method: "getBalance",
          params: r,
          result: i,
          error: s
        });
      }
    });
  }
  getTransactionCount(e, t) {
    return k(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const r = yield q({
        address: this._getAddress(e),
        blockTag: this._getBlockTag(t)
      }), i = yield this.perform("getTransactionCount", r);
      try {
        return w.from(i).toNumber();
      } catch (s) {
        return I.throwError("bad result from backend", h.errors.SERVER_ERROR, {
          method: "getTransactionCount",
          params: r,
          result: i,
          error: s
        });
      }
    });
  }
  getCode(e, t) {
    return k(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const r = yield q({
        address: this._getAddress(e),
        blockTag: this._getBlockTag(t)
      }), i = yield this.perform("getCode", r);
      try {
        return N(i);
      } catch (s) {
        return I.throwError("bad result from backend", h.errors.SERVER_ERROR, {
          method: "getCode",
          params: r,
          result: i,
          error: s
        });
      }
    });
  }
  getStorageAt(e, t, r) {
    return k(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const i = yield q({
        address: this._getAddress(e),
        blockTag: this._getBlockTag(r),
        position: Promise.resolve(t).then((o) => Et(o))
      }), s = yield this.perform("getStorageAt", i);
      try {
        return N(s);
      } catch (o) {
        return I.throwError("bad result from backend", h.errors.SERVER_ERROR, {
          method: "getStorageAt",
          params: i,
          result: s,
          error: o
        });
      }
    });
  }
  _wrapTransaction(e, t, r) {
    if (t != null && Re(t) !== 32)
      throw new Error("invalid response - sendTransaction");
    const i = e;
    return t != null && e.hash !== t && I.throwError("Transaction hash mismatch from Provider.sendTransaction.", h.errors.UNKNOWN_ERROR, { expectedHash: e.hash, returnedHash: t }), i.wait = (s, o) => k(this, void 0, void 0, function* () {
      s == null && (s = 1), o == null && (o = 0);
      let a;
      s !== 0 && r != null && (a = {
        data: e.data,
        from: e.from,
        nonce: e.nonce,
        to: e.to,
        value: e.value,
        startBlock: r
      });
      const c = yield this._waitForTransaction(e.hash, s, o, a);
      return c == null && s === 0 ? null : (this._emitted["t:" + e.hash] = c.blockNumber, c.status === 0 && I.throwError("transaction failed", h.errors.CALL_EXCEPTION, {
        transactionHash: e.hash,
        transaction: e,
        receipt: c
      }), c);
    }), i;
  }
  sendTransaction(e) {
    return k(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const t = yield Promise.resolve(e).then((s) => N(s)), r = this.formatter.transaction(e);
      r.confirmations == null && (r.confirmations = 0);
      const i = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
      try {
        const s = yield this.perform("sendTransaction", { signedTransaction: t });
        return this._wrapTransaction(r, s, i);
      } catch (s) {
        throw s.transaction = r, s.transactionHash = r.hash, s;
      }
    });
  }
  _getTransactionRequest(e) {
    return k(this, void 0, void 0, function* () {
      const t = yield e, r = {};
      return ["from", "to"].forEach((i) => {
        t[i] != null && (r[i] = Promise.resolve(t[i]).then((s) => s ? this._getAddress(s) : null));
      }), ["gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "value"].forEach((i) => {
        t[i] != null && (r[i] = Promise.resolve(t[i]).then((s) => s ? w.from(s) : null));
      }), ["type"].forEach((i) => {
        t[i] != null && (r[i] = Promise.resolve(t[i]).then((s) => s != null ? s : null));
      }), t.accessList && (r.accessList = this.formatter.accessList(t.accessList)), ["data"].forEach((i) => {
        t[i] != null && (r[i] = Promise.resolve(t[i]).then((s) => s ? N(s) : null));
      }), this.formatter.transactionRequest(yield q(r));
    });
  }
  _getFilter(e) {
    return k(this, void 0, void 0, function* () {
      e = yield e;
      const t = {};
      return e.address != null && (t.address = this._getAddress(e.address)), ["blockHash", "topics"].forEach((r) => {
        e[r] != null && (t[r] = e[r]);
      }), ["fromBlock", "toBlock"].forEach((r) => {
        e[r] != null && (t[r] = this._getBlockTag(e[r]));
      }), this.formatter.filter(yield q(t));
    });
  }
  _call(e, t, r) {
    return k(this, void 0, void 0, function* () {
      r >= Hs && I.throwError("CCIP read exceeded maximum redirections", h.errors.SERVER_ERROR, {
        redirects: r,
        transaction: e
      });
      const i = e.to, s = yield this.perform("call", { transaction: e, blockTag: t });
      if (r >= 0 && t === "latest" && i != null && s.substring(0, 10) === "0x556f1830" && Re(s) % 32 === 4)
        try {
          const o = K(s, 4), a = K(o, 0, 32);
          w.from(a).eq(i) || I.throwError("CCIP Read sender did not match", h.errors.CALL_EXCEPTION, {
            name: "OffchainLookup",
            signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
            transaction: e,
            data: s
          });
          const c = [], l = w.from(K(o, 32, 64)).toNumber(), f = w.from(K(o, l, l + 32)).toNumber(), u = K(o, l + 32);
          for (let A = 0; A < f; A++) {
            const b = ft(u, A * 32);
            b == null && I.throwError("CCIP Read contained corrupt URL string", h.errors.CALL_EXCEPTION, {
              name: "OffchainLookup",
              signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
              transaction: e,
              data: s
            }), c.push(b);
          }
          const p = Ve(o, 64);
          w.from(K(o, 100, 128)).isZero() || I.throwError("CCIP Read callback selector included junk", h.errors.CALL_EXCEPTION, {
            name: "OffchainLookup",
            signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
            transaction: e,
            data: s
          });
          const d = K(o, 96, 100), g = Ve(o, 128), m = yield this.ccipReadFetch(e, p, c);
          m == null && I.throwError("CCIP Read disabled or provided no URLs", h.errors.CALL_EXCEPTION, {
            name: "OffchainLookup",
            signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
            transaction: e,
            data: s
          });
          const E = {
            to: i,
            data: Z([d, Hn([m, g])])
          };
          return this._call(E, t, r + 1);
        } catch (o) {
          if (o.code === h.errors.SERVER_ERROR)
            throw o;
        }
      try {
        return N(s);
      } catch (o) {
        return I.throwError("bad result from backend", h.errors.SERVER_ERROR, {
          method: "call",
          params: { transaction: e, blockTag: t },
          result: s,
          error: o
        });
      }
    });
  }
  call(e, t) {
    return k(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const r = yield q({
        transaction: this._getTransactionRequest(e),
        blockTag: this._getBlockTag(t),
        ccipReadEnabled: Promise.resolve(e.ccipReadEnabled)
      });
      return this._call(r.transaction, r.blockTag, r.ccipReadEnabled ? 0 : -1);
    });
  }
  estimateGas(e) {
    return k(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const t = yield q({
        transaction: this._getTransactionRequest(e)
      }), r = yield this.perform("estimateGas", t);
      try {
        return w.from(r);
      } catch (i) {
        return I.throwError("bad result from backend", h.errors.SERVER_ERROR, {
          method: "estimateGas",
          params: t,
          result: r,
          error: i
        });
      }
    });
  }
  _getAddress(e) {
    return k(this, void 0, void 0, function* () {
      e = yield e, typeof e != "string" && I.throwArgumentError("invalid address or ENS name", "name", e);
      const t = yield this.resolveName(e);
      return t == null && I.throwError("ENS name not configured", h.errors.UNSUPPORTED_OPERATION, {
        operation: `resolveName(${JSON.stringify(e)})`
      }), t;
    });
  }
  _getBlock(e, t) {
    return k(this, void 0, void 0, function* () {
      yield this.getNetwork(), e = yield e;
      let r = -128;
      const i = {
        includeTransactions: !!t
      };
      if (S(e, 32))
        i.blockHash = e;
      else
        try {
          i.blockTag = yield this._getBlockTag(e), S(i.blockTag) && (r = parseInt(i.blockTag.substring(2), 16));
        } catch {
          I.throwArgumentError("invalid block hash or block tag", "blockHashOrBlockTag", e);
        }
      return Be(() => k(this, void 0, void 0, function* () {
        const s = yield this.perform("getBlock", i);
        if (s == null)
          return i.blockHash != null && this._emitted["b:" + i.blockHash] == null || i.blockTag != null && r > this._emitted.block ? null : void 0;
        if (t) {
          let o = null;
          for (let c = 0; c < s.transactions.length; c++) {
            const l = s.transactions[c];
            if (l.blockNumber == null)
              l.confirmations = 0;
            else if (l.confirmations == null) {
              o == null && (o = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval));
              let f = o - l.blockNumber + 1;
              f <= 0 && (f = 1), l.confirmations = f;
            }
          }
          const a = this.formatter.blockWithTransactions(s);
          return a.transactions = a.transactions.map((c) => this._wrapTransaction(c)), a;
        }
        return this.formatter.block(s);
      }), { oncePoll: this });
    });
  }
  getBlock(e) {
    return this._getBlock(e, !1);
  }
  getBlockWithTransactions(e) {
    return this._getBlock(e, !0);
  }
  getTransaction(e) {
    return k(this, void 0, void 0, function* () {
      yield this.getNetwork(), e = yield e;
      const t = { transactionHash: this.formatter.hash(e, !0) };
      return Be(() => k(this, void 0, void 0, function* () {
        const r = yield this.perform("getTransaction", t);
        if (r == null)
          return this._emitted["t:" + e] == null ? null : void 0;
        const i = this.formatter.transactionResponse(r);
        if (i.blockNumber == null)
          i.confirmations = 0;
        else if (i.confirmations == null) {
          let o = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - i.blockNumber + 1;
          o <= 0 && (o = 1), i.confirmations = o;
        }
        return this._wrapTransaction(i);
      }), { oncePoll: this });
    });
  }
  getTransactionReceipt(e) {
    return k(this, void 0, void 0, function* () {
      yield this.getNetwork(), e = yield e;
      const t = { transactionHash: this.formatter.hash(e, !0) };
      return Be(() => k(this, void 0, void 0, function* () {
        const r = yield this.perform("getTransactionReceipt", t);
        if (r == null)
          return this._emitted["t:" + e] == null ? null : void 0;
        if (r.blockHash == null)
          return;
        const i = this.formatter.receipt(r);
        if (i.blockNumber == null)
          i.confirmations = 0;
        else if (i.confirmations == null) {
          let o = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - i.blockNumber + 1;
          o <= 0 && (o = 1), i.confirmations = o;
        }
        return i;
      }), { oncePoll: this });
    });
  }
  getLogs(e) {
    return k(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const t = yield q({ filter: this._getFilter(e) }), r = yield this.perform("getLogs", t);
      return r.forEach((i) => {
        i.removed == null && (i.removed = !1);
      }), v.arrayOf(this.formatter.filterLog.bind(this.formatter))(r);
    });
  }
  getEtherPrice() {
    return k(this, void 0, void 0, function* () {
      return yield this.getNetwork(), this.perform("getEtherPrice", {});
    });
  }
  _getBlockTag(e) {
    return k(this, void 0, void 0, function* () {
      if (e = yield e, typeof e == "number" && e < 0) {
        e % 1 && I.throwArgumentError("invalid BlockTag", "blockTag", e);
        let t = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
        return t += e, t < 0 && (t = 0), this.formatter.blockTag(t);
      }
      return this.formatter.blockTag(e);
    });
  }
  getResolver(e) {
    return k(this, void 0, void 0, function* () {
      let t = e;
      for (; ; ) {
        if (t === "" || t === "." || e !== "eth" && t === "eth")
          return null;
        const r = yield this._getResolver(t, "getResolver");
        if (r != null) {
          const i = new Yr(this, r, e);
          return t !== e && !(yield i.supportsWildcard()) ? null : i;
        }
        t = t.split(".").slice(1).join(".");
      }
    });
  }
  _getResolver(e, t) {
    return k(this, void 0, void 0, function* () {
      t == null && (t = "ENS");
      const r = yield this.getNetwork();
      r.ensAddress || I.throwError("network does not support ENS", h.errors.UNSUPPORTED_OPERATION, { operation: t, network: r.name });
      try {
        const i = yield this.call({
          to: r.ensAddress,
          data: "0x0178b8bf" + at(e).substring(2)
        });
        return this.formatter.callAddress(i);
      } catch {
      }
      return null;
    });
  }
  resolveName(e) {
    return k(this, void 0, void 0, function* () {
      e = yield e;
      try {
        return Promise.resolve(this.formatter.address(e));
      } catch (r) {
        if (S(e))
          throw r;
      }
      typeof e != "string" && I.throwArgumentError("invalid ENS name", "name", e);
      const t = yield this.getResolver(e);
      return t ? yield t.getAddress() : null;
    });
  }
  lookupAddress(e) {
    return k(this, void 0, void 0, function* () {
      e = yield e, e = this.formatter.address(e);
      const t = e.substring(2).toLowerCase() + ".addr.reverse", r = yield this._getResolver(t, "lookupAddress");
      if (r == null)
        return null;
      const i = ft(yield this.call({
        to: r,
        data: "0x691f3431" + at(t).substring(2)
      }), 0);
      return (yield this.resolveName(i)) != e ? null : i;
    });
  }
  getAvatar(e) {
    return k(this, void 0, void 0, function* () {
      let t = null;
      if (S(e)) {
        const s = this.formatter.address(e).substring(2).toLowerCase() + ".addr.reverse", o = yield this._getResolver(s, "getAvatar");
        if (!o)
          return null;
        t = new Yr(this, o, s);
        try {
          const a = yield t.getAvatar();
          if (a)
            return a.url;
        } catch (a) {
          if (a.code !== h.errors.CALL_EXCEPTION)
            throw a;
        }
        try {
          const a = ft(yield this.call({
            to: o,
            data: "0x691f3431" + at(s).substring(2)
          }), 0);
          t = yield this.getResolver(a);
        } catch (a) {
          if (a.code !== h.errors.CALL_EXCEPTION)
            throw a;
          return null;
        }
      } else if (t = yield this.getResolver(e), !t)
        return null;
      const r = yield t.getAvatar();
      return r == null ? null : r.url;
    });
  }
  perform(e, t) {
    return I.throwError(e + " not implemented", h.errors.NOT_IMPLEMENTED, { operation: e });
  }
  _startEvent(e) {
    this.polling = this._events.filter((t) => t.pollable()).length > 0;
  }
  _stopEvent(e) {
    this.polling = this._events.filter((t) => t.pollable()).length > 0;
  }
  _addEventListener(e, t, r) {
    const i = new Js(Te(e), t, r);
    return this._events.push(i), this._startEvent(i), this;
  }
  on(e, t) {
    return this._addEventListener(e, t, !1);
  }
  once(e, t) {
    return this._addEventListener(e, t, !0);
  }
  emit(e, ...t) {
    let r = !1, i = [], s = Te(e);
    return this._events = this._events.filter((o) => o.tag !== s ? !0 : (setTimeout(() => {
      o.listener.apply(this, t);
    }, 0), r = !0, o.once ? (i.push(o), !1) : !0)), i.forEach((o) => {
      this._stopEvent(o);
    }), r;
  }
  listenerCount(e) {
    if (!e)
      return this._events.length;
    let t = Te(e);
    return this._events.filter((r) => r.tag === t).length;
  }
  listeners(e) {
    if (e == null)
      return this._events.map((r) => r.listener);
    let t = Te(e);
    return this._events.filter((r) => r.tag === t).map((r) => r.listener);
  }
  off(e, t) {
    if (t == null)
      return this.removeAllListeners(e);
    const r = [];
    let i = !1, s = Te(e);
    return this._events = this._events.filter((o) => o.tag !== s || o.listener != t || i ? !0 : (i = !0, r.push(o), !1)), r.forEach((o) => {
      this._stopEvent(o);
    }), this;
  }
  removeAllListeners(e) {
    let t = [];
    if (e == null)
      t = this._events, this._events = [];
    else {
      const r = Te(e);
      this._events = this._events.filter((i) => i.tag !== r ? !0 : (t.push(i), !1));
    }
    return t.forEach((r) => {
      this._stopEvent(r);
    }), this;
  }
}
const Ws = "abstract-signer/5.7.0";
var oe = globalThis && globalThis.__awaiter || function(n, e, t, r) {
  function i(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function a(f) {
      try {
        l(r.next(f));
      } catch (u) {
        o(u);
      }
    }
    function c(f) {
      try {
        l(r.throw(f));
      } catch (u) {
        o(u);
      }
    }
    function l(f) {
      f.done ? s(f.value) : i(f.value).then(a, c);
    }
    l((r = r.apply(n, e || [])).next());
  });
};
const ae = new h(Ws), Xs = [
  "accessList",
  "ccipReadEnabled",
  "chainId",
  "customData",
  "data",
  "from",
  "gasLimit",
  "gasPrice",
  "maxFeePerGas",
  "maxPriorityFeePerGas",
  "nonce",
  "to",
  "type",
  "value"
], Vs = [
  h.errors.INSUFFICIENT_FUNDS,
  h.errors.NONCE_EXPIRED,
  h.errors.REPLACEMENT_UNDERPRICED
];
class lr {
  constructor() {
    ae.checkAbstract(new.target, lr), y(this, "_isSigner", !0);
  }
  getBalance(e) {
    return oe(this, void 0, void 0, function* () {
      return this._checkProvider("getBalance"), yield this.provider.getBalance(this.getAddress(), e);
    });
  }
  getTransactionCount(e) {
    return oe(this, void 0, void 0, function* () {
      return this._checkProvider("getTransactionCount"), yield this.provider.getTransactionCount(this.getAddress(), e);
    });
  }
  estimateGas(e) {
    return oe(this, void 0, void 0, function* () {
      this._checkProvider("estimateGas");
      const t = yield q(this.checkTransaction(e));
      return yield this.provider.estimateGas(t);
    });
  }
  call(e, t) {
    return oe(this, void 0, void 0, function* () {
      this._checkProvider("call");
      const r = yield q(this.checkTransaction(e));
      return yield this.provider.call(r, t);
    });
  }
  sendTransaction(e) {
    return oe(this, void 0, void 0, function* () {
      this._checkProvider("sendTransaction");
      const t = yield this.populateTransaction(e), r = yield this.signTransaction(t);
      return yield this.provider.sendTransaction(r);
    });
  }
  getChainId() {
    return oe(this, void 0, void 0, function* () {
      return this._checkProvider("getChainId"), (yield this.provider.getNetwork()).chainId;
    });
  }
  getGasPrice() {
    return oe(this, void 0, void 0, function* () {
      return this._checkProvider("getGasPrice"), yield this.provider.getGasPrice();
    });
  }
  getFeeData() {
    return oe(this, void 0, void 0, function* () {
      return this._checkProvider("getFeeData"), yield this.provider.getFeeData();
    });
  }
  resolveName(e) {
    return oe(this, void 0, void 0, function* () {
      return this._checkProvider("resolveName"), yield this.provider.resolveName(e);
    });
  }
  checkTransaction(e) {
    for (const r in e)
      Xs.indexOf(r) === -1 && ae.throwArgumentError("invalid transaction key: " + r, "transaction", e);
    const t = F(e);
    return t.from == null ? t.from = this.getAddress() : t.from = Promise.all([
      Promise.resolve(t.from),
      this.getAddress()
    ]).then((r) => (r[0].toLowerCase() !== r[1].toLowerCase() && ae.throwArgumentError("from address mismatch", "transaction", e), r[0])), t;
  }
  populateTransaction(e) {
    return oe(this, void 0, void 0, function* () {
      const t = yield q(this.checkTransaction(e));
      t.to != null && (t.to = Promise.resolve(t.to).then((i) => oe(this, void 0, void 0, function* () {
        if (i == null)
          return null;
        const s = yield this.resolveName(i);
        return s == null && ae.throwArgumentError("provided ENS name resolves to null", "tx.to", i), s;
      })), t.to.catch((i) => {
      }));
      const r = t.maxFeePerGas != null || t.maxPriorityFeePerGas != null;
      if (t.gasPrice != null && (t.type === 2 || r) ? ae.throwArgumentError("eip-1559 transaction do not support gasPrice", "transaction", e) : (t.type === 0 || t.type === 1) && r && ae.throwArgumentError("pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "transaction", e), (t.type === 2 || t.type == null) && t.maxFeePerGas != null && t.maxPriorityFeePerGas != null)
        t.type = 2;
      else if (t.type === 0 || t.type === 1)
        t.gasPrice == null && (t.gasPrice = this.getGasPrice());
      else {
        const i = yield this.getFeeData();
        if (t.type == null)
          if (i.maxFeePerGas != null && i.maxPriorityFeePerGas != null)
            if (t.type = 2, t.gasPrice != null) {
              const s = t.gasPrice;
              delete t.gasPrice, t.maxFeePerGas = s, t.maxPriorityFeePerGas = s;
            } else
              t.maxFeePerGas == null && (t.maxFeePerGas = i.maxFeePerGas), t.maxPriorityFeePerGas == null && (t.maxPriorityFeePerGas = i.maxPriorityFeePerGas);
          else
            i.gasPrice != null ? (r && ae.throwError("network does not support EIP-1559", h.errors.UNSUPPORTED_OPERATION, {
              operation: "populateTransaction"
            }), t.gasPrice == null && (t.gasPrice = i.gasPrice), t.type = 0) : ae.throwError("failed to get consistent fee data", h.errors.UNSUPPORTED_OPERATION, {
              operation: "signer.getFeeData"
            });
        else
          t.type === 2 && (t.maxFeePerGas == null && (t.maxFeePerGas = i.maxFeePerGas), t.maxPriorityFeePerGas == null && (t.maxPriorityFeePerGas = i.maxPriorityFeePerGas));
      }
      return t.nonce == null && (t.nonce = this.getTransactionCount("pending")), t.gasLimit == null && (t.gasLimit = this.estimateGas(t).catch((i) => {
        if (Vs.indexOf(i.code) >= 0)
          throw i;
        return ae.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", h.errors.UNPREDICTABLE_GAS_LIMIT, {
          error: i,
          tx: t
        });
      })), t.chainId == null ? t.chainId = this.getChainId() : t.chainId = Promise.all([
        Promise.resolve(t.chainId),
        this.getChainId()
      ]).then((i) => (i[1] !== 0 && i[0] !== i[1] && ae.throwArgumentError("chainId address mismatch", "transaction", e), i[0])), yield q(t);
    });
  }
  _checkProvider(e) {
    this.provider || ae.throwError("missing provider", h.errors.UNSUPPORTED_OPERATION, {
      operation: e || "_checkProvider"
    });
  }
  static isSigner(e) {
    return !!(e && e._isSigner);
  }
}
var me = globalThis && globalThis.__awaiter || function(n, e, t, r) {
  function i(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function a(f) {
      try {
        l(r.next(f));
      } catch (u) {
        o(u);
      }
    }
    function c(f) {
      try {
        l(r.throw(f));
      } catch (u) {
        o(u);
      }
    }
    function l(f) {
      f.done ? s(f.value) : i(f.value).then(a, c);
    }
    l((r = r.apply(n, e || [])).next());
  });
};
const U = new h(J), Zs = ["call", "estimateGas"];
function Qe(n, e) {
  if (n == null)
    return null;
  if (typeof n.message == "string" && n.message.match("reverted")) {
    const t = S(n.data) ? n.data : null;
    if (!e || t)
      return { message: n.message, data: t };
  }
  if (typeof n == "object") {
    for (const t in n) {
      const r = Qe(n[t], e);
      if (r)
        return r;
    }
    return null;
  }
  if (typeof n == "string")
    try {
      return Qe(JSON.parse(n), e);
    } catch {
    }
  return null;
}
function jn(n, e, t) {
  const r = t.transaction || t.signedTransaction;
  if (n === "call") {
    const s = Qe(e, !0);
    if (s)
      return s.data;
    U.throwError("missing revert data in call exception; Transaction reverted without a reason string", h.errors.CALL_EXCEPTION, {
      data: "0x",
      transaction: r,
      error: e
    });
  }
  if (n === "estimateGas") {
    let s = Qe(e.body, !1);
    s == null && (s = Qe(e, !1)), s && U.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", h.errors.UNPREDICTABLE_GAS_LIMIT, {
      reason: s.message,
      method: n,
      transaction: r,
      error: e
    });
  }
  let i = e.message;
  throw e.code === h.errors.SERVER_ERROR && e.error && typeof e.error.message == "string" ? i = e.error.message : typeof e.body == "string" ? i = e.body : typeof e.responseText == "string" && (i = e.responseText), i = (i || "").toLowerCase(), i.match(/insufficient funds|base fee exceeds gas limit|InsufficientFunds/i) && U.throwError("insufficient funds for intrinsic transaction cost", h.errors.INSUFFICIENT_FUNDS, {
    error: e,
    method: n,
    transaction: r
  }), i.match(/nonce (is )?too low/i) && U.throwError("nonce has already been used", h.errors.NONCE_EXPIRED, {
    error: e,
    method: n,
    transaction: r
  }), i.match(/replacement transaction underpriced|transaction gas price.*too low/i) && U.throwError("replacement fee too low", h.errors.REPLACEMENT_UNDERPRICED, {
    error: e,
    method: n,
    transaction: r
  }), i.match(/only replay-protected/i) && U.throwError("legacy pre-eip-155 transactions not supported", h.errors.UNSUPPORTED_OPERATION, {
    error: e,
    method: n,
    transaction: r
  }), Zs.indexOf(n) >= 0 && i.match(/gas required exceeds allowance|always failing transaction|execution reverted|revert/) && U.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", h.errors.UNPREDICTABLE_GAS_LIMIT, {
    error: e,
    method: n,
    transaction: r
  }), e;
}
function Wr(n) {
  return new Promise(function(e) {
    setTimeout(e, n);
  });
}
function $s(n) {
  if (n.error) {
    const e = new Error(n.error.message);
    throw e.code = n.error.code, e.data = n.error.data, e;
  }
  return n.result;
}
function je(n) {
  return n && n.toLowerCase();
}
const er = {};
class zn extends lr {
  constructor(e, t, r) {
    if (super(), e !== er)
      throw new Error("do not call the JsonRpcSigner constructor directly; use provider.getSigner");
    y(this, "provider", t), r == null && (r = 0), typeof r == "string" ? (y(this, "_address", this.provider.formatter.address(r)), y(this, "_index", null)) : typeof r == "number" ? (y(this, "_index", r), y(this, "_address", null)) : U.throwArgumentError("invalid address or index", "addressOrIndex", r);
  }
  connect(e) {
    return U.throwError("cannot alter JSON-RPC Signer connection", h.errors.UNSUPPORTED_OPERATION, {
      operation: "connect"
    });
  }
  connectUnchecked() {
    return new eo(er, this.provider, this._address || this._index);
  }
  getAddress() {
    return this._address ? Promise.resolve(this._address) : this.provider.send("eth_accounts", []).then((e) => (e.length <= this._index && U.throwError("unknown account #" + this._index, h.errors.UNSUPPORTED_OPERATION, {
      operation: "getAddress"
    }), this.provider.formatter.address(e[this._index])));
  }
  sendUncheckedTransaction(e) {
    e = F(e);
    const t = this.getAddress().then((r) => (r && (r = r.toLowerCase()), r));
    if (e.gasLimit == null) {
      const r = F(e);
      r.from = t, e.gasLimit = this.provider.estimateGas(r);
    }
    return e.to != null && (e.to = Promise.resolve(e.to).then((r) => me(this, void 0, void 0, function* () {
      if (r == null)
        return null;
      const i = yield this.provider.resolveName(r);
      return i == null && U.throwArgumentError("provided ENS name resolves to null", "tx.to", r), i;
    }))), q({
      tx: q(e),
      sender: t
    }).then(({ tx: r, sender: i }) => {
      r.from != null ? r.from.toLowerCase() !== i && U.throwArgumentError("from address mismatch", "transaction", e) : r.from = i;
      const s = this.provider.constructor.hexlifyTransaction(r, { from: !0 });
      return this.provider.send("eth_sendTransaction", [s]).then((o) => o, (o) => (typeof o.message == "string" && o.message.match(/user denied/i) && U.throwError("user rejected transaction", h.errors.ACTION_REJECTED, {
        action: "sendTransaction",
        transaction: r
      }), jn("sendTransaction", o, s)));
    });
  }
  signTransaction(e) {
    return U.throwError("signing transactions is unsupported", h.errors.UNSUPPORTED_OPERATION, {
      operation: "signTransaction"
    });
  }
  sendTransaction(e) {
    return me(this, void 0, void 0, function* () {
      const t = yield this.provider._getInternalBlockNumber(100 + 2 * this.provider.pollingInterval), r = yield this.sendUncheckedTransaction(e);
      try {
        return yield Be(() => me(this, void 0, void 0, function* () {
          const i = yield this.provider.getTransaction(r);
          if (i !== null)
            return this.provider._wrapTransaction(i, r, t);
        }), { oncePoll: this.provider });
      } catch (i) {
        throw i.transactionHash = r, i;
      }
    });
  }
  signMessage(e) {
    return me(this, void 0, void 0, function* () {
      const t = typeof e == "string" ? ve(e) : e, r = yield this.getAddress();
      try {
        return yield this.provider.send("personal_sign", [N(t), r.toLowerCase()]);
      } catch (i) {
        throw typeof i.message == "string" && i.message.match(/user denied/i) && U.throwError("user rejected signing", h.errors.ACTION_REJECTED, {
          action: "signMessage",
          from: r,
          messageData: e
        }), i;
      }
    });
  }
  _legacySignMessage(e) {
    return me(this, void 0, void 0, function* () {
      const t = typeof e == "string" ? ve(e) : e, r = yield this.getAddress();
      try {
        return yield this.provider.send("eth_sign", [r.toLowerCase(), N(t)]);
      } catch (i) {
        throw typeof i.message == "string" && i.message.match(/user denied/i) && U.throwError("user rejected signing", h.errors.ACTION_REJECTED, {
          action: "_legacySignMessage",
          from: r,
          messageData: e
        }), i;
      }
    });
  }
  _signTypedData(e, t, r) {
    return me(this, void 0, void 0, function* () {
      const i = yield W.resolveNames(e, t, r, (o) => this.provider.resolveName(o)), s = yield this.getAddress();
      try {
        return yield this.provider.send("eth_signTypedData_v4", [
          s.toLowerCase(),
          JSON.stringify(W.getPayload(i.domain, t, i.value))
        ]);
      } catch (o) {
        throw typeof o.message == "string" && o.message.match(/user denied/i) && U.throwError("user rejected signing", h.errors.ACTION_REJECTED, {
          action: "_signTypedData",
          from: s,
          messageData: { domain: i.domain, types: t, value: i.value }
        }), o;
      }
    });
  }
  unlock(e) {
    return me(this, void 0, void 0, function* () {
      const t = this.provider, r = yield this.getAddress();
      return t.send("personal_unlockAccount", [r.toLowerCase(), e, null]);
    });
  }
}
class eo extends zn {
  sendTransaction(e) {
    return this.sendUncheckedTransaction(e).then((t) => ({
      hash: t,
      nonce: null,
      gasLimit: null,
      gasPrice: null,
      data: null,
      value: null,
      chainId: null,
      confirmations: 0,
      from: null,
      wait: (r) => this.provider.waitForTransaction(t, r)
    }));
  }
}
const to = {
  chainId: !0,
  data: !0,
  gasLimit: !0,
  gasPrice: !0,
  nonce: !0,
  to: !0,
  value: !0,
  type: !0,
  accessList: !0,
  maxFeePerGas: !0,
  maxPriorityFeePerGas: !0
};
class Fe extends cr {
  constructor(e, t) {
    let r = t;
    r == null && (r = new Promise((i, s) => {
      setTimeout(() => {
        this.detectNetwork().then((o) => {
          i(o);
        }, (o) => {
          s(o);
        });
      }, 0);
    })), super(r), e || (e = Ee(this.constructor, "defaultUrl")()), typeof e == "string" ? y(this, "connection", Object.freeze({
      url: e
    })) : y(this, "connection", Object.freeze(F(e))), this._nextId = 42;
  }
  get _cache() {
    return this._eventLoopCache == null && (this._eventLoopCache = {}), this._eventLoopCache;
  }
  static defaultUrl() {
    return "http://localhost:8545";
  }
  detectNetwork() {
    return this._cache.detectNetwork || (this._cache.detectNetwork = this._uncachedDetectNetwork(), setTimeout(() => {
      this._cache.detectNetwork = null;
    }, 0)), this._cache.detectNetwork;
  }
  _uncachedDetectNetwork() {
    return me(this, void 0, void 0, function* () {
      yield Wr(0);
      let e = null;
      try {
        e = yield this.send("eth_chainId", []);
      } catch {
        try {
          e = yield this.send("net_version", []);
        } catch {
        }
      }
      if (e != null) {
        const t = Ee(this.constructor, "getNetwork");
        try {
          return t(w.from(e).toNumber());
        } catch (r) {
          return U.throwError("could not detect network", h.errors.NETWORK_ERROR, {
            chainId: e,
            event: "invalidNetwork",
            serverError: r
          });
        }
      }
      return U.throwError("could not detect network", h.errors.NETWORK_ERROR, {
        event: "noNetwork"
      });
    });
  }
  getSigner(e) {
    return new zn(er, this, e);
  }
  getUncheckedSigner(e) {
    return this.getSigner(e).connectUnchecked();
  }
  listAccounts() {
    return this.send("eth_accounts", []).then((e) => e.map((t) => this.formatter.address(t)));
  }
  send(e, t) {
    const r = {
      method: e,
      params: t,
      id: this._nextId++,
      jsonrpc: "2.0"
    };
    this.emit("debug", {
      action: "request",
      request: te(r),
      provider: this
    });
    const i = ["eth_chainId", "eth_blockNumber"].indexOf(e) >= 0;
    if (i && this._cache[e])
      return this._cache[e];
    const s = Ze(this.connection, JSON.stringify(r), $s).then((o) => (this.emit("debug", {
      action: "response",
      request: r,
      response: o,
      provider: this
    }), o), (o) => {
      throw this.emit("debug", {
        action: "response",
        error: o,
        request: r,
        provider: this
      }), o;
    });
    return i && (this._cache[e] = s, setTimeout(() => {
      this._cache[e] = null;
    }, 0)), s;
  }
  prepareRequest(e, t) {
    switch (e) {
      case "getBlockNumber":
        return ["eth_blockNumber", []];
      case "getGasPrice":
        return ["eth_gasPrice", []];
      case "getBalance":
        return ["eth_getBalance", [je(t.address), t.blockTag]];
      case "getTransactionCount":
        return ["eth_getTransactionCount", [je(t.address), t.blockTag]];
      case "getCode":
        return ["eth_getCode", [je(t.address), t.blockTag]];
      case "getStorageAt":
        return ["eth_getStorageAt", [je(t.address), D(t.position, 32), t.blockTag]];
      case "sendTransaction":
        return ["eth_sendRawTransaction", [t.signedTransaction]];
      case "getBlock":
        return t.blockTag ? ["eth_getBlockByNumber", [t.blockTag, !!t.includeTransactions]] : t.blockHash ? ["eth_getBlockByHash", [t.blockHash, !!t.includeTransactions]] : null;
      case "getTransaction":
        return ["eth_getTransactionByHash", [t.transactionHash]];
      case "getTransactionReceipt":
        return ["eth_getTransactionReceipt", [t.transactionHash]];
      case "call": {
        const r = Ee(this.constructor, "hexlifyTransaction");
        return ["eth_call", [r(t.transaction, { from: !0 }), t.blockTag]];
      }
      case "estimateGas": {
        const r = Ee(this.constructor, "hexlifyTransaction");
        return ["eth_estimateGas", [r(t.transaction, { from: !0 })]];
      }
      case "getLogs":
        return t.filter && t.filter.address != null && (t.filter.address = je(t.filter.address)), ["eth_getLogs", [t.filter]];
    }
    return null;
  }
  perform(e, t) {
    return me(this, void 0, void 0, function* () {
      if (e === "call" || e === "estimateGas") {
        const i = t.transaction;
        if (i && i.type != null && w.from(i.type).isZero() && i.maxFeePerGas == null && i.maxPriorityFeePerGas == null) {
          const s = yield this.getFeeData();
          s.maxFeePerGas == null && s.maxPriorityFeePerGas == null && (t = F(t), t.transaction = F(i), delete t.transaction.type);
        }
      }
      const r = this.prepareRequest(e, t);
      r == null && U.throwError(e + " not implemented", h.errors.NOT_IMPLEMENTED, { operation: e });
      try {
        return yield this.send(r[0], r[1]);
      } catch (i) {
        return jn(e, i, t);
      }
    });
  }
  _startEvent(e) {
    e.tag === "pending" && this._startPending(), super._startEvent(e);
  }
  _startPending() {
    if (this._pendingFilter != null)
      return;
    const e = this, t = this.send("eth_newPendingTransactionFilter", []);
    this._pendingFilter = t, t.then(function(r) {
      function i() {
        e.send("eth_getFilterChanges", [r]).then(function(s) {
          if (e._pendingFilter != t)
            return null;
          let o = Promise.resolve();
          return s.forEach(function(a) {
            e._emitted["t:" + a.toLowerCase()] = "pending", o = o.then(function() {
              return e.getTransaction(a).then(function(c) {
                return e.emit("pending", c), null;
              });
            });
          }), o.then(function() {
            return Wr(1e3);
          });
        }).then(function() {
          if (e._pendingFilter != t) {
            e.send("eth_uninstallFilter", [r]);
            return;
          }
          return setTimeout(function() {
            i();
          }, 0), null;
        }).catch((s) => {
        });
      }
      return i(), r;
    }).catch((r) => {
    });
  }
  _stopEvent(e) {
    e.tag === "pending" && this.listenerCount("pending") === 0 && (this._pendingFilter = null), super._stopEvent(e);
  }
  static hexlifyTransaction(e, t) {
    const r = F(to);
    if (t)
      for (const s in t)
        t[s] && (r[s] = !0);
    ni(e, r);
    const i = {};
    return ["chainId", "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach(function(s) {
      if (e[s] == null)
        return;
      const o = Et(w.from(e[s]));
      s === "gasLimit" && (s = "gas"), i[s] = o;
    }), ["from", "to", "data"].forEach(function(s) {
      e[s] != null && (i[s] = N(e[s]));
    }), e.accessList && (i.accessList = qe(e.accessList)), i;
  }
}
let Ye = null;
try {
  if (Ye = WebSocket, Ye == null)
    throw new Error("inject please");
} catch {
  const e = new h(J);
  Ye = function() {
    e.throwError("WebSockets not supported in this environment", h.errors.UNSUPPORTED_OPERATION, {
      operation: "new WebSocket()"
    });
  };
}
var Kt = globalThis && globalThis.__awaiter || function(n, e, t, r) {
  function i(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function a(f) {
      try {
        l(r.next(f));
      } catch (u) {
        o(u);
      }
    }
    function c(f) {
      try {
        l(r.throw(f));
      } catch (u) {
        o(u);
      }
    }
    function l(f) {
      f.done ? s(f.value) : i(f.value).then(a, c);
    }
    l((r = r.apply(n, e || [])).next());
  });
};
const tt = new h(J);
let ro = 1;
class fr extends Fe {
  constructor(e, t) {
    t === "any" && tt.throwError("WebSocketProvider does not support 'any' network yet", h.errors.UNSUPPORTED_OPERATION, {
      operation: "network:any"
    }), typeof e == "string" ? super(e, t) : super("_websocket", t), this._pollingInterval = -1, this._wsReady = !1, typeof e == "string" ? y(this, "_websocket", new Ye(this.connection.url)) : y(this, "_websocket", e), y(this, "_requests", {}), y(this, "_subs", {}), y(this, "_subIds", {}), y(this, "_detectNetwork", super.detectNetwork()), this.websocket.onopen = () => {
      this._wsReady = !0, Object.keys(this._requests).forEach((i) => {
        this.websocket.send(this._requests[i].payload);
      });
    }, this.websocket.onmessage = (i) => {
      const s = i.data, o = JSON.parse(s);
      if (o.id != null) {
        const a = String(o.id), c = this._requests[a];
        if (delete this._requests[a], o.result !== void 0)
          c.callback(null, o.result), this.emit("debug", {
            action: "response",
            request: JSON.parse(c.payload),
            response: o.result,
            provider: this
          });
        else {
          let l = null;
          o.error ? (l = new Error(o.error.message || "unknown error"), y(l, "code", o.error.code || null), y(l, "response", s)) : l = new Error("unknown error"), c.callback(l, void 0), this.emit("debug", {
            action: "response",
            error: l,
            request: JSON.parse(c.payload),
            provider: this
          });
        }
      } else if (o.method === "eth_subscription") {
        const a = this._subs[o.params.subscription];
        a && a.processFunc(o.params.result);
      } else
        console.warn("this should not happen");
    };
    const r = setInterval(() => {
      this.emit("poll");
    }, 1e3);
    r.unref && r.unref();
  }
  get websocket() {
    return this._websocket;
  }
  detectNetwork() {
    return this._detectNetwork;
  }
  get pollingInterval() {
    return 0;
  }
  resetEventsBlock(e) {
    tt.throwError("cannot reset events block on WebSocketProvider", h.errors.UNSUPPORTED_OPERATION, {
      operation: "resetEventBlock"
    });
  }
  set pollingInterval(e) {
    tt.throwError("cannot set polling interval on WebSocketProvider", h.errors.UNSUPPORTED_OPERATION, {
      operation: "setPollingInterval"
    });
  }
  poll() {
    return Kt(this, void 0, void 0, function* () {
      return null;
    });
  }
  set polling(e) {
    !e || tt.throwError("cannot set polling on WebSocketProvider", h.errors.UNSUPPORTED_OPERATION, {
      operation: "setPolling"
    });
  }
  send(e, t) {
    const r = ro++;
    return new Promise((i, s) => {
      function o(c, l) {
        return c ? s(c) : i(l);
      }
      const a = JSON.stringify({
        method: e,
        params: t,
        id: r,
        jsonrpc: "2.0"
      });
      this.emit("debug", {
        action: "request",
        request: JSON.parse(a),
        provider: this
      }), this._requests[String(r)] = { callback: o, payload: a }, this._wsReady && this.websocket.send(a);
    });
  }
  static defaultUrl() {
    return "ws://localhost:8546";
  }
  _subscribe(e, t, r) {
    return Kt(this, void 0, void 0, function* () {
      let i = this._subIds[e];
      i == null && (i = Promise.all(t).then((o) => this.send("eth_subscribe", o)), this._subIds[e] = i);
      const s = yield i;
      this._subs[s] = { tag: e, processFunc: r };
    });
  }
  _startEvent(e) {
    switch (e.type) {
      case "block":
        this._subscribe("block", ["newHeads"], (t) => {
          const r = w.from(t.number).toNumber();
          this._emitted.block = r, this.emit("block", r);
        });
        break;
      case "pending":
        this._subscribe("pending", ["newPendingTransactions"], (t) => {
          this.emit("pending", t);
        });
        break;
      case "filter":
        this._subscribe(e.tag, ["logs", this._getFilter(e.filter)], (t) => {
          t.removed == null && (t.removed = !1), this.emit(e.filter, this.formatter.filterLog(t));
        });
        break;
      case "tx": {
        const t = (r) => {
          const i = r.hash;
          this.getTransactionReceipt(i).then((s) => {
            !s || this.emit(i, s);
          });
        };
        t(e), this._subscribe("tx", ["newHeads"], (r) => {
          this._events.filter((i) => i.type === "tx").forEach(t);
        });
        break;
      }
      case "debug":
      case "poll":
      case "willPoll":
      case "didPoll":
      case "error":
        break;
      default:
        console.log("unhandled:", e);
        break;
    }
  }
  _stopEvent(e) {
    let t = e.tag;
    if (e.type === "tx") {
      if (this._events.filter((i) => i.type === "tx").length)
        return;
      t = "tx";
    } else if (this.listenerCount(e.event))
      return;
    const r = this._subIds[t];
    !r || (delete this._subIds[t], r.then((i) => {
      !this._subs[i] || (delete this._subs[i], this.send("eth_unsubscribe", [i]));
    }));
  }
  destroy() {
    return Kt(this, void 0, void 0, function* () {
      this.websocket.readyState === Ye.CONNECTING && (yield new Promise((e) => {
        this.websocket.onopen = function() {
          e(!0);
        }, this.websocket.onerror = function() {
          e(!1);
        };
      })), this.websocket.close(1e3);
    });
  }
}
var no = globalThis && globalThis.__awaiter || function(n, e, t, r) {
  function i(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function a(f) {
      try {
        l(r.next(f));
      } catch (u) {
        o(u);
      }
    }
    function c(f) {
      try {
        l(r.throw(f));
      } catch (u) {
        o(u);
      }
    }
    function l(f) {
      f.done ? s(f.value) : i(f.value).then(a, c);
    }
    l((r = r.apply(n, e || [])).next());
  });
};
const Je = new h(J);
class io extends Fe {
  detectNetwork() {
    const e = Object.create(null, {
      detectNetwork: { get: () => super.detectNetwork }
    });
    return no(this, void 0, void 0, function* () {
      let t = this.network;
      return t == null && (t = yield e.detectNetwork.call(this), t || Je.throwError("no network detected", h.errors.UNKNOWN_ERROR, {}), this._network == null && (y(this, "_network", t), this.emit("network", t, null))), t;
    });
  }
}
class xe extends io {
  constructor(e, t) {
    Je.checkAbstract(new.target, xe), e = Ee(new.target, "getNetwork")(e), t = Ee(new.target, "getApiKey")(t);
    const r = Ee(new.target, "getUrl")(e, t);
    super(r, e), typeof t == "string" ? y(this, "apiKey", t) : t != null && Object.keys(t).forEach((i) => {
      y(this, i, t[i]);
    });
  }
  _startPending() {
    Je.warn("WARNING: API provider does not support pending filters");
  }
  isCommunityResource() {
    return !1;
  }
  getSigner(e) {
    return Je.throwError("API provider does not support signing", h.errors.UNSUPPORTED_OPERATION, { operation: "getSigner" });
  }
  listAccounts() {
    return Promise.resolve([]);
  }
  static getApiKey(e) {
    return e;
  }
  static getUrl(e, t) {
    return Je.throwError("not implemented; sub-classes must override getUrl", h.errors.NOT_IMPLEMENTED, {
      operation: "getUrl"
    });
  }
}
const Xr = new h(J), ut = "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC";
class so extends fr {
  constructor(e, t) {
    const r = new Jn(e, t), i = r.connection.url.replace(/^http/i, "ws").replace(".alchemyapi.", ".ws.alchemyapi.");
    super(i, r.network), y(this, "apiKey", r.apiKey);
  }
  isCommunityResource() {
    return this.apiKey === ut;
  }
}
class Jn extends xe {
  static getWebSocketProvider(e, t) {
    return new so(e, t);
  }
  static getApiKey(e) {
    return e == null ? ut : (e && typeof e != "string" && Xr.throwArgumentError("invalid apiKey", "apiKey", e), e);
  }
  static getUrl(e, t) {
    let r = null;
    switch (e.name) {
      case "homestead":
        r = "eth-mainnet.alchemyapi.io/v2/";
        break;
      case "goerli":
        r = "eth-goerli.g.alchemy.com/v2/";
        break;
      case "matic":
        r = "polygon-mainnet.g.alchemy.com/v2/";
        break;
      case "maticmum":
        r = "polygon-mumbai.g.alchemy.com/v2/";
        break;
      case "arbitrum":
        r = "arb-mainnet.g.alchemy.com/v2/";
        break;
      case "arbitrum-goerli":
        r = "arb-goerli.g.alchemy.com/v2/";
        break;
      case "optimism":
        r = "opt-mainnet.g.alchemy.com/v2/";
        break;
      case "optimism-goerli":
        r = "opt-goerli.g.alchemy.com/v2/";
        break;
      default:
        Xr.throwArgumentError("unsupported network", "network", arguments[0]);
    }
    return {
      allowGzip: !0,
      url: "https://" + r + t,
      throttleCallback: (i, s) => (t === ut && Tt(), Promise.resolve(!0))
    };
  }
  isCommunityResource() {
    return this.apiKey === ut;
  }
}
const oo = new h(J), rt = "9f7d929b018cdffb338517efa06f58359e86ff1ffd350bc889738523659e7972";
function ao(n) {
  switch (n) {
    case "homestead":
      return "rpc.ankr.com/eth/";
    case "ropsten":
      return "rpc.ankr.com/eth_ropsten/";
    case "rinkeby":
      return "rpc.ankr.com/eth_rinkeby/";
    case "goerli":
      return "rpc.ankr.com/eth_goerli/";
    case "matic":
      return "rpc.ankr.com/polygon/";
    case "arbitrum":
      return "rpc.ankr.com/arbitrum/";
  }
  return oo.throwArgumentError("unsupported network", "name", n);
}
class co extends xe {
  isCommunityResource() {
    return this.apiKey === rt;
  }
  static getApiKey(e) {
    return e == null ? rt : e;
  }
  static getUrl(e, t) {
    t == null && (t = rt);
    const r = {
      allowGzip: !0,
      url: "https://" + ao(e.name) + t,
      throttleCallback: (i, s) => (t.apiKey === rt && Tt(), Promise.resolve(!0))
    };
    return t.projectSecret != null && (r.user = "", r.password = t.projectSecret), r;
  }
}
var lo = globalThis && globalThis.__awaiter || function(n, e, t, r) {
  function i(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function a(f) {
      try {
        l(r.next(f));
      } catch (u) {
        o(u);
      }
    }
    function c(f) {
      try {
        l(r.throw(f));
      } catch (u) {
        o(u);
      }
    }
    function l(f) {
      f.done ? s(f.value) : i(f.value).then(a, c);
    }
    l((r = r.apply(n, e || [])).next());
  });
};
const Vr = new h(J);
class fo extends xe {
  static getApiKey(e) {
    return e != null && Vr.throwArgumentError("apiKey not supported for cloudflare", "apiKey", e), null;
  }
  static getUrl(e, t) {
    let r = null;
    switch (e.name) {
      case "homestead":
        r = "https://cloudflare-eth.com/";
        break;
      default:
        Vr.throwArgumentError("unsupported network", "network", arguments[0]);
    }
    return r;
  }
  perform(e, t) {
    const r = Object.create(null, {
      perform: { get: () => super.perform }
    });
    return lo(this, void 0, void 0, function* () {
      return e === "getBlockNumber" ? (yield r.perform.call(this, "getBlock", { blockTag: "latest" })).number : r.perform.call(this, e, t);
    });
  }
}
var nt = globalThis && globalThis.__awaiter || function(n, e, t, r) {
  function i(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function a(f) {
      try {
        l(r.next(f));
      } catch (u) {
        o(u);
      }
    }
    function c(f) {
      try {
        l(r.throw(f));
      } catch (u) {
        o(u);
      }
    }
    function l(f) {
      f.done ? s(f.value) : i(f.value).then(a, c);
    }
    l((r = r.apply(n, e || [])).next());
  });
};
const be = new h(J);
function Zr(n) {
  const e = {};
  for (let t in n) {
    if (n[t] == null)
      continue;
    let r = n[t];
    t === "type" && r === 0 || ({ type: !0, gasLimit: !0, gasPrice: !0, maxFeePerGs: !0, maxPriorityFeePerGas: !0, nonce: !0, value: !0 }[t] ? r = Et(N(r)) : t === "accessList" ? r = "[" + qe(r).map((i) => `{address:"${i.address}",storageKeys:["${i.storageKeys.join('","')}"]}`).join(",") + "]" : r = N(r), e[t] = r);
  }
  return e;
}
function uo(n) {
  if (n.status == 0 && (n.message === "No records found" || n.message === "No transactions found"))
    return n.result;
  if (n.status != 1 || typeof n.message != "string" || !n.message.match(/^OK/)) {
    const e = new Error("invalid response");
    throw e.result = JSON.stringify(n), (n.result || "").toLowerCase().indexOf("rate limit") >= 0 && (e.throttleRetry = !0), e;
  }
  return n.result;
}
function $r(n) {
  if (n && n.status == 0 && n.message == "NOTOK" && (n.result || "").toLowerCase().indexOf("rate limit") >= 0) {
    const e = new Error("throttled response");
    throw e.result = JSON.stringify(n), e.throttleRetry = !0, e;
  }
  if (n.jsonrpc != "2.0") {
    const e = new Error("invalid response");
    throw e.result = JSON.stringify(n), e;
  }
  if (n.error) {
    const e = new Error(n.error.message || "unknown error");
    throw n.error.code && (e.code = n.error.code), n.error.data && (e.data = n.error.data), e;
  }
  return n.result;
}
function en(n) {
  if (n === "pending")
    throw new Error("pending not supported");
  return n === "latest" ? n : parseInt(n.substring(2), 16);
}
function Qt(n, e, t) {
  if (n === "call" && e.code === h.errors.SERVER_ERROR) {
    const i = e.error;
    if (i && (i.message.match(/reverted/i) || i.message.match(/VM execution error/i))) {
      let s = i.data;
      if (s && (s = "0x" + s.replace(/^.*0x/i, "")), S(s))
        return s;
      be.throwError("missing revert data in call exception", h.errors.CALL_EXCEPTION, {
        error: e,
        data: "0x"
      });
    }
  }
  let r = e.message;
  throw e.code === h.errors.SERVER_ERROR && (e.error && typeof e.error.message == "string" ? r = e.error.message : typeof e.body == "string" ? r = e.body : typeof e.responseText == "string" && (r = e.responseText)), r = (r || "").toLowerCase(), r.match(/insufficient funds/) && be.throwError("insufficient funds for intrinsic transaction cost", h.errors.INSUFFICIENT_FUNDS, {
    error: e,
    method: n,
    transaction: t
  }), r.match(/same hash was already imported|transaction nonce is too low|nonce too low/) && be.throwError("nonce has already been used", h.errors.NONCE_EXPIRED, {
    error: e,
    method: n,
    transaction: t
  }), r.match(/another transaction with same nonce/) && be.throwError("replacement fee too low", h.errors.REPLACEMENT_UNDERPRICED, {
    error: e,
    method: n,
    transaction: t
  }), r.match(/execution failed due to an exception|execution reverted/) && be.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", h.errors.UNPREDICTABLE_GAS_LIMIT, {
    error: e,
    method: n,
    transaction: t
  }), e;
}
class ho extends cr {
  constructor(e, t) {
    super(e), y(this, "baseUrl", this.getBaseUrl()), y(this, "apiKey", t || null);
  }
  getBaseUrl() {
    switch (this.network ? this.network.name : "invalid") {
      case "homestead":
        return "https://api.etherscan.io";
      case "goerli":
        return "https://api-goerli.etherscan.io";
      case "sepolia":
        return "https://api-sepolia.etherscan.io";
      case "matic":
        return "https://api.polygonscan.com";
      case "maticmum":
        return "https://api-testnet.polygonscan.com";
      case "arbitrum":
        return "https://api.arbiscan.io";
      case "arbitrum-goerli":
        return "https://api-goerli.arbiscan.io";
      case "optimism":
        return "https://api-optimistic.etherscan.io";
      case "optimism-goerli":
        return "https://api-goerli-optimistic.etherscan.io";
    }
    return be.throwArgumentError("unsupported network", "network", this.network.name);
  }
  getUrl(e, t) {
    const r = Object.keys(t).reduce((s, o) => {
      const a = t[o];
      return a != null && (s += `&${o}=${a}`), s;
    }, ""), i = this.apiKey ? `&apikey=${this.apiKey}` : "";
    return `${this.baseUrl}/api?module=${e}${r}${i}`;
  }
  getPostUrl() {
    return `${this.baseUrl}/api`;
  }
  getPostData(e, t) {
    return t.module = e, t.apikey = this.apiKey, t;
  }
  fetch(e, t, r) {
    return nt(this, void 0, void 0, function* () {
      const i = r ? this.getPostUrl() : this.getUrl(e, t), s = r ? this.getPostData(e, t) : null, o = e === "proxy" ? $r : uo;
      this.emit("debug", {
        action: "request",
        request: i,
        provider: this
      });
      const a = {
        url: i,
        throttleSlotInterval: 1e3,
        throttleCallback: (f, u) => (this.isCommunityResource() && Tt(), Promise.resolve(!0))
      };
      let c = null;
      s && (a.headers = { "content-type": "application/x-www-form-urlencoded; charset=UTF-8" }, c = Object.keys(s).map((f) => `${f}=${s[f]}`).join("&"));
      const l = yield Ze(a, c, o || $r);
      return this.emit("debug", {
        action: "response",
        request: i,
        response: te(l),
        provider: this
      }), l;
    });
  }
  detectNetwork() {
    return nt(this, void 0, void 0, function* () {
      return this.network;
    });
  }
  perform(e, t) {
    const r = Object.create(null, {
      perform: { get: () => super.perform }
    });
    return nt(this, void 0, void 0, function* () {
      switch (e) {
        case "getBlockNumber":
          return this.fetch("proxy", { action: "eth_blockNumber" });
        case "getGasPrice":
          return this.fetch("proxy", { action: "eth_gasPrice" });
        case "getBalance":
          return this.fetch("account", {
            action: "balance",
            address: t.address,
            tag: t.blockTag
          });
        case "getTransactionCount":
          return this.fetch("proxy", {
            action: "eth_getTransactionCount",
            address: t.address,
            tag: t.blockTag
          });
        case "getCode":
          return this.fetch("proxy", {
            action: "eth_getCode",
            address: t.address,
            tag: t.blockTag
          });
        case "getStorageAt":
          return this.fetch("proxy", {
            action: "eth_getStorageAt",
            address: t.address,
            position: t.position,
            tag: t.blockTag
          });
        case "sendTransaction":
          return this.fetch("proxy", {
            action: "eth_sendRawTransaction",
            hex: t.signedTransaction
          }, !0).catch((i) => Qt("sendTransaction", i, t.signedTransaction));
        case "getBlock":
          if (t.blockTag)
            return this.fetch("proxy", {
              action: "eth_getBlockByNumber",
              tag: t.blockTag,
              boolean: t.includeTransactions ? "true" : "false"
            });
          throw new Error("getBlock by blockHash not implemented");
        case "getTransaction":
          return this.fetch("proxy", {
            action: "eth_getTransactionByHash",
            txhash: t.transactionHash
          });
        case "getTransactionReceipt":
          return this.fetch("proxy", {
            action: "eth_getTransactionReceipt",
            txhash: t.transactionHash
          });
        case "call": {
          if (t.blockTag !== "latest")
            throw new Error("EtherscanProvider does not support blockTag for call");
          const i = Zr(t.transaction);
          i.module = "proxy", i.action = "eth_call";
          try {
            return yield this.fetch("proxy", i, !0);
          } catch (s) {
            return Qt("call", s, t.transaction);
          }
        }
        case "estimateGas": {
          const i = Zr(t.transaction);
          i.module = "proxy", i.action = "eth_estimateGas";
          try {
            return yield this.fetch("proxy", i, !0);
          } catch (s) {
            return Qt("estimateGas", s, t.transaction);
          }
        }
        case "getLogs": {
          const i = { action: "getLogs" };
          if (t.filter.fromBlock && (i.fromBlock = en(t.filter.fromBlock)), t.filter.toBlock && (i.toBlock = en(t.filter.toBlock)), t.filter.address && (i.address = t.filter.address), t.filter.topics && t.filter.topics.length > 0 && (t.filter.topics.length > 1 && be.throwError("unsupported topic count", h.errors.UNSUPPORTED_OPERATION, { topics: t.filter.topics }), t.filter.topics.length === 1)) {
            const a = t.filter.topics[0];
            (typeof a != "string" || a.length !== 66) && be.throwError("unsupported topic format", h.errors.UNSUPPORTED_OPERATION, { topic0: a }), i.topic0 = a;
          }
          const s = yield this.fetch("logs", i);
          let o = {};
          for (let a = 0; a < s.length; a++) {
            const c = s[a];
            if (c.blockHash == null) {
              if (o[c.blockNumber] == null) {
                const l = yield this.getBlock(c.blockNumber);
                l && (o[c.blockNumber] = l.hash);
              }
              c.blockHash = o[c.blockNumber];
            }
          }
          return s;
        }
        case "getEtherPrice":
          return this.network.name !== "homestead" ? 0 : parseFloat((yield this.fetch("stats", { action: "ethprice" })).ethusd);
      }
      return r.perform.call(this, e, t);
    });
  }
  getHistory(e, t, r) {
    return nt(this, void 0, void 0, function* () {
      const i = {
        action: "txlist",
        address: yield this.resolveName(e),
        startblock: t == null ? 0 : t,
        endblock: r == null ? 99999999 : r,
        sort: "asc"
      };
      return (yield this.fetch("account", i)).map((o) => {
        ["contractAddress", "to"].forEach(function(c) {
          o[c] == "" && delete o[c];
        }), o.creates == null && o.contractAddress != null && (o.creates = o.contractAddress);
        const a = this.formatter.transactionResponse(o);
        return o.timeStamp && (a.timestamp = parseInt(o.timeStamp)), a;
      });
    });
  }
  isCommunityResource() {
    return this.apiKey == null;
  }
}
function go(n) {
  n = n.slice();
  for (let e = n.length - 1; e > 0; e--) {
    const t = Math.floor(Math.random() * (e + 1)), r = n[e];
    n[e] = n[t], n[t] = r;
  }
  return n;
}
var yt = globalThis && globalThis.__awaiter || function(n, e, t, r) {
  function i(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function a(f) {
      try {
        l(r.next(f));
      } catch (u) {
        o(u);
      }
    }
    function c(f) {
      try {
        l(r.throw(f));
      } catch (u) {
        o(u);
      }
    }
    function l(f) {
      f.done ? s(f.value) : i(f.value).then(a, c);
    }
    l((r = r.apply(n, e || [])).next());
  });
};
const Ie = new h(J);
function it() {
  return new Date().getTime();
}
function tn(n) {
  let e = null;
  for (let t = 0; t < n.length; t++) {
    const r = n[t];
    if (r == null)
      return null;
    e ? e.name === r.name && e.chainId === r.chainId && (e.ensAddress === r.ensAddress || e.ensAddress == null && r.ensAddress == null) || Ie.throwArgumentError("provider mismatch", "networks", n) : e = r;
  }
  return e;
}
function rn(n, e) {
  n = n.slice().sort();
  const t = Math.floor(n.length / 2);
  if (n.length % 2)
    return n[t];
  const r = n[t - 1], i = n[t];
  return e != null && Math.abs(r - i) > e ? null : (r + i) / 2;
}
function Oe(n) {
  if (n === null)
    return "null";
  if (typeof n == "number" || typeof n == "boolean")
    return JSON.stringify(n);
  if (typeof n == "string")
    return n;
  if (w.isBigNumber(n))
    return n.toString();
  if (Array.isArray(n))
    return JSON.stringify(n.map((e) => Oe(e)));
  if (typeof n == "object") {
    const e = Object.keys(n);
    return e.sort(), "{" + e.map((t) => {
      let r = n[t];
      return typeof r == "function" ? r = "[function]" : r = Oe(r), JSON.stringify(t) + ":" + r;
    }).join(",") + "}";
  }
  throw new Error("unknown value type: " + typeof n);
}
let po = 1;
function nn(n) {
  let e = null, t = null, r = new Promise((o) => {
    e = function() {
      t && (clearTimeout(t), t = null), o();
    }, t = setTimeout(e, n);
  });
  const i = (o) => (r = r.then(o), r);
  function s() {
    return r;
  }
  return { cancel: e, getPromise: s, wait: i };
}
const mo = [
  h.errors.CALL_EXCEPTION,
  h.errors.INSUFFICIENT_FUNDS,
  h.errors.NONCE_EXPIRED,
  h.errors.REPLACEMENT_UNDERPRICED,
  h.errors.UNPREDICTABLE_GAS_LIMIT
], Ao = [
  "address",
  "args",
  "errorArgs",
  "errorSignature",
  "method",
  "transaction"
];
function st(n, e) {
  const t = {
    weight: n.weight
  };
  return Object.defineProperty(t, "provider", { get: () => n.provider }), n.start && (t.start = n.start), e && (t.duration = e - n.start), n.done && (n.error ? t.error = n.error : t.result = n.result || null), t;
}
function vo(n, e) {
  return function(t) {
    const r = {};
    t.forEach((s) => {
      const o = n(s.result);
      r[o] || (r[o] = { count: 0, result: s.result }), r[o].count++;
    });
    const i = Object.keys(r);
    for (let s = 0; s < i.length; s++) {
      const o = r[i[s]];
      if (o.count >= e)
        return o.result;
    }
  };
}
function wo(n, e, t) {
  let r = Oe;
  switch (e) {
    case "getBlockNumber":
      return function(i) {
        const s = i.map((a) => a.result);
        let o = rn(i.map((a) => a.result), 2);
        if (o != null)
          return o = Math.ceil(o), s.indexOf(o + 1) >= 0 && o++, o >= n._highestBlockNumber && (n._highestBlockNumber = o), n._highestBlockNumber;
      };
    case "getGasPrice":
      return function(i) {
        const s = i.map((o) => o.result);
        return s.sort(), s[Math.floor(s.length / 2)];
      };
    case "getEtherPrice":
      return function(i) {
        return rn(i.map((s) => s.result));
      };
    case "getBalance":
    case "getTransactionCount":
    case "getCode":
    case "getStorageAt":
    case "call":
    case "estimateGas":
    case "getLogs":
      break;
    case "getTransaction":
    case "getTransactionReceipt":
      r = function(i) {
        return i == null ? null : (i = F(i), i.confirmations = -1, Oe(i));
      };
      break;
    case "getBlock":
      t.includeTransactions ? r = function(i) {
        return i == null ? null : (i = F(i), i.transactions = i.transactions.map((s) => (s = F(s), s.confirmations = -1, s)), Oe(i));
      } : r = function(i) {
        return i == null ? null : Oe(i);
      };
      break;
    default:
      throw new Error("unknown method: " + e);
  }
  return vo(r, n.quorum);
}
function ze(n, e) {
  return yt(this, void 0, void 0, function* () {
    const t = n.provider;
    return t.blockNumber != null && t.blockNumber >= e || e === -1 ? t : Be(() => new Promise((r, i) => {
      setTimeout(function() {
        return t.blockNumber >= e ? r(t) : n.cancelled ? r(null) : r(void 0);
      }, 0);
    }), { oncePoll: t });
  });
}
function yo(n, e, t, r) {
  return yt(this, void 0, void 0, function* () {
    let i = n.provider;
    switch (t) {
      case "getBlockNumber":
      case "getGasPrice":
        return i[t]();
      case "getEtherPrice":
        if (i.getEtherPrice)
          return i.getEtherPrice();
        break;
      case "getBalance":
      case "getTransactionCount":
      case "getCode":
        return r.blockTag && S(r.blockTag) && (i = yield ze(n, e)), i[t](r.address, r.blockTag || "latest");
      case "getStorageAt":
        return r.blockTag && S(r.blockTag) && (i = yield ze(n, e)), i.getStorageAt(r.address, r.position, r.blockTag || "latest");
      case "getBlock":
        return r.blockTag && S(r.blockTag) && (i = yield ze(n, e)), i[r.includeTransactions ? "getBlockWithTransactions" : "getBlock"](r.blockTag || r.blockHash);
      case "call":
      case "estimateGas":
        return r.blockTag && S(r.blockTag) && (i = yield ze(n, e)), t === "call" && r.blockTag ? i[t](r.transaction, r.blockTag) : i[t](r.transaction);
      case "getTransaction":
      case "getTransactionReceipt":
        return i[t](r.transactionHash);
      case "getLogs": {
        let s = r.filter;
        return (s.fromBlock && S(s.fromBlock) || s.toBlock && S(s.toBlock)) && (i = yield ze(n, e)), i.getLogs(s);
      }
    }
    return Ie.throwError("unknown method error", h.errors.UNKNOWN_ERROR, {
      method: t,
      params: r
    });
  });
}
class bo extends cr {
  constructor(e, t) {
    e.length === 0 && Ie.throwArgumentError("missing providers", "providers", e);
    const r = e.map((o, a) => {
      if (Nt.isProvider(o)) {
        const f = qr(o) ? 2e3 : 750;
        return Object.freeze({ provider: o, weight: 1, stallTimeout: f, priority: 1 });
      }
      const c = F(o);
      c.priority == null && (c.priority = 1), c.stallTimeout == null && (c.stallTimeout = qr(o) ? 2e3 : 750), c.weight == null && (c.weight = 1);
      const l = c.weight;
      return (l % 1 || l > 512 || l < 1) && Ie.throwArgumentError("invalid weight; must be integer in [1, 512]", `providers[${a}].weight`, l), Object.freeze(c);
    }), i = r.reduce((o, a) => o + a.weight, 0);
    t == null ? t = i / 2 : t > i && Ie.throwArgumentError("quorum will always fail; larger than total weight", "quorum", t);
    let s = tn(r.map((o) => o.provider.network));
    s == null && (s = new Promise((o, a) => {
      setTimeout(() => {
        this.detectNetwork().then(o, a);
      }, 0);
    })), super(s), y(this, "providerConfigs", Object.freeze(r)), y(this, "quorum", t), this._highestBlockNumber = -1;
  }
  detectNetwork() {
    return yt(this, void 0, void 0, function* () {
      const e = yield Promise.all(this.providerConfigs.map((t) => t.provider.getNetwork()));
      return tn(e);
    });
  }
  perform(e, t) {
    return yt(this, void 0, void 0, function* () {
      if (e === "sendTransaction") {
        const c = yield Promise.all(this.providerConfigs.map((l) => l.provider.sendTransaction(t.signedTransaction).then((f) => f.hash, (f) => f)));
        for (let l = 0; l < c.length; l++) {
          const f = c[l];
          if (typeof f == "string")
            return f;
        }
        throw c[0];
      }
      this._highestBlockNumber === -1 && e !== "getBlockNumber" && (yield this.getBlockNumber());
      const r = wo(this, e, t), i = go(this.providerConfigs.map(F));
      i.sort((c, l) => c.priority - l.priority);
      const s = this._highestBlockNumber;
      let o = 0, a = !0;
      for (; ; ) {
        const c = it();
        let l = i.filter((d) => d.runner && c - d.start < d.stallTimeout).reduce((d, g) => d + g.weight, 0);
        for (; l < this.quorum && o < i.length; ) {
          const d = i[o++], g = po++;
          d.start = it(), d.staller = nn(d.stallTimeout), d.staller.wait(() => {
            d.staller = null;
          }), d.runner = yo(d, s, e, t).then((m) => {
            d.done = !0, d.result = m, this.listenerCount("debug") && this.emit("debug", {
              action: "request",
              rid: g,
              backend: st(d, it()),
              request: { method: e, params: te(t) },
              provider: this
            });
          }, (m) => {
            d.done = !0, d.error = m, this.listenerCount("debug") && this.emit("debug", {
              action: "request",
              rid: g,
              backend: st(d, it()),
              request: { method: e, params: te(t) },
              provider: this
            });
          }), this.listenerCount("debug") && this.emit("debug", {
            action: "request",
            rid: g,
            backend: st(d, null),
            request: { method: e, params: te(t) },
            provider: this
          }), l += d.weight;
        }
        const f = [];
        i.forEach((d) => {
          d.done || !d.runner || (f.push(d.runner), d.staller && f.push(d.staller.getPromise()));
        }), f.length && (yield Promise.race(f));
        const u = i.filter((d) => d.done && d.error == null);
        if (u.length >= this.quorum) {
          const d = r(u);
          if (d !== void 0)
            return i.forEach((g) => {
              g.staller && g.staller.cancel(), g.cancelled = !0;
            }), d;
          a || (yield nn(100).getPromise()), a = !1;
        }
        const p = i.reduce((d, g) => {
          if (!g.done || g.error == null)
            return d;
          const m = g.error.code;
          return mo.indexOf(m) >= 0 && (d[m] || (d[m] = { error: g.error, weight: 0 }), d[m].weight += g.weight), d;
        }, {});
        if (Object.keys(p).forEach((d) => {
          const g = p[d];
          if (g.weight < this.quorum)
            return;
          i.forEach((A) => {
            A.staller && A.staller.cancel(), A.cancelled = !0;
          });
          const m = g.error, E = {};
          Ao.forEach((A) => {
            m[A] != null && (E[A] = m[A]);
          }), Ie.throwError(m.reason || m.message, d, E);
        }), i.filter((d) => !d.done).length === 0)
          break;
      }
      return i.forEach((c) => {
        c.staller && c.staller.cancel(), c.cancelled = !0;
      }), Ie.throwError("failed to meet quorum", h.errors.SERVER_ERROR, {
        method: e,
        params: t,
        results: i.map((c) => st(c)),
        provider: this
      });
    });
  }
}
const Eo = null, ht = new h(J), Ke = "84842078b09946638c03157f83405213";
class ko extends fr {
  constructor(e, t) {
    const r = new Kn(e, t), i = r.connection;
    i.password && ht.throwError("INFURA WebSocket project secrets unsupported", h.errors.UNSUPPORTED_OPERATION, {
      operation: "InfuraProvider.getWebSocketProvider()"
    });
    const s = i.url.replace(/^http/i, "ws").replace("/v3/", "/ws/v3/");
    super(s, e), y(this, "apiKey", r.projectId), y(this, "projectId", r.projectId), y(this, "projectSecret", r.projectSecret);
  }
  isCommunityResource() {
    return this.projectId === Ke;
  }
}
class Kn extends xe {
  static getWebSocketProvider(e, t) {
    return new ko(e, t);
  }
  static getApiKey(e) {
    const t = {
      apiKey: Ke,
      projectId: Ke,
      projectSecret: null
    };
    return e == null || (typeof e == "string" ? t.projectId = e : e.projectSecret != null ? (ht.assertArgument(typeof e.projectId == "string", "projectSecret requires a projectId", "projectId", e.projectId), ht.assertArgument(typeof e.projectSecret == "string", "invalid projectSecret", "projectSecret", "[REDACTED]"), t.projectId = e.projectId, t.projectSecret = e.projectSecret) : e.projectId && (t.projectId = e.projectId), t.apiKey = t.projectId), t;
  }
  static getUrl(e, t) {
    let r = null;
    switch (e ? e.name : "unknown") {
      case "homestead":
        r = "mainnet.infura.io";
        break;
      case "goerli":
        r = "goerli.infura.io";
        break;
      case "sepolia":
        r = "sepolia.infura.io";
        break;
      case "matic":
        r = "polygon-mainnet.infura.io";
        break;
      case "maticmum":
        r = "polygon-mumbai.infura.io";
        break;
      case "optimism":
        r = "optimism-mainnet.infura.io";
        break;
      case "optimism-goerli":
        r = "optimism-goerli.infura.io";
        break;
      case "arbitrum":
        r = "arbitrum-mainnet.infura.io";
        break;
      case "arbitrum-goerli":
        r = "arbitrum-goerli.infura.io";
        break;
      default:
        ht.throwError("unsupported network", h.errors.INVALID_ARGUMENT, {
          argument: "network",
          value: e
        });
    }
    const i = {
      allowGzip: !0,
      url: "https://" + r + "/v3/" + t.projectId,
      throttleCallback: (s, o) => (t.projectId === Ke && Tt(), Promise.resolve(!0))
    };
    return t.projectSecret != null && (i.user = "", i.password = t.projectSecret), i;
  }
  isCommunityResource() {
    return this.projectId === Ke;
  }
}
class Uo extends Fe {
  send(e, t) {
    const r = {
      method: e,
      params: t,
      id: this._nextId++,
      jsonrpc: "2.0"
    };
    this._pendingBatch == null && (this._pendingBatch = []);
    const i = { request: r, resolve: null, reject: null }, s = new Promise((o, a) => {
      i.resolve = o, i.reject = a;
    });
    return this._pendingBatch.push(i), this._pendingBatchAggregator || (this._pendingBatchAggregator = setTimeout(() => {
      const o = this._pendingBatch;
      this._pendingBatch = null, this._pendingBatchAggregator = null;
      const a = o.map((c) => c.request);
      return this.emit("debug", {
        action: "requestBatch",
        request: te(a),
        provider: this
      }), Ze(this.connection, JSON.stringify(a)).then((c) => {
        this.emit("debug", {
          action: "response",
          request: a,
          response: c,
          provider: this
        }), o.forEach((l, f) => {
          const u = c[f];
          if (u.error) {
            const p = new Error(u.error.message);
            p.code = u.error.code, p.data = u.error.data, l.reject(p);
          } else
            l.resolve(u.result);
        });
      }, (c) => {
        this.emit("debug", {
          action: "response",
          error: c,
          request: a,
          provider: this
        }), o.forEach((l) => {
          l.reject(c);
        });
      });
    }, 10)), s;
  }
}
const Yt = new h(J), No = "ETHERS_JS_SHARED";
class xo extends xe {
  static getApiKey(e) {
    return e && typeof e != "string" && Yt.throwArgumentError("invalid apiKey", "apiKey", e), e || No;
  }
  static getUrl(e, t) {
    Yt.warn("NodeSmith will be discontinued on 2019-12-20; please migrate to another platform.");
    let r = null;
    switch (e.name) {
      case "homestead":
        r = "https://ethereum.api.nodesmith.io/v1/mainnet/jsonrpc";
        break;
      case "ropsten":
        r = "https://ethereum.api.nodesmith.io/v1/ropsten/jsonrpc";
        break;
      case "rinkeby":
        r = "https://ethereum.api.nodesmith.io/v1/rinkeby/jsonrpc";
        break;
      case "goerli":
        r = "https://ethereum.api.nodesmith.io/v1/goerli/jsonrpc";
        break;
      case "kovan":
        r = "https://ethereum.api.nodesmith.io/v1/kovan/jsonrpc";
        break;
      default:
        Yt.throwArgumentError("unsupported network", "network", arguments[0]);
    }
    return r + "?apiKey=" + t;
  }
}
const sn = new h(J), on = "62e1ad51b37b8e00394bda3b";
class Po extends xe {
  static getApiKey(e) {
    const t = {
      applicationId: null,
      loadBalancer: !0,
      applicationSecretKey: null
    };
    return e == null ? t.applicationId = on : typeof e == "string" ? t.applicationId = e : e.applicationSecretKey != null ? (t.applicationId = e.applicationId, t.applicationSecretKey = e.applicationSecretKey) : e.applicationId ? t.applicationId = e.applicationId : sn.throwArgumentError("unsupported PocketProvider apiKey", "apiKey", e), t;
  }
  static getUrl(e, t) {
    let r = null;
    switch (e ? e.name : "unknown") {
      case "goerli":
        r = "eth-goerli.gateway.pokt.network";
        break;
      case "homestead":
        r = "eth-mainnet.gateway.pokt.network";
        break;
      case "kovan":
        r = "poa-kovan.gateway.pokt.network";
        break;
      case "matic":
        r = "poly-mainnet.gateway.pokt.network";
        break;
      case "maticmum":
        r = "polygon-mumbai-rpc.gateway.pokt.network";
        break;
      case "rinkeby":
        r = "eth-rinkeby.gateway.pokt.network";
        break;
      case "ropsten":
        r = "eth-ropsten.gateway.pokt.network";
        break;
      default:
        sn.throwError("unsupported network", h.errors.INVALID_ARGUMENT, {
          argument: "network",
          value: e
        });
    }
    const i = `https://${r}/v1/lb/${t.applicationId}`, s = { headers: {}, url: i };
    return t.applicationSecretKey != null && (s.user = "", s.password = t.applicationSecretKey), s;
  }
  isCommunityResource() {
    return this.applicationId === on;
  }
}
const an = new h(J);
let Io = 1;
function cn(n, e) {
  const t = "Web3LegacyFetcher";
  return function(r, i) {
    const s = {
      method: r,
      params: i,
      id: Io++,
      jsonrpc: "2.0"
    };
    return new Promise((o, a) => {
      this.emit("debug", {
        action: "request",
        fetcher: t,
        request: te(s),
        provider: this
      }), e(s, (c, l) => {
        if (c)
          return this.emit("debug", {
            action: "response",
            fetcher: t,
            error: c,
            request: s,
            provider: this
          }), a(c);
        if (this.emit("debug", {
          action: "response",
          fetcher: t,
          request: s,
          response: l,
          provider: this
        }), l.error) {
          const f = new Error(l.error.message);
          return f.code = l.error.code, f.data = l.error.data, a(f);
        }
        o(l.result);
      });
    });
  };
}
function _o(n) {
  return function(e, t) {
    t == null && (t = []);
    const r = { method: e, params: t };
    return this.emit("debug", {
      action: "request",
      fetcher: "Eip1193Fetcher",
      request: te(r),
      provider: this
    }), n.request(r).then((i) => (this.emit("debug", {
      action: "response",
      fetcher: "Eip1193Fetcher",
      request: r,
      response: i,
      provider: this
    }), i), (i) => {
      throw this.emit("debug", {
        action: "response",
        fetcher: "Eip1193Fetcher",
        request: r,
        error: i,
        provider: this
      }), i;
    });
  };
}
class Ro extends Fe {
  constructor(e, t) {
    e == null && an.throwArgumentError("missing provider", "provider", e);
    let r = null, i = null, s = null;
    typeof e == "function" ? (r = "unknown:", i = e) : (r = e.host || e.path || "", !r && e.isMetaMask && (r = "metamask"), s = e, e.request ? (r === "" && (r = "eip-1193:"), i = _o(e)) : e.sendAsync ? i = cn(e, e.sendAsync.bind(e)) : e.send ? i = cn(e, e.send.bind(e)) : an.throwArgumentError("unsupported provider", "provider", e), r || (r = "unknown:")), super(r, t), y(this, "jsonRpcFetchFunc", i), y(this, "provider", s);
  }
  send(e, t) {
    return this.jsonRpcFetchFunc(e, t);
  }
}
const ln = new h(J);
function Do(n, e) {
  if (n == null && (n = "homestead"), typeof n == "string") {
    const r = n.match(/^(ws|http)s?:/i);
    if (r)
      switch (r[1].toLowerCase()) {
        case "http":
        case "https":
          return new Fe(n);
        case "ws":
        case "wss":
          return new fr(n);
        default:
          ln.throwArgumentError("unsupported URL scheme", "network", n);
      }
  }
  const t = hn(n);
  return (!t || !t._defaultProvider) && ln.throwError("unsupported getDefaultProvider network", h.errors.NETWORK_ERROR, {
    operation: "getDefaultProvider",
    network: n
  }), t._defaultProvider({
    FallbackProvider: bo,
    AlchemyProvider: Jn,
    AnkrProvider: co,
    CloudflareProvider: fo,
    EtherscanProvider: ho,
    InfuraProvider: Kn,
    JsonRpcProvider: Fe,
    NodesmithProvider: xo,
    PocketProvider: Po,
    Web3Provider: Ro,
    IpcProvider: Eo
  }, e);
}
export {
  Jn as AlchemyProvider,
  so as AlchemyWebSocketProvider,
  co as AnkrProvider,
  cr as BaseProvider,
  fo as CloudflareProvider,
  ho as EtherscanProvider,
  bo as FallbackProvider,
  v as Formatter,
  Kn as InfuraProvider,
  ko as InfuraWebSocketProvider,
  Eo as IpcProvider,
  Uo as JsonRpcBatchProvider,
  Fe as JsonRpcProvider,
  zn as JsonRpcSigner,
  xo as NodesmithProvider,
  Po as PocketProvider,
  Nt as Provider,
  Yr as Resolver,
  io as StaticJsonRpcProvider,
  xe as UrlJsonRpcProvider,
  Ro as Web3Provider,
  fr as WebSocketProvider,
  Do as getDefaultProvider,
  hn as getNetwork,
  Gs as isCommunityResourcable,
  qr as isCommunityResource,
  Tt as showThrottleMessage
};
