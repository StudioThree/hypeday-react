(function(r,T){typeof exports=="object"&&typeof module<"u"?module.exports=T(require("react")):typeof define=="function"&&define.amd?define(["react"],T):(r=typeof globalThis<"u"?globalThis:r||self,r.HypeDayReact=T(r.React))})(this,function(r){"use strict";const n=(e=>e&&typeof e=="object"&&"default"in e?e:{default:e})(r),q="https://apitest.hype.day";function F(e){return e.text().then(l=>{const s=l&&JSON.parse(l);if(!e.ok){const i=s&&s.message||e.statusText;return Promise.reject(i)}return s})}function P({appId:e,projectId:l,walletAddress:s}){const i={method:"GET",headers:{"Content-Type":"application/json"}};return fetch(`${q}/getProject?`+new URLSearchParams({appid:e,wallet:s||"",projectid:l}),i).then(F)}function A({provider:e,appId:l,projectId:s,chain:i,walletAddress:u,returnUrl:o}){const c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({appId:l,chain:i,walletAddress:u,projectId:s,returnUrl:o})};return fetch(`${q}/${e==="twitter"?"t":"d"}GetUrlForApp`,c).then(F)}function I({appId:e,projectId:l,chain:s,wallet:i,customField:u}){const o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({appId:e,chain:s,wallet:i,projectId:l,customField:u})};return fetch(`${q}/validateForAppProject`,o).then(F)}function C({title:e,rightText:l,buttonDisabled:s=!1,onClick:i,info:u,isLoading:o=!1}){return n.default.createElement("section",{className:"hypeday-section"},n.default.createElement("header",{className:"hypeday-section-header"},n.default.createElement("h3",{className:"hypeday-h3"},e),l?n.default.createElement("span",{className:"hypeday-info"},l):n.default.createElement("button",{className:"hypeday-button",onClick:i,disabled:o||s,title:s?"Please login first":void 0},o&&n.default.createElement("div",{className:"hypeday-spinner hypeday-btn-spinner"}),n.default.createElement("span",{style:{visibility:o?"hidden":"initial"}},"Connect"))),u.map((c,a)=>n.default.createElement("span",{key:a,className:"hypeday-info"},c)))}function H({projectData:e,appId:l,walletAddress:s}){var a,h,y,t;const[i,u]=r.useState(!1),o=r.useMemo(()=>{var E,g;if(!((E=e==null?void 0:e.discord)!=null&&E.enabled)&&!((g=e==null?void 0:e.discord2)!=null&&g.enabled))return[];const{discord:d,discord2:b}=e,S=[];d!=null&&d.enabled&&S.push(d),b!=null&&b.enabled&&S.push(b);const m=[];return S.forEach(f=>{var w;if(f.isServerRequired){const N=n.default.createElement(n.default.Fragment,null,"Join the"," ",n.default.createElement("a",{href:f==null?void 0:f.serverLink,target:"_blank",rel:"noreferrer"},n.default.createElement("strong",null,f==null?void 0:f.serverDisplayName))," ","server on Discord",f.isShouldJoinBeforeRequired?n.default.createElement(n.default.Fragment,null," ","before"," ",n.default.createElement("strong",null,new Date((f==null?void 0:f.shouldJoinBefore)||"").toLocaleString())):null);m.push(N)}if(f.isRoleRequired){const N=n.default.createElement(n.default.Fragment,null,'and have the "',(w=f==null?void 0:f.roleDisplayNames)==null?void 0:w.join(", "),'" role(s)');m.push(N)}}),m},[e]),c=async()=>{if(!(!l||!s||!(e!=null&&e.id)))try{u(!0);const{url:d}=await A({provider:"discord",appId:l,walletAddress:s,chain:e.chain,projectId:e.id,returnUrl:window.location.href});window.location.assign(d)}catch(d){console.error(d)}finally{u(!1)}};return!((a=e==null?void 0:e.discord)!=null&&a.enabled)&&!((h=e==null?void 0:e.discord2)!=null&&h.enabled)?null:n.default.createElement(C,{title:"Discord",onClick:c,info:o,rightText:(t=(y=e==null?void 0:e.userInfo)==null?void 0:y.discord)==null?void 0:t.username,buttonDisabled:!s,isLoading:i})}const x=n.default.forwardRef(function({projectData:l},s){var u;if(!((u=l==null?void 0:l.customfield)!=null&&u.enabled))return null;const{customfield:i}=l;return n.default.createElement("section",{className:"hypeday-section"},n.default.createElement("header",{className:"hypeday-section-header"},n.default.createElement("h3",{className:"hypeday-h3"},"Open Response")),n.default.createElement("span",{className:"hypeday-info"},i.labels[0]),n.default.createElement("input",{className:"hypeday-input",type:"text",placeholder:i.labels[0],ref:s}))});function L({dateString:e,message:l}){const[s,i]=r.useState(!1),[u,o]=r.useState(0),[c,a]=r.useState(0),[h,y]=r.useState(0),[t,d]=r.useState(0);return r.useEffect(()=>{const b=new Date(e).getTime(),S=setInterval(()=>{const m=new Date().getTime(),E=b-m,g=Math.floor(E/(1e3*60*60*24)),f=Math.floor(E%(1e3*60*60*24)/(1e3*60*60)),w=Math.floor(E%(1e3*60*60)/(1e3*60)),N=Math.floor(E%(1e3*60)/1e3);if(E<=0){clearInterval(S),i(!0),o(0),a(0),y(0),d(0);return}o(g),a(f),y(w),d(N)},1e3);return()=>clearInterval(S)},[e]),!s&&!u&&!c&&!h&&!t?n.default.createElement("span",{style:{visibility:"hidden"}},"Calculating.."):s?n.default.createElement(n.default.Fragment,null,l):n.default.createElement(n.default.Fragment,null,u>0&&`${u} days, `,c>0&&`${c} hours, `,h>0&&`${h} minutes, `,t>0&&`${t} seconds`)}function k({children:e,title:l}){return n.default.createElement("section",{className:"hypeday-section"},n.default.createElement("header",{className:"hypeday-section-header"},n.default.createElement("h3",{className:"hypeday-h3"},l)),n.default.createElement("span",{className:"hypeday-info"},e))}function M({projectData:e}){var u,o,c,a,h,y,t,d,b,S,m,E;const[l,s]=r.useState(),i=((u=e==null?void 0:e.signupAccess)==null?void 0:u.isEndDateRequired)&&((o=e==null?void 0:e.signupAccess)==null?void 0:o.endDate)&&new Date((c=e==null?void 0:e.signupAccess)==null?void 0:c.endDate).getTime()<Date.now();return r.useEffect(()=>{var g,f,w,N;(g=e==null?void 0:e.signupAccess)!=null&&g.isStartDateRequired&&s(!!(((f=e==null?void 0:e.signupAccess)==null?void 0:f.isStartDateRequired)&&((w=e==null?void 0:e.signupAccess)==null?void 0:w.startDate)&&new Date((N=e==null?void 0:e.signupAccess)==null?void 0:N.startDate).getTime()>Date.now()))},[e]),r.useEffect(()=>{var g,f;if(l&&((g=e==null?void 0:e.signupAccess)==null?void 0:g.startDate)){const w=setTimeout(()=>s(!1),new Date((f=e==null?void 0:e.signupAccess)==null?void 0:f.startDate).getTime()-Date.now());return()=>clearTimeout(w)}},[l,(a=e==null?void 0:e.signupAccess)==null?void 0:a.startDate]),i&&((h=e.signupAccess)==null?void 0:h.endDate)?n.default.createElement(k,{title:"Registration is closed"},"Registration is closed on"," ",(t=new Date((y=e.signupAccess)==null?void 0:y.endDate))==null?void 0:t.toUTCString(),". Thank you for your interest."):l&&((d=e==null?void 0:e.signupAccess)==null?void 0:d.startDate)?n.default.createElement(k,{title:"Registration starts in:"},n.default.createElement(L,{dateString:(b=e==null?void 0:e.signupAccess)==null?void 0:b.startDate,message:"Registration is open."})):!i&&!l&&((S=e==null?void 0:e.signupAccess)==null?void 0:S.isEndDateRequired)&&((m=e==null?void 0:e.signupAccess)==null?void 0:m.endDate)?n.default.createElement(k,{title:"Registration ends in:"},n.default.createElement(L,{dateString:(E=e==null?void 0:e.signupAccess)==null?void 0:E.endDate,message:"Registration is closed."})):null}function _({projectData:e,appId:l,walletAddress:s}){var a,h,y;const[i,u]=r.useState(!1),o=r.useMemo(()=>{var b,S;if(!((b=e==null?void 0:e.twitter)!=null&&b.enabled))return[];const{twitter:t}=e,d=[];if(t!=null&&t.isAccountCreatedRequired){const m=n.default.createElement(n.default.Fragment,null,"Have an account created before"," ",n.default.createElement("strong",null,new Date((t==null?void 0:t.accountCreated)||"").toLocaleDateString()));d.push(m)}if(t!=null&&t.isFollowRequired){const m=(S=t==null?void 0:t.follow)==null?void 0:S.split(","),E=n.default.createElement(n.default.Fragment,null,"Follow these account(s):",n.default.createElement("ul",null,m==null?void 0:m.map(g=>n.default.createElement("li",{key:g},n.default.createElement("a",{href:`https://twitter.com/${g.trim()}`,target:"_blank",rel:"noreferrer"},n.default.createElement("strong",null,"@",g))))));d.push(E)}if(t!=null&&t.isMinFollowersRequired){const m=n.default.createElement(n.default.Fragment,null,"Have at least ",n.default.createElement("b",null,t.minFollowers," follower(s)"));d.push(m)}if(t!=null&&t.isRetweetRequired){const m=n.default.createElement(n.default.Fragment,null,"Retweet"," ",n.default.createElement("a",{href:t.retweetUrl,target:"_blank",rel:"noreferrer"},n.default.createElement("strong",null,"this tweet")));d.push(m)}return d},[e]),c=async()=>{if(!(!l||!s||!(e!=null&&e.id)))try{u(!0);const{url:t}=await A({provider:"twitter",appId:l,walletAddress:s,chain:e.chain,projectId:e.id,returnUrl:window.location.href});window.location.assign(t)}catch(t){console.error(t)}finally{u(!1)}};return(a=e==null?void 0:e.twitter)!=null&&a.enabled?n.default.createElement(C,{title:"Twitter",onClick:c,info:o,rightText:(y=(h=e==null?void 0:e.userInfo)==null?void 0:h.twitter)==null?void 0:y.username,buttonDisabled:!s,isLoading:i}):null}const $={ethereum:"ETH",solana:"SOL",polygon:"MATIC",avalanche:"AVAX",flow:"FLOW"};function U({projectData:e}){const l=r.useMemo(()=>{if(!(e!=null&&e.wallet))return[];const{wallet:s}=e,i=[];if(s!=null&&s.isBalanceRequired){const u=n.default.createElement(n.default.Fragment,null,"Have at least",n.default.createElement("strong",null," "+s.balance+" "+$[e.chain]+" "),"in your wallet");i.push(u)}if(s!=null&&s.isNftRequired){const{nftCollection:u}=s,o=n.default.createElement(n.default.Fragment,null,"Hold an NFT from"," ",n.default.createElement("strong",null,n.default.createElement("a",{href:u==null?void 0:u.url,target:"_blank",rel:"noreferrer"},u==null?void 0:u.name)));i.push(o)}return i},[e]);return!(e!=null&&e.wallet)||!l.length?null:n.default.createElement(C,{title:"Wallet",onClick:()=>console.log("wallet button clicked"),info:l,rightText:" "})}const W="";function B({projectData:e,appId:l,walletAddress:s,inputRef:i}){var b,S,m,E,g,f,w,N,O;const[u,o]=r.useState(!1),[c,a]=r.useState(""),[h,y]=r.useState(!1);r.useEffect(()=>{var v;y(!!((v=e==null?void 0:e.userInfo)!=null&&v.registered))},[e]);const t=async()=>{var v;if(!(!l||!s||!(e!=null&&e.id)||h))try{a(""),o(!0);const{error:R}=await I({appId:l,wallet:s,chain:e.chain,projectId:e.id,customField:((v=i==null?void 0:i.current)==null?void 0:v.value)||""});if(R)return console.error("Register error",R),a(R.message);y(!0)}catch(R){console.error(R)}finally{o(!1)}},d=u||!s||((b=e==null?void 0:e.discord)==null?void 0:b.enabled)&&!((m=(S=e==null?void 0:e.userInfo)==null?void 0:S.discord)!=null&&m.username)||((E=e==null?void 0:e.discord2)==null?void 0:E.enabled)&&!((f=(g=e==null?void 0:e.userInfo)==null?void 0:g.discord)!=null&&f.username)||((w=e==null?void 0:e.twitter)==null?void 0:w.enabled)&&!((O=(N=e==null?void 0:e.userInfo)==null?void 0:N.twitter)!=null&&O.username);return n.default.createElement(n.default.Fragment,null,n.default.createElement("button",{className:"hypeday-register-button",onClick:t,disabled:d},u&&n.default.createElement("div",{className:"hypeday-spinner hypeday-btn-spinner"}),n.default.createElement("span",{style:{visibility:u?"hidden":"initial"}},h?"Registered! \u{1F389}":"Register")),!!c&&n.default.createElement("span",{className:"hypeday-register-error"},c))}function J({appId:e,projectId:l,walletAddress:s}){const[i,u]=r.useState(),[o,c]=r.useState(!0),[a,h]=r.useState(""),y=r.useRef(null),t=r.useCallback(async()=>{if(!l||!e){console.error("HypeDayReact: projectId and appId props are required.");return}c(!0),h(""),P({appId:e,projectId:l,walletAddress:s}).then(d=>u(d)).catch(d=>{console.error("HypeDayReact: Error fetching project data",d),h(d.message||"Something went wrong. Please check your connection.")}).finally(()=>c(!1))},[e,l,s]);return r.useEffect(()=>{t()},[t]),o?n.default.createElement("div",{className:"hypeday-wrapper",style:{display:"flex",justifyContent:"center"}},n.default.createElement("div",{className:"hypeday-spinner"})):a?n.default.createElement("div",{className:"hypeday-wrapper"},n.default.createElement("span",{className:"hypeday-error"},a),n.default.createElement("button",{className:"hypeday-button",onClick:t},"Retry")):n.default.createElement("div",{className:"hypeday-wrapper"},n.default.createElement(M,{projectData:i}),n.default.createElement(U,{projectData:i}),n.default.createElement(_,{projectData:i,appId:e,walletAddress:s}),n.default.createElement(H,{projectData:i,appId:e,walletAddress:s}),n.default.createElement(x,{projectData:i,ref:y}),n.default.createElement(B,{projectData:i,appId:e,walletAddress:s,inputRef:y}),n.default.createElement("div",{style:{fontSize:"0.8em",width:"100%",display:"flex",justifyContent:"flex-end",paddingTop:12}},n.default.createElement("span",null,"Powered by"," ",n.default.createElement("a",{href:"https://hype.day",target:"_blank",rel:"noreferrer",style:{textDecoration:"none"}},"Hype.Day"))))}return J});
