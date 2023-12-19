"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[6604],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),m=o,h=s["".concat(c,".").concat(m)]||s[m]||f[m]||i;return t?r.createElement(h,a(a({ref:n},p),{},{components:t})):r.createElement(h,a({ref:n},p))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8571:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const i={id:"launching",title:"Launching Your Experiment",sidebar_label:"Launching",slug:"/launching"},a=void 0,l={unversionedId:"workflow/launching/launching",id:"workflow/launching/launching",title:"Launching Your Experiment",description:"After you're experiment has passed QA and you've mitigated the risks, you are ready to launch!",source:"@site/docs/workflow/launching/launching.md",sourceDirName:"workflow/launching",slug:"/launching",permalink:"/launching",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/workflow/launching/launching.md",tags:[],version:"current",frontMatter:{id:"launching",title:"Launching Your Experiment",sidebar_label:"Launching",slug:"/launching"},sidebar:"sidebar",previous:{title:"Testing on mobile",permalink:"/testing-on-mobile"},next:{title:"Monitoring",permalink:"/monitoring"}},c={},u=[],p={toc:u},s="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After you're experiment has passed QA and you've mitigated the risks, you are ready to launch!"),(0,o.kt)("p",null,"You're experiment should be in ",(0,o.kt)("a",{parentName:"p",href:"https://experimenter.info/previewing-experiments"},"Preview mode")," - from the QA testing and/or your self-test."),(0,o.kt)("p",null,'At this point you check off the questions accepting responsibility and verifying that you\'ve completed the training, then click "Request Launch"'),(0,o.kt)("p",null,"Now you follow the directions in Experimenter: Copy the URL for your experiment. Include the URL and ask for review to launch either from a reviwer on your team or go to #ask-experimenter and ask for someone to help review and approve the launch.  If none of the general reviewers approves the launch it in a couple of hours - ping again.  It is usually quite quick."))}f.isMDXComponent=!0}}]);