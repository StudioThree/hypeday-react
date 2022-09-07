import n, { useState as f, useEffect as A } from "react";
function T({
  title: e,
  rightText: t,
  buttonDisabled: i = !1,
  onClick: s,
  info: c,
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
  }, "Connect"))), c.map((o, u) => /* @__PURE__ */ n.createElement("span", {
    key: u,
    className: "hypeday-info"
  }, o)));
}
function F({
  projectData: e,
  appId: t,
  userId: i
}) {
  var m, d, h;
  if (!((m = e == null ? void 0 : e.discord) != null && m.enabled) && !((d = e == null ? void 0 : e.discord2) != null && d.enabled))
    return null;
  const { discord: s, discord2: c, userInfo: l } = e, o = [];
  s != null && s.enabled && o.push(s), c != null && c.enabled && o.push(c);
  const u = [];
  o.forEach((r) => {
    var g;
    if (r.isServerRequired) {
      const a = /* @__PURE__ */ n.createElement(n.Fragment, null, "Join the", " ", /* @__PURE__ */ n.createElement("a", {
        href: r == null ? void 0 : r.serverLink,
        target: "_blank",
        rel: "noreferrer"
      }, /* @__PURE__ */ n.createElement("strong", null, r == null ? void 0 : r.serverDisplayName)), " ", "server on Discord", r.isShouldJoinBeforeRequired ? /* @__PURE__ */ n.createElement(n.Fragment, null, " ", "before", " ", /* @__PURE__ */ n.createElement("strong", null, new Date((r == null ? void 0 : r.shouldJoinBefore) || "").toLocaleString())) : null);
      u.push(a);
    }
    if (r.isRoleRequired) {
      const a = /* @__PURE__ */ n.createElement(n.Fragment, null, 'and have the "', (g = r == null ? void 0 : r.roleDisplayNames) == null ? void 0 : g.join(", "), '" role(s)');
      u.push(a);
    }
  });
  const y = () => {
    console.log(t), alert("This is going to redirect user to Discord");
  };
  return /* @__PURE__ */ n.createElement(T, {
    title: "Discord",
    onClick: y,
    info: u,
    rightText: (h = l == null ? void 0 : l.discord) == null ? void 0 : h.username,
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
  const [i, s] = f(!1), [c, l] = f(0), [o, u] = f(0), [y, m] = f(0), [d, h] = f(0);
  return A(() => {
    const r = new Date(e).getTime(), g = setInterval(() => {
      const a = new Date().getTime(), E = r - a, R = Math.floor(E / (1e3 * 60 * 60 * 24)), b = Math.floor(
        E % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)
      ), w = Math.floor(E % (1e3 * 60 * 60) / (1e3 * 60)), N = Math.floor(E % (1e3 * 60) / 1e3);
      if (E <= 0) {
        clearInterval(g), s(!0), l(0), u(0), m(0), h(0);
        return;
      }
      l(R), u(b), m(w), h(N);
    }, 1e3);
    return () => clearInterval(g);
  }, [e]), !i && !c && !o && !y && !d ? /* @__PURE__ */ n.createElement("span", {
    style: { visibility: "hidden" }
  }, "Calculating..") : i ? /* @__PURE__ */ n.createElement(n.Fragment, null, t) : /* @__PURE__ */ n.createElement(n.Fragment, null, c > 0 && `${c} days, `, o > 0 && `${o} hours, `, y > 0 && `${y} minutes, `, d > 0 && `${d} seconds`);
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
  var c, l, o, u, y, m, d, h, r, g, a, E;
  const [t, i] = f(), s = ((c = e == null ? void 0 : e.signupAccess) == null ? void 0 : c.isEndDateRequired) && ((l = e == null ? void 0 : e.signupAccess) == null ? void 0 : l.endDate) && new Date((o = e == null ? void 0 : e.signupAccess) == null ? void 0 : o.endDate).getTime() < Date.now();
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
  }, [t, (u = e == null ? void 0 : e.signupAccess) == null ? void 0 : u.startDate]), s && ((y = e.signupAccess) == null ? void 0 : y.endDate) ? /* @__PURE__ */ n.createElement(S, {
    title: "Registration is closed"
  }, "Registration is closed on", " ", (d = new Date((m = e.signupAccess) == null ? void 0 : m.endDate)) == null ? void 0 : d.toUTCString(), ". Thank you for your interest.") : t && ((h = e == null ? void 0 : e.signupAccess) == null ? void 0 : h.startDate) ? /* @__PURE__ */ n.createElement(S, {
    title: "Registration starts in:"
  }, /* @__PURE__ */ n.createElement(q, {
    dateString: (r = e == null ? void 0 : e.signupAccess) == null ? void 0 : r.startDate,
    message: "Registration is open."
  })) : !s && !t && ((g = e == null ? void 0 : e.signupAccess) == null ? void 0 : g.isEndDateRequired) && ((a = e == null ? void 0 : e.signupAccess) == null ? void 0 : a.endDate) ? /* @__PURE__ */ n.createElement(S, {
    title: "Registration ends in:"
  }, /* @__PURE__ */ n.createElement(q, {
    dateString: (E = e == null ? void 0 : e.signupAccess) == null ? void 0 : E.endDate,
    message: "Registration is closed."
  })) : null;
}
const P = "https://apitest.hype.day";
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
function H({
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
    `${P}/getProject?` + new URLSearchParams({
      appid: e,
      userid: i || "",
      projectid: t
    }),
    s
  ).then(v);
}
function L({
  appId: e,
  projectId: t,
  userId: i,
  returnUrl: s
}) {
  const c = {
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
    c
  ).then(v);
}
function U({
  projectData: e,
  appId: t,
  userId: i
}) {
  var m, d, h;
  const [s, c] = f(!1);
  if (!((m = e == null ? void 0 : e.twitter) != null && m.enabled))
    return null;
  const { twitter: l, userInfo: o } = e, u = [];
  if (l != null && l.isAccountCreatedRequired) {
    const r = /* @__PURE__ */ n.createElement(n.Fragment, null, "Have an account created before", " ", /* @__PURE__ */ n.createElement("strong", null, new Date((l == null ? void 0 : l.accountCreated) || "").toLocaleDateString()));
    u.push(r);
  }
  if (l != null && l.isFollowRequired) {
    const r = (d = l == null ? void 0 : l.follow) == null ? void 0 : d.split(","), g = /* @__PURE__ */ n.createElement(n.Fragment, null, "Follow these account(s):", /* @__PURE__ */ n.createElement("ul", null, r == null ? void 0 : r.map((a) => /* @__PURE__ */ n.createElement("li", {
      key: a
    }, /* @__PURE__ */ n.createElement("a", {
      href: `https://twitter.com/${a.trim()}`,
      target: "_blank",
      rel: "noreferrer"
    }, /* @__PURE__ */ n.createElement("strong", null, "@", a))))));
    u.push(g);
  }
  if (l != null && l.isMinFollowersRequired) {
    const r = /* @__PURE__ */ n.createElement(n.Fragment, null, "Have at least ", /* @__PURE__ */ n.createElement("b", null, l.minFollowers, " follower(s)"));
    u.push(r);
  }
  if (l != null && l.isRetweetRequired) {
    const r = /* @__PURE__ */ n.createElement(n.Fragment, null, "Retweet", " ", /* @__PURE__ */ n.createElement("a", {
      href: l.retweetUrl,
      target: "_blank",
      rel: "noreferrer"
    }, /* @__PURE__ */ n.createElement("strong", null, "this tweet")));
    u.push(r);
  }
  const y = async () => {
    if (!(!t || !i || !(e != null && e.id)))
      try {
        c(!0);
        const { url: r } = await L({
          appId: t,
          userId: i,
          projectId: e.id,
          returnUrl: window.location.href
        });
        window.location.assign(r);
      } catch (r) {
        console.error(r);
      } finally {
        c(!1);
      }
  };
  return /* @__PURE__ */ n.createElement(T, {
    title: "Twitter",
    onClick: y,
    info: u,
    rightText: (h = o == null ? void 0 : o.twitter) == null ? void 0 : h.username,
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
    const { nftCollection: s } = t, c = /* @__PURE__ */ n.createElement(n.Fragment, null, "Hold an NFT from", " ", /* @__PURE__ */ n.createElement("strong", null, /* @__PURE__ */ n.createElement("a", {
      href: s == null ? void 0 : s.url,
      target: "_blank",
      rel: "noreferrer"
    }, s == null ? void 0 : s.name)));
    i.push(c);
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
  var g;
  const [s, c] = f(), [l, o] = f(!0), [u, y] = f(!1), [m, d] = f(!1), h = async () => {
    if (!t || !e) {
      console.error("HypeDayReact: projectId and appId props are required.");
      return;
    }
    o(!0), y(!1), H({ appId: e, projectId: t, userId: i }).then((a) => c(a)).catch((a) => {
      console.error("HypeDayReact: Error fetching project data", a), y(!0);
    }).finally(() => o(!1));
  };
  A(() => {
    h();
  }, [e, t, i]);
  const r = () => {
    var a;
    (a = s == null ? void 0 : s.userInfo) != null && a.registered || (d(!0), setTimeout(() => d(!1), 3e3), console.log("register button clicked"));
  };
  return l ? /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-wrapper",
    style: { display: "flex", justifyContent: "center" }
  }, /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-spinner"
  })) : u ? /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-wrapper"
  }, /* @__PURE__ */ n.createElement("span", {
    className: "hypeday-error"
  }, "Something went wrong. Please check your connection."), /* @__PURE__ */ n.createElement("button", {
    className: "hypeday-button",
    onClick: h
  }, "Retry")) : /* @__PURE__ */ n.createElement("div", {
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
    onClick: r,
    disabled: m
  }, m && /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-spinner hypeday-btn-spinner"
  }), /* @__PURE__ */ n.createElement("span", {
    style: { visibility: m ? "hidden" : "initial" }
  }, (g = s == null ? void 0 : s.userInfo) != null && g.registered ? "Registered" : "Register")));
}
export {
  $ as default
};
