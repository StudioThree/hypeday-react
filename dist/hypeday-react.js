import n, { useState as R, useMemo as q, useEffect as S, useRef as O, useCallback as P } from "react";
const T = "https://apitest.hype.day";
function F(e) {
  return e.text().then((r) => {
    const s = r && JSON.parse(r);
    if (!e.ok) {
      const l = s && s.message || e.statusText;
      return Promise.reject(l);
    }
    return s;
  });
}
function L({
  appId: e,
  projectId: r,
  walletAddress: s
}) {
  const l = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };
  return fetch(
    `${T}/getProject?` + new URLSearchParams({
      appid: e,
      userid: s || "",
      projectid: r
    }),
    l
  ).then(F);
}
function k({
  provider: e,
  appId: r,
  projectId: s,
  chain: l,
  walletAddress: t,
  returnUrl: o
}) {
  const m = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      appId: r,
      chain: l,
      walletAddress: t,
      projectId: s,
      returnUrl: o
    })
  };
  return fetch(
    `${T}/${e === "twitter" ? "t" : "d"}GetUrlForApp`,
    m
  ).then(F);
}
function H({
  appId: e,
  projectId: r,
  chain: s,
  wallet: l,
  customField: t
}) {
  const o = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      appId: e,
      chain: s,
      wallet: l,
      projectId: r,
      customField: t
    })
  };
  return fetch(`${T}/validateForAppProject`, o).then(
    F
  );
}
function A({
  title: e,
  rightText: r,
  buttonDisabled: s = !1,
  onClick: l,
  info: t,
  isLoading: o = !1
}) {
  return /* @__PURE__ */ n.createElement("section", {
    className: "hypeday-section"
  }, /* @__PURE__ */ n.createElement("header", {
    className: "hypeday-section-header"
  }, /* @__PURE__ */ n.createElement("h3", {
    className: "hypeday-h3"
  }, e), r ? /* @__PURE__ */ n.createElement("span", {
    className: "hypeday-info"
  }, r) : /* @__PURE__ */ n.createElement("button", {
    className: "hypeday-button",
    onClick: l,
    disabled: o || s,
    title: s ? "Please login first" : void 0
  }, o && /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-spinner hypeday-btn-spinner"
  }), /* @__PURE__ */ n.createElement("span", {
    style: { visibility: o ? "hidden" : "initial" }
  }, "Connect"))), t.map((m, d) => /* @__PURE__ */ n.createElement("span", {
    key: d,
    className: "hypeday-info"
  }, m)));
}
function I({
  projectData: e,
  appId: r,
  walletAddress: s
}) {
  var d, y, f, i;
  const [l, t] = R(!1), o = q(() => {
    var E, a;
    if (!((E = e == null ? void 0 : e.discord) != null && E.enabled) && !((a = e == null ? void 0 : e.discord2) != null && a.enabled))
      return [];
    const { discord: u, discord2: g } = e, b = [];
    u != null && u.enabled && b.push(u), g != null && g.enabled && b.push(g);
    const h = [];
    return b.forEach((c) => {
      var w;
      if (c.isServerRequired) {
        const N = /* @__PURE__ */ n.createElement(n.Fragment, null, "Join the", " ", /* @__PURE__ */ n.createElement("a", {
          href: c == null ? void 0 : c.serverLink,
          target: "_blank",
          rel: "noreferrer"
        }, /* @__PURE__ */ n.createElement("strong", null, c == null ? void 0 : c.serverDisplayName)), " ", "server on Discord", c.isShouldJoinBeforeRequired ? /* @__PURE__ */ n.createElement(n.Fragment, null, " ", "before", " ", /* @__PURE__ */ n.createElement("strong", null, new Date((c == null ? void 0 : c.shouldJoinBefore) || "").toLocaleString())) : null);
        h.push(N);
      }
      if (c.isRoleRequired) {
        const N = /* @__PURE__ */ n.createElement(n.Fragment, null, 'and have the "', (w = c == null ? void 0 : c.roleDisplayNames) == null ? void 0 : w.join(", "), '" role(s)');
        h.push(N);
      }
    }), h;
  }, [e]), m = async () => {
    if (!(!r || !s || !(e != null && e.id)))
      try {
        t(!0);
        const { url: u } = await k({
          provider: "discord",
          appId: r,
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
  return !((d = e == null ? void 0 : e.discord) != null && d.enabled) && !((y = e == null ? void 0 : e.discord2) != null && y.enabled) ? null : /* @__PURE__ */ n.createElement(A, {
    title: "Discord",
    onClick: m,
    info: o,
    rightText: (i = (f = e == null ? void 0 : e.userInfo) == null ? void 0 : f.discord) == null ? void 0 : i.username,
    buttonDisabled: !s,
    isLoading: l
  });
}
const $ = n.forwardRef(function({
  projectData: r
}, s) {
  var t;
  if (!((t = r == null ? void 0 : r.customfield) != null && t.enabled))
    return null;
  const { customfield: l } = r;
  return /* @__PURE__ */ n.createElement("section", {
    className: "hypeday-section"
  }, /* @__PURE__ */ n.createElement("header", {
    className: "hypeday-section-header"
  }, /* @__PURE__ */ n.createElement("h3", {
    className: "hypeday-h3"
  }, "Open Response")), /* @__PURE__ */ n.createElement("span", {
    className: "hypeday-info"
  }, l.labels[0]), /* @__PURE__ */ n.createElement("input", {
    className: "hypeday-input",
    type: "text",
    placeholder: l.labels[0],
    ref: s
  }));
});
function C({
  dateString: e,
  message: r
}) {
  const [s, l] = R(!1), [t, o] = R(0), [m, d] = R(0), [y, f] = R(0), [i, u] = R(0);
  return S(() => {
    const g = new Date(e).getTime(), b = setInterval(() => {
      const h = new Date().getTime(), E = g - h, a = Math.floor(E / (1e3 * 60 * 60 * 24)), c = Math.floor(
        E % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)
      ), w = Math.floor(E % (1e3 * 60 * 60) / (1e3 * 60)), N = Math.floor(E % (1e3 * 60) / 1e3);
      if (E <= 0) {
        clearInterval(b), l(!0), o(0), d(0), f(0), u(0);
        return;
      }
      o(a), d(c), f(w), u(N);
    }, 1e3);
    return () => clearInterval(b);
  }, [e]), !s && !t && !m && !y && !i ? /* @__PURE__ */ n.createElement("span", {
    style: { visibility: "hidden" }
  }, "Calculating..") : s ? /* @__PURE__ */ n.createElement(n.Fragment, null, r) : /* @__PURE__ */ n.createElement(n.Fragment, null, t > 0 && `${t} days, `, m > 0 && `${m} hours, `, y > 0 && `${y} minutes, `, i > 0 && `${i} seconds`);
}
function v({
  children: e,
  title: r
}) {
  return /* @__PURE__ */ n.createElement("section", {
    className: "hypeday-section"
  }, /* @__PURE__ */ n.createElement("header", {
    className: "hypeday-section-header"
  }, /* @__PURE__ */ n.createElement("h3", {
    className: "hypeday-h3"
  }, r)), /* @__PURE__ */ n.createElement("span", {
    className: "hypeday-info"
  }, e));
}
function M({
  projectData: e
}) {
  var t, o, m, d, y, f, i, u, g, b, h, E;
  const [r, s] = R(), l = ((t = e == null ? void 0 : e.signupAccess) == null ? void 0 : t.isEndDateRequired) && ((o = e == null ? void 0 : e.signupAccess) == null ? void 0 : o.endDate) && new Date((m = e == null ? void 0 : e.signupAccess) == null ? void 0 : m.endDate).getTime() < Date.now();
  return S(() => {
    var a, c, w, N;
    (a = e == null ? void 0 : e.signupAccess) != null && a.isStartDateRequired && s(
      !!(((c = e == null ? void 0 : e.signupAccess) == null ? void 0 : c.isStartDateRequired) && ((w = e == null ? void 0 : e.signupAccess) == null ? void 0 : w.startDate) && new Date((N = e == null ? void 0 : e.signupAccess) == null ? void 0 : N.startDate).getTime() > Date.now())
    );
  }, [e]), S(() => {
    var a, c;
    if (r && ((a = e == null ? void 0 : e.signupAccess) == null ? void 0 : a.startDate)) {
      const w = setTimeout(
        () => s(!1),
        new Date((c = e == null ? void 0 : e.signupAccess) == null ? void 0 : c.startDate).getTime() - Date.now()
      );
      return () => clearTimeout(w);
    }
  }, [r, (d = e == null ? void 0 : e.signupAccess) == null ? void 0 : d.startDate]), l && ((y = e.signupAccess) == null ? void 0 : y.endDate) ? /* @__PURE__ */ n.createElement(v, {
    title: "Registration is closed"
  }, "Registration is closed on", " ", (i = new Date((f = e.signupAccess) == null ? void 0 : f.endDate)) == null ? void 0 : i.toUTCString(), ". Thank you for your interest.") : r && ((u = e == null ? void 0 : e.signupAccess) == null ? void 0 : u.startDate) ? /* @__PURE__ */ n.createElement(v, {
    title: "Registration starts in:"
  }, /* @__PURE__ */ n.createElement(C, {
    dateString: (g = e == null ? void 0 : e.signupAccess) == null ? void 0 : g.startDate,
    message: "Registration is open."
  })) : !l && !r && ((b = e == null ? void 0 : e.signupAccess) == null ? void 0 : b.isEndDateRequired) && ((h = e == null ? void 0 : e.signupAccess) == null ? void 0 : h.endDate) ? /* @__PURE__ */ n.createElement(v, {
    title: "Registration ends in:"
  }, /* @__PURE__ */ n.createElement(C, {
    dateString: (E = e == null ? void 0 : e.signupAccess) == null ? void 0 : E.endDate,
    message: "Registration is closed."
  })) : null;
}
function U({
  projectData: e,
  appId: r,
  walletAddress: s
}) {
  var d, y, f;
  const [l, t] = R(!1), o = q(() => {
    var g, b;
    if (!((g = e == null ? void 0 : e.twitter) != null && g.enabled))
      return [];
    const { twitter: i } = e, u = [];
    if (i != null && i.isAccountCreatedRequired) {
      const h = /* @__PURE__ */ n.createElement(n.Fragment, null, "Have an account created before", " ", /* @__PURE__ */ n.createElement("strong", null, new Date((i == null ? void 0 : i.accountCreated) || "").toLocaleDateString()));
      u.push(h);
    }
    if (i != null && i.isFollowRequired) {
      const h = (b = i == null ? void 0 : i.follow) == null ? void 0 : b.split(","), E = /* @__PURE__ */ n.createElement(n.Fragment, null, "Follow these account(s):", /* @__PURE__ */ n.createElement("ul", null, h == null ? void 0 : h.map((a) => /* @__PURE__ */ n.createElement("li", {
        key: a
      }, /* @__PURE__ */ n.createElement("a", {
        href: `https://twitter.com/${a.trim()}`,
        target: "_blank",
        rel: "noreferrer"
      }, /* @__PURE__ */ n.createElement("strong", null, "@", a))))));
      u.push(E);
    }
    if (i != null && i.isMinFollowersRequired) {
      const h = /* @__PURE__ */ n.createElement(n.Fragment, null, "Have at least ", /* @__PURE__ */ n.createElement("b", null, i.minFollowers, " follower(s)"));
      u.push(h);
    }
    if (i != null && i.isRetweetRequired) {
      const h = /* @__PURE__ */ n.createElement(n.Fragment, null, "Retweet", " ", /* @__PURE__ */ n.createElement("a", {
        href: i.retweetUrl,
        target: "_blank",
        rel: "noreferrer"
      }, /* @__PURE__ */ n.createElement("strong", null, "this tweet")));
      u.push(h);
    }
    return u;
  }, [e]), m = async () => {
    if (!(!r || !s || !(e != null && e.id)))
      try {
        t(!0);
        const { url: i } = await k({
          provider: "twitter",
          appId: r,
          walletAddress: s,
          chain: e.chain,
          projectId: e.id,
          returnUrl: window.location.href
        });
        window.location.assign(i);
      } catch (i) {
        console.error(i);
      } finally {
        t(!1);
      }
  };
  return (d = e == null ? void 0 : e.twitter) != null && d.enabled ? /* @__PURE__ */ n.createElement(A, {
    title: "Twitter",
    onClick: m,
    info: o,
    rightText: (f = (y = e == null ? void 0 : e.userInfo) == null ? void 0 : y.twitter) == null ? void 0 : f.username,
    buttonDisabled: !s,
    isLoading: l
  }) : null;
}
const x = {
  ethereum: "ETH",
  solana: "SOL",
  polygon: "MATIC",
  avalanche: "AVAX",
  flow: "FLOW"
};
function B({
  projectData: e
}) {
  const r = q(() => {
    if (!(e != null && e.wallet))
      return [];
    const { wallet: s } = e, l = [];
    if (s != null && s.isBalanceRequired) {
      const t = /* @__PURE__ */ n.createElement(n.Fragment, null, "Have at least", /* @__PURE__ */ n.createElement("strong", null, " " + s.balance + " " + x[e.chain] + " "), "in your wallet");
      l.push(t);
    }
    if (s != null && s.isNftRequired) {
      const { nftCollection: t } = s, o = /* @__PURE__ */ n.createElement(n.Fragment, null, "Hold an NFT from", " ", /* @__PURE__ */ n.createElement("strong", null, /* @__PURE__ */ n.createElement("a", {
        href: t == null ? void 0 : t.url,
        target: "_blank",
        rel: "noreferrer"
      }, t == null ? void 0 : t.name)));
      l.push(o);
    }
    return l;
  }, [e]);
  return e != null && e.wallet ? /* @__PURE__ */ n.createElement(A, {
    title: "Wallet",
    onClick: () => console.log("wallet button clicked"),
    info: r,
    rightText: " "
  }) : null;
}
function J({
  projectData: e,
  appId: r,
  walletAddress: s,
  inputRef: l
}) {
  var f;
  const [t, o] = R(!1), [m, d] = R(""), y = async () => {
    var i, u;
    if (!(!r || !s || !(e != null && e.id) || ((i = e == null ? void 0 : e.userInfo) == null ? void 0 : i.registered)))
      try {
        d(""), o(!0);
        const { error: g } = await H({
          appId: r,
          wallet: s,
          chain: e.chain,
          projectId: e.id,
          customField: ((u = l == null ? void 0 : l.current) == null ? void 0 : u.value) || ""
        });
        console.error("Register error", g), d(g.message);
      } catch (g) {
        console.error(g);
      } finally {
        o(!1);
      }
  };
  return /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("button", {
    className: "hypeday-register-button",
    onClick: y,
    disabled: t
  }, t && /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-spinner hypeday-btn-spinner"
  }), /* @__PURE__ */ n.createElement("span", {
    style: { visibility: t ? "hidden" : "initial" }
  }, (f = e == null ? void 0 : e.userInfo) != null && f.registered ? "Registered" : "Register")), !!m && /* @__PURE__ */ n.createElement("span", {
    className: "hypeday-error"
  }, m));
}
function W({
  appId: e,
  projectId: r,
  walletAddress: s
}) {
  const [l, t] = R(), [o, m] = R(!0), [d, y] = R(!1), f = O(null), i = P(async () => {
    if (!r || !e) {
      console.error("HypeDayReact: projectId and appId props are required.");
      return;
    }
    m(!0), y(!1), L({ appId: e, projectId: r, walletAddress: s }).then((u) => t(u)).catch((u) => {
      console.error("HypeDayReact: Error fetching project data", u), y(!0);
    }).finally(() => m(!1));
  }, [e, r, s]);
  return S(() => {
    i();
  }, [i]), o ? /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-wrapper",
    style: { display: "flex", justifyContent: "center" }
  }, /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-spinner"
  })) : d ? /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-wrapper"
  }, /* @__PURE__ */ n.createElement("span", {
    className: "hypeday-error"
  }, "Something went wrong. Please check your connection."), /* @__PURE__ */ n.createElement("button", {
    className: "hypeday-button",
    onClick: i
  }, "Retry")) : /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-wrapper"
  }, /* @__PURE__ */ n.createElement(M, {
    projectData: l
  }), /* @__PURE__ */ n.createElement(B, {
    projectData: l
  }), /* @__PURE__ */ n.createElement(U, {
    projectData: l,
    appId: e,
    walletAddress: s
  }), /* @__PURE__ */ n.createElement(I, {
    projectData: l,
    appId: e,
    walletAddress: s
  }), /* @__PURE__ */ n.createElement($, {
    projectData: l,
    ref: f
  }), /* @__PURE__ */ n.createElement(J, {
    projectData: l,
    appId: e,
    walletAddress: s,
    inputRef: f
  }));
}
export {
  W as default
};
