"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[9722],{4137:(e,n,t)=>{t.d(n,{Zo:()=>h,kt:()=>p});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},h=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=l(t),f=r,p=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return t?a.createElement(p,i(i({ref:n},h),{},{components:t})):a.createElement(p,i({ref:n},h))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7714:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(7462),r=(t(7294),t(4137));const o={title:"How many branches can I have?",sidebar_label:"How many branches?",slug:"/faq/branches/how-many-branches"},i=void 0,s={unversionedId:"faq/branches/how-many-branches",id:"faq/branches/how-many-branches",title:"How many branches can I have?",description:"While you might want to try out lots of variations for your experiment - each variation reduces your chance of detecting changes.  We highly recommend running as few variations as possible. Trying to cram too many changes into one experiment can lead to learning nothing about all branches.",source:"@site/docs/faq/branches/how-many-branches.mdx",sourceDirName:"faq/branches",slug:"/faq/branches/how-many-branches",permalink:"/faq/branches/how-many-branches",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/faq/branches/how-many-branches.mdx",tags:[],version:"current",frontMatter:{title:"How many branches can I have?",sidebar_label:"How many branches?",slug:"/faq/branches/how-many-branches"},sidebar:"sidebar",previous:{title:"FML Errors",permalink:"/faq/branches/fml-errors"},next:{title:"Custom configs",permalink:"/faq/custom-configs"}},c={},l=[{value:"Stat significant changes are more detectable if:",id:"stat-significant-changes-are-more-detectable-if",level:4},{value:"Before adding more branches:",id:"before-adding-more-branches",level:3}],h={toc:l},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"While you might want to try out lots of variations for your experiment - each variation reduces your chance of detecting changes.  We highly recommend running as few variations as possible. ",(0,r.kt)("em",{parentName:"p"},"Trying to cram too many changes into one experiment can lead to learning nothing about all branches."),"  "),(0,r.kt)("p",null,"This is discussed in ",(0,r.kt)("a",{parentName:"p",href:"https://mozilla-hub.atlassian.net/wiki/spaces/DATA/pages/6849684/Office+Hours"},"office hours for mobile or desktop")," when you review your experiment with data science."),(0,r.kt)("p",null,"We aim to see statistically significant changes, also know as changes that aren\u2019t likely to have been caused by chance.",(0,r.kt)("br",{parentName:"p"}),"\n","In order to find a statistically significant change we need a large enough population size that we can say \u201cwe\u2019d expect to see this same change if we repeated this experiment 95 out of 100 times\u201d.  "),(0,r.kt)("h4",{id:"stat-significant-changes-are-more-detectable-if"},"Stat significant changes are more detectable if:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The change caused a big impact in what you are measuring.  It takes fewer users per branch to detect if a 5% change was by chance, then if a 1% chance was by chance."),(0,r.kt)("li",{parentName:"ol"},"If everyone encounters the scenario your change impacts.  If you are looking to change something in PDF and only 5% of people use the PDF feature - you will need a large audience size for EACH branch.  "),(0,r.kt)("li",{parentName:"ol"},"We run on enough users so we can detect smaller changes .5-2%.   Going to more users is decided based on a few factors: 1. Risk - if there is a possible negative risk to user experience, stability, or revenue, 2. What else is running? Would you be taking up all the experimentation for an area).")),(0,r.kt)("h3",{id:"before-adding-more-branches"},"Before adding more branches:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Consider if this might be good to break into ",(0,r.kt)("strong",{parentName:"li"},"multiple experiments"),". That way you can learn the most critical aspects first with 2-4 branches before moving on to experiments with more specific learnings. "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Are there other ways to learn this?"),"  Experiments provide data.  If you are looking for qualitative feedback on what users like or if they understand the flow - consider user testing first, then run an experiment on the winners from user testing.")))}m.isMDXComponent=!0}}]);