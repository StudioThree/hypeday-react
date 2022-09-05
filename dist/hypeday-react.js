import e, { useState as f, useEffect as d } from "react";
const b = "_wrapper_l5wcw_1", R = "_reqSection_l5wcw_37", w = "_sectionInfo_l5wcw_49", q = "_responseInput_l5wcw_60", p = "_hypeButton_l5wcw_73", _ = "_registerButton_l5wcw_100", i = {
  wrapper: b,
  reqSection: R,
  sectionInfo: w,
  responseInput: q,
  hypeButton: p,
  registerButton: _
};
function E({
  title: t,
  showButton: n = !0,
  buttonLabel: r,
  onClick: l,
  info: s
}) {
  return /* @__PURE__ */ e.createElement("section", {
    className: i.reqSection
  }, /* @__PURE__ */ e.createElement("header", null, /* @__PURE__ */ e.createElement("h3", null, t), n && /* @__PURE__ */ e.createElement("button", {
    className: i.hypeButton,
    onClick: l,
    disabled: !!r
  }, r || "Connect")), s.map((u, a) => /* @__PURE__ */ e.createElement("span", {
    key: a,
    className: i.sectionInfo
  }, u)));
}
function y({
  projectData: t
}) {
  var a, o, m;
  if (!((a = t == null ? void 0 : t.discord) != null && a.enabled) && !((o = t == null ? void 0 : t.discord2) != null && o.enabled))
    return null;
  const { discord: n, discord2: r, userInfo: l } = t, s = [];
  n != null && n.enabled && s.push(n), r != null && r.enabled && s.push(r);
  const u = [];
  return s.forEach((c) => {
    var g;
    if (c.isServerRequired) {
      const h = /* @__PURE__ */ e.createElement(e.Fragment, null, "Join the", " ", /* @__PURE__ */ e.createElement("a", {
        href: c == null ? void 0 : c.serverLink,
        target: "_blank",
        rel: "noreferrer"
      }, /* @__PURE__ */ e.createElement("strong", null, c == null ? void 0 : c.serverDisplayName)), " ", "server on Discord", c.isShouldJoinBeforeRequired ? /* @__PURE__ */ e.createElement(e.Fragment, null, " ", "before", " ", /* @__PURE__ */ e.createElement("strong", null, new Date((c == null ? void 0 : c.shouldJoinBefore) || "").toLocaleString())) : null);
      u.push(h);
    }
    if (c.isRoleRequired) {
      const h = /* @__PURE__ */ e.createElement(e.Fragment, null, 'and have the "', (g = c == null ? void 0 : c.roleDisplayNames) == null ? void 0 : g.join(", "), '" role(s)');
      u.push(h);
    }
  }), /* @__PURE__ */ e.createElement(E, {
    title: "Discord",
    onClick: () => console.log("discord button clicked"),
    info: u,
    buttonLabel: (m = l == null ? void 0 : l.discord) == null ? void 0 : m.username
  });
}
function k({
  projectData: t
}) {
  var r;
  if (!((r = t == null ? void 0 : t.email) != null && r.isEmailRequired))
    return null;
  const { userInfo: n } = t;
  return /* @__PURE__ */ e.createElement(E, {
    title: "Email",
    onClick: () => console.log("email button clicked"),
    info: ["Have a verified email address"],
    buttonLabel: n == null ? void 0 : n.email
  });
}
function F({
  projectData: t
}) {
  var r;
  if (!((r = t == null ? void 0 : t.customfield) != null && r.enabled))
    return null;
  const { customfield: n } = t;
  return /* @__PURE__ */ e.createElement("section", {
    className: i.reqSection
  }, /* @__PURE__ */ e.createElement("header", null, /* @__PURE__ */ e.createElement("h3", null, "Open Response")), /* @__PURE__ */ e.createElement("span", {
    className: i.sectionInfo
  }, n.labels[0]), /* @__PURE__ */ e.createElement("input", {
    className: i.responseInput,
    type: "text",
    placeholder: n.labels[0]
  }));
}
function S({
  projectData: t
}) {
  var s, u, a;
  if (!((s = t == null ? void 0 : t.twitter) != null && s.enabled))
    return null;
  const { twitter: n, userInfo: r } = t, l = [];
  if (n != null && n.isAccountCreatedRequired) {
    const o = /* @__PURE__ */ e.createElement(e.Fragment, null, "Have an account created before", " ", /* @__PURE__ */ e.createElement("strong", null, new Date((n == null ? void 0 : n.accountCreated) || "").toLocaleDateString()));
    l.push(o);
  }
  if (n != null && n.isFollowRequired) {
    const o = (u = n == null ? void 0 : n.follow) == null ? void 0 : u.split(","), m = /* @__PURE__ */ e.createElement(e.Fragment, null, "Follow these account(s):", /* @__PURE__ */ e.createElement("ul", null, o == null ? void 0 : o.map((c) => /* @__PURE__ */ e.createElement("li", {
      key: c
    }, /* @__PURE__ */ e.createElement("a", {
      href: `https://twitter.com/${c.trim()}`,
      target: "_blank",
      rel: "noreferrer"
    }, /* @__PURE__ */ e.createElement("strong", null, "@", c))))));
    l.push(m);
  }
  if (n != null && n.isMinFollowersRequired) {
    const o = /* @__PURE__ */ e.createElement(e.Fragment, null, "Have at least ", /* @__PURE__ */ e.createElement("b", null, n.minFollowers, " follower(s)"));
    l.push(o);
  }
  if (n != null && n.isRetweetRequired) {
    const o = /* @__PURE__ */ e.createElement(e.Fragment, null, "Retweet", " ", /* @__PURE__ */ e.createElement("a", {
      href: n.retweetUrl,
      target: "_blank",
      rel: "noreferrer"
    }, /* @__PURE__ */ e.createElement("strong", null, "this tweet")));
    l.push(o);
  }
  return /* @__PURE__ */ e.createElement(E, {
    title: "Twitter",
    onClick: () => console.log("twitter button clicked"),
    info: l,
    buttonLabel: (a = r == null ? void 0 : r.twitter) == null ? void 0 : a.username
  });
}
const v = {
  ethereum: "ETH",
  solana: "SOL",
  polygon: "MATIC",
  avalanche: "AVAX",
  flow: "FLOW"
};
function B({
  projectData: t
}) {
  var l;
  if (!(t != null && t.wallet))
    return null;
  const { wallet: n } = t, r = [];
  if (n != null && n.isBalanceRequired) {
    const s = /* @__PURE__ */ e.createElement(e.Fragment, null, "Have at least", /* @__PURE__ */ e.createElement("strong", null, " " + n.balance + " " + v[t.chain] + " "), "in your wallet");
    r.push(s);
  }
  if (n != null && n.isNftRequired) {
    const { nftCollection: s } = n, u = /* @__PURE__ */ e.createElement(e.Fragment, null, "Hold a ", /* @__PURE__ */ e.createElement("strong", null, (l = s == null ? void 0 : s.chain) == null ? void 0 : l.toUpperCase()), " NFT from", " ", /* @__PURE__ */ e.createElement("strong", null, /* @__PURE__ */ e.createElement("a", {
      href: s == null ? void 0 : s.url,
      target: "_blank",
      rel: "noreferrer"
    }, s == null ? void 0 : s.name)));
    r.push(u);
  }
  return /* @__PURE__ */ e.createElement(E, {
    title: "Wallet",
    onClick: () => console.log("wallet button clicked"),
    info: r,
    showButton: !1
  });
}
function I({
  appId: t,
  projectId: n,
  userId: r
}) {
  var a;
  const [l, s] = f();
  d(() => {
    !n || fetch(
      `https://apitest.hype.day/getProject?appId=${t}&projectid=${n}&userid=${r}`
    ).then((o) => o.json()).then((o) => s(o));
  }, []);
  const u = () => {
    var o;
    (o = l == null ? void 0 : l.userInfo) != null && o.registered || console.log("register button clicked");
  };
  return /* @__PURE__ */ e.createElement("div", {
    className: i.wrapper
  }, /* @__PURE__ */ e.createElement(B, {
    projectData: l
  }), /* @__PURE__ */ e.createElement(S, {
    projectData: l
  }), /* @__PURE__ */ e.createElement(y, {
    projectData: l
  }), /* @__PURE__ */ e.createElement(k, {
    projectData: l
  }), /* @__PURE__ */ e.createElement(F, {
    projectData: l
  }), /* @__PURE__ */ e.createElement("button", {
    className: i.registerButton,
    onClick: u
  }, (a = l == null ? void 0 : l.userInfo) != null && a.registered ? "Registered! \u{1F389}" : "Click to Register"));
}
export {
  I as default
};
