import { a as mi, c as pi } from "./index.9de5637c.js";
const Mi = {}, gi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mi
}, Symbol.toStringTag, { value: "Module" })), ci = /* @__PURE__ */ mi(gi);
var at = { exports: {} }, oi;
function yi() {
  return oi || (oi = 1, typeof Object.create == "function" ? at.exports = function(et, ht) {
    ht && (et.super_ = ht, et.prototype = Object.create(ht.prototype, {
      constructor: {
        value: et,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }));
  } : at.exports = function(et, ht) {
    if (ht) {
      et.super_ = ht;
      var d = function() {
      };
      d.prototype = ht.prototype, et.prototype = new d(), et.prototype.constructor = et;
    }
  }), at.exports;
}
var ai = { exports: {} };
(function(lt) {
  (function(et, ht) {
    function d(o, t) {
      if (!o)
        throw new Error(t || "Assertion failed");
    }
    function nt(o, t) {
      o.super_ = t;
      var r = function() {
      };
      r.prototype = t.prototype, o.prototype = new r(), o.prototype.constructor = o;
    }
    function l(o, t, r) {
      if (l.isBN(o))
        return o;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, o !== null && ((t === "le" || t === "be") && (r = t, t = 10), this._init(o || 0, t || 10, r || "be"));
    }
    typeof et == "object" ? et.exports = l : ht.BN = l, l.BN = l, l.wordSize = 26;
    var st;
    try {
      typeof window < "u" && typeof window.Buffer < "u" ? st = window.Buffer : st = ci.Buffer;
    } catch {
    }
    l.isBN = function(t) {
      return t instanceof l ? !0 : t !== null && typeof t == "object" && t.constructor.wordSize === l.wordSize && Array.isArray(t.words);
    }, l.max = function(t, r) {
      return t.cmp(r) > 0 ? t : r;
    }, l.min = function(t, r) {
      return t.cmp(r) < 0 ? t : r;
    }, l.prototype._init = function(t, r, e) {
      if (typeof t == "number")
        return this._initNumber(t, r, e);
      if (typeof t == "object")
        return this._initArray(t, r, e);
      r === "hex" && (r = 16), d(r === (r | 0) && r >= 2 && r <= 36), t = t.toString().replace(/\s+/g, "");
      var f = 0;
      t[0] === "-" && (f++, this.negative = 1), f < t.length && (r === 16 ? this._parseHex(t, f, e) : (this._parseBase(t, r, f), e === "le" && this._initArray(this.toArray(), r, e)));
    }, l.prototype._initNumber = function(t, r, e) {
      t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [t & 67108863], this.length = 1) : t < 4503599627370496 ? (this.words = [
        t & 67108863,
        t / 67108864 & 67108863
      ], this.length = 2) : (d(t < 9007199254740992), this.words = [
        t & 67108863,
        t / 67108864 & 67108863,
        1
      ], this.length = 3), e === "le" && this._initArray(this.toArray(), r, e);
    }, l.prototype._initArray = function(t, r, e) {
      if (d(typeof t.length == "number"), t.length <= 0)
        return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
      for (var f = 0; f < this.length; f++)
        this.words[f] = 0;
      var s, a, u = 0;
      if (e === "be")
        for (f = t.length - 1, s = 0; f >= 0; f -= 3)
          a = t[f] | t[f - 1] << 8 | t[f - 2] << 16, this.words[s] |= a << u & 67108863, this.words[s + 1] = a >>> 26 - u & 67108863, u += 24, u >= 26 && (u -= 26, s++);
      else if (e === "le")
        for (f = 0, s = 0; f < t.length; f += 3)
          a = t[f] | t[f + 1] << 8 | t[f + 2] << 16, this.words[s] |= a << u & 67108863, this.words[s + 1] = a >>> 26 - u & 67108863, u += 24, u >= 26 && (u -= 26, s++);
      return this._strip();
    };
    function It(o, t) {
      var r = o.charCodeAt(t);
      if (r >= 48 && r <= 57)
        return r - 48;
      if (r >= 65 && r <= 70)
        return r - 55;
      if (r >= 97 && r <= 102)
        return r - 87;
      d(!1, "Invalid character in " + o);
    }
    function Et(o, t, r) {
      var e = It(o, r);
      return r - 1 >= t && (e |= It(o, r - 1) << 4), e;
    }
    l.prototype._parseHex = function(t, r, e) {
      this.length = Math.ceil((t.length - r) / 6), this.words = new Array(this.length);
      for (var f = 0; f < this.length; f++)
        this.words[f] = 0;
      var s = 0, a = 0, u;
      if (e === "be")
        for (f = t.length - 1; f >= r; f -= 2)
          u = Et(t, r, f) << s, this.words[a] |= u & 67108863, s >= 18 ? (s -= 18, a += 1, this.words[a] |= u >>> 26) : s += 8;
      else {
        var h = t.length - r;
        for (f = h % 2 === 0 ? r + 1 : r; f < t.length; f += 2)
          u = Et(t, r, f) << s, this.words[a] |= u & 67108863, s >= 18 ? (s -= 18, a += 1, this.words[a] |= u >>> 26) : s += 8;
      }
      this._strip();
    };
    function Tt(o, t, r, e) {
      for (var f = 0, s = 0, a = Math.min(o.length, r), u = t; u < a; u++) {
        var h = o.charCodeAt(u) - 48;
        f *= e, h >= 49 ? s = h - 49 + 10 : h >= 17 ? s = h - 17 + 10 : s = h, d(h >= 0 && s < e, "Invalid character"), f += s;
      }
      return f;
    }
    l.prototype._parseBase = function(t, r, e) {
      this.words = [0], this.length = 1;
      for (var f = 0, s = 1; s <= 67108863; s *= r)
        f++;
      f--, s = s / r | 0;
      for (var a = t.length - e, u = a % f, h = Math.min(a, a - u) + e, i = 0, n = e; n < h; n += f)
        i = Tt(t, n, n + f, r), this.imuln(s), this.words[0] + i < 67108864 ? this.words[0] += i : this._iaddn(i);
      if (u !== 0) {
        var m = 1;
        for (i = Tt(t, n, t.length, r), n = 0; n < u; n++)
          m *= r;
        this.imuln(m), this.words[0] + i < 67108864 ? this.words[0] += i : this._iaddn(i);
      }
      this._strip();
    }, l.prototype.copy = function(t) {
      t.words = new Array(this.length);
      for (var r = 0; r < this.length; r++)
        t.words[r] = this.words[r];
      t.length = this.length, t.negative = this.negative, t.red = this.red;
    };
    function Ot(o, t) {
      o.words = t.words, o.length = t.length, o.negative = t.negative, o.red = t.red;
    }
    if (l.prototype._move = function(t) {
      Ot(t, this);
    }, l.prototype.clone = function() {
      var t = new l(null);
      return this.copy(t), t;
    }, l.prototype._expand = function(t) {
      for (; this.length < t; )
        this.words[this.length++] = 0;
      return this;
    }, l.prototype._strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0; )
        this.length--;
      return this._normSign();
    }, l.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, typeof Symbol < "u" && typeof Symbol.for == "function")
      try {
        l.prototype[Symbol.for("nodejs.util.inspect.custom")] = ut;
      } catch {
        l.prototype.inspect = ut;
      }
    else
      l.prototype.inspect = ut;
    function ut() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }
    var zt = [
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
    ], li = [
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
    ], ui = [
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
    l.prototype.toString = function(t, r) {
      t = t || 10, r = r | 0 || 1;
      var e;
      if (t === 16 || t === "hex") {
        e = "";
        for (var f = 0, s = 0, a = 0; a < this.length; a++) {
          var u = this.words[a], h = ((u << f | s) & 16777215).toString(16);
          s = u >>> 24 - f & 16777215, f += 2, f >= 26 && (f -= 26, a--), s !== 0 || a !== this.length - 1 ? e = zt[6 - h.length] + h + e : e = h + e;
        }
        for (s !== 0 && (e = s.toString(16) + e); e.length % r !== 0; )
          e = "0" + e;
        return this.negative !== 0 && (e = "-" + e), e;
      }
      if (t === (t | 0) && t >= 2 && t <= 36) {
        var i = li[t], n = ui[t];
        e = "";
        var m = this.clone();
        for (m.negative = 0; !m.isZero(); ) {
          var v = m.modrn(n).toString(t);
          m = m.idivn(n), m.isZero() ? e = v + e : e = zt[i - v.length] + v + e;
        }
        for (this.isZero() && (e = "0" + e); e.length % r !== 0; )
          e = "0" + e;
        return this.negative !== 0 && (e = "-" + e), e;
      }
      d(!1, "Base should be between 2 and 36");
    }, l.prototype.toNumber = function() {
      var t = this.words[0];
      return this.length === 2 ? t += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? t += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && d(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -t : t;
    }, l.prototype.toJSON = function() {
      return this.toString(16, 2);
    }, st && (l.prototype.toBuffer = function(t, r) {
      return this.toArrayLike(st, t, r);
    }), l.prototype.toArray = function(t, r) {
      return this.toArrayLike(Array, t, r);
    };
    var di = function(t, r) {
      return t.allocUnsafe ? t.allocUnsafe(r) : new t(r);
    };
    l.prototype.toArrayLike = function(t, r, e) {
      this._strip();
      var f = this.byteLength(), s = e || Math.max(1, f);
      d(f <= s, "byte array longer than desired length"), d(s > 0, "Requested array length <= 0");
      var a = di(t, s), u = r === "le" ? "LE" : "BE";
      return this["_toArrayLike" + u](a, f), a;
    }, l.prototype._toArrayLikeLE = function(t, r) {
      for (var e = 0, f = 0, s = 0, a = 0; s < this.length; s++) {
        var u = this.words[s] << a | f;
        t[e++] = u & 255, e < t.length && (t[e++] = u >> 8 & 255), e < t.length && (t[e++] = u >> 16 & 255), a === 6 ? (e < t.length && (t[e++] = u >> 24 & 255), f = 0, a = 0) : (f = u >>> 24, a += 2);
      }
      if (e < t.length)
        for (t[e++] = f; e < t.length; )
          t[e++] = 0;
    }, l.prototype._toArrayLikeBE = function(t, r) {
      for (var e = t.length - 1, f = 0, s = 0, a = 0; s < this.length; s++) {
        var u = this.words[s] << a | f;
        t[e--] = u & 255, e >= 0 && (t[e--] = u >> 8 & 255), e >= 0 && (t[e--] = u >> 16 & 255), a === 6 ? (e >= 0 && (t[e--] = u >> 24 & 255), f = 0, a = 0) : (f = u >>> 24, a += 2);
      }
      if (e >= 0)
        for (t[e--] = f; e >= 0; )
          t[e--] = 0;
    }, Math.clz32 ? l.prototype._countBits = function(t) {
      return 32 - Math.clz32(t);
    } : l.prototype._countBits = function(t) {
      var r = t, e = 0;
      return r >= 4096 && (e += 13, r >>>= 13), r >= 64 && (e += 7, r >>>= 7), r >= 8 && (e += 4, r >>>= 4), r >= 2 && (e += 2, r >>>= 2), e + r;
    }, l.prototype._zeroBits = function(t) {
      if (t === 0)
        return 26;
      var r = t, e = 0;
      return (r & 8191) === 0 && (e += 13, r >>>= 13), (r & 127) === 0 && (e += 7, r >>>= 7), (r & 15) === 0 && (e += 4, r >>>= 4), (r & 3) === 0 && (e += 2, r >>>= 2), (r & 1) === 0 && e++, e;
    }, l.prototype.bitLength = function() {
      var t = this.words[this.length - 1], r = this._countBits(t);
      return (this.length - 1) * 26 + r;
    };
    function vi(o) {
      for (var t = new Array(o.bitLength()), r = 0; r < t.length; r++) {
        var e = r / 26 | 0, f = r % 26;
        t[r] = o.words[e] >>> f & 1;
      }
      return t;
    }
    l.prototype.zeroBits = function() {
      if (this.isZero())
        return 0;
      for (var t = 0, r = 0; r < this.length; r++) {
        var e = this._zeroBits(this.words[r]);
        if (t += e, e !== 26)
          break;
      }
      return t;
    }, l.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, l.prototype.toTwos = function(t) {
      return this.negative !== 0 ? this.abs().inotn(t).iaddn(1) : this.clone();
    }, l.prototype.fromTwos = function(t) {
      return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone();
    }, l.prototype.isNeg = function() {
      return this.negative !== 0;
    }, l.prototype.neg = function() {
      return this.clone().ineg();
    }, l.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, l.prototype.iuor = function(t) {
      for (; this.length < t.length; )
        this.words[this.length++] = 0;
      for (var r = 0; r < t.length; r++)
        this.words[r] = this.words[r] | t.words[r];
      return this._strip();
    }, l.prototype.ior = function(t) {
      return d((this.negative | t.negative) === 0), this.iuor(t);
    }, l.prototype.or = function(t) {
      return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this);
    }, l.prototype.uor = function(t) {
      return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this);
    }, l.prototype.iuand = function(t) {
      var r;
      this.length > t.length ? r = t : r = this;
      for (var e = 0; e < r.length; e++)
        this.words[e] = this.words[e] & t.words[e];
      return this.length = r.length, this._strip();
    }, l.prototype.iand = function(t) {
      return d((this.negative | t.negative) === 0), this.iuand(t);
    }, l.prototype.and = function(t) {
      return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this);
    }, l.prototype.uand = function(t) {
      return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this);
    }, l.prototype.iuxor = function(t) {
      var r, e;
      this.length > t.length ? (r = this, e = t) : (r = t, e = this);
      for (var f = 0; f < e.length; f++)
        this.words[f] = r.words[f] ^ e.words[f];
      if (this !== r)
        for (; f < r.length; f++)
          this.words[f] = r.words[f];
      return this.length = r.length, this._strip();
    }, l.prototype.ixor = function(t) {
      return d((this.negative | t.negative) === 0), this.iuxor(t);
    }, l.prototype.xor = function(t) {
      return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this);
    }, l.prototype.uxor = function(t) {
      return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this);
    }, l.prototype.inotn = function(t) {
      d(typeof t == "number" && t >= 0);
      var r = Math.ceil(t / 26) | 0, e = t % 26;
      this._expand(r), e > 0 && r--;
      for (var f = 0; f < r; f++)
        this.words[f] = ~this.words[f] & 67108863;
      return e > 0 && (this.words[f] = ~this.words[f] & 67108863 >> 26 - e), this._strip();
    }, l.prototype.notn = function(t) {
      return this.clone().inotn(t);
    }, l.prototype.setn = function(t, r) {
      d(typeof t == "number" && t >= 0);
      var e = t / 26 | 0, f = t % 26;
      return this._expand(e + 1), r ? this.words[e] = this.words[e] | 1 << f : this.words[e] = this.words[e] & ~(1 << f), this._strip();
    }, l.prototype.iadd = function(t) {
      var r;
      if (this.negative !== 0 && t.negative === 0)
        return this.negative = 0, r = this.isub(t), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && t.negative !== 0)
        return t.negative = 0, r = this.isub(t), t.negative = 1, r._normSign();
      var e, f;
      this.length > t.length ? (e = this, f = t) : (e = t, f = this);
      for (var s = 0, a = 0; a < f.length; a++)
        r = (e.words[a] | 0) + (f.words[a] | 0) + s, this.words[a] = r & 67108863, s = r >>> 26;
      for (; s !== 0 && a < e.length; a++)
        r = (e.words[a] | 0) + s, this.words[a] = r & 67108863, s = r >>> 26;
      if (this.length = e.length, s !== 0)
        this.words[this.length] = s, this.length++;
      else if (e !== this)
        for (; a < e.length; a++)
          this.words[a] = e.words[a];
      return this;
    }, l.prototype.add = function(t) {
      var r;
      return t.negative !== 0 && this.negative === 0 ? (t.negative = 0, r = this.sub(t), t.negative ^= 1, r) : t.negative === 0 && this.negative !== 0 ? (this.negative = 0, r = t.sub(this), this.negative = 1, r) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this);
    }, l.prototype.isub = function(t) {
      if (t.negative !== 0) {
        t.negative = 0;
        var r = this.iadd(t);
        return t.negative = 1, r._normSign();
      } else if (this.negative !== 0)
        return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
      var e = this.cmp(t);
      if (e === 0)
        return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var f, s;
      e > 0 ? (f = this, s = t) : (f = t, s = this);
      for (var a = 0, u = 0; u < s.length; u++)
        r = (f.words[u] | 0) - (s.words[u] | 0) + a, a = r >> 26, this.words[u] = r & 67108863;
      for (; a !== 0 && u < f.length; u++)
        r = (f.words[u] | 0) + a, a = r >> 26, this.words[u] = r & 67108863;
      if (a === 0 && u < f.length && f !== this)
        for (; u < f.length; u++)
          this.words[u] = f.words[u];
      return this.length = Math.max(this.length, u), f !== this && (this.negative = 1), this._strip();
    }, l.prototype.sub = function(t) {
      return this.clone().isub(t);
    };
    function Kt(o, t, r) {
      r.negative = t.negative ^ o.negative;
      var e = o.length + t.length | 0;
      r.length = e, e = e - 1 | 0;
      var f = o.words[0] | 0, s = t.words[0] | 0, a = f * s, u = a & 67108863, h = a / 67108864 | 0;
      r.words[0] = u;
      for (var i = 1; i < e; i++) {
        for (var n = h >>> 26, m = h & 67108863, v = Math.min(i, t.length - 1), p = Math.max(0, i - o.length + 1); p <= v; p++) {
          var it = i - p | 0;
          f = o.words[it] | 0, s = t.words[p] | 0, a = f * s + m, n += a / 67108864 | 0, m = a & 67108863;
        }
        r.words[i] = m | 0, h = n | 0;
      }
      return h !== 0 ? r.words[i] = h | 0 : r.length--, r._strip();
    }
    var Ft = function(t, r, e) {
      var f = t.words, s = r.words, a = e.words, u = 0, h, i, n, m = f[0] | 0, v = m & 8191, p = m >>> 13, it = f[1] | 0, M = it & 8191, g = it >>> 13, $t = f[2] | 0, w = $t & 8191, y = $t >>> 13, Jt = f[3] | 0, x = Jt & 8191, _ = Jt >>> 13, Gt = f[4] | 0, b = Gt & 8191, S = Gt >>> 13, Wt = f[5] | 0, A = Wt & 8191, B = Wt >>> 13, Qt = f[6] | 0, k = Qt & 8191, q = Qt >>> 13, Vt = f[7] | 0, N = Vt & 8191, R = Vt >>> 13, Xt = f[8] | 0, L = Xt & 8191, Z = Xt >>> 13, Yt = f[9] | 0, I = Yt & 8191, E = Yt >>> 13, Ct = s[0] | 0, T = Ct & 8191, O = Ct >>> 13, jt = s[1] | 0, z = jt & 8191, K = jt >>> 13, ti = s[2] | 0, F = ti & 8191, H = ti >>> 13, ii = s[3] | 0, D = ii & 8191, P = ii >>> 13, ri = s[4] | 0, U = ri & 8191, $ = ri >>> 13, ei = s[5] | 0, J = ei & 8191, G = ei >>> 13, hi = s[6] | 0, W = hi & 8191, Q = hi >>> 13, fi = s[7] | 0, V = fi & 8191, X = fi >>> 13, ni = s[8] | 0, Y = ni & 8191, C = ni >>> 13, si = s[9] | 0, j = si & 8191, tt = si >>> 13;
      e.negative = t.negative ^ r.negative, e.length = 19, h = Math.imul(v, T), i = Math.imul(v, O), i = i + Math.imul(p, T) | 0, n = Math.imul(p, O);
      var mt = (u + h | 0) + ((i & 8191) << 13) | 0;
      u = (n + (i >>> 13) | 0) + (mt >>> 26) | 0, mt &= 67108863, h = Math.imul(M, T), i = Math.imul(M, O), i = i + Math.imul(g, T) | 0, n = Math.imul(g, O), h = h + Math.imul(v, z) | 0, i = i + Math.imul(v, K) | 0, i = i + Math.imul(p, z) | 0, n = n + Math.imul(p, K) | 0;
      var pt = (u + h | 0) + ((i & 8191) << 13) | 0;
      u = (n + (i >>> 13) | 0) + (pt >>> 26) | 0, pt &= 67108863, h = Math.imul(w, T), i = Math.imul(w, O), i = i + Math.imul(y, T) | 0, n = Math.imul(y, O), h = h + Math.imul(M, z) | 0, i = i + Math.imul(M, K) | 0, i = i + Math.imul(g, z) | 0, n = n + Math.imul(g, K) | 0, h = h + Math.imul(v, F) | 0, i = i + Math.imul(v, H) | 0, i = i + Math.imul(p, F) | 0, n = n + Math.imul(p, H) | 0;
      var Mt = (u + h | 0) + ((i & 8191) << 13) | 0;
      u = (n + (i >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, h = Math.imul(x, T), i = Math.imul(x, O), i = i + Math.imul(_, T) | 0, n = Math.imul(_, O), h = h + Math.imul(w, z) | 0, i = i + Math.imul(w, K) | 0, i = i + Math.imul(y, z) | 0, n = n + Math.imul(y, K) | 0, h = h + Math.imul(M, F) | 0, i = i + Math.imul(M, H) | 0, i = i + Math.imul(g, F) | 0, n = n + Math.imul(g, H) | 0, h = h + Math.imul(v, D) | 0, i = i + Math.imul(v, P) | 0, i = i + Math.imul(p, D) | 0, n = n + Math.imul(p, P) | 0;
      var gt = (u + h | 0) + ((i & 8191) << 13) | 0;
      u = (n + (i >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, h = Math.imul(b, T), i = Math.imul(b, O), i = i + Math.imul(S, T) | 0, n = Math.imul(S, O), h = h + Math.imul(x, z) | 0, i = i + Math.imul(x, K) | 0, i = i + Math.imul(_, z) | 0, n = n + Math.imul(_, K) | 0, h = h + Math.imul(w, F) | 0, i = i + Math.imul(w, H) | 0, i = i + Math.imul(y, F) | 0, n = n + Math.imul(y, H) | 0, h = h + Math.imul(M, D) | 0, i = i + Math.imul(M, P) | 0, i = i + Math.imul(g, D) | 0, n = n + Math.imul(g, P) | 0, h = h + Math.imul(v, U) | 0, i = i + Math.imul(v, $) | 0, i = i + Math.imul(p, U) | 0, n = n + Math.imul(p, $) | 0;
      var ct = (u + h | 0) + ((i & 8191) << 13) | 0;
      u = (n + (i >>> 13) | 0) + (ct >>> 26) | 0, ct &= 67108863, h = Math.imul(A, T), i = Math.imul(A, O), i = i + Math.imul(B, T) | 0, n = Math.imul(B, O), h = h + Math.imul(b, z) | 0, i = i + Math.imul(b, K) | 0, i = i + Math.imul(S, z) | 0, n = n + Math.imul(S, K) | 0, h = h + Math.imul(x, F) | 0, i = i + Math.imul(x, H) | 0, i = i + Math.imul(_, F) | 0, n = n + Math.imul(_, H) | 0, h = h + Math.imul(w, D) | 0, i = i + Math.imul(w, P) | 0, i = i + Math.imul(y, D) | 0, n = n + Math.imul(y, P) | 0, h = h + Math.imul(M, U) | 0, i = i + Math.imul(M, $) | 0, i = i + Math.imul(g, U) | 0, n = n + Math.imul(g, $) | 0, h = h + Math.imul(v, J) | 0, i = i + Math.imul(v, G) | 0, i = i + Math.imul(p, J) | 0, n = n + Math.imul(p, G) | 0;
      var wt = (u + h | 0) + ((i & 8191) << 13) | 0;
      u = (n + (i >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, h = Math.imul(k, T), i = Math.imul(k, O), i = i + Math.imul(q, T) | 0, n = Math.imul(q, O), h = h + Math.imul(A, z) | 0, i = i + Math.imul(A, K) | 0, i = i + Math.imul(B, z) | 0, n = n + Math.imul(B, K) | 0, h = h + Math.imul(b, F) | 0, i = i + Math.imul(b, H) | 0, i = i + Math.imul(S, F) | 0, n = n + Math.imul(S, H) | 0, h = h + Math.imul(x, D) | 0, i = i + Math.imul(x, P) | 0, i = i + Math.imul(_, D) | 0, n = n + Math.imul(_, P) | 0, h = h + Math.imul(w, U) | 0, i = i + Math.imul(w, $) | 0, i = i + Math.imul(y, U) | 0, n = n + Math.imul(y, $) | 0, h = h + Math.imul(M, J) | 0, i = i + Math.imul(M, G) | 0, i = i + Math.imul(g, J) | 0, n = n + Math.imul(g, G) | 0, h = h + Math.imul(v, W) | 0, i = i + Math.imul(v, Q) | 0, i = i + Math.imul(p, W) | 0, n = n + Math.imul(p, Q) | 0;
      var yt = (u + h | 0) + ((i & 8191) << 13) | 0;
      u = (n + (i >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, h = Math.imul(N, T), i = Math.imul(N, O), i = i + Math.imul(R, T) | 0, n = Math.imul(R, O), h = h + Math.imul(k, z) | 0, i = i + Math.imul(k, K) | 0, i = i + Math.imul(q, z) | 0, n = n + Math.imul(q, K) | 0, h = h + Math.imul(A, F) | 0, i = i + Math.imul(A, H) | 0, i = i + Math.imul(B, F) | 0, n = n + Math.imul(B, H) | 0, h = h + Math.imul(b, D) | 0, i = i + Math.imul(b, P) | 0, i = i + Math.imul(S, D) | 0, n = n + Math.imul(S, P) | 0, h = h + Math.imul(x, U) | 0, i = i + Math.imul(x, $) | 0, i = i + Math.imul(_, U) | 0, n = n + Math.imul(_, $) | 0, h = h + Math.imul(w, J) | 0, i = i + Math.imul(w, G) | 0, i = i + Math.imul(y, J) | 0, n = n + Math.imul(y, G) | 0, h = h + Math.imul(M, W) | 0, i = i + Math.imul(M, Q) | 0, i = i + Math.imul(g, W) | 0, n = n + Math.imul(g, Q) | 0, h = h + Math.imul(v, V) | 0, i = i + Math.imul(v, X) | 0, i = i + Math.imul(p, V) | 0, n = n + Math.imul(p, X) | 0;
      var xt = (u + h | 0) + ((i & 8191) << 13) | 0;
      u = (n + (i >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, h = Math.imul(L, T), i = Math.imul(L, O), i = i + Math.imul(Z, T) | 0, n = Math.imul(Z, O), h = h + Math.imul(N, z) | 0, i = i + Math.imul(N, K) | 0, i = i + Math.imul(R, z) | 0, n = n + Math.imul(R, K) | 0, h = h + Math.imul(k, F) | 0, i = i + Math.imul(k, H) | 0, i = i + Math.imul(q, F) | 0, n = n + Math.imul(q, H) | 0, h = h + Math.imul(A, D) | 0, i = i + Math.imul(A, P) | 0, i = i + Math.imul(B, D) | 0, n = n + Math.imul(B, P) | 0, h = h + Math.imul(b, U) | 0, i = i + Math.imul(b, $) | 0, i = i + Math.imul(S, U) | 0, n = n + Math.imul(S, $) | 0, h = h + Math.imul(x, J) | 0, i = i + Math.imul(x, G) | 0, i = i + Math.imul(_, J) | 0, n = n + Math.imul(_, G) | 0, h = h + Math.imul(w, W) | 0, i = i + Math.imul(w, Q) | 0, i = i + Math.imul(y, W) | 0, n = n + Math.imul(y, Q) | 0, h = h + Math.imul(M, V) | 0, i = i + Math.imul(M, X) | 0, i = i + Math.imul(g, V) | 0, n = n + Math.imul(g, X) | 0, h = h + Math.imul(v, Y) | 0, i = i + Math.imul(v, C) | 0, i = i + Math.imul(p, Y) | 0, n = n + Math.imul(p, C) | 0;
      var _t = (u + h | 0) + ((i & 8191) << 13) | 0;
      u = (n + (i >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, h = Math.imul(I, T), i = Math.imul(I, O), i = i + Math.imul(E, T) | 0, n = Math.imul(E, O), h = h + Math.imul(L, z) | 0, i = i + Math.imul(L, K) | 0, i = i + Math.imul(Z, z) | 0, n = n + Math.imul(Z, K) | 0, h = h + Math.imul(N, F) | 0, i = i + Math.imul(N, H) | 0, i = i + Math.imul(R, F) | 0, n = n + Math.imul(R, H) | 0, h = h + Math.imul(k, D) | 0, i = i + Math.imul(k, P) | 0, i = i + Math.imul(q, D) | 0, n = n + Math.imul(q, P) | 0, h = h + Math.imul(A, U) | 0, i = i + Math.imul(A, $) | 0, i = i + Math.imul(B, U) | 0, n = n + Math.imul(B, $) | 0, h = h + Math.imul(b, J) | 0, i = i + Math.imul(b, G) | 0, i = i + Math.imul(S, J) | 0, n = n + Math.imul(S, G) | 0, h = h + Math.imul(x, W) | 0, i = i + Math.imul(x, Q) | 0, i = i + Math.imul(_, W) | 0, n = n + Math.imul(_, Q) | 0, h = h + Math.imul(w, V) | 0, i = i + Math.imul(w, X) | 0, i = i + Math.imul(y, V) | 0, n = n + Math.imul(y, X) | 0, h = h + Math.imul(M, Y) | 0, i = i + Math.imul(M, C) | 0, i = i + Math.imul(g, Y) | 0, n = n + Math.imul(g, C) | 0, h = h + Math.imul(v, j) | 0, i = i + Math.imul(v, tt) | 0, i = i + Math.imul(p, j) | 0, n = n + Math.imul(p, tt) | 0;
      var bt = (u + h | 0) + ((i & 8191) << 13) | 0;
      u = (n + (i >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, h = Math.imul(I, z), i = Math.imul(I, K), i = i + Math.imul(E, z) | 0, n = Math.imul(E, K), h = h + Math.imul(L, F) | 0, i = i + Math.imul(L, H) | 0, i = i + Math.imul(Z, F) | 0, n = n + Math.imul(Z, H) | 0, h = h + Math.imul(N, D) | 0, i = i + Math.imul(N, P) | 0, i = i + Math.imul(R, D) | 0, n = n + Math.imul(R, P) | 0, h = h + Math.imul(k, U) | 0, i = i + Math.imul(k, $) | 0, i = i + Math.imul(q, U) | 0, n = n + Math.imul(q, $) | 0, h = h + Math.imul(A, J) | 0, i = i + Math.imul(A, G) | 0, i = i + Math.imul(B, J) | 0, n = n + Math.imul(B, G) | 0, h = h + Math.imul(b, W) | 0, i = i + Math.imul(b, Q) | 0, i = i + Math.imul(S, W) | 0, n = n + Math.imul(S, Q) | 0, h = h + Math.imul(x, V) | 0, i = i + Math.imul(x, X) | 0, i = i + Math.imul(_, V) | 0, n = n + Math.imul(_, X) | 0, h = h + Math.imul(w, Y) | 0, i = i + Math.imul(w, C) | 0, i = i + Math.imul(y, Y) | 0, n = n + Math.imul(y, C) | 0, h = h + Math.imul(M, j) | 0, i = i + Math.imul(M, tt) | 0, i = i + Math.imul(g, j) | 0, n = n + Math.imul(g, tt) | 0;
      var St = (u + h | 0) + ((i & 8191) << 13) | 0;
      u = (n + (i >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, h = Math.imul(I, F), i = Math.imul(I, H), i = i + Math.imul(E, F) | 0, n = Math.imul(E, H), h = h + Math.imul(L, D) | 0, i = i + Math.imul(L, P) | 0, i = i + Math.imul(Z, D) | 0, n = n + Math.imul(Z, P) | 0, h = h + Math.imul(N, U) | 0, i = i + Math.imul(N, $) | 0, i = i + Math.imul(R, U) | 0, n = n + Math.imul(R, $) | 0, h = h + Math.imul(k, J) | 0, i = i + Math.imul(k, G) | 0, i = i + Math.imul(q, J) | 0, n = n + Math.imul(q, G) | 0, h = h + Math.imul(A, W) | 0, i = i + Math.imul(A, Q) | 0, i = i + Math.imul(B, W) | 0, n = n + Math.imul(B, Q) | 0, h = h + Math.imul(b, V) | 0, i = i + Math.imul(b, X) | 0, i = i + Math.imul(S, V) | 0, n = n + Math.imul(S, X) | 0, h = h + Math.imul(x, Y) | 0, i = i + Math.imul(x, C) | 0, i = i + Math.imul(_, Y) | 0, n = n + Math.imul(_, C) | 0, h = h + Math.imul(w, j) | 0, i = i + Math.imul(w, tt) | 0, i = i + Math.imul(y, j) | 0, n = n + Math.imul(y, tt) | 0;
      var At = (u + h | 0) + ((i & 8191) << 13) | 0;
      u = (n + (i >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, h = Math.imul(I, D), i = Math.imul(I, P), i = i + Math.imul(E, D) | 0, n = Math.imul(E, P), h = h + Math.imul(L, U) | 0, i = i + Math.imul(L, $) | 0, i = i + Math.imul(Z, U) | 0, n = n + Math.imul(Z, $) | 0, h = h + Math.imul(N, J) | 0, i = i + Math.imul(N, G) | 0, i = i + Math.imul(R, J) | 0, n = n + Math.imul(R, G) | 0, h = h + Math.imul(k, W) | 0, i = i + Math.imul(k, Q) | 0, i = i + Math.imul(q, W) | 0, n = n + Math.imul(q, Q) | 0, h = h + Math.imul(A, V) | 0, i = i + Math.imul(A, X) | 0, i = i + Math.imul(B, V) | 0, n = n + Math.imul(B, X) | 0, h = h + Math.imul(b, Y) | 0, i = i + Math.imul(b, C) | 0, i = i + Math.imul(S, Y) | 0, n = n + Math.imul(S, C) | 0, h = h + Math.imul(x, j) | 0, i = i + Math.imul(x, tt) | 0, i = i + Math.imul(_, j) | 0, n = n + Math.imul(_, tt) | 0;
      var Bt = (u + h | 0) + ((i & 8191) << 13) | 0;
      u = (n + (i >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, h = Math.imul(I, U), i = Math.imul(I, $), i = i + Math.imul(E, U) | 0, n = Math.imul(E, $), h = h + Math.imul(L, J) | 0, i = i + Math.imul(L, G) | 0, i = i + Math.imul(Z, J) | 0, n = n + Math.imul(Z, G) | 0, h = h + Math.imul(N, W) | 0, i = i + Math.imul(N, Q) | 0, i = i + Math.imul(R, W) | 0, n = n + Math.imul(R, Q) | 0, h = h + Math.imul(k, V) | 0, i = i + Math.imul(k, X) | 0, i = i + Math.imul(q, V) | 0, n = n + Math.imul(q, X) | 0, h = h + Math.imul(A, Y) | 0, i = i + Math.imul(A, C) | 0, i = i + Math.imul(B, Y) | 0, n = n + Math.imul(B, C) | 0, h = h + Math.imul(b, j) | 0, i = i + Math.imul(b, tt) | 0, i = i + Math.imul(S, j) | 0, n = n + Math.imul(S, tt) | 0;
      var kt = (u + h | 0) + ((i & 8191) << 13) | 0;
      u = (n + (i >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, h = Math.imul(I, J), i = Math.imul(I, G), i = i + Math.imul(E, J) | 0, n = Math.imul(E, G), h = h + Math.imul(L, W) | 0, i = i + Math.imul(L, Q) | 0, i = i + Math.imul(Z, W) | 0, n = n + Math.imul(Z, Q) | 0, h = h + Math.imul(N, V) | 0, i = i + Math.imul(N, X) | 0, i = i + Math.imul(R, V) | 0, n = n + Math.imul(R, X) | 0, h = h + Math.imul(k, Y) | 0, i = i + Math.imul(k, C) | 0, i = i + Math.imul(q, Y) | 0, n = n + Math.imul(q, C) | 0, h = h + Math.imul(A, j) | 0, i = i + Math.imul(A, tt) | 0, i = i + Math.imul(B, j) | 0, n = n + Math.imul(B, tt) | 0;
      var qt = (u + h | 0) + ((i & 8191) << 13) | 0;
      u = (n + (i >>> 13) | 0) + (qt >>> 26) | 0, qt &= 67108863, h = Math.imul(I, W), i = Math.imul(I, Q), i = i + Math.imul(E, W) | 0, n = Math.imul(E, Q), h = h + Math.imul(L, V) | 0, i = i + Math.imul(L, X) | 0, i = i + Math.imul(Z, V) | 0, n = n + Math.imul(Z, X) | 0, h = h + Math.imul(N, Y) | 0, i = i + Math.imul(N, C) | 0, i = i + Math.imul(R, Y) | 0, n = n + Math.imul(R, C) | 0, h = h + Math.imul(k, j) | 0, i = i + Math.imul(k, tt) | 0, i = i + Math.imul(q, j) | 0, n = n + Math.imul(q, tt) | 0;
      var Nt = (u + h | 0) + ((i & 8191) << 13) | 0;
      u = (n + (i >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, h = Math.imul(I, V), i = Math.imul(I, X), i = i + Math.imul(E, V) | 0, n = Math.imul(E, X), h = h + Math.imul(L, Y) | 0, i = i + Math.imul(L, C) | 0, i = i + Math.imul(Z, Y) | 0, n = n + Math.imul(Z, C) | 0, h = h + Math.imul(N, j) | 0, i = i + Math.imul(N, tt) | 0, i = i + Math.imul(R, j) | 0, n = n + Math.imul(R, tt) | 0;
      var Rt = (u + h | 0) + ((i & 8191) << 13) | 0;
      u = (n + (i >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, h = Math.imul(I, Y), i = Math.imul(I, C), i = i + Math.imul(E, Y) | 0, n = Math.imul(E, C), h = h + Math.imul(L, j) | 0, i = i + Math.imul(L, tt) | 0, i = i + Math.imul(Z, j) | 0, n = n + Math.imul(Z, tt) | 0;
      var Lt = (u + h | 0) + ((i & 8191) << 13) | 0;
      u = (n + (i >>> 13) | 0) + (Lt >>> 26) | 0, Lt &= 67108863, h = Math.imul(I, j), i = Math.imul(I, tt), i = i + Math.imul(E, j) | 0, n = Math.imul(E, tt);
      var Zt = (u + h | 0) + ((i & 8191) << 13) | 0;
      return u = (n + (i >>> 13) | 0) + (Zt >>> 26) | 0, Zt &= 67108863, a[0] = mt, a[1] = pt, a[2] = Mt, a[3] = gt, a[4] = ct, a[5] = wt, a[6] = yt, a[7] = xt, a[8] = _t, a[9] = bt, a[10] = St, a[11] = At, a[12] = Bt, a[13] = kt, a[14] = qt, a[15] = Nt, a[16] = Rt, a[17] = Lt, a[18] = Zt, u !== 0 && (a[19] = u, e.length++), e;
    };
    Math.imul || (Ft = Kt);
    function Ht(o, t, r) {
      r.negative = t.negative ^ o.negative, r.length = o.length + t.length;
      for (var e = 0, f = 0, s = 0; s < r.length - 1; s++) {
        var a = f;
        f = 0;
        for (var u = e & 67108863, h = Math.min(s, t.length - 1), i = Math.max(0, s - o.length + 1); i <= h; i++) {
          var n = s - i, m = o.words[n] | 0, v = t.words[i] | 0, p = m * v, it = p & 67108863;
          a = a + (p / 67108864 | 0) | 0, it = it + u | 0, u = it & 67108863, a = a + (it >>> 26) | 0, f += a >>> 26, a &= 67108863;
        }
        r.words[s] = u, e = a, a = f;
      }
      return e !== 0 ? r.words[s] = e : r.length--, r._strip();
    }
    function Dt(o, t, r) {
      return Ht(o, t, r);
    }
    l.prototype.mulTo = function(t, r) {
      var e, f = this.length + t.length;
      return this.length === 10 && t.length === 10 ? e = Ft(this, t, r) : f < 63 ? e = Kt(this, t, r) : f < 1024 ? e = Ht(this, t, r) : e = Dt(this, t, r), e;
    }, l.prototype.mul = function(t) {
      var r = new l(null);
      return r.words = new Array(this.length + t.length), this.mulTo(t, r);
    }, l.prototype.mulf = function(t) {
      var r = new l(null);
      return r.words = new Array(this.length + t.length), Dt(this, t, r);
    }, l.prototype.imul = function(t) {
      return this.clone().mulTo(t, this);
    }, l.prototype.imuln = function(t) {
      var r = t < 0;
      r && (t = -t), d(typeof t == "number"), d(t < 67108864);
      for (var e = 0, f = 0; f < this.length; f++) {
        var s = (this.words[f] | 0) * t, a = (s & 67108863) + (e & 67108863);
        e >>= 26, e += s / 67108864 | 0, e += a >>> 26, this.words[f] = a & 67108863;
      }
      return e !== 0 && (this.words[f] = e, this.length++), r ? this.ineg() : this;
    }, l.prototype.muln = function(t) {
      return this.clone().imuln(t);
    }, l.prototype.sqr = function() {
      return this.mul(this);
    }, l.prototype.isqr = function() {
      return this.imul(this.clone());
    }, l.prototype.pow = function(t) {
      var r = vi(t);
      if (r.length === 0)
        return new l(1);
      for (var e = this, f = 0; f < r.length && r[f] === 0; f++, e = e.sqr())
        ;
      if (++f < r.length)
        for (var s = e.sqr(); f < r.length; f++, s = s.sqr())
          r[f] !== 0 && (e = e.mul(s));
      return e;
    }, l.prototype.iushln = function(t) {
      d(typeof t == "number" && t >= 0);
      var r = t % 26, e = (t - r) / 26, f = 67108863 >>> 26 - r << 26 - r, s;
      if (r !== 0) {
        var a = 0;
        for (s = 0; s < this.length; s++) {
          var u = this.words[s] & f, h = (this.words[s] | 0) - u << r;
          this.words[s] = h | a, a = u >>> 26 - r;
        }
        a && (this.words[s] = a, this.length++);
      }
      if (e !== 0) {
        for (s = this.length - 1; s >= 0; s--)
          this.words[s + e] = this.words[s];
        for (s = 0; s < e; s++)
          this.words[s] = 0;
        this.length += e;
      }
      return this._strip();
    }, l.prototype.ishln = function(t) {
      return d(this.negative === 0), this.iushln(t);
    }, l.prototype.iushrn = function(t, r, e) {
      d(typeof t == "number" && t >= 0);
      var f;
      r ? f = (r - r % 26) / 26 : f = 0;
      var s = t % 26, a = Math.min((t - s) / 26, this.length), u = 67108863 ^ 67108863 >>> s << s, h = e;
      if (f -= a, f = Math.max(0, f), h) {
        for (var i = 0; i < a; i++)
          h.words[i] = this.words[i];
        h.length = a;
      }
      if (a !== 0)
        if (this.length > a)
          for (this.length -= a, i = 0; i < this.length; i++)
            this.words[i] = this.words[i + a];
        else
          this.words[0] = 0, this.length = 1;
      var n = 0;
      for (i = this.length - 1; i >= 0 && (n !== 0 || i >= f); i--) {
        var m = this.words[i] | 0;
        this.words[i] = n << 26 - s | m >>> s, n = m & u;
      }
      return h && n !== 0 && (h.words[h.length++] = n), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
    }, l.prototype.ishrn = function(t, r, e) {
      return d(this.negative === 0), this.iushrn(t, r, e);
    }, l.prototype.shln = function(t) {
      return this.clone().ishln(t);
    }, l.prototype.ushln = function(t) {
      return this.clone().iushln(t);
    }, l.prototype.shrn = function(t) {
      return this.clone().ishrn(t);
    }, l.prototype.ushrn = function(t) {
      return this.clone().iushrn(t);
    }, l.prototype.testn = function(t) {
      d(typeof t == "number" && t >= 0);
      var r = t % 26, e = (t - r) / 26, f = 1 << r;
      if (this.length <= e)
        return !1;
      var s = this.words[e];
      return !!(s & f);
    }, l.prototype.imaskn = function(t) {
      d(typeof t == "number" && t >= 0);
      var r = t % 26, e = (t - r) / 26;
      if (d(this.negative === 0, "imaskn works only with positive numbers"), this.length <= e)
        return this;
      if (r !== 0 && e++, this.length = Math.min(e, this.length), r !== 0) {
        var f = 67108863 ^ 67108863 >>> r << r;
        this.words[this.length - 1] &= f;
      }
      return this._strip();
    }, l.prototype.maskn = function(t) {
      return this.clone().imaskn(t);
    }, l.prototype.iaddn = function(t) {
      return d(typeof t == "number"), d(t < 67108864), t < 0 ? this.isubn(-t) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= t ? (this.words[0] = t - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t);
    }, l.prototype._iaddn = function(t) {
      this.words[0] += t;
      for (var r = 0; r < this.length && this.words[r] >= 67108864; r++)
        this.words[r] -= 67108864, r === this.length - 1 ? this.words[r + 1] = 1 : this.words[r + 1]++;
      return this.length = Math.max(this.length, r + 1), this;
    }, l.prototype.isubn = function(t) {
      if (d(typeof t == "number"), d(t < 67108864), t < 0)
        return this.iaddn(-t);
      if (this.negative !== 0)
        return this.negative = 0, this.iaddn(t), this.negative = 1, this;
      if (this.words[0] -= t, this.length === 1 && this.words[0] < 0)
        this.words[0] = -this.words[0], this.negative = 1;
      else
        for (var r = 0; r < this.length && this.words[r] < 0; r++)
          this.words[r] += 67108864, this.words[r + 1] -= 1;
      return this._strip();
    }, l.prototype.addn = function(t) {
      return this.clone().iaddn(t);
    }, l.prototype.subn = function(t) {
      return this.clone().isubn(t);
    }, l.prototype.iabs = function() {
      return this.negative = 0, this;
    }, l.prototype.abs = function() {
      return this.clone().iabs();
    }, l.prototype._ishlnsubmul = function(t, r, e) {
      var f = t.length + e, s;
      this._expand(f);
      var a, u = 0;
      for (s = 0; s < t.length; s++) {
        a = (this.words[s + e] | 0) + u;
        var h = (t.words[s] | 0) * r;
        a -= h & 67108863, u = (a >> 26) - (h / 67108864 | 0), this.words[s + e] = a & 67108863;
      }
      for (; s < this.length - e; s++)
        a = (this.words[s + e] | 0) + u, u = a >> 26, this.words[s + e] = a & 67108863;
      if (u === 0)
        return this._strip();
      for (d(u === -1), u = 0, s = 0; s < this.length; s++)
        a = -(this.words[s] | 0) + u, u = a >> 26, this.words[s] = a & 67108863;
      return this.negative = 1, this._strip();
    }, l.prototype._wordDiv = function(t, r) {
      var e = this.length - t.length, f = this.clone(), s = t, a = s.words[s.length - 1] | 0, u = this._countBits(a);
      e = 26 - u, e !== 0 && (s = s.ushln(e), f.iushln(e), a = s.words[s.length - 1] | 0);
      var h = f.length - s.length, i;
      if (r !== "mod") {
        i = new l(null), i.length = h + 1, i.words = new Array(i.length);
        for (var n = 0; n < i.length; n++)
          i.words[n] = 0;
      }
      var m = f.clone()._ishlnsubmul(s, 1, h);
      m.negative === 0 && (f = m, i && (i.words[h] = 1));
      for (var v = h - 1; v >= 0; v--) {
        var p = (f.words[s.length + v] | 0) * 67108864 + (f.words[s.length + v - 1] | 0);
        for (p = Math.min(p / a | 0, 67108863), f._ishlnsubmul(s, p, v); f.negative !== 0; )
          p--, f.negative = 0, f._ishlnsubmul(s, 1, v), f.isZero() || (f.negative ^= 1);
        i && (i.words[v] = p);
      }
      return i && i._strip(), f._strip(), r !== "div" && e !== 0 && f.iushrn(e), {
        div: i || null,
        mod: f
      };
    }, l.prototype.divmod = function(t, r, e) {
      if (d(!t.isZero()), this.isZero())
        return {
          div: new l(0),
          mod: new l(0)
        };
      var f, s, a;
      return this.negative !== 0 && t.negative === 0 ? (a = this.neg().divmod(t, r), r !== "mod" && (f = a.div.neg()), r !== "div" && (s = a.mod.neg(), e && s.negative !== 0 && s.iadd(t)), {
        div: f,
        mod: s
      }) : this.negative === 0 && t.negative !== 0 ? (a = this.divmod(t.neg(), r), r !== "mod" && (f = a.div.neg()), {
        div: f,
        mod: a.mod
      }) : (this.negative & t.negative) !== 0 ? (a = this.neg().divmod(t.neg(), r), r !== "div" && (s = a.mod.neg(), e && s.negative !== 0 && s.isub(t)), {
        div: a.div,
        mod: s
      }) : t.length > this.length || this.cmp(t) < 0 ? {
        div: new l(0),
        mod: this
      } : t.length === 1 ? r === "div" ? {
        div: this.divn(t.words[0]),
        mod: null
      } : r === "mod" ? {
        div: null,
        mod: new l(this.modrn(t.words[0]))
      } : {
        div: this.divn(t.words[0]),
        mod: new l(this.modrn(t.words[0]))
      } : this._wordDiv(t, r);
    }, l.prototype.div = function(t) {
      return this.divmod(t, "div", !1).div;
    }, l.prototype.mod = function(t) {
      return this.divmod(t, "mod", !1).mod;
    }, l.prototype.umod = function(t) {
      return this.divmod(t, "mod", !0).mod;
    }, l.prototype.divRound = function(t) {
      var r = this.divmod(t);
      if (r.mod.isZero())
        return r.div;
      var e = r.div.negative !== 0 ? r.mod.isub(t) : r.mod, f = t.ushrn(1), s = t.andln(1), a = e.cmp(f);
      return a < 0 || s === 1 && a === 0 ? r.div : r.div.negative !== 0 ? r.div.isubn(1) : r.div.iaddn(1);
    }, l.prototype.modrn = function(t) {
      var r = t < 0;
      r && (t = -t), d(t <= 67108863);
      for (var e = (1 << 26) % t, f = 0, s = this.length - 1; s >= 0; s--)
        f = (e * f + (this.words[s] | 0)) % t;
      return r ? -f : f;
    }, l.prototype.modn = function(t) {
      return this.modrn(t);
    }, l.prototype.idivn = function(t) {
      var r = t < 0;
      r && (t = -t), d(t <= 67108863);
      for (var e = 0, f = this.length - 1; f >= 0; f--) {
        var s = (this.words[f] | 0) + e * 67108864;
        this.words[f] = s / t | 0, e = s % t;
      }
      return this._strip(), r ? this.ineg() : this;
    }, l.prototype.divn = function(t) {
      return this.clone().idivn(t);
    }, l.prototype.egcd = function(t) {
      d(t.negative === 0), d(!t.isZero());
      var r = this, e = t.clone();
      r.negative !== 0 ? r = r.umod(t) : r = r.clone();
      for (var f = new l(1), s = new l(0), a = new l(0), u = new l(1), h = 0; r.isEven() && e.isEven(); )
        r.iushrn(1), e.iushrn(1), ++h;
      for (var i = e.clone(), n = r.clone(); !r.isZero(); ) {
        for (var m = 0, v = 1; (r.words[0] & v) === 0 && m < 26; ++m, v <<= 1)
          ;
        if (m > 0)
          for (r.iushrn(m); m-- > 0; )
            (f.isOdd() || s.isOdd()) && (f.iadd(i), s.isub(n)), f.iushrn(1), s.iushrn(1);
        for (var p = 0, it = 1; (e.words[0] & it) === 0 && p < 26; ++p, it <<= 1)
          ;
        if (p > 0)
          for (e.iushrn(p); p-- > 0; )
            (a.isOdd() || u.isOdd()) && (a.iadd(i), u.isub(n)), a.iushrn(1), u.iushrn(1);
        r.cmp(e) >= 0 ? (r.isub(e), f.isub(a), s.isub(u)) : (e.isub(r), a.isub(f), u.isub(s));
      }
      return {
        a,
        b: u,
        gcd: e.iushln(h)
      };
    }, l.prototype._invmp = function(t) {
      d(t.negative === 0), d(!t.isZero());
      var r = this, e = t.clone();
      r.negative !== 0 ? r = r.umod(t) : r = r.clone();
      for (var f = new l(1), s = new l(0), a = e.clone(); r.cmpn(1) > 0 && e.cmpn(1) > 0; ) {
        for (var u = 0, h = 1; (r.words[0] & h) === 0 && u < 26; ++u, h <<= 1)
          ;
        if (u > 0)
          for (r.iushrn(u); u-- > 0; )
            f.isOdd() && f.iadd(a), f.iushrn(1);
        for (var i = 0, n = 1; (e.words[0] & n) === 0 && i < 26; ++i, n <<= 1)
          ;
        if (i > 0)
          for (e.iushrn(i); i-- > 0; )
            s.isOdd() && s.iadd(a), s.iushrn(1);
        r.cmp(e) >= 0 ? (r.isub(e), f.isub(s)) : (e.isub(r), s.isub(f));
      }
      var m;
      return r.cmpn(1) === 0 ? m = f : m = s, m.cmpn(0) < 0 && m.iadd(t), m;
    }, l.prototype.gcd = function(t) {
      if (this.isZero())
        return t.abs();
      if (t.isZero())
        return this.abs();
      var r = this.clone(), e = t.clone();
      r.negative = 0, e.negative = 0;
      for (var f = 0; r.isEven() && e.isEven(); f++)
        r.iushrn(1), e.iushrn(1);
      do {
        for (; r.isEven(); )
          r.iushrn(1);
        for (; e.isEven(); )
          e.iushrn(1);
        var s = r.cmp(e);
        if (s < 0) {
          var a = r;
          r = e, e = a;
        } else if (s === 0 || e.cmpn(1) === 0)
          break;
        r.isub(e);
      } while (!0);
      return e.iushln(f);
    }, l.prototype.invm = function(t) {
      return this.egcd(t).a.umod(t);
    }, l.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, l.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, l.prototype.andln = function(t) {
      return this.words[0] & t;
    }, l.prototype.bincn = function(t) {
      d(typeof t == "number");
      var r = t % 26, e = (t - r) / 26, f = 1 << r;
      if (this.length <= e)
        return this._expand(e + 1), this.words[e] |= f, this;
      for (var s = f, a = e; s !== 0 && a < this.length; a++) {
        var u = this.words[a] | 0;
        u += s, s = u >>> 26, u &= 67108863, this.words[a] = u;
      }
      return s !== 0 && (this.words[a] = s, this.length++), this;
    }, l.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, l.prototype.cmpn = function(t) {
      var r = t < 0;
      if (this.negative !== 0 && !r)
        return -1;
      if (this.negative === 0 && r)
        return 1;
      this._strip();
      var e;
      if (this.length > 1)
        e = 1;
      else {
        r && (t = -t), d(t <= 67108863, "Number is too big");
        var f = this.words[0] | 0;
        e = f === t ? 0 : f < t ? -1 : 1;
      }
      return this.negative !== 0 ? -e | 0 : e;
    }, l.prototype.cmp = function(t) {
      if (this.negative !== 0 && t.negative === 0)
        return -1;
      if (this.negative === 0 && t.negative !== 0)
        return 1;
      var r = this.ucmp(t);
      return this.negative !== 0 ? -r | 0 : r;
    }, l.prototype.ucmp = function(t) {
      if (this.length > t.length)
        return 1;
      if (this.length < t.length)
        return -1;
      for (var r = 0, e = this.length - 1; e >= 0; e--) {
        var f = this.words[e] | 0, s = t.words[e] | 0;
        if (f !== s) {
          f < s ? r = -1 : f > s && (r = 1);
          break;
        }
      }
      return r;
    }, l.prototype.gtn = function(t) {
      return this.cmpn(t) === 1;
    }, l.prototype.gt = function(t) {
      return this.cmp(t) === 1;
    }, l.prototype.gten = function(t) {
      return this.cmpn(t) >= 0;
    }, l.prototype.gte = function(t) {
      return this.cmp(t) >= 0;
    }, l.prototype.ltn = function(t) {
      return this.cmpn(t) === -1;
    }, l.prototype.lt = function(t) {
      return this.cmp(t) === -1;
    }, l.prototype.lten = function(t) {
      return this.cmpn(t) <= 0;
    }, l.prototype.lte = function(t) {
      return this.cmp(t) <= 0;
    }, l.prototype.eqn = function(t) {
      return this.cmpn(t) === 0;
    }, l.prototype.eq = function(t) {
      return this.cmp(t) === 0;
    }, l.red = function(t) {
      return new c(t);
    }, l.prototype.toRed = function(t) {
      return d(!this.red, "Already a number in reduction context"), d(this.negative === 0, "red works only with positives"), t.convertTo(this)._forceRed(t);
    }, l.prototype.fromRed = function() {
      return d(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, l.prototype._forceRed = function(t) {
      return this.red = t, this;
    }, l.prototype.forceRed = function(t) {
      return d(!this.red, "Already a number in reduction context"), this._forceRed(t);
    }, l.prototype.redAdd = function(t) {
      return d(this.red, "redAdd works only with red numbers"), this.red.add(this, t);
    }, l.prototype.redIAdd = function(t) {
      return d(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t);
    }, l.prototype.redSub = function(t) {
      return d(this.red, "redSub works only with red numbers"), this.red.sub(this, t);
    }, l.prototype.redISub = function(t) {
      return d(this.red, "redISub works only with red numbers"), this.red.isub(this, t);
    }, l.prototype.redShl = function(t) {
      return d(this.red, "redShl works only with red numbers"), this.red.shl(this, t);
    }, l.prototype.redMul = function(t) {
      return d(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t);
    }, l.prototype.redIMul = function(t) {
      return d(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t);
    }, l.prototype.redSqr = function() {
      return d(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, l.prototype.redISqr = function() {
      return d(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, l.prototype.redSqrt = function() {
      return d(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, l.prototype.redInvm = function() {
      return d(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, l.prototype.redNeg = function() {
      return d(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, l.prototype.redPow = function(t) {
      return d(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t);
    };
    var dt = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };
    function rt(o, t) {
      this.name = o, this.p = new l(t, 16), this.n = this.p.bitLength(), this.k = new l(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    rt.prototype._tmp = function() {
      var t = new l(null);
      return t.words = new Array(Math.ceil(this.n / 13)), t;
    }, rt.prototype.ireduce = function(t) {
      var r = t, e;
      do
        this.split(r, this.tmp), r = this.imulK(r), r = r.iadd(this.tmp), e = r.bitLength();
      while (e > this.n);
      var f = e < this.n ? -1 : r.ucmp(this.p);
      return f === 0 ? (r.words[0] = 0, r.length = 1) : f > 0 ? r.isub(this.p) : r.strip !== void 0 ? r.strip() : r._strip(), r;
    }, rt.prototype.split = function(t, r) {
      t.iushrn(this.n, 0, r);
    }, rt.prototype.imulK = function(t) {
      return t.imul(this.k);
    };
    function ot() {
      rt.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    nt(ot, rt), ot.prototype.split = function(t, r) {
      for (var e = 4194303, f = Math.min(t.length, 9), s = 0; s < f; s++)
        r.words[s] = t.words[s];
      if (r.length = f, t.length <= 9) {
        t.words[0] = 0, t.length = 1;
        return;
      }
      var a = t.words[9];
      for (r.words[r.length++] = a & e, s = 10; s < t.length; s++) {
        var u = t.words[s] | 0;
        t.words[s - 10] = (u & e) << 4 | a >>> 22, a = u;
      }
      a >>>= 22, t.words[s - 10] = a, a === 0 && t.length > 10 ? t.length -= 10 : t.length -= 9;
    }, ot.prototype.imulK = function(t) {
      t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
      for (var r = 0, e = 0; e < t.length; e++) {
        var f = t.words[e] | 0;
        r += f * 977, t.words[e] = r & 67108863, r = f * 64 + (r / 67108864 | 0);
      }
      return t.words[t.length - 1] === 0 && (t.length--, t.words[t.length - 1] === 0 && t.length--), t;
    };
    function Pt() {
      rt.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    nt(Pt, rt);
    function Ut() {
      rt.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    nt(Ut, rt);
    function vt() {
      rt.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    nt(vt, rt), vt.prototype.imulK = function(t) {
      for (var r = 0, e = 0; e < t.length; e++) {
        var f = (t.words[e] | 0) * 19 + r, s = f & 67108863;
        f >>>= 26, t.words[e] = s, r = f;
      }
      return r !== 0 && (t.words[t.length++] = r), t;
    }, l._prime = function(t) {
      if (dt[t])
        return dt[t];
      var r;
      if (t === "k256")
        r = new ot();
      else if (t === "p224")
        r = new Pt();
      else if (t === "p192")
        r = new Ut();
      else if (t === "p25519")
        r = new vt();
      else
        throw new Error("Unknown prime " + t);
      return dt[t] = r, r;
    };
    function c(o) {
      if (typeof o == "string") {
        var t = l._prime(o);
        this.m = t.p, this.prime = t;
      } else
        d(o.gtn(1), "modulus must be greater than 1"), this.m = o, this.prime = null;
    }
    c.prototype._verify1 = function(t) {
      d(t.negative === 0, "red works only with positives"), d(t.red, "red works only with red numbers");
    }, c.prototype._verify2 = function(t, r) {
      d((t.negative | r.negative) === 0, "red works only with positives"), d(
        t.red && t.red === r.red,
        "red works only with red numbers"
      );
    }, c.prototype.imod = function(t) {
      return this.prime ? this.prime.ireduce(t)._forceRed(this) : (Ot(t, t.umod(this.m)._forceRed(this)), t);
    }, c.prototype.neg = function(t) {
      return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
    }, c.prototype.add = function(t, r) {
      this._verify2(t, r);
      var e = t.add(r);
      return e.cmp(this.m) >= 0 && e.isub(this.m), e._forceRed(this);
    }, c.prototype.iadd = function(t, r) {
      this._verify2(t, r);
      var e = t.iadd(r);
      return e.cmp(this.m) >= 0 && e.isub(this.m), e;
    }, c.prototype.sub = function(t, r) {
      this._verify2(t, r);
      var e = t.sub(r);
      return e.cmpn(0) < 0 && e.iadd(this.m), e._forceRed(this);
    }, c.prototype.isub = function(t, r) {
      this._verify2(t, r);
      var e = t.isub(r);
      return e.cmpn(0) < 0 && e.iadd(this.m), e;
    }, c.prototype.shl = function(t, r) {
      return this._verify1(t), this.imod(t.ushln(r));
    }, c.prototype.imul = function(t, r) {
      return this._verify2(t, r), this.imod(t.imul(r));
    }, c.prototype.mul = function(t, r) {
      return this._verify2(t, r), this.imod(t.mul(r));
    }, c.prototype.isqr = function(t) {
      return this.imul(t, t.clone());
    }, c.prototype.sqr = function(t) {
      return this.mul(t, t);
    }, c.prototype.sqrt = function(t) {
      if (t.isZero())
        return t.clone();
      var r = this.m.andln(3);
      if (d(r % 2 === 1), r === 3) {
        var e = this.m.add(new l(1)).iushrn(2);
        return this.pow(t, e);
      }
      for (var f = this.m.subn(1), s = 0; !f.isZero() && f.andln(1) === 0; )
        s++, f.iushrn(1);
      d(!f.isZero());
      var a = new l(1).toRed(this), u = a.redNeg(), h = this.m.subn(1).iushrn(1), i = this.m.bitLength();
      for (i = new l(2 * i * i).toRed(this); this.pow(i, h).cmp(u) !== 0; )
        i.redIAdd(u);
      for (var n = this.pow(i, f), m = this.pow(t, f.addn(1).iushrn(1)), v = this.pow(t, f), p = s; v.cmp(a) !== 0; ) {
        for (var it = v, M = 0; it.cmp(a) !== 0; M++)
          it = it.redSqr();
        d(M < p);
        var g = this.pow(n, new l(1).iushln(p - M - 1));
        m = m.redMul(g), n = g.redSqr(), v = v.redMul(n), p = M;
      }
      return m;
    }, c.prototype.invm = function(t) {
      var r = t._invmp(this.m);
      return r.negative !== 0 ? (r.negative = 0, this.imod(r).redNeg()) : this.imod(r);
    }, c.prototype.pow = function(t, r) {
      if (r.isZero())
        return new l(1).toRed(this);
      if (r.cmpn(1) === 0)
        return t.clone();
      var e = 4, f = new Array(1 << e);
      f[0] = new l(1).toRed(this), f[1] = t;
      for (var s = 2; s < f.length; s++)
        f[s] = this.mul(f[s - 1], t);
      var a = f[0], u = 0, h = 0, i = r.bitLength() % 26;
      for (i === 0 && (i = 26), s = r.length - 1; s >= 0; s--) {
        for (var n = r.words[s], m = i - 1; m >= 0; m--) {
          var v = n >> m & 1;
          if (a !== f[0] && (a = this.sqr(a)), v === 0 && u === 0) {
            h = 0;
            continue;
          }
          u <<= 1, u |= v, h++, !(h !== e && (s !== 0 || m !== 0)) && (a = this.mul(a, f[u]), h = 0, u = 0);
        }
        i = 26;
      }
      return a;
    }, c.prototype.convertTo = function(t) {
      var r = t.umod(this.m);
      return r === t ? r.clone() : r;
    }, c.prototype.convertFrom = function(t) {
      var r = t.clone();
      return r.red = null, r;
    }, l.mont = function(t) {
      return new ft(t);
    };
    function ft(o) {
      c.call(this, o), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new l(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    nt(ft, c), ft.prototype.convertTo = function(t) {
      return this.imod(t.ushln(this.shift));
    }, ft.prototype.convertFrom = function(t) {
      var r = this.imod(t.mul(this.rinv));
      return r.red = null, r;
    }, ft.prototype.imul = function(t, r) {
      if (t.isZero() || r.isZero())
        return t.words[0] = 0, t.length = 1, t;
      var e = t.imul(r), f = e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), s = e.isub(f).iushrn(this.shift), a = s;
      return s.cmp(this.m) >= 0 ? a = s.isub(this.m) : s.cmpn(0) < 0 && (a = s.iadd(this.m)), a._forceRed(this);
    }, ft.prototype.mul = function(t, r) {
      if (t.isZero() || r.isZero())
        return new l(0)._forceRed(this);
      var e = t.mul(r), f = e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), s = e.isub(f).iushrn(this.shift), a = s;
      return s.cmp(this.m) >= 0 ? a = s.isub(this.m) : s.cmpn(0) < 0 && (a = s.iadd(this.m)), a._forceRed(this);
    }, ft.prototype.invm = function(t) {
      var r = this.imod(t._invmp(this.m).mul(this.r2));
      return r._forceRed(this);
    };
  })(lt, pi);
})(ai);
const xi = ai.exports;
export {
  xi as B,
  yi as a,
  ai as b,
  ci as r
};
