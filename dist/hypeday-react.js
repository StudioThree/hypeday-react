import n, { useState as R, useEffect as A } from "react";
const I = "_wrapper_l5wcw_1", N = "_reqSection_l5wcw_37", v = "_sectionInfo_l5wcw_49", k = "_responseInput_l5wcw_60", B = "_hypeButton_l5wcw_73", C = "_registerButton_l5wcw_100", g = {
  wrapper: I,
  reqSection: N,
  sectionInfo: v,
  responseInput: k,
  hypeButton: B,
  registerButton: C
};
function F({
  title: e,
  showButton: s = !0,
  buttonLabel: l,
  onClick: t,
  info: u
}) {
  return /* @__PURE__ */ n.createElement("section", {
    className: g.reqSection
  }, /* @__PURE__ */ n.createElement("header", null, /* @__PURE__ */ n.createElement("h3", null, e), s && /* @__PURE__ */ n.createElement("button", {
    className: g.hypeButton,
    onClick: t,
    disabled: !!l
  }, l || "Connect")), u.map((o, c) => /* @__PURE__ */ n.createElement("span", {
    key: c,
    className: g.sectionInfo
  }, o)));
}
function $({
  projectData: e
}) {
  var c, r, m;
  if (!((c = e == null ? void 0 : e.discord) != null && c.enabled) && !((r = e == null ? void 0 : e.discord2) != null && r.enabled))
    return null;
  const { discord: s, discord2: l, userInfo: t } = e, u = [];
  s != null && s.enabled && u.push(s), l != null && l.enabled && u.push(l);
  const o = [];
  return u.forEach((i) => {
    var d;
    if (i.isServerRequired) {
      const E = /* @__PURE__ */ n.createElement(n.Fragment, null, "Join the", " ", /* @__PURE__ */ n.createElement("a", {
        href: i == null ? void 0 : i.serverLink,
        target: "_blank",
        rel: "noreferrer"
      }, /* @__PURE__ */ n.createElement("strong", null, i == null ? void 0 : i.serverDisplayName)), " ", "server on Discord", i.isShouldJoinBeforeRequired ? /* @__PURE__ */ n.createElement(n.Fragment, null, " ", "before", " ", /* @__PURE__ */ n.createElement("strong", null, new Date((i == null ? void 0 : i.shouldJoinBefore) || "").toLocaleString())) : null);
      o.push(E);
    }
    if (i.isRoleRequired) {
      const E = /* @__PURE__ */ n.createElement(n.Fragment, null, 'and have the "', (d = i == null ? void 0 : i.roleDisplayNames) == null ? void 0 : d.join(", "), '" role(s)');
      o.push(E);
    }
  }), /* @__PURE__ */ n.createElement(F, {
    title: "Discord",
    onClick: () => alert("This is going to redirect user to Discord"),
    info: o,
    buttonLabel: (m = t == null ? void 0 : t.discord) == null ? void 0 : m.username
  });
}
function H({
  projectData: e
}) {
  var l;
  if (!((l = e == null ? void 0 : e.customfield) != null && l.enabled))
    return null;
  const { customfield: s } = e;
  return /* @__PURE__ */ n.createElement("section", {
    className: g.reqSection
  }, /* @__PURE__ */ n.createElement("header", null, /* @__PURE__ */ n.createElement("h3", null, "Open Response")), /* @__PURE__ */ n.createElement("span", {
    className: g.sectionInfo
  }, s.labels[0]), /* @__PURE__ */ n.createElement("input", {
    className: g.responseInput,
    type: "text",
    placeholder: s.labels[0]
  }));
}
function T({
  dateString: e,
  message: s
}) {
  const [l, t] = R(!1), [u, o] = R(0), [c, r] = R(0), [m, i] = R(0), [d, E] = R(0);
  return A(() => {
    const y = new Date(e).getTime(), q = setInterval(() => {
      const S = new Date().getTime(), h = y - S, f = Math.floor(h / (1e3 * 60 * 60 * 24)), a = Math.floor(
        h % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)
      ), w = Math.floor(h % (1e3 * 60 * 60) / (1e3 * 60)), b = Math.floor(h % (1e3 * 60) / 1e3);
      if (h <= 0) {
        clearInterval(q), t(!0), o(0), r(0), i(0), E(0);
        return;
      }
      o(f), r(a), i(w), E(b);
    }, 1e3);
    return () => clearInterval(q);
  }, [e]), !l && !u && !c && !m && !d ? /* @__PURE__ */ n.createElement("span", {
    style: { visibility: "hidden" }
  }, "Calculating..") : l ? /* @__PURE__ */ n.createElement(n.Fragment, null, s) : /* @__PURE__ */ n.createElement(n.Fragment, null, u > 0 && `${u} days, `, c > 0 && `${c} hours, `, m > 0 && `${m} minutes, `, d > 0 && `${d} seconds`);
}
function _({
  children: e,
  title: s
}) {
  return /* @__PURE__ */ n.createElement("section", {
    className: g.reqSection
  }, /* @__PURE__ */ n.createElement("header", null, /* @__PURE__ */ n.createElement("h3", null, s)), /* @__PURE__ */ n.createElement("span", {
    className: g.sectionInfo
  }, e));
}
function M({
  projectData: e
}) {
  var u, o, c, r, m, i, d, E, y, q, S, h;
  const [s, l] = R(), t = ((u = e == null ? void 0 : e.signupAccess) == null ? void 0 : u.isEndDateRequired) && ((o = e == null ? void 0 : e.signupAccess) == null ? void 0 : o.endDate) && new Date((c = e == null ? void 0 : e.signupAccess) == null ? void 0 : c.endDate).getTime() < Date.now();
  return A(() => {
    var f, a, w, b;
    (f = e == null ? void 0 : e.signupAccess) != null && f.isStartDateRequired && l(
      !!(((a = e == null ? void 0 : e.signupAccess) == null ? void 0 : a.isStartDateRequired) && ((w = e == null ? void 0 : e.signupAccess) == null ? void 0 : w.startDate) && new Date((b = e == null ? void 0 : e.signupAccess) == null ? void 0 : b.startDate).getTime() > Date.now())
    );
  }, [e]), A(() => {
    var f, a;
    if (s && ((f = e == null ? void 0 : e.signupAccess) == null ? void 0 : f.startDate)) {
      const w = setTimeout(
        () => l(!1),
        new Date((a = e == null ? void 0 : e.signupAccess) == null ? void 0 : a.startDate).getTime() - Date.now()
      );
      return () => clearTimeout(w);
    }
  }, [s, (r = e == null ? void 0 : e.signupAccess) == null ? void 0 : r.startDate]), t && ((m = e.signupAccess) == null ? void 0 : m.endDate) ? /* @__PURE__ */ n.createElement(_, {
    title: "Registration is closed"
  }, "Registration is closed on", " ", (d = new Date((i = e.signupAccess) == null ? void 0 : i.endDate)) == null ? void 0 : d.toUTCString(), ". Thank you for your interest.") : s && ((E = e == null ? void 0 : e.signupAccess) == null ? void 0 : E.startDate) ? /* @__PURE__ */ n.createElement(_, {
    title: "Registration starts in:"
  }, /* @__PURE__ */ n.createElement(T, {
    dateString: (y = e == null ? void 0 : e.signupAccess) == null ? void 0 : y.startDate,
    message: "Registration is open."
  })) : !t && !s && ((q = e == null ? void 0 : e.signupAccess) == null ? void 0 : q.isEndDateRequired) && ((S = e == null ? void 0 : e.signupAccess) == null ? void 0 : S.endDate) ? /* @__PURE__ */ n.createElement(_, {
    title: "Registration ends in:"
  }, /* @__PURE__ */ n.createElement("span", {
    className: g.sectionInfo
  }, /* @__PURE__ */ n.createElement(T, {
    dateString: (h = e == null ? void 0 : e.signupAccess) == null ? void 0 : h.endDate,
    message: "Registration is closed."
  }))) : null;
}
function L({
  projectData: e
}) {
  var u, o, c;
  if (!((u = e == null ? void 0 : e.twitter) != null && u.enabled))
    return null;
  const { twitter: s, userInfo: l } = e, t = [];
  if (s != null && s.isAccountCreatedRequired) {
    const r = /* @__PURE__ */ n.createElement(n.Fragment, null, "Have an account created before", " ", /* @__PURE__ */ n.createElement("strong", null, new Date((s == null ? void 0 : s.accountCreated) || "").toLocaleDateString()));
    t.push(r);
  }
  if (s != null && s.isFollowRequired) {
    const r = (o = s == null ? void 0 : s.follow) == null ? void 0 : o.split(","), m = /* @__PURE__ */ n.createElement(n.Fragment, null, "Follow these account(s):", /* @__PURE__ */ n.createElement("ul", null, r == null ? void 0 : r.map((i) => /* @__PURE__ */ n.createElement("li", {
      key: i
    }, /* @__PURE__ */ n.createElement("a", {
      href: `https://twitter.com/${i.trim()}`,
      target: "_blank",
      rel: "noreferrer"
    }, /* @__PURE__ */ n.createElement("strong", null, "@", i))))));
    t.push(m);
  }
  if (s != null && s.isMinFollowersRequired) {
    const r = /* @__PURE__ */ n.createElement(n.Fragment, null, "Have at least ", /* @__PURE__ */ n.createElement("b", null, s.minFollowers, " follower(s)"));
    t.push(r);
  }
  if (s != null && s.isRetweetRequired) {
    const r = /* @__PURE__ */ n.createElement(n.Fragment, null, "Retweet", " ", /* @__PURE__ */ n.createElement("a", {
      href: s.retweetUrl,
      target: "_blank",
      rel: "noreferrer"
    }, /* @__PURE__ */ n.createElement("strong", null, "this tweet")));
    t.push(r);
  }
  return /* @__PURE__ */ n.createElement(F, {
    title: "Twitter",
    onClick: () => alert("This is going to redirect user to Twitter"),
    info: t,
    buttonLabel: (c = l == null ? void 0 : l.twitter) == null ? void 0 : c.username
  });
}
const O = {
  ethereum: "ETH",
  solana: "SOL",
  polygon: "MATIC",
  avalanche: "AVAX",
  flow: "FLOW"
};
function P({
  projectData: e
}) {
  if (!(e != null && e.wallet))
    return null;
  const { wallet: s } = e, l = [];
  if (s != null && s.isBalanceRequired) {
    const t = /* @__PURE__ */ n.createElement(n.Fragment, null, "Have at least", /* @__PURE__ */ n.createElement("strong", null, " " + s.balance + " " + O[e.chain] + " "), "in your wallet");
    l.push(t);
  }
  if (s != null && s.isNftRequired) {
    const { nftCollection: t } = s, u = /* @__PURE__ */ n.createElement(n.Fragment, null, "Hold an NFT from", " ", /* @__PURE__ */ n.createElement("strong", null, /* @__PURE__ */ n.createElement("a", {
      href: t == null ? void 0 : t.url,
      target: "_blank",
      rel: "noreferrer"
    }, t == null ? void 0 : t.name)));
    l.push(u);
  }
  return /* @__PURE__ */ n.createElement(F, {
    title: "Wallet",
    onClick: () => console.log("wallet button clicked"),
    info: l,
    showButton: !1
  });
}
function W({
  appId: e,
  projectId: s,
  userId: l
}) {
  var c;
  const [t, u] = R();
  A(() => {
    !s || fetch(
      `https://apitest.hype.day/getProject?appId=${e}&projectid=${s}&userid=${l}`
    ).then((r) => r.json()).then((r) => u(r));
  }, []);
  const o = () => {
    var r;
    (r = t == null ? void 0 : t.userInfo) != null && r.registered || console.log("register button clicked");
  };
  return /* @__PURE__ */ n.createElement("div", {
    className: g.wrapper
  }, /* @__PURE__ */ n.createElement(M, {
    projectData: t
  }), /* @__PURE__ */ n.createElement(P, {
    projectData: t
  }), /* @__PURE__ */ n.createElement(L, {
    projectData: t
  }), /* @__PURE__ */ n.createElement($, {
    projectData: t
  }), /* @__PURE__ */ n.createElement(H, {
    projectData: t
  }), /* @__PURE__ */ n.createElement("button", {
    className: g.registerButton,
    onClick: o
  }, (c = t == null ? void 0 : t.userInfo) != null && c.registered ? "Registered! \u{1F389}" : "Click to Register"));
}
export {
  W as default
};
