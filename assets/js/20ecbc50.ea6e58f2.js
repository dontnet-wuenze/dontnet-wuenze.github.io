"use strict";(self.webpackChunkboss_wiki=self.webpackChunkboss_wiki||[]).push([[3029],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>m});var a=n(7294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,r=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=c,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(y,i(i({ref:t},o),{},{components:n})):a.createElement(y,i({ref:t},o))}));function m(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:c,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7462),c=(n(7294),n(3905));const r={},i=void 0,s={unversionedId:"tech/c++/Type Casting",id:"tech/c++/Type Casting",title:"Type Casting",description:"https://cplusplus.com/doc/oldtutorial/typecasting/",source:"@site/docs/tech/c++/Type Casting.md",sourceDirName:"tech/c++",slug:"/tech/c++/Type Casting",permalink:"/docs/tech/c++/Type Casting",draft:!1,editUrl:"https://github.com/dontnet-wuenze/Wiki_Docusaurus/edit/master/docs/tech/c++/Type Casting.md",tags:[],version:"current",frontMatter:{},sidebar:"techSidebar",previous:{title:"C++",permalink:"/docs/category/c"},next:{title:"c++ {}\u63a7\u5236\u4f5c\u7528\u57df",permalink:"/docs/tech/c++/c++ {}\u63a7\u5236\u4f5c\u7528\u57df"}},p={},l=[{value:"\u9690\u5f0f\u8f6c\u6362",id:"\u9690\u5f0f\u8f6c\u6362",level:2},{value:"\u663e\u5f0f\u8f6c\u6362",id:"\u663e\u5f0f\u8f6c\u6362",level:2},{value:"dynamic_cast",id:"dynamic_cast",level:2},{value:"static_cast",id:"static_cast",level:2},{value:"reinterpret_cast",id:"reinterpret_cast",level:2},{value:"const_cast",id:"const_cast",level:2},{value:"typeid",id:"typeid",level:2}],o={toc:l};function u(e){let{components:t,...n}=e;return(0,c.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://cplusplus.com/doc/oldtutorial/typecasting/"},"https://cplusplus.com/doc/oldtutorial/typecasting/")),(0,c.kt)("p",null,"\u6211\u4eec\u9996\u5148\u6709\u4e24\u79cd\u7b80\u5355\u7684\u7c7b\u578b\u8f6c\u6362\u7684\u529e\u6cd5"),(0,c.kt)("h2",{id:"\u9690\u5f0f\u8f6c\u6362"},"\u9690\u5f0f\u8f6c\u6362"),(0,c.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u7c7b\u6709\u76f8\u5e94\u7684\u6784\u9020\u51fd\u6570, \u5219\u4f1a\u53d1\u751f\u9690\u5f0f\u8f6c\u6362"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"class A {};\nclass B { public: B (A a) {} };\n\nA a;\nB b=a;\n")),(0,c.kt)("h2",{id:"\u663e\u5f0f\u8f6c\u6362"},"\u663e\u5f0f\u8f6c\u6362"),(0,c.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 C \u98ce\u683c\u6216\u8005\u51fd\u6570\u5f0f\u7684\u8f6c\u6362"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"short a=2000;\nint b;\nb = (int) a;    // c-like cast notation\nb = int (a);    // functional notation \n")),(0,c.kt)("p",null,"c++ \u63d0\u4f9b\u4e86\u56db\u79cd\u8f6c\u6362\u65b9\u6cd5"),(0,c.kt)("p",null,"\u5206\u522b\u662f\ndynamic_cast <new_type> (expression)"),(0,c.kt)("p",null,"reinterpret_cast <new_type> (expression)"),(0,c.kt)("p",null,"static_cast <new_type> (expression)"),(0,c.kt)("p",null,"const_cast <new_type> (expression)"),(0,c.kt)("h2",{id:"dynamic_cast"},"dynamic_cast"),(0,c.kt)("p",null,"dynamic_cast\u53ea\u80fd\u7528\u4e8e\u6307\u9488\u548c\u5bf9\u8c61\u7684\u5f15\u7528\u3002"),(0,c.kt)("p",null,"\u628a\u4e00\u4e2a\u5b50\u7c7b\u8f6c\u6362\u6210\u57fa\u7c7b\u662f\u53ef\u4ee5\u7684"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"class CBase { };\nclass CDerived: public CBase { };\n\nCBase b; CBase* pb;\nCDerived d; CDerived* pd;\n\npb = dynamic_cast<CBase*>(&d);     // ok: derived-to-base\npd = dynamic_cast<CDerived*>(&b);  // wrong: base-to-derived \n")),(0,c.kt)("p",null,"\u53ea\u6709\u5f53\u4e00\u4e2a\u7c7b\u662f\u591a\u6001\u7684, \u624d\u6709\u53ef\u80fd\u5c06\u4e00\u4e2a\u57fa\u7c7b\u8f6c\u6362\u6210\u5b50\u7c7b, \u5426\u5219\u50cf\u4e0a\u9762\u7684\u7b2c\u4e8c\u53e5\u4f1a\u51fa\u73b0\u7f16\u8bd1\u9519\u8bef\u3002"),(0,c.kt)("p",null,"\u5f53\u4e00\u4e2a\u7c7b\u662f\u591a\u6001\u7684\uff0cdynamic_cast\u5728\u8fd0\u884c\u65f6\u8fdb\u884c\u7279\u6b8a\u7684\u68c0\u67e5\uff0c\u4ee5\u786e\u4fdd\u8868\u8fbe\u5f0f\u4ea7\u751f\u4e00\u4e2a\u6709\u6548\u7684\u5b8c\u6574\u7684\u8bf7\u6c42\u7c7b\u7684\u5bf9\u8c61\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},'// dynamic_cast\n#include <iostream>\n#include <exception>\nusing namespace std;\n\nclass CBase { virtual void dummy() {} };\nclass CDerived: public CBase { int a; };\n\nint main () {\n  try {\n    CBase * pba = new CDerived;\n    CBase * pbb = new CBase;\n    CDerived * pd;\n\n    pd = dynamic_cast<CDerived*>(pba);\n    if (pd==0) cout << "Null pointer on first type-cast" << endl;\n\n    pd = dynamic_cast<CDerived*>(pbb);\n    if (pd==0) cout << "Null pointer on second type-cast" << endl;\n\n  } catch (exception& e) {cout << "Exception: " << e.what();}\n  return 0;\n}\n')),(0,c.kt)("h2",{id:"static_cast"},"static_cast"),(0,c.kt)("p",null,"static_cast \u53ef\u4ee5\u6267\u884c\u4ece\u57fa\u7c7b\u5230\u5b50\u7c7b\u7684\u8f6c\u6362\u800c\u4e0d\u8fdb\u884c\u5b89\u5168\u68c0\u67e5\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"class CBase {};\nclass CDerived: public CBase {};\nCBase * a = new CBase;\nCDerived * b = static_cast<CDerived*>(a);\n")),(0,c.kt)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u4f1a\u5bfc\u81f4\u8fd0\u884c\u65f6\u9519\u8bef\u3002"),(0,c.kt)("h2",{id:"reinterpret_cast"},"reinterpret_cast"),(0,c.kt)("p",null,"reinterpret_cast\u5c06\u4efb\u4f55\u6307\u9488\u7c7b\u578b\u8f6c\u6362\u4e3a\u4efb\u4f55\u5176\u4ed6\u6307\u9488\u7c7b\u578b\uff0c\u751a\u81f3\u662f\u4e0d\u76f8\u5173\u7684\u7c7b\u7684\u6307\u9488\u3002\u64cd\u4f5c\u7ed3\u679c\u662f\u5c06\u4e00\u4e2a\u6307\u9488\u7684\u503c\u7b80\u5355\u5730\u4e8c\u8fdb\u5236\u590d\u5236\u5230\u53e6\u4e00\u4e2a\u6307\u9488\u3002\u6240\u6709\u7684\u6307\u9488\u8f6c\u6362\u90fd\u662f\u5141\u8bb8\u7684\uff1a\u6240\u6307\u5411\u7684\u5185\u5bb9\u548c\u6307\u9488\u7c7b\u578b\u672c\u8eab\u90fd\u4e0d\u88ab\u68c0\u67e5\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"class A {};\nclass B {};\nA * a = new A;\nB * b = reinterpret_cast<B*>(a);\n")),(0,c.kt)("h2",{id:"const_cast"},"const_cast"),(0,c.kt)("p",null,"const_cast \u64cd\u4f5c\u4e00\u4e2a\u5bf9\u8c61\u7684\u5e38\u91cf\uff0c\u8981\u4e48\u8f6c\u6362\u6210\u5e38\u91cf\uff0c\u8981\u4e48\u53bb\u9664\u5e38\u91cf\u3002\u4f8b\u5982\uff0c\u4e3a\u4e86\u5c06\u4e00\u4e2a\u5e38\u91cf\u53c2\u6570\u4f20\u9012\u7ed9\u4e00\u4e2a\u975e\u5e38\u91cf\u53c2\u6570\u7684\u51fd\u6570\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},'// const_cast\n#include <iostream>\nusing namespace std;\n\nvoid print (char * str)\n{\n  cout << str << endl;\n}\n\nint main () {\n  const char * c = "sample text";\n  print ( const_cast<char *> (c) );\n  return 0;\n}\n')),(0,c.kt)("h2",{id:"typeid"},"typeid"),(0,c.kt)("p",null,"\u67e5\u770b\u53d8\u91cf\u7684\u7c7b\u578b"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},'// typeid\n#include <iostream>\n#include <typeinfo>\nusing namespace std;\n\nint main () {\n  int * a,b;\n  a=0; b=0;\n  if (typeid(a) != typeid(b))\n  {\n    cout << "a and b are of different types:\\n";\n    cout << "a is: " << typeid(a).name() << \'\\n\';\n    cout << "b is: " << typeid(b).name() << \'\\n\';\n  }\n  return 0;\n}\n')),(0,c.kt)("p",null,"\u5f53typeid\u88ab\u5e94\u7528\u4e8e\u7c7b\u65f6\uff0ctypeid\u4f7f\u7528RTTI\u6765\u8ddf\u8e2a\u52a8\u6001\u5bf9\u8c61\u7684\u7c7b\u578b\u3002\u5f53typeid\u88ab\u5e94\u7528\u4e8e\u7c7b\u578b\u4e3a\u591a\u6001\u7c7b\u7684\u8868\u8fbe\u5f0f\u65f6\uff0c\u5176\u7ed3\u679c\u662f\u6700\u6d3e\u751f\u7684\u5b8c\u6574\u5bf9\u8c61\u7684\u7c7b\u578b\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},'// typeid, polymorphic class\n#include <iostream>\n#include <typeinfo>\n#include <exception>\nusing namespace std;\n\nclass CBase { virtual void f(){} };\nclass CDerived : public CBase {};\n\nint main () {\n  try {\n    CBase* a = new CBase;\n    CBase* b = new CDerived;\n    cout << "a is: " << typeid(a).name() << \'\\n\';\n    cout << "b is: " << typeid(b).name() << \'\\n\';\n    cout << "*a is: " << typeid(*a).name() << \'\\n\';\n    cout << "*b is: " << typeid(*b).name() << \'\\n\';\n  } catch (exception& e) { cout << "Exception: " << e.what() << endl; }\n  return 0;\n}\n')),(0,c.kt)("p",null,"\u6ce8\u610f, \u5f53\u7c7b\u4e2d\u6709\u865a\u51fd\u6570\u65f6, \u4f7f\u7528\u7684\u662f\u8fd0\u884c\u65f6\u52a8\u6001\u7684\u7c7b\u578b\u68c0\u67e5\u3002\u5982\u679c\u7c7b\u4e2d\u6ca1\u6709\u865a\u51fd\u6570, \u5219\u662f\u9759\u6001\u7684\u7f16\u8bd1\u5668\u7684\u7c7b\u578b\u3002"))}u.isMDXComponent=!0}}]);