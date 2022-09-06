import n, { useState as w, useEffect as S } from "react";
function T({
  title: e,
  rightText: t,
  buttonDisabled: l = !1,
  onClick: s,
  info: r
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
    disabled: l,
    title: l ? "Please login first" : void 0
  }, "Connect")), r.map((c, o) => /* @__PURE__ */ n.createElement("span", {
    key: o,
    className: "hypeday-info"
  }, c)));
}
function v({
  projectData: e,
  appId: t,
  userId: l
}) {
  var d, u, h;
  if (!((d = e == null ? void 0 : e.discord) != null && d.enabled) && !((u = e == null ? void 0 : e.discord2) != null && u.enabled))
    return null;
  const { discord: s, discord2: r, userInfo: c } = e, o = [];
  s != null && s.enabled && o.push(s), r != null && r.enabled && o.push(r);
  const m = [];
  o.forEach((i) => {
    var g;
    if (i.isServerRequired) {
      const E = /* @__PURE__ */ n.createElement(n.Fragment, null, "Join the", " ", /* @__PURE__ */ n.createElement("a", {
        href: i == null ? void 0 : i.serverLink,
        target: "_blank",
        rel: "noreferrer"
      }, /* @__PURE__ */ n.createElement("strong", null, i == null ? void 0 : i.serverDisplayName)), " ", "server on Discord", i.isShouldJoinBeforeRequired ? /* @__PURE__ */ n.createElement(n.Fragment, null, " ", "before", " ", /* @__PURE__ */ n.createElement("strong", null, new Date((i == null ? void 0 : i.shouldJoinBefore) || "").toLocaleString())) : null);
      m.push(E);
    }
    if (i.isRoleRequired) {
      const E = /* @__PURE__ */ n.createElement(n.Fragment, null, 'and have the "', (g = i == null ? void 0 : i.roleDisplayNames) == null ? void 0 : g.join(", "), '" role(s)');
      m.push(E);
    }
  });
  const a = () => {
    console.log(t), alert("This is going to redirect user to Discord");
  };
  return /* @__PURE__ */ n.createElement(T, {
    title: "Discord",
    onClick: a,
    info: m,
    rightText: (h = c == null ? void 0 : c.discord) == null ? void 0 : h.username,
    buttonDisabled: !l
  });
}
function k({
  projectData: e
}) {
  var l;
  if (!((l = e == null ? void 0 : e.customfield) != null && l.enabled))
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
  const [l, s] = w(!1), [r, c] = w(0), [o, m] = w(0), [a, d] = w(0), [u, h] = w(0);
  return S(() => {
    const i = new Date(e).getTime(), g = setInterval(() => {
      const E = new Date().getTime(), y = i - E, f = Math.floor(y / (1e3 * 60 * 60 * 24)), R = Math.floor(
        y % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)
      ), b = Math.floor(y % (1e3 * 60 * 60) / (1e3 * 60)), A = Math.floor(y % (1e3 * 60) / 1e3);
      if (y <= 0) {
        clearInterval(g), s(!0), c(0), m(0), d(0), h(0);
        return;
      }
      c(f), m(R), d(b), h(A);
    }, 1e3);
    return () => clearInterval(g);
  }, [e]), !l && !r && !o && !a && !u ? /* @__PURE__ */ n.createElement("span", {
    style: { visibility: "hidden" }
  }, "Calculating..") : l ? /* @__PURE__ */ n.createElement(n.Fragment, null, t) : /* @__PURE__ */ n.createElement(n.Fragment, null, r > 0 && `${r} days, `, o > 0 && `${o} hours, `, a > 0 && `${a} minutes, `, u > 0 && `${u} seconds`);
}
function N({
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
  var r, c, o, m, a, d, u, h, i, g, E, y;
  const [t, l] = w(), s = ((r = e == null ? void 0 : e.signupAccess) == null ? void 0 : r.isEndDateRequired) && ((c = e == null ? void 0 : e.signupAccess) == null ? void 0 : c.endDate) && new Date((o = e == null ? void 0 : e.signupAccess) == null ? void 0 : o.endDate).getTime() < Date.now();
  return S(() => {
    var f, R, b, A;
    (f = e == null ? void 0 : e.signupAccess) != null && f.isStartDateRequired && l(
      !!(((R = e == null ? void 0 : e.signupAccess) == null ? void 0 : R.isStartDateRequired) && ((b = e == null ? void 0 : e.signupAccess) == null ? void 0 : b.startDate) && new Date((A = e == null ? void 0 : e.signupAccess) == null ? void 0 : A.startDate).getTime() > Date.now())
    );
  }, [e]), S(() => {
    var f, R;
    if (t && ((f = e == null ? void 0 : e.signupAccess) == null ? void 0 : f.startDate)) {
      const b = setTimeout(
        () => l(!1),
        new Date((R = e == null ? void 0 : e.signupAccess) == null ? void 0 : R.startDate).getTime() - Date.now()
      );
      return () => clearTimeout(b);
    }
  }, [t, (m = e == null ? void 0 : e.signupAccess) == null ? void 0 : m.startDate]), s && ((a = e.signupAccess) == null ? void 0 : a.endDate) ? /* @__PURE__ */ n.createElement(N, {
    title: "Registration is closed"
  }, "Registration is closed on", " ", (u = new Date((d = e.signupAccess) == null ? void 0 : d.endDate)) == null ? void 0 : u.toUTCString(), ". Thank you for your interest.") : t && ((h = e == null ? void 0 : e.signupAccess) == null ? void 0 : h.startDate) ? /* @__PURE__ */ n.createElement(N, {
    title: "Registration starts in:"
  }, /* @__PURE__ */ n.createElement(q, {
    dateString: (i = e == null ? void 0 : e.signupAccess) == null ? void 0 : i.startDate,
    message: "Registration is open."
  })) : !s && !t && ((g = e == null ? void 0 : e.signupAccess) == null ? void 0 : g.isEndDateRequired) && ((E = e == null ? void 0 : e.signupAccess) == null ? void 0 : E.endDate) ? /* @__PURE__ */ n.createElement(N, {
    title: "Registration ends in:"
  }, /* @__PURE__ */ n.createElement(q, {
    dateString: (y = e == null ? void 0 : e.signupAccess) == null ? void 0 : y.endDate,
    message: "Registration is closed."
  })) : null;
}
const P = "https://apitest.hype.day";
function F(e) {
  return e.text().then((t) => {
    const l = t && JSON.parse(t);
    if (!e.ok) {
      const s = l && l.message || e.statusText;
      return Promise.reject(s);
    }
    return l;
  });
}
function U({
  appId: e,
  projectId: t,
  userId: l
}) {
  const s = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };
  return fetch(
    `${P}/getProject?` + new URLSearchParams({
      appid: e,
      userid: l || "",
      projectid: t
    }),
    s
  ).then(F);
}
function H({
  appId: e,
  projectId: t,
  userId: l,
  returnUrl: s
}) {
  const r = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };
  return fetch(
    "https://us-central1-hype-testing.cloudfunctions.net/tGetUrlForApp?" + new URLSearchParams({
      appid: e,
      userid: l,
      projectid: t,
      returnurl: s
    }),
    r
  ).then(F);
}
function L({
  projectData: e,
  appId: t,
  userId: l
}) {
  var m, a, d;
  if (!((m = e == null ? void 0 : e.twitter) != null && m.enabled))
    return null;
  const { twitter: s, userInfo: r } = e, c = [];
  if (s != null && s.isAccountCreatedRequired) {
    const u = /* @__PURE__ */ n.createElement(n.Fragment, null, "Have an account created before", " ", /* @__PURE__ */ n.createElement("strong", null, new Date((s == null ? void 0 : s.accountCreated) || "").toLocaleDateString()));
    c.push(u);
  }
  if (s != null && s.isFollowRequired) {
    const u = (a = s == null ? void 0 : s.follow) == null ? void 0 : a.split(","), h = /* @__PURE__ */ n.createElement(n.Fragment, null, "Follow these account(s):", /* @__PURE__ */ n.createElement("ul", null, u == null ? void 0 : u.map((i) => /* @__PURE__ */ n.createElement("li", {
      key: i
    }, /* @__PURE__ */ n.createElement("a", {
      href: `https://twitter.com/${i.trim()}`,
      target: "_blank",
      rel: "noreferrer"
    }, /* @__PURE__ */ n.createElement("strong", null, "@", i))))));
    c.push(h);
  }
  if (s != null && s.isMinFollowersRequired) {
    const u = /* @__PURE__ */ n.createElement(n.Fragment, null, "Have at least ", /* @__PURE__ */ n.createElement("b", null, s.minFollowers, " follower(s)"));
    c.push(u);
  }
  if (s != null && s.isRetweetRequired) {
    const u = /* @__PURE__ */ n.createElement(n.Fragment, null, "Retweet", " ", /* @__PURE__ */ n.createElement("a", {
      href: s.retweetUrl,
      target: "_blank",
      rel: "noreferrer"
    }, /* @__PURE__ */ n.createElement("strong", null, "this tweet")));
    c.push(u);
  }
  const o = async () => {
    if (!t || !l || !(e != null && e.id))
      return;
    const { url: u } = await H({
      appId: t,
      userId: l,
      projectId: e.id,
      returnUrl: window.location.href
    });
    window.location.assign(u);
  };
  return /* @__PURE__ */ n.createElement(T, {
    title: "Twitter",
    onClick: o,
    info: c,
    rightText: (d = r == null ? void 0 : r.twitter) == null ? void 0 : d.username,
    buttonDisabled: !l
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
  const { wallet: t } = e, l = [];
  if (t != null && t.isBalanceRequired) {
    const s = /* @__PURE__ */ n.createElement(n.Fragment, null, "Have at least", /* @__PURE__ */ n.createElement("strong", null, " " + t.balance + " " + M[e.chain] + " "), "in your wallet");
    l.push(s);
  }
  if (t != null && t.isNftRequired) {
    const { nftCollection: s } = t, r = /* @__PURE__ */ n.createElement(n.Fragment, null, "Hold an NFT from", " ", /* @__PURE__ */ n.createElement("strong", null, /* @__PURE__ */ n.createElement("a", {
      href: s == null ? void 0 : s.url,
      target: "_blank",
      rel: "noreferrer"
    }, s == null ? void 0 : s.name)));
    l.push(r);
  }
  return /* @__PURE__ */ n.createElement(T, {
    title: "Wallet",
    onClick: () => console.log("wallet button clicked"),
    info: l,
    rightText: " "
  });
}
function x({
  appId: e,
  projectId: t,
  userId: l
}) {
  var o;
  const [s, r] = w();
  S(() => {
    !t || U({ appId: e, projectId: t, userId: l }).then(
      (m) => r(m)
    );
  }, [e, t, l]);
  const c = () => {
    var m;
    (m = s == null ? void 0 : s.userInfo) != null && m.registered || console.log("register button clicked");
  };
  return /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-wrapper"
  }, /* @__PURE__ */ n.createElement(C, {
    projectData: s
  }), /* @__PURE__ */ n.createElement(O, {
    projectData: s
  }), /* @__PURE__ */ n.createElement(L, {
    projectData: s,
    appId: e,
    userId: l
  }), /* @__PURE__ */ n.createElement(v, {
    projectData: s,
    appId: e,
    userId: l
  }), /* @__PURE__ */ n.createElement(k, {
    projectData: s
  }), /* @__PURE__ */ n.createElement("button", {
    className: "hypeday-register-button",
    onClick: c
  }, (o = s == null ? void 0 : s.userInfo) != null && o.registered ? "Registered! \u{1F389}" : "Click to Register"));
}
export {
  x as default
};
