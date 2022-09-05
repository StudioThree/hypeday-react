import e, { useState as g, useEffect as d } from "react";
const b = "_wrapper_1fxo5_1", R = "_reqSection_1fxo5_37", q = "_sectionInfo_1fxo5_49", p = "_responseInput_1fxo5_60", _ = "_hypeButton_1fxo5_72", y = "_registerButton_1fxo5_99", i = {
  wrapper: b,
  reqSection: R,
  sectionInfo: q,
  responseInput: p,
  hypeButton: _,
  registerButton: y
};
function E({
  title: t,
  showButton: n = !0,
  buttonLabel: l,
  onClick: r,
  info: s
}) {
  return /* @__PURE__ */ e.createElement("section", {
    className: i.reqSection
  }, /* @__PURE__ */ e.createElement("header", null, /* @__PURE__ */ e.createElement("h3", null, t), n && /* @__PURE__ */ e.createElement("button", {
    className: i.hypeButton,
    onClick: r,
    disabled: !!l
  }, l || "Connect")), s.map((u, a) => /* @__PURE__ */ e.createElement("span", {
    key: a,
    className: i.sectionInfo
  }, u)));
}
function k({
  projectData: t
}) {
  var a, o, m;
  if (!((a = t == null ? void 0 : t.discord) != null && a.enabled) && !((o = t == null ? void 0 : t.discord2) != null && o.enabled))
    return null;
  const { discord: n, discord2: l, userInfo: r } = t, s = [];
  n != null && n.enabled && s.push(n), l != null && l.enabled && s.push(l);
  const u = [];
  return s.forEach((c) => {
    var f;
    if (c.isServerRequired) {
      const h = /* @__PURE__ */ e.createElement(e.Fragment, null, "Join the", " ", /* @__PURE__ */ e.createElement("a", {
        href: c == null ? void 0 : c.serverLink,
        target: "_blank",
        rel: "noreferrer"
      }, /* @__PURE__ */ e.createElement("strong", null, c == null ? void 0 : c.serverDisplayName)), " ", "server on Discord", c.isShouldJoinBeforeRequired ? /* @__PURE__ */ e.createElement(e.Fragment, null, " ", "before", " ", /* @__PURE__ */ e.createElement("strong", null, new Date((c == null ? void 0 : c.shouldJoinBefore) || "").toLocaleString())) : null);
      u.push(h);
    }
    if (c.isRoleRequired) {
      const h = /* @__PURE__ */ e.createElement(e.Fragment, null, 'and have the "', (f = c == null ? void 0 : c.roleDisplayNames) == null ? void 0 : f.join(", "), '" role(s)');
      u.push(h);
    }
  }), /* @__PURE__ */ e.createElement(E, {
    title: "Discord",
    onClick: () => console.log("discord button clicked"),
    info: u,
    buttonLabel: (m = r == null ? void 0 : r.discord) == null ? void 0 : m.username
  });
}
function F({
  projectData: t
}) {
  var l;
  if (!((l = t == null ? void 0 : t.email) != null && l.isEmailRequired))
    return null;
  const { userInfo: n } = t;
  return /* @__PURE__ */ e.createElement(E, {
    title: "Email",
    onClick: () => console.log("email button clicked"),
    info: ["Have a verified email address"],
    buttonLabel: n == null ? void 0 : n.email
  });
}
function S({
  projectData: t
}) {
  var l;
  if (!((l = t == null ? void 0 : t.customfield) != null && l.enabled))
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
function w({
  projectData: t
}) {
  var s, u, a;
  if (!((s = t == null ? void 0 : t.twitter) != null && s.enabled))
    return null;
  const { twitter: n, userInfo: l } = t, r = [];
  if (n != null && n.isAccountCreatedRequired) {
    const o = /* @__PURE__ */ e.createElement(e.Fragment, null, "Have an account created before", " ", /* @__PURE__ */ e.createElement("strong", null, new Date((n == null ? void 0 : n.accountCreated) || "").toLocaleDateString()));
    r.push(o);
  }
  if (n != null && n.isFollowRequired) {
    const o = (u = n == null ? void 0 : n.follow) == null ? void 0 : u.split(","), m = /* @__PURE__ */ e.createElement(e.Fragment, null, "Follow these account(s):", /* @__PURE__ */ e.createElement("ul", null, o == null ? void 0 : o.map((c) => /* @__PURE__ */ e.createElement("li", {
      key: c
    }, /* @__PURE__ */ e.createElement("a", {
      href: `https://twitter.com/${c.trim()}`,
      target: "_blank",
      rel: "noreferrer"
    }, /* @__PURE__ */ e.createElement("strong", null, "@", c))))));
    r.push(m);
  }
  if (n != null && n.isMinFollowersRequired) {
    const o = /* @__PURE__ */ e.createElement(e.Fragment, null, "Have at least ", /* @__PURE__ */ e.createElement("b", null, n.minFollowers, " follower(s)"));
    r.push(o);
  }
  if (n != null && n.isRetweetRequired) {
    const o = /* @__PURE__ */ e.createElement(e.Fragment, null, "Retweet", " ", /* @__PURE__ */ e.createElement("a", {
      href: n.retweetUrl,
      target: "_blank",
      rel: "noreferrer"
    }, /* @__PURE__ */ e.createElement("strong", null, "this tweet")));
    r.push(o);
  }
  return /* @__PURE__ */ e.createElement(E, {
    title: "Twitter",
    onClick: () => console.log("twitter button clicked"),
    info: r,
    buttonLabel: (a = l == null ? void 0 : l.twitter) == null ? void 0 : a.username
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
  var r;
  if (!(t != null && t.wallet))
    return null;
  const { wallet: n } = t, l = [];
  if (n != null && n.isBalanceRequired) {
    const s = /* @__PURE__ */ e.createElement(e.Fragment, null, "Have at least", /* @__PURE__ */ e.createElement("strong", null, " " + n.balance + " " + v[t.chain] + " "), "in your wallet");
    l.push(s);
  }
  if (n != null && n.isNftRequired) {
    const { nftCollection: s } = n, u = /* @__PURE__ */ e.createElement(e.Fragment, null, "Hold a ", /* @__PURE__ */ e.createElement("strong", null, (r = s == null ? void 0 : s.chain) == null ? void 0 : r.toUpperCase()), " NFT from", " ", /* @__PURE__ */ e.createElement("strong", null, /* @__PURE__ */ e.createElement("a", {
      href: s == null ? void 0 : s.url,
      target: "_blank",
      rel: "noreferrer"
    }, s == null ? void 0 : s.name)));
    l.push(u);
  }
  return /* @__PURE__ */ e.createElement(E, {
    title: "Wallet",
    onClick: () => console.log("wallet button clicked"),
    info: l,
    showButton: !1
  });
}
function I({
  appId: t,
  projectId: n,
  userId: l
}) {
  var a;
  const [r, s] = g();
  d(() => {
    !n || fetch(
      `https://apitest.hype.day/getProject?appId=${t}&projectid=${n}&userid=${l}`
    ).then((o) => o.json()).then((o) => s(o));
  }, []);
  const u = () => {
    var o;
    (o = r == null ? void 0 : r.userInfo) != null && o.registered || console.log("register button clicked");
  };
  return /* @__PURE__ */ e.createElement("div", {
    className: i.wrapper
  }, /* @__PURE__ */ e.createElement(B, {
    projectData: r
  }), /* @__PURE__ */ e.createElement(w, {
    projectData: r
  }), /* @__PURE__ */ e.createElement(k, {
    projectData: r
  }), /* @__PURE__ */ e.createElement(F, {
    projectData: r
  }), /* @__PURE__ */ e.createElement(S, {
    projectData: r
  }), /* @__PURE__ */ e.createElement("button", {
    className: i.registerButton,
    onClick: u
  }, (a = r == null ? void 0 : r.userInfo) != null && a.registered ? "Registered! \u{1F389}" : "Click to Register"));
}
export {
  I as default
};
