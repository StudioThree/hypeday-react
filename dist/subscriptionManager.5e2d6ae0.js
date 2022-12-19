import { c as me, b as fe } from "./index.9de5637c.js";
import { a as Re, r as $i } from "./bn.62e28504.js";
var No = { exports: {} };
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
  var t, r, o, a, c, u, s, l, b, E, O, S, y, w, I, k, v, T, j, K, J, oe, ae;
  (function(X) {
    var ee = typeof me == "object" ? me : typeof self == "object" ? self : typeof this == "object" ? this : {};
    X(P(ee, P(e.exports)));
    function P(D, q) {
      return D !== ee && (typeof Object.create == "function" ? Object.defineProperty(D, "__esModule", { value: !0 }) : D.__esModule = !0), function(m, A) {
        return D[m] = q ? q(m, A) : A;
      };
    }
  })(function(X) {
    var ee = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(P, D) {
      P.__proto__ = D;
    } || function(P, D) {
      for (var q in D)
        D.hasOwnProperty(q) && (P[q] = D[q]);
    };
    t = function(P, D) {
      ee(P, D);
      function q() {
        this.constructor = P;
      }
      P.prototype = D === null ? Object.create(D) : (q.prototype = D.prototype, new q());
    }, r = Object.assign || function(P) {
      for (var D, q = 1, m = arguments.length; q < m; q++) {
        D = arguments[q];
        for (var A in D)
          Object.prototype.hasOwnProperty.call(D, A) && (P[A] = D[A]);
      }
      return P;
    }, o = function(P, D) {
      var q = {};
      for (var m in P)
        Object.prototype.hasOwnProperty.call(P, m) && D.indexOf(m) < 0 && (q[m] = P[m]);
      if (P != null && typeof Object.getOwnPropertySymbols == "function")
        for (var A = 0, m = Object.getOwnPropertySymbols(P); A < m.length; A++)
          D.indexOf(m[A]) < 0 && Object.prototype.propertyIsEnumerable.call(P, m[A]) && (q[m[A]] = P[m[A]]);
      return q;
    }, a = function(P, D, q, m) {
      var A = arguments.length, _ = A < 3 ? D : m === null ? m = Object.getOwnPropertyDescriptor(D, q) : m, F;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        _ = Reflect.decorate(P, D, q, m);
      else
        for (var N = P.length - 1; N >= 0; N--)
          (F = P[N]) && (_ = (A < 3 ? F(_) : A > 3 ? F(D, q, _) : F(D, q)) || _);
      return A > 3 && _ && Object.defineProperty(D, q, _), _;
    }, c = function(P, D) {
      return function(q, m) {
        D(q, m, P);
      };
    }, u = function(P, D) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(P, D);
    }, s = function(P, D, q, m) {
      function A(_) {
        return _ instanceof q ? _ : new q(function(F) {
          F(_);
        });
      }
      return new (q || (q = Promise))(function(_, F) {
        function N(te) {
          try {
            G(m.next(te));
          } catch (re) {
            F(re);
          }
        }
        function H(te) {
          try {
            G(m.throw(te));
          } catch (re) {
            F(re);
          }
        }
        function G(te) {
          te.done ? _(te.value) : A(te.value).then(N, H);
        }
        G((m = m.apply(P, D || [])).next());
      });
    }, l = function(P, D) {
      var q = { label: 0, sent: function() {
        if (_[0] & 1)
          throw _[1];
        return _[1];
      }, trys: [], ops: [] }, m, A, _, F;
      return F = { next: N(0), throw: N(1), return: N(2) }, typeof Symbol == "function" && (F[Symbol.iterator] = function() {
        return this;
      }), F;
      function N(G) {
        return function(te) {
          return H([G, te]);
        };
      }
      function H(G) {
        if (m)
          throw new TypeError("Generator is already executing.");
        for (; q; )
          try {
            if (m = 1, A && (_ = G[0] & 2 ? A.return : G[0] ? A.throw || ((_ = A.return) && _.call(A), 0) : A.next) && !(_ = _.call(A, G[1])).done)
              return _;
            switch (A = 0, _ && (G = [G[0] & 2, _.value]), G[0]) {
              case 0:
              case 1:
                _ = G;
                break;
              case 4:
                return q.label++, { value: G[1], done: !1 };
              case 5:
                q.label++, A = G[1], G = [0];
                continue;
              case 7:
                G = q.ops.pop(), q.trys.pop();
                continue;
              default:
                if (_ = q.trys, !(_ = _.length > 0 && _[_.length - 1]) && (G[0] === 6 || G[0] === 2)) {
                  q = 0;
                  continue;
                }
                if (G[0] === 3 && (!_ || G[1] > _[0] && G[1] < _[3])) {
                  q.label = G[1];
                  break;
                }
                if (G[0] === 6 && q.label < _[1]) {
                  q.label = _[1], _ = G;
                  break;
                }
                if (_ && q.label < _[2]) {
                  q.label = _[2], q.ops.push(G);
                  break;
                }
                _[2] && q.ops.pop(), q.trys.pop();
                continue;
            }
            G = D.call(P, q);
          } catch (te) {
            G = [6, te], A = 0;
          } finally {
            m = _ = 0;
          }
        if (G[0] & 5)
          throw G[1];
        return { value: G[0] ? G[1] : void 0, done: !0 };
      }
    }, ae = function(P, D, q, m) {
      m === void 0 && (m = q), P[m] = D[q];
    }, b = function(P, D) {
      for (var q in P)
        q !== "default" && !D.hasOwnProperty(q) && (D[q] = P[q]);
    }, E = function(P) {
      var D = typeof Symbol == "function" && Symbol.iterator, q = D && P[D], m = 0;
      if (q)
        return q.call(P);
      if (P && typeof P.length == "number")
        return {
          next: function() {
            return P && m >= P.length && (P = void 0), { value: P && P[m++], done: !P };
          }
        };
      throw new TypeError(D ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }, O = function(P, D) {
      var q = typeof Symbol == "function" && P[Symbol.iterator];
      if (!q)
        return P;
      var m = q.call(P), A, _ = [], F;
      try {
        for (; (D === void 0 || D-- > 0) && !(A = m.next()).done; )
          _.push(A.value);
      } catch (N) {
        F = { error: N };
      } finally {
        try {
          A && !A.done && (q = m.return) && q.call(m);
        } finally {
          if (F)
            throw F.error;
        }
      }
      return _;
    }, S = function() {
      for (var P = [], D = 0; D < arguments.length; D++)
        P = P.concat(O(arguments[D]));
      return P;
    }, y = function() {
      for (var P = 0, D = 0, q = arguments.length; D < q; D++)
        P += arguments[D].length;
      for (var m = Array(P), A = 0, D = 0; D < q; D++)
        for (var _ = arguments[D], F = 0, N = _.length; F < N; F++, A++)
          m[A] = _[F];
      return m;
    }, w = function(P) {
      return this instanceof w ? (this.v = P, this) : new w(P);
    }, I = function(P, D, q) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = q.apply(P, D || []), A, _ = [];
      return A = {}, F("next"), F("throw"), F("return"), A[Symbol.asyncIterator] = function() {
        return this;
      }, A;
      function F(g) {
        m[g] && (A[g] = function(M) {
          return new Promise(function(W, Q) {
            _.push([g, M, W, Q]) > 1 || N(g, M);
          });
        });
      }
      function N(g, M) {
        try {
          H(m[g](M));
        } catch (W) {
          re(_[0][3], W);
        }
      }
      function H(g) {
        g.value instanceof w ? Promise.resolve(g.value.v).then(G, te) : re(_[0][2], g);
      }
      function G(g) {
        N("next", g);
      }
      function te(g) {
        N("throw", g);
      }
      function re(g, M) {
        g(M), _.shift(), _.length && N(_[0][0], _[0][1]);
      }
    }, k = function(P) {
      var D, q;
      return D = {}, m("next"), m("throw", function(A) {
        throw A;
      }), m("return"), D[Symbol.iterator] = function() {
        return this;
      }, D;
      function m(A, _) {
        D[A] = P[A] ? function(F) {
          return (q = !q) ? { value: w(P[A](F)), done: A === "return" } : _ ? _(F) : F;
        } : _;
      }
    }, v = function(P) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var D = P[Symbol.asyncIterator], q;
      return D ? D.call(P) : (P = typeof E == "function" ? E(P) : P[Symbol.iterator](), q = {}, m("next"), m("throw"), m("return"), q[Symbol.asyncIterator] = function() {
        return this;
      }, q);
      function m(_) {
        q[_] = P[_] && function(F) {
          return new Promise(function(N, H) {
            F = P[_](F), A(N, H, F.done, F.value);
          });
        };
      }
      function A(_, F, N, H) {
        Promise.resolve(H).then(function(G) {
          _({ value: G, done: N });
        }, F);
      }
    }, T = function(P, D) {
      return Object.defineProperty ? Object.defineProperty(P, "raw", { value: D }) : P.raw = D, P;
    }, j = function(P) {
      if (P && P.__esModule)
        return P;
      var D = {};
      if (P != null)
        for (var q in P)
          Object.hasOwnProperty.call(P, q) && (D[q] = P[q]);
      return D.default = P, D;
    }, K = function(P) {
      return P && P.__esModule ? P : { default: P };
    }, J = function(P, D) {
      if (!D.has(P))
        throw new TypeError("attempted to get private field on non-instance");
      return D.get(P);
    }, oe = function(P, D, q) {
      if (!D.has(P))
        throw new TypeError("attempted to set private field on non-instance");
      return D.set(P, q), q;
    }, X("__extends", t), X("__assign", r), X("__rest", o), X("__decorate", a), X("__param", c), X("__metadata", u), X("__awaiter", s), X("__generator", l), X("__exportStar", b), X("__createBinding", ae), X("__values", E), X("__read", O), X("__spread", S), X("__spreadArrays", y), X("__await", w), X("__asyncGenerator", I), X("__asyncDelegator", k), X("__asyncValues", v), X("__makeTemplateObject", T), X("__importStar", j), X("__importDefault", K), X("__classPrivateFieldGet", J), X("__classPrivateFieldSet", oe);
  });
})(No);
var Tr = {}, nt = {}, In;
function Uo() {
  if (In)
    return nt;
  In = 1, nt.byteLength = s, nt.toByteArray = b, nt.fromByteArray = S;
  for (var e = [], t = [], r = typeof Uint8Array < "u" ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, c = o.length; a < c; ++a)
    e[a] = o[a], t[o.charCodeAt(a)] = a;
  t["-".charCodeAt(0)] = 62, t["_".charCodeAt(0)] = 63;
  function u(y) {
    var w = y.length;
    if (w % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var I = y.indexOf("=");
    I === -1 && (I = w);
    var k = I === w ? 0 : 4 - I % 4;
    return [I, k];
  }
  function s(y) {
    var w = u(y), I = w[0], k = w[1];
    return (I + k) * 3 / 4 - k;
  }
  function l(y, w, I) {
    return (w + I) * 3 / 4 - I;
  }
  function b(y) {
    var w, I = u(y), k = I[0], v = I[1], T = new r(l(y, k, v)), j = 0, K = v > 0 ? k - 4 : k, J;
    for (J = 0; J < K; J += 4)
      w = t[y.charCodeAt(J)] << 18 | t[y.charCodeAt(J + 1)] << 12 | t[y.charCodeAt(J + 2)] << 6 | t[y.charCodeAt(J + 3)], T[j++] = w >> 16 & 255, T[j++] = w >> 8 & 255, T[j++] = w & 255;
    return v === 2 && (w = t[y.charCodeAt(J)] << 2 | t[y.charCodeAt(J + 1)] >> 4, T[j++] = w & 255), v === 1 && (w = t[y.charCodeAt(J)] << 10 | t[y.charCodeAt(J + 1)] << 4 | t[y.charCodeAt(J + 2)] >> 2, T[j++] = w >> 8 & 255, T[j++] = w & 255), T;
  }
  function E(y) {
    return e[y >> 18 & 63] + e[y >> 12 & 63] + e[y >> 6 & 63] + e[y & 63];
  }
  function O(y, w, I) {
    for (var k, v = [], T = w; T < I; T += 3)
      k = (y[T] << 16 & 16711680) + (y[T + 1] << 8 & 65280) + (y[T + 2] & 255), v.push(E(k));
    return v.join("");
  }
  function S(y) {
    for (var w, I = y.length, k = I % 3, v = [], T = 16383, j = 0, K = I - k; j < K; j += T)
      v.push(O(y, j, j + T > K ? K : j + T));
    return k === 1 ? (w = y[I - 1], v.push(
      e[w >> 2] + e[w << 4 & 63] + "=="
    )) : k === 2 && (w = (y[I - 2] << 8) + y[I - 1], v.push(
      e[w >> 10] + e[w >> 4 & 63] + e[w << 2 & 63] + "="
    )), v.join("");
  }
  return nt;
}
var bt = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
var Fn;
function Do() {
  return Fn || (Fn = 1, bt.read = function(e, t, r, o, a) {
    var c, u, s = a * 8 - o - 1, l = (1 << s) - 1, b = l >> 1, E = -7, O = r ? a - 1 : 0, S = r ? -1 : 1, y = e[t + O];
    for (O += S, c = y & (1 << -E) - 1, y >>= -E, E += s; E > 0; c = c * 256 + e[t + O], O += S, E -= 8)
      ;
    for (u = c & (1 << -E) - 1, c >>= -E, E += o; E > 0; u = u * 256 + e[t + O], O += S, E -= 8)
      ;
    if (c === 0)
      c = 1 - b;
    else {
      if (c === l)
        return u ? NaN : (y ? -1 : 1) * (1 / 0);
      u = u + Math.pow(2, o), c = c - b;
    }
    return (y ? -1 : 1) * u * Math.pow(2, c - o);
  }, bt.write = function(e, t, r, o, a, c) {
    var u, s, l, b = c * 8 - a - 1, E = (1 << b) - 1, O = E >> 1, S = a === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, y = o ? 0 : c - 1, w = o ? 1 : -1, I = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
    for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, u = E) : (u = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -u)) < 1 && (u--, l *= 2), u + O >= 1 ? t += S / l : t += S * Math.pow(2, 1 - O), t * l >= 2 && (u++, l /= 2), u + O >= E ? (s = 0, u = E) : u + O >= 1 ? (s = (t * l - 1) * Math.pow(2, a), u = u + O) : (s = t * Math.pow(2, O - 1) * Math.pow(2, a), u = 0)); a >= 8; e[r + y] = s & 255, y += w, s /= 256, a -= 8)
      ;
    for (u = u << a | s, b += a; b > 0; e[r + y] = u & 255, y += w, u /= 256, b -= 8)
      ;
    e[r + y - w] |= I * 128;
  }), bt;
}
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var Pn;
function Ze() {
  return Pn || (Pn = 1, function(e) {
    const t = Uo(), r = Do(), o = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    e.Buffer = s, e.SlowBuffer = T, e.INSPECT_MAX_BYTES = 50;
    const a = 2147483647;
    e.kMaxLength = a, s.TYPED_ARRAY_SUPPORT = c(), !s.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
    );
    function c() {
      try {
        const f = new Uint8Array(1), n = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(n, Uint8Array.prototype), Object.setPrototypeOf(f, n), f.foo() === 42;
      } catch {
        return !1;
      }
    }
    Object.defineProperty(s.prototype, "parent", {
      enumerable: !0,
      get: function() {
        if (!!s.isBuffer(this))
          return this.buffer;
      }
    }), Object.defineProperty(s.prototype, "offset", {
      enumerable: !0,
      get: function() {
        if (!!s.isBuffer(this))
          return this.byteOffset;
      }
    });
    function u(f) {
      if (f > a)
        throw new RangeError('The value "' + f + '" is invalid for option "size"');
      const n = new Uint8Array(f);
      return Object.setPrototypeOf(n, s.prototype), n;
    }
    function s(f, n, i) {
      if (typeof f == "number") {
        if (typeof n == "string")
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        return O(f);
      }
      return l(f, n, i);
    }
    s.poolSize = 8192;
    function l(f, n, i) {
      if (typeof f == "string")
        return S(f, n);
      if (ArrayBuffer.isView(f))
        return w(f);
      if (f == null)
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof f
        );
      if (we(f, ArrayBuffer) || f && we(f.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (we(f, SharedArrayBuffer) || f && we(f.buffer, SharedArrayBuffer)))
        return I(f, n, i);
      if (typeof f == "number")
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      const d = f.valueOf && f.valueOf();
      if (d != null && d !== f)
        return s.from(d, n, i);
      const B = k(f);
      if (B)
        return B;
      if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof f[Symbol.toPrimitive] == "function")
        return s.from(f[Symbol.toPrimitive]("string"), n, i);
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof f
      );
    }
    s.from = function(f, n, i) {
      return l(f, n, i);
    }, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array);
    function b(f) {
      if (typeof f != "number")
        throw new TypeError('"size" argument must be of type number');
      if (f < 0)
        throw new RangeError('The value "' + f + '" is invalid for option "size"');
    }
    function E(f, n, i) {
      return b(f), f <= 0 ? u(f) : n !== void 0 ? typeof i == "string" ? u(f).fill(n, i) : u(f).fill(n) : u(f);
    }
    s.alloc = function(f, n, i) {
      return E(f, n, i);
    };
    function O(f) {
      return b(f), u(f < 0 ? 0 : v(f) | 0);
    }
    s.allocUnsafe = function(f) {
      return O(f);
    }, s.allocUnsafeSlow = function(f) {
      return O(f);
    };
    function S(f, n) {
      if ((typeof n != "string" || n === "") && (n = "utf8"), !s.isEncoding(n))
        throw new TypeError("Unknown encoding: " + n);
      const i = j(f, n) | 0;
      let d = u(i);
      const B = d.write(f, n);
      return B !== i && (d = d.slice(0, B)), d;
    }
    function y(f) {
      const n = f.length < 0 ? 0 : v(f.length) | 0, i = u(n);
      for (let d = 0; d < n; d += 1)
        i[d] = f[d] & 255;
      return i;
    }
    function w(f) {
      if (we(f, Uint8Array)) {
        const n = new Uint8Array(f);
        return I(n.buffer, n.byteOffset, n.byteLength);
      }
      return y(f);
    }
    function I(f, n, i) {
      if (n < 0 || f.byteLength < n)
        throw new RangeError('"offset" is outside of buffer bounds');
      if (f.byteLength < n + (i || 0))
        throw new RangeError('"length" is outside of buffer bounds');
      let d;
      return n === void 0 && i === void 0 ? d = new Uint8Array(f) : i === void 0 ? d = new Uint8Array(f, n) : d = new Uint8Array(f, n, i), Object.setPrototypeOf(d, s.prototype), d;
    }
    function k(f) {
      if (s.isBuffer(f)) {
        const n = v(f.length) | 0, i = u(n);
        return i.length === 0 || f.copy(i, 0, 0, n), i;
      }
      if (f.length !== void 0)
        return typeof f.length != "number" || Ie(f.length) ? u(0) : y(f);
      if (f.type === "Buffer" && Array.isArray(f.data))
        return y(f.data);
    }
    function v(f) {
      if (f >= a)
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
      return f | 0;
    }
    function T(f) {
      return +f != f && (f = 0), s.alloc(+f);
    }
    s.isBuffer = function(n) {
      return n != null && n._isBuffer === !0 && n !== s.prototype;
    }, s.compare = function(n, i) {
      if (we(n, Uint8Array) && (n = s.from(n, n.offset, n.byteLength)), we(i, Uint8Array) && (i = s.from(i, i.offset, i.byteLength)), !s.isBuffer(n) || !s.isBuffer(i))
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      if (n === i)
        return 0;
      let d = n.length, B = i.length;
      for (let C = 0, U = Math.min(d, B); C < U; ++C)
        if (n[C] !== i[C]) {
          d = n[C], B = i[C];
          break;
        }
      return d < B ? -1 : B < d ? 1 : 0;
    }, s.isEncoding = function(n) {
      switch (String(n).toLowerCase()) {
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
    }, s.concat = function(n, i) {
      if (!Array.isArray(n))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (n.length === 0)
        return s.alloc(0);
      let d;
      if (i === void 0)
        for (i = 0, d = 0; d < n.length; ++d)
          i += n[d].length;
      const B = s.allocUnsafe(i);
      let C = 0;
      for (d = 0; d < n.length; ++d) {
        let U = n[d];
        if (we(U, Uint8Array))
          C + U.length > B.length ? (s.isBuffer(U) || (U = s.from(U)), U.copy(B, C)) : Uint8Array.prototype.set.call(
            B,
            U,
            C
          );
        else if (s.isBuffer(U))
          U.copy(B, C);
        else
          throw new TypeError('"list" argument must be an Array of Buffers');
        C += U.length;
      }
      return B;
    };
    function j(f, n) {
      if (s.isBuffer(f))
        return f.length;
      if (ArrayBuffer.isView(f) || we(f, ArrayBuffer))
        return f.byteLength;
      if (typeof f != "string")
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof f
        );
      const i = f.length, d = arguments.length > 2 && arguments[2] === !0;
      if (!d && i === 0)
        return 0;
      let B = !1;
      for (; ; )
        switch (n) {
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
            return Te(f).length;
          default:
            if (B)
              return d ? -1 : ce(f).length;
            n = ("" + n).toLowerCase(), B = !0;
        }
    }
    s.byteLength = j;
    function K(f, n, i) {
      let d = !1;
      if ((n === void 0 || n < 0) && (n = 0), n > this.length || ((i === void 0 || i > this.length) && (i = this.length), i <= 0) || (i >>>= 0, n >>>= 0, i <= n))
        return "";
      for (f || (f = "utf8"); ; )
        switch (f) {
          case "hex":
            return G(this, n, i);
          case "utf8":
          case "utf-8":
            return A(this, n, i);
          case "ascii":
            return N(this, n, i);
          case "latin1":
          case "binary":
            return H(this, n, i);
          case "base64":
            return m(this, n, i);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return te(this, n, i);
          default:
            if (d)
              throw new TypeError("Unknown encoding: " + f);
            f = (f + "").toLowerCase(), d = !0;
        }
    }
    s.prototype._isBuffer = !0;
    function J(f, n, i) {
      const d = f[n];
      f[n] = f[i], f[i] = d;
    }
    s.prototype.swap16 = function() {
      const n = this.length;
      if (n % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let i = 0; i < n; i += 2)
        J(this, i, i + 1);
      return this;
    }, s.prototype.swap32 = function() {
      const n = this.length;
      if (n % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let i = 0; i < n; i += 4)
        J(this, i, i + 3), J(this, i + 1, i + 2);
      return this;
    }, s.prototype.swap64 = function() {
      const n = this.length;
      if (n % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let i = 0; i < n; i += 8)
        J(this, i, i + 7), J(this, i + 1, i + 6), J(this, i + 2, i + 5), J(this, i + 3, i + 4);
      return this;
    }, s.prototype.toString = function() {
      const n = this.length;
      return n === 0 ? "" : arguments.length === 0 ? A(this, 0, n) : K.apply(this, arguments);
    }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(n) {
      if (!s.isBuffer(n))
        throw new TypeError("Argument must be a Buffer");
      return this === n ? !0 : s.compare(this, n) === 0;
    }, s.prototype.inspect = function() {
      let n = "";
      const i = e.INSPECT_MAX_BYTES;
      return n = this.toString("hex", 0, i).replace(/(.{2})/g, "$1 ").trim(), this.length > i && (n += " ... "), "<Buffer " + n + ">";
    }, o && (s.prototype[o] = s.prototype.inspect), s.prototype.compare = function(n, i, d, B, C) {
      if (we(n, Uint8Array) && (n = s.from(n, n.offset, n.byteLength)), !s.isBuffer(n))
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof n
        );
      if (i === void 0 && (i = 0), d === void 0 && (d = n ? n.length : 0), B === void 0 && (B = 0), C === void 0 && (C = this.length), i < 0 || d > n.length || B < 0 || C > this.length)
        throw new RangeError("out of range index");
      if (B >= C && i >= d)
        return 0;
      if (B >= C)
        return -1;
      if (i >= d)
        return 1;
      if (i >>>= 0, d >>>= 0, B >>>= 0, C >>>= 0, this === n)
        return 0;
      let U = C - B, se = d - i;
      const ge = Math.min(U, se), pe = this.slice(B, C), _e = n.slice(i, d);
      for (let de = 0; de < ge; ++de)
        if (pe[de] !== _e[de]) {
          U = pe[de], se = _e[de];
          break;
        }
      return U < se ? -1 : se < U ? 1 : 0;
    };
    function oe(f, n, i, d, B) {
      if (f.length === 0)
        return -1;
      if (typeof i == "string" ? (d = i, i = 0) : i > 2147483647 ? i = 2147483647 : i < -2147483648 && (i = -2147483648), i = +i, Ie(i) && (i = B ? 0 : f.length - 1), i < 0 && (i = f.length + i), i >= f.length) {
        if (B)
          return -1;
        i = f.length - 1;
      } else if (i < 0)
        if (B)
          i = 0;
        else
          return -1;
      if (typeof n == "string" && (n = s.from(n, d)), s.isBuffer(n))
        return n.length === 0 ? -1 : ae(f, n, i, d, B);
      if (typeof n == "number")
        return n = n & 255, typeof Uint8Array.prototype.indexOf == "function" ? B ? Uint8Array.prototype.indexOf.call(f, n, i) : Uint8Array.prototype.lastIndexOf.call(f, n, i) : ae(f, [n], i, d, B);
      throw new TypeError("val must be string, number or Buffer");
    }
    function ae(f, n, i, d, B) {
      let C = 1, U = f.length, se = n.length;
      if (d !== void 0 && (d = String(d).toLowerCase(), d === "ucs2" || d === "ucs-2" || d === "utf16le" || d === "utf-16le")) {
        if (f.length < 2 || n.length < 2)
          return -1;
        C = 2, U /= 2, se /= 2, i /= 2;
      }
      function ge(_e, de) {
        return C === 1 ? _e[de] : _e.readUInt16BE(de * C);
      }
      let pe;
      if (B) {
        let _e = -1;
        for (pe = i; pe < U; pe++)
          if (ge(f, pe) === ge(n, _e === -1 ? 0 : pe - _e)) {
            if (_e === -1 && (_e = pe), pe - _e + 1 === se)
              return _e * C;
          } else
            _e !== -1 && (pe -= pe - _e), _e = -1;
      } else
        for (i + se > U && (i = U - se), pe = i; pe >= 0; pe--) {
          let _e = !0;
          for (let de = 0; de < se; de++)
            if (ge(f, pe + de) !== ge(n, de)) {
              _e = !1;
              break;
            }
          if (_e)
            return pe;
        }
      return -1;
    }
    s.prototype.includes = function(n, i, d) {
      return this.indexOf(n, i, d) !== -1;
    }, s.prototype.indexOf = function(n, i, d) {
      return oe(this, n, i, d, !0);
    }, s.prototype.lastIndexOf = function(n, i, d) {
      return oe(this, n, i, d, !1);
    };
    function X(f, n, i, d) {
      i = Number(i) || 0;
      const B = f.length - i;
      d ? (d = Number(d), d > B && (d = B)) : d = B;
      const C = n.length;
      d > C / 2 && (d = C / 2);
      let U;
      for (U = 0; U < d; ++U) {
        const se = parseInt(n.substr(U * 2, 2), 16);
        if (Ie(se))
          return U;
        f[i + U] = se;
      }
      return U;
    }
    function ee(f, n, i, d) {
      return Oe(ce(n, f.length - i), f, i, d);
    }
    function P(f, n, i, d) {
      return Oe(Se(n), f, i, d);
    }
    function D(f, n, i, d) {
      return Oe(Te(n), f, i, d);
    }
    function q(f, n, i, d) {
      return Oe($(n, f.length - i), f, i, d);
    }
    s.prototype.write = function(n, i, d, B) {
      if (i === void 0)
        B = "utf8", d = this.length, i = 0;
      else if (d === void 0 && typeof i == "string")
        B = i, d = this.length, i = 0;
      else if (isFinite(i))
        i = i >>> 0, isFinite(d) ? (d = d >>> 0, B === void 0 && (B = "utf8")) : (B = d, d = void 0);
      else
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      const C = this.length - i;
      if ((d === void 0 || d > C) && (d = C), n.length > 0 && (d < 0 || i < 0) || i > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      B || (B = "utf8");
      let U = !1;
      for (; ; )
        switch (B) {
          case "hex":
            return X(this, n, i, d);
          case "utf8":
          case "utf-8":
            return ee(this, n, i, d);
          case "ascii":
          case "latin1":
          case "binary":
            return P(this, n, i, d);
          case "base64":
            return D(this, n, i, d);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return q(this, n, i, d);
          default:
            if (U)
              throw new TypeError("Unknown encoding: " + B);
            B = ("" + B).toLowerCase(), U = !0;
        }
    }, s.prototype.toJSON = function() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function m(f, n, i) {
      return n === 0 && i === f.length ? t.fromByteArray(f) : t.fromByteArray(f.slice(n, i));
    }
    function A(f, n, i) {
      i = Math.min(f.length, i);
      const d = [];
      let B = n;
      for (; B < i; ) {
        const C = f[B];
        let U = null, se = C > 239 ? 4 : C > 223 ? 3 : C > 191 ? 2 : 1;
        if (B + se <= i) {
          let ge, pe, _e, de;
          switch (se) {
            case 1:
              C < 128 && (U = C);
              break;
            case 2:
              ge = f[B + 1], (ge & 192) === 128 && (de = (C & 31) << 6 | ge & 63, de > 127 && (U = de));
              break;
            case 3:
              ge = f[B + 1], pe = f[B + 2], (ge & 192) === 128 && (pe & 192) === 128 && (de = (C & 15) << 12 | (ge & 63) << 6 | pe & 63, de > 2047 && (de < 55296 || de > 57343) && (U = de));
              break;
            case 4:
              ge = f[B + 1], pe = f[B + 2], _e = f[B + 3], (ge & 192) === 128 && (pe & 192) === 128 && (_e & 192) === 128 && (de = (C & 15) << 18 | (ge & 63) << 12 | (pe & 63) << 6 | _e & 63, de > 65535 && de < 1114112 && (U = de));
          }
        }
        U === null ? (U = 65533, se = 1) : U > 65535 && (U -= 65536, d.push(U >>> 10 & 1023 | 55296), U = 56320 | U & 1023), d.push(U), B += se;
      }
      return F(d);
    }
    const _ = 4096;
    function F(f) {
      const n = f.length;
      if (n <= _)
        return String.fromCharCode.apply(String, f);
      let i = "", d = 0;
      for (; d < n; )
        i += String.fromCharCode.apply(
          String,
          f.slice(d, d += _)
        );
      return i;
    }
    function N(f, n, i) {
      let d = "";
      i = Math.min(f.length, i);
      for (let B = n; B < i; ++B)
        d += String.fromCharCode(f[B] & 127);
      return d;
    }
    function H(f, n, i) {
      let d = "";
      i = Math.min(f.length, i);
      for (let B = n; B < i; ++B)
        d += String.fromCharCode(f[B]);
      return d;
    }
    function G(f, n, i) {
      const d = f.length;
      (!n || n < 0) && (n = 0), (!i || i < 0 || i > d) && (i = d);
      let B = "";
      for (let C = n; C < i; ++C)
        B += Me[f[C]];
      return B;
    }
    function te(f, n, i) {
      const d = f.slice(n, i);
      let B = "";
      for (let C = 0; C < d.length - 1; C += 2)
        B += String.fromCharCode(d[C] + d[C + 1] * 256);
      return B;
    }
    s.prototype.slice = function(n, i) {
      const d = this.length;
      n = ~~n, i = i === void 0 ? d : ~~i, n < 0 ? (n += d, n < 0 && (n = 0)) : n > d && (n = d), i < 0 ? (i += d, i < 0 && (i = 0)) : i > d && (i = d), i < n && (i = n);
      const B = this.subarray(n, i);
      return Object.setPrototypeOf(B, s.prototype), B;
    };
    function re(f, n, i) {
      if (f % 1 !== 0 || f < 0)
        throw new RangeError("offset is not uint");
      if (f + n > i)
        throw new RangeError("Trying to access beyond buffer length");
    }
    s.prototype.readUintLE = s.prototype.readUIntLE = function(n, i, d) {
      n = n >>> 0, i = i >>> 0, d || re(n, i, this.length);
      let B = this[n], C = 1, U = 0;
      for (; ++U < i && (C *= 256); )
        B += this[n + U] * C;
      return B;
    }, s.prototype.readUintBE = s.prototype.readUIntBE = function(n, i, d) {
      n = n >>> 0, i = i >>> 0, d || re(n, i, this.length);
      let B = this[n + --i], C = 1;
      for (; i > 0 && (C *= 256); )
        B += this[n + --i] * C;
      return B;
    }, s.prototype.readUint8 = s.prototype.readUInt8 = function(n, i) {
      return n = n >>> 0, i || re(n, 1, this.length), this[n];
    }, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(n, i) {
      return n = n >>> 0, i || re(n, 2, this.length), this[n] | this[n + 1] << 8;
    }, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(n, i) {
      return n = n >>> 0, i || re(n, 2, this.length), this[n] << 8 | this[n + 1];
    }, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(n, i) {
      return n = n >>> 0, i || re(n, 4, this.length), (this[n] | this[n + 1] << 8 | this[n + 2] << 16) + this[n + 3] * 16777216;
    }, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(n, i) {
      return n = n >>> 0, i || re(n, 4, this.length), this[n] * 16777216 + (this[n + 1] << 16 | this[n + 2] << 8 | this[n + 3]);
    }, s.prototype.readBigUInt64LE = Ee(function(n) {
      n = n >>> 0, z(n, "offset");
      const i = this[n], d = this[n + 7];
      (i === void 0 || d === void 0) && Y(n, this.length - 8);
      const B = i + this[++n] * 2 ** 8 + this[++n] * 2 ** 16 + this[++n] * 2 ** 24, C = this[++n] + this[++n] * 2 ** 8 + this[++n] * 2 ** 16 + d * 2 ** 24;
      return BigInt(B) + (BigInt(C) << BigInt(32));
    }), s.prototype.readBigUInt64BE = Ee(function(n) {
      n = n >>> 0, z(n, "offset");
      const i = this[n], d = this[n + 7];
      (i === void 0 || d === void 0) && Y(n, this.length - 8);
      const B = i * 2 ** 24 + this[++n] * 2 ** 16 + this[++n] * 2 ** 8 + this[++n], C = this[++n] * 2 ** 24 + this[++n] * 2 ** 16 + this[++n] * 2 ** 8 + d;
      return (BigInt(B) << BigInt(32)) + BigInt(C);
    }), s.prototype.readIntLE = function(n, i, d) {
      n = n >>> 0, i = i >>> 0, d || re(n, i, this.length);
      let B = this[n], C = 1, U = 0;
      for (; ++U < i && (C *= 256); )
        B += this[n + U] * C;
      return C *= 128, B >= C && (B -= Math.pow(2, 8 * i)), B;
    }, s.prototype.readIntBE = function(n, i, d) {
      n = n >>> 0, i = i >>> 0, d || re(n, i, this.length);
      let B = i, C = 1, U = this[n + --B];
      for (; B > 0 && (C *= 256); )
        U += this[n + --B] * C;
      return C *= 128, U >= C && (U -= Math.pow(2, 8 * i)), U;
    }, s.prototype.readInt8 = function(n, i) {
      return n = n >>> 0, i || re(n, 1, this.length), this[n] & 128 ? (255 - this[n] + 1) * -1 : this[n];
    }, s.prototype.readInt16LE = function(n, i) {
      n = n >>> 0, i || re(n, 2, this.length);
      const d = this[n] | this[n + 1] << 8;
      return d & 32768 ? d | 4294901760 : d;
    }, s.prototype.readInt16BE = function(n, i) {
      n = n >>> 0, i || re(n, 2, this.length);
      const d = this[n + 1] | this[n] << 8;
      return d & 32768 ? d | 4294901760 : d;
    }, s.prototype.readInt32LE = function(n, i) {
      return n = n >>> 0, i || re(n, 4, this.length), this[n] | this[n + 1] << 8 | this[n + 2] << 16 | this[n + 3] << 24;
    }, s.prototype.readInt32BE = function(n, i) {
      return n = n >>> 0, i || re(n, 4, this.length), this[n] << 24 | this[n + 1] << 16 | this[n + 2] << 8 | this[n + 3];
    }, s.prototype.readBigInt64LE = Ee(function(n) {
      n = n >>> 0, z(n, "offset");
      const i = this[n], d = this[n + 7];
      (i === void 0 || d === void 0) && Y(n, this.length - 8);
      const B = this[n + 4] + this[n + 5] * 2 ** 8 + this[n + 6] * 2 ** 16 + (d << 24);
      return (BigInt(B) << BigInt(32)) + BigInt(i + this[++n] * 2 ** 8 + this[++n] * 2 ** 16 + this[++n] * 2 ** 24);
    }), s.prototype.readBigInt64BE = Ee(function(n) {
      n = n >>> 0, z(n, "offset");
      const i = this[n], d = this[n + 7];
      (i === void 0 || d === void 0) && Y(n, this.length - 8);
      const B = (i << 24) + this[++n] * 2 ** 16 + this[++n] * 2 ** 8 + this[++n];
      return (BigInt(B) << BigInt(32)) + BigInt(this[++n] * 2 ** 24 + this[++n] * 2 ** 16 + this[++n] * 2 ** 8 + d);
    }), s.prototype.readFloatLE = function(n, i) {
      return n = n >>> 0, i || re(n, 4, this.length), r.read(this, n, !0, 23, 4);
    }, s.prototype.readFloatBE = function(n, i) {
      return n = n >>> 0, i || re(n, 4, this.length), r.read(this, n, !1, 23, 4);
    }, s.prototype.readDoubleLE = function(n, i) {
      return n = n >>> 0, i || re(n, 8, this.length), r.read(this, n, !0, 52, 8);
    }, s.prototype.readDoubleBE = function(n, i) {
      return n = n >>> 0, i || re(n, 8, this.length), r.read(this, n, !1, 52, 8);
    };
    function g(f, n, i, d, B, C) {
      if (!s.isBuffer(f))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (n > B || n < C)
        throw new RangeError('"value" argument is out of bounds');
      if (i + d > f.length)
        throw new RangeError("Index out of range");
    }
    s.prototype.writeUintLE = s.prototype.writeUIntLE = function(n, i, d, B) {
      if (n = +n, i = i >>> 0, d = d >>> 0, !B) {
        const se = Math.pow(2, 8 * d) - 1;
        g(this, n, i, d, se, 0);
      }
      let C = 1, U = 0;
      for (this[i] = n & 255; ++U < d && (C *= 256); )
        this[i + U] = n / C & 255;
      return i + d;
    }, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(n, i, d, B) {
      if (n = +n, i = i >>> 0, d = d >>> 0, !B) {
        const se = Math.pow(2, 8 * d) - 1;
        g(this, n, i, d, se, 0);
      }
      let C = d - 1, U = 1;
      for (this[i + C] = n & 255; --C >= 0 && (U *= 256); )
        this[i + C] = n / U & 255;
      return i + d;
    }, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(n, i, d) {
      return n = +n, i = i >>> 0, d || g(this, n, i, 1, 255, 0), this[i] = n & 255, i + 1;
    }, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(n, i, d) {
      return n = +n, i = i >>> 0, d || g(this, n, i, 2, 65535, 0), this[i] = n & 255, this[i + 1] = n >>> 8, i + 2;
    }, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(n, i, d) {
      return n = +n, i = i >>> 0, d || g(this, n, i, 2, 65535, 0), this[i] = n >>> 8, this[i + 1] = n & 255, i + 2;
    }, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(n, i, d) {
      return n = +n, i = i >>> 0, d || g(this, n, i, 4, 4294967295, 0), this[i + 3] = n >>> 24, this[i + 2] = n >>> 16, this[i + 1] = n >>> 8, this[i] = n & 255, i + 4;
    }, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(n, i, d) {
      return n = +n, i = i >>> 0, d || g(this, n, i, 4, 4294967295, 0), this[i] = n >>> 24, this[i + 1] = n >>> 16, this[i + 2] = n >>> 8, this[i + 3] = n & 255, i + 4;
    };
    function M(f, n, i, d, B) {
      p(n, d, B, f, i, 7);
      let C = Number(n & BigInt(4294967295));
      f[i++] = C, C = C >> 8, f[i++] = C, C = C >> 8, f[i++] = C, C = C >> 8, f[i++] = C;
      let U = Number(n >> BigInt(32) & BigInt(4294967295));
      return f[i++] = U, U = U >> 8, f[i++] = U, U = U >> 8, f[i++] = U, U = U >> 8, f[i++] = U, i;
    }
    function W(f, n, i, d, B) {
      p(n, d, B, f, i, 7);
      let C = Number(n & BigInt(4294967295));
      f[i + 7] = C, C = C >> 8, f[i + 6] = C, C = C >> 8, f[i + 5] = C, C = C >> 8, f[i + 4] = C;
      let U = Number(n >> BigInt(32) & BigInt(4294967295));
      return f[i + 3] = U, U = U >> 8, f[i + 2] = U, U = U >> 8, f[i + 1] = U, U = U >> 8, f[i] = U, i + 8;
    }
    s.prototype.writeBigUInt64LE = Ee(function(n, i = 0) {
      return M(this, n, i, BigInt(0), BigInt("0xffffffffffffffff"));
    }), s.prototype.writeBigUInt64BE = Ee(function(n, i = 0) {
      return W(this, n, i, BigInt(0), BigInt("0xffffffffffffffff"));
    }), s.prototype.writeIntLE = function(n, i, d, B) {
      if (n = +n, i = i >>> 0, !B) {
        const ge = Math.pow(2, 8 * d - 1);
        g(this, n, i, d, ge - 1, -ge);
      }
      let C = 0, U = 1, se = 0;
      for (this[i] = n & 255; ++C < d && (U *= 256); )
        n < 0 && se === 0 && this[i + C - 1] !== 0 && (se = 1), this[i + C] = (n / U >> 0) - se & 255;
      return i + d;
    }, s.prototype.writeIntBE = function(n, i, d, B) {
      if (n = +n, i = i >>> 0, !B) {
        const ge = Math.pow(2, 8 * d - 1);
        g(this, n, i, d, ge - 1, -ge);
      }
      let C = d - 1, U = 1, se = 0;
      for (this[i + C] = n & 255; --C >= 0 && (U *= 256); )
        n < 0 && se === 0 && this[i + C + 1] !== 0 && (se = 1), this[i + C] = (n / U >> 0) - se & 255;
      return i + d;
    }, s.prototype.writeInt8 = function(n, i, d) {
      return n = +n, i = i >>> 0, d || g(this, n, i, 1, 127, -128), n < 0 && (n = 255 + n + 1), this[i] = n & 255, i + 1;
    }, s.prototype.writeInt16LE = function(n, i, d) {
      return n = +n, i = i >>> 0, d || g(this, n, i, 2, 32767, -32768), this[i] = n & 255, this[i + 1] = n >>> 8, i + 2;
    }, s.prototype.writeInt16BE = function(n, i, d) {
      return n = +n, i = i >>> 0, d || g(this, n, i, 2, 32767, -32768), this[i] = n >>> 8, this[i + 1] = n & 255, i + 2;
    }, s.prototype.writeInt32LE = function(n, i, d) {
      return n = +n, i = i >>> 0, d || g(this, n, i, 4, 2147483647, -2147483648), this[i] = n & 255, this[i + 1] = n >>> 8, this[i + 2] = n >>> 16, this[i + 3] = n >>> 24, i + 4;
    }, s.prototype.writeInt32BE = function(n, i, d) {
      return n = +n, i = i >>> 0, d || g(this, n, i, 4, 2147483647, -2147483648), n < 0 && (n = 4294967295 + n + 1), this[i] = n >>> 24, this[i + 1] = n >>> 16, this[i + 2] = n >>> 8, this[i + 3] = n & 255, i + 4;
    }, s.prototype.writeBigInt64LE = Ee(function(n, i = 0) {
      return M(this, n, i, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), s.prototype.writeBigInt64BE = Ee(function(n, i = 0) {
      return W(this, n, i, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function Q(f, n, i, d, B, C) {
      if (i + d > f.length)
        throw new RangeError("Index out of range");
      if (i < 0)
        throw new RangeError("Index out of range");
    }
    function x(f, n, i, d, B) {
      return n = +n, i = i >>> 0, B || Q(f, n, i, 4), r.write(f, n, i, d, 23, 4), i + 4;
    }
    s.prototype.writeFloatLE = function(n, i, d) {
      return x(this, n, i, !0, d);
    }, s.prototype.writeFloatBE = function(n, i, d) {
      return x(this, n, i, !1, d);
    };
    function R(f, n, i, d, B) {
      return n = +n, i = i >>> 0, B || Q(f, n, i, 8), r.write(f, n, i, d, 52, 8), i + 8;
    }
    s.prototype.writeDoubleLE = function(n, i, d) {
      return R(this, n, i, !0, d);
    }, s.prototype.writeDoubleBE = function(n, i, d) {
      return R(this, n, i, !1, d);
    }, s.prototype.copy = function(n, i, d, B) {
      if (!s.isBuffer(n))
        throw new TypeError("argument should be a Buffer");
      if (d || (d = 0), !B && B !== 0 && (B = this.length), i >= n.length && (i = n.length), i || (i = 0), B > 0 && B < d && (B = d), B === d || n.length === 0 || this.length === 0)
        return 0;
      if (i < 0)
        throw new RangeError("targetStart out of bounds");
      if (d < 0 || d >= this.length)
        throw new RangeError("Index out of range");
      if (B < 0)
        throw new RangeError("sourceEnd out of bounds");
      B > this.length && (B = this.length), n.length - i < B - d && (B = n.length - i + d);
      const C = B - d;
      return this === n && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(i, d, B) : Uint8Array.prototype.set.call(
        n,
        this.subarray(d, B),
        i
      ), C;
    }, s.prototype.fill = function(n, i, d, B) {
      if (typeof n == "string") {
        if (typeof i == "string" ? (B = i, i = 0, d = this.length) : typeof d == "string" && (B = d, d = this.length), B !== void 0 && typeof B != "string")
          throw new TypeError("encoding must be a string");
        if (typeof B == "string" && !s.isEncoding(B))
          throw new TypeError("Unknown encoding: " + B);
        if (n.length === 1) {
          const U = n.charCodeAt(0);
          (B === "utf8" && U < 128 || B === "latin1") && (n = U);
        }
      } else
        typeof n == "number" ? n = n & 255 : typeof n == "boolean" && (n = Number(n));
      if (i < 0 || this.length < i || this.length < d)
        throw new RangeError("Out of range index");
      if (d <= i)
        return this;
      i = i >>> 0, d = d === void 0 ? this.length : d >>> 0, n || (n = 0);
      let C;
      if (typeof n == "number")
        for (C = i; C < d; ++C)
          this[C] = n;
      else {
        const U = s.isBuffer(n) ? n : s.from(n, B), se = U.length;
        if (se === 0)
          throw new TypeError('The value "' + n + '" is invalid for argument "value"');
        for (C = 0; C < d - i; ++C)
          this[C + i] = U[C % se];
      }
      return this;
    };
    const L = {};
    function V(f, n, i) {
      L[f] = class extends i {
        constructor() {
          super(), Object.defineProperty(this, "message", {
            value: n.apply(this, arguments),
            writable: !0,
            configurable: !0
          }), this.name = `${this.name} [${f}]`, this.stack, delete this.name;
        }
        get code() {
          return f;
        }
        set code(B) {
          Object.defineProperty(this, "code", {
            configurable: !0,
            enumerable: !0,
            value: B,
            writable: !0
          });
        }
        toString() {
          return `${this.name} [${f}]: ${this.message}`;
        }
      };
    }
    V(
      "ERR_BUFFER_OUT_OF_BOUNDS",
      function(f) {
        return f ? `${f} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
      },
      RangeError
    ), V(
      "ERR_INVALID_ARG_TYPE",
      function(f, n) {
        return `The "${f}" argument must be of type number. Received type ${typeof n}`;
      },
      TypeError
    ), V(
      "ERR_OUT_OF_RANGE",
      function(f, n, i) {
        let d = `The value of "${f}" is out of range.`, B = i;
        return Number.isInteger(i) && Math.abs(i) > 2 ** 32 ? B = Z(String(i)) : typeof i == "bigint" && (B = String(i), (i > BigInt(2) ** BigInt(32) || i < -(BigInt(2) ** BigInt(32))) && (B = Z(B)), B += "n"), d += ` It must be ${n}. Received ${B}`, d;
      },
      RangeError
    );
    function Z(f) {
      let n = "", i = f.length;
      const d = f[0] === "-" ? 1 : 0;
      for (; i >= d + 4; i -= 3)
        n = `_${f.slice(i - 3, i)}${n}`;
      return `${f.slice(0, i)}${n}`;
    }
    function h(f, n, i) {
      z(n, "offset"), (f[n] === void 0 || f[n + i] === void 0) && Y(n, f.length - (i + 1));
    }
    function p(f, n, i, d, B, C) {
      if (f > i || f < n) {
        const U = typeof n == "bigint" ? "n" : "";
        let se;
        throw C > 3 ? n === 0 || n === BigInt(0) ? se = `>= 0${U} and < 2${U} ** ${(C + 1) * 8}${U}` : se = `>= -(2${U} ** ${(C + 1) * 8 - 1}${U}) and < 2 ** ${(C + 1) * 8 - 1}${U}` : se = `>= ${n}${U} and <= ${i}${U}`, new L.ERR_OUT_OF_RANGE("value", se, f);
      }
      h(d, B, C);
    }
    function z(f, n) {
      if (typeof f != "number")
        throw new L.ERR_INVALID_ARG_TYPE(n, "number", f);
    }
    function Y(f, n, i) {
      throw Math.floor(f) !== f ? (z(f, i), new L.ERR_OUT_OF_RANGE(i || "offset", "an integer", f)) : n < 0 ? new L.ERR_BUFFER_OUT_OF_BOUNDS() : new L.ERR_OUT_OF_RANGE(
        i || "offset",
        `>= ${i ? 1 : 0} and <= ${n}`,
        f
      );
    }
    const he = /[^+/0-9A-Za-z-_]/g;
    function ie(f) {
      if (f = f.split("=")[0], f = f.trim().replace(he, ""), f.length < 2)
        return "";
      for (; f.length % 4 !== 0; )
        f = f + "=";
      return f;
    }
    function ce(f, n) {
      n = n || 1 / 0;
      let i;
      const d = f.length;
      let B = null;
      const C = [];
      for (let U = 0; U < d; ++U) {
        if (i = f.charCodeAt(U), i > 55295 && i < 57344) {
          if (!B) {
            if (i > 56319) {
              (n -= 3) > -1 && C.push(239, 191, 189);
              continue;
            } else if (U + 1 === d) {
              (n -= 3) > -1 && C.push(239, 191, 189);
              continue;
            }
            B = i;
            continue;
          }
          if (i < 56320) {
            (n -= 3) > -1 && C.push(239, 191, 189), B = i;
            continue;
          }
          i = (B - 55296 << 10 | i - 56320) + 65536;
        } else
          B && (n -= 3) > -1 && C.push(239, 191, 189);
        if (B = null, i < 128) {
          if ((n -= 1) < 0)
            break;
          C.push(i);
        } else if (i < 2048) {
          if ((n -= 2) < 0)
            break;
          C.push(
            i >> 6 | 192,
            i & 63 | 128
          );
        } else if (i < 65536) {
          if ((n -= 3) < 0)
            break;
          C.push(
            i >> 12 | 224,
            i >> 6 & 63 | 128,
            i & 63 | 128
          );
        } else if (i < 1114112) {
          if ((n -= 4) < 0)
            break;
          C.push(
            i >> 18 | 240,
            i >> 12 & 63 | 128,
            i >> 6 & 63 | 128,
            i & 63 | 128
          );
        } else
          throw new Error("Invalid code point");
      }
      return C;
    }
    function Se(f) {
      const n = [];
      for (let i = 0; i < f.length; ++i)
        n.push(f.charCodeAt(i) & 255);
      return n;
    }
    function $(f, n) {
      let i, d, B;
      const C = [];
      for (let U = 0; U < f.length && !((n -= 2) < 0); ++U)
        i = f.charCodeAt(U), d = i >> 8, B = i % 256, C.push(B), C.push(d);
      return C;
    }
    function Te(f) {
      return t.toByteArray(ie(f));
    }
    function Oe(f, n, i, d) {
      let B;
      for (B = 0; B < d && !(B + i >= n.length || B >= f.length); ++B)
        n[B + i] = f[B];
      return B;
    }
    function we(f, n) {
      return f instanceof n || f != null && f.constructor != null && f.constructor.name != null && f.constructor.name === n.name;
    }
    function Ie(f) {
      return f !== f;
    }
    const Me = function() {
      const f = "0123456789abcdef", n = new Array(256);
      for (let i = 0; i < 16; ++i) {
        const d = i * 16;
        for (let B = 0; B < 16; ++B)
          n[d + B] = f[i] + f[B];
      }
      return n;
    }();
    function Ee(f) {
      return typeof BigInt > "u" ? Fe : f;
    }
    function Fe() {
      throw new Error("BigInt not supported");
    }
  }(Tr)), Tr;
}
var Ue = Ze(), Or = {}, Ir = {}, Fr, Cn;
function qi() {
  return Cn || (Cn = 1, Fr = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, r = Symbol("test"), o = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(o) !== "[object Symbol]")
      return !1;
    var a = 42;
    t[r] = a;
    for (r in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var c = Object.getOwnPropertySymbols(t);
    if (c.length !== 1 || c[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var u = Object.getOwnPropertyDescriptor(t, r);
      if (u.value !== a || u.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Fr;
}
var Pr, Mn;
function Ft() {
  if (Mn)
    return Pr;
  Mn = 1;
  var e = qi();
  return Pr = function() {
    return e() && !!Symbol.toStringTag;
  }, Pr;
}
var Ln = typeof Symbol < "u" && Symbol, $o = qi(), qo = function() {
  return typeof Ln != "function" || typeof Symbol != "function" || typeof Ln("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : $o();
}, Ho = "Function.prototype.bind called on incompatible ", Cr = Array.prototype.slice, Wo = Object.prototype.toString, zo = "[object Function]", Go = function(t) {
  var r = this;
  if (typeof r != "function" || Wo.call(r) !== zo)
    throw new TypeError(Ho + r);
  for (var o = Cr.call(arguments, 1), a, c = function() {
    if (this instanceof a) {
      var E = r.apply(
        this,
        o.concat(Cr.call(arguments))
      );
      return Object(E) === E ? E : this;
    } else
      return r.apply(
        t,
        o.concat(Cr.call(arguments))
      );
  }, u = Math.max(0, r.length - o.length), s = [], l = 0; l < u; l++)
    s.push("$" + l);
  if (a = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(c), r.prototype) {
    var b = function() {
    };
    b.prototype = r.prototype, a.prototype = new b(), b.prototype = null;
  }
  return a;
}, Vo = Go, _n = Function.prototype.bind || Vo, Jo = _n, Ko = Jo.call(Function.call, Object.prototype.hasOwnProperty), le, Xe = SyntaxError, Hi = Function, Ve = TypeError, Mr = function(e) {
  try {
    return Hi('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, De = Object.getOwnPropertyDescriptor;
if (De)
  try {
    De({}, "");
  } catch {
    De = null;
  }
var Lr = function() {
  throw new Ve();
}, Yo = De ? function() {
  try {
    return arguments.callee, Lr;
  } catch {
    try {
      return De(arguments, "callee").get;
    } catch {
      return Lr;
    }
  }
}() : Lr, ze = qo(), Le = Object.getPrototypeOf || function(e) {
  return e.__proto__;
}, Ge = {}, Xo = typeof Uint8Array > "u" ? le : Le(Uint8Array), Je = {
  "%AggregateError%": typeof AggregateError > "u" ? le : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? le : ArrayBuffer,
  "%ArrayIteratorPrototype%": ze ? Le([][Symbol.iterator]()) : le,
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
  "%Function%": Hi,
  "%GeneratorFunction%": Ge,
  "%Int8Array%": typeof Int8Array > "u" ? le : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? le : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? le : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": ze ? Le(Le([][Symbol.iterator]())) : le,
  "%JSON%": typeof JSON == "object" ? JSON : le,
  "%Map%": typeof Map > "u" ? le : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !ze ? le : Le((/* @__PURE__ */ new Map())[Symbol.iterator]()),
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
  "%SetIteratorPrototype%": typeof Set > "u" || !ze ? le : Le((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? le : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": ze ? Le(""[Symbol.iterator]()) : le,
  "%Symbol%": ze ? Symbol : le,
  "%SyntaxError%": Xe,
  "%ThrowTypeError%": Yo,
  "%TypedArray%": Xo,
  "%TypeError%": Ve,
  "%Uint8Array%": typeof Uint8Array > "u" ? le : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? le : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? le : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? le : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? le : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? le : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? le : WeakSet
}, Qo = function e(t) {
  var r;
  if (t === "%AsyncFunction%")
    r = Mr("async function () {}");
  else if (t === "%GeneratorFunction%")
    r = Mr("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    r = Mr("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var o = e("%AsyncGeneratorFunction%");
    o && (r = o.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var a = e("%AsyncGenerator%");
    a && (r = Le(a.prototype));
  }
  return Je[t] = r, r;
}, jn = {
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
}, ut = _n, At = Ko, Zo = ut.call(Function.call, Array.prototype.concat), ea = ut.call(Function.apply, Array.prototype.splice), kn = ut.call(Function.call, String.prototype.replace), Rt = ut.call(Function.call, String.prototype.slice), ta = ut.call(Function.call, RegExp.prototype.exec), ra = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, na = /\\(\\)?/g, ia = function(t) {
  var r = Rt(t, 0, 1), o = Rt(t, -1);
  if (r === "%" && o !== "%")
    throw new Xe("invalid intrinsic syntax, expected closing `%`");
  if (o === "%" && r !== "%")
    throw new Xe("invalid intrinsic syntax, expected opening `%`");
  var a = [];
  return kn(t, ra, function(c, u, s, l) {
    a[a.length] = s ? kn(l, na, "$1") : u || c;
  }), a;
}, oa = function(t, r) {
  var o = t, a;
  if (At(jn, o) && (a = jn[o], o = "%" + a[0] + "%"), At(Je, o)) {
    var c = Je[o];
    if (c === Ge && (c = Qo(o)), typeof c > "u" && !r)
      throw new Ve("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: a,
      name: o,
      value: c
    };
  }
  throw new Xe("intrinsic " + t + " does not exist!");
}, bn = function(t, r) {
  if (typeof t != "string" || t.length === 0)
    throw new Ve("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new Ve('"allowMissing" argument must be a boolean');
  if (ta(/^%?[^%]*%?$/g, t) === null)
    throw new Xe("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var o = ia(t), a = o.length > 0 ? o[0] : "", c = oa("%" + a + "%", r), u = c.name, s = c.value, l = !1, b = c.alias;
  b && (a = b[0], ea(o, Zo([0, 1], b)));
  for (var E = 1, O = !0; E < o.length; E += 1) {
    var S = o[E], y = Rt(S, 0, 1), w = Rt(S, -1);
    if ((y === '"' || y === "'" || y === "`" || w === '"' || w === "'" || w === "`") && y !== w)
      throw new Xe("property names with quotes must have matching quotes");
    if ((S === "constructor" || !O) && (l = !0), a += "." + S, u = "%" + a + "%", At(Je, u))
      s = Je[u];
    else if (s != null) {
      if (!(S in s)) {
        if (!r)
          throw new Ve("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (De && E + 1 >= o.length) {
        var I = De(s, S);
        O = !!I, O && "get" in I && !("originalValue" in I.get) ? s = I.get : s = s[S];
      } else
        O = At(s, S), s = s[S];
      O && !l && (Je[u] = s);
    }
  }
  return s;
}, Wi = { exports: {} };
(function(e) {
  var t = _n, r = bn, o = r("%Function.prototype.apply%"), a = r("%Function.prototype.call%"), c = r("%Reflect.apply%", !0) || t.call(a, o), u = r("%Object.getOwnPropertyDescriptor%", !0), s = r("%Object.defineProperty%", !0), l = r("%Math.max%");
  if (s)
    try {
      s({}, "a", { value: 1 });
    } catch {
      s = null;
    }
  e.exports = function(O) {
    var S = c(t, a, arguments);
    if (u && s) {
      var y = u(S, "length");
      y.configurable && s(
        S,
        "length",
        { value: 1 + l(0, O.length - (arguments.length - 1)) }
      );
    }
    return S;
  };
  var b = function() {
    return c(t, o, arguments);
  };
  s ? s(e.exports, "apply", { value: b }) : e.exports.apply = b;
})(Wi);
var zi = bn, Gi = Wi.exports, aa = Gi(zi("String.prototype.indexOf")), mn = function(t, r) {
  var o = zi(t, !!r);
  return typeof o == "function" && aa(t, ".prototype.") > -1 ? Gi(o) : o;
}, jr, Nn;
function sa() {
  if (Nn)
    return jr;
  Nn = 1;
  var e = Ft()(), t = mn, r = t("Object.prototype.toString"), o = function(s) {
    return e && s && typeof s == "object" && Symbol.toStringTag in s ? !1 : r(s) === "[object Arguments]";
  }, a = function(s) {
    return o(s) ? !0 : s !== null && typeof s == "object" && typeof s.length == "number" && s.length >= 0 && r(s) !== "[object Array]" && r(s.callee) === "[object Function]";
  }, c = function() {
    return o(arguments);
  }();
  return o.isLegacyArguments = a, jr = c ? o : a, jr;
}
var kr, Un;
function ua() {
  if (Un)
    return kr;
  Un = 1;
  var e = Object.prototype.toString, t = Function.prototype.toString, r = /^\s*(?:function)?\*/, o = Ft()(), a = Object.getPrototypeOf, c = function() {
    if (!o)
      return !1;
    try {
      return Function("return function*() {}")();
    } catch {
    }
  }, u;
  return kr = function(l) {
    if (typeof l != "function")
      return !1;
    if (r.test(t.call(l)))
      return !0;
    if (!o) {
      var b = e.call(l);
      return b === "[object GeneratorFunction]";
    }
    if (!a)
      return !1;
    if (typeof u > "u") {
      var E = c();
      u = E ? a(E) : !1;
    }
    return a(l) === u;
  }, kr;
}
var Nr, Dn;
function fa() {
  if (Dn)
    return Nr;
  Dn = 1;
  var e = Function.prototype.toString, t = typeof Reflect == "object" && Reflect !== null && Reflect.apply, r, o;
  if (typeof t == "function" && typeof Object.defineProperty == "function")
    try {
      r = Object.defineProperty({}, "length", {
        get: function() {
          throw o;
        }
      }), o = {}, t(function() {
        throw 42;
      }, null, r);
    } catch (S) {
      S !== o && (t = null);
    }
  else
    t = null;
  var a = /^\s*class\b/, c = function(y) {
    try {
      var w = e.call(y);
      return a.test(w);
    } catch {
      return !1;
    }
  }, u = function(y) {
    try {
      return c(y) ? !1 : (e.call(y), !0);
    } catch {
      return !1;
    }
  }, s = Object.prototype.toString, l = "[object Function]", b = "[object GeneratorFunction]", E = typeof Symbol == "function" && !!Symbol.toStringTag, O = typeof document == "object" && typeof document.all > "u" && document.all !== void 0 ? document.all : {};
  return Nr = t ? function(y) {
    if (y === O)
      return !0;
    if (!y || typeof y != "function" && typeof y != "object")
      return !1;
    if (typeof y == "function" && !y.prototype)
      return !0;
    try {
      t(y, null, r);
    } catch (w) {
      if (w !== o)
        return !1;
    }
    return !c(y);
  } : function(y) {
    if (y === O)
      return !0;
    if (!y || typeof y != "function" && typeof y != "object")
      return !1;
    if (typeof y == "function" && !y.prototype)
      return !0;
    if (E)
      return u(y);
    if (c(y))
      return !1;
    var w = s.call(y);
    return w === l || w === b;
  }, Nr;
}
var Ur, $n;
function Vi() {
  if ($n)
    return Ur;
  $n = 1;
  var e = fa(), t = Object.prototype.toString, r = Object.prototype.hasOwnProperty, o = function(l, b, E) {
    for (var O = 0, S = l.length; O < S; O++)
      r.call(l, O) && (E == null ? b(l[O], O, l) : b.call(E, l[O], O, l));
  }, a = function(l, b, E) {
    for (var O = 0, S = l.length; O < S; O++)
      E == null ? b(l.charAt(O), O, l) : b.call(E, l.charAt(O), O, l);
  }, c = function(l, b, E) {
    for (var O in l)
      r.call(l, O) && (E == null ? b(l[O], O, l) : b.call(E, l[O], O, l));
  }, u = function(l, b, E) {
    if (!e(b))
      throw new TypeError("iterator must be a function");
    var O;
    arguments.length >= 3 && (O = E), t.call(l) === "[object Array]" ? o(l, b, O) : typeof l == "string" ? a(l, b, O) : c(l, b, O);
  };
  return Ur = u, Ur;
}
var Dr, qn;
function Ji() {
  if (qn)
    return Dr;
  qn = 1;
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
  ], t = typeof globalThis > "u" ? me : globalThis;
  return Dr = function() {
    for (var o = [], a = 0; a < e.length; a++)
      typeof t[e[a]] == "function" && (o[o.length] = e[a]);
    return o;
  }, Dr;
}
var $r, Hn;
function Ki() {
  if (Hn)
    return $r;
  Hn = 1;
  var e = bn, t = e("%Object.getOwnPropertyDescriptor%", !0);
  if (t)
    try {
      t([], "length");
    } catch {
      t = null;
    }
  return $r = t, $r;
}
var qr, Wn;
function Yi() {
  if (Wn)
    return qr;
  Wn = 1;
  var e = Vi(), t = Ji(), r = mn, o = r("Object.prototype.toString"), a = Ft()(), c = typeof globalThis > "u" ? me : globalThis, u = t(), s = r("Array.prototype.indexOf", !0) || function(w, I) {
    for (var k = 0; k < w.length; k += 1)
      if (w[k] === I)
        return k;
    return -1;
  }, l = r("String.prototype.slice"), b = {}, E = Ki(), O = Object.getPrototypeOf;
  a && E && O && e(u, function(y) {
    var w = new c[y]();
    if (Symbol.toStringTag in w) {
      var I = O(w), k = E(I, Symbol.toStringTag);
      if (!k) {
        var v = O(I);
        k = E(v, Symbol.toStringTag);
      }
      b[y] = k.get;
    }
  });
  var S = function(w) {
    var I = !1;
    return e(b, function(k, v) {
      if (!I)
        try {
          I = k.call(w) === v;
        } catch {
        }
    }), I;
  };
  return qr = function(w) {
    if (!w || typeof w != "object")
      return !1;
    if (!a || !(Symbol.toStringTag in w)) {
      var I = l(o(w), 8, -1);
      return s(u, I) > -1;
    }
    return E ? S(w) : !1;
  }, qr;
}
var Hr, zn;
function ca() {
  if (zn)
    return Hr;
  zn = 1;
  var e = Vi(), t = Ji(), r = mn, o = r("Object.prototype.toString"), a = Ft()(), c = typeof globalThis > "u" ? me : globalThis, u = t(), s = r("String.prototype.slice"), l = {}, b = Ki(), E = Object.getPrototypeOf;
  a && b && E && e(u, function(y) {
    if (typeof c[y] == "function") {
      var w = new c[y]();
      if (Symbol.toStringTag in w) {
        var I = E(w), k = b(I, Symbol.toStringTag);
        if (!k) {
          var v = E(I);
          k = b(v, Symbol.toStringTag);
        }
        l[y] = k.get;
      }
    }
  });
  var O = function(w) {
    var I = !1;
    return e(l, function(k, v) {
      if (!I)
        try {
          var T = k.call(w);
          T === v && (I = T);
        } catch {
        }
    }), I;
  }, S = Yi();
  return Hr = function(w) {
    return S(w) ? !a || !(Symbol.toStringTag in w) ? s(o(w), 8, -1) : O(w) : !1;
  }, Hr;
}
var Gn;
function la() {
  return Gn || (Gn = 1, function(e) {
    var t = sa(), r = ua(), o = ca(), a = Yi();
    function c($) {
      return $.call.bind($);
    }
    var u = typeof BigInt < "u", s = typeof Symbol < "u", l = c(Object.prototype.toString), b = c(Number.prototype.valueOf), E = c(String.prototype.valueOf), O = c(Boolean.prototype.valueOf);
    if (u)
      var S = c(BigInt.prototype.valueOf);
    if (s)
      var y = c(Symbol.prototype.valueOf);
    function w($, Te) {
      if (typeof $ != "object")
        return !1;
      try {
        return Te($), !0;
      } catch {
        return !1;
      }
    }
    e.isArgumentsObject = t, e.isGeneratorFunction = r, e.isTypedArray = a;
    function I($) {
      return typeof Promise < "u" && $ instanceof Promise || $ !== null && typeof $ == "object" && typeof $.then == "function" && typeof $.catch == "function";
    }
    e.isPromise = I;
    function k($) {
      return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView($) : a($) || M($);
    }
    e.isArrayBufferView = k;
    function v($) {
      return o($) === "Uint8Array";
    }
    e.isUint8Array = v;
    function T($) {
      return o($) === "Uint8ClampedArray";
    }
    e.isUint8ClampedArray = T;
    function j($) {
      return o($) === "Uint16Array";
    }
    e.isUint16Array = j;
    function K($) {
      return o($) === "Uint32Array";
    }
    e.isUint32Array = K;
    function J($) {
      return o($) === "Int8Array";
    }
    e.isInt8Array = J;
    function oe($) {
      return o($) === "Int16Array";
    }
    e.isInt16Array = oe;
    function ae($) {
      return o($) === "Int32Array";
    }
    e.isInt32Array = ae;
    function X($) {
      return o($) === "Float32Array";
    }
    e.isFloat32Array = X;
    function ee($) {
      return o($) === "Float64Array";
    }
    e.isFloat64Array = ee;
    function P($) {
      return o($) === "BigInt64Array";
    }
    e.isBigInt64Array = P;
    function D($) {
      return o($) === "BigUint64Array";
    }
    e.isBigUint64Array = D;
    function q($) {
      return l($) === "[object Map]";
    }
    q.working = typeof Map < "u" && q(/* @__PURE__ */ new Map());
    function m($) {
      return typeof Map > "u" ? !1 : q.working ? q($) : $ instanceof Map;
    }
    e.isMap = m;
    function A($) {
      return l($) === "[object Set]";
    }
    A.working = typeof Set < "u" && A(/* @__PURE__ */ new Set());
    function _($) {
      return typeof Set > "u" ? !1 : A.working ? A($) : $ instanceof Set;
    }
    e.isSet = _;
    function F($) {
      return l($) === "[object WeakMap]";
    }
    F.working = typeof WeakMap < "u" && F(/* @__PURE__ */ new WeakMap());
    function N($) {
      return typeof WeakMap > "u" ? !1 : F.working ? F($) : $ instanceof WeakMap;
    }
    e.isWeakMap = N;
    function H($) {
      return l($) === "[object WeakSet]";
    }
    H.working = typeof WeakSet < "u" && H(/* @__PURE__ */ new WeakSet());
    function G($) {
      return H($);
    }
    e.isWeakSet = G;
    function te($) {
      return l($) === "[object ArrayBuffer]";
    }
    te.working = typeof ArrayBuffer < "u" && te(new ArrayBuffer());
    function re($) {
      return typeof ArrayBuffer > "u" ? !1 : te.working ? te($) : $ instanceof ArrayBuffer;
    }
    e.isArrayBuffer = re;
    function g($) {
      return l($) === "[object DataView]";
    }
    g.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && g(new DataView(new ArrayBuffer(1), 0, 1));
    function M($) {
      return typeof DataView > "u" ? !1 : g.working ? g($) : $ instanceof DataView;
    }
    e.isDataView = M;
    var W = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
    function Q($) {
      return l($) === "[object SharedArrayBuffer]";
    }
    function x($) {
      return typeof W > "u" ? !1 : (typeof Q.working > "u" && (Q.working = Q(new W())), Q.working ? Q($) : $ instanceof W);
    }
    e.isSharedArrayBuffer = x;
    function R($) {
      return l($) === "[object AsyncFunction]";
    }
    e.isAsyncFunction = R;
    function L($) {
      return l($) === "[object Map Iterator]";
    }
    e.isMapIterator = L;
    function V($) {
      return l($) === "[object Set Iterator]";
    }
    e.isSetIterator = V;
    function Z($) {
      return l($) === "[object Generator]";
    }
    e.isGeneratorObject = Z;
    function h($) {
      return l($) === "[object WebAssembly.Module]";
    }
    e.isWebAssemblyCompiledModule = h;
    function p($) {
      return w($, b);
    }
    e.isNumberObject = p;
    function z($) {
      return w($, E);
    }
    e.isStringObject = z;
    function Y($) {
      return w($, O);
    }
    e.isBooleanObject = Y;
    function he($) {
      return u && w($, S);
    }
    e.isBigIntObject = he;
    function ie($) {
      return s && w($, y);
    }
    e.isSymbolObject = ie;
    function ce($) {
      return p($) || z($) || Y($) || he($) || ie($);
    }
    e.isBoxedPrimitive = ce;
    function Se($) {
      return typeof Uint8Array < "u" && (re($) || x($));
    }
    e.isAnyArrayBuffer = Se, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function($) {
      Object.defineProperty(e, $, {
        enumerable: !1,
        value: function() {
          throw new Error($ + " is not supported in userland");
        }
      });
    });
  }(Ir)), Ir;
}
var Wr, Vn;
function ha() {
  return Vn || (Vn = 1, Wr = function(t) {
    return t && typeof t == "object" && typeof t.copy == "function" && typeof t.fill == "function" && typeof t.readUInt8 == "function";
  }), Wr;
}
var Jn;
function da() {
  return Jn || (Jn = 1, function(e) {
    var t = Object.getOwnPropertyDescriptors || function(M) {
      for (var W = Object.keys(M), Q = {}, x = 0; x < W.length; x++)
        Q[W[x]] = Object.getOwnPropertyDescriptor(M, W[x]);
      return Q;
    }, r = /%[sdj%]/g;
    e.format = function(g) {
      if (!J(g)) {
        for (var M = [], W = 0; W < arguments.length; W++)
          M.push(u(arguments[W]));
        return M.join(" ");
      }
      for (var W = 1, Q = arguments, x = Q.length, R = String(g).replace(r, function(V) {
        if (V === "%%")
          return "%";
        if (W >= x)
          return V;
        switch (V) {
          case "%s":
            return String(Q[W++]);
          case "%d":
            return Number(Q[W++]);
          case "%j":
            try {
              return JSON.stringify(Q[W++]);
            } catch {
              return "[Circular]";
            }
          default:
            return V;
        }
      }), L = Q[W]; W < x; L = Q[++W])
        T(L) || !ee(L) ? R += " " + L : R += " " + u(L);
      return R;
    }, e.deprecate = function(g, M) {
      if (typeof fe.exports < "u" && fe.exports.noDeprecation === !0)
        return g;
      if (typeof fe.exports > "u")
        return function() {
          return e.deprecate(g, M).apply(this, arguments);
        };
      var W = !1;
      function Q() {
        if (!W) {
          if (fe.exports.throwDeprecation)
            throw new Error(M);
          fe.exports.traceDeprecation ? console.trace(M) : console.error(M), W = !0;
        }
        return g.apply(this, arguments);
      }
      return Q;
    };
    var o = {}, a = /^$/;
    if (fe.exports.env.NODE_DEBUG) {
      var c = fe.exports.env.NODE_DEBUG;
      c = c.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), a = new RegExp("^" + c + "$", "i");
    }
    e.debuglog = function(g) {
      if (g = g.toUpperCase(), !o[g])
        if (a.test(g)) {
          var M = fe.exports.pid;
          o[g] = function() {
            var W = e.format.apply(e, arguments);
            console.error("%s %d: %s", g, M, W);
          };
        } else
          o[g] = function() {
          };
      return o[g];
    };
    function u(g, M) {
      var W = {
        seen: [],
        stylize: l
      };
      return arguments.length >= 3 && (W.depth = arguments[2]), arguments.length >= 4 && (W.colors = arguments[3]), v(M) ? W.showHidden = M : M && e._extend(W, M), ae(W.showHidden) && (W.showHidden = !1), ae(W.depth) && (W.depth = 2), ae(W.colors) && (W.colors = !1), ae(W.customInspect) && (W.customInspect = !0), W.colors && (W.stylize = s), E(W, g, W.depth);
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
    function s(g, M) {
      var W = u.styles[M];
      return W ? "\x1B[" + u.colors[W][0] + "m" + g + "\x1B[" + u.colors[W][1] + "m" : g;
    }
    function l(g, M) {
      return g;
    }
    function b(g) {
      var M = {};
      return g.forEach(function(W, Q) {
        M[W] = !0;
      }), M;
    }
    function E(g, M, W) {
      if (g.customInspect && M && q(M.inspect) && M.inspect !== e.inspect && !(M.constructor && M.constructor.prototype === M)) {
        var Q = M.inspect(W, g);
        return J(Q) || (Q = E(g, Q, W)), Q;
      }
      var x = O(g, M);
      if (x)
        return x;
      var R = Object.keys(M), L = b(R);
      if (g.showHidden && (R = Object.getOwnPropertyNames(M)), D(M) && (R.indexOf("message") >= 0 || R.indexOf("description") >= 0))
        return S(M);
      if (R.length === 0) {
        if (q(M)) {
          var V = M.name ? ": " + M.name : "";
          return g.stylize("[Function" + V + "]", "special");
        }
        if (X(M))
          return g.stylize(RegExp.prototype.toString.call(M), "regexp");
        if (P(M))
          return g.stylize(Date.prototype.toString.call(M), "date");
        if (D(M))
          return S(M);
      }
      var Z = "", h = !1, p = ["{", "}"];
      if (k(M) && (h = !0, p = ["[", "]"]), q(M)) {
        var z = M.name ? ": " + M.name : "";
        Z = " [Function" + z + "]";
      }
      if (X(M) && (Z = " " + RegExp.prototype.toString.call(M)), P(M) && (Z = " " + Date.prototype.toUTCString.call(M)), D(M) && (Z = " " + S(M)), R.length === 0 && (!h || M.length == 0))
        return p[0] + Z + p[1];
      if (W < 0)
        return X(M) ? g.stylize(RegExp.prototype.toString.call(M), "regexp") : g.stylize("[Object]", "special");
      g.seen.push(M);
      var Y;
      return h ? Y = y(g, M, W, L, R) : Y = R.map(function(he) {
        return w(g, M, W, L, he, h);
      }), g.seen.pop(), I(Y, Z, p);
    }
    function O(g, M) {
      if (ae(M))
        return g.stylize("undefined", "undefined");
      if (J(M)) {
        var W = "'" + JSON.stringify(M).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return g.stylize(W, "string");
      }
      if (K(M))
        return g.stylize("" + M, "number");
      if (v(M))
        return g.stylize("" + M, "boolean");
      if (T(M))
        return g.stylize("null", "null");
    }
    function S(g) {
      return "[" + Error.prototype.toString.call(g) + "]";
    }
    function y(g, M, W, Q, x) {
      for (var R = [], L = 0, V = M.length; L < V; ++L)
        H(M, String(L)) ? R.push(w(
          g,
          M,
          W,
          Q,
          String(L),
          !0
        )) : R.push("");
      return x.forEach(function(Z) {
        Z.match(/^\d+$/) || R.push(w(
          g,
          M,
          W,
          Q,
          Z,
          !0
        ));
      }), R;
    }
    function w(g, M, W, Q, x, R) {
      var L, V, Z;
      if (Z = Object.getOwnPropertyDescriptor(M, x) || { value: M[x] }, Z.get ? Z.set ? V = g.stylize("[Getter/Setter]", "special") : V = g.stylize("[Getter]", "special") : Z.set && (V = g.stylize("[Setter]", "special")), H(Q, x) || (L = "[" + x + "]"), V || (g.seen.indexOf(Z.value) < 0 ? (T(W) ? V = E(g, Z.value, null) : V = E(g, Z.value, W - 1), V.indexOf(`
`) > -1 && (R ? V = V.split(`
`).map(function(h) {
        return "  " + h;
      }).join(`
`).substr(2) : V = `
` + V.split(`
`).map(function(h) {
        return "   " + h;
      }).join(`
`))) : V = g.stylize("[Circular]", "special")), ae(L)) {
        if (R && x.match(/^\d+$/))
          return V;
        L = JSON.stringify("" + x), L.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (L = L.substr(1, L.length - 2), L = g.stylize(L, "name")) : (L = L.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), L = g.stylize(L, "string"));
      }
      return L + ": " + V;
    }
    function I(g, M, W) {
      var Q = g.reduce(function(x, R) {
        return R.indexOf(`
`) >= 0, x + R.replace(/\u001b\[\d\d?m/g, "").length + 1;
      }, 0);
      return Q > 60 ? W[0] + (M === "" ? "" : M + `
 `) + " " + g.join(`,
  `) + " " + W[1] : W[0] + M + " " + g.join(", ") + " " + W[1];
    }
    e.types = la();
    function k(g) {
      return Array.isArray(g);
    }
    e.isArray = k;
    function v(g) {
      return typeof g == "boolean";
    }
    e.isBoolean = v;
    function T(g) {
      return g === null;
    }
    e.isNull = T;
    function j(g) {
      return g == null;
    }
    e.isNullOrUndefined = j;
    function K(g) {
      return typeof g == "number";
    }
    e.isNumber = K;
    function J(g) {
      return typeof g == "string";
    }
    e.isString = J;
    function oe(g) {
      return typeof g == "symbol";
    }
    e.isSymbol = oe;
    function ae(g) {
      return g === void 0;
    }
    e.isUndefined = ae;
    function X(g) {
      return ee(g) && A(g) === "[object RegExp]";
    }
    e.isRegExp = X, e.types.isRegExp = X;
    function ee(g) {
      return typeof g == "object" && g !== null;
    }
    e.isObject = ee;
    function P(g) {
      return ee(g) && A(g) === "[object Date]";
    }
    e.isDate = P, e.types.isDate = P;
    function D(g) {
      return ee(g) && (A(g) === "[object Error]" || g instanceof Error);
    }
    e.isError = D, e.types.isNativeError = D;
    function q(g) {
      return typeof g == "function";
    }
    e.isFunction = q;
    function m(g) {
      return g === null || typeof g == "boolean" || typeof g == "number" || typeof g == "string" || typeof g == "symbol" || typeof g > "u";
    }
    e.isPrimitive = m, e.isBuffer = ha();
    function A(g) {
      return Object.prototype.toString.call(g);
    }
    function _(g) {
      return g < 10 ? "0" + g.toString(10) : g.toString(10);
    }
    var F = [
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
    function N() {
      var g = new Date(), M = [
        _(g.getHours()),
        _(g.getMinutes()),
        _(g.getSeconds())
      ].join(":");
      return [g.getDate(), F[g.getMonth()], M].join(" ");
    }
    e.log = function() {
      console.log("%s - %s", N(), e.format.apply(e, arguments));
    }, e.inherits = Re(), e._extend = function(g, M) {
      if (!M || !ee(M))
        return g;
      for (var W = Object.keys(M), Q = W.length; Q--; )
        g[W[Q]] = M[W[Q]];
      return g;
    };
    function H(g, M) {
      return Object.prototype.hasOwnProperty.call(g, M);
    }
    var G = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
    e.promisify = function(M) {
      if (typeof M != "function")
        throw new TypeError('The "original" argument must be of type Function');
      if (G && M[G]) {
        var W = M[G];
        if (typeof W != "function")
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        return Object.defineProperty(W, G, {
          value: W,
          enumerable: !1,
          writable: !1,
          configurable: !0
        }), W;
      }
      function W() {
        for (var Q, x, R = new Promise(function(Z, h) {
          Q = Z, x = h;
        }), L = [], V = 0; V < arguments.length; V++)
          L.push(arguments[V]);
        L.push(function(Z, h) {
          Z ? x(Z) : Q(h);
        });
        try {
          M.apply(this, L);
        } catch (Z) {
          x(Z);
        }
        return R;
      }
      return Object.setPrototypeOf(W, Object.getPrototypeOf(M)), G && Object.defineProperty(W, G, {
        value: W,
        enumerable: !1,
        writable: !1,
        configurable: !0
      }), Object.defineProperties(
        W,
        t(M)
      );
    }, e.promisify.custom = G;
    function te(g, M) {
      if (!g) {
        var W = new Error("Promise was rejected with a falsy value");
        W.reason = g, g = W;
      }
      return M(g);
    }
    function re(g) {
      if (typeof g != "function")
        throw new TypeError('The "original" argument must be of type Function');
      function M() {
        for (var W = [], Q = 0; Q < arguments.length; Q++)
          W.push(arguments[Q]);
        var x = W.pop();
        if (typeof x != "function")
          throw new TypeError("The last argument must be of type Function");
        var R = this, L = function() {
          return x.apply(R, arguments);
        };
        g.apply(this, W).then(
          function(V) {
            fe.exports.nextTick(L.bind(null, null, V));
          },
          function(V) {
            fe.exports.nextTick(te.bind(null, V, L));
          }
        );
      }
      return Object.setPrototypeOf(M, Object.getPrototypeOf(g)), Object.defineProperties(
        M,
        t(g)
      ), M;
    }
    e.callbackify = re;
  }(Or)), Or;
}
var et = { exports: {} }, Ke = typeof Reflect == "object" ? Reflect : null, Kn = Ke && typeof Ke.apply == "function" ? Ke.apply : function(t, r, o) {
  return Function.prototype.apply.call(t, r, o);
}, St;
Ke && typeof Ke.ownKeys == "function" ? St = Ke.ownKeys : Object.getOwnPropertySymbols ? St = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : St = function(t) {
  return Object.getOwnPropertyNames(t);
};
function pa(e) {
  console && console.warn && console.warn(e);
}
var Xi = Number.isNaN || function(t) {
  return t !== t;
};
function ye() {
  ye.init.call(this);
}
et.exports = ye;
et.exports.once = ba;
ye.EventEmitter = ye;
ye.prototype._events = void 0;
ye.prototype._eventsCount = 0;
ye.prototype._maxListeners = void 0;
var Yn = 10;
function Pt(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(ye, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return Yn;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || Xi(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    Yn = e;
  }
});
ye.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
ye.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || Xi(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function Qi(e) {
  return e._maxListeners === void 0 ? ye.defaultMaxListeners : e._maxListeners;
}
ye.prototype.getMaxListeners = function() {
  return Qi(this);
};
ye.prototype.emit = function(t) {
  for (var r = [], o = 1; o < arguments.length; o++)
    r.push(arguments[o]);
  var a = t === "error", c = this._events;
  if (c !== void 0)
    a = a && c.error === void 0;
  else if (!a)
    return !1;
  if (a) {
    var u;
    if (r.length > 0 && (u = r[0]), u instanceof Error)
      throw u;
    var s = new Error("Unhandled error." + (u ? " (" + u.message + ")" : ""));
    throw s.context = u, s;
  }
  var l = c[t];
  if (l === void 0)
    return !1;
  if (typeof l == "function")
    Kn(l, this, r);
  else
    for (var b = l.length, E = no(l, b), o = 0; o < b; ++o)
      Kn(E[o], this, r);
  return !0;
};
function Zi(e, t, r, o) {
  var a, c, u;
  if (Pt(r), c = e._events, c === void 0 ? (c = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (c.newListener !== void 0 && (e.emit(
    "newListener",
    t,
    r.listener ? r.listener : r
  ), c = e._events), u = c[t]), u === void 0)
    u = c[t] = r, ++e._eventsCount;
  else if (typeof u == "function" ? u = c[t] = o ? [r, u] : [u, r] : o ? u.unshift(r) : u.push(r), a = Qi(e), a > 0 && u.length > a && !u.warned) {
    u.warned = !0;
    var s = new Error("Possible EventEmitter memory leak detected. " + u.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    s.name = "MaxListenersExceededWarning", s.emitter = e, s.type = t, s.count = u.length, pa(s);
  }
  return e;
}
ye.prototype.addListener = function(t, r) {
  return Zi(this, t, r, !1);
};
ye.prototype.on = ye.prototype.addListener;
ye.prototype.prependListener = function(t, r) {
  return Zi(this, t, r, !0);
};
function ya() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function eo(e, t, r) {
  var o = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r }, a = ya.bind(o);
  return a.listener = r, o.wrapFn = a, a;
}
ye.prototype.once = function(t, r) {
  return Pt(r), this.on(t, eo(this, t, r)), this;
};
ye.prototype.prependOnceListener = function(t, r) {
  return Pt(r), this.prependListener(t, eo(this, t, r)), this;
};
ye.prototype.removeListener = function(t, r) {
  var o, a, c, u, s;
  if (Pt(r), a = this._events, a === void 0)
    return this;
  if (o = a[t], o === void 0)
    return this;
  if (o === r || o.listener === r)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete a[t], a.removeListener && this.emit("removeListener", t, o.listener || r));
  else if (typeof o != "function") {
    for (c = -1, u = o.length - 1; u >= 0; u--)
      if (o[u] === r || o[u].listener === r) {
        s = o[u].listener, c = u;
        break;
      }
    if (c < 0)
      return this;
    c === 0 ? o.shift() : ga(o, c), o.length === 1 && (a[t] = o[0]), a.removeListener !== void 0 && this.emit("removeListener", t, s || r);
  }
  return this;
};
ye.prototype.off = ye.prototype.removeListener;
ye.prototype.removeAllListeners = function(t) {
  var r, o, a;
  if (o = this._events, o === void 0)
    return this;
  if (o.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : o[t] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete o[t]), this;
  if (arguments.length === 0) {
    var c = Object.keys(o), u;
    for (a = 0; a < c.length; ++a)
      u = c[a], u !== "removeListener" && this.removeAllListeners(u);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (r = o[t], typeof r == "function")
    this.removeListener(t, r);
  else if (r !== void 0)
    for (a = r.length - 1; a >= 0; a--)
      this.removeListener(t, r[a]);
  return this;
};
function to(e, t, r) {
  var o = e._events;
  if (o === void 0)
    return [];
  var a = o[t];
  return a === void 0 ? [] : typeof a == "function" ? r ? [a.listener || a] : [a] : r ? _a(a) : no(a, a.length);
}
ye.prototype.listeners = function(t) {
  return to(this, t, !0);
};
ye.prototype.rawListeners = function(t) {
  return to(this, t, !1);
};
ye.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : ro.call(e, t);
};
ye.prototype.listenerCount = ro;
function ro(e) {
  var t = this._events;
  if (t !== void 0) {
    var r = t[e];
    if (typeof r == "function")
      return 1;
    if (r !== void 0)
      return r.length;
  }
  return 0;
}
ye.prototype.eventNames = function() {
  return this._eventsCount > 0 ? St(this._events) : [];
};
function no(e, t) {
  for (var r = new Array(t), o = 0; o < t; ++o)
    r[o] = e[o];
  return r;
}
function ga(e, t) {
  for (; t + 1 < e.length; t++)
    e[t] = e[t + 1];
  e.pop();
}
function _a(e) {
  for (var t = new Array(e.length), r = 0; r < t.length; ++r)
    t[r] = e[r].listener || e[r];
  return t;
}
function ba(e, t) {
  return new Promise(function(r, o) {
    function a(u) {
      e.removeListener(t, c), o(u);
    }
    function c() {
      typeof e.removeListener == "function" && e.removeListener("error", a), r([].slice.call(arguments));
    }
    io(e, t, c, { once: !0 }), t !== "error" && ma(e, a, { once: !0 });
  });
}
function ma(e, t, r) {
  typeof e.on == "function" && io(e, "error", t, r);
}
function io(e, t, r, o) {
  if (typeof e.on == "function")
    o.once ? e.once(t, r) : e.on(t, r);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(t, function a(c) {
      o.once && e.removeEventListener(t, a), r(c);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var zr = {}, mt = { exports: {} };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var Xn;
function wa() {
  return Xn || (Xn = 1, function(e, t) {
    var r = Ze(), o = r.Buffer;
    function a(u, s) {
      for (var l in u)
        s[l] = u[l];
    }
    o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow ? e.exports = r : (a(r, t), t.Buffer = c);
    function c(u, s, l) {
      return o(u, s, l);
    }
    c.prototype = Object.create(o.prototype), a(o, c), c.from = function(u, s, l) {
      if (typeof u == "number")
        throw new TypeError("Argument must not be a number");
      return o(u, s, l);
    }, c.alloc = function(u, s, l) {
      if (typeof u != "number")
        throw new TypeError("Argument must be a number");
      var b = o(u);
      return s !== void 0 ? typeof l == "string" ? b.fill(s, l) : b.fill(s) : b.fill(0), b;
    }, c.allocUnsafe = function(u) {
      if (typeof u != "number")
        throw new TypeError("Argument must be a number");
      return o(u);
    }, c.allocUnsafeSlow = function(u) {
      if (typeof u != "number")
        throw new TypeError("Argument must be a number");
      return r.SlowBuffer(u);
    };
  }(mt, mt.exports)), mt.exports;
}
var Qn;
function Zn() {
  if (Qn)
    return zr;
  Qn = 1;
  var e = wa().Buffer, t = e.isEncoding || function(v) {
    switch (v = "" + v, v && v.toLowerCase()) {
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
  function r(v) {
    if (!v)
      return "utf8";
    for (var T; ; )
      switch (v) {
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
          return v;
        default:
          if (T)
            return;
          v = ("" + v).toLowerCase(), T = !0;
      }
  }
  function o(v) {
    var T = r(v);
    if (typeof T != "string" && (e.isEncoding === t || !t(v)))
      throw new Error("Unknown encoding: " + v);
    return T || v;
  }
  zr.StringDecoder = a;
  function a(v) {
    this.encoding = o(v);
    var T;
    switch (this.encoding) {
      case "utf16le":
        this.text = O, this.end = S, T = 4;
        break;
      case "utf8":
        this.fillLast = l, T = 4;
        break;
      case "base64":
        this.text = y, this.end = w, T = 3;
        break;
      default:
        this.write = I, this.end = k;
        return;
    }
    this.lastNeed = 0, this.lastTotal = 0, this.lastChar = e.allocUnsafe(T);
  }
  a.prototype.write = function(v) {
    if (v.length === 0)
      return "";
    var T, j;
    if (this.lastNeed) {
      if (T = this.fillLast(v), T === void 0)
        return "";
      j = this.lastNeed, this.lastNeed = 0;
    } else
      j = 0;
    return j < v.length ? T ? T + this.text(v, j) : this.text(v, j) : T || "";
  }, a.prototype.end = E, a.prototype.text = b, a.prototype.fillLast = function(v) {
    if (this.lastNeed <= v.length)
      return v.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    v.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, v.length), this.lastNeed -= v.length;
  };
  function c(v) {
    return v <= 127 ? 0 : v >> 5 === 6 ? 2 : v >> 4 === 14 ? 3 : v >> 3 === 30 ? 4 : v >> 6 === 2 ? -1 : -2;
  }
  function u(v, T, j) {
    var K = T.length - 1;
    if (K < j)
      return 0;
    var J = c(T[K]);
    return J >= 0 ? (J > 0 && (v.lastNeed = J - 1), J) : --K < j || J === -2 ? 0 : (J = c(T[K]), J >= 0 ? (J > 0 && (v.lastNeed = J - 2), J) : --K < j || J === -2 ? 0 : (J = c(T[K]), J >= 0 ? (J > 0 && (J === 2 ? J = 0 : v.lastNeed = J - 3), J) : 0));
  }
  function s(v, T, j) {
    if ((T[0] & 192) !== 128)
      return v.lastNeed = 0, "\uFFFD";
    if (v.lastNeed > 1 && T.length > 1) {
      if ((T[1] & 192) !== 128)
        return v.lastNeed = 1, "\uFFFD";
      if (v.lastNeed > 2 && T.length > 2 && (T[2] & 192) !== 128)
        return v.lastNeed = 2, "\uFFFD";
    }
  }
  function l(v) {
    var T = this.lastTotal - this.lastNeed, j = s(this, v);
    if (j !== void 0)
      return j;
    if (this.lastNeed <= v.length)
      return v.copy(this.lastChar, T, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    v.copy(this.lastChar, T, 0, v.length), this.lastNeed -= v.length;
  }
  function b(v, T) {
    var j = u(this, v, T);
    if (!this.lastNeed)
      return v.toString("utf8", T);
    this.lastTotal = j;
    var K = v.length - (j - this.lastNeed);
    return v.copy(this.lastChar, 0, K), v.toString("utf8", T, K);
  }
  function E(v) {
    var T = v && v.length ? this.write(v) : "";
    return this.lastNeed ? T + "\uFFFD" : T;
  }
  function O(v, T) {
    if ((v.length - T) % 2 === 0) {
      var j = v.toString("utf16le", T);
      if (j) {
        var K = j.charCodeAt(j.length - 1);
        if (K >= 55296 && K <= 56319)
          return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = v[v.length - 2], this.lastChar[1] = v[v.length - 1], j.slice(0, -1);
      }
      return j;
    }
    return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = v[v.length - 1], v.toString("utf16le", T, v.length - 1);
  }
  function S(v) {
    var T = v && v.length ? this.write(v) : "";
    if (this.lastNeed) {
      var j = this.lastTotal - this.lastNeed;
      return T + this.lastChar.toString("utf16le", 0, j);
    }
    return T;
  }
  function y(v, T) {
    var j = (v.length - T) % 3;
    return j === 0 ? v.toString("base64", T) : (this.lastNeed = 3 - j, this.lastTotal = 3, j === 1 ? this.lastChar[0] = v[v.length - 1] : (this.lastChar[0] = v[v.length - 2], this.lastChar[1] = v[v.length - 1]), v.toString("base64", T, v.length - j));
  }
  function w(v) {
    var T = v && v.length ? this.write(v) : "";
    return this.lastNeed ? T + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : T;
  }
  function I(v) {
    return v.toString(this.encoding);
  }
  function k(v) {
    return v && v.length ? this.write(v) : "";
  }
  return zr;
}
var Bt = { exports: {} }, oo = et.exports.EventEmitter, Gr, ei;
function va() {
  if (ei)
    return Gr;
  ei = 1;
  function e(S, y) {
    var w = Object.keys(S);
    if (Object.getOwnPropertySymbols) {
      var I = Object.getOwnPropertySymbols(S);
      y && (I = I.filter(function(k) {
        return Object.getOwnPropertyDescriptor(S, k).enumerable;
      })), w.push.apply(w, I);
    }
    return w;
  }
  function t(S) {
    for (var y = 1; y < arguments.length; y++) {
      var w = arguments[y] != null ? arguments[y] : {};
      y % 2 ? e(Object(w), !0).forEach(function(I) {
        r(S, I, w[I]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(w)) : e(Object(w)).forEach(function(I) {
        Object.defineProperty(S, I, Object.getOwnPropertyDescriptor(w, I));
      });
    }
    return S;
  }
  function r(S, y, w) {
    return y in S ? Object.defineProperty(S, y, { value: w, enumerable: !0, configurable: !0, writable: !0 }) : S[y] = w, S;
  }
  function o(S, y) {
    if (!(S instanceof y))
      throw new TypeError("Cannot call a class as a function");
  }
  function a(S, y) {
    for (var w = 0; w < y.length; w++) {
      var I = y[w];
      I.enumerable = I.enumerable || !1, I.configurable = !0, "value" in I && (I.writable = !0), Object.defineProperty(S, I.key, I);
    }
  }
  function c(S, y, w) {
    return y && a(S.prototype, y), w && a(S, w), S;
  }
  var u = Ze(), s = u.Buffer, l = $i, b = l.inspect, E = b && b.custom || "inspect";
  function O(S, y, w) {
    s.prototype.copy.call(S, y, w);
  }
  return Gr = /* @__PURE__ */ function() {
    function S() {
      o(this, S), this.head = null, this.tail = null, this.length = 0;
    }
    return c(S, [{
      key: "push",
      value: function(w) {
        var I = {
          data: w,
          next: null
        };
        this.length > 0 ? this.tail.next = I : this.head = I, this.tail = I, ++this.length;
      }
    }, {
      key: "unshift",
      value: function(w) {
        var I = {
          data: w,
          next: this.head
        };
        this.length === 0 && (this.tail = I), this.head = I, ++this.length;
      }
    }, {
      key: "shift",
      value: function() {
        if (this.length !== 0) {
          var w = this.head.data;
          return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, w;
        }
      }
    }, {
      key: "clear",
      value: function() {
        this.head = this.tail = null, this.length = 0;
      }
    }, {
      key: "join",
      value: function(w) {
        if (this.length === 0)
          return "";
        for (var I = this.head, k = "" + I.data; I = I.next; )
          k += w + I.data;
        return k;
      }
    }, {
      key: "concat",
      value: function(w) {
        if (this.length === 0)
          return s.alloc(0);
        for (var I = s.allocUnsafe(w >>> 0), k = this.head, v = 0; k; )
          O(k.data, I, v), v += k.data.length, k = k.next;
        return I;
      }
    }, {
      key: "consume",
      value: function(w, I) {
        var k;
        return w < this.head.data.length ? (k = this.head.data.slice(0, w), this.head.data = this.head.data.slice(w)) : w === this.head.data.length ? k = this.shift() : k = I ? this._getString(w) : this._getBuffer(w), k;
      }
    }, {
      key: "first",
      value: function() {
        return this.head.data;
      }
    }, {
      key: "_getString",
      value: function(w) {
        var I = this.head, k = 1, v = I.data;
        for (w -= v.length; I = I.next; ) {
          var T = I.data, j = w > T.length ? T.length : w;
          if (j === T.length ? v += T : v += T.slice(0, w), w -= j, w === 0) {
            j === T.length ? (++k, I.next ? this.head = I.next : this.head = this.tail = null) : (this.head = I, I.data = T.slice(j));
            break;
          }
          ++k;
        }
        return this.length -= k, v;
      }
    }, {
      key: "_getBuffer",
      value: function(w) {
        var I = s.allocUnsafe(w), k = this.head, v = 1;
        for (k.data.copy(I), w -= k.data.length; k = k.next; ) {
          var T = k.data, j = w > T.length ? T.length : w;
          if (T.copy(I, I.length - w, 0, j), w -= j, w === 0) {
            j === T.length ? (++v, k.next ? this.head = k.next : this.head = this.tail = null) : (this.head = k, k.data = T.slice(j));
            break;
          }
          ++v;
        }
        return this.length -= v, I;
      }
    }, {
      key: E,
      value: function(w, I) {
        return b(this, t({}, I, {
          depth: 0,
          customInspect: !1
        }));
      }
    }]), S;
  }(), Gr;
}
function Ea(e, t) {
  var r = this, o = this._readableState && this._readableState.destroyed, a = this._writableState && this._writableState.destroyed;
  return o || a ? (t ? t(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, fe.exports.nextTick(pn, this, e)) : fe.exports.nextTick(pn, this, e)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function(c) {
    !t && c ? r._writableState ? r._writableState.errorEmitted ? fe.exports.nextTick(xt, r) : (r._writableState.errorEmitted = !0, fe.exports.nextTick(ti, r, c)) : fe.exports.nextTick(ti, r, c) : t ? (fe.exports.nextTick(xt, r), t(c)) : fe.exports.nextTick(xt, r);
  }), this);
}
function ti(e, t) {
  pn(e, t), xt(e);
}
function xt(e) {
  e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close");
}
function Sa() {
  this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
}
function pn(e, t) {
  e.emit("error", t);
}
function xa(e, t) {
  var r = e._readableState, o = e._writableState;
  r && r.autoDestroy || o && o.autoDestroy ? e.destroy(t) : e.emit("error", t);
}
var ao = {
  destroy: Ea,
  undestroy: Sa,
  errorOrDestroy: xa
}, qe = {};
function Aa(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
var so = {};
function Be(e, t, r) {
  r || (r = Error);
  function o(c, u, s) {
    return typeof t == "string" ? t : t(c, u, s);
  }
  var a = /* @__PURE__ */ function(c) {
    Aa(u, c);
    function u(s, l, b) {
      return c.call(this, o(s, l, b)) || this;
    }
    return u;
  }(r);
  a.prototype.name = r.name, a.prototype.code = e, so[e] = a;
}
function ri(e, t) {
  if (Array.isArray(e)) {
    var r = e.length;
    return e = e.map(function(o) {
      return String(o);
    }), r > 2 ? "one of ".concat(t, " ").concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1] : r === 2 ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0]);
  } else
    return "of ".concat(t, " ").concat(String(e));
}
function Ra(e, t, r) {
  return e.substr(!r || r < 0 ? 0 : +r, t.length) === t;
}
function Ba(e, t, r) {
  return (r === void 0 || r > e.length) && (r = e.length), e.substring(r - t.length, r) === t;
}
function Ta(e, t, r) {
  return typeof r != "number" && (r = 0), r + t.length > e.length ? !1 : e.indexOf(t, r) !== -1;
}
Be("ERR_INVALID_OPT_VALUE", function(e, t) {
  return 'The value "' + t + '" is invalid for option "' + e + '"';
}, TypeError);
Be("ERR_INVALID_ARG_TYPE", function(e, t, r) {
  var o;
  typeof t == "string" && Ra(t, "not ") ? (o = "must not be", t = t.replace(/^not /, "")) : o = "must be";
  var a;
  if (Ba(e, " argument"))
    a = "The ".concat(e, " ").concat(o, " ").concat(ri(t, "type"));
  else {
    var c = Ta(e, ".") ? "property" : "argument";
    a = 'The "'.concat(e, '" ').concat(c, " ").concat(o, " ").concat(ri(t, "type"));
  }
  return a += ". Received type ".concat(typeof r), a;
}, TypeError);
Be("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
Be("ERR_METHOD_NOT_IMPLEMENTED", function(e) {
  return "The " + e + " method is not implemented";
});
Be("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
Be("ERR_STREAM_DESTROYED", function(e) {
  return "Cannot call " + e + " after a stream was destroyed";
});
Be("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
Be("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
Be("ERR_STREAM_WRITE_AFTER_END", "write after end");
Be("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
Be("ERR_UNKNOWN_ENCODING", function(e) {
  return "Unknown encoding: " + e;
}, TypeError);
Be("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
qe.codes = so;
var Oa = qe.codes.ERR_INVALID_OPT_VALUE;
function Ia(e, t, r) {
  return e.highWaterMark != null ? e.highWaterMark : t ? e[r] : null;
}
function Fa(e, t, r, o) {
  var a = Ia(t, o, r);
  if (a != null) {
    if (!(isFinite(a) && Math.floor(a) === a) || a < 0) {
      var c = o ? r : "highWaterMark";
      throw new Oa(c, a);
    }
    return Math.floor(a);
  }
  return e.objectMode ? 16 : 16 * 1024;
}
var uo = {
  getHighWaterMark: Fa
}, Pa = Ca;
function Ca(e, t) {
  if (Vr("noDeprecation"))
    return e;
  var r = !1;
  function o() {
    if (!r) {
      if (Vr("throwDeprecation"))
        throw new Error(t);
      Vr("traceDeprecation") ? console.trace(t) : console.warn(t), r = !0;
    }
    return e.apply(this, arguments);
  }
  return o;
}
function Vr(e) {
  try {
    if (!me.localStorage)
      return !1;
  } catch {
    return !1;
  }
  var t = me.localStorage[e];
  return t == null ? !1 : String(t).toLowerCase() === "true";
}
var Jr, ni;
function fo() {
  if (ni)
    return Jr;
  ni = 1, Jr = X;
  function e(x) {
    var R = this;
    this.next = null, this.entry = null, this.finish = function() {
      Q(R, x);
    };
  }
  var t;
  X.WritableState = oe;
  var r = {
    deprecate: Pa
  }, o = oo, a = Ze().Buffer, c = me.Uint8Array || function() {
  };
  function u(x) {
    return a.from(x);
  }
  function s(x) {
    return a.isBuffer(x) || x instanceof c;
  }
  var l = ao, b = uo, E = b.getHighWaterMark, O = qe.codes, S = O.ERR_INVALID_ARG_TYPE, y = O.ERR_METHOD_NOT_IMPLEMENTED, w = O.ERR_MULTIPLE_CALLBACK, I = O.ERR_STREAM_CANNOT_PIPE, k = O.ERR_STREAM_DESTROYED, v = O.ERR_STREAM_NULL_VALUES, T = O.ERR_STREAM_WRITE_AFTER_END, j = O.ERR_UNKNOWN_ENCODING, K = l.errorOrDestroy;
  Re()(X, o);
  function J() {
  }
  function oe(x, R, L) {
    t = t || Qe(), x = x || {}, typeof L != "boolean" && (L = R instanceof t), this.objectMode = !!x.objectMode, L && (this.objectMode = this.objectMode || !!x.writableObjectMode), this.highWaterMark = E(this, x, "writableHighWaterMark", L), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    var V = x.decodeStrings === !1;
    this.decodeStrings = !V, this.defaultEncoding = x.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(Z) {
      F(R, Z);
    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = x.emitClose !== !1, this.autoDestroy = !!x.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new e(this);
  }
  oe.prototype.getBuffer = function() {
    for (var R = this.bufferedRequest, L = []; R; )
      L.push(R), R = R.next;
    return L;
  }, function() {
    try {
      Object.defineProperty(oe.prototype, "buffer", {
        get: r.deprecate(function() {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch {
    }
  }();
  var ae;
  typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (ae = Function.prototype[Symbol.hasInstance], Object.defineProperty(X, Symbol.hasInstance, {
    value: function(R) {
      return ae.call(this, R) ? !0 : this !== X ? !1 : R && R._writableState instanceof oe;
    }
  })) : ae = function(R) {
    return R instanceof this;
  };
  function X(x) {
    t = t || Qe();
    var R = this instanceof t;
    if (!R && !ae.call(X, this))
      return new X(x);
    this._writableState = new oe(x, this, R), this.writable = !0, x && (typeof x.write == "function" && (this._write = x.write), typeof x.writev == "function" && (this._writev = x.writev), typeof x.destroy == "function" && (this._destroy = x.destroy), typeof x.final == "function" && (this._final = x.final)), o.call(this);
  }
  X.prototype.pipe = function() {
    K(this, new I());
  };
  function ee(x, R) {
    var L = new T();
    K(x, L), fe.exports.nextTick(R, L);
  }
  function P(x, R, L, V) {
    var Z;
    return L === null ? Z = new v() : typeof L != "string" && !R.objectMode && (Z = new S("chunk", ["string", "Buffer"], L)), Z ? (K(x, Z), fe.exports.nextTick(V, Z), !1) : !0;
  }
  X.prototype.write = function(x, R, L) {
    var V = this._writableState, Z = !1, h = !V.objectMode && s(x);
    return h && !a.isBuffer(x) && (x = u(x)), typeof R == "function" && (L = R, R = null), h ? R = "buffer" : R || (R = V.defaultEncoding), typeof L != "function" && (L = J), V.ending ? ee(this, L) : (h || P(this, V, x, L)) && (V.pendingcb++, Z = q(this, V, h, x, R, L)), Z;
  }, X.prototype.cork = function() {
    this._writableState.corked++;
  }, X.prototype.uncork = function() {
    var x = this._writableState;
    x.corked && (x.corked--, !x.writing && !x.corked && !x.bufferProcessing && x.bufferedRequest && G(this, x));
  }, X.prototype.setDefaultEncoding = function(R) {
    if (typeof R == "string" && (R = R.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((R + "").toLowerCase()) > -1))
      throw new j(R);
    return this._writableState.defaultEncoding = R, this;
  }, Object.defineProperty(X.prototype, "writableBuffer", {
    enumerable: !1,
    get: function() {
      return this._writableState && this._writableState.getBuffer();
    }
  });
  function D(x, R, L) {
    return !x.objectMode && x.decodeStrings !== !1 && typeof R == "string" && (R = a.from(R, L)), R;
  }
  Object.defineProperty(X.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function() {
      return this._writableState.highWaterMark;
    }
  });
  function q(x, R, L, V, Z, h) {
    if (!L) {
      var p = D(R, V, Z);
      V !== p && (L = !0, Z = "buffer", V = p);
    }
    var z = R.objectMode ? 1 : V.length;
    R.length += z;
    var Y = R.length < R.highWaterMark;
    if (Y || (R.needDrain = !0), R.writing || R.corked) {
      var he = R.lastBufferedRequest;
      R.lastBufferedRequest = {
        chunk: V,
        encoding: Z,
        isBuf: L,
        callback: h,
        next: null
      }, he ? he.next = R.lastBufferedRequest : R.bufferedRequest = R.lastBufferedRequest, R.bufferedRequestCount += 1;
    } else
      m(x, R, !1, z, V, Z, h);
    return Y;
  }
  function m(x, R, L, V, Z, h, p) {
    R.writelen = V, R.writecb = p, R.writing = !0, R.sync = !0, R.destroyed ? R.onwrite(new k("write")) : L ? x._writev(Z, R.onwrite) : x._write(Z, h, R.onwrite), R.sync = !1;
  }
  function A(x, R, L, V, Z) {
    --R.pendingcb, L ? (fe.exports.nextTick(Z, V), fe.exports.nextTick(M, x, R), x._writableState.errorEmitted = !0, K(x, V)) : (Z(V), x._writableState.errorEmitted = !0, K(x, V), M(x, R));
  }
  function _(x) {
    x.writing = !1, x.writecb = null, x.length -= x.writelen, x.writelen = 0;
  }
  function F(x, R) {
    var L = x._writableState, V = L.sync, Z = L.writecb;
    if (typeof Z != "function")
      throw new w();
    if (_(L), R)
      A(x, L, V, R, Z);
    else {
      var h = te(L) || x.destroyed;
      !h && !L.corked && !L.bufferProcessing && L.bufferedRequest && G(x, L), V ? fe.exports.nextTick(N, x, L, h, Z) : N(x, L, h, Z);
    }
  }
  function N(x, R, L, V) {
    L || H(x, R), R.pendingcb--, V(), M(x, R);
  }
  function H(x, R) {
    R.length === 0 && R.needDrain && (R.needDrain = !1, x.emit("drain"));
  }
  function G(x, R) {
    R.bufferProcessing = !0;
    var L = R.bufferedRequest;
    if (x._writev && L && L.next) {
      var V = R.bufferedRequestCount, Z = new Array(V), h = R.corkedRequestsFree;
      h.entry = L;
      for (var p = 0, z = !0; L; )
        Z[p] = L, L.isBuf || (z = !1), L = L.next, p += 1;
      Z.allBuffers = z, m(x, R, !0, R.length, Z, "", h.finish), R.pendingcb++, R.lastBufferedRequest = null, h.next ? (R.corkedRequestsFree = h.next, h.next = null) : R.corkedRequestsFree = new e(R), R.bufferedRequestCount = 0;
    } else {
      for (; L; ) {
        var Y = L.chunk, he = L.encoding, ie = L.callback, ce = R.objectMode ? 1 : Y.length;
        if (m(x, R, !1, ce, Y, he, ie), L = L.next, R.bufferedRequestCount--, R.writing)
          break;
      }
      L === null && (R.lastBufferedRequest = null);
    }
    R.bufferedRequest = L, R.bufferProcessing = !1;
  }
  X.prototype._write = function(x, R, L) {
    L(new y("_write()"));
  }, X.prototype._writev = null, X.prototype.end = function(x, R, L) {
    var V = this._writableState;
    return typeof x == "function" ? (L = x, x = null, R = null) : typeof R == "function" && (L = R, R = null), x != null && this.write(x, R), V.corked && (V.corked = 1, this.uncork()), V.ending || W(this, V, L), this;
  }, Object.defineProperty(X.prototype, "writableLength", {
    enumerable: !1,
    get: function() {
      return this._writableState.length;
    }
  });
  function te(x) {
    return x.ending && x.length === 0 && x.bufferedRequest === null && !x.finished && !x.writing;
  }
  function re(x, R) {
    x._final(function(L) {
      R.pendingcb--, L && K(x, L), R.prefinished = !0, x.emit("prefinish"), M(x, R);
    });
  }
  function g(x, R) {
    !R.prefinished && !R.finalCalled && (typeof x._final == "function" && !R.destroyed ? (R.pendingcb++, R.finalCalled = !0, fe.exports.nextTick(re, x, R)) : (R.prefinished = !0, x.emit("prefinish")));
  }
  function M(x, R) {
    var L = te(R);
    if (L && (g(x, R), R.pendingcb === 0 && (R.finished = !0, x.emit("finish"), R.autoDestroy))) {
      var V = x._readableState;
      (!V || V.autoDestroy && V.endEmitted) && x.destroy();
    }
    return L;
  }
  function W(x, R, L) {
    R.ending = !0, M(x, R), L && (R.finished ? fe.exports.nextTick(L) : x.once("finish", L)), R.ended = !0, x.writable = !1;
  }
  function Q(x, R, L) {
    var V = x.entry;
    for (x.entry = null; V; ) {
      var Z = V.callback;
      R.pendingcb--, Z(L), V = V.next;
    }
    R.corkedRequestsFree.next = x;
  }
  return Object.defineProperty(X.prototype, "destroyed", {
    enumerable: !1,
    get: function() {
      return this._writableState === void 0 ? !1 : this._writableState.destroyed;
    },
    set: function(R) {
      !this._writableState || (this._writableState.destroyed = R);
    }
  }), X.prototype.destroy = l.destroy, X.prototype._undestroy = l.undestroy, X.prototype._destroy = function(x, R) {
    R(x);
  }, Jr;
}
var Kr, ii;
function Qe() {
  if (ii)
    return Kr;
  ii = 1;
  var e = Object.keys || function(b) {
    var E = [];
    for (var O in b)
      E.push(O);
    return E;
  };
  Kr = u;
  var t = lo(), r = fo();
  Re()(u, t);
  for (var o = e(r.prototype), a = 0; a < o.length; a++) {
    var c = o[a];
    u.prototype[c] || (u.prototype[c] = r.prototype[c]);
  }
  function u(b) {
    if (!(this instanceof u))
      return new u(b);
    t.call(this, b), r.call(this, b), this.allowHalfOpen = !0, b && (b.readable === !1 && (this.readable = !1), b.writable === !1 && (this.writable = !1), b.allowHalfOpen === !1 && (this.allowHalfOpen = !1, this.once("end", s)));
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
  function s() {
    this._writableState.ended || fe.exports.nextTick(l, this);
  }
  function l(b) {
    b.end();
  }
  return Object.defineProperty(u.prototype, "destroyed", {
    enumerable: !1,
    get: function() {
      return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function(E) {
      this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = E, this._writableState.destroyed = E);
    }
  }), Kr;
}
var oi = qe.codes.ERR_STREAM_PREMATURE_CLOSE;
function Ma(e) {
  var t = !1;
  return function() {
    if (!t) {
      t = !0;
      for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
        o[a] = arguments[a];
      e.apply(this, o);
    }
  };
}
function La() {
}
function ja(e) {
  return e.setHeader && typeof e.abort == "function";
}
function co(e, t, r) {
  if (typeof t == "function")
    return co(e, null, t);
  t || (t = {}), r = Ma(r || La);
  var o = t.readable || t.readable !== !1 && e.readable, a = t.writable || t.writable !== !1 && e.writable, c = function() {
    e.writable || s();
  }, u = e._writableState && e._writableState.finished, s = function() {
    a = !1, u = !0, o || r.call(e);
  }, l = e._readableState && e._readableState.endEmitted, b = function() {
    o = !1, l = !0, a || r.call(e);
  }, E = function(w) {
    r.call(e, w);
  }, O = function() {
    var w;
    if (o && !l)
      return (!e._readableState || !e._readableState.ended) && (w = new oi()), r.call(e, w);
    if (a && !u)
      return (!e._writableState || !e._writableState.ended) && (w = new oi()), r.call(e, w);
  }, S = function() {
    e.req.on("finish", s);
  };
  return ja(e) ? (e.on("complete", s), e.on("abort", O), e.req ? S() : e.on("request", S)) : a && !e._writableState && (e.on("end", c), e.on("close", c)), e.on("end", b), e.on("finish", s), t.error !== !1 && e.on("error", E), e.on("close", O), function() {
    e.removeListener("complete", s), e.removeListener("abort", O), e.removeListener("request", S), e.req && e.req.removeListener("finish", s), e.removeListener("end", c), e.removeListener("close", c), e.removeListener("finish", s), e.removeListener("end", b), e.removeListener("error", E), e.removeListener("close", O);
  };
}
var wn = co, Yr, ai;
function ka() {
  if (ai)
    return Yr;
  ai = 1;
  var e;
  function t(v, T, j) {
    return T in v ? Object.defineProperty(v, T, { value: j, enumerable: !0, configurable: !0, writable: !0 }) : v[T] = j, v;
  }
  var r = wn, o = Symbol("lastResolve"), a = Symbol("lastReject"), c = Symbol("error"), u = Symbol("ended"), s = Symbol("lastPromise"), l = Symbol("handlePromise"), b = Symbol("stream");
  function E(v, T) {
    return {
      value: v,
      done: T
    };
  }
  function O(v) {
    var T = v[o];
    if (T !== null) {
      var j = v[b].read();
      j !== null && (v[s] = null, v[o] = null, v[a] = null, T(E(j, !1)));
    }
  }
  function S(v) {
    fe.exports.nextTick(O, v);
  }
  function y(v, T) {
    return function(j, K) {
      v.then(function() {
        if (T[u]) {
          j(E(void 0, !0));
          return;
        }
        T[l](j, K);
      }, K);
    };
  }
  var w = Object.getPrototypeOf(function() {
  }), I = Object.setPrototypeOf((e = {
    get stream() {
      return this[b];
    },
    next: function() {
      var T = this, j = this[c];
      if (j !== null)
        return Promise.reject(j);
      if (this[u])
        return Promise.resolve(E(void 0, !0));
      if (this[b].destroyed)
        return new Promise(function(ae, X) {
          fe.exports.nextTick(function() {
            T[c] ? X(T[c]) : ae(E(void 0, !0));
          });
        });
      var K = this[s], J;
      if (K)
        J = new Promise(y(K, this));
      else {
        var oe = this[b].read();
        if (oe !== null)
          return Promise.resolve(E(oe, !1));
        J = new Promise(this[l]);
      }
      return this[s] = J, J;
    }
  }, t(e, Symbol.asyncIterator, function() {
    return this;
  }), t(e, "return", function() {
    var T = this;
    return new Promise(function(j, K) {
      T[b].destroy(null, function(J) {
        if (J) {
          K(J);
          return;
        }
        j(E(void 0, !0));
      });
    });
  }), e), w), k = function(T) {
    var j, K = Object.create(I, (j = {}, t(j, b, {
      value: T,
      writable: !0
    }), t(j, o, {
      value: null,
      writable: !0
    }), t(j, a, {
      value: null,
      writable: !0
    }), t(j, c, {
      value: null,
      writable: !0
    }), t(j, u, {
      value: T._readableState.endEmitted,
      writable: !0
    }), t(j, l, {
      value: function(oe, ae) {
        var X = K[b].read();
        X ? (K[s] = null, K[o] = null, K[a] = null, oe(E(X, !1))) : (K[o] = oe, K[a] = ae);
      },
      writable: !0
    }), j));
    return K[s] = null, r(T, function(J) {
      if (J && J.code !== "ERR_STREAM_PREMATURE_CLOSE") {
        var oe = K[a];
        oe !== null && (K[s] = null, K[o] = null, K[a] = null, oe(J)), K[c] = J;
        return;
      }
      var ae = K[o];
      ae !== null && (K[s] = null, K[o] = null, K[a] = null, ae(E(void 0, !0))), K[u] = !0;
    }), T.on("readable", S.bind(null, K)), K;
  };
  return Yr = k, Yr;
}
var Xr, si;
function Na() {
  return si || (si = 1, Xr = function() {
    throw new Error("Readable.from is not available in the browser");
  }), Xr;
}
var Qr, ui;
function lo() {
  if (ui)
    return Qr;
  ui = 1, Qr = ee;
  var e;
  ee.ReadableState = X, et.exports.EventEmitter;
  var t = function(p, z) {
    return p.listeners(z).length;
  }, r = oo, o = Ze().Buffer, a = me.Uint8Array || function() {
  };
  function c(h) {
    return o.from(h);
  }
  function u(h) {
    return o.isBuffer(h) || h instanceof a;
  }
  var s = $i, l;
  s && s.debuglog ? l = s.debuglog("stream") : l = function() {
  };
  var b = va(), E = ao, O = uo, S = O.getHighWaterMark, y = qe.codes, w = y.ERR_INVALID_ARG_TYPE, I = y.ERR_STREAM_PUSH_AFTER_EOF, k = y.ERR_METHOD_NOT_IMPLEMENTED, v = y.ERR_STREAM_UNSHIFT_AFTER_END_EVENT, T, j, K;
  Re()(ee, r);
  var J = E.errorOrDestroy, oe = ["error", "close", "destroy", "pause", "resume"];
  function ae(h, p, z) {
    if (typeof h.prependListener == "function")
      return h.prependListener(p, z);
    !h._events || !h._events[p] ? h.on(p, z) : Array.isArray(h._events[p]) ? h._events[p].unshift(z) : h._events[p] = [z, h._events[p]];
  }
  function X(h, p, z) {
    e = e || Qe(), h = h || {}, typeof z != "boolean" && (z = p instanceof e), this.objectMode = !!h.objectMode, z && (this.objectMode = this.objectMode || !!h.readableObjectMode), this.highWaterMark = S(this, h, "readableHighWaterMark", z), this.buffer = new b(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = h.emitClose !== !1, this.autoDestroy = !!h.autoDestroy, this.destroyed = !1, this.defaultEncoding = h.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, h.encoding && (T || (T = Zn().StringDecoder), this.decoder = new T(h.encoding), this.encoding = h.encoding);
  }
  function ee(h) {
    if (e = e || Qe(), !(this instanceof ee))
      return new ee(h);
    var p = this instanceof e;
    this._readableState = new X(h, this, p), this.readable = !0, h && (typeof h.read == "function" && (this._read = h.read), typeof h.destroy == "function" && (this._destroy = h.destroy)), r.call(this);
  }
  Object.defineProperty(ee.prototype, "destroyed", {
    enumerable: !1,
    get: function() {
      return this._readableState === void 0 ? !1 : this._readableState.destroyed;
    },
    set: function(p) {
      !this._readableState || (this._readableState.destroyed = p);
    }
  }), ee.prototype.destroy = E.destroy, ee.prototype._undestroy = E.undestroy, ee.prototype._destroy = function(h, p) {
    p(h);
  }, ee.prototype.push = function(h, p) {
    var z = this._readableState, Y;
    return z.objectMode ? Y = !0 : typeof h == "string" && (p = p || z.defaultEncoding, p !== z.encoding && (h = o.from(h, p), p = ""), Y = !0), P(this, h, p, !1, Y);
  }, ee.prototype.unshift = function(h) {
    return P(this, h, null, !0, !1);
  };
  function P(h, p, z, Y, he) {
    l("readableAddChunk", p);
    var ie = h._readableState;
    if (p === null)
      ie.reading = !1, F(h, ie);
    else {
      var ce;
      if (he || (ce = q(ie, p)), ce)
        J(h, ce);
      else if (ie.objectMode || p && p.length > 0)
        if (typeof p != "string" && !ie.objectMode && Object.getPrototypeOf(p) !== o.prototype && (p = c(p)), Y)
          ie.endEmitted ? J(h, new v()) : D(h, ie, p, !0);
        else if (ie.ended)
          J(h, new I());
        else {
          if (ie.destroyed)
            return !1;
          ie.reading = !1, ie.decoder && !z ? (p = ie.decoder.write(p), ie.objectMode || p.length !== 0 ? D(h, ie, p, !1) : G(h, ie)) : D(h, ie, p, !1);
        }
      else
        Y || (ie.reading = !1, G(h, ie));
    }
    return !ie.ended && (ie.length < ie.highWaterMark || ie.length === 0);
  }
  function D(h, p, z, Y) {
    p.flowing && p.length === 0 && !p.sync ? (p.awaitDrain = 0, h.emit("data", z)) : (p.length += p.objectMode ? 1 : z.length, Y ? p.buffer.unshift(z) : p.buffer.push(z), p.needReadable && N(h)), G(h, p);
  }
  function q(h, p) {
    var z;
    return !u(p) && typeof p != "string" && p !== void 0 && !h.objectMode && (z = new w("chunk", ["string", "Buffer", "Uint8Array"], p)), z;
  }
  ee.prototype.isPaused = function() {
    return this._readableState.flowing === !1;
  }, ee.prototype.setEncoding = function(h) {
    T || (T = Zn().StringDecoder);
    var p = new T(h);
    this._readableState.decoder = p, this._readableState.encoding = this._readableState.decoder.encoding;
    for (var z = this._readableState.buffer.head, Y = ""; z !== null; )
      Y += p.write(z.data), z = z.next;
    return this._readableState.buffer.clear(), Y !== "" && this._readableState.buffer.push(Y), this._readableState.length = Y.length, this;
  };
  var m = 1073741824;
  function A(h) {
    return h >= m ? h = m : (h--, h |= h >>> 1, h |= h >>> 2, h |= h >>> 4, h |= h >>> 8, h |= h >>> 16, h++), h;
  }
  function _(h, p) {
    return h <= 0 || p.length === 0 && p.ended ? 0 : p.objectMode ? 1 : h !== h ? p.flowing && p.length ? p.buffer.head.data.length : p.length : (h > p.highWaterMark && (p.highWaterMark = A(h)), h <= p.length ? h : p.ended ? p.length : (p.needReadable = !0, 0));
  }
  ee.prototype.read = function(h) {
    l("read", h), h = parseInt(h, 10);
    var p = this._readableState, z = h;
    if (h !== 0 && (p.emittedReadable = !1), h === 0 && p.needReadable && ((p.highWaterMark !== 0 ? p.length >= p.highWaterMark : p.length > 0) || p.ended))
      return l("read: emitReadable", p.length, p.ended), p.length === 0 && p.ended ? L(this) : N(this), null;
    if (h = _(h, p), h === 0 && p.ended)
      return p.length === 0 && L(this), null;
    var Y = p.needReadable;
    l("need readable", Y), (p.length === 0 || p.length - h < p.highWaterMark) && (Y = !0, l("length less than watermark", Y)), p.ended || p.reading ? (Y = !1, l("reading or ended", Y)) : Y && (l("do read"), p.reading = !0, p.sync = !0, p.length === 0 && (p.needReadable = !0), this._read(p.highWaterMark), p.sync = !1, p.reading || (h = _(z, p)));
    var he;
    return h > 0 ? he = R(h, p) : he = null, he === null ? (p.needReadable = p.length <= p.highWaterMark, h = 0) : (p.length -= h, p.awaitDrain = 0), p.length === 0 && (p.ended || (p.needReadable = !0), z !== h && p.ended && L(this)), he !== null && this.emit("data", he), he;
  };
  function F(h, p) {
    if (l("onEofChunk"), !p.ended) {
      if (p.decoder) {
        var z = p.decoder.end();
        z && z.length && (p.buffer.push(z), p.length += p.objectMode ? 1 : z.length);
      }
      p.ended = !0, p.sync ? N(h) : (p.needReadable = !1, p.emittedReadable || (p.emittedReadable = !0, H(h)));
    }
  }
  function N(h) {
    var p = h._readableState;
    l("emitReadable", p.needReadable, p.emittedReadable), p.needReadable = !1, p.emittedReadable || (l("emitReadable", p.flowing), p.emittedReadable = !0, fe.exports.nextTick(H, h));
  }
  function H(h) {
    var p = h._readableState;
    l("emitReadable_", p.destroyed, p.length, p.ended), !p.destroyed && (p.length || p.ended) && (h.emit("readable"), p.emittedReadable = !1), p.needReadable = !p.flowing && !p.ended && p.length <= p.highWaterMark, x(h);
  }
  function G(h, p) {
    p.readingMore || (p.readingMore = !0, fe.exports.nextTick(te, h, p));
  }
  function te(h, p) {
    for (; !p.reading && !p.ended && (p.length < p.highWaterMark || p.flowing && p.length === 0); ) {
      var z = p.length;
      if (l("maybeReadMore read 0"), h.read(0), z === p.length)
        break;
    }
    p.readingMore = !1;
  }
  ee.prototype._read = function(h) {
    J(this, new k("_read()"));
  }, ee.prototype.pipe = function(h, p) {
    var z = this, Y = this._readableState;
    switch (Y.pipesCount) {
      case 0:
        Y.pipes = h;
        break;
      case 1:
        Y.pipes = [Y.pipes, h];
        break;
      default:
        Y.pipes.push(h);
        break;
    }
    Y.pipesCount += 1, l("pipe count=%d opts=%j", Y.pipesCount, p);
    var he = (!p || p.end !== !1) && h !== fe.exports.stdout && h !== fe.exports.stderr, ie = he ? Se : Fe;
    Y.endEmitted ? fe.exports.nextTick(ie) : z.once("end", ie), h.on("unpipe", ce);
    function ce(f, n) {
      l("onunpipe"), f === z && n && n.hasUnpiped === !1 && (n.hasUnpiped = !0, Oe());
    }
    function Se() {
      l("onend"), h.end();
    }
    var $ = re(z);
    h.on("drain", $);
    var Te = !1;
    function Oe() {
      l("cleanup"), h.removeListener("close", Me), h.removeListener("finish", Ee), h.removeListener("drain", $), h.removeListener("error", Ie), h.removeListener("unpipe", ce), z.removeListener("end", Se), z.removeListener("end", Fe), z.removeListener("data", we), Te = !0, Y.awaitDrain && (!h._writableState || h._writableState.needDrain) && $();
    }
    z.on("data", we);
    function we(f) {
      l("ondata");
      var n = h.write(f);
      l("dest.write", n), n === !1 && ((Y.pipesCount === 1 && Y.pipes === h || Y.pipesCount > 1 && Z(Y.pipes, h) !== -1) && !Te && (l("false write response, pause", Y.awaitDrain), Y.awaitDrain++), z.pause());
    }
    function Ie(f) {
      l("onerror", f), Fe(), h.removeListener("error", Ie), t(h, "error") === 0 && J(h, f);
    }
    ae(h, "error", Ie);
    function Me() {
      h.removeListener("finish", Ee), Fe();
    }
    h.once("close", Me);
    function Ee() {
      l("onfinish"), h.removeListener("close", Me), Fe();
    }
    h.once("finish", Ee);
    function Fe() {
      l("unpipe"), z.unpipe(h);
    }
    return h.emit("pipe", z), Y.flowing || (l("pipe resume"), z.resume()), h;
  };
  function re(h) {
    return function() {
      var z = h._readableState;
      l("pipeOnDrain", z.awaitDrain), z.awaitDrain && z.awaitDrain--, z.awaitDrain === 0 && t(h, "data") && (z.flowing = !0, x(h));
    };
  }
  ee.prototype.unpipe = function(h) {
    var p = this._readableState, z = {
      hasUnpiped: !1
    };
    if (p.pipesCount === 0)
      return this;
    if (p.pipesCount === 1)
      return h && h !== p.pipes ? this : (h || (h = p.pipes), p.pipes = null, p.pipesCount = 0, p.flowing = !1, h && h.emit("unpipe", this, z), this);
    if (!h) {
      var Y = p.pipes, he = p.pipesCount;
      p.pipes = null, p.pipesCount = 0, p.flowing = !1;
      for (var ie = 0; ie < he; ie++)
        Y[ie].emit("unpipe", this, {
          hasUnpiped: !1
        });
      return this;
    }
    var ce = Z(p.pipes, h);
    return ce === -1 ? this : (p.pipes.splice(ce, 1), p.pipesCount -= 1, p.pipesCount === 1 && (p.pipes = p.pipes[0]), h.emit("unpipe", this, z), this);
  }, ee.prototype.on = function(h, p) {
    var z = r.prototype.on.call(this, h, p), Y = this._readableState;
    return h === "data" ? (Y.readableListening = this.listenerCount("readable") > 0, Y.flowing !== !1 && this.resume()) : h === "readable" && !Y.endEmitted && !Y.readableListening && (Y.readableListening = Y.needReadable = !0, Y.flowing = !1, Y.emittedReadable = !1, l("on readable", Y.length, Y.reading), Y.length ? N(this) : Y.reading || fe.exports.nextTick(M, this)), z;
  }, ee.prototype.addListener = ee.prototype.on, ee.prototype.removeListener = function(h, p) {
    var z = r.prototype.removeListener.call(this, h, p);
    return h === "readable" && fe.exports.nextTick(g, this), z;
  }, ee.prototype.removeAllListeners = function(h) {
    var p = r.prototype.removeAllListeners.apply(this, arguments);
    return (h === "readable" || h === void 0) && fe.exports.nextTick(g, this), p;
  };
  function g(h) {
    var p = h._readableState;
    p.readableListening = h.listenerCount("readable") > 0, p.resumeScheduled && !p.paused ? p.flowing = !0 : h.listenerCount("data") > 0 && h.resume();
  }
  function M(h) {
    l("readable nexttick read 0"), h.read(0);
  }
  ee.prototype.resume = function() {
    var h = this._readableState;
    return h.flowing || (l("resume"), h.flowing = !h.readableListening, W(this, h)), h.paused = !1, this;
  };
  function W(h, p) {
    p.resumeScheduled || (p.resumeScheduled = !0, fe.exports.nextTick(Q, h, p));
  }
  function Q(h, p) {
    l("resume", p.reading), p.reading || h.read(0), p.resumeScheduled = !1, h.emit("resume"), x(h), p.flowing && !p.reading && h.read(0);
  }
  ee.prototype.pause = function() {
    return l("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (l("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this;
  };
  function x(h) {
    var p = h._readableState;
    for (l("flow", p.flowing); p.flowing && h.read() !== null; )
      ;
  }
  ee.prototype.wrap = function(h) {
    var p = this, z = this._readableState, Y = !1;
    h.on("end", function() {
      if (l("wrapped end"), z.decoder && !z.ended) {
        var ce = z.decoder.end();
        ce && ce.length && p.push(ce);
      }
      p.push(null);
    }), h.on("data", function(ce) {
      if (l("wrapped data"), z.decoder && (ce = z.decoder.write(ce)), !(z.objectMode && ce == null) && !(!z.objectMode && (!ce || !ce.length))) {
        var Se = p.push(ce);
        Se || (Y = !0, h.pause());
      }
    });
    for (var he in h)
      this[he] === void 0 && typeof h[he] == "function" && (this[he] = function(Se) {
        return function() {
          return h[Se].apply(h, arguments);
        };
      }(he));
    for (var ie = 0; ie < oe.length; ie++)
      h.on(oe[ie], this.emit.bind(this, oe[ie]));
    return this._read = function(ce) {
      l("wrapped _read", ce), Y && (Y = !1, h.resume());
    }, this;
  }, typeof Symbol == "function" && (ee.prototype[Symbol.asyncIterator] = function() {
    return j === void 0 && (j = ka()), j(this);
  }), Object.defineProperty(ee.prototype, "readableHighWaterMark", {
    enumerable: !1,
    get: function() {
      return this._readableState.highWaterMark;
    }
  }), Object.defineProperty(ee.prototype, "readableBuffer", {
    enumerable: !1,
    get: function() {
      return this._readableState && this._readableState.buffer;
    }
  }), Object.defineProperty(ee.prototype, "readableFlowing", {
    enumerable: !1,
    get: function() {
      return this._readableState.flowing;
    },
    set: function(p) {
      this._readableState && (this._readableState.flowing = p);
    }
  }), ee._fromList = R, Object.defineProperty(ee.prototype, "readableLength", {
    enumerable: !1,
    get: function() {
      return this._readableState.length;
    }
  });
  function R(h, p) {
    if (p.length === 0)
      return null;
    var z;
    return p.objectMode ? z = p.buffer.shift() : !h || h >= p.length ? (p.decoder ? z = p.buffer.join("") : p.buffer.length === 1 ? z = p.buffer.first() : z = p.buffer.concat(p.length), p.buffer.clear()) : z = p.buffer.consume(h, p.decoder), z;
  }
  function L(h) {
    var p = h._readableState;
    l("endReadable", p.endEmitted), p.endEmitted || (p.ended = !0, fe.exports.nextTick(V, p, h));
  }
  function V(h, p) {
    if (l("endReadableNT", h.endEmitted, h.length), !h.endEmitted && h.length === 0 && (h.endEmitted = !0, p.readable = !1, p.emit("end"), h.autoDestroy)) {
      var z = p._writableState;
      (!z || z.autoDestroy && z.finished) && p.destroy();
    }
  }
  typeof Symbol == "function" && (ee.from = function(h, p) {
    return K === void 0 && (K = Na()), K(ee, h, p);
  });
  function Z(h, p) {
    for (var z = 0, Y = h.length; z < Y; z++)
      if (h[z] === p)
        return z;
    return -1;
  }
  return Qr;
}
var ho = Ce, Ct = qe.codes, Ua = Ct.ERR_METHOD_NOT_IMPLEMENTED, Da = Ct.ERR_MULTIPLE_CALLBACK, $a = Ct.ERR_TRANSFORM_ALREADY_TRANSFORMING, qa = Ct.ERR_TRANSFORM_WITH_LENGTH_0, Mt = Qe();
Re()(Ce, Mt);
function Ha(e, t) {
  var r = this._transformState;
  r.transforming = !1;
  var o = r.writecb;
  if (o === null)
    return this.emit("error", new Da());
  r.writechunk = null, r.writecb = null, t != null && this.push(t), o(e);
  var a = this._readableState;
  a.reading = !1, (a.needReadable || a.length < a.highWaterMark) && this._read(a.highWaterMark);
}
function Ce(e) {
  if (!(this instanceof Ce))
    return new Ce(e);
  Mt.call(this, e), this._transformState = {
    afterTransform: Ha.bind(this),
    needTransform: !1,
    transforming: !1,
    writecb: null,
    writechunk: null,
    writeencoding: null
  }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && (typeof e.transform == "function" && (this._transform = e.transform), typeof e.flush == "function" && (this._flush = e.flush)), this.on("prefinish", Wa);
}
function Wa() {
  var e = this;
  typeof this._flush == "function" && !this._readableState.destroyed ? this._flush(function(t, r) {
    fi(e, t, r);
  }) : fi(this, null, null);
}
Ce.prototype.push = function(e, t) {
  return this._transformState.needTransform = !1, Mt.prototype.push.call(this, e, t);
};
Ce.prototype._transform = function(e, t, r) {
  r(new Ua("_transform()"));
};
Ce.prototype._write = function(e, t, r) {
  var o = this._transformState;
  if (o.writecb = r, o.writechunk = e, o.writeencoding = t, !o.transforming) {
    var a = this._readableState;
    (o.needTransform || a.needReadable || a.length < a.highWaterMark) && this._read(a.highWaterMark);
  }
};
Ce.prototype._read = function(e) {
  var t = this._transformState;
  t.writechunk !== null && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0;
};
Ce.prototype._destroy = function(e, t) {
  Mt.prototype._destroy.call(this, e, function(r) {
    t(r);
  });
};
function fi(e, t, r) {
  if (t)
    return e.emit("error", t);
  if (r != null && e.push(r), e._writableState.length)
    throw new qa();
  if (e._transformState.transforming)
    throw new $a();
  return e.push(null);
}
var za = at, po = ho;
Re()(at, po);
function at(e) {
  if (!(this instanceof at))
    return new at(e);
  po.call(this, e);
}
at.prototype._transform = function(e, t, r) {
  r(null, e);
};
var Zr;
function Ga(e) {
  var t = !1;
  return function() {
    t || (t = !0, e.apply(void 0, arguments));
  };
}
var yo = qe.codes, Va = yo.ERR_MISSING_ARGS, Ja = yo.ERR_STREAM_DESTROYED;
function ci(e) {
  if (e)
    throw e;
}
function Ka(e) {
  return e.setHeader && typeof e.abort == "function";
}
function Ya(e, t, r, o) {
  o = Ga(o);
  var a = !1;
  e.on("close", function() {
    a = !0;
  }), Zr === void 0 && (Zr = wn), Zr(e, {
    readable: t,
    writable: r
  }, function(u) {
    if (u)
      return o(u);
    a = !0, o();
  });
  var c = !1;
  return function(u) {
    if (!a && !c) {
      if (c = !0, Ka(e))
        return e.abort();
      if (typeof e.destroy == "function")
        return e.destroy();
      o(u || new Ja("pipe"));
    }
  };
}
function li(e) {
  e();
}
function Xa(e, t) {
  return e.pipe(t);
}
function Qa(e) {
  return !e.length || typeof e[e.length - 1] != "function" ? ci : e.pop();
}
function Za() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var o = Qa(t);
  if (Array.isArray(t[0]) && (t = t[0]), t.length < 2)
    throw new Va("streams");
  var a, c = t.map(function(u, s) {
    var l = s < t.length - 1, b = s > 0;
    return Ya(u, l, b, function(E) {
      a || (a = E), E && c.forEach(li), !l && (c.forEach(li), o(a));
    });
  });
  return t.reduce(Xa);
}
var es = Za;
(function(e, t) {
  t = e.exports = lo(), t.Stream = t, t.Readable = t, t.Writable = fo(), t.Duplex = Qe(), t.Transform = ho, t.PassThrough = za, t.finished = wn, t.pipeline = es;
})(Bt, Bt.exports);
const { Transform: ts } = Bt.exports;
var rs = (e) => class go extends ts {
  constructor(r, o, a, c, u) {
    super(u), this._rate = r, this._capacity = o, this._delimitedSuffix = a, this._hashBitLength = c, this._options = u, this._state = new e(), this._state.initialize(r, o), this._finalized = !1;
  }
  _transform(r, o, a) {
    let c = null;
    try {
      this.update(r, o);
    } catch (u) {
      c = u;
    }
    a(c);
  }
  _flush(r) {
    let o = null;
    try {
      this.push(this.digest());
    } catch (a) {
      o = a;
    }
    r(o);
  }
  update(r, o) {
    if (!Ue.Buffer.isBuffer(r) && typeof r != "string")
      throw new TypeError("Data must be a string or a buffer");
    if (this._finalized)
      throw new Error("Digest already called");
    return Ue.Buffer.isBuffer(r) || (r = Ue.Buffer.from(r, o)), this._state.absorb(r), this;
  }
  digest(r) {
    if (this._finalized)
      throw new Error("Digest already called");
    this._finalized = !0, this._delimitedSuffix && this._state.absorbLastFewBits(this._delimitedSuffix);
    let o = this._state.squeeze(this._hashBitLength / 8);
    return r !== void 0 && (o = o.toString(r)), this._resetState(), o;
  }
  _resetState() {
    return this._state.initialize(this._rate, this._capacity), this;
  }
  _clone() {
    const r = new go(this._rate, this._capacity, this._delimitedSuffix, this._hashBitLength, this._options);
    return this._state.copy(r._state), r._finalized = this._finalized, r;
  }
};
const { Transform: ns } = Bt.exports;
var is = (e) => class _o extends ns {
  constructor(r, o, a, c) {
    super(c), this._rate = r, this._capacity = o, this._delimitedSuffix = a, this._options = c, this._state = new e(), this._state.initialize(r, o), this._finalized = !1;
  }
  _transform(r, o, a) {
    let c = null;
    try {
      this.update(r, o);
    } catch (u) {
      c = u;
    }
    a(c);
  }
  _flush() {
  }
  _read(r) {
    this.push(this.squeeze(r));
  }
  update(r, o) {
    if (!Ue.Buffer.isBuffer(r) && typeof r != "string")
      throw new TypeError("Data must be a string or a buffer");
    if (this._finalized)
      throw new Error("Squeeze already called");
    return Ue.Buffer.isBuffer(r) || (r = Ue.Buffer.from(r, o)), this._state.absorb(r), this;
  }
  squeeze(r, o) {
    this._finalized || (this._finalized = !0, this._state.absorbLastFewBits(this._delimitedSuffix));
    let a = this._state.squeeze(r);
    return o !== void 0 && (a = a.toString(o)), a;
  }
  _resetState() {
    return this._state.initialize(this._rate, this._capacity), this;
  }
  _clone() {
    const r = new _o(this._rate, this._capacity, this._delimitedSuffix, this._options);
    return this._state.copy(r._state), r._finalized = this._finalized, r;
  }
};
const os = rs, as = is;
var ss = function(e) {
  const t = os(e), r = as(e);
  return function(o, a) {
    switch (typeof o == "string" ? o.toLowerCase() : o) {
      case "keccak224":
        return new t(1152, 448, null, 224, a);
      case "keccak256":
        return new t(1088, 512, null, 256, a);
      case "keccak384":
        return new t(832, 768, null, 384, a);
      case "keccak512":
        return new t(576, 1024, null, 512, a);
      case "sha3-224":
        return new t(1152, 448, 6, 224, a);
      case "sha3-256":
        return new t(1088, 512, 6, 256, a);
      case "sha3-384":
        return new t(832, 768, 6, 384, a);
      case "sha3-512":
        return new t(576, 1024, 6, 512, a);
      case "shake128":
        return new r(1344, 256, 31, a);
      case "shake256":
        return new r(1088, 512, 31, a);
      default:
        throw new Error("Invald algorithm: " + o);
    }
  };
}, bo = {};
const hi = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
bo.p1600 = function(e) {
  for (let t = 0; t < 24; ++t) {
    const r = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], o = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], a = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], c = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], u = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], s = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], l = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], b = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], E = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48], O = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49];
    let S = E ^ (a << 1 | c >>> 31), y = O ^ (c << 1 | a >>> 31);
    const w = e[0] ^ S, I = e[1] ^ y, k = e[10] ^ S, v = e[11] ^ y, T = e[20] ^ S, j = e[21] ^ y, K = e[30] ^ S, J = e[31] ^ y, oe = e[40] ^ S, ae = e[41] ^ y;
    S = r ^ (u << 1 | s >>> 31), y = o ^ (s << 1 | u >>> 31);
    const X = e[2] ^ S, ee = e[3] ^ y, P = e[12] ^ S, D = e[13] ^ y, q = e[22] ^ S, m = e[23] ^ y, A = e[32] ^ S, _ = e[33] ^ y, F = e[42] ^ S, N = e[43] ^ y;
    S = a ^ (l << 1 | b >>> 31), y = c ^ (b << 1 | l >>> 31);
    const H = e[4] ^ S, G = e[5] ^ y, te = e[14] ^ S, re = e[15] ^ y, g = e[24] ^ S, M = e[25] ^ y, W = e[34] ^ S, Q = e[35] ^ y, x = e[44] ^ S, R = e[45] ^ y;
    S = u ^ (E << 1 | O >>> 31), y = s ^ (O << 1 | E >>> 31);
    const L = e[6] ^ S, V = e[7] ^ y, Z = e[16] ^ S, h = e[17] ^ y, p = e[26] ^ S, z = e[27] ^ y, Y = e[36] ^ S, he = e[37] ^ y, ie = e[46] ^ S, ce = e[47] ^ y;
    S = l ^ (r << 1 | o >>> 31), y = b ^ (o << 1 | r >>> 31);
    const Se = e[8] ^ S, $ = e[9] ^ y, Te = e[18] ^ S, Oe = e[19] ^ y, we = e[28] ^ S, Ie = e[29] ^ y, Me = e[38] ^ S, Ee = e[39] ^ y, Fe = e[48] ^ S, f = e[49] ^ y, n = w, i = I, d = v << 4 | k >>> 28, B = k << 4 | v >>> 28, C = T << 3 | j >>> 29, U = j << 3 | T >>> 29, se = J << 9 | K >>> 23, ge = K << 9 | J >>> 23, pe = oe << 18 | ae >>> 14, _e = ae << 18 | oe >>> 14, de = X << 1 | ee >>> 31, Ht = ee << 1 | X >>> 31, Wt = D << 12 | P >>> 20, zt = P << 12 | D >>> 20, Gt = q << 10 | m >>> 22, Vt = m << 10 | q >>> 22, Jt = _ << 13 | A >>> 19, Kt = A << 13 | _ >>> 19, Yt = F << 2 | N >>> 30, Xt = N << 2 | F >>> 30, Qt = G << 30 | H >>> 2, Zt = H << 30 | G >>> 2, er = te << 6 | re >>> 26, tr = re << 6 | te >>> 26, rr = M << 11 | g >>> 21, nr = g << 11 | M >>> 21, ir = W << 15 | Q >>> 17, or = Q << 15 | W >>> 17, ar = R << 29 | x >>> 3, sr = x << 29 | R >>> 3, ur = L << 28 | V >>> 4, fr = V << 28 | L >>> 4, cr = h << 23 | Z >>> 9, lr = Z << 23 | h >>> 9, hr = p << 25 | z >>> 7, dr = z << 25 | p >>> 7, pr = Y << 21 | he >>> 11, yr = he << 21 | Y >>> 11, gr = ce << 24 | ie >>> 8, _r = ie << 24 | ce >>> 8, br = Se << 27 | $ >>> 5, mr = $ << 27 | Se >>> 5, wr = Te << 20 | Oe >>> 12, vr = Oe << 20 | Te >>> 12, Er = Ie << 7 | we >>> 25, Sr = we << 7 | Ie >>> 25, xr = Me << 8 | Ee >>> 24, Ar = Ee << 8 | Me >>> 24, Rr = Fe << 14 | f >>> 18, Br = f << 14 | Fe >>> 18;
    e[0] = n ^ ~Wt & rr, e[1] = i ^ ~zt & nr, e[10] = ur ^ ~wr & C, e[11] = fr ^ ~vr & U, e[20] = de ^ ~er & hr, e[21] = Ht ^ ~tr & dr, e[30] = br ^ ~d & Gt, e[31] = mr ^ ~B & Vt, e[40] = Qt ^ ~cr & Er, e[41] = Zt ^ ~lr & Sr, e[2] = Wt ^ ~rr & pr, e[3] = zt ^ ~nr & yr, e[12] = wr ^ ~C & Jt, e[13] = vr ^ ~U & Kt, e[22] = er ^ ~hr & xr, e[23] = tr ^ ~dr & Ar, e[32] = d ^ ~Gt & ir, e[33] = B ^ ~Vt & or, e[42] = cr ^ ~Er & se, e[43] = lr ^ ~Sr & ge, e[4] = rr ^ ~pr & Rr, e[5] = nr ^ ~yr & Br, e[14] = C ^ ~Jt & ar, e[15] = U ^ ~Kt & sr, e[24] = hr ^ ~xr & pe, e[25] = dr ^ ~Ar & _e, e[34] = Gt ^ ~ir & gr, e[35] = Vt ^ ~or & _r, e[44] = Er ^ ~se & Yt, e[45] = Sr ^ ~ge & Xt, e[6] = pr ^ ~Rr & n, e[7] = yr ^ ~Br & i, e[16] = Jt ^ ~ar & ur, e[17] = Kt ^ ~sr & fr, e[26] = xr ^ ~pe & de, e[27] = Ar ^ ~_e & Ht, e[36] = ir ^ ~gr & br, e[37] = or ^ ~_r & mr, e[46] = se ^ ~Yt & Qt, e[47] = ge ^ ~Xt & Zt, e[8] = Rr ^ ~n & Wt, e[9] = Br ^ ~i & zt, e[18] = ar ^ ~ur & wr, e[19] = sr ^ ~fr & vr, e[28] = pe ^ ~de & er, e[29] = _e ^ ~Ht & tr, e[38] = gr ^ ~br & d, e[39] = _r ^ ~mr & B, e[48] = Yt ^ ~Qt & cr, e[49] = Xt ^ ~Zt & lr, e[0] ^= hi[t * 2], e[1] ^= hi[t * 2 + 1];
  }
};
const Tt = bo;
function tt() {
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
tt.prototype.initialize = function(e, t) {
  for (let r = 0; r < 50; ++r)
    this.state[r] = 0;
  this.blockSize = e / 8, this.count = 0, this.squeezing = !1;
};
tt.prototype.absorb = function(e) {
  for (let t = 0; t < e.length; ++t)
    this.state[~~(this.count / 4)] ^= e[t] << 8 * (this.count % 4), this.count += 1, this.count === this.blockSize && (Tt.p1600(this.state), this.count = 0);
};
tt.prototype.absorbLastFewBits = function(e) {
  this.state[~~(this.count / 4)] ^= e << 8 * (this.count % 4), (e & 128) !== 0 && this.count === this.blockSize - 1 && Tt.p1600(this.state), this.state[~~((this.blockSize - 1) / 4)] ^= 128 << 8 * ((this.blockSize - 1) % 4), Tt.p1600(this.state), this.count = 0, this.squeezing = !0;
};
tt.prototype.squeeze = function(e) {
  this.squeezing || this.absorbLastFewBits(1);
  const t = Ue.Buffer.alloc(e);
  for (let r = 0; r < e; ++r)
    t[r] = this.state[~~(this.count / 4)] >>> 8 * (this.count % 4) & 255, this.count += 1, this.count === this.blockSize && (Tt.p1600(this.state), this.count = 0);
  return t;
};
tt.prototype.copy = function(e) {
  for (let t = 0; t < 50; ++t)
    e.state[t] = this.state[t];
  e.blockSize = this.blockSize, e.count = this.count, e.squeezing = this.squeezing;
};
var us = tt, bf = ss(us), wt = { exports: {} }, di;
function He() {
  return di || (di = 1, function(e, t) {
    var r = Ze(), o = r.Buffer;
    function a(u, s) {
      for (var l in u)
        s[l] = u[l];
    }
    o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow ? e.exports = r : (a(r, t), t.Buffer = c);
    function c(u, s, l) {
      return o(u, s, l);
    }
    a(o, c), c.from = function(u, s, l) {
      if (typeof u == "number")
        throw new TypeError("Argument must not be a number");
      return o(u, s, l);
    }, c.alloc = function(u, s, l) {
      if (typeof u != "number")
        throw new TypeError("Argument must be a number");
      var b = o(u);
      return s !== void 0 ? typeof l == "string" ? b.fill(s, l) : b.fill(s) : b.fill(0), b;
    }, c.allocUnsafe = function(u) {
      if (typeof u != "number")
        throw new TypeError("Argument must be a number");
      return o(u);
    }, c.allocUnsafeSlow = function(u) {
      if (typeof u != "number")
        throw new TypeError("Argument must be a number");
      return r.SlowBuffer(u);
    };
  }(wt, wt.exports)), wt.exports;
}
var fs = { exports: {} }, mo = He().Buffer;
function Lt(e, t) {
  this._block = mo.alloc(e), this._finalSize = t, this._blockSize = e, this._len = 0;
}
Lt.prototype.update = function(e, t) {
  typeof e == "string" && (t = t || "utf8", e = mo.from(e, t));
  for (var r = this._block, o = this._blockSize, a = e.length, c = this._len, u = 0; u < a; ) {
    for (var s = c % o, l = Math.min(a - u, o - s), b = 0; b < l; b++)
      r[s + b] = e[u + b];
    c += l, u += l, c % o === 0 && this._update(r);
  }
  return this._len += a, this;
};
Lt.prototype.digest = function(e) {
  var t = this._len % this._blockSize;
  this._block[t] = 128, this._block.fill(0, t + 1), t >= this._finalSize && (this._update(this._block), this._block.fill(0));
  var r = this._len * 8;
  if (r <= 4294967295)
    this._block.writeUInt32BE(r, this._blockSize - 4);
  else {
    var o = (r & 4294967295) >>> 0, a = (r - o) / 4294967296;
    this._block.writeUInt32BE(a, this._blockSize - 8), this._block.writeUInt32BE(o, this._blockSize - 4);
  }
  this._update(this._block);
  var c = this._hash();
  return e ? c.toString(e) : c;
};
Lt.prototype._update = function() {
  throw new Error("_update must be implemented by subclass");
};
var rt = Lt, cs = Re(), wo = rt, ls = He().Buffer, hs = [
  1518500249,
  1859775393,
  -1894007588,
  -899497514
], ds = new Array(80);
function ft() {
  this.init(), this._w = ds, wo.call(this, 64, 56);
}
cs(ft, wo);
ft.prototype.init = function() {
  return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
};
function ps(e) {
  return e << 5 | e >>> 27;
}
function ys(e) {
  return e << 30 | e >>> 2;
}
function gs(e, t, r, o) {
  return e === 0 ? t & r | ~t & o : e === 2 ? t & r | t & o | r & o : t ^ r ^ o;
}
ft.prototype._update = function(e) {
  for (var t = this._w, r = this._a | 0, o = this._b | 0, a = this._c | 0, c = this._d | 0, u = this._e | 0, s = 0; s < 16; ++s)
    t[s] = e.readInt32BE(s * 4);
  for (; s < 80; ++s)
    t[s] = t[s - 3] ^ t[s - 8] ^ t[s - 14] ^ t[s - 16];
  for (var l = 0; l < 80; ++l) {
    var b = ~~(l / 20), E = ps(r) + gs(b, o, a, c) + u + t[l] + hs[b] | 0;
    u = c, c = a, a = ys(o), o = r, r = E;
  }
  this._a = r + this._a | 0, this._b = o + this._b | 0, this._c = a + this._c | 0, this._d = c + this._d | 0, this._e = u + this._e | 0;
};
ft.prototype._hash = function() {
  var e = ls.allocUnsafe(20);
  return e.writeInt32BE(this._a | 0, 0), e.writeInt32BE(this._b | 0, 4), e.writeInt32BE(this._c | 0, 8), e.writeInt32BE(this._d | 0, 12), e.writeInt32BE(this._e | 0, 16), e;
};
var _s = ft, bs = Re(), vo = rt, ms = He().Buffer, ws = [
  1518500249,
  1859775393,
  -1894007588,
  -899497514
], vs = new Array(80);
function ct() {
  this.init(), this._w = vs, vo.call(this, 64, 56);
}
bs(ct, vo);
ct.prototype.init = function() {
  return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
};
function Es(e) {
  return e << 1 | e >>> 31;
}
function Ss(e) {
  return e << 5 | e >>> 27;
}
function xs(e) {
  return e << 30 | e >>> 2;
}
function As(e, t, r, o) {
  return e === 0 ? t & r | ~t & o : e === 2 ? t & r | t & o | r & o : t ^ r ^ o;
}
ct.prototype._update = function(e) {
  for (var t = this._w, r = this._a | 0, o = this._b | 0, a = this._c | 0, c = this._d | 0, u = this._e | 0, s = 0; s < 16; ++s)
    t[s] = e.readInt32BE(s * 4);
  for (; s < 80; ++s)
    t[s] = Es(t[s - 3] ^ t[s - 8] ^ t[s - 14] ^ t[s - 16]);
  for (var l = 0; l < 80; ++l) {
    var b = ~~(l / 20), E = Ss(r) + As(b, o, a, c) + u + t[l] + ws[b] | 0;
    u = c, c = a, a = xs(o), o = r, r = E;
  }
  this._a = r + this._a | 0, this._b = o + this._b | 0, this._c = a + this._c | 0, this._d = c + this._d | 0, this._e = u + this._e | 0;
};
ct.prototype._hash = function() {
  var e = ms.allocUnsafe(20);
  return e.writeInt32BE(this._a | 0, 0), e.writeInt32BE(this._b | 0, 4), e.writeInt32BE(this._c | 0, 8), e.writeInt32BE(this._d | 0, 12), e.writeInt32BE(this._e | 0, 16), e;
};
var Rs = ct, Bs = Re(), Eo = rt, Ts = He().Buffer, Os = [
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
], Is = new Array(64);
function lt() {
  this.init(), this._w = Is, Eo.call(this, 64, 56);
}
Bs(lt, Eo);
lt.prototype.init = function() {
  return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this;
};
function Fs(e, t, r) {
  return r ^ e & (t ^ r);
}
function Ps(e, t, r) {
  return e & t | r & (e | t);
}
function Cs(e) {
  return (e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10);
}
function Ms(e) {
  return (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
}
function Ls(e) {
  return (e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3;
}
function js(e) {
  return (e >>> 17 | e << 15) ^ (e >>> 19 | e << 13) ^ e >>> 10;
}
lt.prototype._update = function(e) {
  for (var t = this._w, r = this._a | 0, o = this._b | 0, a = this._c | 0, c = this._d | 0, u = this._e | 0, s = this._f | 0, l = this._g | 0, b = this._h | 0, E = 0; E < 16; ++E)
    t[E] = e.readInt32BE(E * 4);
  for (; E < 64; ++E)
    t[E] = js(t[E - 2]) + t[E - 7] + Ls(t[E - 15]) + t[E - 16] | 0;
  for (var O = 0; O < 64; ++O) {
    var S = b + Ms(u) + Fs(u, s, l) + Os[O] + t[O] | 0, y = Cs(r) + Ps(r, o, a) | 0;
    b = l, l = s, s = u, u = c + S | 0, c = a, a = o, o = r, r = S + y | 0;
  }
  this._a = r + this._a | 0, this._b = o + this._b | 0, this._c = a + this._c | 0, this._d = c + this._d | 0, this._e = u + this._e | 0, this._f = s + this._f | 0, this._g = l + this._g | 0, this._h = b + this._h | 0;
};
lt.prototype._hash = function() {
  var e = Ts.allocUnsafe(32);
  return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e.writeInt32BE(this._h, 28), e;
};
var So = lt, ks = Re(), Ns = So, Us = rt, Ds = He().Buffer, $s = new Array(64);
function jt() {
  this.init(), this._w = $s, Us.call(this, 64, 56);
}
ks(jt, Ns);
jt.prototype.init = function() {
  return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this;
};
jt.prototype._hash = function() {
  var e = Ds.allocUnsafe(28);
  return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e;
};
var qs = jt, Hs = Re(), xo = rt, Ws = He().Buffer, pi = [
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
], zs = new Array(160);
function ht() {
  this.init(), this._w = zs, xo.call(this, 128, 112);
}
Hs(ht, xo);
ht.prototype.init = function() {
  return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this;
};
function yi(e, t, r) {
  return r ^ e & (t ^ r);
}
function gi(e, t, r) {
  return e & t | r & (e | t);
}
function _i(e, t) {
  return (e >>> 28 | t << 4) ^ (t >>> 2 | e << 30) ^ (t >>> 7 | e << 25);
}
function bi(e, t) {
  return (e >>> 14 | t << 18) ^ (e >>> 18 | t << 14) ^ (t >>> 9 | e << 23);
}
function Gs(e, t) {
  return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ e >>> 7;
}
function Vs(e, t) {
  return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ (e >>> 7 | t << 25);
}
function Js(e, t) {
  return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ e >>> 6;
}
function Ks(e, t) {
  return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ (e >>> 6 | t << 26);
}
function be(e, t) {
  return e >>> 0 < t >>> 0 ? 1 : 0;
}
ht.prototype._update = function(e) {
  for (var t = this._w, r = this._ah | 0, o = this._bh | 0, a = this._ch | 0, c = this._dh | 0, u = this._eh | 0, s = this._fh | 0, l = this._gh | 0, b = this._hh | 0, E = this._al | 0, O = this._bl | 0, S = this._cl | 0, y = this._dl | 0, w = this._el | 0, I = this._fl | 0, k = this._gl | 0, v = this._hl | 0, T = 0; T < 32; T += 2)
    t[T] = e.readInt32BE(T * 4), t[T + 1] = e.readInt32BE(T * 4 + 4);
  for (; T < 160; T += 2) {
    var j = t[T - 30], K = t[T - 15 * 2 + 1], J = Gs(j, K), oe = Vs(K, j);
    j = t[T - 2 * 2], K = t[T - 2 * 2 + 1];
    var ae = Js(j, K), X = Ks(K, j), ee = t[T - 7 * 2], P = t[T - 7 * 2 + 1], D = t[T - 16 * 2], q = t[T - 16 * 2 + 1], m = oe + P | 0, A = J + ee + be(m, oe) | 0;
    m = m + X | 0, A = A + ae + be(m, X) | 0, m = m + q | 0, A = A + D + be(m, q) | 0, t[T] = A, t[T + 1] = m;
  }
  for (var _ = 0; _ < 160; _ += 2) {
    A = t[_], m = t[_ + 1];
    var F = gi(r, o, a), N = gi(E, O, S), H = _i(r, E), G = _i(E, r), te = bi(u, w), re = bi(w, u), g = pi[_], M = pi[_ + 1], W = yi(u, s, l), Q = yi(w, I, k), x = v + re | 0, R = b + te + be(x, v) | 0;
    x = x + Q | 0, R = R + W + be(x, Q) | 0, x = x + M | 0, R = R + g + be(x, M) | 0, x = x + m | 0, R = R + A + be(x, m) | 0;
    var L = G + N | 0, V = H + F + be(L, G) | 0;
    b = l, v = k, l = s, k = I, s = u, I = w, w = y + x | 0, u = c + R + be(w, y) | 0, c = a, y = S, a = o, S = O, o = r, O = E, E = x + L | 0, r = R + V + be(E, x) | 0;
  }
  this._al = this._al + E | 0, this._bl = this._bl + O | 0, this._cl = this._cl + S | 0, this._dl = this._dl + y | 0, this._el = this._el + w | 0, this._fl = this._fl + I | 0, this._gl = this._gl + k | 0, this._hl = this._hl + v | 0, this._ah = this._ah + r + be(this._al, E) | 0, this._bh = this._bh + o + be(this._bl, O) | 0, this._ch = this._ch + a + be(this._cl, S) | 0, this._dh = this._dh + c + be(this._dl, y) | 0, this._eh = this._eh + u + be(this._el, w) | 0, this._fh = this._fh + s + be(this._fl, I) | 0, this._gh = this._gh + l + be(this._gl, k) | 0, this._hh = this._hh + b + be(this._hl, v) | 0;
};
ht.prototype._hash = function() {
  var e = Ws.allocUnsafe(64);
  function t(r, o, a) {
    e.writeInt32BE(r, a), e.writeInt32BE(o, a + 4);
  }
  return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), t(this._gh, this._gl, 48), t(this._hh, this._hl, 56), e;
};
var Ao = ht, Ys = Re(), Xs = Ao, Qs = rt, Zs = He().Buffer, eu = new Array(160);
function kt() {
  this.init(), this._w = eu, Qs.call(this, 128, 112);
}
Ys(kt, Xs);
kt.prototype.init = function() {
  return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this;
};
kt.prototype._hash = function() {
  var e = Zs.allocUnsafe(48);
  function t(r, o, a) {
    e.writeInt32BE(r, a), e.writeInt32BE(o, a + 4);
  }
  return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), e;
};
var tu = kt, We = fs.exports = function(t) {
  t = t.toLowerCase();
  var r = We[t];
  if (!r)
    throw new Error(t + " is not supported (we accept pull requests)");
  return new r();
};
We.sha = _s;
We.sha1 = Rs;
We.sha224 = qs;
We.sha256 = So;
We.sha384 = tu;
We.sha512 = Ao;
const mi = (e, t) => function() {
  const r = t.promiseModule, o = new Array(arguments.length);
  for (let a = 0; a < arguments.length; a++)
    o[a] = arguments[a];
  return new r((a, c) => {
    t.errorFirst ? o.push(function(u, s) {
      if (t.multiArgs) {
        const l = new Array(arguments.length - 1);
        for (let b = 1; b < arguments.length; b++)
          l[b - 1] = arguments[b];
        u ? (l.unshift(u), c(l)) : a(l);
      } else
        u ? c(u) : a(s);
    }) : o.push(function(u) {
      if (t.multiArgs) {
        const s = new Array(arguments.length - 1);
        for (let l = 0; l < arguments.length; l++)
          s[l] = arguments[l];
        a(s);
      } else
        a(u);
    }), e.apply(this, o);
  });
};
var ru = (e, t) => {
  t = Object.assign({
    exclude: [/.+(Sync|Stream)$/],
    errorFirst: !0,
    promiseModule: Promise
  }, t);
  const r = (a) => {
    const c = (u) => typeof u == "string" ? a === u : u.test(a);
    return t.include ? t.include.some(c) : !t.exclude.some(c);
  };
  let o;
  typeof e == "function" ? o = function() {
    return t.excludeMain ? e.apply(this, arguments) : mi(e, t).apply(this, arguments);
  } : o = Object.create(Object.getPrototypeOf(e));
  for (const a in e) {
    const c = e[a];
    o[a] = typeof c == "function" && r(a) ? mi(c, t) : c;
  }
  return o;
}, en, wi;
function nu() {
  if (wi)
    return en;
  wi = 1, en = t;
  var e = Object.prototype.hasOwnProperty;
  function t() {
    for (var r = {}, o = 0; o < arguments.length; o++) {
      var a = arguments[o];
      for (var c in a)
        e.call(a, c) && (r[c] = a[c]);
    }
    return r;
  }
  return en;
}
var iu = ou;
function ou(e) {
  e = e || {};
  var t = e.max || Number.MAX_SAFE_INTEGER, r = typeof e.start < "u" ? e.start : Math.floor(Math.random() * t);
  return function() {
    return r = r % t, r++;
  };
}
const au = nu(), su = iu();
var uu = ne;
function ne(e) {
  const t = this;
  t.currentProvider = e;
}
ne.prototype.getBalance = dt(2, "eth_getBalance");
ne.prototype.getCode = dt(2, "eth_getCode");
ne.prototype.getTransactionCount = dt(2, "eth_getTransactionCount");
ne.prototype.getStorageAt = dt(3, "eth_getStorageAt");
ne.prototype.call = dt(2, "eth_call");
ne.prototype.protocolVersion = ue("eth_protocolVersion");
ne.prototype.syncing = ue("eth_syncing");
ne.prototype.coinbase = ue("eth_coinbase");
ne.prototype.mining = ue("eth_mining");
ne.prototype.hashrate = ue("eth_hashrate");
ne.prototype.gasPrice = ue("eth_gasPrice");
ne.prototype.accounts = ue("eth_accounts");
ne.prototype.blockNumber = ue("eth_blockNumber");
ne.prototype.getBlockTransactionCountByHash = ue("eth_getBlockTransactionCountByHash");
ne.prototype.getBlockTransactionCountByNumber = ue("eth_getBlockTransactionCountByNumber");
ne.prototype.getUncleCountByBlockHash = ue("eth_getUncleCountByBlockHash");
ne.prototype.getUncleCountByBlockNumber = ue("eth_getUncleCountByBlockNumber");
ne.prototype.sign = ue("eth_sign");
ne.prototype.sendTransaction = ue("eth_sendTransaction");
ne.prototype.sendRawTransaction = ue("eth_sendRawTransaction");
ne.prototype.estimateGas = ue("eth_estimateGas");
ne.prototype.getBlockByHash = ue("eth_getBlockByHash");
ne.prototype.getBlockByNumber = ue("eth_getBlockByNumber");
ne.prototype.getTransactionByHash = ue("eth_getTransactionByHash");
ne.prototype.getTransactionByBlockHashAndIndex = ue("eth_getTransactionByBlockHashAndIndex");
ne.prototype.getTransactionByBlockNumberAndIndex = ue("eth_getTransactionByBlockNumberAndIndex");
ne.prototype.getTransactionReceipt = ue("eth_getTransactionReceipt");
ne.prototype.getUncleByBlockHashAndIndex = ue("eth_getUncleByBlockHashAndIndex");
ne.prototype.getUncleByBlockNumberAndIndex = ue("eth_getUncleByBlockNumberAndIndex");
ne.prototype.getCompilers = ue("eth_getCompilers");
ne.prototype.compileLLL = ue("eth_compileLLL");
ne.prototype.compileSolidity = ue("eth_compileSolidity");
ne.prototype.compileSerpent = ue("eth_compileSerpent");
ne.prototype.newFilter = ue("eth_newFilter");
ne.prototype.newBlockFilter = ue("eth_newBlockFilter");
ne.prototype.newPendingTransactionFilter = ue("eth_newPendingTransactionFilter");
ne.prototype.uninstallFilter = ue("eth_uninstallFilter");
ne.prototype.getFilterChanges = ue("eth_getFilterChanges");
ne.prototype.getFilterLogs = ue("eth_getFilterLogs");
ne.prototype.getLogs = ue("eth_getLogs");
ne.prototype.getWork = ue("eth_getWork");
ne.prototype.submitWork = ue("eth_submitWork");
ne.prototype.submitHashrate = ue("eth_submitHashrate");
ne.prototype.sendAsync = function(e, t) {
  this.currentProvider.sendAsync(fu(e), function(o, a) {
    if (!o && a.error && (o = new Error("EthQuery - RPC Error - " + a.error.message)), o)
      return t(o);
    t(null, a.result);
  });
};
function ue(e) {
  return function() {
    const t = this;
    var r = [].slice.call(arguments), o = r.pop();
    t.sendAsync({
      method: e,
      params: r
    }, o);
  };
}
function dt(e, t) {
  return function() {
    const r = this;
    var o = [].slice.call(arguments), a = o.pop();
    o.length < e && o.push("latest"), r.sendAsync({
      method: t,
      params: o
    }, a);
  };
}
function fu(e) {
  return au({
    id: su(),
    jsonrpc: "2.0",
    params: []
  }, e);
}
const cu = da(), Ro = et.exports;
var tn = typeof Reflect == "object" ? Reflect : null, lu = tn && typeof tn.apply == "function" ? tn.apply : function(t, r, o) {
  return Function.prototype.apply.call(t, r, o);
}, hu = vn;
function vn() {
  Ro.call(this);
}
cu.inherits(vn, Ro);
vn.prototype.emit = function(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t.push(arguments[r]);
  var o = e === "error", a = this._events;
  if (a !== void 0)
    o = o && a.error === void 0;
  else if (!o)
    return !1;
  if (o) {
    var c;
    if (t.length > 0 && (c = t[0]), c instanceof Error)
      throw c;
    var u = new Error("Unhandled error." + (c ? " (" + c.message + ")" : ""));
    throw u.context = c, u;
  }
  var s = a[e];
  if (s === void 0)
    return !1;
  if (typeof s == "function")
    vi(s, this, t);
  else
    for (var l = s.length, b = du(s, l), r = 0; r < l; ++r)
      vi(b[r], this, t);
  return !0;
};
function vi(e, t, r) {
  try {
    lu(e, t, r);
  } catch (o) {
    setTimeout(() => {
      throw o;
    });
  }
}
function du(e, t) {
  for (var r = new Array(t), o = 0; o < t; ++o)
    r[o] = e[o];
  return r;
}
const pu = hu, yu = 1e3, gu = (e, t) => e + t, Ei = ["sync", "latest"];
class _u extends pu {
  constructor(t = {}) {
    super(), this._blockResetDuration = t.blockResetDuration || 20 * yu, this._blockResetTimeout, this._currentBlock = null, this._isRunning = !1, this._onNewListener = this._onNewListener.bind(this), this._onRemoveListener = this._onRemoveListener.bind(this), this._resetCurrentBlock = this._resetCurrentBlock.bind(this), this._setupInternalEvents();
  }
  isRunning() {
    return this._isRunning;
  }
  getCurrentBlock() {
    return this._currentBlock;
  }
  async getLatestBlock() {
    return this._currentBlock ? this._currentBlock : await new Promise((r) => this.once("latest", r));
  }
  removeAllListeners(t) {
    t ? super.removeAllListeners(t) : super.removeAllListeners(), this._setupInternalEvents(), this._onRemoveListener();
  }
  _start() {
  }
  _end() {
  }
  _setupInternalEvents() {
    this.removeListener("newListener", this._onNewListener), this.removeListener("removeListener", this._onRemoveListener), this.on("newListener", this._onNewListener), this.on("removeListener", this._onRemoveListener);
  }
  _onNewListener(t, r) {
    !Ei.includes(t) || this._maybeStart();
  }
  _onRemoveListener(t, r) {
    this._getBlockTrackerEventCount() > 0 || this._maybeEnd();
  }
  _maybeStart() {
    this._isRunning || (this._isRunning = !0, this._cancelBlockResetTimeout(), this._start());
  }
  _maybeEnd() {
    !this._isRunning || (this._isRunning = !1, this._setupBlockResetTimeout(), this._end());
  }
  _getBlockTrackerEventCount() {
    return Ei.map((t) => this.listenerCount(t)).reduce(gu);
  }
  _newPotentialLatest(t) {
    const r = this._currentBlock;
    r && Si(t) <= Si(r) || this._setCurrentBlock(t);
  }
  _setCurrentBlock(t) {
    const r = this._currentBlock;
    this._currentBlock = t, this.emit("latest", t), this.emit("sync", { oldBlock: r, newBlock: t });
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
var bu = _u;
function Si(e) {
  return Number.parseInt(e, 16);
}
const mu = ru, wu = bu, vu = 1e3;
class Eu extends wu {
  constructor(t = {}) {
    if (!t.provider)
      throw new Error("PollingBlockTracker - no provider specified.");
    const r = t.pollingInterval || 20 * vu, o = t.retryTimeout || r / 10, a = t.keepEventLoopActive !== void 0 ? t.keepEventLoopActive : !0, c = t.setSkipCacheFlag || !1;
    super(Object.assign({
      blockResetDuration: r
    }, t)), this._provider = t.provider, this._pollingInterval = r, this._retryTimeout = o, this._keepEventLoopActive = a, this._setSkipCacheFlag = c;
  }
  async checkForLatestBlock() {
    return await this._updateLatestBlock(), await this.getLatestBlock();
  }
  _start() {
    this._performSync().catch((t) => this.emit("error", t));
  }
  async _performSync() {
    for (; this._isRunning; )
      try {
        await this._updateLatestBlock(), await xi(this._pollingInterval, !this._keepEventLoopActive);
      } catch (t) {
        const r = new Error(`PollingBlockTracker - encountered an error while attempting to update latest block:
${t.stack}`);
        try {
          this.emit("error", r);
        } catch {
          console.error(r);
        }
        await xi(this._retryTimeout, !this._keepEventLoopActive);
      }
  }
  async _updateLatestBlock() {
    const t = await this._fetchLatestBlock();
    this._newPotentialLatest(t);
  }
  async _fetchLatestBlock() {
    const t = { jsonrpc: "2.0", id: 1, method: "eth_blockNumber", params: [] };
    this._setSkipCacheFlag && (t.skipCache = !0);
    const r = await mu((o) => this._provider.sendAsync(t, o))();
    if (r.error)
      throw new Error(`PollingBlockTracker - encountered error fetching block:
${r.error}`);
    return r.result;
  }
}
var mf = Eu;
function xi(e, t) {
  return new Promise((r) => {
    const o = setTimeout(r, e);
    o.unref && t && o.unref();
  });
}
var rn = {}, vt = {}, nn = { exports: {} }, Ai;
function En() {
  return Ai || (Ai = 1, function(e) {
    var t, r, o, a, c, u, s, l, b, E, O, S, y, w, I, k, v, T, j, K, J, oe, ae, X, ee;
    (function(P) {
      var D = typeof me == "object" ? me : typeof self == "object" ? self : typeof this == "object" ? this : {};
      P(q(D, q(e.exports)));
      function q(m, A) {
        return m !== D && (typeof Object.create == "function" ? Object.defineProperty(m, "__esModule", { value: !0 }) : m.__esModule = !0), function(_, F) {
          return m[_] = A ? A(_, F) : F;
        };
      }
    })(function(P) {
      var D = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(m, A) {
        m.__proto__ = A;
      } || function(m, A) {
        for (var _ in A)
          Object.prototype.hasOwnProperty.call(A, _) && (m[_] = A[_]);
      };
      t = function(m, A) {
        if (typeof A != "function" && A !== null)
          throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
        D(m, A);
        function _() {
          this.constructor = m;
        }
        m.prototype = A === null ? Object.create(A) : (_.prototype = A.prototype, new _());
      }, r = Object.assign || function(m) {
        for (var A, _ = 1, F = arguments.length; _ < F; _++) {
          A = arguments[_];
          for (var N in A)
            Object.prototype.hasOwnProperty.call(A, N) && (m[N] = A[N]);
        }
        return m;
      }, o = function(m, A) {
        var _ = {};
        for (var F in m)
          Object.prototype.hasOwnProperty.call(m, F) && A.indexOf(F) < 0 && (_[F] = m[F]);
        if (m != null && typeof Object.getOwnPropertySymbols == "function")
          for (var N = 0, F = Object.getOwnPropertySymbols(m); N < F.length; N++)
            A.indexOf(F[N]) < 0 && Object.prototype.propertyIsEnumerable.call(m, F[N]) && (_[F[N]] = m[F[N]]);
        return _;
      }, a = function(m, A, _, F) {
        var N = arguments.length, H = N < 3 ? A : F === null ? F = Object.getOwnPropertyDescriptor(A, _) : F, G;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          H = Reflect.decorate(m, A, _, F);
        else
          for (var te = m.length - 1; te >= 0; te--)
            (G = m[te]) && (H = (N < 3 ? G(H) : N > 3 ? G(A, _, H) : G(A, _)) || H);
        return N > 3 && H && Object.defineProperty(A, _, H), H;
      }, c = function(m, A) {
        return function(_, F) {
          A(_, F, m);
        };
      }, u = function(m, A) {
        if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
          return Reflect.metadata(m, A);
      }, s = function(m, A, _, F) {
        function N(H) {
          return H instanceof _ ? H : new _(function(G) {
            G(H);
          });
        }
        return new (_ || (_ = Promise))(function(H, G) {
          function te(M) {
            try {
              g(F.next(M));
            } catch (W) {
              G(W);
            }
          }
          function re(M) {
            try {
              g(F.throw(M));
            } catch (W) {
              G(W);
            }
          }
          function g(M) {
            M.done ? H(M.value) : N(M.value).then(te, re);
          }
          g((F = F.apply(m, A || [])).next());
        });
      }, l = function(m, A) {
        var _ = { label: 0, sent: function() {
          if (H[0] & 1)
            throw H[1];
          return H[1];
        }, trys: [], ops: [] }, F, N, H, G;
        return G = { next: te(0), throw: te(1), return: te(2) }, typeof Symbol == "function" && (G[Symbol.iterator] = function() {
          return this;
        }), G;
        function te(g) {
          return function(M) {
            return re([g, M]);
          };
        }
        function re(g) {
          if (F)
            throw new TypeError("Generator is already executing.");
          for (; G && (G = 0, g[0] && (_ = 0)), _; )
            try {
              if (F = 1, N && (H = g[0] & 2 ? N.return : g[0] ? N.throw || ((H = N.return) && H.call(N), 0) : N.next) && !(H = H.call(N, g[1])).done)
                return H;
              switch (N = 0, H && (g = [g[0] & 2, H.value]), g[0]) {
                case 0:
                case 1:
                  H = g;
                  break;
                case 4:
                  return _.label++, { value: g[1], done: !1 };
                case 5:
                  _.label++, N = g[1], g = [0];
                  continue;
                case 7:
                  g = _.ops.pop(), _.trys.pop();
                  continue;
                default:
                  if (H = _.trys, !(H = H.length > 0 && H[H.length - 1]) && (g[0] === 6 || g[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (g[0] === 3 && (!H || g[1] > H[0] && g[1] < H[3])) {
                    _.label = g[1];
                    break;
                  }
                  if (g[0] === 6 && _.label < H[1]) {
                    _.label = H[1], H = g;
                    break;
                  }
                  if (H && _.label < H[2]) {
                    _.label = H[2], _.ops.push(g);
                    break;
                  }
                  H[2] && _.ops.pop(), _.trys.pop();
                  continue;
              }
              g = A.call(m, _);
            } catch (M) {
              g = [6, M], N = 0;
            } finally {
              F = H = 0;
            }
          if (g[0] & 5)
            throw g[1];
          return { value: g[0] ? g[1] : void 0, done: !0 };
        }
      }, b = function(m, A) {
        for (var _ in m)
          _ !== "default" && !Object.prototype.hasOwnProperty.call(A, _) && ee(A, m, _);
      }, ee = Object.create ? function(m, A, _, F) {
        F === void 0 && (F = _);
        var N = Object.getOwnPropertyDescriptor(A, _);
        (!N || ("get" in N ? !A.__esModule : N.writable || N.configurable)) && (N = { enumerable: !0, get: function() {
          return A[_];
        } }), Object.defineProperty(m, F, N);
      } : function(m, A, _, F) {
        F === void 0 && (F = _), m[F] = A[_];
      }, E = function(m) {
        var A = typeof Symbol == "function" && Symbol.iterator, _ = A && m[A], F = 0;
        if (_)
          return _.call(m);
        if (m && typeof m.length == "number")
          return {
            next: function() {
              return m && F >= m.length && (m = void 0), { value: m && m[F++], done: !m };
            }
          };
        throw new TypeError(A ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }, O = function(m, A) {
        var _ = typeof Symbol == "function" && m[Symbol.iterator];
        if (!_)
          return m;
        var F = _.call(m), N, H = [], G;
        try {
          for (; (A === void 0 || A-- > 0) && !(N = F.next()).done; )
            H.push(N.value);
        } catch (te) {
          G = { error: te };
        } finally {
          try {
            N && !N.done && (_ = F.return) && _.call(F);
          } finally {
            if (G)
              throw G.error;
          }
        }
        return H;
      }, S = function() {
        for (var m = [], A = 0; A < arguments.length; A++)
          m = m.concat(O(arguments[A]));
        return m;
      }, y = function() {
        for (var m = 0, A = 0, _ = arguments.length; A < _; A++)
          m += arguments[A].length;
        for (var F = Array(m), N = 0, A = 0; A < _; A++)
          for (var H = arguments[A], G = 0, te = H.length; G < te; G++, N++)
            F[N] = H[G];
        return F;
      }, w = function(m, A, _) {
        if (_ || arguments.length === 2)
          for (var F = 0, N = A.length, H; F < N; F++)
            (H || !(F in A)) && (H || (H = Array.prototype.slice.call(A, 0, F)), H[F] = A[F]);
        return m.concat(H || Array.prototype.slice.call(A));
      }, I = function(m) {
        return this instanceof I ? (this.v = m, this) : new I(m);
      }, k = function(m, A, _) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var F = _.apply(m, A || []), N, H = [];
        return N = {}, G("next"), G("throw"), G("return"), N[Symbol.asyncIterator] = function() {
          return this;
        }, N;
        function G(Q) {
          F[Q] && (N[Q] = function(x) {
            return new Promise(function(R, L) {
              H.push([Q, x, R, L]) > 1 || te(Q, x);
            });
          });
        }
        function te(Q, x) {
          try {
            re(F[Q](x));
          } catch (R) {
            W(H[0][3], R);
          }
        }
        function re(Q) {
          Q.value instanceof I ? Promise.resolve(Q.value.v).then(g, M) : W(H[0][2], Q);
        }
        function g(Q) {
          te("next", Q);
        }
        function M(Q) {
          te("throw", Q);
        }
        function W(Q, x) {
          Q(x), H.shift(), H.length && te(H[0][0], H[0][1]);
        }
      }, v = function(m) {
        var A, _;
        return A = {}, F("next"), F("throw", function(N) {
          throw N;
        }), F("return"), A[Symbol.iterator] = function() {
          return this;
        }, A;
        function F(N, H) {
          A[N] = m[N] ? function(G) {
            return (_ = !_) ? { value: I(m[N](G)), done: N === "return" } : H ? H(G) : G;
          } : H;
        }
      }, T = function(m) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var A = m[Symbol.asyncIterator], _;
        return A ? A.call(m) : (m = typeof E == "function" ? E(m) : m[Symbol.iterator](), _ = {}, F("next"), F("throw"), F("return"), _[Symbol.asyncIterator] = function() {
          return this;
        }, _);
        function F(H) {
          _[H] = m[H] && function(G) {
            return new Promise(function(te, re) {
              G = m[H](G), N(te, re, G.done, G.value);
            });
          };
        }
        function N(H, G, te, re) {
          Promise.resolve(re).then(function(g) {
            H({ value: g, done: te });
          }, G);
        }
      }, j = function(m, A) {
        return Object.defineProperty ? Object.defineProperty(m, "raw", { value: A }) : m.raw = A, m;
      };
      var q = Object.create ? function(m, A) {
        Object.defineProperty(m, "default", { enumerable: !0, value: A });
      } : function(m, A) {
        m.default = A;
      };
      K = function(m) {
        if (m && m.__esModule)
          return m;
        var A = {};
        if (m != null)
          for (var _ in m)
            _ !== "default" && Object.prototype.hasOwnProperty.call(m, _) && ee(A, m, _);
        return q(A, m), A;
      }, J = function(m) {
        return m && m.__esModule ? m : { default: m };
      }, oe = function(m, A, _, F) {
        if (_ === "a" && !F)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof A == "function" ? m !== A || !F : !A.has(m))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return _ === "m" ? F : _ === "a" ? F.call(m) : F ? F.value : A.get(m);
      }, ae = function(m, A, _, F, N) {
        if (F === "m")
          throw new TypeError("Private method is not writable");
        if (F === "a" && !N)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof A == "function" ? m !== A || !N : !A.has(m))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return F === "a" ? N.call(m, _) : N ? N.value = _ : A.set(m, _), _;
      }, X = function(m, A) {
        if (A === null || typeof A != "object" && typeof A != "function")
          throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof m == "function" ? A === m : m.has(A);
      }, P("__extends", t), P("__assign", r), P("__rest", o), P("__decorate", a), P("__param", c), P("__metadata", u), P("__awaiter", s), P("__generator", l), P("__exportStar", b), P("__createBinding", ee), P("__values", E), P("__read", O), P("__spread", S), P("__spreadArrays", y), P("__spreadArray", w), P("__await", I), P("__asyncGenerator", k), P("__asyncDelegator", v), P("__asyncValues", T), P("__makeTemplateObject", j), P("__importStar", K), P("__importDefault", J), P("__classPrivateFieldGet", oe), P("__classPrivateFieldSet", ae), P("__classPrivateFieldIn", X);
    });
  }(nn)), nn.exports;
}
var Et = {}, Ri;
function Bo() {
  if (Ri)
    return Et;
  Ri = 1, Object.defineProperty(Et, "__esModule", { value: !0 });
  var e = En(), t = function() {
    function r(o) {
      if (this._maxConcurrency = o, this._queue = [], o <= 0)
        throw new Error("semaphore must be initialized to a positive value");
      this._value = o;
    }
    return r.prototype.acquire = function() {
      var o = this, a = this.isLocked(), c = new Promise(function(u) {
        return o._queue.push(u);
      });
      return a || this._dispatch(), c;
    }, r.prototype.runExclusive = function(o) {
      return e.__awaiter(this, void 0, void 0, function() {
        var a, c, u;
        return e.__generator(this, function(s) {
          switch (s.label) {
            case 0:
              return [4, this.acquire()];
            case 1:
              a = s.sent(), c = a[0], u = a[1], s.label = 2;
            case 2:
              return s.trys.push([2, , 4, 5]), [4, o(c)];
            case 3:
              return [2, s.sent()];
            case 4:
              return u(), [7];
            case 5:
              return [2];
          }
        });
      });
    }, r.prototype.isLocked = function() {
      return this._value <= 0;
    }, r.prototype.release = function() {
      if (this._maxConcurrency > 1)
        throw new Error("this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead");
      if (this._currentReleaser) {
        var o = this._currentReleaser;
        this._currentReleaser = void 0, o();
      }
    }, r.prototype._dispatch = function() {
      var o = this, a = this._queue.shift();
      if (!!a) {
        var c = !1;
        this._currentReleaser = function() {
          c || (c = !0, o._value++, o._dispatch());
        }, a([this._value--, this._currentReleaser]);
      }
    }, r;
  }();
  return Et.default = t, Et;
}
var Bi;
function Su() {
  if (Bi)
    return vt;
  Bi = 1, Object.defineProperty(vt, "__esModule", { value: !0 });
  var e = En(), t = Bo(), r = function() {
    function o() {
      this._semaphore = new t.default(1);
    }
    return o.prototype.acquire = function() {
      return e.__awaiter(this, void 0, void 0, function() {
        var a, c;
        return e.__generator(this, function(u) {
          switch (u.label) {
            case 0:
              return [4, this._semaphore.acquire()];
            case 1:
              return a = u.sent(), c = a[1], [2, c];
          }
        });
      });
    }, o.prototype.runExclusive = function(a) {
      return this._semaphore.runExclusive(function() {
        return a();
      });
    }, o.prototype.isLocked = function() {
      return this._semaphore.isLocked();
    }, o.prototype.release = function() {
      this._semaphore.release();
    }, o;
  }();
  return vt.default = r, vt;
}
var it = {}, Ti;
function xu() {
  if (Ti)
    return it;
  Ti = 1, Object.defineProperty(it, "__esModule", { value: !0 }), it.withTimeout = void 0;
  var e = En();
  function t(r, o, a) {
    var c = this;
    return a === void 0 && (a = new Error("timeout")), {
      acquire: function() {
        return new Promise(function(u, s) {
          return e.__awaiter(c, void 0, void 0, function() {
            var l, b, E;
            return e.__generator(this, function(O) {
              switch (O.label) {
                case 0:
                  return l = !1, setTimeout(function() {
                    l = !0, s(a);
                  }, o), [4, r.acquire()];
                case 1:
                  return b = O.sent(), l ? (E = Array.isArray(b) ? b[1] : b, E()) : u(b), [2];
              }
            });
          });
        });
      },
      runExclusive: function(u) {
        return e.__awaiter(this, void 0, void 0, function() {
          var s, l;
          return e.__generator(this, function(b) {
            switch (b.label) {
              case 0:
                s = function() {
                }, b.label = 1;
              case 1:
                return b.trys.push([1, , 7, 8]), [4, this.acquire()];
              case 2:
                return l = b.sent(), Array.isArray(l) ? (s = l[1], [4, u(l[0])]) : [3, 4];
              case 3:
                return [2, b.sent()];
              case 4:
                return s = l, [4, u()];
              case 5:
                return [2, b.sent()];
              case 6:
                return [3, 8];
              case 7:
                return s(), [7];
              case 8:
                return [2];
            }
          });
        });
      },
      release: function() {
        r.release();
      },
      isLocked: function() {
        return r.isLocked();
      }
    };
  }
  return it.withTimeout = t, it;
}
var Oi;
function Au() {
  return Oi || (Oi = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.withTimeout = e.Semaphore = e.Mutex = void 0;
    var t = Su();
    Object.defineProperty(e, "Mutex", { enumerable: !0, get: function() {
      return t.default;
    } });
    var r = Bo();
    Object.defineProperty(e, "Semaphore", { enumerable: !0, get: function() {
      return r.default;
    } });
    var o = xu();
    Object.defineProperty(e, "withTimeout", { enumerable: !0, get: function() {
      return o.withTimeout;
    } });
  }(rn)), rn;
}
var Sn = {}, Nt = {}, pt = {};
Object.defineProperty(pt, "__esModule", { value: !0 });
pt.getUniqueId = void 0;
const To = 4294967295;
let on = Math.floor(Math.random() * To);
function Ru() {
  return on = (on + 1) % To, on;
}
pt.getUniqueId = Ru;
Object.defineProperty(Nt, "__esModule", { value: !0 });
Nt.createIdRemapMiddleware = void 0;
const Bu = pt;
function Tu() {
  return (e, t, r, o) => {
    const a = e.id, c = Bu.getUniqueId();
    e.id = c, t.id = c, r((u) => {
      e.id = a, t.id = a, u();
    });
  };
}
Nt.createIdRemapMiddleware = Tu;
var Ut = {};
Object.defineProperty(Ut, "__esModule", { value: !0 });
Ut.createAsyncMiddleware = void 0;
function Ou(e) {
  return async (t, r, o, a) => {
    let c;
    const u = new Promise((E) => {
      c = E;
    });
    let s = null, l = !1;
    const b = async () => {
      l = !0, o((E) => {
        s = E, c();
      }), await u;
    };
    try {
      await e(t, r, b), l ? (await u, s(null)) : a(null);
    } catch (E) {
      s ? s(E) : a(E);
    }
  };
}
Ut.createAsyncMiddleware = Ou;
var Dt = {};
Object.defineProperty(Dt, "__esModule", { value: !0 });
Dt.createScaffoldMiddleware = void 0;
function Iu(e) {
  return (t, r, o, a) => {
    const c = e[t.method];
    return c === void 0 ? o() : typeof c == "function" ? c(t, r, o, a) : (r.result = c, a());
  };
}
Dt.createScaffoldMiddleware = Iu;
var yt = {}, gt = {};
Object.defineProperty(gt, "__esModule", { value: !0 });
const Fu = et.exports;
function Ii(e, t, r) {
  try {
    Reflect.apply(e, t, r);
  } catch (o) {
    setTimeout(() => {
      throw o;
    });
  }
}
function Pu(e) {
  const t = e.length, r = new Array(t);
  for (let o = 0; o < t; o += 1)
    r[o] = e[o];
  return r;
}
class Cu extends Fu.EventEmitter {
  emit(t, ...r) {
    let o = t === "error";
    const a = this._events;
    if (a !== void 0)
      o = o && a.error === void 0;
    else if (!o)
      return !1;
    if (o) {
      let u;
      if (r.length > 0 && ([u] = r), u instanceof Error)
        throw u;
      const s = new Error(`Unhandled error.${u ? ` (${u.message})` : ""}`);
      throw s.context = u, s;
    }
    const c = a[t];
    if (c === void 0)
      return !1;
    if (typeof c == "function")
      Ii(c, this, r);
    else {
      const u = c.length, s = Pu(c);
      for (let l = 0; l < u; l += 1)
        Ii(s[l], this, r);
    }
    return !0;
  }
}
gt.default = Cu;
var Oo = {}, je = {}, Mu = st;
st.default = st;
st.stable = Po;
st.stableStringify = Po;
var Ot = "[...]", Io = "[Circular]", $e = [], Ne = [];
function Fo() {
  return {
    depthLimit: Number.MAX_SAFE_INTEGER,
    edgesLimit: Number.MAX_SAFE_INTEGER
  };
}
function st(e, t, r, o) {
  typeof o > "u" && (o = Fo()), yn(e, "", 0, [], void 0, 0, o);
  var a;
  try {
    Ne.length === 0 ? a = JSON.stringify(e, t, r) : a = JSON.stringify(e, Co(t), r);
  } catch {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
  } finally {
    for (; $e.length !== 0; ) {
      var c = $e.pop();
      c.length === 4 ? Object.defineProperty(c[0], c[1], c[3]) : c[0][c[1]] = c[2];
    }
  }
  return a;
}
function Ye(e, t, r, o) {
  var a = Object.getOwnPropertyDescriptor(o, r);
  a.get !== void 0 ? a.configurable ? (Object.defineProperty(o, r, { value: e }), $e.push([o, r, t, a])) : Ne.push([t, r, e]) : (o[r] = e, $e.push([o, r, t]));
}
function yn(e, t, r, o, a, c, u) {
  c += 1;
  var s;
  if (typeof e == "object" && e !== null) {
    for (s = 0; s < o.length; s++)
      if (o[s] === e) {
        Ye(Io, e, t, a);
        return;
      }
    if (typeof u.depthLimit < "u" && c > u.depthLimit) {
      Ye(Ot, e, t, a);
      return;
    }
    if (typeof u.edgesLimit < "u" && r + 1 > u.edgesLimit) {
      Ye(Ot, e, t, a);
      return;
    }
    if (o.push(e), Array.isArray(e))
      for (s = 0; s < e.length; s++)
        yn(e[s], s, s, o, e, c, u);
    else {
      var l = Object.keys(e);
      for (s = 0; s < l.length; s++) {
        var b = l[s];
        yn(e[b], b, s, o, e, c, u);
      }
    }
    o.pop();
  }
}
function Lu(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function Po(e, t, r, o) {
  typeof o > "u" && (o = Fo());
  var a = gn(e, "", 0, [], void 0, 0, o) || e, c;
  try {
    Ne.length === 0 ? c = JSON.stringify(a, t, r) : c = JSON.stringify(a, Co(t), r);
  } catch {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
  } finally {
    for (; $e.length !== 0; ) {
      var u = $e.pop();
      u.length === 4 ? Object.defineProperty(u[0], u[1], u[3]) : u[0][u[1]] = u[2];
    }
  }
  return c;
}
function gn(e, t, r, o, a, c, u) {
  c += 1;
  var s;
  if (typeof e == "object" && e !== null) {
    for (s = 0; s < o.length; s++)
      if (o[s] === e) {
        Ye(Io, e, t, a);
        return;
      }
    try {
      if (typeof e.toJSON == "function")
        return;
    } catch {
      return;
    }
    if (typeof u.depthLimit < "u" && c > u.depthLimit) {
      Ye(Ot, e, t, a);
      return;
    }
    if (typeof u.edgesLimit < "u" && r + 1 > u.edgesLimit) {
      Ye(Ot, e, t, a);
      return;
    }
    if (o.push(e), Array.isArray(e))
      for (s = 0; s < e.length; s++)
        gn(e[s], s, s, o, e, c, u);
    else {
      var l = {}, b = Object.keys(e).sort(Lu);
      for (s = 0; s < b.length; s++) {
        var E = b[s];
        gn(e[E], E, s, o, e, c, u), l[E] = e[E];
      }
      if (typeof a < "u")
        $e.push([a, t, e]), a[t] = l;
      else
        return l;
    }
    o.pop();
  }
}
function Co(e) {
  return e = typeof e < "u" ? e : function(t, r) {
    return r;
  }, function(t, r) {
    if (Ne.length > 0)
      for (var o = 0; o < Ne.length; o++) {
        var a = Ne[o];
        if (a[1] === t && a[0] === r) {
          r = a[2], Ne.splice(o, 1);
          break;
        }
      }
    return e.call(this, t, r);
  };
}
Object.defineProperty(je, "__esModule", { value: !0 });
je.EthereumProviderError = je.EthereumRpcError = void 0;
const ju = Mu;
class Mo extends Error {
  constructor(t, r, o) {
    if (!Number.isInteger(t))
      throw new Error('"code" must be an integer.');
    if (!r || typeof r != "string")
      throw new Error('"message" must be a nonempty string.');
    super(r), this.code = t, o !== void 0 && (this.data = o);
  }
  serialize() {
    const t = {
      code: this.code,
      message: this.message
    };
    return this.data !== void 0 && (t.data = this.data), this.stack && (t.stack = this.stack), t;
  }
  toString() {
    return ju.default(this.serialize(), Uu, 2);
  }
}
je.EthereumRpcError = Mo;
class ku extends Mo {
  constructor(t, r, o) {
    if (!Nu(t))
      throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
    super(t, r, o);
  }
}
je.EthereumProviderError = ku;
function Nu(e) {
  return Number.isInteger(e) && e >= 1e3 && e <= 4999;
}
function Uu(e, t) {
  if (t !== "[Circular]")
    return t;
}
var xn = {}, ke = {};
Object.defineProperty(ke, "__esModule", { value: !0 });
ke.errorValues = ke.errorCodes = void 0;
ke.errorCodes = {
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
ke.errorValues = {
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
  const t = ke, r = je, o = t.errorCodes.rpc.internal, a = "Unspecified error message. This is a bug, please report it.", c = {
    code: o,
    message: u(o)
  };
  e.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
  function u(S, y = a) {
    if (Number.isInteger(S)) {
      const w = S.toString();
      if (O(t.errorValues, w))
        return t.errorValues[w].message;
      if (b(S))
        return e.JSON_RPC_SERVER_ERROR_MESSAGE;
    }
    return y;
  }
  e.getMessageFromCode = u;
  function s(S) {
    if (!Number.isInteger(S))
      return !1;
    const y = S.toString();
    return !!(t.errorValues[y] || b(S));
  }
  e.isValidCode = s;
  function l(S, { fallbackError: y = c, shouldIncludeStack: w = !1 } = {}) {
    var I, k;
    if (!y || !Number.isInteger(y.code) || typeof y.message != "string")
      throw new Error("Must provide fallback error with integer number code and string message.");
    if (S instanceof r.EthereumRpcError)
      return S.serialize();
    const v = {};
    if (S && typeof S == "object" && !Array.isArray(S) && O(S, "code") && s(S.code)) {
      const j = S;
      v.code = j.code, j.message && typeof j.message == "string" ? (v.message = j.message, O(j, "data") && (v.data = j.data)) : (v.message = u(v.code), v.data = { originalError: E(S) });
    } else {
      v.code = y.code;
      const j = (I = S) === null || I === void 0 ? void 0 : I.message;
      v.message = j && typeof j == "string" ? j : y.message, v.data = { originalError: E(S) };
    }
    const T = (k = S) === null || k === void 0 ? void 0 : k.stack;
    return w && S && T && typeof T == "string" && (v.stack = T), v;
  }
  e.serializeError = l;
  function b(S) {
    return S >= -32099 && S <= -32e3;
  }
  function E(S) {
    return S && typeof S == "object" && !Array.isArray(S) ? Object.assign({}, S) : S;
  }
  function O(S, y) {
    return Object.prototype.hasOwnProperty.call(S, y);
  }
})(xn);
var $t = {};
Object.defineProperty($t, "__esModule", { value: !0 });
$t.ethErrors = void 0;
const An = je, Lo = xn, ve = ke;
$t.ethErrors = {
  rpc: {
    parse: (e) => xe(ve.errorCodes.rpc.parse, e),
    invalidRequest: (e) => xe(ve.errorCodes.rpc.invalidRequest, e),
    invalidParams: (e) => xe(ve.errorCodes.rpc.invalidParams, e),
    methodNotFound: (e) => xe(ve.errorCodes.rpc.methodNotFound, e),
    internal: (e) => xe(ve.errorCodes.rpc.internal, e),
    server: (e) => {
      if (!e || typeof e != "object" || Array.isArray(e))
        throw new Error("Ethereum RPC Server errors must provide single object argument.");
      const { code: t } = e;
      if (!Number.isInteger(t) || t > -32005 || t < -32099)
        throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
      return xe(t, e);
    },
    invalidInput: (e) => xe(ve.errorCodes.rpc.invalidInput, e),
    resourceNotFound: (e) => xe(ve.errorCodes.rpc.resourceNotFound, e),
    resourceUnavailable: (e) => xe(ve.errorCodes.rpc.resourceUnavailable, e),
    transactionRejected: (e) => xe(ve.errorCodes.rpc.transactionRejected, e),
    methodNotSupported: (e) => xe(ve.errorCodes.rpc.methodNotSupported, e),
    limitExceeded: (e) => xe(ve.errorCodes.rpc.limitExceeded, e)
  },
  provider: {
    userRejectedRequest: (e) => ot(ve.errorCodes.provider.userRejectedRequest, e),
    unauthorized: (e) => ot(ve.errorCodes.provider.unauthorized, e),
    unsupportedMethod: (e) => ot(ve.errorCodes.provider.unsupportedMethod, e),
    disconnected: (e) => ot(ve.errorCodes.provider.disconnected, e),
    chainDisconnected: (e) => ot(ve.errorCodes.provider.chainDisconnected, e),
    custom: (e) => {
      if (!e || typeof e != "object" || Array.isArray(e))
        throw new Error("Ethereum Provider custom errors must provide single object argument.");
      const { code: t, message: r, data: o } = e;
      if (!r || typeof r != "string")
        throw new Error('"message" must be a nonempty string');
      return new An.EthereumProviderError(t, r, o);
    }
  }
};
function xe(e, t) {
  const [r, o] = jo(t);
  return new An.EthereumRpcError(e, r || Lo.getMessageFromCode(e), o);
}
function ot(e, t) {
  const [r, o] = jo(t);
  return new An.EthereumProviderError(e, r || Lo.getMessageFromCode(e), o);
}
function jo(e) {
  if (e) {
    if (typeof e == "string")
      return [e];
    if (typeof e == "object" && !Array.isArray(e)) {
      const { message: t, data: r } = e;
      if (t && typeof t != "string")
        throw new Error("Must specify string message.");
      return [t || void 0, r];
    }
  }
  return [];
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getMessageFromCode = e.serializeError = e.EthereumProviderError = e.EthereumRpcError = e.ethErrors = e.errorCodes = void 0;
  const t = je;
  Object.defineProperty(e, "EthereumRpcError", { enumerable: !0, get: function() {
    return t.EthereumRpcError;
  } }), Object.defineProperty(e, "EthereumProviderError", { enumerable: !0, get: function() {
    return t.EthereumProviderError;
  } });
  const r = xn;
  Object.defineProperty(e, "serializeError", { enumerable: !0, get: function() {
    return r.serializeError;
  } }), Object.defineProperty(e, "getMessageFromCode", { enumerable: !0, get: function() {
    return r.getMessageFromCode;
  } });
  const o = $t;
  Object.defineProperty(e, "ethErrors", { enumerable: !0, get: function() {
    return o.ethErrors;
  } });
  const a = ke;
  Object.defineProperty(e, "errorCodes", { enumerable: !0, get: function() {
    return a.errorCodes;
  } });
})(Oo);
var Du = me && me.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(yt, "__esModule", { value: !0 });
yt.JsonRpcEngine = void 0;
const $u = Du(gt), Ae = Oo;
class Pe extends $u.default {
  constructor() {
    super(), this._middleware = [];
  }
  push(t) {
    this._middleware.push(t);
  }
  handle(t, r) {
    if (r && typeof r != "function")
      throw new Error('"callback" must be a function if provided.');
    return Array.isArray(t) ? r ? this._handleBatch(t, r) : this._handleBatch(t) : r ? this._handle(t, r) : this._promiseHandle(t);
  }
  asMiddleware() {
    return async (t, r, o, a) => {
      try {
        const [c, u, s] = await Pe._runAllMiddleware(t, r, this._middleware);
        return u ? (await Pe._runReturnHandlers(s), a(c)) : o(async (l) => {
          try {
            await Pe._runReturnHandlers(s);
          } catch (b) {
            return l(b);
          }
          return l();
        });
      } catch (c) {
        return a(c);
      }
    };
  }
  async _handleBatch(t, r) {
    try {
      const o = await Promise.all(
        t.map(this._promiseHandle.bind(this))
      );
      return r ? r(null, o) : o;
    } catch (o) {
      if (r)
        return r(o);
      throw o;
    }
  }
  _promiseHandle(t) {
    return new Promise((r) => {
      this._handle(t, (o, a) => {
        r(a);
      });
    });
  }
  async _handle(t, r) {
    if (!t || Array.isArray(t) || typeof t != "object") {
      const u = new Ae.EthereumRpcError(Ae.errorCodes.rpc.invalidRequest, `Requests must be plain objects. Received: ${typeof t}`, { request: t });
      return r(u, { id: void 0, jsonrpc: "2.0", error: u });
    }
    if (typeof t.method != "string") {
      const u = new Ae.EthereumRpcError(Ae.errorCodes.rpc.invalidRequest, `Must specify a string method. Received: ${typeof t.method}`, { request: t });
      return r(u, { id: t.id, jsonrpc: "2.0", error: u });
    }
    const o = Object.assign({}, t), a = {
      id: o.id,
      jsonrpc: o.jsonrpc
    };
    let c = null;
    try {
      await this._processRequest(o, a);
    } catch (u) {
      c = u;
    }
    return c && (delete a.result, a.error || (a.error = Ae.serializeError(c))), r(c, a);
  }
  async _processRequest(t, r) {
    const [o, a, c] = await Pe._runAllMiddleware(t, r, this._middleware);
    if (Pe._checkForCompletion(t, r, a), await Pe._runReturnHandlers(c), o)
      throw o;
  }
  static async _runAllMiddleware(t, r, o) {
    const a = [];
    let c = null, u = !1;
    for (const s of o)
      if ([c, u] = await Pe._runMiddleware(t, r, s, a), u)
        break;
    return [c, u, a.reverse()];
  }
  static _runMiddleware(t, r, o, a) {
    return new Promise((c) => {
      const u = (l) => {
        const b = l || r.error;
        b && (r.error = Ae.serializeError(b)), c([b, !0]);
      }, s = (l) => {
        r.error ? u(r.error) : (l && (typeof l != "function" && u(new Ae.EthereumRpcError(Ae.errorCodes.rpc.internal, `JsonRpcEngine: "next" return handlers must be functions. Received "${typeof l}" for request:
${an(t)}`, { request: t })), a.push(l)), c([null, !1]));
      };
      try {
        o(t, r, s, u);
      } catch (l) {
        u(l);
      }
    });
  }
  static async _runReturnHandlers(t) {
    for (const r of t)
      await new Promise((o, a) => {
        r((c) => c ? a(c) : o());
      });
  }
  static _checkForCompletion(t, r, o) {
    if (!("result" in r) && !("error" in r))
      throw new Ae.EthereumRpcError(Ae.errorCodes.rpc.internal, `JsonRpcEngine: Response has no error or result for request:
${an(t)}`, { request: t });
    if (!o)
      throw new Ae.EthereumRpcError(Ae.errorCodes.rpc.internal, `JsonRpcEngine: Nothing ended request:
${an(t)}`, { request: t });
  }
}
yt.JsonRpcEngine = Pe;
function an(e) {
  return JSON.stringify(e, null, 2);
}
var qt = {};
Object.defineProperty(qt, "__esModule", { value: !0 });
qt.mergeMiddleware = void 0;
const qu = yt;
function Hu(e) {
  const t = new qu.JsonRpcEngine();
  return e.forEach((r) => t.push(r)), t.asMiddleware();
}
qt.mergeMiddleware = Hu;
(function(e) {
  var t = me && me.__createBinding || (Object.create ? function(o, a, c, u) {
    u === void 0 && (u = c), Object.defineProperty(o, u, { enumerable: !0, get: function() {
      return a[c];
    } });
  } : function(o, a, c, u) {
    u === void 0 && (u = c), o[u] = a[c];
  }), r = me && me.__exportStar || function(o, a) {
    for (var c in o)
      c !== "default" && !Object.prototype.hasOwnProperty.call(a, c) && t(a, o, c);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), r(Nt, e), r(Ut, e), r(Dt, e), r(pt, e), r(yt, e), r(qt, e);
})(Sn);
var Rn = { exports: {} }, Wu = function(t) {
  return (r, o, a, c) => {
    const u = t[r.method];
    return u === void 0 ? a() : typeof u == "function" ? u(r, o, a, c) : (o.result = u, c());
  };
};
(function(e) {
  e.exports = Wu;
})(Rn);
var sn, Fi;
function zu() {
  if (Fi)
    return sn;
  Fi = 1;
  const e = (r, o, a, c) => function(...u) {
    const s = o.promiseModule;
    return new s((l, b) => {
      o.multiArgs ? u.push((...O) => {
        o.errorFirst ? O[0] ? b(O) : (O.shift(), l(O)) : l(O);
      }) : o.errorFirst ? u.push((O, S) => {
        O ? b(O) : l(S);
      }) : u.push(l), Reflect.apply(r, this === a ? c : this, u);
    });
  }, t = /* @__PURE__ */ new WeakMap();
  return sn = (r, o) => {
    o = {
      exclude: [/.+(?:Sync|Stream)$/],
      errorFirst: !0,
      promiseModule: Promise,
      ...o
    };
    const a = typeof r;
    if (!(r !== null && (a === "object" || a === "function")))
      throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${r === null ? "null" : a}\``);
    const c = (l, b) => {
      let E = t.get(l);
      if (E || (E = {}, t.set(l, E)), b in E)
        return E[b];
      const O = (k) => typeof k == "string" || typeof b == "symbol" ? b === k : k.test(b), S = Reflect.getOwnPropertyDescriptor(l, b), y = S === void 0 || S.writable || S.configurable, I = (o.include ? o.include.some(O) : !o.exclude.some(O)) && y;
      return E[b] = I, I;
    }, u = /* @__PURE__ */ new WeakMap(), s = new Proxy(r, {
      apply(l, b, E) {
        const O = u.get(l);
        if (O)
          return Reflect.apply(O, b, E);
        const S = o.excludeMain ? l : e(l, o, s, l);
        return u.set(l, S), Reflect.apply(S, b, E);
      },
      get(l, b) {
        const E = l[b];
        if (!c(l, b) || E === Function.prototype[b])
          return E;
        const O = u.get(E);
        if (O)
          return O;
        if (typeof E == "function") {
          const S = e(E, o, s, l);
          return u.set(E, S), S;
        }
        return E;
      }
    });
    return s;
  }, sn;
}
var un, Pi;
function Bn() {
  if (Pi)
    return un;
  Pi = 1;
  const e = gt.default;
  class t extends e {
    constructor() {
      super(), this.updates = [];
    }
    async initialize() {
    }
    async update() {
      throw new Error("BaseFilter - no update method specified");
    }
    addResults(o) {
      this.updates = this.updates.concat(o), o.forEach((a) => this.emit("update", a));
    }
    addInitialResults(o) {
    }
    getChangesAndClear() {
      const o = this.updates;
      return this.updates = [], o;
    }
  }
  return un = t, un;
}
var fn, Ci;
function Gu() {
  if (Ci)
    return fn;
  Ci = 1;
  const e = Bn();
  class t extends e {
    constructor() {
      super(), this.allResults = [];
    }
    async update() {
      throw new Error("BaseFilterWithHistory - no update method specified");
    }
    addResults(o) {
      this.allResults = this.allResults.concat(o), super.addResults(o);
    }
    addInitialResults(o) {
      this.allResults = this.allResults.concat(o), super.addInitialResults(o);
    }
    getAllResults() {
      return this.allResults;
    }
  }
  return fn = t, fn;
}
var _t = {
  minBlockRef: Vu,
  maxBlockRef: Ju,
  sortBlockRefs: Tn,
  bnToHex: Ku,
  blockRefIsNumber: Yu,
  hexToInt: It,
  incrementHexInt: Xu,
  intToHex: ko,
  unsafeRandomBytes: Qu
};
function Vu(...e) {
  return Tn(e)[0];
}
function Ju(...e) {
  const t = Tn(e);
  return t[t.length - 1];
}
function Tn(e) {
  return e.sort((t, r) => t === "latest" || r === "earliest" ? 1 : r === "latest" || t === "earliest" ? -1 : It(t) - It(r));
}
function Ku(e) {
  return "0x" + e.toString(16);
}
function Yu(e) {
  return e && !["earliest", "latest", "pending"].includes(e);
}
function It(e) {
  return e == null ? e : Number.parseInt(e, 16);
}
function Xu(e) {
  if (e == null)
    return e;
  const t = It(e);
  return ko(t + 1);
}
function ko(e) {
  if (e == null)
    return e;
  let t = e.toString(16);
  return t.length % 2 && (t = "0" + t), "0x" + t;
}
function Qu(e) {
  let t = "0x";
  for (let r = 0; r < e; r++)
    t += Mi(), t += Mi();
  return t;
}
function Mi() {
  return Math.floor(Math.random() * 16).toString(16);
}
var cn, Li;
function Zu() {
  if (Li)
    return cn;
  Li = 1;
  const e = uu, t = zu(), r = Gu(), { bnToHex: o, hexToInt: a, incrementHexInt: c, minBlockRef: u, blockRefIsNumber: s } = _t;
  class l extends r {
    constructor({ provider: E, params: O }) {
      super(), this.type = "log", this.ethQuery = new e(E), this.params = Object.assign({
        fromBlock: "latest",
        toBlock: "latest",
        address: void 0,
        topics: []
      }, O), this.params.address && (Array.isArray(this.params.address) || (this.params.address = [this.params.address]), this.params.address = this.params.address.map((S) => S.toLowerCase()));
    }
    async initialize({ currentBlock: E }) {
      let O = this.params.fromBlock;
      ["latest", "pending"].includes(O) && (O = E), O === "earliest" && (O = "0x0"), this.params.fromBlock = O;
      const S = u(this.params.toBlock, E), y = Object.assign({}, this.params, { toBlock: S }), w = await this._fetchLogs(y);
      this.addInitialResults(w);
    }
    async update({ oldBlock: E, newBlock: O }) {
      const S = O;
      let y;
      E ? y = c(E) : y = O;
      const w = Object.assign({}, this.params, { fromBlock: y, toBlock: S }), k = (await this._fetchLogs(w)).filter((v) => this.matchLog(v));
      this.addResults(k);
    }
    async _fetchLogs(E) {
      return await t((S) => this.ethQuery.getLogs(E, S))();
    }
    matchLog(E) {
      if (a(this.params.fromBlock) >= a(E.blockNumber) || s(this.params.toBlock) && a(this.params.toBlock) <= a(E.blockNumber))
        return !1;
      const O = E.address && E.address.toLowerCase();
      return this.params.address && O && !this.params.address.includes(O) ? !1 : this.params.topics.every((y, w) => {
        let I = E.topics[w];
        if (!I)
          return !1;
        I = I.toLowerCase();
        let k = Array.isArray(y) ? y : [y];
        return k.includes(null) ? !0 : (k = k.map((j) => j.toLowerCase()), k.includes(I));
      });
    }
  }
  return cn = l, cn;
}
var On = ef;
async function ef({ provider: e, fromBlock: t, toBlock: r }) {
  t || (t = r);
  const o = ji(t), c = ji(r) - o + 1, u = Array(c).fill().map((l, b) => o + b).map(tf);
  return await Promise.all(
    u.map((l) => rf(e, "eth_getBlockByNumber", [l, !1]))
  );
}
function ji(e) {
  return e == null ? e : Number.parseInt(e, 16);
}
function tf(e) {
  if (e == null)
    return e;
  const t = e.toString(16);
  return "0x" + t;
}
function rf(e, t, r) {
  return new Promise((o, a) => {
    e.sendAsync({ id: 1, jsonrpc: "2.0", method: t, params: r }, (c, u) => {
      if (c)
        return a(c);
      o(u.result);
    });
  });
}
var ln, ki;
function nf() {
  if (ki)
    return ln;
  ki = 1;
  const e = Bn(), t = On, { incrementHexInt: r } = _t;
  class o extends e {
    constructor({ provider: c, params: u }) {
      super(), this.type = "block", this.provider = c;
    }
    async update({ oldBlock: c, newBlock: u }) {
      const s = u, l = r(c), E = (await t({ provider: this.provider, fromBlock: l, toBlock: s })).map((O) => O.hash);
      this.addResults(E);
    }
  }
  return ln = o, ln;
}
var hn, Ni;
function of() {
  if (Ni)
    return hn;
  Ni = 1;
  const e = Bn(), t = On, { incrementHexInt: r } = _t;
  class o extends e {
    constructor({ provider: c }) {
      super(), this.type = "tx", this.provider = c;
    }
    async update({ oldBlock: c }) {
      const u = c, s = r(c), l = await t({ provider: this.provider, fromBlock: s, toBlock: u }), b = [];
      for (const E of l)
        b.push(...E.transactions);
      this.addResults(b);
    }
  }
  return hn = o, hn;
}
var dn, Ui;
function af() {
  if (Ui)
    return dn;
  Ui = 1;
  const e = Au().Mutex, { createAsyncMiddleware: t } = Sn, r = Rn.exports, o = Zu(), a = nf(), c = of(), { intToHex: u, hexToInt: s } = _t;
  dn = l;
  function l({ blockTracker: y, provider: w }) {
    let I = 0, k = {};
    const v = new e(), T = O({ mutex: v }), j = r({
      eth_newFilter: T(b(J)),
      eth_newBlockFilter: T(b(oe)),
      eth_newPendingTransactionFilter: T(b(ae)),
      eth_uninstallFilter: T(E(P)),
      eth_getFilterChanges: T(E(X)),
      eth_getFilterLogs: T(E(ee))
    }), K = async ({ oldBlock: _, newBlock: F }) => {
      if (k.length === 0)
        return;
      const N = await v.acquire();
      try {
        await Promise.all(S(k).map(async (H) => {
          try {
            await H.update({ oldBlock: _, newBlock: F });
          } catch (G) {
            console.error(G);
          }
        }));
      } catch (H) {
        console.error(H);
      }
      N();
    };
    return j.newLogFilter = J, j.newBlockFilter = oe, j.newPendingTransactionFilter = ae, j.uninstallFilter = P, j.getFilterChanges = X, j.getFilterLogs = ee, j.destroy = () => {
      m();
    }, j;
    async function J(_) {
      const F = new o({ provider: w, params: _ });
      return await D(F), F;
    }
    async function oe() {
      const _ = new a({ provider: w });
      return await D(_), _;
    }
    async function ae() {
      const _ = new c({ provider: w });
      return await D(_), _;
    }
    async function X(_) {
      const F = s(_), N = k[F];
      if (!N)
        throw new Error(`No filter for index "${F}"`);
      return N.getChangesAndClear();
    }
    async function ee(_) {
      const F = s(_), N = k[F];
      if (!N)
        throw new Error(`No filter for index "${F}"`);
      return N.type === "log" ? results = N.getAllResults() : results = [], results;
    }
    async function P(_) {
      const F = s(_), N = k[F], H = Boolean(N);
      return H && await q(F), H;
    }
    async function D(_) {
      const F = S(k).length, N = await y.getLatestBlock();
      await _.initialize({ currentBlock: N }), I++, k[I] = _, _.id = I, _.idHex = u(I);
      const H = S(k).length;
      return A({ prevFilterCount: F, newFilterCount: H }), I;
    }
    async function q(_) {
      const F = S(k).length;
      delete k[_];
      const N = S(k).length;
      A({ prevFilterCount: F, newFilterCount: N });
    }
    async function m() {
      const _ = S(k).length;
      k = {}, A({ prevFilterCount: _, newFilterCount: 0 });
    }
    function A({ prevFilterCount: _, newFilterCount: F }) {
      if (_ === 0 && F > 0) {
        y.on("sync", K);
        return;
      }
      if (_ > 0 && F === 0) {
        y.removeListener("sync", K);
        return;
      }
    }
  }
  function b(y) {
    return E(async (...w) => {
      const I = await y(...w);
      return u(I.id);
    });
  }
  function E(y) {
    return t(async (w, I) => {
      const k = await y.apply(null, w.params);
      I.result = k;
    });
  }
  function O({ mutex: y }) {
    return (w) => async (I, k, v, T) => {
      (await y.acquire())(), w(I, k, v, T);
    };
  }
  function S(y, w) {
    const I = [];
    for (let k in y)
      I.push(y[k]);
    return I;
  }
  return dn;
}
const sf = gt.default, uf = Rn.exports, { createAsyncMiddleware: Di } = Sn, ff = af(), { unsafeRandomBytes: cf, incrementHexInt: lf } = _t, hf = On;
var wf = df;
function df({ blockTracker: e, provider: t }) {
  const r = {}, o = ff({ blockTracker: e, provider: t });
  let a = !1;
  const c = new sf(), u = uf({
    eth_subscribe: Di(s),
    eth_unsubscribe: Di(l)
  });
  return u.destroy = E, { events: c, middleware: u };
  async function s(O, S) {
    if (a)
      throw new Error(
        "SubscriptionManager - attempting to use after destroying"
      );
    const y = O.params[0], w = cf(16);
    let I;
    switch (y) {
      case "newHeads":
        I = k({ subId: w });
        break;
      case "logs":
        const T = O.params[1], j = await o.newLogFilter(T);
        I = v({ subId: w, filter: j });
        break;
      default:
        throw new Error(`SubscriptionManager - unsupported subscription type "${y}"`);
    }
    r[w] = I, S.result = w;
    return;
    function k({ subId: T }) {
      const j = {
        type: y,
        destroy: async () => {
          e.removeListener("sync", j.update);
        },
        update: async ({ oldBlock: K, newBlock: J }) => {
          const oe = J, ae = lf(K);
          (await hf({ provider: t, fromBlock: ae, toBlock: oe })).map(pf).forEach((P) => {
            b(T, P);
          });
        }
      };
      return e.on("sync", j.update), j;
    }
    function v({ subId: T, filter: j }) {
      return j.on("update", (J) => b(T, J)), {
        type: y,
        destroy: async () => await o.uninstallFilter(j.idHex)
      };
    }
  }
  async function l(O, S) {
    if (a)
      throw new Error(
        "SubscriptionManager - attempting to use after destroying"
      );
    const y = O.params[0], w = r[y];
    if (!w) {
      S.result = !1;
      return;
    }
    delete r[y], await w.destroy(), S.result = !0;
  }
  function b(O, S) {
    c.emit("notification", {
      jsonrpc: "2.0",
      method: "eth_subscription",
      params: {
        subscription: O,
        result: S
      }
    });
  }
  function E() {
    c.removeAllListeners();
    for (const O in r)
      r[O].destroy(), delete r[O];
    a = !0;
  }
}
function pf(e) {
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
  Do as a,
  Ue as b,
  da as c,
  Zn as d,
  et as e,
  He as f,
  bn as g,
  Wi as h,
  Ze as i,
  bf as j,
  Bt as k,
  nu as l,
  af as m,
  wf as n,
  Mu as o,
  mf as p,
  mn as q,
  Uo as r,
  fs as s,
  No as t,
  gt as u
};
