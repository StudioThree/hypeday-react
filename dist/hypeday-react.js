import n, { useState as b, useMemo as q, useEffect as S, useCallback as C } from "react";
const P = "https://apitest.hype.day";
function F(e) {
  return e.text().then((l) => {
    const s = l && JSON.parse(l);
    if (!e.ok) {
      const t = s && s.message || e.statusText;
      return Promise.reject(t);
    }
    return s;
  });
}
function H({
  appId: e,
  projectId: l,
  walletAddress: s
}) {
  const t = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };
  return fetch(
    `${P}/getProject?` + new URLSearchParams({
      appid: e,
      userid: s || "",
      projectid: l
    }),
    t
  ).then(F);
}
function k({
  provider: e,
  appId: l,
  projectId: s,
  chain: t,
  walletAddress: r,
  returnUrl: m
}) {
  const d = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      appId: l,
      chain: t,
      walletAddress: r,
      projectId: s,
      returnUrl: m
    })
  };
  return fetch(
    `https://us-central1-hype-testing.cloudfunctions.net/${e === "twitter" ? "t" : "d"}GetUrlForApp`,
    d
  ).then(F);
}
function T({
  title: e,
  rightText: l,
  buttonDisabled: s = !1,
  onClick: t,
  info: r,
  isLoading: m = !1
}) {
  return /* @__PURE__ */ n.createElement("section", {
    className: "hypeday-section"
  }, /* @__PURE__ */ n.createElement("header", {
    className: "hypeday-section-header"
  }, /* @__PURE__ */ n.createElement("h3", {
    className: "hypeday-h3"
  }, e), l ? /* @__PURE__ */ n.createElement("span", {
    className: "hypeday-info"
  }, l) : /* @__PURE__ */ n.createElement("button", {
    className: "hypeday-button",
    onClick: t,
    disabled: m || s,
    title: s ? "Please login first" : void 0
  }, m && /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-spinner hypeday-btn-spinner"
  }), /* @__PURE__ */ n.createElement("span", {
    style: { visibility: m ? "hidden" : "initial" }
  }, "Connect"))), r.map((d, h) => /* @__PURE__ */ n.createElement("span", {
    key: h,
    className: "hypeday-info"
  }, d)));
}
function I({
  projectData: e,
  appId: l,
  walletAddress: s
}) {
  var h, y, g, i;
  const [t, r] = b(!1), m = q(() => {
    var R, E;
    if (!((R = e == null ? void 0 : e.discord) != null && R.enabled) && !((E = e == null ? void 0 : e.discord2) != null && E.enabled))
      return [];
    const { discord: c, discord2: f } = e, a = [];
    c != null && c.enabled && a.push(c), f != null && f.enabled && a.push(f);
    const u = [];
    return a.forEach((o) => {
      var w;
      if (o.isServerRequired) {
        const N = /* @__PURE__ */ n.createElement(n.Fragment, null, "Join the", " ", /* @__PURE__ */ n.createElement("a", {
          href: o == null ? void 0 : o.serverLink,
          target: "_blank",
          rel: "noreferrer"
        }, /* @__PURE__ */ n.createElement("strong", null, o == null ? void 0 : o.serverDisplayName)), " ", "server on Discord", o.isShouldJoinBeforeRequired ? /* @__PURE__ */ n.createElement(n.Fragment, null, " ", "before", " ", /* @__PURE__ */ n.createElement("strong", null, new Date((o == null ? void 0 : o.shouldJoinBefore) || "").toLocaleString())) : null);
        u.push(N);
      }
      if (o.isRoleRequired) {
        const N = /* @__PURE__ */ n.createElement(n.Fragment, null, 'and have the "', (w = o == null ? void 0 : o.roleDisplayNames) == null ? void 0 : w.join(", "), '" role(s)');
        u.push(N);
      }
    }), u;
  }, [e]), d = async () => {
    if (!(!l || !s || !(e != null && e.id)))
      try {
        r(!0);
        const { url: c } = await k({
          provider: "discord",
          appId: l,
          walletAddress: s,
          chain: e.chain,
          projectId: e.id,
          returnUrl: window.location.href
        });
        window.location.assign(c);
      } catch (c) {
        console.error(c);
      } finally {
        r(!1);
      }
  };
  return !((h = e == null ? void 0 : e.discord) != null && h.enabled) && !((y = e == null ? void 0 : e.discord2) != null && y.enabled) ? null : /* @__PURE__ */ n.createElement(T, {
    title: "Discord",
    onClick: d,
    info: m,
    rightText: (i = (g = e == null ? void 0 : e.userInfo) == null ? void 0 : g.discord) == null ? void 0 : i.username,
    buttonDisabled: !s,
    isLoading: t
  });
}
function L({
  projectData: e
}) {
  var s;
  if (!((s = e == null ? void 0 : e.customfield) != null && s.enabled))
    return null;
  const { customfield: l } = e;
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
    placeholder: l.labels[0]
  }));
}
function A({
  dateString: e,
  message: l
}) {
  const [s, t] = b(!1), [r, m] = b(0), [d, h] = b(0), [y, g] = b(0), [i, c] = b(0);
  return S(() => {
    const f = new Date(e).getTime(), a = setInterval(() => {
      const u = new Date().getTime(), R = f - u, E = Math.floor(R / (1e3 * 60 * 60 * 24)), o = Math.floor(
        R % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)
      ), w = Math.floor(R % (1e3 * 60 * 60) / (1e3 * 60)), N = Math.floor(R % (1e3 * 60) / 1e3);
      if (R <= 0) {
        clearInterval(a), t(!0), m(0), h(0), g(0), c(0);
        return;
      }
      m(E), h(o), g(w), c(N);
    }, 1e3);
    return () => clearInterval(a);
  }, [e]), !s && !r && !d && !y && !i ? /* @__PURE__ */ n.createElement("span", {
    style: { visibility: "hidden" }
  }, "Calculating..") : s ? /* @__PURE__ */ n.createElement(n.Fragment, null, l) : /* @__PURE__ */ n.createElement(n.Fragment, null, r > 0 && `${r} days, `, d > 0 && `${d} hours, `, y > 0 && `${y} minutes, `, i > 0 && `${i} seconds`);
}
function v({
  children: e,
  title: l
}) {
  return /* @__PURE__ */ n.createElement("section", {
    className: "hypeday-section"
  }, /* @__PURE__ */ n.createElement("header", {
    className: "hypeday-section-header"
  }, /* @__PURE__ */ n.createElement("h3", {
    className: "hypeday-h3"
  }, l)), /* @__PURE__ */ n.createElement("span", {
    className: "hypeday-info"
  }, e));
}
function O({
  projectData: e
}) {
  var r, m, d, h, y, g, i, c, f, a, u, R;
  const [l, s] = b(), t = ((r = e == null ? void 0 : e.signupAccess) == null ? void 0 : r.isEndDateRequired) && ((m = e == null ? void 0 : e.signupAccess) == null ? void 0 : m.endDate) && new Date((d = e == null ? void 0 : e.signupAccess) == null ? void 0 : d.endDate).getTime() < Date.now();
  return S(() => {
    var E, o, w, N;
    (E = e == null ? void 0 : e.signupAccess) != null && E.isStartDateRequired && s(
      !!(((o = e == null ? void 0 : e.signupAccess) == null ? void 0 : o.isStartDateRequired) && ((w = e == null ? void 0 : e.signupAccess) == null ? void 0 : w.startDate) && new Date((N = e == null ? void 0 : e.signupAccess) == null ? void 0 : N.startDate).getTime() > Date.now())
    );
  }, [e]), S(() => {
    var E, o;
    if (l && ((E = e == null ? void 0 : e.signupAccess) == null ? void 0 : E.startDate)) {
      const w = setTimeout(
        () => s(!1),
        new Date((o = e == null ? void 0 : e.signupAccess) == null ? void 0 : o.startDate).getTime() - Date.now()
      );
      return () => clearTimeout(w);
    }
  }, [l, (h = e == null ? void 0 : e.signupAccess) == null ? void 0 : h.startDate]), t && ((y = e.signupAccess) == null ? void 0 : y.endDate) ? /* @__PURE__ */ n.createElement(v, {
    title: "Registration is closed"
  }, "Registration is closed on", " ", (i = new Date((g = e.signupAccess) == null ? void 0 : g.endDate)) == null ? void 0 : i.toUTCString(), ". Thank you for your interest.") : l && ((c = e == null ? void 0 : e.signupAccess) == null ? void 0 : c.startDate) ? /* @__PURE__ */ n.createElement(v, {
    title: "Registration starts in:"
  }, /* @__PURE__ */ n.createElement(A, {
    dateString: (f = e == null ? void 0 : e.signupAccess) == null ? void 0 : f.startDate,
    message: "Registration is open."
  })) : !t && !l && ((a = e == null ? void 0 : e.signupAccess) == null ? void 0 : a.isEndDateRequired) && ((u = e == null ? void 0 : e.signupAccess) == null ? void 0 : u.endDate) ? /* @__PURE__ */ n.createElement(v, {
    title: "Registration ends in:"
  }, /* @__PURE__ */ n.createElement(A, {
    dateString: (R = e == null ? void 0 : e.signupAccess) == null ? void 0 : R.endDate,
    message: "Registration is closed."
  })) : null;
}
function M({
  projectData: e,
  appId: l,
  walletAddress: s
}) {
  var h, y, g;
  const [t, r] = b(!1), m = q(() => {
    var f, a;
    if (!((f = e == null ? void 0 : e.twitter) != null && f.enabled))
      return [];
    const { twitter: i } = e, c = [];
    if (i != null && i.isAccountCreatedRequired) {
      const u = /* @__PURE__ */ n.createElement(n.Fragment, null, "Have an account created before", " ", /* @__PURE__ */ n.createElement("strong", null, new Date((i == null ? void 0 : i.accountCreated) || "").toLocaleDateString()));
      c.push(u);
    }
    if (i != null && i.isFollowRequired) {
      const u = (a = i == null ? void 0 : i.follow) == null ? void 0 : a.split(","), R = /* @__PURE__ */ n.createElement(n.Fragment, null, "Follow these account(s):", /* @__PURE__ */ n.createElement("ul", null, u == null ? void 0 : u.map((E) => /* @__PURE__ */ n.createElement("li", {
        key: E
      }, /* @__PURE__ */ n.createElement("a", {
        href: `https://twitter.com/${E.trim()}`,
        target: "_blank",
        rel: "noreferrer"
      }, /* @__PURE__ */ n.createElement("strong", null, "@", E))))));
      c.push(R);
    }
    if (i != null && i.isMinFollowersRequired) {
      const u = /* @__PURE__ */ n.createElement(n.Fragment, null, "Have at least ", /* @__PURE__ */ n.createElement("b", null, i.minFollowers, " follower(s)"));
      c.push(u);
    }
    if (i != null && i.isRetweetRequired) {
      const u = /* @__PURE__ */ n.createElement(n.Fragment, null, "Retweet", " ", /* @__PURE__ */ n.createElement("a", {
        href: i.retweetUrl,
        target: "_blank",
        rel: "noreferrer"
      }, /* @__PURE__ */ n.createElement("strong", null, "this tweet")));
      c.push(u);
    }
    return c;
  }, [e]), d = async () => {
    if (!(!l || !s || !(e != null && e.id)))
      try {
        r(!0);
        const { url: i } = await k({
          provider: "twitter",
          appId: l,
          walletAddress: s,
          chain: e.chain,
          projectId: e.id,
          returnUrl: window.location.href
        });
        window.location.assign(i);
      } catch (i) {
        console.error(i);
      } finally {
        r(!1);
      }
  };
  return (h = e == null ? void 0 : e.twitter) != null && h.enabled ? /* @__PURE__ */ n.createElement(T, {
    title: "Twitter",
    onClick: d,
    info: m,
    rightText: (g = (y = e == null ? void 0 : e.userInfo) == null ? void 0 : y.twitter) == null ? void 0 : g.username,
    buttonDisabled: !s,
    isLoading: t
  }) : null;
}
const U = {
  ethereum: "ETH",
  solana: "SOL",
  polygon: "MATIC",
  avalanche: "AVAX",
  flow: "FLOW"
};
function $({
  projectData: e
}) {
  const l = q(() => {
    if (!(e != null && e.wallet))
      return [];
    const { wallet: s } = e, t = [];
    if (s != null && s.isBalanceRequired) {
      const r = /* @__PURE__ */ n.createElement(n.Fragment, null, "Have at least", /* @__PURE__ */ n.createElement("strong", null, " " + s.balance + " " + U[e.chain] + " "), "in your wallet");
      t.push(r);
    }
    if (s != null && s.isNftRequired) {
      const { nftCollection: r } = s, m = /* @__PURE__ */ n.createElement(n.Fragment, null, "Hold an NFT from", " ", /* @__PURE__ */ n.createElement("strong", null, /* @__PURE__ */ n.createElement("a", {
        href: r == null ? void 0 : r.url,
        target: "_blank",
        rel: "noreferrer"
      }, r == null ? void 0 : r.name)));
      t.push(m);
    }
    return t;
  }, [e]);
  return e != null && e.wallet ? /* @__PURE__ */ n.createElement(T, {
    title: "Wallet",
    onClick: () => console.log("wallet button clicked"),
    info: l,
    rightText: " "
  }) : null;
}
function B({
  appId: e,
  projectId: l,
  walletAddress: s
}) {
  var a;
  const [t, r] = b(), [m, d] = b(!0), [h, y] = b(!1), [g, i] = b(!1), c = C(async () => {
    if (!l || !e) {
      console.error("HypeDayReact: projectId and appId props are required.");
      return;
    }
    d(!0), y(!1), H({ appId: e, projectId: l, walletAddress: s }).then((u) => r(u)).catch((u) => {
      console.error("HypeDayReact: Error fetching project data", u), y(!0);
    }).finally(() => d(!1));
  }, [e, l, s]);
  S(() => {
    c();
  }, [c]);
  const f = () => {
    var u;
    (u = t == null ? void 0 : t.userInfo) != null && u.registered || (i(!0), setTimeout(() => i(!1), 3e3), console.log("register button clicked"));
  };
  return m ? /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-wrapper",
    style: { display: "flex", justifyContent: "center" }
  }, /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-spinner"
  })) : h ? /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-wrapper"
  }, /* @__PURE__ */ n.createElement("span", {
    className: "hypeday-error"
  }, "Something went wrong. Please check your connection."), /* @__PURE__ */ n.createElement("button", {
    className: "hypeday-button",
    onClick: c
  }, "Retry")) : /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-wrapper"
  }, /* @__PURE__ */ n.createElement(O, {
    projectData: t
  }), /* @__PURE__ */ n.createElement($, {
    projectData: t
  }), /* @__PURE__ */ n.createElement(M, {
    projectData: t,
    appId: e,
    walletAddress: s
  }), /* @__PURE__ */ n.createElement(I, {
    projectData: t,
    appId: e,
    walletAddress: s
  }), /* @__PURE__ */ n.createElement(L, {
    projectData: t
  }), /* @__PURE__ */ n.createElement("button", {
    className: "hypeday-register-button",
    onClick: f,
    disabled: g
  }, g && /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-spinner hypeday-btn-spinner"
  }), /* @__PURE__ */ n.createElement("span", {
    style: { visibility: g ? "hidden" : "initial" }
  }, (a = t == null ? void 0 : t.userInfo) != null && a.registered ? "Registered" : "Register")));
}
export {
  B as default
};
