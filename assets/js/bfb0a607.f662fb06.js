"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[860],{8619:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>w,contentTitle:()=>O,default:()=>k,frontMatter:()=>v,metadata:()=>E,toc:()=>j});var n=r(2685),i=r(7378),a=r(5318),o=r(8944),c=r(7470),s=r(1191),l=r(4715),u=r(7419);const m={cardContainer:"cardContainer_H47c",cardTitle:"cardTitle_tTnA",cardDescription:"cardDescription_rTl4"};function p(e){let{href:t,children:r}=e;return i.createElement(s.Z,{href:t,className:(0,o.Z)("card padding--lg",m.cardContainer)},r)}function d(e){let{href:t,icon:r,title:n,description:a}=e;return i.createElement(p,{href:t},i.createElement("h2",{className:(0,o.Z)("text--truncate",m.cardTitle),title:n},r," ",n),a&&i.createElement("p",{className:(0,o.Z)("text--truncate",m.cardDescription),title:a},a))}function f(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?i.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;const r=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,c.xz)(t.docId??void 0);return i.createElement(d,{href:t.href,icon:r,title:t.label,description:n?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(y,{item:t});case"category":return i.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,c.jA)();return i.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return i.createElement(g,e);const n=(0,c.MN)(t);return i.createElement("section",{className:(0,o.Z)("row",r)},n.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(b,{item:e})))))}const v={sidebar_position:2},O="Base rules",E={unversionedId:"eslint-base/index",id:"eslint-base/index",title:"Base rules",description:"This page introduces some general rules for JavaScript programming. Most of these are enforced by ESLint core rules.",source:"@site/../docs/eslint-base/index.md",sourceDirName:"eslint-base",slug:"/eslint-base/",permalink:"/js-style-guide/eslint-base/",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Guide",permalink:"/js-style-guide/"},next:{title:"General formatting",permalink:"/js-style-guide/eslint-base/formatting"}},w={},j=[],x={toc:j},T="wrapper";function k(e){let{components:t,...r}=e;return(0,a.kt)(T,(0,n.Z)({},x,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"base-rules"},"Base rules"),(0,a.kt)("p",null,"This page introduces some general rules for JavaScript programming. Most of these are enforced by ESLint core rules."),(0,a.kt)(h,{mdxType:"DocCardList"}))}k.isMDXComponent=!0},5318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=i,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);