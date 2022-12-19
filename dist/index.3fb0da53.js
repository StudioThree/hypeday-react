import { a as on, c as T, b as Ks, g as tc } from "./index.9de5637c.js";
import { o as nc, t as p, g as rc, q as ic, b as A, s as sc, j as oc, p as ac, n as cc, u as uc } from "./subscriptionManager.5e2d6ae0.js";
import { r as lc, b as Bn } from "./bn.62e28504.js";
function hc(n, e) {
  for (var t = 0; t < e.length; t++) {
    const r = e[t];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in n)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s && Object.defineProperty(n, i, s.get ? s : {
            enumerable: !0,
            get: () => r[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var ai = {}, Xt = {}, Vn = {};
Object.defineProperty(Vn, "__esModule", { value: !0 });
Vn.walletLogo = void 0;
const dc = (n, e) => {
  let t;
  switch (n) {
    case "standard":
      return t = e, `data:image/svg+xml,%3Csvg width='${e}' height='${t}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
    case "circle":
      return t = e, `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${e}' height='${t}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`;
    case "text":
      return t = (0.1 * e).toFixed(2), `data:image/svg+xml,%3Csvg width='${e}' height='${t}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
    case "textWithLogo":
      return t = (0.25 * e).toFixed(2), `data:image/svg+xml,%3Csvg width='${e}' height='${t}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
    case "textLight":
      return t = (0.1 * e).toFixed(2), `data:image/svg+xml,%3Csvg width='${e}' height='${t}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
    case "textWithLogoLight":
      return t = (0.25 * e).toFixed(2), `data:image/svg+xml,%3Csvg width='${e}' height='${t}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
    default:
      return t = e, `data:image/svg+xml,%3Csvg width='${e}' height='${t}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
  }
};
Vn.walletLogo = dc;
var $n = {};
Object.defineProperty($n, "__esModule", { value: !0 });
$n.ScopedLocalStorage = void 0;
class fc {
  constructor(e) {
    this.scope = e;
  }
  setItem(e, t) {
    localStorage.setItem(this.scopedKey(e), t);
  }
  getItem(e) {
    return localStorage.getItem(this.scopedKey(e));
  }
  removeItem(e) {
    localStorage.removeItem(this.scopedKey(e));
  }
  clear() {
    const e = this.scopedKey(""), t = [];
    for (let r = 0; r < localStorage.length; r++) {
      const i = localStorage.key(r);
      typeof i == "string" && i.startsWith(e) && t.push(i);
    }
    t.forEach((r) => localStorage.removeItem(r));
  }
  scopedKey(e) {
    return `${this.scope}:${e}`;
  }
}
$n.ScopedLocalStorage = fc;
var _t = {}, Hn = {}, Ge = {};
Object.defineProperty(Ge, "__esModule", { value: !0 });
Ge.EthereumProviderError = Ge.EthereumRpcError = void 0;
const pc = nc;
class Js extends Error {
  constructor(e, t, r) {
    if (!Number.isInteger(e))
      throw new Error('"code" must be an integer.');
    if (!t || typeof t != "string")
      throw new Error('"message" must be a nonempty string.');
    super(t), this.code = e, r !== void 0 && (this.data = r);
  }
  serialize() {
    const e = {
      code: this.code,
      message: this.message
    };
    return this.data !== void 0 && (e.data = this.data), this.stack && (e.stack = this.stack), e;
  }
  toString() {
    return pc.default(this.serialize(), vc, 2);
  }
}
Ge.EthereumRpcError = Js;
class bc extends Js {
  constructor(e, t, r) {
    if (!gc(e))
      throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
    super(e, t, r);
  }
}
Ge.EthereumProviderError = bc;
function gc(n) {
  return Number.isInteger(n) && n >= 1e3 && n <= 4999;
}
function vc(n, e) {
  if (e !== "[Circular]")
    return e;
}
var ci = {}, Ye = {};
Object.defineProperty(Ye, "__esModule", { value: !0 });
Ye.errorValues = Ye.errorCodes = void 0;
Ye.errorCodes = {
  rpc: {
    invalidInput: -32e3,
    resourceNotFound: -32001,
    resourceUnavailable: -32002,
    transactionRejected: -32003,
    methodNotSupported: -32004,
    limitExceeded: -32005,
    parse: -32700,
    invalidRequest: -32600,
    methodNotFound: -32601,
    invalidParams: -32602,
    internal: -32603
  },
  provider: {
    userRejectedRequest: 4001,
    unauthorized: 4100,
    unsupportedMethod: 4200,
    disconnected: 4900,
    chainDisconnected: 4901
  }
};
Ye.errorValues = {
  "-32700": {
    standard: "JSON RPC 2.0",
    message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
  },
  "-32600": {
    standard: "JSON RPC 2.0",
    message: "The JSON sent is not a valid Request object."
  },
  "-32601": {
    standard: "JSON RPC 2.0",
    message: "The method does not exist / is not available."
  },
  "-32602": {
    standard: "JSON RPC 2.0",
    message: "Invalid method parameter(s)."
  },
  "-32603": {
    standard: "JSON RPC 2.0",
    message: "Internal JSON-RPC error."
  },
  "-32000": {
    standard: "EIP-1474",
    message: "Invalid input."
  },
  "-32001": {
    standard: "EIP-1474",
    message: "Resource not found."
  },
  "-32002": {
    standard: "EIP-1474",
    message: "Resource unavailable."
  },
  "-32003": {
    standard: "EIP-1474",
    message: "Transaction rejected."
  },
  "-32004": {
    standard: "EIP-1474",
    message: "Method not supported."
  },
  "-32005": {
    standard: "EIP-1474",
    message: "Request limit exceeded."
  },
  4001: {
    standard: "EIP-1193",
    message: "User rejected the request."
  },
  4100: {
    standard: "EIP-1193",
    message: "The requested account and/or method has not been authorized by the user."
  },
  4200: {
    standard: "EIP-1193",
    message: "The requested method is not supported by this Ethereum provider."
  },
  4900: {
    standard: "EIP-1193",
    message: "The provider is disconnected from all chains."
  },
  4901: {
    standard: "EIP-1193",
    message: "The provider is disconnected from the specified chain."
  }
};
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.serializeError = n.isValidCode = n.getMessageFromCode = n.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
  const e = Ye, t = Ge, r = e.errorCodes.rpc.internal, i = "Unspecified error message. This is a bug, please report it.", s = {
    code: r,
    message: o(r)
  };
  n.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
  function o(h, f = i) {
    if (Number.isInteger(h)) {
      const b = h.toString();
      if (d(e.errorValues, b))
        return e.errorValues[b].message;
      if (l(h))
        return n.JSON_RPC_SERVER_ERROR_MESSAGE;
    }
    return f;
  }
  n.getMessageFromCode = o;
  function a(h) {
    if (!Number.isInteger(h))
      return !1;
    const f = h.toString();
    return !!(e.errorValues[f] || l(h));
  }
  n.isValidCode = a;
  function c(h, { fallbackError: f = s, shouldIncludeStack: b = !1 } = {}) {
    var w, v;
    if (!f || !Number.isInteger(f.code) || typeof f.message != "string")
      throw new Error("Must provide fallback error with integer number code and string message.");
    if (h instanceof t.EthereumRpcError)
      return h.serialize();
    const g = {};
    if (h && typeof h == "object" && !Array.isArray(h) && d(h, "code") && a(h.code)) {
      const M = h;
      g.code = M.code, M.message && typeof M.message == "string" ? (g.message = M.message, d(M, "data") && (g.data = M.data)) : (g.message = o(g.code), g.data = { originalError: u(h) });
    } else {
      g.code = f.code;
      const M = (w = h) === null || w === void 0 ? void 0 : w.message;
      g.message = M && typeof M == "string" ? M : f.message, g.data = { originalError: u(h) };
    }
    const k = (v = h) === null || v === void 0 ? void 0 : v.stack;
    return b && h && k && typeof k == "string" && (g.stack = k), g;
  }
  n.serializeError = c;
  function l(h) {
    return h >= -32099 && h <= -32e3;
  }
  function u(h) {
    return h && typeof h == "object" && !Array.isArray(h) ? Object.assign({}, h) : h;
  }
  function d(h, f) {
    return Object.prototype.hasOwnProperty.call(h, f);
  }
})(ci);
var Un = {};
Object.defineProperty(Un, "__esModule", { value: !0 });
Un.ethErrors = void 0;
const ui = Ge, Xs = ci, X = Ye;
Un.ethErrors = {
  rpc: {
    parse: (n) => be(X.errorCodes.rpc.parse, n),
    invalidRequest: (n) => be(X.errorCodes.rpc.invalidRequest, n),
    invalidParams: (n) => be(X.errorCodes.rpc.invalidParams, n),
    methodNotFound: (n) => be(X.errorCodes.rpc.methodNotFound, n),
    internal: (n) => be(X.errorCodes.rpc.internal, n),
    server: (n) => {
      if (!n || typeof n != "object" || Array.isArray(n))
        throw new Error("Ethereum RPC Server errors must provide single object argument.");
      const { code: e } = n;
      if (!Number.isInteger(e) || e > -32005 || e < -32099)
        throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
      return be(e, n);
    },
    invalidInput: (n) => be(X.errorCodes.rpc.invalidInput, n),
    resourceNotFound: (n) => be(X.errorCodes.rpc.resourceNotFound, n),
    resourceUnavailable: (n) => be(X.errorCodes.rpc.resourceUnavailable, n),
    transactionRejected: (n) => be(X.errorCodes.rpc.transactionRejected, n),
    methodNotSupported: (n) => be(X.errorCodes.rpc.methodNotSupported, n),
    limitExceeded: (n) => be(X.errorCodes.rpc.limitExceeded, n)
  },
  provider: {
    userRejectedRequest: (n) => Wt(X.errorCodes.provider.userRejectedRequest, n),
    unauthorized: (n) => Wt(X.errorCodes.provider.unauthorized, n),
    unsupportedMethod: (n) => Wt(X.errorCodes.provider.unsupportedMethod, n),
    disconnected: (n) => Wt(X.errorCodes.provider.disconnected, n),
    chainDisconnected: (n) => Wt(X.errorCodes.provider.chainDisconnected, n),
    custom: (n) => {
      if (!n || typeof n != "object" || Array.isArray(n))
        throw new Error("Ethereum Provider custom errors must provide single object argument.");
      const { code: e, message: t, data: r } = n;
      if (!t || typeof t != "string")
        throw new Error('"message" must be a nonempty string');
      return new ui.EthereumProviderError(e, t, r);
    }
  }
};
function be(n, e) {
  const [t, r] = eo(e);
  return new ui.EthereumRpcError(n, t || Xs.getMessageFromCode(n), r);
}
function Wt(n, e) {
  const [t, r] = eo(e);
  return new ui.EthereumProviderError(n, t || Xs.getMessageFromCode(n), r);
}
function eo(n) {
  if (n) {
    if (typeof n == "string")
      return [n];
    if (typeof n == "object" && !Array.isArray(n)) {
      const { message: e, data: t } = n;
      if (e && typeof e != "string")
        throw new Error("Must specify string message.");
      return [e || void 0, t];
    }
  }
  return [];
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.getMessageFromCode = n.serializeError = n.EthereumProviderError = n.EthereumRpcError = n.ethErrors = n.errorCodes = void 0;
  const e = Ge;
  Object.defineProperty(n, "EthereumRpcError", { enumerable: !0, get: function() {
    return e.EthereumRpcError;
  } }), Object.defineProperty(n, "EthereumProviderError", { enumerable: !0, get: function() {
    return e.EthereumProviderError;
  } });
  const t = ci;
  Object.defineProperty(n, "serializeError", { enumerable: !0, get: function() {
    return t.serializeError;
  } }), Object.defineProperty(n, "getMessageFromCode", { enumerable: !0, get: function() {
    return t.getMessageFromCode;
  } });
  const r = Un;
  Object.defineProperty(n, "ethErrors", { enumerable: !0, get: function() {
    return r.ethErrors;
  } });
  const i = Ye;
  Object.defineProperty(n, "errorCodes", { enumerable: !0, get: function() {
    return i.errorCodes;
  } });
})(Hn);
var Tt = {};
Object.defineProperty(Tt, "__esModule", { value: !0 });
Tt.EVENTS = void 0;
Tt.EVENTS = {
  STARTED_CONNECTING: "walletlink_sdk.started.connecting",
  CONNECTED_STATE_CHANGE: "walletlink_sdk.connected",
  DISCONNECTED: "walletlink_sdk.disconnected",
  METADATA_DESTROYED: "walletlink_sdk_metadata_destroyed",
  LINKED: "walletlink_sdk.linked",
  FAILURE: "walletlink_sdk.generic_failure",
  SESSION_CONFIG_RECEIVED: "walletlink_sdk.session_config_event_received",
  ETH_ACCOUNTS_STATE: "walletlink_sdk.eth_accounts_state",
  SESSION_STATE_CHANGE: "walletlink_sdk.session_state_change",
  UNLINKED_ERROR_STATE: "walletlink_sdk.unlinked_error_state",
  SKIPPED_CLEARING_SESSION: "walletlink_sdk.skipped_clearing_session",
  GENERAL_ERROR: "walletlink_sdk.general_error",
  WEB3_REQUEST: "walletlink_sdk.web3.request",
  WEB3_REQUEST_PUBLISHED: "walletlink_sdk.web3.request_published",
  WEB3_RESPONSE: "walletlink_sdk.web3.response",
  UNKNOWN_ADDRESS_ENCOUNTERED: "walletlink_sdk.unknown_address_encountered"
};
var Ot = {};
function wt(n) {
  return typeof n == "function";
}
var Ui = !1, ge = {
  Promise: void 0,
  set useDeprecatedSynchronousErrorHandling(n) {
    if (n) {
      var e = /* @__PURE__ */ new Error();
      "" + e.stack;
    }
    Ui = n;
  },
  get useDeprecatedSynchronousErrorHandling() {
    return Ui;
  }
};
function gt(n) {
  setTimeout(function() {
    throw n;
  }, 0);
}
var Nn = {
  closed: !0,
  next: function(n) {
  },
  error: function(n) {
    if (ge.useDeprecatedSynchronousErrorHandling)
      throw n;
    gt(n);
  },
  complete: function() {
  }
}, oe = /* @__PURE__ */ function() {
  return Array.isArray || function(n) {
    return n && typeof n.length == "number";
  };
}();
function li(n) {
  return n !== null && typeof n == "object";
}
var yc = /* @__PURE__ */ function() {
  function n(e) {
    return Error.call(this), this.message = e ? e.length + ` errors occurred during unsubscription:
` + e.map(function(t, r) {
      return r + 1 + ") " + t.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = e, this;
  }
  return n.prototype = /* @__PURE__ */ Object.create(Error.prototype), n;
}(), zt = yc, F = /* @__PURE__ */ function() {
  function n(e) {
    this.closed = !1, this._parentOrParents = null, this._subscriptions = null, e && (this._ctorUnsubscribe = !0, this._unsubscribe = e);
  }
  return n.prototype.unsubscribe = function() {
    var e;
    if (!this.closed) {
      var t = this, r = t._parentOrParents, i = t._ctorUnsubscribe, s = t._unsubscribe, o = t._subscriptions;
      if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, r instanceof n)
        r.remove(this);
      else if (r !== null)
        for (var a = 0; a < r.length; ++a) {
          var c = r[a];
          c.remove(this);
        }
      if (wt(s)) {
        i && (this._unsubscribe = void 0);
        try {
          s.call(this);
        } catch (d) {
          e = d instanceof zt ? zi(d.errors) : [d];
        }
      }
      if (oe(o))
        for (var a = -1, l = o.length; ++a < l; ) {
          var u = o[a];
          if (li(u))
            try {
              u.unsubscribe();
            } catch (h) {
              e = e || [], h instanceof zt ? e = e.concat(zi(h.errors)) : e.push(h);
            }
        }
      if (e)
        throw new zt(e);
    }
  }, n.prototype.add = function(e) {
    var t = e;
    if (!e)
      return n.EMPTY;
    switch (typeof e) {
      case "function":
        t = new n(e);
      case "object":
        if (t === this || t.closed || typeof t.unsubscribe != "function")
          return t;
        if (this.closed)
          return t.unsubscribe(), t;
        if (!(t instanceof n)) {
          var r = t;
          t = new n(), t._subscriptions = [r];
        }
        break;
      default:
        throw new Error("unrecognized teardown " + e + " added to Subscription.");
    }
    var i = t._parentOrParents;
    if (i === null)
      t._parentOrParents = this;
    else if (i instanceof n) {
      if (i === this)
        return t;
      t._parentOrParents = [i, this];
    } else if (i.indexOf(this) === -1)
      i.push(this);
    else
      return t;
    var s = this._subscriptions;
    return s === null ? this._subscriptions = [t] : s.push(t), t;
  }, n.prototype.remove = function(e) {
    var t = this._subscriptions;
    if (t) {
      var r = t.indexOf(e);
      r !== -1 && t.splice(r, 1);
    }
  }, n.EMPTY = function(e) {
    return e.closed = !0, e;
  }(new n()), n;
}();
function zi(n) {
  return n.reduce(function(e, t) {
    return e.concat(t instanceof zt ? t.errors : t);
  }, []);
}
var Tn = /* @__PURE__ */ function() {
  return typeof Symbol == "function" ? /* @__PURE__ */ Symbol("rxSubscriber") : "@@rxSubscriber_" + /* @__PURE__ */ Math.random();
}(), m = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i) {
    var s = n.call(this) || this;
    switch (s.syncErrorValue = null, s.syncErrorThrown = !1, s.syncErrorThrowable = !1, s.isStopped = !1, arguments.length) {
      case 0:
        s.destination = Nn;
        break;
      case 1:
        if (!t) {
          s.destination = Nn;
          break;
        }
        if (typeof t == "object") {
          t instanceof e ? (s.syncErrorThrowable = t.syncErrorThrowable, s.destination = t, t.add(s)) : (s.syncErrorThrowable = !0, s.destination = new qi(s, t));
          break;
        }
      default:
        s.syncErrorThrowable = !0, s.destination = new qi(s, t, r, i);
        break;
    }
    return s;
  }
  return e.prototype[Tn] = function() {
    return this;
  }, e.create = function(t, r, i) {
    var s = new e(t, r, i);
    return s.syncErrorThrowable = !1, s;
  }, e.prototype.next = function(t) {
    this.isStopped || this._next(t);
  }, e.prototype.error = function(t) {
    this.isStopped || (this.isStopped = !0, this._error(t));
  }, e.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, e.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, n.prototype.unsubscribe.call(this));
  }, e.prototype._next = function(t) {
    this.destination.next(t);
  }, e.prototype._error = function(t) {
    this.destination.error(t), this.unsubscribe();
  }, e.prototype._complete = function() {
    this.destination.complete(), this.unsubscribe();
  }, e.prototype._unsubscribeAndRecycle = function() {
    var t = this._parentOrParents;
    return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = t, this;
  }, e;
}(F), qi = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i, s) {
    var o = n.call(this) || this;
    o._parentSubscriber = t;
    var a, c = o;
    return wt(r) ? a = r : r && (a = r.next, i = r.error, s = r.complete, r !== Nn && (c = Object.create(r), wt(c.unsubscribe) && o.add(c.unsubscribe.bind(c)), c.unsubscribe = o.unsubscribe.bind(o))), o._context = c, o._next = a, o._error = i, o._complete = s, o;
  }
  return e.prototype.next = function(t) {
    if (!this.isStopped && this._next) {
      var r = this._parentSubscriber;
      !ge.useDeprecatedSynchronousErrorHandling || !r.syncErrorThrowable ? this.__tryOrUnsub(this._next, t) : this.__tryOrSetError(r, this._next, t) && this.unsubscribe();
    }
  }, e.prototype.error = function(t) {
    if (!this.isStopped) {
      var r = this._parentSubscriber, i = ge.useDeprecatedSynchronousErrorHandling;
      if (this._error)
        !i || !r.syncErrorThrowable ? (this.__tryOrUnsub(this._error, t), this.unsubscribe()) : (this.__tryOrSetError(r, this._error, t), this.unsubscribe());
      else if (r.syncErrorThrowable)
        i ? (r.syncErrorValue = t, r.syncErrorThrown = !0) : gt(t), this.unsubscribe();
      else {
        if (this.unsubscribe(), i)
          throw t;
        gt(t);
      }
    }
  }, e.prototype.complete = function() {
    var t = this;
    if (!this.isStopped) {
      var r = this._parentSubscriber;
      if (this._complete) {
        var i = function() {
          return t._complete.call(t._context);
        };
        !ge.useDeprecatedSynchronousErrorHandling || !r.syncErrorThrowable ? (this.__tryOrUnsub(i), this.unsubscribe()) : (this.__tryOrSetError(r, i), this.unsubscribe());
      } else
        this.unsubscribe();
    }
  }, e.prototype.__tryOrUnsub = function(t, r) {
    try {
      t.call(this._context, r);
    } catch (i) {
      if (this.unsubscribe(), ge.useDeprecatedSynchronousErrorHandling)
        throw i;
      gt(i);
    }
  }, e.prototype.__tryOrSetError = function(t, r, i) {
    if (!ge.useDeprecatedSynchronousErrorHandling)
      throw new Error("bad call");
    try {
      r.call(this._context, i);
    } catch (s) {
      return ge.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = s, t.syncErrorThrown = !0, !0) : (gt(s), !0);
    }
    return !1;
  }, e.prototype._unsubscribe = function() {
    var t = this._parentSubscriber;
    this._context = null, this._parentSubscriber = null, t.unsubscribe();
  }, e;
}(m);
function hi(n) {
  for (; n; ) {
    var e = n, t = e.closed, r = e.destination, i = e.isStopped;
    if (t || i)
      return !1;
    r && r instanceof m ? n = r : n = null;
  }
  return !0;
}
function mc(n, e, t) {
  if (n) {
    if (n instanceof m)
      return n;
    if (n[Tn])
      return n[Tn]();
  }
  return !n && !e && !t ? new m(Nn) : new m(n, e, t);
}
var Rt = /* @__PURE__ */ function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Ke(n) {
  return n;
}
function Ur() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n[e] = arguments[e];
  return to(n);
}
function to(n) {
  return n.length === 0 ? Ke : n.length === 1 ? n[0] : function(t) {
    return n.reduce(function(r, i) {
      return i(r);
    }, t);
  };
}
var E = /* @__PURE__ */ function() {
  function n(e) {
    this._isScalar = !1, e && (this._subscribe = e);
  }
  return n.prototype.lift = function(e) {
    var t = new n();
    return t.source = this, t.operator = e, t;
  }, n.prototype.subscribe = function(e, t, r) {
    var i = this.operator, s = mc(e, t, r);
    if (i ? s.add(i.call(s, this.source)) : s.add(this.source || ge.useDeprecatedSynchronousErrorHandling && !s.syncErrorThrowable ? this._subscribe(s) : this._trySubscribe(s)), ge.useDeprecatedSynchronousErrorHandling && s.syncErrorThrowable && (s.syncErrorThrowable = !1, s.syncErrorThrown))
      throw s.syncErrorValue;
    return s;
  }, n.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (t) {
      ge.useDeprecatedSynchronousErrorHandling && (e.syncErrorThrown = !0, e.syncErrorValue = t), hi(e) ? e.error(t) : console.warn(t);
    }
  }, n.prototype.forEach = function(e, t) {
    var r = this;
    return t = Qi(t), new t(function(i, s) {
      var o;
      o = r.subscribe(function(a) {
        try {
          e(a);
        } catch (c) {
          s(c), o && o.unsubscribe();
        }
      }, s, i);
    });
  }, n.prototype._subscribe = function(e) {
    var t = this.source;
    return t && t.subscribe(e);
  }, n.prototype[Rt] = function() {
    return this;
  }, n.prototype.pipe = function() {
    for (var e = [], t = 0; t < arguments.length; t++)
      e[t] = arguments[t];
    return e.length === 0 ? this : to(e)(this);
  }, n.prototype.toPromise = function(e) {
    var t = this;
    return e = Qi(e), new e(function(r, i) {
      var s;
      t.subscribe(function(o) {
        return s = o;
      }, function(o) {
        return i(o);
      }, function() {
        return r(s);
      });
    });
  }, n.create = function(e) {
    return new n(e);
  }, n;
}();
function Qi(n) {
  if (n || (n = ge.Promise || Promise), !n)
    throw new Error("no Promise impl found");
  return n;
}
var _c = /* @__PURE__ */ function() {
  function n() {
    return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this;
  }
  return n.prototype = /* @__PURE__ */ Object.create(Error.prototype), n;
}(), ze = _c, no = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    var i = n.call(this) || this;
    return i.subject = t, i.subscriber = r, i.closed = !1, i;
  }
  return e.prototype.unsubscribe = function() {
    if (!this.closed) {
      this.closed = !0;
      var t = this.subject, r = t.observers;
      if (this.subject = null, !(!r || r.length === 0 || t.isStopped || t.closed)) {
        var i = r.indexOf(this.subscriber);
        i !== -1 && r.splice(i, 1);
      }
    }
  }, e;
}(F), ro = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t) {
    var r = n.call(this, t) || this;
    return r.destination = t, r;
  }
  return e;
}(m), Y = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e() {
    var t = n.call(this) || this;
    return t.observers = [], t.closed = !1, t.isStopped = !1, t.hasError = !1, t.thrownError = null, t;
  }
  return e.prototype[Tn] = function() {
    return new ro(this);
  }, e.prototype.lift = function(t) {
    var r = new Zi(this, this);
    return r.operator = t, r;
  }, e.prototype.next = function(t) {
    if (this.closed)
      throw new ze();
    if (!this.isStopped)
      for (var r = this.observers, i = r.length, s = r.slice(), o = 0; o < i; o++)
        s[o].next(t);
  }, e.prototype.error = function(t) {
    if (this.closed)
      throw new ze();
    this.hasError = !0, this.thrownError = t, this.isStopped = !0;
    for (var r = this.observers, i = r.length, s = r.slice(), o = 0; o < i; o++)
      s[o].error(t);
    this.observers.length = 0;
  }, e.prototype.complete = function() {
    if (this.closed)
      throw new ze();
    this.isStopped = !0;
    for (var t = this.observers, r = t.length, i = t.slice(), s = 0; s < r; s++)
      i[s].complete();
    this.observers.length = 0;
  }, e.prototype.unsubscribe = function() {
    this.isStopped = !0, this.closed = !0, this.observers = null;
  }, e.prototype._trySubscribe = function(t) {
    if (this.closed)
      throw new ze();
    return n.prototype._trySubscribe.call(this, t);
  }, e.prototype._subscribe = function(t) {
    if (this.closed)
      throw new ze();
    return this.hasError ? (t.error(this.thrownError), F.EMPTY) : this.isStopped ? (t.complete(), F.EMPTY) : (this.observers.push(t), new no(this, t));
  }, e.prototype.asObservable = function() {
    var t = new E();
    return t.source = this, t;
  }, e.create = function(t, r) {
    return new Zi(t, r);
  }, e;
}(E), Zi = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    var i = n.call(this) || this;
    return i.destination = t, i.source = r, i;
  }
  return e.prototype.next = function(t) {
    var r = this.destination;
    r && r.next && r.next(t);
  }, e.prototype.error = function(t) {
    var r = this.destination;
    r && r.error && this.destination.error(t);
  }, e.prototype.complete = function() {
    var t = this.destination;
    t && t.complete && this.destination.complete();
  }, e.prototype._subscribe = function(t) {
    var r = this.source;
    return r ? this.source.subscribe(t) : F.EMPTY;
  }, e;
}(Y);
function di() {
  return function(e) {
    return e.lift(new wc(e));
  };
}
var wc = /* @__PURE__ */ function() {
  function n(e) {
    this.connectable = e;
  }
  return n.prototype.call = function(e, t) {
    var r = this.connectable;
    r._refCount++;
    var i = new Sc(e, r), s = t.subscribe(i);
    return i.closed || (i.connection = r.connect()), s;
  }, n;
}(), Sc = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    var i = n.call(this, t) || this;
    return i.connectable = r, i;
  }
  return e.prototype._unsubscribe = function() {
    var t = this.connectable;
    if (!t) {
      this.connection = null;
      return;
    }
    this.connectable = null;
    var r = t._refCount;
    if (r <= 0) {
      this.connection = null;
      return;
    }
    if (t._refCount = r - 1, r > 1) {
      this.connection = null;
      return;
    }
    var i = this.connection, s = t._connection;
    this.connection = null, s && (!i || s === i) && s.unsubscribe();
  }, e;
}(m), io = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    var i = n.call(this) || this;
    return i.source = t, i.subjectFactory = r, i._refCount = 0, i._isComplete = !1, i;
  }
  return e.prototype._subscribe = function(t) {
    return this.getSubject().subscribe(t);
  }, e.prototype.getSubject = function() {
    var t = this._subject;
    return (!t || t.isStopped) && (this._subject = this.subjectFactory()), this._subject;
  }, e.prototype.connect = function() {
    var t = this._connection;
    return t || (this._isComplete = !1, t = this._connection = new F(), t.add(this.source.subscribe(new Ec(this.getSubject(), this))), t.closed && (this._connection = null, t = F.EMPTY)), t;
  }, e.prototype.refCount = function() {
    return di()(this);
  }, e;
}(E), xc = /* @__PURE__ */ function() {
  var n = io.prototype;
  return {
    operator: { value: null },
    _refCount: { value: 0, writable: !0 },
    _subject: { value: null, writable: !0 },
    _connection: { value: null, writable: !0 },
    _subscribe: { value: n._subscribe },
    _isComplete: { value: n._isComplete, writable: !0 },
    getSubject: { value: n.getSubject },
    connect: { value: n.connect },
    refCount: { value: n.refCount }
  };
}(), Ec = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    var i = n.call(this, t) || this;
    return i.connectable = r, i;
  }
  return e.prototype._error = function(t) {
    this._unsubscribe(), n.prototype._error.call(this, t);
  }, e.prototype._complete = function() {
    this.connectable._isComplete = !0, this._unsubscribe(), n.prototype._complete.call(this);
  }, e.prototype._unsubscribe = function() {
    var t = this.connectable;
    if (t) {
      this.connectable = null;
      var r = t._connection;
      t._refCount = 0, t._subject = null, t._connection = null, r && r.unsubscribe();
    }
  }, e;
}(ro);
function Cc(n, e, t, r) {
  return function(i) {
    return i.lift(new kc(n, e, t, r));
  };
}
var kc = /* @__PURE__ */ function() {
  function n(e, t, r, i) {
    this.keySelector = e, this.elementSelector = t, this.durationSelector = r, this.subjectSelector = i;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new Mc(e, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
  }, n;
}(), Mc = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i, s, o) {
    var a = n.call(this, t) || this;
    return a.keySelector = r, a.elementSelector = i, a.durationSelector = s, a.subjectSelector = o, a.groups = null, a.attemptedToUnsubscribe = !1, a.count = 0, a;
  }
  return e.prototype._next = function(t) {
    var r;
    try {
      r = this.keySelector(t);
    } catch (i) {
      this.error(i);
      return;
    }
    this._group(t, r);
  }, e.prototype._group = function(t, r) {
    var i = this.groups;
    i || (i = this.groups = /* @__PURE__ */ new Map());
    var s = i.get(r), o;
    if (this.elementSelector)
      try {
        o = this.elementSelector(t);
      } catch (l) {
        this.error(l);
      }
    else
      o = t;
    if (!s) {
      s = this.subjectSelector ? this.subjectSelector() : new Y(), i.set(r, s);
      var a = new zr(r, s, this);
      if (this.destination.next(a), this.durationSelector) {
        var c = void 0;
        try {
          c = this.durationSelector(new zr(r, s));
        } catch (l) {
          this.error(l);
          return;
        }
        this.add(c.subscribe(new Ic(r, s, this)));
      }
    }
    s.closed || s.next(o);
  }, e.prototype._error = function(t) {
    var r = this.groups;
    r && (r.forEach(function(i, s) {
      i.error(t);
    }), r.clear()), this.destination.error(t);
  }, e.prototype._complete = function() {
    var t = this.groups;
    t && (t.forEach(function(r, i) {
      r.complete();
    }), t.clear()), this.destination.complete();
  }, e.prototype.removeGroup = function(t) {
    this.groups.delete(t);
  }, e.prototype.unsubscribe = function() {
    this.closed || (this.attemptedToUnsubscribe = !0, this.count === 0 && n.prototype.unsubscribe.call(this));
  }, e;
}(m), Ic = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i) {
    var s = n.call(this, r) || this;
    return s.key = t, s.group = r, s.parent = i, s;
  }
  return e.prototype._next = function(t) {
    this.complete();
  }, e.prototype._unsubscribe = function() {
    var t = this, r = t.parent, i = t.key;
    this.key = this.parent = null, r && r.removeGroup(i);
  }, e;
}(m), zr = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i) {
    var s = n.call(this) || this;
    return s.key = t, s.groupSubject = r, s.refCountSubscription = i, s;
  }
  return e.prototype._subscribe = function(t) {
    var r = new F(), i = this, s = i.refCountSubscription, o = i.groupSubject;
    return s && !s.closed && r.add(new Ac(s)), r.add(o.subscribe(t)), r;
  }, e;
}(E), Ac = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t) {
    var r = n.call(this) || this;
    return r.parent = t, t.count++, r;
  }
  return e.prototype.unsubscribe = function() {
    var t = this.parent;
    !t.closed && !this.closed && (n.prototype.unsubscribe.call(this), t.count -= 1, t.count === 0 && t.attemptedToUnsubscribe && t.unsubscribe());
  }, e;
}(F), so = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t) {
    var r = n.call(this) || this;
    return r._value = t, r;
  }
  return Object.defineProperty(e.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: !0,
    configurable: !0
  }), e.prototype._subscribe = function(t) {
    var r = n.prototype._subscribe.call(this, t);
    return r && !r.closed && t.next(this._value), r;
  }, e.prototype.getValue = function() {
    if (this.hasError)
      throw this.thrownError;
    if (this.closed)
      throw new ze();
    return this._value;
  }, e.prototype.next = function(t) {
    n.prototype.next.call(this, this._value = t);
  }, e;
}(Y), Nc = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    return n.call(this) || this;
  }
  return e.prototype.schedule = function(t, r) {
    return this;
  }, e;
}(F), an = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    var i = n.call(this, t, r) || this;
    return i.scheduler = t, i.work = r, i.pending = !1, i;
  }
  return e.prototype.schedule = function(t, r) {
    if (r === void 0 && (r = 0), this.closed)
      return this;
    this.state = t;
    var i = this.id, s = this.scheduler;
    return i != null && (this.id = this.recycleAsyncId(s, i, r)), this.pending = !0, this.delay = r, this.id = this.id || this.requestAsyncId(s, this.id, r), this;
  }, e.prototype.requestAsyncId = function(t, r, i) {
    return i === void 0 && (i = 0), setInterval(t.flush.bind(t, this), i);
  }, e.prototype.recycleAsyncId = function(t, r, i) {
    if (i === void 0 && (i = 0), i !== null && this.delay === i && this.pending === !1)
      return r;
    clearInterval(r);
  }, e.prototype.execute = function(t, r) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = !1;
    var i = this._execute(t, r);
    if (i)
      return i;
    this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, e.prototype._execute = function(t, r) {
    var i = !1, s = void 0;
    try {
      this.work(t);
    } catch (o) {
      i = !0, s = !!o && o || new Error(o);
    }
    if (i)
      return this.unsubscribe(), s;
  }, e.prototype._unsubscribe = function() {
    var t = this.id, r = this.scheduler, i = r.actions, s = i.indexOf(this);
    this.work = null, this.state = null, this.pending = !1, this.scheduler = null, s !== -1 && i.splice(s, 1), t != null && (this.id = this.recycleAsyncId(r, t, null)), this.delay = null;
  }, e;
}(Nc), Tc = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    var i = n.call(this, t, r) || this;
    return i.scheduler = t, i.work = r, i;
  }
  return e.prototype.schedule = function(t, r) {
    return r === void 0 && (r = 0), r > 0 ? n.prototype.schedule.call(this, t, r) : (this.delay = r, this.state = t, this.scheduler.flush(this), this);
  }, e.prototype.execute = function(t, r) {
    return r > 0 || this.closed ? n.prototype.execute.call(this, t, r) : this._execute(t, r);
  }, e.prototype.requestAsyncId = function(t, r, i) {
    return i === void 0 && (i = 0), i !== null && i > 0 || i === null && this.delay > 0 ? n.prototype.requestAsyncId.call(this, t, r, i) : t.flush(this);
  }, e;
}(an), qr = /* @__PURE__ */ function() {
  function n(e, t) {
    t === void 0 && (t = n.now), this.SchedulerAction = e, this.now = t;
  }
  return n.prototype.schedule = function(e, t, r) {
    return t === void 0 && (t = 0), new this.SchedulerAction(this, e).schedule(r, t);
  }, n.now = function() {
    return Date.now();
  }, n;
}(), cn = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    r === void 0 && (r = qr.now);
    var i = n.call(this, t, function() {
      return e.delegate && e.delegate !== i ? e.delegate.now() : r();
    }) || this;
    return i.actions = [], i.active = !1, i.scheduled = void 0, i;
  }
  return e.prototype.schedule = function(t, r, i) {
    return r === void 0 && (r = 0), e.delegate && e.delegate !== this ? e.delegate.schedule(t, r, i) : n.prototype.schedule.call(this, t, r, i);
  }, e.prototype.flush = function(t) {
    var r = this.actions;
    if (this.active) {
      r.push(t);
      return;
    }
    var i;
    this.active = !0;
    do
      if (i = t.execute(t.state, t.delay))
        break;
    while (t = r.shift());
    if (this.active = !1, i) {
      for (; t = r.shift(); )
        t.unsubscribe();
      throw i;
    }
  }, e;
}(qr), Oc = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e() {
    return n !== null && n.apply(this, arguments) || this;
  }
  return e;
}(cn), oo = /* @__PURE__ */ new Oc(Tc), ao = oo, St = /* @__PURE__ */ new E(function(n) {
  return n.complete();
});
function Dt(n) {
  return n ? Rc(n) : St;
}
function Rc(n) {
  return new E(function(e) {
    return n.schedule(function() {
      return e.complete();
    });
  });
}
function he(n) {
  return n && typeof n.schedule == "function";
}
var co = function(n) {
  return function(e) {
    for (var t = 0, r = n.length; t < r && !e.closed; t++)
      e.next(n[t]);
    e.complete();
  };
};
function fi(n, e) {
  return new E(function(t) {
    var r = new F(), i = 0;
    return r.add(e.schedule(function() {
      if (i === n.length) {
        t.complete();
        return;
      }
      t.next(n[i++]), t.closed || r.add(this.schedule());
    })), r;
  });
}
function un(n, e) {
  return e ? fi(n, e) : new E(co(n));
}
function zn() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n[e] = arguments[e];
  var t = n[n.length - 1];
  return he(t) ? (n.pop(), fi(n, t)) : un(n);
}
function pi(n, e) {
  return e ? new E(function(t) {
    return e.schedule(Dc, 0, { error: n, subscriber: t });
  }) : new E(function(t) {
    return t.error(n);
  });
}
function Dc(n) {
  var e = n.error, t = n.subscriber;
  t.error(e);
}
var Qr;
Qr || (Qr = {});
var Fe = /* @__PURE__ */ function() {
  function n(e, t, r) {
    this.kind = e, this.value = t, this.error = r, this.hasValue = e === "N";
  }
  return n.prototype.observe = function(e) {
    switch (this.kind) {
      case "N":
        return e.next && e.next(this.value);
      case "E":
        return e.error && e.error(this.error);
      case "C":
        return e.complete && e.complete();
    }
  }, n.prototype.do = function(e, t, r) {
    var i = this.kind;
    switch (i) {
      case "N":
        return e && e(this.value);
      case "E":
        return t && t(this.error);
      case "C":
        return r && r();
    }
  }, n.prototype.accept = function(e, t, r) {
    return e && typeof e.next == "function" ? this.observe(e) : this.do(e, t, r);
  }, n.prototype.toObservable = function() {
    var e = this.kind;
    switch (e) {
      case "N":
        return zn(this.value);
      case "E":
        return pi(this.error);
      case "C":
        return Dt();
    }
    throw new Error("unexpected notification kind value");
  }, n.createNext = function(e) {
    return typeof e < "u" ? new n("N", e) : n.undefinedValueNotification;
  }, n.createError = function(e) {
    return new n("E", void 0, e);
  }, n.createComplete = function() {
    return n.completeNotification;
  }, n.completeNotification = new n("C"), n.undefinedValueNotification = new n("N", void 0), n;
}();
function Lc(n, e) {
  return e === void 0 && (e = 0), function(r) {
    return r.lift(new jc(n, e));
  };
}
var jc = /* @__PURE__ */ function() {
  function n(e, t) {
    t === void 0 && (t = 0), this.scheduler = e, this.delay = t;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new uo(e, this.scheduler, this.delay));
  }, n;
}(), uo = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i) {
    i === void 0 && (i = 0);
    var s = n.call(this, t) || this;
    return s.scheduler = r, s.delay = i, s;
  }
  return e.dispatch = function(t) {
    var r = t.notification, i = t.destination;
    r.observe(i), this.unsubscribe();
  }, e.prototype.scheduleMessage = function(t) {
    var r = this.destination;
    r.add(this.scheduler.schedule(e.dispatch, this.delay, new Pc(t, this.destination)));
  }, e.prototype._next = function(t) {
    this.scheduleMessage(Fe.createNext(t));
  }, e.prototype._error = function(t) {
    this.scheduleMessage(Fe.createError(t)), this.unsubscribe();
  }, e.prototype._complete = function() {
    this.scheduleMessage(Fe.createComplete()), this.unsubscribe();
  }, e;
}(m), Pc = /* @__PURE__ */ function() {
  function n(e, t) {
    this.notification = e, this.destination = t;
  }
  return n;
}(), bi = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i) {
    t === void 0 && (t = Number.POSITIVE_INFINITY), r === void 0 && (r = Number.POSITIVE_INFINITY);
    var s = n.call(this) || this;
    return s.scheduler = i, s._events = [], s._infiniteTimeWindow = !1, s._bufferSize = t < 1 ? 1 : t, s._windowTime = r < 1 ? 1 : r, r === Number.POSITIVE_INFINITY ? (s._infiniteTimeWindow = !0, s.next = s.nextInfiniteTimeWindow) : s.next = s.nextTimeWindow, s;
  }
  return e.prototype.nextInfiniteTimeWindow = function(t) {
    if (!this.isStopped) {
      var r = this._events;
      r.push(t), r.length > this._bufferSize && r.shift();
    }
    n.prototype.next.call(this, t);
  }, e.prototype.nextTimeWindow = function(t) {
    this.isStopped || (this._events.push(new Fc(this._getNow(), t)), this._trimBufferThenGetEvents()), n.prototype.next.call(this, t);
  }, e.prototype._subscribe = function(t) {
    var r = this._infiniteTimeWindow, i = r ? this._events : this._trimBufferThenGetEvents(), s = this.scheduler, o = i.length, a;
    if (this.closed)
      throw new ze();
    if (this.isStopped || this.hasError ? a = F.EMPTY : (this.observers.push(t), a = new no(this, t)), s && t.add(t = new uo(t, s)), r)
      for (var c = 0; c < o && !t.closed; c++)
        t.next(i[c]);
    else
      for (var c = 0; c < o && !t.closed; c++)
        t.next(i[c].value);
    return this.hasError ? t.error(this.thrownError) : this.isStopped && t.complete(), a;
  }, e.prototype._getNow = function() {
    return (this.scheduler || ao).now();
  }, e.prototype._trimBufferThenGetEvents = function() {
    for (var t = this._getNow(), r = this._bufferSize, i = this._windowTime, s = this._events, o = s.length, a = 0; a < o && !(t - s[a].time < i); )
      a++;
    return o > r && (a = Math.max(a, o - r)), a > 0 && s.splice(0, a), s;
  }, e;
}(Y), Fc = /* @__PURE__ */ function() {
  function n(e, t) {
    this.time = e, this.value = t;
  }
  return n;
}(), Lt = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e() {
    var t = n !== null && n.apply(this, arguments) || this;
    return t.value = null, t.hasNext = !1, t.hasCompleted = !1, t;
  }
  return e.prototype._subscribe = function(t) {
    return this.hasError ? (t.error(this.thrownError), F.EMPTY) : this.hasCompleted && this.hasNext ? (t.next(this.value), t.complete(), F.EMPTY) : n.prototype._subscribe.call(this, t);
  }, e.prototype.next = function(t) {
    this.hasCompleted || (this.value = t, this.hasNext = !0);
  }, e.prototype.error = function(t) {
    this.hasCompleted || n.prototype.error.call(this, t);
  }, e.prototype.complete = function() {
    this.hasCompleted = !0, this.hasNext && n.prototype.next.call(this, this.value), n.prototype.complete.call(this);
  }, e;
}(Y), Wc = 1, Bc = /* @__PURE__ */ function() {
  return /* @__PURE__ */ Promise.resolve();
}(), Zr = {};
function Gi(n) {
  return n in Zr ? (delete Zr[n], !0) : !1;
}
var Yi = {
  setImmediate: function(n) {
    var e = Wc++;
    return Zr[e] = !0, Bc.then(function() {
      return Gi(e) && n();
    }), e;
  },
  clearImmediate: function(n) {
    Gi(n);
  }
}, Vc = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    var i = n.call(this, t, r) || this;
    return i.scheduler = t, i.work = r, i;
  }
  return e.prototype.requestAsyncId = function(t, r, i) {
    return i === void 0 && (i = 0), i !== null && i > 0 ? n.prototype.requestAsyncId.call(this, t, r, i) : (t.actions.push(this), t.scheduled || (t.scheduled = Yi.setImmediate(t.flush.bind(t, null))));
  }, e.prototype.recycleAsyncId = function(t, r, i) {
    if (i === void 0 && (i = 0), i !== null && i > 0 || i === null && this.delay > 0)
      return n.prototype.recycleAsyncId.call(this, t, r, i);
    t.actions.length === 0 && (Yi.clearImmediate(r), t.scheduled = void 0);
  }, e;
}(an), $c = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e() {
    return n !== null && n.apply(this, arguments) || this;
  }
  return e.prototype.flush = function(t) {
    this.active = !0, this.scheduled = void 0;
    var r = this.actions, i, s = -1, o = r.length;
    t = t || r.shift();
    do
      if (i = t.execute(t.state, t.delay))
        break;
    while (++s < o && (t = r.shift()));
    if (this.active = !1, i) {
      for (; ++s < o && (t = r.shift()); )
        t.unsubscribe();
      throw i;
    }
  }, e;
}(cn), lo = /* @__PURE__ */ new $c(Vc), Mn = lo, ho = /* @__PURE__ */ new cn(an), ae = ho, Hc = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    var i = n.call(this, t, r) || this;
    return i.scheduler = t, i.work = r, i;
  }
  return e.prototype.requestAsyncId = function(t, r, i) {
    return i === void 0 && (i = 0), i !== null && i > 0 ? n.prototype.requestAsyncId.call(this, t, r, i) : (t.actions.push(this), t.scheduled || (t.scheduled = requestAnimationFrame(function() {
      return t.flush(null);
    })));
  }, e.prototype.recycleAsyncId = function(t, r, i) {
    if (i === void 0 && (i = 0), i !== null && i > 0 || i === null && this.delay > 0)
      return n.prototype.recycleAsyncId.call(this, t, r, i);
    t.actions.length === 0 && (cancelAnimationFrame(r), t.scheduled = void 0);
  }, e;
}(an), Uc = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e() {
    return n !== null && n.apply(this, arguments) || this;
  }
  return e.prototype.flush = function(t) {
    this.active = !0, this.scheduled = void 0;
    var r = this.actions, i, s = -1, o = r.length;
    t = t || r.shift();
    do
      if (i = t.execute(t.state, t.delay))
        break;
    while (++s < o && (t = r.shift()));
    if (this.active = !1, i) {
      for (; ++s < o && (t = r.shift()); )
        t.unsubscribe();
      throw i;
    }
  }, e;
}(cn), fo = /* @__PURE__ */ new Uc(Hc), zc = fo, qc = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    t === void 0 && (t = po), r === void 0 && (r = Number.POSITIVE_INFINITY);
    var i = n.call(this, t, function() {
      return i.frame;
    }) || this;
    return i.maxFrames = r, i.frame = 0, i.index = -1, i;
  }
  return e.prototype.flush = function() {
    for (var t = this, r = t.actions, i = t.maxFrames, s, o; (o = r[0]) && o.delay <= i && (r.shift(), this.frame = o.delay, !(s = o.execute(o.state, o.delay))); )
      ;
    if (s) {
      for (; o = r.shift(); )
        o.unsubscribe();
      throw s;
    }
  }, e.frameTimeFactor = 10, e;
}(cn), po = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i) {
    i === void 0 && (i = t.index += 1);
    var s = n.call(this, t, r) || this;
    return s.scheduler = t, s.work = r, s.index = i, s.active = !0, s.index = t.index = i, s;
  }
  return e.prototype.schedule = function(t, r) {
    if (r === void 0 && (r = 0), !this.id)
      return n.prototype.schedule.call(this, t, r);
    this.active = !1;
    var i = new e(this.scheduler, this.work);
    return this.add(i), i.schedule(t, r);
  }, e.prototype.requestAsyncId = function(t, r, i) {
    i === void 0 && (i = 0), this.delay = t.frame + i;
    var s = t.actions;
    return s.push(this), s.sort(e.sortActions), !0;
  }, e.prototype.recycleAsyncId = function(t, r, i) {
  }, e.prototype._execute = function(t, r) {
    if (this.active === !0)
      return n.prototype._execute.call(this, t, r);
  }, e.sortActions = function(t, r) {
    return t.delay === r.delay ? t.index === r.index ? 0 : t.index > r.index ? 1 : -1 : t.delay > r.delay ? 1 : -1;
  }, e;
}(an);
function Ae() {
}
function Qc(n) {
  return !!n && (n instanceof E || typeof n.lift == "function" && typeof n.subscribe == "function");
}
var Zc = /* @__PURE__ */ function() {
  function n() {
    return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this;
  }
  return n.prototype = /* @__PURE__ */ Object.create(Error.prototype), n;
}(), xt = Zc, Gc = /* @__PURE__ */ function() {
  function n() {
    return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this;
  }
  return n.prototype = /* @__PURE__ */ Object.create(Error.prototype), n;
}(), ln = Gc, Yc = /* @__PURE__ */ function() {
  function n() {
    return Error.call(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this;
  }
  return n.prototype = /* @__PURE__ */ Object.create(Error.prototype), n;
}(), bo = Yc;
function _e(n, e) {
  return function(r) {
    if (typeof n != "function")
      throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
    return r.lift(new Kc(n, e));
  };
}
var Kc = /* @__PURE__ */ function() {
  function n(e, t) {
    this.project = e, this.thisArg = t;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new Jc(e, this.project, this.thisArg));
  }, n;
}(), Jc = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i) {
    var s = n.call(this, t) || this;
    return s.project = r, s.count = 0, s.thisArg = i || s, s;
  }
  return e.prototype._next = function(t) {
    var r;
    try {
      r = this.project.call(this.thisArg, t, this.count++);
    } catch (i) {
      this.destination.error(i);
      return;
    }
    this.destination.next(r);
  }, e;
}(m);
function go(n, e, t) {
  if (e)
    if (he(e))
      t = e;
    else
      return function() {
        for (var r = [], i = 0; i < arguments.length; i++)
          r[i] = arguments[i];
        return go(n, t).apply(void 0, r).pipe(_e(function(s) {
          return oe(s) ? e.apply(void 0, s) : e(s);
        }));
      };
  return function() {
    for (var r = [], i = 0; i < arguments.length; i++)
      r[i] = arguments[i];
    var s = this, o, a = {
      context: s,
      subject: o,
      callbackFunc: n,
      scheduler: t
    };
    return new E(function(c) {
      if (t) {
        var u = {
          args: r,
          subscriber: c,
          params: a
        };
        return t.schedule(Xc, 0, u);
      } else {
        if (!o) {
          o = new Lt();
          var l = function() {
            for (var d = [], h = 0; h < arguments.length; h++)
              d[h] = arguments[h];
            o.next(d.length <= 1 ? d[0] : d), o.complete();
          };
          try {
            n.apply(s, r.concat([l]));
          } catch (d) {
            hi(o) ? o.error(d) : console.warn(d);
          }
        }
        return o.subscribe(c);
      }
    });
  };
}
function Xc(n) {
  var e = this, t = n.args, r = n.subscriber, i = n.params, s = i.callbackFunc, o = i.context, a = i.scheduler, c = i.subject;
  if (!c) {
    c = i.subject = new Lt();
    var l = function() {
      for (var u = [], d = 0; d < arguments.length; d++)
        u[d] = arguments[d];
      var h = u.length <= 1 ? u[0] : u;
      e.add(a.schedule(eu, 0, { value: h, subject: c }));
    };
    try {
      s.apply(o, t.concat([l]));
    } catch (u) {
      c.error(u);
    }
  }
  this.add(c.subscribe(r));
}
function eu(n) {
  var e = n.value, t = n.subject;
  t.next(e), t.complete();
}
function vo(n, e, t) {
  if (e)
    if (he(e))
      t = e;
    else
      return function() {
        for (var r = [], i = 0; i < arguments.length; i++)
          r[i] = arguments[i];
        return vo(n, t).apply(void 0, r).pipe(_e(function(s) {
          return oe(s) ? e.apply(void 0, s) : e(s);
        }));
      };
  return function() {
    for (var r = [], i = 0; i < arguments.length; i++)
      r[i] = arguments[i];
    var s = {
      subject: void 0,
      args: r,
      callbackFunc: n,
      scheduler: t,
      context: this
    };
    return new E(function(o) {
      var a = s.context, c = s.subject;
      if (t)
        return t.schedule(tu, 0, { params: s, subscriber: o, context: a });
      if (!c) {
        c = s.subject = new Lt();
        var l = function() {
          for (var u = [], d = 0; d < arguments.length; d++)
            u[d] = arguments[d];
          var h = u.shift();
          if (h) {
            c.error(h);
            return;
          }
          c.next(u.length <= 1 ? u[0] : u), c.complete();
        };
        try {
          n.apply(a, r.concat([l]));
        } catch (u) {
          hi(c) ? c.error(u) : console.warn(u);
        }
      }
      return c.subscribe(o);
    });
  };
}
function tu(n) {
  var e = this, t = n.params, r = n.subscriber, i = n.context, s = t.callbackFunc, o = t.args, a = t.scheduler, c = t.subject;
  if (!c) {
    c = t.subject = new Lt();
    var l = function() {
      for (var u = [], d = 0; d < arguments.length; d++)
        u[d] = arguments[d];
      var h = u.shift();
      if (h)
        e.add(a.schedule(Ki, 0, { err: h, subject: c }));
      else {
        var f = u.length <= 1 ? u[0] : u;
        e.add(a.schedule(nu, 0, { value: f, subject: c }));
      }
    };
    try {
      s.apply(i, o.concat([l]));
    } catch (u) {
      this.add(a.schedule(Ki, 0, { err: u, subject: c }));
    }
  }
  this.add(c.subscribe(r));
}
function nu(n) {
  var e = n.value, t = n.subject;
  t.next(e), t.complete();
}
function Ki(n) {
  var e = n.err, t = n.subject;
  t.error(e);
}
var dt = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e() {
    return n !== null && n.apply(this, arguments) || this;
  }
  return e.prototype.notifyNext = function(t, r, i, s, o) {
    this.destination.next(r);
  }, e.prototype.notifyError = function(t, r) {
    this.destination.error(t);
  }, e.prototype.notifyComplete = function(t) {
    this.destination.complete();
  }, e;
}(m), ru = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i) {
    var s = n.call(this) || this;
    return s.parent = t, s.outerValue = r, s.outerIndex = i, s.index = 0, s;
  }
  return e.prototype._next = function(t) {
    this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this);
  }, e.prototype._error = function(t) {
    this.parent.notifyError(t, this), this.unsubscribe();
  }, e.prototype._complete = function() {
    this.parent.notifyComplete(this), this.unsubscribe();
  }, e;
}(m), iu = function(n) {
  return function(e) {
    return n.then(function(t) {
      e.closed || (e.next(t), e.complete());
    }, function(t) {
      return e.error(t);
    }).then(null, gt), e;
  };
};
function su() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Je = /* @__PURE__ */ su(), ou = function(n) {
  return function(e) {
    var t = n[Je]();
    do {
      var r = void 0;
      try {
        r = t.next();
      } catch (i) {
        return e.error(i), e;
      }
      if (r.done) {
        e.complete();
        break;
      }
      if (e.next(r.value), e.closed)
        break;
    } while (!0);
    return typeof t.return == "function" && e.add(function() {
      t.return && t.return();
    }), e;
  };
}, au = function(n) {
  return function(e) {
    var t = n[Rt]();
    if (typeof t.subscribe != "function")
      throw new TypeError("Provided object does not correctly implement Symbol.observable");
    return t.subscribe(e);
  };
}, yo = function(n) {
  return n && typeof n.length == "number" && typeof n != "function";
};
function mo(n) {
  return !!n && typeof n.subscribe != "function" && typeof n.then == "function";
}
var en = function(n) {
  if (!!n && typeof n[Rt] == "function")
    return au(n);
  if (yo(n))
    return co(n);
  if (mo(n))
    return iu(n);
  if (!!n && typeof n[Je] == "function")
    return ou(n);
  var e = li(n) ? "an invalid object" : "'" + n + "'", t = "You provided " + e + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.";
  throw new TypeError(t);
};
function We(n, e, t, r, i) {
  if (i === void 0 && (i = new ru(n, t, r)), !i.closed)
    return e instanceof E ? e.subscribe(i) : en(e)(i);
}
var Ji = {};
function cu() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n[e] = arguments[e];
  var t = void 0, r = void 0;
  return he(n[n.length - 1]) && (r = n.pop()), typeof n[n.length - 1] == "function" && (t = n.pop()), n.length === 1 && oe(n[0]) && (n = n[0]), un(n, r).lift(new gi(t));
}
var gi = /* @__PURE__ */ function() {
  function n(e) {
    this.resultSelector = e;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new uu(e, this.resultSelector));
  }, n;
}(), uu = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    var i = n.call(this, t) || this;
    return i.resultSelector = r, i.active = 0, i.values = [], i.observables = [], i;
  }
  return e.prototype._next = function(t) {
    this.values.push(Ji), this.observables.push(t);
  }, e.prototype._complete = function() {
    var t = this.observables, r = t.length;
    if (r === 0)
      this.destination.complete();
    else {
      this.active = r, this.toRespond = r;
      for (var i = 0; i < r; i++) {
        var s = t[i];
        this.add(We(this, s, void 0, i));
      }
    }
  }, e.prototype.notifyComplete = function(t) {
    (this.active -= 1) === 0 && this.destination.complete();
  }, e.prototype.notifyNext = function(t, r, i) {
    var s = this.values, o = s[i], a = this.toRespond ? o === Ji ? --this.toRespond : this.toRespond : 0;
    s[i] = r, a === 0 && (this.resultSelector ? this._tryResultSelector(s) : this.destination.next(s.slice()));
  }, e.prototype._tryResultSelector = function(t) {
    var r;
    try {
      r = this.resultSelector.apply(this, t);
    } catch (i) {
      this.destination.error(i);
      return;
    }
    this.destination.next(r);
  }, e;
}(dt);
function lu(n, e) {
  return new E(function(t) {
    var r = new F();
    return r.add(e.schedule(function() {
      var i = n[Rt]();
      r.add(i.subscribe({
        next: function(s) {
          r.add(e.schedule(function() {
            return t.next(s);
          }));
        },
        error: function(s) {
          r.add(e.schedule(function() {
            return t.error(s);
          }));
        },
        complete: function() {
          r.add(e.schedule(function() {
            return t.complete();
          }));
        }
      }));
    })), r;
  });
}
function hu(n, e) {
  return new E(function(t) {
    var r = new F();
    return r.add(e.schedule(function() {
      return n.then(function(i) {
        r.add(e.schedule(function() {
          t.next(i), r.add(e.schedule(function() {
            return t.complete();
          }));
        }));
      }, function(i) {
        r.add(e.schedule(function() {
          return t.error(i);
        }));
      });
    })), r;
  });
}
function du(n, e) {
  if (!n)
    throw new Error("Iterable cannot be null");
  return new E(function(t) {
    var r = new F(), i;
    return r.add(function() {
      i && typeof i.return == "function" && i.return();
    }), r.add(e.schedule(function() {
      i = n[Je](), r.add(e.schedule(function() {
        if (!t.closed) {
          var s, o;
          try {
            var a = i.next();
            s = a.value, o = a.done;
          } catch (c) {
            t.error(c);
            return;
          }
          o ? t.complete() : (t.next(s), this.schedule());
        }
      }));
    })), r;
  });
}
function fu(n) {
  return n && typeof n[Rt] == "function";
}
function pu(n) {
  return n && typeof n[Je] == "function";
}
function _o(n, e) {
  if (n != null) {
    if (fu(n))
      return lu(n, e);
    if (mo(n))
      return hu(n, e);
    if (yo(n))
      return fi(n, e);
    if (pu(n) || typeof n == "string")
      return du(n, e);
  }
  throw new TypeError((n !== null && typeof n || n) + " is not observable");
}
function Be(n, e) {
  return e ? _o(n, e) : n instanceof E ? n : new E(en(n));
}
var B = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t) {
    var r = n.call(this) || this;
    return r.parent = t, r;
  }
  return e.prototype._next = function(t) {
    this.parent.notifyNext(t);
  }, e.prototype._error = function(t) {
    this.parent.notifyError(t), this.unsubscribe();
  }, e.prototype._complete = function() {
    this.parent.notifyComplete(), this.unsubscribe();
  }, e;
}(m), V = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e() {
    return n !== null && n.apply(this, arguments) || this;
  }
  return e.prototype.notifyNext = function(t) {
    this.destination.next(t);
  }, e.prototype.notifyError = function(t) {
    this.destination.error(t);
  }, e.prototype.notifyComplete = function() {
    this.destination.complete();
  }, e;
}(m);
function $(n, e) {
  if (!e.closed) {
    if (n instanceof E)
      return n.subscribe(e);
    var t;
    try {
      t = en(n)(e);
    } catch (r) {
      e.error(r);
    }
    return t;
  }
}
function ut(n, e, t) {
  return t === void 0 && (t = Number.POSITIVE_INFINITY), typeof e == "function" ? function(r) {
    return r.pipe(ut(function(i, s) {
      return Be(n(i, s)).pipe(_e(function(o, a) {
        return e(i, o, s, a);
      }));
    }, t));
  } : (typeof e == "number" && (t = e), function(r) {
    return r.lift(new bu(n, t));
  });
}
var bu = /* @__PURE__ */ function() {
  function n(e, t) {
    t === void 0 && (t = Number.POSITIVE_INFINITY), this.project = e, this.concurrent = t;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new gu(e, this.project, this.concurrent));
  }, n;
}(), gu = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i) {
    i === void 0 && (i = Number.POSITIVE_INFINITY);
    var s = n.call(this, t) || this;
    return s.project = r, s.concurrent = i, s.hasCompleted = !1, s.buffer = [], s.active = 0, s.index = 0, s;
  }
  return e.prototype._next = function(t) {
    this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t);
  }, e.prototype._tryNext = function(t) {
    var r, i = this.index++;
    try {
      r = this.project(t, i);
    } catch (s) {
      this.destination.error(s);
      return;
    }
    this.active++, this._innerSub(r);
  }, e.prototype._innerSub = function(t) {
    var r = new B(this), i = this.destination;
    i.add(r);
    var s = $(t, r);
    s !== r && i.add(s);
  }, e.prototype._complete = function() {
    this.hasCompleted = !0, this.active === 0 && this.buffer.length === 0 && this.destination.complete(), this.unsubscribe();
  }, e.prototype.notifyNext = function(t) {
    this.destination.next(t);
  }, e.prototype.notifyComplete = function() {
    var t = this.buffer;
    this.active--, t.length > 0 ? this._next(t.shift()) : this.active === 0 && this.hasCompleted && this.destination.complete();
  }, e;
}(V), vu = ut;
function vi(n) {
  return n === void 0 && (n = Number.POSITIVE_INFINITY), ut(Ke, n);
}
function wo() {
  return vi(1);
}
function tn() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n[e] = arguments[e];
  return wo()(zn.apply(void 0, n));
}
function yi(n) {
  return new E(function(e) {
    var t;
    try {
      t = n();
    } catch (i) {
      e.error(i);
      return;
    }
    var r = t ? Be(t) : Dt();
    return r.subscribe(e);
  });
}
function yu() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n[e] = arguments[e];
  if (n.length === 1) {
    var t = n[0];
    if (oe(t))
      return yn(t, null);
    if (li(t) && Object.getPrototypeOf(t) === Object.prototype) {
      var r = Object.keys(t);
      return yn(r.map(function(s) {
        return t[s];
      }), r);
    }
  }
  if (typeof n[n.length - 1] == "function") {
    var i = n.pop();
    return n = n.length === 1 && oe(n[0]) ? n[0] : n, yn(n, null).pipe(_e(function(s) {
      return i.apply(void 0, s);
    }));
  }
  return yn(n, null);
}
function yn(n, e) {
  return new E(function(t) {
    var r = n.length;
    if (r === 0) {
      t.complete();
      return;
    }
    for (var i = new Array(r), s = 0, o = 0, a = function(l) {
      var u = Be(n[l]), d = !1;
      t.add(u.subscribe({
        next: function(h) {
          d || (d = !0, o++), i[l] = h;
        },
        error: function(h) {
          return t.error(h);
        },
        complete: function() {
          s++, (s === r || !d) && (o === r && t.next(e ? e.reduce(function(h, f, b) {
            return h[f] = i[b], h;
          }, {}) : i), t.complete());
        }
      }));
    }, c = 0; c < r; c++)
      a(c);
  });
}
function So(n, e, t, r) {
  return wt(t) && (r = t, t = void 0), r ? So(n, e, t).pipe(_e(function(i) {
    return oe(i) ? r.apply(void 0, i) : r(i);
  })) : new E(function(i) {
    function s(o) {
      arguments.length > 1 ? i.next(Array.prototype.slice.call(arguments)) : i.next(o);
    }
    xo(n, e, s, i, t);
  });
}
function xo(n, e, t, r, i) {
  var s;
  if (wu(n)) {
    var o = n;
    n.addEventListener(e, t, i), s = function() {
      return o.removeEventListener(e, t, i);
    };
  } else if (_u(n)) {
    var a = n;
    n.on(e, t), s = function() {
      return a.off(e, t);
    };
  } else if (mu(n)) {
    var c = n;
    n.addListener(e, t), s = function() {
      return c.removeListener(e, t);
    };
  } else if (n && n.length)
    for (var l = 0, u = n.length; l < u; l++)
      xo(n[l], e, t, r, i);
  else
    throw new TypeError("Invalid event target");
  r.add(s);
}
function mu(n) {
  return n && typeof n.addListener == "function" && typeof n.removeListener == "function";
}
function _u(n) {
  return n && typeof n.on == "function" && typeof n.off == "function";
}
function wu(n) {
  return n && typeof n.addEventListener == "function" && typeof n.removeEventListener == "function";
}
function Eo(n, e, t) {
  return t ? Eo(n, e).pipe(_e(function(r) {
    return oe(r) ? t.apply(void 0, r) : t(r);
  })) : new E(function(r) {
    var i = function() {
      for (var o = [], a = 0; a < arguments.length; a++)
        o[a] = arguments[a];
      return r.next(o.length === 1 ? o[0] : o);
    }, s;
    try {
      s = n(i);
    } catch (o) {
      r.error(o);
      return;
    }
    if (!!wt(e))
      return function() {
        return e(i, s);
      };
  });
}
function Su(n, e, t, r, i) {
  var s, o;
  if (arguments.length == 1) {
    var a = n;
    o = a.initialState, e = a.condition, t = a.iterate, s = a.resultSelector || Ke, i = a.scheduler;
  } else
    r === void 0 || he(r) ? (o = n, s = Ke, i = r) : (o = n, s = r);
  return new E(function(c) {
    var l = o;
    if (i)
      return i.schedule(xu, 0, {
        subscriber: c,
        iterate: t,
        condition: e,
        resultSelector: s,
        state: l
      });
    do {
      if (e) {
        var u = void 0;
        try {
          u = e(l);
        } catch (h) {
          c.error(h);
          return;
        }
        if (!u) {
          c.complete();
          break;
        }
      }
      var d = void 0;
      try {
        d = s(l);
      } catch (h) {
        c.error(h);
        return;
      }
      if (c.next(d), c.closed)
        break;
      try {
        l = t(l);
      } catch (h) {
        c.error(h);
        return;
      }
    } while (!0);
  });
}
function xu(n) {
  var e = n.subscriber, t = n.condition;
  if (!e.closed) {
    if (n.needIterate)
      try {
        n.state = n.iterate(n.state);
      } catch (s) {
        e.error(s);
        return;
      }
    else
      n.needIterate = !0;
    if (t) {
      var r = void 0;
      try {
        r = t(n.state);
      } catch (s) {
        e.error(s);
        return;
      }
      if (!r) {
        e.complete();
        return;
      }
      if (e.closed)
        return;
    }
    var i;
    try {
      i = n.resultSelector(n.state);
    } catch (s) {
      e.error(s);
      return;
    }
    if (!e.closed && (e.next(i), !e.closed))
      return this.schedule(n);
  }
}
function Eu(n, e, t) {
  return e === void 0 && (e = St), t === void 0 && (t = St), yi(function() {
    return n() ? e : t;
  });
}
function Et(n) {
  return !oe(n) && n - parseFloat(n) + 1 >= 0;
}
function Cu(n, e) {
  return n === void 0 && (n = 0), e === void 0 && (e = ae), (!Et(n) || n < 0) && (n = 0), (!e || typeof e.schedule != "function") && (e = ae), new E(function(t) {
    return t.add(e.schedule(ku, n, { subscriber: t, counter: 0, period: n })), t;
  });
}
function ku(n) {
  var e = n.subscriber, t = n.counter, r = n.period;
  e.next(t), this.schedule({ subscriber: e, counter: t + 1, period: r }, r);
}
function Co() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n[e] = arguments[e];
  var t = Number.POSITIVE_INFINITY, r = null, i = n[n.length - 1];
  return he(i) ? (r = n.pop(), n.length > 1 && typeof n[n.length - 1] == "number" && (t = n.pop())) : typeof i == "number" && (t = n.pop()), r === null && n.length === 1 && n[0] instanceof E ? n[0] : vi(t)(un(n, r));
}
var ko = /* @__PURE__ */ new E(Ae);
function Mu() {
  return ko;
}
function Gr() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n[e] = arguments[e];
  if (n.length === 0)
    return St;
  var t = n[0], r = n.slice(1);
  return n.length === 1 && oe(t) ? Gr.apply(void 0, t) : new E(function(i) {
    var s = function() {
      return i.add(Gr.apply(void 0, r).subscribe(i));
    };
    return Be(t).subscribe({
      next: function(o) {
        i.next(o);
      },
      error: s,
      complete: s
    });
  });
}
function Iu(n, e) {
  return e ? new E(function(t) {
    var r = Object.keys(n), i = new F();
    return i.add(e.schedule(Au, 0, { keys: r, index: 0, subscriber: t, subscription: i, obj: n })), i;
  }) : new E(function(t) {
    for (var r = Object.keys(n), i = 0; i < r.length && !t.closed; i++) {
      var s = r[i];
      n.hasOwnProperty(s) && t.next([s, n[s]]);
    }
    t.complete();
  });
}
function Au(n) {
  var e = n.keys, t = n.index, r = n.subscriber, i = n.subscription, s = n.obj;
  if (!r.closed)
    if (t < e.length) {
      var o = e[t];
      r.next([o, s[o]]), i.add(this.schedule({ keys: e, index: t + 1, subscriber: r, subscription: i, obj: s }));
    } else
      r.complete();
}
function Mo(n, e) {
  function t() {
    return !t.pred.apply(t.thisArg, arguments);
  }
  return t.pred = n, t.thisArg = e, t;
}
function Xe(n, e) {
  return function(r) {
    return r.lift(new Nu(n, e));
  };
}
var Nu = /* @__PURE__ */ function() {
  function n(e, t) {
    this.predicate = e, this.thisArg = t;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new Tu(e, this.predicate, this.thisArg));
  }, n;
}(), Tu = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i) {
    var s = n.call(this, t) || this;
    return s.predicate = r, s.thisArg = i, s.count = 0, s;
  }
  return e.prototype._next = function(t) {
    var r;
    try {
      r = this.predicate.call(this.thisArg, t, this.count++);
    } catch (i) {
      this.destination.error(i);
      return;
    }
    r && this.destination.next(t);
  }, e;
}(m);
function Ou(n, e, t) {
  return [
    Xe(e, t)(new E(en(n))),
    Xe(Mo(e, t))(new E(en(n)))
  ];
}
function Io() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n[e] = arguments[e];
  if (n.length === 1)
    if (oe(n[0]))
      n = n[0];
    else
      return n[0];
  return un(n, void 0).lift(new Ru());
}
var Ru = /* @__PURE__ */ function() {
  function n() {
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new Du(e));
  }, n;
}(), Du = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t) {
    var r = n.call(this, t) || this;
    return r.hasFirst = !1, r.observables = [], r.subscriptions = [], r;
  }
  return e.prototype._next = function(t) {
    this.observables.push(t);
  }, e.prototype._complete = function() {
    var t = this.observables, r = t.length;
    if (r === 0)
      this.destination.complete();
    else {
      for (var i = 0; i < r && !this.hasFirst; i++) {
        var s = t[i], o = We(this, s, void 0, i);
        this.subscriptions && this.subscriptions.push(o), this.add(o);
      }
      this.observables = null;
    }
  }, e.prototype.notifyNext = function(t, r, i) {
    if (!this.hasFirst) {
      this.hasFirst = !0;
      for (var s = 0; s < this.subscriptions.length; s++)
        if (s !== i) {
          var o = this.subscriptions[s];
          o.unsubscribe(), this.remove(o);
        }
      this.subscriptions = null;
    }
    this.destination.next(r);
  }, e;
}(dt);
function Lu(n, e, t) {
  return n === void 0 && (n = 0), new E(function(r) {
    e === void 0 && (e = n, n = 0);
    var i = 0, s = n;
    if (t)
      return t.schedule(ju, 0, {
        index: i,
        count: e,
        start: n,
        subscriber: r
      });
    do {
      if (i++ >= e) {
        r.complete();
        break;
      }
      if (r.next(s++), r.closed)
        break;
    } while (!0);
  });
}
function ju(n) {
  var e = n.start, t = n.index, r = n.count, i = n.subscriber;
  if (t >= r) {
    i.complete();
    return;
  }
  i.next(e), !i.closed && (n.index = t + 1, n.start = e + 1, this.schedule(n));
}
function Ao(n, e, t) {
  n === void 0 && (n = 0);
  var r = -1;
  return Et(e) ? r = Number(e) < 1 && 1 || Number(e) : he(e) && (t = e), he(t) || (t = ae), new E(function(i) {
    var s = Et(n) ? n : +n - t.now();
    return t.schedule(Pu, s, {
      index: 0,
      period: r,
      subscriber: i
    });
  });
}
function Pu(n) {
  var e = n.index, t = n.period, r = n.subscriber;
  if (r.next(e), !r.closed) {
    if (t === -1)
      return r.complete();
    n.index = e + 1, this.schedule(n, t);
  }
}
function Fu(n, e) {
  return new E(function(t) {
    var r;
    try {
      r = n();
    } catch (a) {
      t.error(a);
      return;
    }
    var i;
    try {
      i = e(r);
    } catch (a) {
      t.error(a);
      return;
    }
    var s = i ? Be(i) : St, o = s.subscribe(t);
    return function() {
      o.unsubscribe(), r && r.unsubscribe();
    };
  });
}
function No() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n[e] = arguments[e];
  var t = n[n.length - 1];
  return typeof t == "function" && n.pop(), un(n, void 0).lift(new To(t));
}
var To = /* @__PURE__ */ function() {
  function n(e) {
    this.resultSelector = e;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new Wu(e, this.resultSelector));
  }, n;
}(), Wu = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i) {
    var s = n.call(this, t) || this;
    return s.resultSelector = r, s.iterators = [], s.active = 0, s.resultSelector = typeof r == "function" ? r : void 0, s;
  }
  return e.prototype._next = function(t) {
    var r = this.iterators;
    oe(t) ? r.push(new Vu(t)) : typeof t[Je] == "function" ? r.push(new Bu(t[Je]())) : r.push(new $u(this.destination, this, t));
  }, e.prototype._complete = function() {
    var t = this.iterators, r = t.length;
    if (this.unsubscribe(), r === 0) {
      this.destination.complete();
      return;
    }
    this.active = r;
    for (var i = 0; i < r; i++) {
      var s = t[i];
      if (s.stillUnsubscribed) {
        var o = this.destination;
        o.add(s.subscribe());
      } else
        this.active--;
    }
  }, e.prototype.notifyInactive = function() {
    this.active--, this.active === 0 && this.destination.complete();
  }, e.prototype.checkIterators = function() {
    for (var t = this.iterators, r = t.length, i = this.destination, s = 0; s < r; s++) {
      var o = t[s];
      if (typeof o.hasValue == "function" && !o.hasValue())
        return;
    }
    for (var a = !1, c = [], s = 0; s < r; s++) {
      var o = t[s], l = o.next();
      if (o.hasCompleted() && (a = !0), l.done) {
        i.complete();
        return;
      }
      c.push(l.value);
    }
    this.resultSelector ? this._tryresultSelector(c) : i.next(c), a && i.complete();
  }, e.prototype._tryresultSelector = function(t) {
    var r;
    try {
      r = this.resultSelector.apply(this, t);
    } catch (i) {
      this.destination.error(i);
      return;
    }
    this.destination.next(r);
  }, e;
}(m), Bu = /* @__PURE__ */ function() {
  function n(e) {
    this.iterator = e, this.nextResult = e.next();
  }
  return n.prototype.hasValue = function() {
    return !0;
  }, n.prototype.next = function() {
    var e = this.nextResult;
    return this.nextResult = this.iterator.next(), e;
  }, n.prototype.hasCompleted = function() {
    var e = this.nextResult;
    return Boolean(e && e.done);
  }, n;
}(), Vu = /* @__PURE__ */ function() {
  function n(e) {
    this.array = e, this.index = 0, this.length = 0, this.length = e.length;
  }
  return n.prototype[Je] = function() {
    return this;
  }, n.prototype.next = function(e) {
    var t = this.index++, r = this.array;
    return t < this.length ? { value: r[t], done: !1 } : { value: null, done: !0 };
  }, n.prototype.hasValue = function() {
    return this.array.length > this.index;
  }, n.prototype.hasCompleted = function() {
    return this.array.length === this.index;
  }, n;
}(), $u = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i) {
    var s = n.call(this, t) || this;
    return s.parent = r, s.observable = i, s.stillUnsubscribed = !0, s.buffer = [], s.isComplete = !1, s;
  }
  return e.prototype[Je] = function() {
    return this;
  }, e.prototype.next = function() {
    var t = this.buffer;
    return t.length === 0 && this.isComplete ? { value: null, done: !0 } : { value: t.shift(), done: !1 };
  }, e.prototype.hasValue = function() {
    return this.buffer.length > 0;
  }, e.prototype.hasCompleted = function() {
    return this.buffer.length === 0 && this.isComplete;
  }, e.prototype.notifyComplete = function() {
    this.buffer.length > 0 ? (this.isComplete = !0, this.parent.notifyInactive()) : this.destination.complete();
  }, e.prototype.notifyNext = function(t) {
    this.buffer.push(t), this.parent.checkIterators();
  }, e.prototype.subscribe = function() {
    return $(this.observable, new B(this));
  }, e;
}(V);
const Hu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Observable: E,
  ConnectableObservable: io,
  GroupedObservable: zr,
  observable: Rt,
  Subject: Y,
  BehaviorSubject: so,
  ReplaySubject: bi,
  AsyncSubject: Lt,
  asap: Mn,
  asapScheduler: lo,
  async: ae,
  asyncScheduler: ho,
  queue: ao,
  queueScheduler: oo,
  animationFrame: zc,
  animationFrameScheduler: fo,
  VirtualTimeScheduler: qc,
  VirtualAction: po,
  Scheduler: qr,
  Subscription: F,
  Subscriber: m,
  Notification: Fe,
  get NotificationKind() {
    return Qr;
  },
  pipe: Ur,
  noop: Ae,
  identity: Ke,
  isObservable: Qc,
  ArgumentOutOfRangeError: xt,
  EmptyError: ln,
  ObjectUnsubscribedError: ze,
  UnsubscriptionError: zt,
  TimeoutError: bo,
  bindCallback: go,
  bindNodeCallback: vo,
  combineLatest: cu,
  concat: tn,
  defer: yi,
  empty: Dt,
  forkJoin: yu,
  from: Be,
  fromEvent: So,
  fromEventPattern: Eo,
  generate: Su,
  iif: Eu,
  interval: Cu,
  merge: Co,
  never: Mu,
  of: zn,
  onErrorResumeNext: Gr,
  pairs: Iu,
  partition: Ou,
  race: Io,
  range: Lu,
  throwError: pi,
  timer: Ao,
  using: Fu,
  zip: No,
  scheduled: _o,
  EMPTY: St,
  NEVER: ko,
  config: ge
}, Symbol.toStringTag, { value: "Module" })), jt = /* @__PURE__ */ on(Hu);
function Oo(n) {
  return function(t) {
    return t.lift(new Uu(n));
  };
}
var Uu = /* @__PURE__ */ function() {
  function n(e) {
    this.durationSelector = e;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new zu(e, this.durationSelector));
  }, n;
}(), zu = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    var i = n.call(this, t) || this;
    return i.durationSelector = r, i.hasValue = !1, i;
  }
  return e.prototype._next = function(t) {
    if (this.value = t, this.hasValue = !0, !this.throttled) {
      var r = void 0;
      try {
        var i = this.durationSelector;
        r = i(t);
      } catch (o) {
        return this.destination.error(o);
      }
      var s = $(r, new B(this));
      !s || s.closed ? this.clearThrottle() : this.add(this.throttled = s);
    }
  }, e.prototype.clearThrottle = function() {
    var t = this, r = t.value, i = t.hasValue, s = t.throttled;
    s && (this.remove(s), this.throttled = void 0, s.unsubscribe()), i && (this.value = void 0, this.hasValue = !1, this.destination.next(r));
  }, e.prototype.notifyNext = function() {
    this.clearThrottle();
  }, e.prototype.notifyComplete = function() {
    this.clearThrottle();
  }, e;
}(V);
function qu(n, e) {
  return e === void 0 && (e = ae), Oo(function() {
    return Ao(n, e);
  });
}
function Qu(n) {
  return function(t) {
    return t.lift(new Zu(n));
  };
}
var Zu = /* @__PURE__ */ function() {
  function n(e) {
    this.closingNotifier = e;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new Gu(e, this.closingNotifier));
  }, n;
}(), Gu = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    var i = n.call(this, t) || this;
    return i.buffer = [], i.add($(r, new B(i))), i;
  }
  return e.prototype._next = function(t) {
    this.buffer.push(t);
  }, e.prototype.notifyNext = function() {
    var t = this.buffer;
    this.buffer = [], this.destination.next(t);
  }, e;
}(V);
function Yu(n, e) {
  return e === void 0 && (e = null), function(r) {
    return r.lift(new Ku(n, e));
  };
}
var Ku = /* @__PURE__ */ function() {
  function n(e, t) {
    this.bufferSize = e, this.startBufferEvery = t, !t || e === t ? this.subscriberClass = Ju : this.subscriberClass = Xu;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new this.subscriberClass(e, this.bufferSize, this.startBufferEvery));
  }, n;
}(), Ju = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    var i = n.call(this, t) || this;
    return i.bufferSize = r, i.buffer = [], i;
  }
  return e.prototype._next = function(t) {
    var r = this.buffer;
    r.push(t), r.length == this.bufferSize && (this.destination.next(r), this.buffer = []);
  }, e.prototype._complete = function() {
    var t = this.buffer;
    t.length > 0 && this.destination.next(t), n.prototype._complete.call(this);
  }, e;
}(m), Xu = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i) {
    var s = n.call(this, t) || this;
    return s.bufferSize = r, s.startBufferEvery = i, s.buffers = [], s.count = 0, s;
  }
  return e.prototype._next = function(t) {
    var r = this, i = r.bufferSize, s = r.startBufferEvery, o = r.buffers, a = r.count;
    this.count++, a % s === 0 && o.push([]);
    for (var c = o.length; c--; ) {
      var l = o[c];
      l.push(t), l.length === i && (o.splice(c, 1), this.destination.next(l));
    }
  }, e.prototype._complete = function() {
    for (var t = this, r = t.buffers, i = t.destination; r.length > 0; ) {
      var s = r.shift();
      s.length > 0 && i.next(s);
    }
    n.prototype._complete.call(this);
  }, e;
}(m);
function el(n) {
  var e = arguments.length, t = ae;
  he(arguments[arguments.length - 1]) && (t = arguments[arguments.length - 1], e--);
  var r = null;
  e >= 2 && (r = arguments[1]);
  var i = Number.POSITIVE_INFINITY;
  return e >= 3 && (i = arguments[2]), function(o) {
    return o.lift(new tl(n, r, i, t));
  };
}
var tl = /* @__PURE__ */ function() {
  function n(e, t, r, i) {
    this.bufferTimeSpan = e, this.bufferCreationInterval = t, this.maxBufferSize = r, this.scheduler = i;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new rl(e, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler));
  }, n;
}(), nl = /* @__PURE__ */ function() {
  function n() {
    this.buffer = [];
  }
  return n;
}(), rl = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i, s, o) {
    var a = n.call(this, t) || this;
    a.bufferTimeSpan = r, a.bufferCreationInterval = i, a.maxBufferSize = s, a.scheduler = o, a.contexts = [];
    var c = a.openContext();
    if (a.timespanOnly = i == null || i < 0, a.timespanOnly) {
      var l = { subscriber: a, context: c, bufferTimeSpan: r };
      a.add(c.closeAction = o.schedule(Xi, r, l));
    } else {
      var u = { subscriber: a, context: c }, d = { bufferTimeSpan: r, bufferCreationInterval: i, subscriber: a, scheduler: o };
      a.add(c.closeAction = o.schedule(Ro, r, u)), a.add(o.schedule(il, i, d));
    }
    return a;
  }
  return e.prototype._next = function(t) {
    for (var r = this.contexts, i = r.length, s, o = 0; o < i; o++) {
      var a = r[o], c = a.buffer;
      c.push(t), c.length == this.maxBufferSize && (s = a);
    }
    s && this.onBufferFull(s);
  }, e.prototype._error = function(t) {
    this.contexts.length = 0, n.prototype._error.call(this, t);
  }, e.prototype._complete = function() {
    for (var t = this, r = t.contexts, i = t.destination; r.length > 0; ) {
      var s = r.shift();
      i.next(s.buffer);
    }
    n.prototype._complete.call(this);
  }, e.prototype._unsubscribe = function() {
    this.contexts = null;
  }, e.prototype.onBufferFull = function(t) {
    this.closeContext(t);
    var r = t.closeAction;
    if (r.unsubscribe(), this.remove(r), !this.closed && this.timespanOnly) {
      t = this.openContext();
      var i = this.bufferTimeSpan, s = { subscriber: this, context: t, bufferTimeSpan: i };
      this.add(t.closeAction = this.scheduler.schedule(Xi, i, s));
    }
  }, e.prototype.openContext = function() {
    var t = new nl();
    return this.contexts.push(t), t;
  }, e.prototype.closeContext = function(t) {
    this.destination.next(t.buffer);
    var r = this.contexts, i = r ? r.indexOf(t) : -1;
    i >= 0 && r.splice(r.indexOf(t), 1);
  }, e;
}(m);
function Xi(n) {
  var e = n.subscriber, t = n.context;
  t && e.closeContext(t), e.closed || (n.context = e.openContext(), n.context.closeAction = this.schedule(n, n.bufferTimeSpan));
}
function il(n) {
  var e = n.bufferCreationInterval, t = n.bufferTimeSpan, r = n.subscriber, i = n.scheduler, s = r.openContext(), o = this;
  r.closed || (r.add(s.closeAction = i.schedule(Ro, t, { subscriber: r, context: s })), o.schedule(n, e));
}
function Ro(n) {
  var e = n.subscriber, t = n.context;
  e.closeContext(t);
}
function sl(n, e) {
  return function(r) {
    return r.lift(new ol(n, e));
  };
}
var ol = /* @__PURE__ */ function() {
  function n(e, t) {
    this.openings = e, this.closingSelector = t;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new al(e, this.openings, this.closingSelector));
  }, n;
}(), al = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i) {
    var s = n.call(this, t) || this;
    return s.closingSelector = i, s.contexts = [], s.add(We(s, r)), s;
  }
  return e.prototype._next = function(t) {
    for (var r = this.contexts, i = r.length, s = 0; s < i; s++)
      r[s].buffer.push(t);
  }, e.prototype._error = function(t) {
    for (var r = this.contexts; r.length > 0; ) {
      var i = r.shift();
      i.subscription.unsubscribe(), i.buffer = null, i.subscription = null;
    }
    this.contexts = null, n.prototype._error.call(this, t);
  }, e.prototype._complete = function() {
    for (var t = this.contexts; t.length > 0; ) {
      var r = t.shift();
      this.destination.next(r.buffer), r.subscription.unsubscribe(), r.buffer = null, r.subscription = null;
    }
    this.contexts = null, n.prototype._complete.call(this);
  }, e.prototype.notifyNext = function(t, r) {
    t ? this.closeBuffer(t) : this.openBuffer(r);
  }, e.prototype.notifyComplete = function(t) {
    this.closeBuffer(t.context);
  }, e.prototype.openBuffer = function(t) {
    try {
      var r = this.closingSelector, i = r.call(this, t);
      i && this.trySubscribe(i);
    } catch (s) {
      this._error(s);
    }
  }, e.prototype.closeBuffer = function(t) {
    var r = this.contexts;
    if (r && t) {
      var i = t.buffer, s = t.subscription;
      this.destination.next(i), r.splice(r.indexOf(t), 1), this.remove(s), s.unsubscribe();
    }
  }, e.prototype.trySubscribe = function(t) {
    var r = this.contexts, i = [], s = new F(), o = { buffer: i, subscription: s };
    r.push(o);
    var a = We(this, t, o);
    !a || a.closed ? this.closeBuffer(o) : (a.context = o, this.add(a), s.add(a));
  }, e;
}(dt);
function cl(n) {
  return function(e) {
    return e.lift(new ul(n));
  };
}
var ul = /* @__PURE__ */ function() {
  function n(e) {
    this.closingSelector = e;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new ll(e, this.closingSelector));
  }, n;
}(), ll = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    var i = n.call(this, t) || this;
    return i.closingSelector = r, i.subscribing = !1, i.openBuffer(), i;
  }
  return e.prototype._next = function(t) {
    this.buffer.push(t);
  }, e.prototype._complete = function() {
    var t = this.buffer;
    t && this.destination.next(t), n.prototype._complete.call(this);
  }, e.prototype._unsubscribe = function() {
    this.buffer = void 0, this.subscribing = !1;
  }, e.prototype.notifyNext = function() {
    this.openBuffer();
  }, e.prototype.notifyComplete = function() {
    this.subscribing ? this.complete() : this.openBuffer();
  }, e.prototype.openBuffer = function() {
    var t = this.closingSubscription;
    t && (this.remove(t), t.unsubscribe());
    var r = this.buffer;
    this.buffer && this.destination.next(r), this.buffer = [];
    var i;
    try {
      var s = this.closingSelector;
      i = s();
    } catch (o) {
      return this.error(o);
    }
    t = new F(), this.closingSubscription = t, this.add(t), this.subscribing = !0, t.add($(i, new B(this))), this.subscribing = !1;
  }, e;
}(V);
function hl(n) {
  return function(t) {
    var r = new dl(n), i = t.lift(r);
    return r.caught = i;
  };
}
var dl = /* @__PURE__ */ function() {
  function n(e) {
    this.selector = e;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new fl(e, this.selector, this.caught));
  }, n;
}(), fl = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i) {
    var s = n.call(this, t) || this;
    return s.selector = r, s.caught = i, s;
  }
  return e.prototype.error = function(t) {
    if (!this.isStopped) {
      var r = void 0;
      try {
        r = this.selector(t, this.caught);
      } catch (o) {
        n.prototype.error.call(this, o);
        return;
      }
      this._unsubscribeAndRecycle();
      var i = new B(this);
      this.add(i);
      var s = $(r, i);
      s !== i && this.add(s);
    }
  }, e;
}(V);
function pl(n) {
  return function(e) {
    return e.lift(new gi(n));
  };
}
function bl() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n[e] = arguments[e];
  var t = null;
  return typeof n[n.length - 1] == "function" && (t = n.pop()), n.length === 1 && oe(n[0]) && (n = n[0].slice()), function(r) {
    return r.lift.call(Be([r].concat(n)), new gi(t));
  };
}
function gl() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n[e] = arguments[e];
  return function(t) {
    return t.lift.call(tn.apply(void 0, [t].concat(n)));
  };
}
function Do(n, e) {
  return ut(n, e, 1);
}
function vl(n, e) {
  return Do(function() {
    return n;
  }, e);
}
function yl(n) {
  return function(e) {
    return e.lift(new ml(n, e));
  };
}
var ml = /* @__PURE__ */ function() {
  function n(e, t) {
    this.predicate = e, this.source = t;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new _l(e, this.predicate, this.source));
  }, n;
}(), _l = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i) {
    var s = n.call(this, t) || this;
    return s.predicate = r, s.source = i, s.count = 0, s.index = 0, s;
  }
  return e.prototype._next = function(t) {
    this.predicate ? this._tryPredicate(t) : this.count++;
  }, e.prototype._tryPredicate = function(t) {
    var r;
    try {
      r = this.predicate(t, this.index++, this.source);
    } catch (i) {
      this.destination.error(i);
      return;
    }
    r && this.count++;
  }, e.prototype._complete = function() {
    this.destination.next(this.count), this.destination.complete();
  }, e;
}(m);
function wl(n) {
  return function(e) {
    return e.lift(new Sl(n));
  };
}
var Sl = /* @__PURE__ */ function() {
  function n(e) {
    this.durationSelector = e;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new xl(e, this.durationSelector));
  }, n;
}(), xl = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    var i = n.call(this, t) || this;
    return i.durationSelector = r, i.hasValue = !1, i;
  }
  return e.prototype._next = function(t) {
    try {
      var r = this.durationSelector.call(this, t);
      r && this._tryNext(t, r);
    } catch (i) {
      this.destination.error(i);
    }
  }, e.prototype._complete = function() {
    this.emitValue(), this.destination.complete();
  }, e.prototype._tryNext = function(t, r) {
    var i = this.durationSubscription;
    this.value = t, this.hasValue = !0, i && (i.unsubscribe(), this.remove(i)), i = $(r, new B(this)), i && !i.closed && this.add(this.durationSubscription = i);
  }, e.prototype.notifyNext = function() {
    this.emitValue();
  }, e.prototype.notifyComplete = function() {
    this.emitValue();
  }, e.prototype.emitValue = function() {
    if (this.hasValue) {
      var t = this.value, r = this.durationSubscription;
      r && (this.durationSubscription = void 0, r.unsubscribe(), this.remove(r)), this.value = void 0, this.hasValue = !1, n.prototype._next.call(this, t);
    }
  }, e;
}(V);
function El(n, e) {
  return e === void 0 && (e = ae), function(t) {
    return t.lift(new Cl(n, e));
  };
}
var Cl = /* @__PURE__ */ function() {
  function n(e, t) {
    this.dueTime = e, this.scheduler = t;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new kl(e, this.dueTime, this.scheduler));
  }, n;
}(), kl = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i) {
    var s = n.call(this, t) || this;
    return s.dueTime = r, s.scheduler = i, s.debouncedSubscription = null, s.lastValue = null, s.hasValue = !1, s;
  }
  return e.prototype._next = function(t) {
    this.clearDebounce(), this.lastValue = t, this.hasValue = !0, this.add(this.debouncedSubscription = this.scheduler.schedule(Ml, this.dueTime, this));
  }, e.prototype._complete = function() {
    this.debouncedNext(), this.destination.complete();
  }, e.prototype.debouncedNext = function() {
    if (this.clearDebounce(), this.hasValue) {
      var t = this.lastValue;
      this.lastValue = null, this.hasValue = !1, this.destination.next(t);
    }
  }, e.prototype.clearDebounce = function() {
    var t = this.debouncedSubscription;
    t !== null && (this.remove(t), t.unsubscribe(), this.debouncedSubscription = null);
  }, e;
}(m);
function Ml(n) {
  n.debouncedNext();
}
function hn(n) {
  return n === void 0 && (n = null), function(e) {
    return e.lift(new Il(n));
  };
}
var Il = /* @__PURE__ */ function() {
  function n(e) {
    this.defaultValue = e;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new Al(e, this.defaultValue));
  }, n;
}(), Al = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    var i = n.call(this, t) || this;
    return i.defaultValue = r, i.isEmpty = !0, i;
  }
  return e.prototype._next = function(t) {
    this.isEmpty = !1, this.destination.next(t);
  }, e.prototype._complete = function() {
    this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete();
  }, e;
}(m);
function Lo(n) {
  return n instanceof Date && !isNaN(+n);
}
function Nl(n, e) {
  e === void 0 && (e = ae);
  var t = Lo(n), r = t ? +n - e.now() : Math.abs(n);
  return function(i) {
    return i.lift(new Tl(r, e));
  };
}
var Tl = /* @__PURE__ */ function() {
  function n(e, t) {
    this.delay = e, this.scheduler = t;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new Ol(e, this.delay, this.scheduler));
  }, n;
}(), Ol = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i) {
    var s = n.call(this, t) || this;
    return s.delay = r, s.scheduler = i, s.queue = [], s.active = !1, s.errored = !1, s;
  }
  return e.dispatch = function(t) {
    for (var r = t.source, i = r.queue, s = t.scheduler, o = t.destination; i.length > 0 && i[0].time - s.now() <= 0; )
      i.shift().notification.observe(o);
    if (i.length > 0) {
      var a = Math.max(0, i[0].time - s.now());
      this.schedule(t, a);
    } else
      this.unsubscribe(), r.active = !1;
  }, e.prototype._schedule = function(t) {
    this.active = !0;
    var r = this.destination;
    r.add(t.schedule(e.dispatch, this.delay, {
      source: this,
      destination: this.destination,
      scheduler: t
    }));
  }, e.prototype.scheduleNotification = function(t) {
    if (this.errored !== !0) {
      var r = this.scheduler, i = new Rl(r.now() + this.delay, t);
      this.queue.push(i), this.active === !1 && this._schedule(r);
    }
  }, e.prototype._next = function(t) {
    this.scheduleNotification(Fe.createNext(t));
  }, e.prototype._error = function(t) {
    this.errored = !0, this.queue = [], this.destination.error(t), this.unsubscribe();
  }, e.prototype._complete = function() {
    this.scheduleNotification(Fe.createComplete()), this.unsubscribe();
  }, e;
}(m), Rl = /* @__PURE__ */ function() {
  function n(e, t) {
    this.time = e, this.notification = t;
  }
  return n;
}();
function Dl(n, e) {
  return e ? function(t) {
    return new jl(t, e).lift(new es(n));
  } : function(t) {
    return t.lift(new es(n));
  };
}
var es = /* @__PURE__ */ function() {
  function n(e) {
    this.delayDurationSelector = e;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new Ll(e, this.delayDurationSelector));
  }, n;
}(), Ll = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    var i = n.call(this, t) || this;
    return i.delayDurationSelector = r, i.completed = !1, i.delayNotifierSubscriptions = [], i.index = 0, i;
  }
  return e.prototype.notifyNext = function(t, r, i, s, o) {
    this.destination.next(t), this.removeSubscription(o), this.tryComplete();
  }, e.prototype.notifyError = function(t, r) {
    this._error(t);
  }, e.prototype.notifyComplete = function(t) {
    var r = this.removeSubscription(t);
    r && this.destination.next(r), this.tryComplete();
  }, e.prototype._next = function(t) {
    var r = this.index++;
    try {
      var i = this.delayDurationSelector(t, r);
      i && this.tryDelay(i, t);
    } catch (s) {
      this.destination.error(s);
    }
  }, e.prototype._complete = function() {
    this.completed = !0, this.tryComplete(), this.unsubscribe();
  }, e.prototype.removeSubscription = function(t) {
    t.unsubscribe();
    var r = this.delayNotifierSubscriptions.indexOf(t);
    return r !== -1 && this.delayNotifierSubscriptions.splice(r, 1), t.outerValue;
  }, e.prototype.tryDelay = function(t, r) {
    var i = We(this, t, r);
    if (i && !i.closed) {
      var s = this.destination;
      s.add(i), this.delayNotifierSubscriptions.push(i);
    }
  }, e.prototype.tryComplete = function() {
    this.completed && this.delayNotifierSubscriptions.length === 0 && this.destination.complete();
  }, e;
}(dt), jl = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    var i = n.call(this) || this;
    return i.source = t, i.subscriptionDelay = r, i;
  }
  return e.prototype._subscribe = function(t) {
    this.subscriptionDelay.subscribe(new Pl(t, this.source));
  }, e;
}(E), Pl = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    var i = n.call(this) || this;
    return i.parent = t, i.source = r, i.sourceSubscribed = !1, i;
  }
  return e.prototype._next = function(t) {
    this.subscribeToSource();
  }, e.prototype._error = function(t) {
    this.unsubscribe(), this.parent.error(t);
  }, e.prototype._complete = function() {
    this.unsubscribe(), this.subscribeToSource();
  }, e.prototype.subscribeToSource = function() {
    this.sourceSubscribed || (this.sourceSubscribed = !0, this.unsubscribe(), this.source.subscribe(this.parent));
  }, e;
}(m);
function Fl() {
  return function(e) {
    return e.lift(new Wl());
  };
}
var Wl = /* @__PURE__ */ function() {
  function n() {
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new Bl(e));
  }, n;
}(), Bl = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t) {
    return n.call(this, t) || this;
  }
  return e.prototype._next = function(t) {
    t.observe(this.destination);
  }, e;
}(m);
function Vl(n, e) {
  return function(t) {
    return t.lift(new $l(n, e));
  };
}
var $l = /* @__PURE__ */ function() {
  function n(e, t) {
    this.keySelector = e, this.flushes = t;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new Hl(e, this.keySelector, this.flushes));
  }, n;
}(), Hl = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i) {
    var s = n.call(this, t) || this;
    return s.keySelector = r, s.values = /* @__PURE__ */ new Set(), i && s.add($(i, new B(s))), s;
  }
  return e.prototype.notifyNext = function() {
    this.values.clear();
  }, e.prototype.notifyError = function(t) {
    this._error(t);
  }, e.prototype._next = function(t) {
    this.keySelector ? this._useKeySelector(t) : this._finalizeNext(t, t);
  }, e.prototype._useKeySelector = function(t) {
    var r, i = this.destination;
    try {
      r = this.keySelector(t);
    } catch (s) {
      i.error(s);
      return;
    }
    this._finalizeNext(r, t);
  }, e.prototype._finalizeNext = function(t, r) {
    var i = this.values;
    i.has(t) || (i.add(t), this.destination.next(r));
  }, e;
}(V);
function jo(n, e) {
  return function(t) {
    return t.lift(new Ul(n, e));
  };
}
var Ul = /* @__PURE__ */ function() {
  function n(e, t) {
    this.compare = e, this.keySelector = t;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new zl(e, this.compare, this.keySelector));
  }, n;
}(), zl = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i) {
    var s = n.call(this, t) || this;
    return s.keySelector = i, s.hasKey = !1, typeof r == "function" && (s.compare = r), s;
  }
  return e.prototype.compare = function(t, r) {
    return t === r;
  }, e.prototype._next = function(t) {
    var r;
    try {
      var i = this.keySelector;
      r = i ? i(t) : t;
    } catch (a) {
      return this.destination.error(a);
    }
    var s = !1;
    if (this.hasKey)
      try {
        var o = this.compare;
        s = o(this.key, r);
      } catch (a) {
        return this.destination.error(a);
      }
    else
      this.hasKey = !0;
    s || (this.key = r, this.destination.next(t));
  }, e;
}(m);
function ql(n, e) {
  return jo(function(t, r) {
    return e ? e(t[n], r[n]) : t[n] === r[n];
  });
}
function qn(n) {
  return n === void 0 && (n = Gl), function(e) {
    return e.lift(new Ql(n));
  };
}
var Ql = /* @__PURE__ */ function() {
  function n(e) {
    this.errorFactory = e;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new Zl(e, this.errorFactory));
  }, n;
}(), Zl = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    var i = n.call(this, t) || this;
    return i.errorFactory = r, i.hasValue = !1, i;
  }
  return e.prototype._next = function(t) {
    this.hasValue = !0, this.destination.next(t);
  }, e.prototype._complete = function() {
    if (this.hasValue)
      return this.destination.complete();
    var t = void 0;
    try {
      t = this.errorFactory();
    } catch (r) {
      t = r;
    }
    this.destination.error(t);
  }, e;
}(m);
function Gl() {
  return new ln();
}
function mi(n) {
  return function(e) {
    return n === 0 ? Dt() : e.lift(new Yl(n));
  };
}
var Yl = /* @__PURE__ */ function() {
  function n(e) {
    if (this.total = e, this.total < 0)
      throw new xt();
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new Kl(e, this.total));
  }, n;
}(), Kl = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    var i = n.call(this, t) || this;
    return i.total = r, i.count = 0, i;
  }
  return e.prototype._next = function(t) {
    var r = this.total, i = ++this.count;
    i <= r && (this.destination.next(t), i === r && (this.destination.complete(), this.unsubscribe()));
  }, e;
}(m);
function Jl(n, e) {
  if (n < 0)
    throw new xt();
  var t = arguments.length >= 2;
  return function(r) {
    return r.pipe(Xe(function(i, s) {
      return s === n;
    }), mi(1), t ? hn(e) : qn(function() {
      return new xt();
    }));
  };
}
function Xl() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n[e] = arguments[e];
  return function(t) {
    return tn(t, zn.apply(void 0, n));
  };
}
function eh(n, e) {
  return function(t) {
    return t.lift(new th(n, e, t));
  };
}
var th = /* @__PURE__ */ function() {
  function n(e, t, r) {
    this.predicate = e, this.thisArg = t, this.source = r;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new nh(e, this.predicate, this.thisArg, this.source));
  }, n;
}(), nh = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i, s) {
    var o = n.call(this, t) || this;
    return o.predicate = r, o.thisArg = i, o.source = s, o.index = 0, o.thisArg = i || o, o;
  }
  return e.prototype.notifyComplete = function(t) {
    this.destination.next(t), this.destination.complete();
  }, e.prototype._next = function(t) {
    var r = !1;
    try {
      r = this.predicate.call(this.thisArg, t, this.index++, this.source);
    } catch (i) {
      this.destination.error(i);
      return;
    }
    r || this.notifyComplete(!1);
  }, e.prototype._complete = function() {
    this.notifyComplete(!0);
  }, e;
}(m);
function rh() {
  return function(n) {
    return n.lift(new ih());
  };
}
var ih = /* @__PURE__ */ function() {
  function n() {
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new sh(e));
  }, n;
}(), sh = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t) {
    var r = n.call(this, t) || this;
    return r.hasCompleted = !1, r.hasSubscription = !1, r;
  }
  return e.prototype._next = function(t) {
    this.hasSubscription || (this.hasSubscription = !0, this.add($(t, new B(this))));
  }, e.prototype._complete = function() {
    this.hasCompleted = !0, this.hasSubscription || this.destination.complete();
  }, e.prototype.notifyComplete = function() {
    this.hasSubscription = !1, this.hasCompleted && this.destination.complete();
  }, e;
}(V);
function Po(n, e) {
  return e ? function(t) {
    return t.pipe(Po(function(r, i) {
      return Be(n(r, i)).pipe(_e(function(s, o) {
        return e(r, s, i, o);
      }));
    }));
  } : function(t) {
    return t.lift(new oh(n));
  };
}
var oh = /* @__PURE__ */ function() {
  function n(e) {
    this.project = e;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new ah(e, this.project));
  }, n;
}(), ah = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    var i = n.call(this, t) || this;
    return i.project = r, i.hasSubscription = !1, i.hasCompleted = !1, i.index = 0, i;
  }
  return e.prototype._next = function(t) {
    this.hasSubscription || this.tryNext(t);
  }, e.prototype.tryNext = function(t) {
    var r, i = this.index++;
    try {
      r = this.project(t, i);
    } catch (s) {
      this.destination.error(s);
      return;
    }
    this.hasSubscription = !0, this._innerSub(r);
  }, e.prototype._innerSub = function(t) {
    var r = new B(this), i = this.destination;
    i.add(r);
    var s = $(t, r);
    s !== r && i.add(s);
  }, e.prototype._complete = function() {
    this.hasCompleted = !0, this.hasSubscription || this.destination.complete(), this.unsubscribe();
  }, e.prototype.notifyNext = function(t) {
    this.destination.next(t);
  }, e.prototype.notifyError = function(t) {
    this.destination.error(t);
  }, e.prototype.notifyComplete = function() {
    this.hasSubscription = !1, this.hasCompleted && this.destination.complete();
  }, e;
}(V);
function ch(n, e, t) {
  return e === void 0 && (e = Number.POSITIVE_INFINITY), e = (e || 0) < 1 ? Number.POSITIVE_INFINITY : e, function(r) {
    return r.lift(new uh(n, e, t));
  };
}
var uh = /* @__PURE__ */ function() {
  function n(e, t, r) {
    this.project = e, this.concurrent = t, this.scheduler = r;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new lh(e, this.project, this.concurrent, this.scheduler));
  }, n;
}(), lh = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i, s) {
    var o = n.call(this, t) || this;
    return o.project = r, o.concurrent = i, o.scheduler = s, o.index = 0, o.active = 0, o.hasCompleted = !1, i < Number.POSITIVE_INFINITY && (o.buffer = []), o;
  }
  return e.dispatch = function(t) {
    var r = t.subscriber, i = t.result, s = t.value, o = t.index;
    r.subscribeToProjection(i, s, o);
  }, e.prototype._next = function(t) {
    var r = this.destination;
    if (r.closed) {
      this._complete();
      return;
    }
    var i = this.index++;
    if (this.active < this.concurrent) {
      r.next(t);
      try {
        var s = this.project, o = s(t, i);
        if (!this.scheduler)
          this.subscribeToProjection(o, t, i);
        else {
          var a = { subscriber: this, result: o, value: t, index: i }, c = this.destination;
          c.add(this.scheduler.schedule(e.dispatch, 0, a));
        }
      } catch (l) {
        r.error(l);
      }
    } else
      this.buffer.push(t);
  }, e.prototype.subscribeToProjection = function(t, r, i) {
    this.active++;
    var s = this.destination;
    s.add($(t, new B(this)));
  }, e.prototype._complete = function() {
    this.hasCompleted = !0, this.hasCompleted && this.active === 0 && this.destination.complete(), this.unsubscribe();
  }, e.prototype.notifyNext = function(t) {
    this._next(t);
  }, e.prototype.notifyComplete = function() {
    var t = this.buffer;
    this.active--, t && t.length > 0 && this._next(t.shift()), this.hasCompleted && this.active === 0 && this.destination.complete();
  }, e;
}(V);
function hh(n) {
  return function(e) {
    return e.lift(new dh(n));
  };
}
var dh = /* @__PURE__ */ function() {
  function n(e) {
    this.callback = e;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new fh(e, this.callback));
  }, n;
}(), fh = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    var i = n.call(this, t) || this;
    return i.add(new F(r)), i;
  }
  return e;
}(m);
function ph(n, e) {
  if (typeof n != "function")
    throw new TypeError("predicate is not a function");
  return function(t) {
    return t.lift(new Fo(n, t, !1, e));
  };
}
var Fo = /* @__PURE__ */ function() {
  function n(e, t, r, i) {
    this.predicate = e, this.source = t, this.yieldIndex = r, this.thisArg = i;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new bh(e, this.predicate, this.source, this.yieldIndex, this.thisArg));
  }, n;
}(), bh = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i, s, o) {
    var a = n.call(this, t) || this;
    return a.predicate = r, a.source = i, a.yieldIndex = s, a.thisArg = o, a.index = 0, a;
  }
  return e.prototype.notifyComplete = function(t) {
    var r = this.destination;
    r.next(t), r.complete(), this.unsubscribe();
  }, e.prototype._next = function(t) {
    var r = this, i = r.predicate, s = r.thisArg, o = this.index++;
    try {
      var a = i.call(s || this, t, o, this.source);
      a && this.notifyComplete(this.yieldIndex ? o : t);
    } catch (c) {
      this.destination.error(c);
    }
  }, e.prototype._complete = function() {
    this.notifyComplete(this.yieldIndex ? -1 : void 0);
  }, e;
}(m);
function gh(n, e) {
  return function(t) {
    return t.lift(new Fo(n, t, !0, e));
  };
}
function vh(n, e) {
  var t = arguments.length >= 2;
  return function(r) {
    return r.pipe(n ? Xe(function(i, s) {
      return n(i, s, r);
    }) : Ke, mi(1), t ? hn(e) : qn(function() {
      return new ln();
    }));
  };
}
function yh() {
  return function(e) {
    return e.lift(new mh());
  };
}
var mh = /* @__PURE__ */ function() {
  function n() {
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new _h(e));
  }, n;
}(), _h = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e() {
    return n !== null && n.apply(this, arguments) || this;
  }
  return e.prototype._next = function(t) {
  }, e;
}(m);
function wh() {
  return function(n) {
    return n.lift(new Sh());
  };
}
var Sh = /* @__PURE__ */ function() {
  function n() {
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new xh(e));
  }, n;
}(), xh = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t) {
    return n.call(this, t) || this;
  }
  return e.prototype.notifyComplete = function(t) {
    var r = this.destination;
    r.next(t), r.complete();
  }, e.prototype._next = function(t) {
    this.notifyComplete(!1);
  }, e.prototype._complete = function() {
    this.notifyComplete(!0);
  }, e;
}(m);
function On(n) {
  return function(t) {
    return n === 0 ? Dt() : t.lift(new Eh(n));
  };
}
var Eh = /* @__PURE__ */ function() {
  function n(e) {
    if (this.total = e, this.total < 0)
      throw new xt();
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new Ch(e, this.total));
  }, n;
}(), Ch = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    var i = n.call(this, t) || this;
    return i.total = r, i.ring = new Array(), i.count = 0, i;
  }
  return e.prototype._next = function(t) {
    var r = this.ring, i = this.total, s = this.count++;
    if (r.length < i)
      r.push(t);
    else {
      var o = s % i;
      r[o] = t;
    }
  }, e.prototype._complete = function() {
    var t = this.destination, r = this.count;
    if (r > 0)
      for (var i = this.count >= this.total ? this.total : this.count, s = this.ring, o = 0; o < i; o++) {
        var a = r++ % i;
        t.next(s[a]);
      }
    t.complete();
  }, e;
}(m);
function kh(n, e) {
  var t = arguments.length >= 2;
  return function(r) {
    return r.pipe(n ? Xe(function(i, s) {
      return n(i, s, r);
    }) : Ke, On(1), t ? hn(e) : qn(function() {
      return new ln();
    }));
  };
}
function Mh(n) {
  return function(e) {
    return e.lift(new Ih(n));
  };
}
var Ih = /* @__PURE__ */ function() {
  function n(e) {
    this.value = e;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new Ah(e, this.value));
  }, n;
}(), Ah = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    var i = n.call(this, t) || this;
    return i.value = r, i;
  }
  return e.prototype._next = function(t) {
    this.destination.next(this.value);
  }, e;
}(m);
function Nh() {
  return function(e) {
    return e.lift(new Th());
  };
}
var Th = /* @__PURE__ */ function() {
  function n() {
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new Oh(e));
  }, n;
}(), Oh = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t) {
    return n.call(this, t) || this;
  }
  return e.prototype._next = function(t) {
    this.destination.next(Fe.createNext(t));
  }, e.prototype._error = function(t) {
    var r = this.destination;
    r.next(Fe.createError(t)), r.complete();
  }, e.prototype._complete = function() {
    var t = this.destination;
    t.next(Fe.createComplete()), t.complete();
  }, e;
}(m);
function Rn(n, e) {
  var t = !1;
  return arguments.length >= 2 && (t = !0), function(i) {
    return i.lift(new Rh(n, e, t));
  };
}
var Rh = /* @__PURE__ */ function() {
  function n(e, t, r) {
    r === void 0 && (r = !1), this.accumulator = e, this.seed = t, this.hasSeed = r;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new Dh(e, this.accumulator, this.seed, this.hasSeed));
  }, n;
}(), Dh = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i, s) {
    var o = n.call(this, t) || this;
    return o.accumulator = r, o._seed = i, o.hasSeed = s, o.index = 0, o;
  }
  return Object.defineProperty(e.prototype, "seed", {
    get: function() {
      return this._seed;
    },
    set: function(t) {
      this.hasSeed = !0, this._seed = t;
    },
    enumerable: !0,
    configurable: !0
  }), e.prototype._next = function(t) {
    if (!this.hasSeed)
      this.seed = t, this.destination.next(t);
    else
      return this._tryNext(t);
  }, e.prototype._tryNext = function(t) {
    var r = this.index++, i;
    try {
      i = this.accumulator(this.seed, t, r);
    } catch (s) {
      this.destination.error(s);
    }
    this.seed = i, this.destination.next(i);
  }, e;
}(m);
function Qn(n, e) {
  return arguments.length >= 2 ? function(r) {
    return Ur(Rn(n, e), On(1), hn(e))(r);
  } : function(r) {
    return Ur(Rn(function(i, s, o) {
      return n(i, s, o + 1);
    }), On(1))(r);
  };
}
function Lh(n) {
  var e = typeof n == "function" ? function(t, r) {
    return n(t, r) > 0 ? t : r;
  } : function(t, r) {
    return t > r ? t : r;
  };
  return Qn(e);
}
function jh() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n[e] = arguments[e];
  return function(t) {
    return t.lift.call(Co.apply(void 0, [t].concat(n)));
  };
}
function Ph(n, e, t) {
  return t === void 0 && (t = Number.POSITIVE_INFINITY), typeof e == "function" ? ut(function() {
    return n;
  }, e, t) : (typeof e == "number" && (t = e), ut(function() {
    return n;
  }, t));
}
function Fh(n, e, t) {
  return t === void 0 && (t = Number.POSITIVE_INFINITY), function(r) {
    return r.lift(new Wh(n, e, t));
  };
}
var Wh = /* @__PURE__ */ function() {
  function n(e, t, r) {
    this.accumulator = e, this.seed = t, this.concurrent = r;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new Bh(e, this.accumulator, this.seed, this.concurrent));
  }, n;
}(), Bh = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i, s) {
    var o = n.call(this, t) || this;
    return o.accumulator = r, o.acc = i, o.concurrent = s, o.hasValue = !1, o.hasCompleted = !1, o.buffer = [], o.active = 0, o.index = 0, o;
  }
  return e.prototype._next = function(t) {
    if (this.active < this.concurrent) {
      var r = this.index++, i = this.destination, s = void 0;
      try {
        var o = this.accumulator;
        s = o(this.acc, t, r);
      } catch (a) {
        return i.error(a);
      }
      this.active++, this._innerSub(s);
    } else
      this.buffer.push(t);
  }, e.prototype._innerSub = function(t) {
    var r = new B(this), i = this.destination;
    i.add(r);
    var s = $(t, r);
    s !== r && i.add(s);
  }, e.prototype._complete = function() {
    this.hasCompleted = !0, this.active === 0 && this.buffer.length === 0 && (this.hasValue === !1 && this.destination.next(this.acc), this.destination.complete()), this.unsubscribe();
  }, e.prototype.notifyNext = function(t) {
    var r = this.destination;
    this.acc = t, this.hasValue = !0, r.next(t);
  }, e.prototype.notifyComplete = function() {
    var t = this.buffer;
    this.active--, t.length > 0 ? this._next(t.shift()) : this.active === 0 && this.hasCompleted && (this.hasValue === !1 && this.destination.next(this.acc), this.destination.complete());
  }, e;
}(V);
function Vh(n) {
  var e = typeof n == "function" ? function(t, r) {
    return n(t, r) < 0 ? t : r;
  } : function(t, r) {
    return t < r ? t : r;
  };
  return Qn(e);
}
function lt(n, e) {
  return function(r) {
    var i;
    if (typeof n == "function" ? i = n : i = function() {
      return n;
    }, typeof e == "function")
      return r.lift(new $h(i, e));
    var s = Object.create(r, xc);
    return s.source = r, s.subjectFactory = i, s;
  };
}
var $h = /* @__PURE__ */ function() {
  function n(e, t) {
    this.subjectFactory = e, this.selector = t;
  }
  return n.prototype.call = function(e, t) {
    var r = this.selector, i = this.subjectFactory(), s = r(i).subscribe(e);
    return s.add(t.subscribe(i)), s;
  }, n;
}();
function Hh() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n[e] = arguments[e];
  return n.length === 1 && oe(n[0]) && (n = n[0]), function(t) {
    return t.lift(new Uh(n));
  };
}
var Uh = /* @__PURE__ */ function() {
  function n(e) {
    this.nextSources = e;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new zh(e, this.nextSources));
  }, n;
}(), zh = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    var i = n.call(this, t) || this;
    return i.destination = t, i.nextSources = r, i;
  }
  return e.prototype.notifyError = function() {
    this.subscribeToNextSource();
  }, e.prototype.notifyComplete = function() {
    this.subscribeToNextSource();
  }, e.prototype._error = function(t) {
    this.subscribeToNextSource(), this.unsubscribe();
  }, e.prototype._complete = function() {
    this.subscribeToNextSource(), this.unsubscribe();
  }, e.prototype.subscribeToNextSource = function() {
    var t = this.nextSources.shift();
    if (t) {
      var r = new B(this), i = this.destination;
      i.add(r);
      var s = $(t, r);
      s !== r && i.add(s);
    } else
      this.destination.complete();
  }, e;
}(V);
function qh() {
  return function(n) {
    return n.lift(new Qh());
  };
}
var Qh = /* @__PURE__ */ function() {
  function n() {
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new Zh(e));
  }, n;
}(), Zh = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t) {
    var r = n.call(this, t) || this;
    return r.hasPrev = !1, r;
  }
  return e.prototype._next = function(t) {
    var r;
    this.hasPrev ? r = [this.prev, t] : this.hasPrev = !0, this.prev = t, r && this.destination.next(r);
  }, e;
}(m);
function Gh(n, e) {
  return function(t) {
    return [
      Xe(n, e)(t),
      Xe(Mo(n, e))(t)
    ];
  };
}
function Yh() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n[e] = arguments[e];
  var t = n.length;
  if (t === 0)
    throw new Error("list of properties cannot be empty.");
  return function(r) {
    return _e(Kh(n, t))(r);
  };
}
function Kh(n, e) {
  var t = function(r) {
    for (var i = r, s = 0; s < e; s++) {
      var o = i != null ? i[n[s]] : void 0;
      if (o !== void 0)
        i = o;
      else
        return;
    }
    return i;
  };
  return t;
}
function Jh(n) {
  return n ? lt(function() {
    return new Y();
  }, n) : lt(new Y());
}
function Xh(n) {
  return function(e) {
    return lt(new so(n))(e);
  };
}
function ed() {
  return function(n) {
    return lt(new Lt())(n);
  };
}
function td(n, e, t, r) {
  t && typeof t != "function" && (r = t);
  var i = typeof t == "function" ? t : void 0, s = new bi(n, e, r);
  return function(o) {
    return lt(function() {
      return s;
    }, i)(o);
  };
}
function nd() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n[e] = arguments[e];
  return function(r) {
    return n.length === 1 && oe(n[0]) && (n = n[0]), r.lift.call(Io.apply(void 0, [r].concat(n)));
  };
}
function rd(n) {
  return n === void 0 && (n = -1), function(e) {
    return n === 0 ? Dt() : n < 0 ? e.lift(new ts(-1, e)) : e.lift(new ts(n - 1, e));
  };
}
var ts = /* @__PURE__ */ function() {
  function n(e, t) {
    this.count = e, this.source = t;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new id(e, this.count, this.source));
  }, n;
}(), id = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i) {
    var s = n.call(this, t) || this;
    return s.count = r, s.source = i, s;
  }
  return e.prototype.complete = function() {
    if (!this.isStopped) {
      var t = this, r = t.source, i = t.count;
      if (i === 0)
        return n.prototype.complete.call(this);
      i > -1 && (this.count = i - 1), r.subscribe(this._unsubscribeAndRecycle());
    }
  }, e;
}(m);
function sd(n) {
  return function(e) {
    return e.lift(new od(n));
  };
}
var od = /* @__PURE__ */ function() {
  function n(e) {
    this.notifier = e;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new ad(e, this.notifier, t));
  }, n;
}(), ad = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i) {
    var s = n.call(this, t) || this;
    return s.notifier = r, s.source = i, s.sourceIsBeingSubscribedTo = !0, s;
  }
  return e.prototype.notifyNext = function() {
    this.sourceIsBeingSubscribedTo = !0, this.source.subscribe(this);
  }, e.prototype.notifyComplete = function() {
    if (this.sourceIsBeingSubscribedTo === !1)
      return n.prototype.complete.call(this);
  }, e.prototype.complete = function() {
    if (this.sourceIsBeingSubscribedTo = !1, !this.isStopped) {
      if (this.retries || this.subscribeToRetries(), !this.retriesSubscription || this.retriesSubscription.closed)
        return n.prototype.complete.call(this);
      this._unsubscribeAndRecycle(), this.notifications.next(void 0);
    }
  }, e.prototype._unsubscribe = function() {
    var t = this, r = t.notifications, i = t.retriesSubscription;
    r && (r.unsubscribe(), this.notifications = void 0), i && (i.unsubscribe(), this.retriesSubscription = void 0), this.retries = void 0;
  }, e.prototype._unsubscribeAndRecycle = function() {
    var t = this._unsubscribe;
    return this._unsubscribe = null, n.prototype._unsubscribeAndRecycle.call(this), this._unsubscribe = t, this;
  }, e.prototype.subscribeToRetries = function() {
    this.notifications = new Y();
    var t;
    try {
      var r = this.notifier;
      t = r(this.notifications);
    } catch {
      return n.prototype.complete.call(this);
    }
    this.retries = t, this.retriesSubscription = $(t, new B(this));
  }, e;
}(V);
function cd(n) {
  return n === void 0 && (n = -1), function(e) {
    return e.lift(new ud(n, e));
  };
}
var ud = /* @__PURE__ */ function() {
  function n(e, t) {
    this.count = e, this.source = t;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new ld(e, this.count, this.source));
  }, n;
}(), ld = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i) {
    var s = n.call(this, t) || this;
    return s.count = r, s.source = i, s;
  }
  return e.prototype.error = function(t) {
    if (!this.isStopped) {
      var r = this, i = r.source, s = r.count;
      if (s === 0)
        return n.prototype.error.call(this, t);
      s > -1 && (this.count = s - 1), i.subscribe(this._unsubscribeAndRecycle());
    }
  }, e;
}(m);
function hd(n) {
  return function(e) {
    return e.lift(new dd(n, e));
  };
}
var dd = /* @__PURE__ */ function() {
  function n(e, t) {
    this.notifier = e, this.source = t;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new fd(e, this.notifier, this.source));
  }, n;
}(), fd = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i) {
    var s = n.call(this, t) || this;
    return s.notifier = r, s.source = i, s;
  }
  return e.prototype.error = function(t) {
    if (!this.isStopped) {
      var r = this.errors, i = this.retries, s = this.retriesSubscription;
      if (i)
        this.errors = void 0, this.retriesSubscription = void 0;
      else {
        r = new Y();
        try {
          var o = this.notifier;
          i = o(r);
        } catch (a) {
          return n.prototype.error.call(this, a);
        }
        s = $(i, new B(this));
      }
      this._unsubscribeAndRecycle(), this.errors = r, this.retries = i, this.retriesSubscription = s, r.next(t);
    }
  }, e.prototype._unsubscribe = function() {
    var t = this, r = t.errors, i = t.retriesSubscription;
    r && (r.unsubscribe(), this.errors = void 0), i && (i.unsubscribe(), this.retriesSubscription = void 0), this.retries = void 0;
  }, e.prototype.notifyNext = function() {
    var t = this._unsubscribe;
    this._unsubscribe = null, this._unsubscribeAndRecycle(), this._unsubscribe = t, this.source.subscribe(this);
  }, e;
}(V);
function pd(n) {
  return function(e) {
    return e.lift(new bd(n));
  };
}
var bd = /* @__PURE__ */ function() {
  function n(e) {
    this.notifier = e;
  }
  return n.prototype.call = function(e, t) {
    var r = new gd(e), i = t.subscribe(r);
    return i.add($(this.notifier, new B(r))), i;
  }, n;
}(), gd = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e() {
    var t = n !== null && n.apply(this, arguments) || this;
    return t.hasValue = !1, t;
  }
  return e.prototype._next = function(t) {
    this.value = t, this.hasValue = !0;
  }, e.prototype.notifyNext = function() {
    this.emitValue();
  }, e.prototype.notifyComplete = function() {
    this.emitValue();
  }, e.prototype.emitValue = function() {
    this.hasValue && (this.hasValue = !1, this.destination.next(this.value));
  }, e;
}(V);
function vd(n, e) {
  return e === void 0 && (e = ae), function(t) {
    return t.lift(new yd(n, e));
  };
}
var yd = /* @__PURE__ */ function() {
  function n(e, t) {
    this.period = e, this.scheduler = t;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new md(e, this.period, this.scheduler));
  }, n;
}(), md = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i) {
    var s = n.call(this, t) || this;
    return s.period = r, s.scheduler = i, s.hasValue = !1, s.add(i.schedule(_d, r, { subscriber: s, period: r })), s;
  }
  return e.prototype._next = function(t) {
    this.lastValue = t, this.hasValue = !0;
  }, e.prototype.notifyNext = function() {
    this.hasValue && (this.hasValue = !1, this.destination.next(this.lastValue));
  }, e;
}(m);
function _d(n) {
  var e = n.subscriber, t = n.period;
  e.notifyNext(), this.schedule(n, t);
}
function wd(n, e) {
  return function(t) {
    return t.lift(new Sd(n, e));
  };
}
var Sd = /* @__PURE__ */ function() {
  function n(e, t) {
    this.compareTo = e, this.comparator = t;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new xd(e, this.compareTo, this.comparator));
  }, n;
}(), xd = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i) {
    var s = n.call(this, t) || this;
    return s.compareTo = r, s.comparator = i, s._a = [], s._b = [], s._oneComplete = !1, s.destination.add(r.subscribe(new Ed(t, s))), s;
  }
  return e.prototype._next = function(t) {
    this._oneComplete && this._b.length === 0 ? this.emit(!1) : (this._a.push(t), this.checkValues());
  }, e.prototype._complete = function() {
    this._oneComplete ? this.emit(this._a.length === 0 && this._b.length === 0) : this._oneComplete = !0, this.unsubscribe();
  }, e.prototype.checkValues = function() {
    for (var t = this, r = t._a, i = t._b, s = t.comparator; r.length > 0 && i.length > 0; ) {
      var o = r.shift(), a = i.shift(), c = !1;
      try {
        c = s ? s(o, a) : o === a;
      } catch (l) {
        this.destination.error(l);
      }
      c || this.emit(!1);
    }
  }, e.prototype.emit = function(t) {
    var r = this.destination;
    r.next(t), r.complete();
  }, e.prototype.nextB = function(t) {
    this._oneComplete && this._a.length === 0 ? this.emit(!1) : (this._b.push(t), this.checkValues());
  }, e.prototype.completeB = function() {
    this._oneComplete ? this.emit(this._a.length === 0 && this._b.length === 0) : this._oneComplete = !0;
  }, e;
}(m), Ed = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    var i = n.call(this, t) || this;
    return i.parent = r, i;
  }
  return e.prototype._next = function(t) {
    this.parent.nextB(t);
  }, e.prototype._error = function(t) {
    this.parent.error(t), this.unsubscribe();
  }, e.prototype._complete = function() {
    this.parent.completeB(), this.unsubscribe();
  }, e;
}(m);
function Cd() {
  return new Y();
}
function kd() {
  return function(n) {
    return di()(lt(Cd)(n));
  };
}
function Md(n, e, t) {
  var r;
  return n && typeof n == "object" ? r = n : r = {
    bufferSize: n,
    windowTime: e,
    refCount: !1,
    scheduler: t
  }, function(i) {
    return i.lift(Id(r));
  };
}
function Id(n) {
  var e = n.bufferSize, t = e === void 0 ? Number.POSITIVE_INFINITY : e, r = n.windowTime, i = r === void 0 ? Number.POSITIVE_INFINITY : r, s = n.refCount, o = n.scheduler, a, c = 0, l, u = !1, d = !1;
  return function(f) {
    c++;
    var b;
    !a || u ? (u = !1, a = new bi(t, i, o), b = a.subscribe(this), l = f.subscribe({
      next: function(w) {
        a.next(w);
      },
      error: function(w) {
        u = !0, a.error(w);
      },
      complete: function() {
        d = !0, l = void 0, a.complete();
      }
    }), d && (l = void 0)) : b = a.subscribe(this), this.add(function() {
      c--, b.unsubscribe(), b = void 0, l && !d && s && c === 0 && (l.unsubscribe(), l = void 0, a = void 0);
    });
  };
}
function Ad(n) {
  return function(e) {
    return e.lift(new Nd(n, e));
  };
}
var Nd = /* @__PURE__ */ function() {
  function n(e, t) {
    this.predicate = e, this.source = t;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new Td(e, this.predicate, this.source));
  }, n;
}(), Td = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i) {
    var s = n.call(this, t) || this;
    return s.predicate = r, s.source = i, s.seenValue = !1, s.index = 0, s;
  }
  return e.prototype.applySingleValue = function(t) {
    this.seenValue ? this.destination.error("Sequence contains more than one element") : (this.seenValue = !0, this.singleValue = t);
  }, e.prototype._next = function(t) {
    var r = this.index++;
    this.predicate ? this.tryNext(t, r) : this.applySingleValue(t);
  }, e.prototype.tryNext = function(t, r) {
    try {
      this.predicate(t, r, this.source) && this.applySingleValue(t);
    } catch (i) {
      this.destination.error(i);
    }
  }, e.prototype._complete = function() {
    var t = this.destination;
    this.index > 0 ? (t.next(this.seenValue ? this.singleValue : void 0), t.complete()) : t.error(new ln());
  }, e;
}(m);
function Od(n) {
  return function(e) {
    return e.lift(new Rd(n));
  };
}
var Rd = /* @__PURE__ */ function() {
  function n(e) {
    this.total = e;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new Dd(e, this.total));
  }, n;
}(), Dd = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    var i = n.call(this, t) || this;
    return i.total = r, i.count = 0, i;
  }
  return e.prototype._next = function(t) {
    ++this.count > this.total && this.destination.next(t);
  }, e;
}(m);
function Ld(n) {
  return function(e) {
    return e.lift(new jd(n));
  };
}
var jd = /* @__PURE__ */ function() {
  function n(e) {
    if (this._skipCount = e, this._skipCount < 0)
      throw new xt();
  }
  return n.prototype.call = function(e, t) {
    return this._skipCount === 0 ? t.subscribe(new m(e)) : t.subscribe(new Pd(e, this._skipCount));
  }, n;
}(), Pd = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    var i = n.call(this, t) || this;
    return i._skipCount = r, i._count = 0, i._ring = new Array(r), i;
  }
  return e.prototype._next = function(t) {
    var r = this._skipCount, i = this._count++;
    if (i < r)
      this._ring[i] = t;
    else {
      var s = i % r, o = this._ring, a = o[s];
      o[s] = t, this.destination.next(a);
    }
  }, e;
}(m);
function Fd(n) {
  return function(e) {
    return e.lift(new Wd(n));
  };
}
var Wd = /* @__PURE__ */ function() {
  function n(e) {
    this.notifier = e;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new Bd(e, this.notifier));
  }, n;
}(), Bd = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    var i = n.call(this, t) || this;
    i.hasValue = !1;
    var s = new B(i);
    i.add(s), i.innerSubscription = s;
    var o = $(r, s);
    return o !== s && (i.add(o), i.innerSubscription = o), i;
  }
  return e.prototype._next = function(t) {
    this.hasValue && n.prototype._next.call(this, t);
  }, e.prototype.notifyNext = function() {
    this.hasValue = !0, this.innerSubscription && this.innerSubscription.unsubscribe();
  }, e.prototype.notifyComplete = function() {
  }, e;
}(V);
function Vd(n) {
  return function(e) {
    return e.lift(new $d(n));
  };
}
var $d = /* @__PURE__ */ function() {
  function n(e) {
    this.predicate = e;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new Hd(e, this.predicate));
  }, n;
}(), Hd = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    var i = n.call(this, t) || this;
    return i.predicate = r, i.skipping = !0, i.index = 0, i;
  }
  return e.prototype._next = function(t) {
    var r = this.destination;
    this.skipping && this.tryCallPredicate(t), this.skipping || r.next(t);
  }, e.prototype.tryCallPredicate = function(t) {
    try {
      var r = this.predicate(t, this.index++);
      this.skipping = Boolean(r);
    } catch (i) {
      this.destination.error(i);
    }
  }, e;
}(m);
function Ud() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n[e] = arguments[e];
  var t = n[n.length - 1];
  return he(t) ? (n.pop(), function(r) {
    return tn(n, r, t);
  }) : function(r) {
    return tn(n, r);
  };
}
var zd = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i) {
    r === void 0 && (r = 0), i === void 0 && (i = Mn);
    var s = n.call(this) || this;
    return s.source = t, s.delayTime = r, s.scheduler = i, (!Et(r) || r < 0) && (s.delayTime = 0), (!i || typeof i.schedule != "function") && (s.scheduler = Mn), s;
  }
  return e.create = function(t, r, i) {
    return r === void 0 && (r = 0), i === void 0 && (i = Mn), new e(t, r, i);
  }, e.dispatch = function(t) {
    var r = t.source, i = t.subscriber;
    return this.add(r.subscribe(i));
  }, e.prototype._subscribe = function(t) {
    var r = this.delayTime, i = this.source, s = this.scheduler;
    return s.schedule(e.dispatch, r, {
      source: i,
      subscriber: t
    });
  }, e;
}(E);
function qd(n, e) {
  return e === void 0 && (e = 0), function(r) {
    return r.lift(new Qd(n, e));
  };
}
var Qd = /* @__PURE__ */ function() {
  function n(e, t) {
    this.scheduler = e, this.delay = t;
  }
  return n.prototype.call = function(e, t) {
    return new zd(t, this.delay, this.scheduler).subscribe(e);
  }, n;
}();
function nn(n, e) {
  return typeof e == "function" ? function(t) {
    return t.pipe(nn(function(r, i) {
      return Be(n(r, i)).pipe(_e(function(s, o) {
        return e(r, s, i, o);
      }));
    }));
  } : function(t) {
    return t.lift(new Zd(n));
  };
}
var Zd = /* @__PURE__ */ function() {
  function n(e) {
    this.project = e;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new Gd(e, this.project));
  }, n;
}(), Gd = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    var i = n.call(this, t) || this;
    return i.project = r, i.index = 0, i;
  }
  return e.prototype._next = function(t) {
    var r, i = this.index++;
    try {
      r = this.project(t, i);
    } catch (s) {
      this.destination.error(s);
      return;
    }
    this._innerSub(r);
  }, e.prototype._innerSub = function(t) {
    var r = this.innerSubscription;
    r && r.unsubscribe();
    var i = new B(this), s = this.destination;
    s.add(i), this.innerSubscription = $(t, i), this.innerSubscription !== i && s.add(this.innerSubscription);
  }, e.prototype._complete = function() {
    var t = this.innerSubscription;
    (!t || t.closed) && n.prototype._complete.call(this), this.unsubscribe();
  }, e.prototype._unsubscribe = function() {
    this.innerSubscription = void 0;
  }, e.prototype.notifyComplete = function() {
    this.innerSubscription = void 0, this.isStopped && n.prototype._complete.call(this);
  }, e.prototype.notifyNext = function(t) {
    this.destination.next(t);
  }, e;
}(V);
function Yd() {
  return nn(Ke);
}
function Kd(n, e) {
  return e ? nn(function() {
    return n;
  }, e) : nn(function() {
    return n;
  });
}
function Jd(n) {
  return function(e) {
    return e.lift(new Xd(n));
  };
}
var Xd = /* @__PURE__ */ function() {
  function n(e) {
    this.notifier = e;
  }
  return n.prototype.call = function(e, t) {
    var r = new ef(e), i = $(this.notifier, new B(r));
    return i && !r.seenValue ? (r.add(i), t.subscribe(r)) : r;
  }, n;
}(), ef = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t) {
    var r = n.call(this, t) || this;
    return r.seenValue = !1, r;
  }
  return e.prototype.notifyNext = function() {
    this.seenValue = !0, this.complete();
  }, e.prototype.notifyComplete = function() {
  }, e;
}(V);
function tf(n, e) {
  return e === void 0 && (e = !1), function(t) {
    return t.lift(new nf(n, e));
  };
}
var nf = /* @__PURE__ */ function() {
  function n(e, t) {
    this.predicate = e, this.inclusive = t;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new rf(e, this.predicate, this.inclusive));
  }, n;
}(), rf = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i) {
    var s = n.call(this, t) || this;
    return s.predicate = r, s.inclusive = i, s.index = 0, s;
  }
  return e.prototype._next = function(t) {
    var r = this.destination, i;
    try {
      i = this.predicate(t, this.index++);
    } catch (s) {
      r.error(s);
      return;
    }
    this.nextOrComplete(t, i);
  }, e.prototype.nextOrComplete = function(t, r) {
    var i = this.destination;
    Boolean(r) ? i.next(t) : (this.inclusive && i.next(t), i.complete());
  }, e;
}(m);
function sf(n, e, t) {
  return function(i) {
    return i.lift(new of(n, e, t));
  };
}
var of = /* @__PURE__ */ function() {
  function n(e, t, r) {
    this.nextOrObserver = e, this.error = t, this.complete = r;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new af(e, this.nextOrObserver, this.error, this.complete));
  }, n;
}(), af = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i, s) {
    var o = n.call(this, t) || this;
    return o._tapNext = Ae, o._tapError = Ae, o._tapComplete = Ae, o._tapError = i || Ae, o._tapComplete = s || Ae, wt(r) ? (o._context = o, o._tapNext = r) : r && (o._context = r, o._tapNext = r.next || Ae, o._tapError = r.error || Ae, o._tapComplete = r.complete || Ae), o;
  }
  return e.prototype._next = function(t) {
    try {
      this._tapNext.call(this._context, t);
    } catch (r) {
      this.destination.error(r);
      return;
    }
    this.destination.next(t);
  }, e.prototype._error = function(t) {
    try {
      this._tapError.call(this._context, t);
    } catch (r) {
      this.destination.error(r);
      return;
    }
    this.destination.error(t);
  }, e.prototype._complete = function() {
    try {
      this._tapComplete.call(this._context);
    } catch (t) {
      this.destination.error(t);
      return;
    }
    return this.destination.complete();
  }, e;
}(m), Wo = {
  leading: !0,
  trailing: !1
};
function cf(n, e) {
  return e === void 0 && (e = Wo), function(t) {
    return t.lift(new uf(n, !!e.leading, !!e.trailing));
  };
}
var uf = /* @__PURE__ */ function() {
  function n(e, t, r) {
    this.durationSelector = e, this.leading = t, this.trailing = r;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new lf(e, this.durationSelector, this.leading, this.trailing));
  }, n;
}(), lf = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i, s) {
    var o = n.call(this, t) || this;
    return o.destination = t, o.durationSelector = r, o._leading = i, o._trailing = s, o._hasValue = !1, o;
  }
  return e.prototype._next = function(t) {
    this._hasValue = !0, this._sendValue = t, this._throttled || (this._leading ? this.send() : this.throttle(t));
  }, e.prototype.send = function() {
    var t = this, r = t._hasValue, i = t._sendValue;
    r && (this.destination.next(i), this.throttle(i)), this._hasValue = !1, this._sendValue = void 0;
  }, e.prototype.throttle = function(t) {
    var r = this.tryDurationSelector(t);
    r && this.add(this._throttled = $(r, new B(this)));
  }, e.prototype.tryDurationSelector = function(t) {
    try {
      return this.durationSelector(t);
    } catch (r) {
      return this.destination.error(r), null;
    }
  }, e.prototype.throttlingDone = function() {
    var t = this, r = t._throttled, i = t._trailing;
    r && r.unsubscribe(), this._throttled = void 0, i && this.send();
  }, e.prototype.notifyNext = function() {
    this.throttlingDone();
  }, e.prototype.notifyComplete = function() {
    this.throttlingDone();
  }, e;
}(V);
function hf(n, e, t) {
  return e === void 0 && (e = ae), t === void 0 && (t = Wo), function(r) {
    return r.lift(new df(n, e, t.leading, t.trailing));
  };
}
var df = /* @__PURE__ */ function() {
  function n(e, t, r, i) {
    this.duration = e, this.scheduler = t, this.leading = r, this.trailing = i;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new ff(e, this.duration, this.scheduler, this.leading, this.trailing));
  }, n;
}(), ff = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i, s, o) {
    var a = n.call(this, t) || this;
    return a.duration = r, a.scheduler = i, a.leading = s, a.trailing = o, a._hasTrailingValue = !1, a._trailingValue = null, a;
  }
  return e.prototype._next = function(t) {
    this.throttled ? this.trailing && (this._trailingValue = t, this._hasTrailingValue = !0) : (this.add(this.throttled = this.scheduler.schedule(pf, this.duration, { subscriber: this })), this.leading ? this.destination.next(t) : this.trailing && (this._trailingValue = t, this._hasTrailingValue = !0));
  }, e.prototype._complete = function() {
    this._hasTrailingValue ? (this.destination.next(this._trailingValue), this.destination.complete()) : this.destination.complete();
  }, e.prototype.clearThrottle = function() {
    var t = this.throttled;
    t && (this.trailing && this._hasTrailingValue && (this.destination.next(this._trailingValue), this._trailingValue = null, this._hasTrailingValue = !1), t.unsubscribe(), this.remove(t), this.throttled = null);
  }, e;
}(m);
function pf(n) {
  var e = n.subscriber;
  e.clearThrottle();
}
function bf(n) {
  return n === void 0 && (n = ae), function(e) {
    return yi(function() {
      return e.pipe(Rn(function(t, r) {
        var i = t.current;
        return { value: r, current: n.now(), last: i };
      }, { current: n.now(), value: void 0, last: void 0 }), _e(function(t) {
        var r = t.current, i = t.last, s = t.value;
        return new gf(s, r - i);
      }));
    });
  };
}
var gf = /* @__PURE__ */ function() {
  function n(e, t) {
    this.value = e, this.interval = t;
  }
  return n;
}();
function Bo(n, e, t) {
  return t === void 0 && (t = ae), function(r) {
    var i = Lo(n), s = i ? +n - t.now() : Math.abs(n);
    return r.lift(new vf(s, i, e, t));
  };
}
var vf = /* @__PURE__ */ function() {
  function n(e, t, r, i) {
    this.waitFor = e, this.absoluteTimeout = t, this.withObservable = r, this.scheduler = i;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new yf(e, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
  }, n;
}(), yf = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i, s, o) {
    var a = n.call(this, t) || this;
    return a.absoluteTimeout = r, a.waitFor = i, a.withObservable = s, a.scheduler = o, a.scheduleTimeout(), a;
  }
  return e.dispatchTimeout = function(t) {
    var r = t.withObservable;
    t._unsubscribeAndRecycle(), t.add($(r, new B(t)));
  }, e.prototype.scheduleTimeout = function() {
    var t = this.action;
    t ? this.action = t.schedule(this, this.waitFor) : this.add(this.action = this.scheduler.schedule(e.dispatchTimeout, this.waitFor, this));
  }, e.prototype._next = function(t) {
    this.absoluteTimeout || this.scheduleTimeout(), n.prototype._next.call(this, t);
  }, e.prototype._unsubscribe = function() {
    this.action = void 0, this.scheduler = null, this.withObservable = null;
  }, e;
}(V);
function mf(n, e) {
  return e === void 0 && (e = ae), Bo(n, pi(new bo()), e);
}
function _f(n) {
  return n === void 0 && (n = ae), _e(function(e) {
    return new wf(e, n.now());
  });
}
var wf = /* @__PURE__ */ function() {
  function n(e, t) {
    this.value = e, this.timestamp = t;
  }
  return n;
}();
function Sf(n, e, t) {
  return t === 0 ? [e] : (n.push(e), n);
}
function xf() {
  return Qn(Sf, []);
}
function Ef(n) {
  return function(t) {
    return t.lift(new Cf(n));
  };
}
var Cf = /* @__PURE__ */ function() {
  function n(e) {
    this.windowBoundaries = e;
  }
  return n.prototype.call = function(e, t) {
    var r = new kf(e), i = t.subscribe(r);
    return i.closed || r.add($(this.windowBoundaries, new B(r))), i;
  }, n;
}(), kf = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t) {
    var r = n.call(this, t) || this;
    return r.window = new Y(), t.next(r.window), r;
  }
  return e.prototype.notifyNext = function() {
    this.openWindow();
  }, e.prototype.notifyError = function(t) {
    this._error(t);
  }, e.prototype.notifyComplete = function() {
    this._complete();
  }, e.prototype._next = function(t) {
    this.window.next(t);
  }, e.prototype._error = function(t) {
    this.window.error(t), this.destination.error(t);
  }, e.prototype._complete = function() {
    this.window.complete(), this.destination.complete();
  }, e.prototype._unsubscribe = function() {
    this.window = null;
  }, e.prototype.openWindow = function() {
    var t = this.window;
    t && t.complete();
    var r = this.destination, i = this.window = new Y();
    r.next(i);
  }, e;
}(V);
function Mf(n, e) {
  return e === void 0 && (e = 0), function(r) {
    return r.lift(new If(n, e));
  };
}
var If = /* @__PURE__ */ function() {
  function n(e, t) {
    this.windowSize = e, this.startWindowEvery = t;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new Af(e, this.windowSize, this.startWindowEvery));
  }, n;
}(), Af = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i) {
    var s = n.call(this, t) || this;
    return s.destination = t, s.windowSize = r, s.startWindowEvery = i, s.windows = [new Y()], s.count = 0, t.next(s.windows[0]), s;
  }
  return e.prototype._next = function(t) {
    for (var r = this.startWindowEvery > 0 ? this.startWindowEvery : this.windowSize, i = this.destination, s = this.windowSize, o = this.windows, a = o.length, c = 0; c < a && !this.closed; c++)
      o[c].next(t);
    var l = this.count - s + 1;
    if (l >= 0 && l % r === 0 && !this.closed && o.shift().complete(), ++this.count % r === 0 && !this.closed) {
      var u = new Y();
      o.push(u), i.next(u);
    }
  }, e.prototype._error = function(t) {
    var r = this.windows;
    if (r)
      for (; r.length > 0 && !this.closed; )
        r.shift().error(t);
    this.destination.error(t);
  }, e.prototype._complete = function() {
    var t = this.windows;
    if (t)
      for (; t.length > 0 && !this.closed; )
        t.shift().complete();
    this.destination.complete();
  }, e.prototype._unsubscribe = function() {
    this.count = 0, this.windows = null;
  }, e;
}(m);
function Nf(n) {
  var e = ae, t = null, r = Number.POSITIVE_INFINITY;
  return he(arguments[3]) && (e = arguments[3]), he(arguments[2]) ? e = arguments[2] : Et(arguments[2]) && (r = Number(arguments[2])), he(arguments[1]) ? e = arguments[1] : Et(arguments[1]) && (t = Number(arguments[1])), function(s) {
    return s.lift(new Tf(n, t, r, e));
  };
}
var Tf = /* @__PURE__ */ function() {
  function n(e, t, r, i) {
    this.windowTimeSpan = e, this.windowCreationInterval = t, this.maxWindowSize = r, this.scheduler = i;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new Rf(e, this.windowTimeSpan, this.windowCreationInterval, this.maxWindowSize, this.scheduler));
  }, n;
}(), Of = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e() {
    var t = n !== null && n.apply(this, arguments) || this;
    return t._numberOfNextedValues = 0, t;
  }
  return e.prototype.next = function(t) {
    this._numberOfNextedValues++, n.prototype.next.call(this, t);
  }, Object.defineProperty(e.prototype, "numberOfNextedValues", {
    get: function() {
      return this._numberOfNextedValues;
    },
    enumerable: !0,
    configurable: !0
  }), e;
}(Y), Rf = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i, s, o) {
    var a = n.call(this, t) || this;
    a.destination = t, a.windowTimeSpan = r, a.windowCreationInterval = i, a.maxWindowSize = s, a.scheduler = o, a.windows = [];
    var c = a.openWindow();
    if (i !== null && i >= 0) {
      var l = { subscriber: a, window: c, context: null }, u = { windowTimeSpan: r, windowCreationInterval: i, subscriber: a, scheduler: o };
      a.add(o.schedule(Vo, r, l)), a.add(o.schedule(Lf, i, u));
    } else {
      var d = { subscriber: a, window: c, windowTimeSpan: r };
      a.add(o.schedule(Df, r, d));
    }
    return a;
  }
  return e.prototype._next = function(t) {
    for (var r = this.windows, i = r.length, s = 0; s < i; s++) {
      var o = r[s];
      o.closed || (o.next(t), o.numberOfNextedValues >= this.maxWindowSize && this.closeWindow(o));
    }
  }, e.prototype._error = function(t) {
    for (var r = this.windows; r.length > 0; )
      r.shift().error(t);
    this.destination.error(t);
  }, e.prototype._complete = function() {
    for (var t = this.windows; t.length > 0; ) {
      var r = t.shift();
      r.closed || r.complete();
    }
    this.destination.complete();
  }, e.prototype.openWindow = function() {
    var t = new Of();
    this.windows.push(t);
    var r = this.destination;
    return r.next(t), t;
  }, e.prototype.closeWindow = function(t) {
    t.complete();
    var r = this.windows;
    r.splice(r.indexOf(t), 1);
  }, e;
}(m);
function Df(n) {
  var e = n.subscriber, t = n.windowTimeSpan, r = n.window;
  r && e.closeWindow(r), n.window = e.openWindow(), this.schedule(n, t);
}
function Lf(n) {
  var e = n.windowTimeSpan, t = n.subscriber, r = n.scheduler, i = n.windowCreationInterval, s = t.openWindow(), o = this, a = { action: o, subscription: null }, c = { subscriber: t, window: s, context: a };
  a.subscription = r.schedule(Vo, e, c), o.add(a.subscription), o.schedule(n, i);
}
function Vo(n) {
  var e = n.subscriber, t = n.window, r = n.context;
  r && r.action && r.subscription && r.action.remove(r.subscription), e.closeWindow(t);
}
function jf(n, e) {
  return function(t) {
    return t.lift(new Pf(n, e));
  };
}
var Pf = /* @__PURE__ */ function() {
  function n(e, t) {
    this.openings = e, this.closingSelector = t;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new Ff(e, this.openings, this.closingSelector));
  }, n;
}(), Ff = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i) {
    var s = n.call(this, t) || this;
    return s.openings = r, s.closingSelector = i, s.contexts = [], s.add(s.openSubscription = We(s, r, r)), s;
  }
  return e.prototype._next = function(t) {
    var r = this.contexts;
    if (r)
      for (var i = r.length, s = 0; s < i; s++)
        r[s].window.next(t);
  }, e.prototype._error = function(t) {
    var r = this.contexts;
    if (this.contexts = null, r)
      for (var i = r.length, s = -1; ++s < i; ) {
        var o = r[s];
        o.window.error(t), o.subscription.unsubscribe();
      }
    n.prototype._error.call(this, t);
  }, e.prototype._complete = function() {
    var t = this.contexts;
    if (this.contexts = null, t)
      for (var r = t.length, i = -1; ++i < r; ) {
        var s = t[i];
        s.window.complete(), s.subscription.unsubscribe();
      }
    n.prototype._complete.call(this);
  }, e.prototype._unsubscribe = function() {
    var t = this.contexts;
    if (this.contexts = null, t)
      for (var r = t.length, i = -1; ++i < r; ) {
        var s = t[i];
        s.window.unsubscribe(), s.subscription.unsubscribe();
      }
  }, e.prototype.notifyNext = function(t, r, i, s, o) {
    if (t === this.openings) {
      var a = void 0;
      try {
        var c = this.closingSelector;
        a = c(r);
      } catch (f) {
        return this.error(f);
      }
      var l = new Y(), u = new F(), d = { window: l, subscription: u };
      this.contexts.push(d);
      var h = We(this, a, d);
      h.closed ? this.closeWindow(this.contexts.length - 1) : (h.context = d, u.add(h)), this.destination.next(l);
    } else
      this.closeWindow(this.contexts.indexOf(t));
  }, e.prototype.notifyError = function(t) {
    this.error(t);
  }, e.prototype.notifyComplete = function(t) {
    t !== this.openSubscription && this.closeWindow(this.contexts.indexOf(t.context));
  }, e.prototype.closeWindow = function(t) {
    if (t !== -1) {
      var r = this.contexts, i = r[t], s = i.window, o = i.subscription;
      r.splice(t, 1), s.complete(), o.unsubscribe();
    }
  }, e;
}(dt);
function Wf(n) {
  return function(t) {
    return t.lift(new Bf(n));
  };
}
var Bf = /* @__PURE__ */ function() {
  function n(e) {
    this.closingSelector = e;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new Vf(e, this.closingSelector));
  }, n;
}(), Vf = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r) {
    var i = n.call(this, t) || this;
    return i.destination = t, i.closingSelector = r, i.openWindow(), i;
  }
  return e.prototype.notifyNext = function(t, r, i, s, o) {
    this.openWindow(o);
  }, e.prototype.notifyError = function(t) {
    this._error(t);
  }, e.prototype.notifyComplete = function(t) {
    this.openWindow(t);
  }, e.prototype._next = function(t) {
    this.window.next(t);
  }, e.prototype._error = function(t) {
    this.window.error(t), this.destination.error(t), this.unsubscribeClosingNotification();
  }, e.prototype._complete = function() {
    this.window.complete(), this.destination.complete(), this.unsubscribeClosingNotification();
  }, e.prototype.unsubscribeClosingNotification = function() {
    this.closingNotification && this.closingNotification.unsubscribe();
  }, e.prototype.openWindow = function(t) {
    t === void 0 && (t = null), t && (this.remove(t), t.unsubscribe());
    var r = this.window;
    r && r.complete();
    var i = this.window = new Y();
    this.destination.next(i);
    var s;
    try {
      var o = this.closingSelector;
      s = o();
    } catch (a) {
      this.destination.error(a), this.window.error(a);
      return;
    }
    this.add(this.closingNotification = We(this, s));
  }, e;
}(dt);
function $f() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n[e] = arguments[e];
  return function(t) {
    var r;
    typeof n[n.length - 1] == "function" && (r = n.pop());
    var i = n;
    return t.lift(new Hf(i, r));
  };
}
var Hf = /* @__PURE__ */ function() {
  function n(e, t) {
    this.observables = e, this.project = t;
  }
  return n.prototype.call = function(e, t) {
    return t.subscribe(new Uf(e, this.observables, this.project));
  }, n;
}(), Uf = /* @__PURE__ */ function(n) {
  p.exports.__extends(e, n);
  function e(t, r, i) {
    var s = n.call(this, t) || this;
    s.observables = r, s.project = i, s.toRespond = [];
    var o = r.length;
    s.values = new Array(o);
    for (var a = 0; a < o; a++)
      s.toRespond.push(a);
    for (var a = 0; a < o; a++) {
      var c = r[a];
      s.add(We(s, c, void 0, a));
    }
    return s;
  }
  return e.prototype.notifyNext = function(t, r, i) {
    this.values[i] = r;
    var s = this.toRespond;
    if (s.length > 0) {
      var o = s.indexOf(i);
      o !== -1 && s.splice(o, 1);
    }
  }, e.prototype.notifyComplete = function() {
  }, e.prototype._next = function(t) {
    if (this.toRespond.length === 0) {
      var r = [t].concat(this.values);
      this.project ? this._tryProject(r) : this.destination.next(r);
    }
  }, e.prototype._tryProject = function(t) {
    var r;
    try {
      r = this.project.apply(this, t);
    } catch (i) {
      this.destination.error(i);
      return;
    }
    this.destination.next(r);
  }, e;
}(dt);
function zf() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n[e] = arguments[e];
  return function(r) {
    return r.lift.call(No.apply(void 0, [r].concat(n)));
  };
}
function qf(n) {
  return function(e) {
    return e.lift(new To(n));
  };
}
const Qf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  audit: Oo,
  auditTime: qu,
  buffer: Qu,
  bufferCount: Yu,
  bufferTime: el,
  bufferToggle: sl,
  bufferWhen: cl,
  catchError: hl,
  combineAll: pl,
  combineLatest: bl,
  concat: gl,
  concatAll: wo,
  concatMap: Do,
  concatMapTo: vl,
  count: yl,
  debounce: wl,
  debounceTime: El,
  defaultIfEmpty: hn,
  delay: Nl,
  delayWhen: Dl,
  dematerialize: Fl,
  distinct: Vl,
  distinctUntilChanged: jo,
  distinctUntilKeyChanged: ql,
  elementAt: Jl,
  endWith: Xl,
  every: eh,
  exhaust: rh,
  exhaustMap: Po,
  expand: ch,
  filter: Xe,
  finalize: hh,
  find: ph,
  findIndex: gh,
  first: vh,
  groupBy: Cc,
  ignoreElements: yh,
  isEmpty: wh,
  last: kh,
  map: _e,
  mapTo: Mh,
  materialize: Nh,
  max: Lh,
  merge: jh,
  mergeAll: vi,
  mergeMap: ut,
  flatMap: vu,
  mergeMapTo: Ph,
  mergeScan: Fh,
  min: Vh,
  multicast: lt,
  observeOn: Lc,
  onErrorResumeNext: Hh,
  pairwise: qh,
  partition: Gh,
  pluck: Yh,
  publish: Jh,
  publishBehavior: Xh,
  publishLast: ed,
  publishReplay: td,
  race: nd,
  reduce: Qn,
  repeat: rd,
  repeatWhen: sd,
  retry: cd,
  retryWhen: hd,
  refCount: di,
  sample: pd,
  sampleTime: vd,
  scan: Rn,
  sequenceEqual: wd,
  share: kd,
  shareReplay: Md,
  single: Ad,
  skip: Od,
  skipLast: Ld,
  skipUntil: Fd,
  skipWhile: Vd,
  startWith: Ud,
  subscribeOn: qd,
  switchAll: Yd,
  switchMap: nn,
  switchMapTo: Kd,
  take: mi,
  takeLast: On,
  takeUntil: Jd,
  takeWhile: tf,
  tap: sf,
  throttle: cf,
  throttleTime: hf,
  throwIfEmpty: qn,
  timeInterval: bf,
  timeout: mf,
  timeoutWith: Bo,
  timestamp: _f,
  toArray: xf,
  window: Ef,
  windowCount: Mf,
  windowTime: Nf,
  windowToggle: jf,
  windowWhen: Wf,
  withLatestFrom: $f,
  zip: zf,
  zipAll: qf
}, Symbol.toStringTag, { value: "Module" })), Zn = /* @__PURE__ */ on(Qf);
var y = {}, _i = typeof Map == "function" && Map.prototype, Er = Object.getOwnPropertyDescriptor && _i ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Dn = _i && Er && typeof Er.get == "function" ? Er.get : null, Zf = _i && Map.prototype.forEach, wi = typeof Set == "function" && Set.prototype, Cr = Object.getOwnPropertyDescriptor && wi ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Ln = wi && Cr && typeof Cr.get == "function" ? Cr.get : null, Gf = wi && Set.prototype.forEach, Yf = typeof WeakMap == "function" && WeakMap.prototype, qt = Yf ? WeakMap.prototype.has : null, Kf = typeof WeakSet == "function" && WeakSet.prototype, Qt = Kf ? WeakSet.prototype.has : null, Jf = typeof WeakRef == "function" && WeakRef.prototype, ns = Jf ? WeakRef.prototype.deref : null, Xf = Boolean.prototype.valueOf, ep = Object.prototype.toString, tp = Function.prototype.toString, np = String.prototype.match, Si = String.prototype.slice, Qe = String.prototype.replace, rp = String.prototype.toUpperCase, rs = String.prototype.toLowerCase, $o = RegExp.prototype.test, is = Array.prototype.concat, Te = Array.prototype.join, ip = Array.prototype.slice, ss = Math.floor, Yr = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, kr = Object.getOwnPropertySymbols, Kr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Ct = typeof Symbol == "function" && typeof Symbol.iterator == "object", ne = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Ct ? "object" : "symbol") ? Symbol.toStringTag : null, Ho = Object.prototype.propertyIsEnumerable, os = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(n) {
  return n.__proto__;
} : null);
function as(n, e) {
  if (n === 1 / 0 || n === -1 / 0 || n !== n || n && n > -1e3 && n < 1e3 || $o.call(/e/, e))
    return e;
  var t = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof n == "number") {
    var r = n < 0 ? -ss(-n) : ss(n);
    if (r !== n) {
      var i = String(r), s = Si.call(e, i.length + 1);
      return Qe.call(i, t, "$&_") + "." + Qe.call(Qe.call(s, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return Qe.call(e, t, "$&_");
}
var Jr = lc, cs = Jr.custom, us = zo(cs) ? cs : null, sp = function n(e, t, r, i) {
  var s = t || {};
  if (Ue(s, "quoteStyle") && s.quoteStyle !== "single" && s.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (Ue(s, "maxStringLength") && (typeof s.maxStringLength == "number" ? s.maxStringLength < 0 && s.maxStringLength !== 1 / 0 : s.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var o = Ue(s, "customInspect") ? s.customInspect : !0;
  if (typeof o != "boolean" && o !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (Ue(s, "indent") && s.indent !== null && s.indent !== "	" && !(parseInt(s.indent, 10) === s.indent && s.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (Ue(s, "numericSeparator") && typeof s.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var a = s.numericSeparator;
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  if (typeof e == "boolean")
    return e ? "true" : "false";
  if (typeof e == "string")
    return Qo(e, s);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var c = String(e);
    return a ? as(e, c) : c;
  }
  if (typeof e == "bigint") {
    var l = String(e) + "n";
    return a ? as(e, l) : l;
  }
  var u = typeof s.depth > "u" ? 5 : s.depth;
  if (typeof r > "u" && (r = 0), r >= u && u > 0 && typeof e == "object")
    return Xr(e) ? "[Array]" : "[Object]";
  var d = xp(s, r);
  if (typeof i > "u")
    i = [];
  else if (qo(i, e) >= 0)
    return "[Circular]";
  function h(ce, we, Se) {
    if (we && (i = ip.call(i), i.push(we)), Se) {
      var nt = {
        depth: s.depth
      };
      return Ue(s, "quoteStyle") && (nt.quoteStyle = s.quoteStyle), n(ce, nt, r + 1, i);
    }
    return n(ce, s, r + 1, i);
  }
  if (typeof e == "function" && !ls(e)) {
    var f = pp(e), b = mn(e, h);
    return "[Function" + (f ? ": " + f : " (anonymous)") + "]" + (b.length > 0 ? " { " + Te.call(b, ", ") + " }" : "");
  }
  if (zo(e)) {
    var w = Ct ? Qe.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Kr.call(e);
    return typeof e == "object" && !Ct ? Bt(w) : w;
  }
  if (_p(e)) {
    for (var v = "<" + rs.call(String(e.nodeName)), g = e.attributes || [], k = 0; k < g.length; k++)
      v += " " + g[k].name + "=" + Uo(op(g[k].value), "double", s);
    return v += ">", e.childNodes && e.childNodes.length && (v += "..."), v += "</" + rs.call(String(e.nodeName)) + ">", v;
  }
  if (Xr(e)) {
    if (e.length === 0)
      return "[]";
    var M = mn(e, h);
    return d && !Sp(M) ? "[" + ei(M, d) + "]" : "[ " + Te.call(M, ", ") + " ]";
  }
  if (cp(e)) {
    var N = mn(e, h);
    return !("cause" in Error.prototype) && "cause" in e && !Ho.call(e, "cause") ? "{ [" + String(e) + "] " + Te.call(is.call("[cause]: " + h(e.cause), N), ", ") + " }" : N.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + Te.call(N, ", ") + " }";
  }
  if (typeof e == "object" && o) {
    if (us && typeof e[us] == "function" && Jr)
      return Jr(e, { depth: u - r });
    if (o !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (bp(e)) {
    var fe = [];
    return Zf.call(e, function(ce, we) {
      fe.push(h(we, e, !0) + " => " + h(ce, e));
    }), hs("Map", Dn.call(e), fe, d);
  }
  if (yp(e)) {
    var W = [];
    return Gf.call(e, function(ce) {
      W.push(h(ce, e));
    }), hs("Set", Ln.call(e), W, d);
  }
  if (gp(e))
    return Mr("WeakMap");
  if (mp(e))
    return Mr("WeakSet");
  if (vp(e))
    return Mr("WeakRef");
  if (lp(e))
    return Bt(h(Number(e)));
  if (dp(e))
    return Bt(h(Yr.call(e)));
  if (hp(e))
    return Bt(Xf.call(e));
  if (up(e))
    return Bt(h(String(e)));
  if (!ap(e) && !ls(e)) {
    var R = mn(e, h), H = os ? os(e) === Object.prototype : e instanceof Object || e.constructor === Object, z = e instanceof Object ? "" : "null prototype", pe = !H && ne && Object(e) === e && ne in e ? Si.call(et(e), 8, -1) : z ? "Object" : "", re = H || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", j = re + (pe || z ? "[" + Te.call(is.call([], pe || [], z || []), ": ") + "] " : "");
    return R.length === 0 ? j + "{}" : d ? j + "{" + ei(R, d) + "}" : j + "{ " + Te.call(R, ", ") + " }";
  }
  return String(e);
};
function Uo(n, e, t) {
  var r = (t.quoteStyle || e) === "double" ? '"' : "'";
  return r + n + r;
}
function op(n) {
  return Qe.call(String(n), /"/g, "&quot;");
}
function Xr(n) {
  return et(n) === "[object Array]" && (!ne || !(typeof n == "object" && ne in n));
}
function ap(n) {
  return et(n) === "[object Date]" && (!ne || !(typeof n == "object" && ne in n));
}
function ls(n) {
  return et(n) === "[object RegExp]" && (!ne || !(typeof n == "object" && ne in n));
}
function cp(n) {
  return et(n) === "[object Error]" && (!ne || !(typeof n == "object" && ne in n));
}
function up(n) {
  return et(n) === "[object String]" && (!ne || !(typeof n == "object" && ne in n));
}
function lp(n) {
  return et(n) === "[object Number]" && (!ne || !(typeof n == "object" && ne in n));
}
function hp(n) {
  return et(n) === "[object Boolean]" && (!ne || !(typeof n == "object" && ne in n));
}
function zo(n) {
  if (Ct)
    return n && typeof n == "object" && n instanceof Symbol;
  if (typeof n == "symbol")
    return !0;
  if (!n || typeof n != "object" || !Kr)
    return !1;
  try {
    return Kr.call(n), !0;
  } catch {
  }
  return !1;
}
function dp(n) {
  if (!n || typeof n != "object" || !Yr)
    return !1;
  try {
    return Yr.call(n), !0;
  } catch {
  }
  return !1;
}
var fp = Object.prototype.hasOwnProperty || function(n) {
  return n in this;
};
function Ue(n, e) {
  return fp.call(n, e);
}
function et(n) {
  return ep.call(n);
}
function pp(n) {
  if (n.name)
    return n.name;
  var e = np.call(tp.call(n), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function qo(n, e) {
  if (n.indexOf)
    return n.indexOf(e);
  for (var t = 0, r = n.length; t < r; t++)
    if (n[t] === e)
      return t;
  return -1;
}
function bp(n) {
  if (!Dn || !n || typeof n != "object")
    return !1;
  try {
    Dn.call(n);
    try {
      Ln.call(n);
    } catch {
      return !0;
    }
    return n instanceof Map;
  } catch {
  }
  return !1;
}
function gp(n) {
  if (!qt || !n || typeof n != "object")
    return !1;
  try {
    qt.call(n, qt);
    try {
      Qt.call(n, Qt);
    } catch {
      return !0;
    }
    return n instanceof WeakMap;
  } catch {
  }
  return !1;
}
function vp(n) {
  if (!ns || !n || typeof n != "object")
    return !1;
  try {
    return ns.call(n), !0;
  } catch {
  }
  return !1;
}
function yp(n) {
  if (!Ln || !n || typeof n != "object")
    return !1;
  try {
    Ln.call(n);
    try {
      Dn.call(n);
    } catch {
      return !0;
    }
    return n instanceof Set;
  } catch {
  }
  return !1;
}
function mp(n) {
  if (!Qt || !n || typeof n != "object")
    return !1;
  try {
    Qt.call(n, Qt);
    try {
      qt.call(n, qt);
    } catch {
      return !0;
    }
    return n instanceof WeakSet;
  } catch {
  }
  return !1;
}
function _p(n) {
  return !n || typeof n != "object" ? !1 : typeof HTMLElement < "u" && n instanceof HTMLElement ? !0 : typeof n.nodeName == "string" && typeof n.getAttribute == "function";
}
function Qo(n, e) {
  if (n.length > e.maxStringLength) {
    var t = n.length - e.maxStringLength, r = "... " + t + " more character" + (t > 1 ? "s" : "");
    return Qo(Si.call(n, 0, e.maxStringLength), e) + r;
  }
  var i = Qe.call(Qe.call(n, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, wp);
  return Uo(i, "single", e);
}
function wp(n) {
  var e = n.charCodeAt(0), t = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return t ? "\\" + t : "\\x" + (e < 16 ? "0" : "") + rp.call(e.toString(16));
}
function Bt(n) {
  return "Object(" + n + ")";
}
function Mr(n) {
  return n + " { ? }";
}
function hs(n, e, t, r) {
  var i = r ? ei(t, r) : Te.call(t, ", ");
  return n + " (" + e + ") {" + i + "}";
}
function Sp(n) {
  for (var e = 0; e < n.length; e++)
    if (qo(n[e], `
`) >= 0)
      return !1;
  return !0;
}
function xp(n, e) {
  var t;
  if (n.indent === "	")
    t = "	";
  else if (typeof n.indent == "number" && n.indent > 0)
    t = Te.call(Array(n.indent + 1), " ");
  else
    return null;
  return {
    base: t,
    prev: Te.call(Array(e + 1), t)
  };
}
function ei(n, e) {
  if (n.length === 0)
    return "";
  var t = `
` + e.prev + e.base;
  return t + Te.call(n, "," + t) + `
` + e.prev;
}
function mn(n, e) {
  var t = Xr(n), r = [];
  if (t) {
    r.length = n.length;
    for (var i = 0; i < n.length; i++)
      r[i] = Ue(n, i) ? e(n[i], n) : "";
  }
  var s = typeof kr == "function" ? kr(n) : [], o;
  if (Ct) {
    o = {};
    for (var a = 0; a < s.length; a++)
      o["$" + s[a]] = s[a];
  }
  for (var c in n)
    !Ue(n, c) || t && String(Number(c)) === c && c < n.length || Ct && o["$" + c] instanceof Symbol || ($o.call(/[^\w$]/, c) ? r.push(e(c, n) + ": " + e(n[c], n)) : r.push(c + ": " + e(n[c], n)));
  if (typeof kr == "function")
    for (var l = 0; l < s.length; l++)
      Ho.call(n, s[l]) && r.push("[" + e(s[l]) + "]: " + e(n[s[l]], n));
  return r;
}
var xi = rc, Pt = ic, Ep = sp, Cp = xi("%TypeError%"), _n = xi("%WeakMap%", !0), wn = xi("%Map%", !0), kp = Pt("WeakMap.prototype.get", !0), Mp = Pt("WeakMap.prototype.set", !0), Ip = Pt("WeakMap.prototype.has", !0), Ap = Pt("Map.prototype.get", !0), Np = Pt("Map.prototype.set", !0), Tp = Pt("Map.prototype.has", !0), Ei = function(n, e) {
  for (var t = n, r; (r = t.next) !== null; t = r)
    if (r.key === e)
      return t.next = r.next, r.next = n.next, n.next = r, r;
}, Op = function(n, e) {
  var t = Ei(n, e);
  return t && t.value;
}, Rp = function(n, e, t) {
  var r = Ei(n, e);
  r ? r.value = t : n.next = {
    key: e,
    next: n.next,
    value: t
  };
}, Dp = function(n, e) {
  return !!Ei(n, e);
}, Lp = function() {
  var e, t, r, i = {
    assert: function(s) {
      if (!i.has(s))
        throw new Cp("Side channel does not contain " + Ep(s));
    },
    get: function(s) {
      if (_n && s && (typeof s == "object" || typeof s == "function")) {
        if (e)
          return kp(e, s);
      } else if (wn) {
        if (t)
          return Ap(t, s);
      } else if (r)
        return Op(r, s);
    },
    has: function(s) {
      if (_n && s && (typeof s == "object" || typeof s == "function")) {
        if (e)
          return Ip(e, s);
      } else if (wn) {
        if (t)
          return Tp(t, s);
      } else if (r)
        return Dp(r, s);
      return !1;
    },
    set: function(s, o) {
      _n && s && (typeof s == "object" || typeof s == "function") ? (e || (e = new _n()), Mp(e, s, o)) : wn ? (t || (t = new wn()), Np(t, s, o)) : (r || (r = { key: {}, next: null }), Rp(r, s, o));
    }
  };
  return i;
}, jp = String.prototype.replace, Pp = /%20/g, Ir = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, Ci = {
  default: Ir.RFC3986,
  formatters: {
    RFC1738: function(n) {
      return jp.call(n, Pp, "+");
    },
    RFC3986: function(n) {
      return String(n);
    }
  },
  RFC1738: Ir.RFC1738,
  RFC3986: Ir.RFC3986
}, Fp = Ci, Ar = Object.prototype.hasOwnProperty, st = Array.isArray, Me = function() {
  for (var n = [], e = 0; e < 256; ++e)
    n.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return n;
}(), Wp = function(e) {
  for (; e.length > 1; ) {
    var t = e.pop(), r = t.obj[t.prop];
    if (st(r)) {
      for (var i = [], s = 0; s < r.length; ++s)
        typeof r[s] < "u" && i.push(r[s]);
      t.obj[t.prop] = i;
    }
  }
}, Zo = function(e, t) {
  for (var r = t && t.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = 0; i < e.length; ++i)
    typeof e[i] < "u" && (r[i] = e[i]);
  return r;
}, Bp = function n(e, t, r) {
  if (!t)
    return e;
  if (typeof t != "object") {
    if (st(e))
      e.push(t);
    else if (e && typeof e == "object")
      (r && (r.plainObjects || r.allowPrototypes) || !Ar.call(Object.prototype, t)) && (e[t] = !0);
    else
      return [e, t];
    return e;
  }
  if (!e || typeof e != "object")
    return [e].concat(t);
  var i = e;
  return st(e) && !st(t) && (i = Zo(e, r)), st(e) && st(t) ? (t.forEach(function(s, o) {
    if (Ar.call(e, o)) {
      var a = e[o];
      a && typeof a == "object" && s && typeof s == "object" ? e[o] = n(a, s, r) : e.push(s);
    } else
      e[o] = s;
  }), e) : Object.keys(t).reduce(function(s, o) {
    var a = t[o];
    return Ar.call(s, o) ? s[o] = n(s[o], a, r) : s[o] = a, s;
  }, i);
}, Vp = function(e, t) {
  return Object.keys(t).reduce(function(r, i) {
    return r[i] = t[i], r;
  }, e);
}, $p = function(n, e, t) {
  var r = n.replace(/\+/g, " ");
  if (t === "iso-8859-1")
    return r.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(r);
  } catch {
    return r;
  }
}, Hp = function(e, t, r, i, s) {
  if (e.length === 0)
    return e;
  var o = e;
  if (typeof e == "symbol" ? o = Symbol.prototype.toString.call(e) : typeof e != "string" && (o = String(e)), r === "iso-8859-1")
    return escape(o).replace(/%u[0-9a-f]{4}/gi, function(u) {
      return "%26%23" + parseInt(u.slice(2), 16) + "%3B";
    });
  for (var a = "", c = 0; c < o.length; ++c) {
    var l = o.charCodeAt(c);
    if (l === 45 || l === 46 || l === 95 || l === 126 || l >= 48 && l <= 57 || l >= 65 && l <= 90 || l >= 97 && l <= 122 || s === Fp.RFC1738 && (l === 40 || l === 41)) {
      a += o.charAt(c);
      continue;
    }
    if (l < 128) {
      a = a + Me[l];
      continue;
    }
    if (l < 2048) {
      a = a + (Me[192 | l >> 6] + Me[128 | l & 63]);
      continue;
    }
    if (l < 55296 || l >= 57344) {
      a = a + (Me[224 | l >> 12] + Me[128 | l >> 6 & 63] + Me[128 | l & 63]);
      continue;
    }
    c += 1, l = 65536 + ((l & 1023) << 10 | o.charCodeAt(c) & 1023), a += Me[240 | l >> 18] + Me[128 | l >> 12 & 63] + Me[128 | l >> 6 & 63] + Me[128 | l & 63];
  }
  return a;
}, Up = function(e) {
  for (var t = [{ obj: { o: e }, prop: "o" }], r = [], i = 0; i < t.length; ++i)
    for (var s = t[i], o = s.obj[s.prop], a = Object.keys(o), c = 0; c < a.length; ++c) {
      var l = a[c], u = o[l];
      typeof u == "object" && u !== null && r.indexOf(u) === -1 && (t.push({ obj: o, prop: l }), r.push(u));
    }
  return Wp(t), e;
}, zp = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, qp = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, Qp = function(e, t) {
  return [].concat(e, t);
}, Zp = function(e, t) {
  if (st(e)) {
    for (var r = [], i = 0; i < e.length; i += 1)
      r.push(t(e[i]));
    return r;
  }
  return t(e);
}, Go = {
  arrayToObject: Zo,
  assign: Vp,
  combine: Qp,
  compact: Up,
  decode: $p,
  encode: Hp,
  isBuffer: qp,
  isRegExp: zp,
  maybeMap: Zp,
  merge: Bp
}, Yo = Lp, ti = Go, Zt = Ci, Gp = Object.prototype.hasOwnProperty, ds = {
  brackets: function(e) {
    return e + "[]";
  },
  comma: "comma",
  indices: function(e, t) {
    return e + "[" + t + "]";
  },
  repeat: function(e) {
    return e;
  }
}, je = Array.isArray, Yp = String.prototype.split, Kp = Array.prototype.push, Ko = function(n, e) {
  Kp.apply(n, je(e) ? e : [e]);
}, Jp = Date.prototype.toISOString, fs = Zt.default, K = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: ti.encode,
  encodeValuesOnly: !1,
  format: fs,
  formatter: Zt.formatters[fs],
  indices: !1,
  serializeDate: function(e) {
    return Jp.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, Xp = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, Nr = {}, e0 = function n(e, t, r, i, s, o, a, c, l, u, d, h, f, b, w, v) {
  for (var g = e, k = v, M = 0, N = !1; (k = k.get(Nr)) !== void 0 && !N; ) {
    var fe = k.get(e);
    if (M += 1, typeof fe < "u") {
      if (fe === M)
        throw new RangeError("Cyclic object value");
      N = !0;
    }
    typeof k.get(Nr) > "u" && (M = 0);
  }
  if (typeof c == "function" ? g = c(t, g) : g instanceof Date ? g = d(g) : r === "comma" && je(g) && (g = ti.maybeMap(g, function(xr) {
    return xr instanceof Date ? d(xr) : xr;
  })), g === null) {
    if (s)
      return a && !b ? a(t, K.encoder, w, "key", h) : t;
    g = "";
  }
  if (Xp(g) || ti.isBuffer(g)) {
    if (a) {
      var W = b ? t : a(t, K.encoder, w, "key", h);
      if (r === "comma" && b) {
        for (var R = Yp.call(String(g), ","), H = "", z = 0; z < R.length; ++z)
          H += (z === 0 ? "" : ",") + f(a(R[z], K.encoder, w, "value", h));
        return [f(W) + (i && je(g) && R.length === 1 ? "[]" : "") + "=" + H];
      }
      return [f(W) + "=" + f(a(g, K.encoder, w, "value", h))];
    }
    return [f(t) + "=" + f(String(g))];
  }
  var pe = [];
  if (typeof g > "u")
    return pe;
  var re;
  if (r === "comma" && je(g))
    re = [{ value: g.length > 0 ? g.join(",") || null : void 0 }];
  else if (je(c))
    re = c;
  else {
    var j = Object.keys(g);
    re = l ? j.sort(l) : j;
  }
  for (var ce = i && je(g) && g.length === 1 ? t + "[]" : t, we = 0; we < re.length; ++we) {
    var Se = re[we], nt = typeof Se == "object" && typeof Se.value < "u" ? Se.value : g[Se];
    if (!(o && nt === null)) {
      var ec = je(g) ? typeof r == "function" ? r(ce, Se) : ce : ce + (u ? "." + Se : "[" + Se + "]");
      v.set(e, M);
      var Hi = Yo();
      Hi.set(Nr, v), Ko(pe, n(
        nt,
        ec,
        r,
        i,
        s,
        o,
        a,
        c,
        l,
        u,
        d,
        h,
        f,
        b,
        w,
        Hi
      ));
    }
  }
  return pe;
}, t0 = function(e) {
  if (!e)
    return K;
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var t = e.charset || K.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = Zt.default;
  if (typeof e.format < "u") {
    if (!Gp.call(Zt.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    r = e.format;
  }
  var i = Zt.formatters[r], s = K.filter;
  return (typeof e.filter == "function" || je(e.filter)) && (s = e.filter), {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : K.addQueryPrefix,
    allowDots: typeof e.allowDots > "u" ? K.allowDots : !!e.allowDots,
    charset: t,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : K.charsetSentinel,
    delimiter: typeof e.delimiter > "u" ? K.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : K.encode,
    encoder: typeof e.encoder == "function" ? e.encoder : K.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : K.encodeValuesOnly,
    filter: s,
    format: r,
    formatter: i,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : K.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : K.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : K.strictNullHandling
  };
}, n0 = function(n, e) {
  var t = n, r = t0(e), i, s;
  typeof r.filter == "function" ? (s = r.filter, t = s("", t)) : je(r.filter) && (s = r.filter, i = s);
  var o = [];
  if (typeof t != "object" || t === null)
    return "";
  var a;
  e && e.arrayFormat in ds ? a = e.arrayFormat : e && "indices" in e ? a = e.indices ? "indices" : "repeat" : a = "indices";
  var c = ds[a];
  if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var l = c === "comma" && e && e.commaRoundTrip;
  i || (i = Object.keys(t)), r.sort && i.sort(r.sort);
  for (var u = Yo(), d = 0; d < i.length; ++d) {
    var h = i[d];
    r.skipNulls && t[h] === null || Ko(o, e0(
      t[h],
      h,
      c,
      l,
      r.strictNullHandling,
      r.skipNulls,
      r.encode ? r.encoder : null,
      r.filter,
      r.sort,
      r.allowDots,
      r.serializeDate,
      r.format,
      r.formatter,
      r.encodeValuesOnly,
      r.charset,
      u
    ));
  }
  var f = o.join(r.delimiter), b = r.addQueryPrefix === !0 ? "?" : "";
  return r.charsetSentinel && (r.charset === "iso-8859-1" ? b += "utf8=%26%2310003%3B&" : b += "utf8=%E2%9C%93&"), f.length > 0 ? b + f : "";
}, kt = Go, ni = Object.prototype.hasOwnProperty, r0 = Array.isArray, Z = {
  allowDots: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: kt.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, i0 = function(n) {
  return n.replace(/&#(\d+);/g, function(e, t) {
    return String.fromCharCode(parseInt(t, 10));
  });
}, Jo = function(n, e) {
  return n && typeof n == "string" && e.comma && n.indexOf(",") > -1 ? n.split(",") : n;
}, s0 = "utf8=%26%2310003%3B", o0 = "utf8=%E2%9C%93", a0 = function(e, t) {
  var r = {}, i = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, s = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, o = i.split(t.delimiter, s), a = -1, c, l = t.charset;
  if (t.charsetSentinel)
    for (c = 0; c < o.length; ++c)
      o[c].indexOf("utf8=") === 0 && (o[c] === o0 ? l = "utf-8" : o[c] === s0 && (l = "iso-8859-1"), a = c, c = o.length);
  for (c = 0; c < o.length; ++c)
    if (c !== a) {
      var u = o[c], d = u.indexOf("]="), h = d === -1 ? u.indexOf("=") : d + 1, f, b;
      h === -1 ? (f = t.decoder(u, Z.decoder, l, "key"), b = t.strictNullHandling ? null : "") : (f = t.decoder(u.slice(0, h), Z.decoder, l, "key"), b = kt.maybeMap(
        Jo(u.slice(h + 1), t),
        function(w) {
          return t.decoder(w, Z.decoder, l, "value");
        }
      )), b && t.interpretNumericEntities && l === "iso-8859-1" && (b = i0(b)), u.indexOf("[]=") > -1 && (b = r0(b) ? [b] : b), ni.call(r, f) ? r[f] = kt.combine(r[f], b) : r[f] = b;
    }
  return r;
}, c0 = function(n, e, t, r) {
  for (var i = r ? e : Jo(e, t), s = n.length - 1; s >= 0; --s) {
    var o, a = n[s];
    if (a === "[]" && t.parseArrays)
      o = [].concat(i);
    else {
      o = t.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var c = a.charAt(0) === "[" && a.charAt(a.length - 1) === "]" ? a.slice(1, -1) : a, l = parseInt(c, 10);
      !t.parseArrays && c === "" ? o = { 0: i } : !isNaN(l) && a !== c && String(l) === c && l >= 0 && t.parseArrays && l <= t.arrayLimit ? (o = [], o[l] = i) : c !== "__proto__" && (o[c] = i);
    }
    i = o;
  }
  return i;
}, u0 = function(e, t, r, i) {
  if (!!e) {
    var s = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, o = /(\[[^[\]]*])/, a = /(\[[^[\]]*])/g, c = r.depth > 0 && o.exec(s), l = c ? s.slice(0, c.index) : s, u = [];
    if (l) {
      if (!r.plainObjects && ni.call(Object.prototype, l) && !r.allowPrototypes)
        return;
      u.push(l);
    }
    for (var d = 0; r.depth > 0 && (c = a.exec(s)) !== null && d < r.depth; ) {
      if (d += 1, !r.plainObjects && ni.call(Object.prototype, c[1].slice(1, -1)) && !r.allowPrototypes)
        return;
      u.push(c[1]);
    }
    return c && u.push("[" + s.slice(c.index) + "]"), c0(u, t, r, i);
  }
}, l0 = function(e) {
  if (!e)
    return Z;
  if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var t = typeof e.charset > "u" ? Z.charset : e.charset;
  return {
    allowDots: typeof e.allowDots > "u" ? Z.allowDots : !!e.allowDots,
    allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : Z.allowPrototypes,
    allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : Z.allowSparse,
    arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : Z.arrayLimit,
    charset: t,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : Z.charsetSentinel,
    comma: typeof e.comma == "boolean" ? e.comma : Z.comma,
    decoder: typeof e.decoder == "function" ? e.decoder : Z.decoder,
    delimiter: typeof e.delimiter == "string" || kt.isRegExp(e.delimiter) ? e.delimiter : Z.delimiter,
    depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : Z.depth,
    ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : Z.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : Z.parameterLimit,
    parseArrays: e.parseArrays !== !1,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : Z.plainObjects,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Z.strictNullHandling
  };
}, h0 = function(n, e) {
  var t = l0(e);
  if (n === "" || n === null || typeof n > "u")
    return t.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var r = typeof n == "string" ? a0(n, t) : n, i = t.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, s = Object.keys(r), o = 0; o < s.length; ++o) {
    var a = s[o], c = u0(a, r[a], t, typeof n == "string");
    i = kt.merge(i, c, t);
  }
  return t.allowSparse === !0 ? i : kt.compact(i);
}, d0 = n0, f0 = h0, p0 = Ci, b0 = {
  formats: p0,
  parse: f0,
  stringify: d0
}, dn = {};
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.ProviderType = n.RegExpString = n.IntNumber = n.BigIntString = n.AddressString = n.HexString = n.OpaqueType = void 0;
  function e() {
    return (r) => r;
  }
  n.OpaqueType = e, n.HexString = e(), n.AddressString = e(), n.BigIntString = e();
  function t(r) {
    return Math.floor(r);
  }
  n.IntNumber = t, n.RegExpString = e(), function(r) {
    r.CoinbaseWallet = "CoinbaseWallet", r.MetaMask = "MetaMask", r.Unselected = "";
  }(n.ProviderType || (n.ProviderType = {}));
})(dn);
var g0 = T && T.__importDefault || function(n) {
  return n && n.__esModule ? n : { default: n };
};
Object.defineProperty(y, "__esModule", { value: !0 });
y.isInIFrame = y.createQrUrl = y.getFavicon = y.range = y.isBigNumber = y.ensureParsedJSONObject = y.ensureBN = y.ensureRegExpString = y.ensureIntNumber = y.ensureBuffer = y.ensureAddressString = y.ensureEvenLengthHexString = y.ensureHexString = y.isHexString = y.prepend0x = y.strip0x = y.has0xPrefix = y.hexStringFromIntNumber = y.intNumberFromHexString = y.bigIntStringFromBN = y.hexStringFromBuffer = y.hexStringToUint8Array = y.uint8ArrayToHex = y.randomBytesHex = void 0;
const qe = g0(Bn.exports), v0 = b0, me = dn, Xo = /^[0-9]*$/, ea = /^[a-f0-9]*$/;
function y0(n) {
  return ta(crypto.getRandomValues(new Uint8Array(n)));
}
y.randomBytesHex = y0;
function ta(n) {
  return [...n].map((e) => e.toString(16).padStart(2, "0")).join("");
}
y.uint8ArrayToHex = ta;
function m0(n) {
  return new Uint8Array(n.match(/.{1,2}/g).map((e) => parseInt(e, 16)));
}
y.hexStringToUint8Array = m0;
function _0(n, e = !1) {
  const t = n.toString("hex");
  return (0, me.HexString)(e ? "0x" + t : t);
}
y.hexStringFromBuffer = _0;
function w0(n) {
  return (0, me.BigIntString)(n.toString(10));
}
y.bigIntStringFromBN = w0;
function S0(n) {
  return (0, me.IntNumber)(new qe.default(pn(n, !1), 16).toNumber());
}
y.intNumberFromHexString = S0;
function x0(n) {
  return (0, me.HexString)("0x" + new qe.default(n).toString(16));
}
y.hexStringFromIntNumber = x0;
function ki(n) {
  return n.startsWith("0x") || n.startsWith("0X");
}
y.has0xPrefix = ki;
function Gn(n) {
  return ki(n) ? n.slice(2) : n;
}
y.strip0x = Gn;
function na(n) {
  return ki(n) ? "0x" + n.slice(2) : "0x" + n;
}
y.prepend0x = na;
function fn(n) {
  if (typeof n != "string")
    return !1;
  const e = Gn(n).toLowerCase();
  return ea.test(e);
}
y.isHexString = fn;
function ra(n, e = !1) {
  if (typeof n == "string") {
    const t = Gn(n).toLowerCase();
    if (ea.test(t))
      return (0, me.HexString)(e ? "0x" + t : t);
  }
  throw new Error(`"${String(n)}" is not a hexadecimal string`);
}
y.ensureHexString = ra;
function pn(n, e = !1) {
  let t = ra(n, !1);
  return t.length % 2 === 1 && (t = (0, me.HexString)("0" + t)), e ? (0, me.HexString)("0x" + t) : t;
}
y.ensureEvenLengthHexString = pn;
function E0(n) {
  if (typeof n == "string") {
    const e = Gn(n).toLowerCase();
    if (fn(e) && e.length === 40)
      return (0, me.AddressString)(na(e));
  }
  throw new Error(`Invalid Ethereum address: ${String(n)}`);
}
y.ensureAddressString = E0;
function C0(n) {
  if (A.Buffer.isBuffer(n))
    return n;
  if (typeof n == "string")
    if (fn(n)) {
      const e = pn(n, !1);
      return A.Buffer.from(e, "hex");
    } else
      return A.Buffer.from(n, "utf8");
  throw new Error(`Not binary data: ${String(n)}`);
}
y.ensureBuffer = C0;
function ia(n) {
  if (typeof n == "number" && Number.isInteger(n))
    return (0, me.IntNumber)(n);
  if (typeof n == "string") {
    if (Xo.test(n))
      return (0, me.IntNumber)(Number(n));
    if (fn(n))
      return (0, me.IntNumber)(new qe.default(pn(n, !1), 16).toNumber());
  }
  throw new Error(`Not an integer: ${String(n)}`);
}
y.ensureIntNumber = ia;
function k0(n) {
  if (n instanceof RegExp)
    return (0, me.RegExpString)(n.toString());
  throw new Error(`Not a RegExp: ${String(n)}`);
}
y.ensureRegExpString = k0;
function M0(n) {
  if (n !== null && (qe.default.isBN(n) || sa(n)))
    return new qe.default(n.toString(10), 10);
  if (typeof n == "number")
    return new qe.default(ia(n));
  if (typeof n == "string") {
    if (Xo.test(n))
      return new qe.default(n, 10);
    if (fn(n))
      return new qe.default(pn(n, !1), 16);
  }
  throw new Error(`Not an integer: ${String(n)}`);
}
y.ensureBN = M0;
function I0(n) {
  if (typeof n == "string")
    return JSON.parse(n);
  if (typeof n == "object")
    return n;
  throw new Error(`Not a JSON string or an object: ${String(n)}`);
}
y.ensureParsedJSONObject = I0;
function sa(n) {
  if (n == null || typeof n.constructor != "function")
    return !1;
  const { constructor: e } = n;
  return typeof e.config == "function" && typeof e.EUCLID == "number";
}
y.isBigNumber = sa;
function A0(n, e) {
  return Array.from({ length: e - n }, (t, r) => n + r);
}
y.range = A0;
function N0() {
  const n = document.querySelector('link[sizes="192x192"]') || document.querySelector('link[sizes="180x180"]') || document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]'), { protocol: e, host: t } = document.location, r = n ? n.getAttribute("href") : null;
  return !r || r.startsWith("javascript:") ? null : r.startsWith("http://") || r.startsWith("https://") || r.startsWith("data:") ? r : r.startsWith("//") ? e + r : `${e}//${t}${r}`;
}
y.getFavicon = N0;
function T0(n, e, t, r, i, s) {
  const o = r ? "parent-id" : "id", a = (0, v0.stringify)({
    [o]: n,
    secret: e,
    server: t,
    v: i,
    chainId: s
  });
  return `${t}/#/link?${a}`;
}
y.createQrUrl = T0;
function O0() {
  try {
    return window.frameElement !== null;
  } catch {
    return !1;
  }
}
y.isInIFrame = O0;
Object.defineProperty(Ot, "__esModule", { value: !0 });
Ot.Session = void 0;
const R0 = jt, ps = Zn, bs = sc.exports, gs = y, Tr = "session:id", vs = "session:secret", ys = "session:linked";
class Mi {
  constructor(e, t, r, i) {
    this._storage = e, this._id = t || (0, gs.randomBytesHex)(16), this._secret = r || (0, gs.randomBytesHex)(32), this._key = new bs.sha256().update(`${this._id}, ${this._secret} WalletLink`).digest("hex"), this._linked = !!i;
  }
  static load(e) {
    const t = e.getItem(Tr), r = e.getItem(ys), i = e.getItem(vs);
    return t && i ? new Mi(e, t, i, r === "1") : null;
  }
  static get persistedSessionIdChange$() {
    return (0, R0.fromEvent)(window, "storage").pipe((0, ps.filter)((e) => e.key === Tr), (0, ps.map)((e) => ({
      oldValue: e.oldValue || null,
      newValue: e.newValue || null
    })));
  }
  static hash(e) {
    return new bs.sha256().update(e).digest("hex");
  }
  get id() {
    return this._id;
  }
  get secret() {
    return this._secret;
  }
  get key() {
    return this._key;
  }
  get linked() {
    return this._linked;
  }
  set linked(e) {
    this._linked = e, this.persistLinked();
  }
  save() {
    return this._storage.setItem(Tr, this._id), this._storage.setItem(vs, this._secret), this.persistLinked(), this;
  }
  persistLinked() {
    this._storage.setItem(ys, this._linked ? "1" : "0");
  }
}
Ot.Session = Mi;
var ke = {};
Object.defineProperty(ke, "__esModule", { value: !0 });
ke.WalletSDKRelayAbstract = ke.APP_VERSION_KEY = ke.LOCAL_STORAGE_ADDRESSES_KEY = ke.WALLET_USER_NAME_KEY = void 0;
const ms = Hn;
ke.WALLET_USER_NAME_KEY = "walletUsername";
ke.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses";
ke.APP_VERSION_KEY = "AppVersion";
class D0 {
  async makeEthereumJSONRPCRequest(e, t) {
    if (!t)
      throw new Error("Error: No jsonRpcUrl provided");
    return window.fetch(t, {
      method: "POST",
      body: JSON.stringify(e),
      mode: "cors",
      headers: { "Content-Type": "application/json" }
    }).then((r) => r.json()).then((r) => {
      if (!r)
        throw ms.ethErrors.rpc.parse({});
      const i = r, { error: s } = i;
      if (s)
        throw (0, ms.serializeError)(s);
      return i;
    });
  }
}
ke.WalletSDKRelayAbstract = D0;
const L0 = oc, j0 = Bn.exports;
function oa(n) {
  return A.Buffer.allocUnsafe(n).fill(0);
}
function aa(n, e, t) {
  const r = oa(e);
  return n = Yn(n), t ? n.length < e ? (n.copy(r), r) : n.slice(0, e) : n.length < e ? (n.copy(r, e - n.length), r) : n.slice(-e);
}
function P0(n, e) {
  return aa(n, e, !0);
}
function Yn(n) {
  if (!A.Buffer.isBuffer(n))
    if (Array.isArray(n))
      n = A.Buffer.from(n);
    else if (typeof n == "string")
      ca(n) ? n = A.Buffer.from(B0(ua(n)), "hex") : n = A.Buffer.from(n);
    else if (typeof n == "number")
      n = intToBuffer(n);
    else if (n == null)
      n = A.Buffer.allocUnsafe(0);
    else if (j0.isBN(n))
      n = n.toArrayLike(A.Buffer);
    else if (n.toArray)
      n = A.Buffer.from(n.toArray());
    else
      throw new Error("invalid type");
  return n;
}
function F0(n) {
  return n = Yn(n), "0x" + n.toString("hex");
}
function W0(n, e) {
  return n = Yn(n), e || (e = 256), L0("keccak" + e).update(n).digest();
}
function B0(n) {
  return n.length % 2 ? "0" + n : n;
}
function ca(n) {
  return typeof n == "string" && n.match(/^0x[0-9A-Fa-f]*$/);
}
function ua(n) {
  return typeof n == "string" && n.startsWith("0x") ? n.slice(2) : n;
}
var la = {
  zeros: oa,
  setLength: aa,
  setLengthRight: P0,
  isHexString: ca,
  stripHexPrefix: ua,
  toBuffer: Yn,
  bufferToHex: F0,
  keccak: W0
};
const ht = la, ct = Bn.exports;
function ha(n) {
  return n.startsWith("int[") ? "int256" + n.slice(3) : n === "int" ? "int256" : n.startsWith("uint[") ? "uint256" + n.slice(4) : n === "uint" ? "uint256" : n.startsWith("fixed[") ? "fixed128x128" + n.slice(5) : n === "fixed" ? "fixed128x128" : n.startsWith("ufixed[") ? "ufixed128x128" + n.slice(6) : n === "ufixed" ? "ufixed128x128" : n;
}
function yt(n) {
  return parseInt(/^\D+(\d+)$/.exec(n)[1], 10);
}
function _s(n) {
  var e = /^\D+(\d+)x(\d+)$/.exec(n);
  return [parseInt(e[1], 10), parseInt(e[2], 10)];
}
function da(n) {
  var e = n.match(/(.*)\[(.*?)\]$/);
  return e ? e[2] === "" ? "dynamic" : parseInt(e[2], 10) : null;
}
function ot(n) {
  var e = typeof n;
  if (e === "string")
    return ht.isHexString(n) ? new ct(ht.stripHexPrefix(n), 16) : new ct(n, 10);
  if (e === "number")
    return new ct(n);
  if (n.toArray)
    return n;
  throw new Error("Argument is not a number");
}
function Ne(n, e) {
  var t, r, i, s;
  if (n === "address")
    return Ne("uint160", ot(e));
  if (n === "bool")
    return Ne("uint8", e ? 1 : 0);
  if (n === "string")
    return Ne("bytes", new A.Buffer(e, "utf8"));
  if ($0(n)) {
    if (typeof e.length > "u")
      throw new Error("Not an array?");
    if (t = da(n), t !== "dynamic" && t !== 0 && e.length > t)
      throw new Error("Elements exceed array size: " + t);
    i = [], n = n.slice(0, n.lastIndexOf("[")), typeof e == "string" && (e = JSON.parse(e));
    for (s in e)
      i.push(Ne(n, e[s]));
    if (t === "dynamic") {
      var o = Ne("uint256", e.length);
      i.unshift(o);
    }
    return A.Buffer.concat(i);
  } else {
    if (n === "bytes")
      return e = new A.Buffer(e), i = A.Buffer.concat([Ne("uint256", e.length), e]), e.length % 32 !== 0 && (i = A.Buffer.concat([i, ht.zeros(32 - e.length % 32)])), i;
    if (n.startsWith("bytes")) {
      if (t = yt(n), t < 1 || t > 32)
        throw new Error("Invalid bytes<N> width: " + t);
      return ht.setLengthRight(e, 32);
    } else if (n.startsWith("uint")) {
      if (t = yt(n), t % 8 || t < 8 || t > 256)
        throw new Error("Invalid uint<N> width: " + t);
      if (r = ot(e), r.bitLength() > t)
        throw new Error("Supplied uint exceeds width: " + t + " vs " + r.bitLength());
      if (r < 0)
        throw new Error("Supplied uint is negative");
      return r.toArrayLike(A.Buffer, "be", 32);
    } else if (n.startsWith("int")) {
      if (t = yt(n), t % 8 || t < 8 || t > 256)
        throw new Error("Invalid int<N> width: " + t);
      if (r = ot(e), r.bitLength() > t)
        throw new Error("Supplied int exceeds width: " + t + " vs " + r.bitLength());
      return r.toTwos(256).toArrayLike(A.Buffer, "be", 32);
    } else if (n.startsWith("ufixed")) {
      if (t = _s(n), r = ot(e), r < 0)
        throw new Error("Supplied ufixed is negative");
      return Ne("uint256", r.mul(new ct(2).pow(new ct(t[1]))));
    } else if (n.startsWith("fixed"))
      return t = _s(n), Ne("int256", ot(e).mul(new ct(2).pow(new ct(t[1]))));
  }
  throw new Error("Unsupported or invalid type: " + n);
}
function V0(n) {
  return n === "string" || n === "bytes" || da(n) === "dynamic";
}
function $0(n) {
  return n.lastIndexOf("]") === n.length - 1;
}
function H0(n, e) {
  var t = [], r = [], i = 32 * n.length;
  for (var s in n) {
    var o = ha(n[s]), a = e[s], c = Ne(o, a);
    V0(o) ? (t.push(Ne("uint256", i)), r.push(c), i += c.length) : t.push(c);
  }
  return A.Buffer.concat(t.concat(r));
}
function fa(n, e) {
  if (n.length !== e.length)
    throw new Error("Number of types are not matching the values");
  for (var t, r, i = [], s = 0; s < n.length; s++) {
    var o = ha(n[s]), a = e[s];
    if (o === "bytes")
      i.push(a);
    else if (o === "string")
      i.push(new A.Buffer(a, "utf8"));
    else if (o === "bool")
      i.push(new A.Buffer(a ? "01" : "00", "hex"));
    else if (o === "address")
      i.push(ht.setLength(a, 20));
    else if (o.startsWith("bytes")) {
      if (t = yt(o), t < 1 || t > 32)
        throw new Error("Invalid bytes<N> width: " + t);
      i.push(ht.setLengthRight(a, t));
    } else if (o.startsWith("uint")) {
      if (t = yt(o), t % 8 || t < 8 || t > 256)
        throw new Error("Invalid uint<N> width: " + t);
      if (r = ot(a), r.bitLength() > t)
        throw new Error("Supplied uint exceeds width: " + t + " vs " + r.bitLength());
      i.push(r.toArrayLike(A.Buffer, "be", t / 8));
    } else if (o.startsWith("int")) {
      if (t = yt(o), t % 8 || t < 8 || t > 256)
        throw new Error("Invalid int<N> width: " + t);
      if (r = ot(a), r.bitLength() > t)
        throw new Error("Supplied int exceeds width: " + t + " vs " + r.bitLength());
      i.push(r.toTwos(t).toArrayLike(A.Buffer, "be", t / 8));
    } else
      throw new Error("Unsupported or invalid type: " + o);
  }
  return A.Buffer.concat(i);
}
function U0(n, e) {
  return ht.keccak(fa(n, e));
}
var z0 = {
  rawEncode: H0,
  solidityPack: fa,
  soliditySHA3: U0
};
const Ee = la, Gt = z0, pa = {
  type: "object",
  properties: {
    types: {
      type: "object",
      additionalProperties: {
        type: "array",
        items: {
          type: "object",
          properties: {
            name: { type: "string" },
            type: { type: "string" }
          },
          required: ["name", "type"]
        }
      }
    },
    primaryType: { type: "string" },
    domain: { type: "object" },
    message: { type: "object" }
  },
  required: ["types", "primaryType", "domain", "message"]
}, Or = {
  encodeData(n, e, t, r = !0) {
    const i = ["bytes32"], s = [this.hashType(n, t)];
    if (r) {
      const o = (a, c, l) => {
        if (t[c] !== void 0)
          return ["bytes32", l == null ? "0x0000000000000000000000000000000000000000000000000000000000000000" : Ee.keccak(this.encodeData(c, l, t, r))];
        if (l === void 0)
          throw new Error(`missing value for field ${a} of type ${c}`);
        if (c === "bytes")
          return ["bytes32", Ee.keccak(l)];
        if (c === "string")
          return typeof l == "string" && (l = A.Buffer.from(l, "utf8")), ["bytes32", Ee.keccak(l)];
        if (c.lastIndexOf("]") === c.length - 1) {
          const u = c.slice(0, c.lastIndexOf("[")), d = l.map((h) => o(a, u, h));
          return ["bytes32", Ee.keccak(Gt.rawEncode(
            d.map(([h]) => h),
            d.map(([, h]) => h)
          ))];
        }
        return [c, l];
      };
      for (const a of t[n]) {
        const [c, l] = o(a.name, a.type, e[a.name]);
        i.push(c), s.push(l);
      }
    } else
      for (const o of t[n]) {
        let a = e[o.name];
        if (a !== void 0)
          if (o.type === "bytes")
            i.push("bytes32"), a = Ee.keccak(a), s.push(a);
          else if (o.type === "string")
            i.push("bytes32"), typeof a == "string" && (a = A.Buffer.from(a, "utf8")), a = Ee.keccak(a), s.push(a);
          else if (t[o.type] !== void 0)
            i.push("bytes32"), a = Ee.keccak(this.encodeData(o.type, a, t, r)), s.push(a);
          else {
            if (o.type.lastIndexOf("]") === o.type.length - 1)
              throw new Error("Arrays currently unimplemented in encodeData");
            i.push(o.type), s.push(a);
          }
      }
    return Gt.rawEncode(i, s);
  },
  encodeType(n, e) {
    let t = "", r = this.findTypeDependencies(n, e).filter((i) => i !== n);
    r = [n].concat(r.sort());
    for (const i of r) {
      if (!e[i])
        throw new Error("No type definition specified: " + i);
      t += i + "(" + e[i].map(({ name: o, type: a }) => a + " " + o).join(",") + ")";
    }
    return t;
  },
  findTypeDependencies(n, e, t = []) {
    if (n = n.match(/^\w*/)[0], t.includes(n) || e[n] === void 0)
      return t;
    t.push(n);
    for (const r of e[n])
      for (const i of this.findTypeDependencies(r.type, e, t))
        !t.includes(i) && t.push(i);
    return t;
  },
  hashStruct(n, e, t, r = !0) {
    return Ee.keccak(this.encodeData(n, e, t, r));
  },
  hashType(n, e) {
    return Ee.keccak(this.encodeType(n, e));
  },
  sanitizeData(n) {
    const e = {};
    for (const t in pa.properties)
      n[t] && (e[t] = n[t]);
    return e.types && (e.types = Object.assign({ EIP712Domain: [] }, e.types)), e;
  },
  hash(n, e = !0) {
    const t = this.sanitizeData(n), r = [A.Buffer.from("1901", "hex")];
    return r.push(this.hashStruct("EIP712Domain", t.domain, t.types, e)), t.primaryType !== "EIP712Domain" && r.push(this.hashStruct(t.primaryType, t.message, t.types, e)), Ee.keccak(A.Buffer.concat(r));
  }
};
var q0 = {
  TYPED_MESSAGE_SCHEMA: pa,
  TypedDataUtils: Or,
  hashForSignTypedDataLegacy: function(n) {
    return Q0(n.data);
  },
  hashForSignTypedData_v3: function(n) {
    return Or.hash(n.data, !1);
  },
  hashForSignTypedData_v4: function(n) {
    return Or.hash(n.data);
  }
};
function Q0(n) {
  const e = new Error("Expect argument to be non-empty array");
  if (typeof n != "object" || !n.length)
    throw e;
  const t = n.map(function(s) {
    return s.type === "bytes" ? Ee.toBuffer(s.value) : s.value;
  }), r = n.map(function(s) {
    return s.type;
  }), i = n.map(function(s) {
    if (!s.name)
      throw e;
    return s.type + " " + s.name;
  });
  return Gt.soliditySHA3(
    ["bytes32", "bytes32"],
    [
      Gt.soliditySHA3(new Array(n.length).fill("string"), i),
      Gt.soliditySHA3(r, t)
    ]
  );
}
var Mt = {};
Object.defineProperty(Mt, "__esModule", { value: !0 });
Mt.filterFromParam = Mt.FilterPolyfill = void 0;
const bt = dn, se = y, Z0 = 5 * 60 * 1e3, at = {
  jsonrpc: "2.0",
  id: 0
};
class G0 {
  constructor(e) {
    this.logFilters = /* @__PURE__ */ new Map(), this.blockFilters = /* @__PURE__ */ new Set(), this.pendingTransactionFilters = /* @__PURE__ */ new Set(), this.cursors = /* @__PURE__ */ new Map(), this.timeouts = /* @__PURE__ */ new Map(), this.nextFilterId = (0, bt.IntNumber)(1), this.provider = e;
  }
  async newFilter(e) {
    const t = ba(e), r = this.makeFilterId(), i = await this.setInitialCursorPosition(r, t.fromBlock);
    return console.log(`Installing new log filter(${r}):`, t, "initial cursor position:", i), this.logFilters.set(r, t), this.setFilterTimeout(r), (0, se.hexStringFromIntNumber)(r);
  }
  async newBlockFilter() {
    const e = this.makeFilterId(), t = await this.setInitialCursorPosition(e, "latest");
    return console.log(`Installing new block filter (${e}) with initial cursor position:`, t), this.blockFilters.add(e), this.setFilterTimeout(e), (0, se.hexStringFromIntNumber)(e);
  }
  async newPendingTransactionFilter() {
    const e = this.makeFilterId(), t = await this.setInitialCursorPosition(e, "latest");
    return console.log(`Installing new block filter (${e}) with initial cursor position:`, t), this.pendingTransactionFilters.add(e), this.setFilterTimeout(e), (0, se.hexStringFromIntNumber)(e);
  }
  uninstallFilter(e) {
    const t = (0, se.intNumberFromHexString)(e);
    return console.log(`Uninstalling filter (${t})`), this.deleteFilter(t), !0;
  }
  getFilterChanges(e) {
    const t = (0, se.intNumberFromHexString)(e);
    return this.timeouts.has(t) && this.setFilterTimeout(t), this.logFilters.has(t) ? this.getLogFilterChanges(t) : this.blockFilters.has(t) ? this.getBlockFilterChanges(t) : this.pendingTransactionFilters.has(t) ? this.getPendingTransactionFilterChanges(t) : Promise.resolve(Sn());
  }
  async getFilterLogs(e) {
    const t = (0, se.intNumberFromHexString)(e), r = this.logFilters.get(t);
    return r ? this.sendAsyncPromise(Object.assign(Object.assign({}, at), { method: "eth_getLogs", params: [ws(r)] })) : Sn();
  }
  makeFilterId() {
    return (0, bt.IntNumber)(++this.nextFilterId);
  }
  sendAsyncPromise(e) {
    return new Promise((t, r) => {
      this.provider.sendAsync(e, (i, s) => {
        if (i)
          return r(i);
        if (Array.isArray(s) || s == null)
          return r(new Error(`unexpected response received: ${JSON.stringify(s)}`));
        t(s);
      });
    });
  }
  deleteFilter(e) {
    console.log(`Deleting filter (${e})`), this.logFilters.delete(e), this.blockFilters.delete(e), this.pendingTransactionFilters.delete(e), this.cursors.delete(e), this.timeouts.delete(e);
  }
  async getLogFilterChanges(e) {
    const t = this.logFilters.get(e), r = this.cursors.get(e);
    if (!r || !t)
      return Sn();
    const i = await this.getCurrentBlockHeight(), s = t.toBlock === "latest" ? i : t.toBlock;
    if (r > i || r > t.toBlock)
      return xn();
    console.log(`Fetching logs from ${r} to ${s} for filter ${e}`);
    const o = await this.sendAsyncPromise(Object.assign(Object.assign({}, at), { method: "eth_getLogs", params: [
      ws(Object.assign(Object.assign({}, t), { fromBlock: r, toBlock: s }))
    ] }));
    if (Array.isArray(o.result)) {
      const a = o.result.map((l) => (0, se.intNumberFromHexString)(l.blockNumber || "0x0")), c = Math.max(...a);
      if (c && c > r) {
        const l = (0, bt.IntNumber)(c + 1);
        console.log(`Moving cursor position for filter (${e}) from ${r} to ${l}`), this.cursors.set(e, l);
      }
    }
    return o;
  }
  async getBlockFilterChanges(e) {
    const t = this.cursors.get(e);
    if (!t)
      return Sn();
    const r = await this.getCurrentBlockHeight();
    if (t > r)
      return xn();
    console.log(`Fetching blocks from ${t} to ${r} for filter (${e})`);
    const i = (await Promise.all(
      (0, se.range)(t, r + 1).map((o) => this.getBlockHashByNumber((0, bt.IntNumber)(o)))
    )).filter((o) => !!o), s = (0, bt.IntNumber)(t + i.length);
    return console.log(`Moving cursor position for filter (${e}) from ${t} to ${s}`), this.cursors.set(e, s), Object.assign(Object.assign({}, at), { result: i });
  }
  async getPendingTransactionFilterChanges(e) {
    return Promise.resolve(xn());
  }
  async setInitialCursorPosition(e, t) {
    const r = await this.getCurrentBlockHeight(), i = typeof t == "number" && t > r ? t : r;
    return this.cursors.set(e, i), i;
  }
  setFilterTimeout(e) {
    const t = this.timeouts.get(e);
    t && window.clearTimeout(t);
    const r = window.setTimeout(() => {
      console.log(`Filter (${e}) timed out`), this.deleteFilter(e);
    }, Z0);
    this.timeouts.set(e, r);
  }
  async getCurrentBlockHeight() {
    const { result: e } = await this.sendAsyncPromise(Object.assign(Object.assign({}, at), { method: "eth_blockNumber", params: [] }));
    return (0, se.intNumberFromHexString)((0, se.ensureHexString)(e));
  }
  async getBlockHashByNumber(e) {
    const t = await this.sendAsyncPromise(Object.assign(Object.assign({}, at), { method: "eth_getBlockByNumber", params: [(0, se.hexStringFromIntNumber)(e), !1] }));
    return t.result && typeof t.result.hash == "string" ? (0, se.ensureHexString)(t.result.hash) : null;
  }
}
Mt.FilterPolyfill = G0;
function ba(n) {
  return {
    fromBlock: Ss(n.fromBlock),
    toBlock: Ss(n.toBlock),
    addresses: n.address === void 0 ? null : Array.isArray(n.address) ? n.address : [n.address],
    topics: n.topics || []
  };
}
Mt.filterFromParam = ba;
function ws(n) {
  const e = {
    fromBlock: xs(n.fromBlock),
    toBlock: xs(n.toBlock),
    topics: n.topics
  };
  return n.addresses !== null && (e.address = n.addresses), e;
}
function Ss(n) {
  if (n === void 0 || n === "latest" || n === "pending")
    return "latest";
  if (n === "earliest")
    return (0, bt.IntNumber)(0);
  if ((0, se.isHexString)(n))
    return (0, se.intNumberFromHexString)(n);
  throw new Error(`Invalid block option: ${String(n)}`);
}
function xs(n) {
  return n === "latest" ? n : (0, se.hexStringFromIntNumber)(n);
}
function Sn() {
  return Object.assign(Object.assign({}, at), { error: { code: -32e3, message: "filter not found" } });
}
function xn() {
  return Object.assign(Object.assign({}, at), { result: [] });
}
var ga = {};
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.JSONRPCMethod = void 0, function(e) {
    e.eth_accounts = "eth_accounts", e.eth_coinbase = "eth_coinbase", e.net_version = "net_version", e.eth_chainId = "eth_chainId", e.eth_uninstallFilter = "eth_uninstallFilter", e.eth_requestAccounts = "eth_requestAccounts", e.eth_sign = "eth_sign", e.eth_ecRecover = "eth_ecRecover", e.personal_sign = "personal_sign", e.personal_ecRecover = "personal_ecRecover", e.eth_signTransaction = "eth_signTransaction", e.eth_sendRawTransaction = "eth_sendRawTransaction", e.eth_sendTransaction = "eth_sendTransaction", e.eth_signTypedData_v1 = "eth_signTypedData_v1", e.eth_signTypedData_v2 = "eth_signTypedData_v2", e.eth_signTypedData_v3 = "eth_signTypedData_v3", e.eth_signTypedData_v4 = "eth_signTypedData_v4", e.eth_signTypedData = "eth_signTypedData", e.cbWallet_arbitrary = "walletlink_arbitrary", e.wallet_addEthereumChain = "wallet_addEthereumChain", e.wallet_switchEthereumChain = "wallet_switchEthereumChain", e.wallet_watchAsset = "wallet_watchAsset", e.eth_subscribe = "eth_subscribe", e.eth_unsubscribe = "eth_unsubscribe", e.eth_newFilter = "eth_newFilter", e.eth_newBlockFilter = "eth_newBlockFilter", e.eth_newPendingTransactionFilter = "eth_newPendingTransactionFilter", e.eth_getFilterChanges = "eth_getFilterChanges", e.eth_getFilterLogs = "eth_getFilterLogs";
  }(n.JSONRPCMethod || (n.JSONRPCMethod = {}));
})(ga);
var Kn = {};
Object.defineProperty(Kn, "__esModule", { value: !0 });
Kn.SubscriptionManager = void 0;
const Y0 = ac, K0 = cc, Es = () => {
};
class J0 {
  constructor(e) {
    const t = new Y0({
      provider: e,
      pollingInterval: 15e3,
      setSkipCacheFlag: !0
    }), { events: r, middleware: i } = K0({
      blockTracker: t,
      provider: e
    });
    this.events = r, this.subscriptionMiddleware = i;
  }
  async handleRequest(e) {
    const t = {};
    return await this.subscriptionMiddleware(e, t, Es, Es), t;
  }
  destroy() {
    this.subscriptionMiddleware.destroy();
  }
}
Kn.SubscriptionManager = J0;
var Ii = T && T.__importDefault || function(n) {
  return n && n.__esModule ? n : { default: n };
};
Object.defineProperty(_t, "__esModule", { value: !0 });
_t.CoinbaseWalletProvider = void 0;
const X0 = Ii(uc), eb = Ii(Bn.exports), ee = Hn, Rr = Tt, Cs = Ot, ks = ke, x = y, Dr = Ii(q0), tb = Mt, I = ga, nb = Kn, Ms = "DefaultChainId", Is = "DefaultJsonRpcUrl";
class rb extends X0.default {
  constructor(e) {
    var t, r;
    super(), this._filterPolyfill = new tb.FilterPolyfill(this), this._subscriptionManager = new nb.SubscriptionManager(this), this._relay = null, this._addresses = [], this.hasMadeFirstChainChangedEmission = !1, this._send = this.send.bind(this), this._sendAsync = this.sendAsync.bind(this), this.setProviderInfo = this.setProviderInfo.bind(this), this.updateProviderInfo = this.updateProviderInfo.bind(this), this.getChainId = this.getChainId.bind(this), this.setAppInfo = this.setAppInfo.bind(this), this.enable = this.enable.bind(this), this.close = this.close.bind(this), this.send = this.send.bind(this), this.sendAsync = this.sendAsync.bind(this), this.request = this.request.bind(this), this._setAddresses = this._setAddresses.bind(this), this.scanQRCode = this.scanQRCode.bind(this), this.genericRequest = this.genericRequest.bind(this), this._chainIdFromOpts = e.chainId, this._jsonRpcUrlFromOpts = e.jsonRpcUrl, this._overrideIsMetaMask = e.overrideIsMetaMask, this._relayProvider = e.relayProvider, this._storage = e.storage, this._relayEventManager = e.relayEventManager, this.diagnostic = e.diagnosticLogger, this.reloadOnDisconnect = !0, this.isCoinbaseWallet = (t = e.overrideIsCoinbaseWallet) !== null && t !== void 0 ? t : !0, this.isCoinbaseBrowser = (r = e.overrideIsCoinbaseBrowser) !== null && r !== void 0 ? r : !1, this.qrUrl = e.qrUrl, this.supportsAddressSwitching = e.supportsAddressSwitching, this.isLedger = e.isLedger;
    const i = this.getChainId(), s = (0, x.prepend0x)(i.toString(16));
    this.emit("connect", { chainIdStr: s });
    const o = this._storage.getItem(ks.LOCAL_STORAGE_ADDRESSES_KEY);
    if (o) {
      const a = o.split(" ");
      a[0] !== "" && (this._addresses = a.map((c) => (0, x.ensureAddressString)(c)), this.emit("accountsChanged", a));
    }
    this._subscriptionManager.events.on("notification", (a) => {
      this.emit("message", {
        type: a.method,
        data: a.params
      });
    }), this._addresses.length > 0 && this.initializeRelay(), window.addEventListener("message", (a) => {
      var c;
      if (!(a.origin !== location.origin || a.source !== window) && a.data.type === "walletLinkMessage") {
        if (a.data.data.action === "defaultChainChanged" || a.data.data.action === "dappChainSwitched") {
          const l = a.data.data.chainId, u = (c = a.data.data.jsonRpcUrl) !== null && c !== void 0 ? c : this.jsonRpcUrl;
          this.updateProviderInfo(u, Number(l));
        }
        a.data.data.action === "addressChanged" && this._setAddresses([a.data.data.address]);
      }
    });
  }
  get selectedAddress() {
    return this._addresses[0] || void 0;
  }
  get networkVersion() {
    return this.getChainId().toString(10);
  }
  get chainId() {
    return (0, x.prepend0x)(this.getChainId().toString(16));
  }
  get isWalletLink() {
    return !0;
  }
  get isMetaMask() {
    return this._overrideIsMetaMask;
  }
  get host() {
    return this.jsonRpcUrl;
  }
  get connected() {
    return !0;
  }
  isConnected() {
    return !0;
  }
  get jsonRpcUrl() {
    var e;
    return (e = this._storage.getItem(Is)) !== null && e !== void 0 ? e : this._jsonRpcUrlFromOpts;
  }
  set jsonRpcUrl(e) {
    this._storage.setItem(Is, e);
  }
  disableReloadOnDisconnect() {
    this.reloadOnDisconnect = !1;
  }
  setProviderInfo(e, t) {
    this.isLedger || this.isCoinbaseBrowser || (this._chainIdFromOpts = t, this._jsonRpcUrlFromOpts = e), this.updateProviderInfo(this.jsonRpcUrl, this.getChainId());
  }
  updateProviderInfo(e, t) {
    this.jsonRpcUrl = e;
    const r = this.getChainId();
    this._storage.setItem(Ms, t.toString(10)), ((0, x.ensureIntNumber)(t) !== r || !this.hasMadeFirstChainChangedEmission) && (this.emit("chainChanged", this.getChainId()), this.hasMadeFirstChainChangedEmission = !0);
  }
  async watchAsset(e, t, r, i, s, o) {
    return !!(await (await this.initializeRelay()).watchAsset(e, t, r, i, s, o == null ? void 0 : o.toString()).promise).result;
  }
  async addEthereumChain(e, t, r, i, s, o) {
    var a, c;
    if ((0, x.ensureIntNumber)(e) === this.getChainId())
      return !1;
    const l = await this.initializeRelay(), u = l.inlineAddEthereumChain(e.toString());
    !this._isAuthorized() && !u && await l.requestEthereumAccounts().promise;
    const d = await l.addEthereumChain(e.toString(), t, s, r, i, o).promise;
    return ((a = d.result) === null || a === void 0 ? void 0 : a.isApproved) === !0 && this.updateProviderInfo(t[0], e), ((c = d.result) === null || c === void 0 ? void 0 : c.isApproved) === !0;
  }
  async switchEthereumChain(e) {
    const r = await (await this.initializeRelay()).switchEthereumChain(e.toString(10), this.selectedAddress || void 0).promise;
    if (r.errorCode)
      throw ee.ethErrors.provider.custom({
        code: r.errorCode
      });
    const i = r.result;
    i.isApproved && i.rpcUrl.length > 0 && this.updateProviderInfo(i.rpcUrl, e);
  }
  setAppInfo(e, t) {
    this.initializeRelay().then((r) => r.setAppInfo(e, t));
  }
  async enable() {
    var e;
    return (e = this.diagnostic) === null || e === void 0 || e.log(Rr.EVENTS.ETH_ACCOUNTS_STATE, {
      method: "provider::enable",
      addresses_length: this._addresses.length,
      sessionIdHash: this._relay ? Cs.Session.hash(this._relay.session.id) : void 0
    }), this._addresses.length > 0 ? [...this._addresses] : await this._send(I.JSONRPCMethod.eth_requestAccounts);
  }
  async close() {
    (await this.initializeRelay()).resetAndReload();
  }
  send(e, t) {
    if (typeof e == "string") {
      const i = e, s = Array.isArray(t) ? t : t !== void 0 ? [t] : [], o = {
        jsonrpc: "2.0",
        id: 0,
        method: i,
        params: s
      };
      return this._sendRequestAsync(o).then((a) => a.result);
    }
    if (typeof t == "function") {
      const i = e, s = t;
      return this._sendAsync(i, s);
    }
    if (Array.isArray(e))
      return e.map((s) => this._sendRequest(s));
    const r = e;
    return this._sendRequest(r);
  }
  async sendAsync(e, t) {
    if (typeof t != "function")
      throw new Error("callback is required");
    if (Array.isArray(e)) {
      const i = t;
      this._sendMultipleRequestsAsync(e).then((s) => i(null, s)).catch((s) => i(s, null));
      return;
    }
    const r = t;
    return this._sendRequestAsync(e).then((i) => r(null, i)).catch((i) => r(i, null));
  }
  async request(e) {
    if (!e || typeof e != "object" || Array.isArray(e))
      throw ee.ethErrors.rpc.invalidRequest({
        message: "Expected a single, non-array, object argument.",
        data: e
      });
    const { method: t, params: r } = e;
    if (typeof t != "string" || t.length === 0)
      throw ee.ethErrors.rpc.invalidRequest({
        message: "'args.method' must be a non-empty string.",
        data: e
      });
    if (r !== void 0 && !Array.isArray(r) && (typeof r != "object" || r === null))
      throw ee.ethErrors.rpc.invalidRequest({
        message: "'args.params' must be an object or array if provided.",
        data: e
      });
    const i = r === void 0 ? [] : r, s = this._relayEventManager.makeRequestId();
    return (await this._sendRequestAsync({
      method: t,
      params: i,
      jsonrpc: "2.0",
      id: s
    })).result;
  }
  async scanQRCode(e) {
    const r = await (await this.initializeRelay()).scanQRCode((0, x.ensureRegExpString)(e)).promise;
    if (typeof r.result != "string")
      throw new Error("result was not a string");
    return r.result;
  }
  async genericRequest(e, t) {
    const i = await (await this.initializeRelay()).genericRequest(e, t).promise;
    if (typeof i.result != "string")
      throw new Error("result was not a string");
    return i.result;
  }
  async selectProvider(e) {
    const r = await (await this.initializeRelay()).selectProvider(e).promise;
    if (typeof r.result != "string")
      throw new Error("result was not a string");
    return r.result;
  }
  supportsSubscriptions() {
    return !1;
  }
  subscribe() {
    throw new Error("Subscriptions are not supported");
  }
  unsubscribe() {
    throw new Error("Subscriptions are not supported");
  }
  disconnect() {
    return !0;
  }
  _sendRequest(e) {
    const t = {
      jsonrpc: "2.0",
      id: e.id
    }, { method: r } = e;
    if (t.result = this._handleSynchronousMethods(e), t.result === void 0)
      throw new Error(`Coinbase Wallet does not support calling ${r} synchronously without a callback. Please provide a callback parameter to call ${r} asynchronously.`);
    return t;
  }
  _setAddresses(e, t) {
    if (!Array.isArray(e))
      throw new Error("addresses is not an array");
    const r = e.map((i) => (0, x.ensureAddressString)(i));
    JSON.stringify(r) !== JSON.stringify(this._addresses) && (this._addresses.length > 0 && this.supportsAddressSwitching === !1 && !t || (this._addresses = r, this.emit("accountsChanged", this._addresses), this._storage.setItem(ks.LOCAL_STORAGE_ADDRESSES_KEY, r.join(" "))));
  }
  _sendRequestAsync(e) {
    return new Promise((t, r) => {
      try {
        const i = this._handleSynchronousMethods(e);
        if (i !== void 0)
          return t({
            jsonrpc: "2.0",
            id: e.id,
            result: i
          });
        const s = this._handleAsynchronousFilterMethods(e);
        if (s !== void 0) {
          s.then((a) => t(Object.assign(Object.assign({}, a), { id: e.id }))).catch((a) => r(a));
          return;
        }
        const o = this._handleSubscriptionMethods(e);
        if (o !== void 0) {
          o.then((a) => t({
            jsonrpc: "2.0",
            id: e.id,
            result: a.result
          })).catch((a) => r(a));
          return;
        }
      } catch (i) {
        return r(i);
      }
      this._handleAsynchronousMethods(e).then((i) => i && t(Object.assign(Object.assign({}, i), { id: e.id }))).catch((i) => r(i));
    });
  }
  _sendMultipleRequestsAsync(e) {
    return Promise.all(e.map((t) => this._sendRequestAsync(t)));
  }
  _handleSynchronousMethods(e) {
    const { method: t } = e, r = e.params || [];
    switch (t) {
      case I.JSONRPCMethod.eth_accounts:
        return this._eth_accounts();
      case I.JSONRPCMethod.eth_coinbase:
        return this._eth_coinbase();
      case I.JSONRPCMethod.eth_uninstallFilter:
        return this._eth_uninstallFilter(r);
      case I.JSONRPCMethod.net_version:
        return this._net_version();
      case I.JSONRPCMethod.eth_chainId:
        return this._eth_chainId();
      default:
        return;
    }
  }
  async _handleAsynchronousMethods(e) {
    const { method: t } = e, r = e.params || [];
    switch (t) {
      case I.JSONRPCMethod.eth_requestAccounts:
        return this._eth_requestAccounts();
      case I.JSONRPCMethod.eth_sign:
        return this._eth_sign(r);
      case I.JSONRPCMethod.eth_ecRecover:
        return this._eth_ecRecover(r);
      case I.JSONRPCMethod.personal_sign:
        return this._personal_sign(r);
      case I.JSONRPCMethod.personal_ecRecover:
        return this._personal_ecRecover(r);
      case I.JSONRPCMethod.eth_signTransaction:
        return this._eth_signTransaction(r);
      case I.JSONRPCMethod.eth_sendRawTransaction:
        return this._eth_sendRawTransaction(r);
      case I.JSONRPCMethod.eth_sendTransaction:
        return this._eth_sendTransaction(r);
      case I.JSONRPCMethod.eth_signTypedData_v1:
        return this._eth_signTypedData_v1(r);
      case I.JSONRPCMethod.eth_signTypedData_v2:
        return this._throwUnsupportedMethodError();
      case I.JSONRPCMethod.eth_signTypedData_v3:
        return this._eth_signTypedData_v3(r);
      case I.JSONRPCMethod.eth_signTypedData_v4:
      case I.JSONRPCMethod.eth_signTypedData:
        return this._eth_signTypedData_v4(r);
      case I.JSONRPCMethod.cbWallet_arbitrary:
        return this._cbwallet_arbitrary(r);
      case I.JSONRPCMethod.wallet_addEthereumChain:
        return this._wallet_addEthereumChain(r);
      case I.JSONRPCMethod.wallet_switchEthereumChain:
        return this._wallet_switchEthereumChain(r);
      case I.JSONRPCMethod.wallet_watchAsset:
        return this._wallet_watchAsset(r);
    }
    return (await this.initializeRelay()).makeEthereumJSONRPCRequest(e, this.jsonRpcUrl);
  }
  _handleAsynchronousFilterMethods(e) {
    const { method: t } = e, r = e.params || [];
    switch (t) {
      case I.JSONRPCMethod.eth_newFilter:
        return this._eth_newFilter(r);
      case I.JSONRPCMethod.eth_newBlockFilter:
        return this._eth_newBlockFilter();
      case I.JSONRPCMethod.eth_newPendingTransactionFilter:
        return this._eth_newPendingTransactionFilter();
      case I.JSONRPCMethod.eth_getFilterChanges:
        return this._eth_getFilterChanges(r);
      case I.JSONRPCMethod.eth_getFilterLogs:
        return this._eth_getFilterLogs(r);
    }
  }
  _handleSubscriptionMethods(e) {
    switch (e.method) {
      case I.JSONRPCMethod.eth_subscribe:
      case I.JSONRPCMethod.eth_unsubscribe:
        return this._subscriptionManager.handleRequest(e);
    }
  }
  _isKnownAddress(e) {
    try {
      const t = (0, x.ensureAddressString)(e);
      return this._addresses.map((i) => (0, x.ensureAddressString)(i)).includes(t);
    } catch {
    }
    return !1;
  }
  _ensureKnownAddress(e) {
    var t;
    if (!this._isKnownAddress(e))
      throw (t = this.diagnostic) === null || t === void 0 || t.log(Rr.EVENTS.UNKNOWN_ADDRESS_ENCOUNTERED), new Error("Unknown Ethereum address");
  }
  _prepareTransactionParams(e) {
    const t = e.from ? (0, x.ensureAddressString)(e.from) : this.selectedAddress;
    if (!t)
      throw new Error("Ethereum address is unavailable");
    this._ensureKnownAddress(t);
    const r = e.to ? (0, x.ensureAddressString)(e.to) : null, i = e.value != null ? (0, x.ensureBN)(e.value) : new eb.default(0), s = e.data ? (0, x.ensureBuffer)(e.data) : A.Buffer.alloc(0), o = e.nonce != null ? (0, x.ensureIntNumber)(e.nonce) : null, a = e.gasPrice != null ? (0, x.ensureBN)(e.gasPrice) : null, c = e.maxFeePerGas != null ? (0, x.ensureBN)(e.maxFeePerGas) : null, l = e.maxPriorityFeePerGas != null ? (0, x.ensureBN)(e.maxPriorityFeePerGas) : null, u = e.gas != null ? (0, x.ensureBN)(e.gas) : null, d = this.getChainId();
    return {
      fromAddress: t,
      toAddress: r,
      weiValue: i,
      data: s,
      nonce: o,
      gasPriceInWei: a,
      maxFeePerGas: c,
      maxPriorityFeePerGas: l,
      gasLimit: u,
      chainId: d
    };
  }
  _isAuthorized() {
    return this._addresses.length > 0;
  }
  _requireAuthorization() {
    if (!this._isAuthorized())
      throw ee.ethErrors.provider.unauthorized({});
  }
  _throwUnsupportedMethodError() {
    throw ee.ethErrors.provider.unsupportedMethod({});
  }
  async _signEthereumMessage(e, t, r, i) {
    this._ensureKnownAddress(t);
    try {
      const o = await (await this.initializeRelay()).signEthereumMessage(e, t, r, i).promise;
      return { jsonrpc: "2.0", id: 0, result: o.result };
    } catch (s) {
      throw typeof s.message == "string" && s.message.match(/(denied|rejected)/i) ? ee.ethErrors.provider.userRejectedRequest("User denied message signature") : s;
    }
  }
  async _ethereumAddressFromSignedMessage(e, t, r) {
    const s = await (await this.initializeRelay()).ethereumAddressFromSignedMessage(e, t, r).promise;
    return { jsonrpc: "2.0", id: 0, result: s.result };
  }
  _eth_accounts() {
    return [...this._addresses];
  }
  _eth_coinbase() {
    return this.selectedAddress || null;
  }
  _net_version() {
    return this.getChainId().toString(10);
  }
  _eth_chainId() {
    return (0, x.hexStringFromIntNumber)(this.getChainId());
  }
  getChainId() {
    const e = this._storage.getItem(Ms);
    if (!e)
      return (0, x.ensureIntNumber)(this._chainIdFromOpts);
    const t = parseInt(e, 10);
    return (0, x.ensureIntNumber)(t);
  }
  async _eth_requestAccounts() {
    var e;
    if ((e = this.diagnostic) === null || e === void 0 || e.log(Rr.EVENTS.ETH_ACCOUNTS_STATE, {
      method: "provider::_eth_requestAccounts",
      addresses_length: this._addresses.length,
      sessionIdHash: this._relay ? Cs.Session.hash(this._relay.session.id) : void 0
    }), this._addresses.length > 0)
      return Promise.resolve({
        jsonrpc: "2.0",
        id: 0,
        result: this._addresses
      });
    let t;
    try {
      t = await (await this.initializeRelay()).requestEthereumAccounts().promise;
    } catch (r) {
      throw typeof r.message == "string" && r.message.match(/(denied|rejected)/i) ? ee.ethErrors.provider.userRejectedRequest("User denied account authorization") : r;
    }
    if (!t.result)
      throw new Error("accounts received is empty");
    return this._setAddresses(t.result), this.isLedger || this.isCoinbaseBrowser || await this.switchEthereumChain(this.getChainId()), { jsonrpc: "2.0", id: 0, result: this._addresses };
  }
  _eth_sign(e) {
    this._requireAuthorization();
    const t = (0, x.ensureAddressString)(e[0]), r = (0, x.ensureBuffer)(e[1]);
    return this._signEthereumMessage(r, t, !1);
  }
  _eth_ecRecover(e) {
    const t = (0, x.ensureBuffer)(e[0]), r = (0, x.ensureBuffer)(e[1]);
    return this._ethereumAddressFromSignedMessage(t, r, !1);
  }
  _personal_sign(e) {
    this._requireAuthorization();
    const t = (0, x.ensureBuffer)(e[0]), r = (0, x.ensureAddressString)(e[1]);
    return this._signEthereumMessage(t, r, !0);
  }
  _personal_ecRecover(e) {
    const t = (0, x.ensureBuffer)(e[0]), r = (0, x.ensureBuffer)(e[1]);
    return this._ethereumAddressFromSignedMessage(t, r, !0);
  }
  async _eth_signTransaction(e) {
    this._requireAuthorization();
    const t = this._prepareTransactionParams(e[0] || {});
    try {
      const i = await (await this.initializeRelay()).signEthereumTransaction(t).promise;
      return { jsonrpc: "2.0", id: 0, result: i.result };
    } catch (r) {
      throw typeof r.message == "string" && r.message.match(/(denied|rejected)/i) ? ee.ethErrors.provider.userRejectedRequest("User denied transaction signature") : r;
    }
  }
  async _eth_sendRawTransaction(e) {
    const t = (0, x.ensureBuffer)(e[0]), i = await (await this.initializeRelay()).submitEthereumTransaction(t, this.getChainId()).promise;
    return { jsonrpc: "2.0", id: 0, result: i.result };
  }
  async _eth_sendTransaction(e) {
    this._requireAuthorization();
    const t = this._prepareTransactionParams(e[0] || {});
    try {
      const i = await (await this.initializeRelay()).signAndSubmitEthereumTransaction(t).promise;
      return { jsonrpc: "2.0", id: 0, result: i.result };
    } catch (r) {
      throw typeof r.message == "string" && r.message.match(/(denied|rejected)/i) ? ee.ethErrors.provider.userRejectedRequest("User denied transaction signature") : r;
    }
  }
  async _eth_signTypedData_v1(e) {
    this._requireAuthorization();
    const t = (0, x.ensureParsedJSONObject)(e[0]), r = (0, x.ensureAddressString)(e[1]);
    this._ensureKnownAddress(r);
    const i = Dr.default.hashForSignTypedDataLegacy({ data: t }), s = JSON.stringify(t, null, 2);
    return this._signEthereumMessage(i, r, !1, s);
  }
  async _eth_signTypedData_v3(e) {
    this._requireAuthorization();
    const t = (0, x.ensureAddressString)(e[0]), r = (0, x.ensureParsedJSONObject)(e[1]);
    this._ensureKnownAddress(t);
    const i = Dr.default.hashForSignTypedData_v3({ data: r }), s = JSON.stringify(r, null, 2);
    return this._signEthereumMessage(i, t, !1, s);
  }
  async _eth_signTypedData_v4(e) {
    this._requireAuthorization();
    const t = (0, x.ensureAddressString)(e[0]), r = (0, x.ensureParsedJSONObject)(e[1]);
    this._ensureKnownAddress(t);
    const i = Dr.default.hashForSignTypedData_v4({ data: r }), s = JSON.stringify(r, null, 2);
    return this._signEthereumMessage(i, t, !1, s);
  }
  async _cbwallet_arbitrary(e) {
    const t = e[0], r = e[1];
    if (typeof r != "string")
      throw new Error("parameter must be a string");
    if (typeof t != "object" || t === null)
      throw new Error("parameter must be an object");
    const i = await this.genericRequest(t, r);
    return { jsonrpc: "2.0", id: 0, result: i };
  }
  async _wallet_addEthereumChain(e) {
    var t, r, i, s;
    const o = e[0];
    if (((t = o.rpcUrls) === null || t === void 0 ? void 0 : t.length) === 0)
      return {
        jsonrpc: "2.0",
        id: 0,
        error: { code: 2, message: "please pass in at least 1 rpcUrl" }
      };
    if (!o.chainName || o.chainName.trim() === "")
      throw ee.ethErrors.provider.custom({
        code: 0,
        message: "chainName is a required field"
      });
    if (!o.nativeCurrency)
      throw ee.ethErrors.provider.custom({
        code: 0,
        message: "nativeCurrency is a required field"
      });
    const a = parseInt(o.chainId, 16);
    return await this.addEthereumChain(a, (r = o.rpcUrls) !== null && r !== void 0 ? r : [], (i = o.blockExplorerUrls) !== null && i !== void 0 ? i : [], o.chainName, (s = o.iconUrls) !== null && s !== void 0 ? s : [], o.nativeCurrency) ? { jsonrpc: "2.0", id: 0, result: null } : {
      jsonrpc: "2.0",
      id: 0,
      error: { code: 2, message: "unable to add ethereum chain" }
    };
  }
  async _wallet_switchEthereumChain(e) {
    const t = e[0];
    return await this.switchEthereumChain(parseInt(t.chainId, 16)), { jsonrpc: "2.0", id: 0, result: null };
  }
  async _wallet_watchAsset(e) {
    const t = Array.isArray(e) ? e[0] : e;
    if (!t.type)
      throw ee.ethErrors.rpc.invalidParams({
        message: "Type is required"
      });
    if ((t == null ? void 0 : t.type) !== "ERC20")
      throw ee.ethErrors.rpc.invalidParams({
        message: `Asset of type '${t.type}' is not supported`
      });
    if (!(t != null && t.options))
      throw ee.ethErrors.rpc.invalidParams({
        message: "Options are required"
      });
    if (!(t != null && t.options.address))
      throw ee.ethErrors.rpc.invalidParams({
        message: "Address is required"
      });
    const r = this.getChainId(), { address: i, symbol: s, image: o, decimals: a } = t.options, c = await this.watchAsset(t.type, i, s, a, o, r);
    return { jsonrpc: "2.0", id: 0, result: c };
  }
  _eth_uninstallFilter(e) {
    const t = (0, x.ensureHexString)(e[0]);
    return this._filterPolyfill.uninstallFilter(t);
  }
  async _eth_newFilter(e) {
    const t = e[0], r = await this._filterPolyfill.newFilter(t);
    return { jsonrpc: "2.0", id: 0, result: r };
  }
  async _eth_newBlockFilter() {
    const e = await this._filterPolyfill.newBlockFilter();
    return { jsonrpc: "2.0", id: 0, result: e };
  }
  async _eth_newPendingTransactionFilter() {
    const e = await this._filterPolyfill.newPendingTransactionFilter();
    return { jsonrpc: "2.0", id: 0, result: e };
  }
  _eth_getFilterChanges(e) {
    const t = (0, x.ensureHexString)(e[0]);
    return this._filterPolyfill.getFilterChanges(t);
  }
  _eth_getFilterLogs(e) {
    const t = (0, x.ensureHexString)(e[0]);
    return this._filterPolyfill.getFilterLogs(t);
  }
  initializeRelay() {
    return this._relay ? Promise.resolve(this._relay) : this._relayProvider().then((e) => (e.setAccountsCallback((t, r) => this._setAddresses(t, r)), e.setChainCallback((t, r) => {
      this.updateProviderInfo(r, parseInt(t, 10));
    }), e.setDappDefaultChainCallback(this._chainIdFromOpts), this._relay = e, e));
  }
}
_t.CoinbaseWalletProvider = rb;
var Jn = {}, Xn = {}, bn, S, va, ya, Yt, As, ma, jn = {}, _a = [], ib = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Pe(n, e) {
  for (var t in e)
    n[t] = e[t];
  return n;
}
function wa(n) {
  var e = n.parentNode;
  e && e.removeChild(n);
}
function ri(n, e, t) {
  var r, i, s, o = {};
  for (s in e)
    s == "key" ? r = e[s] : s == "ref" ? i = e[s] : o[s] = e[s];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? bn.call(arguments, 2) : t), typeof n == "function" && n.defaultProps != null)
    for (s in n.defaultProps)
      o[s] === void 0 && (o[s] = n.defaultProps[s]);
  return Kt(n, o, r, i, null);
}
function Kt(n, e, t, r, i) {
  var s = { type: n, props: e, key: t, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++va : i };
  return i == null && S.vnode != null && S.vnode(s), s;
}
function sb() {
  return { current: null };
}
function gn(n) {
  return n.children;
}
function Jt(n, e) {
  this.props = n, this.context = e;
}
function rn(n, e) {
  if (e == null)
    return n.__ ? rn(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var t; e < n.__k.length; e++)
    if ((t = n.__k[e]) != null && t.__e != null)
      return t.__e;
  return typeof n.type == "function" ? rn(n) : null;
}
function Sa(n) {
  var e, t;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, e = 0; e < n.__k.length; e++)
      if ((t = n.__k[e]) != null && t.__e != null) {
        n.__e = n.__c.base = t.__e;
        break;
      }
    return Sa(n);
  }
}
function ii(n) {
  (!n.__d && (n.__d = !0) && Yt.push(n) && !Pn.__r++ || As !== S.debounceRendering) && ((As = S.debounceRendering) || setTimeout)(Pn);
}
function Pn() {
  for (var n; Pn.__r = Yt.length; )
    n = Yt.sort(function(e, t) {
      return e.__v.__b - t.__v.__b;
    }), Yt = [], n.some(function(e) {
      var t, r, i, s, o, a;
      e.__d && (o = (s = (t = e).__v).__e, (a = t.__P) && (r = [], (i = Pe({}, s)).__v = s.__v + 1, Ai(a, s, i, t.__n, a.ownerSVGElement !== void 0, s.__h != null ? [o] : null, r, o == null ? rn(s) : o, s.__h), Ma(r, s), s.__e != o && Sa(s)));
    });
}
function xa(n, e, t, r, i, s, o, a, c, l) {
  var u, d, h, f, b, w, v, g = r && r.__k || _a, k = g.length;
  for (t.__k = [], u = 0; u < e.length; u++)
    if ((f = t.__k[u] = (f = e[u]) == null || typeof f == "boolean" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? Kt(null, f, null, null, f) : Array.isArray(f) ? Kt(gn, { children: f }, null, null, null) : f.__b > 0 ? Kt(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v) : f) != null) {
      if (f.__ = t, f.__b = t.__b + 1, (h = g[u]) === null || h && f.key == h.key && f.type === h.type)
        g[u] = void 0;
      else
        for (d = 0; d < k; d++) {
          if ((h = g[d]) && f.key == h.key && f.type === h.type) {
            g[d] = void 0;
            break;
          }
          h = null;
        }
      Ai(n, f, h = h || jn, i, s, o, a, c, l), b = f.__e, (d = f.ref) && h.ref != d && (v || (v = []), h.ref && v.push(h.ref, null, f), v.push(d, f.__c || b, f)), b != null ? (w == null && (w = b), typeof f.type == "function" && f.__k === h.__k ? f.__d = c = Ea(f, c, n) : c = ka(n, f, h, g, b, c), typeof t.type == "function" && (t.__d = c)) : c && h.__e == c && c.parentNode != n && (c = rn(h));
    }
  for (t.__e = w, u = k; u--; )
    g[u] != null && Aa(g[u], g[u]);
  if (v)
    for (u = 0; u < v.length; u++)
      Ia(v[u], v[++u], v[++u]);
}
function Ea(n, e, t) {
  for (var r, i = n.__k, s = 0; i && s < i.length; s++)
    (r = i[s]) && (r.__ = n, e = typeof r.type == "function" ? Ea(r, e, t) : ka(t, r, r, i, r.__e, e));
  return e;
}
function Ca(n, e) {
  return e = e || [], n == null || typeof n == "boolean" || (Array.isArray(n) ? n.some(function(t) {
    Ca(t, e);
  }) : e.push(n)), e;
}
function ka(n, e, t, r, i, s) {
  var o, a, c;
  if (e.__d !== void 0)
    o = e.__d, e.__d = void 0;
  else if (t == null || i != s || i.parentNode == null)
    e:
      if (s == null || s.parentNode !== n)
        n.appendChild(i), o = null;
      else {
        for (a = s, c = 0; (a = a.nextSibling) && c < r.length; c += 1)
          if (a == i)
            break e;
        n.insertBefore(i, s), o = s;
      }
  return o !== void 0 ? o : i.nextSibling;
}
function ob(n, e, t, r, i) {
  var s;
  for (s in t)
    s === "children" || s === "key" || s in e || Fn(n, s, null, t[s], r);
  for (s in e)
    i && typeof e[s] != "function" || s === "children" || s === "key" || s === "value" || s === "checked" || t[s] === e[s] || Fn(n, s, e[s], t[s], r);
}
function Ns(n, e, t) {
  e[0] === "-" ? n.setProperty(e, t) : n[e] = t == null ? "" : typeof t != "number" || ib.test(e) ? t : t + "px";
}
function Fn(n, e, t, r, i) {
  var s;
  e:
    if (e === "style")
      if (typeof t == "string")
        n.style.cssText = t;
      else {
        if (typeof r == "string" && (n.style.cssText = r = ""), r)
          for (e in r)
            t && e in t || Ns(n.style, e, "");
        if (t)
          for (e in t)
            r && t[e] === r[e] || Ns(n.style, e, t[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      s = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in n ? e.toLowerCase().slice(2) : e.slice(2), n.l || (n.l = {}), n.l[e + s] = t, t ? r || n.addEventListener(e, s ? Os : Ts, s) : n.removeEventListener(e, s ? Os : Ts, s);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in n)
        try {
          n[e] = t == null ? "" : t;
          break e;
        } catch {
        }
      typeof t == "function" || (t == null || t === !1 && e.indexOf("-") == -1 ? n.removeAttribute(e) : n.setAttribute(e, t));
    }
}
function Ts(n) {
  this.l[n.type + !1](S.event ? S.event(n) : n);
}
function Os(n) {
  this.l[n.type + !0](S.event ? S.event(n) : n);
}
function Ai(n, e, t, r, i, s, o, a, c) {
  var l, u, d, h, f, b, w, v, g, k, M, N, fe, W, R, H = e.type;
  if (e.constructor !== void 0)
    return null;
  t.__h != null && (c = t.__h, a = e.__e = t.__e, e.__h = null, s = [a]), (l = S.__b) && l(e);
  try {
    e:
      if (typeof H == "function") {
        if (v = e.props, g = (l = H.contextType) && r[l.__c], k = l ? g ? g.props.value : l.__ : r, t.__c ? w = (u = e.__c = t.__c).__ = u.__E : ("prototype" in H && H.prototype.render ? e.__c = u = new H(v, k) : (e.__c = u = new Jt(v, k), u.constructor = H, u.render = cb), g && g.sub(u), u.props = v, u.state || (u.state = {}), u.context = k, u.__n = r, d = u.__d = !0, u.__h = [], u._sb = []), u.__s == null && (u.__s = u.state), H.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = Pe({}, u.__s)), Pe(u.__s, H.getDerivedStateFromProps(v, u.__s))), h = u.props, f = u.state, d)
          H.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if (H.getDerivedStateFromProps == null && v !== h && u.componentWillReceiveProps != null && u.componentWillReceiveProps(v, k), !u.__e && u.shouldComponentUpdate != null && u.shouldComponentUpdate(v, u.__s, k) === !1 || e.__v === t.__v) {
            for (u.props = v, u.state = u.__s, e.__v !== t.__v && (u.__d = !1), u.__v = e, e.__e = t.__e, e.__k = t.__k, e.__k.forEach(function(z) {
              z && (z.__ = e);
            }), M = 0; M < u._sb.length; M++)
              u.__h.push(u._sb[M]);
            u._sb = [], u.__h.length && o.push(u);
            break e;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(v, u.__s, k), u.componentDidUpdate != null && u.__h.push(function() {
            u.componentDidUpdate(h, f, b);
          });
        }
        if (u.context = k, u.props = v, u.__v = e, u.__P = n, N = S.__r, fe = 0, "prototype" in H && H.prototype.render) {
          for (u.state = u.__s, u.__d = !1, N && N(e), l = u.render(u.props, u.state, u.context), W = 0; W < u._sb.length; W++)
            u.__h.push(u._sb[W]);
          u._sb = [];
        } else
          do
            u.__d = !1, N && N(e), l = u.render(u.props, u.state, u.context), u.state = u.__s;
          while (u.__d && ++fe < 25);
        u.state = u.__s, u.getChildContext != null && (r = Pe(Pe({}, r), u.getChildContext())), d || u.getSnapshotBeforeUpdate == null || (b = u.getSnapshotBeforeUpdate(h, f)), R = l != null && l.type === gn && l.key == null ? l.props.children : l, xa(n, Array.isArray(R) ? R : [R], e, t, r, i, s, o, a, c), u.base = e.__e, e.__h = null, u.__h.length && o.push(u), w && (u.__E = u.__ = null), u.__e = !1;
      } else
        s == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = ab(t.__e, e, t, r, i, s, o, c);
    (l = S.diffed) && l(e);
  } catch (z) {
    e.__v = null, (c || s != null) && (e.__e = a, e.__h = !!c, s[s.indexOf(a)] = null), S.__e(z, e, t);
  }
}
function Ma(n, e) {
  S.__c && S.__c(e, n), n.some(function(t) {
    try {
      n = t.__h, t.__h = [], n.some(function(r) {
        r.call(t);
      });
    } catch (r) {
      S.__e(r, t.__v);
    }
  });
}
function ab(n, e, t, r, i, s, o, a) {
  var c, l, u, d = t.props, h = e.props, f = e.type, b = 0;
  if (f === "svg" && (i = !0), s != null) {
    for (; b < s.length; b++)
      if ((c = s[b]) && "setAttribute" in c == !!f && (f ? c.localName === f : c.nodeType === 3)) {
        n = c, s[b] = null;
        break;
      }
  }
  if (n == null) {
    if (f === null)
      return document.createTextNode(h);
    n = i ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, h.is && h), s = null, a = !1;
  }
  if (f === null)
    d === h || a && n.data === h || (n.data = h);
  else {
    if (s = s && bn.call(n.childNodes), l = (d = t.props || jn).dangerouslySetInnerHTML, u = h.dangerouslySetInnerHTML, !a) {
      if (s != null)
        for (d = {}, b = 0; b < n.attributes.length; b++)
          d[n.attributes[b].name] = n.attributes[b].value;
      (u || l) && (u && (l && u.__html == l.__html || u.__html === n.innerHTML) || (n.innerHTML = u && u.__html || ""));
    }
    if (ob(n, h, d, i, a), u)
      e.__k = [];
    else if (b = e.props.children, xa(n, Array.isArray(b) ? b : [b], e, t, r, i && f !== "foreignObject", s, o, s ? s[0] : t.__k && rn(t, 0), a), s != null)
      for (b = s.length; b--; )
        s[b] != null && wa(s[b]);
    a || ("value" in h && (b = h.value) !== void 0 && (b !== n.value || f === "progress" && !b || f === "option" && b !== d.value) && Fn(n, "value", b, d.value, !1), "checked" in h && (b = h.checked) !== void 0 && b !== n.checked && Fn(n, "checked", b, d.checked, !1));
  }
  return n;
}
function Ia(n, e, t) {
  try {
    typeof n == "function" ? n(e) : n.current = e;
  } catch (r) {
    S.__e(r, t);
  }
}
function Aa(n, e, t) {
  var r, i;
  if (S.unmount && S.unmount(n), (r = n.ref) && (r.current && r.current !== n.__e || Ia(r, null, e)), (r = n.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (s) {
        S.__e(s, e);
      }
    r.base = r.__P = null, n.__c = void 0;
  }
  if (r = n.__k)
    for (i = 0; i < r.length; i++)
      r[i] && Aa(r[i], e, t || typeof n.type != "function");
  t || n.__e == null || wa(n.__e), n.__ = n.__e = n.__d = void 0;
}
function cb(n, e, t) {
  return this.constructor(n, t);
}
function Na(n, e, t) {
  var r, i, s;
  S.__ && S.__(n, e), i = (r = typeof t == "function") ? null : t && t.__k || e.__k, s = [], Ai(e, n = (!r && t || e).__k = ri(gn, null, [n]), i || jn, jn, e.ownerSVGElement !== void 0, !r && t ? [t] : i ? null : e.firstChild ? bn.call(e.childNodes) : null, s, !r && t ? t : i ? i.__e : e.firstChild, r), Ma(s, n);
}
function Ta(n, e) {
  Na(n, e, Ta);
}
function ub(n, e, t) {
  var r, i, s, o = Pe({}, n.props);
  for (s in e)
    s == "key" ? r = e[s] : s == "ref" ? i = e[s] : o[s] = e[s];
  return arguments.length > 2 && (o.children = arguments.length > 3 ? bn.call(arguments, 2) : t), Kt(n.type, o, r || n.key, i || n.ref, null);
}
function lb(n, e) {
  var t = { __c: e = "__cC" + ma++, __: n, Consumer: function(r, i) {
    return r.children(i);
  }, Provider: function(r) {
    var i, s;
    return this.getChildContext || (i = [], (s = {})[e] = this, this.getChildContext = function() {
      return s;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value !== o.value && i.some(ii);
    }, this.sub = function(o) {
      i.push(o);
      var a = o.componentWillUnmount;
      o.componentWillUnmount = function() {
        i.splice(i.indexOf(o), 1), a && a.call(o);
      };
    }), r.children;
  } };
  return t.Provider.__ = t.Consumer.contextType = t;
}
bn = _a.slice, S = { __e: function(n, e, t, r) {
  for (var i, s, o; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((s = i.constructor) && s.getDerivedStateFromError != null && (i.setState(s.getDerivedStateFromError(n)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(n, r || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        n = a;
      }
  throw n;
} }, va = 0, ya = function(n) {
  return n != null && n.constructor === void 0;
}, Jt.prototype.setState = function(n, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Pe({}, this.state), typeof n == "function" && (n = n(Pe({}, t), this.props)), n && Pe(t, n), n != null && this.__v && (e && this._sb.push(e), ii(this));
}, Jt.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), ii(this));
}, Jt.prototype.render = gn, Yt = [], Pn.__r = 0, ma = 0;
const hb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Component: Jt,
  Fragment: gn,
  cloneElement: ub,
  createContext: lb,
  createElement: ri,
  createRef: sb,
  h: ri,
  hydrate: Ta,
  get isValidElement() {
    return ya;
  },
  get options() {
    return S;
  },
  render: Na,
  toChildArray: Ca
}, Symbol.toStringTag, { value: "Module" })), de = /* @__PURE__ */ on(hb);
var er = {};
function Oa(n) {
  var e, t, r = "";
  if (typeof n == "string" || typeof n == "number")
    r += n;
  else if (typeof n == "object")
    if (Array.isArray(n))
      for (e = 0; e < n.length; e++)
        n[e] && (t = Oa(n[e])) && (r && (r += " "), r += t);
    else
      for (e in n)
        n[e] && (r && (r += " "), r += e);
  return r;
}
function Rs() {
  for (var n, e, t = 0, r = ""; t < arguments.length; )
    (n = arguments[t++]) && (e = Oa(n)) && (r && (r += " "), r += e);
  return r;
}
const db = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: Rs,
  default: Rs
}, Symbol.toStringTag, { value: "Module" })), tr = /* @__PURE__ */ on(db);
var tt, O, Lr, Ds, It = 0, Ra = [], In = [], Ls = S.__b, js = S.__r, Ps = S.diffed, Fs = S.__c, Ws = S.unmount;
function ft(n, e) {
  S.__h && S.__h(O, n, It || e), It = 0;
  var t = O.__H || (O.__H = { __: [], __h: [] });
  return n >= t.__.length && t.__.push({ __V: In }), t.__[n];
}
function Da(n) {
  return It = 1, La(Pa, n);
}
function La(n, e, t) {
  var r = ft(tt++, 2);
  if (r.t = n, !r.__c && (r.__ = [t ? t(e) : Pa(void 0, e), function(s) {
    var o = r.__N ? r.__N[0] : r.__[0], a = r.t(o, s);
    o !== a && (r.__N = [a, r.__[1]], r.__c.setState({}));
  }], r.__c = O, !O.u)) {
    O.u = !0;
    var i = O.shouldComponentUpdate;
    O.shouldComponentUpdate = function(s, o, a) {
      if (!r.__c.__H)
        return !0;
      var c = r.__c.__H.__.filter(function(u) {
        return u.__c;
      });
      if (c.every(function(u) {
        return !u.__N;
      }))
        return !i || i.call(this, s, o, a);
      var l = !1;
      return c.forEach(function(u) {
        if (u.__N) {
          var d = u.__[0];
          u.__ = u.__N, u.__N = void 0, d !== u.__[0] && (l = !0);
        }
      }), !(!l && r.__c.props === s) && (!i || i.call(this, s, o, a));
    };
  }
  return r.__N || r.__;
}
function fb(n, e) {
  var t = ft(tt++, 3);
  !S.__s && Ti(t.__H, e) && (t.__ = n, t.i = e, O.__H.__h.push(t));
}
function ja(n, e) {
  var t = ft(tt++, 4);
  !S.__s && Ti(t.__H, e) && (t.__ = n, t.i = e, O.__h.push(t));
}
function pb(n) {
  return It = 5, Ni(function() {
    return { current: n };
  }, []);
}
function bb(n, e, t) {
  It = 6, ja(function() {
    return typeof n == "function" ? (n(e()), function() {
      return n(null);
    }) : n ? (n.current = e(), function() {
      return n.current = null;
    }) : void 0;
  }, t == null ? t : t.concat(n));
}
function Ni(n, e) {
  var t = ft(tt++, 7);
  return Ti(t.__H, e) ? (t.__V = n(), t.i = e, t.__h = n, t.__V) : t.__;
}
function gb(n, e) {
  return It = 8, Ni(function() {
    return n;
  }, e);
}
function vb(n) {
  var e = O.context[n.__c], t = ft(tt++, 9);
  return t.c = n, e ? (t.__ == null && (t.__ = !0, e.sub(O)), e.props.value) : n.__;
}
function yb(n, e) {
  S.useDebugValue && S.useDebugValue(e ? e(n) : n);
}
function mb(n) {
  var e = ft(tt++, 10), t = Da();
  return e.__ = n, O.componentDidCatch || (O.componentDidCatch = function(r, i) {
    e.__ && e.__(r, i), t[1](r);
  }), [t[0], function() {
    t[1](void 0);
  }];
}
function _b() {
  var n = ft(tt++, 11);
  if (!n.__) {
    for (var e = O.__v; e !== null && !e.__m && e.__ !== null; )
      e = e.__;
    var t = e.__m || (e.__m = [0, 0]);
    n.__ = "P" + t[0] + "-" + t[1]++;
  }
  return n.__;
}
function wb() {
  for (var n; n = Ra.shift(); )
    if (n.__P && n.__H)
      try {
        n.__H.__h.forEach(An), n.__H.__h.forEach(si), n.__H.__h = [];
      } catch (e) {
        n.__H.__h = [], S.__e(e, n.__v);
      }
}
S.__b = function(n) {
  O = null, Ls && Ls(n);
}, S.__r = function(n) {
  js && js(n), tt = 0;
  var e = (O = n.__c).__H;
  e && (Lr === O ? (e.__h = [], O.__h = [], e.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.__V = In, t.__N = t.i = void 0;
  })) : (e.__h.forEach(An), e.__h.forEach(si), e.__h = [])), Lr = O;
}, S.diffed = function(n) {
  Ps && Ps(n);
  var e = n.__c;
  e && e.__H && (e.__H.__h.length && (Ra.push(e) !== 1 && Ds === S.requestAnimationFrame || ((Ds = S.requestAnimationFrame) || Sb)(wb)), e.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.__V !== In && (t.__ = t.__V), t.i = void 0, t.__V = In;
  })), Lr = O = null;
}, S.__c = function(n, e) {
  e.some(function(t) {
    try {
      t.__h.forEach(An), t.__h = t.__h.filter(function(r) {
        return !r.__ || si(r);
      });
    } catch (r) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], S.__e(r, t.__v);
    }
  }), Fs && Fs(n, e);
}, S.unmount = function(n) {
  Ws && Ws(n);
  var e, t = n.__c;
  t && t.__H && (t.__H.__.forEach(function(r) {
    try {
      An(r);
    } catch (i) {
      e = i;
    }
  }), t.__H = void 0, e && S.__e(e, t.__v));
};
var Bs = typeof requestAnimationFrame == "function";
function Sb(n) {
  var e, t = function() {
    clearTimeout(r), Bs && cancelAnimationFrame(e), setTimeout(n);
  }, r = setTimeout(t, 100);
  Bs && (e = requestAnimationFrame(t));
}
function An(n) {
  var e = O, t = n.__c;
  typeof t == "function" && (n.__c = void 0, t()), O = e;
}
function si(n) {
  var e = O;
  n.__c = n.__(), O = e;
}
function Ti(n, e) {
  return !n || n.length !== e.length || e.some(function(t, r) {
    return t !== n[r];
  });
}
function Pa(n, e) {
  return typeof e == "function" ? e(n) : e;
}
const xb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useCallback: gb,
  useContext: vb,
  useDebugValue: yb,
  useEffect: fb,
  useErrorBoundary: mb,
  useId: _b,
  useImperativeHandle: bb,
  useLayoutEffect: ja,
  useMemo: Ni,
  useReducer: La,
  useRef: pb,
  useState: Da
}, Symbol.toStringTag, { value: "Module" })), vn = /* @__PURE__ */ on(xb);
var Re = {}, nr = {};
Object.defineProperty(nr, "__esModule", { value: !0 });
nr.LIB_VERSION = void 0;
nr.LIB_VERSION = "3.6.2";
var rr = {};
Object.defineProperty(rr, "__esModule", { value: !0 });
rr.CloseIcon = void 0;
const Vs = de;
function Eb(n) {
  return (0, Vs.h)(
    "svg",
    Object.assign({ width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, n),
    (0, Vs.h)("path", { d: "M13.7677 13L12.3535 14.4142L18.3535 20.4142L12.3535 26.4142L13.7677 27.8284L19.7677 21.8284L25.7677 27.8284L27.1819 26.4142L21.1819 20.4142L27.1819 14.4142L25.7677 13L19.7677 19L13.7677 13Z" })
  );
}
rr.CloseIcon = Eb;
var Oi = {};
Object.defineProperty(Oi, "__esModule", { value: !0 });
Oi.default = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTQiIGN5PSIxNCIgcj0iMTQiIGZpbGw9IiMwMDUyRkYiLz48cGF0aCBkPSJNMTQuMDM3IDE4LjkyNmMtMi43NSAwLTQuOTA3LTIuMjA1LTQuOTA3LTQuOTI2IDAtMi43MiAyLjIzLTQuOTI2IDQuOTA3LTQuOTI2YTQuODY2IDQuODY2IDAgMCAxIDQuODMzIDQuMTE4aDQuOTgyYy0uNDQ2LTUuMDczLTQuNjg0LTkuMDQ0LTkuODE1LTkuMDQ0QzguNjEgNC4xNDggNC4xNDkgOC41NiA0LjE0OSAxNHM0LjM4NyA5Ljg1MiA5Ljg5IDkuODUyYzUuMjA0IDAgOS4zNjgtMy45NyA5LjgxNC05LjA0M0gxOC44N2E0Ljg2NiA0Ljg2NiAwIDAgMS00LjgzMyA0LjExN1oiIGZpbGw9IiNmZmYiLz48L3N2Zz4=";
var Ri = {};
Object.defineProperty(Ri, "__esModule", { value: !0 });
Ri.default = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTQiIGN5PSIxNCIgcj0iMTQiIGZpbGw9IiMwMDUyRkYiLz48cGF0aCBkPSJNMjMuODUyIDE0QTkuODM0IDkuODM0IDAgMCAxIDE0IDIzLjg1MiA5LjgzNCA5LjgzNCAwIDAgMSA0LjE0OCAxNCA5LjgzNCA5LjgzNCAwIDAgMSAxNCA0LjE0OCA5LjgzNCA5LjgzNCAwIDAgMSAyMy44NTIgMTRaIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTExLjE4NSAxMi41MDRjMC0uNDU2IDAtLjcxLjA5OC0uODYyLjA5OC0uMTUyLjE5Ni0uMzA0LjM0My0uMzU1LjE5Ni0uMTAyLjM5Mi0uMTAyLjg4MS0uMTAyaDIuOTg2Yy40OSAwIC42ODYgMCAuODgyLjEwMi4xNDYuMTAxLjI5My4yMDMuMzQyLjM1NS4wOTguMjAzLjA5OC40MDYuMDk4Ljg2MnYyLjk5MmMwIC40NTcgMCAuNzEtLjA5OC44NjMtLjA5OC4xNTItLjE5NS4zMDQtLjM0Mi4zNTUtLjE5Ni4xMDEtLjM5Mi4xMDEtLjg4Mi4xMDFoLTIuOTg2Yy0uNDkgMC0uNjg1IDAtLjg4LS4xMDEtLjE0OC0uMTAyLS4yOTUtLjIwMy0uMzQ0LS4zNTUtLjA5OC0uMjAzLS4wOTgtLjQwNi0uMDk4LS44NjN2LTIuOTkyWiIgZmlsbD0iIzAwNTJGRiIvPjwvc3ZnPg==";
var ir = {};
Object.defineProperty(ir, "__esModule", { value: !0 });
ir.QRCodeIcon = void 0;
const Ie = de;
function Cb(n) {
  return (0, Ie.h)(
    "svg",
    Object.assign({ width: "10", height: "10", viewBox: "0 0 10 10", xmlns: "http://www.w3.org/2000/svg" }, n),
    (0, Ie.h)("path", { d: "M8.2271 1.77124L7.0271 1.77124V2.97124H8.2271V1.77124Z" }),
    (0, Ie.h)("path", { d: "M5.44922 0.199219L5.44922 4.54922L9.79922 4.54922V0.199219L5.44922 0.199219ZM8.89922 3.64922L6.34922 3.64922L6.34922 1.09922L8.89922 1.09922V3.64922Z" }),
    (0, Ie.h)("path", { d: "M2.97124 1.77124L1.77124 1.77124L1.77124 2.97124H2.97124V1.77124Z" }),
    (0, Ie.h)("path", { d: "M0.199219 4.54922L4.54922 4.54922L4.54922 0.199219L0.199219 0.199219L0.199219 4.54922ZM1.09922 1.09922L3.64922 1.09922L3.64922 3.64922L1.09922 3.64922L1.09922 1.09922Z" }),
    (0, Ie.h)("path", { d: "M2.97124 7.0271H1.77124L1.77124 8.2271H2.97124V7.0271Z" }),
    (0, Ie.h)("path", { d: "M0.199219 9.79922H4.54922L4.54922 5.44922L0.199219 5.44922L0.199219 9.79922ZM1.09922 6.34922L3.64922 6.34922L3.64922 8.89922H1.09922L1.09922 6.34922Z" }),
    (0, Ie.h)("path", { d: "M8.89922 7.39912H7.99922V5.40112H5.44922L5.44922 9.79912H6.34922L6.34922 6.30112H7.09922V8.29912H9.79922V5.40112H8.89922V7.39912Z" }),
    (0, Ie.h)("path", { d: "M7.99912 8.89917H7.09912V9.79917H7.99912V8.89917Z" }),
    (0, Ie.h)("path", { d: "M9.79917 8.89917H8.89917V9.79917H9.79917V8.89917Z" })
  );
}
ir.QRCodeIcon = Cb;
var Di = {};
Object.defineProperty(Di, "__esModule", { value: !0 });
const kb = `
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z" fill="white"/>
        <path d="M50.512 94C74.2907 94 93.5673 74.5244 93.5673 50.5C93.5673 26.4756 74.2907 7 50.512 7C26.7332 7 7.45667 26.4756 7.45667 50.5C7.45667 74.5244 26.7332 94 50.512 94Z" fill="#0052FF"/>
        <path d="M50.6248 65.4335C42.3697 65.4335 35.8996 58.7469 35.8996 50.5C35.8996 42.2531 42.5928 35.5664 50.6248 35.5664C57.9873 35.5664 64.0111 40.9157 65.1267 48.0481H80.0749C78.7363 32.6688 66.0191 20.6328 50.6248 20.6328C34.3379 20.6328 20.9514 34.0062 20.9514 50.5C20.9514 66.9936 34.1148 80.3671 50.6248 80.3671C66.2422 80.3671 78.7363 68.331 80.0749 52.9516H65.1267C64.0111 60.0841 57.9873 65.4335 50.6248 65.4335Z" fill="white"/>
    </svg>
`;
Di.default = kb;
var Li = {};
Object.defineProperty(Li, "__esModule", { value: !0 });
Li.default = `
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" fill="white"/>
        <circle cx="49.9996" cy="49.9996" r="43.6363" fill="#1B53E4"/>
        <circle cx="49.9996" cy="49.9996" r="43.6363" stroke="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3379 49.9484C19.3379 66.8508 33.04 80.553 49.9425 80.553C66.8449 80.553 80.5471 66.8508 80.5471 49.9484C80.5471 33.0459 66.8449 19.3438 49.9425 19.3438C33.04 19.3438 19.3379 33.0459 19.3379 49.9484ZM44.0817 40.0799C41.8725 40.0799 40.0817 41.8708 40.0817 44.0799V55.8029C40.0817 58.012 41.8725 59.8029 44.0817 59.8029H55.8046C58.0138 59.8029 59.8046 58.012 59.8046 55.8029V44.0799C59.8046 41.8708 58.0138 40.0799 55.8046 40.0799H44.0817Z" fill="white"/>
    </svg>
`;
var sr = {};
Object.defineProperty(sr, "__esModule", { value: !0 });
sr.StatusDotIcon = void 0;
const $s = de;
function Mb(n) {
  return (0, $s.h)(
    "svg",
    Object.assign({ width: "10", height: "10", viewBox: "0 0 10 10", xmlns: "http://www.w3.org/2000/svg" }, n),
    (0, $s.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2.29995 4.99995C2.29995 5.57985 1.82985 6.04995 1.24995 6.04995C0.670052 6.04995 0.199951 5.57985 0.199951 4.99995C0.199951 4.42005 0.670052 3.94995 1.24995 3.94995C1.82985 3.94995 2.29995 4.42005 2.29995 4.99995ZM4.99995 6.04995C5.57985 6.04995 6.04995 5.57985 6.04995 4.99995C6.04995 4.42005 5.57985 3.94995 4.99995 3.94995C4.42005 3.94995 3.94995 4.42005 3.94995 4.99995C3.94995 5.57985 4.42005 6.04995 4.99995 6.04995ZM8.74995 6.04995C9.32985 6.04995 9.79995 5.57985 9.79995 4.99995C9.79995 4.42005 9.32985 3.94995 8.74995 3.94995C8.17005 3.94995 7.69995 4.42005 7.69995 4.99995C7.69995 5.57985 8.17005 6.04995 8.74995 6.04995Z" })
  );
}
sr.StatusDotIcon = Mb;
var or = {};
function Fa(n) {
  this.mode = le.MODE_8BIT_BYTE, this.data = n, this.parsedData = [];
  for (var e = 0, t = this.data.length; e < t; e++) {
    var r = [], i = this.data.charCodeAt(e);
    i > 65536 ? (r[0] = 240 | (i & 1835008) >>> 18, r[1] = 128 | (i & 258048) >>> 12, r[2] = 128 | (i & 4032) >>> 6, r[3] = 128 | i & 63) : i > 2048 ? (r[0] = 224 | (i & 61440) >>> 12, r[1] = 128 | (i & 4032) >>> 6, r[2] = 128 | i & 63) : i > 128 ? (r[0] = 192 | (i & 1984) >>> 6, r[1] = 128 | i & 63) : r[0] = i, this.parsedData.push(r);
  }
  this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239));
}
Fa.prototype = {
  getLength: function(n) {
    return this.parsedData.length;
  },
  write: function(n) {
    for (var e = 0, t = this.parsedData.length; e < t; e++)
      n.put(this.parsedData[e], 8);
  }
};
function De(n, e) {
  this.typeNumber = n, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = [];
}
De.prototype = { addData: function(n) {
  var e = new Fa(n);
  this.dataList.push(e), this.dataCache = null;
}, isDark: function(n, e) {
  if (n < 0 || this.moduleCount <= n || e < 0 || this.moduleCount <= e)
    throw new Error(n + "," + e);
  return this.modules[n][e];
}, getModuleCount: function() {
  return this.moduleCount;
}, make: function() {
  this.makeImpl(!1, this.getBestMaskPattern());
}, makeImpl: function(n, e) {
  this.moduleCount = this.typeNumber * 4 + 17, this.modules = new Array(this.moduleCount);
  for (var t = 0; t < this.moduleCount; t++) {
    this.modules[t] = new Array(this.moduleCount);
    for (var r = 0; r < this.moduleCount; r++)
      this.modules[t][r] = null;
  }
  this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(n, e), this.typeNumber >= 7 && this.setupTypeNumber(n), this.dataCache == null && (this.dataCache = De.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, e);
}, setupPositionProbePattern: function(n, e) {
  for (var t = -1; t <= 7; t++)
    if (!(n + t <= -1 || this.moduleCount <= n + t))
      for (var r = -1; r <= 7; r++)
        e + r <= -1 || this.moduleCount <= e + r || (0 <= t && t <= 6 && (r == 0 || r == 6) || 0 <= r && r <= 6 && (t == 0 || t == 6) || 2 <= t && t <= 4 && 2 <= r && r <= 4 ? this.modules[n + t][e + r] = !0 : this.modules[n + t][e + r] = !1);
}, getBestMaskPattern: function() {
  for (var n = 0, e = 0, t = 0; t < 8; t++) {
    this.makeImpl(!0, t);
    var r = P.getLostPoint(this);
    (t == 0 || n > r) && (n = r, e = t);
  }
  return e;
}, createMovieClip: function(n, e, t) {
  var r = n.createEmptyMovieClip(e, t), i = 1;
  this.make();
  for (var s = 0; s < this.modules.length; s++)
    for (var o = s * i, a = 0; a < this.modules[s].length; a++) {
      var c = a * i, l = this.modules[s][a];
      l && (r.beginFill(0, 100), r.moveTo(c, o), r.lineTo(c + i, o), r.lineTo(c + i, o + i), r.lineTo(c, o + i), r.endFill());
    }
  return r;
}, setupTimingPattern: function() {
  for (var n = 8; n < this.moduleCount - 8; n++)
    this.modules[n][6] == null && (this.modules[n][6] = n % 2 == 0);
  for (var e = 8; e < this.moduleCount - 8; e++)
    this.modules[6][e] == null && (this.modules[6][e] = e % 2 == 0);
}, setupPositionAdjustPattern: function() {
  for (var n = P.getPatternPosition(this.typeNumber), e = 0; e < n.length; e++)
    for (var t = 0; t < n.length; t++) {
      var r = n[e], i = n[t];
      if (this.modules[r][i] == null)
        for (var s = -2; s <= 2; s++)
          for (var o = -2; o <= 2; o++)
            s == -2 || s == 2 || o == -2 || o == 2 || s == 0 && o == 0 ? this.modules[r + s][i + o] = !0 : this.modules[r + s][i + o] = !1;
    }
}, setupTypeNumber: function(n) {
  for (var e = P.getBCHTypeNumber(this.typeNumber), t = 0; t < 18; t++) {
    var r = !n && (e >> t & 1) == 1;
    this.modules[Math.floor(t / 3)][t % 3 + this.moduleCount - 8 - 3] = r;
  }
  for (var t = 0; t < 18; t++) {
    var r = !n && (e >> t & 1) == 1;
    this.modules[t % 3 + this.moduleCount - 8 - 3][Math.floor(t / 3)] = r;
  }
}, setupTypeInfo: function(n, e) {
  for (var t = this.errorCorrectLevel << 3 | e, r = P.getBCHTypeInfo(t), i = 0; i < 15; i++) {
    var s = !n && (r >> i & 1) == 1;
    i < 6 ? this.modules[i][8] = s : i < 8 ? this.modules[i + 1][8] = s : this.modules[this.moduleCount - 15 + i][8] = s;
  }
  for (var i = 0; i < 15; i++) {
    var s = !n && (r >> i & 1) == 1;
    i < 8 ? this.modules[8][this.moduleCount - i - 1] = s : i < 9 ? this.modules[8][15 - i - 1 + 1] = s : this.modules[8][15 - i - 1] = s;
  }
  this.modules[this.moduleCount - 8][8] = !n;
}, mapData: function(n, e) {
  for (var t = -1, r = this.moduleCount - 1, i = 7, s = 0, o = this.moduleCount - 1; o > 0; o -= 2)
    for (o == 6 && o--; ; ) {
      for (var a = 0; a < 2; a++)
        if (this.modules[r][o - a] == null) {
          var c = !1;
          s < n.length && (c = (n[s] >>> i & 1) == 1);
          var l = P.getMask(e, r, o - a);
          l && (c = !c), this.modules[r][o - a] = c, i--, i == -1 && (s++, i = 7);
        }
      if (r += t, r < 0 || this.moduleCount <= r) {
        r -= t, t = -t;
        break;
      }
    }
} };
De.PAD0 = 236;
De.PAD1 = 17;
De.createData = function(n, e, t) {
  for (var r = Oe.getRSBlocks(n, e), i = new Wa(), s = 0; s < t.length; s++) {
    var o = t[s];
    i.put(o.mode, 4), i.put(o.getLength(), P.getLengthInBits(o.mode, n)), o.write(i);
  }
  for (var a = 0, s = 0; s < r.length; s++)
    a += r[s].dataCount;
  if (i.getLengthInBits() > a * 8)
    throw new Error("code length overflow. (" + i.getLengthInBits() + ">" + a * 8 + ")");
  for (i.getLengthInBits() + 4 <= a * 8 && i.put(0, 4); i.getLengthInBits() % 8 != 0; )
    i.putBit(!1);
  for (; !(i.getLengthInBits() >= a * 8 || (i.put(De.PAD0, 8), i.getLengthInBits() >= a * 8)); )
    i.put(De.PAD1, 8);
  return De.createBytes(i, r);
};
De.createBytes = function(n, e) {
  for (var t = 0, r = 0, i = 0, s = new Array(e.length), o = new Array(e.length), a = 0; a < e.length; a++) {
    var c = e[a].dataCount, l = e[a].totalCount - c;
    r = Math.max(r, c), i = Math.max(i, l), s[a] = new Array(c);
    for (var u = 0; u < s[a].length; u++)
      s[a][u] = 255 & n.buffer[u + t];
    t += c;
    var d = P.getErrorCorrectPolynomial(l), h = new mt(s[a], d.getLength() - 1), f = h.mod(d);
    o[a] = new Array(d.getLength() - 1);
    for (var u = 0; u < o[a].length; u++) {
      var b = u + f.getLength() - o[a].length;
      o[a][u] = b >= 0 ? f.get(b) : 0;
    }
  }
  for (var w = 0, u = 0; u < e.length; u++)
    w += e[u].totalCount;
  for (var v = new Array(w), g = 0, u = 0; u < r; u++)
    for (var a = 0; a < e.length; a++)
      u < s[a].length && (v[g++] = s[a][u]);
  for (var u = 0; u < i; u++)
    for (var a = 0; a < e.length; a++)
      u < o[a].length && (v[g++] = o[a][u]);
  return v;
};
var le = { MODE_NUMBER: 1 << 0, MODE_ALPHA_NUM: 1 << 1, MODE_8BIT_BYTE: 1 << 2, MODE_KANJI: 1 << 3 }, Ze = { L: 1, M: 0, Q: 3, H: 2 }, Ve = { PATTERN000: 0, PATTERN001: 1, PATTERN010: 2, PATTERN011: 3, PATTERN100: 4, PATTERN101: 5, PATTERN110: 6, PATTERN111: 7 }, P = { PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0, G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0, G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1, getBCHTypeInfo: function(n) {
  for (var e = n << 10; P.getBCHDigit(e) - P.getBCHDigit(P.G15) >= 0; )
    e ^= P.G15 << P.getBCHDigit(e) - P.getBCHDigit(P.G15);
  return (n << 10 | e) ^ P.G15_MASK;
}, getBCHTypeNumber: function(n) {
  for (var e = n << 12; P.getBCHDigit(e) - P.getBCHDigit(P.G18) >= 0; )
    e ^= P.G18 << P.getBCHDigit(e) - P.getBCHDigit(P.G18);
  return n << 12 | e;
}, getBCHDigit: function(n) {
  for (var e = 0; n != 0; )
    e++, n >>>= 1;
  return e;
}, getPatternPosition: function(n) {
  return P.PATTERN_POSITION_TABLE[n - 1];
}, getMask: function(n, e, t) {
  switch (n) {
    case Ve.PATTERN000:
      return (e + t) % 2 == 0;
    case Ve.PATTERN001:
      return e % 2 == 0;
    case Ve.PATTERN010:
      return t % 3 == 0;
    case Ve.PATTERN011:
      return (e + t) % 3 == 0;
    case Ve.PATTERN100:
      return (Math.floor(e / 2) + Math.floor(t / 3)) % 2 == 0;
    case Ve.PATTERN101:
      return e * t % 2 + e * t % 3 == 0;
    case Ve.PATTERN110:
      return (e * t % 2 + e * t % 3) % 2 == 0;
    case Ve.PATTERN111:
      return (e * t % 3 + (e + t) % 2) % 2 == 0;
    default:
      throw new Error("bad maskPattern:" + n);
  }
}, getErrorCorrectPolynomial: function(n) {
  for (var e = new mt([1], 0), t = 0; t < n; t++)
    e = e.multiply(new mt([1, G.gexp(t)], 0));
  return e;
}, getLengthInBits: function(n, e) {
  if (1 <= e && e < 10)
    switch (n) {
      case le.MODE_NUMBER:
        return 10;
      case le.MODE_ALPHA_NUM:
        return 9;
      case le.MODE_8BIT_BYTE:
        return 8;
      case le.MODE_KANJI:
        return 8;
      default:
        throw new Error("mode:" + n);
    }
  else if (e < 27)
    switch (n) {
      case le.MODE_NUMBER:
        return 12;
      case le.MODE_ALPHA_NUM:
        return 11;
      case le.MODE_8BIT_BYTE:
        return 16;
      case le.MODE_KANJI:
        return 10;
      default:
        throw new Error("mode:" + n);
    }
  else if (e < 41)
    switch (n) {
      case le.MODE_NUMBER:
        return 14;
      case le.MODE_ALPHA_NUM:
        return 13;
      case le.MODE_8BIT_BYTE:
        return 16;
      case le.MODE_KANJI:
        return 12;
      default:
        throw new Error("mode:" + n);
    }
  else
    throw new Error("type:" + e);
}, getLostPoint: function(n) {
  for (var e = n.getModuleCount(), t = 0, r = 0; r < e; r++)
    for (var i = 0; i < e; i++) {
      for (var s = 0, o = n.isDark(r, i), a = -1; a <= 1; a++)
        if (!(r + a < 0 || e <= r + a))
          for (var c = -1; c <= 1; c++)
            i + c < 0 || e <= i + c || a == 0 && c == 0 || o == n.isDark(r + a, i + c) && s++;
      s > 5 && (t += 3 + s - 5);
    }
  for (var r = 0; r < e - 1; r++)
    for (var i = 0; i < e - 1; i++) {
      var l = 0;
      n.isDark(r, i) && l++, n.isDark(r + 1, i) && l++, n.isDark(r, i + 1) && l++, n.isDark(r + 1, i + 1) && l++, (l == 0 || l == 4) && (t += 3);
    }
  for (var r = 0; r < e; r++)
    for (var i = 0; i < e - 6; i++)
      n.isDark(r, i) && !n.isDark(r, i + 1) && n.isDark(r, i + 2) && n.isDark(r, i + 3) && n.isDark(r, i + 4) && !n.isDark(r, i + 5) && n.isDark(r, i + 6) && (t += 40);
  for (var i = 0; i < e; i++)
    for (var r = 0; r < e - 6; r++)
      n.isDark(r, i) && !n.isDark(r + 1, i) && n.isDark(r + 2, i) && n.isDark(r + 3, i) && n.isDark(r + 4, i) && !n.isDark(r + 5, i) && n.isDark(r + 6, i) && (t += 40);
  for (var u = 0, i = 0; i < e; i++)
    for (var r = 0; r < e; r++)
      n.isDark(r, i) && u++;
  var d = Math.abs(100 * u / e / e - 50) / 5;
  return t += d * 10, t;
} }, G = { glog: function(n) {
  if (n < 1)
    throw new Error("glog(" + n + ")");
  return G.LOG_TABLE[n];
}, gexp: function(n) {
  for (; n < 0; )
    n += 255;
  for (; n >= 256; )
    n -= 255;
  return G.EXP_TABLE[n];
}, EXP_TABLE: new Array(256), LOG_TABLE: new Array(256) };
for (var J = 0; J < 8; J++)
  G.EXP_TABLE[J] = 1 << J;
for (var J = 8; J < 256; J++)
  G.EXP_TABLE[J] = G.EXP_TABLE[J - 4] ^ G.EXP_TABLE[J - 5] ^ G.EXP_TABLE[J - 6] ^ G.EXP_TABLE[J - 8];
for (var J = 0; J < 255; J++)
  G.LOG_TABLE[G.EXP_TABLE[J]] = J;
function mt(n, e) {
  if (n.length == null)
    throw new Error(n.length + "/" + e);
  for (var t = 0; t < n.length && n[t] == 0; )
    t++;
  this.num = new Array(n.length - t + e);
  for (var r = 0; r < n.length - t; r++)
    this.num[r] = n[r + t];
}
mt.prototype = { get: function(n) {
  return this.num[n];
}, getLength: function() {
  return this.num.length;
}, multiply: function(n) {
  for (var e = new Array(this.getLength() + n.getLength() - 1), t = 0; t < this.getLength(); t++)
    for (var r = 0; r < n.getLength(); r++)
      e[t + r] ^= G.gexp(G.glog(this.get(t)) + G.glog(n.get(r)));
  return new mt(e, 0);
}, mod: function(n) {
  if (this.getLength() - n.getLength() < 0)
    return this;
  for (var e = G.glog(this.get(0)) - G.glog(n.get(0)), t = new Array(this.getLength()), r = 0; r < this.getLength(); r++)
    t[r] = this.get(r);
  for (var r = 0; r < n.getLength(); r++)
    t[r] ^= G.gexp(G.glog(n.get(r)) + e);
  return new mt(t, 0).mod(n);
} };
function Oe(n, e) {
  this.totalCount = n, this.dataCount = e;
}
Oe.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
Oe.getRSBlocks = function(n, e) {
  var t = Oe.getRsBlockTable(n, e);
  if (t == null)
    throw new Error("bad rs block @ typeNumber:" + n + "/errorCorrectLevel:" + e);
  for (var r = t.length / 3, i = [], s = 0; s < r; s++)
    for (var o = t[s * 3 + 0], a = t[s * 3 + 1], c = t[s * 3 + 2], l = 0; l < o; l++)
      i.push(new Oe(a, c));
  return i;
};
Oe.getRsBlockTable = function(n, e) {
  switch (e) {
    case Ze.L:
      return Oe.RS_BLOCK_TABLE[(n - 1) * 4 + 0];
    case Ze.M:
      return Oe.RS_BLOCK_TABLE[(n - 1) * 4 + 1];
    case Ze.Q:
      return Oe.RS_BLOCK_TABLE[(n - 1) * 4 + 2];
    case Ze.H:
      return Oe.RS_BLOCK_TABLE[(n - 1) * 4 + 3];
    default:
      return;
  }
};
function Wa() {
  this.buffer = [], this.length = 0;
}
Wa.prototype = { get: function(n) {
  var e = Math.floor(n / 8);
  return (this.buffer[e] >>> 7 - n % 8 & 1) == 1;
}, put: function(n, e) {
  for (var t = 0; t < e; t++)
    this.putBit((n >>> e - t - 1 & 1) == 1);
}, getLengthInBits: function() {
  return this.length;
}, putBit: function(n) {
  var e = Math.floor(this.length / 8);
  this.buffer.length <= e && this.buffer.push(0), n && (this.buffer[e] |= 128 >>> this.length % 8), this.length++;
} };
var jr = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];
function Ba(n) {
  if (this.options = {
    padding: 4,
    width: 256,
    height: 256,
    typeNumber: 4,
    color: "#000000",
    background: "#ffffff",
    ecl: "M",
    image: {
      svg: "",
      width: 0,
      height: 0
    }
  }, typeof n == "string" && (n = {
    content: n
  }), n)
    for (var e in n)
      this.options[e] = n[e];
  if (typeof this.options.content != "string")
    throw new Error("Expected 'content' as string!");
  if (this.options.content.length === 0)
    throw new Error("Expected 'content' to be non-empty!");
  if (!(this.options.padding >= 0))
    throw new Error("Expected 'padding' value to be non-negative!");
  if (!(this.options.width > 0) || !(this.options.height > 0))
    throw new Error("Expected 'width' or 'height' value to be higher than zero!");
  function t(c) {
    switch (c) {
      case "L":
        return Ze.L;
      case "M":
        return Ze.M;
      case "Q":
        return Ze.Q;
      case "H":
        return Ze.H;
      default:
        throw new Error("Unknwon error correction level: " + c);
    }
  }
  function r(c, l) {
    for (var u = i(c), d = 1, h = 0, f = 0, b = jr.length; f <= b; f++) {
      var w = jr[f];
      if (!w)
        throw new Error("Content too long: expected " + h + " but got " + u);
      switch (l) {
        case "L":
          h = w[0];
          break;
        case "M":
          h = w[1];
          break;
        case "Q":
          h = w[2];
          break;
        case "H":
          h = w[3];
          break;
        default:
          throw new Error("Unknwon error correction level: " + l);
      }
      if (u <= h)
        break;
      d++;
    }
    if (d > jr.length)
      throw new Error("Content too long");
    return d;
  }
  function i(c) {
    var l = encodeURI(c).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
    return l.length + (l.length != c ? 3 : 0);
  }
  var s = this.options.content, o = r(s, this.options.ecl), a = t(this.options.ecl);
  this.qrcode = new De(o, a), this.qrcode.addData(s), this.qrcode.make();
}
Ba.prototype.svg = function(n) {
  var e = this.options || {}, t = this.qrcode.modules;
  typeof n > "u" && (n = { container: e.container || "svg" });
  for (var r = typeof e.pretty < "u" ? !!e.pretty : !0, i = r ? "  " : "", s = r ? `\r
` : "", o = e.width, a = e.height, c = t.length, l = o / (c + 2 * e.padding), u = a / (c + 2 * e.padding), d = typeof e.join < "u" ? !!e.join : !1, h = typeof e.swap < "u" ? !!e.swap : !1, f = typeof e.xmlDeclaration < "u" ? !!e.xmlDeclaration : !0, b = typeof e.predefined < "u" ? !!e.predefined : !1, w = b ? i + '<defs><path id="qrmodule" d="M0 0 h' + u + " v" + l + ' H0 z" style="fill:' + e.color + ';shape-rendering:crispEdges;" /></defs>' + s : "", v = i + '<rect x="0" y="0" width="' + o + '" height="' + a + '" style="fill:' + e.background + ';shape-rendering:crispEdges;"/>' + s, g = "", k = "", M = 0; M < c; M++)
    for (var N = 0; N < c; N++) {
      var fe = t[N][M];
      if (fe) {
        var W = N * l + e.padding * l, R = M * u + e.padding * u;
        if (h) {
          var H = W;
          W = R, R = H;
        }
        if (d) {
          var z = l + W, pe = u + R;
          W = Number.isInteger(W) ? Number(W) : W.toFixed(2), R = Number.isInteger(R) ? Number(R) : R.toFixed(2), z = Number.isInteger(z) ? Number(z) : z.toFixed(2), pe = Number.isInteger(pe) ? Number(pe) : pe.toFixed(2), k += "M" + W + "," + R + " V" + pe + " H" + z + " V" + R + " H" + W + " Z ";
        } else
          b ? g += i + '<use x="' + W.toString() + '" y="' + R.toString() + '" href="#qrmodule" />' + s : g += i + '<rect x="' + W.toString() + '" y="' + R.toString() + '" width="' + l + '" height="' + u + '" style="fill:' + e.color + ';shape-rendering:crispEdges;"/>' + s;
      }
    }
  d && (g = i + '<path x="0" y="0" style="fill:' + e.color + ';shape-rendering:crispEdges;" d="' + k + '" />');
  let re = "";
  if (this.options.image !== void 0 && this.options.image.svg) {
    const ce = o * this.options.image.width / 100, we = a * this.options.image.height / 100, Se = o / 2 - ce / 2, nt = a / 2 - we / 2;
    re += `<svg x="${Se}" y="${nt}" width="${ce}" height="${we}" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">`, re += this.options.image.svg + s, re += "</svg>";
  }
  var j = "";
  switch (n.container) {
    case "svg":
      f && (j += '<?xml version="1.0" standalone="yes"?>' + s), j += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + o + '" height="' + a + '">' + s, j += w + v + g, j += re, j += "</svg>";
      break;
    case "svg-viewbox":
      f && (j += '<?xml version="1.0" standalone="yes"?>' + s), j += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' + o + " " + a + '">' + s, j += w + v + g, j += re, j += "</svg>";
      break;
    case "g":
      j += '<g width="' + o + '" height="' + a + '">' + s, j += w + v + g, j += re, j += "</g>";
      break;
    default:
      j += (w + v + g + re).replace(/^\s+/, "");
      break;
  }
  return j;
};
var Ib = Ba, Ab = T && T.__importDefault || function(n) {
  return n && n.__esModule ? n : { default: n };
};
Object.defineProperty(or, "__esModule", { value: !0 });
or.QRCode = void 0;
const Nb = de, Hs = vn, Tb = Ab(Ib), Ob = (n) => {
  const [e, t] = (0, Hs.useState)("");
  return (0, Hs.useEffect)(() => {
    var r, i;
    const s = new Tb.default({
      content: n.content,
      background: n.bgColor || "#ffffff",
      color: n.fgColor || "#000000",
      container: "svg",
      ecl: "M",
      width: (r = n.width) !== null && r !== void 0 ? r : 256,
      height: (i = n.height) !== null && i !== void 0 ? i : 256,
      padding: 0,
      image: n.image
    }), o = A.Buffer.from(s.svg(), "utf8").toString("base64");
    t(`data:image/svg+xml;base64,${o}`);
  }), e ? (0, Nb.h)("img", { src: e, alt: "QR Code" }) : null;
};
or.QRCode = Ob;
var ar = {}, ji = {};
Object.defineProperty(ji, "__esModule", { value: !0 });
ji.default = ".-cbwsdk-css-reset .-cbwsdk-spinner{display:inline-block}.-cbwsdk-css-reset .-cbwsdk-spinner svg{display:inline-block;animation:2s linear infinite -cbwsdk-spinner-svg}.-cbwsdk-css-reset .-cbwsdk-spinner svg circle{animation:1.9s ease-in-out infinite both -cbwsdk-spinner-circle;display:block;fill:rgba(0,0,0,0);stroke-dasharray:283;stroke-dashoffset:280;stroke-linecap:round;stroke-width:10px;transform-origin:50% 50%}@keyframes -cbwsdk-spinner-svg{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes -cbwsdk-spinner-circle{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}";
var Rb = T && T.__importDefault || function(n) {
  return n && n.__esModule ? n : { default: n };
};
Object.defineProperty(ar, "__esModule", { value: !0 });
ar.Spinner = void 0;
const En = de, Db = Rb(ji), Lb = (n) => {
  var e;
  const t = (e = n.size) !== null && e !== void 0 ? e : 64, r = n.color || "#000";
  return (0, En.h)(
    "div",
    { class: "-cbwsdk-spinner" },
    (0, En.h)("style", null, Db.default),
    (0, En.h)(
      "svg",
      { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", style: { width: t, height: t } },
      (0, En.h)("circle", { style: { cx: 50, cy: 50, r: 45, stroke: r } })
    )
  );
};
ar.Spinner = Lb;
var Pi = {};
Object.defineProperty(Pi, "__esModule", { value: !0 });
Pi.default = ".-cbwsdk-css-reset .-cbwsdk-connect-content{height:430px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-connect-content.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-header{display:flex;align-items:center;justify-content:space-between;margin:0 0 30px}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading{font-style:normal;font-weight:500;font-size:28px;line-height:36px;margin:0}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-layout{display:flex;flex-direction:row}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-left{margin-right:30px;display:flex;flex-direction:column;justify-content:space-between}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-right{flex:25%;margin-right:34px}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-wrapper{width:220px;height:220px;border-radius:12px;display:flex;justify-content:center;align-items:center;background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light{background-color:rgba(255,255,255,.95)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light>p{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark{background-color:rgba(10,11,13,.9)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark>p{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting>p{font-size:12px;font-weight:bold;margin-top:16px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app{border-radius:8px;font-size:14px;line-height:20px;padding:12px;width:339px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.light{background:#eef0f3;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.dark{background:#1e2025;color:#8a919e}.-cbwsdk-css-reset .-cbwsdk-cancel-button{-webkit-appearance:none;border:none;background:none;cursor:pointer;padding:0;margin:0}.-cbwsdk-css-reset .-cbwsdk-cancel-button-x{position:relative;display:block;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-wallet-steps{padding:0 0 0 16px;margin:0;width:100%;list-style:decimal}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item{list-style-type:decimal;display:list-item;font-style:normal;font-weight:400;font-size:16px;line-height:24px;margin-top:20px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item-wrapper{display:flex;align-items:center}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-pad-left{margin-left:6px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon{display:flex;border-radius:50%;height:24px;width:24px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.light{background:#0052ff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.dark{background:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item{align-items:center;display:flex;flex-direction:row;padding:16px 24px;gap:12px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-connect-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-item.light.selected{background:#f5f8ff;color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark.selected{background:#001033;color:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item.selected{border-radius:100px;font-weight:600}.-cbwsdk-css-reset .-cbwsdk-connect-item-copy-wrapper{margin:0 4px 0 8px}.-cbwsdk-css-reset .-cbwsdk-connect-item-title{margin:0 0 0;font-size:16px;line-height:24px;font-weight:500}.-cbwsdk-css-reset .-cbwsdk-connect-item-description{font-weight:400;font-size:14px;line-height:20px;margin:0}";
var Ft = T && T.__importDefault || function(n) {
  return n && n.__esModule ? n : { default: n };
};
Object.defineProperty(Re, "__esModule", { value: !0 });
Re.CoinbaseAppSteps = Re.CoinbaseWalletSteps = Re.ConnectItem = Re.ConnectContent = void 0;
const ye = Ft(tr), _ = de, Us = vn, jb = y, Pb = nr, Fb = rr, Wb = Ft(Oi), Bb = Ft(Ri), Va = ir, Vb = Ft(Di), $b = Ft(Li), Hb = sr, Ub = or, zb = ar, qb = Ft(Pi), zs = {
  "coinbase-wallet-app": {
    title: "Coinbase Wallet app",
    description: "Connect with your self-custody wallet",
    icon: Bb.default,
    steps: Ha
  },
  "coinbase-app": {
    title: "Coinbase app",
    description: "Connect with your Coinbase account",
    icon: Wb.default,
    steps: Ua
  }
}, Qb = (n) => {
  switch (n) {
    case "coinbase-app":
      return Vb.default;
    case "coinbase-wallet-app":
    default:
      return $b.default;
  }
}, oi = (n) => n === "light" ? "#FFFFFF" : "#0A0B0D";
function Zb(n) {
  const { theme: e } = n, [t, r] = (0, Us.useState)("coinbase-wallet-app"), i = (0, Us.useCallback)((l) => {
    r(l);
  }, []), s = (0, jb.createQrUrl)(n.sessionId, n.sessionSecret, n.linkAPIUrl, n.isParentConnection, n.version, n.chainId), o = zs[t];
  if (!t)
    return null;
  const a = o.steps, c = t === "coinbase-app";
  return (0, _.h)(
    "div",
    { "data-testid": "connect-content", class: (0, ye.default)("-cbwsdk-connect-content", e) },
    (0, _.h)("style", null, qb.default),
    (0, _.h)(
      "div",
      { class: "-cbwsdk-connect-content-header" },
      (0, _.h)("h2", { class: (0, ye.default)("-cbwsdk-connect-content-heading", e) }, "Scan to connect with one of our mobile apps"),
      n.onCancel && (0, _.h)(
        "button",
        { type: "button", class: "-cbwsdk-cancel-button", onClick: n.onCancel },
        (0, _.h)(Fb.CloseIcon, { fill: e === "light" ? "#0A0B0D" : "#FFFFFF" })
      )
    ),
    (0, _.h)(
      "div",
      { class: "-cbwsdk-connect-content-layout" },
      (0, _.h)(
        "div",
        { class: "-cbwsdk-connect-content-column-left" },
        (0, _.h)("div", null, Object.entries(zs).map(([l, u]) => (0, _.h)($a, { key: l, title: u.title, description: u.description, icon: u.icon, selected: t === l, onClick: () => i(l), theme: e }))),
        c && (0, _.h)(
          "div",
          { class: (0, ye.default)("-cbwsdk-connect-content-update-app", e) },
          "Don\u2019t see a ",
          (0, _.h)("strong", null, "Scan"),
          " option? Update your Coinbase app to the latest version and try again."
        )
      ),
      (0, _.h)(
        "div",
        { class: "-cbwsdk-connect-content-column-right" },
        (0, _.h)(
          "div",
          { class: "-cbwsdk-connect-content-qr-wrapper" },
          (0, _.h)(Ub.QRCode, { content: s, width: 200, height: 200, fgColor: "#000", bgColor: "transparent", image: {
            svg: Qb(t),
            width: 25,
            height: 25
          } }),
          (0, _.h)("input", { type: "hidden", name: "cbw-cbwsdk-version", value: Pb.LIB_VERSION }),
          (0, _.h)("input", { type: "hidden", value: s })
        ),
        (0, _.h)(a, { theme: e }),
        !n.isConnected && (0, _.h)(
          "div",
          { "data-testid": "connecting-spinner", class: (0, ye.default)("-cbwsdk-connect-content-qr-connecting", e) },
          (0, _.h)(zb.Spinner, { size: 36, color: e === "dark" ? "#FFF" : "#000" }),
          (0, _.h)("p", null, "Connecting...")
        )
      )
    )
  );
}
Re.ConnectContent = Zb;
function $a({ title: n, description: e, icon: t, selected: r, theme: i, onClick: s }) {
  return (0, _.h)(
    "div",
    { onClick: s, class: (0, ye.default)("-cbwsdk-connect-item", i, { selected: r }) },
    (0, _.h)(
      "div",
      null,
      (0, _.h)("img", { src: t, alt: n })
    ),
    (0, _.h)(
      "div",
      { class: "-cbwsdk-connect-item-copy-wrapper" },
      (0, _.h)("h3", { class: "-cbwsdk-connect-item-title" }, n),
      (0, _.h)("p", { class: "-cbwsdk-connect-item-description" }, e)
    )
  );
}
Re.ConnectItem = $a;
function Ha({ theme: n }) {
  return (0, _.h)(
    "ol",
    { class: "-cbwsdk-wallet-steps" },
    (0, _.h)(
      "li",
      { class: (0, ye.default)("-cbwsdk-wallet-steps-item", n) },
      (0, _.h)("div", { class: "-cbwsdk-wallet-steps-item-wrapper" }, "Open Coinbase Wallet app")
    ),
    (0, _.h)(
      "li",
      { class: (0, ye.default)("-cbwsdk-wallet-steps-item", n) },
      (0, _.h)(
        "div",
        { class: "-cbwsdk-wallet-steps-item-wrapper" },
        (0, _.h)(
          "span",
          null,
          "Tap ",
          (0, _.h)("strong", null, "Scan"),
          " "
        ),
        (0, _.h)(
          "span",
          { class: (0, ye.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", n) },
          (0, _.h)(Va.QRCodeIcon, { fill: oi(n) })
        )
      )
    )
  );
}
Re.CoinbaseWalletSteps = Ha;
function Ua({ theme: n }) {
  return (0, _.h)(
    "ol",
    { class: "-cbwsdk-wallet-steps" },
    (0, _.h)(
      "li",
      { class: (0, ye.default)("-cbwsdk-wallet-steps-item", n) },
      (0, _.h)("div", { class: "-cbwsdk-wallet-steps-item-wrapper" }, "Open Coinbase app")
    ),
    (0, _.h)(
      "li",
      { class: (0, ye.default)("-cbwsdk-wallet-steps-item", n) },
      (0, _.h)(
        "div",
        { class: "-cbwsdk-wallet-steps-item-wrapper" },
        (0, _.h)(
          "span",
          null,
          "Tap ",
          (0, _.h)("strong", null, "More")
        ),
        (0, _.h)(
          "span",
          { class: (0, ye.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", n) },
          (0, _.h)(Hb.StatusDotIcon, { fill: oi(n) })
        ),
        (0, _.h)(
          "span",
          { class: "-cbwsdk-wallet-steps-pad-left" },
          "then ",
          (0, _.h)("strong", null, "Scan")
        ),
        (0, _.h)(
          "span",
          { class: (0, ye.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", n) },
          (0, _.h)(Va.QRCodeIcon, { fill: oi(n) })
        )
      )
    )
  );
}
Re.CoinbaseAppSteps = Ua;
var cr = {}, ur = {};
Object.defineProperty(ur, "__esModule", { value: !0 });
ur.ArrowLeftIcon = void 0;
const qs = de;
function Gb(n) {
  return (0, qs.h)(
    "svg",
    Object.assign({ width: "16", height: "16", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" }, n),
    (0, qs.h)("path", { d: "M8.60675 0.155884L7.37816 1.28209L12.7723 7.16662H0V8.83328H12.6548L6.82149 14.6666L8 15.8451L15.8201 8.02501L8.60675 0.155884Z" })
  );
}
ur.ArrowLeftIcon = Gb;
var lr = {};
Object.defineProperty(lr, "__esModule", { value: !0 });
lr.LaptopIcon = void 0;
const Pr = de;
function Yb(n) {
  return (0, Pr.h)(
    "svg",
    Object.assign({ width: "14", height: "14", viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, n),
    (0, Pr.h)("path", { d: "M1.8001 2.2002H12.2001V9.40019H1.8001V2.2002ZM3.4001 3.8002V7.80019H10.6001V3.8002H3.4001Z" }),
    (0, Pr.h)("path", { d: "M13.4001 10.2002H0.600098C0.600098 11.0838 1.31644 11.8002 2.2001 11.8002H11.8001C12.6838 11.8002 13.4001 11.0838 13.4001 10.2002Z" })
  );
}
lr.LaptopIcon = Yb;
var hr = {};
Object.defineProperty(hr, "__esModule", { value: !0 });
hr.SafeIcon = void 0;
const Qs = de;
function Kb(n) {
  return (0, Qs.h)(
    "svg",
    Object.assign({ width: "14", height: "14", viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, n),
    (0, Qs.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M0.600098 0.600098V11.8001H13.4001V0.600098H0.600098ZM7.0001 9.2001C5.3441 9.2001 4.0001 7.8561 4.0001 6.2001C4.0001 4.5441 5.3441 3.2001 7.0001 3.2001C8.6561 3.2001 10.0001 4.5441 10.0001 6.2001C10.0001 7.8561 8.6561 9.2001 7.0001 9.2001ZM0.600098 12.6001H3.8001V13.4001H0.600098V12.6001ZM10.2001 12.6001H13.4001V13.4001H10.2001V12.6001ZM8.8001 6.2001C8.8001 7.19421 7.99421 8.0001 7.0001 8.0001C6.00598 8.0001 5.2001 7.19421 5.2001 6.2001C5.2001 5.20598 6.00598 4.4001 7.0001 4.4001C7.99421 4.4001 8.8001 5.20598 8.8001 6.2001Z" })
  );
}
hr.SafeIcon = Kb;
var Fi = {};
Object.defineProperty(Fi, "__esModule", { value: !0 });
Fi.default = ".-cbwsdk-css-reset .-cbwsdk-try-extension{display:flex;margin-top:12px;height:202px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-try-extension.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-column-half{flex:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading{font-style:normal;font-weight:500;font-size:25px;line-height:32px;margin:0;max-width:204px}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta{appearance:none;border:none;background:none;color:#0052ff;cursor:pointer;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.light{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.dark{color:#588af5}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-wrapper{display:flex;align-items:center;margin-top:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-icon{display:block;margin-left:4px;height:14px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0;padding:0;list-style:none;height:100%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item{display:flex;align-items:center;flex-flow:nowrap;margin-top:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item:first-of-type{margin-top:0}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon-wrapper{display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon{display:flex;height:32px;width:32px;border-radius:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.light{background:#eef0f3}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.dark{background:#1e2025}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy{display:block;font-weight:400;font-size:14px;line-height:20px;padding-left:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.light{color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.dark{color:#8a919e}";
var za = T && T.__importDefault || function(n) {
  return n && n.__esModule ? n : { default: n };
};
Object.defineProperty(cr, "__esModule", { value: !0 });
cr.TryExtensionContent = void 0;
const rt = za(tr), U = de, Fr = vn, Jb = ur, Xb = lr, eg = hr, tg = za(Fi);
function ng({ theme: n }) {
  const [e, t] = (0, Fr.useState)(!1), r = (0, Fr.useCallback)(() => {
    window.open("https://api.wallet.coinbase.com/rpc/v2/desktop/chrome", "_blank");
  }, []), i = (0, Fr.useCallback)(() => {
    e ? window.location.reload() : (r(), t(!0));
  }, [r, e]);
  return (0, U.h)(
    "div",
    { class: (0, rt.default)("-cbwsdk-try-extension", n) },
    (0, U.h)("style", null, tg.default),
    (0, U.h)(
      "div",
      { class: "-cbwsdk-try-extension-column-half" },
      (0, U.h)("h3", { class: (0, rt.default)("-cbwsdk-try-extension-heading", n) }, "Or try the Coinbase Wallet browser extension"),
      (0, U.h)(
        "div",
        { class: "-cbwsdk-try-extension-cta-wrapper" },
        (0, U.h)("button", { class: (0, rt.default)("-cbwsdk-try-extension-cta", n), onClick: i }, e ? "Refresh" : "Install"),
        (0, U.h)("div", null, !e && (0, U.h)(Jb.ArrowLeftIcon, { class: "-cbwsdk-try-extension-cta-icon", fill: n === "light" ? "#0052FF" : "#588AF5" }))
      )
    ),
    (0, U.h)(
      "div",
      { class: "-cbwsdk-try-extension-column-half" },
      (0, U.h)(
        "ul",
        { class: "-cbwsdk-try-extension-list" },
        (0, U.h)(
          "li",
          { class: "-cbwsdk-try-extension-list-item" },
          (0, U.h)(
            "div",
            { class: "-cbwsdk-try-extension-list-item-icon-wrapper" },
            (0, U.h)(
              "span",
              { class: (0, rt.default)("-cbwsdk-try-extension-list-item-icon", n) },
              (0, U.h)(Xb.LaptopIcon, { fill: n === "light" ? "#0A0B0D" : "#FFFFFF" })
            )
          ),
          (0, U.h)("div", { class: (0, rt.default)("-cbwsdk-try-extension-list-item-copy", n) }, "Connect with dapps with just one click on your desktop browser")
        ),
        (0, U.h)(
          "li",
          { class: "-cbwsdk-try-extension-list-item" },
          (0, U.h)(
            "div",
            { class: "-cbwsdk-try-extension-list-item-icon-wrapper" },
            (0, U.h)(
              "span",
              { class: (0, rt.default)("-cbwsdk-try-extension-list-item-icon", n) },
              (0, U.h)(eg.SafeIcon, { fill: n === "light" ? "#0A0B0D" : "#FFFFFF" })
            )
          ),
          (0, U.h)("div", { class: (0, rt.default)("-cbwsdk-try-extension-list-item-copy", n) }, "Add an additional layer of security by using a supported Ledger hardware wallet")
        )
      )
    )
  );
}
cr.TryExtensionContent = ng;
var Wi = {};
Object.defineProperty(Wi, "__esModule", { value: !0 });
Wi.default = ".-cbwsdk-css-reset .-cbwsdk-connect-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.light{background-color:rgba(0,0,0,.5)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.dark{background-color:rgba(50,53,61,.4)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box{display:flex;position:relative;flex-direction:column;transform:scale(1);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container{display:block}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container-hidden{display:none}";
var qa = T && T.__importDefault || function(n) {
  return n && n.__esModule ? n : { default: n };
};
Object.defineProperty(er, "__esModule", { value: !0 });
er.ConnectDialog = void 0;
const Wr = qa(tr), it = de, Br = vn, rg = Re, ig = cr, sg = qa(Wi), og = (n) => {
  const { isOpen: e, darkMode: t } = n, [r, i] = (0, Br.useState)(!e), [s, o] = (0, Br.useState)(!e);
  (0, Br.useEffect)(() => {
    const c = [
      window.setTimeout(() => {
        o(!e);
      }, 10)
    ];
    return e ? i(!1) : c.push(window.setTimeout(() => {
      i(!0);
    }, 360)), () => {
      c.forEach(window.clearTimeout);
    };
  }, [n.isOpen]);
  const a = t ? "dark" : "light";
  return (0, it.h)(
    "div",
    { class: (0, Wr.default)("-cbwsdk-connect-dialog-container", r && "-cbwsdk-connect-dialog-container-hidden") },
    (0, it.h)("style", null, sg.default),
    (0, it.h)("div", { class: (0, Wr.default)("-cbwsdk-connect-dialog-backdrop", a, s && "-cbwsdk-connect-dialog-backdrop-hidden") }),
    (0, it.h)(
      "div",
      { class: "-cbwsdk-connect-dialog" },
      (0, it.h)(
        "div",
        { class: (0, Wr.default)("-cbwsdk-connect-dialog-box", s && "-cbwsdk-connect-dialog-box-hidden") },
        n.connectDisabled ? null : (0, it.h)(rg.ConnectContent, { theme: a, version: n.version, sessionId: n.sessionId, sessionSecret: n.sessionSecret, linkAPIUrl: n.linkAPIUrl, isConnected: n.isConnected, isParentConnection: n.isParentConnection, chainId: n.chainId, onCancel: n.onCancel }),
        (0, it.h)(ig.TryExtensionContent, { theme: a })
      )
    )
  );
};
er.ConnectDialog = og;
Object.defineProperty(Xn, "__esModule", { value: !0 });
Xn.LinkFlow = void 0;
const Vr = de, Zs = jt, ag = er;
class cg {
  constructor(e) {
    this.extensionUI$ = new Zs.BehaviorSubject({}), this.subscriptions = new Zs.Subscription(), this.isConnected = !1, this.chainId = 1, this.isOpen = !1, this.onCancel = null, this.root = null, this.connectDisabled = !1, this.darkMode = e.darkMode, this.version = e.version, this.sessionId = e.sessionId, this.sessionSecret = e.sessionSecret, this.linkAPIUrl = e.linkAPIUrl, this.isParentConnection = e.isParentConnection, this.connected$ = e.connected$, this.chainId$ = e.chainId$;
  }
  attach(e) {
    this.root = document.createElement("div"), this.root.className = "-cbwsdk-link-flow-root", e.appendChild(this.root), this.render(), this.subscriptions.add(this.connected$.subscribe((t) => {
      this.isConnected !== t && (this.isConnected = t, this.render());
    })), this.subscriptions.add(this.chainId$.subscribe((t) => {
      this.chainId !== t && (this.chainId = t, this.render());
    }));
  }
  detach() {
    var e;
    !this.root || (this.subscriptions.unsubscribe(), (0, Vr.render)(null, this.root), (e = this.root.parentElement) === null || e === void 0 || e.removeChild(this.root));
  }
  setConnectDisabled(e) {
    this.connectDisabled = e;
  }
  open(e) {
    this.isOpen = !0, this.onCancel = e.onCancel, this.render();
  }
  close() {
    this.isOpen = !1, this.onCancel = null, this.render();
  }
  render() {
    if (!this.root)
      return;
    const e = this.extensionUI$.subscribe(() => {
      !this.root || (0, Vr.render)((0, Vr.h)(ag.ConnectDialog, { darkMode: this.darkMode, version: this.version, sessionId: this.sessionId, sessionSecret: this.sessionSecret, linkAPIUrl: this.linkAPIUrl, isOpen: this.isOpen, isConnected: this.isConnected, isParentConnection: this.isParentConnection, chainId: this.chainId, onCancel: this.onCancel, connectDisabled: this.connectDisabled }), this.root);
    });
    this.subscriptions.add(e);
  }
}
Xn.LinkFlow = cg;
var Qa = {}, Bi = {};
Object.defineProperty(Bi, "__esModule", { value: !0 });
Bi.default = ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}";
(function(n) {
  var e = T && T.__importDefault || function(d) {
    return d && d.__esModule ? d : { default: d };
  };
  Object.defineProperty(n, "__esModule", { value: !0 }), n.SnackbarInstance = n.SnackbarContainer = n.Snackbar = void 0;
  const t = e(tr), r = de, i = vn, s = e(Bi), o = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=";
  function a(d) {
    switch (d) {
      case "coinbase-app":
        return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0LjY3NCAxOC44NThjLTIuMDQ1IDAtMy42NDgtMS43MjItMy42NDgtMy44NDVzMS42NTktMy44NDUgMy42NDgtMy44NDVjMS44MjQgMCAzLjMxNyAxLjM3NyAzLjU5MyAzLjIxNGgzLjcwM2MtLjMzMS0zLjk2LTMuNDgyLTcuMDU5LTcuMjk2LTcuMDU5LTQuMDM0IDAtNy4zNSAzLjQ0My03LjM1IDcuNjkgMCA0LjI0NiAzLjI2IDcuNjkgNy4zNSA3LjY5IDMuODcgMCA2Ljk2NS0zLjEgNy4yOTYtNy4wNTloLTMuNzAzYy0uMjc2IDEuODM2LTEuNzY5IDMuMjE0LTMuNTkzIDMuMjE0WiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0wIDEwLjY3OGMwLTMuNzExIDAtNS41OTYuNzQyLTcuMDIzQTYuNTMyIDYuNTMyIDAgMCAxIDMuNjU1Ljc0MkM1LjA4MiAwIDYuOTY3IDAgMTAuNjc4IDBoNy45MzhjMy43MTEgMCA1LjU5NiAwIDcuMDIzLjc0MmE2LjUzMSA2LjUzMSAwIDAgMSAyLjkxMyAyLjkxM2MuNzQyIDEuNDI3Ljc0MiAzLjMxMi43NDIgNy4wMjN2Ny45MzhjMCAzLjcxMSAwIDUuNTk2LS43NDIgNy4wMjNhNi41MzEgNi41MzEgMCAwIDEtMi45MTMgMi45MTNjLTEuNDI3Ljc0Mi0zLjMxMi43NDItNy4wMjMuNzQyaC03LjkzOGMtMy43MTEgMC01LjU5NiAwLTcuMDIzLS43NDJhNi41MzEgNi41MzEgMCAwIDEtMi45MTMtMi45MTNDMCAyNC4yMTIgMCAyMi4zODQgMCAxOC42MTZ2LTcuOTM4WiIgZmlsbD0iIzAwNTJGRiIvPjxwYXRoIGQ9Ik0xNC42ODQgMTkuNzczYy0yLjcyNyAwLTQuODY0LTIuMjk1LTQuODY0LTUuMTI2IDAtMi44MzEgMi4yMS01LjEyNyA0Ljg2NC01LjEyNyAyLjQzMiAwIDQuNDIyIDEuODM3IDQuNzkgNC4yODVoNC45MzhjLS40NDItNS4yOC00LjY0My05LjQxMS05LjcyOC05LjQxMS01LjM4IDAtOS44MDIgNC41OS05LjgwMiAxMC4yNTMgMCA1LjY2MiA0LjM0OCAxMC4yNTMgOS44MDIgMTAuMjUzIDUuMTU5IDAgOS4yODYtNC4xMzIgOS43MjgtOS40MTFoLTQuOTM4Yy0uMzY4IDIuNDQ4LTIuMzU4IDQuMjg0LTQuNzkgNC4yODRaIiBmaWxsPSIjZmZmIi8+PC9zdmc+";
      case "coinbase-wallet-app":
      default:
        return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+";
    }
  }
  class c {
    constructor(h) {
      this.items = /* @__PURE__ */ new Map(), this.nextItemKey = 0, this.root = null, this.darkMode = h.darkMode;
    }
    attach(h) {
      this.root = document.createElement("div"), this.root.className = "-cbwsdk-snackbar-root", h.appendChild(this.root), this.render();
    }
    presentItem(h) {
      const f = this.nextItemKey++;
      return this.items.set(f, h), this.render(), () => {
        this.items.delete(f), this.render();
      };
    }
    clear() {
      this.items.clear(), this.render();
    }
    render() {
      !this.root || (0, r.render)((0, r.h)(
        "div",
        null,
        (0, r.h)(n.SnackbarContainer, { darkMode: this.darkMode }, Array.from(this.items.entries()).map(([h, f]) => (0, r.h)(n.SnackbarInstance, Object.assign({}, f, { key: h }))))
      ), this.root);
    }
  }
  n.Snackbar = c;
  const l = (d) => (0, r.h)(
    "div",
    { class: (0, t.default)("-cbwsdk-snackbar-container") },
    (0, r.h)("style", null, s.default),
    (0, r.h)("div", { class: "-cbwsdk-snackbar" }, d.children)
  );
  n.SnackbarContainer = l;
  const u = ({ autoExpand: d, message: h, menuItems: f, appSrc: b }) => {
    const [w, v] = (0, i.useState)(!0), [g, k] = (0, i.useState)(d != null ? d : !1);
    (0, i.useEffect)(() => {
      const N = [
        window.setTimeout(() => {
          v(!1);
        }, 1),
        window.setTimeout(() => {
          k(!0);
        }, 1e4)
      ];
      return () => {
        N.forEach(window.clearTimeout);
      };
    });
    const M = () => {
      k(!g);
    };
    return (0, r.h)(
      "div",
      { class: (0, t.default)("-cbwsdk-snackbar-instance", w && "-cbwsdk-snackbar-instance-hidden", g && "-cbwsdk-snackbar-instance-expanded") },
      (0, r.h)(
        "div",
        { class: "-cbwsdk-snackbar-instance-header", onClick: M },
        (0, r.h)("img", { src: a(b), class: "-cbwsdk-snackbar-instance-header-cblogo" }),
        (0, r.h)("div", { class: "-cbwsdk-snackbar-instance-header-message" }, h),
        (0, r.h)(
          "div",
          { class: "-gear-container" },
          !g && (0, r.h)(
            "svg",
            { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            (0, r.h)("circle", { cx: "12", cy: "12", r: "12", fill: "#F5F7F8" })
          ),
          (0, r.h)("img", { src: o, class: "-gear-icon", title: "Expand" })
        )
      ),
      f && f.length > 0 && (0, r.h)("div", { class: "-cbwsdk-snackbar-instance-menu" }, f.map((N, fe) => (0, r.h)(
        "div",
        { class: (0, t.default)("-cbwsdk-snackbar-instance-menu-item", N.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"), onClick: N.onClick, key: fe },
        (0, r.h)(
          "svg",
          { width: N.svgWidth, height: N.svgHeight, viewBox: "0 0 10 11", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          (0, r.h)("path", { "fill-rule": N.defaultFillRule, "clip-rule": N.defaultClipRule, d: N.path, fill: "#AAAAAA" })
        ),
        (0, r.h)("span", { class: (0, t.default)("-cbwsdk-snackbar-instance-menu-item-info", N.isRed && "-cbwsdk-snackbar-instance-menu-item-info-is-red") }, N.info)
      )))
    );
  };
  n.SnackbarInstance = u;
})(Qa);
var dr = {}, Vi = {};
Object.defineProperty(Vi, "__esModule", { value: !0 });
Vi.default = '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}';
var ug = T && T.__importDefault || function(n) {
  return n && n.__esModule ? n : { default: n };
};
Object.defineProperty(dr, "__esModule", { value: !0 });
dr.injectCssReset = void 0;
const lg = ug(Vi);
function hg() {
  const n = document.createElement("style");
  n.type = "text/css", n.appendChild(document.createTextNode(lg.default)), document.documentElement.appendChild(n);
}
dr.injectCssReset = hg;
Object.defineProperty(Jn, "__esModule", { value: !0 });
Jn.WalletSDKUI = void 0;
const dg = Xn, fg = Qa, pg = dr;
class bg {
  constructor(e) {
    this.standalone = null, this.attached = !1, this.appSrc = null, this.snackbar = new fg.Snackbar({
      darkMode: e.darkMode
    }), this.linkFlow = new dg.LinkFlow({
      darkMode: e.darkMode,
      version: e.version,
      sessionId: e.session.id,
      sessionSecret: e.session.secret,
      linkAPIUrl: e.linkAPIUrl,
      connected$: e.connected$,
      chainId$: e.chainId$,
      isParentConnection: !1
    });
  }
  attach() {
    if (this.attached)
      throw new Error("Coinbase Wallet SDK UI is already attached");
    const e = document.documentElement, t = document.createElement("div");
    t.className = "-cbwsdk-css-reset", e.appendChild(t), this.linkFlow.attach(t), this.snackbar.attach(t), this.attached = !0, (0, pg.injectCssReset)();
  }
  setConnectDisabled(e) {
    this.linkFlow.setConnectDisabled(e);
  }
  addEthereumChain(e) {
  }
  watchAsset(e) {
  }
  switchEthereumChain(e) {
  }
  requestEthereumAccounts(e) {
    this.linkFlow.open({ onCancel: e.onCancel });
  }
  hideRequestEthereumAccounts() {
    this.linkFlow.close();
  }
  signEthereumMessage(e) {
  }
  signEthereumTransaction(e) {
  }
  submitEthereumTransaction(e) {
  }
  ethereumAddressFromSignedMessage(e) {
  }
  showConnecting(e) {
    let t;
    return e.isUnlinkedErrorState ? t = {
      autoExpand: !0,
      message: "Connection lost",
      appSrc: this.appSrc,
      menuItems: [
        {
          isRed: !1,
          info: "Reset connection",
          svgWidth: "10",
          svgHeight: "11",
          path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
          defaultFillRule: "evenodd",
          defaultClipRule: "evenodd",
          onClick: e.onResetConnection
        }
      ]
    } : t = {
      message: "Confirm on phone",
      appSrc: this.appSrc,
      menuItems: [
        {
          isRed: !0,
          info: "Cancel transaction",
          svgWidth: "11",
          svgHeight: "11",
          path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
          defaultFillRule: "inherit",
          defaultClipRule: "inherit",
          onClick: e.onCancel
        },
        {
          isRed: !1,
          info: "Reset connection",
          svgWidth: "10",
          svgHeight: "11",
          path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
          defaultFillRule: "evenodd",
          defaultClipRule: "evenodd",
          onClick: e.onResetConnection
        }
      ]
    }, this.snackbar.presentItem(t);
  }
  setAppSrc(e) {
    this.appSrc = e;
  }
  reloadUI() {
    document.location.reload();
  }
  inlineAccountsResponse() {
    return !1;
  }
  inlineAddEthereumChain(e) {
    return !1;
  }
  inlineWatchAsset() {
    return !1;
  }
  inlineSwitchEthereumChain() {
    return !1;
  }
  setStandalone(e) {
    this.standalone = e;
  }
  isStandalone() {
    var e;
    return (e = this.standalone) !== null && e !== void 0 ? e : !1;
  }
}
Jn.WalletSDKUI = bg;
var fr = {}, pr = {};
Object.defineProperty(pr, "__esModule", { value: !0 });
var vt;
(function(n) {
  n.typeOfFunction = "function", n.boolTrue = !0;
})(vt || (vt = {}));
function Za(n, e, t) {
  if (!t || typeof t.value !== vt.typeOfFunction)
    throw new TypeError("Only methods can be decorated with @bind. <" + e + "> is not a method!");
  return {
    configurable: vt.boolTrue,
    get: function() {
      var r = t.value.bind(this);
      return Object.defineProperty(this, e, {
        value: r,
        configurable: vt.boolTrue,
        writable: vt.boolTrue
      }), r;
    }
  };
}
pr.bind = Za;
pr.default = Za;
var br = {}, ve = {};
Object.defineProperty(ve, "__esModule", { value: !0 });
ve.ClientMessagePublishEvent = ve.ClientMessageSetSessionConfig = ve.ClientMessageGetSessionConfig = ve.ClientMessageIsLinked = ve.ClientMessageHostSession = void 0;
function gg(n) {
  return Object.assign({ type: "HostSession" }, n);
}
ve.ClientMessageHostSession = gg;
function vg(n) {
  return Object.assign({ type: "IsLinked" }, n);
}
ve.ClientMessageIsLinked = vg;
function yg(n) {
  return Object.assign({ type: "GetSessionConfig" }, n);
}
ve.ClientMessageGetSessionConfig = yg;
function mg(n) {
  return Object.assign({ type: "SetSessionConfig" }, n);
}
ve.ClientMessageSetSessionConfig = mg;
function _g(n) {
  return Object.assign({ type: "PublishEvent" }, n);
}
ve.ClientMessagePublishEvent = _g;
var Ga = {};
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.RxWebSocket = n.ConnectionState = void 0;
  const e = jt, t = Zn;
  var r;
  (function(s) {
    s[s.DISCONNECTED = 0] = "DISCONNECTED", s[s.CONNECTING = 1] = "CONNECTING", s[s.CONNECTED = 2] = "CONNECTED";
  })(r = n.ConnectionState || (n.ConnectionState = {}));
  class i {
    constructor(o, a = WebSocket) {
      this.WebSocketClass = a, this.webSocket = null, this.connectionStateSubject = new e.BehaviorSubject(r.DISCONNECTED), this.incomingDataSubject = new e.Subject(), this.url = o.replace(/^http/, "ws");
    }
    connect() {
      return this.webSocket ? (0, e.throwError)(new Error("webSocket object is not null")) : new e.Observable((o) => {
        let a;
        try {
          this.webSocket = a = new this.WebSocketClass(this.url);
        } catch (c) {
          o.error(c);
          return;
        }
        this.connectionStateSubject.next(r.CONNECTING), a.onclose = (c) => {
          this.clearWebSocket(), o.error(new Error(`websocket error ${c.code}: ${c.reason}`)), this.connectionStateSubject.next(r.DISCONNECTED);
        }, a.onopen = (c) => {
          o.next(), o.complete(), this.connectionStateSubject.next(r.CONNECTED);
        }, a.onmessage = (c) => {
          this.incomingDataSubject.next(c.data);
        };
      }).pipe((0, t.take)(1));
    }
    disconnect() {
      const { webSocket: o } = this;
      if (!!o) {
        this.clearWebSocket(), this.connectionStateSubject.next(r.DISCONNECTED);
        try {
          o.close();
        } catch {
        }
      }
    }
    get connectionState$() {
      return this.connectionStateSubject.asObservable();
    }
    get incomingData$() {
      return this.incomingDataSubject.asObservable();
    }
    get incomingJSONData$() {
      return this.incomingData$.pipe((0, t.flatMap)((o) => {
        let a;
        try {
          a = JSON.parse(o);
        } catch {
          return (0, e.empty)();
        }
        return (0, e.of)(a);
      }));
    }
    sendData(o) {
      const { webSocket: a } = this;
      if (!a)
        throw new Error("websocket is not connected");
      a.send(o);
    }
    clearWebSocket() {
      const { webSocket: o } = this;
      !o || (this.webSocket = null, o.onclose = null, o.onerror = null, o.onmessage = null, o.onopen = null);
    }
  }
  n.RxWebSocket = i;
})(Ga);
var gr = {};
Object.defineProperty(gr, "__esModule", { value: !0 });
gr.isServerMessageFail = void 0;
function wg(n) {
  return n && n.type === "Fail" && typeof n.id == "number" && typeof n.sessionId == "string" && typeof n.error == "string";
}
gr.isServerMessageFail = wg;
Object.defineProperty(br, "__esModule", { value: !0 });
br.WalletSDKConnection = void 0;
const xe = jt, C = Zn, Vt = Ot, pt = dn, $t = ve, Ht = Tt, Cn = Ga, $r = gr, Gs = 1e4, Sg = 6e4;
class xg {
  constructor(e, t, r, i, s = WebSocket) {
    this.sessionId = e, this.sessionKey = t, this.diagnostic = i, this.subscriptions = new xe.Subscription(), this.destroyed = !1, this.lastHeartbeatResponse = 0, this.nextReqId = (0, pt.IntNumber)(1), this.connectedSubject = new xe.BehaviorSubject(!1), this.linkedSubject = new xe.BehaviorSubject(!1), this.sessionConfigSubject = new xe.ReplaySubject(1);
    const o = new Cn.RxWebSocket(r + "/rpc", s);
    this.ws = o, this.subscriptions.add(o.connectionState$.pipe(
      (0, C.tap)((a) => {
        var c;
        return (c = this.diagnostic) === null || c === void 0 ? void 0 : c.log(Ht.EVENTS.CONNECTED_STATE_CHANGE, {
          state: a,
          sessionIdHash: Vt.Session.hash(e)
        });
      }),
      (0, C.skip)(1),
      (0, C.filter)((a) => a === Cn.ConnectionState.DISCONNECTED && !this.destroyed),
      (0, C.delay)(5e3),
      (0, C.filter)((a) => !this.destroyed),
      (0, C.flatMap)((a) => o.connect()),
      (0, C.retry)()
    ).subscribe()), this.subscriptions.add(o.connectionState$.pipe(
      (0, C.skip)(2),
      (0, C.switchMap)((a) => (0, xe.iif)(
        () => a === Cn.ConnectionState.CONNECTED,
        this.authenticate().pipe((0, C.tap)((c) => this.sendIsLinked()), (0, C.tap)((c) => this.sendGetSessionConfig()), (0, C.map)((c) => !0)),
        (0, xe.of)(!1)
      )),
      (0, C.distinctUntilChanged)(),
      (0, C.catchError)((a) => (0, xe.of)(!1))
    ).subscribe((a) => this.connectedSubject.next(a))), this.subscriptions.add(o.connectionState$.pipe(
      (0, C.skip)(1),
      (0, C.switchMap)((a) => (0, xe.iif)(
        () => a === Cn.ConnectionState.CONNECTED,
        (0, xe.timer)(0, Gs)
      ))
    ).subscribe((a) => a === 0 ? this.updateLastHeartbeat() : this.heartbeat())), this.subscriptions.add(o.incomingData$.pipe((0, C.filter)((a) => a === "h")).subscribe((a) => this.updateLastHeartbeat())), this.subscriptions.add(o.incomingJSONData$.pipe((0, C.filter)((a) => ["IsLinkedOK", "Linked"].includes(a.type))).subscribe((a) => {
      var c;
      const l = a;
      (c = this.diagnostic) === null || c === void 0 || c.log(Ht.EVENTS.LINKED, {
        sessionIdHash: Vt.Session.hash(e),
        linked: l.linked,
        type: a.type,
        onlineGuests: l.onlineGuests
      }), this.linkedSubject.next(l.linked || l.onlineGuests > 0);
    })), this.subscriptions.add(o.incomingJSONData$.pipe((0, C.filter)((a) => ["GetSessionConfigOK", "SessionConfigUpdated"].includes(a.type))).subscribe((a) => {
      var c;
      const l = a;
      (c = this.diagnostic) === null || c === void 0 || c.log(Ht.EVENTS.SESSION_CONFIG_RECEIVED, {
        sessionIdHash: Vt.Session.hash(e),
        metadata_keys: l && l.metadata ? Object.keys(l.metadata) : void 0
      }), this.sessionConfigSubject.next({
        webhookId: l.webhookId,
        webhookUrl: l.webhookUrl,
        metadata: l.metadata
      });
    }));
  }
  connect() {
    var e;
    if (this.destroyed)
      throw new Error("instance is destroyed");
    (e = this.diagnostic) === null || e === void 0 || e.log(Ht.EVENTS.STARTED_CONNECTING, {
      sessionIdHash: Vt.Session.hash(this.sessionId)
    }), this.ws.connect().subscribe();
  }
  destroy() {
    var e;
    this.subscriptions.unsubscribe(), this.ws.disconnect(), (e = this.diagnostic) === null || e === void 0 || e.log(Ht.EVENTS.DISCONNECTED, {
      sessionIdHash: Vt.Session.hash(this.sessionId)
    }), this.destroyed = !0;
  }
  get isDestroyed() {
    return this.destroyed;
  }
  get connected$() {
    return this.connectedSubject.asObservable();
  }
  get onceConnected$() {
    return this.connected$.pipe((0, C.filter)((e) => e), (0, C.take)(1), (0, C.map)(() => {
    }));
  }
  get linked$() {
    return this.linkedSubject.asObservable();
  }
  get onceLinked$() {
    return this.linked$.pipe((0, C.filter)((e) => e), (0, C.take)(1), (0, C.map)(() => {
    }));
  }
  get sessionConfig$() {
    return this.sessionConfigSubject.asObservable();
  }
  get incomingEvent$() {
    return this.ws.incomingJSONData$.pipe((0, C.filter)((e) => {
      if (e.type !== "Event")
        return !1;
      const t = e;
      return typeof t.sessionId == "string" && typeof t.eventId == "string" && typeof t.event == "string" && typeof t.data == "string";
    }), (0, C.map)((e) => e));
  }
  setSessionMetadata(e, t) {
    const r = (0, $t.ClientMessageSetSessionConfig)({
      id: (0, pt.IntNumber)(this.nextReqId++),
      sessionId: this.sessionId,
      metadata: { [e]: t }
    });
    return this.onceConnected$.pipe((0, C.flatMap)((i) => this.makeRequest(r)), (0, C.map)((i) => {
      if ((0, $r.isServerMessageFail)(i))
        throw new Error(i.error || "failed to set session metadata");
    }));
  }
  publishEvent(e, t, r = !1) {
    const i = (0, $t.ClientMessagePublishEvent)({
      id: (0, pt.IntNumber)(this.nextReqId++),
      sessionId: this.sessionId,
      event: e,
      data: t,
      callWebhook: r
    });
    return this.onceLinked$.pipe((0, C.flatMap)((s) => this.makeRequest(i)), (0, C.map)((s) => {
      if ((0, $r.isServerMessageFail)(s))
        throw new Error(s.error || "failed to publish event");
      return s.eventId;
    }));
  }
  sendData(e) {
    this.ws.sendData(JSON.stringify(e));
  }
  updateLastHeartbeat() {
    this.lastHeartbeatResponse = Date.now();
  }
  heartbeat() {
    if (Date.now() - this.lastHeartbeatResponse > Gs * 2) {
      this.ws.disconnect();
      return;
    }
    try {
      this.ws.sendData("h");
    } catch {
    }
  }
  makeRequest(e, t = Sg) {
    const r = e.id;
    try {
      this.sendData(e);
    } catch (i) {
      return (0, xe.throwError)(i);
    }
    return this.ws.incomingJSONData$.pipe((0, C.timeoutWith)(t, (0, xe.throwError)(new Error(`request ${r} timed out`))), (0, C.filter)((i) => i.id === r), (0, C.take)(1));
  }
  authenticate() {
    const e = (0, $t.ClientMessageHostSession)({
      id: (0, pt.IntNumber)(this.nextReqId++),
      sessionId: this.sessionId,
      sessionKey: this.sessionKey
    });
    return this.makeRequest(e).pipe((0, C.map)((t) => {
      if ((0, $r.isServerMessageFail)(t))
        throw new Error(t.error || "failed to authentcate");
    }));
  }
  sendIsLinked() {
    const e = (0, $t.ClientMessageIsLinked)({
      id: (0, pt.IntNumber)(this.nextReqId++),
      sessionId: this.sessionId
    });
    this.sendData(e);
  }
  sendGetSessionConfig() {
    const e = (0, $t.ClientMessageGetSessionConfig)({
      id: (0, pt.IntNumber)(this.nextReqId++),
      sessionId: this.sessionId
    });
    this.sendData(e);
  }
}
br.WalletSDKConnection = xg;
var vr = {};
Object.defineProperty(vr, "__esModule", { value: !0 });
vr.WalletUIError = void 0;
class sn extends Error {
  constructor(e, t) {
    super(e), this.message = e, this.errorCode = t;
  }
}
vr.WalletUIError = sn;
sn.UserRejectedRequest = new sn("User rejected request");
sn.SwitchEthereumChainUnsupportedChainId = new sn("Unsupported chainId", 4902);
var At = {};
Object.defineProperty(At, "__esModule", { value: !0 });
At.decrypt = At.encrypt = void 0;
const Eg = jt, Wn = y;
async function Cg(n, e) {
  if (e.length !== 64)
    throw Error("secret must be 256 bits");
  const t = crypto.getRandomValues(new Uint8Array(12)), r = await crypto.subtle.importKey("raw", (0, Wn.hexStringToUint8Array)(e), { name: "aes-gcm" }, !1, ["encrypt", "decrypt"]), i = new TextEncoder(), s = await window.crypto.subtle.encrypt({
    name: "AES-GCM",
    iv: t
  }, r, i.encode(n)), o = 16, a = s.slice(s.byteLength - o), c = s.slice(0, s.byteLength - o), l = new Uint8Array(a), u = new Uint8Array(c), d = new Uint8Array([
    ...t,
    ...l,
    ...u
  ]);
  return (0, Wn.uint8ArrayToHex)(d);
}
At.encrypt = Cg;
function kg(n, e) {
  if (e.length !== 64)
    throw Error("secret must be 256 bits");
  return new Eg.Observable((t) => {
    (async function() {
      const r = await crypto.subtle.importKey("raw", (0, Wn.hexStringToUint8Array)(e), { name: "aes-gcm" }, !1, ["encrypt", "decrypt"]), i = (0, Wn.hexStringToUint8Array)(n), s = i.slice(0, 12), o = i.slice(12, 28), a = i.slice(28), c = new Uint8Array([
        ...a,
        ...o
      ]), l = {
        name: "AES-GCM",
        iv: new Uint8Array(s)
      };
      try {
        const u = await window.crypto.subtle.decrypt(l, r, c), d = new TextDecoder();
        t.next(d.decode(u)), t.complete();
      } catch (u) {
        t.error(u);
      }
    })();
  });
}
At.decrypt = kg;
var $i = {};
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.Web3Method = void 0, function(e) {
    e.requestEthereumAccounts = "requestEthereumAccounts", e.signEthereumMessage = "signEthereumMessage", e.signEthereumTransaction = "signEthereumTransaction", e.submitEthereumTransaction = "submitEthereumTransaction", e.ethereumAddressFromSignedMessage = "ethereumAddressFromSignedMessage", e.scanQRCode = "scanQRCode", e.generic = "generic", e.childRequestEthereumAccounts = "childRequestEthereumAccounts", e.addEthereumChain = "addEthereumChain", e.switchEthereumChain = "switchEthereumChain", e.makeEthereumJSONRPCRequest = "makeEthereumJSONRPCRequest", e.watchAsset = "watchAsset", e.selectProvider = "selectProvider";
  }(n.Web3Method || (n.Web3Method = {}));
})($i);
var yr = {}, mr = {};
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.RelayMessageType = void 0, function(e) {
    e.SESSION_ID_REQUEST = "SESSION_ID_REQUEST", e.SESSION_ID_RESPONSE = "SESSION_ID_RESPONSE", e.LINKED = "LINKED", e.UNLINKED = "UNLINKED", e.WEB3_REQUEST = "WEB3_REQUEST", e.WEB3_REQUEST_CANCELED = "WEB3_REQUEST_CANCELED", e.WEB3_RESPONSE = "WEB3_RESPONSE";
  }(n.RelayMessageType || (n.RelayMessageType = {}));
})(mr);
Object.defineProperty(yr, "__esModule", { value: !0 });
yr.Web3RequestCanceledMessage = void 0;
const Mg = mr;
function Ig(n) {
  return { type: Mg.RelayMessageType.WEB3_REQUEST_CANCELED, id: n };
}
yr.Web3RequestCanceledMessage = Ig;
var _r = {};
Object.defineProperty(_r, "__esModule", { value: !0 });
_r.Web3RequestMessage = void 0;
const Ag = mr;
function Ng(n) {
  return Object.assign({ type: Ag.RelayMessageType.WEB3_REQUEST }, n);
}
_r.Web3RequestMessage = Ng;
var L = {};
Object.defineProperty(L, "__esModule", { value: !0 });
L.EthereumAddressFromSignedMessageResponse = L.SubmitEthereumTransactionResponse = L.SignEthereumTransactionResponse = L.SignEthereumMessageResponse = L.isRequestEthereumAccountsResponse = L.SelectProviderResponse = L.WatchAssetReponse = L.RequestEthereumAccountsResponse = L.SwitchEthereumChainResponse = L.AddEthereumChainResponse = L.ErrorResponse = void 0;
const Le = $i;
function Tg(n, e, t) {
  return { method: n, errorMessage: e, errorCode: t };
}
L.ErrorResponse = Tg;
function Og(n) {
  return {
    method: Le.Web3Method.addEthereumChain,
    result: n
  };
}
L.AddEthereumChainResponse = Og;
function Rg(n) {
  return {
    method: Le.Web3Method.switchEthereumChain,
    result: n
  };
}
L.SwitchEthereumChainResponse = Rg;
function Dg(n) {
  return { method: Le.Web3Method.requestEthereumAccounts, result: n };
}
L.RequestEthereumAccountsResponse = Dg;
function Lg(n) {
  return { method: Le.Web3Method.watchAsset, result: n };
}
L.WatchAssetReponse = Lg;
function jg(n) {
  return { method: Le.Web3Method.selectProvider, result: n };
}
L.SelectProviderResponse = jg;
function Pg(n) {
  return n && n.method === Le.Web3Method.requestEthereumAccounts;
}
L.isRequestEthereumAccountsResponse = Pg;
function Fg(n) {
  return { method: Le.Web3Method.signEthereumMessage, result: n };
}
L.SignEthereumMessageResponse = Fg;
function Wg(n) {
  return { method: Le.Web3Method.signEthereumTransaction, result: n };
}
L.SignEthereumTransactionResponse = Wg;
function Bg(n) {
  return { method: Le.Web3Method.submitEthereumTransaction, result: n };
}
L.SubmitEthereumTransactionResponse = Bg;
function Vg(n) {
  return {
    method: Le.Web3Method.ethereumAddressFromSignedMessage,
    result: n
  };
}
L.EthereumAddressFromSignedMessageResponse = Vg;
var Nt = {};
Object.defineProperty(Nt, "__esModule", { value: !0 });
Nt.isWeb3ResponseMessage = Nt.Web3ResponseMessage = void 0;
const Ya = mr;
function $g(n) {
  return Object.assign({ type: Ya.RelayMessageType.WEB3_RESPONSE }, n);
}
Nt.Web3ResponseMessage = $g;
function Hg(n) {
  return n && n.type === Ya.RelayMessageType.WEB3_RESPONSE;
}
Nt.isWeb3ResponseMessage = Hg;
var Ug = T && T.__createBinding || (Object.create ? function(n, e, t, r) {
  r === void 0 && (r = t), Object.defineProperty(n, r, { enumerable: !0, get: function() {
    return e[t];
  } });
} : function(n, e, t, r) {
  r === void 0 && (r = t), n[r] = e[t];
}), zg = T && T.__setModuleDefault || (Object.create ? function(n, e) {
  Object.defineProperty(n, "default", { enumerable: !0, value: e });
} : function(n, e) {
  n.default = e;
}), Ka = T && T.__decorate || function(n, e, t, r) {
  var i = arguments.length, s = i < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, t) : r, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    s = Reflect.decorate(n, e, t, r);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (o = n[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(e, t, s) : o(e, t)) || s);
  return i > 3 && s && Object.defineProperty(e, t, s), s;
}, qg = T && T.__importStar || function(n) {
  if (n && n.__esModule)
    return n;
  var e = {};
  if (n != null)
    for (var t in n)
      t !== "default" && Object.prototype.hasOwnProperty.call(n, t) && Ug(e, n, t);
  return zg(e, n), e;
}, Qg = T && T.__importDefault || function(n) {
  return n && n.__esModule ? n : { default: n };
};
Object.defineProperty(fr, "__esModule", { value: !0 });
fr.WalletSDKRelay = void 0;
const Ja = Qg(pr), Ys = Hn, Ut = jt, q = Zn, te = Tt, Zg = br, Hr = vr, Gg = dn, D = y, $e = qg(At), He = Ot, kn = ke, Q = $i, Yg = yr, Kg = _r, ue = L, ie = Nt;
class Ce extends kn.WalletSDKRelayAbstract {
  constructor(e) {
    var t;
    super(), this.accountsCallback = null, this.chainCallback = null, this.dappDefaultChainSubject = new Ut.BehaviorSubject(1), this.dappDefaultChain = 1, this.appName = "", this.appLogoUrl = null, this.subscriptions = new Ut.Subscription(), this.linkAPIUrl = e.linkAPIUrl, this.storage = e.storage, this.options = e;
    const { session: r, ui: i, connection: s } = this.subscribe();
    if (this._session = r, this.connection = s, this.relayEventManager = e.relayEventManager, e.diagnosticLogger && e.eventListener)
      throw new Error("Can't have both eventListener and diagnosticLogger options, use only diagnosticLogger");
    e.eventListener ? this.diagnostic = {
      log: e.eventListener.onEvent
    } : this.diagnostic = e.diagnosticLogger, this._reloadOnDisconnect = (t = e.reloadOnDisconnect) !== null && t !== void 0 ? t : !0, this.ui = i;
  }
  subscribe() {
    this.subscriptions.add(this.dappDefaultChainSubject.subscribe((i) => {
      this.dappDefaultChain !== i && (this.dappDefaultChain = i);
    }));
    const e = He.Session.load(this.storage) || new He.Session(this.storage).save(), t = new Zg.WalletSDKConnection(e.id, e.key, this.linkAPIUrl, this.diagnostic);
    this.subscriptions.add(t.sessionConfig$.subscribe({
      next: (i) => {
        this.onSessionConfigChanged(i);
      },
      error: () => {
        var i;
        (i = this.diagnostic) === null || i === void 0 || i.log(te.EVENTS.GENERAL_ERROR, {
          message: "error while invoking session config callback"
        });
      }
    })), this.subscriptions.add(t.incomingEvent$.pipe((0, q.filter)((i) => i.event === "Web3Response")).subscribe({ next: this.handleIncomingEvent })), this.subscriptions.add(t.linked$.pipe((0, q.skip)(1), (0, q.tap)((i) => {
      var s;
      this.isLinked = i;
      const o = this.storage.getItem(kn.LOCAL_STORAGE_ADDRESSES_KEY);
      if (i && (this.session.linked = i), this.isUnlinkedErrorState = !1, o) {
        const a = o.split(" "), c = this.storage.getItem("IsStandaloneSigning") === "true";
        if (a[0] !== "" && !i && this.session.linked && !c) {
          this.isUnlinkedErrorState = !0;
          const l = this.getSessionIdHash();
          (s = this.diagnostic) === null || s === void 0 || s.log(te.EVENTS.UNLINKED_ERROR_STATE, {
            sessionIdHash: l
          });
        }
      }
    })).subscribe()), this.subscriptions.add(t.sessionConfig$.pipe((0, q.filter)((i) => !!i.metadata && i.metadata.__destroyed === "1")).subscribe(() => {
      var i;
      const s = t.isDestroyed;
      return (i = this.diagnostic) === null || i === void 0 || i.log(te.EVENTS.METADATA_DESTROYED, {
        alreadyDestroyed: s,
        sessionIdHash: this.getSessionIdHash()
      }), this.resetAndReload();
    })), this.subscriptions.add(t.sessionConfig$.pipe((0, q.filter)((i) => i.metadata && i.metadata.WalletUsername !== void 0)).pipe((0, q.mergeMap)((i) => $e.decrypt(i.metadata.WalletUsername, e.secret))).subscribe({
      next: (i) => {
        this.storage.setItem(kn.WALLET_USER_NAME_KEY, i);
      },
      error: () => {
        var i;
        (i = this.diagnostic) === null || i === void 0 || i.log(te.EVENTS.GENERAL_ERROR, {
          message: "Had error decrypting",
          value: "username"
        });
      }
    })), this.subscriptions.add(t.sessionConfig$.pipe((0, q.filter)((i) => i.metadata && i.metadata.AppVersion !== void 0)).pipe((0, q.mergeMap)((i) => $e.decrypt(i.metadata.AppVersion, e.secret))).subscribe({
      next: (i) => {
        this.storage.setItem(kn.APP_VERSION_KEY, i);
      },
      error: () => {
        var i;
        (i = this.diagnostic) === null || i === void 0 || i.log(te.EVENTS.GENERAL_ERROR, {
          message: "Had error decrypting",
          value: "appversion"
        });
      }
    })), this.subscriptions.add(t.sessionConfig$.pipe((0, q.filter)((i) => i.metadata && i.metadata.ChainId !== void 0 && i.metadata.JsonRpcUrl !== void 0)).pipe((0, q.mergeMap)((i) => (0, Ut.zip)($e.decrypt(i.metadata.ChainId, e.secret), $e.decrypt(i.metadata.JsonRpcUrl, e.secret)))).pipe((0, q.distinctUntilChanged)()).subscribe({
      next: ([i, s]) => {
        this.chainCallback && this.chainCallback(i, s);
      },
      error: () => {
        var i;
        (i = this.diagnostic) === null || i === void 0 || i.log(te.EVENTS.GENERAL_ERROR, {
          message: "Had error decrypting",
          value: "chainId|jsonRpcUrl"
        });
      }
    })), this.subscriptions.add(t.sessionConfig$.pipe((0, q.filter)((i) => i.metadata && i.metadata.EthereumAddress !== void 0)).pipe((0, q.mergeMap)((i) => $e.decrypt(i.metadata.EthereumAddress, e.secret))).subscribe({
      next: (i) => {
        this.accountsCallback && this.accountsCallback([i]), Ce.accountRequestCallbackIds.size > 0 && (Array.from(Ce.accountRequestCallbackIds.values()).forEach((s) => {
          const o = (0, ie.Web3ResponseMessage)({
            id: s,
            response: (0, ue.RequestEthereumAccountsResponse)([
              i
            ])
          });
          this.invokeCallback(Object.assign(Object.assign({}, o), { id: s }));
        }), Ce.accountRequestCallbackIds.clear());
      },
      error: () => {
        var i;
        (i = this.diagnostic) === null || i === void 0 || i.log(te.EVENTS.GENERAL_ERROR, {
          message: "Had error decrypting",
          value: "selectedAddress"
        });
      }
    })), this.subscriptions.add(t.sessionConfig$.pipe((0, q.filter)((i) => i.metadata && i.metadata.AppSrc !== void 0)).pipe((0, q.mergeMap)((i) => $e.decrypt(i.metadata.AppSrc, e.secret))).subscribe({
      next: (i) => {
        this.ui.setAppSrc(i);
      },
      error: () => {
        var i;
        (i = this.diagnostic) === null || i === void 0 || i.log(te.EVENTS.GENERAL_ERROR, {
          message: "Had error decrypting",
          value: "appSrc"
        });
      }
    }));
    const r = this.options.uiConstructor({
      linkAPIUrl: this.options.linkAPIUrl,
      version: this.options.version,
      darkMode: this.options.darkMode,
      session: e,
      connected$: t.connected$,
      chainId$: this.dappDefaultChainSubject
    });
    return t.connect(), { session: e, ui: r, connection: t };
  }
  attachUI() {
    this.ui.attach();
  }
  resetAndReload() {
    this.connection.setSessionMetadata("__destroyed", "1").pipe((0, q.timeout)(1e3), (0, q.catchError)((e) => (0, Ut.of)(null))).subscribe((e) => {
      var t, r, i;
      const s = this.ui.isStandalone();
      try {
        this.subscriptions.unsubscribe();
      } catch {
        (t = this.diagnostic) === null || t === void 0 || t.log(te.EVENTS.GENERAL_ERROR, {
          message: "Had error unsubscribing"
        });
      }
      (r = this.diagnostic) === null || r === void 0 || r.log(te.EVENTS.SESSION_STATE_CHANGE, {
        method: "relay::resetAndReload",
        sessionMetadataChange: "__destroyed, 1",
        sessionIdHash: this.getSessionIdHash()
      }), this.connection.destroy();
      const o = He.Session.load(this.storage);
      if ((o == null ? void 0 : o.id) === this._session.id ? this.storage.clear() : o && ((i = this.diagnostic) === null || i === void 0 || i.log(te.EVENTS.SKIPPED_CLEARING_SESSION, {
        sessionIdHash: this.getSessionIdHash(),
        storedSessionIdHash: He.Session.hash(o.id)
      })), this._reloadOnDisconnect) {
        this.ui.reloadUI();
        return;
      }
      this.accountsCallback && this.accountsCallback([], !0);
      const { session: a, ui: c, connection: l } = this.subscribe();
      this._session = a, this.connection = l, this.ui = c, s && this.ui.setStandalone && this.ui.setStandalone(!0), this.attachUI();
    }, (e) => {
      var t;
      (t = this.diagnostic) === null || t === void 0 || t.log(te.EVENTS.FAILURE, {
        method: "relay::resetAndReload",
        message: `failed to reset and reload with ${e}`,
        sessionIdHash: this.getSessionIdHash()
      });
    });
  }
  setAppInfo(e, t) {
    this.appName = e, this.appLogoUrl = t;
  }
  getStorageItem(e) {
    return this.storage.getItem(e);
  }
  get session() {
    return this._session;
  }
  setStorageItem(e, t) {
    this.storage.setItem(e, t);
  }
  signEthereumMessage(e, t, r, i) {
    return this.sendRequest({
      method: Q.Web3Method.signEthereumMessage,
      params: {
        message: (0, D.hexStringFromBuffer)(e, !0),
        address: t,
        addPrefix: r,
        typedDataJson: i || null
      }
    });
  }
  ethereumAddressFromSignedMessage(e, t, r) {
    return this.sendRequest({
      method: Q.Web3Method.ethereumAddressFromSignedMessage,
      params: {
        message: (0, D.hexStringFromBuffer)(e, !0),
        signature: (0, D.hexStringFromBuffer)(t, !0),
        addPrefix: r
      }
    });
  }
  signEthereumTransaction(e) {
    return this.sendRequest({
      method: Q.Web3Method.signEthereumTransaction,
      params: {
        fromAddress: e.fromAddress,
        toAddress: e.toAddress,
        weiValue: (0, D.bigIntStringFromBN)(e.weiValue),
        data: (0, D.hexStringFromBuffer)(e.data, !0),
        nonce: e.nonce,
        gasPriceInWei: e.gasPriceInWei ? (0, D.bigIntStringFromBN)(e.gasPriceInWei) : null,
        maxFeePerGas: e.gasPriceInWei ? (0, D.bigIntStringFromBN)(e.gasPriceInWei) : null,
        maxPriorityFeePerGas: e.gasPriceInWei ? (0, D.bigIntStringFromBN)(e.gasPriceInWei) : null,
        gasLimit: e.gasLimit ? (0, D.bigIntStringFromBN)(e.gasLimit) : null,
        chainId: e.chainId,
        shouldSubmit: !1
      }
    });
  }
  signAndSubmitEthereumTransaction(e) {
    return this.sendRequest({
      method: Q.Web3Method.signEthereumTransaction,
      params: {
        fromAddress: e.fromAddress,
        toAddress: e.toAddress,
        weiValue: (0, D.bigIntStringFromBN)(e.weiValue),
        data: (0, D.hexStringFromBuffer)(e.data, !0),
        nonce: e.nonce,
        gasPriceInWei: e.gasPriceInWei ? (0, D.bigIntStringFromBN)(e.gasPriceInWei) : null,
        maxFeePerGas: e.maxFeePerGas ? (0, D.bigIntStringFromBN)(e.maxFeePerGas) : null,
        maxPriorityFeePerGas: e.maxPriorityFeePerGas ? (0, D.bigIntStringFromBN)(e.maxPriorityFeePerGas) : null,
        gasLimit: e.gasLimit ? (0, D.bigIntStringFromBN)(e.gasLimit) : null,
        chainId: e.chainId,
        shouldSubmit: !0
      }
    });
  }
  submitEthereumTransaction(e, t) {
    return this.sendRequest({
      method: Q.Web3Method.submitEthereumTransaction,
      params: {
        signedTransaction: (0, D.hexStringFromBuffer)(e, !0),
        chainId: t
      }
    });
  }
  scanQRCode(e) {
    return this.sendRequest({
      method: Q.Web3Method.scanQRCode,
      params: { regExp: e }
    });
  }
  getQRCodeUrl() {
    return (0, D.createQrUrl)(this._session.id, this._session.secret, this.linkAPIUrl, !1, this.options.version, this.dappDefaultChain);
  }
  genericRequest(e, t) {
    return this.sendRequest({
      method: Q.Web3Method.generic,
      params: {
        action: t,
        data: e
      }
    });
  }
  sendGenericMessage(e) {
    return this.sendRequest(e);
  }
  sendRequest(e) {
    let t = null;
    const r = (0, D.randomBytesHex)(8), i = (o) => {
      this.publishWeb3RequestCanceledEvent(r), this.handleErrorResponse(r, e.method, o), t == null || t();
    };
    return { promise: new Promise((o, a) => {
      this.ui.isStandalone() || (t = this.ui.showConnecting({
        isUnlinkedErrorState: this.isUnlinkedErrorState,
        onCancel: i,
        onResetConnection: this.resetAndReload
      })), this.relayEventManager.callbacks.set(r, (c) => {
        if (t == null || t(), c.errorMessage)
          return a(new Error(c.errorMessage));
        o(c);
      }), this.ui.isStandalone() ? this.sendRequestStandalone(r, e) : this.publishWeb3RequestEvent(r, e);
    }), cancel: i };
  }
  setConnectDisabled(e) {
    this.ui.setConnectDisabled(e);
  }
  setAccountsCallback(e) {
    this.accountsCallback = e;
  }
  setChainCallback(e) {
    this.chainCallback = e;
  }
  setDappDefaultChainCallback(e) {
    this.dappDefaultChainSubject.next(e);
  }
  publishWeb3RequestEvent(e, t) {
    var r;
    const i = (0, Kg.Web3RequestMessage)({ id: e, request: t }), s = He.Session.load(this.storage);
    (r = this.diagnostic) === null || r === void 0 || r.log(te.EVENTS.WEB3_REQUEST, {
      eventId: i.id,
      method: `relay::${i.request.method}`,
      sessionIdHash: this.getSessionIdHash(),
      storedSessionIdHash: s ? He.Session.hash(s.id) : "",
      isSessionMismatched: ((s == null ? void 0 : s.id) !== this._session.id).toString()
    }), this.subscriptions.add(this.publishEvent("Web3Request", i, !0).subscribe({
      next: (o) => {
        var a;
        (a = this.diagnostic) === null || a === void 0 || a.log(te.EVENTS.WEB3_REQUEST_PUBLISHED, {
          eventId: i.id,
          method: `relay::${i.request.method}`,
          sessionIdHash: this.getSessionIdHash(),
          storedSessionIdHash: s ? He.Session.hash(s.id) : "",
          isSessionMismatched: ((s == null ? void 0 : s.id) !== this._session.id).toString()
        });
      },
      error: (o) => {
        this.handleWeb3ResponseMessage((0, ie.Web3ResponseMessage)({
          id: i.id,
          response: {
            method: i.request.method,
            errorMessage: o.message
          }
        }));
      }
    }));
  }
  publishWeb3RequestCanceledEvent(e) {
    const t = (0, Yg.Web3RequestCanceledMessage)(e);
    this.subscriptions.add(this.publishEvent("Web3RequestCanceled", t, !1).subscribe());
  }
  publishEvent(e, t, r) {
    const i = this.session.secret;
    return new Ut.Observable((s) => {
      $e.encrypt(JSON.stringify(Object.assign(Object.assign({}, t), { origin: location.origin })), i).then((o) => {
        s.next(o), s.complete();
      });
    }).pipe((0, q.mergeMap)((s) => this.connection.publishEvent(e, s, r)));
  }
  handleIncomingEvent(e) {
    try {
      this.subscriptions.add($e.decrypt(e.data, this.session.secret).pipe((0, q.map)((t) => JSON.parse(t))).subscribe({
        next: (t) => {
          const r = (0, ie.isWeb3ResponseMessage)(t) ? t : null;
          !r || this.handleWeb3ResponseMessage(r);
        },
        error: () => {
          var t;
          (t = this.diagnostic) === null || t === void 0 || t.log(te.EVENTS.GENERAL_ERROR, {
            message: "Had error decrypting",
            value: "incomingEvent"
          });
        }
      }));
    } catch {
      return;
    }
  }
  handleWeb3ResponseMessage(e) {
    var t;
    const { response: r } = e;
    if ((t = this.diagnostic) === null || t === void 0 || t.log(te.EVENTS.WEB3_RESPONSE, {
      eventId: e.id,
      method: `relay::${r.method}`,
      sessionIdHash: this.getSessionIdHash()
    }), (0, ue.isRequestEthereumAccountsResponse)(r)) {
      Ce.accountRequestCallbackIds.forEach((i) => this.invokeCallback(Object.assign(Object.assign({}, e), { id: i }))), Ce.accountRequestCallbackIds.clear();
      return;
    }
    this.invokeCallback(e);
  }
  handleErrorResponse(e, t, r, i) {
    this.handleWeb3ResponseMessage((0, ie.Web3ResponseMessage)({
      id: e,
      response: (0, ue.ErrorResponse)(t, (r != null ? r : Hr.WalletUIError.UserRejectedRequest).message, i)
    }));
  }
  invokeCallback(e) {
    const t = this.relayEventManager.callbacks.get(e.id);
    t && (t(e.response), this.relayEventManager.callbacks.delete(e.id));
  }
  requestEthereumAccounts() {
    const e = {
      method: Q.Web3Method.requestEthereumAccounts,
      params: {
        appName: this.appName,
        appLogoUrl: this.appLogoUrl || null
      }
    }, t = (0, D.randomBytesHex)(8), r = (s) => {
      this.publishWeb3RequestCanceledEvent(t), this.handleErrorResponse(t, e.method, s);
    };
    return { promise: new Promise((s, o) => {
      var a;
      this.relayEventManager.callbacks.set(t, (l) => {
        if (this.ui.hideRequestEthereumAccounts(), l.errorMessage)
          return o(new Error(l.errorMessage));
        s(l);
      });
      const c = ((a = window == null ? void 0 : window.navigator) === null || a === void 0 ? void 0 : a.userAgent) || null;
      if (c && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(c)) {
        let l;
        try {
          (0, D.isInIFrame)() && window.top ? l = window.top.location : l = window.location;
        } catch {
          l = window.location;
        }
        l.href = `https://www.coinbase.com/connect-dapp?uri=${encodeURIComponent(l.href)}`;
        return;
      }
      if (this.ui.inlineAccountsResponse()) {
        const l = (u) => {
          this.handleWeb3ResponseMessage((0, ie.Web3ResponseMessage)({
            id: t,
            response: (0, ue.RequestEthereumAccountsResponse)(u)
          }));
        };
        this.ui.requestEthereumAccounts({
          onCancel: r,
          onAccounts: l
        });
      } else {
        const l = Ys.ethErrors.provider.userRejectedRequest("User denied account authorization");
        this.ui.requestEthereumAccounts({
          onCancel: () => r(l)
        });
      }
      Ce.accountRequestCallbackIds.add(t), !this.ui.inlineAccountsResponse() && !this.ui.isStandalone() && this.publishWeb3RequestEvent(t, e);
    }), cancel: r };
  }
  selectProvider(e) {
    const t = {
      method: Q.Web3Method.selectProvider,
      params: {
        providerOptions: e
      }
    }, r = (0, D.randomBytesHex)(8), i = (o) => {
      this.publishWeb3RequestCanceledEvent(r), this.handleErrorResponse(r, t.method, o);
    }, s = new Promise((o, a) => {
      this.relayEventManager.callbacks.set(r, (u) => {
        if (u.errorMessage)
          return a(new Error(u.errorMessage));
        o(u);
      });
      const c = (u) => {
        this.handleWeb3ResponseMessage((0, ie.Web3ResponseMessage)({
          id: r,
          response: (0, ue.SelectProviderResponse)(Gg.ProviderType.Unselected)
        }));
      }, l = (u) => {
        this.handleWeb3ResponseMessage((0, ie.Web3ResponseMessage)({
          id: r,
          response: (0, ue.SelectProviderResponse)(u)
        }));
      };
      this.ui.selectProvider && this.ui.selectProvider({
        onApprove: l,
        onCancel: c,
        providerOptions: e
      });
    });
    return { cancel: i, promise: s };
  }
  watchAsset(e, t, r, i, s, o) {
    const a = {
      method: Q.Web3Method.watchAsset,
      params: {
        type: e,
        options: {
          address: t,
          symbol: r,
          decimals: i,
          image: s
        },
        chainId: o
      }
    };
    let c = null;
    const l = (0, D.randomBytesHex)(8), u = (h) => {
      this.publishWeb3RequestCanceledEvent(l), this.handleErrorResponse(l, a.method, h), c == null || c();
    };
    this.ui.inlineWatchAsset() || (c = this.ui.showConnecting({
      isUnlinkedErrorState: this.isUnlinkedErrorState,
      onCancel: u,
      onResetConnection: this.resetAndReload
    }));
    const d = new Promise((h, f) => {
      this.relayEventManager.callbacks.set(l, (v) => {
        if (c == null || c(), v.errorMessage)
          return f(new Error(v.errorMessage));
        h(v);
      });
      const b = (v) => {
        this.handleWeb3ResponseMessage((0, ie.Web3ResponseMessage)({
          id: l,
          response: (0, ue.WatchAssetReponse)(!1)
        }));
      }, w = () => {
        this.handleWeb3ResponseMessage((0, ie.Web3ResponseMessage)({
          id: l,
          response: (0, ue.WatchAssetReponse)(!0)
        }));
      };
      this.ui.inlineWatchAsset() && this.ui.watchAsset({
        onApprove: w,
        onCancel: b,
        type: e,
        address: t,
        symbol: r,
        decimals: i,
        image: s,
        chainId: o
      }), !this.ui.inlineWatchAsset() && !this.ui.isStandalone() && this.publishWeb3RequestEvent(l, a);
    });
    return { cancel: u, promise: d };
  }
  addEthereumChain(e, t, r, i, s, o) {
    const a = {
      method: Q.Web3Method.addEthereumChain,
      params: {
        chainId: e,
        rpcUrls: t,
        blockExplorerUrls: i,
        chainName: s,
        iconUrls: r,
        nativeCurrency: o
      }
    };
    let c = null;
    const l = (0, D.randomBytesHex)(8), u = (h) => {
      this.publishWeb3RequestCanceledEvent(l), this.handleErrorResponse(l, a.method, h), c == null || c();
    };
    return this.ui.inlineAddEthereumChain(e) || (c = this.ui.showConnecting({
      isUnlinkedErrorState: this.isUnlinkedErrorState,
      onCancel: u,
      onResetConnection: this.resetAndReload
    })), { promise: new Promise((h, f) => {
      this.relayEventManager.callbacks.set(l, (v) => {
        if (c == null || c(), v.errorMessage)
          return f(new Error(v.errorMessage));
        h(v);
      });
      const b = (v) => {
        this.handleWeb3ResponseMessage((0, ie.Web3ResponseMessage)({
          id: l,
          response: (0, ue.AddEthereumChainResponse)({
            isApproved: !1,
            rpcUrl: ""
          })
        }));
      }, w = (v) => {
        this.handleWeb3ResponseMessage((0, ie.Web3ResponseMessage)({
          id: l,
          response: (0, ue.AddEthereumChainResponse)({ isApproved: !0, rpcUrl: v })
        }));
      };
      this.ui.inlineAddEthereumChain(e) && this.ui.addEthereumChain({
        onCancel: b,
        onApprove: w,
        chainId: a.params.chainId,
        rpcUrls: a.params.rpcUrls,
        blockExplorerUrls: a.params.blockExplorerUrls,
        chainName: a.params.chainName,
        iconUrls: a.params.iconUrls,
        nativeCurrency: a.params.nativeCurrency
      }), !this.ui.inlineAddEthereumChain(e) && !this.ui.isStandalone() && this.publishWeb3RequestEvent(l, a);
    }), cancel: u };
  }
  switchEthereumChain(e, t) {
    const r = {
      method: Q.Web3Method.switchEthereumChain,
      params: Object.assign({ chainId: e }, { address: t })
    }, i = (0, D.randomBytesHex)(8), s = (a) => {
      this.publishWeb3RequestCanceledEvent(i), this.handleErrorResponse(i, r.method, a);
    };
    return { promise: new Promise((a, c) => {
      this.relayEventManager.callbacks.set(i, (d) => {
        if (d.errorMessage && d.errorCode)
          return c(Ys.ethErrors.provider.custom({
            code: d.errorCode,
            message: "Unrecognized chain ID. Try adding the chain using addEthereumChain first."
          }));
        if (d.errorMessage)
          return c(new Error(d.errorMessage));
        a(d);
      });
      const l = (d) => {
        if (typeof d == "number") {
          const h = d;
          this.handleWeb3ResponseMessage((0, ie.Web3ResponseMessage)({
            id: i,
            response: (0, ue.ErrorResponse)(Q.Web3Method.switchEthereumChain, Hr.WalletUIError.SwitchEthereumChainUnsupportedChainId.message, h)
          }));
        } else
          d instanceof Hr.WalletUIError ? this.handleErrorResponse(i, Q.Web3Method.switchEthereumChain, d, d.errorCode) : this.handleWeb3ResponseMessage((0, ie.Web3ResponseMessage)({
            id: i,
            response: (0, ue.SwitchEthereumChainResponse)({
              isApproved: !1,
              rpcUrl: ""
            })
          }));
      }, u = (d) => {
        this.handleWeb3ResponseMessage((0, ie.Web3ResponseMessage)({
          id: i,
          response: (0, ue.SwitchEthereumChainResponse)({
            isApproved: !0,
            rpcUrl: d
          })
        }));
      };
      this.ui.switchEthereumChain({
        onCancel: l,
        onApprove: u,
        chainId: r.params.chainId,
        address: r.params.address
      }), !this.ui.inlineSwitchEthereumChain() && !this.ui.isStandalone() && this.publishWeb3RequestEvent(i, r);
    }), cancel: s };
  }
  inlineAddEthereumChain(e) {
    return this.ui.inlineAddEthereumChain(e);
  }
  getSessionIdHash() {
    return He.Session.hash(this._session.id);
  }
  sendRequestStandalone(e, t) {
    const r = (s) => {
      this.handleErrorResponse(e, t.method, s);
    }, i = (s) => {
      this.handleWeb3ResponseMessage((0, ie.Web3ResponseMessage)({
        id: e,
        response: s
      }));
    };
    switch (t.method) {
      case Q.Web3Method.signEthereumMessage:
        this.ui.signEthereumMessage({
          request: t,
          onSuccess: i,
          onCancel: r
        });
        break;
      case Q.Web3Method.signEthereumTransaction:
        this.ui.signEthereumTransaction({
          request: t,
          onSuccess: i,
          onCancel: r
        });
        break;
      case Q.Web3Method.submitEthereumTransaction:
        this.ui.submitEthereumTransaction({
          request: t,
          onSuccess: i,
          onCancel: r
        });
        break;
      case Q.Web3Method.ethereumAddressFromSignedMessage:
        this.ui.ethereumAddressFromSignedMessage({
          request: t,
          onSuccess: i
        });
        break;
      default:
        r();
        break;
    }
  }
  onSessionConfigChanged(e) {
  }
}
Ce.accountRequestCallbackIds = /* @__PURE__ */ new Set();
Ka([
  Ja.default
], Ce.prototype, "resetAndReload", null);
Ka([
  Ja.default
], Ce.prototype, "handleIncomingEvent", null);
fr.WalletSDKRelay = Ce;
var wr = {};
Object.defineProperty(wr, "__esModule", { value: !0 });
wr.WalletSDKRelayEventManager = void 0;
const Jg = y;
class Xg {
  constructor() {
    this._nextRequestId = 0, this.callbacks = /* @__PURE__ */ new Map();
  }
  makeRequestId() {
    this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
    const e = this._nextRequestId, t = (0, Jg.prepend0x)(e.toString(16));
    return this.callbacks.get(t) && this.callbacks.delete(t), e;
  }
}
wr.WalletSDKRelayEventManager = Xg;
const ev = "@coinbase/wallet-sdk", tv = "3.6.2", nv = "Coinbase Wallet JavaScript SDK", rv = [
  "cipher",
  "cipherbrowser",
  "coinbase",
  "coinbasewallet",
  "eth",
  "ether",
  "ethereum",
  "etherium",
  "injection",
  "toshi",
  "wallet",
  "walletlink",
  "web3"
], iv = "dist/index.js", sv = "dist/index.d.ts", ov = "https://github.com/coinbase/coinbase-wallet-sdk.git", av = "Coinbase, Inc.", cv = "Apache-2.0", uv = {
  "pretest:unit": "node compile-assets.js",
  "test:unit": "jest",
  "test:unit:coverage": "yarn test:unit && open coverage/lcov-report/index.html",
  "test:karma": "yarn build-npm && karma start",
  prebuild: `rm -rf ./build && node -p "'export const LIB_VERSION = ' + JSON.stringify(require('./package.json').version) + ';'" > src/version.ts`,
  build: "node compile-assets.js && webpack --config webpack.config.js",
  "build-npm": "tsc -p ./tsconfig.build.json",
  "build:dev": "export LINK_API_URL='http://localhost:3000'; yarn build",
  "build:dev:watch": "nodemon -e 'ts,tsx,js,json,css,scss,svg' --ignore 'src/**/*-css.ts' --ignore 'src/**/*-svg.ts' --watch src/ --exec 'yarn build:dev'",
  "build:prod": `yarn prebuild && yarn build && yarn build-npm && cp ./package.json ../../README.md ./LICENSE build/npm && cp -a src/vendor-js build/npm/dist && sed -i.bak 's|  "private": true,||g' build/npm/package.json && rm -f build/npm/package.json.bak`,
  "lint:types": "tsc --noEmit",
  "lint:prettier": 'prettier --check "{src,__tests__}/**/*.(js|ts|tsx)"',
  "lint:eslint": "eslint ./src --ext .ts,.tsx",
  lint: "yarn lint:eslint && yarn lint:types && yarn lint:prettier",
  "fix:eslint": "yarn lint:eslint --fix",
  "fix:prettier": "prettier . --write",
  release: "./scripts/release.sh"
}, lv = {
  "@metamask/safe-event-emitter": "2.0.0",
  "@solana/web3.js": "1.52.0",
  "bind-decorator": "^1.0.11",
  "bn.js": "^5.1.1",
  buffer: "^6.0.3",
  clsx: "^1.1.0",
  "eth-block-tracker": "4.4.3",
  "eth-json-rpc-filters": "4.2.2",
  "eth-rpc-errors": "4.0.2",
  "json-rpc-engine": "6.1.0",
  keccak: "^3.0.1",
  preact: "^10.5.9",
  qs: "^6.10.3",
  rxjs: "^6.6.3",
  "sha.js": "^2.4.11",
  "stream-browserify": "^3.0.0",
  util: "^0.12.4"
}, hv = {
  "@babel/core": "^7.17.9",
  "@babel/plugin-proposal-decorators": "^7.17.9",
  "@babel/plugin-transform-react-jsx": "^7.17.3",
  "@babel/preset-env": "^7.16.11",
  "@babel/preset-typescript": "^7.16.7",
  "@peculiar/webcrypto": "^1.3.3",
  "@testing-library/jest-dom": "^5.16.4",
  "@testing-library/preact": "^2.0.1",
  "@types/bn.js": "^4.11.6",
  "@types/jest": "^27.4.1",
  "@types/node": "^14.14.20",
  "@types/qs": "^6.9.7",
  "@types/sha.js": "^2.4.0",
  "@typescript-eslint/eslint-plugin": "^5.7.0",
  "@typescript-eslint/eslint-plugin-tslint": "^5.7.0",
  "@typescript-eslint/parser": "^5.7.0",
  "babel-jest": "^27.5.1",
  browserify: "17.0.0",
  "copy-webpack-plugin": "^6.4.1",
  "core-js": "^3.8.2",
  eslint: "^8.4.1",
  "eslint-config-prettier": "^8.3.0",
  "eslint-plugin-import": "^2.25.3",
  "eslint-plugin-preact": "^0.1.0",
  "eslint-plugin-prettier": "^4.0.0",
  "eslint-plugin-simple-import-sort": "^7.0.0",
  jasmine: "3.8.0",
  jest: "^27.5.1",
  "jest-chrome": "^0.7.2",
  "jest-websocket-mock": "^2.3.0",
  karma: "^6.3.15",
  "karma-browserify": "8.1.0",
  "karma-chrome-launcher": "^3.1.0",
  "karma-jasmine": "^4.0.1",
  nodemon: "^2.0.6",
  prettier: "^2.5.1",
  "raw-loader": "^4.0.2",
  "regenerator-runtime": "^0.13.7",
  sass: "^1.50.0",
  svgo: "^2.8.0",
  "ts-jest": "^27.1.4",
  "ts-loader": "^8.0.13",
  "ts-node": "^10.7.0",
  tslib: "^2.0.3",
  typescript: "^4.1.3",
  watchify: "4.0.0",
  webpack: "^5.72.0",
  "webpack-cli": "^4.9.2",
  "whatwg-fetch": "^3.5.0"
}, dv = {
  node: ">= 10.0.0"
}, fv = {
  name: ev,
  version: tv,
  description: nv,
  keywords: rv,
  main: iv,
  types: sv,
  repository: ov,
  author: av,
  license: cv,
  scripts: uv,
  dependencies: lv,
  devDependencies: hv,
  engines: dv
};
Object.defineProperty(Xt, "__esModule", { value: !0 });
Xt.CoinbaseWalletSDK = void 0;
const pv = Vn, bv = $n, gv = _t, vv = Jn, yv = fr, mv = wr, _v = y, wv = Ks.exports.env.LINK_API_URL || "https://www.walletlink.org", Xa = Ks.exports.env.SDK_VERSION || fv.version || "unknown";
class Sr {
  constructor(e) {
    var t, r, i;
    this._appName = "", this._appLogoUrl = null, this._relay = null, this._relayEventManager = null;
    const s = e.linkAPIUrl || wv;
    let o;
    if (e.uiConstructor ? o = e.uiConstructor : o = (l) => new vv.WalletSDKUI(l), typeof e.overrideIsMetaMask > "u" ? this._overrideIsMetaMask = !1 : this._overrideIsMetaMask = e.overrideIsMetaMask, this._overrideIsCoinbaseWallet = (t = e.overrideIsCoinbaseWallet) !== null && t !== void 0 ? t : !0, this._overrideIsCoinbaseBrowser = (r = e.overrideIsCoinbaseBrowser) !== null && r !== void 0 ? r : !1, e.diagnosticLogger && e.eventListener)
      throw new Error("Can't have both eventListener and diagnosticLogger options, use only diagnosticLogger");
    e.eventListener ? this._diagnosticLogger = {
      log: e.eventListener.onEvent
    } : this._diagnosticLogger = e.diagnosticLogger, this._reloadOnDisconnect = (i = e.reloadOnDisconnect) !== null && i !== void 0 ? i : !0;
    const a = new URL(s), c = `${a.protocol}//${a.host}`;
    this._storage = new bv.ScopedLocalStorage(`-walletlink:${c}`), this._storage.setItem("version", Sr.VERSION), !(this.walletExtension || this.coinbaseBrowser) && (this._relayEventManager = new mv.WalletSDKRelayEventManager(), this._relay = new yv.WalletSDKRelay({
      linkAPIUrl: s,
      version: Xa,
      darkMode: !!e.darkMode,
      uiConstructor: o,
      storage: this._storage,
      relayEventManager: this._relayEventManager,
      diagnosticLogger: this._diagnosticLogger
    }), this.setAppInfo(e.appName, e.appLogoUrl), !e.headlessMode && this._relay.attachUI());
  }
  makeWeb3Provider(e = "", t = 1) {
    const r = this.walletExtension;
    if (r)
      return this.isCipherProvider(r) || r.setProviderInfo(e, t), this._reloadOnDisconnect === !1 && typeof r.disableReloadOnDisconnect == "function" && r.disableReloadOnDisconnect(), r;
    const i = this.coinbaseBrowser;
    if (i)
      return i;
    const s = this._relay;
    if (!s || !this._relayEventManager || !this._storage)
      throw new Error("Relay not initialized, should never happen");
    return e || s.setConnectDisabled(!0), new gv.CoinbaseWalletProvider({
      relayProvider: () => Promise.resolve(s),
      relayEventManager: this._relayEventManager,
      storage: this._storage,
      jsonRpcUrl: e,
      chainId: t,
      qrUrl: this.getQrUrl(),
      diagnosticLogger: this._diagnosticLogger,
      overrideIsMetaMask: this._overrideIsMetaMask,
      overrideIsCoinbaseWallet: this._overrideIsCoinbaseWallet,
      overrideIsCoinbaseBrowser: this._overrideIsCoinbaseBrowser
    });
  }
  setAppInfo(e, t) {
    var r;
    this._appName = e || "DApp", this._appLogoUrl = t || (0, _v.getFavicon)();
    const i = this.walletExtension;
    i ? this.isCipherProvider(i) || i.setAppInfo(this._appName, this._appLogoUrl) : (r = this._relay) === null || r === void 0 || r.setAppInfo(this._appName, this._appLogoUrl);
  }
  disconnect() {
    var e;
    const t = this.walletExtension;
    t ? t.close() : (e = this._relay) === null || e === void 0 || e.resetAndReload();
  }
  getQrUrl() {
    var e, t;
    return (t = (e = this._relay) === null || e === void 0 ? void 0 : e.getQRCodeUrl()) !== null && t !== void 0 ? t : null;
  }
  getCoinbaseWalletLogo(e, t = 240) {
    return (0, pv.walletLogo)(e, t);
  }
  get walletExtension() {
    var e;
    return (e = window.coinbaseWalletExtension) !== null && e !== void 0 ? e : window.walletLinkExtension;
  }
  get coinbaseBrowser() {
    var e, t;
    try {
      const r = (e = window.ethereum) !== null && e !== void 0 ? e : (t = window.top) === null || t === void 0 ? void 0 : t.ethereum;
      return r && "isCoinbaseBrowser" in r && r.isCoinbaseBrowser ? r : void 0;
    } catch {
      return;
    }
  }
  isCipherProvider(e) {
    return typeof e.isCipher == "boolean" && e.isCipher;
  }
}
Xt.CoinbaseWalletSDK = Sr;
Sr.VERSION = Xa;
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.CoinbaseWalletProvider = n.CoinbaseWalletSDK = void 0;
  const e = Xt, t = _t;
  var r = Xt;
  Object.defineProperty(n, "CoinbaseWalletSDK", { enumerable: !0, get: function() {
    return r.CoinbaseWalletSDK;
  } });
  var i = _t;
  Object.defineProperty(n, "CoinbaseWalletProvider", { enumerable: !0, get: function() {
    return i.CoinbaseWalletProvider;
  } }), n.default = e.CoinbaseWalletSDK, typeof window < "u" && (window.CoinbaseWalletSDK = e.CoinbaseWalletSDK, window.CoinbaseWalletProvider = t.CoinbaseWalletProvider, window.WalletLink = e.CoinbaseWalletSDK, window.WalletLinkProvider = t.CoinbaseWalletProvider);
})(ai);
const Sv = /* @__PURE__ */ tc(ai), kv = /* @__PURE__ */ hc({
  __proto__: null,
  default: Sv
}, [ai]);
export {
  kv as i
};
