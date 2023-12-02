"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[376],{3050:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=a(2685),n=(a(7378),a(5318));const l={sidebar_position:8},o="Collections",s={unversionedId:"eslint-base/collections",id:"eslint-base/collections",title:"Collections",description:"Arrays",source:"@site/../docs/eslint-base/collections.md",sourceDirName:"eslint-base",slug:"/eslint-base/collections",permalink:"/js-style-guide/eslint-base/collections",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"defaultSidebar",previous:{title:"Objects & classes",permalink:"/js-style-guide/eslint-base/objects-classes"},next:{title:"Async operations",permalink:"/js-style-guide/eslint-base/async"}},i={},p=[{value:"Arrays",id:"arrays",level:2},{value:"<code>array-callback-return</code>",id:"array-callback-return",level:3},{value:"<code>no-array-constructor</code>",id:"no-array-constructor",level:3},{value:"<code>no-sparse-arrays</code>",id:"no-sparse-arrays",level:3}],c={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"collections"},"Collections"),(0,n.kt)("h2",{id:"arrays"},"Arrays"),(0,n.kt)("h3",{id:"array-callback-return"},(0,n.kt)("a",{parentName:"h3",href:"https://eslint.org/docs/rules/array-callback-return"},(0,n.kt)("inlineCode",{parentName:"a"},"array-callback-return"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Severity: error"),(0,n.kt)("li",{parentName:"ul"},"Configuration:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Disallow ",(0,n.kt)("inlineCode",{parentName:"li"},"return;")," to implicitly mean ",(0,n.kt)("inlineCode",{parentName:"li"},"return undefined;")," (",(0,n.kt)("inlineCode",{parentName:"li"},"allowImplicit: false"),")"),(0,n.kt)("li",{parentName:"ul"},"Do not enforce that ",(0,n.kt)("inlineCode",{parentName:"li"},"forEach")," callback doesn't return a value (",(0,n.kt)("inlineCode",{parentName:"li"},"checkForEach: true"),")")))),(0,n.kt)("p",null,"The intention of this rule is clear: to make the usage of array methods more appropriate. ",(0,n.kt)("inlineCode",{parentName:"p"},"Array#forEach")," is the only method that's designed to be purely for its side-effects, while all the other methods should not only return a value, but also strive to be side-effect-free. Note that TypeScript doesn't check the return type of callbacks, because the callbacks are very loosely typed."),(0,n.kt)("p",null,"However, we have to give up on checking ",(0,n.kt)("inlineCode",{parentName:"p"},"forEach"),", due to false-positives with concise arrows. Consider this:"),(0,n.kt)("div",{className:"shiki-twoslash-fragment"},(0,n.kt)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#ffffff",color:"#24292f"}},(0,n.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#CF222E"}},"const"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292F"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#0550AE"}},"arr"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292F"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#CF222E"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#24292F"}}," ["),(0,n.kt)("span",{parentName:"div",style:{color:"#0550AE"}},"1"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292F"}},", "),(0,n.kt)("span",{parentName:"div",style:{color:"#0550AE"}},"2"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292F"}},", "),(0,n.kt)("span",{parentName:"div",style:{color:"#0550AE"}},"3"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292F"}},"];")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#CF222E"}},"const"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292F"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#0550AE"}},"set"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292F"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#CF222E"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#24292F"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#CF222E"}},"new"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292F"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#0550AE"}},"Set"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292F"}},"<"),(0,n.kt)("span",{parentName:"div",style:{color:"#0550AE"}},"number"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292F"}},">();")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#6E7781"}},"// checkForEach will report this case as well")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#24292F"}},"arr."),(0,n.kt)("span",{parentName:"div",style:{color:"#8250DF"}},"forEach"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292F"}},"(("),(0,n.kt)("span",{parentName:"div",style:{color:"#953800"}},"x"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292F"}},") "),(0,n.kt)("span",{parentName:"div",style:{color:"#CF222E"}},"=>"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292F"}}," set."),(0,n.kt)("span",{parentName:"div",style:{color:"#8250DF"}},"add"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292F"}},"(x));"))))),(0,n.kt)("pre",{parentName:"div",className:"shiki github-dark",style:{backgroundColor:"#0d1117",color:"#c9d1d9"}},(0,n.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"const"),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#79C0FF"}},"arr"),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," ["),(0,n.kt)("span",{parentName:"div",style:{color:"#79C0FF"}},"1"),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},", "),(0,n.kt)("span",{parentName:"div",style:{color:"#79C0FF"}},"2"),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},", "),(0,n.kt)("span",{parentName:"div",style:{color:"#79C0FF"}},"3"),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},"];")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"const"),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#79C0FF"}},"set"),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"new"),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#79C0FF"}},"Set"),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},"<"),(0,n.kt)("span",{parentName:"div",style:{color:"#79C0FF"}},"number"),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},">();")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#8B949E"}},"// checkForEach will report this case as well")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},"arr."),(0,n.kt)("span",{parentName:"div",style:{color:"#D2A8FF"}},"forEach"),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},"(("),(0,n.kt)("span",{parentName:"div",style:{color:"#FFA657"}},"x"),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},") "),(0,n.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"=>"),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," set."),(0,n.kt)("span",{parentName:"div",style:{color:"#D2A8FF"}},"add"),(0,n.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},"(x));")))))),(0,n.kt)("p",null,"Note that this rule can still false-positive when calling a method on a non-array object. However, we still set the severity as error because:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The necessity of enforcing callback return values far outweighs the risk of false-positive."),(0,n.kt)("li",{parentName:"ul"},"Most APIs that are called ",(0,n.kt)("inlineCode",{parentName:"li"},"map")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"filter")," are sanely designed and function in a similar fashion as array methods.")),(0,n.kt)("h3",{id:"no-array-constructor"},(0,n.kt)("a",{parentName:"h3",href:"https://eslint.org/docs/rules/no-array-constructor"},(0,n.kt)("inlineCode",{parentName:"a"},"no-array-constructor"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Severity: error"),(0,n.kt)("li",{parentName:"ul"},"Related:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@typescript-eslint/no-array-constructor"))))),(0,n.kt)("p",null,"We disallow the use of ",(0,n.kt)("inlineCode",{parentName:"p"},"Array()")," because you should always prefer array literals. Even in the case of ",(0,n.kt)("inlineCode",{parentName:"p"},"Array<T>()"),", you should generally use ",(0,n.kt)("inlineCode",{parentName:"p"},"[] as T[]")," instead."),(0,n.kt)("h3",{id:"no-sparse-arrays"},(0,n.kt)("a",{parentName:"h3",href:"https://eslint.org/docs/rules/no-sparse-arrays"},(0,n.kt)("inlineCode",{parentName:"a"},"no-sparse-arrays"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Severity: error")),(0,n.kt)("p",null,"Don't create sparse arrays. They are very hard to optimize and behave inconsistently with different array methods. This rule only checks array literals, but you should: (a) generally not use ",(0,n.kt)("inlineCode",{parentName:"p"},"Array(length)")," (b) don't ",(0,n.kt)("inlineCode",{parentName:"p"},"delete")," array indices (c) don't manually extend the ",(0,n.kt)("inlineCode",{parentName:"p"},"length")," property."))}m.isMDXComponent=!0},5318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(7378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),y=n,k=d["".concat(i,".").concat(y)]||d[y]||m[y]||l;return a?r.createElement(k,o(o({ref:t},c),{},{components:a})):r.createElement(k,o({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=y;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"}}]);