import n, { useState as w, useMemo as T, useEffect as A, useRef as L, useCallback as $ } from "react";
const C = "https://api.hype.day", q = new Headers({
  "Content-Type": "application/json"
});
function x(e) {
  e ? q.set("Authorization", `Bearer ${e}`) : q.delete("Authorization");
}
function O(e) {
  return e.text().then((l) => {
    const s = l && JSON.parse(l);
    if (!e.ok) {
      const r = s && s.message || e.statusText;
      return Promise.reject(r);
    }
    return s;
  });
}
function B({
  appId: e,
  projectId: l
}) {
  const s = {
    method: "GET",
    headers: q
  };
  return fetch(
    `${C}/getProject?` + new URLSearchParams({
      appid: e,
      projectid: l
    }),
    s
  ).then(O);
}
function I({
  provider: e,
  appId: l,
  projectId: s,
  returnUrl: r
}) {
  const t = {
    method: "POST",
    headers: q,
    body: JSON.stringify({
      appId: l,
      projectId: s,
      returnUrl: r
    })
  };
  return fetch(
    `${C}/${e === "twitter" ? "t" : "d"}GetUrlForApp`,
    t
  ).then(O);
}
function M({
  appId: e,
  projectId: l,
  customField: s
}) {
  const r = {
    method: "POST",
    headers: q,
    body: JSON.stringify({
      appId: e,
      projectId: l,
      customField: s
    })
  };
  return fetch(`${C}/validateForAppProject`, r).then(
    O
  );
}
function P({
  title: e,
  rightText: l,
  buttonDisabled: s = !1,
  onClick: r,
  info: t,
  isLoading: m = !1,
  showButton: y = !0
}) {
  return /* @__PURE__ */ n.createElement("section", {
    className: "hypeday-section"
  }, /* @__PURE__ */ n.createElement("header", {
    className: "hypeday-section-header"
  }, /* @__PURE__ */ n.createElement("h3", {
    className: "hypeday-h3"
  }, e), y && /* @__PURE__ */ n.createElement("button", {
    className: "hypeday-button",
    onClick: r,
    disabled: m || s,
    title: s ? "Please login first" : void 0
  }, m && /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-spinner hypeday-btn-spinner"
  }), /* @__PURE__ */ n.createElement("span", {
    style: { visibility: m ? "hidden" : "initial" }
  }, l || "Connect"))), t.map((h, c) => /* @__PURE__ */ n.createElement("span", {
    key: c,
    className: "hypeday-info"
  }, h)));
}
function U({
  projectData: e,
  appId: l,
  hasUser: s
}) {
  var h, c, f, i;
  const [r, t] = w(!1), m = T(() => {
    var E, g;
    if (!((E = e == null ? void 0 : e.discord) != null && E.enabled) && !((g = e == null ? void 0 : e.discord2) != null && g.enabled))
      return [];
    const { discord: u, discord2: a } = e, R = [];
    u != null && u.enabled && R.push(u), a != null && a.enabled && R.push(a);
    const o = [];
    return R.forEach((d) => {
      var b;
      if (d.isServerRequired) {
        const N = /* @__PURE__ */ n.createElement(n.Fragment, null, "Join the", " ", /* @__PURE__ */ n.createElement("a", {
          href: d == null ? void 0 : d.serverLink,
          target: "_blank",
          rel: "noreferrer"
        }, /* @__PURE__ */ n.createElement("strong", null, d == null ? void 0 : d.serverDisplayName)), " ", "server on Discord", d.isShouldJoinBeforeRequired ? /* @__PURE__ */ n.createElement(n.Fragment, null, " ", "before", " ", /* @__PURE__ */ n.createElement("strong", null, new Date((d == null ? void 0 : d.shouldJoinBefore) || "").toLocaleString())) : null);
        o.push(N);
      }
      if (d.isRoleRequired) {
        const N = /* @__PURE__ */ n.createElement(n.Fragment, null, 'and have the "', (b = d == null ? void 0 : d.roleDisplayNames) == null ? void 0 : b.join(", "), '" role(s)');
        o.push(N);
      }
    }), o;
  }, [e]), y = async () => {
    if (!(!l || !s || !(e != null && e.id)))
      try {
        t(!0);
        const { url: u } = await I({
          provider: "discord",
          appId: l,
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
  return !((h = e == null ? void 0 : e.discord) != null && h.enabled) && !((c = e == null ? void 0 : e.discord2) != null && c.enabled) ? null : /* @__PURE__ */ n.createElement(P, {
    title: "Discord",
    onClick: y,
    info: m,
    rightText: (i = (f = e == null ? void 0 : e.userInfo) == null ? void 0 : f.discord) == null ? void 0 : i.username,
    buttonDisabled: !s,
    isLoading: r
  });
}
const J = n.forwardRef(function({
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
function H({
  dateString: e,
  message: l
}) {
  const [s, r] = w(!1), [t, m] = w(0), [y, h] = w(0), [c, f] = w(0), [i, u] = w(0);
  return A(() => {
    const a = new Date(e).getTime(), R = setInterval(() => {
      const o = new Date().getTime(), E = a - o, g = Math.floor(E / (1e3 * 60 * 60 * 24)), d = Math.floor(
        E % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)
      ), b = Math.floor(E % (1e3 * 60 * 60) / (1e3 * 60)), N = Math.floor(E % (1e3 * 60) / 1e3);
      if (E <= 0) {
        clearInterval(R), r(!0), m(0), h(0), f(0), u(0);
        return;
      }
      m(g), h(d), f(b), u(N);
    }, 1e3);
    return () => clearInterval(R);
  }, [e]), !s && !t && !y && !c && !i ? /* @__PURE__ */ n.createElement("span", {
    style: { visibility: "hidden" }
  }, "Calculating..") : s ? /* @__PURE__ */ n.createElement(n.Fragment, null, l) : /* @__PURE__ */ n.createElement(n.Fragment, null, t > 0 && `${t} days, `, y > 0 && `${y} hours, `, c > 0 && `${c} minutes, `, i > 0 && `${i} seconds`);
}
function F({
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
function _({
  projectData: e
}) {
  var t, m, y, h, c, f, i, u, a, R, o, E;
  const [l, s] = w(), r = ((t = e == null ? void 0 : e.signupAccess) == null ? void 0 : t.isEndDateRequired) && ((m = e == null ? void 0 : e.signupAccess) == null ? void 0 : m.endDate) && new Date((y = e == null ? void 0 : e.signupAccess) == null ? void 0 : y.endDate).getTime() < Date.now();
  return A(() => {
    var g, d, b, N;
    (g = e == null ? void 0 : e.signupAccess) != null && g.isStartDateRequired && s(
      !!(((d = e == null ? void 0 : e.signupAccess) == null ? void 0 : d.isStartDateRequired) && ((b = e == null ? void 0 : e.signupAccess) == null ? void 0 : b.startDate) && new Date((N = e == null ? void 0 : e.signupAccess) == null ? void 0 : N.startDate).getTime() > Date.now())
    );
  }, [e]), A(() => {
    var g, d;
    if (l && ((g = e == null ? void 0 : e.signupAccess) == null ? void 0 : g.startDate)) {
      const b = setTimeout(
        () => s(!1),
        new Date((d = e == null ? void 0 : e.signupAccess) == null ? void 0 : d.startDate).getTime() - Date.now()
      );
      return () => clearTimeout(b);
    }
  }, [l, (h = e == null ? void 0 : e.signupAccess) == null ? void 0 : h.startDate]), r && ((c = e.signupAccess) == null ? void 0 : c.endDate) ? /* @__PURE__ */ n.createElement(F, {
    title: "Registration is closed"
  }, "Registration is closed on", " ", (i = new Date((f = e.signupAccess) == null ? void 0 : f.endDate)) == null ? void 0 : i.toUTCString(), ". Thank you for your interest.") : l && ((u = e == null ? void 0 : e.signupAccess) == null ? void 0 : u.startDate) ? /* @__PURE__ */ n.createElement(F, {
    title: "Registration starts in:"
  }, /* @__PURE__ */ n.createElement(H, {
    dateString: (a = e == null ? void 0 : e.signupAccess) == null ? void 0 : a.startDate,
    message: "Registration is open."
  })) : !r && !l && ((R = e == null ? void 0 : e.signupAccess) == null ? void 0 : R.isEndDateRequired) && ((o = e == null ? void 0 : e.signupAccess) == null ? void 0 : o.endDate) ? /* @__PURE__ */ n.createElement(F, {
    title: "Registration ends in:"
  }, /* @__PURE__ */ n.createElement(H, {
    dateString: (E = e == null ? void 0 : e.signupAccess) == null ? void 0 : E.endDate,
    message: "Registration is closed."
  })) : null;
}
function z({
  projectData: e,
  appId: l,
  hasUser: s
}) {
  var h, c, f;
  const [r, t] = w(!1), m = T(() => {
    var a, R;
    if (!((a = e == null ? void 0 : e.twitter) != null && a.enabled))
      return [];
    const { twitter: i } = e, u = [];
    if (i != null && i.isAccountCreatedRequired) {
      const o = /* @__PURE__ */ n.createElement(n.Fragment, null, "Have an account created before", " ", /* @__PURE__ */ n.createElement("strong", null, new Date((i == null ? void 0 : i.accountCreated) || "").toLocaleDateString()));
      u.push(o);
    }
    if (i != null && i.isFollowRequired) {
      const o = (R = i == null ? void 0 : i.follow) == null ? void 0 : R.split(","), E = /* @__PURE__ */ n.createElement(n.Fragment, null, "Follow these account(s):", /* @__PURE__ */ n.createElement("ul", null, o == null ? void 0 : o.map((g) => /* @__PURE__ */ n.createElement("li", {
        key: g
      }, /* @__PURE__ */ n.createElement("a", {
        href: `https://twitter.com/${g.trim()}`,
        target: "_blank",
        rel: "noreferrer"
      }, /* @__PURE__ */ n.createElement("strong", null, "@", g))))));
      u.push(E);
    }
    if (i != null && i.isMinFollowersRequired) {
      const o = /* @__PURE__ */ n.createElement(n.Fragment, null, "Have at least ", /* @__PURE__ */ n.createElement("b", null, i.minFollowers, " follower(s)"));
      u.push(o);
    }
    if (i != null && i.isRetweetRequired) {
      const o = /* @__PURE__ */ n.createElement(n.Fragment, null, "Retweet", " ", /* @__PURE__ */ n.createElement("a", {
        href: i.retweetUrl,
        target: "_blank",
        rel: "noreferrer"
      }, /* @__PURE__ */ n.createElement("strong", null, "this tweet")));
      u.push(o);
    }
    return u;
  }, [e]), y = async () => {
    if (!(!l || !s || !(e != null && e.id)))
      try {
        t(!0);
        const { url: i } = await I({
          provider: "twitter",
          appId: l,
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
  return (h = e == null ? void 0 : e.twitter) != null && h.enabled ? /* @__PURE__ */ n.createElement(P, {
    title: "Twitter",
    onClick: y,
    info: m,
    rightText: (f = (c = e == null ? void 0 : e.userInfo) == null ? void 0 : c.twitter) == null ? void 0 : f.username,
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
      const { nftCollection: t } = s, m = /* @__PURE__ */ n.createElement(n.Fragment, null, "Hold an NFT from", " ", /* @__PURE__ */ n.createElement("strong", null, /* @__PURE__ */ n.createElement("a", {
        href: t == null ? void 0 : t.url,
        target: "_blank",
        rel: "noreferrer"
      }, t == null ? void 0 : t.name)));
      r.push(m);
    }
    return r;
  }, [e]);
  return !(e != null && e.wallet) || !l.length ? null : /* @__PURE__ */ n.createElement(P, {
    title: "Wallet",
    onClick: () => console.log("wallet button clicked"),
    info: l,
    showButton: !1
  });
}
function Y({
  projectData: e,
  appId: l,
  hasUser: s,
  inputRef: r
}) {
  var a, R, o, E, g, d, b, N, k;
  const [t, m] = w(!1), [y, h] = w(""), [c, f] = w(!1);
  A(() => {
    var S;
    f(!!((S = e == null ? void 0 : e.userInfo) != null && S.registered));
  }, [e]);
  const i = async () => {
    var S;
    if (!(!l || !s || !(e != null && e.id) || c))
      try {
        h(""), m(!0);
        const { error: v } = await M({
          appId: l,
          projectId: e.id,
          customField: ((S = r == null ? void 0 : r.current) == null ? void 0 : S.value) || ""
        });
        if (v)
          return console.error("Register error", v), h(v.message);
        f(!0);
      } catch (v) {
        console.error(v);
      } finally {
        m(!1);
      }
  }, u = t || !s || ((a = e == null ? void 0 : e.discord) == null ? void 0 : a.enabled) && !((o = (R = e == null ? void 0 : e.userInfo) == null ? void 0 : R.discord) != null && o.username) || ((E = e == null ? void 0 : e.discord2) == null ? void 0 : E.enabled) && !((d = (g = e == null ? void 0 : e.userInfo) == null ? void 0 : g.discord) != null && d.username) || ((b = e == null ? void 0 : e.twitter) == null ? void 0 : b.enabled) && !((k = (N = e == null ? void 0 : e.userInfo) == null ? void 0 : N.twitter) != null && k.username);
  return /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("button", {
    className: "hypeday-register-button",
    onClick: i,
    disabled: u
  }, t && /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-spinner hypeday-btn-spinner"
  }), /* @__PURE__ */ n.createElement("span", {
    style: { visibility: t ? "hidden" : "initial" }
  }, c ? "Registered! \u{1F389}" : "Register")), !!y && /* @__PURE__ */ n.createElement("span", {
    className: "hypeday-register-error"
  }, y));
}
function X({
  appId: e,
  projectId: l,
  userToken: s
}) {
  const [r, t] = w(), [m, y] = w(!0), [h, c] = w(""), f = L(null), i = $(async () => {
    if (!l || !e) {
      console.error("HypeDayReact: projectId and appId props are required.");
      return;
    }
    y(!0), c(""), B({ appId: e, projectId: l }).then((u) => t(u)).catch((u) => {
      console.error("HypeDayReact: Error fetching project data", u), c(
        u.message || "Something went wrong. Please check your connection."
      );
    }).finally(() => y(!1));
  }, [e, l]);
  return A(() => {
    x(s);
  }, [s]), A(() => {
    i();
  }, [i]), m ? /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-wrapper",
    style: { display: "flex", justifyContent: "center" }
  }, /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-spinner"
  })) : h ? /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-wrapper"
  }, /* @__PURE__ */ n.createElement("span", {
    className: "hypeday-error"
  }, h), /* @__PURE__ */ n.createElement("button", {
    className: "hypeday-button",
    onClick: i
  }, "Retry")) : /* @__PURE__ */ n.createElement("div", {
    className: "hypeday-wrapper"
  }, /* @__PURE__ */ n.createElement(_, {
    projectData: r
  }), /* @__PURE__ */ n.createElement(G, {
    projectData: r
  }), /* @__PURE__ */ n.createElement(z, {
    projectData: r,
    appId: e,
    hasUser: !!s
  }), /* @__PURE__ */ n.createElement(U, {
    projectData: r,
    appId: e,
    hasUser: !!s
  }), /* @__PURE__ */ n.createElement(J, {
    projectData: r,
    ref: f
  }), /* @__PURE__ */ n.createElement(Y, {
    projectData: r,
    appId: e,
    hasUser: !!s,
    inputRef: f
  }), /* @__PURE__ */ n.createElement("div", {
    style: {
      fontSize: "0.8em",
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      paddingTop: 12
    }
  }, /* @__PURE__ */ n.createElement("span", null, "Powered by", " ", /* @__PURE__ */ n.createElement("a", {
    href: "https://hype.day",
    target: "_blank",
    rel: "noreferrer",
    style: { textDecoration: "none" }
  }, "Hype.Day"))));
}
export {
  X as default
};
