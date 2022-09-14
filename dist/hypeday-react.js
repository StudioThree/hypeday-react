import n, { useState as b, useMemo as F, useEffect as q, useRef as L, useCallback as H } from "react";
const C = "https://apitest.hype.day";
function k(e) {
  return e.text().then((i) => {
    const s = i && JSON.parse(i);
    if (!e.ok) {
      const r = s && s.message || e.statusText;
      return Promise.reject(r);
    }
    return s;
  });
}
function x({
  appId: e,
  projectId: i,
  walletAddress: s
}) {
  const r = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };
  return fetch(
    `${C}/getProject?` + new URLSearchParams({
      appid: e,
      wallet: s || "",
      projectid: i
    }),
    r
  ).then(k);
}
function I({
  provider: e,
  appId: i,
  projectId: s,
  chain: r,
  walletAddress: t,
  returnUrl: m
}) {
  const d = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      appId: i,
      chain: r,
      walletAddress: t,
      projectId: s,
      returnUrl: m
    })
  };
  return fetch(
    `${C}/${e === "twitter" ? "t" : "d"}GetUrlForApp`,
    d
  ).then(k);
}
function $({
  appId: e,
  projectId: i,
  chain: s,
  wallet: r,
  customField: t
}) {
  const m = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      appId: e,
      chain: s,
      wallet: r,
      projectId: i,
      customField: t
    })
  };
  return fetch(`${C}/validateForAppProject`, m).then(
    k
  );
}
function A({
  title: e,
  rightText: i,
  buttonDisabled: s = !1,
  onClick: r,
  info: t,
  isLoading: m = !1,
  showButton: d = !0
}) {
  return /* @__PURE__ */ n.createElement("section", {
    className: "hypeday-section"
  }, /* @__PURE__ */ n.createElement("header", {
    className: "hypeday-section-header"
  }, /* @__PURE__ */ n.createElement("h3", {
    className: "hypeday-h3"
  }, e), d && /* @__PURE__ */ n.createElement("button", {
    className: "hypeday-button",
    onClick: r,
    disabled: m || s,
    title: s ? "Please login first" : void 0
  }, m && /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-spinner hypeday-btn-spinner"
  }), /* @__PURE__ */ n.createElement("span", {
    style: { visibility: m ? "hidden" : "initial" }
  }, i || "Connect"))), t.map((y, h) => /* @__PURE__ */ n.createElement("span", {
    key: h,
    className: "hypeday-info"
  }, y)));
}
function B({
  projectData: e,
  appId: i,
  walletAddress: s
}) {
  var y, h, f, l;
  const [r, t] = b(!1), m = F(() => {
    var E, g;
    if (!((E = e == null ? void 0 : e.discord) != null && E.enabled) && !((g = e == null ? void 0 : e.discord2) != null && g.enabled))
      return [];
    const { discord: u, discord2: R } = e, a = [];
    u != null && u.enabled && a.push(u), R != null && R.enabled && a.push(R);
    const c = [];
    return a.forEach((o) => {
      var w;
      if (o.isServerRequired) {
        const N = /* @__PURE__ */ n.createElement(n.Fragment, null, "Join the", " ", /* @__PURE__ */ n.createElement("a", {
          href: o == null ? void 0 : o.serverLink,
          target: "_blank",
          rel: "noreferrer"
        }, /* @__PURE__ */ n.createElement("strong", null, o == null ? void 0 : o.serverDisplayName)), " ", "server on Discord", o.isShouldJoinBeforeRequired ? /* @__PURE__ */ n.createElement(n.Fragment, null, " ", "before", " ", /* @__PURE__ */ n.createElement("strong", null, new Date((o == null ? void 0 : o.shouldJoinBefore) || "").toLocaleString())) : null);
        c.push(N);
      }
      if (o.isRoleRequired) {
        const N = /* @__PURE__ */ n.createElement(n.Fragment, null, 'and have the "', (w = o == null ? void 0 : o.roleDisplayNames) == null ? void 0 : w.join(", "), '" role(s)');
        c.push(N);
      }
    }), c;
  }, [e]), d = async () => {
    if (!(!i || !s || !(e != null && e.id)))
      try {
        t(!0);
        const { url: u } = await I({
          provider: "discord",
          appId: i,
          walletAddress: s,
          chain: e.chain,
          projectId: e.id,
          returnUrl: window.location.href
        });
        window.location.assign(u);
      } catch (u) {
        console.error(u);
      } finally {
        t(!1);
      }
  };
  return !((y = e == null ? void 0 : e.discord) != null && y.enabled) && !((h = e == null ? void 0 : e.discord2) != null && h.enabled) ? null : /* @__PURE__ */ n.createElement(A, {
    title: "Discord",
    onClick: d,
    info: m,
    rightText: (l = (f = e == null ? void 0 : e.userInfo) == null ? void 0 : f.discord) == null ? void 0 : l.username,
    buttonDisabled: !s,
    isLoading: r
  });
}
const M = n.forwardRef(function({
  projectData: i
}, s) {
  var t;
  if (!((t = i == null ? void 0 : i.customfield) != null && t.enabled))
    return null;
  const { customfield: r } = i;
  return /* @__PURE__ */ n.createElement("section", {
    className: "hypeday-section"
  }, /* @__PURE__ */ n.createElement("header", {
    className: "hypeday-section-header"
  }, /* @__PURE__ */ n.createElement("h3", {
    className: "hypeday-h3"
  }, "Open Response")), /* @__PURE__ */ n.createElement("span", {
    className: "hypeday-info"
  }, r.labels[0]), /* @__PURE__ */ n.createElement("input", {
    className: "hypeday-input",
    type: "text",
    placeholder: r.labels[0],
    ref: s
  }));
});
function P({
  dateString: e,
  message: i
}) {
  const [s, r] = b(!1), [t, m] = b(0), [d, y] = b(0), [h, f] = b(0), [l, u] = b(0);
  return q(() => {
    const R = new Date(e).getTime(), a = setInterval(() => {
      const c = new Date().getTime(), E = R - c, g = Math.floor(E / (1e3 * 60 * 60 * 24)), o = Math.floor(
        E % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)
      ), w = Math.floor(E % (1e3 * 60 * 60) / (1e3 * 60)), N = Math.floor(E % (1e3 * 60) / 1e3);
      if (E <= 0) {
        clearInterval(a), r(!0), m(0), y(0), f(0), u(0);
        return;
      }
      m(g), y(o), f(w), u(N);
    }, 1e3);
    return () => clearInterval(a);
  }, [e]), !s && !t && !d && !h && !l ? /* @__PURE__ */ n.createElement("span", {
    style: { visibility: "hidden" }
  }, "Calculating..") : s ? /* @__PURE__ */ n.createElement(n.Fragment, null, i) : /* @__PURE__ */ n.createElement(n.Fragment, null, t > 0 && `${t} days, `, d > 0 && `${d} hours, `, h > 0 && `${h} minutes, `, l > 0 && `${l} seconds`);
}
function T({
  children: e,
  title: i
}) {
  return /* @__PURE__ */ n.createElement("section", {
    className: "hypeday-section"
  }, /* @__PURE__ */ n.createElement("header", {
    className: "hypeday-section-header"
  }, /* @__PURE__ */ n.createElement("h3", {
    className: "hypeday-h3"
  }, i)), /* @__PURE__ */ n.createElement("span", {
    className: "hypeday-info"
  }, e));
}
function U({
  projectData: e
}) {
  var t, m, d, y, h, f, l, u, R, a, c, E;
  const [i, s] = b(), r = ((t = e == null ? void 0 : e.signupAccess) == null ? void 0 : t.isEndDateRequired) && ((m = e == null ? void 0 : e.signupAccess) == null ? void 0 : m.endDate) && new Date((d = e == null ? void 0 : e.signupAccess) == null ? void 0 : d.endDate).getTime() < Date.now();
  return q(() => {
    var g, o, w, N;
    (g = e == null ? void 0 : e.signupAccess) != null && g.isStartDateRequired && s(
      !!(((o = e == null ? void 0 : e.signupAccess) == null ? void 0 : o.isStartDateRequired) && ((w = e == null ? void 0 : e.signupAccess) == null ? void 0 : w.startDate) && new Date((N = e == null ? void 0 : e.signupAccess) == null ? void 0 : N.startDate).getTime() > Date.now())
    );
  }, [e]), q(() => {
    var g, o;
    if (i && ((g = e == null ? void 0 : e.signupAccess) == null ? void 0 : g.startDate)) {
      const w = setTimeout(
        () => s(!1),
        new Date((o = e == null ? void 0 : e.signupAccess) == null ? void 0 : o.startDate).getTime() - Date.now()
      );
      return () => clearTimeout(w);
    }
  }, [i, (y = e == null ? void 0 : e.signupAccess) == null ? void 0 : y.startDate]), r && ((h = e.signupAccess) == null ? void 0 : h.endDate) ? /* @__PURE__ */ n.createElement(T, {
    title: "Registration is closed"
  }, "Registration is closed on", " ", (l = new Date((f = e.signupAccess) == null ? void 0 : f.endDate)) == null ? void 0 : l.toUTCString(), ". Thank you for your interest.") : i && ((u = e == null ? void 0 : e.signupAccess) == null ? void 0 : u.startDate) ? /* @__PURE__ */ n.createElement(T, {
    title: "Registration starts in:"
  }, /* @__PURE__ */ n.createElement(P, {
    dateString: (R = e == null ? void 0 : e.signupAccess) == null ? void 0 : R.startDate,
    message: "Registration is open."
  })) : !r && !i && ((a = e == null ? void 0 : e.signupAccess) == null ? void 0 : a.isEndDateRequired) && ((c = e == null ? void 0 : e.signupAccess) == null ? void 0 : c.endDate) ? /* @__PURE__ */ n.createElement(T, {
    title: "Registration ends in:"
  }, /* @__PURE__ */ n.createElement(P, {
    dateString: (E = e == null ? void 0 : e.signupAccess) == null ? void 0 : E.endDate,
    message: "Registration is closed."
  })) : null;
}
function J({
  projectData: e,
  appId: i,
  walletAddress: s
}) {
  var y, h, f;
  const [r, t] = b(!1), m = F(() => {
    var R, a;
    if (!((R = e == null ? void 0 : e.twitter) != null && R.enabled))
      return [];
    const { twitter: l } = e, u = [];
    if (l != null && l.isAccountCreatedRequired) {
      const c = /* @__PURE__ */ n.createElement(n.Fragment, null, "Have an account created before", " ", /* @__PURE__ */ n.createElement("strong", null, new Date((l == null ? void 0 : l.accountCreated) || "").toLocaleDateString()));
      u.push(c);
    }
    if (l != null && l.isFollowRequired) {
      const c = (a = l == null ? void 0 : l.follow) == null ? void 0 : a.split(","), E = /* @__PURE__ */ n.createElement(n.Fragment, null, "Follow these account(s):", /* @__PURE__ */ n.createElement("ul", null, c == null ? void 0 : c.map((g) => /* @__PURE__ */ n.createElement("li", {
        key: g
      }, /* @__PURE__ */ n.createElement("a", {
        href: `https://twitter.com/${g.trim()}`,
        target: "_blank",
        rel: "noreferrer"
      }, /* @__PURE__ */ n.createElement("strong", null, "@", g))))));
      u.push(E);
    }
    if (l != null && l.isMinFollowersRequired) {
      const c = /* @__PURE__ */ n.createElement(n.Fragment, null, "Have at least ", /* @__PURE__ */ n.createElement("b", null, l.minFollowers, " follower(s)"));
      u.push(c);
    }
    if (l != null && l.isRetweetRequired) {
      const c = /* @__PURE__ */ n.createElement(n.Fragment, null, "Retweet", " ", /* @__PURE__ */ n.createElement("a", {
        href: l.retweetUrl,
        target: "_blank",
        rel: "noreferrer"
      }, /* @__PURE__ */ n.createElement("strong", null, "this tweet")));
      u.push(c);
    }
    return u;
  }, [e]), d = async () => {
    if (!(!i || !s || !(e != null && e.id)))
      try {
        t(!0);
        const { url: l } = await I({
          provider: "twitter",
          appId: i,
          walletAddress: s,
          chain: e.chain,
          projectId: e.id,
          returnUrl: window.location.href
        });
        window.location.assign(l);
      } catch (l) {
        console.error(l);
      } finally {
        t(!1);
      }
  };
  return (y = e == null ? void 0 : e.twitter) != null && y.enabled ? /* @__PURE__ */ n.createElement(A, {
    title: "Twitter",
    onClick: d,
    info: m,
    rightText: (f = (h = e == null ? void 0 : e.userInfo) == null ? void 0 : h.twitter) == null ? void 0 : f.username,
    buttonDisabled: !s,
    isLoading: r
  }) : null;
}
const _ = {
  ethereum: "ETH",
  solana: "SOL",
  polygon: "MATIC",
  avalanche: "AVAX",
  flow: "FLOW"
};
function W({
  projectData: e
}) {
  const i = F(() => {
    if (!(e != null && e.wallet))
      return [];
    const { wallet: s } = e, r = [];
    if (s != null && s.isBalanceRequired) {
      const t = /* @__PURE__ */ n.createElement(n.Fragment, null, "Have at least", /* @__PURE__ */ n.createElement("strong", null, " " + s.balance + " " + _[e.chain] + " "), "in your wallet");
      r.push(t);
    }
    if (s != null && s.isNftRequired) {
      const { nftCollection: t } = s, m = /* @__PURE__ */ n.createElement(n.Fragment, null, "Hold an NFT from", " ", /* @__PURE__ */ n.createElement("strong", null, /* @__PURE__ */ n.createElement("a", {
        href: t == null ? void 0 : t.url,
        target: "_blank",
        rel: "noreferrer"
      }, t == null ? void 0 : t.name)));
      r.push(m);
    }
    return r;
  }, [e]);
  return !(e != null && e.wallet) || !i.length ? null : /* @__PURE__ */ n.createElement(A, {
    title: "Wallet",
    onClick: () => console.log("wallet button clicked"),
    info: i,
    showButton: !1
  });
}
function G({
  projectData: e,
  appId: i,
  walletAddress: s,
  inputRef: r
}) {
  var R, a, c, E, g, o, w, N, O;
  const [t, m] = b(!1), [d, y] = b(""), [h, f] = b(!1);
  q(() => {
    var S;
    f(!!((S = e == null ? void 0 : e.userInfo) != null && S.registered));
  }, [e]);
  const l = async () => {
    var S;
    if (!(!i || !s || !(e != null && e.id) || h))
      try {
        y(""), m(!0);
        const { error: v } = await $({
          appId: i,
          wallet: s,
          chain: e.chain,
          projectId: e.id,
          customField: ((S = r == null ? void 0 : r.current) == null ? void 0 : S.value) || ""
        });
        if (v)
          return console.error("Register error", v), y(v.message);
        f(!0);
      } catch (v) {
        console.error(v);
      } finally {
        m(!1);
      }
  }, u = t || !s || ((R = e == null ? void 0 : e.discord) == null ? void 0 : R.enabled) && !((c = (a = e == null ? void 0 : e.userInfo) == null ? void 0 : a.discord) != null && c.username) || ((E = e == null ? void 0 : e.discord2) == null ? void 0 : E.enabled) && !((o = (g = e == null ? void 0 : e.userInfo) == null ? void 0 : g.discord) != null && o.username) || ((w = e == null ? void 0 : e.twitter) == null ? void 0 : w.enabled) && !((O = (N = e == null ? void 0 : e.userInfo) == null ? void 0 : N.twitter) != null && O.username);
  return /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("button", {
    className: "hypeday-register-button",
    onClick: l,
    disabled: u
  }, t && /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-spinner hypeday-btn-spinner"
  }), /* @__PURE__ */ n.createElement("span", {
    style: { visibility: t ? "hidden" : "initial" }
  }, h ? "Registered! \u{1F389}" : "Register")), !!d && /* @__PURE__ */ n.createElement("span", {
    className: "hypeday-register-error"
  }, d));
}
function z({
  appId: e,
  projectId: i,
  walletAddress: s
}) {
  const [r, t] = b(), [m, d] = b(!0), [y, h] = b(""), f = L(null), l = H(async () => {
    if (!i || !e) {
      console.error("HypeDayReact: projectId and appId props are required.");
      return;
    }
    d(!0), h(""), x({ appId: e, projectId: i, walletAddress: s }).then((u) => t(u)).catch((u) => {
      console.error("HypeDayReact: Error fetching project data", u), h(
        u.message || "Something went wrong. Please check your connection."
      );
    }).finally(() => d(!1));
  }, [e, i, s]);
  return q(() => {
    l();
  }, [l]), m ? /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-wrapper",
    style: { display: "flex", justifyContent: "center" }
  }, /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-spinner"
  })) : y ? /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-wrapper"
  }, /* @__PURE__ */ n.createElement("span", {
    className: "hypeday-error"
  }, y), /* @__PURE__ */ n.createElement("button", {
    className: "hypeday-button",
    onClick: l
  }, "Retry")) : /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-wrapper"
  }, /* @__PURE__ */ n.createElement(U, {
    projectData: r
  }), /* @__PURE__ */ n.createElement(W, {
    projectData: r
  }), /* @__PURE__ */ n.createElement(J, {
    projectData: r,
    appId: e,
    walletAddress: s
  }), /* @__PURE__ */ n.createElement(B, {
    projectData: r,
    appId: e,
    walletAddress: s
  }), /* @__PURE__ */ n.createElement(M, {
    projectData: r,
    ref: f
  }), /* @__PURE__ */ n.createElement(G, {
    projectData: r,
    appId: e,
    walletAddress: s,
    inputRef: f
  }), /* @__PURE__ */ n.createElement("div", {
    style: {
      fontSize: "0.8em",
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      paddingTop: 12
    }
  }, /* @__PURE__ */ n.createElement("span", null, "Powered by", " ", /* @__PURE__ */ n.createElement("a", {
    href: "https://hype.day",
    target: "_blank",
    rel: "noreferrer",
    style: { textDecoration: "none" }
  }, "Hype.Day"))));
}
export {
  z as default
};
