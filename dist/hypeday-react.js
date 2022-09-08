import n, { useState as w, useMemo as S, useEffect as A, useCallback as C } from "react";
const L = "https://apitest.hype.day";
function F(e) {
  return e.text().then((t) => {
    const s = t && JSON.parse(t);
    if (!e.ok) {
      const i = s && s.message || e.statusText;
      return Promise.reject(i);
    }
    return s;
  });
}
function P({
  appId: e,
  projectId: t,
  userId: s
}) {
  const i = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };
  return fetch(
    `${L}/getProject?` + new URLSearchParams({
      appid: e,
      userid: s || "",
      projectid: t
    }),
    i
  ).then(F);
}
function k({
  provider: e,
  appId: t,
  projectId: s,
  userId: i,
  returnUrl: r
}) {
  const m = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };
  return fetch(
    `https://us-central1-hype-testing.cloudfunctions.net/${e === "twitter" ? "t" : "d"}GetUrlForApp?` + new URLSearchParams({
      appid: t,
      userid: i,
      projectid: s,
      returnurl: r
    }),
    m
  ).then(F);
}
function q({
  title: e,
  rightText: t,
  buttonDisabled: s = !1,
  onClick: i,
  info: r,
  isLoading: m = !1
}) {
  return /* @__PURE__ */ n.createElement("section", {
    className: "hypeday-section"
  }, /* @__PURE__ */ n.createElement("header", {
    className: "hypeday-section-header"
  }, /* @__PURE__ */ n.createElement("h3", {
    className: "hypeday-h3"
  }, e), t ? /* @__PURE__ */ n.createElement("span", {
    className: "hypeday-info"
  }, t) : /* @__PURE__ */ n.createElement("button", {
    className: "hypeday-button",
    onClick: i,
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
function H({
  projectData: e,
  appId: t,
  userId: s
}) {
  var h, a, y, l;
  const [i, r] = w(!1), m = S(() => {
    var R, E;
    if (!((R = e == null ? void 0 : e.discord) != null && R.enabled) && !((E = e == null ? void 0 : e.discord2) != null && E.enabled))
      return [];
    const { discord: c, discord2: f } = e, g = [];
    c != null && c.enabled && g.push(c), f != null && f.enabled && g.push(f);
    const u = [];
    return g.forEach((o) => {
      var b;
      if (o.isServerRequired) {
        const N = /* @__PURE__ */ n.createElement(n.Fragment, null, "Join the", " ", /* @__PURE__ */ n.createElement("a", {
          href: o == null ? void 0 : o.serverLink,
          target: "_blank",
          rel: "noreferrer"
        }, /* @__PURE__ */ n.createElement("strong", null, o == null ? void 0 : o.serverDisplayName)), " ", "server on Discord", o.isShouldJoinBeforeRequired ? /* @__PURE__ */ n.createElement(n.Fragment, null, " ", "before", " ", /* @__PURE__ */ n.createElement("strong", null, new Date((o == null ? void 0 : o.shouldJoinBefore) || "").toLocaleString())) : null);
        u.push(N);
      }
      if (o.isRoleRequired) {
        const N = /* @__PURE__ */ n.createElement(n.Fragment, null, 'and have the "', (b = o == null ? void 0 : o.roleDisplayNames) == null ? void 0 : b.join(", "), '" role(s)');
        u.push(N);
      }
    }), u;
  }, [e]), d = async () => {
    if (!(!t || !s || !(e != null && e.id)))
      try {
        r(!0);
        const { url: c } = await k({
          provider: "discord",
          appId: t,
          userId: s,
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
  return !((h = e == null ? void 0 : e.discord) != null && h.enabled) && !((a = e == null ? void 0 : e.discord2) != null && a.enabled) ? null : /* @__PURE__ */ n.createElement(q, {
    title: "Discord",
    onClick: d,
    info: m,
    rightText: (l = (y = e == null ? void 0 : e.userInfo) == null ? void 0 : y.discord) == null ? void 0 : l.username,
    buttonDisabled: !s,
    isLoading: i
  });
}
function U({
  projectData: e
}) {
  var s;
  if (!((s = e == null ? void 0 : e.customfield) != null && s.enabled))
    return null;
  const { customfield: t } = e;
  return /* @__PURE__ */ n.createElement("section", {
    className: "hypeday-section"
  }, /* @__PURE__ */ n.createElement("header", {
    className: "hypeday-section-header"
  }, /* @__PURE__ */ n.createElement("h3", {
    className: "hypeday-h3"
  }, "Open Response")), /* @__PURE__ */ n.createElement("span", {
    className: "hypeday-info"
  }, t.labels[0]), /* @__PURE__ */ n.createElement("input", {
    className: "hypeday-input",
    type: "text",
    placeholder: t.labels[0]
  }));
}
function T({
  dateString: e,
  message: t
}) {
  const [s, i] = w(!1), [r, m] = w(0), [d, h] = w(0), [a, y] = w(0), [l, c] = w(0);
  return A(() => {
    const f = new Date(e).getTime(), g = setInterval(() => {
      const u = new Date().getTime(), R = f - u, E = Math.floor(R / (1e3 * 60 * 60 * 24)), o = Math.floor(
        R % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)
      ), b = Math.floor(R % (1e3 * 60 * 60) / (1e3 * 60)), N = Math.floor(R % (1e3 * 60) / 1e3);
      if (R <= 0) {
        clearInterval(g), i(!0), m(0), h(0), y(0), c(0);
        return;
      }
      m(E), h(o), y(b), c(N);
    }, 1e3);
    return () => clearInterval(g);
  }, [e]), !s && !r && !d && !a && !l ? /* @__PURE__ */ n.createElement("span", {
    style: { visibility: "hidden" }
  }, "Calculating..") : s ? /* @__PURE__ */ n.createElement(n.Fragment, null, t) : /* @__PURE__ */ n.createElement(n.Fragment, null, r > 0 && `${r} days, `, d > 0 && `${d} hours, `, a > 0 && `${a} minutes, `, l > 0 && `${l} seconds`);
}
function v({
  children: e,
  title: t
}) {
  return /* @__PURE__ */ n.createElement("section", {
    className: "hypeday-section"
  }, /* @__PURE__ */ n.createElement("header", {
    className: "hypeday-section-header"
  }, /* @__PURE__ */ n.createElement("h3", {
    className: "hypeday-h3"
  }, t)), /* @__PURE__ */ n.createElement("span", {
    className: "hypeday-info"
  }, e));
}
function M({
  projectData: e
}) {
  var r, m, d, h, a, y, l, c, f, g, u, R;
  const [t, s] = w(), i = ((r = e == null ? void 0 : e.signupAccess) == null ? void 0 : r.isEndDateRequired) && ((m = e == null ? void 0 : e.signupAccess) == null ? void 0 : m.endDate) && new Date((d = e == null ? void 0 : e.signupAccess) == null ? void 0 : d.endDate).getTime() < Date.now();
  return A(() => {
    var E, o, b, N;
    (E = e == null ? void 0 : e.signupAccess) != null && E.isStartDateRequired && s(
      !!(((o = e == null ? void 0 : e.signupAccess) == null ? void 0 : o.isStartDateRequired) && ((b = e == null ? void 0 : e.signupAccess) == null ? void 0 : b.startDate) && new Date((N = e == null ? void 0 : e.signupAccess) == null ? void 0 : N.startDate).getTime() > Date.now())
    );
  }, [e]), A(() => {
    var E, o;
    if (t && ((E = e == null ? void 0 : e.signupAccess) == null ? void 0 : E.startDate)) {
      const b = setTimeout(
        () => s(!1),
        new Date((o = e == null ? void 0 : e.signupAccess) == null ? void 0 : o.startDate).getTime() - Date.now()
      );
      return () => clearTimeout(b);
    }
  }, [t, (h = e == null ? void 0 : e.signupAccess) == null ? void 0 : h.startDate]), i && ((a = e.signupAccess) == null ? void 0 : a.endDate) ? /* @__PURE__ */ n.createElement(v, {
    title: "Registration is closed"
  }, "Registration is closed on", " ", (l = new Date((y = e.signupAccess) == null ? void 0 : y.endDate)) == null ? void 0 : l.toUTCString(), ". Thank you for your interest.") : t && ((c = e == null ? void 0 : e.signupAccess) == null ? void 0 : c.startDate) ? /* @__PURE__ */ n.createElement(v, {
    title: "Registration starts in:"
  }, /* @__PURE__ */ n.createElement(T, {
    dateString: (f = e == null ? void 0 : e.signupAccess) == null ? void 0 : f.startDate,
    message: "Registration is open."
  })) : !i && !t && ((g = e == null ? void 0 : e.signupAccess) == null ? void 0 : g.isEndDateRequired) && ((u = e == null ? void 0 : e.signupAccess) == null ? void 0 : u.endDate) ? /* @__PURE__ */ n.createElement(v, {
    title: "Registration ends in:"
  }, /* @__PURE__ */ n.createElement(T, {
    dateString: (R = e == null ? void 0 : e.signupAccess) == null ? void 0 : R.endDate,
    message: "Registration is closed."
  })) : null;
}
function O({
  projectData: e,
  appId: t,
  userId: s
}) {
  var h, a, y;
  const [i, r] = w(!1), m = S(() => {
    var f, g;
    if (!((f = e == null ? void 0 : e.twitter) != null && f.enabled))
      return [];
    const { twitter: l } = e, c = [];
    if (l != null && l.isAccountCreatedRequired) {
      const u = /* @__PURE__ */ n.createElement(n.Fragment, null, "Have an account created before", " ", /* @__PURE__ */ n.createElement("strong", null, new Date((l == null ? void 0 : l.accountCreated) || "").toLocaleDateString()));
      c.push(u);
    }
    if (l != null && l.isFollowRequired) {
      const u = (g = l == null ? void 0 : l.follow) == null ? void 0 : g.split(","), R = /* @__PURE__ */ n.createElement(n.Fragment, null, "Follow these account(s):", /* @__PURE__ */ n.createElement("ul", null, u == null ? void 0 : u.map((E) => /* @__PURE__ */ n.createElement("li", {
        key: E
      }, /* @__PURE__ */ n.createElement("a", {
        href: `https://twitter.com/${E.trim()}`,
        target: "_blank",
        rel: "noreferrer"
      }, /* @__PURE__ */ n.createElement("strong", null, "@", E))))));
      c.push(R);
    }
    if (l != null && l.isMinFollowersRequired) {
      const u = /* @__PURE__ */ n.createElement(n.Fragment, null, "Have at least ", /* @__PURE__ */ n.createElement("b", null, l.minFollowers, " follower(s)"));
      c.push(u);
    }
    if (l != null && l.isRetweetRequired) {
      const u = /* @__PURE__ */ n.createElement(n.Fragment, null, "Retweet", " ", /* @__PURE__ */ n.createElement("a", {
        href: l.retweetUrl,
        target: "_blank",
        rel: "noreferrer"
      }, /* @__PURE__ */ n.createElement("strong", null, "this tweet")));
      c.push(u);
    }
    return c;
  }, [e]), d = async () => {
    if (!(!t || !s || !(e != null && e.id)))
      try {
        r(!0);
        const { url: l } = await k({
          provider: "twitter",
          appId: t,
          userId: s,
          projectId: e.id,
          returnUrl: window.location.href
        });
        window.location.assign(l);
      } catch (l) {
        console.error(l);
      } finally {
        r(!1);
      }
  };
  return (h = e == null ? void 0 : e.twitter) != null && h.enabled ? /* @__PURE__ */ n.createElement(q, {
    title: "Twitter",
    onClick: d,
    info: m,
    rightText: (y = (a = e == null ? void 0 : e.userInfo) == null ? void 0 : a.twitter) == null ? void 0 : y.username,
    buttonDisabled: !s,
    isLoading: i
  }) : null;
}
const $ = {
  ethereum: "ETH",
  solana: "SOL",
  polygon: "MATIC",
  avalanche: "AVAX",
  flow: "FLOW"
};
function x({
  projectData: e
}) {
  const t = S(() => {
    if (!(e != null && e.wallet))
      return [];
    const { wallet: s } = e, i = [];
    if (s != null && s.isBalanceRequired) {
      const r = /* @__PURE__ */ n.createElement(n.Fragment, null, "Have at least", /* @__PURE__ */ n.createElement("strong", null, " " + s.balance + " " + $[e.chain] + " "), "in your wallet");
      i.push(r);
    }
    if (s != null && s.isNftRequired) {
      const { nftCollection: r } = s, m = /* @__PURE__ */ n.createElement(n.Fragment, null, "Hold an NFT from", " ", /* @__PURE__ */ n.createElement("strong", null, /* @__PURE__ */ n.createElement("a", {
        href: r == null ? void 0 : r.url,
        target: "_blank",
        rel: "noreferrer"
      }, r == null ? void 0 : r.name)));
      i.push(m);
    }
    return i;
  }, [e]);
  return e != null && e.wallet ? /* @__PURE__ */ n.createElement(q, {
    title: "Wallet",
    onClick: () => console.log("wallet button clicked"),
    info: t,
    rightText: " "
  }) : null;
}
function _({
  appId: e,
  projectId: t,
  userId: s
}) {
  var g;
  const [i, r] = w(), [m, d] = w(!0), [h, a] = w(!1), [y, l] = w(!1), c = C(async () => {
    if (!t || !e) {
      console.error("HypeDayReact: projectId and appId props are required.");
      return;
    }
    d(!0), a(!1), P({ appId: e, projectId: t, userId: s }).then((u) => r(u)).catch((u) => {
      console.error("HypeDayReact: Error fetching project data", u), a(!0);
    }).finally(() => d(!1));
  }, [e, t, s]);
  A(() => {
    c();
  }, [c]);
  const f = () => {
    var u;
    (u = i == null ? void 0 : i.userInfo) != null && u.registered || (l(!0), setTimeout(() => l(!1), 3e3), console.log("register button clicked"));
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
  }, /* @__PURE__ */ n.createElement(M, {
    projectData: i
  }), /* @__PURE__ */ n.createElement(x, {
    projectData: i
  }), /* @__PURE__ */ n.createElement(O, {
    projectData: i,
    appId: e,
    userId: s
  }), /* @__PURE__ */ n.createElement(H, {
    projectData: i,
    appId: e,
    userId: s
  }), /* @__PURE__ */ n.createElement(U, {
    projectData: i
  }), /* @__PURE__ */ n.createElement("button", {
    className: "hypeday-register-button",
    onClick: f,
    disabled: y
  }, y && /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-spinner hypeday-btn-spinner"
  }), /* @__PURE__ */ n.createElement("span", {
    style: { visibility: y ? "hidden" : "initial" }
  }, (g = i == null ? void 0 : i.userInfo) != null && g.registered ? "Registered" : "Register")));
}
export {
  _ as default
};
