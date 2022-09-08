import n, { useMemo as T, useState as b, useEffect as A, useCallback as k } from "react";
function q({
  title: e,
  rightText: l,
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
  }, e), l ? /* @__PURE__ */ n.createElement("span", {
    className: "hypeday-info"
  }, l) : /* @__PURE__ */ n.createElement("button", {
    className: "hypeday-button",
    onClick: i,
    disabled: m || s,
    title: s ? "Please login first" : void 0
  }, m && /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-spinner hypeday-btn-spinner"
  }), /* @__PURE__ */ n.createElement("span", {
    style: { visibility: m ? "hidden" : "initial" }
  }, "Connect"))), r.map((h, a) => /* @__PURE__ */ n.createElement("span", {
    key: a,
    className: "hypeday-info"
  }, h)));
}
function C({
  projectData: e,
  appId: l,
  userId: s
}) {
  var m, h, a, y;
  const i = T(() => {
    var g, c;
    if (!((g = e == null ? void 0 : e.discord) != null && g.enabled) && !((c = e == null ? void 0 : e.discord2) != null && c.enabled))
      return [];
    const { discord: d, discord2: t } = e, o = [];
    d != null && d.enabled && o.push(d), t != null && t.enabled && o.push(t);
    const E = [];
    return o.forEach((u) => {
      var f;
      if (u.isServerRequired) {
        const R = /* @__PURE__ */ n.createElement(n.Fragment, null, "Join the", " ", /* @__PURE__ */ n.createElement("a", {
          href: u == null ? void 0 : u.serverLink,
          target: "_blank",
          rel: "noreferrer"
        }, /* @__PURE__ */ n.createElement("strong", null, u == null ? void 0 : u.serverDisplayName)), " ", "server on Discord", u.isShouldJoinBeforeRequired ? /* @__PURE__ */ n.createElement(n.Fragment, null, " ", "before", " ", /* @__PURE__ */ n.createElement("strong", null, new Date((u == null ? void 0 : u.shouldJoinBefore) || "").toLocaleString())) : null);
        E.push(R);
      }
      if (u.isRoleRequired) {
        const R = /* @__PURE__ */ n.createElement(n.Fragment, null, 'and have the "', (f = u == null ? void 0 : u.roleDisplayNames) == null ? void 0 : f.join(", "), '" role(s)');
        E.push(R);
      }
    }), E;
  }, [e]), r = () => {
    console.log(l), alert("This is going to redirect user to Discord");
  };
  return !((m = e == null ? void 0 : e.discord) != null && m.enabled) && !((h = e == null ? void 0 : e.discord2) != null && h.enabled) ? null : /* @__PURE__ */ n.createElement(q, {
    title: "Discord",
    onClick: r,
    info: i,
    rightText: (y = (a = e == null ? void 0 : e.userInfo) == null ? void 0 : a.discord) == null ? void 0 : y.username,
    buttonDisabled: !s
  });
}
function P({
  projectData: e
}) {
  var s;
  if (!((s = e == null ? void 0 : e.customfield) != null && s.enabled))
    return null;
  const { customfield: l } = e;
  return /* @__PURE__ */ n.createElement("section", {
    className: "hypeday-section"
  }, /* @__PURE__ */ n.createElement("header", {
    className: "hypeday-section-header"
  }, /* @__PURE__ */ n.createElement("h3", {
    className: "hypeday-h3"
  }, "Open Response")), /* @__PURE__ */ n.createElement("span", {
    className: "hypeday-info"
  }, l.labels[0]), /* @__PURE__ */ n.createElement("input", {
    className: "hypeday-input",
    type: "text",
    placeholder: l.labels[0]
  }));
}
function v({
  dateString: e,
  message: l
}) {
  const [s, i] = b(!1), [r, m] = b(0), [h, a] = b(0), [y, d] = b(0), [t, o] = b(0);
  return A(() => {
    const E = new Date(e).getTime(), g = setInterval(() => {
      const c = new Date().getTime(), u = E - c, f = Math.floor(u / (1e3 * 60 * 60 * 24)), R = Math.floor(
        u % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)
      ), w = Math.floor(u % (1e3 * 60 * 60) / (1e3 * 60)), N = Math.floor(u % (1e3 * 60) / 1e3);
      if (u <= 0) {
        clearInterval(g), i(!0), m(0), a(0), d(0), o(0);
        return;
      }
      m(f), a(R), d(w), o(N);
    }, 1e3);
    return () => clearInterval(g);
  }, [e]), !s && !r && !h && !y && !t ? /* @__PURE__ */ n.createElement("span", {
    style: { visibility: "hidden" }
  }, "Calculating..") : s ? /* @__PURE__ */ n.createElement(n.Fragment, null, l) : /* @__PURE__ */ n.createElement(n.Fragment, null, r > 0 && `${r} days, `, h > 0 && `${h} hours, `, y > 0 && `${y} minutes, `, t > 0 && `${t} seconds`);
}
function S({
  children: e,
  title: l
}) {
  return /* @__PURE__ */ n.createElement("section", {
    className: "hypeday-section"
  }, /* @__PURE__ */ n.createElement("header", {
    className: "hypeday-section-header"
  }, /* @__PURE__ */ n.createElement("h3", {
    className: "hypeday-h3"
  }, l)), /* @__PURE__ */ n.createElement("span", {
    className: "hypeday-info"
  }, e));
}
function H({
  projectData: e
}) {
  var r, m, h, a, y, d, t, o, E, g, c, u;
  const [l, s] = b(), i = ((r = e == null ? void 0 : e.signupAccess) == null ? void 0 : r.isEndDateRequired) && ((m = e == null ? void 0 : e.signupAccess) == null ? void 0 : m.endDate) && new Date((h = e == null ? void 0 : e.signupAccess) == null ? void 0 : h.endDate).getTime() < Date.now();
  return A(() => {
    var f, R, w, N;
    (f = e == null ? void 0 : e.signupAccess) != null && f.isStartDateRequired && s(
      !!(((R = e == null ? void 0 : e.signupAccess) == null ? void 0 : R.isStartDateRequired) && ((w = e == null ? void 0 : e.signupAccess) == null ? void 0 : w.startDate) && new Date((N = e == null ? void 0 : e.signupAccess) == null ? void 0 : N.startDate).getTime() > Date.now())
    );
  }, [e]), A(() => {
    var f, R;
    if (l && ((f = e == null ? void 0 : e.signupAccess) == null ? void 0 : f.startDate)) {
      const w = setTimeout(
        () => s(!1),
        new Date((R = e == null ? void 0 : e.signupAccess) == null ? void 0 : R.startDate).getTime() - Date.now()
      );
      return () => clearTimeout(w);
    }
  }, [l, (a = e == null ? void 0 : e.signupAccess) == null ? void 0 : a.startDate]), i && ((y = e.signupAccess) == null ? void 0 : y.endDate) ? /* @__PURE__ */ n.createElement(S, {
    title: "Registration is closed"
  }, "Registration is closed on", " ", (t = new Date((d = e.signupAccess) == null ? void 0 : d.endDate)) == null ? void 0 : t.toUTCString(), ". Thank you for your interest.") : l && ((o = e == null ? void 0 : e.signupAccess) == null ? void 0 : o.startDate) ? /* @__PURE__ */ n.createElement(S, {
    title: "Registration starts in:"
  }, /* @__PURE__ */ n.createElement(v, {
    dateString: (E = e == null ? void 0 : e.signupAccess) == null ? void 0 : E.startDate,
    message: "Registration is open."
  })) : !i && !l && ((g = e == null ? void 0 : e.signupAccess) == null ? void 0 : g.isEndDateRequired) && ((c = e == null ? void 0 : e.signupAccess) == null ? void 0 : c.endDate) ? /* @__PURE__ */ n.createElement(S, {
    title: "Registration ends in:"
  }, /* @__PURE__ */ n.createElement(v, {
    dateString: (u = e == null ? void 0 : e.signupAccess) == null ? void 0 : u.endDate,
    message: "Registration is closed."
  })) : null;
}
const L = "https://apitest.hype.day";
function F(e) {
  return e.text().then((l) => {
    const s = l && JSON.parse(l);
    if (!e.ok) {
      const i = s && s.message || e.statusText;
      return Promise.reject(i);
    }
    return s;
  });
}
function M({
  appId: e,
  projectId: l,
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
      projectid: l
    }),
    i
  ).then(F);
}
function U({
  appId: e,
  projectId: l,
  userId: s,
  returnUrl: i
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
      userid: s,
      projectid: l,
      returnurl: i
    }),
    r
  ).then(F);
}
function O({
  projectData: e,
  appId: l,
  userId: s
}) {
  var a, y, d;
  const [i, r] = b(!1), m = T(() => {
    var E, g;
    if (!((E = e == null ? void 0 : e.twitter) != null && E.enabled))
      return [];
    const { twitter: t } = e, o = [];
    if (t != null && t.isAccountCreatedRequired) {
      const c = /* @__PURE__ */ n.createElement(n.Fragment, null, "Have an account created before", " ", /* @__PURE__ */ n.createElement("strong", null, new Date((t == null ? void 0 : t.accountCreated) || "").toLocaleDateString()));
      o.push(c);
    }
    if (t != null && t.isFollowRequired) {
      const c = (g = t == null ? void 0 : t.follow) == null ? void 0 : g.split(","), u = /* @__PURE__ */ n.createElement(n.Fragment, null, "Follow these account(s):", /* @__PURE__ */ n.createElement("ul", null, c == null ? void 0 : c.map((f) => /* @__PURE__ */ n.createElement("li", {
        key: f
      }, /* @__PURE__ */ n.createElement("a", {
        href: `https://twitter.com/${f.trim()}`,
        target: "_blank",
        rel: "noreferrer"
      }, /* @__PURE__ */ n.createElement("strong", null, "@", f))))));
      o.push(u);
    }
    if (t != null && t.isMinFollowersRequired) {
      const c = /* @__PURE__ */ n.createElement(n.Fragment, null, "Have at least ", /* @__PURE__ */ n.createElement("b", null, t.minFollowers, " follower(s)"));
      o.push(c);
    }
    if (t != null && t.isRetweetRequired) {
      const c = /* @__PURE__ */ n.createElement(n.Fragment, null, "Retweet", " ", /* @__PURE__ */ n.createElement("a", {
        href: t.retweetUrl,
        target: "_blank",
        rel: "noreferrer"
      }, /* @__PURE__ */ n.createElement("strong", null, "this tweet")));
      o.push(c);
    }
    return o;
  }, [e]), h = async () => {
    if (!(!l || !s || !(e != null && e.id)))
      try {
        r(!0);
        const { url: t } = await U({
          appId: l,
          userId: s,
          projectId: e.id,
          returnUrl: window.location.href
        });
        window.location.assign(t);
      } catch (t) {
        console.error(t);
      } finally {
        r(!1);
      }
  };
  return (a = e == null ? void 0 : e.twitter) != null && a.enabled ? /* @__PURE__ */ n.createElement(q, {
    title: "Twitter",
    onClick: h,
    info: m,
    rightText: (d = (y = e == null ? void 0 : e.userInfo) == null ? void 0 : y.twitter) == null ? void 0 : d.username,
    buttonDisabled: !s,
    isLoading: i
  }) : null;
}
const x = {
  ethereum: "ETH",
  solana: "SOL",
  polygon: "MATIC",
  avalanche: "AVAX",
  flow: "FLOW"
};
function $({
  projectData: e
}) {
  const l = T(() => {
    if (!(e != null && e.wallet))
      return [];
    const { wallet: s } = e, i = [];
    if (s != null && s.isBalanceRequired) {
      const r = /* @__PURE__ */ n.createElement(n.Fragment, null, "Have at least", /* @__PURE__ */ n.createElement("strong", null, " " + s.balance + " " + x[e.chain] + " "), "in your wallet");
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
    info: l,
    rightText: " "
  }) : null;
}
function _({
  appId: e,
  projectId: l,
  userId: s
}) {
  var g;
  const [i, r] = b(), [m, h] = b(!0), [a, y] = b(!1), [d, t] = b(!1), o = k(async () => {
    if (!l || !e) {
      console.error("HypeDayReact: projectId and appId props are required.");
      return;
    }
    h(!0), y(!1), M({ appId: e, projectId: l, userId: s }).then((c) => r(c)).catch((c) => {
      console.error("HypeDayReact: Error fetching project data", c), y(!0);
    }).finally(() => h(!1));
  }, [e, l, s]);
  A(() => {
    o();
  }, [o]);
  const E = () => {
    var c;
    (c = i == null ? void 0 : i.userInfo) != null && c.registered || (t(!0), setTimeout(() => t(!1), 3e3), console.log("register button clicked"));
  };
  return m ? /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-wrapper",
    style: { display: "flex", justifyContent: "center" }
  }, /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-spinner"
  })) : a ? /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-wrapper"
  }, /* @__PURE__ */ n.createElement("span", {
    className: "hypeday-error"
  }, "Something went wrong. Please check your connection."), /* @__PURE__ */ n.createElement("button", {
    className: "hypeday-button",
    onClick: o
  }, "Retry")) : /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-wrapper"
  }, /* @__PURE__ */ n.createElement(H, {
    projectData: i
  }), /* @__PURE__ */ n.createElement($, {
    projectData: i
  }), /* @__PURE__ */ n.createElement(O, {
    projectData: i,
    appId: e,
    userId: s
  }), /* @__PURE__ */ n.createElement(C, {
    projectData: i,
    appId: e,
    userId: s
  }), /* @__PURE__ */ n.createElement(P, {
    projectData: i
  }), /* @__PURE__ */ n.createElement("button", {
    className: "hypeday-register-button",
    onClick: E,
    disabled: d
  }, d && /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-spinner hypeday-btn-spinner"
  }), /* @__PURE__ */ n.createElement("span", {
    style: { visibility: d ? "hidden" : "initial" }
  }, (g = i == null ? void 0 : i.userInfo) != null && g.registered ? "Registered" : "Register")));
}
export {
  _ as default
};
