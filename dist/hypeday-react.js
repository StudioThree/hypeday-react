import n, { useState as f, useEffect as A } from "react";
function T({
  title: e,
  rightText: t,
  buttonDisabled: i = !1,
  onClick: s,
  info: u,
  isLoading: l = !1
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
    onClick: s,
    disabled: l || i,
    title: i ? "Please login first" : void 0
  }, l && /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-spinner hypeday-btn-spinner"
  }), /* @__PURE__ */ n.createElement("span", {
    style: { visibility: l ? "hidden" : "initial" }
  }, "Connect"))), u.map((o, c) => /* @__PURE__ */ n.createElement("span", {
    key: c,
    className: "hypeday-info"
  }, o)));
}
function F({
  projectData: e,
  appId: t,
  userId: i
}) {
  var h, m, a;
  if (!((h = e == null ? void 0 : e.discord) != null && h.enabled) && !((m = e == null ? void 0 : e.discord2) != null && m.enabled))
    return null;
  const { discord: s, discord2: u, userInfo: l } = e, o = [];
  s != null && s.enabled && o.push(s), u != null && u.enabled && o.push(u);
  const c = [];
  o.forEach((r) => {
    var y;
    if (r.isServerRequired) {
      const g = /* @__PURE__ */ n.createElement(n.Fragment, null, "Join the", " ", /* @__PURE__ */ n.createElement("a", {
        href: r == null ? void 0 : r.serverLink,
        target: "_blank",
        rel: "noreferrer"
      }, /* @__PURE__ */ n.createElement("strong", null, r == null ? void 0 : r.serverDisplayName)), " ", "server on Discord", r.isShouldJoinBeforeRequired ? /* @__PURE__ */ n.createElement(n.Fragment, null, " ", "before", " ", /* @__PURE__ */ n.createElement("strong", null, new Date((r == null ? void 0 : r.shouldJoinBefore) || "").toLocaleString())) : null);
      c.push(g);
    }
    if (r.isRoleRequired) {
      const g = /* @__PURE__ */ n.createElement(n.Fragment, null, 'and have the "', (y = r == null ? void 0 : r.roleDisplayNames) == null ? void 0 : y.join(", "), '" role(s)');
      c.push(g);
    }
  });
  const d = () => {
    console.log(t), alert("This is going to redirect user to Discord");
  };
  return /* @__PURE__ */ n.createElement(T, {
    title: "Discord",
    onClick: d,
    info: c,
    rightText: (a = l == null ? void 0 : l.discord) == null ? void 0 : a.username,
    buttonDisabled: !i
  });
}
function k({
  projectData: e
}) {
  var i;
  if (!((i = e == null ? void 0 : e.customfield) != null && i.enabled))
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
function q({
  dateString: e,
  message: t
}) {
  const [i, s] = f(!1), [u, l] = f(0), [o, c] = f(0), [d, h] = f(0), [m, a] = f(0);
  return A(() => {
    const r = new Date(e).getTime(), y = setInterval(() => {
      const g = new Date().getTime(), E = r - g, R = Math.floor(E / (1e3 * 60 * 60 * 24)), b = Math.floor(
        E % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)
      ), w = Math.floor(E % (1e3 * 60 * 60) / (1e3 * 60)), N = Math.floor(E % (1e3 * 60) / 1e3);
      if (E <= 0) {
        clearInterval(y), s(!0), l(0), c(0), h(0), a(0);
        return;
      }
      l(R), c(b), h(w), a(N);
    }, 1e3);
    return () => clearInterval(y);
  }, [e]), !i && !u && !o && !d && !m ? /* @__PURE__ */ n.createElement("span", {
    style: { visibility: "hidden" }
  }, "Calculating..") : i ? /* @__PURE__ */ n.createElement(n.Fragment, null, t) : /* @__PURE__ */ n.createElement(n.Fragment, null, u > 0 && `${u} days, `, o > 0 && `${o} hours, `, d > 0 && `${d} minutes, `, m > 0 && `${m} seconds`);
}
function S({
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
function C({
  projectData: e
}) {
  var u, l, o, c, d, h, m, a, r, y, g, E;
  const [t, i] = f(), s = ((u = e == null ? void 0 : e.signupAccess) == null ? void 0 : u.isEndDateRequired) && ((l = e == null ? void 0 : e.signupAccess) == null ? void 0 : l.endDate) && new Date((o = e == null ? void 0 : e.signupAccess) == null ? void 0 : o.endDate).getTime() < Date.now();
  return A(() => {
    var R, b, w, N;
    (R = e == null ? void 0 : e.signupAccess) != null && R.isStartDateRequired && i(
      !!(((b = e == null ? void 0 : e.signupAccess) == null ? void 0 : b.isStartDateRequired) && ((w = e == null ? void 0 : e.signupAccess) == null ? void 0 : w.startDate) && new Date((N = e == null ? void 0 : e.signupAccess) == null ? void 0 : N.startDate).getTime() > Date.now())
    );
  }, [e]), A(() => {
    var R, b;
    if (t && ((R = e == null ? void 0 : e.signupAccess) == null ? void 0 : R.startDate)) {
      const w = setTimeout(
        () => i(!1),
        new Date((b = e == null ? void 0 : e.signupAccess) == null ? void 0 : b.startDate).getTime() - Date.now()
      );
      return () => clearTimeout(w);
    }
  }, [t, (c = e == null ? void 0 : e.signupAccess) == null ? void 0 : c.startDate]), s && ((d = e.signupAccess) == null ? void 0 : d.endDate) ? /* @__PURE__ */ n.createElement(S, {
    title: "Registration is closed"
  }, "Registration is closed on", " ", (m = new Date((h = e.signupAccess) == null ? void 0 : h.endDate)) == null ? void 0 : m.toUTCString(), ". Thank you for your interest.") : t && ((a = e == null ? void 0 : e.signupAccess) == null ? void 0 : a.startDate) ? /* @__PURE__ */ n.createElement(S, {
    title: "Registration starts in:"
  }, /* @__PURE__ */ n.createElement(q, {
    dateString: (r = e == null ? void 0 : e.signupAccess) == null ? void 0 : r.startDate,
    message: "Registration is open."
  })) : !s && !t && ((y = e == null ? void 0 : e.signupAccess) == null ? void 0 : y.isEndDateRequired) && ((g = e == null ? void 0 : e.signupAccess) == null ? void 0 : g.endDate) ? /* @__PURE__ */ n.createElement(S, {
    title: "Registration ends in:"
  }, /* @__PURE__ */ n.createElement(q, {
    dateString: (E = e == null ? void 0 : e.signupAccess) == null ? void 0 : E.endDate,
    message: "Registration is closed."
  })) : null;
}
const L = "https://apitest.hype.day";
function v(e) {
  return e.text().then((t) => {
    const i = t && JSON.parse(t);
    if (!e.ok) {
      const s = i && i.message || e.statusText;
      return Promise.reject(s);
    }
    return i;
  });
}
function P({
  appId: e,
  projectId: t,
  userId: i
}) {
  const s = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };
  return fetch(
    `${L}/getProject?` + new URLSearchParams({
      appid: e,
      userid: i || "",
      projectid: t
    }),
    s
  ).then(v);
}
function H({
  appId: e,
  projectId: t,
  userId: i,
  returnUrl: s
}) {
  const u = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };
  return fetch(
    "https://us-central1-hype-testing.cloudfunctions.net/tGetUrlForApp?" + new URLSearchParams({
      appid: e,
      userid: i,
      projectid: t,
      returnurl: s
    }),
    u
  ).then(v);
}
function U({
  projectData: e,
  appId: t,
  userId: i
}) {
  var h, m, a;
  const [s, u] = f(!1);
  if (!((h = e == null ? void 0 : e.twitter) != null && h.enabled))
    return null;
  const { twitter: l, userInfo: o } = e, c = [];
  if (l != null && l.isAccountCreatedRequired) {
    const r = /* @__PURE__ */ n.createElement(n.Fragment, null, "Have an account created before", " ", /* @__PURE__ */ n.createElement("strong", null, new Date((l == null ? void 0 : l.accountCreated) || "").toLocaleDateString()));
    c.push(r);
  }
  if (l != null && l.isFollowRequired) {
    const r = (m = l == null ? void 0 : l.follow) == null ? void 0 : m.split(","), y = /* @__PURE__ */ n.createElement(n.Fragment, null, "Follow these account(s):", /* @__PURE__ */ n.createElement("ul", null, r == null ? void 0 : r.map((g) => /* @__PURE__ */ n.createElement("li", {
      key: g
    }, /* @__PURE__ */ n.createElement("a", {
      href: `https://twitter.com/${g.trim()}`,
      target: "_blank",
      rel: "noreferrer"
    }, /* @__PURE__ */ n.createElement("strong", null, "@", g))))));
    c.push(y);
  }
  if (l != null && l.isMinFollowersRequired) {
    const r = /* @__PURE__ */ n.createElement(n.Fragment, null, "Have at least ", /* @__PURE__ */ n.createElement("b", null, l.minFollowers, " follower(s)"));
    c.push(r);
  }
  if (l != null && l.isRetweetRequired) {
    const r = /* @__PURE__ */ n.createElement(n.Fragment, null, "Retweet", " ", /* @__PURE__ */ n.createElement("a", {
      href: l.retweetUrl,
      target: "_blank",
      rel: "noreferrer"
    }, /* @__PURE__ */ n.createElement("strong", null, "this tweet")));
    c.push(r);
  }
  const d = async () => {
    if (!(!t || !i || !(e != null && e.id)))
      try {
        u(!0);
        const { url: r } = await H({
          appId: t,
          userId: i,
          projectId: e.id,
          returnUrl: window.location.href
        });
        window.location.assign(r);
      } catch (r) {
        console.error(r);
      } finally {
        u(!1);
      }
  };
  return /* @__PURE__ */ n.createElement(T, {
    title: "Twitter",
    onClick: d,
    info: c,
    rightText: (a = o == null ? void 0 : o.twitter) == null ? void 0 : a.username,
    buttonDisabled: !i,
    isLoading: s
  });
}
const M = {
  ethereum: "ETH",
  solana: "SOL",
  polygon: "MATIC",
  avalanche: "AVAX",
  flow: "FLOW"
};
function O({
  projectData: e
}) {
  if (!(e != null && e.wallet))
    return null;
  const { wallet: t } = e, i = [];
  if (t != null && t.isBalanceRequired) {
    const s = /* @__PURE__ */ n.createElement(n.Fragment, null, "Have at least", /* @__PURE__ */ n.createElement("strong", null, " " + t.balance + " " + M[e.chain] + " "), "in your wallet");
    i.push(s);
  }
  if (t != null && t.isNftRequired) {
    const { nftCollection: s } = t, u = /* @__PURE__ */ n.createElement(n.Fragment, null, "Hold an NFT from", " ", /* @__PURE__ */ n.createElement("strong", null, /* @__PURE__ */ n.createElement("a", {
      href: s == null ? void 0 : s.url,
      target: "_blank",
      rel: "noreferrer"
    }, s == null ? void 0 : s.name)));
    i.push(u);
  }
  return /* @__PURE__ */ n.createElement(T, {
    title: "Wallet",
    onClick: () => console.log("wallet button clicked"),
    info: i,
    rightText: " "
  });
}
function $({
  appId: e,
  projectId: t,
  userId: i
}) {
  var m;
  const [s, u] = f(), [l, o] = f(!0), [c, d] = f(!1);
  A(() => {
    if (!t || !e) {
      console.error("HypeDayReact: projectId and appId props are required.");
      return;
    }
    P({ appId: e, projectId: t, userId: i }).then((a) => u(a)).finally(() => o(!1));
  }, [e, t, i]);
  const h = () => {
    var a;
    (a = s == null ? void 0 : s.userInfo) != null && a.registered || (d(!0), setTimeout(() => d(!1), 3e3), console.log("register button clicked"));
  };
  return l ? /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-wrapper",
    style: { display: "flex", justifyContent: "center" }
  }, /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-spinner"
  })) : /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-wrapper"
  }, /* @__PURE__ */ n.createElement(C, {
    projectData: s
  }), /* @__PURE__ */ n.createElement(O, {
    projectData: s
  }), /* @__PURE__ */ n.createElement(U, {
    projectData: s,
    appId: e,
    userId: i
  }), /* @__PURE__ */ n.createElement(F, {
    projectData: s,
    appId: e,
    userId: i
  }), /* @__PURE__ */ n.createElement(k, {
    projectData: s
  }), /* @__PURE__ */ n.createElement("button", {
    className: "hypeday-register-button",
    onClick: h,
    disabled: c
  }, c && /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-spinner hypeday-btn-spinner"
  }), /* @__PURE__ */ n.createElement("span", {
    style: { visibility: c ? "hidden" : "initial" }
  }, (m = s == null ? void 0 : s.userInfo) != null && m.registered ? "Registered" : "Register")));
}
export {
  $ as default
};
