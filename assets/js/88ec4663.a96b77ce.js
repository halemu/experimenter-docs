(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[7756],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=u(t),f=i,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||o;return t?r.createElement(d,l(l({ref:n},p),{},{components:t})):r.createElement(d,l({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5082:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var r=t(2122),i=t(9756),o=(t(7294),t(3905)),l={},a="Re-enrolled in the same experiment?",c={unversionedId:"faq/Unenrollment/Reenrolling-in-experiments",id:"faq/Unenrollment/Reenrolling-in-experiments",isDocsHomePage:!1,title:"Re-enrolled in the same experiment?",description:"Question",source:"@site/docs/faq/Unenrollment/Reenrolling-in-experiments.mdx",sourceDirName:"faq/Unenrollment",slug:"/faq/Unenrollment/Reenrolling-in-experiments",permalink:"/faq/Unenrollment/Reenrolling-in-experiments",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/faq/Unenrollment/Reenrolling-in-experiments.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Feature metrics aren't there?",permalink:"/faq/Metric Availability/non-guardrail-outcome"},next:{title:"index",permalink:"/faq/index"}},u=[{value:"Question",id:"question",children:[]}],p={toc:u};function s(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"re-enrolled-in-the-same-experiment"},"Re-enrolled in the same experiment?"),(0,o.kt)("h2",{id:"question"},"Question"),(0,o.kt)("p",null,"If a client is unenrolled from an experiment (say they opt out of that experiment specifically) will they be able to enroll again if they meet the criteria?"),(0,o.kt)("p",null,"ANSWER: No, once a user is disqualified by opting out or through targeting, etc. the client keeps a record of that and won't enroll back into the same experiment"))}s.isMDXComponent=!0}}]);