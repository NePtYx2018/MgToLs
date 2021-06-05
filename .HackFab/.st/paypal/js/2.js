var requirejs,require,define;
(function(ba){function J(b){return"[object Function]"===N.call(b)}function K(b){return"[object Array]"===N.call(b)}function z(b,c){if(b){var d;for(d=0;d<b.length&&(!b[d]||!c(b[d],d,b));d+=1);}}function O(b,c){if(b){var d;for(d=b.length-1;-1<d&&(!b[d]||!c(b[d],d,b));d-=1);}}function t(b,c){return ha.call(b,c)}function m(b,c){return t(b,c)&&b[c]}function H(b,c){for(var d in b)if(t(b,d)&&c(b[d],d))break}function S(b,c,d,m){c&&H(c,function(c,l){if(d||!t(b,l))m&&"string"!==typeof c?(b[l]||(b[l]={}),S(b[l],
c,d,m)):b[l]=c});return b}function v(b,c){return function(){return c.apply(b,arguments)}}function ca(b){throw b;}function da(b){if(!b)return b;var c=ba;z(b.split("."),function(b){c=c[b]});return c}function B(b,c,d,m){c=Error(c+"\nhttp://requirejs.org/docs/errors.html#"+b);c.requireType=b;c.requireModules=m;d&&(c.originalError=d);return c}function ia(b){function c(a,f,C){var e,n,b,c,d,T,k,g=f&&f.split("/");e=g;var l=j.map,h=l&&l["*"];if(a&&"."===a.charAt(0))if(f){e=m(j.pkgs,f)?g=[f]:g.slice(0,g.length-
1);f=a=e.concat(a.split("/"));for(e=0;f[e];e+=1)if(n=f[e],"."===n)f.splice(e,1),e-=1;else if(".."===n)if(1===e&&(".."===f[2]||".."===f[0]))break;else 0<e&&(f.splice(e-1,2),e-=2);e=m(j.pkgs,f=a[0]);a=a.join("/");e&&a===f+"/"+e.main&&(a=f)}else 0===a.indexOf("./")&&(a=a.substring(2));if(C&&l&&(g||h)){f=a.split("/");for(e=f.length;0<e;e-=1){b=f.slice(0,e).join("/");if(g)for(n=g.length;0<n;n-=1)if(C=m(l,g.slice(0,n).join("/")))if(C=m(C,b)){c=C;d=e;break}if(c)break;!T&&(h&&m(h,b))&&(T=m(h,b),k=e)}!c&&
T&&(c=T,d=k);c&&(f.splice(0,d,c),a=f.join("/"))}return a}function d(a){A&&z(document.getElementsByTagName("script"),function(f){if(f.getAttribute("data-requiremodule")===a&&f.getAttribute("data-requirecontext")===k.contextName)return f.parentNode.removeChild(f),!0})}function p(a){var f=m(j.paths,a);if(f&&K(f)&&1<f.length)return d(a),f.shift(),k.require.undef(a),k.require([a]),!0}function g(a){var f,b=a?a.indexOf("!"):-1;-1<b&&(f=a.substring(0,b),a=a.substring(b+1,a.length));return[f,a]}function l(a,
f,b,e){var n,D,i=null,d=f?f.name:null,l=a,h=!0,j="";a||(h=!1,a="_@r"+(N+=1));a=g(a);i=a[0];a=a[1];i&&(i=c(i,d,e),D=m(r,i));a&&(i?j=D&&D.normalize?D.normalize(a,function(a){return c(a,d,e)}):c(a,d,e):(j=c(a,d,e),a=g(j),i=a[0],j=a[1],b=!0,n=k.nameToUrl(j)));b=i&&!D&&!b?"_unnormalized"+(O+=1):"";return{prefix:i,name:j,parentMap:f,unnormalized:!!b,url:n,originalName:l,isDefine:h,id:(i?i+"!"+j:j)+b}}function s(a){var f=a.id,b=m(q,f);b||(b=q[f]=new k.Module(a));return b}function u(a,f,b){var e=a.id,n=m(q,
e);if(t(r,e)&&(!n||n.defineEmitComplete))"defined"===f&&b(r[e]);else if(n=s(a),n.error&&"error"===f)b(n.error);else n.on(f,b)}function w(a,f){var b=a.requireModules,e=!1;if(f)f(a);else if(z(b,function(f){if(f=m(q,f))f.error=a,f.events.error&&(e=!0,f.emit("error",a))}),!e)h.onError(a)}function x(){U.length&&(ja.apply(I,[I.length-1,0].concat(U)),U=[])}function y(a){delete q[a];delete W[a]}function G(a,f,b){var e=a.map.id;a.error?a.emit("error",a.error):(f[e]=!0,z(a.depMaps,function(e,c){var d=e.id,
g=m(q,d);g&&(!a.depMatched[c]&&!b[d])&&(m(f,d)?(a.defineDep(c,r[d]),a.check()):G(g,f,b))}),b[e]=!0)}function E(){var a,f,b,e,n=(b=1E3*j.waitSeconds)&&k.startTime+b<(new Date).getTime(),c=[],i=[],g=!1,l=!0;if(!X){X=!0;H(W,function(b){a=b.map;f=a.id;if(b.enabled&&(a.isDefine||i.push(b),!b.error))if(!b.inited&&n)p(f)?g=e=!0:(c.push(f),d(f));else if(!b.inited&&(b.fetched&&a.isDefine)&&(g=!0,!a.prefix))return l=!1});if(n&&c.length)return b=B("timeout","Load timeout for modules: "+c,null,c),b.contextName=
k.contextName,w(b);l&&z(i,function(a){G(a,{},{})});if((!n||e)&&g)if((A||ea)&&!Y)Y=setTimeout(function(){Y=0;E()},50);X=!1}}function F(a){t(r,a[0])||s(l(a[0],null,!0)).init(a[1],a[2])}function L(a){var a=a.currentTarget||a.srcElement,b=k.onScriptLoad;a.detachEvent&&!Z?a.detachEvent("onreadystatechange",b):a.removeEventListener("load",b,!1);b=k.onScriptError;(!a.detachEvent||Z)&&a.removeEventListener("error",b,!1);return{node:a,id:a&&a.getAttribute("data-requiremodule")}}function M(){var a;for(x();I.length;){a=
I.shift();if(null===a[0])return w(B("mismatch","Mismatched anonymous define() module: "+a[a.length-1]));F(a)}}var X,$,k,P,Y,j={waitSeconds:7,baseUrl:"./",paths:{},pkgs:{},shim:{},config:{}},q={},W={},aa={},I=[],r={},V={},N=1,O=1;P={require:function(a){return a.require?a.require:a.require=k.makeRequire(a.map)},exports:function(a){a.usingExports=!0;if(a.map.isDefine)return a.exports?a.exports:a.exports=r[a.map.id]={}},module:function(a){return a.module?a.module:a.module={id:a.map.id,uri:a.map.url,config:function(){var b=
m(j.pkgs,a.map.id);return(b?m(j.config,a.map.id+"/"+b.main):m(j.config,a.map.id))||{}},exports:r[a.map.id]}}};$=function(a){this.events=m(aa,a.id)||{};this.map=a;this.shim=m(j.shim,a.id);this.depExports=[];this.depMaps=[];this.depMatched=[];this.pluginMaps={};this.depCount=0};$.prototype={init:function(a,b,c,e){e=e||{};if(!this.inited){this.factory=b;if(c)this.on("error",c);else this.events.error&&(c=v(this,function(a){this.emit("error",a)}));this.depMaps=a&&a.slice(0);this.errback=c;this.inited=
!0;this.ignore=e.ignore;e.enabled||this.enabled?this.enable():this.check()}},defineDep:function(a,b){this.depMatched[a]||(this.depMatched[a]=!0,this.depCount-=1,this.depExports[a]=b)},fetch:function(){if(!this.fetched){this.fetched=!0;k.startTime=(new Date).getTime();var a=this.map;if(this.shim)k.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],v(this,function(){return a.prefix?this.callPlugin():this.load()}));else return a.prefix?this.callPlugin():this.load()}},load:function(){var a=
this.map.url;V[a]||(V[a]=!0,k.load(this.map.id,a))},check:function(){if(this.enabled&&!this.enabling){var a,b,c=this.map.id;b=this.depExports;var e=this.exports,n=this.factory;if(this.inited)if(this.error)this.emit("error",this.error);else{if(!this.defining){this.defining=!0;if(1>this.depCount&&!this.defined){if(J(n)){if(this.events.error&&this.map.isDefine||h.onError!==ca)try{e=k.execCb(c,n,b,e)}catch(d){a=d}else e=k.execCb(c,n,b,e);this.map.isDefine&&((b=this.module)&&void 0!==b.exports&&b.exports!==
this.exports?e=b.exports:void 0===e&&this.usingExports&&(e=this.exports));if(a)return a.requireMap=this.map,a.requireModules=this.map.isDefine?[this.map.id]:null,a.requireType=this.map.isDefine?"define":"require",w(this.error=a)}else e=n;this.exports=e;if(this.map.isDefine&&!this.ignore&&(r[c]=e,h.onResourceLoad))h.onResourceLoad(k,this.map,this.depMaps);y(c);this.defined=!0}this.defining=!1;this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=
!0)}}else this.fetch()}},callPlugin:function(){var a=this.map,b=a.id,d=l(a.prefix);this.depMaps.push(d);u(d,"defined",v(this,function(e){var n,d;d=this.map.name;var g=this.map.parentMap?this.map.parentMap.name:null,C=k.makeRequire(a.parentMap,{enableBuildCallback:!0});if(this.map.unnormalized){if(e.normalize&&(d=e.normalize(d,function(a){return c(a,g,!0)})||""),e=l(a.prefix+"!"+d,this.map.parentMap),u(e,"defined",v(this,function(a){this.init([],function(){return a},null,{enabled:!0,ignore:!0})})),
d=m(q,e.id)){this.depMaps.push(e);if(this.events.error)d.on("error",v(this,function(a){this.emit("error",a)}));d.enable()}}else n=v(this,function(a){this.init([],function(){return a},null,{enabled:!0})}),n.error=v(this,function(a){this.inited=!0;this.error=a;a.requireModules=[b];H(q,function(a){0===a.map.id.indexOf(b+"_unnormalized")&&y(a.map.id)});w(a)}),n.fromText=v(this,function(e,c){var d=a.name,g=l(d),i=Q;c&&(e=c);i&&(Q=!1);s(g);t(j.config,b)&&(j.config[d]=j.config[b]);try{h.exec(e)}catch(D){return w(B("fromtexteval",
"fromText eval for "+b+" failed: "+D,D,[b]))}i&&(Q=!0);this.depMaps.push(g);k.completeLoad(d);C([d],n)}),e.load(a.name,C,n,j)}));k.enable(d,this);this.pluginMaps[d.id]=d},enable:function(){W[this.map.id]=this;this.enabling=this.enabled=!0;z(this.depMaps,v(this,function(a,b){var c,e;if("string"===typeof a){a=l(a,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap);this.depMaps[b]=a;if(c=m(P,a.id)){this.depExports[b]=c(this);return}this.depCount+=1;u(a,"defined",v(this,function(a){this.defineDep(b,
a);this.check()}));this.errback&&u(a,"error",v(this,this.errback))}c=a.id;e=q[c];!t(P,c)&&(e&&!e.enabled)&&k.enable(a,this)}));H(this.pluginMaps,v(this,function(a){var b=m(q,a.id);b&&!b.enabled&&k.enable(a,this)}));this.enabling=!1;this.check()},on:function(a,b){var c=this.events[a];c||(c=this.events[a]=[]);c.push(b)},emit:function(a,b){z(this.events[a],function(a){a(b)});"error"===a&&delete this.events[a]}};k={config:j,contextName:b,registry:q,defined:r,urlFetched:V,defQueue:I,Module:$,makeModuleMap:l,
nextTick:h.nextTick,onError:w,configure:function(a){a.baseUrl&&"/"!==a.baseUrl.charAt(a.baseUrl.length-1)&&(a.baseUrl+="/");var b=j.pkgs,c=j.shim,e={paths:!0,config:!0,map:!0};H(a,function(a,b){e[b]?"map"===b?(j.map||(j.map={}),S(j[b],a,!0,!0)):S(j[b],a,!0):j[b]=a});a.shim&&(H(a.shim,function(a,b){K(a)&&(a={deps:a});if((a.exports||a.init)&&!a.exportsFn)a.exportsFn=k.makeShimExports(a);c[b]=a}),j.shim=c);a.packages&&(z(a.packages,function(a){a="string"===typeof a?{name:a}:a;b[a.name]={name:a.name,
location:a.location||a.name,main:(a.main||"main").replace(ka,"").replace(fa,"")}}),j.pkgs=b);H(q,function(a,b){!a.inited&&!a.map.unnormalized&&(a.map=l(b))});if(a.deps||a.callback)k.require(a.deps||[],a.callback)},makeShimExports:function(a){return function(){var b;a.init&&(b=a.init.apply(ba,arguments));return b||a.exports&&da(a.exports)}},makeRequire:function(a,f){function d(e,c,g){var i,j;f.enableBuildCallback&&(c&&J(c))&&(c.__requireJsBuild=!0);if("string"===typeof e){if(J(c))return w(B("requireargs",
"Invalid require call"),g);if(a&&t(P,e))return P[e](q[a.id]);if(h.get)return h.get(k,e,a,d);i=l(e,a,!1,!0);i=i.id;return!t(r,i)?w(B("notloaded",'Module name "'+i+'" has not been loaded yet for context: '+b+(a?"":". Use require([])"))):r[i]}M();k.nextTick(function(){M();j=s(l(null,a));j.skipMap=f.skipMap;j.init(e,c,g,{enabled:!0});E()});return d}f=f||{};S(d,{isBrowser:A,toUrl:function(b){var d,f=b.lastIndexOf("."),g=b.split("/")[0];if(-1!==f&&(!("."===g||".."===g)||1<f))d=b.substring(f,b.length),b=
b.substring(0,f);return k.nameToUrl(c(b,a&&a.id,!0),d,!0)},defined:function(b){return t(r,l(b,a,!1,!0).id)},specified:function(b){b=l(b,a,!1,!0).id;return t(r,b)||t(q,b)}});a||(d.undef=function(b){x();var c=l(b,a,!0),d=m(q,b);delete r[b];delete V[c.url];delete aa[b];d&&(d.events.defined&&(aa[b]=d.events),y(b))});return d},enable:function(a){m(q,a.id)&&s(a).enable()},completeLoad:function(a){var b,c,e=m(j.shim,a)||{},d=e.exports;for(x();I.length;){c=I.shift();if(null===c[0]){c[0]=a;if(b)break;b=!0}else c[0]===
a&&(b=!0);F(c)}c=m(q,a);if(!b&&!t(r,a)&&c&&!c.inited){if(j.enforceDefine&&(!d||!da(d)))return p(a)?void 0:w(B("nodefine","No define call for "+a,null,[a]));F([a,e.deps||[],e.exportsFn])}E()},nameToUrl:function(a,b,c){var d,g,l,i,k,p;if(h.jsExtRegExp.test(a))i=a+(b||"");else{d=j.paths;g=j.pkgs;i=a.split("/");for(k=i.length;0<k;k-=1)if(p=i.slice(0,k).join("/"),l=m(g,p),p=m(d,p)){K(p)&&(p=p[0]);i.splice(0,k,p);break}else if(l){a=a===l.name?l.location+"/"+l.main:l.location;i.splice(0,k,a);break}i=i.join("/");
i+=b||(/\?/.test(i)||c?"":".js");i=("/"===i.charAt(0)||i.match(/^[\w\+\.\-]+:/)?"":j.baseUrl)+i}return j.urlArgs?i+((-1===i.indexOf("?")?"?":"&")+j.urlArgs):i},load:function(a,b){h.load(k,a,b)},execCb:function(a,b,c,d){return b.apply(d,c)},onScriptLoad:function(a){if("load"===a.type||la.test((a.currentTarget||a.srcElement).readyState))R=null,a=L(a),k.completeLoad(a.id)},onScriptError:function(a){var b=L(a);if(!p(b.id))return w(B("scripterror","Script error for: "+b.id,a,[b.id]))}};k.require=k.makeRequire();
return k}var h,x,y,E,L,F,R,M,s,ga,ma=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,na=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,fa=/\.js$/,ka=/^\.\//;x=Object.prototype;var N=x.toString,ha=x.hasOwnProperty,ja=Array.prototype.splice,A=!!("undefined"!==typeof window&&navigator&&window.document),ea=!A&&"undefined"!==typeof importScripts,la=A&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,Z="undefined"!==typeof opera&&"[object Opera]"===opera.toString(),G={},u={},U=[],Q=
!1;if("undefined"===typeof define){if("undefined"!==typeof requirejs){if(J(requirejs))return;u=requirejs;requirejs=void 0}"undefined"!==typeof require&&!J(require)&&(u=require,require=void 0);h=requirejs=function(b,c,d,p){var g,l="_";!K(b)&&"string"!==typeof b&&(g=b,K(c)?(b=c,c=d,d=p):b=[]);g&&g.context&&(l=g.context);(p=m(G,l))||(p=G[l]=h.s.newContext(l));g&&p.configure(g);return p.require(b,c,d)};h.config=function(b){return h(b)};h.nextTick="undefined"!==typeof setTimeout?function(b){setTimeout(b,
4)}:function(b){b()};require||(require=h);h.version="2.1.6";h.jsExtRegExp=/^\/|:|\?|\.js$/;h.isBrowser=A;x=h.s={contexts:G,newContext:ia};h({});z(["toUrl","undef","defined","specified"],function(b){h[b]=function(){var c=G._;return c.require[b].apply(c,arguments)}});if(A&&(y=x.head=document.getElementsByTagName("head")[0],E=document.getElementsByTagName("base")[0]))y=x.head=E.parentNode;h.onError=ca;h.load=function(b,c,d){var h=b&&b.config||{},g;if(A)return g=h.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml",
"html:script"):document.createElement("script"),g.type=h.scriptType||"text/javascript",g.charset="utf-8",g.async=!0,g.setAttribute("data-requirecontext",b.contextName),g.setAttribute("data-requiremodule",c),g.attachEvent&&!(g.attachEvent.toString&&0>g.attachEvent.toString().indexOf("[native code"))&&!Z?(Q=!0,g.attachEvent("onreadystatechange",b.onScriptLoad)):(g.addEventListener("load",b.onScriptLoad,!1),g.addEventListener("error",b.onScriptError,!1)),g.src=d,M=g,E?y.insertBefore(g,E):y.appendChild(g),
M=null,g;if(ea)try{importScripts(d),b.completeLoad(c)}catch(l){b.onError(B("importscripts","importScripts failed for "+c+" at "+d,l,[c]))}};A&&O(document.getElementsByTagName("script"),function(b){y||(y=b.parentNode);if(L=b.getAttribute("data-main"))return s=L,u.baseUrl||(F=s.split("/"),s=F.pop(),ga=F.length?F.join("/")+"/":"./",u.baseUrl=ga),s=s.replace(fa,""),h.jsExtRegExp.test(s)&&(s=L),u.deps=u.deps?u.deps.concat(s):[s],!0});define=function(b,c,d){var h,g;"string"!==typeof b&&(d=c,c=b,b=null);
K(c)||(d=c,c=null);!c&&J(d)&&(c=[],d.length&&(d.toString().replace(ma,"").replace(na,function(b,d){c.push(d)}),c=(1===d.length?["require"]:["require","exports","module"]).concat(c)));if(Q){if(!(h=M))R&&"interactive"===R.readyState||O(document.getElementsByTagName("script"),function(b){if("interactive"===b.readyState)return R=b}),h=R;h&&(b||(b=h.getAttribute("data-requiremodule")),g=G[h.getAttribute("data-requirecontext")])}(g?g.defQueue:U).push([b,c,d])};define.amd={jQuery:!0};h.exec=function(b){return eval(b)};
h(u)}})(this);

/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */

/*! jQuery UI - v1.10.4 - 2014-02-24
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.resizable.js, jquery.ui.button.js, jquery.ui.dialog.js, jquery.ui.slider.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

/*!
 * jQuery Validation Plugin 1.11.1
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright 2013 JÃ¶rn Zaefferer
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */

