var swfobject=function(){function o(){if(!A){try{var a=h.getElementsByTagName("body")[0].appendChild(h.createElement("span"));a.parentNode.removeChild(a)}catch(b){return}A=true;a=G.length;for(var c=0;c<a;c++)G[c]()}}function d(a){if(A)a();else G[G.length]=a}function k(a){if(typeof q.addEventListener!=l)q.addEventListener("load",a,false);else if(typeof h.addEventListener!=l)h.addEventListener("load",a,false);else if(typeof q.attachEvent!=l)aa(q,"onload",a);else if(typeof q.onload=="function"){var b=
q.onload;q.onload=function(){b();a()}}else q.onload=a}function p(){var a=h.getElementsByTagName("body")[0],b=h.createElement(u);b.setAttribute("type",H);var c=a.appendChild(b);if(c){var e=0;(function(){if(typeof c.GetVariable!=l){var f=c.GetVariable("$version");if(f){f=f.split(" ")[1].split(",");g.pv=[parseInt(f[0],10),parseInt(f[1],10),parseInt(f[2],10)]}}else if(e<10){e++;setTimeout(arguments.callee,10);return}a.removeChild(b);c=null;s()})()}else s()}function s(){var a=x.length;if(a>0)for(var b=
0;b<a;b++){var c=x[b].id,e=x[b].callbackFn,f={success:false,id:c};if(g.pv[0]>0){var j=t(c);if(j)if(I(x[b].swfVersion)&&!(g.wk&&g.wk<312)){B(c,true);if(e){f.success=true;f.ref=D(c);e(f)}}else if(x[b].expressInstall&&r()){f={};f.data=x[b].expressInstall;f.width=j.getAttribute("width")||"0";f.height=j.getAttribute("height")||"0";if(j.getAttribute("class"))f.styleclass=j.getAttribute("class");if(j.getAttribute("align"))f.align=j.getAttribute("align");var i={};j=j.getElementsByTagName("param");for(var m=
j.length,n=0;n<m;n++)if(j[n].getAttribute("name").toLowerCase()!="movie")i[j[n].getAttribute("name")]=j[n].getAttribute("value");P(f,i,c,e)}else{ba(j);e&&e(f)}}else{B(c,true);if(e){if((c=D(c))&&typeof c.SetVariable!=l){f.success=true;f.ref=c}e(f)}}}}function D(a){var b=null;if((a=t(a))&&a.nodeName=="OBJECT")if(typeof a.SetVariable!=l)b=a;else if(a=a.getElementsByTagName(u)[0])b=a;return b}function r(){return!J&&I("6.0.65")&&(g.win||g.mac)&&!(g.wk&&g.wk<312)}function P(a,b,c,e){J=true;Q=e||null;U=
{success:false,id:c};var f=t(c);if(f){if(f.nodeName=="OBJECT"){E=R(f);K=null}else{E=f;K=c}a.id=V;if(typeof a.width==l||!/%$/.test(a.width)&&parseInt(a.width,10)<310)a.width="310";if(typeof a.height==l||!/%$/.test(a.height)&&parseInt(a.height,10)<137)a.height="137";h.title=h.title.slice(0,47)+" - Flash Player Installation";e=g.ie&&g.win?"ActiveX":"PlugIn";e="MMredirectURL="+q.location.toString().replace(/&/g,"%26")+"&MMplayerType="+e+"&MMdoctitle="+h.title;if(typeof b.flashvars!=l)b.flashvars+="&"+
e;else b.flashvars=e;if(g.ie&&g.win&&f.readyState!=4){e=h.createElement("div");c+="SWFObjectNew";e.setAttribute("id",c);f.parentNode.insertBefore(e,f);f.style.display="none";(function(){f.readyState==4?f.parentNode.removeChild(f):setTimeout(arguments.callee,10)})()}S(a,b,c)}}function ba(a){if(g.ie&&g.win&&a.readyState!=4){var b=h.createElement("div");a.parentNode.insertBefore(b,a);b.parentNode.replaceChild(R(a),b);a.style.display="none";(function(){a.readyState==4?a.parentNode.removeChild(a):setTimeout(arguments.callee,
10)})()}else a.parentNode.replaceChild(R(a),a)}function R(a){var b=h.createElement("div");if(g.win&&g.ie)b.innerHTML=a.innerHTML;else if(a=a.getElementsByTagName(u)[0])if(a=a.childNodes)for(var c=a.length,e=0;e<c;e++)!(a[e].nodeType==1&&a[e].nodeName=="PARAM")&&a[e].nodeType!=8&&b.appendChild(a[e].cloneNode(true));return b}function S(a,b,c){var e,f=t(c);if(g.wk&&g.wk<312)return e;if(f){if(typeof a.id==l)a.id=c;if(g.ie&&g.win){var j="",i;for(i in a)if(a[i]!=Object.prototype[i])if(i.toLowerCase()==
"data")b.movie=a[i];else if(i.toLowerCase()=="styleclass")j+=' class="'+a[i]+'"';else if(i.toLowerCase()!="classid")j+=" "+i+'="'+a[i]+'"';i="";for(var m in b)if(b[m]!=Object.prototype[m])i+='<param name="'+m+'" value="'+b[m]+'" />';f.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+j+">"+i+"</object>";L[L.length]=a.id;e=t(a.id)}else{m=h.createElement(u);m.setAttribute("type",H);for(var n in a)if(a[n]!=Object.prototype[n])if(n.toLowerCase()=="styleclass")m.setAttribute("class",
a[n]);else n.toLowerCase()!="classid"&&m.setAttribute(n,a[n]);for(j in b)if(b[j]!=Object.prototype[j]&&j.toLowerCase()!="movie"){a=m;i=j;n=b[j];c=h.createElement("param");c.setAttribute("name",i);c.setAttribute("value",n);a.appendChild(c)}f.parentNode.replaceChild(m,f);e=m}}return e}function W(a){var b=t(a);if(b&&b.nodeName=="OBJECT")if(g.ie&&g.win){b.style.display="none";(function(){if(b.readyState==4){var c=t(a);if(c){for(var e in c)if(typeof c[e]=="function")c[e]=null;c.parentNode.removeChild(c)}}else setTimeout(arguments.callee,
10)})()}else b.parentNode.removeChild(b)}function t(a){var b=null;try{b=h.getElementById(a)}catch(c){}return b}function aa(a,b,c){a.attachEvent(b,c);C[C.length]=[a,b,c]}function I(a){var b=g.pv;a=a.split(".");a[0]=parseInt(a[0],10);a[1]=parseInt(a[1],10)||0;a[2]=parseInt(a[2],10)||0;return b[0]>a[0]||b[0]==a[0]&&b[1]>a[1]||b[0]==a[0]&&b[1]==a[1]&&b[2]>=a[2]?true:false}function X(a,b,c,e){if(!(g.ie&&g.mac)){var f=h.getElementsByTagName("head")[0];if(f){c=c&&typeof c=="string"?c:"screen";if(e)T=v=null;
if(!v||T!=c){e=h.createElement("style");e.setAttribute("type","text/css");e.setAttribute("media",c);v=f.appendChild(e);if(g.ie&&g.win&&typeof h.styleSheets!=l&&h.styleSheets.length>0)v=h.styleSheets[h.styleSheets.length-1];T=c}if(g.ie&&g.win)v&&typeof v.addRule==u&&v.addRule(a,b);else v&&typeof h.createTextNode!=l&&v.appendChild(h.createTextNode(a+" {"+b+"}"))}}}function B(a,b){if(Y){var c=b?"visible":"hidden";if(A&&t(a))t(a).style.visibility=c;else X("#"+a,"visibility:"+c)}}function Z(a){return/[\\\"<>\.;]/.exec(a)!=
null&&typeof encodeURIComponent!=l?encodeURIComponent(a):a}var l="undefined",u="object",H="application/x-shockwave-flash",V="SWFObjectExprInst",q=window,h=document,y=navigator,$=false,G=[function(){$?p():s()}],x=[],L=[],C=[],E,K,Q,U,A=false,J=false,v,T,Y=true,g=function(){var a=typeof h.getElementById!=l&&typeof h.getElementsByTagName!=l&&typeof h.createElement!=l,b=y.userAgent.toLowerCase(),c=y.platform.toLowerCase(),e=c?/win/.test(c):/win/.test(b);c=c?/mac/.test(c):/mac/.test(b);b=/webkit/.test(b)?
parseFloat(b.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false;var f=!+"\u000b1",j=[0,0,0],i=null;if(typeof y.plugins!=l&&typeof y.plugins["Shockwave Flash"]==u){if((i=y.plugins["Shockwave Flash"].description)&&!(typeof y.mimeTypes!=l&&y.mimeTypes[H]&&!y.mimeTypes[H].enabledPlugin)){$=true;f=false;i=i.replace(/^.*\s+(\S+\s+\S+$)/,"$1");j[0]=parseInt(i.replace(/^(.*)\..*$/,"$1"),10);j[1]=parseInt(i.replace(/^.*\.(.*)\s.*$/,"$1"),10);j[2]=/[a-zA-Z]/.test(i)?parseInt(i.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),
10):0}}else if(typeof q.ActiveXObject!=l)try{var m=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(m)if(i=m.GetVariable("$version")){f=true;i=i.split(" ")[1].split(",");j=[parseInt(i[0],10),parseInt(i[1],10),parseInt(i[2],10)]}}catch(n){}return{w3:a,pv:j,wk:b,ie:f,win:e,mac:c}}();(function(){if(g.w3){if(typeof h.readyState!=l&&h.readyState=="complete"||typeof h.readyState==l&&(h.getElementsByTagName("body")[0]||h.body))o();if(!A){typeof h.addEventListener!=l&&h.addEventListener("DOMContentLoaded",
o,false);if(g.ie&&g.win){h.attachEvent("onreadystatechange",function(){if(h.readyState=="complete"){h.detachEvent("onreadystatechange",arguments.callee);o()}});q==top&&function(){if(!A){try{h.documentElement.doScroll("left")}catch(a){setTimeout(arguments.callee,0);return}o()}}()}g.wk&&function(){A||(/loaded|complete/.test(h.readyState)?o():setTimeout(arguments.callee,0))}();k(o)}}})();(function(){g.ie&&g.win&&window.attachEvent("onunload",function(){for(var a=C.length,b=0;b<a;b++)C[b][0].detachEvent(C[b][1],
C[b][2]);a=L.length;for(b=0;b<a;b++)W(L[b]);for(var c in g)g[c]=null;g=null;for(var e in swfobject)swfobject[e]=null;swfobject=null})})();return{registerObject:function(a,b,c,e){if(g.w3&&a&&b){var f={};f.id=a;f.swfVersion=b;f.expressInstall=c;f.callbackFn=e;x[x.length]=f;B(a,false)}else e&&e({success:false,id:a})},getObjectById:function(a){if(g.w3)return D(a)},embedSWF:function(a,b,c,e,f,j,i,m,n,F){var M={success:false,id:b};if(g.w3&&!(g.wk&&g.wk<312)&&a&&b&&c&&e&&f){B(b,false);d(function(){c+="";
e+="";var z={};if(n&&typeof n===u)for(var w in n)z[w]=n[w];z.data=a;z.width=c;z.height=e;w={};if(m&&typeof m===u)for(var N in m)w[N]=m[N];if(i&&typeof i===u)for(var O in i)if(typeof w.flashvars!=l)w.flashvars+="&"+O+"="+i[O];else w.flashvars=O+"="+i[O];if(I(f)){N=S(z,w,b);z.id==b&&B(b,true);M.success=true;M.ref=N}else if(j&&r()){z.data=j;P(z,w,b,F);return}else B(b,true);F&&F(M)})}else F&&F(M)},switchOffAutoHideShow:function(){Y=false},ua:g,getFlashPlayerVersion:function(){return{major:g.pv[0],minor:g.pv[1],
release:g.pv[2]}},hasFlashPlayerVersion:I,createSWF:function(a,b,c){if(g.w3)return S(a,b,c)},showExpressInstall:function(a,b,c,e){g.w3&&r()&&P(a,b,c,e)},removeSWF:function(a){g.w3&&W(a)},createCSS:function(a,b,c,e){g.w3&&X(a,b,c,e)},addDomLoadEvent:d,addLoadEvent:k,getQueryParamValue:function(a){var b=h.location.search||h.location.hash;if(b){if(/\?/.test(b))b=b.split("?")[1];if(a==null)return Z(b);b=b.split("&");for(var c=0;c<b.length;c++)if(b[c].substring(0,b[c].indexOf("="))==a)return Z(b[c].substring(b[c].indexOf("=")+
1))}return""},expressInstallCallback:function(){if(J){var a=t(V);if(a&&E){a.parentNode.replaceChild(E,a);if(K){B(K,true);if(g.ie&&g.win)E.style.display="block"}Q&&Q(U)}J=false}}}}();
(function(){if(!window.WebSocket){var o=window.console;if(!o||!o.log||!o.error)o={log:function(){},error:function(){}};if(swfobject.hasFlashPlayerVersion("10.0.0")){location.protocol=="file:"&&o.error("WARNING: web-socket-js doesn't work in file:///... URL unless you set Flash Security Settings properly. Open the page via Web server i.e. http://...");WebSocket=function(d,k,p,s,D){var r=this;r.__id=WebSocket.__nextId++;WebSocket.__instances[r.__id]=r;r.readyState=WebSocket.CONNECTING;r.bufferedAmount=
0;r.__events={};setTimeout(function(){WebSocket.__addTask(function(){WebSocket.__flash.create(r.__id,d,k,p||null,s||0,D||null)})},0)};WebSocket.prototype.send=function(d){if(this.readyState==WebSocket.CONNECTING)throw"INVALID_STATE_ERR: Web Socket connection has not been established";d=WebSocket.__flash.send(this.__id,encodeURIComponent(d));if(d<0)return true;else{this.bufferedAmount+=d;return false}};WebSocket.prototype.close=function(){if(!(this.readyState==WebSocket.CLOSED||this.readyState==WebSocket.CLOSING)){this.readyState=
WebSocket.CLOSING;WebSocket.__flash.close(this.__id)}};WebSocket.prototype.addEventListener=function(d,k){d in this.__events||(this.__events[d]=[]);this.__events[d].push(k)};WebSocket.prototype.removeEventListener=function(d,k){if(d in this.__events)for(var p=this.__events[d],s=p.length-1;s>=0;--s)if(p[s]===k){p.splice(s,1);break}};WebSocket.prototype.dispatchEvent=function(d){for(var k=this.__events[d.type]||[],p=0;p<k.length;++p)k[p](d);(k=this["on"+d.type])&&k(d)};WebSocket.prototype.__handleEvent=
function(d){if("readyState"in d)this.readyState=d.readyState;if(d.type=="open"||d.type=="error")d=this.__createSimpleEvent(d.type);else if(d.type=="close")d=this.__createSimpleEvent("close");else if(d.type=="message")d=this.__createMessageEvent("message",decodeURIComponent(d.message));else throw"unknown event type: "+d.type;this.dispatchEvent(d)};WebSocket.prototype.__createSimpleEvent=function(d){if(document.createEvent&&window.Event){var k=document.createEvent("Event");k.initEvent(d,false,false);
return k}else return{type:d,bubbles:false,cancelable:false}};WebSocket.prototype.__createMessageEvent=function(d,k){if(document.createEvent&&window.MessageEvent&&!window.opera){var p=document.createEvent("MessageEvent");p.initMessageEvent("message",false,false,k,null,null,window,null);return p}else return{type:d,data:k,bubbles:false,cancelable:false}};WebSocket.CONNECTING=0;WebSocket.OPEN=1;WebSocket.CLOSING=2;WebSocket.CLOSED=3;WebSocket.__flash=null;WebSocket.__instances={};WebSocket.__tasks=[];
WebSocket.__nextId=0;WebSocket.loadFlashPolicyFile=function(d){WebSocket.__addTask(function(){WebSocket.__flash.loadManualPolicyFile(d)})};WebSocket.__initialize=function(){if(!WebSocket.__flash){if(WebSocket.__swfLocation)window.WEB_SOCKET_SWF_LOCATION=WebSocket.__swfLocation;if(window.WEB_SOCKET_SWF_LOCATION){var d=document.createElement("div");d.id="webSocketContainer";d.style.position="absolute";if(WebSocket.__isFlashLite()){d.style.left="0px";d.style.top="0px"}else{d.style.left="-100px";d.style.top=
"-100px"}var k=document.createElement("div");k.id="webSocketFlash";d.appendChild(k);document.body.appendChild(d);swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION,"webSocketFlash","1","1","10.0.0",null,null,{hasPriority:true,swliveconnect:true,allowScriptAccess:"always"},null,function(p){p.success||o.error("[WebSocket] swfobject.embedSWF failed")})}else o.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf")}};WebSocket.__onFlashInitialized=function(){setTimeout(function(){WebSocket.__flash=
document.getElementById("webSocketFlash");WebSocket.__flash.setCallerUrl(location.href);WebSocket.__flash.setDebug(!!window.WEB_SOCKET_DEBUG);for(var d=0;d<WebSocket.__tasks.length;++d)WebSocket.__tasks[d]();WebSocket.__tasks=[]},0)};WebSocket.__onFlashEvent=function(){setTimeout(function(){try{for(var d=WebSocket.__flash.receiveEvents(),k=0;k<d.length;++k)WebSocket.__instances[d[k].webSocketId].__handleEvent(d[k])}catch(p){o.error(p)}},0);return true};WebSocket.__log=function(d){o.log(decodeURIComponent(d))};
WebSocket.__error=function(d){o.error(decodeURIComponent(d))};WebSocket.__addTask=function(d){WebSocket.__flash?d():WebSocket.__tasks.push(d)};WebSocket.__isFlashLite=function(){if(!window.navigator||!window.navigator.mimeTypes)return false;var d=window.navigator.mimeTypes["application/x-shockwave-flash"];if(!d||!d.enabledPlugin||!d.enabledPlugin.filename)return false;return d.enabledPlugin.filename.match(/flashlite/i)?true:false};window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION||(window.addEventListener?
window.addEventListener("load",function(){WebSocket.__initialize()},false):window.attachEvent("onload",function(){WebSocket.__initialize()}))}else o.error("Flash Player >= 10.0.0 is required.")}})();