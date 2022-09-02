import t, { useState as m, useEffect as p } from "react";
const E = "_wrapper_1d0xw_1", h = "_reqSection_1d0xw_37", f = "_sectionInfo_1d0xw_49", g = "_responseInput_1d0xw_60", R = "_hypeButton_1d0xw_72", b = "_registerButton_1d0xw_93", c = {
  wrapper: E,
  reqSection: h,
  sectionInfo: f,
  responseInput: g,
  hypeButton: R,
  registerButton: b
};
function u({
  title: a,
  buttonLabel: e = "Connect",
  onClick: n,
  info: r
}) {
  return /* @__PURE__ */ t.createElement("section", {
    className: c.reqSection
  }, /* @__PURE__ */ t.createElement("header", null, /* @__PURE__ */ t.createElement("h3", null, a), /* @__PURE__ */ t.createElement("button", {
    className: c.hypeButton,
    onClick: n
  }, e)), r.map((l, o) => /* @__PURE__ */ t.createElement("span", {
    key: o,
    className: c.sectionInfo
  }, l)));
}
function q({ projectData: a }) {
  const { discord: e, discord2: n } = a;
  if (!(e != null && e.enabled) && !(n != null && n.enabled))
    return null;
  const r = [];
  e != null && e.enabled && r.push(e), n != null && n.enabled && r.push(n);
  const l = [];
  return r.forEach((o) => {
    var s;
    if (o.isServerRequired) {
      const i = /* @__PURE__ */ t.createElement(t.Fragment, null, "Join the", " ", /* @__PURE__ */ t.createElement("a", {
        href: o == null ? void 0 : o.serverLink,
        target: "_blank",
        rel: "noreferrer"
      }, /* @__PURE__ */ t.createElement("strong", null, o == null ? void 0 : o.serverDisplayName)), " ", "server on Discord", o.isShouldJoinBeforeRequired ? /* @__PURE__ */ t.createElement(t.Fragment, null, " ", "before", " ", /* @__PURE__ */ t.createElement("strong", null, new Date(o.shouldJoinBefore).toLocaleString())) : null);
      l.push(i);
    }
    if (o.isRoleRequired) {
      const i = /* @__PURE__ */ t.createElement(t.Fragment, null, 'and have the "', (s = o == null ? void 0 : o.roleDisplayNames) == null ? void 0 : s.join(", "), '" role(s)');
      l.push(i);
    }
  }), /* @__PURE__ */ t.createElement(u, {
    title: "Discord",
    onClick: () => console.log("discord button clicked"),
    info: l
  });
}
function _({ projectData: a }) {
  const { email: e } = a;
  return e != null && e.isEmailRequired ? /* @__PURE__ */ t.createElement(u, {
    title: "Email",
    onClick: () => console.log("email button clicked"),
    info: ["Have a verified email address"]
  }) : null;
}
function y({ projectData: a }) {
  const { customfield: e } = a;
  return e != null && e.enabled ? /* @__PURE__ */ t.createElement("section", {
    className: c.reqSection
  }, /* @__PURE__ */ t.createElement("header", null, /* @__PURE__ */ t.createElement("h3", null, "Open Response")), /* @__PURE__ */ t.createElement("span", {
    className: c.sectionInfo
  }, e.labels[0]), /* @__PURE__ */ t.createElement("input", {
    className: c.responseInput,
    type: "text",
    placeholder: e.labels[0]
  })) : null;
}
function d({ projectData: a }) {
  var r;
  const { twitter: e } = a;
  if (!(e != null && e.enabled))
    return null;
  const n = [];
  if (e != null && e.isAccountCreatedRequired) {
    const l = /* @__PURE__ */ t.createElement(t.Fragment, null, "Have an account created before", " ", /* @__PURE__ */ t.createElement("strong", null, new Date(e.accountCreated).toLocaleDateString()));
    n.push(l);
  }
  if (e != null && e.isFollowRequired) {
    const l = (r = e == null ? void 0 : e.follow) == null ? void 0 : r.split(","), o = /* @__PURE__ */ t.createElement(t.Fragment, null, "Follow these account(s):", /* @__PURE__ */ t.createElement("ul", null, l == null ? void 0 : l.map((s) => /* @__PURE__ */ t.createElement("li", {
      key: s
    }, /* @__PURE__ */ t.createElement("a", {
      href: `https://twitter.com/${s.trim()}`,
      target: "_blank",
      rel: "noreferrer"
    }, /* @__PURE__ */ t.createElement("strong", null, "@", s))))));
    n.push(o);
  }
  if (e != null && e.isMinFollowersRequired) {
    const l = /* @__PURE__ */ t.createElement(t.Fragment, null, "Have at least ", /* @__PURE__ */ t.createElement("b", null, e.minFollowers, " follower(s)"));
    n.push(l);
  }
  if (e != null && e.isRetweetRequired) {
    const l = /* @__PURE__ */ t.createElement(t.Fragment, null, "Retweet", " ", /* @__PURE__ */ t.createElement("a", {
      href: e.retweetUrl,
      target: "_blank",
      rel: "noreferrer"
    }, /* @__PURE__ */ t.createElement("strong", null, "this tweet")));
    n.push(l);
  }
  return /* @__PURE__ */ t.createElement(u, {
    title: "Twitter",
    onClick: () => console.log("twitter button clicked"),
    info: n
  });
}
const w = {
  ethereum: "ETH",
  solana: "SOL",
  polygon: "MATIC",
  avalanche: "AVAX",
  flow: "FLOW"
};
function F({ projectData: a }) {
  const { wallet: e } = a;
  if (!e)
    return null;
  const n = [];
  if (e != null && e.isBalanceRequired) {
    const r = /* @__PURE__ */ t.createElement(t.Fragment, null, "Have at least", /* @__PURE__ */ t.createElement("strong", null, " " + e.balance + " " + w[a.chain] + " "), "in your wallet");
    n.push(r);
  }
  if (e != null && e.isNftRequired) {
    const { nftCollection: r } = e, l = /* @__PURE__ */ t.createElement(t.Fragment, null, "Hold a ", /* @__PURE__ */ t.createElement("strong", null, r.chain.toUpperCase()), " NFT from", " ", /* @__PURE__ */ t.createElement("strong", null, /* @__PURE__ */ t.createElement("a", {
      href: r.url,
      target: "_blank",
      rel: "noreferrer"
    }, r.name)));
    n.push(l);
  }
  return /* @__PURE__ */ t.createElement(u, {
    title: "Wallet",
    onClick: () => console.log("wallet button clicked"),
    info: n
  });
}
function k({ projectId: a }) {
  const [e, n] = m({});
  return p(() => {
    !a || fetch(`https://apitest.hype.day/getProject?projectid=${a}`).then((r) => r.json()).then((r) => n(r));
  }, []), /* @__PURE__ */ t.createElement("div", {
    className: c.wrapper
  }, /* @__PURE__ */ t.createElement(F, {
    projectData: e
  }), /* @__PURE__ */ t.createElement(d, {
    projectData: e
  }), /* @__PURE__ */ t.createElement(q, {
    projectData: e
  }), /* @__PURE__ */ t.createElement(_, {
    projectData: e
  }), /* @__PURE__ */ t.createElement(y, {
    projectData: e
  }), /* @__PURE__ */ t.createElement("button", {
    className: `${c.hypeButton} ${c.registerButton}`
  }, "Click to Register"));
}
export {
  k as default
};
