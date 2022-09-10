"use strict";(self.webpackChunkboss_wiki=self.webpackChunkboss_wiki||[]).push([[3117],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=p(n),m=c,g=f["".concat(l,".").concat(m)]||f[m]||s[m]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=n.length,o=new Array(i);o[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:c,o[1]=a;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6469:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=n(7462),c=(n(7294),n(3905));const i={},o=void 0,a={unversionedId:"tech/c++/cin \u4e0e getline \u6df7\u7528",id:"tech/c++/cin \u4e0e getline \u6df7\u7528",title:"cin \u4e0e getline \u6df7\u7528",description:"\u5f53cin>>\u4ece\u7f13\u51b2\u533a\u4e2d\u8bfb\u53d6\u6570\u636e\u65f6\uff0c\u82e5\u7f13\u51b2\u533a\u4e2d\u7b2c\u4e00\u4e2a\u5b57\u7b26\u662f\u7a7a\u683c\u3001tab\u6216\u6362\u884c\u8fd9\u4e9b\u5206\u9694\u7b26\u65f6\uff0ccin>> \u4f1a\u5c06\u5176\u5ffd\u7565\u5e76\u6e05\u9664\uff0c\u7ee7\u7eed\u8bfb\u53d6\u4e0b\u4e00\u4e2a\u5b57\u7b26\uff0c\u82e5\u7f13\u51b2\u533a\u4e3a\u7a7a\uff0c\u5219\u7ee7\u7eed\u7b49\u5f85\u3002\u4f46\u662f\u5982\u679c\u8bfb\u53d6\u6210\u529f\uff0c\u5b57\u7b26\u540e\u9762\u7684\u5206\u9694\u7b26\u662f\u6b8b\u7559\u5728\u7f13\u51b2\u533a\u7684\uff0ccin>>\u4e0d\u505a\u5904\u7406\u3002",source:"@site/docs/tech/c++/cin \u4e0e getline \u6df7\u7528.md",sourceDirName:"tech/c++",slug:"/tech/c++/cin \u4e0e getline \u6df7\u7528",permalink:"/docs/tech/c++/cin \u4e0e getline \u6df7\u7528",draft:!1,editUrl:"https://github.com/dontnet-wuenze/Wiki_Docusaurus/edit/master/docs/tech/c++/cin \u4e0e getline \u6df7\u7528.md",tags:[],version:"current",frontMatter:{},sidebar:"techSidebar",previous:{title:"c++ \u7ebf\u7a0b\u540c\u6b65",permalink:"/docs/tech/c++/c++ \u7ebf\u7a0b\u540c\u6b65"},next:{title:"lambda \u51fd\u6570",permalink:"/docs/tech/c++/lambda \u51fd\u6570"}},l={},p=[],u={toc:p};function s(e){let{components:t,...n}=e;return(0,c.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u5f53cin>>\u4ece\u7f13\u51b2\u533a\u4e2d\u8bfb\u53d6\u6570\u636e\u65f6\uff0c\u82e5\u7f13\u51b2\u533a\u4e2d\u7b2c\u4e00\u4e2a\u5b57\u7b26\u662f\u7a7a\u683c\u3001tab\u6216\u6362\u884c\u8fd9\u4e9b\u5206\u9694\u7b26\u65f6\uff0ccin>> \u4f1a\u5c06\u5176\u5ffd\u7565\u5e76\u6e05\u9664\uff0c\u7ee7\u7eed\u8bfb\u53d6\u4e0b\u4e00\u4e2a\u5b57\u7b26\uff0c\u82e5\u7f13\u51b2\u533a\u4e3a\u7a7a\uff0c\u5219\u7ee7\u7eed\u7b49\u5f85\u3002\u4f46\u662f\u5982\u679c\u8bfb\u53d6\u6210\u529f\uff0c\u5b57\u7b26\u540e\u9762\u7684\u5206\u9694\u7b26\u662f\u6b8b\u7559\u5728\u7f13\u51b2\u533a\u7684\uff0ccin>>\u4e0d\u505a\u5904\u7406\u3002"),(0,c.kt)("p",null,"\u4f46\u662f\uff0cgetline() \u8bfb\u53d6\u6570\u636e\u65f6\uff0c\u5e76\u975e\u50cf cin>> \u90a3\u6837\u5ffd\u7565\u7b2c\u4e00\u4e2a\u6362\u884c\u7b26\uff0cgetline()\u53d1\u73b0 cin \u7684\u7f13\u51b2\u533a\u4e2d\u6709\u4e00\u4e2a\u6b8b\u7559\u7684\u6362\u884c\u7b26\uff0c\u4e0d\u963b\u585e\u8bf7\u6c42\u952e\u76d8\u8f93\u5165\uff0c\u76f4\u63a5\u8bfb\u53d6\uff0c\u9001\u5165\u76ee\u6807\u5b57\u7b26\u4e32\u3002"),(0,c.kt)("p",null,"\u56e0\u6b64\u5982\u679c\u5728 geline() \u524d\u6709\u8fc7 cin \u7684\u64cd\u4f5c, \u53ef\u4ee5\u901a\u8fc7 cin.ignore() \u6e05\u695a\u7f13\u5b58\u533a\u6b8b\u7559\u7684\u7b26\u53f7\u3002"),(0,c.kt)("p",null,"\u793a\u4f8b:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"getline(cin, name);\ncin >> age;\ncout << name << age;\ncin.ignore();\ngetline(cin, response);\n")),(0,c.kt)("p",null,"\u5982\u679c\u6ca1\u6709 cin.ignore, \u8bfb\u53d6\u5b8c age \u540e\u4f1a\u6709 \\n \u5728\u7f13\u51b2\u533a\u4e2d, \u4e0b\u4e00\u4e2a getline \u5c31\u4f1a\u8bfb\u5165\u7f13\u51b2\u533a\u7684 \\n \u7136\u540e\u7ec8\u6b62\u3002"))}s.isMDXComponent=!0}}]);