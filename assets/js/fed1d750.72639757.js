"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[7929],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),f=o,y=c["".concat(l,".").concat(f)]||c[f]||d[f]||n;return r?a.createElement(y,i(i({ref:t},u),{},{components:r})):a.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8851:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var a=r(7462),o=(r(7294),r(4137));const n={id:"what-do-it-do",title:"What does early startup do?",slug:"what-do-it-do"},i=void 0,s={unversionedId:"faq/early-startup/what-do-it-do",id:"faq/early-startup/what-do-it-do",title:"What does early startup do?",description:"There is info on how to use Early Startup here in the documentation",source:"@site/docs/faq/early-startup/What-do-it-do.mdx",sourceDirName:"faq/early-startup",slug:"/faq/early-startup/what-do-it-do",permalink:"/faq/early-startup/what-do-it-do",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/faq/early-startup/What-do-it-do.mdx",tags:[],version:"current",frontMatter:{id:"what-do-it-do",title:"What does early startup do?",slug:"what-do-it-do"},sidebar:"sidebar",previous:{title:"Exposure",permalink:"/faq/desktop/exposure"},next:{title:"How early is early?",permalink:"/faq/early-startup/how-early"}},l={},p=[],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"There is info on how to use Early Startup ",(0,o.kt)("a",{parentName:"p",href:"/desktop-feature-api/#registering-a-new-feature"},"here in the documentation"))),(0,o.kt)("p",null,'Include "isEarlyStartup" in the FeatureManifest.yaml if you need sychronous access / very early access at startup or if you are registering this to use for platform experiments.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What does this do?")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It caches the feature values to disk using temporary prefs so that they\u2019re available as soon as user prefs are initialized and loaded, so they\u2019re available earlier in browser initialization and also helps make them available to gecko more easily."),(0,o.kt)("li",{parentName:"ul"},"IsEarlyStartup means we persist the experiment data in prefs so you can a) use them from c++ or b) use the JS experiment API before we've loaded experiments from disk.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"So why don't I always use Early Startup to be sure my feature is controllable by an experiment early enough?")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You have to reconcile storing state in multiple places, it's only needed for a specific set of features in specific circumstances, so for the rest of them it's much safer to not touch the pref store at all and only worry about a single source of state."),(0,o.kt)("li",{parentName:"ul"},"It also makes tests more annoying because if you don't clean them up properly it's easy to break adjacent tests")))}d.isMDXComponent=!0}}]);