function opinionLabFn(){function siteFeedBackImage(){var e=document.createElement("img");return e.setAttribute("src",opVars.sitefb_plus_icon),e.setAttribute("alt",""),e}function popUp(e){_w.open(e,"comments","width=535,height=192,screenX="+(_sW-535)/2+",screenY="+(_sH-192)/2+",top="+(_sH-192)/2+",left="+(_sW-535)/2+",resizable=yes"+",copyhistory=yes"+",scrollbars=no")}function createLink(e){var t=document.createElement("a");return t.setAttribute("href","#"),t.innerHTML=e,_doc.getElementById("siteFeedback").appendChild(t),opVars.showSitefbIcon&&_doc.getElementById("siteFeedback").appendChild(siteFeedBackImage()),t}function _fC(_u){var _sp="%3A\\/\\/",_rp="%3A//",_aT=_sp+",\\/,\\.,-,_,"+_rp+",%2F,%2E,%2D,%5F",_aA=_aT.split(",");for(var i=0;i<5;i++)eval("_u=_u.replace(/"+_aA[i]+"/g,_aA[i+5])");return _u}var opVars=window.PAYPAL.opinionLabVars,_doc=document,_w=window,_tm=(new Date).getTime(),_sH=screen.height,_sW=screen.width;return{custom_var:"",_ht:escape(_w.location.href),_hr:_doc.referrer,_kp:0,baseurl:"",url_var:"",assignSiteCatalystVars:"",PP_O_LC:function(e){var t=this.baseurl+"&olparams="+"time1$"+_tm+"|time2$"+(new Date).getTime()+"|prev$"+_fC(escape(this._hr))+"|referer$"+_fC(this._ht)+"|height$"+_sH+"|width$"+_sW+"&custom_var="+this.custom_var;if(!e)return t;popUp(t)},O_LC:function(e){var t="https://secure.opinionlab.com/ccc01/comment_card.asp?time1="+_tm+"&time2="+(new Date).getTime()+"&prev="+_fC(escape(this._hr))+"&referer="+_fC(this._ht)+"&height="+_sH+"&width="+_sW+"&custom_var="+this.custom_var+(this.url_var!==undefined&&this.url_var.length>0?"&url_var="+_fC(escape(this.url_var)):"");if(!e)return t;popUp(t)},O_GoT:function(e){var t=createLink(e),n=this;t.onclick=function(){return n.assignSiteCatalystVars(),n.O_LC(!0),!1}},PP_O_GoT:function(e){var t=createLink(e),n=this;t.onclick=function(){return n.assignSiteCatalystVars(),n.PP_O_LC(!0),!1}},Mini_O_GoT:function(e,t){var n=document.createElement("a"),r=document.createElement("span"),i=this;n.setAttribute("href","#"),opVars.showSitefbIcon&&n.appendChild(siteFeedBackImage()),t?n.onclick=function(){return i.assignSiteCatalystVars(),i.PP_O_LC(!0),!1}:n.onclick=function(){return i.assignSiteCatalystVars(),i.O_LC(!0),!1},r.innerHTML=e,n.appendChild(r),_doc.getElementById("siteFeedback").appendChild(n)}}}function onlineOpinionPopupFn(e){function t(t){var n;n=window.open("","","top=3000,left=3000,width=1,height=1,menubar=0,scrollbars=0,resizeable=1");if(n){n.document.open;var r="";HTML_txt="<html><script language='javascript'>",HTML_txt=HTML_txt+"_hr='"+e._hr+"';",HTML_txt=HTML_txt+"_ht='"+e._ht+"';",HTML_txt=HTML_txt+"custom_var='"+e.custom_var+"';",typeof e.baseurl!="undefined"&&(HTML_txt=HTML_txt+"baseurl='"+e.baseurl+"';"),typeof e.url_var!="undefined"&&(HTML_txt=HTML_txt+"url_var='"+e.url_var+"';"),t=="ppwebscr"?r=e.PP_O_LC(!1):r=e.O_LC(!1),document.all||(HTML_txt=HTML_txt+"var _cw =window;var _copinionlabURL ='"+r+"';var _cW ="+screen.width+";var _cH ="+screen.height+";"),HTML_txt=HTML_txt+"function connect () {"+"try{"+"if( document.all ) {"+"if( window.opener.closed ){"+"window.location.replace('"+r+"');"+"} else {"+"self.close();"+"}"+"} else {"+"if( opener == null ){"+"_cw.open(_copinionlabURL, 'comments', 'width=535,height=192,screenX=' +((_cW-535)/2)+ ',screenY='+ ((_cH-192)/2) +',top='+ ((_cH-192)/2) +',left='+ ((_cW-535)/2) +',resizable=yes,copyhistory=yes,scrollbars=no');"+"setTimeout('self.close()', 5000);"+"}else{"+"self.close();"+"}"+"}"+"}catch( err ) {"+"window.location.replace('"+r+"');"+"}"+"return 0;"+"}</scr",HTML_txt=HTML_txt+"ipt><body><scr"+"ipt language='javascript'>setTimeout('connect()',1);</scr"+"ipt></body></html>",n.document.write(HTML_txt),n.document.close}}return{OpinionLabOnCloseEvent:function(r){window.onunload=function(){e.assignSiteCatalystVars();if(navigator.appName=="Microsoft Internet Explorer"){var n=window.event;navigator.userAgent.indexOf("MSIE 6.0")!==-1?n.clientX<0&&n.clientY<0&&t(r):(n.clientX<0||n.clientY<0)&&t(r)}else if(navigator.userAgent.indexOf("Firefox/3")!==-1){var i=parseFloat(window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:document.getElementsByTagName("body")[0].clientWidth),s=parseFloat(window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:document.getElementsByTagName("body")[0].clientHeight);(i<=0||s<=0)&&t(r)}else t(r)}}}}!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function y(e){var t=e.length,n=p.type(e);return"function"===n||p.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e}function x(e,t,n){if(p.isFunction(t))return p.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return p.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(S.test(t))return p.filter(t,e,n);t=p.filter(t,e)}return p.grep(e,function(e){return p.inArray(e,t)>=0!==n})}function O(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}function D(e){var t=_[e]={};return p.each(e.match(M)||[],function(e,n){t[n]=!0}),t}function H(){N.addEventListener?(N.removeEventListener("DOMContentLoaded",B,!1),e.removeEventListener("load",B,!1)):(N.detachEvent("onreadystatechange",B),e.detachEvent("onload",B))}function B(){(N.addEventListener||"load"===event.type||"complete"===N.readyState)&&(H(),p.ready())}function R(e,t,n){if(void 0===n&&1===e.nodeType){var r="data-"+t.replace(q,"-$1").toLowerCase();if(n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:I.test(n)?p.parseJSON(n):n}catch(i){}p.data(e,t,n)}else n=void 0}return n}function U(e){var t;for(t in e)if(("data"!==t||!p.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function z(e,t,r,i){if(p.acceptData(e)){var s,o,u=p.expando,a=e.nodeType,f=a?p.cache:e,l=a?e[u]:e[u]&&u;if(l&&f[l]&&(i||f[l].data)||void 0!==r||"string"!=typeof t)return l||(l=a?e[u]=n.pop()||p.guid++:u),f[l]||(f[l]=a?{}:{toJSON:p.noop}),("object"==typeof t||"function"==typeof t)&&(i?f[l]=p.extend(f[l],t):f[l].data=p.extend(f[l].data,t)),o=f[l],i||(o.data||(o.data={}),o=o.data),void 0!==r&&(o[p.camelCase(t)]=r),"string"==typeof t?(s=o[t],null==s&&(s=o[p.camelCase(t)])):s=o,s}}function W(e,t,n){if(p.acceptData(e)){var r,i,s=e.nodeType,o=s?p.cache:e,u=s?e[p.expando]:p.expando;if(o[u]){if(t&&(r=n?o[u]:o[u].data)){p.isArray(t)?t=t.concat(p.map(t,p.camelCase)):t in r?t=[t]:(t=p.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!U(r):!p.isEmptyObject(r))return}(n||(delete o[u].data,U(o[u])))&&(s?p.cleanData([e],!0):c.deleteExpando||o!=o.window?delete o[u]:o[u]=null)}}}function tt(){return!0}function nt(){return!1}function rt(){try{return N.activeElement}catch(e){}}function it(e){var t=st.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Et(e,t){var n,r,i=0,s=typeof e.getElementsByTagName!==j?e.getElementsByTagName(t||"*"):typeof e.querySelectorAll!==j?e.querySelectorAll(t||"*"):void 0;if(!s)for(s=[],n=e.childNodes||e;null!=(r=n[i]);i++)!t||p.nodeName(r,t)?s.push(r):p.merge(s,Et(r,t));return void 0===t||t&&p.nodeName(e,t)?p.merge([e],s):s}function St(e){K.test(e.type)&&(e.defaultChecked=e.checked)}function xt(e,t){return p.nodeName(e,"table")&&p.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Tt(e){return e.type=(null!==p.find.attr(e,"type"))+"/"+e.type,e}function Nt(e){var t=mt.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Ct(e,t){for(var n,r=0;null!=(n=e[r]);r++)p._data(n,"globalEval",!t||p._data(t[r],"globalEval"))}function kt(e,t){if(1===t.nodeType&&p.hasData(e)){var n,r,i,s=p._data(e),o=p._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;i>r;r++)p.event.add(t,n,u[n][r])}o.data&&(o.data=p.extend({},o.data))}}function Lt(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!c.noCloneEvent&&t[p.expando]){i=p._data(t);for(r in i.events)p.removeEvent(t,r,i.handle);t.removeAttribute(p.expando)}"script"===n&&t.text!==e.text?(Tt(t).text=e.text,Nt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),c.html5Clone&&e.innerHTML&&!p.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&K.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}function Mt(t,n){var r=p(n.createElement(t)).appendTo(n.body),i=e.getDefaultComputedStyle?e.getDefaultComputedStyle(r[0]).display:p.css(r[0],"display");return r.detach(),i}function _t(e){var t=N,n=Ot[e];return n||(n=Mt(e,t),"none"!==n&&n||(At=(At||p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=(At[0].contentWindow||At[0].contentDocument).document,t.write(),t.close(),n=Mt(e,t),At.detach()),Ot[e]=n),n}function Ft(e,t){return{get:function(){var n=e();if(null!=n)return n?void delete this.get:(this.get=t).apply(this,arguments)}}}function $t(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Vt.length;while(i--)if(t=Vt[i]+n,t in e)return t;return r}function Jt(e,t){for(var n,r,i,s=[],o=0,u=e.length;u>o;o++)r=e[o],r.style&&(s[o]=p._data(r,"olddisplay"),n=r.style.display,t?(s[o]||"none"!==n||(r.style.display=""),""===r.style.display&&$(r)&&(s[o]=p._data(r,"olddisplay",_t(r.nodeName)))):s[o]||(i=$(r),(n&&"none"!==n||!i)&&p._data(r,"olddisplay",i?n:p.css(r,"display"))));for(o=0;u>o;o++)r=e[o],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?s[o]||"":"none"));return e}function Kt(e,t,n){var r=Ut.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Qt(e,t,n,r,i){for(var s=n===(r?"border":"content")?4:"width"===t?1:0,o=0;4>s;s+=2)"margin"===n&&(o+=p.css(e,n+V[s],!0,i)),r?("content"===n&&(o-=p.css(e,"padding"+V[s],!0,i)),"margin"!==n&&(o-=p.css(e,"border"+V[s]+"Width",!0,i))):(o+=p.css(e,"padding"+V[s],!0,i),"padding"!==n&&(o+=p.css(e,"border"+V[s]+"Width",!0,i)));return o}function Gt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,s=Ht(e),o=c.boxSizing()&&"border-box"===p.css(e,"boxSizing",!1,s);if(0>=i||null==i){if(i=Bt(e,t,s),(0>i||null==i)&&(i=e.style[t]),Pt.test(i))return i;r=o&&(c.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+Qt(e,t,n||(o?"border":"content"),r,s)+"px"}function Yt(e,t,n,r,i){return new Yt.prototype.init(e,t,n,r,i)}function un(){return setTimeout(function(){Zt=void 0}),Zt=p.now()}function an(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=V[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function fn(e,t,n){for(var r,i=(on[t]||[]).concat(on["*"]),s=0,o=i.length;o>s;s++)if(r=i[s].call(n,t,e))return r}function ln(e,t,n){var r,i,s,o,u,a,f,l,h=this,d={},v=e.style,m=e.nodeType&&$(e),g=p._data(e,"fxshow");n.queue||(u=p._queueHooks(e,"fx"),null==u.unqueued&&(u.unqueued=0,a=u.empty.fire,u.empty.fire=function(){u.unqueued||a()}),u.unqueued++,h.always(function(){h.always(function(){u.unqueued--,p.queue(e,"fx").length||u.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[v.overflow,v.overflowX,v.overflowY],f=p.css(e,"display"),l=_t(e.nodeName),"none"===f&&(f=l),"inline"===f&&"none"===p.css(e,"float")&&(c.inlineBlockNeedsLayout&&"inline"!==l?v.zoom=1:v.display="inline-block")),n.overflow&&(v.overflow="hidden",c.shrinkWrapBlocks()||h.always(function(){v.overflow=n.overflow[0],v.overflowX=n.overflow[1],v.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],tn.exec(i)){if(delete t[r],s=s||"toggle"===i,i===(m?"hide":"show")){if("show"!==i||!g||void 0===g[r])continue;m=!0}d[r]=g&&g[r]||p.style(e,r)}if(!p.isEmptyObject(d)){g?"hidden"in g&&(m=g.hidden):g=p._data(e,"fxshow",{}),s&&(g.hidden=!m),m?p(e).show():h.done(function(){p(e).hide()}),h.done(function(){var t;p._removeData(e,"fxshow");for(t in d)p.style(e,t,d[t])});for(r in d)o=fn(m?g[r]:0,r,h),r in g||(g[r]=o.start,m&&(o.end=o.start,o.start="width"===r||"height"===r?1:0))}}function cn(e,t){var n,r,i,s,o;for(n in e)if(r=p.camelCase(n),i=t[r],s=e[n],p.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=p.cssHooks[r],o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}function hn(e,t,n){var r,i,s=0,o=sn.length,u=p.Deferred().always(function(){delete a.elem}),a=function(){if(i)return!1;for(var t=Zt||un(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,s=1-r,o=0,a=f.tweens.length;a>o;o++)f.tweens[o].run(s);return u.notifyWith(e,[f,s,n]),1>s&&a?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:p.extend({},t),opts:p.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Zt||un(),duration:n.duration,tweens:[],createTween:function(t,n){var r=p.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(r),r},stop:function(t){var n=0,r=t?f.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;for(cn(l,f.opts.specialEasing);o>s;s++)if(r=sn[s].call(f,e,l,f.opts))return r;return p.map(l,fn,f),p.isFunction(f.opts.start)&&f.opts.start.call(e,f),p.fx.timer(p.extend(a,{elem:e,anim:f,queue:f.opts.queue})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function In(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,s=t.toLowerCase().match(M)||[];if(p.isFunction(n))while(r=s[i++])"+"===r.charAt(0)?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,t,n,r){function o(u){var a;return i[u]=!0,p.each(e[u]||[],function(e,u){var f=u(t,n,r);return"string"!=typeof f||s||i[f]?s?!(a=f):void 0:(t.dataTypes.unshift(f),o(f),!1)}),a}var i={},s=e===Bn;return o(t.dataTypes[0])||!i["*"]&&o("*")}function Rn(e,t){var n,r,i=p.ajaxSettings.flatOptions||{};for(r in t)void 0!==t[r]&&((i[r]?e:n||(n={}))[r]=t[r]);return n&&p.extend(!0,e,n),e}function Un(e,t,n){var r,i,s,o,u=e.contents,a=e.dataTypes;while("*"===a[0])a.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(o in u)if(u[o]&&u[o].test(i)){a.unshift(o);break}if(a[0]in n)s=a[0];else{for(o in n){if(!a[0]||e.converters[o+" "+a[0]]){s=o;break}r||(r=o)}s=s||r}return s?(s!==a[0]&&a.unshift(s),n[s]):void 0}function zn(e,t,n,r){var i,s,o,u,a,f={},l=e.dataTypes.slice();if(l[1])for(o in e.converters)f[o.toLowerCase()]=e.converters[o];s=l.shift();while(s)if(e.responseFields[s]&&(n[e.responseFields[s]]=t),!a&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),a=s,s=l.shift())if("*"===s)s=a;else if("*"!==a&&a!==s){if(o=f[a+" "+s]||f["* "+s],!o)for(i in f)if(u=i.split(" "),u[1]===s&&(o=f[a+" "+u[0]]||f["* "+u[0]])){o===!0?o=f[i]:f[i]!==!0&&(s=u[0],l.unshift(u[1]));break}if(o!==!0)if(o&&e["throws"])t=o(t);else try{t=o(t)}catch(c){return{state:"parsererror",error:o?c:"No conversion from "+a+" to "+s}}}return{state:"success",data:t}}function Kn(e,t,n,r){var i;if(p.isArray(t))p.each(t,function(t,i){n||Xn.test(e)?r(e,i):Kn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==p.type(t))r(e,t);else for(i in t)Kn(e+"["+i+"]",t[i],n,r)}function Zn(){try{return new e.XMLHttpRequest}catch(t){}}function er(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function sr(e){return p.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}var n=[],r=n.slice,i=n.concat,s=n.push,o=n.indexOf,u={},a=u.toString,f=u.hasOwnProperty,l="".trim,c={},h="1.11.0",p=function(e,t){return new p.fn.init(e,t)},d=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,v=/^-ms-/,m=/-([\da-z])/gi,g=function(e,t){return t.toUpperCase()};p.fn=p.prototype={jquery:h,constructor:p,selector:"",length:0,toArray:function(){return r.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:r.call(this)},pushStack:function(e){var t=p.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return p.each(this,e,t)},map:function(e){return this.pushStack(p.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(r.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:s,sort:n.sort,splice:n.splice},p.extend=p.fn.extend=function(){var e,t,n,r,i,s,o=arguments[0]||{},u=1,a=arguments.length,f=!1;for("boolean"==typeof o&&(f=o,o=arguments[u]||{},u++),"object"==typeof o||p.isFunction(o)||(o={}),u===a&&(o=this,u--);a>u;u++)if(null!=(i=arguments[u]))for(r in i)e=o[r],n=i[r],o!==n&&(f&&n&&(p.isPlainObject(n)||(t=p.isArray(n)))?(t?(t=!1,s=e&&p.isArray(e)?e:[]):s=e&&p.isPlainObject(e)?e:{},o[r]=p.extend(f,s,n)):void 0!==n&&(o[r]=n));return o},p.extend({expando:"jQuery"+(h+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===p.type(e)},isArray:Array.isArray||function(e){return"array"===p.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return e-parseFloat(e)>=0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},isPlainObject:function(e){var t;if(!e||"object"!==p.type(e)||e.nodeType||p.isWindow(e))return!1;try{if(e.constructor&&!f.call(e,"constructor")&&!f.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}if(c.ownLast)for(t in e)return f.call(e,t);for(t in e);return void 0===t||f.call(e,t)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?u[a.call(e)]||"object":typeof e},globalEval:function(t){t&&p.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(v,"ms-").replace(m,g)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,s=e.length,o=y(e);if(n){if(o){for(;s>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(o){for(;s>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:l&&!l.call("﻿ ")?function(e){return null==e?"":l.call(e)}:function(e){return null==e?"":(e+"").replace(d,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(y(Object(e))?p.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(o)return o.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,t){var n=+t.length,r=0,i=e.length;while(n>r)e[i++]=t[r++];if(n!==n)while(void 0!==t[r])e[i++]=t[r++];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],s=0,o=e.length,u=!n;o>s;s++)r=!t(e[s],s),r!==u&&i.push(e[s]);return i},map:function(e,t,n){var r,s=0,o=e.length,u=y(e),a=[];if(u)for(;o>s;s++)r=t(e[s],s,n),null!=r&&a.push(r);else for(s in e)r=t(e[s],s,n),null!=r&&a.push(r);return i.apply([],a)},guid:1,proxy:function(e,t){var n,i,s;return"string"==typeof t&&(s=e[t],t=e,e=s),p.isFunction(e)?(n=r.call(arguments,2),i=function(){return e.apply(t||this,n.concat(r.call(arguments)))},i.guid=e.guid=e.guid||p.guid++,i):void 0},now:function(){return+(new Date)},support:c}),p.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){u["[object "+t+"]"]=t.toLowerCase()});var b=function(e){function rt(e,t,r,i){var s,o,u,a,f,h,v,m,w,E;if((t?t.ownerDocument||t:b)!==c&&l(t),t=t||c,r=r||[],!e||"string"!=typeof e)return r;if(1!==(a=t.nodeType)&&9!==a)return[];if(p&&!i){if(s=G.exec(e))if(u=s[1]){if(9===a){if(o=t.getElementById(u),!o||!o.parentNode)return r;if(o.id===u)return r.push(o),r}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(u))&&g(t,o)&&o.id===u)return r.push(o),r}else{if(s[2])return _.apply(r,t.getElementsByTagName(e)),r;if((u=s[3])&&n.getElementsByClassName&&t.getElementsByClassName)return _.apply(r,t.getElementsByClassName(u)),r}if(n.qsa&&(!d||!d.test(e))){if(m=v=y,w=t,E=9===a&&e,1===a&&"object"!==t.nodeName.toLowerCase()){h=dt(e),(v=t.getAttribute("id"))?m=v.replace(Z,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",f=h.length;while(f--)h[f]=m+vt(h[f]);w=Y.test(e)&&ht(t.parentNode)||t,E=h.join(",")}if(E)try{return _.apply(r,w.querySelectorAll(E)),r}catch(S){}finally{v||t.removeAttribute("id")}}}return xt(e.replace(R,"$1"),t,r,i)}function it(){function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}var e=[];return t}function st(e){return e[y]=!0,e}function ot(e){var t=c.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ut(e,t){var n=e.split("|"),i=e.length;while(i--)r.attrHandle[n[i]]=t}function at(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||k)-(~e.sourceIndex||k);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ct(e){return st(function(t){return t=+t,st(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ht(e){return e&&typeof e.getElementsByTagName!==C&&e}function pt(){}function dt(e,t){var n,i,s,o,u,a,f,l=x[e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=r.preFilter;while(u){(!n||(i=U.exec(u)))&&(i&&(u=u.slice(i[0].length)||u),a.push(s=[])),n=!1,(i=z.exec(u))&&(n=i.shift(),s.push({value:n,type:i[0].replace(R," ")}),u=u.slice(n.length));for(o in r.filter)!(i=$[o].exec(u))||f[o]&&!(i=f[o](i))||(n=i.shift(),s.push({value:n,type:o,matches:i}),u=u.slice(n.length));if(!n)break}return t?u.length:u?rt.error(e):x(e,a).slice(0)}function vt(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function mt(e,t,n){var r=t.dir,i=n&&"parentNode"===r,s=E++;return t.first?function(t,n,s){while(t=t[r])if(1===t.nodeType||i)return e(t,n,s)}:function(t,n,o){var u,a,f=[w,s];if(o){while(t=t[r])if((1===t.nodeType||i)&&e(t,n,o))return!0}else while(t=t[r])if(1===t.nodeType||i){if(a=t[y]||(t[y]={}),(u=a[r])&&u[0]===w&&u[1]===s)return f[2]=u[2];if(a[r]=f,f[2]=e(t,n,o))return!0}}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function yt(e,t,n,r,i){for(var s,o=[],u=0,a=e.length,f=null!=t;a>u;u++)(s=e[u])&&(!n||n(s,r,i))&&(o.push(s),f&&t.push(u));return o}function bt(e,t,n,r,i,s){return r&&!r[y]&&(r=bt(r)),i&&!i[y]&&(i=bt(i,s)),st(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||St(t||"*",u.nodeType?[u]:u,[]),m=!e||!s&&t?v:yt(v,h,e,u,a),g=n?i||(s?e:d||r)?[]:o:m;if(n&&n(m,g,u,a),r){f=yt(g,p),r(f,[],u,a),l=f.length;while(l--)(c=f[l])&&(g[p[l]]=!(m[p[l]]=c))}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?P.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=yt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):_.apply(o,g)})}function wt(e){for(var t,n,i,s=e.length,o=r.relative[e[0].type],a=o||r.relative[" "],f=o?1:0,l=mt(function(e){return e===t},a,!0),c=mt(function(e){return P.call(t,e)>-1},a,!0),h=[function(e,n,r){return!o&&(r||n!==u)||((t=n).nodeType?l(e,n,r):c(e,n,r))}];s>f;f++)if(n=r.relative[e[f].type])h=[mt(gt(h),n)];else{if(n=r.filter[e[f].type].apply(null,e[f].matches),n[y]){for(i=++f;s>i;i++)if(r.relative[e[i].type])break;return bt(f>1&&gt(h),f>1&&vt(e.slice(0,f-1).concat({value:" "===e[f-2].type?"*":""})).replace(R,"$1"),n,i>f&&wt(e.slice(f,i)),s>i&&wt(e=e.slice(i)),s>i&&vt(e))}h.push(n)}return gt(h)}function Et(e,t){var n=t.length>0,i=e.length>0,s=function(s,o,a,f,l){var h,p,d,v=0,m="0",g=s&&[],y=[],b=u,E=s||i&&r.find.TAG("*",l),S=w+=null==b?1:Math.random()||.1,x=E.length;for(l&&(u=o!==c&&o);m!==x&&null!=(h=E[m]);m++){if(i&&h){p=0;while(d=e[p++])if(d(h,o,a)){f.push(h);break}l&&(w=S)}n&&((h=!d&&h)&&v--,s&&g.push(h))}if(v+=m,n&&m!==v){p=0;while(d=t[p++])d(g,y,o,a);if(s){if(v>0)while(m--)g[m]||y[m]||(y[m]=O.call(f));y=yt(y)}_.apply(f,y),l&&!s&&y.length>0&&v+t.length>1&&rt.uniqueSort(f)}return l&&(w=S,u=b),g};return n?st(s):s}function St(e,t,n){for(var r=0,i=t.length;i>r;r++)rt(e,t[r],n);return n}function xt(e,t,i,s){var u,a,f,l,c,h=dt(e);if(!s&&1===h.length){if(a=h[0]=h[0].slice(0),a.length>2&&"ID"===(f=a[0]).type&&n.getById&&9===t.nodeType&&p&&r.relative[a[1].type]){if(t=(r.find.ID(f.matches[0].replace(et,tt),t)||[])[0],!t)return i;e=e.slice(a.shift().value.length)}u=$.needsContext.test(e)?0:a.length;while(u--){if(f=a[u],r.relative[l=f.type])break;if((c=r.find[l])&&(s=c(f.matches[0].replace(et,tt),Y.test(a[0].type)&&ht(t.parentNode)||t))){if(a.splice(u,1),e=s.length&&vt(a),!e)return _.apply(i,s),i;break}}}return o(e,h)(s,t,!p,i,Y.test(e)&&ht(t.parentNode)||t),i}var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y="sizzle"+ -(new Date),b=e.document,w=0,E=0,S=it(),x=it(),T=it(),N=function(e,t){return e===t&&(f=!0),0},C="undefined",k=1<<31,L={}.hasOwnProperty,A=[],O=A.pop,M=A.push,_=A.push,D=A.slice,P=A.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1},H="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",B="[\\x20\\t\\r\\n\\f]",j="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",F=j.replace("w","w#"),I="\\["+B+"*("+j+")"+B+"*(?:([*^$|!~]?=)"+B+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+F+")|)|)"+B+"*\\]",q=":("+j+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+I.replace(3,8)+")*)|.*)\\)|)",R=new RegExp("^"+B+"+|((?:^|[^\\\\])(?:\\\\.)*)"+B+"+$","g"),U=new RegExp("^"+B+"*,"+B+"*"),z=new RegExp("^"+B+"*([>+~]|"+B+")"+B+"*"),W=new RegExp("="+B+"*([^\\]'\"]*?)"+B+"*\\]","g"),X=new RegExp(q),V=new RegExp("^"+F+"$"),$={ID:new RegExp("^#("+j+")"),CLASS:new RegExp("^\\.("+j+")"),TAG:new RegExp("^("+j.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+B+"*(even|odd|(([+-]|)(\\d*)n|)"+B+"*(?:([+-]|)"+B+"*(\\d+)|))"+B+"*\\)|)","i"),bool:new RegExp("^(?:"+H+")$","i"),needsContext:new RegExp("^"+B+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+B+"*((?:-\\d)?\\d*)"+B+"*\\)|)(?=[^-]|$)","i")},J=/^(?:input|select|textarea|button)$/i,K=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,G=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Y=/[+~]/,Z=/'|\\/g,et=new RegExp("\\\\([\\da-f]{1,6}"+B+"?|("+B+")|.)","ig"),tt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)};try{_.apply(A=D.call(b.childNodes),b.childNodes),A[b.childNodes.length].nodeType}catch(nt){_={apply:A.length?function(e,t){M.apply(e,D.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}n=rt.support={},s=rt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},l=rt.setDocument=function(e){var t,i=e?e.ownerDocument||e:b,o=i.defaultView;return i!==c&&9===i.nodeType&&i.documentElement?(c=i,h=i.documentElement,p=!s(i),o&&o!==o.top&&(o.addEventListener?o.addEventListener("unload",function(){l()},!1):o.attachEvent&&o.attachEvent("onunload",function(){l()})),n.attributes=ot(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ot(function(e){return e.appendChild(i.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(i.getElementsByClassName)&&ot(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=ot(function(e){return h.appendChild(e).id=y,!i.getElementsByName||!i.getElementsByName(y).length}),n.getById?(r.find.ID=function(e,t){if(typeof t.getElementById!==C&&p){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},r.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(delete r.find.ID,r.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==C&&e.getAttributeNode("id");return n&&n.value===t}}),r.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==C?t.getElementsByTagName(e):void 0}:function(e,t){var n,r=[],i=0,s=t.getElementsByTagName(e);if("*"===e){while(n=s[i++])1===n.nodeType&&r.push(n);return r}return s},r.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==C&&p?t.getElementsByClassName(e):void 0},v=[],d=[],(n.qsa=Q.test(i.querySelectorAll))&&(ot(function(e){e.innerHTML="<select t=''><option selected=''></option></select>",e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+B+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||d.push("\\["+B+"*(?:value|"+H+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),ot(function(e){var t=i.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&d.push("name"+B+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=Q.test(m=h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ot(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),v.push("!=",q)}),d=d.length&&new RegExp(d.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),g=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!!r&&1===r.nodeType&&!!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},N=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r?r:(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&r||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===i||e.ownerDocument===b&&g(b,e)?-1:t===i||t.ownerDocument===b&&g(b,t)?1:a?P.call(a,e)-P.call(a,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,s=e.parentNode,o=t.parentNode,u=[e],l=[t];if(!s||!o)return e===i?-1:t===i?1:s?-1:o?1:a?P.call(a,e)-P.call(a,t):0;if(s===o)return at(e,t);n=e;while(n=n.parentNode)u.unshift(n);n=t;while(n=n.parentNode)l.unshift(n);while(u[r]===l[r])r++;return r?at(u[r],l[r]):u[r]===b?-1:l[r]===b?1:0},i):c},rt.matches=function(e,t){return rt(e,null,null,t)},rt.matchesSelector=function(e,t){if((e.ownerDocument||e)!==c&&l(e),t=t.replace(W,"='$1']"),!(!n.matchesSelector||!p||v&&v.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return rt(t,c,null,[e]).length>0},rt.contains=function(e,t){return(e.ownerDocument||e)!==c&&l(e),g(e,t)},rt.attr=function(e,t){(e.ownerDocument||e)!==c&&l(e);var i=r.attrHandle[t.toLowerCase()],s=i&&L.call(r.attrHandle,t.toLowerCase())?i(e,t,!p):void 0;return void 0!==s?s:n.attributes||!p?e.getAttribute(t):(s=e.getAttributeNode(t))&&s.specified?s.value:null},rt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},rt.uniqueSort=function(e){var t,r=[],i=0,s=0;if(f=!n.detectDuplicates,a=!n.sortStable&&e.slice(0),e.sort(N),f){while(t=e[s++])t===e[s]&&(i=r.push(s));while(i--)e.splice(r[i],1)}return a=null,e},i=rt.getText=function(e){var t,n="",r=0,s=e.nodeType;if(s){if(1===s||9===s||11===s){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===s||4===s)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},r=rt.selectors={cacheLength:50,createPseudo:st,match:$,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||rt.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&rt.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return $.CHILD.test(e[0])?null:(e[3]&&void 0!==e[4]?e[2]=e[4]:n&&X.test(n)&&(t=dt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(et,tt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=S[e+" "];return t||(t=new RegExp("(^|"+B+")"+e+"("+B+"|$)"))&&S(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==C&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=rt.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var s="nth"!==e.slice(0,3),o="last"!==e.slice(-4),u="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,a){var f,l,c,h,p,d,v=s!==o?"nextSibling":"previousSibling",m=t.parentNode,g=u&&t.nodeName.toLowerCase(),b=!a&&!u;if(m){if(s){while(v){c=t;while(c=c[v])if(u?c.nodeName.toLowerCase()===g:1===c.nodeType)return!1;d=v="only"===e&&!d&&"nextSibling"}return!0}if(d=[o?m.firstChild:m.lastChild],o&&b){l=m[y]||(m[y]={}),f=l[e]||[],p=f[0]===w&&f[1],h=f[0]===w&&f[2],c=p&&m.childNodes[p];while(c=++p&&c&&c[v]||(h=p=0)||d.pop())if(1===c.nodeType&&++h&&c===t){l[e]=[w,p,h];break}}else if(b&&(f=(t[y]||(t[y]={}))[e])&&f[0]===w)h=f[1];else while(c=++p&&c&&c[v]||(h=p=0)||d.pop())if((u?c.nodeName.toLowerCase()===g:1===c.nodeType)&&++h&&(b&&((c[y]||(c[y]={}))[e]=[w,h]),c===t))break;return h-=i,h===r||h%r===0&&h/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||rt.error("unsupported pseudo: "+e);return i[y]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?st(function(e,n){var r,s=i(e,t),o=s.length;while(o--)r=P.call(e,s[o]),e[r]=!(n[r]=s[o])}):function(e){return i(e,0,n)}):i}},pseudos:{not:st(function(e){var t=[],n=[],r=o(e.replace(R,"$1"));return r[y]?st(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)(s=o[u])&&(e[u]=!(t[u]=s))}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:st(function(e){return function(t){return rt(e,t).length>0}}),contains:st(function(e){return function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:st(function(e){return V.test(e||"")||rt.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=p?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===c.activeElement&&(!c.hasFocus||c.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return K.test(e.nodeName)},input:function(e){return J.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ct(function(){return[0]}),last:ct(function(e,t){return[t-1]}),eq:ct(function(e,t,n){return[0>n?n+t:n]}),even:ct(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:ct(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:ct(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:ct(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r);return e})}},r.pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=ft(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=lt(t);return pt.prototype=r.filters=r.pseudos,r.setFilters=new pt,o=rt.compile=function(e,t){var n,r=[],i=[],s=T[e+" "];if(!s){t||(t=dt(e)),n=t.length;while(n--)s=wt(t[n]),s[y]?r.push(s):i.push(s);s=T(e,Et(i,r))}return s},n.sortStable=y.split("").sort(N).join("")===y,n.detectDuplicates=!!f,l(),n.sortDetached=ot(function(e){return 1&e.compareDocumentPosition(c.createElement("div"))}),ot(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ut("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ot(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ut("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),ot(function(e){return null==e.getAttribute("disabled")})||ut(H,function(e,t,n){var r;return n?void 0:e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),rt}(e);p.find=b,p.expr=b.selectors,p.expr[":"]=p.expr.pseudos,p.unique=b.uniqueSort,p.text=b.getText,p.isXMLDoc=b.isXML,p.contains=b.contains;var w=p.expr.match.needsContext,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^.[^:#\[\.,]*$/;p.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?p.find.matchesSelector(r,e)?[r]:[]:p.find.matches(e,p.grep(t,function(e){return 1===e.nodeType}))},p.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(p(e).filter(function(){for(t=0;i>t;t++)if(p.contains(r[t],this))return!0}));for(t=0;i>t;t++)p.find(e,r[t],n);return n=this.pushStack(i>1?p.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},filter:function(e){return this.pushStack(x(this,e||[],!1))},not:function(e){return this.pushStack(x(this,e||[],!0))},is:function(e){return!!x(this,"string"==typeof e&&w.test(e)?p(e):e||[],!1).length}});var T,N=e.document,C=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=p.fn.init=function(e,t){var n,r;if(!e)return this;if("string"==typeof e){if(n="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:C.exec(e),!n||!n[1]&&t)return!t||t.jquery?(t||T).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof p?t[0]:t,p.merge(this,p.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:N,!0)),E.test(n[1])&&p.isPlainObject(t))for(n in t)p.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}if(r=N.getElementById(n[2]),r&&r.parentNode){if(r.id!==n[2])return T.find(e);this.length=1,this[0]=r}return this.context=N,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):p.isFunction(e)?"undefined"!=typeof T.ready?T.ready(e):e(p):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),p.makeArray(e,this))};k.prototype=p.fn,T=p(N);var L=/^(?:parents|prev(?:Until|All))/,A={children:!0,contents:!0,next:!0,prev:!0};p.extend({dir:function(e,t,n){var r=[],i=e[t];while(i&&9!==i.nodeType&&(void 0===n||1!==i.nodeType||!p(i).is(n)))1===i.nodeType&&r.push(i),i=i[t];return r},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),p.fn.extend({has:function(e){var t,n=p(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(p.contains(this,n[t]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,s=[],o=w.test(e)||"string"!=typeof e?p(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(o?o.index(n)>-1:1===n.nodeType&&p.find.matchesSelector(n,e))){s.push(n);break}return this.pushStack(s.length>1?p.unique(s):s)},index:function(e){return e?"string"==typeof e?p.inArray(this[0],p(e)):p.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(p.unique(p.merge(this.get(),p(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),p.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return p.dir(e,"parentNode")},parentsUntil:function(e,t,n){return p.dir(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return p.dir(e,"nextSibling")},prevAll:function(e){return p.dir(e,"previousSibling")},nextUntil:function(e,t,n){return p.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return p.dir(e,"previousSibling",n)},siblings:function(e){return p.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return p.sibling(e.firstChild)},contents:function(e){return p.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:p.merge([],e.childNodes)}},function(e,t){p.fn[e]=function(n,r){var i=p.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=p.filter(r,i)),this.length>1&&(A[e]||(i=p.unique(i)),L.test(e)&&(i=i.reverse())),this.pushStack(i)}});var M=/\S+/g,_={};p.Callbacks=function(e){e="string"==typeof e?_[e]||D(e):p.extend({},e);var t,n,r,i,s,o,u=[],a=!e.once&&[],f=function(c){for(n=e.memory&&c,r=!0,s=o||0,o=0,i=u.length,t=!0;u&&i>s;s++)if(u[s].apply(c[0],c[1])===!1&&e.stopOnFalse){n=!1;break}t=!1,u&&(a?a.length&&f(a.shift()):n?u=[]:l.disable())},l={add:function(){if(u){var r=u.length;!function s(t){p.each(t,function(t,n){var r=p.type(n);"function"===r?e.unique&&l.has(n)||u.push(n):n&&n.length&&"string"!==r&&s(n)})}(arguments),t?i=u.length:n&&(o=r,f(n))}return this},remove:function(){return u&&p.each(arguments,function(e,n){var r;while((r=p.inArray(n,u,r))>-1)u.splice(r,1),t&&(i>=r&&i--,s>=r&&s--)}),this},has:function(e){return e?p.inArray(e,u)>-1:!!u&&!!u.length},empty:function(){return u=[],i=0,this},disable:function(){return u=a=n=void 0,this},disabled:function(){return!u},lock:function(){return a=void 0,n||l.disable(),this},locked:function(){return!a},fireWith:function(e,n){return!u||r&&!a||(n=n||[],n=[e,n.slice?n.slice():n],t?a.push(n):f(n)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l},p.extend({Deferred:function(e){var t=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return p.Deferred(function(n){p.each(t,function(t,s){var o=p.isFunction(e[t])&&e[t];i[s[1]](function(){var e=o&&o.apply(this,arguments);e&&p.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s[0]+"With"](this===r?n.promise():this,o?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?p.extend(e,r):r}},i={};return r.pipe=r.then,p.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[1^e][2].disable,t[2][2].lock),i[s[0]]=function(){return i[s[0]+"With"](this===i?r:this,arguments),this},i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=r.call(arguments),i=n.length,s=1!==i||e&&p.isFunction(e.promise)?i:0,o=1===s?e:p.Deferred(),u=function(e,t,n){return function(i){t[e]=this,n[e]=arguments.length>1?r.call(arguments):i,n===a?o.notifyWith(t,n):--s||o.resolveWith(t,n)}},a,f,l;if(i>1)for(a=new Array(i),f=new Array(i),l=new Array(i);i>t;t++)n[t]&&p.isFunction(n[t].promise)?n[t].promise().done(u(t,l,n)).fail(o.reject).progress(u(t,f,a)):--s;return s||o.resolveWith(l,n),o.promise()}});var P;p.fn.ready=function(e){return p.ready.promise().done(e),this},p.extend({isReady:!1,readyWait:1,holdReady:function(e){e?p.readyWait++:p.ready(!0)},ready:function(e){if(e===!0?!--p.readyWait:!p.isReady){if(!N.body)return setTimeout(p.ready);p.isReady=!0,e!==!0&&--p.readyWait>0||(P.resolveWith(N,[p]),p.fn.trigger&&p(N).trigger("ready").off("ready"))}}}),p.ready.promise=function(t){if(!P)if(P=p.Deferred(),"complete"===N.readyState)setTimeout(p.ready);else if(N.addEventListener)N.addEventListener("DOMContentLoaded",B,!1),e.addEventListener("load",B,!1);else{N.attachEvent("onreadystatechange",B),e.attachEvent("onload",B);var n=!1;try{n=null==e.frameElement&&N.documentElement}catch(r){}n&&n.doScroll&&!function i(){if(!p.isReady){try{n.doScroll("left")}catch(e){return setTimeout(i,50)}H(),p.ready()}}()}return P.promise(t)};var j="undefined",F;for(F in p(c))break;c.ownLast="0"!==F,c.inlineBlockNeedsLayout=!1,p(function(){var e,t,n=N.getElementsByTagName("body")[0];n&&(e=N.createElement("div"),e.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",t=N.createElement("div"),n.appendChild(e).appendChild(t),typeof t.style.zoom!==j&&(t.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(c.inlineBlockNeedsLayout=3===t.offsetWidth)&&(n.style.zoom=1)),n.removeChild(e),e=t=null)}),function(){var e=N.createElement("div");if(null==c.deleteExpando){c.deleteExpando=!0;try{delete e.test}catch(t){c.deleteExpando=!1}}e=null}(),p.acceptData=function(e){var t=p.noData[(e.nodeName+" ").toLowerCase()],n=+e.nodeType||1;return 1!==n&&9!==n?!1:!t||t!==!0&&e.getAttribute("classid")===t};var I=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,q=/([A-Z])/g;p.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?p.cache[e[p.expando]]:e[p.expando],!!e&&!U(e)},data:function(e,t,n){return z(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return z(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)}}),p.fn.extend({data:function(e,t){var n,r,i,s=this[0],o=s&&s.attributes;if(void 0===e){if(this.length&&(i=p.data(s),1===s.nodeType&&!p._data(s,"parsedAttrs"))){n=o.length;while(n--)r=o[n].name,0===r.indexOf("data-")&&(r=p.camelCase(r.slice(5)),R(s,r,i[r]));p._data(s,"parsedAttrs",!0)}return i}return"object"==typeof e?this.each(function(){p.data(this,e)}):arguments.length>1?this.each(function(){p.data(this,e,t)}):s?R(s,e,p.data(s,e)):void 0},removeData:function(e){return this.each(function(){p.removeData(this,e)})}}),p.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=p._data(e,t),n&&(!r||p.isArray(n)?r=p._data(e,t,p.makeArray(n)):r.push(n)),r||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=p.queue(e,t),r=n.length,i=n.shift(),s=p._queueHooks(e,t),o=function(){p.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return p._data(e,n)||p._data(e,n,{empty:p.Callbacks("once memory").add(function(){p._removeData(e,t+"queue"),p._removeData(e,n)})})}}),p.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?p.queue(this[0],e):void 0===t?this:this.each(function(){var n=p.queue(this,e,t);p._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&p.dequeue(this,e)})},dequeue:function(e){return this.each(function(){p.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=p.Deferred(),s=this,o=this.length,u=function(){--r||i.resolveWith(s,[s])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(o--)n=p._data(s[o],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(u));return u(),i.promise(t)}});var X=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,V=["Top","Right","Bottom","Left"],$=function(e,t){return e=t||e,"none"===p.css(e,"display")||!p.contains(e.ownerDocument,e)},J=p.access=function(e,t,n,r,i,s,o){var u=0,a=e.length,f=null==n;if("object"===p.type(n)){i=!0;for(u in n)p.access(e,t,u,n[u],!0,s,o)}else if(void 0!==r&&(i=!0,p.isFunction(r)||(o=!0),f&&(o?(t.call(e,r),t=null):(f=t,t=function(e,t,n){return f.call(p(e),n)})),t))for(;a>u;u++)t(e[u],n,o?r:r.call(e[u],u,t(e[u],n)));return i?e:f?t.call(e):a?t(e[0],n):s},K=/^(?:checkbox|radio)$/i;!function(){var e=N.createDocumentFragment(),t=N.createElement("div"),n=N.createElement("input");if(t.setAttribute("className","t"),t.innerHTML="  <link/><table></table><a href='/a'>a</a>",c.leadingWhitespace=3===t.firstChild.nodeType,c.tbody=!t.getElementsByTagName("tbody").length,c.htmlSerialize=!!t.getElementsByTagName("link").length,c.html5Clone="<:nav></:nav>"!==N.createElement("nav").cloneNode(!0).outerHTML,n.type="checkbox",n.checked=!0,e.appendChild(n),c.appendChecked=n.checked,t.innerHTML="<textarea>x</textarea>",c.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue,e.appendChild(t),t.innerHTML="<input type='radio' checked='checked' name='t'/>",c.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,c.noCloneEvent=!0,t.attachEvent&&(t.attachEvent("onclick",function(){c.noCloneEvent=!1}),t.cloneNode(!0).click()),null==c.deleteExpando){c.deleteExpando=!0;try{delete t.test}catch(r){c.deleteExpando=!1}}e=t=n=null}(),function(){var t,n,r=N.createElement("div");for(t in{submit:!0,change:!0,focusin:!0})n="on"+t,(c[t+"Bubbles"]=n in e)||(r.setAttribute(n,"t"),c[t+"Bubbles"]=r.attributes[n].expando===!1);r=null}();var Q=/^(?:input|select|textarea)$/i,G=/^key/,Y=/^(?:mouse|contextmenu)|click/,Z=/^(?:focusinfocus|focusoutblur)$/,et=/^([^.]*)(?:\.(.+)|)$/;p.event={global:{},add:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,d,v,m,g=p._data(e);if(g){n.handler&&(a=n,n=a.handler,i=a.selector),n.guid||(n.guid=p.guid++),(o=g.events)||(o=g.events={}),(l=g.handle)||(l=g.handle=function(e){return typeof p===j||e&&p.event.triggered===e.type?void 0:p.event.dispatch.apply(l.elem,arguments)},l.elem=e),t=(t||"").match(M)||[""],u=t.length;while(u--)s=et.exec(t[u])||[],d=m=s[1],v=(s[2]||"").split(".").sort(),d&&(f=p.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=p.event.special[d]||{},c=p.extend({type:d,origType:m,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&p.expr.match.needsContext.test(i),namespace:v.join(".")},a),(h=o[d])||(h=o[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,r,v,l)!==!1||(e.addEventListener?e.addEventListener(d,l,!1):e.attachEvent&&e.attachEvent("on"+d,l))),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?h.splice(h.delegateCount++,0,c):h.push(c),p.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,d,v,m,g=p.hasData(e)&&p._data(e);if(g&&(l=g.events)){t=(t||"").match(M)||[""],f=t.length;while(f--)if(u=et.exec(t[f])||[],d=m=u[1],v=(u[2]||"").split(".").sort(),d){c=p.event.special[d]||{},d=(r?c.delegateType:c.bindType)||d,h=l[d]||[],u=u[2]&&new RegExp("(^|\\.)"+v.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=s=h.length;while(s--)o=h[s],!i&&m!==o.origType||n&&n.guid!==o.guid||u&&!u.test(o.namespace)||r&&r!==o.selector&&("**"!==r||!o.selector)||(h.splice(s,1),o.selector&&h.delegateCount--,c.remove&&c.remove.call(e,o));a&&!h.length&&(c.teardown&&c.teardown.call(e,v,g.handle)!==!1||p.removeEvent(e,d,g.handle),delete l[d])}else for(d in l)p.event.remove(e,d+t[f],n,r,!0);p.isEmptyObject(l)&&(delete g.handle,p._removeData(e,"events"))}},trigger:function(t,n,r,i){var s,o,u,a,l,c,h,d=[r||N],v=f.call(t,"type")?t.type:t,m=f.call(t,"namespace")?t.namespace.split("."):[];if(u=c=r=r||N,3!==r.nodeType&&8!==r.nodeType&&!Z.test(v+p.event.triggered)&&(v.indexOf(".")>=0&&(m=v.split("."),v=m.shift(),m.sort()),o=v.indexOf(":")<0&&"on"+v,t=t[p.expando]?t:new p.Event(v,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=m.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:p.makeArray(n,[t]),l=p.event.special[v]||{},i||!l.trigger||l.trigger.apply(r,n)!==!1)){if(!i&&!l.noBubble&&!p.isWindow(r)){for(a=l.delegateType||v,Z.test(a+v)||(u=u.parentNode);u;u=u.parentNode)d.push(u),c=u;c===(r.ownerDocument||N)&&d.push(c.defaultView||c.parentWindow||e)}h=0;while((u=d[h++])&&!t.isPropagationStopped())t.type=h>1?a:l.bindType||v,s=(p._data(u,"events")||{})[t.type]&&p._data(u,"handle"),s&&s.apply(u,n),s=o&&u[o],s&&s.apply&&p.acceptData(u)&&(t.result=s.apply(u,n),t.result===!1&&t.preventDefault());if(t.type=v,!i&&!t.isDefaultPrevented()&&(!l._default||l._default.apply(d.pop(),n)===!1)&&p.acceptData(r)&&o&&r[v]&&!p.isWindow(r)){c=r[o],c&&(r[o]=null),p.event.triggered=v;try{r[v]()}catch(g){}p.event.triggered=void 0,c&&(r[o]=c)}return t.result}},dispatch:function(e){e=p.event.fix(e);var t,n,i,s,o,u=[],a=r.call(arguments),f=(p._data(this,"events")||{})[e.type]||[],l=p.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){u=p.event.handlers.call(this,e,f),t=0;while((s=u[t++])&&!e.isPropagationStopped()){e.currentTarget=s.elem,o=0;while((i=s.handlers[o++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,n=((p.event.special[i.origType]||{}).handle||i.handler).apply(s.elem,a),void 0!==n&&(e.result=n)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,s,o=[],u=t.delegateCount,a=e.target;if(u&&a.nodeType&&(!e.button||"click"!==e.type))for(;a!=this;a=a.parentNode||this)if(1===a.nodeType&&(a.disabled!==!0||"click"!==e.type)){for(i=[],s=0;u>s;s++)r=t[s],n=r.selector+" ",void 0===i[n]&&(i[n]=r.needsContext?p(n,this).index(a)>=0:p.find(n,this,null,[a]).length),i[n]&&i.push(r);i.length&&o.push({elem:a,handlers:i})}return u<t.length&&o.push({elem:this,handlers:t.slice(u)}),o},fix:function(e){if(e[p.expando])return e;var t,n,r,i=e.type,s=e,o=this.fixHooks[i];o||(this.fixHooks[i]=o=Y.test(i)?this.mouseHooks:G.test(i)?this.keyHooks:{}),r=o.props?this.props.concat(o.props):this.props,e=new p.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=s.srcElement||N),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,o.filter?o.filter(e,s):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button,o=t.fromElement;return null==e.pageX&&null!=t.clientX&&(r=e.target.ownerDocument||N,i=r.documentElement,n=r.body,e.pageX=t.clientX+(i&&i.scrollLeft||n&&n.scrollLeft||0)-(i&&i.clientLeft||n&&n.clientLeft||0),e.pageY=t.clientY+(i&&i.scrollTop||n&&n.scrollTop||0)-(i&&i.clientTop||n&&n.clientTop||0)),!e.relatedTarget&&o&&(e.relatedTarget=o===e.target?t.toElement:o),e.which||void 0===s||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==rt()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===rt()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return p.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(e){return p.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=p.extend(new p.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?p.event.trigger(i,null,t):p.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},p.removeEvent=N.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===j&&(e[r]=null),e.detachEvent(r,n))},p.Event=function(e,t){return this instanceof p.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&(e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault())?tt:nt):this.type=e,t&&p.extend(this,t),this.timeStamp=e&&e.timeStamp||p.now(),void (this[p.expando]=!0)):new p.Event(e,t)},p.Event.prototype={isDefaultPrevented:nt,isPropagationStopped:nt,isImmediatePropagationStopped:nt,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=tt,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=tt,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()}},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){p.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj;return(!i||i!==r&&!p.contains(r,i))&&(e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t),n}}}),c.submitBubbles||(p.event.special.submit={setup:function(){return p.nodeName(this,"form")?!1:void p.event.add(this,"click._submit keypress._submit",function(e){var t=e.target,n=p.nodeName(t,"input")||p.nodeName(t,"button")?t.form:void 0;n&&!p._data(n,"submitBubbles")&&(p.event.add(n,"submit._submit",function(e){e._submit_bubble=!0}),p._data(n,"submitBubbles",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&p.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return p.nodeName(this,"form")?!1:void p.event.remove(this,"._submit")}}),c.changeBubbles||(p.event.special.change={setup:function(){return Q.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(p.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,e,!0)})),!1):void p.event.add(this,"beforeactivate._change",function(e){var t=e.target;Q.test(t.nodeName)&&!p._data(t,"changeBubbles")&&(p.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||p.event.simulate("change",this.parentNode,e,!0)}),p._data(t,"changeBubbles",!0))})},handle:function(e){var t=e.target;return this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type?e.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return p.event.remove(this,"._change"),!Q.test(this.nodeName)}}),c.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){p.event.simulate(t,e.target,p.event.fix(e),!0)};p.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=p._data(r,t);i||r.addEventListener(e,n,!0),p._data(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=p._data(r,t)-1;i?p._data(r,t,i):(r.removeEventListener(e,n,!0),p._removeData(r,t))}}}),p.fn.extend({on:function(e,t,n,r,i){var s,o;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=void 0);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=void 0):null==r&&("string"==typeof t?(r=n,n=void 0):(r=n,n=t,t=void 0)),r===!1)r=nt;else if(!r)return this;return 1===i&&(o=r,r=function(e){return p().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=p.guid++)),this.each(function(){p.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,p(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=void 0),n===!1&&(n=nt),this.each(function(){p.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){p.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?p.event.trigger(e,t,n,!0):void 0}});var st="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ot=/ jQuery\d+="(?:null|\d+)"/g,ut=new RegExp("<(?:"+st+")[\\s/>]","i"),at=/^\s+/,ft=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,lt=/<([\w:]+)/,ct=/<tbody/i,ht=/<|&#?\w+;/,pt=/<(?:script|style|link)/i,dt=/checked\s*(?:[^=]|=\s*.checked.)/i,vt=/^$|\/(?:java|ecma)script/i,mt=/^true\/(.*)/,gt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,yt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:c.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},bt=it(N),wt=bt.appendChild(N.createElement("div"));yt.optgroup=yt.option,yt.tbody=yt.tfoot=yt.colgroup=yt.caption=yt.thead,yt.th=yt.td,p.extend({clone:function(e,t,n){var r,i,s,o,u,a=p.contains(e.ownerDocument,e);if(c.html5Clone||p.isXMLDoc(e)||!ut.test("<"+e.nodeName+">")?s=e.cloneNode(!0):(wt.innerHTML=e.outerHTML,wt.removeChild(s=wt.firstChild)),!(c.noCloneEvent&&c.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||p.isXMLDoc(e)))for(r=Et(s),u=Et(e),o=0;null!=(i=u[o]);++o)r[o]&&Lt(i,r[o]);if(t)if(n)for(u=u||Et(e),r=r||Et(s),o=0;null!=(i=u[o]);o++)kt(i,r[o]);else kt(e,s);return r=Et(s,"script"),r.length>0&&Ct(r,!a&&Et(e,"script")),r=u=i=null,s},buildFragment:function(e,t,n,r){for(var i,s,o,u,a,f,l,h=e.length,d=it(t),v=[],m=0;h>m;m++)if(s=e[m],s||0===s)if("object"===p.type(s))p.merge(v,s.nodeType?[s]:s);else if(ht.test(s)){u=u||d.appendChild(t.createElement("div")),a=(lt.exec(s)||["",""])[1].toLowerCase(),l=yt[a]||yt._default,u.innerHTML=l[1]+s.replace(ft,"<$1></$2>")+l[2],i=l[0];while(i--)u=u.lastChild;if(!c.leadingWhitespace&&at.test(s)&&v.push(t.createTextNode(at.exec(s)[0])),!c.tbody){s="table"!==a||ct.test(s)?"<table>"!==l[1]||ct.test(s)?0:u:u.firstChild,i=s&&s.childNodes.length;while(i--)p.nodeName(f=s.childNodes[i],"tbody")&&!f.childNodes.length&&s.removeChild(f)}p.merge(v,u.childNodes),u.textContent="";while(u.firstChild)u.removeChild(u.firstChild);u=d.lastChild}else v.push(t.createTextNode(s));u&&d.removeChild(u),c.appendChecked||p.grep(Et(v,"input"),St),m=0;while(s=v[m++])if((!r||-1===p.inArray(s,r))&&(o=p.contains(s.ownerDocument,s),u=Et(d.appendChild(s),"script"),o&&Ct(u),n)){i=0;while(s=u[i++])vt.test(s.type||"")&&n.push(s)}return u=null,d},cleanData:function(e,t){for(var r,i,s,o,u=0,a=p.expando,f=p.cache,l=c.deleteExpando,h=p.event.special;null!=(r=e[u]);u++)if((t||p.acceptData(r))&&(s=r[a],o=s&&f[s])){if(o.events)for(i in o.events)h[i]?p.event.remove(r,i):p.removeEvent(r,i,o.handle);f[s]&&(delete f[s],l?delete r[a]:typeof r.removeAttribute!==j?r.removeAttribute(a):r[a]=null,n.push(s))}}}),p.fn.extend({text:function(e){return J(this,function(e){return void 0===e?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||N).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=xt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=xt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=e?p.filter(e,this):this,i=0;null!=(n=r[i]);i++)t||1!==n.nodeType||p.cleanData(Et(n)),n.parentNode&&(t&&p.contains(n.ownerDocument,n)&&Ct(Et(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){1===e.nodeType&&p.cleanData(Et(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&p.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return p.clone(this,e,t)})},html:function(e){return J(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e)return 1===t.nodeType?t.innerHTML.replace(ot,""):void 0;if(!("string"!=typeof e||pt.test(e)||!c.htmlSerialize&&ut.test(e)||!c.leadingWhitespace&&at.test(e)||yt[(lt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(ft,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(p.cleanData(Et(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,function(t){e=this.parentNode,p.cleanData(Et(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=i.apply([],e);var n,r,s,o,u,a,f=0,l=this.length,h=this,d=l-1,v=e[0],m=p.isFunction(v);if(m||l>1&&"string"==typeof v&&!c.checkClone&&dt.test(v))return this.each(function(n){var r=h.eq(n);m&&(e[0]=v.call(this,n,r.html())),r.domManip(e,t)});if(l&&(a=p.buildFragment(e,this[0].ownerDocument,!1,this),n=a.firstChild,1===a.childNodes.length&&(a=n),n)){for(o=p.map(Et(a,"script"),Tt),s=o.length;l>f;f++)r=a,f!==d&&(r=p.clone(r,!0,!0),s&&p.merge(o,Et(r,"script"))),t.call(this[f],r,f);if(s)for(u=o[o.length-1].ownerDocument,p.map(o,Nt),f=0;s>f;f++)r=o[f],vt.test(r.type||"")&&!p._data(r,"globalEval")&&p.contains(u,r)&&(r.src?p._evalUrl&&p._evalUrl(r.src):p.globalEval((r.text||r.textContent||r.innerHTML||"").replace(gt,"")));a=n=null}return this}}),p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){p.fn[e]=function(e){for(var n,r=0,i=[],o=p(e),u=o.length-1;u>=r;r++)n=r===u?this:this.clone(!0),p(o[r])[t](n),s.apply(i,n.get());return this.pushStack(i)}});var At,Ot={};!function(){var e,t,n=N.createElement("div"),r="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",e=n.getElementsByTagName("a")[0],e.style.cssText="float:left;opacity:.5",c.opacity=/^0.5/.test(e.style.opacity),c.cssFloat=!!e.style.cssFloat,n.style.backgroundClip="content-box",n.cloneNode(!0).style.backgroundClip="",c.clearCloneStyle="content-box"===n.style.backgroundClip,e=n=null,c.shrinkWrapBlocks=function(){var e,n,i,s;if(null==t){if(e=N.getElementsByTagName("body")[0],!e)return;s="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",n=N.createElement("div"),i=N.createElement("div"),e.appendChild(n).appendChild(i),t=!1,typeof i.style.zoom!==j&&(i.style.cssText=r+";width:1px;padding:1px;zoom:1",i.innerHTML="<div></div>",i.firstChild.style.width="5px",t=3!==i.offsetWidth),e.removeChild(n),e=n=i=null}return t}}();var Dt=/^margin/,Pt=new RegExp("^("+X+")(?!px)[a-z%]+$","i"),Ht,Bt,jt=/^(top|right|bottom|left)$/;e.getComputedStyle?(Ht=function(e){return e.ownerDocument.defaultView.getComputedStyle(e,null)},Bt=function(e,t,n){var r,i,s,o,u=e.style;return n=n||Ht(e),o=n?n.getPropertyValue(t)||n[t]:void 0,n&&(""!==o||p.contains(e.ownerDocument,e)||(o=p.style(e,t)),Pt.test(o)&&Dt.test(t)&&(r=u.width,i=u.minWidth,s=u.maxWidth,u.minWidth=u.maxWidth=u.width=o,o=n.width,u.width=r,u.minWidth=i,u.maxWidth=s)),void 0===o?o:o+""}):N.documentElement.currentStyle&&(Ht=function(e){return e.currentStyle},Bt=function(e,t,n){var r,i,s,o,u=e.style;return n=n||Ht(e),o=n?n[t]:void 0,null==o&&u&&u[t]&&(o=u[t]),Pt.test(o)&&!jt.test(t)&&(r=u.left,i=e.runtimeStyle,s=i&&i.left,s&&(i.left=e.currentStyle.left),u.left="fontSize"===t?"1em":o,o=u.pixelLeft+"px",u.left=r,s&&(i.left=s)),void 0===o?o:o+""||"auto"}),!function(){function l(){var t,n,u=N.getElementsByTagName("body")[0];u&&(t=N.createElement("div"),n=N.createElement("div"),t.style.cssText=a,u.appendChild(t).appendChild(n),n.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",p.swap(u,null!=u.style.zoom?{zoom:1}:{},function(){r=4===n.offsetWidth}),i=!0,s=!1,o=!0,e.getComputedStyle&&(s="1%"!==(e.getComputedStyle(n,null)||{}).top,i="4px"===(e.getComputedStyle(n,null)||{width:"4px"}).width),u.removeChild(t),n=u=null)}var t,n,r,i,s,o,u=N.createElement("div"),a="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",f="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";u.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",t=u.getElementsByTagName("a")[0],t.style.cssText="float:left;opacity:.5",c.opacity=/^0.5/.test(t.style.opacity),c.cssFloat=!!t.style.cssFloat,u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",c.clearCloneStyle="content-box"===u.style.backgroundClip,t=u=null,p.extend(c,{reliableHiddenOffsets:function(){if(null!=n)return n;var e,t,r,i=N.createElement("div"),s=N.getElementsByTagName("body")[0];if(s)return i.setAttribute("className","t"),i.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",e=N.createElement("div"),e.style.cssText=a,s.appendChild(e).appendChild(i),i.innerHTML="<table><tr><td></td><td>t</td></tr></table>",t=i.getElementsByTagName("td"),t[0].style.cssText="padding:0;margin:0;border:0;display:none",r=0===t[0].offsetHeight,t[0].style.display="",t[1].style.display="none",n=r&&0===t[0].offsetHeight,s.removeChild(e),i=s=null,n},boxSizing:function(){return null==r&&l(),r},boxSizingReliable:function(){return null==i&&l(),i},pixelPosition:function(){return null==s&&l(),s},reliableMarginRight:function(){var t,n,r,i;if(null==o&&e.getComputedStyle){if(t=N.getElementsByTagName("body")[0],!t)return;n=N.createElement("div"),r=N.createElement("div"),n.style.cssText=a,t.appendChild(n).appendChild(r),i=r.appendChild(N.createElement("div")),i.style.cssText=r.style.cssText=f,i.style.marginRight=i.style.width="0",r.style.width="1px",o=!parseFloat((e.getComputedStyle(i,null)||{}).marginRight),t.removeChild(n)}return o}})}(),p.swap=function(e,t,n,r){var i,s,o={};for(s in t)o[s]=e.style[s],e.style[s]=t[s];i=n.apply(e,r||[]);for(s in t)e.style[s]=o[s];return i};var It=/alpha\([^)]*\)/i,qt=/opacity\s*=\s*([^)]*)/,Rt=/^(none|table(?!-c[ea]).+)/,Ut=new RegExp("^("+X+")(.*)$","i"),zt=new RegExp("^([+-])=("+X+")","i"),Wt={position:"absolute",visibility:"hidden",display:"block"},Xt={letterSpacing:0,fontWeight:400},Vt=["Webkit","O","Moz","ms"];p.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Bt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":c.cssFloat?"cssFloat":"styleFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,s,o,u=p.camelCase(t),a=e.style;if(t=p.cssProps[u]||(p.cssProps[u]=$t(a,u)),o=p.cssHooks[t]||p.cssHooks[u],void 0===n)return o&&"get"in o&&void 0!==(i=o.get(e,!1,r))?i:a[t];if(s=typeof n,"string"===s&&(i=zt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(p.css(e,t)),s="number"),null!=n&&n===n&&("number"!==s||p.cssNumber[u]||(n+="px"),c.clearCloneStyle||""!==n||0!==t.indexOf("background")||(a[t]="inherit"),!(o&&"set"in o&&void 0===(n=o.set(e,n,r)))))try{a[t]="",a[t]=n}catch(f){}}},css:function(e,t,n,r){var i,s,o,u=p.camelCase(t);return t=p.cssProps[u]||(p.cssProps[u]=$t(e.style,u)),o=p.cssHooks[t]||p.cssHooks[u],o&&"get"in o&&(s=o.get(e,!0,n)),void 0===s&&(s=Bt(e,t,r)),"normal"===s&&t in Xt&&(s=Xt[t]),""===n||n?(i=parseFloat(s),n===!0||p.isNumeric(i)?i||0:s):s}}),p.each(["height","width"],function(e,t){p.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&Rt.test(p.css(e,"display"))?p.swap(e,Wt,function(){return Gt(e,t,r)}):Gt(e,t,r):void 0},set:function(e,n,r){var i=r&&Ht(e);return Kt(e,n,r?Qt(e,t,r,c.boxSizing()&&"border-box"===p.css(e,"boxSizing",!1,i),i):0)}}}),c.opacity||(p.cssHooks.opacity={get:function(e,t){return qt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=p.isNumeric(t)?"alpha(opacity="+100*t+")":"",s=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===p.trim(s.replace(It,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=It.test(s)?s.replace(It,i):s+" "+i)}}),p.cssHooks.marginRight=Ft(c.reliableMarginRight,function(e,t){return t?p.swap(e,{display:"inline-block"},Bt,[e,"marginRight"]):void 0}),p.each({margin:"",padding:"",border:"Width"},function(e,t){p.cssHooks[e+t]={expand:function(n){for(var r=0,i={},s="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+V[r]+t]=s[r]||s[r-2]||s[0];return i}},Dt.test(e)||(p.cssHooks[e+t].set=Kt)}),p.fn.extend({css:function(e,t){return J(this,function(e,t,n){var r,i,s={},o=0;if(p.isArray(t)){for(r=Ht(e),i=t.length;i>o;o++)s[t[o]]=p.css(e,t[o],!1,r);return s}return void 0!==n?p.style(e,t,n):p.css(e,t)},e,t,arguments.length>1)},show:function(){return Jt(this,!0)},hide:function(){return Jt(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){$(this)?p(this).show():p(this).hide()})}}),p.Tween=Yt,Yt.prototype={constructor:Yt,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(p.cssNumber[n]?"":"px")},cur:function(){var e=Yt.propHooks[this.prop];return e&&e.get?e.get(this):Yt.propHooks._default.get(this)},run:function(e){var t,n=Yt.propHooks[this.prop];return this.pos=t=this.options.duration?p.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yt.propHooks._default.set(this),this}},Yt.prototype.init.prototype=Yt.prototype,Yt.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=p.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){p.fx.step[e.prop]?p.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[p.cssProps[e.prop]]||p.cssHooks[e.prop])?p.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yt.propHooks.scrollTop=Yt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},p.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},p.fx=Yt.prototype.init,p.fx.step={};var Zt,en,tn=/^(?:toggle|show|hide)$/,nn=new RegExp("^(?:([+-])=|)("+X+")([a-z%]*)$","i"),rn=/queueHooks$/,sn=[ln],on={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=nn.exec(t),s=i&&i[3]||(p.cssNumber[e]?"":"px"),o=(p.cssNumber[e]||"px"!==s&&+r)&&nn.exec(p.css(n.elem,e)),u=1,a=20;if(o&&o[3]!==s){s=s||o[3],i=i||[],o=+r||1;do u=u||".5",o/=u,p.style(n.elem,e,o+s);while(u!==(u=n.cur()/r)&&1!==u&&--a)}return i&&(o=n.start=+o||+r||0,n.unit=s,n.end=i[1]?o+(i[1]+1)*i[2]:+i[2]),n}]};p.Animation=p.extend(hn,{tweener:function(e,t){p.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;i>r;r++)n=e[r],on[n]=on[n]||[],on[n].unshift(t)},prefilter:function(e,t){t?sn.unshift(e):sn.push(e)}}),p.speed=function(e,t,n){var r=e&&"object"==typeof e?p.extend({},e):{complete:n||!n&&t||p.isFunction(e)&&e,duration:e,easing:n&&t||t&&!p.isFunction(t)&&t};return r.duration=p.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in p.fx.speeds?p.fx.speeds[r.duration]:p.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){p.isFunction(r.old)&&r.old.call(this),r.queue&&p.dequeue(this,r.queue)},r},p.fn.extend({fadeTo:function(e,t,n,r){return this.filter($).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=p.isEmptyObject(e),s=p.speed(t,n,r),o=function(){var t=hn(this,p.extend({},e),s);(i||p._data(this,"finish"))&&t.stop(!0)};return o.finish=o,i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",s=p.timers,o=p._data(this);if(i)o[i]&&o[i].stop&&r(o[i]);else for(i in o)o[i]&&o[i].stop&&rn.test(i)&&r(o[i]);for(i=s.length;i--;)s[i].elem!==this||null!=e&&s[i].queue!==e||(s[i].anim.stop(n),t=!1,s.splice(i,1));(t||!n)&&p.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=p._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],s=p.timers,o=r?r.length:0;for(n.finish=!0,p.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=s.length;t--;)s[t].elem===this&&s[t].queue===e&&(s[t].anim.stop(!0),s.splice(t,1));for(t=0;o>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),p.each(["toggle","show","hide"],function(e,t){var n=p.fn[t];p.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(an(t,!0),e,r,i)}}),p.each({slideDown:an("show"),slideUp:an("hide"),slideToggle:an("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){p.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),p.timers=[],p.fx.tick=function(){var e,t=p.timers,n=0;for(Zt=p.now();n<t.length;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||p.fx.stop(),Zt=void 0},p.fx.timer=function(e){p.timers.push(e),e()?p.fx.start():p.timers.pop()},p.fx.interval=13,p.fx.start=function(){en||(en=setInterval(p.fx.tick,p.fx.interval))},p.fx.stop=function(){clearInterval(en),en=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fn.delay=function(e,t){return e=p.fx?p.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},function(){var e,t,n,r,i=N.createElement("div");i.setAttribute("className","t"),i.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",e=i.getElementsByTagName("a")[0],n=N.createElement("select"),r=n.appendChild(N.createElement("option")),t=i.getElementsByTagName("input")[0],e.style.cssText="top:1px",c.getSetAttribute="t"!==i.className,c.style=/top/.test(e.getAttribute("style")),c.hrefNormalized="/a"===e.getAttribute("href"),c.checkOn=!!t.value,c.optSelected=r.selected,c.enctype=!!N.createElement("form").enctype,n.disabled=!0,c.optDisabled=!r.disabled,t=N.createElement("input"),t.setAttribute("value",""),c.input=""===t.getAttribute("value"),t.value="t",t.setAttribute("type","radio"),c.radioValue="t"===t.value,e=t=n=r=i=null}();var pn=/\r/g;p.fn.extend({val:function(e){var t,n,r,i=this[0];if(arguments.length)return r=p.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,p(this).val()):e,null==i?i="":"number"==typeof i?i+="":p.isArray(i)&&(i=p.map(i,function(e){return null==e?"":e+""})),t=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return t=p.valHooks[i.type]||p.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(pn,""):null==n?"":n)}}),p.extend({valHooks:{option:{get:function(e){var t=p.find.attr(e,"value");return null!=t?t:p.text(e)}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,s="select-one"===e.type||0>i,o=s?null:[],u=s?i+1:r.length,a=0>i?u:s?i:0;u>a;a++)if(n=r[a],!(!n.selected&&a!==i||(c.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&p.nodeName(n.parentNode,"optgroup"))){if(t=p(n).val(),s)return t;o.push(t)}return o},set:function(e,t){var n,r,i=e.options,s=p.makeArray(t),o=i.length;while(o--)if(r=i[o],p.inArray(p.valHooks.option.get(r),s)>=0)try{r.selected=n=!0}catch(u){r.scrollHeight}else r.selected=!1;return n||(e.selectedIndex=-1),i}}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]={set:function(e,t){return p.isArray(t)?e.checked=p.inArray(p(e).val(),t)>=0:void 0}},c.checkOn||(p.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var dn,vn,mn=p.expr.attrHandle,gn=/^(?:checked|selected)$/i,yn=c.getSetAttribute,bn=c.input;p.fn.extend({attr:function(e,t){return J(this,p.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){p.removeAttr(this,e)})}}),p.extend({attr:function(e,t,n){var r,i,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===j?p.prop(e,t,n):(1===s&&p.isXMLDoc(e)||(t=t.toLowerCase(),r=p.attrHooks[t]||(p.expr.match.bool.test(t)?vn:dn)),void 0===n?r&&"get"in r&&null!==(i=r.get(e,t))?i:(i=p.find.attr(e,t),null==i?void 0:i):null!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):void p.removeAttr(e,t))},removeAttr:function(e,t){var n,r,i=0,s=t&&t.match(M);if(s&&1===e.nodeType)while(n=s[i++])r=p.propFix[n]||n,p.expr.match.bool.test(n)?bn&&yn||!gn.test(n)?e[r]=!1:e[p.camelCase("default-"+n)]=e[r]=!1:p.attr(e,n,""),e.removeAttribute(yn?n:r)},attrHooks:{type:{set:function(e,t){if(!c.radioValue&&"radio"===t&&p.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),vn={set:function(e,t,n){return t===!1?p.removeAttr(e,n):bn&&yn||!gn.test(n)?e.setAttribute(!yn&&p.propFix[n]||n,n):e[p.camelCase("default-"+n)]=e[n]=!0,n}},p.each(p.expr.match.bool.source.match(/\w+/g),function(e,t){var n=mn[t]||p.find.attr;mn[t]=bn&&yn||!gn.test(t)?function(e,t,r){var i,s;return r||(s=mn[t],mn[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,mn[t]=s),i}:function(e,t,n){return n?void 0:e[p.camelCase("default-"+t)]?t.toLowerCase():null}}),bn&&yn||(p.attrHooks.value={set:function(e,t,n){return p.nodeName(e,"input")?void (e.defaultValue=t):dn&&dn.set(e,t,n)}}),yn||(dn={set:function(e,t,n){var r=e.getAttributeNode(n);return r||e.setAttributeNode(r=e.ownerDocument.createAttribute(n)),r.value=t+="","value"===n||t===e.getAttribute(n)?t:void 0}},mn.id=mn.name=mn.coords=function(e,t,n){var r;return n?void 0:(r=e.getAttributeNode(t))&&""!==r.value?r.value:null},p.valHooks.button={get:function(e,t){var n=e.getAttributeNode(t);return n&&n.specified?n.value:void 0},set:dn.set},p.attrHooks.contenteditable={set:function(e,t,n){dn.set(e,""===t?!1:t,n)}},p.each(["width","height"],function(e,t){p.attrHooks[t]={set:function(e,n){return""===n?(e.setAttribute(t,"auto"),n):void 0}}})),c.style||(p.attrHooks.style={get:function(e){return e.style.cssText||void 0},set:function(e,t){return e.style.cssText=t+""}});var wn=/^(?:input|select|textarea|button|object)$/i,En=/^(?:a|area)$/i;p.fn.extend({prop:function(e,t){return J(this,p.prop,e,t,arguments.length>1)},removeProp:function(e){return e=p.propFix[e]||e,this.each(function(){try{this[e]=void 0,delete this[e]}catch(t){}})}}),p.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,s,o=e.nodeType;if(e&&3!==o&&8!==o&&2!==o)return s=1!==o||!p.isXMLDoc(e),s&&(t=p.propFix[t]||t,i=p.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=p.find.attr(e,"tabindex");return t?parseInt(t,10):wn.test(e.nodeName)||En.test(e.nodeName)&&e.href?0:-1}}}}),c.hrefNormalized||p.each(["href","src"],function(e,t){p.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),c.optSelected||(p.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),p.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){p.propFix[this.toLowerCase()]=this}),c.enctype||(p.propFix.enctype="encoding");var Sn=/[\t\r\n\f]/g;p.fn.extend({addClass:function(e){var t,n,r,i,s,o,u=0,a=this.length,f="string"==typeof e&&e;if(p.isFunction(e))return this.each(function(t){p(this).addClass(e.call(this,t,this.className))});if(f)for(t=(e||"").match(M)||[];a>u;u++)if(n=this[u],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Sn," "):" ")){s=0;while(i=t[s++])r.indexOf(" "+i+" ")<0&&(r+=i+" ");o=p.trim(r),n.className!==o&&(n.className=o)}return this},removeClass:function(e){var t,n,r,i,s,o,u=0,a=this.length,f=0===arguments.length||"string"==typeof e&&e;if(p.isFunction(e))return this.each(function(t){p(this).removeClass(e.call(this,t,this.className))});if(f)for(t=(e||"").match(M)||[];a>u;u++)if(n=this[u],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Sn," "):"")){s=0;while(i=t[s++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");o=e?p.trim(r):"",n.className!==o&&(n.className=o)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):this.each(p.isFunction(e)?function(n){p(this).toggleClass(e.call(this,n,this.className,t),t)}:function(){if("string"===n){var t,r=0,i=p(this),s=e.match(M)||[];while(t=s[r++])i.hasClass(t)?i.removeClass(t):i.addClass(t)}else(n===j||"boolean"===n)&&(this.className&&p._data(this,"__className__",this.className),this.className=this.className||e===!1?"":p._data(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(Sn," ").indexOf(t)>=0)return!0;return!1}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){p.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),p.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var xn=p.now(),Tn=/\?/,Nn=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;p.parseJSON=function(t){if(e.JSON&&e.JSON.parse)return e.JSON.parse(t+"");var n,r=null,i=p.trim(t+"");return i&&!p.trim(i.replace(Nn,function(e,t,i,s){return n&&t&&(r=0),0===r?e:(n=i||t,r+=!s-!i,"")}))?Function("return "+i)():p.error("Invalid JSON: "+t)},p.parseXML=function(t){var n,r;if(!t||"string"!=typeof t)return null;try{e.DOMParser?(r=new DOMParser,n=r.parseFromString(t,"text/xml")):(n=new ActiveXObject("Microsoft.XMLDOM"),n.async="false",n.loadXML(t))}catch(i){n=void 0}return n&&n.documentElement&&!n.getElementsByTagName("parsererror").length||p.error("Invalid XML: "+t),n};var Cn,kn,Ln=/#.*$/,An=/([?&])_=[^&]*/,On=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Mn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,_n=/^(?:GET|HEAD)$/,Dn=/^\/\//,Pn=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hn={},Bn={},jn="*/".concat("*");try{kn=location.href}catch(Fn){kn=N.createElement("a"),kn.href="",kn=kn.href}Cn=Pn.exec(kn.toLowerCase())||[],p.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:kn,type:"GET",isLocal:Mn.test(Cn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":jn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Rn(Rn(e,p.ajaxSettings),t):Rn(p.ajaxSettings,e)},ajaxPrefilter:In(Hn),ajaxTransport:In(Bn),ajax:function(e,t){function x(e,t,n,r){var f,g,y,w,S,x=t;2!==b&&(b=2,o&&clearTimeout(o),a=void 0,s=r||"",E.readyState=e>0?4:0,f=e>=200&&300>e||304===e,n&&(w=Un(l,E,n)),w=zn(l,w,E,f),f?(l.ifModified&&(S=E.getResponseHeader("Last-Modified"),S&&(p.lastModified[i]=S),S=E.getResponseHeader("etag"),S&&(p.etag[i]=S)),204===e||"HEAD"===l.type?x="nocontent":304===e?x="notmodified":(x=w.state,g=w.data,y=w.error,f=!y)):(y=x,(e||!x)&&(x="error",0>e&&(e=0))),E.status=e,E.statusText=(t||x)+"",f?d.resolveWith(c,[g,x,E]):d.rejectWith(c,[E,x,y]),E.statusCode(m),m=void 0,u&&h.trigger(f?"ajaxSuccess":"ajaxError",[E,l,f?g:y]),v.fireWith(c,[E,x]),u&&(h.trigger("ajaxComplete",[E,l]),--p.active||p.event.trigger("ajaxStop")))}"object"==typeof e&&(t=e,e=void 0),t=t||{};var n,r,i,s,o,u,a,f,l=p.ajaxSetup({},t),c=l.context||l,h=l.context&&(c.nodeType||c.jquery)?p(c):p.event,d=p.Deferred(),v=p.Callbacks("once memory"),m=l.statusCode||{},g={},y={},b=0,w="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!f){f={};while(t=On.exec(s))f[t[1].toLowerCase()]=t[2]}t=f[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?s:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=y[n]=y[n]||e,g[e]=t),this},overrideMimeType:function(e){return b||(l.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else E.always(e[E.status]);return this},abort:function(e){var t=e||w;return a&&a.abort(t),x(0,t),this}};if(d.promise(E).complete=v.add,E.success=E.done,E.error=E.fail,l.url=((e||l.url||kn)+"").replace(Ln,"").replace(Dn,Cn[1]+"//"),l.type=t.method||t.type||l.method||l.type,l.dataTypes=p.trim(l.dataType||"*").toLowerCase().match(M)||[""],null==l.crossDomain&&(n=Pn.exec(l.url.toLowerCase()),l.crossDomain=!(!n||n[1]===Cn[1]&&n[2]===Cn[2]&&(n[3]||("http:"===n[1]?"80":"443"))===(Cn[3]||("http:"===Cn[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=p.param(l.data,l.traditional)),qn(Hn,l,t,E),2===b)return E;u=l.global,u&&0===p.active++&&p.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!_n.test(l.type),i=l.url,l.hasContent||(l.data&&(i=l.url+=(Tn.test(i)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=An.test(i)?i.replace(An,"$1_="+xn++):i+(Tn.test(i)?"&":"?")+"_="+xn++)),l.ifModified&&(p.lastModified[i]&&E.setRequestHeader("If-Modified-Since",p.lastModified[i]),p.etag[i]&&E.setRequestHeader("If-None-Match",p.etag[i])),(l.data&&l.hasContent&&l.contentType!==!1||t.contentType)&&E.setRequestHeader("Content-Type",l.contentType),E.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+jn+"; q=0.01":""):l.accepts["*"]);for(r in l.headers)E.setRequestHeader(r,l.headers[r]);if(!l.beforeSend||l.beforeSend.call(c,E,l)!==!1&&2!==b){w="abort";for(r in{success:1,error:1,complete:1})E[r](l[r]);if(a=qn(Bn,l,t,E)){E.readyState=1,u&&h.trigger("ajaxSend",[E,l]),l.async&&l.timeout>0&&(o=setTimeout(function(){E.abort("timeout")},l.timeout));try{b=1,a.send(g,x)}catch(S){if(!(2>b))throw S;x(-1,S)}}else x(-1,"No Transport");return E}return E.abort()},getJSON:function(e,t,n){return p.get(e,t,n,"json")},getScript:function(e,t){return p.get(e,void 0,t,"script")}}),p.each(["get","post"],function(e,t){p[t]=function(e,n,r,i){return p.isFunction(n)&&(i=i||r,r=n,n=void 0),p.ajax({url:e,type:t,dataType:i,data:n,success:r})}}),p.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){p.fn[t]=function(e){return this.on(t,e)}}),p._evalUrl=function(e){return p.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},p.fn.extend({wrapAll:function(e){if(p.isFunction(e))return this.each(function(t){p(this).wrapAll(e.call(this,t))});if(this[0]){var t=p(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return this.each(p.isFunction(e)?function(t){p(this).wrapInner(e.call(this,t))}:function(){var t=p(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=p.isFunction(e);return this.each(function(n){p(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()}}),p.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0||!c.reliableHiddenOffsets()&&"none"===(e.style&&e.style.display||p.css(e,"display"))},p.expr.filters.visible=function(e){return!p.expr.filters.hidden(e)};var Wn=/%20/g,Xn=/\[\]$/,Vn=/\r?\n/g,$n=/^(?:submit|button|image|reset|file)$/i,Jn=/^(?:input|select|textarea|keygen)/i;p.param=function(e,t){var n,r=[],i=function(e,t){t=p.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=p.ajaxSettings&&p.ajaxSettings.traditional),p.isArray(e)||e.jquery&&!p.isPlainObject(e))p.each(e,function(){i(this.name,this.value)});else for(n in e)Kn(n,e[n],t,i);return r.join("&").replace(Wn,"+")},p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=p.prop(this,"elements");return e?p.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!p(this).is(":disabled")&&Jn.test(this.nodeName)&&!$n.test(e)&&(this.checked||!K.test(e))}).map(function(e,t){var n=p(this).val();return null==n?null:p.isArray(n)?p.map(n,function(e){return{name:t.name,value:e.replace(Vn,"\r\n")}}):{name:t.name,value:n.replace(Vn,"\r\n")}}).get()}}),p.ajaxSettings.xhr=void 0!==e.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zn()||er()}:Zn;var Qn=0,Gn={},Yn=p.ajaxSettings.xhr();e.ActiveXObject&&p(e).on("unload",function(){for(var e in Gn)Gn[e](void 0,!0)}),c.cors=!!Yn&&"withCredentials"in Yn,Yn=c.ajax=!!Yn,Yn&&p.ajaxTransport(function(e){if(!e.crossDomain||c.cors){var t;return{send:function(n,r){var i,s=e.xhr(),o=++Qn;if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)void 0!==n[i]&&s.setRequestHeader(i,n[i]+"");s.send(e.hasContent&&e.data||null),t=function(n,i){var u,a,f;if(t&&(i||4===s.readyState))if(delete Gn[o],t=void 0,s.onreadystatechange=p.noop,i)4!==s.readyState&&s.abort();else{f={},u=s.status,"string"==typeof s.responseText&&(f.text=s.responseText);try{a=s.statusText}catch(l){a=""}u||!e.isLocal||e.crossDomain?1223===u&&(u=204):u=f.text?200:404}f&&r(u,a,f,s.getAllResponseHeaders())},e.async?4===s.readyState?setTimeout(t):s.onreadystatechange=Gn[o]=t:t()},abort:function(){t&&t(void 0,!0)}}}}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return p.globalEval(e),e}}}),p.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),p.ajaxTransport("script",function(e){if(e.crossDomain){var t,n=N.head||p("head")[0]||N.documentElement;return{send:function(r,i){t=N.createElement("script"),t.async=!0,e.scriptCharset&&(t.charset=e.scriptCharset),t.src=e.url,t.onload=t.onreadystatechange=function(e,n){(n||!t.readyState||/loaded|complete/.test(t.readyState))&&(t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t),t=null,n||i(200,"success"))},n.insertBefore(t,n.firstChild)},abort:function(){t&&t.onload(void 0,!0)}}}});var tr=[],nr=/(=)\?(?=&|$)|\?\?/;p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=tr.pop()||p.expando+"_"+xn++;return this[e]=!0,e}}),p.ajaxPrefilter("json jsonp",function(t,n,r){var i,s,o,u=t.jsonp!==!1&&(nr.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&nr.test(t.data)&&"data");return u||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=p.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,u?t[u]=t[u].replace(nr,"$1"+i):t.jsonp!==!1&&(t.url+=(Tn.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return o||p.error(i+" was not called"),o[0]},t.dataTypes[0]="json",s=e[i],e[i]=function(){o=arguments},r.always(function(){e[i]=s,t[i]&&(t.jsonpCallback=n.jsonpCallback,tr.push(i)),o&&p.isFunction(s)&&s(o[0]),o=s=void 0}),"script"):void 0}),p.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||N;var r=E.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=p.buildFragment([e],t,i),i&&i.length&&p(i).remove(),p.merge([],r.childNodes))};var rr=p.fn.load;p.fn.load=function(e,t,n){if("string"!=typeof e&&rr)return rr.apply(this,arguments);var r,i,s,o=this,u=e.indexOf(" ");return u>=0&&(r=e.slice(u,e.length),e=e.slice(0,u)),p.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(s="POST"),o.length>0&&p.ajax({url:e,type:s,dataType:"html",data:t}).done(function(e){i=arguments,o.html(r?p("<div>").append(p.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){o.each(n,i||[e.responseText,t,e])}),this},p.expr.filters.animated=function(e){return p.grep(p.timers,function(t){return e===t.elem}).length};var ir=e.document.documentElement;p.offset={setOffset:function(e,t,n){var r,i,s,o,u,a,f,l=p.css(e,"position"),c=p(e),h={};"static"===l&&(e.style.position="relative"),u=c.offset(),s=p.css(e,"top"),a=p.css(e,"left"),f=("absolute"===l||"fixed"===l)&&p.inArray("auto",[s,a])>-1,f?(r=c.position(),o=r.top,i=r.left):(o=parseFloat(s)||0,i=parseFloat(a)||0),p.isFunction(t)&&(t=t.call(e,n,u)),null!=t.top&&(h.top=t.top-u.top+o),null!=t.left&&(h.left=t.left-u.left+i),"using"in t?t.using.call(e,h):c.css(h)}},p.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){p.offset.setOffset(this,e,t)});var t,n,r={top:0,left:0},i=this[0],s=i&&i.ownerDocument;if(s)return t=s.documentElement,p.contains(t,i)?(typeof i.getBoundingClientRect!==j&&(r=i.getBoundingClientRect()),n=sr(s),{top:r.top+(n.pageYOffset||t.scrollTop)-(t.clientTop||0),left:r.left+(n.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}):r},position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===p.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),p.nodeName(e[0],"html")||(n=e.offset()),n.top+=p.css(e[0],"borderTopWidth",!0),n.left+=p.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-p.css(r,"marginTop",!0),left:t.left-n.left-p.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||ir;while(e&&!p.nodeName(e,"html")&&"static"===p.css(e,"position"))e=e.offsetParent;return e||ir})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n=/Y/.test(t);p.fn[e]=function(r){return J(this,function(e,r,i){var s=sr(e);return void 0===i?s?t in s?s[t]:s.document.documentElement[r]:e[r]:void (s?s.scrollTo(n?p(s).scrollLeft():i,n?i:p(s).scrollTop()):e[r]=i)},e,r,arguments.length,null)}}),p.each(["top","left"],function(e,t){p.cssHooks[t]=Ft(c.pixelPosition,function(e,n){return n?(n=Bt(e,t),Pt.test(n)?p(e).position()[t]+"px":n):void 0})}),p.each({Height:"height",Width:"width"},function(e,t){p.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){p.fn[r]=function(r,i){var s=arguments.length&&(n||"boolean"!=typeof r),o=n||(r===!0||i===!0?"margin":"border");return J(this,function(t,n,r){var i;return p.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?p.css(t,n,o):p.style(t,n,r,o)},t,s?r:void 0,s,null)}})}),p.fn.size=function(){return this.length},p.fn.andSelf=p.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return p});var or=e.jQuery,ur=e.$;return p.noConflict=function(t){return e.$===p&&(e.$=ur),t&&e.jQuery===p&&(e.jQuery=or),p},typeof t===j&&(e.jQuery=e.$=p),p}),function(e,t){function n(t,n){var i,s,o,u=t.nodeName.toLowerCase();return"area"===u?(i=t.parentNode,s=i.name,t.href&&s&&"map"===i.nodeName.toLowerCase()?(o=e("img[usemap=#"+s+"]")[0],!!o&&r(o)):!1):(/input|select|textarea|button|object/.test(u)?!t.disabled:"a"===u?t.href||n:n)&&r(t)}function r(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var i=0,s=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(n,r){return"number"==typeof n?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),r&&r.call(t)},n)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(n){if(n!==t)return this.css("zIndex",n);if(this.length)for(var r,i,s=e(this[0]);s.length&&s[0]!==document;){if(r=s.css("position"),("absolute"===r||"relative"===r||"fixed"===r)&&(i=parseInt(s.css("zIndex"),10),!isNaN(i)&&0!==i))return i;s=s.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++i)})},removeUniqueId:function(){return this.each(function(){s.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,r){return!!e.data(t,r[3])},focusable:function(t){return n(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var r=e.attr(t,"tabindex"),i=isNaN(r);return(i||r>=0)&&n(t,!i)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(n,r){function i(t,n,r,i){return e.each(s,function(){n-=parseFloat(e.css(t,"padding"+this))||0,r&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),i&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var s="Width"===r?["Left","Right"]:["Top","Bottom"],o=r.toLowerCase(),u={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+r]=function(n){return n===t?u["inner"+r].call(this):this.each(function(){e(this).css(o,i(this,n)+"px")})},e.fn["outer"+r]=function(t,n){return"number"!=typeof t?u["outer"+r].call(this,t):this.each(function(){e(this).css(o,i(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(n){return arguments.length?t.call(this,e.camelCase(n)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,n,r){var i,s=e.ui[t].prototype;for(i in r)s.plugins[i]=s.plugins[i]||[],s.plugins[i].push([n,r[i]])},call:function(e,t,n){var r,i=e.plugins[t];if(i&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(r=0;i.length>r;r++)e.options[i[r][0]]&&i[r][1].apply(e.element,n)}},hasScroll:function(t,n){if("hidden"===e(t).css("overflow"))return!1;var r=n&&"left"===n?"scrollLeft":"scrollTop",i=!1;return t[r]>0?!0:(t[r]=1,i=t[r]>0,t[r]=0,i)}})}(jQuery),function(e,t){var n=0,r=Array.prototype.slice,i=e.cleanData;e.cleanData=function(t){for(var n,r=0;null!=(n=t[r]);r++)try{e(n).triggerHandler("remove")}catch(s){}i(t)},e.widget=function(n,r,i){var s,o,u,a,f={},l=n.split(".")[0];n=n.split(".")[1],s=l+"-"+n,i||(i=r,r=e.Widget),e.expr[":"][s.toLowerCase()]=function(t){return!!e.data(t,s)},e[l]=e[l]||{},o=e[l][n],u=e[l][n]=function(e,n){return this._createWidget?(arguments.length&&this._createWidget(e,n),t):new u(e,n)},e.extend(u,o,{version:i.version,_proto:e.extend({},i),_childConstructors:[]}),a=new r,a.options=e.widget.extend({},a.options),e.each(i,function(n,i){return e.isFunction(i)?(f[n]=function(){var e=function(){return r.prototype[n].apply(this,arguments)},t=function(e){return r.prototype[n].apply(this,e)};return function(){var n,r=this._super,s=this._superApply;return this._super=e,this._superApply=t,n=i.apply(this,arguments),this._super=r,this._superApply=s,n}}(),t):(f[n]=i,t)}),u.prototype=e.widget.extend(a,{widgetEventPrefix:o?a.widgetEventPrefix||n:n},f,{constructor:u,namespace:l,widgetName:n,widgetFullName:s}),o?(e.each(o._childConstructors,function(t,n){var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,u,n._proto)}),delete o._childConstructors):r._childConstructors.push(u),e.widget.bridge(n,u)},e.widget.extend=function(n){for(var i,o,u=r.call(arguments,1),a=0,f=u.length;f>a;a++)for(i in u[a])o=u[a][i],u[a].hasOwnProperty(i)&&o!==t&&(n[i]=e.isPlainObject(o)?e.isPlainObject(n[i])?e.widget.extend({},n[i],o):e.widget.extend({},o):o);return n},e.widget.bridge=function(n,i){var o=i.prototype.widgetFullName||n;e.fn[n]=function(u){var a="string"==typeof u,f=r.call(arguments,1),l=this;return u=!a&&f.length?e.widget.extend.apply(null,[u].concat(f)):u,a?this.each(function(){var r,i=e.data(this,o);return i?e.isFunction(i[u])&&"_"!==u.charAt(0)?(r=i[u].apply(i,f),r!==i&&r!==t?(l=r&&r.jquery?l.pushStack(r.get()):r,!1):t):e.error("no such method '"+u+"' for "+n+" widget instance"):e.error("cannot call methods on "+n+" prior to initialization; "+"attempted to call method '"+u+"'")}):this.each(function(){var t=e.data(this,o);t?t.option(u||{})._init():e.data(this,o,new i(u,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,r){r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=n++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),r!==this&&(e.data(r,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===r&&this.destroy()}}),this.document=e(r.style?r.ownerDocument:r.document||r),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(n,r){var i,s,o,u=n;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof n)if(u={},i=n.split("."),n=i.shift(),i.length){for(s=u[n]=e.widget.extend({},this.options[n]),o=0;i.length-1>o;o++)s[i[o]]=s[i[o]]||{},s=s[i[o]];if(n=i.pop(),1===arguments.length)return s[n]===t?null:s[n];s[n]=r}else{if(1===arguments.length)return this.options[n]===t?null:this.options[n];u[n]=r}return this._setOptions(u),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(n,r,i){var s,o=this;"boolean"!=typeof n&&(i=r,r=n,n=!1),i?(r=s=e(r),this.bindings=this.bindings.add(r)):(i=r,r=this.element,s=this.widget()),e.each(i,function(i,u){function f(){return n||o.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof u?o[u]:u).apply(o,arguments):t}"string"!=typeof u&&(f.guid=u.guid=u.guid||f.guid||e.guid++);var l=i.match(/^(\w+)\s*(.*)$/),c=l[1]+o.eventNamespace,h=l[2];h?s.delegate(h,c,f):r.bind(c,f)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function n(){return("string"==typeof e?r[e]:e).apply(r,arguments)}var r=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,r){var i,s,o=this.options[t];if(r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent)for(i in s)i in n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){"string"==typeof i&&(i={effect:i});var o,u=i?i===!0||"number"==typeof i?n:i.effect||n:t;i=i||{},"number"==typeof i&&(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&e.effects&&e.effects.effect[u]?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.queue(function(n){e(this)[t](),s&&s.call(r[0]),n()})}})}(jQuery),function(e){var t=!1;e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.10.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(n){return!0===e.data(n.target,t.widgetName+".preventClickEvent")?(e.removeData(n.target,t.widgetName+".preventClickEvent"),n.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(n){if(!t){this._mouseStarted&&this._mouseUp(n),this._mouseDownEvent=n;var r=this,i=1===n.which,s="string"==typeof this.options.cancel&&n.target.nodeName?e(n.target).closest(this.options.cancel).length:!1;return i&&!s&&this._mouseCapture(n)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){r.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(n)&&this._mouseDelayMet(n)&&(this._mouseStarted=this._mouseStart(n)!==!1,!this._mouseStarted)?(n.preventDefault(),!0):(!0===e.data(n.target,this.widgetName+".preventClickEvent")&&e.removeData(n.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return r._mouseMove(e)},this._mouseUpDelegate=function(e){return r._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),n.preventDefault(),t=!0,!0)):!0}},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})}(jQuery),function(e,t){function n(e,t,n){return[parseFloat(e[0])*(p.test(e[0])?t/100:1),parseFloat(e[1])*(p.test(e[1])?n/100:1)]}function r(t,n){return parseInt(e.css(t,n),10)||0}function i(t){var n=t[0];return 9===n.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(n)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:n.preventDefault?{width:0,height:0,offset:{top:n.pageY,left:n.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var s,o=Math.max,u=Math.abs,a=Math.round,f=/left|center|right/,l=/top|center|bottom/,c=/[\+\-]\d+(\.[\d]+)?%?/,h=/^\w+/,p=/%$/,d=e.fn.position;e.position={scrollbarWidth:function(){if(s!==t)return s;var n,r,i=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=i.children()[0];return e("body").append(i),n=o.offsetWidth,i.css("overflow","scroll"),r=o.offsetWidth,n===r&&(r=i[0].clientWidth),i.remove(),s=n-r},getScrollInfo:function(t){var n=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),r=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),i="scroll"===n||"auto"===n&&t.width<t.element[0].scrollWidth,s="scroll"===r||"auto"===r&&t.height<t.element[0].scrollHeight;return{width:s?e.position.scrollbarWidth():0,height:i?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var n=e(t||window),r=e.isWindow(n[0]),i=!!n[0]&&9===n[0].nodeType;return{element:n,isWindow:r,isDocument:i,offset:n.offset()||{left:0,top:0},scrollLeft:n.scrollLeft(),scrollTop:n.scrollTop(),width:r?n.width():n.outerWidth(),height:r?n.height():n.outerHeight()}}},e.fn.position=function(t){if(!t||!t.of)return d.apply(this,arguments);t=e.extend({},t);var s,p,v,m,g,y,b=e(t.of),w=e.position.getWithinInfo(t.within),E=e.position.getScrollInfo(w),S=(t.collision||"flip").split(" "),x={};return y=i(b),b[0].preventDefault&&(t.at="left top"),p=y.width,v=y.height,m=y.offset,g=e.extend({},m),e.each(["my","at"],function(){var e,n,r=(t[this]||"").split(" ");1===r.length&&(r=f.test(r[0])?r.concat(["center"]):l.test(r[0])?["center"].concat(r):["center","center"]),r[0]=f.test(r[0])?r[0]:"center",r[1]=l.test(r[1])?r[1]:"center",e=c.exec(r[0]),n=c.exec(r[1]),x[this]=[e?e[0]:0,n?n[0]:0],t[this]=[h.exec(r[0])[0],h.exec(r[1])[0]]}),1===S.length&&(S[1]=S[0]),"right"===t.at[0]?g.left+=p:"center"===t.at[0]&&(g.left+=p/2),"bottom"===t.at[1]?g.top+=v:"center"===t.at[1]&&(g.top+=v/2),s=n(x.at,p,v),g.left+=s[0],g.top+=s[1],this.each(function(){var i,f,l=e(this),c=l.outerWidth(),h=l.outerHeight(),d=r(this,"marginLeft"),y=r(this,"marginTop"),T=c+d+r(this,"marginRight")+E.width,N=h+y+r(this,"marginBottom")+E.height,C=e.extend({},g),L=n(x.my,l.outerWidth(),l.outerHeight());"right"===t.my[0]?C.left-=c:"center"===t.my[0]&&(C.left-=c/2),"bottom"===t.my[1]?C.top-=h:"center"===t.my[1]&&(C.top-=h/2),C.left+=L[0],C.top+=L[1],e.support.offsetFractions||(C.left=a(C.left),C.top=a(C.top)),i={marginLeft:d,marginTop:y},e.each(["left","top"],function(n,r){e.ui.position[S[n]]&&e.ui.position[S[n]][r](C,{targetWidth:p,targetHeight:v,elemWidth:c,elemHeight:h,collisionPosition:i,collisionWidth:T,collisionHeight:N,offset:[s[0]+L[0],s[1]+L[1]],my:t.my,at:t.at,within:w,elem:l})}),t.using&&(f=function(e){var n=m.left-C.left,r=n+p-c,i=m.top-C.top,s=i+v-h,a={target:{element:b,left:m.left,top:m.top,width:p,height:v},element:{element:l,left:C.left,top:C.top,width:c,height:h},horizontal:0>r?"left":n>0?"right":"center",vertical:0>s?"top":i>0?"bottom":"middle"};c>p&&p>u(n+r)&&(a.horizontal="center"),h>v&&v>u(i+s)&&(a.vertical="middle"),a.important=o(u(n),u(r))>o(u(i),u(s))?"horizontal":"vertical",t.using.call(this,e,a)}),l.offset(e.extend(C,{using:f}))})},e.ui.position={fit:{left:function(e,t){var n,r=t.within,i=r.isWindow?r.scrollLeft:r.offset.left,s=r.width,u=e.left-t.collisionPosition.marginLeft,a=i-u,f=u+t.collisionWidth-s-i;t.collisionWidth>s?a>0&&0>=f?(n=e.left+a+t.collisionWidth-s-i,e.left+=a-n):e.left=f>0&&0>=a?i:a>f?i+s-t.collisionWidth:i:a>0?e.left+=a:f>0?e.left-=f:e.left=o(e.left-u,e.left)},top:function(e,t){var n,r=t.within,i=r.isWindow?r.scrollTop:r.offset.top,s=t.within.height,u=e.top-t.collisionPosition.marginTop,a=i-u,f=u+t.collisionHeight-s-i;t.collisionHeight>s?a>0&&0>=f?(n=e.top+a+t.collisionHeight-s-i,e.top+=a-n):e.top=f>0&&0>=a?i:a>f?i+s-t.collisionHeight:i:a>0?e.top+=a:f>0?e.top-=f:e.top=o(e.top-u,e.top)}},flip:{left:function(e,t){var n,r,i=t.within,s=i.offset.left+i.scrollLeft,o=i.width,a=i.isWindow?i.scrollLeft:i.offset.left,f=e.left-t.collisionPosition.marginLeft,l=f-a,c=f+t.collisionWidth-o-a,h="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,p="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,d=-2*t.offset[0];0>l?(n=e.left+h+p+d+t.collisionWidth-o-s,(0>n||u(l)>n)&&(e.left+=h+p+d)):c>0&&(r=e.left-t.collisionPosition.marginLeft+h+p+d-a,(r>0||c>u(r))&&(e.left+=h+p+d))},top:function(e,t){var n,r,i=t.within,s=i.offset.top+i.scrollTop,o=i.height,a=i.isWindow?i.scrollTop:i.offset.top,f=e.top-t.collisionPosition.marginTop,l=f-a,c=f+t.collisionHeight-o-a,h="top"===t.my[1],p=h?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,d="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,v=-2*t.offset[1];0>l?(r=e.top+p+d+v+t.collisionHeight-o-s,e.top+p+d+v>l&&(0>r||u(l)>r)&&(e.top+=p+d+v)):c>0&&(n=e.top-t.collisionPosition.marginTop+p+d+v-a,e.top+p+d+v>c&&(n>0||c>u(n))&&(e.top+=p+d+v))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,n,r,i,s,o=document.getElementsByTagName("body")[0],u=document.createElement("div");t=document.createElement(o?"div":"body"),r={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&e.extend(r,{position:"absolute",left:"-1000px",top:"-1000px"});for(s in r)t.style[s]=r[s];t.appendChild(u),n=o||document.documentElement,n.insertBefore(t,n.firstChild),u.style.cssText="position: absolute; left: 10.7432222px;",i=e(u).offset().left,e.support.offsetFractions=i>10&&11>i,t.innerHTML="",n.removeChild(t)}()}(jQuery),function(e){e.widget("ui.draggable",e.ui.mouse,{version:"1.10.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(n){var r=this.options;return this.helper||r.disabled||e(n.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(n),this.handle?(e(r.iframeFix===!0?"iframe":r.iframeFix).each(function(){e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(n){var r=this.options;return this.helper=this._createHelper(n),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,e.extend(this.offset,{click:{left:n.pageX-this.offset.left,top:n.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(n),this.originalPageX=n.pageX,this.originalPageY=n.pageY,r.cursorAt&&this._adjustOffsetFromHelper(r.cursorAt),this._setContainment(),this._trigger("start",n)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!r.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,n),this._mouseDrag(n,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,n),!0)},_mouseDrag:function(n,r){if("fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(n),this.positionAbs=this._convertPositionTo("absolute"),!r){var i=this._uiHash();if(this._trigger("drag",n,i)===!1)return this._mouseUp({}),!1;this.position=i.position}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),e.ui.ddmanager&&e.ui.ddmanager.drag(this,n),!1},_mouseStop:function(n){var r=this,i=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(i=e.ui.ddmanager.drop(this,n)),this.dropped&&(i=this.dropped,this.dropped=!1),"original"!==this.options.helper||e.contains(this.element[0].ownerDocument,this.element[0])?("invalid"===this.options.revert&&!i||"valid"===this.options.revert&&i||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,i)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){r._trigger("stop",n)!==!1&&r._clear()}):this._trigger("stop",n)!==!1&&this._clear(),!1):!1},_mouseUp:function(n){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,n),e.ui.mouse.prototype._mouseUp.call(this,n)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(n){return this.options.handle?!!e(n.target).closest(this.element.find(this.options.handle)).length:!0},_createHelper:function(n){var r=this.options,i=e.isFunction(r.helper)?e(r.helper.apply(this.element[0],[n])):"clone"===r.helper?this.element.clone().removeAttr("id"):this.element;return i.parents("body").length||i.appendTo("parent"===r.appendTo?this.element[0].parentNode:r.appendTo),i[0]===this.element[0]||/(fixed|absolute)/.test(i.css("position"))||i.css("position","absolute"),i},_adjustOffsetFromHelper:function(n){"string"==typeof n&&(n=n.split(" ")),e.isArray(n)&&(n={left:+n[0],top:+n[1]||0}),"left"in n&&(this.offset.click.left=n.left+this.margins.left),"right"in n&&(this.offset.click.left=this.helperProportions.width-n.right+this.margins.left),"top"in n&&(this.offset.click.top=n.top+this.margins.top),"bottom"in n&&(this.offset.click.top=this.helperProportions.height-n.bottom+this.margins.top)},_getParentOffset:function(){var n=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(n.left+=this.scrollParent.scrollLeft(),n.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(n={top:0,left:0}),{top:n.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:n.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var n,r,i,s=this.options;return s.containment?"window"===s.containment?(this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):"document"===s.containment?(this.containment=[0,0,e(document).width()-this.helperProportions.width-this.margins.left,(e(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):s.containment.constructor===Array?(this.containment=s.containment,undefined):("parent"===s.containment&&(s.containment=this.helper[0].parentNode),r=e(s.containment),i=r[0],i&&(n="hidden"!==r.css("overflow"),this.containment=[(parseInt(r.css("borderLeftWidth"),10)||0)+(parseInt(r.css("paddingLeft"),10)||0),(parseInt(r.css("borderTopWidth"),10)||0)+(parseInt(r.css("paddingTop"),10)||0),(n?Math.max(i.scrollWidth,i.offsetWidth):i.offsetWidth)-(parseInt(r.css("borderRightWidth"),10)||0)-(parseInt(r.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(n?Math.max(i.scrollHeight,i.offsetHeight):i.offsetHeight)-(parseInt(r.css("borderBottomWidth"),10)||0)-(parseInt(r.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=r),undefined):(this.containment=null,undefined)},_convertPositionTo:function(n,r){r||(r=this.position);var i="absolute"===n?1:-1,s="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;return this.offset.scroll||(this.offset.scroll={top:s.scrollTop(),left:s.scrollLeft()}),{top:r.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top)*i,left:r.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)*i}},_generatePosition:function(n){var r,i,s,o,u=this.options,a="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,f=n.pageX,l=n.pageY;return this.offset.scroll||(this.offset.scroll={top:a.scrollTop(),left:a.scrollLeft()}),this.originalPosition&&(this.containment&&(this.relative_container?(i=this.relative_container.offset(),r=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]):r=this.containment,n.pageX-this.offset.click.left<r[0]&&(f=r[0]+this.offset.click.left),n.pageY-this.offset.click.top<r[1]&&(l=r[1]+this.offset.click.top),n.pageX-this.offset.click.left>r[2]&&(f=r[2]+this.offset.click.left),n.pageY-this.offset.click.top>r[3]&&(l=r[3]+this.offset.click.top)),u.grid&&(s=u.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/u.grid[1])*u.grid[1]:this.originalPageY,l=r?s-this.offset.click.top>=r[1]||s-this.offset.click.top>r[3]?s:s-this.offset.click.top>=r[1]?s-u.grid[1]:s+u.grid[1]:s,o=u.grid[0]?this.originalPageX+Math.round((f-this.originalPageX)/u.grid[0])*u.grid[0]:this.originalPageX,f=r?o-this.offset.click.left>=r[0]||o-this.offset.click.left>r[2]?o:o-this.offset.click.left>=r[0]?o-u.grid[0]:o+u.grid[0]:o)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(n,r,i){return i=i||this._uiHash(),e.ui.plugin.call(this,n,[r,i]),"drag"===n&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,n,r,i)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(n,r){var i=e(this).data("ui-draggable"),s=i.options,o=e.extend({},r,{item:i.element});i.sortables=[],e(s.connectToSortable).each(function(){var r=e.data(this,"ui-sortable");r&&!r.options.disabled&&(i.sortables.push({instance:r,shouldRevert:r.options.revert}),r.refreshPositions(),r._trigger("activate",n,o))})},stop:function(n,r){var i=e(this).data("ui-draggable"),s=e.extend({},r,{item:i.element});e.each(i.sortables,function(){this.instance.isOver?(this.instance.isOver=0,i.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(n),this.instance.options.helper=this.instance.options._helper,"original"===i.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",n,s))})},drag:function(n,r){var i=e(this).data("ui-draggable"),s=this;e.each(i.sortables,function(){var o=!1,u=this;this.instance.positionAbs=i.positionAbs,this.instance.helperProportions=i.helperProportions,this.instance.offset.click=i.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(o=!0,e.each(i.sortables,function(){return this.instance.positionAbs=i.positionAbs,this.instance.helperProportions=i.helperProportions,this.instance.offset.click=i.offset.click,this!==u&&this.instance._intersectsWith(this.instance.containerCache)&&e.contains(u.instance.element[0],this.instance.element[0])&&(o=!1),o})),o?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(s).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return r.helper[0]},n.target=this.instance.currentItem[0],this.instance._mouseCapture(n,!0),this.instance._mouseStart(n,!0,!0),this.instance.offset.click.top=i.offset.click.top,this.instance.offset.click.left=i.offset.click.left,this.instance.offset.parent.left-=i.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=i.offset.parent.top-this.instance.offset.parent.top,i._trigger("toSortable",n),i.dropped=this.instance.element,i.currentItem=i.element,this.instance.fromOutside=i),this.instance.currentItem&&this.instance._mouseDrag(n)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",n,this.instance._uiHash(this.instance)),this.instance._mouseStop(n,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),i._trigger("fromSortable",n),i.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(){var n=e("body"),r=e(this).data("ui-draggable").options;n.css("cursor")&&(r._cursor=n.css("cursor")),n.css("cursor",r.cursor)},stop:function(){var n=e(this).data("ui-draggable").options;n._cursor&&e("body").css("cursor",n._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(n,r){var i=e(r.helper),s=e(this).data("ui-draggable").options;i.css("opacity")&&(s._opacity=i.css("opacity")),i.css("opacity",s.opacity)},stop:function(n,r){var i=e(this).data("ui-draggable").options;i._opacity&&e(r.helper).css("opacity",i._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(){var n=e(this).data("ui-draggable");n.scrollParent[0]!==document&&"HTML"!==n.scrollParent[0].tagName&&(n.overflowOffset=n.scrollParent.offset())},drag:function(n){var r=e(this).data("ui-draggable"),i=r.options,s=!1;r.scrollParent[0]!==document&&"HTML"!==r.scrollParent[0].tagName?(i.axis&&"x"===i.axis||(r.overflowOffset.top+r.scrollParent[0].offsetHeight-n.pageY<i.scrollSensitivity?r.scrollParent[0].scrollTop=s=r.scrollParent[0].scrollTop+i.scrollSpeed:n.pageY-r.overflowOffset.top<i.scrollSensitivity&&(r.scrollParent[0].scrollTop=s=r.scrollParent[0].scrollTop-i.scrollSpeed)),i.axis&&"y"===i.axis||(r.overflowOffset.left+r.scrollParent[0].offsetWidth-n.pageX<i.scrollSensitivity?r.scrollParent[0].scrollLeft=s=r.scrollParent[0].scrollLeft+i.scrollSpeed:n.pageX-r.overflowOffset.left<i.scrollSensitivity&&(r.scrollParent[0].scrollLeft=s=r.scrollParent[0].scrollLeft-i.scrollSpeed))):(i.axis&&"x"===i.axis||(n.pageY-e(document).scrollTop()<i.scrollSensitivity?s=e(document).scrollTop(e(document).scrollTop()-i.scrollSpeed):e(window).height()-(n.pageY-e(document).scrollTop())<i.scrollSensitivity&&(s=e(document).scrollTop(e(document).scrollTop()+i.scrollSpeed))),i.axis&&"y"===i.axis||(n.pageX-e(document).scrollLeft()<i.scrollSensitivity?s=e(document).scrollLeft(e(document).scrollLeft()-i.scrollSpeed):e(window).width()-(n.pageX-e(document).scrollLeft())<i.scrollSensitivity&&(s=e(document).scrollLeft(e(document).scrollLeft()+i.scrollSpeed)))),s!==!1&&e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(r,n)}}),e.ui.plugin.add("draggable","snap",{start:function(){var n=e(this).data("ui-draggable"),r=n.options;n.snapElements=[],e(r.snap.constructor!==String?r.snap.items||":data(ui-draggable)":r.snap).each(function(){var r=e(this),i=r.offset();this!==n.element[0]&&n.snapElements.push({item:this,width:r.outerWidth(),height:r.outerHeight(),top:i.top,left:i.left})})},drag:function(n,r){var i,s,o,u,a,f,l,c,h,p,d=e(this).data("ui-draggable"),v=d.options,m=v.snapTolerance,g=r.offset.left,y=g+d.helperProportions.width,b=r.offset.top,w=b+d.helperProportions.height;for(h=d.snapElements.length-1;h>=0;h--)a=d.snapElements[h].left,f=a+d.snapElements[h].width,l=d.snapElements[h].top,c=l+d.snapElements[h].height,a-m>y||g>f+m||l-m>w||b>c+m||!e.contains(d.snapElements[h].item.ownerDocument,d.snapElements[h].item)?(d.snapElements[h].snapping&&d.options.snap.release&&d.options.snap.release.call(d.element,n,e.extend(d._uiHash(),{snapItem:d.snapElements[h].item})),d.snapElements[h].snapping=!1):("inner"!==v.snapMode&&(i=m>=Math.abs(l-w),s=m>=Math.abs(c-b),o=m>=Math.abs(a-y),u=m>=Math.abs(f-g),i&&(r.position.top=d._convertPositionTo("relative",{top:l-d.helperProportions.height,left:0}).top-d.margins.top),s&&(r.position.top=d._convertPositionTo("relative",{top:c,left:0}).top-d.margins.top),o&&(r.position.left=d._convertPositionTo("relative",{top:0,left:a-d.helperProportions.width}).left-d.margins.left),u&&(r.position.left=d._convertPositionTo("relative",{top:0,left:f}).left-d.margins.left)),p=i||s||o||u,"outer"!==v.snapMode&&(i=m>=Math.abs(l-b),s=m>=Math.abs(c-w),o=m>=Math.abs(a-g),u=m>=Math.abs(f-y),i&&(r.position.top=d._convertPositionTo("relative",{top:l,left:0}).top-d.margins.top),s&&(r.position.top=d._convertPositionTo("relative",{top:c-d.helperProportions.height,left:0}).top-d.margins.top),o&&(r.position.left=d._convertPositionTo("relative",{top:0,left:a}).left-d.margins.left),u&&(r.position.left=d._convertPositionTo("relative",{top:0,left:f-d.helperProportions.width}).left-d.margins.left)),!d.snapElements[h].snapping&&(i||s||o||u||p)&&d.options.snap.snap&&d.options.snap.snap.call(d.element,n,e.extend(d._uiHash(),{snapItem:d.snapElements[h].item})),d.snapElements[h].snapping=i||s||o||u||p)}}),e.ui.plugin.add("draggable","stack",{start:function(){var n,r=this.data("ui-draggable").options,i=e.makeArray(e(r.stack)).sort(function(n,r){return(parseInt(e(n).css("zIndex"),10)||0)-(parseInt(e(r).css("zIndex"),10)||0)});i.length&&(n=parseInt(e(i[0]).css("zIndex"),10)||0,e(i).each(function(r){e(this).css("zIndex",n+r)}),this.css("zIndex",n+i.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(n,r){var i=e(r.helper),s=e(this).data("ui-draggable").options;i.css("zIndex")&&(s._zIndex=i.css("zIndex")),i.css("zIndex",s.zIndex)},stop:function(n,r){var i=e(this).data("ui-draggable").options;i._zIndex&&e(r.helper).css("zIndex",i._zIndex)}})}(jQuery),function(e){function t(e){return parseInt(e,10)||0}function n(e){return!isNaN(parseInt(e,10))}e.widget("ui.resizable",e.ui.mouse,{version:"1.10.4",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var t,n,r,i,s,o=this,u=this.options;if(this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!u.aspectRatio,aspectRatio:u.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:u.helper||u.ghost||u.animate?u.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=u.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},n=0;t.length>n;n++)r=e.trim(t[n]),s="ui-resizable-"+r,i=e("<div class='ui-resizable-handle "+s+"'></div>"),i.css({zIndex:u.zIndex}),"se"===r&&i.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[r]=".ui-resizable-"+r,this.element.append(i);this._renderAxis=function(t){var n,r,i,s;t=t||this.element;for(n in this.handles)this.handles[n].constructor===String&&(this.handles[n]=e(this.handles[n],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(r=e(this.handles[n],this.element),s=/sw|ne|nw|se|n|s/.test(n)?r.outerHeight():r.outerWidth(),i=["padding",/ne|nw|n/.test(n)?"Top":/se|sw|s/.test(n)?"Bottom":/^e$/.test(n)?"Right":"Left"].join(""),t.css(i,s),this._proportionallyResize()),e(this.handles[n]).length},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(i=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=i&&i[1]?i[1]:"se")}),u.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){u.disabled||(e(this).removeClass("ui-resizable-autohide"),o._handles.show())}).mouseleave(function(){u.disabled||o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,n=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(n(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),n(this.originalElement),this},_mouseCapture:function(t){var n,r,i=!1;for(n in this.handles)r=e(this.handles[n])[0],(r===t.target||e.contains(r,t.target))&&(i=!0);return!this.options.disabled&&i},_mouseStart:function(n){var r,i,s,o=this.options,u=this.element.position(),a=this.element;return this.resizing=!0,/absolute/.test(a.css("position"))?a.css({position:"absolute",top:a.css("top"),left:a.css("left")}):a.is(".ui-draggable")&&a.css({position:"absolute",top:u.top,left:u.left}),this._renderProxy(),r=t(this.helper.css("left")),i=t(this.helper.css("top")),o.containment&&(r+=e(o.containment).scrollLeft()||0,i+=e(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:r,top:i},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:a.width(),height:a.height()},this.originalSize=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.originalPosition={left:r,top:i},this.sizeDiff={width:a.outerWidth()-a.width(),height:a.outerHeight()-a.height()},this.originalMousePosition={left:n.pageX,top:n.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,s=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor","auto"===s?this.axis+"-resize":s),a.addClass("ui-resizable-resizing"),this._propagate("start",n),!0},_mouseDrag:function(t){var n,r=this.helper,i={},s=this.originalMousePosition,o=this.axis,u=this.position.top,a=this.position.left,f=this.size.width,l=this.size.height,c=t.pageX-s.left||0,h=t.pageY-s.top||0,p=this._change[o];return p?(n=p.apply(this,[t,c,h]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(n=this._updateRatio(n,t)),n=this._respectSize(n,t),this._updateCache(n),this._propagate("resize",t),this.position.top!==u&&(i.top=this.position.top+"px"),this.position.left!==a&&(i.left=this.position.left+"px"),this.size.width!==f&&(i.width=this.size.width+"px"),this.size.height!==l&&(i.height=this.size.height+"px"),r.css(i),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(i)||this._trigger("resize",t,this.ui()),!1):!1},_mouseStop:function(t){this.resizing=!1;var n,r,i,s,o,u,a,f=this.options,l=this;return this._helper&&(n=this._proportionallyResizeElements,r=n.length&&/textarea/i.test(n[0].nodeName),i=r&&e.ui.hasScroll(n[0],"left")?0:l.sizeDiff.height,s=r?0:l.sizeDiff.width,o={width:l.helper.width()-s,height:l.helper.height()-i},u=parseInt(l.element.css("left"),10)+(l.position.left-l.originalPosition.left)||null,a=parseInt(l.element.css("top"),10)+(l.position.top-l.originalPosition.top)||null,f.animate||this.element.css(e.extend(o,{top:a,left:u})),l.helper.height(l.size.height),l.helper.width(l.size.width),this._helper&&!f.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(e){var t,r,s,o,u,a=this.options;u={minWidth:n(a.minWidth)?a.minWidth:0,maxWidth:n(a.maxWidth)?a.maxWidth:1/0,minHeight:n(a.minHeight)?a.minHeight:0,maxHeight:n(a.maxHeight)?a.maxHeight:1/0},(this._aspectRatio||e)&&(t=u.minHeight*this.aspectRatio,s=u.minWidth/this.aspectRatio,r=u.maxHeight*this.aspectRatio,o=u.maxWidth/this.aspectRatio,t>u.minWidth&&(u.minWidth=t),s>u.minHeight&&(u.minHeight=s),u.maxWidth>r&&(u.maxWidth=r),u.maxHeight>o&&(u.maxHeight=o)),this._vBoundaries=u},_updateCache:function(e){this.offset=this.helper.offset(),n(e.left)&&(this.position.left=e.left),n(e.top)&&(this.position.top=e.top),n(e.height)&&(this.size.height=e.height),n(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,r=this.size,s=this.axis;return n(e.height)?e.width=e.height*this.aspectRatio:n(e.width)&&(e.height=e.width/this.aspectRatio),"sw"===s&&(e.left=t.left+(r.width-e.width),e.top=null),"nw"===s&&(e.top=t.top+(r.height-e.height),e.left=t.left+(r.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,r=this.axis,s=n(e.width)&&t.maxWidth&&t.maxWidth<e.width,o=n(e.height)&&t.maxHeight&&t.maxHeight<e.height,u=n(e.width)&&t.minWidth&&t.minWidth>e.width,a=n(e.height)&&t.minHeight&&t.minHeight>e.height,f=this.originalPosition.left+this.originalSize.width,l=this.position.top+this.size.height,c=/sw|nw|w/.test(r),h=/nw|ne|n/.test(r);return u&&(e.width=t.minWidth),a&&(e.height=t.minHeight),s&&(e.width=t.maxWidth),o&&(e.height=t.maxHeight),u&&c&&(e.left=f-t.minWidth),s&&c&&(e.left=f-t.maxWidth),a&&h&&(e.top=l-t.minHeight),o&&h&&(e.top=l-t.maxHeight),e.width||e.height||e.left||!e.top?e.width||e.height||e.top||!e.left||(e.left=null):e.top=null,e},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){var e,t,n,r,i,s=this.helper||this.element;for(e=0;this._proportionallyResizeElements.length>e;e++){if(i=this._proportionallyResizeElements[e],!this.borderDif)for(this.borderDif=[],n=[i.css("borderTopWidth"),i.css("borderRightWidth"),i.css("borderBottomWidth"),i.css("borderLeftWidth")],r=[i.css("paddingTop"),i.css("paddingRight"),i.css("paddingBottom"),i.css("paddingLeft")],t=0;n.length>t;t++)this.borderDif[t]=(parseInt(n[t],10)||0)+(parseInt(r[t],10)||0);i.css({height:s.height()-this.borderDif[0]-this.borderDif[2]||0,width:s.width()-this.borderDif[1]-this.borderDif[3]||0})}}},_renderProxy:function(){var t=this.element,n=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++n.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var n=this.originalSize,r=this.originalPosition;return{left:r.left+t,width:n.width-t}},n:function(e,t,n){var r=this.originalSize,i=this.originalPosition;return{top:i.top+n,height:r.height-n}},s:function(e,t,n){return{height:this.originalSize.height+n}},se:function(t,n,r){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,n,r]))},sw:function(t,n,r){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,n,r]))},ne:function(t,n,r){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,n,r]))},nw:function(t,n,r){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,n,r]))}},_propagate:function(t,n){e.ui.plugin.call(this,t,[n,this.ui()]),"resize"!==t&&this._trigger(t,n,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var n=e(this).data("ui-resizable"),r=n.options,i=n._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),o=s&&e.ui.hasScroll(i[0],"left")?0:n.sizeDiff.height,u=s?0:n.sizeDiff.width,a={width:n.size.width-u,height:n.size.height-o},f=parseInt(n.element.css("left"),10)+(n.position.left-n.originalPosition.left)||null,l=parseInt(n.element.css("top"),10)+(n.position.top-n.originalPosition.top)||null;n.element.animate(e.extend(a,l&&f?{top:l,left:f}:{}),{duration:r.animateDuration,easing:r.animateEasing,step:function(){var r={width:parseInt(n.element.css("width"),10),height:parseInt(n.element.css("height"),10),top:parseInt(n.element.css("top"),10),left:parseInt(n.element.css("left"),10)};i&&i.length&&e(i[0]).css({width:r.width,height:r.height}),n._updateCache(r),n._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var n,r,i,s,o,u,a,f=e(this).data("ui-resizable"),l=f.options,c=f.element,h=l.containment,p=h instanceof e?h.get(0):/parent/.test(h)?c.parent().get(0):h;p&&(f.containerElement=e(p),/document/.test(h)||h===document?(f.containerOffset={left:0,top:0},f.containerPosition={left:0,top:0},f.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(n=e(p),r=[],e(["Top","Right","Left","Bottom"]).each(function(e,i){r[e]=t(n.css("padding"+i))}),f.containerOffset=n.offset(),f.containerPosition=n.position(),f.containerSize={height:n.innerHeight()-r[3],width:n.innerWidth()-r[1]},i=f.containerOffset,s=f.containerSize.height,o=f.containerSize.width,u=e.ui.hasScroll(p,"left")?p.scrollWidth:o,a=e.ui.hasScroll(p)?p.scrollHeight:s,f.parentData={element:p,left:i.left,top:i.top,width:u,height:a}))},resize:function(t){var n,r,i,s,o=e(this).data("ui-resizable"),u=o.options,a=o.containerOffset,f=o.position,l=o._aspectRatio||t.shiftKey,c={top:0,left:0},h=o.containerElement;h[0]!==document&&/static/.test(h.css("position"))&&(c=a),f.left<(o._helper?a.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-a.left:o.position.left-c.left),l&&(o.size.height=o.size.width/o.aspectRatio),o.position.left=u.helper?a.left:0),f.top<(o._helper?a.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-a.top:o.position.top),l&&(o.size.width=o.size.height*o.aspectRatio),o.position.top=o._helper?a.top:0),o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top,n=Math.abs((o._helper?o.offset.left-c.left:o.offset.left-c.left)+o.sizeDiff.width),r=Math.abs((o._helper?o.offset.top-c.top:o.offset.top-a.top)+o.sizeDiff.height),i=o.containerElement.get(0)===o.element.parent().get(0),s=/relative|absolute/.test(o.containerElement.css("position")),i&&s&&(n-=Math.abs(o.parentData.left)),n+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-n,l&&(o.size.height=o.size.width/o.aspectRatio)),r+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-r,l&&(o.size.width=o.size.height*o.aspectRatio))},stop:function(){var t=e(this).data("ui-resizable"),n=t.options,r=t.containerOffset,i=t.containerPosition,s=t.containerElement,o=e(t.helper),u=o.offset(),a=o.outerWidth()-t.sizeDiff.width,f=o.outerHeight()-t.sizeDiff.height;t._helper&&!n.animate&&/relative/.test(s.css("position"))&&e(this).css({left:u.left-i.left-r.left,width:a,height:f}),t._helper&&!n.animate&&/static/.test(s.css("position"))&&e(this).css({left:u.left-i.left-r.left,width:a,height:f})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).data("ui-resizable"),n=t.options,r=function(t){e(t).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};"object"!=typeof n.alsoResize||n.alsoResize.parentNode?r(n.alsoResize):n.alsoResize.length?(n.alsoResize=n.alsoResize[0],r(n.alsoResize)):e.each(n.alsoResize,function(e){r(e)})},resize:function(t,n){var r=e(this).data("ui-resizable"),i=r.options,s=r.originalSize,o=r.originalPosition,u={height:r.size.height-s.height||0,width:r.size.width-s.width||0,top:r.position.top-o.top||0,left:r.position.left-o.left||0},a=function(t,r){e(t).each(function(){var t=e(this),i=e(this).data("ui-resizable-alsoresize"),s={},o=r&&r.length?r:t.parents(n.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(o,function(e,t){var n=(i[t]||0)+(u[t]||0);n&&n>=0&&(s[t]=n||null)}),t.css(s)})};"object"!=typeof i.alsoResize||i.alsoResize.nodeType?a(i.alsoResize):e.each(i.alsoResize,function(e,t){a(e,t)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).data("ui-resizable"),n=t.options,r=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:r.height,width:r.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof n.ghost?n.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).data("ui-resizable");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).data("ui-resizable");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t=e(this).data("ui-resizable"),n=t.options,r=t.size,i=t.originalSize,s=t.originalPosition,o=t.axis,u="number"==typeof n.grid?[n.grid,n.grid]:n.grid,a=u[0]||1,f=u[1]||1,l=Math.round((r.width-i.width)/a)*a,c=Math.round((r.height-i.height)/f)*f,h=i.width+l,p=i.height+c,d=n.maxWidth&&h>n.maxWidth,v=n.maxHeight&&p>n.maxHeight,m=n.minWidth&&n.minWidth>h,g=n.minHeight&&n.minHeight>p;n.grid=u,m&&(h+=a),g&&(p+=f),d&&(h-=a),v&&(p-=f),/^(se|s|e)$/.test(o)?(t.size.width=h,t.size.height=p):/^(ne)$/.test(o)?(t.size.width=h,t.size.height=p,t.position.top=s.top-c):/^(sw)$/.test(o)?(t.size.width=h,t.size.height=p,t.position.left=s.left-l):(p-f>0?(t.size.height=p,t.position.top=s.top-c):(t.size.height=f,t.position.top=s.top+i.height-f),h-a>0?(t.size.width=h,t.position.left=s.left-l):(t.size.width=a,t.position.left=s.left+i.width-a))}})}(jQuery),function(e){var t,n="ui-button ui-widget ui-state-default ui-corner-all",r="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",i=function(){var t=e(this);setTimeout(function(){t.find(":ui-button").button("refresh")},1)},s=function(t){var n=t.name,r=t.form,i=e([]);return n&&(n=n.replace(/'/g,"\\'"),i=r?e(r).find("[name='"+n+"']"):e("[name='"+n+"']",t.ownerDocument).filter(function(){return!this.form})),i};e.widget("ui.button",{version:"1.10.4",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,i),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var r=this,o=this.options,u="checkbox"===this.type||"radio"===this.type,f=u?"":"ui-state-active";null===o.label&&(o.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(n).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){o.disabled||this===t&&e(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){o.disabled||e(this).removeClass(f)}).bind("click"+this.eventNamespace,function(e){o.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}}),u&&this.element.bind("change"+this.eventNamespace,function(){r.refresh()}),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return o.disabled?!1:undefined}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(o.disabled)return!1;e(this).addClass("ui-state-active"),r.buttonElement.attr("aria-pressed","true");var t=r.element[0];s(t).not(t).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return o.disabled?!1:(e(this).addClass("ui-state-active"),t=this,r.document.one("mouseup",function(){t=null}),undefined)}).bind("mouseup"+this.eventNamespace,function(){return o.disabled?!1:(e(this).removeClass("ui-state-active"),undefined)}).bind("keydown"+this.eventNamespace,function(t){return o.disabled?!1:((t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER)&&e(this).addClass("ui-state-active"),undefined)}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===e.ui.keyCode.SPACE&&e(this).click()})),this._setOption("disabled",o.disabled),this._resetButton()},_determineButtonType:function(){var e,t,n;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(e=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=e.find(t),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(t),this.buttonElement.length||(this.buttonElement=e.find(t))),this.element.addClass("ui-helper-hidden-accessible"),n=this.element.is(":checked"),n&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",n)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(n+" ui-state-active "+r).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(e,t){return this._super(e,t),"disabled"===e?(this.element.prop("disabled",!!t),t&&this.buttonElement.removeClass("ui-state-focus"),undefined):(this._resetButton(),undefined)},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),"radio"===this.type?s(this.element[0]).each(function(){e(this).is(":checked")?e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return this.options.label&&this.element.val(this.options.label),undefined;var t=this.buttonElement.removeClass(r),n=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),i=this.options.icons,s=i.primary&&i.secondary,o=[];i.primary||i.secondary?(this.options.text&&o.push("ui-button-text-icon"+(s?"s":i.primary?"-primary":"-secondary")),i.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+i.primary+"'></span>"),i.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+i.secondary+"'></span>"),this.options.text||(o.push(s?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",e.trim(n)))):o.push("ui-button-text-only"),t.addClass(o.join(" "))}}),e.widget("ui.buttonset",{version:"1.10.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,t){"disabled"===e&&this.buttons.button("option",e,t),this._super(e,t)},refresh:function(){var t="rtl"===this.element.css("direction");this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})}(jQuery),function(e){var t={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},n={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};e.widget("ui.dialog",{version:"1.10.4",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var n=e(this).css(t).offset().top;0>n&&e(this).css("top",t.top-n)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&e.fn.draggable&&this._makeDraggable(),this.options.resizable&&e.fn.resizable&&this._makeResizable(),this._isOpen=!1},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?e(t):this.document.find(t||"body").eq(0)},_destroy:function(){var e,t=this.originalPosition;this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),e=t.parent.children().eq(t.index),e.length&&e[0]!==this.element[0]?e.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},disable:e.noop,enable:e.noop,close:function(t){var n,r=this;if(this._isOpen&&this._trigger("beforeClose",t)!==!1){if(this._isOpen=!1,this._destroyOverlay(),!this.opener.filter(":focusable").focus().length)try{n=this.document[0].activeElement,n&&"body"!==n.nodeName.toLowerCase()&&e(n).blur()}catch(i){}this._hide(this.uiDialog,this.options.hide,function(){r._trigger("close",t)})}},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(e,t){var n=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;return n&&!t&&this._trigger("focus",e),n},open:function(){var t=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),undefined):(this._isOpen=!0,this.opener=e(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this._show(this.uiDialog,this.options.show,function(){t._focusTabbable(),t._trigger("focus")}),this._trigger("open"),undefined)},_focusTabbable:function(){var e=this.element.find("[autofocus]");e.length||(e=this.element.find(":tabbable")),e.length||(e=this.uiDialogButtonPane.find(":tabbable")),e.length||(e=this.uiDialogTitlebarClose.filter(":tabbable")),e.length||(e=this.uiDialog),e.eq(0).focus()},_keepFocus:function(t){function n(){var t=this.document[0].activeElement,n=this.uiDialog[0]===t||e.contains(this.uiDialog[0],t);n||this._focusTabbable()}t.preventDefault(),n.call(this),this._delay(n)},_createWrapper:function(){this.uiDialog=e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===e.ui.keyCode.ESCAPE)return t.preventDefault(),this.close(t),undefined;if(t.keyCode===e.ui.keyCode.TAB){var n=this.uiDialog.find(":tabbable"),r=n.filter(":first"),i=n.filter(":last");t.target!==i[0]&&t.target!==this.uiDialog[0]||t.shiftKey?t.target!==r[0]&&t.target!==this.uiDialog[0]||!t.shiftKey||(i.focus(1),t.preventDefault()):(r.focus(1),t.preventDefault())}},mousedown:function(e){this._moveToTop(e)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(t){e(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=e("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(e){e.preventDefault(),this.close(e)}}),t=e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(t),this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(e){this.options.title||e.html("&#160;"),e.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var t=this,n=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),e.isEmptyObject(n)||e.isArray(n)&&!n.length?(this.uiDialog.removeClass("ui-dialog-buttons"),undefined):(e.each(n,function(n,r){var i,s;r=e.isFunction(r)?{click:r,text:n}:r,r=e.extend({type:"button"},r),i=r.click,r.click=function(){i.apply(t.element[0],arguments)},s={icons:r.icons,text:r.showText},delete r.icons,delete r.showText,e("<button></button>",r).button(s).appendTo(t.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),undefined)},_makeDraggable:function(){function t(e){return{position:e.position,offset:e.offset}}var n=this,r=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(r,s){e(this).addClass("ui-dialog-dragging"),n._blockFrames(),n._trigger("dragStart",r,t(s))},drag:function(e,r){n._trigger("drag",e,t(r))},stop:function(s,o){r.position=[o.position.left-n.document.scrollLeft(),o.position.top-n.document.scrollTop()],e(this).removeClass("ui-dialog-dragging"),n._unblockFrames(),n._trigger("dragStop",s,t(o))}})},_makeResizable:function(){function t(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}var n=this,r=this.options,i=r.resizable,s=this.uiDialog.css("position"),o="string"==typeof i?i:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:r.maxWidth,maxHeight:r.maxHeight,minWidth:r.minWidth,minHeight:this._minHeight(),handles:o,start:function(r,i){e(this).addClass("ui-dialog-resizing"),n._blockFrames(),n._trigger("resizeStart",r,t(i))},resize:function(e,r){n._trigger("resize",e,t(r))},stop:function(i,s){r.height=e(this).height(),r.width=e(this).width(),e(this).removeClass("ui-dialog-resizing"),n._unblockFrames(),n._trigger("resizeStop",i,t(s))}}).css("position",s)},_minHeight:function(){var e=this.options;return"auto"===e.height?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(){var e=this.uiDialog.is(":visible");e||this.uiDialog.show(),this.uiDialog.position(this.options.position),e||this.uiDialog.hide()},_setOptions:function(r){var s=this,o=!1,u={};e.each(r,function(e,r){s._setOption(e,r),e in t&&(o=!0),e in n&&(u[e]=r)}),o&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",u)},_setOption:function(e,t){var n,r,i=this.uiDialog;"dialogClass"===e&&i.removeClass(this.options.dialogClass).addClass(t),"disabled"!==e&&(this._super(e,t),"appendTo"===e&&this.uiDialog.appendTo(this._appendTo()),"buttons"===e&&this._createButtons(),"closeText"===e&&this.uiDialogTitlebarClose.button({label:""+t}),"draggable"===e&&(n=i.is(":data(ui-draggable)"),n&&!t&&i.draggable("destroy"),!n&&t&&this._makeDraggable()),"position"===e&&this._position(),"resizable"===e&&(r=i.is(":data(ui-resizable)"),r&&!t&&i.resizable("destroy"),r&&"string"==typeof t&&i.resizable("option","handles",t),r||t===!1||this._makeResizable()),"title"===e&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var e,t,n,r=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),r.minWidth>r.width&&(r.width=r.minWidth),e=this.uiDialog.css({height:"auto",width:r.width}).outerHeight(),t=Math.max(0,r.minHeight-e),n="number"==typeof r.maxHeight?Math.max(0,r.maxHeight-e):"none","auto"===r.height?this.element.css({minHeight:t,maxHeight:n,height:"auto"}):this.element.height(Math.max(0,r.height-e)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var t=e(this);return e("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(t){return e(t.target).closest(".ui-dialog").length?!0:!!e(t.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var t=this,n=this.widgetFullName;e.ui.dialog.overlayInstances||this._delay(function(){e.ui.dialog.overlayInstances&&this.document.bind("focusin.dialog",function(r){t._allowInteraction(r)||(r.preventDefault(),e(".ui-dialog:visible:last .ui-dialog-content").data(n)._focusTabbable())})}),this.overlay=e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),e.ui.dialog.overlayInstances++}},_destroyOverlay:function(){this.options.modal&&this.overlay&&(e.ui.dialog.overlayInstances--,e.ui.dialog.overlayInstances||this.document.unbind("focusin.dialog"),this.overlay.remove(),this.overlay=null)}}),e.ui.dialog.overlayInstances=0,e.uiBackCompat!==!1&&e.widget("ui.dialog",e.ui.dialog,{_position:function(){var t,n=this.options.position,r=[],i=[0,0];n?(("string"==typeof n||"object"==typeof n&&"0"in n)&&(r=n.split?n.split(" "):[n[0],n[1]],1===r.length&&(r[1]=r[0]),e.each(["left","top"],function(e,t){+r[e]===r[e]&&(i[e]=r[e],r[e]=t)}),n={my:r[0]+(0>i[0]?i[0]:"+"+i[0])+" "+r[1]+(0>i[1]?i[1]:"+"+i[1]),at:r.join(" ")}),n=e.extend({},e.ui.dialog.prototype.options.position,n)):n=e.ui.dialog.prototype.options.position,t=this.uiDialog.is(":visible"),t||this.uiDialog.show(),this.uiDialog.position(n),t||this.uiDialog.hide()}})}(jQuery),function(e){var t=5;e.widget("ui.slider",e.ui.mouse,{version:"1.10.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var t,n,r=this.options,i=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),s="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",o=[];for(n=r.values&&r.values.length||1,i.length>n&&(i.slice(n).remove(),i=i.slice(0,n)),t=i.length;n>t;t++)o.push(s);this.handles=i.add(e(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)})},_createRange:function(){var t=this.options,n="";t.range?(t.range===!0&&(t.values?t.values.length&&2!==t.values.length?t.values=[t.values[0],t.values[0]]:e.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=e("<div></div>").appendTo(this.element),n="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(n+("min"===t.range||"max"===t.range?" ui-slider-range-"+t.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){var e=this.handles.add(this.range).filter("a");this._off(e),this._on(e,this._handleEvents),this._hoverable(e),this._focusable(e)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var n,r,i,s,o,u,a,f,l=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),n={x:t.pageX,y:t.pageY},r=this._normValueFromMouse(n),i=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var n=Math.abs(r-l.values(t));(i>n||i===n&&(t===l._lastChangedValue||l.values(t)===c.min))&&(i=n,s=e(this),o=t)}),u=this._start(t,o),u===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,s.addClass("ui-state-active").focus(),a=s.offset(),f=!e(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=f?{left:0,top:0}:{left:t.pageX-a.left-s.width()/2,top:t.pageY-a.top-s.height()/2-(parseInt(s.css("borderTopWidth"),10)||0)-(parseInt(s.css("borderBottomWidth"),10)||0)+(parseInt(s.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,r),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},n=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,n),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,n,r,i,s;return"horizontal"===this.orientation?(t=this.elementSize.width,n=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,n=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),r=n/t,r>1&&(r=1),0>r&&(r=0),"vertical"===this.orientation&&(r=1-r),i=this._valueMax()-this._valueMin(),s=this._valueMin()+r*i,this._trimAlignValue(s)},_start:function(e,t){var n={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("start",e,n)},_slide:function(e,t,n){var r,i,s;this.options.values&&this.options.values.length?(r=this.values(t?0:1),2===this.options.values.length&&this.options.range===!0&&(0===t&&n>r||1===t&&r>n)&&(n=r),n!==this.values(t)&&(i=this.values(),i[t]=n,s=this._trigger("slide",e,{handle:this.handles[t],value:n,values:i}),r=this.values(t?0:1),s!==!1&&this.values(t,n))):n!==this.value()&&(s=this._trigger("slide",e,{handle:this.handles[t],value:n}),s!==!1&&this.value(n))},_stop:function(e,t){var n={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("stop",e,n)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var n={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._lastChangedValue=t,this._trigger("change",e,n)}},value:function(e){return arguments.length?(this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0),undefined):this._value()},values:function(t,n){var r,i,s;if(arguments.length>1)return this.options.values[t]=this._trimAlignValue(n),this._refreshValue(),this._change(null,t),undefined;if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();for(r=this.options.values,i=arguments[0],s=0;r.length>s;s+=1)r[s]=this._trimAlignValue(i[s]),this._change(null,s);this._refreshValue()},_setOption:function(t,n){var r,i=0;switch("range"===t&&this.options.range===!0&&("min"===n?(this.options.value=this._values(0),this.options.values=null):"max"===n&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),e.isArray(this.options.values)&&(i=this.options.values.length),e.Widget.prototype._setOption.apply(this,arguments),t){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),r=0;i>r;r+=1)this._change(null,r);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e)},_values:function(e){var t,n,r;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t);if(this.options.values&&this.options.values.length){for(n=this.options.values.slice(),r=0;n.length>r;r+=1)n[r]=this._trimAlignValue(n[r]);return n}return[]},_trimAlignValue:function(e){if(this._valueMin()>=e)return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,n=(e-this._valueMin())%t,r=e-n;return 2*Math.abs(n)>=t&&(r+=n>0?t:-t),parseFloat(r.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var t,n,r,i,s,o=this.options.range,u=this.options,a=this,f=this._animateOff?!1:u.animate,l={};this.options.values&&this.options.values.length?this.handles.each(function(r){n=100*((a.values(r)-a._valueMin())/(a._valueMax()-a._valueMin())),l["horizontal"===a.orientation?"left":"bottom"]=n+"%",e(this).stop(1,1)[f?"animate":"css"](l,u.animate),a.options.range===!0&&("horizontal"===a.orientation?(0===r&&a.range.stop(1,1)[f?"animate":"css"]({left:n+"%"},u.animate),1===r&&a.range[f?"animate":"css"]({width:n-t+"%"},{queue:!1,duration:u.animate})):(0===r&&a.range.stop(1,1)[f?"animate":"css"]({bottom:n+"%"},u.animate),1===r&&a.range[f?"animate":"css"]({height:n-t+"%"},{queue:!1,duration:u.animate}))),t=n}):(r=this.value(),i=this._valueMin(),s=this._valueMax(),n=s!==i?100*((r-i)/(s-i)):0,l["horizontal"===this.orientation?"left":"bottom"]=n+"%",this.handle.stop(1,1)[f?"animate":"css"](l,u.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[f?"animate":"css"]({width:n+"%"},u.animate),"max"===o&&"horizontal"===this.orientation&&this.range[f?"animate":"css"]({width:100-n+"%"},{queue:!1,duration:u.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[f?"animate":"css"]({height:n+"%"},u.animate),"max"===o&&"vertical"===this.orientation&&this.range[f?"animate":"css"]({height:100-n+"%"},{queue:!1,duration:u.animate}))},_handleEvents:{keydown:function(n){var r,i,s,o,u=e(n.target).data("ui-slider-handle-index");switch(n.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(n.preventDefault(),!this._keySliding&&(this._keySliding=!0,e(n.target).addClass("ui-state-active"),r=this._start(n,u),r===!1))return}switch(o=this.options.step,i=s=this.options.values&&this.options.values.length?this.values(u):this.value(),n.keyCode){case e.ui.keyCode.HOME:s=this._valueMin();break;case e.ui.keyCode.END:s=this._valueMax();break;case e.ui.keyCode.PAGE_UP:s=this._trimAlignValue(i+(this._valueMax()-this._valueMin())/t);break;case e.ui.keyCode.PAGE_DOWN:s=this._trimAlignValue(i-(this._valueMax()-this._valueMin())/t);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(i===this._valueMax())return;s=this._trimAlignValue(i+o);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(i===this._valueMin())return;s=this._trimAlignValue(i-o)}this._slide(n,u,s)},click:function(e){e.preventDefault()},keyup:function(t){var n=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,n),this._change(t,n),e(t.target).removeClass("ui-state-active"))}}})}(jQuery),define("jqueryUI",function(){}),typeof PAYPAL=="undefined"&&(window.PAYPAL={}),$.fn.namespace=function(){var e=arguments,t=null,n,r,i;for(r=0;r<e.length;++r){n=e[r].split("."),t=window;for(i=0;i<n.length;++i)t[n[i]]=t[n[i]]||{},t=t[n[i]]}return t},$.fn.namespace("PAYPAL.common","PAYPAL.core","PAYPAL.util","PAYPAL.bp","PAYPAL.ks","PAYPAL.tns","PAYPAL.core.util","PAYPAL.core.widget","PAYPAL.widget","PAYPAL.global"),PAYPAL.global.Highlight=function(e){var t="#ffd683",n=2e3;$(e).effect("highlight",{color:t},n)},document.documentElement.className+=" jsEnabled",PAYPAL.global.lazyLoadRoot="",PAYPAL.global.lazyLoad=function(e,t){var n=document.createElement("script");n.type="text/javascript",typeof t!="undefined"&&(n.readyState?n.onreadystatechange=function(){(n.readyState=="loaded"||n.readyState=="complete")&&t()}:n.onload=function(){t()}),n.src=PAYPAL.global.lazyLoadRoot+e,document.getElementsByTagName("head")[0].appendChild(n)},PAYPAL.global.HideShow=function(e,t,n){this.el=e,this.trigger=t,this.value=n,this.init()},PAYPAL.global.HideShow.prototype={init:function(){this.el=typeof this.el=="string"?$("#"+this.el):this.el,this.trigger=typeof this.trigger=="string"?$("#"+this.trigger):this.trigger,(this.isOpen=$(this.el).hasClass("opened"))?this.show():this.hide(),this.setTrigger(this.trigger)},toggle:function(){this.isOpen?this.hide():this.show()},hide:function(e){e&&(this.el=e),$(this.el).removeClass("opened"),$(this.el).addClass("accessAid"),$(this.trigger).removeClass("opened"),this.isOpen=!1,$(this.el).trigger("hide")},show:function(e){e&&(this.el=e),$(this.el).removeClass("accessAid"),$(this.el).addClass("opened"),$(this.trigger).addClass("opened"),this.isOpen=!0,$(this.el).trigger("show")},setTrigger:function(e){if(!e)return;if(e){var t=this,n=e.prop("tagName")&&e.prop("tagName").toLowerCase();n=="a"?$(e).bind("click",function(e){e.preventDefault(),t.toggle()}):n=="select"?$(e).bind("change",function(e){t.value&&t.value===this.value||!t.value&&this.checked?t.show():t.hide()}):$(e).bind("click",function(e){t.value&&t.value===this.value||!t.value&&this.checked?t.show():t.hide()})}},toggleOpposite:function(e){var t;e=typeof e=="string"?$("#"+e):e,this.isOpened||$(e).addClass("opened"),e instanceof PAYPAL.global.HideShow?t=e:t=new PAYPAL.global.HideShow(e),$(e).bind("hide",function(){t.show(e)}),$(e).bind("show",function(){t.hide(e)})}},PAYPAL.global.captureEnter=function(e){if(e.charCode||e.keyCode){var t=e.charCode||e.keyCode,n=e.target||e.srcElement,r=/INPUT/i,i=/SUBMIT|IMAGE/i,s,o;if(t==13&&r.test(n.nodeName)&&!i.test(n.type))while(n=n.parentNode){var u=n.nodeName.toLowerCase();if(u=="form")return o=$(".default",n),o&&o.length>0&&(e.preventDefault(),o[0].click()),!0;u=="fieldset"&&(o=$(".default",n),$(o).each(function(){s=$(this).parent().get(0);while(s=s.parentNode)if(s.nodeName.toLowerCase()=="fieldset"){if(s==n)return e.preventDefault(),$(this).click(),!0;break}}))}}},PAYPAL.global.SafeSubmit=function(){$("form.safeSubmit").bind("submit",function(e){typeof $(this)._submitted=="undefined"?($(this)._submitted=!0,$(this).addClass("submitted")):e.preventDefault()})},PAYPAL.global.getMultipleSubmitForms=function(){$(".multiplesubmitform").bind("keypress",function(e){PAYPAL.global.captureEnter(e)})},$(document).ready(function(){PAYPAL.global.getMultipleSubmitForms(),PAYPAL.global.SafeSubmit(),$(".hideshow").each(function(){var e=$(this).attr("id");e="#"+e;var t=$('a[href="'+e+'"'+"]"),n=[];$(t).each(function(){n.push(this)});var r=new PAYPAL.global.HideShow($(this));for(var i=0;i<n.length;i++)r.setTrigger(n[i])})}),define("paypal",function(){}),function(e){e.extend(e.fn,{validate:function(t){if(!this.length){t&&t.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing.");return}var n=e.data(this[0],"validator");return n?n:(this.attr("novalidate","novalidate"),n=new e.validator(t,this[0]),e.data(this[0],"validator",n),n.settings.onsubmit&&(this.validateDelegate(":submit","click",function(t){n.settings.submitHandler&&(n.submitButton=t.target),e(t.target).hasClass("cancel")&&(n.cancelSubmit=!0),e(t.target).attr("formnovalidate")!==undefined&&(n.cancelSubmit=!0)}),this.submit(function(t){function r(){var r;return n.settings.submitHandler?(n.submitButton&&(r=e("<input type='hidden'/>").attr("name",n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)),n.settings.submitHandler.call(n,n.currentForm,t),n.submitButton&&r.remove(),!1):!0}return n.settings.debug&&t.preventDefault(),n.cancelSubmit?(n.cancelSubmit=!1,r()):n.form()?n.pendingRequest?(n.formSubmitted=!0,!1):r():(n.focusInvalid(),!1)})),n)},valid:function(){if(e(this[0]).is("form"))return this.validate().form();var t=!0,n=e(this[0].form).validate();return this.each(function(){t=t&&n.element(this)}),t},removeAttrs:function(t){var n={},r=this;return e.each(t.split(/\s/),function(e,t){n[t]=r.attr(t),r.removeAttr(t)}),n},rules:function(t,n){var r=this[0];if(t){var i=e.data(r.form,"validator").settings,s=i.rules,o=e.validator.staticRules(r);switch(t){case"add":e.extend(o,e.validator.normalizeRule(n)),delete o.messages,s[r.name]=o,n.messages&&(i.messages[r.name]=e.extend(i.messages[r.name],n.messages));break;case"remove":if(!n)return delete s[r.name],o;var u={};return e.each(n.split(/\s/),function(e,t){u[t]=o[t],delete o[t]}),u}}var a=e.validator.normalizeRules(e.extend({},e.validator.classRules(r),e.validator.attributeRules(r),e.validator.dataRules(r),e.validator.staticRules(r)),r);if(a.required){var f=a.required;delete a.required,a=e.extend({required:f},a)}return a}}),e.extend(e.expr[":"],{blank:function(t){return!e.trim(""+e(t).val())},filled:function(t){return!!e.trim(""+e(t).val())},unchecked:function(t){return!e(t).prop("checked")}}),e.validator=function(t,n){this.settings=e.extend(!0,{},e.validator.defaults,t),this.currentForm=n,this.init()},e.validator.format=function(t,n){return arguments.length===1?function(){var n=e.makeArray(arguments);return n.unshift(t),e.validator.format.apply(this,n)}:(arguments.length>2&&n.constructor!==Array&&(n=e.makeArray(arguments).slice(1)),n.constructor!==Array&&(n=[n]),e.each(n,function(e,n){t=t.replace(new RegExp("\\{"+e+"\\}","g"),function(){return n})}),t)},e.extend(e.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:!0,errorContainer:e([]),errorLabelContainer:e([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(e,t){this.lastActive=e,this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,e,this.settings.errorClass,this.settings.validClass),this.addWrapper(this.errorsFor(e)).hide())},onfocusout:function(e,t){!this.checkable(e)&&(e.name in this.submitted||!this.optional(e))&&this.element(e)},onkeyup:function(e,t){if(t.which===9&&this.elementValue(e)==="")return;(e.name in this.submitted||e===this.lastElement)&&this.element(e)},onclick:function(e,t){e.name in this.submitted?this.element(e):e.parentNode.name in this.submitted&&this.element(e.parentNode)},highlight:function(t,n,r){t.type==="radio"?this.findByName(t.name).addClass(n).removeClass(r):e(t).addClass(n).removeClass(r)},unhighlight:function(t,n,r){t.type==="radio"?this.findByName(t.name).removeClass(n).addClass(r):e(t).removeClass(n).addClass(r)}},setDefaults:function(t){e.extend(e.validator.defaults,t)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:e.validator.format("Please enter no more than {0} characters."),minlength:e.validator.format("Please enter at least {0} characters."),rangelength:e.validator.format("Please enter a value between {0} and {1} characters long."),range:e.validator.format("Please enter a value between {0} and {1}."),max:e.validator.format("Please enter a value less than or equal to {0}."),min:e.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function r(t){var n=e.data(this[0].form,"validator"),r="on"+t.type.replace(/^validate/,"");n.settings[r]&&n.settings[r].call(n,this[0],t)}this.labelContainer=e(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||e(this.currentForm),this.containers=e(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var t=this.groups={};e.each(this.settings.groups,function(n,r){typeof r=="string"&&(r=r.split(/\s/)),e.each(r,function(e,r){t[r]=n})});var n=this.settings.rules;e.each(n,function(t,r){n[t]=e.validator.normalizeRule(r)}),e(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",r).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",r),this.settings.invalidHandler&&e(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),e.extend(this.submitted,this.errorMap),this.invalid=e.extend({},this.errorMap),this.valid()||e(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var e=0,t=this.currentElements=this.elements();t[e];e++)this.check(t[e]);return this.valid()},element:function(t){t=this.validationTargetFor(this.clean(t)),this.lastElement=t,this.prepareElement(t),this.currentElements=e(t);var n=this.check(t)!==!1;return n?delete this.invalid[t.name]:this.invalid[t.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),n},showErrors:function(t){if(t){e.extend(this.errorMap,t),this.errorList=[];for(var n in t)this.errorList.push({message:t[n],element:this.findByName(n)[0]});this.successList=e.grep(this.successList,function(e){return!(e.name in t)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){e.fn.resetForm&&e(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(e){var t=0;for(var n in e)t++;return t},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return this.size()===0},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{e(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(t){}},findLastActive:function(){var t=this.lastActive;return t&&e.grep(this.errorList,function(e){return e.element.name===t.name}).length===1&&t},elements:function(){var t=this,n={};return e(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){return!this.name&&t.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in n||!t.objectLength(e(this).rules())?!1:(n[this.name]=!0,!0)})},clean:function(t){return e(t)[0]},errors:function(){var t=this.settings.errorClass.replace(" ",".");return e(this.settings.errorElement+"."+t,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=e([]),this.toHide=e([]),this.currentElements=e([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(e){this.reset(),this.toHide=this.errorsFor(e)},elementValue:function(t){var n=e(t).attr("type"),r=e(t).val();return n==="radio"||n==="checkbox"?e("input[name='"+e(t).attr("name")+"']:checked").val():typeof r=="string"?r.replace(/\r/g,""):r},check:function(t){t=this.validationTargetFor(this.clean(t));var n=e(t).rules(),r=!1,i=this.elementValue(t),s;for(var o in n){var u={method:o,parameters:n[o]};try{s=e.validator.methods[o].call(this,i,t,u.parameters);if(s==="dependency-mismatch"){r=!0;continue}r=!1;if(s==="pending"){this.toHide=this.toHide.not(this.errorsFor(t));return}if(!s)return this.formatAndAdd(t,u),!1}catch(a){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+t.id+", check the '"+u.method+"' method.",a),a}}if(r)return;return this.objectLength(n)&&this.successList.push(t),!0},customDataMessage:function(t,n){return e(t).data("msg-"+n.toLowerCase())||t.attributes&&e(t).attr("data-msg-"+n.toLowerCase())},customMessage:function(e,t){var n=this.settings.messages[e];return n&&(n.constructor===String?n:n[t])},findDefined:function(){for(var e=0;e<arguments.length;e++)if(arguments[e]!==undefined)return arguments[e];return undefined},defaultMessage:function(t,n){return this.findDefined(this.customMessage(t.name,n),this.customDataMessage(t,n),!this.settings.ignoreTitle&&t.title||undefined,e.validator.messages[n],"<strong>Warning: No message defined for "+t.name+"</strong>")},formatAndAdd:function(t,n){var r=this.defaultMessage(t,n.method),i=/\$?\{(\d+)\}/g;typeof r=="function"?r=r.call(this,n.parameters,t):i.test(r)&&(r=e.validator.format(r.replace(i,"{$1}"),n.parameters)),this.errorList.push({message:r,element:t}),this.errorMap[t.name]=r,this.submitted[t.name]=r},addWrapper:function(e){return this.settings.wrapper&&(e=e.add(e.parent(this.settings.wrapper))),e},defaultShowErrors:function(){var e,t;for(e=0;this.errorList[e];e++){var n=this.errorList[e];this.settings.highlight&&this.settings.highlight.call(this,n.element,this.settings.errorClass,this.settings.validClass),this.showLabel(n.element,n.message)}this.errorList.length&&(this.toShow=this.toShow.add(this.containers));if(this.settings.success)for(e=0;this.successList[e];e++)this.showLabel(this.successList[e]);if(this.settings.unhighlight)for(e=0,t=this.validElements();t[e];e++)this.settings.unhighlight.call(this,t[e],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return e(this.errorList).map(function(){return this.element})},showLabel:function(t,n){var r=this.errorsFor(t);r.length?(r.removeClass(this.settings.validClass).addClass(this.settings.errorClass),r.html(n)):(r=e("<"+this.settings.errorElement+">").attr("for",this.idOrName(t)).addClass(this.settings.errorClass).html(n||""),this.settings.wrapper&&(r=r.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.append(r).length||(this.settings.errorPlacement?this.settings.errorPlacement(r,e(t)):r.insertAfter(t))),!n&&this.settings.success&&(r.text(""),typeof this.settings.success=="string"?r.addClass(this.settings.success):this.settings.success(r,t)),this.toShow=this.toShow.add(r)},errorsFor:function(t){var n=this.idOrName(t);return this.errors().filter(function(){return e(this).attr("for")===n})},idOrName:function(e){return this.groups[e.name]||(this.checkable(e)?e.name:e.id||e.name)},validationTargetFor:function(e){return this.checkable(e)&&(e=this.findByName(e.name).not(this.settings.ignore)[0]),e},checkable:function(e){return/radio|checkbox/i.test(e.type)},findByName:function(t){return e(this.currentForm).find("[name='"+t+"']")},getLength:function(t,n){switch(n.nodeName.toLowerCase()){case"select":return e("option:selected",n).length;case"input":if(this.checkable(n))return this.findByName(n.name).filter(":checked").length}return t.length},depend:function(e,t){return this.dependTypes[typeof e]?this.dependTypes[typeof e](e,t):!0},dependTypes:{"boolean":function(e,t){return e},string:function(t,n){return!!e(t,n.form).length},"function":function(e,t){return e(t)}},optional:function(t){var n=this.elementValue(t);return!e.validator.methods.required.call(this,n,t)&&"dependency-mismatch"},startRequest:function(e){this.pending[e.name]||(this.pendingRequest++,this.pending[e.name]=!0)},stopRequest:function(t,n){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[t.name],n&&this.pendingRequest===0&&this.formSubmitted&&this.form()?(e(this.currentForm).submit(),this.formSubmitted=!1):!n&&this.pendingRequest===0&&this.formSubmitted&&(e(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(t){return e.data(t,"previousValue")||e.data(t,"previousValue",{old:null,valid:!0,message:this.defaultMessage(t,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(t,n){t.constructor===String?this.classRuleSettings[t]=n:e.extend(this.classRuleSettings,t)},classRules:function(t){var n={},r=e(t).attr("class");return r&&e.each(r.split(" "),function(){this in e.validator.classRuleSettings&&e.extend(n,e.validator.classRuleSettings[this])}),n},attributeRules:function(t){var n={},r=e(t),i=r[0].getAttribute("type");for(var s in e.validator.methods){var o;s==="required"?(o=r.get(0).getAttribute(s),o===""&&(o=!0),o=!!o):o=r.attr(s),/min|max/.test(s)&&(i===null||/number|range|text/.test(i))&&(o=Number(o)),o?n[s]=o:i===s&&i!=="range"&&(n[s]=!0)}return n.maxlength&&/-1|2147483647|524288/.test(n.maxlength)&&delete n.maxlength,n},dataRules:function(t){var n,r,i={},s=e(t);for(n in e.validator.methods)r=s.data("rule-"+n.toLowerCase()),r!==undefined&&(i[n]=r);return i},staticRules:function(t){var n={},r=e.data(t.form,"validator");return r.settings.rules&&(n=e.validator.normalizeRule(r.settings.rules[t.name])||{}),n},normalizeRules:function(t,n){return e.each(t,function(r,i){if(i===!1){delete t[r];return}if(i.param||i.depends){var s=!0;switch(typeof i.depends){case"string":s=!!e(i.depends,n.form).length;break;case"function":s=i.depends.call(n,n)}s?t[r]=i.param!==undefined?i.param:!0:delete t[r]}}),e.each(t,function(r,i){t[r]=e.isFunction(i)?i(n):i}),e.each(["minlength","maxlength"],function(){t[this]&&(t[this]=Number(t[this]))}),e.each(["rangelength","range"],function(){var n;t[this]&&(e.isArray(t[this])?t[this]=[Number(t[this][0]),Number(t[this][1])]:typeof t[this]=="string"&&(n=t[this].split(/[\s,]+/),t[this]=[Number(n[0]),Number(n[1])]))}),e.validator.autoCreateRanges&&(t.min&&t.max&&(t.range=[t.min,t.max],delete t.min,delete t.max),t.minlength&&t.maxlength&&(t.rangelength=[t.minlength,t.maxlength],delete t.minlength,delete t.maxlength)),t},normalizeRule:function(t){if(typeof t=="string"){var n={};e.each(t.split(/\s/),function(){n[this]=!0}),t=n}return t},addMethod:function(t,n,r){e.validator.methods[t]=n,e.validator.messages[t]=r!==undefined?r:e.validator.messages[t],n.length<3&&e.validator.addClassRules(t,e.validator.normalizeRule(t))},methods:{required:function(t,n,r){if(!this.depend(r,n))return"dependency-mismatch";if(n.nodeName.toLowerCase()==="select"){var i=e(n).val();return i&&i.length>0}return this.checkable(n)?this.getLength(t,n)>0:e.trim(t).length>0},email:function(e,t){return this.optional(t)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(e)},url:function(e,t){return this.optional(t)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e)},date:function(e,t){return this.optional(t)||!/Invalid|NaN/.test((new Date(e)).toString())},dateISO:function(e,t){return this.optional(t)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(e)},number:function(e,t){return this.optional(t)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)},digits:function(e,t){return this.optional(t)||/^\d+$/.test(e)},creditcard:function(e,t){if(this.optional(t))return"dependency-mismatch";if(/[^0-9 \-]+/.test(e))return!1;var n=0,r=0,i=!1;e=e.replace(/\D/g,"");for(var s=e.length-1;s>=0;s--){var o=e.charAt(s);r=parseInt(o,10),i&&(r*=2)>9&&(r-=9),n+=r,i=!i}return n%10===0},minlength:function(t,n,r){var i=e.isArray(t)?t.length:this.getLength(e.trim(t),n);return this.optional(n)||i>=r},maxlength:function(t,n,r){var i=e.isArray(t)?t.length:this.getLength(e.trim(t),n);return this.optional(n)||i<=r},rangelength:function(t,n,r){var i=e.isArray(t)?t.length:this.getLength(e.trim(t),n);return this.optional(n)||i>=r[0]&&i<=r[1]},min:function(e,t,n){return this.optional(t)||e>=n},max:function(e,t,n){return this.optional(t)||e<=n},range:function(e,t,n){return this.optional(t)||e>=n[0]&&e<=n[1]},equalTo:function(t,n,r){var i=e(r);return this.settings.onfocusout&&i.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){e(n).valid()}),t===i.val()},remote:function(t,n,r){if(this.optional(n))return"dependency-mismatch";var i=this.previousValue(n);this.settings.messages[n.name]||(this.settings.messages[n.name]={}),i.originalMessage=this.settings.messages[n.name].remote,this.settings.messages[n.name].remote=i.message,r=typeof r=="string"&&{url:r}||r;if(i.old===t)return i.valid;i.old=t;var s=this;this.startRequest(n);var o={};return o[n.name]=t,e.ajax(e.extend(!0,{url:r,mode:"abort",port:"validate"+n.name,dataType:"json",data:o,success:function(r){s.settings.messages[n.name].remote=i.originalMessage;var o=r===!0||r==="true";if(o){var u=s.formSubmitted;s.prepareElement(n),s.formSubmitted=u,s.successList.push(n),delete s.invalid[n.name],s.showErrors()}else{var a={},f=r||s.defaultMessage(n,"remote");a[n.name]=i.message=e.isFunction(f)?f(t):f,s.invalid[n.name]=!0,s.showErrors(a)}i.valid=o,s.stopRequest(n,o)}},r)),"pending"}}}),e.format=e.validator.format}(jQuery),function(e){var t={};if(e.ajaxPrefilter)e.ajaxPrefilter(function(e,n,r){var i=e.port;e.mode==="abort"&&(t[i]&&t[i].abort(),t[i]=r)});else{var n=e.ajax;e.ajax=function(r){var i=("mode"in r?r:e.ajaxSettings).mode,s=("port"in r?r:e.ajaxSettings).port;return i==="abort"?(t[s]&&t[s].abort(),t[s]=n.apply(this,arguments),t[s]):n.apply(this,arguments)}}}(jQuery),function(e){e.extend(e.fn,{validateDelegate:function(t,n,r){return this.bind(n,function(n){var i=e(n.target);if(i.is(t))return r.apply(i,arguments)})}})}(jQuery),define("jqueryValidate",function(){}),jQuery.extend(jQuery.validator.messages,{required:PP_GLOBAL_JS_STRINGS.MESSAGE_REQUIRED,remote:PP_GLOBAL_JS_STRINGS.MESSAGE_REMOTE,email:PP_GLOBAL_JS_STRINGS.MESSAGE_EMAIL,url:PP_GLOBAL_JS_STRINGS.MESSAGE_URL,date:PP_GLOBAL_JS_STRINGS.MESSAGE_DATE,dateISO:PP_GLOBAL_JS_STRINGS.MESSAGE_DATEISO,number:PP_GLOBAL_JS_STRINGS.MESSAGE_NUMBER,digits:PP_GLOBAL_JS_STRINGS.MESSAGE_DIGITS,creditcard:PP_GLOBAL_JS_STRINGS.MESSAGE_CREDITCARD,equalTo:PP_GLOBAL_JS_STRINGS.MESSAGE_EQUALTO,accept:PP_GLOBAL_JS_STRINGS.MESSAGE_ACCEPT,maxlength:jQuery.validator.format(PP_GLOBAL_JS_STRINGS.MESSAGE_MAXLENGTH),minlength:jQuery.validator.format(PP_GLOBAL_JS_STRINGS.MESSAGE_MINLENGTH),rangelength:jQuery.validator.format(PP_GLOBAL_JS_STRINGS.MESSAGE_RANGELENGTH),range:jQuery.validator.format(PP_GLOBAL_JS_STRINGS.MESSAGE_RANGE),max:jQuery.validator.format(PP_GLOBAL_JS_STRINGS.MESSAGE_MAX),min:jQuery.validator.format(PP_GLOBAL_JS_STRINGS.MESSAGE_MIN)}),define("jqueryValidateStrings",function(){}),typeof PAYPAL=="undefined"&&(window.PAYPAL={}),$.namespace=function(){var e=arguments,t=null,n,r,i;for(r=0;r<e.length;++r){n=e[r].split("."),t=PAYPAL;for(i=n[0]=="PAYPAL"?1:0;i<n.length;++i)t[n[i]]=t[n[i]]||{},t=t[n[i]]}return t},$.fn.extend({namespace:$.namespace}),$.namespace("common","PAYPAL.common","PAYPAL.core","PAYPAL.util","PAYPAL.bp","PAYPAL.ks","PAYPAL.tns","PAYPAL.core.util","PAYPAL.core.widget","PAYPAL.widget","PAYPAL.global"),define("namespace",function(){}),PAYPAL.core.Flash={insertFlash:function(e,t,n,r,i,s,o,u,a){typeof r=="string"&&(r=$("#"+r)[0]);if(!r)return!1;var f=this.getVersion();if(f==0||f<parseInt(s,10))return!1;typeof o!="string"&&(o="flashmovie-"+Math.ceil(Math.random()*500)),typeof u!="boolean"&&(u=!1);var l="";return navigator.userAgent.match(/msie/i)!=null||u?l+='<object width="'+t+'" height="'+n+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="'+o+'">':l+='<object width="'+t+'" height="'+n+'" data="'+e+'" type="application/x-shockwave-flash" id="'+o+'">',l+='<param name="movie" value="'+e+'"></param>'+'<param name="wmode" value="transparent"></param>'+'<param name="quality" value="high"></param>'+'<param name="menu" value="false"></param>'+'<param name="allowScriptAccess" value="always"></param>',a&&(l+='<param name="FlashVars" value="'+a+'"></param>'),u&&(l+='<embed src="'+e+'" quality="high" width="'+t+'" height="'+n+'" name="'+o+'" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer"',a&&(l+=' flashvars="'+a+'"'),l+=">"),l+="</object>",i?r.innerHTML=l:r.innerHTML+=l,this.getFlashMovieObject(o)},getFlashMovieObject:function(e){try{if(document.embeds&&document.embeds[e])return document.embeds[e];if(window.document[e])return window.document[e]}catch(t){return $("#"+e)}},getVersion:function(){var e,t=3,n=0;if(navigator.plugins&&navigator.mimeTypes.length)e=navigator.plugins["Shockwave Flash"],e&&(n=parseInt(e.description.replace(/[^0-9.]/g,""),10));else{e=!0;while(e)try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+t),n=t,t++}catch(r){break}}return n}},define("flash",function(){}),$.fn.namespace("PAYPAL.tns"),PAYPAL.tns.hidddenFsoFields={},PAYPAL.tns.MIDinit=function(){PAYPAL.tns.flashDiv=document.createElement("div"),PAYPAL.tns.flashDiv.setAttribute("style","overflow:hidden;height:1px;"),document.body.appendChild(PAYPAL.tns.flashDiv),PAYPAL.tns.flashLocation!=undefined&&(PAYPAL.tns.flashRef=PAYPAL.core.Flash.insertFlash(PAYPAL.tns.flashLocation,1,1,PAYPAL.tns.flashDiv,!0,8,"midflash",!0))},PAYPAL.tns.flashInit=function(){window.document.midflash?PAYPAL.tns.flashRef=window.document.midflash:document.embeds&&document.embeds.midflash&&(PAYPAL.tns.flashRef=document.embeds.midflash);if(PAYPAL.tns.token)PAYPAL.tns.flashRef.writeTokenValue(PAYPAL.tns.token);else try{var e=PAYPAL.tns.flashRef.getTokenValue();if(e){var t={fso:e};PAYPAL.tns.hiddenFsoFields=$.extend(PAYPAL.tns.hiddenFsoFields,t)}else{var n={fso_enabled:PAYPAL.core.Flash.getVersion()};PAYPAL.tns.hiddenFsoFields=$.extend(PAYPAL.tns.hiddenFsoFields,n)}}catch(r){}PAYPAL.tns.appendField(PAYPAL.tns.hiddenFsoFields)},PAYPAL.tns.appendField=function(e){$.each(e,function(e,t){var n=$("<input></input>").attr("name",e).attr("value",t).attr("type","hidden");$("form").each(function(){$(n).clone().appendTo(this)})})},PAYPAL.tns.detectFsoBlock=function(e){if(PAYPAL.tns.loginflow!=null){var t={flow_name:PAYPAL.tns.loginflow};PAYPAL.tns.hiddenFsoFields=$.extend(PAYPAL.tns.hiddenFsoFields,t)}if(e)setTimeout("PAYPAL.tns.flashInit()",500);else{var n={fso_blocked:"1"};PAYPAL.tns.hiddenFsoFields=$.extend(PAYPAL.tns.hiddenFsoFields,n),PAYPAL.tns.appendField(PAYPAL.tns.hiddenFsoFields)}},$(document).ready(function(){PAYPAL.tns.MIDinit()}),define("machineId",function(){}),define("opinionLab",function(){}),function(e){function r(e){var n="https://"+t.countryCode+".paypal.com/"+t.languageCode+"/00/"+escape(e.replace(/\s|\//g,"_"))+".page";return n}function i(){typeof t.isSiteRedirect!="undefined"&&typeof t.isPaymentFlow!="undefined"&&(typeof s!="undefined"&&(typeof s.pageName!="undefined"&&(t.siteCatalystPageName=s.pageName),typeof s.prop7!="undefined"&&(t.siteCatalystC7=s.prop7=="none"?"Unknown":s.prop7),typeof s.prop5!="undefined"&&(t.siteCatalystAccountNumber=s.prop5)),e.custom_var=o())}function o(){var e=t.rLogId+"|"+t.siteCatalystC7+"|"+t.siteCatalystPageName+"|"+t.countryCode+"|"+t.languageCode+"|"+(t.accountNumber&&t.accountNumber.length>0?t.accountNumber:"Unknown")+"|"+(t.siteCatalystAccountNumber&&t.siteCatalystAccountNumber.length>0?t.siteCatalystAccountNumber:"Unknown")+(t.isSiteRedirect?"":"|Unknown|Unknown");return e}function u(){var n=this;e.assignSiteCatalystVars=function(){i.call(n)},e._ht=r("'"+t.siteCatalystPageName+"'"),e.custom_var=o(),t.isSiteRedirect&&(e.baseurl="https://"+t.serverName+"/cgi-bin/webscr?cmd=_handle-sf-redirect"+"&amp;account_number="+t.accountNumber),t.isPaymentFlow&&(e.url_var="https://"+t.serverName+"/cgi-bin/webscr?cmd="+t.commentCardCmd+"&amp;account_number="+t.accountNumber,e.baseurl+="&amp;url_var=https://"+t.serverName+"/cgi-bin/webscr?cmd=cmd$"+t.commentCardCmd+"|account_number$"+t.accountNumber)}var t=window.PAYPAL.opinionLabVars,n=onlineOpinionPopupFn(e);if(typeof t.isSiteRedirect!="undefined"&&typeof t.isPaymentFlow!="undefined"){t.miniBrowser?e.Mini_O_GoT(t.feedback_link,t.isSiteRedirect):t.isSiteRedirect?e.PP_O_GoT(t.feedback_link):e.O_GoT(t.feedback_link),u();if(t.isPaymentFlow){var a;t.isSiteRedirect?a=new n.OpinionLabOnCloseEvent("ppwebscr"):a=new n.OpinionLabOnCloseEvent}}}(opinionLabFn()),define("opinionLabComponent",function(){}),define("onlineOpinionPopup",function(){}),function($){$.fn.namespace("PAYPAL.browserscript"),PAYPAL.browserscript.dataBrowser=[{string:/.*?\(.*?\).*?(Apple).*?(Safari)\/.*?/i,identity:"Safari"},{string:/^Mozilla.*?\(.*?(Konqueror)\/([0-9\.]*).*?\).*?/i,identity:"Konqueror"},{string:/^Mozilla.*?\(.*?(rv).*?\).*?Gecko\/[0-9]*$/,identity:"Mozilla",versionSearch:"rv"},{string:/^Mozilla.*?\(.*?(rv).*?\).*?Netscape\/[0-9\.]*/,identity:"Netscape"},{string:/^(Opera)\/([0-9\.]*) \(([a-z]*)/i,identity:"Opera"},{string:/.*?\(([a-z]*).*? (Firefox)\/([0-9\.]*)$/i,identity:"Firefox"},{string:/.*?\(.*?MSIE.*?\)$/i,identity:"Microsoft Internet Explorer",versionSearch:"MSIE"}],PAYPAL.browserscript.dataOS=[{string:/Win32/,identity:"Windows"},{string:/Mac/,identity:"Mac"},{string:/Linux/,identity:"Linux"}],PAYPAL.browserscript.getClientDetails=function(){var e=navigator.appVersion,t=navigator.userAgent.toLowerCase(),n=navigator.platform,r="Unknown",i=""+parseFloat(navigator.appVersion),s=parseInt(navigator.appVersion,10),o,u,a;(u=t.indexOf("opera mini"))!=-1||(u=t.indexOf("opera mobi"))!=-1||(u=t.indexOf("konqueror"))!=-1||(u=t.indexOf("aol"))!=-1||(u=t.indexOf("chromeframe"))!=-1||(u=t.indexOf("xblwp"))!=-1||(u=t.indexOf("gomezagent"))!=-1||(u=t.indexOf("epiphany"))!=-1||(u=t.indexOf("adobeair"))!=-1||(u=t.indexOf("mobile"))!=-1||(u=t.indexOf("ipad"))!=-1||(u=t.indexOf("iphone"))!=-1||(u=t.indexOf("ipod"))!=-1||(u=t.indexOf("seamonkey"))!=-1||(u=t.indexOf("fennec"))!=-1||(u=t.indexOf("camino"))!=-1||(u=t.indexOf("kindle"))!=-1?(r="Unknown",i=""):(u=t.indexOf("opera"))!=-1?(r="Opera",i=t.substring(u+6),(u=t.indexOf("version"))!=-1&&(i=t.substring(u+8))):(u=t.indexOf("msie"))!=-1?(r="MSIE",i=t.substring(u+5)):(u=t.indexOf("chrome"))!=-1?(r="Chrome",i=t.substring(u+7)):(u=t.indexOf("safari"))!=-1?(r="Safari",(u=t.indexOf("version"))!=-1?i=t.substring(u+8):i=""):(u=t.indexOf("firefox"))!=-1&&(r="Firefox",i=t.substring(u+8)),(a=i.indexOf(";"))!=-1&&(i=i.substring(0,a)),(a=i.indexOf(" "))!=-1&&(i=i.substring(0,a)),s=parseInt(""+i,10),isNaN(s)&&(s=parseInt(navigator.appVersion,10)),(u=t.indexOf("msie"))!=-1&&(u=t.indexOf("trident"))!=-1&&s<8&&(r="Unknown",i=""),(trident_verOffset=t.indexOf("trident"))!=-1&&(trident_version=t.substring(trident_verOffset+8),(a=trident_version.indexOf(";"))!=-1&&(trident_version=trident_version.substring(0,a)),(a=trident_version.indexOf(" "))!=-1&&(trident_version=trident_version.substring(0,a)),(a=trident_version.indexOf(")"))!=-1&&(trident_version=trident_version.substring(0,a))),(u=t.indexOf("msie"))!=-1&&(u=t.indexOf("trident"))!=-1&&s==7&&trident_version==4&&(r="MSIE",i="8.0"),(u=t.indexOf("msie"))!=-1&&(u=t.indexOf("trident"))!=-1&&(s==7||s==8)&&trident_version==5&&(r="MSIE",i="9.0");if(i==""||r=="Unknown")i="Unknown";this.browsername=r,this.browserversion_full=i,this.browserversion=this.browserVersion(navigator.userAgent),this.OSName=this.browserOS(this.dataOS)},PAYPAL.browserscript.browserName=function(e){for(var t=0;t<e.length;t++){var n=e[t].string;n.test(navigator.userAgent)==1&&(this.versionSearchString=e[t].versionSearch||e[t].identity)}},PAYPAL.browserscript.browserOS=function(e){for(var t=0;t<e.length;t++)if(e[t].string.test(navigator.platform)==1)return e[t].identity},PAYPAL.browserscript.browserVersion=function(e){var t=e.indexOf(this.versionSearchString);if(t==-1)return;return parseFloat(e.substring(t+this.versionSearchString.length+1))},PAYPAL.browserscript.browserName(PAYPAL.browserscript.dataBrowser),PAYPAL.browserscript.getClientDetails(),PAYPAL.browserscript.createHiddenFields=function(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n},$(document).ready(function(){for(var k=0;k<document.forms.length;k++)with(document.forms[k])appendChild(PAYPAL.browserscript.createHiddenFields("browser_name",PAYPAL.browserscript.browsername)),appendChild(PAYPAL.browserscript.createHiddenFields("browser_version",PAYPAL.browserscript.browserversion)),appendChild(PAYPAL.browserscript.createHiddenFields("browser_version_full",PAYPAL.browserscript.browserversion_full)),appendChild(PAYPAL.browserscript.createHiddenFields("operating_system",PAYPAL.browserscript.OSName))})}(jQuery),define("unsafeBrowsers",function(){}),function(){function e(){var t={__indexToValue:[],__indexToKeys:[]},n=[],r=0,i=this;this.get=function(e){return typeof t[e]=="number"?t.__indexToValue[t[e]]:null},this.put=function(e,n){typeof t[e]=="number"?t.__indexToValue[t[e]]=n:(t[e]=r,t.__indexToValue[r]=n,t.__indexToKeys[r++]=e)},e.prototype.containsKey=function(e){return this.get(e)!=null}}$.fn.namespace("PAYPAL.common"),$.fn.namespace("PAYPAL.bp"),$.fn.namespace("PAYPAL.ks")}(),function(){PAYPAL.common.appendField=function(e,t,n){var r=document.forms[e],i=document.createElement("input");i.setAttribute("type","hidden"),i.setAttribute("id",t),i.setAttribute("name",t),n!==undefined&&i.setAttribute("value",n),r.appendChild(i)}}(),function(){PAYPAL.bp={scriptVersion:1,attributeArray:[["a1","ScriptEngineMajorVersion()"],["a2","ScriptEngineMinorVersion()"],["a3","ScriptEngineBuildVersion()"],["a4","navigator.appCodeName"],["a5","navigator.appName"],["a6","navigator.appVersion"],["a7","helper.exec(['navigator.productSub','navigator.appMinorVersion'])"],["a8","navigator.browserLanguage"],["a9","navigator.cookieEnabled"],["a10","helper.exec(['navigator.oscpu','navigator.cpuClass'])"],["a11","navigator.onLine"],["a12","navigator.platform"],["a13","navigator.systemLanguage"],["a14","navigator.userAgent"],["a15","navigator.javaEnabled()"],["a16","helper.exec(['navigator.language', 'navigator.userLanguage'])"],["a17","document.defaultCharset"],["a18","document.domain"],["a19","screen.deviceXDPI"],["a20","screen.deviceYDPI"],["a21","screen.fontSmoothingEnabled"],["a22","screen.updateInterval"],["a23","screen.width"],["a24","screen.height"],["a25","screen.colorDepth"],["a26","screen.availHeight"],["a27","screen.availwidth"],["a28","kgObject.clientTime"],["a29","kgObject.clientTimeZone()"],["a30","kgObject.clientSoftware()"],["a31","kgHelper.isAJAXSupported()"],["a32","kgHelper.getCPU()"],["a33","kgHelper.isCssSupported()"],["a34","kgHelper.isDotNetSupported()"],["a35","kgHelper.isGearsInstalled()"],["a36","kgHelper.getGeoLocation()"],["a37","kgHelper.hasGoogleChrome()"],["a38","kgHelper.isOnline()"],["a39","kgHelper.hasOpenOffice()"],["a40","kgHelper.getOperatingSystem()"],["a41","kgHelper.isWebKitSupported()"],["a42","kgHelper.hasEvilPlugin()"]],EbayKgClientInfoHelper:function(){this.isAJAXSupported=function(){var e;try{e=new XMLHttpRequest}catch(t){try{e=new ActiveXObject("Msxml2.XMLHTTP")}catch(t){try{e=new ActiveXObject("Microsoft.XMLHTTP")}catch(t){return"na"}}}return e?"yes":"no"},this.getCPU=function(){if(typeof navigator.cpuClass!="undefined"&&navigator.cpuClass!=""){var e=navigator.cpuClass,t=navigator.userAgent;return t.indexOf("WOW")>0&&(e="wow64"),e}return"na"},this.isCssSupported=function(){var e=document.createElement("div");e.id="css_test",e.style.color="red",document.body.appendChild(e);var t=document.getElementById("css_test");if(t.currentStyle){var n=t.currentStyle["color"]!=e.style.color?"no":"yes";return document.body.removeChild(e),n}return"na"},this.isDotNetSupported=function(){var e=!1;return navigator.plugins["Windows Presentation Foundation"]&&(e=!0),e?"yes":"no"},this.getGeoLocation=function(){return"geolocation"in navigator?"yes":"no"},this.isGearsInstalled=function(){return window.google&&google.gears?"yes":"no"},this.hasGoogleChrome=function(){var e;return e=navigator.userAgent.toLowerCase().indexOf("chrome")>-1,e?"yes":"no"},this.isOnline=function(){return typeof navigator.onLine!="undefined"?navigator.onLine?"online":"offline":"na"},this.hasOpenOffice=function(){var e=!1;return navigator.plugins?(navigator.plugins["OpenOffice.org Plug-in"]&&(e=!0),e?"yes":"no"):"na"},this.getOperatingSystem=function(){return typeof navigator.oscpu=="string"?navigator.oscpu:typeof navigator.platform!="undefined"?navigator.platform:"na"},this.isWebKitSupported=function(){var e=navigator.userAgent;return webkit=RegExp("AppleWebKit/").test(e),webkit?"yes":"no"},this.hasEvilPlugin=function(){return navigator.plugins["Evil Plugin"]?"yes":"no"}},kgClientInfoHelper:function(){this.exec=function(possibles){for(var i=0;i<possibles.length;i++)try{var val=eval(possibles[i]);if(val)return val}catch(e){}return""},this.activeXDetect=function(e){var t=document.body.getComponentVersion("{"+e+"}","ComponentID");return t!==null?t:!1},this.stripIllegalChars=function(e){return e.toLowerCase().replace(/\n/g,"n").replace(/\x2F/g,"").replace(/\x5C{2}/g,"")},this.stripFullPath=function(e,t){return e.replace(new RegExp(t),"")},this.outputKeyValuePair=function(e,t){return e+"="+t}},kgClientInfoObject:function(){this.clientTime=new Date,this.clientTimeZone=function(){var e=Math.round((new Date).getTimezoneOffset()/60*-1*1e3)/1e3;return e},this.clientSoftware=function(){var e="|",t="=",n=navigator.userAgent.toLowerCase(),r=n.indexOf("opera")>=0,i=n.indexOf("msie")>=0&&!r,s=new PAYPAL.bp.kgClientInfoHelper,o="",u=new KeyValueMap;u.put("npnul32.dll","def"),u.put("npqtplugin6.dll","qt6"),u.put("npqtplugin5.dll","qt5"),u.put("npqtplugin4.dll","qt4"),u.put("npqtplugin3.dll","qt3"),u.put("npqtplugin2.dll","qt2"),u.put("npqtplugin.dll","qt1"),u.put("nppdf32.dll","pdf"),u.put("NPSWF32.dll","swf"),u.put("NPJava11.dll","j11"),u.put("NPJava12.dll","j12"),u.put("NPJava13.dll","j13"),u.put("NPJava32.dll","j32"),u.put("NPJava14.dll","j14"),u.put("npoji600.dll","j61"),u.put("NPJava131_16.dll","j16"),u.put("NPOFFICE.DLL","mso"),u.put("npdsplay.dll","wpm"),u.put("npwmsdrm.dll","drm"),u.put("npdrmv2.dll","drn"),u.put("nprjplug.dll","rjl"),u.put("nppl3260.dll","rpl"),u.put("nprpjplug.dll","rpv"),u.put("npchime.dll","chm"),u.put("npCortona.dll","cor"),u.put("np32dsw.dll","dsw"),u.put("np32asw.dll","asw");if(navigator.plugins.length>0){temp="",moz="",key="",lastDir="Plugins";for(var a=0;a<navigator.plugins.length;a++)plugin=navigator.plugins[a],moz=s.stripFullPath(plugin.filename,lastDir),key=u.containsKey(moz),key?temp+=u.get(moz)+e:temp+="";o=s.stripIllegalChars(temp)}else if(navigator.mimeTypes.length>0){key="";for(var f=0;f<navigator.mimeTypes.length;f++)mimeType=navigator.mimeTypes[f],key=u.containsKey(mimeType),key?o+=u.get(mimeType)+t+mimeType+e:o+="unknown"+t+mimeType}else if(i){names=["abk","wnt","aol","arb","chs","cht","dht","dhj","dan","dsh","heb","ie5","icw","ibe","iec","ieh","iee","jap","krn","lan","swf","shw","msn","wmp","obp","oex","net","pan","thi","tks","uni","vtc","vnm","mvm","vbs","wfd"],components=["7790769C-0471-11D2-AF11-00C04FA35D02","89820200-ECBD-11CF-8B85-00AA005B4340","47F67D00-9E55-11D1-BAEF-00C04FC2D130","76C19B38-F0C8-11CF-87CC-0020AFEECF20","76C19B34-F0C8-11CF-87CC-0020AFEECF20","76C19B33-F0C8-11CF-87CC-0020AFEECF20","9381D8F2-0288-11D0-9501-00AA00B911A5","4F216970-C90C-11D1-B5C7-0000F8051515","283807B5-2C60-11D0-A31D-00AA00B92C03","44BBA848-CC51-11CF-AAFA-00AA00B6015C","76C19B36-F0C8-11CF-87CC-0020AFEECF20","89820200-ECBD-11CF-8B85-00AA005B4383","5A8D6EE0-3E18-11D0-821E-444553540000","630B1DA0-B465-11D1-9948-00C04F98BBC9","08B0E5C0-4FCB-11CF-AAA5-00401C608555","45EA75A0-A269-11D1-B5BF-0000F8051515","DE5AED00-A4BF-11D1-9948-00C04F98BBC9","76C19B30-F0C8-11CF-87CC-0020AFEECF20","76C19B31-F0C8-11CF-87CC-0020AFEECF20","76C19B50-F0C8-11CF-87CC-0020AFEECF20","D27CDB6E-AE6D-11CF-96B8-444553540000","2A202491-F00D-11CF-87CC-0020AFEECF20","5945C046-LE7D-LLDL-BC44-00C04FD912BE","22D6F312-B0F6-11D0-94AB-0080C74C7E95","3AF36230-A269-11D1-B5BF-0000F8051515","44BBA840-CC51-11CF-AAFA-00AA00B6015C","44BBA842-CC51-11CF-AAFA-00AA00B6015B","76C19B32-F0C8-11CF-87CC-0020AFEECF20","76C19B35-F0C8-11CF-87CC-0020AFEECF20","CC2A9BA0-3BDD-11D0-821E-444553540000","3BF42070-B3B1-11D1-B5C5-0000F8051515","10072CEC-8CC1-11D1-986E-00A0C955B42F","76C19B37-F0C8-11CF-87CC-0020AFEECF20","08B0E5C0-4FCB-11CF-AAA5-00401C608500","4F645220-306D-11D2-995D-00C04F98BBC9","73FA19D0-2D75-11D2-995D-00C04F98BBC9"],document.body.addBehavior("#default#clientCaps");for(f=0;f<components.length;f++){ver=s.activeXDetect(components[f]);var l=names[f];ver?o+=l+t+ver+e:o+=""}}return o}},init:function(formName,fieldName){var infoStr="",kgHelper=new PAYPAL.bp.EbayKgClientInfoHelper,helper=new PAYPAL.bp.kgClientInfoHelper,kgObject=new PAYPAL.bp.kgClientInfoObject;for(var k=0;k<PAYPAL.bp.attributeArray.length;k++){var paramStr=PAYPAL.bp.attributeArray[k][0],paramExp=PAYPAL.bp.attributeArray[k][1],val="";try{val=eval(paramExp),typeof val=="undefined"&&(val="na")}catch(e){val="na"}infoStr+=helper.outputKeyValuePair(paramStr,val)+"~"}PAYPAL.common.appendField(formName,fieldName),document.getElementById(fieldName).value="v="+PAYPAL.bp.scriptVersion+";"+infoStr}}}(),function(){PAYPAL.ks={scriptVersion:1,init:function(e,t,n){PAYPAL.common.appendField(e,n);var r=new this.handler(t,n);$("#"+t).bind("keydown",function(e){r.capture(e)}),$("#"+t).bind("keyup",function(e){r.capture(e)})},handler:function(e,t){this.cFieldId=e,this.sFieldName=t,this.baseTime=(new Date).getTime(),this.keyIndex=0,this.keyIndexArray=[],this.storageArray=[],this.ignoreArray={9:"tab",16:"shift",17:"ctrl",18:"alt"},this.keeperArray={8:"bkspace",46:"delete"},this.capture=function(e){var t,n;window.event?t=e.keyCode:e.which&&(t=e.which);if(!(t in this.ignoreArray)){var r=(new Date).getTime();n=r-this.baseTime,this.baseTime=r,t in this.keeperArray?e.type=="keydown"?this.storageArray.push("Dk"+t+":"+n):e.type=="keyup"&&this.storageArray.push("Uk"+t+":"+n):e.type=="keydown"?(this.storageArray.push("Di"+this.keyIndex+":"+n),this.keyIndexArray[t]=this.keyIndex,this.keyIndex++):e.type=="keyup"&&this.storageArray.push("Ui"+this.keyIndexArray[t]+":"+n);var i=document.getElementById(this.cFieldId);document.getElementById(this.sFieldName).value="v="+PAYPAL.ks.scriptVersion+";"+"l="+i.value.length+";"+this.storageArray.join("")}}}}}(),define("bid",function(){}),require(["jquery","jqueryUI","paypal","jqueryValidate","jqueryValidateStrings","namespace","flash","machineId","opinionLab","opinionLabComponent","onlineOpinionPopup","unsafeBrowsers","bid"]),define("main-combined.req",function(){});

/**
 * @name Moving Background
 * @author Jason Gabriele <jgabriele@paypal.com>
 *
 * @fileOverview Background HTML5 videos.
 * Features:
 *  - Pauses when they scroll out of view
 *  - You can stop all videos on page using PAYPAL.Marketing.MovingBackground.BlockAll()
 *  - Only loads on desktop browsers that support HTML5
 *
 * @example
 *   new PAYPAL.Marketing.MovingBackground("#hero", "https://www.paypalobjects.com/webstatic/mktg/videos/homepage-video-v1.mp4");
 *
 * Homepage hero video.
 */

$.fn.namespace("PAYPAL.Marketing");

(function() {
    "use strict";

    // For performance purposes, set a floor on how often the scroll function is called
    var MINIMUM_EVENT_TIMING = 50;

    /**
     * @constructor
     * @this MovingBackground
     * @param {object|string} container The container that the video will be placed in
     * @param {boolean} (Optional) Loop video - default true
     */
    PAYPAL.Marketing.MovingBackground = function (container) {
        this._$container = $(container);
        this._video = $("video");
        this._videoBg = $(".novideo-bg");

        // Check for video support
        if (Modernizr === "undefined" || Modernizr.video === false || 
            (Modernizr.video.h264 === '' && Modernizr.video.webm === '') || 
            $(document.documentElement).data("device-type") !== 'dedicated') {
            
            // show the video first frame as an image instead
            this._videoBg.addClass("show");
            return;
        };

        // Video Override
        this._forcePause = false;
        this._userPause = false;

        // Check for looping
        if (arguments.length <= 1 || arguments[1] !== false) {
            this._video.attr("loop", "loop");
        }

        // Play/Pause buttons
        this._$playButton = $("<a>" + PP_GLOBAL_JS_STRINGS['CLICK_TO_PLAY'] + "</a>");
        this._$playButton.addClass("mb-button play");
        this._$playButton.attr("href", "#" + PP_GLOBAL_JS_STRINGS['PLAY']);
        this._$playButton.attr("role", "button");
        this._$pauseButton = $("<a>" + PP_GLOBAL_JS_STRINGS['PAUSE'] + "</a>");
        this._$pauseButton.addClass("mb-button pause");
        this._$pauseButton.attr("href", "#" + PP_GLOBAL_JS_STRINGS['PAUSE']);
        this._$pauseButton.attr("role", "button");

        // Add events first
        this._attachEvents();

        // Insert Video
        this._$container.append(this._$playButton);
        this._$container.append(this._$pauseButton);

        // Add to video list
        PAYPAL.Marketing.MovingBackground._videos.push(this);

        // Check initial state
        this._checkState();
    };

    PAYPAL.Marketing.MovingBackground.prototype = {
        _events: null,

        /**
         * Remove all events
         */
        destroy: function() {
            this._detachEvents();

            // Remove from all videos
            var ind = PAYPAL.Marketing.MovingBackground._videos.indexOf(this);
            if (ind >= 0) PAYPAL.Marketing.MovingBackground._videos.splice(ind, 1);
        },

        /**
         * Are events attached?
         */
        _eventsAttached: function() {
            return this._events !== null;
        },

        // Hide default image
        _removeBG: function() {
            this._$container.addClass("video-loaded");
        },

        /**
         * Attach all events
         */
        _attachEvents: function() {
            // Already attached
            if (this._eventsAttached()) {
                return;
            }

            this._events = [];
            this._delayedCommands = {};

            // Load
            this._events.push(this._video.on("canplay", $.proxy(this._removeBG, this)));
            this._events.push(this._video.on("canplay", $.proxy(this._resizeVideo, this)));

            // Toggle class
            this._events.push(this._video.on("play pause", $.proxy(this._checkPlayState, this)));

            // Play/Pause buttons
            this._events.push(this._$playButton.on("click", $.proxy(this.play, this)));
            this._events.push(this._$pauseButton.on("click", $.proxy(this.pause, this)));

            // Scroll event
            this._events.push($(window).on("scroll resize", $.proxy(function() {
                // Clear an existing timeout if one is set
                if (this._delayedCommands["scroll"]) {
                    window.clearTimeout(this._delayedCommands["scroll"]);
                    this._delayedCommands["scroll"] = null;
                }

                // Set timeout for scroll event. Set to a minimum of 10 milliseconds so its not called constantly
                this._delayedCommands["scroll"] = window.setTimeout($.proxy(function() {
                    this._checkState();

                    // Clear saved command
                    this._delayedCommands["scroll"] = null;
                }, this), MINIMUM_EVENT_TIMING);
            }, this)));

            // Resize event
            this._events.push($(window).on("resize", $.proxy(this._resizeVideo, this)));
        },

        /**
         * Detach Events
         */
        _detachEvents: function() {
            if ($.isArray(this._events)) {
                $.each(this._events, function(i, ev) {
                    ev.off();
                });

                this._events = null;
            }
        },

        // Checks whether the video is playing and changes the class
        _checkPlayState: function() {
            if (this._video.prop("paused") === false) {
                this._$container.addClass("playing");
            } else {
                this._$container.removeClass("playing");
            }

        },

        /**
         * Checks whether the video is currently in the view
         * if not, pause it
         */
        _checkState: function() {
            var st = $(window).scrollTop(),
                wh = $(window).height(),
                eo = this._$container.offset().top,
                eh = this._$container.outerHeight(),
                vid = this._video.get(0),
                force = (arguments.length > 0 && arguments[0] === true);

            // Don"t run if same value
            if (st === this._lastScroll && !force) return;

            // In bounds
            if (st + wh >= eo && eo + eh >= st) {
                if (this._video.prop("paused") === true && !this._forcePause && !this._userPause &&
                    !(this._video.prop("ended") === true && !force)) {
                    //console.log("play video");
                    vid.play();
                }
            }
            // Out of bounds
            else {
                if (this._video.prop("paused") === false) {
                    //console.log("pause video");
                    vid.pause();
                }
            }

            this._lastScroll = st;
        },

        /**
         * Resize video for aspect fill
         */
        _resizeVideo: function() {
            var w = this._$container.width(),
                h = this._$container.height(),
                vidW = this._video.width(),
                vidH = this._video.height();

            // Width is smaller
            if (vidW < w || (w - vidW) > (h - vidH)) {
                this._video.css("width", w + "px");
                this._video.css("height", "auto");
            }
            // Height is smaller
            else if (vidH < h || (w - vidW) < (h - vidH)) {
                this._video.css("height", h + "px");

                // Weird IE issue
                if ( /*@cc_on!@*/ 0) {
                    this._video.css("width", w + "px");
                } else {
                    this._video.css("width", "auto");
                }
            }
        },

        /**
         * Block Playback
         */
        blockPlay: function() {
            var vid = this._video.get(0);

            this._forcePause = true;

            if (this._video.prop("paused") === false) {
                vid.pause();
            }
        },

        /**
         * Unblock Playback
         */
        unblockPlay: function() {
            this._forcePause = false;

            // Run checkstate
            this._checkState(true);
        },

        /**
         * User forced pause
         */
        pause: function(e) {
            var vid = this._video.get(0);

            e.preventDefault();

            this._userPause = true;

            if (this._video.prop("paused") === false) {
                vid.pause();

                // Focus play button
                window.setTimeout($.proxy(function() {
                    this._$playButton.focus();
                }, this), 10);
            }

            this._checkPlayState();

            // Custom FPTI click tracking
            this._trackButton("pause");
        },

        // Resume
        play: function(e) {
            e.preventDefault();

            this._userPause = false;

            // Run checkstate
            this._checkState(true);

            // Focus pause button
            window.setTimeout($.proxy(function() {
                this._$pauseButton.focus();
            }, this), 10);

            this._checkPlayState();

            // Custom FPTI click tracking
            this._trackButton("play");
        },

        /**
         * Track button click
         */
        _trackButton: function(trackingParam) {
            try {
                // tracks click
                fpti.link = trackingParam;

                // sends the click tracking values to FPTI
                PAYPAL.analytics.instance.recordClick();

                // sticky: need to reset value back to blank
                fpti.link = "";
            } catch (err) {}
        }
    };

    // Static methods to pause/play all videos
    PAYPAL.Marketing.MovingBackground._videos = [];
    PAYPAL.Marketing.MovingBackground.BlockAll = function() {
        for (var i = 0; i < PAYPAL.Marketing.MovingBackground._videos.length; i++) {
            PAYPAL.Marketing.MovingBackground._videos[i].blockPlay();
        }
    };

    PAYPAL.Marketing.MovingBackground.UnblockAll = function() {
        for (var i = 0; i < PAYPAL.Marketing.MovingBackground._videos.length; i++) {
            PAYPAL.Marketing.MovingBackground._videos[i].unblockPlay();
        }
    };
})();

/*jslint sub: true, todo: true, nomen: true */

/**
 * @name Scroll Button
 * @author Jason Gabriele <jgabriele@paypal.com>
 *
 * @fileOverview Smooth scrolls to the anchor
 *
 * @example
 *  new PAYPAL.Marketing.ScrollButton('#top-scroll-button');
 */
$.fn.namespace("PAYPAL.Marketing");
(function () {
    "use strict";
    // Number of ms for animation
    var ANIMATION_TIME = 600;
    /**
     * @constructor
     * @this ScrollButton
     * @param {object|string} Anchor link
     */
    PAYPAL.Marketing.ScrollButton = function (anc) {
        this._$anchor = $(anc);
        var ancId = this._$anchor.attr('href'),
            ancEl = $(ancId);
        // Regular link
        if (ancId.substring(0, 1) !== '#') {
            return;
        };

        this._ancId = ancId;
        this._ancEl = ancEl;

        // Anchor point does not exist
        if (this._ancEl.length === 0) {
            return;
        };

        // Add events first
        this._attachEvents();
    };

    PAYPAL.Marketing.ScrollButton.prototype = {
        _events: null,

        /**
         * Remove all events
         */
        destroy: function () {
            this._detachEvents();
        },

        /**
         * Are events attached?
         */
        _eventsAttached: function () {
            return this._events !== null;
        },

        /**
         * Attach all events
         */
        _attachEvents: function () {
            // Already attached
            if (this._eventsAttached()) {
                return;
            }
            this._events = [];
            // Load
            this._events.push(this._$anchor.on('click', $.proxy(this._scrollToAnchor, this)));
        },

        /**
         * Detach Events
         */
        _detachEvents: function () {
            if ($.isArray(this._events)) {
                $.each(this._events, function (ev) {
                    ev.off();
                });
                this._events = null;
            }
        },

        _scrollToAnchor: function (e) {
            var ancId = this._ancId,
                st = this._ancEl.offset().top;
            e.preventDefault();
            $('html, body').stop().animate({
                'scrollTop': st
            }, ANIMATION_TIME, 'swing', function () {
                window.location.hash = ancId;
            });
            // Custom FPTI click tracking
            this._trackButton(this._$anchor.attr('id'));
        },

        /**
         * Track button click via FPTI
         */
        _trackButton: function (trackingParam) {
            try {
                // Tracks click
                fpti.link = trackingParam;
                // Sends the click tracking values to FPTI
                PAYPAL.analytics.instance.recordClick();
                // Sticky: need to reset value back to blank
                fpti.link = "";
            } catch (err) {}
        }
    };
})();

/**
 * @name Modal Dialog (Lightbox)
 * @author Jason Gabriele <jgabriele@paypal.com>
 *
 * @fileOverview Modal Dialog/Lightbox
 * Extends the JQuery UI Modal Dialog with special effects. The title attribute
 * will be used as the heading in the dialog
 *
 * Also, adds a slide-in box for mobile
 *
 * Note: if you put in an iframe, the modal will automatically load the iframe within
 *
 * @example
 * <div id="forgot-password-modal" title="Password Recovery">
 *   <iframe scrolling="no" data-src="/us/webapps/accountrecovery/passwordrecovery" tabindex="0"></iframe>
 * </div>
 *
 *  new PAYPAL.Marketing.Modal('#forgot-password-modal', { minHeight: 500, minWidth: 350 })
 */

$.fn.namespace("PAYPAL.Marketing");

(function() {
    "use strict";

    // Transition end event
    var TRANSITION_END_NAME = (Modernizr.prefixed('transition') === 'transition') ? 'transitionend' : 'webkitTransitionEnd';

    /**
     * @constructor
     * @this Modal
     * @param {object|string} dialog Modal dialog to use
     * @param {string} options Options for Modal dialog (only applies to non-mobile version)
     */
    PAYPAL.Marketing.Modal = function(dialog, options) {
        this._$dialog = null;
        this._$modal = null;
        this._$closer = null;

        // Check for mobile
        if ($(document.documentElement).data('device-type') === 'mobile') {
            this._$modal = $(dialog);

            // Add aria role
            this._$modal.attr('aria-role', 'dialog');

            // Remove initial class
            this._$modal.removeClass('mpp-modal');

            // Pull off and reattach to body
            this._$modal.remove();
            $(document.body).append(this._$modal);

            // Add main class
            this._$modal.addClass('mobile-modal');

            if (this._$modal.children('.titlebar').length === 0) {
                // Add titlebar
                var titlebar = $('<div></div>');
                titlebar.addClass('titlebar');

                // Take title from modal
                var title = this._$modal.attr('title');
                if (title) {
                    titlebar.text(title);
                }

                // Add close button
                this._$closer = $('<a></a>');
                this._$closer.addClass('closer');
                this._$closer.attr('role', 'button');
                this._$closer.attr('href', '#' + PP_GLOBAL_JS_STRINGS["CLOSE"]);
                this._$closer.text(PP_GLOBAL_JS_STRINGS["CLOSE"]);
                titlebar.append(this._$closer);

                this._$modal.prepend(titlebar);
            }

        } else {
            // Build options
            var opts = {
                modal: true,
                autoOpen: false,
                draggable: false,
                resizable: false,
                closeOnEscape: true,
                dialogClass: 'start'
            };
            $.extend(opts, options);
            this._closeOnEscape = opts["closeOnEscape"];

            // Create it
            this._$dialog = $(dialog).dialog(opts);

            // Add aria-label if necessary
            if ($(dialog).attr('aria-label')) {
                this._$dialog.closest('.ui-dialog').
                attr('aria-label', $(dialog).attr('aria-label')).
                removeAttr('aria-labelledby');
            }

            // Remove initial class
            $(dialog).removeClass('mpp-modal');
        }

        // Add events
        this._attachEvents();
    }

    PAYPAL.Marketing.Modal.prototype = {
        _events: null,

        /**
         * Remove all events
         */
        destroy: function() {
            this._detachEvents();
        },

        /**
         * Are events attached?
         */
        _eventsAttached: function() {
            return this._events !== null;
        },

        /**
         * Attach all events
         */
        _attachEvents: function() {
            // Already attached
            if (this._eventsAttached()) return;

            this._events = [];

            // Dialog events
            if (this._$dialog) {
                this._events.push(this._$dialog.on('dialogopen', $.proxy(this._dialogOpen, this)));
                this._events.push(this._$dialog.on('dialogclose', $.proxy(this._dialogClose, this)));
                this._events.push(this._$dialog.on('dialogbeforeclose', $.proxy(this._fadeOutDialog, this)));

                this._events.push($(window).on('resize', $.proxy(this._reposition, this)));

                // Catch overlay clicks
                if (this._closeOnEscape) {
                   // console.log('attaching _closeOnEscape',this._closeOnEscape);
                    this._events.push($(window).on('click', $.proxy(this._catchOverlay, this)));
                }
                // Disabled
                /*
                this._events.push(this._$dialog.on('submit', $.proxy(function(e)
                {
                    e.preventDefault();

                    // Dismiss dialog
                    this.hide();

                    $(window).trigger('LOGGED_IN', { target: e.target, type: 'LOGGED_IN' });
                }, this)));
                */
            } else {
                this._events.push(this._$modal.on('click', 'a.closer', $.proxy(this.hide, this)));

                // Disabled
                /*
                this._events.push(this._$modal.on('submit', $.proxy(function(e)
                {
                    e.preventDefault();

                    // Dismiss dialog
                    this.hide();

                    $(window).trigger('LOGGED_IN', { target: e.target, type: 'LOGGED_IN' });
                }, this)));
                */
            }
        },

        /**
         * Detach Events
         */
        _detachEvents: function() {
            if ($.isArray(this._events)) {
                $.each(this._events, function(i, ev) {
                    ev.off();
                });

                this._events = null;
            }
        },

        // Reposition jQuery modal window on resize - stupid you need to do this yourself
        _reposition: function(e) {
            this._$dialog.dialog("option", "position", "center");
        },

        // Dialog events
        _dialogOpen: function(e) {
            this._$dialog.closest('.ui-dialog').removeClass('start');

            var d = this._$dialog,
                fireEvent = function() {
                    $(window).trigger('MODAL_OPEN', d);
                };

            // Attach event on transition complete
            if (!Modernizr.csstransitions) {
                window.setTimeout($.proxy(fireEvent, this), 0);
            } else {
                this._$dialog.one(TRANSITION_END_NAME, $.proxy(fireEvent, this));
            }

            // Add body class
            $('#body').addClass('modal-on');

            // Stop Video
            PAYPAL.Marketing.MovingBackground.BlockAll();
        },

        // Fade out modal dialog
        _fadeOutDialog: function(e) {
            var d = this._$dialog.closest('.ui-dialog');

            // Modal already off
            if (d.hasClass('start')) return true;

            // Catch fadeout
            if (!Modernizr.csstransitions) {
                window.setTimeout($.proxy(this._reallyCloseDialog, this), 0);
            } else {
                d.one(TRANSITION_END_NAME, $.proxy(this._reallyCloseDialog, this));
            }

            // Remove body class
            $('#body').removeClass('modal-on');

            // Fade out dialog
            d.addClass('start');

            // Stop jQuery from closing the dialog
            return false;
        },

        // Done fading out
        _reallyCloseDialog: function() {
            this._$dialog.dialog('close');

            this._unloadIframe();
        },

        _dialogClose: function(e) {
            // Play Video
            PAYPAL.Marketing.MovingBackground.UnblockAll();

            // Fire event
            $(window).trigger('MODAL_CLOSED', this._$dialog);
        },

        /**
         * Catch clicks on the overlay
         */
        _catchOverlay: function(e) {
            if (!this._$dialog.dialog('isOpen')) return;

            var t = $(e.target);

            if (t.hasClass('ui-widget-overlay')) {
                e.preventDefault();
                this.hide();
            }
        },

        /**
         * Auto removes the src for an iframe
         */
        _unloadIframe: function() {
            var iframe = (this._$dialog) ? this._$dialog.find('iframe') : this._$modal.find('iframe');

            // Remove iframe if auto-reload
            if (!iframe || !iframe.attr('src') || !iframe.data('auto-reload')) return;

            // Remove src
            iframe.attr('src', '');
        },

        /**
         * Show Dialog
         */
        show: function() {
            var iframe;

            // Check version
            if (this._$dialog) {
                if (this._$dialog.dialog('isOpen')) return;

                this._$dialog.dialog('open');
                iframe = this._$dialog.find('iframe');
            } else {
                this._$modal.addClass('on');
                window.setTimeout($.proxy(function() {
                    var m = this._$modal,
                        fireEvent = function() {
                            $(window).trigger('MODAL_OPEN', m);
                        };

                    // Attach event on transition complete
                    if (!Modernizr.csstransitions) {
                        window.setTimeout($.proxy(fireEvent, this), 0);
                    } else {
                        this._$modal.one(TRANSITION_END_NAME, $.proxy(fireEvent, this));
                    }

                    // Slide into place
                    this._$modal.addClass('inplace');
                }, this), 0);
                iframe = this._$modal.find('iframe');

                // Stop Video
                PAYPAL.Marketing.MovingBackground.BlockAll();
            }

            // Already loaded
            if (!iframe || iframe.attr('src') || !iframe.data('src')) return;

            // Auto load any iframes with data-src attrs
            iframe.attr('src', iframe.data('src'));
        },

        /**
         * Hide Dialog
         */
        hide: function() {

            // Check version
            if (this._$dialog) {
                if (this._$dialog.dialog('isOpen')) this._$dialog.dialog('close');
            } else {
                // Add done event
                if (!Modernizr.csstransitions) {
                    this._$modal.removeClass('on');
                } else {
                    this._$modal.one(TRANSITION_END_NAME, $.proxy(function(e) {
                        this._$modal.removeClass('on');
                    }, this));
                }

                // Start transition
                this._$modal.removeClass('inplace');

                // Play Video
                PAYPAL.Marketing.MovingBackground.UnblockAll();

                // Fire event
                $(window).trigger('MODAL_CLOSED', this._$modal);
            }

            this._unloadIframe();
        }
    };
})();

/**
 * @name Fixed Header
 * @author Jason Gabriele <jgabriele@paypal.com>
 * 
 * @fileOverview Sizes the top header based on browser dimensions for IE 8
 * 
 * Note: This is automatically enabled when you turn on useFixed: true
 */

(function()
{
    "use strict";
    
    // For performance purposes, set a floor on how often the resize function is called
    var MINIMUM_EVENT_TIMING = 10;
    
    // IE has issues
    var IS_IE = (window.ActiveXObject || "ActiveXObject" in window);
    
    var fixedHead = $('#fixed-top'),
        delayedFire,
        imageBG = fixedHead.find('.novideo-bg'),
        resizeTop = function()
        {
            var wh = $(window).height(),
                mod = 1;
            
            /*@cc_on if (@_jscript_version < 9) mod = 1.5; @*/
                    
            // Set bg image size
            if (imageBG.length > 0)
            {
                imageBG.css('height', Math.round(wh*mod) + 'px');
            }
            
            /*@cc_on
            // IE8 has display issues
            if (@_jscript_version < 9)
            {
                wh -= 130;
            }
            @*/
        
            fixedHead.css('height', wh + 'px');
        };
    
    // Doesn't exist
    if (fixedHead.length === 0) return;
    
    // Desktop doesn't need JS resizing
    if (IS_IE === false) return;
    
    // Check size on resize
    $(window).on('resize', function(e)
    {
        // Clear an existing timeout if one is set
        if (delayedFire)
        {
            window.clearTimeout(delayedFire);
            delayedFire = null;
        }
        
        // Set timeout for scroll event. Set to a minimum of 10 milliseconds so its not called constantly
        delayedFire = window.setTimeout(function()
        {
            resizeTop();
            
            // Clear saved command
            delayedFire = null;
        }, MINIMUM_EVENT_TIMING);
    });
    
    // Initial resize
    resizeTop();
})();

/**
 * @name Floating Bar
 * @author Jason Gabriele <jgabriele@paypal.com>
 * 
 * @fileOverview Floating/Sticky Bar 
 * 
 * @example 
 *   new PAYPAL.Marketing.FloatingBar('#floater');
 */

$.fn.namespace("PAYPAL.Marketing");

(function()
{
    // For performance purposes, set a floor on how often the scroll function is called
    var MINIMUM_EVENT_TIMING = 10;

    /**
     * @constructor
     * @this FloatingBar
     * @param {object|string} container The sticky bar
     */
    PAYPAL.Marketing.FloatingBar = function(bar)
    {
        this._$bar = $(bar);
        
        // Add class if necessary
        if (!this._$bar.hasClass('floating-bar')) this._$bar.addClass('floating-bar');
        
        // Check if browser natively supports sticky
        //TODO: Nothing supports it!
        
        // Get original offset
        this._originalOffset = this._$bar.offset().top;
        
        // Create spacer
        this._$spacer = $('<div></div>');
        this._$spacer.addClass('floating-bar-spacer');
        this._$bar.after(this._$spacer);
        
        // Add events first
        this._attachEvents();
        
        // Check initial state
        this._checkState();
    }

    PAYPAL.Marketing.FloatingBar.prototype = {
        _events: null,

        /**
         * Remove all events
         */
        destroy: function()
        {
            this._detachEvents();
        },

        /**
         * Are events attached?
         */
        _eventsAttached: function()
        {
            return this._events !== null;
        },
        
        /**
         * Attach all events
         */
        _attachEvents: function()
        {
            // Already attached
            if (this._eventsAttached()) return;

            this._events = [];
            this._delayedCommands = {};
            
            // Scroll event
            this._events.push($(window).on("scroll", $.proxy(function(e)
            {
                // Clear an existing timeout if one is set
                if (this._delayedCommands['scroll'])
                {
                    window.clearTimeout(this._delayedCommands['scroll']);
                    this._delayedCommands['scroll'] = null;
                }
                
                // Set timeout for scroll event. Set to a minimum of 10 milliseconds so its not called constantly
                this._delayedCommands['scroll'] = window.setTimeout($.proxy(function()
                {
                    this._checkState();
                    
                    // Clear saved command
                    this._delayedCommands['scroll'] = null;
                }, this), MINIMUM_EVENT_TIMING);
            }, this)));
            
            // Recalc bar offset
            this._events.push($(window).on("resize", $.proxy(function(e)
            {
                // Clear an existing timeout if one is set
                if (this._delayedCommands['resize'])
                {
                    window.clearTimeout(this._delayedCommands['resize']);
                    this._delayedCommands['resize'] = null;
                }
                
                // Set timeout for resize event. Set to a minimum of 10 milliseconds so its not called constantly
                this._delayedCommands['resize'] = window.setTimeout($.proxy(function()
                {
                    this._recalc();
                    this._checkState();
                    
                    // Clear saved command
                    this._delayedCommands['resize'] = null;
                }, this), MINIMUM_EVENT_TIMING);
            }, this)));
            
            // For iOS events, call immediately
            if (Modernizr.touch) this._events.push($(window).on("touchmove touchend", $.proxy(this._checkState, this)));
        },

        /**
         * Detach Events
         */
        _detachEvents: function()
        {
            if ($.isArray(this._events))
            {
                $.each(this._events, function(i, ev)
                {
                    ev.off();
                });

                this._events = null;
            }
        },
        
        /**
         * Recalc offset
         */
        _recalc: function(e)
        {
            if (this._$bar.hasClass('on')) return;
            
            this._originalOffset = this._$bar.offset().top;
        },
        
        /**
         * Checks whether the bar is currently in the view
         */
        _checkState: function()
        {
            var st = $(window).scrollTop();
            
            // Don't run if same value
            if (st === this._lastScroll) return;
            
            // Put in a timeout to fix a weird Safari rendering issue
            if (st >= this._originalOffset)
            {
                window.setTimeout($.proxy(this._applyOn, this), MINIMUM_EVENT_TIMING);
            }
            else
            {
                window.setTimeout($.proxy(this._applyOff, this), MINIMUM_EVENT_TIMING);
            }

            this._lastScroll = st;
        },
        
        _applyOn: function()
        {
            // Set height and turn on spacer
            this._$spacer.css('height', this._$bar.outerHeight() + 'px');
            this._$spacer.addClass('on');
            
            this._$bar.addClass('on');
        },
        
        _applyOff: function()
        {
            this._$spacer.removeClass('on');
            this._$bar.removeClass('on');
        }
    };
})();

/**
 * @name Page Indicator
 * @author Jason Gabriele <jgabriele@paypal.com>
 * 
 * @fileOverview Shows page indicator on side of page.
 * 
 * Note: This doesn't really work well on touch devices because there is no hover state
 * 
 * You probably want to modify the width to fit your title:
 * .no-touch .page-indicator:hover li a {
 *    width: 150px;
 * }
 * 
 * @example 
 *  new PAYPAL.Marketing.PageIndicator('class-name');
 */

$.fn.namespace("PAYPAL.Marketing");

(function()
{
    "use strict";
    
    // Number of ms for animation
    var ANIMATION_TIME = 600;
    // For performance purposes, set a floor on how often the scroll function is called
    var MINIMUM_EVENT_TIMING = 10;

    /**
     * @constructor
     * @this PageIndicator
     * @param {string|object} cName Class Name of blocks to use as "Pages" or jQuery selector
     */
    PAYPAL.Marketing.PageIndicator = function(cName)
    {
        // Check whether a string or selector
        if (typeof(cName) === 'string')
        {
            // Remove leading . if present
            if (cName.substring(0,1) === '.') cName = cName.substring(1);
            
            this._$pages = $('.' + cName);
        }
        else
        {
            this._$pages = cName;
        }
        
        // No pages found
        if (this._$pages.length === 0) return;

        // Create page indicator element
        this._$pi = $('<ul></ul>');
        this._$pi.addClass('page-indicator');
        this._$pi.attr('aria-hidden', 'true'); // Turn off for screen readers
        
        // Create number of pages
        for (var i = 0; i < this._$pages.length; i++)
        {
            var p = $('<li></li>'),
                a = $('<a></a>'),
                pId = i,
                title = '';
            
            // Check for anchor tag
            if ($(this._$pages[i]).attr('id')) pId = $(this._$pages[i]).attr('id');
            
            // Check for title
            if ($(this._$pages[i]).data('title')) title = $(this._$pages[i]).data('title');
            
            a.attr('href', '#' + pId);
            a.text(title);
            p.append(a);
            this._$pi.append(p);
        }
        
        // Attach to body
        $(document.body).append(this._$pi);
        
        // Get list of items
        this._$pageList = this._$pi.find('a');
        
        // Attach events
        this._attachEvents();
        
        // Do initial check
        this._scroll();
        
        // Check height
        window.setTimeout($.proxy(function()
        {
            var h = this._$pi.outerHeight();
            this._$pi.css('margin-top', '-' + Math.round(h/2) + 'px');
        }, this), 0);
    }

    PAYPAL.Marketing.PageIndicator.prototype = {
        _events : null,

        /**
         * Remove all events
         */
        destroy : function()
        {
            this._detachEvents();
            
            // Remove element
            this._$pi.remove();
        },

        /**
         * Are events attached?
         */
        _eventsAttached : function()
        {
            return this._events !== null;
        },

        /**
         * Attach all events
         */
        _attachEvents : function()
        {
            // Already attached
            if (this._eventsAttached()) return;

            this._events = [];
            this._delayedCommands = {};

            // Scroll event
            this._events.push($(window).on("scroll resize", $.proxy(function()
            {
                // Clear an existing timeout if one is set
                if (this._delayedCommands['scroll'])
                {
                    window.clearTimeout(this._delayedCommands['scroll']);
                    this._delayedCommands['scroll'] = null;
                }
                
                // Set timeout for scroll event. Set to a minimum of 10 milliseconds so its not called constantly
                this._delayedCommands['scroll'] = window.setTimeout($.proxy(function()
                {
                    this._scroll();
                    
                    // Clear saved command
                    this._delayedCommands['scroll'] = null;
                }, this), MINIMUM_EVENT_TIMING);
            }, this)));
            
            // For iOS
            if (typeof(window.ontouchstart) === "object")
            {
                this._events.push($(window).on("touchmove touchend", $.proxy(this._scroll, this)));
            }
            
            // Page clicks
            this._events.push(this._$pi.on("click", 'a', $.proxy(this._choosePage, this)));
        },

        /**
         * Detach Events
         */
        _detachEvents : function()
        {
            if ($.isArray(this._events))
            {
                $.each(this._events, function(i, ev)
                {
                    ev.off();
                });

                this._events = null;
            }
        },
        
        /**
         * Clicks in the page indicator bar
         */
        _choosePage: function(e)
        {
            e.preventDefault();
            
            var ancId = $(e.target).attr('href').substring(1),
                ancEl = $($(e.target).attr('href'));
            
            // No element
            if (ancEl.length === 0) return;
            
            // Get offset - subtract 1/4 of window height
            var io = ancEl.offset().top,
                offset = Math.max(0, io - Math.round($(window).height() / 4)); 
            
            // Smooth scroll to position
            $('html, body').stop().animate({
                'scrollTop': offset
            }, ANIMATION_TIME, 'swing', function()
            {
                window.location.hash = ancId;
            });
        },

        /**
         * Scroll event
         */
        _scroll : function(e)
        {
            var st = $(window).scrollTop(),
                se = st + Math.round($(window).height() / 2), 
                wh = $(window).height(), 
                currentPage = 1;

            // Don't run if same value
            if (se === this._lastScroll) return;
            
            // At end of page
            if (st + $(window).height() === $(document.body).height())
            {
                currentPage = this._$pages.length;
            }
            else
            {
                // Loop through and find the last item in place
                for (var i = 1; i <= this._$pages.length; i++)
                {
                    var off = $(this._$pages[i-1]).offset().top;
                    
                    if (off > se) break;
                    
                    currentPage = i;
                }
            }
            
            // Remove selected
            this._$pageList.removeClass('selected');
            
            // Set selected page
            $(this._$pageList[currentPage-1]).addClass('selected');

            this._lastScroll = se;
        }
    };
})();

/**
 * @name Carousel
 * @author Jason Gabriele <jgabriele@paypal.com>
 * 
 * @fileOverview Creates a carousel out of a container's children.
 * Scrolls one item at a time.
 * 
 * NOTE: This works on mobile only
 * 
 * @example 
 *   new PAYPAL.Marketing.Carousel('#get-started-carousel');
 */

$.fn.namespace("PAYPAL.Marketing");

(function()
{
    "use strict";
    
    // Number of px they have to move horizontally before stopping vertical scroll
    var X_DELTA = 8;
    
    // Number of px required before we move the card
    var X_MOVE_MIN = 10;
    
    /**
     * @constructor
     * @this Carousel
     * @param {string|object} container Container
     */
    PAYPAL.Marketing.Carousel = function(container)
    {
        // Enable only for mobile
        if($(document.documentElement).data('device-type') !== 'mobile') return;
        
        this._$container = $(container);
        this._$slider = this._$container.children().first();
        this._numItems = this._$slider.children().length;
        
        // Add class
        this._$container.addClass('carousel');
        
        // State
        this._touchStartX = this._lastTouchX = null;
        this._lastDirection = 0;
        this._currentItem = 0;
        this._currentOffset = 0;
        this._tempOffset = 0;
        
        // Create Page Indicator
        this._$pageIndicator = $('<div></div>');
        this._$pageIndicator.addClass('carousel-indicator');
        // Items
        for (var i = 0; i < this._numItems; i++)
        {
            var pii = $('<span>' + i + '</span>');
            if (i === 0) pii.addClass('selected');
            this._$pageIndicator.append(pii);
        }
        this._$container.append(this._$pageIndicator);
        
        // Attach events
        this._attachEvents();
    }

    PAYPAL.Marketing.Carousel.prototype = {
        _events: null,

        /**
         * Remove all events
         */
        destroy: function()
        {
            this._detachEvents();
        },

        /**
         * Are events attached?
         */
        _eventsAttached: function()
        {
            return this._events !== null;
        },

        /**
         * Attach all events
         */
        _attachEvents: function()
        {
            // Already attached
            if (this._eventsAttached()) return;

            this._events = [];
            this._delayedCommands = {};
            
            // Carousel events
            this._events.push(this._$container.on('touchstart', $.proxy(this._touchStart, this)));
            this._events.push(this._$container.on('touchmove', $.proxy(this._touchMove, this)));
            this._events.push(this._$container.on('touchend touchcancel', $.proxy(this._touchEnd, this)));
            
            // Orientation change
            this._events.push($(window).on('orientationchange', $.proxy(this._reset, this)));
        },

        /**
         * Detach Events
         */
        _detachEvents: function()
        {
            if ($.isArray(this._events))
            {
                $.each(this._events, function(i, ev)
                {
                    ev.off();
                });

                this._events = null;
            }
        },
        
        _touchStart: function(e)
        {
            var lastItem = this._$slider.children().last();
            
            this._touchStartX = this._lastTouchX = e.originalEvent.touches[0].pageX;
            this._lastDelta = 0;
            this._itemWidth = lastItem.width() + 
                              parseInt(lastItem.css('padding-left')) +
                              parseInt(lastItem.css('padding-right')) +
                              parseInt(lastItem.css('border-left-width')) +
                              parseInt(lastItem.css('border-right-width')) +
                              parseInt(lastItem.css('margin-left')) + 
                              parseInt(lastItem.css('margin-right'));
            
            // Add moving class
            this._$container.addClass('moving');
        },
        
        _touchMove: function(e)
        {
            // Calc deltas
            var xDelta = e.originalEvent.touches[0].pageX - this._touchStartX;
            
            // If they've moved more than Xpx sideways
            if (Math.abs(xDelta) > X_DELTA)
            {
                // Stop vertical scrolling
                e.preventDefault();
            }
            
            // Direction
            this._lastDirection = e.originalEvent.touches[0].pageX - this._lastTouchX;
            
            // Save Delta
            this._lastDelta = xDelta;
            
            // Last or first item, divide delta in half
            if ((this._currentItem === 0 && this._lastDirection > 0) ||
                (this._currentItem === this._numItems-1 && this._lastDirection < 0)) xDelta /= 2;
            
            // Calc new offset
            this._tempOffset = this._currentOffset + Math.round(xDelta);
            
            // Move the carousel
            this._$slider.css('-webkit-transform', 'translate3d(' + this._tempOffset + 'px,0,0)');
            this._$slider.css('transform', 'translate3d(' + this._tempOffset + 'px,0,0)');
            
            // Store last touch position
            this._lastTouchX = e.originalEvent.touches[0].pageX;
        },
        
        _touchEnd: function(e)
        {
            // Remove moving class
            this._$container.removeClass('moving');
            
            // Determine current item
            // No change
            if (Math.abs(this._lastDelta) < X_MOVE_MIN)
            {
                // Do nothing
            }
            // Left
            else if (this._currentItem > 0 && this._lastDirection > 0)
            {
                this._currentItem--;
            }
            // Right
            else if (this._currentItem+1 < this._numItems && this._lastDirection < 0)
            {
                this._currentItem++;
            }
            
            // Set final position
            this._currentOffset = -(this._itemWidth * this._currentItem);
            
            window.setTimeout($.proxy(function()
            {
                this._$slider.css('-webkit-transform', 'translate3d(' + this._currentOffset + 'px,0,0)');
                this._$slider.css('transform', 'translate3d(' + this._currentOffset + 'px,0,0)');
            }, this), 0);
            
            // Update indicator
            this._$pageIndicator.children().removeClass('selected');
            $(this._$pageIndicator.children()[this._currentItem]).addClass('selected');
        },
        
        /**
         * Reset
         * 
         * Scrolls to current item
         */
        _reset: function(e)
        {
            var lastItem = this._$slider.children().last();
            
            this._itemWidth = lastItem.width() + 
                              parseInt(lastItem.css('padding-left')) +
                              parseInt(lastItem.css('padding-right')) +
                              parseInt(lastItem.css('border-left-width')) +
                              parseInt(lastItem.css('border-right-width')) +
                              parseInt(lastItem.css('margin-left')) + 
                              parseInt(lastItem.css('margin-right'));
            
            this._currentOffset = -(this._itemWidth * this._currentItem);
            
            this._$slider.css('-webkit-transform', 'translate3d(' + this._currentOffset + 'px,0,0)');
            this._$slider.css('transform', 'translate3d(' + this._currentOffset + 'px,0,0)');
        }
    }
})();

/**
 * @name Header Menu
 * @author Jason Gabriele <jgabriele@paypal.com>
 * 
 * @fileOverview Handles both the desktop and mobile versions of the header menus
 * 
 * @example 
 *  new PAYPAL.Marketing.HeaderMenu('#menu-button', '#main-menu', '#login-modal');
 */

$.fn.namespace("PAYPAL.Marketing");

(function()
{
    "use strict";
    
    // Transition end name
    var TRANSITION_END_NAME = (Modernizr.prefixed('transition') === 'transition') ? 'transitionend' : 'webkitTransitionEnd';
    
    // Firefox needs time to render the css before it will calculate transitions
    var RENDERING_DELAY = (typeof window.mozInnerScreenX != 'undefined') ? 15 : 0;
    
    // Number of px they have to move horizontally before the menu starts to close
    var X_DELTA = 12;

    /**
     * @constructor
     * @this HeaderMenu
     * @param {string|object} menuButton Button that triggers the menu to open/close
     * @param {string|object} menuBar Menu system
     * @param {string|object} loginModal Login Modal (Disabled)
     */
    PAYPAL.Marketing.HeaderMenu = function(menuButton, menuBar)
    {
        this._$menu = $(menuBar);
        this._$menuButton = $(menuButton);
        this._$body = $(document.body);
        this._$bodyDiv = this._$body.find('#body');
        
        this._$drops = this._$menu.find('a[rel="menuitem"]');
        this._$wrappers = this._$menu.find('.menu-wrapper');
        this._$menus = this._$menu.find('.subnav');
        
        // State
        this._isOpen = false;
        this._touchStartX = this._lastTouchX = null;
        this._touchStartY = null;
        this._lastDirection = 0;
        this._isMoving = this._isTouchMoving = false;
        
        // Login Modal
        //this._loginModal = new PAYPAL.Marketing.Modal(loginModal, { minHeight: 350, minWidth: 350 });
        this._loginComplete = null;
        
        // Mobile
        this._isMobile = $(document.documentElement).data('device-type') === 'mobile';
        this._useTranslate = true;
        
        // Check for crappy Samsung browsers
        if (navigator.userAgent.indexOf('Android') >= 0 && navigator.userAgent.indexOf('Chrome') === -1)
        {
            this._$body.addClass('samsung');
            this._useTranslate = false;
        }
        
        if (this._isMobile)
        {
            // Resize the menu to begin with
            this._resizeMobileMenu();
            
            // Hide mobile menu when not in use
            this._$menuButton.attr('aria-controls', this._$menu.attr('id'));
            this._$menuButton.attr('aria-expanded', 'false');
            this._$drops.attr('aria-expanded', 'false');
            this._$menu.attr('aria-hidden', 'true');
            
            // Add hidden closer for whole menu
            this._$menu.append(this._createCloser());
        }
        
        // Attach events
        this._attachEvents();
        
        // Add ARIA for accessibility
        this._$drops.attr('role', 'button');
        this._$drops.attr('aria-selected', 'false');
        this._$drops.attr('aria-expanded', 'false');
        
        // Custom phone/email validator
        jQuery.validator.addMethod("optionalemail", function(value, element)
        {
            // If numeric, then return true and let the phone validation run
            if ($.isNumeric(value.replace(/[(). +,-]+/g, ''))) return true;
            
            // Check for email
            // Taken from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
            if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(?:(?!-))+((([a-zA-Z\-0-9]+(?:(?!-))+\.)+[a-zA-Z]{2,}))$/.test(value))
            {
                return true;
            }
            
            return false;
            
        }, PP_GLOBAL_JS_STRINGS["MESSAGE_EMAIL_OR_PHONE"]);
        
        jQuery.validator.addMethod("optionalphone", function(value, element)
        {
            var normalizedValue = value.replace(/[(). +,-]+/g, ''),
                validCC = {
                    '1':  [11],
                    '04': [10],
                    '60': [11, 12],
                    '52': [12],
                    '65': [10],
                    '55': [12, 13],
                    '34': [11],
                    '33': [11],
                    '39': [12],
                    '44': [12]
                },
                hasValidCC = false;
            
            // If email, return true to let email validation run
            if (!$.isNumeric(normalizedValue)) return true;
            
            // Remove leading 0s if longer than 10 characters
            if (normalizedValue.length > 10 && normalizedValue.substr(0, 1) === '0')
            {
                while (normalizedValue.length > 0 && normalizedValue.substr(0, 1) === '0')
                {
                    normalizedValue = normalizedValue.substr(1);
                }
            }
            
            // Make sure not longer than 13 chars
            if (normalizedValue.length > 13) return false;
            
            // Check for singapore
            if (normalizedValue.length === 8 &&
                (normalizedValue.substr(0, 1) === '8' || normalizedValue.substr(0, 1) === '9'))
            {
                hasValidCC = true;
            }
            // Check that number starts with one of the valid country codes and the length is correct for that country
            else
            {
                for (var i in validCC)
                {
                    /* Advanced check 
                    for(var x = 0; x < validCC[i].length; x++)
                    {
                        if (normalizedValue.substr(0, i.length) === i && 
                            normalizedValue.length === validCC[i][x])
                        {
                            hasValidCC = true;
                            break;
                        }
                    }*/
                    
                    // Simple check
                    if (normalizedValue.substr(0, i.length) === i && normalizedValue.length >= 10)
                    {
                        hasValidCC = true;
                        break;
                    }
                    
                    if (hasValidCC) break;
                }
            }
            
            // Check for 10-digit that starts with 1
            if (normalizedValue.length === 10 && normalizedValue.substr(0, 1) === '1') return false;
            
            // Check for phone
            return hasValidCC || normalizedValue.length === 10;
            
        }, PP_GLOBAL_JS_STRINGS["MESSAGE_BADPHONE"]);
        
        jQuery.validator.addMethod("vcurrency", function(value, element)
        {
            // Check for numeric value
            return /^([0-9.,]+)$/.test(value);
            
        }, PP_GLOBAL_JS_STRINGS["MESSAGE_NUMBER"]);
        
        // Only create the validator for desktop/tablet
        if (this._isMobile) return;
        
        // Send money form validation
        this._validator = $('#header-send-money-form').validate({
            rules: {
                email: {
                    optionalemail: true,
                    optionalphone: true,
                    required: true
                },
                amount: {
                    vcurrency: true,
                    required: true
                }
            },
            onsubmit: false,
            showErrors: function(errorMap, errorList)
            {
                // Remove existing errors
                $('#header-send-money-form .error-overlay').remove();
                $('#header-send-money-form .input-wrapper').removeClass('error');
                
                // Loop through each error
                for(var i = 0; i < errorList.length; i++)
                {
                    var element = $(errorList[i].element),
                        wrapper = element.closest('.input-wrapper'),
                        message = '',
                        messageId = 'err-mesg-' + Math.round(Math.random() * 1000);
                    
                    wrapper.addClass('error');
                    
                    // Add message below
                    var errorDiv = $("<div class='error-overlay' id='" + messageId + "'></div>");
                    errorDiv.text(errorList[i].message);
                    wrapper.append(errorDiv);
                    
                    // Set described by
                    element.attr('aria-describedby', messageId);
                }
            }
        });
    }

    PAYPAL.Marketing.HeaderMenu.prototype = {
        _events: null,

        /**
         * Remove all events
         */
        destroy: function()
        {
            this._detachEvents();
        },

        /**
         * Are events attached?
         */
        _eventsAttached: function()
        {
            return this._events !== null;
        },

        /**
         * Attach all events
         */
        _attachEvents: function()
        {
            // Already attached
            if (this._eventsAttached()) return;

            this._events = [];
            this._delayedCommands = {};
            
            // Menu Button & Touch Scrolling
            if (this._isMobile === true)
            {
                this._events.push(this._$menuButton.on('touchstart MSPointerDown pointerdown', $.proxy(this._toggleState, this)));
                this._events.push(this._$menuButton.on('click', $.proxy(this._killIt, this)));
                
                this._events.push($(document.body).on('touchstart MSPointerDown pointerdown', $.proxy(this._touchStart, this)));
                this._events.push($(document.body).on('touchmove MSPointerMove pointermove', $.proxy(this._touchMove, this)));
                this._events.push($(document.body).on('touchend touchcancel MSPointerUp MSPointerCancel pointerup pointercancel', $.proxy(this._touchEnd, this)));
                
                // Menu expansion
                this._events.push(this._$menu.on('touchstart MSPointerDown pointerdown', 'a[rel="menuitem"]', $.proxy(this._toggleMenu, this)));
                
                // Resize menu on rotate
                this._events.push($(window).on('orientationchange', $.proxy(this._resizeMobileMenu, this)));
                
                // Scroll to top if menu open
                this._events.push($(window).on('scroll resize', $.proxy(this._scroll, this)));
                
                // Main menu closer
                this._events.push(this._$menu.on('click', '> .closer', $.proxy(this._toggleState, this)));
            }
            else
            {
                // Menu expansion
                this._events.push(this._$menu.on('click', 'a[rel="menuitem"]', $.proxy(this._toggleMenu, this)));
                
                // Fix weird orientation change scroll issue
                this._events.push($(window).on('orientationchange', $.proxy(this._orientationFix, this)));
            }
            
            // Form submission
            this._events.push(this._$menu.find('form').on('submit', $.proxy(this._formStepper, this)));
            this._events.push(this._$menu.find('input').on('change', $.proxy(this._formStepper, this)));
            // Login event
            //this._events.push($(window).on('LOGGED_IN', $.proxy(this._formStepper, this)));
            
            // Catch clicks on document
            this._events.push($(document.body).on('click', $.proxy(this._autoClose, this)));
            
            // Rotation
            this._events.push($(window).on('orientationchange', $.proxy(this.close, this)));
            
            // Closers
            this._events.push(this._$menu.on('click', '.menu-wrapper .closer', $.proxy(this._toggleMenu, this)));
            
            // Esc
            this._events.push($(document).on('keydown', $.proxy(this._escMenu, this)));
        },

        /**
         * Detach Events
         */
        _detachEvents: function()
        {
            if ($.isArray(this._events))
            {
                $.each(this._events, function(i, ev)
                {
                    ev.off();
                });

                this._events = null;
            }
        },
        
        _killIt: function(e)
        {
            // On mobile, dont do anything
            if (this._isMobile && $(e.target).hasClass('desktop-only')) return;
            
            e.preventDefault();
        },
        
        /**
         * Fix for weird orientation issue when errors are shown
         */
        _orientationFix: function()
        {
            if (!this._$bodyDiv.hasClass('menu-open')) return;
            
            // Hide menu, then scroll back into upper left
            this._closeAllMenus();
            
            // Wait 10 seconds for a reflow
            window.setTimeout($.proxy(function(e)
            {
                window.scrollTo(0, 0);
            }, this), 10);
        },
        
        /**
         * For desktop: clicks outside dropdown close it
         */
        _autoClose: function(e)
        {
            // Check that's actually open
            if (this._$menu.find('.menu-wrapper.open').length === 0) return;
            
            var t = $(e.target),
                inMenu = t.closest(this._$menu),
                inModal = t.closest('.ui-dialog'),
                inMobileModal = t.closest('.mobile-modal'),
                selectedWrapper = this._$menu.find('.menu-wrapper.open');
            
            // If in menu system or modal, then return
            if (inMenu.length > 0 || inModal.length > 0 || inMobileModal.length > 0) return;
            
            // Close existing drops
            this._$drops.removeClass('selected');
            this._$drops.attr('aria-selected', 'false');
            this._$drops.attr('aria-expanded', 'false');
            
            // Close existing menus
            this._$wrappers.removeClass('done');
            this._$wrappers.removeClass('open');
            // Remove body class
            this._$bodyDiv.removeClass('menu-open');
            
            // Only remove menu when done
            if (!Modernizr.csstransitions)
            {
                selectedWrapper.removeClass('on');
                this._isMoving = false;
            }
            else
            {
                selectedWrapper.one(TRANSITION_END_NAME, $.proxy(this._removeWrapperClasses, this));
            }
        },
        
        // Closing X
        _createCloser: function()
        {
            var c = $('<a><span class="accessAid">' + PP_GLOBAL_JS_STRINGS["CLOSE"] + '</span></a>');
            c.attr('href', '#' + PP_GLOBAL_JS_STRINGS["CLOSE"]);
            c.addClass('closer');
            c.attr('role', 'button');
            c.attr('title', PP_GLOBAL_JS_STRINGS["CLOSE"]);
            
            return c;
        },
        
        /**
         * Checks if escape key is pressed then closes all menus
         */
        _escMenu: function(e)
        {
            // Check for keycode and menu open
            if (e.keyCode !== 27 || this._$menu.find('.menu-wrapper.open').length === 0) return;
            
            e.preventDefault();
            
            var selectedWrapper = this._$menu.find('.menu-wrapper.open'),
                selectedItem = selectedWrapper.parent().children('a'),
                selectedSubnav = selectedWrapper.children('.subnav');
            
            // Close existing drops
            this._$drops.removeClass('selected');
            this._$drops.attr('aria-selected', 'false');
            this._$drops.attr('aria-expanded', 'false');
            
            // Close existing menus
            this._$wrappers.removeClass('done');
            this._$wrappers.removeClass('open');
            
            // Remove body class
            this._$bodyDiv.removeClass('menu-open');
            
            // Only remove menu when done
            if (!Modernizr.csstransitions)
            {
                selectedWrapper.removeClass('on');
                this._isMoving = false;
            }
            else
            {
                selectedWrapper.one(TRANSITION_END_NAME, $.proxy(this._removeWrapperClasses, this));
            }
            
            // Focus on menu
            selectedItem.focus();
        },
        
        /**
         * Show subnav
         */
        _toggleMenu: function(e)
        {
            // On mobile, dont do anything
            if (this._isMobile && $(e.target).hasClass('desktop-only')) return;
            
            e.preventDefault();
            
            // Check for moving menu
            if (this._isMoving) return;
            
            var selectedItem = ($(e.target).hasClass('closer')) ? $(e.target).closest('li').children('a[rel="menuitem"]') : $(e.target),
                selectedWrapper = selectedItem.parent().children('.menu-wrapper'),
                selectedSubnav = selectedWrapper.children('.subnav');
            
            // Remove all closers
            this._$wrappers.find('.closer').remove();
            
            // If already open, allow the menu to close then return
            if (selectedItem.hasClass('selected'))
            {
                // Mark as moving
                this._isMoving = true;
                
                // Close existing drops
                this._$drops.removeClass('selected');
                this._$drops.attr('aria-selected', 'false');
                this._$drops.attr('aria-expanded', 'false');
                
                // Close existing menus
                this._$wrappers.removeClass('done');
                
                // Add fixed height for mobile
                if (this._isMobile) this._resizeMobileMenu();
                
                // Wait until done removal registers
                window.setTimeout($.proxy(function()
                {
                    this._$wrappers.removeClass('open');
                    this._$wrappers.css('height', '');
                    
                    // Remove body class
                    this._$bodyDiv.removeClass('menu-open');
                    
                    // Only remove menu when done
                    if (!Modernizr.csstransitions)
                    {
                        selectedWrapper.removeClass('on');
                        this._isMoving = false;
                    }
                    else
                    {
                        selectedWrapper.one(TRANSITION_END_NAME, $.proxy(this._removeWrapperClasses, this));
                    }
                    
                    // Focus on menu
                    selectedItem.focus();
                }, this), RENDERING_DELAY);
                
                return;
            }
            // A different menu is open
            else if (this._$menu.find('.menu-wrapper.open').length > 0)
            {
                // Close existing drops
                this._$drops.removeClass('selected');
                this._$drops.attr('aria-selected', 'false');
                this._$drops.attr('aria-expanded', 'false');
                
                // Close existing menus
                this._$wrappers.removeClass('done');
                this._$wrappers.removeClass('open');
                this._$wrappers.removeClass('on');
                this._$wrappers.css('height', '');
                
                // Open new menu
                selectedItem.addClass('selected');
                selectedItem.attr('aria-selected', 'true');
                selectedItem.attr('aria-expanded', 'true');
                selectedWrapper.addClass('on');
                selectedWrapper.addClass('open');
                selectedWrapper.addClass('done');
                
                // Close form errors
                $('#header-send-money-form .error-overlay').remove();
                $('#header-send-money-form .input-wrapper').removeClass('error');
                
                // Add a closer
                selectedWrapper.append(this._createCloser());
                
                // Move back to step one if there is a stepper
                var form = selectedWrapper.find('form');
                if (form.length > 0) this._showFirstStep(form);
                
                // Focus on wrapper
                selectedWrapper.focus();
                
                // Set menu height
                this._setMenuHeight(selectedWrapper, true);
                
                // Stop moving
                this._isMoving = false;
            }
            // Open one
            else
            {
                // Close existing drops
                this._closeAllMenus();
                
                // Open new menu
                selectedItem.addClass('selected');
                selectedItem.attr('aria-selected', 'true');
                selectedItem.attr('aria-expanded', 'true');
                selectedWrapper.addClass('on');
                
                // Mark as moving
                this._isMoving = true;
                
                // Add a closer
                selectedWrapper.append(this._createCloser());
                
                // Move back to step one if there is a stepper
                var form = selectedWrapper.find('form');
                if (form.length > 0) this._showFirstStep(form);
                
                window.setTimeout($.proxy(function()
                {
                    this._$bodyDiv.addClass('menu-open');
                   
                    // Add done when transition is complete
                    if (!Modernizr.csstransitions)
                    {                        
                        selectedWrapper.addClass('done');
                        this._isMoving = false;
                    }
                    else
                    {                         
                        selectedWrapper.one(TRANSITION_END_NAME, $.proxy(function()
                        {
                            selectedWrapper.addClass('done');
                            this._isMoving = false;
                        }, this));
                    }
                    
                    // Set menu height
                    this._setMenuHeight(selectedWrapper, true);
                    selectedWrapper.addClass('open');
                    
                    // Focus on wrapper
                    selectedWrapper.focus();
                }, this), RENDERING_DELAY);
            }
        },
        
        /**
         * Set the menu height used for animations
         */
        _setMenuHeight: function(wrapper, open)
        {
            if (!this._isMobile) return;
            
            if (open)
            {
                wrapper.css('height', wrapper.children().first().height() + 'px');
            }
            else
            {
                wrapper.css('height', '');
            }
        },
        
        /**
         * Fix height bug
         */
        _resizeMobileMenu: function()
        {
            this._$menu.css('height', window.innerHeight + 'px');
        },
        
        /**
         * Scroll to top of page if menu is open
         */
        _scroll: function(e)
        {
            if (this._isOpen && $(window).scrollTop() > 0)
            {
                $(window).scrollTop(0);
                this._$menu.scrollTop(0);
                this._$menu.scrollLeft(0);
                this._resizeMobileMenu();
            }
        },
        
        _removeWrapperClasses: function(e)
        {
            var t = $(e.target);
            
            t.removeClass('done');
            t.removeClass('open');
            t.removeClass('on');
            
            this._isMoving = false;
        },
        
        /**
         * Get first touch
         * 
         * @param {object} e jQuery event object
         */
        _getTouch: function(e)
        {
            // Touchstart on IE
            if (typeof(e.originalEvent.touches) === "undefined" && typeof(e.originalEvent.touches) === "undefined") return e;
            
            return (e.originalEvent.touches) ? e.originalEvent.touches[0] : event.targetTouches[0]; 
        },
        
        /**
         * Handling touch scrolling to allow them to close the menu
         */
        _touchStart: function(e)
        {
            if (!this._isOpen) return;
            
            // IE make sure primary touch
            if ((typeof(window.navigator.msPointerEnabled) !== "undefined" || typeof(window.navigator.pointerEnabled) !== "undefined") && 
                !event.isPrimary) return;
            
            // If not in menu, stop scroll 
            if ($(e.target).closest(this._$menu).length === 0)
            {
                e.preventDefault();
            }
            
            // Record start position
            this._touchStartX = this._lastTouchX = this._getTouch(e).pageX;
            this._touchStartY = this._getTouch(e).pageY;
        },
        
        _touchMove: function(e)
        {
            if (!this._isOpen) return;
            
            // IE make sure primary touch
            if ((typeof(window.navigator.msPointerEnabled) !== "undefined" || typeof(window.navigator.pointerEnabled) !== "undefined") && 
                !e.isPrimary) return;
            
            // Check for IE and pointer move - This is for testing on desktop IE
            if ((e.type === 'pointermove' || e.type === 'MSPointerMove') && 
                ((e.pointerType === e.MSPOINTER_TYPE_TOUCH && e.buttons != 1) || !e.isPrimary)) return;
            
            // Check the menu height to see if it fits
            var wHeight = window.innerHeight,
                menuHeight = this._$menu.get(0).scrollHeight,
                xDelta = this._getTouch(e).pageX - this._touchStartX,
                yDelta = this._getTouch(e).pageY - this._touchStartY;
            
            // Only stop the scroll if the menu is shorter
            if (wHeight >= menuHeight) e.preventDefault();
            
            // If they've moved more than Xpx sideways
            if (xDelta < -X_DELTA)
            {
                e.preventDefault();
                
                // Add body class
                if (this._isTouchMoving === false)
                {
                    this._isTouchMoving = true;
                    this._$bodyDiv.addClass('moving');
                    if (this._useTranslate) 
                    {
                        if (Modernizr.prefixed('transform') === "WebkitTransform")
                        {
                            this._initialOffset = parseInt(this._$bodyDiv.css('-webkit-transform').split(',')[4]);
                        }
                        else
                        {
                            this._initialOffset = parseInt(this._$bodyDiv.css('transform').split(',')[4]);
                        }
                    }
                    else
                    {
                        this._initialOffset = parseInt(this._$bodyDiv.css('left'));
                    }
                }
            }
            
            // Move the body
            if (this._isTouchMoving)
            {
                window.setTimeout($.proxy(function()
                {
                    if (this._useTranslate) 
                    {
                        this._$bodyDiv.css('-webkit-transform', 'translate3d(' + (this._initialOffset+xDelta) + 'px,0,0)');
                        this._$bodyDiv.css('transform', 'translate(' + (this._initialOffset+xDelta) + 'px,0)');
                    }
                    else
                    {
                        this._$bodyDiv.css('left', (this._initialOffset+xDelta) + 'px');
                    }
                    
                }, this), RENDERING_DELAY);
                
                // Direction
                this._lastDirection = this._getTouch(e).pageX - this._lastTouchX;
            }
            
            // Store last touch position
            this._lastTouchX = this._getTouch(e).pageX;
        },
        
        _touchEnd: function(e)
        {
            if (!this._isOpen) return;
            
            // IE make sure primary touch
            if ((typeof(window.navigator.msPointerEnabled) !== "undefined" || typeof(window.navigator.pointerEnabled) !== "undefined") && 
                !e.isPrimary) return;
            
            // Turn off moving
            if (this._isTouchMoving)
            {
                this._isTouchMoving = false;
                this._$bodyDiv.removeClass('moving');
                
                window.setTimeout($.proxy(function()
                {
                    // Reset css value
                    this._$bodyDiv.css('left', '').css('-webkit-transform', '').css('transform', '');
                    
                    // Close
                    if (this._lastDirection < 0)
                    {
                        this.close();
                    }
                }, this), RENDERING_DELAY);
            }
            
            // Reset
            this._touchStartX = null;
            this._touchStartY = null;
        },
        
        /**
         * Open/Close the menu (mobile)
         */
        _toggleState: function(e)
        {
            if (e) e.preventDefault();
            
            // Do nothing during animation
            if (this._$body.hasClass('on') && !this._isOpen) return;
            
            // Close
            if (this._isOpen)
            {
                this.close();
            }
            // Open
            else
            {
                this._$body.addClass('on');
                this._$body.addClass('open');
                this._isOpen = true;
                this._$menuButton.attr('aria-expanded', 'true');
                this._$menu.attr('aria-hidden', 'false');
                
                // Focus on first item
                this._$drops.first().focus();
            }
        },
        
        /**
         * Close Menu (mobile)
         */
        close: function()
        {
            // Already closed
            if (!this._isOpen) return;
            
            if (!Modernizr.csstransitions)
            {
                this._$body.removeClass('on');
            }
            else
            {
                this._$body.one(TRANSITION_END_NAME, $.proxy(this._removeBodyClass, this));
            }
            
            this._$body.removeClass('open');
            this._isOpen = false;
            this._closeAllMenus();
            this._$menuButton.attr('aria-expanded', 'false');
            this._$menu.attr('aria-hidden', 'true');
            
            // Focus on menu button
            this._$menuButton.focus();
        },
        
        _removeBodyClass: function()
        {
            this._$body.removeClass('on');
        },
        
        _closeAllMenus: function()
        {
            // Close existing drops
            this._$drops.removeClass('selected');
            this._$drops.attr('aria-selected', 'false');
            this._$drops.attr('aria-expanded', 'false');
            
            // Close existing menus
            this._$wrappers.removeClass('done');
            this._$wrappers.removeClass('open');
            this._$wrappers.removeClass('on');
            this._$bodyDiv.removeClass('menu-open');
        },
        
        /**
         * Validates the send money form
         */
        _validateSendMoney: function()
        {
            return this._validator.form();
        },
        
        /**
         * Form stepper
         */
        _formStepper: function(e)
        {
            var t = $(e.target);
            
            // Check type
            if (e.type === 'LOGGED_IN')
            {
                // Advance to next step
                this._showNextStep($('#header-send-money-form'));
            }
            else if (t.get(0).tagName === 'FORM')
            {
                // No stepper
                if (!t.hasClass('form-stepper')) return;
                
                // Look for current step
                var step = t.find('.step.shown');
                
                // No selected step
                if (step.length === 0) return;
                
                // Check for step instructions
                var instruct = step.data('step');
                
                if (instruct === 'step')
                {
                    e.preventDefault();
                    this._showNextStep(t);
                }
                else if(instruct === 'login')
                {
                    e.preventDefault();
                    //this._loginModal.show();
                }
                else if(instruct === 'submit')
                {
                    e.preventDefault();
                    
                    if (!this._validateSendMoney())
                    {
                        // Focus on first error
                        t.find('.input-wrapper.error > input').first().focus();
                        return;
                    }
                    
                    // Submit form
                    t.get(0).submit();
                }
            }
            else if (t.data('step') === 'submit')
            {
                t.closest('form').get(0).submit();
            }
            else if (t.data('step') === 'step')
            {
                e.preventDefault();
                
                this._showNextStep();
            }
            else if (t.data('step') === 'show-login')
            {
                e.preventDefault();
                
                //this._loginModal.show();
            }
        },
        
        _showNextStep: function(form)
        {
            // Check current step
            if (!this._validateSendMoney())
            {
                // Focus on first error
                form.find('.input-wrapper.error > input').first().focus();
                return;
            }
            
            // Get next step
            var steps = form.find('.step'),
                curs = 0,
                els;
            for (var i = 0; i < steps.length; i++)
            {
                if ($(steps[i]).hasClass('shown'))
                {
                    curs = i;
                    break;
                }
            }
            
            // Remove shown
            $(steps[curs]).removeClass('shown');
            
            // Mark as current
            $(steps[curs+1]).addClass('shown');
            
            // Focus on first button or input
            els = $(steps[curs+1]).find('input');
            if (els.length > 0)
            {
                els.first().focus();
                return;
            }
            els = $(steps[curs+1]).find('button');
            if (els.length > 0)
            {
                els.first().focus();
            }
        },
        
        _showFirstStep: function(form)
        {
            var steps = form.find('.step');
            steps.removeClass('shown');
            steps.first().addClass('shown');
        }
    };
})();

/**
 * Handles all header functions in new header
 */
$(function()
{
    var sideMenu,
        loginButton = $('#login-button'),
        insideLoginButton = $('#login-header > form > input[type="submit"]'),
        headerButtons = $('#header-buttons'),
        loginForm = $('#login-header'),
        headerLoginField = $('#login_email'),
        headerPasswordField = $('#login_password'),
        RENDERING_DELAY = (typeof window.mozInnerScreenX != 'undefined') ? 15 : 0,
        forgotPasswordLink = $('#passwordRecovery2'),
        forgotPasswordModal = $('#forgot-password-modal'),
        loginModal = new PAYPAL.Marketing.Modal('#login-modal-1', { minHeight: 350, minWidth: 350 });
    
    // Scroll window
    // Disable scroll fix so app banner shows
    //if ($(window).scrollTop() === 0) window.scrollTo(0, 0);
    
    // Header menu
    new PAYPAL.Marketing.HeaderMenu($('#menu-button'), $('#main-menu'));
    
    // Fake placeholders
    if (typeof($('#header-send-menu input[type=text]').placeholder) !== 'undefined')
    {
        var els = [$('#header-send-menu input[type=text]'),
                   $('#header-send-menu input[type=number]'),
                   $('#header-req-menu input[type=email]'),
                   $('#header-req-menu input[type=number]'),
                   $('#login-header input[type=email]'),
                   $('#login-header input[type=password]')];
        
        for (var i = 0; i < els.length; i++)
        {
            els[i].placeholder();
            // Override top
            $(els[i]).css('top', '0').css('left', '0');
        }
    }
    
    // Define login link as button
    loginButton.attr('role', 'button');
    
    // Show login lightbox for tablet and phone
    if ($(document.documentElement).data('device-type') !== 'dedicated')
    {
        // Login lightbox
        loginButton.on('click', function(e)
        {
            e.preventDefault();
            
            loginModal.show();
        });
        
        // Listen for modal
        $(window).on('MODAL_OPEN', function(e, mo)
        {
            // Find inputs
            var m = $(mo),
                inputs = m.find('input');
            
            // Make sure this is a login modal
            if (!m.hasClass('login-modal')) return;
            
            // Iterate through until we find a non-empty one
            for (var i=0; i < inputs.length; i++)
            {
                var inp = $(inputs[i]);
                
                if ((inp.attr('type') === 'email' || inp.attr('type') === 'password') && inp.val() === '')
                {
                    inp.focus();
                    break;
                }
            }
        });
    }
    // Show login form
    else
    {
        loginButton.on('click', function(e)
        {
            e.preventDefault();
            
            // Hide buttons
            headerButtons.addClass('closed');
            
            // Show login form
            loginForm.addClass('open');
            
            // Focus on email field
            if (headerLoginField.val() === '')
            {
                headerLoginField.focus();
            }
            else
            {
                headerPasswordField.focus();
            }
            
            // Remove opening class
            window.setTimeout(function()
            {
                insideLoginButton.removeClass('start');
                insideLoginButton.removeClass('btn-secondary');
            }, RENDERING_DELAY);
        });
        
        // Forgot password
        if (forgotPasswordModal.length > 0)
        {
            // Make sure it wants the modal
            if (!forgotPasswordLink.hasClass('useModal')) return;
            
            forgotPasswordModal = new PAYPAL.Marketing.Modal('#forgot-password-modal', { minHeight: 250, minWidth: 380, closeOnEscape: false });
            forgotPasswordLink.on('click', function(e)
            {
                e.preventDefault();
                forgotPasswordModal.show();
            });
        }
        
        // PITA tab index solution
        var tabElements = loginForm.find('[data-tabindex]').sort(function(a, b)
        {
            return +a.getAttribute('data-tabindex') - b.getAttribute('data-tabindex');
        });

        loginForm.on('keydown', '[data-tabindex]', function(e)
        {
            if (e.keyCode === 9)
            {
                var index = tabElements.index(e.target);
                
                // Shift + Tab keys
                if (e.shiftKey && index > 0)
                {
                    e.preventDefault();
                    index--;                  
                    tabElements[index].focus();
                }
                // Tab keys
                else if (!e.shiftKey && index < tabElements.length - 1)
                {
                    e.preventDefault();
                    index++;                       
                    tabElements[index].focus();
                }
            }
        });
    }
    
    // Turn off focus rects
    $(window).on('mousedown keydown', function(e)
    {
        if (e.type === 'mousedown')
        {
            if (!$(document.documentElement).hasClass('focus-off')) $(document.documentElement).addClass('focus-off');
        }
        else
        {
            if ($(document.documentElement).hasClass('focus-off')) $(document.documentElement).removeClass('focus-off');
        }
    });
});

/**
 * @name Scrolling Animation
 * @author Jason Gabriele <jgabriele@paypal.com>
 * 
 * @fileOverview Animates elements based on values specified in data attributes
 *               and the page's current scroll position. Make sure elements have
 *               the class 'scroll-animate'. Transforms use integers except scale.
 * 
 * Supported transforms: translateX, translateY, translateZ, rotate, rotateX,
 *                       rotateY, skewX, skewY, scale, scaleX, scaleY, scaleZ, 
 *                       width, height, opacity
 * 
 * Supported browsers: 
 *   - Modern versions of Chrome, Safari, Firefox, IE10 
 *   - IE 9 doesn't support 3D transforms but other things should work
 *
 * Unsupported browsers:
 * - iOS 5+ (animations are paused during scroll because Safari pauses JS execution)
 * - IE 8
 * 
 * @example <div id="container"> 
 *              <div class="scroll-animate" data-translate-y-start="0" data-translate-y-end="20"></div> 
 *              <div class="scroll-animate" data-translate-y-start="10">Assumes 0 end point</div> 
 *              <div></div> 
 *              <div class="scroll-animate" data-translate-y-start="0" 
 *                   data-translate-y-end="-42">Negative values supported</div>
 *          </div>
 * 
 * pageJS:
 * new PAYPAL.Marketing.ScrollingAnimation('#container', 400, 1000);
 *
 *
 * Some animation options:
 * data-scale-start="0" data-scale-end="1"
 * data-rotate-start="-85" data-rotate-end="-90"
 * data-height-start="500" data-height-end="350"
 * data-opacity-start="0" data-opacity-end="1"
 * data-translate-y-start="0" data-translate-y-end="20"
 */
$.fn.namespace("PAYPAL.Marketing");

(function()
{
    "use strict";
    
    // For performance purposes, set a floor on how often the animation function is called
    var MINIMUM_EVENT_TIMING = 6;

    /**
     * @constructor
     * @this ScrollingAnimation
     * @param {object|string} container The container holding the animated elements. The
     *                                  container can have animations itself
     * @param {number} beginPoint Number of pixels above container to start animation
     * @param {number} height Number of pixels from start to completion of animation
     * @param {boolean} findChildren Recursively find any elements below the container 
     *                               that have scroll animations (Defaults to true)
     */
    PAYPAL.Marketing.ScrollingAnimation = function(container, beginPoint, height)
    {
        // Check for previous run
        if ($(document.documentElement).hasClass('no-scrollinganimation')) return;
        
        // Check for transforms
        var prefixes = 'transform WebkitTransform MozTransform msTransform'.split(' '),
            el = document.createElement('div'),
            support = false,
            findChildren = true;
    
        for (var i = 0; i < prefixes.length; i++)
        {
            support = el.style[prefixes[i]] !== undefined;
            
            if (support) break;
        }
        
        // No children
        if (arguments.length > 3) findChildren = !!arguments[3];
        
        // Disable for iOS because the animations are paused during scroll
        if (/iPad/.test(navigator.userAgent) || /iPhone/.test(navigator.userAgent))
        {
            support = false;
        }
        
        // If no transforms, then don't bother
        if (support === false)
        {
            // Add modernizer-style class name to body
            $(document.documentElement).addClass('no-scrollinganimation');
            return;
        }
        
        this._$container = $(container);
        this._startPoint = Math.round(this._$container.offset().top - beginPoint);
        this._endPoint = Math.round(this._startPoint + height);
        this._$elements = [];
        
        // Find elements to animate
        if (findChildren) this._$elements = this._$container.find(".scroll-animate");
        
        // Append container if it has the right class
        if (this._$container.hasClass("scroll-animate")) this._$elements.push(this._$container);

        // Set initially at negative infinity
        this._lastScroll = -Infinity;

        this._attachEvents();
        
        // Initial run
        this._scroll();
    }

    PAYPAL.Marketing.ScrollingAnimation.prototype = {
        _events : null,

        /**
         * Remove all events
         */
        destroy : function()
        {
            this._detachEvents();
        },

        /**
         * Are events attached?
         */
        _eventsAttached : function()
        {
            return this._events !== null;
        },

        /**
         * Attach all events
         */
        _attachEvents : function()
        {
            // Already attached
            if (this._eventsAttached()) return;

            this._events = [];
            this._delayedCommands = {};
            
            // Scroll event
            this._events.push($(window).on("scroll resize", $.proxy(function()
            {
                // Clear an existing timeout if one is set
                if (this._delayedCommands['scroll'])
                {
                    window.clearTimeout(this._delayedCommands['scroll']);
                    this._delayedCommands['scroll'] = null;
                }
                
                // Set timeout for scroll event. Set to a minimum of 10 milliseconds so its not called constantly
                this._delayedCommands['scroll'] = window.setTimeout($.proxy(function()
                {
                    this._scroll();
                    
                    // Clear saved command
                    this._delayedCommands['scroll'] = null;
                }, this), MINIMUM_EVENT_TIMING);
            }, this)));
        },

        /**
         * Detach Events
         */
        _detachEvents : function()
        {
            if ($.isArray(this._events))
            {
                $.each(this._events, function(i, ev)
                {
                    ev.off();
                });

                this._events = null;
            }
        },

        _scroll : function(e)
        {
            // Scrolltop + Half height of browser viewport
            var st = $(window).scrollTop() + Math.round($(window).height() / 2),
                update = false, 
                availableTransforms = [ "translateX", "translateY", "translateZ", 
                                        "rotate", "rotateX", "rotateY", "rotateZ", 
                                        "skewX", "skewY", 
                                        "scale", "scaleX", "scaleY", "scaleZ",
                                        "width", "height", "opacity" ];

            // Don't run if same value
            if (st === this._lastScroll) return;

            // In bounds
            if (st >= this._startPoint && st <= this._endPoint)
            {
                update = true;
                this._lastScroll = st;
            }
            // Run update when out of region but only once
            else if ((st > this._endPoint && this._lastScroll !== Infinity) || 
                     (st < this._startPoint && this._lastScroll !== -Infinity))
            {
                this._lastScroll = (st < this._startPoint) ? -Infinity : Infinity;
                update = true;
            }
            
            // In the region
            if (update)
            {
                // Find percentage done
                var per = (st - this._startPoint) / (this._endPoint - this._startPoint);

                // Normalize
                if (per < 0) per = 0;
                if (per > 1) per = 1;

                // Loop through elements
                $(this._$elements).each(function(i, el)
                {
                    var b = 0, e = 0, usedTransforms = {}, ct = "", 
                        w = null, h = null, op = null;

                    el = $(el);

                    // Get data
                    var d = el.data();
                    
                    // IE gets data attributes in reverse, so we need to manually iterate through them and create a reversed list
                    if(/*@cc_on!@*/0)
                    {
                        var td = [], nd = {};
                        
                        for (var i in d)
                        {
                            td.push(i);
                        }
                        
                        td.reverse();
                        
                        for (var i = 0; i < td.length; i++)
                        {
                            nd[td[i]] = d[td[i]];
                        }
                        
                        d = nd;
                    }
                    
                    // Get list of transforms and end values
                    for (var i in d)
                    {
                        // Check if the value ends with Start
                        if (i.substring(i.length - 5) !== "Start") continue;

                        var tName = i.substring(0, i.length - 5);

                        // Only certain transforms are working
                        if ($.inArray(tName, availableTransforms) === false) continue;

                        b = parseFloat(d[i]);
                        e = 0;
                        if (typeof (d[tName + "End"]) !== "undefined")
                        {
                            e = parseFloat(d[tName + "End"]);
                        }

                        // Calc offset
                        usedTransforms[tName] = b + ((e - b) * per);
                    }

                    // Build css
                    if ($.isEmptyObject(usedTransforms)) return;

                    // Transform is first
                    var transX = (typeof(usedTransforms["translateX"]) !== "undefined") ? usedTransforms["translateX"] : 0, 
                        transY = (typeof(usedTransforms["translateY"]) !== "undefined") ? usedTransforms["translateY"] : 0, 
                        transZ = (typeof(usedTransforms["translateZ"]) !== "undefined") ? usedTransforms["translateZ"] : 0;

                    // IE 9
                    if (typeof(document.body.style.transform) === "undefined" && 
                        typeof(document.body.style.webkitTransform) === "undefined")
                    {
                        ct += "translate(" + Math.round(transX) + "px," + Math.round(transY) + "px) ";
                    }
                    // Everything else
                    else
                    {
                        ct += "translate3d(" + Math.round(transX) + "px," + Math.round(transY) + "px," + Math.round(transZ) + "px) ";
                    }

                    for (var i in usedTransforms)
                    {
                        // Width and height
                        if (i === "width" || i === "height")
                        {
                            if (i === "width") w = usedTransforms[i];
                            else h = usedTransforms[i];
                            continue;
                        }
                        
                        // Opacity
                        if (i === "opacity")
                        {
                            op = usedTransforms[i];
                            continue;
                        }
                        
                        // Skip translate
                        if (i.substring(0, 9) === "translate") continue;

                        // Round if not scale or opacity
                        if (i.substring(0, 5) !== "scale" && i.substring(0, 7) !== "opacity") usedTransforms[i] = Math.round(usedTransforms[i]);
                        
                        // Deg or Px
                        var unit = (i.substring(0, 6) === "rotate" || i.substring(0, 4) === "skew") ? "deg" : "px";
                        
                        // No unit for scale
                        if (i.substring(0, 5) === "scale") unit = "";

                        // Append transform
                        ct += i + "(" + usedTransforms[i] + unit + ") ";
                    }

                    // Set css in timeout to stop recalc
                    window.setTimeout(function()
                    {
                        var ne = el, nt = ct, nw = w, nh = h, nop = op;
                        
                        ne.css("-webkit-transform", nt);
                        ne.css("-ms-transform", nt);
                        ne.css("transform", nt);
                        
                        // Other properties
                        if (nw != "") ne.css("width", nw + "px");
                        if (nh != "") ne.css("height", nh + "px");
                        if (nop != "") ne.css("opacity", nop);
                    }, 0);
                });
            }
        }
    };
})();

/**
 * Automatic scrolling animations for editorial bgs
 */
(function()
{
    // Turn off automatic parallax scrolling
    // return;
    
    // Dedicated only
    if ($(document.documentElement).data('device-type') !== 'dedicated') return;
    
    // Don't run in IE9 because it's too slow
    /*@cc_on
    if (@_jscript_version < 10) return;
    @*/
    
    // Hero - Only enable with query string right now until we can test w/ sitecatalyst in production
    $('#main > .hero-bg').each(function(i, item)
    {
        if ($(item).hasClass('no-parallax') || $(item).hasClass('dark')) return;
        
        new PAYPAL.Marketing.ScrollingAnimation(item, 0, $(window).height() + 300);
        
        $(item).addClass('parallax');
    });
    
    // Regular editorials
    $('#main > .editorial-bg').each(function(i, item)
    {
        if ($(item).hasClass('no-parallax') || $(item).hasClass('dark')) return;
        
        new PAYPAL.Marketing.ScrollingAnimation(item, 300, $(window).height() + 500);
        
        $(item).addClass('parallax');
    });
})();

$(window).load(function() {

	/* Add external pixel tracking after entire page is loaded.
	*
	* HTML: <div class="hide externalTrackingSrc">www.yahoo.com/someURL</div> <div class="hide externalTrackingSrc">www.google.com/someURL?something=blah</div>
	* note: important to have the class="externalTrackingSrc".
	*
	* Results:
	* 	<div id="externalTracking">
	* 		<img src="www.yahoo.com/someURL?ts=12345" height="1" width="1" alt="">
	* 		<img src="www.google.com/someURL?something=blah&ts=12345" height="1" width="1" alt="">
	*	</div>
	*/
	var mpp2ExtTrackingID = $('#externalTracking')[0];
	/* Check if not exist */
	if (mpp2ExtTrackingID == null) {
		var elem = $('.externalTrackingSrc')[0];
		if (elem) {
			/* Get all external tracking URLs and append the image(s) to the html body. */
			var extTrackingImg = $('.externalTrackingSrc').map(function() {
				var uniqueID = new Date().getTime(); //will print out a unix timestamp

				if ($(this).text().indexOf("?") >= 0) {
					var ampOrQmark = "&";
				} else {
					var ampOrQmark = "?";
				}

				var trackSRC = $(this).text() + ampOrQmark + "ts=" + uniqueID;
				var trackImage = '<img src="' + $.trim(trackSRC) + '" height="1" width="1" alt="" />';
				return trackImage;
			}).get().join(' ');

			var trackingContent = '<div id="externalTracking">' + extTrackingImg + '</div>';

			$("body").append(trackingContent);
		}
	}

});

