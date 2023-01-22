import { c as be, b as fe } from "./index.0b70358b.js";
import { a as Ae, r as Bi } from "./bn.417b6381.js";
var _o = { exports: {} };
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
(function(e) {
  var t, n, a, s, c, u, o, l, _, A, j, O, y, m, C, J, w, E, F, P, T, W, X;
  (function(D) {
    var Z = typeof be == "object" ? be : typeof self == "object" ? self : typeof this == "object" ? this : {};
    D(I(Z, I(e.exports)));
    function I(U, q) {
      return U !== Z && (typeof Object.create == "function" ? Object.defineProperty(U, "__esModule", { value: !0 }) : U.__esModule = !0), function(b, S) {
        return U[b] = q ? q(b, S) : S;
      };
    }
  })(function(D) {
    var Z = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(I, U) {
      I.__proto__ = U;
    } || function(I, U) {
      for (var q in U)
        U.hasOwnProperty(q) && (I[q] = U[q]);
    };
    t = function(I, U) {
      Z(I, U);
      function q() {
        this.constructor = I;
      }
      I.prototype = U === null ? Object.create(U) : (q.prototype = U.prototype, new q());
    }, n = Object.assign || function(I) {
      for (var U, q = 1, b = arguments.length; q < b; q++) {
        U = arguments[q];
        for (var S in U)
          Object.prototype.hasOwnProperty.call(U, S) && (I[S] = U[S]);
      }
      return I;
    }, a = function(I, U) {
      var q = {};
      for (var b in I)
        Object.prototype.hasOwnProperty.call(I, b) && U.indexOf(b) < 0 && (q[b] = I[b]);
      if (I != null && typeof Object.getOwnPropertySymbols == "function")
        for (var S = 0, b = Object.getOwnPropertySymbols(I); S < b.length; S++)
          U.indexOf(b[S]) < 0 && Object.prototype.propertyIsEnumerable.call(I, b[S]) && (q[b[S]] = I[b[S]]);
      return q;
    }, s = function(I, U, q, b) {
      var S = arguments.length, B = S < 3 ? U : b === null ? b = Object.getOwnPropertyDescriptor(U, q) : b, N;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        B = Reflect.decorate(I, U, q, b);
      else
        for (var V = I.length - 1; V >= 0; V--)
          (N = I[V]) && (B = (S < 3 ? N(B) : S > 3 ? N(U, q, B) : N(U, q)) || B);
      return S > 3 && B && Object.defineProperty(U, q, B), B;
    }, c = function(I, U) {
      return function(q, b) {
        U(q, b, I);
      };
    }, u = function(I, U) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(I, U);
    }, o = function(I, U, q, b) {
      function S(B) {
        return B instanceof q ? B : new q(function(N) {
          N(B);
        });
      }
      return new (q || (q = Promise))(function(B, N) {
        function V(ne) {
          try {
            Y(b.next(ne));
          } catch (ie) {
            N(ie);
          }
        }
        function K(ne) {
          try {
            Y(b.throw(ne));
          } catch (ie) {
            N(ie);
          }
        }
        function Y(ne) {
          ne.done ? B(ne.value) : S(ne.value).then(V, K);
        }
        Y((b = b.apply(I, U || [])).next());
      });
    }, l = function(I, U) {
      var q = { label: 0, sent: function() {
        if (B[0] & 1)
          throw B[1];
        return B[1];
      }, trys: [], ops: [] }, b, S, B, N;
      return N = { next: V(0), throw: V(1), return: V(2) }, typeof Symbol == "function" && (N[Symbol.iterator] = function() {
        return this;
      }), N;
      function V(Y) {
        return function(ne) {
          return K([Y, ne]);
        };
      }
      function K(Y) {
        if (b)
          throw new TypeError("Generator is already executing.");
        for (; q; )
          try {
            if (b = 1, S && (B = Y[0] & 2 ? S.return : Y[0] ? S.throw || ((B = S.return) && B.call(S), 0) : S.next) && !(B = B.call(S, Y[1])).done)
              return B;
            switch (S = 0, B && (Y = [Y[0] & 2, B.value]), Y[0]) {
              case 0:
              case 1:
                B = Y;
                break;
              case 4:
                return q.label++, { value: Y[1], done: !1 };
              case 5:
                q.label++, S = Y[1], Y = [0];
                continue;
              case 7:
                Y = q.ops.pop(), q.trys.pop();
                continue;
              default:
                if (B = q.trys, !(B = B.length > 0 && B[B.length - 1]) && (Y[0] === 6 || Y[0] === 2)) {
                  q = 0;
                  continue;
                }
                if (Y[0] === 3 && (!B || Y[1] > B[0] && Y[1] < B[3])) {
                  q.label = Y[1];
                  break;
                }
                if (Y[0] === 6 && q.label < B[1]) {
                  q.label = B[1], B = Y;
                  break;
                }
                if (B && q.label < B[2]) {
                  q.label = B[2], q.ops.push(Y);
                  break;
                }
                B[2] && q.ops.pop(), q.trys.pop();
                continue;
            }
            Y = U.call(I, q);
          } catch (ne) {
            Y = [6, ne], S = 0;
          } finally {
            b = B = 0;
          }
        if (Y[0] & 5)
          throw Y[1];
        return { value: Y[0] ? Y[1] : void 0, done: !0 };
      }
    }, X = function(I, U, q, b) {
      b === void 0 && (b = q), I[b] = U[q];
    }, _ = function(I, U) {
      for (var q in I)
        q !== "default" && !U.hasOwnProperty(q) && (U[q] = I[q]);
    }, A = function(I) {
      var U = typeof Symbol == "function" && Symbol.iterator, q = U && I[U], b = 0;
      if (q)
        return q.call(I);
      if (I && typeof I.length == "number")
        return {
          next: function() {
            return I && b >= I.length && (I = void 0), { value: I && I[b++], done: !I };
          }
        };
      throw new TypeError(U ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }, j = function(I, U) {
      var q = typeof Symbol == "function" && I[Symbol.iterator];
      if (!q)
        return I;
      var b = q.call(I), S, B = [], N;
      try {
        for (; (U === void 0 || U-- > 0) && !(S = b.next()).done; )
          B.push(S.value);
      } catch (V) {
        N = { error: V };
      } finally {
        try {
          S && !S.done && (q = b.return) && q.call(b);
        } finally {
          if (N)
            throw N.error;
        }
      }
      return B;
    }, O = function() {
      for (var I = [], U = 0; U < arguments.length; U++)
        I = I.concat(j(arguments[U]));
      return I;
    }, y = function() {
      for (var I = 0, U = 0, q = arguments.length; U < q; U++)
        I += arguments[U].length;
      for (var b = Array(I), S = 0, U = 0; U < q; U++)
        for (var B = arguments[U], N = 0, V = B.length; N < V; N++, S++)
          b[S] = B[N];
      return b;
    }, m = function(I) {
      return this instanceof m ? (this.v = I, this) : new m(I);
    }, C = function(I, U, q) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var b = q.apply(I, U || []), S, B = [];
      return S = {}, N("next"), N("throw"), N("return"), S[Symbol.asyncIterator] = function() {
        return this;
      }, S;
      function N(g) {
        b[g] && (S[g] = function(L) {
          return new Promise(function(z, te) {
            B.push([g, L, z, te]) > 1 || V(g, L);
          });
        });
      }
      function V(g, L) {
        try {
          K(b[g](L));
        } catch (z) {
          ie(B[0][3], z);
        }
      }
      function K(g) {
        g.value instanceof m ? Promise.resolve(g.value.v).then(Y, ne) : ie(B[0][2], g);
      }
      function Y(g) {
        V("next", g);
      }
      function ne(g) {
        V("throw", g);
      }
      function ie(g, L) {
        g(L), B.shift(), B.length && V(B[0][0], B[0][1]);
      }
    }, J = function(I) {
      var U, q;
      return U = {}, b("next"), b("throw", function(S) {
        throw S;
      }), b("return"), U[Symbol.iterator] = function() {
        return this;
      }, U;
      function b(S, B) {
        U[S] = I[S] ? function(N) {
          return (q = !q) ? { value: m(I[S](N)), done: S === "return" } : B ? B(N) : N;
        } : B;
      }
    }, w = function(I) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var U = I[Symbol.asyncIterator], q;
      return U ? U.call(I) : (I = typeof A == "function" ? A(I) : I[Symbol.iterator](), q = {}, b("next"), b("throw"), b("return"), q[Symbol.asyncIterator] = function() {
        return this;
      }, q);
      function b(B) {
        q[B] = I[B] && function(N) {
          return new Promise(function(V, K) {
            N = I[B](N), S(V, K, N.done, N.value);
          });
        };
      }
      function S(B, N, V, K) {
        Promise.resolve(K).then(function(Y) {
          B({ value: Y, done: V });
        }, N);
      }
    }, E = function(I, U) {
      return Object.defineProperty ? Object.defineProperty(I, "raw", { value: U }) : I.raw = U, I;
    }, F = function(I) {
      if (I && I.__esModule)
        return I;
      var U = {};
      if (I != null)
        for (var q in I)
          Object.hasOwnProperty.call(I, q) && (U[q] = I[q]);
      return U.default = I, U;
    }, P = function(I) {
      return I && I.__esModule ? I : { default: I };
    }, T = function(I, U) {
      if (!U.has(I))
        throw new TypeError("attempted to get private field on non-instance");
      return U.get(I);
    }, W = function(I, U, q) {
      if (!U.has(I))
        throw new TypeError("attempted to set private field on non-instance");
      return U.set(I, q), q;
    }, D("__extends", t), D("__assign", n), D("__rest", a), D("__decorate", s), D("__param", c), D("__metadata", u), D("__awaiter", o), D("__generator", l), D("__exportStar", _), D("__createBinding", X), D("__values", A), D("__read", j), D("__spread", O), D("__spreadArrays", y), D("__await", m), D("__asyncGenerator", C), D("__asyncDelegator", J), D("__asyncValues", w), D("__makeTemplateObject", E), D("__importStar", F), D("__importDefault", P), D("__classPrivateFieldGet", T), D("__classPrivateFieldSet", W);
  });
})(_o);
var Or = {}, tt = {}, Rn;
function bo() {
  if (Rn)
    return tt;
  Rn = 1, tt.byteLength = o, tt.toByteArray = _, tt.fromByteArray = O;
  for (var e = [], t = [], n = typeof Uint8Array < "u" ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, c = a.length; s < c; ++s)
    e[s] = a[s], t[a.charCodeAt(s)] = s;
  t["-".charCodeAt(0)] = 62, t["_".charCodeAt(0)] = 63;
  function u(y) {
    var m = y.length;
    if (m % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var C = y.indexOf("=");
    C === -1 && (C = m);
    var J = C === m ? 0 : 4 - C % 4;
    return [C, J];
  }
  function o(y) {
    var m = u(y), C = m[0], J = m[1];
    return (C + J) * 3 / 4 - J;
  }
  function l(y, m, C) {
    return (m + C) * 3 / 4 - C;
  }
  function _(y) {
    var m, C = u(y), J = C[0], w = C[1], E = new n(l(y, J, w)), F = 0, P = w > 0 ? J - 4 : J, T;
    for (T = 0; T < P; T += 4)
      m = t[y.charCodeAt(T)] << 18 | t[y.charCodeAt(T + 1)] << 12 | t[y.charCodeAt(T + 2)] << 6 | t[y.charCodeAt(T + 3)], E[F++] = m >> 16 & 255, E[F++] = m >> 8 & 255, E[F++] = m & 255;
    return w === 2 && (m = t[y.charCodeAt(T)] << 2 | t[y.charCodeAt(T + 1)] >> 4, E[F++] = m & 255), w === 1 && (m = t[y.charCodeAt(T)] << 10 | t[y.charCodeAt(T + 1)] << 4 | t[y.charCodeAt(T + 2)] >> 2, E[F++] = m >> 8 & 255, E[F++] = m & 255), E;
  }
  function A(y) {
    return e[y >> 18 & 63] + e[y >> 12 & 63] + e[y >> 6 & 63] + e[y & 63];
  }
  function j(y, m, C) {
    for (var J, w = [], E = m; E < C; E += 3)
      J = (y[E] << 16 & 16711680) + (y[E + 1] << 8 & 65280) + (y[E + 2] & 255), w.push(A(J));
    return w.join("");
  }
  function O(y) {
    for (var m, C = y.length, J = C % 3, w = [], E = 16383, F = 0, P = C - J; F < P; F += E)
      w.push(j(y, F, F + E > P ? P : F + E));
    return J === 1 ? (m = y[C - 1], w.push(
      e[m >> 2] + e[m << 4 & 63] + "=="
    )) : J === 2 && (m = (y[C - 2] << 8) + y[C - 1], w.push(
      e[m >> 10] + e[m >> 4 & 63] + e[m << 2 & 63] + "="
    )), w.join("");
  }
  return tt;
}
var yt = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
var Bn;
function mo() {
  return Bn || (Bn = 1, yt.read = function(e, t, n, a, s) {
    var c, u, o = s * 8 - a - 1, l = (1 << o) - 1, _ = l >> 1, A = -7, j = n ? s - 1 : 0, O = n ? -1 : 1, y = e[t + j];
    for (j += O, c = y & (1 << -A) - 1, y >>= -A, A += o; A > 0; c = c * 256 + e[t + j], j += O, A -= 8)
      ;
    for (u = c & (1 << -A) - 1, c >>= -A, A += a; A > 0; u = u * 256 + e[t + j], j += O, A -= 8)
      ;
    if (c === 0)
      c = 1 - _;
    else {
      if (c === l)
        return u ? NaN : (y ? -1 : 1) * (1 / 0);
      u = u + Math.pow(2, a), c = c - _;
    }
    return (y ? -1 : 1) * u * Math.pow(2, c - a);
  }, yt.write = function(e, t, n, a, s, c) {
    var u, o, l, _ = c * 8 - s - 1, A = (1 << _) - 1, j = A >> 1, O = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, y = a ? 0 : c - 1, m = a ? 1 : -1, C = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
    for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (o = isNaN(t) ? 1 : 0, u = A) : (u = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -u)) < 1 && (u--, l *= 2), u + j >= 1 ? t += O / l : t += O * Math.pow(2, 1 - j), t * l >= 2 && (u++, l /= 2), u + j >= A ? (o = 0, u = A) : u + j >= 1 ? (o = (t * l - 1) * Math.pow(2, s), u = u + j) : (o = t * Math.pow(2, j - 1) * Math.pow(2, s), u = 0)); s >= 8; e[n + y] = o & 255, y += m, o /= 256, s -= 8)
      ;
    for (u = u << s | o, _ += s; _ > 0; e[n + y] = u & 255, y += m, u /= 256, _ -= 8)
      ;
    e[n + y - m] |= C * 128;
  }), yt;
}
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var In;
function Qe() {
  return In || (In = 1, function(e) {
    const t = bo(), n = mo(), a = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    e.Buffer = o, e.SlowBuffer = E, e.INSPECT_MAX_BYTES = 50;
    const s = 2147483647;
    e.kMaxLength = s, o.TYPED_ARRAY_SUPPORT = c(), !o.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
    );
    function c() {
      try {
        const f = new Uint8Array(1), r = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(r, Uint8Array.prototype), Object.setPrototypeOf(f, r), f.foo() === 42;
      } catch {
        return !1;
      }
    }
    Object.defineProperty(o.prototype, "parent", {
      enumerable: !0,
      get: function() {
        if (!!o.isBuffer(this))
          return this.buffer;
      }
    }), Object.defineProperty(o.prototype, "offset", {
      enumerable: !0,
      get: function() {
        if (!!o.isBuffer(this))
          return this.byteOffset;
      }
    });
    function u(f) {
      if (f > s)
        throw new RangeError('The value "' + f + '" is invalid for option "size"');
      const r = new Uint8Array(f);
      return Object.setPrototypeOf(r, o.prototype), r;
    }
    function o(f, r, i) {
      if (typeof f == "number") {
        if (typeof r == "string")
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        return j(f);
      }
      return l(f, r, i);
    }
    o.poolSize = 8192;
    function l(f, r, i) {
      if (typeof f == "string")
        return O(f, r);
      if (ArrayBuffer.isView(f))
        return m(f);
      if (f == null)
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof f
        );
      if (me(f, ArrayBuffer) || f && me(f.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (me(f, SharedArrayBuffer) || f && me(f.buffer, SharedArrayBuffer)))
        return C(f, r, i);
      if (typeof f == "number")
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      const d = f.valueOf && f.valueOf();
      if (d != null && d !== f)
        return o.from(d, r, i);
      const R = J(f);
      if (R)
        return R;
      if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof f[Symbol.toPrimitive] == "function")
        return o.from(f[Symbol.toPrimitive]("string"), r, i);
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof f
      );
    }
    o.from = function(f, r, i) {
      return l(f, r, i);
    }, Object.setPrototypeOf(o.prototype, Uint8Array.prototype), Object.setPrototypeOf(o, Uint8Array);
    function _(f) {
      if (typeof f != "number")
        throw new TypeError('"size" argument must be of type number');
      if (f < 0)
        throw new RangeError('The value "' + f + '" is invalid for option "size"');
    }
    function A(f, r, i) {
      return _(f), f <= 0 ? u(f) : r !== void 0 ? typeof i == "string" ? u(f).fill(r, i) : u(f).fill(r) : u(f);
    }
    o.alloc = function(f, r, i) {
      return A(f, r, i);
    };
    function j(f) {
      return _(f), u(f < 0 ? 0 : w(f) | 0);
    }
    o.allocUnsafe = function(f) {
      return j(f);
    }, o.allocUnsafeSlow = function(f) {
      return j(f);
    };
    function O(f, r) {
      if ((typeof r != "string" || r === "") && (r = "utf8"), !o.isEncoding(r))
        throw new TypeError("Unknown encoding: " + r);
      const i = F(f, r) | 0;
      let d = u(i);
      const R = d.write(f, r);
      return R !== i && (d = d.slice(0, R)), d;
    }
    function y(f) {
      const r = f.length < 0 ? 0 : w(f.length) | 0, i = u(r);
      for (let d = 0; d < r; d += 1)
        i[d] = f[d] & 255;
      return i;
    }
    function m(f) {
      if (me(f, Uint8Array)) {
        const r = new Uint8Array(f);
        return C(r.buffer, r.byteOffset, r.byteLength);
      }
      return y(f);
    }
    function C(f, r, i) {
      if (r < 0 || f.byteLength < r)
        throw new RangeError('"offset" is outside of buffer bounds');
      if (f.byteLength < r + (i || 0))
        throw new RangeError('"length" is outside of buffer bounds');
      let d;
      return r === void 0 && i === void 0 ? d = new Uint8Array(f) : i === void 0 ? d = new Uint8Array(f, r) : d = new Uint8Array(f, r, i), Object.setPrototypeOf(d, o.prototype), d;
    }
    function J(f) {
      if (o.isBuffer(f)) {
        const r = w(f.length) | 0, i = u(r);
        return i.length === 0 || f.copy(i, 0, 0, r), i;
      }
      if (f.length !== void 0)
        return typeof f.length != "number" || Oe(f.length) ? u(0) : y(f);
      if (f.type === "Buffer" && Array.isArray(f.data))
        return y(f.data);
    }
    function w(f) {
      if (f >= s)
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
      return f | 0;
    }
    function E(f) {
      return +f != f && (f = 0), o.alloc(+f);
    }
    o.isBuffer = function(r) {
      return r != null && r._isBuffer === !0 && r !== o.prototype;
    }, o.compare = function(r, i) {
      if (me(r, Uint8Array) && (r = o.from(r, r.offset, r.byteLength)), me(i, Uint8Array) && (i = o.from(i, i.offset, i.byteLength)), !o.isBuffer(r) || !o.isBuffer(i))
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      if (r === i)
        return 0;
      let d = r.length, R = i.length;
      for (let M = 0, $ = Math.min(d, R); M < $; ++M)
        if (r[M] !== i[M]) {
          d = r[M], R = i[M];
          break;
        }
      return d < R ? -1 : R < d ? 1 : 0;
    }, o.isEncoding = function(r) {
      switch (String(r).toLowerCase()) {
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
    }, o.concat = function(r, i) {
      if (!Array.isArray(r))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (r.length === 0)
        return o.alloc(0);
      let d;
      if (i === void 0)
        for (i = 0, d = 0; d < r.length; ++d)
          i += r[d].length;
      const R = o.allocUnsafe(i);
      let M = 0;
      for (d = 0; d < r.length; ++d) {
        let $ = r[d];
        if (me($, Uint8Array))
          M + $.length > R.length ? (o.isBuffer($) || ($ = o.from($)), $.copy(R, M)) : Uint8Array.prototype.set.call(
            R,
            $,
            M
          );
        else if (o.isBuffer($))
          $.copy(R, M);
        else
          throw new TypeError('"list" argument must be an Array of Buffers');
        M += $.length;
      }
      return R;
    };
    function F(f, r) {
      if (o.isBuffer(f))
        return f.length;
      if (ArrayBuffer.isView(f) || me(f, ArrayBuffer))
        return f.byteLength;
      if (typeof f != "string")
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof f
        );
      const i = f.length, d = arguments.length > 2 && arguments[2] === !0;
      if (!d && i === 0)
        return 0;
      let R = !1;
      for (; ; )
        switch (r) {
          case "ascii":
          case "latin1":
          case "binary":
            return i;
          case "utf8":
          case "utf-8":
            return ce(f).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return i * 2;
          case "hex":
            return i >>> 1;
          case "base64":
            return Be(f).length;
          default:
            if (R)
              return d ? -1 : ce(f).length;
            r = ("" + r).toLowerCase(), R = !0;
        }
    }
    o.byteLength = F;
    function P(f, r, i) {
      let d = !1;
      if ((r === void 0 || r < 0) && (r = 0), r > this.length || ((i === void 0 || i > this.length) && (i = this.length), i <= 0) || (i >>>= 0, r >>>= 0, i <= r))
        return "";
      for (f || (f = "utf8"); ; )
        switch (f) {
          case "hex":
            return Y(this, r, i);
          case "utf8":
          case "utf-8":
            return S(this, r, i);
          case "ascii":
            return V(this, r, i);
          case "latin1":
          case "binary":
            return K(this, r, i);
          case "base64":
            return b(this, r, i);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ne(this, r, i);
          default:
            if (d)
              throw new TypeError("Unknown encoding: " + f);
            f = (f + "").toLowerCase(), d = !0;
        }
    }
    o.prototype._isBuffer = !0;
    function T(f, r, i) {
      const d = f[r];
      f[r] = f[i], f[i] = d;
    }
    o.prototype.swap16 = function() {
      const r = this.length;
      if (r % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let i = 0; i < r; i += 2)
        T(this, i, i + 1);
      return this;
    }, o.prototype.swap32 = function() {
      const r = this.length;
      if (r % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let i = 0; i < r; i += 4)
        T(this, i, i + 3), T(this, i + 1, i + 2);
      return this;
    }, o.prototype.swap64 = function() {
      const r = this.length;
      if (r % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let i = 0; i < r; i += 8)
        T(this, i, i + 7), T(this, i + 1, i + 6), T(this, i + 2, i + 5), T(this, i + 3, i + 4);
      return this;
    }, o.prototype.toString = function() {
      const r = this.length;
      return r === 0 ? "" : arguments.length === 0 ? S(this, 0, r) : P.apply(this, arguments);
    }, o.prototype.toLocaleString = o.prototype.toString, o.prototype.equals = function(r) {
      if (!o.isBuffer(r))
        throw new TypeError("Argument must be a Buffer");
      return this === r ? !0 : o.compare(this, r) === 0;
    }, o.prototype.inspect = function() {
      let r = "";
      const i = e.INSPECT_MAX_BYTES;
      return r = this.toString("hex", 0, i).replace(/(.{2})/g, "$1 ").trim(), this.length > i && (r += " ... "), "<Buffer " + r + ">";
    }, a && (o.prototype[a] = o.prototype.inspect), o.prototype.compare = function(r, i, d, R, M) {
      if (me(r, Uint8Array) && (r = o.from(r, r.offset, r.byteLength)), !o.isBuffer(r))
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof r
        );
      if (i === void 0 && (i = 0), d === void 0 && (d = r ? r.length : 0), R === void 0 && (R = 0), M === void 0 && (M = this.length), i < 0 || d > r.length || R < 0 || M > this.length)
        throw new RangeError("out of range index");
      if (R >= M && i >= d)
        return 0;
      if (R >= M)
        return -1;
      if (i >= d)
        return 1;
      if (i >>>= 0, d >>>= 0, R >>>= 0, M >>>= 0, this === r)
        return 0;
      let $ = M - R, se = d - i;
      const ye = Math.min($, se), pe = this.slice(R, M), ge = r.slice(i, d);
      for (let de = 0; de < ye; ++de)
        if (pe[de] !== ge[de]) {
          $ = pe[de], se = ge[de];
          break;
        }
      return $ < se ? -1 : se < $ ? 1 : 0;
    };
    function W(f, r, i, d, R) {
      if (f.length === 0)
        return -1;
      if (typeof i == "string" ? (d = i, i = 0) : i > 2147483647 ? i = 2147483647 : i < -2147483648 && (i = -2147483648), i = +i, Oe(i) && (i = R ? 0 : f.length - 1), i < 0 && (i = f.length + i), i >= f.length) {
        if (R)
          return -1;
        i = f.length - 1;
      } else if (i < 0)
        if (R)
          i = 0;
        else
          return -1;
      if (typeof r == "string" && (r = o.from(r, d)), o.isBuffer(r))
        return r.length === 0 ? -1 : X(f, r, i, d, R);
      if (typeof r == "number")
        return r = r & 255, typeof Uint8Array.prototype.indexOf == "function" ? R ? Uint8Array.prototype.indexOf.call(f, r, i) : Uint8Array.prototype.lastIndexOf.call(f, r, i) : X(f, [r], i, d, R);
      throw new TypeError("val must be string, number or Buffer");
    }
    function X(f, r, i, d, R) {
      let M = 1, $ = f.length, se = r.length;
      if (d !== void 0 && (d = String(d).toLowerCase(), d === "ucs2" || d === "ucs-2" || d === "utf16le" || d === "utf-16le")) {
        if (f.length < 2 || r.length < 2)
          return -1;
        M = 2, $ /= 2, se /= 2, i /= 2;
      }
      function ye(ge, de) {
        return M === 1 ? ge[de] : ge.readUInt16BE(de * M);
      }
      let pe;
      if (R) {
        let ge = -1;
        for (pe = i; pe < $; pe++)
          if (ye(f, pe) === ye(r, ge === -1 ? 0 : pe - ge)) {
            if (ge === -1 && (ge = pe), pe - ge + 1 === se)
              return ge * M;
          } else
            ge !== -1 && (pe -= pe - ge), ge = -1;
      } else
        for (i + se > $ && (i = $ - se), pe = i; pe >= 0; pe--) {
          let ge = !0;
          for (let de = 0; de < se; de++)
            if (ye(f, pe + de) !== ye(r, de)) {
              ge = !1;
              break;
            }
          if (ge)
            return pe;
        }
      return -1;
    }
    o.prototype.includes = function(r, i, d) {
      return this.indexOf(r, i, d) !== -1;
    }, o.prototype.indexOf = function(r, i, d) {
      return W(this, r, i, d, !0);
    }, o.prototype.lastIndexOf = function(r, i, d) {
      return W(this, r, i, d, !1);
    };
    function D(f, r, i, d) {
      i = Number(i) || 0;
      const R = f.length - i;
      d ? (d = Number(d), d > R && (d = R)) : d = R;
      const M = r.length;
      d > M / 2 && (d = M / 2);
      let $;
      for ($ = 0; $ < d; ++$) {
        const se = parseInt(r.substr($ * 2, 2), 16);
        if (Oe(se))
          return $;
        f[i + $] = se;
      }
      return $;
    }
    function Z(f, r, i, d) {
      return Ie(ce(r, f.length - i), f, i, d);
    }
    function I(f, r, i, d) {
      return Ie(Ee(r), f, i, d);
    }
    function U(f, r, i, d) {
      return Ie(Be(r), f, i, d);
    }
    function q(f, r, i, d) {
      return Ie(H(r, f.length - i), f, i, d);
    }
    o.prototype.write = function(r, i, d, R) {
      if (i === void 0)
        R = "utf8", d = this.length, i = 0;
      else if (d === void 0 && typeof i == "string")
        R = i, d = this.length, i = 0;
      else if (isFinite(i))
        i = i >>> 0, isFinite(d) ? (d = d >>> 0, R === void 0 && (R = "utf8")) : (R = d, d = void 0);
      else
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      const M = this.length - i;
      if ((d === void 0 || d > M) && (d = M), r.length > 0 && (d < 0 || i < 0) || i > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      R || (R = "utf8");
      let $ = !1;
      for (; ; )
        switch (R) {
          case "hex":
            return D(this, r, i, d);
          case "utf8":
          case "utf-8":
            return Z(this, r, i, d);
          case "ascii":
          case "latin1":
          case "binary":
            return I(this, r, i, d);
          case "base64":
            return U(this, r, i, d);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return q(this, r, i, d);
          default:
            if ($)
              throw new TypeError("Unknown encoding: " + R);
            R = ("" + R).toLowerCase(), $ = !0;
        }
    }, o.prototype.toJSON = function() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function b(f, r, i) {
      return r === 0 && i === f.length ? t.fromByteArray(f) : t.fromByteArray(f.slice(r, i));
    }
    function S(f, r, i) {
      i = Math.min(f.length, i);
      const d = [];
      let R = r;
      for (; R < i; ) {
        const M = f[R];
        let $ = null, se = M > 239 ? 4 : M > 223 ? 3 : M > 191 ? 2 : 1;
        if (R + se <= i) {
          let ye, pe, ge, de;
          switch (se) {
            case 1:
              M < 128 && ($ = M);
              break;
            case 2:
              ye = f[R + 1], (ye & 192) === 128 && (de = (M & 31) << 6 | ye & 63, de > 127 && ($ = de));
              break;
            case 3:
              ye = f[R + 1], pe = f[R + 2], (ye & 192) === 128 && (pe & 192) === 128 && (de = (M & 15) << 12 | (ye & 63) << 6 | pe & 63, de > 2047 && (de < 55296 || de > 57343) && ($ = de));
              break;
            case 4:
              ye = f[R + 1], pe = f[R + 2], ge = f[R + 3], (ye & 192) === 128 && (pe & 192) === 128 && (ge & 192) === 128 && (de = (M & 15) << 18 | (ye & 63) << 12 | (pe & 63) << 6 | ge & 63, de > 65535 && de < 1114112 && ($ = de));
          }
        }
        $ === null ? ($ = 65533, se = 1) : $ > 65535 && ($ -= 65536, d.push($ >>> 10 & 1023 | 55296), $ = 56320 | $ & 1023), d.push($), R += se;
      }
      return N(d);
    }
    const B = 4096;
    function N(f) {
      const r = f.length;
      if (r <= B)
        return String.fromCharCode.apply(String, f);
      let i = "", d = 0;
      for (; d < r; )
        i += String.fromCharCode.apply(
          String,
          f.slice(d, d += B)
        );
      return i;
    }
    function V(f, r, i) {
      let d = "";
      i = Math.min(f.length, i);
      for (let R = r; R < i; ++R)
        d += String.fromCharCode(f[R] & 127);
      return d;
    }
    function K(f, r, i) {
      let d = "";
      i = Math.min(f.length, i);
      for (let R = r; R < i; ++R)
        d += String.fromCharCode(f[R]);
      return d;
    }
    function Y(f, r, i) {
      const d = f.length;
      (!r || r < 0) && (r = 0), (!i || i < 0 || i > d) && (i = d);
      let R = "";
      for (let M = r; M < i; ++M)
        R += Ce[f[M]];
      return R;
    }
    function ne(f, r, i) {
      const d = f.slice(r, i);
      let R = "";
      for (let M = 0; M < d.length - 1; M += 2)
        R += String.fromCharCode(d[M] + d[M + 1] * 256);
      return R;
    }
    o.prototype.slice = function(r, i) {
      const d = this.length;
      r = ~~r, i = i === void 0 ? d : ~~i, r < 0 ? (r += d, r < 0 && (r = 0)) : r > d && (r = d), i < 0 ? (i += d, i < 0 && (i = 0)) : i > d && (i = d), i < r && (i = r);
      const R = this.subarray(r, i);
      return Object.setPrototypeOf(R, o.prototype), R;
    };
    function ie(f, r, i) {
      if (f % 1 !== 0 || f < 0)
        throw new RangeError("offset is not uint");
      if (f + r > i)
        throw new RangeError("Trying to access beyond buffer length");
    }
    o.prototype.readUintLE = o.prototype.readUIntLE = function(r, i, d) {
      r = r >>> 0, i = i >>> 0, d || ie(r, i, this.length);
      let R = this[r], M = 1, $ = 0;
      for (; ++$ < i && (M *= 256); )
        R += this[r + $] * M;
      return R;
    }, o.prototype.readUintBE = o.prototype.readUIntBE = function(r, i, d) {
      r = r >>> 0, i = i >>> 0, d || ie(r, i, this.length);
      let R = this[r + --i], M = 1;
      for (; i > 0 && (M *= 256); )
        R += this[r + --i] * M;
      return R;
    }, o.prototype.readUint8 = o.prototype.readUInt8 = function(r, i) {
      return r = r >>> 0, i || ie(r, 1, this.length), this[r];
    }, o.prototype.readUint16LE = o.prototype.readUInt16LE = function(r, i) {
      return r = r >>> 0, i || ie(r, 2, this.length), this[r] | this[r + 1] << 8;
    }, o.prototype.readUint16BE = o.prototype.readUInt16BE = function(r, i) {
      return r = r >>> 0, i || ie(r, 2, this.length), this[r] << 8 | this[r + 1];
    }, o.prototype.readUint32LE = o.prototype.readUInt32LE = function(r, i) {
      return r = r >>> 0, i || ie(r, 4, this.length), (this[r] | this[r + 1] << 8 | this[r + 2] << 16) + this[r + 3] * 16777216;
    }, o.prototype.readUint32BE = o.prototype.readUInt32BE = function(r, i) {
      return r = r >>> 0, i || ie(r, 4, this.length), this[r] * 16777216 + (this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3]);
    }, o.prototype.readBigUInt64LE = ve(function(r) {
      r = r >>> 0, G(r, "offset");
      const i = this[r], d = this[r + 7];
      (i === void 0 || d === void 0) && ee(r, this.length - 8);
      const R = i + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24, M = this[++r] + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + d * 2 ** 24;
      return BigInt(R) + (BigInt(M) << BigInt(32));
    }), o.prototype.readBigUInt64BE = ve(function(r) {
      r = r >>> 0, G(r, "offset");
      const i = this[r], d = this[r + 7];
      (i === void 0 || d === void 0) && ee(r, this.length - 8);
      const R = i * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r], M = this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + d;
      return (BigInt(R) << BigInt(32)) + BigInt(M);
    }), o.prototype.readIntLE = function(r, i, d) {
      r = r >>> 0, i = i >>> 0, d || ie(r, i, this.length);
      let R = this[r], M = 1, $ = 0;
      for (; ++$ < i && (M *= 256); )
        R += this[r + $] * M;
      return M *= 128, R >= M && (R -= Math.pow(2, 8 * i)), R;
    }, o.prototype.readIntBE = function(r, i, d) {
      r = r >>> 0, i = i >>> 0, d || ie(r, i, this.length);
      let R = i, M = 1, $ = this[r + --R];
      for (; R > 0 && (M *= 256); )
        $ += this[r + --R] * M;
      return M *= 128, $ >= M && ($ -= Math.pow(2, 8 * i)), $;
    }, o.prototype.readInt8 = function(r, i) {
      return r = r >>> 0, i || ie(r, 1, this.length), this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r];
    }, o.prototype.readInt16LE = function(r, i) {
      r = r >>> 0, i || ie(r, 2, this.length);
      const d = this[r] | this[r + 1] << 8;
      return d & 32768 ? d | 4294901760 : d;
    }, o.prototype.readInt16BE = function(r, i) {
      r = r >>> 0, i || ie(r, 2, this.length);
      const d = this[r + 1] | this[r] << 8;
      return d & 32768 ? d | 4294901760 : d;
    }, o.prototype.readInt32LE = function(r, i) {
      return r = r >>> 0, i || ie(r, 4, this.length), this[r] | this[r + 1] << 8 | this[r + 2] << 16 | this[r + 3] << 24;
    }, o.prototype.readInt32BE = function(r, i) {
      return r = r >>> 0, i || ie(r, 4, this.length), this[r] << 24 | this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3];
    }, o.prototype.readBigInt64LE = ve(function(r) {
      r = r >>> 0, G(r, "offset");
      const i = this[r], d = this[r + 7];
      (i === void 0 || d === void 0) && ee(r, this.length - 8);
      const R = this[r + 4] + this[r + 5] * 2 ** 8 + this[r + 6] * 2 ** 16 + (d << 24);
      return (BigInt(R) << BigInt(32)) + BigInt(i + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24);
    }), o.prototype.readBigInt64BE = ve(function(r) {
      r = r >>> 0, G(r, "offset");
      const i = this[r], d = this[r + 7];
      (i === void 0 || d === void 0) && ee(r, this.length - 8);
      const R = (i << 24) + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r];
      return (BigInt(R) << BigInt(32)) + BigInt(this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + d);
    }), o.prototype.readFloatLE = function(r, i) {
      return r = r >>> 0, i || ie(r, 4, this.length), n.read(this, r, !0, 23, 4);
    }, o.prototype.readFloatBE = function(r, i) {
      return r = r >>> 0, i || ie(r, 4, this.length), n.read(this, r, !1, 23, 4);
    }, o.prototype.readDoubleLE = function(r, i) {
      return r = r >>> 0, i || ie(r, 8, this.length), n.read(this, r, !0, 52, 8);
    }, o.prototype.readDoubleBE = function(r, i) {
      return r = r >>> 0, i || ie(r, 8, this.length), n.read(this, r, !1, 52, 8);
    };
    function g(f, r, i, d, R, M) {
      if (!o.isBuffer(f))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (r > R || r < M)
        throw new RangeError('"value" argument is out of bounds');
      if (i + d > f.length)
        throw new RangeError("Index out of range");
    }
    o.prototype.writeUintLE = o.prototype.writeUIntLE = function(r, i, d, R) {
      if (r = +r, i = i >>> 0, d = d >>> 0, !R) {
        const se = Math.pow(2, 8 * d) - 1;
        g(this, r, i, d, se, 0);
      }
      let M = 1, $ = 0;
      for (this[i] = r & 255; ++$ < d && (M *= 256); )
        this[i + $] = r / M & 255;
      return i + d;
    }, o.prototype.writeUintBE = o.prototype.writeUIntBE = function(r, i, d, R) {
      if (r = +r, i = i >>> 0, d = d >>> 0, !R) {
        const se = Math.pow(2, 8 * d) - 1;
        g(this, r, i, d, se, 0);
      }
      let M = d - 1, $ = 1;
      for (this[i + M] = r & 255; --M >= 0 && ($ *= 256); )
        this[i + M] = r / $ & 255;
      return i + d;
    }, o.prototype.writeUint8 = o.prototype.writeUInt8 = function(r, i, d) {
      return r = +r, i = i >>> 0, d || g(this, r, i, 1, 255, 0), this[i] = r & 255, i + 1;
    }, o.prototype.writeUint16LE = o.prototype.writeUInt16LE = function(r, i, d) {
      return r = +r, i = i >>> 0, d || g(this, r, i, 2, 65535, 0), this[i] = r & 255, this[i + 1] = r >>> 8, i + 2;
    }, o.prototype.writeUint16BE = o.prototype.writeUInt16BE = function(r, i, d) {
      return r = +r, i = i >>> 0, d || g(this, r, i, 2, 65535, 0), this[i] = r >>> 8, this[i + 1] = r & 255, i + 2;
    }, o.prototype.writeUint32LE = o.prototype.writeUInt32LE = function(r, i, d) {
      return r = +r, i = i >>> 0, d || g(this, r, i, 4, 4294967295, 0), this[i + 3] = r >>> 24, this[i + 2] = r >>> 16, this[i + 1] = r >>> 8, this[i] = r & 255, i + 4;
    }, o.prototype.writeUint32BE = o.prototype.writeUInt32BE = function(r, i, d) {
      return r = +r, i = i >>> 0, d || g(this, r, i, 4, 4294967295, 0), this[i] = r >>> 24, this[i + 1] = r >>> 16, this[i + 2] = r >>> 8, this[i + 3] = r & 255, i + 4;
    };
    function L(f, r, i, d, R) {
      p(r, d, R, f, i, 7);
      let M = Number(r & BigInt(4294967295));
      f[i++] = M, M = M >> 8, f[i++] = M, M = M >> 8, f[i++] = M, M = M >> 8, f[i++] = M;
      let $ = Number(r >> BigInt(32) & BigInt(4294967295));
      return f[i++] = $, $ = $ >> 8, f[i++] = $, $ = $ >> 8, f[i++] = $, $ = $ >> 8, f[i++] = $, i;
    }
    function z(f, r, i, d, R) {
      p(r, d, R, f, i, 7);
      let M = Number(r & BigInt(4294967295));
      f[i + 7] = M, M = M >> 8, f[i + 6] = M, M = M >> 8, f[i + 5] = M, M = M >> 8, f[i + 4] = M;
      let $ = Number(r >> BigInt(32) & BigInt(4294967295));
      return f[i + 3] = $, $ = $ >> 8, f[i + 2] = $, $ = $ >> 8, f[i + 1] = $, $ = $ >> 8, f[i] = $, i + 8;
    }
    o.prototype.writeBigUInt64LE = ve(function(r, i = 0) {
      return L(this, r, i, BigInt(0), BigInt("0xffffffffffffffff"));
    }), o.prototype.writeBigUInt64BE = ve(function(r, i = 0) {
      return z(this, r, i, BigInt(0), BigInt("0xffffffffffffffff"));
    }), o.prototype.writeIntLE = function(r, i, d, R) {
      if (r = +r, i = i >>> 0, !R) {
        const ye = Math.pow(2, 8 * d - 1);
        g(this, r, i, d, ye - 1, -ye);
      }
      let M = 0, $ = 1, se = 0;
      for (this[i] = r & 255; ++M < d && ($ *= 256); )
        r < 0 && se === 0 && this[i + M - 1] !== 0 && (se = 1), this[i + M] = (r / $ >> 0) - se & 255;
      return i + d;
    }, o.prototype.writeIntBE = function(r, i, d, R) {
      if (r = +r, i = i >>> 0, !R) {
        const ye = Math.pow(2, 8 * d - 1);
        g(this, r, i, d, ye - 1, -ye);
      }
      let M = d - 1, $ = 1, se = 0;
      for (this[i + M] = r & 255; --M >= 0 && ($ *= 256); )
        r < 0 && se === 0 && this[i + M + 1] !== 0 && (se = 1), this[i + M] = (r / $ >> 0) - se & 255;
      return i + d;
    }, o.prototype.writeInt8 = function(r, i, d) {
      return r = +r, i = i >>> 0, d || g(this, r, i, 1, 127, -128), r < 0 && (r = 255 + r + 1), this[i] = r & 255, i + 1;
    }, o.prototype.writeInt16LE = function(r, i, d) {
      return r = +r, i = i >>> 0, d || g(this, r, i, 2, 32767, -32768), this[i] = r & 255, this[i + 1] = r >>> 8, i + 2;
    }, o.prototype.writeInt16BE = function(r, i, d) {
      return r = +r, i = i >>> 0, d || g(this, r, i, 2, 32767, -32768), this[i] = r >>> 8, this[i + 1] = r & 255, i + 2;
    }, o.prototype.writeInt32LE = function(r, i, d) {
      return r = +r, i = i >>> 0, d || g(this, r, i, 4, 2147483647, -2147483648), this[i] = r & 255, this[i + 1] = r >>> 8, this[i + 2] = r >>> 16, this[i + 3] = r >>> 24, i + 4;
    }, o.prototype.writeInt32BE = function(r, i, d) {
      return r = +r, i = i >>> 0, d || g(this, r, i, 4, 2147483647, -2147483648), r < 0 && (r = 4294967295 + r + 1), this[i] = r >>> 24, this[i + 1] = r >>> 16, this[i + 2] = r >>> 8, this[i + 3] = r & 255, i + 4;
    }, o.prototype.writeBigInt64LE = ve(function(r, i = 0) {
      return L(this, r, i, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), o.prototype.writeBigInt64BE = ve(function(r, i = 0) {
      return z(this, r, i, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function te(f, r, i, d, R, M) {
      if (i + d > f.length)
        throw new RangeError("Index out of range");
      if (i < 0)
        throw new RangeError("Index out of range");
    }
    function v(f, r, i, d, R) {
      return r = +r, i = i >>> 0, R || te(f, r, i, 4), n.write(f, r, i, d, 23, 4), i + 4;
    }
    o.prototype.writeFloatLE = function(r, i, d) {
      return v(this, r, i, !0, d);
    }, o.prototype.writeFloatBE = function(r, i, d) {
      return v(this, r, i, !1, d);
    };
    function x(f, r, i, d, R) {
      return r = +r, i = i >>> 0, R || te(f, r, i, 8), n.write(f, r, i, d, 52, 8), i + 8;
    }
    o.prototype.writeDoubleLE = function(r, i, d) {
      return x(this, r, i, !0, d);
    }, o.prototype.writeDoubleBE = function(r, i, d) {
      return x(this, r, i, !1, d);
    }, o.prototype.copy = function(r, i, d, R) {
      if (!o.isBuffer(r))
        throw new TypeError("argument should be a Buffer");
      if (d || (d = 0), !R && R !== 0 && (R = this.length), i >= r.length && (i = r.length), i || (i = 0), R > 0 && R < d && (R = d), R === d || r.length === 0 || this.length === 0)
        return 0;
      if (i < 0)
        throw new RangeError("targetStart out of bounds");
      if (d < 0 || d >= this.length)
        throw new RangeError("Index out of range");
      if (R < 0)
        throw new RangeError("sourceEnd out of bounds");
      R > this.length && (R = this.length), r.length - i < R - d && (R = r.length - i + d);
      const M = R - d;
      return this === r && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(i, d, R) : Uint8Array.prototype.set.call(
        r,
        this.subarray(d, R),
        i
      ), M;
    }, o.prototype.fill = function(r, i, d, R) {
      if (typeof r == "string") {
        if (typeof i == "string" ? (R = i, i = 0, d = this.length) : typeof d == "string" && (R = d, d = this.length), R !== void 0 && typeof R != "string")
          throw new TypeError("encoding must be a string");
        if (typeof R == "string" && !o.isEncoding(R))
          throw new TypeError("Unknown encoding: " + R);
        if (r.length === 1) {
          const $ = r.charCodeAt(0);
          (R === "utf8" && $ < 128 || R === "latin1") && (r = $);
        }
      } else
        typeof r == "number" ? r = r & 255 : typeof r == "boolean" && (r = Number(r));
      if (i < 0 || this.length < i || this.length < d)
        throw new RangeError("Out of range index");
      if (d <= i)
        return this;
      i = i >>> 0, d = d === void 0 ? this.length : d >>> 0, r || (r = 0);
      let M;
      if (typeof r == "number")
        for (M = i; M < d; ++M)
          this[M] = r;
      else {
        const $ = o.isBuffer(r) ? r : o.from(r, R), se = $.length;
        if (se === 0)
          throw new TypeError('The value "' + r + '" is invalid for argument "value"');
        for (M = 0; M < d - i; ++M)
          this[M + i] = $[M % se];
      }
      return this;
    };
    const k = {};
    function Q(f, r, i) {
      k[f] = class extends i {
        constructor() {
          super(), Object.defineProperty(this, "message", {
            value: r.apply(this, arguments),
            writable: !0,
            configurable: !0
          }), this.name = `${this.name} [${f}]`, this.stack, delete this.name;
        }
        get code() {
          return f;
        }
        set code(R) {
          Object.defineProperty(this, "code", {
            configurable: !0,
            enumerable: !0,
            value: R,
            writable: !0
          });
        }
        toString() {
          return `${this.name} [${f}]: ${this.message}`;
        }
      };
    }
    Q(
      "ERR_BUFFER_OUT_OF_BOUNDS",
      function(f) {
        return f ? `${f} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
      },
      RangeError
    ), Q(
      "ERR_INVALID_ARG_TYPE",
      function(f, r) {
        return `The "${f}" argument must be of type number. Received type ${typeof r}`;
      },
      TypeError
    ), Q(
      "ERR_OUT_OF_RANGE",
      function(f, r, i) {
        let d = `The value of "${f}" is out of range.`, R = i;
        return Number.isInteger(i) && Math.abs(i) > 2 ** 32 ? R = re(String(i)) : typeof i == "bigint" && (R = String(i), (i > BigInt(2) ** BigInt(32) || i < -(BigInt(2) ** BigInt(32))) && (R = re(R)), R += "n"), d += ` It must be ${r}. Received ${R}`, d;
      },
      RangeError
    );
    function re(f) {
      let r = "", i = f.length;
      const d = f[0] === "-" ? 1 : 0;
      for (; i >= d + 4; i -= 3)
        r = `_${f.slice(i - 3, i)}${r}`;
      return `${f.slice(0, i)}${r}`;
    }
    function h(f, r, i) {
      G(r, "offset"), (f[r] === void 0 || f[r + i] === void 0) && ee(r, f.length - (i + 1));
    }
    function p(f, r, i, d, R, M) {
      if (f > i || f < r) {
        const $ = typeof r == "bigint" ? "n" : "";
        let se;
        throw M > 3 ? r === 0 || r === BigInt(0) ? se = `>= 0${$} and < 2${$} ** ${(M + 1) * 8}${$}` : se = `>= -(2${$} ** ${(M + 1) * 8 - 1}${$}) and < 2 ** ${(M + 1) * 8 - 1}${$}` : se = `>= ${r}${$} and <= ${i}${$}`, new k.ERR_OUT_OF_RANGE("value", se, f);
      }
      h(d, R, M);
    }
    function G(f, r) {
      if (typeof f != "number")
        throw new k.ERR_INVALID_ARG_TYPE(r, "number", f);
    }
    function ee(f, r, i) {
      throw Math.floor(f) !== f ? (G(f, i), new k.ERR_OUT_OF_RANGE(i || "offset", "an integer", f)) : r < 0 ? new k.ERR_BUFFER_OUT_OF_BOUNDS() : new k.ERR_OUT_OF_RANGE(
        i || "offset",
        `>= ${i ? 1 : 0} and <= ${r}`,
        f
      );
    }
    const he = /[^+/0-9A-Za-z-_]/g;
    function ae(f) {
      if (f = f.split("=")[0], f = f.trim().replace(he, ""), f.length < 2)
        return "";
      for (; f.length % 4 !== 0; )
        f = f + "=";
      return f;
    }
    function ce(f, r) {
      r = r || 1 / 0;
      let i;
      const d = f.length;
      let R = null;
      const M = [];
      for (let $ = 0; $ < d; ++$) {
        if (i = f.charCodeAt($), i > 55295 && i < 57344) {
          if (!R) {
            if (i > 56319) {
              (r -= 3) > -1 && M.push(239, 191, 189);
              continue;
            } else if ($ + 1 === d) {
              (r -= 3) > -1 && M.push(239, 191, 189);
              continue;
            }
            R = i;
            continue;
          }
          if (i < 56320) {
            (r -= 3) > -1 && M.push(239, 191, 189), R = i;
            continue;
          }
          i = (R - 55296 << 10 | i - 56320) + 65536;
        } else
          R && (r -= 3) > -1 && M.push(239, 191, 189);
        if (R = null, i < 128) {
          if ((r -= 1) < 0)
            break;
          M.push(i);
        } else if (i < 2048) {
          if ((r -= 2) < 0)
            break;
          M.push(
            i >> 6 | 192,
            i & 63 | 128
          );
        } else if (i < 65536) {
          if ((r -= 3) < 0)
            break;
          M.push(
            i >> 12 | 224,
            i >> 6 & 63 | 128,
            i & 63 | 128
          );
        } else if (i < 1114112) {
          if ((r -= 4) < 0)
            break;
          M.push(
            i >> 18 | 240,
            i >> 12 & 63 | 128,
            i >> 6 & 63 | 128,
            i & 63 | 128
          );
        } else
          throw new Error("Invalid code point");
      }
      return M;
    }
    function Ee(f) {
      const r = [];
      for (let i = 0; i < f.length; ++i)
        r.push(f.charCodeAt(i) & 255);
      return r;
    }
    function H(f, r) {
      let i, d, R;
      const M = [];
      for (let $ = 0; $ < f.length && !((r -= 2) < 0); ++$)
        i = f.charCodeAt($), d = i >> 8, R = i % 256, M.push(R), M.push(d);
      return M;
    }
    function Be(f) {
      return t.toByteArray(ae(f));
    }
    function Ie(f, r, i, d) {
      let R;
      for (R = 0; R < d && !(R + i >= r.length || R >= f.length); ++R)
        r[R + i] = f[R];
      return R;
    }
    function me(f, r) {
      return f instanceof r || f != null && f.constructor != null && f.constructor.name != null && f.constructor.name === r.name;
    }
    function Oe(f) {
      return f !== f;
    }
    const Ce = function() {
      const f = "0123456789abcdef", r = new Array(256);
      for (let i = 0; i < 16; ++i) {
        const d = i * 16;
        for (let R = 0; R < 16; ++R)
          r[d + R] = f[i] + f[R];
      }
      return r;
    }();
    function ve(f) {
      return typeof BigInt > "u" ? Te : f;
    }
    function Te() {
      throw new Error("BigInt not supported");
    }
  }(Or)), Or;
}
var Ne = Qe(), Tr = {}, Pr = {}, Fr, On;
function Ii() {
  return On || (On = 1, Fr = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, n = Symbol("test"), a = Object(n);
    if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(a) !== "[object Symbol]")
      return !1;
    var s = 42;
    t[n] = s;
    for (n in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var c = Object.getOwnPropertySymbols(t);
    if (c.length !== 1 || c[0] !== n || !Object.prototype.propertyIsEnumerable.call(t, n))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var u = Object.getOwnPropertyDescriptor(t, n);
      if (u.value !== s || u.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Fr;
}
var Cr, Tn;
function Ot() {
  if (Tn)
    return Cr;
  Tn = 1;
  var e = Ii();
  return Cr = function() {
    return e() && !!Symbol.toStringTag;
  }, Cr;
}
var Pn = typeof Symbol < "u" && Symbol, wo = Ii(), vo = function() {
  return typeof Pn != "function" || typeof Symbol != "function" || typeof Pn("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : wo();
}, Eo = "Function.prototype.bind called on incompatible ", Mr = Array.prototype.slice, So = Object.prototype.toString, xo = "[object Function]", Ao = function(t) {
  var n = this;
  if (typeof n != "function" || So.call(n) !== xo)
    throw new TypeError(Eo + n);
  for (var a = Mr.call(arguments, 1), s, c = function() {
    if (this instanceof s) {
      var A = n.apply(
        this,
        a.concat(Mr.call(arguments))
      );
      return Object(A) === A ? A : this;
    } else
      return n.apply(
        t,
        a.concat(Mr.call(arguments))
      );
  }, u = Math.max(0, n.length - a.length), o = [], l = 0; l < u; l++)
    o.push("$" + l);
  if (s = Function("binder", "return function (" + o.join(",") + "){ return binder.apply(this,arguments); }")(c), n.prototype) {
    var _ = function() {
    };
    _.prototype = n.prototype, s.prototype = new _(), _.prototype = null;
  }
  return s;
}, Ro = Ao, pn = Function.prototype.bind || Ro, Bo = pn, Io = Bo.call(Function.call, Object.prototype.hasOwnProperty), le, Ye = SyntaxError, Oi = Function, Ve = TypeError, Lr = function(e) {
  try {
    return Oi('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, Ue = Object.getOwnPropertyDescriptor;
if (Ue)
  try {
    Ue({}, "");
  } catch {
    Ue = null;
  }
var jr = function() {
  throw new Ve();
}, Oo = Ue ? function() {
  try {
    return arguments.callee, jr;
  } catch {
    try {
      return Ue(arguments, "callee").get;
    } catch {
      return jr;
    }
  }
}() : jr, We = vo(), Me = Object.getPrototypeOf || function(e) {
  return e.__proto__;
}, Ge = {}, To = typeof Uint8Array > "u" ? le : Me(Uint8Array), Je = {
  "%AggregateError%": typeof AggregateError > "u" ? le : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? le : ArrayBuffer,
  "%ArrayIteratorPrototype%": We ? Me([][Symbol.iterator]()) : le,
  "%AsyncFromSyncIteratorPrototype%": le,
  "%AsyncFunction%": Ge,
  "%AsyncGenerator%": Ge,
  "%AsyncGeneratorFunction%": Ge,
  "%AsyncIteratorPrototype%": Ge,
  "%Atomics%": typeof Atomics > "u" ? le : Atomics,
  "%BigInt%": typeof BigInt > "u" ? le : BigInt,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? le : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? le : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? le : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? le : FinalizationRegistry,
  "%Function%": Oi,
  "%GeneratorFunction%": Ge,
  "%Int8Array%": typeof Int8Array > "u" ? le : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? le : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? le : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": We ? Me(Me([][Symbol.iterator]())) : le,
  "%JSON%": typeof JSON == "object" ? JSON : le,
  "%Map%": typeof Map > "u" ? le : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !We ? le : Me((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? le : Promise,
  "%Proxy%": typeof Proxy > "u" ? le : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? le : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? le : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !We ? le : Me((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? le : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": We ? Me(""[Symbol.iterator]()) : le,
  "%Symbol%": We ? Symbol : le,
  "%SyntaxError%": Ye,
  "%ThrowTypeError%": Oo,
  "%TypedArray%": To,
  "%TypeError%": Ve,
  "%Uint8Array%": typeof Uint8Array > "u" ? le : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? le : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? le : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? le : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? le : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? le : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? le : WeakSet
}, Po = function e(t) {
  var n;
  if (t === "%AsyncFunction%")
    n = Lr("async function () {}");
  else if (t === "%GeneratorFunction%")
    n = Lr("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    n = Lr("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var a = e("%AsyncGeneratorFunction%");
    a && (n = a.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var s = e("%AsyncGenerator%");
    s && (n = Me(s.prototype));
  }
  return Je[t] = n, n;
}, Fn = {
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, ot = pn, St = Io, Fo = ot.call(Function.call, Array.prototype.concat), Co = ot.call(Function.apply, Array.prototype.splice), Cn = ot.call(Function.call, String.prototype.replace), xt = ot.call(Function.call, String.prototype.slice), Mo = ot.call(Function.call, RegExp.prototype.exec), Lo = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, jo = /\\(\\)?/g, ko = function(t) {
  var n = xt(t, 0, 1), a = xt(t, -1);
  if (n === "%" && a !== "%")
    throw new Ye("invalid intrinsic syntax, expected closing `%`");
  if (a === "%" && n !== "%")
    throw new Ye("invalid intrinsic syntax, expected opening `%`");
  var s = [];
  return Cn(t, Lo, function(c, u, o, l) {
    s[s.length] = o ? Cn(l, jo, "$1") : u || c;
  }), s;
}, No = function(t, n) {
  var a = t, s;
  if (St(Fn, a) && (s = Fn[a], a = "%" + s[0] + "%"), St(Je, a)) {
    var c = Je[a];
    if (c === Ge && (c = Po(a)), typeof c > "u" && !n)
      throw new Ve("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: s,
      name: a,
      value: c
    };
  }
  throw new Ye("intrinsic " + t + " does not exist!");
}, yn = function(t, n) {
  if (typeof t != "string" || t.length === 0)
    throw new Ve("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new Ve('"allowMissing" argument must be a boolean');
  if (Mo(/^%?[^%]*%?$/g, t) === null)
    throw new Ye("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var a = ko(t), s = a.length > 0 ? a[0] : "", c = No("%" + s + "%", n), u = c.name, o = c.value, l = !1, _ = c.alias;
  _ && (s = _[0], Co(a, Fo([0, 1], _)));
  for (var A = 1, j = !0; A < a.length; A += 1) {
    var O = a[A], y = xt(O, 0, 1), m = xt(O, -1);
    if ((y === '"' || y === "'" || y === "`" || m === '"' || m === "'" || m === "`") && y !== m)
      throw new Ye("property names with quotes must have matching quotes");
    if ((O === "constructor" || !j) && (l = !0), s += "." + O, u = "%" + s + "%", St(Je, u))
      o = Je[u];
    else if (o != null) {
      if (!(O in o)) {
        if (!n)
          throw new Ve("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (Ue && A + 1 >= a.length) {
        var C = Ue(o, O);
        j = !!C, j && "get" in C && !("originalValue" in C.get) ? o = C.get : o = o[O];
      } else
        j = St(o, O), o = o[O];
      j && !l && (Je[u] = o);
    }
  }
  return o;
}, Ti = { exports: {} };
(function(e) {
  var t = pn, n = yn, a = n("%Function.prototype.apply%"), s = n("%Function.prototype.call%"), c = n("%Reflect.apply%", !0) || t.call(s, a), u = n("%Object.getOwnPropertyDescriptor%", !0), o = n("%Object.defineProperty%", !0), l = n("%Math.max%");
  if (o)
    try {
      o({}, "a", { value: 1 });
    } catch {
      o = null;
    }
  e.exports = function(j) {
    var O = c(t, s, arguments);
    if (u && o) {
      var y = u(O, "length");
      y.configurable && o(
        O,
        "length",
        { value: 1 + l(0, j.length - (arguments.length - 1)) }
      );
    }
    return O;
  };
  var _ = function() {
    return c(t, a, arguments);
  };
  o ? o(e.exports, "apply", { value: _ }) : e.exports.apply = _;
})(Ti);
var Pi = yn, Fi = Ti.exports, Uo = Fi(Pi("String.prototype.indexOf")), gn = function(t, n) {
  var a = Pi(t, !!n);
  return typeof a == "function" && Uo(t, ".prototype.") > -1 ? Fi(a) : a;
}, kr, Mn;
function Do() {
  if (Mn)
    return kr;
  Mn = 1;
  var e = Ot()(), t = gn, n = t("Object.prototype.toString"), a = function(o) {
    return e && o && typeof o == "object" && Symbol.toStringTag in o ? !1 : n(o) === "[object Arguments]";
  }, s = function(o) {
    return a(o) ? !0 : o !== null && typeof o == "object" && typeof o.length == "number" && o.length >= 0 && n(o) !== "[object Array]" && n(o.callee) === "[object Function]";
  }, c = function() {
    return a(arguments);
  }();
  return a.isLegacyArguments = s, kr = c ? a : s, kr;
}
var Nr, Ln;
function $o() {
  if (Ln)
    return Nr;
  Ln = 1;
  var e = Object.prototype.toString, t = Function.prototype.toString, n = /^\s*(?:function)?\*/, a = Ot()(), s = Object.getPrototypeOf, c = function() {
    if (!a)
      return !1;
    try {
      return Function("return function*() {}")();
    } catch {
    }
  }, u;
  return Nr = function(l) {
    if (typeof l != "function")
      return !1;
    if (n.test(t.call(l)))
      return !0;
    if (!a) {
      var _ = e.call(l);
      return _ === "[object GeneratorFunction]";
    }
    if (!s)
      return !1;
    if (typeof u > "u") {
      var A = c();
      u = A ? s(A) : !1;
    }
    return s(l) === u;
  }, Nr;
}
var Ur, jn;
function qo() {
  if (jn)
    return Ur;
  jn = 1;
  var e = Function.prototype.toString, t = typeof Reflect == "object" && Reflect !== null && Reflect.apply, n, a;
  if (typeof t == "function" && typeof Object.defineProperty == "function")
    try {
      n = Object.defineProperty({}, "length", {
        get: function() {
          throw a;
        }
      }), a = {}, t(function() {
        throw 42;
      }, null, n);
    } catch (O) {
      O !== a && (t = null);
    }
  else
    t = null;
  var s = /^\s*class\b/, c = function(y) {
    try {
      var m = e.call(y);
      return s.test(m);
    } catch {
      return !1;
    }
  }, u = function(y) {
    try {
      return c(y) ? !1 : (e.call(y), !0);
    } catch {
      return !1;
    }
  }, o = Object.prototype.toString, l = "[object Function]", _ = "[object GeneratorFunction]", A = typeof Symbol == "function" && !!Symbol.toStringTag, j = typeof document == "object" && typeof document.all > "u" && document.all !== void 0 ? document.all : {};
  return Ur = t ? function(y) {
    if (y === j)
      return !0;
    if (!y || typeof y != "function" && typeof y != "object")
      return !1;
    if (typeof y == "function" && !y.prototype)
      return !0;
    try {
      t(y, null, n);
    } catch (m) {
      if (m !== a)
        return !1;
    }
    return !c(y);
  } : function(y) {
    if (y === j)
      return !0;
    if (!y || typeof y != "function" && typeof y != "object")
      return !1;
    if (typeof y == "function" && !y.prototype)
      return !0;
    if (A)
      return u(y);
    if (c(y))
      return !1;
    var m = o.call(y);
    return m === l || m === _;
  }, Ur;
}
var Dr, kn;
function Ci() {
  if (kn)
    return Dr;
  kn = 1;
  var e = qo(), t = Object.prototype.toString, n = Object.prototype.hasOwnProperty, a = function(l, _, A) {
    for (var j = 0, O = l.length; j < O; j++)
      n.call(l, j) && (A == null ? _(l[j], j, l) : _.call(A, l[j], j, l));
  }, s = function(l, _, A) {
    for (var j = 0, O = l.length; j < O; j++)
      A == null ? _(l.charAt(j), j, l) : _.call(A, l.charAt(j), j, l);
  }, c = function(l, _, A) {
    for (var j in l)
      n.call(l, j) && (A == null ? _(l[j], j, l) : _.call(A, l[j], j, l));
  }, u = function(l, _, A) {
    if (!e(_))
      throw new TypeError("iterator must be a function");
    var j;
    arguments.length >= 3 && (j = A), t.call(l) === "[object Array]" ? a(l, _, j) : typeof l == "string" ? s(l, _, j) : c(l, _, j);
  };
  return Dr = u, Dr;
}
var $r, Nn;
function Mi() {
  if (Nn)
    return $r;
  Nn = 1;
  var e = [
    "BigInt64Array",
    "BigUint64Array",
    "Float32Array",
    "Float64Array",
    "Int16Array",
    "Int32Array",
    "Int8Array",
    "Uint16Array",
    "Uint32Array",
    "Uint8Array",
    "Uint8ClampedArray"
  ], t = typeof globalThis > "u" ? be : globalThis;
  return $r = function() {
    for (var a = [], s = 0; s < e.length; s++)
      typeof t[e[s]] == "function" && (a[a.length] = e[s]);
    return a;
  }, $r;
}
var qr, Un;
function Li() {
  if (Un)
    return qr;
  Un = 1;
  var e = yn, t = e("%Object.getOwnPropertyDescriptor%", !0);
  if (t)
    try {
      t([], "length");
    } catch {
      t = null;
    }
  return qr = t, qr;
}
var Hr, Dn;
function ji() {
  if (Dn)
    return Hr;
  Dn = 1;
  var e = Ci(), t = Mi(), n = gn, a = n("Object.prototype.toString"), s = Ot()(), c = typeof globalThis > "u" ? be : globalThis, u = t(), o = n("Array.prototype.indexOf", !0) || function(m, C) {
    for (var J = 0; J < m.length; J += 1)
      if (m[J] === C)
        return J;
    return -1;
  }, l = n("String.prototype.slice"), _ = {}, A = Li(), j = Object.getPrototypeOf;
  s && A && j && e(u, function(y) {
    var m = new c[y]();
    if (Symbol.toStringTag in m) {
      var C = j(m), J = A(C, Symbol.toStringTag);
      if (!J) {
        var w = j(C);
        J = A(w, Symbol.toStringTag);
      }
      _[y] = J.get;
    }
  });
  var O = function(m) {
    var C = !1;
    return e(_, function(J, w) {
      if (!C)
        try {
          C = J.call(m) === w;
        } catch {
        }
    }), C;
  };
  return Hr = function(m) {
    if (!m || typeof m != "object")
      return !1;
    if (!s || !(Symbol.toStringTag in m)) {
      var C = l(a(m), 8, -1);
      return o(u, C) > -1;
    }
    return A ? O(m) : !1;
  }, Hr;
}
var Wr, $n;
function Ho() {
  if ($n)
    return Wr;
  $n = 1;
  var e = Ci(), t = Mi(), n = gn, a = n("Object.prototype.toString"), s = Ot()(), c = typeof globalThis > "u" ? be : globalThis, u = t(), o = n("String.prototype.slice"), l = {}, _ = Li(), A = Object.getPrototypeOf;
  s && _ && A && e(u, function(y) {
    if (typeof c[y] == "function") {
      var m = new c[y]();
      if (Symbol.toStringTag in m) {
        var C = A(m), J = _(C, Symbol.toStringTag);
        if (!J) {
          var w = A(C);
          J = _(w, Symbol.toStringTag);
        }
        l[y] = J.get;
      }
    }
  });
  var j = function(m) {
    var C = !1;
    return e(l, function(J, w) {
      if (!C)
        try {
          var E = J.call(m);
          E === w && (C = E);
        } catch {
        }
    }), C;
  }, O = ji();
  return Wr = function(m) {
    return O(m) ? !s || !(Symbol.toStringTag in m) ? o(a(m), 8, -1) : j(m) : !1;
  }, Wr;
}
var qn;
function Wo() {
  return qn || (qn = 1, function(e) {
    var t = Do(), n = $o(), a = Ho(), s = ji();
    function c(H) {
      return H.call.bind(H);
    }
    var u = typeof BigInt < "u", o = typeof Symbol < "u", l = c(Object.prototype.toString), _ = c(Number.prototype.valueOf), A = c(String.prototype.valueOf), j = c(Boolean.prototype.valueOf);
    if (u)
      var O = c(BigInt.prototype.valueOf);
    if (o)
      var y = c(Symbol.prototype.valueOf);
    function m(H, Be) {
      if (typeof H != "object")
        return !1;
      try {
        return Be(H), !0;
      } catch {
        return !1;
      }
    }
    e.isArgumentsObject = t, e.isGeneratorFunction = n, e.isTypedArray = s;
    function C(H) {
      return typeof Promise < "u" && H instanceof Promise || H !== null && typeof H == "object" && typeof H.then == "function" && typeof H.catch == "function";
    }
    e.isPromise = C;
    function J(H) {
      return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(H) : s(H) || L(H);
    }
    e.isArrayBufferView = J;
    function w(H) {
      return a(H) === "Uint8Array";
    }
    e.isUint8Array = w;
    function E(H) {
      return a(H) === "Uint8ClampedArray";
    }
    e.isUint8ClampedArray = E;
    function F(H) {
      return a(H) === "Uint16Array";
    }
    e.isUint16Array = F;
    function P(H) {
      return a(H) === "Uint32Array";
    }
    e.isUint32Array = P;
    function T(H) {
      return a(H) === "Int8Array";
    }
    e.isInt8Array = T;
    function W(H) {
      return a(H) === "Int16Array";
    }
    e.isInt16Array = W;
    function X(H) {
      return a(H) === "Int32Array";
    }
    e.isInt32Array = X;
    function D(H) {
      return a(H) === "Float32Array";
    }
    e.isFloat32Array = D;
    function Z(H) {
      return a(H) === "Float64Array";
    }
    e.isFloat64Array = Z;
    function I(H) {
      return a(H) === "BigInt64Array";
    }
    e.isBigInt64Array = I;
    function U(H) {
      return a(H) === "BigUint64Array";
    }
    e.isBigUint64Array = U;
    function q(H) {
      return l(H) === "[object Map]";
    }
    q.working = typeof Map < "u" && q(/* @__PURE__ */ new Map());
    function b(H) {
      return typeof Map > "u" ? !1 : q.working ? q(H) : H instanceof Map;
    }
    e.isMap = b;
    function S(H) {
      return l(H) === "[object Set]";
    }
    S.working = typeof Set < "u" && S(/* @__PURE__ */ new Set());
    function B(H) {
      return typeof Set > "u" ? !1 : S.working ? S(H) : H instanceof Set;
    }
    e.isSet = B;
    function N(H) {
      return l(H) === "[object WeakMap]";
    }
    N.working = typeof WeakMap < "u" && N(/* @__PURE__ */ new WeakMap());
    function V(H) {
      return typeof WeakMap > "u" ? !1 : N.working ? N(H) : H instanceof WeakMap;
    }
    e.isWeakMap = V;
    function K(H) {
      return l(H) === "[object WeakSet]";
    }
    K.working = typeof WeakSet < "u" && K(/* @__PURE__ */ new WeakSet());
    function Y(H) {
      return K(H);
    }
    e.isWeakSet = Y;
    function ne(H) {
      return l(H) === "[object ArrayBuffer]";
    }
    ne.working = typeof ArrayBuffer < "u" && ne(new ArrayBuffer());
    function ie(H) {
      return typeof ArrayBuffer > "u" ? !1 : ne.working ? ne(H) : H instanceof ArrayBuffer;
    }
    e.isArrayBuffer = ie;
    function g(H) {
      return l(H) === "[object DataView]";
    }
    g.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && g(new DataView(new ArrayBuffer(1), 0, 1));
    function L(H) {
      return typeof DataView > "u" ? !1 : g.working ? g(H) : H instanceof DataView;
    }
    e.isDataView = L;
    var z = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
    function te(H) {
      return l(H) === "[object SharedArrayBuffer]";
    }
    function v(H) {
      return typeof z > "u" ? !1 : (typeof te.working > "u" && (te.working = te(new z())), te.working ? te(H) : H instanceof z);
    }
    e.isSharedArrayBuffer = v;
    function x(H) {
      return l(H) === "[object AsyncFunction]";
    }
    e.isAsyncFunction = x;
    function k(H) {
      return l(H) === "[object Map Iterator]";
    }
    e.isMapIterator = k;
    function Q(H) {
      return l(H) === "[object Set Iterator]";
    }
    e.isSetIterator = Q;
    function re(H) {
      return l(H) === "[object Generator]";
    }
    e.isGeneratorObject = re;
    function h(H) {
      return l(H) === "[object WebAssembly.Module]";
    }
    e.isWebAssemblyCompiledModule = h;
    function p(H) {
      return m(H, _);
    }
    e.isNumberObject = p;
    function G(H) {
      return m(H, A);
    }
    e.isStringObject = G;
    function ee(H) {
      return m(H, j);
    }
    e.isBooleanObject = ee;
    function he(H) {
      return u && m(H, O);
    }
    e.isBigIntObject = he;
    function ae(H) {
      return o && m(H, y);
    }
    e.isSymbolObject = ae;
    function ce(H) {
      return p(H) || G(H) || ee(H) || he(H) || ae(H);
    }
    e.isBoxedPrimitive = ce;
    function Ee(H) {
      return typeof Uint8Array < "u" && (ie(H) || v(H));
    }
    e.isAnyArrayBuffer = Ee, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(H) {
      Object.defineProperty(e, H, {
        enumerable: !1,
        value: function() {
          throw new Error(H + " is not supported in userland");
        }
      });
    });
  }(Pr)), Pr;
}
var zr, Hn;
function zo() {
  return Hn || (Hn = 1, zr = function(t) {
    return t && typeof t == "object" && typeof t.copy == "function" && typeof t.fill == "function" && typeof t.readUInt8 == "function";
  }), zr;
}
var Wn;
function Go() {
  return Wn || (Wn = 1, function(e) {
    var t = Object.getOwnPropertyDescriptors || function(L) {
      for (var z = Object.keys(L), te = {}, v = 0; v < z.length; v++)
        te[z[v]] = Object.getOwnPropertyDescriptor(L, z[v]);
      return te;
    }, n = /%[sdj%]/g;
    e.format = function(g) {
      if (!T(g)) {
        for (var L = [], z = 0; z < arguments.length; z++)
          L.push(u(arguments[z]));
        return L.join(" ");
      }
      for (var z = 1, te = arguments, v = te.length, x = String(g).replace(n, function(Q) {
        if (Q === "%%")
          return "%";
        if (z >= v)
          return Q;
        switch (Q) {
          case "%s":
            return String(te[z++]);
          case "%d":
            return Number(te[z++]);
          case "%j":
            try {
              return JSON.stringify(te[z++]);
            } catch {
              return "[Circular]";
            }
          default:
            return Q;
        }
      }), k = te[z]; z < v; k = te[++z])
        E(k) || !Z(k) ? x += " " + k : x += " " + u(k);
      return x;
    }, e.deprecate = function(g, L) {
      if (typeof fe.exports < "u" && fe.exports.noDeprecation === !0)
        return g;
      if (typeof fe.exports > "u")
        return function() {
          return e.deprecate(g, L).apply(this, arguments);
        };
      var z = !1;
      function te() {
        if (!z) {
          if (fe.exports.throwDeprecation)
            throw new Error(L);
          fe.exports.traceDeprecation ? console.trace(L) : console.error(L), z = !0;
        }
        return g.apply(this, arguments);
      }
      return te;
    };
    var a = {}, s = /^$/;
    if (fe.exports.env.NODE_DEBUG) {
      var c = fe.exports.env.NODE_DEBUG;
      c = c.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), s = new RegExp("^" + c + "$", "i");
    }
    e.debuglog = function(g) {
      if (g = g.toUpperCase(), !a[g])
        if (s.test(g)) {
          var L = fe.exports.pid;
          a[g] = function() {
            var z = e.format.apply(e, arguments);
            console.error("%s %d: %s", g, L, z);
          };
        } else
          a[g] = function() {
          };
      return a[g];
    };
    function u(g, L) {
      var z = {
        seen: [],
        stylize: l
      };
      return arguments.length >= 3 && (z.depth = arguments[2]), arguments.length >= 4 && (z.colors = arguments[3]), w(L) ? z.showHidden = L : L && e._extend(z, L), X(z.showHidden) && (z.showHidden = !1), X(z.depth) && (z.depth = 2), X(z.colors) && (z.colors = !1), X(z.customInspect) && (z.customInspect = !0), z.colors && (z.stylize = o), A(z, g, z.depth);
    }
    e.inspect = u, u.colors = {
      bold: [1, 22],
      italic: [3, 23],
      underline: [4, 24],
      inverse: [7, 27],
      white: [37, 39],
      grey: [90, 39],
      black: [30, 39],
      blue: [34, 39],
      cyan: [36, 39],
      green: [32, 39],
      magenta: [35, 39],
      red: [31, 39],
      yellow: [33, 39]
    }, u.styles = {
      special: "cyan",
      number: "yellow",
      boolean: "yellow",
      undefined: "grey",
      null: "bold",
      string: "green",
      date: "magenta",
      regexp: "red"
    };
    function o(g, L) {
      var z = u.styles[L];
      return z ? "\x1B[" + u.colors[z][0] + "m" + g + "\x1B[" + u.colors[z][1] + "m" : g;
    }
    function l(g, L) {
      return g;
    }
    function _(g) {
      var L = {};
      return g.forEach(function(z, te) {
        L[z] = !0;
      }), L;
    }
    function A(g, L, z) {
      if (g.customInspect && L && q(L.inspect) && L.inspect !== e.inspect && !(L.constructor && L.constructor.prototype === L)) {
        var te = L.inspect(z, g);
        return T(te) || (te = A(g, te, z)), te;
      }
      var v = j(g, L);
      if (v)
        return v;
      var x = Object.keys(L), k = _(x);
      if (g.showHidden && (x = Object.getOwnPropertyNames(L)), U(L) && (x.indexOf("message") >= 0 || x.indexOf("description") >= 0))
        return O(L);
      if (x.length === 0) {
        if (q(L)) {
          var Q = L.name ? ": " + L.name : "";
          return g.stylize("[Function" + Q + "]", "special");
        }
        if (D(L))
          return g.stylize(RegExp.prototype.toString.call(L), "regexp");
        if (I(L))
          return g.stylize(Date.prototype.toString.call(L), "date");
        if (U(L))
          return O(L);
      }
      var re = "", h = !1, p = ["{", "}"];
      if (J(L) && (h = !0, p = ["[", "]"]), q(L)) {
        var G = L.name ? ": " + L.name : "";
        re = " [Function" + G + "]";
      }
      if (D(L) && (re = " " + RegExp.prototype.toString.call(L)), I(L) && (re = " " + Date.prototype.toUTCString.call(L)), U(L) && (re = " " + O(L)), x.length === 0 && (!h || L.length == 0))
        return p[0] + re + p[1];
      if (z < 0)
        return D(L) ? g.stylize(RegExp.prototype.toString.call(L), "regexp") : g.stylize("[Object]", "special");
      g.seen.push(L);
      var ee;
      return h ? ee = y(g, L, z, k, x) : ee = x.map(function(he) {
        return m(g, L, z, k, he, h);
      }), g.seen.pop(), C(ee, re, p);
    }
    function j(g, L) {
      if (X(L))
        return g.stylize("undefined", "undefined");
      if (T(L)) {
        var z = "'" + JSON.stringify(L).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return g.stylize(z, "string");
      }
      if (P(L))
        return g.stylize("" + L, "number");
      if (w(L))
        return g.stylize("" + L, "boolean");
      if (E(L))
        return g.stylize("null", "null");
    }
    function O(g) {
      return "[" + Error.prototype.toString.call(g) + "]";
    }
    function y(g, L, z, te, v) {
      for (var x = [], k = 0, Q = L.length; k < Q; ++k)
        K(L, String(k)) ? x.push(m(
          g,
          L,
          z,
          te,
          String(k),
          !0
        )) : x.push("");
      return v.forEach(function(re) {
        re.match(/^\d+$/) || x.push(m(
          g,
          L,
          z,
          te,
          re,
          !0
        ));
      }), x;
    }
    function m(g, L, z, te, v, x) {
      var k, Q, re;
      if (re = Object.getOwnPropertyDescriptor(L, v) || { value: L[v] }, re.get ? re.set ? Q = g.stylize("[Getter/Setter]", "special") : Q = g.stylize("[Getter]", "special") : re.set && (Q = g.stylize("[Setter]", "special")), K(te, v) || (k = "[" + v + "]"), Q || (g.seen.indexOf(re.value) < 0 ? (E(z) ? Q = A(g, re.value, null) : Q = A(g, re.value, z - 1), Q.indexOf(`
`) > -1 && (x ? Q = Q.split(`
`).map(function(h) {
        return "  " + h;
      }).join(`
`).substr(2) : Q = `
` + Q.split(`
`).map(function(h) {
        return "   " + h;
      }).join(`
`))) : Q = g.stylize("[Circular]", "special")), X(k)) {
        if (x && v.match(/^\d+$/))
          return Q;
        k = JSON.stringify("" + v), k.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (k = k.substr(1, k.length - 2), k = g.stylize(k, "name")) : (k = k.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), k = g.stylize(k, "string"));
      }
      return k + ": " + Q;
    }
    function C(g, L, z) {
      var te = g.reduce(function(v, x) {
        return x.indexOf(`
`) >= 0, v + x.replace(/\u001b\[\d\d?m/g, "").length + 1;
      }, 0);
      return te > 60 ? z[0] + (L === "" ? "" : L + `
 `) + " " + g.join(`,
  `) + " " + z[1] : z[0] + L + " " + g.join(", ") + " " + z[1];
    }
    e.types = Wo();
    function J(g) {
      return Array.isArray(g);
    }
    e.isArray = J;
    function w(g) {
      return typeof g == "boolean";
    }
    e.isBoolean = w;
    function E(g) {
      return g === null;
    }
    e.isNull = E;
    function F(g) {
      return g == null;
    }
    e.isNullOrUndefined = F;
    function P(g) {
      return typeof g == "number";
    }
    e.isNumber = P;
    function T(g) {
      return typeof g == "string";
    }
    e.isString = T;
    function W(g) {
      return typeof g == "symbol";
    }
    e.isSymbol = W;
    function X(g) {
      return g === void 0;
    }
    e.isUndefined = X;
    function D(g) {
      return Z(g) && S(g) === "[object RegExp]";
    }
    e.isRegExp = D, e.types.isRegExp = D;
    function Z(g) {
      return typeof g == "object" && g !== null;
    }
    e.isObject = Z;
    function I(g) {
      return Z(g) && S(g) === "[object Date]";
    }
    e.isDate = I, e.types.isDate = I;
    function U(g) {
      return Z(g) && (S(g) === "[object Error]" || g instanceof Error);
    }
    e.isError = U, e.types.isNativeError = U;
    function q(g) {
      return typeof g == "function";
    }
    e.isFunction = q;
    function b(g) {
      return g === null || typeof g == "boolean" || typeof g == "number" || typeof g == "string" || typeof g == "symbol" || typeof g > "u";
    }
    e.isPrimitive = b, e.isBuffer = zo();
    function S(g) {
      return Object.prototype.toString.call(g);
    }
    function B(g) {
      return g < 10 ? "0" + g.toString(10) : g.toString(10);
    }
    var N = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    function V() {
      var g = new Date(), L = [
        B(g.getHours()),
        B(g.getMinutes()),
        B(g.getSeconds())
      ].join(":");
      return [g.getDate(), N[g.getMonth()], L].join(" ");
    }
    e.log = function() {
      console.log("%s - %s", V(), e.format.apply(e, arguments));
    }, e.inherits = Ae(), e._extend = function(g, L) {
      if (!L || !Z(L))
        return g;
      for (var z = Object.keys(L), te = z.length; te--; )
        g[z[te]] = L[z[te]];
      return g;
    };
    function K(g, L) {
      return Object.prototype.hasOwnProperty.call(g, L);
    }
    var Y = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
    e.promisify = function(L) {
      if (typeof L != "function")
        throw new TypeError('The "original" argument must be of type Function');
      if (Y && L[Y]) {
        var z = L[Y];
        if (typeof z != "function")
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        return Object.defineProperty(z, Y, {
          value: z,
          enumerable: !1,
          writable: !1,
          configurable: !0
        }), z;
      }
      function z() {
        for (var te, v, x = new Promise(function(re, h) {
          te = re, v = h;
        }), k = [], Q = 0; Q < arguments.length; Q++)
          k.push(arguments[Q]);
        k.push(function(re, h) {
          re ? v(re) : te(h);
        });
        try {
          L.apply(this, k);
        } catch (re) {
          v(re);
        }
        return x;
      }
      return Object.setPrototypeOf(z, Object.getPrototypeOf(L)), Y && Object.defineProperty(z, Y, {
        value: z,
        enumerable: !1,
        writable: !1,
        configurable: !0
      }), Object.defineProperties(
        z,
        t(L)
      );
    }, e.promisify.custom = Y;
    function ne(g, L) {
      if (!g) {
        var z = new Error("Promise was rejected with a falsy value");
        z.reason = g, g = z;
      }
      return L(g);
    }
    function ie(g) {
      if (typeof g != "function")
        throw new TypeError('The "original" argument must be of type Function');
      function L() {
        for (var z = [], te = 0; te < arguments.length; te++)
          z.push(arguments[te]);
        var v = z.pop();
        if (typeof v != "function")
          throw new TypeError("The last argument must be of type Function");
        var x = this, k = function() {
          return v.apply(x, arguments);
        };
        g.apply(this, z).then(
          function(Q) {
            fe.exports.nextTick(k.bind(null, null, Q));
          },
          function(Q) {
            fe.exports.nextTick(ne.bind(null, Q, k));
          }
        );
      }
      return Object.setPrototypeOf(L, Object.getPrototypeOf(g)), Object.defineProperties(
        L,
        t(g)
      ), L;
    }
    e.callbackify = ie;
  }(Tr)), Tr;
}
var gt = { exports: {} }, zn;
function Tt() {
  if (zn)
    return gt.exports;
  zn = 1;
  var e = typeof Reflect == "object" ? Reflect : null, t = e && typeof e.apply == "function" ? e.apply : function(T, W, X) {
    return Function.prototype.apply.call(T, W, X);
  }, n;
  e && typeof e.ownKeys == "function" ? n = e.ownKeys : Object.getOwnPropertySymbols ? n = function(T) {
    return Object.getOwnPropertyNames(T).concat(Object.getOwnPropertySymbols(T));
  } : n = function(T) {
    return Object.getOwnPropertyNames(T);
  };
  function a(P) {
    console && console.warn && console.warn(P);
  }
  var s = Number.isNaN || function(T) {
    return T !== T;
  };
  function c() {
    c.init.call(this);
  }
  gt.exports = c, gt.exports.once = w, c.EventEmitter = c, c.prototype._events = void 0, c.prototype._eventsCount = 0, c.prototype._maxListeners = void 0;
  var u = 10;
  function o(P) {
    if (typeof P != "function")
      throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof P);
  }
  Object.defineProperty(c, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
      return u;
    },
    set: function(P) {
      if (typeof P != "number" || P < 0 || s(P))
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + P + ".");
      u = P;
    }
  }), c.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, c.prototype.setMaxListeners = function(T) {
    if (typeof T != "number" || T < 0 || s(T))
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + T + ".");
    return this._maxListeners = T, this;
  };
  function l(P) {
    return P._maxListeners === void 0 ? c.defaultMaxListeners : P._maxListeners;
  }
  c.prototype.getMaxListeners = function() {
    return l(this);
  }, c.prototype.emit = function(T) {
    for (var W = [], X = 1; X < arguments.length; X++)
      W.push(arguments[X]);
    var D = T === "error", Z = this._events;
    if (Z !== void 0)
      D = D && Z.error === void 0;
    else if (!D)
      return !1;
    if (D) {
      var I;
      if (W.length > 0 && (I = W[0]), I instanceof Error)
        throw I;
      var U = new Error("Unhandled error." + (I ? " (" + I.message + ")" : ""));
      throw U.context = I, U;
    }
    var q = Z[T];
    if (q === void 0)
      return !1;
    if (typeof q == "function")
      t(q, this, W);
    else
      for (var b = q.length, S = m(q, b), X = 0; X < b; ++X)
        t(S[X], this, W);
    return !0;
  };
  function _(P, T, W, X) {
    var D, Z, I;
    if (o(W), Z = P._events, Z === void 0 ? (Z = P._events = /* @__PURE__ */ Object.create(null), P._eventsCount = 0) : (Z.newListener !== void 0 && (P.emit(
      "newListener",
      T,
      W.listener ? W.listener : W
    ), Z = P._events), I = Z[T]), I === void 0)
      I = Z[T] = W, ++P._eventsCount;
    else if (typeof I == "function" ? I = Z[T] = X ? [W, I] : [I, W] : X ? I.unshift(W) : I.push(W), D = l(P), D > 0 && I.length > D && !I.warned) {
      I.warned = !0;
      var U = new Error("Possible EventEmitter memory leak detected. " + I.length + " " + String(T) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      U.name = "MaxListenersExceededWarning", U.emitter = P, U.type = T, U.count = I.length, a(U);
    }
    return P;
  }
  c.prototype.addListener = function(T, W) {
    return _(this, T, W, !1);
  }, c.prototype.on = c.prototype.addListener, c.prototype.prependListener = function(T, W) {
    return _(this, T, W, !0);
  };
  function A() {
    if (!this.fired)
      return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  function j(P, T, W) {
    var X = { fired: !1, wrapFn: void 0, target: P, type: T, listener: W }, D = A.bind(X);
    return D.listener = W, X.wrapFn = D, D;
  }
  c.prototype.once = function(T, W) {
    return o(W), this.on(T, j(this, T, W)), this;
  }, c.prototype.prependOnceListener = function(T, W) {
    return o(W), this.prependListener(T, j(this, T, W)), this;
  }, c.prototype.removeListener = function(T, W) {
    var X, D, Z, I, U;
    if (o(W), D = this._events, D === void 0)
      return this;
    if (X = D[T], X === void 0)
      return this;
    if (X === W || X.listener === W)
      --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete D[T], D.removeListener && this.emit("removeListener", T, X.listener || W));
    else if (typeof X != "function") {
      for (Z = -1, I = X.length - 1; I >= 0; I--)
        if (X[I] === W || X[I].listener === W) {
          U = X[I].listener, Z = I;
          break;
        }
      if (Z < 0)
        return this;
      Z === 0 ? X.shift() : C(X, Z), X.length === 1 && (D[T] = X[0]), D.removeListener !== void 0 && this.emit("removeListener", T, U || W);
    }
    return this;
  }, c.prototype.off = c.prototype.removeListener, c.prototype.removeAllListeners = function(T) {
    var W, X, D;
    if (X = this._events, X === void 0)
      return this;
    if (X.removeListener === void 0)
      return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : X[T] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete X[T]), this;
    if (arguments.length === 0) {
      var Z = Object.keys(X), I;
      for (D = 0; D < Z.length; ++D)
        I = Z[D], I !== "removeListener" && this.removeAllListeners(I);
      return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
    }
    if (W = X[T], typeof W == "function")
      this.removeListener(T, W);
    else if (W !== void 0)
      for (D = W.length - 1; D >= 0; D--)
        this.removeListener(T, W[D]);
    return this;
  };
  function O(P, T, W) {
    var X = P._events;
    if (X === void 0)
      return [];
    var D = X[T];
    return D === void 0 ? [] : typeof D == "function" ? W ? [D.listener || D] : [D] : W ? J(D) : m(D, D.length);
  }
  c.prototype.listeners = function(T) {
    return O(this, T, !0);
  }, c.prototype.rawListeners = function(T) {
    return O(this, T, !1);
  }, c.listenerCount = function(P, T) {
    return typeof P.listenerCount == "function" ? P.listenerCount(T) : y.call(P, T);
  }, c.prototype.listenerCount = y;
  function y(P) {
    var T = this._events;
    if (T !== void 0) {
      var W = T[P];
      if (typeof W == "function")
        return 1;
      if (W !== void 0)
        return W.length;
    }
    return 0;
  }
  c.prototype.eventNames = function() {
    return this._eventsCount > 0 ? n(this._events) : [];
  };
  function m(P, T) {
    for (var W = new Array(T), X = 0; X < T; ++X)
      W[X] = P[X];
    return W;
  }
  function C(P, T) {
    for (; T + 1 < P.length; T++)
      P[T] = P[T + 1];
    P.pop();
  }
  function J(P) {
    for (var T = new Array(P.length), W = 0; W < T.length; ++W)
      T[W] = P[W].listener || P[W];
    return T;
  }
  function w(P, T) {
    return new Promise(function(W, X) {
      function D(I) {
        P.removeListener(T, Z), X(I);
      }
      function Z() {
        typeof P.removeListener == "function" && P.removeListener("error", D), W([].slice.call(arguments));
      }
      F(P, T, Z, { once: !0 }), T !== "error" && E(P, D, { once: !0 });
    });
  }
  function E(P, T, W) {
    typeof P.on == "function" && F(P, "error", T, W);
  }
  function F(P, T, W, X) {
    if (typeof P.on == "function")
      X.once ? P.once(T, W) : P.on(T, W);
    else if (typeof P.addEventListener == "function")
      P.addEventListener(T, function D(Z) {
        X.once && P.removeEventListener(T, D), W(Z);
      });
    else
      throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof P);
  }
  return gt.exports;
}
var Gr = {}, _t = { exports: {} };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var Gn;
function Vo() {
  return Gn || (Gn = 1, function(e, t) {
    var n = Qe(), a = n.Buffer;
    function s(u, o) {
      for (var l in u)
        o[l] = u[l];
    }
    a.from && a.alloc && a.allocUnsafe && a.allocUnsafeSlow ? e.exports = n : (s(n, t), t.Buffer = c);
    function c(u, o, l) {
      return a(u, o, l);
    }
    c.prototype = Object.create(a.prototype), s(a, c), c.from = function(u, o, l) {
      if (typeof u == "number")
        throw new TypeError("Argument must not be a number");
      return a(u, o, l);
    }, c.alloc = function(u, o, l) {
      if (typeof u != "number")
        throw new TypeError("Argument must be a number");
      var _ = a(u);
      return o !== void 0 ? typeof l == "string" ? _.fill(o, l) : _.fill(o) : _.fill(0), _;
    }, c.allocUnsafe = function(u) {
      if (typeof u != "number")
        throw new TypeError("Argument must be a number");
      return a(u);
    }, c.allocUnsafeSlow = function(u) {
      if (typeof u != "number")
        throw new TypeError("Argument must be a number");
      return n.SlowBuffer(u);
    };
  }(_t, _t.exports)), _t.exports;
}
var Vn;
function Jn() {
  if (Vn)
    return Gr;
  Vn = 1;
  var e = Vo().Buffer, t = e.isEncoding || function(w) {
    switch (w = "" + w, w && w.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return !0;
      default:
        return !1;
    }
  };
  function n(w) {
    if (!w)
      return "utf8";
    for (var E; ; )
      switch (w) {
        case "utf8":
        case "utf-8":
          return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return "utf16le";
        case "latin1":
        case "binary":
          return "latin1";
        case "base64":
        case "ascii":
        case "hex":
          return w;
        default:
          if (E)
            return;
          w = ("" + w).toLowerCase(), E = !0;
      }
  }
  function a(w) {
    var E = n(w);
    if (typeof E != "string" && (e.isEncoding === t || !t(w)))
      throw new Error("Unknown encoding: " + w);
    return E || w;
  }
  Gr.StringDecoder = s;
  function s(w) {
    this.encoding = a(w);
    var E;
    switch (this.encoding) {
      case "utf16le":
        this.text = j, this.end = O, E = 4;
        break;
      case "utf8":
        this.fillLast = l, E = 4;
        break;
      case "base64":
        this.text = y, this.end = m, E = 3;
        break;
      default:
        this.write = C, this.end = J;
        return;
    }
    this.lastNeed = 0, this.lastTotal = 0, this.lastChar = e.allocUnsafe(E);
  }
  s.prototype.write = function(w) {
    if (w.length === 0)
      return "";
    var E, F;
    if (this.lastNeed) {
      if (E = this.fillLast(w), E === void 0)
        return "";
      F = this.lastNeed, this.lastNeed = 0;
    } else
      F = 0;
    return F < w.length ? E ? E + this.text(w, F) : this.text(w, F) : E || "";
  }, s.prototype.end = A, s.prototype.text = _, s.prototype.fillLast = function(w) {
    if (this.lastNeed <= w.length)
      return w.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    w.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, w.length), this.lastNeed -= w.length;
  };
  function c(w) {
    return w <= 127 ? 0 : w >> 5 === 6 ? 2 : w >> 4 === 14 ? 3 : w >> 3 === 30 ? 4 : w >> 6 === 2 ? -1 : -2;
  }
  function u(w, E, F) {
    var P = E.length - 1;
    if (P < F)
      return 0;
    var T = c(E[P]);
    return T >= 0 ? (T > 0 && (w.lastNeed = T - 1), T) : --P < F || T === -2 ? 0 : (T = c(E[P]), T >= 0 ? (T > 0 && (w.lastNeed = T - 2), T) : --P < F || T === -2 ? 0 : (T = c(E[P]), T >= 0 ? (T > 0 && (T === 2 ? T = 0 : w.lastNeed = T - 3), T) : 0));
  }
  function o(w, E, F) {
    if ((E[0] & 192) !== 128)
      return w.lastNeed = 0, "\uFFFD";
    if (w.lastNeed > 1 && E.length > 1) {
      if ((E[1] & 192) !== 128)
        return w.lastNeed = 1, "\uFFFD";
      if (w.lastNeed > 2 && E.length > 2 && (E[2] & 192) !== 128)
        return w.lastNeed = 2, "\uFFFD";
    }
  }
  function l(w) {
    var E = this.lastTotal - this.lastNeed, F = o(this, w);
    if (F !== void 0)
      return F;
    if (this.lastNeed <= w.length)
      return w.copy(this.lastChar, E, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    w.copy(this.lastChar, E, 0, w.length), this.lastNeed -= w.length;
  }
  function _(w, E) {
    var F = u(this, w, E);
    if (!this.lastNeed)
      return w.toString("utf8", E);
    this.lastTotal = F;
    var P = w.length - (F - this.lastNeed);
    return w.copy(this.lastChar, 0, P), w.toString("utf8", E, P);
  }
  function A(w) {
    var E = w && w.length ? this.write(w) : "";
    return this.lastNeed ? E + "\uFFFD" : E;
  }
  function j(w, E) {
    if ((w.length - E) % 2 === 0) {
      var F = w.toString("utf16le", E);
      if (F) {
        var P = F.charCodeAt(F.length - 1);
        if (P >= 55296 && P <= 56319)
          return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = w[w.length - 2], this.lastChar[1] = w[w.length - 1], F.slice(0, -1);
      }
      return F;
    }
    return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = w[w.length - 1], w.toString("utf16le", E, w.length - 1);
  }
  function O(w) {
    var E = w && w.length ? this.write(w) : "";
    if (this.lastNeed) {
      var F = this.lastTotal - this.lastNeed;
      return E + this.lastChar.toString("utf16le", 0, F);
    }
    return E;
  }
  function y(w, E) {
    var F = (w.length - E) % 3;
    return F === 0 ? w.toString("base64", E) : (this.lastNeed = 3 - F, this.lastTotal = 3, F === 1 ? this.lastChar[0] = w[w.length - 1] : (this.lastChar[0] = w[w.length - 2], this.lastChar[1] = w[w.length - 1]), w.toString("base64", E, w.length - F));
  }
  function m(w) {
    var E = w && w.length ? this.write(w) : "";
    return this.lastNeed ? E + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : E;
  }
  function C(w) {
    return w.toString(this.encoding);
  }
  function J(w) {
    return w && w.length ? this.write(w) : "";
  }
  return Gr;
}
var At = { exports: {} }, ki = Tt().EventEmitter, Vr, Kn;
function Jo() {
  if (Kn)
    return Vr;
  Kn = 1;
  function e(O, y) {
    var m = Object.keys(O);
    if (Object.getOwnPropertySymbols) {
      var C = Object.getOwnPropertySymbols(O);
      y && (C = C.filter(function(J) {
        return Object.getOwnPropertyDescriptor(O, J).enumerable;
      })), m.push.apply(m, C);
    }
    return m;
  }
  function t(O) {
    for (var y = 1; y < arguments.length; y++) {
      var m = arguments[y] != null ? arguments[y] : {};
      y % 2 ? e(Object(m), !0).forEach(function(C) {
        n(O, C, m[C]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(m)) : e(Object(m)).forEach(function(C) {
        Object.defineProperty(O, C, Object.getOwnPropertyDescriptor(m, C));
      });
    }
    return O;
  }
  function n(O, y, m) {
    return y in O ? Object.defineProperty(O, y, { value: m, enumerable: !0, configurable: !0, writable: !0 }) : O[y] = m, O;
  }
  function a(O, y) {
    if (!(O instanceof y))
      throw new TypeError("Cannot call a class as a function");
  }
  function s(O, y) {
    for (var m = 0; m < y.length; m++) {
      var C = y[m];
      C.enumerable = C.enumerable || !1, C.configurable = !0, "value" in C && (C.writable = !0), Object.defineProperty(O, C.key, C);
    }
  }
  function c(O, y, m) {
    return y && s(O.prototype, y), m && s(O, m), O;
  }
  var u = Qe(), o = u.Buffer, l = Bi, _ = l.inspect, A = _ && _.custom || "inspect";
  function j(O, y, m) {
    o.prototype.copy.call(O, y, m);
  }
  return Vr = /* @__PURE__ */ function() {
    function O() {
      a(this, O), this.head = null, this.tail = null, this.length = 0;
    }
    return c(O, [{
      key: "push",
      value: function(m) {
        var C = {
          data: m,
          next: null
        };
        this.length > 0 ? this.tail.next = C : this.head = C, this.tail = C, ++this.length;
      }
    }, {
      key: "unshift",
      value: function(m) {
        var C = {
          data: m,
          next: this.head
        };
        this.length === 0 && (this.tail = C), this.head = C, ++this.length;
      }
    }, {
      key: "shift",
      value: function() {
        if (this.length !== 0) {
          var m = this.head.data;
          return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, m;
        }
      }
    }, {
      key: "clear",
      value: function() {
        this.head = this.tail = null, this.length = 0;
      }
    }, {
      key: "join",
      value: function(m) {
        if (this.length === 0)
          return "";
        for (var C = this.head, J = "" + C.data; C = C.next; )
          J += m + C.data;
        return J;
      }
    }, {
      key: "concat",
      value: function(m) {
        if (this.length === 0)
          return o.alloc(0);
        for (var C = o.allocUnsafe(m >>> 0), J = this.head, w = 0; J; )
          j(J.data, C, w), w += J.data.length, J = J.next;
        return C;
      }
    }, {
      key: "consume",
      value: function(m, C) {
        var J;
        return m < this.head.data.length ? (J = this.head.data.slice(0, m), this.head.data = this.head.data.slice(m)) : m === this.head.data.length ? J = this.shift() : J = C ? this._getString(m) : this._getBuffer(m), J;
      }
    }, {
      key: "first",
      value: function() {
        return this.head.data;
      }
    }, {
      key: "_getString",
      value: function(m) {
        var C = this.head, J = 1, w = C.data;
        for (m -= w.length; C = C.next; ) {
          var E = C.data, F = m > E.length ? E.length : m;
          if (F === E.length ? w += E : w += E.slice(0, m), m -= F, m === 0) {
            F === E.length ? (++J, C.next ? this.head = C.next : this.head = this.tail = null) : (this.head = C, C.data = E.slice(F));
            break;
          }
          ++J;
        }
        return this.length -= J, w;
      }
    }, {
      key: "_getBuffer",
      value: function(m) {
        var C = o.allocUnsafe(m), J = this.head, w = 1;
        for (J.data.copy(C), m -= J.data.length; J = J.next; ) {
          var E = J.data, F = m > E.length ? E.length : m;
          if (E.copy(C, C.length - m, 0, F), m -= F, m === 0) {
            F === E.length ? (++w, J.next ? this.head = J.next : this.head = this.tail = null) : (this.head = J, J.data = E.slice(F));
            break;
          }
          ++w;
        }
        return this.length -= w, C;
      }
    }, {
      key: A,
      value: function(m, C) {
        return _(this, t({}, C, {
          depth: 0,
          customInspect: !1
        }));
      }
    }]), O;
  }(), Vr;
}
function Ko(e, t) {
  var n = this, a = this._readableState && this._readableState.destroyed, s = this._writableState && this._writableState.destroyed;
  return a || s ? (t ? t(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, fe.exports.nextTick(ln, this, e)) : fe.exports.nextTick(ln, this, e)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function(c) {
    !t && c ? n._writableState ? n._writableState.errorEmitted ? fe.exports.nextTick(vt, n) : (n._writableState.errorEmitted = !0, fe.exports.nextTick(Yn, n, c)) : fe.exports.nextTick(Yn, n, c) : t ? (fe.exports.nextTick(vt, n), t(c)) : fe.exports.nextTick(vt, n);
  }), this);
}
function Yn(e, t) {
  ln(e, t), vt(e);
}
function vt(e) {
  e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close");
}
function Yo() {
  this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
}
function ln(e, t) {
  e.emit("error", t);
}
function Xo(e, t) {
  var n = e._readableState, a = e._writableState;
  n && n.autoDestroy || a && a.autoDestroy ? e.destroy(t) : e.emit("error", t);
}
var Ni = {
  destroy: Ko,
  undestroy: Yo,
  errorOrDestroy: Xo
}, $e = {};
function Qo(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
var Ui = {};
function Re(e, t, n) {
  n || (n = Error);
  function a(c, u, o) {
    return typeof t == "string" ? t : t(c, u, o);
  }
  var s = /* @__PURE__ */ function(c) {
    Qo(u, c);
    function u(o, l, _) {
      return c.call(this, a(o, l, _)) || this;
    }
    return u;
  }(n);
  s.prototype.name = n.name, s.prototype.code = e, Ui[e] = s;
}
function Xn(e, t) {
  if (Array.isArray(e)) {
    var n = e.length;
    return e = e.map(function(a) {
      return String(a);
    }), n > 2 ? "one of ".concat(t, " ").concat(e.slice(0, n - 1).join(", "), ", or ") + e[n - 1] : n === 2 ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0]);
  } else
    return "of ".concat(t, " ").concat(String(e));
}
function Zo(e, t, n) {
  return e.substr(!n || n < 0 ? 0 : +n, t.length) === t;
}
function ea(e, t, n) {
  return (n === void 0 || n > e.length) && (n = e.length), e.substring(n - t.length, n) === t;
}
function ta(e, t, n) {
  return typeof n != "number" && (n = 0), n + t.length > e.length ? !1 : e.indexOf(t, n) !== -1;
}
Re("ERR_INVALID_OPT_VALUE", function(e, t) {
  return 'The value "' + t + '" is invalid for option "' + e + '"';
}, TypeError);
Re("ERR_INVALID_ARG_TYPE", function(e, t, n) {
  var a;
  typeof t == "string" && Zo(t, "not ") ? (a = "must not be", t = t.replace(/^not /, "")) : a = "must be";
  var s;
  if (ea(e, " argument"))
    s = "The ".concat(e, " ").concat(a, " ").concat(Xn(t, "type"));
  else {
    var c = ta(e, ".") ? "property" : "argument";
    s = 'The "'.concat(e, '" ').concat(c, " ").concat(a, " ").concat(Xn(t, "type"));
  }
  return s += ". Received type ".concat(typeof n), s;
}, TypeError);
Re("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
Re("ERR_METHOD_NOT_IMPLEMENTED", function(e) {
  return "The " + e + " method is not implemented";
});
Re("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
Re("ERR_STREAM_DESTROYED", function(e) {
  return "Cannot call " + e + " after a stream was destroyed";
});
Re("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
Re("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
Re("ERR_STREAM_WRITE_AFTER_END", "write after end");
Re("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
Re("ERR_UNKNOWN_ENCODING", function(e) {
  return "Unknown encoding: " + e;
}, TypeError);
Re("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
$e.codes = Ui;
var ra = $e.codes.ERR_INVALID_OPT_VALUE;
function na(e, t, n) {
  return e.highWaterMark != null ? e.highWaterMark : t ? e[n] : null;
}
function ia(e, t, n, a) {
  var s = na(t, a, n);
  if (s != null) {
    if (!(isFinite(s) && Math.floor(s) === s) || s < 0) {
      var c = a ? n : "highWaterMark";
      throw new ra(c, s);
    }
    return Math.floor(s);
  }
  return e.objectMode ? 16 : 16 * 1024;
}
var Di = {
  getHighWaterMark: ia
}, oa = aa;
function aa(e, t) {
  if (Jr("noDeprecation"))
    return e;
  var n = !1;
  function a() {
    if (!n) {
      if (Jr("throwDeprecation"))
        throw new Error(t);
      Jr("traceDeprecation") ? console.trace(t) : console.warn(t), n = !0;
    }
    return e.apply(this, arguments);
  }
  return a;
}
function Jr(e) {
  try {
    if (!be.localStorage)
      return !1;
  } catch {
    return !1;
  }
  var t = be.localStorage[e];
  return t == null ? !1 : String(t).toLowerCase() === "true";
}
var Kr, Qn;
function $i() {
  if (Qn)
    return Kr;
  Qn = 1, Kr = D;
  function e(v) {
    var x = this;
    this.next = null, this.entry = null, this.finish = function() {
      te(x, v);
    };
  }
  var t;
  D.WritableState = W;
  var n = {
    deprecate: oa
  }, a = ki, s = Qe().Buffer, c = be.Uint8Array || function() {
  };
  function u(v) {
    return s.from(v);
  }
  function o(v) {
    return s.isBuffer(v) || v instanceof c;
  }
  var l = Ni, _ = Di, A = _.getHighWaterMark, j = $e.codes, O = j.ERR_INVALID_ARG_TYPE, y = j.ERR_METHOD_NOT_IMPLEMENTED, m = j.ERR_MULTIPLE_CALLBACK, C = j.ERR_STREAM_CANNOT_PIPE, J = j.ERR_STREAM_DESTROYED, w = j.ERR_STREAM_NULL_VALUES, E = j.ERR_STREAM_WRITE_AFTER_END, F = j.ERR_UNKNOWN_ENCODING, P = l.errorOrDestroy;
  Ae()(D, a);
  function T() {
  }
  function W(v, x, k) {
    t = t || Xe(), v = v || {}, typeof k != "boolean" && (k = x instanceof t), this.objectMode = !!v.objectMode, k && (this.objectMode = this.objectMode || !!v.writableObjectMode), this.highWaterMark = A(this, v, "writableHighWaterMark", k), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    var Q = v.decodeStrings === !1;
    this.decodeStrings = !Q, this.defaultEncoding = v.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(re) {
      N(x, re);
    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = v.emitClose !== !1, this.autoDestroy = !!v.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new e(this);
  }
  W.prototype.getBuffer = function() {
    for (var x = this.bufferedRequest, k = []; x; )
      k.push(x), x = x.next;
    return k;
  }, function() {
    try {
      Object.defineProperty(W.prototype, "buffer", {
        get: n.deprecate(function() {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch {
    }
  }();
  var X;
  typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (X = Function.prototype[Symbol.hasInstance], Object.defineProperty(D, Symbol.hasInstance, {
    value: function(x) {
      return X.call(this, x) ? !0 : this !== D ? !1 : x && x._writableState instanceof W;
    }
  })) : X = function(x) {
    return x instanceof this;
  };
  function D(v) {
    t = t || Xe();
    var x = this instanceof t;
    if (!x && !X.call(D, this))
      return new D(v);
    this._writableState = new W(v, this, x), this.writable = !0, v && (typeof v.write == "function" && (this._write = v.write), typeof v.writev == "function" && (this._writev = v.writev), typeof v.destroy == "function" && (this._destroy = v.destroy), typeof v.final == "function" && (this._final = v.final)), a.call(this);
  }
  D.prototype.pipe = function() {
    P(this, new C());
  };
  function Z(v, x) {
    var k = new E();
    P(v, k), fe.exports.nextTick(x, k);
  }
  function I(v, x, k, Q) {
    var re;
    return k === null ? re = new w() : typeof k != "string" && !x.objectMode && (re = new O("chunk", ["string", "Buffer"], k)), re ? (P(v, re), fe.exports.nextTick(Q, re), !1) : !0;
  }
  D.prototype.write = function(v, x, k) {
    var Q = this._writableState, re = !1, h = !Q.objectMode && o(v);
    return h && !s.isBuffer(v) && (v = u(v)), typeof x == "function" && (k = x, x = null), h ? x = "buffer" : x || (x = Q.defaultEncoding), typeof k != "function" && (k = T), Q.ending ? Z(this, k) : (h || I(this, Q, v, k)) && (Q.pendingcb++, re = q(this, Q, h, v, x, k)), re;
  }, D.prototype.cork = function() {
    this._writableState.corked++;
  }, D.prototype.uncork = function() {
    var v = this._writableState;
    v.corked && (v.corked--, !v.writing && !v.corked && !v.bufferProcessing && v.bufferedRequest && Y(this, v));
  }, D.prototype.setDefaultEncoding = function(x) {
    if (typeof x == "string" && (x = x.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((x + "").toLowerCase()) > -1))
      throw new F(x);
    return this._writableState.defaultEncoding = x, this;
  }, Object.defineProperty(D.prototype, "writableBuffer", {
    enumerable: !1,
    get: function() {
      return this._writableState && this._writableState.getBuffer();
    }
  });
  function U(v, x, k) {
    return !v.objectMode && v.decodeStrings !== !1 && typeof x == "string" && (x = s.from(x, k)), x;
  }
  Object.defineProperty(D.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function() {
      return this._writableState.highWaterMark;
    }
  });
  function q(v, x, k, Q, re, h) {
    if (!k) {
      var p = U(x, Q, re);
      Q !== p && (k = !0, re = "buffer", Q = p);
    }
    var G = x.objectMode ? 1 : Q.length;
    x.length += G;
    var ee = x.length < x.highWaterMark;
    if (ee || (x.needDrain = !0), x.writing || x.corked) {
      var he = x.lastBufferedRequest;
      x.lastBufferedRequest = {
        chunk: Q,
        encoding: re,
        isBuf: k,
        callback: h,
        next: null
      }, he ? he.next = x.lastBufferedRequest : x.bufferedRequest = x.lastBufferedRequest, x.bufferedRequestCount += 1;
    } else
      b(v, x, !1, G, Q, re, h);
    return ee;
  }
  function b(v, x, k, Q, re, h, p) {
    x.writelen = Q, x.writecb = p, x.writing = !0, x.sync = !0, x.destroyed ? x.onwrite(new J("write")) : k ? v._writev(re, x.onwrite) : v._write(re, h, x.onwrite), x.sync = !1;
  }
  function S(v, x, k, Q, re) {
    --x.pendingcb, k ? (fe.exports.nextTick(re, Q), fe.exports.nextTick(L, v, x), v._writableState.errorEmitted = !0, P(v, Q)) : (re(Q), v._writableState.errorEmitted = !0, P(v, Q), L(v, x));
  }
  function B(v) {
    v.writing = !1, v.writecb = null, v.length -= v.writelen, v.writelen = 0;
  }
  function N(v, x) {
    var k = v._writableState, Q = k.sync, re = k.writecb;
    if (typeof re != "function")
      throw new m();
    if (B(k), x)
      S(v, k, Q, x, re);
    else {
      var h = ne(k) || v.destroyed;
      !h && !k.corked && !k.bufferProcessing && k.bufferedRequest && Y(v, k), Q ? fe.exports.nextTick(V, v, k, h, re) : V(v, k, h, re);
    }
  }
  function V(v, x, k, Q) {
    k || K(v, x), x.pendingcb--, Q(), L(v, x);
  }
  function K(v, x) {
    x.length === 0 && x.needDrain && (x.needDrain = !1, v.emit("drain"));
  }
  function Y(v, x) {
    x.bufferProcessing = !0;
    var k = x.bufferedRequest;
    if (v._writev && k && k.next) {
      var Q = x.bufferedRequestCount, re = new Array(Q), h = x.corkedRequestsFree;
      h.entry = k;
      for (var p = 0, G = !0; k; )
        re[p] = k, k.isBuf || (G = !1), k = k.next, p += 1;
      re.allBuffers = G, b(v, x, !0, x.length, re, "", h.finish), x.pendingcb++, x.lastBufferedRequest = null, h.next ? (x.corkedRequestsFree = h.next, h.next = null) : x.corkedRequestsFree = new e(x), x.bufferedRequestCount = 0;
    } else {
      for (; k; ) {
        var ee = k.chunk, he = k.encoding, ae = k.callback, ce = x.objectMode ? 1 : ee.length;
        if (b(v, x, !1, ce, ee, he, ae), k = k.next, x.bufferedRequestCount--, x.writing)
          break;
      }
      k === null && (x.lastBufferedRequest = null);
    }
    x.bufferedRequest = k, x.bufferProcessing = !1;
  }
  D.prototype._write = function(v, x, k) {
    k(new y("_write()"));
  }, D.prototype._writev = null, D.prototype.end = function(v, x, k) {
    var Q = this._writableState;
    return typeof v == "function" ? (k = v, v = null, x = null) : typeof x == "function" && (k = x, x = null), v != null && this.write(v, x), Q.corked && (Q.corked = 1, this.uncork()), Q.ending || z(this, Q, k), this;
  }, Object.defineProperty(D.prototype, "writableLength", {
    enumerable: !1,
    get: function() {
      return this._writableState.length;
    }
  });
  function ne(v) {
    return v.ending && v.length === 0 && v.bufferedRequest === null && !v.finished && !v.writing;
  }
  function ie(v, x) {
    v._final(function(k) {
      x.pendingcb--, k && P(v, k), x.prefinished = !0, v.emit("prefinish"), L(v, x);
    });
  }
  function g(v, x) {
    !x.prefinished && !x.finalCalled && (typeof v._final == "function" && !x.destroyed ? (x.pendingcb++, x.finalCalled = !0, fe.exports.nextTick(ie, v, x)) : (x.prefinished = !0, v.emit("prefinish")));
  }
  function L(v, x) {
    var k = ne(x);
    if (k && (g(v, x), x.pendingcb === 0 && (x.finished = !0, v.emit("finish"), x.autoDestroy))) {
      var Q = v._readableState;
      (!Q || Q.autoDestroy && Q.endEmitted) && v.destroy();
    }
    return k;
  }
  function z(v, x, k) {
    x.ending = !0, L(v, x), k && (x.finished ? fe.exports.nextTick(k) : v.once("finish", k)), x.ended = !0, v.writable = !1;
  }
  function te(v, x, k) {
    var Q = v.entry;
    for (v.entry = null; Q; ) {
      var re = Q.callback;
      x.pendingcb--, re(k), Q = Q.next;
    }
    x.corkedRequestsFree.next = v;
  }
  return Object.defineProperty(D.prototype, "destroyed", {
    enumerable: !1,
    get: function() {
      return this._writableState === void 0 ? !1 : this._writableState.destroyed;
    },
    set: function(x) {
      !this._writableState || (this._writableState.destroyed = x);
    }
  }), D.prototype.destroy = l.destroy, D.prototype._undestroy = l.undestroy, D.prototype._destroy = function(v, x) {
    x(v);
  }, Kr;
}
var Yr, Zn;
function Xe() {
  if (Zn)
    return Yr;
  Zn = 1;
  var e = Object.keys || function(_) {
    var A = [];
    for (var j in _)
      A.push(j);
    return A;
  };
  Yr = u;
  var t = Hi(), n = $i();
  Ae()(u, t);
  for (var a = e(n.prototype), s = 0; s < a.length; s++) {
    var c = a[s];
    u.prototype[c] || (u.prototype[c] = n.prototype[c]);
  }
  function u(_) {
    if (!(this instanceof u))
      return new u(_);
    t.call(this, _), n.call(this, _), this.allowHalfOpen = !0, _ && (_.readable === !1 && (this.readable = !1), _.writable === !1 && (this.writable = !1), _.allowHalfOpen === !1 && (this.allowHalfOpen = !1, this.once("end", o)));
  }
  Object.defineProperty(u.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function() {
      return this._writableState.highWaterMark;
    }
  }), Object.defineProperty(u.prototype, "writableBuffer", {
    enumerable: !1,
    get: function() {
      return this._writableState && this._writableState.getBuffer();
    }
  }), Object.defineProperty(u.prototype, "writableLength", {
    enumerable: !1,
    get: function() {
      return this._writableState.length;
    }
  });
  function o() {
    this._writableState.ended || fe.exports.nextTick(l, this);
  }
  function l(_) {
    _.end();
  }
  return Object.defineProperty(u.prototype, "destroyed", {
    enumerable: !1,
    get: function() {
      return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function(A) {
      this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = A, this._writableState.destroyed = A);
    }
  }), Yr;
}
var ei = $e.codes.ERR_STREAM_PREMATURE_CLOSE;
function sa(e) {
  var t = !1;
  return function() {
    if (!t) {
      t = !0;
      for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
        a[s] = arguments[s];
      e.apply(this, a);
    }
  };
}
function ua() {
}
function fa(e) {
  return e.setHeader && typeof e.abort == "function";
}
function qi(e, t, n) {
  if (typeof t == "function")
    return qi(e, null, t);
  t || (t = {}), n = sa(n || ua);
  var a = t.readable || t.readable !== !1 && e.readable, s = t.writable || t.writable !== !1 && e.writable, c = function() {
    e.writable || o();
  }, u = e._writableState && e._writableState.finished, o = function() {
    s = !1, u = !0, a || n.call(e);
  }, l = e._readableState && e._readableState.endEmitted, _ = function() {
    a = !1, l = !0, s || n.call(e);
  }, A = function(m) {
    n.call(e, m);
  }, j = function() {
    var m;
    if (a && !l)
      return (!e._readableState || !e._readableState.ended) && (m = new ei()), n.call(e, m);
    if (s && !u)
      return (!e._writableState || !e._writableState.ended) && (m = new ei()), n.call(e, m);
  }, O = function() {
    e.req.on("finish", o);
  };
  return fa(e) ? (e.on("complete", o), e.on("abort", j), e.req ? O() : e.on("request", O)) : s && !e._writableState && (e.on("end", c), e.on("close", c)), e.on("end", _), e.on("finish", o), t.error !== !1 && e.on("error", A), e.on("close", j), function() {
    e.removeListener("complete", o), e.removeListener("abort", j), e.removeListener("request", O), e.req && e.req.removeListener("finish", o), e.removeListener("end", c), e.removeListener("close", c), e.removeListener("finish", o), e.removeListener("end", _), e.removeListener("error", A), e.removeListener("close", j);
  };
}
var _n = qi, Xr, ti;
function ca() {
  if (ti)
    return Xr;
  ti = 1;
  var e;
  function t(w, E, F) {
    return E in w ? Object.defineProperty(w, E, { value: F, enumerable: !0, configurable: !0, writable: !0 }) : w[E] = F, w;
  }
  var n = _n, a = Symbol("lastResolve"), s = Symbol("lastReject"), c = Symbol("error"), u = Symbol("ended"), o = Symbol("lastPromise"), l = Symbol("handlePromise"), _ = Symbol("stream");
  function A(w, E) {
    return {
      value: w,
      done: E
    };
  }
  function j(w) {
    var E = w[a];
    if (E !== null) {
      var F = w[_].read();
      F !== null && (w[o] = null, w[a] = null, w[s] = null, E(A(F, !1)));
    }
  }
  function O(w) {
    fe.exports.nextTick(j, w);
  }
  function y(w, E) {
    return function(F, P) {
      w.then(function() {
        if (E[u]) {
          F(A(void 0, !0));
          return;
        }
        E[l](F, P);
      }, P);
    };
  }
  var m = Object.getPrototypeOf(function() {
  }), C = Object.setPrototypeOf((e = {
    get stream() {
      return this[_];
    },
    next: function() {
      var E = this, F = this[c];
      if (F !== null)
        return Promise.reject(F);
      if (this[u])
        return Promise.resolve(A(void 0, !0));
      if (this[_].destroyed)
        return new Promise(function(X, D) {
          fe.exports.nextTick(function() {
            E[c] ? D(E[c]) : X(A(void 0, !0));
          });
        });
      var P = this[o], T;
      if (P)
        T = new Promise(y(P, this));
      else {
        var W = this[_].read();
        if (W !== null)
          return Promise.resolve(A(W, !1));
        T = new Promise(this[l]);
      }
      return this[o] = T, T;
    }
  }, t(e, Symbol.asyncIterator, function() {
    return this;
  }), t(e, "return", function() {
    var E = this;
    return new Promise(function(F, P) {
      E[_].destroy(null, function(T) {
        if (T) {
          P(T);
          return;
        }
        F(A(void 0, !0));
      });
    });
  }), e), m), J = function(E) {
    var F, P = Object.create(C, (F = {}, t(F, _, {
      value: E,
      writable: !0
    }), t(F, a, {
      value: null,
      writable: !0
    }), t(F, s, {
      value: null,
      writable: !0
    }), t(F, c, {
      value: null,
      writable: !0
    }), t(F, u, {
      value: E._readableState.endEmitted,
      writable: !0
    }), t(F, l, {
      value: function(W, X) {
        var D = P[_].read();
        D ? (P[o] = null, P[a] = null, P[s] = null, W(A(D, !1))) : (P[a] = W, P[s] = X);
      },
      writable: !0
    }), F));
    return P[o] = null, n(E, function(T) {
      if (T && T.code !== "ERR_STREAM_PREMATURE_CLOSE") {
        var W = P[s];
        W !== null && (P[o] = null, P[a] = null, P[s] = null, W(T)), P[c] = T;
        return;
      }
      var X = P[a];
      X !== null && (P[o] = null, P[a] = null, P[s] = null, X(A(void 0, !0))), P[u] = !0;
    }), E.on("readable", O.bind(null, P)), P;
  };
  return Xr = J, Xr;
}
var Qr, ri;
function la() {
  return ri || (ri = 1, Qr = function() {
    throw new Error("Readable.from is not available in the browser");
  }), Qr;
}
var Zr, ni;
function Hi() {
  if (ni)
    return Zr;
  ni = 1, Zr = Z;
  var e;
  Z.ReadableState = D, Tt().EventEmitter;
  var t = function(p, G) {
    return p.listeners(G).length;
  }, n = ki, a = Qe().Buffer, s = be.Uint8Array || function() {
  };
  function c(h) {
    return a.from(h);
  }
  function u(h) {
    return a.isBuffer(h) || h instanceof s;
  }
  var o = Bi, l;
  o && o.debuglog ? l = o.debuglog("stream") : l = function() {
  };
  var _ = Jo(), A = Ni, j = Di, O = j.getHighWaterMark, y = $e.codes, m = y.ERR_INVALID_ARG_TYPE, C = y.ERR_STREAM_PUSH_AFTER_EOF, J = y.ERR_METHOD_NOT_IMPLEMENTED, w = y.ERR_STREAM_UNSHIFT_AFTER_END_EVENT, E, F, P;
  Ae()(Z, n);
  var T = A.errorOrDestroy, W = ["error", "close", "destroy", "pause", "resume"];
  function X(h, p, G) {
    if (typeof h.prependListener == "function")
      return h.prependListener(p, G);
    !h._events || !h._events[p] ? h.on(p, G) : Array.isArray(h._events[p]) ? h._events[p].unshift(G) : h._events[p] = [G, h._events[p]];
  }
  function D(h, p, G) {
    e = e || Xe(), h = h || {}, typeof G != "boolean" && (G = p instanceof e), this.objectMode = !!h.objectMode, G && (this.objectMode = this.objectMode || !!h.readableObjectMode), this.highWaterMark = O(this, h, "readableHighWaterMark", G), this.buffer = new _(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = h.emitClose !== !1, this.autoDestroy = !!h.autoDestroy, this.destroyed = !1, this.defaultEncoding = h.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, h.encoding && (E || (E = Jn().StringDecoder), this.decoder = new E(h.encoding), this.encoding = h.encoding);
  }
  function Z(h) {
    if (e = e || Xe(), !(this instanceof Z))
      return new Z(h);
    var p = this instanceof e;
    this._readableState = new D(h, this, p), this.readable = !0, h && (typeof h.read == "function" && (this._read = h.read), typeof h.destroy == "function" && (this._destroy = h.destroy)), n.call(this);
  }
  Object.defineProperty(Z.prototype, "destroyed", {
    enumerable: !1,
    get: function() {
      return this._readableState === void 0 ? !1 : this._readableState.destroyed;
    },
    set: function(p) {
      !this._readableState || (this._readableState.destroyed = p);
    }
  }), Z.prototype.destroy = A.destroy, Z.prototype._undestroy = A.undestroy, Z.prototype._destroy = function(h, p) {
    p(h);
  }, Z.prototype.push = function(h, p) {
    var G = this._readableState, ee;
    return G.objectMode ? ee = !0 : typeof h == "string" && (p = p || G.defaultEncoding, p !== G.encoding && (h = a.from(h, p), p = ""), ee = !0), I(this, h, p, !1, ee);
  }, Z.prototype.unshift = function(h) {
    return I(this, h, null, !0, !1);
  };
  function I(h, p, G, ee, he) {
    l("readableAddChunk", p);
    var ae = h._readableState;
    if (p === null)
      ae.reading = !1, N(h, ae);
    else {
      var ce;
      if (he || (ce = q(ae, p)), ce)
        T(h, ce);
      else if (ae.objectMode || p && p.length > 0)
        if (typeof p != "string" && !ae.objectMode && Object.getPrototypeOf(p) !== a.prototype && (p = c(p)), ee)
          ae.endEmitted ? T(h, new w()) : U(h, ae, p, !0);
        else if (ae.ended)
          T(h, new C());
        else {
          if (ae.destroyed)
            return !1;
          ae.reading = !1, ae.decoder && !G ? (p = ae.decoder.write(p), ae.objectMode || p.length !== 0 ? U(h, ae, p, !1) : Y(h, ae)) : U(h, ae, p, !1);
        }
      else
        ee || (ae.reading = !1, Y(h, ae));
    }
    return !ae.ended && (ae.length < ae.highWaterMark || ae.length === 0);
  }
  function U(h, p, G, ee) {
    p.flowing && p.length === 0 && !p.sync ? (p.awaitDrain = 0, h.emit("data", G)) : (p.length += p.objectMode ? 1 : G.length, ee ? p.buffer.unshift(G) : p.buffer.push(G), p.needReadable && V(h)), Y(h, p);
  }
  function q(h, p) {
    var G;
    return !u(p) && typeof p != "string" && p !== void 0 && !h.objectMode && (G = new m("chunk", ["string", "Buffer", "Uint8Array"], p)), G;
  }
  Z.prototype.isPaused = function() {
    return this._readableState.flowing === !1;
  }, Z.prototype.setEncoding = function(h) {
    E || (E = Jn().StringDecoder);
    var p = new E(h);
    this._readableState.decoder = p, this._readableState.encoding = this._readableState.decoder.encoding;
    for (var G = this._readableState.buffer.head, ee = ""; G !== null; )
      ee += p.write(G.data), G = G.next;
    return this._readableState.buffer.clear(), ee !== "" && this._readableState.buffer.push(ee), this._readableState.length = ee.length, this;
  };
  var b = 1073741824;
  function S(h) {
    return h >= b ? h = b : (h--, h |= h >>> 1, h |= h >>> 2, h |= h >>> 4, h |= h >>> 8, h |= h >>> 16, h++), h;
  }
  function B(h, p) {
    return h <= 0 || p.length === 0 && p.ended ? 0 : p.objectMode ? 1 : h !== h ? p.flowing && p.length ? p.buffer.head.data.length : p.length : (h > p.highWaterMark && (p.highWaterMark = S(h)), h <= p.length ? h : p.ended ? p.length : (p.needReadable = !0, 0));
  }
  Z.prototype.read = function(h) {
    l("read", h), h = parseInt(h, 10);
    var p = this._readableState, G = h;
    if (h !== 0 && (p.emittedReadable = !1), h === 0 && p.needReadable && ((p.highWaterMark !== 0 ? p.length >= p.highWaterMark : p.length > 0) || p.ended))
      return l("read: emitReadable", p.length, p.ended), p.length === 0 && p.ended ? k(this) : V(this), null;
    if (h = B(h, p), h === 0 && p.ended)
      return p.length === 0 && k(this), null;
    var ee = p.needReadable;
    l("need readable", ee), (p.length === 0 || p.length - h < p.highWaterMark) && (ee = !0, l("length less than watermark", ee)), p.ended || p.reading ? (ee = !1, l("reading or ended", ee)) : ee && (l("do read"), p.reading = !0, p.sync = !0, p.length === 0 && (p.needReadable = !0), this._read(p.highWaterMark), p.sync = !1, p.reading || (h = B(G, p)));
    var he;
    return h > 0 ? he = x(h, p) : he = null, he === null ? (p.needReadable = p.length <= p.highWaterMark, h = 0) : (p.length -= h, p.awaitDrain = 0), p.length === 0 && (p.ended || (p.needReadable = !0), G !== h && p.ended && k(this)), he !== null && this.emit("data", he), he;
  };
  function N(h, p) {
    if (l("onEofChunk"), !p.ended) {
      if (p.decoder) {
        var G = p.decoder.end();
        G && G.length && (p.buffer.push(G), p.length += p.objectMode ? 1 : G.length);
      }
      p.ended = !0, p.sync ? V(h) : (p.needReadable = !1, p.emittedReadable || (p.emittedReadable = !0, K(h)));
    }
  }
  function V(h) {
    var p = h._readableState;
    l("emitReadable", p.needReadable, p.emittedReadable), p.needReadable = !1, p.emittedReadable || (l("emitReadable", p.flowing), p.emittedReadable = !0, fe.exports.nextTick(K, h));
  }
  function K(h) {
    var p = h._readableState;
    l("emitReadable_", p.destroyed, p.length, p.ended), !p.destroyed && (p.length || p.ended) && (h.emit("readable"), p.emittedReadable = !1), p.needReadable = !p.flowing && !p.ended && p.length <= p.highWaterMark, v(h);
  }
  function Y(h, p) {
    p.readingMore || (p.readingMore = !0, fe.exports.nextTick(ne, h, p));
  }
  function ne(h, p) {
    for (; !p.reading && !p.ended && (p.length < p.highWaterMark || p.flowing && p.length === 0); ) {
      var G = p.length;
      if (l("maybeReadMore read 0"), h.read(0), G === p.length)
        break;
    }
    p.readingMore = !1;
  }
  Z.prototype._read = function(h) {
    T(this, new J("_read()"));
  }, Z.prototype.pipe = function(h, p) {
    var G = this, ee = this._readableState;
    switch (ee.pipesCount) {
      case 0:
        ee.pipes = h;
        break;
      case 1:
        ee.pipes = [ee.pipes, h];
        break;
      default:
        ee.pipes.push(h);
        break;
    }
    ee.pipesCount += 1, l("pipe count=%d opts=%j", ee.pipesCount, p);
    var he = (!p || p.end !== !1) && h !== fe.exports.stdout && h !== fe.exports.stderr, ae = he ? Ee : Te;
    ee.endEmitted ? fe.exports.nextTick(ae) : G.once("end", ae), h.on("unpipe", ce);
    function ce(f, r) {
      l("onunpipe"), f === G && r && r.hasUnpiped === !1 && (r.hasUnpiped = !0, Ie());
    }
    function Ee() {
      l("onend"), h.end();
    }
    var H = ie(G);
    h.on("drain", H);
    var Be = !1;
    function Ie() {
      l("cleanup"), h.removeListener("close", Ce), h.removeListener("finish", ve), h.removeListener("drain", H), h.removeListener("error", Oe), h.removeListener("unpipe", ce), G.removeListener("end", Ee), G.removeListener("end", Te), G.removeListener("data", me), Be = !0, ee.awaitDrain && (!h._writableState || h._writableState.needDrain) && H();
    }
    G.on("data", me);
    function me(f) {
      l("ondata");
      var r = h.write(f);
      l("dest.write", r), r === !1 && ((ee.pipesCount === 1 && ee.pipes === h || ee.pipesCount > 1 && re(ee.pipes, h) !== -1) && !Be && (l("false write response, pause", ee.awaitDrain), ee.awaitDrain++), G.pause());
    }
    function Oe(f) {
      l("onerror", f), Te(), h.removeListener("error", Oe), t(h, "error") === 0 && T(h, f);
    }
    X(h, "error", Oe);
    function Ce() {
      h.removeListener("finish", ve), Te();
    }
    h.once("close", Ce);
    function ve() {
      l("onfinish"), h.removeListener("close", Ce), Te();
    }
    h.once("finish", ve);
    function Te() {
      l("unpipe"), G.unpipe(h);
    }
    return h.emit("pipe", G), ee.flowing || (l("pipe resume"), G.resume()), h;
  };
  function ie(h) {
    return function() {
      var G = h._readableState;
      l("pipeOnDrain", G.awaitDrain), G.awaitDrain && G.awaitDrain--, G.awaitDrain === 0 && t(h, "data") && (G.flowing = !0, v(h));
    };
  }
  Z.prototype.unpipe = function(h) {
    var p = this._readableState, G = {
      hasUnpiped: !1
    };
    if (p.pipesCount === 0)
      return this;
    if (p.pipesCount === 1)
      return h && h !== p.pipes ? this : (h || (h = p.pipes), p.pipes = null, p.pipesCount = 0, p.flowing = !1, h && h.emit("unpipe", this, G), this);
    if (!h) {
      var ee = p.pipes, he = p.pipesCount;
      p.pipes = null, p.pipesCount = 0, p.flowing = !1;
      for (var ae = 0; ae < he; ae++)
        ee[ae].emit("unpipe", this, {
          hasUnpiped: !1
        });
      return this;
    }
    var ce = re(p.pipes, h);
    return ce === -1 ? this : (p.pipes.splice(ce, 1), p.pipesCount -= 1, p.pipesCount === 1 && (p.pipes = p.pipes[0]), h.emit("unpipe", this, G), this);
  }, Z.prototype.on = function(h, p) {
    var G = n.prototype.on.call(this, h, p), ee = this._readableState;
    return h === "data" ? (ee.readableListening = this.listenerCount("readable") > 0, ee.flowing !== !1 && this.resume()) : h === "readable" && !ee.endEmitted && !ee.readableListening && (ee.readableListening = ee.needReadable = !0, ee.flowing = !1, ee.emittedReadable = !1, l("on readable", ee.length, ee.reading), ee.length ? V(this) : ee.reading || fe.exports.nextTick(L, this)), G;
  }, Z.prototype.addListener = Z.prototype.on, Z.prototype.removeListener = function(h, p) {
    var G = n.prototype.removeListener.call(this, h, p);
    return h === "readable" && fe.exports.nextTick(g, this), G;
  }, Z.prototype.removeAllListeners = function(h) {
    var p = n.prototype.removeAllListeners.apply(this, arguments);
    return (h === "readable" || h === void 0) && fe.exports.nextTick(g, this), p;
  };
  function g(h) {
    var p = h._readableState;
    p.readableListening = h.listenerCount("readable") > 0, p.resumeScheduled && !p.paused ? p.flowing = !0 : h.listenerCount("data") > 0 && h.resume();
  }
  function L(h) {
    l("readable nexttick read 0"), h.read(0);
  }
  Z.prototype.resume = function() {
    var h = this._readableState;
    return h.flowing || (l("resume"), h.flowing = !h.readableListening, z(this, h)), h.paused = !1, this;
  };
  function z(h, p) {
    p.resumeScheduled || (p.resumeScheduled = !0, fe.exports.nextTick(te, h, p));
  }
  function te(h, p) {
    l("resume", p.reading), p.reading || h.read(0), p.resumeScheduled = !1, h.emit("resume"), v(h), p.flowing && !p.reading && h.read(0);
  }
  Z.prototype.pause = function() {
    return l("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (l("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this;
  };
  function v(h) {
    var p = h._readableState;
    for (l("flow", p.flowing); p.flowing && h.read() !== null; )
      ;
  }
  Z.prototype.wrap = function(h) {
    var p = this, G = this._readableState, ee = !1;
    h.on("end", function() {
      if (l("wrapped end"), G.decoder && !G.ended) {
        var ce = G.decoder.end();
        ce && ce.length && p.push(ce);
      }
      p.push(null);
    }), h.on("data", function(ce) {
      if (l("wrapped data"), G.decoder && (ce = G.decoder.write(ce)), !(G.objectMode && ce == null) && !(!G.objectMode && (!ce || !ce.length))) {
        var Ee = p.push(ce);
        Ee || (ee = !0, h.pause());
      }
    });
    for (var he in h)
      this[he] === void 0 && typeof h[he] == "function" && (this[he] = function(Ee) {
        return function() {
          return h[Ee].apply(h, arguments);
        };
      }(he));
    for (var ae = 0; ae < W.length; ae++)
      h.on(W[ae], this.emit.bind(this, W[ae]));
    return this._read = function(ce) {
      l("wrapped _read", ce), ee && (ee = !1, h.resume());
    }, this;
  }, typeof Symbol == "function" && (Z.prototype[Symbol.asyncIterator] = function() {
    return F === void 0 && (F = ca()), F(this);
  }), Object.defineProperty(Z.prototype, "readableHighWaterMark", {
    enumerable: !1,
    get: function() {
      return this._readableState.highWaterMark;
    }
  }), Object.defineProperty(Z.prototype, "readableBuffer", {
    enumerable: !1,
    get: function() {
      return this._readableState && this._readableState.buffer;
    }
  }), Object.defineProperty(Z.prototype, "readableFlowing", {
    enumerable: !1,
    get: function() {
      return this._readableState.flowing;
    },
    set: function(p) {
      this._readableState && (this._readableState.flowing = p);
    }
  }), Z._fromList = x, Object.defineProperty(Z.prototype, "readableLength", {
    enumerable: !1,
    get: function() {
      return this._readableState.length;
    }
  });
  function x(h, p) {
    if (p.length === 0)
      return null;
    var G;
    return p.objectMode ? G = p.buffer.shift() : !h || h >= p.length ? (p.decoder ? G = p.buffer.join("") : p.buffer.length === 1 ? G = p.buffer.first() : G = p.buffer.concat(p.length), p.buffer.clear()) : G = p.buffer.consume(h, p.decoder), G;
  }
  function k(h) {
    var p = h._readableState;
    l("endReadable", p.endEmitted), p.endEmitted || (p.ended = !0, fe.exports.nextTick(Q, p, h));
  }
  function Q(h, p) {
    if (l("endReadableNT", h.endEmitted, h.length), !h.endEmitted && h.length === 0 && (h.endEmitted = !0, p.readable = !1, p.emit("end"), h.autoDestroy)) {
      var G = p._writableState;
      (!G || G.autoDestroy && G.finished) && p.destroy();
    }
  }
  typeof Symbol == "function" && (Z.from = function(h, p) {
    return P === void 0 && (P = la()), P(Z, h, p);
  });
  function re(h, p) {
    for (var G = 0, ee = h.length; G < ee; G++)
      if (h[G] === p)
        return G;
    return -1;
  }
  return Zr;
}
var Wi = Fe, Pt = $e.codes, ha = Pt.ERR_METHOD_NOT_IMPLEMENTED, da = Pt.ERR_MULTIPLE_CALLBACK, pa = Pt.ERR_TRANSFORM_ALREADY_TRANSFORMING, ya = Pt.ERR_TRANSFORM_WITH_LENGTH_0, Ft = Xe();
Ae()(Fe, Ft);
function ga(e, t) {
  var n = this._transformState;
  n.transforming = !1;
  var a = n.writecb;
  if (a === null)
    return this.emit("error", new da());
  n.writechunk = null, n.writecb = null, t != null && this.push(t), a(e);
  var s = this._readableState;
  s.reading = !1, (s.needReadable || s.length < s.highWaterMark) && this._read(s.highWaterMark);
}
function Fe(e) {
  if (!(this instanceof Fe))
    return new Fe(e);
  Ft.call(this, e), this._transformState = {
    afterTransform: ga.bind(this),
    needTransform: !1,
    transforming: !1,
    writecb: null,
    writechunk: null,
    writeencoding: null
  }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && (typeof e.transform == "function" && (this._transform = e.transform), typeof e.flush == "function" && (this._flush = e.flush)), this.on("prefinish", _a);
}
function _a() {
  var e = this;
  typeof this._flush == "function" && !this._readableState.destroyed ? this._flush(function(t, n) {
    ii(e, t, n);
  }) : ii(this, null, null);
}
Fe.prototype.push = function(e, t) {
  return this._transformState.needTransform = !1, Ft.prototype.push.call(this, e, t);
};
Fe.prototype._transform = function(e, t, n) {
  n(new ha("_transform()"));
};
Fe.prototype._write = function(e, t, n) {
  var a = this._transformState;
  if (a.writecb = n, a.writechunk = e, a.writeencoding = t, !a.transforming) {
    var s = this._readableState;
    (a.needTransform || s.needReadable || s.length < s.highWaterMark) && this._read(s.highWaterMark);
  }
};
Fe.prototype._read = function(e) {
  var t = this._transformState;
  t.writechunk !== null && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0;
};
Fe.prototype._destroy = function(e, t) {
  Ft.prototype._destroy.call(this, e, function(n) {
    t(n);
  });
};
function ii(e, t, n) {
  if (t)
    return e.emit("error", t);
  if (n != null && e.push(n), e._writableState.length)
    throw new ya();
  if (e._transformState.transforming)
    throw new pa();
  return e.push(null);
}
var ba = nt, zi = Wi;
Ae()(nt, zi);
function nt(e) {
  if (!(this instanceof nt))
    return new nt(e);
  zi.call(this, e);
}
nt.prototype._transform = function(e, t, n) {
  n(null, e);
};
var en;
function ma(e) {
  var t = !1;
  return function() {
    t || (t = !0, e.apply(void 0, arguments));
  };
}
var Gi = $e.codes, wa = Gi.ERR_MISSING_ARGS, va = Gi.ERR_STREAM_DESTROYED;
function oi(e) {
  if (e)
    throw e;
}
function Ea(e) {
  return e.setHeader && typeof e.abort == "function";
}
function Sa(e, t, n, a) {
  a = ma(a);
  var s = !1;
  e.on("close", function() {
    s = !0;
  }), en === void 0 && (en = _n), en(e, {
    readable: t,
    writable: n
  }, function(u) {
    if (u)
      return a(u);
    s = !0, a();
  });
  var c = !1;
  return function(u) {
    if (!s && !c) {
      if (c = !0, Ea(e))
        return e.abort();
      if (typeof e.destroy == "function")
        return e.destroy();
      a(u || new va("pipe"));
    }
  };
}
function ai(e) {
  e();
}
function xa(e, t) {
  return e.pipe(t);
}
function Aa(e) {
  return !e.length || typeof e[e.length - 1] != "function" ? oi : e.pop();
}
function Ra() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var a = Aa(t);
  if (Array.isArray(t[0]) && (t = t[0]), t.length < 2)
    throw new wa("streams");
  var s, c = t.map(function(u, o) {
    var l = o < t.length - 1, _ = o > 0;
    return Sa(u, l, _, function(A) {
      s || (s = A), A && c.forEach(ai), !l && (c.forEach(ai), a(s));
    });
  });
  return t.reduce(xa);
}
var Ba = Ra;
(function(e, t) {
  t = e.exports = Hi(), t.Stream = t, t.Readable = t, t.Writable = $i(), t.Duplex = Xe(), t.Transform = Wi, t.PassThrough = ba, t.finished = _n, t.pipeline = Ba;
})(At, At.exports);
const { Transform: Ia } = At.exports;
var Oa = (e) => class Vi extends Ia {
  constructor(n, a, s, c, u) {
    super(u), this._rate = n, this._capacity = a, this._delimitedSuffix = s, this._hashBitLength = c, this._options = u, this._state = new e(), this._state.initialize(n, a), this._finalized = !1;
  }
  _transform(n, a, s) {
    let c = null;
    try {
      this.update(n, a);
    } catch (u) {
      c = u;
    }
    s(c);
  }
  _flush(n) {
    let a = null;
    try {
      this.push(this.digest());
    } catch (s) {
      a = s;
    }
    n(a);
  }
  update(n, a) {
    if (!Ne.Buffer.isBuffer(n) && typeof n != "string")
      throw new TypeError("Data must be a string or a buffer");
    if (this._finalized)
      throw new Error("Digest already called");
    return Ne.Buffer.isBuffer(n) || (n = Ne.Buffer.from(n, a)), this._state.absorb(n), this;
  }
  digest(n) {
    if (this._finalized)
      throw new Error("Digest already called");
    this._finalized = !0, this._delimitedSuffix && this._state.absorbLastFewBits(this._delimitedSuffix);
    let a = this._state.squeeze(this._hashBitLength / 8);
    return n !== void 0 && (a = a.toString(n)), this._resetState(), a;
  }
  _resetState() {
    return this._state.initialize(this._rate, this._capacity), this;
  }
  _clone() {
    const n = new Vi(this._rate, this._capacity, this._delimitedSuffix, this._hashBitLength, this._options);
    return this._state.copy(n._state), n._finalized = this._finalized, n;
  }
};
const { Transform: Ta } = At.exports;
var Pa = (e) => class Ji extends Ta {
  constructor(n, a, s, c) {
    super(c), this._rate = n, this._capacity = a, this._delimitedSuffix = s, this._options = c, this._state = new e(), this._state.initialize(n, a), this._finalized = !1;
  }
  _transform(n, a, s) {
    let c = null;
    try {
      this.update(n, a);
    } catch (u) {
      c = u;
    }
    s(c);
  }
  _flush() {
  }
  _read(n) {
    this.push(this.squeeze(n));
  }
  update(n, a) {
    if (!Ne.Buffer.isBuffer(n) && typeof n != "string")
      throw new TypeError("Data must be a string or a buffer");
    if (this._finalized)
      throw new Error("Squeeze already called");
    return Ne.Buffer.isBuffer(n) || (n = Ne.Buffer.from(n, a)), this._state.absorb(n), this;
  }
  squeeze(n, a) {
    this._finalized || (this._finalized = !0, this._state.absorbLastFewBits(this._delimitedSuffix));
    let s = this._state.squeeze(n);
    return a !== void 0 && (s = s.toString(a)), s;
  }
  _resetState() {
    return this._state.initialize(this._rate, this._capacity), this;
  }
  _clone() {
    const n = new Ji(this._rate, this._capacity, this._delimitedSuffix, this._options);
    return this._state.copy(n._state), n._finalized = this._finalized, n;
  }
};
const Fa = Oa, Ca = Pa;
var Ma = function(e) {
  const t = Fa(e), n = Ca(e);
  return function(a, s) {
    switch (typeof a == "string" ? a.toLowerCase() : a) {
      case "keccak224":
        return new t(1152, 448, null, 224, s);
      case "keccak256":
        return new t(1088, 512, null, 256, s);
      case "keccak384":
        return new t(832, 768, null, 384, s);
      case "keccak512":
        return new t(576, 1024, null, 512, s);
      case "sha3-224":
        return new t(1152, 448, 6, 224, s);
      case "sha3-256":
        return new t(1088, 512, 6, 256, s);
      case "sha3-384":
        return new t(832, 768, 6, 384, s);
      case "sha3-512":
        return new t(576, 1024, 6, 512, s);
      case "shake128":
        return new n(1344, 256, 31, s);
      case "shake256":
        return new n(1088, 512, 31, s);
      default:
        throw new Error("Invald algorithm: " + a);
    }
  };
}, Ki = {};
const si = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
Ki.p1600 = function(e) {
  for (let t = 0; t < 24; ++t) {
    const n = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], a = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], s = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], c = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], u = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], o = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], l = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], _ = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], A = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48], j = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49];
    let O = A ^ (s << 1 | c >>> 31), y = j ^ (c << 1 | s >>> 31);
    const m = e[0] ^ O, C = e[1] ^ y, J = e[10] ^ O, w = e[11] ^ y, E = e[20] ^ O, F = e[21] ^ y, P = e[30] ^ O, T = e[31] ^ y, W = e[40] ^ O, X = e[41] ^ y;
    O = n ^ (u << 1 | o >>> 31), y = a ^ (o << 1 | u >>> 31);
    const D = e[2] ^ O, Z = e[3] ^ y, I = e[12] ^ O, U = e[13] ^ y, q = e[22] ^ O, b = e[23] ^ y, S = e[32] ^ O, B = e[33] ^ y, N = e[42] ^ O, V = e[43] ^ y;
    O = s ^ (l << 1 | _ >>> 31), y = c ^ (_ << 1 | l >>> 31);
    const K = e[4] ^ O, Y = e[5] ^ y, ne = e[14] ^ O, ie = e[15] ^ y, g = e[24] ^ O, L = e[25] ^ y, z = e[34] ^ O, te = e[35] ^ y, v = e[44] ^ O, x = e[45] ^ y;
    O = u ^ (A << 1 | j >>> 31), y = o ^ (j << 1 | A >>> 31);
    const k = e[6] ^ O, Q = e[7] ^ y, re = e[16] ^ O, h = e[17] ^ y, p = e[26] ^ O, G = e[27] ^ y, ee = e[36] ^ O, he = e[37] ^ y, ae = e[46] ^ O, ce = e[47] ^ y;
    O = l ^ (n << 1 | a >>> 31), y = _ ^ (a << 1 | n >>> 31);
    const Ee = e[8] ^ O, H = e[9] ^ y, Be = e[18] ^ O, Ie = e[19] ^ y, me = e[28] ^ O, Oe = e[29] ^ y, Ce = e[38] ^ O, ve = e[39] ^ y, Te = e[48] ^ O, f = e[49] ^ y, r = m, i = C, d = w << 4 | J >>> 28, R = J << 4 | w >>> 28, M = E << 3 | F >>> 29, $ = F << 3 | E >>> 29, se = T << 9 | P >>> 23, ye = P << 9 | T >>> 23, pe = W << 18 | X >>> 14, ge = X << 18 | W >>> 14, de = D << 1 | Z >>> 31, Wt = Z << 1 | D >>> 31, zt = U << 12 | I >>> 20, Gt = I << 12 | U >>> 20, Vt = q << 10 | b >>> 22, Jt = b << 10 | q >>> 22, Kt = B << 13 | S >>> 19, Yt = S << 13 | B >>> 19, Xt = N << 2 | V >>> 30, Qt = V << 2 | N >>> 30, Zt = Y << 30 | K >>> 2, er = K << 30 | Y >>> 2, tr = ne << 6 | ie >>> 26, rr = ie << 6 | ne >>> 26, nr = L << 11 | g >>> 21, ir = g << 11 | L >>> 21, or = z << 15 | te >>> 17, ar = te << 15 | z >>> 17, sr = x << 29 | v >>> 3, ur = v << 29 | x >>> 3, fr = k << 28 | Q >>> 4, cr = Q << 28 | k >>> 4, lr = h << 23 | re >>> 9, hr = re << 23 | h >>> 9, dr = p << 25 | G >>> 7, pr = G << 25 | p >>> 7, yr = ee << 21 | he >>> 11, gr = he << 21 | ee >>> 11, _r = ce << 24 | ae >>> 8, br = ae << 24 | ce >>> 8, mr = Ee << 27 | H >>> 5, wr = H << 27 | Ee >>> 5, vr = Be << 20 | Ie >>> 12, Er = Ie << 20 | Be >>> 12, Sr = Oe << 7 | me >>> 25, xr = me << 7 | Oe >>> 25, Ar = Ce << 8 | ve >>> 24, Rr = ve << 8 | Ce >>> 24, Br = Te << 14 | f >>> 18, Ir = f << 14 | Te >>> 18;
    e[0] = r ^ ~zt & nr, e[1] = i ^ ~Gt & ir, e[10] = fr ^ ~vr & M, e[11] = cr ^ ~Er & $, e[20] = de ^ ~tr & dr, e[21] = Wt ^ ~rr & pr, e[30] = mr ^ ~d & Vt, e[31] = wr ^ ~R & Jt, e[40] = Zt ^ ~lr & Sr, e[41] = er ^ ~hr & xr, e[2] = zt ^ ~nr & yr, e[3] = Gt ^ ~ir & gr, e[12] = vr ^ ~M & Kt, e[13] = Er ^ ~$ & Yt, e[22] = tr ^ ~dr & Ar, e[23] = rr ^ ~pr & Rr, e[32] = d ^ ~Vt & or, e[33] = R ^ ~Jt & ar, e[42] = lr ^ ~Sr & se, e[43] = hr ^ ~xr & ye, e[4] = nr ^ ~yr & Br, e[5] = ir ^ ~gr & Ir, e[14] = M ^ ~Kt & sr, e[15] = $ ^ ~Yt & ur, e[24] = dr ^ ~Ar & pe, e[25] = pr ^ ~Rr & ge, e[34] = Vt ^ ~or & _r, e[35] = Jt ^ ~ar & br, e[44] = Sr ^ ~se & Xt, e[45] = xr ^ ~ye & Qt, e[6] = yr ^ ~Br & r, e[7] = gr ^ ~Ir & i, e[16] = Kt ^ ~sr & fr, e[17] = Yt ^ ~ur & cr, e[26] = Ar ^ ~pe & de, e[27] = Rr ^ ~ge & Wt, e[36] = or ^ ~_r & mr, e[37] = ar ^ ~br & wr, e[46] = se ^ ~Xt & Zt, e[47] = ye ^ ~Qt & er, e[8] = Br ^ ~r & zt, e[9] = Ir ^ ~i & Gt, e[18] = sr ^ ~fr & vr, e[19] = ur ^ ~cr & Er, e[28] = pe ^ ~de & tr, e[29] = ge ^ ~Wt & rr, e[38] = _r ^ ~mr & d, e[39] = br ^ ~wr & R, e[48] = Xt ^ ~Zt & lr, e[49] = Qt ^ ~er & hr, e[0] ^= si[t * 2], e[1] ^= si[t * 2 + 1];
  }
};
const Rt = Ki;
function Ze() {
  this.state = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ], this.blockSize = null, this.count = 0, this.squeezing = !1;
}
Ze.prototype.initialize = function(e, t) {
  for (let n = 0; n < 50; ++n)
    this.state[n] = 0;
  this.blockSize = e / 8, this.count = 0, this.squeezing = !1;
};
Ze.prototype.absorb = function(e) {
  for (let t = 0; t < e.length; ++t)
    this.state[~~(this.count / 4)] ^= e[t] << 8 * (this.count % 4), this.count += 1, this.count === this.blockSize && (Rt.p1600(this.state), this.count = 0);
};
Ze.prototype.absorbLastFewBits = function(e) {
  this.state[~~(this.count / 4)] ^= e << 8 * (this.count % 4), (e & 128) !== 0 && this.count === this.blockSize - 1 && Rt.p1600(this.state), this.state[~~((this.blockSize - 1) / 4)] ^= 128 << 8 * ((this.blockSize - 1) % 4), Rt.p1600(this.state), this.count = 0, this.squeezing = !0;
};
Ze.prototype.squeeze = function(e) {
  this.squeezing || this.absorbLastFewBits(1);
  const t = Ne.Buffer.alloc(e);
  for (let n = 0; n < e; ++n)
    t[n] = this.state[~~(this.count / 4)] >>> 8 * (this.count % 4) & 255, this.count += 1, this.count === this.blockSize && (Rt.p1600(this.state), this.count = 0);
  return t;
};
Ze.prototype.copy = function(e) {
  for (let t = 0; t < 50; ++t)
    e.state[t] = this.state[t];
  e.blockSize = this.blockSize, e.count = this.count, e.squeezing = this.squeezing;
};
var La = Ze, sf = Ma(La), bt = { exports: {} }, ui;
function qe() {
  return ui || (ui = 1, function(e, t) {
    var n = Qe(), a = n.Buffer;
    function s(u, o) {
      for (var l in u)
        o[l] = u[l];
    }
    a.from && a.alloc && a.allocUnsafe && a.allocUnsafeSlow ? e.exports = n : (s(n, t), t.Buffer = c);
    function c(u, o, l) {
      return a(u, o, l);
    }
    s(a, c), c.from = function(u, o, l) {
      if (typeof u == "number")
        throw new TypeError("Argument must not be a number");
      return a(u, o, l);
    }, c.alloc = function(u, o, l) {
      if (typeof u != "number")
        throw new TypeError("Argument must be a number");
      var _ = a(u);
      return o !== void 0 ? typeof l == "string" ? _.fill(o, l) : _.fill(o) : _.fill(0), _;
    }, c.allocUnsafe = function(u) {
      if (typeof u != "number")
        throw new TypeError("Argument must be a number");
      return a(u);
    }, c.allocUnsafeSlow = function(u) {
      if (typeof u != "number")
        throw new TypeError("Argument must be a number");
      return n.SlowBuffer(u);
    };
  }(bt, bt.exports)), bt.exports;
}
var ja = { exports: {} }, Yi = qe().Buffer;
function Ct(e, t) {
  this._block = Yi.alloc(e), this._finalSize = t, this._blockSize = e, this._len = 0;
}
Ct.prototype.update = function(e, t) {
  typeof e == "string" && (t = t || "utf8", e = Yi.from(e, t));
  for (var n = this._block, a = this._blockSize, s = e.length, c = this._len, u = 0; u < s; ) {
    for (var o = c % a, l = Math.min(s - u, a - o), _ = 0; _ < l; _++)
      n[o + _] = e[u + _];
    c += l, u += l, c % a === 0 && this._update(n);
  }
  return this._len += s, this;
};
Ct.prototype.digest = function(e) {
  var t = this._len % this._blockSize;
  this._block[t] = 128, this._block.fill(0, t + 1), t >= this._finalSize && (this._update(this._block), this._block.fill(0));
  var n = this._len * 8;
  if (n <= 4294967295)
    this._block.writeUInt32BE(n, this._blockSize - 4);
  else {
    var a = (n & 4294967295) >>> 0, s = (n - a) / 4294967296;
    this._block.writeUInt32BE(s, this._blockSize - 8), this._block.writeUInt32BE(a, this._blockSize - 4);
  }
  this._update(this._block);
  var c = this._hash();
  return e ? c.toString(e) : c;
};
Ct.prototype._update = function() {
  throw new Error("_update must be implemented by subclass");
};
var et = Ct, ka = Ae(), Xi = et, Na = qe().Buffer, Ua = [
  1518500249,
  1859775393,
  -1894007588,
  -899497514
], Da = new Array(80);
function at() {
  this.init(), this._w = Da, Xi.call(this, 64, 56);
}
ka(at, Xi);
at.prototype.init = function() {
  return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
};
function $a(e) {
  return e << 5 | e >>> 27;
}
function qa(e) {
  return e << 30 | e >>> 2;
}
function Ha(e, t, n, a) {
  return e === 0 ? t & n | ~t & a : e === 2 ? t & n | t & a | n & a : t ^ n ^ a;
}
at.prototype._update = function(e) {
  for (var t = this._w, n = this._a | 0, a = this._b | 0, s = this._c | 0, c = this._d | 0, u = this._e | 0, o = 0; o < 16; ++o)
    t[o] = e.readInt32BE(o * 4);
  for (; o < 80; ++o)
    t[o] = t[o - 3] ^ t[o - 8] ^ t[o - 14] ^ t[o - 16];
  for (var l = 0; l < 80; ++l) {
    var _ = ~~(l / 20), A = $a(n) + Ha(_, a, s, c) + u + t[l] + Ua[_] | 0;
    u = c, c = s, s = qa(a), a = n, n = A;
  }
  this._a = n + this._a | 0, this._b = a + this._b | 0, this._c = s + this._c | 0, this._d = c + this._d | 0, this._e = u + this._e | 0;
};
at.prototype._hash = function() {
  var e = Na.allocUnsafe(20);
  return e.writeInt32BE(this._a | 0, 0), e.writeInt32BE(this._b | 0, 4), e.writeInt32BE(this._c | 0, 8), e.writeInt32BE(this._d | 0, 12), e.writeInt32BE(this._e | 0, 16), e;
};
var Wa = at, za = Ae(), Qi = et, Ga = qe().Buffer, Va = [
  1518500249,
  1859775393,
  -1894007588,
  -899497514
], Ja = new Array(80);
function st() {
  this.init(), this._w = Ja, Qi.call(this, 64, 56);
}
za(st, Qi);
st.prototype.init = function() {
  return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
};
function Ka(e) {
  return e << 1 | e >>> 31;
}
function Ya(e) {
  return e << 5 | e >>> 27;
}
function Xa(e) {
  return e << 30 | e >>> 2;
}
function Qa(e, t, n, a) {
  return e === 0 ? t & n | ~t & a : e === 2 ? t & n | t & a | n & a : t ^ n ^ a;
}
st.prototype._update = function(e) {
  for (var t = this._w, n = this._a | 0, a = this._b | 0, s = this._c | 0, c = this._d | 0, u = this._e | 0, o = 0; o < 16; ++o)
    t[o] = e.readInt32BE(o * 4);
  for (; o < 80; ++o)
    t[o] = Ka(t[o - 3] ^ t[o - 8] ^ t[o - 14] ^ t[o - 16]);
  for (var l = 0; l < 80; ++l) {
    var _ = ~~(l / 20), A = Ya(n) + Qa(_, a, s, c) + u + t[l] + Va[_] | 0;
    u = c, c = s, s = Xa(a), a = n, n = A;
  }
  this._a = n + this._a | 0, this._b = a + this._b | 0, this._c = s + this._c | 0, this._d = c + this._d | 0, this._e = u + this._e | 0;
};
st.prototype._hash = function() {
  var e = Ga.allocUnsafe(20);
  return e.writeInt32BE(this._a | 0, 0), e.writeInt32BE(this._b | 0, 4), e.writeInt32BE(this._c | 0, 8), e.writeInt32BE(this._d | 0, 12), e.writeInt32BE(this._e | 0, 16), e;
};
var Za = st, es = Ae(), Zi = et, ts = qe().Buffer, rs = [
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
], ns = new Array(64);
function ut() {
  this.init(), this._w = ns, Zi.call(this, 64, 56);
}
es(ut, Zi);
ut.prototype.init = function() {
  return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this;
};
function is(e, t, n) {
  return n ^ e & (t ^ n);
}
function os(e, t, n) {
  return e & t | n & (e | t);
}
function as(e) {
  return (e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10);
}
function ss(e) {
  return (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
}
function us(e) {
  return (e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3;
}
function fs(e) {
  return (e >>> 17 | e << 15) ^ (e >>> 19 | e << 13) ^ e >>> 10;
}
ut.prototype._update = function(e) {
  for (var t = this._w, n = this._a | 0, a = this._b | 0, s = this._c | 0, c = this._d | 0, u = this._e | 0, o = this._f | 0, l = this._g | 0, _ = this._h | 0, A = 0; A < 16; ++A)
    t[A] = e.readInt32BE(A * 4);
  for (; A < 64; ++A)
    t[A] = fs(t[A - 2]) + t[A - 7] + us(t[A - 15]) + t[A - 16] | 0;
  for (var j = 0; j < 64; ++j) {
    var O = _ + ss(u) + is(u, o, l) + rs[j] + t[j] | 0, y = as(n) + os(n, a, s) | 0;
    _ = l, l = o, o = u, u = c + O | 0, c = s, s = a, a = n, n = O + y | 0;
  }
  this._a = n + this._a | 0, this._b = a + this._b | 0, this._c = s + this._c | 0, this._d = c + this._d | 0, this._e = u + this._e | 0, this._f = o + this._f | 0, this._g = l + this._g | 0, this._h = _ + this._h | 0;
};
ut.prototype._hash = function() {
  var e = ts.allocUnsafe(32);
  return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e.writeInt32BE(this._h, 28), e;
};
var eo = ut, cs = Ae(), ls = eo, hs = et, ds = qe().Buffer, ps = new Array(64);
function Mt() {
  this.init(), this._w = ps, hs.call(this, 64, 56);
}
cs(Mt, ls);
Mt.prototype.init = function() {
  return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this;
};
Mt.prototype._hash = function() {
  var e = ds.allocUnsafe(28);
  return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e;
};
var ys = Mt, gs = Ae(), to = et, _s = qe().Buffer, fi = [
  1116352408,
  3609767458,
  1899447441,
  602891725,
  3049323471,
  3964484399,
  3921009573,
  2173295548,
  961987163,
  4081628472,
  1508970993,
  3053834265,
  2453635748,
  2937671579,
  2870763221,
  3664609560,
  3624381080,
  2734883394,
  310598401,
  1164996542,
  607225278,
  1323610764,
  1426881987,
  3590304994,
  1925078388,
  4068182383,
  2162078206,
  991336113,
  2614888103,
  633803317,
  3248222580,
  3479774868,
  3835390401,
  2666613458,
  4022224774,
  944711139,
  264347078,
  2341262773,
  604807628,
  2007800933,
  770255983,
  1495990901,
  1249150122,
  1856431235,
  1555081692,
  3175218132,
  1996064986,
  2198950837,
  2554220882,
  3999719339,
  2821834349,
  766784016,
  2952996808,
  2566594879,
  3210313671,
  3203337956,
  3336571891,
  1034457026,
  3584528711,
  2466948901,
  113926993,
  3758326383,
  338241895,
  168717936,
  666307205,
  1188179964,
  773529912,
  1546045734,
  1294757372,
  1522805485,
  1396182291,
  2643833823,
  1695183700,
  2343527390,
  1986661051,
  1014477480,
  2177026350,
  1206759142,
  2456956037,
  344077627,
  2730485921,
  1290863460,
  2820302411,
  3158454273,
  3259730800,
  3505952657,
  3345764771,
  106217008,
  3516065817,
  3606008344,
  3600352804,
  1432725776,
  4094571909,
  1467031594,
  275423344,
  851169720,
  430227734,
  3100823752,
  506948616,
  1363258195,
  659060556,
  3750685593,
  883997877,
  3785050280,
  958139571,
  3318307427,
  1322822218,
  3812723403,
  1537002063,
  2003034995,
  1747873779,
  3602036899,
  1955562222,
  1575990012,
  2024104815,
  1125592928,
  2227730452,
  2716904306,
  2361852424,
  442776044,
  2428436474,
  593698344,
  2756734187,
  3733110249,
  3204031479,
  2999351573,
  3329325298,
  3815920427,
  3391569614,
  3928383900,
  3515267271,
  566280711,
  3940187606,
  3454069534,
  4118630271,
  4000239992,
  116418474,
  1914138554,
  174292421,
  2731055270,
  289380356,
  3203993006,
  460393269,
  320620315,
  685471733,
  587496836,
  852142971,
  1086792851,
  1017036298,
  365543100,
  1126000580,
  2618297676,
  1288033470,
  3409855158,
  1501505948,
  4234509866,
  1607167915,
  987167468,
  1816402316,
  1246189591
], bs = new Array(160);
function ft() {
  this.init(), this._w = bs, to.call(this, 128, 112);
}
gs(ft, to);
ft.prototype.init = function() {
  return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this;
};
function ci(e, t, n) {
  return n ^ e & (t ^ n);
}
function li(e, t, n) {
  return e & t | n & (e | t);
}
function hi(e, t) {
  return (e >>> 28 | t << 4) ^ (t >>> 2 | e << 30) ^ (t >>> 7 | e << 25);
}
function di(e, t) {
  return (e >>> 14 | t << 18) ^ (e >>> 18 | t << 14) ^ (t >>> 9 | e << 23);
}
function ms(e, t) {
  return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ e >>> 7;
}
function ws(e, t) {
  return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ (e >>> 7 | t << 25);
}
function vs(e, t) {
  return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ e >>> 6;
}
function Es(e, t) {
  return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ (e >>> 6 | t << 26);
}
function _e(e, t) {
  return e >>> 0 < t >>> 0 ? 1 : 0;
}
ft.prototype._update = function(e) {
  for (var t = this._w, n = this._ah | 0, a = this._bh | 0, s = this._ch | 0, c = this._dh | 0, u = this._eh | 0, o = this._fh | 0, l = this._gh | 0, _ = this._hh | 0, A = this._al | 0, j = this._bl | 0, O = this._cl | 0, y = this._dl | 0, m = this._el | 0, C = this._fl | 0, J = this._gl | 0, w = this._hl | 0, E = 0; E < 32; E += 2)
    t[E] = e.readInt32BE(E * 4), t[E + 1] = e.readInt32BE(E * 4 + 4);
  for (; E < 160; E += 2) {
    var F = t[E - 30], P = t[E - 15 * 2 + 1], T = ms(F, P), W = ws(P, F);
    F = t[E - 2 * 2], P = t[E - 2 * 2 + 1];
    var X = vs(F, P), D = Es(P, F), Z = t[E - 7 * 2], I = t[E - 7 * 2 + 1], U = t[E - 16 * 2], q = t[E - 16 * 2 + 1], b = W + I | 0, S = T + Z + _e(b, W) | 0;
    b = b + D | 0, S = S + X + _e(b, D) | 0, b = b + q | 0, S = S + U + _e(b, q) | 0, t[E] = S, t[E + 1] = b;
  }
  for (var B = 0; B < 160; B += 2) {
    S = t[B], b = t[B + 1];
    var N = li(n, a, s), V = li(A, j, O), K = hi(n, A), Y = hi(A, n), ne = di(u, m), ie = di(m, u), g = fi[B], L = fi[B + 1], z = ci(u, o, l), te = ci(m, C, J), v = w + ie | 0, x = _ + ne + _e(v, w) | 0;
    v = v + te | 0, x = x + z + _e(v, te) | 0, v = v + L | 0, x = x + g + _e(v, L) | 0, v = v + b | 0, x = x + S + _e(v, b) | 0;
    var k = Y + V | 0, Q = K + N + _e(k, Y) | 0;
    _ = l, w = J, l = o, J = C, o = u, C = m, m = y + v | 0, u = c + x + _e(m, y) | 0, c = s, y = O, s = a, O = j, a = n, j = A, A = v + k | 0, n = x + Q + _e(A, v) | 0;
  }
  this._al = this._al + A | 0, this._bl = this._bl + j | 0, this._cl = this._cl + O | 0, this._dl = this._dl + y | 0, this._el = this._el + m | 0, this._fl = this._fl + C | 0, this._gl = this._gl + J | 0, this._hl = this._hl + w | 0, this._ah = this._ah + n + _e(this._al, A) | 0, this._bh = this._bh + a + _e(this._bl, j) | 0, this._ch = this._ch + s + _e(this._cl, O) | 0, this._dh = this._dh + c + _e(this._dl, y) | 0, this._eh = this._eh + u + _e(this._el, m) | 0, this._fh = this._fh + o + _e(this._fl, C) | 0, this._gh = this._gh + l + _e(this._gl, J) | 0, this._hh = this._hh + _ + _e(this._hl, w) | 0;
};
ft.prototype._hash = function() {
  var e = _s.allocUnsafe(64);
  function t(n, a, s) {
    e.writeInt32BE(n, s), e.writeInt32BE(a, s + 4);
  }
  return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), t(this._gh, this._gl, 48), t(this._hh, this._hl, 56), e;
};
var ro = ft, Ss = Ae(), xs = ro, As = et, Rs = qe().Buffer, Bs = new Array(160);
function Lt() {
  this.init(), this._w = Bs, As.call(this, 128, 112);
}
Ss(Lt, xs);
Lt.prototype.init = function() {
  return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this;
};
Lt.prototype._hash = function() {
  var e = Rs.allocUnsafe(48);
  function t(n, a, s) {
    e.writeInt32BE(n, s), e.writeInt32BE(a, s + 4);
  }
  return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), e;
};
var Is = Lt, He = ja.exports = function(t) {
  t = t.toLowerCase();
  var n = He[t];
  if (!n)
    throw new Error(t + " is not supported (we accept pull requests)");
  return new n();
};
He.sha = Wa;
He.sha1 = Za;
He.sha224 = ys;
He.sha256 = eo;
He.sha384 = Is;
He.sha512 = ro;
var tn, pi;
function no() {
  if (pi)
    return tn;
  pi = 1;
  const e = (t, n) => function() {
    const a = n.promiseModule, s = new Array(arguments.length);
    for (let c = 0; c < arguments.length; c++)
      s[c] = arguments[c];
    return new a((c, u) => {
      n.errorFirst ? s.push(function(o, l) {
        if (n.multiArgs) {
          const _ = new Array(arguments.length - 1);
          for (let A = 1; A < arguments.length; A++)
            _[A - 1] = arguments[A];
          o ? (_.unshift(o), u(_)) : c(_);
        } else
          o ? u(o) : c(l);
      }) : s.push(function(o) {
        if (n.multiArgs) {
          const l = new Array(arguments.length - 1);
          for (let _ = 0; _ < arguments.length; _++)
            l[_] = arguments[_];
          c(l);
        } else
          c(o);
      }), t.apply(this, s);
    });
  };
  return tn = (t, n) => {
    n = Object.assign({
      exclude: [/.+(Sync|Stream)$/],
      errorFirst: !0,
      promiseModule: Promise
    }, n);
    const a = (c) => {
      const u = (o) => typeof o == "string" ? c === o : o.test(c);
      return n.include ? n.include.some(u) : !n.exclude.some(u);
    };
    let s;
    typeof t == "function" ? s = function() {
      return n.excludeMain ? t.apply(this, arguments) : e(t, n).apply(this, arguments);
    } : s = Object.create(Object.getPrototypeOf(t));
    for (const c in t) {
      const u = t[c];
      s[c] = typeof u == "function" && a(c) ? e(u, n) : u;
    }
    return s;
  }, tn;
}
var rn, yi;
function Os() {
  if (yi)
    return rn;
  yi = 1, rn = t;
  var e = Object.prototype.hasOwnProperty;
  function t() {
    for (var n = {}, a = 0; a < arguments.length; a++) {
      var s = arguments[a];
      for (var c in s)
        e.call(s, c) && (n[c] = s[c]);
    }
    return n;
  }
  return rn;
}
var Ts = Ps;
function Ps(e) {
  e = e || {};
  var t = e.max || Number.MAX_SAFE_INTEGER, n = typeof e.start < "u" ? e.start : Math.floor(Math.random() * t);
  return function() {
    return n = n % t, n++;
  };
}
const Fs = Os(), Cs = Ts();
var Ms = oe;
function oe(e) {
  const t = this;
  t.currentProvider = e;
}
oe.prototype.getBalance = ct(2, "eth_getBalance");
oe.prototype.getCode = ct(2, "eth_getCode");
oe.prototype.getTransactionCount = ct(2, "eth_getTransactionCount");
oe.prototype.getStorageAt = ct(3, "eth_getStorageAt");
oe.prototype.call = ct(2, "eth_call");
oe.prototype.protocolVersion = ue("eth_protocolVersion");
oe.prototype.syncing = ue("eth_syncing");
oe.prototype.coinbase = ue("eth_coinbase");
oe.prototype.mining = ue("eth_mining");
oe.prototype.hashrate = ue("eth_hashrate");
oe.prototype.gasPrice = ue("eth_gasPrice");
oe.prototype.accounts = ue("eth_accounts");
oe.prototype.blockNumber = ue("eth_blockNumber");
oe.prototype.getBlockTransactionCountByHash = ue("eth_getBlockTransactionCountByHash");
oe.prototype.getBlockTransactionCountByNumber = ue("eth_getBlockTransactionCountByNumber");
oe.prototype.getUncleCountByBlockHash = ue("eth_getUncleCountByBlockHash");
oe.prototype.getUncleCountByBlockNumber = ue("eth_getUncleCountByBlockNumber");
oe.prototype.sign = ue("eth_sign");
oe.prototype.sendTransaction = ue("eth_sendTransaction");
oe.prototype.sendRawTransaction = ue("eth_sendRawTransaction");
oe.prototype.estimateGas = ue("eth_estimateGas");
oe.prototype.getBlockByHash = ue("eth_getBlockByHash");
oe.prototype.getBlockByNumber = ue("eth_getBlockByNumber");
oe.prototype.getTransactionByHash = ue("eth_getTransactionByHash");
oe.prototype.getTransactionByBlockHashAndIndex = ue("eth_getTransactionByBlockHashAndIndex");
oe.prototype.getTransactionByBlockNumberAndIndex = ue("eth_getTransactionByBlockNumberAndIndex");
oe.prototype.getTransactionReceipt = ue("eth_getTransactionReceipt");
oe.prototype.getUncleByBlockHashAndIndex = ue("eth_getUncleByBlockHashAndIndex");
oe.prototype.getUncleByBlockNumberAndIndex = ue("eth_getUncleByBlockNumberAndIndex");
oe.prototype.getCompilers = ue("eth_getCompilers");
oe.prototype.compileLLL = ue("eth_compileLLL");
oe.prototype.compileSolidity = ue("eth_compileSolidity");
oe.prototype.compileSerpent = ue("eth_compileSerpent");
oe.prototype.newFilter = ue("eth_newFilter");
oe.prototype.newBlockFilter = ue("eth_newBlockFilter");
oe.prototype.newPendingTransactionFilter = ue("eth_newPendingTransactionFilter");
oe.prototype.uninstallFilter = ue("eth_uninstallFilter");
oe.prototype.getFilterChanges = ue("eth_getFilterChanges");
oe.prototype.getFilterLogs = ue("eth_getFilterLogs");
oe.prototype.getLogs = ue("eth_getLogs");
oe.prototype.getWork = ue("eth_getWork");
oe.prototype.submitWork = ue("eth_submitWork");
oe.prototype.submitHashrate = ue("eth_submitHashrate");
oe.prototype.sendAsync = function(e, t) {
  this.currentProvider.sendAsync(Ls(e), function(a, s) {
    if (!a && s.error && (a = new Error("EthQuery - RPC Error - " + s.error.message)), a)
      return t(a);
    t(null, s.result);
  });
};
function ue(e) {
  return function() {
    const t = this;
    var n = [].slice.call(arguments), a = n.pop();
    t.sendAsync({
      method: e,
      params: n
    }, a);
  };
}
function ct(e, t) {
  return function() {
    const n = this;
    var a = [].slice.call(arguments), s = a.pop();
    a.length < e && a.push("latest"), n.sendAsync({
      method: t,
      params: a
    }, s);
  };
}
function Ls(e) {
  return Fs({
    id: Cs(),
    jsonrpc: "2.0",
    params: []
  }, e);
}
var nn, gi;
function js() {
  if (gi)
    return nn;
  gi = 1;
  const e = Go(), t = Tt();
  var n = typeof Reflect == "object" ? Reflect : null, a = n && typeof n.apply == "function" ? n.apply : function(l, _, A) {
    return Function.prototype.apply.call(l, _, A);
  };
  nn = s;
  function s() {
    t.call(this);
  }
  e.inherits(s, t), s.prototype.emit = function(o) {
    for (var l = [], _ = 1; _ < arguments.length; _++)
      l.push(arguments[_]);
    var A = o === "error", j = this._events;
    if (j !== void 0)
      A = A && j.error === void 0;
    else if (!A)
      return !1;
    if (A) {
      var O;
      if (l.length > 0 && (O = l[0]), O instanceof Error)
        throw O;
      var y = new Error("Unhandled error." + (O ? " (" + O.message + ")" : ""));
      throw y.context = O, y;
    }
    var m = j[o];
    if (m === void 0)
      return !1;
    if (typeof m == "function")
      c(m, this, l);
    else
      for (var C = m.length, J = u(m, C), _ = 0; _ < C; ++_)
        c(J[_], this, l);
    return !0;
  };
  function c(o, l, _) {
    try {
      a(o, l, _);
    } catch (A) {
      setTimeout(() => {
        throw A;
      });
    }
  }
  function u(o, l) {
    for (var _ = new Array(l), A = 0; A < l; ++A)
      _[A] = o[A];
    return _;
  }
  return nn;
}
var on, _i;
function ks() {
  if (_i)
    return on;
  _i = 1, no();
  const e = js(), t = 1e3, n = (u, o) => u + o, a = ["sync", "latest"];
  class s extends e {
    constructor(o = {}) {
      super(), this._blockResetDuration = o.blockResetDuration || 20 * t, this._blockResetTimeout, this._currentBlock = null, this._isRunning = !1, this._onNewListener = this._onNewListener.bind(this), this._onRemoveListener = this._onRemoveListener.bind(this), this._resetCurrentBlock = this._resetCurrentBlock.bind(this), this._setupInternalEvents();
    }
    isRunning() {
      return this._isRunning;
    }
    getCurrentBlock() {
      return this._currentBlock;
    }
    async getLatestBlock() {
      return this._currentBlock ? this._currentBlock : await new Promise((l) => this.once("latest", l));
    }
    removeAllListeners(o) {
      o ? super.removeAllListeners(o) : super.removeAllListeners(), this._setupInternalEvents(), this._onRemoveListener();
    }
    _start() {
    }
    _end() {
    }
    _setupInternalEvents() {
      this.removeListener("newListener", this._onNewListener), this.removeListener("removeListener", this._onRemoveListener), this.on("newListener", this._onNewListener), this.on("removeListener", this._onRemoveListener);
    }
    _onNewListener(o, l) {
      !a.includes(o) || this._maybeStart();
    }
    _onRemoveListener(o, l) {
      this._getBlockTrackerEventCount() > 0 || this._maybeEnd();
    }
    _maybeStart() {
      this._isRunning || (this._isRunning = !0, this._cancelBlockResetTimeout(), this._start());
    }
    _maybeEnd() {
      !this._isRunning || (this._isRunning = !1, this._setupBlockResetTimeout(), this._end());
    }
    _getBlockTrackerEventCount() {
      return a.map((o) => this.listenerCount(o)).reduce(n);
    }
    _newPotentialLatest(o) {
      const l = this._currentBlock;
      l && c(o) <= c(l) || this._setCurrentBlock(o);
    }
    _setCurrentBlock(o) {
      const l = this._currentBlock;
      this._currentBlock = o, this.emit("latest", o), this.emit("sync", { oldBlock: l, newBlock: o });
    }
    _setupBlockResetTimeout() {
      this._cancelBlockResetTimeout(), this._blockResetTimeout = setTimeout(this._resetCurrentBlock, this._blockResetDuration), this._blockResetTimeout.unref && this._blockResetTimeout.unref();
    }
    _cancelBlockResetTimeout() {
      clearTimeout(this._blockResetTimeout);
    }
    _resetCurrentBlock() {
      this._currentBlock = null;
    }
  }
  on = s;
  function c(u) {
    return Number.parseInt(u, 16);
  }
  return on;
}
var an, bi;
function uf() {
  if (bi)
    return an;
  bi = 1;
  const e = no(), t = ks(), n = 1e3;
  class a extends t {
    constructor(u = {}) {
      if (!u.provider)
        throw new Error("PollingBlockTracker - no provider specified.");
      const o = u.pollingInterval || 20 * n, l = u.retryTimeout || o / 10, _ = u.keepEventLoopActive !== void 0 ? u.keepEventLoopActive : !0, A = u.setSkipCacheFlag || !1;
      super(Object.assign({
        blockResetDuration: o
      }, u)), this._provider = u.provider, this._pollingInterval = o, this._retryTimeout = l, this._keepEventLoopActive = _, this._setSkipCacheFlag = A;
    }
    async checkForLatestBlock() {
      return await this._updateLatestBlock(), await this.getLatestBlock();
    }
    _start() {
      this._performSync().catch((u) => this.emit("error", u));
    }
    async _performSync() {
      for (; this._isRunning; )
        try {
          await this._updateLatestBlock(), await s(this._pollingInterval, !this._keepEventLoopActive);
        } catch (u) {
          const o = new Error(`PollingBlockTracker - encountered an error while attempting to update latest block:
${u.stack}`);
          try {
            this.emit("error", o);
          } catch {
            console.error(o);
          }
          await s(this._retryTimeout, !this._keepEventLoopActive);
        }
    }
    async _updateLatestBlock() {
      const u = await this._fetchLatestBlock();
      this._newPotentialLatest(u);
    }
    async _fetchLatestBlock() {
      const u = { jsonrpc: "2.0", id: 1, method: "eth_blockNumber", params: [] };
      this._setSkipCacheFlag && (u.skipCache = !0);
      const o = await e((l) => this._provider.sendAsync(u, l))();
      if (o.error)
        throw new Error(`PollingBlockTracker - encountered error fetching block:
${o.error}`);
      return o.result;
    }
  }
  an = a;
  function s(c, u) {
    return new Promise((o) => {
      const l = setTimeout(o, c);
      l.unref && u && l.unref();
    });
  }
  return an;
}
var io = {}, bn = {}, jt = { exports: {} };
(function(e) {
  var t, n, a, s, c, u, o, l, _, A, j, O, y, m, C, J, w, E, F, P, T, W, X, D, Z;
  (function(I) {
    var U = typeof be == "object" ? be : typeof self == "object" ? self : typeof this == "object" ? this : {};
    I(q(U, q(e.exports)));
    function q(b, S) {
      return b !== U && (typeof Object.create == "function" ? Object.defineProperty(b, "__esModule", { value: !0 }) : b.__esModule = !0), function(B, N) {
        return b[B] = S ? S(B, N) : N;
      };
    }
  })(function(I) {
    var U = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(b, S) {
      b.__proto__ = S;
    } || function(b, S) {
      for (var B in S)
        Object.prototype.hasOwnProperty.call(S, B) && (b[B] = S[B]);
    };
    t = function(b, S) {
      if (typeof S != "function" && S !== null)
        throw new TypeError("Class extends value " + String(S) + " is not a constructor or null");
      U(b, S);
      function B() {
        this.constructor = b;
      }
      b.prototype = S === null ? Object.create(S) : (B.prototype = S.prototype, new B());
    }, n = Object.assign || function(b) {
      for (var S, B = 1, N = arguments.length; B < N; B++) {
        S = arguments[B];
        for (var V in S)
          Object.prototype.hasOwnProperty.call(S, V) && (b[V] = S[V]);
      }
      return b;
    }, a = function(b, S) {
      var B = {};
      for (var N in b)
        Object.prototype.hasOwnProperty.call(b, N) && S.indexOf(N) < 0 && (B[N] = b[N]);
      if (b != null && typeof Object.getOwnPropertySymbols == "function")
        for (var V = 0, N = Object.getOwnPropertySymbols(b); V < N.length; V++)
          S.indexOf(N[V]) < 0 && Object.prototype.propertyIsEnumerable.call(b, N[V]) && (B[N[V]] = b[N[V]]);
      return B;
    }, s = function(b, S, B, N) {
      var V = arguments.length, K = V < 3 ? S : N === null ? N = Object.getOwnPropertyDescriptor(S, B) : N, Y;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        K = Reflect.decorate(b, S, B, N);
      else
        for (var ne = b.length - 1; ne >= 0; ne--)
          (Y = b[ne]) && (K = (V < 3 ? Y(K) : V > 3 ? Y(S, B, K) : Y(S, B)) || K);
      return V > 3 && K && Object.defineProperty(S, B, K), K;
    }, c = function(b, S) {
      return function(B, N) {
        S(B, N, b);
      };
    }, u = function(b, S) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(b, S);
    }, o = function(b, S, B, N) {
      function V(K) {
        return K instanceof B ? K : new B(function(Y) {
          Y(K);
        });
      }
      return new (B || (B = Promise))(function(K, Y) {
        function ne(L) {
          try {
            g(N.next(L));
          } catch (z) {
            Y(z);
          }
        }
        function ie(L) {
          try {
            g(N.throw(L));
          } catch (z) {
            Y(z);
          }
        }
        function g(L) {
          L.done ? K(L.value) : V(L.value).then(ne, ie);
        }
        g((N = N.apply(b, S || [])).next());
      });
    }, l = function(b, S) {
      var B = { label: 0, sent: function() {
        if (K[0] & 1)
          throw K[1];
        return K[1];
      }, trys: [], ops: [] }, N, V, K, Y;
      return Y = { next: ne(0), throw: ne(1), return: ne(2) }, typeof Symbol == "function" && (Y[Symbol.iterator] = function() {
        return this;
      }), Y;
      function ne(g) {
        return function(L) {
          return ie([g, L]);
        };
      }
      function ie(g) {
        if (N)
          throw new TypeError("Generator is already executing.");
        for (; Y && (Y = 0, g[0] && (B = 0)), B; )
          try {
            if (N = 1, V && (K = g[0] & 2 ? V.return : g[0] ? V.throw || ((K = V.return) && K.call(V), 0) : V.next) && !(K = K.call(V, g[1])).done)
              return K;
            switch (V = 0, K && (g = [g[0] & 2, K.value]), g[0]) {
              case 0:
              case 1:
                K = g;
                break;
              case 4:
                return B.label++, { value: g[1], done: !1 };
              case 5:
                B.label++, V = g[1], g = [0];
                continue;
              case 7:
                g = B.ops.pop(), B.trys.pop();
                continue;
              default:
                if (K = B.trys, !(K = K.length > 0 && K[K.length - 1]) && (g[0] === 6 || g[0] === 2)) {
                  B = 0;
                  continue;
                }
                if (g[0] === 3 && (!K || g[1] > K[0] && g[1] < K[3])) {
                  B.label = g[1];
                  break;
                }
                if (g[0] === 6 && B.label < K[1]) {
                  B.label = K[1], K = g;
                  break;
                }
                if (K && B.label < K[2]) {
                  B.label = K[2], B.ops.push(g);
                  break;
                }
                K[2] && B.ops.pop(), B.trys.pop();
                continue;
            }
            g = S.call(b, B);
          } catch (L) {
            g = [6, L], V = 0;
          } finally {
            N = K = 0;
          }
        if (g[0] & 5)
          throw g[1];
        return { value: g[0] ? g[1] : void 0, done: !0 };
      }
    }, _ = function(b, S) {
      for (var B in b)
        B !== "default" && !Object.prototype.hasOwnProperty.call(S, B) && Z(S, b, B);
    }, Z = Object.create ? function(b, S, B, N) {
      N === void 0 && (N = B);
      var V = Object.getOwnPropertyDescriptor(S, B);
      (!V || ("get" in V ? !S.__esModule : V.writable || V.configurable)) && (V = { enumerable: !0, get: function() {
        return S[B];
      } }), Object.defineProperty(b, N, V);
    } : function(b, S, B, N) {
      N === void 0 && (N = B), b[N] = S[B];
    }, A = function(b) {
      var S = typeof Symbol == "function" && Symbol.iterator, B = S && b[S], N = 0;
      if (B)
        return B.call(b);
      if (b && typeof b.length == "number")
        return {
          next: function() {
            return b && N >= b.length && (b = void 0), { value: b && b[N++], done: !b };
          }
        };
      throw new TypeError(S ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }, j = function(b, S) {
      var B = typeof Symbol == "function" && b[Symbol.iterator];
      if (!B)
        return b;
      var N = B.call(b), V, K = [], Y;
      try {
        for (; (S === void 0 || S-- > 0) && !(V = N.next()).done; )
          K.push(V.value);
      } catch (ne) {
        Y = { error: ne };
      } finally {
        try {
          V && !V.done && (B = N.return) && B.call(N);
        } finally {
          if (Y)
            throw Y.error;
        }
      }
      return K;
    }, O = function() {
      for (var b = [], S = 0; S < arguments.length; S++)
        b = b.concat(j(arguments[S]));
      return b;
    }, y = function() {
      for (var b = 0, S = 0, B = arguments.length; S < B; S++)
        b += arguments[S].length;
      for (var N = Array(b), V = 0, S = 0; S < B; S++)
        for (var K = arguments[S], Y = 0, ne = K.length; Y < ne; Y++, V++)
          N[V] = K[Y];
      return N;
    }, m = function(b, S, B) {
      if (B || arguments.length === 2)
        for (var N = 0, V = S.length, K; N < V; N++)
          (K || !(N in S)) && (K || (K = Array.prototype.slice.call(S, 0, N)), K[N] = S[N]);
      return b.concat(K || Array.prototype.slice.call(S));
    }, C = function(b) {
      return this instanceof C ? (this.v = b, this) : new C(b);
    }, J = function(b, S, B) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var N = B.apply(b, S || []), V, K = [];
      return V = {}, Y("next"), Y("throw"), Y("return"), V[Symbol.asyncIterator] = function() {
        return this;
      }, V;
      function Y(te) {
        N[te] && (V[te] = function(v) {
          return new Promise(function(x, k) {
            K.push([te, v, x, k]) > 1 || ne(te, v);
          });
        });
      }
      function ne(te, v) {
        try {
          ie(N[te](v));
        } catch (x) {
          z(K[0][3], x);
        }
      }
      function ie(te) {
        te.value instanceof C ? Promise.resolve(te.value.v).then(g, L) : z(K[0][2], te);
      }
      function g(te) {
        ne("next", te);
      }
      function L(te) {
        ne("throw", te);
      }
      function z(te, v) {
        te(v), K.shift(), K.length && ne(K[0][0], K[0][1]);
      }
    }, w = function(b) {
      var S, B;
      return S = {}, N("next"), N("throw", function(V) {
        throw V;
      }), N("return"), S[Symbol.iterator] = function() {
        return this;
      }, S;
      function N(V, K) {
        S[V] = b[V] ? function(Y) {
          return (B = !B) ? { value: C(b[V](Y)), done: V === "return" } : K ? K(Y) : Y;
        } : K;
      }
    }, E = function(b) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var S = b[Symbol.asyncIterator], B;
      return S ? S.call(b) : (b = typeof A == "function" ? A(b) : b[Symbol.iterator](), B = {}, N("next"), N("throw"), N("return"), B[Symbol.asyncIterator] = function() {
        return this;
      }, B);
      function N(K) {
        B[K] = b[K] && function(Y) {
          return new Promise(function(ne, ie) {
            Y = b[K](Y), V(ne, ie, Y.done, Y.value);
          });
        };
      }
      function V(K, Y, ne, ie) {
        Promise.resolve(ie).then(function(g) {
          K({ value: g, done: ne });
        }, Y);
      }
    }, F = function(b, S) {
      return Object.defineProperty ? Object.defineProperty(b, "raw", { value: S }) : b.raw = S, b;
    };
    var q = Object.create ? function(b, S) {
      Object.defineProperty(b, "default", { enumerable: !0, value: S });
    } : function(b, S) {
      b.default = S;
    };
    P = function(b) {
      if (b && b.__esModule)
        return b;
      var S = {};
      if (b != null)
        for (var B in b)
          B !== "default" && Object.prototype.hasOwnProperty.call(b, B) && Z(S, b, B);
      return q(S, b), S;
    }, T = function(b) {
      return b && b.__esModule ? b : { default: b };
    }, W = function(b, S, B, N) {
      if (B === "a" && !N)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof S == "function" ? b !== S || !N : !S.has(b))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return B === "m" ? N : B === "a" ? N.call(b) : N ? N.value : S.get(b);
    }, X = function(b, S, B, N, V) {
      if (N === "m")
        throw new TypeError("Private method is not writable");
      if (N === "a" && !V)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof S == "function" ? b !== S || !V : !S.has(b))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return N === "a" ? V.call(b, B) : V ? V.value = B : S.set(b, B), B;
    }, D = function(b, S) {
      if (S === null || typeof S != "object" && typeof S != "function")
        throw new TypeError("Cannot use 'in' operator on non-object");
      return typeof b == "function" ? S === b : b.has(S);
    }, I("__extends", t), I("__assign", n), I("__rest", a), I("__decorate", s), I("__param", c), I("__metadata", u), I("__awaiter", o), I("__generator", l), I("__exportStar", _), I("__createBinding", Z), I("__values", A), I("__read", j), I("__spread", O), I("__spreadArrays", y), I("__spreadArray", m), I("__await", C), I("__asyncGenerator", J), I("__asyncDelegator", w), I("__asyncValues", E), I("__makeTemplateObject", F), I("__importStar", P), I("__importDefault", T), I("__classPrivateFieldGet", W), I("__classPrivateFieldSet", X), I("__classPrivateFieldIn", D);
  });
})(jt);
var kt = {};
Object.defineProperty(kt, "__esModule", { value: !0 });
var mi = jt.exports, Ns = function() {
  function e(t) {
    if (this._maxConcurrency = t, this._queue = [], t <= 0)
      throw new Error("semaphore must be initialized to a positive value");
    this._value = t;
  }
  return e.prototype.acquire = function() {
    var t = this, n = this.isLocked(), a = new Promise(function(s) {
      return t._queue.push(s);
    });
    return n || this._dispatch(), a;
  }, e.prototype.runExclusive = function(t) {
    return mi.__awaiter(this, void 0, void 0, function() {
      var n, a, s;
      return mi.__generator(this, function(c) {
        switch (c.label) {
          case 0:
            return [4, this.acquire()];
          case 1:
            n = c.sent(), a = n[0], s = n[1], c.label = 2;
          case 2:
            return c.trys.push([2, , 4, 5]), [4, t(a)];
          case 3:
            return [2, c.sent()];
          case 4:
            return s(), [7];
          case 5:
            return [2];
        }
      });
    });
  }, e.prototype.isLocked = function() {
    return this._value <= 0;
  }, e.prototype.release = function() {
    if (this._maxConcurrency > 1)
      throw new Error("this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead");
    if (this._currentReleaser) {
      var t = this._currentReleaser;
      this._currentReleaser = void 0, t();
    }
  }, e.prototype._dispatch = function() {
    var t = this, n = this._queue.shift();
    if (!!n) {
      var a = !1;
      this._currentReleaser = function() {
        a || (a = !0, t._value++, t._dispatch());
      }, n([this._value--, this._currentReleaser]);
    }
  }, e;
}();
kt.default = Ns;
Object.defineProperty(bn, "__esModule", { value: !0 });
var wi = jt.exports, Us = kt, Ds = function() {
  function e() {
    this._semaphore = new Us.default(1);
  }
  return e.prototype.acquire = function() {
    return wi.__awaiter(this, void 0, void 0, function() {
      var t, n;
      return wi.__generator(this, function(a) {
        switch (a.label) {
          case 0:
            return [4, this._semaphore.acquire()];
          case 1:
            return t = a.sent(), n = t[1], [2, n];
        }
      });
    });
  }, e.prototype.runExclusive = function(t) {
    return this._semaphore.runExclusive(function() {
      return t();
    });
  }, e.prototype.isLocked = function() {
    return this._semaphore.isLocked();
  }, e.prototype.release = function() {
    this._semaphore.release();
  }, e;
}();
bn.default = Ds;
var Nt = {};
Object.defineProperty(Nt, "__esModule", { value: !0 });
Nt.withTimeout = void 0;
var mt = jt.exports;
function $s(e, t, n) {
  var a = this;
  return n === void 0 && (n = new Error("timeout")), {
    acquire: function() {
      return new Promise(function(s, c) {
        return mt.__awaiter(a, void 0, void 0, function() {
          var u, o, l;
          return mt.__generator(this, function(_) {
            switch (_.label) {
              case 0:
                return u = !1, setTimeout(function() {
                  u = !0, c(n);
                }, t), [4, e.acquire()];
              case 1:
                return o = _.sent(), u ? (l = Array.isArray(o) ? o[1] : o, l()) : s(o), [2];
            }
          });
        });
      });
    },
    runExclusive: function(s) {
      return mt.__awaiter(this, void 0, void 0, function() {
        var c, u;
        return mt.__generator(this, function(o) {
          switch (o.label) {
            case 0:
              c = function() {
              }, o.label = 1;
            case 1:
              return o.trys.push([1, , 7, 8]), [4, this.acquire()];
            case 2:
              return u = o.sent(), Array.isArray(u) ? (c = u[1], [4, s(u[0])]) : [3, 4];
            case 3:
              return [2, o.sent()];
            case 4:
              return c = u, [4, s()];
            case 5:
              return [2, o.sent()];
            case 6:
              return [3, 8];
            case 7:
              return c(), [7];
            case 8:
              return [2];
          }
        });
      });
    },
    release: function() {
      e.release();
    },
    isLocked: function() {
      return e.isLocked();
    }
  };
}
Nt.withTimeout = $s;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.withTimeout = e.Semaphore = e.Mutex = void 0;
  var t = bn;
  Object.defineProperty(e, "Mutex", { enumerable: !0, get: function() {
    return t.default;
  } });
  var n = kt;
  Object.defineProperty(e, "Semaphore", { enumerable: !0, get: function() {
    return n.default;
  } });
  var a = Nt;
  Object.defineProperty(e, "withTimeout", { enumerable: !0, get: function() {
    return a.withTimeout;
  } });
})(io);
var mn = {}, Ut = {}, lt = {};
Object.defineProperty(lt, "__esModule", { value: !0 });
lt.getUniqueId = void 0;
const oo = 4294967295;
let sn = Math.floor(Math.random() * oo);
function qs() {
  return sn = (sn + 1) % oo, sn;
}
lt.getUniqueId = qs;
Object.defineProperty(Ut, "__esModule", { value: !0 });
Ut.createIdRemapMiddleware = void 0;
const Hs = lt;
function Ws() {
  return (e, t, n, a) => {
    const s = e.id, c = Hs.getUniqueId();
    e.id = c, t.id = c, n((u) => {
      e.id = s, t.id = s, u();
    });
  };
}
Ut.createIdRemapMiddleware = Ws;
var Dt = {};
Object.defineProperty(Dt, "__esModule", { value: !0 });
Dt.createAsyncMiddleware = void 0;
function zs(e) {
  return async (t, n, a, s) => {
    let c;
    const u = new Promise((A) => {
      c = A;
    });
    let o = null, l = !1;
    const _ = async () => {
      l = !0, a((A) => {
        o = A, c();
      }), await u;
    };
    try {
      await e(t, n, _), l ? (await u, o(null)) : s(null);
    } catch (A) {
      o ? o(A) : s(A);
    }
  };
}
Dt.createAsyncMiddleware = zs;
var $t = {};
Object.defineProperty($t, "__esModule", { value: !0 });
$t.createScaffoldMiddleware = void 0;
function Gs(e) {
  return (t, n, a, s) => {
    const c = e[t.method];
    return c === void 0 ? a() : typeof c == "function" ? c(t, n, a, s) : (n.result = c, s());
  };
}
$t.createScaffoldMiddleware = Gs;
var ht = {}, dt = {};
Object.defineProperty(dt, "__esModule", { value: !0 });
const Vs = Tt();
function vi(e, t, n) {
  try {
    Reflect.apply(e, t, n);
  } catch (a) {
    setTimeout(() => {
      throw a;
    });
  }
}
function Js(e) {
  const t = e.length, n = new Array(t);
  for (let a = 0; a < t; a += 1)
    n[a] = e[a];
  return n;
}
class Ks extends Vs.EventEmitter {
  emit(t, ...n) {
    let a = t === "error";
    const s = this._events;
    if (s !== void 0)
      a = a && s.error === void 0;
    else if (!a)
      return !1;
    if (a) {
      let u;
      if (n.length > 0 && ([u] = n), u instanceof Error)
        throw u;
      const o = new Error(`Unhandled error.${u ? ` (${u.message})` : ""}`);
      throw o.context = u, o;
    }
    const c = s[t];
    if (c === void 0)
      return !1;
    if (typeof c == "function")
      vi(c, this, n);
    else {
      const u = c.length, o = Js(c);
      for (let l = 0; l < u; l += 1)
        vi(o[l], this, n);
    }
    return !0;
  }
}
dt.default = Ks;
var ao = {}, Le = {}, Ys = it;
it.default = it;
it.stable = fo;
it.stableStringify = fo;
var Bt = "[...]", so = "[Circular]", De = [], ke = [];
function uo() {
  return {
    depthLimit: Number.MAX_SAFE_INTEGER,
    edgesLimit: Number.MAX_SAFE_INTEGER
  };
}
function it(e, t, n, a) {
  typeof a > "u" && (a = uo()), hn(e, "", 0, [], void 0, 0, a);
  var s;
  try {
    ke.length === 0 ? s = JSON.stringify(e, t, n) : s = JSON.stringify(e, co(t), n);
  } catch {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
  } finally {
    for (; De.length !== 0; ) {
      var c = De.pop();
      c.length === 4 ? Object.defineProperty(c[0], c[1], c[3]) : c[0][c[1]] = c[2];
    }
  }
  return s;
}
function Ke(e, t, n, a) {
  var s = Object.getOwnPropertyDescriptor(a, n);
  s.get !== void 0 ? s.configurable ? (Object.defineProperty(a, n, { value: e }), De.push([a, n, t, s])) : ke.push([t, n, e]) : (a[n] = e, De.push([a, n, t]));
}
function hn(e, t, n, a, s, c, u) {
  c += 1;
  var o;
  if (typeof e == "object" && e !== null) {
    for (o = 0; o < a.length; o++)
      if (a[o] === e) {
        Ke(so, e, t, s);
        return;
      }
    if (typeof u.depthLimit < "u" && c > u.depthLimit) {
      Ke(Bt, e, t, s);
      return;
    }
    if (typeof u.edgesLimit < "u" && n + 1 > u.edgesLimit) {
      Ke(Bt, e, t, s);
      return;
    }
    if (a.push(e), Array.isArray(e))
      for (o = 0; o < e.length; o++)
        hn(e[o], o, o, a, e, c, u);
    else {
      var l = Object.keys(e);
      for (o = 0; o < l.length; o++) {
        var _ = l[o];
        hn(e[_], _, o, a, e, c, u);
      }
    }
    a.pop();
  }
}
function Xs(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function fo(e, t, n, a) {
  typeof a > "u" && (a = uo());
  var s = dn(e, "", 0, [], void 0, 0, a) || e, c;
  try {
    ke.length === 0 ? c = JSON.stringify(s, t, n) : c = JSON.stringify(s, co(t), n);
  } catch {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
  } finally {
    for (; De.length !== 0; ) {
      var u = De.pop();
      u.length === 4 ? Object.defineProperty(u[0], u[1], u[3]) : u[0][u[1]] = u[2];
    }
  }
  return c;
}
function dn(e, t, n, a, s, c, u) {
  c += 1;
  var o;
  if (typeof e == "object" && e !== null) {
    for (o = 0; o < a.length; o++)
      if (a[o] === e) {
        Ke(so, e, t, s);
        return;
      }
    try {
      if (typeof e.toJSON == "function")
        return;
    } catch {
      return;
    }
    if (typeof u.depthLimit < "u" && c > u.depthLimit) {
      Ke(Bt, e, t, s);
      return;
    }
    if (typeof u.edgesLimit < "u" && n + 1 > u.edgesLimit) {
      Ke(Bt, e, t, s);
      return;
    }
    if (a.push(e), Array.isArray(e))
      for (o = 0; o < e.length; o++)
        dn(e[o], o, o, a, e, c, u);
    else {
      var l = {}, _ = Object.keys(e).sort(Xs);
      for (o = 0; o < _.length; o++) {
        var A = _[o];
        dn(e[A], A, o, a, e, c, u), l[A] = e[A];
      }
      if (typeof s < "u")
        De.push([s, t, e]), s[t] = l;
      else
        return l;
    }
    a.pop();
  }
}
function co(e) {
  return e = typeof e < "u" ? e : function(t, n) {
    return n;
  }, function(t, n) {
    if (ke.length > 0)
      for (var a = 0; a < ke.length; a++) {
        var s = ke[a];
        if (s[1] === t && s[0] === n) {
          n = s[2], ke.splice(a, 1);
          break;
        }
      }
    return e.call(this, t, n);
  };
}
Object.defineProperty(Le, "__esModule", { value: !0 });
Le.EthereumProviderError = Le.EthereumRpcError = void 0;
const Qs = Ys;
class lo extends Error {
  constructor(t, n, a) {
    if (!Number.isInteger(t))
      throw new Error('"code" must be an integer.');
    if (!n || typeof n != "string")
      throw new Error('"message" must be a nonempty string.');
    super(n), this.code = t, a !== void 0 && (this.data = a);
  }
  serialize() {
    const t = {
      code: this.code,
      message: this.message
    };
    return this.data !== void 0 && (t.data = this.data), this.stack && (t.stack = this.stack), t;
  }
  toString() {
    return Qs.default(this.serialize(), tu, 2);
  }
}
Le.EthereumRpcError = lo;
class Zs extends lo {
  constructor(t, n, a) {
    if (!eu(t))
      throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
    super(t, n, a);
  }
}
Le.EthereumProviderError = Zs;
function eu(e) {
  return Number.isInteger(e) && e >= 1e3 && e <= 4999;
}
function tu(e, t) {
  if (t !== "[Circular]")
    return t;
}
var wn = {}, je = {};
Object.defineProperty(je, "__esModule", { value: !0 });
je.errorValues = je.errorCodes = void 0;
je.errorCodes = {
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
je.errorValues = {
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
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.serializeError = e.isValidCode = e.getMessageFromCode = e.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
  const t = je, n = Le, a = t.errorCodes.rpc.internal, s = "Unspecified error message. This is a bug, please report it.", c = {
    code: a,
    message: u(a)
  };
  e.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
  function u(O, y = s) {
    if (Number.isInteger(O)) {
      const m = O.toString();
      if (j(t.errorValues, m))
        return t.errorValues[m].message;
      if (_(O))
        return e.JSON_RPC_SERVER_ERROR_MESSAGE;
    }
    return y;
  }
  e.getMessageFromCode = u;
  function o(O) {
    if (!Number.isInteger(O))
      return !1;
    const y = O.toString();
    return !!(t.errorValues[y] || _(O));
  }
  e.isValidCode = o;
  function l(O, { fallbackError: y = c, shouldIncludeStack: m = !1 } = {}) {
    var C, J;
    if (!y || !Number.isInteger(y.code) || typeof y.message != "string")
      throw new Error("Must provide fallback error with integer number code and string message.");
    if (O instanceof n.EthereumRpcError)
      return O.serialize();
    const w = {};
    if (O && typeof O == "object" && !Array.isArray(O) && j(O, "code") && o(O.code)) {
      const F = O;
      w.code = F.code, F.message && typeof F.message == "string" ? (w.message = F.message, j(F, "data") && (w.data = F.data)) : (w.message = u(w.code), w.data = { originalError: A(O) });
    } else {
      w.code = y.code;
      const F = (C = O) === null || C === void 0 ? void 0 : C.message;
      w.message = F && typeof F == "string" ? F : y.message, w.data = { originalError: A(O) };
    }
    const E = (J = O) === null || J === void 0 ? void 0 : J.stack;
    return m && O && E && typeof E == "string" && (w.stack = E), w;
  }
  e.serializeError = l;
  function _(O) {
    return O >= -32099 && O <= -32e3;
  }
  function A(O) {
    return O && typeof O == "object" && !Array.isArray(O) ? Object.assign({}, O) : O;
  }
  function j(O, y) {
    return Object.prototype.hasOwnProperty.call(O, y);
  }
})(wn);
var qt = {};
Object.defineProperty(qt, "__esModule", { value: !0 });
qt.ethErrors = void 0;
const vn = Le, ho = wn, we = je;
qt.ethErrors = {
  rpc: {
    parse: (e) => Se(we.errorCodes.rpc.parse, e),
    invalidRequest: (e) => Se(we.errorCodes.rpc.invalidRequest, e),
    invalidParams: (e) => Se(we.errorCodes.rpc.invalidParams, e),
    methodNotFound: (e) => Se(we.errorCodes.rpc.methodNotFound, e),
    internal: (e) => Se(we.errorCodes.rpc.internal, e),
    server: (e) => {
      if (!e || typeof e != "object" || Array.isArray(e))
        throw new Error("Ethereum RPC Server errors must provide single object argument.");
      const { code: t } = e;
      if (!Number.isInteger(t) || t > -32005 || t < -32099)
        throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
      return Se(t, e);
    },
    invalidInput: (e) => Se(we.errorCodes.rpc.invalidInput, e),
    resourceNotFound: (e) => Se(we.errorCodes.rpc.resourceNotFound, e),
    resourceUnavailable: (e) => Se(we.errorCodes.rpc.resourceUnavailable, e),
    transactionRejected: (e) => Se(we.errorCodes.rpc.transactionRejected, e),
    methodNotSupported: (e) => Se(we.errorCodes.rpc.methodNotSupported, e),
    limitExceeded: (e) => Se(we.errorCodes.rpc.limitExceeded, e)
  },
  provider: {
    userRejectedRequest: (e) => rt(we.errorCodes.provider.userRejectedRequest, e),
    unauthorized: (e) => rt(we.errorCodes.provider.unauthorized, e),
    unsupportedMethod: (e) => rt(we.errorCodes.provider.unsupportedMethod, e),
    disconnected: (e) => rt(we.errorCodes.provider.disconnected, e),
    chainDisconnected: (e) => rt(we.errorCodes.provider.chainDisconnected, e),
    custom: (e) => {
      if (!e || typeof e != "object" || Array.isArray(e))
        throw new Error("Ethereum Provider custom errors must provide single object argument.");
      const { code: t, message: n, data: a } = e;
      if (!n || typeof n != "string")
        throw new Error('"message" must be a nonempty string');
      return new vn.EthereumProviderError(t, n, a);
    }
  }
};
function Se(e, t) {
  const [n, a] = po(t);
  return new vn.EthereumRpcError(e, n || ho.getMessageFromCode(e), a);
}
function rt(e, t) {
  const [n, a] = po(t);
  return new vn.EthereumProviderError(e, n || ho.getMessageFromCode(e), a);
}
function po(e) {
  if (e) {
    if (typeof e == "string")
      return [e];
    if (typeof e == "object" && !Array.isArray(e)) {
      const { message: t, data: n } = e;
      if (t && typeof t != "string")
        throw new Error("Must specify string message.");
      return [t || void 0, n];
    }
  }
  return [];
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getMessageFromCode = e.serializeError = e.EthereumProviderError = e.EthereumRpcError = e.ethErrors = e.errorCodes = void 0;
  const t = Le;
  Object.defineProperty(e, "EthereumRpcError", { enumerable: !0, get: function() {
    return t.EthereumRpcError;
  } }), Object.defineProperty(e, "EthereumProviderError", { enumerable: !0, get: function() {
    return t.EthereumProviderError;
  } });
  const n = wn;
  Object.defineProperty(e, "serializeError", { enumerable: !0, get: function() {
    return n.serializeError;
  } }), Object.defineProperty(e, "getMessageFromCode", { enumerable: !0, get: function() {
    return n.getMessageFromCode;
  } });
  const a = qt;
  Object.defineProperty(e, "ethErrors", { enumerable: !0, get: function() {
    return a.ethErrors;
  } });
  const s = je;
  Object.defineProperty(e, "errorCodes", { enumerable: !0, get: function() {
    return s.errorCodes;
  } });
})(ao);
var ru = be && be.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(ht, "__esModule", { value: !0 });
ht.JsonRpcEngine = void 0;
const nu = ru(dt), xe = ao;
class Pe extends nu.default {
  constructor() {
    super(), this._middleware = [];
  }
  push(t) {
    this._middleware.push(t);
  }
  handle(t, n) {
    if (n && typeof n != "function")
      throw new Error('"callback" must be a function if provided.');
    return Array.isArray(t) ? n ? this._handleBatch(t, n) : this._handleBatch(t) : n ? this._handle(t, n) : this._promiseHandle(t);
  }
  asMiddleware() {
    return async (t, n, a, s) => {
      try {
        const [c, u, o] = await Pe._runAllMiddleware(t, n, this._middleware);
        return u ? (await Pe._runReturnHandlers(o), s(c)) : a(async (l) => {
          try {
            await Pe._runReturnHandlers(o);
          } catch (_) {
            return l(_);
          }
          return l();
        });
      } catch (c) {
        return s(c);
      }
    };
  }
  async _handleBatch(t, n) {
    try {
      const a = await Promise.all(
        t.map(this._promiseHandle.bind(this))
      );
      return n ? n(null, a) : a;
    } catch (a) {
      if (n)
        return n(a);
      throw a;
    }
  }
  _promiseHandle(t) {
    return new Promise((n) => {
      this._handle(t, (a, s) => {
        n(s);
      });
    });
  }
  async _handle(t, n) {
    if (!t || Array.isArray(t) || typeof t != "object") {
      const u = new xe.EthereumRpcError(xe.errorCodes.rpc.invalidRequest, `Requests must be plain objects. Received: ${typeof t}`, { request: t });
      return n(u, { id: void 0, jsonrpc: "2.0", error: u });
    }
    if (typeof t.method != "string") {
      const u = new xe.EthereumRpcError(xe.errorCodes.rpc.invalidRequest, `Must specify a string method. Received: ${typeof t.method}`, { request: t });
      return n(u, { id: t.id, jsonrpc: "2.0", error: u });
    }
    const a = Object.assign({}, t), s = {
      id: a.id,
      jsonrpc: a.jsonrpc
    };
    let c = null;
    try {
      await this._processRequest(a, s);
    } catch (u) {
      c = u;
    }
    return c && (delete s.result, s.error || (s.error = xe.serializeError(c))), n(c, s);
  }
  async _processRequest(t, n) {
    const [a, s, c] = await Pe._runAllMiddleware(t, n, this._middleware);
    if (Pe._checkForCompletion(t, n, s), await Pe._runReturnHandlers(c), a)
      throw a;
  }
  static async _runAllMiddleware(t, n, a) {
    const s = [];
    let c = null, u = !1;
    for (const o of a)
      if ([c, u] = await Pe._runMiddleware(t, n, o, s), u)
        break;
    return [c, u, s.reverse()];
  }
  static _runMiddleware(t, n, a, s) {
    return new Promise((c) => {
      const u = (l) => {
        const _ = l || n.error;
        _ && (n.error = xe.serializeError(_)), c([_, !0]);
      }, o = (l) => {
        n.error ? u(n.error) : (l && (typeof l != "function" && u(new xe.EthereumRpcError(xe.errorCodes.rpc.internal, `JsonRpcEngine: "next" return handlers must be functions. Received "${typeof l}" for request:
${un(t)}`, { request: t })), s.push(l)), c([null, !1]));
      };
      try {
        a(t, n, o, u);
      } catch (l) {
        u(l);
      }
    });
  }
  static async _runReturnHandlers(t) {
    for (const n of t)
      await new Promise((a, s) => {
        n((c) => c ? s(c) : a());
      });
  }
  static _checkForCompletion(t, n, a) {
    if (!("result" in n) && !("error" in n))
      throw new xe.EthereumRpcError(xe.errorCodes.rpc.internal, `JsonRpcEngine: Response has no error or result for request:
${un(t)}`, { request: t });
    if (!a)
      throw new xe.EthereumRpcError(xe.errorCodes.rpc.internal, `JsonRpcEngine: Nothing ended request:
${un(t)}`, { request: t });
  }
}
ht.JsonRpcEngine = Pe;
function un(e) {
  return JSON.stringify(e, null, 2);
}
var Ht = {};
Object.defineProperty(Ht, "__esModule", { value: !0 });
Ht.mergeMiddleware = void 0;
const iu = ht;
function ou(e) {
  const t = new iu.JsonRpcEngine();
  return e.forEach((n) => t.push(n)), t.asMiddleware();
}
Ht.mergeMiddleware = ou;
(function(e) {
  var t = be && be.__createBinding || (Object.create ? function(a, s, c, u) {
    u === void 0 && (u = c), Object.defineProperty(a, u, { enumerable: !0, get: function() {
      return s[c];
    } });
  } : function(a, s, c, u) {
    u === void 0 && (u = c), a[u] = s[c];
  }), n = be && be.__exportStar || function(a, s) {
    for (var c in a)
      c !== "default" && !Object.prototype.hasOwnProperty.call(s, c) && t(s, a, c);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), n(Ut, e), n(Dt, e), n($t, e), n(lt, e), n(ht, e), n(Ht, e);
})(mn);
var En = { exports: {} }, au = function(t) {
  return (n, a, s, c) => {
    const u = t[n.method];
    return u === void 0 ? s() : typeof u == "function" ? u(n, a, s, c) : (a.result = u, c());
  };
};
(function(e) {
  e.exports = au;
})(En);
const Ei = (e, t, n, a) => function(...s) {
  const c = t.promiseModule;
  return new c((u, o) => {
    t.multiArgs ? s.push((..._) => {
      t.errorFirst ? _[0] ? o(_) : (_.shift(), u(_)) : u(_);
    }) : t.errorFirst ? s.push((_, A) => {
      _ ? o(_) : u(A);
    }) : s.push(u), Reflect.apply(e, this === n ? a : this, s);
  });
}, Si = /* @__PURE__ */ new WeakMap();
var su = (e, t) => {
  t = {
    exclude: [/.+(?:Sync|Stream)$/],
    errorFirst: !0,
    promiseModule: Promise,
    ...t
  };
  const n = typeof e;
  if (!(e !== null && (n === "object" || n === "function")))
    throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${e === null ? "null" : n}\``);
  const a = (u, o) => {
    let l = Si.get(u);
    if (l || (l = {}, Si.set(u, l)), o in l)
      return l[o];
    const _ = (m) => typeof m == "string" || typeof o == "symbol" ? o === m : m.test(o), A = Reflect.getOwnPropertyDescriptor(u, o), j = A === void 0 || A.writable || A.configurable, y = (t.include ? t.include.some(_) : !t.exclude.some(_)) && j;
    return l[o] = y, y;
  }, s = /* @__PURE__ */ new WeakMap(), c = new Proxy(e, {
    apply(u, o, l) {
      const _ = s.get(u);
      if (_)
        return Reflect.apply(_, o, l);
      const A = t.excludeMain ? u : Ei(u, t, c, u);
      return s.set(u, A), Reflect.apply(A, o, l);
    },
    get(u, o) {
      const l = u[o];
      if (!a(u, o) || l === Function.prototype[o])
        return l;
      const _ = s.get(l);
      if (_)
        return _;
      if (typeof l == "function") {
        const A = Ei(l, t, c, u);
        return s.set(l, A), A;
      }
      return l;
    }
  });
  return c;
};
const uu = dt.default;
class fu extends uu {
  constructor() {
    super(), this.updates = [];
  }
  async initialize() {
  }
  async update() {
    throw new Error("BaseFilter - no update method specified");
  }
  addResults(t) {
    this.updates = this.updates.concat(t), t.forEach((n) => this.emit("update", n));
  }
  addInitialResults(t) {
  }
  getChangesAndClear() {
    const t = this.updates;
    return this.updates = [], t;
  }
}
var Sn = fu;
const cu = Sn;
class lu extends cu {
  constructor() {
    super(), this.allResults = [];
  }
  async update() {
    throw new Error("BaseFilterWithHistory - no update method specified");
  }
  addResults(t) {
    this.allResults = this.allResults.concat(t), super.addResults(t);
  }
  addInitialResults(t) {
    this.allResults = this.allResults.concat(t), super.addInitialResults(t);
  }
  getAllResults() {
    return this.allResults;
  }
}
var hu = lu, pt = {
  minBlockRef: du,
  maxBlockRef: pu,
  sortBlockRefs: xn,
  bnToHex: yu,
  blockRefIsNumber: gu,
  hexToInt: It,
  incrementHexInt: _u,
  intToHex: yo,
  unsafeRandomBytes: bu
};
function du(...e) {
  return xn(e)[0];
}
function pu(...e) {
  const t = xn(e);
  return t[t.length - 1];
}
function xn(e) {
  return e.sort((t, n) => t === "latest" || n === "earliest" ? 1 : n === "latest" || t === "earliest" ? -1 : It(t) - It(n));
}
function yu(e) {
  return "0x" + e.toString(16);
}
function gu(e) {
  return e && !["earliest", "latest", "pending"].includes(e);
}
function It(e) {
  return e == null ? e : Number.parseInt(e, 16);
}
function _u(e) {
  if (e == null)
    return e;
  const t = It(e);
  return yo(t + 1);
}
function yo(e) {
  if (e == null)
    return e;
  let t = e.toString(16);
  return t.length % 2 && (t = "0" + t), "0x" + t;
}
function bu(e) {
  let t = "0x";
  for (let n = 0; n < e; n++)
    t += xi(), t += xi();
  return t;
}
function xi() {
  return Math.floor(Math.random() * 16).toString(16);
}
const mu = Ms, wu = su, vu = hu, { bnToHex: ff, hexToInt: wt, incrementHexInt: Eu, minBlockRef: Su, blockRefIsNumber: xu } = pt;
class Au extends vu {
  constructor({ provider: t, params: n }) {
    super(), this.type = "log", this.ethQuery = new mu(t), this.params = Object.assign({
      fromBlock: "latest",
      toBlock: "latest",
      address: void 0,
      topics: []
    }, n), this.params.address && (Array.isArray(this.params.address) || (this.params.address = [this.params.address]), this.params.address = this.params.address.map((a) => a.toLowerCase()));
  }
  async initialize({ currentBlock: t }) {
    let n = this.params.fromBlock;
    ["latest", "pending"].includes(n) && (n = t), n === "earliest" && (n = "0x0"), this.params.fromBlock = n;
    const a = Su(this.params.toBlock, t), s = Object.assign({}, this.params, { toBlock: a }), c = await this._fetchLogs(s);
    this.addInitialResults(c);
  }
  async update({ oldBlock: t, newBlock: n }) {
    const a = n;
    let s;
    t ? s = Eu(t) : s = n;
    const c = Object.assign({}, this.params, { fromBlock: s, toBlock: a }), o = (await this._fetchLogs(c)).filter((l) => this.matchLog(l));
    this.addResults(o);
  }
  async _fetchLogs(t) {
    return await wu((a) => this.ethQuery.getLogs(t, a))();
  }
  matchLog(t) {
    if (wt(this.params.fromBlock) >= wt(t.blockNumber) || xu(this.params.toBlock) && wt(this.params.toBlock) <= wt(t.blockNumber))
      return !1;
    const n = t.address && t.address.toLowerCase();
    return this.params.address && n && !this.params.address.includes(n) ? !1 : this.params.topics.every((s, c) => {
      let u = t.topics[c];
      if (!u)
        return !1;
      u = u.toLowerCase();
      let o = Array.isArray(s) ? s : [s];
      return o.includes(null) ? !0 : (o = o.map((A) => A.toLowerCase()), o.includes(u));
    });
  }
}
var Ru = Au, An = Bu;
async function Bu({ provider: e, fromBlock: t, toBlock: n }) {
  t || (t = n);
  const a = Ai(t), c = Ai(n) - a + 1, u = Array(c).fill().map((l, _) => a + _).map(Iu);
  return await Promise.all(
    u.map((l) => Ou(e, "eth_getBlockByNumber", [l, !1]))
  );
}
function Ai(e) {
  return e == null ? e : Number.parseInt(e, 16);
}
function Iu(e) {
  if (e == null)
    return e;
  const t = e.toString(16);
  return "0x" + t;
}
function Ou(e, t, n) {
  return new Promise((a, s) => {
    e.sendAsync({ id: 1, jsonrpc: "2.0", method: t, params: n }, (c, u) => {
      if (c)
        return s(c);
      a(u.result);
    });
  });
}
const Tu = Sn, Pu = An, { incrementHexInt: Fu } = pt;
class Cu extends Tu {
  constructor({ provider: t, params: n }) {
    super(), this.type = "block", this.provider = t;
  }
  async update({ oldBlock: t, newBlock: n }) {
    const a = n, s = Fu(t), u = (await Pu({ provider: this.provider, fromBlock: s, toBlock: a })).map((o) => o.hash);
    this.addResults(u);
  }
}
var Mu = Cu;
const Lu = Sn, ju = An, { incrementHexInt: ku } = pt;
class Nu extends Lu {
  constructor({ provider: t }) {
    super(), this.type = "tx", this.provider = t;
  }
  async update({ oldBlock: t }) {
    const n = t, a = ku(t), s = await ju({ provider: this.provider, fromBlock: a, toBlock: n }), c = [];
    for (const u of s)
      c.push(...u.transactions);
    this.addResults(c);
  }
}
var Uu = Nu;
const Du = io.Mutex, { createAsyncMiddleware: $u } = mn, qu = En.exports, Hu = Ru, Wu = Mu, zu = Uu, { intToHex: go, hexToInt: fn } = pt;
var Gu = Vu;
function Vu({ blockTracker: e, provider: t }) {
  let n = 0, a = {};
  const s = new Du(), c = Ju({ mutex: s }), u = qu({
    eth_newFilter: c(cn(l)),
    eth_newBlockFilter: c(cn(_)),
    eth_newPendingTransactionFilter: c(cn(A)),
    eth_uninstallFilter: c(Et(y)),
    eth_getFilterChanges: c(Et(j)),
    eth_getFilterLogs: c(Et(O))
  }), o = async ({ oldBlock: E, newBlock: F }) => {
    if (a.length === 0)
      return;
    const P = await s.acquire();
    try {
      await Promise.all(ze(a).map(async (T) => {
        try {
          await T.update({ oldBlock: E, newBlock: F });
        } catch (W) {
          console.error(W);
        }
      }));
    } catch (T) {
      console.error(T);
    }
    P();
  };
  return u.newLogFilter = l, u.newBlockFilter = _, u.newPendingTransactionFilter = A, u.uninstallFilter = y, u.getFilterChanges = j, u.getFilterLogs = O, u.destroy = () => {
    J();
  }, u;
  async function l(E) {
    const F = new Hu({ provider: t, params: E });
    return await m(F), F;
  }
  async function _() {
    const E = new Wu({ provider: t });
    return await m(E), E;
  }
  async function A() {
    const E = new zu({ provider: t });
    return await m(E), E;
  }
  async function j(E) {
    const F = fn(E), P = a[F];
    if (!P)
      throw new Error(`No filter for index "${F}"`);
    return P.getChangesAndClear();
  }
  async function O(E) {
    const F = fn(E), P = a[F];
    if (!P)
      throw new Error(`No filter for index "${F}"`);
    return P.type === "log" ? results = P.getAllResults() : results = [], results;
  }
  async function y(E) {
    const F = fn(E), P = a[F], T = Boolean(P);
    return T && await C(F), T;
  }
  async function m(E) {
    const F = ze(a).length, P = await e.getLatestBlock();
    await E.initialize({ currentBlock: P }), n++, a[n] = E, E.id = n, E.idHex = go(n);
    const T = ze(a).length;
    return w({ prevFilterCount: F, newFilterCount: T }), n;
  }
  async function C(E) {
    const F = ze(a).length;
    delete a[E];
    const P = ze(a).length;
    w({ prevFilterCount: F, newFilterCount: P });
  }
  async function J() {
    const E = ze(a).length;
    a = {}, w({ prevFilterCount: E, newFilterCount: 0 });
  }
  function w({ prevFilterCount: E, newFilterCount: F }) {
    if (E === 0 && F > 0) {
      e.on("sync", o);
      return;
    }
    if (E > 0 && F === 0) {
      e.removeListener("sync", o);
      return;
    }
  }
}
function cn(e) {
  return Et(async (...t) => {
    const n = await e(...t);
    return go(n.id);
  });
}
function Et(e) {
  return $u(async (t, n) => {
    const a = await e.apply(null, t.params);
    n.result = a;
  });
}
function Ju({ mutex: e }) {
  return (t) => async (n, a, s, c) => {
    (await e.acquire())(), t(n, a, s, c);
  };
}
function ze(e, t) {
  const n = [];
  for (let a in e)
    n.push(e[a]);
  return n;
}
const Ku = dt.default, Yu = En.exports, { createAsyncMiddleware: Ri } = mn, Xu = Gu, { unsafeRandomBytes: Qu, incrementHexInt: Zu } = pt, ef = An;
var cf = tf;
function tf({ blockTracker: e, provider: t }) {
  const n = {}, a = Xu({ blockTracker: e, provider: t });
  let s = !1;
  const c = new Ku(), u = Yu({
    eth_subscribe: Ri(o),
    eth_unsubscribe: Ri(l)
  });
  return u.destroy = A, { events: c, middleware: u };
  async function o(j, O) {
    if (s)
      throw new Error(
        "SubscriptionManager - attempting to use after destroying"
      );
    const y = j.params[0], m = Qu(16);
    let C;
    switch (y) {
      case "newHeads":
        C = J({ subId: m });
        break;
      case "logs":
        const E = j.params[1], F = await a.newLogFilter(E);
        C = w({ subId: m, filter: F });
        break;
      default:
        throw new Error(`SubscriptionManager - unsupported subscription type "${y}"`);
    }
    n[m] = C, O.result = m;
    return;
    function J({ subId: E }) {
      const F = {
        type: y,
        destroy: async () => {
          e.removeListener("sync", F.update);
        },
        update: async ({ oldBlock: P, newBlock: T }) => {
          const W = T, X = Zu(P);
          (await ef({ provider: t, fromBlock: X, toBlock: W })).map(rf).forEach((I) => {
            _(E, I);
          });
        }
      };
      return e.on("sync", F.update), F;
    }
    function w({ subId: E, filter: F }) {
      return F.on("update", (T) => _(E, T)), {
        type: y,
        destroy: async () => await a.uninstallFilter(F.idHex)
      };
    }
  }
  async function l(j, O) {
    if (s)
      throw new Error(
        "SubscriptionManager - attempting to use after destroying"
      );
    const y = j.params[0], m = n[y];
    if (!m) {
      O.result = !1;
      return;
    }
    delete n[y], await m.destroy(), O.result = !0;
  }
  function _(j, O) {
    c.emit("notification", {
      jsonrpc: "2.0",
      method: "eth_subscription",
      params: {
        subscription: j,
        result: O
      }
    });
  }
  function A() {
    c.removeAllListeners();
    for (const j in n)
      n[j].destroy(), delete n[j];
    s = !0;
  }
}
function rf(e) {
  return {
    hash: e.hash,
    parentHash: e.parentHash,
    sha3Uncles: e.sha3Uncles,
    miner: e.miner,
    stateRoot: e.stateRoot,
    transactionsRoot: e.transactionsRoot,
    receiptsRoot: e.receiptsRoot,
    logsBloom: e.logsBloom,
    difficulty: e.difficulty,
    number: e.number,
    gasLimit: e.gasLimit,
    gasUsed: e.gasUsed,
    nonce: e.nonce,
    mixHash: e.mixHash,
    timestamp: e.timestamp,
    extraData: e.extraData
  };
}
export {
  mo as a,
  Ne as b,
  Go as c,
  Tt as d,
  Jn as e,
  qe as f,
  yn as g,
  Ti as h,
  Qe as i,
  sf as j,
  At as k,
  Os as l,
  uf as m,
  Gu as n,
  cf as o,
  Ys as p,
  gn as q,
  bo as r,
  ja as s,
  _o as t,
  dt as u
};
