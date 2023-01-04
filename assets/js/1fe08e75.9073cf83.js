(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[6059],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8107:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return s},default:function(){return c}});var r=n(2122),o=n(9756),l=(n(7294),n(3905)),i={},a="Local configuration for natural enrollments",u={unversionedId:"local-enrollment",id:"local-enrollment",isDocsHomePage:!1,title:"Local configuration for natural enrollments",description:"Desktop",source:"@site/docs/local-enrollment.md",sourceDirName:".",slug:"/local-enrollment",permalink:"/local-enrollment",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/local-enrollment.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Integration Test Docs",permalink:"/integration-tests"},next:{title:"If the metrics you need don\u2019t exist yet (in Core Metrics or Outcomes)?",permalink:"/faq/Metric Availability/non-guardrail-outcome"}},s=[{value:"Desktop",id:"desktop",children:[]},{value:"Instructions for Nimbus",id:"instructions-for-nimbus",children:[]},{value:"Mobile",id:"mobile",children:[]}],p={toc:s};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"local-configuration-for-natural-enrollments"},"Local configuration for natural enrollments"),(0,l.kt)("h2",{id:"desktop"},"Desktop"),(0,l.kt)("p",null,"Preferences to set in Firefox"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nimbus.debug"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"True")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"app.normandy.run_interval_seconds"),": 30"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"services.settings.server"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"http://localhost:8888/v1"))),(0,l.kt)("p",null,"Note: You can also use the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/mozilla-extensions/remote-settings-devtools"},"remote-settings-devtool")," add-on to control some of these but the ",(0,l.kt)("inlineCode",{parentName:"p"},"app.normandy.run_interval_seconds")," preference must still be set."),(0,l.kt)("h2",{id:"instructions-for-nimbus"},"Instructions for Nimbus"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Set the above preferences within Firefox"),(0,l.kt)("li",{parentName:"ol"},"Create a desktop experiment with the following settings",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"A desktop feature"),(0,l.kt)("li",{parentName:"ul"},"No advanced targeting"),(0,l.kt)("li",{parentName:"ul"},"All Locales"),(0,l.kt)("li",{parentName:"ul"},"All Regions"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Percent of clients"),": 100%"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Expected Number of Clients"),": 1 (or any number above 0)"))),(0,l.kt)("li",{parentName:"ol"},"Request Launch and Approve the experiment in Remote Settings"),(0,l.kt)("li",{parentName:"ol"},"Open the Browser Console to view the logs from \u201cRSLoader\u201d (",(0,l.kt)("inlineCode",{parentName:"li"},"RemoteSettingsExperimentLoader.Jsm"),")")),(0,l.kt)("p",null,"There should be log outputs of the RSLoader reading from remote settings and showing the JEXL evaluations being attempted. Eventually the experiment you created should be loaded and evaluated. If you are enrolled into a study with the same feature, the new experiment will not be allowed to enroll.\n5. Check ",(0,l.kt)("inlineCode",{parentName:"p"},"about:telemetry")," for an event that looks like this"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Enrollment",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"normandy  enroll    nimbus_experiment <name-of-experiment>\n"))),(0,l.kt)("li",{parentName:"ul"},"Unenrollment",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"normandy  unenroll  nimbus_experiment <name-of-experiment>\n")))),(0,l.kt)("h2",{id:"mobile"},"Mobile"),(0,l.kt)("p",null,"Coming soon!"))}c.isMDXComponent=!0}}]);