"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[575],{9916:(e,t,a)=>{a.d(t,{xA:()=>y,yg:()=>u});var n=a(3696);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},y=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),c=l(a),g=r,u=c["".concat(p,".").concat(g)]||c[g]||d[g]||o;return a?n.createElement(u,i(i({ref:t},y),{},{components:a})):n.createElement(u,i({ref:t},y))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},1306:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(8102),r=(a(3696),a(9916));const o={sidebar_position:3},i="Type-checked ESLint rules",s={unversionedId:"typescript/type-checked",id:"typescript/type-checked",title:"Type-checked ESLint rules",description:"Operators",source:"@site/../docs/typescript/type-checked.md",sourceDirName:"typescript",slug:"/typescript/type-checked",permalink:"/js-style-guide/typescript/type-checked",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"TypeScript",permalink:"/js-style-guide/typescript/base"}},p={},l=[{value:"Operators",id:"operators",level:2},{value:"<code>dot-notation</code>",id:"dot-notation",level:3},{value:"Async operations",id:"async-operations",level:2},{value:"<code>await-thenable</code>",id:"await-thenable",level:3},{value:"Modules",id:"modules",level:2},{value:"<code>consistent-type-exports</code>",id:"consistent-type-exports",level:3}],y={toc:l},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"type-checked-eslint-rules"},"Type-checked ESLint rules"),(0,r.yg)("h2",{id:"operators"},"Operators"),(0,r.yg)("h3",{id:"dot-notation"},(0,r.yg)("a",{parentName:"h3",href:"ttps://typescript-eslint.io/rules/dot-notation/"},(0,r.yg)("inlineCode",{parentName:"a"},"dot-notation"))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Severity: off"),(0,r.yg)("li",{parentName:"ul"},"Related:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/js-style-guide/eslint-base/operators#dot-notation"},(0,r.yg)("inlineCode",{parentName:"a"},"dot-notation")))))),(0,r.yg)("p",null,"Never use bracket notation to access properties. In TypeScript, we don't use ",(0,r.yg)("inlineCode",{parentName:"p"},"private")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"protected"),", and even in such case, do not access them outside of the class (even in tests). Tests should be for public-facing behavior. We also don't enable the ",(0,r.yg)("inlineCode",{parentName:"p"},"noPropertyAccessFromIndexSignature")," option, so you should access index signatures with dot notation."),(0,r.yg)("h2",{id:"async-operations"},"Async operations"),(0,r.yg)("h3",{id:"await-thenable"},(0,r.yg)("a",{parentName:"h3",href:"https://typescript-eslint.io/rules/await-thenable/"},(0,r.yg)("inlineCode",{parentName:"a"},"await-thenable"))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Severity: error")),(0,r.yg)("p",null,"You should only await on values that may be thenable. A value that is definitely not thenable should not be awaited because it makes the code harder to track and also defers all remaining code to the next tick."),(0,r.yg)("h2",{id:"modules"},"Modules"),(0,r.yg)("h3",{id:"consistent-type-exports"},(0,r.yg)("a",{parentName:"h3",href:"https://typescript-eslint.io/rules/consistent-type-exports/"},(0,r.yg)("inlineCode",{parentName:"a"},"consistent-type-exports"))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Severity: error"),(0,r.yg)("li",{parentName:"ul"},"Configuration:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Fix with inline type specifiers (",(0,r.yg)("inlineCode",{parentName:"li"},"fixMixedExportsWithInlineTypeSpecifier: true"),")")))),(0,r.yg)("p",null,"Types should always be exported with ",(0,r.yg)("inlineCode",{parentName:"p"},"export type")," for consistency reasons. In fact, you should generally use"),(0,r.yg)("div",{className:"shiki-twoslash-fragment"},(0,r.yg)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#ffffff",color:"#24292f"}},(0,r.yg)("div",{parentName:"pre",className:"language-id"},"ts"),(0,r.yg)("div",{parentName:"pre",className:"code-container"},(0,r.yg)("code",{parentName:"div"},(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#CF222E"}},"export"),(0,r.yg)("span",{parentName:"div",style:{color:"#24292F"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#CF222E"}},"type"),(0,r.yg)("span",{parentName:"div",style:{color:"#24292F"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#953800"}},"Type1"),(0,r.yg)("span",{parentName:"div",style:{color:"#24292F"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#CF222E"}},"="),(0,r.yg)("span",{parentName:"div",style:{color:"#24292F"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#953800"}},"A"),(0,r.yg)("span",{parentName:"div",style:{color:"#24292F"}},";")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#CF222E"}},"export"),(0,r.yg)("span",{parentName:"div",style:{color:"#24292F"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#CF222E"}},"interface"),(0,r.yg)("span",{parentName:"div",style:{color:"#24292F"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#953800"}},"Type2"),(0,r.yg)("span",{parentName:"div",style:{color:"#24292F"}}," {}"))))),(0,r.yg)("pre",{parentName:"div",className:"shiki github-dark",style:{backgroundColor:"#0d1117",color:"#c9d1d9"}},(0,r.yg)("div",{parentName:"pre",className:"language-id"},"ts"),(0,r.yg)("div",{parentName:"pre",className:"code-container"},(0,r.yg)("code",{parentName:"div"},(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#FF7B72"}},"export"),(0,r.yg)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#FF7B72"}},"type"),(0,r.yg)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#FFA657"}},"Type1"),(0,r.yg)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#FF7B72"}},"="),(0,r.yg)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#FFA657"}},"A"),(0,r.yg)("span",{parentName:"div",style:{color:"#C9D1D9"}},";")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#FF7B72"}},"export"),(0,r.yg)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#FF7B72"}},"interface"),(0,r.yg)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#FFA657"}},"Type2"),(0,r.yg)("span",{parentName:"div",style:{color:"#C9D1D9"}}," {}")))))),(0,r.yg)("p",null,"Instead of a separate ",(0,r.yg)("inlineCode",{parentName:"p"},"export type { Type1, Type2 };")," statement."))}d.isMDXComponent=!0}}]);