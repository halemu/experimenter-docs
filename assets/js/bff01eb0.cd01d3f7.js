(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[691],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),c=a,f=m["".concat(u,".").concat(c)]||m[c]||d[c]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4706:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={id:"desktop-migration-guide",title:"Migration Guide (JS)",slug:"/desktop-migration-guide"},s=void 0,u={unversionedId:"desktop-migration-guide",id:"desktop-migration-guide",isDocsHomePage:!1,title:"Migration Guide (JS)",description:"This guide will help you migrate your Desktop front-end code to run experiments with Nimbus, while still being able to use preferences for default and user-override values",source:"@site/docs/desktop-migration-guide.md",sourceDirName:".",slug:"/desktop-migration-guide",permalink:"/desktop-migration-guide",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/desktop-migration-guide.md",tags:[],version:"current",frontMatter:{id:"desktop-migration-guide",title:"Migration Guide (JS)",slug:"/desktop-migration-guide"},sidebar:"sidebar",previous:{title:"Nimbus Feature API (JS and C++)",permalink:"/desktop-feature-api"},next:{title:"Desktop Rollouts",permalink:"/desktop-rollouts"}},l=[{value:"An illustrative example (about:myself)",id:"an-illustrative-example-aboutmyself",children:[]},{value:"Step 1: Add a new feature to the manifest",id:"step-1-add-a-new-feature-to-the-manifest",children:[]},{value:"Step 2: Update your feature code",id:"step-2-update-your-feature-code",children:[]},{value:"Step 3: Run tests",id:"step-3-run-tests",children:[]},{value:"FAQ",id:"faq",children:[{value:"What happens if I run a Normandy experiment and a Nimbus experiment simultaneously?",id:"what-happens-if-i-run-a-normandy-experiment-and-a-nimbus-experiment-simultaneously",children:[]}]},{value:"Links",id:"links",children:[]}],p={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide will help you migrate your Desktop front-end code to run experiments with Nimbus, while still being able to use preferences for default and user-override values"),(0,i.kt)("p",null,"Prerequisites: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your experimental variables are already instrumented with Firefox preferences"),(0,i.kt)("li",{parentName:"ul"},"You don't use the ",(0,i.kt)("inlineCode",{parentName:"li"},"user branch")," of each pref for anything other than actual user-defined values or testing (see docs on ",(0,i.kt)("a",{parentName:"li",href:"/desktop-feature-api#configuration-sources"},"order of precedence")),(0,i.kt)("li",{parentName:"ul"},"Your code can import a ",(0,i.kt)("inlineCode",{parentName:"li"},"jsm"))),(0,i.kt)("h3",{id:"an-illustrative-example-aboutmyself"},"An illustrative example (about:myself)"),(0,i.kt)("p",null,"For the purposes of this guide, we will be migrating an imaginary about page (",(0,i.kt)("inlineCode",{parentName:"p"},"about:myself"),"), which uses the following preferences defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"firefox.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'pref("browser.aboutmyself.enabled", true);\npref("browser.aboutmyself.bgcolor", "#FE8DAE");\n')),(0,i.kt)("h2",{id:"step-1-add-a-new-feature-to-the-manifest"},"Step 1: Add a new feature to the manifest"),(0,i.kt)("p",null,"First, you will need to register a new feature in ",(0,i.kt)("a",{parentName:"p",href:"https://searchfox.org/mozilla-central/source/toolkit/components/nimbus/FeatureManifest.js"},"FeatureManifest.js"),". In this case, we're creating one called ",(0,i.kt)("inlineCode",{parentName:"p"},"aboutmyself"),"."),(0,i.kt)("p",null,"Read more to find out if you want to send an ",(0,i.kt)("a",{parentName:"p",href:"/jetstream/jetstream/#enrollment-vs-exposure"},"exposure event"),". This is optional but a decision must be recorded in the manifest."),(0,i.kt)("p",null,"Each preference is registered as a ",(0,i.kt)("inlineCode",{parentName:"p"},"variable"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const FeatureManifest = {\n  aboutmyself: {\n    description: "A page that shows personal browsing stats.",\n    // Exposure is optional, in which case `hasExposure` would be false\n    // and `exposureDescription` would not be defined\n    hasExposure: true,\n    exposureDescription: "The exposure is the earliest moment that the user could be affected by the experimental treatment."\n    variables: {\n      enabled: {\n        type: "boolean",\n        fallbackPref: "browser.aboutmyself.enabled",\n      }\n      bgColor: {\n        type: "string",\n        fallbackPref: "browser.aboutmyself.bgcolor",\n      },\n    },\n  },\n};\n\n')),(0,i.kt)("h2",{id:"step-2-update-your-feature-code"},"Step 2: Update your feature code"),(0,i.kt)("p",null,"First, you will need to import ",(0,i.kt)("inlineCode",{parentName:"p"},"ExperimentAPI.jsm"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'XPCOMUtils.defineLazyModuleGetters(this, {\n  NimbusFeatures: "resource://nimbus/ExperimentAPI.jsm",\n});\n')),(0,i.kt)("p",null,"Then anywhere in your code that uses ",(0,i.kt)("inlineCode",{parentName:"p"},"Services.prefs")," to get experiment-defined values, use ",(0,i.kt)("inlineCode",{parentName:"p"},"NimbusFeatures")," instead:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'element.style.backgroundColor = Services.prefs.getBoolPref("browser.aboutmyself.bgColor");\n')),(0,i.kt)("p",null,"becomes"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'element.style.backgroundColor = NimbusFeatures.aboutmyself.getVariable("bgColor");\n')),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/desktop-feature-api#api-reference-guide"},"API reference docs")," for more details, including listening to changes."),(0,i.kt)("h2",{id:"step-3-run-tests"},"Step 3: Run tests"),(0,i.kt)("p",null,"If you've configured fallback preferences your tests should pass as written, but we recommend also reading ",(0,i.kt)("a",{parentName:"p",href:"/desktop-feature-api-testing"},"Testing Guide")," to add experiment-specific tests."),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("h3",{id:"what-happens-if-i-run-a-normandy-experiment-and-a-nimbus-experiment-simultaneously"},"What happens if I run a Normandy experiment and a Nimbus experiment simultaneously?"),(0,i.kt)("p",null,"If possible, we do not recommend you run Normandy and Nimbus experiments on the same user population simultaneously. If a user were to enroll in an experiment from both sources, the value returned would follow the rules defined in ",(0,i.kt)("a",{parentName:"p",href:"/desktop-feature-api#configuration-sources"},"Configuration Sources docs"),". (Nimbus values override default pref branch values; user pref rbanch values override Nimbus)."),(0,i.kt)("p",null,"If you have a long-running Normandy experiment during which you must launch a Nimbus experiment, you can add a custom targeting rule to exclude users from a specific experiment ID."),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://phabricator.services.mozilla.com/D118760"},"PR Example of a switch from prefs to NimbusFeatures")," (This is slightly outdated)")))}d.isMDXComponent=!0}}]);