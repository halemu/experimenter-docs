(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[8384],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return r?o.createElement(f,a(a({ref:t},c),{},{components:r})):o.createElement(f,a({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8048:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var o=r(2122),n=r(9756),i=(r(7294),r(3905)),a={id:"intro",title:"Welcome",sidebar_label:"Introduction",slug:"/"},l=void 0,s={unversionedId:"homepage/intro",id:"homepage/intro",isDocsHomePage:!1,title:"Welcome",description:"Welcome to the Experimenter documentation hub, your central resource for A/B experiments and feature rollouts in Firefox Mobile and Desktop. You should find these documents helpful if you are:",source:"@site/docs/homepage/intro.md",sourceDirName:"homepage",slug:"/",permalink:"/",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/homepage/intro.md",tags:[],version:"current",frontMatter:{id:"intro",title:"Welcome",sidebar_label:"Introduction",slug:"/"},sidebar:"sidebar",next:{title:"Finding Help",permalink:"/help"}},u=[{value:"What is covered here?",id:"what-is-covered-here",children:[]},{value:"What other tools exist",id:"what-other-tools-exist",children:[]},{value:"About these docs",id:"about-these-docs",children:[]}],c={toc:u};function p(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Welcome to the ",(0,i.kt)("a",{parentName:"p",href:"https://experimenter.services.mozilla.com/nimbus/"},"Experimenter")," documentation hub, your central resource for A/B experiments and feature rollouts in Firefox Mobile and Desktop. You should find these documents helpful if you are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("strong",{parentName:"li"},"product manager")," and you have a hypothesis you want to test or a feature you'd like to safely release."),(0,i.kt)("li",{parentName:"ul"},"An ",(0,i.kt)("strong",{parentName:"li"},"engineer")," who needs to implement an experiment or feature rollout in your client"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("strong",{parentName:"li"},"data scientist")," helping to design and interpret experiment results"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("strong",{parentName:"li"},"Mozilla leader")," who would like insight into completed and ongoing experiments and rollouts.")),(0,i.kt)("h2",{id:"what-is-covered-here"},"What is covered here?"),(0,i.kt)("p",null,"These documents are specific to the Mozilla experimentation program known as ",(0,i.kt)("strong",{parentName:"p"},"Nimbus"),".  Nimbus experimentation and support is currently available for our Firefox Desktop and Mobile browser applications.  "),(0,i.kt)("p",null,"Our platform code is all open-source however, we do not offer support or services to 3rd party consumers. Some documentation links may only be available to Mozilla employees and NDA contributors."),(0,i.kt)("h2",{id:"what-other-tools-exist"},"What other tools exist"),(0,i.kt)("p",null,"The following projects have bespoke tools for experimentation.  These are not included as part of this documentation with the exception of a ",(0,i.kt)("a",{parentName:"p",href:"desktop-migration-guide"},"migration guide from Normandy to Nimbus")," for engineers."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Firefox Desktop (legacy experimentation): ",(0,i.kt)("a",{parentName:"li",href:"https://wiki.mozilla.org/Firefox/Normandy/PreferenceRollout"},"Normandy")),(0,i.kt)("li",{parentName:"ul"},"Mozilla Websites (a/b experiments): ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mozilla/bedrock"},"Bedrock")),(0,i.kt)("li",{parentName:"ul"},"Firefox Accounts (limited content server): ",(0,i.kt)("a",{parentName:"li",href:"https://mozilla.github.io/ecosystem-platform/reference/experiments-ab-testing"},"Fxa docs"))),(0,i.kt)("h2",{id:"about-these-docs"},"About these docs"),(0,i.kt)("p",null,"This website is built using ",(0,i.kt)("a",{parentName:"p",href:"https://v2.docusaurus.io/"},"Docusaurus"),". If you'd like to edit or add to them, check out the ",(0,i.kt)("a",{parentName:"p",href:"/contributing"},"Contributing")," page."))}p.isMDXComponent=!0}}]);