import e, { useState as f, useEffect as d } from "react";
const b = "_wrapper_l5wcw_1", R = "_reqSection_l5wcw_37", w = "_sectionInfo_l5wcw_49", q = "_responseInput_l5wcw_60", _ = "_hypeButton_l5wcw_73", p = "_registerButton_l5wcw_100", a = {
  wrapper: b,
  reqSection: R,
  sectionInfo: w,
  responseInput: q,
  hypeButton: _,
  registerButton: p
};
function E({
  title: t,
  showButton: n = !0,
  buttonLabel: r,
  onClick: l,
  info: c
}) {
  return /* @__PURE__ */ e.createElement("section", {
    className: a.reqSection
  }, /* @__PURE__ */ e.createElement("header", null, /* @__PURE__ */ e.createElement("h3", null, t), n && /* @__PURE__ */ e.createElement("button", {
    className: a.hypeButton,
    onClick: l,
    disabled: !!r
  }, r || "Connect")), c.map((u, i) => /* @__PURE__ */ e.createElement("span", {
    key: i,
    className: a.sectionInfo
  }, u)));
}
function y({
  projectData: t
}) {
  var i, s, m;
  if (!((i = t == null ? void 0 : t.discord) != null && i.enabled) && !((s = t == null ? void 0 : t.discord2) != null && s.enabled))
    return null;
  const { discord: n, discord2: r, userInfo: l } = t, c = [];
  n != null && n.enabled && c.push(n), r != null && r.enabled && c.push(r);
  const u = [];
  return c.forEach((o) => {
    var g;
    if (o.isServerRequired) {
      const h = /* @__PURE__ */ e.createElement(e.Fragment, null, "Join the", " ", /* @__PURE__ */ e.createElement("a", {
        href: o == null ? void 0 : o.serverLink,
        target: "_blank",
        rel: "noreferrer"
      }, /* @__PURE__ */ e.createElement("strong", null, o == null ? void 0 : o.serverDisplayName)), " ", "server on Discord", o.isShouldJoinBeforeRequired ? /* @__PURE__ */ e.createElement(e.Fragment, null, " ", "before", " ", /* @__PURE__ */ e.createElement("strong", null, new Date((o == null ? void 0 : o.shouldJoinBefore) || "").toLocaleString())) : null);
      u.push(h);
    }
    if (o.isRoleRequired) {
      const h = /* @__PURE__ */ e.createElement(e.Fragment, null, 'and have the "', (g = o == null ? void 0 : o.roleDisplayNames) == null ? void 0 : g.join(", "), '" role(s)');
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
    className: a.reqSection
  }, /* @__PURE__ */ e.createElement("header", null, /* @__PURE__ */ e.createElement("h3", null, "Open Response")), /* @__PURE__ */ e.createElement("span", {
    className: a.sectionInfo
  }, n.labels[0]), /* @__PURE__ */ e.createElement("input", {
    className: a.responseInput,
    type: "text",
    placeholder: n.labels[0]
  }));
}
function S({
  projectData: t
}) {
  var c, u, i;
  if (!((c = t == null ? void 0 : t.twitter) != null && c.enabled))
    return null;
  const { twitter: n, userInfo: r } = t, l = [];
  if (n != null && n.isAccountCreatedRequired) {
    const s = /* @__PURE__ */ e.createElement(e.Fragment, null, "Have an account created before", " ", /* @__PURE__ */ e.createElement("strong", null, new Date((n == null ? void 0 : n.accountCreated) || "").toLocaleDateString()));
    l.push(s);
  }
  if (n != null && n.isFollowRequired) {
    const s = (u = n == null ? void 0 : n.follow) == null ? void 0 : u.split(","), m = /* @__PURE__ */ e.createElement(e.Fragment, null, "Follow these account(s):", /* @__PURE__ */ e.createElement("ul", null, s == null ? void 0 : s.map((o) => /* @__PURE__ */ e.createElement("li", {
      key: o
    }, /* @__PURE__ */ e.createElement("a", {
      href: `https://twitter.com/${o.trim()}`,
      target: "_blank",
      rel: "noreferrer"
    }, /* @__PURE__ */ e.createElement("strong", null, "@", o))))));
    l.push(m);
  }
  if (n != null && n.isMinFollowersRequired) {
    const s = /* @__PURE__ */ e.createElement(e.Fragment, null, "Have at least ", /* @__PURE__ */ e.createElement("b", null, n.minFollowers, " follower(s)"));
    l.push(s);
  }
  if (n != null && n.isRetweetRequired) {
    const s = /* @__PURE__ */ e.createElement(e.Fragment, null, "Retweet", " ", /* @__PURE__ */ e.createElement("a", {
      href: n.retweetUrl,
      target: "_blank",
      rel: "noreferrer"
    }, /* @__PURE__ */ e.createElement("strong", null, "this tweet")));
    l.push(s);
  }
  return /* @__PURE__ */ e.createElement(E, {
    title: "Twitter",
    onClick: () => console.log("twitter button clicked"),
    info: l,
    buttonLabel: (i = r == null ? void 0 : r.twitter) == null ? void 0 : i.username
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
  if (!(t != null && t.wallet))
    return null;
  const { wallet: n } = t, r = [];
  if (n != null && n.isBalanceRequired) {
    const l = /* @__PURE__ */ e.createElement(e.Fragment, null, "Have at least", /* @__PURE__ */ e.createElement("strong", null, " " + n.balance + " " + v[t.chain] + " "), "in your wallet");
    r.push(l);
  }
  if (n != null && n.isNftRequired) {
    const { nftCollection: l } = n, c = /* @__PURE__ */ e.createElement(e.Fragment, null, "Hold an NFT from", " ", /* @__PURE__ */ e.createElement("strong", null, /* @__PURE__ */ e.createElement("a", {
      href: l == null ? void 0 : l.url,
      target: "_blank",
      rel: "noreferrer"
    }, l == null ? void 0 : l.name)));
    r.push(c);
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
  var i;
  const [l, c] = f();
  d(() => {
    !n || fetch(
      `https://apitest.hype.day/getProject?appId=${t}&projectid=${n}&userid=${r}`
    ).then((s) => s.json()).then((s) => c(s));
  }, []);
  const u = () => {
    var s;
    (s = l == null ? void 0 : l.userInfo) != null && s.registered || console.log("register button clicked");
  };
  return /* @__PURE__ */ e.createElement("div", {
    className: a.wrapper
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
    className: a.registerButton,
    onClick: u
  }, (i = l == null ? void 0 : l.userInfo) != null && i.registered ? "Registered! \u{1F389}" : "Click to Register"));
}
export {
  I as default
};
