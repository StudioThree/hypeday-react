import n, { useState as w, useMemo as T, useEffect as q, useRef as H, useCallback as $ } from "react";
const F = "https://apitest.hype.day";
function A(e) {
  return e.text().then((l) => {
    const s = l && JSON.parse(l);
    if (!e.ok) {
      const r = s && s.message || e.statusText;
      return Promise.reject(r);
    }
    return s;
  });
}
function M({
  appId: e,
  projectId: l,
  walletAddress: s
}) {
  const r = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };
  return fetch(
    `${F}/getProject?` + new URLSearchParams({
      appid: e,
      wallet: s || "",
      projectid: l
    }),
    r
  ).then(A);
}
function L({
  provider: e,
  appId: l,
  projectId: s,
  chain: r,
  walletAddress: t,
  returnUrl: o
}) {
  const c = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      appId: l,
      chain: r,
      walletAddress: t,
      projectId: s,
      returnUrl: o
    })
  };
  return fetch(
    `${F}/${e === "twitter" ? "t" : "d"}GetUrlForApp`,
    c
  ).then(A);
}
function U({
  appId: e,
  projectId: l,
  chain: s,
  wallet: r,
  customField: t
}) {
  const o = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      appId: e,
      chain: s,
      wallet: r,
      projectId: l,
      customField: t
    })
  };
  return fetch(`${F}/validateForAppProject`, o).then(
    A
  );
}
function C({
  title: e,
  rightText: l,
  buttonDisabled: s = !1,
  onClick: r,
  info: t,
  isLoading: o = !1
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
    onClick: r,
    disabled: o || s,
    title: s ? "Please login first" : void 0
  }, o && /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-spinner hypeday-btn-spinner"
  }), /* @__PURE__ */ n.createElement("span", {
    style: { visibility: o ? "hidden" : "initial" }
  }, "Connect"))), t.map((c, h) => /* @__PURE__ */ n.createElement("span", {
    key: h,
    className: "hypeday-info"
  }, c)));
}
function B({
  projectData: e,
  appId: l,
  walletAddress: s
}) {
  var h, y, g, i;
  const [r, t] = w(!1), o = T(() => {
    var E, f;
    if (!((E = e == null ? void 0 : e.discord) != null && E.enabled) && !((f = e == null ? void 0 : e.discord2) != null && f.enabled))
      return [];
    const { discord: u, discord2: R } = e, b = [];
    u != null && u.enabled && b.push(u), R != null && R.enabled && b.push(R);
    const d = [];
    return b.forEach((m) => {
      var N;
      if (m.isServerRequired) {
        const S = /* @__PURE__ */ n.createElement(n.Fragment, null, "Join the", " ", /* @__PURE__ */ n.createElement("a", {
          href: m == null ? void 0 : m.serverLink,
          target: "_blank",
          rel: "noreferrer"
        }, /* @__PURE__ */ n.createElement("strong", null, m == null ? void 0 : m.serverDisplayName)), " ", "server on Discord", m.isShouldJoinBeforeRequired ? /* @__PURE__ */ n.createElement(n.Fragment, null, " ", "before", " ", /* @__PURE__ */ n.createElement("strong", null, new Date((m == null ? void 0 : m.shouldJoinBefore) || "").toLocaleString())) : null);
        d.push(S);
      }
      if (m.isRoleRequired) {
        const S = /* @__PURE__ */ n.createElement(n.Fragment, null, 'and have the "', (N = m == null ? void 0 : m.roleDisplayNames) == null ? void 0 : N.join(", "), '" role(s)');
        d.push(S);
      }
    }), d;
  }, [e]), c = async () => {
    if (!(!l || !s || !(e != null && e.id)))
      try {
        t(!0);
        const { url: u } = await L({
          provider: "discord",
          appId: l,
          walletAddress: s,
          chain: e.chain,
          projectId: e.id,
          returnUrl: window.location.href
        });
        window.location.assign(u);
      } catch (u) {
        console.error(u);
      } finally {
        t(!1);
      }
  };
  return !((h = e == null ? void 0 : e.discord) != null && h.enabled) && !((y = e == null ? void 0 : e.discord2) != null && y.enabled) ? null : /* @__PURE__ */ n.createElement(C, {
    title: "Discord",
    onClick: c,
    info: o,
    rightText: (i = (g = e == null ? void 0 : e.userInfo) == null ? void 0 : g.discord) == null ? void 0 : i.username,
    buttonDisabled: !s,
    isLoading: r
  });
}
const x = n.forwardRef(function({
  projectData: l
}, s) {
  var t;
  if (!((t = l == null ? void 0 : l.customfield) != null && t.enabled))
    return null;
  const { customfield: r } = l;
  return /* @__PURE__ */ n.createElement("section", {
    className: "hypeday-section"
  }, /* @__PURE__ */ n.createElement("header", {
    className: "hypeday-section-header"
  }, /* @__PURE__ */ n.createElement("h3", {
    className: "hypeday-h3"
  }, "Open Response")), /* @__PURE__ */ n.createElement("span", {
    className: "hypeday-info"
  }, r.labels[0]), /* @__PURE__ */ n.createElement("input", {
    className: "hypeday-input",
    type: "text",
    placeholder: r.labels[0],
    ref: s
  }));
});
function P({
  dateString: e,
  message: l
}) {
  const [s, r] = w(!1), [t, o] = w(0), [c, h] = w(0), [y, g] = w(0), [i, u] = w(0);
  return q(() => {
    const R = new Date(e).getTime(), b = setInterval(() => {
      const d = new Date().getTime(), E = R - d, f = Math.floor(E / (1e3 * 60 * 60 * 24)), m = Math.floor(
        E % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)
      ), N = Math.floor(E % (1e3 * 60 * 60) / (1e3 * 60)), S = Math.floor(E % (1e3 * 60) / 1e3);
      if (E <= 0) {
        clearInterval(b), r(!0), o(0), h(0), g(0), u(0);
        return;
      }
      o(f), h(m), g(N), u(S);
    }, 1e3);
    return () => clearInterval(b);
  }, [e]), !s && !t && !c && !y && !i ? /* @__PURE__ */ n.createElement("span", {
    style: { visibility: "hidden" }
  }, "Calculating..") : s ? /* @__PURE__ */ n.createElement(n.Fragment, null, l) : /* @__PURE__ */ n.createElement(n.Fragment, null, t > 0 && `${t} days, `, c > 0 && `${c} hours, `, y > 0 && `${y} minutes, `, i > 0 && `${i} seconds`);
}
function a({
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
function J({
  projectData: e
}) {
  var t, o, c, h, y, g, i, u, R, b, d, E;
  const [l, s] = w(), r = ((t = e == null ? void 0 : e.signupAccess) == null ? void 0 : t.isEndDateRequired) && ((o = e == null ? void 0 : e.signupAccess) == null ? void 0 : o.endDate) && new Date((c = e == null ? void 0 : e.signupAccess) == null ? void 0 : c.endDate).getTime() < Date.now();
  return q(() => {
    var f, m, N, S;
    (f = e == null ? void 0 : e.signupAccess) != null && f.isStartDateRequired && s(
      !!(((m = e == null ? void 0 : e.signupAccess) == null ? void 0 : m.isStartDateRequired) && ((N = e == null ? void 0 : e.signupAccess) == null ? void 0 : N.startDate) && new Date((S = e == null ? void 0 : e.signupAccess) == null ? void 0 : S.startDate).getTime() > Date.now())
    );
  }, [e]), q(() => {
    var f, m;
    if (l && ((f = e == null ? void 0 : e.signupAccess) == null ? void 0 : f.startDate)) {
      const N = setTimeout(
        () => s(!1),
        new Date((m = e == null ? void 0 : e.signupAccess) == null ? void 0 : m.startDate).getTime() - Date.now()
      );
      return () => clearTimeout(N);
    }
  }, [l, (h = e == null ? void 0 : e.signupAccess) == null ? void 0 : h.startDate]), r && ((y = e.signupAccess) == null ? void 0 : y.endDate) ? /* @__PURE__ */ n.createElement(a, {
    title: "Registration is closed"
  }, "Registration is closed on", " ", (i = new Date((g = e.signupAccess) == null ? void 0 : g.endDate)) == null ? void 0 : i.toUTCString(), ". Thank you for your interest.") : l && ((u = e == null ? void 0 : e.signupAccess) == null ? void 0 : u.startDate) ? /* @__PURE__ */ n.createElement(a, {
    title: "Registration starts in:"
  }, /* @__PURE__ */ n.createElement(P, {
    dateString: (R = e == null ? void 0 : e.signupAccess) == null ? void 0 : R.startDate,
    message: "Registration is open."
  })) : !r && !l && ((b = e == null ? void 0 : e.signupAccess) == null ? void 0 : b.isEndDateRequired) && ((d = e == null ? void 0 : e.signupAccess) == null ? void 0 : d.endDate) ? /* @__PURE__ */ n.createElement(a, {
    title: "Registration ends in:"
  }, /* @__PURE__ */ n.createElement(P, {
    dateString: (E = e == null ? void 0 : e.signupAccess) == null ? void 0 : E.endDate,
    message: "Registration is closed."
  })) : null;
}
function _({
  projectData: e,
  appId: l,
  walletAddress: s
}) {
  var h, y, g;
  const [r, t] = w(!1), o = T(() => {
    var R, b;
    if (!((R = e == null ? void 0 : e.twitter) != null && R.enabled))
      return [];
    const { twitter: i } = e, u = [];
    if (i != null && i.isAccountCreatedRequired) {
      const d = /* @__PURE__ */ n.createElement(n.Fragment, null, "Have an account created before", " ", /* @__PURE__ */ n.createElement("strong", null, new Date((i == null ? void 0 : i.accountCreated) || "").toLocaleDateString()));
      u.push(d);
    }
    if (i != null && i.isFollowRequired) {
      const d = (b = i == null ? void 0 : i.follow) == null ? void 0 : b.split(","), E = /* @__PURE__ */ n.createElement(n.Fragment, null, "Follow these account(s):", /* @__PURE__ */ n.createElement("ul", null, d == null ? void 0 : d.map((f) => /* @__PURE__ */ n.createElement("li", {
        key: f
      }, /* @__PURE__ */ n.createElement("a", {
        href: `https://twitter.com/${f.trim()}`,
        target: "_blank",
        rel: "noreferrer"
      }, /* @__PURE__ */ n.createElement("strong", null, "@", f))))));
      u.push(E);
    }
    if (i != null && i.isMinFollowersRequired) {
      const d = /* @__PURE__ */ n.createElement(n.Fragment, null, "Have at least ", /* @__PURE__ */ n.createElement("b", null, i.minFollowers, " follower(s)"));
      u.push(d);
    }
    if (i != null && i.isRetweetRequired) {
      const d = /* @__PURE__ */ n.createElement(n.Fragment, null, "Retweet", " ", /* @__PURE__ */ n.createElement("a", {
        href: i.retweetUrl,
        target: "_blank",
        rel: "noreferrer"
      }, /* @__PURE__ */ n.createElement("strong", null, "this tweet")));
      u.push(d);
    }
    return u;
  }, [e]), c = async () => {
    if (!(!l || !s || !(e != null && e.id)))
      try {
        t(!0);
        const { url: i } = await L({
          provider: "twitter",
          appId: l,
          walletAddress: s,
          chain: e.chain,
          projectId: e.id,
          returnUrl: window.location.href
        });
        window.location.assign(i);
      } catch (i) {
        console.error(i);
      } finally {
        t(!1);
      }
  };
  return (h = e == null ? void 0 : e.twitter) != null && h.enabled ? /* @__PURE__ */ n.createElement(C, {
    title: "Twitter",
    onClick: c,
    info: o,
    rightText: (g = (y = e == null ? void 0 : e.userInfo) == null ? void 0 : y.twitter) == null ? void 0 : g.username,
    buttonDisabled: !s,
    isLoading: r
  }) : null;
}
const W = {
  ethereum: "ETH",
  solana: "SOL",
  polygon: "MATIC",
  avalanche: "AVAX",
  flow: "FLOW"
};
function G({
  projectData: e
}) {
  const l = T(() => {
    if (!(e != null && e.wallet))
      return [];
    const { wallet: s } = e, r = [];
    if (s != null && s.isBalanceRequired) {
      const t = /* @__PURE__ */ n.createElement(n.Fragment, null, "Have at least", /* @__PURE__ */ n.createElement("strong", null, " " + s.balance + " " + W[e.chain] + " "), "in your wallet");
      r.push(t);
    }
    if (s != null && s.isNftRequired) {
      const { nftCollection: t } = s, o = /* @__PURE__ */ n.createElement(n.Fragment, null, "Hold an NFT from", " ", /* @__PURE__ */ n.createElement("strong", null, /* @__PURE__ */ n.createElement("a", {
        href: t == null ? void 0 : t.url,
        target: "_blank",
        rel: "noreferrer"
      }, t == null ? void 0 : t.name)));
      r.push(o);
    }
    return r;
  }, [e]);
  return e != null && e.wallet ? /* @__PURE__ */ n.createElement(C, {
    title: "Wallet",
    onClick: () => console.log("wallet button clicked"),
    info: l,
    rightText: " "
  }) : null;
}
function Y({
  projectData: e,
  appId: l,
  walletAddress: s,
  inputRef: r
}) {
  var i, u, R, b, d, E, f, m, N, S, k;
  const [t, o] = w(!1), [c, h] = w(""), y = async () => {
    var O, I;
    if (!(!l || !s || !(e != null && e.id) || ((O = e == null ? void 0 : e.userInfo) == null ? void 0 : O.registered)))
      try {
        h(""), o(!0);
        const { error: v } = await U({
          appId: l,
          wallet: s,
          chain: e.chain,
          projectId: e.id,
          customField: ((I = r == null ? void 0 : r.current) == null ? void 0 : I.value) || ""
        });
        console.error("Register error", v), h(v.message);
      } catch (v) {
        console.error(v);
      } finally {
        o(!1);
      }
  }, g = t || !s || ((i = e == null ? void 0 : e.userInfo) == null ? void 0 : i.registered) || ((u = e == null ? void 0 : e.discord) == null ? void 0 : u.enabled) && !((b = (R = e == null ? void 0 : e.userInfo) == null ? void 0 : R.discord) != null && b.username) || ((d = e == null ? void 0 : e.discord2) == null ? void 0 : d.enabled) && !((f = (E = e == null ? void 0 : e.userInfo) == null ? void 0 : E.discord) != null && f.username) || ((m = e == null ? void 0 : e.twitter) == null ? void 0 : m.enabled) && !((S = (N = e == null ? void 0 : e.userInfo) == null ? void 0 : N.twitter) != null && S.username);
  return /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("button", {
    className: "hypeday-register-button",
    onClick: y,
    disabled: g
  }, t && /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-spinner hypeday-btn-spinner"
  }), /* @__PURE__ */ n.createElement("span", {
    style: { visibility: t ? "hidden" : "initial" }
  }, (k = e == null ? void 0 : e.userInfo) != null && k.registered ? "Registered" : "Register")), !!c && /* @__PURE__ */ n.createElement("span", {
    className: "hypeday-register-error"
  }, c));
}
function X({
  appId: e,
  projectId: l,
  walletAddress: s
}) {
  const [r, t] = w(), [o, c] = w(!0), [h, y] = w(!1), g = H(null), i = $(async () => {
    if (!l || !e) {
      console.error("HypeDayReact: projectId and appId props are required.");
      return;
    }
    c(!0), y(!1), M({ appId: e, projectId: l, walletAddress: s }).then((u) => t(u)).catch((u) => {
      console.error("HypeDayReact: Error fetching project data", u), y(!0);
    }).finally(() => c(!1));
  }, [e, l, s]);
  return q(() => {
    i();
  }, [i]), o ? /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-wrapper",
    style: { display: "flex", justifyContent: "center" }
  }, /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-spinner"
  })) : h ? /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-wrapper"
  }, /* @__PURE__ */ n.createElement("span", {
    className: "hypeday-error"
  }, "Something went wrong. Please check your connection."), /* @__PURE__ */ n.createElement("button", {
    className: "hypeday-button",
    onClick: i
  }, "Retry")) : /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-wrapper"
  }, /* @__PURE__ */ n.createElement(J, {
    projectData: r
  }), /* @__PURE__ */ n.createElement(G, {
    projectData: r
  }), /* @__PURE__ */ n.createElement(_, {
    projectData: r,
    appId: e,
    walletAddress: s
  }), /* @__PURE__ */ n.createElement(B, {
    projectData: r,
    appId: e,
    walletAddress: s
  }), /* @__PURE__ */ n.createElement(x, {
    projectData: r,
    ref: g
  }), /* @__PURE__ */ n.createElement(Y, {
    projectData: r,
    appId: e,
    walletAddress: s,
    inputRef: g
  }));
}
export {
  X as default
};
