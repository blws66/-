webpackJsonp([0],{0:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"translateFrom"}},[n("form",{on:{submit:t.formSubmit}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.textToTranslate,expression:"textToTranslate"}],attrs:{type:"text",placeholder:"输入需要翻译的内容"},domProps:{value:t.textToTranslate},on:{input:function(e){e.target.composing||(t.textToTranslate=e.target.value)}}}),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.language,expression:"language"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.language=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"en"}},[t._v("English")]),t._v(" "),n("option",{attrs:{value:"ru"}},[t._v("Russian")]),t._v(" "),n("option",{attrs:{value:"ko"}},[t._v("Korean")]),t._v(" "),n("option",{attrs:{value:"ja"}},[t._v("Janpenese")])]),t._v(" "),n("input",{attrs:{type:"submit",value:"翻译"}})])])},staticRenderFns:[]};var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"translateOutPut"}},[e("h2",[this._v("\n       "+this._s(this.translateText1)+"\n   ")])])},staticRenderFns:[]};var a={name:"App",data:function(){return{translateText1:""}},components:{TranslateFrom:n("VU/8")({name:"translateFrom",data:function(){return{textToTranslate:"",language:"en"}},methods:{formSubmit:function(t){this.$emit("formSubmit",this.textToTranslate,this.language),t.preventDefault()}}},o,!1,function(t){n("O7ds")},"data-v-5ffd6620",null).exports,TranslateOutPut:n("VU/8")({name:"translateOutPut",props:["translateText1"]},i,!1,function(t){n("lGHO")},"data-v-d2e3cdae",null).exports},methods:{translateText:function(t,e){var n=this;this.$http.get("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180312T082701Z.431d7051335e8535.75bfb279db03d4e5c0327f8552910dcbbd916067&lang="+e+"&text="+t).then(function(t){console.log(t),n.translateText1=t.body.text[0]})}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("翻译")]),t._v(" "),n("h5",[t._v("简单，易用，便捷")]),t._v(" "),n("translateFrom",{on:{formSubmit:t.translateText}}),t._v(" "),n("translateOutPut",{domProps:{textContent:t._s(t.translateText1)}})],1)},staticRenderFns:[]};var u=n("VU/8")(a,s,!1,function(t){n("th4I")},"data-v-cff43ae0",null).exports,c=2;function f(t){this.state=c,this.value=void 0,this.deferred=[];var e=this;try{t(function(t){e.resolve(t)},function(t){e.reject(t)})}catch(t){e.reject(t)}}f.reject=function(t){return new f(function(e,n){n(t)})},f.resolve=function(t){return new f(function(e,n){e(t)})},f.all=function(t){return new f(function(e,n){var r=0,o=[];function i(n){return function(i){o[n]=i,(r+=1)===t.length&&e(o)}}0===t.length&&e(o);for(var a=0;a<t.length;a+=1)f.resolve(t[a]).then(i(a),n)})},f.race=function(t){return new f(function(e,n){for(var r=0;r<t.length;r+=1)f.resolve(t[r]).then(e,n)})};var p=f.prototype;function l(t,e){t instanceof Promise?this.promise=t:this.promise=new Promise(t.bind(e)),this.context=e}p.resolve=function(t){var e=this;if(e.state===c){if(t===e)throw new TypeError("Promise settled with itself.");var n=!1;try{var r=t&&t.then;if(null!==t&&"object"==typeof t&&"function"==typeof r)return void r.call(t,function(t){n||e.resolve(t),n=!0},function(t){n||e.reject(t),n=!0})}catch(t){return void(n||e.reject(t))}e.state=0,e.value=t,e.notify()}},p.reject=function(t){if(this.state===c){if(t===this)throw new TypeError("Promise settled with itself.");this.state=1,this.value=t,this.notify()}},p.notify=function(){var t,e=this;d(function(){if(e.state!==c)for(;e.deferred.length;){var t=e.deferred.shift(),n=t[0],r=t[1],o=t[2],i=t[3];try{0===e.state?o("function"==typeof n?n.call(void 0,e.value):e.value):1===e.state&&("function"==typeof r?o(r.call(void 0,e.value)):i(e.value))}catch(t){i(t)}}},t)},p.then=function(t,e){var n=this;return new f(function(r,o){n.deferred.push([t,e,r,o]),n.notify()})},p.catch=function(t){return this.then(void 0,t)},"undefined"==typeof Promise&&(window.Promise=f),l.all=function(t,e){return new l(Promise.all(t),e)},l.resolve=function(t,e){return new l(Promise.resolve(t),e)},l.reject=function(t,e){return new l(Promise.reject(t),e)},l.race=function(t,e){return new l(Promise.race(t),e)};var h=l.prototype;h.bind=function(t){return this.context=t,this},h.then=function(t,e){return t&&t.bind&&this.context&&(t=t.bind(this.context)),e&&e.bind&&this.context&&(e=e.bind(this.context)),new l(this.promise.then(t,e),this.context)},h.catch=function(t){return t&&t.bind&&this.context&&(t=t.bind(this.context)),new l(this.promise.catch(t),this.context)},h.finally=function(t){return this.then(function(e){return t.call(this),e},function(e){return t.call(this),Promise.reject(e)})};var d,m={}.hasOwnProperty,v=[].slice,y=!1,b="undefined"!=typeof window,g=function(t){var e=t.config,n=t.nextTick;d=n,y=e.debug||!e.silent};function T(t){return t?t.replace(/^\s*|\s*$/g,""):""}function w(t){return t?t.toLowerCase():""}var x=Array.isArray;function j(t){return"string"==typeof t}function E(t){return"function"==typeof t}function O(t){return null!==t&&"object"==typeof t}function P(t){return O(t)&&Object.getPrototypeOf(t)==Object.prototype}function $(t,e,n){var r=l.resolve(t);return arguments.length<2?r:r.then(e,n)}function _(t,e,n){return E(n=n||{})&&(n=n.call(e)),A(t.bind({$vm:e,$options:n}),t,{$options:n})}function C(t,e){var n,r;if(x(t))for(n=0;n<t.length;n++)e.call(t[n],t[n],n);else if(O(t))for(r in t)m.call(t,r)&&e.call(t[r],t[r],r);return t}var U=Object.assign||function(t){return v.call(arguments,1).forEach(function(e){R(t,e)}),t};function A(t){return v.call(arguments,1).forEach(function(e){R(t,e,!0)}),t}function R(t,e,n){for(var r in e)n&&(P(e[r])||x(e[r]))?(P(e[r])&&!P(t[r])&&(t[r]={}),x(e[r])&&!x(t[r])&&(t[r]=[]),R(t[r],e[r],n)):void 0!==e[r]&&(t[r]=e[r])}function S(t,e,n){var r=function(t){var e=["+","#",".","/",";","?","&"],n=[];return{vars:n,expand:function(r){return t.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g,function(t,o,i){if(o){var a=null,s=[];if(-1!==e.indexOf(o.charAt(0))&&(a=o.charAt(0),o=o.substr(1)),o.split(/,/g).forEach(function(t){var e=/([^:\*]*)(?::(\d+)|(\*))?/.exec(t);s.push.apply(s,function(t,e,n,r){var o=t[n],i=[];if(k(o)&&""!==o)if("string"==typeof o||"number"==typeof o||"boolean"==typeof o)o=o.toString(),r&&"*"!==r&&(o=o.substring(0,parseInt(r,10))),i.push(I(e,o,H(e)?n:null));else if("*"===r)Array.isArray(o)?o.filter(k).forEach(function(t){i.push(I(e,t,H(e)?n:null))}):Object.keys(o).forEach(function(t){k(o[t])&&i.push(I(e,o[t],t))});else{var a=[];Array.isArray(o)?o.filter(k).forEach(function(t){a.push(I(e,t))}):Object.keys(o).forEach(function(t){k(o[t])&&(a.push(encodeURIComponent(t)),a.push(I(e,o[t].toString())))}),H(e)?i.push(encodeURIComponent(n)+"="+a.join(",")):0!==a.length&&i.push(a.join(","))}else";"===e?i.push(encodeURIComponent(n)):""!==o||"&"!==e&&"?"!==e?""===o&&i.push(""):i.push(encodeURIComponent(n)+"=");return i}(r,a,e[1],e[2]||e[3])),n.push(e[1])}),a&&"+"!==a){var u=",";return"?"===a?u="&":"#"!==a&&(u=a),(0!==s.length?a:"")+s.join(u)}return s.join(",")}return F(i)})}}}(t),o=r.expand(e);return n&&n.push.apply(n,r.vars),o}function k(t){return void 0!==t&&null!==t}function H(t){return";"===t||"&"===t||"?"===t}function I(t,e,n){return e="+"===t||"#"===t?F(e):encodeURIComponent(e),n?encodeURIComponent(n)+"="+e:e}function F(t){return t.split(/(%[0-9A-Fa-f]{2})/g).map(function(t){return/%[0-9A-Fa-f]/.test(t)||(t=encodeURI(t)),t}).join("")}function N(t,e){var n,r=this||{},o=t;return j(t)&&(o={url:t,params:e}),o=A({},N.options,r.$options,o),N.transforms.forEach(function(t){j(t)&&(t=N.transform[t]),E(t)&&(n=function(t,e,n){return function(r){return t.call(n,r,e)}}(t,n,r.$vm))}),n(o)}N.options={url:"",root:null,params:{}},N.transform={template:function(t){var e=[],n=S(t.url,t.params,e);return e.forEach(function(e){delete t.params[e]}),n},query:function(t,e){var n=Object.keys(N.options.params),r={},o=e(t);return C(t.params,function(t,e){-1===n.indexOf(e)&&(r[e]=t)}),(r=N.params(r))&&(o+=(-1==o.indexOf("?")?"?":"&")+r),o},root:function(t,e){var n,r,o=e(t);return j(t.root)&&!/^(https?:)?\//.test(o)&&(n=t.root,r="/",o=(n&&void 0===r?n.replace(/\s+$/,""):n&&r?n.replace(new RegExp("["+r+"]+$"),""):n)+"/"+o),o}},N.transforms=["template","query","root"],N.params=function(t){var e=[],n=encodeURIComponent;return e.add=function(t,e){E(e)&&(e=e()),null===e&&(e=""),this.push(n(t)+"="+n(e))},function t(e,n,r){var o,i=x(n),a=P(n);C(n,function(n,s){o=O(n)||x(n),r&&(s=r+"["+(a||o?s:"")+"]"),!r&&i?e.add(n.name,n.value):o?t(e,n,s):e.add(s,n)})}(e,t),e.join("&").replace(/%20/g,"+")},N.parse=function(t){var e=document.createElement("a");return document.documentMode&&(e.href=t,t=e.href),e.href=t,{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",port:e.port,host:e.host,hostname:e.hostname,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):""}};var q=function(t){return new l(function(e){var n=new XDomainRequest,r=function(r){var o=r.type,i=0;"load"===o?i=200:"error"===o&&(i=500),e(t.respondWith(n.responseText,{status:i}))};t.abort=function(){return n.abort()},n.open(t.method,t.getUrl()),t.timeout&&(n.timeout=t.timeout),n.onload=r,n.onabort=r,n.onerror=r,n.ontimeout=r,n.onprogress=function(){},n.send(t.getBody())})},L=b&&"withCredentials"in new XMLHttpRequest;var B=function(t){return new l(function(e){var n,r,o=t.jsonp||"callback",i=t.jsonpCallback||"_jsonp"+Math.random().toString(36).substr(2),a=null;n=function(n){var o=n.type,s=0;"load"===o&&null!==a?s=200:"error"===o&&(s=500),s&&window[i]&&(delete window[i],document.body.removeChild(r)),e(t.respondWith(a,{status:s}))},window[i]=function(t){a=JSON.stringify(t)},t.abort=function(){n({type:"abort"})},t.params[o]=i,t.timeout&&setTimeout(t.abort,t.timeout),(r=document.createElement("script")).src=t.getUrl(),r.type="text/javascript",r.async=!0,r.onload=n,r.onerror=n,document.body.appendChild(r)})},J=function(t){return new l(function(e){var n=new XMLHttpRequest,r=function(r){var o=t.respondWith("response"in n?n.response:n.responseText,{status:1223===n.status?204:n.status,statusText:1223===n.status?"No Content":T(n.statusText)});C(T(n.getAllResponseHeaders()).split("\n"),function(t){o.headers.append(t.slice(0,t.indexOf(":")),t.slice(t.indexOf(":")+1))}),e(o)};t.abort=function(){return n.abort()},t.progress&&("GET"===t.method?n.addEventListener("progress",t.progress):/^(POST|PUT)$/i.test(t.method)&&n.upload.addEventListener("progress",t.progress)),n.open(t.method,t.getUrl(),!0),t.timeout&&(n.timeout=t.timeout),t.responseType&&"responseType"in n&&(n.responseType=t.responseType),(t.withCredentials||t.credentials)&&(n.withCredentials=!0),t.crossOrigin||t.headers.set("X-Requested-With","XMLHttpRequest"),t.headers.forEach(function(t,e){n.setRequestHeader(e,t)}),n.onload=r,n.onabort=r,n.onerror=r,n.ontimeout=r,n.send(t.getBody())})},M=function(t){var e=n(0);return new l(function(n){var r,o=t.getUrl(),i=t.getBody(),a=t.method,s={};t.headers.forEach(function(t,e){s[e]=t}),e(o,{body:i,method:a,headers:s}).then(r=function(e){var r=t.respondWith(e.body,{status:e.statusCode,statusText:T(e.statusMessage)});C(e.headers,function(t,e){r.headers.set(e,t)}),n(r)},function(t){return r(t.response)})})},D=function(t){var e,n=[W],r=[];function o(o){return new l(function(i,a){function s(){var r;E(e=n.pop())?e.call(t,o,u):(r="Invalid interceptor of type "+typeof e+", must be a function","undefined"!=typeof console&&y&&console.warn("[VueResource warn]: "+r),u())}function u(e){if(E(e))r.unshift(e);else if(O(e))return r.forEach(function(n){e=$(e,function(e){return n.call(t,e)||e},a)}),void $(e,i,a);s()}s()},t)}return O(t)||(t=null),o.use=function(t){n.push(t)},o};function W(t,e){e((t.client||(b?J:M))(t))}var G=function(t){var e=this;this.map={},C(t,function(t,n){return e.append(n,t)})};function V(t,e){return Object.keys(t).reduce(function(t,n){return w(e)===w(n)?n:t},null)}G.prototype.has=function(t){return null!==V(this.map,t)},G.prototype.get=function(t){var e=this.map[V(this.map,t)];return e?e.join():null},G.prototype.getAll=function(t){return this.map[V(this.map,t)]||[]},G.prototype.set=function(t,e){this.map[function(t){if(/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return T(t)}(V(this.map,t)||t)]=[T(e)]},G.prototype.append=function(t,e){var n=this.map[V(this.map,t)];n?n.push(T(e)):this.set(t,e)},G.prototype.delete=function(t){delete this.map[V(this.map,t)]},G.prototype.deleteAll=function(){this.map={}},G.prototype.forEach=function(t,e){var n=this;C(this.map,function(r,o){C(r,function(r){return t.call(e,r,o,n)})})};var X=function(t,e){var n=e.url,r=e.headers,o=e.status,i=e.statusText;this.url=n,this.ok=o>=200&&o<300,this.status=o||0,this.statusText=i||"",this.headers=new G(r),this.body=t,j(t)?this.bodyText=t:"undefined"!=typeof Blob&&t instanceof Blob&&(this.bodyBlob=t,function(t){return 0===t.type.indexOf("text")||-1!==t.type.indexOf("json")}(t)&&(this.bodyText=function(t){return new l(function(e){var n=new FileReader;n.readAsText(t),n.onload=function(){e(n.result)}})}(t)))};X.prototype.blob=function(){return $(this.bodyBlob)},X.prototype.text=function(){return $(this.bodyText)},X.prototype.json=function(){return $(this.text(),function(t){return JSON.parse(t)})},Object.defineProperty(X.prototype,"data",{get:function(){return this.body},set:function(t){this.body=t}});var z=function(t){var e;this.body=null,this.params={},U(this,t,{method:(e=t.method||"GET",e?e.toUpperCase():"")}),this.headers instanceof G||(this.headers=new G(this.headers))};z.prototype.getUrl=function(){return N(this)},z.prototype.getBody=function(){return this.body},z.prototype.respondWith=function(t,e){return new X(t,U(e||{},{url:this.getUrl()}))};var K={"Content-Type":"application/json;charset=utf-8"};function Z(t){var e=this||{},n=D(e.$vm);return function(t){v.call(arguments,1).forEach(function(e){for(var n in e)void 0===t[n]&&(t[n]=e[n])})}(t||{},e.$options,Z.options),Z.interceptors.forEach(function(t){j(t)&&(t=Z.interceptor[t]),E(t)&&n.use(t)}),n(new z(t)).then(function(t){return t.ok?t:l.reject(t)},function(t){var e;return t instanceof Error&&(e=t,"undefined"!=typeof console&&console.error(e)),l.reject(t)})}function Q(t,e,n,r){var o=this||{},i={};return C(n=U({},Q.actions,n),function(n,a){n=A({url:t,params:U({},e)},r,n),i[a]=function(){return(o.$http||Z)(function(t,e){var n,r=U({},t),o={};switch(e.length){case 2:o=e[0],n=e[1];break;case 1:/^(POST|PUT|PATCH)$/i.test(r.method)?n=e[0]:o=e[0];break;case 0:break;default:throw"Expected up to 2 arguments [params, body], got "+e.length+" arguments"}return r.body=n,r.params=U({},r.params,o),r}(n,arguments))}}),i}function Y(t){Y.installed||(g(t),t.url=N,t.http=Z,t.resource=Q,t.Promise=l,Object.defineProperties(t.prototype,{$url:{get:function(){return _(t.url,this,this.$options.url)}},$http:{get:function(){return _(t.http,this,this.$options.http)}},$resource:{get:function(){return t.resource.bind(this)}},$promise:{get:function(){var e=this;return function(n){return new t.Promise(n,e)}}}}))}Z.options={},Z.headers={put:K,post:K,patch:K,delete:K,common:{Accept:"application/json, text/plain, */*"},custom:{}},Z.interceptor={before:function(t,e){E(t.before)&&t.before.call(this,t),e()},method:function(t,e){t.emulateHTTP&&/^(PUT|PATCH|DELETE)$/i.test(t.method)&&(t.headers.set("X-HTTP-Method-Override",t.method),t.method="POST"),e()},jsonp:function(t,e){"JSONP"==t.method&&(t.client=B),e()},json:function(t,e){var n=t.headers.get("Content-Type")||"";O(t.body)&&0===n.indexOf("application/json")&&(t.body=JSON.stringify(t.body)),e(function(t){return t.bodyText?$(t.text(),function(e){if(0===(n=t.headers.get("Content-Type")||"").indexOf("application/json")||(o=(r=e).match(/^\[|^\{(?!\{)/))&&{"[":/]$/,"{":/}$/}[o[0]].test(r))try{t.body=JSON.parse(e)}catch(e){t.body=null}else t.body=e;var r,o;return t}):t})},form:function(t,e){var n;n=t.body,"undefined"!=typeof FormData&&n instanceof FormData?t.headers.delete("Content-Type"):O(t.body)&&t.emulateJSON&&(t.body=N.params(t.body),t.headers.set("Content-Type","application/x-www-form-urlencoded")),e()},header:function(t,e){C(U({},Z.headers.common,t.crossOrigin?{}:Z.headers.custom,Z.headers[w(t.method)]),function(e,n){t.headers.has(n)||t.headers.set(n,e)}),e()},cors:function(t,e){if(b){var n=N.parse(location.href),r=N.parse(t.getUrl());r.protocol===n.protocol&&r.host===n.host||(t.crossOrigin=!0,t.emulateHTTP=!1,L||(t.client=q))}e()}},Z.interceptors=["before","method","jsonp","json","form","header","cors"],["get","delete","head","jsonp"].forEach(function(t){Z[t]=function(e,n){return this(U(n||{},{url:e,method:t}))}}),["post","put","patch"].forEach(function(t){Z[t]=function(e,n,r){return this(U(r||{},{url:e,method:t,body:n}))}}),Q.actions={get:{method:"GET"},save:{method:"POST"},query:{method:"GET"},update:{method:"PUT"},remove:{method:"DELETE"},delete:{method:"DELETE"}},"undefined"!=typeof window&&window.Vue&&window.Vue.use(Y);var tt=Y;r.a.config.productionTip=!1,r.a.use(tt),new r.a({el:"#app",components:{App:u},template:"<App/>"})},O7ds:function(t,e){},lGHO:function(t,e){},th4I:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c1358a2ec7d9881a00f6.js.map