"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[7922],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={id:"2023-03",title:"What's Newsletter March 2023",slug:"/2023-03"},a="What's New in Nimbus March 2023",s={unversionedId:"whats-news/2023/2023-03",id:"whats-news/2023/2023-03",title:"What's Newsletter March 2023",description:"Rollouts",source:"@site/docs/whats-news/2023/2023-03.md",sourceDirName:"whats-news/2023",slug:"/2023-03",permalink:"/2023-03",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/whats-news/2023/2023-03.md",tags:[],version:"current",frontMatter:{id:"2023-03",title:"What's Newsletter March 2023",slug:"/2023-03"},sidebar:"sidebar",previous:{title:"What's Newsletter Q2 2023",permalink:"/whats-news/2023-Q2"},next:{title:"What's Newsletter June 2022",permalink:"/2022-06"}},l={},u=[{value:"Rollouts",id:"rollouts",level:3},{value:"Nimbus Gradle Plugin",id:"nimbus-gradle-plugin",level:3},{value:"Testing tooling",id:"testing-tooling",level:3},{value:"Messaging",id:"messaging",level:3},{value:"More exciting changes coming next month!",id:"more-exciting-changes-coming-next-month",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"whats-new-in-nimbus-march-2023"},"What's New in Nimbus March 2023"),(0,o.kt)("h3",{id:"rollouts"},"Rollouts"),(0,o.kt)("p",null,"Nimbus now supports edits for live rollouts! This allows owners to make changes to the population percentage and publish them. See our ",(0,o.kt)("a",{parentName:"p",href:"/deep-dives/experimenter/rollouts"},"rollouts deep-dive")," for more info!"),(0,o.kt)("h3",{id:"nimbus-gradle-plugin"},"Nimbus Gradle Plugin"),(0,o.kt)("p",null,"The Nimbus gradle plugin has been moved from Android Components to Application Services. Updated information for utilizing the plugin can be found ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/engineers/getting-started-for-android-engineers"},"here"),"."),(0,o.kt)("h3",{id:"testing-tooling"},"Testing tooling"),(0,o.kt)("p",null,"For injecting experimental feature configurations for integration tests, we now have the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added a ",(0,o.kt)("inlineCode",{parentName:"li"},"malformedConfiguration")," event for app features to report bad configurations."),(0,o.kt)("li",{parentName:"ul"},"Added a ",(0,o.kt)("inlineCode",{parentName:"li"},"record_past_event")," method to test display triggers based on the event store.")),(0,o.kt)("h3",{id:"messaging"},"Messaging"),(0,o.kt)("p",null,"We\u2019re in the last stretch of QA for adding a notification surface to the Nimbus Messaging system on Android (thank you @twhite and @mheres). For iOS, the survey surface has landed (thank you to @yrios and @roux)."),(0,o.kt)("h3",{id:"more-exciting-changes-coming-next-month"},"More exciting changes coming next month!"))}d.isMDXComponent=!0}}]);