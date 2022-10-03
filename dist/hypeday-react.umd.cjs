(function(r,q){typeof exports=="object"&&typeof module<"u"?module.exports=q(require("react")):typeof define=="function"&&define.amd?define(["react"],q):(r=typeof globalThis<"u"?globalThis:r||self,r.HypeDayReact=q(r.React))})(this,function(r){"use strict";const n=(e=>e&&typeof e=="object"&&"default"in e?e:{default:e})(r),F="https://api.hype.day",A=new Headers({"Content-Type":"application/json"});function H(e){e?A.set("Authorization",`Bearer ${e}`):A.delete("Authorization")}function T(e){return e.text().then(l=>{const s=l&&JSON.parse(l);if(!e.ok){const u=s&&s.message||e.statusText;return Promise.reject(u)}return s})}function I({appId:e,projectId:l}){const s={method:"GET",headers:A};return fetch(`${F}/getProject?`+new URLSearchParams({appid:e,projectid:l}),s).then(T)}function O({provider:e,appId:l,projectId:s,returnUrl:u}){const i={method:"POST",headers:A,body:JSON.stringify({appId:l,projectId:s,returnUrl:u})};return fetch(`${F}/${e==="twitter"?"t":"d"}GetUrlForApp`,i).then(T)}function x({appId:e,projectId:l,customField:s}){const u={method:"POST",headers:A,body:JSON.stringify({appId:e,projectId:l,customField:s})};return fetch(`${F}/validateForAppProject`,u).then(T)}function C({title:e,rightText:l,buttonDisabled:s=!1,onClick:u,info:i,isLoading:m=!1,showButton:h=!0}){return n.default.createElement("section",{className:"hypeday-section"},n.default.createElement("header",{className:"hypeday-section-header"},n.default.createElement("h3",{className:"hypeday-h3"},e),h&&n.default.createElement("button",{className:"hypeday-button",onClick:u,disabled:m||s,title:s?"Please login first":void 0},m&&n.default.createElement("div",{className:"hypeday-spinner hypeday-btn-spinner"}),n.default.createElement("span",{style:{visibility:m?"hidden":"initial"}},l||"Connect"))),i.map((a,c)=>n.default.createElement("span",{key:c,className:"hypeday-info"},a)))}function M({projectData:e,appId:l,hasUser:s}){var a,c,y,t;const[u,i]=r.useState(!1),m=r.useMemo(()=>{var E,g;if(!((E=e==null?void 0:e.discord)!=null&&E.enabled)&&!((g=e==null?void 0:e.discord2)!=null&&g.enabled))return[];const{discord:d,discord2:w}=e,b=[];d!=null&&d.enabled&&b.push(d),w!=null&&w.enabled&&b.push(w);const o=[];return b.forEach(f=>{var S;if(f.isServerRequired){const N=n.default.createElement(n.default.Fragment,null,"Join the"," ",n.default.createElement("a",{href:f==null?void 0:f.serverLink,target:"_blank",rel:"noreferrer"},n.default.createElement("strong",null,f==null?void 0:f.serverDisplayName))," ","server on Discord",f.isShouldJoinBeforeRequired?n.default.createElement(n.default.Fragment,null," ","before"," ",n.default.createElement("strong",null,new Date((f==null?void 0:f.shouldJoinBefore)||"").toLocaleString())):null);o.push(N)}if(f.isRoleRequired){const N=n.default.createElement(n.default.Fragment,null,'and have the "',(S=f==null?void 0:f.roleDisplayNames)==null?void 0:S.join(", "),'" role(s)');o.push(N)}}),o},[e]),h=async()=>{if(!(!l||!s||!(e!=null&&e.id)))try{i(!0);const{url:d}=await O({provider:"discord",appId:l,projectId:e.id,returnUrl:window.location.href});window.location.assign(d)}catch(d){console.error(d)}finally{i(!1)}};return!((a=e==null?void 0:e.discord)!=null&&a.enabled)&&!((c=e==null?void 0:e.discord2)!=null&&c.enabled)?null:n.default.createElement(C,{title:"Discord",onClick:h,info:m,rightText:(t=(y=e==null?void 0:e.userInfo)==null?void 0:y.discord)==null?void 0:t.username,buttonDisabled:!s,isLoading:u})}const _=n.default.forwardRef(function({projectData:l},s){var i;if(!((i=l==null?void 0:l.customfield)!=null&&i.enabled))return null;const{customfield:u}=l;return n.default.createElement("section",{className:"hypeday-section"},n.default.createElement("header",{className:"hypeday-section-header"},n.default.createElement("h3",{className:"hypeday-h3"},"Open Response")),n.default.createElement("span",{className:"hypeday-info"},u.labels[0]),n.default.createElement("input",{className:"hypeday-input",type:"text",placeholder:u.labels[0],ref:s}))});function P({dateString:e,message:l}){const[s,u]=r.useState(!1),[i,m]=r.useState(0),[h,a]=r.useState(0),[c,y]=r.useState(0),[t,d]=r.useState(0);return r.useEffect(()=>{const w=new Date(e).getTime(),b=setInterval(()=>{const o=new Date().getTime(),E=w-o,g=Math.floor(E/(1e3*60*60*24)),f=Math.floor(E%(1e3*60*60*24)/(1e3*60*60)),S=Math.floor(E%(1e3*60*60)/(1e3*60)),N=Math.floor(E%(1e3*60)/1e3);if(E<=0){clearInterval(b),u(!0),m(0),a(0),y(0),d(0);return}m(g),a(f),y(S),d(N)},1e3);return()=>clearInterval(b)},[e]),!s&&!i&&!h&&!c&&!t?n.default.createElement("span",{style:{visibility:"hidden"}},"Calculating.."):s?n.default.createElement(n.default.Fragment,null,l):n.default.createElement(n.default.Fragment,null,i>0&&`${i} days, `,h>0&&`${h} hours, `,c>0&&`${c} minutes, `,t>0&&`${t} seconds`)}function L({children:e,title:l}){return n.default.createElement("section",{className:"hypeday-section"},n.default.createElement("header",{className:"hypeday-section-header"},n.default.createElement("h3",{className:"hypeday-h3"},l)),n.default.createElement("span",{className:"hypeday-info"},e))}function $({projectData:e}){var i,m,h,a,c,y,t,d,w,b,o,E;const[l,s]=r.useState(),u=((i=e==null?void 0:e.signupAccess)==null?void 0:i.isEndDateRequired)&&((m=e==null?void 0:e.signupAccess)==null?void 0:m.endDate)&&new Date((h=e==null?void 0:e.signupAccess)==null?void 0:h.endDate).getTime()<Date.now();return r.useEffect(()=>{var g,f,S,N;(g=e==null?void 0:e.signupAccess)!=null&&g.isStartDateRequired&&s(!!(((f=e==null?void 0:e.signupAccess)==null?void 0:f.isStartDateRequired)&&((S=e==null?void 0:e.signupAccess)==null?void 0:S.startDate)&&new Date((N=e==null?void 0:e.signupAccess)==null?void 0:N.startDate).getTime()>Date.now()))},[e]),r.useEffect(()=>{var g,f;if(l&&((g=e==null?void 0:e.signupAccess)==null?void 0:g.startDate)){const S=setTimeout(()=>s(!1),new Date((f=e==null?void 0:e.signupAccess)==null?void 0:f.startDate).getTime()-Date.now());return()=>clearTimeout(S)}},[l,(a=e==null?void 0:e.signupAccess)==null?void 0:a.startDate]),u&&((c=e.signupAccess)==null?void 0:c.endDate)?n.default.createElement(L,{title:"Registration is closed"},"Registration is closed on"," ",(t=new Date((y=e.signupAccess)==null?void 0:y.endDate))==null?void 0:t.toUTCString(),". Thank you for your interest."):l&&((d=e==null?void 0:e.signupAccess)==null?void 0:d.startDate)?n.default.createElement(L,{title:"Registration starts in:"},n.default.createElement(P,{dateString:(w=e==null?void 0:e.signupAccess)==null?void 0:w.startDate,message:"Registration is open."})):!u&&!l&&((b=e==null?void 0:e.signupAccess)==null?void 0:b.isEndDateRequired)&&((o=e==null?void 0:e.signupAccess)==null?void 0:o.endDate)?n.default.createElement(L,{title:"Registration ends in:"},n.default.createElement(P,{dateString:(E=e==null?void 0:e.signupAccess)==null?void 0:E.endDate,message:"Registration is closed."})):null}function B({projectData:e,appId:l,hasUser:s}){var a,c,y;const[u,i]=r.useState(!1),m=r.useMemo(()=>{var w,b;if(!((w=e==null?void 0:e.twitter)!=null&&w.enabled))return[];const{twitter:t}=e,d=[];if(t!=null&&t.isAccountCreatedRequired){const o=n.default.createElement(n.default.Fragment,null,"Have an account created before"," ",n.default.createElement("strong",null,new Date((t==null?void 0:t.accountCreated)||"").toLocaleDateString()));d.push(o)}if(t!=null&&t.isFollowRequired){const o=(b=t==null?void 0:t.follow)==null?void 0:b.split(","),E=n.default.createElement(n.default.Fragment,null,"Follow these account(s):",n.default.createElement("ul",null,o==null?void 0:o.map(g=>n.default.createElement("li",{key:g},n.default.createElement("a",{href:`https://twitter.com/${g.trim()}`,target:"_blank",rel:"noreferrer"},n.default.createElement("strong",null,"@",g))))));d.push(E)}if(t!=null&&t.isMinFollowersRequired){const o=n.default.createElement(n.default.Fragment,null,"Have at least ",n.default.createElement("b",null,t.minFollowers," follower(s)"));d.push(o)}if(t!=null&&t.isRetweetRequired){const o=n.default.createElement(n.default.Fragment,null,"Retweet"," ",n.default.createElement("a",{href:t.retweetUrl,target:"_blank",rel:"noreferrer"},n.default.createElement("strong",null,"this tweet")));d.push(o)}return d},[e]),h=async()=>{if(!(!l||!s||!(e!=null&&e.id)))try{i(!0);const{url:t}=await O({provider:"twitter",appId:l,projectId:e.id,returnUrl:window.location.href});window.location.assign(t)}catch(t){console.error(t)}finally{i(!1)}};return(a=e==null?void 0:e.twitter)!=null&&a.enabled?n.default.createElement(C,{title:"Twitter",onClick:h,info:m,rightText:(y=(c=e==null?void 0:e.userInfo)==null?void 0:c.twitter)==null?void 0:y.username,buttonDisabled:!s,isLoading:u}):null}const U={ethereum:"ETH",solana:"SOL",polygon:"MATIC",avalanche:"AVAX",flow:"FLOW"};function J({projectData:e}){const l=r.useMemo(()=>{if(!(e!=null&&e.wallet))return[];const{wallet:s}=e,u=[];if(s!=null&&s.isBalanceRequired){const i=n.default.createElement(n.default.Fragment,null,"Have at least",n.default.createElement("strong",null," "+s.balance+" "+U[e.chain]+" "),"in your wallet");u.push(i)}if(s!=null&&s.isNftRequired){const{nftCollection:i}=s,m=n.default.createElement(n.default.Fragment,null,"Hold an NFT from"," ",n.default.createElement("strong",null,n.default.createElement("a",{href:i==null?void 0:i.url,target:"_blank",rel:"noreferrer"},i==null?void 0:i.name)));u.push(m)}return u},[e]);return!(e!=null&&e.wallet)||!l.length?null:n.default.createElement(C,{title:"Wallet",onClick:()=>console.log("wallet button clicked"),info:l,showButton:!1})}const G="";function z({projectData:e,appId:l,hasUser:s,inputRef:u}){var w,b,o,E,g,f,S,N,k;const[i,m]=r.useState(!1),[h,a]=r.useState(""),[c,y]=r.useState(!1);r.useEffect(()=>{var v;y(!!((v=e==null?void 0:e.userInfo)!=null&&v.registered))},[e]);const t=async()=>{var v;if(!(!l||!s||!(e!=null&&e.id)||c))try{a(""),m(!0);const{error:R}=await x({appId:l,projectId:e.id,customField:((v=u==null?void 0:u.current)==null?void 0:v.value)||""});if(R)return console.error("Register error",R),a(R.message);y(!0)}catch(R){console.error(R)}finally{m(!1)}},d=i||!s||((w=e==null?void 0:e.discord)==null?void 0:w.enabled)&&!((o=(b=e==null?void 0:e.userInfo)==null?void 0:b.discord)!=null&&o.username)||((E=e==null?void 0:e.discord2)==null?void 0:E.enabled)&&!((f=(g=e==null?void 0:e.userInfo)==null?void 0:g.discord)!=null&&f.username)||((S=e==null?void 0:e.twitter)==null?void 0:S.enabled)&&!((k=(N=e==null?void 0:e.userInfo)==null?void 0:N.twitter)!=null&&k.username);return n.default.createElement(n.default.Fragment,null,n.default.createElement("button",{className:"hypeday-register-button",onClick:t,disabled:d},i&&n.default.createElement("div",{className:"hypeday-spinner hypeday-btn-spinner"}),n.default.createElement("span",{style:{visibility:i?"hidden":"initial"}},c?"Registered! \u{1F389}":"Register")),!!h&&n.default.createElement("span",{className:"hypeday-register-error"},h))}function W({appId:e,projectId:l,userToken:s}){const[u,i]=r.useState(),[m,h]=r.useState(!0),[a,c]=r.useState(""),y=r.useRef(null),t=r.useCallback(async()=>{if(!l||!e){console.error("HypeDayReact: projectId and appId props are required.");return}h(!0),c(""),I({appId:e,projectId:l}).then(d=>i(d)).catch(d=>{console.error("HypeDayReact: Error fetching project data",d),c(d.message||"Something went wrong. Please check your connection.")}).finally(()=>h(!1))},[e,l]);return r.useEffect(()=>{H(s)},[s]),r.useEffect(()=>{t()},[t]),m?n.default.createElement("div",{className:"hypeday-wrapper",style:{display:"flex",justifyContent:"center"}},n.default.createElement("div",{className:"hypeday-spinner"})):a?n.default.createElement("div",{className:"hypeday-wrapper"},n.default.createElement("span",{className:"hypeday-error"},a),n.default.createElement("button",{className:"hypeday-button",onClick:t},"Retry")):n.default.createElement("div",{className:"hypeday-wrapper"},n.default.createElement($,{projectData:u}),n.default.createElement(J,{projectData:u}),n.default.createElement(B,{projectData:u,appId:e,hasUser:!!s}),n.default.createElement(M,{projectData:u,appId:e,hasUser:!!s}),n.default.createElement(_,{projectData:u,ref:y}),n.default.createElement(z,{projectData:u,appId:e,hasUser:!!s,inputRef:y}),n.default.createElement("div",{style:{fontSize:"0.8em",width:"100%",display:"flex",justifyContent:"flex-end",paddingTop:12}},n.default.createElement("span",null,"Powered by"," ",n.default.createElement("a",{href:"https://hype.day",target:"_blank",rel:"noreferrer",style:{textDecoration:"none"}},"Hype.Day"))))}return W});
