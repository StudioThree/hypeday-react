import e, { useState as f, useEffect as d } from "react";
const R = "_wrapper_l5wcw_1", b = "_reqSection_l5wcw_37", w = "_sectionInfo_l5wcw_49", q = "_responseInput_l5wcw_60", _ = "_hypeButton_l5wcw_73", p = "_registerButton_l5wcw_100", a = {
  wrapper: R,
  reqSection: b,
  sectionInfo: w,
  responseInput: q,
  hypeButton: _,
  registerButton: p
};
function E({
  title: t,
  showButton: n = !0,
  buttonLabel: l,
  onClick: r,
  info: c
}) {
  return /* @__PURE__ */ e.createElement("section", {
    className: a.reqSection
  }, /* @__PURE__ */ e.createElement("header", null, /* @__PURE__ */ e.createElement("h3", null, t), n && /* @__PURE__ */ e.createElement("button", {
    className: a.hypeButton,
    onClick: r,
    disabled: !!l
  }, l || "Connect")), c.map((i, u) => /* @__PURE__ */ e.createElement("span", {
    key: u,
    className: a.sectionInfo
  }, i)));
}
function y({
  projectData: t
}) {
  var u, s, m;
  if (!((u = t == null ? void 0 : t.discord) != null && u.enabled) && !((s = t == null ? void 0 : t.discord2) != null && s.enabled))
    return null;
  const { discord: n, discord2: l, userInfo: r } = t, c = [];
  n != null && n.enabled && c.push(n), l != null && l.enabled && c.push(l);
  const i = [];
  return c.forEach((o) => {
    var g;
    if (o.isServerRequired) {
      const h = /* @__PURE__ */ e.createElement(e.Fragment, null, "Join the", " ", /* @__PURE__ */ e.createElement("a", {
        href: o == null ? void 0 : o.serverLink,
        target: "_blank",
        rel: "noreferrer"
      }, /* @__PURE__ */ e.createElement("strong", null, o == null ? void 0 : o.serverDisplayName)), " ", "server on Discord", o.isShouldJoinBeforeRequired ? /* @__PURE__ */ e.createElement(e.Fragment, null, " ", "before", " ", /* @__PURE__ */ e.createElement("strong", null, new Date((o == null ? void 0 : o.shouldJoinBefore) || "").toLocaleString())) : null);
      i.push(h);
    }
    if (o.isRoleRequired) {
      const h = /* @__PURE__ */ e.createElement(e.Fragment, null, 'and have the "', (g = o == null ? void 0 : o.roleDisplayNames) == null ? void 0 : g.join(", "), '" role(s)');
      i.push(h);
    }
  }), /* @__PURE__ */ e.createElement(E, {
    title: "Discord",
    onClick: () => alert("This is going to redirect user to Discord"),
    info: i,
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
    className: a.reqSection
  }, /* @__PURE__ */ e.createElement("header", null, /* @__PURE__ */ e.createElement("h3", null, "Open Response")), /* @__PURE__ */ e.createElement("span", {
    className: a.sectionInfo
  }, n.labels[0]), /* @__PURE__ */ e.createElement("input", {
    className: a.responseInput,
    type: "text",
    placeholder: n.labels[0]
  }));
}
function k({
  projectData: t
}) {
  var c, i, u;
  if (!((c = t == null ? void 0 : t.twitter) != null && c.enabled))
    return null;
  const { twitter: n, userInfo: l } = t, r = [];
  if (n != null && n.isAccountCreatedRequired) {
    const s = /* @__PURE__ */ e.createElement(e.Fragment, null, "Have an account created before", " ", /* @__PURE__ */ e.createElement("strong", null, new Date((n == null ? void 0 : n.accountCreated) || "").toLocaleDateString()));
    r.push(s);
  }
  if (n != null && n.isFollowRequired) {
    const s = (i = n == null ? void 0 : n.follow) == null ? void 0 : i.split(","), m = /* @__PURE__ */ e.createElement(e.Fragment, null, "Follow these account(s):", /* @__PURE__ */ e.createElement("ul", null, s == null ? void 0 : s.map((o) => /* @__PURE__ */ e.createElement("li", {
      key: o
    }, /* @__PURE__ */ e.createElement("a", {
      href: `https://twitter.com/${o.trim()}`,
      target: "_blank",
      rel: "noreferrer"
    }, /* @__PURE__ */ e.createElement("strong", null, "@", o))))));
    r.push(m);
  }
  if (n != null && n.isMinFollowersRequired) {
    const s = /* @__PURE__ */ e.createElement(e.Fragment, null, "Have at least ", /* @__PURE__ */ e.createElement("b", null, n.minFollowers, " follower(s)"));
    r.push(s);
  }
  if (n != null && n.isRetweetRequired) {
    const s = /* @__PURE__ */ e.createElement(e.Fragment, null, "Retweet", " ", /* @__PURE__ */ e.createElement("a", {
      href: n.retweetUrl,
      target: "_blank",
      rel: "noreferrer"
    }, /* @__PURE__ */ e.createElement("strong", null, "this tweet")));
    r.push(s);
  }
  return /* @__PURE__ */ e.createElement(E, {
    title: "Twitter",
    onClick: () => alert("This is going to redirect user to Twitter"),
    info: r,
    buttonLabel: (u = l == null ? void 0 : l.twitter) == null ? void 0 : u.username
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
  const { wallet: n } = t, l = [];
  if (n != null && n.isBalanceRequired) {
    const r = /* @__PURE__ */ e.createElement(e.Fragment, null, "Have at least", /* @__PURE__ */ e.createElement("strong", null, " " + n.balance + " " + v[t.chain] + " "), "in your wallet");
    l.push(r);
  }
  if (n != null && n.isNftRequired) {
    const { nftCollection: r } = n, c = /* @__PURE__ */ e.createElement(e.Fragment, null, "Hold an NFT from", " ", /* @__PURE__ */ e.createElement("strong", null, /* @__PURE__ */ e.createElement("a", {
      href: r == null ? void 0 : r.url,
      target: "_blank",
      rel: "noreferrer"
    }, r == null ? void 0 : r.name)));
    l.push(c);
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
  var u;
  const [r, c] = f();
  d(() => {
    !n || fetch(
      `https://apitest.hype.day/getProject?appId=${t}&projectid=${n}&userid=${l}`
    ).then((s) => s.json()).then((s) => c(s));
  }, []);
  const i = () => {
    var s;
    (s = r == null ? void 0 : r.userInfo) != null && s.registered || console.log("register button clicked");
  };
  return /* @__PURE__ */ e.createElement("div", {
    className: a.wrapper
  }, /* @__PURE__ */ e.createElement(B, {
    projectData: r
  }), /* @__PURE__ */ e.createElement(k, {
    projectData: r
  }), /* @__PURE__ */ e.createElement(y, {
    projectData: r
  }), /* @__PURE__ */ e.createElement(F, {
    projectData: r
  }), /* @__PURE__ */ e.createElement(S, {
    projectData: r
  }), /* @__PURE__ */ e.createElement("button", {
    className: a.registerButton,
    onClick: i
  }, (u = r == null ? void 0 : r.userInfo) != null && u.registered ? "Registered! \u{1F389}" : "Click to Register"));
}
export {
  I as default
};
